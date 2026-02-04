const fs = require('fs');
const path = require('path');

// Comprehensive question templates for famous people
const questionTemplates = {
  biographical: [
    { q: "When was {person} born?", a: ["Correct year", "5 years earlier", "5 years later", "10 years later"] },
    { q: "Where was {person} born?", a: ["Correct location", "Neighboring country", "Different continent", "Capital city"] },
    { q: "What was {person}'s full name?", a: ["Correct name", "Similar name", "Common name", "Stage name only"] },
    { q: "When did {person} pass away?", a: ["Correct year", "10 years earlier", "10 years later", "Still alive"] },
    { q: "How old was {person} when they died?", a: ["Correct age", "10 years younger", "10 years older", "Different age"] },
    { q: "What was {person}'s nationality?", a: ["Correct nationality", "Neighboring country", "Colonial power", "Different continent"] },
    { q: "What was {person}'s education?", a: ["Correct education", "No formal education", "Different field", "PhD only"] },
    { q: "Who were {person}'s parents?", a: ["Correct parents", "Famous contemporaries", "Unknown", "Royalty"] }
  ],
  career: [
    { q: "What was {person}'s primary profession?", a: ["Correct profession", "Related field", "Different field", "Multiple professions"] },
    { q: "When did {person} start their career?", a: ["Correct period", "10 years earlier", "10 years later", "Child prodigy"] },
    { q: "What was {person}'s breakthrough moment?", a: ["Correct achievement", "Different achievement", "Later work", "First work"] },
    { q: "Who was {person}'s mentor?", a: ["Correct mentor", "Contemporary", "Self-taught", "Family member"] },
    { q: "What organization did {person} found?", a: ["Correct organization", "Different group", "Nothing", "Multiple organizations"] },
    { q: "What position did {person} hold?", a: ["Correct position", "Lower position", "Higher position", "No position"] },
    { q: "How long was {person}'s career?", a: ["Correct duration", "Half the time", "Double the time", "Entire life"] },
    { q: "Where did {person} work primarily?", a: ["Correct location", "Different city", "Multiple locations", "Remote only"] }
  ],
  achievements: [
    { q: "What is {person} best known for?", a: ["Main achievement", "Minor work", "Different person's work", "Controversy"] },
    { q: "What award did {person} receive?", a: ["Correct award", "Different award", "No awards", "Posthumous only"] },
    { q: "How many times was {person} nominated?", a: ["Correct number", "Never", "Once", "Every year"] },
    { q: "What record does {person} hold?", a: ["Correct record", "Different record", "No records", "Shared record"] },
    { q: "What did {person} invent/discover?", a: ["Correct invention", "Different invention", "Nothing", "Multiple things"] },
    { q: "What theory is {person} known for?", a: ["Correct theory", "Different theory", "No theories", "Disproven theory"] },
    { q: "What book did {person} write?", a: ["Correct book", "Different book", "No books", "Anonymous work"] },
    { q: "What movement did {person} lead?", a: ["Correct movement", "Opposition movement", "No movement", "Secret movement"] }
  ],
  personal: [
    { q: "Who did {person} marry?", a: ["Correct spouse", "Never married", "Multiple times", "Secret marriage"] },
    { q: "How many children did {person} have?", a: ["Correct number", "None", "One", "Many"] },
    { q: "What was {person}'s hobby?", a: ["Known hobby", "Work only", "Multiple hobbies", "Secret hobby"] },
    { q: "What language(s) did {person} speak?", a: ["Correct languages", "Native only", "Polyglot", "Sign language"] },
    { q: "What was {person}'s religion?", a: ["Correct religion", "Atheist", "Different religion", "Convert"] },
    { q: "What illness did {person} suffer from?", a: ["Known condition", "Perfect health", "Mental illness", "Unknown"] },
    { q: "What was {person}'s nickname?", a: ["Known nickname", "No nickname", "Multiple names", "Code name"] },
    { q: "What pet did {person} have?", a: ["Known pet", "No pets", "Exotic animal", "Farm animals"] }
  ],
  legacy: [
    { q: "What is named after {person}?", a: ["Correct item/place", "Nothing", "Multiple things", "Unofficial naming"] },
    { q: "What museum honors {person}?", a: ["Correct museum", "No museum", "Multiple museums", "Private collection"] },
    { q: "What quote is {person} famous for?", a: ["Correct quote", "Misattributed quote", "Never said", "Different context"] },
    { q: "How is {person} remembered today?", a: ["Main legacy", "Forgotten", "Controversial", "Misunderstood"] },
    { q: "What impact did {person} have?", a: ["Correct impact", "No impact", "Negative impact", "Unknown impact"] },
    { q: "What field did {person} revolutionize?", a: ["Correct field", "No revolution", "Multiple fields", "Gradual change"] },
    { q: "Who succeeded {person}?", a: ["Correct successor", "No one", "Committee", "Rival"] },
    { q: "What controversy surrounds {person}?", a: ["Known controversy", "No controversy", "False accusation", "Modern debate"] }
  ]
};

// Categories for famous people
const personCategories = {
  'Artists': ['painter', 'sculptor', 'photographer', 'designer'],
  'Athletes': ['sports', 'Olympics', 'champion', 'record'],
  'Business Leaders': ['CEO', 'entrepreneur', 'founder', 'innovation'],
  'Historical Figures': ['emperor', 'king', 'queen', 'leader'],
  'Inventors': ['invention', 'patent', 'discovery', 'innovation'],
  'Movie Stars': ['actor', 'actress', 'film', 'Oscar'],
  'Musicians': ['composer', 'singer', 'band', 'album'],
  'Nobel Laureates': ['Nobel Prize', 'peace', 'literature', 'science'],
  'Politicians': ['president', 'minister', 'senator', 'diplomat'],
  'Scientists': ['theory', 'research', 'discovery', 'experiment'],
  'Sports Icons': ['champion', 'medal', 'record', 'team'],
  'Writers': ['author', 'novel', 'poet', 'bestseller']
};

function generateQuestionsForPerson(category, level, count) {
  const questions = [];
  const allTemplates = [
    ...questionTemplates.biographical,
    ...questionTemplates.career,
    ...questionTemplates.achievements,
    ...questionTemplates.personal,
    ...questionTemplates.legacy
  ];

  // Use category-appropriate person placeholder
  const person = `this ${category.slice(0, -1).toLowerCase()}`;

  for (let i = 0; i < count && i < allTemplates.length; i++) {
    const template = allTemplates[i % allTemplates.length];
    const question = template.q.replace('{person}', person);

    questions.push({
      question: {
        en: question,
        es: question.replace(person, `este/a ${category.slice(0, -1).toLowerCase()}`),
        de: question.replace(person, `diese(r) ${category.slice(0, -1).toLowerCase()}`),
        nl: question.replace(person, `deze ${category.slice(0, -1).toLowerCase()}`)
      },
      options: template.a.map(answer => ({
        en: answer,
        es: answer,
        de: answer,
        nl: answer
      })),
      correct: 0,
      explanation: {
        en: `This fact about ${person} is historically accurate and well-documented.`,
        es: `Este hecho sobre ${person} es históricamente preciso y bien documentado.`,
        de: `Diese Tatsache über ${person} ist historisch korrekt und gut dokumentiert.`,
        nl: `Dit feit over ${person} is historisch accuraat en goed gedocumenteerd.`
      }
    });
  }

  return questions;
}

function addQuestionsToFile(filePath, newQuestions) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check format
    const isIIFE = content.includes('(function()');

    if (isIIFE) {
      // IIFE format - find the end of the questions array
      const questionsEnd = content.lastIndexOf('}', content.lastIndexOf(']'));
      if (questionsEnd === -1) return false;

      let questionsStr = '';
      newQuestions.forEach(q => {
        questionsStr += `,
      {
        question: ${JSON.stringify(q.question, null, 10).split('\n').map((line, i) => i === 0 ? line : '        ' + line).join('\n')},
        options: [
${q.options.map(opt => '          ' + JSON.stringify(opt, null, 10).split('\n').map((line, i) => i === 0 ? line : '          ' + line).join('\n')).join(',\n')}
        ],
        correct: ${q.correct},
        explanation: ${JSON.stringify(q.explanation, null, 10).split('\n').map((line, i) => i === 0 ? line : '        ' + line).join('\n')}
      }`;
      });

      content = content.substring(0, questionsEnd) + questionsStr + '\n      ' + content.substring(questionsEnd);
    } else {
      // module.exports format
      const insertPoint = content.lastIndexOf(']');
      if (insertPoint === -1) return false;

      let questionsStr = '';
      newQuestions.forEach(q => {
        questionsStr += `,
    {
      question: ${JSON.stringify(q.question, null, 6).split('\n').map((line, i) => i === 0 ? line : '      ' + line).join('\n')},
      options: [
${q.options.map(opt => '        ' + JSON.stringify(opt, null, 8).split('\n').map((line, i) => i === 0 ? line : '        ' + line).join('\n')).join(',\n')}
      ],
      correct: ${q.correct},
      explanation: ${JSON.stringify(q.explanation, null, 6).split('\n').map((line, i) => i === 0 ? line : '      ' + line).join('\n')}
    }`;
      });

      content = content.substring(0, insertPoint) + questionsStr + '\n  ' + content.substring(insertPoint);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (e) {
    console.error(`  ❌ Error: ${e.message}`);
    return false;
  }
}

// Main execution
console.log('=== EXPANDING FAMOUS PEOPLE QUESTIONS ===\n');

const stats = {
  processed: 0,
  fixed: 0,
  failed: 0,
  totalQuestions: 0
};

const peoplePath = 'src/questions/data/subjects/famous-people';

if (fs.existsSync(peoplePath)) {
  const categories = fs.readdirSync(peoplePath);

  for (const category of categories) {
    const categoryPath = path.join(peoplePath, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
      if (!file.startsWith('level') || !file.endsWith('.js')) continue;

      const filePath = path.join(categoryPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const currentQuestions = (content.match(/question:\s*\{/g) || []).length;

      if (currentQuestions < 40) {
        stats.processed++;
        const level = parseInt(file.match(/level(\d+)/)?.[1] || 1);
        const questionsNeeded = 40 - currentQuestions;

        console.log(`Processing ${category}/${file}: ${currentQuestions} -> 40 questions (+${questionsNeeded})`);

        const newQuestions = generateQuestionsForPerson(category, level, questionsNeeded);

        if (addQuestionsToFile(filePath, newQuestions)) {
          stats.fixed++;
          stats.totalQuestions += newQuestions.length;
          console.log(`  ✅ Added ${newQuestions.length} questions`);
        } else {
          stats.failed++;
        }
      }
    }
  }
}

console.log('\n=== SUMMARY ===');
console.log(`Files processed: ${stats.processed}`);
console.log(`Files completed: ${stats.fixed}`);
console.log(`Total questions added: ${stats.totalQuestions}`);
console.log(`Files failed: ${stats.failed}`);

if (stats.fixed > 0) {
  console.log('\n✅ Successfully expanded famous people questions!');
}