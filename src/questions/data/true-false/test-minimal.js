// Minimal test file
(function() {
  console.log('TEST-MINIMAL.JS IS RUNNING!');

  window.trueFalseCategories = window.trueFalseCategories || {};

  window.trueFalseCategories['test-minimal'] = [
    {
      id: 'test_1',
      question: { en: "Test question?", es: "Test", de: "Test", nl: "Test" },
      isTrue: true,
      explanation: { en: "Test explanation", es: "Test", de: "Test", nl: "Test" }
    }
  ];

  console.log('TEST-MINIMAL.JS LOADED: 1 question');
})();
