// Neurale netwerken Quiz - Level 5
(function() {
  const level5 = {
    name: {
          "en": "Optimization and Regularization",
          "es": "Optimización y Regularización",
          "de": "Optimierung und Regularisierung",
          "nl": "Optimalisatie en Regularisatie"
    },
    questions: [
      {
        question: {
                  "en": "What is the Adam optimizer in neural networks?",
                  "es": "¿Qué es el optimizador Adam en las redes neuronales?",
                  "de": "Was ist der Adam-Optimierer in neuronalen Netzwerken?",
                  "nl": "Wat is de Adam-optimizer in neurale netwerken?"
        },
        options: [
        {
                  "en": "An adaptive optimization algorithm that combines momentum and adaptive learning rates",
                  "es": "Un algoritmo de optimización adaptativa que combina momentum y tasas de aprendizaje adaptativas",
                  "de": "Ein adaptiver Optimierungsalgorithmus der Momentum und adaptive Lernraten kombiniert",
                  "nl": "Een adaptief optimalisatie-algoritme dat momentum en adaptieve leersnelheden combineert"
        },
        {
                  "en": "A regularization technique",
                  "es": "Una técnica de regularización",
                  "de": "Eine Regularisierungstechnik",
                  "nl": "Een regularisatietechniek"
        },
        {
                  "en": "A type of activation function",
                  "es": "Un tipo de función de activación",
                  "de": "Eine Art von Aktivierungsfunktion",
                  "nl": "Een type activatiefunctie"
        },
        {
                  "en": "A simple gradient descent algorithm",
                  "es": "Un algoritmo simple de descenso de gradiente",
                  "de": "Ein einfacher Gradientenabstieg-Algorithmus",
                  "nl": "Een eenvoudig gradient descent algoritme"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Adam (Adaptive Moment Estimation) combines the benefits of AdaGrad and RMSprop. It maintains exponentially decaying averages of past gradients and their squared values, providing adaptive learning rates for each parameter and momentum-like behavior.",
                  "es": "Adam (Adaptive Moment Estimation) combina los beneficios de AdaGrad y RMSprop. Mantiene promedios de decaimiento exponencial de gradientes pasados y sus valores al cuadrado, proporcionando tasas de aprendizaje adaptativas para cada parámetro y comportamiento similar al momentum.",
                  "de": "Adam (Adaptive Moment Estimation) kombiniert die Vorteile von AdaGrad und RMSprop. Es hält exponentiell abklingende Durchschnitte vergangener Gradienten und ihrer quadrierten Werte aufrecht, bietet adaptive Lernraten für jeden Parameter und momentum-ähnliches Verhalten.",
                  "nl": "Adam (Adaptive Moment Estimation) combineert de voordelen van AdaGrad en RMSprop. Het houdt exponentieel afnemende gemiddelden van eerdere gradiënten en hun gekwadrateerde waarden bij, wat adaptieve leersnelheden voor elke parameter en momentum-achtig gedrag biedt."
        }
      },
      {
        question: {
                  "en": "What is L1 regularization (Lasso)?",
                  "es": "¿Qué es la regularización L1 (Lasso)?",
                  "de": "Was ist L1-Regularisierung (Lasso)?",
                  "nl": "Wat is L1-regularisatie (Lasso)?"
        },
        options: [
        {
                  "en": "A method to increase learning rate",
                  "es": "Un método para aumentar la tasa de aprendizaje",
                  "de": "Eine Methode um die Lernrate zu erhöhen",
                  "nl": "Een methode om de leersnelheid te verhogen"
        },
        {
                  "en": "A technique to add more layers",
                  "es": "Una técnica para agregar más capas",
                  "de": "Eine Technik um mehr Schichten hinzuzufügen",
                  "nl": "Een techniek om meer lagen toe te voegen"
        },
        {
                  "en": "A penalty term that adds the sum of absolute values of weights to the loss function",
                  "es": "Un término de penalización que agrega la suma de valores absolutos de pesos a la función de pérdida",
                  "de": "Ein Strafterm der die Summe der absoluten Werte der Gewichte zur Verlustfunktion hinzufügt",
                  "nl": "Een strafterm die de som van absolute waarden van gewichten toevoegt aan de verliesfunctie"
        },
        {
                  "en": "A penalty term that adds the sum of squared weights to the loss function",
                  "es": "Un término de penalización que agrega la suma de pesos al cuadrado a la función de pérdida",
                  "de": "Ein Strafterm der die Summe der quadrierten Gewichte zur Verlustfunktion hinzufügt",
                  "nl": "Een strafterm die de som van gekwadrateerde gewichten toevoegt aan de verliesfunctie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "L1 regularization adds a penalty proportional to the sum of absolute values of weights. This encourages sparsity by driving some weights to exactly zero, effectively performing feature selection and reducing model complexity.",
                  "es": "La regularización L1 agrega una penalización proporcional a la suma de valores absolutos de pesos. Esto fomenta la dispersión llevando algunos pesos exactamente a cero, realizando efectivamente selección de características y reduciendo la complejidad del modelo.",
                  "de": "L1-Regularisierung fügt eine Strafe proportional zur Summe der absoluten Werte der Gewichte hinzu. Dies fördert Sparsität indem einige Gewichte auf genau null getrieben werden, was effektiv Merkmalsauswahl durchführt und Modellkomplexität reduziert.",
                  "nl": "L1-regularisatie voegt een straf toe die evenredig is aan de som van absolute waarden van gewichten. Dit bevordert sparsheid door enkele gewichten naar precies nul te drijven, wat effectief kenmerkenselectie uitvoert en modelcomplexiteit vermindert."
        }
      },
      {
        question: {
                  "en": "What is L2 regularization (Ridge)?",
                  "es": "¿Qué es la regularización L2 (Ridge)?",
                  "de": "Was ist L2-Regularisierung (Ridge)?",
                  "nl": "Wat is L2-regularisatie (Ridge)?"
        },
        options: [
        {
                  "en": "A technique to reduce network depth",
                  "es": "Una técnica para reducir la profundidad de la red",
                  "de": "Eine Technik um die Netzwerktiefe zu reduzieren",
                  "nl": "Een techniek om de netwerkdiepte te verminderen"
        },
        {
                  "en": "A method to double the learning rate",
                  "es": "Un método para duplicar la tasa de aprendizaje",
                  "de": "Eine Methode um die Lernrate zu verdoppeln",
                  "nl": "Een methode om de leersnelheid te verdubbelen"
        },
        {
                  "en": "A penalty term that adds the sum of squared weights to the loss function",
                  "es": "Un término de penalización que agrega la suma de pesos al cuadrado a la función de pérdida",
                  "de": "Ein Strafterm der die Summe der quadrierten Gewichte zur Verlustfunktion hinzufügt",
                  "nl": "Een strafterm die de som van gekwadrateerde gewichten toevoegt aan de verliesfunctie"
        },
        {
                  "en": "A penalty term that adds the sum of absolute values of weights to the loss function",
                  "es": "Un término de penalización que agrega la suma de valores absolutos de pesos a la función de pérdida",
                  "de": "Ein Strafterm der die Summe der absoluten Werte der Gewichte zur Verlustfunktion hinzufügt",
                  "nl": "Een strafterm die de som van absolute waarden van gewichten toevoegt aan de verliesfunctie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "L2 regularization adds a penalty proportional to the sum of squared weights. This encourages weights to be small but doesn't force them to zero, leading to smoother models that are less likely to overfit to training data.",
                  "es": "La regularización L2 agrega una penalización proporcional a la suma de pesos al cuadrado. Esto fomenta que los pesos sean pequeños pero no los fuerza a cero, llevando a modelos más suaves que son menos propensos al sobreajuste en datos de entrenamiento.",
                  "de": "L2-Regularisierung fügt eine Strafe proportional zur Summe der quadrierten Gewichte hinzu. Dies ermutigt Gewichte klein zu sein aber zwingt sie nicht auf null, was zu glatteren Modellen führt die weniger wahrscheinlich an Trainingsdaten überanpassen.",
                  "nl": "L2-regularisatie voegt een straf toe die evenredig is aan de som van gekwadrateerde gewichten. Dit stimuleert gewichten klein te zijn maar dwingt ze niet naar nul, wat leidt tot gladdere modellen die minder waarschijnlijk overfitten op trainingsdata."
        }
      },
      {
        question: {
                  "en": "What is momentum in gradient descent?",
                  "es": "¿Qué es el momentum en el descenso de gradiente?",
                  "de": "Was ist Momentum beim Gradientenabstieg?",
                  "nl": "Wat is momentum in gradient descent?"
        },
        options: [
        {
                  "en": "The force applied to neural networks",
                  "es": "La fuerza aplicada a las redes neuronales",
                  "de": "Die Kraft die auf neuronale Netzwerke angewendet wird",
                  "nl": "De kracht toegepast op neurale netwerken"
        },
        {
                  "en": "A technique that adds a fraction of the previous update to the current update to accelerate convergence",
                  "es": "Una técnica que agrega una fracción de la actualización anterior a la actualización actual para acelerar la convergencia",
                  "de": "Eine Technik die einen Bruchteil der vorherigen Aktualisierung zur aktuellen Aktualisierung hinzufügt um Konvergenz zu beschleunigen",
                  "nl": "Een techniek die een fractie van de vorige update toevoegt aan de huidige update om convergentie te versnellen"
        },
        {
                  "en": "The speed at which gradients are calculated",
                  "es": "La velocidad a la que se calculan los gradientes",
                  "de": "Die Geschwindigkeit mit der Gradienten berechnet werden",
                  "nl": "De snelheid waarmee gradiënten worden berekend"
        },
        {
                  "en": "A method to store previous gradients",
                  "es": "Un método para almacenar gradientes anteriores",
                  "de": "Eine Methode um vorherige Gradienten zu speichern",
                  "nl": "Een methode om vorige gradiënten op te slaan"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Momentum helps gradient descent navigate ravines and accelerate in consistent directions while dampening oscillations. It accumulates a moving average of gradients and uses this accumulated velocity to update parameters, often leading to faster convergence.",
                  "es": "El momentum ayuda al descenso de gradiente a navegar barrancos y acelerar en direcciones consistentes mientras amortigua oscilaciones. Acumula un promedio móvil de gradientes y usa esta velocidad acumulada para actualizar parámetros, a menudo llevando a convergencia más rápida.",
                  "de": "Momentum hilft dem Gradientenabstieg Schluchten zu navigieren und in konsistenten Richtungen zu beschleunigen während Oszillationen gedämpft werden. Es akkumuliert einen gleitenden Durchschnitt von Gradienten und verwendet diese akkumulierte Geschwindigkeit um Parameter zu aktualisieren, was oft zu schnellerer Konvergenz führt.",
                  "nl": "Momentum helpt gradient descent ravijnen te navigeren en te versnellen in consistente richtingen terwijl oscillaties worden gedempt. Het accumuleert een voortschrijdend gemiddelde van gradiënten en gebruikt deze geaccumuleerde snelheid om parameters bij te werken, wat vaak leidt tot snellere convergentie."
        }
      },
      {
        question: {
                  "en": "What is RMSprop optimizer?",
                  "es": "¿Qué es el optimizador RMSprop?",
                  "de": "Was ist der RMSprop-Optimierer?",
                  "nl": "Wat is de RMSprop-optimizer?"
        },
        options: [
        {
                  "en": "A regularization technique",
                  "es": "Una técnica de regularización",
                  "de": "Eine Regularisierungstechnik",
                  "nl": "Een regularisatietechniek"
        },
        {
                  "en": "A root mean square calculation for neural networks",
                  "es": "Un cálculo de raíz cuadrada media para redes neuronales",
                  "de": "Eine Quadratmittel-Berechnung für neuronale Netzwerke",
                  "nl": "Een wortel gemiddelde kwadraat berekening voor neurale netwerken"
        },
        {
                  "en": "A method to propagate errors",
                  "es": "Un método para propagar errores",
                  "de": "Eine Methode um Fehler zu propagieren",
                  "nl": "Een methode om fouten te propageren"
        },
        {
                  "en": "An adaptive learning rate algorithm that divides the learning rate by an exponentially decaying average of squared gradients",
                  "es": "Algoritmo tasa aprendizaje adaptativo que divide tasa aprendizaje por promedio decaimiento exponencial gradientes al cuadrado",
                  "de": "Ein adaptiver Lernraten-Algorithmus der die Lernrate durch einen exponentiell abklingenden Durchschnitt quadrierter Gradienten teilt",
                  "nl": "Een adaptief leersnelheidsalgoritme dat de leersnelheid deelt door een exponentieel afnemend gemiddelde van gekwadrateerde gradiënten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "RMSprop (Root Mean Square Propagation) addresses the diminishing learning rates in AdaGrad by using an exponentially decaying average of squared gradients instead of all past gradients. This allows the algorithm to continue learning even after many iterations.",
                  "es": "RMSprop (Root Mean Square Propagation) aborda las tasas de aprendizaje decrecientes en AdaGrad usando un promedio de decaimiento exponencial de gradientes al cuadrado en lugar de todos los gradientes pasados. Esto permite que el algoritmo continúe aprendiendo incluso después de muchas iteraciones.",
                  "de": "RMSprop (Root Mean Square Propagation) adressiert die abnehmenden Lernraten in AdaGrad durch Verwendung eines exponentiell abklingenden Durchschnitts quadrierter Gradienten statt aller vergangenen Gradienten. Dies ermöglicht dem Algorithmus weiter zu lernen auch nach vielen Iterationen.",
                  "nl": "RMSprop (Root Mean Square Propagation) pakt de afnemende leersnelheden in AdaGrad aan door een exponentieel afnemend gemiddelde van gekwadrateerde gradiënten te gebruiken in plaats van alle eerdere gradiënten. Dit stelt het algoritme in staat door te blijven leren zelfs na vele iteraties."
        }
      },
      {
        question: {
                  "en": "What is batch normalization?",
                  "es": "¿Qué es la normalización por lotes?",
                  "de": "Was ist Batch Normalization?",
                  "nl": "Wat is batch normalisatie?"
        },
        options: [
        {
                  "en": "A method to organize training batches",
                  "es": "Un método para organizar lotes de entrenamiento",
                  "de": "Eine Methode um Trainingsbatches zu organisieren",
                  "nl": "Een methode om trainingsbatches te organiseren"
        },
        {
                  "en": "A technique to reduce batch size",
                  "es": "Una técnica para reducir el tamaño del lote",
                  "de": "Eine Technik um die Batch-Größe zu reduzieren",
                  "nl": "Een techniek om de batchgrootte te verminderen"
        },
        {
                  "en": "A way to normalize the final output",
                  "es": "Una forma de normalizar la salida final",
                  "de": "Eine Art die finale Ausgabe zu normalisieren",
                  "nl": "Een manier om de finale uitvoer te normaliseren"
        },
        {
                  "en": "A technique that normalizes inputs to each layer to have zero mean and unit variance within each mini-batch",
                  "es": "Una técnica que normaliza las entradas a cada capa para tener media cero y varianza unitaria dentro de cada mini-lote",
                  "de": "Eine Technik die Eingaben zu jeder Schicht normalisiert um null Mittelwert und Einheitsvarianz innerhalb jedes Mini-Batches zu haben",
                  "nl": "Een techniek die invoer naar elke laag normaliseert om nul gemiddelde en eenheidvariantie te hebben binnen elke mini-batch"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Batch normalization normalizes the inputs to each layer by subtracting the batch mean and dividing by the batch standard deviation. This reduces internal covariate shift, allows higher learning rates, and acts as a form of regularization.",
                  "es": "La normalización por lotes normaliza las entradas a cada capa restando la media del lote y dividiendo por la desviación estándar del lote. Esto reduce el cambio de covariante interno, permite tasas de aprendizaje más altas y actúa como una forma de regularización.",
                  "de": "Batch Normalization normalisiert die Eingaben zu jeder Schicht durch Subtraktion des Batch-Mittelwerts und Division durch die Batch-Standardabweichung. Dies reduziert interne Kovariatenverschiebung, ermöglicht höhere Lernraten und wirkt als Form der Regularisierung.",
                  "nl": "Batch normalisatie normaliseert de invoer naar elke laag door het batch-gemiddelde af te trekken en te delen door de batch-standaarddeviatie. Dit vermindert interne covariaatshift, staat hogere leersnelheden toe en werkt als een vorm van regularisatie."
        }
      },
      {
        question: {
                  "en": "What is layer normalization?",
                  "es": "¿Qué es la normalización de capa?",
                  "de": "Was ist Layer Normalization?",
                  "nl": "Wat is layer normalisatie?"
        },
        options: [
        {
                  "en": "A method to normalize the number of layers",
                  "es": "Un método para normalizar el número de capas",
                  "de": "Eine Methode um die Anzahl der Schichten zu normalisieren",
                  "nl": "Een methode om het aantal lagen te normaliseren"
        },
        {
                  "en": "A way to organize layers hierarchically",
                  "es": "Una forma de organizar capas jerárquicamente",
                  "de": "Eine Art Schichten hierarchisch zu organisieren",
                  "nl": "Een manier om lagen hiërarchisch te organiseren"
        },
        {
                  "en": "A normalization technique that normalizes across all features within a single example for each layer",
                  "es": "Una técnica de normalización que normaliza a través de todas las características dentro de un solo ejemplo para cada capa",
                  "de": "Eine Normalisierungstechnik die über alle Merkmale innerhalb eines einzelnen Beispiels für jede Schicht normalisiert",
                  "nl": "Een normalisatietechniek die normaliseert over alle kenmerken binnen een enkel voorbeeld voor elke laag"
        },
        {
                  "en": "A technique to make all layers the same size",
                  "es": "Una técnica para hacer que todas las capas tengan el mismo tamaño",
                  "de": "Eine Technik um alle Schichten gleich groß zu machen",
                  "nl": "Een techniek om alle lagen dezelfde grootte te geven"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Layer normalization normalizes across the features (neurons) within each layer for each training example independently. Unlike batch normalization, it doesn't depend on batch size, making it suitable for recurrent networks and small batch scenarios.",
                  "es": "La normalización de capa normaliza a través de las características (neuronas) dentro de cada capa para cada ejemplo de entrenamiento independientemente. A diferencia de la normalización por lotes, no depende del tamaño del lote, haciéndola adecuada para redes recurrentes y escenarios de lotes pequeños.",
                  "de": "Layer Normalization normalisiert über die Merkmale (Neuronen) innerhalb jeder Schicht für jedes Trainingsbeispiel unabhängig. Im Gegensatz zu Batch Normalization hängt sie nicht von der Batch-Größe ab, was sie für rekurrente Netzwerke und kleine Batch-Szenarien geeignet macht.",
                  "nl": "Layer normalisatie normaliseert over de kenmerken (neuronen) binnen elke laag voor elk trainingsvoorbeeld onafhankelijk. In tegenstelling tot batch normalisatie hangt het niet af van batchgrootte, waardoor het geschikt is voor recurrente netwerken en kleine batch-scenario's."
        }
      },
      {
        question: {
                  "en": "What is weight decay?",
                  "es": "¿Qué es la decadencia de pesos?",
                  "de": "Was ist Weight Decay?",
                  "nl": "Wat is weight decay?"
        },
        options: [
        {
                  "en": "A regularization technique that gradually reduces weights by multiplying them by a factor slightly less than 1",
                  "es": "Una técnica de regularización que reduce gradualmente los pesos multiplicándolos por un factor ligeramente menor que 1",
                  "de": "Eine Regularisierungstechnik die Gewichte allmählich reduziert indem sie mit einem Faktor etwas kleiner als 1 multipliziert werden",
                  "nl": "Een regularisatietechniek die geleidelijk gewichten vermindert door ze te vermenigvuldigen met een factor iets minder dan 1"
        },
        {
                  "en": "A technique to increase weight values",
                  "es": "Una técnica para aumentar valores de peso",
                  "de": "Eine Technik um Gewichtswerte zu erhöhen",
                  "nl": "Een techniek om gewichtwaarden te verhogen"
        },
        {
                  "en": "A method to remove unnecessary weights",
                  "es": "Un método para eliminar pesos innecesarios",
                  "de": "Eine Methode um unnötige Gewichte zu entfernen",
                  "nl": "Een methode om onnodige gewichten te verwijderen"
        },
        {
                  "en": "The natural degradation of neural networks over time",
                  "es": "La degradación natural de las redes neuronales a lo largo del tiempo",
                  "de": "Die natürliche Degradation neuronaler Netzwerke über die Zeit",
                  "nl": "De natuurlijke degradatie van neurale netwerken over tijd"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Weight decay is a regularization technique that prevents weights from growing too large by adding a small penalty proportional to the size of weights. It's mathematically equivalent to L2 regularization and helps prevent overfitting by keeping the model simple.",
                  "es": "La decadencia de pesos es una técnica de regularización que previene que los pesos crezcan demasiado agregando una pequeña penalización proporcional al tamaño de los pesos. Es matemáticamente equivalente a la regularización L2 y ayuda a prevenir el sobreajuste manteniendo el modelo simple.",
                  "de": "Weight Decay ist eine Regularisierungstechnik die verhindert dass Gewichte zu groß werden durch Hinzufügen einer kleinen Strafe proportional zur Größe der Gewichte. Es ist mathematisch äquivalent zu L2-Regularisierung und hilft Überanpassung zu verhindern indem das Modell einfach gehalten wird.",
                  "nl": "Weight decay is een regularisatietechniek die voorkomt dat gewichten te groot worden door een kleine straf toe te voegen die evenredig is aan de grootte van gewichten. Het is wiskundig equivalent aan L2-regularisatie en helpt overfitting te voorkomen door het model eenvoudig te houden."
        }
      },
      {
        question: {
                  "en": "What is AdaGrad optimizer?",
                  "es": "¿Qué es el optimizador AdaGrad?",
                  "de": "Was ist der AdaGrad-Optimierer?",
                  "nl": "Wat is de AdaGrad-optimizer?"
        },
        options: [
        {
                  "en": "A way to add gradients together",
                  "es": "Una forma de sumar gradientes",
                  "de": "Eine Art Gradienten zusammenzufügen",
                  "nl": "Een manier om gradiënten samen te voegen"
        },
        {
                  "en": "A gradient calculation method",
                  "es": "Un método de cálculo de gradiente",
                  "de": "Eine Gradientenberechnungsmethode",
                  "nl": "Een gradiëntberekeningsmethod"
        },
        {
                  "en": "An adaptive learning rate algorithm that adjusts learning rates based on historical gradients for each parameter",
                  "es": "Un algoritmo de tasa de aprendizaje adaptativa que ajusta las tasas de aprendizaje basándose en gradientes históricos para cada parámetro",
                  "de": "Ein adaptiver Lernraten-Algorithmus der Lernraten basierend auf historischen Gradienten für jeden Parameter anpasst",
                  "nl": "Een adaptief leersnelheidsalgoritme dat leersnelheden aanpast gebaseerd op historische gradiënten voor elke parameter"
        },
        {
                  "en": "A technique to graduate neural networks",
                  "es": "Una técnica para graduar redes neuronales",
                  "de": "Eine Technik um neuronale Netzwerke zu graduieren",
                  "nl": "Een techniek om neurale netwerken af te studeren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "AdaGrad (Adaptive Gradient) adapts the learning rate for each parameter individually based on the historical sum of squared gradients. Parameters with large gradients get smaller learning rates, while parameters with small gradients get larger learning rates.",
                  "es": "AdaGrad (Adaptive Gradient) adapta la tasa de aprendizaje para cada parámetro individualmente basándose en la suma histórica de gradientes al cuadrado. Los parámetros con gradientes grandes obtienen tasas de aprendizaje más pequeñas, mientras que los parámetros con gradientes pequeños obtienen tasas de aprendizaje más grandes.",
                  "de": "AdaGrad (Adaptive Gradient) passt die Lernrate für jeden Parameter individuell basierend auf der historischen Summe quadrierter Gradienten an. Parameter mit großen Gradienten erhalten kleinere Lernraten, während Parameter mit kleinen Gradienten größere Lernraten erhalten.",
                  "nl": "AdaGrad (Adaptive Gradient) past de leersnelheid voor elke parameter individueel aan gebaseerd op de historische som van gekwadrateerde gradiënten. Parameters met grote gradiënten krijgen kleinere leersnelheden, terwijl parameters met kleine gradiënten grotere leersnelheden krijgen."
        }
      },
      {
        question: {
                  "en": "What is learning rate scheduling?",
                  "es": "¿Qué es la programación de la tasa de aprendizaje?",
                  "de": "Was ist Learning Rate Scheduling?",
                  "nl": "Wat is leersnelheid planning?"
        },
        options: [
        {
                  "en": "A technique to speed up learning",
                  "es": "Una técnica para acelerar el aprendizaje",
                  "de": "Eine Technik um das Lernen zu beschleunigen",
                  "nl": "Een techniek om het leren te versnellen"
        },
        {
                  "en": "A way to schedule training sessions",
                  "es": "Una forma de programar sesiones de entrenamiento",
                  "de": "Eine Art Trainingssitzungen zu planen",
                  "nl": "Een manier om trainingssessies in te plannen"
        },
        {
                  "en": "A method to organize learning materials",
                  "es": "Un método para organizar materiales de aprendizaje",
                  "de": "Eine Methode um Lernmaterialien zu organisieren",
                  "nl": "Een methode om leermateriaal te organiseren"
        },
        {
                  "en": "A technique to systematically change the learning rate during training to improve convergence",
                  "es": "Una técnica para cambiar sistemáticamente la tasa de aprendizaje durante el entrenamiento para mejorar la convergencia",
                  "de": "Eine Technik um die Lernrate während des Trainings systematisch zu ändern um Konvergenz zu verbessern",
                  "nl": "Een techniek om de leersnelheid systematisch te veranderen tijdens training om convergentie te verbeteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Learning rate scheduling involves changing the learning rate during training according to a predefined schedule. Common strategies include step decay, exponential decay, and cosine annealing. This helps fine-tune the model in later stages of training.",
                  "es": "La programación de la tasa de aprendizaje implica cambiar la tasa de aprendizaje durante el entrenamiento según un horario predefinido. Las estrategias comunes incluyen decaimiento por pasos, decaimiento exponencial y enfriamiento coseno. Esto ayuda a afinar el modelo en etapas posteriores del entrenamiento.",
                  "de": "Learning Rate Scheduling beinhaltet das Ändern der Lernrate während des Trainings nach einem vordefinierten Schema. Häufige Strategien umfassen Schritt-Zerfall, exponentiellen Zerfall und Kosinus-Annealing. Dies hilft das Modell in späteren Trainingsphasen fein abzustimmen.",
                  "nl": "Leersnelheid planning houdt in dat de leersnelheid tijdens training wordt veranderd volgens een voorgedefinieerd schema. Veelvoorkomende strategieën zijn step decay, exponentiële decay en cosinus annealing. Dit helpt het model fijn af te stellen in latere stadia van training."
        }
      },
      {
        question: {
                  "en": "What is elastic net regularization?",
                  "es": "¿Qué es la regularización de red elástica?",
                  "de": "Was ist Elastic Net Regularisierung?",
                  "nl": "Wat is elastic net regularisatie?"
        },
        options: [
        {
                  "en": "A regularization method for elastic materials",
                  "es": "Un método de regularización para materiales elásticos",
                  "de": "Eine Regularisierungsmethode für elastische Materialien",
                  "nl": "Een regularisatiemethode voor elastische materialen"
        },
        {
                  "en": "A technique to stretch network connections",
                  "es": "Una técnica para estirar conexiones de red",
                  "de": "Eine Technik um Netzwerkverbindungen zu dehnen",
                  "nl": "Een techniek om netwerkverbindingen uit te rekken"
        },
        {
                  "en": "A method to make networks more elastic",
                  "es": "Un método para hacer las redes más elásticas",
                  "de": "Eine Methode um Netzwerke elastischer zu machen",
                  "nl": "Een methode om netwerken elastischer te maken"
        },
        {
                  "en": "A combination of L1 and L2 regularization that provides both sparsity and grouping effects",
                  "es": "Una combinación de regularización L1 y L2 que proporciona efectos tanto de dispersión como de agrupamiento",
                  "de": "Eine Kombination aus L1- und L2-Regularisierung die sowohl Sparsität als auch Gruppierungseffekte bietet",
                  "nl": "Een combinatie van L1 en L2 regularisatie die zowel sparsheid als groeperingseffecten biedt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Elastic net combines the benefits of both L1 (Lasso) and L2 (Ridge) regularization. It can select groups of correlated features together (like Ridge) while also performing feature selection by setting some coefficients to zero (like Lasso).",
                  "es": "La red elástica combina los beneficios de la regularización L1 (Lasso) y L2 (Ridge). Puede seleccionar grupos de características correlacionadas juntas (como Ridge) mientras también realiza selección de características estableciendo algunos coeficientes en cero (como Lasso).",
                  "de": "Elastic Net kombiniert die Vorteile sowohl der L1- (Lasso) als auch der L2- (Ridge) Regularisierung. Es kann Gruppen korrelierter Merkmale zusammen auswählen (wie Ridge) während es auch Merkmalsauswahl durchführt indem einige Koeffizienten auf null gesetzt werden (wie Lasso).",
                  "nl": "Elastic net combineert de voordelen van zowel L1 (Lasso) als L2 (Ridge) regularisatie. Het kan groepen gecorreleerde kenmerken samen selecteren (zoals Ridge) terwijl het ook kenmerkenselectie uitvoert door enkele coëfficiënten op nul te zetten (zoals Lasso)."
        }
      },
      {
        question: {
                  "en": "What is the learning rate warm-up technique?",
                  "es": "¿Qué es la técnica de calentamiento de la tasa de aprendizaje?",
                  "de": "Was ist die Learning Rate Warm-up Technik?",
                  "nl": "Wat is de leersnelheid opwarming techniek?"
        },
        options: [
        {
                  "en": "A way to heat neural networks",
                  "es": "Una forma de calentar redes neuronales",
                  "de": "Eine Art neuronale Netzwerke zu erwärmen",
                  "nl": "Een manier om neurale netwerken te verwarmen"
        },
        {
                  "en": "A method to warm up the computer before training",
                  "es": "Un método para calentar la computadora antes del entrenamiento",
                  "de": "Eine Methode um den Computer vor dem Training aufzuwärmen",
                  "nl": "Een methode om de computer op te warmen voor training"
        },
        {
                  "en": "A technique that gradually increases the learning rate from a small value to the target value at the beginning of training",
                  "es": "Una técnica que aumenta gradualmente la tasa de aprendizaje desde un valor pequeño hasta el valor objetivo al comienzo del entrenamiento",
                  "de": "Eine Technik die die Lernrate allmählich von einem kleinen Wert auf den Zielwert zu Beginn des Trainings erhöht",
                  "nl": "Techniek die geleidelijk leersnelheid verhoogt van kleine waarde naar doelwaarde aan begin van training"
        },
        {
                  "en": "A technique to prepare data for learning",
                  "es": "Una técnica para preparar datos para el aprendizaje",
                  "de": "Eine Technik um Daten für das Lernen vorzubereiten",
                  "nl": "Een techniek om data voor te bereiden voor leren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Learning rate warm-up starts training with a very small learning rate and gradually increases it to the desired value over a few epochs. This helps stabilize training, especially for large batch sizes or when using adaptive optimizers like Adam.",
                  "es": "El calentamiento de la tasa de aprendizaje comienza el entrenamiento con una tasa de aprendizaje muy pequeña y la aumenta gradualmente hasta el valor deseado durante unas pocas épocas. Esto ayuda a estabilizar el entrenamiento, especialmente para tamaños de lote grandes o cuando se usan optimizadores adaptativos como Adam.",
                  "de": "Learning Rate Warm-up beginnt das Training mit einer sehr kleinen Lernrate und erhöht sie allmählich auf den gewünschten Wert über wenige Epochen. Dies hilft das Training zu stabilisieren, besonders für große Batch-Größen oder bei Verwendung adaptiver Optimierer wie Adam.",
                  "nl": "Leersnelheid opwarming begint training met een zeer kleine leersnelheid en verhoogt deze geleidelijk naar de gewenste waarde over enkele epochs. Dit helpt training te stabiliseren, vooral voor grote batchgroottes of bij gebruik van adaptieve optimizers zoals Adam."
        }
      },
      {
        question: {
                  "en": "What is gradient accumulation?",
                  "es": "¿Qué es la acumulación de gradientes?",
                  "de": "Was ist Gradientenakkumulation?",
                  "nl": "Wat is gradiënt accumulatie?"
        },
        options: [
        {
                  "en": "A technique that accumulates gradients over multiple forward passes before updating weights, simulating larger batch sizes",
                  "es": "Una técnica que acumula gradientes sobre múltiples pases hacia adelante antes de actualizar pesos, simulando tamaños de lote más grandes",
                  "de": "Eine Technik die Gradienten über mehrere Vorwärtsdurchgänge akkumuliert bevor Gewichte aktualisiert werden, simuliert größere Batch-Größen",
                  "nl": "Een techniek die gradiënten accumuleert over meerdere voorwaartse doorvragen voordat gewichten worden bijgewerkt, wat grotere batchgroottes simuleert"
        },
        {
                  "en": "A method to store all gradients permanently",
                  "es": "Un método para almacenar todos los gradientes permanentemente",
                  "de": "Eine Methode um alle Gradienten dauerhaft zu speichern",
                  "nl": "Een methode om alle gradiënten permanent op te slaan"
        },
        {
                  "en": "A technique to prevent gradient calculation",
                  "es": "Una técnica para prevenir el cálculo de gradientes",
                  "de": "Eine Technik um Gradientenberechnung zu verhindern",
                  "nl": "Een techniek om gradiëntberekening te voorkomen"
        },
        {
                  "en": "The natural build-up of gradients over time",
                  "es": "La acumulación natural de gradientes a lo largo del tiempo",
                  "de": "Die natürliche Ansammlung von Gradienten über die Zeit",
                  "nl": "De natuurlijke ophoping van gradiënten over tijd"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Gradient accumulation allows training with effectively larger batch sizes when memory is limited. Instead of updating weights after each mini-batch, gradients are accumulated over several mini-batches before performing the weight update, achieving similar effects to larger batches.",
                  "es": "La acumulación de gradientes permite entrenar con tamaños de lote efectivamente más grandes cuando la memoria es limitada. En lugar de actualizar pesos después de cada mini-lote, los gradientes se acumulan sobre varios mini-lotes antes de realizar la actualización de pesos, logrando efectos similares a lotes más grandes.",
                  "de": "Gradientenakkumulation ermöglicht das Training mit effektiv größeren Batch-Größen wenn Speicher begrenzt ist. Statt Gewichte nach jedem Mini-Batch zu aktualisieren, werden Gradienten über mehrere Mini-Batches akkumuliert bevor die Gewichtsaktualisierung durchgeführt wird, wodurch ähnliche Effekte wie größere Batches erzielt werden.",
                  "nl": "Gradiënt accumulatie maakt training mogelijk met effectief grotere batchgroottes wanneer geheugen beperkt is. In plaats van gewichten bij te werken na elke mini-batch, worden gradiënten geaccumuleerd over meerdere mini-batches voordat de gewichtupdate wordt uitgevoerd, wat vergelijkbare effecten bereikt als grotere batches."
        }
      },
      {
        question: {
                  "en": "What is the difference between SGD with momentum and Nesterov momentum?",
                  "es": "¿Cuál es la diferencia entre SGD con momentum y momentum de Nesterov?",
                  "de": "Was ist der Unterschied zwischen SGD mit Momentum und Nesterov Momentum?",
                  "nl": "Wat is het verschil tussen SGD met momentum en Nesterov momentum?"
        },
        options: [
        {
                  "en": "Nesterov momentum doesn't use previous gradients",
                  "es": "El momentum de Nesterov no usa gradientes anteriores",
                  "de": "Nesterov Momentum verwendet keine vorherigen Gradienten",
                  "nl": "Nesterov momentum gebruikt geen vorige gradiënten"
        },
        {
                  "en": "Nesterov momentum uses a smaller learning rate",
                  "es": "El momentum de Nesterov usa una tasa de aprendizaje más pequeña",
                  "de": "Nesterov Momentum verwendet eine kleinere Lernrate",
                  "nl": "Nesterov momentum gebruikt een kleinere leersnelheid"
        },
        {
                  "en": "Nesterov momentum computes gradients at the anticipated future position rather than the current position",
                  "es": "El momentum de Nesterov calcula gradientes en la posición futura anticipada en lugar de la posición actual",
                  "de": "Nesterov Momentum berechnet Gradienten an der antizipierten zukünftigen Position statt der aktuellen Position",
                  "nl": "Nesterov momentum berekent gradiënten op de geanticipeerde toekomstige positie in plaats van de huidige positie"
        },
        {
                  "en": "There is no difference between them",
                  "es": "No hay diferencia entre ellos",
                  "de": "Es gibt keinen Unterschied zwischen ihnen",
                  "nl": "Er is geen verschil tussen hen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Nesterov Accelerated Gradient (NAG) is a variant of momentum that provides 'lookahead' by computing gradients not at the current position but at the anticipated future position after applying momentum. This often leads to better convergence and reduced oscillations.",
                  "es": "El Gradiente Acelerado de Nesterov (NAG) es una variante del momentum que proporciona 'visión anticipada' calculando gradientes no en la posición actual sino en la posición futura anticipada después de aplicar momentum. Esto a menudo lleva a mejor convergencia y oscilaciones reducidas.",
                  "de": "Nesterov Accelerated Gradient (NAG) ist eine Variante von Momentum die 'Vorausschau' bietet indem Gradienten nicht an der aktuellen Position sondern an der antizipierten zukünftigen Position nach Anwendung von Momentum berechnet werden. Dies führt oft zu besserer Konvergenz und reduzierten Oszillationen.",
                  "nl": "Nesterov Accelerated Gradient (NAG) is een variant van momentum die 'vooruitkijk' biedt door gradiënten te berekenen niet op de huidige positie maar op de geanticipeerde toekomstige positie na het toepassen van momentum. Dit leidt vaak tot betere convergentie en verminderde oscillaties."
        }
      },
      {
        question: {
                  "en": "What is spectral normalization?",
                  "es": "¿Qué es la normalización espectral?",
                  "de": "Was ist Spectral Normalization?",
                  "nl": "Wat is spectrale normalisatie?"
        },
        options: [
        {
                  "en": "A regularization technique that constrains the spectral radius of weight matrices to improve training stability",
                  "es": "Una técnica de regularización que restringe el radio espectral de matrices de peso para mejorar la estabilidad del entrenamiento",
                  "de": "Eine Regularisierungstechnik die den Spektralradius von Gewichtsmatrizen einschränkt um Trainingsstabilität zu verbessern",
                  "nl": "Een regularisatietechniek die de spectrale radius van gewichtmatrices beperkt om trainingsstabiliteit te verbeteren"
        },
        {
                  "en": "A normalization method for spectral data",
                  "es": "Un método de normalización para datos espectrales",
                  "de": "Eine Normalisierungsmethode für Spektraldaten",
                  "nl": "Een normalisatiemethode voor spectrale data"
        },
        {
                  "en": "A technique to analyze frequency spectra",
                  "es": "Una técnica para analizar espectros de frecuencia",
                  "de": "Eine Technik um Frequenzspektren zu analysieren",
                  "nl": "Een techniek om frequentiespectra te analyseren"
        },
        {
                  "en": "A method to normalize color spectra in images",
                  "es": "Un método para normalizar espectros de color en imágenes",
                  "de": "Eine Methode um Farbspektren in Bildern zu normalisieren",
                  "nl": "Een methode om kleurspectra in afbeeldingen te normaliseren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Spectral normalization constrains the largest singular value (spectral norm) of weight matrices to be at most 1. This technique is particularly useful in GANs to ensure discriminator doesn't become too powerful and helps stabilize training.",
                  "es": "La normalización espectral restringe el valor singular más grande (norma espectral) de las matrices de peso para que sea como máximo 1. Esta técnica es particularmente útil en GAN para asegurar que el discriminador no se vuelva demasiado poderoso y ayuda a estabilizar el entrenamiento.",
                  "de": "Spectral Normalization beschränkt den größten Singulärwert (Spektralnorm) von Gewichtsmatrizen auf höchstens 1. Diese Technik ist besonders nützlich in GANs um sicherzustellen dass der Diskriminator nicht zu mächtig wird und hilft das Training zu stabilisieren.",
                  "nl": "Spectrale normalisatie beperkt de grootste singuliere waarde (spectrale norm) van gewichtmatrices tot maximaal 1. Deze techniek is bijzonder nuttig in GANs om ervoor te zorgen dat de discriminator niet te krachtig wordt en helpt training te stabiliseren."
        }
      },
      {
        question: {
                  "en": "What is the AdaBound optimizer?",
                  "es": "¿Qué es el optimizador AdaBound?",
                  "de": "Was ist der AdaBound-Optimierer?",
                  "nl": "Wat is de AdaBound-optimizer?"
        },
        options: [
        {
                  "en": "An optimizer that bounds gradients within specific limits",
                  "es": "Un optimizador que limita gradientes dentro de límites específicos",
                  "de": "Ein Optimierer der Gradienten innerhalb spezifischer Grenzen begrenzt",
                  "nl": "Een optimizer die gradiënten binnen specifieke grenzen begrendt"
        },
        {
                  "en": "An optimizer for bounded optimization problems",
                  "es": "Un optimizador para problemas de optimización limitada",
                  "de": "Ein Optimierer für begrenzte Optimierungsprobleme",
                  "nl": "Een optimizer voor begrensde optimalisatieproblemen"
        },
        {
                  "en": "A bounded version of AdaGrad",
                  "es": "Una versión limitada de AdaGrad",
                  "de": "Eine begrenzte Version von AdaGrad",
                  "nl": "Een begrensde versie van AdaGrad"
        },
        {
                  "en": "An optimizer that combines the benefits of adaptive methods and SGD by gradually transitioning from adaptive to SGD behavior",
                  "es": "Un optimizador que combina los beneficios de métodos adaptativos y SGD transitando gradualmente de comportamiento adaptativo a SGD",
                  "de": "Ein Optimierer der die Vorteile adaptiver Methoden und SGD kombiniert indem er allmählich von adaptivem zu SGD-Verhalten übergeht",
                  "nl": "Een optimizer die de voordelen van adaptieve methoden en SGD combineert door geleidelijk over te gaan van adaptief naar SGD-gedrag"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "AdaBound starts with adaptive learning rates like Adam but gradually transitions to SGD-like behavior by imposing bounds on the learning rates. This aims to get the fast initial convergence of adaptive methods and the good generalization of SGD.",
                  "es": "AdaBound comienza con tasas de aprendizaje adaptativas como Adam pero transiciona gradualmente a comportamiento similar a SGD imponiendo límites en las tasas de aprendizaje. Esto busca obtener la convergencia inicial rápida de métodos adaptativos y la buena generalización de SGD.",
                  "de": "AdaBound beginnt mit adaptiven Lernraten wie Adam aber geht allmählich zu SGD-ähnlichem Verhalten über indem Grenzen für die Lernraten auferlegt werden. Dies zielt darauf ab die schnelle anfängliche Konvergenz adaptiver Methoden und die gute Generalisierung von SGD zu erhalten.",
                  "nl": "AdaBound begint met adaptieve leersnelheden zoals Adam maar gaat geleidelijk over naar SGD-achtig gedrag door grenzen op te leggen aan de leersnelheden. Dit is bedoeld om de snelle initiële convergentie van adaptieve methoden en de goede generalisatie van SGD te krijgen."
        }
      },
      {
        question: {
                  "en": "What is label smoothing?",
                  "es": "¿Qué es el suavizado de etiquetas?",
                  "de": "Was ist Label Smoothing?",
                  "nl": "Wat is label smoothing?"
        },
        options: [
        {
                  "en": "A technique to remove noise from labels",
                  "es": "Una técnica para eliminar ruido de las etiquetas",
                  "de": "Eine Technik um Rauschen aus Labels zu entfernen",
                  "nl": "Een techniek om ruis uit labels te verwijderen"
        },
        {
                  "en": "A method to smooth label transitions in videos",
                  "es": "Un método para suavizar transiciones de etiquetas en videos",
                  "de": "Eine Methode um Label-Übergänge in Videos zu glätten",
                  "nl": "Een methode om labeltransities in video's glad te maken"
        },
        {
                  "en": "A regularization technique that replaces hard target labels with soft probability distributions",
                  "es": "Una técnica de regularización que reemplaza etiquetas objetivo duras con distribuciones de probabilidad suaves",
                  "de": "Eine Regularisierungstechnik die harte Ziel-Labels durch weiche Wahrscheinlichkeitsverteilungen ersetzt",
                  "nl": "Een regularisatietechniek die harde doellabels vervangt door zachte waarschijnlijkheidsverdelingen"
        },
        {
                  "en": "A way to make labels more readable",
                  "es": "Una forma de hacer las etiquetas más legibles",
                  "de": "Eine Art Labels lesbarer zu machen",
                  "nl": "Een manier om labels leesbaarder te maken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Label smoothing replaces the standard one-hot encoded labels with a smoothed version where the true class gets probability (1-ε) and the remaining probability ε is distributed among other classes. This prevents overconfident predictions and often improves generalization.",
                  "es": "El suavizado de etiquetas reemplaza las etiquetas estándar codificadas en one-hot con una versión suavizada donde la clase verdadera obtiene probabilidad (1-ε) y la probabilidad restante ε se distribuye entre otras clases. Esto previene predicciones excesivamente confiadas y a menudo mejora la generalización.",
                  "de": "Label Smoothing ersetzt die standardmäßigen One-Hot-kodierten Labels durch eine geglättete Version wo die wahre Klasse Wahrscheinlichkeit (1-ε) erhält und die verbleibende Wahrscheinlichkeit ε unter anderen Klassen verteilt wird. Dies verhindert überconfidente Vorhersagen und verbessert oft die Generalisierung.",
                  "nl": "Label smoothing vervangt de standaard one-hot gecodeerde labels door een gladde versie waarbij de ware klasse waarschijnlijkheid (1-ε) krijgt en de resterende waarschijnlijkheid ε wordt verdeeld over andere klassen. Dit voorkomt overmoedige voorspellingen en verbetert vaak generalisatie."
        }
      },
      {
        question: {
                  "en": "What is the cyclical learning rate technique?",
                  "es": "¿Qué es la técnica de tasa de aprendizaje cíclica?",
                  "de": "Was ist die zyklische Lernraten-Technik?",
                  "nl": "Wat is de cyclische leersnelheid techniek?"
        },
        options: [
        {
                  "en": "A technique to cycle through different learning algorithms",
                  "es": "Una técnica para recorrer diferentes algoritmos de aprendizaje",
                  "de": "Eine Technik um verschiedene Lernalgorithmen zu durchlaufen",
                  "nl": "Een techniek om verschillende leeralgoritmen te doorlopen"
        },
        {
                  "en": "A way to cycle through training data",
                  "es": "Una forma de recorrer datos de entrenamiento",
                  "de": "Eine Art Trainingsdaten zu durchlaufen",
                  "nl": "Een manier om trainingsdata te doorlopen"
        },
        {
                  "en": "A method to restart training cyclically",
                  "es": "Un método para reiniciar el entrenamiento cíclicamente",
                  "de": "Eine Methode um Training zyklisch neu zu starten",
                  "nl": "Een methode om training cyclisch te herstarten"
        },
        {
                  "en": "A method that varies the learning rate between lower and upper bounds in cycles during training",
                  "es": "Un método que varía la tasa de aprendizaje entre límites inferiores y superiores en ciclos durante el entrenamiento",
                  "de": "Eine Methode die die Lernrate zwischen unteren und oberen Grenzen in Zyklen während des Trainings variiert",
                  "nl": "Een methode die de leersnelheid varieert tussen onder- en bovengrenzen in cycli tijdens training"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Cyclical learning rates periodically vary the learning rate between a minimum and maximum bound according to a cycle (triangular, exponential, etc.). This can help escape local minima, reduce training time, and often achieve better performance than fixed learning rates.",
                  "es": "Las tasas de aprendizaje cíclicas varían periódicamente la tasa de aprendizaje entre un límite mínimo y máximo según un ciclo (triangular, exponencial, etc.). Esto puede ayudar a escapar mínimos locales, reducir tiempo de entrenamiento y a menudo lograr mejor rendimiento que tasas de aprendizaje fijas.",
                  "de": "Zyklische Lernraten variieren periodisch die Lernrate zwischen einer minimalen und maximalen Grenze nach einem Zyklus (dreieckig, exponentiell, etc.). Dies kann helfen lokale Minima zu verlassen, Trainingszeit zu reduzieren und oft bessere Leistung als feste Lernraten zu erzielen.",
                  "nl": "Cyclische leersnelheden variëren periodiek de leersnelheid tussen een minimum en maximum grens volgens een cyclus (driehoekig, exponentieel, etc.). Dit kan helpen ontsnappen aan lokale minima, trainingstijd verminderen en vaak betere prestaties bereiken dan vaste leersnelheden."
        }
      },
      {
        question: {
                  "en": "What is mixup data augmentation as a regularization technique?",
                  "es": "¿Qué es la aumentación de datos mixup como técnica de regularización?",
                  "de": "Was ist Mixup-Datenaugmentierung als Regularisierungstechnik?",
                  "nl": "Wat is mixup data-augmentatie als regularisatietechniek?"
        },
        options: [
        {
                  "en": "A technique to combine multiple neural networks",
                  "es": "Una técnica para combinar múltiples redes neuronales",
                  "de": "Eine Technik um mehrere neuronale Netzwerke zu kombinieren",
                  "nl": "Een techniek om meerdere neurale netwerken te combineren"
        },
        {
                  "en": "A technique that creates new training examples by linearly interpolating between pairs of examples and their labels",
                  "es": "Una técnica que crea nuevos ejemplos de entrenamiento interpolando linealmente entre pares de ejemplos y sus etiquetas",
                  "de": "Eine Technik die neue Trainingsbeispiele durch lineare Interpolation zwischen Paaren von Beispielen und ihren Labels erstellt",
                  "nl": "Een techniek die nieuwe trainingsvoorbeelden creëert door lineair te interpoleren tussen paren van voorbeelden en hun labels"
        },
        {
                  "en": "A method to mix different optimization algorithms",
                  "es": "Un método para mezclar diferentes algoritmos de optimización",
                  "de": "Eine Methode um verschiedene Optimierungsalgorithmen zu mischen",
                  "nl": "Een methode om verschillende optimalisatie-algoritmen te mengen"
        },
        {
                  "en": "A way to mix training and validation data",
                  "es": "Una forma de mezclar datos de entrenamiento y validación",
                  "de": "Eine Art Trainings- und Validierungsdaten zu mischen",
                  "nl": "Een manier om trainings- en validatiedata te mengen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Mixup generates synthetic training examples by taking convex combinations of pairs of examples and their labels. If (x₁, y₁) and (x₂, y₂) are two training examples, mixup creates (λx₁ + (1-λ)x₂, λy₁ + (1-λ)y₂) where λ ∈ [0,1]. This encourages linear behavior between training examples and improves generalization.",
                  "es": "Mixup genera ejemplos de entrenamiento sintéticos tomando combinaciones convexas de pares de ejemplos y sus etiquetas. Si (x₁, y₁) y (x₂, y₂) son dos ejemplos de entrenamiento, mixup crea (λx₁ + (1-λ)x₂, λy₁ + (1-λ)y₂) donde λ ∈ [0,1]. Esto fomenta comportamiento lineal entre ejemplos de entrenamiento y mejora la generalización.",
                  "de": "Mixup generiert synthetische Trainingsbeispiele durch konvexe Kombinationen von Paaren von Beispielen und ihren Labels. Wenn (x₁, y₁) und (x₂, y₂) zwei Trainingsbeispiele sind, erstellt Mixup (λx₁ + (1-λ)x₂, λy₁ + (1-λ)y₂) wobei λ ∈ [0,1]. Dies ermutigt lineares Verhalten zwischen Trainingsbeispielen und verbessert die Generalisierung.",
                  "nl": "Mixup genereert synthetische trainingsvoorbeelden door convexe combinaties van paren voorbeelden en hun labels te nemen. Als (x₁, y₁) en (x₂, y₂) twee trainingsvoorbeelden zijn, creëert mixup (λx₁ + (1-λ)x₂, λy₁ + (1-λ)y₂) waarbij λ ∈ [0,1]. Dit stimuleert lineair gedrag tussen trainingsvoorbeelden en verbetert generalisatie."
        }
      },
      {
        question: {
                  "en": "What is gradient clipping?",
                  "es": "¿Qué es el recorte de gradientes?",
                  "de": "Was ist Gradient Clipping?",
                  "nl": "Wat is gradiënt clipping?"
        },
        options: [
        {
                  "en": "A technique that limits the magnitude of gradients to prevent exploding gradients during training",
                  "es": "Una técnica que limita la magnitud de los gradientes para prevenir gradientes explosivos durante el entrenamiento",
                  "de": "Eine Technik die die Größe von Gradienten begrenzt um explodierende Gradienten während des Trainings zu verhindern",
                  "nl": "Een techniek die de grootte van gradiënten beperkt om exploderende gradiënten tijdens training te voorkomen"
        },
        {
                  "en": "A method to cut out parts of gradients",
                  "es": "Un método para cortar partes de gradientes",
                  "de": "Eine Methode um Teile von Gradienten herauszuschneiden",
                  "nl": "Een methode om delen van gradiënten weg te knippen"
        },
        {
                  "en": "A way to attach gradients together",
                  "es": "Una forma de unir gradientes",
                  "de": "Eine Art Gradienten zusammenzufügen",
                  "nl": "Een manier om gradiënten aan elkaar te bevestigen"
        },
        {
                  "en": "A technique to copy gradients",
                  "es": "Una técnica para copiar gradientes",
                  "de": "Eine Technik um Gradienten zu kopieren",
                  "nl": "Een techniek om gradiënten te kopiëren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Gradient clipping prevents the exploding gradient problem by setting a threshold value and scaling down gradients when their norm exceeds this threshold. Common methods include clipping by value (element-wise) or by norm (scaling the entire gradient vector).",
                  "es": "El recorte de gradientes previene el problema de gradientes explosivos estableciendo un valor umbral y reduciendo gradientes cuando su norma excede este umbral. Los métodos comunes incluyen recorte por valor (elemento por elemento) o por norma (escalando todo el vector gradiente).",
                  "de": "Gradient Clipping verhindert das Problem explodierender Gradienten durch Festlegung eines Schwellenwerts und Herunterskalierung von Gradienten wenn ihre Norm diesen Schwellenwert überschreitet. Häufige Methoden umfassen Clipping nach Wert (elementweise) oder nach Norm (Skalierung des gesamten Gradientenvektors).",
                  "nl": "Gradiënt clipping voorkomt het probleem van exploderende gradiënten door een drempelwaarde in te stellen en gradiënten te schalen wanneer hun norm deze drempel overschrijdt. Veelvoorkomende methoden zijn clipping per waarde (element-gewijs) of per norm (schaling van de hele gradiëntvector)."
        }
      },
      {
        question: {
                  "en": "What is cosine annealing?",
                  "es": "¿Qué es el enfriamiento coseno?",
                  "de": "Was ist Kosinus-Annealing?",
                  "nl": "Wat is cosinus annealing?"
        },
        options: [
        {
                  "en": "A regularization technique using trigonometry",
                  "es": "Una técnica de regularización usando trigonometría",
                  "de": "Eine Regularisierungstechnik unter Verwendung von Trigonometrie",
                  "nl": "Een regularisatietechniek met trigonometrie"
        },
        {
                  "en": "A learning rate schedule that decreases the learning rate following a cosine curve",
                  "es": "Un programa de tasa de aprendizaje que disminuye la tasa de aprendizaje siguiendo una curva coseno",
                  "de": "Ein Lernraten-Schema das die Lernrate nach einer Kosinuskurve verringert",
                  "nl": "Een leersnelheid schema dat de leersnelheid verlaagt volgens een cosinuscurve"
        },
        {
                  "en": "An activation function based on cosine",
                  "es": "Una función de activación basada en coseno",
                  "de": "Eine Aktivierungsfunktion basierend auf Kosinus",
                  "nl": "Een activatiefunctie gebaseerd op cosinus"
        },
        {
                  "en": "A method to cool down neural networks",
                  "es": "Un método para enfriar redes neuronales",
                  "de": "Eine Methode um neuronale Netzwerke abzukühlen",
                  "nl": "Een methode om neurale netwerken af te koelen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cosine annealing schedules the learning rate to follow a cosine curve from an initial value down to a minimum, then optionally restart. This provides a smooth decay and can be combined with warm restarts to help escape local minima and improve generalization.",
                  "es": "El enfriamiento coseno programa la tasa de aprendizaje para seguir una curva coseno desde un valor inicial hasta un mínimo, luego opcionalmente reiniciar. Esto proporciona un decaimiento suave y puede combinarse con reinicios cálidos para ayudar a escapar mínimos locales y mejorar la generalización.",
                  "de": "Kosinus-Annealing plant die Lernrate um einer Kosinuskurve von einem Anfangswert bis zu einem Minimum zu folgen, dann optional neu zu starten. Dies bietet einen glatten Zerfall und kann mit Warm Restarts kombiniert werden um aus lokalen Minima zu entkommen und Generalisierung zu verbessern.",
                  "nl": "Cosinus annealing plant de leersnelheid om een cosinuscurve te volgen van een initiële waarde naar een minimum, daarna optioneel herstarten. Dit biedt een vloeiende afname en kan worden gecombineerd met warme herstarts om te helpen ontsnappen aan lokale minima en generalisatie te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is the RAdam (Rectified Adam) optimizer?",
                  "es": "¿Qué es el optimizador RAdam (Adam Rectificado)?",
                  "de": "Was ist der RAdam (Rectified Adam) Optimierer?",
                  "nl": "Wat is de RAdam (Rectified Adam) optimizer?"
        },
        options: [
        {
                  "en": "Adam optimizer with reduced memory usage",
                  "es": "Optimizador Adam con uso de memoria reducido",
                  "de": "Adam Optimierer mit reduziertem Speicherverbrauch",
                  "nl": "Adam optimizer met verminderd geheugengebruik"
        },
        {
                  "en": "A radial version of the Adam optimizer",
                  "es": "Una versión radial del optimizador Adam",
                  "de": "Eine radiale Version des Adam Optimierers",
                  "nl": "Een radiale versie van de Adam optimizer"
        },
        {
                  "en": "A randomized version of Adam",
                  "es": "Una versión aleatorizada de Adam",
                  "de": "Eine randomisierte Version von Adam",
                  "nl": "Een gerandomiseerde versie van Adam"
        },
        {
                  "en": "A variant of Adam that addresses the bad convergence problem by rectifying the variance in early training stages",
                  "es": "Una variante de Adam que aborda el problema de mala convergencia rectificando la varianza en etapas tempranas de entrenamiento",
                  "de": "Eine Variante von Adam die das Problem schlechter Konvergenz adressiert durch Rektifizierung der Varianz in frühen Trainingsphasen",
                  "nl": "Een variant van Adam die het probleem van slechte convergentie aanpakt door de variantie in vroege trainingstadia te rectificeren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "RAdam addresses the large variance of adaptive learning rate in the early stages of training by introducing a term to rectify the variance. This eliminates the need for learning rate warm-up and makes training more stable, particularly in the initial epochs.",
                  "es": "RAdam aborda la gran varianza de la tasa de aprendizaje adaptativa en las primeras etapas del entrenamiento introduciendo un término para rectificar la varianza. Esto elimina la necesidad de calentamiento de tasa de aprendizaje y hace el entrenamiento más estable, particularmente en las épocas iniciales.",
                  "de": "RAdam adressiert die große Varianz der adaptiven Lernrate in den frühen Trainingsphasen durch Einführung eines Terms zur Rektifizierung der Varianz. Dies eliminiert die Notwendigkeit für Learning Rate Warm-up und macht Training stabiler, besonders in den Anfangsepochen.",
                  "nl": "RAdam pakt de grote variantie van adaptieve leersnelheid in de vroege stadia van training aan door een term te introduceren om de variantie te rectificeren. Dit elimineert de noodzaak voor leersnelheid opwarming en maakt training stabieler, vooral in de initiële epochs."
        }
      },
      {
        question: {
                  "en": "What is instance normalization?",
                  "es": "¿Qué es la normalización de instancia?",
                  "de": "Was ist Instance Normalization?",
                  "nl": "Wat is instance normalisatie?"
        },
        options: [
        {
                  "en": "A normalization technique that normalizes each channel of each sample independently",
                  "es": "Una técnica de normalización que normaliza cada canal de cada muestra independientemente",
                  "de": "Eine Normalisierungstechnik die jeden Kanal jedes Samples unabhängig normalisiert",
                  "nl": "Een normalisatietechniek die elk kanaal van elk sample onafhankelijk normaliseert"
        },
        {
                  "en": "Identical to batch normalization",
                  "es": "Idéntico a la normalización por lotes",
                  "de": "Identisch mit Batch Normalization",
                  "nl": "Identiek aan batch normalisatie"
        },
        {
                  "en": "A technique to normalize training time instances",
                  "es": "Una técnica para normalizar instancias de tiempo de entrenamiento",
                  "de": "Eine Technik um Trainingszeit-Instanzen zu normalisieren",
                  "nl": "Een techniek om trainingtijdinstanties te normaliseren"
        },
        {
                  "en": "A method to normalize object instances in images",
                  "es": "Un método para normalizar instancias de objetos en imágenes",
                  "de": "Eine Methode um Objektinstanzen in Bildern zu normalisieren",
                  "nl": "Een methode om objectinstanties in afbeeldingen te normaliseren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Instance normalization normalizes across spatial locations for each channel and each sample independently, commonly used in style transfer tasks. Unlike batch normalization which normalizes across the batch, instance normalization treats each sample independently.",
                  "es": "La normalización de instancia normaliza a través de ubicaciones espaciales para cada canal y cada muestra independientemente, comúnmente usada en tareas de transferencia de estilo. A diferencia de la normalización por lotes que normaliza a través del lote, la normalización de instancia trata cada muestra independientemente.",
                  "de": "Instance Normalization normalisiert über räumliche Positionen für jeden Kanal und jedes Sample unabhängig, häufig verwendet in Style-Transfer-Aufgaben. Im Gegensatz zu Batch Normalization die über den Batch normalisiert, behandelt Instance Normalization jedes Sample unabhängig.",
                  "nl": "Instance normalisatie normaliseert over ruimtelijke locaties voor elk kanaal en elk sample onafhankelijk, vaak gebruikt bij style transfer taken. In tegenstelling tot batch normalisatie die normaliseert over de batch, behandelt instance normalisatie elk sample onafhankelijk."
        }
      },
      {
        question: {
                  "en": "What is group normalization?",
                  "es": "¿Qué es la normalización de grupo?",
                  "de": "Was ist Group Normalization?",
                  "nl": "Wat is groep normalisatie?"
        },
        options: [
        {
                  "en": "Identical to layer normalization",
                  "es": "Idéntico a la normalización de capa",
                  "de": "Identisch mit Layer Normalization",
                  "nl": "Identiek aan layer normalisatie"
        },
        {
                  "en": "A method to normalize groups of training samples",
                  "es": "Un método para normalizar grupos de muestras de entrenamiento",
                  "de": "Eine Methode um Gruppen von Trainingssamples zu normalisieren",
                  "nl": "Een methode om groepen trainingssamples te normaliseren"
        },
        {
                  "en": "A technique to group similar normalizations",
                  "es": "Una técnica para agrupar normalizaciones similares",
                  "de": "Eine Technik um ähnliche Normalisierungen zu gruppieren",
                  "nl": "Een techniek om vergelijkbare normalisaties te groeperen"
        },
        {
                  "en": "A normalization technique that divides channels into groups and normalizes within each group independently",
                  "es": "Una técnica de normalización que divide canales en grupos y normaliza dentro de cada grupo independientemente",
                  "de": "Eine Normalisierungstechnik die Kanäle in Gruppen teilt und innerhalb jeder Gruppe unabhängig normalisiert",
                  "nl": "Een normalisatietechniek die kanalen verdeelt in groepen en normaliseert binnen elke groep onafhankelijk"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Group normalization divides the channels into groups and computes normalization statistics within each group. It's a middle ground between layer normalization (one group) and instance normalization (channels as groups), and works well with small batch sizes.",
                  "es": "La normalización de grupo divide los canales en grupos y calcula estadísticas de normalización dentro de cada grupo. Es un punto medio entre normalización de capa (un grupo) y normalización de instancia (canales como grupos), y funciona bien con tamaños de lote pequeños.",
                  "de": "Group Normalization teilt die Kanäle in Gruppen und berechnet Normalisierungsstatistiken innerhalb jeder Gruppe. Es ist ein Mittelweg zwischen Layer Normalization (eine Gruppe) und Instance Normalization (Kanäle als Gruppen), und funktioniert gut mit kleinen Batch-Größen.",
                  "nl": "Groep normalisatie verdeelt de kanalen in groepen en berekent normalisatiestatistieken binnen elke groep. Het is een middenweg tussen layer normalisatie (één groep) en instance normalisatie (kanalen als groepen), en werkt goed met kleine batchgroottes."
        }
      },
      {
        question: {
                  "en": "What is the Lookahead optimizer?",
                  "es": "¿Qué es el optimizador Lookahead?",
                  "de": "Was ist der Lookahead-Optimierer?",
                  "nl": "Wat is de Lookahead-optimizer?"
        },
        options: [
        {
                  "en": "An optimizer that predicts future gradients",
                  "es": "Un optimizador que predice gradientes futuros",
                  "de": "Ein Optimierer der zukünftige Gradienten vorhersagt",
                  "nl": "Een optimizer die toekomstige gradiënten voorspelt"
        },
        {
                  "en": "A forward-looking activation function",
                  "es": "Una función de activación con visión de futuro",
                  "de": "Eine vorausschauende Aktivierungsfunktion",
                  "nl": "Een vooruitziende activatiefunctie"
        },
        {
                  "en": "A meta-optimizer that maintains slow and fast weights, periodically updating slow weights towards fast weights",
                  "es": "Un meta-optimizador que mantiene pesos lentos y rápidos, actualizando periódicamente pesos lentos hacia pesos rápidos",
                  "de": "Ein Meta-Optimierer der langsame und schnelle Gewichte beibehält, periodisch langsame Gewichte in Richtung schneller Gewichte aktualisiert",
                  "nl": "Een meta-optimizer die trage en snelle gewichten bijhoudt, periodiek trage gewichten bijwerkt richting snelle gewichten"
        },
        {
                  "en": "An optimizer for vision tasks only",
                  "es": "Un optimizador solo para tareas de visión",
                  "de": "Ein Optimierer nur für Vision-Aufgaben",
                  "nl": "Een optimizer alleen voor vision taken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Lookahead is a meta-optimizer that wraps around any base optimizer. It maintains two sets of weights: fast weights updated by the base optimizer, and slow weights that are periodically interpolated towards the fast weights. This improves training stability and convergence.",
                  "es": "Lookahead es un meta-optimizador que envuelve cualquier optimizador base. Mantiene dos conjuntos de pesos: pesos rápidos actualizados por el optimizador base, y pesos lentos que se interpolan periódicamente hacia los pesos rápidos. Esto mejora estabilidad de entrenamiento y convergencia.",
                  "de": "Lookahead ist ein Meta-Optimierer der jeden Basis-Optimierer umschließt. Es behält zwei Gewichtssätze bei: schnelle Gewichte aktualisiert durch den Basis-Optimierer, und langsame Gewichte die periodisch zu den schnellen Gewichten interpoliert werden. Dies verbessert Trainingsstabilität und Konvergenz.",
                  "nl": "Lookahead is een meta-optimizer die rond elke basis-optimizer gewikkeld is. Het houdt twee sets gewichten bij: snelle gewichten bijgewerkt door de basis-optimizer, en trage gewichten die periodiek geïnterpoleerd worden richting de snelle gewichten. Dit verbetert trainingsstabiliteit en convergentie."
        }
      },
      {
        question: {
                  "en": "What is cutout data augmentation as regularization?",
                  "es": "¿Qué es la aumentación de datos cutout como regularización?",
                  "de": "Was ist Cutout-Datenaugmentierung als Regularisierung?",
                  "nl": "Wat is cutout data-augmentatie als regularisatie?"
        },
        options: [
        {
                  "en": "A cropping method for data preprocessing",
                  "es": "Un método de recorte para preprocesamiento de datos",
                  "de": "Eine Zuschneidemethode für Datenvorverarbeitung",
                  "nl": "Een crop-methode voor data-preprocessing"
        },
        {
                  "en": "A method to cut out unwanted parts of images",
                  "es": "Un método para cortar partes no deseadas de imágenes",
                  "de": "Eine Methode um unerwünschte Teile von Bildern herauszuschneiden",
                  "nl": "Een methode om ongewenste delen van afbeeldingen weg te knippen"
        },
        {
                  "en": "A technique that randomly masks out square regions of input during training to improve robustness",
                  "es": "Una técnica que enmascara aleatoriamente regiones cuadradas de entrada durante entrenamiento para mejorar robustez",
                  "de": "Eine Technik die zufällig quadratische Regionen der Eingabe während des Trainings maskiert um Robustheit zu verbessern",
                  "nl": "Een techniek die willekeurig vierkante regio's van invoer maskeert tijdens training om robuustheid te verbeteren"
        },
        {
                  "en": "A technique to reduce image size",
                  "es": "Una técnica para reducir tamaño de imagen",
                  "de": "Eine Technik um Bildgröße zu reduzieren",
                  "nl": "Een techniek om afbeeldingsgrootte te verminderen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cutout randomly masks square regions of the input image during training, forcing the network to focus on the entire object rather than specific discriminative parts. This improves robustness and generalization by preventing the model from relying too heavily on small distinctive features.",
                  "es": "Cutout enmascara aleatoriamente regiones cuadradas de la imagen de entrada durante el entrenamiento, forzando a la red a enfocarse en el objeto completo en lugar de partes discriminativas específicas. Esto mejora robustez y generalización previniendo que el modelo dependa demasiado de características distintivas pequeñas.",
                  "de": "Cutout maskiert zufällig quadratische Regionen des Eingabebildes während des Trainings, zwingt das Netzwerk sich auf das gesamte Objekt statt auf spezifische diskriminative Teile zu fokussieren. Dies verbessert Robustheit und Generalisierung indem verhindert wird dass das Modell zu stark auf kleine distinktive Merkmale angewiesen ist.",
                  "nl": "Cutout maskeert willekeurig vierkante regio's van de invoerafbeelding tijdens training, wat het netwerk dwingt te focussen op het gehele object in plaats van specifieke discriminatieve delen. Dit verbetert robuustheid en generalisatie door te voorkomen dat het model te sterk leunt op kleine onderscheidende kenmerken."
        }
      },
      {
        question: {
                  "en": "What is the AdamW optimizer?",
                  "es": "¿Qué es el optimizador AdamW?",
                  "de": "Was ist der AdamW-Optimierer?",
                  "nl": "Wat is de AdamW-optimizer?"
        },
        options: [
        {
                  "en": "A variant of Adam that decouples weight decay from the gradient-based update, implementing true L2 regularization",
                  "es": "Una variante de Adam que desacopla decadencia de peso de actualización basada en gradiente, implementando regularización L2 verdadera",
                  "de": "Eine Variante von Adam die Weight Decay vom gradientenbasierten Update entkoppelt, implementiert echte L2-Regularisierung",
                  "nl": "Een variant van Adam die weight decay ontkoppelt van de gradiënt-gebaseerde update, implementeert echte L2-regularisatie"
        },
        {
                  "en": "Adam with warm-up only",
                  "es": "Adam solo con calentamiento",
                  "de": "Adam nur mit Warm-up",
                  "nl": "Adam met alleen opwarming"
        },
        {
                  "en": "Adam optimizer with wider applicability",
                  "es": "Optimizador Adam con aplicabilidad más amplia",
                  "de": "Adam Optimierer mit breiterer Anwendbarkeit",
                  "nl": "Adam optimizer met bredere toepasbaarheid"
        },
        {
                  "en": "A weighted version of Adam",
                  "es": "Una versión ponderada de Adam",
                  "de": "Eine gewichtete Version von Adam",
                  "nl": "Een gewogen versie van Adam"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AdamW fixes a long-standing bug in Adam's implementation of weight decay. Standard Adam's L2 regularization interacts badly with adaptive learning rates. AdamW decouples weight decay from the gradient update, applying it directly to the weights, resulting in better generalization.",
                  "es": "AdamW corrige un error de larga data en la implementación de decadencia de peso de Adam. La regularización L2 estándar de Adam interactúa mal con tasas de aprendizaje adaptativas. AdamW desacopla decadencia de peso de la actualización de gradiente, aplicándola directamente a los pesos, resultando en mejor generalización.",
                  "de": "AdamW behebt einen langjährigen Fehler in Adams Implementierung von Weight Decay. Adams Standard-L2-Regularisierung interagiert schlecht mit adaptiven Lernraten. AdamW entkoppelt Weight Decay vom Gradienten-Update, wendet es direkt auf die Gewichte an, resultiert in besserer Generalisierung.",
                  "nl": "AdamW lost een langlopende bug op in Adam's implementatie van weight decay. Standaard Adam's L2-regularisatie werkt slecht samen met adaptieve leersnelheden. AdamW ontkoppelt weight decay van de gradiënt update, past het direct toe op de gewichten, wat resulteert in betere generalisatie."
        }
      },
      {
        question: {
                  "en": "What is stochastic weight averaging (SWA)?",
                  "es": "¿Qué es el promedio estocástico de pesos (SWA)?",
                  "de": "Was ist Stochastic Weight Averaging (SWA)?",
                  "nl": "Wat is stochastic weight averaging (SWA)?"
        },
        options: [
        {
                  "en": "A weighted sampling method for training data",
                  "es": "Un método de muestreo ponderado para datos de entrenamiento",
                  "de": "Eine gewichtete Stichprobenmethode für Trainingsdaten",
                  "nl": "Een gewogen sampling methode voor trainingsdata"
        },
        {
                  "en": "A method to randomly initialize weights",
                  "es": "Un método para inicializar pesos aleatoriamente",
                  "de": "Eine Methode um Gewichte zufällig zu initialisieren",
                  "nl": "Een methode om gewichten willekeurig te initialiseren"
        },
        {
                  "en": "A technique to average weights across multiple networks",
                  "es": "Una técnica para promediar pesos a través de múltiples redes",
                  "de": "Eine Technik um Gewichte über mehrere Netzwerke zu mitteln",
                  "nl": "Een techniek om gewichten over meerdere netwerken te middelen"
        },
        {
                  "en": "A technique that averages multiple points traversed by SGD with a cyclical or constant learning rate near the end of training",
                  "es": "Una técnica que promedia múltiples puntos recorridos por SGD con tasa de aprendizaje cíclica o constante cerca del final del entrenamiento",
                  "de": "Eine Technik die mehrere von SGD durchlaufene Punkte mit zyklischer oder konstanter Lernrate nahe Trainingsende mittelt",
                  "nl": "Een techniek die meerdere punten gemiddeld die door SGD doorlopen worden met cyclische of constante leersnelheid nabij einde van training"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "SWA improves generalization by averaging weights from different points along the SGD trajectory, typically using a cyclical or high constant learning rate in the final training phase. This explores multiple solutions and produces a model that generalizes better than any single checkpoint.",
                  "es": "SWA mejora generalización promediando pesos de diferentes puntos a lo largo de la trayectoria SGD, típicamente usando tasa de aprendizaje cíclica o constante alta en fase final de entrenamiento. Esto explora múltiples soluciones y produce modelo que generaliza mejor que cualquier punto de control único.",
                  "de": "SWA verbessert Generalisierung durch Mittelung von Gewichten von verschiedenen Punkten entlang der SGD-Trajektorie, typischerweise unter Verwendung einer zyklischen oder hohen konstanten Lernrate in der finalen Trainingsphase. Dies erkundet mehrere Lösungen und produziert ein Modell das besser generalisiert als jeder einzelne Checkpoint.",
                  "nl": "SWA verbetert generalisatie door gewichten te middelen van verschillende punten langs het SGD-traject, typisch met een cyclische of hoge constante leersnelheid in de finale trainingsfase. Dit verkent meerdere oplossingen en produceert een model dat beter generaliseert dan elk afzonderlijk checkpoint."
        }
      },
      {
        question: {
                  "en": "What is cosine annealing for learning rate scheduling?",
                  "es": "¿Qué es el recocido coseno para programación de tasa de aprendizaje?",
                  "de": "Was ist Kosinus-Annealing für Lernratenplanung?",
                  "nl": "Wat is cosinus annealing voor leersnelheidsplanning?"
        },
        options: [
        {
                  "en": "A trigonometric optimization algorithm",
                  "es": "Algoritmo de optimización trigonométrico",
                  "de": "Trigonometrischer Optimierungsalgorithmus",
                  "nl": "Trigonometrisch optimalisatie-algoritme"
        },
        {
                  "en": "A learning rate schedule that decreases following a cosine curve from initial to minimum value",
                  "es": "Programa de tasa de aprendizaje que disminuye siguiendo curva coseno desde valor inicial a mínimo",
                  "de": "Lernratenplan der entlang einer Kosinuskurve vom Anfangs- zum Minimalwert abnimmt",
                  "nl": "Leersnelheidsschema dat afneemt volgens een cosinuscurve van initiële naar minimale waarde"
        },
        {
                  "en": "Cosine activation function for learning",
                  "es": "Función de activación coseno para aprendizaje",
                  "de": "Kosinus-Aktivierungsfunktion für Lernen",
                  "nl": "Cosinus activatiefunctie voor leren"
        },
        {
                  "en": "A method to anneal neural networks at specific angles",
                  "es": "Método para recocer redes neuronales en ángulos específicos",
                  "de": "Methode zum Tempern neuronaler Netzwerke bei bestimmten Winkeln",
                  "nl": "Methode om neurale netwerken op specifieke hoeken te annealen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cosine annealing smoothly decreases the learning rate following a cosine function, providing a gentle decay that can help escape sharp minima. Often used with warm restarts (SGDR) where the learning rate periodically resets, allowing the optimizer to explore multiple local minima.",
                  "es": "El recocido coseno disminuye suavemente la tasa de aprendizaje siguiendo función coseno, proporcionando decaimiento suave que puede ayudar a escapar mínimos agudos. A menudo usado con reinicios cálidos (SGDR) donde tasa de aprendizaje se reinicia periódicamente, permitiendo al optimizador explorar múltiples mínimos locales.",
                  "de": "Kosinus-Annealing verringert die Lernrate sanft entlang einer Kosinusfunktion, bietet sanften Zerfall der helfen kann scharfe Minima zu entkommen. Oft verwendet mit warmen Neustarts (SGDR) wo Lernrate sich periodisch zurücksetzt, ermöglicht Optimierer mehrere lokale Minima zu erkunden.",
                  "nl": "Cosinus annealing verlaagt de leersnelheid geleidelijk volgens een cosinusfunctie, biedt zachte verval die kan helpen scherpe minima te ontsnappen. Vaak gebruikt met warme herstarts (SGDR) waar leersnelheid periodiek reset, waardoor optimizer meerdere lokale minima kan verkennen."
        }
      },
      {
        question: {
                  "en": "What is the difference between L1 and L2 regularization?",
                  "es": "¿Cuál es la diferencia entre regularización L1 y L2?",
                  "de": "Was ist der Unterschied zwischen L1- und L2-Regularisierung?",
                  "nl": "Wat is het verschil tussen L1 en L2 regularisatie?"
        },
        options: [
        {
                  "en": "L1 is for classification and L2 is for regression",
                  "es": "L1 es para clasificación y L2 es para regresión",
                  "de": "L1 ist für Klassifikation und L2 ist für Regression",
                  "nl": "L1 is voor classificatie en L2 is voor regressie"
        },
        {
                  "en": "L1 encourages sparsity by driving some weights to exactly zero, L2 shrinks all weights toward zero but rarely to exactly zero",
                  "es": "L1 fomenta dispersión llevando algunos pesos a exactamente cero, L2 reduce todos los pesos hacia cero pero rara vez exactamente a cero",
                  "de": "L1 fördert Sparsität indem einige Gewichte auf genau null getrieben werden, L2 schrumpft alle Gewichte Richtung null aber selten genau auf null",
                  "nl": "L1 moedigt sparsity aan door sommige gewichten naar exact nul te drijven, L2 krimpt alle gewichten richting nul maar zelden naar exact nul"
        },
        {
                  "en": "L1 is faster than L2",
                  "es": "L1 es más rápido que L2",
                  "de": "L1 ist schneller als L2",
                  "nl": "L1 is sneller dan L2"
        },
        {
                  "en": "L1 uses first layer only, L2 uses second layer",
                  "es": "L1 usa solo primera capa, L2 usa segunda capa",
                  "de": "L1 verwendet nur erste Schicht, L2 verwendet zweite Schicht",
                  "nl": "L1 gebruikt alleen eerste laag, L2 gebruikt tweede laag"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "L1 regularization (Lasso) adds the sum of absolute values of weights to the loss, promoting sparse solutions with many weights exactly at zero - useful for feature selection. L2 regularization (Ridge) adds the sum of squared weights, distributing penalty across all weights and preferring many small weights over few large ones.",
                  "es": "La regularización L1 (Lasso) añade suma de valores absolutos de pesos a pérdida, promoviendo soluciones dispersas con muchos pesos exactamente en cero - útil para selección de características. Regularización L2 (Ridge) añade suma de pesos al cuadrado, distribuyendo penalización entre todos pesos y prefiriendo muchos pesos pequeños sobre pocos grandes.",
                  "de": "L1-Regularisierung (Lasso) fügt Summe der Absolutwerte von Gewichten zum Verlust hinzu, fördert sparsame Lösungen mit vielen Gewichten genau bei null - nützlich für Feature-Auswahl. L2-Regularisierung (Ridge) fügt Summe quadrierter Gewichte hinzu, verteilt Strafe über alle Gewichte und bevorzugt viele kleine Gewichte über wenige große.",
                  "nl": "L1 regularisatie (Lasso) voegt som van absolute waarden van gewichten toe aan verlies, bevordert sparse oplossingen met veel gewichten exact op nul - nuttig voor feature selectie. L2 regularisatie (Ridge) voegt som van gekwadrateerde gewichten toe, verdeelt penalty over alle gewichten en prefereert veel kleine gewichten boven weinig grote."
        }
      },
      {
        question: {
                  "en": "What is label smoothing?",
                  "es": "¿Qué es el suavizado de etiquetas?",
                  "de": "Was ist Label Smoothing?",
                  "nl": "Wat is label smoothing?"
        },
        options: [
        {
                  "en": "A regularization technique that replaces hard 0/1 targets with soft targets like 0.1/0.9 to prevent overconfident predictions",
                  "es": "Técnica de regularización que reemplaza objetivos duros 0/1 con objetivos suaves como 0.1/0.9 para prevenir predicciones sobre-confiadas",
                  "de": "Regularisierungstechnik die harte 0/1-Ziele durch weiche Ziele wie 0.1/0.9 ersetzt um übervertraute Vorhersagen zu verhindern",
                  "nl": "Regularisatietechniek die harde 0/1 doelen vervangt met zachte doelen zoals 0.1/0.9 om overmoedige voorspellingen te voorkomen"
        },
        {
                  "en": "A method to remove label noise",
                  "es": "Método para eliminar ruido de etiquetas",
                  "de": "Methode zum Entfernen von Label-Rauschen",
                  "nl": "Methode om label ruis te verwijderen"
        },
        {
                  "en": "Averaging labels across multiple datasets",
                  "es": "Promediar etiquetas a través de múltiples conjuntos de datos",
                  "de": "Mittelung von Labels über mehrere Datensätze",
                  "nl": "Middelen van labels over meerdere datasets"
        },
        {
                  "en": "A data preprocessing technique to smooth labels",
                  "es": "Técnica de preprocesamiento de datos para suavizar etiquetas",
                  "de": "Datenvorverarbeitungstechnik zum Glätten von Labels",
                  "nl": "Data preprocessing techniek om labels glad te maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Label smoothing prevents the model from becoming too confident by using soft targets instead of hard one-hot labels. For example, instead of [0,1,0], use [0.05,0.9,0.05]. This improves calibration and can boost generalization by preventing the model from pushing logits to extreme values.",
                  "es": "El suavizado de etiquetas previene que modelo se vuelva demasiado confiado usando objetivos suaves en lugar de etiquetas one-hot duras. Por ejemplo, en lugar de [0,1,0], usar [0.05,0.9,0.05]. Esto mejora calibración y puede impulsar generalización previniendo que modelo empuje logits a valores extremos.",
                  "de": "Label Smoothing verhindert dass Modell zu vertraut wird durch Verwendung weicher Ziele statt harter One-Hot-Labels. Zum Beispiel statt [0,1,0] verwenden [0.05,0.9,0.05]. Dies verbessert Kalibrierung und kann Generalisierung fördern indem verhindert wird dass Modell Logits zu extremen Werten treibt.",
                  "nl": "Label smoothing voorkomt dat model te overmoedig wordt door zachte doelen te gebruiken in plaats van harde one-hot labels. Bijvoorbeeld, in plaats van [0,1,0], gebruik [0.05,0.9,0.05]. Dit verbetert kalibratie en kan generalisatie boosten door te voorkomen dat model logits naar extreme waarden duwt."
        }
      },
      {
        question: {
                  "en": "What is the difference between fine-tuning and transfer learning?",
                  "es": "¿Cuál es la diferencia entre ajuste fino y aprendizaje por transferencia?",
                  "de": "Was ist der Unterschied zwischen Fine-Tuning und Transfer Learning?",
                  "nl": "Wat is het verschil tussen fine-tuning en transfer learning?"
        },
        options: [
        {
                  "en": "Fine-tuning is the process of adapting a pretrained model, while transfer learning is the broader concept of reusing knowledge",
                  "es": "Ajuste fino es proceso de adaptar modelo preentrenado, mientras aprendizaje por transferencia es concepto más amplio de reutilizar conocimiento",
                  "de": "Fine-Tuning ist Prozess der Anpassung eines vortrainierten Modells, während Transfer Learning breiteres Konzept der Wiederverwendung von Wissen ist",
                  "nl": "Fine-tuning is proces van aanpassen van voorgetraind model, terwijl transfer learning breder concept is van hergebruiken van kennis"
        },
        {
                  "en": "They are exactly the same thing",
                  "es": "Son exactamente lo mismo",
                  "de": "Sie sind genau dasselbe",
                  "nl": "Ze zijn precies hetzelfde"
        },
        {
                  "en": "Fine-tuning is slower than transfer learning",
                  "es": "Ajuste fino es más lento que aprendizaje por transferencia",
                  "de": "Fine-Tuning ist langsamer als Transfer Learning",
                  "nl": "Fine-tuning is langzamer dan transfer learning"
        },
        {
                  "en": "Transfer learning only works for images, fine-tuning works for all data",
                  "es": "Aprendizaje por transferencia solo funciona para imágenes, ajuste fino funciona para todos datos",
                  "de": "Transfer Learning funktioniert nur für Bilder, Fine-Tuning funktioniert für alle Daten",
                  "nl": "Transfer learning werkt alleen voor afbeeldingen, fine-tuning werkt voor alle data"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Transfer learning is the general paradigm of leveraging knowledge from one task to improve performance on another. Fine-tuning is a specific transfer learning technique where you take a pretrained model and continue training it on your target task, typically with a lower learning rate and possibly freezing some layers.",
                  "es": "El aprendizaje por transferencia es paradigma general de aprovechar conocimiento de una tarea para mejorar rendimiento en otra. Ajuste fino es técnica específica de aprendizaje por transferencia donde tomas modelo preentrenado y continúas entrenándolo en tarea objetivo, típicamente con tasa de aprendizaje menor y posiblemente congelando algunas capas.",
                  "de": "Transfer Learning ist allgemeines Paradigma der Nutzung von Wissen von einer Aufgabe zur Verbesserung der Leistung bei einer anderen. Fine-Tuning ist spezifische Transfer-Learning-Technik wo Sie vortrainiertes Modell nehmen und Training auf Zielaufgabe fortsetzen, typischerweise mit niedrigerer Lernrate und möglicherweise Einfrieren einiger Schichten.",
                  "nl": "Transfer learning is algemeen paradigma van gebruik maken van kennis van één taak om prestaties op een andere te verbeteren. Fine-tuning is specifieke transfer learning techniek waarbij je een voorgetraind model neemt en training voortzet op je doeltaak, typisch met lagere leersnelheid en mogelijk bevriezen van sommige lagen."
        }
      },
      {
        question: {
                  "en": "What is curriculum learning?",
                  "es": "¿Qué es el aprendizaje curricular?",
                  "de": "Was ist Curriculum Learning?",
                  "nl": "Wat is curriculum learning?"
        },
        options: [
        {
                  "en": "A method to design the network architecture",
                  "es": "Método para diseñar arquitectura de red",
                  "de": "Methode zum Entwerfen der Netzwerkarchitektur",
                  "nl": "Methode om netwerkarchitectuur te ontwerpen"
        },
        {
                  "en": "Training models on school curriculum data",
                  "es": "Entrenar modelos en datos de currículo escolar",
                  "de": "Modelle auf Schullehrplandaten trainieren",
                  "nl": "Modellen trainen op schoolcurriculum data"
        },
        {
                  "en": "Training strategy that presents examples from easy to hard, mimicking how humans learn progressively",
                  "es": "Estrategia de entrenamiento que presenta ejemplos de fácil a difícil, imitando cómo aprenden humanos progresivamente",
                  "de": "Trainingsstrategie die Beispiele von einfach zu schwer präsentiert, ahmt nach wie Menschen progressiv lernen",
                  "nl": "Trainingsstrategie die voorbeelden presenteert van makkelijk naar moeilijk, bootst na hoe mensen progressief leren"
        },
        {
                  "en": "Learning multiple tasks simultaneously",
                  "es": "Aprender múltiples tareas simultáneamente",
                  "de": "Mehrere Aufgaben gleichzeitig lernen",
                  "nl": "Meerdere taken tegelijkertijd leren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Curriculum learning organizes training data in a meaningful order, starting with easier examples and gradually introducing more complex ones. This can speed up convergence and improve final performance by allowing the network to build on simpler patterns before tackling harder cases.",
                  "es": "El aprendizaje curricular organiza datos de entrenamiento en orden significativo, comenzando con ejemplos más fáciles e introduciendo gradualmente más complejos. Esto puede acelerar convergencia y mejorar rendimiento final permitiendo que red construya sobre patrones más simples antes de abordar casos más difíciles.",
                  "de": "Curriculum Learning organisiert Trainingsdaten in sinnvoller Reihenfolge, beginnt mit einfacheren Beispielen und führt allmählich komplexere ein. Dies kann Konvergenz beschleunigen und finale Leistung verbessern indem Netzwerk auf einfacheren Mustern aufbauen kann bevor schwierigere Fälle angegangen werden.",
                  "nl": "Curriculum learning organiseert trainingsdata in betekenisvolle volgorde, beginnend met makkelijkere voorbeelden en geleidelijk complexere introducerend. Dit kan convergentie versnellen en finale prestaties verbeteren door netwerk toe te staan op eenvoudigere patronen te bouwen voordat moeilijkere gevallen aangepakt worden."
        }
      },
      {
        question: {
                  "en": "What is knowledge distillation?",
                  "es": "¿Qué es la destilación de conocimiento?",
                  "de": "Was ist Knowledge Distillation?",
                  "nl": "Wat is knowledge distillation?"
        },
        options: [
        {
                  "en": "A data preprocessing technique",
                  "es": "Técnica de preprocesamiento de datos",
                  "de": "Datenvorverarbeitungstechnik",
                  "nl": "Data preprocessing techniek"
        },
        {
                  "en": "Removing redundant layers from networks",
                  "es": "Eliminar capas redundantes de redes",
                  "de": "Entfernen redundanter Schichten aus Netzwerken",
                  "nl": "Verwijderen van redundante lagen uit netwerken"
        },
        {
                  "en": "Extracting the most important features from data",
                  "es": "Extraer características más importantes de datos",
                  "de": "Extrahieren der wichtigsten Merkmale aus Daten",
                  "nl": "Extraheren van belangrijkste kenmerken uit data"
        },
        {
                  "en": "Training a smaller student model to mimic a larger teacher model's predictions and behavior",
                  "es": "Entrenar modelo estudiante más pequeño para imitar predicciones y comportamiento de modelo maestro más grande",
                  "de": "Training eines kleineren Schülermodells um Vorhersagen und Verhalten eines größeren Lehrermodells nachzuahmen",
                  "nl": "Trainen van kleiner studentmodel om voorspellingen en gedrag van groter leraarmodel na te bootsen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Knowledge distillation transfers knowledge from a large, complex teacher model to a smaller student model. The student learns not just from hard labels but from the teacher's soft predictions (logits), which contain rich information about similarities between classes. This produces compact models that approach teacher performance.",
                  "es": "La destilación de conocimiento transfiere conocimiento de modelo maestro grande y complejo a modelo estudiante más pequeño. Estudiante aprende no solo de etiquetas duras sino de predicciones suaves del maestro (logits), que contienen información rica sobre similitudes entre clases. Esto produce modelos compactos que se acercan al rendimiento del maestro.",
                  "de": "Knowledge Distillation überträgt Wissen von großem, komplexem Lehrermodell zu kleinerem Schülermodell. Schüler lernt nicht nur von harten Labels sondern von weichen Vorhersagen des Lehrers (Logits), die reichhaltige Information über Ähnlichkeiten zwischen Klassen enthalten. Dies produziert kompakte Modelle die Lehrerleistung erreichen.",
                  "nl": "Knowledge distillation draagt kennis over van groot, complex leraarmodel naar kleiner studentmodel. Student leert niet alleen van harde labels maar van zachte voorspellingen van leraar (logits), die rijke informatie bevatten over gelijkenissen tussen klassen. Dit produceert compacte modellen die leraar prestaties benaderen."
        }
      },
      {
        question: {
                  "en": "What is the dying neuron problem in ReLU networks?",
                  "es": "¿Qué es el problema de neurona moribunda en redes ReLU?",
                  "de": "Was ist das Problem des sterbenden Neurons in ReLU-Netzwerken?",
                  "nl": "Wat is het stervende neuron probleem in ReLU netwerken?"
        },
        options: [
        {
                  "en": "Neurons that converge too slowly",
                  "es": "Neuronas que convergen demasiado lentamente",
                  "de": "Neuronen die zu langsam konvergieren",
                  "nl": "Neuronen die te langzaam convergeren"
        },
        {
                  "en": "Neurons that always output zero because they only receive negative inputs, stop learning completely",
                  "es": "Neuronas que siempre producen cero porque solo reciben entradas negativas, dejan de aprender completamente",
                  "de": "Neuronen die immer Null ausgeben weil sie nur negative Eingaben erhalten, hören komplett auf zu lernen",
                  "nl": "Neuronen die altijd nul uitvoeren omdat ze alleen negatieve invoer ontvangen, stoppen volledig met leren"
        },
        {
                  "en": "Neurons with vanishing activations",
                  "es": "Neuronas con activaciones que desaparecen",
                  "de": "Neuronen mit verschwindenden Aktivierungen",
                  "nl": "Neuronen met verdwijnende activaties"
        },
        {
                  "en": "Neurons that use too much memory",
                  "es": "Neuronas que usan demasiada memoria",
                  "de": "Neuronen die zu viel Speicher verwenden",
                  "nl": "Neuronen die te veel geheugen gebruiken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "When ReLU neurons consistently receive negative weighted sums, they output zero. Since ReLU's gradient is also zero for negative inputs, these neurons never update and become permanently inactive or 'dead'. Solutions include Leaky ReLU, ELU, or careful weight initialization and learning rate tuning.",
                  "es": "Cuando neuronas ReLU reciben consistentemente sumas ponderadas negativas, producen cero. Como gradiente de ReLU también es cero para entradas negativas, estas neuronas nunca se actualizan y se vuelven permanentemente inactivas o 'muertas'. Soluciones incluyen Leaky ReLU, ELU o inicialización cuidadosa de pesos y ajuste de tasa de aprendizaje.",
                  "de": "Wenn ReLU-Neuronen konsistent negative gewichtete Summen erhalten, geben sie Null aus. Da ReLU-Gradient auch Null für negative Eingaben ist, aktualisieren diese Neuronen nie und werden dauerhaft inaktiv oder 'tot'. Lösungen umfassen Leaky ReLU, ELU oder sorgfältige Gewichtsinitialisierung und Lernraten-Tuning.",
                  "nl": "Wanneer ReLU neuronen consistent negatieve gewogen sommen ontvangen, voeren ze nul uit. Omdat ReLU's gradiënt ook nul is voor negatieve invoer, updaten deze neuronen nooit en worden permanent inactief of 'dood'. Oplossingen zijn Leaky ReLU, ELU of zorgvuldige gewichtinitialisatie en leersnelheid tuning."
        }
      },
      {
        question: {
                  "en": "What is progressive resizing in deep learning?",
                  "es": "¿Qué es el redimensionamiento progresivo en aprendizaje profundo?",
                  "de": "Was ist Progressive Resizing im Deep Learning?",
                  "nl": "Wat is progressive resizing in deep learning?"
        },
        options: [
        {
                  "en": "A data augmentation technique only",
                  "es": "Solo una técnica de aumento de datos",
                  "de": "Nur eine Datenaugmentierungstechnik",
                  "nl": "Alleen een data augmentatie techniek"
        },
        {
                  "en": "Gradually increasing the network size during training",
                  "es": "Aumentar gradualmente tamaño de red durante entrenamiento",
                  "de": "Allmähliches Erhöhen der Netzwerkgröße während Training",
                  "nl": "Geleidelijk verhogen van netwerkgrootte tijdens training"
        },
        {
                  "en": "Resizing layers progressively during inference",
                  "es": "Redimensionar capas progresivamente durante inferencia",
                  "de": "Schichten progressiv während Inferenz skalieren",
                  "nl": "Lagen progressief schalen tijdens inferentie"
        },
        {
                  "en": "Training technique that starts with small images and gradually increases resolution during training",
                  "es": "Técnica de entrenamiento que comienza con imágenes pequeñas y aumenta gradualmente resolución durante entrenamiento",
                  "de": "Trainingstechnik die mit kleinen Bildern beginnt und Auflösung während Training allmählich erhöht",
                  "nl": "Trainingstechniek die begint met kleine afbeeldingen en resolutie geleidelijk verhoogt tijdens training"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Progressive resizing trains models on smaller images initially, then gradually increases image size. This speeds up early training (smaller images = faster processing) while final training on full resolution captures fine details. Often combined with transfer learning for efficiency.",
                  "es": "El redimensionamiento progresivo entrena modelos en imágenes más pequeñas inicialmente, luego aumenta gradualmente tamaño de imagen. Esto acelera entrenamiento temprano (imágenes más pequeñas = procesamiento más rápido) mientras entrenamiento final en resolución completa captura detalles finos. A menudo combinado con aprendizaje por transferencia para eficiencia.",
                  "de": "Progressive Resizing trainiert Modelle zunächst auf kleineren Bildern, erhöht dann allmählich Bildgröße. Dies beschleunigt frühes Training (kleinere Bilder = schnellere Verarbeitung) während finales Training auf voller Auflösung feine Details erfasst. Oft kombiniert mit Transfer Learning für Effizienz.",
                  "nl": "Progressive resizing traint modellen op kleinere afbeeldingen aanvankelijk, verhoogt dan geleidelijk afbeeldingsgrootte. Dit versnelt vroege training (kleinere afbeeldingen = snellere verwerking) terwijl finale training op volledige resolutie fijne details vastlegt. Vaak gecombineerd met transfer learning voor efficiëntie."
        }
      },
      {
        question: {
                  "en": "What is snapshot ensembling?",
                  "es": "¿Qué es el ensamblado de instantáneas?",
                  "de": "Was ist Snapshot Ensembling?",
                  "nl": "Wat is snapshot ensembling?"
        },
        options: [
        {
                  "en": "Combining multiple independently trained models",
                  "es": "Combinar múltiples modelos entrenados independientemente",
                  "de": "Mehrere unabhängig trainierte Modelle kombinieren",
                  "nl": "Meerdere onafhankelijk getrainde modellen combineren"
        },
        {
                  "en": "A visualization technique for model states",
                  "es": "Técnica de visualización para estados de modelo",
                  "de": "Visualisierungstechnik für Modellzustände",
                  "nl": "Visualisatietechniek voor modeltoestanden"
        },
        {
                  "en": "Creating ensemble by saving model snapshots at different points during training with cyclical learning rates",
                  "es": "Crear ensemble guardando instantáneas de modelo en diferentes puntos durante entrenamiento con tasas de aprendizaje cíclicas",
                  "de": "Ensemble erstellen durch Speichern von Modell-Snapshots an verschiedenen Punkten während Training mit zyklischen Lernraten",
                  "nl": "Ensemble creëren door model snapshots op te slaan op verschillende punten tijdens training met cyclische leersnelheden"
        },
        {
                  "en": "Taking snapshots of training data",
                  "es": "Tomar instantáneas de datos de entrenamiento",
                  "de": "Snapshots von Trainingsdaten machen",
                  "nl": "Snapshots maken van trainingsdata"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Snapshot ensembling uses cyclical learning rate schedules to converge to multiple local minima during a single training run. Model weights are saved at the end of each cycle (when learning rate is low). These snapshots form an ensemble at minimal additional computational cost.",
                  "es": "El ensamblado de instantáneas usa programas de tasa de aprendizaje cíclicos para converger a múltiples mínimos locales durante una sola ejecución de entrenamiento. Pesos del modelo se guardan al final de cada ciclo (cuando tasa de aprendizaje es baja). Estas instantáneas forman ensemble con costo computacional adicional mínimo.",
                  "de": "Snapshot Ensembling verwendet zyklische Lernratenpläne um während eines einzelnen Trainingslaufs zu mehreren lokalen Minima zu konvergieren. Modellgewichte werden am Ende jedes Zyklus gespeichert (wenn Lernrate niedrig ist). Diese Snapshots bilden Ensemble bei minimalem zusätzlichem Rechenaufwand.",
                  "nl": "Snapshot ensembling gebruikt cyclische leersnelheidsschema's om te convergeren naar meerdere lokale minima tijdens één trainingsrun. Modelgewichten worden opgeslagen aan einde van elke cyclus (wanneer leersnelheid laag is). Deze snapshots vormen ensemble tegen minimale extra rekenkosten."
        }
      },
      {
        question: {
                  "en": "What is self-supervised learning?",
                  "es": "¿Qué es el aprendizaje auto-supervisado?",
                  "de": "Was ist selbstüberwachtes Lernen?",
                  "nl": "Wat is self-supervised learning?"
        },
        options: [
        {
                  "en": "Networks that train themselves without any data",
                  "es": "Redes que se entrenan solas sin datos",
                  "de": "Netzwerke die sich ohne Daten selbst trainieren",
                  "nl": "Netwerken die zichzelf trainen zonder data"
        },
        {
                  "en": "A form of reinforcement learning",
                  "es": "Forma de aprendizaje por refuerzo",
                  "de": "Form von Reinforcement Learning",
                  "nl": "Vorm van reinforcement learning"
        },
        {
                  "en": "Learning paradigm that creates supervision signals from the data itself without manual labels",
                  "es": "Paradigma de aprendizaje que crea señales de supervisión de datos mismos sin etiquetas manuales",
                  "de": "Lernparadigma das Überwachungssignale aus den Daten selbst ohne manuelle Labels erstellt",
                  "nl": "Leerparadigma dat supervisiesignalen creëert uit data zelf zonder handmatige labels"
        },
        {
                  "en": "Supervised learning with automatic labeling",
                  "es": "Aprendizaje supervisado con etiquetado automático",
                  "de": "Überwachtes Lernen mit automatischer Beschriftung",
                  "nl": "Supervised learning met automatische labeling"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Self-supervised learning generates labels automatically from the data structure itself. Examples include predicting masked words (BERT), colorizing grayscale images, solving jigsaw puzzles, or contrastive learning. This allows learning powerful representations from vast unlabeled data before fine-tuning on small labeled datasets.",
                  "es": "El aprendizaje auto-supervisado genera etiquetas automáticamente de estructura de datos misma. Ejemplos incluyen predecir palabras enmascaradas (BERT), colorear imágenes en escala de grises, resolver rompecabezas o aprendizaje contrastivo. Esto permite aprender representaciones poderosas de vastos datos sin etiquetar antes de ajuste fino en pequeños conjuntos etiquetados.",
                  "de": "Selbstüberwachtes Lernen generiert Labels automatisch aus der Datenstruktur selbst. Beispiele umfassen Vorhersage maskierter Wörter (BERT), Kolorieren von Graustufenbildern, Lösen von Puzzles oder kontrastives Lernen. Dies ermöglicht Lernen leistungsfähiger Repräsentationen aus riesigen unbeschrifteten Daten vor Fine-Tuning auf kleinen beschrifteten Datensätzen.",
                  "nl": "Self-supervised learning genereert labels automatisch uit de datastructuur zelf. Voorbeelden zijn voorspellen gemaskeerde woorden (BERT), inkleuren grijswaarden afbeeldingen, oplossen puzzels of contrastief leren. Dit maakt mogelijk krachtige representaties te leren van enorme ongelabelde data voor fine-tuning op kleine gelabelde datasets."
        }
      },
      {
        question: {
                  "en": "What is contrastive learning?",
                  "es": "¿Qué es el aprendizaje contrastivo?",
                  "de": "Was ist kontrastives Lernen?",
                  "nl": "Wat is contrastief leren?"
        },
        options: [
        {
                  "en": "Learning representations by pulling similar examples together and pushing dissimilar ones apart in embedding space",
                  "es": "Aprender representaciones acercando ejemplos similares y alejando diferentes en espacio de incrustación",
                  "de": "Lernen von Repräsentationen durch Zusammenziehen ähnlicher Beispiele und Auseinanderschieben unähnlicher im Einbettungsraum",
                  "nl": "Leren van representaties door vergelijkbare voorbeelden samen te trekken en ongelijke uit elkaar te duwen in embedding ruimte"
        },
        {
                  "en": "Learning by contrasting labeled and unlabeled data",
                  "es": "Aprender contrastando datos etiquetados y no etiquetados",
                  "de": "Lernen durch Kontrastieren beschrifteter und unbeschrifteter Daten",
                  "nl": "Leren door gelabelde en ongelabelde data te contrasteren"
        },
        {
                  "en": "A supervised learning technique only",
                  "es": "Solo técnica de aprendizaje supervisado",
                  "de": "Nur überwachte Lerntechnik",
                  "nl": "Alleen supervised learning techniek"
        },
        {
                  "en": "Comparing different neural network architectures",
                  "es": "Comparar diferentes arquitecturas de redes neuronales",
                  "de": "Vergleichen verschiedener neuronaler Netzwerkarchitekturen",
                  "nl": "Vergelijken van verschillende neurale netwerkarchitecturen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Contrastive learning learns representations by maximizing agreement between differently augmented views of the same data (positive pairs) while minimizing agreement with other samples (negative pairs). Methods like SimCLR, MoCo have achieved strong self-supervised learning results, rivaling supervised pretraining.",
                  "es": "El aprendizaje contrastivo aprende representaciones maximizando acuerdo entre vistas aumentadas diferentes de mismos datos (pares positivos) mientras minimiza acuerdo con otras muestras (pares negativos). Métodos como SimCLR, MoCo han logrado resultados fuertes de aprendizaje auto-supervisado, rivalizando con preentrenamiento supervisado.",
                  "de": "Kontrastives Lernen lernt Repräsentationen durch Maximierung der Übereinstimmung zwischen unterschiedlich augmentierten Ansichten derselben Daten (positive Paare) während Minimierung der Übereinstimmung mit anderen Proben (negative Paare). Methoden wie SimCLR, MoCo haben starke selbstüberwachte Lernergebnisse erzielt, rivalisieren mit überwachtem Pretraining.",
                  "nl": "Contrastief leren leert representaties door overeenstemming te maximaliseren tussen verschillend geaugmenteerde weergaven van dezelfde data (positieve paren) terwijl overeenstemming met andere samples geminimaliseerd wordt (negatieve paren). Methoden zoals SimCLR, MoCo hebben sterke self-supervised learning resultaten behaald, concurrerend met supervised pretraining."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  }
})();