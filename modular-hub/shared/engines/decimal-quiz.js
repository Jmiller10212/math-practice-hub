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


