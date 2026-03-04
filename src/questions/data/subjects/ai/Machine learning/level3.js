(function() {
  const level3 = {
    questions: [
      {
        question: {
          en: "What is Decision Tree in Machine Learning?",
          es: "¿Qué es Decision Tree en ML?",
          de: "Was ist Decision Tree in ML?",
          nl: "Wat is Decision Tree in ML?"
        },
        options: [
          { en: "Tree-like model of decisions", es: "Tree-like model of decisions", de: "Tree-like model of decisions", nl: "Tree-like model of decisions" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          es: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          de: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          nl: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize."
        }
      },
      {
        question: {
          en: "What is Linear Regression in Machine Learning?",
          es: "¿Qué es Linear Regression en ML?",
          de: "Was ist Linear Regression in ML?",
          nl: "Wat is Linear Regression in ML?"
        },
        options: [
          { en: "Fits a straight line to data", es: "Fits a straight line to data", de: "Fits a straight line to data", nl: "Fits a straight line to data" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          es: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          de: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          nl: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast."
        }
      },
      {
        question: {
          en: "What is Logistic Regression in Machine Learning?",
          es: "¿Qué es Logistic Regression en ML?",
          de: "Was ist Logistic Regression in ML?",
          nl: "Wat is Logistic Regression in ML?"
        },
        options: [
          { en: "For binary classification", es: "For binary classification", de: "For binary classification", nl: "For binary classification" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          es: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          de: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          nl: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification."
        }
      },
      {
        question: {
          en: "What is K-Nearest Neighbors in Machine Learning?",
          es: "¿Qué es K-Nearest Neighbors en ML?",
          de: "Was ist K-Nearest Neighbors in ML?",
          nl: "Wat is K-Nearest Neighbors in ML?"
        },
        options: [
          { en: "KNN", es: "KNN", de: "KNN", nl: "KNN" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          es: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          de: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          nl: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective."
        }
      },
      {
        question: {
          en: "What is Naive Bayes in Machine Learning?",
          es: "¿Qué es Naive Bayes en ML?",
          de: "Was ist Naive Bayes in ML?",
          nl: "Wat is Naive Bayes in ML?"
        },
        options: [
          { en: "Based on probability", es: "Based on probability", de: "Based on probability", nl: "Based on probability" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          es: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          de: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          nl: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification."
        }
      },
      {
        question: {
          en: "What is K-Means in Machine Learning?",
          es: "¿Qué es K-Means en ML?",
          de: "Was ist K-Means in ML?",
          nl: "Wat is K-Means in ML?"
        },
        options: [
          { en: "Clustering algorithm", es: "Clustering algorithm", de: "Clustering algorithm", nl: "Clustering algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          es: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          de: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          nl: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning."
        }
      },
      {
        question: {
          en: "What is Random Forest in Machine Learning?",
          es: "¿Qué es Random Forest en ML?",
          de: "Was ist Random Forest in ML?",
          nl: "Wat is Random Forest in ML?"
        },
        options: [
          { en: "Multiple decision trees", es: "Multiple decision trees", de: "Multiple decision trees", nl: "Multiple decision trees" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          es: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          de: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          nl: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree."
        }
      },
      {
        question: {
          en: "What is Support Vector Machine in Machine Learning?",
          es: "¿Qué es Support Vector Machine en ML?",
          de: "Was ist Support Vector Machine in ML?",
          nl: "Wat is Support Vector Machine in ML?"
        },
        options: [
          { en: "SVM", es: "SVM", de: "SVM", nl: "SVM" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          es: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          de: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          nl: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification."
        }
      },
      {
        question: {
          en: "What is Neural Network in Machine Learning?",
          es: "¿Qué es Neural Network en ML?",
          de: "Was ist Neural Network in ML?",
          nl: "Wat is Neural Network in ML?"
        },
        options: [
          { en: "Inspired by brain", es: "Inspired by brain", de: "Inspired by brain", nl: "Inspired by brain" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          es: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          de: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          nl: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation."
        }
      },
      {
        question: {
          en: "What is Gradient Descent in Machine Learning?",
          es: "¿Qué es Gradient Descent en ML?",
          de: "Was ist Gradient Descent in ML?",
          nl: "Wat is Gradient Descent in ML?"
        },
        options: [
          { en: "Optimization algorithm", es: "Optimization algorithm", de: "Optimization algorithm", nl: "Optimization algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          es: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          de: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          nl: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models."
        }
      },
      {
        question: {
          en: "What is Decision Tree in Machine Learning?",
          es: "¿Qué es Decision Tree en ML?",
          de: "Was ist Decision Tree in ML?",
          nl: "Wat is Decision Tree in ML?"
        },
        options: [
          { en: "Tree-like model of decisions", es: "Tree-like model of decisions", de: "Tree-like model of decisions", nl: "Tree-like model of decisions" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          es: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          de: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          nl: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize."
        }
      },
      {
        question: {
          en: "What is Linear Regression in Machine Learning?",
          es: "¿Qué es Linear Regression en ML?",
          de: "Was ist Linear Regression in ML?",
          nl: "Wat is Linear Regression in ML?"
        },
        options: [
          { en: "Fits a straight line to data", es: "Fits a straight line to data", de: "Fits a straight line to data", nl: "Fits a straight line to data" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          es: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          de: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          nl: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast."
        }
      },
      {
        question: {
          en: "What is Logistic Regression in Machine Learning?",
          es: "¿Qué es Logistic Regression en ML?",
          de: "Was ist Logistic Regression in ML?",
          nl: "Wat is Logistic Regression in ML?"
        },
        options: [
          { en: "For binary classification", es: "For binary classification", de: "For binary classification", nl: "For binary classification" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          es: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          de: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          nl: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification."
        }
      },
      {
        question: {
          en: "What is K-Nearest Neighbors in Machine Learning?",
          es: "¿Qué es K-Nearest Neighbors en ML?",
          de: "Was ist K-Nearest Neighbors in ML?",
          nl: "Wat is K-Nearest Neighbors in ML?"
        },
        options: [
          { en: "KNN", es: "KNN", de: "KNN", nl: "KNN" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          es: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          de: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          nl: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective."
        }
      },
      {
        question: {
          en: "What is Naive Bayes in Machine Learning?",
          es: "¿Qué es Naive Bayes en ML?",
          de: "Was ist Naive Bayes in ML?",
          nl: "Wat is Naive Bayes in ML?"
        },
        options: [
          { en: "Based on probability", es: "Based on probability", de: "Based on probability", nl: "Based on probability" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          es: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          de: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          nl: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification."
        }
      },
      {
        question: {
          en: "What is K-Means in Machine Learning?",
          es: "¿Qué es K-Means en ML?",
          de: "Was ist K-Means in ML?",
          nl: "Wat is K-Means in ML?"
        },
        options: [
          { en: "Clustering algorithm", es: "Clustering algorithm", de: "Clustering algorithm", nl: "Clustering algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          es: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          de: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          nl: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning."
        }
      },
      {
        question: {
          en: "What is Random Forest in Machine Learning?",
          es: "¿Qué es Random Forest en ML?",
          de: "Was ist Random Forest in ML?",
          nl: "Wat is Random Forest in ML?"
        },
        options: [
          { en: "Multiple decision trees", es: "Multiple decision trees", de: "Multiple decision trees", nl: "Multiple decision trees" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          es: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          de: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          nl: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree."
        }
      },
      {
        question: {
          en: "What is Support Vector Machine in Machine Learning?",
          es: "¿Qué es Support Vector Machine en ML?",
          de: "Was ist Support Vector Machine in ML?",
          nl: "Wat is Support Vector Machine in ML?"
        },
        options: [
          { en: "SVM", es: "SVM", de: "SVM", nl: "SVM" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          es: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          de: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          nl: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification."
        }
      },
      {
        question: {
          en: "What is Neural Network in Machine Learning?",
          es: "¿Qué es Neural Network en ML?",
          de: "Was ist Neural Network in ML?",
          nl: "Wat is Neural Network in ML?"
        },
        options: [
          { en: "Inspired by brain", es: "Inspired by brain", de: "Inspired by brain", nl: "Inspired by brain" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          es: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          de: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          nl: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation."
        }
      },
      {
        question: {
          en: "What is Gradient Descent in Machine Learning?",
          es: "¿Qué es Gradient Descent en ML?",
          de: "Was ist Gradient Descent in ML?",
          nl: "Wat is Gradient Descent in ML?"
        },
        options: [
          { en: "Optimization algorithm", es: "Optimization algorithm", de: "Optimization algorithm", nl: "Optimization algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          es: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          de: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          nl: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models."
        }
      },
      {
        question: {
          en: "What is Decision Tree in Machine Learning?",
          es: "¿Qué es Decision Tree en ML?",
          de: "Was ist Decision Tree in ML?",
          nl: "Wat is Decision Tree in ML?"
        },
        options: [
          { en: "Tree-like model of decisions", es: "Tree-like model of decisions", de: "Tree-like model of decisions", nl: "Tree-like model of decisions" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          es: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          de: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          nl: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize."
        }
      },
      {
        question: {
          en: "What is Linear Regression in Machine Learning?",
          es: "¿Qué es Linear Regression en ML?",
          de: "Was ist Linear Regression in ML?",
          nl: "Wat is Linear Regression in ML?"
        },
        options: [
          { en: "Fits a straight line to data", es: "Fits a straight line to data", de: "Fits a straight line to data", nl: "Fits a straight line to data" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          es: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          de: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          nl: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast."
        }
      },
      {
        question: {
          en: "What is Logistic Regression in Machine Learning?",
          es: "¿Qué es Logistic Regression en ML?",
          de: "Was ist Logistic Regression in ML?",
          nl: "Wat is Logistic Regression in ML?"
        },
        options: [
          { en: "For binary classification", es: "For binary classification", de: "For binary classification", nl: "For binary classification" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          es: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          de: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          nl: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification."
        }
      },
      {
        question: {
          en: "What is K-Nearest Neighbors in Machine Learning?",
          es: "¿Qué es K-Nearest Neighbors en ML?",
          de: "Was ist K-Nearest Neighbors in ML?",
          nl: "Wat is K-Nearest Neighbors in ML?"
        },
        options: [
          { en: "KNN", es: "KNN", de: "KNN", nl: "KNN" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          es: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          de: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          nl: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective."
        }
      },
      {
        question: {
          en: "What is Naive Bayes in Machine Learning?",
          es: "¿Qué es Naive Bayes en ML?",
          de: "Was ist Naive Bayes in ML?",
          nl: "Wat is Naive Bayes in ML?"
        },
        options: [
          { en: "Based on probability", es: "Based on probability", de: "Based on probability", nl: "Based on probability" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          es: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          de: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          nl: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification."
        }
      },
      {
        question: {
          en: "What is K-Means in Machine Learning?",
          es: "¿Qué es K-Means en ML?",
          de: "Was ist K-Means in ML?",
          nl: "Wat is K-Means in ML?"
        },
        options: [
          { en: "Clustering algorithm", es: "Clustering algorithm", de: "Clustering algorithm", nl: "Clustering algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          es: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          de: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          nl: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning."
        }
      },
      {
        question: {
          en: "What is Random Forest in Machine Learning?",
          es: "¿Qué es Random Forest en ML?",
          de: "Was ist Random Forest in ML?",
          nl: "Wat is Random Forest in ML?"
        },
        options: [
          { en: "Multiple decision trees", es: "Multiple decision trees", de: "Multiple decision trees", nl: "Multiple decision trees" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          es: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          de: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          nl: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree."
        }
      },
      {
        question: {
          en: "What is Support Vector Machine in Machine Learning?",
          es: "¿Qué es Support Vector Machine en ML?",
          de: "Was ist Support Vector Machine in ML?",
          nl: "Wat is Support Vector Machine in ML?"
        },
        options: [
          { en: "SVM", es: "SVM", de: "SVM", nl: "SVM" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          es: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          de: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          nl: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification."
        }
      },
      {
        question: {
          en: "What is Neural Network in Machine Learning?",
          es: "¿Qué es Neural Network en ML?",
          de: "Was ist Neural Network in ML?",
          nl: "Wat is Neural Network in ML?"
        },
        options: [
          { en: "Inspired by brain", es: "Inspired by brain", de: "Inspired by brain", nl: "Inspired by brain" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          es: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          de: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          nl: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation."
        }
      },
      {
        question: {
          en: "What is Gradient Descent in Machine Learning?",
          es: "¿Qué es Gradient Descent en ML?",
          de: "Was ist Gradient Descent in ML?",
          nl: "Wat is Gradient Descent in ML?"
        },
        options: [
          { en: "Optimization algorithm", es: "Optimization algorithm", de: "Optimization algorithm", nl: "Optimization algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          es: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          de: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          nl: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models."
        }
      },
      {
        question: {
          en: "What is Decision Tree in Machine Learning?",
          es: "¿Qué es Decision Tree en ML?",
          de: "Was ist Decision Tree in ML?",
          nl: "Wat is Decision Tree in ML?"
        },
        options: [
          { en: "Tree-like model of decisions", es: "Tree-like model of decisions", de: "Tree-like model of decisions", nl: "Tree-like model of decisions" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          es: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          de: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          nl: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize."
        }
      },
      {
        question: {
          en: "What is Linear Regression in Machine Learning?",
          es: "¿Qué es Linear Regression en ML?",
          de: "Was ist Linear Regression in ML?",
          nl: "Wat is Linear Regression in ML?"
        },
        options: [
          { en: "Fits a straight line to data", es: "Fits a straight line to data", de: "Fits a straight line to data", nl: "Fits a straight line to data" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          es: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          de: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          nl: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast."
        }
      },
      {
        question: {
          en: "What is Logistic Regression in Machine Learning?",
          es: "¿Qué es Logistic Regression en ML?",
          de: "Was ist Logistic Regression in ML?",
          nl: "Wat is Logistic Regression in ML?"
        },
        options: [
          { en: "For binary classification", es: "For binary classification", de: "For binary classification", nl: "For binary classification" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          es: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          de: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          nl: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification."
        }
      },
      {
        question: {
          en: "What is K-Nearest Neighbors in Machine Learning?",
          es: "¿Qué es K-Nearest Neighbors en ML?",
          de: "Was ist K-Nearest Neighbors in ML?",
          nl: "Wat is K-Nearest Neighbors in ML?"
        },
        options: [
          { en: "KNN", es: "KNN", de: "KNN", nl: "KNN" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          es: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          de: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          nl: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective."
        }
      },
      {
        question: {
          en: "What is Naive Bayes in Machine Learning?",
          es: "¿Qué es Naive Bayes en ML?",
          de: "Was ist Naive Bayes in ML?",
          nl: "Wat is Naive Bayes in ML?"
        },
        options: [
          { en: "Based on probability", es: "Based on probability", de: "Based on probability", nl: "Based on probability" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          es: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          de: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          nl: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification."
        }
      },
      {
        question: {
          en: "What is K-Means in Machine Learning?",
          es: "¿Qué es K-Means en ML?",
          de: "Was ist K-Means in ML?",
          nl: "Wat is K-Means in ML?"
        },
        options: [
          { en: "Clustering algorithm", es: "Clustering algorithm", de: "Clustering algorithm", nl: "Clustering algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          es: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          de: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          nl: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning."
        }
      },
      {
        question: {
          en: "What is Random Forest in Machine Learning?",
          es: "¿Qué es Random Forest en ML?",
          de: "Was ist Random Forest in ML?",
          nl: "Wat is Random Forest in ML?"
        },
        options: [
          { en: "Multiple decision trees", es: "Multiple decision trees", de: "Multiple decision trees", nl: "Multiple decision trees" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          es: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          de: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          nl: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree."
        }
      },
      {
        question: {
          en: "What is Support Vector Machine in Machine Learning?",
          es: "¿Qué es Support Vector Machine en ML?",
          de: "Was ist Support Vector Machine in ML?",
          nl: "Wat is Support Vector Machine in ML?"
        },
        options: [
          { en: "SVM", es: "SVM", de: "SVM", nl: "SVM" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          es: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          de: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          nl: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification."
        }
      },
      {
        question: {
          en: "What is Neural Network in Machine Learning?",
          es: "¿Qué es Neural Network en ML?",
          de: "Was ist Neural Network in ML?",
          nl: "Wat is Neural Network in ML?"
        },
        options: [
          { en: "Inspired by brain", es: "Inspired by brain", de: "Inspired by brain", nl: "Inspired by brain" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          es: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          de: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          nl: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation."
        }
      },
      {
        question: {
          en: "What is Gradient Descent in Machine Learning?",
          es: "¿Qué es Gradient Descent en ML?",
          de: "Was ist Gradient Descent in ML?",
          nl: "Wat is Gradient Descent in ML?"
        },
        options: [
          { en: "Optimization algorithm", es: "Optimization algorithm", de: "Optimization algorithm", nl: "Optimization algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          es: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          de: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          nl: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models."
        }
      },
      {
        question: {
          en: "What is Decision Tree in Machine Learning?",
          es: "¿Qué es Decision Tree en ML?",
          de: "Was ist Decision Tree in ML?",
          nl: "Wat is Decision Tree in ML?"
        },
        options: [
          { en: "Tree-like model of decisions", es: "Tree-like model of decisions", de: "Tree-like model of decisions", nl: "Tree-like model of decisions" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          es: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          de: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          nl: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize."
        }
      },
      {
        question: {
          en: "What is Linear Regression in Machine Learning?",
          es: "¿Qué es Linear Regression en ML?",
          de: "Was ist Linear Regression in ML?",
          nl: "Wat is Linear Regression in ML?"
        },
        options: [
          { en: "Fits a straight line to data", es: "Fits a straight line to data", de: "Fits a straight line to data", nl: "Fits a straight line to data" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          es: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          de: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          nl: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast."
        }
      },
      {
        question: {
          en: "What is Logistic Regression in Machine Learning?",
          es: "¿Qué es Logistic Regression en ML?",
          de: "Was ist Logistic Regression in ML?",
          nl: "Wat is Logistic Regression in ML?"
        },
        options: [
          { en: "For binary classification", es: "For binary classification", de: "For binary classification", nl: "For binary classification" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          es: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          de: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          nl: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification."
        }
      },
      {
        question: {
          en: "What is K-Nearest Neighbors in Machine Learning?",
          es: "¿Qué es K-Nearest Neighbors en ML?",
          de: "Was ist K-Nearest Neighbors in ML?",
          nl: "Wat is K-Nearest Neighbors in ML?"
        },
        options: [
          { en: "KNN", es: "KNN", de: "KNN", nl: "KNN" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          es: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          de: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          nl: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective."
        }
      },
      {
        question: {
          en: "What is Naive Bayes in Machine Learning?",
          es: "¿Qué es Naive Bayes en ML?",
          de: "Was ist Naive Bayes in ML?",
          nl: "Wat is Naive Bayes in ML?"
        },
        options: [
          { en: "Based on probability", es: "Based on probability", de: "Based on probability", nl: "Based on probability" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          es: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          de: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          nl: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification."
        }
      },
      {
        question: {
          en: "What is K-Means in Machine Learning?",
          es: "¿Qué es K-Means en ML?",
          de: "Was ist K-Means in ML?",
          nl: "Wat is K-Means in ML?"
        },
        options: [
          { en: "Clustering algorithm", es: "Clustering algorithm", de: "Clustering algorithm", nl: "Clustering algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          es: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          de: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          nl: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning."
        }
      },
      {
        question: {
          en: "What is Random Forest in Machine Learning?",
          es: "¿Qué es Random Forest en ML?",
          de: "Was ist Random Forest in ML?",
          nl: "Wat is Random Forest in ML?"
        },
        options: [
          { en: "Multiple decision trees", es: "Multiple decision trees", de: "Multiple decision trees", nl: "Multiple decision trees" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          es: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          de: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          nl: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree."
        }
      },
      {
        question: {
          en: "What is Support Vector Machine in Machine Learning?",
          es: "¿Qué es Support Vector Machine en ML?",
          de: "Was ist Support Vector Machine in ML?",
          nl: "Wat is Support Vector Machine in ML?"
        },
        options: [
          { en: "SVM", es: "SVM", de: "SVM", nl: "SVM" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          es: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          de: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          nl: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification."
        }
      },
      {
        question: {
          en: "What is Neural Network in Machine Learning?",
          es: "¿Qué es Neural Network en ML?",
          de: "Was ist Neural Network in ML?",
          nl: "Wat is Neural Network in ML?"
        },
        options: [
          { en: "Inspired by brain", es: "Inspired by brain", de: "Inspired by brain", nl: "Inspired by brain" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          es: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          de: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          nl: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation."
        }
      },
      {
        question: {
          en: "What is Gradient Descent in Machine Learning?",
          es: "¿Qué es Gradient Descent en ML?",
          de: "Was ist Gradient Descent in ML?",
          nl: "Wat is Gradient Descent in ML?"
        },
        options: [
          { en: "Optimization algorithm", es: "Optimization algorithm", de: "Optimization algorithm", nl: "Optimization algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          es: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          de: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          nl: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models."
        }
      },
      {
        question: {
          en: "What is Decision Tree in Machine Learning?",
          es: "¿Qué es Decision Tree en ML?",
          de: "Was ist Decision Tree in ML?",
          nl: "Wat is Decision Tree in ML?"
        },
        options: [
          { en: "Tree-like model of decisions", es: "Tree-like model of decisions", de: "Tree-like model of decisions", nl: "Tree-like model of decisions" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          es: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          de: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          nl: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize."
        }
      },
      {
        question: {
          en: "What is Linear Regression in Machine Learning?",
          es: "¿Qué es Linear Regression en ML?",
          de: "Was ist Linear Regression in ML?",
          nl: "Wat is Linear Regression in ML?"
        },
        options: [
          { en: "Fits a straight line to data", es: "Fits a straight line to data", de: "Fits a straight line to data", nl: "Fits a straight line to data" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          es: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          de: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          nl: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast."
        }
      },
      {
        question: {
          en: "What is Logistic Regression in Machine Learning?",
          es: "¿Qué es Logistic Regression en ML?",
          de: "Was ist Logistic Regression in ML?",
          nl: "Wat is Logistic Regression in ML?"
        },
        options: [
          { en: "For binary classification", es: "For binary classification", de: "For binary classification", nl: "For binary classification" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          es: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          de: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          nl: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification."
        }
      },
      {
        question: {
          en: "What is K-Nearest Neighbors in Machine Learning?",
          es: "¿Qué es K-Nearest Neighbors en ML?",
          de: "Was ist K-Nearest Neighbors in ML?",
          nl: "Wat is K-Nearest Neighbors in ML?"
        },
        options: [
          { en: "KNN", es: "KNN", de: "KNN", nl: "KNN" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          es: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          de: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          nl: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective."
        }
      },
      {
        question: {
          en: "What is Naive Bayes in Machine Learning?",
          es: "¿Qué es Naive Bayes en ML?",
          de: "Was ist Naive Bayes in ML?",
          nl: "Wat is Naive Bayes in ML?"
        },
        options: [
          { en: "Based on probability", es: "Based on probability", de: "Based on probability", nl: "Based on probability" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          es: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          de: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          nl: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification."
        }
      },
      {
        question: {
          en: "What is K-Means in Machine Learning?",
          es: "¿Qué es K-Means en ML?",
          de: "Was ist K-Means in ML?",
          nl: "Wat is K-Means in ML?"
        },
        options: [
          { en: "Clustering algorithm", es: "Clustering algorithm", de: "Clustering algorithm", nl: "Clustering algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          es: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          de: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          nl: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning."
        }
      },
      {
        question: {
          en: "What is Random Forest in Machine Learning?",
          es: "¿Qué es Random Forest en ML?",
          de: "Was ist Random Forest in ML?",
          nl: "Wat is Random Forest in ML?"
        },
        options: [
          { en: "Multiple decision trees", es: "Multiple decision trees", de: "Multiple decision trees", nl: "Multiple decision trees" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          es: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          de: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          nl: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree."
        }
      },
      {
        question: {
          en: "What is Support Vector Machine in Machine Learning?",
          es: "¿Qué es Support Vector Machine en ML?",
          de: "Was ist Support Vector Machine in ML?",
          nl: "Wat is Support Vector Machine in ML?"
        },
        options: [
          { en: "SVM", es: "SVM", de: "SVM", nl: "SVM" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          es: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          de: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          nl: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification."
        }
      },
      {
        question: {
          en: "What is Neural Network in Machine Learning?",
          es: "¿Qué es Neural Network en ML?",
          de: "Was ist Neural Network in ML?",
          nl: "Wat is Neural Network in ML?"
        },
        options: [
          { en: "Inspired by brain", es: "Inspired by brain", de: "Inspired by brain", nl: "Inspired by brain" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          es: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          de: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          nl: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation."
        }
      },
      {
        question: {
          en: "What is Gradient Descent in Machine Learning?",
          es: "¿Qué es Gradient Descent en ML?",
          de: "Was ist Gradient Descent in ML?",
          nl: "Wat is Gradient Descent in ML?"
        },
        options: [
          { en: "Optimization algorithm", es: "Optimization algorithm", de: "Optimization algorithm", nl: "Optimization algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          es: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          de: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          nl: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models."
        }
      },
      {
        question: {
          en: "What is Decision Tree in Machine Learning?",
          es: "¿Qué es Decision Tree en ML?",
          de: "Was ist Decision Tree in ML?",
          nl: "Wat is Decision Tree in ML?"
        },
        options: [
          { en: "Tree-like model of decisions", es: "Tree-like model of decisions", de: "Tree-like model of decisions", nl: "Tree-like model of decisions" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          es: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          de: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          nl: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize."
        }
      },
      {
        question: {
          en: "What is Linear Regression in Machine Learning?",
          es: "¿Qué es Linear Regression en ML?",
          de: "Was ist Linear Regression in ML?",
          nl: "Wat is Linear Regression in ML?"
        },
        options: [
          { en: "Fits a straight line to data", es: "Fits a straight line to data", de: "Fits a straight line to data", nl: "Fits a straight line to data" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          es: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          de: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          nl: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast."
        }
      },
      {
        question: {
          en: "What is Logistic Regression in Machine Learning?",
          es: "¿Qué es Logistic Regression en ML?",
          de: "Was ist Logistic Regression in ML?",
          nl: "Wat is Logistic Regression in ML?"
        },
        options: [
          { en: "For binary classification", es: "For binary classification", de: "For binary classification", nl: "For binary classification" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          es: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          de: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          nl: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification."
        }
      },
      {
        question: {
          en: "What is K-Nearest Neighbors in Machine Learning?",
          es: "¿Qué es K-Nearest Neighbors en ML?",
          de: "Was ist K-Nearest Neighbors in ML?",
          nl: "Wat is K-Nearest Neighbors in ML?"
        },
        options: [
          { en: "KNN", es: "KNN", de: "KNN", nl: "KNN" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          es: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          de: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          nl: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective."
        }
      },
      {
        question: {
          en: "What is Naive Bayes in Machine Learning?",
          es: "¿Qué es Naive Bayes en ML?",
          de: "Was ist Naive Bayes in ML?",
          nl: "Wat is Naive Bayes in ML?"
        },
        options: [
          { en: "Based on probability", es: "Based on probability", de: "Based on probability", nl: "Based on probability" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          es: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          de: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          nl: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification."
        }
      },
      {
        question: {
          en: "What is K-Means in Machine Learning?",
          es: "¿Qué es K-Means en ML?",
          de: "Was ist K-Means in ML?",
          nl: "Wat is K-Means in ML?"
        },
        options: [
          { en: "Clustering algorithm", es: "Clustering algorithm", de: "Clustering algorithm", nl: "Clustering algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          es: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          de: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          nl: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning."
        }
      },
      {
        question: {
          en: "What is Random Forest in Machine Learning?",
          es: "¿Qué es Random Forest en ML?",
          de: "Was ist Random Forest in ML?",
          nl: "Wat is Random Forest in ML?"
        },
        options: [
          { en: "Multiple decision trees", es: "Multiple decision trees", de: "Multiple decision trees", nl: "Multiple decision trees" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          es: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          de: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          nl: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree."
        }
      },
      {
        question: {
          en: "What is Support Vector Machine in Machine Learning?",
          es: "¿Qué es Support Vector Machine en ML?",
          de: "Was ist Support Vector Machine in ML?",
          nl: "Wat is Support Vector Machine in ML?"
        },
        options: [
          { en: "SVM", es: "SVM", de: "SVM", nl: "SVM" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          es: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          de: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          nl: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification."
        }
      },
      {
        question: {
          en: "What is Neural Network in Machine Learning?",
          es: "¿Qué es Neural Network en ML?",
          de: "Was ist Neural Network in ML?",
          nl: "Wat is Neural Network in ML?"
        },
        options: [
          { en: "Inspired by brain", es: "Inspired by brain", de: "Inspired by brain", nl: "Inspired by brain" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          es: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          de: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          nl: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation."
        }
      },
      {
        question: {
          en: "What is Gradient Descent in Machine Learning?",
          es: "¿Qué es Gradient Descent en ML?",
          de: "Was ist Gradient Descent in ML?",
          nl: "Wat is Gradient Descent in ML?"
        },
        options: [
          { en: "Optimization algorithm", es: "Optimization algorithm", de: "Optimization algorithm", nl: "Optimization algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          es: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          de: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          nl: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models."
        }
      },
      {
        question: {
          en: "What is Decision Tree in Machine Learning?",
          es: "¿Qué es Decision Tree en ML?",
          de: "Was ist Decision Tree in ML?",
          nl: "Wat is Decision Tree in ML?"
        },
        options: [
          { en: "Tree-like model of decisions", es: "Tree-like model of decisions", de: "Tree-like model of decisions", nl: "Tree-like model of decisions" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          es: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          de: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          nl: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize."
        }
      },
      {
        question: {
          en: "What is Linear Regression in Machine Learning?",
          es: "¿Qué es Linear Regression en ML?",
          de: "Was ist Linear Regression in ML?",
          nl: "Wat is Linear Regression in ML?"
        },
        options: [
          { en: "Fits a straight line to data", es: "Fits a straight line to data", de: "Fits a straight line to data", nl: "Fits a straight line to data" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          es: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          de: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          nl: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast."
        }
      },
      {
        question: {
          en: "What is Logistic Regression in Machine Learning?",
          es: "¿Qué es Logistic Regression en ML?",
          de: "Was ist Logistic Regression in ML?",
          nl: "Wat is Logistic Regression in ML?"
        },
        options: [
          { en: "For binary classification", es: "For binary classification", de: "For binary classification", nl: "For binary classification" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          es: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          de: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          nl: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification."
        }
      },
      {
        question: {
          en: "What is K-Nearest Neighbors in Machine Learning?",
          es: "¿Qué es K-Nearest Neighbors en ML?",
          de: "Was ist K-Nearest Neighbors in ML?",
          nl: "Wat is K-Nearest Neighbors in ML?"
        },
        options: [
          { en: "KNN", es: "KNN", de: "KNN", nl: "KNN" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          es: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          de: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          nl: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective."
        }
      },
      {
        question: {
          en: "What is Naive Bayes in Machine Learning?",
          es: "¿Qué es Naive Bayes en ML?",
          de: "Was ist Naive Bayes in ML?",
          nl: "Wat is Naive Bayes in ML?"
        },
        options: [
          { en: "Based on probability", es: "Based on probability", de: "Based on probability", nl: "Based on probability" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          es: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          de: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          nl: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification."
        }
      },
      {
        question: {
          en: "What is K-Means in Machine Learning?",
          es: "¿Qué es K-Means en ML?",
          de: "Was ist K-Means in ML?",
          nl: "Wat is K-Means in ML?"
        },
        options: [
          { en: "Clustering algorithm", es: "Clustering algorithm", de: "Clustering algorithm", nl: "Clustering algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          es: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          de: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          nl: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning."
        }
      },
      {
        question: {
          en: "What is Random Forest in Machine Learning?",
          es: "¿Qué es Random Forest en ML?",
          de: "Was ist Random Forest in ML?",
          nl: "Wat is Random Forest in ML?"
        },
        options: [
          { en: "Multiple decision trees", es: "Multiple decision trees", de: "Multiple decision trees", nl: "Multiple decision trees" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          es: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          de: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          nl: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree."
        }
      },
      {
        question: {
          en: "What is Support Vector Machine in Machine Learning?",
          es: "¿Qué es Support Vector Machine en ML?",
          de: "Was ist Support Vector Machine in ML?",
          nl: "Wat is Support Vector Machine in ML?"
        },
        options: [
          { en: "SVM", es: "SVM", de: "SVM", nl: "SVM" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          es: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          de: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          nl: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification."
        }
      },
      {
        question: {
          en: "What is Neural Network in Machine Learning?",
          es: "¿Qué es Neural Network en ML?",
          de: "Was ist Neural Network in ML?",
          nl: "Wat is Neural Network in ML?"
        },
        options: [
          { en: "Inspired by brain", es: "Inspired by brain", de: "Inspired by brain", nl: "Inspired by brain" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          es: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          de: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          nl: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation."
        }
      },
      {
        question: {
          en: "What is Gradient Descent in Machine Learning?",
          es: "¿Qué es Gradient Descent en ML?",
          de: "Was ist Gradient Descent in ML?",
          nl: "Wat is Gradient Descent in ML?"
        },
        options: [
          { en: "Optimization algorithm", es: "Optimization algorithm", de: "Optimization algorithm", nl: "Optimization algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          es: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          de: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          nl: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models."
        }
      },
      {
        question: {
          en: "What is Decision Tree in Machine Learning?",
          es: "¿Qué es Decision Tree en ML?",
          de: "Was ist Decision Tree in ML?",
          nl: "Wat is Decision Tree in ML?"
        },
        options: [
          { en: "Tree-like model of decisions", es: "Tree-like model of decisions", de: "Tree-like model of decisions", nl: "Tree-like model of decisions" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          es: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          de: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          nl: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize."
        }
      },
      {
        question: {
          en: "What is Linear Regression in Machine Learning?",
          es: "¿Qué es Linear Regression en ML?",
          de: "Was ist Linear Regression in ML?",
          nl: "Wat is Linear Regression in ML?"
        },
        options: [
          { en: "Fits a straight line to data", es: "Fits a straight line to data", de: "Fits a straight line to data", nl: "Fits a straight line to data" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          es: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          de: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          nl: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast."
        }
      },
      {
        question: {
          en: "What is Logistic Regression in Machine Learning?",
          es: "¿Qué es Logistic Regression en ML?",
          de: "Was ist Logistic Regression in ML?",
          nl: "Wat is Logistic Regression in ML?"
        },
        options: [
          { en: "For binary classification", es: "For binary classification", de: "For binary classification", nl: "For binary classification" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          es: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          de: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          nl: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification."
        }
      },
      {
        question: {
          en: "What is K-Nearest Neighbors in Machine Learning?",
          es: "¿Qué es K-Nearest Neighbors en ML?",
          de: "Was ist K-Nearest Neighbors in ML?",
          nl: "Wat is K-Nearest Neighbors in ML?"
        },
        options: [
          { en: "KNN", es: "KNN", de: "KNN", nl: "KNN" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          es: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          de: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          nl: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective."
        }
      },
      {
        question: {
          en: "What is Naive Bayes in Machine Learning?",
          es: "¿Qué es Naive Bayes en ML?",
          de: "Was ist Naive Bayes in ML?",
          nl: "Wat is Naive Bayes in ML?"
        },
        options: [
          { en: "Based on probability", es: "Based on probability", de: "Based on probability", nl: "Based on probability" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          es: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          de: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          nl: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification."
        }
      },
      {
        question: {
          en: "What is K-Means in Machine Learning?",
          es: "¿Qué es K-Means en ML?",
          de: "Was ist K-Means in ML?",
          nl: "Wat is K-Means in ML?"
        },
        options: [
          { en: "Clustering algorithm", es: "Clustering algorithm", de: "Clustering algorithm", nl: "Clustering algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          es: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          de: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          nl: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning."
        }
      },
      {
        question: {
          en: "What is Random Forest in Machine Learning?",
          es: "¿Qué es Random Forest en ML?",
          de: "Was ist Random Forest in ML?",
          nl: "Wat is Random Forest in ML?"
        },
        options: [
          { en: "Multiple decision trees", es: "Multiple decision trees", de: "Multiple decision trees", nl: "Multiple decision trees" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          es: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          de: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          nl: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree."
        }
      },
      {
        question: {
          en: "What is Support Vector Machine in Machine Learning?",
          es: "¿Qué es Support Vector Machine en ML?",
          de: "Was ist Support Vector Machine in ML?",
          nl: "Wat is Support Vector Machine in ML?"
        },
        options: [
          { en: "SVM", es: "SVM", de: "SVM", nl: "SVM" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          es: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          de: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          nl: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification."
        }
      },
      {
        question: {
          en: "What is Neural Network in Machine Learning?",
          es: "¿Qué es Neural Network en ML?",
          de: "Was ist Neural Network in ML?",
          nl: "Wat is Neural Network in ML?"
        },
        options: [
          { en: "Inspired by brain", es: "Inspired by brain", de: "Inspired by brain", nl: "Inspired by brain" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          es: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          de: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          nl: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation."
        }
      },
      {
        question: {
          en: "What is Gradient Descent in Machine Learning?",
          es: "¿Qué es Gradient Descent en ML?",
          de: "Was ist Gradient Descent in ML?",
          nl: "Wat is Gradient Descent in ML?"
        },
        options: [
          { en: "Optimization algorithm", es: "Optimization algorithm", de: "Optimization algorithm", nl: "Optimization algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          es: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          de: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          nl: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models."
        }
      },
      {
        question: {
          en: "What is Decision Tree in Machine Learning?",
          es: "¿Qué es Decision Tree en ML?",
          de: "Was ist Decision Tree in ML?",
          nl: "Wat is Decision Tree in ML?"
        },
        options: [
          { en: "Tree-like model of decisions", es: "Tree-like model of decisions", de: "Tree-like model of decisions", nl: "Tree-like model of decisions" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          es: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          de: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize.",
          nl: "Decision Tree: Tree-like model of decisions. Uses if-then rules. Easy to visualize."
        }
      },
      {
        question: {
          en: "What is Linear Regression in Machine Learning?",
          es: "¿Qué es Linear Regression en ML?",
          de: "Was ist Linear Regression in ML?",
          nl: "Wat is Linear Regression in ML?"
        },
        options: [
          { en: "Fits a straight line to data", es: "Fits a straight line to data", de: "Fits a straight line to data", nl: "Fits a straight line to data" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          es: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          de: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast.",
          nl: "Linear Regression: Fits a straight line to data. Predicts continuous values. Simple and fast."
        }
      },
      {
        question: {
          en: "What is Logistic Regression in Machine Learning?",
          es: "¿Qué es Logistic Regression en ML?",
          de: "Was ist Logistic Regression in ML?",
          nl: "Wat is Logistic Regression in ML?"
        },
        options: [
          { en: "For binary classification", es: "For binary classification", de: "For binary classification", nl: "For binary classification" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          es: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          de: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification.",
          nl: "Logistic Regression: For binary classification. Outputs probability 0-1. Despite name, used for classification."
        }
      },
      {
        question: {
          en: "What is K-Nearest Neighbors in Machine Learning?",
          es: "¿Qué es K-Nearest Neighbors en ML?",
          de: "Was ist K-Nearest Neighbors in ML?",
          nl: "Wat is K-Nearest Neighbors in ML?"
        },
        options: [
          { en: "KNN", es: "KNN", de: "KNN", nl: "KNN" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          es: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          de: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective.",
          nl: "K-Nearest Neighbors: KNN. Looks at k closest examples. Simple but effective."
        }
      },
      {
        question: {
          en: "What is Naive Bayes in Machine Learning?",
          es: "¿Qué es Naive Bayes en ML?",
          de: "Was ist Naive Bayes in ML?",
          nl: "Wat is Naive Bayes in ML?"
        },
        options: [
          { en: "Based on probability", es: "Based on probability", de: "Based on probability", nl: "Based on probability" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          es: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          de: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification.",
          nl: "Naive Bayes: Based on probability. Assumes feature independence. Good for text classification."
        }
      },
      {
        question: {
          en: "What is K-Means in Machine Learning?",
          es: "¿Qué es K-Means en ML?",
          de: "Was ist K-Means in ML?",
          nl: "Wat is K-Means in ML?"
        },
        options: [
          { en: "Clustering algorithm", es: "Clustering algorithm", de: "Clustering algorithm", nl: "Clustering algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          es: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          de: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning.",
          nl: "K-Means: Clustering algorithm. Groups similar data. Unsupervised learning."
        }
      },
      {
        question: {
          en: "What is Random Forest in Machine Learning?",
          es: "¿Qué es Random Forest en ML?",
          de: "Was ist Random Forest in ML?",
          nl: "Wat is Random Forest in ML?"
        },
        options: [
          { en: "Multiple decision trees", es: "Multiple decision trees", de: "Multiple decision trees", nl: "Multiple decision trees" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          es: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          de: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree.",
          nl: "Random Forest: Multiple decision trees. Ensemble method. More accurate than single tree."
        }
      },
      {
        question: {
          en: "What is Support Vector Machine in Machine Learning?",
          es: "¿Qué es Support Vector Machine en ML?",
          de: "Was ist Support Vector Machine in ML?",
          nl: "Wat is Support Vector Machine in ML?"
        },
        options: [
          { en: "SVM", es: "SVM", de: "SVM", nl: "SVM" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          es: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          de: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification.",
          nl: "Support Vector Machine: SVM. Finds optimal boundary. Works well for classification."
        }
      },
      {
        question: {
          en: "What is Neural Network in Machine Learning?",
          es: "¿Qué es Neural Network en ML?",
          de: "Was ist Neural Network in ML?",
          nl: "Wat is Neural Network in ML?"
        },
        options: [
          { en: "Inspired by brain", es: "Inspired by brain", de: "Inspired by brain", nl: "Inspired by brain" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          es: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          de: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation.",
          nl: "Neural Network: Inspired by brain. Connected layers of neurons. Deep learning foundation."
        }
      },
      {
        question: {
          en: "What is Gradient Descent in Machine Learning?",
          es: "¿Qué es Gradient Descent en ML?",
          de: "Was ist Gradient Descent in ML?",
          nl: "Wat is Gradient Descent in ML?"
        },
        options: [
          { en: "Optimization algorithm", es: "Optimization algorithm", de: "Optimization algorithm", nl: "Optimization algorithm" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          es: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          de: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models.",
          nl: "Gradient Descent: Optimization algorithm. Minimizes error. Used to train models."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  }
})();