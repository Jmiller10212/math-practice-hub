const fs=require('fs'),assert=require('assert');
const {chromium}=require('./browser.cjs');
(async()=>{const browser=await chromium.launch({channel:'msedge',headless:true});try{
const target=process.argv[2]||'file:///'+process.cwd().replaceAll('\\','/')+'/modular-hub/dist/index.html';
for(const kind of ['fresh','missing','legacy','edited']){
 const context=await browser.newContext();const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(target);
 if(target.startsWith('https:')){await page.waitForFunction(()=>navigator.serviceWorker.controller);assert.equal(await page.locator('meta[name="app-version"]').getAttribute('content'),JSON.parse(fs.readFileSync('github-pages/version.json','utf8')).version);}
 const custom={id:'custom-test',name:'My saved term',definition:'Keep my definition',example:'My example',tags:['numberSense'],relatedGroup:'My group'};
 const legacy={id:'seed-31',name:'Expression',definition:'A mathematical phrase made of numbers, variables, and operations, without an equals sign stating an equation.',example:'3x + 2 is an expression.',tags:['preAlgebra','algebra']};
 if(kind==='edited')legacy.definition='My own expression definition';
 const saved={version:1,terms:kind==='missing'?[custom]:[custom,legacy]};
 if(kind!=='fresh')await page.evaluate(data=>localStorage.setItem('mathPracticeVocabulary.v1',JSON.stringify(data)),saved);
 const before=await page.evaluate(()=>localStorage.getItem('mathPracticeVocabulary.v1'));
 if(target.startsWith('https:'))await context.setOffline(true);
 await page.reload();await page.locator('#vocab-home-open').click();
 for(const query of ['mathematical expression','math expression','numerical expression','algebraic expression']){
  await page.locator('#vocab-search').fill(query);assert.equal(await page.locator('.vocab-item').count(),1);
  const text=await page.locator('.vocab-item').innerText();assert(text.includes('An expression represents a value.'));assert(text.includes('An equation uses an equals sign'));
  if(kind==='edited')assert(text.includes('My own expression definition'));
  else{assert(text.includes('that represents a value, but does not have an equals sign.'));assert(text.includes("'361 + 544' is an expression; '361 + 544 = 905' is an equation."));}
 }
 if(kind!=='fresh'){await page.locator('#vocab-search').fill('My saved term');assert.equal(await page.locator('.vocab-item').count(),1);}
 assert.equal(await page.evaluate(()=>localStorage.getItem('mathPracticeVocabulary.v1')),before);assert.deepEqual(errors,[]);await context.close();
}
console.log('PASS: expression aliases, definition, example/tip, fresh/missing/legacy/customized collections, no duplicates, unchanged stored vocabulary'+(target.startsWith('https:')?', live version and offline reopening.':'.'));
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});

