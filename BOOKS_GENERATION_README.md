# Book Questions Generation Guide

## Problem Statement

The Books category currently has **98.4% template questions** (9,840 out of 10,000):
- 100 files (10 subcategories × 10 levels)
- Each file needs 100 real questions
- Currently: ~40-47 real questions, ~53-60 template questions per file
- **Template questions have no educational value** and must be replaced

## Solution Overview

A Python script (`generate_complete_book_questions.py`) that:
1. **Generates real, educational questions** about actual books
2. **Includes all 4 languages** (English, Spanish, German, Dutch)
3. **Respects character limits** based on difficulty level
4. **Uses factual, verifiable information**
5. **Can be easily expanded** with new questions

## Book Subcategories

1. **Adventure Books** - Robinson Crusoe, Treasure Island, Moby Dick, etc.
2. **Biographies** - Real historical figures
3. **Children's Books** - Alice in Wonderland, Peter Pan, etc.
4. **Classic Literature** - Pride and Prejudice, Jane Eyre, etc.
5. **Detective Novels** - Sherlock Holmes, Poirot, Miss Marple, etc.
6. **Fantasy Novels** - Lord of the Rings, Harry Potter, Narnia, etc.
7. **Historical Novels** - War and Peace, Gone with the Wind, etc.
8. **Non-Fiction** - Popular science, history, biographies
9. **Poetry** - Famous poets and their works
10. **Science Fiction Novels** - 1984, Dune, Foundation, etc.

## Quick Start

### 1. Check current status

```bash
python generate_complete_book_questions.py --dry-run
```

This shows:
- How many real vs template questions exist
- How many questions will be replaced
- Preview of new questions
- **Does NOT make any changes**

### 2. Replace template questions

```bash
python generate_complete_book_questions.py
```

When prompted:
- Type `yes` to proceed with replacement
- Type `no` to abort

### 3. Generate for specific category/level

```bash
# Adventure Books, Level 2
python generate_complete_book_questions.py --category "Adventure Books" --level 2

# Fantasy Novels, Level 5
python generate_complete_book_questions.py --category "Fantasy Novels" --level 5
```

## Current Knowledge Base Status

### Adventure Books (Level 1)
- **Status**: 49/53 questions available (4 short)
- **Coverage**: Robinson Crusoe, Treasure Island, Moby Dick, Around the World in 80 Days, Count of Monte Cristo, Tom Sawyer, Call of the Wild, 20,000 Leagues, Jungle Book, Three Musketeers, Huckleberry Finn, King Solomon's Mines, Swiss Family Robinson, Kidnapped, Ivanhoe, Last of the Mohicans, Journey to the Center of the Earth, Sherlock Holmes, White Fang, Captains Courageous, Scarlet Pimpernel, Old Man and the Sea, Journey to the West

### Other Categories
- **Status**: Need to be added to the knowledge base
- **Priority**: Start with most popular categories (Adventure, Fantasy, Detective)

## How to Expand the Knowledge Base

### Adding Questions to Existing Category/Level

1. Open `generate_complete_book_questions.py`
2. Find the knowledge base dictionary (e.g., `ADVENTURE_BOOKS`)
3. Add questions to the appropriate level:

```python
ADVENTURE_BOOKS = {
    "level1": [
        # Existing questions...

        # Add new question:
        {
            "q": {
                "en": "Who wrote 'The Hobbit'?",
                "es": "¿Quién escribió 'El Hobbit'?",
                "de": "Wer schrieb 'Der Hobbit'?",
                "nl": "Wie schreef 'De Hobbit'?"
            },
            "opts": [
                {"en": "J.R.R. Tolkien", "es": "J.R.R. Tolkien", "de": "J.R.R. Tolkien", "nl": "J.R.R. Tolkien"},
                {"en": "C.S. Lewis", "es": "C.S. Lewis", "de": "C.S. Lewis", "nl": "C.S. Lewis"},
                {"en": "George R.R. Martin", "es": "George R.R. Martin", "de": "George R.R. Martin", "nl": "George R.R. Martin"},
                {"en": "J.K. Rowling", "es": "J.K. Rowling", "de": "J.K. Rowling", "nl": "J.K. Rowling"}
            ],
            "correct": 0,  # 0-based index (0 = first option)
            "exp": {
                "en": "J.R.R. Tolkien wrote 'The Hobbit' in 1937, set in Middle-earth.",
                "es": "J.R.R. Tolkien escribió 'El Hobbit' en 1937, ambientado en la Tierra Media.",
                "de": "J.R.R. Tolkien schrieb 'Der Hobbit' 1937, der in Mittelerde spielt.",
                "nl": "J.R.R. Tolkien schreef 'De Hobbit' in 1937, gesitueerd in Midden-aarde."
            }
        }
    ]
}
```

### Adding a New Category

1. Create a new knowledge base dictionary:

```python
FANTASY_NOVELS = {
    "level1": [
        # Add 60+ questions for level 1
    ],
    "level2": [
        # Add 60+ questions for level 2
    ],
    # ... etc.
}
```

2. Update the script to use the new category

### Character Limits (Guidelines)

**Questions:**
- Level 1-5: ~120 characters
- Level 6-8: ~140 characters
- Level 9-10: ~160 characters

**Answer Options:**
- All levels: ~100 characters

**Explanations:**
- Level 1-5: ~350 characters
- Level 6-8: ~400 characters
- Level 9-10: ~450 characters

**Note**: These are guidelines, not strict limits. Prioritize clarity and correctness.

## Question Quality Guidelines

### What Makes a Good Question?

✅ **DO:**
- Use real book titles, authors, characters, plots
- Include factual, verifiable information
- Make questions educational and interesting
- Use proper translations in all 4 languages
- Increase difficulty appropriately by level
- Provide informative explanations

❌ **DON'T:**
- Create vague or ambiguous questions
- Use obscure details only experts would know (for level 1-5)
- Include outdated information
- Use cultural references that don't translate
- Make explanations just repeat the answer

### Difficulty Progression

**Level 1-3 (Beginner):**
- Basic facts: "Who wrote X?", "What is the main character's name?"
- Famous books and well-known details
- No deep analysis required

**Level 4-6 (Intermediate):**
- More specific details: plot points, secondary characters
- Less famous books or deeper knowledge of famous ones
- Some context and background

**Level 7-8 (Advanced):**
- Detailed plot knowledge, themes, symbolism
- Historical context, literary significance
- Comparisons between works

**Level 9-10 (Expert):**
- Scholarly knowledge: publication dates, editions, controversies
- Literary analysis and criticism
- Influence and legacy

## Translation Tips

### Tool Recommendations
1. **DeepL** - Best for literary translations
2. **Google Translate** - Good for verification
3. **Native speakers** - Ideal when available

### Common Patterns

**Book Titles:**
- Often have official translations - use those
- Example: "Treasure Island" → "La Isla del Tesoro" (ES), "Die Schatzinsel" (DE), "Schateiland" (NL)

**Character Names:**
- Usually kept in original language
- Exception: Some classic characters have localized names

**Technical Terms:**
- Keep specialized literary terms in English when appropriate
- Translate common words normally

## Workflow for Complete Category

1. **Research** (1-2 hours per level)
   - Identify 15-20 major books in the category
   - Research key facts: author, publication date, plot, characters
   - Find 3-5 details per book

2. **Write Questions** (2-3 hours per level)
   - Create 60-70 questions in English
   - Focus on variety: authors, titles, characters, plots, themes
   - Ensure proper difficulty progression

3. **Translate** (1-2 hours per level)
   - Translate to Spanish, German, Dutch
   - Verify book titles have correct translations
   - Check character limits

4. **Format** (30 minutes per level)
   - Convert to Python dictionary format
   - Verify correct syntax
   - Test with `--dry-run`

5. **Deploy** (5 minutes per level)
   - Run script to replace templates
   - Verify question counts
   - Test a few questions manually

**Total time per category**: ~40-50 hours for all 10 levels

## Progress Tracking

### Completed
- ✅ Adventure Books Level 1: 49/53 questions (92.5%)

### In Progress
- ⏳ Adventure Books: Levels 2-10 (need 53-60 questions each)

### Not Started
- ⬜ Biographies (10 levels)
- ⬜ Children's Books (10 levels)
- ⬜ Classic Literature (10 levels)
- ⬜ Detective Novels (10 levels)
- ⬜ Fantasy Novels (10 levels)
- ⬜ Historical Novels (10 levels)
- ⬜ Non-Fiction (10 levels)
- ⬜ Poetry (10 levels)
- ⬜ Science Fiction Novels (10 levels)

**Total progress**: 49 / 9,840 questions (0.5%)
**Remaining work**: ~9,791 questions across 100 files

## Automation Opportunities

### AI-Assisted Generation

You could use AI to help generate questions:

1. **Research** - Ask AI for book facts
2. **Question Writing** - Generate question variations
3. **Translation** - Use AI translation with verification
4. **Formatting** - Convert to required dictionary format

**However**: Always verify factual accuracy and translation quality!

### Batch Processing

Create a batch script to process multiple files:

```python
# Example pseudo-code
categories = ["Adventure Books", "Fantasy Novels", "Detective Novels"]
for category in categories:
    for level in range(1, 11):
        generate_questions(category, level)
```

## Validation & Testing

### Before Committing

1. **Run dry-run** to preview changes
2. **Check question count** - should be 100 per file
3. **Verify no template questions remain**
4. **Test in quiz application** - load a few questions
5. **Check translations** - spot check a few

### Quality Checks

```bash
# Count real vs template questions
node check_book_questions.js

# Find files with template questions
grep -r "Question [0-9]" src/questions/data/subjects/books/
```

## Future Enhancements

### Possible Improvements

1. **Web Interface** - Generate questions through a web form
2. **Import from CSV** - Bulk import from spreadsheet
3. **Question Bank** - Shared database of verified questions
4. **Auto-Translation** - Integrate DeepL API
5. **Difficulty Validation** - Automatically check if question matches level
6. **Duplicate Detection** - Prevent similar questions

### Community Contributions

Consider:
- GitHub repository for question submissions
- Review process for quality control
- Attribution for contributors
- Voting system for best questions

## FAQ

### Q: Can I use AI to generate all the questions?

A: You can use AI to help, but **must verify accuracy**. Books contain specific facts that AI sometimes gets wrong. Always:
- Cross-reference with reliable sources
- Check official book titles and character names
- Verify publication dates and author information
- Test translations with native speakers when possible

### Q: How do I know if a question is the right difficulty?

A: Use this rule of thumb:
- **Level 1-3**: Could a casual reader who's heard of the book answer this?
- **Level 4-6**: Would someone who read the book remember this?
- **Level 7-8**: Would a book club member or student know this?
- **Level 9-10**: Would a literature teacher or scholar know this?

### Q: What if I can't find enough questions for a book?

A: Options:
1. Include more books in that category (better variety anyway)
2. Go deeper into the books you have (characters, quotes, themes)
3. Add questions about the author, historical context, adaptations
4. Use series/sequels if available

### Q: How long will this take to complete?

A: Rough estimates:
- **Fast path** (AI-assisted, less verification): 100-150 hours
- **Medium path** (Mix of AI and manual): 200-300 hours
- **Slow path** (All manual research and writing): 400-500 hours

For a dedicated person working 20 hours/week:
- Fast: 2-3 months
- Medium: 3-4 months
- Slow: 5-6 months

### Q: Can multiple people work on this?

A: Yes! Divide by:
- **Category** - Each person takes 1-2 categories
- **Level** - One person does beginner (1-3), another intermediate (4-6), another advanced (7-10)
- **Language** - One person writes English, others translate

## Resources

### Useful Websites for Book Research

- **Wikipedia** - Basic facts, publication info
- **Goodreads** - Plot summaries, character lists
- **SparkNotes** - Chapter summaries, analysis
- **Project Gutenberg** - Full texts of classics
- **LibraryThing** - Book details, reviews

### Translation Resources

- **DeepL** - https://www.deepl.com/translator
- **Google Translate** - https://translate.google.com/
- **WordReference** - https://www.wordreference.com/ (for individual words)
- **Linguee** - https://www.linguee.com/ (context examples)

### Book Lists for Each Category

**Adventure Books:**
- Robinson Crusoe, Treasure Island, Moby Dick, Around the World in 80 Days, Count of Monte Cristo, Tom Sawyer, Huckleberry Finn, Call of the Wild, White Fang, 20,000 Leagues Under the Sea, Journey to the Center of the Earth, Jungle Book, King Solomon's Mines, Swiss Family Robinson, Kidnapped, Ivanhoe, Last of the Mohicans, Three Musketeers, Scarlet Pimpernel, Old Man and the Sea

**Fantasy Novels:**
- Lord of the Rings, The Hobbit, Harry Potter series, Chronicles of Narnia, A Song of Ice and Fire, The Wheel of Time, Earthsea, Discworld, Stormlight Archive, Mistborn, The Name of the Wind, American Gods, Good Omens, The Dark Tower, Kingkiller Chronicle

**Detective Novels:**
- Sherlock Holmes stories, Hercule Poirot mysteries, Miss Marple mysteries, Father Brown, Sam Spade, Philip Marlowe, Inspector Morse, Kurt Wallander, Harry Hole, Easy Rawlins, Kinsey Millhone

**Classic Literature:**
- Pride and Prejudice, Jane Eyre, Wuthering Heights, Great Expectations, Oliver Twist, Frankenstein, Dracula, The Picture of Dorian Gray, Emma, Sense and Sensibility, Persuasion, Northanger Abbey, Mansfield Park, Tess of the d'Urbervilles, Far from the Madding Crowd

**Science Fiction:**
- 1984, Brave New World, Fahrenheit 451, Foundation, Dune, Do Androids Dream of Electric Sheep?, The Left Hand of Darkness, Neuromancer, Snow Crash, Ender's Game, The Hitchhiker's Guide to the Galaxy, Slaughterhouse-Five, The Time Machine, War of the Worlds, 2001: A Space Odyssey

---

## Summary

This tool helps transform the Books category from 98.4% useless template questions to 100% real, educational content. While it requires significant work, the structure is in place to make the process as efficient as possible.

**Start small**: Complete one category fully before moving to the next.
**Iterate quickly**: Use dry-run to verify, deploy fast, improve later.
**Verify quality**: Better to have fewer high-quality questions than many mediocre ones.

Good luck! 🚀
