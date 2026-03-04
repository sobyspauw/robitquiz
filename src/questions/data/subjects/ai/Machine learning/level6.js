(function() {
  const level6 = {
    questions: [
      {
        question: {
          en: "What is ReLU activation function?",
          es: "¿Qué es la función de activación ReLU?",
          de: "Was ist die ReLU Aktivierungsfunktion?",
          nl: "Wat is de ReLU activatiefunctie?"
        },
        options: [
          { en: "Rectified Linear Unit: max(0, x)", es: "Rectified Linear Unit: max(0, x)", de: "Rectified Linear Unit: max(0, x)", nl: "Rectified Linear Unit: max(0, x)" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          es: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          de: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          nl: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Sigmoid activation function?",
          es: "¿Qué es la función de activación Sigmoid?",
          de: "Was ist die Sigmoid Aktivierungsfunktion?",
          nl: "Wat is de Sigmoid activatiefunctie?"
        },
        options: [
          { en: "S-shaped curve: outputs 0 to 1", es: "S-shaped curve: outputs 0 to 1", de: "S-shaped curve: outputs 0 to 1", nl: "S-shaped curve: outputs 0 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          es: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          de: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          nl: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Tanh activation function?",
          es: "¿Qué es la función de activación Tanh?",
          de: "Was ist die Tanh Aktivierungsfunktion?",
          nl: "Wat is de Tanh activatiefunctie?"
        },
        options: [
          { en: "hyperbolic tangent: outputs -1 to 1", es: "hyperbolic tangent: outputs -1 to 1", de: "hyperbolic tangent: outputs -1 to 1", nl: "hyperbolic tangent: outputs -1 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          es: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          de: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          nl: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid"
        }
      },
      {
        question: {
          en: "What is Softmax activation function?",
          es: "¿Qué es la función de activación Softmax?",
          de: "Was ist die Softmax Aktivierungsfunktion?",
          nl: "Wat is de Softmax activatiefunctie?"
        },
        options: [
          { en: "for multi-class classification: outputs probabilities", es: "for multi-class classification: outputs probabilities", de: "for multi-class classification: outputs probabilities", nl: "for multi-class classification: outputs probabilities" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          es: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          de: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          nl: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer"
        }
      },
      {
        question: {
          en: "What is Leaky ReLU activation function?",
          es: "¿Qué es la función de activación Leaky ReLU?",
          de: "Was ist die Leaky ReLU Aktivierungsfunktion?",
          nl: "Wat is de Leaky ReLU activatiefunctie?"
        },
        options: [
          { en: "allows small negative values: prevents dying neurons", es: "allows small negative values: prevents dying neurons", de: "allows small negative values: prevents dying neurons", nl: "allows small negative values: prevents dying neurons" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          es: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          de: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          nl: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter"
        }
      },
      {
        question: {
          en: "What is ELU activation function?",
          es: "¿Qué es la función de activación ELU?",
          de: "Was ist die ELU Aktivierungsfunktion?",
          nl: "Wat is de ELU activatiefunctie?"
        },
        options: [
          { en: "Exponential Linear Unit: smooth for negatives", es: "Exponential Linear Unit: smooth for negatives", de: "Exponential Linear Unit: smooth for negatives", nl: "Exponential Linear Unit: smooth for negatives" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          es: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          de: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          nl: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning"
        }
      },
      {
        question: {
          en: "What is Swish activation function?",
          es: "¿Qué es la función de activación Swish?",
          de: "Was ist die Swish Aktivierungsfunktion?",
          nl: "Wat is de Swish activatiefunctie?"
        },
        options: [
          { en: "x * sigmoid(x): self-gated", es: "x * sigmoid(x): self-gated", de: "x * sigmoid(x): self-gated", nl: "x * sigmoid(x): self-gated" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          es: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          de: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          nl: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU"
        }
      },
      {
        question: {
          en: "What is GELU activation function?",
          es: "¿Qué es la función de activación GELU?",
          de: "Was ist die GELU Aktivierungsfunktion?",
          nl: "Wat is de GELU activatiefunctie?"
        },
        options: [
          { en: "Gaussian Error Linear Unit: smooth approximation", es: "Gaussian Error Linear Unit: smooth approximation", de: "Gaussian Error Linear Unit: smooth approximation", nl: "Gaussian Error Linear Unit: smooth approximation" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          es: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          de: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          nl: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic"
        }
      },
      {
        question: {
          en: "What is Linear activation function?",
          es: "¿Qué es la función de activación Linear?",
          de: "Was ist die Linear Aktivierungsfunktion?",
          nl: "Wat is de Linear activatiefunctie?"
        },
        options: [
          { en: "no transformation: y = x", es: "no transformation: y = x", de: "no transformation: y = x", nl: "no transformation: y = x" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Linear: no transformation. y = x. regression output. no non-linearity",
          es: "Linear: no transformation. y = x. regression output. no non-linearity",
          de: "Linear: no transformation. y = x. regression output. no non-linearity",
          nl: "Linear: no transformation. y = x. regression output. no non-linearity"
        }
      },
      {
        question: {
          en: "What is Step Function activation function?",
          es: "¿Qué es la función de activación Step Function?",
          de: "Was ist die Step Function Aktivierungsfunktion?",
          nl: "Wat is de Step Function activatiefunctie?"
        },
        options: [
          { en: "binary output: 0 or 1", es: "binary output: 0 or 1", de: "binary output: 0 or 1", nl: "binary output: 0 or 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          es: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          de: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          nl: "Step Function: binary output. 0 or 1. not differentiable. rarely used"
        }
      },
      {
        question: {
          en: "What is ReLU activation function?",
          es: "¿Qué es la función de activación ReLU?",
          de: "Was ist die ReLU Aktivierungsfunktion?",
          nl: "Wat is de ReLU activatiefunctie?"
        },
        options: [
          { en: "Rectified Linear Unit: max(0, x)", es: "Rectified Linear Unit: max(0, x)", de: "Rectified Linear Unit: max(0, x)", nl: "Rectified Linear Unit: max(0, x)" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          es: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          de: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          nl: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Sigmoid activation function?",
          es: "¿Qué es la función de activación Sigmoid?",
          de: "Was ist die Sigmoid Aktivierungsfunktion?",
          nl: "Wat is de Sigmoid activatiefunctie?"
        },
        options: [
          { en: "S-shaped curve: outputs 0 to 1", es: "S-shaped curve: outputs 0 to 1", de: "S-shaped curve: outputs 0 to 1", nl: "S-shaped curve: outputs 0 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          es: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          de: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          nl: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Tanh activation function?",
          es: "¿Qué es la función de activación Tanh?",
          de: "Was ist die Tanh Aktivierungsfunktion?",
          nl: "Wat is de Tanh activatiefunctie?"
        },
        options: [
          { en: "hyperbolic tangent: outputs -1 to 1", es: "hyperbolic tangent: outputs -1 to 1", de: "hyperbolic tangent: outputs -1 to 1", nl: "hyperbolic tangent: outputs -1 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          es: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          de: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          nl: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid"
        }
      },
      {
        question: {
          en: "What is Softmax activation function?",
          es: "¿Qué es la función de activación Softmax?",
          de: "Was ist die Softmax Aktivierungsfunktion?",
          nl: "Wat is de Softmax activatiefunctie?"
        },
        options: [
          { en: "for multi-class classification: outputs probabilities", es: "for multi-class classification: outputs probabilities", de: "for multi-class classification: outputs probabilities", nl: "for multi-class classification: outputs probabilities" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          es: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          de: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          nl: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer"
        }
      },
      {
        question: {
          en: "What is Leaky ReLU activation function?",
          es: "¿Qué es la función de activación Leaky ReLU?",
          de: "Was ist die Leaky ReLU Aktivierungsfunktion?",
          nl: "Wat is de Leaky ReLU activatiefunctie?"
        },
        options: [
          { en: "allows small negative values: prevents dying neurons", es: "allows small negative values: prevents dying neurons", de: "allows small negative values: prevents dying neurons", nl: "allows small negative values: prevents dying neurons" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          es: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          de: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          nl: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter"
        }
      },
      {
        question: {
          en: "What is ELU activation function?",
          es: "¿Qué es la función de activación ELU?",
          de: "Was ist die ELU Aktivierungsfunktion?",
          nl: "Wat is de ELU activatiefunctie?"
        },
        options: [
          { en: "Exponential Linear Unit: smooth for negatives", es: "Exponential Linear Unit: smooth for negatives", de: "Exponential Linear Unit: smooth for negatives", nl: "Exponential Linear Unit: smooth for negatives" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          es: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          de: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          nl: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning"
        }
      },
      {
        question: {
          en: "What is Swish activation function?",
          es: "¿Qué es la función de activación Swish?",
          de: "Was ist die Swish Aktivierungsfunktion?",
          nl: "Wat is de Swish activatiefunctie?"
        },
        options: [
          { en: "x * sigmoid(x): self-gated", es: "x * sigmoid(x): self-gated", de: "x * sigmoid(x): self-gated", nl: "x * sigmoid(x): self-gated" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          es: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          de: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          nl: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU"
        }
      },
      {
        question: {
          en: "What is GELU activation function?",
          es: "¿Qué es la función de activación GELU?",
          de: "Was ist die GELU Aktivierungsfunktion?",
          nl: "Wat is de GELU activatiefunctie?"
        },
        options: [
          { en: "Gaussian Error Linear Unit: smooth approximation", es: "Gaussian Error Linear Unit: smooth approximation", de: "Gaussian Error Linear Unit: smooth approximation", nl: "Gaussian Error Linear Unit: smooth approximation" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          es: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          de: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          nl: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic"
        }
      },
      {
        question: {
          en: "What is Linear activation function?",
          es: "¿Qué es la función de activación Linear?",
          de: "Was ist die Linear Aktivierungsfunktion?",
          nl: "Wat is de Linear activatiefunctie?"
        },
        options: [
          { en: "no transformation: y = x", es: "no transformation: y = x", de: "no transformation: y = x", nl: "no transformation: y = x" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Linear: no transformation. y = x. regression output. no non-linearity",
          es: "Linear: no transformation. y = x. regression output. no non-linearity",
          de: "Linear: no transformation. y = x. regression output. no non-linearity",
          nl: "Linear: no transformation. y = x. regression output. no non-linearity"
        }
      },
      {
        question: {
          en: "What is Step Function activation function?",
          es: "¿Qué es la función de activación Step Function?",
          de: "Was ist die Step Function Aktivierungsfunktion?",
          nl: "Wat is de Step Function activatiefunctie?"
        },
        options: [
          { en: "binary output: 0 or 1", es: "binary output: 0 or 1", de: "binary output: 0 or 1", nl: "binary output: 0 or 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          es: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          de: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          nl: "Step Function: binary output. 0 or 1. not differentiable. rarely used"
        }
      },
      {
        question: {
          en: "What is ReLU activation function?",
          es: "¿Qué es la función de activación ReLU?",
          de: "Was ist die ReLU Aktivierungsfunktion?",
          nl: "Wat is de ReLU activatiefunctie?"
        },
        options: [
          { en: "Rectified Linear Unit: max(0, x)", es: "Rectified Linear Unit: max(0, x)", de: "Rectified Linear Unit: max(0, x)", nl: "Rectified Linear Unit: max(0, x)" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          es: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          de: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          nl: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Sigmoid activation function?",
          es: "¿Qué es la función de activación Sigmoid?",
          de: "Was ist die Sigmoid Aktivierungsfunktion?",
          nl: "Wat is de Sigmoid activatiefunctie?"
        },
        options: [
          { en: "S-shaped curve: outputs 0 to 1", es: "S-shaped curve: outputs 0 to 1", de: "S-shaped curve: outputs 0 to 1", nl: "S-shaped curve: outputs 0 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          es: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          de: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          nl: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Tanh activation function?",
          es: "¿Qué es la función de activación Tanh?",
          de: "Was ist die Tanh Aktivierungsfunktion?",
          nl: "Wat is de Tanh activatiefunctie?"
        },
        options: [
          { en: "hyperbolic tangent: outputs -1 to 1", es: "hyperbolic tangent: outputs -1 to 1", de: "hyperbolic tangent: outputs -1 to 1", nl: "hyperbolic tangent: outputs -1 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          es: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          de: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          nl: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid"
        }
      },
      {
        question: {
          en: "What is Softmax activation function?",
          es: "¿Qué es la función de activación Softmax?",
          de: "Was ist die Softmax Aktivierungsfunktion?",
          nl: "Wat is de Softmax activatiefunctie?"
        },
        options: [
          { en: "for multi-class classification: outputs probabilities", es: "for multi-class classification: outputs probabilities", de: "for multi-class classification: outputs probabilities", nl: "for multi-class classification: outputs probabilities" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          es: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          de: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          nl: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer"
        }
      },
      {
        question: {
          en: "What is Leaky ReLU activation function?",
          es: "¿Qué es la función de activación Leaky ReLU?",
          de: "Was ist die Leaky ReLU Aktivierungsfunktion?",
          nl: "Wat is de Leaky ReLU activatiefunctie?"
        },
        options: [
          { en: "allows small negative values: prevents dying neurons", es: "allows small negative values: prevents dying neurons", de: "allows small negative values: prevents dying neurons", nl: "allows small negative values: prevents dying neurons" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          es: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          de: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          nl: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter"
        }
      },
      {
        question: {
          en: "What is ELU activation function?",
          es: "¿Qué es la función de activación ELU?",
          de: "Was ist die ELU Aktivierungsfunktion?",
          nl: "Wat is de ELU activatiefunctie?"
        },
        options: [
          { en: "Exponential Linear Unit: smooth for negatives", es: "Exponential Linear Unit: smooth for negatives", de: "Exponential Linear Unit: smooth for negatives", nl: "Exponential Linear Unit: smooth for negatives" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          es: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          de: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          nl: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning"
        }
      },
      {
        question: {
          en: "What is Swish activation function?",
          es: "¿Qué es la función de activación Swish?",
          de: "Was ist die Swish Aktivierungsfunktion?",
          nl: "Wat is de Swish activatiefunctie?"
        },
        options: [
          { en: "x * sigmoid(x): self-gated", es: "x * sigmoid(x): self-gated", de: "x * sigmoid(x): self-gated", nl: "x * sigmoid(x): self-gated" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          es: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          de: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          nl: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU"
        }
      },
      {
        question: {
          en: "What is GELU activation function?",
          es: "¿Qué es la función de activación GELU?",
          de: "Was ist die GELU Aktivierungsfunktion?",
          nl: "Wat is de GELU activatiefunctie?"
        },
        options: [
          { en: "Gaussian Error Linear Unit: smooth approximation", es: "Gaussian Error Linear Unit: smooth approximation", de: "Gaussian Error Linear Unit: smooth approximation", nl: "Gaussian Error Linear Unit: smooth approximation" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          es: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          de: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          nl: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic"
        }
      },
      {
        question: {
          en: "What is Linear activation function?",
          es: "¿Qué es la función de activación Linear?",
          de: "Was ist die Linear Aktivierungsfunktion?",
          nl: "Wat is de Linear activatiefunctie?"
        },
        options: [
          { en: "no transformation: y = x", es: "no transformation: y = x", de: "no transformation: y = x", nl: "no transformation: y = x" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Linear: no transformation. y = x. regression output. no non-linearity",
          es: "Linear: no transformation. y = x. regression output. no non-linearity",
          de: "Linear: no transformation. y = x. regression output. no non-linearity",
          nl: "Linear: no transformation. y = x. regression output. no non-linearity"
        }
      },
      {
        question: {
          en: "What is Step Function activation function?",
          es: "¿Qué es la función de activación Step Function?",
          de: "Was ist die Step Function Aktivierungsfunktion?",
          nl: "Wat is de Step Function activatiefunctie?"
        },
        options: [
          { en: "binary output: 0 or 1", es: "binary output: 0 or 1", de: "binary output: 0 or 1", nl: "binary output: 0 or 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          es: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          de: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          nl: "Step Function: binary output. 0 or 1. not differentiable. rarely used"
        }
      },
      {
        question: {
          en: "What is ReLU activation function?",
          es: "¿Qué es la función de activación ReLU?",
          de: "Was ist die ReLU Aktivierungsfunktion?",
          nl: "Wat is de ReLU activatiefunctie?"
        },
        options: [
          { en: "Rectified Linear Unit: max(0, x)", es: "Rectified Linear Unit: max(0, x)", de: "Rectified Linear Unit: max(0, x)", nl: "Rectified Linear Unit: max(0, x)" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          es: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          de: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          nl: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Sigmoid activation function?",
          es: "¿Qué es la función de activación Sigmoid?",
          de: "Was ist die Sigmoid Aktivierungsfunktion?",
          nl: "Wat is de Sigmoid activatiefunctie?"
        },
        options: [
          { en: "S-shaped curve: outputs 0 to 1", es: "S-shaped curve: outputs 0 to 1", de: "S-shaped curve: outputs 0 to 1", nl: "S-shaped curve: outputs 0 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          es: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          de: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          nl: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Tanh activation function?",
          es: "¿Qué es la función de activación Tanh?",
          de: "Was ist die Tanh Aktivierungsfunktion?",
          nl: "Wat is de Tanh activatiefunctie?"
        },
        options: [
          { en: "hyperbolic tangent: outputs -1 to 1", es: "hyperbolic tangent: outputs -1 to 1", de: "hyperbolic tangent: outputs -1 to 1", nl: "hyperbolic tangent: outputs -1 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          es: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          de: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          nl: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid"
        }
      },
      {
        question: {
          en: "What is Softmax activation function?",
          es: "¿Qué es la función de activación Softmax?",
          de: "Was ist die Softmax Aktivierungsfunktion?",
          nl: "Wat is de Softmax activatiefunctie?"
        },
        options: [
          { en: "for multi-class classification: outputs probabilities", es: "for multi-class classification: outputs probabilities", de: "for multi-class classification: outputs probabilities", nl: "for multi-class classification: outputs probabilities" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          es: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          de: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          nl: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer"
        }
      },
      {
        question: {
          en: "What is Leaky ReLU activation function?",
          es: "¿Qué es la función de activación Leaky ReLU?",
          de: "Was ist die Leaky ReLU Aktivierungsfunktion?",
          nl: "Wat is de Leaky ReLU activatiefunctie?"
        },
        options: [
          { en: "allows small negative values: prevents dying neurons", es: "allows small negative values: prevents dying neurons", de: "allows small negative values: prevents dying neurons", nl: "allows small negative values: prevents dying neurons" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          es: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          de: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          nl: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter"
        }
      },
      {
        question: {
          en: "What is ELU activation function?",
          es: "¿Qué es la función de activación ELU?",
          de: "Was ist die ELU Aktivierungsfunktion?",
          nl: "Wat is de ELU activatiefunctie?"
        },
        options: [
          { en: "Exponential Linear Unit: smooth for negatives", es: "Exponential Linear Unit: smooth for negatives", de: "Exponential Linear Unit: smooth for negatives", nl: "Exponential Linear Unit: smooth for negatives" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          es: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          de: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          nl: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning"
        }
      },
      {
        question: {
          en: "What is Swish activation function?",
          es: "¿Qué es la función de activación Swish?",
          de: "Was ist die Swish Aktivierungsfunktion?",
          nl: "Wat is de Swish activatiefunctie?"
        },
        options: [
          { en: "x * sigmoid(x): self-gated", es: "x * sigmoid(x): self-gated", de: "x * sigmoid(x): self-gated", nl: "x * sigmoid(x): self-gated" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          es: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          de: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          nl: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU"
        }
      },
      {
        question: {
          en: "What is GELU activation function?",
          es: "¿Qué es la función de activación GELU?",
          de: "Was ist die GELU Aktivierungsfunktion?",
          nl: "Wat is de GELU activatiefunctie?"
        },
        options: [
          { en: "Gaussian Error Linear Unit: smooth approximation", es: "Gaussian Error Linear Unit: smooth approximation", de: "Gaussian Error Linear Unit: smooth approximation", nl: "Gaussian Error Linear Unit: smooth approximation" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          es: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          de: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          nl: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic"
        }
      },
      {
        question: {
          en: "What is Linear activation function?",
          es: "¿Qué es la función de activación Linear?",
          de: "Was ist die Linear Aktivierungsfunktion?",
          nl: "Wat is de Linear activatiefunctie?"
        },
        options: [
          { en: "no transformation: y = x", es: "no transformation: y = x", de: "no transformation: y = x", nl: "no transformation: y = x" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Linear: no transformation. y = x. regression output. no non-linearity",
          es: "Linear: no transformation. y = x. regression output. no non-linearity",
          de: "Linear: no transformation. y = x. regression output. no non-linearity",
          nl: "Linear: no transformation. y = x. regression output. no non-linearity"
        }
      },
      {
        question: {
          en: "What is Step Function activation function?",
          es: "¿Qué es la función de activación Step Function?",
          de: "Was ist die Step Function Aktivierungsfunktion?",
          nl: "Wat is de Step Function activatiefunctie?"
        },
        options: [
          { en: "binary output: 0 or 1", es: "binary output: 0 or 1", de: "binary output: 0 or 1", nl: "binary output: 0 or 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          es: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          de: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          nl: "Step Function: binary output. 0 or 1. not differentiable. rarely used"
        }
      },
      {
        question: {
          en: "What is ReLU activation function?",
          es: "¿Qué es la función de activación ReLU?",
          de: "Was ist die ReLU Aktivierungsfunktion?",
          nl: "Wat is de ReLU activatiefunctie?"
        },
        options: [
          { en: "Rectified Linear Unit: max(0, x)", es: "Rectified Linear Unit: max(0, x)", de: "Rectified Linear Unit: max(0, x)", nl: "Rectified Linear Unit: max(0, x)" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          es: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          de: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          nl: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Sigmoid activation function?",
          es: "¿Qué es la función de activación Sigmoid?",
          de: "Was ist die Sigmoid Aktivierungsfunktion?",
          nl: "Wat is de Sigmoid activatiefunctie?"
        },
        options: [
          { en: "S-shaped curve: outputs 0 to 1", es: "S-shaped curve: outputs 0 to 1", de: "S-shaped curve: outputs 0 to 1", nl: "S-shaped curve: outputs 0 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          es: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          de: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          nl: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Tanh activation function?",
          es: "¿Qué es la función de activación Tanh?",
          de: "Was ist die Tanh Aktivierungsfunktion?",
          nl: "Wat is de Tanh activatiefunctie?"
        },
        options: [
          { en: "hyperbolic tangent: outputs -1 to 1", es: "hyperbolic tangent: outputs -1 to 1", de: "hyperbolic tangent: outputs -1 to 1", nl: "hyperbolic tangent: outputs -1 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          es: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          de: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          nl: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid"
        }
      },
      {
        question: {
          en: "What is Softmax activation function?",
          es: "¿Qué es la función de activación Softmax?",
          de: "Was ist die Softmax Aktivierungsfunktion?",
          nl: "Wat is de Softmax activatiefunctie?"
        },
        options: [
          { en: "for multi-class classification: outputs probabilities", es: "for multi-class classification: outputs probabilities", de: "for multi-class classification: outputs probabilities", nl: "for multi-class classification: outputs probabilities" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          es: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          de: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          nl: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer"
        }
      },
      {
        question: {
          en: "What is Leaky ReLU activation function?",
          es: "¿Qué es la función de activación Leaky ReLU?",
          de: "Was ist die Leaky ReLU Aktivierungsfunktion?",
          nl: "Wat is de Leaky ReLU activatiefunctie?"
        },
        options: [
          { en: "allows small negative values: prevents dying neurons", es: "allows small negative values: prevents dying neurons", de: "allows small negative values: prevents dying neurons", nl: "allows small negative values: prevents dying neurons" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          es: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          de: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          nl: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter"
        }
      },
      {
        question: {
          en: "What is ELU activation function?",
          es: "¿Qué es la función de activación ELU?",
          de: "Was ist die ELU Aktivierungsfunktion?",
          nl: "Wat is de ELU activatiefunctie?"
        },
        options: [
          { en: "Exponential Linear Unit: smooth for negatives", es: "Exponential Linear Unit: smooth for negatives", de: "Exponential Linear Unit: smooth for negatives", nl: "Exponential Linear Unit: smooth for negatives" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          es: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          de: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          nl: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning"
        }
      },
      {
        question: {
          en: "What is Swish activation function?",
          es: "¿Qué es la función de activación Swish?",
          de: "Was ist die Swish Aktivierungsfunktion?",
          nl: "Wat is de Swish activatiefunctie?"
        },
        options: [
          { en: "x * sigmoid(x): self-gated", es: "x * sigmoid(x): self-gated", de: "x * sigmoid(x): self-gated", nl: "x * sigmoid(x): self-gated" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          es: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          de: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          nl: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU"
        }
      },
      {
        question: {
          en: "What is GELU activation function?",
          es: "¿Qué es la función de activación GELU?",
          de: "Was ist die GELU Aktivierungsfunktion?",
          nl: "Wat is de GELU activatiefunctie?"
        },
        options: [
          { en: "Gaussian Error Linear Unit: smooth approximation", es: "Gaussian Error Linear Unit: smooth approximation", de: "Gaussian Error Linear Unit: smooth approximation", nl: "Gaussian Error Linear Unit: smooth approximation" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          es: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          de: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          nl: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic"
        }
      },
      {
        question: {
          en: "What is Linear activation function?",
          es: "¿Qué es la función de activación Linear?",
          de: "Was ist die Linear Aktivierungsfunktion?",
          nl: "Wat is de Linear activatiefunctie?"
        },
        options: [
          { en: "no transformation: y = x", es: "no transformation: y = x", de: "no transformation: y = x", nl: "no transformation: y = x" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Linear: no transformation. y = x. regression output. no non-linearity",
          es: "Linear: no transformation. y = x. regression output. no non-linearity",
          de: "Linear: no transformation. y = x. regression output. no non-linearity",
          nl: "Linear: no transformation. y = x. regression output. no non-linearity"
        }
      },
      {
        question: {
          en: "What is Step Function activation function?",
          es: "¿Qué es la función de activación Step Function?",
          de: "Was ist die Step Function Aktivierungsfunktion?",
          nl: "Wat is de Step Function activatiefunctie?"
        },
        options: [
          { en: "binary output: 0 or 1", es: "binary output: 0 or 1", de: "binary output: 0 or 1", nl: "binary output: 0 or 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          es: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          de: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          nl: "Step Function: binary output. 0 or 1. not differentiable. rarely used"
        }
      },
      {
        question: {
          en: "What is ReLU activation function?",
          es: "¿Qué es la función de activación ReLU?",
          de: "Was ist die ReLU Aktivierungsfunktion?",
          nl: "Wat is de ReLU activatiefunctie?"
        },
        options: [
          { en: "Rectified Linear Unit: max(0, x)", es: "Rectified Linear Unit: max(0, x)", de: "Rectified Linear Unit: max(0, x)", nl: "Rectified Linear Unit: max(0, x)" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          es: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          de: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          nl: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Sigmoid activation function?",
          es: "¿Qué es la función de activación Sigmoid?",
          de: "Was ist die Sigmoid Aktivierungsfunktion?",
          nl: "Wat is de Sigmoid activatiefunctie?"
        },
        options: [
          { en: "S-shaped curve: outputs 0 to 1", es: "S-shaped curve: outputs 0 to 1", de: "S-shaped curve: outputs 0 to 1", nl: "S-shaped curve: outputs 0 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          es: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          de: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          nl: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Tanh activation function?",
          es: "¿Qué es la función de activación Tanh?",
          de: "Was ist die Tanh Aktivierungsfunktion?",
          nl: "Wat is de Tanh activatiefunctie?"
        },
        options: [
          { en: "hyperbolic tangent: outputs -1 to 1", es: "hyperbolic tangent: outputs -1 to 1", de: "hyperbolic tangent: outputs -1 to 1", nl: "hyperbolic tangent: outputs -1 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          es: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          de: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          nl: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid"
        }
      },
      {
        question: {
          en: "What is Softmax activation function?",
          es: "¿Qué es la función de activación Softmax?",
          de: "Was ist die Softmax Aktivierungsfunktion?",
          nl: "Wat is de Softmax activatiefunctie?"
        },
        options: [
          { en: "for multi-class classification: outputs probabilities", es: "for multi-class classification: outputs probabilities", de: "for multi-class classification: outputs probabilities", nl: "for multi-class classification: outputs probabilities" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          es: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          de: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          nl: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer"
        }
      },
      {
        question: {
          en: "What is Leaky ReLU activation function?",
          es: "¿Qué es la función de activación Leaky ReLU?",
          de: "Was ist die Leaky ReLU Aktivierungsfunktion?",
          nl: "Wat is de Leaky ReLU activatiefunctie?"
        },
        options: [
          { en: "allows small negative values: prevents dying neurons", es: "allows small negative values: prevents dying neurons", de: "allows small negative values: prevents dying neurons", nl: "allows small negative values: prevents dying neurons" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          es: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          de: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          nl: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter"
        }
      },
      {
        question: {
          en: "What is ELU activation function?",
          es: "¿Qué es la función de activación ELU?",
          de: "Was ist die ELU Aktivierungsfunktion?",
          nl: "Wat is de ELU activatiefunctie?"
        },
        options: [
          { en: "Exponential Linear Unit: smooth for negatives", es: "Exponential Linear Unit: smooth for negatives", de: "Exponential Linear Unit: smooth for negatives", nl: "Exponential Linear Unit: smooth for negatives" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          es: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          de: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          nl: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning"
        }
      },
      {
        question: {
          en: "What is Swish activation function?",
          es: "¿Qué es la función de activación Swish?",
          de: "Was ist die Swish Aktivierungsfunktion?",
          nl: "Wat is de Swish activatiefunctie?"
        },
        options: [
          { en: "x * sigmoid(x): self-gated", es: "x * sigmoid(x): self-gated", de: "x * sigmoid(x): self-gated", nl: "x * sigmoid(x): self-gated" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          es: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          de: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          nl: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU"
        }
      },
      {
        question: {
          en: "What is GELU activation function?",
          es: "¿Qué es la función de activación GELU?",
          de: "Was ist die GELU Aktivierungsfunktion?",
          nl: "Wat is de GELU activatiefunctie?"
        },
        options: [
          { en: "Gaussian Error Linear Unit: smooth approximation", es: "Gaussian Error Linear Unit: smooth approximation", de: "Gaussian Error Linear Unit: smooth approximation", nl: "Gaussian Error Linear Unit: smooth approximation" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          es: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          de: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          nl: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic"
        }
      },
      {
        question: {
          en: "What is Linear activation function?",
          es: "¿Qué es la función de activación Linear?",
          de: "Was ist die Linear Aktivierungsfunktion?",
          nl: "Wat is de Linear activatiefunctie?"
        },
        options: [
          { en: "no transformation: y = x", es: "no transformation: y = x", de: "no transformation: y = x", nl: "no transformation: y = x" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Linear: no transformation. y = x. regression output. no non-linearity",
          es: "Linear: no transformation. y = x. regression output. no non-linearity",
          de: "Linear: no transformation. y = x. regression output. no non-linearity",
          nl: "Linear: no transformation. y = x. regression output. no non-linearity"
        }
      },
      {
        question: {
          en: "What is Step Function activation function?",
          es: "¿Qué es la función de activación Step Function?",
          de: "Was ist die Step Function Aktivierungsfunktion?",
          nl: "Wat is de Step Function activatiefunctie?"
        },
        options: [
          { en: "binary output: 0 or 1", es: "binary output: 0 or 1", de: "binary output: 0 or 1", nl: "binary output: 0 or 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          es: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          de: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          nl: "Step Function: binary output. 0 or 1. not differentiable. rarely used"
        }
      },
      {
        question: {
          en: "What is ReLU activation function?",
          es: "¿Qué es la función de activación ReLU?",
          de: "Was ist die ReLU Aktivierungsfunktion?",
          nl: "Wat is de ReLU activatiefunctie?"
        },
        options: [
          { en: "Rectified Linear Unit: max(0, x)", es: "Rectified Linear Unit: max(0, x)", de: "Rectified Linear Unit: max(0, x)", nl: "Rectified Linear Unit: max(0, x)" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          es: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          de: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          nl: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Sigmoid activation function?",
          es: "¿Qué es la función de activación Sigmoid?",
          de: "Was ist die Sigmoid Aktivierungsfunktion?",
          nl: "Wat is de Sigmoid activatiefunctie?"
        },
        options: [
          { en: "S-shaped curve: outputs 0 to 1", es: "S-shaped curve: outputs 0 to 1", de: "S-shaped curve: outputs 0 to 1", nl: "S-shaped curve: outputs 0 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          es: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          de: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          nl: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Tanh activation function?",
          es: "¿Qué es la función de activación Tanh?",
          de: "Was ist die Tanh Aktivierungsfunktion?",
          nl: "Wat is de Tanh activatiefunctie?"
        },
        options: [
          { en: "hyperbolic tangent: outputs -1 to 1", es: "hyperbolic tangent: outputs -1 to 1", de: "hyperbolic tangent: outputs -1 to 1", nl: "hyperbolic tangent: outputs -1 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          es: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          de: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          nl: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid"
        }
      },
      {
        question: {
          en: "What is Softmax activation function?",
          es: "¿Qué es la función de activación Softmax?",
          de: "Was ist die Softmax Aktivierungsfunktion?",
          nl: "Wat is de Softmax activatiefunctie?"
        },
        options: [
          { en: "for multi-class classification: outputs probabilities", es: "for multi-class classification: outputs probabilities", de: "for multi-class classification: outputs probabilities", nl: "for multi-class classification: outputs probabilities" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          es: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          de: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          nl: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer"
        }
      },
      {
        question: {
          en: "What is Leaky ReLU activation function?",
          es: "¿Qué es la función de activación Leaky ReLU?",
          de: "Was ist die Leaky ReLU Aktivierungsfunktion?",
          nl: "Wat is de Leaky ReLU activatiefunctie?"
        },
        options: [
          { en: "allows small negative values: prevents dying neurons", es: "allows small negative values: prevents dying neurons", de: "allows small negative values: prevents dying neurons", nl: "allows small negative values: prevents dying neurons" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          es: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          de: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          nl: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter"
        }
      },
      {
        question: {
          en: "What is ELU activation function?",
          es: "¿Qué es la función de activación ELU?",
          de: "Was ist die ELU Aktivierungsfunktion?",
          nl: "Wat is de ELU activatiefunctie?"
        },
        options: [
          { en: "Exponential Linear Unit: smooth for negatives", es: "Exponential Linear Unit: smooth for negatives", de: "Exponential Linear Unit: smooth for negatives", nl: "Exponential Linear Unit: smooth for negatives" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          es: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          de: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          nl: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning"
        }
      },
      {
        question: {
          en: "What is Swish activation function?",
          es: "¿Qué es la función de activación Swish?",
          de: "Was ist die Swish Aktivierungsfunktion?",
          nl: "Wat is de Swish activatiefunctie?"
        },
        options: [
          { en: "x * sigmoid(x): self-gated", es: "x * sigmoid(x): self-gated", de: "x * sigmoid(x): self-gated", nl: "x * sigmoid(x): self-gated" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          es: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          de: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          nl: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU"
        }
      },
      {
        question: {
          en: "What is GELU activation function?",
          es: "¿Qué es la función de activación GELU?",
          de: "Was ist die GELU Aktivierungsfunktion?",
          nl: "Wat is de GELU activatiefunctie?"
        },
        options: [
          { en: "Gaussian Error Linear Unit: smooth approximation", es: "Gaussian Error Linear Unit: smooth approximation", de: "Gaussian Error Linear Unit: smooth approximation", nl: "Gaussian Error Linear Unit: smooth approximation" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          es: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          de: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          nl: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic"
        }
      },
      {
        question: {
          en: "What is Linear activation function?",
          es: "¿Qué es la función de activación Linear?",
          de: "Was ist die Linear Aktivierungsfunktion?",
          nl: "Wat is de Linear activatiefunctie?"
        },
        options: [
          { en: "no transformation: y = x", es: "no transformation: y = x", de: "no transformation: y = x", nl: "no transformation: y = x" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Linear: no transformation. y = x. regression output. no non-linearity",
          es: "Linear: no transformation. y = x. regression output. no non-linearity",
          de: "Linear: no transformation. y = x. regression output. no non-linearity",
          nl: "Linear: no transformation. y = x. regression output. no non-linearity"
        }
      },
      {
        question: {
          en: "What is Step Function activation function?",
          es: "¿Qué es la función de activación Step Function?",
          de: "Was ist die Step Function Aktivierungsfunktion?",
          nl: "Wat is de Step Function activatiefunctie?"
        },
        options: [
          { en: "binary output: 0 or 1", es: "binary output: 0 or 1", de: "binary output: 0 or 1", nl: "binary output: 0 or 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          es: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          de: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          nl: "Step Function: binary output. 0 or 1. not differentiable. rarely used"
        }
      },
      {
        question: {
          en: "What is ReLU activation function?",
          es: "¿Qué es la función de activación ReLU?",
          de: "Was ist die ReLU Aktivierungsfunktion?",
          nl: "Wat is de ReLU activatiefunctie?"
        },
        options: [
          { en: "Rectified Linear Unit: max(0, x)", es: "Rectified Linear Unit: max(0, x)", de: "Rectified Linear Unit: max(0, x)", nl: "Rectified Linear Unit: max(0, x)" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          es: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          de: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          nl: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Sigmoid activation function?",
          es: "¿Qué es la función de activación Sigmoid?",
          de: "Was ist die Sigmoid Aktivierungsfunktion?",
          nl: "Wat is de Sigmoid activatiefunctie?"
        },
        options: [
          { en: "S-shaped curve: outputs 0 to 1", es: "S-shaped curve: outputs 0 to 1", de: "S-shaped curve: outputs 0 to 1", nl: "S-shaped curve: outputs 0 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          es: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          de: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          nl: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Tanh activation function?",
          es: "¿Qué es la función de activación Tanh?",
          de: "Was ist die Tanh Aktivierungsfunktion?",
          nl: "Wat is de Tanh activatiefunctie?"
        },
        options: [
          { en: "hyperbolic tangent: outputs -1 to 1", es: "hyperbolic tangent: outputs -1 to 1", de: "hyperbolic tangent: outputs -1 to 1", nl: "hyperbolic tangent: outputs -1 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          es: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          de: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          nl: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid"
        }
      },
      {
        question: {
          en: "What is Softmax activation function?",
          es: "¿Qué es la función de activación Softmax?",
          de: "Was ist die Softmax Aktivierungsfunktion?",
          nl: "Wat is de Softmax activatiefunctie?"
        },
        options: [
          { en: "for multi-class classification: outputs probabilities", es: "for multi-class classification: outputs probabilities", de: "for multi-class classification: outputs probabilities", nl: "for multi-class classification: outputs probabilities" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          es: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          de: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          nl: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer"
        }
      },
      {
        question: {
          en: "What is Leaky ReLU activation function?",
          es: "¿Qué es la función de activación Leaky ReLU?",
          de: "Was ist die Leaky ReLU Aktivierungsfunktion?",
          nl: "Wat is de Leaky ReLU activatiefunctie?"
        },
        options: [
          { en: "allows small negative values: prevents dying neurons", es: "allows small negative values: prevents dying neurons", de: "allows small negative values: prevents dying neurons", nl: "allows small negative values: prevents dying neurons" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          es: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          de: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          nl: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter"
        }
      },
      {
        question: {
          en: "What is ELU activation function?",
          es: "¿Qué es la función de activación ELU?",
          de: "Was ist die ELU Aktivierungsfunktion?",
          nl: "Wat is de ELU activatiefunctie?"
        },
        options: [
          { en: "Exponential Linear Unit: smooth for negatives", es: "Exponential Linear Unit: smooth for negatives", de: "Exponential Linear Unit: smooth for negatives", nl: "Exponential Linear Unit: smooth for negatives" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          es: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          de: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          nl: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning"
        }
      },
      {
        question: {
          en: "What is Swish activation function?",
          es: "¿Qué es la función de activación Swish?",
          de: "Was ist die Swish Aktivierungsfunktion?",
          nl: "Wat is de Swish activatiefunctie?"
        },
        options: [
          { en: "x * sigmoid(x): self-gated", es: "x * sigmoid(x): self-gated", de: "x * sigmoid(x): self-gated", nl: "x * sigmoid(x): self-gated" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          es: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          de: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          nl: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU"
        }
      },
      {
        question: {
          en: "What is GELU activation function?",
          es: "¿Qué es la función de activación GELU?",
          de: "Was ist die GELU Aktivierungsfunktion?",
          nl: "Wat is de GELU activatiefunctie?"
        },
        options: [
          { en: "Gaussian Error Linear Unit: smooth approximation", es: "Gaussian Error Linear Unit: smooth approximation", de: "Gaussian Error Linear Unit: smooth approximation", nl: "Gaussian Error Linear Unit: smooth approximation" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          es: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          de: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          nl: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic"
        }
      },
      {
        question: {
          en: "What is Linear activation function?",
          es: "¿Qué es la función de activación Linear?",
          de: "Was ist die Linear Aktivierungsfunktion?",
          nl: "Wat is de Linear activatiefunctie?"
        },
        options: [
          { en: "no transformation: y = x", es: "no transformation: y = x", de: "no transformation: y = x", nl: "no transformation: y = x" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Linear: no transformation. y = x. regression output. no non-linearity",
          es: "Linear: no transformation. y = x. regression output. no non-linearity",
          de: "Linear: no transformation. y = x. regression output. no non-linearity",
          nl: "Linear: no transformation. y = x. regression output. no non-linearity"
        }
      },
      {
        question: {
          en: "What is Step Function activation function?",
          es: "¿Qué es la función de activación Step Function?",
          de: "Was ist die Step Function Aktivierungsfunktion?",
          nl: "Wat is de Step Function activatiefunctie?"
        },
        options: [
          { en: "binary output: 0 or 1", es: "binary output: 0 or 1", de: "binary output: 0 or 1", nl: "binary output: 0 or 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          es: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          de: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          nl: "Step Function: binary output. 0 or 1. not differentiable. rarely used"
        }
      },
      {
        question: {
          en: "What is ReLU activation function?",
          es: "¿Qué es la función de activación ReLU?",
          de: "Was ist die ReLU Aktivierungsfunktion?",
          nl: "Wat is de ReLU activatiefunctie?"
        },
        options: [
          { en: "Rectified Linear Unit: max(0, x)", es: "Rectified Linear Unit: max(0, x)", de: "Rectified Linear Unit: max(0, x)", nl: "Rectified Linear Unit: max(0, x)" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          es: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          de: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          nl: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Sigmoid activation function?",
          es: "¿Qué es la función de activación Sigmoid?",
          de: "Was ist die Sigmoid Aktivierungsfunktion?",
          nl: "Wat is de Sigmoid activatiefunctie?"
        },
        options: [
          { en: "S-shaped curve: outputs 0 to 1", es: "S-shaped curve: outputs 0 to 1", de: "S-shaped curve: outputs 0 to 1", nl: "S-shaped curve: outputs 0 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          es: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          de: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          nl: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Tanh activation function?",
          es: "¿Qué es la función de activación Tanh?",
          de: "Was ist die Tanh Aktivierungsfunktion?",
          nl: "Wat is de Tanh activatiefunctie?"
        },
        options: [
          { en: "hyperbolic tangent: outputs -1 to 1", es: "hyperbolic tangent: outputs -1 to 1", de: "hyperbolic tangent: outputs -1 to 1", nl: "hyperbolic tangent: outputs -1 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          es: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          de: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          nl: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid"
        }
      },
      {
        question: {
          en: "What is Softmax activation function?",
          es: "¿Qué es la función de activación Softmax?",
          de: "Was ist die Softmax Aktivierungsfunktion?",
          nl: "Wat is de Softmax activatiefunctie?"
        },
        options: [
          { en: "for multi-class classification: outputs probabilities", es: "for multi-class classification: outputs probabilities", de: "for multi-class classification: outputs probabilities", nl: "for multi-class classification: outputs probabilities" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          es: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          de: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          nl: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer"
        }
      },
      {
        question: {
          en: "What is Leaky ReLU activation function?",
          es: "¿Qué es la función de activación Leaky ReLU?",
          de: "Was ist die Leaky ReLU Aktivierungsfunktion?",
          nl: "Wat is de Leaky ReLU activatiefunctie?"
        },
        options: [
          { en: "allows small negative values: prevents dying neurons", es: "allows small negative values: prevents dying neurons", de: "allows small negative values: prevents dying neurons", nl: "allows small negative values: prevents dying neurons" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          es: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          de: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          nl: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter"
        }
      },
      {
        question: {
          en: "What is ELU activation function?",
          es: "¿Qué es la función de activación ELU?",
          de: "Was ist die ELU Aktivierungsfunktion?",
          nl: "Wat is de ELU activatiefunctie?"
        },
        options: [
          { en: "Exponential Linear Unit: smooth for negatives", es: "Exponential Linear Unit: smooth for negatives", de: "Exponential Linear Unit: smooth for negatives", nl: "Exponential Linear Unit: smooth for negatives" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          es: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          de: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          nl: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning"
        }
      },
      {
        question: {
          en: "What is Swish activation function?",
          es: "¿Qué es la función de activación Swish?",
          de: "Was ist die Swish Aktivierungsfunktion?",
          nl: "Wat is de Swish activatiefunctie?"
        },
        options: [
          { en: "x * sigmoid(x): self-gated", es: "x * sigmoid(x): self-gated", de: "x * sigmoid(x): self-gated", nl: "x * sigmoid(x): self-gated" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          es: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          de: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          nl: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU"
        }
      },
      {
        question: {
          en: "What is GELU activation function?",
          es: "¿Qué es la función de activación GELU?",
          de: "Was ist die GELU Aktivierungsfunktion?",
          nl: "Wat is de GELU activatiefunctie?"
        },
        options: [
          { en: "Gaussian Error Linear Unit: smooth approximation", es: "Gaussian Error Linear Unit: smooth approximation", de: "Gaussian Error Linear Unit: smooth approximation", nl: "Gaussian Error Linear Unit: smooth approximation" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          es: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          de: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          nl: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic"
        }
      },
      {
        question: {
          en: "What is Linear activation function?",
          es: "¿Qué es la función de activación Linear?",
          de: "Was ist die Linear Aktivierungsfunktion?",
          nl: "Wat is de Linear activatiefunctie?"
        },
        options: [
          { en: "no transformation: y = x", es: "no transformation: y = x", de: "no transformation: y = x", nl: "no transformation: y = x" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Linear: no transformation. y = x. regression output. no non-linearity",
          es: "Linear: no transformation. y = x. regression output. no non-linearity",
          de: "Linear: no transformation. y = x. regression output. no non-linearity",
          nl: "Linear: no transformation. y = x. regression output. no non-linearity"
        }
      },
      {
        question: {
          en: "What is Step Function activation function?",
          es: "¿Qué es la función de activación Step Function?",
          de: "Was ist die Step Function Aktivierungsfunktion?",
          nl: "Wat is de Step Function activatiefunctie?"
        },
        options: [
          { en: "binary output: 0 or 1", es: "binary output: 0 or 1", de: "binary output: 0 or 1", nl: "binary output: 0 or 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          es: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          de: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          nl: "Step Function: binary output. 0 or 1. not differentiable. rarely used"
        }
      },
      {
        question: {
          en: "What is ReLU activation function?",
          es: "¿Qué es la función de activación ReLU?",
          de: "Was ist die ReLU Aktivierungsfunktion?",
          nl: "Wat is de ReLU activatiefunctie?"
        },
        options: [
          { en: "Rectified Linear Unit: max(0, x)", es: "Rectified Linear Unit: max(0, x)", de: "Rectified Linear Unit: max(0, x)", nl: "Rectified Linear Unit: max(0, x)" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          es: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          de: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient",
          nl: "ReLU: Rectified Linear Unit. max(0, x). most popular activation. solves vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Sigmoid activation function?",
          es: "¿Qué es la función de activación Sigmoid?",
          de: "Was ist die Sigmoid Aktivierungsfunktion?",
          nl: "Wat is de Sigmoid activatiefunctie?"
        },
        options: [
          { en: "S-shaped curve: outputs 0 to 1", es: "S-shaped curve: outputs 0 to 1", de: "S-shaped curve: outputs 0 to 1", nl: "S-shaped curve: outputs 0 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          es: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          de: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient",
          nl: "Sigmoid: S-shaped curve. outputs 0 to 1. used in output layer. can cause vanishing gradient"
        }
      },
      {
        question: {
          en: "What is Tanh activation function?",
          es: "¿Qué es la función de activación Tanh?",
          de: "Was ist die Tanh Aktivierungsfunktion?",
          nl: "Wat is de Tanh activatiefunctie?"
        },
        options: [
          { en: "hyperbolic tangent: outputs -1 to 1", es: "hyperbolic tangent: outputs -1 to 1", de: "hyperbolic tangent: outputs -1 to 1", nl: "hyperbolic tangent: outputs -1 to 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          es: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          de: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid",
          nl: "Tanh: hyperbolic tangent. outputs -1 to 1. zero-centered. better than sigmoid"
        }
      },
      {
        question: {
          en: "What is Softmax activation function?",
          es: "¿Qué es la función de activación Softmax?",
          de: "Was ist die Softmax Aktivierungsfunktion?",
          nl: "Wat is de Softmax activatiefunctie?"
        },
        options: [
          { en: "for multi-class classification: outputs probabilities", es: "for multi-class classification: outputs probabilities", de: "for multi-class classification: outputs probabilities", nl: "for multi-class classification: outputs probabilities" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          es: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          de: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer",
          nl: "Softmax: for multi-class classification. outputs probabilities. sum equals 1. used in output layer"
        }
      },
      {
        question: {
          en: "What is Leaky ReLU activation function?",
          es: "¿Qué es la función de activación Leaky ReLU?",
          de: "Was ist die Leaky ReLU Aktivierungsfunktion?",
          nl: "Wat is de Leaky ReLU activatiefunctie?"
        },
        options: [
          { en: "allows small negative values: prevents dying neurons", es: "allows small negative values: prevents dying neurons", de: "allows small negative values: prevents dying neurons", nl: "allows small negative values: prevents dying neurons" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          es: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          de: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter",
          nl: "Leaky ReLU: allows small negative values. prevents dying neurons. variant of ReLU. alpha parameter"
        }
      },
      {
        question: {
          en: "What is ELU activation function?",
          es: "¿Qué es la función de activación ELU?",
          de: "Was ist die ELU Aktivierungsfunktion?",
          nl: "Wat is de ELU activatiefunctie?"
        },
        options: [
          { en: "Exponential Linear Unit: smooth for negatives", es: "Exponential Linear Unit: smooth for negatives", de: "Exponential Linear Unit: smooth for negatives", nl: "Exponential Linear Unit: smooth for negatives" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          es: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          de: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning",
          nl: "ELU: Exponential Linear Unit. smooth for negatives. mean closer to zero. better learning"
        }
      },
      {
        question: {
          en: "What is Swish activation function?",
          es: "¿Qué es la función de activación Swish?",
          de: "Was ist die Swish Aktivierungsfunktion?",
          nl: "Wat is de Swish activatiefunctie?"
        },
        options: [
          { en: "x * sigmoid(x): self-gated", es: "x * sigmoid(x): self-gated", de: "x * sigmoid(x): self-gated", nl: "x * sigmoid(x): self-gated" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          es: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          de: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU",
          nl: "Swish: x * sigmoid(x). self-gated. Google discovered. outperforms ReLU"
        }
      },
      {
        question: {
          en: "What is GELU activation function?",
          es: "¿Qué es la función de activación GELU?",
          de: "Was ist die GELU Aktivierungsfunktion?",
          nl: "Wat is de GELU activatiefunctie?"
        },
        options: [
          { en: "Gaussian Error Linear Unit: smooth approximation", es: "Gaussian Error Linear Unit: smooth approximation", de: "Gaussian Error Linear Unit: smooth approximation", nl: "Gaussian Error Linear Unit: smooth approximation" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          es: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          de: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic",
          nl: "GELU: Gaussian Error Linear Unit. smooth approximation. used in BERT. probabilistic"
        }
      },
      {
        question: {
          en: "What is Linear activation function?",
          es: "¿Qué es la función de activación Linear?",
          de: "Was ist die Linear Aktivierungsfunktion?",
          nl: "Wat is de Linear activatiefunctie?"
        },
        options: [
          { en: "no transformation: y = x", es: "no transformation: y = x", de: "no transformation: y = x", nl: "no transformation: y = x" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Linear: no transformation. y = x. regression output. no non-linearity",
          es: "Linear: no transformation. y = x. regression output. no non-linearity",
          de: "Linear: no transformation. y = x. regression output. no non-linearity",
          nl: "Linear: no transformation. y = x. regression output. no non-linearity"
        }
      },
      {
        question: {
          en: "What is Step Function activation function?",
          es: "¿Qué es la función de activación Step Function?",
          de: "Was ist die Step Function Aktivierungsfunktion?",
          nl: "Wat is de Step Function activatiefunctie?"
        },
        options: [
          { en: "binary output: 0 or 1", es: "binary output: 0 or 1", de: "binary output: 0 or 1", nl: "binary output: 0 or 1" },
          { en: "A database query", es: "Una consulta de BD", de: "Eine Datenbankabfrage", nl: "Een database-query" },
          { en: "A sorting algorithm", es: "Un algoritmo de ordenación", de: "Ein Sortieralgorithmus", nl: "Een sorteeralgoritme" },
          { en: "A file format", es: "Un formato de archivo", de: "Ein Dateiformat", nl: "Een bestandsformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          es: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          de: "Step Function: binary output. 0 or 1. not differentiable. rarely used",
          nl: "Step Function: binary output. 0 or 1. not differentiable. rarely used"
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  }
})();