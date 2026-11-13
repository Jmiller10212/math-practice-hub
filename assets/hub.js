const gameHandlers={};
// place: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.place = {
  newProblem(focus) { newPlaceValueProblem(focus); },
  check() { checkPlaceValue();
  }
};

// expanded: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.expanded = {
  newProblem(focus) { newPlaceValueProblem(focus); },
  check() { checkPlaceValue();
  }
};

// wordsNumber: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.wordsNumber = {
  newProblem(focus) { newPlaceValueProblem(focus); },
  check() { checkPlaceValue();
  }
};

// numberWords: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.numberWords = {
  newProblem(focus) { newPlaceValueProblem(focus); },
  check() { checkPlaceValue();
  }
};

// wordsPlace: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.wordsPlace = {
  newProblem(focus) { newPlaceValueProblem(focus); },
  check() { checkPlaceValue();
  }
};

// decimalQuiz: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.decimalQuiz = {
  newProblem(focus) { newDecimalQuestion(focus); },
  check() { // Choice buttons check and score their own answers.
  }
};

// decomposeWhole: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.decomposeWhole = {
  newProblem(focus) { newDecompositionQuestion(focus); },
  check() { // Choice buttons check and score their own answers.
  }
};

// decomposeWords: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.decomposeWords = {
  newProblem(focus) { newDecompositionQuestion(focus); },
  check() { // Choice buttons check and score their own answers.
  }
};

// writeExpanded: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.writeExpanded = {
  newProblem(focus) { newWriteExpandedProblem(focus); },
  check() { checkWriteExpanded();
  }
};

// writeStandard: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.writeStandard = {
  newProblem(focus) { newWriteExpandedProblem(focus); },
  check() { checkWriteExpanded();
  }
};

// addition: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.addition = {
  newProblem(focus) { newArithmeticProblem(focus); },
  check() { checkArithmetic();
  }
};

// subtraction: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.subtraction = {
  newProblem(focus) { newArithmeticProblem(focus); },
  check() { checkArithmetic();
  }
};

// multiplication: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.multiplication = {
  newProblem(focus) { newArithmeticProblem(focus); },
  check() { checkArithmetic();
  }
};

const gameMetadata=[{"id":"place","title":"Place Value Challenge","category":"numberSense","description":"Find the digit for each place value. The labels shuffle, so look carefully!","engine":"place-value","activity":["Place Value Challenge","Read the number, then enter one digit for each shuffled place value.","Find the digits in this number"]},{"id":"expanded","title":"Expanded Form Challenge","category":"numberSense","description":"Turn an addition expression into digits in shuffled boxes. Remember the zeros.","engine":"place-value","activity":["Expanded Form Challenge","Read the shuffled sum, then enter each digit in its place-value box. Use 0 for missing places.","Use the place-value boxes to write this sum"]},{"id":"wordsNumber","title":"Words → Number","category":"numberSense","description":"Turn a number written in words into standard number form.","engine":"place-value","activity":["Words → Number","Read the words, then write the whole number. Commas are optional.","Write these words as a number"]},{"id":"numberWords","title":"Number → Words","category":"numberSense","description":"Write a number in words. Spaces, hyphens, and “and” are flexible.","engine":"place-value","activity":["Number → Words","Write the number in words. Hyphens and “and” are optional.","Write this number in words"]},{"id":"wordsPlace","title":"Words → Place Values","category":"numberSense","description":"Read the words and fill each independently shuffled place-value box.","engine":"place-value","activity":["Words → Place Values","Read the words, then enter one digit for each shuffled place value. Use 0 for missing places.","Find the digits in these words"]},{"id":"decimalQuiz","title":"Decimal Place Value Quiz","category":"numberSense","description":"Identify the highlighted digit’s place: from tenths all the way to millionths.","engine":"decimal-quiz","activity":["Decimal Place Value Quiz","Choose the place value of the highlighted, underlined digit. Each question counts once.","What place is the highlighted digit in?"]},{"id":"decomposeWhole","title":"Decomposing Whole Numbers","category":"numberSense","description":"Choose which expression describes — or does NOT describe — a number, including regrouped ones, tens, and hundreds.","engine":"decomposition","activity":["Decomposing Whole Numbers","Choose one place-value description. Each choice scores the question immediately.","Which description equals this number?"]},{"id":"decomposeWords","title":"Decomposing Numbers in Word Form","category":"numberSense","description":"Read a verbal decomposition and choose the matching numeral.","engine":"decomposition","activity":["Decomposing Numbers in Word Form","Read the parts and choose their total. Each choice scores the question immediately.","Which numeral matches this decomposition?"]},{"id":"writeExpanded","title":"Write in Expanded Form","category":"numberSense","description":"Write each nonzero place-value part in one answer box, joined by plus signs.","engine":"write-form","activity":["Write in Expanded Form","Use one nonzero term per place, joined by +. Spaces and commas are optional; terms may be in any order. Leave out zero places.","Write the number in expanded form"]},{"id":"writeStandard","title":"Write in Standard Form","category":"numberSense","description":"Read the expanded sum and type the whole number in one answer box.","engine":"write-form","activity":["Write in Standard Form","Combine the place-value parts and type the whole number. Commas are optional.","Write the sum in standard form"]},{"id":"compare","title":"Compare the Numbers","category":"numberSense","description":"Choose greater than, less than, or equal to. Build confidence with big whole numbers.","engine":"standalone"},{"id":"rounding","title":"Rounding Practice","category":"numberSense","description":"Round whole numbers to the nearest ten through hundred million, or mix the places.","engine":"standalone"},{"id":"roundingWordProblems","title":"Rounding Word Problems — Find the Original Numbers","category":"numberSense","description":"Use a rounded total to find possible original numbers in five short word problems.","engine":"standalone"},{"id":"detective","title":"Digit Detective","category":"numberSense","description":"Combine rounding clues, digit relationships, and number properties to arrange the digit cards. Three challenge levels.","engine":"standalone"},{"id":"addition","title":"Addition","category":"arithmetic","description":"Choose Easy, Medium, or Hard and practice horizontally or vertically.","engine":"arithmetic","activity":["Addition","Add whole numbers or decimals. Choose a level, decimal places, and layout. Easy uses numbers up to 9, Medium up to 99, and Hard up to 999 in decimal practice. Mixed combines whole and decimal operands.","Find the sum"]},{"id":"subtraction","title":"Subtraction","category":"arithmetic","description":"Choose Easy, Medium, or Hard and practice horizontally or vertically.","engine":"arithmetic","activity":["Subtraction","Subtract whole numbers or decimals. Choose Whole Numbers, Decimals, or Mixed and tenths through thousandths. Decimal difficulty ranges from Easy (up to 9) to Hard (up to 999). The larger number comes first, so answers are never negative.","Find the difference"]},{"id":"multiplication","title":"Multiplication","category":"arithmetic","description":"Choose each factor’s number size and practice horizontally or vertically.","engine":"arithmetic","activity":["Multiplication","Choose whole numbers, decimals, or mixed operands. Whole-number practice keeps independent sizes and fixed Custom factors. Decimal practice uses Easy (up to 9), Medium (up to 99), or Hard (up to 999), with your chosen decimal places.","Find the product"]}];

'use strict';
const $=id=>document.getElementById(id);
const names=['Ones','Tens','Hundreds','Thousands','Ten Thousands','Hundred Thousands','Millions','Ten Millions','Hundred Millions','Billions'];
const KEY='math-practice-hub-v1';let saved={scores:{},level:6};let storageOK=true;
try{const data=JSON.parse(localStorage.getItem(KEY));if(data&&typeof data==='object'){saved.level=[3,6,9].includes(data.level)?data.level:6;if(['place','expanded','wordsNumber','numberWords','wordsPlace','decimalQuiz','addition','subtraction','multiplication'].includes(data.lastActivity))saved.lastActivity=data.lastActivity;if(typeof data.includeDecimals==='boolean')saved.includeDecimals=data.includeDecimals;if([1,2,3,4,5].includes(data.decimalDepth))saved.decimalDepth=data.decimalDepth;for(const mode of ['place','expanded','wordsNumber','numberWords','wordsPlace','decimalQuiz','addition','subtraction','multiplication'])for(const level of [3,6,9,'easy','medium','hard']){const key=mode+level,s=data.scores?.[key];if(s&&['perfect','attempted','solved'].every(k=>Number.isSafeInteger(s[k])&&s[k]>=0)&&s.perfect<=s.solved&&s.solved<=s.attempted)saved.scores[key]=s;}}}catch(e){storageOK=false;}
try{const data=JSON.parse(localStorage.getItem(KEY));for(const [key,s] of Object.entries(data?.scores||{})){if(/^multiplication:(1|2|3|4|mixed|custom):(1|2|3|4|mixed|custom)$/.test(key)&&s&&['perfect','attempted','solved'].every(k=>Number.isSafeInteger(s[k])&&s[k]>=0)&&s.perfect<=s.solved&&s.solved<=s.attempted)saved.scores[key]=s;}}catch(e){storageOK=false;}
const writeExpandedLevels=['thousands','millions','billions','mixed'];
try{
 const data=JSON.parse(localStorage.getItem(KEY));
 for(const activity of ['writeExpanded','writeStandard'])if(writeExpandedLevels.includes(data?.[activity+'Level']))saved[activity+'Level']=data[activity+'Level'];
 if(['writeExpanded','writeStandard'].includes(data?.lastActivity))saved.lastActivity=data.lastActivity;
 for(const activity of ['writeExpanded','writeStandard'])for(const level of writeExpandedLevels){const key=activity+':'+level,s=data?.scores?.[key];if(s&&['perfect','attempted','solved'].every(k=>Number.isSafeInteger(s[k])&&s[k]>=0)&&s.perfect<=s.solved&&s.solved<=s.attempted)saved.scores[key]=s;}
}catch(e){storageOK=false;}
function persist(){try{localStorage.setItem(KEY,JSON.stringify(saved));}catch(e){storageOK=false;}if(!storageOK)$('storage').textContent='Works entirely offline. Browser storage is unavailable; scores last for this session only.';}

let mode='place',digits=[],order=[],checked=false,complete=false,previousOrder='',previousNumber='';
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function stat(){const key=decimalPracticeSelected()?mode+':decimal:'+ $('arithmetic-kind').value+':'+$('arithmetic-precision').value+':'+$('arithmetic-level').value:isWriteForm()?mode+':'+ $('write-expanded-level').value:isDecomposition()?mode+':'+$('decomposition-level').value+':'+$('decomposition-mode').value:mode==='multiplication'?'multiplication:'+ $('multiplication-top-size').value+':'+$('multiplication-bottom-size').value:mode+(isArithmetic()?$('arithmetic-level').value:mode==='decimalQuiz'?6:saved.level);return saved.scores[key]??(saved.scores[key]={perfect:0,attempted:0,solved:0});}
function update(){const s=stat();$('score').textContent=s.perfect+' / '+s.attempted;$('solved').textContent=s.solved;const totals=Object.values(saved.scores).reduce((a,b)=>({perfect:a.perfect+b.perfect,attempted:a.attempted+b.attempted}),{perfect:0,attempted:0});$('total').textContent='';const n=document.createElement('strong');n.textContent=totals.perfect+' / '+totals.attempted;$('total').append(n);const label=document.createElement('span');label.textContent='perfect first tries';$('total').append(label);}
const small=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
function toWords(n){if(n<20)return small[n];if(n<100)return tens[Math.floor(n/10)]+(n%10?'-'+small[n%10]:'');if(n<1000)return small[Math.floor(n/100)]+' hundred'+(n%100?' '+toWords(n%100):'');for(const [scale,label] of [[1e9,'billion'],[1e6,'million'],[1e3,'thousand']])if(n>=scale)return toWords(Math.floor(n/scale))+' '+label+(n%scale?' '+toWords(n%scale):'');}
function normalizeWords(s){return s.toLowerCase().replace(/[-‐‑–—,]/g,' ').replace(/\band\b/g,' ').replace(/\s+/g,' ').trim();}

const decimalNames=['Tenths','Hundredths','Thousandths','Ten-thousandths','Hundred-thousandths','Millionths'];
let decimalTarget=0;
const activities = {"place":["Place Value Challenge","Read the number, then enter one digit for each shuffled place value.","Find the digits in this number"],"expanded":["Expanded Form Challenge","Read the shuffled sum, then enter each digit in its place-value box. Use 0 for missing places.","Use the place-value boxes to write this sum"],"wordsNumber":["Words → Number","Read the words, then write the whole number. Commas are optional.","Write these words as a number"],"numberWords":["Number → Words","Write the number in words. Hyphens and “and” are optional.","Write this number in words"],"wordsPlace":["Words → Place Values","Read the words, then enter one digit for each shuffled place value. Use 0 for missing places.","Find the digits in these words"],"decimalQuiz":["Decimal Place Value Quiz","Choose the place value of the highlighted, underlined digit. Each question counts once.","What place is the highlighted digit in?"],"decomposeWhole":["Decomposing Whole Numbers","Choose one place-value description. Each choice scores the question immediately.","Which description equals this number?"],"decomposeWords":["Decomposing Numbers in Word Form","Read the parts and choose their total. Each choice scores the question immediately.","Which numeral matches this decomposition?"],"writeExpanded":["Write in Expanded Form","Use one nonzero term per place, joined by +. Spaces and commas are optional; terms may be in any order. Leave out zero places.","Write the number in expanded form"],"writeStandard":["Write in Standard Form","Combine the place-value parts and type the whole number. Commas are optional.","Write the sum in standard form"],"addition":["Addition","Add whole numbers or decimals. Choose a level, decimal places, and layout. Easy uses numbers up to 9, Medium up to 99, and Hard up to 999 in decimal practice. Mixed combines whole and decimal operands.","Find the sum"],"subtraction":["Subtraction","Subtract whole numbers or decimals. Choose Whole Numbers, Decimals, or Mixed and tenths through thousandths. Decimal difficulty ranges from Easy (up to 9) to Hard (up to 999). The larger number comes first, so answers are never negative.","Find the difference"],"multiplication":["Multiplication","Choose whole numbers, decimals, or mixed operands. Whole-number practice keeps independent sizes and fixed Custom factors. Decimal practice uses Easy (up to 9), Medium (up to 99), or Hard (up to 999), with your chosen decimal places.","Find the product"]};
function valueNow(){return digits.reduce((sum,d,i)=>sum+d*10**i,0);}
function singleAnswer(){return mode==='wordsNumber'||mode==='numberWords';}
function decimalCount(){return (mode==='place'||mode==='expanded')&&$('include-decimals').checked?Number($('decimal-depth').value):0;}
function placeName(i){return i<=saved.level?names[i]:['Tenths','Hundredths','Thousandths','Ten-thousandths','Hundred-thousandths'][i-saved.level-1];}
function termText(d,i){if(i<=saved.level)return (d*10**i).toLocaleString('en-US');return '0.'+'0'.repeat(i-saved.level-1)+d;}

function newDecimalQuestion(focus){
checked=false;complete=false;$('feedback').textContent='';$('feedback').className='feedback';$('hint-text').hidden=true;$('hint').textContent='Show hint';
let number;do{number=String(Math.floor(Math.random()*100))+'.'+Array.from({length:6},()=>Math.floor(Math.random()*10)).join('');}while(number===previousNumber);previousNumber=number;
decimalTarget=Math.floor(Math.random()*6);const [whole,fraction]=number.split('.');$('problem').replaceChildren(document.createTextNode(whole+'.'));
Array.from(fraction).forEach((digit,i)=>{const span=document.createElement('span');span.textContent=digit;if(i===decimalTarget){span.className='decimal-target';span.setAttribute('aria-label','highlighted digit '+digit);}$('problem').append(span);});
$('boxes').className='decimal-choices';$('boxes').replaceChildren();shuffle(decimalNames.map((_,i)=>i)).forEach(i=>{const b=document.createElement('button');b.type='button';b.textContent=decimalNames[i];b.dataset.place=i;b.onclick=()=>answerDecimal(i);$('boxes').append(b);});
$('hint-text').textContent='Starting just right of the decimal point: tenths, hundredths, thousandths, ten-thousandths, hundred-thousandths, millionths. Each step right is one tenth as much. Zeros still occupy a place.';update();if(focus)$('boxes').querySelector('button').focus();
}
function answerDecimal(choice){
if(checked)return;checked=true;complete=true;const ok=choice===decimalTarget,s=stat();s.attempted++;if(ok){s.perfect++;s.solved++;}
for(const b of $('boxes').querySelectorAll('button')){const i=Number(b.dataset.place);b.disabled=true;if(i===decimalTarget)b.classList.add('correct-choice');else if(i===choice)b.classList.add('wrong-choice');}
const digit=previousNumber.split('.')[1][decimalTarget];$('feedback').className='feedback '+(ok?'good-text':'bad-text');$('feedback').textContent=(ok?'✓ Correct! ':'Not quite. ')+ 'The highlighted '+digit+' is in the '+decimalNames[decimalTarget].toLowerCase()+' place ('+(decimalTarget+1)+' '+(decimalTarget===0?'position':'positions')+' to the right of the decimal point).';persist();update();
}




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



let arithmeticA=0,arithmeticB=0;
function isArithmetic(){return ['addition','subtraction','multiplication'].includes(mode);}
// Keep base-ten arithmetic exact, including large custom whole-number products.
function decimalParts(value){const [whole,fraction='']=String(value).split('.');return {n:BigInt(whole+fraction),places:fraction.length};}
function decimalText(n,places){let text=String(n).padStart(places+1,'0');if(places)text=text.slice(0,-places)+'.'+text.slice(-places);return text.includes('.')?text.replace(/0+$/,'').replace(/\.$/,''):text;}
function arithmeticResult(){const a=decimalParts(arithmeticA),b=decimalParts(arithmeticB),places=Math.max(a.places,b.places);return mode==='multiplication'?decimalText(a.n*b.n,a.places+b.places):decimalText(a.n*10n**BigInt(places-a.places)+(mode==='subtraction'?-1n:1n)*b.n*10n**BigInt(places-b.places),places);}
function decimalPracticeSelected(){return ['addition','subtraction','multiplication'].includes(mode)&&$('arithmetic-kind').value!=='whole';}
function showArithmeticOptions(){const supported=['addition','subtraction','multiplication'].includes(mode);$('arithmetic-kind-label').hidden=!supported;$('arithmetic-precision-label').hidden=!decimalPracticeSelected();$('arithmetic-level').parentElement.hidden=mode==='multiplication'&&!decimalPracticeSelected();for(const side of ['top','bottom'])$('multiplication-'+side+'-label').hidden=mode!=='multiplication'||decimalPracticeSelected();showCustomFactors();}
function arithmeticExplanation(){const result=arithmeticResult(),a=decimalParts(arithmeticA),b=decimalParts(arithmeticB);if(a.places||b.places){if(mode==='addition'||mode==='subtraction'){const places=Math.max(a.places,b.places);return 'Line up the decimal points and '+(mode==='addition'?'add matching place values':'subtract matching place values, regrouping when needed')+': '+Number(arithmeticA).toFixed(places)+(mode==='addition'?' + ':' − ')+Number(arithmeticB).toFixed(places)+' = '+result+'. Zeros at the end do not change the value.';}return 'Multiply as whole numbers: '+a.n+' × '+b.n+' = '+(a.n*b.n)+'. The factors have '+a.places+' + '+b.places+' = '+(a.places+b.places)+' decimal places altogether, so the product is '+result+'. Zeros at the end do not change the value.';}return arithmeticA+(mode==='addition'?' + ':mode==='subtraction'?' − ':' × ')+arithmeticB+' = '+result+'. '+$('hint-text').textContent;}
function renderArithmetic(){
 const symbol=mode==='addition'?'+':mode==='subtraction'?'−':'×',vertical=$('arithmetic-layout').value==='vertical';
 $('problem').className='problem-number '+(vertical?'arithmetic-vertical':'arithmetic-horizontal');
 $('problem').setAttribute('aria-label',arithmeticA+' '+(mode==='addition'?'plus':mode==='subtraction'?'minus':'times')+' '+arithmeticB);
 $('problem').replaceChildren();
 const places=(mode==='addition'||mode==='subtraction')?Math.max(decimalParts(arithmeticA).places,decimalParts(arithmeticB).places):0;const display=n=>places?Number(n).toFixed(places):String(n);
 if(vertical){for(const text of ['',display(arithmeticA),symbol,display(arithmeticB)]){const span=document.createElement('span');span.textContent=text;$('problem').append(span);}const rule=document.createElement('span');rule.className='rule';rule.setAttribute('aria-hidden','true');$('problem').append(rule);}
 else $('problem').textContent=arithmeticA+' '+symbol+' '+arithmeticB+' = ?';
}
function newArithmeticProblem(focus){
 if(mode==='multiplication'&&!decimalPracticeSelected()&&!validateCustomFactors(focus))return;
 const level=$('arithmetic-level').value,max={easy:20,medium:100,hard:1000}[level];
 const factorRange=id=>{const choice=$(id).value;if(choice==='custom'){const n=Number($(id.replace('-size','-custom')).value.trim());return [n,n];}const size=choice==='mixed'?1+Math.floor(Math.random()*4):Number(choice);return [size===1?1:10**(size-1),10**size-1];};
 // Resolve Mixed independently once per new problem, before avoiding a repeat.
 const topRange=mode==='multiplication'&&!decimalPracticeSelected()?factorRange('multiplication-top-size'):[0,max];
 const bottomRange=mode==='multiplication'&&!decimalPracticeSelected()?factorRange('multiplication-bottom-size'):[0,max];
 const randomIn=([min,max])=>min+Math.floor(Math.random()*(max-min+1));
 let a,b;do{a=randomIn(topRange);b=randomIn(bottomRange);if(mode==='subtraction'&&b>a)[a,b]=[b,a];}while(a===arithmeticA&&b===arithmeticB&&(topRange[0]!==topRange[1]||bottomRange[0]!==bottomRange[1]));arithmeticA=a;arithmeticB=b;
 if(decimalPracticeSelected()){
  const depth=Number($('arithmetic-precision').value),limit={easy:9,medium:99,hard:999}[level];
  const operand=forceDecimal=>{const places=forceDecimal?1+Math.floor(Math.random()*depth):0,scale=10**places;let units=Math.floor(Math.random()*(limit*scale+1));if(places&&units%10===0)units=units===limit*scale?units-1:units+1;return decimalText(BigInt(units),places);};
  const mixed=$('arithmetic-kind').value==='mixed';arithmeticA=operand(!mixed||Math.random()<0.5);arithmeticB=operand(!mixed||!String(arithmeticA).includes('.')||Math.random()<0.5);if(mode==='subtraction'&&Number(arithmeticB)>Number(arithmeticA))[arithmeticA,arithmeticB]=[arithmeticB,arithmeticA];
 }
 checked=false;complete=false;$('check').disabled=false;$('feedback').textContent='';$('feedback').className='feedback';$('hint-text').hidden=true;$('hint').textContent='Show hint';renderArithmetic();
 $('boxes').className='boxes single';$('boxes').innerHTML='<label for="arithmetic-answer">Your answer</label><input id="arithmetic-answer" class="word-answer" type="text" inputmode="decimal" autocomplete="off">';
 $('arithmetic-answer').oninput=()=>{$('arithmetic-answer').classList.remove('good','bad');$('arithmetic-answer').removeAttribute('aria-invalid');};
 $('hint-text').textContent=mode==='addition'?'Line up ones, tens, and hundreds. Add from the right; carry when a column totals 10 or more. You can also start with the larger number and count up.':mode==='subtraction'?'Line up place values and subtract from the right. If the top digit is smaller, regroup one from the next column. You can also count up from the smaller number.':'Multiply each place from the right and carry when needed. You can also split a factor into smaller parts, multiply each part, then add the products. Any number times zero is zero.';
 if(decimalPracticeSelected())$('hint-text').textContent=mode==='addition'?'Line up decimal points. Add zeros to fill missing decimal places, then add each column from right to left. Keep the decimal point lined up in the sum.':mode==='subtraction'?'Line up decimal points and add zeros to fill missing decimal places. Subtract from right to left, regrouping from the next column when needed. Keep the decimal point lined up in the difference.':'Multiply as whole numbers first. Count the decimal places in both factors together, then put that many decimal places in the product, adding leading zeros when needed.';
 update();if(focus)$('arithmetic-answer').focus();
}
function checkArithmetic(){
 const input=$('arithmetic-answer'),raw=input.value.trim();
 if(!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(raw)){$('feedback').className='feedback bad-text';$('feedback').textContent='Enter a number, such as 12 or 2.50, before checking.';input.focus();return;}
 if(mode==='multiplication'&&!decimalPracticeSelected()&&!validateCustomFactors(true))return;
 const entered=decimalParts(raw.startsWith('.')?'0'+raw:raw),expected=decimalParts(arithmeticResult());const ok=entered.n*10n**BigInt(expected.places)===expected.n*10n**BigInt(entered.places),s=stat();if(!checked){s.attempted++;if(ok)s.perfect++;checked=true;}if(ok){complete=true;s.solved++;$('check').disabled=true;}
 input.classList.toggle('good',ok);input.classList.toggle('bad',!ok);input.setAttribute('aria-invalid',String(!ok));$('feedback').className='feedback '+(ok?'good-text':'bad-text');$('feedback').textContent=(ok?'✓ Correct! ':'Not quite. ')+arithmeticExplanation();persist();update();
}
try{const data=JSON.parse(localStorage.getItem(KEY));for(const [key,value] of Object.entries(data||{})){if(/^(addition|subtraction|multiplication)Decimal(Kind|Precision)$/.test(key))saved[key]=value;}for(const [key,value] of Object.entries(data?.scores||{})){if(/^(addition|subtraction|multiplication):decimal:(decimals|mixed):[123]:(easy|medium|hard)$/.test(key)&&value&&['perfect','attempted','solved'].every(k=>Number.isSafeInteger(value[k])&&value[k]>=0)&&value.perfect<=value.solved&&value.solved<=value.attempted)saved.scores[key]=value;}}catch(e){}
for(const id of ['arithmetic-kind','arithmetic-precision'])$(id).onchange=()=>{saved[mode+'DecimalKind']=$('arithmetic-kind').value;saved[mode+'DecimalPrecision']=$('arithmetic-precision').value;persist();showArithmeticOptions();newProblem();};
$('arithmetic-level').onchange=()=>newProblem();
$('arithmetic-layout').onchange=renderArithmetic;
function validCustomFactor(raw){return /^\d+$/.test(raw.trim())&&Number.isSafeInteger(Number(raw.trim()))&&Number(raw.trim())>0;}
function validateCustomFactors(focus=false){
 let firstInvalid=null;
 for(const side of ['top','bottom']){
  const input=$('multiplication-'+side+'-custom'),active=$('multiplication-'+side+'-size').value==='custom';
  const invalid=active&&!validCustomFactor(input.value);
  input.setAttribute('aria-invalid',String(invalid));
  $('multiplication-'+side+'-error').textContent=invalid?'Enter a positive whole number from 1 to 9,007,199,254,740,991.':'';
  if(invalid&&!firstInvalid)firstInvalid=input;
 }
 if(firstInvalid&&focus)firstInvalid.focus();
 return !firstInvalid;
}
function saveMultiplicationSettings(){
 for(const side of ['top','bottom']){
  saved['multiplication'+side+'Size']=$('multiplication-'+side+'-size').value;
  const raw=$('multiplication-'+side+'-custom').value.trim();
  if(validCustomFactor(raw))saved['multiplication'+side+'Custom']=raw;
 }
 persist();
}
try{
 const data=JSON.parse(localStorage.getItem(KEY));
 for(const side of ['top','bottom']){
  const size=data?.['multiplication'+side+'Size'],custom=data?.['multiplication'+side+'Custom'];
  if(['1','2','3','4','mixed','custom'].includes(size))$('multiplication-'+side+'-size').value=size;
  if(typeof custom==='string'&&validCustomFactor(custom))$('multiplication-'+side+'-custom').value=custom;
 }
}catch(e){storageOK=false;}
function showCustomFactors(){
 for(const side of ['top','bottom'])$('multiplication-'+side+'-custom-label').hidden=mode!=='multiplication'||decimalPracticeSelected()||$('multiplication-'+side+'-size').value!=='custom';
}
for(const side of ['top','bottom']){
 $('multiplication-'+side+'-size').onchange=()=>{showCustomFactors();saveMultiplicationSettings();newProblem();};
 $('multiplication-'+side+'-custom').oninput=()=>{validateCustomFactors();};
 $('multiplication-'+side+'-custom').onchange=()=>{saveMultiplicationSettings();if(mode==='multiplication')newProblem(false);};
}
saveMultiplicationSettings();



function isWriteForm(){return mode==='writeExpanded'||mode==='writeStandard';}
let writeExpandedValue=0;
function expandedParts(value){return String(value).split('').map((d,i,a)=>Number(d)*10**(a.length-i-1)).filter(Boolean);}
function validExpandedAnswer(raw,value){
 const terms=raw.trim().split('+').map(s=>s.trim());
 if(!terms.every(s=>/^(?:[1-9][0-9]*|[1-9][0-9]{0,2}(?:,[0-9]{3})+)$/.test(s)))return false;
 const actual=terms.map(s=>Number(s.replace(/,/g,''))),expected=expandedParts(value);
 return actual.every(n=>Number.isSafeInteger(n)&&n>0)&&actual.reduce((sum,n)=>sum+n,0)===value&&actual.length===expected.length&&actual.sort((a,b)=>a-b).every((n,i)=>n===expected.slice().sort((a,b)=>a-b)[i]);
}
function newWriteExpandedProblem(focus){
 const level=$('write-expanded-level').value,maxDigits={thousands:4,millions:7,billions:10}[level==='mixed'?shuffle(['thousands','millions','billions'])[0]:level];
 // Include smaller numbers and zero places without showing how many terms are needed.
 const count=2+Math.floor(Math.random()*(maxDigits-1));
 let value;do{value=1+Math.floor(Math.random()*9);for(let i=1;i<count;i++)value=value*10+Math.floor(Math.random()*10);}while(String(value)===previousNumber);
 writeExpandedValue=value;previousNumber=String(value);checked=false;complete=false;
 $('check').disabled=false;$('feedback').textContent='';$('feedback').className='feedback';$('hint-text').hidden=true;$('hint').textContent='Show hint';
 $('problem').replaceChildren();$('boxes').className='expanded-equation';$('boxes').innerHTML='<span class="problem-number" id="expanded-number"></span><input id="expanded-answer" class="word-answer" type="text" aria-label="Your expanded form answer" autocomplete="off" spellcheck="false" aria-describedby="description">';
 $('expanded-number').textContent=(mode==='writeStandard'?expandedParts(value).map(n=>n.toLocaleString('en-US')).join(' + '):value.toLocaleString('en-US'))+' =';
 $('expanded-answer').setAttribute('aria-label',mode==='writeStandard'?'Your standard form answer':'Your expanded form answer');
 $('expanded-answer').oninput=()=>{$('expanded-answer').classList.remove('good','bad');$('expanded-answer').removeAttribute('aria-invalid');};
 $('hint-text').textContent=mode==='writeStandard'?'Match each term to its place, then combine the digits. Keep a zero for any missing place. For example, 600 + 2 = 602.':'Read each digit’s place. Multiply each nonzero digit by its place value, then join the results with +. Skip zero digits. For example, 602 = 600 + 2. Terms can be written in any order.';
 update();if(focus)$('expanded-answer').focus();
}
function checkWriteExpanded(){
 const input=$('expanded-answer'),raw=input.value.trim();
 if(!raw){$('feedback').className='feedback bad-text';$('feedback').textContent='Enter your answer before checking.';input.focus();return;}
 const ok=mode==='writeStandard'?/^(?:[0-9]+|[0-9]{1,3}(?:,[0-9]{3})+)$/.test(raw)&&Number(raw.replace(/,/g,''))===writeExpandedValue:validExpandedAnswer(raw,writeExpandedValue),s=stat();
 if(!checked){s.attempted++;if(ok)s.perfect++;checked=true;}
 if(ok){complete=true;s.solved++;$('check').disabled=true;}
 input.classList.toggle('good',ok);input.classList.toggle('bad',!ok);input.setAttribute('aria-invalid',String(!ok));
 $('feedback').className='feedback '+(ok?'good-text':'bad-text');
 $('feedback').textContent=(ok?'✓ Correct! ':mode==='writeStandard'?'Not quite. Combine the parts and keep zeros for missing places. ':'Not quite. Use one nonzero digit × its place value per term. ')+writeExpandedValue.toLocaleString('en-US')+' = '+expandedParts(writeExpandedValue).map(n=>n.toLocaleString('en-US')).join(' + ')+'. Zero places are omitted.';
 persist();update();
}
$('write-expanded-level').onchange=()=>{saved[mode+'Level']=$('write-expanded-level').value;persist();newProblem();};


function newPlaceValueProblem(focus=true){$('boxes').className='boxes';const wholeCount=saved.level+1,decimals=decimalCount(),count=wholeCount+decimals;do{digits=Array.from({length:count},(_,i)=>i===wholeCount-1||decimals&&i===count-1?1+Math.floor(Math.random()*9):Math.floor(Math.random()*10));}while(digits.join('')===previousNumber);previousNumber=digits.join('');order=shuffle(digits.map((_,i)=>i));if(order.join(',')===previousOrder)order.push(order.shift());previousOrder=order.join(',');checked=false;complete=false;$('check').disabled=false;$('feedback').textContent='';$('hint-text').hidden=true;$('hint').textContent='Show hint';
const value=digits.slice(0,wholeCount).reduce((sum,d,i)=>sum+d*10**i,0);$('problem').replaceChildren();if(mode==='wordsNumber'||mode==='wordsPlace')$('problem').textContent=toWords(value);else if(mode==='place'||mode==='numberWords')$('problem').textContent=value.toLocaleString('en-US')+(decimals?'.'+digits.slice(wholeCount).join(''):'');else{const terms=shuffle(digits.map((d,i)=>d?termText(d,i):null).filter(Boolean));terms.forEach((n,i)=>{if(i)$('problem').append(document.createTextNode(' + '));const span=document.createElement('span');span.className='term';span.textContent=n;$('problem').append(span);});}
$('boxes').replaceChildren();$('boxes').classList.toggle('single',singleAnswer());
$('hint-text').textContent=mode==='numberWords'?'Split the number into groups of three digits from the right. Read each group with its scale: billions, millions, thousands, then ones.':mode==='wordsNumber'?'Use groups of three digits for billions, millions, thousands, and ones. A missing group is 000; keep zeros inside each group.':'Read place values from the right: Ones, Tens, Hundreds, then Thousands, Ten Thousands, and so on. Each step left is worth ten times as much. A missing place means its digit is 0.';
if(decimals)$('hint-text').textContent+=' To the right of the decimal point are Tenths, Hundredths, Thousandths, Ten-thousandths, and Hundred-thousandths. Enter one digit in each box, including 0 for any missing decimal place.';
if(singleAnswer()){const label=document.createElement('label');label.htmlFor='answer';label.textContent=mode==='wordsNumber'?'Your number':'Your number in words';const input=document.createElement('input');input.id='answer';input.className='word-answer';input.autocomplete='off';input.spellcheck=false;if(mode==='wordsNumber')input.inputMode='numeric';input.addEventListener('input',()=>{input.classList.remove('good','bad');input.removeAttribute('aria-invalid');});$('boxes').append(label,input);}else for(const i of order){const slot=document.createElement('div');slot.className='slot';const label=document.createElement('label');label.htmlFor='digit-'+i;label.textContent=placeName(i);const input=document.createElement('input');input.id='digit-'+i;input.className='digit';input.type='text';input.inputMode='numeric';input.pattern='[0-9]';input.maxLength=1;input.autocomplete='off';input.setAttribute('aria-describedby','status-'+i);const status=document.createElement('span');status.id='status-'+i;status.className='status';input.addEventListener('input',()=>{input.value=input.value.replace(/[^0-9]/g,'').slice(-1);input.classList.remove('good','bad');input.removeAttribute('aria-invalid');status.textContent='';});slot.append(label,input,status);$('boxes').append(slot);}update();if(focus)$(singleAnswer()?'answer':'digit-'+order[0]).focus();}

function checkPlaceValue(){if(singleAnswer()){
const input=$('answer'),raw=input.value.trim();if(!raw){$('feedback').className='feedback bad-text';$('feedback').textContent='Enter your answer before checking.';input.focus();return;}
const validNumber=/^(?:[0-9]+|[0-9]{1,3}(?:,[0-9]{3})+)$/.test(raw);
const ok=mode==='wordsNumber'?validNumber&&Number(raw.replace(/,/g,''))===valueNow():normalizeWords(raw)===normalizeWords(toWords(valueNow()));
input.classList.toggle('good',ok);input.classList.toggle('bad',!ok);input.setAttribute('aria-invalid',String(!ok));const s=stat();if(!checked){s.attempted++;if(ok)s.perfect++;checked=true;}if(ok){complete=true;s.solved++;$('check').disabled=true;}$('feedback').className='feedback '+(ok?'good-text':'bad-text');$('feedback').textContent=ok?'✓ Correct! Ready for a new problem?':'Not quite. Check each group and try again.';persist();update();return;}const missing=order.find(i=>!$('digit-'+i).value);if(missing!==undefined){$('feedback').className='feedback bad-text';$('feedback').textContent='Fill in every box with one digit before checking.';$('digit-'+missing).focus();return;}let correct=0;for(const i of order){const input=$('digit-'+i),ok=Number(input.value)===digits[i];correct+=Number(ok);input.classList.toggle('good',ok);input.classList.toggle('bad',!ok);input.setAttribute('aria-invalid',String(!ok));const status=$('status-'+i);status.textContent=ok?'✓ Correct':'✕ Try again';status.className='status '+(ok?'good-text':'bad-text');}const s=stat();if(!checked){s.attempted++;if(correct===digits.length)s.perfect++;checked=true;}if(correct===digits.length){complete=true;s.solved++;$('check').disabled=true;$('feedback').className='feedback good-text';$('feedback').textContent='✓ All correct! Ready for a new problem?';}else{$('feedback').className='feedback bad-text';$('feedback').textContent=correct+' of '+digits.length+' correct. Check the red boxes and try again.';}persist();update();}

function newProblem(focus=true){if(!isWriteForm()&&!isArithmetic()){$('problem').className='problem-number';$('problem').removeAttribute('aria-label');}gameHandlers[mode].newProblem(focus);}

function start(activity){expressionRound={answered:0,correct:0};$('next').disabled=false;mode=activity;$('arithmetic-kind').value=['whole','decimals','mixed'].includes(saved[mode+'DecimalKind'])?saved[mode+'DecimalKind']:'whole';$('arithmetic-precision').value=['1','2','3'].includes(saved[mode+'DecimalPrecision'])?saved[mode+'DecimalPrecision']:'1';$('write-expanded-controls').hidden=!isWriteForm();$('write-expanded-level').value=saved[mode+'Level']||'thousands';$('problem').parentElement.hidden=isWriteForm();$('check').textContent=isWriteForm()?'Check Answer':'Check answers';showCustomFactors();saved.lastActivity=activity;persist();updateContinue();$('category').hidden=true;const decomposition=isDecomposition();$('decomposition-controls').hidden=!decomposition;if(decomposition){$('decomposition-level').value=saved[mode+'Level']||'thousands';$('decomposition-mode').value=saved[mode+'Mode']||'standard';}const decimal=mode==='decimalQuiz'||decomposition;$('level').parentElement.hidden=decimal||isArithmetic()||isWriteForm();$('arithmetic-controls').hidden=!isArithmetic();$('arithmetic-level').parentElement.hidden=mode==='multiplication';$('multiplication-top-label').hidden=mode!=='multiplication';$('multiplication-bottom-label').hidden=mode!=='multiplication';$('back').textContent='← '+categoryInfo[gameMetadata.find(g=>g.id===mode).category][0];$('game-tag').textContent=mode==='writeStandard'?'One answer · combine the parts':mode==='writeExpanded'?'One answer · any term order':isDecomposition()?'One quick question at a time':isArithmetic()?'One step at a time':'Shuffled every problem';$('check').hidden=decimal;$('next').textContent=decimal?'New Question ↻':'New Problem ↻';$('decimal-controls').hidden=mode!=='place'&&mode!=='expanded';$('home').hidden=true;$('game').hidden=false;$('level').value=saved.level;[$('title').textContent,$('description').textContent,$('problem-label').textContent]=activities[mode];showArithmeticOptions();newProblem(false);$('title').tabIndex=-1;$('title').focus();}
document.querySelectorAll('[data-start]').forEach(b=>b.addEventListener('click',()=>start(b.dataset.start)));
const categoryInfo = {"numberSense":["Number Sense","Place values, expanded form, number words, and decimals."],"arithmetic":["Arithmetic","Build fluency with addition, subtraction, multiplication, and division."],"preAlgebra":["Pre-Algebra","Get ready for variables, patterns, and expressions."],"algebra":["Algebra","Explore equations and grow your problem-solving skills."]};
let currentCategory='numberSense';
function updateContinue(){const activity=saved.lastActivity;$('continue-panel').hidden=!activity;if(activity)$('continue-description').textContent=activities[activity][0];}
function filterExercises(){const query=$('exercise-search').value.trim().toLowerCase();let count=0;document.querySelectorAll('#exercise-cards .card').forEach(card=>{card.hidden=card.dataset.gameCategory!==currentCategory||!card.textContent.toLowerCase().includes(query);if(!card.hidden)count++;});$('search-empty').hidden=count!==0;}
function openCategory(id){currentCategory=id;$('home').hidden=true;$('game').hidden=true;$('category').hidden=false;$('category-title').textContent=categoryInfo[id][0];$('category-description').textContent=categoryInfo[id][1];const hasGames=gameMetadata.some(g=>g.category===id);$('number-sense-exercises').hidden=!hasGames;$('arithmetic-exercises').hidden=true;$('coming-soon').hidden=hasGames;filterExercises();$('category-title').focus();}
document.querySelectorAll('[data-category]').forEach(button=>button.onclick=()=>openCategory(button.dataset.category));
$('category-back').onclick=()=>{$('category').hidden=true;$('home').hidden=false;update();updateContinue();document.querySelector('[data-category="'+currentCategory+'"]').focus();};
$('explore-number-sense').onclick=()=>openCategory('numberSense');
$('exercise-search').oninput=filterExercises;
$('continue-practice').onclick=()=>{if(saved.lastActivity)start(saved.lastActivity);};
$('back').onclick=()=>{openCategory(gameMetadata.find(g=>g.id===mode).category);$('exercise-search').value='';filterExercises();update();document.querySelector('[data-start="'+mode+'"]').focus();};
$('include-decimals').checked=!!saved.includeDecimals;
$('decimal-depth').value=saved.decimalDepth||1;
$('decimal-depth-label').hidden=!$('include-decimals').checked;
updateContinue();
$('level').onchange=()=>{saved.level=Number($('level').value);persist();newProblem();};$('next').onclick=()=>newProblem();
$('include-decimals').onchange=()=>{saved.includeDecimals=$('include-decimals').checked;persist();$('decimal-depth-label').hidden=!$('include-decimals').checked;newProblem();};
$('decimal-depth').onchange=()=>{saved.decimalDepth=Number($('decimal-depth').value);persist();newProblem();};
$('hint').onclick=()=>{$('hint-text').hidden=!$('hint-text').hidden;$('hint').textContent=$('hint-text').hidden?'Show hint':'Hide hint';};
$('quiz').onsubmit=e=>{e.preventDefault();if(complete)return;gameHandlers[mode].check();};
let resetArmed=false;$('reset').onclick=()=>{if(!resetArmed){resetArmed=true;$('reset').textContent='Confirm reset';$('reset-message').textContent=' Click again to clear every score.';return;}saved.scores={};persist();update();resetArmed=false;$('reset').textContent='Reset all scores';$('reset-message').textContent=' Scores cleared.';};
$('level').value=saved.level;update();persist();


(()=>{
'use strict';
const $=id=>document.getElementById(id), cats=Object.fromEntries(Object.entries(categoryInfo).map(([id,info])=>[id,info[0]])), key='mathPracticeVocabulary.v1';
const seeds = [{"id":"seed-1","name":"Integer","definition":"A whole number or its negative, including zero. Integers have no fractional part.","example":"−3, 0, and 12 are integers; 1/3 and 0.56 are not.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-2","name":"Prime number","definition":"A whole number greater than 1 with exactly two positive factors: 1 and itself.","example":"2, 3, 5, and 7 are prime. 1 is neither prime nor composite.","tags":["numberSense","preAlgebra","arithmetic"]},{"id":"seed-3","name":"Composite number","definition":"A whole number greater than 1 with more than two positive factors.","example":"6 has factors 1, 2, 3, and 6.","tags":["numberSense","preAlgebra","arithmetic"]},{"id":"seed-4","name":"Even number","definition":"An integer divisible by 2 with no remainder.","example":"−4, 0, and 18 are even.","tags":["numberSense","preAlgebra","arithmetic"]},{"id":"seed-5","name":"Odd number","definition":"An integer that is not divisible by 2 with no remainder.","example":"−3, 1, and 17 are odd.","tags":["numberSense","preAlgebra","arithmetic"]},{"id":"seed-6","name":"Decimal number","definition":"A number written using base-10 place value, often with a decimal point to show a fractional part.","example":"3.75 = 3 + 7/10 + 5/100.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-7","name":"Decimal point","definition":"The symbol that separates the whole-number part from the fractional part in decimal notation.","example":"In 12.34, the point separates 12 from 34 hundredths.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-8","name":"Decimal place","definition":"A position to the right of the decimal point; its value is a power of one tenth.","example":"In 0.47, 4 is in the tenths place and 7 is in the hundredths place.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-9","name":"Base-10 / decimal system","definition":"A number system using the digits 0–9. Each place is worth ten times the place immediately to its right.","example":"In 222, the digits mean 200, 20, and 2.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-10","name":"Rational number","definition":"A number that can be written as a/b, where a and b are integers and b is not zero. Its decimal form terminates or eventually repeats.","example":"1/3 = 0.333…; 0.56 = 14/25; −4 = −4/1.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-11","name":"Irrational number","definition":"A real number that cannot be written as a ratio of two integers. Its decimal form never terminates or eventually repeats.","example":"π and √2 are irrational.","tags":["numberSense","preAlgebra","algebra"]},{"id":"seed-12","name":"Expanded form","definition":"A way to write a number as a sum of its place-value parts.","example":"832 = 800 + 30 + 2.","tags":["numberSense","preAlgebra"]},{"id":"seed-13","name":"Factor","definition":"A number multiplied by another to make a product. A whole-number factor divides a whole number with no remainder.","example":"3 × 4 = 12, so 3 and 4 are factors of 12.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-14","name":"Multiple","definition":"The result of multiplying a number by an integer.","example":"0, 6, 12, and 18 are multiples of 6.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-15","name":"Whole number","definition":"One of the numbers 0, 1, 2, 3, and so on.","example":"0 and 25 are whole numbers; −1 and 2.5 are not.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-16","name":"Natural number","definition":"A counting number: 1, 2, 3, and so on. Some books include 0, so check the convention being used.","example":"1, 2, and 3 are natural numbers under either convention.","tags":["numberSense","preAlgebra"]},{"id":"seed-17","name":"Digit","definition":"A single symbol used to write numbers. The base-10 digits are 0 through 9.","example":"507 has three digits: 5, 0, and 7.","tags":["numberSense","preAlgebra"]},{"id":"seed-18","name":"Place value","definition":"The value a digit has because of its position in a number.","example":"In 452, the 5 represents 50.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-19","name":"Standard form","definition":"In basic place-value work, the usual way to write a number using digits. The phrase has other meanings in later math.","example":"800 + 30 + 2 written in standard form is 832.","tags":["numberSense","preAlgebra"]},{"id":"seed-20","name":"Fraction","definition":"A number written as a/b, where the denominator b is not zero. It can describe parts of a whole or a quotient.","example":"3/4 represents three of four equal parts.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-21","name":"Numerator","definition":"The top number in a fraction.","example":"In 3/4, the numerator is 3.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-22","name":"Denominator","definition":"The bottom number in a fraction; it cannot be zero. For equal parts of a whole, it tells how many parts make one whole.","example":"In 3/4, the denominator is 4.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-23","name":"Mixed number","definition":"A whole number together with a proper fraction.","example":"7 3/4 = 7 + 3/4.","tags":["numberSense","arithmetic","preAlgebra"]},{"id":"seed-24","name":"Sum","definition":"The result of addition.","example":"8 + 5 = 13; the sum is 13.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-25","name":"Difference","definition":"The result of subtraction.","example":"9 − 4 = 5; the difference is 5.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-26","name":"Product","definition":"The result of multiplication.","example":"3 × 4 = 12; the product is 12.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-27","name":"Quotient","definition":"The result of division.","example":"12 ÷ 3 = 4; the quotient is 4.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-28","name":"Remainder","definition":"The amount left after dividing whole numbers into equal groups, when the answer is expressed as a whole-number quotient and a remainder.","example":"17 ÷ 5 = 3 remainder 2.","tags":["numberSense","arithmetic","preAlgebra"]},{"id":"seed-29","name":"Equivalent","definition":"Having the same value.","example":"1/2 and 0.5 are equivalent.","tags":["numberSense","arithmetic","preAlgebra","algebra"]},{"id":"seed-30","name":"Variable","definition":"A symbol, often a letter, representing a number or quantity.","example":"In x + 3 = 8, x represents 5.","tags":["preAlgebra","algebra"]},{"id":"seed-31","name":"Expression","definition":"A mathematical phrase made of numbers, variables, and operations, without an equals sign stating an equation.","example":"3x + 2 is an expression.","tags":["preAlgebra","algebra"]},{"id":"seed-32","name":"Equation","definition":"A statement that two expressions have equal values.","example":"3x + 2 = 11 is an equation.","tags":["preAlgebra","algebra"]},{"id":"seed-33","name":"Coefficient","definition":"A numerical factor multiplying a variable or variable expression.","example":"In 5x, the coefficient of x is 5.","tags":["preAlgebra","algebra"]},{"id":"seed-34","name":"Constant","definition":"A quantity with a fixed value. A constant term contains no variable.","example":"In 3x + 7, the constant term is 7.","tags":["preAlgebra","algebra"]},{"id":"seed-35","name":"Exponent","definition":"A number indicating how many times a base is used as a factor when the exponent is a positive integer.","example":"2³ = 2 × 2 × 2 = 8; 3 is the exponent.","tags":["numberSense","preAlgebra","algebra"]},{"id":"seed-36","name":"Absolute value","definition":"A number’s distance from zero on the number line. It is always nonnegative.","example":"|−5| = 5 and |5| = 5.","tags":["numberSense","preAlgebra","algebra"]},{"id":"seed-37","name":"Percent","definition":"A ratio expressed per hundred.","example":"25% = 25/100 = 1/4 = 0.25.","tags":["numberSense","arithmetic","preAlgebra"]},{"id":"seed-38","name":"Order of operations","definition":"The agreed order for evaluating expressions: grouping, exponents, multiplication and division from left to right, then addition and subtraction from left to right.","example":"2 + 3 × 4 = 14.","tags":["numberSense","arithmetic","preAlgebra","algebra"]}];
// Display these starter-entry additions alongside saved vocabulary without rewriting user data.
const parityTips={
 'seed-4':{tip:'Any whole number ending in 0, 2, 4, 6, or 8 is even.',examples:'12, 48, 130, 2456'},
 'seed-5':{tip:'Any whole number ending in 1, 3, 5, 7, or 9 is odd.',examples:'13, 47, 135, 2459'}
};
function relatedGroup(t){return typeof t.relatedGroup==='string'?t.relatedGroup.trim():['seed-4','seed-5'].includes(t.id)?'Even and odd numbers':'';}
function groupKey(t){return relatedGroup(t).toLocaleLowerCase();}
function quickTip(t){
 const comparison=comparisonTerms.find(c=>comparisonMatch(t,c));
 if(comparison?.id==='compare-greater')return {tip:'The pointed end of > points right, toward the smaller number. The larger number is on the left; the open side faces it.',examples:'8 > 3 — 8 is greater than 3. The pointed end faces 3.'};
 if(comparison?.id==='compare-less')return {tip:'The pointed end of < points left, toward the smaller number. The smaller number is on the left; the open side faces the larger number on the right.',examples:'3 < 8 — 3 is less than 8. The pointed end faces 3.'};
 return parityTips[t.id];
}
let terms=seeds.map(t=>({...t,tags:[...t.tags]})), editing=null, returnView='home', returnFocus=null, editorFocus=null;
const valid=t=>t&&typeof t.id==='string'&&typeof t.name==='string'&&t.name.trim()&&t.name.length<=100&&typeof t.definition==='string'&&t.definition.trim()&&t.definition.length<=2000&&typeof t.example==='string'&&t.example.length<=1500&&Array.isArray(t.tags)&&t.tags.length&&t.tags.every(c=>Object.hasOwn(cats,c));
try{const raw=localStorage.getItem(key);if(raw!==null){const data=JSON.parse(raw);if(data.version!==1||!Array.isArray(data.terms)||!data.terms.every(valid)||new Set(data.terms.map(t=>t.id)).size!==data.terms.length)throw Error();terms=data.terms;}}catch(e){$('vocab-message').textContent='Saved vocabulary could not be loaded. The starter collection is available; edits will try to save again.';}
const comparisonTerms=[
{id:'compare-greater',name:'Greater Than (>)',definition:'Shows that the number on the left is larger than the number on the right.',example:'8 > 3',aliases:['greater','greater than','>']},
{id:'compare-less',name:'Less Than (<)',definition:'Shows that the number on the left is smaller than the number on the right.',example:'3 < 8',aliases:['less','less than','<']},
{id:'compare-equal',name:'Equal To (=)',definition:'Shows that both sides have the same value.',example:'5 = 5',aliases:['equal','equals','equal to','=']},
{id:'compare-approximately',name:'Approximately Equal To (≈)',definition:'Shows that two values are close, but do not have to be exactly the same. It means about equal to.',example:'10,498 ≈ 10,500 (rounded to the nearest hundred)',aliases:['approximately','approximately equal','approximately equal to','approximate','about','about equal','almost equal','≈']},
{id:'compare-not-equal',name:'Not Equal To (≠)',definition:'Shows that the two sides have different values.',example:'5 ≠ 3',aliases:['not equal','not equal to','does not equal','unequal','≠']}
].map(t=>({...t,tags:['numberSense','arithmetic','preAlgebra','algebra'],relatedGroup:'Comparing numbers'}));
function comparisonMatch(t,c){return t.id===c.id||c.aliases.includes(t.name.toLowerCase().trim())||t.name.toLowerCase().trim()===c.name.toLowerCase();}
for(const c of comparisonTerms)if(!terms.some(t=>comparisonMatch(t,c)))terms.push({...c,tags:[...c.tags]});
const friendlyNumber={id:'friendly-number',name:'Friendly number',aliases:['friendly numbers','compatible numbers'],definition:'A number chosen because it is easier to calculate with mentally, often a nearby multiple of 2, 5, 10, 100, or 1,000. Friendly numbers are used for estimation and mental arithmetic. Estimates can differ depending on the numbers chosen. A friendly-number estimate is not necessarily standard rounding to a specified place.',example:'525,879 + 251,213 ≈ 525,000 + 250,000 = 775,000. The exact total is 777,092.',tags:['numberSense','arithmetic']};
if(!terms.some(t=>t.id===friendlyNumber.id))terms.push({...friendlyNumber,tags:[...friendlyNumber.tags]});
function searchKeywords(t){const own=[t.aliases,t.keywords].flatMap(v=>Array.isArray(v)?v.filter(x=>typeof x==='string'):typeof v==='string'?[v]:[]);return [...own,...comparisonTerms.filter(c=>comparisonMatch(t,c)).flatMap(c=>c.aliases)].join(' ');}
function save(){try{localStorage.setItem(key,JSON.stringify({version:1,terms}));$('vocab-message').textContent='Saved in this browser.';}catch(e){$('vocab-message').textContent='Browser storage is unavailable or full. Your changes will last only for this session.';}}
function el(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
for(const [id,label] of Object.entries(cats)){
 const opt=el('option',label);opt.value=id;$('vocab-filter').append(opt);
 const labelEl=el('label'),box=el('input');box.type='checkbox';box.value=id;box.name='vocab-category';labelEl.append(box,document.createTextNode(label));$('vocab-tags').append(labelEl);
}
function render(){
 const q=$('vocab-search').value.trim().toLocaleLowerCase(),cat=$('vocab-filter').value;
 const visible=terms.filter(t=>(cat==='all'||t.tags.includes(cat))&&(['=','≈','≠','>','<'].includes(q)?comparisonTerms.some(c=>c.aliases.includes(q)&&comparisonMatch(t,c)):[t.name,t.definition,t.example,searchKeywords(t),relatedGroup(t),quickTip(t)?.tip??'',quickTip(t)?.examples??'',...t.tags.map(c=>cats[c])].join(' ').toLocaleLowerCase().includes(q))).sort((a,b)=>a.name.localeCompare(b.name));
 const groupOrder=new Map();
 for(const t of visible){const k=groupKey(t);if(k&&!groupOrder.has(k))groupOrder.set(k,t.name);}
 visible.sort((a,b)=>(groupOrder.get(groupKey(a))||a.name).localeCompare(groupOrder.get(groupKey(b))||b.name)||a.name.localeCompare(b.name));
 const groupContainers=new Map();
 $('vocab-groups').replaceChildren();for(const label of [...new Set(terms.map(relatedGroup).filter(Boolean))].sort()){const option=el('option');option.value=label;$('vocab-groups').append(option);}
 $('vocab-list').replaceChildren();$('vocab-count').textContent=visible.length+' of '+terms.length+' terms'+(cat==='all'?' · All categories':' · '+cats[cat]);$('vocab-empty').hidden=visible.length!==0;
 for(const t of visible){const card=el('article',undefined,'panel vocab-item');card.append(el('h2',t.name),el('p',t.definition));if(t.example)card.append(el('p','Example: '+t.example,'vocab-example'));const tip=quickTip(t);if(tip){const note=el('p',undefined,'vocab-example');note.append(el('strong','Quick Tip: '),document.createTextNode(tip.tip));card.append(note,el('p','Examples: '+tip.examples,'vocab-example'));}const tags=el('div',undefined,'vocab-tags');t.tags.forEach(c=>tags.append(el('span',cats[c],'tag')));card.append(tags);const actions=el('div',undefined,'actions');const edit=el('button','Edit','quiet'),del=el('button','Delete','quiet');edit.type=del.type='button';edit.setAttribute('aria-label','Edit '+t.name);del.setAttribute('aria-label','Delete '+t.name);edit.onclick=()=>editTerm(t,edit);del.onclick=()=>{if(!confirm('Delete “'+t.name+'” from every category?'))return;if(editing===t.id)closeEditor(false);terms=terms.filter(x=>x.id!==t.id);save();render();$('vocab-add').focus();};actions.append(edit,del);card.append(actions);const k=groupKey(t);let parent=$('vocab-list');if(k){if(!groupContainers.has(k)){const section=el('section');section.style.gridColumn='1 / -1';section.setAttribute('aria-label',relatedGroup(t));const heading=el('h2',relatedGroup(t));heading.style.marginTop='0';const grid=el('div',undefined,'vocab-grid');section.append(heading,grid);$('vocab-list').append(section);groupContainers.set(k,grid);}parent=groupContainers.get(k);}parent.append(card);}
}
function closeEditor(focus=true){$('vocab-editor').hidden=true;editing=null;if(focus)(editorFocus?.isConnected?editorFocus:$('vocab-add')).focus();}
function editTerm(t,trigger){editing=t?.id??null;editorFocus=trigger;$('vocab-editor-title').textContent=t?'Edit term':'Add a term';$('vocab-name').value=t?.name??'';$('vocab-definition').value=t?.definition??'';$('vocab-example').value=t?.example??'';$('vocab-group').value=t?relatedGroup(t):'';document.querySelectorAll('#vocab-tags input').forEach(b=>b.checked=t?t.tags.includes(b.value):$('vocab-filter').value===b.value);$('vocab-error').textContent='';$('vocab-editor').hidden=false;$('vocab-name').focus();}
function open(cat,view,trigger){returnView=view;returnFocus=trigger;['home','category','game'].forEach(id=>$(id).hidden=true);$('vocabulary').hidden=false;$('vocab-back').textContent=view==='home'?'← Home':'← '+cats[cat];$('vocab-filter').value=cat;$('vocab-search').value='';closeEditor(false);render();$('vocab-title').focus();}
$('vocab-home-open').onclick=e=>open('all','home',e.currentTarget);
$('vocab-category-open').onclick=e=>open(currentCategory,'category',e.currentTarget);
$('vocab-back').onclick=()=>{closeEditor(false);$('vocabulary').hidden=true;$(returnView).hidden=false;returnFocus.focus();};
$('vocab-add').onclick=e=>editTerm(null,e.currentTarget);$('vocab-cancel').onclick=()=>closeEditor();
$('vocab-editor').addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeEditor();}});
$('vocab-search').oninput=render;$('vocab-filter').onchange=render;
$('vocab-editor').onsubmit=e=>{e.preventDefault();const name=$('vocab-name').value.trim(),definition=$('vocab-definition').value.trim(),example=$('vocab-example').value.trim(),tags=Array.from(document.querySelectorAll('#vocab-tags input:checked'),b=>b.value);let error='',target=$('vocab-name');if(!name||!definition){error='Enter a term and a definition.';target=!name?$('vocab-name'):$('vocab-definition');}else if(!tags.length){error='Choose at least one category.';target=$('vocab-tags').querySelector('input');}else if(terms.some(t=>t.id!==editing&&t.name.trim().toLocaleLowerCase()===name.toLocaleLowerCase())){error='That term already exists. Edit its existing entry to add categories.';}if(error){$('vocab-error').textContent=error;target.focus();return;}const term={...(editing?terms.find(t=>t.id===editing):{}),relatedGroup:$('vocab-group').value.trim(),id:editing??('custom-'+Date.now()+'-'+Math.random().toString(36).slice(2)),name,definition,example,tags};if(editing)terms=terms.map(t=>t.id===editing?term:t);else terms.push(term);save();closeEditor(false);render();$('vocab-add').focus();};
})();


(()=>{'use strict';
const $=id=>document.getElementById(id),key='mathPracticeCompare.v1',ranges={thousands:[1000,9999],tenThousands:[10000,99999],hundredThousands:[100000,999999],millions:[1000000,9999999]};
let settings={range:'thousands',length:5,equality:false},totals={perfect:0,attempted:0,solved:0},questions=[],index=0,perfect=0,attempted=false,solved=false,selected='';
try{const d=JSON.parse(localStorage.getItem(key));if(d){if(d.settings&&(d.settings.range in ranges||d.settings.range==='mixed'))settings.range=d.settings.range;if([5,10].includes(d.settings?.length))settings.length=d.settings.length;if(typeof d.settings?.equality==='boolean')settings.equality=d.settings.equality;if(d.totals&&['perfect','attempted','solved'].every(k=>Number.isSafeInteger(d.totals[k])&&d.totals[k]>=0)&&d.totals.perfect<=d.totals.solved&&d.totals.solved<=d.totals.attempted)totals=d.totals;}}catch(e){}
function save(){try{localStorage.setItem(key,JSON.stringify({settings,totals}));}catch(e){$('compare-storage').textContent='Works offline. Browser storage is unavailable; comparison progress lasts for this session.';}}
$('compare-range').value=settings.range;$('compare-length').value=settings.length;$('compare-equality').checked=settings.equality;
function stats(){ $('compare-score').textContent=perfect+' perfect first tries';$('compare-lifetime').textContent='All comparison rounds: '+totals.perfect+' / '+totals.attempted+' perfect first tries · '+totals.solved+' solved';}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function integer(a,b){return a+Math.floor(Math.random()*(b-a+1));}
function round(){settings={range:$('compare-range').value,length:Number($('compare-length').value),equality:$('compare-equality').checked};save();let n=settings.length,eq=settings.equality?(n===5?1:2):0,remaining=n-eq,greater=Math.floor(remaining/2)+(remaining%2?integer(0,1):0);const signs=shuffle([...Array(eq).fill('='),...Array(greater).fill('>'),...Array(remaining-greater).fill('<')]),seen=new Set();questions=signs.map(sign=>{let a,b,k;do{let r=settings.range==='mixed'?ranges[Object.keys(ranges)[integer(0,3)]]:ranges[settings.range];a=integer(...r);b=sign==='='?a:integer(...r);if(sign!=='='&&a===b)b=a===r[1]?a-1:a+1;if(sign==='>'&&a<b||sign==='<'&&a>b)[a,b]=[b,a];k=Math.min(a,b)+':'+Math.max(a,b);}while(seen.has(k));seen.add(k);return {a,b,sign};});index=0;perfect=0;$('compare-summary').hidden=true;$('compare-form').hidden=false;show();}
function show(){attempted=false;solved=false;selected='';const q=questions[index];$('compare-left').textContent=q.a.toLocaleString('en-US');$('compare-right').textContent=q.b.toLocaleString('en-US');$('compare-sign').value='';$('compare-sign').disabled=false;$('compare-check').disabled=false;$('compare-next').disabled=true;$('compare-next').textContent=index===questions.length-1?'See round summary →':'Next question →';$('compare-progress-label').textContent='Question '+(index+1)+' of '+questions.length;$('compare-progress').max=questions.length;$('compare-progress').value=index;$('compare-feedback').textContent='';$('compare-hint').hidden=true;$('compare-hint-toggle').textContent='Show hint';$('compare-hint-toggle').setAttribute('aria-expanded','false');stats();}
$('compare-form').onsubmit=e=>{e.preventDefault();if(solved)return;selected=$('compare-sign').value;const f=$('compare-feedback');if(!selected){f.textContent='Choose >, <, or = before checking.';f.className='feedback bad-text';$('compare-sign').focus();return;}const q=questions[index],ok=selected===q.sign;if(!attempted){totals.attempted++;if(ok){perfect++;totals.perfect++;}attempted=true;}if(ok){solved=true;totals.solved++;$('compare-sign').disabled=true;$('compare-check').disabled=true;$('compare-next').disabled=false;$('compare-progress').value=index+1;f.textContent='✓ Correct! '+q.a.toLocaleString('en-US')+' '+q.sign+' '+q.b.toLocaleString('en-US')+'.';$('compare-next').focus();}else{f.textContent='Not quite. Compare the place values from left to right, then try again. You can still solve this question.';}f.className='feedback '+(ok?'good-text':'bad-text');save();stats();};
$('compare-next').onclick=()=>{if(!solved)return;if(index<questions.length-1){index++;show();$('compare-sign').focus();}else{$('compare-form').hidden=true;$('compare-summary').hidden=false;$('compare-summary').textContent='Round complete! You solved all '+questions.length+' questions and got '+perfect+' / '+questions.length+' correct on your first try ('+Math.round(perfect/questions.length*100)+'%). Start a new round to keep practicing.';$('compare-progress-label').textContent='Round complete';$('compare-summary').focus();}};
$('compare-hint-toggle').onclick=()=>{const hidden=!$('compare-hint').hidden;$('compare-hint').hidden=hidden;$('compare-hint-toggle').setAttribute('aria-expanded',String(!hidden));$('compare-hint-toggle').textContent=hidden?'Show hint':'Hide hint';};
for(const id of ['compare-range','compare-length','compare-equality'])$(id).onchange=()=>{settings={range:$('compare-range').value,length:Number($('compare-length').value),equality:$('compare-equality').checked};save();};
$('compare-restart').onclick=()=>{round();$('compare-sign').focus();};$('compare-open').onclick=()=>{$('category').hidden=true;$('compare').hidden=false;round();$('compare-title').focus();};$('compare-back').onclick=()=>{$('compare').hidden=true;openCategory(gameMetadata.find(g=>g.id==='compare').category);$('compare-open').focus();};
})();


(()=>{'use strict';
const $=id=>document.getElementById(id),key='mathPracticeRounding.v1',names=["ten","hundred","thousand","ten thousand","hundred thousand","million","ten million","hundred million"],fmt=n=>n.toLocaleString('en-US');
let settings={place:'1',length:5},scores={},questions=[],index=0,correct=0,answered=false;
const validScore=t=>t&&['perfect','attempted','solved'].every(k=>Number.isSafeInteger(t[k])&&t[k]>=0)&&t.perfect<=t.solved&&t.solved<=t.attempted;
try{const d=JSON.parse(localStorage.getItem(key));if(d){if(['1','2','3','4','5','6','7','8','mixed','mixedLarge'].includes(d.settings?.place))settings.place=d.settings.place;if([5,10].includes(d.settings?.length))settings.length=d.settings.length;for(const [k,t] of Object.entries(d.scores||{}))if(['1','2','3','4','5','6','7','8','mixed','mixedLarge'].includes(k)&&validScore(t))scores[k]=t;}}catch(e){}
function save(){try{localStorage.setItem(key,JSON.stringify({settings,scores}));}catch(e){$('rounding-storage').textContent='Works offline. Browser storage is unavailable; rounding progress lasts for this session.';}}
function stats(){const t=Object.values(scores).reduce((a,b)=>({perfect:a.perfect+b.perfect,attempted:a.attempted+b.attempted,solved:a.solved+b.solved}),{perfect:0,attempted:0,solved:0});$('rounding-score').textContent=correct+' / '+(index+(answered?1:0))+' correct this round';$('rounding-lifetime').textContent='All rounding rounds: '+t.perfect+' / '+t.attempted+' correct · '+t.solved+' solved';}
const integer=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
function round(){settings={place:$('rounding-place').value,length:Number($('rounding-length').value)};save();const max=settings.place==='mixedLarge'?8:6,bag=[];for(let i=1;i<=max;i++)bag.push(i);for(let i=bag.length-1;i>0;i--){const j=integer(0,i);[bag[i],bag[j]]=[bag[j],bag[i]];}const seen=new Set();questions=Array.from({length:settings.length},(_,i)=>{const exp=settings.place.startsWith('mixed')?bag[i%bag.length]:Number(settings.place),unit=10**exp;let n;do{n=integer(1,99)*unit+integer(0,unit-1);}while(seen.has(exp+':'+n));seen.add(exp+':'+n);return {n,exp,unit,answer:Math.floor((n+unit/2)/unit)*unit};});index=0;correct=0;$('rounding-summary').hidden=true;$('rounding-form').hidden=false;show();}
function show(){answered=false;const q=questions[index];$('rounding-prompt').textContent='Round this number to the nearest '+names[q.exp-1]+'.';$('rounding-number').textContent=fmt(q.n);$('rounding-answer').value='';$('rounding-answer').disabled=false;$('rounding-answer').className='word-answer';$('rounding-answer').removeAttribute('aria-invalid');$('rounding-check').disabled=false;$('rounding-next').disabled=true;$('rounding-next').textContent=index===questions.length-1?'See round summary →':'Next problem →';$('rounding-progress-label').textContent='Question '+(index+1)+' of '+questions.length;$('rounding-progress').max=questions.length;$('rounding-progress').value=index;$('rounding-feedback').textContent='';$('rounding-explanation').hidden=true;$('rounding-explanation').replaceChildren();stats();}
$('rounding-form').onsubmit=e=>{e.preventDefault();if(answered)return;const input=$('rounding-answer'),raw=input.value.trim(),f=$('rounding-feedback');if(!/^(?:[0-9]+|[0-9]{1,3}(?:,[0-9]{3})+)$/.test(raw)||!Number.isSafeInteger(Number(raw.replace(/,/g,'')))){f.textContent='Enter a whole number, using commas in groups of three or no commas (for example, 12,000 or 12000).';f.className='feedback bad-text';input.setAttribute('aria-invalid','true');input.focus();return;}const q=questions[index],ok=Number(raw.replace(/,/g,''))===q.answer,t=scores[settings.place]??(scores[settings.place]={perfect:0,attempted:0,solved:0});answered=true;t.attempted++;if(ok){correct++;t.perfect++;t.solved++;}input.disabled=true;input.removeAttribute('aria-invalid');input.className='word-answer '+(ok?'good':'bad');$('rounding-check').disabled=true;$('rounding-next').disabled=false;f.className='feedback '+(ok?'good-text':'bad-text');f.textContent=ok?'✓ Correct!':'Not quite. The rounded number is '+fmt(q.answer)+'.';const digit=Math.floor(q.n/q.unit)%10,right=Math.floor(q.n/(q.unit/10))%10,ex=$('rounding-explanation');ex.hidden=false;ex.textContent='The rounding digit is '+digit+' in the '+names[q.exp-1]+'s place. The digit immediately to its right is '+right+'. '+(right>=5?'5 or more: round up by adding 1 at the rounding place, carrying left if needed.':'4 or less: keep the rounding digit the same.')+' Replace every digit to the right with 0. '+fmt(q.n)+' ≈ '+fmt(q.answer)+' (nearest '+names[q.exp-1]+').';$('rounding-progress').value=index+1;save();stats();$('rounding-next').focus();};
$('rounding-next').onclick=()=>{if(!answered)return;if(index<questions.length-1){index++;show();$('rounding-answer').focus();}else{$('rounding-form').hidden=true;$('rounding-feedback').textContent='';$('rounding-explanation').hidden=true;$('rounding-summary').hidden=false;$('rounding-summary').textContent='Round complete! '+correct+' / '+questions.length+' correct ('+Math.round(correct/questions.length*100)+'%). Start a new round to keep practicing.';$('rounding-progress-label').textContent='Round complete';$('rounding-summary').focus();}};
$('rounding-place').value=settings.place;$('rounding-length').value=settings.length;for(const id of ['rounding-place','rounding-length'])$(id).onchange=()=>{round();};$('rounding-restart').onclick=()=>{round();$('rounding-answer').focus();};$('rounding-open').onclick=()=>{$('category').hidden=true;$('rounding').hidden=false;round();$('rounding-title').focus();};$('rounding-back').onclick=()=>{$('rounding').hidden=true;openCategory(gameMetadata.find(g=>g.id==='rounding').category);$('rounding-open').focus();};$('reset').addEventListener('click',()=>{if($('reset-message').textContent.includes('Scores cleared')){scores={};save();stats();}});
})();
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

(()=>{const section=document.getElementById('detective'),frame=document.getElementById('detective-frame'),open=document.getElementById('detective-open');function resize(){if(frame.contentDocument?.body)frame.style.height=frame.contentDocument.documentElement.scrollHeight+'px';}frame.addEventListener('load',()=>{new ResizeObserver(resize).observe(frame.contentDocument.body);resize();});open.onclick=()=>{document.getElementById('category').hidden=true;section.hidden=false;resize();frame.contentDocument?.querySelector('#level')?.focus();};document.getElementById('detective-back').onclick=()=>{section.hidden=true;openCategory(gameMetadata.find(g=>g.id==='detective').category);open.focus();};})();