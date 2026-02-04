# RobitQuiz Question Generation Guide

## Current Status

**Analysis completed:** 1,811 files analyzed
- **Complete (>=100 questions):** 1,810 files (99.9%)
- **Incomplete (<100 questions):** 1 file (0.1%)
  - `food/Seafood/level7_new.js` - 40 questions (needs 60 more)

**Total questions in database:** ~181,000 questions across all subjects

## Overview

This guide explains how to generate 100 unique, educational quiz questions for each category in the RobitQuiz project.

## Question Requirements

### Structure
Each question must have:
```javascript
{
  question: {
    en: "English question",
    es: "Spanish translation",
    de: "German translation",
    nl: "Dutch translation"
  },
  options: [
    {en: "Option 1", es: "Opción 1", de: "Option 1", nl: "Optie 1"},
    {en: "Option 2", es: "Opción 2", de: "Option 2", nl: "Optie 2"},
    {en: "Option 3", es: "Opción 3", de: "Option 3", nl: "Optie 3"},
    {en: "Option 4", es: "Opción 4", de: "Option 4", nl: "Optie 4"}
  ],
  correct: 0, // Index 0-3
  explanation: {
    en: "Educational explanation",
    es: "Explicación educativa",
    de: "Pädagogische Erklärung",
    nl: "Educatieve uitleg"
  }
}
```

### Quality Standards

#### 1. Uniqueness
- No duplicate questions within a file
- Avoid near-duplicates (same question with minor variations)
- Each question should test different knowledge

#### 2. Educational Value
- Factually accurate and verifiable
- Educational explanations that teach, not just confirm
- Plausible wrong answers (not obviously wrong)
- Culturally neutral (internationally understandable)

#### 3. Difficulty Levels

**Level 1-3 (Beginner):**
- General knowledge, widely known facts
- Simple concepts
- No technical jargon
- Example: "What is AI?"

**Level 4-6 (Intermediate):**
- More specific knowledge
- Basic technical terms acceptable
- Requires some subject familiarity
- Example: "What is the main difference between supervised and unsupervised learning?"

**Level 7-8 (Advanced):**
- In-depth knowledge required
- Technical terminology expected
- Detailed understanding needed
- Example: "What is the 'bloodline' in tuna and why is it often removed?"

**Level 9-10 (Expert):**
- Specialized, expert-level knowledge
- Complex technical concepts
- For enthusiasts and professionals
- Example: "What is the vanishing gradient problem in deep neural networks?"

#### 4. Character Limits (Guidelines)

**Questions & Options:**
- Level 1-5: ~120 chars (questions), ~100 chars (options)
- Level 6-8: ~140 chars (questions), ~100 chars (options)
- Level 9-10: ~160 chars (questions), ~100 chars (options)

**Explanations:**
- Level 1-5: ~350 chars
- Level 6-8: ~400 chars
- Level 9-10: ~450 chars

*Note: These are guidelines, not strict limits. Quality and accuracy take priority.*

## Generation Methods

### Method 1: Manual Creation (Recommended for Quality)

**Pros:**
- Highest quality and accuracy
- Full control over content
- No AI hallucinations
- Perfect translations

**Cons:**
- Time-consuming
- Requires subject expertise

**When to use:**
- For critical subjects (medical, legal, technical)
- When accuracy is paramount
- For complex subjects requiring expertise

### Method 2: AI-Assisted Generation

**Pros:**
- Faster generation
- Can create many questions quickly
- Good for brainstorming

**Cons:**
- Requires fact-checking
- May produce hallucinations
- Translations may need review
- Can be repetitive

**When to use:**
- For general knowledge subjects
- As a starting point for manual refinement
- When speed is important

**Recommended AI Models:**
- **GPT-4 Turbo:** Best for question generation and translations
- **Claude 3 Opus:** Excellent for educational content
- **Gemini Pro:** Good alternative, longer context

### Method 3: Hybrid Approach (Recommended)

1. **Research Phase:**
   - Study subject matter
   - Identify key concepts
   - Review existing questions

2. **Generation Phase:**
   - Use AI to generate question ideas
   - Create questions manually based on research
   - Mix AI-generated with manually created

3. **Refinement Phase:**
   - Fact-check all questions
   - Verify translations
   - Ensure uniqueness
   - Test difficulty levels

4. **Quality Assurance:**
   - Review for duplicates
   - Check character lengths
   - Verify all 4 languages present
   - Test questions for clarity

## Subject-Specific Guidelines

### AI & Technology
- Use current information (check year)
- Cite specific papers/techniques when possible
- Avoid outdated terminology
- Include practical applications

### Board Games
- Focus on official rules
- Include strategy concepts
- Reference famous games/players
- Avoid house rules

### Books & Literature
- Verify publication dates
- Check author names spelling
- Include context about writing period
- Respect cultural sensitivities

### Currencies
- Use current data
- Include historical context
- Verify exchange rates if mentioned
- Explain economic concepts

### Food & Drinks
- Include cultural origins
- Verify cooking techniques
- Use standard measurements
- Include safety information where relevant

### Famous People & Buildings
- Verify dates and facts
- Include cultural significance
- Use internationally recognized names
- Provide historical context

## Scripts Available

### 1. Analyze Current Questions
```bash
node analyze_current_questions.js
```
- Counts questions in all files
- Identifies files needing work
- Generates statistics by subject

### 2. Generate Questions (Framework)
```bash
node generate_100_questions.js --all
node generate_100_questions.js food Seafood level7_new
```
- Provides framework for generation
- Creates placeholders
- Backs up original files

### 3. AI Question Generator (Advanced)
```javascript
const { generateUniqueQuestions } = require('./ai_question_generator.js');
const questions = generateUniqueQuestions('food', 'Seafood', 'advanced', 60, existingQuestions);
```
- Subject-specific templates
- AI integration ready
- Translation support

## Production Workflow

### For Single File

1. **Analyze:**
   ```bash
   node analyze_current_questions.js
   ```

2. **Research:**
   - Study the subject matter
   - Review existing 40 questions
   - Identify knowledge gaps

3. **Generate:**
   - Create 60 new unique questions
   - Follow difficulty guidelines
   - Ensure all 4 translations

4. **Review:**
   - Fact-check all content
   - Remove duplicates
   - Verify character lengths
   - Test question clarity

5. **Integrate:**
   - Add to existing file
   - Backup original
   - Test file loads correctly

### For Batch Processing

1. **Prioritize:**
   - Start with subjects you know well
   - Group similar subjects together
   - Consider difficulty levels

2. **Create Templates:**
   - Build question templates per subject
   - Establish fact databases
   - Prepare translation glossaries

3. **Generate in Batches:**
   - Process one subject at a time
   - Maintain consistency within subject
   - Regular quality checks

4. **Review & Refine:**
   - Peer review if possible
   - Test questions with users
   - Iterate based on feedback

## AI API Integration

### OpenAI GPT-4 Example

```javascript
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateQuestions(subject, category, level, count) {
  const prompt = `Generate ${count} unique educational quiz questions about ${subject}/${category} for difficulty level ${level}.

Requirements:
- Each question has 4 options (1 correct)
- Include educational explanation
- Questions in English
- Factually accurate
- No duplicates

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
    response_format: { type: 'json_object' },
    temperature: 0.8
  });

  return JSON.parse(response.choices[0].message.content);
}
```

### Translation Service Example

```javascript
const { Translator } = require('deepl-node');
const translator = new Translator(process.env.DEEPL_API_KEY);

async function translateQuestions(questions, targetLang) {
  const translated = [];

  for (const q of questions) {
    const translatedQ = {
      question: await translator.translateText(q.question, 'en', targetLang),
      options: await Promise.all(
        q.options.map(opt => translator.translateText(opt, 'en', targetLang))
      ),
      explanation: await translator.translateText(q.explanation, 'en', targetLang)
    };

    translated.push(translatedQ);
  }

  return translated;
}
```

## Common Pitfalls to Avoid

### ❌ Bad Questions

1. **Ambiguous Questions:**
   - "Who invented the computer?" (multiple valid answers)
   - Better: "Who built the first programmable computer (Z3)?" (Konrad Zuse)

2. **Outdated Information:**
   - "How many planets in our solar system?" with answer "9"
   - Must use current information (8 planets since 2006)

3. **Obviously Wrong Options:**
   - Q: "What is Python?" Options: "Snake", "Programming language", "Car", "Food"
   - Better: All options should be programming-related

4. **Cultural Bias:**
   - Questions assuming knowledge specific to one region
   - Use internationally known facts

5. **Too Long:**
   - "In the context of modern computational artificial intelligence systems utilizing deep neural network architectures..." (180+ chars)
   - Shorten while preserving meaning

### ✅ Good Questions

1. **Clear and Specific:**
   - "What is the time complexity of binary search?"

2. **Educational:**
   - Explanation teaches something beyond the answer

3. **Balanced Options:**
   - All options plausible, similar length

4. **Current and Accurate:**
   - Verified facts, current information

## Quality Checklist

Before submitting questions:

- [ ] Total count = 100 questions
- [ ] All questions unique (no duplicates)
- [ ] All 4 languages present (en, es, de, nl)
- [ ] Each question has 4 options
- [ ] Correct answer index is valid (0-3)
- [ ] Explanations are educational
- [ ] Character lengths within guidelines
- [ ] Facts are accurate and verifiable
- [ ] Translations make sense
- [ ] No syntax errors
- [ ] File loads correctly in Node.js
- [ ] Difficulty matches level (1-10)

## Getting Help

### Resources

- **Question Guidelines:** `.claude/question-guidelines.md`
- **Example Questions:** Review existing complete files
- **Subject Research:** Wikipedia, subject-specific sites
- **Translation Verification:** DeepL, Google Translate

### Best Practices

1. **Start Small:** Create 10 perfect questions before scaling
2. **Use Templates:** Build reusable templates per subject
3. **Fact-Check:** Always verify information
4. **Get Feedback:** Test questions with others
5. **Iterate:** Refine based on usage data

## Conclusion

Generating 100 unique, educational questions requires:
- Subject knowledge or research
- Attention to detail
- Quality over quantity mindset
- Proper translations
- Consistent difficulty levels

The goal is educational value. Every question should teach something, not just test memorization.

Good luck! 🎯
