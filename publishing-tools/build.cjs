const fs=require('fs'),path=require('path'),crypto=require('crypto'),{spawnSync}=require('child_process');
const root=path.resolve(__dirname,'..'),project=path.join(root,'modular-hub'),entry=path.join(root,'Math Practice Hub.html'),receipt=path.join(project,'generated-entry.sha256');
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const expected=fs.existsSync(receipt)?fs.readFileSync(receipt,'utf8').trim():JSON.parse(fs.readFileSync(path.join(project,'baseline.json'),'utf8')).sourceSHA256;
if(fs.existsSync(entry)&&hash(entry)!==expected)throw Error('Math Practice Hub.html changed outside the modular project. Reconcile those changes before building; no files were overwritten.');
const result=spawnSync(process.execPath,[path.join(project,'build.cjs')],{stdio:'inherit'});if(result.status!==0)process.exit(result.status||1);
const inRepository=fs.existsSync(path.join(root,'.git'));
const dist=path.join(project,'dist'),out=inRepository?root:path.join(root,'github-pages');
fs.cpSync(dist,out,{recursive:true});
// Keep the existing local entry filename and URL so file-based browser data stays attached to it.
const local=fs.readFileSync(path.join(dist,'index.html'),'utf8').replaceAll('./assets/','./modular-hub/dist/assets/').replaceAll('href="./manifest.webmanifest"','href="./modular-hub/dist/manifest.webmanifest"').replaceAll('href="./icon-192.png"','href="./modular-hub/dist/icon-192.png"');
fs.writeFileSync(entry,local);fs.writeFileSync(receipt,hash(entry)+'\n');
// Publish maintainable source alongside the site, excluding local repositories and generated artifacts.
if(!inRepository)fs.cpSync(project,path.join(out,'modular-hub'),{recursive:true,filter:p=>!['.git','node_modules','dist'].includes(path.basename(p))&&!p.endsWith('.png')||p.includes(path.join('pwa','icon-'))||p.includes(path.join('fixtures','previous-release'))});
if(!inRepository)for(const name of ['build.cjs','Publish.ps1']){fs.mkdirSync(path.join(out,'publishing-tools'),{recursive:true});fs.copyFileSync(path.join(__dirname,name),path.join(out,'publishing-tools',name));}
fs.copyFileSync(path.join(project,'README.md'),path.join(out,'README.md'));
console.log('Prepared the local entry, complete Pages assets, and modular source. Nothing has been published.');
