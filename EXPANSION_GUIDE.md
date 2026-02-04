# Quiz Question Expansion Guide

## Overview

This guide explains how to use the robust question expansion scripts to expand quiz files from 40 questions to 100+ questions.

## Scripts

### 1. `robust_question_expander.py`

The main script that expands quiz files using Claude AI to generate new questions.

**Features:**
- Automatically finds files with < 100 questions
- Uses Claude AI to generate contextually appropriate questions
- Creates backups before modifying files
- Validates the expansion was successful
- Restores from backup if expansion fails

**Usage:**

```bash
# Run the full expansion (will ask for confirmation)
python robust_question_expander.py
```

The script will:
1. Scan all quiz files in the subjects directory
2. Identify files with < 100 questions
3. Show you a summary of files to process
4. Ask for confirmation
5. Process each file one by one
6. Show progress and results

### 2. `test_single_expansion.py`

Test script to expand a single file and verify the result.

**Usage:**

```bash
# Test with the default file (Beer level1.js)
python test_single_expansion.py

# Test with a specific file
python test_single_expansion.py "path/to/your/file.js"
```

**Example:**

```bash
python test_single_expansion.py "c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\drinks\Beer\level1.js"
```

### 3. `validate_expansion.py`

Validation script to check if expanded files are properly formatted.

**Usage:**

```bash
python validate_expansion.py "path/to/file.js"
```

**Example:**

```bash
python validate_expansion.py "c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\drinks\Beer\level1.js"
```

The validation script checks:
- Question count
- File structure (IIFE wrapper, module exports)
- Balanced braces and brackets
- Required fields in each question
- Language translations (en, es, de, nl)
- Valid correct answer indices

## How It Works

### Question Detection

The scripts count questions by looking for the pattern `question: {` in the file.

### Insertion Strategy

1. **Find the insertion point**: Locates the closing `]` of the questions array
2. **Split the content**: Divides the file at the insertion point
3. **Insert new questions**: Adds the generated questions before the `]`
4. **Maintain formatting**: Preserves indentation and structure

### File Structure

Quiz files follow this structure:

```javascript
(function() {
  const level1 = {
    name: {
      en: "Name in English",
      es: "Nombre en español",
      de: "Name auf Deutsch",
      nl: "Naam in Nederlands"
    },
    questions: [
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
        correct: 0,
        explanation: {
          en: "English explanation.",
          es: "Spanish explanation.",
          de: "German explanation.",
          nl: "Dutch explanation."
        }
      }
      // ... more questions
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
```

## Requirements

- Python 3.7+
- `anthropic` Python package
- `ANTHROPIC_API_KEY` environment variable set

## Installation

```bash
# Install the Anthropic SDK
pip install anthropic

# Set your API key (Windows)
set ANTHROPIC_API_KEY=your_key_here

# Set your API key (Linux/Mac)
export ANTHROPIC_API_KEY=your_key_here
```

## Best Practices

1. **Test on a single file first**: Use `test_single_expansion.py` to verify the script works on one file before running the full batch

2. **Check backups**: Backup files are created as `filename.js.backup` - these are automatically deleted on success but kept on failure

3. **Validate after expansion**: Use `validate_expansion.py` to check the expanded file is properly formatted

4. **Review the output**: Check a few expanded files manually to ensure the quality of generated questions

5. **Monitor API usage**: Each file expansion makes one API call to Claude, which can be expensive for large batches

## Troubleshooting

### Issue: File count doesn't increase

**Solution**:
- Check the insertion point detection logic
- Verify the file structure matches the expected format
- Check if the backup file was restored

### Issue: Syntax errors after expansion

**Solution**:
- Run `validate_expansion.py` to identify specific issues
- Check for unbalanced braces or brackets
- Verify the generated questions have proper formatting

### Issue: Generated questions are low quality

**Solution**:
- Review the prompt in `robust_question_expander.py`
- Adjust the temperature parameter (lower = more conservative)
- Increase the sample question context provided to Claude

## Advanced Usage

### Process specific directories only

Edit the `main()` function in `robust_question_expander.py` to change the base path:

```python
def main():
    # Only process drinks category
    base_path = r"c:\Users\rbosch\...\subjects\drinks"
    # ...
```

### Change target count

Modify the `target_count` parameter:

```python
files_to_process = scan_directory(base_path, target_count=150)
```

### Adjust generation parameters

In the `expand_questions()` function, modify:

```python
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=16000,  # Increase for more questions
    temperature=1.0,   # Lower for more conservative generation
    messages=[...]
)
```

## Summary

The expansion scripts provide a robust, automated way to expand quiz files while maintaining quality and structure. Always test on single files first, validate the results, and review the output for quality before committing changes.
