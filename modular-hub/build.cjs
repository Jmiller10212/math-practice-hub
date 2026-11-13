const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=__dirname, read=p=>fs.readFileSync(path.join(root,p),'utf8');
const games=require('./registry.cjs');
const categories={...require('./shared/categories.cjs')};
const seen=new Set();for(const g of games){if(!/^[a-zA-Z][\w-]*$/.test(g.id)||seen.has(g.id))throw Error('Invalid or duplicate game id: '+g.id);seen.add(g.id);if(!g.title||!g.category)throw Error('Missing game metadata');categories[g.category]??=[g.categoryLabel||g.category,g.categoryDescription||'Choose an exercise to begin.'];}
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const inject=s=>s.replace(/\/\* @include ([\w/.-]+) \*\//g,(_,p)=>inject(read(p))).replaceAll('{{ACTIVITIES}}',JSON.stringify(Object.fromEntries(games.filter(g=>g.activity).map(g=>[g.id,[g.title,...g.activity.slice(1)]])))).replaceAll('{{CATEGORIES}}',JSON.stringify(categories)).replaceAll('{{VOCABULARY_SEEDS}}',JSON.stringify(JSON.parse(read('vocabulary/seeds.json'))));
const cards=games.map(g=>read(`games/${g.id}/card.html`).replace(/<h2>[\s\S]*?<\/h2>/,()=>'<h2>'+escape(g.title)+'</h2>').replace('<article class="card">',`<article class="card" data-game-category="${escape(g.category)}">`)).join('\n');
const categoryCards=Object.entries(categories).map(([id,[title,description]])=>{const n=games.filter(g=>g.category===id).length;return `<button type="button" class="card category-card" data-category="${escape(id)}"><span class="tag">${n?n+' exercises':'Coming soon'}</span><h2>${escape(title)}</h2><p>${escape(description)}</p><span class="category-link">Explore exercises →</span></button>`;}).join('');
const standalone=games.filter(g=>g.engine==='standalone');
const views=standalone.map(g=>read(`games/${g.id}/view.html`).replace('{{DETECTIVE_DOCUMENT}}',()=>escape(read('games/detective/document.html')))).join('\n');
let html=read('shell.html').replace('{{CATEGORY_CARDS}}','<div class="cards">'+categoryCards+'</div>').replace('{{GAME_CARDS}}',cards).replace('{{GAME_VIEW}}',read('shared/game.html')).replace('{{VOCABULARY_VIEW}}',read('shared/vocabulary.html')).replace('{{STANDALONE_VIEWS}}',views);
let runtime='const gameHandlers={};\n'+games.filter(g=>g.engine!=='standalone').map(g=>read(`games/${g.id}/runtime.js`)).join('\n')+'\nconst gameMetadata='+JSON.stringify(games)+';\n'+inject(read('shared/engine.js'))+'\n'+inject(read('vocabulary/library.js'))+'\n'+standalone.map(g=>read(`games/${g.id}/runtime.js`)).join('\n');
new Function(runtime);
const assets={'assets/hub.js':runtime,'assets/hub.css':read('styles/hub.css'),'assets/pwa.js':read('pwa/client.js')};
const sw=read('pwa/sw.js').replace("const ASSETS=['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./version.json'];", "const ASSETS=['./index.html','./assets/hub.js','./assets/hub.css','./assets/pwa.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./version.json'];");
const version=crypto.createHash('sha256').update(html+JSON.stringify(assets)+sw+read('pwa/update-panel.html')+read('pwa/manifest.webmanifest')+fs.readFileSync(path.join(root,'pwa/icon-192.png')).toString('base64')+fs.readFileSync(path.join(root,'pwa/icon-512.png')).toString('base64')).digest('hex').slice(0,16);
html=html.replaceAll('{{BUILD_VERSION}}',version).replace('</head>',`<link rel="manifest" href="./manifest.webmanifest"><link rel="apple-touch-icon" href="./icon-192.png"><meta name="theme-color" content="#5260ce"><meta name="app-version" content="${version}"></head>`).replace('</body>',read('pwa/update-panel.html')+'<script src="./assets/pwa.js"></script></body>');
if(/\{\{[A-Z_]+\}\}/.test(html+runtime))throw Error('Unresolved build placeholder');
const out=path.resolve(process.argv[2]||path.join(root,'dist'));
fs.mkdirSync(out,{recursive:true});for(const [name,content] of Object.entries({...assets,'index.html':html,'sw.js':sw.replace('__VERSION__',version),'version.json':JSON.stringify({version,modular:true},null,2)})){fs.mkdirSync(path.dirname(path.join(out,name)),{recursive:true});fs.writeFileSync(path.join(out,name),content);}
for(const name of ['manifest.webmanifest','icon-192.png','icon-512.png','.nojekyll'])fs.copyFileSync(path.join(root,'pwa',name),path.join(out,name));
console.log(`Built ${games.length} games, version ${version} → ${out}`);
