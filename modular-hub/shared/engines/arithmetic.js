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

