const data = require('./src/questions/data/subjects/ai/Deep learning/level10.js');
const q = data.questions;

console.log('=== Level 10 - Extreme Violations (>140) ===\n');

let count = 0;
q.forEach((qu, i) => {
  let v = [];
  ['en','es','de','nl'].forEach(l => {
    if (qu.question[l].length > 140) v.push(`Q ${l.toUpperCase()}: ${qu.question[l].length}`);
  });
  qu.options.forEach((o, j) => {
    ['en','es','de','nl'].forEach(l => {
      if (o[l].length > 140) v.push(`Opt${j+1} ${l.toUpperCase()}: ${o[l].length}`);
    });
  });
  if (v.length) {
    console.log(`Q${i+1}:`);
    v.forEach(x => console.log(`  ${x}`));
    count += v.length;
  }
});

console.log(`\nTotal: ${count} extreme violations`);
