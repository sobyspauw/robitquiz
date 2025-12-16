// Neural Networks Quiz - Level 5: Optimization and Regularization
(function() {
  const level5 = {
    name: {
      en: "Optimization and Regularization",
      es: "Optimización y Regularización",
      de: "Optimierung und Regularisierung",
      nl: "Optimalisatie en Regularisatie"
    },
    questions: [
      {
        question: {
          en: "What is the Adam optimizer in neural networks?",
          es: "¿Qué es el optimizador Adam en las redes neuronales?",
          de: "Was ist der Adam-Optimierer in neuronalen Netzwerken?",
          nl: "Wat is de Adam-optimizer in neurale netwerken?"
        },
        options: [
          { en: "An adaptive optimization algorithm that combines momentum and adaptive learning rates", es: "Un algoritmo de optimización adaptativa que combina momentum y tasas de aprendizaje adaptativas", de: "Ein adaptiver Optimierungsalgorithmus der Momentum und adaptive Lernraten kombiniert", nl: "Een adaptief optimalisatie-algoritme dat momentum en adaptieve leersnelheden combineert" },
          { en: "A simple gradient descent algorithm", es: "Un algoritmo simple de descenso de gradiente", de: "Ein einfacher Gradientenabstieg-Algorithmus", nl: "Een eenvoudig gradient descent algoritme" },
          { en: "A regularization technique", es: "Una técnica de regularización", de: "Eine Regularisierungstechnik", nl: "Een regularisatietechniek" },
          { en: "A type of activation function", es: "Un tipo de función de activación", de: "Eine Art von Aktivierungsfunktion", nl: "Een type activatiefunctie" }
        ],
        correct: 0,
        explanation: {
          en: "Adam (Adaptive Moment Estimation) combines the benefits of AdaGrad and RMSprop. It maintains exponentially decaying averages of past gradients and their squared values, providing adaptive learning rates for each parameter and momentum-like behavior.",
          es: "Adam (Adaptive Moment Estimation) combina los beneficios de AdaGrad y RMSprop. Mantiene promedios de decaimiento exponencial de gradientes pasados y sus valores al cuadrado, proporcionando tasas de aprendizaje adaptativas para cada parámetro y comportamiento similar al momentum.",
          de: "Adam (Adaptive Moment Estimation) kombiniert die Vorteile von AdaGrad und RMSprop. Es hält exponentiell abklingende Durchschnitte vergangener Gradienten und ihrer quadrierten Werte aufrecht, bietet adaptive Lernraten für jeden Parameter und momentum-ähnliches Verhalten.",
          nl: "Adam (Adaptive Moment Estimation) combineert de voordelen van AdaGrad en RMSprop. Het houdt exponentieel afnemende gemiddelden van eerdere gradiënten en hun gekwadrateerde waarden bij, wat adaptieve leersnelheden voor elke parameter en momentum-achtig gedrag biedt."
        }
      },
      {
        question: {
          en: "What is L1 regularization (Lasso)?",
          es: "¿Qué es la regularización L1 (Lasso)?",
          de: "Was ist L1-Regularisierung (Lasso)?",
          nl: "Wat is L1-regularisatie (Lasso)?"
        },
        options: [
          { en: "A penalty term that adds the sum of absolute values of weights to the loss function", es: "Un término de penalización que agrega la suma de valores absolutos de pesos a la función de pérdida", de: "Ein Strafterm der die Summe der absoluten Werte der Gewichte zur Verlustfunktion hinzufügt", nl: "Een strafterm die de som van absolute waarden van gewichten toevoegt aan de verliesfunctie" },
          { en: "A penalty term that adds the sum of squared weights to the loss function", es: "Un término de penalización que agrega la suma de pesos al cuadrado a la función de pérdida", de: "Ein Strafterm der die Summe der quadrierten Gewichte zur Verlustfunktion hinzufügt", nl: "Een strafterm die de som van gekwadrateerde gewichten toevoegt aan de verliesfunctie" },
          { en: "A method to increase learning rate", es: "Un método para aumentar la tasa de aprendizaje", de: "Eine Methode um die Lernrate zu erhöhen", nl: "Een methode om de leersnelheid te verhogen" },
          { en: "A technique to add more layers", es: "Una técnica para agregar más capas", de: "Eine Technik um mehr Schichten hinzuzufügen", nl: "Een techniek om meer lagen toe te voegen" }
        ],
        correct: 0,
        explanation: {
          en: "L1 regularization adds a penalty proportional to the sum of absolute values of weights. This encourages sparsity by driving some weights to exactly zero, effectively performing feature selection and reducing model complexity.",
          es: "La regularización L1 agrega una penalización proporcional a la suma de valores absolutos de pesos. Esto fomenta la dispersión llevando algunos pesos exactamente a cero, realizando efectivamente selección de características y reduciendo la complejidad del modelo.",
          de: "L1-Regularisierung fügt eine Strafe proportional zur Summe der absoluten Werte der Gewichte hinzu. Dies fördert Sparsität indem einige Gewichte auf genau null getrieben werden, was effektiv Merkmalsauswahl durchführt und Modellkomplexität reduziert.",
          nl: "L1-regularisatie voegt een straf toe die evenredig is aan de som van absolute waarden van gewichten. Dit bevordert sparsheid door enkele gewichten naar precies nul te drijven, wat effectief kenmerkenselectie uitvoert en modelcomplexiteit vermindert."
        }
      },
      {
        question: {
          en: "What is L2 regularization (Ridge)?",
          es: "¿Qué es la regularización L2 (Ridge)?",
          de: "Was ist L2-Regularisierung (Ridge)?",
          nl: "Wat is L2-regularisatie (Ridge)?"
        },
        options: [
          { en: "A penalty term that adds the sum of squared weights to the loss function", es: "Un término de penalización que agrega la suma de pesos al cuadrado a la función de pérdida", de: "Ein Strafterm der die Summe der quadrierten Gewichte zur Verlustfunktion hinzufügt", nl: "Een strafterm die de som van gekwadrateerde gewichten toevoegt aan de verliesfunctie" },
          { en: "A penalty term that adds the sum of absolute values of weights to the loss function", es: "Un término de penalización que agrega la suma de valores absolutos de pesos a la función de pérdida", de: "Ein Strafterm der die Summe der absoluten Werte der Gewichte zur Verlustfunktion hinzufügt", nl: "Een strafterm die de som van absolute waarden van gewichten toevoegt aan de verliesfunctie" },
          { en: "A method to double the learning rate", es: "Un método para duplicar la tasa de aprendizaje", de: "Eine Methode um die Lernrate zu verdoppeln", nl: "Een methode om de leersnelheid te verdubbelen" },
          { en: "A technique to reduce network depth", es: "Una técnica para reducir la profundidad de la red", de: "Eine Technik um die Netzwerktiefe zu reduzieren", nl: "Een techniek om de netwerkdiepte te verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "L2 regularization adds a penalty proportional to the sum of squared weights. This encourages weights to be small but doesn't force them to zero, leading to smoother models that are less likely to overfit to training data.",
          es: "La regularización L2 agrega una penalización proporcional a la suma de pesos al cuadrado. Esto fomenta que los pesos sean pequeños pero no los fuerza a cero, llevando a modelos más suaves que son menos propensos al sobreajuste en datos de entrenamiento.",
          de: "L2-Regularisierung fügt eine Strafe proportional zur Summe der quadrierten Gewichte hinzu. Dies ermutigt Gewichte klein zu sein aber zwingt sie nicht auf null, was zu glatteren Modellen führt die weniger wahrscheinlich an Trainingsdaten überanpassen.",
          nl: "L2-regularisatie voegt een straf toe die evenredig is aan de som van gekwadrateerde gewichten. Dit stimuleert gewichten klein te zijn maar dwingt ze niet naar nul, wat leidt tot gladdere modellen die minder waarschijnlijk overfitten op trainingsdata."
        }
      },
      {
        question: {
          en: "What is momentum in gradient descent?",
          es: "¿Qué es el momentum en el descenso de gradiente?",
          de: "Was ist Momentum beim Gradientenabstieg?",
          nl: "Wat is momentum in gradient descent?"
        },
        options: [
          { en: "A technique that adds a fraction of the previous update to the current update to accelerate convergence", es: "Una técnica que agrega una fracción de la actualización anterior a la actualización actual para acelerar la convergencia", de: "Eine Technik die einen Bruchteil der vorherigen Aktualisierung zur aktuellen Aktualisierung hinzufügt um Konvergenz zu beschleunigen", nl: "Een techniek die een fractie van de vorige update toevoegt aan de huidige update om convergentie te versnellen" },
          { en: "The speed at which gradients are calculated", es: "La velocidad a la que se calculan los gradientes", de: "Die Geschwindigkeit mit der Gradienten berechnet werden", nl: "De snelheid waarmee gradiënten worden berekend" },
          { en: "The force applied to neural networks", es: "La fuerza aplicada a las redes neuronales", de: "Die Kraft die auf neuronale Netzwerke angewendet wird", nl: "De kracht toegepast op neurale netwerken" },
          { en: "A method to store previous gradients", es: "Un método para almacenar gradientes anteriores", de: "Eine Methode um vorherige Gradienten zu speichern", nl: "Een methode om vorige gradiënten op te slaan" }
        ],
        correct: 0,
        explanation: {
          en: "Momentum helps gradient descent navigate ravines and accelerate in consistent directions while dampening oscillations. It accumulates a moving average of gradients and uses this accumulated velocity to update parameters, often leading to faster convergence.",
          es: "El momentum ayuda al descenso de gradiente a navegar barrancos y acelerar en direcciones consistentes mientras amortigua oscilaciones. Acumula un promedio móvil de gradientes y usa esta velocidad acumulada para actualizar parámetros, a menudo llevando a convergencia más rápida.",
          de: "Momentum hilft dem Gradientenabstieg Schluchten zu navigieren und in konsistenten Richtungen zu beschleunigen während Oszillationen gedämpft werden. Es akkumuliert einen gleitenden Durchschnitt von Gradienten und verwendet diese akkumulierte Geschwindigkeit um Parameter zu aktualisieren, was oft zu schnellerer Konvergenz führt.",
          nl: "Momentum helpt gradient descent ravijnen te navigeren en te versnellen in consistente richtingen terwijl oscillaties worden gedempt. Het accumuleert een voortschrijdend gemiddelde van gradiënten en gebruikt deze geaccumuleerde snelheid om parameters bij te werken, wat vaak leidt tot snellere convergentie."
        }
      },
      {
        question: {
          en: "What is RMSprop optimizer?",
          es: "¿Qué es el optimizador RMSprop?",
          de: "Was ist der RMSprop-Optimierer?",
          nl: "Wat is de RMSprop-optimizer?"
        },
        options: [
          { en: "An adaptive learning rate algorithm that divides the learning rate by an exponentially decaying average of squared gradients", es: "Algoritmo tasa aprendizaje adaptativo que divide tasa aprendizaje por promedio decaimiento exponencial gradientes al cuadrado", de: "Ein adaptiver Lernraten-Algorithmus der die Lernrate durch einen exponentiell abklingenden Durchschnitt quadrierter Gradienten teilt", nl: "Een adaptief leersnelheidsalgoritme dat de leersnelheid deelt door een exponentieel afnemend gemiddelde van gekwadrateerde gradiënten" },
          { en: "A root mean square calculation for neural networks", es: "Un cálculo de raíz cuadrada media para redes neuronales", de: "Eine Quadratmittel-Berechnung für neuronale Netzwerke", nl: "Een wortel gemiddelde kwadraat berekening voor neurale netwerken" },
          { en: "A regularization technique", es: "Una técnica de regularización", de: "Eine Regularisierungstechnik", nl: "Een regularisatietechniek" },
          { en: "A method to propagate errors", es: "Un método para propagar errores", de: "Eine Methode um Fehler zu propagieren", nl: "Een methode om fouten te propageren" }
        ],
        correct: 0,
        explanation: {
          en: "RMSprop (Root Mean Square Propagation) addresses the diminishing learning rates in AdaGrad by using an exponentially decaying average of squared gradients instead of all past gradients. This allows the algorithm to continue learning even after many iterations.",
          es: "RMSprop (Root Mean Square Propagation) aborda las tasas de aprendizaje decrecientes en AdaGrad usando un promedio de decaimiento exponencial de gradientes al cuadrado en lugar de todos los gradientes pasados. Esto permite que el algoritmo continúe aprendiendo incluso después de muchas iteraciones.",
          de: "RMSprop (Root Mean Square Propagation) adressiert die abnehmenden Lernraten in AdaGrad durch Verwendung eines exponentiell abklingenden Durchschnitts quadrierter Gradienten statt aller vergangenen Gradienten. Dies ermöglicht dem Algorithmus weiter zu lernen auch nach vielen Iterationen.",
          nl: "RMSprop (Root Mean Square Propagation) pakt de afnemende leersnelheden in AdaGrad aan door een exponentieel afnemend gemiddelde van gekwadrateerde gradiënten te gebruiken in plaats van alle eerdere gradiënten. Dit stelt het algoritme in staat door te blijven leren zelfs na vele iteraties."
        }
      },
      {
        question: {
          en: "What is batch normalization?",
          es: "¿Qué es la normalización por lotes?",
          de: "Was ist Batch Normalization?",
          nl: "Wat is batch normalisatie?"
        },
        options: [
          { en: "A technique that normalizes inputs to each layer to have zero mean and unit variance within each mini-batch", es: "Una técnica que normaliza las entradas a cada capa para tener media cero y varianza unitaria dentro de cada mini-lote", de: "Eine Technik die Eingaben zu jeder Schicht normalisiert um null Mittelwert und Einheitsvarianz innerhalb jedes Mini-Batches zu haben", nl: "Een techniek die invoer naar elke laag normaliseert om nul gemiddelde en eenheidvariantie te hebben binnen elke mini-batch" },
          { en: "A method to organize training batches", es: "Un método para organizar lotes de entrenamiento", de: "Eine Methode um Trainingsbatches zu organisieren", nl: "Een methode om trainingsbatches te organiseren" },
          { en: "A technique to reduce batch size", es: "Una técnica para reducir el tamaño del lote", de: "Eine Technik um die Batch-Größe zu reduzieren", nl: "Een techniek om de batchgrootte te verminderen" },
          { en: "A way to normalize the final output", es: "Una forma de normalizar la salida final", de: "Eine Art die finale Ausgabe zu normalisieren", nl: "Een manier om de finale uitvoer te normaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Batch normalization normalizes the inputs to each layer by subtracting the batch mean and dividing by the batch standard deviation. This reduces internal covariate shift, allows higher learning rates, and acts as a form of regularization.",
          es: "La normalización por lotes normaliza las entradas a cada capa restando la media del lote y dividiendo por la desviación estándar del lote. Esto reduce el cambio de covariante interno, permite tasas de aprendizaje más altas y actúa como una forma de regularización.",
          de: "Batch Normalization normalisiert die Eingaben zu jeder Schicht durch Subtraktion des Batch-Mittelwerts und Division durch die Batch-Standardabweichung. Dies reduziert interne Kovariatenverschiebung, ermöglicht höhere Lernraten und wirkt als Form der Regularisierung.",
          nl: "Batch normalisatie normaliseert de invoer naar elke laag door het batch-gemiddelde af te trekken en te delen door de batch-standaarddeviatie. Dit vermindert interne covariaatshift, staat hogere leersnelheden toe en werkt als een vorm van regularisatie."
        }
      },
      {
        question: {
          en: "What is layer normalization?",
          es: "¿Qué es la normalización de capa?",
          de: "Was ist Layer Normalization?",
          nl: "Wat is layer normalisatie?"
        },
        options: [
          { en: "A normalization technique that normalizes across all features within a single example for each layer", es: "Una técnica de normalización que normaliza a través de todas las características dentro de un solo ejemplo para cada capa", de: "Eine Normalisierungstechnik die über alle Merkmale innerhalb eines einzelnen Beispiels für jede Schicht normalisiert", nl: "Een normalisatietechniek die normaliseert over alle kenmerken binnen een enkel voorbeeld voor elke laag" },
          { en: "A method to normalize the number of layers", es: "Un método para normalizar el número de capas", de: "Eine Methode um die Anzahl der Schichten zu normalisieren", nl: "Een methode om het aantal lagen te normaliseren" },
          { en: "A technique to make all layers the same size", es: "Una técnica para hacer que todas las capas tengan el mismo tamaño", de: "Eine Technik um alle Schichten gleich groß zu machen", nl: "Een techniek om alle lagen dezelfde grootte te geven" },
          { en: "A way to organize layers hierarchically", es: "Una forma de organizar capas jerárquicamente", de: "Eine Art Schichten hierarchisch zu organisieren", nl: "Een manier om lagen hiërarchisch te organiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Layer normalization normalizes across the features (neurons) within each layer for each training example independently. Unlike batch normalization, it doesn't depend on batch size, making it suitable for recurrent networks and small batch scenarios.",
          es: "La normalización de capa normaliza a través de las características (neuronas) dentro de cada capa para cada ejemplo de entrenamiento independientemente. A diferencia de la normalización por lotes, no depende del tamaño del lote, haciéndola adecuada para redes recurrentes y escenarios de lotes pequeños.",
          de: "Layer Normalization normalisiert über die Merkmale (Neuronen) innerhalb jeder Schicht für jedes Trainingsbeispiel unabhängig. Im Gegensatz zu Batch Normalization hängt sie nicht von der Batch-Größe ab, was sie für rekurrente Netzwerke und kleine Batch-Szenarien geeignet macht.",
          nl: "Layer normalisatie normaliseert over de kenmerken (neuronen) binnen elke laag voor elk trainingsvoorbeeld onafhankelijk. In tegenstelling tot batch normalisatie hangt het niet af van batchgrootte, waardoor het geschikt is voor recurrente netwerken en kleine batch-scenario's."
        }
      },
      {
        question: {
          en: "What is weight decay?",
          es: "¿Qué es la decadencia de pesos?",
          de: "Was ist Weight Decay?",
          nl: "Wat is weight decay?"
        },
        options: [
          { en: "A regularization technique that gradually reduces weights by multiplying them by a factor slightly less than 1", es: "Una técnica de regularización que reduce gradualmente los pesos multiplicándolos por un factor ligeramente menor que 1", de: "Eine Regularisierungstechnik die Gewichte allmählich reduziert indem sie mit einem Faktor etwas kleiner als 1 multipliziert werden", nl: "Een regularisatietechniek die geleidelijk gewichten vermindert door ze te vermenigvuldigen met een factor iets minder dan 1" },
          { en: "The natural degradation of neural networks over time", es: "La degradación natural de las redes neuronales a lo largo del tiempo", de: "Die natürliche Degradation neuronaler Netzwerke über die Zeit", nl: "De natuurlijke degradatie van neurale netwerken over tijd" },
          { en: "A method to remove unnecessary weights", es: "Un método para eliminar pesos innecesarios", de: "Eine Methode um unnötige Gewichte zu entfernen", nl: "Een methode om onnodige gewichten te verwijderen" },
          { en: "A technique to increase weight values", es: "Una técnica para aumentar valores de peso", de: "Eine Technik um Gewichtswerte zu erhöhen", nl: "Een techniek om gewichtwaarden te verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Weight decay is a regularization technique that prevents weights from growing too large by adding a small penalty proportional to the size of weights. It's mathematically equivalent to L2 regularization and helps prevent overfitting by keeping the model simple.",
          es: "La decadencia de pesos es una técnica de regularización que previene que los pesos crezcan demasiado agregando una pequeña penalización proporcional al tamaño de los pesos. Es matemáticamente equivalente a la regularización L2 y ayuda a prevenir el sobreajuste manteniendo el modelo simple.",
          de: "Weight Decay ist eine Regularisierungstechnik die verhindert dass Gewichte zu groß werden durch Hinzufügen einer kleinen Strafe proportional zur Größe der Gewichte. Es ist mathematisch äquivalent zu L2-Regularisierung und hilft Überanpassung zu verhindern indem das Modell einfach gehalten wird.",
          nl: "Weight decay is een regularisatietechniek die voorkomt dat gewichten te groot worden door een kleine straf toe te voegen die evenredig is aan de grootte van gewichten. Het is wiskundig equivalent aan L2-regularisatie en helpt overfitting te voorkomen door het model eenvoudig te houden."
        }
      },
      {
        question: {
          en: "What is AdaGrad optimizer?",
          es: "¿Qué es el optimizador AdaGrad?",
          de: "Was ist der AdaGrad-Optimierer?",
          nl: "Wat is de AdaGrad-optimizer?"
        },
        options: [
          { en: "An adaptive learning rate algorithm that adjusts learning rates based on historical gradients for each parameter", es: "Un algoritmo de tasa de aprendizaje adaptativa que ajusta las tasas de aprendizaje basándose en gradientes históricos para cada parámetro", de: "Ein adaptiver Lernraten-Algorithmus der Lernraten basierend auf historischen Gradienten für jeden Parameter anpasst", nl: "Een adaptief leersnelheidsalgoritme dat leersnelheden aanpast gebaseerd op historische gradiënten voor elke parameter" },
          { en: "A gradient calculation method", es: "Un método de cálculo de gradiente", de: "Eine Gradientenberechnungsmethode", nl: "Een gradiëntberekeningsmethod" },
          { en: "A way to add gradients together", es: "Una forma de sumar gradientes", de: "Eine Art Gradienten zusammenzufügen", nl: "Een manier om gradiënten samen te voegen" },
          { en: "A technique to graduate neural networks", es: "Una técnica para graduar redes neuronales", de: "Eine Technik um neuronale Netzwerke zu graduieren", nl: "Een techniek om neurale netwerken af te studeren" }
        ],
        correct: 0,
        explanation: {
          en: "AdaGrad (Adaptive Gradient) adapts the learning rate for each parameter individually based on the historical sum of squared gradients. Parameters with large gradients get smaller learning rates, while parameters with small gradients get larger learning rates.",
          es: "AdaGrad (Adaptive Gradient) adapta la tasa de aprendizaje para cada parámetro individualmente basándose en la suma histórica de gradientes al cuadrado. Los parámetros con gradientes grandes obtienen tasas de aprendizaje más pequeñas, mientras que los parámetros con gradientes pequeños obtienen tasas de aprendizaje más grandes.",
          de: "AdaGrad (Adaptive Gradient) passt die Lernrate für jeden Parameter individuell basierend auf der historischen Summe quadrierter Gradienten an. Parameter mit großen Gradienten erhalten kleinere Lernraten, während Parameter mit kleinen Gradienten größere Lernraten erhalten.",
          nl: "AdaGrad (Adaptive Gradient) past de leersnelheid voor elke parameter individueel aan gebaseerd op de historische som van gekwadrateerde gradiënten. Parameters met grote gradiënten krijgen kleinere leersnelheden, terwijl parameters met kleine gradiënten grotere leersnelheden krijgen."
        }
      },
      {
        question: {
          en: "What is learning rate scheduling?",
          es: "¿Qué es la programación de la tasa de aprendizaje?",
          de: "Was ist Learning Rate Scheduling?",
          nl: "Wat is leersnelheid planning?"
        },
        options: [
          { en: "A technique to systematically change the learning rate during training to improve convergence", es: "Una técnica para cambiar sistemáticamente la tasa de aprendizaje durante el entrenamiento para mejorar la convergencia", de: "Eine Technik um die Lernrate während des Trainings systematisch zu ändern um Konvergenz zu verbessern", nl: "Een techniek om de leersnelheid systematisch te veranderen tijdens training om convergentie te verbeteren" },
          { en: "A way to schedule training sessions", es: "Una forma de programar sesiones de entrenamiento", de: "Eine Art Trainingssitzungen zu planen", nl: "Een manier om trainingssessies in te plannen" },
          { en: "A method to organize learning materials", es: "Un método para organizar materiales de aprendizaje", de: "Eine Methode um Lernmaterialien zu organisieren", nl: "Een methode om leermateriaal te organiseren" },
          { en: "A technique to speed up learning", es: "Una técnica para acelerar el aprendizaje", de: "Eine Technik um das Lernen zu beschleunigen", nl: "Een techniek om het leren te versnellen" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate scheduling involves changing the learning rate during training according to a predefined schedule. Common strategies include step decay, exponential decay, and cosine annealing. This helps fine-tune the model in later stages of training.",
          es: "La programación de la tasa de aprendizaje implica cambiar la tasa de aprendizaje durante el entrenamiento según un horario predefinido. Las estrategias comunes incluyen decaimiento por pasos, decaimiento exponencial y enfriamiento coseno. Esto ayuda a afinar el modelo en etapas posteriores del entrenamiento.",
          de: "Learning Rate Scheduling beinhaltet das Ändern der Lernrate während des Trainings nach einem vordefinierten Schema. Häufige Strategien umfassen Schritt-Zerfall, exponentiellen Zerfall und Kosinus-Annealing. Dies hilft das Modell in späteren Trainingsphasen fein abzustimmen.",
          nl: "Leersnelheid planning houdt in dat de leersnelheid tijdens training wordt veranderd volgens een voorgedefinieerd schema. Veelvoorkomende strategieën zijn step decay, exponentiële decay en cosinus annealing. Dit helpt het model fijn af te stellen in latere stadia van training."
        }
      },
      {
        question: {
          en: "What is elastic net regularization?",
          es: "¿Qué es la regularización de red elástica?",
          de: "Was ist Elastic Net Regularisierung?",
          nl: "Wat is elastic net regularisatie?"
        },
        options: [
          { en: "A combination of L1 and L2 regularization that provides both sparsity and grouping effects", es: "Una combinación de regularización L1 y L2 que proporciona efectos tanto de dispersión como de agrupamiento", de: "Eine Kombination aus L1- und L2-Regularisierung die sowohl Sparsität als auch Gruppierungseffekte bietet", nl: "Een combinatie van L1 en L2 regularisatie die zowel sparsheid als groeperingseffecten biedt" },
          { en: "A method to make networks more elastic", es: "Un método para hacer las redes más elásticas", de: "Eine Methode um Netzwerke elastischer zu machen", nl: "Een methode om netwerken elastischer te maken" },
          { en: "A technique to stretch network connections", es: "Una técnica para estirar conexiones de red", de: "Eine Technik um Netzwerkverbindungen zu dehnen", nl: "Een techniek om netwerkverbindingen uit te rekken" },
          { en: "A regularization method for elastic materials", es: "Un método de regularización para materiales elásticos", de: "Eine Regularisierungsmethode für elastische Materialien", nl: "Een regularisatiemethode voor elastische materialen" }
        ],
        correct: 0,
        explanation: {
          en: "Elastic net combines the benefits of both L1 (Lasso) and L2 (Ridge) regularization. It can select groups of correlated features together (like Ridge) while also performing feature selection by setting some coefficients to zero (like Lasso).",
          es: "La red elástica combina los beneficios de la regularización L1 (Lasso) y L2 (Ridge). Puede seleccionar grupos de características correlacionadas juntas (como Ridge) mientras también realiza selección de características estableciendo algunos coeficientes en cero (como Lasso).",
          de: "Elastic Net kombiniert die Vorteile sowohl der L1- (Lasso) als auch der L2- (Ridge) Regularisierung. Es kann Gruppen korrelierter Merkmale zusammen auswählen (wie Ridge) während es auch Merkmalsauswahl durchführt indem einige Koeffizienten auf null gesetzt werden (wie Lasso).",
          nl: "Elastic net combineert de voordelen van zowel L1 (Lasso) als L2 (Ridge) regularisatie. Het kan groepen gecorreleerde kenmerken samen selecteren (zoals Ridge) terwijl het ook kenmerkenselectie uitvoert door enkele coëfficiënten op nul te zetten (zoals Lasso)."
        }
      },
      {
        question: {
          en: "What is the learning rate warm-up technique?",
          es: "¿Qué es la técnica de calentamiento de la tasa de aprendizaje?",
          de: "Was ist die Learning Rate Warm-up Technik?",
          nl: "Wat is de leersnelheid opwarming techniek?"
        },
        options: [
          { en: "A technique that gradually increases the learning rate from a small value to the target value at the beginning of training", es: "Una técnica que aumenta gradualmente la tasa de aprendizaje desde un valor pequeño hasta el valor objetivo al comienzo del entrenamiento", de: "Eine Technik die die Lernrate allmählich von einem kleinen Wert auf den Zielwert zu Beginn des Trainings erhöht", nl: "Techniek die geleidelijk leersnelheid verhoogt van kleine waarde naar doelwaarde aan begin van training" },
          { en: "A method to warm up the computer before training", es: "Un método para calentar la computadora antes del entrenamiento", de: "Eine Methode um den Computer vor dem Training aufzuwärmen", nl: "Een methode om de computer op te warmen voor training" },
          { en: "A technique to prepare data for learning", es: "Una técnica para preparar datos para el aprendizaje", de: "Eine Technik um Daten für das Lernen vorzubereiten", nl: "Een techniek om data voor te bereiden voor leren" },
          { en: "A way to heat neural networks", es: "Una forma de calentar redes neuronales", de: "Eine Art neuronale Netzwerke zu erwärmen", nl: "Een manier om neurale netwerken te verwarmen" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate warm-up starts training with a very small learning rate and gradually increases it to the desired value over a few epochs. This helps stabilize training, especially for large batch sizes or when using adaptive optimizers like Adam.",
          es: "El calentamiento de la tasa de aprendizaje comienza el entrenamiento con una tasa de aprendizaje muy pequeña y la aumenta gradualmente hasta el valor deseado durante unas pocas épocas. Esto ayuda a estabilizar el entrenamiento, especialmente para tamaños de lote grandes o cuando se usan optimizadores adaptativos como Adam.",
          de: "Learning Rate Warm-up beginnt das Training mit einer sehr kleinen Lernrate und erhöht sie allmählich auf den gewünschten Wert über wenige Epochen. Dies hilft das Training zu stabilisieren, besonders für große Batch-Größen oder bei Verwendung adaptiver Optimierer wie Adam.",
          nl: "Leersnelheid opwarming begint training met een zeer kleine leersnelheid en verhoogt deze geleidelijk naar de gewenste waarde over enkele epochs. Dit helpt training te stabiliseren, vooral voor grote batchgroottes of bij gebruik van adaptieve optimizers zoals Adam."
        }
      },
      {
        question: {
          en: "What is gradient accumulation?",
          es: "¿Qué es la acumulación de gradientes?",
          de: "Was ist Gradientenakkumulation?",
          nl: "Wat is gradiënt accumulatie?"
        },
        options: [
          { en: "A technique that accumulates gradients over multiple forward passes before updating weights, simulating larger batch sizes", es: "Una técnica que acumula gradientes sobre múltiples pases hacia adelante antes de actualizar pesos, simulando tamaños de lote más grandes", de: "Eine Technik die Gradienten über mehrere Vorwärtsdurchgänge akkumuliert bevor Gewichte aktualisiert werden, simuliert größere Batch-Größen", nl: "Een techniek die gradiënten accumuleert over meerdere voorwaartse doorvragen voordat gewichten worden bijgewerkt, wat grotere batchgroottes simuleert" },
          { en: "The natural build-up of gradients over time", es: "La acumulación natural de gradientes a lo largo del tiempo", de: "Die natürliche Ansammlung von Gradienten über die Zeit", nl: "De natuurlijke ophoping van gradiënten over tijd" },
          { en: "A method to store all gradients permanently", es: "Un método para almacenar todos los gradientes permanentemente", de: "Eine Methode um alle Gradienten dauerhaft zu speichern", nl: "Een methode om alle gradiënten permanent op te slaan" },
          { en: "A technique to prevent gradient calculation", es: "Una técnica para prevenir el cálculo de gradientes", de: "Eine Technik um Gradientenberechnung zu verhindern", nl: "Een techniek om gradiëntberekening te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient accumulation allows training with effectively larger batch sizes when memory is limited. Instead of updating weights after each mini-batch, gradients are accumulated over several mini-batches before performing the weight update, achieving similar effects to larger batches.",
          es: "La acumulación de gradientes permite entrenar con tamaños de lote efectivamente más grandes cuando la memoria es limitada. En lugar de actualizar pesos después de cada mini-lote, los gradientes se acumulan sobre varios mini-lotes antes de realizar la actualización de pesos, logrando efectos similares a lotes más grandes.",
          de: "Gradientenakkumulation ermöglicht das Training mit effektiv größeren Batch-Größen wenn Speicher begrenzt ist. Statt Gewichte nach jedem Mini-Batch zu aktualisieren, werden Gradienten über mehrere Mini-Batches akkumuliert bevor die Gewichtsaktualisierung durchgeführt wird, wodurch ähnliche Effekte wie größere Batches erzielt werden.",
          nl: "Gradiënt accumulatie maakt training mogelijk met effectief grotere batchgroottes wanneer geheugen beperkt is. In plaats van gewichten bij te werken na elke mini-batch, worden gradiënten geaccumuleerd over meerdere mini-batches voordat de gewichtupdate wordt uitgevoerd, wat vergelijkbare effecten bereikt als grotere batches."
        }
      },
      {
        question: {
          en: "What is the difference between SGD with momentum and Nesterov momentum?",
          es: "¿Cuál es la diferencia entre SGD con momentum y momentum de Nesterov?",
          de: "Was ist der Unterschied zwischen SGD mit Momentum und Nesterov Momentum?",
          nl: "Wat is het verschil tussen SGD met momentum en Nesterov momentum?"
        },
        options: [
          { en: "Nesterov momentum computes gradients at the anticipated future position rather than the current position", es: "El momentum de Nesterov calcula gradientes en la posición futura anticipada en lugar de la posición actual", de: "Nesterov Momentum berechnet Gradienten an der antizipierten zukünftigen Position statt der aktuellen Position", nl: "Nesterov momentum berekent gradiënten op de geanticipeerde toekomstige positie in plaats van de huidige positie" },
          { en: "Nesterov momentum uses a smaller learning rate", es: "El momentum de Nesterov usa una tasa de aprendizaje más pequeña", de: "Nesterov Momentum verwendet eine kleinere Lernrate", nl: "Nesterov momentum gebruikt een kleinere leersnelheid" },
          { en: "Nesterov momentum doesn't use previous gradients", es: "El momentum de Nesterov no usa gradientes anteriores", de: "Nesterov Momentum verwendet keine vorherigen Gradienten", nl: "Nesterov momentum gebruikt geen vorige gradiënten" },
          { en: "There is no difference between them", es: "No hay diferencia entre ellos", de: "Es gibt keinen Unterschied zwischen ihnen", nl: "Er is geen verschil tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "Nesterov Accelerated Gradient (NAG) is a variant of momentum that provides 'lookahead' by computing gradients not at the current position but at the anticipated future position after applying momentum. This often leads to better convergence and reduced oscillations.",
          es: "El Gradiente Acelerado de Nesterov (NAG) es una variante del momentum que proporciona 'visión anticipada' calculando gradientes no en la posición actual sino en la posición futura anticipada después de aplicar momentum. Esto a menudo lleva a mejor convergencia y oscilaciones reducidas.",
          de: "Nesterov Accelerated Gradient (NAG) ist eine Variante von Momentum die 'Vorausschau' bietet indem Gradienten nicht an der aktuellen Position sondern an der antizipierten zukünftigen Position nach Anwendung von Momentum berechnet werden. Dies führt oft zu besserer Konvergenz und reduzierten Oszillationen.",
          nl: "Nesterov Accelerated Gradient (NAG) is een variant van momentum die 'vooruitkijk' biedt door gradiënten te berekenen niet op de huidige positie maar op de geanticipeerde toekomstige positie na het toepassen van momentum. Dit leidt vaak tot betere convergentie en verminderde oscillaties."
        }
      },
      {
        question: {
          en: "What is spectral normalization?",
          es: "¿Qué es la normalización espectral?",
          de: "Was ist Spectral Normalization?",
          nl: "Wat is spectrale normalisatie?"
        },
        options: [
          { en: "A regularization technique that constrains the spectral radius of weight matrices to improve training stability", es: "Una técnica de regularización que restringe el radio espectral de matrices de peso para mejorar la estabilidad del entrenamiento", de: "Eine Regularisierungstechnik die den Spektralradius von Gewichtsmatrizen einschränkt um Trainingsstabilität zu verbessern", nl: "Een regularisatietechniek die de spectrale radius van gewichtmatrices beperkt om trainingsstabiliteit te verbeteren" },
          { en: "A method to normalize color spectra in images", es: "Un método para normalizar espectros de color en imágenes", de: "Eine Methode um Farbspektren in Bildern zu normalisieren", nl: "Een methode om kleurspectra in afbeeldingen te normaliseren" },
          { en: "A technique to analyze frequency spectra", es: "Una técnica para analizar espectros de frecuencia", de: "Eine Technik um Frequenzspektren zu analysieren", nl: "Een techniek om frequentiespectra te analyseren" },
          { en: "A normalization method for spectral data", es: "Un método de normalización para datos espectrales", de: "Eine Normalisierungsmethode für Spektraldaten", nl: "Een normalisatiemethode voor spectrale data" }
        ],
        correct: 0,
        explanation: {
          en: "Spectral normalization constrains the largest singular value (spectral norm) of weight matrices to be at most 1. This technique is particularly useful in GANs to ensure discriminator doesn't become too powerful and helps stabilize training.",
          es: "La normalización espectral restringe el valor singular más grande (norma espectral) de las matrices de peso para que sea como máximo 1. Esta técnica es particularmente útil en GAN para asegurar que el discriminador no se vuelva demasiado poderoso y ayuda a estabilizar el entrenamiento.",
          de: "Spectral Normalization beschränkt den größten Singulärwert (Spektralnorm) von Gewichtsmatrizen auf höchstens 1. Diese Technik ist besonders nützlich in GANs um sicherzustellen dass der Diskriminator nicht zu mächtig wird und hilft das Training zu stabilisieren.",
          nl: "Spectrale normalisatie beperkt de grootste singuliere waarde (spectrale norm) van gewichtmatrices tot maximaal 1. Deze techniek is bijzonder nuttig in GANs om ervoor te zorgen dat de discriminator niet te krachtig wordt en helpt training te stabiliseren."
        }
      },
      {
        question: {
          en: "What is the AdaBound optimizer?",
          es: "¿Qué es el optimizador AdaBound?",
          de: "Was ist der AdaBound-Optimierer?",
          nl: "Wat is de AdaBound-optimizer?"
        },
        options: [
          { en: "An optimizer that combines the benefits of adaptive methods and SGD by gradually transitioning from adaptive to SGD behavior", es: "Un optimizador que combina los beneficios de métodos adaptativos y SGD transitando gradualmente de comportamiento adaptativo a SGD", de: "Ein Optimierer der die Vorteile adaptiver Methoden und SGD kombiniert indem er allmählich von adaptivem zu SGD-Verhalten übergeht", nl: "Een optimizer die de voordelen van adaptieve methoden en SGD combineert door geleidelijk over te gaan van adaptief naar SGD-gedrag" },
          { en: "An optimizer that bounds gradients within specific limits", es: "Un optimizador que limita gradientes dentro de límites específicos", de: "Ein Optimierer der Gradienten innerhalb spezifischer Grenzen begrenzt", nl: "Een optimizer die gradiënten binnen specifieke grenzen begrendt" },
          { en: "A bounded version of AdaGrad", es: "Una versión limitada de AdaGrad", de: "Eine begrenzte Version von AdaGrad", nl: "Een begrensde versie van AdaGrad" },
          { en: "An optimizer for bounded optimization problems", es: "Un optimizador para problemas de optimización limitada", de: "Ein Optimierer für begrenzte Optimierungsprobleme", nl: "Een optimizer voor begrensde optimalisatieproblemen" }
        ],
        correct: 0,
        explanation: {
          en: "AdaBound starts with adaptive learning rates like Adam but gradually transitions to SGD-like behavior by imposing bounds on the learning rates. This aims to get the fast initial convergence of adaptive methods and the good generalization of SGD.",
          es: "AdaBound comienza con tasas de aprendizaje adaptativas como Adam pero transiciona gradualmente a comportamiento similar a SGD imponiendo límites en las tasas de aprendizaje. Esto busca obtener la convergencia inicial rápida de métodos adaptativos y la buena generalización de SGD.",
          de: "AdaBound beginnt mit adaptiven Lernraten wie Adam aber geht allmählich zu SGD-ähnlichem Verhalten über indem Grenzen für die Lernraten auferlegt werden. Dies zielt darauf ab die schnelle anfängliche Konvergenz adaptiver Methoden und die gute Generalisierung von SGD zu erhalten.",
          nl: "AdaBound begint met adaptieve leersnelheden zoals Adam maar gaat geleidelijk over naar SGD-achtig gedrag door grenzen op te leggen aan de leersnelheden. Dit is bedoeld om de snelle initiële convergentie van adaptieve methoden en de goede generalisatie van SGD te krijgen."
        }
      },
      {
        question: {
          en: "What is label smoothing?",
          es: "¿Qué es el suavizado de etiquetas?",
          de: "Was ist Label Smoothing?",
          nl: "Wat is label smoothing?"
        },
        options: [
          { en: "A regularization technique that replaces hard target labels with soft probability distributions", es: "Una técnica de regularización que reemplaza etiquetas objetivo duras con distribuciones de probabilidad suaves", de: "Eine Regularisierungstechnik die harte Ziel-Labels durch weiche Wahrscheinlichkeitsverteilungen ersetzt", nl: "Een regularisatietechniek die harde doellabels vervangt door zachte waarschijnlijkheidsverdelingen" },
          { en: "A method to smooth label transitions in videos", es: "Un método para suavizar transiciones de etiquetas en videos", de: "Eine Methode um Label-Übergänge in Videos zu glätten", nl: "Een methode om labeltransities in video's glad te maken" },
          { en: "A technique to remove noise from labels", es: "Una técnica para eliminar ruido de las etiquetas", de: "Eine Technik um Rauschen aus Labels zu entfernen", nl: "Een techniek om ruis uit labels te verwijderen" },
          { en: "A way to make labels more readable", es: "Una forma de hacer las etiquetas más legibles", de: "Eine Art Labels lesbarer zu machen", nl: "Een manier om labels leesbaarder te maken" }
        ],
        correct: 0,
        explanation: {
          en: "Label smoothing replaces the standard one-hot encoded labels with a smoothed version where the true class gets probability (1-ε) and the remaining probability ε is distributed among other classes. This prevents overconfident predictions and often improves generalization.",
          es: "El suavizado de etiquetas reemplaza las etiquetas estándar codificadas en one-hot con una versión suavizada donde la clase verdadera obtiene probabilidad (1-ε) y la probabilidad restante ε se distribuye entre otras clases. Esto previene predicciones excesivamente confiadas y a menudo mejora la generalización.",
          de: "Label Smoothing ersetzt die standardmäßigen One-Hot-kodierten Labels durch eine geglättete Version wo die wahre Klasse Wahrscheinlichkeit (1-ε) erhält und die verbleibende Wahrscheinlichkeit ε unter anderen Klassen verteilt wird. Dies verhindert überconfidente Vorhersagen und verbessert oft die Generalisierung.",
          nl: "Label smoothing vervangt de standaard one-hot gecodeerde labels door een gladde versie waarbij de ware klasse waarschijnlijkheid (1-ε) krijgt en de resterende waarschijnlijkheid ε wordt verdeeld over andere klassen. Dit voorkomt overmoedige voorspellingen en verbetert vaak generalisatie."
        }
      },
      {
        question: {
          en: "What is the cyclical learning rate technique?",
          es: "¿Qué es la técnica de tasa de aprendizaje cíclica?",
          de: "Was ist die zyklische Lernraten-Technik?",
          nl: "Wat is de cyclische leersnelheid techniek?"
        },
        options: [
          { en: "A method that varies the learning rate between lower and upper bounds in cycles during training", es: "Un método que varía la tasa de aprendizaje entre límites inferiores y superiores en ciclos durante el entrenamiento", de: "Eine Methode die die Lernrate zwischen unteren und oberen Grenzen in Zyklen während des Trainings variiert", nl: "Een methode die de leersnelheid varieert tussen onder- en bovengrenzen in cycli tijdens training" },
          { en: "A technique to cycle through different learning algorithms", es: "Una técnica para recorrer diferentes algoritmos de aprendizaje", de: "Eine Technik um verschiedene Lernalgorithmen zu durchlaufen", nl: "Een techniek om verschillende leeralgoritmen te doorlopen" },
          { en: "A method to restart training cyclically", es: "Un método para reiniciar el entrenamiento cíclicamente", de: "Eine Methode um Training zyklisch neu zu starten", nl: "Een methode om training cyclisch te herstarten" },
          { en: "A way to cycle through training data", es: "Una forma de recorrer datos de entrenamiento", de: "Eine Art Trainingsdaten zu durchlaufen", nl: "Een manier om trainingsdata te doorlopen" }
        ],
        correct: 0,
        explanation: {
          en: "Cyclical learning rates periodically vary the learning rate between a minimum and maximum bound according to a cycle (triangular, exponential, etc.). This can help escape local minima, reduce training time, and often achieve better performance than fixed learning rates.",
          es: "Las tasas de aprendizaje cíclicas varían periódicamente la tasa de aprendizaje entre un límite mínimo y máximo según un ciclo (triangular, exponencial, etc.). Esto puede ayudar a escapar mínimos locales, reducir tiempo de entrenamiento y a menudo lograr mejor rendimiento que tasas de aprendizaje fijas.",
          de: "Zyklische Lernraten variieren periodisch die Lernrate zwischen einer minimalen und maximalen Grenze nach einem Zyklus (dreieckig, exponentiell, etc.). Dies kann helfen lokale Minima zu verlassen, Trainingszeit zu reduzieren und oft bessere Leistung als feste Lernraten zu erzielen.",
          nl: "Cyclische leersnelheden variëren periodiek de leersnelheid tussen een minimum en maximum grens volgens een cyclus (driehoekig, exponentieel, etc.). Dit kan helpen ontsnappen aan lokale minima, trainingstijd verminderen en vaak betere prestaties bereiken dan vaste leersnelheden."
        }
      },
      {
        question: {
          en: "What is mixup data augmentation as a regularization technique?",
          es: "¿Qué es la aumentación de datos mixup como técnica de regularización?",
          de: "Was ist Mixup-Datenaugmentierung als Regularisierungstechnik?",
          nl: "Wat is mixup data-augmentatie als regularisatietechniek?"
        },
        options: [
          { en: "A technique that creates new training examples by linearly interpolating between pairs of examples and their labels", es: "Una técnica que crea nuevos ejemplos de entrenamiento interpolando linealmente entre pares de ejemplos y sus etiquetas", de: "Eine Technik die neue Trainingsbeispiele durch lineare Interpolation zwischen Paaren von Beispielen und ihren Labels erstellt", nl: "Een techniek die nieuwe trainingsvoorbeelden creëert door lineair te interpoleren tussen paren van voorbeelden en hun labels" },
          { en: "A method to mix different optimization algorithms", es: "Un método para mezclar diferentes algoritmos de optimización", de: "Eine Methode um verschiedene Optimierungsalgorithmen zu mischen", nl: "Een methode om verschillende optimalisatie-algoritmen te mengen" },
          { en: "A technique to combine multiple neural networks", es: "Una técnica para combinar múltiples redes neuronales", de: "Eine Technik um mehrere neuronale Netzwerke zu kombinieren", nl: "Een techniek om meerdere neurale netwerken te combineren" },
          { en: "A way to mix training and validation data", es: "Una forma de mezclar datos de entrenamiento y validación", de: "Eine Art Trainings- und Validierungsdaten zu mischen", nl: "Een manier om trainings- en validatiedata te mengen" }
        ],
        correct: 0,
        explanation: {
          en: "Mixup generates synthetic training examples by taking convex combinations of pairs of examples and their labels. If (x₁, y₁) and (x₂, y₂) are two training examples, mixup creates (λx₁ + (1-λ)x₂, λy₁ + (1-λ)y₂) where λ ∈ [0,1]. This encourages linear behavior between training examples and improves generalization.",
          es: "Mixup genera ejemplos de entrenamiento sintéticos tomando combinaciones convexas de pares de ejemplos y sus etiquetas. Si (x₁, y₁) y (x₂, y₂) son dos ejemplos de entrenamiento, mixup crea (λx₁ + (1-λ)x₂, λy₁ + (1-λ)y₂) donde λ ∈ [0,1]. Esto fomenta comportamiento lineal entre ejemplos de entrenamiento y mejora la generalización.",
          de: "Mixup generiert synthetische Trainingsbeispiele durch konvexe Kombinationen von Paaren von Beispielen und ihren Labels. Wenn (x₁, y₁) und (x₂, y₂) zwei Trainingsbeispiele sind, erstellt Mixup (λx₁ + (1-λ)x₂, λy₁ + (1-λ)y₂) wobei λ ∈ [0,1]. Dies ermutigt lineares Verhalten zwischen Trainingsbeispielen und verbessert die Generalisierung.",
          nl: "Mixup genereert synthetische trainingsvoorbeelden door convexe combinaties van paren voorbeelden en hun labels te nemen. Als (x₁, y₁) en (x₂, y₂) twee trainingsvoorbeelden zijn, creëert mixup (λx₁ + (1-λ)x₂, λy₁ + (1-λ)y₂) waarbij λ ∈ [0,1]. Dit stimuleert lineair gedrag tussen trainingsvoorbeelden en verbetert generalisatie."
        }
      },
      {
        question: {
          en: "What is gradient clipping?",
          es: "¿Qué es el recorte de gradientes?",
          de: "Was ist Gradient Clipping?",
          nl: "Wat is gradiënt clipping?"
        },
        options: [
          { en: "A technique that limits the magnitude of gradients to prevent exploding gradients during training", es: "Una técnica que limita la magnitud de los gradientes para prevenir gradientes explosivos durante el entrenamiento", de: "Eine Technik die die Größe von Gradienten begrenzt um explodierende Gradienten während des Trainings zu verhindern", nl: "Een techniek die de grootte van gradiënten beperkt om exploderende gradiënten tijdens training te voorkomen" },
          { en: "A method to cut out parts of gradients", es: "Un método para cortar partes de gradientes", de: "Eine Methode um Teile von Gradienten herauszuschneiden", nl: "Een methode om delen van gradiënten weg te knippen" },
          { en: "A technique to copy gradients", es: "Una técnica para copiar gradientes", de: "Eine Technik um Gradienten zu kopieren", nl: "Een techniek om gradiënten te kopiëren" },
          { en: "A way to attach gradients together", es: "Una forma de unir gradientes", de: "Eine Art Gradienten zusammenzufügen", nl: "Een manier om gradiënten aan elkaar te bevestigen" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient clipping prevents the exploding gradient problem by setting a threshold value and scaling down gradients when their norm exceeds this threshold. Common methods include clipping by value (element-wise) or by norm (scaling the entire gradient vector).",
          es: "El recorte de gradientes previene el problema de gradientes explosivos estableciendo un valor umbral y reduciendo gradientes cuando su norma excede este umbral. Los métodos comunes incluyen recorte por valor (elemento por elemento) o por norma (escalando todo el vector gradiente).",
          de: "Gradient Clipping verhindert das Problem explodierender Gradienten durch Festlegung eines Schwellenwerts und Herunterskalierung von Gradienten wenn ihre Norm diesen Schwellenwert überschreitet. Häufige Methoden umfassen Clipping nach Wert (elementweise) oder nach Norm (Skalierung des gesamten Gradientenvektors).",
          nl: "Gradiënt clipping voorkomt het probleem van exploderende gradiënten door een drempelwaarde in te stellen en gradiënten te schalen wanneer hun norm deze drempel overschrijdt. Veelvoorkomende methoden zijn clipping per waarde (element-gewijs) of per norm (schaling van de hele gradiëntvector)."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();