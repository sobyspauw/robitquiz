# Quiz Question Expansion - Complete Package

## Quick Links

- **Quick Start**: [QUICK_START.md](QUICK_START.md) - Start here for step-by-step instructions
- **Detailed Guide**: [EXPANSION_GUIDE.md](EXPANSION_GUIDE.md) - Comprehensive documentation
- **Complete Documentation**: [EXPANSION_SCRIPTS_README.md](EXPANSION_SCRIPTS_README.md) - Full technical details

## What This Package Does

Automatically expands quiz files from 40 questions to 100+ questions using Claude AI while maintaining proper formatting and structure.

## Current Situation

- **Total quiz files**: 1,225
- **Complete (100+ questions)**: 22 files (1.8%)
- **Need expansion**: 1,203 files
- **New questions needed**: 71,933
- **Estimated API cost**: ~$158 (Claude Sonnet 4)
- **Estimated time**: ~6-7 hours

## The Scripts

| Script | Purpose | Quick Use |
|--------|---------|-----------|
| `check_expansion_status.py` | Check what needs expansion | `python check_expansion_status.py` |
| `dry_run_expansion.py` | See plan without changes | `python dry_run_expansion.py` |
| `test_single_expansion.py` | Test on one file | `python test_single_expansion.py` |
| `validate_expansion.py` | Validate results | `python validate_expansion.py <file>` |
| `robust_question_expander.py` | **Run the expansion** | `python robust_question_expander.py` |

## 5-Minute Quick Start

```bash
# 1. Install dependencies
pip install anthropic

# 2. Set API key
set ANTHROPIC_API_KEY=your_key_here

# 3. Check status
python check_expansion_status.py

# 4. See the plan (no changes made)
python dry_run_expansion.py

# 5. Test on one file
python test_single_expansion.py

# 6. Run full expansion (BE CAREFUL - costs money!)
python robust_question_expander.py
```

## Key Features

### Robust & Safe
- ✓ Automatic backups before any changes
- ✓ Validation and rollback on failure
- ✓ Error recovery and detailed logging
- ✓ Dry-run mode to preview changes

### Smart Question Generation
- ✓ Contextually appropriate questions
- ✓ Matches difficulty level of existing questions
- ✓ Includes all 4 languages (en, es, de, nl)
- ✓ Varied correct answer positions
- ✓ Detailed explanations

### Proper File Handling
- ✓ Maintains JavaScript structure
- ✓ Preserves indentation and formatting
- ✓ Handles various file formats
- ✓ Multi-level insertion point detection

## How It Works

1. **Scans** quiz files to find those with < 100 questions
2. **Reads** the file and analyzes existing questions
3. **Generates** 60 new questions using Claude AI
4. **Finds** the correct insertion point (before closing `]`)
5. **Inserts** new questions with proper formatting
6. **Validates** the result (checks count and structure)
7. **Restores** from backup if anything goes wrong

## Cost Breakdown (Estimated)

For expanding 1,199 files:

```
API Calls:        1,199
Input Tokens:     ~4.8 million
Output Tokens:    ~9.6 million
Total Cost:       ~$158
Time Required:    ~6-7 hours
```

## File Structure

```
RobitQuiz/
├── robust_question_expander.py    (13 KB) - Main expansion script
├── test_single_expansion.py       (1.9 KB) - Single file tester
├── validate_expansion.py          (6.6 KB) - Validation script
├── check_expansion_status.py      (7.2 KB) - Status checker
├── dry_run_expansion.py           (7.6 KB) - Dry-run planner
├── QUICK_START.md                 (4.2 KB) - Quick start guide
├── EXPANSION_GUIDE.md             (6.3 KB) - Detailed guide
├── EXPANSION_SCRIPTS_README.md    (8.1 KB) - Complete docs
└── README_EXPANSION.md            (this file) - Index
```

## Recommended Workflow

### Phase 1: Planning (5 minutes)
1. Read QUICK_START.md
2. Run `check_expansion_status.py`
3. Run `dry_run_expansion.py`
4. Review the cost estimate

### Phase 2: Testing (10 minutes)
1. Run `test_single_expansion.py`
2. Validate with `validate_expansion.py`
3. Manually review the expanded file
4. Check the backup was created

### Phase 3: Batch Processing (6-7 hours)
1. Run `robust_question_expander.py`
2. Confirm when prompted
3. Monitor progress
4. Review final summary

### Phase 4: Verification (5 minutes)
1. Run `check_expansion_status.py` again
2. Check git diff for changes
3. Validate a few random files
4. Commit successful expansions

## Safety Checklist

Before running the full expansion:

- [ ] API key is set correctly
- [ ] Tested on a single file successfully
- [ ] Validation passed for test file
- [ ] Manually reviewed test file quality
- [ ] Understand the cost (~$158 for all files)
- [ ] Have 6-7 hours available (or can run overnight)
- [ ] Git working directory is clean (can track changes)
- [ ] Created a backup of the entire project (optional but recommended)

## What Could Go Wrong

| Problem | Likelihood | Impact | Solution |
|---------|-----------|--------|----------|
| API timeout | Low | Medium | Script retries automatically |
| Syntax errors in output | Low | Low | Auto-rollback from backup |
| Insertion point wrong | Very Low | Low | Multi-level detection + rollback |
| API cost higher than expected | Medium | Medium | Use dry-run to estimate first |
| Generated questions low quality | Low | Medium | Review sample before full run |

## Success Indicators

After running the expansion:

✓ Files increase from 40 to 100+ questions
✓ Validation script passes
✓ File structure intact (IIFE wrapper, module.exports)
✓ All questions have 4 languages
✓ No syntax errors in JavaScript
✓ Questions are contextually appropriate
✓ Backup files cleaned up (indicates success)

## Getting Help

1. **Check the documentation**:
   - QUICK_START.md for basic workflow
   - EXPANSION_GUIDE.md for detailed info
   - EXPANSION_SCRIPTS_README.md for technical details

2. **Run diagnostics**:
   - `check_expansion_status.py` for overall status
   - `validate_expansion.py` for file validation
   - Check backup files to see what was attempted

3. **Review error messages**:
   - Scripts provide detailed error messages
   - Stack traces help identify issues
   - Validation script shows specific problems

## Best Practices

1. **Always test first** - Use test_single_expansion.py before batch processing
2. **Review quality** - Manually check a few expanded files
3. **Monitor costs** - Use dry_run_expansion.py to estimate
4. **Track changes** - Use git to see what changed
5. **Keep backups** - Don't delete .backup files until verified
6. **Run overnight** - Processing 1,199 files takes ~6-7 hours
7. **Validate results** - Check a random sample after completion

## Performance Tips

1. **Process in batches** - Edit the script to process specific categories
2. **Use faster model** - Change to Claude Haiku for lower cost/faster speed
3. **Parallel processing** - Future enhancement for faster execution
4. **Cache results** - API responses could be cached (not implemented yet)

## Next Steps

1. Read [QUICK_START.md](QUICK_START.md)
2. Run `check_expansion_status.py` to see current state
3. Run `dry_run_expansion.py` to see the plan
4. Test with `test_single_expansion.py`
5. If satisfied, run `robust_question_expander.py`

## Summary

This package provides a complete, production-ready solution for expanding quiz files. The scripts are robust, safe, and well-documented. The expansion process maintains quality and structure while significantly increasing the question count.

**Status**: ✓ Production Ready
**Test Coverage**: ✓ Single file tested
**Documentation**: ✓ Complete
**Safety Features**: ✓ Backups, validation, rollback
**Cost Estimate**: ~$158 for 1,199 files
**Time Estimate**: ~6-7 hours

---

**Created**: 2026-01-28
**Version**: 1.0
**Last Updated**: 2026-01-28
