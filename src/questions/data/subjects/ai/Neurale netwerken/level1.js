// Neurale netwerken Quiz - Level 1
(function() {
  const level1 = {
    name: {
          "en": "Introduction to Neural Networks",
          "es": "Introducción a Redes Neuronales",
          "de": "Einführung in Neuronale Netzwerke",
          "nl": "Inleiding tot Neurale Netwerken"
    },
    questions: [
      {
        question: {
                  "en": "What is a neural network?",
                  "es": "¿Qué es una red neuronal?",
                  "de": "Was ist ein neuronales Netzwerk?",
                  "nl": "Wat is een neuraal netwerk?"
        },
        options: [
        {
                  "en": "A social network for scientists",
                  "es": "Una red social para científicos",
                  "de": "Ein soziales Netzwerk für Wissenschaftler",
                  "nl": "Een sociaal netwerk voor wetenschappers"
        },
        {
                  "en": "A network of connected computers",
                  "es": "Una red de computadoras conectadas",
                  "de": "Ein Netzwerk verbundener Computer",
                  "nl": "Een netwerk van verbonden computers"
        },
        {
                  "en": "A database system for storing data",
                  "es": "Un sistema de base de datos para almacenar datos",
                  "de": "Ein Datenbanksystem zur Datenspeicherung",
                  "nl": "Een databasesysteem voor het opslaan van data"
        },
        {
                  "en": "Computational model inspired by brain neural networks",
                  "es": "Modelo computacional inspirado en redes neuronales del cerebro",
                  "de": "Rechenmodell inspiriert von neuronalen Netzwerken im Gehirn",
                  "nl": "Computationeel model geïnspireerd door neurale netwerken in hersenen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A neural network is a computational model that mimics the way biological neural networks in animal brains process information. It consists of interconnected nodes (neurons) that process and transmit information through weighted connections.",
                  "es": "Una red neuronal es un modelo computacional que imita la forma en que las redes neuronales biológicas en los cerebros animales procesan información. Consiste en nodos interconectados (neuronas) que procesan y transmiten información a través de conexiones ponderadas.",
                  "de": "Ein neuronales Netzwerk ist ein rechnerisches Modell das nachahmt wie biologische neuronale Netzwerke in Tiergehirnen Informationen verarbeiten. Es besteht aus miteinander verbundenen Knoten (Neuronen) die Informationen durch gewichtete Verbindungen verarbeiten und übertragen.",
                  "nl": "Een neuraal netwerk is een computationeel model dat nabootst hoe biologische neurale netwerken in dierenbreinen informatie verwerken. Het bestaat uit onderling verbonden knooppunten (neuronen) die informatie verwerken en doorgeven via gewogen verbindingen."
        }
      },
      {
        question: {
                  "en": "What is a neuron (node) in a neural network?",
                  "es": "¿Qué es una neurona (nodo) en una red neuronal?",
                  "de": "Was ist ein Neuron (Knoten) in einem neuronalen Netzwerk?",
                  "nl": "Wat is een neuron (knooppunt) in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "Processing unit that receives inputs, applies weights, produces output",
                  "es": "Unidad de procesamiento que recibe entradas, aplica pesos, produce salida",
                  "de": "Verarbeitungseinheit die Eingaben empfängt, Gewichte anwendet, Ausgabe erzeugt",
                  "nl": "Verwerkingseenheid die invoer ontvangt, gewichten toepast, uitvoer produceert"
        },
        {
                  "en": "A biological cell in the brain",
                  "es": "Una célula biológica en el cerebro",
                  "de": "Eine biologische Zelle im Gehirn",
                  "nl": "Een biologische cel in de hersenen"
        },
        {
                  "en": "A computer processor",
                  "es": "Un procesador de computadora",
                  "de": "Ein Computerprozessor",
                  "nl": "Een computerprocessor"
        },
        {
                  "en": "A storage device for data",
                  "es": "Un dispositivo de almacenamiento de datos",
                  "de": "Ein Datenspeichergerät",
                  "nl": "Een opslagapparaat voor data"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A neuron in a neural network is a mathematical function that takes multiple inputs, multiplies each by a weight, sums them up, and applies an activation function to produce an output. This mimics how biological neurons process signals.",
                  "es": "Una neurona en una red neuronal es una función matemática que toma múltiples entradas, multiplica cada una por un peso, las suma y aplica una función de activación para producir una salida. Esto imita cómo las neuronas biológicas procesan señales.",
                  "de": "Ein Neuron in einem neuronalen Netzwerk ist eine mathematische Funktion die mehrere Eingaben nimmt, jede mit einem Gewicht multipliziert, sie aufsummiert und eine Aktivierungsfunktion anwendet um eine Ausgabe zu erzeugen. Dies ahmt nach wie biologische Neuronen Signale verarbeiten.",
                  "nl": "Een neuron in een neuraal netwerk is een wiskundige functie die meerdere invoeren neemt, elk vermenigvuldigt met een gewicht, ze optelt en een activeringsfunctie toepast om een uitvoer te produceren. Dit bootst na hoe biologische neuronen signalen verwerken."
        }
      },
      {
        question: {
                  "en": "What are weights in a neural network?",
                  "es": "¿Qué son los pesos en una red neuronal?",
                  "de": "Was sind Gewichte in einem neuronalen Netzwerk?",
                  "nl": "Wat zijn gewichten in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "The importance ranking of data pts",
                  "es": "La clasificación de importancia de los puntos de datos",
                  "de": "Die Wichtigkeitsrangfolge von Datenpunkten",
                  "nl": "De belangrijkheidsrangschikking van datapunten"
        },
        {
                  "en": "The speed of data processing",
                  "es": "La velocidad del procesamiento de datos",
                  "de": "Die Geschwindigkeit der Datenverarbeitung",
                  "nl": "De snelheid van dataverwerking"
        },
        {
                  "en": "The physical weight of the computer hardware",
                  "es": "El peso físico del hardware de la computadora",
                  "de": "Das physische Gewicht der Computerhardware",
                  "nl": "Het fysieke gewicht van de computerhardware"
        },
        {
                  "en": "Parameters determining connection strength between neurons",
                  "es": "Parámetros que determinan fuerza de conexiones entre neuronas",
                  "de": "Parameter die Verbindungsstärke zwischen Neuronen bestimmen",
                  "nl": "Parameters die verbindingssterkte tussen neuronen bepalen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Weights are numerical values that determine how much influence each input has on a neuron's output. During training, these weights are adjusted to minimize error and improve the network's performance on the given task.",
                  "es": "Los pesos son valores numéricos que determinan cuánta influencia tiene cada entrada en la salida de una neurona. Durante el entrenamiento, estos pesos se ajustan para minimizar el error y mejorar el rendimiento de la red en la tarea dada.",
                  "de": "Gewichte sind numerische Werte die bestimmen wie viel Einfluss jede Eingabe auf die Ausgabe eines Neurons hat. Während des Trainings werden diese Gewichte angepasst um Fehler zu minimieren und die Leistung des Netzwerks bei der gegebenen Aufgabe zu verbessern.",
                  "nl": "Gewichten zijn numerieke waarden die bepalen hoeveel invloed elke invoer heeft op de uitvoer van een neuron. Tijdens training worden deze gewichten aangepast om fouten te minimaliseren en de prestaties van het netwerk bij de gegeven taak te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is an activation function?",
                  "es": "¿Qué es una función de activación?",
                  "de": "Was ist eine Aktivierungsfunktion?",
                  "nl": "Wat is een activeringsfunctie?"
        },
        options: [
        {
                  "en": "A function that counts active neurons",
                  "es": "Una función que cuenta neuronas activas",
                  "de": "Eine Funktion die aktive Neuronen zählt",
                  "nl": "Een functie die actieve neuronen telt"
        },
        {
                  "en": "A function that starts the neural network",
                  "es": "Una función que inicia la red neuronal",
                  "de": "Eine Funktion die das neuronale Netzwerk startet",
                  "nl": "Een functie die het neurale netwerk start"
        },
        {
                  "en": "A function that activates the computer",
                  "es": "Una función que activa la computadora",
                  "de": "Eine Funktion die den Computer aktiviert",
                  "nl": "Een functie die de computer activeert"
        },
        {
                  "en": "Function determining if neuron activates based on input",
                  "es": "Función que determina si neurona se activa según entrada",
                  "de": "Funktion die bestimmt ob Neuron basierend auf Eingabe aktiviert wird",
                  "nl": "Functie die bepaalt of neuron activeert op basis van invoer"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "An activation function introduces non-linearity into the neural network by transforming the weighted sum of inputs. Common examples include sigmoid, ReLU, and tanh functions. Without activation functions, neural networks would only be able to learn linear relationships.",
                  "es": "Una función de activación introduce no linealidad en la red neuronal transformando la suma ponderada de entradas. Ejemplos comunes incluyen funciones sigmoid, ReLU y tanh. Sin funciones de activación, las redes neuronales solo podrían aprender relaciones lineales.",
                  "de": "Eine Aktivierungsfunktion führt Nicht-Linearität in das neuronale Netzwerk ein durch Transformation der gewichteten Summe von Eingaben. Häufige Beispiele sind Sigmoid-, ReLU- und tanh-Funktionen. Ohne Aktivierungsfunktionen könnten neuronale Netzwerke nur lineare Beziehungen lernen.",
                  "nl": "Een activeringsfunctie introduceert niet-lineariteit in het neurale netwerk door de gewogen som van invoeren te transformeren. Veelvoorkomende voorbeelden zijn sigmoid, ReLU en tanh functies. Zonder activeringsfuncties zouden neurale netwerken alleen lineaire relaties kunnen leren."
        }
      },
      {
        question: {
                  "en": "What is the basic structure of a neural network?",
                  "es": "¿Cuál es la estructura básica de una red neuronal?",
                  "de": "Was ist die Grundstruktur eines neuronalen Netzwerks?",
                  "nl": "Wat is de basisstructuur van een neuraal netwerk?"
        },
        options: [
        {
                  "en": "Random connections between neurons",
                  "es": "Conexiones aleatorias entre neuronas",
                  "de": "Zufällige Verbindungen zwischen Neuronen",
                  "nl": "Willekeurige verbindingen tussen neuronen"
        },
        {
                  "en": "Only input and output layers",
                  "es": "Solo capas de entrada y salida",
                  "de": "Nur Eingabe- und Ausgabeschichten",
                  "nl": "Alleen invoer- en uitvoerlagen"
        },
        {
                  "en": "A single layer of neurons",
                  "es": "Una sola capa de neuronas",
                  "de": "Eine einzige Schicht von Neuronen",
                  "nl": "Een enkele laag neuronen"
        },
        {
                  "en": "Input layer, hidden layer(s), and output layer",
                  "es": "Capa de entrada, capa(s) oculta(s) y capa de salida",
                  "de": "Eingabeschicht, versteckte Schicht(en) und Ausgabeschicht",
                  "nl": "Invoerlaag, verborgen laag/lagen en uitvoerlaag"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A basic neural network consists of an input layer (receives data), one or more hidden layers (process the data), and an output layer (produces results). Information flows from input to output through these connected layers of neurons.",
                  "es": "Una red neuronal básica consiste en una capa de entrada (recibe datos), una o más capas ocultas (procesan los datos) y una capa de salida (produce resultados). La información fluye de entrada a salida a través de estas capas conectadas de neuronas.",
                  "de": "Ein grundlegendes neuronales Netzwerk besteht aus einer Eingabeschicht (empfängt Daten), einer oder mehreren versteckten Schichten (verarbeiten die Daten) und einer Ausgabeschicht (erzeugt Ergebnisse). Information fließt von Eingabe zu Ausgabe durch diese verbundenen Schichten von Neuronen.",
                  "nl": "Een basis neuraal netwerk bestaat uit een invoerlaag (ontvangt data), een of meer verborgen lagen (verwerken de data) en een uitvoerlaag (produceert resultaten). Informatie stroomt van invoer naar uitvoer door deze verbonden lagen van neuronen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of training a neural network?",
                  "es": "¿Cuál es el propósito de entrenar una red neuronal?",
                  "de": "Was ist der Zweck des Trainings eines neuronalen Netzwerks?",
                  "nl": "Wat is het doel van het trainen van een neuraal netwerk?"
        },
        options: [
        {
                  "en": "To reduce the network size",
                  "es": "Para reducir el tamaño de la red",
                  "de": "Um die Netzwerkgröße zu reduzieren",
                  "nl": "Om de netwerkgrootte te verkleinen"
        },
        {
                  "en": "To make the network run faster",
                  "es": "Para hacer que la red funcione más rápido",
                  "de": "Um das Netzwerk schneller laufen zu lassen",
                  "nl": "Om het netwerk sneller te laten werken"
        },
        {
                  "en": "Adjust weights & biases for accurate predictions",
                  "es": "Ajustar pesos y sesgos para predicciones precisas",
                  "de": "Gewichte & Verzerrungen für genaue Vorhersagen anpassen",
                  "nl": "Gewichten & bias aanpassen voor nauwkeurige voorspellingen"
        },
        {
                  "en": "To increase the number of neurons",
                  "es": "Para aumentar el número de neuronas",
                  "de": "Um die Anzahl der Neuronen zu erhöhen",
                  "nl": "Om het aantal neuronen te verhogen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Training a neural network involves presenting it with examples and adjusting its weights and biases through backpropagation to minimize prediction errors and improve accuracy.",
                  "es": "Entrenar una red neuronal implica presentarle ejemplos y ajustar sus pesos y sesgos a través de retropropagación para minimizar errores de predicción y mejorar la precisión.",
                  "de": "Das Training eines neuronalen Netzwerks beinhaltet ihm Beispiele zu präsentieren und seine Gewichte und Verzerrungen durch Backpropagation anzupassen um Vorhersagefehler zu minimieren und Genauigkeit zu verbessern.",
                  "nl": "Het trainen van een neuraal netwerk houdt in dat het voorbeelden krijgt en zijn gewichten en bias worden aangepast via backpropagation om voorspellingsfouten te minimaliseren en nauwkeurigheid te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is a bias in neural networks?",
                  "es": "¿Qué es un sesgo en redes neuronales?",
                  "de": "Was ist eine Verzerrung in neuronalen Netzwerken?",
                  "nl": "Wat is een bias in neurale netwerken?"
        },
        options: [
        {
                  "en": "The tendency to prefer certain inputs",
                  "es": "La tendencia a preferir ciertas entradas",
                  "de": "Die Tendenz bestimmte Eingaben zu bevorzugen",
                  "nl": "De neiging om bepaalde invoeren te verkiezen"
        },
        {
                  "en": "An error in the network architecture",
                  "es": "Un error en la arquitectura de la red",
                  "de": "Ein Fehler in der Netzwerkarchitektur",
                  "nl": "Een fout in de netwerkarchitectuur"
        },
        {
                  "en": "Extra parameter shifting activation function to improve learning",
                  "es": "Parámetro adicional que desplaza función de activación para mejorar aprendizaje",
                  "de": "Zusätzlicher Parameter der Aktivierungsfunktion verschiebt um Lernen zu verbessern",
                  "nl": "Extra parameter die activeringsfunctie verschuift om leren te verbeteren"
        },
        {
                  "en": "A prejudice in the training data",
                  "es": "Un prejuicio en los datos de entrenamiento",
                  "de": "Ein Vorurteil in den Trainingsdaten",
                  "nl": "Een vooroordeel in de trainingsdata"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A bias is a learnable parameter added to each neuron that allows the activation function to shift, providing more flexibility in fitting the data and enabling the network to learn patterns that don't pass through the origin.",
                  "es": "Un sesgo es un parámetro aprendible agregado a cada neurona que permite que la función de activación se desplace, proporcionando más flexibilidad para ajustar los datos y permitiendo que la red aprenda patrones que no pasan por el origen.",
                  "de": "Eine Verzerrung ist ein lernbarer Parameter der zu jedem Neuron hinzugefügt wird und es der Aktivierungsfunktion ermöglicht sich zu verschieben, bietet mehr Flexibilität beim Anpassen der Daten und ermöglicht dem Netzwerk Muster zu lernen die nicht durch den Ursprung gehen.",
                  "nl": "Een bias is een leerbare parameter die aan elk neuron wordt toegevoegd en de activeringsfunctie laat verschuiven, biedt meer flexibiliteit bij het fitten van data en stelt het netwerk in staat patronen te leren die niet door de oorsprong gaan."
        }
      },
      {
        question: {
                  "en": "What is forward propagation in neural networks?",
                  "es": "¿Qué es la propagación hacia adelante en redes neuronales?",
                  "de": "Was ist Vorwärtspropagation in neuronalen Netzwerken?",
                  "nl": "Wat is forward propagation in neurale netwerken?"
        },
        options: [
        {
                  "en": "Updating weights in a forward direction",
                  "es": "Actualizar pesos en dirección hacia adelante",
                  "de": "Gewichte in Vorwärtsrichtung aktualisieren",
                  "nl": "Gewichten in voorwaartse richting bijwerken"
        },
        {
                  "en": "Passing input data through network layers to produce output",
                  "es": "Pasar datos de entrada por capas de red para producir salida",
                  "de": "Eingabedaten durch Netzwerkschichten leiten um Ausgabe zu erzeugen",
                  "nl": "Invoerdata doorgeven door netwerklagen om uitvoer te produceren"
        },
        {
                  "en": "Moving neurons forward in the network",
                  "es": "Mover neuronas hacia adelante en la red",
                  "de": "Neuronen im Netzwerk nach vorne bewegen",
                  "nl": "Neuronen voorwaarts bewegen in het netwerk"
        },
        {
                  "en": "Progressing through training epochs",
                  "es": "Progresar a través de épocas de entrenamiento",
                  "de": "Durch Trainingsepochen fortschreiten",
                  "nl": "Vooruitgaan door trainingsepochen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Forward propagation is the process where input data flows through the network from input layer to output layer. Each layer applies weights, biases, and activation functions to transform the data before passing it to the next layer.",
                  "es": "La propagación hacia adelante es el proceso donde los datos de entrada fluyen a través de la red desde la capa de entrada hasta la capa de salida. Cada capa aplica pesos, sesgos y funciones de activación para transformar los datos antes de pasarlos a la siguiente capa.",
                  "de": "Vorwärtspropagation ist der Prozess bei dem Eingabedaten durch das Netzwerk von der Eingabeschicht zur Ausgabeschicht fließen. Jede Schicht wendet Gewichte, Verzerrungen und Aktivierungsfunktionen an um die Daten zu transformieren bevor sie zur nächsten Schicht weitergegeben werden.",
                  "nl": "Forward propagation is het proces waarbij invoerdata door het netwerk stroomt van invoerlaag naar uitvoerlaag. Elke laag past gewichten, bias en activeringsfuncties toe om de data te transformeren voordat het naar de volgende laag wordt doorgegeven."
        }
      },
      {
        question: {
                  "en": "What is the difference between supervised and unsupervised learning in neural networks?",
                  "es": "¿Cuál es la diferencia entre aprendizaje supervisado y no supervisado en redes neuronales?",
                  "de": "Was ist der Unterschied zwischen überwachtem und unüberwachtem Lernen in neuronalen Netzwerken?",
                  "nl": "Wat is het verschil tussen supervised en unsupervised learning in neurale netwerken?"
        },
        options: [
        {
                  "en": "Supervised works only with images",
                  "es": "Supervisado funciona solo con imágenes",
                  "de": "Überwacht funktioniert nur mit Bildern",
                  "nl": "Supervised werkt alleen met afbeeldingen"
        },
        {
                  "en": "Supervised is faster than unsupervised learning",
                  "es": "Supervisado es más rápido que aprendizaje no supervisado",
                  "de": "Überwacht ist schneller als unüberwachtes Lernen",
                  "nl": "Supervised is sneller dan unsupervised learning"
        },
        {
                  "en": "Supervised uses labeled data, unsupervised finds patterns without labels",
                  "es": "Supervisado usa datos etiquetados, no supervisado encuentra patrones sin etiquetas",
                  "de": "Überwacht verwendet beschriftete Daten, unüberwacht findet Muster ohne Beschriftungen",
                  "nl": "Supervised gebruikt gelabelde data, unsupervised vindt patronen zonder labels"
        },
        {
                  "en": "Unsupervised requires more computational power",
                  "es": "No supervisado requiere más poder computacional",
                  "de": "Unüberwacht benötigt mehr Rechenleistung",
                  "nl": "Unsupervised vereist meer rekenkracht"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Supervised learning uses input-output pairs with known correct answers to train the network, like classifying images with labels. Unsupervised learning finds hidden patterns in data without being told what to look for, like clustering similar data points.",
                  "es": "El aprendizaje supervisado usa pares entrada-salida con respuestas correctas conocidas para entrenar la red, como clasificar imágenes con etiquetas. El aprendizaje no supervisado encuentra patrones ocultos en datos sin que se le diga qué buscar, como agrupar puntos de datos similares.",
                  "de": "Überwachtes Lernen verwendet Eingabe-Ausgabe-Paare mit bekannten korrekten Antworten um das Netzwerk zu trainieren, wie Bildklassifikation mit Labels. Unüberwachtes Lernen findet versteckte Muster in Daten ohne gesagt zu bekommen wonach zu suchen ist, wie das Gruppieren ähnlicher Datenpunkte.",
                  "nl": "Supervised learning gebruikt input-output paren met bekende juiste antwoorden om het netwerk te trainen, zoals het classificeren van afbeeldingen met labels. Unsupervised learning vindt verborgen patronen in data zonder te worden verteld waarnaar te zoeken, zoals het clusteren van vergelijkbare datapunten."
        }
      },
      {
        question: {
                  "en": "What is the role of the input layer in a neural network?",
                  "es": "¿Cuál es el papel de la capa de entrada en una red neuronal?",
                  "de": "Was ist die Rolle der Eingabeschicht in einem neuronalen Netzwerk?",
                  "nl": "Wat is de rol van de invoerlaag in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "To store training examples",
                  "es": "Para almacenar ejemplos de entrenamiento",
                  "de": "Um Trainingsbeispiele zu speichern",
                  "nl": "Om trainingsvoorbeelden op te slaan"
        },
        {
                  "en": "To make final predictions",
                  "es": "Para hacer predicciones finales",
                  "de": "Um endgültige Vorhersagen zu machen",
                  "nl": "Om definitieve voorspellingen te maken"
        },
        {
                  "en": "To apply activation functions",
                  "es": "Para aplicar funciones de activación",
                  "de": "Um Aktivierungsfunktionen anzuwenden",
                  "nl": "Om activeringsfuncties toe te passen"
        },
        {
                  "en": "Receive & pass raw data into network for processing",
                  "es": "Recibir y pasar datos en bruto para procesamiento",
                  "de": "Rohdaten empfangen & zur Verarbeitung weiterleiten",
                  "nl": "Ruwe data ontvangen & doorgeven voor verwerking"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The input layer serves as the entry point for data into the neural network. Each neuron in the input layer corresponds to one feature of the input data, and the layer passes this information to the first hidden layer for processing.",
                  "es": "La capa de entrada sirve como punto de entrada para datos en la red neuronal. Cada neurona en la capa de entrada corresponde a una característica de los datos de entrada, y la capa pasa esta información a la primera capa oculta para procesamiento.",
                  "de": "Die Eingabeschicht dient als Eintrittspunkt für Daten in das neuronale Netzwerk. Jedes Neuron in der Eingabeschicht entspricht einem Merkmal der Eingabedaten, und die Schicht gibt diese Information zur ersten versteckten Schicht zur Verarbeitung weiter.",
                  "nl": "De invoerlaag dient als ingangspunt voor data in het neurale netwerk. Elk neuron in de invoerlaag komt overeen met één kenmerk van de invoerdata, en de laag geeft deze informatie door aan de eerste verborgen laag voor verwerking."
        }
      },
      {
        question: {
                  "en": "What is the output layer responsible for?",
                  "es": "¿De qué es responsable la capa de salida?",
                  "de": "Wofür ist die Ausgabeschicht verantwortlich?",
                  "nl": "Waar is de uitvoerlaag verantwoordelijk voor?"
        },
        options: [
        {
                  "en": "Applying the first transformation to data",
                  "es": "Aplicar la primera transformación a los datos",
                  "de": "Die erste Transformation auf Daten anwenden",
                  "nl": "Het toepassen van de eerste transformatie op data"
        },
        {
                  "en": "Producing final predictions or classifications",
                  "es": "Producir predicciones finales o clasificaciones",
                  "de": "Endgültige Vorhersagen oder Klassifikationen erzeugen",
                  "nl": "Definitieve voorspellingen of classificaties produceren"
        },
        {
                  "en": "Receiving input data from external sources",
                  "es": "Recibir datos de entrada de fuentes externas",
                  "de": "Eingabedaten von externen Quellen empfangen",
                  "nl": "Het ontvangen van invoerdata van externe bronnen"
        },
        {
                  "en": "Storing intermediate calculations",
                  "es": "Almacenar cálculos intermedios",
                  "de": "Zwischenberechnungen speichern",
                  "nl": "Het opslaan van tussenberekeningen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The output layer generates the final results of the neural network. For classification tasks, it outputs probabilities for each class. For regression, it outputs numerical predictions. The number of neurons equals the number of output classes or target variables.",
                  "es": "La capa de salida genera los resultados finales de la red neuronal. Para tareas de clasificación, produce probabilidades para cada clase. Para regresión, produce predicciones numéricas. El número de neuronas iguala el número de clases de salida o variables objetivo.",
                  "de": "Die Ausgabeschicht erzeugt die endgültigen Ergebnisse des neuronalen Netzwerks. Für Klassifikationsaufgaben gibt sie Wahrscheinlichkeiten für jede Klasse aus. Für Regression gibt sie numerische Vorhersagen aus. Die Anzahl der Neuronen entspricht der Anzahl der Ausgabeklassen oder Zielvariablen.",
                  "nl": "De uitvoerlaag genereert de definitieve resultaten van het neurale netwerk. Voor classificatietaken geeft het kansen uit voor elke klasse. Voor regressie geeft het numerieke voorspellingen uit. Het aantal neuronen is gelijk aan het aantal uitvoerklassen of doelvariabelen."
        }
      },
      {
        question: {
                  "en": "What are hidden layers in a neural network?",
                  "es": "¿Qué son las capas ocultas en una red neuronal?",
                  "de": "Was sind versteckte Schichten in einem neuronalen Netzwerk?",
                  "nl": "Wat zijn verborgen lagen in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "Layers processing & transforming data between input & output",
                  "es": "Capas que procesan y transforman datos entre entrada y salida",
                  "de": "Schichten die Daten zwischen Eingabe & Ausgabe verarbeiten & transformieren",
                  "nl": "Lagen die data verwerken & transformeren tussen invoer & uitvoer"
        },
        {
                  "en": "Layers that are invisible to users",
                  "es": "Capas que son invisibles para los usuarios",
                  "de": "Schichten die für Benutzer unsichtbar sind",
                  "nl": "Lagen die onzichtbaar zijn voor gebruikers"
        },
        {
                  "en": "Backup layers for error recovery",
                  "es": "Capas de respaldo para recuperación de errores",
                  "de": "Backup-Schichten für Fehlerwiederherstellung",
                  "nl": "Back-up lagen voor foutherstel"
        },
        {
                  "en": "Layers that store network weights",
                  "es": "Capas que almacenan pesos de la red",
                  "de": "Schichten die Netzwerkgewichte speichern",
                  "nl": "Lagen die netwerkgewichten opslaan"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Hidden layers are the processing layers between input and output that extract features and learn complex patterns. Each hidden layer transforms the data representations, with deeper networks capable of learning more sophisticated abstractions.",
                  "es": "Las capas ocultas son las capas de procesamiento entre entrada y salida que extraen características y aprenden patrones complejos. Cada capa oculta transforma las representaciones de datos, con redes más profundas capaces de aprender abstracciones más sofisticadas.",
                  "de": "Versteckte Schichten sind die Verarbeitungsschichten zwischen Eingabe und Ausgabe die Merkmale extrahieren und komplexe Muster lernen. Jede versteckte Schicht transformiert die Datenrepräsentationen, wobei tiefere Netzwerke zu ausgeklügelteren Abstraktionen fähig sind.",
                  "nl": "Verborgen lagen zijn de verwerkingslagen tussen invoer en uitvoer die kenmerken extraheren en complexe patronen leren. Elke verborgen laag transformeert de datarepresentaties, waarbij diepere netwerken in staat zijn meer geavanceerde abstracties te leren."
        }
      },
      {
        question: {
                  "en": "What is meant by the 'depth' of a neural network?",
                  "es": "¿Qué se entiende por 'profundidad' de una red neuronal?",
                  "de": "Was ist mit der 'Tiefe' eines neuronalen Netzwerks gemeint?",
                  "nl": "Wat wordt bedoeld met de 'diepte' van een neuraal netwerk?"
        },
        options: [
        {
                  "en": "The complexity of mathematical operations",
                  "es": "La complejidad de las operaciones matemáticas",
                  "de": "Die Komplexität mathematischer Operationen",
                  "nl": "De complexiteit van wiskundige bewerkingen"
        },
        {
                  "en": "The physical depth of the computer hardware",
                  "es": "La profundidad física del hardware de la computadora",
                  "de": "Die physische Tiefe der Computerhardware",
                  "nl": "De fysieke diepte van de computerhardware"
        },
        {
                  "en": "How deeply the network understands data",
                  "es": "Qué tan profundamente la red comprende los datos",
                  "de": "Wie tief das Netzwerk Daten versteht",
                  "nl": "Hoe diep het netwerk data begrijpt"
        },
        {
                  "en": "The number of layers in the network, particularly hidden layers",
                  "es": "El número de capas en la red, particularmente capas ocultas",
                  "de": "Die Anzahl der Schichten im Netzwerk, insbesondere versteckte Schichten",
                  "nl": "Het aantal lagen in het netwerk, met name verborgen lagen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Network depth refers to the total number of layers, especially hidden layers. Deep networks (with many layers) can learn hierarchical representations and complex patterns, which is why this field is called 'deep learning'.",
                  "es": "La profundidad de la red se refiere al número total de capas, especialmente capas ocultas. Las redes profundas (con muchas capas) pueden aprender representaciones jerárquicas y patrones complejos, por eso este campo se llama 'aprendizaje profundo'.",
                  "de": "Netzwerktiefe bezieht sich auf die Gesamtzahl der Schichten, besonders versteckte Schichten. Tiefe Netzwerke (mit vielen Schichten) können hierarchische Repräsentationen und komplexe Muster lernen, weshalb dieses Feld 'Deep Learning' genannt wird.",
                  "nl": "Netwerkdiepte verwijst naar het totale aantal lagen, vooral verborgen lagen. Diepe netwerken (met veel lagen) kunnen hiërarchische representaties en complexe patronen leren, daarom wordt dit veld 'deep learning' genoemd."
        }
      },
      {
        question: {
                  "en": "What does it mean when we say a neural network 'learns'?",
                  "es": "¿Qué significa cuando decimos que una red neuronal 'aprende'?",
                  "de": "Was bedeutet es wenn wir sagen dass ein neuronales Netzwerk 'lernt'?",
                  "nl": "Wat betekent het wanneer we zeggen dat een neuraal netwerk 'leert'?"
        },
        options: [
        {
                  "en": "The network reads textbooks about the problem",
                  "es": "La red lee libros de texto sobre el problema",
                  "de": "Das Netzwerk liest Lehrbücher über das Problem",
                  "nl": "Het netwerk leest tekstboeken over het probleem"
        },
        {
                  "en": "Network automatically adjusts weights to minimize training errors",
                  "es": "Red ajusta automáticamente pesos para minimizar errores de entrenamiento",
                  "de": "Netzwerk passt automatisch Gewichte an um Trainingsfehler zu minimieren",
                  "nl": "Netwerk past automatisch gewichten aan om trainingsfouten te minimaliseren"
        },
        {
                  "en": "The network memorizes all training examples",
                  "es": "La red memoriza todos los ejemplos de entrenamiento",
                  "de": "Das Netzwerk merkt sich alle Trainingsbeispiele",
                  "nl": "Het netwerk memoriseert alle trainingsvoorbeelden"
        },
        {
                  "en": "The network grows new neurons during training",
                  "es": "La red desarrolla nuevas neuronas durante el entrenamiento",
                  "de": "Das Netzwerk wächst neue Neuronen während des Trainings",
                  "nl": "Het netwerk groeit nieuwe neuronen tijdens training"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Neural network learning is the process of automatically adjusting weights and biases through algorithms like gradient descent to minimize the difference between predicted and actual outputs, enabling the network to generalize to new data.",
                  "es": "El aprendizaje de la red neuronal es el proceso de ajustar automáticamente pesos y sesgos a través de algoritmos como descenso de gradiente para minimizar la diferencia entre salidas predichas y reales, permitiendo que la red generalice a nuevos datos.",
                  "de": "Neuronales Netzwerk-Lernen ist der Prozess der automatischen Anpassung von Gewichten und Verzerrungen durch Algorithmen wie Gradientenabstieg um die Differenz zwischen vorhergesagten und tatsächlichen Ausgaben zu minimieren, ermöglicht dem Netzwerk auf neue Daten zu generalisieren.",
                  "nl": "Neuraal netwerk leren is het proces van automatisch aanpassen van gewichten en bias via algoritmes zoals gradient descent om het verschil tussen voorspelde en werkelijke uitvoer te minimaliseren, waardoor het netwerk kan generaliseren naar nieuwe data."
        }
      },
      {
        question: {
                  "en": "What is the relationship between artificial neurons and biological neurons?",
                  "es": "¿Cuál es la relación entre neuronas artificiales y neuronas biológicas?",
                  "de": "Was ist die Beziehung zwischen künstlichen und biologischen Neuronen?",
                  "nl": "Wat is de relatie tussen kunstmatige neuronen en biologische neuronen?"
        },
        options: [
        {
                  "en": "Artificial neurons are simplified models inspired by biological neurons",
                  "es": "Neuronas artificiales son modelos simplificados inspirados en neuronas biológicas",
                  "de": "Künstliche Neuronen sind vereinfachte Modelle inspiriert von biologischen Neuronen",
                  "nl": "Kunstmatige neuronen zijn vereenvoudigde modellen geïnspireerd door biologische neuronen"
        },
        {
                  "en": "Artificial neurons are more complex than biological ones",
                  "es": "Las neuronas artificiales son más complejas que las biológicas",
                  "de": "Künstliche Neuronen sind komplexer als biologische",
                  "nl": "Kunstmatige neuronen zijn complexer dan biologische"
        },
        {
                  "en": "They are exactly the same in function and structure",
                  "es": "Son exactamente iguales en función y estructura",
                  "de": "Sie sind in Funktion und Struktur genau gleich",
                  "nl": "Ze zijn precies hetzelfde in functie en structuur"
        },
        {
                  "en": "There is no relationship between them",
                  "es": "No hay relación entre ellas",
                  "de": "Es gibt keine Beziehung zwischen ihnen",
                  "nl": "Er is geen relatie tussen hen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Artificial neurons are inspired by biological neurons but are much simpler. Both receive inputs, process them, and produce outputs, but artificial neurons use mathematical functions while biological neurons involve complex electrochemical processes.",
                  "es": "Las neuronas artificiales están inspiradas en neuronas biológicas pero son mucho más simples. Ambas reciben entradas, las procesan y producen salidas, pero las neuronas artificiales usan funciones matemáticas mientras las neuronas biológicas involucran procesos electroquímicos complejos.",
                  "de": "Künstliche Neuronen sind von biologischen Neuronen inspiriert aber viel einfacher. Beide empfangen Eingaben, verarbeiten sie und erzeugen Ausgaben, aber künstliche Neuronen verwenden mathematische Funktionen während biologische Neuronen komplexe elektrochemische Prozesse beinhalten.",
                  "nl": "Kunstmatige neuronen zijn geïnspireerd door biologische neuronen maar zijn veel eenvoudiger. Beide ontvangen invoer, verwerken deze en produceren uitvoer, maar kunstmatige neuronen gebruiken wiskundige functies terwijl biologische neuronen complexe elektrochemische processen bevatten."
        }
      },
      {
        question: {
                  "en": "What is the purpose of using multiple layers in a neural network?",
                  "es": "¿Cuál es el propósito de usar múltiples capas en una red neuronal?",
                  "de": "Was ist der Zweck der Verwendung mehrerer Schichten in einem neuronalen Netzwerk?",
                  "nl": "Wat is het doel van het gebruik van meerdere lagen in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "To make the network easier to understand",
                  "es": "Para hacer la red más fácil de entender",
                  "de": "Um das Netzwerk einfacher verständlich zu machen",
                  "nl": "Om het netwerk makkelijker te begrijpen"
        },
        {
                  "en": "Enable learning complex, hierarchical patterns & relationships",
                  "es": "Permitir aprender patrones y relaciones complejas y jerárquicas",
                  "de": "Ermöglichen komplexe, hierarchische Muster & Beziehungen zu lernen",
                  "nl": "In staat stellen complexe, hiërarchische patronen & relaties te leren"
        },
        {
                  "en": "To use less computer memory",
                  "es": "Para usar menos memoria de computadora",
                  "de": "Um weniger Computerspeicher zu verwenden",
                  "nl": "Om minder computergeheugen te gebruiken"
        },
        {
                  "en": "To make the network run faster",
                  "es": "Para hacer que la red funcione más rápido",
                  "de": "Um das Netzwerk schneller laufen zu lassen",
                  "nl": "Om het netwerk sneller te laten werken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Multiple layers allow neural networks to learn hierarchical representations, where early layers detect simple features and deeper layers combine them into complex patterns. This enables learning sophisticated relationships that single-layer networks cannot capture.",
                  "es": "Múltiples capas permiten a las redes neuronales aprender representaciones jerárquicas, donde las capas tempranas detectan características simples y las capas más profundas las combinan en patrones complejos. Esto permite aprender relaciones sofisticadas que las redes de una sola capa no pueden capturar.",
                  "de": "Mehrere Schichten ermöglichen neuronalen Netzwerken hierarchische Repräsentationen zu lernen, wobei frühe Schichten einfache Merkmale erkennen und tiefere Schichten sie zu komplexen Mustern kombinieren. Dies ermöglicht das Lernen ausgeklügelter Beziehungen die einschichtige Netzwerke nicht erfassen können.",
                  "nl": "Meerdere lagen stellen neurale netwerken in staat hiërarchische representaties te leren, waarbij vroege lagen eenvoudige kenmerken detecteren en diepere lagen ze combineren tot complexe patronen. Dit maakt het leren van geavanceerde relaties mogelijk die enkele-laag netwerken niet kunnen vastleggen."
        }
      },
      {
        question: {
                  "en": "What is an example of a simple neural network application?",
                  "es": "¿Cuál es un ejemplo de una aplicación simple de red neuronal?",
                  "de": "Was ist ein Beispiel für eine einfache neuronale Netzwerkanwendung?",
                  "nl": "Wat is een voorbeeld van een eenvoudige neurale netwerktoepassing?"
        },
        options: [
        {
                  "en": "Performing brain surgery",
                  "es": "Realizar cirugía cerebral",
                  "de": "Gehirnchirurgie durchführen",
                  "nl": "Het uitvoeren van hersenoperaties"
        },
        {
                  "en": "Building rocket engines",
                  "es": "Construir motores de cohetes",
                  "de": "Raketentriebwerke bauen",
                  "nl": "Het bouwen van raketmotoren"
        },
        {
                  "en": "Recognizing handwritten digits from 0-9",
                  "es": "Reconocer dígitos escritos a mano del 0-9",
                  "de": "Handgeschriebene Ziffern von 0-9 erkennen",
                  "nl": "Het herkennen van handgeschreven cijfers van 0-9"
        },
        {
                  "en": "Controlling nuclear power plants",
                  "es": "Controlar plantas de energía nuclear",
                  "de": "Kernkraftwerke kontrollieren",
                  "nl": "Het besturen van kerncentrales"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Handwritten digit recognition is a classic and relatively simple neural network application. The network learns to identify patterns in pixel data to classify images of digits, making it a great introduction to image classification tasks.",
                  "es": "El reconocimiento de dígitos escritos a mano es una aplicación clásica y relativamente simple de redes neuronales. La red aprende a identificar patrones en datos de píxeles para clasificar imágenes de dígitos, haciéndola una gran introducción a tareas de clasificación de imágenes.",
                  "de": "Handschrift-Ziffernerkennung ist eine klassische und relativ einfache neuronale Netzwerkanwendung. Das Netzwerk lernt Muster in Pixeldaten zu identifizieren um Bilder von Ziffern zu klassifizieren, macht es zu einer großartigen Einführung in Bildklassifikationsaufgaben.",
                  "nl": "Handgeschreven cijferherkenning is een klassieke en relatief eenvoudige neurale netwerktoepassing. Het netwerk leert patronen in pixeldata te identificeren om afbeeldingen van cijfers te classificeren, wat het een geweldige introductie maakt voor beeldclassificatietaken."
        }
      },
      {
        question: {
                  "en": "What is the main advantage of neural networks over traditional programming?",
                  "es": "¿Cuál es la principal ventaja de las redes neuronales sobre la programación tradicional?",
                  "de": "Was ist der Hauptvorteil neuronaler Netzwerke gegenüber traditioneller Programmierung?",
                  "nl": "Wat is het hoofdvoordeel van neurale netwerken ten opzichte van traditioneel programmeren?"
        },
        options: [
        {
                  "en": "They are easier to debug",
                  "es": "Son más fáciles de depurar",
                  "de": "Sie sind einfacher zu debuggen",
                  "nl": "Ze zijn makkelijker te debuggen"
        },
        {
                  "en": "Automatically discover patterns & features from data without explicit programming",
                  "es": "Descubren automáticamente patrones y características sin programación explícita",
                  "de": "Entdecken automatisch Muster & Merkmale aus Daten ohne explizite Programmierung",
                  "nl": "Ontdekken automatisch patronen & kenmerken uit data zonder expliciete programmering"
        },
        {
                  "en": "They require less computer memory",
                  "es": "Requieren menos memoria de computadora",
                  "de": "Sie benötigen weniger Computerspeicher",
                  "nl": "Ze vereisen minder computergeheugen"
        },
        {
                  "en": "They are always faster than traditional programs",
                  "es": "Siempre son más rápidas que los programas tradicionales",
                  "de": "Sie sind immer schneller als traditionelle Programme",
                  "nl": "Ze zijn altijd sneller dan traditionele programma's"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Neural networks excel at pattern recognition and feature extraction from data without requiring explicit programming of rules. They can learn complex relationships automatically through training, making them powerful for tasks where traditional rule-based programming is insufficient.",
                  "es": "Las redes neuronales sobresalen en reconocimiento de patrones y extracción de características de datos sin requerir programación explícita de reglas. Pueden aprender relaciones complejas automáticamente a través del entrenamiento, haciéndolas poderosas para tareas donde la programación tradicional basada en reglas es insuficiente.",
                  "de": "Neuronale Netzwerke zeichnen sich durch Mustererkennung und Merkmalsextraktion aus Daten aus ohne explizite Programmierung von Regeln zu benötigen. Sie können komplexe Beziehungen automatisch durch Training lernen, macht sie mächtig für Aufgaben wo traditionelle regelbasierte Programmierung unzureichend ist.",
                  "nl": "Neurale netwerken blinken uit in patroonherkenning en kenmerkextractie uit data zonder expliciete programmering van regels te vereisen. Ze kunnen complexe relaties automatisch leren door training, wat ze krachtig maakt voor taken waar traditionele regel-gebaseerde programmering ontoereikend is."
        }
      },
      {
        question: {
                  "en": "What does 'training' a neural network involve?",
                  "es": "¿Qué implica 'entrenar' una red neuronal?",
                  "de": "Was beinhaltet das 'Training' eines neuronalen Netzwerks?",
                  "nl": "Wat houdt het 'trainen' van een neuraal netwerk in?"
        },
        options: [
        {
                  "en": "Installing software updates on the network",
                  "es": "Instalar actualizaciones de software en la red",
                  "de": "Software-Updates auf dem Netzwerk installieren",
                  "nl": "Software-updates installeren op het netwerk"
        },
        {
                  "en": "Physically connecting neurons together",
                  "es": "Conectar físicamente neuronas juntas",
                  "de": "Neuronen physisch miteinander verbinden",
                  "nl": "Neuronen fysiek met elkaar verbinden"
        },
        {
                  "en": "Repeatedly show examples & adjust weights to improve performance",
                  "es": "Mostrar ejemplos repetidamente y ajustar pesos para mejorar rendimiento",
                  "de": "Wiederholt Beispiele zeigen & Gewichte anpassen um Leistung zu verbessern",
                  "nl": "Herhaaldelijk voorbeelden tonen & gewichten aanpassen voor betere prestaties"
        },
        {
                  "en": "Teaching the network to follow specific instructions",
                  "es": "Enseñar a la red a seguir instrucciones específicas",
                  "de": "Dem Netzwerk beibringen spezifische Anweisungen zu befolgen",
                  "nl": "Het netwerk leren specifieke instructies te volgen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Training involves presenting the neural network with many examples (training data), calculating how far off its predictions are (loss), and then adjusting the weights using algorithms like backpropagation to gradually improve accuracy over many iterations.",
                  "es": "El entrenamiento implica presentar a la red neuronal muchos ejemplos (datos de entrenamiento), calcular qué tan lejos están sus predicciones (pérdida), y luego ajustar los pesos usando algoritmos como retropropagación para mejorar gradualmente la precisión a través de muchas iteraciones.",
                  "de": "Training beinhaltet dem neuronalen Netzwerk viele Beispiele zu präsentieren (Trainingsdaten), zu berechnen wie weit seine Vorhersagen daneben liegen (Verlust), und dann die Gewichte mit Algorithmen wie Backpropagation anzupassen um die Genauigkeit über viele Iterationen schrittweise zu verbessern.",
                  "nl": "Training houdt in dat het neurale netwerk veel voorbeelden krijgt (trainingsdata), berekenen hoe ver zijn voorspellingen ernaast zitten (verlies), en dan de gewichten aanpassen met algoritmes zoals backpropagation om nauwkeurigheid geleidelijk te verbeteren over veel iteraties."
        }
      },
      {
        question: {
                  "en": "Why are neural networks particularly good at pattern recognition?",
                  "es": "¿Por qué las redes neuronales son particularmente buenas en reconocimiento de patrones?",
                  "de": "Warum sind neuronale Netzwerke besonders gut in Mustererkennung?",
                  "nl": "Waarom zijn neurale netwerken bijzonder goed in patroonherkenning?"
        },
        options: [
        {
                  "en": "Learn hierarchical features & capture complex non-linear relationships",
                  "es": "Aprenden características jerárquicas y capturan relaciones no lineales complejas",
                  "de": "Lernen hierarchische Merkmale & erfassen komplexe nichtlineare Beziehungen",
                  "nl": "Leren hiërarchische kenmerken & leggen complexe niet-lineaire relaties vast"
        },
        {
                  "en": "They can see patterns that are invisible",
                  "es": "Pueden ver patrones que son invisibles",
                  "de": "Sie können Muster sehen die unsichtbar sind",
                  "nl": "Ze kunnen patronen zien die onzichtbaar zijn"
        },
        {
                  "en": "They process information faster than humans",
                  "es": "Procesan información más rápido que los humanos",
                  "de": "Sie verarbeiten Informationen schneller als Menschen",
                  "nl": "Ze verwerken informatie sneller dan mensen"
        },
        {
                  "en": "They have perfect memory for all patterns",
                  "es": "Tienen memoria perfecta para todos los patrones",
                  "de": "Sie haben perfektes Gedächtnis für alle Muster",
                  "nl": "Ze hebben perfect geheugen voor alle patronen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Neural networks excel at pattern recognition because they can automatically learn hierarchical representations, where simple features are combined into increasingly complex patterns. Their ability to model non-linear relationships allows them to capture subtle patterns that linear methods miss.",
                  "es": "Las redes neuronales sobresalen en reconocimiento de patrones porque pueden aprender automáticamente representaciones jerárquicas, donde características simples se combinan en patrones cada vez más complejos. Su capacidad para modelar relaciones no lineales les permite capturar patrones sutiles que los métodos lineales pierden.",
                  "de": "Neuronale Netzwerke zeichnen sich in Mustererkennung aus weil sie automatisch hierarchische Repräsentationen lernen können, wobei einfache Merkmale zu zunehmend komplexen Mustern kombiniert werden. Ihre Fähigkeit nichtlineare Beziehungen zu modellieren ermöglicht ihnen subtile Muster zu erfassen die lineare Methoden verpassen.",
                  "nl": "Neurale netwerken blinken uit in patroonherkenning omdat ze automatisch hiërarchische representaties kunnen leren, waarbij eenvoudige kenmerken gecombineerd worden tot steeds complexere patronen. Hun vermogen om niet-lineaire relaties te modelleren stelt hen in staat subtiele patronen vast te leggen die lineaire methoden missen."
        }
      },
      {
        question: {
                  "en": "What is a perceptron in neural network terminology?",
                  "es": "¿Qué es un perceptrón en terminología de redes neuronales?",
                  "de": "Was ist ein Perceptron in der Terminologie neuronaler Netzwerke?",
                  "nl": "Wat is een perceptron in neurale netwerk terminologie?"
        },
        options: [
        {
                  "en": "A layer that perceives color in images",
                  "es": "Una capa que percibe color en imágenes",
                  "de": "Eine Schicht die Farbe in Bildern wahrnimmt",
                  "nl": "Een laag die kleur in afbeeldingen waarneemt"
        },
        {
                  "en": "A type of convolutional filter",
                  "es": "Un tipo de filtro convolucional",
                  "de": "Eine Art Faltungsfilter",
                  "nl": "Een type convolutioneel filter"
        },
        {
                  "en": "The simplest type of artificial neuron with binary step activation function",
                  "es": "El tipo más simple de neurona artificial con función de activación de paso binario",
                  "de": "Der einfachste Typ künstlichen Neurons mit binärer Schritt-Aktivierungsfunktion",
                  "nl": "Het eenvoudigste type kunstmatig neuron met binaire stap activeringsfunctie"
        },
        {
                  "en": "A deep neural network with many layers",
                  "es": "Una red neuronal profunda con muchas capas",
                  "de": "Ein tiefes neuronales Netzwerk mit vielen Schichten",
                  "nl": "Een diep neuraal netwerk met veel lagen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A perceptron is the simplest form of a neural network, consisting of a single artificial neuron that takes weighted inputs, sums them, and applies a binary step function to produce an output of 0 or 1. It was one of the first neural network models developed in the 1950s.",
                  "es": "Un perceptrón es la forma más simple de una red neuronal, consistiendo en una sola neurona artificial que toma entradas ponderadas, las suma y aplica una función de paso binario para producir una salida de 0 o 1. Fue uno de los primeros modelos de redes neuronales desarrollados en los años 1950.",
                  "de": "Ein Perceptron ist die einfachste Form eines neuronalen Netzwerks, bestehend aus einem einzelnen künstlichen Neuron das gewichtete Eingaben nimmt, sie aufsummiert und eine binäre Schrittfunktion anwendet um eine Ausgabe von 0 oder 1 zu erzeugen. Es war eines der ersten in den 1950er Jahren entwickelten neuronalen Netzwerkmodelle.",
                  "nl": "Een perceptron is de eenvoudigste vorm van een neuraal netwerk, bestaande uit een enkel kunstmatig neuron dat gewogen invoeren neemt, ze optelt en een binaire stapfunctie toepast om een uitvoer van 0 of 1 te produceren. Het was een van de eerste neurale netwerkmodellen ontwikkeld in de jaren 1950."
        }
      },
      {
        question: {
                  "en": "What is the vanishing gradient problem in neural networks?",
                  "es": "¿Qué es el problema del gradiente que desaparece en redes neuronales?",
                  "de": "Was ist das Problem des verschwindenden Gradienten in neuronalen Netzwerken?",
                  "nl": "Wat is het verdwijnende gradiënt probleem in neurale netwerken?"
        },
        options: [
        {
                  "en": "Gradients become extremely small in deep networks, making early layers difficult to train",
                  "es": "Gradientes se vuelven extremadamente pequeños en redes profundas, dificultando entrenar capas tempranas",
                  "de": "Gradienten werden in tiefen Netzwerken extrem klein, erschwert Training früher Schichten",
                  "nl": "Gradiënten worden extreem klein in diepe netwerken, waardoor vroege lagen moeilijk te trainen zijn"
        },
        {
                  "en": "The network loses all its gradients during training",
                  "es": "La red pierde todos sus gradientes durante entrenamiento",
                  "de": "Das Netzwerk verliert alle Gradienten während des Trainings",
                  "nl": "Het netwerk verliest al zijn gradiënten tijdens training"
        },
        {
                  "en": "The learning rate becomes too small",
                  "es": "La tasa de aprendizaje se vuelve demasiado pequeña",
                  "de": "Die Lernrate wird zu klein",
                  "nl": "Het leerpercentage wordt te klein"
        },
        {
                  "en": "Gradients disappear from computer memory",
                  "es": "Los gradientes desaparecen de la memoria de la computadora",
                  "de": "Gradienten verschwinden aus dem Computerspeicher",
                  "nl": "Gradiënten verdwijnen uit computergeheugen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The vanishing gradient problem occurs when gradients become progressively smaller as they propagate backward through deep networks, especially with sigmoid or tanh activations. This makes it difficult for early layers to update their weights effectively, slowing or preventing learning.",
                  "es": "El problema del gradiente que desaparece ocurre cuando los gradientes se vuelven progresivamente más pequeños al propagarse hacia atrás a través de redes profundas, especialmente con activaciones sigmoid o tanh. Esto dificulta que las capas tempranas actualicen sus pesos efectivamente, ralentizando o previniendo el aprendizaje.",
                  "de": "Das Problem des verschwindenden Gradienten tritt auf wenn Gradienten progressiv kleiner werden während sie rückwärts durch tiefe Netzwerke propagieren, besonders mit Sigmoid- oder tanh-Aktivierungen. Dies erschwert es frühen Schichten ihre Gewichte effektiv zu aktualisieren, verlangsamt oder verhindert Lernen.",
                  "nl": "Het verdwijnende gradiënt probleem treedt op wanneer gradiënten progressief kleiner worden terwijl ze achterwaarts door diepe netwerken propageren, vooral met sigmoid of tanh activeringen. Dit maakt het moeilijk voor vroege lagen om hun gewichten effectief bij te werken, vertraagt of verhindert leren."
        }
      },
      {
        question: {
                  "en": "What is the difference between a feedforward and recurrent neural network?",
                  "es": "¿Cuál es la diferencia entre una red neuronal feedforward y recurrente?",
                  "de": "Was ist der Unterschied zwischen einem Feedforward- und rekurrenten neuronalen Netzwerk?",
                  "nl": "Wat is het verschil tussen een feedforward en recurrent neuraal netwerk?"
        },
        options: [
        {
                  "en": "Recurrent networks only work with images",
                  "es": "Redes recurrentes solo funcionan con imágenes",
                  "de": "Rekurrente Netzwerke funktionieren nur mit Bildern",
                  "nl": "Recurrente netwerken werken alleen met afbeeldingen"
        },
        {
                  "en": "Feedforward networks cannot be trained",
                  "es": "Redes feedforward no pueden ser entrenadas",
                  "de": "Feedforward-Netzwerke können nicht trainiert werden",
                  "nl": "Feedforward netwerken kunnen niet getraind worden"
        },
        {
                  "en": "Feedforward is faster than recurrent networks",
                  "es": "Feedforward es más rápido que redes recurrentes",
                  "de": "Feedforward ist schneller als rekurrente Netzwerke",
                  "nl": "Feedforward is sneller dan recurrente netwerken"
        },
        {
                  "en": "Feedforward processes data in one direction, recurrent has loops allowing feedback connections",
                  "es": "Feedforward procesa datos en una dirección, recurrente tiene bucles permitiendo conexiones de retroalimentación",
                  "de": "Feedforward verarbeitet Daten in eine Richtung, rekurrent hat Schleifen die Rückkopplungsverbindungen ermöglichen",
                  "nl": "Feedforward verwerkt data in één richting, recurrent heeft lussen die feedback verbindingen toestaan"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Feedforward networks pass information in one direction from input to output without loops, ideal for static data like images. Recurrent networks have feedback connections that create loops, allowing them to maintain memory and process sequential data like text or time series.",
                  "es": "Redes feedforward pasan información en una dirección desde entrada a salida sin bucles, ideales para datos estáticos como imágenes. Redes recurrentes tienen conexiones de retroalimentación que crean bucles, permitiéndoles mantener memoria y procesar datos secuenciales como texto o series temporales.",
                  "de": "Feedforward-Netzwerke leiten Informationen in eine Richtung von Eingabe zu Ausgabe ohne Schleifen, ideal für statische Daten wie Bilder. Rekurrente Netzwerke haben Rückkopplungsverbindungen die Schleifen erstellen, ermöglichen ihnen Gedächtnis zu behalten und sequentielle Daten wie Text oder Zeitreihen zu verarbeiten.",
                  "nl": "Feedforward netwerken geven informatie in één richting door van invoer naar uitvoer zonder lussen, ideaal voor statische data zoals afbeeldingen. Recurrente netwerken hebben feedback verbindingen die lussen creëren, waardoor ze geheugen kunnen behouden en sequentiële data zoals tekst of tijdreeksen kunnen verwerken."
        }
      },
      {
        question: {
                  "en": "What is batch normalization in neural networks?",
                  "es": "¿Qué es la normalización por lotes en redes neuronales?",
                  "de": "Was ist Batch-Normalisierung in neuronalen Netzwerken?",
                  "nl": "Wat is batch normalisatie in neurale netwerken?"
        },
        options: [
        {
                  "en": "Technique normalizing layer inputs to improve training stability and speed",
                  "es": "Técnica que normaliza entradas de capa para mejorar estabilidad y velocidad de entrenamiento",
                  "de": "Technik die Schichteingaben normalisiert um Trainingsstabilität und -geschwindigkeit zu verbessern",
                  "nl": "Techniek die laaginvoeren normaliseert om trainingsstabiliteit en -snelheid te verbeteren"
        },
        {
                  "en": "Creating batches of similar training examples",
                  "es": "Crear lotes de ejemplos de entrenamiento similares",
                  "de": "Stapel ähnlicher Trainingsbeispiele erstellen",
                  "nl": "Batches van vergelijkbare trainingsvoorbeelden creëren"
        },
        {
                  "en": "Normalizing the output layer only",
                  "es": "Normalizar solo la capa de salida",
                  "de": "Nur die Ausgabeschicht normalisieren",
                  "nl": "Alleen de uitvoerlaag normaliseren"
        },
        {
                  "en": "Processing data in batches to save memory",
                  "es": "Procesar datos en lotes para ahorrar memoria",
                  "de": "Daten in Stapeln verarbeiten um Speicher zu sparen",
                  "nl": "Data in batches verwerken om geheugen te besparen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Batch normalization normalizes the inputs of each layer by adjusting and scaling activations within a batch. This reduces internal covariate shift, allows higher learning rates, acts as regularization, and significantly speeds up training while improving model stability.",
                  "es": "La normalización por lotes normaliza las entradas de cada capa ajustando y escalando activaciones dentro de un lote. Esto reduce el cambio de covarianza interna, permite tasas de aprendizaje más altas, actúa como regularización y acelera significativamente el entrenamiento mientras mejora la estabilidad del modelo.",
                  "de": "Batch-Normalisierung normalisiert die Eingaben jeder Schicht durch Anpassen und Skalieren von Aktivierungen innerhalb eines Stapels. Dies reduziert interne Kovariantenverschiebung, ermöglicht höhere Lernraten, wirkt als Regularisierung und beschleunigt Training erheblich während Modellstabilität verbessert wird.",
                  "nl": "Batch normalisatie normaliseert de invoeren van elke laag door activeringen binnen een batch aan te passen en te schalen. Dit vermindert interne covariantieverschuiving, staat hogere leersnelheden toe, werkt als regularisatie en versnelt training aanzienlijk terwijl modelstabiliteit verbetert."
        }
      },
      {
        question: {
                  "en": "What is overfitting in neural networks?",
                  "es": "¿Qué es el sobreajuste en redes neuronales?",
                  "de": "Was ist Überanpassung in neuronalen Netzwerken?",
                  "nl": "Wat is overfitting in neurale netwerken?"
        },
        options: [
        {
                  "en": "Training takes too long",
                  "es": "El entrenamiento toma demasiado tiempo",
                  "de": "Training dauert zu lange",
                  "nl": "Training duurt te lang"
        },
        {
                  "en": "The model is too simple for the task",
                  "es": "El modelo es demasiado simple para la tarea",
                  "de": "Das Modell ist zu einfach für die Aufgabe",
                  "nl": "Het model is te eenvoudig voor de taak"
        },
        {
                  "en": "The network has too many neurons",
                  "es": "La red tiene demasiadas neuronas",
                  "de": "Das Netzwerk hat zu viele Neuronen",
                  "nl": "Het netwerk heeft te veel neuronen"
        },
        {
                  "en": "Model learns training data too well, performs poorly on new unseen data",
                  "es": "Modelo aprende datos de entrenamiento demasiado bien, rinde mal con datos nuevos no vistos",
                  "de": "Modell lernt Trainingsdaten zu gut, leistet schlecht auf neuen ungesehenen Daten",
                  "nl": "Model leert trainingsdata te goed, presteert slecht op nieuwe ongeziene data"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Overfitting occurs when a neural network learns the training data too well, including noise and outliers, rather than learning general patterns. The model achieves high accuracy on training data but fails to generalize to new data. Solutions include regularization, dropout, and more training data.",
                  "es": "El sobreajuste ocurre cuando una red neuronal aprende los datos de entrenamiento demasiado bien, incluyendo ruido y valores atípicos, en lugar de aprender patrones generales. El modelo logra alta precisión en datos de entrenamiento pero falla en generalizar a datos nuevos. Las soluciones incluyen regularización, dropout y más datos de entrenamiento.",
                  "de": "Überanpassung tritt auf wenn ein neuronales Netzwerk die Trainingsdaten zu gut lernt, einschließlich Rauschen und Ausreißern, anstatt allgemeine Muster zu lernen. Das Modell erreicht hohe Genauigkeit auf Trainingsdaten scheitert aber bei Generalisierung auf neue Daten. Lösungen beinhalten Regularisierung, Dropout und mehr Trainingsdaten.",
                  "nl": "Overfitting treedt op wanneer een neuraal netwerk de trainingsdata te goed leert, inclusief ruis en uitschieters, in plaats van algemene patronen te leren. Het model bereikt hoge nauwkeurigheid op trainingsdata maar faalt te generaliseren naar nieuwe data. Oplossingen omvatten regularisatie, dropout en meer trainingsdata."
        }
      },
      {
        question: {
                  "en": "What is underfitting in neural network training?",
                  "es": "¿Qué es el subajuste en entrenamiento de redes neuronales?",
                  "de": "Was ist Unteranpassung im Training neuronaler Netzwerke?",
                  "nl": "Wat is underfitting in neurale netwerk training?"
        },
        options: [
        {
                  "en": "The activation functions are wrong",
                  "es": "Las funciones de activación son incorrectas",
                  "de": "Die Aktivierungsfunktionen sind falsch",
                  "nl": "De activeringsfuncties zijn verkeerd"
        },
        {
                  "en": "There is not enough training data",
                  "es": "No hay suficientes datos de entrenamiento",
                  "de": "Es gibt nicht genug Trainingsdaten",
                  "nl": "Er is niet genoeg trainingsdata"
        },
        {
                  "en": "The network trains too quickly",
                  "es": "La red entrena demasiado rápido",
                  "de": "Das Netzwerk trainiert zu schnell",
                  "nl": "Het netwerk traint te snel"
        },
        {
                  "en": "Model is too simple to capture underlying patterns in both training and test data",
                  "es": "Modelo es demasiado simple para capturar patrones subyacentes en datos de entrenamiento y prueba",
                  "de": "Modell ist zu einfach um zugrundeliegende Muster in Trainings- und Testdaten zu erfassen",
                  "nl": "Model is te eenvoudig om onderliggende patronen in zowel trainings- als testdata vast te leggen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Underfitting happens when a model is too simple to capture the complexity of the data, resulting in poor performance on both training and test sets. The network fails to learn important patterns. Solutions include using more complex architectures, adding more layers or neurons, or training longer.",
                  "es": "El subajuste ocurre cuando un modelo es demasiado simple para capturar la complejidad de los datos, resultando en bajo rendimiento tanto en conjuntos de entrenamiento como de prueba. La red falla en aprender patrones importantes. Las soluciones incluyen usar arquitecturas más complejas, agregar más capas o neuronas, o entrenar más tiempo.",
                  "de": "Unteranpassung tritt auf wenn ein Modell zu einfach ist um die Komplexität der Daten zu erfassen, resultiert in schlechter Leistung sowohl auf Trainings- als auch Testsets. Das Netzwerk scheitert wichtige Muster zu lernen. Lösungen beinhalten komplexere Architekturen zu verwenden, mehr Schichten oder Neuronen hinzuzufügen oder länger zu trainieren.",
                  "nl": "Underfitting gebeurt wanneer een model te eenvoudig is om de complexiteit van de data vast te leggen, resulterend in slechte prestaties op zowel trainings- als testsets. Het netwerk faalt belangrijke patronen te leren. Oplossingen omvatten complexere architecturen gebruiken, meer lagen of neuronen toevoegen, of langer trainen."
        }
      },
      {
        question: {
                  "en": "What is dropout in neural networks?",
                  "es": "¿Qué es el dropout en redes neuronales?",
                  "de": "Was ist Dropout in neuronalen Netzwerken?",
                  "nl": "Wat is dropout in neurale netwerken?"
        },
        options: [
        {
                  "en": "Regularization technique randomly deactivating neurons during training to prevent overfitting",
                  "es": "Técnica de regularización que desactiva neuronas aleatoriamente durante entrenamiento para prevenir sobreajuste",
                  "de": "Regularisierungstechnik die Neuronen während des Trainings zufällig deaktiviert um Überanpassung zu verhindern",
                  "nl": "Regularisatietechniek die neuronen willekeurig deactiveert tijdens training om overfitting te voorkomen"
        },
        {
                  "en": "Students leaving a neural network course",
                  "es": "Estudiantes abandonando un curso de redes neuronales",
                  "de": "Studenten die einen Kurs für neuronale Netzwerke verlassen",
                  "nl": "Studenten die een neurale netwerkcursus verlaten"
        },
        {
                  "en": "Removing neurons that don't contribute to learning",
                  "es": "Eliminar neuronas que no contribuyen al aprendizaje",
                  "de": "Neuronen entfernen die nicht zum Lernen beitragen",
                  "nl": "Neuronen verwijderen die niet bijdragen aan leren"
        },
        {
                  "en": "Decreasing the learning rate during training",
                  "es": "Disminuir la tasa de aprendizaje durante entrenamiento",
                  "de": "Lernrate während des Trainings verringern",
                  "nl": "Het leerpercentage verlagen tijdens training"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Dropout randomly sets a fraction of neurons to zero during each training iteration, forcing the network to learn redundant representations and preventing co-adaptation of neurons. This powerful regularization technique reduces overfitting and improves generalization without requiring architectural changes.",
                  "es": "Dropout establece aleatoriamente una fracción de neuronas a cero durante cada iteración de entrenamiento, forzando a la red a aprender representaciones redundantes y previniendo co-adaptación de neuronas. Esta poderosa técnica de regularización reduce sobreajuste y mejora generalización sin requerir cambios arquitectónicos.",
                  "de": "Dropout setzt zufällig einen Bruchteil von Neuronen auf Null während jeder Trainingsiteration, zwingt das Netzwerk redundante Repräsentationen zu lernen und verhindert Ko-Adaptation von Neuronen. Diese mächtige Regularisierungstechnik reduziert Überanpassung und verbessert Generalisierung ohne architektonische Änderungen zu erfordern.",
                  "nl": "Dropout zet willekeurig een fractie van neuronen op nul tijdens elke trainingiteratie, dwingt het netwerk redundante representaties te leren en voorkomt co-adaptatie van neuronen. Deze krachtige regularisatietechniek vermindert overfitting en verbetert generalisatie zonder architectonische veranderingen te vereisen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of an epoch in neural network training?",
                  "es": "¿Cuál es el propósito de una época en entrenamiento de redes neuronales?",
                  "de": "Was ist der Zweck einer Epoche im Training neuronaler Netzwerke?",
                  "nl": "Wat is het doel van een epoch in neurale netwerk training?"
        },
        options: [
        {
                  "en": "A measurement of network accuracy",
                  "es": "Una medida de precisión de la red",
                  "de": "Eine Messung der Netzwerkgenauigkeit",
                  "nl": "Een meting van netwerknauwkeurigheid"
        },
        {
                  "en": "A time period in which the network rests",
                  "es": "Un período de tiempo en el que la red descansa",
                  "de": "Ein Zeitraum in dem das Netzwerk ruht",
                  "nl": "Een tijdsperiode waarin het netwerk rust"
        },
        {
                  "en": "One complete pass through entire training dataset during learning process",
                  "es": "Un pase completo por todo el conjunto de datos de entrenamiento durante proceso de aprendizaje",
                  "de": "Ein vollständiger Durchlauf durch gesamten Trainingsdatensatz während Lernprozess",
                  "nl": "Eén volledige doorgang door volledige trainingsdataset tijdens leerproces"
        },
        {
                  "en": "The final stage of training",
                  "es": "La etapa final del entrenamiento",
                  "de": "Die Endphase des Trainings",
                  "nl": "De eindstage van training"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "An epoch represents one complete iteration through the entire training dataset. During one epoch, the network sees every training example once and updates its weights accordingly. Training typically involves multiple epochs, allowing the network to refine its learning over successive passes through the data.",
                  "es": "Una época representa una iteración completa a través de todo el conjunto de datos de entrenamiento. Durante una época, la red ve cada ejemplo de entrenamiento una vez y actualiza sus pesos en consecuencia. El entrenamiento típicamente involucra múltiples épocas, permitiendo que la red refine su aprendizaje en pases sucesivos por los datos.",
                  "de": "Eine Epoche repräsentiert eine vollständige Iteration durch den gesamten Trainingsdatensatz. Während einer Epoche sieht das Netzwerk jedes Trainingsbeispiel einmal und aktualisiert seine Gewichte entsprechend. Training beinhaltet typischerweise mehrere Epochen, ermöglicht dem Netzwerk sein Lernen über sukzessive Durchläufe durch die Daten zu verfeinern.",
                  "nl": "Een epoch vertegenwoordigt één volledige iteratie door de volledige trainingsdataset. Tijdens één epoch ziet het netwerk elk trainingsvoorbeeld eenmaal en werkt zijn gewichten dienovereenkomstig bij. Training omvat typisch meerdere epochs, waardoor het netwerk zijn leren kan verfijnen over opeenvolgende doorgangen door de data."
        }
      },
      {
        question: {
                  "en": "What is a loss function in neural networks?",
                  "es": "¿Qué es una función de pérdida en redes neuronales?",
                  "de": "Was ist eine Verlustfunktion in neuronalen Netzwerken?",
                  "nl": "Wat is een loss functie in neurale netwerken?"
        },
        options: [
        {
                  "en": "Mathematical function measuring difference between predicted and actual outputs",
                  "es": "Función matemática que mide diferencia entre salidas predichas y reales",
                  "de": "Mathematische Funktion die Differenz zwischen vorhergesagten und tatsächlichen Ausgaben misst",
                  "nl": "Wiskundige functie die verschil meet tussen voorspelde en werkelijke uitvoer"
        },
        {
                  "en": "A function for removing bad training examples",
                  "es": "Una función para eliminar ejemplos de entrenamiento malos",
                  "de": "Eine Funktion zum Entfernen schlechter Trainingsbeispiele",
                  "nl": "Een functie voor het verwijderen van slechte trainingsvoorbeelden"
        },
        {
                  "en": "The rate at which neurons die during training",
                  "es": "La tasa a la que las neuronas mueren durante entrenamiento",
                  "de": "Die Rate mit der Neuronen während des Trainings sterben",
                  "nl": "De snelheid waarmee neuronen sterven tijdens training"
        },
        {
                  "en": "Function that causes the network to lose data",
                  "es": "Función que hace que la red pierda datos",
                  "de": "Funktion die das Netzwerk Daten verlieren lässt",
                  "nl": "Functie die het netwerk data doet verliezen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A loss function quantifies how far the network's predictions are from the true values, providing a single number that training algorithms aim to minimize. Common examples include mean squared error for regression and cross-entropy for classification. The choice of loss function depends on the specific task.",
                  "es": "Una función de pérdida cuantifica qué tan lejos están las predicciones de la red de los valores verdaderos, proporcionando un número único que los algoritmos de entrenamiento buscan minimizar. Ejemplos comunes incluyen error cuadrático medio para regresión y entropía cruzada para clasificación. La elección de la función de pérdida depende de la tarea específica.",
                  "de": "Eine Verlustfunktion quantifiziert wie weit die Vorhersagen des Netzwerks von den wahren Werten entfernt sind, liefert eine einzelne Zahl die Trainingsalgorithmen zu minimieren versuchen. Häufige Beispiele sind mittlerer quadratischer Fehler für Regression und Kreuzentropie für Klassifikation. Die Wahl der Verlustfunktion hängt von der spezifischen Aufgabe ab.",
                  "nl": "Een loss functie kwantificeert hoe ver de voorspellingen van het netwerk van de werkelijke waarden zijn, levert een enkel getal dat trainingsalgoritmes proberen te minimaliseren. Veelvoorkomende voorbeelden zijn gemiddelde kwadratische fout voor regressie en cross-entropy voor classificatie. De keuze van loss functie hangt af van de specifieke taak."
        }
      },
      {
        question: {
                  "en": "What does the term 'deep learning' refer to?",
                  "es": "¿A qué se refiere el término 'aprendizaje profundo'?",
                  "de": "Worauf bezieht sich der Begriff 'Deep Learning'?",
                  "nl": "Waar verwijst de term 'deep learning' naar?"
        },
        options: [
        {
                  "en": "Advanced philosophical understanding of AI",
                  "es": "Comprensión filosófica avanzada de IA",
                  "de": "Fortgeschrittenes philosophisches Verständnis von KI",
                  "nl": "Geavanceerd filosofisch begrip van AI"
        },
        {
                  "en": "Networks that are physically deeper in computer hardware",
                  "es": "Redes que son físicamente más profundas en hardware de computadora",
                  "de": "Netzwerke die physisch tiefer in Computerhardware sind",
                  "nl": "Netwerken die fysiek dieper in computerhardware zijn"
        },
        {
                  "en": "Learning that goes very deep into a single topic",
                  "es": "Aprendizaje que profundiza mucho en un solo tema",
                  "de": "Lernen das sehr tief in ein einzelnes Thema geht",
                  "nl": "Leren dat zeer diep in een enkel onderwerp gaat"
        },
        {
                  "en": "Machine learning using neural networks with multiple hidden layers",
                  "es": "Aprendizaje automático usando redes neuronales con múltiples capas ocultas",
                  "de": "Maschinelles Lernen mit neuronalen Netzwerken mit mehreren versteckten Schichten",
                  "nl": "Machine learning gebruikmakend van neurale netwerken met meerdere verborgen lagen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Deep learning refers to neural networks with many hidden layers (typically more than 2-3) that can learn hierarchical representations of data. The 'depth' comes from the multiple processing layers, enabling these networks to learn complex patterns and abstractions that shallow networks cannot capture.",
                  "es": "El aprendizaje profundo se refiere a redes neuronales con muchas capas ocultas (típicamente más de 2-3) que pueden aprender representaciones jerárquicas de datos. La 'profundidad' proviene de las múltiples capas de procesamiento, permitiendo que estas redes aprendan patrones complejos y abstracciones que las redes superficiales no pueden capturar.",
                  "de": "Deep Learning bezieht sich auf neuronale Netzwerke mit vielen versteckten Schichten (typischerweise mehr als 2-3) die hierarchische Repräsentationen von Daten lernen können. Die 'Tiefe' kommt von den mehreren Verarbeitungsschichten, ermöglicht diesen Netzwerken komplexe Muster und Abstraktionen zu lernen die flache Netzwerke nicht erfassen können.",
                  "nl": "Deep learning verwijst naar neurale netwerken met veel verborgen lagen (typisch meer dan 2-3) die hiërarchische representaties van data kunnen leren. De 'diepte' komt van de meerdere verwerkingslagen, waardoor deze netwerken complexe patronen en abstracties kunnen leren die oppervlakkige netwerken niet kunnen vastleggen."
        }
      },
      {
        question: {
                  "en": "What is forward propagation in a neural network?",
                  "es": "¿Qué es la propagación hacia adelante en una red neuronal?",
                  "de": "Was ist Forward Propagation in einem neuronalen Netzwerk?",
                  "nl": "Wat is forward propagation in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "Propagating errors forward through the network",
                  "es": "Propagar errores hacia adelante a través de la red",
                  "de": "Fehler vorwärts durch das Netzwerk propagieren",
                  "nl": "Fouten voorwaarts door het netwerk propageren"
        },
        {
                  "en": "Process of passing input data through network layers to produce an output",
                  "es": "Proceso de pasar datos de entrada a través de capas de red para producir una salida",
                  "de": "Prozess der Weitergabe von Eingabedaten durch Netzwerkschichten um eine Ausgabe zu produzieren",
                  "nl": "Proces van het doorgeven van invoerdata door netwerklagen om een uitvoer te produceren"
        },
        {
                  "en": "Moving the network forward in time",
                  "es": "Mover la red hacia adelante en el tiempo",
                  "de": "Das Netzwerk vorwärts in der Zeit bewegen",
                  "nl": "Het netwerk vooruit bewegen in de tijd"
        },
        {
                  "en": "Adding new layers to the front of the network",
                  "es": "Agregar nuevas capas al frente de la red",
                  "de": "Neue Schichten an die Vorderseite des Netzwerks hinzufügen",
                  "nl": "Nieuwe lagen toevoegen aan de voorkant van het netwerk"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Forward propagation is the process where input data flows through the network from input layer through hidden layers to output layer. Each neuron receives inputs, applies weights and bias, passes through an activation function, and sends output to the next layer until producing final predictions.",
                  "es": "La propagación hacia adelante es el proceso donde los datos de entrada fluyen a través de la red desde la capa de entrada a través de capas ocultas hasta la capa de salida. Cada neurona recibe entradas, aplica pesos y sesgo, pasa por una función de activación y envía salida a la siguiente capa hasta producir predicciones finales.",
                  "de": "Forward Propagation ist der Prozess bei dem Eingabedaten durch das Netzwerk von der Eingabeschicht durch versteckte Schichten zur Ausgabeschicht fließen. Jedes Neuron empfängt Eingaben, wendet Gewichte und Bias an, durchläuft eine Aktivierungsfunktion und sendet Ausgabe an die nächste Schicht bis finale Vorhersagen produziert werden.",
                  "nl": "Forward propagation is het proces waarbij invoerdata door het netwerk stroomt van invoerlaag via verborgen lagen naar uitvoerlaag. Elk neuron ontvangt invoer, past gewichten en bias toe, gaat door een activeringsfunctie en stuurt uitvoer naar de volgende laag totdat uiteindelijke voorspellingen worden geproduceerd."
        }
      },
      {
        question: {
                  "en": "What is the role of weights in a neural network?",
                  "es": "¿Cuál es el papel de los pesos en una red neuronal?",
                  "de": "Was ist die Rolle von Gewichten in einem neuronalen Netzwerk?",
                  "nl": "Wat is de rol van gewichten in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "The physical size of the network",
                  "es": "El tamaño físico de la red",
                  "de": "Die physische Größe des Netzwerks",
                  "nl": "De fysieke grootte van het netwerk"
        },
        {
                  "en": "Parameters determining strength of connections between neurons, learned during training",
                  "es": "Parámetros que determinan fuerza de conexiones entre neuronas, aprendidos durante entrenamiento",
                  "de": "Parameter die Stärke von Verbindungen zwischen Neuronen bestimmen, während Training gelernt",
                  "nl": "Parameters die sterkte van verbindingen tussen neuronen bepalen, geleerd tijdens training"
        },
        {
                  "en": "How heavy the computational load is",
                  "es": "Qué tan pesada es la carga computacional",
                  "de": "Wie schwer die Rechenlast ist",
                  "nl": "Hoe zwaar de computationele belasting is"
        },
        {
                  "en": "The importance ranking of different neurons",
                  "es": "El ranking de importancia de diferentes neuronas",
                  "de": "Das Wichtigkeitsranking verschiedener Neuronen",
                  "nl": "De belangrijkheidsrangschikking van verschillende neuronen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Weights are the learnable parameters that control the strength of connections between neurons. During training, weights are adjusted through backpropagation to minimize the loss function. They transform input signals and determine which features the network considers important for making predictions.",
                  "es": "Los pesos son los parámetros aprendibles que controlan la fuerza de las conexiones entre neuronas. Durante el entrenamiento, los pesos se ajustan a través de retropropagación para minimizar la función de pérdida. Transforman señales de entrada y determinan qué características la red considera importantes para hacer predicciones.",
                  "de": "Gewichte sind die lernbaren Parameter die die Stärke der Verbindungen zwischen Neuronen steuern. Während des Trainings werden Gewichte durch Backpropagation angepasst um die Verlustfunktion zu minimieren. Sie transformieren Eingangssignale und bestimmen welche Features das Netzwerk für Vorhersagen als wichtig erachtet.",
                  "nl": "Gewichten zijn de leerbare parameters die de sterkte van verbindingen tussen neuronen controleren. Tijdens training worden gewichten aangepast via backpropagation om de loss functie te minimaliseren. Ze transformeren invoersignalen en bepalen welke kenmerken het netwerk belangrijk acht voor het maken van voorspellingen."
        }
      },
      {
        question: {
                  "en": "What is a bias term in neural networks?",
                  "es": "¿Qué es un término de sesgo en redes neuronales?",
                  "de": "Was ist ein Bias-Term in neuronalen Netzwerken?",
                  "nl": "Wat is een bias term in neurale netwerken?"
        },
        options: [
        {
                  "en": "Prejudice or discrimination in the network",
                  "es": "Prejuicio o discriminación en la red",
                  "de": "Vorurteil oder Diskriminierung im Netzwerk",
                  "nl": "Vooroordeel of discriminatie in het netwerk"
        },
        {
                  "en": "Error in the training data",
                  "es": "Error en los datos de entrenamiento",
                  "de": "Fehler in den Trainingsdaten",
                  "nl": "Fout in de trainingsdata"
        },
        {
                  "en": "The tendency of a network to prefer certain outputs",
                  "es": "La tendencia de una red a preferir ciertas salidas",
                  "de": "Die Tendenz eines Netzwerks bestimmte Ausgaben zu bevorzugen",
                  "nl": "De neiging van een netwerk om bepaalde uitvoer te prefereren"
        },
        {
                  "en": "Additional parameter allowing neurons to shift activation function, improving model flexibility",
                  "es": "Parámetro adicional que permite a neuronas desplazar función de activación, mejorando flexibilidad del modelo",
                  "de": "Zusätzlicher Parameter der Neuronen erlaubt Aktivierungsfunktion zu verschieben, verbessert Modellflexibilität",
                  "nl": "Extra parameter die neuronen toestaat activeringsfunctie te verschuiven, verbetert modelflexibiliteit"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The bias is a learnable parameter added to the weighted sum of inputs before applying the activation function. It allows the neuron to activate even when all inputs are zero, providing flexibility to shift the activation threshold and enabling the network to fit data patterns more effectively.",
                  "es": "El sesgo es un parámetro aprendible añadido a la suma ponderada de entradas antes de aplicar la función de activación. Permite que la neurona se active incluso cuando todas las entradas son cero, proporcionando flexibilidad para desplazar el umbral de activación y permitiendo que la red se ajuste a patrones de datos más efectivamente.",
                  "de": "Der Bias ist ein lernbarer Parameter der zur gewichteten Summe der Eingaben hinzugefügt wird bevor die Aktivierungsfunktion angewendet wird. Er erlaubt dem Neuron zu aktivieren auch wenn alle Eingaben null sind, bietet Flexibilität die Aktivierungsschwelle zu verschieben und ermöglicht dem Netzwerk sich effektiver an Datenmuster anzupassen.",
                  "nl": "De bias is een leerbare parameter toegevoegd aan de gewogen som van invoer voordat de activeringsfunctie wordt toegepast. Het stelt het neuron in staat te activeren zelfs wanneer alle invoer nul is, biedt flexibiliteit om de activeringsdrempel te verschuiven en stelt het netwerk in staat zich effectiever aan datapatronen aan te passen."
        }
      },
      {
        question: {
                  "en": "What is the gradient in gradient descent?",
                  "es": "¿Qué es el gradiente en descenso de gradiente?",
                  "de": "Was ist der Gradient im Gradientenabstieg?",
                  "nl": "Wat is de gradiënt in gradient descent?"
        },
        options: [
        {
                  "en": "Vector of partial derivatives indicating direction of steepest increase in loss function",
                  "es": "Vector de derivadas parciales que indica dirección de mayor aumento en función de pérdida",
                  "de": "Vektor partieller Ableitungen der die Richtung des steilsten Anstiegs in Verlustfunktion anzeigt",
                  "nl": "Vector van partiële afgeleiden die richting van steilste toename in loss functie aangeeft"
        },
        {
                  "en": "A gradual change in network architecture",
                  "es": "Un cambio gradual en arquitectura de red",
                  "de": "Eine allmähliche Änderung der Netzwerkarchitektur",
                  "nl": "Een geleidelijke verandering in netwerkarchitectuur"
        },
        {
                  "en": "The slope of the learning curve",
                  "es": "La pendiente de la curva de aprendizaje",
                  "de": "Die Steigung der Lernkurve",
                  "nl": "De helling van de leercurve"
        },
        {
                  "en": "The rate of descent during training",
                  "es": "La tasa de descenso durante entrenamiento",
                  "de": "Die Abstiegsrate während des Trainings",
                  "nl": "De daalsnelheid tijdens training"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The gradient is a vector containing partial derivatives of the loss function with respect to each parameter (weight and bias). It points in the direction of steepest ascent, so moving in the negative gradient direction (gradient descent) reduces the loss, enabling the network to learn optimal parameters.",
                  "es": "El gradiente es un vector que contiene derivadas parciales de la función de pérdida con respecto a cada parámetro (peso y sesgo). Apunta en la dirección de ascenso más empinado, por lo que moverse en la dirección del gradiente negativo (descenso de gradiente) reduce la pérdida, permitiendo que la red aprenda parámetros óptimos.",
                  "de": "Der Gradient ist ein Vektor der partielle Ableitungen der Verlustfunktion bezüglich jeden Parameters (Gewicht und Bias) enthält. Er zeigt in die Richtung des steilsten Aufstiegs, daher reduziert Bewegung in negativer Gradientenrichtung (Gradientenabstieg) den Verlust, ermöglicht dem Netzwerk optimale Parameter zu lernen.",
                  "nl": "De gradiënt is een vector met partiële afgeleiden van de loss functie met betrekking tot elke parameter (gewicht en bias). Het wijst in de richting van steilste stijging, dus bewegen in de negatieve gradiëntrichting (gradient descent) vermindert het verlies, stelt het netwerk in staat optimale parameters te leren."
        }
      },
      {
        question: {
                  "en": "What is a training set in machine learning?",
                  "es": "¿Qué es un conjunto de entrenamiento en aprendizaje automático?",
                  "de": "Was ist ein Trainingssatz im maschinellen Lernen?",
                  "nl": "Wat is een trainingsset in machine learning?"
        },
        options: [
        {
                  "en": "Validation data for tuning hyperparameters",
                  "es": "Datos de validación para ajustar hiperparámetros",
                  "de": "Validierungsdaten zum Abstimmen von Hyperparametern",
                  "nl": "Validatiedata voor het afstemmen van hyperparameters"
        },
        {
                  "en": "Portion of data used to train model by adjusting weights based on examples",
                  "es": "Porción de datos usada para entrenar modelo ajustando pesos basándose en ejemplos",
                  "de": "Teil der Daten verwendet um Modell zu trainieren durch Anpassen von Gewichten basierend auf Beispielen",
                  "nl": "Deel van data gebruikt om model te trainen door gewichten aan te passen op basis van voorbeelden"
        },
        {
                  "en": "Exercises for training the programmer",
                  "es": "Ejercicios para entrenar al programador",
                  "de": "Übungen zum Trainieren des Programmierers",
                  "nl": "Oefeningen voor het trainen van de programmeur"
        },
        {
                  "en": "The final test data for evaluation",
                  "es": "Los datos de prueba finales para evaluación",
                  "de": "Die finalen Testdaten zur Evaluation",
                  "nl": "De finale testdata voor evaluatie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The training set is the subset of data used to train the neural network by adjusting its parameters. The model learns patterns from these labeled examples through repeated exposure during training. It's typically the largest portion of available data, separate from validation and test sets.",
                  "es": "El conjunto de entrenamiento es el subconjunto de datos usado para entrenar la red neuronal ajustando sus parámetros. El modelo aprende patrones de estos ejemplos etiquetados a través de exposición repetida durante entrenamiento. Típicamente es la porción más grande de datos disponibles, separada de conjuntos de validación y prueba.",
                  "de": "Der Trainingssatz ist die Teilmenge von Daten verwendet um das neuronale Netzwerk zu trainieren durch Anpassen seiner Parameter. Das Modell lernt Muster aus diesen beschrifteten Beispielen durch wiederholte Exposition während des Trainings. Es ist typischerweise der größte Teil verfügbarer Daten, getrennt von Validierungs- und Testsätzen.",
                  "nl": "De trainingsset is de subset van data gebruikt om het neurale netwerk te trainen door zijn parameters aan te passen. Het model leert patronen uit deze gelabelde voorbeelden door herhaalde blootstelling tijdens training. Het is typisch het grootste deel van beschikbare data, gescheiden van validatie- en testsets."
        }
      },
      {
        question: {
                  "en": "What is a validation set used for?",
                  "es": "¿Para qué se usa un conjunto de validación?",
                  "de": "Wofür wird ein Validierungssatz verwendet?",
                  "nl": "Waarvoor wordt een validatieset gebruikt?"
        },
        options: [
        {
                  "en": "Training the model on additional examples",
                  "es": "Entrenar el modelo en ejemplos adicionales",
                  "de": "Das Modell auf zusätzlichen Beispielen trainieren",
                  "nl": "Het model trainen op extra voorbeelden"
        },
        {
                  "en": "Validating that the training data is correct",
                  "es": "Validar que los datos de entrenamiento son correctos",
                  "de": "Validieren dass die Trainingsdaten korrekt sind",
                  "nl": "Valideren dat de trainingsdata correct is"
        },
        {
                  "en": "Tuning hyperparameters and monitoring model performance during training without biasing final evaluation",
                  "es": "Ajustar hiperparámetros y monitorear rendimiento del modelo durante entrenamiento sin sesgar evaluación final",
                  "de": "Hyperparameter abstimmen und Modellleistung während Training überwachen ohne finale Evaluation zu verzerren",
                  "nl": "Hyperparameters afstemmen en modelprestaties monitoren tijdens training zonder finale evaluatie te beïnvloeden"
        },
        {
                  "en": "Final testing of model accuracy",
                  "es": "Prueba final de precisión del modelo",
                  "de": "Finaler Test der Modellgenauigkeit",
                  "nl": "Finale test van modelnauwkeurigheid"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The validation set is used to evaluate model performance during training, help select hyperparameters, and detect overfitting without touching the test set. It provides unbiased feedback on how well the model generalizes, guiding decisions about architecture and training duration while preserving test set integrity.",
                  "es": "El conjunto de validación se usa para evaluar rendimiento del modelo durante entrenamiento, ayudar a seleccionar hiperparámetros y detectar sobreajuste sin tocar el conjunto de prueba. Proporciona retroalimentación imparcial sobre qué tan bien generaliza el modelo, guiando decisiones sobre arquitectura y duración de entrenamiento mientras preserva integridad del conjunto de prueba.",
                  "de": "Der Validierungssatz wird verwendet um Modellleistung während Training zu evaluieren, bei Auswahl von Hyperparametern zu helfen und Überanpassung zu erkennen ohne den Testsatz zu berühren. Er liefert unvoreingenommenes Feedback wie gut das Modell generalisiert, leitet Entscheidungen über Architektur und Trainingsdauer während Testsatz-Integrität bewahrt wird.",
                  "nl": "De validatieset wordt gebruikt om modelprestaties tijdens training te evalueren, te helpen bij het selecteren van hyperparameters en overfitting te detecteren zonder de testset aan te raken. Het biedt onbevooroordeelde feedback over hoe goed het model generaliseert, begeleidt beslissingen over architectuur en trainingsduur terwijl testset integriteit behouden blijft."
        }
      },
      {
        question: {
                  "en": "What is a test set in machine learning?",
                  "es": "¿Qué es un conjunto de prueba en aprendizaje automático?",
                  "de": "Was ist ein Testsatz im maschinellen Lernen?",
                  "nl": "Wat is een testset in machine learning?"
        },
        options: [
        {
                  "en": "Separate data reserved for final unbiased evaluation of trained model performance",
                  "es": "Datos separados reservados para evaluación final imparcial del rendimiento del modelo entrenado",
                  "de": "Separate Daten reserviert für finale unvoreingenommene Evaluation trainierter Modellleistung",
                  "nl": "Aparte data gereserveerd voor finale onbevooroordeelde evaluatie van getrainde modelprestaties"
        },
        {
                  "en": "Data used to test if training is working",
                  "es": "Datos usados para probar si el entrenamiento funciona",
                  "de": "Daten verwendet um zu testen ob Training funktioniert",
                  "nl": "Data gebruikt om te testen of training werkt"
        },
        {
                  "en": "Additional training examples for improvement",
                  "es": "Ejemplos de entrenamiento adicionales para mejora",
                  "de": "Zusätzliche Trainingsbeispiele zur Verbesserung",
                  "nl": "Extra trainingsvoorbeelden voor verbetering"
        },
        {
                  "en": "Sample questions for the neural network exam",
                  "es": "Preguntas de muestra para el examen de red neuronal",
                  "de": "Beispielfragen für die Prüfung neuronaler Netzwerke",
                  "nl": "Voorbeeldvragen voor het neurale netwerk examen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The test set is a completely separate portion of data never seen during training or validation, used only once for final model evaluation. It provides an unbiased estimate of how well the model will perform on new, unseen data in real-world applications, measuring true generalization ability.",
                  "es": "El conjunto de prueba es una porción completamente separada de datos nunca vista durante entrenamiento o validación, usada solo una vez para evaluación final del modelo. Proporciona una estimación imparcial de qué tan bien rendirá el modelo en datos nuevos no vistos en aplicaciones del mundo real, midiendo verdadera capacidad de generalización.",
                  "de": "Der Testsatz ist ein komplett separater Teil von Daten nie während Training oder Validierung gesehen, nur einmal für finale Modellevaluation verwendet. Er liefert eine unvoreingenommene Schätzung wie gut das Modell auf neuen, ungesehenen Daten in realen Anwendungen abschneiden wird, misst wahre Generalisierungsfähigkeit.",
                  "nl": "De testset is een compleet apart deel van data nooit gezien tijdens training of validatie, slechts eenmaal gebruikt voor finale modelevaluatie. Het biedt een onbevooroordeelde schatting van hoe goed het model zal presteren op nieuwe, ongeziene data in real-world toepassingen, meet ware generalisatiecapaciteit."
        }
      },
      {
        question: {
                  "en": "What are hyperparameters in neural networks?",
                  "es": "¿Qué son los hiperparámetros en redes neuronales?",
                  "de": "Was sind Hyperparameter in neuronalen Netzwerken?",
                  "nl": "Wat zijn hyperparameters in neurale netwerken?"
        },
        options: [
        {
                  "en": "The maximum values parameters can reach",
                  "es": "Los valores máximos que los parámetros pueden alcanzar",
                  "de": "Die maximalen Werte die Parameter erreichen können",
                  "nl": "De maximale waarden die parameters kunnen bereiken"
        },
        {
                  "en": "Parameters that are more important than regular parameters",
                  "es": "Parámetros que son más importantes que parámetros regulares",
                  "de": "Parameter die wichtiger sind als reguläre Parameter",
                  "nl": "Parameters die belangrijker zijn dan reguliere parameters"
        },
        {
                  "en": "Configuration settings set before training like learning rate and network architecture, not learned from data",
                  "es": "Configuraciones establecidas antes de entrenamiento como tasa de aprendizaje y arquitectura de red, no aprendidas de datos",
                  "de": "Konfigurationseinstellungen vor Training festgelegt wie Lernrate und Netzwerkarchitektur, nicht aus Daten gelernt",
                  "nl": "Configuratie-instellingen ingesteld vóór training zoals leersnelheid en netwerkarchitectuur, niet geleerd uit data"
        },
        {
                  "en": "Parameters learned after regular training completes",
                  "es": "Parámetros aprendidos después de completar entrenamiento regular",
                  "de": "Parameter gelernt nachdem reguläres Training abgeschlossen ist",
                  "nl": "Parameters geleerd nadat reguliere training is voltooid"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Hyperparameters are configuration choices made before training begins, including learning rate, batch size, number of layers, neurons per layer, and activation functions. Unlike weights and biases which are learned during training, hyperparameters must be set manually or through automated tuning methods like grid search.",
                  "es": "Los hiperparámetros son elecciones de configuración hechas antes de comenzar el entrenamiento, incluyendo tasa de aprendizaje, tamaño de lote, número de capas, neuronas por capa y funciones de activación. A diferencia de pesos y sesgos que se aprenden durante entrenamiento, los hiperparámetros deben establecerse manualmente o mediante métodos de ajuste automatizado como búsqueda en cuadrícula.",
                  "de": "Hyperparameter sind Konfigurationsentscheidungen vor Trainingsbeginn getroffen, einschließlich Lernrate, Stapelgröße, Anzahl Schichten, Neuronen pro Schicht und Aktivierungsfunktionen. Anders als Gewichte und Bias die während Training gelernt werden, müssen Hyperparameter manuell oder durch automatisierte Abstimmungsmethoden wie Grid Search eingestellt werden.",
                  "nl": "Hyperparameters zijn configuratiekeuzes gemaakt voordat training begint, inclusief leersnelheid, batchgrootte, aantal lagen, neuronen per laag en activeringsfuncties. Anders dan gewichten en biases die worden geleerd tijdens training, moeten hyperparameters handmatig worden ingesteld of via geautomatiseerde afstemmethoden zoals grid search."
        }
      },
      {
        question: {
                  "en": "What is a mini-batch in neural network training?",
                  "es": "¿Qué es un mini-lote en entrenamiento de redes neuronales?",
                  "de": "Was ist ein Mini-Batch im Training neuronaler Netzwerke?",
                  "nl": "Wat is een mini-batch in neurale netwerk training?"
        },
        options: [
        {
                  "en": "A smaller neural network for faster training",
                  "es": "Una red neuronal más pequeña para entrenamiento más rápido",
                  "de": "Ein kleineres neuronales Netzwerk für schnelleres Training",
                  "nl": "Een kleiner neuraal netwerk voor snellere training"
        },
        {
                  "en": "The minimum amount of training data needed",
                  "es": "La cantidad mínima de datos de entrenamiento necesarios",
                  "de": "Die minimale Menge an Trainingsdaten benötigt",
                  "nl": "De minimale hoeveelheid trainingsdata benodigd"
        },
        {
                  "en": "Small subset of training examples processed together before updating weights, balancing speed and stability",
                  "es": "Pequeño subconjunto de ejemplos de entrenamiento procesados juntos antes de actualizar pesos, equilibrando velocidad y estabilidad",
                  "de": "Kleine Teilmenge von Trainingsbeispielen zusammen verarbeitet vor Gewichtsaktualisierung, balanciert Geschwindigkeit und Stabilität",
                  "nl": "Kleine subset van trainingsvoorbeelden samen verwerkt voordat gewichten worden bijgewerkt, balanceert snelheid en stabiliteit"
        },
        {
                  "en": "Training done in very short time periods",
                  "es": "Entrenamiento hecho en períodos de tiempo muy cortos",
                  "de": "Training durchgeführt in sehr kurzen Zeiträumen",
                  "nl": "Training gedaan in zeer korte tijdsperioden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A mini-batch is a subset of training data (typically 32-256 examples) processed together before updating model parameters. This approach combines benefits of stochastic (single example) and batch (all examples) gradient descent, providing computational efficiency through parallelization while maintaining reasonably stable gradient estimates.",
                  "es": "Un mini-lote es un subconjunto de datos de entrenamiento (típicamente 32-256 ejemplos) procesados juntos antes de actualizar parámetros del modelo. Este enfoque combina beneficios de descenso de gradiente estocástico (ejemplo único) y por lotes (todos ejemplos), proporcionando eficiencia computacional mediante paralelización mientras mantiene estimaciones de gradiente razonablemente estables.",
                  "de": "Ein Mini-Batch ist eine Teilmenge von Trainingsdaten (typischerweise 32-256 Beispiele) zusammen verarbeitet vor Aktualisierung der Modellparameter. Dieser Ansatz kombiniert Vorteile von stochastischem (einzelnes Beispiel) und Batch (alle Beispiele) Gradientenabstieg, bietet rechnerische Effizienz durch Parallelisierung während vernünftig stabile Gradientenschätzungen beibehalten werden.",
                  "nl": "Een mini-batch is een subset van trainingsdata (typisch 32-256 voorbeelden) samen verwerkt voordat modelparameters worden bijgewerkt. Deze aanpak combineert voordelen van stochastische (enkel voorbeeld) en batch (alle voorbeelden) gradient descent, biedt computationele efficiëntie via parallellisatie terwijl redelijk stabiele gradiëntschattingen behouden blijven."
        }
      },
      {
        question: {
                  "en": "What is regularization in neural networks?",
                  "es": "¿Qué es la regularización en redes neuronales?",
                  "de": "Was ist Regularisierung in neuronalen Netzwerken?",
                  "nl": "Wat is regularisatie in neurale netwerken?"
        },
        options: [
        {
                  "en": "Making the network regular in shape and size",
                  "es": "Hacer la red regular en forma y tamaño",
                  "de": "Das Netzwerk in Form und Größe regelmäßig machen",
                  "nl": "Het netwerk regelmatig maken in vorm en grootte"
        },
        {
                  "en": "Scheduling training at regular intervals",
                  "es": "Programar entrenamiento a intervalos regulares",
                  "de": "Training in regelmäßigen Abständen planen",
                  "nl": "Training plannen op regelmatige intervallen"
        },
        {
                  "en": "Techniques to prevent overfitting by constraining model complexity and encouraging simpler solutions",
                  "es": "Técnicas para prevenir sobreajuste limitando complejidad del modelo y fomentando soluciones más simples",
                  "de": "Techniken um Überanpassung zu verhindern durch Einschränkung der Modellkomplexität und Förderung einfacherer Lösungen",
                  "nl": "Technieken om overfitting te voorkomen door modelcomplexiteit te beperken en eenvoudigere oplossingen aan te moedigen"
        },
        {
                  "en": "Normalizing all input data",
                  "es": "Normalizar todos los datos de entrada",
                  "de": "Alle Eingabedaten normalisieren",
                  "nl": "Alle invoerdata normaliseren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Regularization includes techniques like L1/L2 weight penalties, dropout, early stopping, and data augmentation that prevent the model from fitting training data too closely. These methods add constraints or noise during training, encouraging the network to learn more general patterns that transfer better to unseen data.",
                  "es": "La regularización incluye técnicas como penalizaciones de peso L1/L2, dropout, parada temprana y aumento de datos que previenen que el modelo se ajuste demasiado cerca a datos de entrenamiento. Estos métodos añaden restricciones o ruido durante entrenamiento, fomentando que la red aprenda patrones más generales que se transfieran mejor a datos no vistos.",
                  "de": "Regularisierung umfasst Techniken wie L1/L2-Gewichtsstrafen, Dropout, frühzeitiges Stoppen und Datenaugmentierung die verhindern dass das Modell sich zu eng an Trainingsdaten anpasst. Diese Methoden fügen Einschränkungen oder Rauschen während Training hinzu, fördern dass das Netzwerk allgemeinere Muster lernt die besser auf ungesehene Daten übertragen.",
                  "nl": "Regularisatie omvat technieken zoals L1/L2-gewichtsboetes, dropout, vroeg stoppen en data-augmentatie die voorkomen dat het model te nauw aansluit bij trainingsdata. Deze methoden voegen beperkingen of ruis toe tijdens training, moedigen het netwerk aan om meer algemene patronen te leren die beter overdragen naar ongeziene data."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();