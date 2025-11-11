// Deep Learning Quiz - Level 2: Neural Network Fundamentals
(function() {
  const level2 = {
    name: {
      en: "Deep Learning Level 2",
      es: "Aprendizaje Profundo Nivel 2",
      de: "Deep Learning Stufe 2",
      nl: "Deep Learning Level 2"
    },
    questions: [
      {
        question: {
          en: "What is an activation function in a neural network?",
          es: "¿Qué es una función de activación en una red neuronal?",
          de: "Was ist eine Aktivierungsfunktion in einem neuronalen Netzwerk?",
          nl: "Wat is een activatiefunctie in een neuraal netwerk?"
        },
        options: [
          { en: "A function that determines if a neuron should be activated", es: "Una función que determina si una neurona debe activarse", de: "Eine Funktion die bestimmt ob ein Neuron aktiviert werden soll", nl: "Een functie die bepaalt of een neuron geactiveerd moet worden" },
          { en: "A function that activates the computer", es: "Una función que activa la computadora", de: "Eine Funktion die den Computer aktiviert", nl: "Een functie die de computer activeert" },
          { en: "A mathematical equation for data storage", es: "Una ecuación matemática para almacenamiento de datos", de: "Eine mathematische Gleichung für Datenspeicherung", nl: "Een wiskundige vergelijking voor dataopslag" },
          { en: "A programming language function", es: "Una función de lenguaje de programación", de: "Eine Programmiersprachen-Funktion", nl: "Een programmeertaalfunctie" }
        ],
        correct: 0,
        explanation: {
          en: "Activation functions introduce non-linearity into neural networks, deciding whether a neuron should be activated based on input values.",
          es: "Las funciones de activación introducen no linealidad en las redes neuronales, decidiendo si una neurona debe activarse basándose en valores de entrada.",
          de: "Aktivierungsfunktionen führen Nichtlinearität in neuronale Netzwerke ein und entscheiden ob ein Neuron basierend auf Eingabewerten aktiviert werden soll.",
          nl: "Activatiefuncties introduceren non-lineariteit in neurale netwerken, bepalen of een neuron geactiveerd moet worden op basis van invoerwaarden."
        }
      },
      {
        question: {
          en: "What is backpropagation in deep learning?",
          es: "¿Qué es la retropropagación en aprendizaje profundo?",
          de: "Was ist Backpropagation in Deep Learning?",
          nl: "Wat is backpropagation in deep learning?"
        },
        options: [
          { en: "A method for training neural networks by adjusting weights based on errors", es: "Un método para entrenar redes neuronales ajustando pesos basados en errores", de: "Eine Methode zum Trainieren neuronaler Netzwerke durch Anpassung von Gewichten basierend auf Fehlern", nl: "Een methode voor het trainen van neurale netwerken door gewichten aan te passen op basis van fouten" },
          { en: "Moving data backwards through the network", es: "Mover datos hacia atrás a través de la red", de: "Daten rückwärts durch das Netzwerk bewegen", nl: "Data achterwaarts door het netwerk bewegen" },
          { en: "Undoing previous calculations", es: "Deshacer cálculos anteriores", de: "Vorherige Berechnungen rückgängig machen", nl: "Eerdere berekeningen ongedaan maken" },
          { en: "Backing up network data", es: "Respaldar datos de red", de: "Netzwerkdaten sichern", nl: "Netwerkdata back-uppen" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation calculates gradients of the loss function and propagates them backwards through the network to update weights and minimize errors.",
          es: "La retropropagación calcula gradientes de la función de pérdida y los propaga hacia atrás a través de la red para actualizar pesos y minimizar errores.",
          de: "Backpropagation berechnet Gradienten der Verlustfunktion und propagiert sie rückwärts durch das Netzwerk um Gewichte zu aktualisieren und Fehler zu minimieren.",
          nl: "Backpropagation berekent gradiënten van de verliesfunctie en propageert deze achterwaarts door het netwerk om gewichten bij te werken en fouten te minimaliseren."
        }
      },
      {
        question: {
          en: "What is a loss function in deep learning?",
          es: "¿Qué es una función de pérdida en aprendizaje profundo?",
          de: "Was ist eine Verlustfunktion in Deep Learning?",
          nl: "Wat is een verliesfunctie in deep learning?"
        },
        options: [
          { en: "A measure of how wrong the model's predictions are", es: "Una medida de qué tan incorrectas son las predicciones del modelo", de: "Ein Maß dafür wie falsch die Vorhersagen des Modells sind", nl: "Een maat voor hoe verkeerd de voorspellingen van het model zijn" },
          { en: "A function that causes data loss", es: "Una función que causa pérdida de datos", de: "Eine Funktion die Datenverlust verursacht", nl: "Een functie die dataverlies veroorzaakt" },
          { en: "A method to reduce network size", es: "Un método para reducir el tamaño de la red", de: "Eine Methode um die Netzwerkgröße zu reduzieren", nl: "Een methode om netwerkgrootte te verminderen" },
          { en: "A way to delete unnecessary neurons", es: "Una forma de eliminar neuronas innecesarias", de: "Ein Weg unnötige Neuronen zu löschen", nl: "Een manier om onnodige neuronen te verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "The loss function quantifies the difference between predicted and actual outputs, guiding the training process to improve model accuracy.",
          es: "La función de pérdida cuantifica la diferencia entre salidas predichas y reales, guiando el proceso de entrenamiento para mejorar la precisión del modelo.",
          de: "Die Verlustfunktion quantifiziert die Differenz zwischen vorhergesagten und tatsächlichen Ausgaben und leitet den Trainingsprozess zur Verbesserung der Modellgenauigkeit.",
          nl: "De verliesfunctie kwantificeert het verschil tussen voorspelde en werkelijke outputs, stuurt het trainingsproces om modelnauwkeurigheid te verbeteren."
        }
      },
      {
        question: {
          en: "What does a gradient represent in neural network training?",
          es: "¿Qué representa un gradiente en el entrenamiento de redes neuronales?",
          de: "Was repräsentiert ein Gradient im neuronalen Netzwerk-Training?",
          nl: "Wat vertegenwoordigt een gradiënt in neuraal netwerk training?"
        },
        options: [
          { en: "The direction and magnitude of steepest increase in the loss function", es: "La dirección y magnitud del mayor aumento en la función de pérdida", de: "Die Richtung und Größe des steilsten Anstiegs in der Verlustfunktion", nl: "De richting en grootte van de steilste toename in de verliesfunctie" },
          { en: "A color gradient in data visualization", es: "Un gradiente de color en visualización de datos", de: "Ein Farbgradient in der Datenvisualisierung", nl: "Een kleurgradiënt in datavisualisatie" },
          { en: "The speed of data processing", es: "La velocidad de procesamiento de datos", de: "Die Geschwindigkeit der Datenverarbeitung", nl: "De snelheid van dataverwerking" },
          { en: "The difficulty level of training", es: "El nivel de dificultad del entrenamiento", de: "Der Schwierigkeitsgrad des Trainings", nl: "Het moeilijkheidsniveau van training" }
        ],
        correct: 0,
        explanation: {
          en: "Gradients indicate how to adjust weights to minimize the loss function, pointing in the direction of steepest ascent which we move opposite to.",
          es: "Los gradientes indican cómo ajustar pesos para minimizar la función de pérdida, apuntando en la dirección del ascenso más pronunciado al cual nos movemos en sentido opuesto.",
          de: "Gradienten zeigen wie Gewichte angepasst werden um die Verlustfunktion zu minimieren, zeigen in Richtung des steilsten Aufstiegs dem wir entgegengesetzt bewegen.",
          nl: "Gradiënten geven aan hoe gewichten aangepast moeten worden om de verliesfunctie te minimaliseren, wijzen in de richting van steilste stijging waar we tegenovergesteld bewegen."
        }
      },
      {
        question: {
          en: "What is the purpose of having multiple hidden layers in deep networks?",
          es: "¿Cuál es el propósito de tener múltiples capas ocultas en redes profundas?",
          de: "Was ist der Zweck mehrerer versteckter Schichten in tiefen Netzwerken?",
          nl: "Wat is het doel van meerdere verborgen lagen in diepe netwerken?"
        },
        options: [
          { en: "To learn increasingly complex and abstract representations", es: "Para aprender representaciones cada vez más complejas y abstractas", de: "Um zunehmend komplexe und abstrakte Repräsentationen zu lernen", nl: "Om steeds complexere en abstractere representaties te leren" },
          { en: "To make the network run faster", es: "Para hacer que la red funcione más rápido", de: "Um das Netzwerk schneller laufen zu lassen", nl: "Om het netwerk sneller te laten draaien" },
          { en: "To hide information from users", es: "Para ocultar información de los usuarios", de: "Um Informationen vor Benutzern zu verbergen", nl: "Om informatie voor gebruikers te verbergen" },
          { en: "To reduce memory usage", es: "Para reducir el uso de memoria", de: "Um die Speichernutzung zu reduzieren", nl: "Om geheugengebruik te verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Multiple hidden layers enable hierarchical feature learning, where early layers detect simple patterns and deeper layers combine them into complex concepts.",
          es: "Múltiples capas ocultas permiten aprendizaje jerárquico de características, donde capas tempranas detectan patrones simples y capas más profundas los combinan en conceptos complejos.",
          de: "Mehrere versteckte Schichten ermöglichen hierarchisches Feature-Learning, wo frühe Schichten einfache Muster erkennen und tiefere Schichten sie zu komplexen Konzepten kombinieren.",
          nl: "Meerdere verborgen lagen maken hiërarchisch feature learning mogelijk, waar vroege lagen eenvoudige patronen detecteren en diepere lagen ze combineren tot complexe concepten."
        }
      },
      {
        question: {
          en: "What is a perceptron in neural networks?",
          es: "¿Qué es un perceptrón en redes neuronales?",
          de: "Was ist ein Perceptron in neuronalen Netzwerken?",
          nl: "Wat is een perceptron in neurale netwerken?"
        },
        options: [
          { en: "The simplest type of artificial neuron that takes weighted inputs and produces an output", es: "El tipo más simple de neurona artificial que toma entradas ponderadas y produce una salida", de: "Der einfachste Typ künstlicher Neuron der gewichtete Eingaben nimmt und eine Ausgabe produziert", nl: "Het eenvoudigste type kunstmatige neuron dat gewogen inputs neemt en een output produceert" },
          { en: "A method for perceiving visual data", es: "Un método para percibir datos visuales", de: "Eine Methode zur Wahrnehmung visueller Daten", nl: "Een methode voor het waarnemen van visuele data" },
          { en: "A layer that filters noise from input", es: "Una capa que filtra ruido de la entrada", de: "Eine Schicht die Rauschen aus der Eingabe filtert", nl: "Een laag die ruis uit de input filtert" },
          { en: "A type of activation function", es: "Un tipo de función de activación", de: "Ein Typ von Aktivierungsfunktion", nl: "Een type activatiefunctie" }
        ],
        correct: 0,
        explanation: {
          en: "A perceptron is the fundamental building block of neural networks, combining multiple inputs with weights and applying a threshold function to produce an output.",
          es: "Un perceptrón es el bloque de construcción fundamental de las redes neuronales, combinando múltiples entradas con pesos y aplicando una función de umbral para producir una salida.",
          de: "Ein Perceptron ist der fundamentale Baustein neuronaler Netzwerke, kombiniert mehrere Eingaben mit Gewichten und wendet eine Schwellenfunktion an um eine Ausgabe zu produzieren.",
          nl: "Een perceptron is de fundamentele bouwsteen van neurale netwerken, combineert meerdere inputs met gewichten en past een drempelfunctie toe om een output te produceren."
        }
      },
      {
        question: {
          en: "What is the difference between a neuron and a layer in a neural network?",
          es: "¿Cuál es la diferencia entre una neurona y una capa en una red neuronal?",
          de: "Was ist der Unterschied zwischen einem Neuron und einer Schicht in einem neuronalen Netzwerk?",
          nl: "Wat is het verschil tussen een neuron en een laag in een neuraal netwerk?"
        },
        options: [
          { en: "A neuron is a single processing unit, while a layer is a collection of neurons that process data at the same level", es: "Una neurona es una unidad de procesamiento individual, mientras que una capa es una colección de neuronas que procesan datos al mismo nivel", de: "Ein Neuron ist eine einzelne Verarbeitungseinheit, während eine Schicht eine Sammlung von Neuronen ist die Daten auf derselben Ebene verarbeiten", nl: "Een neuron is een enkele verwerkingseenheid, terwijl een laag een verzameling neuronen is die data op hetzelfde niveau verwerken" },
          { en: "Neurons and layers are the same thing", es: "Las neuronas y capas son lo mismo", de: "Neuronen und Schichten sind dasselbe", nl: "Neuronen en lagen zijn hetzelfde" },
          { en: "A layer contains data, a neuron contains functions", es: "Una capa contiene datos, una neurona contiene funciones", de: "Eine Schicht enthält Daten, ein Neuron enthält Funktionen", nl: "Een laag bevat data, een neuron bevat functies" },
          { en: "Layers are used for input, neurons for output", es: "Las capas se usan para entrada, las neuronas para salida", de: "Schichten werden für Eingabe verwendet, Neuronen für Ausgabe", nl: "Lagen worden gebruikt voor input, neuronen voor output" }
        ],
        correct: 0,
        explanation: {
          en: "Individual neurons are the basic computational units that perform weighted sums and apply activation functions, while layers organize neurons that work together at the same depth in the network.",
          es: "Las neuronas individuales son las unidades computacionales básicas que realizan sumas ponderadas y aplican funciones de activación, mientras que las capas organizan neuronas que trabajan juntas a la misma profundidad en la red.",
          de: "Einzelne Neuronen sind die grundlegenden Recheneinheiten die gewichtete Summen durchführen und Aktivierungsfunktionen anwenden, während Schichten Neuronen organisieren die zusammen auf derselben Tiefe im Netzwerk arbeiten.",
          nl: "Individuele neuronen zijn de basis computationele eenheden die gewogen sommen uitvoeren en activatiefuncties toepassen, terwijl lagen neuronen organiseren die samenwerken op dezelfde diepte in het netwerk."
        }
      },
      {
        question: {
          en: "What is the purpose of weights in a neural network?",
          es: "¿Cuál es el propósito de los pesos en una red neuronal?",
          de: "Was ist der Zweck von Gewichten in einem neuronalen Netzwerk?",
          nl: "Wat is het doel van gewichten in een neuraal netwerk?"
        },
        options: [
          { en: "To determine the importance and strength of connections between neurons", es: "Para determinar la importancia y fuerza de las conexiones entre neuronas", de: "Um die Wichtigkeit und Stärke der Verbindungen zwischen Neuronen zu bestimmen", nl: "Om het belang en de sterkte van verbindingen tussen neuronen te bepalen" },
          { en: "To measure how heavy the network is", es: "Para medir qué tan pesada es la red", de: "Um zu messen wie schwer das Netzwerk ist", nl: "Om te meten hoe zwaar het netwerk is" },
          { en: "To store the training data", es: "Para almacenar los datos de entrenamiento", de: "Um die Trainingsdaten zu speichern", nl: "Om de trainingsdata op te slaan" },
          { en: "To count the number of neurons", es: "Para contar el número de neuronas", de: "Um die Anzahl der Neuronen zu zählen", nl: "Om het aantal neuronen te tellen" }
        ],
        correct: 0,
        explanation: {
          en: "Weights control how much each input contributes to the neuron's output and are adjusted during training to minimize error and improve the network's performance.",
          es: "Los pesos controlan cuánto contribuye cada entrada a la salida de la neurona y se ajustan durante el entrenamiento para minimizar errores y mejorar el rendimiento de la red.",
          de: "Gewichte kontrollieren wie viel jede Eingabe zur Ausgabe des Neurons beiträgt und werden während des Trainings angepasst um Fehler zu minimieren und die Netzwerkleistung zu verbessern.",
          nl: "Gewichten controleren hoeveel elke input bijdraagt aan de output van het neuron en worden aangepast tijdens training om fouten te minimaliseren en de netwerkprestaties te verbeteren."
        }
      },
      {
        question: {
          en: "What is the sigmoid activation function and where is it commonly used?",
          es: "¿Qué es la función de activación sigmoide y dónde se usa comúnmente?",
          de: "Was ist die Sigmoid-Aktivierungsfunktion und wo wird sie häufig verwendet?",
          nl: "Wat is de sigmoid activatiefunctie en waar wordt deze vaak gebruikt?"
        },
        options: [
          { en: "A function that maps inputs to values between 0 and 1, commonly used in binary classification output layers", es: "Una función que mapea entradas a valores entre 0 y 1, comúnmente usada en capas de salida de clasificación binaria", de: "Eine Funktion die Eingaben auf Werte zwischen 0 und 1 abbildet, häufig in binären Klassifikationsausgabeschichten verwendet", nl: "Een functie die inputs afbeeldt op waarden tussen 0 en 1, vaak gebruikt in binaire classificatie output lagen" },
          { en: "A function that only works with positive numbers", es: "Una función que solo funciona con números positivos", de: "Eine Funktion die nur mit positiven Zahlen funktioniert", nl: "Een functie die alleen werkt met positieve getallen" },
          { en: "A function that creates S-shaped curves in data", es: "Una función que crea curvas en forma de S en los datos", de: "Eine Funktion die S-förmige Kurven in Daten erstellt", nl: "Een functie die S-vormige krommen maakt in data" },
          { en: "A mathematical symbol used in neural networks", es: "Un símbolo matemático usado en redes neuronales", de: "Ein mathematisches Symbol das in neuronalen Netzwerken verwendet wird", nl: "Een wiskundig symbool gebruikt in neurale netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "The sigmoid function outputs values between 0 and 1, making it suitable for probabilistic interpretations and binary classification tasks, though it can suffer from vanishing gradient problems.",
          es: "La función sigmoide produce valores entre 0 y 1, haciéndola adecuada para interpretaciones probabilísticas y tareas de clasificación binaria, aunque puede sufrir problemas de gradiente que desaparece.",
          de: "Die Sigmoid-Funktion gibt Werte zwischen 0 und 1 aus, macht sie geeignet für probabilistische Interpretationen und binäre Klassifikationsaufgaben, obwohl sie unter verschwindenden Gradientenproblemen leiden kann.",
          nl: "De sigmoid functie geeft waarden tussen 0 en 1 uit, waardoor het geschikt is voor probabilistische interpretaties en binaire classificatietaken, hoewel het kan lijden onder verdwijnende gradiënt problemen."
        }
      },
      {
        question: {
          en: "What is the ReLU activation function and why is it popular?",
          es: "¿Qué es la función de activación ReLU y por qué es popular?",
          de: "Was ist die ReLU-Aktivierungsfunktion und warum ist sie beliebt?",
          nl: "Wat is de ReLU activatiefunctie en waarom is deze populair?"
        },
        options: [
          { en: "Returns the input if positive, zero otherwise; popular because it's simple and helps avoid vanishing gradients", es: "Devuelve la entrada si es positiva, cero de lo contrario; popular porque es simple y ayuda a evitar gradientes que desaparecen", de: "Gibt die Eingabe zurück wenn positiv, sonst Null; beliebt weil sie einfach ist und hilft verschwindende Gradienten zu vermeiden", nl: "Geeft de input terug als positief, anders nul; populair omdat het simpel is en helpt verdwijnende gradiënten te vermijden" },
          { en: "A function that makes all values positive", es: "Una función que hace todos los valores positivos", de: "Eine Funktion die alle Werte positiv macht", nl: "Een functie die alle waarden positief maakt" },
          { en: "A function that creates linear relationships", es: "Una función que crea relaciones lineales", de: "Eine Funktion die lineare Beziehungen erstellt", nl: "Een functie die lineaire relaties creëert" },
          { en: "A function that reduces computation time only", es: "Una función que solo reduce el tiempo de computación", de: "Eine Funktion die nur die Rechenzeit reduziert", nl: "Een functie die alleen de rekentijd vermindert" }
        ],
        correct: 0,
        explanation: {
          en: "ReLU (Rectified Linear Unit) is computationally efficient and helps with gradient flow, making deep networks easier to train compared to sigmoid functions.",
          es: "ReLU (Unidad Lineal Rectificada) es computacionalmente eficiente y ayuda con el flujo de gradientes, haciendo las redes profundas más fáciles de entrenar comparado con funciones sigmoide.",
          de: "ReLU (Rectified Linear Unit) ist recheneffizient und hilft beim Gradientenfluss, macht tiefe Netzwerke einfacher zu trainieren verglichen mit Sigmoid-Funktionen.",
          nl: "ReLU (Rectified Linear Unit) is computationeel efficiënt en helpt met gradiëntenstroom, waardoor diepe netwerken makkelijker te trainen zijn vergeleken met sigmoid functies."
        }
      },
      {
        question: {
          en: "What is bias in neural networks?",
          es: "¿Qué es el sesgo en redes neuronales?",
          de: "Was ist Bias in neuronalen Netzwerken?",
          nl: "Wat is bias in neurale netwerken?"
        },
        options: [
          { en: "An additional parameter that allows the activation function to shift and provides more flexibility in learning", es: "Un parámetro adicional que permite que la función de activación se desplace y proporciona más flexibilidad en el aprendizaje", de: "Ein zusätzlicher Parameter der es der Aktivierungsfunktion ermöglicht sich zu verschieben und mehr Flexibilität beim Lernen bietet", nl: "Een extra parameter die de activatiefunctie laat verschuiven en meer flexibiliteit biedt in het leren" },
          { en: "Unfair treatment of certain data pts", es: "Tratamiento injusto de ciertos puntos de datos", de: "Unfaire Behandlung bestimmter Datenpunkte", nl: "Oneerlijke behandeling van bepaalde datapunten" },
          { en: "Error in the neural network calculations", es: "Error en los cálculos de la red neuronal", de: "Fehler in den neuronalen Netzwerkberechnungen", nl: "Fout in de neurale netwerkberekeningen" },
          { en: "Personal opinion of the neural network", es: "Opinión personal de la red neuronal", de: "Persönliche Meinung des neuronalen Netzwerks", nl: "Persoonlijke mening van het neurale netwerk" }
        ],
        correct: 0,
        explanation: {
          en: "Bias terms allow neurons to activate even when all inputs are zero, providing additional degrees of freedom that help the network learn more complex patterns and improve fitting capability.",
          es: "Los términos de sesgo permiten que las neuronas se activen incluso cuando todas las entradas son cero, proporcionando grados adicionales de libertad que ayudan a la red a aprender patrones más complejos y mejorar la capacidad de ajuste.",
          de: "Bias-Terme ermöglichen es Neuronen zu aktivieren auch wenn alle Eingaben Null sind, bieten zusätzliche Freiheitsgrade die dem Netzwerk helfen komplexere Muster zu lernen und die Anpassungsfähigkeit zu verbessern.",
          nl: "Bias termen stellen neuronen in staat om te activeren zelfs wanneer alle inputs nul zijn, bieden extra vrijheidsgraden die het netwerk helpen complexere patronen te leren en aanpassingsvermogen te verbeteren."
        }
      },
      {
        question: {
          en: "What is the difference between supervised and unsupervised learning in deep learning?",
          es: "¿Cuál es la diferencia entre aprendizaje supervisado y no supervisado en aprendizaje profundo?",
          de: "Was ist der Unterschied zwischen überwachtem und unüberwachtem Lernen in Deep Learning?",
          nl: "Wat is het verschil tussen supervised en unsupervised learning in deep learning?"
        },
        options: [
          { en: "Supervised learning uses labeled data to learn mappings, while unsupervised learning finds patterns in unlabeled data", es: "El aprendizaje supervisado usa datos etiquetados para aprender mapeos, mientras que el aprendizaje no supervisado encuentra patrones en datos no etiquetados", de: "Überwachtes Lernen verwendet beschriftete Daten um Zuordnungen zu lernen, während unüberwachtes Lernen Muster in unbeschrifteten Daten findet", nl: "Supervised learning gebruikt gelabelde data om mappings te leren, terwijl unsupervised learning patronen vindt in ongelabelde data" },
          { en: "Supervised learning is faster than unsupervised learning", es: "El aprendizaje supervisado es más rápido que el aprendizaje no supervisado", de: "Überwachtes Lernen ist schneller als unüberwachtes Lernen", nl: "Supervised learning is sneller dan unsupervised learning" },
          { en: "Supervised learning requires a teacher, unsupervised doesn't", es: "El aprendizaje supervisado requiere un maestro, el no supervisado no", de: "Überwachtes Lernen benötigt einen Lehrer, unüberwachtes nicht", nl: "Supervised learning vereist een leraar, unsupervised niet" },
          { en: "They are the same in deep learning", es: "Son lo mismo en aprendizaje profundo", de: "Sie sind dasselbe in Deep Learning", nl: "Ze zijn hetzelfde in deep learning" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised learning trains on input-output pairs to learn predictive relationships, while unsupervised learning discovers hidden structures, clusters, or representations without target labels.",
          es: "El aprendizaje supervisado entrena con pares entrada-salida para aprender relaciones predictivas, mientras que el aprendizaje no supervisado descubre estructuras ocultas, clusters o representaciones sin etiquetas objetivo.",
          de: "Überwachtes Lernen trainiert auf Eingabe-Ausgabe-Paaren um prädiktive Beziehungen zu lernen, während unüberwachtes Lernen versteckte Strukturen, Cluster oder Repräsentationen ohne Zieletiketten entdeckt.",
          nl: "Supervised learning traint op input-output paren om voorspellende relaties te leren, terwijl unsupervised learning verborgen structuren, clusters of representaties ontdekt zonder doellabels."
        }
      },
      {
        question: {
          en: "What is forward propagation in a neural network?",
          es: "¿Qué es la propagación hacia adelante en una red neuronal?",
          de: "Was ist Vorwärtspropagation in einem neuronalen Netzwerk?",
          nl: "Wat is forward propagation in een neuraal netwerk?"
        },
        options: [
          { en: "The process of passing input data through the network layers to generate an output prediction", es: "El proceso de pasar datos de entrada a través de las capas de la red para generar una predicción de salida", de: "Der Prozess Eingabedaten durch die Netzwerkschichten zu leiten um eine Ausgabevorhersage zu generieren", nl: "Het proces van het doorgeven van inputdata door de netwerklagen om een outputvoorspelling te genereren" },
          { en: "Moving the network forward in time", es: "Mover la red hacia adelante en el tiempo", de: "Das Netzwerk in der Zeit vorwärts bewegen", nl: "Het netwerk vooruit bewegen in tijd" },
          { en: "Promoting the network to a higher level", es: "Promover la red a un nivel superior", de: "Das Netzwerk auf eine höhere Ebene befördern", nl: "Het netwerk promoveren naar een hoger niveau" },
          { en: "Sending data to the next computer", es: "Enviar datos a la siguiente computadora", de: "Daten an den nächsten Computer senden", nl: "Data verzenden naar de volgende computer" }
        ],
        correct: 0,
        explanation: {
          en: "Forward propagation is the inference phase where data flows from input to output layers, with each layer applying weights, biases, and activation functions to transform the data progressively.",
          es: "La propagación hacia adelante es la fase de inferencia donde los datos fluyen desde capas de entrada hasta capas de salida, con cada capa aplicando pesos, sesgos y funciones de activación para transformar los datos progresivamente.",
          de: "Vorwärtspropagation ist die Inferenzphase wo Daten von Eingabe- zu Ausgabeschichten fließen, wobei jede Schicht Gewichte, Biases und Aktivierungsfunktionen anwendet um die Daten progressiv zu transformieren.",
          nl: "Forward propagation is de inferentiefase waarbij data van input naar output lagen stroomt, waarbij elke laag gewichten, biases en activatiefuncties toepast om de data progressief te transformeren."
        }
      },
      {
        question: {
          en: "What is an epoch in neural network training?",
          es: "¿Qué es una época en entrenamiento de redes neuronales?",
          de: "Was ist eine Epoche im neuronalen Netzwerktraining?",
          nl: "Wat is een epoch in neurale netwerktraining?"
        },
        options: [
          { en: "One complete pass through the entire training dataset during the learning process", es: "Un pase completo a través de todo el conjunto de datos de entrenamiento durante el proceso de aprendizaje", de: "Ein vollständiger Durchgang durch den gesamten Trainingsdatensatz während des Lernprozesses", nl: "Een complete doorgang door de gehele trainingsdataset tijdens het leerproces" },
          { en: "A historical period in AI development", es: "Un período histórico en el desarrollo de IA", de: "Eine historische Periode in der KI-Entwicklung", nl: "Een historische periode in AI ontwikkeling" },
          { en: "The time it takes to train a network", es: "El tiempo que toma entrenar una red", de: "Die Zeit die es braucht ein Netzwerk zu trainieren", nl: "De tijd die het kost om een netwerk te trainen" },
          { en: "A specific layer in the network", es: "Una capa específica en la red", de: "Eine spezifische Schicht im Netzwerk", nl: "Een specifieke laag in het netwerk" }
        ],
        correct: 0,
        explanation: {
          en: "An epoch represents one full training cycle where the model has seen every example in the training set once, helping track training progress and convergence.",
          es: "Una época representa un ciclo de entrenamiento completo donde el modelo ha visto cada ejemplo en el conjunto de entrenamiento una vez, ayudando a rastrear el progreso del entrenamiento y convergencia.",
          de: "Eine Epoche repräsentiert einen vollständigen Trainingszyklus wo das Modell jedes Beispiel im Trainingsset einmal gesehen hat, hilft Trainingsfortschritt und Konvergenz zu verfolgen.",
          nl: "Een epoch vertegenwoordigt een volledige trainingscyclus waarbij het model elk voorbeeld in de trainingsset eenmaal heeft gezien, helpt trainingsvoortgang en convergentie te volgen."
        }
      },
      {
        question: {
          en: "What is overfitting in neural networks?",
          es: "¿Qué es el sobreajuste en redes neuronales?",
          de: "Was ist Overfitting in neuronalen Netzwerken?",
          nl: "Wat is overfitting in neurale netwerken?"
        },
        options: [
          { en: "When a model learns the training data too well and fails to generalize to new, unseen data", es: "Cuando un modelo aprende los datos de entrenamiento demasiado bien y falla en generalizar a datos nuevos no vistos", de: "Wenn ein Modell die Trainingsdaten zu gut lernt und versagt bei der Generalisierung auf neue, ungesehene Daten", nl: "Wanneer een model de trainingsdata te goed leert en faalt om te generaliseren naar nieuwe, ongeziene data" },
          { en: "When a model is too big for the available memory", es: "Cuando un modelo es demasiado grande para la memoria disponible", de: "Wenn ein Modell zu groß für den verfügbaren Speicher ist", nl: "Wanneer een model te groot is voor het beschikbare geheugen" },
          { en: "When training takes too long", es: "Cuando el entrenamiento toma demasiado tiempo", de: "Wenn das Training zu lange dauert", nl: "Wanneer training te lang duurt" },
          { en: "When the model fits perfectly on all data", es: "Cuando el modelo se ajusta perfectamente a todos los datos", de: "Wenn das Modell perfekt auf alle Daten passt", nl: "Wanneer het model perfect past op alle data" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting occurs when a model memorizes training data rather than learning general patterns, resulting in poor performance on test data despite excellent training accuracy.",
          es: "El sobreajuste ocurre cuando un modelo memoriza datos de entrenamiento en lugar de aprender patrones generales, resultando en mal rendimiento en datos de prueba a pesar de excelente precisión de entrenamiento.",
          de: "Overfitting tritt auf wenn ein Modell Trainingsdaten memoriert anstatt allgemeine Muster zu lernen, resultiert in schlechter Leistung auf Testdaten trotz exzellenter Trainingsgenauigkeit.",
          nl: "Overfitting treedt op wanneer een model trainingsdata memoriseert in plaats van algemene patronen te leren, resulteert in slechte prestaties op testdata ondanks uitstekende trainingsnauwkeurigheid."
        }
      },
      {
        question: {
          en: "What is the purpose of splitting data into training, validation, and test sets?",
          es: "¿Cuál es el propósito de dividir datos en conjuntos de entrenamiento, validación y prueba?",
          de: "Was ist der Zweck der Aufteilung von Daten in Trainings-, Validierungs- und Testsets?",
          nl: "Wat is het doel van het opsplitsen van data in training, validatie en test sets?"
        },
        options: [
          { en: "To train the model, tune hyperparameters, and evaluate final performance on truly unseen data", es: "Para entrenar el modelo, ajustar hiperparámetros y evaluar el rendimiento final en datos verdaderamente no vistos", de: "Um das Modell zu trainieren, Hyperparameter zu optimieren und finale Leistung auf wirklich ungesehenen Daten zu bewerten", nl: "Om het model te trainen, hyperparameters af te stellen en finale prestaties te evalueren op echt ongeziene data" },
          { en: "To make the dataset smaller and easier to handle", es: "Para hacer el conjunto de datos más pequeño y fácil de manejar", de: "Um den Datensatz kleiner und einfacher zu handhaben zu machen", nl: "Om de dataset kleiner en makkelijker hanteerbaar te maken" },
          { en: "To separate different types of data", es: "Para separar diferentes tipos de datos", de: "Um verschiedene Datentypen zu trennen", nl: "Om verschillende soorten data te scheiden" },
          { en: "To run three different training processes", es: "Para ejecutar tres procesos de entrenamiento diferentes", de: "Um drei verschiedene Trainingsprozesse auszuführen", nl: "Om drie verschillende trainingsprocessen uit te voeren" }
        ],
        correct: 0,
        explanation: {
          en: "This separation ensures unbiased model evaluation: training set builds the model, validation set guides hyperparameter selection, and test set provides final performance assessment.",
          es: "Esta separación asegura evaluación imparcial del modelo: conjunto de entrenamiento construye el modelo, conjunto de validación guía selección de hiperparámetros, y conjunto de prueba proporciona evaluación final de rendimiento.",
          de: "Diese Trennung gewährleistet unvoreingenommene Modellbewertung: Trainingsset baut das Modell, Validierungsset leitet Hyperparameter-Auswahl, und Testset bietet finale Leistungsbewertung.",
          nl: "Deze scheiding zorgt voor onbevooroordeelde modelevaluatie: trainingsset bouwt het model, validatieset stuurt hyperparameter selectie, en testset biedt finale prestatiebeoordeling."
        }
      },
      {
        question: {
          en: "What is the universal approximation theorem in neural networks?",
          es: "¿Qué es el teorema de aproximación universal en redes neuronales?",
          de: "Was ist das universelle Approximationstheorem in neuronalen Netzwerken?",
          nl: "Wat is het universele approximatie theorema in neurale netwerken?"
        },
        options: [
          { en: "A theorem stating that neural networks with sufficient neurons can approximate any continuous function to arbitrary precision", es: "Un teorema que establece que redes neuronales con suficientes neuronas pueden aproximar cualquier función continua con precisión arbitraria", de: "Ein Theorem das besagt dass neuronale Netzwerke mit ausreichend Neuronen jede kontinuierliche Funktion mit beliebiger Genauigkeit approximieren können", nl: "Een theorema dat stelt dat neurale netwerken met voldoende neuronen elke continue functie kunnen benaderen met willekeurige precisie" },
          { en: "A method for approximating the training time", es: "Un método para aproximar el tiempo de entrenamiento", de: "Eine Methode zur Approximation der Trainingszeit", nl: "Een methode voor het benaderen van de trainingstijd" },
          { en: "A universal standard for all neural networks", es: "Un estándar universal para todas las redes neuronales", de: "Ein universeller Standard für alle neuronalen Netzwerke", nl: "Een universele standaard voor alle neurale netwerken" },
          { en: "A theorem about network connectivity", es: "Un teorema sobre conectividad de red", de: "Ein Theorem über Netzwerkkonnektivität", nl: "Een theorema over netwerkconnectiviteit" }
        ],
        correct: 0,
        explanation: {
          en: "This fundamental theorem provides theoretical foundation for neural networks' power, showing that feedforward networks can theoretically learn any mapping, though it doesn't guarantee efficient learning.",
          es: "Este teorema fundamental proporciona base teórica para el poder de las redes neuronales, mostrando que redes feedforward pueden teóricamente aprender cualquier mapeo, aunque no garantiza aprendizaje eficiente.",
          de: "Dieses fundamentale Theorem bietet theoretische Grundlage für die Macht neuronaler Netzwerke, zeigt dass Feedforward-Netzwerke theoretisch jede Zuordnung lernen können, garantiert aber kein effizientes Lernen.",
          nl: "Dit fundamentele theorema biedt theoretische basis voor de kracht van neurale netwerken, toont dat feedforward netwerken theoretisch elke mapping kunnen leren, hoewel het geen efficiënt leren garandeert."
        }
      },
      {
        question: {
          en: "What is the difference between parameters and hyperparameters in neural networks?",
          es: "¿Cuál es la diferencia entre parámetros e hiperparámetros en redes neuronales?",
          de: "Was ist der Unterschied zwischen Parametern und Hyperparametern in neuronalen Netzwerken?",
          nl: "Wat is het verschil tussen parameters en hyperparameters in neurale netwerken?"
        },
        options: [
          { en: "Parameters are learned during training (weights, biases), while hyperparameters are set before training (learning rate, architecture)", es: "Los parámetros se aprenden durante el entrenamiento (pesos, sesgos), mientras que los hiperparámetros se establecen antes del entrenamiento (tasa de aprendizaje, arquitectura)", de: "Parameter werden während des Trainings gelernt (Gewichte, Biases), während Hyperparameter vor dem Training gesetzt werden (Lernrate, Architektur)", nl: "Parameters worden geleerd tijdens training (gewichten, biases), terwijl hyperparameters worden ingesteld voor training (learning rate, architectuur)" },
          { en: "Parameters are more important than hyperparameters", es: "Los parámetros son más importantes que los hiperparámetros", de: "Parameter sind wichtiger als Hyperparameter", nl: "Parameters zijn belangrijker dan hyperparameters" },
          { en: "Hyperparameters are mathematical, parameters are not", es: "Los hiperparámetros son matemáticos, los parámetros no", de: "Hyperparameter sind mathematisch, Parameter nicht", nl: "Hyperparameters zijn wiskundig, parameters niet" },
          { en: "They are the same thing with different names", es: "Son lo mismo con nombres diferentes", de: "Sie sind dasselbe mit verschiedenen Namen", nl: "Het zijn hetzelfde met verschillende namen" }
        ],
        correct: 0,
        explanation: {
          en: "Parameters are internal model weights updated through training algorithms, while hyperparameters are external configuration choices that control the learning process and model architecture.",
          es: "Los parámetros son pesos internos del modelo actualizados a través de algoritmos de entrenamiento, mientras que los hiperparámetros son opciones de configuración externas que controlan el proceso de aprendizaje y arquitectura del modelo.",
          de: "Parameter sind interne Modellgewichte die durch Trainingsalgorithmen aktualisiert werden, während Hyperparameter externe Konfigurationswahlen sind die den Lernprozess und die Modellarchitektur kontrollieren.",
          nl: "Parameters zijn interne modelgewichten bijgewerkt door trainingsalgoritmes, terwijl hyperparameters externe configuratiekeuzes zijn die het leerproces en modelarchitectuur controleren."
        }
      },
      {
        question: {
          en: "What is batch size in neural network training?",
          es: "¿Qué es el tamaño de lote en entrenamiento de redes neuronales?",
          de: "Was ist Batch-Größe im neuronalen Netzwerktraining?",
          nl: "Wat is batch size in neurale netwerktraining?"
        },
        options: [
          { en: "The number of training examples processed together before updating model weights", es: "El número de ejemplos de entrenamiento procesados juntos antes de actualizar pesos del modelo", de: "Die Anzahl der Trainingsbeispiele die zusammen verarbeitet werden bevor Modellgewichte aktualisiert werden", nl: "Het aantal trainingsvoorbeelden dat samen verwerkt wordt voordat modelgewichten worden bijgewerkt" },
          { en: "The size of the neural network layers", es: "El tamaño de las capas de la red neuronal", de: "Die Größe der neuronalen Netzwerkschichten", nl: "De grootte van de neurale netwerklagen" },
          { en: "How many batches fit in memory", es: "Cuántos lotes caben en memoria", de: "Wie viele Stapel in den Speicher passen", nl: "Hoeveel batches in het geheugen passen" },
          { en: "The total number of training examples", es: "El número total de ejemplos de entrenamiento", de: "Die Gesamtanzahl der Trainingsbeispiele", nl: "Het totale aantal trainingsvoorbeelden" }
        ],
        correct: 0,
        explanation: {
          en: "Batch size affects training stability and computational efficiency: larger batches provide stable gradients but require more memory, while smaller batches offer regularization but noisier gradients.",
          es: "El tamaño de lote afecta la estabilidad del entrenamiento y eficiencia computacional: lotes más grandes proporcionan gradientes estables pero requieren más memoria, mientras que lotes más pequeños ofrecen regularización pero gradientes más ruidosos.",
          de: "Batch-Größe beeinflusst Trainingsstabilität und Recheneffizienz: größere Batches bieten stabile Gradienten aber benötigen mehr Speicher, während kleinere Batches Regularisierung bieten aber rauschigere Gradienten.",
          nl: "Batch size beïnvloedt trainingsstabiliteit en computationele efficiëntie: grotere batches bieden stabiele gradiënten maar vereisen meer geheugen, terwijl kleinere batches regularisatie bieden maar ruiziger gradiënten."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem in deep neural networks?",
          es: "¿Qué es el problema del gradiente que desaparece en redes neuronales profundas?",
          de: "Was ist das Problem der verschwindenden Gradienten in tiefen neuronalen Netzwerken?",
          nl: "Wat is het verdwijnende gradiënt probleem in diepe neurale netwerken?"
        },
        options: [
          { en: "Gradients become extremely small in early layers, making learning slow or impossible", es: "Los gradientes se vuelven extremadamente pequeños en capas tempranas, haciendo el aprendizaje lento o imposible", de: "Gradienten werden extrem klein in frühen Schichten, machen Lernen langsam oder unmöglich", nl: "Gradiënten worden extreem klein in vroege lagen, waardoor leren langzaam of onmogelijk wordt" },
          { en: "Gradients disappear from computer memory", es: "Los gradientes desaparecen de la memoria de la computadora", de: "Gradienten verschwinden aus dem Computerspeicher", nl: "Gradiënten verdwijnen uit computergeheugen" },
          { en: "The gradient calculation becomes invisible", es: "El cálculo del gradiente se vuelve invisible", de: "Die Gradientenberechnung wird unsichtbar", nl: "De gradiëntberekening wordt onzichtbaar" },
          { en: "Training data gradually vanishes during processing", es: "Los datos de entrenamiento desaparecen gradualmente durante el procesamiento", de: "Trainingsdaten verschwinden allmählich während der Verarbeitung", nl: "Trainingsdata verdwijnt geleidelijk tijdens verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "As gradients are backpropagated through many layers, they can become exponentially smaller due to repeated multiplication with small weights, preventing effective learning in deeper layers.",
          es: "Mientras los gradientes se retropropagan a través de muchas capas, pueden volverse exponencialmente más pequeños debido a multiplicación repetida con pesos pequeños, previniendo aprendizaje efectivo en capas más profundas.",
          de: "Während Gradienten durch viele Schichten rückpropagiert werden, können sie exponentiell kleiner werden aufgrund wiederholter Multiplikation mit kleinen Gewichten, verhindert effektives Lernen in tieferen Schichten.",
          nl: "Terwijl gradiënten door veel lagen worden terugpropageerd, kunnen ze exponentieel kleiner worden door herhaalde vermenigvuldiging met kleine gewichten, waardoor effectief leren in diepere lagen wordt voorkomen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();