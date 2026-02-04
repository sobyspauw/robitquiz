# Quiz Question Expansion Instructions

## Overview
You need to expand 200 quiz files from 40 questions to 100 questions each (60 new questions per file).

## Current Status
- **Famous People**: 83 files need expansion
- **Famous Buildings**: 117 files need expansion
- **Total**: 200 files × 60 questions = 12,000 new questions needed

## Option 1: Run the Automated Script (Recommended)

### Prerequisites
1. Set your ANTHROPIC_API_KEY environment variable:
   ```bash
   # Windows PowerShell
   $env:ANTHROPIC_API_KEY="your-api-key-here"

   # Windows CMD
   set ANTHROPIC_API_KEY=your-api-key-here
   ```

2. Install the Anthropic SDK:
   ```bash
   npm install @anthropic-ai/sdk
   ```

### Run the Script
```bash
node expand_batch.js
```

This will:
- Scan all files in famous-people and famous-buildings
- Expand each file from 40 to 100 questions
- Generate questions matching the style and difficulty
- Include all 4 language translations
- Save progress and log any failures

### Estimated Time
- API calls: ~200 files × 10 seconds = ~33 minutes
- Total with delays: ~45-60 minutes

### Cost Estimate
- ~60 questions × 200 files = 12,000 questions
- Approx input: 200 × 3K tokens = 600K tokens
- Approx output: 200 × 12K tokens = 2.4M tokens
- Estimated cost: ~$15-20 USD

## Option 2: Manual Expansion (Time Intensive)

For each file that needs expansion:

1. Read the file and understand the topic/difficulty
2. Generate 60 new questions following the format:
   ```javascript
   ,
   {
     question: {
       en: "English question?",
       es: "Spanish question?",
       de: "German question?",
       nl: "Dutch question?"
     },
     options: [
       { en: "Option 1", es: "Opción 1", de: "Option 1", nl: "Optie 1" },
       { en: "Option 2", es: "Opción 2", de: "Option 2", nl: "Optie 2" },
       { en: "Option 3", es: "Opción 3", de: "Option 3", nl: "Optie 3" },
       { en: "Option 4", es: "Opción 4", de: "Option 4", nl: "Optie 4" }
     ],
     correct: 0,  // Index 0-3
     explanation: {
       en: "English explanation.",
       es: "Spanish explanation.",
       de: "German explanation.",
       nl: "Dutch explanation."
     }
   }
   ```

3. Insert before the closing `]` of the questions array
4. Verify the file has 100 questions total

## Files That Need Expansion

### Famous People Categories:
- Actors and Actresses: 8 files (level 3-10, excluding 1-2)
- Artists: 4 files (level 7-10)
- Authors and Writers: 10 files (all levels)
- Entrepreneurs: 8 files (level 3-10)
- Historical Figures: 9 files (level 2-10)
- Musicians: 6 files (level 4-10)
- Political Leaders: 9 files (level 2-10)
- Scientists: 7 files (level 3-10)
- Social Media Influencers: 10 files (all levels)
- Sports Icons: 10 files (all levels)

### Famous Buildings (All 12 Buildings × 10 Levels = 117 Files):
- Big Ben: 10 files
- Burj Khalifa: 10 files
- Colosseum: 10 files
- Eiffel Tower: 9 files
- Empire State Building: 10 files
- Great Wall of China: 10 files
- Machu Picchu: 10 files
- Petra: 10 files
- Pyramids of Giza: 9 files
- Sagrada Familia: 10 files
- Sydney Opera House: 10 files
- Taj Mahal: 9 files

## Quality Checklist

For each expanded file, ensure:
- [ ] Total count is 100+ questions
- [ ] New questions match difficulty level
- [ ] All 4 languages are included (en, es, de, nl)
- [ ] Varied correct answer indices (not always 0)
- [ ] Factually accurate information
- [ ] Proper explanations provided
- [ ] Valid JavaScript syntax
- [ ] No duplicate questions

## Verification

After expansion, run:
```bash
node count_and_identify.js
```

This will show how many files still need expansion.

## Notes

- The automated script uses Claude Sonnet 4 for high-quality question generation
- Questions are generated to match the existing style and difficulty
- Translations are handled automatically
- The script includes rate limiting to avoid API issues
