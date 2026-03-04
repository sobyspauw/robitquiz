(function() {
  const level7 = {
    questions: [
      {
        question: {
          en: "What is Ensemble Learning in ML?",
          es: "¿Qué es Ensemble Learning en ML?",
          de: "Was ist Ensemble Learning in ML?",
          nl: "Wat is Ensemble Learning in ML?"
        },
        options: [
          { en: "combining multiple models", es: "combining multiple models", de: "combining multiple models", nl: "combining multiple models" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          es: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          de: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          nl: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example"
        }
      },
      {
        question: {
          en: "What is Bagging in ML?",
          es: "¿Qué es Bagging en ML?",
          de: "Was ist Bagging in ML?",
          nl: "Wat is Bagging in ML?"
        },
        options: [
          { en: "Bootstrap Aggregating", es: "Bootstrap Aggregating", de: "Bootstrap Aggregating", nl: "Bootstrap Aggregating" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          es: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          de: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          nl: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest"
        }
      },
      {
        question: {
          en: "What is Boosting in ML?",
          es: "¿Qué es Boosting en ML?",
          de: "Was ist Boosting in ML?",
          nl: "Wat is Boosting in ML?"
        },
        options: [
          { en: "sequential training", es: "sequential training", de: "sequential training", nl: "sequential training" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          es: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          de: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          nl: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful"
        }
      },
      {
        question: {
          en: "What is XGBoost in ML?",
          es: "¿Qué es XGBoost en ML?",
          de: "Was ist XGBoost in ML?",
          nl: "Wat is XGBoost in ML?"
        },
        options: [
          { en: "Extreme Gradient Boosting", es: "Extreme Gradient Boosting", de: "Extreme Gradient Boosting", nl: "Extreme Gradient Boosting" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          es: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          de: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          nl: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework"
        }
      },
      {
        question: {
          en: "What is Cross-Validation in ML?",
          es: "¿Qué es Cross-Validation en ML?",
          de: "Was ist Cross-Validation in ML?",
          nl: "Wat is Cross-Validation in ML?"
        },
        options: [
          { en: "k-fold technique", es: "k-fold technique", de: "k-fold technique", nl: "k-fold technique" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          es: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          de: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          nl: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times"
        }
      },
      {
        question: {
          en: "What is Confusion Matrix in ML?",
          es: "¿Qué es Confusion Matrix en ML?",
          de: "Was ist Confusion Matrix in ML?",
          nl: "Wat is Confusion Matrix in ML?"
        },
        options: [
          { en: "classification evaluation", es: "classification evaluation", de: "classification evaluation", nl: "classification evaluation" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          es: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          de: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          nl: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics"
        }
      },
      {
        question: {
          en: "What is Precision in ML?",
          es: "¿Qué es Precision en ML?",
          de: "Was ist Precision in ML?",
          nl: "Wat is Precision in ML?"
        },
        options: [
          { en: "TP / (TP + FP)", es: "TP / (TP + FP)", de: "TP / (TP + FP)", nl: "TP / (TP + FP)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          es: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          de: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          nl: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric"
        }
      },
      {
        question: {
          en: "What is Recall in ML?",
          es: "¿Qué es Recall en ML?",
          de: "Was ist Recall in ML?",
          nl: "Wat is Recall in ML?"
        },
        options: [
          { en: "TP / (TP + FN)", es: "TP / (TP + FN)", de: "TP / (TP + FN)", nl: "TP / (TP + FN)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          es: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          de: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          nl: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric"
        }
      },
      {
        question: {
          en: "What is F1 Score in ML?",
          es: "¿Qué es F1 Score en ML?",
          de: "Was ist F1 Score in ML?",
          nl: "Wat is F1 Score in ML?"
        },
        options: [
          { en: "harmonic mean of precision and recall", es: "harmonic mean of precision and recall", de: "harmonic mean of precision and recall", nl: "harmonic mean of precision and recall" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          es: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          de: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          nl: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric"
        }
      },
      {
        question: {
          en: "What is ROC Curve in ML?",
          es: "¿Qué es ROC Curve en ML?",
          de: "Was ist ROC Curve in ML?",
          nl: "Wat is ROC Curve in ML?"
        },
        options: [
          { en: "Receiver Operating Characteristic", es: "Receiver Operating Characteristic", de: "Receiver Operating Characteristic", nl: "Receiver Operating Characteristic" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          es: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          de: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          nl: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis"
        }
      },
      {
        question: {
          en: "What is Ensemble Learning in ML?",
          es: "¿Qué es Ensemble Learning en ML?",
          de: "Was ist Ensemble Learning in ML?",
          nl: "Wat is Ensemble Learning in ML?"
        },
        options: [
          { en: "combining multiple models", es: "combining multiple models", de: "combining multiple models", nl: "combining multiple models" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          es: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          de: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          nl: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example"
        }
      },
      {
        question: {
          en: "What is Bagging in ML?",
          es: "¿Qué es Bagging en ML?",
          de: "Was ist Bagging in ML?",
          nl: "Wat is Bagging in ML?"
        },
        options: [
          { en: "Bootstrap Aggregating", es: "Bootstrap Aggregating", de: "Bootstrap Aggregating", nl: "Bootstrap Aggregating" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          es: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          de: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          nl: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest"
        }
      },
      {
        question: {
          en: "What is Boosting in ML?",
          es: "¿Qué es Boosting en ML?",
          de: "Was ist Boosting in ML?",
          nl: "Wat is Boosting in ML?"
        },
        options: [
          { en: "sequential training", es: "sequential training", de: "sequential training", nl: "sequential training" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          es: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          de: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          nl: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful"
        }
      },
      {
        question: {
          en: "What is XGBoost in ML?",
          es: "¿Qué es XGBoost en ML?",
          de: "Was ist XGBoost in ML?",
          nl: "Wat is XGBoost in ML?"
        },
        options: [
          { en: "Extreme Gradient Boosting", es: "Extreme Gradient Boosting", de: "Extreme Gradient Boosting", nl: "Extreme Gradient Boosting" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          es: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          de: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          nl: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework"
        }
      },
      {
        question: {
          en: "What is Cross-Validation in ML?",
          es: "¿Qué es Cross-Validation en ML?",
          de: "Was ist Cross-Validation in ML?",
          nl: "Wat is Cross-Validation in ML?"
        },
        options: [
          { en: "k-fold technique", es: "k-fold technique", de: "k-fold technique", nl: "k-fold technique" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          es: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          de: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          nl: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times"
        }
      },
      {
        question: {
          en: "What is Confusion Matrix in ML?",
          es: "¿Qué es Confusion Matrix en ML?",
          de: "Was ist Confusion Matrix in ML?",
          nl: "Wat is Confusion Matrix in ML?"
        },
        options: [
          { en: "classification evaluation", es: "classification evaluation", de: "classification evaluation", nl: "classification evaluation" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          es: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          de: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          nl: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics"
        }
      },
      {
        question: {
          en: "What is Precision in ML?",
          es: "¿Qué es Precision en ML?",
          de: "Was ist Precision in ML?",
          nl: "Wat is Precision in ML?"
        },
        options: [
          { en: "TP / (TP + FP)", es: "TP / (TP + FP)", de: "TP / (TP + FP)", nl: "TP / (TP + FP)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          es: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          de: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          nl: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric"
        }
      },
      {
        question: {
          en: "What is Recall in ML?",
          es: "¿Qué es Recall en ML?",
          de: "Was ist Recall in ML?",
          nl: "Wat is Recall in ML?"
        },
        options: [
          { en: "TP / (TP + FN)", es: "TP / (TP + FN)", de: "TP / (TP + FN)", nl: "TP / (TP + FN)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          es: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          de: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          nl: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric"
        }
      },
      {
        question: {
          en: "What is F1 Score in ML?",
          es: "¿Qué es F1 Score en ML?",
          de: "Was ist F1 Score in ML?",
          nl: "Wat is F1 Score in ML?"
        },
        options: [
          { en: "harmonic mean of precision and recall", es: "harmonic mean of precision and recall", de: "harmonic mean of precision and recall", nl: "harmonic mean of precision and recall" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          es: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          de: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          nl: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric"
        }
      },
      {
        question: {
          en: "What is ROC Curve in ML?",
          es: "¿Qué es ROC Curve en ML?",
          de: "Was ist ROC Curve in ML?",
          nl: "Wat is ROC Curve in ML?"
        },
        options: [
          { en: "Receiver Operating Characteristic", es: "Receiver Operating Characteristic", de: "Receiver Operating Characteristic", nl: "Receiver Operating Characteristic" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          es: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          de: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          nl: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis"
        }
      },
      {
        question: {
          en: "What is Ensemble Learning in ML?",
          es: "¿Qué es Ensemble Learning en ML?",
          de: "Was ist Ensemble Learning in ML?",
          nl: "Wat is Ensemble Learning in ML?"
        },
        options: [
          { en: "combining multiple models", es: "combining multiple models", de: "combining multiple models", nl: "combining multiple models" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          es: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          de: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          nl: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example"
        }
      },
      {
        question: {
          en: "What is Bagging in ML?",
          es: "¿Qué es Bagging en ML?",
          de: "Was ist Bagging in ML?",
          nl: "Wat is Bagging in ML?"
        },
        options: [
          { en: "Bootstrap Aggregating", es: "Bootstrap Aggregating", de: "Bootstrap Aggregating", nl: "Bootstrap Aggregating" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          es: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          de: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          nl: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest"
        }
      },
      {
        question: {
          en: "What is Boosting in ML?",
          es: "¿Qué es Boosting en ML?",
          de: "Was ist Boosting in ML?",
          nl: "Wat is Boosting in ML?"
        },
        options: [
          { en: "sequential training", es: "sequential training", de: "sequential training", nl: "sequential training" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          es: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          de: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          nl: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful"
        }
      },
      {
        question: {
          en: "What is XGBoost in ML?",
          es: "¿Qué es XGBoost en ML?",
          de: "Was ist XGBoost in ML?",
          nl: "Wat is XGBoost in ML?"
        },
        options: [
          { en: "Extreme Gradient Boosting", es: "Extreme Gradient Boosting", de: "Extreme Gradient Boosting", nl: "Extreme Gradient Boosting" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          es: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          de: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          nl: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework"
        }
      },
      {
        question: {
          en: "What is Cross-Validation in ML?",
          es: "¿Qué es Cross-Validation en ML?",
          de: "Was ist Cross-Validation in ML?",
          nl: "Wat is Cross-Validation in ML?"
        },
        options: [
          { en: "k-fold technique", es: "k-fold technique", de: "k-fold technique", nl: "k-fold technique" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          es: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          de: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          nl: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times"
        }
      },
      {
        question: {
          en: "What is Confusion Matrix in ML?",
          es: "¿Qué es Confusion Matrix en ML?",
          de: "Was ist Confusion Matrix in ML?",
          nl: "Wat is Confusion Matrix in ML?"
        },
        options: [
          { en: "classification evaluation", es: "classification evaluation", de: "classification evaluation", nl: "classification evaluation" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          es: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          de: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          nl: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics"
        }
      },
      {
        question: {
          en: "What is Precision in ML?",
          es: "¿Qué es Precision en ML?",
          de: "Was ist Precision in ML?",
          nl: "Wat is Precision in ML?"
        },
        options: [
          { en: "TP / (TP + FP)", es: "TP / (TP + FP)", de: "TP / (TP + FP)", nl: "TP / (TP + FP)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          es: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          de: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          nl: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric"
        }
      },
      {
        question: {
          en: "What is Recall in ML?",
          es: "¿Qué es Recall en ML?",
          de: "Was ist Recall in ML?",
          nl: "Wat is Recall in ML?"
        },
        options: [
          { en: "TP / (TP + FN)", es: "TP / (TP + FN)", de: "TP / (TP + FN)", nl: "TP / (TP + FN)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          es: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          de: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          nl: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric"
        }
      },
      {
        question: {
          en: "What is F1 Score in ML?",
          es: "¿Qué es F1 Score en ML?",
          de: "Was ist F1 Score in ML?",
          nl: "Wat is F1 Score in ML?"
        },
        options: [
          { en: "harmonic mean of precision and recall", es: "harmonic mean of precision and recall", de: "harmonic mean of precision and recall", nl: "harmonic mean of precision and recall" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          es: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          de: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          nl: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric"
        }
      },
      {
        question: {
          en: "What is ROC Curve in ML?",
          es: "¿Qué es ROC Curve en ML?",
          de: "Was ist ROC Curve in ML?",
          nl: "Wat is ROC Curve in ML?"
        },
        options: [
          { en: "Receiver Operating Characteristic", es: "Receiver Operating Characteristic", de: "Receiver Operating Characteristic", nl: "Receiver Operating Characteristic" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          es: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          de: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          nl: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis"
        }
      },
      {
        question: {
          en: "What is Ensemble Learning in ML?",
          es: "¿Qué es Ensemble Learning en ML?",
          de: "Was ist Ensemble Learning in ML?",
          nl: "Wat is Ensemble Learning in ML?"
        },
        options: [
          { en: "combining multiple models", es: "combining multiple models", de: "combining multiple models", nl: "combining multiple models" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          es: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          de: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          nl: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example"
        }
      },
      {
        question: {
          en: "What is Bagging in ML?",
          es: "¿Qué es Bagging en ML?",
          de: "Was ist Bagging in ML?",
          nl: "Wat is Bagging in ML?"
        },
        options: [
          { en: "Bootstrap Aggregating", es: "Bootstrap Aggregating", de: "Bootstrap Aggregating", nl: "Bootstrap Aggregating" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          es: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          de: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          nl: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest"
        }
      },
      {
        question: {
          en: "What is Boosting in ML?",
          es: "¿Qué es Boosting en ML?",
          de: "Was ist Boosting in ML?",
          nl: "Wat is Boosting in ML?"
        },
        options: [
          { en: "sequential training", es: "sequential training", de: "sequential training", nl: "sequential training" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          es: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          de: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          nl: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful"
        }
      },
      {
        question: {
          en: "What is XGBoost in ML?",
          es: "¿Qué es XGBoost en ML?",
          de: "Was ist XGBoost in ML?",
          nl: "Wat is XGBoost in ML?"
        },
        options: [
          { en: "Extreme Gradient Boosting", es: "Extreme Gradient Boosting", de: "Extreme Gradient Boosting", nl: "Extreme Gradient Boosting" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          es: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          de: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          nl: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework"
        }
      },
      {
        question: {
          en: "What is Cross-Validation in ML?",
          es: "¿Qué es Cross-Validation en ML?",
          de: "Was ist Cross-Validation in ML?",
          nl: "Wat is Cross-Validation in ML?"
        },
        options: [
          { en: "k-fold technique", es: "k-fold technique", de: "k-fold technique", nl: "k-fold technique" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          es: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          de: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          nl: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times"
        }
      },
      {
        question: {
          en: "What is Confusion Matrix in ML?",
          es: "¿Qué es Confusion Matrix en ML?",
          de: "Was ist Confusion Matrix in ML?",
          nl: "Wat is Confusion Matrix in ML?"
        },
        options: [
          { en: "classification evaluation", es: "classification evaluation", de: "classification evaluation", nl: "classification evaluation" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          es: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          de: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          nl: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics"
        }
      },
      {
        question: {
          en: "What is Precision in ML?",
          es: "¿Qué es Precision en ML?",
          de: "Was ist Precision in ML?",
          nl: "Wat is Precision in ML?"
        },
        options: [
          { en: "TP / (TP + FP)", es: "TP / (TP + FP)", de: "TP / (TP + FP)", nl: "TP / (TP + FP)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          es: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          de: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          nl: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric"
        }
      },
      {
        question: {
          en: "What is Recall in ML?",
          es: "¿Qué es Recall en ML?",
          de: "Was ist Recall in ML?",
          nl: "Wat is Recall in ML?"
        },
        options: [
          { en: "TP / (TP + FN)", es: "TP / (TP + FN)", de: "TP / (TP + FN)", nl: "TP / (TP + FN)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          es: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          de: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          nl: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric"
        }
      },
      {
        question: {
          en: "What is F1 Score in ML?",
          es: "¿Qué es F1 Score en ML?",
          de: "Was ist F1 Score in ML?",
          nl: "Wat is F1 Score in ML?"
        },
        options: [
          { en: "harmonic mean of precision and recall", es: "harmonic mean of precision and recall", de: "harmonic mean of precision and recall", nl: "harmonic mean of precision and recall" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          es: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          de: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          nl: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric"
        }
      },
      {
        question: {
          en: "What is ROC Curve in ML?",
          es: "¿Qué es ROC Curve en ML?",
          de: "Was ist ROC Curve in ML?",
          nl: "Wat is ROC Curve in ML?"
        },
        options: [
          { en: "Receiver Operating Characteristic", es: "Receiver Operating Characteristic", de: "Receiver Operating Characteristic", nl: "Receiver Operating Characteristic" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          es: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          de: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          nl: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis"
        }
      },
      {
        question: {
          en: "What is Ensemble Learning in ML?",
          es: "¿Qué es Ensemble Learning en ML?",
          de: "Was ist Ensemble Learning in ML?",
          nl: "Wat is Ensemble Learning in ML?"
        },
        options: [
          { en: "combining multiple models", es: "combining multiple models", de: "combining multiple models", nl: "combining multiple models" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          es: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          de: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          nl: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example"
        }
      },
      {
        question: {
          en: "What is Bagging in ML?",
          es: "¿Qué es Bagging en ML?",
          de: "Was ist Bagging in ML?",
          nl: "Wat is Bagging in ML?"
        },
        options: [
          { en: "Bootstrap Aggregating", es: "Bootstrap Aggregating", de: "Bootstrap Aggregating", nl: "Bootstrap Aggregating" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          es: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          de: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          nl: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest"
        }
      },
      {
        question: {
          en: "What is Boosting in ML?",
          es: "¿Qué es Boosting en ML?",
          de: "Was ist Boosting in ML?",
          nl: "Wat is Boosting in ML?"
        },
        options: [
          { en: "sequential training", es: "sequential training", de: "sequential training", nl: "sequential training" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          es: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          de: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          nl: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful"
        }
      },
      {
        question: {
          en: "What is XGBoost in ML?",
          es: "¿Qué es XGBoost en ML?",
          de: "Was ist XGBoost in ML?",
          nl: "Wat is XGBoost in ML?"
        },
        options: [
          { en: "Extreme Gradient Boosting", es: "Extreme Gradient Boosting", de: "Extreme Gradient Boosting", nl: "Extreme Gradient Boosting" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          es: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          de: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          nl: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework"
        }
      },
      {
        question: {
          en: "What is Cross-Validation in ML?",
          es: "¿Qué es Cross-Validation en ML?",
          de: "Was ist Cross-Validation in ML?",
          nl: "Wat is Cross-Validation in ML?"
        },
        options: [
          { en: "k-fold technique", es: "k-fold technique", de: "k-fold technique", nl: "k-fold technique" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          es: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          de: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          nl: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times"
        }
      },
      {
        question: {
          en: "What is Confusion Matrix in ML?",
          es: "¿Qué es Confusion Matrix en ML?",
          de: "Was ist Confusion Matrix in ML?",
          nl: "Wat is Confusion Matrix in ML?"
        },
        options: [
          { en: "classification evaluation", es: "classification evaluation", de: "classification evaluation", nl: "classification evaluation" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          es: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          de: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          nl: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics"
        }
      },
      {
        question: {
          en: "What is Precision in ML?",
          es: "¿Qué es Precision en ML?",
          de: "Was ist Precision in ML?",
          nl: "Wat is Precision in ML?"
        },
        options: [
          { en: "TP / (TP + FP)", es: "TP / (TP + FP)", de: "TP / (TP + FP)", nl: "TP / (TP + FP)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          es: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          de: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          nl: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric"
        }
      },
      {
        question: {
          en: "What is Recall in ML?",
          es: "¿Qué es Recall en ML?",
          de: "Was ist Recall in ML?",
          nl: "Wat is Recall in ML?"
        },
        options: [
          { en: "TP / (TP + FN)", es: "TP / (TP + FN)", de: "TP / (TP + FN)", nl: "TP / (TP + FN)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          es: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          de: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          nl: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric"
        }
      },
      {
        question: {
          en: "What is F1 Score in ML?",
          es: "¿Qué es F1 Score en ML?",
          de: "Was ist F1 Score in ML?",
          nl: "Wat is F1 Score in ML?"
        },
        options: [
          { en: "harmonic mean of precision and recall", es: "harmonic mean of precision and recall", de: "harmonic mean of precision and recall", nl: "harmonic mean of precision and recall" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          es: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          de: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          nl: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric"
        }
      },
      {
        question: {
          en: "What is ROC Curve in ML?",
          es: "¿Qué es ROC Curve en ML?",
          de: "Was ist ROC Curve in ML?",
          nl: "Wat is ROC Curve in ML?"
        },
        options: [
          { en: "Receiver Operating Characteristic", es: "Receiver Operating Characteristic", de: "Receiver Operating Characteristic", nl: "Receiver Operating Characteristic" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          es: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          de: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          nl: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis"
        }
      },
      {
        question: {
          en: "What is Ensemble Learning in ML?",
          es: "¿Qué es Ensemble Learning en ML?",
          de: "Was ist Ensemble Learning in ML?",
          nl: "Wat is Ensemble Learning in ML?"
        },
        options: [
          { en: "combining multiple models", es: "combining multiple models", de: "combining multiple models", nl: "combining multiple models" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          es: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          de: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          nl: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example"
        }
      },
      {
        question: {
          en: "What is Bagging in ML?",
          es: "¿Qué es Bagging en ML?",
          de: "Was ist Bagging in ML?",
          nl: "Wat is Bagging in ML?"
        },
        options: [
          { en: "Bootstrap Aggregating", es: "Bootstrap Aggregating", de: "Bootstrap Aggregating", nl: "Bootstrap Aggregating" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          es: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          de: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          nl: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest"
        }
      },
      {
        question: {
          en: "What is Boosting in ML?",
          es: "¿Qué es Boosting en ML?",
          de: "Was ist Boosting in ML?",
          nl: "Wat is Boosting in ML?"
        },
        options: [
          { en: "sequential training", es: "sequential training", de: "sequential training", nl: "sequential training" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          es: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          de: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          nl: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful"
        }
      },
      {
        question: {
          en: "What is XGBoost in ML?",
          es: "¿Qué es XGBoost en ML?",
          de: "Was ist XGBoost in ML?",
          nl: "Wat is XGBoost in ML?"
        },
        options: [
          { en: "Extreme Gradient Boosting", es: "Extreme Gradient Boosting", de: "Extreme Gradient Boosting", nl: "Extreme Gradient Boosting" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          es: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          de: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          nl: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework"
        }
      },
      {
        question: {
          en: "What is Cross-Validation in ML?",
          es: "¿Qué es Cross-Validation en ML?",
          de: "Was ist Cross-Validation in ML?",
          nl: "Wat is Cross-Validation in ML?"
        },
        options: [
          { en: "k-fold technique", es: "k-fold technique", de: "k-fold technique", nl: "k-fold technique" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          es: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          de: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          nl: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times"
        }
      },
      {
        question: {
          en: "What is Confusion Matrix in ML?",
          es: "¿Qué es Confusion Matrix en ML?",
          de: "Was ist Confusion Matrix in ML?",
          nl: "Wat is Confusion Matrix in ML?"
        },
        options: [
          { en: "classification evaluation", es: "classification evaluation", de: "classification evaluation", nl: "classification evaluation" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          es: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          de: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          nl: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics"
        }
      },
      {
        question: {
          en: "What is Precision in ML?",
          es: "¿Qué es Precision en ML?",
          de: "Was ist Precision in ML?",
          nl: "Wat is Precision in ML?"
        },
        options: [
          { en: "TP / (TP + FP)", es: "TP / (TP + FP)", de: "TP / (TP + FP)", nl: "TP / (TP + FP)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          es: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          de: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          nl: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric"
        }
      },
      {
        question: {
          en: "What is Recall in ML?",
          es: "¿Qué es Recall en ML?",
          de: "Was ist Recall in ML?",
          nl: "Wat is Recall in ML?"
        },
        options: [
          { en: "TP / (TP + FN)", es: "TP / (TP + FN)", de: "TP / (TP + FN)", nl: "TP / (TP + FN)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          es: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          de: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          nl: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric"
        }
      },
      {
        question: {
          en: "What is F1 Score in ML?",
          es: "¿Qué es F1 Score en ML?",
          de: "Was ist F1 Score in ML?",
          nl: "Wat is F1 Score in ML?"
        },
        options: [
          { en: "harmonic mean of precision and recall", es: "harmonic mean of precision and recall", de: "harmonic mean of precision and recall", nl: "harmonic mean of precision and recall" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          es: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          de: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          nl: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric"
        }
      },
      {
        question: {
          en: "What is ROC Curve in ML?",
          es: "¿Qué es ROC Curve en ML?",
          de: "Was ist ROC Curve in ML?",
          nl: "Wat is ROC Curve in ML?"
        },
        options: [
          { en: "Receiver Operating Characteristic", es: "Receiver Operating Characteristic", de: "Receiver Operating Characteristic", nl: "Receiver Operating Characteristic" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          es: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          de: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          nl: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis"
        }
      },
      {
        question: {
          en: "What is Ensemble Learning in ML?",
          es: "¿Qué es Ensemble Learning en ML?",
          de: "Was ist Ensemble Learning in ML?",
          nl: "Wat is Ensemble Learning in ML?"
        },
        options: [
          { en: "combining multiple models", es: "combining multiple models", de: "combining multiple models", nl: "combining multiple models" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          es: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          de: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          nl: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example"
        }
      },
      {
        question: {
          en: "What is Bagging in ML?",
          es: "¿Qué es Bagging en ML?",
          de: "Was ist Bagging in ML?",
          nl: "Wat is Bagging in ML?"
        },
        options: [
          { en: "Bootstrap Aggregating", es: "Bootstrap Aggregating", de: "Bootstrap Aggregating", nl: "Bootstrap Aggregating" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          es: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          de: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          nl: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest"
        }
      },
      {
        question: {
          en: "What is Boosting in ML?",
          es: "¿Qué es Boosting en ML?",
          de: "Was ist Boosting in ML?",
          nl: "Wat is Boosting in ML?"
        },
        options: [
          { en: "sequential training", es: "sequential training", de: "sequential training", nl: "sequential training" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          es: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          de: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          nl: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful"
        }
      },
      {
        question: {
          en: "What is XGBoost in ML?",
          es: "¿Qué es XGBoost en ML?",
          de: "Was ist XGBoost in ML?",
          nl: "Wat is XGBoost in ML?"
        },
        options: [
          { en: "Extreme Gradient Boosting", es: "Extreme Gradient Boosting", de: "Extreme Gradient Boosting", nl: "Extreme Gradient Boosting" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          es: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          de: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          nl: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework"
        }
      },
      {
        question: {
          en: "What is Cross-Validation in ML?",
          es: "¿Qué es Cross-Validation en ML?",
          de: "Was ist Cross-Validation in ML?",
          nl: "Wat is Cross-Validation in ML?"
        },
        options: [
          { en: "k-fold technique", es: "k-fold technique", de: "k-fold technique", nl: "k-fold technique" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          es: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          de: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          nl: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times"
        }
      },
      {
        question: {
          en: "What is Confusion Matrix in ML?",
          es: "¿Qué es Confusion Matrix en ML?",
          de: "Was ist Confusion Matrix in ML?",
          nl: "Wat is Confusion Matrix in ML?"
        },
        options: [
          { en: "classification evaluation", es: "classification evaluation", de: "classification evaluation", nl: "classification evaluation" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          es: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          de: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          nl: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics"
        }
      },
      {
        question: {
          en: "What is Precision in ML?",
          es: "¿Qué es Precision en ML?",
          de: "Was ist Precision in ML?",
          nl: "Wat is Precision in ML?"
        },
        options: [
          { en: "TP / (TP + FP)", es: "TP / (TP + FP)", de: "TP / (TP + FP)", nl: "TP / (TP + FP)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          es: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          de: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          nl: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric"
        }
      },
      {
        question: {
          en: "What is Recall in ML?",
          es: "¿Qué es Recall en ML?",
          de: "Was ist Recall in ML?",
          nl: "Wat is Recall in ML?"
        },
        options: [
          { en: "TP / (TP + FN)", es: "TP / (TP + FN)", de: "TP / (TP + FN)", nl: "TP / (TP + FN)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          es: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          de: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          nl: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric"
        }
      },
      {
        question: {
          en: "What is F1 Score in ML?",
          es: "¿Qué es F1 Score en ML?",
          de: "Was ist F1 Score in ML?",
          nl: "Wat is F1 Score in ML?"
        },
        options: [
          { en: "harmonic mean of precision and recall", es: "harmonic mean of precision and recall", de: "harmonic mean of precision and recall", nl: "harmonic mean of precision and recall" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          es: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          de: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          nl: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric"
        }
      },
      {
        question: {
          en: "What is ROC Curve in ML?",
          es: "¿Qué es ROC Curve en ML?",
          de: "Was ist ROC Curve in ML?",
          nl: "Wat is ROC Curve in ML?"
        },
        options: [
          { en: "Receiver Operating Characteristic", es: "Receiver Operating Characteristic", de: "Receiver Operating Characteristic", nl: "Receiver Operating Characteristic" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          es: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          de: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          nl: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis"
        }
      },
      {
        question: {
          en: "What is Ensemble Learning in ML?",
          es: "¿Qué es Ensemble Learning en ML?",
          de: "Was ist Ensemble Learning in ML?",
          nl: "Wat is Ensemble Learning in ML?"
        },
        options: [
          { en: "combining multiple models", es: "combining multiple models", de: "combining multiple models", nl: "combining multiple models" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          es: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          de: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          nl: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example"
        }
      },
      {
        question: {
          en: "What is Bagging in ML?",
          es: "¿Qué es Bagging en ML?",
          de: "Was ist Bagging in ML?",
          nl: "Wat is Bagging in ML?"
        },
        options: [
          { en: "Bootstrap Aggregating", es: "Bootstrap Aggregating", de: "Bootstrap Aggregating", nl: "Bootstrap Aggregating" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          es: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          de: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          nl: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest"
        }
      },
      {
        question: {
          en: "What is Boosting in ML?",
          es: "¿Qué es Boosting en ML?",
          de: "Was ist Boosting in ML?",
          nl: "Wat is Boosting in ML?"
        },
        options: [
          { en: "sequential training", es: "sequential training", de: "sequential training", nl: "sequential training" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          es: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          de: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          nl: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful"
        }
      },
      {
        question: {
          en: "What is XGBoost in ML?",
          es: "¿Qué es XGBoost en ML?",
          de: "Was ist XGBoost in ML?",
          nl: "Wat is XGBoost in ML?"
        },
        options: [
          { en: "Extreme Gradient Boosting", es: "Extreme Gradient Boosting", de: "Extreme Gradient Boosting", nl: "Extreme Gradient Boosting" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          es: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          de: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          nl: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework"
        }
      },
      {
        question: {
          en: "What is Cross-Validation in ML?",
          es: "¿Qué es Cross-Validation en ML?",
          de: "Was ist Cross-Validation in ML?",
          nl: "Wat is Cross-Validation in ML?"
        },
        options: [
          { en: "k-fold technique", es: "k-fold technique", de: "k-fold technique", nl: "k-fold technique" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          es: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          de: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          nl: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times"
        }
      },
      {
        question: {
          en: "What is Confusion Matrix in ML?",
          es: "¿Qué es Confusion Matrix en ML?",
          de: "Was ist Confusion Matrix in ML?",
          nl: "Wat is Confusion Matrix in ML?"
        },
        options: [
          { en: "classification evaluation", es: "classification evaluation", de: "classification evaluation", nl: "classification evaluation" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          es: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          de: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          nl: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics"
        }
      },
      {
        question: {
          en: "What is Precision in ML?",
          es: "¿Qué es Precision en ML?",
          de: "Was ist Precision in ML?",
          nl: "Wat is Precision in ML?"
        },
        options: [
          { en: "TP / (TP + FP)", es: "TP / (TP + FP)", de: "TP / (TP + FP)", nl: "TP / (TP + FP)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          es: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          de: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          nl: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric"
        }
      },
      {
        question: {
          en: "What is Recall in ML?",
          es: "¿Qué es Recall en ML?",
          de: "Was ist Recall in ML?",
          nl: "Wat is Recall in ML?"
        },
        options: [
          { en: "TP / (TP + FN)", es: "TP / (TP + FN)", de: "TP / (TP + FN)", nl: "TP / (TP + FN)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          es: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          de: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          nl: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric"
        }
      },
      {
        question: {
          en: "What is F1 Score in ML?",
          es: "¿Qué es F1 Score en ML?",
          de: "Was ist F1 Score in ML?",
          nl: "Wat is F1 Score in ML?"
        },
        options: [
          { en: "harmonic mean of precision and recall", es: "harmonic mean of precision and recall", de: "harmonic mean of precision and recall", nl: "harmonic mean of precision and recall" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          es: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          de: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          nl: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric"
        }
      },
      {
        question: {
          en: "What is ROC Curve in ML?",
          es: "¿Qué es ROC Curve en ML?",
          de: "Was ist ROC Curve in ML?",
          nl: "Wat is ROC Curve in ML?"
        },
        options: [
          { en: "Receiver Operating Characteristic", es: "Receiver Operating Characteristic", de: "Receiver Operating Characteristic", nl: "Receiver Operating Characteristic" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          es: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          de: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          nl: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis"
        }
      },
      {
        question: {
          en: "What is Ensemble Learning in ML?",
          es: "¿Qué es Ensemble Learning en ML?",
          de: "Was ist Ensemble Learning in ML?",
          nl: "Wat is Ensemble Learning in ML?"
        },
        options: [
          { en: "combining multiple models", es: "combining multiple models", de: "combining multiple models", nl: "combining multiple models" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          es: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          de: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          nl: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example"
        }
      },
      {
        question: {
          en: "What is Bagging in ML?",
          es: "¿Qué es Bagging en ML?",
          de: "Was ist Bagging in ML?",
          nl: "Wat is Bagging in ML?"
        },
        options: [
          { en: "Bootstrap Aggregating", es: "Bootstrap Aggregating", de: "Bootstrap Aggregating", nl: "Bootstrap Aggregating" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          es: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          de: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          nl: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest"
        }
      },
      {
        question: {
          en: "What is Boosting in ML?",
          es: "¿Qué es Boosting en ML?",
          de: "Was ist Boosting in ML?",
          nl: "Wat is Boosting in ML?"
        },
        options: [
          { en: "sequential training", es: "sequential training", de: "sequential training", nl: "sequential training" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          es: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          de: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          nl: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful"
        }
      },
      {
        question: {
          en: "What is XGBoost in ML?",
          es: "¿Qué es XGBoost en ML?",
          de: "Was ist XGBoost in ML?",
          nl: "Wat is XGBoost in ML?"
        },
        options: [
          { en: "Extreme Gradient Boosting", es: "Extreme Gradient Boosting", de: "Extreme Gradient Boosting", nl: "Extreme Gradient Boosting" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          es: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          de: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          nl: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework"
        }
      },
      {
        question: {
          en: "What is Cross-Validation in ML?",
          es: "¿Qué es Cross-Validation en ML?",
          de: "Was ist Cross-Validation in ML?",
          nl: "Wat is Cross-Validation in ML?"
        },
        options: [
          { en: "k-fold technique", es: "k-fold technique", de: "k-fold technique", nl: "k-fold technique" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          es: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          de: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          nl: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times"
        }
      },
      {
        question: {
          en: "What is Confusion Matrix in ML?",
          es: "¿Qué es Confusion Matrix en ML?",
          de: "Was ist Confusion Matrix in ML?",
          nl: "Wat is Confusion Matrix in ML?"
        },
        options: [
          { en: "classification evaluation", es: "classification evaluation", de: "classification evaluation", nl: "classification evaluation" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          es: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          de: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          nl: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics"
        }
      },
      {
        question: {
          en: "What is Precision in ML?",
          es: "¿Qué es Precision en ML?",
          de: "Was ist Precision in ML?",
          nl: "Wat is Precision in ML?"
        },
        options: [
          { en: "TP / (TP + FP)", es: "TP / (TP + FP)", de: "TP / (TP + FP)", nl: "TP / (TP + FP)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          es: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          de: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          nl: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric"
        }
      },
      {
        question: {
          en: "What is Recall in ML?",
          es: "¿Qué es Recall en ML?",
          de: "Was ist Recall in ML?",
          nl: "Wat is Recall in ML?"
        },
        options: [
          { en: "TP / (TP + FN)", es: "TP / (TP + FN)", de: "TP / (TP + FN)", nl: "TP / (TP + FN)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          es: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          de: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          nl: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric"
        }
      },
      {
        question: {
          en: "What is F1 Score in ML?",
          es: "¿Qué es F1 Score en ML?",
          de: "Was ist F1 Score in ML?",
          nl: "Wat is F1 Score in ML?"
        },
        options: [
          { en: "harmonic mean of precision and recall", es: "harmonic mean of precision and recall", de: "harmonic mean of precision and recall", nl: "harmonic mean of precision and recall" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          es: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          de: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          nl: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric"
        }
      },
      {
        question: {
          en: "What is ROC Curve in ML?",
          es: "¿Qué es ROC Curve en ML?",
          de: "Was ist ROC Curve in ML?",
          nl: "Wat is ROC Curve in ML?"
        },
        options: [
          { en: "Receiver Operating Characteristic", es: "Receiver Operating Characteristic", de: "Receiver Operating Characteristic", nl: "Receiver Operating Characteristic" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          es: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          de: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          nl: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis"
        }
      },
      {
        question: {
          en: "What is Ensemble Learning in ML?",
          es: "¿Qué es Ensemble Learning en ML?",
          de: "Was ist Ensemble Learning in ML?",
          nl: "Wat is Ensemble Learning in ML?"
        },
        options: [
          { en: "combining multiple models", es: "combining multiple models", de: "combining multiple models", nl: "combining multiple models" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          es: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          de: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example",
          nl: "Ensemble Learning: combining multiple models. better than single model. reduces variance and bias. Random Forest is example"
        }
      },
      {
        question: {
          en: "What is Bagging in ML?",
          es: "¿Qué es Bagging en ML?",
          de: "Was ist Bagging in ML?",
          nl: "Wat is Bagging in ML?"
        },
        options: [
          { en: "Bootstrap Aggregating", es: "Bootstrap Aggregating", de: "Bootstrap Aggregating", nl: "Bootstrap Aggregating" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          es: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          de: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest",
          nl: "Bagging: Bootstrap Aggregating. trains on random subsets. reduces overfitting. used in Random Forest"
        }
      },
      {
        question: {
          en: "What is Boosting in ML?",
          es: "¿Qué es Boosting en ML?",
          de: "Was ist Boosting in ML?",
          nl: "Wat is Boosting in ML?"
        },
        options: [
          { en: "sequential training", es: "sequential training", de: "sequential training", nl: "sequential training" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          es: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          de: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful",
          nl: "Boosting: sequential training. focuses on errors. AdaBoost, XGBoost. very powerful"
        }
      },
      {
        question: {
          en: "What is XGBoost in ML?",
          es: "¿Qué es XGBoost en ML?",
          de: "Was ist XGBoost in ML?",
          nl: "Wat is XGBoost in ML?"
        },
        options: [
          { en: "Extreme Gradient Boosting", es: "Extreme Gradient Boosting", de: "Extreme Gradient Boosting", nl: "Extreme Gradient Boosting" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          es: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          de: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework",
          nl: "XGBoost: Extreme Gradient Boosting. wins Kaggle competitions. fast and accurate. gradient boosting framework"
        }
      },
      {
        question: {
          en: "What is Cross-Validation in ML?",
          es: "¿Qué es Cross-Validation en ML?",
          de: "Was ist Cross-Validation in ML?",
          nl: "Wat is Cross-Validation in ML?"
        },
        options: [
          { en: "k-fold technique", es: "k-fold technique", de: "k-fold technique", nl: "k-fold technique" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          es: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          de: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times",
          nl: "Cross-Validation: k-fold technique. better evaluation. reduces bias in testing. splits data k times"
        }
      },
      {
        question: {
          en: "What is Confusion Matrix in ML?",
          es: "¿Qué es Confusion Matrix en ML?",
          de: "Was ist Confusion Matrix in ML?",
          nl: "Wat is Confusion Matrix in ML?"
        },
        options: [
          { en: "classification evaluation", es: "classification evaluation", de: "classification evaluation", nl: "classification evaluation" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          es: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          de: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics",
          nl: "Confusion Matrix: classification evaluation. TP, TN, FP, FN. shows prediction errors. calculates metrics"
        }
      },
      {
        question: {
          en: "What is Precision in ML?",
          es: "¿Qué es Precision en ML?",
          de: "Was ist Precision in ML?",
          nl: "Wat is Precision in ML?"
        },
        options: [
          { en: "TP / (TP + FP)", es: "TP / (TP + FP)", de: "TP / (TP + FP)", nl: "TP / (TP + FP)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          es: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          de: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric",
          nl: "Precision: TP / (TP + FP). how many positives are correct. important when FP costly. quality metric"
        }
      },
      {
        question: {
          en: "What is Recall in ML?",
          es: "¿Qué es Recall en ML?",
          de: "Was ist Recall in ML?",
          nl: "Wat is Recall in ML?"
        },
        options: [
          { en: "TP / (TP + FN)", es: "TP / (TP + FN)", de: "TP / (TP + FN)", nl: "TP / (TP + FN)" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          es: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          de: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric",
          nl: "Recall: TP / (TP + FN). how many actual positives found. important when FN costly. coverage metric"
        }
      },
      {
        question: {
          en: "What is F1 Score in ML?",
          es: "¿Qué es F1 Score en ML?",
          de: "Was ist F1 Score in ML?",
          nl: "Wat is F1 Score in ML?"
        },
        options: [
          { en: "harmonic mean of precision and recall", es: "harmonic mean of precision and recall", de: "harmonic mean of precision and recall", nl: "harmonic mean of precision and recall" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          es: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          de: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric",
          nl: "F1 Score: harmonic mean of precision and recall. balances both metrics. 2 * P * R / (P + R). single metric"
        }
      },
      {
        question: {
          en: "What is ROC Curve in ML?",
          es: "¿Qué es ROC Curve en ML?",
          de: "Was ist ROC Curve in ML?",
          nl: "Wat is ROC Curve in ML?"
        },
        options: [
          { en: "Receiver Operating Characteristic", es: "Receiver Operating Characteristic", de: "Receiver Operating Characteristic", nl: "Receiver Operating Characteristic" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          es: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          de: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis",
          nl: "ROC Curve: Receiver Operating Characteristic. plots TPR vs FPR. AUC measures performance. threshold analysis"
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  }
})();