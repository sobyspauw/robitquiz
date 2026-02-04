# Quick Expansion Guide

## Current Status (Jan 29, 2026)

### ✅ Completed Today
- Artists level 9: 100 questions ✓
- Social Media Influencers level 1: Added 10 questions (50 total)

### 📊 Remaining Work
- **140 files** need expansion
- **8,400 questions** to create
- **33,600 translations** needed (4 languages each)

## Priority Order

### 🔴 CRITICAL (Do First)
1. **Social Media Influencers** - 10 files × 60 questions = 600 questions
2. **Sports Icons** - 10 files × 60 questions = 600 questions
3. **Authors and Writers** - 10 files × 60 questions = 600 questions

### 🟡 HIGH PRIORITY
4. **Actors and Actresses** - 8 files × 60 questions = 480 questions
5. **Historical Figures** - 9 files × 60 questions = 540 questions
6. **Political Leaders** - 9 files × 60 questions = 540 questions

### 🟢 MEDIUM PRIORITY
7. **Scientists** - 8 files × 60 questions = 480 questions
8. **Entrepreneurs** - 8 files × 60 questions = 480 questions
9. **Musicians** - 7 files × 60 questions = 420 questions

### ⚪ LARGE BATCH
10. **Famous Buildings** - 110 files × 60 questions = 6,600 questions

## Efficient Expansion Strategy

### Method 1: Template Generation
```python
# Use batch_expand_all.py to generate templates
python batch_expand_all.py

# Then use AI to fill in real content
```

### Method 2: Parallel AI Agents
Run multiple agents simultaneously:
```bash
# Agent 1: Social Media Influencers
# Agent 2: Sports Icons
# Agent 3: Authors and Writers
# Agent 4: Famous Buildings
```

### Method 3: Category Scripts
Use specialized scripts per category:
- `expand_social_media.py`
- `expand_sports_icons.py`
- `expand_authors.py`
- `expand_buildings.py`

## Quick Commands

### Check Progress
```bash
# Count questions in all files
for file in src/questions/data/subjects/famous-people/*/*.js; do
  echo -n "$(basename $(dirname "$file"))/$(basename "$file"): "
  grep -c "question:" "$file"
done | grep -v ": 10[0-9]" | grep -v ": 1[0-9][0-9]"
```

### Find Files Needing Work
```bash
python expand_famous_people_batch.py
```

### Validate Expansion
```bash
# Check for syntax errors
node -c src/questions/data/subjects/famous-people/*/level*.js
```

## Time Estimates

Based on current rate:
- Manual expansion: 5-10 questions per hour with translations
- AI-assisted: 50-100 questions per hour
- Template + AI fill: 200+ questions per hour

**Total estimated time**:
- Option A (Manual): 84-168 hours
- Option B (AI-assisted): 8-17 hours
- Option C (Template): 4-8 hours

## Next Immediate Actions

1. ✅ Complete Social Media Influencers level 1 (add 50 more)
2. ⬜ Expand Social Media Influencers level 2-10
3. ⬜ Expand Sports Icons (all levels)
4. ⬜ Expand Authors and Writers (all levels)
5. ⬜ Start Famous Buildings with one complete building

## Files Created
- `batch_expand_all.py` - Main coordinator
- `smart_batch_expander.py` - Priority calculator
- `expand_famous_people_batch.py` - Status checker
- `auto_expand_questions.py` - Template generator
- `EXPANSION_STATUS_REPORT.md` - Detailed status
- `QUICK_EXPANSION_GUIDE.md` - This file

---

💡 **TIP**: Use Task agents with the prompts in batch_expansion_plan.json for fastest results!