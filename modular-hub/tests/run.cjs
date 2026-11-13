const {spawnSync}=require('child_process'),path=require('path');
process.chdir(path.resolve(__dirname,'../..'));
for(const file of ['template.cjs','all-games.cjs','settings.cjs','test-decimal-arithmetic.cjs','test-expressions.cjs','test-rounding.cjs','test-rounding-word-problems.cjs','test-symbols.cjs','test-friendly-number.cjs','pwa-migration.cjs']){
  const run=spawnSync(process.execPath,[path.join(__dirname,file)],{stdio:'inherit'});
  if(run.status!==0)process.exit(run.status||1);
}
console.log('All modular build checks passed.');
