// Deep learning Quiz - Level 3
(function() {
  const level3 = {
    name: {
          "en": "Deep Learning Level 3",
          "es": "Aprendizaje Profundo Nivel 3",
          "de": "Deep Learning Stufe 3",
          "nl": "Deep Learning Level 3"
    },
    questions: [
      {
        question: {
                  "en": "What is the purpose of using learning rate in deep learning optimization?",
                  "es": "¿Cuál es el propósito de usar la tasa de aprendizaje en optimización de aprendizaje profundo?",
                  "de": "Was ist der Zweck der Verwendung der Lernrate in Deep Learning Optimierung?",
                  "nl": "Wat is het doel van het gebruik van learning rate in deep learning optimalisatie?"
        },
        options: [
        {
                  "en": "Sets the number of learning iterations",
                  "es": "Establece el número de iteraciones de aprendizaje",
                  "de": "Setzt die Anzahl der Lerniterationen fest",
                  "nl": "Stelt het aantal leeriteraties in"
        },
        {
                  "en": "Controls the network architecture",
                  "es": "Controla la arquitectura de la red",
                  "de": "Kontrolliert die Netzwerkarchitektur",
                  "nl": "Controleert de netwerkarchitectuur"
        },
        {
                  "en": "Controls how big steps the model takes when updating weights",
                  "es": "Controla qué tan grandes pasos toma el modelo al actualizar pesos",
                  "de": "Kontrolliert wie große Schritte das Modell beim Aktualisieren von Gewichten macht",
                  "nl": "Controleert hoe grote stappen het model neemt bij het bijwerken van gewichten"
        },
        {
                  "en": "Determines how fast the computer processes data",
                  "es": "Determina qué tan rápido la computadora procesa datos",
                  "de": "Bestimmt wie schnell der Computer Daten verarbeitet",
                  "nl": "Bepaalt hoe snel de computer data verwerkt"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Learning rate determines the size of weight updates during training. Too high and the model may overshoot, too low and training becomes very slow.",
                  "es": "La tasa de aprendizaje determina el tamaño de las actualizaciones de peso durante el entrenamiento. Muy alta y el modelo puede sobrepasar, muy baja y el entrenamiento se vuelve muy lento.",
                  "de": "Die Lernrate bestimmt die Größe der Gewichtsaktualisierungen während des Trainings. Zu hoch und das Modell kann überschießen, zu niedrig und das Training wird sehr langsam.",
                  "nl": "Learning rate bepaalt de grootte van gewichtupdates tijdens training. Te hoog en het model kan overschieten, te laag en training wordt erg langzaam."
        }
      },
      {
        question: {
                  "en": "What is dropout and why is it used in deep neural networks?",
                  "es": "¿Qué es dropout y por qué se usa en redes neuronales profundas?",
                  "de": "Was ist Dropout und warum wird es in tiefen neuronalen Netzwerken verwendet?",
                  "nl": "Wat is dropout en waarom wordt het gebruikt in diepe neurale netwerken?"
        },
        options: [
        {
                  "en": "Stopping training early when performance decreases",
                  "es": "Detener el entrenamiento temprano cuando el rendimiento disminuye",
                  "de": "Training früh stoppen wenn die Leistung abnimmt",
                  "nl": "Training vroegtijdig stoppen wanneer prestaties afnemen"
        },
        {
                  "en": "Dropping bad data points from the dataset",
                  "es": "Eliminar puntos de datos malos del conjunto de datos",
                  "de": "Schlechte Datenpunkte aus dem Datensatz entfernen",
                  "nl": "Slechte datapunten uit de dataset weglaten"
        },
        {
                  "en": "Removing unnecessary network layers",
                  "es": "Eliminar capas de red innecesarias",
                  "de": "Unnötige Netzwerkschichten entfernen",
                  "nl": "Onnodige netwerklagen verwijderen"
        },
        {
                  "en": "A regularization technique that randomly turns off neurons during training to prevent overfitting",
                  "es": "Una técnica de regularización que apaga aleatoriamente neuronas durante el entrenamiento para prevenir sobreajuste",
                  "de": "Eine Regularisierungstechnik die zufällig Neuronen während des Trainings ausschaltet um Overfitting zu verhindern",
                  "nl": "Een regularisatietechniek die willekeurig neuronen uitschakelt tijdens training om overfitting te voorkomen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dropout randomly sets some neurons to zero during training, forcing the network to not rely too heavily on specific neurons and improving generalization.",
                  "es": "Dropout establece aleatoriamente algunas neuronas a cero durante el entrenamiento, forzando a la red a no depender demasiado de neuronas específicas y mejorando la generalización.",
                  "de": "Dropout setzt zufällig einige Neuronen auf Null während des Trainings, zwingt das Netzwerk nicht zu stark auf spezifische Neuronen zu vertrauen und verbessert die Generalisierung.",
                  "nl": "Dropout zet willekeurig enkele neuronen op nul tijdens training, dwingt het netwerk om niet te zwaar te leunen op specifieke neuronen en verbetert generalisatie."
        }
      },
      {
        question: {
                  "en": "What is batch normalization and what problem does it solve?",
                  "es": "¿Qué es la normalización por lotes y qué problema resuelve?",
                  "de": "Was ist Batch-Normalisierung und welches Problem löst sie?",
                  "nl": "Wat is batch normalization en welk probleem lost het op?"
        },
        options: [
        {
                  "en": "Processes data in batches instead of individually",
                  "es": "Procesa datos en lotes en lugar de individualmente",
                  "de": "Verarbeitet Daten in Stapeln anstatt einzeln",
                  "nl": "Verwerkt data in batches in plaats van individueel"
        },
        {
                  "en": "Normalizes inputs to each layer to stabilize and accelerate training",
                  "es": "Normaliza entradas a cada capa para estabilizar y acelerar el entrenamiento",
                  "de": "Normalisiert Eingaben zu jeder Schicht um Training zu stabilisieren und beschleunigen",
                  "nl": "Normaliseert inputs naar elke laag om training te stabiliseren en versnellen"
        },
        {
                  "en": "Normalizes the final output of the network",
                  "es": "Normaliza la salida final de la red",
                  "de": "Normalisiert die finale Ausgabe des Netzwerks",
                  "nl": "Normaliseert de finale output van het netwerk"
        },
        {
                  "en": "Balances the number of samples in each batch",
                  "es": "Equilibra el número de muestras en cada lote",
                  "de": "Balanciert die Anzahl der Proben in jedem Stapel",
                  "nl": "Balanceert het aantal samples in elke batch"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Batch normalization normalizes layer inputs by adjusting and scaling activations, reducing internal covariate shift and allowing higher learning rates.",
                  "es": "La normalización por lotes normaliza entradas de capa ajustando y escalando activaciones, reduciendo el cambio covariante interno y permitiendo tasas de aprendizaje más altas.",
                  "de": "Batch-Normalisierung normalisiert Schichteingaben durch Anpassung und Skalierung von Aktivierungen, reduziert interne Kovarianzverschiebung und ermöglicht höhere Lernraten.",
                  "nl": "Batch normalization normaliseert laaginputs door activaties aan te passen en te schalen, vermindert interne covariate shift en maakt hogere learning rates mogelijk."
        }
      },
      {
        question: {
                  "en": "What is the vanishing gradient problem in deep networks?",
                  "es": "¿Cuál es el problema del gradiente que desaparece en redes profundas?",
                  "de": "Was ist das Problem der verschwindenden Gradienten in tiefen Netzwerken?",
                  "nl": "Wat is het verdwijnende gradiënt probleem in diepe netwerken?"
        },
        options: [
        {
                  "en": "Gradients become too large and unstable",
                  "es": "Los gradientes se vuelven demasiado grandes e inestables",
                  "de": "Gradienten werden zu groß und instabil",
                  "nl": "Gradiënten worden te groot en instabiel"
        },
        {
                  "en": "Gradients disappear from computer memory",
                  "es": "Los gradientes desaparecen de la memoria de la computadora",
                  "de": "Gradienten verschwinden aus dem Computerspeicher",
                  "nl": "Gradiënten verdwijnen uit het computergeheugen"
        },
        {
                  "en": "Gradients become very small in early layers, making them learn very slowly",
                  "es": "Los gradientes se vuelven muy pequeños en capas tempranas, haciendo que aprendan muy lentamente",
                  "de": "Gradienten werden in frühen Schichten sehr klein und lassen sie sehr langsam lernen",
                  "nl": "Gradiënten worden erg klein in vroege lagen, waardoor ze erg langzaam leren"
        },
        {
                  "en": "The network loses its gradient calculations",
                  "es": "La red pierde sus cálculos de gradiente",
                  "de": "Das Netzwerk verliert seine Gradientenberechnungen",
                  "nl": "Het netwerk verliest zijn gradiëntberekeningen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "As gradients propagate backward through many layers, they can become exponentially smaller, causing early layers to barely update and learn.",
                  "es": "Mientras los gradientes se propagan hacia atrás a través de muchas capas, pueden volverse exponencialmente más pequeños, causando que las capas tempranas apenas se actualicen y aprendan.",
                  "de": "Während sich Gradienten rückwärts durch viele Schichten propagieren, können sie exponentiell kleiner werden, wodurch frühe Schichten kaum aktualisiert werden und lernen.",
                  "nl": "Terwijl gradiënten achterwaarts propageren door veel lagen, kunnen ze exponentieel kleiner worden, waardoor vroege lagen nauwelijks updaten en leren."
        }
      },
      {
        question: {
                  "en": "What is the purpose of weight initialization in deep learning?",
                  "es": "¿Cuál es el propósito de la inicialización de pesos en aprendizaje profundo?",
                  "de": "Was ist der Zweck der Gewichtsinitialisierung in Deep Learning?",
                  "nl": "Wat is het doel van gewichtinitialisatie in deep learning?"
        },
        options: [
        {
                  "en": "Making all weights equal to zero",
                  "es": "Hacer que todos los pesos sean iguales a cero",
                  "de": "Alle Gewichte gleich Null machen",
                  "nl": "Alle gewichten gelijk maken aan nul"
        },
        {
                  "en": "Randomly changing weights during training",
                  "es": "Cambiar aleatoriamente pesos durante el entrenamiento",
                  "de": "Gewichte während des Trainings zufällig ändern",
                  "nl": "Willekeurig gewichten veranderen tijdens training"
        },
        {
                  "en": "Setting initial weights to appropriate values to ensure stable and efficient training",
                  "es": "Establecer pesos iniciales a valores apropiados para asegurar entrenamiento estable y eficiente",
                  "de": "Anfangsgewichte auf angemessene Werte setzen um stabiles und effizientes Training zu gewährleisten",
                  "nl": "Begingewichten instellen op gepaste waarden om stabiele en efficiënte training te verzekeren"
        },
        {
                  "en": "Setting weights to the final trained values",
                  "es": "Establecer pesos a los valores finales entrenados",
                  "de": "Gewichte auf die finalen trainierten Werte setzen",
                  "nl": "Gewichten instellen op de finale getrainde waarden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Proper weight initialization prevents vanishing/exploding gradients and helps the network start learning effectively from the beginning of training.",
                  "es": "La inicialización adecuada de pesos previene gradientes que desaparecen/explotan y ayuda a la red a comenzar a aprender efectivamente desde el inicio del entrenamiento.",
                  "de": "Richtige Gewichtsinitialisierung verhindert verschwindende/explodierende Gradienten und hilft dem Netzwerk effektiv vom Anfang des Trainings zu lernen.",
                  "nl": "Juiste gewichtinitialisatie voorkomt verdwijnende/exploderende gradiënten en helpt het netwerk effectief te leren vanaf het begin van training."
        }
      },
      {
        question: {
                  "en": "What is gradient descent and how does it work?",
                  "es": "¿Qué es el descenso de gradiente y cómo funciona?",
                  "de": "Was ist Gradientenabstieg und wie funktioniert er?",
                  "nl": "Wat is gradient descent en hoe werkt het?"
        },
        options: [
        {
                  "en": "An algorithm for gradient calculation only",
                  "es": "Un algoritmo solo para cálculo de gradientes",
                  "de": "Ein Algorithmus nur für Gradientenberechnung",
                  "nl": "Een algoritme alleen voor gradiëntberekening"
        },
        {
                  "en": "A technique for reducing gradient values",
                  "es": "Una técnica para reducir valores de gradiente",
                  "de": "Eine Technik zur Reduzierung von Gradientenwerten",
                  "nl": "Een techniek voor het verminderen van gradiëntwaarden"
        },
        {
                  "en": "An optimization algorithm that iteratively moves in the direction of steepest descent to minimize the loss function",
                  "es": "Un algoritmo de optimización que se mueve iterativamente en la dirección de descenso más pronunciado para minimizar la función de pérdida",
                  "de": "Ein Optimierungsalgorithmus der iterativ in Richtung des steilsten Abstiegs bewegt um die Verlustfunktion zu minimieren",
                  "nl": "Een optimalisatiealgoritme dat iteratief beweegt in de richting van steilste afdaling om de verliesfunctie te minimaliseren"
        },
        {
                  "en": "A method for descending through network layers",
                  "es": "Un método para descender a través de capas de red",
                  "de": "Eine Methode um durch Netzwerkschichten abzusteigen",
                  "nl": "Een methode om door netwerklagen af te dalen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Gradient descent uses the negative gradient to find the direction that decreases the loss function most rapidly, updating parameters iteratively to reach a minimum.",
                  "es": "El descenso de gradiente usa el gradiente negativo para encontrar la dirección que disminuye la función de pérdida más rápidamente, actualizando parámetros iterativamente para alcanzar un mínimo.",
                  "de": "Gradientenabstieg verwendet den negativen Gradienten um die Richtung zu finden die die Verlustfunktion am schnellsten verringert, aktualisiert Parameter iterativ um ein Minimum zu erreichen.",
                  "nl": "Gradient descent gebruikt de negatieve gradiënt om de richting te vinden die de verliesfunctie het snelst vermindert, werkt parameters iteratief bij om een minimum te bereiken."
        }
      },
      {
        question: {
                  "en": "What is the difference between batch, mini-batch, and stochastic gradient descent?",
                  "es": "¿Cuál es la diferencia entre descenso de gradiente por lotes, mini-lotes y estocástico?",
                  "de": "Was ist der Unterschied zwischen Batch-, Mini-Batch- und stochastischem Gradientenabstieg?",
                  "nl": "Wat is het verschil tussen batch, mini-batch en stochastic gradient descent?"
        },
        options: [
        {
                  "en": "Batch is for classification, others for regression",
                  "es": "Por lotes es para clasificación, otros para regresión",
                  "de": "Batch ist für Klassifikation, andere für Regression",
                  "nl": "Batch is voor classificatie, anderen voor regressie"
        },
        {
                  "en": "They differ only in computational speed",
                  "es": "Solo difieren en velocidad computacional",
                  "de": "Sie unterscheiden sich nur in der Rechengeschwindigkeit",
                  "nl": "Ze verschillen alleen in computationele snelheid"
        },
        {
                  "en": "Batch uses all data, mini-batch uses small subsets, stochastic uses one example at a time for gradient calculation",
                  "es": "Por lotes usa todos los datos, mini-lotes usa subconjuntos pequeños, estocástico usa un ejemplo a la vez para cálculo de gradiente",
                  "de": "Batch verwendet alle Daten, Mini-Batch verwendet kleine Teilmengen, stochastisch verwendet ein Beispiel auf einmal für Gradientenberechnung",
                  "nl": "Batch gebruikt alle data, mini-batch gebruikt kleine subsets, stochastic gebruikt één voorbeeld tegelijk voor gradiëntberekening"
        },
        {
                  "en": "They are different names for the same algorithm",
                  "es": "Son nombres diferentes para el mismo algoritmo",
                  "de": "Sie sind verschiedene Namen für denselben Algorithmus",
                  "nl": "Het zijn verschillende namen voor hetzelfde algoritme"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "These variants trade off between gradient accuracy and computational efficiency: batch gradient descent is most stable but slowest, stochastic is fastest but noisiest, mini-batch balances both.",
                  "es": "Estas variantes equilibran entre precisión de gradiente y eficiencia computacional: descenso por lotes es más estable pero más lento, estocástico es más rápido pero más ruidoso, mini-lotes equilibra ambos.",
                  "de": "Diese Varianten balancieren zwischen Gradientengenauigkeit und Recheneffizienz: Batch-Gradientenabstieg ist am stabilsten aber langsamsten, stochastisch ist am schnellsten aber rauschigsten, Mini-Batch balanciert beide.",
                  "nl": "Deze varianten balanceren tussen gradiëntnauwkeurigheid en computationele efficiëntie: batch gradient descent is meest stabiel maar langzaamst, stochastic is snelst maar ruizigst, mini-batch balanceert beide."
        }
      },
      {
        question: {
                  "en": "What is momentum in gradient descent optimization?",
                  "es": "¿Qué es el momentum en optimización de descenso de gradiente?",
                  "de": "Was ist Momentum in der Gradientenabstieg-Optimierung?",
                  "nl": "Wat is momentum in gradient descent optimalisatie?"
        },
        options: [
        {
                  "en": "The force applied to update weights",
                  "es": "La fuerza aplicada para actualizar pesos",
                  "de": "Die Kraft die angewendet wird um Gewichte zu aktualisieren",
                  "nl": "De kracht die toegepast wordt om gewichten bij te werken"
        },
        {
                  "en": "A method for storing previous gradients",
                  "es": "Un método para almacenar gradientes previos",
                  "de": "Eine Methode zur Speicherung vorheriger Gradienten",
                  "nl": "Een methode voor het opslaan van vorige gradiënten"
        },
        {
                  "en": "The speed at which gradients are calculated",
                  "es": "La velocidad a la que se calculan los gradientes",
                  "de": "Die Geschwindigkeit mit der Gradienten berechnet werden",
                  "nl": "De snelheid waarmee gradiënten berekend worden"
        },
        {
                  "en": "A technique that adds a fraction of the previous update to the current update, helping overcome local minima and accelerate convergence",
                  "es": "Técnica que añade fracción de actualización previa a actual, ayudando superar mínimos locales y acelerar convergencia",
                  "de": "Technik die Bruchteil vorheriger Aktualisierung zur aktuellen hinzufügt, hilft lokale Minima überwinden und Konvergenz beschleunigen",
                  "nl": "Techniek die fractie van vorige update toevoegt aan huidige, helpt lokale minima overwinnen en convergentie versnellen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Momentum helps smooth out oscillations and accelerate training by accumulating a moving average of gradients, especially useful in areas where the gradient changes direction frequently.",
                  "es": "El momentum ayuda a suavizar oscilaciones y acelerar entrenamiento acumulando un promedio móvil de gradientes, especialmente útil en áreas donde el gradiente cambia dirección frecuentemente.",
                  "de": "Momentum hilft Oszillationen zu glätten und Training zu beschleunigen durch Akkumulation eines gleitenden Durchschnitts von Gradienten, besonders nützlich in Bereichen wo der Gradient häufig die Richtung ändert.",
                  "nl": "Momentum helpt oscillaties glad te strijken en training te versnellen door het accumuleren van een voortschrijdend gemiddelde van gradiënten, vooral nuttig in gebieden waar de gradiënt vaak van richting verandert."
        }
      },
      {
        question: {
                  "en": "What is the Adam optimizer and what are its advantages?",
                  "es": "¿Qué es el optimizador Adam y cuáles son sus ventajas?",
                  "de": "Was ist der Adam-Optimierer und was sind seine Vorteile?",
                  "nl": "Wat is de Adam optimizer en wat zijn de voordelen?"
        },
        options: [
        {
                  "en": "A person who invented neural networks",
                  "es": "Una persona que inventó redes neuronales",
                  "de": "Eine Person die neuronale Netzwerke erfunden hat",
                  "nl": "Een persoon die neurale netwerken uitvond"
        },
        {
                  "en": "A simple gradient descent with fixed learning rate",
                  "es": "Un descenso de gradiente simple con tasa de aprendizaje fija",
                  "de": "Ein einfacher Gradientenabstieg mit fester Lernrate",
                  "nl": "Een eenvoudige gradient descent met vaste learning rate"
        },
        {
                  "en": "An adaptive learning rate algorithm that combines momentum and RMSprop, automatically adjusting learning rates for each parameter",
                  "es": "Algoritmo de tasa aprendizaje adaptativo que combina momentum y RMSprop, ajustando automáticamente tasas para cada parámetro",
                  "de": "Adaptiver Lernraten-Algorithmus der Momentum und RMSprop kombiniert, passt automatisch Lernraten für jeden Parameter an",
                  "nl": "Adaptief learning rate algoritme dat momentum en RMSprop combineert, past automatisch learning rates aan voor elke parameter"
        },
        {
                  "en": "An optimizer that only works with Adam activations",
                  "es": "Un optimizador que solo funciona con activaciones Adam",
                  "de": "Ein Optimierer der nur mit Adam-Aktivierungen funktioniert",
                  "nl": "Een optimizer die alleen werkt met Adam activaties"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Adam (Adaptive Moment Estimation) is popular because it adapts learning rates per parameter, handles sparse gradients well, and typically requires less hyperparameter tuning than other optimizers.",
                  "es": "Adam (Estimación de Momento Adaptativo) es popular porque adapta tasas de aprendizaje por parámetro, maneja bien gradientes dispersos, y típicamente requiere menos ajuste de hiperparámetros que otros optimizadores.",
                  "de": "Adam (Adaptive Moment Estimation) ist beliebt weil es Lernraten pro Parameter anpasst, spärliche Gradienten gut handhabt, und typischerweise weniger Hyperparameter-Tuning benötigt als andere Optimierer.",
                  "nl": "Adam (Adaptive Moment Estimation) is populair omdat het learning rates per parameter aanpast, goed omgaat met dunne gradiënten, en typisch minder hyperparameter tuning vereist dan andere optimizers."
        }
      },
      {
        question: {
                  "en": "What is learning rate scheduling and why is it useful?",
                  "es": "¿Qué es la programación de tasa de aprendizaje y por qué es útil?",
                  "de": "Was ist Lernraten-Scheduling und warum ist es nützlich?",
                  "nl": "Wat is learning rate scheduling en waarom is het nuttig?"
        },
        options: [
        {
                  "en": "Planning when to start and stop learning",
                  "es": "Planificar cuándo empezar y parar el aprendizaje",
                  "de": "Planen wann Lernen begonnen und gestoppt wird",
                  "nl": "Plannen wanneer te beginnen en stoppen met leren"
        },
        {
                  "en": "Scheduling training sessions at specific times",
                  "es": "Programar sesiones de entrenamiento en horarios específicos",
                  "de": "Trainingseinheiten zu bestimmten Zeiten planen",
                  "nl": "Trainingssessies plannen op specifieke tijden"
        },
        {
                  "en": "Setting deadlines for model completion",
                  "es": "Establecer fechas límite para completar modelos",
                  "de": "Fristen für Modellfertigstellung setzen",
                  "nl": "Deadlines instellen voor modelafronding"
        },
        {
                  "en": "Systematically changing the learning rate during training to improve convergence and avoid overshooting optima",
                  "es": "Cambiar sistemáticamente la tasa de aprendizaje durante entrenamiento para mejorar convergencia y evitar sobrepasar óptimos",
                  "de": "Systematisches Ändern der Lernrate während des Trainings um Konvergenz zu verbessern und Überschießen von Optima zu vermeiden",
                  "nl": "Systematisch veranderen van de learning rate tijdens training om convergentie te verbeteren en overschieten van optima te vermijden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Learning rate scheduling (like exponential decay, step decay, or cosine annealing) helps models converge better by starting with larger steps for fast initial progress and smaller steps for fine-tuning near optima.",
                  "es": "La programación de tasa de aprendizaje (como decaimiento exponencial, decaimiento por pasos, o recocido coseno) ayuda a modelos converger mejor empezando con pasos grandes para progreso inicial rápido y pasos más pequeños para ajuste fino cerca de óptimos.",
                  "de": "Lernraten-Scheduling (wie exponentieller Zerfall, Schritt-Zerfall oder Kosinus-Annealing) hilft Modellen besser zu konvergieren durch Beginnen mit größeren Schritten für schnellen anfänglichen Fortschritt und kleineren Schritten für Feinabstimmung nahe Optima.",
                  "nl": "Learning rate scheduling (zoals exponentiële decay, step decay, of cosine annealing) helpt modellen beter convergeren door te beginnen met grotere stappen voor snelle initiële voortgang en kleinere stappen voor fine-tuning nabij optima."
        }
      },
      {
        question: {
                  "en": "What is the exploding gradient problem and how can it be addressed?",
                  "es": "¿Cuál es el problema del gradiente que explota y cómo puede abordarse?",
                  "de": "Was ist das Problem explodierender Gradienten und wie kann es angegangen werden?",
                  "nl": "Wat is het exploderende gradiënt probleem en hoe kan het aangepakt worden?"
        },
        options: [
        {
                  "en": "Gradients become extremely large causing unstable training, addressed by gradient clipping, proper weight initialization, or architectural changes",
                  "es": "Gradientes extremadamente grandes causan entrenamiento inestable, solucionado por clipping, inicialización de pesos, o cambios arquitectónicos",
                  "de": "Gradienten werden extrem groß verursachen instabiles Training, angegangen durch Clipping, Gewichtsinitialisierung oder Architekturänderungen",
                  "nl": "Gradiënten worden extreem groot veroorzaken instabiele training, aangepakt door gradient clipping, gewichtinitialisatie, of architectuurveranderingen"
        },
        {
                  "en": "Too many gradients are calculated simultaneously",
                  "es": "Demasiados gradientes se calculan simultáneamente",
                  "de": "Zu viele Gradienten werden gleichzeitig berechnet",
                  "nl": "Te veel gradiënten worden tegelijkertijd berekend"
        },
        {
                  "en": "Gradients become negative instead of positive",
                  "es": "Los gradientes se vuelven negativos en lugar de positivos",
                  "de": "Gradienten werden negativ anstatt positiv",
                  "nl": "Gradiënten worden negatief in plaats van positief"
        },
        {
                  "en": "Gradients literally explode the computer memory",
                  "es": "Los gradientes literalmente explotan la memoria de la computadora",
                  "de": "Gradienten lassen buchstäblich den Computerspeicher explodieren",
                  "nl": "Gradiënten laten letterlijk het computergeheugen exploderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Exploding gradients cause weight updates to be too large, leading to unstable training and NaN values. Gradient clipping limits gradient magnitude to prevent this instability.",
                  "es": "Los gradientes que explotan causan que las actualizaciones de pesos sean demasiado grandes, llevando a entrenamiento inestable y valores NaN. El recorte de gradientes limita la magnitud del gradiente para prevenir esta inestabilidad.",
                  "de": "Explodierende Gradienten verursachen zu große Gewichtsaktualisierungen, führen zu instabilem Training und NaN-Werten. Gradienten-Clipping begrenzt die Gradientengröße um diese Instabilität zu verhindern.",
                  "nl": "Exploderende gradiënten zorgen ervoor dat gewichtupdates te groot zijn, leiden tot instabiele training en NaN waarden. Gradient clipping beperkt gradiëntgrootte om deze instabiliteit te voorkomen."
        }
      },
      {
        question: {
                  "en": "What is early stopping in neural network training?",
                  "es": "¿Qué es la parada temprana en entrenamiento de redes neuronales?",
                  "de": "Was ist frühes Stoppen im neuronalen Netzwerktraining?",
                  "nl": "Wat is early stopping in neurale netwerktraining?"
        },
        options: [
        {
                  "en": "A regularization technique that stops training when validation performance stops improving, preventing overfitting",
                  "es": "Técnica de regularización que detiene entrenamiento cuando rendimiento validación deja de mejorar, previniendo sobreajuste",
                  "de": "Regularisierungstechnik die Training stoppt wenn Validierungsleistung aufhört sich zu verbessern, verhindert Overfitting",
                  "nl": "Regularisatietechniek die training stopt wanneer validatieprestaties stoppen met verbeteren, voorkomt overfitting"
        },
        {
                  "en": "Stopping training after a fixed number of epochs",
                  "es": "Detener entrenamiento después de un número fijo de épocas",
                  "de": "Training nach einer festen Anzahl von Epochen stoppen",
                  "nl": "Training stoppen na een vast aantal epochs"
        },
        {
                  "en": "Stopping training when the computer overheats",
                  "es": "Detener entrenamiento cuando la computadora se sobrecalienta",
                  "de": "Training stoppen wenn der Computer überhitzt",
                  "nl": "Training stoppen wanneer de computer oververhit"
        },
        {
                  "en": "Ending training sessions during work hours",
                  "es": "Terminar sesiones de entrenamiento durante horas de trabajo",
                  "de": "Trainingseinheiten während der Arbeitszeit beenden",
                  "nl": "Trainingssessies beëindigen tijdens werkuren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Early stopping monitors validation loss and stops training when it starts increasing, indicating the model is beginning to overfit to the training data rather than learning generalizable patterns.",
                  "es": "La parada temprana monitorea la pérdida de validación y detiene entrenamiento cuando empieza a aumentar, indicando que el modelo está empezando a sobreajustarse a datos de entrenamiento en lugar de aprender patrones generalizables.",
                  "de": "Frühes Stoppen überwacht den Validierungsverlust und stoppt Training wenn er zu steigen beginnt, zeigt an dass das Modell beginnt auf Trainingsdaten zu überfitten anstatt generalisierbare Muster zu lernen.",
                  "nl": "Early stopping monitort validatieverlies en stopt training wanneer het begint te stijgen, geeft aan dat het model begint te overfitten op trainingsdata in plaats van generaliseerbare patronen te leren."
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
                  "en": "L1 is for layer 1, L2 is for layer 2",
                  "es": "L1 es para capa 1, L2 es para capa 2",
                  "de": "L1 ist für Schicht 1, L2 ist für Schicht 2",
                  "nl": "L1 is voor laag 1, L2 is voor laag 2"
        },
        {
                  "en": "L1 is stronger regularization than L2",
                  "es": "L1 es regularización más fuerte que L2",
                  "de": "L1 ist stärkere Regularisierung als L2",
                  "nl": "L1 is sterkere regularisatie dan L2"
        },
        {
                  "en": "L1 adds sum of absolute weights to loss (promotes sparsity), L2 adds sum of squared weights (promotes small weights)",
                  "es": "L1 añade suma de pesos absolutos a la pérdida (promueve dispersión), L2 añade suma de pesos al cuadrado (promueve pesos pequeños)",
                  "de": "L1 fügt Summe absoluter Gewichte zum Verlust hinzu (fördert Spärlichkeit), L2 fügt Summe quadrierter Gewichte hinzu (fördert kleine Gewichte)",
                  "nl": "L1 voegt som van absolute gewichten toe aan verlies (bevordert sparsity), L2 voegt som van gekwadrateerde gewichten toe (bevordert kleine gewichten)"
        },
        {
                  "en": "L1 and L2 refer to different loss functions",
                  "es": "L1 y L2 se refieren a diferentes funciones de pérdida",
                  "de": "L1 und L2 beziehen sich auf verschiedene Verlustfunktionen",
                  "nl": "L1 en L2 verwijzen naar verschillende verliesfuncties"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "L1 regularization can drive some weights to exactly zero (feature selection), while L2 regularization shrinks all weights proportionally toward zero, preventing any single weight from becoming too large.",
                  "es": "La regularización L1 puede llevar algunos pesos exactamente a cero (selección de características), mientras que la regularización L2 encoge todos los pesos proporcionalmente hacia cero, previniendo que cualquier peso individual se vuelva demasiado grande.",
                  "de": "L1-Regularisierung kann einige Gewichte auf genau Null treiben (Feature-Selektion), während L2-Regularisierung alle Gewichte proportional Richtung Null schrumpft, verhindert dass einzelne Gewichte zu groß werden.",
                  "nl": "L1 regularisatie kan sommige gewichten exact naar nul drijven (feature selectie), terwijl L2 regularisatie alle gewichten proportioneel naar nul krimpt, voorkomt dat enkel gewicht te groot wordt."
        }
      },
      {
        question: {
                  "en": "What is cross-entropy loss and when is it used?",
                  "es": "¿Qué es la pérdida de entropía cruzada y cuándo se usa?",
                  "de": "Was ist Cross-Entropy-Verlust und wann wird er verwendet?",
                  "nl": "Wat is cross-entropy loss en wanneer wordt het gebruikt?"
        },
        options: [
        {
                  "en": "A loss function measuring difference between predicted and true probability distributions, commonly used for classification tasks",
                  "es": "Función de pérdida que mide diferencia entre distribuciones probabilidad predichas y verdaderas, usada para tareas clasificación",
                  "de": "Verlustfunktion die Unterschied zwischen vorhergesagten und wahren Wahrscheinlichkeitsverteilungen misst, für Klassifikationsaufgaben",
                  "nl": "Verliesfunctie die verschil meet tussen voorspelde en echte waarschijnlijkheidsverdelingen, gebruikt voor classificatietaken"
        },
        {
                  "en": "A measure of how crossed the neural connections are",
                  "es": "Una medida de qué tan cruzadas están las conexiones neuronales",
                  "de": "Ein Maß dafür wie gekreuzt die neuronalen Verbindungen sind",
                  "nl": "Een maat voor hoe gekruist de neurale verbindingen zijn"
        },
        {
                  "en": "A type of entropy used in thermodynamics",
                  "es": "Un tipo de entropía usada en termodinámica",
                  "de": "Eine Art Entropie die in der Thermodynamik verwendet wird",
                  "nl": "Een type entropie gebruikt in thermodynamica"
        },
        {
                  "en": "Loss function only for regression problems",
                  "es": "Función de pérdida solo para problemas de regresión",
                  "de": "Verlustfunktion nur für Regressionsprobleme",
                  "nl": "Verliesfunctie alleen voor regressieproblemen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Cross-entropy loss penalizes predictions that are confident but wrong more heavily than those that are uncertain, making it ideal for training classification models with softmax outputs.",
                  "es": "La pérdida de entropía cruzada penaliza predicciones que son confiadas pero incorrectas más fuertemente que aquellas que son inciertas, haciéndola ideal para entrenar modelos de clasificación con salidas softmax.",
                  "de": "Cross-Entropy-Verlust bestraft Vorhersagen die sicher aber falsch sind stärker als solche die unsicher sind, macht ihn ideal für Training von Klassifikationsmodellen mit Softmax-Ausgaben.",
                  "nl": "Cross-entropy loss bestraft voorspellingen die zeker maar verkeerd zijn zwaarder dan die welke onzeker zijn, maakt het ideaal voor training van classificatiemodellen met softmax outputs."
        }
      },
      {
        question: {
                  "en": "What is mean squared error (MSE) and when is it appropriate?",
                  "es": "¿Qué es el error cuadrático medio (MSE) y cuándo es apropiado?",
                  "de": "Was ist mittlerer quadratischer Fehler (MSE) und wann ist er angemessen?",
                  "nl": "Wat is mean squared error (MSE) en wanneer is het geschikt?"
        },
        options: [
        {
                  "en": "Mean squared error in data collection",
                  "es": "Error cuadrático medio en recolección de datos",
                  "de": "Mittlerer quadratischer Fehler bei Datensammlung",
                  "nl": "Mean squared error in dataverzameling"
        },
        {
                  "en": "The average of squared differences between predicted and actual values, commonly used for regression tasks",
                  "es": "Promedio de diferencias al cuadrado entre valores predichos y reales, usado para tareas de regresión",
                  "de": "Durchschnitt quadrierter Unterschiede zwischen vorhergesagten und tatsächlichen Werten, für Regressionsaufgaben verwendet",
                  "nl": "Gemiddelde van gekwadrateerde verschillen tussen voorspelde en werkelijke waarden, gebruikt voor regressietaken"
        },
        {
                  "en": "A measure of how mean the neural network is",
                  "es": "Una medida de qué tan malvada es la red neuronal",
                  "de": "Ein Maß dafür wie gemein das neuronale Netzwerk ist",
                  "nl": "Een maat voor hoe gemeen het neurale netwerk is"
        },
        {
                  "en": "Only used for binary classification",
                  "es": "Solo usado para clasificación binaria",
                  "de": "Nur für binäre Klassifikation verwendet",
                  "nl": "Alleen gebruikt voor binaire classificatie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "MSE is sensitive to outliers due to squaring, making it suitable for regression when outliers should be heavily penalized, but may not be ideal when outliers are noise.",
                  "es": "MSE es sensible a valores atípicos debido al cuadrado, haciéndolo adecuado para regresión cuando valores atípicos deben ser fuertemente penalizados, pero puede no ser ideal cuando valores atípicos son ruido.",
                  "de": "MSE ist empfindlich gegenüber Ausreißern aufgrund der Quadrierung, macht ihn geeignet für Regression wenn Ausreißer stark bestraft werden sollen, aber möglicherweise nicht ideal wenn Ausreißer Rauschen sind.",
                  "nl": "MSE is gevoelig voor uitbijters door het kwadrateren, maakt het geschikt voor regressie wanneer uitbijters zwaar bestraft moeten worden, maar mogelijk niet ideaal wanneer uitbijters ruis zijn."
        }
      },
      {
        question: {
                  "en": "What is the purpose of data normalization in deep learning?",
                  "es": "¿Cuál es el propósito de la normalización de datos en aprendizaje profundo?",
                  "de": "Was ist der Zweck der Datennormalisierung in Deep Learning?",
                  "nl": "Wat is het doel van datanormalisatie in deep learning?"
        },
        options: [
        {
                  "en": "To scale features to similar ranges, improving convergence speed and preventing certain features from dominating",
                  "es": "Para escalar características a rangos similares, mejorando velocidad de convergencia y previniendo que ciertas características dominen",
                  "de": "Um Features auf ähnliche Bereiche zu skalieren, verbessert Konvergenzgeschwindigkeit und verhindert dass bestimmte Features dominieren",
                  "nl": "Om features te schalen naar vergelijkbare bereiken, verbetert convergentiesnelheid en voorkomt dat bepaalde features domineren"
        },
        {
                  "en": "To reduce the size of the dataset",
                  "es": "Para reducir el tamaño del conjunto de datos",
                  "de": "Um die Größe des Datensatzes zu reduzieren",
                  "nl": "Om de grootte van de dataset te verkleinen"
        },
        {
                  "en": "To make data look normal and standard",
                  "es": "Para hacer que los datos se vean normales y estándar",
                  "de": "Um Daten normal und standard aussehen zu lassen",
                  "nl": "Om data er normaal en standaard uit te laten zien"
        },
        {
                  "en": "To remove all negative values from data",
                  "es": "Para eliminar todos los valores negativos de los datos",
                  "de": "Um alle negativen Werte aus den Daten zu entfernen",
                  "nl": "Om alle negatieve waarden uit de data te verwijderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Normalization (like min-max scaling or z-score standardization) ensures all features contribute equally to training, prevents numerical instability, and helps optimization algorithms converge faster.",
                  "es": "La normalización (como escalado min-max o estandarización z-score) asegura que todas las características contribuyan igualmente al entrenamiento, previene inestabilidad numérica, y ayuda a algoritmos de optimización converger más rápido.",
                  "de": "Normalisierung (wie Min-Max-Skalierung oder Z-Score-Standardisierung) stellt sicher dass alle Features gleich zum Training beitragen, verhindert numerische Instabilität und hilft Optimierungsalgorithmen schneller zu konvergieren.",
                  "nl": "Normalisatie (zoals min-max scaling of z-score standaardisatie) zorgt ervoor dat alle features gelijk bijdragen aan training, voorkomt numerieke instabiliteit, en helpt optimalisatiealgoritmes sneller convergeren."
        }
      },
      {
        question: {
                  "en": "What is the chain rule in the context of backpropagation?",
                  "es": "¿Qué es la regla de la cadena en el contexto de la retropropagación?",
                  "de": "Was ist die Kettenregel im Kontext der Backpropagation?",
                  "nl": "Wat is de kettingregel in de context van backpropagation?"
        },
        options: [
        {
                  "en": "A rule about chaining neural networks together",
                  "es": "Una regla sobre encadenar redes neuronales juntas",
                  "de": "Eine Regel über das Verketten neuronaler Netzwerke",
                  "nl": "Een regel over het aan elkaar ketenen van neurale netwerken"
        },
        {
                  "en": "A rule for connecting neurons in chains",
                  "es": "Una regla para conectar neuronas en cadenas",
                  "de": "Eine Regel zum Verbinden von Neuronen in Ketten",
                  "nl": "Een regel voor het verbinden van neuronen in ketens"
        },
        {
                  "en": "A calculus rule that allows computing gradients through composite functions by multiplying partial derivatives",
                  "es": "Una regla de cálculo que permite computar gradientes a través de funciones compuestas multiplicando derivadas parciales",
                  "de": "Eine Kalkülregel die es ermöglicht Gradienten durch zusammengesetzte Funktionen zu berechnen durch Multiplizieren partieller Ableitungen",
                  "nl": "Een calculus regel die het berekenen van gradiënten door samengestelde functies mogelijk maakt door partiële afgeleiden te vermenigvuldigen"
        },
        {
                  "en": "A method for organizing layers in sequence",
                  "es": "Un método para organizar capas en secuencia",
                  "de": "Eine Methode zur Anordnung von Schichten in Reihenfolge",
                  "nl": "Een methode voor het organiseren van lagen in volgorde"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The chain rule enables backpropagation by allowing computation of how the loss function changes with respect to each weight through the composition of functions in the network layers.",
                  "es": "La regla de la cadena habilita retropropagación permitiendo computación de cómo la función de pérdida cambia con respecto a cada peso a través de la composición de funciones en las capas de la red.",
                  "de": "Die Kettenregel ermöglicht Backpropagation durch Erlauben der Berechnung wie die Verlustfunktion sich in Bezug auf jedes Gewicht durch die Komposition von Funktionen in den Netzwerkschichten ändert.",
                  "nl": "De kettingregel maakt backpropagation mogelijk door het berekenen van hoe de verliesfunctie verandert ten opzichte van elk gewicht door de compositie van functies in de netwerklagen."
        }
      },
      {
        question: {
                  "en": "What is curriculum learning in deep learning?",
                  "es": "¿Qué es el aprendizaje curricular en aprendizaje profundo?",
                  "de": "Was ist Curriculum Learning in Deep Learning?",
                  "nl": "Wat is curriculum learning in deep learning?"
        },
        options: [
        {
                  "en": "Learning about school curricula using AI",
                  "es": "Aprender sobre currículos escolares usando IA",
                  "de": "Über Schullehrpläne mit KI lernen",
                  "nl": "Leren over schoolcurricula met AI"
        },
        {
                  "en": "Training on educational datasets only",
                  "es": "Entrenamiento solo en conjuntos de datos educativos",
                  "de": "Training nur auf Bildungsdatensätzen",
                  "nl": "Training alleen op educatieve datasets"
        },
        {
                  "en": "A training strategy that presents data in order of increasing difficulty, mimicking how humans learn",
                  "es": "Una estrategia de entrenamiento que presenta datos en orden de dificultad creciente, imitando cómo aprenden los humanos",
                  "de": "Eine Trainingsstrategie die Daten in Reihenfolge steigender Schwierigkeit präsentiert, ahmt nach wie Menschen lernen",
                  "nl": "Een trainingsstrategie die data presenteert in volgorde van toenemende moeilijkheid, bootst na hoe mensen leren"
        },
        {
                  "en": "A method for designing neural network architectures",
                  "es": "Un método para diseñar arquitecturas de redes neuronales",
                  "de": "Eine Methode zum Entwerfen neuronaler Netzwerkarchitekturen",
                  "nl": "Een methode voor het ontwerpen van neurale netwerkarchitecturen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Curriculum learning can improve model performance and training stability by starting with easier examples and gradually increasing complexity, helping the model build foundational understanding before tackling harder cases.",
                  "es": "El aprendizaje curricular puede mejorar rendimiento del modelo y estabilidad de entrenamiento empezando con ejemplos más fáciles y gradualmente aumentando complejidad, ayudando al modelo construir entendimiento fundamental antes de abordar casos más difíciles.",
                  "de": "Curriculum Learning kann Modellleistung und Trainingsstabilität verbessern durch Beginnen mit einfacheren Beispielen und gradueller Steigerung der Komplexität, hilft dem Modell grundlegendes Verständnis aufzubauen bevor schwierigere Fälle angegangen werden.",
                  "nl": "Curriculum learning kan modelprestaties en trainingsstabiliteit verbeteren door te beginnen met makkelijkere voorbeelden en geleidelijk complexiteit te verhogen, helpt het model fundamenteel begrip op te bouwen voordat moeilijkere gevallen worden aangepakt."
        }
      },
      {
        question: {
                  "en": "What is the difference between local and global minima in optimization?",
                  "es": "¿Cuál es la diferencia entre mínimos locales y globales en optimización?",
                  "de": "Was ist der Unterschied zwischen lokalen und globalen Minima in der Optimierung?",
                  "nl": "Wat is het verschil tussen lokale en globale minima in optimalisatie?"
        },
        options: [
        {
                  "en": "Local minima are lowest points in small regions, global minimum is the lowest point overall in the entire function",
                  "es": "Los mínimos locales son puntos más bajos en regiones pequeñas, el mínimo global es el punto más bajo en general en toda la función",
                  "de": "Lokale Minima sind niedrigste Punkte in kleinen Regionen, globales Minimum ist der niedrigste Punkt insgesamt in der gesamten Funktion",
                  "nl": "Lokale minima zijn laagste punten in kleine regio's, globaal minimum is het laagste punt overall in de gehele functie"
        },
        {
                  "en": "Local minima are for small networks, global for large networks",
                  "es": "Los mínimos locales son para redes pequeñas, globales para redes grandes",
                  "de": "Lokale Minima sind für kleine Netzwerke, globale für große Netzwerke",
                  "nl": "Lokale minima zijn voor kleine netwerken, globaal voor grote netwerken"
        },
        {
                  "en": "Local minima exist in specific countries, global minima exist worldwide",
                  "es": "Los mínimos locales existen en países específicos, los mínimos globales existen en todo el mundo",
                  "de": "Lokale Minima existieren in spezifischen Ländern, globale Minima existieren weltweit",
                  "nl": "Lokale minima bestaan in specifieke landen, globale minima bestaan wereldwijd"
        },
        {
                  "en": "There is no difference between them",
                  "es": "No hay diferencia entre ellos",
                  "de": "Es gibt keinen Unterschied zwischen ihnen",
                  "nl": "Er is geen verschil tussen hen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Deep learning optimization may get trapped in local minima, but research suggests that in high-dimensional spaces, most critical points are saddle points rather than problematic local minima.",
                  "es": "La optimización de aprendizaje profundo puede quedar atrapada en mínimos locales, pero la investigación sugiere que en espacios de alta dimensión, la mayoría de puntos críticos son puntos de silla en lugar de mínimos locales problemáticos.",
                  "de": "Deep Learning Optimierung kann in lokalen Minima gefangen werden, aber Forschung deutet darauf hin dass in hochdimensionalen Räumen die meisten kritischen Punkte Sattelpunkte sind anstatt problematische lokale Minima.",
                  "nl": "Deep learning optimalisatie kan vastzitten in lokale minima, maar onderzoek suggereert dat in hoog-dimensionale ruimtes de meeste kritieke punten zadelpunten zijn in plaats van problematische lokale minima."
        }
      },
      {
        question: {
                  "en": "What is the fundamental principle behind attention mechanisms in deep learning?",
                  "es": "¿Cuál es el principio fundamental detrás de los mecanismos de atención en aprendizaje profundo?",
                  "de": "Was ist das grundlegende Prinzip hinter Aufmerksamkeitsmechanismen im Deep Learning?",
                  "nl": "Wat is het fundamentele principe achter aandachtsmechanismen in deep learning?"
        },
        options: [
        {
                  "en": "Increasing computational attention resources",
                  "es": "Aumentar recursos computacionales de atención",
                  "de": "Aufmerksamkeits-Rechenressourcen erhöhen",
                  "nl": "Computationele aandachtsbronnen verhogen"
        },
        {
                  "en": "Making models pay attention to training time",
                  "es": "Hacer que los modelos presten atención al tiempo de entrenamiento",
                  "de": "Modelle dazu bringen auf Trainingszeit zu achten",
                  "nl": "Modellen laten opletten op trainingstijd"
        },
        {
                  "en": "Allowing models to focus on relevant parts of input when making predictions",
                  "es": "Permitir que los modelos se enfoquen en partes relevantes de la entrada al hacer predicciones",
                  "de": "Modellen ermöglichen sich auf relevante Teile der Eingabe zu konzentrieren beim Treffen von Vorhersagen",
                  "nl": "Modellen toestaan zich te concentreren op relevante delen van de invoer bij het maken van voorspellingen"
        },
        {
                  "en": "Focusing models on hardware optimization",
                  "es": "Enfocar modelos en optimización de hardware",
                  "de": "Modelle auf Hardware-Optimierung fokussieren",
                  "nl": "Modellen focussen op hardware optimalisatie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Attention mechanisms allow neural networks to dynamically focus on different parts of the input sequence or feature map, computing weighted representations based on relevance, greatly improving performance in tasks requiring selective focus.",
                  "es": "Los mecanismos de atención permiten a las redes neuronales enfocarse dinámicamente en diferentes partes de la secuencia de entrada o mapa de características, computando representaciones ponderadas basadas en relevancia, mejorando mucho el rendimiento en tareas que requieren enfoque selectivo.",
                  "de": "Aufmerksamkeitsmechanismen ermöglichen neuronalen Netzwerken sich dynamisch auf verschiedene Teile der Eingabesequenz oder Feature Map zu konzentrieren, berechnen gewichtete Repräsentationen basierend auf Relevanz, verbessern stark die Leistung bei Aufgaben die selektiven Fokus erfordern.",
                  "nl": "Aandachtsmechanismen stellen neurale netwerken in staat dynamisch te focussen op verschillende delen van de invoer sequentie of feature map, berekenen gewogen representaties gebaseerd op relevantie, verbeteren prestaties sterk bij taken die selectieve focus vereisen."
        }
      },
      {
        question: {
                  "en": "What is ResNet and what problem does it solve?",
                  "es": "¿Qué es ResNet y qué problema resuelve?",
                  "de": "Was ist ResNet und welches Problem löst es?",
                  "nl": "Wat is ResNet en welk probleem lost het op?"
        },
        options: [
        {
                  "en": "A network for resetting training progress",
                  "es": "Una red para reiniciar progreso de entrenamiento",
                  "de": "Ein Netzwerk zum Zurücksetzen des Trainingsfortschritts",
                  "nl": "Een netwerk voor het resetten van trainingsvoortgang"
        },
        {
                  "en": "A deep network using skip connections to enable training of very deep networks",
                  "es": "Una red profunda usando conexiones de salto para permitir entrenamiento de redes muy profundas",
                  "de": "Ein tiefes Netzwerk das Skip-Verbindungen verwendet um Training sehr tiefer Netzwerke zu ermöglichen",
                  "nl": "Een diep netwerk dat skip connections gebruikt om training van zeer diepe netwerken mogelijk te maken"
        },
        {
                  "en": "A resource management network",
                  "es": "Una red de gestión de recursos",
                  "de": "Ein Ressourcenverwaltungsnetzwerk",
                  "nl": "Een resource management netwerk"
        },
        {
                  "en": "A residential network architecture",
                  "es": "Una arquitectura de red residencial",
                  "de": "Eine Wohnnetzarchitektur",
                  "nl": "Een residentiële netwerkarchitectuur"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "ResNet introduces skip connections that add the input of a block directly to its output, mitigating vanishing gradients and enabling successful training of networks with hundreds of layers.",
                  "es": "ResNet introduce conexiones de salto que agregan la entrada de un bloque directamente a su salida, mitigando gradientes que desaparecen y permitiendo entrenamiento exitoso de redes con cientos de capas.",
                  "de": "ResNet führt Skip-Verbindungen ein die die Eingabe eines Blocks direkt zu seiner Ausgabe hinzufügen, mildert verschwindende Gradienten und ermöglicht erfolgreiches Training von Netzwerken mit Hunderten von Schichten.",
                  "nl": "ResNet introduceert skip connections die de input van een blok direct aan zijn output toevoegen, verzacht verdwijnende gradiënten en maakt succesvolle training van netwerken met honderden lagen mogelijk."
        }
      },
      {
        question: {
                  "en": "What is DenseNet and how does it differ from ResNet?",
                  "es": "¿Qué es DenseNet y en qué difiere de ResNet?",
                  "de": "Was ist DenseNet und wie unterscheidet es sich von ResNet?",
                  "nl": "Wat is DenseNet en hoe verschilt het van ResNet?"
        },
        options: [
        {
                  "en": "DenseNet is denser in parameters than ResNet",
                  "es": "DenseNet es más denso en parámetros que ResNet",
                  "de": "DenseNet ist dichter in Parametern als ResNet",
                  "nl": "DenseNet is dichter in parameters dan ResNet"
        },
        {
                  "en": "DenseNet connects each layer to all subsequent layers, ResNet only skips over blocks",
                  "es": "DenseNet conecta cada capa a todas las capas subsiguientes, ResNet solo salta sobre bloques",
                  "de": "DenseNet verbindet jede Schicht mit allen nachfolgenden Schichten, ResNet überspringt nur Blöcke",
                  "nl": "DenseNet verbindt elke laag met alle volgende lagen, ResNet slaat alleen blokken over"
        },
        {
                  "en": "DenseNet is for dense data only",
                  "es": "DenseNet es solo para datos densos",
                  "de": "DenseNet ist nur für dichte Daten",
                  "nl": "DenseNet is alleen voor dense data"
        },
        {
                  "en": "They are the same architecture",
                  "es": "Son la misma arquitectura",
                  "de": "Sie sind dieselbe Architektur",
                  "nl": "Het zijn dezelfde architectuur"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "DenseNet uses dense connectivity where each layer receives feature maps from all previous layers, promoting feature reuse and reducing parameters compared to traditional networks while maintaining performance.",
                  "es": "DenseNet usa conectividad densa donde cada capa recibe mapas de características de todas las capas previas, promoviendo reutilización de características y reduciendo parámetros comparado con redes tradicionales mientras mantiene rendimiento.",
                  "de": "DenseNet verwendet dichte Konnektivität wo jede Schicht Feature Maps von allen vorherigen Schichten erhält, fördert Feature-Wiederverwendung und reduziert Parameter im Vergleich zu traditionellen Netzwerken bei Beibehaltung der Leistung.",
                  "nl": "DenseNet gebruikt dense connectivity waarbij elke laag feature maps ontvangt van alle eerdere lagen, bevordert feature hergebruik en vermindert parameters vergeleken met traditionele netwerken terwijl prestaties behouden blijven."
        }
      },
      {
        question: {
                  "en": "What is the Leaky ReLU activation function?",
                  "es": "¿Qué es la función de activación Leaky ReLU?",
                  "de": "Was ist die Leaky ReLU Aktivierungsfunktion?",
                  "nl": "Wat is de Leaky ReLU activatiefunctie?"
        },
        options: [
        {
                  "en": "ReLU with data leakage",
                  "es": "ReLU con fuga de datos",
                  "de": "ReLU mit Datenleck",
                  "nl": "ReLU met datalekken"
        },
        {
                  "en": "A variant of ReLU with a small slope for negative values instead of zero",
                  "es": "Una variante de ReLU con pendiente pequeña para valores negativos en lugar de cero",
                  "de": "Eine Variante von ReLU mit kleiner Steigung für negative Werte anstatt Null",
                  "nl": "Een variant van ReLU met een kleine helling voor negatieve waarden in plaats van nul"
        },
        {
                  "en": "A version that outputs random leaks",
                  "es": "Una versión que produce fugas aleatorias",
                  "de": "Eine Version die zufällige Lecks ausgibt",
                  "nl": "Een versie die willekeurige lekken produceert"
        },
        {
                  "en": "A ReLU that leaks memory",
                  "es": "Un ReLU que pierde memoria",
                  "de": "Ein ReLU das Speicher verliert",
                  "nl": "Een ReLU die geheugen lekt"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Leaky ReLU solves the dying ReLU problem by allowing a small, non-zero gradient when x < 0 (typically 0.01x), preventing neurons from becoming permanently inactive during training.",
                  "es": "Leaky ReLU resuelve el problema de ReLU muriendo permitiendo un gradiente pequeño no cero cuando x < 0 (típicamente 0.01x), previniendo que neuronas se vuelvan permanentemente inactivas durante entrenamiento.",
                  "de": "Leaky ReLU löst das Dying ReLU Problem durch Erlauben eines kleinen nicht-null Gradienten wenn x < 0 (typischerweise 0.01x), verhindert dass Neuronen während Training dauerhaft inaktiv werden.",
                  "nl": "Leaky ReLU lost het dying ReLU probleem op door een kleine, niet-nul gradiënt toe te staan wanneer x < 0 (typisch 0.01x), voorkomt dat neuronen permanent inactief worden tijdens training."
        }
      },
      {
        question: {
                  "en": "What is Xavier initialization?",
                  "es": "¿Qué es la inicialización Xavier?",
                  "de": "Was ist Xavier-Initialisierung?",
                  "nl": "Wat is Xavier initialisatie?"
        },
        options: [
        {
                  "en": "Setting all weights to X values",
                  "es": "Establecer todos los pesos a valores X",
                  "de": "Alle Gewichte auf X-Werte setzen",
                  "nl": "Alle gewichten instellen op X waarden"
        },
        {
                  "en": "A weight initialization method that scales weights based on number of input and output neurons",
                  "es": "Un método de inicialización de pesos que escala pesos según número de neuronas de entrada y salida",
                  "de": "Eine Gewichtsinitialisierungsmethode die Gewichte basierend auf Anzahl von Eingabe- und Ausgabeneuronen skaliert",
                  "nl": "Een gewicht initialisatie methode die gewichten schaalt gebaseerd op aantal input en output neuronen"
        },
        {
                  "en": "A type of activation function",
                  "es": "Un tipo de función de activación",
                  "de": "Eine Art Aktivierungsfunktion",
                  "nl": "Een type activatiefunctie"
        },
        {
                  "en": "A person who invented neural networks",
                  "es": "Una persona que inventó redes neuronales",
                  "de": "Eine Person die neuronale Netzwerke erfunden hat",
                  "nl": "Een persoon die neurale netwerken uitvond"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Xavier initialization sets weights with variance inversely proportional to the average of input and output dimensions, helping maintain signal variance across layers and preventing vanishing/exploding gradients in sigmoid/tanh networks.",
                  "es": "Inicialización Xavier establece pesos con varianza inversamente proporcional al promedio de dimensiones de entrada y salida, ayudando mantener varianza de señal a través de capas y previniendo gradientes que desaparecen/explotan en redes sigmoid/tanh.",
                  "de": "Xavier-Initialisierung setzt Gewichte mit Varianz umgekehrt proportional zum Durchschnitt von Eingabe- und Ausgabedimensionen, hilft Signalvarianz über Schichten zu erhalten und verhindert verschwindende/explodierende Gradienten in Sigmoid/Tanh-Netzwerken.",
                  "nl": "Xavier initialisatie stelt gewichten in met variantie omgekeerd evenredig aan het gemiddelde van input en output dimensies, helpt signaaldvariantie over lagen te behouden en voorkomt verdwijnende/exploderende gradiënten in sigmoid/tanh netwerken."
        }
      },
      {
        question: {
                  "en": "What is He initialization and when should it be used?",
                  "es": "¿Qué es la inicialización He y cuándo debe usarse?",
                  "de": "Was ist He-Initialisierung und wann sollte sie verwendet werden?",
                  "nl": "Wat is He initialisatie en wanneer moet het gebruikt worden?"
        },
        options: [
        {
                  "en": "Initialization for health monitoring networks",
                  "es": "Inicialización para redes de monitoreo de salud",
                  "de": "Initialisierung für Gesundheitsüberwachungsnetzwerke",
                  "nl": "Initialisatie voor gezondheidsmonitoring netwerken"
        },
        {
                  "en": "A high-energy initialization",
                  "es": "Una inicialización de alta energía",
                  "de": "Eine hochenergetische Initialisierung",
                  "nl": "Een hoge-energie initialisatie"
        },
        {
                  "en": "Initialization method named after a male pronoun",
                  "es": "Método de inicialización nombrado por un pronombre masculino",
                  "de": "Initialisierungsmethode benannt nach einem männlichen Pronomen",
                  "nl": "Initialisatie methode vernoemd naar een mannelijk voornaamwoord"
        },
        {
                  "en": "Weight initialization optimized for ReLU activations, using variance scaled by 2/n_in",
                  "es": "Inicialización de pesos optimizada para activaciones ReLU, usando varianza escalada por 2/n_in",
                  "de": "Gewichtsinitialisierung optimiert für ReLU-Aktivierungen, verwendet Varianz skaliert mit 2/n_in",
                  "nl": "Gewicht initialisatie geoptimaliseerd voor ReLU activaties, gebruikt variantie geschaald met 2/n_in"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "He initialization is specifically designed for ReLU and variants, accounting for the fact that ReLU zeros out half the activations, maintaining proper variance throughout deep ReLU networks.",
                  "es": "Inicialización He está específicamente diseñada para ReLU y variantes, teniendo en cuenta que ReLU pone a cero la mitad de las activaciones, manteniendo varianza apropiada a través de redes ReLU profundas.",
                  "de": "He-Initialisierung ist speziell für ReLU und Varianten entwickelt, berücksichtigt dass ReLU die Hälfte der Aktivierungen auf null setzt, erhält richtige Varianz durch tiefe ReLU-Netzwerke.",
                  "nl": "He initialisatie is specifiek ontworpen voor ReLU en varianten, houdt rekening met het feit dat ReLU de helft van de activaties op nul zet, behoudt juiste variantie door diepe ReLU netwerken."
        }
      },
      {
        question: {
                  "en": "What is the purpose of global average pooling?",
                  "es": "¿Cuál es el propósito del pooling de promedio global?",
                  "de": "Was ist der Zweck von Global Average Pooling?",
                  "nl": "Wat is het doel van global average pooling?"
        },
        options: [
        {
                  "en": "Pooling from global datasets",
                  "es": "Pooling de conjuntos de datos globales",
                  "de": "Pooling aus globalen Datensätzen",
                  "nl": "Pooling uit globale datasets"
        },
        {
                  "en": "Average pooling across multiple networks",
                  "es": "Pooling promedio a través de múltiples redes",
                  "de": "Durchschnittliches Pooling über mehrere Netzwerke",
                  "nl": "Gemiddelde pooling over meerdere netwerken"
        },
        {
                  "en": "International data pooling",
                  "es": "Pooling de datos internacional",
                  "de": "Internationales Daten-Pooling",
                  "nl": "Internationaal data pooling"
        },
        {
                  "en": "Reducing each feature map to a single value by averaging, replacing fully connected layers",
                  "es": "Reducir cada mapa de características a un solo valor promediando, reemplazando capas completamente conectadas",
                  "de": "Jede Feature Map auf einen einzelnen Wert reduzieren durch Mittelung, ersetzt vollständig verbundene Schichten",
                  "nl": "Elke feature map reduceren tot één enkele waarde door te middelen, vervangt volledig verbonden lagen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Global average pooling reduces spatial dimensions to 1×1 by averaging each feature map, drastically reducing parameters compared to dense layers while maintaining spatial information and reducing overfitting.",
                  "es": "Pooling de promedio global reduce dimensiones espaciales a 1×1 promediando cada mapa de características, reduciendo drásticamente parámetros comparado con capas densas mientras mantiene información espacial y reduce sobreajuste.",
                  "de": "Global Average Pooling reduziert räumliche Dimensionen auf 1×1 durch Mittelung jeder Feature Map, reduziert drastisch Parameter im Vergleich zu dichten Schichten während räumliche Information erhalten bleibt und Overfitting reduziert wird.",
                  "nl": "Global average pooling vermindert ruimtelijke dimensies tot 1×1 door elke feature map te middelen, vermindert drastisch parameters vergeleken met dense lagen terwijl ruimtelijke informatie behouden blijft en overfitting vermindert."
        }
      },
      {
        question: {
                  "en": "What is label smoothing in classification?",
                  "es": "¿Qué es el suavizado de etiquetas en clasificación?",
                  "de": "Was ist Label Smoothing in der Klassifikation?",
                  "nl": "Wat is label smoothing in classificatie?"
        },
        options: [
        {
                  "en": "A regularization technique that softens hard targets by assigning small probabilities to incorrect classes",
                  "es": "Una técnica de regularización que suaviza objetivos duros asignando probabilidades pequeñas a clases incorrectas",
                  "de": "Eine Regularisierungstechnik die harte Ziele weicher macht durch Zuweisen kleiner Wahrscheinlichkeiten zu falschen Klassen",
                  "nl": "Een regularisatie techniek die harde doelen verzacht door kleine waarschijnlijkheden toe te wijzen aan incorrecte klassen"
        },
        {
                  "en": "Smoothing transitions between labels",
                  "es": "Suavizar transiciones entre etiquetas",
                  "de": "Übergänge zwischen Etiketten glätten",
                  "nl": "Overgangen tussen labels gladstrijken"
        },
        {
                  "en": "Making label text smoother for reading",
                  "es": "Hacer texto de etiquetas más suave para leer",
                  "de": "Etikettentext glatter zum Lesen machen",
                  "nl": "Label tekst gladder maken voor lezen"
        },
        {
                  "en": "Averaging similar labels together",
                  "es": "Promediar etiquetas similares juntas",
                  "de": "Ähnliche Etiketten zusammen mitteln",
                  "nl": "Vergelijkbare labels samen middelen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Label smoothing prevents overconfident predictions by using soft labels (e.g., 0.9 for correct class, 0.1 distributed among others) instead of hard one-hot encoding, improving generalization and calibration.",
                  "es": "Suavizado de etiquetas previene predicciones sobreconseguras usando etiquetas suaves (ej. 0.9 para clase correcta, 0.1 distribuido entre otras) en lugar de codificación one-hot dura, mejorando generalización y calibración.",
                  "de": "Label Smoothing verhindert übersichere Vorhersagen durch Verwendung weicher Labels (z.B. 0.9 für korrekte Klasse, 0.1 verteilt auf andere) anstatt harter One-Hot-Kodierung, verbessert Generalisierung und Kalibrierung.",
                  "nl": "Label smoothing voorkomt te zelfverzekerde voorspellingen door zachte labels te gebruiken (bijv. 0.9 voor correcte klasse, 0.1 verdeeld over anderen) in plaats van harde one-hot encoding, verbetert generalisatie en kalibratie."
        }
      },
      {
        question: {
                  "en": "What is mixup data augmentation?",
                  "es": "¿Qué es el aumento de datos mixup?",
                  "de": "Was ist Mixup-Datenaugmentation?",
                  "nl": "Wat is mixup data augmentatie?"
        },
        options: [
        {
                  "en": "Mixing different datasets together",
                  "es": "Mezclar diferentes conjuntos de datos juntos",
                  "de": "Verschiedene Datensätze zusammenmischen",
                  "nl": "Verschillende datasets samen mengen"
        },
        {
                  "en": "Augmenting by mixing colors",
                  "es": "Aumentar mezclando colores",
                  "de": "Augmentieren durch Farbmischung",
                  "nl": "Augmenteren door kleuren te mengen"
        },
        {
                  "en": "Training on linear interpolations of pairs of examples and their labels",
                  "es": "Entrenar en interpolaciones lineales de pares de ejemplos y sus etiquetas",
                  "de": "Training auf linearen Interpolationen von Beispielpaaren und ihren Labels",
                  "nl": "Trainen op lineaire interpolaties van paren voorbeelden en hun labels"
        },
        {
                  "en": "Randomly mixing training batches",
                  "es": "Mezclar aleatoriamente lotes de entrenamiento",
                  "de": "Trainingsbatches zufällig mischen",
                  "nl": "Willekeurig training batches mengen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Mixup creates virtual training examples by blending two images and their labels (e.g., 0.7×image1 + 0.3×image2), encouraging smoother decision boundaries and improved robustness to adversarial examples.",
                  "es": "Mixup crea ejemplos de entrenamiento virtuales mezclando dos imágenes y sus etiquetas (ej. 0.7×imagen1 + 0.3×imagen2), fomentando límites de decisión más suaves y robustez mejorada a ejemplos adversarios.",
                  "de": "Mixup erstellt virtuelle Trainingsbeispiele durch Mischen zweier Bilder und ihrer Labels (z.B. 0.7×Bild1 + 0.3×Bild2), fördert glattere Entscheidungsgrenzen und verbesserte Robustheit gegen adversarielle Beispiele.",
                  "nl": "Mixup creëert virtuele trainingsvoorbeelden door twee afbeeldingen en hun labels te mengen (bijv. 0.7×afbeelding1 + 0.3×afbeelding2), moedigt gladdere beslissingsgrenzen aan en verbeterde robuustheid tegen adversariele voorbeelden."
        }
      },
      {
        question: {
                  "en": "What is the purpose of temperature in softmax?",
                  "es": "¿Cuál es el propósito de la temperatura en softmax?",
                  "de": "Was ist der Zweck der Temperatur in Softmax?",
                  "nl": "Wat is het doel van temperature in softmax?"
        },
        options: [
        {
                  "en": "Controlling how sharp or smooth the output probability distribution is",
                  "es": "Controlar qué tan aguda o suave es la distribución de probabilidad de salida",
                  "de": "Kontrollieren wie scharf oder glatt die Ausgabewahrscheinlichkeitsverteilung ist",
                  "nl": "Controleren hoe scherp of glad de uitvoer waarschijnlijkheidsverdeling is"
        },
        {
                  "en": "Measuring training heat",
                  "es": "Medir calor de entrenamiento",
                  "de": "Trainingshitze messen",
                  "nl": "Trainingshitte meten"
        },
        {
                  "en": "Monitoring GPU temperature",
                  "es": "Monitorear temperatura de GPU",
                  "de": "GPU-Temperatur überwachen",
                  "nl": "GPU temperatuur monitoren"
        },
        {
                  "en": "Cooling down neural networks",
                  "es": "Enfriar redes neuronales",
                  "de": "Neuronale Netzwerke abkühlen",
                  "nl": "Neurale netwerken afkoelen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Temperature scaling divides logits before softmax: T>1 softens probabilities (more uncertainty), T<1 sharpens them (more confidence), useful in knowledge distillation and ensemble methods.",
                  "es": "Escalado de temperatura divide logits antes de softmax: T>1 suaviza probabilidades (más incertidumbre), T<1 las agudiza (más confianza), útil en destilación de conocimiento y métodos de conjunto.",
                  "de": "Temperaturskalierung teilt Logits vor Softmax: T>1 macht Wahrscheinlichkeiten weicher (mehr Unsicherheit), T<1 schärft sie (mehr Vertrauen), nützlich bei Knowledge Distillation und Ensemble-Methoden.",
                  "nl": "Temperature scaling deelt logits voor softmax: T>1 verzacht waarschijnlijkheden (meer onzekerheid), T<1 scherpt ze aan (meer vertrouwen), nuttig bij knowledge distillation en ensemble methoden."
        }
      },
      {
        question: {
                  "en": "What is cosine annealing for learning rate scheduling?",
                  "es": "¿Qué es el recocido coseno para programación de tasa de aprendizaje?",
                  "de": "Was ist Cosine Annealing für Lernraten-Scheduling?",
                  "nl": "Wat is cosine annealing voor learning rate scheduling?"
        },
        options: [
        {
                  "en": "Decreasing learning rate following a cosine curve from initial to minimum value",
                  "es": "Disminuir tasa de aprendizaje siguiendo curva coseno de valor inicial a mínimo",
                  "de": "Lernrate verringern entlang einer Kosinuskurve von Anfangs- zu Minimalwert",
                  "nl": "Learning rate verminderen volgens een cosinus curve van initiële naar minimum waarde"
        },
        {
                  "en": "Annealing with cosine activation functions",
                  "es": "Recocido con funciones de activación coseno",
                  "de": "Annealing mit Kosinus-Aktivierungsfunktionen",
                  "nl": "Annealing met cosinus activatiefuncties"
        },
        {
                  "en": "Scheduling based on cosine similarity",
                  "es": "Programación basada en similitud coseno",
                  "de": "Scheduling basierend auf Kosinus-Ähnlichkeit",
                  "nl": "Scheduling gebaseerd op cosinus similariteit"
        },
        {
                  "en": "Using cosine waves for data augmentation",
                  "es": "Usar ondas coseno para aumento de datos",
                  "de": "Kosinuswellen für Datenaugmentation verwenden",
                  "nl": "Cosinus golven gebruiken voor data augmentatie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Cosine annealing smoothly decreases learning rate following a cosine function, often with warm restarts, allowing escape from local minima and potentially finding better solutions through periodic exploration.",
                  "es": "Recocido coseno disminuye suavemente tasa de aprendizaje siguiendo función coseno, a menudo con reinicios cálidos, permitiendo escape de mínimos locales y potencialmente encontrar mejores soluciones mediante exploración periódica.",
                  "de": "Cosine Annealing verringert Lernrate glatt entlang einer Kosinusfunktion, oft mit warmen Neustarts, ermöglicht Entkommen aus lokalen Minima und potentiell bessere Lösungen durch periodische Exploration.",
                  "nl": "Cosine annealing vermindert learning rate glad volgens een cosinus functie, vaak met warme herstarts, maakt ontsnappen uit lokale minima mogelijk en mogelijk betere oplossingen vinden door periodieke exploratie."
        }
      },
      {
        question: {
                  "en": "What is the purpose of warmup in learning rate scheduling?",
                  "es": "¿Cuál es el propósito del calentamiento en programación de tasa de aprendizaje?",
                  "de": "Was ist der Zweck von Warmup in Lernraten-Scheduling?",
                  "nl": "Wat is het doel van warmup in learning rate scheduling?"
        },
        options: [
        {
                  "en": "Initial test run of the model",
                  "es": "Ejecución de prueba inicial del modelo",
                  "de": "Initialer Testlauf des Modells",
                  "nl": "Initiële testrun van het model"
        },
        {
                  "en": "Warming up the GPU before training",
                  "es": "Calentar la GPU antes de entrenar",
                  "de": "Die GPU vor Training aufwärmen",
                  "nl": "De GPU opwarmen voor training"
        },
        {
                  "en": "Preparing data before training",
                  "es": "Preparar datos antes de entrenar",
                  "de": "Daten vor Training vorbereiten",
                  "nl": "Data voorbereiden voor training"
        },
        {
                  "en": "Gradually increasing learning rate from low to target value at training start",
                  "es": "Aumentar gradualmente tasa de aprendizaje de bajo a valor objetivo al inicio de entrenamiento",
                  "de": "Lernrate allmählich von niedrig zu Zielwert am Trainingsstart erhöhen",
                  "nl": "Geleidelijk learning rate verhogen van laag naar doelwaarde bij trainingsstart"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Warmup prevents instability at training start when weights are randomly initialized, gradually increasing learning rate over initial steps allows the model to stabilize before full-speed optimization.",
                  "es": "Calentamiento previene inestabilidad al inicio de entrenamiento cuando pesos están inicializados aleatoriamente, aumentar gradualmente tasa de aprendizaje durante pasos iniciales permite al modelo estabilizarse antes de optimización a velocidad completa.",
                  "de": "Warmup verhindert Instabilität am Trainingsstart wenn Gewichte zufällig initialisiert sind, allmähliches Erhöhen der Lernrate über anfängliche Schritte ermöglicht dem Modell zu stabilisieren vor Vollgeschwindigkeits-Optimierung.",
                  "nl": "Warmup voorkomt instabiliteit bij trainingsstart wanneer gewichten willekeurig geïnitialiseerd zijn, geleidelijk verhogen van learning rate over initiële stappen maakt het model mogelijk te stabiliseren voor volledige snelheid optimalisatie."
        }
      },
      {
        question: {
                  "en": "What is gradient accumulation?",
                  "es": "¿Qué es la acumulación de gradientes?",
                  "de": "Was ist Gradientenakkumulation?",
                  "nl": "Wat is gradient accumulation?"
        },
        options: [
        {
                  "en": "Summing gradients over multiple mini-batches before updating weights",
                  "es": "Sumar gradientes sobre múltiples mini-lotes antes de actualizar pesos",
                  "de": "Gradienten über mehrere Mini-Batches summieren vor Gewichtsaktualisierung",
                  "nl": "Gradiënten optellen over meerdere mini-batches voor gewichten bij te werken"
        },
        {
                  "en": "Accumulating errors over time",
                  "es": "Acumular errores con el tiempo",
                  "de": "Fehler über Zeit akkumulieren",
                  "nl": "Fouten accumuleren over tijd"
        },
        {
                  "en": "Saving gradients for later use",
                  "es": "Guardar gradientes para uso posterior",
                  "de": "Gradienten für spätere Verwendung speichern",
                  "nl": "Gradiënten bewaren voor later gebruik"
        },
        {
                  "en": "Building up gradient values",
                  "es": "Construir valores de gradiente",
                  "de": "Gradientenwerte aufbauen",
                  "nl": "Gradiënt waarden opbouwen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Gradient accumulation simulates larger batch sizes when memory is limited by accumulating gradients from several forward/backward passes before performing weight updates, trading computation time for memory.",
                  "es": "Acumulación de gradientes simula tamaños de lote más grandes cuando memoria es limitada acumulando gradientes de varios pases adelante/atrás antes de realizar actualizaciones de pesos, intercambiando tiempo de cómputo por memoria.",
                  "de": "Gradientenakkumulation simuliert größere Batch-Größen wenn Speicher begrenzt ist durch Akkumulieren von Gradienten aus mehreren Vorwärts/Rückwärts-Durchläufen vor Gewichtsaktualisierungen, tauscht Rechenzeit gegen Speicher.",
                  "nl": "Gradient accumulation simuleert grotere batch groottes wanneer geheugen beperkt is door gradiënten te accumuleren van verschillende forward/backward passes voor gewicht updates uit te voeren, ruilt rekentijd voor geheugen."
        }
      },
      {
        question: {
                  "en": "What is the difference between batch normalization and layer normalization?",
                  "es": "¿Cuál es la diferencia entre normalización por lotes y normalización por capas?",
                  "de": "Was ist der Unterschied zwischen Batch-Normalisierung und Layer-Normalisierung?",
                  "nl": "Wat is het verschil tussen batch normalization en layer normalization?"
        },
        options: [
        {
                  "en": "They are the same technique",
                  "es": "Son la misma técnica",
                  "de": "Sie sind dieselbe Technik",
                  "nl": "Het zijn dezelfde techniek"
        },
        {
                  "en": "Layer norm is only for RNNs",
                  "es": "Norm por capas es solo para RNNs",
                  "de": "Layer Norm ist nur für RNNs",
                  "nl": "Layer norm is alleen voor RNNs"
        },
        {
                  "en": "Batch norm is faster than layer norm",
                  "es": "Norm por lotes es más rápido que norm por capas",
                  "de": "Batch Norm ist schneller als Layer Norm",
                  "nl": "Batch norm is sneller dan layer norm"
        },
        {
                  "en": "Batch norm normalizes across batch dimension, layer norm across feature dimension",
                  "es": "Norm por lotes normaliza a través de dimensión de lote, norm por capas a través de dimensión de características",
                  "de": "Batch Norm normalisiert über Batch-Dimension, Layer Norm über Feature-Dimension",
                  "nl": "Batch norm normaliseert over batch dimensie, layer norm over feature dimensie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Batch normalization normalizes across the batch for each feature, while layer normalization normalizes across all features for each example, making layer norm more suitable for RNNs and small batches.",
                  "es": "Normalización por lotes normaliza a través del lote para cada característica, mientras normalización por capas normaliza a través de todas las características para cada ejemplo, haciendo norm por capas más adecuada para RNNs y lotes pequeños.",
                  "de": "Batch-Normalisierung normalisiert über den Batch für jedes Feature, während Layer-Normalisierung über alle Features für jedes Beispiel normalisiert, macht Layer Norm geeigneter für RNNs und kleine Batches.",
                  "nl": "Batch normalization normaliseert over de batch voor elke feature, terwijl layer normalization normaliseert over alle features voor elk voorbeeld, maakt layer norm geschikter voor RNNs en kleine batches."
        }
      },
      {
        question: {
                  "en": "What is weight decay and how does it relate to L2 regularization?",
                  "es": "¿Qué es el decaimiento de pesos y cómo se relaciona con la regularización L2?",
                  "de": "Was ist Weight Decay und wie bezieht es sich auf L2-Regularisierung?",
                  "nl": "Wat is weight decay en hoe verhoudt het zich tot L2 regularisatie?"
        },
        options: [
        {
                  "en": "Weights naturally decay over time",
                  "es": "Pesos naturalmente decaen con el tiempo",
                  "de": "Gewichte zerfallen natürlich über Zeit",
                  "nl": "Gewichten vervallen natuurlijk over tijd"
        },
        {
                  "en": "Removing old weights from network",
                  "es": "Eliminar pesos viejos de la red",
                  "de": "Alte Gewichte aus Netzwerk entfernen",
                  "nl": "Oude gewichten uit netwerk verwijderen"
        },
        {
                  "en": "Weight decay directly shrinks weights during optimization, equivalent to L2 for standard SGD",
                  "es": "Decaimiento de pesos encoge directamente pesos durante optimización, equivalente a L2 para SGD estándar",
                  "de": "Weight Decay schrumpft Gewichte direkt während Optimierung, äquivalent zu L2 für Standard-SGD",
                  "nl": "Weight decay krimpt gewichten direct tijdens optimalisatie, equivalent aan L2 voor standaard SGD"
        },
        {
                  "en": "Weights becoming weaker",
                  "es": "Pesos volviéndose más débiles",
                  "de": "Gewichte werden schwächer",
                  "nl": "Gewichten worden zwakker"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Weight decay multiplies weights by a factor slightly less than 1 each step (e.g., 0.9999), effectively the same as L2 regularization for SGD but differs for adaptive optimizers like Adam.",
                  "es": "Decaimiento de pesos multiplica pesos por factor ligeramente menor que 1 cada paso (ej. 0.9999), efectivamente igual que regularización L2 para SGD pero difiere para optimizadores adaptativos como Adam.",
                  "de": "Weight Decay multipliziert Gewichte mit einem Faktor leicht weniger als 1 jeden Schritt (z.B. 0.9999), effektiv dasselbe wie L2-Regularisierung für SGD aber unterscheidet sich für adaptive Optimierer wie Adam.",
                  "nl": "Weight decay vermenigvuldigt gewichten met een factor iets minder dan 1 elke stap (bijv. 0.9999), effectief hetzelfde als L2 regularisatie voor SGD maar verschilt voor adaptieve optimizers zoals Adam."
        }
      },
      {
        question: {
                  "en": "What is the role of skip connections in training deep networks?",
                  "es": "¿Cuál es el rol de las conexiones de salto en entrenar redes profundas?",
                  "de": "Was ist die Rolle von Skip-Verbindungen beim Training tiefer Netzwerke?",
                  "nl": "Wat is de rol van skip connections in het trainen van diepe netwerken?"
        },
        options: [
        {
                  "en": "Bypassing entire network sections",
                  "es": "Evitar secciones enteras de red",
                  "de": "Ganze Netzwerksektionen umgehen",
                  "nl": "Hele netwerk secties omzeilen"
        },
        {
                  "en": "Skipping unnecessary computations",
                  "es": "Saltar computaciones innecesarias",
                  "de": "Unnötige Berechnungen überspringen",
                  "nl": "Onnodige berekeningen overslaan"
        },
        {
                  "en": "Providing gradient highways that allow direct flow to early layers",
                  "es": "Proporcionar autopistas de gradiente que permiten flujo directo a capas tempranas",
                  "de": "Bereitstellen von Gradienten-Highways die direkten Fluss zu frühen Schichten ermöglichen",
                  "nl": "Bieden van gradiënt snelwegen die directe stroom naar vroege lagen mogelijk maken"
        },
        {
                  "en": "Connecting non-adjacent layers randomly",
                  "es": "Conectar capas no adyacentes aleatoriamente",
                  "de": "Nicht-benachbarte Schichten zufällig verbinden",
                  "nl": "Niet-aangrenzende lagen willekeurig verbinden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Skip connections create identity mappings that allow gradients to flow directly backward, preventing degradation as networks get deeper and enabling training of networks with hundreds of layers successfully.",
                  "es": "Conexiones de salto crean mapeos de identidad que permiten a gradientes fluir directamente hacia atrás, previniendo degradación a medida que redes se vuelven más profundas y permitiendo entrenar redes con cientos de capas exitosamente.",
                  "de": "Skip-Verbindungen erstellen Identitätsabbildungen die Gradienten ermöglichen direkt rückwärts zu fließen, verhindern Degradierung wenn Netzwerke tiefer werden und ermöglichen erfolgreiches Training von Netzwerken mit Hunderten von Schichten.",
                  "nl": "Skip connections creëren identiteitsmappings die gradiënten toestaan direct achterwaarts te stromen, voorkomen degradatie naarmate netwerken dieper worden en maken succesvolle training van netwerken met honderden lagen mogelijk."
        }
      },
      {
        question: {
                  "en": "What is the 1x1 convolution and what is it used for?",
                  "es": "¿Qué es la convolución 1x1 y para qué se usa?",
                  "de": "Was ist die 1x1-Faltung und wofür wird sie verwendet?",
                  "nl": "Wat is de 1x1 convolutie en waarvoor wordt het gebruikt?"
        },
        options: [
        {
                  "en": "A pointwise convolution for changing channel dimensions and adding non-linearity",
                  "es": "Una convolución puntual para cambiar dimensiones de canal y agregar no linealidad",
                  "de": "Eine punktweise Faltung zum Ändern von Kanaldimensionen und Hinzufügen von Nichtlinearität",
                  "nl": "Een puntsgewijze convolutie voor het veranderen van kanaaldimensies en toevoegen van non-lineariteit"
        },
        {
                  "en": "The smallest possible convolution",
                  "es": "La convolución más pequeña posible",
                  "de": "Die kleinstmögliche Faltung",
                  "nl": "De kleinst mogelijke convolutie"
        },
        {
                  "en": "A convolution that does nothing",
                  "es": "Una convolución que no hace nada",
                  "de": "Eine Faltung die nichts tut",
                  "nl": "Een convolutie die niets doet"
        },
        {
                  "en": "Convolution for 1-pixel images",
                  "es": "Convolución para imágenes de 1 píxel",
                  "de": "Faltung für 1-Pixel-Bilder",
                  "nl": "Convolutie voor 1-pixel afbeeldingen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "1x1 convolutions project channel dimensions, reduce computational cost (bottleneck layers), and add non-linearity without affecting spatial dimensions, widely used in inception and residual networks.",
                  "es": "Convoluciones 1x1 proyectan dimensiones de canal, reducen costo computacional (capas de cuello de botella), y agregan no linealidad sin afectar dimensiones espaciales, ampliamente usadas en redes inception y residuales.",
                  "de": "1x1-Faltungen projizieren Kanaldimensionen, reduzieren Rechenkosten (Bottleneck-Schichten), und fügen Nichtlinearität hinzu ohne räumliche Dimensionen zu beeinflussen, weit verbreitet in Inception- und Residualnetzwerken.",
                  "nl": "1x1 convoluties projecteren kanaaldimensies, verminderen computationele kosten (bottleneck lagen), en voegen non-lineariteit toe zonder ruimtelijke dimensies te beïnvloeden, veel gebruikt in inception en residuele netwerken."
        }
      },
      {
        question: {
                  "en": "What is the purpose of depthwise separable convolution?",
                  "es": "¿Cuál es el propósito de la convolución separable en profundidad?",
                  "de": "Was ist der Zweck der depthwise separable Faltung?",
                  "nl": "Wat is het doel van depthwise separable convolution?"
        },
        options: [
        {
                  "en": "Separating training and testing",
                  "es": "Separar entrenamiento y prueba",
                  "de": "Training und Testing trennen",
                  "nl": "Training en testing scheiden"
        },
        {
                  "en": "Reducing parameters and computation by separating spatial and channel-wise convolutions",
                  "es": "Reducir parámetros y computación separando convoluciones espaciales y por canal",
                  "de": "Parameter und Berechnungen reduzieren durch Trennung räumlicher und kanalweiser Faltungen",
                  "nl": "Parameters en berekeningen verminderen door ruimtelijke en kanaalwijze convoluties te scheiden"
        },
        {
                  "en": "Deep and wide convolutions",
                  "es": "Convoluciones profundas y anchas",
                  "de": "Tiefe und breite Faltungen",
                  "nl": "Diepe en brede convoluties"
        },
        {
                  "en": "Convolution at different depths only",
                  "es": "Convolución solo a diferentes profundidades",
                  "de": "Faltung nur in verschiedenen Tiefen",
                  "nl": "Convolutie alleen op verschillende dieptes"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Depthwise separable convolutions factorize standard convolutions into depthwise (spatial filtering per channel) and pointwise (1x1 cross-channel) steps, drastically reducing parameters while maintaining performance, popularized by MobileNet.",
                  "es": "Convoluciones separables en profundidad factorizan convoluciones estándar en pasos en profundidad (filtrado espacial por canal) y puntual (1x1 entre canales), reduciendo drásticamente parámetros mientras mantienen rendimiento, popularizadas por MobileNet.",
                  "de": "Depthwise separable Faltungen faktorisieren Standard-Faltungen in depthwise (räumliche Filterung pro Kanal) und pointwise (1x1 kanalübergreifende) Schritte, reduzieren drastisch Parameter bei Beibehaltung der Leistung, popularisiert durch MobileNet.",
                  "nl": "Depthwise separable convoluties factoriseren standaard convoluties in depthwise (ruimtelijke filtering per kanaal) en pointwise (1x1 cross-channel) stappen, verminderen drastisch parameters terwijl prestaties behouden blijven, gepopulariseerd door MobileNet."
        }
      },
      {
        question: {
                  "en": "What is the concept of receptive field in CNNs?",
                  "es": "¿Cuál es el concepto de campo receptivo en CNNs?",
                  "de": "Was ist das Konzept des rezeptiven Feldes in CNNs?",
                  "nl": "Wat is het concept van receptief veld in CNN's?"
        },
        options: [
        {
                  "en": "Input layer size",
                  "es": "Tamaño de capa de entrada",
                  "de": "Eingabeschichtgröße",
                  "nl": "Invoerlaag grootte"
        },
        {
                  "en": "The field where data is received",
                  "es": "El campo donde se reciben datos",
                  "de": "Das Feld wo Daten empfangen werden",
                  "nl": "Het veld waar data ontvangen wordt"
        },
        {
                  "en": "The region of input that influences a particular neuron's activation",
                  "es": "La región de entrada que influye en la activación de una neurona particular",
                  "de": "Die Eingaberegion die die Aktivierung eines bestimmten Neurons beeinflusst",
                  "nl": "De invoerregio die de activatie van een bepaald neuron beïnvloedt"
        },
        {
                  "en": "Network reception area",
                  "es": "Área de recepción de red",
                  "de": "Netzwerk-Empfangsbereich",
                  "nl": "Netwerk ontvangst gebied"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Receptive field grows with network depth: each layer sees a larger input region through accumulated smaller views, allowing deeper neurons to capture increasingly global context and complex patterns.",
                  "es": "Campo receptivo crece con profundidad de red: cada capa ve región de entrada más grande a través de vistas más pequeñas acumuladas, permitiendo neuronas más profundas capturar contexto cada vez más global y patrones complejos.",
                  "de": "Rezeptives Feld wächst mit Netzwerktiefe: jede Schicht sieht größere Eingaberegion durch akkumulierte kleinere Ansichten, ermöglicht tieferen Neuronen zunehmend globalen Kontext und komplexe Muster zu erfassen.",
                  "nl": "Receptief veld groeit met netwerkdiepte: elke laag ziet grotere invoerregio door geaccumuleerde kleinere weergaven, maakt diepere neuronen mogelijk steeds globalere context en complexe patronen vast te leggen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of dilated convolution?",
                  "es": "¿Cuál es el propósito de la convolución dilatada?",
                  "de": "Was ist der Zweck der dilatierten Faltung?",
                  "nl": "Wat is het doel van dilated convolution?"
        },
        options: [
        {
                  "en": "Increasing receptive field without adding parameters by using spaced filters",
                  "es": "Aumentar campo receptivo sin agregar parámetros usando filtros espaciados",
                  "de": "Rezeptives Feld vergrößern ohne Parameter hinzuzufügen durch Verwendung beabstandeter Filter",
                  "nl": "Receptief veld vergroten zonder parameters toe te voegen door gespreide filters te gebruiken"
        },
        {
                  "en": "Making convolutions larger",
                  "es": "Hacer convoluciones más grandes",
                  "de": "Faltungen größer machen",
                  "nl": "Convoluties groter maken"
        },
        {
                  "en": "Dilating images before processing",
                  "es": "Dilatar imágenes antes de procesar",
                  "de": "Bilder vor Verarbeitung dilatieren",
                  "nl": "Afbeeldingen verwijden voor verwerking"
        },
        {
                  "en": "Expanding network width",
                  "es": "Expandir ancho de red",
                  "de": "Netzwerkbreite erweitern",
                  "nl": "Netwerkbreedte uitbreiden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Dilated convolutions insert gaps between filter elements, allowing larger receptive fields without increasing computation, useful for dense prediction tasks like semantic segmentation where multi-scale context is important.",
                  "es": "Convoluciones dilatadas insertan espacios entre elementos de filtro, permitiendo campos receptivos más grandes sin aumentar computación, útil para tareas de predicción densa como segmentación semántica donde contexto multi-escala es importante.",
                  "de": "Dilatierte Faltungen fügen Lücken zwischen Filterelementen ein, ermöglichen größere rezeptive Felder ohne Berechnung zu erhöhen, nützlich für dichte Vorhersageaufgaben wie semantische Segmentierung wo Multi-Skalen-Kontext wichtig ist.",
                  "nl": "Dilated convolutions voegen gaten toe tussen filter elementen, maken grotere receptieve velden mogelijk zonder berekening te verhogen, nuttig voor dense prediction taken zoals semantische segmentatie waar multi-schaal context belangrijk is."
        }
      },
      {
        question: {
                  "en": "What is the purpose of global average pooling?",
                  "es": "¿Cuál es el propósito del global average pooling?",
                  "de": "Was ist der Zweck von Global Average Pooling?",
                  "nl": "Wat is het doel van global average pooling?"
        },
        options: [
        {
                  "en": "Average all layers globally",
                  "es": "Promediar todas las capas globalmente",
                  "de": "Alle Schichten global mitteln",
                  "nl": "Alle lagen globaal middelen"
        },
        {
                  "en": "Calculate world-wide feature averages",
                  "es": "Calcular promedios de características mundiales",
                  "de": "Weltweite Feature-Durchschnitte berechnen",
                  "nl": "Wereldwijde feature gemiddelden berekenen"
        },
        {
                  "en": "Pool features across entire dataset",
                  "es": "Agrupar características en todo el conjunto de datos",
                  "de": "Features über gesamten Datensatz poolen",
                  "nl": "Features over hele dataset poolen"
        },
        {
                  "en": "Reduce spatial dimensions to single values per channel, replacing fully connected layers",
                  "es": "Reducir dimensiones espaciales a valores únicos por canal, reemplazando capas completamente conectadas",
                  "de": "Räumliche Dimensionen auf einzelne Werte pro Kanal reduzieren und vollständig verbundene Schichten ersetzen",
                  "nl": "Ruimtelijke dimensies verminderen tot enkele waarden per kanaal, volledig verbonden lagen vervangend"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Global average pooling averages each feature map to a single value, reducing overfitting compared to fully connected layers while maintaining spatial translation invariance, commonly used before final classification layer.",
                  "es": "Global average pooling promedia cada mapa de características a un solo valor, reduciendo sobreajuste comparado con capas completamente conectadas mientras mantiene invariancia de translación espacial, comúnmente usado antes de capa de clasificación final.",
                  "de": "Global Average Pooling mittelt jede Feature-Map zu einem einzelnen Wert, reduziert Overfitting im Vergleich zu vollständig verbundenen Schichten während räumliche Translationsinvarianz beibehalten wird, häufig vor finaler Klassifizierungsschicht verwendet.",
                  "nl": "Global average pooling middelt elke feature map tot een enkele waarde, vermindert overfitting vergeleken met volledig verbonden lagen terwijl ruimtelijke translatie-invariantie behouden blijft, vaak gebruikt voor finale classificatielaag."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  }
})();