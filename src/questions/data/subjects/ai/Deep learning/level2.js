// Deep learning Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "Deep Learning Level 2",
          "es": "Aprendizaje Profundo Nivel 2",
          "de": "Deep Learning Stufe 2",
          "nl": "Deep Learning Level 2"
    },
    questions: [
      {
        question: {
                  "en": "What is an activation function in a neural network?",
                  "es": "¿Qué es una función de activación en una red neuronal?",
                  "de": "Was ist eine Aktivierungsfunktion in einem neuronalen Netzwerk?",
                  "nl": "Wat is een activatiefunctie in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "A function that determines if a neuron should be activated",
                  "es": "Una función que determina si una neurona debe activarse",
                  "de": "Eine Funktion die bestimmt ob ein Neuron aktiviert werden soll",
                  "nl": "Een functie die bepaalt of een neuron geactiveerd moet worden"
        },
        {
                  "en": "A programming language function",
                  "es": "Una función de lenguaje de programación",
                  "de": "Eine Programmiersprachen-Funktion",
                  "nl": "Een programmeertaalfunctie"
        },
        {
                  "en": "A function that activates the computer",
                  "es": "Una función que activa la computadora",
                  "de": "Eine Funktion die den Computer aktiviert",
                  "nl": "Een functie die de computer activeert"
        },
        {
                  "en": "A mathematical equation for data storage",
                  "es": "Una ecuación matemática para almacenamiento de datos",
                  "de": "Eine mathematische Gleichung für Datenspeicherung",
                  "nl": "Een wiskundige vergelijking voor dataopslag"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Activation functions introduce non-linearity into neural networks, deciding whether a neuron should be activated based on input values.",
                  "es": "Las funciones de activación introducen no linealidad en las redes neuronales, decidiendo si una neurona debe activarse basándose en valores de entrada.",
                  "de": "Aktivierungsfunktionen führen Nichtlinearität in neuronale Netzwerke ein und entscheiden ob ein Neuron basierend auf Eingabewerten aktiviert werden soll.",
                  "nl": "Activatiefuncties introduceren non-lineariteit in neurale netwerken, bepalen of een neuron geactiveerd moet worden op basis van invoerwaarden."
        }
      },
      {
        question: {
                  "en": "What is backpropagation in deep learning?",
                  "es": "¿Qué es la retropropagación en aprendizaje profundo?",
                  "de": "Was ist Backpropagation in Deep Learning?",
                  "nl": "Wat is backpropagation in deep learning?"
        },
        options: [
        {
                  "en": "Undoing previous calculations",
                  "es": "Deshacer cálculos anteriores",
                  "de": "Vorherige Berechnungen rückgängig machen",
                  "nl": "Eerdere berekeningen ongedaan maken"
        },
        {
                  "en": "A method for training neural networks by adjusting weights based on errors",
                  "es": "Un método para entrenar redes neuronales ajustando pesos basados en errores",
                  "de": "Eine Methode zum Trainieren neuronaler Netzwerke durch Anpassung von Gewichten basierend auf Fehlern",
                  "nl": "Een methode voor het trainen van neurale netwerken door gewichten aan te passen op basis van fouten"
        },
        {
                  "en": "Moving data backwards through the network",
                  "es": "Mover datos hacia atrás a través de la red",
                  "de": "Daten rückwärts durch das Netzwerk bewegen",
                  "nl": "Data achterwaarts door het netwerk bewegen"
        },
        {
                  "en": "Backing up network data",
                  "es": "Respaldar datos de red",
                  "de": "Netzwerkdaten sichern",
                  "nl": "Netwerkdata back-uppen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Backpropagation calculates gradients of the loss function and propagates them backwards through the network to update weights and minimize errors.",
                  "es": "La retropropagación calcula gradientes de la función de pérdida y los propaga hacia atrás a través de la red para actualizar pesos y minimizar errores.",
                  "de": "Backpropagation berechnet Gradienten der Verlustfunktion und propagiert sie rückwärts durch das Netzwerk um Gewichte zu aktualisieren und Fehler zu minimieren.",
                  "nl": "Backpropagation berekent gradiënten van de verliesfunctie en propageert deze achterwaarts door het netwerk om gewichten bij te werken en fouten te minimaliseren."
        }
      },
      {
        question: {
                  "en": "What is a loss function in deep learning?",
                  "es": "¿Qué es una función de pérdida en aprendizaje profundo?",
                  "de": "Was ist eine Verlustfunktion in Deep Learning?",
                  "nl": "Wat is een verliesfunctie in deep learning?"
        },
        options: [
        {
                  "en": "A method to reduce network size",
                  "es": "Un método para reducir el tamaño de la red",
                  "de": "Eine Methode um die Netzwerkgröße zu reduzieren",
                  "nl": "Een methode om netwerkgrootte te verminderen"
        },
        {
                  "en": "A measure of how wrong the model's predictions are",
                  "es": "Una medida de qué tan incorrectas son las predicciones del modelo",
                  "de": "Ein Maß dafür wie falsch die Vorhersagen des Modells sind",
                  "nl": "Een maat voor hoe verkeerd de voorspellingen van het model zijn"
        },
        {
                  "en": "A way to delete unnecessary neurons",
                  "es": "Una forma de eliminar neuronas innecesarias",
                  "de": "Ein Weg unnötige Neuronen zu löschen",
                  "nl": "Een manier om onnodige neuronen te verwijderen"
        },
        {
                  "en": "A function that causes data loss",
                  "es": "Una función que causa pérdida de datos",
                  "de": "Eine Funktion die Datenverlust verursacht",
                  "nl": "Een functie die dataverlies veroorzaakt"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The loss function quantifies the difference between predicted and actual outputs, guiding the training process to improve model accuracy.",
                  "es": "La función de pérdida cuantifica la diferencia entre salidas predichas y reales, guiando el proceso de entrenamiento para mejorar la precisión del modelo.",
                  "de": "Die Verlustfunktion quantifiziert die Differenz zwischen vorhergesagten und tatsächlichen Ausgaben und leitet den Trainingsprozess zur Verbesserung der Modellgenauigkeit.",
                  "nl": "De verliesfunctie kwantificeert het verschil tussen voorspelde en werkelijke outputs, stuurt het trainingsproces om modelnauwkeurigheid te verbeteren."
        }
      },
      {
        question: {
                  "en": "What does a gradient represent in neural network training?",
                  "es": "¿Qué representa un gradiente en el entrenamiento de redes neuronales?",
                  "de": "Was repräsentiert ein Gradient im neuronalen Netzwerk-Training?",
                  "nl": "Wat vertegenwoordigt een gradiënt in neuraal netwerk training?"
        },
        options: [
        {
                  "en": "A color gradient in data visualization",
                  "es": "Un gradiente de color en visualización de datos",
                  "de": "Ein Farbgradient in der Datenvisualisierung",
                  "nl": "Een kleurgradiënt in datavisualisatie"
        },
        {
                  "en": "The difficulty level of training",
                  "es": "El nivel de dificultad del entrenamiento",
                  "de": "Der Schwierigkeitsgrad des Trainings",
                  "nl": "Het moeilijkheidsniveau van training"
        },
        {
                  "en": "The direction and magnitude of steepest increase in the loss function",
                  "es": "La dirección y magnitud del mayor aumento en la función de pérdida",
                  "de": "Die Richtung und Größe des steilsten Anstiegs in der Verlustfunktion",
                  "nl": "De richting en grootte van de steilste toename in de verliesfunctie"
        },
        {
                  "en": "The speed of data processing",
                  "es": "La velocidad de procesamiento de datos",
                  "de": "Die Geschwindigkeit der Datenverarbeitung",
                  "nl": "De snelheid van dataverwerking"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Gradients indicate how to adjust weights to minimize the loss function, pointing in the direction of steepest ascent which we move opposite to.",
                  "es": "Los gradientes indican cómo ajustar pesos para minimizar la función de pérdida, apuntando en la dirección del ascenso más pronunciado al cual nos movemos en sentido opuesto.",
                  "de": "Gradienten zeigen wie Gewichte angepasst werden um die Verlustfunktion zu minimieren, zeigen in Richtung des steilsten Aufstiegs dem wir entgegengesetzt bewegen.",
                  "nl": "Gradiënten geven aan hoe gewichten aangepast moeten worden om de verliesfunctie te minimaliseren, wijzen in de richting van steilste stijging waar we tegenovergesteld bewegen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of having multiple hidden layers in deep networks?",
                  "es": "¿Cuál es el propósito de tener múltiples capas ocultas en redes profundas?",
                  "de": "Was ist der Zweck mehrerer versteckter Schichten in tiefen Netzwerken?",
                  "nl": "Wat is het doel van meerdere verborgen lagen in diepe netwerken?"
        },
        options: [
        {
                  "en": "To learn increasingly complex and abstract representations",
                  "es": "Para aprender representaciones cada vez más complejas y abstractas",
                  "de": "Um zunehmend komplexe und abstrakte Repräsentationen zu lernen",
                  "nl": "Om steeds complexere en abstractere representaties te leren"
        },
        {
                  "en": "To reduce memory usage",
                  "es": "Para reducir el uso de memoria",
                  "de": "Um die Speichernutzung zu reduzieren",
                  "nl": "Om geheugengebruik te verminderen"
        },
        {
                  "en": "To make the network run faster",
                  "es": "Para hacer que la red funcione más rápido",
                  "de": "Um das Netzwerk schneller laufen zu lassen",
                  "nl": "Om het netwerk sneller te laten draaien"
        },
        {
                  "en": "To hide information from users",
                  "es": "Para ocultar información de los usuarios",
                  "de": "Um Informationen vor Benutzern zu verbergen",
                  "nl": "Om informatie voor gebruikers te verbergen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Multiple hidden layers enable hierarchical feature learning, where early layers detect simple patterns and deeper layers combine them into complex concepts.",
                  "es": "Múltiples capas ocultas permiten aprendizaje jerárquico de características, donde capas tempranas detectan patrones simples y capas más profundas los combinan en conceptos complejos.",
                  "de": "Mehrere versteckte Schichten ermöglichen hierarchisches Feature-Learning, wo frühe Schichten einfache Muster erkennen und tiefere Schichten sie zu komplexen Konzepten kombinieren.",
                  "nl": "Meerdere verborgen lagen maken hiërarchisch feature learning mogelijk, waar vroege lagen eenvoudige patronen detecteren en diepere lagen ze combineren tot complexe concepten."
        }
      },
      {
        question: {
                  "en": "What is a perceptron in neural networks?",
                  "es": "¿Qué es un perceptrón en redes neuronales?",
                  "de": "Was ist ein Perceptron in neuronalen Netzwerken?",
                  "nl": "Wat is een perceptron in neurale netwerken?"
        },
        options: [
        {
                  "en": "The simplest type of artificial neuron that takes weighted inputs and produces an output",
                  "es": "El tipo más simple de neurona artificial que toma entradas ponderadas y produce una salida",
                  "de": "Der einfachste Typ künstlicher Neuron der gewichtete Eingaben nimmt und eine Ausgabe produziert",
                  "nl": "Het eenvoudigste type kunstmatige neuron dat gewogen inputs neemt en een output produceert"
        },
        {
                  "en": "A type of activation function",
                  "es": "Un tipo de función de activación",
                  "de": "Ein Typ von Aktivierungsfunktion",
                  "nl": "Een type activatiefunctie"
        },
        {
                  "en": "A method for perceiving visual data",
                  "es": "Un método para percibir datos visuales",
                  "de": "Eine Methode zur Wahrnehmung visueller Daten",
                  "nl": "Een methode voor het waarnemen van visuele data"
        },
        {
                  "en": "A layer that filters noise from input",
                  "es": "Una capa que filtra ruido de la entrada",
                  "de": "Eine Schicht die Rauschen aus der Eingabe filtert",
                  "nl": "Een laag die ruis uit de input filtert"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A perceptron is the fundamental building block of neural networks, combining multiple inputs with weights and applying a threshold function to produce an output.",
                  "es": "Un perceptrón es el bloque de construcción fundamental de las redes neuronales, combinando múltiples entradas con pesos y aplicando una función de umbral para producir una salida.",
                  "de": "Ein Perceptron ist der fundamentale Baustein neuronaler Netzwerke, kombiniert mehrere Eingaben mit Gewichten und wendet eine Schwellenfunktion an um eine Ausgabe zu produzieren.",
                  "nl": "Een perceptron is de fundamentele bouwsteen van neurale netwerken, combineert meerdere inputs met gewichten en past een drempelfunctie toe om een output te produceren."
        }
      },
      {
        question: {
                  "en": "What is the difference between a neuron and a layer in a neural network?",
                  "es": "¿Cuál es la diferencia entre una neurona y una capa en una red neuronal?",
                  "de": "Was ist der Unterschied zwischen einem Neuron und einer Schicht in einem neuronalen Netzwerk?",
                  "nl": "Wat is het verschil tussen een neuron en een laag in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "Neurons and layers are the same thing",
                  "es": "Las neuronas y capas son lo mismo",
                  "de": "Neuronen und Schichten sind dasselbe",
                  "nl": "Neuronen en lagen zijn hetzelfde"
        },
        {
                  "en": "Layers are used for input, neurons for output",
                  "es": "Las capas se usan para entrada, las neuronas para salida",
                  "de": "Schichten werden für Eingabe verwendet, Neuronen für Ausgabe",
                  "nl": "Lagen worden gebruikt voor input, neuronen voor output"
        },
        {
                  "en": "A layer contains data, a neuron contains functions",
                  "es": "Una capa contiene datos, una neurona contiene funciones",
                  "de": "Eine Schicht enthält Daten, ein Neuron enthält Funktionen",
                  "nl": "Een laag bevat data, een neuron bevat functies"
        },
        {
                  "en": "A neuron is a single processing unit, while a layer is a collection of neurons that process data at the same level",
                  "es": "Una neurona es una unidad de procesamiento individual, mientras que una capa es una colección de neuronas que procesan datos al mismo nivel",
                  "de": "Ein Neuron ist eine Verarbeitungseinheit, eine Schicht ist eine Sammlung von Neuronen die Daten auf derselben Ebene verarbeiten",
                  "nl": "Een neuron is een enkele verwerkingseenheid, terwijl een laag een verzameling neuronen is die data op hetzelfde niveau verwerken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Individual neurons are the basic computational units that perform weighted sums and apply activation functions, while layers organize neurons that work together at the same depth in the network.",
                  "es": "Las neuronas individuales son las unidades computacionales básicas que realizan sumas ponderadas y aplican funciones de activación, mientras que las capas organizan neuronas que trabajan juntas a la misma profundidad en la red.",
                  "de": "Einzelne Neuronen sind die grundlegenden Recheneinheiten die gewichtete Summen durchführen und Aktivierungsfunktionen anwenden, während Schichten Neuronen organisieren die zusammen auf derselben Tiefe im Netzwerk arbeiten.",
                  "nl": "Individuele neuronen zijn de basis computationele eenheden die gewogen sommen uitvoeren en activatiefuncties toepassen, terwijl lagen neuronen organiseren die samenwerken op dezelfde diepte in het netwerk."
        }
      },
      {
        question: {
                  "en": "What is the purpose of weights in a neural network?",
                  "es": "¿Cuál es el propósito de los pesos en una red neuronal?",
                  "de": "Was ist der Zweck von Gewichten in einem neuronalen Netzwerk?",
                  "nl": "Wat is het doel van gewichten in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "To count the number of neurons",
                  "es": "Para contar el número de neuronas",
                  "de": "Um die Anzahl der Neuronen zu zählen",
                  "nl": "Om het aantal neuronen te tellen"
        },
        {
                  "en": "To store the training data",
                  "es": "Para almacenar los datos de entrenamiento",
                  "de": "Um die Trainingsdaten zu speichern",
                  "nl": "Om de trainingsdata op te slaan"
        },
        {
                  "en": "To determine the importance and strength of connections between neurons",
                  "es": "Para determinar la importancia y fuerza de las conexiones entre neuronas",
                  "de": "Um die Wichtigkeit und Stärke der Verbindungen zwischen Neuronen zu bestimmen",
                  "nl": "Om het belang en de sterkte van verbindingen tussen neuronen te bepalen"
        },
        {
                  "en": "To measure how heavy the network is",
                  "es": "Para medir qué tan pesada es la red",
                  "de": "Um zu messen wie schwer das Netzwerk ist",
                  "nl": "Om te meten hoe zwaar het netwerk is"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Weights control how much each input contributes to the neuron's output and are adjusted during training to minimize error and improve the network's performance.",
                  "es": "Los pesos controlan cuánto contribuye cada entrada a la salida de la neurona y se ajustan durante el entrenamiento para minimizar errores y mejorar el rendimiento de la red.",
                  "de": "Gewichte kontrollieren wie viel jede Eingabe zur Ausgabe des Neurons beiträgt und werden während des Trainings angepasst um Fehler zu minimieren und die Netzwerkleistung zu verbessern.",
                  "nl": "Gewichten controleren hoeveel elke input bijdraagt aan de output van het neuron en worden aangepast tijdens training om fouten te minimaliseren en de netwerkprestaties te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is the sigmoid activation function and where is it commonly used?",
                  "es": "¿Qué es la función de activación sigmoide y dónde se usa comúnmente?",
                  "de": "Was ist die Sigmoid-Aktivierungsfunktion und wo wird sie häufig verwendet?",
                  "nl": "Wat is de sigmoid activatiefunctie en waar wordt deze vaak gebruikt?"
        },
        options: [
        {
                  "en": "A function that only works with positive numbers",
                  "es": "Una función que solo funciona con números positivos",
                  "de": "Eine Funktion die nur mit positiven Zahlen funktioniert",
                  "nl": "Een functie die alleen werkt met positieve getallen"
        },
        {
                  "en": "A mathematical symbol used in neural networks",
                  "es": "Un símbolo matemático usado en redes neuronales",
                  "de": "Ein mathematisches Symbol das in neuronalen Netzwerken verwendet wird",
                  "nl": "Een wiskundig symbool gebruikt in neurale netwerken"
        },
        {
                  "en": "A function that creates S-shaped curves in data",
                  "es": "Una función que crea curvas en forma de S en los datos",
                  "de": "Eine Funktion die S-förmige Kurven in Daten erstellt",
                  "nl": "Een functie die S-vormige krommen maakt in data"
        },
        {
                  "en": "A function that maps inputs to values between 0 and 1, commonly used in binary classification output layers",
                  "es": "Una función que mapea entradas a valores entre 0 y 1, comúnmente usada en capas de salida de clasificación binaria",
                  "de": "Eine Funktion die Eingaben auf Werte zwischen 0 und 1 abbildet, häufig in binären Klassifikationsausgabeschichten verwendet",
                  "nl": "Een functie die inputs afbeeldt op waarden tussen 0 en 1, vaak gebruikt in binaire classificatie output lagen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The sigmoid function outputs values between 0 and 1, making it suitable for probabilistic interpretations and binary classification tasks, though it can suffer from vanishing gradient problems.",
                  "es": "La función sigmoide produce valores entre 0 y 1, haciéndola adecuada para interpretaciones probabilísticas y tareas de clasificación binaria, aunque puede sufrir problemas de gradiente que desaparece.",
                  "de": "Die Sigmoid-Funktion gibt Werte zwischen 0 und 1 aus, macht sie geeignet für probabilistische Interpretationen und binäre Klassifikationsaufgaben, obwohl sie unter verschwindenden Gradientenproblemen leiden kann.",
                  "nl": "De sigmoid functie geeft waarden tussen 0 en 1 uit, waardoor het geschikt is voor probabilistische interpretaties en binaire classificatietaken, hoewel het kan lijden onder verdwijnende gradiënt problemen."
        }
      },
      {
        question: {
                  "en": "What is the ReLU activation function and why is it popular?",
                  "es": "¿Qué es la función de activación ReLU y por qué es popular?",
                  "de": "Was ist die ReLU-Aktivierungsfunktion und warum ist sie beliebt?",
                  "nl": "Wat is de ReLU activatiefunctie en waarom is deze populair?"
        },
        options: [
        {
                  "en": "A function that reduces computation time only",
                  "es": "Una función que solo reduce el tiempo de computación",
                  "de": "Eine Funktion die nur die Rechenzeit reduziert",
                  "nl": "Een functie die alleen de rekentijd vermindert"
        },
        {
                  "en": "A function that makes all values positive",
                  "es": "Una función que hace todos los valores positivos",
                  "de": "Eine Funktion die alle Werte positiv macht",
                  "nl": "Een functie die alle waarden positief maakt"
        },
        {
                  "en": "Returns the input if positive, zero otherwise; popular because it's simple and helps avoid vanishing gradients",
                  "es": "Devuelve la entrada si es positiva, cero de lo contrario; popular porque es simple y ayuda a evitar gradientes que desaparecen",
                  "de": "Gibt die Eingabe zurück wenn positiv, sonst Null; beliebt weil sie einfach ist und hilft verschwindende Gradienten zu vermeiden",
                  "nl": "Geeft de input terug als positief, anders nul; populair omdat het simpel is en helpt verdwijnende gradiënten te vermijden"
        },
        {
                  "en": "A function that creates linear relationships",
                  "es": "Una función que crea relaciones lineales",
                  "de": "Eine Funktion die lineare Beziehungen erstellt",
                  "nl": "Een functie die lineaire relaties creëert"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "ReLU (Rectified Linear Unit) is computationally efficient and helps with gradient flow, making deep networks easier to train compared to sigmoid functions.",
                  "es": "ReLU (Unidad Lineal Rectificada) es computacionalmente eficiente y ayuda con el flujo de gradientes, haciendo las redes profundas más fáciles de entrenar comparado con funciones sigmoide.",
                  "de": "ReLU (Rectified Linear Unit) ist recheneffizient und hilft beim Gradientenfluss, macht tiefe Netzwerke einfacher zu trainieren verglichen mit Sigmoid-Funktionen.",
                  "nl": "ReLU (Rectified Linear Unit) is computationeel efficiënt en helpt met gradiëntenstroom, waardoor diepe netwerken makkelijker te trainen zijn vergeleken met sigmoid functies."
        }
      },
      {
        question: {
                  "en": "What is bias in neural networks?",
                  "es": "¿Qué es el sesgo en redes neuronales?",
                  "de": "Was ist Bias in neuronalen Netzwerken?",
                  "nl": "Wat is bias in neurale netwerken?"
        },
        options: [
        {
                  "en": "An additional parameter that allows the activation function to shift and provides more flexibility in learning",
                  "es": "Un parámetro adicional que permite que la función de activación se desplace y proporciona más flexibilidad en el aprendizaje",
                  "de": "Ein zusätzlicher Parameter der es der Aktivierungsfunktion ermöglicht sich zu verschieben und mehr Flexibilität beim Lernen bietet",
                  "nl": "Een extra parameter die de activatiefunctie laat verschuiven en meer flexibiliteit biedt in het leren"
        },
        {
                  "en": "Error in the neural network calculations",
                  "es": "Error en los cálculos de la red neuronal",
                  "de": "Fehler in den neuronalen Netzwerkberechnungen",
                  "nl": "Fout in de neurale netwerkberekeningen"
        },
        {
                  "en": "Unfair treatment of certain data pts",
                  "es": "Tratamiento injusto de ciertos puntos de datos",
                  "de": "Unfaire Behandlung bestimmter Datenpunkte",
                  "nl": "Oneerlijke behandeling van bepaalde datapunten"
        },
        {
                  "en": "Personal opinion of the neural network",
                  "es": "Opinión personal de la red neuronal",
                  "de": "Persönliche Meinung des neuronalen Netzwerks",
                  "nl": "Persoonlijke mening van het neurale netwerk"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Bias terms allow neurons to activate even when all inputs are zero, providing additional degrees of freedom that help the network learn more complex patterns and improve fitting capability.",
                  "es": "Los términos de sesgo permiten que las neuronas se activen incluso cuando todas las entradas son cero, proporcionando grados adicionales de libertad que ayudan a la red a aprender patrones más complejos y mejorar la capacidad de ajuste.",
                  "de": "Bias-Terme ermöglichen es Neuronen zu aktivieren auch wenn alle Eingaben Null sind, bieten zusätzliche Freiheitsgrade die dem Netzwerk helfen komplexere Muster zu lernen und die Anpassungsfähigkeit zu verbessern.",
                  "nl": "Bias termen stellen neuronen in staat om te activeren zelfs wanneer alle inputs nul zijn, bieden extra vrijheidsgraden die het netwerk helpen complexere patronen te leren en aanpassingsvermogen te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is the difference between supervised and unsupervised learning in deep learning?",
                  "es": "¿Cuál es la diferencia entre aprendizaje supervisado y no supervisado en aprendizaje profundo?",
                  "de": "Was ist der Unterschied zwischen überwachtem und unüberwachtem Lernen in Deep Learning?",
                  "nl": "Wat is het verschil tussen supervised en unsupervised learning in deep learning?"
        },
        options: [
        {
                  "en": "Supervised learning uses labeled data to learn mappings, while unsupervised learning finds patterns in unlabeled data",
                  "es": "Aprendizaje supervisado usa datos etiquetados para aprender mapeos, mientras aprendizaje no supervisado encuentra patrones en datos no etiquetados",
                  "de": "Überwachtes Lernen verwendet beschriftete Daten um Zuordnungen zu lernen, unüberwachtes Lernen findet Muster in unbeschrifteten Daten",
                  "nl": "Supervised learning gebruikt gelabelde data om mappings te leren, terwijl unsupervised learning patronen vindt in ongelabelde data"
        },
        {
                  "en": "Supervised learning requires a teacher, unsupervised doesn't",
                  "es": "El aprendizaje supervisado requiere un maestro, el no supervisado no",
                  "de": "Überwachtes Lernen benötigt einen Lehrer, unüberwachtes nicht",
                  "nl": "Supervised learning vereist een leraar, unsupervised niet"
        },
        {
                  "en": "They are the same in deep learning",
                  "es": "Son lo mismo en aprendizaje profundo",
                  "de": "Sie sind dasselbe in Deep Learning",
                  "nl": "Ze zijn hetzelfde in deep learning"
        },
        {
                  "en": "Supervised learning is faster than unsupervised learning",
                  "es": "El aprendizaje supervisado es más rápido que el aprendizaje no supervisado",
                  "de": "Überwachtes Lernen ist schneller als unüberwachtes Lernen",
                  "nl": "Supervised learning is sneller dan unsupervised learning"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Supervised learning trains on input-output pairs to learn predictive relationships, while unsupervised learning discovers hidden structures, clusters, or representations without target labels.",
                  "es": "El aprendizaje supervisado entrena con pares entrada-salida para aprender relaciones predictivas, mientras que el aprendizaje no supervisado descubre estructuras ocultas, clusters o representaciones sin etiquetas objetivo.",
                  "de": "Überwachtes Lernen trainiert auf Eingabe-Ausgabe-Paaren um prädiktive Beziehungen zu lernen, während unüberwachtes Lernen versteckte Strukturen, Cluster oder Repräsentationen ohne Zieletiketten entdeckt.",
                  "nl": "Supervised learning traint op input-output paren om voorspellende relaties te leren, terwijl unsupervised learning verborgen structuren, clusters of representaties ontdekt zonder doellabels."
        }
      },
      {
        question: {
                  "en": "What is forward propagation in a neural network?",
                  "es": "¿Qué es la propagación hacia adelante en una red neuronal?",
                  "de": "Was ist Vorwärtspropagation in einem neuronalen Netzwerk?",
                  "nl": "Wat is forward propagation in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "The process of passing input data through the network layers to generate an output prediction",
                  "es": "El proceso de pasar datos de entrada a través de las capas de la red para generar una predicción de salida",
                  "de": "Der Prozess Eingabedaten durch die Netzwerkschichten zu leiten um eine Ausgabevorhersage zu generieren",
                  "nl": "Het proces van het doorgeven van inputdata door de netwerklagen om een outputvoorspelling te genereren"
        },
        {
                  "en": "Sending data to the next computer",
                  "es": "Enviar datos a la siguiente computadora",
                  "de": "Daten an den nächsten Computer senden",
                  "nl": "Data verzenden naar de volgende computer"
        },
        {
                  "en": "Moving the network forward in time",
                  "es": "Mover la red hacia adelante en el tiempo",
                  "de": "Das Netzwerk in der Zeit vorwärts bewegen",
                  "nl": "Het netwerk vooruit bewegen in tijd"
        },
        {
                  "en": "Promoting the network to a higher level",
                  "es": "Promover la red a un nivel superior",
                  "de": "Das Netzwerk auf eine höhere Ebene befördern",
                  "nl": "Het netwerk promoveren naar een hoger niveau"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Forward propagation is the inference phase where data flows from input to output layers, with each layer applying weights, biases, and activation functions to transform the data progressively.",
                  "es": "La propagación hacia adelante es la fase de inferencia donde los datos fluyen desde capas de entrada hasta capas de salida, con cada capa aplicando pesos, sesgos y funciones de activación para transformar los datos progresivamente.",
                  "de": "Vorwärtspropagation ist die Inferenzphase wo Daten von Eingabe- zu Ausgabeschichten fließen, wobei jede Schicht Gewichte, Biases und Aktivierungsfunktionen anwendet um die Daten progressiv zu transformieren.",
                  "nl": "Forward propagation is de inferentiefase waarbij data van input naar output lagen stroomt, waarbij elke laag gewichten, biases en activatiefuncties toepast om de data progressief te transformeren."
        }
      },
      {
        question: {
                  "en": "What is an epoch in neural network training?",
                  "es": "¿Qué es una época en entrenamiento de redes neuronales?",
                  "de": "Was ist eine Epoche im neuronalen Netzwerktraining?",
                  "nl": "Wat is een epoch in neurale netwerktraining?"
        },
        options: [
        {
                  "en": "One complete pass through the entire training dataset during the learning process",
                  "es": "Un pase completo a través de todo el conjunto de datos de entrenamiento durante el proceso de aprendizaje",
                  "de": "Ein vollständiger Durchgang durch den gesamten Trainingsdatensatz während des Lernprozesses",
                  "nl": "Een complete doorgang door de gehele trainingsdataset tijdens het leerproces"
        },
        {
                  "en": "A historical period in AI development",
                  "es": "Un período histórico en el desarrollo de IA",
                  "de": "Eine historische Periode in der KI-Entwicklung",
                  "nl": "Een historische periode in AI ontwikkeling"
        },
        {
                  "en": "A specific layer in the network",
                  "es": "Una capa específica en la red",
                  "de": "Eine spezifische Schicht im Netzwerk",
                  "nl": "Een specifieke laag in het netwerk"
        },
        {
                  "en": "The time it takes to train a network",
                  "es": "El tiempo que toma entrenar una red",
                  "de": "Die Zeit die es braucht ein Netzwerk zu trainieren",
                  "nl": "De tijd die het kost om een netwerk te trainen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "An epoch represents one full training cycle where the model has seen every example in the training set once, helping track training progress and convergence.",
                  "es": "Una época representa un ciclo de entrenamiento completo donde el modelo ha visto cada ejemplo en el conjunto de entrenamiento una vez, ayudando a rastrear el progreso del entrenamiento y convergencia.",
                  "de": "Eine Epoche repräsentiert einen vollständigen Trainingszyklus wo das Modell jedes Beispiel im Trainingsset einmal gesehen hat, hilft Trainingsfortschritt und Konvergenz zu verfolgen.",
                  "nl": "Een epoch vertegenwoordigt een volledige trainingscyclus waarbij het model elk voorbeeld in de trainingsset eenmaal heeft gezien, helpt trainingsvoortgang en convergentie te volgen."
        }
      },
      {
        question: {
                  "en": "What is overfitting in neural networks?",
                  "es": "¿Qué es el sobreajuste en redes neuronales?",
                  "de": "Was ist Overfitting in neuronalen Netzwerken?",
                  "nl": "Wat is overfitting in neurale netwerken?"
        },
        options: [
        {
                  "en": "When a model learns the training data too well and fails to generalize to new, unseen data",
                  "es": "Cuando un modelo aprende los datos de entrenamiento demasiado bien y falla en generalizar a datos nuevos no vistos",
                  "de": "Wenn ein Modell die Trainingsdaten zu gut lernt und versagt bei der Generalisierung auf neue, ungesehene Daten",
                  "nl": "Wanneer een model de trainingsdata te goed leert en faalt om te generaliseren naar nieuwe, ongeziene data"
        },
        {
                  "en": "When training takes too long",
                  "es": "Cuando el entrenamiento toma demasiado tiempo",
                  "de": "Wenn das Training zu lange dauert",
                  "nl": "Wanneer training te lang duurt"
        },
        {
                  "en": "When the model fits perfectly on all data",
                  "es": "Cuando el modelo se ajusta perfectamente a todos los datos",
                  "de": "Wenn das Modell perfekt auf alle Daten passt",
                  "nl": "Wanneer het model perfect past op alle data"
        },
        {
                  "en": "When a model is too big for the available memory",
                  "es": "Cuando un modelo es demasiado grande para la memoria disponible",
                  "de": "Wenn ein Modell zu groß für den verfügbaren Speicher ist",
                  "nl": "Wanneer een model te groot is voor het beschikbare geheugen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Overfitting occurs when a model memorizes training data rather than learning general patterns, resulting in poor performance on test data despite excellent training accuracy.",
                  "es": "El sobreajuste ocurre cuando un modelo memoriza datos de entrenamiento en lugar de aprender patrones generales, resultando en mal rendimiento en datos de prueba a pesar de excelente precisión de entrenamiento.",
                  "de": "Overfitting tritt auf wenn ein Modell Trainingsdaten memoriert anstatt allgemeine Muster zu lernen, resultiert in schlechter Leistung auf Testdaten trotz exzellenter Trainingsgenauigkeit.",
                  "nl": "Overfitting treedt op wanneer een model trainingsdata memoriseert in plaats van algemene patronen te leren, resulteert in slechte prestaties op testdata ondanks uitstekende trainingsnauwkeurigheid."
        }
      },
      {
        question: {
                  "en": "What is the purpose of splitting data into training, validation, and test sets?",
                  "es": "¿Cuál es el propósito de dividir datos en conjuntos de entrenamiento, validación y prueba?",
                  "de": "Was ist der Zweck der Aufteilung von Daten in Trainings-, Validierungs- und Testsets?",
                  "nl": "Wat is het doel van het opsplitsen van data in training, validatie en test sets?"
        },
        options: [
        {
                  "en": "To make the dataset smaller and easier to handle",
                  "es": "Para hacer el conjunto de datos más pequeño y fácil de manejar",
                  "de": "Um den Datensatz kleiner und einfacher zu handhaben zu machen",
                  "nl": "Om de dataset kleiner en makkelijker hanteerbaar te maken"
        },
        {
                  "en": "To train the model, tune hyperparameters, and evaluate final performance on truly unseen data",
                  "es": "Para entrenar el modelo, ajustar hiperparámetros y evaluar el rendimiento final en datos verdaderamente no vistos",
                  "de": "Um das Modell zu trainieren, Hyperparameter zu optimieren und finale Leistung auf wirklich ungesehenen Daten zu bewerten",
                  "nl": "Om het model te trainen, hyperparameters af te stellen en finale prestaties te evalueren op echt ongeziene data"
        },
        {
                  "en": "To run three different training processes",
                  "es": "Para ejecutar tres procesos de entrenamiento diferentes",
                  "de": "Um drei verschiedene Trainingsprozesse auszuführen",
                  "nl": "Om drie verschillende trainingsprocessen uit te voeren"
        },
        {
                  "en": "To separate different types of data",
                  "es": "Para separar diferentes tipos de datos",
                  "de": "Um verschiedene Datentypen zu trennen",
                  "nl": "Om verschillende soorten data te scheiden"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "This separation ensures unbiased model evaluation: training set builds the model, validation set guides hyperparameter selection, and test set provides final performance assessment.",
                  "es": "Esta separación asegura evaluación imparcial del modelo: conjunto de entrenamiento construye el modelo, conjunto de validación guía selección de hiperparámetros, y conjunto de prueba proporciona evaluación final de rendimiento.",
                  "de": "Diese Trennung gewährleistet unvoreingenommene Modellbewertung: Trainingsset baut das Modell, Validierungsset leitet Hyperparameter-Auswahl, und Testset bietet finale Leistungsbewertung.",
                  "nl": "Deze scheiding zorgt voor onbevooroordeelde modelevaluatie: trainingsset bouwt het model, validatieset stuurt hyperparameter selectie, en testset biedt finale prestatiebeoordeling."
        }
      },
      {
        question: {
                  "en": "What is the universal approximation theorem in neural networks?",
                  "es": "¿Qué es el teorema de aproximación universal en redes neuronales?",
                  "de": "Was ist das universelle Approximationstheorem in neuronalen Netzwerken?",
                  "nl": "Wat is het universele approximatie theorema in neurale netwerken?"
        },
        options: [
        {
                  "en": "A theorem about network connectivity",
                  "es": "Un teorema sobre conectividad de red",
                  "de": "Ein Theorem über Netzwerkkonnektivität",
                  "nl": "Een theorema over netwerkconnectiviteit"
        },
        {
                  "en": "A theorem stating that neural networks with sufficient neurons can approximate any continuous function to arbitrary precision",
                  "es": "Un teorema que establece que redes neuronales con suficientes neuronas pueden aproximar cualquier función continua con precisión arbitraria",
                  "de": "Ein Theorem dass neuronale Netzwerke mit ausreichend Neuronen jede kontinuierliche Funktion mit beliebiger Genauigkeit approximieren können",
                  "nl": "Een theorema dat stelt dat neurale netwerken met voldoende neuronen elke continue functie kunnen benaderen met willekeurige precisie"
        },
        {
                  "en": "A universal standard for all neural networks",
                  "es": "Un estándar universal para todas las redes neuronales",
                  "de": "Ein universeller Standard für alle neuronalen Netzwerke",
                  "nl": "Een universele standaard voor alle neurale netwerken"
        },
        {
                  "en": "A method for approximating the training time",
                  "es": "Un método para aproximar el tiempo de entrenamiento",
                  "de": "Eine Methode zur Approximation der Trainingszeit",
                  "nl": "Een methode voor het benaderen van de trainingstijd"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "This fundamental theorem provides theoretical foundation for neural networks' power, showing that feedforward networks can theoretically learn any mapping, though it doesn't guarantee efficient learning.",
                  "es": "Este teorema fundamental proporciona base teórica para el poder de las redes neuronales, mostrando que redes feedforward pueden teóricamente aprender cualquier mapeo, aunque no garantiza aprendizaje eficiente.",
                  "de": "Dieses fundamentale Theorem bietet theoretische Grundlage für die Macht neuronaler Netzwerke, zeigt dass Feedforward-Netzwerke theoretisch jede Zuordnung lernen können, garantiert aber kein effizientes Lernen.",
                  "nl": "Dit fundamentele theorema biedt theoretische basis voor de kracht van neurale netwerken, toont dat feedforward netwerken theoretisch elke mapping kunnen leren, hoewel het geen efficiënt leren garandeert."
        }
      },
      {
        question: {
                  "en": "What is the difference between parameters and hyperparameters in neural networks?",
                  "es": "¿Cuál es la diferencia entre parámetros e hiperparámetros en redes neuronales?",
                  "de": "Was ist der Unterschied zwischen Parametern und Hyperparametern in neuronalen Netzwerken?",
                  "nl": "Wat is het verschil tussen parameters en hyperparameters in neurale netwerken?"
        },
        options: [
        {
                  "en": "They are the same thing with different names",
                  "es": "Son lo mismo con nombres diferentes",
                  "de": "Sie sind dasselbe mit verschiedenen Namen",
                  "nl": "Het zijn hetzelfde met verschillende namen"
        },
        {
                  "en": "Parameters are more important than hyperparameters",
                  "es": "Los parámetros son más importantes que los hiperparámetros",
                  "de": "Parameter sind wichtiger als Hyperparameter",
                  "nl": "Parameters zijn belangrijker dan hyperparameters"
        },
        {
                  "en": "Parameters are learned during training (weights, biases), while hyperparameters are set before training (learning rate, architecture)",
                  "es": "Parámetros se aprenden durante entrenamiento (pesos, sesgos), mientras hiperparámetros se establecen antes (tasa aprendizaje, arquitectura)",
                  "de": "Parameter werden während Trainings gelernt (Gewichte, Biases), Hyperparameter vor Training gesetzt (Lernrate, Architektur)",
                  "nl": "Parameters worden geleerd tijdens training (gewichten, biases), hyperparameters worden ingesteld voor training (learning rate, architectuur)"
        },
        {
                  "en": "Hyperparameters are mathematical, parameters are not",
                  "es": "Los hiperparámetros son matemáticos, los parámetros no",
                  "de": "Hyperparameter sind mathematisch, Parameter nicht",
                  "nl": "Hyperparameters zijn wiskundig, parameters niet"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Parameters are internal model weights updated through training algorithms, while hyperparameters are external configuration choices that control the learning process and model architecture.",
                  "es": "Los parámetros son pesos internos del modelo actualizados a través de algoritmos de entrenamiento, mientras que los hiperparámetros son opciones de configuración externas que controlan el proceso de aprendizaje y arquitectura del modelo.",
                  "de": "Parameter sind interne Modellgewichte die durch Trainingsalgorithmen aktualisiert werden, während Hyperparameter externe Konfigurationswahlen sind die den Lernprozess und die Modellarchitektur kontrollieren.",
                  "nl": "Parameters zijn interne modelgewichten bijgewerkt door trainingsalgoritmes, terwijl hyperparameters externe configuratiekeuzes zijn die het leerproces en modelarchitectuur controleren."
        }
      },
      {
        question: {
                  "en": "What is batch size in neural network training?",
                  "es": "¿Qué es el tamaño de lote en entrenamiento de redes neuronales?",
                  "de": "Was ist Batch-Größe im neuronalen Netzwerktraining?",
                  "nl": "Wat is batch size in neurale netwerktraining?"
        },
        options: [
        {
                  "en": "How many batches fit in memory",
                  "es": "Cuántos lotes caben en memoria",
                  "de": "Wie viele Stapel in den Speicher passen",
                  "nl": "Hoeveel batches in het geheugen passen"
        },
        {
                  "en": "The total number of training examples",
                  "es": "El número total de ejemplos de entrenamiento",
                  "de": "Die Gesamtanzahl der Trainingsbeispiele",
                  "nl": "Het totale aantal trainingsvoorbeelden"
        },
        {
                  "en": "The number of training examples processed together before updating model weights",
                  "es": "El número de ejemplos de entrenamiento procesados juntos antes de actualizar pesos del modelo",
                  "de": "Die Anzahl der Trainingsbeispiele die zusammen verarbeitet werden bevor Modellgewichte aktualisiert werden",
                  "nl": "Het aantal trainingsvoorbeelden dat samen verwerkt wordt voordat modelgewichten worden bijgewerkt"
        },
        {
                  "en": "The size of the neural network layers",
                  "es": "El tamaño de las capas de la red neuronal",
                  "de": "Die Größe der neuronalen Netzwerkschichten",
                  "nl": "De grootte van de neurale netwerklagen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Batch size affects training stability and computational efficiency: larger batches provide stable gradients but require more memory, while smaller batches offer regularization but noisier gradients.",
                  "es": "El tamaño de lote afecta la estabilidad del entrenamiento y eficiencia computacional: lotes más grandes proporcionan gradientes estables pero requieren más memoria, mientras que lotes más pequeños ofrecen regularización pero gradientes más ruidosos.",
                  "de": "Batch-Größe beeinflusst Trainingsstabilität und Recheneffizienz: größere Batches bieten stabile Gradienten aber benötigen mehr Speicher, während kleinere Batches Regularisierung bieten aber rauschigere Gradienten.",
                  "nl": "Batch size beïnvloedt trainingsstabiliteit en computationele efficiëntie: grotere batches bieden stabiele gradiënten maar vereisen meer geheugen, terwijl kleinere batches regularisatie bieden maar ruiziger gradiënten."
        }
      },
      {
        question: {
                  "en": "What is the vanishing gradient problem in deep neural networks?",
                  "es": "¿Qué es el problema del gradiente que desaparece en redes neuronales profundas?",
                  "de": "Was ist das Problem der verschwindenden Gradienten in tiefen neuronalen Netzwerken?",
                  "nl": "Wat is het verdwijnende gradiënt probleem in diepe neurale netwerken?"
        },
        options: [
        {
                  "en": "Training data gradually vanishes during processing",
                  "es": "Los datos de entrenamiento desaparecen gradualmente durante el procesamiento",
                  "de": "Trainingsdaten verschwinden allmählich während der Verarbeitung",
                  "nl": "Trainingsdata verdwijnt geleidelijk tijdens verwerking"
        },
        {
                  "en": "Gradients disappear from computer memory",
                  "es": "Los gradientes desaparecen de la memoria de la computadora",
                  "de": "Gradienten verschwinden aus dem Computerspeicher",
                  "nl": "Gradiënten verdwijnen uit computergeheugen"
        },
        {
                  "en": "The gradient calculation becomes invisible",
                  "es": "El cálculo del gradiente se vuelve invisible",
                  "de": "Die Gradientenberechnung wird unsichtbar",
                  "nl": "De gradiëntberekening wordt onzichtbaar"
        },
        {
                  "en": "Gradients become extremely small in early layers, making learning slow or impossible",
                  "es": "Los gradientes se vuelven extremadamente pequeños en capas tempranas, haciendo el aprendizaje lento o imposible",
                  "de": "Gradienten werden extrem klein in frühen Schichten, machen Lernen langsam oder unmöglich",
                  "nl": "Gradiënten worden extreem klein in vroege lagen, waardoor leren langzaam of onmogelijk wordt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "As gradients are backpropagated through many layers, they can become exponentially smaller due to repeated multiplication with small weights, preventing effective learning in deeper layers.",
                  "es": "Mientras los gradientes se retropropagan a través de muchas capas, pueden volverse exponencialmente más pequeños debido a multiplicación repetida con pesos pequeños, previniendo aprendizaje efectivo en capas más profundas.",
                  "de": "Während Gradienten durch viele Schichten rückpropagiert werden, können sie exponentiell kleiner werden aufgrund wiederholter Multiplikation mit kleinen Gewichten, verhindert effektives Lernen in tieferen Schichten.",
                  "nl": "Terwijl gradiënten door veel lagen worden terugpropageerd, kunnen ze exponentieel kleiner worden door herhaalde vermenigvuldiging met kleine gewichten, waardoor effectief leren in diepere lagen wordt voorkomen."
        }
      },
      {
        question: {
                  "en": "What is the sigmoid activation function?",
                  "es": "¿Qué es la función de activación sigmoide?",
                  "de": "Was ist die Sigmoid-Aktivierungsfunktion?",
                  "nl": "Wat is de sigmoid activatiefunctie?"
        },
        options: [
        {
                  "en": "A Greek mathematical function",
                  "es": "Una función matemática griega",
                  "de": "Eine griechische mathematische Funktion",
                  "nl": "Een Griekse wiskundige functie"
        },
        {
                  "en": "A function that maps input to values between 0 and 1",
                  "es": "Una función que mapea entrada a valores entre 0 y 1",
                  "de": "Eine Funktion die Eingaben auf Werte zwischen 0 und 1 abbildet",
                  "nl": "Een functie die input afbeeldt op waarden tussen 0 en 1"
        },
        {
                  "en": "A function for image processing",
                  "es": "Una función para procesamiento de imágenes",
                  "de": "Eine Funktion für Bildverarbeitung",
                  "nl": "Een functie voor beeldverwerking"
        },
        {
                  "en": "A function that creates S-shaped curves in graphs",
                  "es": "Una función que crea curvas en forma de S en gráficos",
                  "de": "Eine Funktion die S-förmige Kurven in Grafiken erstellt",
                  "nl": "Een functie die S-vormige krommen in grafieken maakt"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The sigmoid function σ(x) = 1/(1+e^(-x)) outputs values between 0 and 1, making it useful for binary classification, though it can cause vanishing gradients.",
                  "es": "La función sigmoide σ(x) = 1/(1+e^(-x)) produce valores entre 0 y 1, haciéndola útil para clasificación binaria, aunque puede causar gradientes que desaparecen.",
                  "de": "Die Sigmoidfunktion σ(x) = 1/(1+e^(-x)) gibt Werte zwischen 0 und 1 aus, macht sie nützlich für binäre Klassifikation, kann aber verschwindende Gradienten verursachen.",
                  "nl": "De sigmoid functie σ(x) = 1/(1+e^(-x)) geeft waarden tussen 0 en 1, maakt het nuttig voor binaire classificatie, hoewel het verdwijnende gradiënten kan veroorzaken."
        }
      },
      {
        question: {
                  "en": "What is the ReLU activation function?",
                  "es": "¿Qué es la función de activación ReLU?",
                  "de": "Was ist die ReLU-Aktivierungsfunktion?",
                  "nl": "Wat is de ReLU activatiefunctie?"
        },
        options: [
        {
                  "en": "A function that outputs max(0, x), blocking negative values",
                  "es": "Una función que produce max(0, x), bloqueando valores negativos",
                  "de": "Eine Funktion die max(0, x) ausgibt, blockiert negative Werte",
                  "nl": "Een functie die max(0, x) uitvoert, blokkeert negatieve waarden"
        },
        {
                  "en": "A recursive loop function",
                  "es": "Una función de bucle recursivo",
                  "de": "Eine rekursive Schleifenfunktion",
                  "nl": "Een recursieve lus functie"
        },
        {
                  "en": "A function for real-time updates",
                  "es": "Una función para actualizaciones en tiempo real",
                  "de": "Eine Funktion für Echtzeit-Updates",
                  "nl": "Een functie voor realtime updates"
        },
        {
                  "en": "A relative error function",
                  "es": "Una función de error relativo",
                  "de": "Eine relative Fehlerfunktion",
                  "nl": "Een relatieve foutfunctie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "ReLU (Rectified Linear Unit) is f(x) = max(0, x), simple and computationally efficient, helping avoid vanishing gradients and now the most popular activation function.",
                  "es": "ReLU (Unidad Lineal Rectificada) es f(x) = max(0, x), simple y computacionalmente eficiente, ayuda evitar gradientes que desaparecen y ahora la función de activación más popular.",
                  "de": "ReLU (Rectified Linear Unit) ist f(x) = max(0, x), einfach und rechnerisch effizient, hilft verschwindende Gradienten zu vermeiden und ist jetzt die beliebteste Aktivierungsfunktion.",
                  "nl": "ReLU (Rectified Linear Unit) is f(x) = max(0, x), simpel en computationeel efficiënt, helpt verdwijnende gradiënten vermijden en nu de populairste activatiefunctie."
        }
      },
      {
        question: {
                  "en": "What is dropout in neural networks?",
                  "es": "¿Qué es dropout en redes neuronales?",
                  "de": "Was ist Dropout in neuronalen Netzwerken?",
                  "nl": "Wat is dropout in neurale netwerken?"
        },
        options: [
        {
                  "en": "Removing poorly performing neurons permanently",
                  "es": "Eliminar permanentemente neuronas de bajo rendimiento",
                  "de": "Dauerhaftes Entfernen schlecht performender Neuronen",
                  "nl": "Permanent verwijderen van slecht presterende neuronen"
        },
        {
                  "en": "Network disconnection during training",
                  "es": "Desconexión de red durante entrenamiento",
                  "de": "Netzwerkverbindungsabbruch während Training",
                  "nl": "Netwerkverbinding verbreken tijdens training"
        },
        {
                  "en": "Students leaving neural network courses",
                  "es": "Estudiantes abandonando cursos de redes neuronales",
                  "de": "Studenten die neuronale Netzwerk-Kurse verlassen",
                  "nl": "Studenten die neurale netwerk cursussen verlaten"
        },
        {
                  "en": "Randomly deactivating neurons during training to prevent overfitting",
                  "es": "Desactivar aleatoriamente neuronas durante entrenamiento para prevenir sobreajuste",
                  "de": "Zufälliges Deaktivieren von Neuronen während Training um Überanpassung zu verhindern",
                  "nl": "Willekeurig deactiveren van neuronen tijdens training om overfitting te voorkomen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dropout randomly sets a fraction of neurons to zero during each training iteration, forcing the network to learn redundant representations and improving generalization.",
                  "es": "Dropout aleatoriamente establece una fracción de neuronas a cero durante cada iteración de entrenamiento, forzando la red a aprender representaciones redundantes y mejorando generalización.",
                  "de": "Dropout setzt zufällig einen Teil der Neuronen während jeder Trainingsiteration auf null, zwingt das Netzwerk redundante Repräsentationen zu lernen und verbessert Generalisierung.",
                  "nl": "Dropout zet willekeurig een fractie van neuronen op nul tijdens elke trainingiteratie, dwingt het netwerk redundante representaties te leren en verbetert generalisatie."
        }
      },
      {
        question: {
                  "en": "What is the learning rate in neural network training?",
                  "es": "¿Qué es la tasa de aprendizaje en entrenamiento de redes neuronales?",
                  "de": "Was ist die Lernrate im neuronalen Netzwerktraining?",
                  "nl": "Wat is de learning rate in neurale netwerktraining?"
        },
        options: [
        {
                  "en": "The speed of data processing",
                  "es": "La velocidad de procesamiento de datos",
                  "de": "Die Geschwindigkeit der Datenverarbeitung",
                  "nl": "De snelheid van dataverwerking"
        },
        {
                  "en": "A hyperparameter controlling the step size when updating weights",
                  "es": "Un hiperparámetro que controla el tamaño del paso al actualizar pesos",
                  "de": "Ein Hyperparameter der die Schrittgröße beim Aktualisieren von Gewichten kontrolliert",
                  "nl": "Een hyperparameter die de stapgrootte controleert bij het bijwerken van gewichten"
        },
        {
                  "en": "How fast the neural network learns new tasks",
                  "es": "Qué tan rápido la red neuronal aprende nuevas tareas",
                  "de": "Wie schnell das neuronale Netzwerk neue Aufgaben lernt",
                  "nl": "Hoe snel het neurale netwerk nieuwe taken leert"
        },
        {
                  "en": "How many examples the network learns per second",
                  "es": "Cuántos ejemplos aprende la red por segundo",
                  "de": "Wie viele Beispiele das Netzwerk pro Sekunde lernt",
                  "nl": "Hoeveel voorbeelden het netwerk per seconde leert"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Learning rate determines how much to adjust weights in response to error: too high causes instability, too low makes training slow, often set between 0.001 and 0.1.",
                  "es": "La tasa de aprendizaje determina cuánto ajustar pesos en respuesta al error: muy alta causa inestabilidad, muy baja hace entrenamiento lento, a menudo entre 0.001 y 0.1.",
                  "de": "Lernrate bestimmt wie viel Gewichte als Antwort auf Fehler angepasst werden: zu hoch verursacht Instabilität, zu niedrig macht Training langsam, oft zwischen 0.001 und 0.1.",
                  "nl": "Learning rate bepaalt hoeveel gewichten aangepast moeten worden als reactie op fouten: te hoog veroorzaakt instabiliteit, te laag maakt training langzaam, vaak tussen 0.001 en 0.1."
        }
      },
      {
        question: {
                  "en": "What is an optimizer in deep learning?",
                  "es": "¿Qué es un optimizador en aprendizaje profundo?",
                  "de": "Was ist ein Optimierer in Deep Learning?",
                  "nl": "Wat is een optimizer in deep learning?"
        },
        options: [
        {
                  "en": "A program that reduces network size",
                  "es": "Un programa que reduce tamaño de red",
                  "de": "Ein Programm das Netzwerkgröße reduziert",
                  "nl": "Een programma dat netwerkgrootte verkleint"
        },
        {
                  "en": "A tool that optimizes code performance",
                  "es": "Una herramienta que optimiza rendimiento de código",
                  "de": "Ein Werkzeug das Code-Performance optimiert",
                  "nl": "Een tool die codeprestaties optimaliseert"
        },
        {
                  "en": "An algorithm that updates network weights to minimize the loss function",
                  "es": "Un algoritmo que actualiza pesos de red para minimizar la función de pérdida",
                  "de": "Ein Algorithmus der Netzwerkgewichte aktualisiert um die Verlustfunktion zu minimieren",
                  "nl": "Een algoritme dat netwerkgewichten bijwerkt om de verliesfunctie te minimaliseren"
        },
        {
                  "en": "Software for hardware optimization",
                  "es": "Software para optimización de hardware",
                  "de": "Software für Hardware-Optimierung",
                  "nl": "Software voor hardware optimalisatie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Optimizers like SGD, Adam, and RMSprop use gradients to iteratively adjust weights, each with different strategies for speed, stability, and convergence.",
                  "es": "Optimizadores como SGD, Adam y RMSprop usan gradientes para ajustar iterativamente pesos, cada uno con diferentes estrategias para velocidad, estabilidad y convergencia.",
                  "de": "Optimierer wie SGD, Adam und RMSprop verwenden Gradienten um iterativ Gewichte anzupassen, jeder mit verschiedenen Strategien für Geschwindigkeit, Stabilität und Konvergenz.",
                  "nl": "Optimizers zoals SGD, Adam en RMSprop gebruiken gradiënten om iteratief gewichten aan te passen, elk met verschillende strategieën voor snelheid, stabiliteit en convergentie."
        }
      },
      {
        question: {
                  "en": "What is stochastic gradient descent (SGD)?",
                  "es": "¿Qué es el descenso de gradiente estocástico (SGD)?",
                  "de": "Was ist stochastischer Gradientenabstieg (SGD)?",
                  "nl": "Wat is stochastic gradient descent (SGD)?"
        },
        options: [
        {
                  "en": "An optimization algorithm that updates weights using random subsets of training data",
                  "es": "Un algoritmo de optimización que actualiza pesos usando subconjuntos aleatorios de datos de entrenamiento",
                  "de": "Ein Optimierungsalgorithmus der Gewichte mit zufälligen Teilmengen von Trainingsdaten aktualisiert",
                  "nl": "Een optimalisatie-algoritme dat gewichten bijwerkt met willekeurige subsets van trainingsdata"
        },
        {
                  "en": "A statistical technique for descent analysis",
                  "es": "Una técnica estadística para análisis de descenso",
                  "de": "Eine statistische Technik für Abstiegsanalyse",
                  "nl": "Een statistische techniek voor daalanalyse"
        },
        {
                  "en": "A method for random initialization",
                  "es": "Un método para inicialización aleatoria",
                  "de": "Eine Methode für zufällige Initialisierung",
                  "nl": "Een methode voor willekeurige initialisatie"
        },
        {
                  "en": "Gradient descent with uncertain outcomes",
                  "es": "Descenso de gradiente con resultados inciertos",
                  "de": "Gradientenabstieg mit unsicheren Ergebnissen",
                  "nl": "Gradient descent met onzekere resultaten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "SGD updates weights using mini-batches rather than the entire dataset, providing faster iterations with some noise that can help escape local minima.",
                  "es": "SGD actualiza pesos usando mini-lotes en lugar del conjunto de datos completo, proporcionando iteraciones más rápidas con algo de ruido que puede ayudar a escapar mínimos locales.",
                  "de": "SGD aktualisiert Gewichte mit Mini-Batches statt dem gesamten Datensatz, bietet schnellere Iterationen mit etwas Rauschen das helfen kann lokale Minima zu entkommen.",
                  "nl": "SGD werkt gewichten bij met mini-batches in plaats van de hele dataset, biedt snellere iteraties met wat ruis die kan helpen lokale minima te ontsnappen."
        }
      },
      {
        question: {
                  "en": "What is Adam optimizer?",
                  "es": "¿Qué es el optimizador Adam?",
                  "de": "Was ist der Adam-Optimierer?",
                  "nl": "Wat is Adam optimizer?"
        },
        options: [
        {
                  "en": "An advanced data management tool",
                  "es": "Una herramienta avanzada de gestión de datos",
                  "de": "Ein fortgeschrittenes Datenverwaltungswerkzeug",
                  "nl": "Een geavanceerde data management tool"
        },
        {
                  "en": "A basic optimization algorithm",
                  "es": "Un algoritmo de optimización básico",
                  "de": "Ein grundlegender Optimierungsalgorithmus",
                  "nl": "Een basis optimalisatie-algoritme"
        },
        {
                  "en": "An adaptive learning rate optimizer combining momentum and RMSprop",
                  "es": "Un optimizador de tasa de aprendizaje adaptativa que combina momentum y RMSprop",
                  "de": "Ein adaptiver Lernraten-Optimierer der Momentum und RMSprop kombiniert",
                  "nl": "Een adaptieve learning rate optimizer die momentum en RMSprop combineert"
        },
        {
                  "en": "An optimizer named after its creator Adam",
                  "es": "Un optimizador nombrado por su creador Adam",
                  "de": "Ein Optimierer benannt nach seinem Schöpfer Adam",
                  "nl": "Een optimizer vernoemd naar zijn maker Adam"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Adam (Adaptive Moment Estimation) maintains per-parameter learning rates adapted based on first and second moments of gradients, making it robust and widely used.",
                  "es": "Adam (Estimación de Momento Adaptativo) mantiene tasas de aprendizaje por parámetro adaptadas basándose en primeros y segundos momentos de gradientes, haciéndolo robusto y ampliamente usado.",
                  "de": "Adam (Adaptive Moment Estimation) erhält Parameter-spezifische Lernraten angepasst basierend auf ersten und zweiten Momenten von Gradienten, macht es robust und weit verbreitet.",
                  "nl": "Adam (Adaptive Moment Estimation) onderhoudt per-parameter learning rates aangepast op basis van eerste en tweede momenten van gradiënten, maakt het robuust en veel gebruikt."
        }
      },
      {
        question: {
                  "en": "What is a convolutional layer in CNNs?",
                  "es": "¿Qué es una capa convolucional en CNN?",
                  "de": "Was ist eine Faltungsschicht in CNNs?",
                  "nl": "Wat is een convolutionele laag in CNN's?"
        },
        options: [
        {
                  "en": "A layer for data compression",
                  "es": "Una capa para compresión de datos",
                  "de": "Eine Schicht für Datenkompression",
                  "nl": "Een laag voor datacompressie"
        },
        {
                  "en": "A layer for network conversation",
                  "es": "Una capa para conversación de red",
                  "de": "Eine Schicht für Netzwerkkonversation",
                  "nl": "Een laag voor netwerk conversatie"
        },
        {
                  "en": "A layer that converts images to text",
                  "es": "Una capa que convierte imágenes a texto",
                  "de": "Eine Schicht die Bilder in Text umwandelt",
                  "nl": "Een laag die afbeeldingen naar tekst converteert"
        },
        {
                  "en": "A layer that applies filters to extract features from images",
                  "es": "Una capa que aplica filtros para extraer características de imágenes",
                  "de": "Eine Schicht die Filter anwendet um Merkmale aus Bildern zu extrahieren",
                  "nl": "Een laag die filters toepast om kenmerken uit afbeeldingen te extraheren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Convolutional layers use small learnable filters (kernels) that slide across images detecting local patterns like edges, textures, and eventually complex features.",
                  "es": "Capas convolucionales usan pequeños filtros aprendibles (kernels) que se deslizan sobre imágenes detectando patrones locales como bordes, texturas y eventualmente características complejas.",
                  "de": "Faltungsschichten verwenden kleine lernbare Filter (Kernels) die über Bilder gleiten und lokale Muster wie Kanten, Texturen und schließlich komplexe Merkmale erkennen.",
                  "nl": "Convolutionele lagen gebruiken kleine leerbare filters (kernels) die over afbeeldingen schuiven en lokale patronen zoals randen, texturen en uiteindelijk complexe kenmerken detecteren."
        }
      },
      {
        question: {
                  "en": "What is a pooling layer in CNNs?",
                  "es": "¿Qué es una capa de pooling en CNN?",
                  "de": "Was ist eine Pooling-Schicht in CNNs?",
                  "nl": "Wat is een pooling laag in CNN's?"
        },
        options: [
        {
                  "en": "A layer that pools multiple networks together",
                  "es": "Una capa que agrupa múltiples redes juntas",
                  "de": "Eine Schicht die mehrere Netzwerke zusammenbringt",
                  "nl": "Een laag die meerdere netwerken samenvoegt"
        },
        {
                  "en": "A layer that reduces spatial dimensions while retaining important information",
                  "es": "Una capa que reduce dimensiones espaciales mientras retiene información importante",
                  "de": "Eine Schicht die räumliche Dimensionen reduziert während wichtige Informationen erhalten bleiben",
                  "nl": "Een laag die ruimtelijke dimensies vermindert terwijl belangrijke informatie behouden blijft"
        },
        {
                  "en": "A layer for water simulation",
                  "es": "Una capa para simulación de agua",
                  "de": "Eine Schicht für Wassersimulation",
                  "nl": "Een laag voor water simulatie"
        },
        {
                  "en": "A layer that combines training data",
                  "es": "Una capa que combina datos de entrenamiento",
                  "de": "Eine Schicht die Trainingsdaten kombiniert",
                  "nl": "Een laag die trainingsdata combineert"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pooling (e.g., max pooling, average pooling) downsamples feature maps, reducing computational load and providing translation invariance while preserving key features.",
                  "es": "Pooling (ej. max pooling, average pooling) reduce resolución de mapas de características, reduciendo carga computacional y proporcionando invariancia de traslación mientras preserva características clave.",
                  "de": "Pooling (z.B. Max Pooling, Average Pooling) reduziert die Auflösung von Feature-Maps, verringert Rechenlast und bietet Translationsinvarianz während Schlüsselmerkmale erhalten bleiben.",
                  "nl": "Pooling (bijv. max pooling, average pooling) verkleint feature maps, vermindert computationele belasting en biedt translatie-invariantie terwijl sleutelkenmerken behouden blijven."
        }
      },
      {
        question: {
                  "en": "What is weight initialization in neural networks?",
                  "es": "¿Qué es la inicialización de pesos en redes neuronales?",
                  "de": "Was ist Gewichtsinitialisierung in neuronalen Netzwerken?",
                  "nl": "Wat is gewicht initialisatie in neurale netwerken?"
        },
        options: [
        {
                  "en": "Setting initial values for network weights before training begins",
                  "es": "Establecer valores iniciales para pesos de red antes de que comience el entrenamiento",
                  "de": "Festlegen von Anfangswerten für Netzwerkgewichte bevor Training beginnt",
                  "nl": "Instellen van beginwaarden voor netwerkgewichten voordat training begint"
        },
        {
                  "en": "Calculating the total weight of the network",
                  "es": "Calcular el peso total de la red",
                  "de": "Berechnen des Gesamtgewichts des Netzwerks",
                  "nl": "Berekenen van het totale gewicht van het netwerk"
        },
        {
                  "en": "Measuring network performance",
                  "es": "Medir rendimiento de red",
                  "de": "Messen der Netzwerkleistung",
                  "nl": "Meten van netwerkprestaties"
        },
        {
                  "en": "Assigning importance levels to neurons",
                  "es": "Asignar niveles de importancia a neuronas",
                  "de": "Zuweisen von Wichtigkeitsstufen zu Neuronen",
                  "nl": "Toewijzen van belangrijkheidsniveaus aan neuronen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Proper initialization (e.g., Xavier, He) is crucial: too small causes vanishing gradients, too large causes exploding gradients, affecting convergence and training stability.",
                  "es": "Inicialización apropiada (ej. Xavier, He) es crucial: muy pequeña causa gradientes que desaparecen, muy grande causa gradientes que explotan, afectando convergencia y estabilidad de entrenamiento.",
                  "de": "Richtige Initialisierung (z.B. Xavier, He) ist entscheidend: zu klein verursacht verschwindende Gradienten, zu groß verursacht explodierende Gradienten, beeinflusst Konvergenz und Trainingsstabilität.",
                  "nl": "Juiste initialisatie (bijv. Xavier, He) is cruciaal: te klein veroorzaakt verdwijnende gradiënten, te groot veroorzaakt exploderende gradiënten, beïnvloedt convergentie en trainingsstabiliteit."
        }
      },
      {
        question: {
                  "en": "What is batch normalization?",
                  "es": "¿Qué es la normalización por lotes?",
                  "de": "Was ist Batch-Normalisierung?",
                  "nl": "Wat is batch normalization?"
        },
        options: [
        {
                  "en": "Making batch sizes equal",
                  "es": "Hacer tamaños de lote iguales",
                  "de": "Batch-Größen gleich machen",
                  "nl": "Batch groottes gelijk maken"
        },
        {
                  "en": "A technique that normalizes layer inputs to stabilize and speed up training",
                  "es": "Una técnica que normaliza entradas de capa para estabilizar y acelerar entrenamiento",
                  "de": "Eine Technik die Schichteingaben normalisiert um Training zu stabilisieren und beschleunigen",
                  "nl": "Een techniek die laaginputs normaliseert om training te stabiliseren en versnellen"
        },
        {
                  "en": "Normalizing training data before batching",
                  "es": "Normalizar datos de entrenamiento antes de lotes",
                  "de": "Trainingsdaten vor Batching normalisieren",
                  "nl": "Trainingsdata normaliseren voor batching"
        },
        {
                  "en": "Processing batches in normal order",
                  "es": "Procesar lotes en orden normal",
                  "de": "Batches in normaler Reihenfolge verarbeiten",
                  "nl": "Batches in normale volgorde verwerken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Batch normalization normalizes activations within each mini-batch, reducing internal covariate shift, allowing higher learning rates and faster convergence.",
                  "es": "La normalización por lotes normaliza activaciones dentro de cada mini-lote, reduciendo cambio de covarianza interna, permitiendo tasas de aprendizaje más altas y convergencia más rápida.",
                  "de": "Batch-Normalisierung normalisiert Aktivierungen innerhalb jedes Mini-Batches, reduziert interne Kovarianz-Verschiebung, ermöglicht höhere Lernraten und schnellere Konvergenz.",
                  "nl": "Batch normalization normaliseert activaties binnen elke mini-batch, vermindert interne covariate shift, maakt hogere learning rates en snellere convergentie mogelijk."
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
                  "en": "Techniques to prevent overfitting and improve generalization",
                  "es": "Técnicas para prevenir sobreajuste y mejorar generalización",
                  "de": "Techniken um Überanpassung zu verhindern und Generalisierung zu verbessern",
                  "nl": "Technieken om overfitting te voorkomen en generalisatie te verbeteren"
        },
        {
                  "en": "Scheduling regular training sessions",
                  "es": "Programar sesiones de entrenamiento regulares",
                  "de": "Regelmäßige Trainingssitzungen planen",
                  "nl": "Regelmatige trainingsessies plannen"
        },
        {
                  "en": "Creating uniform layer sizes",
                  "es": "Crear tamaños de capa uniformes",
                  "de": "Einheitliche Schichtgrößen erstellen",
                  "nl": "Uniforme laaggroottes creëren"
        },
        {
                  "en": "Making the network structure regular",
                  "es": "Hacer la estructura de red regular",
                  "de": "Die Netzwerkstruktur regelmäßig machen",
                  "nl": "De netwerkstructuur regelmatig maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Regularization methods (L1, L2, dropout, data augmentation) add constraints or noise to prevent models from fitting training data too closely and improve test performance.",
                  "es": "Métodos de regularización (L1, L2, dropout, aumento de datos) agregan restricciones o ruido para prevenir que modelos ajusten datos de entrenamiento demasiado cerca y mejorar rendimiento de prueba.",
                  "de": "Regularisierungsmethoden (L1, L2, Dropout, Datenaugmentation) fügen Einschränkungen oder Rauschen hinzu um zu verhindern dass Modelle Trainingsdaten zu genau anpassen und verbessern Testleistung.",
                  "nl": "Regularisatie methoden (L1, L2, dropout, data augmentatie) voegen beperkingen of ruis toe om te voorkomen dat modellen trainingsdata te nauw passen en verbeteren testprestaties."
        }
      },
      {
        question: {
                  "en": "What is the exploding gradient problem?",
                  "es": "¿Qué es el problema del gradiente que explota?",
                  "de": "Was ist das Problem der explodierenden Gradienten?",
                  "nl": "Wat is het exploderende gradiënt probleem?"
        },
        options: [
        {
                  "en": "Too many gradients are created",
                  "es": "Se crean demasiados gradientes",
                  "de": "Zu viele Gradienten werden erstellt",
                  "nl": "Te veel gradiënten worden gecreëerd"
        },
        {
                  "en": "Gradients become extremely large, causing unstable training",
                  "es": "Gradientes se vuelven extremadamente grandes, causando entrenamiento inestable",
                  "de": "Gradienten werden extrem groß, verursachen instabiles Training",
                  "nl": "Gradiënten worden extreem groot, veroorzaken onstabiele training"
        },
        {
                  "en": "Gradients spread uncontrollably",
                  "es": "Gradientes se propagan incontrolablemente",
                  "de": "Gradienten verbreiten sich unkontrolliert",
                  "nl": "Gradiënten verspreiden zich ongecontroleerd"
        },
        {
                  "en": "The gradient calculation explodes the computer",
                  "es": "El cálculo del gradiente explota la computadora",
                  "de": "Die Gradientenberechnung sprengt den Computer",
                  "nl": "De gradiëntberekening laat de computer exploderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Exploding gradients occur when gradients grow exponentially during backpropagation, leading to numerical overflow and divergent training, often solved with gradient clipping.",
                  "es": "Gradientes que explotan ocurren cuando gradientes crecen exponencialmente durante retropropagación, llevando a desbordamiento numérico y entrenamiento divergente, a menudo resuelto con recorte de gradiente.",
                  "de": "Explodierende Gradienten treten auf wenn Gradienten während Backpropagation exponentiell wachsen, führen zu numerischem Überlauf und divergentem Training, oft gelöst mit Gradient Clipping.",
                  "nl": "Exploderende gradiënten treden op wanneer gradiënten exponentieel groeien tijdens backpropagation, leiden tot numerieke overflow en divergente training, vaak opgelost met gradient clipping."
        }
      },
      {
        question: {
                  "en": "What is early stopping in neural network training?",
                  "es": "¿Qué es la detención temprana en entrenamiento de redes neuronales?",
                  "de": "Was ist frühzeitiges Stoppen im neuronalen Netzwerktraining?",
                  "nl": "Wat is early stopping in neurale netwerktraining?"
        },
        options: [
        {
                  "en": "Ending training before completing one epoch",
                  "es": "Terminar entrenamiento antes de completar una época",
                  "de": "Training vor Abschluss einer Epoche beenden",
                  "nl": "Training beëindigen voor het voltooien van één epoch"
        },
        {
                  "en": "Stopping training when validation performance stops improving",
                  "es": "Detener entrenamiento cuando rendimiento de validación deja de mejorar",
                  "de": "Training stoppen wenn Validierungsleistung aufhört sich zu verbessern",
                  "nl": "Training stoppen wanneer validatieprestaties stoppen met verbeteren"
        },
        {
                  "en": "Stopping the first layer from training",
                  "es": "Detener la primera capa de entrenamiento",
                  "de": "Die erste Schicht vom Training stoppen",
                  "nl": "De eerste laag stoppen met trainen"
        },
        {
                  "en": "Starting training earlier than planned",
                  "es": "Comenzar entrenamiento antes de lo planeado",
                  "de": "Training früher als geplant beginnen",
                  "nl": "Training eerder dan gepland beginnen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Early stopping monitors validation loss and halts training when it stops decreasing, preventing overfitting by avoiding unnecessary additional training iterations.",
                  "es": "Detención temprana monitorea pérdida de validación y detiene entrenamiento cuando deja de disminuir, previniendo sobreajuste evitando iteraciones de entrenamiento adicionales innecesarias.",
                  "de": "Frühzeitiges Stoppen überwacht Validierungsverlust und stoppt Training wenn es aufhört zu sinken, verhindert Überanpassung durch Vermeiden unnötiger zusätzlicher Trainingsiterationen.",
                  "nl": "Early stopping monitort validatieverlies en stopt training wanneer het stopt met dalen, voorkomt overfitting door onnodige extra trainingsiteraties te vermijden."
        }
      },
      {
        question: {
                  "en": "What is a feedforward neural network?",
                  "es": "¿Qué es una red neuronal feedforward?",
                  "de": "Was ist ein Feedforward-neuronales Netzwerk?",
                  "nl": "Wat is een feedforward neuraal netwerk?"
        },
        options: [
        {
                  "en": "A network where data flows only forward from input to output",
                  "es": "Una red donde datos fluyen solo hacia adelante de entrada a salida",
                  "de": "Ein Netzwerk wo Daten nur vorwärts von Eingabe zu Ausgabe fließen",
                  "nl": "Een netwerk waar data alleen voorwaarts stroomt van input naar output"
        },
        {
                  "en": "A network that processes data faster",
                  "es": "Una red que procesa datos más rápido",
                  "de": "Ein Netzwerk das Daten schneller verarbeitet",
                  "nl": "Een netwerk dat data sneller verwerkt"
        },
        {
                  "en": "A network that feeds data back to itself",
                  "es": "Una red que alimenta datos de vuelta a sí misma",
                  "de": "Ein Netzwerk das Daten an sich selbst zurückführt",
                  "nl": "Een netwerk dat data terug naar zichzelf voedt"
        },
        {
                  "en": "A network for forward prediction only",
                  "es": "Una red solo para predicción hacia adelante",
                  "de": "Ein Netzwerk nur für Vorwärtsvorhersage",
                  "nl": "Een netwerk alleen voor voorwaartse voorspelling"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Feedforward networks have no cycles or loops - information moves in one direction through layers, making them suitable for tasks like classification and regression.",
                  "es": "Redes feedforward no tienen ciclos o bucles - información se mueve en una dirección a través de capas, haciéndolas adecuadas para tareas como clasificación y regresión.",
                  "de": "Feedforward-Netzwerke haben keine Zyklen oder Schleifen - Informationen bewegen sich in eine Richtung durch Schichten, macht sie geeignet für Aufgaben wie Klassifikation und Regression.",
                  "nl": "Feedforward netwerken hebben geen cycli of lussen - informatie beweegt in één richting door lagen, maakt ze geschikt voor taken zoals classificatie en regressie."
        }
      },
      {
        question: {
                  "en": "What is transfer learning in deep learning?",
                  "es": "¿Qué es el aprendizaje por transferencia en aprendizaje profundo?",
                  "de": "Was ist Transfer Learning in Deep Learning?",
                  "nl": "Wat is transfer learning in deep learning?"
        },
        options: [
        {
                  "en": "Learning to transfer files efficiently",
                  "es": "Aprender a transferir archivos eficientemente",
                  "de": "Lernen Dateien effizient zu übertragen",
                  "nl": "Leren bestanden efficiënt over te dragen"
        },
        {
                  "en": "Transferring data between different networks",
                  "es": "Transferir datos entre diferentes redes",
                  "de": "Daten zwischen verschiedenen Netzwerken übertragen",
                  "nl": "Data overdragen tussen verschillende netwerken"
        },
        {
                  "en": "Moving models between computers",
                  "es": "Mover modelos entre computadoras",
                  "de": "Modelle zwischen Computern verschieben",
                  "nl": "Modellen tussen computers verplaatsen"
        },
        {
                  "en": "Using pre-trained models as starting points for new related tasks",
                  "es": "Usar modelos pre-entrenados como puntos de partida para nuevas tareas relacionadas",
                  "de": "Vortrainierte Modelle als Ausgangspunkte für neue verwandte Aufgaben verwenden",
                  "nl": "Voorgetrainde modellen gebruiken als startpunten voor nieuwe gerelateerde taken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Transfer learning leverages knowledge from models trained on large datasets (like ImageNet) for new tasks, requiring less data and training time while achieving better performance.",
                  "es": "Aprendizaje por transferencia aprovecha conocimiento de modelos entrenados en grandes conjuntos de datos (como ImageNet) para nuevas tareas, requiriendo menos datos y tiempo de entrenamiento mientras logra mejor rendimiento.",
                  "de": "Transfer Learning nutzt Wissen von auf großen Datensätzen (wie ImageNet) trainierten Modellen für neue Aufgaben, benötigt weniger Daten und Trainingszeit während bessere Leistung erzielt wird.",
                  "nl": "Transfer learning benut kennis van modellen getraind op grote datasets (zoals ImageNet) voor nieuwe taken, vereist minder data en trainingstijd terwijl betere prestaties worden behaald."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a validation set?",
                  "es": "¿Cuál es el propósito de un conjunto de validación?",
                  "de": "Was ist der Zweck eines Validierungssatzes?",
                  "nl": "Wat is het doel van een validatieset?"
        },
        options: [
        {
                  "en": "To tune hyperparameters and monitor training without using test data",
                  "es": "Ajustar hiperparámetros y monitorear entrenamiento sin usar datos de prueba",
                  "de": "Hyperparameter zu tunen und Training zu überwachen ohne Testdaten zu verwenden",
                  "nl": "Hyperparameters afstemmen en training monitoren zonder testdata te gebruiken"
        },
        {
                  "en": "To validate that the data is correct",
                  "es": "Validar que los datos son correctos",
                  "de": "Zu validieren dass die Daten korrekt sind",
                  "nl": "Valideren dat de data correct is"
        },
        {
                  "en": "To check for data corruption",
                  "es": "Verificar corrupción de datos",
                  "de": "Auf Datenbeschädigung prüfen",
                  "nl": "Controleren op datacorruptie"
        },
        {
                  "en": "To store validated training results",
                  "es": "Almacenar resultados de entrenamiento validados",
                  "de": "Validierte Trainingsergebnisse speichern",
                  "nl": "Gevalideerde trainingsresultaten opslaan"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The validation set provides unbiased evaluation during development, helping select optimal hyperparameters and detect overfitting while keeping the test set untouched for final assessment.",
                  "es": "El conjunto de validación proporciona evaluación imparcial durante desarrollo, ayudando a seleccionar hiperparámetros óptimos y detectar sobreajuste mientras mantiene el conjunto de prueba intacto para evaluación final.",
                  "de": "Der Validierungssatz bietet unvoreingenommene Bewertung während Entwicklung, hilft optimale Hyperparameter zu wählen und Überanpassung zu erkennen während Testsatz für finale Bewertung unberührt bleibt.",
                  "nl": "De validatieset biedt onbevooroordeelde evaluatie tijdens ontwikkeling, helpt optimale hyperparameters te selecteren en overfitting te detecteren terwijl de testset onaangeroerd blijft voor finale beoordeling."
        }
      },
      {
        question: {
                  "en": "What is the softmax activation function used for?",
                  "es": "¿Para qué se usa la función de activación softmax?",
                  "de": "Wofür wird die Softmax-Aktivierungsfunktion verwendet?",
                  "nl": "Waarvoor wordt de softmax activatiefunctie gebruikt?"
        },
        options: [
        {
                  "en": "Making the network softer and easier to train",
                  "es": "Hacer la red más suave y fácil de entrenar",
                  "de": "Das Netzwerk weicher und einfacher zu trainieren machen",
                  "nl": "Het netwerk zachter en makkelijker te trainen maken"
        },
        {
                  "en": "Converting network outputs to probability distributions for multi-class classification",
                  "es": "Convertir salidas de red a distribuciones de probabilidad para clasificación multi-clase",
                  "de": "Netzwerkausgaben in Wahrscheinlichkeitsverteilungen für Mehrklassen-Klassifikation umwandeln",
                  "nl": "Netwerkoutputs converteren naar waarschijnlijkheidsverdelingen voor multi-klasse classificatie"
        },
        {
                  "en": "Softening harsh gradients",
                  "es": "Suavizar gradientes duros",
                  "de": "Harte Gradienten weicher machen",
                  "nl": "Harde gradiënten verzachten"
        },
        {
                  "en": "Finding maximum values in the network",
                  "es": "Encontrar valores máximos en la red",
                  "de": "Maximalwerte im Netzwerk finden",
                  "nl": "Maximale waarden in het netwerk vinden"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Softmax transforms raw output scores into probabilities that sum to 1, making it ideal for the output layer in multi-class classification where we need one prediction per class.",
                  "es": "Softmax transforma puntajes de salida sin procesar en probabilidades que suman 1, haciéndola ideal para la capa de salida en clasificación multi-clase donde necesitamos una predicción por clase.",
                  "de": "Softmax transformiert rohe Ausgabe-Scores in Wahrscheinlichkeiten die zu 1 summieren, macht es ideal für die Ausgabeschicht in Mehrklassen-Klassifikation wo wir eine Vorhersage pro Klasse benötigen.",
                  "nl": "Softmax transformeert ruwe output scores naar waarschijnlijkheden die optellen tot 1, maakt het ideaal voor de outputlaag in multi-klasse classificatie waar we één voorspelling per klasse nodig hebben."
        }
      },
      {
        question: {
                  "en": "What is cross-entropy loss?",
                  "es": "¿Qué es la pérdida de entropía cruzada?",
                  "de": "Was ist Kreuzentropieverlust?",
                  "nl": "Wat is cross-entropy loss?"
        },
        options: [
        {
                  "en": "A loss function measuring difference between predicted and true probability distributions",
                  "es": "Una función de pérdida que mide diferencia entre distribuciones de probabilidad predichas y verdaderas",
                  "de": "Eine Verlustfunktion die Unterschied zwischen vorhergesagten und wahren Wahrscheinlichkeitsverteilungen misst",
                  "nl": "Een verliesfunctie die verschil meet tussen voorspelde en echte waarschijnlijkheidsverdelingen"
        },
        {
                  "en": "A measure of network complexity",
                  "es": "Una medida de complejidad de red",
                  "de": "Ein Maß für Netzwerkkomplexität",
                  "nl": "Een maat voor netwerkcomplexiteit"
        },
        {
                  "en": "Loss from crossing data between networks",
                  "es": "Pérdida de cruzar datos entre redes",
                  "de": "Verlust vom Kreuzen von Daten zwischen Netzwerken",
                  "nl": "Verlies van het kruisen van data tussen netwerken"
        },
        {
                  "en": "Entropy that crosses layer boundaries",
                  "es": "Entropía que cruza límites de capa",
                  "de": "Entropie die Schichtgrenzen kreuzt",
                  "nl": "Entropie die laaggrenzen kruist"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Cross-entropy quantifies how different the predicted probability distribution is from the true distribution, commonly used with softmax for classification tasks.",
                  "es": "Entropía cruzada cuantifica qué tan diferente es la distribución de probabilidad predicha de la distribución verdadera, comúnmente usada con softmax para tareas de clasificación.",
                  "de": "Kreuzentropie quantifiziert wie unterschiedlich die vorhergesagte Wahrscheinlichkeitsverteilung von der wahren Verteilung ist, häufig mit Softmax für Klassifikationsaufgaben verwendet.",
                  "nl": "Cross-entropy kwantificeert hoe verschillend de voorspelde waarschijnlijkheidsverdeling is van de echte verdeling, vaak gebruikt met softmax voor classificatietaken."
        }
      },
      {
        question: {
                  "en": "What is data augmentation in deep learning?",
                  "es": "¿Qué es el aumento de datos en aprendizaje profundo?",
                  "de": "Was ist Datenaugmentation in Deep Learning?",
                  "nl": "Wat is data augmentatie in deep learning?"
        },
        options: [
        {
                  "en": "Increasing the size of data files",
                  "es": "Aumentar el tamaño de archivos de datos",
                  "de": "Die Größe von Datendateien erhöhen",
                  "nl": "De grootte van databestanden vergroten"
        },
        {
                  "en": "Adding more data from external sources",
                  "es": "Agregar más datos de fuentes externas",
                  "de": "Mehr Daten aus externen Quellen hinzufügen",
                  "nl": "Meer data toevoegen uit externe bronnen"
        },
        {
                  "en": "Augmenting network capacity with data",
                  "es": "Aumentar capacidad de red con datos",
                  "de": "Netzwerkkapazität mit Daten erweitern",
                  "nl": "Netwerkcapaciteit vergroten met data"
        },
        {
                  "en": "Creating modified versions of training data to increase dataset size and diversity",
                  "es": "Crear versiones modificadas de datos de entrenamiento para aumentar tamaño y diversidad del conjunto de datos",
                  "de": "Modifizierte Versionen von Trainingsdaten erstellen um Datensatzgröße und Vielfalt zu erhöhen",
                  "nl": "Gemodificeerde versies van trainingsdata creëren om datasetgrootte en diversiteit te verhogen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Data augmentation applies transformations like rotation, flipping, scaling, or cropping to existing images, effectively expanding training data and improving model robustness without collecting new samples.",
                  "es": "Aumento de datos aplica transformaciones como rotación, volteo, escalado o recorte a imágenes existentes, expandiendo efectivamente datos de entrenamiento y mejorando robustez del modelo sin recolectar nuevas muestras.",
                  "de": "Datenaugmentation wendet Transformationen wie Rotation, Spiegeln, Skalieren oder Zuschneiden auf existierende Bilder an, erweitert effektiv Trainingsdaten und verbessert Modellrobustheit ohne neue Samples zu sammeln.",
                  "nl": "Data augmentatie past transformaties toe zoals rotatie, spiegelen, schalen of bijsnijden op bestaande afbeeldingen, breidt effectief trainingsdata uit en verbetert modelrobuustheid zonder nieuwe samples te verzamelen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();