// Neural Networks Quiz - Level 1: Introduction to Neural Networks
(function() {
  const level1 = {
    name: {
      en: "Introduction to Neural Networks",
      es: "Introducción a Redes Neuronales",
      de: "Einführung in Neuronale Netzwerke",
      nl: "Inleiding tot Neurale Netwerken"
    },
    questions: [
      {
        question: {
          en: "What is a neural network?",
          es: "¿Qué es una red neuronal?",
          de: "Was ist ein neuronales Netzwerk?",
          nl: "Wat is een neuraal netwerk?"
        },
        options: [
          { en: "Computational model inspired by brain neural networks", es: "Modelo computacional inspirado en redes neuronales del cerebro", de: "Rechenmodell inspiriert von neuronalen Netzwerken im Gehirn", nl: "Computationeel model geïnspireerd door neurale netwerken in hersenen" },
          { en: "A network of connected computers", es: "Una red de computadoras conectadas", de: "Ein Netzwerk verbundener Computer", nl: "Een netwerk van verbonden computers" },
          { en: "A social network for scientists", es: "Una red social para científicos", de: "Ein soziales Netzwerk für Wissenschaftler", nl: "Een sociaal netwerk voor wetenschappers" },
          { en: "A database system for storing data", es: "Un sistema de base de datos para almacenar datos", de: "Ein Datenbanksystem zur Datenspeicherung", nl: "Een databasesysteem voor het opslaan van data" }
        ],
        correct: 0,
        explanation: {
          en: "A neural network is a computational model that mimics the way biological neural networks in animal brains process information. It consists of interconnected nodes (neurons) that process and transmit information through weighted connections.",
          es: "Una red neuronal es un modelo computacional que imita la forma en que las redes neuronales biológicas en los cerebros animales procesan información. Consiste en nodos interconectados (neuronas) que procesan y transmiten información a través de conexiones ponderadas.",
          de: "Ein neuronales Netzwerk ist ein rechnerisches Modell das nachahmt wie biologische neuronale Netzwerke in Tiergehirnen Informationen verarbeiten. Es besteht aus miteinander verbundenen Knoten (Neuronen) die Informationen durch gewichtete Verbindungen verarbeiten und übertragen.",
          nl: "Een neuraal netwerk is een computationeel model dat nabootst hoe biologische neurale netwerken in dierenbreinen informatie verwerken. Het bestaat uit onderling verbonden knooppunten (neuronen) die informatie verwerken en doorgeven via gewogen verbindingen."
        }
      },
      {
        question: {
          en: "What is a neuron (node) in a neural network?",
          es: "¿Qué es una neurona (nodo) en una red neuronal?",
          de: "Was ist ein Neuron (Knoten) in einem neuronalen Netzwerk?",
          nl: "Wat is een neuron (knooppunt) in een neuraal netwerk?"
        },
        options: [
          { en: "Processing unit that receives inputs, applies weights, produces output", es: "Unidad de procesamiento que recibe entradas, aplica pesos, produce salida", de: "Verarbeitungseinheit die Eingaben empfängt, Gewichte anwendet, Ausgabe erzeugt", nl: "Verwerkingseenheid die invoer ontvangt, gewichten toepast, uitvoer produceert" },
          { en: "A biological cell in the brain", es: "Una célula biológica en el cerebro", de: "Eine biologische Zelle im Gehirn", nl: "Een biologische cel in de hersenen" },
          { en: "A computer processor", es: "Un procesador de computadora", de: "Ein Computerprozessor", nl: "Een computerprocessor" },
          { en: "A storage device for data", es: "Un dispositivo de almacenamiento de datos", de: "Ein Datenspeichergerät", nl: "Een opslagapparaat voor data" }
        ],
        correct: 0,
        explanation: {
          en: "A neuron in a neural network is a mathematical function that takes multiple inputs, multiplies each by a weight, sums them up, and applies an activation function to produce an output. This mimics how biological neurons process signals.",
          es: "Una neurona en una red neuronal es una función matemática que toma múltiples entradas, multiplica cada una por un peso, las suma y aplica una función de activación para producir una salida. Esto imita cómo las neuronas biológicas procesan señales.",
          de: "Ein Neuron in einem neuronalen Netzwerk ist eine mathematische Funktion die mehrere Eingaben nimmt, jede mit einem Gewicht multipliziert, sie aufsummiert und eine Aktivierungsfunktion anwendet um eine Ausgabe zu erzeugen. Dies ahmt nach wie biologische Neuronen Signale verarbeiten.",
          nl: "Een neuron in een neuraal netwerk is een wiskundige functie die meerdere invoeren neemt, elk vermenigvuldigt met een gewicht, ze optelt en een activeringsfunctie toepast om een uitvoer te produceren. Dit bootst na hoe biologische neuronen signalen verwerken."
        }
      },
      {
        question: {
          en: "What are weights in a neural network?",
          es: "¿Qué son los pesos en una red neuronal?",
          de: "Was sind Gewichte in einem neuronalen Netzwerk?",
          nl: "Wat zijn gewichten in een neuraal netwerk?"
        },
        options: [
          { en: "Parameters determining connection strength between neurons", es: "Parámetros que determinan fuerza de conexiones entre neuronas", de: "Parameter die Verbindungsstärke zwischen Neuronen bestimmen", nl: "Parameters die verbindingssterkte tussen neuronen bepalen" },
          { en: "The physical weight of the computer hardware", es: "El peso físico del hardware de la computadora", de: "Das physische Gewicht der Computerhardware", nl: "Het fysieke gewicht van de computerhardware" },
          { en: "The importance ranking of data pts", es: "La clasificación de importancia de los puntos de datos", de: "Die Wichtigkeitsrangfolge von Datenpunkten", nl: "De belangrijkheidsrangschikking van datapunten" },
          { en: "The speed of data processing", es: "La velocidad del procesamiento de datos", de: "Die Geschwindigkeit der Datenverarbeitung", nl: "De snelheid van dataverwerking" }
        ],
        correct: 0,
        explanation: {
          en: "Weights are numerical values that determine how much influence each input has on a neuron's output. During training, these weights are adjusted to minimize error and improve the network's performance on the given task.",
          es: "Los pesos son valores numéricos que determinan cuánta influencia tiene cada entrada en la salida de una neurona. Durante el entrenamiento, estos pesos se ajustan para minimizar el error y mejorar el rendimiento de la red en la tarea dada.",
          de: "Gewichte sind numerische Werte die bestimmen wie viel Einfluss jede Eingabe auf die Ausgabe eines Neurons hat. Während des Trainings werden diese Gewichte angepasst um Fehler zu minimieren und die Leistung des Netzwerks bei der gegebenen Aufgabe zu verbessern.",
          nl: "Gewichten zijn numerieke waarden die bepalen hoeveel invloed elke invoer heeft op de uitvoer van een neuron. Tijdens training worden deze gewichten aangepast om fouten te minimaliseren en de prestaties van het netwerk bij de gegeven taak te verbeteren."
        }
      },
      {
        question: {
          en: "What is an activation function?",
          es: "¿Qué es una función de activación?",
          de: "Was ist eine Aktivierungsfunktion?",
          nl: "Wat is een activeringsfunctie?"
        },
        options: [
          { en: "Function determining if neuron activates based on input", es: "Función que determina si neurona se activa según entrada", de: "Funktion die bestimmt ob Neuron basierend auf Eingabe aktiviert wird", nl: "Functie die bepaalt of neuron activeert op basis van invoer" },
          { en: "A function that activates the computer", es: "Una función que activa la computadora", de: "Eine Funktion die den Computer aktiviert", nl: "Een functie die de computer activeert" },
          { en: "A function that starts the neural network", es: "Una función que inicia la red neuronal", de: "Eine Funktion die das neuronale Netzwerk startet", nl: "Een functie die het neurale netwerk start" },
          { en: "A function that counts active neurons", es: "Una función que cuenta neuronas activas", de: "Eine Funktion die aktive Neuronen zählt", nl: "Een functie die actieve neuronen telt" }
        ],
        correct: 0,
        explanation: {
          en: "An activation function introduces non-linearity into the neural network by transforming the weighted sum of inputs. Common examples include sigmoid, ReLU, and tanh functions. Without activation functions, neural networks would only be able to learn linear relationships.",
          es: "Una función de activación introduce no linealidad en la red neuronal transformando la suma ponderada de entradas. Ejemplos comunes incluyen funciones sigmoid, ReLU y tanh. Sin funciones de activación, las redes neuronales solo podrían aprender relaciones lineales.",
          de: "Eine Aktivierungsfunktion führt Nicht-Linearität in das neuronale Netzwerk ein durch Transformation der gewichteten Summe von Eingaben. Häufige Beispiele sind Sigmoid-, ReLU- und tanh-Funktionen. Ohne Aktivierungsfunktionen könnten neuronale Netzwerke nur lineare Beziehungen lernen.",
          nl: "Een activeringsfunctie introduceert niet-lineariteit in het neurale netwerk door de gewogen som van invoeren te transformeren. Veelvoorkomende voorbeelden zijn sigmoid, ReLU en tanh functies. Zonder activeringsfuncties zouden neurale netwerken alleen lineaire relaties kunnen leren."
        }
      },
      {
        question: {
          en: "What is the basic structure of a neural network?",
          es: "¿Cuál es la estructura básica de una red neuronal?",
          de: "Was ist die Grundstruktur eines neuronalen Netzwerks?",
          nl: "Wat is de basisstructuur van een neuraal netwerk?"
        },
        options: [
          { en: "Input layer, hidden layer(s), and output layer", es: "Capa de entrada, capa(s) oculta(s) y capa de salida", de: "Eingabeschicht, versteckte Schicht(en) und Ausgabeschicht", nl: "Invoerlaag, verborgen laag/lagen en uitvoerlaag" },
          { en: "Only input and output layers", es: "Solo capas de entrada y salida", de: "Nur Eingabe- und Ausgabeschichten", nl: "Alleen invoer- en uitvoerlagen" },
          { en: "A single layer of neurons", es: "Una sola capa de neuronas", de: "Eine einzige Schicht von Neuronen", nl: "Een enkele laag neuronen" },
          { en: "Random connections between neurons", es: "Conexiones aleatorias entre neuronas", de: "Zufällige Verbindungen zwischen Neuronen", nl: "Willekeurige verbindingen tussen neuronen" }
        ],
        correct: 0,
        explanation: {
          en: "A basic neural network consists of an input layer (receives data), one or more hidden layers (process the data), and an output layer (produces results). Information flows from input to output through these connected layers of neurons.",
          es: "Una red neuronal básica consiste en una capa de entrada (recibe datos), una o más capas ocultas (procesan los datos) y una capa de salida (produce resultados). La información fluye de entrada a salida a través de estas capas conectadas de neuronas.",
          de: "Ein grundlegendes neuronales Netzwerk besteht aus einer Eingabeschicht (empfängt Daten), einer oder mehreren versteckten Schichten (verarbeiten die Daten) und einer Ausgabeschicht (erzeugt Ergebnisse). Information fließt von Eingabe zu Ausgabe durch diese verbundenen Schichten von Neuronen.",
          nl: "Een basis neuraal netwerk bestaat uit een invoerlaag (ontvangt data), een of meer verborgen lagen (verwerken de data) en een uitvoerlaag (produceert resultaten). Informatie stroomt van invoer naar uitvoer door deze verbonden lagen van neuronen."
        }
      },
      {
        question: {
          en: "What is the purpose of training a neural network?",
          es: "¿Cuál es el propósito de entrenar una red neuronal?",
          de: "Was ist der Zweck des Trainings eines neuronalen Netzwerks?",
          nl: "Wat is het doel van het trainen van een neuraal netwerk?"
        },
        options: [
          { en: "Adjust weights & biases for accurate predictions", es: "Ajustar pesos y sesgos para predicciones precisas", de: "Gewichte & Verzerrungen für genaue Vorhersagen anpassen", nl: "Gewichten & bias aanpassen voor nauwkeurige voorspellingen" },
          { en: "To make the network run faster", es: "Para hacer que la red funcione más rápido", de: "Um das Netzwerk schneller laufen zu lassen", nl: "Om het netwerk sneller te laten werken" },
          { en: "To reduce the network size", es: "Para reducir el tamaño de la red", de: "Um die Netzwerkgröße zu reduzieren", nl: "Om de netwerkgrootte te verkleinen" },
          { en: "To increase the number of neurons", es: "Para aumentar el número de neuronas", de: "Um die Anzahl der Neuronen zu erhöhen", nl: "Om het aantal neuronen te verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Training a neural network involves presenting it with examples and adjusting its weights and biases through backpropagation to minimize prediction errors and improve accuracy.",
          es: "Entrenar una red neuronal implica presentarle ejemplos y ajustar sus pesos y sesgos a través de retropropagación para minimizar errores de predicción y mejorar la precisión.",
          de: "Das Training eines neuronalen Netzwerks beinhaltet ihm Beispiele zu präsentieren und seine Gewichte und Verzerrungen durch Backpropagation anzupassen um Vorhersagefehler zu minimieren und Genauigkeit zu verbessern.",
          nl: "Het trainen van een neuraal netwerk houdt in dat het voorbeelden krijgt en zijn gewichten en bias worden aangepast via backpropagation om voorspellingsfouten te minimaliseren en nauwkeurigheid te verbeteren."
        }
      },
      {
        question: {
          en: "What is a bias in neural networks?",
          es: "¿Qué es un sesgo en redes neuronales?",
          de: "Was ist eine Verzerrung in neuronalen Netzwerken?",
          nl: "Wat is een bias in neurale netwerken?"
        },
        options: [
          { en: "Extra parameter shifting activation function to improve learning", es: "Parámetro adicional que desplaza función de activación para mejorar aprendizaje", de: "Zusätzlicher Parameter der Aktivierungsfunktion verschiebt um Lernen zu verbessern", nl: "Extra parameter die activeringsfunctie verschuift om leren te verbeteren" },
          { en: "A prejudice in the training data", es: "Un prejuicio en los datos de entrenamiento", de: "Ein Vorurteil in den Trainingsdaten", nl: "Een vooroordeel in de trainingsdata" },
          { en: "An error in the network architecture", es: "Un error en la arquitectura de la red", de: "Ein Fehler in der Netzwerkarchitektur", nl: "Een fout in de netwerkarchitectuur" },
          { en: "The tendency to prefer certain inputs", es: "La tendencia a preferir ciertas entradas", de: "Die Tendenz bestimmte Eingaben zu bevorzugen", nl: "De neiging om bepaalde invoeren te verkiezen" }
        ],
        correct: 0,
        explanation: {
          en: "A bias is a learnable parameter added to each neuron that allows the activation function to shift, providing more flexibility in fitting the data and enabling the network to learn patterns that don't pass through the origin.",
          es: "Un sesgo es un parámetro aprendible agregado a cada neurona que permite que la función de activación se desplace, proporcionando más flexibilidad para ajustar los datos y permitiendo que la red aprenda patrones que no pasan por el origen.",
          de: "Eine Verzerrung ist ein lernbarer Parameter der zu jedem Neuron hinzugefügt wird und es der Aktivierungsfunktion ermöglicht sich zu verschieben, bietet mehr Flexibilität beim Anpassen der Daten und ermöglicht dem Netzwerk Muster zu lernen die nicht durch den Ursprung gehen.",
          nl: "Een bias is een leerbare parameter die aan elk neuron wordt toegevoegd en de activeringsfunctie laat verschuiven, biedt meer flexibiliteit bij het fitten van data en stelt het netwerk in staat patronen te leren die niet door de oorsprong gaan."
        }
      },
      {
        question: {
          en: "What is forward propagation in neural networks?",
          es: "¿Qué es la propagación hacia adelante en redes neuronales?",
          de: "Was ist Vorwärtspropagation in neuronalen Netzwerken?",
          nl: "Wat is forward propagation in neurale netwerken?"
        },
        options: [
          { en: "Passing input data through network layers to produce output", es: "Pasar datos de entrada por capas de red para producir salida", de: "Eingabedaten durch Netzwerkschichten leiten um Ausgabe zu erzeugen", nl: "Invoerdata doorgeven door netwerklagen om uitvoer te produceren" },
          { en: "Moving neurons forward in the network", es: "Mover neuronas hacia adelante en la red", de: "Neuronen im Netzwerk nach vorne bewegen", nl: "Neuronen voorwaarts bewegen in het netwerk" },
          { en: "Updating weights in a forward direction", es: "Actualizar pesos en dirección hacia adelante", de: "Gewichte in Vorwärtsrichtung aktualisieren", nl: "Gewichten in voorwaartse richting bijwerken" },
          { en: "Progressing through training epochs", es: "Progresar a través de épocas de entrenamiento", de: "Durch Trainingsepochen fortschreiten", nl: "Vooruitgaan door trainingsepochen" }
        ],
        correct: 0,
        explanation: {
          en: "Forward propagation is the process where input data flows through the network from input layer to output layer. Each layer applies weights, biases, and activation functions to transform the data before passing it to the next layer.",
          es: "La propagación hacia adelante es el proceso donde los datos de entrada fluyen a través de la red desde la capa de entrada hasta la capa de salida. Cada capa aplica pesos, sesgos y funciones de activación para transformar los datos antes de pasarlos a la siguiente capa.",
          de: "Vorwärtspropagation ist der Prozess bei dem Eingabedaten durch das Netzwerk von der Eingabeschicht zur Ausgabeschicht fließen. Jede Schicht wendet Gewichte, Verzerrungen und Aktivierungsfunktionen an um die Daten zu transformieren bevor sie zur nächsten Schicht weitergegeben werden.",
          nl: "Forward propagation is het proces waarbij invoerdata door het netwerk stroomt van invoerlaag naar uitvoerlaag. Elke laag past gewichten, bias en activeringsfuncties toe om de data te transformeren voordat het naar de volgende laag wordt doorgegeven."
        }
      },
      {
        question: {
          en: "What is the difference between supervised and unsupervised learning in neural networks?",
          es: "¿Cuál es la diferencia entre aprendizaje supervisado y no supervisado en redes neuronales?",
          de: "Was ist der Unterschied zwischen überwachtem und unüberwachtem Lernen in neuronalen Netzwerken?",
          nl: "Wat is het verschil tussen supervised en unsupervised learning in neurale netwerken?"
        },
        options: [
          { en: "Supervised uses labeled data, unsupervised finds patterns without labels", es: "Supervisado usa datos etiquetados, no supervisado encuentra patrones sin etiquetas", de: "Überwacht verwendet beschriftete Daten, unüberwacht findet Muster ohne Beschriftungen", nl: "Supervised gebruikt gelabelde data, unsupervised vindt patronen zonder labels" },
          { en: "Supervised is faster than unsupervised learning", es: "Supervisado es más rápido que aprendizaje no supervisado", de: "Überwacht ist schneller als unüberwachtes Lernen", nl: "Supervised is sneller dan unsupervised learning" },
          { en: "Unsupervised requires more computational power", es: "No supervisado requiere más poder computacional", de: "Unüberwacht benötigt mehr Rechenleistung", nl: "Unsupervised vereist meer rekenkracht" },
          { en: "Supervised works only with images", es: "Supervisado funciona solo con imágenes", de: "Überwacht funktioniert nur mit Bildern", nl: "Supervised werkt alleen met afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised learning uses input-output pairs with known correct answers to train the network, like classifying images with labels. Unsupervised learning finds hidden patterns in data without being told what to look for, like clustering similar data points.",
          es: "El aprendizaje supervisado usa pares entrada-salida con respuestas correctas conocidas para entrenar la red, como clasificar imágenes con etiquetas. El aprendizaje no supervisado encuentra patrones ocultos en datos sin que se le diga qué buscar, como agrupar puntos de datos similares.",
          de: "Überwachtes Lernen verwendet Eingabe-Ausgabe-Paare mit bekannten korrekten Antworten um das Netzwerk zu trainieren, wie Bildklassifikation mit Labels. Unüberwachtes Lernen findet versteckte Muster in Daten ohne gesagt zu bekommen wonach zu suchen ist, wie das Gruppieren ähnlicher Datenpunkte.",
          nl: "Supervised learning gebruikt input-output paren met bekende juiste antwoorden om het netwerk te trainen, zoals het classificeren van afbeeldingen met labels. Unsupervised learning vindt verborgen patronen in data zonder te worden verteld waarnaar te zoeken, zoals het clusteren van vergelijkbare datapunten."
        }
      },
      {
        question: {
          en: "What is the role of the input layer in a neural network?",
          es: "¿Cuál es el papel de la capa de entrada en una red neuronal?",
          de: "Was ist die Rolle der Eingabeschicht in einem neuronalen Netzwerk?",
          nl: "Wat is de rol van de invoerlaag in een neuraal netwerk?"
        },
        options: [
          { en: "Receive & pass raw data into network for processing", es: "Recibir y pasar datos en bruto para procesamiento", de: "Rohdaten empfangen & zur Verarbeitung weiterleiten", nl: "Ruwe data ontvangen & doorgeven voor verwerking" },
          { en: "To make final predictions", es: "Para hacer predicciones finales", de: "Um endgültige Vorhersagen zu machen", nl: "Om definitieve voorspellingen te maken" },
          { en: "To store training examples", es: "Para almacenar ejemplos de entrenamiento", de: "Um Trainingsbeispiele zu speichern", nl: "Om trainingsvoorbeelden op te slaan" },
          { en: "To apply activation functions", es: "Para aplicar funciones de activación", de: "Um Aktivierungsfunktionen anzuwenden", nl: "Om activeringsfuncties toe te passen" }
        ],
        correct: 0,
        explanation: {
          en: "The input layer serves as the entry point for data into the neural network. Each neuron in the input layer corresponds to one feature of the input data, and the layer passes this information to the first hidden layer for processing.",
          es: "La capa de entrada sirve como punto de entrada para datos en la red neuronal. Cada neurona en la capa de entrada corresponde a una característica de los datos de entrada, y la capa pasa esta información a la primera capa oculta para procesamiento.",
          de: "Die Eingabeschicht dient als Eintrittspunkt für Daten in das neuronale Netzwerk. Jedes Neuron in der Eingabeschicht entspricht einem Merkmal der Eingabedaten, und die Schicht gibt diese Information zur ersten versteckten Schicht zur Verarbeitung weiter.",
          nl: "De invoerlaag dient als ingangspunt voor data in het neurale netwerk. Elk neuron in de invoerlaag komt overeen met één kenmerk van de invoerdata, en de laag geeft deze informatie door aan de eerste verborgen laag voor verwerking."
        }
      },
      {
        question: {
          en: "What is the output layer responsible for?",
          es: "¿De qué es responsable la capa de salida?",
          de: "Wofür ist die Ausgabeschicht verantwortlich?",
          nl: "Waar is de uitvoerlaag verantwoordelijk voor?"
        },
        options: [
          { en: "Producing final predictions or classifications", es: "Producir predicciones finales o clasificaciones", de: "Endgültige Vorhersagen oder Klassifikationen erzeugen", nl: "Definitieve voorspellingen of classificaties produceren" },
          { en: "Receiving input data from external sources", es: "Recibir datos de entrada de fuentes externas", de: "Eingabedaten von externen Quellen empfangen", nl: "Het ontvangen van invoerdata van externe bronnen" },
          { en: "Storing intermediate calculations", es: "Almacenar cálculos intermedios", de: "Zwischenberechnungen speichern", nl: "Het opslaan van tussenberekeningen" },
          { en: "Applying the first transformation to data", es: "Aplicar la primera transformación a los datos", de: "Die erste Transformation auf Daten anwenden", nl: "Het toepassen van de eerste transformatie op data" }
        ],
        correct: 0,
        explanation: {
          en: "The output layer generates the final results of the neural network. For classification tasks, it outputs probabilities for each class. For regression, it outputs numerical predictions. The number of neurons equals the number of output classes or target variables.",
          es: "La capa de salida genera los resultados finales de la red neuronal. Para tareas de clasificación, produce probabilidades para cada clase. Para regresión, produce predicciones numéricas. El número de neuronas iguala el número de clases de salida o variables objetivo.",
          de: "Die Ausgabeschicht erzeugt die endgültigen Ergebnisse des neuronalen Netzwerks. Für Klassifikationsaufgaben gibt sie Wahrscheinlichkeiten für jede Klasse aus. Für Regression gibt sie numerische Vorhersagen aus. Die Anzahl der Neuronen entspricht der Anzahl der Ausgabeklassen oder Zielvariablen.",
          nl: "De uitvoerlaag genereert de definitieve resultaten van het neurale netwerk. Voor classificatietaken geeft het kansen uit voor elke klasse. Voor regressie geeft het numerieke voorspellingen uit. Het aantal neuronen is gelijk aan het aantal uitvoerklassen of doelvariabelen."
        }
      },
      {
        question: {
          en: "What are hidden layers in a neural network?",
          es: "¿Qué son las capas ocultas en una red neuronal?",
          de: "Was sind versteckte Schichten in einem neuronalen Netzwerk?",
          nl: "Wat zijn verborgen lagen in een neuraal netwerk?"
        },
        options: [
          { en: "Layers processing & transforming data between input & output", es: "Capas que procesan y transforman datos entre entrada y salida", de: "Schichten die Daten zwischen Eingabe & Ausgabe verarbeiten & transformieren", nl: "Lagen die data verwerken & transformeren tussen invoer & uitvoer" },
          { en: "Layers that are invisible to users", es: "Capas que son invisibles para los usuarios", de: "Schichten die für Benutzer unsichtbar sind", nl: "Lagen die onzichtbaar zijn voor gebruikers" },
          { en: "Backup layers for error recovery", es: "Capas de respaldo para recuperación de errores", de: "Backup-Schichten für Fehlerwiederherstellung", nl: "Back-up lagen voor foutherstel" },
          { en: "Layers that store network weights", es: "Capas que almacenan pesos de la red", de: "Schichten die Netzwerkgewichte speichern", nl: "Lagen die netwerkgewichten opslaan" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden layers are the processing layers between input and output that extract features and learn complex patterns. Each hidden layer transforms the data representations, with deeper networks capable of learning more sophisticated abstractions.",
          es: "Las capas ocultas son las capas de procesamiento entre entrada y salida que extraen características y aprenden patrones complejos. Cada capa oculta transforma las representaciones de datos, con redes más profundas capaces de aprender abstracciones más sofisticadas.",
          de: "Versteckte Schichten sind die Verarbeitungsschichten zwischen Eingabe und Ausgabe die Merkmale extrahieren und komplexe Muster lernen. Jede versteckte Schicht transformiert die Datenrepräsentationen, wobei tiefere Netzwerke zu ausgeklügelteren Abstraktionen fähig sind.",
          nl: "Verborgen lagen zijn de verwerkingslagen tussen invoer en uitvoer die kenmerken extraheren en complexe patronen leren. Elke verborgen laag transformeert de datarepresentaties, waarbij diepere netwerken in staat zijn meer geavanceerde abstracties te leren."
        }
      },
      {
        question: {
          en: "What is meant by the 'depth' of a neural network?",
          es: "¿Qué se entiende por 'profundidad' de una red neuronal?",
          de: "Was ist mit der 'Tiefe' eines neuronalen Netzwerks gemeint?",
          nl: "Wat wordt bedoeld met de 'diepte' van een neuraal netwerk?"
        },
        options: [
          { en: "The number of layers in the network, particularly hidden layers", es: "El número de capas en la red, particularmente capas ocultas", de: "Die Anzahl der Schichten im Netzwerk, insbesondere versteckte Schichten", nl: "Het aantal lagen in het netwerk, met name verborgen lagen" },
          { en: "How deeply the network understands data", es: "Qué tan profundamente la red comprende los datos", de: "Wie tief das Netzwerk Daten versteht", nl: "Hoe diep het netwerk data begrijpt" },
          { en: "The physical depth of the computer hardware", es: "La profundidad física del hardware de la computadora", de: "Die physische Tiefe der Computerhardware", nl: "De fysieke diepte van de computerhardware" },
          { en: "The complexity of mathematical operations", es: "La complejidad de las operaciones matemáticas", de: "Die Komplexität mathematischer Operationen", nl: "De complexiteit van wiskundige bewerkingen" }
        ],
        correct: 0,
        explanation: {
          en: "Network depth refers to the total number of layers, especially hidden layers. Deep networks (with many layers) can learn hierarchical representations and complex patterns, which is why this field is called 'deep learning'.",
          es: "La profundidad de la red se refiere al número total de capas, especialmente capas ocultas. Las redes profundas (con muchas capas) pueden aprender representaciones jerárquicas y patrones complejos, por eso este campo se llama 'aprendizaje profundo'.",
          de: "Netzwerktiefe bezieht sich auf die Gesamtzahl der Schichten, besonders versteckte Schichten. Tiefe Netzwerke (mit vielen Schichten) können hierarchische Repräsentationen und komplexe Muster lernen, weshalb dieses Feld 'Deep Learning' genannt wird.",
          nl: "Netwerkdiepte verwijst naar het totale aantal lagen, vooral verborgen lagen. Diepe netwerken (met veel lagen) kunnen hiërarchische representaties en complexe patronen leren, daarom wordt dit veld 'deep learning' genoemd."
        }
      },
      {
        question: {
          en: "What does it mean when we say a neural network 'learns'?",
          es: "¿Qué significa cuando decimos que una red neuronal 'aprende'?",
          de: "Was bedeutet es wenn wir sagen dass ein neuronales Netzwerk 'lernt'?",
          nl: "Wat betekent het wanneer we zeggen dat een neuraal netwerk 'leert'?"
        },
        options: [
          { en: "Network automatically adjusts weights to minimize training errors", es: "Red ajusta automáticamente pesos para minimizar errores de entrenamiento", de: "Netzwerk passt automatisch Gewichte an um Trainingsfehler zu minimieren", nl: "Netwerk past automatisch gewichten aan om trainingsfouten te minimaliseren" },
          { en: "The network memorizes all training examples", es: "La red memoriza todos los ejemplos de entrenamiento", de: "Das Netzwerk merkt sich alle Trainingsbeispiele", nl: "Het netwerk memoriseert alle trainingsvoorbeelden" },
          { en: "The network grows new neurons during training", es: "La red desarrolla nuevas neuronas durante el entrenamiento", de: "Das Netzwerk wächst neue Neuronen während des Trainings", nl: "Het netwerk groeit nieuwe neuronen tijdens training" },
          { en: "The network reads textbooks about the problem", es: "La red lee libros de texto sobre el problema", de: "Das Netzwerk liest Lehrbücher über das Problem", nl: "Het netwerk leest tekstboeken over het probleem" }
        ],
        correct: 0,
        explanation: {
          en: "Neural network learning is the process of automatically adjusting weights and biases through algorithms like gradient descent to minimize the difference between predicted and actual outputs, enabling the network to generalize to new data.",
          es: "El aprendizaje de la red neuronal es el proceso de ajustar automáticamente pesos y sesgos a través de algoritmos como descenso de gradiente para minimizar la diferencia entre salidas predichas y reales, permitiendo que la red generalice a nuevos datos.",
          de: "Neuronales Netzwerk-Lernen ist der Prozess der automatischen Anpassung von Gewichten und Verzerrungen durch Algorithmen wie Gradientenabstieg um die Differenz zwischen vorhergesagten und tatsächlichen Ausgaben zu minimieren, ermöglicht dem Netzwerk auf neue Daten zu generalisieren.",
          nl: "Neuraal netwerk leren is het proces van automatisch aanpassen van gewichten en bias via algoritmes zoals gradient descent om het verschil tussen voorspelde en werkelijke uitvoer te minimaliseren, waardoor het netwerk kan generaliseren naar nieuwe data."
        }
      },
      {
        question: {
          en: "What is the relationship between artificial neurons and biological neurons?",
          es: "¿Cuál es la relación entre neuronas artificiales y neuronas biológicas?",
          de: "Was ist die Beziehung zwischen künstlichen und biologischen Neuronen?",
          nl: "Wat is de relatie tussen kunstmatige neuronen en biologische neuronen?"
        },
        options: [
          { en: "Artificial neurons are simplified models inspired by biological neurons", es: "Neuronas artificiales son modelos simplificados inspirados en neuronas biológicas", de: "Künstliche Neuronen sind vereinfachte Modelle inspiriert von biologischen Neuronen", nl: "Kunstmatige neuronen zijn vereenvoudigde modellen geïnspireerd door biologische neuronen" },
          { en: "They are exactly the same in function and structure", es: "Son exactamente iguales en función y estructura", de: "Sie sind in Funktion und Struktur genau gleich", nl: "Ze zijn precies hetzelfde in functie en structuur" },
          { en: "Artificial neurons are more complex than biological ones", es: "Las neuronas artificiales son más complejas que las biológicas", de: "Künstliche Neuronen sind komplexer als biologische", nl: "Kunstmatige neuronen zijn complexer dan biologische" },
          { en: "There is no relationship between them", es: "No hay relación entre ellas", de: "Es gibt keine Beziehung zwischen ihnen", nl: "Er is geen relatie tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "Artificial neurons are inspired by biological neurons but are much simpler. Both receive inputs, process them, and produce outputs, but artificial neurons use mathematical functions while biological neurons involve complex electrochemical processes.",
          es: "Las neuronas artificiales están inspiradas en neuronas biológicas pero son mucho más simples. Ambas reciben entradas, las procesan y producen salidas, pero las neuronas artificiales usan funciones matemáticas mientras las neuronas biológicas involucran procesos electroquímicos complejos.",
          de: "Künstliche Neuronen sind von biologischen Neuronen inspiriert aber viel einfacher. Beide empfangen Eingaben, verarbeiten sie und erzeugen Ausgaben, aber künstliche Neuronen verwenden mathematische Funktionen während biologische Neuronen komplexe elektrochemische Prozesse beinhalten.",
          nl: "Kunstmatige neuronen zijn geïnspireerd door biologische neuronen maar zijn veel eenvoudiger. Beide ontvangen invoer, verwerken deze en produceren uitvoer, maar kunstmatige neuronen gebruiken wiskundige functies terwijl biologische neuronen complexe elektrochemische processen bevatten."
        }
      },
      {
        question: {
          en: "What is the purpose of using multiple layers in a neural network?",
          es: "¿Cuál es el propósito de usar múltiples capas en una red neuronal?",
          de: "Was ist der Zweck der Verwendung mehrerer Schichten in einem neuronalen Netzwerk?",
          nl: "Wat is het doel van het gebruik van meerdere lagen in een neuraal netwerk?"
        },
        options: [
          { en: "Enable learning complex, hierarchical patterns & relationships", es: "Permitir aprender patrones y relaciones complejas y jerárquicas", de: "Ermöglichen komplexe, hierarchische Muster & Beziehungen zu lernen", nl: "In staat stellen complexe, hiërarchische patronen & relaties te leren" },
          { en: "To make the network run faster", es: "Para hacer que la red funcione más rápido", de: "Um das Netzwerk schneller laufen zu lassen", nl: "Om het netwerk sneller te laten werken" },
          { en: "To use less computer memory", es: "Para usar menos memoria de computadora", de: "Um weniger Computerspeicher zu verwenden", nl: "Om minder computergeheugen te gebruiken" },
          { en: "To make the network easier to understand", es: "Para hacer la red más fácil de entender", de: "Um das Netzwerk einfacher verständlich zu machen", nl: "Om het netwerk makkelijker te begrijpen" }
        ],
        correct: 0,
        explanation: {
          en: "Multiple layers allow neural networks to learn hierarchical representations, where early layers detect simple features and deeper layers combine them into complex patterns. This enables learning sophisticated relationships that single-layer networks cannot capture.",
          es: "Múltiples capas permiten a las redes neuronales aprender representaciones jerárquicas, donde las capas tempranas detectan características simples y las capas más profundas las combinan en patrones complejos. Esto permite aprender relaciones sofisticadas que las redes de una sola capa no pueden capturar.",
          de: "Mehrere Schichten ermöglichen neuronalen Netzwerken hierarchische Repräsentationen zu lernen, wobei frühe Schichten einfache Merkmale erkennen und tiefere Schichten sie zu komplexen Mustern kombinieren. Dies ermöglicht das Lernen ausgeklügelter Beziehungen die einschichtige Netzwerke nicht erfassen können.",
          nl: "Meerdere lagen stellen neurale netwerken in staat hiërarchische representaties te leren, waarbij vroege lagen eenvoudige kenmerken detecteren en diepere lagen ze combineren tot complexe patronen. Dit maakt het leren van geavanceerde relaties mogelijk die enkele-laag netwerken niet kunnen vastleggen."
        }
      },
      {
        question: {
          en: "What is an example of a simple neural network application?",
          es: "¿Cuál es un ejemplo de una aplicación simple de red neuronal?",
          de: "Was ist ein Beispiel für eine einfache neuronale Netzwerkanwendung?",
          nl: "Wat is een voorbeeld van een eenvoudige neurale netwerktoepassing?"
        },
        options: [
          { en: "Recognizing handwritten digits from 0-9", es: "Reconocer dígitos escritos a mano del 0-9", de: "Handgeschriebene Ziffern von 0-9 erkennen", nl: "Het herkennen van handgeschreven cijfers van 0-9" },
          { en: "Controlling nuclear power plants", es: "Controlar plantas de energía nuclear", de: "Kernkraftwerke kontrollieren", nl: "Het besturen van kerncentrales" },
          { en: "Performing brain surgery", es: "Realizar cirugía cerebral", de: "Gehirnchirurgie durchführen", nl: "Het uitvoeren van hersenoperaties" },
          { en: "Building rocket engines", es: "Construir motores de cohetes", de: "Raketentriebwerke bauen", nl: "Het bouwen van raketmotoren" }
        ],
        correct: 0,
        explanation: {
          en: "Handwritten digit recognition is a classic and relatively simple neural network application. The network learns to identify patterns in pixel data to classify images of digits, making it a great introduction to image classification tasks.",
          es: "El reconocimiento de dígitos escritos a mano es una aplicación clásica y relativamente simple de redes neuronales. La red aprende a identificar patrones en datos de píxeles para clasificar imágenes de dígitos, haciéndola una gran introducción a tareas de clasificación de imágenes.",
          de: "Handschrift-Ziffernerkennung ist eine klassische und relativ einfache neuronale Netzwerkanwendung. Das Netzwerk lernt Muster in Pixeldaten zu identifizieren um Bilder von Ziffern zu klassifizieren, macht es zu einer großartigen Einführung in Bildklassifikationsaufgaben.",
          nl: "Handgeschreven cijferherkenning is een klassieke en relatief eenvoudige neurale netwerktoepassing. Het netwerk leert patronen in pixeldata te identificeren om afbeeldingen van cijfers te classificeren, wat het een geweldige introductie maakt voor beeldclassificatietaken."
        }
      },
      {
        question: {
          en: "What is the main advantage of neural networks over traditional programming?",
          es: "¿Cuál es la principal ventaja de las redes neuronales sobre la programación tradicional?",
          de: "Was ist der Hauptvorteil neuronaler Netzwerke gegenüber traditioneller Programmierung?",
          nl: "Wat is het hoofdvoordeel van neurale netwerken ten opzichte van traditioneel programmeren?"
        },
        options: [
          { en: "Automatically discover patterns & features from data without explicit programming", es: "Descubren automáticamente patrones y características sin programación explícita", de: "Entdecken automatisch Muster & Merkmale aus Daten ohne explizite Programmierung", nl: "Ontdekken automatisch patronen & kenmerken uit data zonder expliciete programmering" },
          { en: "They are always faster than traditional programs", es: "Siempre son más rápidas que los programas tradicionales", de: "Sie sind immer schneller als traditionelle Programme", nl: "Ze zijn altijd sneller dan traditionele programma's" },
          { en: "They require less computer memory", es: "Requieren menos memoria de computadora", de: "Sie benötigen weniger Computerspeicher", nl: "Ze vereisen minder computergeheugen" },
          { en: "They are easier to debug", es: "Son más fáciles de depurar", de: "Sie sind einfacher zu debuggen", nl: "Ze zijn makkelijker te debuggen" }
        ],
        correct: 0,
        explanation: {
          en: "Neural networks excel at pattern recognition and feature extraction from data without requiring explicit programming of rules. They can learn complex relationships automatically through training, making them powerful for tasks where traditional rule-based programming is insufficient.",
          es: "Las redes neuronales sobresalen en reconocimiento de patrones y extracción de características de datos sin requerir programación explícita de reglas. Pueden aprender relaciones complejas automáticamente a través del entrenamiento, haciéndolas poderosas para tareas donde la programación tradicional basada en reglas es insuficiente.",
          de: "Neuronale Netzwerke zeichnen sich durch Mustererkennung und Merkmalsextraktion aus Daten aus ohne explizite Programmierung von Regeln zu benötigen. Sie können komplexe Beziehungen automatisch durch Training lernen, macht sie mächtig für Aufgaben wo traditionelle regelbasierte Programmierung unzureichend ist.",
          nl: "Neurale netwerken blinken uit in patroonherkenning en kenmerkextractie uit data zonder expliciete programmering van regels te vereisen. Ze kunnen complexe relaties automatisch leren door training, wat ze krachtig maakt voor taken waar traditionele regel-gebaseerde programmering ontoereikend is."
        }
      },
      {
        question: {
          en: "What does 'training' a neural network involve?",
          es: "¿Qué implica 'entrenar' una red neuronal?",
          de: "Was beinhaltet das 'Training' eines neuronalen Netzwerks?",
          nl: "Wat houdt het 'trainen' van een neuraal netwerk in?"
        },
        options: [
          { en: "Repeatedly show examples & adjust weights to improve performance", es: "Mostrar ejemplos repetidamente y ajustar pesos para mejorar rendimiento", de: "Wiederholt Beispiele zeigen & Gewichte anpassen um Leistung zu verbessern", nl: "Herhaaldelijk voorbeelden tonen & gewichten aanpassen voor betere prestaties" },
          { en: "Teaching the network to follow specific instructions", es: "Enseñar a la red a seguir instrucciones específicas", de: "Dem Netzwerk beibringen spezifische Anweisungen zu befolgen", nl: "Het netwerk leren specifieke instructies te volgen" },
          { en: "Installing software updates on the network", es: "Instalar actualizaciones de software en la red", de: "Software-Updates auf dem Netzwerk installieren", nl: "Software-updates installeren op het netwerk" },
          { en: "Physically connecting neurons together", es: "Conectar físicamente neuronas juntas", de: "Neuronen physisch miteinander verbinden", nl: "Neuronen fysiek met elkaar verbinden" }
        ],
        correct: 0,
        explanation: {
          en: "Training involves presenting the neural network with many examples (training data), calculating how far off its predictions are (loss), and then adjusting the weights using algorithms like backpropagation to gradually improve accuracy over many iterations.",
          es: "El entrenamiento implica presentar a la red neuronal muchos ejemplos (datos de entrenamiento), calcular qué tan lejos están sus predicciones (pérdida), y luego ajustar los pesos usando algoritmos como retropropagación para mejorar gradualmente la precisión a través de muchas iteraciones.",
          de: "Training beinhaltet dem neuronalen Netzwerk viele Beispiele zu präsentieren (Trainingsdaten), zu berechnen wie weit seine Vorhersagen daneben liegen (Verlust), und dann die Gewichte mit Algorithmen wie Backpropagation anzupassen um die Genauigkeit über viele Iterationen schrittweise zu verbessern.",
          nl: "Training houdt in dat het neurale netwerk veel voorbeelden krijgt (trainingsdata), berekenen hoe ver zijn voorspellingen ernaast zitten (verlies), en dan de gewichten aanpassen met algoritmes zoals backpropagation om nauwkeurigheid geleidelijk te verbeteren over veel iteraties."
        }
      },
      {
        question: {
          en: "Why are neural networks particularly good at pattern recognition?",
          es: "¿Por qué las redes neuronales son particularmente buenas en reconocimiento de patrones?",
          de: "Warum sind neuronale Netzwerke besonders gut in Mustererkennung?",
          nl: "Waarom zijn neurale netwerken bijzonder goed in patroonherkenning?"
        },
        options: [
          { en: "Learn hierarchical features & capture complex non-linear relationships", es: "Aprenden características jerárquicas y capturan relaciones no lineales complejas", de: "Lernen hierarchische Merkmale & erfassen komplexe nichtlineare Beziehungen", nl: "Leren hiërarchische kenmerken & leggen complexe niet-lineaire relaties vast" },
          { en: "They have perfect memory for all patterns", es: "Tienen memoria perfecta para todos los patrones", de: "Sie haben perfektes Gedächtnis für alle Muster", nl: "Ze hebben perfect geheugen voor alle patronen" },
          { en: "They process information faster than humans", es: "Procesan información más rápido que los humanos", de: "Sie verarbeiten Informationen schneller als Menschen", nl: "Ze verwerken informatie sneller dan mensen" },
          { en: "They can see patterns that are invisible", es: "Pueden ver patrones que son invisibles", de: "Sie können Muster sehen die unsichtbar sind", nl: "Ze kunnen patronen zien die onzichtbaar zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Neural networks excel at pattern recognition because they can automatically learn hierarchical representations, where simple features are combined into increasingly complex patterns. Their ability to model non-linear relationships allows them to capture subtle patterns that linear methods miss.",
          es: "Las redes neuronales sobresalen en reconocimiento de patrones porque pueden aprender automáticamente representaciones jerárquicas, donde características simples se combinan en patrones cada vez más complejos. Su capacidad para modelar relaciones no lineales les permite capturar patrones sutiles que los métodos lineales pierden.",
          de: "Neuronale Netzwerke zeichnen sich in Mustererkennung aus weil sie automatisch hierarchische Repräsentationen lernen können, wobei einfache Merkmale zu zunehmend komplexen Mustern kombiniert werden. Ihre Fähigkeit nichtlineare Beziehungen zu modellieren ermöglicht ihnen subtile Muster zu erfassen die lineare Methoden verpassen.",
          nl: "Neurale netwerken blinken uit in patroonherkenning omdat ze automatisch hiërarchische representaties kunnen leren, waarbij eenvoudige kenmerken gecombineerd worden tot steeds complexere patronen. Hun vermogen om niet-lineaire relaties te modelleren stelt hen in staat subtiele patronen vast te leggen die lineaire methoden missen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
