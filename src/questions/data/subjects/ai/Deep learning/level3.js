// Deep Learning Quiz - Level 3: Training Optimization and Regularization
(function() {
  const level3 = {
    name: {
      en: "Deep Learning Level 3",
      es: "Aprendizaje Profundo Nivel 3",
      de: "Deep Learning Stufe 3",
      nl: "Deep Learning Level 3"
    },
    questions: [
      {
        question: {
          en: "What is the purpose of using learning rate in deep learning optimization?",
          es: "¿Cuál es el propósito de usar la tasa de aprendizaje en optimización de aprendizaje profundo?",
          de: "Was ist der Zweck der Verwendung der Lernrate in Deep Learning Optimierung?",
          nl: "Wat is het doel van het gebruik van learning rate in deep learning optimalisatie?"
        },
        options: [
          { en: "Controls how big steps the model takes when updating weights", es: "Controla qué tan grandes pasos toma el modelo al actualizar pesos", de: "Kontrolliert wie große Schritte das Modell beim Aktualisieren von Gewichten macht", nl: "Controleert hoe grote stappen het model neemt bij het bijwerken van gewichten" },
          { en: "Determines how fast the computer processes data", es: "Determina qué tan rápido la computadora procesa datos", de: "Bestimmt wie schnell der Computer Daten verarbeitet", nl: "Bepaalt hoe snel de computer data verwerkt" },
          { en: "Sets the number of learning iterations", es: "Establece el número de iteraciones de aprendizaje", de: "Setzt die Anzahl der Lerniterationen fest", nl: "Stelt het aantal leeriteraties in" },
          { en: "Controls the network architecture", es: "Controla la arquitectura de la red", de: "Kontrolliert die Netzwerkarchitektur", nl: "Controleert de netwerkarchitectuur" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate determines the size of weight updates during training. Too high and the model may overshoot, too low and training becomes very slow.",
          es: "La tasa de aprendizaje determina el tamaño de las actualizaciones de peso durante el entrenamiento. Muy alta y el modelo puede sobrepasar, muy baja y el entrenamiento se vuelve muy lento.",
          de: "Die Lernrate bestimmt die Größe der Gewichtsaktualisierungen während des Trainings. Zu hoch und das Modell kann überschießen, zu niedrig und das Training wird sehr langsam.",
          nl: "Learning rate bepaalt de grootte van gewichtupdates tijdens training. Te hoog en het model kan overschieten, te laag en training wordt erg langzaam."
        }
      },
      {
        question: {
          en: "What is dropout and why is it used in deep neural networks?",
          es: "¿Qué es dropout y por qué se usa en redes neuronales profundas?",
          de: "Was ist Dropout und warum wird es in tiefen neuronalen Netzwerken verwendet?",
          nl: "Wat is dropout en waarom wordt het gebruikt in diepe neurale netwerken?"
        },
        options: [
          { en: "A regularization technique that randomly turns off neurons during training to prevent overfitting", es: "Una técnica de regularización que apaga aleatoriamente neuronas durante el entrenamiento para prevenir sobreajuste", de: "Eine Regularisierungstechnik die zufällig Neuronen während des Trainings ausschaltet um Overfitting zu verhindern", nl: "Een regularisatietechniek die willekeurig neuronen uitschakelt tijdens training om overfitting te voorkomen" },
          { en: "Dropping bad data points from the dataset", es: "Eliminar puntos de datos malos del conjunto de datos", de: "Schlechte Datenpunkte aus dem Datensatz entfernen", nl: "Slechte datapunten uit de dataset weglaten" },
          { en: "Stopping training early when performance decreases", es: "Detener el entrenamiento temprano cuando el rendimiento disminuye", de: "Training früh stoppen wenn die Leistung abnimmt", nl: "Training vroegtijdig stoppen wanneer prestaties afnemen" },
          { en: "Removing unnecessary network layers", es: "Eliminar capas de red innecesarias", de: "Unnötige Netzwerkschichten entfernen", nl: "Onnodige netwerklagen verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout randomly sets some neurons to zero during training, forcing the network to not rely too heavily on specific neurons and improving generalization.",
          es: "Dropout establece aleatoriamente algunas neuronas a cero durante el entrenamiento, forzando a la red a no depender demasiado de neuronas específicas y mejorando la generalización.",
          de: "Dropout setzt zufällig einige Neuronen auf Null während des Trainings, zwingt das Netzwerk nicht zu stark auf spezifische Neuronen zu vertrauen und verbessert die Generalisierung.",
          nl: "Dropout zet willekeurig enkele neuronen op nul tijdens training, dwingt het netwerk om niet te zwaar te leunen op specifieke neuronen en verbetert generalisatie."
        }
      },
      {
        question: {
          en: "What is batch normalization and what problem does it solve?",
          es: "¿Qué es la normalización por lotes y qué problema resuelve?",
          de: "Was ist Batch-Normalisierung und welches Problem löst sie?",
          nl: "Wat is batch normalization en welk probleem lost het op?"
        },
        options: [
          { en: "Normalizes inputs to each layer to stabilize and accelerate training", es: "Normaliza entradas a cada capa para estabilizar y acelerar el entrenamiento", de: "Normalisiert Eingaben zu jeder Schicht um Training zu stabilisieren und beschleunigen", nl: "Normaliseert inputs naar elke laag om training te stabiliseren en versnellen" },
          { en: "Processes data in batches instead of individually", es: "Procesa datos en lotes en lugar de individualmente", de: "Verarbeitet Daten in Stapeln anstatt einzeln", nl: "Verwerkt data in batches in plaats van individueel" },
          { en: "Normalizes the final output of the network", es: "Normaliza la salida final de la red", de: "Normalisiert die finale Ausgabe des Netzwerks", nl: "Normaliseert de finale output van het netwerk" },
          { en: "Balances the number of samples in each batch", es: "Equilibra el número de muestras en cada lote", de: "Balanciert die Anzahl der Proben in jedem Stapel", nl: "Balanceert het aantal samples in elke batch" }
        ],
        correct: 0,
        explanation: {
          en: "Batch normalization normalizes layer inputs by adjusting and scaling activations, reducing internal covariate shift and allowing higher learning rates.",
          es: "La normalización por lotes normaliza entradas de capa ajustando y escalando activaciones, reduciendo el cambio covariante interno y permitiendo tasas de aprendizaje más altas.",
          de: "Batch-Normalisierung normalisiert Schichteingaben durch Anpassung und Skalierung von Aktivierungen, reduziert interne Kovarianzverschiebung und ermöglicht höhere Lernraten.",
          nl: "Batch normalization normaliseert laaginputs door activaties aan te passen en te schalen, vermindert interne covariate shift en maakt hogere learning rates mogelijk."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem in deep networks?",
          es: "¿Cuál es el problema del gradiente que desaparece en redes profundas?",
          de: "Was ist das Problem der verschwindenden Gradienten in tiefen Netzwerken?",
          nl: "Wat is het verdwijnende gradiënt probleem in diepe netwerken?"
        },
        options: [
          { en: "Gradients become very small in early layers, making them learn very slowly", es: "Los gradientes se vuelven muy pequeños en capas tempranas, haciendo que aprendan muy lentamente", de: "Gradienten werden in frühen Schichten sehr klein und lassen sie sehr langsam lernen", nl: "Gradiënten worden erg klein in vroege lagen, waardoor ze erg langzaam leren" },
          { en: "Gradients disappear from computer memory", es: "Los gradientes desaparecen de la memoria de la computadora", de: "Gradienten verschwinden aus dem Computerspeicher", nl: "Gradiënten verdwijnen uit het computergeheugen" },
          { en: "The network loses its gradient calculations", es: "La red pierde sus cálculos de gradiente", de: "Das Netzwerk verliert seine Gradientenberechnungen", nl: "Het netwerk verliest zijn gradiëntberekeningen" },
          { en: "Gradients become too large and unstable", es: "Los gradientes se vuelven demasiado grandes e inestables", de: "Gradienten werden zu groß und instabil", nl: "Gradiënten worden te groot en instabiel" }
        ],
        correct: 0,
        explanation: {
          en: "As gradients propagate backward through many layers, they can become exponentially smaller, causing early layers to barely update and learn.",
          es: "Mientras los gradientes se propagan hacia atrás a través de muchas capas, pueden volverse exponencialmente más pequeños, causando que las capas tempranas apenas se actualicen y aprendan.",
          de: "Während sich Gradienten rückwärts durch viele Schichten propagieren, können sie exponentiell kleiner werden, wodurch frühe Schichten kaum aktualisiert werden und lernen.",
          nl: "Terwijl gradiënten achterwaarts propageren door veel lagen, kunnen ze exponentieel kleiner worden, waardoor vroege lagen nauwelijks updaten en leren."
        }
      },
      {
        question: {
          en: "What is the purpose of weight initialization in deep learning?",
          es: "¿Cuál es el propósito de la inicialización de pesos en aprendizaje profundo?",
          de: "Was ist der Zweck der Gewichtsinitialisierung in Deep Learning?",
          nl: "Wat is het doel van gewichtinitialisatie in deep learning?"
        },
        options: [
          { en: "Setting initial weights to appropriate values to ensure stable and efficient training", es: "Establecer pesos iniciales a valores apropiados para asegurar entrenamiento estable y eficiente", de: "Anfangsgewichte auf angemessene Werte setzen um stabiles und effizientes Training zu gewährleisten", nl: "Begingewichten instellen op gepaste waarden om stabiele en efficiënte training te verzekeren" },
          { en: "Making all weights equal to zero", es: "Hacer que todos los pesos sean iguales a cero", de: "Alle Gewichte gleich Null machen", nl: "Alle gewichten gelijk maken aan nul" },
          { en: "Setting weights to the final trained values", es: "Establecer pesos a los valores finales entrenados", de: "Gewichte auf die finalen trainierten Werte setzen", nl: "Gewichten instellen op de finale getrainde waarden" },
          { en: "Randomly changing weights during training", es: "Cambiar aleatoriamente pesos durante el entrenamiento", de: "Gewichte während des Trainings zufällig ändern", nl: "Willekeurig gewichten veranderen tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Proper weight initialization prevents vanishing/exploding gradients and helps the network start learning effectively from the beginning of training.",
          es: "La inicialización adecuada de pesos previene gradientes que desaparecen/explotan y ayuda a la red a comenzar a aprender efectivamente desde el inicio del entrenamiento.",
          de: "Richtige Gewichtsinitialisierung verhindert verschwindende/explodierende Gradienten und hilft dem Netzwerk effektiv vom Anfang des Trainings zu lernen.",
          nl: "Juiste gewichtinitialisatie voorkomt verdwijnende/exploderende gradiënten en helpt het netwerk effectief te leren vanaf het begin van training."
        }
      },
      {
        question: {
          en: "What is gradient descent and how does it work?",
          es: "¿Qué es el descenso de gradiente y cómo funciona?",
          de: "Was ist Gradientenabstieg und wie funktioniert er?",
          nl: "Wat is gradient descent en hoe werkt het?"
        },
        options: [
          { en: "An optimization algorithm that iteratively moves in the direction of steepest descent to minimize the loss function", es: "Un algoritmo de optimización que se mueve iterativamente en la dirección de descenso más pronunciado para minimizar la función de pérdida", de: "Ein Optimierungsalgorithmus der iterativ in Richtung des steilsten Abstiegs bewegt um die Verlustfunktion zu minimieren", nl: "Een optimalisatiealgoritme dat iteratief beweegt in de richting van steilste afdaling om de verliesfunctie te minimaliseren" },
          { en: "A method for descending through network layers", es: "Un método para descender a través de capas de red", de: "Eine Methode um durch Netzwerkschichten abzusteigen", nl: "Een methode om door netwerklagen af te dalen" },
          { en: "A technique for reducing gradient values", es: "Una técnica para reducir valores de gradiente", de: "Eine Technik zur Reduzierung von Gradientenwerten", nl: "Een techniek voor het verminderen van gradiëntwaarden" },
          { en: "An algorithm for gradient calculation only", es: "Un algoritmo solo para cálculo de gradientes", de: "Ein Algorithmus nur für Gradientenberechnung", nl: "Een algoritme alleen voor gradiëntberekening" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient descent uses the negative gradient to find the direction that decreases the loss function most rapidly, updating parameters iteratively to reach a minimum.",
          es: "El descenso de gradiente usa el gradiente negativo para encontrar la dirección que disminuye la función de pérdida más rápidamente, actualizando parámetros iterativamente para alcanzar un mínimo.",
          de: "Gradientenabstieg verwendet den negativen Gradienten um die Richtung zu finden die die Verlustfunktion am schnellsten verringert, aktualisiert Parameter iterativ um ein Minimum zu erreichen.",
          nl: "Gradient descent gebruikt de negatieve gradiënt om de richting te vinden die de verliesfunctie het snelst vermindert, werkt parameters iteratief bij om een minimum te bereiken."
        }
      },
      {
        question: {
          en: "What is the difference between batch, mini-batch, and stochastic gradient descent?",
          es: "¿Cuál es la diferencia entre descenso de gradiente por lotes, mini-lotes y estocástico?",
          de: "Was ist der Unterschied zwischen Batch-, Mini-Batch- und stochastischem Gradientenabstieg?",
          nl: "Wat is het verschil tussen batch, mini-batch en stochastic gradient descent?"
        },
        options: [
          { en: "Batch uses all data, mini-batch uses small subsets, stochastic uses one example at a time for gradient calculation", es: "Por lotes usa todos los datos, mini-lotes usa subconjuntos pequeños, estocástico usa un ejemplo a la vez para cálculo de gradiente", de: "Batch verwendet alle Daten, Mini-Batch verwendet kleine Teilmengen, stochastisch verwendet ein Beispiel auf einmal für Gradientenberechnung", nl: "Batch gebruikt alle data, mini-batch gebruikt kleine subsets, stochastic gebruikt één voorbeeld tegelijk voor gradiëntberekening" },
          { en: "They are different names for the same algorithm", es: "Son nombres diferentes para el mismo algoritmo", de: "Sie sind verschiedene Namen für denselben Algorithmus", nl: "Het zijn verschillende namen voor hetzelfde algoritme" },
          { en: "They differ only in computational speed", es: "Solo difieren en velocidad computacional", de: "Sie unterscheiden sich nur in der Rechengeschwindigkeit", nl: "Ze verschillen alleen in computationele snelheid" },
          { en: "Batch is for classification, others for regression", es: "Por lotes es para clasificación, otros para regresión", de: "Batch ist für Klassifikation, andere für Regression", nl: "Batch is voor classificatie, anderen voor regressie" }
        ],
        correct: 0,
        explanation: {
          en: "These variants trade off between gradient accuracy and computational efficiency: batch gradient descent is most stable but slowest, stochastic is fastest but noisiest, mini-batch balances both.",
          es: "Estas variantes equilibran entre precisión de gradiente y eficiencia computacional: descenso por lotes es más estable pero más lento, estocástico es más rápido pero más ruidoso, mini-lotes equilibra ambos.",
          de: "Diese Varianten balancieren zwischen Gradientengenauigkeit und Recheneffizienz: Batch-Gradientenabstieg ist am stabilsten aber langsamsten, stochastisch ist am schnellsten aber rauschigsten, Mini-Batch balanciert beide.",
          nl: "Deze varianten balanceren tussen gradiëntnauwkeurigheid en computationele efficiëntie: batch gradient descent is meest stabiel maar langzaamst, stochastic is snelst maar ruizigst, mini-batch balanceert beide."
        }
      },
      {
        question: {
          en: "What is momentum in gradient descent optimization?",
          es: "¿Qué es el momentum en optimización de descenso de gradiente?",
          de: "Was ist Momentum in der Gradientenabstieg-Optimierung?",
          nl: "Wat is momentum in gradient descent optimalisatie?"
        },
        options: [
          { en: "A technique that adds a fraction of the previous update to the current update, helping overcome local minima and accelerate convergence", es: "Técnica que añade fracción de actualización previa a actual, ayudando superar mínimos locales y acelerar convergencia", de: "Technik die Bruchteil vorheriger Aktualisierung zur aktuellen hinzufügt, hilft lokale Minima überwinden und Konvergenz beschleunigen", nl: "Techniek die fractie van vorige update toevoegt aan huidige, helpt lokale minima overwinnen en convergentie versnellen" },
          { en: "The speed at which gradients are calculated", es: "La velocidad a la que se calculan los gradientes", de: "Die Geschwindigkeit mit der Gradienten berechnet werden", nl: "De snelheid waarmee gradiënten berekend worden" },
          { en: "A method for storing previous gradients", es: "Un método para almacenar gradientes previos", de: "Eine Methode zur Speicherung vorheriger Gradienten", nl: "Een methode voor het opslaan van vorige gradiënten" },
          { en: "The force applied to update weights", es: "La fuerza aplicada para actualizar pesos", de: "Die Kraft die angewendet wird um Gewichte zu aktualisieren", nl: "De kracht die toegepast wordt om gewichten bij te werken" }
        ],
        correct: 0,
        explanation: {
          en: "Momentum helps smooth out oscillations and accelerate training by accumulating a moving average of gradients, especially useful in areas where the gradient changes direction frequently.",
          es: "El momentum ayuda a suavizar oscilaciones y acelerar entrenamiento acumulando un promedio móvil de gradientes, especialmente útil en áreas donde el gradiente cambia dirección frecuentemente.",
          de: "Momentum hilft Oszillationen zu glätten und Training zu beschleunigen durch Akkumulation eines gleitenden Durchschnitts von Gradienten, besonders nützlich in Bereichen wo der Gradient häufig die Richtung ändert.",
          nl: "Momentum helpt oscillaties glad te strijken en training te versnellen door het accumuleren van een voortschrijdend gemiddelde van gradiënten, vooral nuttig in gebieden waar de gradiënt vaak van richting verandert."
        }
      },
      {
        question: {
          en: "What is the Adam optimizer and what are its advantages?",
          es: "¿Qué es el optimizador Adam y cuáles son sus ventajas?",
          de: "Was ist der Adam-Optimierer und was sind seine Vorteile?",
          nl: "Wat is de Adam optimizer en wat zijn de voordelen?"
        },
        options: [
          { en: "An adaptive learning rate algorithm that combines momentum and RMSprop, automatically adjusting learning rates for each parameter", es: "Algoritmo de tasa aprendizaje adaptativo que combina momentum y RMSprop, ajustando automáticamente tasas para cada parámetro", de: "Adaptiver Lernraten-Algorithmus der Momentum und RMSprop kombiniert, passt automatisch Lernraten für jeden Parameter an", nl: "Adaptief learning rate algoritme dat momentum en RMSprop combineert, past automatisch learning rates aan voor elke parameter" },
          { en: "A simple gradient descent with fixed learning rate", es: "Un descenso de gradiente simple con tasa de aprendizaje fija", de: "Ein einfacher Gradientenabstieg mit fester Lernrate", nl: "Een eenvoudige gradient descent met vaste learning rate" },
          { en: "An optimizer that only works with Adam activations", es: "Un optimizador que solo funciona con activaciones Adam", de: "Ein Optimierer der nur mit Adam-Aktivierungen funktioniert", nl: "Een optimizer die alleen werkt met Adam activaties" },
          { en: "A person who invented neural networks", es: "Una persona que inventó redes neuronales", de: "Eine Person die neuronale Netzwerke erfunden hat", nl: "Een persoon die neurale netwerken uitvond" }
        ],
        correct: 0,
        explanation: {
          en: "Adam (Adaptive Moment Estimation) is popular because it adapts learning rates per parameter, handles sparse gradients well, and typically requires less hyperparameter tuning than other optimizers.",
          es: "Adam (Estimación de Momento Adaptativo) es popular porque adapta tasas de aprendizaje por parámetro, maneja bien gradientes dispersos, y típicamente requiere menos ajuste de hiperparámetros que otros optimizadores.",
          de: "Adam (Adaptive Moment Estimation) ist beliebt weil es Lernraten pro Parameter anpasst, spärliche Gradienten gut handhabt, und typischerweise weniger Hyperparameter-Tuning benötigt als andere Optimierer.",
          nl: "Adam (Adaptive Moment Estimation) is populair omdat het learning rates per parameter aanpast, goed omgaat met dunne gradiënten, en typisch minder hyperparameter tuning vereist dan andere optimizers."
        }
      },
      {
        question: {
          en: "What is learning rate scheduling and why is it useful?",
          es: "¿Qué es la programación de tasa de aprendizaje y por qué es útil?",
          de: "Was ist Lernraten-Scheduling und warum ist es nützlich?",
          nl: "Wat is learning rate scheduling en waarom is het nuttig?"
        },
        options: [
          { en: "Systematically changing the learning rate during training to improve convergence and avoid overshooting optima", es: "Cambiar sistemáticamente la tasa de aprendizaje durante entrenamiento para mejorar convergencia y evitar sobrepasar óptimos", de: "Systematisches Ändern der Lernrate während des Trainings um Konvergenz zu verbessern und Überschießen von Optima zu vermeiden", nl: "Systematisch veranderen van de learning rate tijdens training om convergentie te verbeteren en overschieten van optima te vermijden" },
          { en: "Planning when to start and stop learning", es: "Planificar cuándo empezar y parar el aprendizaje", de: "Planen wann Lernen begonnen und gestoppt wird", nl: "Plannen wanneer te beginnen en stoppen met leren" },
          { en: "Scheduling training sessions at specific times", es: "Programar sesiones de entrenamiento en horarios específicos", de: "Trainingseinheiten zu bestimmten Zeiten planen", nl: "Trainingssessies plannen op specifieke tijden" },
          { en: "Setting deadlines for model completion", es: "Establecer fechas límite para completar modelos", de: "Fristen für Modellfertigstellung setzen", nl: "Deadlines instellen voor modelafronding" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate scheduling (like exponential decay, step decay, or cosine annealing) helps models converge better by starting with larger steps for fast initial progress and smaller steps for fine-tuning near optima.",
          es: "La programación de tasa de aprendizaje (como decaimiento exponencial, decaimiento por pasos, o recocido coseno) ayuda a modelos converger mejor empezando con pasos grandes para progreso inicial rápido y pasos más pequeños para ajuste fino cerca de óptimos.",
          de: "Lernraten-Scheduling (wie exponentieller Zerfall, Schritt-Zerfall oder Kosinus-Annealing) hilft Modellen besser zu konvergieren durch Beginnen mit größeren Schritten für schnellen anfänglichen Fortschritt und kleineren Schritten für Feinabstimmung nahe Optima.",
          nl: "Learning rate scheduling (zoals exponentiële decay, step decay, of cosine annealing) helpt modellen beter convergeren door te beginnen met grotere stappen voor snelle initiële voortgang en kleinere stappen voor fine-tuning nabij optima."
        }
      },
      {
        question: {
          en: "What is the exploding gradient problem and how can it be addressed?",
          es: "¿Cuál es el problema del gradiente que explota y cómo puede abordarse?",
          de: "Was ist das Problem explodierender Gradienten und wie kann es angegangen werden?",
          nl: "Wat is het exploderende gradiënt probleem en hoe kan het aangepakt worden?"
        },
        options: [
          { en: "Gradients become extremely large causing unstable training, addressed by gradient clipping, proper weight initialization, or architectural changes", es: "Gradientes extremadamente grandes causan entrenamiento inestable, solucionado por clipping, inicialización de pesos, o cambios arquitectónicos", de: "Gradienten werden extrem groß verursachen instabiles Training, angegangen durch Clipping, Gewichtsinitialisierung oder Architekturänderungen", nl: "Gradiënten worden extreem groot veroorzaken instabiele training, aangepakt door gradient clipping, gewichtinitialisatie, of architectuurveranderingen" },
          { en: "Gradients literally explode the computer memory", es: "Los gradientes literalmente explotan la memoria de la computadora", de: "Gradienten lassen buchstäblich den Computerspeicher explodieren", nl: "Gradiënten laten letterlijk het computergeheugen exploderen" },
          { en: "Too many gradients are calculated simultaneously", es: "Demasiados gradientes se calculan simultáneamente", de: "Zu viele Gradienten werden gleichzeitig berechnet", nl: "Te veel gradiënten worden tegelijkertijd berekend" },
          { en: "Gradients become negative instead of positive", es: "Los gradientes se vuelven negativos en lugar de positivos", de: "Gradienten werden negativ anstatt positiv", nl: "Gradiënten worden negatief in plaats van positief" }
        ],
        correct: 0,
        explanation: {
          en: "Exploding gradients cause weight updates to be too large, leading to unstable training and NaN values. Gradient clipping limits gradient magnitude to prevent this instability.",
          es: "Los gradientes que explotan causan que las actualizaciones de pesos sean demasiado grandes, llevando a entrenamiento inestable y valores NaN. El recorte de gradientes limita la magnitud del gradiente para prevenir esta inestabilidad.",
          de: "Explodierende Gradienten verursachen zu große Gewichtsaktualisierungen, führen zu instabilem Training und NaN-Werten. Gradienten-Clipping begrenzt die Gradientengröße um diese Instabilität zu verhindern.",
          nl: "Exploderende gradiënten zorgen ervoor dat gewichtupdates te groot zijn, leiden tot instabiele training en NaN waarden. Gradient clipping beperkt gradiëntgrootte om deze instabiliteit te voorkomen."
        }
      },
      {
        question: {
          en: "What is early stopping in neural network training?",
          es: "¿Qué es la parada temprana en entrenamiento de redes neuronales?",
          de: "Was ist frühes Stoppen im neuronalen Netzwerktraining?",
          nl: "Wat is early stopping in neurale netwerktraining?"
        },
        options: [
          { en: "A regularization technique that stops training when validation performance stops improving, preventing overfitting", es: "Técnica de regularización que detiene entrenamiento cuando rendimiento validación deja de mejorar, previniendo sobreajuste", de: "Regularisierungstechnik die Training stoppt wenn Validierungsleistung aufhört sich zu verbessern, verhindert Overfitting", nl: "Regularisatietechniek die training stopt wanneer validatieprestaties stoppen met verbeteren, voorkomt overfitting" },
          { en: "Stopping training after a fixed number of epochs", es: "Detener entrenamiento después de un número fijo de épocas", de: "Training nach einer festen Anzahl von Epochen stoppen", nl: "Training stoppen na een vast aantal epochs" },
          { en: "Stopping training when the computer overheats", es: "Detener entrenamiento cuando la computadora se sobrecalienta", de: "Training stoppen wenn der Computer überhitzt", nl: "Training stoppen wanneer de computer oververhit" },
          { en: "Ending training sessions during work hours", es: "Terminar sesiones de entrenamiento durante horas de trabajo", de: "Trainingseinheiten während der Arbeitszeit beenden", nl: "Trainingssessies beëindigen tijdens werkuren" }
        ],
        correct: 0,
        explanation: {
          en: "Early stopping monitors validation loss and stops training when it starts increasing, indicating the model is beginning to overfit to the training data rather than learning generalizable patterns.",
          es: "La parada temprana monitorea la pérdida de validación y detiene entrenamiento cuando empieza a aumentar, indicando que el modelo está empezando a sobreajustarse a datos de entrenamiento en lugar de aprender patrones generalizables.",
          de: "Frühes Stoppen überwacht den Validierungsverlust und stoppt Training wenn er zu steigen beginnt, zeigt an dass das Modell beginnt auf Trainingsdaten zu überfitten anstatt generalisierbare Muster zu lernen.",
          nl: "Early stopping monitort validatieverlies en stopt training wanneer het begint te stijgen, geeft aan dat het model begint te overfitten op trainingsdata in plaats van generaliseerbare patronen te leren."
        }
      },
      {
        question: {
          en: "What is the difference between L1 and L2 regularization?",
          es: "¿Cuál es la diferencia entre regularización L1 y L2?",
          de: "Was ist der Unterschied zwischen L1- und L2-Regularisierung?",
          nl: "Wat is het verschil tussen L1 en L2 regularisatie?"
        },
        options: [
          { en: "L1 adds sum of absolute weights to loss (promotes sparsity), L2 adds sum of squared weights (promotes small weights)", es: "L1 añade suma de pesos absolutos a la pérdida (promueve dispersión), L2 añade suma de pesos al cuadrado (promueve pesos pequeños)", de: "L1 fügt Summe absoluter Gewichte zum Verlust hinzu (fördert Spärlichkeit), L2 fügt Summe quadrierter Gewichte hinzu (fördert kleine Gewichte)", nl: "L1 voegt som van absolute gewichten toe aan verlies (bevordert sparsity), L2 voegt som van gekwadrateerde gewichten toe (bevordert kleine gewichten)" },
          { en: "L1 is for layer 1, L2 is for layer 2", es: "L1 es para capa 1, L2 es para capa 2", de: "L1 ist für Schicht 1, L2 ist für Schicht 2", nl: "L1 is voor laag 1, L2 is voor laag 2" },
          { en: "L1 and L2 refer to different loss functions", es: "L1 y L2 se refieren a diferentes funciones de pérdida", de: "L1 und L2 beziehen sich auf verschiedene Verlustfunktionen", nl: "L1 en L2 verwijzen naar verschillende verliesfuncties" },
          { en: "L1 is stronger regularization than L2", es: "L1 es regularización más fuerte que L2", de: "L1 ist stärkere Regularisierung als L2", nl: "L1 is sterkere regularisatie dan L2" }
        ],
        correct: 0,
        explanation: {
          en: "L1 regularization can drive some weights to exactly zero (feature selection), while L2 regularization shrinks all weights proportionally toward zero, preventing any single weight from becoming too large.",
          es: "La regularización L1 puede llevar algunos pesos exactamente a cero (selección de características), mientras que la regularización L2 encoge todos los pesos proporcionalmente hacia cero, previniendo que cualquier peso individual se vuelva demasiado grande.",
          de: "L1-Regularisierung kann einige Gewichte auf genau Null treiben (Feature-Selektion), während L2-Regularisierung alle Gewichte proportional Richtung Null schrumpft, verhindert dass einzelne Gewichte zu groß werden.",
          nl: "L1 regularisatie kan sommige gewichten exact naar nul drijven (feature selectie), terwijl L2 regularisatie alle gewichten proportioneel naar nul krimpt, voorkomt dat enkel gewicht te groot wordt."
        }
      },
      {
        question: {
          en: "What is cross-entropy loss and when is it used?",
          es: "¿Qué es la pérdida de entropía cruzada y cuándo se usa?",
          de: "Was ist Cross-Entropy-Verlust und wann wird er verwendet?",
          nl: "Wat is cross-entropy loss en wanneer wordt het gebruikt?"
        },
        options: [
          { en: "A loss function measuring difference between predicted and true probability distributions, commonly used for classification tasks", es: "Función de pérdida que mide diferencia entre distribuciones probabilidad predichas y verdaderas, usada para tareas clasificación", de: "Verlustfunktion die Unterschied zwischen vorhergesagten und wahren Wahrscheinlichkeitsverteilungen misst, für Klassifikationsaufgaben", nl: "Verliesfunctie die verschil meet tussen voorspelde en echte waarschijnlijkheidsverdelingen, gebruikt voor classificatietaken" },
          { en: "A measure of how crossed the neural connections are", es: "Una medida de qué tan cruzadas están las conexiones neuronales", de: "Ein Maß dafür wie gekreuzt die neuronalen Verbindungen sind", nl: "Een maat voor hoe gekruist de neurale verbindingen zijn" },
          { en: "Loss function only for regression problems", es: "Función de pérdida solo para problemas de regresión", de: "Verlustfunktion nur für Regressionsprobleme", nl: "Verliesfunctie alleen voor regressieproblemen" },
          { en: "A type of entropy used in thermodynamics", es: "Un tipo de entropía usada en termodinámica", de: "Eine Art Entropie die in der Thermodynamik verwendet wird", nl: "Een type entropie gebruikt in thermodynamica" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-entropy loss penalizes predictions that are confident but wrong more heavily than those that are uncertain, making it ideal for training classification models with softmax outputs.",
          es: "La pérdida de entropía cruzada penaliza predicciones que son confiadas pero incorrectas más fuertemente que aquellas que son inciertas, haciéndola ideal para entrenar modelos de clasificación con salidas softmax.",
          de: "Cross-Entropy-Verlust bestraft Vorhersagen die sicher aber falsch sind stärker als solche die unsicher sind, macht ihn ideal für Training von Klassifikationsmodellen mit Softmax-Ausgaben.",
          nl: "Cross-entropy loss bestraft voorspellingen die zeker maar verkeerd zijn zwaarder dan die welke onzeker zijn, maakt het ideaal voor training van classificatiemodellen met softmax outputs."
        }
      },
      {
        question: {
          en: "What is mean squared error (MSE) and when is it appropriate?",
          es: "¿Qué es el error cuadrático medio (MSE) y cuándo es apropiado?",
          de: "Was ist mittlerer quadratischer Fehler (MSE) und wann ist er angemessen?",
          nl: "Wat is mean squared error (MSE) en wanneer is het geschikt?"
        },
        options: [
          { en: "The average of squared differences between predicted and actual values, commonly used for regression tasks", es: "Promedio de diferencias al cuadrado entre valores predichos y reales, usado para tareas de regresión", de: "Durchschnitt quadrierter Unterschiede zwischen vorhergesagten und tatsächlichen Werten, für Regressionsaufgaben verwendet", nl: "Gemiddelde van gekwadrateerde verschillen tussen voorspelde en werkelijke waarden, gebruikt voor regressietaken" },
          { en: "A measure of how mean the neural network is", es: "Una medida de qué tan malvada es la red neuronal", de: "Ein Maß dafür wie gemein das neuronale Netzwerk ist", nl: "Een maat voor hoe gemeen het neurale netwerk is" },
          { en: "Mean squared error in data collection", es: "Error cuadrático medio en recolección de datos", de: "Mittlerer quadratischer Fehler bei Datensammlung", nl: "Mean squared error in dataverzameling" },
          { en: "Only used for binary classification", es: "Solo usado para clasificación binaria", de: "Nur für binäre Klassifikation verwendet", nl: "Alleen gebruikt voor binaire classificatie" }
        ],
        correct: 0,
        explanation: {
          en: "MSE is sensitive to outliers due to squaring, making it suitable for regression when outliers should be heavily penalized, but may not be ideal when outliers are noise.",
          es: "MSE es sensible a valores atípicos debido al cuadrado, haciéndolo adecuado para regresión cuando valores atípicos deben ser fuertemente penalizados, pero puede no ser ideal cuando valores atípicos son ruido.",
          de: "MSE ist empfindlich gegenüber Ausreißern aufgrund der Quadrierung, macht ihn geeignet für Regression wenn Ausreißer stark bestraft werden sollen, aber möglicherweise nicht ideal wenn Ausreißer Rauschen sind.",
          nl: "MSE is gevoelig voor uitbijters door het kwadrateren, maakt het geschikt voor regressie wanneer uitbijters zwaar bestraft moeten worden, maar mogelijk niet ideaal wanneer uitbijters ruis zijn."
        }
      },
      {
        question: {
          en: "What is the purpose of data normalization in deep learning?",
          es: "¿Cuál es el propósito de la normalización de datos en aprendizaje profundo?",
          de: "Was ist der Zweck der Datennormalisierung in Deep Learning?",
          nl: "Wat is het doel van datanormalisatie in deep learning?"
        },
        options: [
          { en: "To scale features to similar ranges, improving convergence speed and preventing certain features from dominating", es: "Para escalar características a rangos similares, mejorando velocidad de convergencia y previniendo que ciertas características dominen", de: "Um Features auf ähnliche Bereiche zu skalieren, verbessert Konvergenzgeschwindigkeit und verhindert dass bestimmte Features dominieren", nl: "Om features te schalen naar vergelijkbare bereiken, verbetert convergentiesnelheid en voorkomt dat bepaalde features domineren" },
          { en: "To make data look normal and standard", es: "Para hacer que los datos se vean normales y estándar", de: "Um Daten normal und standard aussehen zu lassen", nl: "Om data er normaal en standaard uit te laten zien" },
          { en: "To remove all negative values from data", es: "Para eliminar todos los valores negativos de los datos", de: "Um alle negativen Werte aus den Daten zu entfernen", nl: "Om alle negatieve waarden uit de data te verwijderen" },
          { en: "To reduce the size of the dataset", es: "Para reducir el tamaño del conjunto de datos", de: "Um die Größe des Datensatzes zu reduzieren", nl: "Om de grootte van de dataset te verkleinen" }
        ],
        correct: 0,
        explanation: {
          en: "Normalization (like min-max scaling or z-score standardization) ensures all features contribute equally to training, prevents numerical instability, and helps optimization algorithms converge faster.",
          es: "La normalización (como escalado min-max o estandarización z-score) asegura que todas las características contribuyan igualmente al entrenamiento, previene inestabilidad numérica, y ayuda a algoritmos de optimización converger más rápido.",
          de: "Normalisierung (wie Min-Max-Skalierung oder Z-Score-Standardisierung) stellt sicher dass alle Features gleich zum Training beitragen, verhindert numerische Instabilität und hilft Optimierungsalgorithmen schneller zu konvergieren.",
          nl: "Normalisatie (zoals min-max scaling of z-score standaardisatie) zorgt ervoor dat alle features gelijk bijdragen aan training, voorkomt numerieke instabiliteit, en helpt optimalisatiealgoritmes sneller convergeren."
        }
      },
      {
        question: {
          en: "What is the chain rule in the context of backpropagation?",
          es: "¿Qué es la regla de la cadena en el contexto de la retropropagación?",
          de: "Was ist die Kettenregel im Kontext der Backpropagation?",
          nl: "Wat is de kettingregel in de context van backpropagation?"
        },
        options: [
          { en: "A calculus rule that allows computing gradients through composite functions by multiplying partial derivatives", es: "Una regla de cálculo que permite computar gradientes a través de funciones compuestas multiplicando derivadas parciales", de: "Eine Kalkülregel die es ermöglicht Gradienten durch zusammengesetzte Funktionen zu berechnen durch Multiplizieren partieller Ableitungen", nl: "Een calculus regel die het berekenen van gradiënten door samengestelde functies mogelijk maakt door partiële afgeleiden te vermenigvuldigen" },
          { en: "A rule about chaining neural networks together", es: "Una regla sobre encadenar redes neuronales juntas", de: "Eine Regel über das Verketten neuronaler Netzwerke", nl: "Een regel over het aan elkaar ketenen van neurale netwerken" },
          { en: "A method for organizing layers in sequence", es: "Un método para organizar capas en secuencia", de: "Eine Methode zur Anordnung von Schichten in Reihenfolge", nl: "Een methode voor het organiseren van lagen in volgorde" },
          { en: "A rule for connecting neurons in chains", es: "Una regla para conectar neuronas en cadenas", de: "Eine Regel zum Verbinden von Neuronen in Ketten", nl: "Een regel voor het verbinden van neuronen in ketens" }
        ],
        correct: 0,
        explanation: {
          en: "The chain rule enables backpropagation by allowing computation of how the loss function changes with respect to each weight through the composition of functions in the network layers.",
          es: "La regla de la cadena habilita retropropagación permitiendo computación de cómo la función de pérdida cambia con respecto a cada peso a través de la composición de funciones en las capas de la red.",
          de: "Die Kettenregel ermöglicht Backpropagation durch Erlauben der Berechnung wie die Verlustfunktion sich in Bezug auf jedes Gewicht durch die Komposition von Funktionen in den Netzwerkschichten ändert.",
          nl: "De kettingregel maakt backpropagation mogelijk door het berekenen van hoe de verliesfunctie verandert ten opzichte van elk gewicht door de compositie van functies in de netwerklagen."
        }
      },
      {
        question: {
          en: "What is curriculum learning in deep learning?",
          es: "¿Qué es el aprendizaje curricular en aprendizaje profundo?",
          de: "Was ist Curriculum Learning in Deep Learning?",
          nl: "Wat is curriculum learning in deep learning?"
        },
        options: [
          { en: "A training strategy that presents data in order of increasing difficulty, mimicking how humans learn", es: "Una estrategia de entrenamiento que presenta datos en orden de dificultad creciente, imitando cómo aprenden los humanos", de: "Eine Trainingsstrategie die Daten in Reihenfolge steigender Schwierigkeit präsentiert, ahmt nach wie Menschen lernen", nl: "Een trainingsstrategie die data presenteert in volgorde van toenemende moeilijkheid, bootst na hoe mensen leren" },
          { en: "Learning about school curricula using AI", es: "Aprender sobre currículos escolares usando IA", de: "Über Schullehrpläne mit KI lernen", nl: "Leren over schoolcurricula met AI" },
          { en: "A method for designing neural network architectures", es: "Un método para diseñar arquitecturas de redes neuronales", de: "Eine Methode zum Entwerfen neuronaler Netzwerkarchitekturen", nl: "Een methode voor het ontwerpen van neurale netwerkarchitecturen" },
          { en: "Training on educational datasets only", es: "Entrenamiento solo en conjuntos de datos educativos", de: "Training nur auf Bildungsdatensätzen", nl: "Training alleen op educatieve datasets" }
        ],
        correct: 0,
        explanation: {
          en: "Curriculum learning can improve model performance and training stability by starting with easier examples and gradually increasing complexity, helping the model build foundational understanding before tackling harder cases.",
          es: "El aprendizaje curricular puede mejorar rendimiento del modelo y estabilidad de entrenamiento empezando con ejemplos más fáciles y gradualmente aumentando complejidad, ayudando al modelo construir entendimiento fundamental antes de abordar casos más difíciles.",
          de: "Curriculum Learning kann Modellleistung und Trainingsstabilität verbessern durch Beginnen mit einfacheren Beispielen und gradueller Steigerung der Komplexität, hilft dem Modell grundlegendes Verständnis aufzubauen bevor schwierigere Fälle angegangen werden.",
          nl: "Curriculum learning kan modelprestaties en trainingsstabiliteit verbeteren door te beginnen met makkelijkere voorbeelden en geleidelijk complexiteit te verhogen, helpt het model fundamenteel begrip op te bouwen voordat moeilijkere gevallen worden aangepakt."
        }
      },
      {
        question: {
          en: "What is the difference between local and global minima in optimization?",
          es: "¿Cuál es la diferencia entre mínimos locales y globales en optimización?",
          de: "Was ist der Unterschied zwischen lokalen und globalen Minima in der Optimierung?",
          nl: "Wat is het verschil tussen lokale en globale minima in optimalisatie?"
        },
        options: [
          { en: "Local minima are lowest points in small regions, global minimum is the lowest point overall in the entire function", es: "Los mínimos locales son puntos más bajos en regiones pequeñas, el mínimo global es el punto más bajo en general en toda la función", de: "Lokale Minima sind niedrigste Punkte in kleinen Regionen, globales Minimum ist der niedrigste Punkt insgesamt in der gesamten Funktion", nl: "Lokale minima zijn laagste punten in kleine regio's, globaal minimum is het laagste punt overall in de gehele functie" },
          { en: "Local minima exist in specific countries, global minima exist worldwide", es: "Los mínimos locales existen en países específicos, los mínimos globales existen en todo el mundo", de: "Lokale Minima existieren in spezifischen Ländern, globale Minima existieren weltweit", nl: "Lokale minima bestaan in specifieke landen, globale minima bestaan wereldwijd" },
          { en: "There is no difference between them", es: "No hay diferencia entre ellos", de: "Es gibt keinen Unterschied zwischen ihnen", nl: "Er is geen verschil tussen hen" },
          { en: "Local minima are for small networks, global for large networks", es: "Los mínimos locales son para redes pequeñas, globales para redes grandes", de: "Lokale Minima sind für kleine Netzwerke, globale für große Netzwerke", nl: "Lokale minima zijn voor kleine netwerken, globaal voor grote netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Deep learning optimization may get trapped in local minima, but research suggests that in high-dimensional spaces, most critical points are saddle points rather than problematic local minima.",
          es: "La optimización de aprendizaje profundo puede quedar atrapada en mínimos locales, pero la investigación sugiere que en espacios de alta dimensión, la mayoría de puntos críticos son puntos de silla en lugar de mínimos locales problemáticos.",
          de: "Deep Learning Optimierung kann in lokalen Minima gefangen werden, aber Forschung deutet darauf hin dass in hochdimensionalen Räumen die meisten kritischen Punkte Sattelpunkte sind anstatt problematische lokale Minima.",
          nl: "Deep learning optimalisatie kan vastzitten in lokale minima, maar onderzoek suggereert dat in hoog-dimensionale ruimtes de meeste kritieke punten zadelpunten zijn in plaats van problematische lokale minima."
        }
      },
      {
        question: {
          en: "What is the fundamental principle behind attention mechanisms in deep learning?",
          es: "¿Cuál es el principio fundamental detrás de los mecanismos de atención en aprendizaje profundo?",
          de: "Was ist das grundlegende Prinzip hinter Aufmerksamkeitsmechanismen im Deep Learning?",
          nl: "Wat is het fundamentele principe achter aandachtsmechanismen in deep learning?"
        },
        options: [
          { en: "Allowing models to focus on relevant parts of input when making predictions", es: "Permitir que los modelos se enfoquen en partes relevantes de la entrada al hacer predicciones", de: "Modellen ermöglichen sich auf relevante Teile der Eingabe zu konzentrieren beim Treffen von Vorhersagen", nl: "Modellen toestaan zich te concentreren op relevante delen van de invoer bij het maken van voorspellingen" },
          { en: "Making models pay attention to training time", es: "Hacer que los modelos presten atención al tiempo de entrenamiento", de: "Modelle dazu bringen auf Trainingszeit zu achten", nl: "Modellen laten opletten op trainingstijd" },
          { en: "Increasing computational attention resources", es: "Aumentar recursos computacionales de atención", de: "Aufmerksamkeits-Rechenressourcen erhöhen", nl: "Computationele aandachtsbronnen verhogen" },
          { en: "Focusing models on hardware optimization", es: "Enfocar modelos en optimización de hardware", de: "Modelle auf Hardware-Optimierung fokussieren", nl: "Modellen focussen op hardware optimalisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms allow neural networks to dynamically focus on different parts of the input sequence or feature map, computing weighted representations based on relevance, greatly improving performance in tasks requiring selective focus.",
          es: "Los mecanismos de atención permiten a las redes neuronales enfocarse dinámicamente en diferentes partes de la secuencia de entrada o mapa de características, computando representaciones ponderadas basadas en relevancia, mejorando mucho el rendimiento en tareas que requieren enfoque selectivo.",
          de: "Aufmerksamkeitsmechanismen ermöglichen neuronalen Netzwerken sich dynamisch auf verschiedene Teile der Eingabesequenz oder Feature Map zu konzentrieren, berechnen gewichtete Repräsentationen basierend auf Relevanz, verbessern stark die Leistung bei Aufgaben die selektiven Fokus erfordern.",
          nl: "Aandachtsmechanismen stellen neurale netwerken in staat dynamisch te focussen op verschillende delen van de invoer sequentie of feature map, berekenen gewogen representaties gebaseerd op relevantie, verbeteren prestaties sterk bij taken die selectieve focus vereisen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();