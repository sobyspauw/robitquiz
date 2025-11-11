// True/False Question Loader
// Combines all category files into one pool for the True/False game mode
(function() {

  // Initialize categories object
  window.trueFalseCategories = {};

  // After all category files load, combine them into one array
  window.loadTrueFalseQuestions = function() {
    const allQuestions = [];

    // Combine all categories
    for (const category in window.trueFalseCategories) {
      const categoryQuestions = window.trueFalseCategories[category];
      allQuestions.push(...categoryQuestions);
    }

    // Assign to window.trueFalseQuestions for game mode compatibility
    window.trueFalseQuestions = allQuestions;

    console.log(`True/False Loader: Combined ${allQuestions.length} questions from ${Object.keys(window.trueFalseCategories).length} categories`);

    // Log breakdown by category
    for (const category in window.trueFalseCategories) {
      console.log(`  - ${category}: ${window.trueFalseCategories[category].length} questions`);
    }

    return allQuestions;
  };

  // Load questions after a short delay to ensure all category files are loaded
  setTimeout(() => {
    window.loadTrueFalseQuestions();
  }, 500);

})();
