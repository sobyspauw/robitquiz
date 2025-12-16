// Neural Networks Quiz - Level 2: Training Basics
(function() {
  const level2 = {
    name: {
      en: "Training Basics",
      es: "Fundamentos del Entrenamiento",
      de: "Grundlagen des Trainings",
      nl: "Training Basisprincipes"
    },
    questions: [
      {
        question: {
          en: "What is gradient descent in neural network training?",
          es: "¿Qué es el descenso de gradiente en el entrenamiento de redes neuronales?",
          de: "Was ist Gradientenabstieg beim Training neuronaler Netzwerke?",
          nl: "Wat is gradient descent bij het trainen van neurale netwerken?"
        },
        options: [
          { en: "An optimization algorithm that iteratively adjusts weights to minimize the loss function", es: "Un algoritmo de optimización que ajusta iterativamente los pesos para minimizar la función de pérdida", de: "Ein Optimierungsalgorithmus der iterativ Gewichte anpasst um die Verlustfunktion zu minimieren", nl: "Een optimalisatie-algoritme dat iteratief gewichten aanpast om de verliesfunctie te minimaliseren" },
          { en: "A method to increase the network's complexity", es: "Un método para aumentar la complejidad de la red", de: "Eine Methode zur Erhöhung der Netzwerkkomplexität", nl: "Een methode om de complexiteit van het netwerk te verhogen" },
          { en: "A technique to add more layers to the network", es: "Una técnica para agregar más capas a la red", de: "Eine Technik um mehr Schichten zum Netzwerk hinzuzufügen", nl: "Een techniek om meer lagen aan het netwerk toe te voegen" },
          { en: "A way to visualize the network structure", es: "Una forma de visualizar la estructura de la red", de: "Eine Art die Netzwerkstruktur zu visualisieren", nl: "Een manier om de netwerkstructuur te visualiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient descent is a fundamental optimization algorithm that finds the minimum of a function by iteratively moving in the direction of steepest descent. In neural networks, it adjusts weights by computing gradients of the loss function with respect to each weight.",
          es: "El descenso de gradiente es un algoritmo de optimización fundamental que encuentra el mínimo de una función moviéndose iterativamente en la dirección de mayor descenso. En redes neuronales, ajusta los pesos calculando gradientes de la función de pérdida con respecto a cada peso.",
          de: "Gradientenabstieg ist ein grundlegender Optimierungsalgorithmus der das Minimum einer Funktion findet durch iteratives Bewegen in Richtung des steilsten Abstiegs. In neuronalen Netzwerken passt er Gewichte an durch Berechnung von Gradienten der Verlustfunktion bezüglich jedes Gewichts.",
          nl: "Gradient descent is een fundamenteel optimalisatie-algoritme dat het minimum van een functie vindt door iteratief te bewegen in de richting van de steilste afdaling. In neurale netwerken past het gewichten aan door gradiënten van de verliesfunctie te berekenen ten opzichte van elk gewicht."
        }
      },
      {
        question: {
          en: "What is a loss function in neural networks?",
          es: "¿Qué es una función de pérdida en las redes neuronales?",
          de: "Was ist eine Verlustfunktion in neuronalen Netzwerken?",
          nl: "Wat is een verliesfunctie in neurale netwerken?"
        },
        options: [
          { en: "A function that measures the difference between predicted and actual outputs", es: "Una función que mide la diferencia entre las salidas predichas y reales", de: "Eine Funktion die den Unterschied zwischen vorhergesagten und tatsächlichen Ausgaben misst", nl: "Een functie die het verschil meet tussen voorspelde en werkelijke uitvoer" },
          { en: "A function that counts lost data pts", es: "Una función que cuenta puntos de datos perdidos", de: "Eine Funktion die verlorene Datenpunkte zählt", nl: "Een functie die verloren datapunten telt" },
          { en: "A function that calculates processing time", es: "Una función que calcula el tiempo de procesamiento", de: "Eine Funktion die Verarbeitungszeit berechnet", nl: "Een functie die verwerkingstijd berekent" },
          { en: "A function that manages memory usage", es: "Una función que gestiona el uso de memoria", de: "Eine Funktion die Speichernutzung verwaltet", nl: "Een functie die geheugengebruik beheert" }
        ],
        correct: 0,
        explanation: {
          en: "A loss function quantifies how far the network's predictions are from the true values. Common examples include mean squared error for regression and cross-entropy for classification. The goal of training is to minimize this loss function.",
          es: "Una función de pérdida cuantifica qué tan lejos están las predicciones de la red de los valores verdaderos. Ejemplos comunes incluyen el error cuadrático medio para regresión y entropía cruzada para clasificación. El objetivo del entrenamiento es minimizar esta función de pérdida.",
          de: "Eine Verlustfunktion quantifiziert wie weit die Vorhersagen des Netzwerks von den wahren Werten entfernt sind. Häufige Beispiele sind mittlerer quadratischer Fehler für Regression und Kreuzentropie für Klassifikation. Das Ziel des Trainings ist diese Verlustfunktion zu minimieren.",
          nl: "Een verliesfunctie kwantificeert hoe ver de voorspellingen van het netwerk van de werkelijke waarden af liggen. Veelvoorkomende voorbeelden zijn gemiddelde kwadratische fout voor regressie en kruisentropie voor classificatie. Het doel van training is deze verliesfunctie te minimaliseren."
        }
      },
      {
        question: {
          en: "What is backpropagation?",
          es: "¿Qué es la retropropagación?",
          de: "Was ist Rückpropagation?",
          nl: "Wat is backpropagation?"
        },
        options: [
          { en: "An algorithm that calculates gradients by propagating errors backward through the network", es: "Un algoritmo que calcula gradientes propagando errores hacia atrás a través de la red", de: "Ein Algorithmus der Gradienten berechnet indem Fehler rückwärts durch das Netzwerk propagiert werden", nl: "Een algoritme dat gradiënten berekent door fouten achterwaarts door het netwerk te propageren" },
          { en: "A method to reverse the network's predictions", es: "Un método para revertir las predicciones de la red", de: "Eine Methode um die Vorhersagen des Netzwerks umzukehren", nl: "Een methode om de voorspellingen van het netwerk om te keren" },
          { en: "A technique to go back to previous training steps", es: "Una técnica para volver a pasos de entrenamiento anteriores", de: "Eine Technik um zu vorherigen Trainingsschritten zurückzukehren", nl: "Een techniek om terug te gaan naar vorige trainingsstappen" },
          { en: "A process to backup network weights", es: "Un proceso para respaldar los pesos de la red", de: "Ein Prozess um Netzwerkgewichte zu sichern", nl: "Een proces om netwerkgewichten te back-uppen" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation is the key algorithm for training neural networks. It efficiently computes gradients of the loss function with respect to each weight by applying the chain rule of calculus, starting from the output layer and working backwards to the input layer.",
          es: "La retropropagación es el algoritmo clave para entrenar redes neuronales. Calcula eficientemente gradientes de la función de pérdida con respecto a cada peso aplicando la regla de la cadena del cálculo, comenzando desde la capa de salida y trabajando hacia atrás hasta la capa de entrada.",
          de: "Rückpropagation ist der Schlüsselalgorithmus zum Training neuronaler Netzwerke. Er berechnet effizient Gradienten der Verlustfunktion bezüglich jedes Gewichts durch Anwendung der Kettenregel der Analysis, beginnend von der Ausgabeschicht und rückwärts zur Eingabeschicht arbeitend.",
          nl: "Backpropagation is het sleutelalgoritme voor het trainen van neurale netwerken. Het berekent efficiënt gradiënten van de verliesfunctie ten opzichte van elk gewicht door de kettingregel van de calculus toe te passen, beginnend vanaf de uitvoerlaag en achterwaarts werkend naar de invoerlaag."
        }
      },
      {
        question: {
          en: "What is the purpose of a learning rate in gradient descent?",
          es: "¿Cuál es el propósito de una tasa de aprendizaje en el descenso de gradiente?",
          de: "Was ist der Zweck einer Lernrate beim Gradientenabstieg?",
          nl: "Wat is het doel van een leersnelheid bij gradient descent?"
        },
        options: [
          { en: "It controls how large steps the algorithm takes when updating weights", es: "Controla qué tan grandes son los pasos que toma el algoritmo al actualizar los pesos", de: "Es kontrolliert wie große Schritte der Algorithmus beim Aktualisieren der Gewichte macht", nl: "Het controleert hoe grote stappen het algoritme neemt bij het bijwerken van gewichten" },
          { en: "It determines how fast the network processes data", es: "Determina qué tan rápido la red procesa los datos", de: "Es bestimmt wie schnell das Netzwerk Daten verarbeitet", nl: "Het bepaalt hoe snel het netwerk data verwerkt" },
          { en: "It sets the number of training epochs", es: "Establece el número de épocas de entrenamiento", de: "Es legt die Anzahl der Trainingsepochen fest", nl: "Het stelt het aantal training-epochs in" },
          { en: "It controls the network's memory usage", es: "Controla el uso de memoria de la red", de: "Es kontrolliert die Speichernutzung des Netzwerks", nl: "Het controleert het geheugengebruik van het netwerk" }
        ],
        correct: 0,
        explanation: {
          en: "The learning rate is a hyperparameter that controls the step size in gradient descent. A small learning rate leads to slow but stable convergence, while a large learning rate can cause faster training but may overshoot the minimum or cause instability.",
          es: "La tasa de aprendizaje es un hiperparámetro que controla el tamaño del paso en el descenso de gradiente. Una tasa de aprendizaje pequeña lleva a una convergencia lenta pero estable, mientras que una tasa grande puede causar entrenamiento más rápido pero puede pasar por alto el mínimo o causar inestabilidad.",
          de: "Die Lernrate ist ein Hyperparameter der die Schrittgröße beim Gradientenabstieg kontrolliert. Eine kleine Lernrate führt zu langsamer aber stabiler Konvergenz, während eine große Lernrate schnelleres Training verursachen kann aber das Minimum überschießen oder Instabilität verursachen kann.",
          nl: "De leersnelheid is een hyperparameter die de stapgrootte in gradient descent controleert. Een kleine leersnelheid leidt tot langzame maar stabiele convergentie, terwijl een grote leersnelheid snellere training kan veroorzaken maar het minimum kan overschrijden of instabiliteit kan veroorzaken."
        }
      },
      {
        question: {
          en: "What happens during one training epoch?",
          es: "¿Qué sucede durante una época de entrenamiento?",
          de: "Was passiert während einer Trainingsepoche?",
          nl: "Wat gebeurt er tijdens één training-epoch?"
        },
        options: [
          { en: "The network processes the entire training dataset once and updates weights", es: "La red procesa todo el conjunto de datos de entrenamiento una vez y actualiza los pesos", de: "Das Netzwerk verarbeitet den gesamten Trainingsdatensatz einmal und aktualisiert Gewichte", nl: "Het netwerk verwerkt de volledige trainingsdataset één keer en werkt gewichten bij" },
          { en: "The network is completely reset", es: "La red se reinicia completamente", de: "Das Netzwerk wird vollständig zurückgesetzt", nl: "Het netwerk wordt volledig gereset" },
          { en: "Only one data sample is processed", es: "Solo se procesa una muestra de datos", de: "Nur eine Datenprobe wird verarbeitet", nl: "Slechts één datasteekproef wordt verwerkt" },
          { en: "The network architecture is modified", es: "La arquitectura de la red se modifica", de: "Die Netzwerkarchitektur wird modifiziert", nl: "De netwerkarchitectuur wordt gewijzigd" }
        ],
        correct: 0,
        explanation: {
          en: "An epoch represents one complete pass through the entire training dataset. During an epoch, the network sees every training example once, computes predictions, calculates losses, and updates weights through backpropagation. Multiple epochs are typically needed for effective training.",
          es: "Una época representa un pase completo a través de todo el conjunto de datos de entrenamiento. Durante una época, la red ve cada ejemplo de entrenamiento una vez, calcula predicciones, calcula pérdidas y actualiza pesos a través de retropropagación. Múltiples épocas son típicamente necesarias para un entrenamiento efectivo.",
          de: "Eine Epoche repräsentiert einen vollständigen Durchgang durch den gesamten Trainingsdatensatz. Während einer Epoche sieht das Netzwerk jedes Trainingsbeispiel einmal, berechnet Vorhersagen, berechnet Verluste und aktualisiert Gewichte durch Rückpropagation. Mehrere Epochen sind typischerweise für effektives Training nötig.",
          nl: "Een epoch vertegenwoordigt één volledige doorgang door de hele trainingsdataset. Tijdens een epoch ziet het netwerk elk trainingsvoorbeeld één keer, berekent voorspellingen, berekent verliezen en werkt gewichten bij door backpropagation. Meerdere epochs zijn typisch nodig voor effectieve training."
        }
      },
      {
        question: {
          en: "What is a neuron (node) in a neural network?",
          es: "¿Qué es una neurona (nodo) en una red neuronal?",
          de: "Was ist ein Neuron (Knoten) in einem neuronalen Netzwerk?",
          nl: "Wat is een neuron (node) in een neuraal netwerk?"
        },
        options: [
          { en: "A computational unit that receives inputs, applies weights and bias, and produces an output through an activation function", es: "Una unidad computacional que recibe entradas, aplica pesos y sesgo, y produce una salida a través de una función de activación", de: "Eine Berechnungseinheit die Eingaben empfängt, Gewichte und Bias anwendet und eine Ausgabe durch eine Aktivierungsfunktion erzeugt", nl: "Een rekenkundige eenheid die invoer ontvangt, gewichten en bias toepast, en uitvoer produceert via een activatiefunctie" },
          { en: "A data storage unit in the network", es: "Una unidad de almacenamiento de datos en la red", de: "Eine Datenspeichereinheit im Netzwerk", nl: "Een data-opslageenheid in het netwerk" },
          { en: "A connection between layers", es: "Una conexión entre capas", de: "Eine Verbindung zwischen Schichten", nl: "Een verbinding tussen lagen" },
          { en: "A type of activation function", es: "Un tipo de función de activación", de: "Eine Art von Aktivierungsfunktion", nl: "Een type activatiefunctie" }
        ],
        correct: 0,
        explanation: {
          en: "A neuron is the basic processing unit of a neural network. It takes multiple inputs, multiplies each by a weight, adds a bias term, sums everything up, and then applies an activation function to produce the final output.",
          es: "Una neurona es la unidad básica de procesamiento de una red neuronal. Toma múltiples entradas, multiplica cada una por un peso, agrega un término de sesgo, suma todo y luego aplica una función de activación para producir la salida final.",
          de: "Ein Neuron ist die grundlegende Verarbeitungseinheit eines neuronalen Netzwerks. Es nimmt mehrere Eingaben, multipliziert jede mit einem Gewicht, fügt einen Bias-Term hinzu, summiert alles auf und wendet dann eine Aktivierungsfunktion an um die finale Ausgabe zu erzeugen.",
          nl: "Een neuron is de basale verwerkingseenheid van een neuraal netwerk. Het neemt meerdere invoer, vermenigvuldigt elk met een gewicht, voegt een bias-term toe, telt alles op en past dan een activatiefunctie toe om de finale uitvoer te produceren."
        }
      },
      {
        question: {
          en: "What is the purpose of activation functions in neural networks?",
          es: "¿Cuál es el propósito de las funciones de activación en las redes neuronales?",
          de: "Was ist der Zweck von Aktivierungsfunktionen in neuronalen Netzwerken?",
          nl: "Wat is het doel van activatiefuncties in neurale netwerken?"
        },
        options: [
          { en: "To introduce non-linearity and enable the network to learn complex patterns", es: "Para introducir no linealidad y permitir que la red aprenda patrones complejos", de: "Um Nichtlinearität einzuführen und dem Netzwerk zu ermöglichen komplexe Muster zu lernen", nl: "Om non-lineariteit te introduceren en het netwerk in staat te stellen complexe patronen te leren" },
          { en: "To speed up the training process", es: "Para acelerar el proceso de entrenamiento", de: "Um den Trainingsprozess zu beschleunigen", nl: "Om het trainingsproces te versnellen" },
          { en: "To reduce memory usage", es: "Para reducir el uso de memoria", de: "Um Speichernutzung zu reduzieren", nl: "Om geheugengebruik te verminderen" },
          { en: "To store intermediate calculations", es: "Para almacenar cálculos intermedios", de: "Um Zwischenberechnungen zu speichern", nl: "Om tussenberekeningen op te slaan" }
        ],
        correct: 0,
        explanation: {
          en: "Activation functions introduce non-linearity to neural networks. Without them, no matter how many layers a network has, it would only be able to learn linear relationships. Non-linear activation functions enable networks to approximate any continuous function and learn complex patterns.",
          es: "Las funciones de activación introducen no linealidad a las redes neuronales. Sin ellas, sin importar cuántas capas tenga una red, solo podría aprender relaciones lineales. Las funciones de activación no lineales permiten que las redes aproximen cualquier función continua y aprendan patrones complejos.",
          de: "Aktivierungsfunktionen führen Nichtlinearität in neuronale Netzwerke ein. Ohne sie könnte ein Netzwerk, egal wie viele Schichten es hat, nur lineare Beziehungen lernen. Nichtlineare Aktivierungsfunktionen ermöglichen es Netzwerken jede kontinuierliche Funktion zu approximieren und komplexe Muster zu lernen.",
          nl: "Activatiefuncties introduceren non-lineariteit in neurale netwerken. Zonder deze zou een netwerk, ongeacht hoeveel lagen het heeft, alleen lineaire relaties kunnen leren. Non-lineaire activatiefuncties stellen netwerken in staat elke continue functie te benaderen en complexe patronen te leren."
        }
      },
      {
        question: {
          en: "What is the difference between weights and biases in neural networks?",
          es: "¿Cuál es la diferencia entre pesos y sesgos en las redes neuronales?",
          de: "Was ist der Unterschied zwischen Gewichten und Bias in neuronalen Netzwerken?",
          nl: "Wat is het verschil tussen gewichten en biases in neurale netwerken?"
        },
        options: [
          { en: "Weights determine the strength of connections between neurons, while biases allow neurons to activate even with zero input", es: "Pesos determinan fuerza de conexiones entre neuronas, mientras sesgos permiten que neuronas se activen incluso con entrada cero", de: "Gewichte bestimmen Stärke der Verbindungen zwischen Neuronen, Bias ermöglicht Neuronen auch bei Null-Eingabe zu aktivieren", nl: "Gewichten bepalen sterkte van verbindingen tussen neuronen, terwijl biases neuronen toestaan te activeren zelfs met nul invoer" },
          { en: "Weights are fixed values while biases change during training", es: "Los pesos son valores fijos mientras que los sesgos cambian durante el entrenamiento", de: "Gewichte sind feste Werte während Bias sich während des Trainings ändern", nl: "Gewichten zijn vaste waarden terwijl biases veranderen tijdens training" },
          { en: "Weights are used in hidden layers while biases are used in output layers", es: "Los pesos se usan en capas ocultas mientras que los sesgos se usan en capas de salida", de: "Gewichte werden in versteckten Schichten verwendet während Bias in Ausgabeschichten verwendet werden", nl: "Gewichten worden gebruikt in verborgen lagen terwijl biases gebruikt worden in uitvoerlagen" },
          { en: "There is no functional difference between weights and biases", es: "No hay diferencia funcional entre pesos y sesgos", de: "Es gibt keinen funktionalen Unterschied zwischen Gewichten und Bias", nl: "Er is geen functioneel verschil tussen gewichten en biases" }
        ],
        correct: 0,
        explanation: {
          en: "Weights control how much influence each input has on a neuron's output - they scale the input values. Biases provide an offset that allows neurons to shift their activation threshold, enabling them to fire even when all inputs are zero.",
          es: "Los pesos controlan cuánta influencia tiene cada entrada en la salida de una neurona - escalan los valores de entrada. Los sesgos proporcionan un desplazamiento que permite a las neuronas cambiar su umbral de activación, permitiéndoles disparar incluso cuando todas las entradas son cero.",
          de: "Gewichte kontrollieren wie viel Einfluss jede Eingabe auf die Ausgabe eines Neurons hat - sie skalieren die Eingabewerte. Bias bieten einen Offset der es Neuronen ermöglicht ihre Aktivierungsschwelle zu verschieben, wodurch sie auch feuern können wenn alle Eingaben null sind.",
          nl: "Gewichten controleren hoeveel invloed elke invoer heeft op de uitvoer van een neuron - ze schalen de invoerwaarden. Biases bieden een verschuiving die neuronen toestaat hun activatiedrempel te verschuiven, waardoor ze kunnen vuren zelfs wanneer alle invoer nul is."
        }
      },
      {
        question: {
          en: "What is a feedforward neural network?",
          es: "¿Qué es una red neuronal feedforward?",
          de: "Was ist ein Feedforward-neuronales Netzwerk?",
          nl: "Wat is een feedforward neuraal netwerk?"
        },
        options: [
          { en: "A network where information flows in one direction from input to output without cycles", es: "Una red donde la información fluye en una dirección desde la entrada hasta la salida sin ciclos", de: "Ein Netzwerk wo Information in eine Richtung von Eingabe zu Ausgabe ohne Zyklen fließt", nl: "Een netwerk waar informatie in één richting stroomt van invoer naar uitvoer zonder cycli" },
          { en: "A network that only processes forward-moving objects", es: "Una red que solo procesa objetos que se mueven hacia adelante", de: "Ein Netzwerk das nur vorwärts bewegende Objekte verarbeitet", nl: "Een netwerk dat alleen vooruit bewegende objecten verwerkt" },
          { en: "A network that feeds data back to previous layers", es: "Una red que alimenta datos de vuelta a capas anteriores", de: "Ein Netzwerk das Daten zurück zu vorherigen Schichten speist", nl: "Een netwerk dat data terugvoert naar vorige lagen" },
          { en: "A network designed specifically for time series data", es: "Una red diseñada específicamente para datos de series temporales", de: "Ein Netzwerk das speziell für Zeitreihendaten entworfen wurde", nl: "Een netwerk speciaal ontworpen voor tijdreeksdata" }
        ],
        correct: 0,
        explanation: {
          en: "In a feedforward neural network, information moves in only one direction - from the input layer through hidden layers to the output layer. There are no loops or cycles, making it the simplest type of artificial neural network architecture.",
          es: "En una red neuronal feedforward, la información se mueve en una sola dirección - desde la capa de entrada a través de capas ocultas hasta la capa de salida. No hay bucles o ciclos, lo que la convierte en el tipo más simple de arquitectura de red neuronal artificial.",
          de: "In einem Feedforward-neuronalen Netzwerk bewegt sich Information nur in eine Richtung - von der Eingabeschicht durch versteckte Schichten zur Ausgabeschicht. Es gibt keine Schleifen oder Zyklen, was es zur einfachsten Art von künstlicher neuronaler Netzwerkarchitektur macht.",
          nl: "In een feedforward neuraal netwerk beweegt informatie slechts in één richting - van de invoerlaag door verborgen lagen naar de uitvoerlaag. Er zijn geen lussen of cycli, wat het de eenvoudigste vorm van kunstmatige neurale netwerkarchitectuur maakt."
        }
      },
      {
        question: {
          en: "What is the role of hidden layers in neural networks?",
          es: "¿Cuál es el papel de las capas ocultas en las redes neuronales?",
          de: "Was ist die Rolle versteckter Schichten in neuronalen Netzwerken?",
          nl: "Wat is de rol van verborgen lagen in neurale netwerken?"
        },
        options: [
          { en: "They extract and transform features from input data to enable complex pattern recognition", es: "Extraen y transforman características de los datos de entrada para permitir el reconocimiento de patrones complejos", de: "Sie extrahieren und transformieren Merkmale aus Eingabedaten um komplexe Mustererkennung zu ermöglichen", nl: "Ze extraheren en transformeren kenmerken uit invoerdata om complexe patroonherkenning mogelijk te maken" },
          { en: "They store the network's memory", es: "Almacenan la memoria de la red", de: "Sie speichern das Gedächtnis des Netzwerks", nl: "Ze slaan het geheugen van het netwerk op" },
          { en: "They control the network's speed", es: "Controlan la velocidad de la red", de: "Sie kontrollieren die Geschwindigkeit des Netzwerks", nl: "Ze controleren de snelheid van het netwerk" },
          { en: "They are only used for visualization purposes", es: "Solo se usan para propósitos de visualización", de: "Sie werden nur für Visualisierungszwecke verwendet", nl: "Ze worden alleen gebruikt voor visualisatiedoeleinden" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden layers are the computational engine of neural networks. They progressively extract higher-level features from the input data. Each layer builds upon the representations learned by the previous layer, enabling the network to recognize increasingly complex patterns.",
          es: "Las capas ocultas son el motor computacional de las redes neuronales. Extraen progresivamente características de alto nivel de los datos de entrada. Cada capa se basa en las representaciones aprendidas por la capa anterior, permitiendo que la red reconozca patrones cada vez más complejos.",
          de: "Versteckte Schichten sind die Berechnungsmaschine neuronaler Netzwerke. Sie extrahieren progressiv höherwertige Merkmale aus den Eingabedaten. Jede Schicht baut auf den Darstellungen auf die von der vorherigen Schicht gelernt wurden, wodurch das Netzwerk zunehmend komplexe Muster erkennen kann.",
          nl: "Verborgen lagen zijn de rekenkundige motor van neurale netwerken. Ze extraheren progressief hogere-niveau kenmerken uit de invoerdata. Elke laag bouwt voort op de representaties geleerd door de vorige laag, waardoor het netwerk steeds complexere patronen kan herkennen."
        }
      },
      {
        question: {
          en: "What is a perceptron in neural networks?",
          es: "¿Qué es un perceptrón en las redes neuronales?",
          de: "Was ist ein Perceptron in neuronalen Netzwerken?",
          nl: "Wat is een perceptron in neurale netwerken?"
        },
        options: [
          { en: "The simplest form of a neural network with a single layer that can solve linearly separable problems", es: "La forma más simple de una red neuronal con una sola capa que puede resolver problemas linealmente separables", de: "Die einfachste Form eines neuronalen Netzwerks mit einer einzigen Schicht die linear separable Probleme lösen kann", nl: "De eenvoudigste vorm van een neuraal netwerk met een enkele laag die lineair scheidbare problemen kan oplossen" },
          { en: "A complex multi-layer network architecture", es: "Una arquitectura de red compleja multicapa", de: "Eine komplexe mehrschichtige Netzwerkarchitektur", nl: "Een complexe meerlaagse netwerkarchitectuur" },
          { en: "A type of activation function", es: "Un tipo de función de activación", de: "Eine Art von Aktivierungsfunktion", nl: "Een type activatiefunctie" },
          { en: "A method for data preprocessing", es: "Un método para preprocesamiento de datos", de: "Eine Methode für Datenvorverarbeitung", nl: "Een methode voor datavoorverwerking" }
        ],
        correct: 0,
        explanation: {
          en: "A perceptron is the building block of neural networks, consisting of a single artificial neuron. It takes multiple inputs, applies weights and a bias, and produces a binary output. While limited to linearly separable problems, it laid the foundation for modern neural networks.",
          es: "Un perceptrón es el bloque de construcción de las redes neuronales, consistiendo en una sola neurona artificial. Toma múltiples entradas, aplica pesos y un sesgo, y produce una salida binaria. Aunque limitado a problemas linealmente separables, sentó las bases para las redes neuronales modernas.",
          de: "Ein Perceptron ist der Baustein neuronaler Netzwerke, bestehend aus einem einzelnen künstlichen Neuron. Es nimmt mehrere Eingaben, wendet Gewichte und Bias an und erzeugt eine binäre Ausgabe. Obwohl auf linear separable Probleme beschränkt, legte es den Grundstein für moderne neuronale Netzwerke.",
          nl: "Een perceptron is de bouwsteen van neurale netwerken, bestaande uit een enkel kunstmatig neuron. Het neemt meerdere invoer, past gewichten en een bias toe, en produceert een binaire uitvoer. Hoewel beperkt tot lineair scheidbare problemen, legde het de basis voor moderne neurale netwerken."
        }
      },
      {
        question: {
          en: "What is meant by the 'depth' of a neural network?",
          es: "¿Qué significa la 'profundidad' de una red neuronal?",
          de: "Was bedeutet die 'Tiefe' eines neuronalen Netzwerks?",
          nl: "Wat wordt bedoeld met de 'diepte' van een neuraal netwerk?"
        },
        options: [
          { en: "The number of hidden layers in the network", es: "El número de capas ocultas en la red", de: "Die Anzahl versteckter Schichten im Netzwerk", nl: "Het aantal verborgen lagen in het netwerk" },
          { en: "The number of neurons in each layer", es: "El número de neuronas en cada capa", de: "Die Anzahl Neuronen in jeder Schicht", nl: "Het aantal neuronen in elke laag" },
          { en: "The complexity of the mathematical operations", es: "La complejidad de las operaciones matemáticas", de: "Die Komplexität der mathematischen Operationen", nl: "De complexiteit van de wiskundige bewerkingen" },
          { en: "The amount of training data required", es: "La cantidad de datos de entrenamiento requeridos", de: "Die Menge der benötigten Trainingsdaten", nl: "De hoeveelheid trainingsdata die nodig is" }
        ],
        correct: 0,
        explanation: {
          en: "The depth of a neural network refers to the number of hidden layers it contains. Shallow networks have few hidden layers, while deep networks have many. Deep networks can learn more complex hierarchical representations but require more computational resources and training data.",
          es: "La profundidad de una red neuronal se refiere al número de capas ocultas que contiene. Las redes superficiales tienen pocas capas ocultas, mientras que las redes profundas tienen muchas. Las redes profundas pueden aprender representaciones jerárquicas más complejas pero requieren más recursos computacionales y datos de entrenamiento.",
          de: "Die Tiefe eines neuronalen Netzwerks bezieht sich auf die Anzahl versteckter Schichten die es enthält. Flache Netzwerke haben wenige versteckte Schichten, während tiefe Netzwerke viele haben. Tiefe Netzwerke können komplexere hierarchische Darstellungen lernen benötigen aber mehr Rechenressourcen und Trainingsdaten.",
          nl: "De diepte van een neuraal netwerk verwijst naar het aantal verborgen lagen dat het bevat. Ondiepe netwerken hebben weinig verborgen lagen, terwijl diepe netwerken er veel hebben. Diepe netwerken kunnen complexere hiërarchische representaties leren maar vereisen meer rekenkracht en trainingsdata."
        }
      },
      {
        question: {
          en: "What is the purpose of the input layer in a neural network?",
          es: "¿Cuál es el propósito de la capa de entrada en una red neuronal?",
          de: "Was ist der Zweck der Eingabeschicht in einem neuronalen Netzwerk?",
          nl: "Wat is het doel van de invoerlaag in een neuraal netwerk?"
        },
        options: [
          { en: "To receive and distribute the raw input data to the first hidden layer", es: "Para recibir y distribuir los datos de entrada sin procesar a la primera capa oculta", de: "Um die rohen Eingabedaten zu empfangen und an die erste versteckte Schicht zu verteilen", nl: "Om ruwe invoerdata te ontvangen en te distribueren naar de eerste verborgen laag" },
          { en: "To perform the main computations of the network", es: "Para realizar los cálculos principales de la red", de: "Um die Hauptberechnungen des Netzwerks durchzuführen", nl: "Om de hoofdberekeningen van het netwerk uit te voeren" },
          { en: "To generate the final output of the network", es: "Para generar la salida final de la red", de: "Um die finale Ausgabe des Netzwerks zu erzeugen", nl: "Om de finale uitvoer van het netwerk te genereren" },
          { en: "To store the network's learned parameters", es: "Para almacenar los parámetros aprendidos de la red", de: "Um die gelernten Parameter des Netzwerks zu speichern", nl: "Om de geleerde parameters van het netwerk op te slaan" }
        ],
        correct: 0,
        explanation: {
          en: "The input layer serves as the entry point for data into the neural network. It doesn't perform any computations but simply receives the input features and passes them to the first hidden layer. The number of neurons in the input layer equals the number of input features.",
          es: "La capa de entrada sirve como punto de entrada para los datos en la red neuronal. No realiza ningún cálculo sino que simplemente recibe las características de entrada y las pasa a la primera capa oculta. El número de neuronas en la capa de entrada es igual al número de características de entrada.",
          de: "Die Eingabeschicht dient als Einstiegspunkt für Daten in das neuronale Netzwerk. Sie führt keine Berechnungen durch sondern empfängt einfach die Eingabemerkmale und gibt sie an die erste versteckte Schicht weiter. Die Anzahl der Neuronen in der Eingabeschicht entspricht der Anzahl der Eingabemerkmale.",
          nl: "De invoerlaag dient als toegangspunt voor data in het neurale netwerk. Het voert geen berekeningen uit maar ontvangt simpelweg de invoerkenmerken en geeft ze door aan de eerste verborgen laag. Het aantal neuronen in de invoerlaag is gelijk aan het aantal invoerkenmerken."
        }
      },
      {
        question: {
          en: "What is the output layer in a neural network?",
          es: "¿Qué es la capa de salida en una red neuronal?",
          de: "Was ist die Ausgabeschicht in einem neuronalen Netzwerk?",
          nl: "Wat is de uitvoerlaag in een neuraal netwerk?"
        },
        options: [
          { en: "The final layer that produces the network's prediction or classification result", es: "La capa final que produce la predicción o resultado de clasificación de la red", de: "Die finale Schicht die die Vorhersage oder das Klassifikationsergebnis des Netzwerks erzeugt", nl: "De finale laag die de voorspelling of classificatieresultaat van het netwerk produceert" },
          { en: "The layer that receives input data", es: "La capa que recibe datos de entrada", de: "Die Schicht die Eingabedaten empfängt", nl: "De laag die invoerdata ontvangt" },
          { en: "The layer responsible for feature extraction", es: "La capa responsable de la extracción de características", de: "Die Schicht verantwortlich für Merkmalsextraktion", nl: "De laag verantwoordelijk voor kenmerkextractie" },
          { en: "The layer that stores training data", es: "La capa que almacena datos de entrenamiento", de: "Die Schicht die Trainingsdaten speichert", nl: "De laag die trainingsdata opslaat" }
        ],
        correct: 0,
        explanation: {
          en: "The output layer is the final layer of a neural network that produces the final result. For classification tasks, it typically has one neuron per class. For regression tasks, it usually has one neuron that outputs a continuous value. The activation function chosen for this layer depends on the specific task.",
          es: "La capa de salida es la capa final de una red neuronal que produce el resultado final. Para tareas de clasificación, típicamente tiene una neurona por clase. Para tareas de regresión, usualmente tiene una neurona que produce un valor continuo. La función de activación elegida para esta capa depende de la tarea específica.",
          de: "Die Ausgabeschicht ist die finale Schicht eines neuronalen Netzwerks die das finale Ergebnis erzeugt. Für Klassifikationsaufgaben hat sie typischerweise ein Neuron pro Klasse. Für Regressionsaufgaben hat sie meist ein Neuron das einen kontinuierlichen Wert ausgibt. Die für diese Schicht gewählte Aktivierungsfunktion hängt von der spezifischen Aufgabe ab.",
          nl: "De uitvoerlaag is de finale laag van een neuraal netwerk die het eindresultaat produceert. Voor classificatietaken heeft het typisch één neuron per klasse. Voor regressietaken heeft het meestal één neuron dat een continue waarde uitvoert. De activatiefunctie gekozen voor deze laag hangt af van de specifieke taak."
        }
      },
      {
        question: {
          en: "What happens when you initialize all weights to zero in a neural network?",
          es: "¿Qué sucede cuando inicializas todos los pesos a cero en una red neuronal?",
          de: "Was passiert wenn Sie alle Gewichte auf null in einem neuronalen Netzwerk initialisieren?",
          nl: "Wat gebeurt er wanneer je alle gewichten op nul initialiseert in een neuraal netwerk?"
        },
        options: [
          { en: "All neurons in the same layer will learn identical features, making the network ineffective", es: "Todas las neuronas en la misma capa aprenderán características idénticas, haciendo que la red sea ineficaz", de: "Alle Neuronen in derselben Schicht werden identische Merkmale lernen, wodurch das Netzwerk ineffektiv wird", nl: "Alle neuronen in dezelfde laag zullen identieke kenmerken leren, waardoor het netwerk ineffectief wordt" },
          { en: "The network will train faster", es: "La red entrenará más rápido", de: "Das Netzwerk wird schneller trainieren", nl: "Het netwerk zal sneller trainen" },
          { en: "The network will be more stable", es: "La red será más estable", de: "Das Netzwerk wird stabiler sein", nl: "Het netwerk zal stabieler zijn" },
          { en: "Nothing significant will happen", es: "No pasará nada significativo", de: "Nichts Bedeutendes wird passieren", nl: "Er zal niets significants gebeuren" }
        ],
        correct: 0,
        explanation: {
          en: "Initializing all weights to zero causes the symmetry problem. All neurons in the same layer will receive identical gradients and update identically, essentially making them learn the same features. This defeats the purpose of having multiple neurons and severely limits the network's learning capacity.",
          es: "Inicializar todos los pesos a cero causa el problema de simetría. Todas las neuronas en la misma capa recibirán gradientes idénticos y se actualizarán de manera idéntica, esencialmente haciéndolas aprender las mismas características. Esto derrota el propósito de tener múltiples neuronas y limita severamente la capacidad de aprendizaje de la red.",
          de: "Die Initialisierung aller Gewichte auf null verursacht das Symmetrieproblem. Alle Neuronen in derselben Schicht werden identische Gradienten erhalten und sich identisch aktualisieren, wodurch sie im Wesentlichen die gleichen Merkmale lernen. Dies macht den Zweck mehrerer Neuronen zunichte und begrenzt die Lernfähigkeit des Netzwerks erheblich.",
          nl: "Het initialiseren van alle gewichten op nul veroorzaakt het symmetrieprobleem. Alle neuronen in dezelfde laag zullen identieke gradiënten ontvangen en identiek updaten, waardoor ze in wezen dezelfde kenmerken leren. Dit ondermijnt het doel van meerdere neuronen en beperkt de leercapaciteit van het netwerk ernstig."
        }
      },
      {
        question: {
          en: "What is weight initialization in neural networks?",
          es: "¿Qué es la inicialización de pesos en las redes neuronales?",
          de: "Was ist Gewichtsinitialisierung in neuronalen Netzwerken?",
          nl: "Wat is gewichtinitialisatie in neurale netwerken?"
        },
        options: [
          { en: "The process of setting initial values for network weights before training begins", es: "El proceso de establecer valores iniciales para los pesos de la red antes de que comience el entrenamiento", de: "Der Prozess des Setzens von Anfangswerten für Netzwerkgewichte bevor das Training beginnt", nl: "Het proces van het instellen van initiële waarden voor netwerkgewichten voordat training begint" },
          { en: "The final step after training is complete", es: "El paso final después de que se completa el entrenamiento", de: "Der finale Schritt nachdem das Training abgeschlossen ist", nl: "De finale stap nadat training voltooid is" },
          { en: "The process of removing weights from the network", es: "El proceso de eliminar pesos de la red", de: "Der Prozess des Entfernens von Gewichten aus dem Netzwerk", nl: "Het proces van het verwijderen van gewichten uit het netwerk" },
          { en: "The method to calculate final predictions", es: "El método para calcular predicciones finales", de: "Die Methode zur Berechnung finaler Vorhersagen", nl: "De methode om finale voorspellingen te berekenen" }
        ],
        correct: 0,
        explanation: {
          en: "Weight initialization is crucial for neural network training success. Proper initialization helps avoid vanishing/exploding gradients and ensures neurons learn diverse features. Common methods include Xavier/Glorot initialization and He initialization, which consider the network architecture to set appropriate initial weight ranges.",
          es: "La inicialización de pesos es crucial para el éxito del entrenamiento de redes neuronales. La inicialización adecuada ayuda a evitar gradientes que se desvanecen/explotan y asegura que las neuronas aprendan características diversas. Los métodos comunes incluyen la inicialización Xavier/Glorot y la inicialización He, que consideran la arquitectura de la red para establecer rangos de peso inicial apropiados.",
          de: "Gewichtsinitialisierung ist entscheidend für den Erfolg des neuronalen Netzwerktrainings. Ordnungsgemäße Initialisierung hilft verschwindende/explodierende Gradienten zu vermeiden und stellt sicher dass Neuronen diverse Merkmale lernen. Häufige Methoden umfassen Xavier/Glorot-Initialisierung und He-Initialisierung, die die Netzwerkarchitektur berücksichtigen um angemessene anfängliche Gewichtsbereiche zu setzen.",
          nl: "Gewichtinitialisatie is cruciaal voor het succes van neurale netwerktraining. Juiste initialisatie helpt verdwijnende/exploderende gradiënten te vermijden en zorgt ervoor dat neuronen diverse kenmerken leren. Veelvoorkomende methoden zijn Xavier/Glorot-initialisatie en He-initialisatie, die de netwerkarchitectuur overwegen om geschikte initiële gewichtbereiken in te stellen."
        }
      },
      {
        question: {
          en: "What is a multilayer perceptron (MLP)?",
          es: "¿Qué es un perceptrón multicapa (MLP)?",
          de: "Was ist ein mehrschichtiges Perceptron (MLP)?",
          nl: "Wat is een meerlaags perceptron (MLP)?"
        },
        options: [
          { en: "A feedforward neural network with one or more hidden layers between input and output", es: "Una red neuronal feedforward con una o más capas ocultas entre entrada y salida", de: "Ein Feedforward-neuronales Netzwerk mit einer oder mehreren versteckten Schichten zwischen Eingabe und Ausgabe", nl: "Een feedforward neuraal netwerk met een of meer verborgen lagen tussen invoer en uitvoer" },
          { en: "A network that can only solve linear problems", es: "Una red que solo puede resolver problemas lineales", de: "Ein Netzwerk das nur lineare Probleme lösen kann", nl: "Een netwerk dat alleen lineaire problemen kan oplossen" },
          { en: "A single-layer neural network", es: "Una red neuronal de una sola capa", de: "Ein einschichtiges neuronales Netzwerk", nl: "Een enkellaags neuraal netwerk" },
          { en: "A network used only for image processing", es: "Una red usada solo para procesamiento de imágenes", de: "Ein Netzwerk das nur für Bildverarbeitung verwendet wird", nl: "Een netwerk alleen gebruikt voor beeldverwerking" }
        ],
        correct: 0,
        explanation: {
          en: "A multilayer perceptron (MLP) is a foundational deep learning architecture consisting of multiple layers of neurons. Unlike the single-layer perceptron, MLPs can learn non-linear patterns thanks to hidden layers and activation functions. They are versatile and can handle classification, regression, and pattern recognition tasks.",
          es: "Un perceptrón multicapa (MLP) es una arquitectura foundacional de aprendizaje profundo que consiste en múltiples capas de neuronas. A diferencia del perceptrón de una sola capa, los MLP pueden aprender patrones no lineales gracias a las capas ocultas y funciones de activación. Son versátiles y pueden manejar tareas de clasificación, regresión y reconocimiento de patrones.",
          de: "Ein mehrschichtiges Perceptron (MLP) ist eine grundlegende Deep-Learning-Architektur bestehend aus mehreren Schichten von Neuronen. Im Gegensatz zum einschichtigen Perceptron können MLPs nichtlineare Muster lernen dank versteckter Schichten und Aktivierungsfunktionen. Sie sind vielseitig und können Klassifikations-, Regressions- und Mustererkennungsaufgaben bewältigen.",
          nl: "Een meerlaags perceptron (MLP) is een fundamentele deep learning architectuur bestaande uit meerdere lagen neuronen. In tegenstelling tot het enkellaags perceptron kunnen MLPs non-lineaire patronen leren dankzij verborgen lagen en activatiefuncties. Ze zijn veelzijdig en kunnen classificatie-, regressie- en patroonherkenningstaken aan."
        }
      },
      {
        question: {
          en: "What is the universal approximation theorem in relation to neural networks?",
          es: "¿Qué es el teorema de aproximación universal en relación con las redes neuronales?",
          de: "Was ist der universelle Approximationssatz in Bezug auf neuronale Netzwerke?",
          nl: "Wat is de universele benaderingsstelling in relatie tot neurale netwerken?"
        },
        options: [
          { en: "A theorem stating that a neural network with enough neurons can approximate any continuous function", es: "Teorema que establece que red neuronal con suficientes neuronas puede aproximar cualquier función continua", de: "Theorem dass neuronales Netzwerk mit genügend Neuronen jede kontinuierliche Funktion approximieren kann", nl: "Stelling die zegt dat neuraal netwerk met genoeg neuronen elke continue functie kan benaderen" },
          { en: "A theorem about the maximum number of layers in a network", es: "Un teorema sobre el número máximo de capas en una red", de: "Ein Theorem über die maximale Anzahl von Schichten in einem Netzwerk", nl: "Een stelling over het maximale aantal lagen in een netwerk" },
          { en: "A theorem that limits neural network capabilities", es: "Un teorema que limita las capacidades de las redes neuronales", de: "Ein Theorem das die Fähigkeiten neuronaler Netzwerke begrenzt", nl: "Een stelling die de capaciteiten van neurale netwerken beperkt" },
          { en: "A theorem about training speed optimization", es: "Un teorema sobre optimización de velocidad de entrenamiento", de: "Ein Theorem über Traningsgeschwindigkeitsoptimierung", nl: "Een stelling over trainingssnelheidsoptimalisatie" }
        ],
        correct: 0,
        explanation: {
          en: "The universal approximation theorem is a fundamental result proving that neural networks with at least one hidden layer and enough neurons can approximate any continuous function to arbitrary accuracy. This theorem provides the theoretical foundation for why neural networks are so powerful and versatile.",
          es: "El teorema de aproximación universal es un resultado fundamental que prueba que las redes neuronales con al menos una capa oculta y suficientes neuronas pueden aproximar cualquier función continua con precisión arbitraria. Este teorema proporciona la base teórica de por qué las redes neuronales son tan poderosas y versátiles.",
          de: "Der universelle Approximationssatz ist ein fundamentales Ergebnis das beweist dass neuronale Netzwerke mit mindestens einer versteckten Schicht und genügend Neuronen jede kontinuierliche Funktion mit beliebiger Genauigkeit approximieren können. Dieses Theorem bietet die theoretische Grundlage dafür warum neuronale Netzwerke so mächtig und vielseitig sind.",
          nl: "De universele benaderingsstelling is een fundamenteel resultaat dat bewijst dat neurale netwerken met ten minste één verborgen laag en genoeg neuronen elke continue functie met willekeurige nauwkeurigheid kunnen benaderen. Deze stelling biedt de theoretische basis voor waarom neurale netwerken zo krachtig en veelzijdig zijn."
        }
      },
      {
        question: {
          en: "What is the difference between batch, mini-batch, and stochastic gradient descent?",
          es: "¿Cuál es la diferencia entre descenso de gradiente por lotes, mini-lotes y estocástico?",
          de: "Was ist der Unterschied zwischen Batch-, Mini-Batch- und stochastischem Gradientenabstieg?",
          nl: "Wat is het verschil tussen batch, mini-batch en stochastische gradient descent?"
        },
        options: [
          { en: "They differ in how many training samples are used to compute gradients: all samples, small subset, or one sample respectively", es: "Difieren en cuántas muestras de entrenamiento se usan para calcular gradientes: todas las muestras, subconjunto pequeño, o una muestra respectivamente", de: "Sie unterscheiden sich darin wie viele Trainingsproben zur Gradientenberechnung verwendet werden: alle Proben, kleine Teilmenge oder eine Probe jeweils", nl: "Ze verschillen in hoeveel trainingssteekproeven gebruikt worden om gradiënten te berekenen: alle steekproeven, kleine subset, of één steekproef respectievelijk" },
          { en: "They are different activation functions", es: "Son diferentes funciones de activación", de: "Sie sind verschiedene Aktivierungsfunktionen", nl: "Het zijn verschillende activatiefuncties" },
          { en: "They represent different network architectures", es: "Representan diferentes arquitecturas de red", de: "Sie repräsentieren verschiedene Netzwerkarchitekturen", nl: "Ze vertegenwoordigen verschillende netwerkarchitecturen" },
          { en: "They are different loss functions", es: "Son diferentes funciones de pérdida", de: "Sie sind verschiedene Verlustfunktionen", nl: "Het zijn verschillende verliesfuncties" }
        ],
        correct: 0,
        explanation: {
          en: "Batch gradient descent uses the entire training set to compute gradients (slow but stable), stochastic gradient descent uses one sample at a time (fast but noisy), and mini-batch gradient descent uses small subsets of data (good balance of speed and stability).",
          es: "El descenso de gradiente por lotes usa todo el conjunto de entrenamiento para calcular gradientes (lento pero estable), el descenso de gradiente estocástico usa una muestra a la vez (rápido pero ruidoso), y el descenso de gradiente por mini-lotes usa pequeños subconjuntos de datos (buen equilibrio de velocidad y estabilidad).",
          de: "Batch-Gradientenabstieg verwendet den gesamten Trainingssatz zur Gradientenberechnung (langsam aber stabil), stochastischer Gradientenabstieg verwendet eine Probe nach der anderen (schnell aber verrauscht), und Mini-Batch-Gradientenabstieg verwendet kleine Datensubsets (gute Balance aus Geschwindigkeit und Stabilität).",
          nl: "Batch gradient descent gebruikt de hele trainingsset om gradiënten te berekenen (langzaam maar stabiel), stochastische gradient descent gebruikt één steekproef tegelijk (snel maar ruis), en mini-batch gradient descent gebruikt kleine subsets van data (goede balans tussen snelheid en stabiliteit)."
        }
      },
      {
        question: {
          en: "What is the purpose of bias terms in neural network neurons?",
          es: "¿Cuál es el propósito de los términos de sesgo en las neuronas de las redes neuronales?",
          de: "Was ist der Zweck von Bias-Termen in neuronalen Netzwerk-Neuronen?",
          nl: "Wat is het doel van bias-termen in neurale netwerk neuronen?"
        },
        options: [
          { en: "To shift the activation function and control when neurons activate regardless of input", es: "Para desplazar la función de activación y controlar cuándo se activan las neuronas independientemente de la entrada", de: "Um die Aktivierungsfunktion zu verschieben und zu kontrollieren wann Neuronen unabhängig von der Eingabe aktivieren", nl: "Om de activatiefunctie te verschuiven en te controleren wanneer neuronen activeren onafhankelijk van invoer" },
          { en: "To increase the computational speed", es: "Para aumentar la velocidad computacional", de: "Um die Berechnungsgeschwindigkeit zu erhöhen", nl: "Om de rekensnelheid te verhogen" },
          { en: "To reduce overfitting", es: "Para reducir el sobreajuste", de: "Um Überanpassung zu reduzieren", nl: "Om overfitting te verminderen" },
          { en: "To store previous activations", es: "Para almacenar activaciones anteriores", de: "Um vorherige Aktivierungen zu speichern", nl: "Om vorige activaties op te slaan" }
        ],
        correct: 0,
        explanation: {
          en: "Bias terms provide an offset or threshold that allows neurons to activate even when all weighted inputs sum to zero. They give the network more flexibility by shifting the activation function horizontally, enabling neurons to learn when to 'fire' independent of the input patterns.",
          es: "Los términos de sesgo proporcionan un desplazamiento o umbral que permite que las neuronas se activen incluso cuando todas las entradas ponderadas suman cero. Dan a la red más flexibilidad al desplazar la función de activación horizontalmente, permitiendo que las neuronas aprendan cuándo 'disparar' independientemente de los patrones de entrada.",
          de: "Bias-Terme bieten einen Offset oder Schwellenwert der es Neuronen ermöglicht zu aktivieren auch wenn alle gewichteten Eingaben null ergeben. Sie geben dem Netzwerk mehr Flexibilität durch horizontales Verschieben der Aktivierungsfunktion, wodurch Neuronen lernen können wann sie 'feuern' sollen unabhängig von den Eingabemustern.",
          nl: "Bias-termen bieden een verschuiving of drempelwaarde die neuronen toestaat te activeren zelfs wanneer alle gewogen invoer nul opteelt. Ze geven het netwerk meer flexibiliteit door de activatiefunctie horizontaal te verschuiven, waardoor neuronen kunnen leren wanneer ze moeten 'vuren' onafhankelijk van de invoerpatronen."
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