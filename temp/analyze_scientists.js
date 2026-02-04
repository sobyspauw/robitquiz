const path = require('path');
const basePath = './src/questions/data/subjects/famous-people/Scientists';

for (let i = 2; i <= 7; i++) {
  const level = require(`${basePath}/level${i}.js`);
  const total = level.questions.length;
  const good = level.questions.filter(q =>
    q.question && q.question.en && !q.question.en.includes('this scientist')
  ).length;
  const placeholder = total - good;
  console.log(`Level ${i}: ${total} total, ${good} good, ${placeholder} placeholder. Needs ${100 - good} more.`);
}
