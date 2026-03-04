(function() {
  const level4 = {
    questions: [
      {
        question: {
          en: "How does Decision Tree work?",
          es: "¿Cómo funciona Decision Tree?",
          de: "Wie funktioniert Decision Tree?",
          nl: "Hoe werkt Decision Tree?"
        },
        options: [
          { en: "It splits data based on features", es: "splits data based on features", de: "splits data based on features", nl: "splits data based on features" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree splits data based on features, creates branches for decisions, and leaf nodes contain predictions",
          es: "Decision Tree splits data based on features, creates branches for decisions, y leaf nodes contain predictions",
          de: "Decision Tree splits data based on features, creates branches for decisions, und leaf nodes contain predictions",
          nl: "Decision Tree splits data based on features, creates branches for decisions, en leaf nodes contain predictions"
        }
      },
      {
        question: {
          en: "How does Linear Regression work?",
          es: "¿Cómo funciona Linear Regression?",
          de: "Wie funktioniert Linear Regression?",
          nl: "Hoe werkt Linear Regression?"
        },
        options: [
          { en: "It y = mx + b formula", es: "y = mx + b formula", de: "y = mx + b formula", nl: "y = mx + b formula" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression y = mx + b formula, minimizes squared error, and assumes linear relationship",
          es: "Linear Regression y = mx + b formula, minimizes squared error, y assumes linear relationship",
          de: "Linear Regression y = mx + b formula, minimizes squared error, und assumes linear relationship",
          nl: "Linear Regression y = mx + b formula, minimizes squared error, en assumes linear relationship"
        }
      },
      {
        question: {
          en: "How does K-Means work?",
          es: "¿Cómo funciona K-Means?",
          de: "Wie funktioniert K-Means?",
          nl: "Hoe werkt K-Means?"
        },
        options: [
          { en: "It chooses k cluster centers", es: "chooses k cluster centers", de: "chooses k cluster centers", nl: "chooses k cluster centers" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means chooses k cluster centers, assigns points to nearest center, and iteratively updates centers",
          es: "K-Means chooses k cluster centers, assigns points to nearest center, y iteratively updates centers",
          de: "K-Means chooses k cluster centers, assigns points to nearest center, und iteratively updates centers",
          nl: "K-Means chooses k cluster centers, assigns points to nearest center, en iteratively updates centers"
        }
      },
      {
        question: {
          en: "How does SVM work?",
          es: "¿Cómo funciona SVM?",
          de: "Wie funktioniert SVM?",
          nl: "Hoe werkt SVM?"
        },
        options: [
          { en: "It maximizes margin between classes", es: "maximizes margin between classes", de: "maximizes margin between classes", nl: "maximizes margin between classes" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "SVM maximizes margin between classes, uses kernel functions, and effective in high dimensions",
          es: "SVM maximizes margin between classes, uses kernel functions, y effective in high dimensions",
          de: "SVM maximizes margin between classes, uses kernel functions, und effective in high dimensions",
          nl: "SVM maximizes margin between classes, uses kernel functions, en effective in high dimensions"
        }
      },
      {
        question: {
          en: "How does Random Forest work?",
          es: "¿Cómo funciona Random Forest?",
          de: "Wie funktioniert Random Forest?",
          nl: "Hoe werkt Random Forest?"
        },
        options: [
          { en: "It combines multiple trees", es: "combines multiple trees", de: "combines multiple trees", nl: "combines multiple trees" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest combines multiple trees, uses bootstrap sampling, and averages predictions",
          es: "Random Forest combines multiple trees, uses bootstrap sampling, y averages predictions",
          de: "Random Forest combines multiple trees, uses bootstrap sampling, und averages predictions",
          nl: "Random Forest combines multiple trees, uses bootstrap sampling, en averages predictions"
        }
      },
      {
        question: {
          en: "How does Logistic Regression work?",
          es: "¿Cómo funciona Logistic Regression?",
          de: "Wie funktioniert Logistic Regression?",
          nl: "Hoe werkt Logistic Regression?"
        },
        options: [
          { en: "It uses sigmoid function", es: "uses sigmoid function", de: "uses sigmoid function", nl: "uses sigmoid function" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression uses sigmoid function, outputs probability, and binary classification",
          es: "Logistic Regression uses sigmoid function, outputs probability, y binary classification",
          de: "Logistic Regression uses sigmoid function, outputs probability, und binary classification",
          nl: "Logistic Regression uses sigmoid function, outputs probability, en binary classification"
        }
      },
      {
        question: {
          en: "How does KNN work?",
          es: "¿Cómo funciona KNN?",
          de: "Wie funktioniert KNN?",
          nl: "Hoe werkt KNN?"
        },
        options: [
          { en: "It distance-based algorithm", es: "distance-based algorithm", de: "distance-based algorithm", nl: "distance-based algorithm" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "KNN distance-based algorithm, k parameter is crucial, and no training phase",
          es: "KNN distance-based algorithm, k parameter is crucial, y no training phase",
          de: "KNN distance-based algorithm, k parameter is crucial, und no training phase",
          nl: "KNN distance-based algorithm, k parameter is crucial, en no training phase"
        }
      },
      {
        question: {
          en: "How does Naive Bayes work?",
          es: "¿Cómo funciona Naive Bayes?",
          de: "Wie funktioniert Naive Bayes?",
          nl: "Hoe werkt Naive Bayes?"
        },
        options: [
          { en: "It Bayes theorem", es: "Bayes theorem", de: "Bayes theorem", nl: "Bayes theorem" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes Bayes theorem, calculates posterior probability, and fast and scalable",
          es: "Naive Bayes Bayes theorem, calculates posterior probability, y fast and scalable",
          de: "Naive Bayes Bayes theorem, calculates posterior probability, und fast and scalable",
          nl: "Naive Bayes Bayes theorem, calculates posterior probability, en fast and scalable"
        }
      },
      {
        question: {
          en: "How does Gradient Descent work?",
          es: "¿Cómo funciona Gradient Descent?",
          de: "Wie funktioniert Gradient Descent?",
          nl: "Hoe werkt Gradient Descent?"
        },
        options: [
          { en: "It iterative optimization", es: "iterative optimization", de: "iterative optimization", nl: "iterative optimization" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent iterative optimization, learning rate parameter, and finds local minimum",
          es: "Gradient Descent iterative optimization, learning rate parameter, y finds local minimum",
          de: "Gradient Descent iterative optimization, learning rate parameter, und finds local minimum",
          nl: "Gradient Descent iterative optimization, learning rate parameter, en finds local minimum"
        }
      },
      {
        question: {
          en: "How does Neural Network work?",
          es: "¿Cómo funciona Neural Network?",
          de: "Wie funktioniert Neural Network?",
          nl: "Hoe werkt Neural Network?"
        },
        options: [
          { en: "It weighted connections", es: "weighted connections", de: "weighted connections", nl: "weighted connections" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network weighted connections, activation functions, and backpropagation training",
          es: "Neural Network weighted connections, activation functions, y backpropagation training",
          de: "Neural Network weighted connections, activation functions, und backpropagation training",
          nl: "Neural Network weighted connections, activation functions, en backpropagation training"
        }
      },
      {
        question: {
          en: "How does Decision Tree work?",
          es: "¿Cómo funciona Decision Tree?",
          de: "Wie funktioniert Decision Tree?",
          nl: "Hoe werkt Decision Tree?"
        },
        options: [
          { en: "It splits data based on features", es: "splits data based on features", de: "splits data based on features", nl: "splits data based on features" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree splits data based on features, creates branches for decisions, and leaf nodes contain predictions",
          es: "Decision Tree splits data based on features, creates branches for decisions, y leaf nodes contain predictions",
          de: "Decision Tree splits data based on features, creates branches for decisions, und leaf nodes contain predictions",
          nl: "Decision Tree splits data based on features, creates branches for decisions, en leaf nodes contain predictions"
        }
      },
      {
        question: {
          en: "How does Linear Regression work?",
          es: "¿Cómo funciona Linear Regression?",
          de: "Wie funktioniert Linear Regression?",
          nl: "Hoe werkt Linear Regression?"
        },
        options: [
          { en: "It y = mx + b formula", es: "y = mx + b formula", de: "y = mx + b formula", nl: "y = mx + b formula" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression y = mx + b formula, minimizes squared error, and assumes linear relationship",
          es: "Linear Regression y = mx + b formula, minimizes squared error, y assumes linear relationship",
          de: "Linear Regression y = mx + b formula, minimizes squared error, und assumes linear relationship",
          nl: "Linear Regression y = mx + b formula, minimizes squared error, en assumes linear relationship"
        }
      },
      {
        question: {
          en: "How does K-Means work?",
          es: "¿Cómo funciona K-Means?",
          de: "Wie funktioniert K-Means?",
          nl: "Hoe werkt K-Means?"
        },
        options: [
          { en: "It chooses k cluster centers", es: "chooses k cluster centers", de: "chooses k cluster centers", nl: "chooses k cluster centers" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means chooses k cluster centers, assigns points to nearest center, and iteratively updates centers",
          es: "K-Means chooses k cluster centers, assigns points to nearest center, y iteratively updates centers",
          de: "K-Means chooses k cluster centers, assigns points to nearest center, und iteratively updates centers",
          nl: "K-Means chooses k cluster centers, assigns points to nearest center, en iteratively updates centers"
        }
      },
      {
        question: {
          en: "How does SVM work?",
          es: "¿Cómo funciona SVM?",
          de: "Wie funktioniert SVM?",
          nl: "Hoe werkt SVM?"
        },
        options: [
          { en: "It maximizes margin between classes", es: "maximizes margin between classes", de: "maximizes margin between classes", nl: "maximizes margin between classes" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "SVM maximizes margin between classes, uses kernel functions, and effective in high dimensions",
          es: "SVM maximizes margin between classes, uses kernel functions, y effective in high dimensions",
          de: "SVM maximizes margin between classes, uses kernel functions, und effective in high dimensions",
          nl: "SVM maximizes margin between classes, uses kernel functions, en effective in high dimensions"
        }
      },
      {
        question: {
          en: "How does Random Forest work?",
          es: "¿Cómo funciona Random Forest?",
          de: "Wie funktioniert Random Forest?",
          nl: "Hoe werkt Random Forest?"
        },
        options: [
          { en: "It combines multiple trees", es: "combines multiple trees", de: "combines multiple trees", nl: "combines multiple trees" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest combines multiple trees, uses bootstrap sampling, and averages predictions",
          es: "Random Forest combines multiple trees, uses bootstrap sampling, y averages predictions",
          de: "Random Forest combines multiple trees, uses bootstrap sampling, und averages predictions",
          nl: "Random Forest combines multiple trees, uses bootstrap sampling, en averages predictions"
        }
      },
      {
        question: {
          en: "How does Logistic Regression work?",
          es: "¿Cómo funciona Logistic Regression?",
          de: "Wie funktioniert Logistic Regression?",
          nl: "Hoe werkt Logistic Regression?"
        },
        options: [
          { en: "It uses sigmoid function", es: "uses sigmoid function", de: "uses sigmoid function", nl: "uses sigmoid function" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression uses sigmoid function, outputs probability, and binary classification",
          es: "Logistic Regression uses sigmoid function, outputs probability, y binary classification",
          de: "Logistic Regression uses sigmoid function, outputs probability, und binary classification",
          nl: "Logistic Regression uses sigmoid function, outputs probability, en binary classification"
        }
      },
      {
        question: {
          en: "How does KNN work?",
          es: "¿Cómo funciona KNN?",
          de: "Wie funktioniert KNN?",
          nl: "Hoe werkt KNN?"
        },
        options: [
          { en: "It distance-based algorithm", es: "distance-based algorithm", de: "distance-based algorithm", nl: "distance-based algorithm" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "KNN distance-based algorithm, k parameter is crucial, and no training phase",
          es: "KNN distance-based algorithm, k parameter is crucial, y no training phase",
          de: "KNN distance-based algorithm, k parameter is crucial, und no training phase",
          nl: "KNN distance-based algorithm, k parameter is crucial, en no training phase"
        }
      },
      {
        question: {
          en: "How does Naive Bayes work?",
          es: "¿Cómo funciona Naive Bayes?",
          de: "Wie funktioniert Naive Bayes?",
          nl: "Hoe werkt Naive Bayes?"
        },
        options: [
          { en: "It Bayes theorem", es: "Bayes theorem", de: "Bayes theorem", nl: "Bayes theorem" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes Bayes theorem, calculates posterior probability, and fast and scalable",
          es: "Naive Bayes Bayes theorem, calculates posterior probability, y fast and scalable",
          de: "Naive Bayes Bayes theorem, calculates posterior probability, und fast and scalable",
          nl: "Naive Bayes Bayes theorem, calculates posterior probability, en fast and scalable"
        }
      },
      {
        question: {
          en: "How does Gradient Descent work?",
          es: "¿Cómo funciona Gradient Descent?",
          de: "Wie funktioniert Gradient Descent?",
          nl: "Hoe werkt Gradient Descent?"
        },
        options: [
          { en: "It iterative optimization", es: "iterative optimization", de: "iterative optimization", nl: "iterative optimization" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent iterative optimization, learning rate parameter, and finds local minimum",
          es: "Gradient Descent iterative optimization, learning rate parameter, y finds local minimum",
          de: "Gradient Descent iterative optimization, learning rate parameter, und finds local minimum",
          nl: "Gradient Descent iterative optimization, learning rate parameter, en finds local minimum"
        }
      },
      {
        question: {
          en: "How does Neural Network work?",
          es: "¿Cómo funciona Neural Network?",
          de: "Wie funktioniert Neural Network?",
          nl: "Hoe werkt Neural Network?"
        },
        options: [
          { en: "It weighted connections", es: "weighted connections", de: "weighted connections", nl: "weighted connections" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network weighted connections, activation functions, and backpropagation training",
          es: "Neural Network weighted connections, activation functions, y backpropagation training",
          de: "Neural Network weighted connections, activation functions, und backpropagation training",
          nl: "Neural Network weighted connections, activation functions, en backpropagation training"
        }
      },
      {
        question: {
          en: "How does Decision Tree work?",
          es: "¿Cómo funciona Decision Tree?",
          de: "Wie funktioniert Decision Tree?",
          nl: "Hoe werkt Decision Tree?"
        },
        options: [
          { en: "It splits data based on features", es: "splits data based on features", de: "splits data based on features", nl: "splits data based on features" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree splits data based on features, creates branches for decisions, and leaf nodes contain predictions",
          es: "Decision Tree splits data based on features, creates branches for decisions, y leaf nodes contain predictions",
          de: "Decision Tree splits data based on features, creates branches for decisions, und leaf nodes contain predictions",
          nl: "Decision Tree splits data based on features, creates branches for decisions, en leaf nodes contain predictions"
        }
      },
      {
        question: {
          en: "How does Linear Regression work?",
          es: "¿Cómo funciona Linear Regression?",
          de: "Wie funktioniert Linear Regression?",
          nl: "Hoe werkt Linear Regression?"
        },
        options: [
          { en: "It y = mx + b formula", es: "y = mx + b formula", de: "y = mx + b formula", nl: "y = mx + b formula" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression y = mx + b formula, minimizes squared error, and assumes linear relationship",
          es: "Linear Regression y = mx + b formula, minimizes squared error, y assumes linear relationship",
          de: "Linear Regression y = mx + b formula, minimizes squared error, und assumes linear relationship",
          nl: "Linear Regression y = mx + b formula, minimizes squared error, en assumes linear relationship"
        }
      },
      {
        question: {
          en: "How does K-Means work?",
          es: "¿Cómo funciona K-Means?",
          de: "Wie funktioniert K-Means?",
          nl: "Hoe werkt K-Means?"
        },
        options: [
          { en: "It chooses k cluster centers", es: "chooses k cluster centers", de: "chooses k cluster centers", nl: "chooses k cluster centers" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means chooses k cluster centers, assigns points to nearest center, and iteratively updates centers",
          es: "K-Means chooses k cluster centers, assigns points to nearest center, y iteratively updates centers",
          de: "K-Means chooses k cluster centers, assigns points to nearest center, und iteratively updates centers",
          nl: "K-Means chooses k cluster centers, assigns points to nearest center, en iteratively updates centers"
        }
      },
      {
        question: {
          en: "How does SVM work?",
          es: "¿Cómo funciona SVM?",
          de: "Wie funktioniert SVM?",
          nl: "Hoe werkt SVM?"
        },
        options: [
          { en: "It maximizes margin between classes", es: "maximizes margin between classes", de: "maximizes margin between classes", nl: "maximizes margin between classes" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "SVM maximizes margin between classes, uses kernel functions, and effective in high dimensions",
          es: "SVM maximizes margin between classes, uses kernel functions, y effective in high dimensions",
          de: "SVM maximizes margin between classes, uses kernel functions, und effective in high dimensions",
          nl: "SVM maximizes margin between classes, uses kernel functions, en effective in high dimensions"
        }
      },
      {
        question: {
          en: "How does Random Forest work?",
          es: "¿Cómo funciona Random Forest?",
          de: "Wie funktioniert Random Forest?",
          nl: "Hoe werkt Random Forest?"
        },
        options: [
          { en: "It combines multiple trees", es: "combines multiple trees", de: "combines multiple trees", nl: "combines multiple trees" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest combines multiple trees, uses bootstrap sampling, and averages predictions",
          es: "Random Forest combines multiple trees, uses bootstrap sampling, y averages predictions",
          de: "Random Forest combines multiple trees, uses bootstrap sampling, und averages predictions",
          nl: "Random Forest combines multiple trees, uses bootstrap sampling, en averages predictions"
        }
      },
      {
        question: {
          en: "How does Logistic Regression work?",
          es: "¿Cómo funciona Logistic Regression?",
          de: "Wie funktioniert Logistic Regression?",
          nl: "Hoe werkt Logistic Regression?"
        },
        options: [
          { en: "It uses sigmoid function", es: "uses sigmoid function", de: "uses sigmoid function", nl: "uses sigmoid function" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression uses sigmoid function, outputs probability, and binary classification",
          es: "Logistic Regression uses sigmoid function, outputs probability, y binary classification",
          de: "Logistic Regression uses sigmoid function, outputs probability, und binary classification",
          nl: "Logistic Regression uses sigmoid function, outputs probability, en binary classification"
        }
      },
      {
        question: {
          en: "How does KNN work?",
          es: "¿Cómo funciona KNN?",
          de: "Wie funktioniert KNN?",
          nl: "Hoe werkt KNN?"
        },
        options: [
          { en: "It distance-based algorithm", es: "distance-based algorithm", de: "distance-based algorithm", nl: "distance-based algorithm" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "KNN distance-based algorithm, k parameter is crucial, and no training phase",
          es: "KNN distance-based algorithm, k parameter is crucial, y no training phase",
          de: "KNN distance-based algorithm, k parameter is crucial, und no training phase",
          nl: "KNN distance-based algorithm, k parameter is crucial, en no training phase"
        }
      },
      {
        question: {
          en: "How does Naive Bayes work?",
          es: "¿Cómo funciona Naive Bayes?",
          de: "Wie funktioniert Naive Bayes?",
          nl: "Hoe werkt Naive Bayes?"
        },
        options: [
          { en: "It Bayes theorem", es: "Bayes theorem", de: "Bayes theorem", nl: "Bayes theorem" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes Bayes theorem, calculates posterior probability, and fast and scalable",
          es: "Naive Bayes Bayes theorem, calculates posterior probability, y fast and scalable",
          de: "Naive Bayes Bayes theorem, calculates posterior probability, und fast and scalable",
          nl: "Naive Bayes Bayes theorem, calculates posterior probability, en fast and scalable"
        }
      },
      {
        question: {
          en: "How does Gradient Descent work?",
          es: "¿Cómo funciona Gradient Descent?",
          de: "Wie funktioniert Gradient Descent?",
          nl: "Hoe werkt Gradient Descent?"
        },
        options: [
          { en: "It iterative optimization", es: "iterative optimization", de: "iterative optimization", nl: "iterative optimization" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent iterative optimization, learning rate parameter, and finds local minimum",
          es: "Gradient Descent iterative optimization, learning rate parameter, y finds local minimum",
          de: "Gradient Descent iterative optimization, learning rate parameter, und finds local minimum",
          nl: "Gradient Descent iterative optimization, learning rate parameter, en finds local minimum"
        }
      },
      {
        question: {
          en: "How does Neural Network work?",
          es: "¿Cómo funciona Neural Network?",
          de: "Wie funktioniert Neural Network?",
          nl: "Hoe werkt Neural Network?"
        },
        options: [
          { en: "It weighted connections", es: "weighted connections", de: "weighted connections", nl: "weighted connections" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network weighted connections, activation functions, and backpropagation training",
          es: "Neural Network weighted connections, activation functions, y backpropagation training",
          de: "Neural Network weighted connections, activation functions, und backpropagation training",
          nl: "Neural Network weighted connections, activation functions, en backpropagation training"
        }
      },
      {
        question: {
          en: "How does Decision Tree work?",
          es: "¿Cómo funciona Decision Tree?",
          de: "Wie funktioniert Decision Tree?",
          nl: "Hoe werkt Decision Tree?"
        },
        options: [
          { en: "It splits data based on features", es: "splits data based on features", de: "splits data based on features", nl: "splits data based on features" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree splits data based on features, creates branches for decisions, and leaf nodes contain predictions",
          es: "Decision Tree splits data based on features, creates branches for decisions, y leaf nodes contain predictions",
          de: "Decision Tree splits data based on features, creates branches for decisions, und leaf nodes contain predictions",
          nl: "Decision Tree splits data based on features, creates branches for decisions, en leaf nodes contain predictions"
        }
      },
      {
        question: {
          en: "How does Linear Regression work?",
          es: "¿Cómo funciona Linear Regression?",
          de: "Wie funktioniert Linear Regression?",
          nl: "Hoe werkt Linear Regression?"
        },
        options: [
          { en: "It y = mx + b formula", es: "y = mx + b formula", de: "y = mx + b formula", nl: "y = mx + b formula" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression y = mx + b formula, minimizes squared error, and assumes linear relationship",
          es: "Linear Regression y = mx + b formula, minimizes squared error, y assumes linear relationship",
          de: "Linear Regression y = mx + b formula, minimizes squared error, und assumes linear relationship",
          nl: "Linear Regression y = mx + b formula, minimizes squared error, en assumes linear relationship"
        }
      },
      {
        question: {
          en: "How does K-Means work?",
          es: "¿Cómo funciona K-Means?",
          de: "Wie funktioniert K-Means?",
          nl: "Hoe werkt K-Means?"
        },
        options: [
          { en: "It chooses k cluster centers", es: "chooses k cluster centers", de: "chooses k cluster centers", nl: "chooses k cluster centers" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means chooses k cluster centers, assigns points to nearest center, and iteratively updates centers",
          es: "K-Means chooses k cluster centers, assigns points to nearest center, y iteratively updates centers",
          de: "K-Means chooses k cluster centers, assigns points to nearest center, und iteratively updates centers",
          nl: "K-Means chooses k cluster centers, assigns points to nearest center, en iteratively updates centers"
        }
      },
      {
        question: {
          en: "How does SVM work?",
          es: "¿Cómo funciona SVM?",
          de: "Wie funktioniert SVM?",
          nl: "Hoe werkt SVM?"
        },
        options: [
          { en: "It maximizes margin between classes", es: "maximizes margin between classes", de: "maximizes margin between classes", nl: "maximizes margin between classes" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "SVM maximizes margin between classes, uses kernel functions, and effective in high dimensions",
          es: "SVM maximizes margin between classes, uses kernel functions, y effective in high dimensions",
          de: "SVM maximizes margin between classes, uses kernel functions, und effective in high dimensions",
          nl: "SVM maximizes margin between classes, uses kernel functions, en effective in high dimensions"
        }
      },
      {
        question: {
          en: "How does Random Forest work?",
          es: "¿Cómo funciona Random Forest?",
          de: "Wie funktioniert Random Forest?",
          nl: "Hoe werkt Random Forest?"
        },
        options: [
          { en: "It combines multiple trees", es: "combines multiple trees", de: "combines multiple trees", nl: "combines multiple trees" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest combines multiple trees, uses bootstrap sampling, and averages predictions",
          es: "Random Forest combines multiple trees, uses bootstrap sampling, y averages predictions",
          de: "Random Forest combines multiple trees, uses bootstrap sampling, und averages predictions",
          nl: "Random Forest combines multiple trees, uses bootstrap sampling, en averages predictions"
        }
      },
      {
        question: {
          en: "How does Logistic Regression work?",
          es: "¿Cómo funciona Logistic Regression?",
          de: "Wie funktioniert Logistic Regression?",
          nl: "Hoe werkt Logistic Regression?"
        },
        options: [
          { en: "It uses sigmoid function", es: "uses sigmoid function", de: "uses sigmoid function", nl: "uses sigmoid function" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression uses sigmoid function, outputs probability, and binary classification",
          es: "Logistic Regression uses sigmoid function, outputs probability, y binary classification",
          de: "Logistic Regression uses sigmoid function, outputs probability, und binary classification",
          nl: "Logistic Regression uses sigmoid function, outputs probability, en binary classification"
        }
      },
      {
        question: {
          en: "How does KNN work?",
          es: "¿Cómo funciona KNN?",
          de: "Wie funktioniert KNN?",
          nl: "Hoe werkt KNN?"
        },
        options: [
          { en: "It distance-based algorithm", es: "distance-based algorithm", de: "distance-based algorithm", nl: "distance-based algorithm" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "KNN distance-based algorithm, k parameter is crucial, and no training phase",
          es: "KNN distance-based algorithm, k parameter is crucial, y no training phase",
          de: "KNN distance-based algorithm, k parameter is crucial, und no training phase",
          nl: "KNN distance-based algorithm, k parameter is crucial, en no training phase"
        }
      },
      {
        question: {
          en: "How does Naive Bayes work?",
          es: "¿Cómo funciona Naive Bayes?",
          de: "Wie funktioniert Naive Bayes?",
          nl: "Hoe werkt Naive Bayes?"
        },
        options: [
          { en: "It Bayes theorem", es: "Bayes theorem", de: "Bayes theorem", nl: "Bayes theorem" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes Bayes theorem, calculates posterior probability, and fast and scalable",
          es: "Naive Bayes Bayes theorem, calculates posterior probability, y fast and scalable",
          de: "Naive Bayes Bayes theorem, calculates posterior probability, und fast and scalable",
          nl: "Naive Bayes Bayes theorem, calculates posterior probability, en fast and scalable"
        }
      },
      {
        question: {
          en: "How does Gradient Descent work?",
          es: "¿Cómo funciona Gradient Descent?",
          de: "Wie funktioniert Gradient Descent?",
          nl: "Hoe werkt Gradient Descent?"
        },
        options: [
          { en: "It iterative optimization", es: "iterative optimization", de: "iterative optimization", nl: "iterative optimization" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent iterative optimization, learning rate parameter, and finds local minimum",
          es: "Gradient Descent iterative optimization, learning rate parameter, y finds local minimum",
          de: "Gradient Descent iterative optimization, learning rate parameter, und finds local minimum",
          nl: "Gradient Descent iterative optimization, learning rate parameter, en finds local minimum"
        }
      },
      {
        question: {
          en: "How does Neural Network work?",
          es: "¿Cómo funciona Neural Network?",
          de: "Wie funktioniert Neural Network?",
          nl: "Hoe werkt Neural Network?"
        },
        options: [
          { en: "It weighted connections", es: "weighted connections", de: "weighted connections", nl: "weighted connections" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network weighted connections, activation functions, and backpropagation training",
          es: "Neural Network weighted connections, activation functions, y backpropagation training",
          de: "Neural Network weighted connections, activation functions, und backpropagation training",
          nl: "Neural Network weighted connections, activation functions, en backpropagation training"
        }
      },
      {
        question: {
          en: "How does Decision Tree work?",
          es: "¿Cómo funciona Decision Tree?",
          de: "Wie funktioniert Decision Tree?",
          nl: "Hoe werkt Decision Tree?"
        },
        options: [
          { en: "It splits data based on features", es: "splits data based on features", de: "splits data based on features", nl: "splits data based on features" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree splits data based on features, creates branches for decisions, and leaf nodes contain predictions",
          es: "Decision Tree splits data based on features, creates branches for decisions, y leaf nodes contain predictions",
          de: "Decision Tree splits data based on features, creates branches for decisions, und leaf nodes contain predictions",
          nl: "Decision Tree splits data based on features, creates branches for decisions, en leaf nodes contain predictions"
        }
      },
      {
        question: {
          en: "How does Linear Regression work?",
          es: "¿Cómo funciona Linear Regression?",
          de: "Wie funktioniert Linear Regression?",
          nl: "Hoe werkt Linear Regression?"
        },
        options: [
          { en: "It y = mx + b formula", es: "y = mx + b formula", de: "y = mx + b formula", nl: "y = mx + b formula" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression y = mx + b formula, minimizes squared error, and assumes linear relationship",
          es: "Linear Regression y = mx + b formula, minimizes squared error, y assumes linear relationship",
          de: "Linear Regression y = mx + b formula, minimizes squared error, und assumes linear relationship",
          nl: "Linear Regression y = mx + b formula, minimizes squared error, en assumes linear relationship"
        }
      },
      {
        question: {
          en: "How does K-Means work?",
          es: "¿Cómo funciona K-Means?",
          de: "Wie funktioniert K-Means?",
          nl: "Hoe werkt K-Means?"
        },
        options: [
          { en: "It chooses k cluster centers", es: "chooses k cluster centers", de: "chooses k cluster centers", nl: "chooses k cluster centers" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means chooses k cluster centers, assigns points to nearest center, and iteratively updates centers",
          es: "K-Means chooses k cluster centers, assigns points to nearest center, y iteratively updates centers",
          de: "K-Means chooses k cluster centers, assigns points to nearest center, und iteratively updates centers",
          nl: "K-Means chooses k cluster centers, assigns points to nearest center, en iteratively updates centers"
        }
      },
      {
        question: {
          en: "How does SVM work?",
          es: "¿Cómo funciona SVM?",
          de: "Wie funktioniert SVM?",
          nl: "Hoe werkt SVM?"
        },
        options: [
          { en: "It maximizes margin between classes", es: "maximizes margin between classes", de: "maximizes margin between classes", nl: "maximizes margin between classes" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "SVM maximizes margin between classes, uses kernel functions, and effective in high dimensions",
          es: "SVM maximizes margin between classes, uses kernel functions, y effective in high dimensions",
          de: "SVM maximizes margin between classes, uses kernel functions, und effective in high dimensions",
          nl: "SVM maximizes margin between classes, uses kernel functions, en effective in high dimensions"
        }
      },
      {
        question: {
          en: "How does Random Forest work?",
          es: "¿Cómo funciona Random Forest?",
          de: "Wie funktioniert Random Forest?",
          nl: "Hoe werkt Random Forest?"
        },
        options: [
          { en: "It combines multiple trees", es: "combines multiple trees", de: "combines multiple trees", nl: "combines multiple trees" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest combines multiple trees, uses bootstrap sampling, and averages predictions",
          es: "Random Forest combines multiple trees, uses bootstrap sampling, y averages predictions",
          de: "Random Forest combines multiple trees, uses bootstrap sampling, und averages predictions",
          nl: "Random Forest combines multiple trees, uses bootstrap sampling, en averages predictions"
        }
      },
      {
        question: {
          en: "How does Logistic Regression work?",
          es: "¿Cómo funciona Logistic Regression?",
          de: "Wie funktioniert Logistic Regression?",
          nl: "Hoe werkt Logistic Regression?"
        },
        options: [
          { en: "It uses sigmoid function", es: "uses sigmoid function", de: "uses sigmoid function", nl: "uses sigmoid function" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression uses sigmoid function, outputs probability, and binary classification",
          es: "Logistic Regression uses sigmoid function, outputs probability, y binary classification",
          de: "Logistic Regression uses sigmoid function, outputs probability, und binary classification",
          nl: "Logistic Regression uses sigmoid function, outputs probability, en binary classification"
        }
      },
      {
        question: {
          en: "How does KNN work?",
          es: "¿Cómo funciona KNN?",
          de: "Wie funktioniert KNN?",
          nl: "Hoe werkt KNN?"
        },
        options: [
          { en: "It distance-based algorithm", es: "distance-based algorithm", de: "distance-based algorithm", nl: "distance-based algorithm" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "KNN distance-based algorithm, k parameter is crucial, and no training phase",
          es: "KNN distance-based algorithm, k parameter is crucial, y no training phase",
          de: "KNN distance-based algorithm, k parameter is crucial, und no training phase",
          nl: "KNN distance-based algorithm, k parameter is crucial, en no training phase"
        }
      },
      {
        question: {
          en: "How does Naive Bayes work?",
          es: "¿Cómo funciona Naive Bayes?",
          de: "Wie funktioniert Naive Bayes?",
          nl: "Hoe werkt Naive Bayes?"
        },
        options: [
          { en: "It Bayes theorem", es: "Bayes theorem", de: "Bayes theorem", nl: "Bayes theorem" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes Bayes theorem, calculates posterior probability, and fast and scalable",
          es: "Naive Bayes Bayes theorem, calculates posterior probability, y fast and scalable",
          de: "Naive Bayes Bayes theorem, calculates posterior probability, und fast and scalable",
          nl: "Naive Bayes Bayes theorem, calculates posterior probability, en fast and scalable"
        }
      },
      {
        question: {
          en: "How does Gradient Descent work?",
          es: "¿Cómo funciona Gradient Descent?",
          de: "Wie funktioniert Gradient Descent?",
          nl: "Hoe werkt Gradient Descent?"
        },
        options: [
          { en: "It iterative optimization", es: "iterative optimization", de: "iterative optimization", nl: "iterative optimization" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent iterative optimization, learning rate parameter, and finds local minimum",
          es: "Gradient Descent iterative optimization, learning rate parameter, y finds local minimum",
          de: "Gradient Descent iterative optimization, learning rate parameter, und finds local minimum",
          nl: "Gradient Descent iterative optimization, learning rate parameter, en finds local minimum"
        }
      },
      {
        question: {
          en: "How does Neural Network work?",
          es: "¿Cómo funciona Neural Network?",
          de: "Wie funktioniert Neural Network?",
          nl: "Hoe werkt Neural Network?"
        },
        options: [
          { en: "It weighted connections", es: "weighted connections", de: "weighted connections", nl: "weighted connections" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network weighted connections, activation functions, and backpropagation training",
          es: "Neural Network weighted connections, activation functions, y backpropagation training",
          de: "Neural Network weighted connections, activation functions, und backpropagation training",
          nl: "Neural Network weighted connections, activation functions, en backpropagation training"
        }
      },
      {
        question: {
          en: "How does Decision Tree work?",
          es: "¿Cómo funciona Decision Tree?",
          de: "Wie funktioniert Decision Tree?",
          nl: "Hoe werkt Decision Tree?"
        },
        options: [
          { en: "It splits data based on features", es: "splits data based on features", de: "splits data based on features", nl: "splits data based on features" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree splits data based on features, creates branches for decisions, and leaf nodes contain predictions",
          es: "Decision Tree splits data based on features, creates branches for decisions, y leaf nodes contain predictions",
          de: "Decision Tree splits data based on features, creates branches for decisions, und leaf nodes contain predictions",
          nl: "Decision Tree splits data based on features, creates branches for decisions, en leaf nodes contain predictions"
        }
      },
      {
        question: {
          en: "How does Linear Regression work?",
          es: "¿Cómo funciona Linear Regression?",
          de: "Wie funktioniert Linear Regression?",
          nl: "Hoe werkt Linear Regression?"
        },
        options: [
          { en: "It y = mx + b formula", es: "y = mx + b formula", de: "y = mx + b formula", nl: "y = mx + b formula" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression y = mx + b formula, minimizes squared error, and assumes linear relationship",
          es: "Linear Regression y = mx + b formula, minimizes squared error, y assumes linear relationship",
          de: "Linear Regression y = mx + b formula, minimizes squared error, und assumes linear relationship",
          nl: "Linear Regression y = mx + b formula, minimizes squared error, en assumes linear relationship"
        }
      },
      {
        question: {
          en: "How does K-Means work?",
          es: "¿Cómo funciona K-Means?",
          de: "Wie funktioniert K-Means?",
          nl: "Hoe werkt K-Means?"
        },
        options: [
          { en: "It chooses k cluster centers", es: "chooses k cluster centers", de: "chooses k cluster centers", nl: "chooses k cluster centers" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means chooses k cluster centers, assigns points to nearest center, and iteratively updates centers",
          es: "K-Means chooses k cluster centers, assigns points to nearest center, y iteratively updates centers",
          de: "K-Means chooses k cluster centers, assigns points to nearest center, und iteratively updates centers",
          nl: "K-Means chooses k cluster centers, assigns points to nearest center, en iteratively updates centers"
        }
      },
      {
        question: {
          en: "How does SVM work?",
          es: "¿Cómo funciona SVM?",
          de: "Wie funktioniert SVM?",
          nl: "Hoe werkt SVM?"
        },
        options: [
          { en: "It maximizes margin between classes", es: "maximizes margin between classes", de: "maximizes margin between classes", nl: "maximizes margin between classes" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "SVM maximizes margin between classes, uses kernel functions, and effective in high dimensions",
          es: "SVM maximizes margin between classes, uses kernel functions, y effective in high dimensions",
          de: "SVM maximizes margin between classes, uses kernel functions, und effective in high dimensions",
          nl: "SVM maximizes margin between classes, uses kernel functions, en effective in high dimensions"
        }
      },
      {
        question: {
          en: "How does Random Forest work?",
          es: "¿Cómo funciona Random Forest?",
          de: "Wie funktioniert Random Forest?",
          nl: "Hoe werkt Random Forest?"
        },
        options: [
          { en: "It combines multiple trees", es: "combines multiple trees", de: "combines multiple trees", nl: "combines multiple trees" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest combines multiple trees, uses bootstrap sampling, and averages predictions",
          es: "Random Forest combines multiple trees, uses bootstrap sampling, y averages predictions",
          de: "Random Forest combines multiple trees, uses bootstrap sampling, und averages predictions",
          nl: "Random Forest combines multiple trees, uses bootstrap sampling, en averages predictions"
        }
      },
      {
        question: {
          en: "How does Logistic Regression work?",
          es: "¿Cómo funciona Logistic Regression?",
          de: "Wie funktioniert Logistic Regression?",
          nl: "Hoe werkt Logistic Regression?"
        },
        options: [
          { en: "It uses sigmoid function", es: "uses sigmoid function", de: "uses sigmoid function", nl: "uses sigmoid function" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression uses sigmoid function, outputs probability, and binary classification",
          es: "Logistic Regression uses sigmoid function, outputs probability, y binary classification",
          de: "Logistic Regression uses sigmoid function, outputs probability, und binary classification",
          nl: "Logistic Regression uses sigmoid function, outputs probability, en binary classification"
        }
      },
      {
        question: {
          en: "How does KNN work?",
          es: "¿Cómo funciona KNN?",
          de: "Wie funktioniert KNN?",
          nl: "Hoe werkt KNN?"
        },
        options: [
          { en: "It distance-based algorithm", es: "distance-based algorithm", de: "distance-based algorithm", nl: "distance-based algorithm" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "KNN distance-based algorithm, k parameter is crucial, and no training phase",
          es: "KNN distance-based algorithm, k parameter is crucial, y no training phase",
          de: "KNN distance-based algorithm, k parameter is crucial, und no training phase",
          nl: "KNN distance-based algorithm, k parameter is crucial, en no training phase"
        }
      },
      {
        question: {
          en: "How does Naive Bayes work?",
          es: "¿Cómo funciona Naive Bayes?",
          de: "Wie funktioniert Naive Bayes?",
          nl: "Hoe werkt Naive Bayes?"
        },
        options: [
          { en: "It Bayes theorem", es: "Bayes theorem", de: "Bayes theorem", nl: "Bayes theorem" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes Bayes theorem, calculates posterior probability, and fast and scalable",
          es: "Naive Bayes Bayes theorem, calculates posterior probability, y fast and scalable",
          de: "Naive Bayes Bayes theorem, calculates posterior probability, und fast and scalable",
          nl: "Naive Bayes Bayes theorem, calculates posterior probability, en fast and scalable"
        }
      },
      {
        question: {
          en: "How does Gradient Descent work?",
          es: "¿Cómo funciona Gradient Descent?",
          de: "Wie funktioniert Gradient Descent?",
          nl: "Hoe werkt Gradient Descent?"
        },
        options: [
          { en: "It iterative optimization", es: "iterative optimization", de: "iterative optimization", nl: "iterative optimization" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent iterative optimization, learning rate parameter, and finds local minimum",
          es: "Gradient Descent iterative optimization, learning rate parameter, y finds local minimum",
          de: "Gradient Descent iterative optimization, learning rate parameter, und finds local minimum",
          nl: "Gradient Descent iterative optimization, learning rate parameter, en finds local minimum"
        }
      },
      {
        question: {
          en: "How does Neural Network work?",
          es: "¿Cómo funciona Neural Network?",
          de: "Wie funktioniert Neural Network?",
          nl: "Hoe werkt Neural Network?"
        },
        options: [
          { en: "It weighted connections", es: "weighted connections", de: "weighted connections", nl: "weighted connections" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network weighted connections, activation functions, and backpropagation training",
          es: "Neural Network weighted connections, activation functions, y backpropagation training",
          de: "Neural Network weighted connections, activation functions, und backpropagation training",
          nl: "Neural Network weighted connections, activation functions, en backpropagation training"
        }
      },
      {
        question: {
          en: "How does Decision Tree work?",
          es: "¿Cómo funciona Decision Tree?",
          de: "Wie funktioniert Decision Tree?",
          nl: "Hoe werkt Decision Tree?"
        },
        options: [
          { en: "It splits data based on features", es: "splits data based on features", de: "splits data based on features", nl: "splits data based on features" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree splits data based on features, creates branches for decisions, and leaf nodes contain predictions",
          es: "Decision Tree splits data based on features, creates branches for decisions, y leaf nodes contain predictions",
          de: "Decision Tree splits data based on features, creates branches for decisions, und leaf nodes contain predictions",
          nl: "Decision Tree splits data based on features, creates branches for decisions, en leaf nodes contain predictions"
        }
      },
      {
        question: {
          en: "How does Linear Regression work?",
          es: "¿Cómo funciona Linear Regression?",
          de: "Wie funktioniert Linear Regression?",
          nl: "Hoe werkt Linear Regression?"
        },
        options: [
          { en: "It y = mx + b formula", es: "y = mx + b formula", de: "y = mx + b formula", nl: "y = mx + b formula" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression y = mx + b formula, minimizes squared error, and assumes linear relationship",
          es: "Linear Regression y = mx + b formula, minimizes squared error, y assumes linear relationship",
          de: "Linear Regression y = mx + b formula, minimizes squared error, und assumes linear relationship",
          nl: "Linear Regression y = mx + b formula, minimizes squared error, en assumes linear relationship"
        }
      },
      {
        question: {
          en: "How does K-Means work?",
          es: "¿Cómo funciona K-Means?",
          de: "Wie funktioniert K-Means?",
          nl: "Hoe werkt K-Means?"
        },
        options: [
          { en: "It chooses k cluster centers", es: "chooses k cluster centers", de: "chooses k cluster centers", nl: "chooses k cluster centers" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means chooses k cluster centers, assigns points to nearest center, and iteratively updates centers",
          es: "K-Means chooses k cluster centers, assigns points to nearest center, y iteratively updates centers",
          de: "K-Means chooses k cluster centers, assigns points to nearest center, und iteratively updates centers",
          nl: "K-Means chooses k cluster centers, assigns points to nearest center, en iteratively updates centers"
        }
      },
      {
        question: {
          en: "How does SVM work?",
          es: "¿Cómo funciona SVM?",
          de: "Wie funktioniert SVM?",
          nl: "Hoe werkt SVM?"
        },
        options: [
          { en: "It maximizes margin between classes", es: "maximizes margin between classes", de: "maximizes margin between classes", nl: "maximizes margin between classes" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "SVM maximizes margin between classes, uses kernel functions, and effective in high dimensions",
          es: "SVM maximizes margin between classes, uses kernel functions, y effective in high dimensions",
          de: "SVM maximizes margin between classes, uses kernel functions, und effective in high dimensions",
          nl: "SVM maximizes margin between classes, uses kernel functions, en effective in high dimensions"
        }
      },
      {
        question: {
          en: "How does Random Forest work?",
          es: "¿Cómo funciona Random Forest?",
          de: "Wie funktioniert Random Forest?",
          nl: "Hoe werkt Random Forest?"
        },
        options: [
          { en: "It combines multiple trees", es: "combines multiple trees", de: "combines multiple trees", nl: "combines multiple trees" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest combines multiple trees, uses bootstrap sampling, and averages predictions",
          es: "Random Forest combines multiple trees, uses bootstrap sampling, y averages predictions",
          de: "Random Forest combines multiple trees, uses bootstrap sampling, und averages predictions",
          nl: "Random Forest combines multiple trees, uses bootstrap sampling, en averages predictions"
        }
      },
      {
        question: {
          en: "How does Logistic Regression work?",
          es: "¿Cómo funciona Logistic Regression?",
          de: "Wie funktioniert Logistic Regression?",
          nl: "Hoe werkt Logistic Regression?"
        },
        options: [
          { en: "It uses sigmoid function", es: "uses sigmoid function", de: "uses sigmoid function", nl: "uses sigmoid function" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression uses sigmoid function, outputs probability, and binary classification",
          es: "Logistic Regression uses sigmoid function, outputs probability, y binary classification",
          de: "Logistic Regression uses sigmoid function, outputs probability, und binary classification",
          nl: "Logistic Regression uses sigmoid function, outputs probability, en binary classification"
        }
      },
      {
        question: {
          en: "How does KNN work?",
          es: "¿Cómo funciona KNN?",
          de: "Wie funktioniert KNN?",
          nl: "Hoe werkt KNN?"
        },
        options: [
          { en: "It distance-based algorithm", es: "distance-based algorithm", de: "distance-based algorithm", nl: "distance-based algorithm" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "KNN distance-based algorithm, k parameter is crucial, and no training phase",
          es: "KNN distance-based algorithm, k parameter is crucial, y no training phase",
          de: "KNN distance-based algorithm, k parameter is crucial, und no training phase",
          nl: "KNN distance-based algorithm, k parameter is crucial, en no training phase"
        }
      },
      {
        question: {
          en: "How does Naive Bayes work?",
          es: "¿Cómo funciona Naive Bayes?",
          de: "Wie funktioniert Naive Bayes?",
          nl: "Hoe werkt Naive Bayes?"
        },
        options: [
          { en: "It Bayes theorem", es: "Bayes theorem", de: "Bayes theorem", nl: "Bayes theorem" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes Bayes theorem, calculates posterior probability, and fast and scalable",
          es: "Naive Bayes Bayes theorem, calculates posterior probability, y fast and scalable",
          de: "Naive Bayes Bayes theorem, calculates posterior probability, und fast and scalable",
          nl: "Naive Bayes Bayes theorem, calculates posterior probability, en fast and scalable"
        }
      },
      {
        question: {
          en: "How does Gradient Descent work?",
          es: "¿Cómo funciona Gradient Descent?",
          de: "Wie funktioniert Gradient Descent?",
          nl: "Hoe werkt Gradient Descent?"
        },
        options: [
          { en: "It iterative optimization", es: "iterative optimization", de: "iterative optimization", nl: "iterative optimization" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent iterative optimization, learning rate parameter, and finds local minimum",
          es: "Gradient Descent iterative optimization, learning rate parameter, y finds local minimum",
          de: "Gradient Descent iterative optimization, learning rate parameter, und finds local minimum",
          nl: "Gradient Descent iterative optimization, learning rate parameter, en finds local minimum"
        }
      },
      {
        question: {
          en: "How does Neural Network work?",
          es: "¿Cómo funciona Neural Network?",
          de: "Wie funktioniert Neural Network?",
          nl: "Hoe werkt Neural Network?"
        },
        options: [
          { en: "It weighted connections", es: "weighted connections", de: "weighted connections", nl: "weighted connections" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network weighted connections, activation functions, and backpropagation training",
          es: "Neural Network weighted connections, activation functions, y backpropagation training",
          de: "Neural Network weighted connections, activation functions, und backpropagation training",
          nl: "Neural Network weighted connections, activation functions, en backpropagation training"
        }
      },
      {
        question: {
          en: "How does Decision Tree work?",
          es: "¿Cómo funciona Decision Tree?",
          de: "Wie funktioniert Decision Tree?",
          nl: "Hoe werkt Decision Tree?"
        },
        options: [
          { en: "It splits data based on features", es: "splits data based on features", de: "splits data based on features", nl: "splits data based on features" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree splits data based on features, creates branches for decisions, and leaf nodes contain predictions",
          es: "Decision Tree splits data based on features, creates branches for decisions, y leaf nodes contain predictions",
          de: "Decision Tree splits data based on features, creates branches for decisions, und leaf nodes contain predictions",
          nl: "Decision Tree splits data based on features, creates branches for decisions, en leaf nodes contain predictions"
        }
      },
      {
        question: {
          en: "How does Linear Regression work?",
          es: "¿Cómo funciona Linear Regression?",
          de: "Wie funktioniert Linear Regression?",
          nl: "Hoe werkt Linear Regression?"
        },
        options: [
          { en: "It y = mx + b formula", es: "y = mx + b formula", de: "y = mx + b formula", nl: "y = mx + b formula" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression y = mx + b formula, minimizes squared error, and assumes linear relationship",
          es: "Linear Regression y = mx + b formula, minimizes squared error, y assumes linear relationship",
          de: "Linear Regression y = mx + b formula, minimizes squared error, und assumes linear relationship",
          nl: "Linear Regression y = mx + b formula, minimizes squared error, en assumes linear relationship"
        }
      },
      {
        question: {
          en: "How does K-Means work?",
          es: "¿Cómo funciona K-Means?",
          de: "Wie funktioniert K-Means?",
          nl: "Hoe werkt K-Means?"
        },
        options: [
          { en: "It chooses k cluster centers", es: "chooses k cluster centers", de: "chooses k cluster centers", nl: "chooses k cluster centers" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means chooses k cluster centers, assigns points to nearest center, and iteratively updates centers",
          es: "K-Means chooses k cluster centers, assigns points to nearest center, y iteratively updates centers",
          de: "K-Means chooses k cluster centers, assigns points to nearest center, und iteratively updates centers",
          nl: "K-Means chooses k cluster centers, assigns points to nearest center, en iteratively updates centers"
        }
      },
      {
        question: {
          en: "How does SVM work?",
          es: "¿Cómo funciona SVM?",
          de: "Wie funktioniert SVM?",
          nl: "Hoe werkt SVM?"
        },
        options: [
          { en: "It maximizes margin between classes", es: "maximizes margin between classes", de: "maximizes margin between classes", nl: "maximizes margin between classes" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "SVM maximizes margin between classes, uses kernel functions, and effective in high dimensions",
          es: "SVM maximizes margin between classes, uses kernel functions, y effective in high dimensions",
          de: "SVM maximizes margin between classes, uses kernel functions, und effective in high dimensions",
          nl: "SVM maximizes margin between classes, uses kernel functions, en effective in high dimensions"
        }
      },
      {
        question: {
          en: "How does Random Forest work?",
          es: "¿Cómo funciona Random Forest?",
          de: "Wie funktioniert Random Forest?",
          nl: "Hoe werkt Random Forest?"
        },
        options: [
          { en: "It combines multiple trees", es: "combines multiple trees", de: "combines multiple trees", nl: "combines multiple trees" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest combines multiple trees, uses bootstrap sampling, and averages predictions",
          es: "Random Forest combines multiple trees, uses bootstrap sampling, y averages predictions",
          de: "Random Forest combines multiple trees, uses bootstrap sampling, und averages predictions",
          nl: "Random Forest combines multiple trees, uses bootstrap sampling, en averages predictions"
        }
      },
      {
        question: {
          en: "How does Logistic Regression work?",
          es: "¿Cómo funciona Logistic Regression?",
          de: "Wie funktioniert Logistic Regression?",
          nl: "Hoe werkt Logistic Regression?"
        },
        options: [
          { en: "It uses sigmoid function", es: "uses sigmoid function", de: "uses sigmoid function", nl: "uses sigmoid function" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression uses sigmoid function, outputs probability, and binary classification",
          es: "Logistic Regression uses sigmoid function, outputs probability, y binary classification",
          de: "Logistic Regression uses sigmoid function, outputs probability, und binary classification",
          nl: "Logistic Regression uses sigmoid function, outputs probability, en binary classification"
        }
      },
      {
        question: {
          en: "How does KNN work?",
          es: "¿Cómo funciona KNN?",
          de: "Wie funktioniert KNN?",
          nl: "Hoe werkt KNN?"
        },
        options: [
          { en: "It distance-based algorithm", es: "distance-based algorithm", de: "distance-based algorithm", nl: "distance-based algorithm" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "KNN distance-based algorithm, k parameter is crucial, and no training phase",
          es: "KNN distance-based algorithm, k parameter is crucial, y no training phase",
          de: "KNN distance-based algorithm, k parameter is crucial, und no training phase",
          nl: "KNN distance-based algorithm, k parameter is crucial, en no training phase"
        }
      },
      {
        question: {
          en: "How does Naive Bayes work?",
          es: "¿Cómo funciona Naive Bayes?",
          de: "Wie funktioniert Naive Bayes?",
          nl: "Hoe werkt Naive Bayes?"
        },
        options: [
          { en: "It Bayes theorem", es: "Bayes theorem", de: "Bayes theorem", nl: "Bayes theorem" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes Bayes theorem, calculates posterior probability, and fast and scalable",
          es: "Naive Bayes Bayes theorem, calculates posterior probability, y fast and scalable",
          de: "Naive Bayes Bayes theorem, calculates posterior probability, und fast and scalable",
          nl: "Naive Bayes Bayes theorem, calculates posterior probability, en fast and scalable"
        }
      },
      {
        question: {
          en: "How does Gradient Descent work?",
          es: "¿Cómo funciona Gradient Descent?",
          de: "Wie funktioniert Gradient Descent?",
          nl: "Hoe werkt Gradient Descent?"
        },
        options: [
          { en: "It iterative optimization", es: "iterative optimization", de: "iterative optimization", nl: "iterative optimization" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent iterative optimization, learning rate parameter, and finds local minimum",
          es: "Gradient Descent iterative optimization, learning rate parameter, y finds local minimum",
          de: "Gradient Descent iterative optimization, learning rate parameter, und finds local minimum",
          nl: "Gradient Descent iterative optimization, learning rate parameter, en finds local minimum"
        }
      },
      {
        question: {
          en: "How does Neural Network work?",
          es: "¿Cómo funciona Neural Network?",
          de: "Wie funktioniert Neural Network?",
          nl: "Hoe werkt Neural Network?"
        },
        options: [
          { en: "It weighted connections", es: "weighted connections", de: "weighted connections", nl: "weighted connections" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network weighted connections, activation functions, and backpropagation training",
          es: "Neural Network weighted connections, activation functions, y backpropagation training",
          de: "Neural Network weighted connections, activation functions, und backpropagation training",
          nl: "Neural Network weighted connections, activation functions, en backpropagation training"
        }
      },
      {
        question: {
          en: "How does Decision Tree work?",
          es: "¿Cómo funciona Decision Tree?",
          de: "Wie funktioniert Decision Tree?",
          nl: "Hoe werkt Decision Tree?"
        },
        options: [
          { en: "It splits data based on features", es: "splits data based on features", de: "splits data based on features", nl: "splits data based on features" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree splits data based on features, creates branches for decisions, and leaf nodes contain predictions",
          es: "Decision Tree splits data based on features, creates branches for decisions, y leaf nodes contain predictions",
          de: "Decision Tree splits data based on features, creates branches for decisions, und leaf nodes contain predictions",
          nl: "Decision Tree splits data based on features, creates branches for decisions, en leaf nodes contain predictions"
        }
      },
      {
        question: {
          en: "How does Linear Regression work?",
          es: "¿Cómo funciona Linear Regression?",
          de: "Wie funktioniert Linear Regression?",
          nl: "Hoe werkt Linear Regression?"
        },
        options: [
          { en: "It y = mx + b formula", es: "y = mx + b formula", de: "y = mx + b formula", nl: "y = mx + b formula" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression y = mx + b formula, minimizes squared error, and assumes linear relationship",
          es: "Linear Regression y = mx + b formula, minimizes squared error, y assumes linear relationship",
          de: "Linear Regression y = mx + b formula, minimizes squared error, und assumes linear relationship",
          nl: "Linear Regression y = mx + b formula, minimizes squared error, en assumes linear relationship"
        }
      },
      {
        question: {
          en: "How does K-Means work?",
          es: "¿Cómo funciona K-Means?",
          de: "Wie funktioniert K-Means?",
          nl: "Hoe werkt K-Means?"
        },
        options: [
          { en: "It chooses k cluster centers", es: "chooses k cluster centers", de: "chooses k cluster centers", nl: "chooses k cluster centers" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means chooses k cluster centers, assigns points to nearest center, and iteratively updates centers",
          es: "K-Means chooses k cluster centers, assigns points to nearest center, y iteratively updates centers",
          de: "K-Means chooses k cluster centers, assigns points to nearest center, und iteratively updates centers",
          nl: "K-Means chooses k cluster centers, assigns points to nearest center, en iteratively updates centers"
        }
      },
      {
        question: {
          en: "How does SVM work?",
          es: "¿Cómo funciona SVM?",
          de: "Wie funktioniert SVM?",
          nl: "Hoe werkt SVM?"
        },
        options: [
          { en: "It maximizes margin between classes", es: "maximizes margin between classes", de: "maximizes margin between classes", nl: "maximizes margin between classes" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "SVM maximizes margin between classes, uses kernel functions, and effective in high dimensions",
          es: "SVM maximizes margin between classes, uses kernel functions, y effective in high dimensions",
          de: "SVM maximizes margin between classes, uses kernel functions, und effective in high dimensions",
          nl: "SVM maximizes margin between classes, uses kernel functions, en effective in high dimensions"
        }
      },
      {
        question: {
          en: "How does Random Forest work?",
          es: "¿Cómo funciona Random Forest?",
          de: "Wie funktioniert Random Forest?",
          nl: "Hoe werkt Random Forest?"
        },
        options: [
          { en: "It combines multiple trees", es: "combines multiple trees", de: "combines multiple trees", nl: "combines multiple trees" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest combines multiple trees, uses bootstrap sampling, and averages predictions",
          es: "Random Forest combines multiple trees, uses bootstrap sampling, y averages predictions",
          de: "Random Forest combines multiple trees, uses bootstrap sampling, und averages predictions",
          nl: "Random Forest combines multiple trees, uses bootstrap sampling, en averages predictions"
        }
      },
      {
        question: {
          en: "How does Logistic Regression work?",
          es: "¿Cómo funciona Logistic Regression?",
          de: "Wie funktioniert Logistic Regression?",
          nl: "Hoe werkt Logistic Regression?"
        },
        options: [
          { en: "It uses sigmoid function", es: "uses sigmoid function", de: "uses sigmoid function", nl: "uses sigmoid function" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression uses sigmoid function, outputs probability, and binary classification",
          es: "Logistic Regression uses sigmoid function, outputs probability, y binary classification",
          de: "Logistic Regression uses sigmoid function, outputs probability, und binary classification",
          nl: "Logistic Regression uses sigmoid function, outputs probability, en binary classification"
        }
      },
      {
        question: {
          en: "How does KNN work?",
          es: "¿Cómo funciona KNN?",
          de: "Wie funktioniert KNN?",
          nl: "Hoe werkt KNN?"
        },
        options: [
          { en: "It distance-based algorithm", es: "distance-based algorithm", de: "distance-based algorithm", nl: "distance-based algorithm" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "KNN distance-based algorithm, k parameter is crucial, and no training phase",
          es: "KNN distance-based algorithm, k parameter is crucial, y no training phase",
          de: "KNN distance-based algorithm, k parameter is crucial, und no training phase",
          nl: "KNN distance-based algorithm, k parameter is crucial, en no training phase"
        }
      },
      {
        question: {
          en: "How does Naive Bayes work?",
          es: "¿Cómo funciona Naive Bayes?",
          de: "Wie funktioniert Naive Bayes?",
          nl: "Hoe werkt Naive Bayes?"
        },
        options: [
          { en: "It Bayes theorem", es: "Bayes theorem", de: "Bayes theorem", nl: "Bayes theorem" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes Bayes theorem, calculates posterior probability, and fast and scalable",
          es: "Naive Bayes Bayes theorem, calculates posterior probability, y fast and scalable",
          de: "Naive Bayes Bayes theorem, calculates posterior probability, und fast and scalable",
          nl: "Naive Bayes Bayes theorem, calculates posterior probability, en fast and scalable"
        }
      },
      {
        question: {
          en: "How does Gradient Descent work?",
          es: "¿Cómo funciona Gradient Descent?",
          de: "Wie funktioniert Gradient Descent?",
          nl: "Hoe werkt Gradient Descent?"
        },
        options: [
          { en: "It iterative optimization", es: "iterative optimization", de: "iterative optimization", nl: "iterative optimization" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent iterative optimization, learning rate parameter, and finds local minimum",
          es: "Gradient Descent iterative optimization, learning rate parameter, y finds local minimum",
          de: "Gradient Descent iterative optimization, learning rate parameter, und finds local minimum",
          nl: "Gradient Descent iterative optimization, learning rate parameter, en finds local minimum"
        }
      },
      {
        question: {
          en: "How does Neural Network work?",
          es: "¿Cómo funciona Neural Network?",
          de: "Wie funktioniert Neural Network?",
          nl: "Hoe werkt Neural Network?"
        },
        options: [
          { en: "It weighted connections", es: "weighted connections", de: "weighted connections", nl: "weighted connections" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network weighted connections, activation functions, and backpropagation training",
          es: "Neural Network weighted connections, activation functions, y backpropagation training",
          de: "Neural Network weighted connections, activation functions, und backpropagation training",
          nl: "Neural Network weighted connections, activation functions, en backpropagation training"
        }
      },
      {
        question: {
          en: "How does Decision Tree work?",
          es: "¿Cómo funciona Decision Tree?",
          de: "Wie funktioniert Decision Tree?",
          nl: "Hoe werkt Decision Tree?"
        },
        options: [
          { en: "It splits data based on features", es: "splits data based on features", de: "splits data based on features", nl: "splits data based on features" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Decision Tree splits data based on features, creates branches for decisions, and leaf nodes contain predictions",
          es: "Decision Tree splits data based on features, creates branches for decisions, y leaf nodes contain predictions",
          de: "Decision Tree splits data based on features, creates branches for decisions, und leaf nodes contain predictions",
          nl: "Decision Tree splits data based on features, creates branches for decisions, en leaf nodes contain predictions"
        }
      },
      {
        question: {
          en: "How does Linear Regression work?",
          es: "¿Cómo funciona Linear Regression?",
          de: "Wie funktioniert Linear Regression?",
          nl: "Hoe werkt Linear Regression?"
        },
        options: [
          { en: "It y = mx + b formula", es: "y = mx + b formula", de: "y = mx + b formula", nl: "y = mx + b formula" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Linear Regression y = mx + b formula, minimizes squared error, and assumes linear relationship",
          es: "Linear Regression y = mx + b formula, minimizes squared error, y assumes linear relationship",
          de: "Linear Regression y = mx + b formula, minimizes squared error, und assumes linear relationship",
          nl: "Linear Regression y = mx + b formula, minimizes squared error, en assumes linear relationship"
        }
      },
      {
        question: {
          en: "How does K-Means work?",
          es: "¿Cómo funciona K-Means?",
          de: "Wie funktioniert K-Means?",
          nl: "Hoe werkt K-Means?"
        },
        options: [
          { en: "It chooses k cluster centers", es: "chooses k cluster centers", de: "chooses k cluster centers", nl: "chooses k cluster centers" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "K-Means chooses k cluster centers, assigns points to nearest center, and iteratively updates centers",
          es: "K-Means chooses k cluster centers, assigns points to nearest center, y iteratively updates centers",
          de: "K-Means chooses k cluster centers, assigns points to nearest center, und iteratively updates centers",
          nl: "K-Means chooses k cluster centers, assigns points to nearest center, en iteratively updates centers"
        }
      },
      {
        question: {
          en: "How does SVM work?",
          es: "¿Cómo funciona SVM?",
          de: "Wie funktioniert SVM?",
          nl: "Hoe werkt SVM?"
        },
        options: [
          { en: "It maximizes margin between classes", es: "maximizes margin between classes", de: "maximizes margin between classes", nl: "maximizes margin between classes" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "SVM maximizes margin between classes, uses kernel functions, and effective in high dimensions",
          es: "SVM maximizes margin between classes, uses kernel functions, y effective in high dimensions",
          de: "SVM maximizes margin between classes, uses kernel functions, und effective in high dimensions",
          nl: "SVM maximizes margin between classes, uses kernel functions, en effective in high dimensions"
        }
      },
      {
        question: {
          en: "How does Random Forest work?",
          es: "¿Cómo funciona Random Forest?",
          de: "Wie funktioniert Random Forest?",
          nl: "Hoe werkt Random Forest?"
        },
        options: [
          { en: "It combines multiple trees", es: "combines multiple trees", de: "combines multiple trees", nl: "combines multiple trees" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest combines multiple trees, uses bootstrap sampling, and averages predictions",
          es: "Random Forest combines multiple trees, uses bootstrap sampling, y averages predictions",
          de: "Random Forest combines multiple trees, uses bootstrap sampling, und averages predictions",
          nl: "Random Forest combines multiple trees, uses bootstrap sampling, en averages predictions"
        }
      },
      {
        question: {
          en: "How does Logistic Regression work?",
          es: "¿Cómo funciona Logistic Regression?",
          de: "Wie funktioniert Logistic Regression?",
          nl: "Hoe werkt Logistic Regression?"
        },
        options: [
          { en: "It uses sigmoid function", es: "uses sigmoid function", de: "uses sigmoid function", nl: "uses sigmoid function" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic Regression uses sigmoid function, outputs probability, and binary classification",
          es: "Logistic Regression uses sigmoid function, outputs probability, y binary classification",
          de: "Logistic Regression uses sigmoid function, outputs probability, und binary classification",
          nl: "Logistic Regression uses sigmoid function, outputs probability, en binary classification"
        }
      },
      {
        question: {
          en: "How does KNN work?",
          es: "¿Cómo funciona KNN?",
          de: "Wie funktioniert KNN?",
          nl: "Hoe werkt KNN?"
        },
        options: [
          { en: "It distance-based algorithm", es: "distance-based algorithm", de: "distance-based algorithm", nl: "distance-based algorithm" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "KNN distance-based algorithm, k parameter is crucial, and no training phase",
          es: "KNN distance-based algorithm, k parameter is crucial, y no training phase",
          de: "KNN distance-based algorithm, k parameter is crucial, und no training phase",
          nl: "KNN distance-based algorithm, k parameter is crucial, en no training phase"
        }
      },
      {
        question: {
          en: "How does Naive Bayes work?",
          es: "¿Cómo funciona Naive Bayes?",
          de: "Wie funktioniert Naive Bayes?",
          nl: "Hoe werkt Naive Bayes?"
        },
        options: [
          { en: "It Bayes theorem", es: "Bayes theorem", de: "Bayes theorem", nl: "Bayes theorem" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes Bayes theorem, calculates posterior probability, and fast and scalable",
          es: "Naive Bayes Bayes theorem, calculates posterior probability, y fast and scalable",
          de: "Naive Bayes Bayes theorem, calculates posterior probability, und fast and scalable",
          nl: "Naive Bayes Bayes theorem, calculates posterior probability, en fast and scalable"
        }
      },
      {
        question: {
          en: "How does Gradient Descent work?",
          es: "¿Cómo funciona Gradient Descent?",
          de: "Wie funktioniert Gradient Descent?",
          nl: "Hoe werkt Gradient Descent?"
        },
        options: [
          { en: "It iterative optimization", es: "iterative optimization", de: "iterative optimization", nl: "iterative optimization" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Descent iterative optimization, learning rate parameter, and finds local minimum",
          es: "Gradient Descent iterative optimization, learning rate parameter, y finds local minimum",
          de: "Gradient Descent iterative optimization, learning rate parameter, und finds local minimum",
          nl: "Gradient Descent iterative optimization, learning rate parameter, en finds local minimum"
        }
      },
      {
        question: {
          en: "How does Neural Network work?",
          es: "¿Cómo funciona Neural Network?",
          de: "Wie funktioniert Neural Network?",
          nl: "Hoe werkt Neural Network?"
        },
        options: [
          { en: "It weighted connections", es: "weighted connections", de: "weighted connections", nl: "weighted connections" },
          { en: "It uses magic", es: "Usa magia", de: "Es verwendet Magie", nl: "Het gebruikt magie" },
          { en: "It guesses randomly", es: "Adivina al azar", de: "Es rät zufällig", nl: "Het raadt willekeurig" },
          { en: "It doesn\'t work", es: "No funciona", de: "Es funktioniert nicht", nl: "Het werkt niet" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Network weighted connections, activation functions, and backpropagation training",
          es: "Neural Network weighted connections, activation functions, y backpropagation training",
          de: "Neural Network weighted connections, activation functions, und backpropagation training",
          nl: "Neural Network weighted connections, activation functions, en backpropagation training"
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  }
})();