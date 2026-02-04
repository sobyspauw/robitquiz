# RobitQuiz Question Generation System

## Executive Summary

**Current Status:** 1,810 out of 1,811 files complete (99.9%)

- **Total files:** 1,811
- **Complete (100+ questions):** 1,810 files
- **Incomplete:** 1 file (`food/Seafood/level7_new.js` - 40/100 questions)
- **Total questions in database:** ~181,000 questions

## Quick Start

### Analyze Current State
```bash
node analyze_current_questions.js
```

### Generate Questions Framework
```bash
# Process all incomplete files
node generate_100_questions.js --all

# Process specific file
node generate_100_questions.js food Seafood level7_new
```

### Complete Remaining File
```bash
node complete_seafood_level7.js
```

## Project Structure

```
RobitQuiz/
├── src/questions/data/subjects/
│   ├── ai/                    # 160 files, 16,000 questions ✓
│   ├── board-games/           # 130 files, 13,000 questions ✓
│   ├── books/                 # 110 files, 11,000 questions ✓
│   ├── currencies/            # 230 files, 23,000 questions ✓
│   ├── desserts/              # 180 files, 18,000 questions ✓
│   ├── dinosaurs/             # 180 files, 18,000 questions ✓
│   ├── drinks/                # 100 files, 10,000 questions ✓
│   ├── egypt/                 # 240 files, 24,000 questions ✓
│   ├── f1/                    # 120 files, 12,000 questions ✓
│   ├── famous-buildings/      # 120 files, 12,000 questions ✓
│   ├── famous-people/         # 100 files, 10,000 questions ✓
│   └── food/                  # 141 files, 14,040 questions (1 incomplete)
├── analyze_current_questions.js        # Analyze all files
├── generate_100_questions.js           # Question generation framework
├── ai_question_generator.js            # AI integration framework
├── complete_seafood_level7.js          # Complete remaining file
├── QUESTION_GENERATION_GUIDE.md        # Comprehensive guide
└── README_QUESTION_GENERATION.md       # This file
```

## Tools & Scripts

### 1. Analysis Tool
**File:** `analyze_current_questions.js`

**Purpose:** Analyze all question files and identify which need work

**Usage:**
```bash
node analyze_current_questions.js
```

**Output:**
- Total file count
- Complete vs incomplete files
- Statistics by subject
- Detailed JSON report (`files_needing_100_questions.json`)

**Example Output:**
```
=== OVERALL STATISTICS ===
Total files: 1811
Complete (>=100): 1810 (99.9%)
Incomplete (<100): 1 (0.1%)

=== BY SUBJECT ===
food:
  Files: 141
  Complete: 140 (99.3%)
  Incomplete: 1
  Total questions: 14040
```

### 2. Question Generation Framework
**File:** `generate_100_questions.js`

**Purpose:** Framework for generating questions with proper structure

**Usage:**
```bash
# Process all files needing work
node generate_100_questions.js --all

# Process specific file
node generate_100_questions.js [subject] [category] [level]
node generate_100_questions.js food Seafood level7_new
```

**Features:**
- Automatic backup creation
- Difficulty level detection
- Question structure validation
- Placeholder generation
- Merge with existing questions

**Note:** Generates placeholder questions. For production use, integrate with AI or create questions manually.

### 3. AI Question Generator
**File:** `ai_question_generator.js`

**Purpose:** AI-powered question generation framework

**Features:**
- Subject-specific templates
- OpenAI/Claude API integration ready
- Translation service integration
- Pre-built question banks (examples)
- Quality validation

**Usage:**
```javascript
const { generateUniqueQuestions } = require('./ai_question_generator.js');

const questions = generateUniqueQuestions(
  'food',        // subject
  'Seafood',     // category
  'advanced',    // difficulty
  60,            // count
  existingQuestions
);
```

**AI Integration:**
```javascript
// OpenAI Example
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const response = await openai.chat.completions.create({
  model: 'gpt-4-turbo',
  messages: [{ role: 'user', content: prompt }],
  temperature: 0.8
});
```

### 4. Seafood Completion Script
**File:** `complete_seafood_level7.js`

**Purpose:** Complete the remaining Seafood file

**Usage:**
```bash
node complete_seafood_level7.js
```

**Features:**
- 2 example high-quality questions
- Framework for adding 58 more
- Automatic backup
- Merge functionality
- Quality guidelines

## Question Format

### Complete Question Structure
```javascript
{
  question: {
    en: "English question text",
    es: "Spanish translation",
    de: "German translation",
    nl: "Dutch translation"
  },
  options: [
    {
      en: "Correct answer",
      es: "Respuesta correcta",
      de: "Richtige Antwort",
      nl: "Juiste antwoord"
    },
    {
      en: "Wrong answer 1",
      es: "Respuesta incorrecta 1",
      de: "Falsche Antwort 1",
      nl: "Verkeerd antwoord 1"
    },
    {
      en: "Wrong answer 2",
      es: "Respuesta incorrecta 2",
      de: "Falsche Antwort 2",
      nl: "Verkeerd antwoord 2"
    },
    {
      en: "Wrong answer 3",
      es: "Respuesta incorrecta 3",
      de: "Falsche Antwort 3",
      nl: "Verkeerd antwoord 3"
    }
  ],
  correct: 0,  // Index of correct answer (0-3)
  explanation: {
    en: "Educational explanation in English",
    es: "Explicación educativa en español",
    de: "Pädagogische Erklärung auf Deutsch",
    nl: "Educatieve uitleg in het Nederlands"
  }
}
```

### File Structure
```javascript
module.exports = {
  questions: [
    // 100 questions in the format above
  ]
};
```

## Quality Requirements

### 1. Uniqueness
- No duplicate questions within a file
- Avoid near-duplicates (same question with minor variations)
- Each question tests different knowledge

### 2. Accuracy
- Factually correct and verifiable
- Current information (check dates)
- Internationally recognized facts

### 3. Educational Value
- Explanations that teach, not just confirm
- Provide context and additional information
- Help learners understand the topic

### 4. Translations
- All 4 languages required: en, es, de, nl
- Meaning consistent across languages
- Culturally appropriate
- Technical terms: often keep English or adapt appropriately

### 5. Difficulty Levels

| Level | Type | Characteristics | Example |
|-------|------|----------------|---------|
| 1-3 | Beginner | General knowledge, no jargon | "What is AI?" |
| 4-6 | Intermediate | Some expertise required | "What is supervised learning?" |
| 7-8 | Advanced | Technical knowledge | "What is the bloodline in tuna?" |
| 9-10 | Expert | Specialized expertise | "What is vanishing gradient problem?" |

### 6. Character Limits (Guidelines)

| Element | Level 1-5 | Level 6-8 | Level 9-10 |
|---------|-----------|-----------|------------|
| Questions | ~120 chars | ~140 chars | ~160 chars |
| Options | ~100 chars | ~100 chars | ~100 chars |
| Explanations | ~350 chars | ~400 chars | ~450 chars |

*Note: These are guidelines. Quality and accuracy take priority.*

## Generation Methods

### Method 1: Manual Creation (Highest Quality)

**Best for:**
- Critical subjects (medical, legal, scientific)
- Complex technical topics
- When accuracy is paramount

**Process:**
1. Research the topic thoroughly
2. Create questions based on research
3. Write educational explanations
4. Translate to all 4 languages
5. Fact-check everything
6. Review for clarity and uniqueness

**Pros:**
- Highest quality
- Complete accuracy control
- Perfect translations

**Cons:**
- Time-consuming
- Requires subject expertise

### Method 2: AI-Assisted Generation

**Best for:**
- General knowledge topics
- Creating question ideas
- Initial drafts for refinement

**Process:**
1. Set up AI API (OpenAI, Claude, etc.)
2. Generate questions in batches
3. Review and fact-check each question
4. Refine and improve
5. Translate (AI or service)
6. Final quality check

**Pros:**
- Fast generation
- Good for brainstorming
- Can create many variations

**Cons:**
- Requires fact-checking
- May produce errors
- Translations need review

### Method 3: Hybrid Approach (Recommended)

**Process:**
1. **Research:** Study the topic, review existing questions
2. **Generate:** Use AI for ideas, create questions manually
3. **Refine:** Fact-check, improve clarity, ensure uniqueness
4. **Translate:** Use professional service or AI with review
5. **Review:** Final quality check, test with users
6. **Iterate:** Improve based on feedback

## Workflow

### For Single File

```bash
# 1. Analyze
node analyze_current_questions.js

# 2. Identify file needing work
# Check files_needing_100_questions.json

# 3. Research the topic
# Review existing questions in the file

# 4. Generate questions
# Use manual creation, AI, or hybrid approach

# 5. Create questions following format

# 6. Review and refine

# 7. Test
node -e "const q = require('./path/to/file.js'); console.log('Questions:', q.questions.length)"

# 8. Commit (if satisfied)
```

### For Batch Processing

```bash
# 1. Analyze all files
node analyze_current_questions.js

# 2. Prioritize subjects
# Start with subjects you know well

# 3. Create templates per subject
# Build reusable question templates

# 4. Generate in batches
# Process one subject at a time

# 5. Review in batches
# Quality check each batch

# 6. Test all files
# Ensure no syntax errors

# 7. Commit in batches
# One subject per commit
```

## API Integration Examples

### OpenAI GPT-4
```javascript
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateQuestions(subject, category, count) {
  const prompt = `Generate ${count} educational quiz questions about ${subject}/${category}.

  Format as JSON array:
  [{
    "question": "text",
    "options": ["a", "b", "c", "d"],
    "correct": 0,
    "explanation": "text"
  }]`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo',
    messages: [{ role: 'user', content: prompt }],
    response_format: { type: 'json_object' }
  });

  return JSON.parse(response.choices[0].message.content);
}
```

### DeepL Translation
```javascript
const { Translator } = require('deepl-node');
const translator = new Translator(process.env.DEEPL_API_KEY);

async function translate(text, targetLang) {
  const result = await translator.translateText(text, 'en', targetLang);
  return result.text;
}
```

### Anthropic Claude
```javascript
const Anthropic = require('@anthropic-ai/sdk');
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function generateQuestions(subject, category, count) {
  const response = await anthropic.messages.create({
    model: 'claude-3-opus-20240229',
    max_tokens: 4096,
    messages: [{
      role: 'user',
      content: `Generate ${count} educational quiz questions about ${subject}/${category}...`
    }]
  });

  return JSON.parse(response.content[0].text);
}
```

## Common Pitfalls

### ❌ Bad Examples

1. **Ambiguous:** "Who invented the computer?" (multiple valid answers)
2. **Outdated:** "How many planets?" with answer "9" (should be 8)
3. **Obvious:** Q: "What is Python?" A: "Snake" vs "Programming language"
4. **Too long:** "In the context of modern computational systems..." (180+ chars)
5. **Cultural bias:** Questions only one region would know

### ✅ Good Examples

1. **Clear:** "Who built the first programmable computer (Z3)?" (Konrad Zuse)
2. **Current:** "How many planets in our solar system?" (8, since 2006)
3. **Balanced:** All options plausible and similar in length
4. **Concise:** "What is Python's time complexity for list append?" (O(1))
5. **Universal:** Internationally known facts

## Quality Checklist

Before finalizing questions:

- [ ] 100 questions per file
- [ ] All questions unique
- [ ] All 4 languages present (en, es, de, nl)
- [ ] 4 options per question
- [ ] Correct answer index valid (0-3)
- [ ] Educational explanations
- [ ] Character lengths within guidelines
- [ ] Facts accurate and verifiable
- [ ] Translations make sense
- [ ] No syntax errors
- [ ] File loads in Node.js
- [ ] Difficulty matches level

## Subject-Specific Topics

### AI (160 files)
- Neural networks, deep learning, machine learning
- Computer vision, NLP, reinforcement learning
- AI ethics, history, future
- Robotics, gaming AI, transport AI

### Board Games (130 files)
- Chess, Monopoly, Risk, Scrabble, Catan
- Clue, Checkers, Backgammon, Stratego
- Card games, Go, Trivial Pursuit

### Books (110 files)
- Classic literature, science fiction, fantasy
- Detective novels, historical novels
- Children's books, poetry, biographies
- Non-fiction, adventure books

### Currencies (230 files)
- Major currencies (Dollar, Euro, Pound, Yen, Yuan)
- Cryptocurrency, gold standard
- Historical coins, hyperinflation
- Rare currencies, world currencies

### Desserts (180 files)
- Cakes, cookies, pastries, puddings
- Ice cream, chocolate desserts
- Fruit desserts, custards, donuts
- International desserts

### Dinosaurs (180 files)
- T-Rex family, velociraptors, sauropods
- Pterosaurs, marine reptiles
- Cretaceous/Jurassic dinosaurs
- Fossils, horned dinosaurs

### Drinks (100 files)
- Beer, wine, coffee, tea
- Cocktails, spirits, soft drinks
- Energy drinks, smoothies

### Egypt (240 files)
- Ancient Egypt, pyramids, pharaohs
- Hieroglyphics, mummies, temples
- Egyptian gods, daily life, art

### F1 (120 files)
- Racing, drivers, teams, tracks
- Regulations, technology, history
- Championships, records

### Famous Buildings (120 files)
- Eiffel Tower, Sydney Opera House
- Great Wall, Taj Mahal, Colosseum
- Modern skyscrapers, bridges

### Famous People (100 files)
- Scientists, artists, musicians
- Political leaders, entrepreneurs
- Actors, authors, sports icons
- Social media influencers

### Food (141 files)
- BBQ, Asian cuisine, European cuisine
- Seafood, vegetables, meat
- Baking, cooking techniques

## Next Steps

### Immediate (1 file remaining)

1. **Complete Seafood Level 7:**
   - Add 60 questions to `food/Seafood/level7_new.js`
   - Use `complete_seafood_level7.js` as template
   - Research advanced seafood topics
   - Translate to all 4 languages
   - Fact-check and review

### Short-term (Optimization)

1. **Review existing questions for quality**
2. **Check for duplicates across files**
3. **Verify all translations**
4. **Update outdated information**

### Long-term (Maintenance)

1. **Regular content updates**
2. **Add new subjects as needed**
3. **Track user feedback**
4. **Iterate on question quality**

## Resources

- **Guidelines:** `.claude/question-guidelines.md`
- **Analysis:** `files_needing_100_questions.json`
- **Examples:** Any complete file in `src/questions/data/subjects/`
- **Documentation:** `QUESTION_GENERATION_GUIDE.md`

## Support

For questions or issues:
1. Review the comprehensive guide: `QUESTION_GENERATION_GUIDE.md`
2. Check example questions in complete files
3. Use the analysis tool to verify progress
4. Test generated questions before committing

## Conclusion

The RobitQuiz question generation system is **99.9% complete** with only 1 file remaining. The tools and frameworks provided make it easy to:

- Analyze current state
- Generate new questions
- Ensure quality and uniqueness
- Maintain consistency
- Scale to additional subjects

Focus on **quality over quantity** - every question should be educational, accurate, and well-translated.

Good luck! 🎯
