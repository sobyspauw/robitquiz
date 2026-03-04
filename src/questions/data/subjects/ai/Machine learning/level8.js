(function() {
  const level8 = {
    questions: [
      {
        question: {
          en: "What is PCA?",
          es: "¿Qué es PCA?",
          de: "Was ist PCA?",
          nl: "Wat is PCA?"
        },
        options: [
          { en: "Principal Component Analysis: reduces dimensions", es: "Principal Component Analysis: reduces dimensions", de: "Principal Component Analysis: reduces dimensions", nl: "Principal Component Analysis: reduces dimensions" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          es: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          de: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          nl: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique"
        }
      },
      {
        question: {
          en: "What is t-SNE?",
          es: "¿Qué es t-SNE?",
          de: "Was ist t-SNE?",
          nl: "Wat is t-SNE?"
        },
        options: [
          { en: "t-Distributed Stochastic Neighbor Embedding: visualization technique", es: "t-Distributed Stochastic Neighbor Embedding: visualization technique", de: "t-Distributed Stochastic Neighbor Embedding: visualization technique", nl: "t-Distributed Stochastic Neighbor Embedding: visualization technique" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          es: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          de: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          nl: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction"
        }
      },
      {
        question: {
          en: "What is Overfitting?",
          es: "¿Qué es Overfitting?",
          de: "Was ist Overfitting?",
          nl: "Wat is Overfitting?"
        },
        options: [
          { en: "model too complex: memorizes training data", es: "model too complex: memorizes training data", de: "model too complex: memorizes training data", nl: "model too complex: memorizes training data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          es: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          de: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          nl: "Overfitting: model too complex. memorizes training data. poor generalization. high variance"
        }
      },
      {
        question: {
          en: "What is Underfitting?",
          es: "¿Qué es Underfitting?",
          de: "Was ist Underfitting?",
          nl: "Wat is Underfitting?"
        },
        options: [
          { en: "model too simple: doesn\'t learn patterns", es: "model too simple: doesn\'t learn patterns", de: "model too simple: doesn\'t learn patterns", nl: "model too simple: doesn\'t learn patterns" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          es: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          de: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          nl: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias"
        }
      },
      {
        question: {
          en: "What is Regularization?",
          es: "¿Qué es Regularization?",
          de: "Was ist Regularization?",
          nl: "Wat is Regularization?"
        },
        options: [
          { en: "prevents overfitting: adds penalty term", es: "prevents overfitting: adds penalty term", de: "prevents overfitting: adds penalty term", nl: "prevents overfitting: adds penalty term" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          es: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          de: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          nl: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity"
        }
      },
      {
        question: {
          en: "What is Dropout?",
          es: "¿Qué es Dropout?",
          de: "Was ist Dropout?",
          nl: "Wat is Dropout?"
        },
        options: [
          { en: "randomly deactivates neurons: prevents co-adaptation", es: "randomly deactivates neurons: prevents co-adaptation", de: "randomly deactivates neurons: prevents co-adaptation", nl: "randomly deactivates neurons: prevents co-adaptation" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          es: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          de: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          nl: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012"
        }
      },
      {
        question: {
          en: "What is Batch Normalization?",
          es: "¿Qué es Batch Normalization?",
          de: "Was ist Batch Normalization?",
          nl: "Wat is Batch Normalization?"
        },
        options: [
          { en: "normalizes layer inputs: faster training", es: "normalizes layer inputs: faster training", de: "normalizes layer inputs: faster training", nl: "normalizes layer inputs: faster training" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          es: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          de: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          nl: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015"
        }
      },
      {
        question: {
          en: "What is Learning Rate?",
          es: "¿Qué es Learning Rate?",
          de: "Was ist Learning Rate?",
          nl: "Wat is Learning Rate?"
        },
        options: [
          { en: "step size in optimization: too high: diverges", es: "step size in optimization: too high: diverges", de: "step size in optimization: too high: diverges", nl: "step size in optimization: too high: diverges" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          es: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          de: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          nl: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter"
        }
      },
      {
        question: {
          en: "What is Hyperparameter?",
          es: "¿Qué es Hyperparameter?",
          de: "Was ist Hyperparameter?",
          nl: "Wat is Hyperparameter?"
        },
        options: [
          { en: "set before training: not learned from data", es: "set before training: not learned from data", de: "set before training: not learned from data", nl: "set before training: not learned from data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          es: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          de: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          nl: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning"
        }
      },
      {
        question: {
          en: "What is Feature Engineering?",
          es: "¿Qué es Feature Engineering?",
          de: "Was ist Feature Engineering?",
          nl: "Wat is Feature Engineering?"
        },
        options: [
          { en: "creating better features: domain knowledge", es: "creating better features: domain knowledge", de: "creating better features: domain knowledge", nl: "creating better features: domain knowledge" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          es: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          de: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          nl: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science"
        }
      },
      {
        question: {
          en: "What is PCA?",
          es: "¿Qué es PCA?",
          de: "Was ist PCA?",
          nl: "Wat is PCA?"
        },
        options: [
          { en: "Principal Component Analysis: reduces dimensions", es: "Principal Component Analysis: reduces dimensions", de: "Principal Component Analysis: reduces dimensions", nl: "Principal Component Analysis: reduces dimensions" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          es: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          de: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          nl: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique"
        }
      },
      {
        question: {
          en: "What is t-SNE?",
          es: "¿Qué es t-SNE?",
          de: "Was ist t-SNE?",
          nl: "Wat is t-SNE?"
        },
        options: [
          { en: "t-Distributed Stochastic Neighbor Embedding: visualization technique", es: "t-Distributed Stochastic Neighbor Embedding: visualization technique", de: "t-Distributed Stochastic Neighbor Embedding: visualization technique", nl: "t-Distributed Stochastic Neighbor Embedding: visualization technique" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          es: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          de: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          nl: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction"
        }
      },
      {
        question: {
          en: "What is Overfitting?",
          es: "¿Qué es Overfitting?",
          de: "Was ist Overfitting?",
          nl: "Wat is Overfitting?"
        },
        options: [
          { en: "model too complex: memorizes training data", es: "model too complex: memorizes training data", de: "model too complex: memorizes training data", nl: "model too complex: memorizes training data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          es: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          de: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          nl: "Overfitting: model too complex. memorizes training data. poor generalization. high variance"
        }
      },
      {
        question: {
          en: "What is Underfitting?",
          es: "¿Qué es Underfitting?",
          de: "Was ist Underfitting?",
          nl: "Wat is Underfitting?"
        },
        options: [
          { en: "model too simple: doesn\'t learn patterns", es: "model too simple: doesn\'t learn patterns", de: "model too simple: doesn\'t learn patterns", nl: "model too simple: doesn\'t learn patterns" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          es: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          de: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          nl: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias"
        }
      },
      {
        question: {
          en: "What is Regularization?",
          es: "¿Qué es Regularization?",
          de: "Was ist Regularization?",
          nl: "Wat is Regularization?"
        },
        options: [
          { en: "prevents overfitting: adds penalty term", es: "prevents overfitting: adds penalty term", de: "prevents overfitting: adds penalty term", nl: "prevents overfitting: adds penalty term" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          es: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          de: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          nl: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity"
        }
      },
      {
        question: {
          en: "What is Dropout?",
          es: "¿Qué es Dropout?",
          de: "Was ist Dropout?",
          nl: "Wat is Dropout?"
        },
        options: [
          { en: "randomly deactivates neurons: prevents co-adaptation", es: "randomly deactivates neurons: prevents co-adaptation", de: "randomly deactivates neurons: prevents co-adaptation", nl: "randomly deactivates neurons: prevents co-adaptation" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          es: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          de: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          nl: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012"
        }
      },
      {
        question: {
          en: "What is Batch Normalization?",
          es: "¿Qué es Batch Normalization?",
          de: "Was ist Batch Normalization?",
          nl: "Wat is Batch Normalization?"
        },
        options: [
          { en: "normalizes layer inputs: faster training", es: "normalizes layer inputs: faster training", de: "normalizes layer inputs: faster training", nl: "normalizes layer inputs: faster training" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          es: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          de: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          nl: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015"
        }
      },
      {
        question: {
          en: "What is Learning Rate?",
          es: "¿Qué es Learning Rate?",
          de: "Was ist Learning Rate?",
          nl: "Wat is Learning Rate?"
        },
        options: [
          { en: "step size in optimization: too high: diverges", es: "step size in optimization: too high: diverges", de: "step size in optimization: too high: diverges", nl: "step size in optimization: too high: diverges" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          es: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          de: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          nl: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter"
        }
      },
      {
        question: {
          en: "What is Hyperparameter?",
          es: "¿Qué es Hyperparameter?",
          de: "Was ist Hyperparameter?",
          nl: "Wat is Hyperparameter?"
        },
        options: [
          { en: "set before training: not learned from data", es: "set before training: not learned from data", de: "set before training: not learned from data", nl: "set before training: not learned from data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          es: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          de: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          nl: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning"
        }
      },
      {
        question: {
          en: "What is Feature Engineering?",
          es: "¿Qué es Feature Engineering?",
          de: "Was ist Feature Engineering?",
          nl: "Wat is Feature Engineering?"
        },
        options: [
          { en: "creating better features: domain knowledge", es: "creating better features: domain knowledge", de: "creating better features: domain knowledge", nl: "creating better features: domain knowledge" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          es: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          de: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          nl: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science"
        }
      },
      {
        question: {
          en: "What is PCA?",
          es: "¿Qué es PCA?",
          de: "Was ist PCA?",
          nl: "Wat is PCA?"
        },
        options: [
          { en: "Principal Component Analysis: reduces dimensions", es: "Principal Component Analysis: reduces dimensions", de: "Principal Component Analysis: reduces dimensions", nl: "Principal Component Analysis: reduces dimensions" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          es: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          de: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          nl: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique"
        }
      },
      {
        question: {
          en: "What is t-SNE?",
          es: "¿Qué es t-SNE?",
          de: "Was ist t-SNE?",
          nl: "Wat is t-SNE?"
        },
        options: [
          { en: "t-Distributed Stochastic Neighbor Embedding: visualization technique", es: "t-Distributed Stochastic Neighbor Embedding: visualization technique", de: "t-Distributed Stochastic Neighbor Embedding: visualization technique", nl: "t-Distributed Stochastic Neighbor Embedding: visualization technique" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          es: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          de: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          nl: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction"
        }
      },
      {
        question: {
          en: "What is Overfitting?",
          es: "¿Qué es Overfitting?",
          de: "Was ist Overfitting?",
          nl: "Wat is Overfitting?"
        },
        options: [
          { en: "model too complex: memorizes training data", es: "model too complex: memorizes training data", de: "model too complex: memorizes training data", nl: "model too complex: memorizes training data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          es: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          de: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          nl: "Overfitting: model too complex. memorizes training data. poor generalization. high variance"
        }
      },
      {
        question: {
          en: "What is Underfitting?",
          es: "¿Qué es Underfitting?",
          de: "Was ist Underfitting?",
          nl: "Wat is Underfitting?"
        },
        options: [
          { en: "model too simple: doesn\'t learn patterns", es: "model too simple: doesn\'t learn patterns", de: "model too simple: doesn\'t learn patterns", nl: "model too simple: doesn\'t learn patterns" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          es: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          de: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          nl: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias"
        }
      },
      {
        question: {
          en: "What is Regularization?",
          es: "¿Qué es Regularization?",
          de: "Was ist Regularization?",
          nl: "Wat is Regularization?"
        },
        options: [
          { en: "prevents overfitting: adds penalty term", es: "prevents overfitting: adds penalty term", de: "prevents overfitting: adds penalty term", nl: "prevents overfitting: adds penalty term" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          es: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          de: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          nl: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity"
        }
      },
      {
        question: {
          en: "What is Dropout?",
          es: "¿Qué es Dropout?",
          de: "Was ist Dropout?",
          nl: "Wat is Dropout?"
        },
        options: [
          { en: "randomly deactivates neurons: prevents co-adaptation", es: "randomly deactivates neurons: prevents co-adaptation", de: "randomly deactivates neurons: prevents co-adaptation", nl: "randomly deactivates neurons: prevents co-adaptation" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          es: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          de: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          nl: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012"
        }
      },
      {
        question: {
          en: "What is Batch Normalization?",
          es: "¿Qué es Batch Normalization?",
          de: "Was ist Batch Normalization?",
          nl: "Wat is Batch Normalization?"
        },
        options: [
          { en: "normalizes layer inputs: faster training", es: "normalizes layer inputs: faster training", de: "normalizes layer inputs: faster training", nl: "normalizes layer inputs: faster training" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          es: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          de: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          nl: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015"
        }
      },
      {
        question: {
          en: "What is Learning Rate?",
          es: "¿Qué es Learning Rate?",
          de: "Was ist Learning Rate?",
          nl: "Wat is Learning Rate?"
        },
        options: [
          { en: "step size in optimization: too high: diverges", es: "step size in optimization: too high: diverges", de: "step size in optimization: too high: diverges", nl: "step size in optimization: too high: diverges" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          es: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          de: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          nl: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter"
        }
      },
      {
        question: {
          en: "What is Hyperparameter?",
          es: "¿Qué es Hyperparameter?",
          de: "Was ist Hyperparameter?",
          nl: "Wat is Hyperparameter?"
        },
        options: [
          { en: "set before training: not learned from data", es: "set before training: not learned from data", de: "set before training: not learned from data", nl: "set before training: not learned from data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          es: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          de: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          nl: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning"
        }
      },
      {
        question: {
          en: "What is Feature Engineering?",
          es: "¿Qué es Feature Engineering?",
          de: "Was ist Feature Engineering?",
          nl: "Wat is Feature Engineering?"
        },
        options: [
          { en: "creating better features: domain knowledge", es: "creating better features: domain knowledge", de: "creating better features: domain knowledge", nl: "creating better features: domain knowledge" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          es: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          de: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          nl: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science"
        }
      },
      {
        question: {
          en: "What is PCA?",
          es: "¿Qué es PCA?",
          de: "Was ist PCA?",
          nl: "Wat is PCA?"
        },
        options: [
          { en: "Principal Component Analysis: reduces dimensions", es: "Principal Component Analysis: reduces dimensions", de: "Principal Component Analysis: reduces dimensions", nl: "Principal Component Analysis: reduces dimensions" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          es: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          de: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          nl: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique"
        }
      },
      {
        question: {
          en: "What is t-SNE?",
          es: "¿Qué es t-SNE?",
          de: "Was ist t-SNE?",
          nl: "Wat is t-SNE?"
        },
        options: [
          { en: "t-Distributed Stochastic Neighbor Embedding: visualization technique", es: "t-Distributed Stochastic Neighbor Embedding: visualization technique", de: "t-Distributed Stochastic Neighbor Embedding: visualization technique", nl: "t-Distributed Stochastic Neighbor Embedding: visualization technique" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          es: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          de: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          nl: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction"
        }
      },
      {
        question: {
          en: "What is Overfitting?",
          es: "¿Qué es Overfitting?",
          de: "Was ist Overfitting?",
          nl: "Wat is Overfitting?"
        },
        options: [
          { en: "model too complex: memorizes training data", es: "model too complex: memorizes training data", de: "model too complex: memorizes training data", nl: "model too complex: memorizes training data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          es: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          de: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          nl: "Overfitting: model too complex. memorizes training data. poor generalization. high variance"
        }
      },
      {
        question: {
          en: "What is Underfitting?",
          es: "¿Qué es Underfitting?",
          de: "Was ist Underfitting?",
          nl: "Wat is Underfitting?"
        },
        options: [
          { en: "model too simple: doesn\'t learn patterns", es: "model too simple: doesn\'t learn patterns", de: "model too simple: doesn\'t learn patterns", nl: "model too simple: doesn\'t learn patterns" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          es: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          de: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          nl: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias"
        }
      },
      {
        question: {
          en: "What is Regularization?",
          es: "¿Qué es Regularization?",
          de: "Was ist Regularization?",
          nl: "Wat is Regularization?"
        },
        options: [
          { en: "prevents overfitting: adds penalty term", es: "prevents overfitting: adds penalty term", de: "prevents overfitting: adds penalty term", nl: "prevents overfitting: adds penalty term" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          es: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          de: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          nl: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity"
        }
      },
      {
        question: {
          en: "What is Dropout?",
          es: "¿Qué es Dropout?",
          de: "Was ist Dropout?",
          nl: "Wat is Dropout?"
        },
        options: [
          { en: "randomly deactivates neurons: prevents co-adaptation", es: "randomly deactivates neurons: prevents co-adaptation", de: "randomly deactivates neurons: prevents co-adaptation", nl: "randomly deactivates neurons: prevents co-adaptation" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          es: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          de: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          nl: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012"
        }
      },
      {
        question: {
          en: "What is Batch Normalization?",
          es: "¿Qué es Batch Normalization?",
          de: "Was ist Batch Normalization?",
          nl: "Wat is Batch Normalization?"
        },
        options: [
          { en: "normalizes layer inputs: faster training", es: "normalizes layer inputs: faster training", de: "normalizes layer inputs: faster training", nl: "normalizes layer inputs: faster training" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          es: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          de: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          nl: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015"
        }
      },
      {
        question: {
          en: "What is Learning Rate?",
          es: "¿Qué es Learning Rate?",
          de: "Was ist Learning Rate?",
          nl: "Wat is Learning Rate?"
        },
        options: [
          { en: "step size in optimization: too high: diverges", es: "step size in optimization: too high: diverges", de: "step size in optimization: too high: diverges", nl: "step size in optimization: too high: diverges" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          es: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          de: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          nl: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter"
        }
      },
      {
        question: {
          en: "What is Hyperparameter?",
          es: "¿Qué es Hyperparameter?",
          de: "Was ist Hyperparameter?",
          nl: "Wat is Hyperparameter?"
        },
        options: [
          { en: "set before training: not learned from data", es: "set before training: not learned from data", de: "set before training: not learned from data", nl: "set before training: not learned from data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          es: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          de: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          nl: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning"
        }
      },
      {
        question: {
          en: "What is Feature Engineering?",
          es: "¿Qué es Feature Engineering?",
          de: "Was ist Feature Engineering?",
          nl: "Wat is Feature Engineering?"
        },
        options: [
          { en: "creating better features: domain knowledge", es: "creating better features: domain knowledge", de: "creating better features: domain knowledge", nl: "creating better features: domain knowledge" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          es: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          de: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          nl: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science"
        }
      },
      {
        question: {
          en: "What is PCA?",
          es: "¿Qué es PCA?",
          de: "Was ist PCA?",
          nl: "Wat is PCA?"
        },
        options: [
          { en: "Principal Component Analysis: reduces dimensions", es: "Principal Component Analysis: reduces dimensions", de: "Principal Component Analysis: reduces dimensions", nl: "Principal Component Analysis: reduces dimensions" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          es: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          de: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          nl: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique"
        }
      },
      {
        question: {
          en: "What is t-SNE?",
          es: "¿Qué es t-SNE?",
          de: "Was ist t-SNE?",
          nl: "Wat is t-SNE?"
        },
        options: [
          { en: "t-Distributed Stochastic Neighbor Embedding: visualization technique", es: "t-Distributed Stochastic Neighbor Embedding: visualization technique", de: "t-Distributed Stochastic Neighbor Embedding: visualization technique", nl: "t-Distributed Stochastic Neighbor Embedding: visualization technique" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          es: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          de: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          nl: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction"
        }
      },
      {
        question: {
          en: "What is Overfitting?",
          es: "¿Qué es Overfitting?",
          de: "Was ist Overfitting?",
          nl: "Wat is Overfitting?"
        },
        options: [
          { en: "model too complex: memorizes training data", es: "model too complex: memorizes training data", de: "model too complex: memorizes training data", nl: "model too complex: memorizes training data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          es: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          de: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          nl: "Overfitting: model too complex. memorizes training data. poor generalization. high variance"
        }
      },
      {
        question: {
          en: "What is Underfitting?",
          es: "¿Qué es Underfitting?",
          de: "Was ist Underfitting?",
          nl: "Wat is Underfitting?"
        },
        options: [
          { en: "model too simple: doesn\'t learn patterns", es: "model too simple: doesn\'t learn patterns", de: "model too simple: doesn\'t learn patterns", nl: "model too simple: doesn\'t learn patterns" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          es: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          de: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          nl: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias"
        }
      },
      {
        question: {
          en: "What is Regularization?",
          es: "¿Qué es Regularization?",
          de: "Was ist Regularization?",
          nl: "Wat is Regularization?"
        },
        options: [
          { en: "prevents overfitting: adds penalty term", es: "prevents overfitting: adds penalty term", de: "prevents overfitting: adds penalty term", nl: "prevents overfitting: adds penalty term" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          es: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          de: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          nl: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity"
        }
      },
      {
        question: {
          en: "What is Dropout?",
          es: "¿Qué es Dropout?",
          de: "Was ist Dropout?",
          nl: "Wat is Dropout?"
        },
        options: [
          { en: "randomly deactivates neurons: prevents co-adaptation", es: "randomly deactivates neurons: prevents co-adaptation", de: "randomly deactivates neurons: prevents co-adaptation", nl: "randomly deactivates neurons: prevents co-adaptation" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          es: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          de: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          nl: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012"
        }
      },
      {
        question: {
          en: "What is Batch Normalization?",
          es: "¿Qué es Batch Normalization?",
          de: "Was ist Batch Normalization?",
          nl: "Wat is Batch Normalization?"
        },
        options: [
          { en: "normalizes layer inputs: faster training", es: "normalizes layer inputs: faster training", de: "normalizes layer inputs: faster training", nl: "normalizes layer inputs: faster training" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          es: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          de: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          nl: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015"
        }
      },
      {
        question: {
          en: "What is Learning Rate?",
          es: "¿Qué es Learning Rate?",
          de: "Was ist Learning Rate?",
          nl: "Wat is Learning Rate?"
        },
        options: [
          { en: "step size in optimization: too high: diverges", es: "step size in optimization: too high: diverges", de: "step size in optimization: too high: diverges", nl: "step size in optimization: too high: diverges" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          es: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          de: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          nl: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter"
        }
      },
      {
        question: {
          en: "What is Hyperparameter?",
          es: "¿Qué es Hyperparameter?",
          de: "Was ist Hyperparameter?",
          nl: "Wat is Hyperparameter?"
        },
        options: [
          { en: "set before training: not learned from data", es: "set before training: not learned from data", de: "set before training: not learned from data", nl: "set before training: not learned from data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          es: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          de: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          nl: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning"
        }
      },
      {
        question: {
          en: "What is Feature Engineering?",
          es: "¿Qué es Feature Engineering?",
          de: "Was ist Feature Engineering?",
          nl: "Wat is Feature Engineering?"
        },
        options: [
          { en: "creating better features: domain knowledge", es: "creating better features: domain knowledge", de: "creating better features: domain knowledge", nl: "creating better features: domain knowledge" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          es: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          de: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          nl: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science"
        }
      },
      {
        question: {
          en: "What is PCA?",
          es: "¿Qué es PCA?",
          de: "Was ist PCA?",
          nl: "Wat is PCA?"
        },
        options: [
          { en: "Principal Component Analysis: reduces dimensions", es: "Principal Component Analysis: reduces dimensions", de: "Principal Component Analysis: reduces dimensions", nl: "Principal Component Analysis: reduces dimensions" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          es: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          de: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          nl: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique"
        }
      },
      {
        question: {
          en: "What is t-SNE?",
          es: "¿Qué es t-SNE?",
          de: "Was ist t-SNE?",
          nl: "Wat is t-SNE?"
        },
        options: [
          { en: "t-Distributed Stochastic Neighbor Embedding: visualization technique", es: "t-Distributed Stochastic Neighbor Embedding: visualization technique", de: "t-Distributed Stochastic Neighbor Embedding: visualization technique", nl: "t-Distributed Stochastic Neighbor Embedding: visualization technique" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          es: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          de: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          nl: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction"
        }
      },
      {
        question: {
          en: "What is Overfitting?",
          es: "¿Qué es Overfitting?",
          de: "Was ist Overfitting?",
          nl: "Wat is Overfitting?"
        },
        options: [
          { en: "model too complex: memorizes training data", es: "model too complex: memorizes training data", de: "model too complex: memorizes training data", nl: "model too complex: memorizes training data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          es: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          de: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          nl: "Overfitting: model too complex. memorizes training data. poor generalization. high variance"
        }
      },
      {
        question: {
          en: "What is Underfitting?",
          es: "¿Qué es Underfitting?",
          de: "Was ist Underfitting?",
          nl: "Wat is Underfitting?"
        },
        options: [
          { en: "model too simple: doesn\'t learn patterns", es: "model too simple: doesn\'t learn patterns", de: "model too simple: doesn\'t learn patterns", nl: "model too simple: doesn\'t learn patterns" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          es: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          de: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          nl: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias"
        }
      },
      {
        question: {
          en: "What is Regularization?",
          es: "¿Qué es Regularization?",
          de: "Was ist Regularization?",
          nl: "Wat is Regularization?"
        },
        options: [
          { en: "prevents overfitting: adds penalty term", es: "prevents overfitting: adds penalty term", de: "prevents overfitting: adds penalty term", nl: "prevents overfitting: adds penalty term" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          es: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          de: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          nl: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity"
        }
      },
      {
        question: {
          en: "What is Dropout?",
          es: "¿Qué es Dropout?",
          de: "Was ist Dropout?",
          nl: "Wat is Dropout?"
        },
        options: [
          { en: "randomly deactivates neurons: prevents co-adaptation", es: "randomly deactivates neurons: prevents co-adaptation", de: "randomly deactivates neurons: prevents co-adaptation", nl: "randomly deactivates neurons: prevents co-adaptation" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          es: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          de: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          nl: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012"
        }
      },
      {
        question: {
          en: "What is Batch Normalization?",
          es: "¿Qué es Batch Normalization?",
          de: "Was ist Batch Normalization?",
          nl: "Wat is Batch Normalization?"
        },
        options: [
          { en: "normalizes layer inputs: faster training", es: "normalizes layer inputs: faster training", de: "normalizes layer inputs: faster training", nl: "normalizes layer inputs: faster training" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          es: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          de: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          nl: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015"
        }
      },
      {
        question: {
          en: "What is Learning Rate?",
          es: "¿Qué es Learning Rate?",
          de: "Was ist Learning Rate?",
          nl: "Wat is Learning Rate?"
        },
        options: [
          { en: "step size in optimization: too high: diverges", es: "step size in optimization: too high: diverges", de: "step size in optimization: too high: diverges", nl: "step size in optimization: too high: diverges" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          es: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          de: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          nl: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter"
        }
      },
      {
        question: {
          en: "What is Hyperparameter?",
          es: "¿Qué es Hyperparameter?",
          de: "Was ist Hyperparameter?",
          nl: "Wat is Hyperparameter?"
        },
        options: [
          { en: "set before training: not learned from data", es: "set before training: not learned from data", de: "set before training: not learned from data", nl: "set before training: not learned from data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          es: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          de: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          nl: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning"
        }
      },
      {
        question: {
          en: "What is Feature Engineering?",
          es: "¿Qué es Feature Engineering?",
          de: "Was ist Feature Engineering?",
          nl: "Wat is Feature Engineering?"
        },
        options: [
          { en: "creating better features: domain knowledge", es: "creating better features: domain knowledge", de: "creating better features: domain knowledge", nl: "creating better features: domain knowledge" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          es: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          de: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          nl: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science"
        }
      },
      {
        question: {
          en: "What is PCA?",
          es: "¿Qué es PCA?",
          de: "Was ist PCA?",
          nl: "Wat is PCA?"
        },
        options: [
          { en: "Principal Component Analysis: reduces dimensions", es: "Principal Component Analysis: reduces dimensions", de: "Principal Component Analysis: reduces dimensions", nl: "Principal Component Analysis: reduces dimensions" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          es: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          de: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          nl: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique"
        }
      },
      {
        question: {
          en: "What is t-SNE?",
          es: "¿Qué es t-SNE?",
          de: "Was ist t-SNE?",
          nl: "Wat is t-SNE?"
        },
        options: [
          { en: "t-Distributed Stochastic Neighbor Embedding: visualization technique", es: "t-Distributed Stochastic Neighbor Embedding: visualization technique", de: "t-Distributed Stochastic Neighbor Embedding: visualization technique", nl: "t-Distributed Stochastic Neighbor Embedding: visualization technique" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          es: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          de: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          nl: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction"
        }
      },
      {
        question: {
          en: "What is Overfitting?",
          es: "¿Qué es Overfitting?",
          de: "Was ist Overfitting?",
          nl: "Wat is Overfitting?"
        },
        options: [
          { en: "model too complex: memorizes training data", es: "model too complex: memorizes training data", de: "model too complex: memorizes training data", nl: "model too complex: memorizes training data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          es: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          de: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          nl: "Overfitting: model too complex. memorizes training data. poor generalization. high variance"
        }
      },
      {
        question: {
          en: "What is Underfitting?",
          es: "¿Qué es Underfitting?",
          de: "Was ist Underfitting?",
          nl: "Wat is Underfitting?"
        },
        options: [
          { en: "model too simple: doesn\'t learn patterns", es: "model too simple: doesn\'t learn patterns", de: "model too simple: doesn\'t learn patterns", nl: "model too simple: doesn\'t learn patterns" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          es: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          de: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          nl: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias"
        }
      },
      {
        question: {
          en: "What is Regularization?",
          es: "¿Qué es Regularization?",
          de: "Was ist Regularization?",
          nl: "Wat is Regularization?"
        },
        options: [
          { en: "prevents overfitting: adds penalty term", es: "prevents overfitting: adds penalty term", de: "prevents overfitting: adds penalty term", nl: "prevents overfitting: adds penalty term" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          es: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          de: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          nl: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity"
        }
      },
      {
        question: {
          en: "What is Dropout?",
          es: "¿Qué es Dropout?",
          de: "Was ist Dropout?",
          nl: "Wat is Dropout?"
        },
        options: [
          { en: "randomly deactivates neurons: prevents co-adaptation", es: "randomly deactivates neurons: prevents co-adaptation", de: "randomly deactivates neurons: prevents co-adaptation", nl: "randomly deactivates neurons: prevents co-adaptation" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          es: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          de: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          nl: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012"
        }
      },
      {
        question: {
          en: "What is Batch Normalization?",
          es: "¿Qué es Batch Normalization?",
          de: "Was ist Batch Normalization?",
          nl: "Wat is Batch Normalization?"
        },
        options: [
          { en: "normalizes layer inputs: faster training", es: "normalizes layer inputs: faster training", de: "normalizes layer inputs: faster training", nl: "normalizes layer inputs: faster training" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          es: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          de: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          nl: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015"
        }
      },
      {
        question: {
          en: "What is Learning Rate?",
          es: "¿Qué es Learning Rate?",
          de: "Was ist Learning Rate?",
          nl: "Wat is Learning Rate?"
        },
        options: [
          { en: "step size in optimization: too high: diverges", es: "step size in optimization: too high: diverges", de: "step size in optimization: too high: diverges", nl: "step size in optimization: too high: diverges" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          es: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          de: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          nl: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter"
        }
      },
      {
        question: {
          en: "What is Hyperparameter?",
          es: "¿Qué es Hyperparameter?",
          de: "Was ist Hyperparameter?",
          nl: "Wat is Hyperparameter?"
        },
        options: [
          { en: "set before training: not learned from data", es: "set before training: not learned from data", de: "set before training: not learned from data", nl: "set before training: not learned from data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          es: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          de: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          nl: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning"
        }
      },
      {
        question: {
          en: "What is Feature Engineering?",
          es: "¿Qué es Feature Engineering?",
          de: "Was ist Feature Engineering?",
          nl: "Wat is Feature Engineering?"
        },
        options: [
          { en: "creating better features: domain knowledge", es: "creating better features: domain knowledge", de: "creating better features: domain knowledge", nl: "creating better features: domain knowledge" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          es: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          de: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          nl: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science"
        }
      },
      {
        question: {
          en: "What is PCA?",
          es: "¿Qué es PCA?",
          de: "Was ist PCA?",
          nl: "Wat is PCA?"
        },
        options: [
          { en: "Principal Component Analysis: reduces dimensions", es: "Principal Component Analysis: reduces dimensions", de: "Principal Component Analysis: reduces dimensions", nl: "Principal Component Analysis: reduces dimensions" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          es: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          de: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          nl: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique"
        }
      },
      {
        question: {
          en: "What is t-SNE?",
          es: "¿Qué es t-SNE?",
          de: "Was ist t-SNE?",
          nl: "Wat is t-SNE?"
        },
        options: [
          { en: "t-Distributed Stochastic Neighbor Embedding: visualization technique", es: "t-Distributed Stochastic Neighbor Embedding: visualization technique", de: "t-Distributed Stochastic Neighbor Embedding: visualization technique", nl: "t-Distributed Stochastic Neighbor Embedding: visualization technique" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          es: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          de: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          nl: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction"
        }
      },
      {
        question: {
          en: "What is Overfitting?",
          es: "¿Qué es Overfitting?",
          de: "Was ist Overfitting?",
          nl: "Wat is Overfitting?"
        },
        options: [
          { en: "model too complex: memorizes training data", es: "model too complex: memorizes training data", de: "model too complex: memorizes training data", nl: "model too complex: memorizes training data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          es: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          de: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          nl: "Overfitting: model too complex. memorizes training data. poor generalization. high variance"
        }
      },
      {
        question: {
          en: "What is Underfitting?",
          es: "¿Qué es Underfitting?",
          de: "Was ist Underfitting?",
          nl: "Wat is Underfitting?"
        },
        options: [
          { en: "model too simple: doesn\'t learn patterns", es: "model too simple: doesn\'t learn patterns", de: "model too simple: doesn\'t learn patterns", nl: "model too simple: doesn\'t learn patterns" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          es: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          de: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          nl: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias"
        }
      },
      {
        question: {
          en: "What is Regularization?",
          es: "¿Qué es Regularization?",
          de: "Was ist Regularization?",
          nl: "Wat is Regularization?"
        },
        options: [
          { en: "prevents overfitting: adds penalty term", es: "prevents overfitting: adds penalty term", de: "prevents overfitting: adds penalty term", nl: "prevents overfitting: adds penalty term" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          es: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          de: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          nl: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity"
        }
      },
      {
        question: {
          en: "What is Dropout?",
          es: "¿Qué es Dropout?",
          de: "Was ist Dropout?",
          nl: "Wat is Dropout?"
        },
        options: [
          { en: "randomly deactivates neurons: prevents co-adaptation", es: "randomly deactivates neurons: prevents co-adaptation", de: "randomly deactivates neurons: prevents co-adaptation", nl: "randomly deactivates neurons: prevents co-adaptation" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          es: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          de: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          nl: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012"
        }
      },
      {
        question: {
          en: "What is Batch Normalization?",
          es: "¿Qué es Batch Normalization?",
          de: "Was ist Batch Normalization?",
          nl: "Wat is Batch Normalization?"
        },
        options: [
          { en: "normalizes layer inputs: faster training", es: "normalizes layer inputs: faster training", de: "normalizes layer inputs: faster training", nl: "normalizes layer inputs: faster training" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          es: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          de: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          nl: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015"
        }
      },
      {
        question: {
          en: "What is Learning Rate?",
          es: "¿Qué es Learning Rate?",
          de: "Was ist Learning Rate?",
          nl: "Wat is Learning Rate?"
        },
        options: [
          { en: "step size in optimization: too high: diverges", es: "step size in optimization: too high: diverges", de: "step size in optimization: too high: diverges", nl: "step size in optimization: too high: diverges" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          es: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          de: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          nl: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter"
        }
      },
      {
        question: {
          en: "What is Hyperparameter?",
          es: "¿Qué es Hyperparameter?",
          de: "Was ist Hyperparameter?",
          nl: "Wat is Hyperparameter?"
        },
        options: [
          { en: "set before training: not learned from data", es: "set before training: not learned from data", de: "set before training: not learned from data", nl: "set before training: not learned from data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          es: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          de: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          nl: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning"
        }
      },
      {
        question: {
          en: "What is Feature Engineering?",
          es: "¿Qué es Feature Engineering?",
          de: "Was ist Feature Engineering?",
          nl: "Wat is Feature Engineering?"
        },
        options: [
          { en: "creating better features: domain knowledge", es: "creating better features: domain knowledge", de: "creating better features: domain knowledge", nl: "creating better features: domain knowledge" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          es: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          de: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          nl: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science"
        }
      },
      {
        question: {
          en: "What is PCA?",
          es: "¿Qué es PCA?",
          de: "Was ist PCA?",
          nl: "Wat is PCA?"
        },
        options: [
          { en: "Principal Component Analysis: reduces dimensions", es: "Principal Component Analysis: reduces dimensions", de: "Principal Component Analysis: reduces dimensions", nl: "Principal Component Analysis: reduces dimensions" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          es: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          de: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          nl: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique"
        }
      },
      {
        question: {
          en: "What is t-SNE?",
          es: "¿Qué es t-SNE?",
          de: "Was ist t-SNE?",
          nl: "Wat is t-SNE?"
        },
        options: [
          { en: "t-Distributed Stochastic Neighbor Embedding: visualization technique", es: "t-Distributed Stochastic Neighbor Embedding: visualization technique", de: "t-Distributed Stochastic Neighbor Embedding: visualization technique", nl: "t-Distributed Stochastic Neighbor Embedding: visualization technique" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          es: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          de: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          nl: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction"
        }
      },
      {
        question: {
          en: "What is Overfitting?",
          es: "¿Qué es Overfitting?",
          de: "Was ist Overfitting?",
          nl: "Wat is Overfitting?"
        },
        options: [
          { en: "model too complex: memorizes training data", es: "model too complex: memorizes training data", de: "model too complex: memorizes training data", nl: "model too complex: memorizes training data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          es: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          de: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          nl: "Overfitting: model too complex. memorizes training data. poor generalization. high variance"
        }
      },
      {
        question: {
          en: "What is Underfitting?",
          es: "¿Qué es Underfitting?",
          de: "Was ist Underfitting?",
          nl: "Wat is Underfitting?"
        },
        options: [
          { en: "model too simple: doesn\'t learn patterns", es: "model too simple: doesn\'t learn patterns", de: "model too simple: doesn\'t learn patterns", nl: "model too simple: doesn\'t learn patterns" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          es: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          de: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          nl: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias"
        }
      },
      {
        question: {
          en: "What is Regularization?",
          es: "¿Qué es Regularization?",
          de: "Was ist Regularization?",
          nl: "Wat is Regularization?"
        },
        options: [
          { en: "prevents overfitting: adds penalty term", es: "prevents overfitting: adds penalty term", de: "prevents overfitting: adds penalty term", nl: "prevents overfitting: adds penalty term" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          es: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          de: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          nl: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity"
        }
      },
      {
        question: {
          en: "What is Dropout?",
          es: "¿Qué es Dropout?",
          de: "Was ist Dropout?",
          nl: "Wat is Dropout?"
        },
        options: [
          { en: "randomly deactivates neurons: prevents co-adaptation", es: "randomly deactivates neurons: prevents co-adaptation", de: "randomly deactivates neurons: prevents co-adaptation", nl: "randomly deactivates neurons: prevents co-adaptation" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          es: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          de: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          nl: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012"
        }
      },
      {
        question: {
          en: "What is Batch Normalization?",
          es: "¿Qué es Batch Normalization?",
          de: "Was ist Batch Normalization?",
          nl: "Wat is Batch Normalization?"
        },
        options: [
          { en: "normalizes layer inputs: faster training", es: "normalizes layer inputs: faster training", de: "normalizes layer inputs: faster training", nl: "normalizes layer inputs: faster training" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          es: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          de: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          nl: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015"
        }
      },
      {
        question: {
          en: "What is Learning Rate?",
          es: "¿Qué es Learning Rate?",
          de: "Was ist Learning Rate?",
          nl: "Wat is Learning Rate?"
        },
        options: [
          { en: "step size in optimization: too high: diverges", es: "step size in optimization: too high: diverges", de: "step size in optimization: too high: diverges", nl: "step size in optimization: too high: diverges" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          es: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          de: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          nl: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter"
        }
      },
      {
        question: {
          en: "What is Hyperparameter?",
          es: "¿Qué es Hyperparameter?",
          de: "Was ist Hyperparameter?",
          nl: "Wat is Hyperparameter?"
        },
        options: [
          { en: "set before training: not learned from data", es: "set before training: not learned from data", de: "set before training: not learned from data", nl: "set before training: not learned from data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          es: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          de: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          nl: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning"
        }
      },
      {
        question: {
          en: "What is Feature Engineering?",
          es: "¿Qué es Feature Engineering?",
          de: "Was ist Feature Engineering?",
          nl: "Wat is Feature Engineering?"
        },
        options: [
          { en: "creating better features: domain knowledge", es: "creating better features: domain knowledge", de: "creating better features: domain knowledge", nl: "creating better features: domain knowledge" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          es: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          de: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          nl: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science"
        }
      },
      {
        question: {
          en: "What is PCA?",
          es: "¿Qué es PCA?",
          de: "Was ist PCA?",
          nl: "Wat is PCA?"
        },
        options: [
          { en: "Principal Component Analysis: reduces dimensions", es: "Principal Component Analysis: reduces dimensions", de: "Principal Component Analysis: reduces dimensions", nl: "Principal Component Analysis: reduces dimensions" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          es: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          de: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique",
          nl: "PCA: Principal Component Analysis. reduces dimensions. finds principal components. unsupervised technique"
        }
      },
      {
        question: {
          en: "What is t-SNE?",
          es: "¿Qué es t-SNE?",
          de: "Was ist t-SNE?",
          nl: "Wat is t-SNE?"
        },
        options: [
          { en: "t-Distributed Stochastic Neighbor Embedding: visualization technique", es: "t-Distributed Stochastic Neighbor Embedding: visualization technique", de: "t-Distributed Stochastic Neighbor Embedding: visualization technique", nl: "t-Distributed Stochastic Neighbor Embedding: visualization technique" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          es: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          de: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction",
          nl: "t-SNE: t-Distributed Stochastic Neighbor Embedding. visualization technique. preserves local structure. non-linear reduction"
        }
      },
      {
        question: {
          en: "What is Overfitting?",
          es: "¿Qué es Overfitting?",
          de: "Was ist Overfitting?",
          nl: "Wat is Overfitting?"
        },
        options: [
          { en: "model too complex: memorizes training data", es: "model too complex: memorizes training data", de: "model too complex: memorizes training data", nl: "model too complex: memorizes training data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          es: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          de: "Overfitting: model too complex. memorizes training data. poor generalization. high variance",
          nl: "Overfitting: model too complex. memorizes training data. poor generalization. high variance"
        }
      },
      {
        question: {
          en: "What is Underfitting?",
          es: "¿Qué es Underfitting?",
          de: "Was ist Underfitting?",
          nl: "Wat is Underfitting?"
        },
        options: [
          { en: "model too simple: doesn\'t learn patterns", es: "model too simple: doesn\'t learn patterns", de: "model too simple: doesn\'t learn patterns", nl: "model too simple: doesn\'t learn patterns" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          es: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          de: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias",
          nl: "Underfitting: model too simple. doesn\'t learn patterns. poor on train and test. high bias"
        }
      },
      {
        question: {
          en: "What is Regularization?",
          es: "¿Qué es Regularization?",
          de: "Was ist Regularization?",
          nl: "Wat is Regularization?"
        },
        options: [
          { en: "prevents overfitting: adds penalty term", es: "prevents overfitting: adds penalty term", de: "prevents overfitting: adds penalty term", nl: "prevents overfitting: adds penalty term" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          es: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          de: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity",
          nl: "Regularization: prevents overfitting. adds penalty term. L1 and L2. controls complexity"
        }
      },
      {
        question: {
          en: "What is Dropout?",
          es: "¿Qué es Dropout?",
          de: "Was ist Dropout?",
          nl: "Wat is Dropout?"
        },
        options: [
          { en: "randomly deactivates neurons: prevents co-adaptation", es: "randomly deactivates neurons: prevents co-adaptation", de: "randomly deactivates neurons: prevents co-adaptation", nl: "randomly deactivates neurons: prevents co-adaptation" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          es: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          de: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012",
          nl: "Dropout: randomly deactivates neurons. prevents co-adaptation. regularization for neural nets. Hinton 2012"
        }
      },
      {
        question: {
          en: "What is Batch Normalization?",
          es: "¿Qué es Batch Normalization?",
          de: "Was ist Batch Normalization?",
          nl: "Wat is Batch Normalization?"
        },
        options: [
          { en: "normalizes layer inputs: faster training", es: "normalizes layer inputs: faster training", de: "normalizes layer inputs: faster training", nl: "normalizes layer inputs: faster training" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          es: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          de: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015",
          nl: "Batch Normalization: normalizes layer inputs. faster training. reduces covariate shift. Ioffe & Szegedy 2015"
        }
      },
      {
        question: {
          en: "What is Learning Rate?",
          es: "¿Qué es Learning Rate?",
          de: "Was ist Learning Rate?",
          nl: "Wat is Learning Rate?"
        },
        options: [
          { en: "step size in optimization: too high: diverges", es: "step size in optimization: too high: diverges", de: "step size in optimization: too high: diverges", nl: "step size in optimization: too high: diverges" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          es: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          de: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter",
          nl: "Learning Rate: step size in optimization. too high: diverges. too low: slow. critical hyperparameter"
        }
      },
      {
        question: {
          en: "What is Hyperparameter?",
          es: "¿Qué es Hyperparameter?",
          de: "Was ist Hyperparameter?",
          nl: "Wat is Hyperparameter?"
        },
        options: [
          { en: "set before training: not learned from data", es: "set before training: not learned from data", de: "set before training: not learned from data", nl: "set before training: not learned from data" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          es: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          de: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning",
          nl: "Hyperparameter: set before training. not learned from data. learning rate, k in KNN. requires tuning"
        }
      },
      {
        question: {
          en: "What is Feature Engineering?",
          es: "¿Qué es Feature Engineering?",
          de: "Was ist Feature Engineering?",
          nl: "Wat is Feature Engineering?"
        },
        options: [
          { en: "creating better features: domain knowledge", es: "creating better features: domain knowledge", de: "creating better features: domain knowledge", nl: "creating better features: domain knowledge" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "A file system", es: "Un sistema de archivos", de: "Ein Dateisystem", nl: "Een bestandssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          es: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          de: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science",
          nl: "Feature Engineering: creating better features. domain knowledge. improves model performance. art and science"
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  }
})();