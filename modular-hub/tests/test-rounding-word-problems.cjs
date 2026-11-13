const assert=require('assert/strict'),fs=require('fs'),path=require('path'),http=require('http');
const {chromium}=require('./browser.cjs');
const {rounded,fits,sameKeys,generate}=require('../games/roundingWordProblems/runtime.js');
// Independent integer interval oracle, including both halfway boundaries.
for(const place of [10,100])for(let target=2*place;target<=89*place;target+=place){
  for(let n=target-place;n<=target+place;n++)assert.equal(fits(n,target,place),n>=target-place/2&&n<target+place/2);
  assert.equal(rounded(target-place/2-1,place),target-place);
  assert.equal(rounded(target-place/2,place),target);
  assert.equal(rounded(target+place/2-1,place),target);
  assert.equal(rounded(target+place/2,place),target+place);
}
let seed=91823;const rng=()=>((seed=(1664525*seed+1013904223)>>>0)/4294967296);
const seen=new Set();
for(const place of [10,100])for(const multi of [false,true])for(let i=0;i<1000;i++){
  const q=generate(place,multi,i,rng),correct=q.options.filter(o=>o.value>=q.low&&o.value<=q.high).map(o=>o.key);
  assert.equal(q.options.length,6);assert.equal(new Set(q.options.map(o=>o.value)).size,6);assert.equal(new Set(q.options.map(o=>o.key)).size,6);
  assert(multi?correct.length>=2&&correct.length<=4:correct.length===1);assert(sameKeys([...correct].reverse(),correct));
  assert(!sameKeys([],correct));assert(!sameKeys([...correct,correct[0]],correct));
  if(multi)assert(!sameKeys(correct.slice(1),correct));
  assert(!sameKeys([...correct,q.options.find(o=>!correct.includes(o.key)).key],correct));
  seen.add(q.story+JSON.stringify(q.options));
}
assert(seen.size>3900);
(async()=>{
  const root=path.resolve('modular-hub/dist'),prefix='/math-practice-hub/';
  const server=http.createServer((req,res)=>{try{const pathname=new URL(req.url,'http://local').pathname;if(!pathname.startsWith(prefix)){res.writeHead(404).end();return;}const relative=pathname.slice(prefix.length)||'index.html',file=path.resolve(root,relative);if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}const type={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.webmanifest':'application/manifest+json'}[path.extname(file)]||'application/octet-stream';res.setHeader('Content-Type',type);res.end(fs.readFileSync(file));}catch{res.writeHead(404).end();}});
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const url=process.env.ROUNDING_WORD_PROBLEMS_URL||`http://127.0.0.1:${server.address().port}${prefix}`;
  let browser;
  try{
    browser=await chromium.launch({channel:'msedge',headless:true});const context=await browser.newContext();const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto(url);await page.waitForFunction(()=>navigator.serviceWorker.controller);await page.waitForLoadState('networkidle');
    await page.evaluate(()=>localStorage.setItem('rounding-word-problems-sentinel','keep'));
    await page.locator('[data-category="numberSense"]').click();await page.locator('#roundingWordProblems-open').click();
    const el=s=>page.locator('#roundingWordProblems-'+s);
    let rounds=0,correctTotal=0;
    for(const place of ['10','100','mixed'])for(const mode of ['single','multi','mixed']){
      await el('place').selectOption(place);await el('mode').selectOption(mode);
      // Settings take effect on replay; finish the initial round first below.
      if(rounds)await el('replay').click();else{await el('back').click();await page.reload();await page.locator('[data-category="numberSense"]').click();await el('open').click();}
      const types=new Set(),places=new Set();
      for(let i=0;i<5;i++){
        assert((await el('progress').innerText()).includes(`Question ${i+1} of 5`));assert.equal(await el('hint').getAttribute('open'),null);
        assert.equal(await el('feedback').innerText(),'');assert(!(await el('options').innerText()).includes('rounds to'));
        await el('check').click();assert((await el('feedback').innerText()).includes('Select'));
        const story=await el('story').innerText(),target=Number(story.match(/about ([\d,]+)/)[1].replaceAll(',','')),p=story.includes('nearest ten.')?10:100;
        places.add(p);const inputs=el('options').locator('input'),multi=await inputs.first().getAttribute('type')==='checkbox';types.add(multi);
        const options=await inputs.evaluateAll(nodes=>nodes.map(n=>({key:n.value,value:Number(n.parentElement.textContent.match(/\. ([\d,]+)/)[1].replaceAll(',',''))})));
        const good=options.filter(o=>o.value>=target-p/2&&o.value<target+p/2);
        assert(multi?good.length>1:good.length===1);
        // First question deliberately misses a valid multi option or picks a wrong radio.
        const chosen=i===0?(multi?good.slice(1):[options.find(o=>!good.includes(o))]):good;
        for(const option of chosen)await el('options').locator(`input[value="${option.key}"]`).check();
        if(i===1){await el('hint').locator('summary').click();assert(await el('hint-text').isVisible());}
        await el('check').click();assert((await el('feedback').innerText()).startsWith(i===0?'Not quite.':'Correct!'));
        const feedback=await el('feedback').innerText();await el('form').evaluate(form=>form.dispatchEvent(new Event('submit',{cancelable:true})));assert.equal(await el('feedback').innerText(),feedback);
        assert(await inputs.evaluateAll(nodes=>nodes.every(n=>n.disabled)));
        await el('next').click();
      }
      rounds++;correctTotal+=4;assert((await el('result').innerText()).includes('4 out of 5'));
      if(mode==='mixed')assert.equal(types.size,2);if(place==='mixed')assert.equal(places.size,2);
      assert.equal(JSON.parse(await page.evaluate(()=>localStorage.getItem('mathPracticeRoundingWordProblems.v1'))).rounds,rounds);
    }
    await page.reload();await page.locator('[data-category="numberSense"]').click();await el('open').click();assert((await el('saved').innerText()).includes(`Correct answers: ${correctTotal}`));assert.equal(await el('mode').inputValue(),'mixed');
    await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:'modular-hub/tests/rounding-word-problems-mobile.png',fullPage:true});
    await context.setOffline(true);await page.reload();await page.locator('[data-category="numberSense"]').click();await el('open').click();assert(await el('story').isVisible());await el('options').locator('input').first().check();await el('check').click();assert(await el('next').isVisible());assert.equal(await page.evaluate(()=>localStorage.getItem('rounding-word-problems-sentinel')),'keep');assert.deepEqual(errors,[]);
    await context.setOffline(false);
    const denied=await browser.newContext();await denied.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw Error('denied');}});});const fallback=await denied.newPage();await fallback.goto(url);await fallback.waitForFunction(()=>navigator.serviceWorker.controller && document.querySelector('#update-status').textContent.includes('Ready'));await fallback.waitForLoadState('networkidle');await fallback.locator('[data-category="numberSense"]').click();await fallback.locator('#roundingWordProblems-open').click();assert((await fallback.locator('#roundingWordProblems-saved').innerText()).includes('session'));await denied.close();
    console.log('PASS rounding word problems: exhaustive boundaries, 4,000 generated sets/key checks, 45 UI answers, wrong/empty/duplicate submissions, settings/results persistence, replay, hints, mobile, storage denial, offline subpath gameplay.');
  }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));}
})().catch(e=>{console.error(e);process.exitCode=1;});
