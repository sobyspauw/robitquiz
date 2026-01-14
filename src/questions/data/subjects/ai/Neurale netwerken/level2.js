// Neurale netwerken Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "Training Basics",
          "es": "Fundamentos del Entrenamiento",
          "de": "Grundlagen des Trainings",
          "nl": "Training Basisprincipes"
    },
    questions: [
      {
        question: {
                  "en": "What is gradient descent in neural network training?",
                  "es": "¿Qué es el descenso de gradiente en el entrenamiento de redes neuronales?",
                  "de": "Was ist Gradientenabstieg beim Training neuronaler Netzwerke?",
                  "nl": "Wat is gradient descent bij het trainen van neurale netwerken?"
        },
        options: [
        {
                  "en": "A technique to add more layers to the network",
                  "es": "Una técnica para agregar más capas a la red",
                  "de": "Eine Technik um mehr Schichten zum Netzwerk hinzuzufügen",
                  "nl": "Een techniek om meer lagen aan het netwerk toe te voegen"
        },
        {
                  "en": "A method to increase the network's complexity",
                  "es": "Un método para aumentar la complejidad de la red",
                  "de": "Eine Methode zur Erhöhung der Netzwerkkomplexität",
                  "nl": "Een methode om de complexiteit van het netwerk te verhogen"
        },
        {
                  "en": "A way to visualize the network structure",
                  "es": "Una forma de visualizar la estructura de la red",
                  "de": "Eine Art die Netzwerkstruktur zu visualisieren",
                  "nl": "Een manier om de netwerkstructuur te visualiseren"
        },
        {
                  "en": "An optimization algorithm that iteratively adjusts weights to minimize the loss function",
                  "es": "Un algoritmo de optimización que ajusta iterativamente los pesos para minimizar la función de pérdida",
                  "de": "Ein Optimierungsalgorithmus der iterativ Gewichte anpasst um die Verlustfunktion zu minimieren",
                  "nl": "Een optimalisatie-algoritme dat iteratief gewichten aanpast om de verliesfunctie te minimaliseren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Gradient descent is a fundamental optimization algorithm that finds the minimum of a function by iteratively moving in the direction of steepest descent. In neural networks, it adjusts weights by computing gradients of the loss function with respect to each weight.",
                  "es": "El descenso de gradiente es un algoritmo de optimización fundamental que encuentra el mínimo de una función moviéndose iterativamente en la dirección de mayor descenso. En redes neuronales, ajusta los pesos calculando gradientes de la función de pérdida con respecto a cada peso.",
                  "de": "Gradientenabstieg ist ein grundlegender Optimierungsalgorithmus der das Minimum einer Funktion findet durch iteratives Bewegen in Richtung des steilsten Abstiegs. In neuronalen Netzwerken passt er Gewichte an durch Berechnung von Gradienten der Verlustfunktion bezüglich jedes Gewichts.",
                  "nl": "Gradient descent is een fundamenteel optimalisatie-algoritme dat het minimum van een functie vindt door iteratief te bewegen in de richting van de steilste afdaling. In neurale netwerken past het gewichten aan door gradiënten van de verliesfunctie te berekenen ten opzichte van elk gewicht."
        }
      },
      {
        question: {
                  "en": "What is a loss function in neural networks?",
                  "es": "¿Qué es una función de pérdida en las redes neuronales?",
                  "de": "Was ist eine Verlustfunktion in neuronalen Netzwerken?",
                  "nl": "Wat is een verliesfunctie in neurale netwerken?"
        },
        options: [
        {
                  "en": "A function that calculates processing time",
                  "es": "Una función que calcula el tiempo de procesamiento",
                  "de": "Eine Funktion die Verarbeitungszeit berechnet",
                  "nl": "Een functie die verwerkingstijd berekent"
        },
        {
                  "en": "A function that measures the difference between predicted and actual outputs",
                  "es": "Una función que mide la diferencia entre las salidas predichas y reales",
                  "de": "Eine Funktion die den Unterschied zwischen vorhergesagten und tatsächlichen Ausgaben misst",
                  "nl": "Een functie die het verschil meet tussen voorspelde en werkelijke uitvoer"
        },
        {
                  "en": "A function that counts lost data pts",
                  "es": "Una función que cuenta puntos de datos perdidos",
                  "de": "Eine Funktion die verlorene Datenpunkte zählt",
                  "nl": "Een functie die verloren datapunten telt"
        },
        {
                  "en": "A function that manages memory usage",
                  "es": "Una función que gestiona el uso de memoria",
                  "de": "Eine Funktion die Speichernutzung verwaltet",
                  "nl": "Een functie die geheugengebruik beheert"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A loss function quantifies how far the network's predictions are from the true values. Common examples include mean squared error for regression and cross-entropy for classification. The goal of training is to minimize this loss function.",
                  "es": "Una función de pérdida cuantifica qué tan lejos están las predicciones de la red de los valores verdaderos. Ejemplos comunes incluyen el error cuadrático medio para regresión y entropía cruzada para clasificación. El objetivo del entrenamiento es minimizar esta función de pérdida.",
                  "de": "Eine Verlustfunktion quantifiziert wie weit die Vorhersagen des Netzwerks von den wahren Werten entfernt sind. Häufige Beispiele sind mittlerer quadratischer Fehler für Regression und Kreuzentropie für Klassifikation. Das Ziel des Trainings ist diese Verlustfunktion zu minimieren.",
                  "nl": "Een verliesfunctie kwantificeert hoe ver de voorspellingen van het netwerk van de werkelijke waarden af liggen. Veelvoorkomende voorbeelden zijn gemiddelde kwadratische fout voor regressie en kruisentropie voor classificatie. Het doel van training is deze verliesfunctie te minimaliseren."
        }
      },
      {
        question: {
                  "en": "What is backpropagation?",
                  "es": "¿Qué es la retropropagación?",
                  "de": "Was ist Rückpropagation?",
                  "nl": "Wat is backpropagation?"
        },
        options: [
        {
                  "en": "A process to backup network weights",
                  "es": "Un proceso para respaldar los pesos de la red",
                  "de": "Ein Prozess um Netzwerkgewichte zu sichern",
                  "nl": "Een proces om netwerkgewichten te back-uppen"
        },
        {
                  "en": "A method to reverse the network's predictions",
                  "es": "Un método para revertir las predicciones de la red",
                  "de": "Eine Methode um die Vorhersagen des Netzwerks umzukehren",
                  "nl": "Een methode om de voorspellingen van het netwerk om te keren"
        },
        {
                  "en": "A technique to go back to previous training steps",
                  "es": "Una técnica para volver a pasos de entrenamiento anteriores",
                  "de": "Eine Technik um zu vorherigen Trainingsschritten zurückzukehren",
                  "nl": "Een techniek om terug te gaan naar vorige trainingsstappen"
        },
        {
                  "en": "An algorithm that calculates gradients by propagating errors backward through the network",
                  "es": "Un algoritmo que calcula gradientes propagando errores hacia atrás a través de la red",
                  "de": "Ein Algorithmus der Gradienten berechnet indem Fehler rückwärts durch das Netzwerk propagiert werden",
                  "nl": "Een algoritme dat gradiënten berekent door fouten achterwaarts door het netwerk te propageren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Backpropagation is the key algorithm for training neural networks. It efficiently computes gradients of the loss function with respect to each weight by applying the chain rule of calculus, starting from the output layer and working backwards to the input layer.",
                  "es": "La retropropagación es el algoritmo clave para entrenar redes neuronales. Calcula eficientemente gradientes de la función de pérdida con respecto a cada peso aplicando la regla de la cadena del cálculo, comenzando desde la capa de salida y trabajando hacia atrás hasta la capa de entrada.",
                  "de": "Rückpropagation ist der Schlüsselalgorithmus zum Training neuronaler Netzwerke. Er berechnet effizient Gradienten der Verlustfunktion bezüglich jedes Gewichts durch Anwendung der Kettenregel der Analysis, beginnend von der Ausgabeschicht und rückwärts zur Eingabeschicht arbeitend.",
                  "nl": "Backpropagation is het sleutelalgoritme voor het trainen van neurale netwerken. Het berekent efficiënt gradiënten van de verliesfunctie ten opzichte van elk gewicht door de kettingregel van de calculus toe te passen, beginnend vanaf de uitvoerlaag en achterwaarts werkend naar de invoerlaag."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a learning rate in gradient descent?",
                  "es": "¿Cuál es el propósito de una tasa de aprendizaje en el descenso de gradiente?",
                  "de": "Was ist der Zweck einer Lernrate beim Gradientenabstieg?",
                  "nl": "Wat is het doel van een leersnelheid bij gradient descent?"
        },
        options: [
        {
                  "en": "It sets the number of training epochs",
                  "es": "Establece el número de épocas de entrenamiento",
                  "de": "Es legt die Anzahl der Trainingsepochen fest",
                  "nl": "Het stelt het aantal training-epochs in"
        },
        {
                  "en": "It determines how fast the network processes data",
                  "es": "Determina qué tan rápido la red procesa los datos",
                  "de": "Es bestimmt wie schnell das Netzwerk Daten verarbeitet",
                  "nl": "Het bepaalt hoe snel het netwerk data verwerkt"
        },
        {
                  "en": "It controls how large steps the algorithm takes when updating weights",
                  "es": "Controla qué tan grandes son los pasos que toma el algoritmo al actualizar los pesos",
                  "de": "Es kontrolliert wie große Schritte der Algorithmus beim Aktualisieren der Gewichte macht",
                  "nl": "Het controleert hoe grote stappen het algoritme neemt bij het bijwerken van gewichten"
        },
        {
                  "en": "It controls the network's memory usage",
                  "es": "Controla el uso de memoria de la red",
                  "de": "Es kontrolliert die Speichernutzung des Netzwerks",
                  "nl": "Het controleert het geheugengebruik van het netwerk"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The learning rate is a hyperparameter that controls the step size in gradient descent. A small learning rate leads to slow but stable convergence, while a large learning rate can cause faster training but may overshoot the minimum or cause instability.",
                  "es": "La tasa de aprendizaje es un hiperparámetro que controla el tamaño del paso en el descenso de gradiente. Una tasa de aprendizaje pequeña lleva a una convergencia lenta pero estable, mientras que una tasa grande puede causar entrenamiento más rápido pero puede pasar por alto el mínimo o causar inestabilidad.",
                  "de": "Die Lernrate ist ein Hyperparameter der die Schrittgröße beim Gradientenabstieg kontrolliert. Eine kleine Lernrate führt zu langsamer aber stabiler Konvergenz, während eine große Lernrate schnelleres Training verursachen kann aber das Minimum überschießen oder Instabilität verursachen kann.",
                  "nl": "De leersnelheid is een hyperparameter die de stapgrootte in gradient descent controleert. Een kleine leersnelheid leidt tot langzame maar stabiele convergentie, terwijl een grote leersnelheid snellere training kan veroorzaken maar het minimum kan overschrijden of instabiliteit kan veroorzaken."
        }
      },
      {
        question: {
                  "en": "What happens during one training epoch?",
                  "es": "¿Qué sucede durante una época de entrenamiento?",
                  "de": "Was passiert während einer Trainingsepoche?",
                  "nl": "Wat gebeurt er tijdens één training-epoch?"
        },
        options: [
        {
                  "en": "The network is completely reset",
                  "es": "La red se reinicia completamente",
                  "de": "Das Netzwerk wird vollständig zurückgesetzt",
                  "nl": "Het netwerk wordt volledig gereset"
        },
        {
                  "en": "The network processes the entire training dataset once and updates weights",
                  "es": "La red procesa todo el conjunto de datos de entrenamiento una vez y actualiza los pesos",
                  "de": "Das Netzwerk verarbeitet den gesamten Trainingsdatensatz einmal und aktualisiert Gewichte",
                  "nl": "Het netwerk verwerkt de volledige trainingsdataset één keer en werkt gewichten bij"
        },
        {
                  "en": "The network architecture is modified",
                  "es": "La arquitectura de la red se modifica",
                  "de": "Die Netzwerkarchitektur wird modifiziert",
                  "nl": "De netwerkarchitectuur wordt gewijzigd"
        },
        {
                  "en": "Only one data sample is processed",
                  "es": "Solo se procesa una muestra de datos",
                  "de": "Nur eine Datenprobe wird verarbeitet",
                  "nl": "Slechts één datasteekproef wordt verwerkt"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "An epoch represents one complete pass through the entire training dataset. During an epoch, the network sees every training example once, computes predictions, calculates losses, and updates weights through backpropagation. Multiple epochs are typically needed for effective training.",
                  "es": "Una época representa un pase completo a través de todo el conjunto de datos de entrenamiento. Durante una época, la red ve cada ejemplo de entrenamiento una vez, calcula predicciones, calcula pérdidas y actualiza pesos a través de retropropagación. Múltiples épocas son típicamente necesarias para un entrenamiento efectivo.",
                  "de": "Eine Epoche repräsentiert einen vollständigen Durchgang durch den gesamten Trainingsdatensatz. Während einer Epoche sieht das Netzwerk jedes Trainingsbeispiel einmal, berechnet Vorhersagen, berechnet Verluste und aktualisiert Gewichte durch Rückpropagation. Mehrere Epochen sind typischerweise für effektives Training nötig.",
                  "nl": "Een epoch vertegenwoordigt één volledige doorgang door de hele trainingsdataset. Tijdens een epoch ziet het netwerk elk trainingsvoorbeeld één keer, berekent voorspellingen, berekent verliezen en werkt gewichten bij door backpropagation. Meerdere epochs zijn typisch nodig voor effectieve training."
        }
      },
      {
        question: {
                  "en": "What is a neuron (node) in a neural network?",
                  "es": "¿Qué es una neurona (nodo) en una red neuronal?",
                  "de": "Was ist ein Neuron (Knoten) in einem neuronalen Netzwerk?",
                  "nl": "Wat is een neuron (node) in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "A type of activation function",
                  "es": "Un tipo de función de activación",
                  "de": "Eine Art von Aktivierungsfunktion",
                  "nl": "Een type activatiefunctie"
        },
        {
                  "en": "A data storage unit in the network",
                  "es": "Una unidad de almacenamiento de datos en la red",
                  "de": "Eine Datenspeichereinheit im Netzwerk",
                  "nl": "Een data-opslageenheid in het netwerk"
        },
        {
                  "en": "A computational unit that receives inputs, applies weights and bias, and produces an output through an activation function",
                  "es": "Una unidad computacional que recibe entradas, aplica pesos y sesgo, y produce una salida a través de una función de activación",
                  "de": "Eine Berechnungseinheit die Eingaben empfängt, Gewichte und Bias anwendet und eine Ausgabe durch eine Aktivierungsfunktion erzeugt",
                  "nl": "Een rekenkundige eenheid die invoer ontvangt, gewichten en bias toepast, en uitvoer produceert via een activatiefunctie"
        },
        {
                  "en": "A connection between layers",
                  "es": "Una conexión entre capas",
                  "de": "Eine Verbindung zwischen Schichten",
                  "nl": "Een verbinding tussen lagen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A neuron is the basic processing unit of a neural network. It takes multiple inputs, multiplies each by a weight, adds a bias term, sums everything up, and then applies an activation function to produce the final output.",
                  "es": "Una neurona es la unidad básica de procesamiento de una red neuronal. Toma múltiples entradas, multiplica cada una por un peso, agrega un término de sesgo, suma todo y luego aplica una función de activación para producir la salida final.",
                  "de": "Ein Neuron ist die grundlegende Verarbeitungseinheit eines neuronalen Netzwerks. Es nimmt mehrere Eingaben, multipliziert jede mit einem Gewicht, fügt einen Bias-Term hinzu, summiert alles auf und wendet dann eine Aktivierungsfunktion an um die finale Ausgabe zu erzeugen.",
                  "nl": "Een neuron is de basale verwerkingseenheid van een neuraal netwerk. Het neemt meerdere invoer, vermenigvuldigt elk met een gewicht, voegt een bias-term toe, telt alles op en past dan een activatiefunctie toe om de finale uitvoer te produceren."
        }
      },
      {
        question: {
                  "en": "What is the purpose of activation functions in neural networks?",
                  "es": "¿Cuál es el propósito de las funciones de activación en las redes neuronales?",
                  "de": "Was ist der Zweck von Aktivierungsfunktionen in neuronalen Netzwerken?",
                  "nl": "Wat is het doel van activatiefuncties in neurale netwerken?"
        },
        options: [
        {
                  "en": "To store intermediate calculations",
                  "es": "Para almacenar cálculos intermedios",
                  "de": "Um Zwischenberechnungen zu speichern",
                  "nl": "Om tussenberekeningen op te slaan"
        },
        {
                  "en": "To speed up the training process",
                  "es": "Para acelerar el proceso de entrenamiento",
                  "de": "Um den Trainingsprozess zu beschleunigen",
                  "nl": "Om het trainingsproces te versnellen"
        },
        {
                  "en": "To introduce non-linearity and enable the network to learn complex patterns",
                  "es": "Para introducir no linealidad y permitir que la red aprenda patrones complejos",
                  "de": "Um Nichtlinearität einzuführen und dem Netzwerk zu ermöglichen komplexe Muster zu lernen",
                  "nl": "Om non-lineariteit te introduceren en het netwerk in staat te stellen complexe patronen te leren"
        },
        {
                  "en": "To reduce memory usage",
                  "es": "Para reducir el uso de memoria",
                  "de": "Um Speichernutzung zu reduzieren",
                  "nl": "Om geheugengebruik te verminderen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Activation functions introduce non-linearity to neural networks. Without them, no matter how many layers a network has, it would only be able to learn linear relationships. Non-linear activation functions enable networks to approximate any continuous function and learn complex patterns.",
                  "es": "Las funciones de activación introducen no linealidad a las redes neuronales. Sin ellas, sin importar cuántas capas tenga una red, solo podría aprender relaciones lineales. Las funciones de activación no lineales permiten que las redes aproximen cualquier función continua y aprendan patrones complejos.",
                  "de": "Aktivierungsfunktionen führen Nichtlinearität in neuronale Netzwerke ein. Ohne sie könnte ein Netzwerk, egal wie viele Schichten es hat, nur lineare Beziehungen lernen. Nichtlineare Aktivierungsfunktionen ermöglichen es Netzwerken jede kontinuierliche Funktion zu approximieren und komplexe Muster zu lernen.",
                  "nl": "Activatiefuncties introduceren non-lineariteit in neurale netwerken. Zonder deze zou een netwerk, ongeacht hoeveel lagen het heeft, alleen lineaire relaties kunnen leren. Non-lineaire activatiefuncties stellen netwerken in staat elke continue functie te benaderen en complexe patronen te leren."
        }
      },
      {
        question: {
                  "en": "What is the difference between weights and biases in neural networks?",
                  "es": "¿Cuál es la diferencia entre pesos y sesgos en las redes neuronales?",
                  "de": "Was ist der Unterschied zwischen Gewichten und Bias in neuronalen Netzwerken?",
                  "nl": "Wat is het verschil tussen gewichten en biases in neurale netwerken?"
        },
        options: [
        {
                  "en": "There is no functional difference between weights and biases",
                  "es": "No hay diferencia funcional entre pesos y sesgos",
                  "de": "Es gibt keinen funktionalen Unterschied zwischen Gewichten und Bias",
                  "nl": "Er is geen functioneel verschil tussen gewichten en biases"
        },
        {
                  "en": "Weights are fixed values while biases change during training",
                  "es": "Los pesos son valores fijos mientras que los sesgos cambian durante el entrenamiento",
                  "de": "Gewichte sind feste Werte während Bias sich während des Trainings ändern",
                  "nl": "Gewichten zijn vaste waarden terwijl biases veranderen tijdens training"
        },
        {
                  "en": "Weights determine the strength of connections between neurons, while biases allow neurons to activate even with zero input",
                  "es": "Pesos determinan fuerza de conexiones entre neuronas, mientras sesgos permiten que neuronas se activen incluso con entrada cero",
                  "de": "Gewichte bestimmen Stärke der Verbindungen zwischen Neuronen, Bias ermöglicht Neuronen auch bei Null-Eingabe zu aktivieren",
                  "nl": "Gewichten bepalen sterkte van verbindingen tussen neuronen, terwijl biases neuronen toestaan te activeren zelfs met nul invoer"
        },
        {
                  "en": "Weights are used in hidden layers while biases are used in output layers",
                  "es": "Los pesos se usan en capas ocultas mientras que los sesgos se usan en capas de salida",
                  "de": "Gewichte werden in versteckten Schichten verwendet während Bias in Ausgabeschichten verwendet werden",
                  "nl": "Gewichten worden gebruikt in verborgen lagen terwijl biases gebruikt worden in uitvoerlagen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Weights control how much influence each input has on a neuron's output - they scale the input values. Biases provide an offset that allows neurons to shift their activation threshold, enabling them to fire even when all inputs are zero.",
                  "es": "Los pesos controlan cuánta influencia tiene cada entrada en la salida de una neurona - escalan los valores de entrada. Los sesgos proporcionan un desplazamiento que permite a las neuronas cambiar su umbral de activación, permitiéndoles disparar incluso cuando todas las entradas son cero.",
                  "de": "Gewichte kontrollieren wie viel Einfluss jede Eingabe auf die Ausgabe eines Neurons hat - sie skalieren die Eingabewerte. Bias bieten einen Offset der es Neuronen ermöglicht ihre Aktivierungsschwelle zu verschieben, wodurch sie auch feuern können wenn alle Eingaben null sind.",
                  "nl": "Gewichten controleren hoeveel invloed elke invoer heeft op de uitvoer van een neuron - ze schalen de invoerwaarden. Biases bieden een verschuiving die neuronen toestaat hun activatiedrempel te verschuiven, waardoor ze kunnen vuren zelfs wanneer alle invoer nul is."
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
                  "en": "A network that feeds data back to previous layers",
                  "es": "Una red que alimenta datos de vuelta a capas anteriores",
                  "de": "Ein Netzwerk das Daten zurück zu vorherigen Schichten speist",
                  "nl": "Een netwerk dat data terugvoert naar vorige lagen"
        },
        {
                  "en": "A network designed specifically for time series data",
                  "es": "Una red diseñada específicamente para datos de series temporales",
                  "de": "Ein Netzwerk das speziell für Zeitreihendaten entworfen wurde",
                  "nl": "Een netwerk speciaal ontworpen voor tijdreeksdata"
        },
        {
                  "en": "A network that only processes forward-moving objects",
                  "es": "Una red que solo procesa objetos que se mueven hacia adelante",
                  "de": "Ein Netzwerk das nur vorwärts bewegende Objekte verarbeitet",
                  "nl": "Een netwerk dat alleen vooruit bewegende objecten verwerkt"
        },
        {
                  "en": "A network where information flows in one direction from input to output without cycles",
                  "es": "Una red donde la información fluye en una dirección desde la entrada hasta la salida sin ciclos",
                  "de": "Ein Netzwerk wo Information in eine Richtung von Eingabe zu Ausgabe ohne Zyklen fließt",
                  "nl": "Een netwerk waar informatie in één richting stroomt van invoer naar uitvoer zonder cycli"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "In a feedforward neural network, information moves in only one direction - from the input layer through hidden layers to the output layer. There are no loops or cycles, making it the simplest type of artificial neural network architecture.",
                  "es": "En una red neuronal feedforward, la información se mueve en una sola dirección - desde la capa de entrada a través de capas ocultas hasta la capa de salida. No hay bucles o ciclos, lo que la convierte en el tipo más simple de arquitectura de red neuronal artificial.",
                  "de": "In einem Feedforward-neuronalen Netzwerk bewegt sich Information nur in eine Richtung - von der Eingabeschicht durch versteckte Schichten zur Ausgabeschicht. Es gibt keine Schleifen oder Zyklen, was es zur einfachsten Art von künstlicher neuronaler Netzwerkarchitektur macht.",
                  "nl": "In een feedforward neuraal netwerk beweegt informatie slechts in één richting - van de invoerlaag door verborgen lagen naar de uitvoerlaag. Er zijn geen lussen of cycli, wat het de eenvoudigste vorm van kunstmatige neurale netwerkarchitectuur maakt."
        }
      },
      {
        question: {
                  "en": "What is the role of hidden layers in neural networks?",
                  "es": "¿Cuál es el papel de las capas ocultas en las redes neuronales?",
                  "de": "Was ist die Rolle versteckter Schichten in neuronalen Netzwerken?",
                  "nl": "Wat is de rol van verborgen lagen in neurale netwerken?"
        },
        options: [
        {
                  "en": "They control the network's speed",
                  "es": "Controlan la velocidad de la red",
                  "de": "Sie kontrollieren die Geschwindigkeit des Netzwerks",
                  "nl": "Ze controleren de snelheid van het netwerk"
        },
        {
                  "en": "They extract and transform features from input data to enable complex pattern recognition",
                  "es": "Extraen y transforman características de los datos de entrada para permitir el reconocimiento de patrones complejos",
                  "de": "Sie extrahieren und transformieren Merkmale aus Eingabedaten um komplexe Mustererkennung zu ermöglichen",
                  "nl": "Ze extraheren en transformeren kenmerken uit invoerdata om complexe patroonherkenning mogelijk te maken"
        },
        {
                  "en": "They are only used for visualization purposes",
                  "es": "Solo se usan para propósitos de visualización",
                  "de": "Sie werden nur für Visualisierungszwecke verwendet",
                  "nl": "Ze worden alleen gebruikt voor visualisatiedoeleinden"
        },
        {
                  "en": "They store the network's memory",
                  "es": "Almacenan la memoria de la red",
                  "de": "Sie speichern das Gedächtnis des Netzwerks",
                  "nl": "Ze slaan het geheugen van het netwerk op"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Hidden layers are the computational engine of neural networks. They progressively extract higher-level features from the input data. Each layer builds upon the representations learned by the previous layer, enabling the network to recognize increasingly complex patterns.",
                  "es": "Las capas ocultas son el motor computacional de las redes neuronales. Extraen progresivamente características de alto nivel de los datos de entrada. Cada capa se basa en las representaciones aprendidas por la capa anterior, permitiendo que la red reconozca patrones cada vez más complejos.",
                  "de": "Versteckte Schichten sind die Berechnungsmaschine neuronaler Netzwerke. Sie extrahieren progressiv höherwertige Merkmale aus den Eingabedaten. Jede Schicht baut auf den Darstellungen auf die von der vorherigen Schicht gelernt wurden, wodurch das Netzwerk zunehmend komplexe Muster erkennen kann.",
                  "nl": "Verborgen lagen zijn de rekenkundige motor van neurale netwerken. Ze extraheren progressief hogere-niveau kenmerken uit de invoerdata. Elke laag bouwt voort op de representaties geleerd door de vorige laag, waardoor het netwerk steeds complexere patronen kan herkennen."
        }
      },
      {
        question: {
                  "en": "What is a perceptron in neural networks?",
                  "es": "¿Qué es un perceptrón en las redes neuronales?",
                  "de": "Was ist ein Perceptron in neuronalen Netzwerken?",
                  "nl": "Wat is een perceptron in neurale netwerken?"
        },
        options: [
        {
                  "en": "A type of activation function",
                  "es": "Un tipo de función de activación",
                  "de": "Eine Art von Aktivierungsfunktion",
                  "nl": "Een type activatiefunctie"
        },
        {
                  "en": "A method for data preprocessing",
                  "es": "Un método para preprocesamiento de datos",
                  "de": "Eine Methode für Datenvorverarbeitung",
                  "nl": "Een methode voor datavoorverwerking"
        },
        {
                  "en": "The simplest form of a neural network with a single layer that can solve linearly separable problems",
                  "es": "La forma más simple de una red neuronal con una sola capa que puede resolver problemas linealmente separables",
                  "de": "Die einfachste Form eines neuronalen Netzwerks mit einer einzigen Schicht die linear separable Probleme lösen kann",
                  "nl": "De eenvoudigste vorm van een neuraal netwerk met een enkele laag die lineair scheidbare problemen kan oplossen"
        },
        {
                  "en": "A complex multi-layer network architecture",
                  "es": "Una arquitectura de red compleja multicapa",
                  "de": "Eine komplexe mehrschichtige Netzwerkarchitektur",
                  "nl": "Een complexe meerlaagse netwerkarchitectuur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A perceptron is the building block of neural networks, consisting of a single artificial neuron. It takes multiple inputs, applies weights and a bias, and produces a binary output. While limited to linearly separable problems, it laid the foundation for modern neural networks.",
                  "es": "Un perceptrón es el bloque de construcción de las redes neuronales, consistiendo en una sola neurona artificial. Toma múltiples entradas, aplica pesos y un sesgo, y produce una salida binaria. Aunque limitado a problemas linealmente separables, sentó las bases para las redes neuronales modernas.",
                  "de": "Ein Perceptron ist der Baustein neuronaler Netzwerke, bestehend aus einem einzelnen künstlichen Neuron. Es nimmt mehrere Eingaben, wendet Gewichte und Bias an und erzeugt eine binäre Ausgabe. Obwohl auf linear separable Probleme beschränkt, legte es den Grundstein für moderne neuronale Netzwerke.",
                  "nl": "Een perceptron is de bouwsteen van neurale netwerken, bestaande uit een enkel kunstmatig neuron. Het neemt meerdere invoer, past gewichten en een bias toe, en produceert een binaire uitvoer. Hoewel beperkt tot lineair scheidbare problemen, legde het de basis voor moderne neurale netwerken."
        }
      },
      {
        question: {
                  "en": "What is meant by the 'depth' of a neural network?",
                  "es": "¿Qué significa la 'profundidad' de una red neuronal?",
                  "de": "Was bedeutet die 'Tiefe' eines neuronalen Netzwerks?",
                  "nl": "Wat wordt bedoeld met de 'diepte' van een neuraal netwerk?"
        },
        options: [
        {
                  "en": "The amount of training data required",
                  "es": "La cantidad de datos de entrenamiento requeridos",
                  "de": "Die Menge der benötigten Trainingsdaten",
                  "nl": "De hoeveelheid trainingsdata die nodig is"
        },
        {
                  "en": "The number of neurons in each layer",
                  "es": "El número de neuronas en cada capa",
                  "de": "Die Anzahl Neuronen in jeder Schicht",
                  "nl": "Het aantal neuronen in elke laag"
        },
        {
                  "en": "The number of hidden layers in the network",
                  "es": "El número de capas ocultas en la red",
                  "de": "Die Anzahl versteckter Schichten im Netzwerk",
                  "nl": "Het aantal verborgen lagen in het netwerk"
        },
        {
                  "en": "The complexity of the mathematical operations",
                  "es": "La complejidad de las operaciones matemáticas",
                  "de": "Die Komplexität der mathematischen Operationen",
                  "nl": "De complexiteit van de wiskundige bewerkingen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The depth of a neural network refers to the number of hidden layers it contains. Shallow networks have few hidden layers, while deep networks have many. Deep networks can learn more complex hierarchical representations but require more computational resources and training data.",
                  "es": "La profundidad de una red neuronal se refiere al número de capas ocultas que contiene. Las redes superficiales tienen pocas capas ocultas, mientras que las redes profundas tienen muchas. Las redes profundas pueden aprender representaciones jerárquicas más complejas pero requieren más recursos computacionales y datos de entrenamiento.",
                  "de": "Die Tiefe eines neuronalen Netzwerks bezieht sich auf die Anzahl versteckter Schichten die es enthält. Flache Netzwerke haben wenige versteckte Schichten, während tiefe Netzwerke viele haben. Tiefe Netzwerke können komplexere hierarchische Darstellungen lernen benötigen aber mehr Rechenressourcen und Trainingsdaten.",
                  "nl": "De diepte van een neuraal netwerk verwijst naar het aantal verborgen lagen dat het bevat. Ondiepe netwerken hebben weinig verborgen lagen, terwijl diepe netwerken er veel hebben. Diepe netwerken kunnen complexere hiërarchische representaties leren maar vereisen meer rekenkracht en trainingsdata."
        }
      },
      {
        question: {
                  "en": "What is the purpose of the input layer in a neural network?",
                  "es": "¿Cuál es el propósito de la capa de entrada en una red neuronal?",
                  "de": "Was ist der Zweck der Eingabeschicht in einem neuronalen Netzwerk?",
                  "nl": "Wat is het doel van de invoerlaag in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "To perform the main computations of the network",
                  "es": "Para realizar los cálculos principales de la red",
                  "de": "Um die Hauptberechnungen des Netzwerks durchzuführen",
                  "nl": "Om de hoofdberekeningen van het netwerk uit te voeren"
        },
        {
                  "en": "To generate the final output of the network",
                  "es": "Para generar la salida final de la red",
                  "de": "Um die finale Ausgabe des Netzwerks zu erzeugen",
                  "nl": "Om de finale uitvoer van het netwerk te genereren"
        },
        {
                  "en": "To store the network's learned parameters",
                  "es": "Para almacenar los parámetros aprendidos de la red",
                  "de": "Um die gelernten Parameter des Netzwerks zu speichern",
                  "nl": "Om de geleerde parameters van het netwerk op te slaan"
        },
        {
                  "en": "To receive and distribute the raw input data to the first hidden layer",
                  "es": "Para recibir y distribuir los datos de entrada sin procesar a la primera capa oculta",
                  "de": "Um die rohen Eingabedaten zu empfangen und an die erste versteckte Schicht zu verteilen",
                  "nl": "Om ruwe invoerdata te ontvangen en te distribueren naar de eerste verborgen laag"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The input layer serves as the entry point for data into the neural network. It doesn't perform any computations but simply receives the input features and passes them to the first hidden layer. The number of neurons in the input layer equals the number of input features.",
                  "es": "La capa de entrada sirve como punto de entrada para los datos en la red neuronal. No realiza ningún cálculo sino que simplemente recibe las características de entrada y las pasa a la primera capa oculta. El número de neuronas en la capa de entrada es igual al número de características de entrada.",
                  "de": "Die Eingabeschicht dient als Einstiegspunkt für Daten in das neuronale Netzwerk. Sie führt keine Berechnungen durch sondern empfängt einfach die Eingabemerkmale und gibt sie an die erste versteckte Schicht weiter. Die Anzahl der Neuronen in der Eingabeschicht entspricht der Anzahl der Eingabemerkmale.",
                  "nl": "De invoerlaag dient als toegangspunt voor data in het neurale netwerk. Het voert geen berekeningen uit maar ontvangt simpelweg de invoerkenmerken en geeft ze door aan de eerste verborgen laag. Het aantal neuronen in de invoerlaag is gelijk aan het aantal invoerkenmerken."
        }
      },
      {
        question: {
                  "en": "What is the output layer in a neural network?",
                  "es": "¿Qué es la capa de salida en una red neuronal?",
                  "de": "Was ist die Ausgabeschicht in einem neuronalen Netzwerk?",
                  "nl": "Wat is de uitvoerlaag in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "The layer that stores training data",
                  "es": "La capa que almacena datos de entrenamiento",
                  "de": "Die Schicht die Trainingsdaten speichert",
                  "nl": "De laag die trainingsdata opslaat"
        },
        {
                  "en": "The layer that receives input data",
                  "es": "La capa que recibe datos de entrada",
                  "de": "Die Schicht die Eingabedaten empfängt",
                  "nl": "De laag die invoerdata ontvangt"
        },
        {
                  "en": "The final layer that produces the network's prediction or classification result",
                  "es": "La capa final que produce la predicción o resultado de clasificación de la red",
                  "de": "Die finale Schicht die die Vorhersage oder das Klassifikationsergebnis des Netzwerks erzeugt",
                  "nl": "De finale laag die de voorspelling of classificatieresultaat van het netwerk produceert"
        },
        {
                  "en": "The layer responsible for feature extraction",
                  "es": "La capa responsable de la extracción de características",
                  "de": "Die Schicht verantwortlich für Merkmalsextraktion",
                  "nl": "De laag verantwoordelijk voor kenmerkextractie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The output layer is the final layer of a neural network that produces the final result. For classification tasks, it typically has one neuron per class. For regression tasks, it usually has one neuron that outputs a continuous value. The activation function chosen for this layer depends on the specific task.",
                  "es": "La capa de salida es la capa final de una red neuronal que produce el resultado final. Para tareas de clasificación, típicamente tiene una neurona por clase. Para tareas de regresión, usualmente tiene una neurona que produce un valor continuo. La función de activación elegida para esta capa depende de la tarea específica.",
                  "de": "Die Ausgabeschicht ist die finale Schicht eines neuronalen Netzwerks die das finale Ergebnis erzeugt. Für Klassifikationsaufgaben hat sie typischerweise ein Neuron pro Klasse. Für Regressionsaufgaben hat sie meist ein Neuron das einen kontinuierlichen Wert ausgibt. Die für diese Schicht gewählte Aktivierungsfunktion hängt von der spezifischen Aufgabe ab.",
                  "nl": "De uitvoerlaag is de finale laag van een neuraal netwerk die het eindresultaat produceert. Voor classificatietaken heeft het typisch één neuron per klasse. Voor regressietaken heeft het meestal één neuron dat een continue waarde uitvoert. De activatiefunctie gekozen voor deze laag hangt af van de specifieke taak."
        }
      },
      {
        question: {
                  "en": "What happens when you initialize all weights to zero in a neural network?",
                  "es": "¿Qué sucede cuando inicializas todos los pesos a cero en una red neuronal?",
                  "de": "Was passiert wenn Sie alle Gewichte auf null in einem neuronalen Netzwerk initialisieren?",
                  "nl": "Wat gebeurt er wanneer je alle gewichten op nul initialiseert in een neuraal netwerk?"
        },
        options: [
        {
                  "en": "The network will train faster",
                  "es": "La red entrenará más rápido",
                  "de": "Das Netzwerk wird schneller trainieren",
                  "nl": "Het netwerk zal sneller trainen"
        },
        {
                  "en": "The network will be more stable",
                  "es": "La red será más estable",
                  "de": "Das Netzwerk wird stabiler sein",
                  "nl": "Het netwerk zal stabieler zijn"
        },
        {
                  "en": "Nothing significant will happen",
                  "es": "No pasará nada significativo",
                  "de": "Nichts Bedeutendes wird passieren",
                  "nl": "Er zal niets significants gebeuren"
        },
        {
                  "en": "All neurons in the same layer will learn identical features, making the network ineffective",
                  "es": "Todas las neuronas en la misma capa aprenderán características idénticas, haciendo que la red sea ineficaz",
                  "de": "Alle Neuronen in derselben Schicht werden identische Merkmale lernen, wodurch das Netzwerk ineffektiv wird",
                  "nl": "Alle neuronen in dezelfde laag zullen identieke kenmerken leren, waardoor het netwerk ineffectief wordt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Initializing all weights to zero causes the symmetry problem. All neurons in the same layer will receive identical gradients and update identically, essentially making them learn the same features. This defeats the purpose of having multiple neurons and severely limits the network's learning capacity.",
                  "es": "Inicializar todos los pesos a cero causa el problema de simetría. Todas las neuronas en la misma capa recibirán gradientes idénticos y se actualizarán de manera idéntica, esencialmente haciéndolas aprender las mismas características. Esto derrota el propósito de tener múltiples neuronas y limita severamente la capacidad de aprendizaje de la red.",
                  "de": "Die Initialisierung aller Gewichte auf null verursacht das Symmetrieproblem. Alle Neuronen in derselben Schicht werden identische Gradienten erhalten und sich identisch aktualisieren, wodurch sie im Wesentlichen die gleichen Merkmale lernen. Dies macht den Zweck mehrerer Neuronen zunichte und begrenzt die Lernfähigkeit des Netzwerks erheblich.",
                  "nl": "Het initialiseren van alle gewichten op nul veroorzaakt het symmetrieprobleem. Alle neuronen in dezelfde laag zullen identieke gradiënten ontvangen en identiek updaten, waardoor ze in wezen dezelfde kenmerken leren. Dit ondermijnt het doel van meerdere neuronen en beperkt de leercapaciteit van het netwerk ernstig."
        }
      },
      {
        question: {
                  "en": "What is weight initialization in neural networks?",
                  "es": "¿Qué es la inicialización de pesos en las redes neuronales?",
                  "de": "Was ist Gewichtsinitialisierung in neuronalen Netzwerken?",
                  "nl": "Wat is gewichtinitialisatie in neurale netwerken?"
        },
        options: [
        {
                  "en": "The process of setting initial values for network weights before training begins",
                  "es": "El proceso de establecer valores iniciales para los pesos de la red antes de que comience el entrenamiento",
                  "de": "Der Prozess des Setzens von Anfangswerten für Netzwerkgewichte bevor das Training beginnt",
                  "nl": "Het proces van het instellen van initiële waarden voor netwerkgewichten voordat training begint"
        },
        {
                  "en": "The final step after training is complete",
                  "es": "El paso final después de que se completa el entrenamiento",
                  "de": "Der finale Schritt nachdem das Training abgeschlossen ist",
                  "nl": "De finale stap nadat training voltooid is"
        },
        {
                  "en": "The method to calculate final predictions",
                  "es": "El método para calcular predicciones finales",
                  "de": "Die Methode zur Berechnung finaler Vorhersagen",
                  "nl": "De methode om finale voorspellingen te berekenen"
        },
        {
                  "en": "The process of removing weights from the network",
                  "es": "El proceso de eliminar pesos de la red",
                  "de": "Der Prozess des Entfernens von Gewichten aus dem Netzwerk",
                  "nl": "Het proces van het verwijderen van gewichten uit het netwerk"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Weight initialization is crucial for neural network training success. Proper initialization helps avoid vanishing/exploding gradients and ensures neurons learn diverse features. Common methods include Xavier/Glorot initialization and He initialization, which consider the network architecture to set appropriate initial weight ranges.",
                  "es": "La inicialización de pesos es crucial para el éxito del entrenamiento de redes neuronales. La inicialización adecuada ayuda a evitar gradientes que se desvanecen/explotan y asegura que las neuronas aprendan características diversas. Los métodos comunes incluyen la inicialización Xavier/Glorot y la inicialización He, que consideran la arquitectura de la red para establecer rangos de peso inicial apropiados.",
                  "de": "Gewichtsinitialisierung ist entscheidend für den Erfolg des neuronalen Netzwerktrainings. Ordnungsgemäße Initialisierung hilft verschwindende/explodierende Gradienten zu vermeiden und stellt sicher dass Neuronen diverse Merkmale lernen. Häufige Methoden umfassen Xavier/Glorot-Initialisierung und He-Initialisierung, die die Netzwerkarchitektur berücksichtigen um angemessene anfängliche Gewichtsbereiche zu setzen.",
                  "nl": "Gewichtinitialisatie is cruciaal voor het succes van neurale netwerktraining. Juiste initialisatie helpt verdwijnende/exploderende gradiënten te vermijden en zorgt ervoor dat neuronen diverse kenmerken leren. Veelvoorkomende methoden zijn Xavier/Glorot-initialisatie en He-initialisatie, die de netwerkarchitectuur overwegen om geschikte initiële gewichtbereiken in te stellen."
        }
      },
      {
        question: {
                  "en": "What is a multilayer perceptron (MLP)?",
                  "es": "¿Qué es un perceptrón multicapa (MLP)?",
                  "de": "Was ist ein mehrschichtiges Perceptron (MLP)?",
                  "nl": "Wat is een meerlaags perceptron (MLP)?"
        },
        options: [
        {
                  "en": "A network that can only solve linear problems",
                  "es": "Una red que solo puede resolver problemas lineales",
                  "de": "Ein Netzwerk das nur lineare Probleme lösen kann",
                  "nl": "Een netwerk dat alleen lineaire problemen kan oplossen"
        },
        {
                  "en": "A single-layer neural network",
                  "es": "Una red neuronal de una sola capa",
                  "de": "Ein einschichtiges neuronales Netzwerk",
                  "nl": "Een enkellaags neuraal netwerk"
        },
        {
                  "en": "A feedforward neural network with one or more hidden layers between input and output",
                  "es": "Una red neuronal feedforward con una o más capas ocultas entre entrada y salida",
                  "de": "Ein Feedforward-neuronales Netzwerk mit einer oder mehreren versteckten Schichten zwischen Eingabe und Ausgabe",
                  "nl": "Een feedforward neuraal netwerk met een of meer verborgen lagen tussen invoer en uitvoer"
        },
        {
                  "en": "A network used only for image processing",
                  "es": "Una red usada solo para procesamiento de imágenes",
                  "de": "Ein Netzwerk das nur für Bildverarbeitung verwendet wird",
                  "nl": "Een netwerk alleen gebruikt voor beeldverwerking"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A multilayer perceptron (MLP) is a foundational deep learning architecture consisting of multiple layers of neurons. Unlike the single-layer perceptron, MLPs can learn non-linear patterns thanks to hidden layers and activation functions. They are versatile and can handle classification, regression, and pattern recognition tasks.",
                  "es": "Un perceptrón multicapa (MLP) es una arquitectura foundacional de aprendizaje profundo que consiste en múltiples capas de neuronas. A diferencia del perceptrón de una sola capa, los MLP pueden aprender patrones no lineales gracias a las capas ocultas y funciones de activación. Son versátiles y pueden manejar tareas de clasificación, regresión y reconocimiento de patrones.",
                  "de": "Ein mehrschichtiges Perceptron (MLP) ist eine grundlegende Deep-Learning-Architektur bestehend aus mehreren Schichten von Neuronen. Im Gegensatz zum einschichtigen Perceptron können MLPs nichtlineare Muster lernen dank versteckter Schichten und Aktivierungsfunktionen. Sie sind vielseitig und können Klassifikations-, Regressions- und Mustererkennungsaufgaben bewältigen.",
                  "nl": "Een meerlaags perceptron (MLP) is een fundamentele deep learning architectuur bestaande uit meerdere lagen neuronen. In tegenstelling tot het enkellaags perceptron kunnen MLPs non-lineaire patronen leren dankzij verborgen lagen en activatiefuncties. Ze zijn veelzijdig en kunnen classificatie-, regressie- en patroonherkenningstaken aan."
        }
      },
      {
        question: {
                  "en": "What is the universal approximation theorem in relation to neural networks?",
                  "es": "¿Qué es el teorema de aproximación universal en relación con las redes neuronales?",
                  "de": "Was ist der universelle Approximationssatz in Bezug auf neuronale Netzwerke?",
                  "nl": "Wat is de universele benaderingsstelling in relatie tot neurale netwerken?"
        },
        options: [
        {
                  "en": "A theorem that limits neural network capabilities",
                  "es": "Un teorema que limita las capacidades de las redes neuronales",
                  "de": "Ein Theorem das die Fähigkeiten neuronaler Netzwerke begrenzt",
                  "nl": "Een stelling die de capaciteiten van neurale netwerken beperkt"
        },
        {
                  "en": "A theorem stating that a neural network with enough neurons can approximate any continuous function",
                  "es": "Teorema que establece que red neuronal con suficientes neuronas puede aproximar cualquier función continua",
                  "de": "Theorem dass neuronales Netzwerk mit genügend Neuronen jede kontinuierliche Funktion approximieren kann",
                  "nl": "Stelling die zegt dat neuraal netwerk met genoeg neuronen elke continue functie kan benaderen"
        },
        {
                  "en": "A theorem about the maximum number of layers in a network",
                  "es": "Un teorema sobre el número máximo de capas en una red",
                  "de": "Ein Theorem über die maximale Anzahl von Schichten in einem Netzwerk",
                  "nl": "Een stelling over het maximale aantal lagen in een netwerk"
        },
        {
                  "en": "A theorem about training speed optimization",
                  "es": "Un teorema sobre optimización de velocidad de entrenamiento",
                  "de": "Ein Theorem über Traningsgeschwindigkeitsoptimierung",
                  "nl": "Een stelling over trainingssnelheidsoptimalisatie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The universal approximation theorem is a fundamental result proving that neural networks with at least one hidden layer and enough neurons can approximate any continuous function to arbitrary accuracy. This theorem provides the theoretical foundation for why neural networks are so powerful and versatile.",
                  "es": "El teorema de aproximación universal es un resultado fundamental que prueba que las redes neuronales con al menos una capa oculta y suficientes neuronas pueden aproximar cualquier función continua con precisión arbitraria. Este teorema proporciona la base teórica de por qué las redes neuronales son tan poderosas y versátiles.",
                  "de": "Der universelle Approximationssatz ist ein fundamentales Ergebnis das beweist dass neuronale Netzwerke mit mindestens einer versteckten Schicht und genügend Neuronen jede kontinuierliche Funktion mit beliebiger Genauigkeit approximieren können. Dieses Theorem bietet die theoretische Grundlage dafür warum neuronale Netzwerke so mächtig und vielseitig sind.",
                  "nl": "De universele benaderingsstelling is een fundamenteel resultaat dat bewijst dat neurale netwerken met ten minste één verborgen laag en genoeg neuronen elke continue functie met willekeurige nauwkeurigheid kunnen benaderen. Deze stelling biedt de theoretische basis voor waarom neurale netwerken zo krachtig en veelzijdig zijn."
        }
      },
      {
        question: {
                  "en": "What is the difference between batch, mini-batch, and stochastic gradient descent?",
                  "es": "¿Cuál es la diferencia entre descenso de gradiente por lotes, mini-lotes y estocástico?",
                  "de": "Was ist der Unterschied zwischen Batch-, Mini-Batch- und stochastischem Gradientenabstieg?",
                  "nl": "Wat is het verschil tussen batch, mini-batch en stochastische gradient descent?"
        },
        options: [
        {
                  "en": "They differ in how many training samples are used to compute gradients: all samples, small subset, or one sample respectively",
                  "es": "Difieren en cuántas muestras de entrenamiento se usan para calcular gradientes: todas las muestras, subconjunto pequeño, o una muestra respectivamente",
                  "de": "Sie unterscheiden sich darin wie viele Trainingsproben zur Gradientenberechnung verwendet werden: alle Proben, kleine Teilmenge oder eine Probe jeweils",
                  "nl": "Ze verschillen in hoeveel trainingssteekproeven gebruikt worden om gradiënten te berekenen: alle steekproeven, kleine subset, of één steekproef respectievelijk"
        },
        {
                  "en": "They are different loss functions",
                  "es": "Son diferentes funciones de pérdida",
                  "de": "Sie sind verschiedene Verlustfunktionen",
                  "nl": "Het zijn verschillende verliesfuncties"
        },
        {
                  "en": "They are different activation functions",
                  "es": "Son diferentes funciones de activación",
                  "de": "Sie sind verschiedene Aktivierungsfunktionen",
                  "nl": "Het zijn verschillende activatiefuncties"
        },
        {
                  "en": "They represent different network architectures",
                  "es": "Representan diferentes arquitecturas de red",
                  "de": "Sie repräsentieren verschiedene Netzwerkarchitekturen",
                  "nl": "Ze vertegenwoordigen verschillende netwerkarchitecturen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Batch gradient descent uses the entire training set to compute gradients (slow but stable), stochastic gradient descent uses one sample at a time (fast but noisy), and mini-batch gradient descent uses small subsets of data (good balance of speed and stability).",
                  "es": "El descenso de gradiente por lotes usa todo el conjunto de entrenamiento para calcular gradientes (lento pero estable), el descenso de gradiente estocástico usa una muestra a la vez (rápido pero ruidoso), y el descenso de gradiente por mini-lotes usa pequeños subconjuntos de datos (buen equilibrio de velocidad y estabilidad).",
                  "de": "Batch-Gradientenabstieg verwendet den gesamten Trainingssatz zur Gradientenberechnung (langsam aber stabil), stochastischer Gradientenabstieg verwendet eine Probe nach der anderen (schnell aber verrauscht), und Mini-Batch-Gradientenabstieg verwendet kleine Datensubsets (gute Balance aus Geschwindigkeit und Stabilität).",
                  "nl": "Batch gradient descent gebruikt de hele trainingsset om gradiënten te berekenen (langzaam maar stabiel), stochastische gradient descent gebruikt één steekproef tegelijk (snel maar ruis), en mini-batch gradient descent gebruikt kleine subsets van data (goede balans tussen snelheid en stabiliteit)."
        }
      },
      {
        question: {
                  "en": "What is the purpose of bias terms in neural network neurons?",
                  "es": "¿Cuál es el propósito de los términos de sesgo en las neuronas de las redes neuronales?",
                  "de": "Was ist der Zweck von Bias-Termen in neuronalen Netzwerk-Neuronen?",
                  "nl": "Wat is het doel van bias-termen in neurale netwerk neuronen?"
        },
        options: [
        {
                  "en": "To store previous activations",
                  "es": "Para almacenar activaciones anteriores",
                  "de": "Um vorherige Aktivierungen zu speichern",
                  "nl": "Om vorige activaties op te slaan"
        },
        {
                  "en": "To increase the computational speed",
                  "es": "Para aumentar la velocidad computacional",
                  "de": "Um die Berechnungsgeschwindigkeit zu erhöhen",
                  "nl": "Om de rekensnelheid te verhogen"
        },
        {
                  "en": "To reduce overfitting",
                  "es": "Para reducir el sobreajuste",
                  "de": "Um Überanpassung zu reduzieren",
                  "nl": "Om overfitting te verminderen"
        },
        {
                  "en": "To shift the activation function and control when neurons activate regardless of input",
                  "es": "Para desplazar la función de activación y controlar cuándo se activan las neuronas independientemente de la entrada",
                  "de": "Um die Aktivierungsfunktion zu verschieben und zu kontrollieren wann Neuronen unabhängig von der Eingabe aktivieren",
                  "nl": "Om de activatiefunctie te verschuiven en te controleren wanneer neuronen activeren onafhankelijk van invoer"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Bias terms provide an offset or threshold that allows neurons to activate even when all weighted inputs sum to zero. They give the network more flexibility by shifting the activation function horizontally, enabling neurons to learn when to 'fire' independent of the input patterns.",
                  "es": "Los términos de sesgo proporcionan un desplazamiento o umbral que permite que las neuronas se activen incluso cuando todas las entradas ponderadas suman cero. Dan a la red más flexibilidad al desplazar la función de activación horizontalmente, permitiendo que las neuronas aprendan cuándo 'disparar' independientemente de los patrones de entrada.",
                  "de": "Bias-Terme bieten einen Offset oder Schwellenwert der es Neuronen ermöglicht zu aktivieren auch wenn alle gewichteten Eingaben null ergeben. Sie geben dem Netzwerk mehr Flexibilität durch horizontales Verschieben der Aktivierungsfunktion, wodurch Neuronen lernen können wann sie 'feuern' sollen unabhängig von den Eingabemustern.",
                  "nl": "Bias-termen bieden een verschuiving of drempelwaarde die neuronen toestaat te activeren zelfs wanneer alle gewogen invoer nul opteelt. Ze geven het netwerk meer flexibiliteit door de activatiefunctie horizontaal te verschuiven, waardoor neuronen kunnen leren wanneer ze moeten 'vuren' onafhankelijk van de invoerpatronen."
        }
      },
      {
        question: {
                  "en": "What is the chain rule in the context of neural network backpropagation?",
                  "es": "¿Qué es la regla de la cadena en el contexto de retropropagación de redes neuronales?",
                  "de": "Was ist die Kettenregel im Kontext der neuronalen Netzwerk-Rückpropagation?",
                  "nl": "Wat is de kettingregel in de context van neurale netwerk backpropagation?"
        },
        options: [
        {
                  "en": "A method for linking multiple neural networks together",
                  "es": "Método para enlazar múltiples redes neuronales juntas",
                  "de": "Methode zum Verknüpfen mehrerer neuronaler Netzwerke",
                  "nl": "Methode om meerdere neurale netwerken te koppelen"
        },
        {
                  "en": "A technique for chaining training epochs sequentially",
                  "es": "Técnica para encadenar épocas de entrenamiento secuencialmente",
                  "de": "Technik zum sequentiellen Verketten von Trainingsepochen",
                  "nl": "Techniek voor het opeenvolgend koppelen van training epochs"
        },
        {
                  "en": "A rule for determining the order of layer execution",
                  "es": "Regla para determinar el orden de ejecución de capas",
                  "de": "Regel zur Bestimmung der Reihenfolge der Schichtausführung",
                  "nl": "Regel voor het bepalen van de volgorde van laaguitvoering"
        },
        {
                  "en": "A calculus rule used to compute gradients of composite functions layer by layer in the network",
                  "es": "Regla de cálculo usada para calcular gradientes de funciones compuestas capa por capa en la red",
                  "de": "Kalkülregel zur Berechnung von Gradienten zusammengesetzter Funktionen Schicht für Schicht im Netzwerk",
                  "nl": "Calculusregel gebruikt om gradiënten van samengestelde functies laag voor laag in het netwerk te berekenen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The chain rule is a fundamental calculus principle that backpropagation relies on. It allows us to compute the derivative of a composite function by multiplying derivatives at each layer, enabling efficient calculation of how each weight affects the final loss through all intermediate layers.",
                  "es": "La regla de la cadena es un principio fundamental del cálculo en el que se basa la retropropagación. Nos permite calcular la derivada de una función compuesta multiplicando derivadas en cada capa, permitiendo cálculo eficiente de cómo cada peso afecta la pérdida final a través de todas las capas intermedias.",
                  "de": "Die Kettenregel ist ein fundamentales Kalkülprinzip auf dem Rückpropagation basiert. Sie ermöglicht uns die Ableitung einer zusammengesetzten Funktion zu berechnen durch Multiplikation von Ableitungen an jeder Schicht, ermöglicht effiziente Berechnung wie jedes Gewicht den finalen Verlust durch alle Zwischenschichten beeinflusst.",
                  "nl": "De kettingregel is een fundamenteel calculusprincipe waarop backpropagation berust. Het stelt ons in staat de afgeleide van een samengestelde functie te berekenen door afgeleiden bij elke laag te vermenigvuldigen, waardoor efficiënte berekening mogelijk is van hoe elk gewicht het finale verlies beïnvloedt door alle tussenliggende lagen."
        }
      },
      {
        question: {
                  "en": "What is momentum in gradient descent optimization?",
                  "es": "¿Qué es el momento en la optimización de descenso de gradiente?",
                  "de": "Was ist Momentum in der Gradientenabstiegs-Optimierung?",
                  "nl": "Wat is momentum in gradient descent optimalisatie?"
        },
        options: [
        {
                  "en": "The force pushing data through the network",
                  "es": "La fuerza que empuja datos a través de la red",
                  "de": "Die Kraft die Daten durch das Netzwerk schiebt",
                  "nl": "De kracht die data door het netwerk duwt"
        },
        {
                  "en": "The speed at which neurons activate",
                  "es": "La velocidad a la que se activan las neuronas",
                  "de": "Die Geschwindigkeit mit der Neuronen aktivieren",
                  "nl": "De snelheid waarmee neuronen activeren"
        },
        {
                  "en": "A measure of training progress velocity",
                  "es": "Una medida de velocidad de progreso de entrenamiento",
                  "de": "Ein Maß für Trainingsfortschrittsgeschwindigkeit",
                  "nl": "Een maat voor trainingsvoortgangssnelheid"
        },
        {
                  "en": "Technique accumulating gradients from previous steps to accelerate convergence and reduce oscillations",
                  "es": "Técnica que acumula gradientes de pasos previos para acelerar convergencia y reducir oscilaciones",
                  "de": "Technik die Gradienten von vorherigen Schritten akkumuliert um Konvergenz zu beschleunigen und Oszillationen zu reduzieren",
                  "nl": "Techniek die gradiënten van vorige stappen accumuleert om convergentie te versnellen en oscillaties te verminderen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Momentum is an optimization technique that adds a fraction of the previous weight update to the current update. This helps gradient descent accelerate in consistent directions and dampens oscillations, allowing it to navigate ravines and escape poor local minima more effectively.",
                  "es": "El momento es una técnica de optimización que agrega una fracción de la actualización de peso anterior a la actualización actual. Esto ayuda al descenso de gradiente a acelerar en direcciones consistentes y amortigua oscilaciones, permitiéndole navegar barrancos y escapar de mínimos locales pobres más efectivamente.",
                  "de": "Momentum ist eine Optimierungstechnik die einen Bruchteil des vorherigen Gewichts-Updates zum aktuellen Update hinzufügt. Dies hilft Gradientenabstieg in konsistenten Richtungen zu beschleunigen und dämpft Oszillationen, ermöglicht es Schluchten zu navigieren und schlechte lokale Minima effektiver zu entkommen.",
                  "nl": "Momentum is een optimalisatietechniek die een fractie van de vorige gewichtsupdate toevoegt aan de huidige update. Dit helpt gradient descent versnellen in consistente richtingen en dempt oscillaties, waardoor het ravijnen kan navigeren en slechte lokale minima effectiever kan ontsnappen."
        }
      },
      {
        question: {
                  "en": "What is a hyperparameter in neural networks?",
                  "es": "¿Qué es un hiperparámetro en redes neuronales?",
                  "de": "Was ist ein Hyperparameter in neuronalen Netzwerken?",
                  "nl": "Wat is een hyperparameter in neurale netwerken?"
        },
        options: [
        {
                  "en": "A parameter with extremely high values",
                  "es": "Parámetro con valores extremadamente altos",
                  "de": "Parameter mit extrem hohen Werten",
                  "nl": "Parameter met extreem hoge waarden"
        },
        {
                  "en": "Configuration variable set before training that controls the learning process but isn't learned from data",
                  "es": "Variable de configuración establecida antes del entrenamiento que controla el proceso de aprendizaje pero no se aprende de los datos",
                  "de": "Konfigurationsvariable die vor dem Training gesetzt wird und den Lernprozess kontrolliert aber nicht aus Daten gelernt wird",
                  "nl": "Configuratievariabele ingesteld voor training die het leerproces controleert maar niet geleerd wordt uit data"
        },
        {
                  "en": "A weight that updates faster than other weights",
                  "es": "Peso que actualiza más rápido que otros pesos",
                  "de": "Gewicht das schneller aktualisiert als andere Gewichte",
                  "nl": "Gewicht dat sneller update dan andere gewichten"
        },
        {
                  "en": "The final output parameter of the network",
                  "es": "Parámetro de salida final de la red",
                  "de": "Finaler Ausgabeparameter des Netzwerks",
                  "nl": "Finale uitvoerparameter van het netwerk"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Hyperparameters are settings chosen before training begins, such as learning rate, batch size, number of layers, and number of neurons per layer. Unlike weights and biases which are learned during training, hyperparameters must be set manually or through automated search methods like grid search or Bayesian optimization.",
                  "es": "Los hiperparámetros son configuraciones elegidas antes de que comience el entrenamiento, como tasa de aprendizaje, tamaño de lote, número de capas y número de neuronas por capa. A diferencia de pesos y sesgos que se aprenden durante el entrenamiento, los hiperparámetros deben establecerse manualmente o mediante métodos de búsqueda automatizados como búsqueda de cuadrícula u optimización bayesiana.",
                  "de": "Hyperparameter sind Einstellungen die vor Trainingsbeginn gewählt werden, wie Lernrate, Stapelgröße, Anzahl Schichten und Anzahl Neuronen pro Schicht. Im Gegensatz zu Gewichten und Bias die während des Trainings gelernt werden, müssen Hyperparameter manuell oder durch automatisierte Suchmethoden wie Gittersuche oder Bayessche Optimierung gesetzt werden.",
                  "nl": "Hyperparameters zijn instellingen gekozen voordat training begint, zoals leersnelheid, batchgrootte, aantal lagen en aantal neuronen per laag. In tegenstelling tot gewichten en biases die geleerd worden tijdens training, moeten hyperparameters handmatig ingesteld worden of via geautomatiseerde zoekmethoden zoals grid search of Bayesiaanse optimalisatie."
        }
      },
      {
        question: {
                  "en": "What is early stopping in neural network training?",
                  "es": "¿Qué es la detención temprana en el entrenamiento de redes neuronales?",
                  "de": "Was ist frühzeitiges Stoppen beim Training neuronaler Netzwerke?",
                  "nl": "Wat is vroeg stoppen in neurale netwerk training?"
        },
        options: [
        {
                  "en": "Stopping training after the first epoch",
                  "es": "Detener entrenamiento después de la primera época",
                  "de": "Training nach der ersten Epoche stoppen",
                  "nl": "Training stoppen na de eerste epoch"
        },
        {
                  "en": "Ending training at a predetermined time",
                  "es": "Finalizar entrenamiento en tiempo predeterminado",
                  "de": "Training zu vorbestimmter Zeit beenden",
                  "nl": "Training beëindigen op vooraf bepaalde tijd"
        },
        {
                  "en": "Technique that halts training when validation performance stops improving to prevent overfitting",
                  "es": "Técnica que detiene entrenamiento cuando rendimiento de validación deja de mejorar para prevenir sobreajuste",
                  "de": "Technik die Training stoppt wenn Validierungsleistung aufhört sich zu verbessern um Überanpassung zu verhindern",
                  "nl": "Techniek die training stopt wanneer validatieprestaties stoppen met verbeteren om overfitting te voorkomen"
        },
        {
                  "en": "Terminating training when loss reaches zero",
                  "es": "Terminar entrenamiento cuando pérdida alcanza cero",
                  "de": "Training beenden wenn Verlust Null erreicht",
                  "nl": "Training beëindigen wanneer verlies nul bereikt"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Early stopping monitors validation performance during training and stops when it hasn't improved for a specified number of epochs (patience). This prevents overfitting by avoiding training for too long, effectively using the validation set as a signal for when the model has learned enough without memorizing training data.",
                  "es": "La detención temprana monitorea rendimiento de validación durante entrenamiento y se detiene cuando no ha mejorado durante un número especificado de épocas (paciencia). Esto previene sobreajuste evitando entrenar demasiado tiempo, usando efectivamente el conjunto de validación como señal de cuándo el modelo ha aprendido suficiente sin memorizar datos de entrenamiento.",
                  "de": "Frühzeitiges Stoppen überwacht Validierungsleistung während des Trainings und stoppt wenn sie sich für eine bestimmte Anzahl Epochen (Geduld) nicht verbessert hat. Dies verhindert Überanpassung durch Vermeidung zu langen Trainings, verwendet effektiv das Validierungsset als Signal wann das Modell genug gelernt hat ohne Trainingsdaten auswendig zu lernen.",
                  "nl": "Vroeg stoppen monitort validatieprestaties tijdens training en stopt wanneer het niet verbeterd is voor een gespecificeerd aantal epochs (geduld). Dit voorkomt overfitting door te lange training te vermijden, gebruikt effectief de validatieset als signaal voor wanneer het model genoeg geleerd heeft zonder trainingsdata te memoriseren."
        }
      },
      {
        question: {
                  "en": "What is a validation set used for in neural network training?",
                  "es": "¿Para qué se usa un conjunto de validación en entrenamiento de redes neuronales?",
                  "de": "Wofür wird ein Validierungsset beim Training neuronaler Netzwerke verwendet?",
                  "nl": "Waarvoor wordt een validatieset gebruikt in neurale netwerk training?"
        },
        options: [
        {
                  "en": "To replace the training set after initial training",
                  "es": "Para reemplazar conjunto de entrenamiento después de entrenamiento inicial",
                  "de": "Um Trainingsset nach initialem Training zu ersetzen",
                  "nl": "Om de trainingsset te vervangen na initiële training"
        },
        {
                  "en": "To tune hyperparameters and monitor overfitting during training without touching the test set",
                  "es": "Para ajustar hiperparámetros y monitorear sobreajuste durante entrenamiento sin tocar conjunto de prueba",
                  "de": "Um Hyperparameter zu tunen und Überanpassung während des Trainings zu überwachen ohne Testset zu berühren",
                  "nl": "Om hyperparameters af te stemmen en overfitting te monitoren tijdens training zonder de testset aan te raken"
        },
        {
                  "en": "To validate user input data",
                  "es": "Para validar datos de entrada del usuario",
                  "de": "Um Benutzereingabedaten zu validieren",
                  "nl": "Om gebruikersinvoerdata te valideren"
        },
        {
                  "en": "To check if the network architecture is valid",
                  "es": "Para verificar si la arquitectura de la red es válida",
                  "de": "Um zu prüfen ob die Netzwerkarchitektur gültig ist",
                  "nl": "Om te controleren of de netwerkarchitectuur geldig is"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The validation set is a held-out portion of data used during training to evaluate model performance on unseen data, tune hyperparameters, and implement early stopping. It provides an unbiased evaluation without contaminating the test set, which should only be used for final model assessment.",
                  "es": "El conjunto de validación es una porción de datos retenida usada durante entrenamiento para evaluar rendimiento del modelo en datos no vistos, ajustar hiperparámetros e implementar detención temprana. Proporciona evaluación imparcial sin contaminar conjunto de prueba, que solo debe usarse para evaluación final del modelo.",
                  "de": "Das Validierungsset ist ein zurückgehaltener Datenteil der während des Trainings verwendet wird um Modellleistung auf ungesehenen Daten zu bewerten, Hyperparameter zu tunen und frühzeitiges Stoppen zu implementieren. Es bietet unvoreingenommene Bewertung ohne Testset zu kontaminieren, das nur für finale Modellbewertung verwendet werden sollte.",
                  "nl": "De validatieset is een achtergehouden deel data gebruikt tijdens training om modelprestaties op ongeziene data te evalueren, hyperparameters af te stemmen en vroeg stoppen te implementeren. Het biedt onbevooroordeelde evaluatie zonder de testset te contamineren, die alleen gebruikt moet worden voor finale modelbeoordeling."
        }
      },
      {
        question: {
                  "en": "What is the vanishing gradient problem?",
                  "es": "¿Qué es el problema del gradiente que se desvanece?",
                  "de": "Was ist das Problem des verschwindenden Gradienten?",
                  "nl": "Wat is het verdwijnende gradiënt probleem?"
        },
        options: [
        {
                  "en": "Gradients are deleted from memory during training",
                  "es": "Gradientes se eliminan de la memoria durante entrenamiento",
                  "de": "Gradienten werden während des Trainings aus dem Speicher gelöscht",
                  "nl": "Gradiënten worden tijdens training uit geheugen verwijderd"
        },
        {
                  "en": "Training data gradually gets corrupted",
                  "es": "Los datos de entrenamiento se corrompen gradualmente",
                  "de": "Trainingsdaten werden allmählich beschädigt",
                  "nl": "Trainingsdata raakt geleidelijk beschadigd"
        },
        {
                  "en": "Gradients become extremely small in deep networks making earlier layers learn very slowly",
                  "es": "Gradientes se vuelven extremadamente pequeños en redes profundas haciendo que capas anteriores aprendan muy lentamente",
                  "de": "Gradienten werden in tiefen Netzwerken extrem klein wodurch frühere Schichten sehr langsam lernen",
                  "nl": "Gradiënten worden extreem klein in diepe netwerken waardoor eerdere lagen zeer langzaam leren"
        },
        {
                  "en": "The loss function disappears after training",
                  "es": "La función de pérdida desaparece después del entrenamiento",
                  "de": "Die Verlustfunktion verschwindet nach dem Training",
                  "nl": "De verliesfunctie verdwijnt na training"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The vanishing gradient problem occurs when gradients become progressively smaller as they propagate back through layers during backpropagation. This happens especially with certain activation functions like sigmoid or tanh, making it difficult to train deep networks as early layers receive negligible weight updates.",
                  "es": "El problema del gradiente que se desvanece ocurre cuando los gradientes se vuelven progresivamente más pequeños a medida que se propagan hacia atrás a través de las capas durante la retropropagación. Esto sucede especialmente con ciertas funciones de activación como sigmoid o tanh, dificultando el entrenamiento de redes profundas ya que las primeras capas reciben actualizaciones de peso insignificantes.",
                  "de": "Das Problem des verschwindenden Gradienten tritt auf wenn Gradienten progressiv kleiner werden während sie während der Rückpropagation durch Schichten zurück propagieren. Dies geschieht besonders bei bestimmten Aktivierungsfunktionen wie Sigmoid oder Tanh, was das Training tiefer Netzwerke erschwert da frühe Schichten vernachlässigbare Gewichtsaktualisierungen erhalten.",
                  "nl": "Het verdwijnende gradiënt probleem treedt op wanneer gradiënten progressief kleiner worden terwijl ze terug propageren door lagen tijdens backpropagation. Dit gebeurt vooral met bepaalde activatiefuncties zoals sigmoid of tanh, waardoor het moeilijk wordt om diepe netwerken te trainen aangezien vroege lagen verwaarloosbare gewichtsupdates ontvangen."
        }
      },
      {
        question: {
                  "en": "What is the exploding gradient problem?",
                  "es": "¿Qué es el problema del gradiente explosivo?",
                  "de": "Was ist das Problem der explodierenden Gradienten?",
                  "nl": "Wat is het exploderende gradiënt probleem?"
        },
        options: [
        {
                  "en": "Gradients become extremely large causing weight updates to overshoot and destabilize training",
                  "es": "Gradientes se vuelven extremadamente grandes causando que actualizaciones de peso sobrepasen y desestabilicen entrenamiento",
                  "de": "Gradienten werden extrem groß wodurch Gewichtsaktualisierungen überschießen und Training destabilisieren",
                  "nl": "Gradiënten worden extreem groot waardoor gewichtsupdates overschrijden en training destabiliseren"
        },
        {
                  "en": "Gradients increase linearly with each epoch",
                  "es": "Gradientes aumentan linealmente con cada época",
                  "de": "Gradienten steigen linear mit jeder Epoche",
                  "nl": "Gradiënten nemen lineair toe met elke epoch"
        },
        {
                  "en": "Too many gradients are computed simultaneously",
                  "es": "Demasiados gradientes se calculan simultáneamente",
                  "de": "Zu viele Gradienten werden gleichzeitig berechnet",
                  "nl": "Te veel gradiënten worden simultaan berekend"
        },
        {
                  "en": "The network explodes and stops functioning",
                  "es": "La red explota y deja de funcionar",
                  "de": "Das Netzwerk explodiert und hört auf zu funktionieren",
                  "nl": "Het netwerk explodeert en stopt met functioneren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The exploding gradient problem occurs when gradients become excessively large during backpropagation, often due to multiplying many values greater than 1. This causes weight updates to be too large, leading to numerical instability, NaN values, and failed training. Gradient clipping is commonly used to mitigate this issue.",
                  "es": "El problema del gradiente explosivo ocurre cuando los gradientes se vuelven excesivamente grandes durante la retropropagación, a menudo debido a multiplicar muchos valores mayores que 1. Esto causa que las actualizaciones de peso sean demasiado grandes, llevando a inestabilidad numérica, valores NaN y entrenamiento fallido. El recorte de gradiente se usa comúnmente para mitigar este problema.",
                  "de": "Das Problem der explodierenden Gradienten tritt auf wenn Gradienten während der Rückpropagation übermäßig groß werden, oft durch Multiplikation vieler Werte größer als 1. Dies verursacht zu große Gewichtsaktualisierungen, führt zu numerischer Instabilität, NaN-Werten und fehlgeschlagenem Training. Gradientenbeschneidung wird häufig verwendet um dieses Problem zu mildern.",
                  "nl": "Het exploderende gradiënt probleem treedt op wanneer gradiënten buitensporig groot worden tijdens backpropagation, vaak door het vermenigvuldigen van veel waarden groter dan 1. Dit veroorzaakt te grote gewichtsupdates, leidend tot numerieke instabiliteit, NaN-waarden en mislukte training. Gradiënt clipping wordt vaak gebruikt om dit probleem te verzachten."
        }
      },
      {
        question: {
                  "en": "What is gradient clipping?",
                  "es": "¿Qué es el recorte de gradiente?",
                  "de": "Was ist Gradientenbeschneidung?",
                  "nl": "Wat is gradiënt clipping?"
        },
        options: [
        {
                  "en": "Cutting off parts of the network during training",
                  "es": "Cortar partes de la red durante el entrenamiento",
                  "de": "Abschneiden von Netzwerkteilen während des Trainings",
                  "nl": "Afsnijden van delen van het netwerk tijdens training"
        },
        {
                  "en": "Shortening the training time by skipping epochs",
                  "es": "Acortar tiempo de entrenamiento saltando épocas",
                  "de": "Verkürzen der Trainingszeit durch Überspringen von Epochen",
                  "nl": "Verkorten van trainingstijd door epochs over te slaan"
        },
        {
                  "en": "Technique that limits gradient magnitude to prevent exploding gradients during training",
                  "es": "Técnica que limita la magnitud del gradiente para prevenir gradientes explosivos durante entrenamiento",
                  "de": "Technik die Gradientengröße begrenzt um explodierende Gradienten während des Trainings zu verhindern",
                  "nl": "Techniek die gradiëntgrootte beperkt om exploderende gradiënten tijdens training te voorkomen"
        },
        {
                  "en": "Removing gradients that are too small",
                  "es": "Eliminar gradientes que son demasiado pequeños",
                  "de": "Entfernen von Gradienten die zu klein sind",
                  "nl": "Verwijderen van gradiënten die te klein zijn"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Gradient clipping is a technique that sets a threshold value and scales down gradients that exceed this threshold. This prevents the exploding gradient problem by ensuring gradients never become too large, maintaining numerical stability especially in recurrent neural networks and deep architectures.",
                  "es": "El recorte de gradiente es una técnica que establece un valor umbral y reduce gradientes que exceden este umbral. Esto previene el problema del gradiente explosivo asegurando que los gradientes nunca se vuelvan demasiado grandes, manteniendo estabilidad numérica especialmente en redes neuronales recurrentes y arquitecturas profundas.",
                  "de": "Gradientenbeschneidung ist eine Technik die einen Schwellenwert setzt und Gradienten die diesen Schwellenwert überschreiten herunterskaliert. Dies verhindert das Problem der explodierenden Gradienten indem sichergestellt wird dass Gradienten nie zu groß werden, wodurch numerische Stabilität besonders in rekurrenten neuronalen Netzwerken und tiefen Architekturen erhalten bleibt.",
                  "nl": "Gradiënt clipping is een techniek die een drempelwaarde instelt en gradiënten die deze drempel overschrijden schaalt. Dit voorkomt het exploderende gradiënt probleem door ervoor te zorgen dat gradiënten nooit te groot worden, waardoor numerieke stabiliteit behouden blijft vooral in recurrente neurale netwerken en diepe architecturen."
        }
      },
      {
        question: {
                  "en": "What is a learning rate schedule?",
                  "es": "¿Qué es un cronograma de tasa de aprendizaje?",
                  "de": "Was ist ein Lernratenplan?",
                  "nl": "Wat is een leersnelheidsschema?"
        },
        options: [
        {
                  "en": "A timetable for when to train the network",
                  "es": "Un horario de cuándo entrenar la red",
                  "de": "Ein Zeitplan wann das Netzwerk zu trainieren ist",
                  "nl": "Een tijdschema voor wanneer het netwerk te trainen"
        },
        {
                  "en": "A plan for adding more training data over time",
                  "es": "Plan para agregar más datos de entrenamiento con el tiempo",
                  "de": "Plan zum Hinzufügen weiterer Trainingsdaten im Laufe der Zeit",
                  "nl": "Plan voor het toevoegen van meer trainingsdata over tijd"
        },
        {
                  "en": "The order in which layers learn",
                  "es": "El orden en que las capas aprenden",
                  "de": "Die Reihenfolge in der Schichten lernen",
                  "nl": "De volgorde waarin lagen leren"
        },
        {
                  "en": "Strategy that adjusts the learning rate during training, typically decreasing it over time",
                  "es": "Estrategia que ajusta la tasa de aprendizaje durante el entrenamiento, típicamente disminuyéndola con el tiempo",
                  "de": "Strategie die die Lernrate während des Trainings anpasst, typischerweise im Laufe der Zeit verringernd",
                  "nl": "Strategie die de leersnelheid tijdens training aanpast, typisch verminderend over tijd"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A learning rate schedule systematically changes the learning rate during training. Common strategies include step decay (reduce by factor at intervals), exponential decay (continuous reduction), or cosine annealing. This helps the model converge faster initially with large steps, then fine-tune with smaller steps later.",
                  "es": "Un cronograma de tasa de aprendizaje cambia sistemáticamente la tasa de aprendizaje durante el entrenamiento. Las estrategias comunes incluyen decaimiento por pasos (reducir por factor en intervalos), decaimiento exponencial (reducción continua) o recocido coseno. Esto ayuda al modelo a converger más rápido inicialmente con pasos grandes, luego afinar con pasos más pequeños más tarde.",
                  "de": "Ein Lernratenplan ändert die Lernrate systematisch während des Trainings. Häufige Strategien umfassen Schrittabfall (Reduzierung um Faktor in Intervallen), exponentieller Abfall (kontinuierliche Reduzierung) oder Kosinus-Tempern. Dies hilft dem Modell anfangs schneller mit großen Schritten zu konvergieren, dann später mit kleineren Schritten zu verfeinern.",
                  "nl": "Een leersnelheidsschema verandert systematisch de leersnelheid tijdens training. Veelvoorkomende strategieën zijn stap-verval (verminderen met factor op intervallen), exponentieel verval (continue vermindering) of cosinus annealing. Dit helpt het model sneller te convergeren aanvankelijk met grote stappen, daarna verfijnen met kleinere stappen later."
        }
      },
      {
        question: {
                  "en": "What is the Adam optimizer?",
                  "es": "¿Qué es el optimizador Adam?",
                  "de": "Was ist der Adam-Optimierer?",
                  "nl": "Wat is de Adam optimizer?"
        },
        options: [
        {
                  "en": "The first version of gradient descent",
                  "es": "La primera versión del descenso de gradiente",
                  "de": "Die erste Version des Gradientenabstiegs",
                  "nl": "De eerste versie van gradient descent"
        },
        {
                  "en": "Adaptive optimization algorithm combining momentum and adaptive learning rates for each parameter",
                  "es": "Algoritmo de optimización adaptativa que combina momento y tasas de aprendizaje adaptativas para cada parámetro",
                  "de": "Adaptiver Optimierungsalgorithmus der Momentum und adaptive Lernraten für jeden Parameter kombiniert",
                  "nl": "Adaptief optimalisatie-algoritme dat momentum en adaptieve leersnelheden voor elke parameter combineert"
        },
        {
                  "en": "An optimizer designed only for image processing",
                  "es": "Optimizador diseñado solo para procesamiento de imágenes",
                  "de": "Optimierer der nur für Bildverarbeitung entwickelt wurde",
                  "nl": "Optimizer alleen ontworpen voor beeldverwerking"
        },
        {
                  "en": "A simple learning rate adjustment method",
                  "es": "Método simple de ajuste de tasa de aprendizaje",
                  "de": "Einfache Lernratenanpassungsmethode",
                  "nl": "Eenvoudige leersnelheidsaanpassingsmethode"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Adam (Adaptive Moment Estimation) is a popular optimization algorithm that computes adaptive learning rates for each parameter by maintaining running averages of both gradients (first moment) and squared gradients (second moment). It combines the benefits of momentum and RMSprop, making it effective for many deep learning tasks.",
                  "es": "Adam (Estimación de Momento Adaptativo) es un algoritmo de optimización popular que calcula tasas de aprendizaje adaptativas para cada parámetro manteniendo promedios móviles de gradientes (primer momento) y gradientes al cuadrado (segundo momento). Combina los beneficios de momentum y RMSprop, haciéndolo efectivo para muchas tareas de aprendizaje profundo.",
                  "de": "Adam (Adaptive Moment Estimation) ist ein beliebter Optimierungsalgorithmus der adaptive Lernraten für jeden Parameter berechnet durch Aufrechterhaltung laufender Durchschnitte von Gradienten (erstes Moment) und quadrierten Gradienten (zweites Moment). Er kombiniert die Vorteile von Momentum und RMSprop, wodurch er für viele Deep-Learning-Aufgaben effektiv ist.",
                  "nl": "Adam (Adaptive Moment Estimation) is een populair optimalisatie-algoritme dat adaptieve leersnelheden voor elke parameter berekent door lopende gemiddelden van gradiënten (eerste moment) en gekwadrateerde gradiënten (tweede moment) bij te houden. Het combineert de voordelen van momentum en RMSprop, waardoor het effectief is voor veel deep learning taken."
        }
      },
      {
        question: {
                  "en": "What is the difference between SGD and Adam optimizers?",
                  "es": "¿Cuál es la diferencia entre los optimizadores SGD y Adam?",
                  "de": "Was ist der Unterschied zwischen SGD- und Adam-Optimierern?",
                  "nl": "Wat is het verschil tussen SGD en Adam optimizers?"
        },
        options: [
        {
                  "en": "SGD uses fixed learning rate for all parameters while Adam adapts learning rates individually per parameter",
                  "es": "SGD usa tasa de aprendizaje fija para todos los parámetros mientras Adam adapta tasas de aprendizaje individualmente por parámetro",
                  "de": "SGD verwendet feste Lernrate für alle Parameter während Adam Lernraten individuell pro Parameter anpasst",
                  "nl": "SGD gebruikt vaste leersnelheid voor alle parameters terwijl Adam leersnelheden individueel per parameter aanpast"
        },
        {
                  "en": "SGD is faster but Adam is more accurate",
                  "es": "SGD es más rápido pero Adam es más preciso",
                  "de": "SGD ist schneller aber Adam ist genauer",
                  "nl": "SGD is sneller maar Adam is nauwkeuriger"
        },
        {
                  "en": "SGD is for classification and Adam is for regression",
                  "es": "SGD es para clasificación y Adam es para regresión",
                  "de": "SGD ist für Klassifikation und Adam ist für Regression",
                  "nl": "SGD is voor classificatie en Adam is voor regressie"
        },
        {
                  "en": "There is no significant difference",
                  "es": "No hay diferencia significativa",
                  "de": "Es gibt keinen signifikanten Unterschied",
                  "nl": "Er is geen significant verschil"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Stochastic Gradient Descent (SGD) uses a uniform learning rate for all parameters and requires manual tuning. Adam automatically adapts learning rates for each parameter based on historical gradients, often converging faster and requiring less hyperparameter tuning. However, SGD with proper tuning can sometimes generalize better.",
                  "es": "El Descenso de Gradiente Estocástico (SGD) usa una tasa de aprendizaje uniforme para todos los parámetros y requiere ajuste manual. Adam adapta automáticamente tasas de aprendizaje para cada parámetro basado en gradientes históricos, a menudo convergiendo más rápido y requiriendo menos ajuste de hiperparámetros. Sin embargo, SGD con ajuste apropiado a veces puede generalizar mejor.",
                  "de": "Stochastischer Gradientenabstieg (SGD) verwendet eine einheitliche Lernrate für alle Parameter und erfordert manuelle Abstimmung. Adam passt Lernraten für jeden Parameter automatisch basierend auf historischen Gradienten an, konvergiert oft schneller und erfordert weniger Hyperparameter-Tuning. Allerdings kann SGD mit richtiger Abstimmung manchmal besser generalisieren.",
                  "nl": "Stochastische Gradient Descent (SGD) gebruikt een uniforme leersnelheid voor alle parameters en vereist handmatige afstemming. Adam past leersnelheden automatisch aan voor elke parameter gebaseerd op historische gradiënten, convergeert vaak sneller en vereist minder hyperparameter tuning. Echter, SGD met juiste afstemming kan soms beter generaliseren."
        }
      },
      {
        question: {
                  "en": "What is convergence in neural network training?",
                  "es": "¿Qué es la convergencia en el entrenamiento de redes neuronales?",
                  "de": "Was ist Konvergenz beim Training neuronaler Netzwerke?",
                  "nl": "Wat is convergentie in neurale netwerk training?"
        },
        options: [
        {
                  "en": "When training and validation accuracy become equal",
                  "es": "Cuando la precisión de entrenamiento y validación se vuelven iguales",
                  "de": "Wenn Trainings- und Validierungsgenauigkeit gleich werden",
                  "nl": "Wanneer trainings- en validatienauwkeurigheid gelijk worden"
        },
        {
                  "en": "The state when the loss function stabilizes and stops decreasing significantly",
                  "es": "Estado cuando la función de pérdida se estabiliza y deja de disminuir significativamente",
                  "de": "Zustand wenn die Verlustfunktion sich stabilisiert und aufhört signifikant zu sinken",
                  "nl": "De staat wanneer de verliesfunctie stabiliseert en stopt met significant dalen"
        },
        {
                  "en": "The moment when the network architecture is finalized",
                  "es": "El momento cuando se finaliza la arquitectura de la red",
                  "de": "Der Moment wenn die Netzwerkarchitektur finalisiert wird",
                  "nl": "Het moment wanneer de netwerkarchitectuur gefinaliseerd wordt"
        },
        {
                  "en": "When all layers produce identical outputs",
                  "es": "Cuando todas las capas producen salidas idénticas",
                  "de": "Wenn alle Schichten identische Ausgaben erzeugen",
                  "nl": "Wanneer alle lagen identieke uitvoer produceren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Convergence occurs when the optimization algorithm has found a minimum (local or global) where the loss function no longer decreases meaningfully with additional training. The network's weights have settled into a stable configuration that represents learned patterns from the training data.",
                  "es": "La convergencia ocurre cuando el algoritmo de optimización ha encontrado un mínimo (local o global) donde la función de pérdida ya no disminuye significativamente con entrenamiento adicional. Los pesos de la red se han asentado en una configuración estable que representa patrones aprendidos de los datos de entrenamiento.",
                  "de": "Konvergenz tritt auf wenn der Optimierungsalgorithmus ein Minimum (lokal oder global) gefunden hat wo die Verlustfunktion mit zusätzlichem Training nicht mehr bedeutend sinkt. Die Gewichte des Netzwerks haben sich in einer stabilen Konfiguration eingependelt die gelernte Muster aus den Trainingsdaten repräsentiert.",
                  "nl": "Convergentie vindt plaats wanneer het optimalisatie-algoritme een minimum (lokaal of globaal) heeft gevonden waar de verliesfunctie niet langer betekenisvol daalt met additionele training. De gewichten van het netwerk hebben zich ingesteld in een stabiele configuratie die geleerde patronen uit de trainingsdata vertegenwoordigt."
        }
      },
      {
        question: {
                  "en": "What is a local minimum in the context of neural network optimization?",
                  "es": "¿Qué es un mínimo local en el contexto de optimización de redes neuronales?",
                  "de": "Was ist ein lokales Minimum im Kontext der Optimierung neuronaler Netzwerke?",
                  "nl": "Wat is een lokaal minimum in de context van neurale netwerk optimalisatie?"
        },
        options: [
        {
                  "en": "The minimum training time required",
                  "es": "El tiempo mínimo de entrenamiento requerido",
                  "de": "Die minimale benötigte Trainingszeit",
                  "nl": "De minimale vereiste trainingstijd"
        },
        {
                  "en": "The smallest batch size that can be used",
                  "es": "El tamaño de lote más pequeño que se puede usar",
                  "de": "Die kleinste Stapelgröße die verwendet werden kann",
                  "nl": "De kleinste batchgrootte die gebruikt kan worden"
        },
        {
                  "en": "The minimum number of layers needed",
                  "es": "El número mínimo de capas necesarias",
                  "de": "Die minimale Anzahl benötigter Schichten",
                  "nl": "Het minimum aantal benodigde lagen"
        },
        {
                  "en": "Point where loss is lower than surrounding points but not the global lowest possible value",
                  "es": "Punto donde la pérdida es menor que puntos circundantes pero no el valor más bajo posible global",
                  "de": "Punkt wo Verlust niedriger ist als umgebende Punkte aber nicht der global niedrigste mögliche Wert",
                  "nl": "Punt waar verlies lager is dan omringende punten maar niet de globaal laagst mogelijke waarde"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A local minimum is a point in the loss landscape where the loss is lower than all nearby points, but there may exist other points with even lower loss elsewhere. Gradient descent can get stuck in local minima, though modern techniques like momentum, adaptive learning rates, and proper initialization help escape them.",
                  "es": "Un mínimo local es un punto en el paisaje de pérdida donde la pérdida es menor que todos los puntos cercanos, pero puede haber otros puntos con pérdida aún menor en otro lugar. El descenso de gradiente puede quedarse atascado en mínimos locales, aunque técnicas modernas como momentum, tasas de aprendizaje adaptativas e inicialización apropiada ayudan a escapar de ellos.",
                  "de": "Ein lokales Minimum ist ein Punkt in der Verlustlandschaft wo der Verlust niedriger ist als alle nahen Punkte, aber es können andere Punkte mit noch niedrigerem Verlust anderswo existieren. Gradientenabstieg kann in lokalen Minima stecken bleiben, obwohl moderne Techniken wie Momentum, adaptive Lernraten und richtige Initialisierung helfen ihnen zu entkommen.",
                  "nl": "Een lokaal minimum is een punt in het verlieslandschap waar het verlies lager is dan alle nabije punten, maar er kunnen andere punten met nog lager verlies elders bestaan. Gradient descent kan vast komen te zitten in lokale minima, hoewel moderne technieken zoals momentum, adaptieve leersnelheden en juiste initialisatie helpen om eraan te ontsnappen."
        }
      },
      {
        question: {
                  "en": "What is a global minimum in optimization?",
                  "es": "¿Qué es un mínimo global en optimización?",
                  "de": "Was ist ein globales Minimum in der Optimierung?",
                  "nl": "Wat is een globaal minimum in optimalisatie?"
        },
        options: [
        {
                  "en": "The smallest possible network architecture",
                  "es": "La arquitectura de red más pequeña posible",
                  "de": "Die kleinstmögliche Netzwerkarchitektur",
                  "nl": "De kleinst mogelijke netwerkarchitectuur"
        },
        {
                  "en": "The minimum accuracy acceptable for deployment",
                  "es": "La precisión mínima aceptable para despliegue",
                  "de": "Die minimale akzeptable Genauigkeit für Bereitstellung",
                  "nl": "De minimale acceptabele nauwkeurigheid voor deployment"
        },
        {
                  "en": "The minimum used worldwide in neural networks",
                  "es": "El mínimo usado mundialmente en redes neuronales",
                  "de": "Das weltweit in neuronalen Netzwerken verwendete Minimum",
                  "nl": "Het minimum dat wereldwijd gebruikt wordt in neurale netwerken"
        },
        {
                  "en": "The absolute lowest point of the loss function across the entire parameter space",
                  "es": "El punto más bajo absoluto de la función de pérdida en todo el espacio de parámetros",
                  "de": "Der absolut niedrigste Punkt der Verlustfunktion über den gesamten Parameterraum",
                  "nl": "Het absoluut laagste punt van de verliesfunctie over de hele parameterruimte"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The global minimum represents the absolute best solution - the parameter configuration that yields the lowest possible loss across the entire search space. While finding it is theoretically ideal, in practice for complex neural networks with non-convex loss landscapes, we often settle for good local minima that generalize well.",
                  "es": "El mínimo global representa la mejor solución absoluta - la configuración de parámetros que produce la pérdida más baja posible en todo el espacio de búsqueda. Aunque encontrarlo es teóricamente ideal, en la práctica para redes neuronales complejas con paisajes de pérdida no convexos, a menudo nos conformamos con buenos mínimos locales que generalizan bien.",
                  "de": "Das globale Minimum repräsentiert die absolut beste Lösung - die Parameterkonfiguration die den niedrigst möglichen Verlust über den gesamten Suchraum liefert. Während es theoretisch ideal ist es zu finden, begnügen wir uns in der Praxis für komplexe neuronale Netzwerke mit nicht-konvexen Verlustlandschaften oft mit guten lokalen Minima die gut generalisieren.",
                  "nl": "Het globale minimum vertegenwoordigt de absoluut beste oplossing - de parameterconfiguratie die het laagst mogelijke verlies oplevert over de hele zoekruimte. Hoewel het vinden ervan theoretisch ideaal is, nemen we in de praktijk voor complexe neurale netwerken met niet-convexe verlieslandschappen vaak genoegen met goede lokale minima die goed generaliseren."
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
                  "en": "Making all batches the same size",
                  "es": "Hacer que todos los lotes tengan el mismo tamaño",
                  "de": "Alle Stapel auf dieselbe Größe bringen",
                  "nl": "Alle batches dezelfde grootte maken"
        },
        {
                  "en": "Standardizing the training data before feeding to network",
                  "es": "Estandarizar los datos de entrenamiento antes de alimentar a la red",
                  "de": "Standardisieren der Trainingsdaten vor Eingabe ins Netzwerk",
                  "nl": "Standaardiseren van trainingsdata voor invoer in netwerk"
        },
        {
                  "en": "Normalizing the final output predictions",
                  "es": "Normalizar las predicciones de salida finales",
                  "de": "Normalisieren der finalen Ausgabevorhersagen",
                  "nl": "Normaliseren van de finale uitvoervoorspellingen"
        },
        {
                  "en": "Technique that normalizes layer inputs to have zero mean and unit variance within each mini-batch",
                  "es": "Técnica que normaliza entradas de capa para tener media cero y varianza unitaria dentro de cada mini-lote",
                  "de": "Technik die Schichteingaben normalisiert um Nullmittelwert und Einheitsvarianz innerhalb jedes Mini-Batches zu haben",
                  "nl": "Techniek die laagtinvoer normaliseert om nulgemiddelde en eenheidsvariatie binnen elke mini-batch te hebben"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Batch normalization normalizes the inputs to each layer within a mini-batch, reducing internal covariate shift. This technique allows higher learning rates, reduces sensitivity to initialization, acts as regularization, and generally accelerates training while improving model performance.",
                  "es": "La normalización por lotes normaliza las entradas a cada capa dentro de un mini-lote, reduciendo el cambio de covariable interno. Esta técnica permite tasas de aprendizaje más altas, reduce la sensibilidad a la inicialización, actúa como regularización y generalmente acelera el entrenamiento mientras mejora el rendimiento del modelo.",
                  "de": "Batch-Normalisierung normalisiert die Eingaben zu jeder Schicht innerhalb eines Mini-Batches, reduziert interne Kovariatenverschiebung. Diese Technik ermöglicht höhere Lernraten, reduziert Empfindlichkeit gegenüber Initialisierung, wirkt als Regularisierung und beschleunigt generell Training während Modellleistung verbessert wird.",
                  "nl": "Batch normalisatie normaliseert de invoer naar elke laag binnen een mini-batch, vermindert interne covariantieverschuiving. Deze techniek maakt hogere leersnelheden mogelijk, vermindert gevoeligheid voor initialisatie, werkt als regularisatie en versnelt over het algemeen training terwijl modelprestaties verbeterd worden."
        }
      },
      {
        question: {
                  "en": "What is the purpose of shuffling training data?",
                  "es": "¿Cuál es el propósito de mezclar los datos de entrenamiento?",
                  "de": "Was ist der Zweck des Mischens von Trainingsdaten?",
                  "nl": "Wat is het doel van het schudden van trainingsdata?"
        },
        options: [
        {
                  "en": "To increase the size of the training set",
                  "es": "Para aumentar el tamaño del conjunto de entrenamiento",
                  "de": "Um die Größe des Trainingssatzes zu erhöhen",
                  "nl": "Om de grootte van de trainingsset te verhogen"
        },
        {
                  "en": "To prevent the model from learning spurious patterns based on data order and improve generalization",
                  "es": "Para evitar que el modelo aprenda patrones espurios basados en orden de datos y mejorar generalización",
                  "de": "Um zu verhindern dass das Modell falsche Muster basierend auf Datenreihenfolge lernt und Generalisierung zu verbessern",
                  "nl": "Om te voorkomen dat het model valse patronen leert gebaseerd op datavolgorde en generalisatie te verbeteren"
        },
        {
                  "en": "To speed up the training process",
                  "es": "Para acelerar el proceso de entrenamiento",
                  "de": "Um den Trainingsprozess zu beschleunigen",
                  "nl": "Om het trainingsproces te versnellen"
        },
        {
                  "en": "To reduce memory usage during training",
                  "es": "Para reducir el uso de memoria durante el entrenamiento",
                  "de": "Um Speichernutzung während des Trainings zu reduzieren",
                  "nl": "Om geheugengebruik tijdens training te verminderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Shuffling training data randomizes the order in which samples are presented to the model, preventing it from learning patterns related to the sequence rather than the actual features. This is especially important when data is ordered by class or other characteristics, ensuring each batch is representative of the overall distribution.",
                  "es": "Mezclar datos de entrenamiento aleatoriza el orden en que se presentan muestras al modelo, evitando que aprenda patrones relacionados con la secuencia en lugar de las características reales. Esto es especialmente importante cuando los datos están ordenados por clase u otras características, asegurando que cada lote sea representativo de la distribución general.",
                  "de": "Mischen von Trainingsdaten randomisiert die Reihenfolge in der Proben dem Modell präsentiert werden, verhindert dass es Muster im Zusammenhang mit der Sequenz statt den tatsächlichen Merkmalen lernt. Dies ist besonders wichtig wenn Daten nach Klasse oder anderen Merkmalen geordnet sind, stellt sicher dass jeder Stapel repräsentativ für die Gesamtverteilung ist.",
                  "nl": "Schudden van trainingsdata randomiseert de volgorde waarin steekproeven aan het model gepresenteerd worden, voorkomt dat het patronen leert gerelateerd aan de volgorde in plaats van de werkelijke kenmerken. Dit is vooral belangrijk wanneer data geordend is per klasse of andere kenmerken, zorgt ervoor dat elke batch representatief is voor de totale verdeling."
        }
      },
      {
        question: {
                  "en": "What is the difference between online learning and batch learning?",
                  "es": "¿Cuál es la diferencia entre aprendizaje en línea y aprendizaje por lotes?",
                  "de": "Was ist der Unterschied zwischen Online-Lernen und Batch-Lernen?",
                  "nl": "Wat is het verschil tussen online leren en batch leren?"
        },
        options: [
        {
                  "en": "Online learning updates weights after each sample while batch learning uses all data before updating",
                  "es": "Aprendizaje en línea actualiza pesos después de cada muestra mientras aprendizaje por lotes usa todos los datos antes de actualizar",
                  "de": "Online-Lernen aktualisiert Gewichte nach jeder Probe während Batch-Lernen alle Daten verwendet vor Aktualisierung",
                  "nl": "Online leren update gewichten na elke steekproef terwijl batch leren alle data gebruikt voor update"
        },
        {
                  "en": "Online learning requires internet connection while batch learning works offline",
                  "es": "Aprendizaje en línea requiere conexión a internet mientras aprendizaje por lotes funciona sin conexión",
                  "de": "Online-Lernen erfordert Internetverbindung während Batch-Lernen offline funktioniert",
                  "nl": "Online leren vereist internetverbinding terwijl batch leren offline werkt"
        },
        {
                  "en": "Online learning is faster while batch learning is slower",
                  "es": "Aprendizaje en línea es más rápido mientras aprendizaje por lotes es más lento",
                  "de": "Online-Lernen ist schneller während Batch-Lernen langsamer ist",
                  "nl": "Online leren is sneller terwijl batch leren langzamer is"
        },
        {
                  "en": "Online learning uses neural networks while batch learning uses other algorithms",
                  "es": "Aprendizaje en línea usa redes neuronales mientras aprendizaje por lotes usa otros algoritmos",
                  "de": "Online-Lernen verwendet neuronale Netzwerke während Batch-Lernen andere Algorithmen verwendet",
                  "nl": "Online leren gebruikt neurale netwerken terwijl batch leren andere algoritmes gebruikt"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Online learning (or stochastic learning) updates model parameters after processing each individual training example, allowing continuous adaptation. Batch learning processes the entire dataset before making weight updates, providing more stable gradients but requiring more memory and potentially slower adaptation to new patterns.",
                  "es": "El aprendizaje en línea (o aprendizaje estocástico) actualiza parámetros del modelo después de procesar cada ejemplo de entrenamiento individual, permitiendo adaptación continua. El aprendizaje por lotes procesa todo el conjunto de datos antes de hacer actualizaciones de peso, proporcionando gradientes más estables pero requiriendo más memoria y potencialmente adaptación más lenta a nuevos patrones.",
                  "de": "Online-Lernen (oder stochastisches Lernen) aktualisiert Modellparameter nach Verarbeitung jedes einzelnen Trainingsbeispiels, ermöglicht kontinuierliche Anpassung. Batch-Lernen verarbeitet den gesamten Datensatz vor Gewichtsaktualisierungen, bietet stabilere Gradienten erfordert aber mehr Speicher und potenziell langsamere Anpassung an neue Muster.",
                  "nl": "Online leren (of stochastisch leren) update modelparameters na verwerking van elk individueel trainingsvoorbeeld, maakt continue aanpassing mogelijk. Batch leren verwerkt de hele dataset voor gewichtsupdates, biedt stabielere gradiënten maar vereist meer geheugen en potentieel langzamere aanpassing aan nieuwe patronen."
        }
      },
      {
        question: {
                  "en": "What is the dying ReLU problem?",
                  "es": "¿Qué es el problema del ReLU moribundo?",
                  "de": "Was ist das Problem des sterbenden ReLU?",
                  "nl": "Wat is het stervende ReLU probleem?"
        },
        options: [
        {
                  "en": "Network loses ability to use ReLU after many epochs",
                  "es": "Red pierde capacidad de usar ReLU después de muchas épocas",
                  "de": "Netzwerk verliert Fähigkeit ReLU nach vielen Epochen zu verwenden",
                  "nl": "Netwerk verliest vermogen om ReLU te gebruiken na veel epochs"
        },
        {
                  "en": "Neurons get stuck outputting zero for all inputs and stop learning during training",
                  "es": "Neuronas se atascan produciendo cero para todas las entradas y dejan de aprender durante entrenamiento",
                  "de": "Neuronen stecken fest bei Ausgabe von Null für alle Eingaben und hören auf zu lernen während Training",
                  "nl": "Neuronen raken vast met het uitvoeren van nul voor alle invoer en stoppen met leren tijdens training"
        },
        {
                  "en": "ReLU activation function becomes slower over time",
                  "es": "Función de activación ReLU se vuelve más lenta con el tiempo",
                  "de": "ReLU-Aktivierungsfunktion wird im Laufe der Zeit langsamer",
                  "nl": "ReLU activatiefunctie wordt langzamer over tijd"
        },
        {
                  "en": "ReLU causes overfitting in deep networks",
                  "es": "ReLU causa sobreajuste en redes profundas",
                  "de": "ReLU verursacht Überanpassung in tiefen Netzwerken",
                  "nl": "ReLU veroorzaakt overfitting in diepe netwerken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The dying ReLU problem occurs when neurons consistently receive negative inputs, causing ReLU to always output zero. Since the gradient is also zero for negative inputs, these neurons never update their weights and effectively 'die', contributing nothing to the network. Variants like Leaky ReLU help mitigate this issue.",
                  "es": "El problema del ReLU moribundo ocurre cuando las neuronas reciben consistentemente entradas negativas, causando que ReLU siempre produzca cero. Como el gradiente también es cero para entradas negativas, estas neuronas nunca actualizan sus pesos y efectivamente 'mueren', sin contribuir nada a la red. Variantes como Leaky ReLU ayudan a mitigar este problema.",
                  "de": "Das Problem des sterbenden ReLU tritt auf wenn Neuronen konsistent negative Eingaben erhalten, wodurch ReLU immer Null ausgibt. Da der Gradient auch Null für negative Eingaben ist, aktualisieren diese Neuronen nie ihre Gewichte und 'sterben' effektiv, tragen nichts zum Netzwerk bei. Varianten wie Leaky ReLU helfen dieses Problem zu mildern.",
                  "nl": "Het stervende ReLU probleem treedt op wanneer neuronen consistent negatieve invoer ontvangen, waardoor ReLU altijd nul uitvoert. Omdat de gradiënt ook nul is voor negatieve invoer, updaten deze neuronen nooit hun gewichten en 'sterven' effectief, dragen niets bij aan het netwerk. Varianten zoals Leaky ReLU helpen dit probleem te verzachten."
        }
      },
      {
        question: {
                  "en": "What is transfer of learning rate warmup?",
                  "es": "¿Qué es el calentamiento de la tasa de aprendizaje?",
                  "de": "Was ist Lernraten-Warmup?",
                  "nl": "Wat is leersnelheid opwarmen?"
        },
        options: [
        {
                  "en": "Gradually increasing learning rate from small value at start of training to prevent instability",
                  "es": "Aumentar gradualmente tasa de aprendizaje desde valor pequeño al inicio del entrenamiento para prevenir inestabilidad",
                  "de": "Allmähliches Erhöhen der Lernrate von kleinem Wert zu Beginn des Trainings um Instabilität zu verhindern",
                  "nl": "Geleidelijk verhogen van leersnelheid vanaf kleine waarde aan start van training om instabiliteit te voorkomen"
        },
        {
                  "en": "Training on easier examples first",
                  "es": "Entrenar primero con ejemplos más fáciles",
                  "de": "Zuerst auf einfacheren Beispielen trainieren",
                  "nl": "Eerst trainen op makkelijkere voorbeelden"
        },
        {
                  "en": "Preheating the GPU before training starts",
                  "es": "Precalentar la GPU antes de que comience el entrenamiento",
                  "de": "Vorheizen der GPU bevor Training beginnt",
                  "nl": "Voorverwarmen van GPU voordat training begint"
        },
        {
                  "en": "Running preliminary epochs to prepare the model",
                  "es": "Ejecutar épocas preliminares para preparar el modelo",
                  "de": "Vorläufige Epochen ausführen um Modell vorzubereiten",
                  "nl": "Voorlopige epochs uitvoeren om model voor te bereiden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Learning rate warmup starts training with a very small learning rate and gradually increases it to the target value over the first few epochs or iterations. This helps stabilize training at the beginning when gradients may be large and unstable, especially useful for large batch sizes and complex optimizers like Adam.",
                  "es": "El calentamiento de tasa de aprendizaje comienza el entrenamiento con una tasa de aprendizaje muy pequeña y la aumenta gradualmente al valor objetivo durante las primeras épocas o iteraciones. Esto ayuda a estabilizar el entrenamiento al principio cuando los gradientes pueden ser grandes e inestables, especialmente útil para tamaños de lote grandes y optimizadores complejos como Adam.",
                  "de": "Lernraten-Warmup beginnt Training mit sehr kleiner Lernrate und erhöht sie allmählich zum Zielwert über die ersten Epochen oder Iterationen. Dies hilft Training am Anfang zu stabilisieren wenn Gradienten groß und instabil sein können, besonders nützlich für große Stapelgrößen und komplexe Optimierer wie Adam.",
                  "nl": "Leersnelheid opwarmen begint training met een zeer kleine leersnelheid en verhoogt deze geleidelijk naar de doelwaarde over de eerste epochs of iteraties. Dit helpt training stabiliseren aan het begin wanneer gradiënten groot en instabiel kunnen zijn, vooral nuttig voor grote batchgroottes en complexe optimizers zoals Adam."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();