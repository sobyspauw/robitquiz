(function() {
  const level5 = {
    questions: [
      {
        question: {
          en: "What is Perceptron in neural networks?",
          es: "¿Qué es Perceptron en redes neuronales?",
          de: "Was ist Perceptron in neuronalen Netzen?",
          nl: "Wat is Perceptron in neurale netwerken?"
        },
        options: [
          { en: "simplest neural network", es: "simplest neural network", de: "simplest neural network", nl: "simplest neural network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          es: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          de: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          nl: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958"
        }
      },
      {
        question: {
          en: "What is Neuron in neural networks?",
          es: "¿Qué es Neuron en redes neuronales?",
          de: "Was ist Neuron in neuronalen Netzen?",
          nl: "Wat is Neuron in neurale netwerken?"
        },
        options: [
          { en: "basic unit of network", es: "basic unit of network", de: "basic unit of network", nl: "basic unit of network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          es: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          de: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          nl: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias"
        }
      },
      {
        question: {
          en: "What is Activation Function in neural networks?",
          es: "¿Qué es Activation Function en redes neuronales?",
          de: "Was ist Activation Function in neuronalen Netzen?",
          nl: "Wat is Activation Function in neurale netwerken?"
        },
        options: [
          { en: "introduces non-linearity", es: "introduces non-linearity", de: "introduces non-linearity", nl: "introduces non-linearity" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          es: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          de: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          nl: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns"
        }
      },
      {
        question: {
          en: "What is Weight in neural networks?",
          es: "¿Qué es Weight en redes neuronales?",
          de: "Was ist Weight in neuronalen Netzen?",
          nl: "Wat is Weight in neurale netwerken?"
        },
        options: [
          { en: "connection strength", es: "connection strength", de: "connection strength", nl: "connection strength" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Weight: connection strength, learned during training, multiplies input, determines importance",
          es: "Weight: connection strength, learned during training, multiplies input, determines importance",
          de: "Weight: connection strength, learned during training, multiplies input, determines importance",
          nl: "Weight: connection strength, learned during training, multiplies input, determines importance"
        }
      },
      {
        question: {
          en: "What is Bias in neural networks?",
          es: "¿Qué es Bias en redes neuronales?",
          de: "Was ist Bias in neuronalen Netzen?",
          nl: "Wat is Bias in neurale netwerken?"
        },
        options: [
          { en: "shifts activation function", es: "shifts activation function", de: "shifts activation function", nl: "shifts activation function" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          es: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          de: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          nl: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression"
        }
      },
      {
        question: {
          en: "What is Forward Propagation in neural networks?",
          es: "¿Qué es Forward Propagation en redes neuronales?",
          de: "Was ist Forward Propagation in neuronalen Netzen?",
          nl: "Wat is Forward Propagation in neurale netwerken?"
        },
        options: [
          { en: "input to output flow", es: "input to output flow", de: "input to output flow", nl: "input to output flow" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          es: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          de: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          nl: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training"
        }
      },
      {
        question: {
          en: "What is Backpropagation in neural networks?",
          es: "¿Qué es Backpropagation en redes neuronales?",
          de: "Was ist Backpropagation in neuronalen Netzen?",
          nl: "Wat is Backpropagation in neurale netwerken?"
        },
        options: [
          { en: "calculates gradients", es: "calculates gradients", de: "calculates gradients", nl: "calculates gradients" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          es: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          de: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          nl: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm"
        }
      },
      {
        question: {
          en: "What is Hidden Layer in neural networks?",
          es: "¿Qué es Hidden Layer en redes neuronales?",
          de: "Was ist Hidden Layer in neuronalen Netzen?",
          nl: "Wat is Hidden Layer in neurale netwerken?"
        },
        options: [
          { en: "between input and output", es: "between input and output", de: "between input and output", nl: "between input and output" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          es: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          de: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          nl: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features"
        }
      },
      {
        question: {
          en: "What is Input Layer in neural networks?",
          es: "¿Qué es Input Layer en redes neuronales?",
          de: "Was ist Input Layer in neuronalen Netzen?",
          nl: "Wat is Input Layer in neurale netwerken?"
        },
        options: [
          { en: "receives data", es: "receives data", de: "receives data", nl: "receives data" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          es: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          de: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          nl: "Input Layer: receives data, first layer, one neuron per feature, no processing"
        }
      },
      {
        question: {
          en: "What is Output Layer in neural networks?",
          es: "¿Qué es Output Layer en redes neuronales?",
          de: "Was ist Output Layer in neuronalen Netzen?",
          nl: "Wat is Output Layer in neurale netwerken?"
        },
        options: [
          { en: "produces prediction", es: "produces prediction", de: "produces prediction", nl: "produces prediction" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Output Layer: produces prediction, last layer, classification or regression, final result",
          es: "Output Layer: produces prediction, last layer, classification or regression, final result",
          de: "Output Layer: produces prediction, last layer, classification or regression, final result",
          nl: "Output Layer: produces prediction, last layer, classification or regression, final result"
        }
      },
      {
        question: {
          en: "What is Perceptron in neural networks?",
          es: "¿Qué es Perceptron en redes neuronales?",
          de: "Was ist Perceptron in neuronalen Netzen?",
          nl: "Wat is Perceptron in neurale netwerken?"
        },
        options: [
          { en: "simplest neural network", es: "simplest neural network", de: "simplest neural network", nl: "simplest neural network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          es: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          de: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          nl: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958"
        }
      },
      {
        question: {
          en: "What is Neuron in neural networks?",
          es: "¿Qué es Neuron en redes neuronales?",
          de: "Was ist Neuron in neuronalen Netzen?",
          nl: "Wat is Neuron in neurale netwerken?"
        },
        options: [
          { en: "basic unit of network", es: "basic unit of network", de: "basic unit of network", nl: "basic unit of network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          es: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          de: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          nl: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias"
        }
      },
      {
        question: {
          en: "What is Activation Function in neural networks?",
          es: "¿Qué es Activation Function en redes neuronales?",
          de: "Was ist Activation Function in neuronalen Netzen?",
          nl: "Wat is Activation Function in neurale netwerken?"
        },
        options: [
          { en: "introduces non-linearity", es: "introduces non-linearity", de: "introduces non-linearity", nl: "introduces non-linearity" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          es: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          de: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          nl: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns"
        }
      },
      {
        question: {
          en: "What is Weight in neural networks?",
          es: "¿Qué es Weight en redes neuronales?",
          de: "Was ist Weight in neuronalen Netzen?",
          nl: "Wat is Weight in neurale netwerken?"
        },
        options: [
          { en: "connection strength", es: "connection strength", de: "connection strength", nl: "connection strength" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Weight: connection strength, learned during training, multiplies input, determines importance",
          es: "Weight: connection strength, learned during training, multiplies input, determines importance",
          de: "Weight: connection strength, learned during training, multiplies input, determines importance",
          nl: "Weight: connection strength, learned during training, multiplies input, determines importance"
        }
      },
      {
        question: {
          en: "What is Bias in neural networks?",
          es: "¿Qué es Bias en redes neuronales?",
          de: "Was ist Bias in neuronalen Netzen?",
          nl: "Wat is Bias in neurale netwerken?"
        },
        options: [
          { en: "shifts activation function", es: "shifts activation function", de: "shifts activation function", nl: "shifts activation function" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          es: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          de: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          nl: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression"
        }
      },
      {
        question: {
          en: "What is Forward Propagation in neural networks?",
          es: "¿Qué es Forward Propagation en redes neuronales?",
          de: "Was ist Forward Propagation in neuronalen Netzen?",
          nl: "Wat is Forward Propagation in neurale netwerken?"
        },
        options: [
          { en: "input to output flow", es: "input to output flow", de: "input to output flow", nl: "input to output flow" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          es: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          de: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          nl: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training"
        }
      },
      {
        question: {
          en: "What is Backpropagation in neural networks?",
          es: "¿Qué es Backpropagation en redes neuronales?",
          de: "Was ist Backpropagation in neuronalen Netzen?",
          nl: "Wat is Backpropagation in neurale netwerken?"
        },
        options: [
          { en: "calculates gradients", es: "calculates gradients", de: "calculates gradients", nl: "calculates gradients" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          es: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          de: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          nl: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm"
        }
      },
      {
        question: {
          en: "What is Hidden Layer in neural networks?",
          es: "¿Qué es Hidden Layer en redes neuronales?",
          de: "Was ist Hidden Layer in neuronalen Netzen?",
          nl: "Wat is Hidden Layer in neurale netwerken?"
        },
        options: [
          { en: "between input and output", es: "between input and output", de: "between input and output", nl: "between input and output" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          es: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          de: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          nl: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features"
        }
      },
      {
        question: {
          en: "What is Input Layer in neural networks?",
          es: "¿Qué es Input Layer en redes neuronales?",
          de: "Was ist Input Layer in neuronalen Netzen?",
          nl: "Wat is Input Layer in neurale netwerken?"
        },
        options: [
          { en: "receives data", es: "receives data", de: "receives data", nl: "receives data" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          es: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          de: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          nl: "Input Layer: receives data, first layer, one neuron per feature, no processing"
        }
      },
      {
        question: {
          en: "What is Output Layer in neural networks?",
          es: "¿Qué es Output Layer en redes neuronales?",
          de: "Was ist Output Layer in neuronalen Netzen?",
          nl: "Wat is Output Layer in neurale netwerken?"
        },
        options: [
          { en: "produces prediction", es: "produces prediction", de: "produces prediction", nl: "produces prediction" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Output Layer: produces prediction, last layer, classification or regression, final result",
          es: "Output Layer: produces prediction, last layer, classification or regression, final result",
          de: "Output Layer: produces prediction, last layer, classification or regression, final result",
          nl: "Output Layer: produces prediction, last layer, classification or regression, final result"
        }
      },
      {
        question: {
          en: "What is Perceptron in neural networks?",
          es: "¿Qué es Perceptron en redes neuronales?",
          de: "Was ist Perceptron in neuronalen Netzen?",
          nl: "Wat is Perceptron in neurale netwerken?"
        },
        options: [
          { en: "simplest neural network", es: "simplest neural network", de: "simplest neural network", nl: "simplest neural network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          es: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          de: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          nl: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958"
        }
      },
      {
        question: {
          en: "What is Neuron in neural networks?",
          es: "¿Qué es Neuron en redes neuronales?",
          de: "Was ist Neuron in neuronalen Netzen?",
          nl: "Wat is Neuron in neurale netwerken?"
        },
        options: [
          { en: "basic unit of network", es: "basic unit of network", de: "basic unit of network", nl: "basic unit of network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          es: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          de: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          nl: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias"
        }
      },
      {
        question: {
          en: "What is Activation Function in neural networks?",
          es: "¿Qué es Activation Function en redes neuronales?",
          de: "Was ist Activation Function in neuronalen Netzen?",
          nl: "Wat is Activation Function in neurale netwerken?"
        },
        options: [
          { en: "introduces non-linearity", es: "introduces non-linearity", de: "introduces non-linearity", nl: "introduces non-linearity" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          es: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          de: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          nl: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns"
        }
      },
      {
        question: {
          en: "What is Weight in neural networks?",
          es: "¿Qué es Weight en redes neuronales?",
          de: "Was ist Weight in neuronalen Netzen?",
          nl: "Wat is Weight in neurale netwerken?"
        },
        options: [
          { en: "connection strength", es: "connection strength", de: "connection strength", nl: "connection strength" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Weight: connection strength, learned during training, multiplies input, determines importance",
          es: "Weight: connection strength, learned during training, multiplies input, determines importance",
          de: "Weight: connection strength, learned during training, multiplies input, determines importance",
          nl: "Weight: connection strength, learned during training, multiplies input, determines importance"
        }
      },
      {
        question: {
          en: "What is Bias in neural networks?",
          es: "¿Qué es Bias en redes neuronales?",
          de: "Was ist Bias in neuronalen Netzen?",
          nl: "Wat is Bias in neurale netwerken?"
        },
        options: [
          { en: "shifts activation function", es: "shifts activation function", de: "shifts activation function", nl: "shifts activation function" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          es: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          de: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          nl: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression"
        }
      },
      {
        question: {
          en: "What is Forward Propagation in neural networks?",
          es: "¿Qué es Forward Propagation en redes neuronales?",
          de: "Was ist Forward Propagation in neuronalen Netzen?",
          nl: "Wat is Forward Propagation in neurale netwerken?"
        },
        options: [
          { en: "input to output flow", es: "input to output flow", de: "input to output flow", nl: "input to output flow" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          es: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          de: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          nl: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training"
        }
      },
      {
        question: {
          en: "What is Backpropagation in neural networks?",
          es: "¿Qué es Backpropagation en redes neuronales?",
          de: "Was ist Backpropagation in neuronalen Netzen?",
          nl: "Wat is Backpropagation in neurale netwerken?"
        },
        options: [
          { en: "calculates gradients", es: "calculates gradients", de: "calculates gradients", nl: "calculates gradients" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          es: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          de: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          nl: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm"
        }
      },
      {
        question: {
          en: "What is Hidden Layer in neural networks?",
          es: "¿Qué es Hidden Layer en redes neuronales?",
          de: "Was ist Hidden Layer in neuronalen Netzen?",
          nl: "Wat is Hidden Layer in neurale netwerken?"
        },
        options: [
          { en: "between input and output", es: "between input and output", de: "between input and output", nl: "between input and output" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          es: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          de: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          nl: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features"
        }
      },
      {
        question: {
          en: "What is Input Layer in neural networks?",
          es: "¿Qué es Input Layer en redes neuronales?",
          de: "Was ist Input Layer in neuronalen Netzen?",
          nl: "Wat is Input Layer in neurale netwerken?"
        },
        options: [
          { en: "receives data", es: "receives data", de: "receives data", nl: "receives data" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          es: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          de: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          nl: "Input Layer: receives data, first layer, one neuron per feature, no processing"
        }
      },
      {
        question: {
          en: "What is Output Layer in neural networks?",
          es: "¿Qué es Output Layer en redes neuronales?",
          de: "Was ist Output Layer in neuronalen Netzen?",
          nl: "Wat is Output Layer in neurale netwerken?"
        },
        options: [
          { en: "produces prediction", es: "produces prediction", de: "produces prediction", nl: "produces prediction" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Output Layer: produces prediction, last layer, classification or regression, final result",
          es: "Output Layer: produces prediction, last layer, classification or regression, final result",
          de: "Output Layer: produces prediction, last layer, classification or regression, final result",
          nl: "Output Layer: produces prediction, last layer, classification or regression, final result"
        }
      },
      {
        question: {
          en: "What is Perceptron in neural networks?",
          es: "¿Qué es Perceptron en redes neuronales?",
          de: "Was ist Perceptron in neuronalen Netzen?",
          nl: "Wat is Perceptron in neurale netwerken?"
        },
        options: [
          { en: "simplest neural network", es: "simplest neural network", de: "simplest neural network", nl: "simplest neural network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          es: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          de: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          nl: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958"
        }
      },
      {
        question: {
          en: "What is Neuron in neural networks?",
          es: "¿Qué es Neuron en redes neuronales?",
          de: "Was ist Neuron in neuronalen Netzen?",
          nl: "Wat is Neuron in neurale netwerken?"
        },
        options: [
          { en: "basic unit of network", es: "basic unit of network", de: "basic unit of network", nl: "basic unit of network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          es: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          de: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          nl: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias"
        }
      },
      {
        question: {
          en: "What is Activation Function in neural networks?",
          es: "¿Qué es Activation Function en redes neuronales?",
          de: "Was ist Activation Function in neuronalen Netzen?",
          nl: "Wat is Activation Function in neurale netwerken?"
        },
        options: [
          { en: "introduces non-linearity", es: "introduces non-linearity", de: "introduces non-linearity", nl: "introduces non-linearity" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          es: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          de: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          nl: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns"
        }
      },
      {
        question: {
          en: "What is Weight in neural networks?",
          es: "¿Qué es Weight en redes neuronales?",
          de: "Was ist Weight in neuronalen Netzen?",
          nl: "Wat is Weight in neurale netwerken?"
        },
        options: [
          { en: "connection strength", es: "connection strength", de: "connection strength", nl: "connection strength" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Weight: connection strength, learned during training, multiplies input, determines importance",
          es: "Weight: connection strength, learned during training, multiplies input, determines importance",
          de: "Weight: connection strength, learned during training, multiplies input, determines importance",
          nl: "Weight: connection strength, learned during training, multiplies input, determines importance"
        }
      },
      {
        question: {
          en: "What is Bias in neural networks?",
          es: "¿Qué es Bias en redes neuronales?",
          de: "Was ist Bias in neuronalen Netzen?",
          nl: "Wat is Bias in neurale netwerken?"
        },
        options: [
          { en: "shifts activation function", es: "shifts activation function", de: "shifts activation function", nl: "shifts activation function" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          es: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          de: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          nl: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression"
        }
      },
      {
        question: {
          en: "What is Forward Propagation in neural networks?",
          es: "¿Qué es Forward Propagation en redes neuronales?",
          de: "Was ist Forward Propagation in neuronalen Netzen?",
          nl: "Wat is Forward Propagation in neurale netwerken?"
        },
        options: [
          { en: "input to output flow", es: "input to output flow", de: "input to output flow", nl: "input to output flow" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          es: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          de: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          nl: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training"
        }
      },
      {
        question: {
          en: "What is Backpropagation in neural networks?",
          es: "¿Qué es Backpropagation en redes neuronales?",
          de: "Was ist Backpropagation in neuronalen Netzen?",
          nl: "Wat is Backpropagation in neurale netwerken?"
        },
        options: [
          { en: "calculates gradients", es: "calculates gradients", de: "calculates gradients", nl: "calculates gradients" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          es: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          de: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          nl: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm"
        }
      },
      {
        question: {
          en: "What is Hidden Layer in neural networks?",
          es: "¿Qué es Hidden Layer en redes neuronales?",
          de: "Was ist Hidden Layer in neuronalen Netzen?",
          nl: "Wat is Hidden Layer in neurale netwerken?"
        },
        options: [
          { en: "between input and output", es: "between input and output", de: "between input and output", nl: "between input and output" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          es: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          de: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          nl: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features"
        }
      },
      {
        question: {
          en: "What is Input Layer in neural networks?",
          es: "¿Qué es Input Layer en redes neuronales?",
          de: "Was ist Input Layer in neuronalen Netzen?",
          nl: "Wat is Input Layer in neurale netwerken?"
        },
        options: [
          { en: "receives data", es: "receives data", de: "receives data", nl: "receives data" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          es: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          de: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          nl: "Input Layer: receives data, first layer, one neuron per feature, no processing"
        }
      },
      {
        question: {
          en: "What is Output Layer in neural networks?",
          es: "¿Qué es Output Layer en redes neuronales?",
          de: "Was ist Output Layer in neuronalen Netzen?",
          nl: "Wat is Output Layer in neurale netwerken?"
        },
        options: [
          { en: "produces prediction", es: "produces prediction", de: "produces prediction", nl: "produces prediction" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Output Layer: produces prediction, last layer, classification or regression, final result",
          es: "Output Layer: produces prediction, last layer, classification or regression, final result",
          de: "Output Layer: produces prediction, last layer, classification or regression, final result",
          nl: "Output Layer: produces prediction, last layer, classification or regression, final result"
        }
      },
      {
        question: {
          en: "What is Perceptron in neural networks?",
          es: "¿Qué es Perceptron en redes neuronales?",
          de: "Was ist Perceptron in neuronalen Netzen?",
          nl: "Wat is Perceptron in neurale netwerken?"
        },
        options: [
          { en: "simplest neural network", es: "simplest neural network", de: "simplest neural network", nl: "simplest neural network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          es: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          de: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          nl: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958"
        }
      },
      {
        question: {
          en: "What is Neuron in neural networks?",
          es: "¿Qué es Neuron en redes neuronales?",
          de: "Was ist Neuron in neuronalen Netzen?",
          nl: "Wat is Neuron in neurale netwerken?"
        },
        options: [
          { en: "basic unit of network", es: "basic unit of network", de: "basic unit of network", nl: "basic unit of network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          es: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          de: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          nl: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias"
        }
      },
      {
        question: {
          en: "What is Activation Function in neural networks?",
          es: "¿Qué es Activation Function en redes neuronales?",
          de: "Was ist Activation Function in neuronalen Netzen?",
          nl: "Wat is Activation Function in neurale netwerken?"
        },
        options: [
          { en: "introduces non-linearity", es: "introduces non-linearity", de: "introduces non-linearity", nl: "introduces non-linearity" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          es: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          de: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          nl: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns"
        }
      },
      {
        question: {
          en: "What is Weight in neural networks?",
          es: "¿Qué es Weight en redes neuronales?",
          de: "Was ist Weight in neuronalen Netzen?",
          nl: "Wat is Weight in neurale netwerken?"
        },
        options: [
          { en: "connection strength", es: "connection strength", de: "connection strength", nl: "connection strength" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Weight: connection strength, learned during training, multiplies input, determines importance",
          es: "Weight: connection strength, learned during training, multiplies input, determines importance",
          de: "Weight: connection strength, learned during training, multiplies input, determines importance",
          nl: "Weight: connection strength, learned during training, multiplies input, determines importance"
        }
      },
      {
        question: {
          en: "What is Bias in neural networks?",
          es: "¿Qué es Bias en redes neuronales?",
          de: "Was ist Bias in neuronalen Netzen?",
          nl: "Wat is Bias in neurale netwerken?"
        },
        options: [
          { en: "shifts activation function", es: "shifts activation function", de: "shifts activation function", nl: "shifts activation function" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          es: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          de: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          nl: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression"
        }
      },
      {
        question: {
          en: "What is Forward Propagation in neural networks?",
          es: "¿Qué es Forward Propagation en redes neuronales?",
          de: "Was ist Forward Propagation in neuronalen Netzen?",
          nl: "Wat is Forward Propagation in neurale netwerken?"
        },
        options: [
          { en: "input to output flow", es: "input to output flow", de: "input to output flow", nl: "input to output flow" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          es: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          de: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          nl: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training"
        }
      },
      {
        question: {
          en: "What is Backpropagation in neural networks?",
          es: "¿Qué es Backpropagation en redes neuronales?",
          de: "Was ist Backpropagation in neuronalen Netzen?",
          nl: "Wat is Backpropagation in neurale netwerken?"
        },
        options: [
          { en: "calculates gradients", es: "calculates gradients", de: "calculates gradients", nl: "calculates gradients" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          es: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          de: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          nl: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm"
        }
      },
      {
        question: {
          en: "What is Hidden Layer in neural networks?",
          es: "¿Qué es Hidden Layer en redes neuronales?",
          de: "Was ist Hidden Layer in neuronalen Netzen?",
          nl: "Wat is Hidden Layer in neurale netwerken?"
        },
        options: [
          { en: "between input and output", es: "between input and output", de: "between input and output", nl: "between input and output" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          es: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          de: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          nl: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features"
        }
      },
      {
        question: {
          en: "What is Input Layer in neural networks?",
          es: "¿Qué es Input Layer en redes neuronales?",
          de: "Was ist Input Layer in neuronalen Netzen?",
          nl: "Wat is Input Layer in neurale netwerken?"
        },
        options: [
          { en: "receives data", es: "receives data", de: "receives data", nl: "receives data" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          es: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          de: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          nl: "Input Layer: receives data, first layer, one neuron per feature, no processing"
        }
      },
      {
        question: {
          en: "What is Output Layer in neural networks?",
          es: "¿Qué es Output Layer en redes neuronales?",
          de: "Was ist Output Layer in neuronalen Netzen?",
          nl: "Wat is Output Layer in neurale netwerken?"
        },
        options: [
          { en: "produces prediction", es: "produces prediction", de: "produces prediction", nl: "produces prediction" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Output Layer: produces prediction, last layer, classification or regression, final result",
          es: "Output Layer: produces prediction, last layer, classification or regression, final result",
          de: "Output Layer: produces prediction, last layer, classification or regression, final result",
          nl: "Output Layer: produces prediction, last layer, classification or regression, final result"
        }
      },
      {
        question: {
          en: "What is Perceptron in neural networks?",
          es: "¿Qué es Perceptron en redes neuronales?",
          de: "Was ist Perceptron in neuronalen Netzen?",
          nl: "Wat is Perceptron in neurale netwerken?"
        },
        options: [
          { en: "simplest neural network", es: "simplest neural network", de: "simplest neural network", nl: "simplest neural network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          es: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          de: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          nl: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958"
        }
      },
      {
        question: {
          en: "What is Neuron in neural networks?",
          es: "¿Qué es Neuron en redes neuronales?",
          de: "Was ist Neuron in neuronalen Netzen?",
          nl: "Wat is Neuron in neurale netwerken?"
        },
        options: [
          { en: "basic unit of network", es: "basic unit of network", de: "basic unit of network", nl: "basic unit of network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          es: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          de: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          nl: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias"
        }
      },
      {
        question: {
          en: "What is Activation Function in neural networks?",
          es: "¿Qué es Activation Function en redes neuronales?",
          de: "Was ist Activation Function in neuronalen Netzen?",
          nl: "Wat is Activation Function in neurale netwerken?"
        },
        options: [
          { en: "introduces non-linearity", es: "introduces non-linearity", de: "introduces non-linearity", nl: "introduces non-linearity" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          es: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          de: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          nl: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns"
        }
      },
      {
        question: {
          en: "What is Weight in neural networks?",
          es: "¿Qué es Weight en redes neuronales?",
          de: "Was ist Weight in neuronalen Netzen?",
          nl: "Wat is Weight in neurale netwerken?"
        },
        options: [
          { en: "connection strength", es: "connection strength", de: "connection strength", nl: "connection strength" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Weight: connection strength, learned during training, multiplies input, determines importance",
          es: "Weight: connection strength, learned during training, multiplies input, determines importance",
          de: "Weight: connection strength, learned during training, multiplies input, determines importance",
          nl: "Weight: connection strength, learned during training, multiplies input, determines importance"
        }
      },
      {
        question: {
          en: "What is Bias in neural networks?",
          es: "¿Qué es Bias en redes neuronales?",
          de: "Was ist Bias in neuronalen Netzen?",
          nl: "Wat is Bias in neurale netwerken?"
        },
        options: [
          { en: "shifts activation function", es: "shifts activation function", de: "shifts activation function", nl: "shifts activation function" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          es: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          de: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          nl: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression"
        }
      },
      {
        question: {
          en: "What is Forward Propagation in neural networks?",
          es: "¿Qué es Forward Propagation en redes neuronales?",
          de: "Was ist Forward Propagation in neuronalen Netzen?",
          nl: "Wat is Forward Propagation in neurale netwerken?"
        },
        options: [
          { en: "input to output flow", es: "input to output flow", de: "input to output flow", nl: "input to output flow" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          es: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          de: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          nl: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training"
        }
      },
      {
        question: {
          en: "What is Backpropagation in neural networks?",
          es: "¿Qué es Backpropagation en redes neuronales?",
          de: "Was ist Backpropagation in neuronalen Netzen?",
          nl: "Wat is Backpropagation in neurale netwerken?"
        },
        options: [
          { en: "calculates gradients", es: "calculates gradients", de: "calculates gradients", nl: "calculates gradients" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          es: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          de: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          nl: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm"
        }
      },
      {
        question: {
          en: "What is Hidden Layer in neural networks?",
          es: "¿Qué es Hidden Layer en redes neuronales?",
          de: "Was ist Hidden Layer in neuronalen Netzen?",
          nl: "Wat is Hidden Layer in neurale netwerken?"
        },
        options: [
          { en: "between input and output", es: "between input and output", de: "between input and output", nl: "between input and output" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          es: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          de: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          nl: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features"
        }
      },
      {
        question: {
          en: "What is Input Layer in neural networks?",
          es: "¿Qué es Input Layer en redes neuronales?",
          de: "Was ist Input Layer in neuronalen Netzen?",
          nl: "Wat is Input Layer in neurale netwerken?"
        },
        options: [
          { en: "receives data", es: "receives data", de: "receives data", nl: "receives data" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          es: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          de: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          nl: "Input Layer: receives data, first layer, one neuron per feature, no processing"
        }
      },
      {
        question: {
          en: "What is Output Layer in neural networks?",
          es: "¿Qué es Output Layer en redes neuronales?",
          de: "Was ist Output Layer in neuronalen Netzen?",
          nl: "Wat is Output Layer in neurale netwerken?"
        },
        options: [
          { en: "produces prediction", es: "produces prediction", de: "produces prediction", nl: "produces prediction" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Output Layer: produces prediction, last layer, classification or regression, final result",
          es: "Output Layer: produces prediction, last layer, classification or regression, final result",
          de: "Output Layer: produces prediction, last layer, classification or regression, final result",
          nl: "Output Layer: produces prediction, last layer, classification or regression, final result"
        }
      },
      {
        question: {
          en: "What is Perceptron in neural networks?",
          es: "¿Qué es Perceptron en redes neuronales?",
          de: "Was ist Perceptron in neuronalen Netzen?",
          nl: "Wat is Perceptron in neurale netwerken?"
        },
        options: [
          { en: "simplest neural network", es: "simplest neural network", de: "simplest neural network", nl: "simplest neural network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          es: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          de: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          nl: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958"
        }
      },
      {
        question: {
          en: "What is Neuron in neural networks?",
          es: "¿Qué es Neuron en redes neuronales?",
          de: "Was ist Neuron in neuronalen Netzen?",
          nl: "Wat is Neuron in neurale netwerken?"
        },
        options: [
          { en: "basic unit of network", es: "basic unit of network", de: "basic unit of network", nl: "basic unit of network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          es: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          de: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          nl: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias"
        }
      },
      {
        question: {
          en: "What is Activation Function in neural networks?",
          es: "¿Qué es Activation Function en redes neuronales?",
          de: "Was ist Activation Function in neuronalen Netzen?",
          nl: "Wat is Activation Function in neurale netwerken?"
        },
        options: [
          { en: "introduces non-linearity", es: "introduces non-linearity", de: "introduces non-linearity", nl: "introduces non-linearity" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          es: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          de: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          nl: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns"
        }
      },
      {
        question: {
          en: "What is Weight in neural networks?",
          es: "¿Qué es Weight en redes neuronales?",
          de: "Was ist Weight in neuronalen Netzen?",
          nl: "Wat is Weight in neurale netwerken?"
        },
        options: [
          { en: "connection strength", es: "connection strength", de: "connection strength", nl: "connection strength" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Weight: connection strength, learned during training, multiplies input, determines importance",
          es: "Weight: connection strength, learned during training, multiplies input, determines importance",
          de: "Weight: connection strength, learned during training, multiplies input, determines importance",
          nl: "Weight: connection strength, learned during training, multiplies input, determines importance"
        }
      },
      {
        question: {
          en: "What is Bias in neural networks?",
          es: "¿Qué es Bias en redes neuronales?",
          de: "Was ist Bias in neuronalen Netzen?",
          nl: "Wat is Bias in neurale netwerken?"
        },
        options: [
          { en: "shifts activation function", es: "shifts activation function", de: "shifts activation function", nl: "shifts activation function" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          es: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          de: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          nl: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression"
        }
      },
      {
        question: {
          en: "What is Forward Propagation in neural networks?",
          es: "¿Qué es Forward Propagation en redes neuronales?",
          de: "Was ist Forward Propagation in neuronalen Netzen?",
          nl: "Wat is Forward Propagation in neurale netwerken?"
        },
        options: [
          { en: "input to output flow", es: "input to output flow", de: "input to output flow", nl: "input to output flow" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          es: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          de: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          nl: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training"
        }
      },
      {
        question: {
          en: "What is Backpropagation in neural networks?",
          es: "¿Qué es Backpropagation en redes neuronales?",
          de: "Was ist Backpropagation in neuronalen Netzen?",
          nl: "Wat is Backpropagation in neurale netwerken?"
        },
        options: [
          { en: "calculates gradients", es: "calculates gradients", de: "calculates gradients", nl: "calculates gradients" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          es: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          de: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          nl: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm"
        }
      },
      {
        question: {
          en: "What is Hidden Layer in neural networks?",
          es: "¿Qué es Hidden Layer en redes neuronales?",
          de: "Was ist Hidden Layer in neuronalen Netzen?",
          nl: "Wat is Hidden Layer in neurale netwerken?"
        },
        options: [
          { en: "between input and output", es: "between input and output", de: "between input and output", nl: "between input and output" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          es: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          de: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          nl: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features"
        }
      },
      {
        question: {
          en: "What is Input Layer in neural networks?",
          es: "¿Qué es Input Layer en redes neuronales?",
          de: "Was ist Input Layer in neuronalen Netzen?",
          nl: "Wat is Input Layer in neurale netwerken?"
        },
        options: [
          { en: "receives data", es: "receives data", de: "receives data", nl: "receives data" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          es: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          de: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          nl: "Input Layer: receives data, first layer, one neuron per feature, no processing"
        }
      },
      {
        question: {
          en: "What is Output Layer in neural networks?",
          es: "¿Qué es Output Layer en redes neuronales?",
          de: "Was ist Output Layer in neuronalen Netzen?",
          nl: "Wat is Output Layer in neurale netwerken?"
        },
        options: [
          { en: "produces prediction", es: "produces prediction", de: "produces prediction", nl: "produces prediction" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Output Layer: produces prediction, last layer, classification or regression, final result",
          es: "Output Layer: produces prediction, last layer, classification or regression, final result",
          de: "Output Layer: produces prediction, last layer, classification or regression, final result",
          nl: "Output Layer: produces prediction, last layer, classification or regression, final result"
        }
      },
      {
        question: {
          en: "What is Perceptron in neural networks?",
          es: "¿Qué es Perceptron en redes neuronales?",
          de: "Was ist Perceptron in neuronalen Netzen?",
          nl: "Wat is Perceptron in neurale netwerken?"
        },
        options: [
          { en: "simplest neural network", es: "simplest neural network", de: "simplest neural network", nl: "simplest neural network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          es: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          de: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          nl: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958"
        }
      },
      {
        question: {
          en: "What is Neuron in neural networks?",
          es: "¿Qué es Neuron en redes neuronales?",
          de: "Was ist Neuron in neuronalen Netzen?",
          nl: "Wat is Neuron in neurale netwerken?"
        },
        options: [
          { en: "basic unit of network", es: "basic unit of network", de: "basic unit of network", nl: "basic unit of network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          es: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          de: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          nl: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias"
        }
      },
      {
        question: {
          en: "What is Activation Function in neural networks?",
          es: "¿Qué es Activation Function en redes neuronales?",
          de: "Was ist Activation Function in neuronalen Netzen?",
          nl: "Wat is Activation Function in neurale netwerken?"
        },
        options: [
          { en: "introduces non-linearity", es: "introduces non-linearity", de: "introduces non-linearity", nl: "introduces non-linearity" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          es: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          de: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          nl: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns"
        }
      },
      {
        question: {
          en: "What is Weight in neural networks?",
          es: "¿Qué es Weight en redes neuronales?",
          de: "Was ist Weight in neuronalen Netzen?",
          nl: "Wat is Weight in neurale netwerken?"
        },
        options: [
          { en: "connection strength", es: "connection strength", de: "connection strength", nl: "connection strength" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Weight: connection strength, learned during training, multiplies input, determines importance",
          es: "Weight: connection strength, learned during training, multiplies input, determines importance",
          de: "Weight: connection strength, learned during training, multiplies input, determines importance",
          nl: "Weight: connection strength, learned during training, multiplies input, determines importance"
        }
      },
      {
        question: {
          en: "What is Bias in neural networks?",
          es: "¿Qué es Bias en redes neuronales?",
          de: "Was ist Bias in neuronalen Netzen?",
          nl: "Wat is Bias in neurale netwerken?"
        },
        options: [
          { en: "shifts activation function", es: "shifts activation function", de: "shifts activation function", nl: "shifts activation function" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          es: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          de: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          nl: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression"
        }
      },
      {
        question: {
          en: "What is Forward Propagation in neural networks?",
          es: "¿Qué es Forward Propagation en redes neuronales?",
          de: "Was ist Forward Propagation in neuronalen Netzen?",
          nl: "Wat is Forward Propagation in neurale netwerken?"
        },
        options: [
          { en: "input to output flow", es: "input to output flow", de: "input to output flow", nl: "input to output flow" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          es: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          de: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          nl: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training"
        }
      },
      {
        question: {
          en: "What is Backpropagation in neural networks?",
          es: "¿Qué es Backpropagation en redes neuronales?",
          de: "Was ist Backpropagation in neuronalen Netzen?",
          nl: "Wat is Backpropagation in neurale netwerken?"
        },
        options: [
          { en: "calculates gradients", es: "calculates gradients", de: "calculates gradients", nl: "calculates gradients" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          es: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          de: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          nl: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm"
        }
      },
      {
        question: {
          en: "What is Hidden Layer in neural networks?",
          es: "¿Qué es Hidden Layer en redes neuronales?",
          de: "Was ist Hidden Layer in neuronalen Netzen?",
          nl: "Wat is Hidden Layer in neurale netwerken?"
        },
        options: [
          { en: "between input and output", es: "between input and output", de: "between input and output", nl: "between input and output" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          es: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          de: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          nl: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features"
        }
      },
      {
        question: {
          en: "What is Input Layer in neural networks?",
          es: "¿Qué es Input Layer en redes neuronales?",
          de: "Was ist Input Layer in neuronalen Netzen?",
          nl: "Wat is Input Layer in neurale netwerken?"
        },
        options: [
          { en: "receives data", es: "receives data", de: "receives data", nl: "receives data" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          es: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          de: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          nl: "Input Layer: receives data, first layer, one neuron per feature, no processing"
        }
      },
      {
        question: {
          en: "What is Output Layer in neural networks?",
          es: "¿Qué es Output Layer en redes neuronales?",
          de: "Was ist Output Layer in neuronalen Netzen?",
          nl: "Wat is Output Layer in neurale netwerken?"
        },
        options: [
          { en: "produces prediction", es: "produces prediction", de: "produces prediction", nl: "produces prediction" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Output Layer: produces prediction, last layer, classification or regression, final result",
          es: "Output Layer: produces prediction, last layer, classification or regression, final result",
          de: "Output Layer: produces prediction, last layer, classification or regression, final result",
          nl: "Output Layer: produces prediction, last layer, classification or regression, final result"
        }
      },
      {
        question: {
          en: "What is Perceptron in neural networks?",
          es: "¿Qué es Perceptron en redes neuronales?",
          de: "Was ist Perceptron in neuronalen Netzen?",
          nl: "Wat is Perceptron in neurale netwerken?"
        },
        options: [
          { en: "simplest neural network", es: "simplest neural network", de: "simplest neural network", nl: "simplest neural network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          es: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          de: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          nl: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958"
        }
      },
      {
        question: {
          en: "What is Neuron in neural networks?",
          es: "¿Qué es Neuron en redes neuronales?",
          de: "Was ist Neuron in neuronalen Netzen?",
          nl: "Wat is Neuron in neurale netwerken?"
        },
        options: [
          { en: "basic unit of network", es: "basic unit of network", de: "basic unit of network", nl: "basic unit of network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          es: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          de: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          nl: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias"
        }
      },
      {
        question: {
          en: "What is Activation Function in neural networks?",
          es: "¿Qué es Activation Function en redes neuronales?",
          de: "Was ist Activation Function in neuronalen Netzen?",
          nl: "Wat is Activation Function in neurale netwerken?"
        },
        options: [
          { en: "introduces non-linearity", es: "introduces non-linearity", de: "introduces non-linearity", nl: "introduces non-linearity" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          es: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          de: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          nl: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns"
        }
      },
      {
        question: {
          en: "What is Weight in neural networks?",
          es: "¿Qué es Weight en redes neuronales?",
          de: "Was ist Weight in neuronalen Netzen?",
          nl: "Wat is Weight in neurale netwerken?"
        },
        options: [
          { en: "connection strength", es: "connection strength", de: "connection strength", nl: "connection strength" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Weight: connection strength, learned during training, multiplies input, determines importance",
          es: "Weight: connection strength, learned during training, multiplies input, determines importance",
          de: "Weight: connection strength, learned during training, multiplies input, determines importance",
          nl: "Weight: connection strength, learned during training, multiplies input, determines importance"
        }
      },
      {
        question: {
          en: "What is Bias in neural networks?",
          es: "¿Qué es Bias en redes neuronales?",
          de: "Was ist Bias in neuronalen Netzen?",
          nl: "Wat is Bias in neurale netwerken?"
        },
        options: [
          { en: "shifts activation function", es: "shifts activation function", de: "shifts activation function", nl: "shifts activation function" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          es: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          de: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          nl: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression"
        }
      },
      {
        question: {
          en: "What is Forward Propagation in neural networks?",
          es: "¿Qué es Forward Propagation en redes neuronales?",
          de: "Was ist Forward Propagation in neuronalen Netzen?",
          nl: "Wat is Forward Propagation in neurale netwerken?"
        },
        options: [
          { en: "input to output flow", es: "input to output flow", de: "input to output flow", nl: "input to output flow" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          es: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          de: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          nl: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training"
        }
      },
      {
        question: {
          en: "What is Backpropagation in neural networks?",
          es: "¿Qué es Backpropagation en redes neuronales?",
          de: "Was ist Backpropagation in neuronalen Netzen?",
          nl: "Wat is Backpropagation in neurale netwerken?"
        },
        options: [
          { en: "calculates gradients", es: "calculates gradients", de: "calculates gradients", nl: "calculates gradients" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          es: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          de: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          nl: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm"
        }
      },
      {
        question: {
          en: "What is Hidden Layer in neural networks?",
          es: "¿Qué es Hidden Layer en redes neuronales?",
          de: "Was ist Hidden Layer in neuronalen Netzen?",
          nl: "Wat is Hidden Layer in neurale netwerken?"
        },
        options: [
          { en: "between input and output", es: "between input and output", de: "between input and output", nl: "between input and output" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          es: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          de: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          nl: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features"
        }
      },
      {
        question: {
          en: "What is Input Layer in neural networks?",
          es: "¿Qué es Input Layer en redes neuronales?",
          de: "Was ist Input Layer in neuronalen Netzen?",
          nl: "Wat is Input Layer in neurale netwerken?"
        },
        options: [
          { en: "receives data", es: "receives data", de: "receives data", nl: "receives data" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          es: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          de: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          nl: "Input Layer: receives data, first layer, one neuron per feature, no processing"
        }
      },
      {
        question: {
          en: "What is Output Layer in neural networks?",
          es: "¿Qué es Output Layer en redes neuronales?",
          de: "Was ist Output Layer in neuronalen Netzen?",
          nl: "Wat is Output Layer in neurale netwerken?"
        },
        options: [
          { en: "produces prediction", es: "produces prediction", de: "produces prediction", nl: "produces prediction" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Output Layer: produces prediction, last layer, classification or regression, final result",
          es: "Output Layer: produces prediction, last layer, classification or regression, final result",
          de: "Output Layer: produces prediction, last layer, classification or regression, final result",
          nl: "Output Layer: produces prediction, last layer, classification or regression, final result"
        }
      },
      {
        question: {
          en: "What is Perceptron in neural networks?",
          es: "¿Qué es Perceptron en redes neuronales?",
          de: "Was ist Perceptron in neuronalen Netzen?",
          nl: "Wat is Perceptron in neurale netwerken?"
        },
        options: [
          { en: "simplest neural network", es: "simplest neural network", de: "simplest neural network", nl: "simplest neural network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          es: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          de: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958",
          nl: "Perceptron: simplest neural network, single layer, linear classifier, Frank Rosenblatt 1958"
        }
      },
      {
        question: {
          en: "What is Neuron in neural networks?",
          es: "¿Qué es Neuron en redes neuronales?",
          de: "Was ist Neuron in neuronalen Netzen?",
          nl: "Wat is Neuron in neurale netwerken?"
        },
        options: [
          { en: "basic unit of network", es: "basic unit of network", de: "basic unit of network", nl: "basic unit of network" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          es: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          de: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias",
          nl: "Neuron: basic unit of network, takes inputs and produces output, mimics brain cell, has weights and bias"
        }
      },
      {
        question: {
          en: "What is Activation Function in neural networks?",
          es: "¿Qué es Activation Function en redes neuronales?",
          de: "Was ist Activation Function in neuronalen Netzen?",
          nl: "Wat is Activation Function in neurale netwerken?"
        },
        options: [
          { en: "introduces non-linearity", es: "introduces non-linearity", de: "introduces non-linearity", nl: "introduces non-linearity" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          es: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          de: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns",
          nl: "Activation Function: introduces non-linearity, transforms neuron output, ReLU, Sigmoid, Tanh, enables complex patterns"
        }
      },
      {
        question: {
          en: "What is Weight in neural networks?",
          es: "¿Qué es Weight en redes neuronales?",
          de: "Was ist Weight in neuronalen Netzen?",
          nl: "Wat is Weight in neurale netwerken?"
        },
        options: [
          { en: "connection strength", es: "connection strength", de: "connection strength", nl: "connection strength" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Weight: connection strength, learned during training, multiplies input, determines importance",
          es: "Weight: connection strength, learned during training, multiplies input, determines importance",
          de: "Weight: connection strength, learned during training, multiplies input, determines importance",
          nl: "Weight: connection strength, learned during training, multiplies input, determines importance"
        }
      },
      {
        question: {
          en: "What is Bias in neural networks?",
          es: "¿Qué es Bias en redes neuronales?",
          de: "Was ist Bias in neuronalen Netzen?",
          nl: "Wat is Bias in neurale netwerken?"
        },
        options: [
          { en: "shifts activation function", es: "shifts activation function", de: "shifts activation function", nl: "shifts activation function" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          es: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          de: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression",
          nl: "Bias: shifts activation function, allows flexibility, learned parameter, like intercept in regression"
        }
      },
      {
        question: {
          en: "What is Forward Propagation in neural networks?",
          es: "¿Qué es Forward Propagation en redes neuronales?",
          de: "Was ist Forward Propagation in neuronalen Netzen?",
          nl: "Wat is Forward Propagation in neurale netwerken?"
        },
        options: [
          { en: "input to output flow", es: "input to output flow", de: "input to output flow", nl: "input to output flow" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          es: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          de: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training",
          nl: "Forward Propagation: input to output flow, calculates predictions, layer by layer, first step in training"
        }
      },
      {
        question: {
          en: "What is Backpropagation in neural networks?",
          es: "¿Qué es Backpropagation en redes neuronales?",
          de: "Was ist Backpropagation in neuronalen Netzen?",
          nl: "Wat is Backpropagation in neurale netwerken?"
        },
        options: [
          { en: "calculates gradients", es: "calculates gradients", de: "calculates gradients", nl: "calculates gradients" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          es: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          de: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm",
          nl: "Backpropagation: calculates gradients, propagates error backwards, updates weights, key training algorithm"
        }
      },
      {
        question: {
          en: "What is Hidden Layer in neural networks?",
          es: "¿Qué es Hidden Layer en redes neuronales?",
          de: "Was ist Hidden Layer in neuronalen Netzen?",
          nl: "Wat is Hidden Layer in neurale netwerken?"
        },
        options: [
          { en: "between input and output", es: "between input and output", de: "between input and output", nl: "between input and output" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          es: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          de: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features",
          nl: "Hidden Layer: between input and output, learns representations, more layers = deeper network, extracts features"
        }
      },
      {
        question: {
          en: "What is Input Layer in neural networks?",
          es: "¿Qué es Input Layer en redes neuronales?",
          de: "Was ist Input Layer in neuronalen Netzen?",
          nl: "Wat is Input Layer in neurale netwerken?"
        },
        options: [
          { en: "receives data", es: "receives data", de: "receives data", nl: "receives data" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          es: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          de: "Input Layer: receives data, first layer, one neuron per feature, no processing",
          nl: "Input Layer: receives data, first layer, one neuron per feature, no processing"
        }
      },
      {
        question: {
          en: "What is Output Layer in neural networks?",
          es: "¿Qué es Output Layer en redes neuronales?",
          de: "Was ist Output Layer in neuronalen Netzen?",
          nl: "Wat is Output Layer in neurale netwerken?"
        },
        options: [
          { en: "produces prediction", es: "produces prediction", de: "produces prediction", nl: "produces prediction" },
          { en: "A type of computer", es: "Un tipo de computadora", de: "Ein Computertyp", nl: "Een type computer" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een software-tool" },
          { en: "A data format", es: "Un formato de datos", de: "Ein Datenformat", nl: "Een dataformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Output Layer: produces prediction, last layer, classification or regression, final result",
          es: "Output Layer: produces prediction, last layer, classification or regression, final result",
          de: "Output Layer: produces prediction, last layer, classification or regression, final result",
          nl: "Output Layer: produces prediction, last layer, classification or regression, final result"
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  }
})();