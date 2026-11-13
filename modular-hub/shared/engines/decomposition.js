function isDecomposition(){return mode==='decomposeWhole'||mode==='decomposeWords';}
const decompositionModes=['standard','regrouped','mixed'];
const decompositionLevels=['thousands','millions','billions','mixed'];
try{
 const data=JSON.parse(localStorage.getItem(KEY));
 for(const activity of ['decomposeWhole','decomposeWords']){
  saved[activity+'Level']=decompositionLevels.includes(data?.[activity+'Level'])?data[activity+'Level']:'thousands';
  saved[activity+'Mode']=decompositionModes.includes(data?.[activity+'Mode'])?data[activity+'Mode']:'standard';
  if(data?.lastActivity===activity)saved.lastActivity=activity;
  for(const level of decompositionLevels)for(const style of decompositionModes){
   const key=activity+':'+level+':'+style;
   // Keep earlier decomposition scores accessible under Standard.
   const s=data?.scores?.[key]??(style==='standard'?data?.scores?.[activity+':'+level]:undefined);
   if(s&&['perfect','attempted','solved'].every(k=>Number.isSafeInteger(s[k])&&s[k]>=0)&&s.perfect<=s.solved&&s.solved<=s.attempted)saved.scores[key]=s;
  }
 }
}catch(e){storageOK=false;}
function decompositionValue(terms){return terms.reduce((sum,t)=>sum+t.count*10**t.power,0);}
const decompositionUnits=['one','ten','hundred','thousand','ten thousand','hundred thousand','million','ten million','hundred million','billion'];
function decompositionPhrase(terms,wordForm=false){return terms.map(t=>toWords(t.count)+' '+decompositionUnits[t.power]+(t.count===1?'':'s')).join(wordForm?' and ':' + ');}
function regroupDecomposition(terms,sourcePower){
 const counts=new Map(terms.map(t=>[t.power,t.count]));
 const count=counts.get(sourcePower)||0;
 if(!count)return terms.map(t=>({...t}));
 counts.delete(sourcePower);
 counts.set(sourcePower-1,(counts.get(sourcePower-1)||0)+count*10);
 return [...counts].map(([power,count])=>({power,count})).filter(t=>t.count>0).sort((a,b)=>b.power-a.power);
}
function makeDecomposition(level,style='standard'){
 const top={thousands:3,millions:6,billions:9}[level==='mixed'?shuffle(['thousands','millions','billions'])[0]:level];
 const actualMode=style==='mixed'?shuffle(['standard','regrouped'])[0]:style;
 const sourcePower=shuffle([1,2])[0];
 let terms=[{count:1+Math.floor(Math.random()*9),power:top}];
 const lower=shuffle(Array.from({length:top},(_,i)=>i)).slice(0,1+Math.floor(Math.random()*Math.min(top,3)));
 if(actualMode==='regrouped'&&!lower.includes(sourcePower))lower.push(sourcePower);
 lower.sort((a,b)=>b-a).forEach(power=>terms.push({count:1+Math.floor(Math.random()*9),power}));
 const standardTerms=terms.map(t=>({...t}));
 if(actualMode==='regrouped')terms=regroupDecomposition(terms,sourcePower);
 const value=decompositionValue(terms),variants=[],seen=new Set([value]);
 // Change a count without changing the structure of the chosen mode.
 for(const i of shuffle(terms.map((_,i)=>i))){for(const delta of shuffle([-1,1,2])){
  const candidate=terms.map(t=>({...t}));candidate[i].count+=delta;
  if(candidate[i].count<1)continue;
  const v=decompositionValue(candidate);if(!seen.has(v)){seen.add(v);variants.push({terms:candidate,value:v});}
 }}
 return {terms,standardTerms,actualMode,sourcePower,value,choices:shuffle([{terms,value},...variants.slice(0,2)])};
}
function decompositionExplanation(q){
 const products=q.terms.map(t=>t.count.toLocaleString('en-US')+' '+decompositionUnits[t.power]+(t.count===1?'':'s')+' = '+t.count.toLocaleString('en-US')+' × '+(10**t.power).toLocaleString('en-US')+' = '+(t.count*10**t.power).toLocaleString('en-US')).join('; ');
 const regroup=q.actualMode==='regrouped'?'Regrouping: '+decompositionPhrase(q.standardTerms)+' = '+decompositionPhrase(q.terms)+'. ':'';
 return regroup+products+'. Total: '+q.terms.map(t=>(t.count*10**t.power).toLocaleString('en-US')).join(' + ')+' = '+q.value.toLocaleString('en-US')+'. Missing places contribute zero.';
}
let decompositionQuestion;
let expressionRound={answered:0,correct:0};
try{const d=JSON.parse(localStorage.getItem(KEY));if(['correct','not','mixed'].includes(d?.expressionMode))saved.expressionMode=d.expressionMode;if([5,10].includes(d?.expressionLength))saved.expressionLength=d.expressionLength;}catch(e){}
$('expression-mode').value=saved.expressionMode||'correct';$('expression-length').value=saved.expressionLength||5;
function expressionPhrase(terms){return terms.map(t=>t.count.toLocaleString('en-US')+' '+decompositionUnits[t.power]+(t.count===1?'':'s')).join(' + ');}
function expressionVariants(q){
 const results=[],seen=new Set();let terms=q.standardTerms.map(t=>({...t}));
 const add=()=>{const key=JSON.stringify(terms);if(!seen.has(key)){seen.add(key);results.push({terms:terms.map(t=>({...t})),value:q.value});}};add();
 // Each exchange moves one higher group into ten lower groups, preserving the sum.
 for(let step=0;step<30&&results.length<3;step++){
 const source=shuffle(terms.filter(t=>t.power>0&&t.count>0))[0];if(!source)break;
 source.count--;const lower=terms.find(t=>t.power===source.power-1);if(lower)lower.count+=10;else terms.push({power:source.power-1,count:10});
 terms=terms.filter(t=>t.count>0).sort((a,b)=>b.power-a.power);add();
 }
 return results;
}
function expressionRoundText(){const n=Number($('expression-length').value);$('expression-round').textContent=expressionRound.answered===n?'Round complete! '+expressionRound.correct+' / '+n+' correct ('+Math.round(expressionRound.correct/n*100)+'%). Start a new round to practice again.':'Round: '+expressionRound.answered+' / '+n+' answered · '+expressionRound.correct+' correct';}
function restartExpressions(){expressionRound={answered:0,correct:0};newProblem();}
for(const id of ['expression-mode','expression-length'])$(id).onchange=()=>{saved.expressionMode=$('expression-mode').value;saved.expressionLength=Number($('expression-length').value);persist();restartExpressions();};
$('expression-restart').onclick=restartExpressions;

function newDecompositionQuestion(focus){
 checked=false;complete=false;$('feedback').textContent='';$('feedback').className='feedback';$('hint-text').hidden=true;$('hint').textContent='Show hint';
 do{decompositionQuestion=makeDecomposition($('decomposition-level').value,$('decomposition-mode').value);}while(String(decompositionQuestion.value)===previousNumber);previousNumber=String(decompositionQuestion.value);
 const q=decompositionQuestion,words=mode==='decomposeWords';
 for(const id of ['expression-mode-label','expression-length-label','expression-restart','expression-round'])$(id).hidden=words;
 if(!words){
 if(expressionRound.answered>=Number($('expression-length').value))expressionRound={answered:0,correct:0};
 q.negative=$('expression-mode').value==='not'||($('expression-mode').value==='mixed'&&Math.random()<.5);
 const good=expressionVariants(q),bad=q.choices.filter(c=>c.value!==q.value);
 q.choices=shuffle(q.negative?[...good,bad[0]]:[{terms:q.terms,value:q.value},...bad]);
 $('problem-label').textContent=q.negative?'Which expression does NOT describe this number?':'Which expression describes this number?';
 $('description').textContent='Choose one answer. Multiply each group count by its place value, then add. Each answer counts once.';
 $('next').disabled=true;expressionRoundText();
 }else{$('next').disabled=false;$('problem-label').textContent=activities[mode][2];}

 $('problem').textContent=words?decompositionPhrase(q.terms,true):q.value.toLocaleString('en-US');
 $('boxes').className='decomposition-choices';$('boxes').replaceChildren();
 q.choices.forEach((choice,i)=>{const b=document.createElement('button');b.type='button';b.textContent=String.fromCharCode(65+i)+'. '+(words?choice.value.toLocaleString('en-US'):expressionPhrase(choice.terms));b.onclick=()=>answerDecomposition(i);$('boxes').append(b);});
 $('hint-text').textContent='Multiply each count by its unit value, then add. For example, thirty-one tens = 31 × 10 = 310. Ten tens make one hundred; ten ones make one ten. Standard uses the usual digit in each place. Regrouped exchanges hundreds for tens or tens for ones without changing the total.';
 update();if(focus)$('boxes').querySelector('button').focus();
}
function answerDecomposition(index){
 if(checked)return;checked=true;complete=true;const q=decompositionQuestion,ok=q.negative?q.choices[index].value!==q.value:q.choices[index].value===q.value,s=stat();s.attempted++;if(ok){s.perfect++;s.solved++;}
 Array.from($('boxes').children).forEach((b,i)=>{b.disabled=true;if(q.negative?q.choices[i].value!==q.value:q.choices[i].value===q.value)b.classList.add('correct-choice');else if(i===index)b.classList.add('wrong-choice');});
 $('feedback').className='feedback '+(ok?'good-text':'bad-text');$('feedback').textContent=(ok?'✓ Correct! ':'Not quite. ')+decompositionExplanation(q);
 if(mode==='decomposeWhole'){
 expressionRound.answered++;if(ok)expressionRound.correct++;expressionRoundText();
 const details=q.choices.map((c,i)=>String.fromCharCode(65+i)+': '+c.terms.map(t=>t.count.toLocaleString('en-US')+' × '+(10**t.power).toLocaleString('en-US')).join(' + ')+' = '+c.value.toLocaleString('en-US')+(c.value===q.value?' (describes the number).':' (does NOT describe the number).')).join(' ');
 $('feedback').textContent=(ok?'✓ Correct! ':'Not quite. ')+details+' Regrouping keeps the total unchanged: 10 tens = 1 hundred; 26 tens = 260.';
 $('next').disabled=expressionRound.answered>=Number($('expression-length').value);$('next').textContent='Next question →';
 }
 persist();update();
}
$('decomposition-mode').onchange=()=>{saved[mode+'Mode']=$('decomposition-mode').value;persist();restartExpressions();};
$('decomposition-level').onchange=()=>{saved[mode+'Level']=$('decomposition-level').value;persist();restartExpressions();};

