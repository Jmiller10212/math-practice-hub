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
