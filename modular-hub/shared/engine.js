
'use strict';
const $=id=>document.getElementById(id);
const names=['Ones','Tens','Hundreds','Thousands','Ten Thousands','Hundred Thousands','Millions','Ten Millions','Hundred Millions','Billions'];
/* @include shared/persistence.js */
let mode='place',digits=[],order=[],checked=false,complete=false,previousOrder='',previousNumber='';
/* @include shared/number-utils.js */
const decimalNames=['Tenths','Hundredths','Thousandths','Ten-thousandths','Hundred-thousandths','Millionths'];
let decimalTarget=0;
const activities = {{ACTIVITIES}};
function valueNow(){return digits.reduce((sum,d,i)=>sum+d*10**i,0);}
function singleAnswer(){return mode==='wordsNumber'||mode==='numberWords';}
function decimalCount(){return (mode==='place'||mode==='expanded')&&$('include-decimals').checked?Number($('decimal-depth').value):0;}
function placeName(i){return i<=saved.level?names[i]:['Tenths','Hundredths','Thousandths','Ten-thousandths','Hundred-thousandths'][i-saved.level-1];}
function termText(d,i){if(i<=saved.level)return (d*10**i).toLocaleString('en-US');return '0.'+'0'.repeat(i-saved.level-1)+d;}

/* @include shared/engines/decimal-quiz.js */

/* @include shared/engines/decomposition.js */

/* @include shared/engines/arithmetic.js */

/* @include shared/engines/write-form.js */

/* @include shared/engines/place-value.js */
function newProblem(focus=true){if(!isWriteForm()&&!isArithmetic()){$('problem').className='problem-number';$('problem').removeAttribute('aria-label');}gameHandlers[mode].newProblem(focus);}

function start(activity){expressionRound={answered:0,correct:0};$('next').disabled=false;mode=activity;$('arithmetic-kind').value=['whole','decimals','mixed'].includes(saved[mode+'DecimalKind'])?saved[mode+'DecimalKind']:'whole';$('arithmetic-precision').value=['1','2','3'].includes(saved[mode+'DecimalPrecision'])?saved[mode+'DecimalPrecision']:'1';$('write-expanded-controls').hidden=!isWriteForm();$('write-expanded-level').value=saved[mode+'Level']||'thousands';$('problem').parentElement.hidden=isWriteForm();$('check').textContent=isWriteForm()?'Check Answer':'Check answers';showCustomFactors();saved.lastActivity=activity;persist();updateContinue();$('category').hidden=true;const decomposition=isDecomposition();$('decomposition-controls').hidden=!decomposition;if(decomposition){$('decomposition-level').value=saved[mode+'Level']||'thousands';$('decomposition-mode').value=saved[mode+'Mode']||'standard';}const decimal=mode==='decimalQuiz'||decomposition;$('level').parentElement.hidden=decimal||isArithmetic()||isWriteForm();$('arithmetic-controls').hidden=!isArithmetic();$('arithmetic-level').parentElement.hidden=mode==='multiplication';$('multiplication-top-label').hidden=mode!=='multiplication';$('multiplication-bottom-label').hidden=mode!=='multiplication';$('back').textContent='← '+categoryInfo[gameMetadata.find(g=>g.id===mode).category][0];$('game-tag').textContent=mode==='writeStandard'?'One answer · combine the parts':mode==='writeExpanded'?'One answer · any term order':isDecomposition()?'One quick question at a time':isArithmetic()?'One step at a time':'Shuffled every problem';$('check').hidden=decimal;$('next').textContent=decimal?'New Question ↻':'New Problem ↻';$('decimal-controls').hidden=mode!=='place'&&mode!=='expanded';$('home').hidden=true;$('game').hidden=false;$('level').value=saved.level;[$('title').textContent,$('description').textContent,$('problem-label').textContent]=activities[mode];showArithmeticOptions();newProblem(false);$('title').tabIndex=-1;$('title').focus();}
document.querySelectorAll('[data-start]').forEach(b=>b.addEventListener('click',()=>start(b.dataset.start)));
const categoryInfo = {{CATEGORIES}};
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
