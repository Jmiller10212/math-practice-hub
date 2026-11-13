
(()=>{
'use strict';
const $=id=>document.getElementById(id), cats=Object.fromEntries(Object.entries(categoryInfo).map(([id,info])=>[id,info[0]])), key='mathPracticeVocabulary.v1';
const seeds = {{VOCABULARY_SEEDS}};
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
