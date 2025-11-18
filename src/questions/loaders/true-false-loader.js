// True/False Question Loader
// Combines all category files into one pool for the True/False game mode

// Initialize categories object IMMEDIATELY at global scope
if (!window.trueFalseCategories) {
  window.trueFalseCategories = {};
  console.log('True/False Loader: Initialized window.trueFalseCategories');
}

// Initialize empty array immediately so QuestionPool doesn't fail
if (!window.trueFalseQuestions) {
  window.trueFalseQuestions = [];
  console.log('True/False Loader: Initialized empty window.trueFalseQuestions');
}

// After all category files load, combine them into one array
window.loadTrueFalseQuestions = function() {
  console.log('True/False Loader: loadTrueFalseQuestions() called');
  console.log('Categories available:', Object.keys(window.trueFalseCategories));

  const allQuestions = [];

  // Combine all categories
  for (const category in window.trueFalseCategories) {
    const categoryQuestions = window.trueFalseCategories[category];
    if (Array.isArray(categoryQuestions)) {
      allQuestions.push(...categoryQuestions);
      console.log(`  - ${category}: ${categoryQuestions.length} questions`);
    }
  }

  // Assign to window.trueFalseQuestions for game mode compatibility
  window.trueFalseQuestions = allQuestions;

  console.log(`True/False Loader: Combined ${allQuestions.length} total questions from ${Object.keys(window.trueFalseCategories).length} categories`);

  return allQuestions;
};

// Load questions after a delay to ensure all category files are loaded
console.log('True/False Loader: Setting up initialization...');

// Try multiple times with increasing delays
setTimeout(() => {
  console.log('True/False Loader: First attempt (500ms)');
  console.log('Categories so far:', Object.keys(window.trueFalseCategories));
}, 500);

setTimeout(() => {
  console.log('True/False Loader: Second attempt (1500ms)');
  console.log('Categories so far:', Object.keys(window.trueFalseCategories));
  window.loadTrueFalseQuestions();
}, 1500);

// Also try when window fully loads
window.addEventListener('load', () => {
  console.log('True/False Loader: Window loaded event');
  setTimeout(() => {
    console.log('True/False Loader: Final attempt (window.load + 500ms)');
    window.loadTrueFalseQuestions();
  }, 500);
});
