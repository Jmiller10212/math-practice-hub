(()=>{
  // Pure question rules are also exported to Node for boundary regression tests.
  const rounded=(number,place)=>Math.floor((number+place/2)/place)*place;
  const fits=(number,target,place)=>rounded(number,place)===target;
  const sameKeys=(selected,correct)=>selected.length===correct.length && new Set(selected).size===selected.length && selected.every(k=>correct.includes(k));
  const scenes=[
    ['A school reports about {n} students at its fair.', 'students'],
    ['A library says it lent about {n} books this week.', 'books'],
    ['A theater reports selling about {n} tickets.', 'tickets'],
    ['A gardener says she planted about {n} seeds.', 'seeds'],
    ['A food drive reports collecting about {n} cans.', 'cans'],
    ['A museum reports about {n} visitors on Saturday.', 'visitors'],
    ['A team says it collected about {n} bottles for recycling.', 'bottles'],
    ['A bakery reports making about {n} rolls this morning.', 'rolls'],
    ['A zoo reports selling about {n} admission passes this month.', 'passes'],
    ['An aquarium reports about {n} visitors during a holiday week.', 'visitors'],
    ['A wildlife group reports planting about {n} trees this year.', 'trees'],
    ['A farm reports collecting about {n} eggs this week.', 'eggs'],
    ['An orchard reports picking about {n} apples for a delivery.', 'apples'],
    ['A greenhouse reports growing about {n} seedlings for a sale.', 'seedlings'],
    ['A flower shop reports selling about {n} roses during a festival.', 'roses'],
    ['A market reports selling about {n} ears of corn this month.', 'ears of corn'],
    ['A pumpkin patch reports selling about {n} pumpkins this season.', 'pumpkins'],
    ['A school garden reports harvesting about {n} cherry tomatoes.', 'cherry tomatoes'],
    ['A factory reports packing about {n} boxes for shipment.', 'boxes'],
    ['A toy company reports making about {n} toy cars in a production run.', 'toy cars'],
    ['A puzzle company reports shipping about {n} puzzles to stores.', 'puzzles'],
    ['A printing shop reports printing about {n} flyers for a festival.', 'flyers'],
    ['A bookstore reports selling about {n} bookmarks this year.', 'bookmarks'],
    ['A craft store reports selling about {n} beads during a sale.', 'beads'],
    ['An art club reports sorting about {n} buttons for a project.', 'buttons'],
    ['A school supply drive reports collecting about {n} pencils.', 'pencils'],
    ['A charity reports giving away about {n} notebooks this year.', 'notebooks'],
    ['A community center reports handing out about {n} crayons at its events.', 'crayons'],
    ['A stadium reports selling about {n} cups of lemonade this season.', 'cups of lemonade'],
    ['A snack stand reports selling about {n} bags of popcorn this year.', 'bags of popcorn'],
    ['A restaurant reports serving about {n} bowls of soup this month.', 'bowls of soup'],
    ['A pizza shop reports baking about {n} pizzas this year.', 'pizzas'],
    ['A candy shop reports packing about {n} pieces of candy for an order.', 'pieces of candy'],
    ['A volunteer group reports preparing about {n} sandwiches for its events.', 'sandwiches'],
    ['A farmers market reports selling about {n} jars of honey this season.', 'jars of honey'],
    ['A grocery store reports donating about {n} cartons of milk this year.', 'cartons of milk'],
    ['A pet shelter reports receiving about {n} bags of pet food this year.', 'bags of pet food'],
    ['An animal rescue reports distributing about {n} pet blankets this year.', 'pet blankets'],
    ['A beach cleanup reports collecting about {n} pieces of litter.', 'pieces of litter'],
    ['A recycling center reports processing about {n} cardboard boxes in a day.', 'cardboard boxes'],
    ['A park group reports picking up about {n} fallen branches after a storm.', 'branches'],
    ['A nature center reports counting about {n} birds during a survey.', 'birds'],
    ['A science club reports counting about {n} shells in its collection.', 'shells'],
    ['A geology club reports labeling about {n} rock samples.', 'rock samples'],
    ['A sports league reports giving out about {n} medals this year.', 'medals'],
    ['A swimming pool reports about {n} visits during the summer.', 'visits'],
    ['A skating rink reports renting out about {n} pairs of skates this season.', 'pairs of skates'],
    ['A bowling alley reports hosting about {n} games during a tournament.', 'games'],
    ['A running club reports recording about {n} completed laps in a challenge.', 'laps'],
    ['A bicycle club reports traveling about {n} miles altogether this year.', 'miles'],
    ['A hiking group reports walking about {n} miles altogether this year.', 'miles'],
    ['A delivery company reports delivering about {n} packages this week.', 'packages'],
    ['A post office reports selling about {n} stamps during a sale.', 'stamps'],
    ['A train station reports selling about {n} tickets during a holiday.', 'tickets'],
    ['A ferry service reports carrying about {n} passengers this month.', 'passengers'],
    ['A bus company reports about {n} passenger trips on a new route.', 'passenger trips'],
    ['A reading challenge reports about {n} pages read by its participants.', 'pages'],
    ['A game club reports earning about {n} points in a team challenge.', 'points'],
    ['A fundraiser reports collecting about {n} coins in its donation jars.', 'coins'],
    ['A festival reports handing out about {n} balloons to visitors.', 'balloons']
  ];
  function shuffle(values,rng){for(let i=values.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[values[i],values[j]]=[values[j],values[i]];}return values;}
  function generate(place,multi,scene,rng=Math.random){
    const target=(2+Math.floor(rng()*88))*place, low=target-place/2, high=target+place/2-1;
    const count=multi?2+Math.floor(rng()*3):1;
    // Always include both sides of a halfway boundary; never infer answers from labels.
    const inside=shuffle([low,low+1,target,high],rng).slice(0,count);
    const outside=shuffle([low-1,high+1,low-2,high+2,target-place,target+place],rng).slice(0,6-count);
    const options=shuffle([...inside,...outside],rng).map((value,i)=>({key:String.fromCharCode(65+i),value}));
    const [text,unit]=scenes[scene%scenes.length];
    return {place,target,low,high,multi,options,story:text.replace('{n}',target.toLocaleString('en-US'))+' The total was rounded to the nearest '+(place===10?'ten.':'hundred.'),unit};
  }
  if(typeof module!=='undefined' && module.exports)module.exports={rounded,fits,sameKeys,generate};
  if(typeof document==='undefined')return;
  const id='roundingWordProblems',key='mathPracticeRoundingWordProblems.v1',el=s=>document.getElementById(id+'-'+s);
  let saved={place:'mixed',mode:'mixed',rounds:0,correct:0,best:0}, storageOK=true;
  try{const value=JSON.parse(localStorage.getItem(key));if(value){for(const field of ['place','mode'])if((field==='place'?['mixed','10','100']:['mixed','single','multi']).includes(value[field]))saved[field]=value[field];for(const field of ['rounds','correct','best'])if(Number.isSafeInteger(value[field])&&value[field]>=0)saved[field]=value[field];saved.best=Math.min(5,saved.best);}}catch{storageOK=false;}
  let questions=[],index=0,score=0,checked=false,active=false;
  el('place').value=saved.place;el('mode').value=saved.mode;
  function persist(){try{localStorage.setItem(key,JSON.stringify(saved));}catch{storageOK=false;}showSaved();}
  function showSaved(){el('saved').textContent=`Completed rounds: ${saved.rounds} · Correct answers: ${saved.correct} · Best round: ${saved.best}/5`+(storageOK?' · Completed results and settings save on this device.':' · Saving unavailable; progress lasts for this session.');}
  function start(){
    const sceneOrder=shuffle([...scenes.keys()],Math.random),firstMulti=Math.random()<.5;
    questions=Array.from({length:5},(_,i)=>generate(saved.place==='mixed'?(i%2?100:10):Number(saved.place),saved.mode==='mixed'?(i%2===0?firstMulti:!firstMulti):saved.mode==='multi',sceneOrder[i]));
    index=0;score=0;active=true;el('form').hidden=false;el('summary').hidden=true;render();
  }
  function render(){
    const q=questions[index];checked=false;
    el('progress').textContent=`Question ${index+1} of 5 · Score: ${score}/${index}`;
    el('story').textContent=q.story;el('instruction').textContent=q.multi?'Choose ALL possible original totals. More than one answer fits.':'Choose ONE possible original total.';
    el('options').replaceChildren();
    q.options.forEach(option=>{
      const label=document.createElement('label'),input=document.createElement('input');
      input.type=q.multi?'checkbox':'radio';input.name=id+'-choice';input.value=option.key;input.id=id+'-option-'+option.key;
      label.htmlFor=input.id;label.style.cssText='display:flex;align-items:center;gap:12px;padding:12px;border:1px solid #9aa4ba;border-radius:10px;cursor:pointer';
      input.style.cssText='width:20px;height:20px;flex-shrink:0;margin:0';
      label.append(input,document.createTextNode(`${option.key}. ${option.value.toLocaleString('en-US')} ${q.unit}`));el('options').append(label);
    });
    el('hint').open=false;el('hint-text').textContent='Find the halfway point below the rounded total and the halfway point above it. The lower halfway point rounds up to this total; the upper halfway point rounds up to the next total.';
    el('feedback').textContent='';el('check').disabled=false;el('next').hidden=true;
  }
  el('form').onsubmit=e=>{
    e.preventDefault();if(checked)return;
    const q=questions[index],selected=[...el('options').querySelectorAll('input:checked')].map(input=>input.value);
    if(!selected.length){el('feedback').textContent=q.multi?'Select at least one answer before checking.':'Select an answer before checking.';return;}
    const correct=q.options.filter(o=>fits(o.value,q.target,q.place)).map(o=>o.key),right=sameKeys(selected,correct);
    checked=true;if(right)score++;
    el('options').querySelectorAll('input').forEach(input=>{input.disabled=true;const option=q.options.find(o=>o.key===input.value);input.parentElement.append(document.createTextNode(` — ${fits(option.value,q.target,q.place)?'Fits':'Does not fit'} (rounds to ${rounded(option.value,q.place).toLocaleString('en-US')})`));});
    el('feedback').textContent=(right?'Correct! ':'Not quite. ')+`Possible originals: ${correct.join(', ')}. Every whole number from ${q.low.toLocaleString('en-US')} through ${q.high.toLocaleString('en-US')} rounds to ${q.target.toLocaleString('en-US')}. ${q.low-1} rounds down to ${q.target-q.place}; ${q.high+1} rounds up to ${q.target+q.place}.`;
    el('progress').textContent=`Question ${index+1} of 5 · Score: ${score}/${index+1}`;
    el('check').disabled=true;el('next').hidden=false;el('next').textContent=index===4?'See results →':'Next question →';el('feedback').focus();
  };
  el('next').onclick=()=>{if(!checked)return;if(index<4){index++;render();el('options').querySelector('input').focus();}else{checked=false;active=false;saved.rounds++;saved.correct+=score;saved.best=Math.max(saved.best,score);persist();el('form').hidden=true;el('summary').hidden=false;el('result').textContent=`You scored ${score} out of 5. ${score===5?'All five correct!':'Play again for new stories and numbers.'}`;el('replay').focus();}};
  for(const field of ['place','mode'])el(field).onchange=()=>{saved[field]=el(field).value;persist();};
  el('replay').onclick=()=>{start();el('options').querySelector('input').focus();};
  el('open').onclick=()=>{document.getElementById('category').hidden=true;document.getElementById(id).hidden=false;if(!active)start();showSaved();el('title').focus();};
  el('back').onclick=()=>{document.getElementById(id).hidden=true;openCategory(gameMetadata.find(g=>g.id===id).category);el('open').focus();};
})();
