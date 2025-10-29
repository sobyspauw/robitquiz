# Console Commands Reference

This file contains useful console commands for testing and debugging the RobitQuiz game.

## 🧪 Testing Commands

### List All Subcategories
Shows all available topics and their subcategories with current progress levels.
```javascript
listSubcategories()
```

### Set Subcategory Progress
Set progress to a specific level for testing (useful for testing level 10 completion).

**⚠️ IMPORTANT:** First run `listSubcategories()` to see the correct topic and subcategory IDs!

```javascript
setSubcategoryProgress("topicId", "subcategoryId", level)

// Example workflow:
// 1. First, list all available subcategories to find the correct IDs
listSubcategories()

// 2. Use the exact IDs from the output above
setSubcategoryProgress("board-games", "monopoly", 9)           // Set to level 9
setSubcategoryProgress("dinosaurs", "t-rex-family", 10)        // Set to level 10
setSubcategoryProgress("famous-buildings", "taj-mahal", 1)     // Reset to level 1

// Note: The function only works after the game has loaded all topics!
// If you get an error, refresh the page and try again after a few seconds.
```

### Get Subcategory Progress
Check the current progress level for a specific subcategory.
```javascript
window.getSubcategoryProgress("topicId", "subcategoryId")

// Example:
window.getSubcategoryProgress("famous-people", "actors")
```

### Test Completion Popup
Show the completion popup with confetti (for visual testing).
```javascript
testCompletionPopup()
```

### Test Level 10 Completion Popup
Show the special level 10 completion popup with custom navigation buttons.
```javascript
// First set up a quiz context
window.currentQuizContext = { mainTopicId: "board-games", subcategoryId: "monopoly", level: 10 };
// Then show the popup
showCompletePopup(10, 10, true)
```

### Test Timeout Popup
Show the "Time's Up!" popup.
```javascript
showTimeoutPopup()
```

### Test Error Popup (Too Many Wrong Answers)
Show the "Too many wrong answers" popup.
```javascript
showErrorPopup()
```

## 🗑️ Storage Management

### Clear All Local Storage
**WARNING:** This will reset ALL progress, stars, diamonds, and power-ups!
```javascript
localStorage.clear()
location.reload()
```

### Clear Specific Data

#### Clear Progress Only
Remove all level progress while keeping stars and power-ups.
```javascript
Object.keys(localStorage).forEach(key => {
  if (key.startsWith('qb_progress_')) {
    localStorage.removeItem(key);
  }
});
location.reload()
```

#### Clear Stars and Diamonds
Reset currency while keeping progress.
```javascript
localStorage.removeItem('qb_stars');
localStorage.removeItem('qb_diamonds');
location.reload()
```

#### Clear Power-ups
Reset all power-up counts to default.
```javascript
localStorage.removeItem('qb_fifty_fifty_count');
localStorage.removeItem('qb_time_bonus_count');
localStorage.removeItem('qb_skip_count');
location.reload()
```

#### Clear Daily Challenge
Reset daily challenge status.
```javascript
localStorage.removeItem('qb_daily_challenge');
location.reload()
```

## 💰 Currency Commands

### Add Stars
```javascript
localStorage.setItem('qb_stars', (parseInt(localStorage.getItem('qb_stars') || 0) + 1000).toString());
location.reload()
```

### Add Diamonds
```javascript
localStorage.setItem('qb_diamonds', (parseInt(localStorage.getItem('qb_diamonds') || 0) + 100).toString());
location.reload()
```

### Set Specific Amount
```javascript
localStorage.setItem('qb_stars', '5000');
localStorage.setItem('qb_diamonds', '500');
location.reload()
```

## ⚡ Power-up Commands

### Add Fifty-Fifty Power-ups
```javascript
localStorage.setItem('qb_fifty_fifty_count', '10');
location.reload()
```

### Add Time Bonus Power-ups
```javascript
localStorage.setItem('qb_time_bonus_count', '10');
location.reload()
```

### Add Skip Power-ups
```javascript
localStorage.setItem('qb_skip_count', '10');
location.reload()
```

### Add All Power-ups
```javascript
localStorage.setItem('qb_fifty_fifty_count', '10');
localStorage.setItem('qb_time_bonus_count', '10');
localStorage.setItem('qb_skip_count', '10');
location.reload()
```

## 🔍 Debugging Commands

### Check Current Quiz Context
See which quiz is currently active and at what level.
```javascript
console.log('Current Quiz Context:', window.currentQuizContext);
```

### View All LocalStorage Data
See everything stored in localStorage.
```javascript
Object.keys(localStorage).forEach(key => {
  if (key.startsWith('qb_')) {
    console.log(key, '=', localStorage.getItem(key));
  }
});
```

### Check Main Topics
View all loaded topics and their subcategories.
```javascript
console.log('Main Topics:', window.mainTopics);
```

### Check Groups (Old System)
View subjects from the old system.
```javascript
console.log('Groups:', window.groups);
```

## 🎮 Game State Commands

### Unlock All Topics
Unlock all main topics (bypass star requirements).
```javascript
Object.keys(window.mainTopics).forEach(topicId => {
  localStorage.setItem(`qb_topic_unlocked_${topicId}`, 'true');
});
location.reload()
```

### Complete All Levels for a Topic
Mark all levels complete for a specific topic.
```javascript
const topic = window.mainTopics["famous-people"]; // Change topic ID here
topic.subcategories.forEach(subcat => {
  window.updateSubcategoryProgress("famous-people", subcat.id, 11);
});
location.reload()
```

### Reset Tutorial
Reset tutorial state to show tutorial again.
```javascript
localStorage.removeItem('qb_tutorial_completed');
location.reload()
```

## 📊 Progress Export/Import

### Export All Progress
Save all progress to a JSON file you can backup.
```javascript
const data = {};
Object.keys(localStorage).forEach(key => {
  if (key.startsWith('qb_')) {
    data[key] = localStorage.getItem(key);
  }
});
console.log('Progress Data:', JSON.stringify(data, null, 2));
// Copy the output and save it
```

### Import Progress
Restore progress from a backup (replace `data` with your saved JSON).
```javascript
const data = {
  "qb_stars": "1000",
  "qb_diamonds": "100"
  // ... paste your data here
};
Object.keys(data).forEach(key => {
  localStorage.setItem(key, data[key]);
});
location.reload()
```

## 🔧 Utility Commands

### Force Reload Questions
Force reload all question files.
```javascript
location.reload(true)
```

### Check Game Version
See current language and settings.
```javascript
console.log('Language:', window.lang);
console.log('Dark Mode:', localStorage.getItem('qb_dark_mode'));
```

### Toggle Dark Mode
```javascript
const isDark = localStorage.getItem('qb_dark_mode') === 'true';
localStorage.setItem('qb_dark_mode', (!isDark).toString());
location.reload()
```
const islight = localStorage.getItem('qb_light_mode') === 'true';
localStorage.setItem('qb_light_mode', (!islight).toString());
location.reload()
---

## 💡 Quick Start Testing Scenario

To quickly test level 10 completion:

```javascript
// 1. List available subcategories
listSubcategories()

// 2. Set progress to level 9 for a topic
setSubcategoryProgress("famous-people", "actors", 9)

// 3. Give yourself power-ups for easier completion
localStorage.setItem('qb_skip_count', '10');

// 4. Reload and play level 10
location.reload()
```

---

## ❓ Troubleshooting

### "setSubcategoryProgress is not defined" or doesn't work
**Problem:** The function is called before the game has fully loaded.

**Solution:**
1. Wait a few seconds after loading the page
2. Make sure you're on the home screen or subjects screen
3. Try running `listSubcategories()` first to ensure topics are loaded
4. If still not working, refresh the page and wait 3-5 seconds before trying again

### "Cannot read property 'subcategories' of undefined"
**Problem:** You're using an incorrect topic ID or subcategory ID.

**Solution:**
1. Run `listSubcategories()` to see all available IDs
2. Copy the exact IDs from the console output
3. IDs are case-sensitive and use dashes (e.g., "board-games" not "boardgames")

### Changes don't appear after using commands
**Problem:** LocalStorage changes need a page reload to take effect.

**Solution:**
- Always use `location.reload()` after making changes
- Or press F5 to refresh the page

### Progress resets after closing browser
**Problem:** Browser is in private/incognito mode or localStorage is disabled.

**Solution:**
- Exit private/incognito mode
- Check browser settings to ensure cookies/storage is enabled
- Try a different browser

---

**Note:** Most commands require a page reload to see the changes. Use `location.reload()` after making changes.
