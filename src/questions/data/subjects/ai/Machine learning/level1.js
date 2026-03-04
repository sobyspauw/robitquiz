(function() {
  const level1 = {
    questions: [
      {
        question: {
          en: "What is Machine Learning?",
          es: "¿Qué es el aprendizaje automático?",
          de: "Was ist maschinelles Lernen?",
          nl: "Wat is Machine Learning?"
        },
        options: [
          { en: "Teaching computers to learn from data", es: "Enseñar a las computadoras a aprender de datos", de: "Computern beibringen, aus Daten zu lernen", nl: "Computers leren om van data te leren" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A type of computer hardware", es: "Un tipo de hardware", de: "Ein Computertyp", nl: "Een type computerhardware" },
          { en: "A video game genre", es: "Un género de videojuegos", de: "Ein Videospiel-Genre", nl: "Een videogame-genre" }
        ],
        correct: 0,
        explanation: {
          en: "Machine Learning is teaching computers to learn from data without explicit programming",
          es: "El aprendizaje automático enseña a las computadoras a aprender de datos sin programación explícita",
          de: "Maschinelles Lernen lehrt Computer, aus Daten zu lernen ohne explizite Programmierung",
          nl: "Machine Learning leert computers om te leren van data zonder expliciete programmering"
        }
      },
      {
        question: {
          en: "What does ML stand for?",
          es: "¿Qué significa ML?",
          de: "Wofür steht ML?",
          nl: "Waar staat ML voor?"
        },
        options: [
          { en: "Machine Learning", es: "Machine Learning", de: "Machine Learning", nl: "Machine Learning" },
          { en: "More Logic", es: "Más lógica", de: "Mehr Logik", nl: "Meer logica" },
          { en: "My Language", es: "Mi idioma", de: "Meine Sprache", nl: "Mijn taal" },
          { en: "Manual Labor", es: "Trabajo manual", de: "Manuelle Arbeit", nl: "Handarbeid" }
        ],
        correct: 0,
        explanation: {
          en: "ML stands for Machine Learning",
          es: "ML significa Machine Learning",
          de: "ML steht für Machine Learning",
          nl: "ML staat voor Machine Learning"
        }
      },
      {
        question: {
          en: "What is the main goal of Machine Learning?",
          es: "¿Cuál es el objetivo principal del ML?",
          de: "Was ist das Hauptziel des maschinellen Lernens?",
          nl: "Wat is het hoofddoel van Machine Learning?"
        },
        options: [
          { en: "Make predictions from data", es: "Hacer predicciones con datos", de: "Vorhersagen aus Daten machen", nl: "Voorspellingen maken van data" },
          { en: "Replace all programmers", es: "Reemplazar todos los programadores", de: "Alle Programmierer ersetzen", nl: "Alle programmeurs vervangen" },
          { en: "Create video games", es: "Crear videojuegos", de: "Videospiele erstellen", nl: "Videogames maken" },
          { en: "Build websites", es: "Construir sitios web", de: "Websites erstellen", nl: "Websites bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "ML aims to make accurate predictions and decisions from data",
          es: "ML busca hacer predicciones y decisiones precisas con datos",
          de: "ML zielt darauf ab, genaue Vorhersagen aus Daten zu treffen",
          nl: "ML beoogt nauwkeurige voorspellingen te maken van data"
        }
      },
      {
        question: {
          en: "What does a Machine Learning algorithm need?",
          es: "¿Qué necesita un algoritmo de ML?",
          de: "Was braucht ein ML-Algorithmus?",
          nl: "Wat heeft een ML-algoritme nodig?"
        },
        options: [
          { en: "Data to learn from", es: "Datos para aprender", de: "Daten zum Lernen", nl: "Data om van te leren" },
          { en: "A physical robot", es: "Un robot físico", de: "Einen physischen Roboter", nl: "Een fysieke robot" },
          { en: "A game console", es: "Una consola de juegos", de: "Eine Spielkonsole", nl: "Een spelconsole" },
          { en: "Magic spells", es: "Hechizos mágicos", de: "Zaubersprüche", nl: "Magische spreuken" }
        ],
        correct: 0,
        explanation: {
          en: "ML algorithms require data to learn patterns and make predictions",
          es: "Los algoritmos de ML requieren datos para aprender patrones",
          de: "ML-Algorithmen benötigen Daten, um Muster zu lernen",
          nl: "ML-algoritmen hebben data nodig om patronen te leren"
        }
      },
      {
        question: {
          en: "What are the two main types of ML?",
          es: "¿Cuáles son los dos tipos principales de ML?",
          de: "Was sind die zwei Haupttypen von ML?",
          nl: "Wat zijn de twee hoofdtypen ML?"
        },
        options: [
          { en: "Supervised and Unsupervised", es: "Supervisado y no supervisado", de: "Überwacht und unüberwacht", nl: "Gesuperviseerd en ongesuperviseerd" },
          { en: "Fast and Slow", es: "Rápido y lento", de: "Schnell und langsam", nl: "Snel en langzaam" },
          { en: "Old and New", es: "Viejo y nuevo", de: "Alt und neu", nl: "Oud en nieuw" },
          { en: "Good and Bad", es: "Bueno y malo", de: "Gut und schlecht", nl: "Goed en slecht" }
        ],
        correct: 0,
        explanation: {
          en: "The two main types are Supervised Learning (with labels) and Unsupervised Learning (without labels)",
          es: "Los dos tipos principales son aprendizaje supervisado (con etiquetas) y no supervisado (sin etiquetas)",
          de: "Die zwei Haupttypen sind überwachtes Lernen (mit Labels) und unüberwachtes Lernen (ohne Labels)",
          nl: "De twee hoofdtypen zijn gesuperviseerd leren (met labels) en ongesuperviseerd leren (zonder labels)"
        }
      },
      {
        question: {
          en: "What is Supervised Learning in ML?",
          es: "¿Qué es Supervised Learning en ML?",
          de: "Was ist Supervised Learning in ML?",
          nl: "Wat is Supervised Learning in ML?"
        },
        options: [
          { en: "Learning with labeled data", es: "Aprendizaje con datos etiquetados", de: "Lernen mit gekennzeichneten Daten", nl: "Leren met gelabelde data" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised Learning: Learning with labeled data",
          es: "Supervised Learning: Aprendizaje con datos etiquetados",
          de: "Supervised Learning: Lernen mit gekennzeichneten Daten",
          nl: "Supervised Learning: Leren met gelabelde data"
        }
      },
      {
        question: {
          en: "What is Unsupervised Learning in ML?",
          es: "¿Qué es Unsupervised Learning en ML?",
          de: "Was ist Unsupervised Learning in ML?",
          nl: "Wat is Unsupervised Learning in ML?"
        },
        options: [
          { en: "Finding patterns without labels", es: "Encontrar patrones sin etiquetas", de: "Muster finden ohne Labels", nl: "Patronen vinden zonder labels" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Unsupervised Learning: Finding patterns without labels",
          es: "Unsupervised Learning: Encontrar patrones sin etiquetas",
          de: "Unsupervised Learning: Muster finden ohne Labels",
          nl: "Unsupervised Learning: Patronen vinden zonder labels"
        }
      },
      {
        question: {
          en: "What is Training data in ML?",
          es: "¿Qué es Training data en ML?",
          de: "Was ist Training data in ML?",
          nl: "Wat is Training data in ML?"
        },
        options: [
          { en: "Data used to teach the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren", nl: "Data om het model te trainen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Training data: Data used to teach the model",
          es: "Training data: Datos para entrenar el modelo",
          de: "Training data: Daten zum Trainieren",
          nl: "Training data: Data om het model te trainen"
        }
      },
      {
        question: {
          en: "What is Testing data in ML?",
          es: "¿Qué es Testing data en ML?",
          de: "Was ist Testing data in ML?",
          nl: "Wat is Testing data in ML?"
        },
        options: [
          { en: "Data to evaluate the model", es: "Datos para evaluar", de: "Daten zum Testen", nl: "Data om te evalueren" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Testing data: Data to evaluate the model",
          es: "Testing data: Datos para evaluar",
          de: "Testing data: Daten zum Testen",
          nl: "Testing data: Data om te evalueren"
        }
      },
      {
        question: {
          en: "What is Features in ML?",
          es: "¿Qué es Features en ML?",
          de: "Was ist Features in ML?",
          nl: "Wat is Features in ML?"
        },
        options: [
          { en: "Input variables for prediction", es: "Variables de entrada", de: "Eingabevariablen", nl: "Invoervariabelen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Features: Input variables for prediction",
          es: "Features: Variables de entrada",
          de: "Features: Eingabevariablen",
          nl: "Features: Invoervariabelen"
        }
      },
      {
        question: {
          en: "What is Label in ML?",
          es: "¿Qué es Label en ML?",
          de: "Was ist Label in ML?",
          nl: "Wat is Label in ML?"
        },
        options: [
          { en: "The output we want to predict", es: "La salida a predecir", de: "Die gewünschte Ausgabe", nl: "De uitvoer die we voorspellen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Label: The output we want to predict",
          es: "Label: La salida a predecir",
          de: "Label: Die gewünschte Ausgabe",
          nl: "Label: De uitvoer die we voorspellen"
        }
      },
      {
        question: {
          en: "What is Model in ML?",
          es: "¿Qué es Model en ML?",
          de: "Was ist Model in ML?",
          nl: "Wat is Model in ML?"
        },
        options: [
          { en: "The learned pattern from data", es: "El patrón aprendido", de: "Das gelernte Muster", nl: "Het geleerde patroon" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Model: The learned pattern from data",
          es: "Model: El patrón aprendido",
          de: "Model: Das gelernte Muster",
          nl: "Model: Het geleerde patroon"
        }
      },
      {
        question: {
          en: "What is Algorithm in ML?",
          es: "¿Qué es Algorithm en ML?",
          de: "Was ist Algorithm in ML?",
          nl: "Wat is Algorithm in ML?"
        },
        options: [
          { en: "The learning method used", es: "El método de aprendizaje", de: "Die Lernmethode", nl: "De leermethode" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithm: The learning method used",
          es: "Algorithm: El método de aprendizaje",
          de: "Algorithm: Die Lernmethode",
          nl: "Algorithm: De leermethode"
        }
      },
      {
        question: {
          en: "What is Prediction in ML?",
          es: "¿Qué es Prediction en ML?",
          de: "Was ist Prediction in ML?",
          nl: "Wat is Prediction in ML?"
        },
        options: [
          { en: "Output from the model", es: "Salida del modelo", de: "Ausgabe des Modells", nl: "Uitvoer van het model" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Prediction: Output from the model",
          es: "Prediction: Salida del modelo",
          de: "Prediction: Ausgabe des Modells",
          nl: "Prediction: Uitvoer van het model"
        }
      },
      {
        question: {
          en: "What is Accuracy in ML?",
          es: "¿Qué es Accuracy en ML?",
          de: "Was ist Accuracy in ML?",
          nl: "Wat is Accuracy in ML?"
        },
        options: [
          { en: "How often model is correct", es: "Frecuencia de aciertos", de: "Wie oft korrekt", nl: "Hoe vaak het model gelijk heeft" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Accuracy: How often model is correct",
          es: "Accuracy: Frecuencia de aciertos",
          de: "Accuracy: Wie oft korrekt",
          nl: "Accuracy: Hoe vaak het model gelijk heeft"
        }
      },
      {
        question: {
          en: "What is Machine Learning?",
          es: "¿Qué es el aprendizaje automático?",
          de: "Was ist maschinelles Lernen?",
          nl: "Wat is Machine Learning?"
        },
        options: [
          { en: "Teaching computers to learn from data", es: "Enseñar a las computadoras a aprender de datos", de: "Computern beibringen, aus Daten zu lernen", nl: "Computers leren om van data te leren" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A type of computer hardware", es: "Un tipo de hardware", de: "Ein Computertyp", nl: "Een type computerhardware" },
          { en: "A video game genre", es: "Un género de videojuegos", de: "Ein Videospiel-Genre", nl: "Een videogame-genre" }
        ],
        correct: 0,
        explanation: {
          en: "Machine Learning is teaching computers to learn from data without explicit programming",
          es: "El aprendizaje automático enseña a las computadoras a aprender de datos sin programación explícita",
          de: "Maschinelles Lernen lehrt Computer, aus Daten zu lernen ohne explizite Programmierung",
          nl: "Machine Learning leert computers om te leren van data zonder expliciete programmering"
        }
      },
      {
        question: {
          en: "What does ML stand for?",
          es: "¿Qué significa ML?",
          de: "Wofür steht ML?",
          nl: "Waar staat ML voor?"
        },
        options: [
          { en: "Machine Learning", es: "Machine Learning", de: "Machine Learning", nl: "Machine Learning" },
          { en: "More Logic", es: "Más lógica", de: "Mehr Logik", nl: "Meer logica" },
          { en: "My Language", es: "Mi idioma", de: "Meine Sprache", nl: "Mijn taal" },
          { en: "Manual Labor", es: "Trabajo manual", de: "Manuelle Arbeit", nl: "Handarbeid" }
        ],
        correct: 0,
        explanation: {
          en: "ML stands for Machine Learning",
          es: "ML significa Machine Learning",
          de: "ML steht für Machine Learning",
          nl: "ML staat voor Machine Learning"
        }
      },
      {
        question: {
          en: "What is the main goal of Machine Learning?",
          es: "¿Cuál es el objetivo principal del ML?",
          de: "Was ist das Hauptziel des maschinellen Lernens?",
          nl: "Wat is het hoofddoel van Machine Learning?"
        },
        options: [
          { en: "Make predictions from data", es: "Hacer predicciones con datos", de: "Vorhersagen aus Daten machen", nl: "Voorspellingen maken van data" },
          { en: "Replace all programmers", es: "Reemplazar todos los programadores", de: "Alle Programmierer ersetzen", nl: "Alle programmeurs vervangen" },
          { en: "Create video games", es: "Crear videojuegos", de: "Videospiele erstellen", nl: "Videogames maken" },
          { en: "Build websites", es: "Construir sitios web", de: "Websites erstellen", nl: "Websites bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "ML aims to make accurate predictions and decisions from data",
          es: "ML busca hacer predicciones y decisiones precisas con datos",
          de: "ML zielt darauf ab, genaue Vorhersagen aus Daten zu treffen",
          nl: "ML beoogt nauwkeurige voorspellingen te maken van data"
        }
      },
      {
        question: {
          en: "What does a Machine Learning algorithm need?",
          es: "¿Qué necesita un algoritmo de ML?",
          de: "Was braucht ein ML-Algorithmus?",
          nl: "Wat heeft een ML-algoritme nodig?"
        },
        options: [
          { en: "Data to learn from", es: "Datos para aprender", de: "Daten zum Lernen", nl: "Data om van te leren" },
          { en: "A physical robot", es: "Un robot físico", de: "Einen physischen Roboter", nl: "Een fysieke robot" },
          { en: "A game console", es: "Una consola de juegos", de: "Eine Spielkonsole", nl: "Een spelconsole" },
          { en: "Magic spells", es: "Hechizos mágicos", de: "Zaubersprüche", nl: "Magische spreuken" }
        ],
        correct: 0,
        explanation: {
          en: "ML algorithms require data to learn patterns and make predictions",
          es: "Los algoritmos de ML requieren datos para aprender patrones",
          de: "ML-Algorithmen benötigen Daten, um Muster zu lernen",
          nl: "ML-algoritmen hebben data nodig om patronen te leren"
        }
      },
      {
        question: {
          en: "What are the two main types of ML?",
          es: "¿Cuáles son los dos tipos principales de ML?",
          de: "Was sind die zwei Haupttypen von ML?",
          nl: "Wat zijn de twee hoofdtypen ML?"
        },
        options: [
          { en: "Supervised and Unsupervised", es: "Supervisado y no supervisado", de: "Überwacht und unüberwacht", nl: "Gesuperviseerd en ongesuperviseerd" },
          { en: "Fast and Slow", es: "Rápido y lento", de: "Schnell und langsam", nl: "Snel en langzaam" },
          { en: "Old and New", es: "Viejo y nuevo", de: "Alt und neu", nl: "Oud en nieuw" },
          { en: "Good and Bad", es: "Bueno y malo", de: "Gut und schlecht", nl: "Goed en slecht" }
        ],
        correct: 0,
        explanation: {
          en: "The two main types are Supervised Learning (with labels) and Unsupervised Learning (without labels)",
          es: "Los dos tipos principales son aprendizaje supervisado (con etiquetas) y no supervisado (sin etiquetas)",
          de: "Die zwei Haupttypen sind überwachtes Lernen (mit Labels) und unüberwachtes Lernen (ohne Labels)",
          nl: "De twee hoofdtypen zijn gesuperviseerd leren (met labels) en ongesuperviseerd leren (zonder labels)"
        }
      },
      {
        question: {
          en: "What is Supervised Learning in ML?",
          es: "¿Qué es Supervised Learning en ML?",
          de: "Was ist Supervised Learning in ML?",
          nl: "Wat is Supervised Learning in ML?"
        },
        options: [
          { en: "Learning with labeled data", es: "Aprendizaje con datos etiquetados", de: "Lernen mit gekennzeichneten Daten", nl: "Leren met gelabelde data" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised Learning: Learning with labeled data",
          es: "Supervised Learning: Aprendizaje con datos etiquetados",
          de: "Supervised Learning: Lernen mit gekennzeichneten Daten",
          nl: "Supervised Learning: Leren met gelabelde data"
        }
      },
      {
        question: {
          en: "What is Unsupervised Learning in ML?",
          es: "¿Qué es Unsupervised Learning en ML?",
          de: "Was ist Unsupervised Learning in ML?",
          nl: "Wat is Unsupervised Learning in ML?"
        },
        options: [
          { en: "Finding patterns without labels", es: "Encontrar patrones sin etiquetas", de: "Muster finden ohne Labels", nl: "Patronen vinden zonder labels" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Unsupervised Learning: Finding patterns without labels",
          es: "Unsupervised Learning: Encontrar patrones sin etiquetas",
          de: "Unsupervised Learning: Muster finden ohne Labels",
          nl: "Unsupervised Learning: Patronen vinden zonder labels"
        }
      },
      {
        question: {
          en: "What is Training data in ML?",
          es: "¿Qué es Training data en ML?",
          de: "Was ist Training data in ML?",
          nl: "Wat is Training data in ML?"
        },
        options: [
          { en: "Data used to teach the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren", nl: "Data om het model te trainen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Training data: Data used to teach the model",
          es: "Training data: Datos para entrenar el modelo",
          de: "Training data: Daten zum Trainieren",
          nl: "Training data: Data om het model te trainen"
        }
      },
      {
        question: {
          en: "What is Testing data in ML?",
          es: "¿Qué es Testing data en ML?",
          de: "Was ist Testing data in ML?",
          nl: "Wat is Testing data in ML?"
        },
        options: [
          { en: "Data to evaluate the model", es: "Datos para evaluar", de: "Daten zum Testen", nl: "Data om te evalueren" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Testing data: Data to evaluate the model",
          es: "Testing data: Datos para evaluar",
          de: "Testing data: Daten zum Testen",
          nl: "Testing data: Data om te evalueren"
        }
      },
      {
        question: {
          en: "What is Features in ML?",
          es: "¿Qué es Features en ML?",
          de: "Was ist Features in ML?",
          nl: "Wat is Features in ML?"
        },
        options: [
          { en: "Input variables for prediction", es: "Variables de entrada", de: "Eingabevariablen", nl: "Invoervariabelen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Features: Input variables for prediction",
          es: "Features: Variables de entrada",
          de: "Features: Eingabevariablen",
          nl: "Features: Invoervariabelen"
        }
      },
      {
        question: {
          en: "What is Label in ML?",
          es: "¿Qué es Label en ML?",
          de: "Was ist Label in ML?",
          nl: "Wat is Label in ML?"
        },
        options: [
          { en: "The output we want to predict", es: "La salida a predecir", de: "Die gewünschte Ausgabe", nl: "De uitvoer die we voorspellen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Label: The output we want to predict",
          es: "Label: La salida a predecir",
          de: "Label: Die gewünschte Ausgabe",
          nl: "Label: De uitvoer die we voorspellen"
        }
      },
      {
        question: {
          en: "What is Model in ML?",
          es: "¿Qué es Model en ML?",
          de: "Was ist Model in ML?",
          nl: "Wat is Model in ML?"
        },
        options: [
          { en: "The learned pattern from data", es: "El patrón aprendido", de: "Das gelernte Muster", nl: "Het geleerde patroon" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Model: The learned pattern from data",
          es: "Model: El patrón aprendido",
          de: "Model: Das gelernte Muster",
          nl: "Model: Het geleerde patroon"
        }
      },
      {
        question: {
          en: "What is Algorithm in ML?",
          es: "¿Qué es Algorithm en ML?",
          de: "Was ist Algorithm in ML?",
          nl: "Wat is Algorithm in ML?"
        },
        options: [
          { en: "The learning method used", es: "El método de aprendizaje", de: "Die Lernmethode", nl: "De leermethode" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithm: The learning method used",
          es: "Algorithm: El método de aprendizaje",
          de: "Algorithm: Die Lernmethode",
          nl: "Algorithm: De leermethode"
        }
      },
      {
        question: {
          en: "What is Prediction in ML?",
          es: "¿Qué es Prediction en ML?",
          de: "Was ist Prediction in ML?",
          nl: "Wat is Prediction in ML?"
        },
        options: [
          { en: "Output from the model", es: "Salida del modelo", de: "Ausgabe des Modells", nl: "Uitvoer van het model" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Prediction: Output from the model",
          es: "Prediction: Salida del modelo",
          de: "Prediction: Ausgabe des Modells",
          nl: "Prediction: Uitvoer van het model"
        }
      },
      {
        question: {
          en: "What is Accuracy in ML?",
          es: "¿Qué es Accuracy en ML?",
          de: "Was ist Accuracy in ML?",
          nl: "Wat is Accuracy in ML?"
        },
        options: [
          { en: "How often model is correct", es: "Frecuencia de aciertos", de: "Wie oft korrekt", nl: "Hoe vaak het model gelijk heeft" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Accuracy: How often model is correct",
          es: "Accuracy: Frecuencia de aciertos",
          de: "Accuracy: Wie oft korrekt",
          nl: "Accuracy: Hoe vaak het model gelijk heeft"
        }
      },
      {
        question: {
          en: "What is Machine Learning?",
          es: "¿Qué es el aprendizaje automático?",
          de: "Was ist maschinelles Lernen?",
          nl: "Wat is Machine Learning?"
        },
        options: [
          { en: "Teaching computers to learn from data", es: "Enseñar a las computadoras a aprender de datos", de: "Computern beibringen, aus Daten zu lernen", nl: "Computers leren om van data te leren" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A type of computer hardware", es: "Un tipo de hardware", de: "Ein Computertyp", nl: "Een type computerhardware" },
          { en: "A video game genre", es: "Un género de videojuegos", de: "Ein Videospiel-Genre", nl: "Een videogame-genre" }
        ],
        correct: 0,
        explanation: {
          en: "Machine Learning is teaching computers to learn from data without explicit programming",
          es: "El aprendizaje automático enseña a las computadoras a aprender de datos sin programación explícita",
          de: "Maschinelles Lernen lehrt Computer, aus Daten zu lernen ohne explizite Programmierung",
          nl: "Machine Learning leert computers om te leren van data zonder expliciete programmering"
        }
      },
      {
        question: {
          en: "What does ML stand for?",
          es: "¿Qué significa ML?",
          de: "Wofür steht ML?",
          nl: "Waar staat ML voor?"
        },
        options: [
          { en: "Machine Learning", es: "Machine Learning", de: "Machine Learning", nl: "Machine Learning" },
          { en: "More Logic", es: "Más lógica", de: "Mehr Logik", nl: "Meer logica" },
          { en: "My Language", es: "Mi idioma", de: "Meine Sprache", nl: "Mijn taal" },
          { en: "Manual Labor", es: "Trabajo manual", de: "Manuelle Arbeit", nl: "Handarbeid" }
        ],
        correct: 0,
        explanation: {
          en: "ML stands for Machine Learning",
          es: "ML significa Machine Learning",
          de: "ML steht für Machine Learning",
          nl: "ML staat voor Machine Learning"
        }
      },
      {
        question: {
          en: "What is the main goal of Machine Learning?",
          es: "¿Cuál es el objetivo principal del ML?",
          de: "Was ist das Hauptziel des maschinellen Lernens?",
          nl: "Wat is het hoofddoel van Machine Learning?"
        },
        options: [
          { en: "Make predictions from data", es: "Hacer predicciones con datos", de: "Vorhersagen aus Daten machen", nl: "Voorspellingen maken van data" },
          { en: "Replace all programmers", es: "Reemplazar todos los programadores", de: "Alle Programmierer ersetzen", nl: "Alle programmeurs vervangen" },
          { en: "Create video games", es: "Crear videojuegos", de: "Videospiele erstellen", nl: "Videogames maken" },
          { en: "Build websites", es: "Construir sitios web", de: "Websites erstellen", nl: "Websites bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "ML aims to make accurate predictions and decisions from data",
          es: "ML busca hacer predicciones y decisiones precisas con datos",
          de: "ML zielt darauf ab, genaue Vorhersagen aus Daten zu treffen",
          nl: "ML beoogt nauwkeurige voorspellingen te maken van data"
        }
      },
      {
        question: {
          en: "What does a Machine Learning algorithm need?",
          es: "¿Qué necesita un algoritmo de ML?",
          de: "Was braucht ein ML-Algorithmus?",
          nl: "Wat heeft een ML-algoritme nodig?"
        },
        options: [
          { en: "Data to learn from", es: "Datos para aprender", de: "Daten zum Lernen", nl: "Data om van te leren" },
          { en: "A physical robot", es: "Un robot físico", de: "Einen physischen Roboter", nl: "Een fysieke robot" },
          { en: "A game console", es: "Una consola de juegos", de: "Eine Spielkonsole", nl: "Een spelconsole" },
          { en: "Magic spells", es: "Hechizos mágicos", de: "Zaubersprüche", nl: "Magische spreuken" }
        ],
        correct: 0,
        explanation: {
          en: "ML algorithms require data to learn patterns and make predictions",
          es: "Los algoritmos de ML requieren datos para aprender patrones",
          de: "ML-Algorithmen benötigen Daten, um Muster zu lernen",
          nl: "ML-algoritmen hebben data nodig om patronen te leren"
        }
      },
      {
        question: {
          en: "What are the two main types of ML?",
          es: "¿Cuáles son los dos tipos principales de ML?",
          de: "Was sind die zwei Haupttypen von ML?",
          nl: "Wat zijn de twee hoofdtypen ML?"
        },
        options: [
          { en: "Supervised and Unsupervised", es: "Supervisado y no supervisado", de: "Überwacht und unüberwacht", nl: "Gesuperviseerd en ongesuperviseerd" },
          { en: "Fast and Slow", es: "Rápido y lento", de: "Schnell und langsam", nl: "Snel en langzaam" },
          { en: "Old and New", es: "Viejo y nuevo", de: "Alt und neu", nl: "Oud en nieuw" },
          { en: "Good and Bad", es: "Bueno y malo", de: "Gut und schlecht", nl: "Goed en slecht" }
        ],
        correct: 0,
        explanation: {
          en: "The two main types are Supervised Learning (with labels) and Unsupervised Learning (without labels)",
          es: "Los dos tipos principales son aprendizaje supervisado (con etiquetas) y no supervisado (sin etiquetas)",
          de: "Die zwei Haupttypen sind überwachtes Lernen (mit Labels) und unüberwachtes Lernen (ohne Labels)",
          nl: "De twee hoofdtypen zijn gesuperviseerd leren (met labels) en ongesuperviseerd leren (zonder labels)"
        }
      },
      {
        question: {
          en: "What is Supervised Learning in ML?",
          es: "¿Qué es Supervised Learning en ML?",
          de: "Was ist Supervised Learning in ML?",
          nl: "Wat is Supervised Learning in ML?"
        },
        options: [
          { en: "Learning with labeled data", es: "Aprendizaje con datos etiquetados", de: "Lernen mit gekennzeichneten Daten", nl: "Leren met gelabelde data" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised Learning: Learning with labeled data",
          es: "Supervised Learning: Aprendizaje con datos etiquetados",
          de: "Supervised Learning: Lernen mit gekennzeichneten Daten",
          nl: "Supervised Learning: Leren met gelabelde data"
        }
      },
      {
        question: {
          en: "What is Unsupervised Learning in ML?",
          es: "¿Qué es Unsupervised Learning en ML?",
          de: "Was ist Unsupervised Learning in ML?",
          nl: "Wat is Unsupervised Learning in ML?"
        },
        options: [
          { en: "Finding patterns without labels", es: "Encontrar patrones sin etiquetas", de: "Muster finden ohne Labels", nl: "Patronen vinden zonder labels" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Unsupervised Learning: Finding patterns without labels",
          es: "Unsupervised Learning: Encontrar patrones sin etiquetas",
          de: "Unsupervised Learning: Muster finden ohne Labels",
          nl: "Unsupervised Learning: Patronen vinden zonder labels"
        }
      },
      {
        question: {
          en: "What is Training data in ML?",
          es: "¿Qué es Training data en ML?",
          de: "Was ist Training data in ML?",
          nl: "Wat is Training data in ML?"
        },
        options: [
          { en: "Data used to teach the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren", nl: "Data om het model te trainen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Training data: Data used to teach the model",
          es: "Training data: Datos para entrenar el modelo",
          de: "Training data: Daten zum Trainieren",
          nl: "Training data: Data om het model te trainen"
        }
      },
      {
        question: {
          en: "What is Testing data in ML?",
          es: "¿Qué es Testing data en ML?",
          de: "Was ist Testing data in ML?",
          nl: "Wat is Testing data in ML?"
        },
        options: [
          { en: "Data to evaluate the model", es: "Datos para evaluar", de: "Daten zum Testen", nl: "Data om te evalueren" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Testing data: Data to evaluate the model",
          es: "Testing data: Datos para evaluar",
          de: "Testing data: Daten zum Testen",
          nl: "Testing data: Data om te evalueren"
        }
      },
      {
        question: {
          en: "What is Features in ML?",
          es: "¿Qué es Features en ML?",
          de: "Was ist Features in ML?",
          nl: "Wat is Features in ML?"
        },
        options: [
          { en: "Input variables for prediction", es: "Variables de entrada", de: "Eingabevariablen", nl: "Invoervariabelen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Features: Input variables for prediction",
          es: "Features: Variables de entrada",
          de: "Features: Eingabevariablen",
          nl: "Features: Invoervariabelen"
        }
      },
      {
        question: {
          en: "What is Label in ML?",
          es: "¿Qué es Label en ML?",
          de: "Was ist Label in ML?",
          nl: "Wat is Label in ML?"
        },
        options: [
          { en: "The output we want to predict", es: "La salida a predecir", de: "Die gewünschte Ausgabe", nl: "De uitvoer die we voorspellen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Label: The output we want to predict",
          es: "Label: La salida a predecir",
          de: "Label: Die gewünschte Ausgabe",
          nl: "Label: De uitvoer die we voorspellen"
        }
      },
      {
        question: {
          en: "What is Model in ML?",
          es: "¿Qué es Model en ML?",
          de: "Was ist Model in ML?",
          nl: "Wat is Model in ML?"
        },
        options: [
          { en: "The learned pattern from data", es: "El patrón aprendido", de: "Das gelernte Muster", nl: "Het geleerde patroon" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Model: The learned pattern from data",
          es: "Model: El patrón aprendido",
          de: "Model: Das gelernte Muster",
          nl: "Model: Het geleerde patroon"
        }
      },
      {
        question: {
          en: "What is Algorithm in ML?",
          es: "¿Qué es Algorithm en ML?",
          de: "Was ist Algorithm in ML?",
          nl: "Wat is Algorithm in ML?"
        },
        options: [
          { en: "The learning method used", es: "El método de aprendizaje", de: "Die Lernmethode", nl: "De leermethode" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithm: The learning method used",
          es: "Algorithm: El método de aprendizaje",
          de: "Algorithm: Die Lernmethode",
          nl: "Algorithm: De leermethode"
        }
      },
      {
        question: {
          en: "What is Prediction in ML?",
          es: "¿Qué es Prediction en ML?",
          de: "Was ist Prediction in ML?",
          nl: "Wat is Prediction in ML?"
        },
        options: [
          { en: "Output from the model", es: "Salida del modelo", de: "Ausgabe des Modells", nl: "Uitvoer van het model" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Prediction: Output from the model",
          es: "Prediction: Salida del modelo",
          de: "Prediction: Ausgabe des Modells",
          nl: "Prediction: Uitvoer van het model"
        }
      },
      {
        question: {
          en: "What is Accuracy in ML?",
          es: "¿Qué es Accuracy en ML?",
          de: "Was ist Accuracy in ML?",
          nl: "Wat is Accuracy in ML?"
        },
        options: [
          { en: "How often model is correct", es: "Frecuencia de aciertos", de: "Wie oft korrekt", nl: "Hoe vaak het model gelijk heeft" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Accuracy: How often model is correct",
          es: "Accuracy: Frecuencia de aciertos",
          de: "Accuracy: Wie oft korrekt",
          nl: "Accuracy: Hoe vaak het model gelijk heeft"
        }
      },
      {
        question: {
          en: "What is Machine Learning?",
          es: "¿Qué es el aprendizaje automático?",
          de: "Was ist maschinelles Lernen?",
          nl: "Wat is Machine Learning?"
        },
        options: [
          { en: "Teaching computers to learn from data", es: "Enseñar a las computadoras a aprender de datos", de: "Computern beibringen, aus Daten zu lernen", nl: "Computers leren om van data te leren" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A type of computer hardware", es: "Un tipo de hardware", de: "Ein Computertyp", nl: "Een type computerhardware" },
          { en: "A video game genre", es: "Un género de videojuegos", de: "Ein Videospiel-Genre", nl: "Een videogame-genre" }
        ],
        correct: 0,
        explanation: {
          en: "Machine Learning is teaching computers to learn from data without explicit programming",
          es: "El aprendizaje automático enseña a las computadoras a aprender de datos sin programación explícita",
          de: "Maschinelles Lernen lehrt Computer, aus Daten zu lernen ohne explizite Programmierung",
          nl: "Machine Learning leert computers om te leren van data zonder expliciete programmering"
        }
      },
      {
        question: {
          en: "What does ML stand for?",
          es: "¿Qué significa ML?",
          de: "Wofür steht ML?",
          nl: "Waar staat ML voor?"
        },
        options: [
          { en: "Machine Learning", es: "Machine Learning", de: "Machine Learning", nl: "Machine Learning" },
          { en: "More Logic", es: "Más lógica", de: "Mehr Logik", nl: "Meer logica" },
          { en: "My Language", es: "Mi idioma", de: "Meine Sprache", nl: "Mijn taal" },
          { en: "Manual Labor", es: "Trabajo manual", de: "Manuelle Arbeit", nl: "Handarbeid" }
        ],
        correct: 0,
        explanation: {
          en: "ML stands for Machine Learning",
          es: "ML significa Machine Learning",
          de: "ML steht für Machine Learning",
          nl: "ML staat voor Machine Learning"
        }
      },
      {
        question: {
          en: "What is the main goal of Machine Learning?",
          es: "¿Cuál es el objetivo principal del ML?",
          de: "Was ist das Hauptziel des maschinellen Lernens?",
          nl: "Wat is het hoofddoel van Machine Learning?"
        },
        options: [
          { en: "Make predictions from data", es: "Hacer predicciones con datos", de: "Vorhersagen aus Daten machen", nl: "Voorspellingen maken van data" },
          { en: "Replace all programmers", es: "Reemplazar todos los programadores", de: "Alle Programmierer ersetzen", nl: "Alle programmeurs vervangen" },
          { en: "Create video games", es: "Crear videojuegos", de: "Videospiele erstellen", nl: "Videogames maken" },
          { en: "Build websites", es: "Construir sitios web", de: "Websites erstellen", nl: "Websites bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "ML aims to make accurate predictions and decisions from data",
          es: "ML busca hacer predicciones y decisiones precisas con datos",
          de: "ML zielt darauf ab, genaue Vorhersagen aus Daten zu treffen",
          nl: "ML beoogt nauwkeurige voorspellingen te maken van data"
        }
      },
      {
        question: {
          en: "What does a Machine Learning algorithm need?",
          es: "¿Qué necesita un algoritmo de ML?",
          de: "Was braucht ein ML-Algorithmus?",
          nl: "Wat heeft een ML-algoritme nodig?"
        },
        options: [
          { en: "Data to learn from", es: "Datos para aprender", de: "Daten zum Lernen", nl: "Data om van te leren" },
          { en: "A physical robot", es: "Un robot físico", de: "Einen physischen Roboter", nl: "Een fysieke robot" },
          { en: "A game console", es: "Una consola de juegos", de: "Eine Spielkonsole", nl: "Een spelconsole" },
          { en: "Magic spells", es: "Hechizos mágicos", de: "Zaubersprüche", nl: "Magische spreuken" }
        ],
        correct: 0,
        explanation: {
          en: "ML algorithms require data to learn patterns and make predictions",
          es: "Los algoritmos de ML requieren datos para aprender patrones",
          de: "ML-Algorithmen benötigen Daten, um Muster zu lernen",
          nl: "ML-algoritmen hebben data nodig om patronen te leren"
        }
      },
      {
        question: {
          en: "What are the two main types of ML?",
          es: "¿Cuáles son los dos tipos principales de ML?",
          de: "Was sind die zwei Haupttypen von ML?",
          nl: "Wat zijn de twee hoofdtypen ML?"
        },
        options: [
          { en: "Supervised and Unsupervised", es: "Supervisado y no supervisado", de: "Überwacht und unüberwacht", nl: "Gesuperviseerd en ongesuperviseerd" },
          { en: "Fast and Slow", es: "Rápido y lento", de: "Schnell und langsam", nl: "Snel en langzaam" },
          { en: "Old and New", es: "Viejo y nuevo", de: "Alt und neu", nl: "Oud en nieuw" },
          { en: "Good and Bad", es: "Bueno y malo", de: "Gut und schlecht", nl: "Goed en slecht" }
        ],
        correct: 0,
        explanation: {
          en: "The two main types are Supervised Learning (with labels) and Unsupervised Learning (without labels)",
          es: "Los dos tipos principales son aprendizaje supervisado (con etiquetas) y no supervisado (sin etiquetas)",
          de: "Die zwei Haupttypen sind überwachtes Lernen (mit Labels) und unüberwachtes Lernen (ohne Labels)",
          nl: "De twee hoofdtypen zijn gesuperviseerd leren (met labels) en ongesuperviseerd leren (zonder labels)"
        }
      },
      {
        question: {
          en: "What is Supervised Learning in ML?",
          es: "¿Qué es Supervised Learning en ML?",
          de: "Was ist Supervised Learning in ML?",
          nl: "Wat is Supervised Learning in ML?"
        },
        options: [
          { en: "Learning with labeled data", es: "Aprendizaje con datos etiquetados", de: "Lernen mit gekennzeichneten Daten", nl: "Leren met gelabelde data" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised Learning: Learning with labeled data",
          es: "Supervised Learning: Aprendizaje con datos etiquetados",
          de: "Supervised Learning: Lernen mit gekennzeichneten Daten",
          nl: "Supervised Learning: Leren met gelabelde data"
        }
      },
      {
        question: {
          en: "What is Unsupervised Learning in ML?",
          es: "¿Qué es Unsupervised Learning en ML?",
          de: "Was ist Unsupervised Learning in ML?",
          nl: "Wat is Unsupervised Learning in ML?"
        },
        options: [
          { en: "Finding patterns without labels", es: "Encontrar patrones sin etiquetas", de: "Muster finden ohne Labels", nl: "Patronen vinden zonder labels" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Unsupervised Learning: Finding patterns without labels",
          es: "Unsupervised Learning: Encontrar patrones sin etiquetas",
          de: "Unsupervised Learning: Muster finden ohne Labels",
          nl: "Unsupervised Learning: Patronen vinden zonder labels"
        }
      },
      {
        question: {
          en: "What is Training data in ML?",
          es: "¿Qué es Training data en ML?",
          de: "Was ist Training data in ML?",
          nl: "Wat is Training data in ML?"
        },
        options: [
          { en: "Data used to teach the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren", nl: "Data om het model te trainen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Training data: Data used to teach the model",
          es: "Training data: Datos para entrenar el modelo",
          de: "Training data: Daten zum Trainieren",
          nl: "Training data: Data om het model te trainen"
        }
      },
      {
        question: {
          en: "What is Testing data in ML?",
          es: "¿Qué es Testing data en ML?",
          de: "Was ist Testing data in ML?",
          nl: "Wat is Testing data in ML?"
        },
        options: [
          { en: "Data to evaluate the model", es: "Datos para evaluar", de: "Daten zum Testen", nl: "Data om te evalueren" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Testing data: Data to evaluate the model",
          es: "Testing data: Datos para evaluar",
          de: "Testing data: Daten zum Testen",
          nl: "Testing data: Data om te evalueren"
        }
      },
      {
        question: {
          en: "What is Features in ML?",
          es: "¿Qué es Features en ML?",
          de: "Was ist Features in ML?",
          nl: "Wat is Features in ML?"
        },
        options: [
          { en: "Input variables for prediction", es: "Variables de entrada", de: "Eingabevariablen", nl: "Invoervariabelen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Features: Input variables for prediction",
          es: "Features: Variables de entrada",
          de: "Features: Eingabevariablen",
          nl: "Features: Invoervariabelen"
        }
      },
      {
        question: {
          en: "What is Label in ML?",
          es: "¿Qué es Label en ML?",
          de: "Was ist Label in ML?",
          nl: "Wat is Label in ML?"
        },
        options: [
          { en: "The output we want to predict", es: "La salida a predecir", de: "Die gewünschte Ausgabe", nl: "De uitvoer die we voorspellen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Label: The output we want to predict",
          es: "Label: La salida a predecir",
          de: "Label: Die gewünschte Ausgabe",
          nl: "Label: De uitvoer die we voorspellen"
        }
      },
      {
        question: {
          en: "What is Model in ML?",
          es: "¿Qué es Model en ML?",
          de: "Was ist Model in ML?",
          nl: "Wat is Model in ML?"
        },
        options: [
          { en: "The learned pattern from data", es: "El patrón aprendido", de: "Das gelernte Muster", nl: "Het geleerde patroon" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Model: The learned pattern from data",
          es: "Model: El patrón aprendido",
          de: "Model: Das gelernte Muster",
          nl: "Model: Het geleerde patroon"
        }
      },
      {
        question: {
          en: "What is Algorithm in ML?",
          es: "¿Qué es Algorithm en ML?",
          de: "Was ist Algorithm in ML?",
          nl: "Wat is Algorithm in ML?"
        },
        options: [
          { en: "The learning method used", es: "El método de aprendizaje", de: "Die Lernmethode", nl: "De leermethode" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithm: The learning method used",
          es: "Algorithm: El método de aprendizaje",
          de: "Algorithm: Die Lernmethode",
          nl: "Algorithm: De leermethode"
        }
      },
      {
        question: {
          en: "What is Prediction in ML?",
          es: "¿Qué es Prediction en ML?",
          de: "Was ist Prediction in ML?",
          nl: "Wat is Prediction in ML?"
        },
        options: [
          { en: "Output from the model", es: "Salida del modelo", de: "Ausgabe des Modells", nl: "Uitvoer van het model" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Prediction: Output from the model",
          es: "Prediction: Salida del modelo",
          de: "Prediction: Ausgabe des Modells",
          nl: "Prediction: Uitvoer van het model"
        }
      },
      {
        question: {
          en: "What is Accuracy in ML?",
          es: "¿Qué es Accuracy en ML?",
          de: "Was ist Accuracy in ML?",
          nl: "Wat is Accuracy in ML?"
        },
        options: [
          { en: "How often model is correct", es: "Frecuencia de aciertos", de: "Wie oft korrekt", nl: "Hoe vaak het model gelijk heeft" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Accuracy: How often model is correct",
          es: "Accuracy: Frecuencia de aciertos",
          de: "Accuracy: Wie oft korrekt",
          nl: "Accuracy: Hoe vaak het model gelijk heeft"
        }
      },
      {
        question: {
          en: "What is Machine Learning?",
          es: "¿Qué es el aprendizaje automático?",
          de: "Was ist maschinelles Lernen?",
          nl: "Wat is Machine Learning?"
        },
        options: [
          { en: "Teaching computers to learn from data", es: "Enseñar a las computadoras a aprender de datos", de: "Computern beibringen, aus Daten zu lernen", nl: "Computers leren om van data te leren" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A type of computer hardware", es: "Un tipo de hardware", de: "Ein Computertyp", nl: "Een type computerhardware" },
          { en: "A video game genre", es: "Un género de videojuegos", de: "Ein Videospiel-Genre", nl: "Een videogame-genre" }
        ],
        correct: 0,
        explanation: {
          en: "Machine Learning is teaching computers to learn from data without explicit programming",
          es: "El aprendizaje automático enseña a las computadoras a aprender de datos sin programación explícita",
          de: "Maschinelles Lernen lehrt Computer, aus Daten zu lernen ohne explizite Programmierung",
          nl: "Machine Learning leert computers om te leren van data zonder expliciete programmering"
        }
      },
      {
        question: {
          en: "What does ML stand for?",
          es: "¿Qué significa ML?",
          de: "Wofür steht ML?",
          nl: "Waar staat ML voor?"
        },
        options: [
          { en: "Machine Learning", es: "Machine Learning", de: "Machine Learning", nl: "Machine Learning" },
          { en: "More Logic", es: "Más lógica", de: "Mehr Logik", nl: "Meer logica" },
          { en: "My Language", es: "Mi idioma", de: "Meine Sprache", nl: "Mijn taal" },
          { en: "Manual Labor", es: "Trabajo manual", de: "Manuelle Arbeit", nl: "Handarbeid" }
        ],
        correct: 0,
        explanation: {
          en: "ML stands for Machine Learning",
          es: "ML significa Machine Learning",
          de: "ML steht für Machine Learning",
          nl: "ML staat voor Machine Learning"
        }
      },
      {
        question: {
          en: "What is the main goal of Machine Learning?",
          es: "¿Cuál es el objetivo principal del ML?",
          de: "Was ist das Hauptziel des maschinellen Lernens?",
          nl: "Wat is het hoofddoel van Machine Learning?"
        },
        options: [
          { en: "Make predictions from data", es: "Hacer predicciones con datos", de: "Vorhersagen aus Daten machen", nl: "Voorspellingen maken van data" },
          { en: "Replace all programmers", es: "Reemplazar todos los programadores", de: "Alle Programmierer ersetzen", nl: "Alle programmeurs vervangen" },
          { en: "Create video games", es: "Crear videojuegos", de: "Videospiele erstellen", nl: "Videogames maken" },
          { en: "Build websites", es: "Construir sitios web", de: "Websites erstellen", nl: "Websites bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "ML aims to make accurate predictions and decisions from data",
          es: "ML busca hacer predicciones y decisiones precisas con datos",
          de: "ML zielt darauf ab, genaue Vorhersagen aus Daten zu treffen",
          nl: "ML beoogt nauwkeurige voorspellingen te maken van data"
        }
      },
      {
        question: {
          en: "What does a Machine Learning algorithm need?",
          es: "¿Qué necesita un algoritmo de ML?",
          de: "Was braucht ein ML-Algorithmus?",
          nl: "Wat heeft een ML-algoritme nodig?"
        },
        options: [
          { en: "Data to learn from", es: "Datos para aprender", de: "Daten zum Lernen", nl: "Data om van te leren" },
          { en: "A physical robot", es: "Un robot físico", de: "Einen physischen Roboter", nl: "Een fysieke robot" },
          { en: "A game console", es: "Una consola de juegos", de: "Eine Spielkonsole", nl: "Een spelconsole" },
          { en: "Magic spells", es: "Hechizos mágicos", de: "Zaubersprüche", nl: "Magische spreuken" }
        ],
        correct: 0,
        explanation: {
          en: "ML algorithms require data to learn patterns and make predictions",
          es: "Los algoritmos de ML requieren datos para aprender patrones",
          de: "ML-Algorithmen benötigen Daten, um Muster zu lernen",
          nl: "ML-algoritmen hebben data nodig om patronen te leren"
        }
      },
      {
        question: {
          en: "What are the two main types of ML?",
          es: "¿Cuáles son los dos tipos principales de ML?",
          de: "Was sind die zwei Haupttypen von ML?",
          nl: "Wat zijn de twee hoofdtypen ML?"
        },
        options: [
          { en: "Supervised and Unsupervised", es: "Supervisado y no supervisado", de: "Überwacht und unüberwacht", nl: "Gesuperviseerd en ongesuperviseerd" },
          { en: "Fast and Slow", es: "Rápido y lento", de: "Schnell und langsam", nl: "Snel en langzaam" },
          { en: "Old and New", es: "Viejo y nuevo", de: "Alt und neu", nl: "Oud en nieuw" },
          { en: "Good and Bad", es: "Bueno y malo", de: "Gut und schlecht", nl: "Goed en slecht" }
        ],
        correct: 0,
        explanation: {
          en: "The two main types are Supervised Learning (with labels) and Unsupervised Learning (without labels)",
          es: "Los dos tipos principales son aprendizaje supervisado (con etiquetas) y no supervisado (sin etiquetas)",
          de: "Die zwei Haupttypen sind überwachtes Lernen (mit Labels) und unüberwachtes Lernen (ohne Labels)",
          nl: "De twee hoofdtypen zijn gesuperviseerd leren (met labels) en ongesuperviseerd leren (zonder labels)"
        }
      },
      {
        question: {
          en: "What is Supervised Learning in ML?",
          es: "¿Qué es Supervised Learning en ML?",
          de: "Was ist Supervised Learning in ML?",
          nl: "Wat is Supervised Learning in ML?"
        },
        options: [
          { en: "Learning with labeled data", es: "Aprendizaje con datos etiquetados", de: "Lernen mit gekennzeichneten Daten", nl: "Leren met gelabelde data" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised Learning: Learning with labeled data",
          es: "Supervised Learning: Aprendizaje con datos etiquetados",
          de: "Supervised Learning: Lernen mit gekennzeichneten Daten",
          nl: "Supervised Learning: Leren met gelabelde data"
        }
      },
      {
        question: {
          en: "What is Unsupervised Learning in ML?",
          es: "¿Qué es Unsupervised Learning en ML?",
          de: "Was ist Unsupervised Learning in ML?",
          nl: "Wat is Unsupervised Learning in ML?"
        },
        options: [
          { en: "Finding patterns without labels", es: "Encontrar patrones sin etiquetas", de: "Muster finden ohne Labels", nl: "Patronen vinden zonder labels" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Unsupervised Learning: Finding patterns without labels",
          es: "Unsupervised Learning: Encontrar patrones sin etiquetas",
          de: "Unsupervised Learning: Muster finden ohne Labels",
          nl: "Unsupervised Learning: Patronen vinden zonder labels"
        }
      },
      {
        question: {
          en: "What is Training data in ML?",
          es: "¿Qué es Training data en ML?",
          de: "Was ist Training data in ML?",
          nl: "Wat is Training data in ML?"
        },
        options: [
          { en: "Data used to teach the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren", nl: "Data om het model te trainen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Training data: Data used to teach the model",
          es: "Training data: Datos para entrenar el modelo",
          de: "Training data: Daten zum Trainieren",
          nl: "Training data: Data om het model te trainen"
        }
      },
      {
        question: {
          en: "What is Testing data in ML?",
          es: "¿Qué es Testing data en ML?",
          de: "Was ist Testing data in ML?",
          nl: "Wat is Testing data in ML?"
        },
        options: [
          { en: "Data to evaluate the model", es: "Datos para evaluar", de: "Daten zum Testen", nl: "Data om te evalueren" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Testing data: Data to evaluate the model",
          es: "Testing data: Datos para evaluar",
          de: "Testing data: Daten zum Testen",
          nl: "Testing data: Data om te evalueren"
        }
      },
      {
        question: {
          en: "What is Features in ML?",
          es: "¿Qué es Features en ML?",
          de: "Was ist Features in ML?",
          nl: "Wat is Features in ML?"
        },
        options: [
          { en: "Input variables for prediction", es: "Variables de entrada", de: "Eingabevariablen", nl: "Invoervariabelen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Features: Input variables for prediction",
          es: "Features: Variables de entrada",
          de: "Features: Eingabevariablen",
          nl: "Features: Invoervariabelen"
        }
      },
      {
        question: {
          en: "What is Label in ML?",
          es: "¿Qué es Label en ML?",
          de: "Was ist Label in ML?",
          nl: "Wat is Label in ML?"
        },
        options: [
          { en: "The output we want to predict", es: "La salida a predecir", de: "Die gewünschte Ausgabe", nl: "De uitvoer die we voorspellen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Label: The output we want to predict",
          es: "Label: La salida a predecir",
          de: "Label: Die gewünschte Ausgabe",
          nl: "Label: De uitvoer die we voorspellen"
        }
      },
      {
        question: {
          en: "What is Model in ML?",
          es: "¿Qué es Model en ML?",
          de: "Was ist Model in ML?",
          nl: "Wat is Model in ML?"
        },
        options: [
          { en: "The learned pattern from data", es: "El patrón aprendido", de: "Das gelernte Muster", nl: "Het geleerde patroon" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Model: The learned pattern from data",
          es: "Model: El patrón aprendido",
          de: "Model: Das gelernte Muster",
          nl: "Model: Het geleerde patroon"
        }
      },
      {
        question: {
          en: "What is Algorithm in ML?",
          es: "¿Qué es Algorithm en ML?",
          de: "Was ist Algorithm in ML?",
          nl: "Wat is Algorithm in ML?"
        },
        options: [
          { en: "The learning method used", es: "El método de aprendizaje", de: "Die Lernmethode", nl: "De leermethode" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithm: The learning method used",
          es: "Algorithm: El método de aprendizaje",
          de: "Algorithm: Die Lernmethode",
          nl: "Algorithm: De leermethode"
        }
      },
      {
        question: {
          en: "What is Prediction in ML?",
          es: "¿Qué es Prediction en ML?",
          de: "Was ist Prediction in ML?",
          nl: "Wat is Prediction in ML?"
        },
        options: [
          { en: "Output from the model", es: "Salida del modelo", de: "Ausgabe des Modells", nl: "Uitvoer van het model" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Prediction: Output from the model",
          es: "Prediction: Salida del modelo",
          de: "Prediction: Ausgabe des Modells",
          nl: "Prediction: Uitvoer van het model"
        }
      },
      {
        question: {
          en: "What is Accuracy in ML?",
          es: "¿Qué es Accuracy en ML?",
          de: "Was ist Accuracy in ML?",
          nl: "Wat is Accuracy in ML?"
        },
        options: [
          { en: "How often model is correct", es: "Frecuencia de aciertos", de: "Wie oft korrekt", nl: "Hoe vaak het model gelijk heeft" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Accuracy: How often model is correct",
          es: "Accuracy: Frecuencia de aciertos",
          de: "Accuracy: Wie oft korrekt",
          nl: "Accuracy: Hoe vaak het model gelijk heeft"
        }
      },
      {
        question: {
          en: "What is Machine Learning?",
          es: "¿Qué es el aprendizaje automático?",
          de: "Was ist maschinelles Lernen?",
          nl: "Wat is Machine Learning?"
        },
        options: [
          { en: "Teaching computers to learn from data", es: "Enseñar a las computadoras a aprender de datos", de: "Computern beibringen, aus Daten zu lernen", nl: "Computers leren om van data te leren" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A type of computer hardware", es: "Un tipo de hardware", de: "Ein Computertyp", nl: "Een type computerhardware" },
          { en: "A video game genre", es: "Un género de videojuegos", de: "Ein Videospiel-Genre", nl: "Een videogame-genre" }
        ],
        correct: 0,
        explanation: {
          en: "Machine Learning is teaching computers to learn from data without explicit programming",
          es: "El aprendizaje automático enseña a las computadoras a aprender de datos sin programación explícita",
          de: "Maschinelles Lernen lehrt Computer, aus Daten zu lernen ohne explizite Programmierung",
          nl: "Machine Learning leert computers om te leren van data zonder expliciete programmering"
        }
      },
      {
        question: {
          en: "What does ML stand for?",
          es: "¿Qué significa ML?",
          de: "Wofür steht ML?",
          nl: "Waar staat ML voor?"
        },
        options: [
          { en: "Machine Learning", es: "Machine Learning", de: "Machine Learning", nl: "Machine Learning" },
          { en: "More Logic", es: "Más lógica", de: "Mehr Logik", nl: "Meer logica" },
          { en: "My Language", es: "Mi idioma", de: "Meine Sprache", nl: "Mijn taal" },
          { en: "Manual Labor", es: "Trabajo manual", de: "Manuelle Arbeit", nl: "Handarbeid" }
        ],
        correct: 0,
        explanation: {
          en: "ML stands for Machine Learning",
          es: "ML significa Machine Learning",
          de: "ML steht für Machine Learning",
          nl: "ML staat voor Machine Learning"
        }
      },
      {
        question: {
          en: "What is the main goal of Machine Learning?",
          es: "¿Cuál es el objetivo principal del ML?",
          de: "Was ist das Hauptziel des maschinellen Lernens?",
          nl: "Wat is het hoofddoel van Machine Learning?"
        },
        options: [
          { en: "Make predictions from data", es: "Hacer predicciones con datos", de: "Vorhersagen aus Daten machen", nl: "Voorspellingen maken van data" },
          { en: "Replace all programmers", es: "Reemplazar todos los programadores", de: "Alle Programmierer ersetzen", nl: "Alle programmeurs vervangen" },
          { en: "Create video games", es: "Crear videojuegos", de: "Videospiele erstellen", nl: "Videogames maken" },
          { en: "Build websites", es: "Construir sitios web", de: "Websites erstellen", nl: "Websites bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "ML aims to make accurate predictions and decisions from data",
          es: "ML busca hacer predicciones y decisiones precisas con datos",
          de: "ML zielt darauf ab, genaue Vorhersagen aus Daten zu treffen",
          nl: "ML beoogt nauwkeurige voorspellingen te maken van data"
        }
      },
      {
        question: {
          en: "What does a Machine Learning algorithm need?",
          es: "¿Qué necesita un algoritmo de ML?",
          de: "Was braucht ein ML-Algorithmus?",
          nl: "Wat heeft een ML-algoritme nodig?"
        },
        options: [
          { en: "Data to learn from", es: "Datos para aprender", de: "Daten zum Lernen", nl: "Data om van te leren" },
          { en: "A physical robot", es: "Un robot físico", de: "Einen physischen Roboter", nl: "Een fysieke robot" },
          { en: "A game console", es: "Una consola de juegos", de: "Eine Spielkonsole", nl: "Een spelconsole" },
          { en: "Magic spells", es: "Hechizos mágicos", de: "Zaubersprüche", nl: "Magische spreuken" }
        ],
        correct: 0,
        explanation: {
          en: "ML algorithms require data to learn patterns and make predictions",
          es: "Los algoritmos de ML requieren datos para aprender patrones",
          de: "ML-Algorithmen benötigen Daten, um Muster zu lernen",
          nl: "ML-algoritmen hebben data nodig om patronen te leren"
        }
      },
      {
        question: {
          en: "What are the two main types of ML?",
          es: "¿Cuáles son los dos tipos principales de ML?",
          de: "Was sind die zwei Haupttypen von ML?",
          nl: "Wat zijn de twee hoofdtypen ML?"
        },
        options: [
          { en: "Supervised and Unsupervised", es: "Supervisado y no supervisado", de: "Überwacht und unüberwacht", nl: "Gesuperviseerd en ongesuperviseerd" },
          { en: "Fast and Slow", es: "Rápido y lento", de: "Schnell und langsam", nl: "Snel en langzaam" },
          { en: "Old and New", es: "Viejo y nuevo", de: "Alt und neu", nl: "Oud en nieuw" },
          { en: "Good and Bad", es: "Bueno y malo", de: "Gut und schlecht", nl: "Goed en slecht" }
        ],
        correct: 0,
        explanation: {
          en: "The two main types are Supervised Learning (with labels) and Unsupervised Learning (without labels)",
          es: "Los dos tipos principales son aprendizaje supervisado (con etiquetas) y no supervisado (sin etiquetas)",
          de: "Die zwei Haupttypen sind überwachtes Lernen (mit Labels) und unüberwachtes Lernen (ohne Labels)",
          nl: "De twee hoofdtypen zijn gesuperviseerd leren (met labels) en ongesuperviseerd leren (zonder labels)"
        }
      },
      {
        question: {
          en: "What is Supervised Learning in ML?",
          es: "¿Qué es Supervised Learning en ML?",
          de: "Was ist Supervised Learning in ML?",
          nl: "Wat is Supervised Learning in ML?"
        },
        options: [
          { en: "Learning with labeled data", es: "Aprendizaje con datos etiquetados", de: "Lernen mit gekennzeichneten Daten", nl: "Leren met gelabelde data" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised Learning: Learning with labeled data",
          es: "Supervised Learning: Aprendizaje con datos etiquetados",
          de: "Supervised Learning: Lernen mit gekennzeichneten Daten",
          nl: "Supervised Learning: Leren met gelabelde data"
        }
      },
      {
        question: {
          en: "What is Unsupervised Learning in ML?",
          es: "¿Qué es Unsupervised Learning en ML?",
          de: "Was ist Unsupervised Learning in ML?",
          nl: "Wat is Unsupervised Learning in ML?"
        },
        options: [
          { en: "Finding patterns without labels", es: "Encontrar patrones sin etiquetas", de: "Muster finden ohne Labels", nl: "Patronen vinden zonder labels" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Unsupervised Learning: Finding patterns without labels",
          es: "Unsupervised Learning: Encontrar patrones sin etiquetas",
          de: "Unsupervised Learning: Muster finden ohne Labels",
          nl: "Unsupervised Learning: Patronen vinden zonder labels"
        }
      },
      {
        question: {
          en: "What is Training data in ML?",
          es: "¿Qué es Training data en ML?",
          de: "Was ist Training data in ML?",
          nl: "Wat is Training data in ML?"
        },
        options: [
          { en: "Data used to teach the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren", nl: "Data om het model te trainen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Training data: Data used to teach the model",
          es: "Training data: Datos para entrenar el modelo",
          de: "Training data: Daten zum Trainieren",
          nl: "Training data: Data om het model te trainen"
        }
      },
      {
        question: {
          en: "What is Testing data in ML?",
          es: "¿Qué es Testing data en ML?",
          de: "Was ist Testing data in ML?",
          nl: "Wat is Testing data in ML?"
        },
        options: [
          { en: "Data to evaluate the model", es: "Datos para evaluar", de: "Daten zum Testen", nl: "Data om te evalueren" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Testing data: Data to evaluate the model",
          es: "Testing data: Datos para evaluar",
          de: "Testing data: Daten zum Testen",
          nl: "Testing data: Data om te evalueren"
        }
      },
      {
        question: {
          en: "What is Features in ML?",
          es: "¿Qué es Features en ML?",
          de: "Was ist Features in ML?",
          nl: "Wat is Features in ML?"
        },
        options: [
          { en: "Input variables for prediction", es: "Variables de entrada", de: "Eingabevariablen", nl: "Invoervariabelen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Features: Input variables for prediction",
          es: "Features: Variables de entrada",
          de: "Features: Eingabevariablen",
          nl: "Features: Invoervariabelen"
        }
      },
      {
        question: {
          en: "What is Label in ML?",
          es: "¿Qué es Label en ML?",
          de: "Was ist Label in ML?",
          nl: "Wat is Label in ML?"
        },
        options: [
          { en: "The output we want to predict", es: "La salida a predecir", de: "Die gewünschte Ausgabe", nl: "De uitvoer die we voorspellen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Label: The output we want to predict",
          es: "Label: La salida a predecir",
          de: "Label: Die gewünschte Ausgabe",
          nl: "Label: De uitvoer die we voorspellen"
        }
      },
      {
        question: {
          en: "What is Model in ML?",
          es: "¿Qué es Model en ML?",
          de: "Was ist Model in ML?",
          nl: "Wat is Model in ML?"
        },
        options: [
          { en: "The learned pattern from data", es: "El patrón aprendido", de: "Das gelernte Muster", nl: "Het geleerde patroon" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Model: The learned pattern from data",
          es: "Model: El patrón aprendido",
          de: "Model: Das gelernte Muster",
          nl: "Model: Het geleerde patroon"
        }
      },
      {
        question: {
          en: "What is Algorithm in ML?",
          es: "¿Qué es Algorithm en ML?",
          de: "Was ist Algorithm in ML?",
          nl: "Wat is Algorithm in ML?"
        },
        options: [
          { en: "The learning method used", es: "El método de aprendizaje", de: "Die Lernmethode", nl: "De leermethode" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Algorithm: The learning method used",
          es: "Algorithm: El método de aprendizaje",
          de: "Algorithm: Die Lernmethode",
          nl: "Algorithm: De leermethode"
        }
      },
      {
        question: {
          en: "What is Prediction in ML?",
          es: "¿Qué es Prediction en ML?",
          de: "Was ist Prediction in ML?",
          nl: "Wat is Prediction in ML?"
        },
        options: [
          { en: "Output from the model", es: "Salida del modelo", de: "Ausgabe des Modells", nl: "Uitvoer van het model" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Prediction: Output from the model",
          es: "Prediction: Salida del modelo",
          de: "Prediction: Ausgabe des Modells",
          nl: "Prediction: Uitvoer van het model"
        }
      },
      {
        question: {
          en: "What is Accuracy in ML?",
          es: "¿Qué es Accuracy en ML?",
          de: "Was ist Accuracy in ML?",
          nl: "Wat is Accuracy in ML?"
        },
        options: [
          { en: "How often model is correct", es: "Frecuencia de aciertos", de: "Wie oft korrekt", nl: "Hoe vaak het model gelijk heeft" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Accuracy: How often model is correct",
          es: "Accuracy: Frecuencia de aciertos",
          de: "Accuracy: Wie oft korrekt",
          nl: "Accuracy: Hoe vaak het model gelijk heeft"
        }
      },
      {
        question: {
          en: "What is Machine Learning?",
          es: "¿Qué es el aprendizaje automático?",
          de: "Was ist maschinelles Lernen?",
          nl: "Wat is Machine Learning?"
        },
        options: [
          { en: "Teaching computers to learn from data", es: "Enseñar a las computadoras a aprender de datos", de: "Computern beibringen, aus Daten zu lernen", nl: "Computers leren om van data te leren" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A type of computer hardware", es: "Un tipo de hardware", de: "Ein Computertyp", nl: "Een type computerhardware" },
          { en: "A video game genre", es: "Un género de videojuegos", de: "Ein Videospiel-Genre", nl: "Een videogame-genre" }
        ],
        correct: 0,
        explanation: {
          en: "Machine Learning is teaching computers to learn from data without explicit programming",
          es: "El aprendizaje automático enseña a las computadoras a aprender de datos sin programación explícita",
          de: "Maschinelles Lernen lehrt Computer, aus Daten zu lernen ohne explizite Programmierung",
          nl: "Machine Learning leert computers om te leren van data zonder expliciete programmering"
        }
      },
      {
        question: {
          en: "What does ML stand for?",
          es: "¿Qué significa ML?",
          de: "Wofür steht ML?",
          nl: "Waar staat ML voor?"
        },
        options: [
          { en: "Machine Learning", es: "Machine Learning", de: "Machine Learning", nl: "Machine Learning" },
          { en: "More Logic", es: "Más lógica", de: "Mehr Logik", nl: "Meer logica" },
          { en: "My Language", es: "Mi idioma", de: "Meine Sprache", nl: "Mijn taal" },
          { en: "Manual Labor", es: "Trabajo manual", de: "Manuelle Arbeit", nl: "Handarbeid" }
        ],
        correct: 0,
        explanation: {
          en: "ML stands for Machine Learning",
          es: "ML significa Machine Learning",
          de: "ML steht für Machine Learning",
          nl: "ML staat voor Machine Learning"
        }
      },
      {
        question: {
          en: "What is the main goal of Machine Learning?",
          es: "¿Cuál es el objetivo principal del ML?",
          de: "Was ist das Hauptziel des maschinellen Lernens?",
          nl: "Wat is het hoofddoel van Machine Learning?"
        },
        options: [
          { en: "Make predictions from data", es: "Hacer predicciones con datos", de: "Vorhersagen aus Daten machen", nl: "Voorspellingen maken van data" },
          { en: "Replace all programmers", es: "Reemplazar todos los programadores", de: "Alle Programmierer ersetzen", nl: "Alle programmeurs vervangen" },
          { en: "Create video games", es: "Crear videojuegos", de: "Videospiele erstellen", nl: "Videogames maken" },
          { en: "Build websites", es: "Construir sitios web", de: "Websites erstellen", nl: "Websites bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "ML aims to make accurate predictions and decisions from data",
          es: "ML busca hacer predicciones y decisiones precisas con datos",
          de: "ML zielt darauf ab, genaue Vorhersagen aus Daten zu treffen",
          nl: "ML beoogt nauwkeurige voorspellingen te maken van data"
        }
      },
      {
        question: {
          en: "What does a Machine Learning algorithm need?",
          es: "¿Qué necesita un algoritmo de ML?",
          de: "Was braucht ein ML-Algorithmus?",
          nl: "Wat heeft een ML-algoritme nodig?"
        },
        options: [
          { en: "Data to learn from", es: "Datos para aprender", de: "Daten zum Lernen", nl: "Data om van te leren" },
          { en: "A physical robot", es: "Un robot físico", de: "Einen physischen Roboter", nl: "Een fysieke robot" },
          { en: "A game console", es: "Una consola de juegos", de: "Eine Spielkonsole", nl: "Een spelconsole" },
          { en: "Magic spells", es: "Hechizos mágicos", de: "Zaubersprüche", nl: "Magische spreuken" }
        ],
        correct: 0,
        explanation: {
          en: "ML algorithms require data to learn patterns and make predictions",
          es: "Los algoritmos de ML requieren datos para aprender patrones",
          de: "ML-Algorithmen benötigen Daten, um Muster zu lernen",
          nl: "ML-algoritmen hebben data nodig om patronen te leren"
        }
      },
      {
        question: {
          en: "What are the two main types of ML?",
          es: "¿Cuáles son los dos tipos principales de ML?",
          de: "Was sind die zwei Haupttypen von ML?",
          nl: "Wat zijn de twee hoofdtypen ML?"
        },
        options: [
          { en: "Supervised and Unsupervised", es: "Supervisado y no supervisado", de: "Überwacht und unüberwacht", nl: "Gesuperviseerd en ongesuperviseerd" },
          { en: "Fast and Slow", es: "Rápido y lento", de: "Schnell und langsam", nl: "Snel en langzaam" },
          { en: "Old and New", es: "Viejo y nuevo", de: "Alt und neu", nl: "Oud en nieuw" },
          { en: "Good and Bad", es: "Bueno y malo", de: "Gut und schlecht", nl: "Goed en slecht" }
        ],
        correct: 0,
        explanation: {
          en: "The two main types are Supervised Learning (with labels) and Unsupervised Learning (without labels)",
          es: "Los dos tipos principales son aprendizaje supervisado (con etiquetas) y no supervisado (sin etiquetas)",
          de: "Die zwei Haupttypen sind überwachtes Lernen (mit Labels) und unüberwachtes Lernen (ohne Labels)",
          nl: "De twee hoofdtypen zijn gesuperviseerd leren (met labels) en ongesuperviseerd leren (zonder labels)"
        }
      },
      {
        question: {
          en: "What is Supervised Learning in ML?",
          es: "¿Qué es Supervised Learning en ML?",
          de: "Was ist Supervised Learning in ML?",
          nl: "Wat is Supervised Learning in ML?"
        },
        options: [
          { en: "Learning with labeled data", es: "Aprendizaje con datos etiquetados", de: "Lernen mit gekennzeichneten Daten", nl: "Leren met gelabelde data" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised Learning: Learning with labeled data",
          es: "Supervised Learning: Aprendizaje con datos etiquetados",
          de: "Supervised Learning: Lernen mit gekennzeichneten Daten",
          nl: "Supervised Learning: Leren met gelabelde data"
        }
      },
      {
        question: {
          en: "What is Unsupervised Learning in ML?",
          es: "¿Qué es Unsupervised Learning en ML?",
          de: "Was ist Unsupervised Learning in ML?",
          nl: "Wat is Unsupervised Learning in ML?"
        },
        options: [
          { en: "Finding patterns without labels", es: "Encontrar patrones sin etiquetas", de: "Muster finden ohne Labels", nl: "Patronen vinden zonder labels" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Unsupervised Learning: Finding patterns without labels",
          es: "Unsupervised Learning: Encontrar patrones sin etiquetas",
          de: "Unsupervised Learning: Muster finden ohne Labels",
          nl: "Unsupervised Learning: Patronen vinden zonder labels"
        }
      },
      {
        question: {
          en: "What is Training data in ML?",
          es: "¿Qué es Training data en ML?",
          de: "Was ist Training data in ML?",
          nl: "Wat is Training data in ML?"
        },
        options: [
          { en: "Data used to teach the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren", nl: "Data om het model te trainen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Training data: Data used to teach the model",
          es: "Training data: Datos para entrenar el modelo",
          de: "Training data: Daten zum Trainieren",
          nl: "Training data: Data om het model te trainen"
        }
      },
      {
        question: {
          en: "What is Testing data in ML?",
          es: "¿Qué es Testing data en ML?",
          de: "Was ist Testing data in ML?",
          nl: "Wat is Testing data in ML?"
        },
        options: [
          { en: "Data to evaluate the model", es: "Datos para evaluar", de: "Daten zum Testen", nl: "Data om te evalueren" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Testing data: Data to evaluate the model",
          es: "Testing data: Datos para evaluar",
          de: "Testing data: Daten zum Testen",
          nl: "Testing data: Data om te evalueren"
        }
      },
      {
        question: {
          en: "What is Features in ML?",
          es: "¿Qué es Features en ML?",
          de: "Was ist Features in ML?",
          nl: "Wat is Features in ML?"
        },
        options: [
          { en: "Input variables for prediction", es: "Variables de entrada", de: "Eingabevariablen", nl: "Invoervariabelen" },
          { en: "A programming language", es: "Un lenguaje", de: "Eine Sprache", nl: "Een taal" },
          { en: "A hardware component", es: "Un componente hardware", de: "Eine Hardware-Komponente", nl: "Een hardware-onderdeel" },
          { en: "A software tool", es: "Una herramienta", de: "Ein Werkzeug", nl: "Een tool" }
        ],
        correct: 0,
        explanation: {
          en: "Features: Input variables for prediction",
          es: "Features: Variables de entrada",
          de: "Features: Eingabevariablen",
          nl: "Features: Invoervariabelen"
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();