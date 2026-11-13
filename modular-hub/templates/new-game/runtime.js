// Keep game state private. Use a new storage key; never reuse another game's key.
(()=>{
  const id='example', key='mathPracticeExample.v1', el=s=>document.getElementById(id+'-'+s);
  let number=1, solved=false, wins=0;
  try { wins=Number(JSON.parse(localStorage.getItem(key))?.wins)||0; } catch {}
  function fresh(){number=1+Math.floor(Math.random()*50);solved=false;el('number').textContent=number;el('answer').value='';el('feedback').textContent='';el('progress').textContent=wins+' solved';}
  el('open').onclick=()=>{document.getElementById('category').hidden=true;document.getElementById(id).hidden=false;fresh();el('answer').focus();};
  el('back').onclick=()=>{document.getElementById(id).hidden=true;openCategory(gameMetadata.find(g=>g.id===id).category);el('open').focus();};
  el('next').onclick=fresh;
  el('form').onsubmit=e=>{e.preventDefault();if(solved)return;const raw=el('answer').value.trim();if(!/^\d+$/.test(raw)){el('feedback').textContent='Enter a whole number.';return;}if(Number(raw)!==number*2){el('feedback').textContent='Try adding the number to itself.';return;}solved=true;wins++;el('feedback').textContent='Correct!';el('progress').textContent=wins+' solved';try{localStorage.setItem(key,JSON.stringify({wins}));}catch{el('progress').textContent+=' · Progress lasts for this session.';}};
})();
