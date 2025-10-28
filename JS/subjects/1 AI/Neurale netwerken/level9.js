// Neural Networks Quiz - Level 9: Training Techniques and Hyperparameters
(function() {
  const level9 = {
    name: {
      en: "Training Techniques and Hyperparameters",
      es: "Técnicas de Entrenamiento e Hiperparámetros",
      de: "Trainingstechniken und Hyperparameter",
      nl: "Trainingstechnieken en Hyperparameters"
    },
    questions: [
      {
        question: {
          en: "What is the main advantage of the Adam optimizer over SGD?",
          es: "¿Cuál es la principal ventaja del optimizador Adam sobre SGD?",
          de: "Was ist der Hauptvorteil des Adam-Optimierers gegenüber SGD?",
          nl: "Wat is het belangrijkste voordeel van de Adam-optimizer ten opzichte van SGD?"
        },
        options: [
          { en: "Adaptive learning rates for each parameter based on momentum and gradient variance", es: "Tasas de aprendizaje adaptativas para cada parámetro basadas en momentum y varianza del gradiente", de: "Adaptive Lernraten für jeden Parameter basierend auf Momentum und Gradientenvarianz", nl: "Adaptieve leersnelheden voor elke parameter gebaseerd op momentum en gradiëntvariantie" },
          { en: "Lower memory requirements during training", es: "Menores requerimientos de memoria durante entrenamiento", de: "Geringere Speicheranforderungen während des Trainings", nl: "Lagere geheugenvereisten tijdens training" },
          { en: "Faster convergence for all types of problems", es: "Convergencia más rápida para todos los tipos de problemas", de: "Schnellere Konvergenz für alle Arten von Problemen", nl: "Snellere convergentie voor alle soorten problemen" },
          { en: "Better performance on linear models", es: "Mejor rendimiento en modelos lineales", de: "Bessere Leistung bei linearen Modellen", nl: "Betere prestaties op lineaire modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Adam combines the benefits of AdaGrad and RMSprop by maintaining exponential moving averages of both gradients (momentum) and squared gradients (variance). This provides adaptive learning rates for each parameter, often leading to faster convergence with less hyperparameter tuning.",
          es: "Adam combina los beneficios de AdaGrad y RMSprop manteniendo promedios móviles exponenciales tanto de gradientes (momentum) como de gradientes al cuadrado (varianza). Esto proporciona tasas de aprendizaje adaptativas para cada parámetro, a menudo llevando a convergencia más rápida con menos ajuste de hiperparámetros.",
          de: "Adam kombiniert die Vorteile von AdaGrad und RMSprop durch Aufrechterhaltung exponentieller gleitender Durchschnitte sowohl von Gradienten (Momentum) als auch quadrierten Gradienten (Varianz). Dies bietet adaptive Lernraten für jeden Parameter und führt oft zu schnellerer Konvergenz mit weniger Hyperparameter-Tuning.",
          nl: "Adam combineert de voordelen van AdaGrad en RMSprop door exponentiële voortschrijdende gemiddelden van zowel gradiënten (momentum) als gekwadrateerde gradiënten (variantie) bij te houden. Dit biedt adaptieve leersnelheden voor elke parameter, wat vaak leidt tot snellere convergentie met minder hyperparameter-tuning."
        }
      },
      {
        question: {
          en: "What is the purpose of learning rate scheduling during training?",
          es: "¿Cuál es el propósito de la programación de tasa de aprendizaje durante el entrenamiento?",
          de: "Was ist der Zweck der Lernraten-Planung während des Trainings?",
          nl: "Wat is het doel van leersnelheid-planning tijdens training?"
        },
        options: [
          { en: "Gradually reduce learning rate to fine-tune parameters and avoid overshooting minima", es: "Reducir gradualmente la tasa de aprendizaje para afinar parámetros y evitar sobrepasar mínimos", de: "Lernrate schrittweise reduzieren um Parameter feinzustimmen und Überschießen von Minima zu vermeiden", nl: "Geleidelijk leersnelheid verminderen om parameters af te stemmen en het voorbijschieten van minima te vermijden" },
          { en: "Increase batch size during training for better efficiency", es: "Aumentar tamaño de lote durante entrenamiento para mejor eficiencia", de: "Batch-Größe während des Trainings für bessere Effizienz erhöhen", nl: "Batch-grootte verhogen tijdens training voor betere efficiëntie" },
          { en: "Automatically adjust network architecture", es: "Ajustar automáticamente la arquitectura de red", de: "Netzwerkarchitektur automatisch anpassen", nl: "Netwerkarchitectuur automatisch aanpassen" },
          { en: "Control the number of training epochs", es: "Controlar el número de épocas de entrenamiento", de: "Die Anzahl der Trainingsepochen steuern", nl: "Het aantal trainingsepochen controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate scheduling involves reducing the learning rate during training, typically using strategies like step decay, exponential decay, or cosine annealing. This helps the model converge to better local minima and prevents overshooting as the model approaches convergence.",
          es: "La programación de tasa de aprendizaje involucra reducir la tasa de aprendizaje durante el entrenamiento, típicamente usando estrategias como decaimiento por pasos, decaimiento exponencial, o recocido coseno. Esto ayuda al modelo a converger a mejores mínimos locales y previene sobrepasar mientras el modelo se acerca a la convergencia.",
          de: "Lernraten-Planung beinhaltet die Reduzierung der Lernrate während des Trainings, typischerweise mit Strategien wie Schritt-Zerfall, exponentieller Zerfall oder Kosinus-Annealing. Dies hilft dem Modell zu besseren lokalen Minima zu konvergieren und verhindert Überschießen während das Modell sich der Konvergenz nähert.",
          nl: "Leersnelheid-planning houdt in dat de leersnelheid tijdens training wordt verminderd, typisch met strategieën zoals stap-verval, exponentieel verval, of cosinus-annealing. Dit helpt het model convergeren naar betere lokale minima en voorkomt voorbijschieten terwijl het model convergentie nadert."
        }
      },
      {
        question: {
          en: "What is the effect of batch size on neural network training?",
          es: "¿Cuál es el efecto del tamaño de lote en el entrenamiento de redes neuronales?",
          de: "Was ist der Effekt der Batch-Größe auf das Training neuronaler Netzwerke?",
          nl: "Wat is het effect van batch-grootte op neurale netwerktraining?"
        },
        options: [
          { en: "Larger batches provide more stable gradients but may require lower learning rates", es: "Lotes más grandes proporcionan gradientes más estables pero pueden requerir tasas de aprendizaje menores", de: "Größere Batches bieten stabilere Gradienten können aber niedrigere Lernraten erfordern", nl: "Grotere batches bieden stabielere gradiënten maar kunnen lagere leersnelheden vereisen" },
          { en: "Batch size only affects training speed, not final performance", es: "El tamaño de lote solo afecta la velocidad de entrenamiento, no el rendimiento final", de: "Batch-Größe beeinflusst nur Trainingsgeschwindigkeit, nicht finale Leistung", nl: "Batch-grootte beïnvloedt alleen trainingssnelheid, niet de uiteindelijke prestaties" },
          { en: "Smaller batches always lead to better generalization", es: "Lotes más pequeños siempre llevan a mejor generalización", de: "Kleinere Batches führen immer zu besserer Generalisierung", nl: "Kleinere batches leiden altijd tot betere generalisatie" },
          { en: "Batch size must always equal the total dataset size", es: "El tamaño de lote debe siempre igualar el tamaño total del conjunto de datos", de: "Batch-Größe muss immer der gesamten Datensatzgröße entsprechen", nl: "Batch-grootte moet altijd gelijk zijn aan de totale datasetgrootte" }
        ],
        correct: 0,
        explanation: {
          en: "Larger batch sizes provide more accurate gradient estimates and stable training but may converge to sharper minima. Smaller batches add noise that can help escape poor local minima but may require more training steps. The choice involves trade-offs between training stability, generalization, and computational efficiency.",
          es: "Tamaños de lote más grandes proporcionan estimaciones de gradiente más precisas y entrenamiento estable pero pueden converger a mínimos más agudos. Lotes más pequeños agregan ruido que puede ayudar a escapar de mínimos locales pobres pero pueden requerir más pasos de entrenamiento. La elección involucra compromisos entre estabilidad de entrenamiento, generalización y eficiencia computacional.",
          de: "Größere Batch-Größen bieten genauere Gradientenschätzungen und stabiles Training können aber zu schärferen Minima konvergieren. Kleinere Batches fügen Rauschen hinzu das beim Entkommen aus schlechten lokalen Minima helfen kann aber mehr Trainingsschritte erfordern kann. Die Wahl beinhaltet Kompromisse zwischen Trainingsstabilität, Generalisierung und rechnerischer Effizienz.",
          nl: "Grotere batch-groottes bieden nauwkeurigere gradiëntschattingen en stabiele training maar kunnen convergeren naar scherpere minima. Kleinere batches voegen ruis toe die kan helpen ontsnappen uit slechte lokale minima maar kunnen meer trainingsstappen vereisen. De keuze houdt afwegingen in tussen trainingsstabiliteit, generalisatie en rekenkundige efficiëntie."
        }
      },
      {
        question: {
          en: "What is gradient clipping and why is it used?",
          es: "¿Qué es el recorte de gradientes y por qué se usa?",
          de: "Was ist Gradienten-Clipping und warum wird es verwendet?",
          nl: "Wat is gradiënt-clipping en waarom wordt het gebruikt?"
        },
        options: [
          { en: "Limiting gradient magnitudes to prevent exploding gradients in deep networks", es: "Limitar magnitudes de gradiente para prevenir gradientes explosivos en redes profundas", de: "Begrenzung von Gradientenmagnituden um explodierende Gradienten in tiefen Netzwerken zu verhindern", nl: "Gradiëntmagnitudes beperken om exploderende gradiënten in diepe netwerken te voorkomen" },
          { en: "Removing unnecessary gradients to speed up training", es: "Eliminar gradientes innecesarios para acelerar el entrenamiento", de: "Entfernung unnötiger Gradienten um Training zu beschleunigen", nl: "Onnodige gradiënten verwijderen om training te versnellen" },
          { en: "Clipping input data to a specific range", es: "Recortar datos de entrada a un rango específico", de: "Eingabedaten auf einen bestimmten Bereich beschneiden", nl: "Invoerdata knippen naar een specifiek bereik" },
          { en: "Reducing the number of parameters in the network", es: "Reducir el número de parámetros en la red", de: "Reduzierung der Anzahl Parameter im Netzwerk", nl: "Het aantal parameters in het netwerk verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient clipping limits the magnitude of gradients during backpropagation by scaling them down if they exceed a threshold. This prevents the exploding gradient problem, particularly common in RNNs and very deep networks, which can cause training instability and numerical overflow.",
          es: "El recorte de gradientes limita la magnitud de los gradientes durante retropropagación escalándolos hacia abajo si exceden un umbral. Esto previene el problema de gradientes explosivos, particularmente común en RNNs y redes muy profundas, que puede causar inestabilidad de entrenamiento y desbordamiento numérico.",
          de: "Gradienten-Clipping begrenzt die Magnitude von Gradienten während der Rückpropagation durch Herunterskalierung wenn sie einen Schwellwert überschreiten. Dies verhindert das Problem explodierender Gradienten, besonders häufig in RNNs und sehr tiefen Netzwerken, was Trainingsinstabilität und numerischen Überlauf verursachen kann.",
          nl: "Gradiënt-clipping beperkt de magnitude van gradiënten tijdens backpropagation door ze te verkleinen als ze een drempel overschrijden. Dit voorkomt het probleem van exploderende gradiënten, vooral gebruikelijk in RNN's en zeer diepe netwerken, wat trainingsinstabiliteit en numerieke overflow kan veroorzaken."
        }
      },
      {
        question: {
          en: "What is the purpose of warmup in learning rate schedules?",
          es: "¿Cuál es el propósito del calentamiento en programas de tasa de aprendizaje?",
          de: "Was ist der Zweck von Warmup in Lernraten-Zeitplänen?",
          nl: "Wat is het doel van warmup in leersnelheid-schema's?"
        },
        options: [
          { en: "Gradually increase learning rate at the beginning to stabilize training", es: "Aumentar gradualmente la tasa de aprendizaje al principio para estabilizar el entrenamiento", de: "Lernrate am Anfang schrittweise erhöhen um Training zu stabilisieren", nl: "Geleidelijk leersnelheid verhogen aan het begin om training te stabiliseren" },
          { en: "Pre-train the model on a simpler dataset", es: "Pre-entrenar el modelo en un conjunto de datos más simple", de: "Modell auf einem einfacheren Datensatz vortrainieren", nl: "Het model voortrainen op een eenvoudigere dataset" },
          { en: "Initialize weights to better starting values", es: "Inicializar pesos a mejores valores iniciales", de: "Gewichte auf bessere Anfangswerte initialisieren", nl: "Gewichten initialiseren naar betere startwaarden" },
          { en: "Gradually increase batch size during training", es: "Aumentar gradualmente el tamaño de lote durante entrenamiento", de: "Batch-Größe während des Trainings schrittweise erhöhen", nl: "Geleidelijk batch-grootte verhogen tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate warmup gradually increases the learning rate from a small value to the target learning rate over the first few epochs. This helps stabilize training in the early stages when parameters are far from optimal, preventing divergence and improving convergence, especially in large models.",
          es: "El calentamiento de tasa de aprendizaje aumenta gradualmente la tasa de aprendizaje desde un valor pequeño hasta la tasa objetivo durante las primeras épocas. Esto ayuda a estabilizar el entrenamiento en las etapas tempranas cuando los parámetros están lejos del óptimo, previniendo divergencia y mejorando convergencia, especialmente en modelos grandes.",
          de: "Lernraten-Warmup erhöht schrittweise die Lernrate von einem kleinen Wert zur Ziel-Lernrate über die ersten Epochen. Dies hilft Training in frühen Phasen zu stabilisieren wenn Parameter weit vom Optimum entfernt sind, verhindert Divergenz und verbessert Konvergenz, besonders bei großen Modellen.",
          nl: "Leersnelheid-warmup verhoogt geleidelijk de leersnelheid van een kleine waarde naar de doelleersnelheid gedurende de eerste paar epochs. Dit helpt training stabiliseren in de vroege stadia wanneer parameters ver van optimaal zijn, voorkomt divergentie en verbetert convergentie, vooral in grote modellen."
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
          { en: "L1 promotes sparsity (some weights become zero), L2 shrinks all weights proportionally", es: "L1 promueve dispersión (algunos pesos se vuelven cero), L2 encoge todos los pesos proporcionalmente", de: "L1 fördert Sparsamkeit (einige Gewichte werden null), L2 schrumpft alle Gewichte proportional", nl: "L1 bevordert sparsheid (sommige gewichten worden nul), L2 krimpt alle gewichten proportioneel" },
          { en: "L1 is faster to compute than L2 regularization", es: "L1 es más rápido de calcular que la regularización L2", de: "L1 ist schneller zu berechnen als L2-Regularisierung", nl: "L1 is sneller te berekenen dan L2 regularisatie" },
          { en: "L1 works only with linear models, L2 works with all models", es: "L1 funciona solo con modelos lineales, L2 funciona con todos los modelos", de: "L1 funktioniert nur mit linearen Modellen, L2 funktioniert mit allen Modellen", nl: "L1 werkt alleen met lineaire modellen, L2 werkt met alle modellen" },
          { en: "L1 prevents overfitting, L2 prevents underfitting", es: "L1 previene sobreajuste, L2 previene subajuste", de: "L1 verhindert Overfitting, L2 verhindert Underfitting", nl: "L1 voorkomt overfitting, L2 voorkomt underfitting" }
        ],
        correct: 0,
        explanation: {
          en: "L1 regularization adds the sum of absolute values of parameters to the loss, promoting sparse solutions where some weights become exactly zero. L2 regularization adds the sum of squared parameters, shrinking all weights toward zero but rarely making them exactly zero.",
          es: "La regularización L1 agrega la suma de valores absolutos de parámetros a la pérdida, promoviendo soluciones dispersas donde algunos pesos se vuelven exactamente cero. La regularización L2 agrega la suma de parámetros al cuadrado, encogiendo todos los pesos hacia cero pero rara vez haciéndolos exactamente cero.",
          de: "L1-Regularisierung fügt die Summe der Absolutwerte der Parameter zum Verlust hinzu und fördert sparsame Lösungen wo einige Gewichte genau null werden. L2-Regularisierung fügt die Summe der quadrierten Parameter hinzu und schrumpft alle Gewichte in Richtung null aber macht sie selten genau null.",
          nl: "L1 regularisatie voegt de som van absolute waarden van parameters toe aan het verlies, waardoor sparsame oplossingen worden bevorderd waarbij sommige gewichten precies nul worden. L2 regularisatie voegt de som van gekwadrateerde parameters toe, waardoor alle gewichten naar nul krimpen maar ze zelden precies nul maken."
        }
      },
      {
        question: {
          en: "What is early stopping and how does it prevent overfitting?",
          es: "¿Qué es la parada temprana y cómo previene el sobreajuste?",
          de: "Was ist Early Stopping und wie verhindert es Overfitting?",
          nl: "Wat is vroeg stoppen en hoe voorkomt het overfitting?"
        },
        options: [
          { en: "Stop training when validation performance stops improving to prevent overfitting", es: "Parar entrenamiento cuando el rendimiento de validación deja de mejorar para prevenir sobreajuste", de: "Training stoppen wenn Validierungsleistung aufhört sich zu verbessern um Overfitting zu verhindern", nl: "Training stoppen wanneer validatieprestaties stoppen met verbeteren om overfitting te voorkomen" },
          { en: "Stop training after a fixed number of epochs", es: "Parar entrenamiento después de un número fijo de épocas", de: "Training nach einer festen Anzahl von Epochen stoppen", nl: "Training stoppen na een vast aantal epochs" },
          { en: "Stop training when loss becomes zero", es: "Parar entrenamiento cuando la pérdida se vuelve cero", de: "Training stoppen wenn Verlust null wird", nl: "Training stoppen wanneer verlies nul wordt" },
          { en: "Stop training when learning rate becomes too small", es: "Parar entrenamiento cuando la tasa de aprendizaje se vuelve muy pequeña", de: "Training stoppen wenn Lernrate zu klein wird", nl: "Training stoppen wanneer leersnelheid te klein wordt" }
        ],
        correct: 0,
        explanation: {
          en: "Early stopping monitors validation performance and stops training when it stops improving for a specified number of epochs (patience). This prevents the model from overfitting to the training data by stopping at the point where it generalizes best to unseen data.",
          es: "La parada temprana monitorea el rendimiento de validación y para el entrenamiento cuando deja de mejorar por un número especificado de épocas (paciencia). Esto previene que el modelo se sobreajuste a los datos de entrenamiento parando en el punto donde generaliza mejor a datos no vistos.",
          de: "Early Stopping überwacht Validierungsleistung und stoppt Training wenn es für eine bestimmte Anzahl von Epochen (Geduld) aufhört sich zu verbessern. Dies verhindert dass das Modell zu Trainingsdaten overfittet durch Stoppen am Punkt wo es am besten zu ungesehenen Daten generalisiert.",
          nl: "Vroeg stoppen monitort validatieprestaties en stopt training wanneer het ophoudt met verbeteren gedurende een gespecificeerd aantal epochs (geduld). Dit voorkomt dat het model overfit op trainingsdata door te stoppen op het punt waar het het beste generaliseert naar onbekende data."
        }
      },
      {
        question: {
          en: "What is the purpose of data augmentation in neural network training?",
          es: "¿Cuál es el propósito de la aumentación de datos en entrenamiento de redes neuronales?",
          de: "Was ist der Zweck von Datenaugmentation beim Training neuronaler Netzwerke?",
          nl: "Wat is het doel van data-augmentatie bij neurale netwerktraining?"
        },
        options: [
          { en: "Artificially increase dataset size and diversity to improve generalization", es: "Aumentar artificialmente el tamaño y diversidad del conjunto de datos para mejorar generalización", de: "Datensatzgröße und -vielfalt künstlich erhöhen um Generalisierung zu verbessern", nl: "Kunstmatig datasetgrootte en diversiteit verhogen om generalisatie te verbeteren" },
          { en: "Reduce the computational cost of training", es: "Reducir el costo computacional del entrenamiento", de: "Die rechnerischen Kosten des Trainings reduzieren", nl: "De rekenkosten van training verminderen" },
          { en: "Improve the quality of existing data samples", es: "Mejorar la calidad de muestras de datos existentes", de: "Die Qualität bestehender Datenproben verbessern", nl: "De kwaliteit van bestaande datasamples verbeteren" },
          { en: "Convert data to a standardized format", es: "Convertir datos a un formato estandarizado", de: "Daten in ein standardisiertes Format konvertieren", nl: "Data converteren naar een gestandaardiseerd formaat" }
        ],
        correct: 0,
        explanation: {
          en: "Data augmentation applies transformations like rotation, scaling, cropping, or noise addition to existing training samples to create new, slightly different versions. This increases effective dataset size, improves model robustness, and helps prevent overfitting by exposing the model to more variations.",
          es: "La aumentación de datos aplica transformaciones como rotación, escalado, recorte o adición de ruido a muestras de entrenamiento existentes para crear versiones nuevas ligeramente diferentes. Esto aumenta el tamaño efectivo del conjunto de datos, mejora la robustez del modelo y ayuda a prevenir sobreajuste exponiendo el modelo a más variaciones.",
          de: "Datenaugmentation wendet Transformationen wie Rotation, Skalierung, Beschneidung oder Rauschhinzufügung auf bestehende Trainingsproben an um neue, leicht unterschiedliche Versionen zu erstellen. Dies erhöht die effektive Datensatzgröße, verbessert Modellrobustheit und hilft Overfitting zu verhindern durch Exposition des Modells zu mehr Variationen.",
          nl: "Data-augmentatie past transformaties toe zoals rotatie, schaling, bijsnijden of ruistoevoeging op bestaande trainingssamples om nieuwe, lichtelijk verschillende versies te creëren. Dit verhoogt de effectieve datasetgrootte, verbetert modelrobuustheid en helpt overfitting voorkomen door het model bloot te stellen aan meer variaties."
        }
      },
      {
        question: {
          en: "What is the difference between momentum and learning rate in SGD?",
          es: "¿Cuál es la diferencia entre momentum y tasa de aprendizaje en SGD?",
          de: "Was ist der Unterschied zwischen Momentum und Lernrate in SGD?",
          nl: "Wat is het verschil tussen momentum en leersnelheid in SGD?"
        },
        options: [
          { en: "Learning rate controls step size, momentum uses previous gradients to smooth updates", es: "La tasa de aprendizaje controla el tamaño del paso, momentum usa gradientes previos para suavizar actualizaciones", de: "Lernrate steuert Schrittgröße, Momentum verwendet vorherige Gradienten um Updates zu glätten", nl: "Leersnelheid controleert stapgrootte, momentum gebruikt vorige gradiënten om updates glad te maken" },
          { en: "Both parameters serve the same purpose in optimization", es: "Ambos parámetros sirven el mismo propósito en optimización", de: "Beide Parameter dienen demselben Zweck in der Optimierung", nl: "Beide parameters dienen hetzelfde doel in optimalisatie" },
          { en: "Momentum controls step size, learning rate provides memory", es: "Momentum controla el tamaño del paso, tasa de aprendizaje proporciona memoria", de: "Momentum steuert Schrittgröße, Lernrate bietet Gedächtnis", nl: "Momentum controleert stapgrootte, leersnelheid biedt geheugen" },
          { en: "Learning rate is for classification, momentum is for regression", es: "Tasa de aprendizaje es para clasificación, momentum es para regresión", de: "Lernrate ist für Klassifikation, Momentum ist für Regression", nl: "Leersnelheid is voor classificatie, momentum is voor regressie" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate determines how large steps to take in the direction of the gradient. Momentum accumulates a moving average of past gradients to smooth the optimization path, helping accelerate convergence and dampen oscillations in the loss landscape.",
          es: "La tasa de aprendizaje determina qué tan grandes pasos tomar en la dirección del gradiente. Momentum acumula un promedio móvil de gradientes pasados para suavizar el camino de optimización, ayudando a acelerar convergencia y amortiguar oscilaciones en el paisaje de pérdida.",
          de: "Lernrate bestimmt wie große Schritte in Richtung des Gradienten zu nehmen sind. Momentum akkumuliert einen gleitenden Durchschnitt vergangener Gradienten um den Optimierungspfad zu glätten, hilft Konvergenz zu beschleunigen und Oszillationen in der Verlustlandschaft zu dämpfen.",
          nl: "Leersnelheid bepaalt hoe grote stappen te nemen in de richting van de gradiënt. Momentum accumuleert een voortschrijdend gemiddelde van vorige gradiënten om het optimalisatiepad glad te maken, helpt convergentie versnellen en oscillaties in het verlieslandschap dempen."
        }
      },
      {
        question: {
          en: "What is curriculum learning in neural network training?",
          es: "¿Qué es el aprendizaje curricular en entrenamiento de redes neuronales?",
          de: "Was ist Curriculum Learning beim Training neuronaler Netzwerke?",
          nl: "Wat is curriculum learning bij neurale netwerktraining?"
        },
        options: [
          { en: "Training on easy examples first, then gradually increasing difficulty", es: "Entrenar en ejemplos fáciles primero, luego aumentar gradualmente la dificultad", de: "Zuerst auf einfachen Beispielen trainieren, dann schrittweise Schwierigkeit erhöhen", nl: "Eerst trainen op gemakkelijke voorbeelden, dan geleidelijk moeilijkheid verhogen" },
          { en: "Training multiple models simultaneously", es: "Entrenar múltiples modelos simultáneamente", de: "Mehrere Modelle gleichzeitig trainieren", nl: "Meerdere modellen tegelijkertijd trainen" },
          { en: "Using different learning rates for different layers", es: "Usar diferentes tasas de aprendizaje para diferentes capas", de: "Verschiedene Lernraten für verschiedene Schichten verwenden", nl: "Verschillende leersnelheden gebruiken voor verschillende lagen" },
          { en: "Alternating between different datasets during training", es: "Alternar entre diferentes conjuntos de datos durante entrenamiento", de: "Zwischen verschiedenen Datensätzen während des Trainings wechseln", nl: "Afwisselen tussen verschillende datasets tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Curriculum learning mimics human learning by presenting training examples in order of increasing difficulty. Starting with easier examples helps the model learn fundamental patterns before tackling more complex cases, often leading to faster convergence and better final performance.",
          es: "El aprendizaje curricular imita el aprendizaje humano presentando ejemplos de entrenamiento en orden de dificultad creciente. Comenzar con ejemplos más fáciles ayuda al modelo a aprender patrones fundamentales antes de abordar casos más complejos, a menudo llevando a convergencia más rápida y mejor rendimiento final.",
          de: "Curriculum Learning ahmt menschliches Lernen nach durch Präsentation von Trainingsbeispielen in Reihenfolge steigender Schwierigkeit. Mit einfacheren Beispielen zu beginnen hilft dem Modell grundlegende Muster zu lernen bevor komplexere Fälle angegangen werden, führt oft zu schnellerer Konvergenz und besserer Endleistung.",
          nl: "Curriculum learning bootst menselijk leren na door trainingsvoorbeelden te presenteren in volgorde van toenemende moeilijkheid. Beginnen met gemakkelijkere voorbeelden helpt het model fundamentele patronen te leren voordat complexere gevallen worden aangepakt, wat vaak leidt tot snellere convergentie en betere eindprestaties."
        }
      },
      {
        question: {
          en: "What is the purpose of weight decay in neural network optimization?",
          es: "¿Cuál es el propósito del decaimiento de pesos en optimización de redes neuronales?",
          de: "Was ist der Zweck von Gewichtsverfall in der Optimierung neuronaler Netzwerke?",
          nl: "Wat is het doel van gewichtsverval in neurale netwerkoptimalisatie?"
        },
        options: [
          { en: "Add L2 regularization penalty to prevent overfitting by shrinking weights", es: "Agregar penalización de regularización L2 para prevenir sobreajuste encogiendo pesos", de: "L2-Regularisierungsstrafe hinzufügen um Overfitting durch Gewichtsschrumpfung zu verhindern", nl: "L2 regularisatiestraf toevoegen om overfitting te voorkomen door gewichten te krimpen" },
          { en: "Gradually reduce the number of parameters during training", es: "Reducir gradualmente el número de parámetros durante entrenamiento", de: "Die Anzahl der Parameter während des Trainings schrittweise reduzieren", nl: "Geleidelijk het aantal parameters verminderen tijdens training" },
          { en: "Automatically adjust learning rate based on weight magnitudes", es: "Ajustar automáticamente la tasa de aprendizaje basada en magnitudes de peso", de: "Lernrate automatisch basierend auf Gewichtsmagnituden anpassen", nl: "Automatisch leersnelheid aanpassen gebaseerd op gewichtmagnitudes" },
          { en: "Remove weights that become too small during training", es: "Eliminar pesos que se vuelven muy pequeños durante entrenamiento", de: "Gewichte entfernen die während des Trainings zu klein werden", nl: "Gewichten verwijderen die te klein worden tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Weight decay adds a penalty term proportional to the squared magnitude of weights (L2 regularization) to the loss function. This encourages the model to keep weights small, preventing overfitting and improving generalization by reducing model complexity.",
          es: "El decaimiento de pesos agrega un término de penalización proporcional a la magnitud al cuadrado de los pesos (regularización L2) a la función de pérdida. Esto anima al modelo a mantener pesos pequeños, previniendo sobreajuste y mejorando generalización reduciendo complejidad del modelo.",
          de: "Gewichtsverfall fügt einen Strafterm proportional zur quadrierten Magnitude der Gewichte (L2-Regularisierung) zur Verlustfunktion hinzu. Dies ermutigt das Modell Gewichte klein zu halten, verhindert Overfitting und verbessert Generalisierung durch Reduzierung der Modellkomplexität.",
          nl: "Gewichtsverval voegt een strafterm proportioneel aan de gekwadrateerde magnitude van gewichten (L2 regularisatie) toe aan de verliesfunctie. Dit moedigt het model aan om gewichten klein te houden, voorkomt overfitting en verbetert generalisatie door modelcomplexiteit te verminderen."
        }
      },
      {
        question: {
          en: "What is the difference between synchronous and asynchronous SGD in distributed training?",
          es: "¿Cuál es la diferencia entre SGD síncrono y asíncrono en entrenamiento distribuido?",
          de: "Was ist der Unterschied zwischen synchronem und asynchronem SGD beim verteilten Training?",
          nl: "Wat is het verschil tussen synchrone en asynchrone SGD bij gedistribueerde training?"
        },
        options: [
          { en: "Synchronous waits for all workers to compute gradients, asynchronous updates immediately", es: "Síncrono espera que todos los trabajadores calculen gradientes, asíncrono actualiza inmediatamente", de: "Synchron wartet dass alle Arbeiter Gradienten berechnen, asynchron aktualisiert sofort", nl: "Synchroon wacht tot alle workers gradiënten berekenen, asynchroon update onmiddellijk" },
          { en: "Synchronous uses different learning rates, asynchronous uses the same rate", es: "Síncrono usa diferentes tasas de aprendizaje, asíncrono usa la misma tasa", de: "Synchron verwendet verschiedene Lernraten, asynchron verwendet dieselbe Rate", nl: "Synchroon gebruikt verschillende leersnelheden, asynchroon gebruikt dezelfde snelheid" },
          { en: "Synchronous is faster but less accurate than asynchronous", es: "Síncrono es más rápido pero menos preciso que asíncrono", de: "Synchron ist schneller aber weniger genau als asynchron", nl: "Synchroon is sneller maar minder nauwkeurig dan asynchroon" },
          { en: "Synchronous trains on CPUs, asynchronous trains on GPUs", es: "Síncrono entrena en CPUs, asíncrono entrena en GPUs", de: "Synchron trainiert auf CPUs, asynchron trainiert auf GPUs", nl: "Synchroon traint op CPU's, asynchroon traint op GPU's" }
        ],
        correct: 0,
        explanation: {
          en: "Synchronous SGD waits for all workers to compute their gradients before updating parameters, ensuring consistent updates but potentially slower due to waiting for the slowest worker. Asynchronous SGD allows workers to update parameters independently, providing faster throughput but potentially stale gradients.",
          es: "SGD síncrono espera que todos los trabajadores calculen sus gradientes antes de actualizar parámetros, asegurando actualizaciones consistentes pero potencialmente más lento debido a esperar al trabajador más lento. SGD asíncrono permite a los trabajadores actualizar parámetros independientemente, proporcionando mayor rendimiento pero potencialmente gradientes obsoletos.",
          de: "Synchrones SGD wartet dass alle Arbeiter ihre Gradienten berechnen bevor Parameter aktualisiert werden, gewährleistet konsistente Updates aber potenziell langsamer durch Warten auf den langsamsten Arbeiter. Asynchrones SGD erlaubt Arbeitern Parameter unabhängig zu aktualisieren, bietet schnelleren Durchsatz aber potenziell veraltete Gradienten.",
          nl: "Synchrone SGD wacht tot alle workers hun gradiënten berekenen voordat parameters worden bijgewerkt, zorgt voor consistente updates maar mogelijk langzamer door wachten op de langzaamste worker. Asynchrone SGD stelt workers in staat parameters onafhankelijk bij te werken, biedt snellere doorvoer maar mogelijk verouderde gradiënten."
        }
      },
      {
        question: {
          en: "What is the purpose of mixed precision training?",
          es: "¿Cuál es el propósito del entrenamiento de precisión mixta?",
          de: "Was ist der Zweck von Mixed-Precision-Training?",
          nl: "Wat is het doel van mixed precision training?"
        },
        options: [
          { en: "Use both 16-bit and 32-bit floating point to speed up training while maintaining accuracy", es: "Usar punto flotante de 16 y 32 bits para acelerar entrenamiento manteniendo precisión", de: "16-Bit und 32-Bit Gleitkomma verwenden um Training zu beschleunigen bei gleichbleibender Genauigkeit", nl: "Zowel 16-bit als 32-bit floating point gebruiken om training te versnellen terwijl nauwkeurigheid behouden blijft" },
          { en: "Train on both labeled and unlabeled data simultaneously", es: "Entrenar en datos etiquetados y no etiquetados simultáneamente", de: "Auf gelabelten und ungelabelten Daten gleichzeitig trainieren", nl: "Tegelijkertijd trainen op gelabelde en ongelabelde data" },
          { en: "Use different precision for different layers", es: "Usar diferente precisión para diferentes capas", de: "Verschiedene Präzision für verschiedene Schichten verwenden", nl: "Verschillende precisie gebruiken voor verschillende lagen" },
          { en: "Alternate between high and low precision during epochs", es: "Alternar entre alta y baja precisión durante épocas", de: "Zwischen hoher und niedriger Präzision während Epochen wechseln", nl: "Afwisselen tussen hoge en lage precisie tijdens epochs" }
        ],
        correct: 0,
        explanation: {
          en: "Mixed precision training uses 16-bit (half precision) for most operations to reduce memory usage and increase training speed, while keeping certain operations in 32-bit (single precision) to maintain numerical stability and model accuracy.",
          es: "El entrenamiento de precisión mixta usa 16 bits (media precisión) para la mayoría de operaciones para reducir uso de memoria y aumentar velocidad de entrenamiento, mientras mantiene ciertas operaciones en 32 bits (precisión simple) para mantener estabilidad numérica y precisión del modelo.",
          de: "Mixed-Precision-Training verwendet 16-Bit (halbe Präzision) für die meisten Operationen um Speicherverbrauch zu reduzieren und Trainingsgeschwindigkeit zu erhöhen, während bestimmte Operationen in 32-Bit (einfache Präzision) gehalten werden um numerische Stabilität und Modellgenauigkeit zu erhalten.",
          nl: "Mixed precision training gebruikt 16-bit (halve precisie) voor de meeste operaties om geheugengebruik te verminderen en trainingssnelheid te verhogen, terwijl bepaalde operaties in 32-bit (enkele precisie) worden gehouden om numerieke stabiliteit en modelnauwkeurigheid te behouden."
        }
      },
      {
        question: {
          en: "What is the cyclical learning rate strategy?",
          es: "¿Qué es la estrategia de tasa de aprendizaje cíclica?",
          de: "Was ist die zyklische Lernraten-Strategie?",
          nl: "Wat is de cyclische leersnelheid-strategie?"
        },
        options: [
          { en: "Periodically vary learning rate between minimum and maximum bounds", es: "Variar periódicamente la tasa de aprendizaje entre límites mínimos y máximos", de: "Lernrate periodisch zwischen minimalen und maximalen Grenzen variieren", nl: "Periodiek leersnelheid variëren tussen minimum en maximum grenzen" },
          { en: "Reset learning rate to initial value after each epoch", es: "Resetear tasa de aprendizaje al valor inicial después de cada época", de: "Lernrate nach jeder Epoche auf Anfangswert zurücksetzen", nl: "Leersnelheid na elke epoch resetten naar initiële waarde" },
          { en: "Use different learning rates for different parameters", es: "Usar diferentes tasas de aprendizaje para diferentes parámetros", de: "Verschiedene Lernraten für verschiedene Parameter verwenden", nl: "Verschillende leersnelheden gebruiken voor verschillende parameters" },
          { en: "Gradually increase learning rate throughout training", es: "Aumentar gradualmente la tasa de aprendizaje durante todo el entrenamiento", de: "Lernrate während des gesamten Trainings schrittweise erhöhen", nl: "Geleidelijk leersnelheid verhogen gedurende training" }
        ],
        correct: 0,
        explanation: {
          en: "Cyclical learning rates eliminate the need to tune learning rate by cycling between reasonable boundary values. This can help escape saddle points and local minima, often leading to faster convergence and better final performance than fixed learning rates.",
          es: "Las tasas de aprendizaje cíclicas eliminan la necesidad de ajustar la tasa de aprendizaje ciclando entre valores límite razonables. Esto puede ayudar a escapar de puntos de silla y mínimos locales, a menudo llevando a convergencia más rápida y mejor rendimiento final que tasas de aprendizaje fijas.",
          de: "Zyklische Lernraten eliminieren die Notwendigkeit Lernraten zu tunen durch Zyklen zwischen vernünftigen Grenzwerten. Dies kann beim Entkommen aus Sattelpunkten und lokalen Minima helfen, führt oft zu schnellerer Konvergenz und besserer Endleistung als feste Lernraten.",
          nl: "Cyclische leersnelheden elimineren de noodzaak om leersnelheid af te stemmen door te cyclen tussen redelijke grenswaarden. Dit kan helpen ontsnappen uit zadelpunten en lokale minima, wat vaak leidt tot snellere convergentie en betere eindprestaties dan vaste leersnelheden."
        }
      },
      {
        question: {
          en: "What is label smoothing and how does it help training?",
          es: "¿Qué es el suavizado de etiquetas y cómo ayuda al entrenamiento?",
          de: "Was ist Label Smoothing und wie hilft es beim Training?",
          nl: "Wat is label smoothing en hoe helpt het bij training?"
        },
        options: [
          { en: "Replace hard targets with soft probability distributions to prevent overconfidence", es: "Reemplazar objetivos duros con distribuciones de probabilidad suaves para prevenir exceso de confianza", de: "Harte Ziele durch weiche Wahrscheinlichkeitsverteilungen ersetzen um Selbstüberschätzung zu verhindern", nl: "Harde doelen vervangen door zachte waarschijnlijkheidsverdelingen om overzekerheid te voorkomen" },
          { en: "Apply Gaussian smoothing to input images", es: "Aplicar suavizado gaussiano a imágenes de entrada", de: "Gaußsche Glättung auf Eingabebilder anwenden", nl: "Gaussiaanse smoothing toepassen op invoerbeelden" },
          { en: "Smooth the loss function to avoid local minima", es: "Suavizar la función de pérdida para evitar mínimos locales", de: "Verlustfunktion glätten um lokale Minima zu vermeiden", nl: "Verliesfunctie gladstrijken om lokale minima te vermijden" },
          { en: "Use interpolation between different training examples", es: "Usar interpolación entre diferentes ejemplos de entrenamiento", de: "Interpolation zwischen verschiedenen Trainingsbeispielen verwenden", nl: "Interpolatie gebruiken tussen verschillende trainingsvoorbeelden" }
        ],
        correct: 0,
        explanation: {
          en: "Label smoothing replaces one-hot encoded targets with softened distributions, typically assigning most probability to the correct class but some small probability to other classes. This prevents the model from becoming overconfident and often improves generalization.",
          es: "El suavizado de etiquetas reemplaza objetivos codificados one-hot con distribuciones suavizadas, típicamente asignando la mayor probabilidad a la clase correcta pero alguna probabilidad pequeña a otras clases. Esto previene que el modelo se vuelva excesivamente confiado y a menudo mejora la generalización.",
          de: "Label Smoothing ersetzt One-Hot-kodierte Ziele durch weiche Verteilungen, typischerweise die meiste Wahrscheinlichkeit der korrekten Klasse zuweisend aber etwas kleine Wahrscheinlichkeit anderen Klassen. Dies verhindert dass das Modell selbstüberschätzt wird und verbessert oft Generalisierung.",
          nl: "Label smoothing vervangt one-hot gecodeerde doelen door verzachte verdelingen, typisch de meeste waarschijnlijkheid toewijzend aan de juiste klasse maar wat kleine waarschijnlijkheid aan andere klassen. Dit voorkomt dat het model overzeker wordt en verbetert vaak generalisatie."
        }
      },
      {
        question: {
          en: "What is the advantage of using cosine annealing for learning rate scheduling?",
          es: "¿Cuál es la ventaja de usar recocido coseno para programación de tasa de aprendizaje?",
          de: "Was ist der Vorteil der Verwendung von Kosinus-Annealing für Lernraten-Planung?",
          nl: "Wat is het voordeel van het gebruik van cosinus-annealing voor leersnelheid-planning?"
        },
        options: [
          { en: "Smooth gradual decay that can periodically restart to escape local minima", es: "Decaimiento gradual suave que puede reiniciarse periódicamente para escapar mínimos locales", de: "Sanfter gradueller Zerfall der periodisch neustarten kann um lokale Minima zu entkommen", nl: "Vloeiend geleidelijk verval dat periodiek kan herstarten om lokale minima te ontsnappen" },
          { en: "Faster convergence than all other scheduling methods", es: "Convergencia más rápida que todos los otros métodos de programación", de: "Schnellere Konvergenz als alle anderen Planungsmethoden", nl: "Snellere convergentie dan alle andere planningsmethoden" },
          { en: "Requires no hyperparameter tuning", es: "No requiere ajuste de hiperparámetros", de: "Erfordert kein Hyperparameter-Tuning", nl: "Vereist geen hyperparameter-tuning" },
          { en: "Works only with Adam optimizer", es: "Funciona solo con optimizador Adam", de: "Funktioniert nur mit Adam-Optimierer", nl: "Werkt alleen met Adam-optimizer" }
        ],
        correct: 0,
        explanation: {
          en: "Cosine annealing provides smooth, continuous decay following a cosine curve. With restarts (SGDR), it can periodically increase learning rate to help escape local minima and explore different regions of the loss landscape, often finding better solutions.",
          es: "El recocido coseno proporciona decaimiento suave y continuo siguiendo una curva coseno. Con reinicios (SGDR), puede aumentar periódicamente la tasa de aprendizaje para ayudar a escapar mínimos locales y explorar diferentes regiones del paisaje de pérdida, a menudo encontrando mejores soluciones.",
          de: "Kosinus-Annealing bietet sanften, kontinuierlichen Zerfall entlang einer Kosinus-Kurve. Mit Neustarts (SGDR) kann es periodisch die Lernrate erhöhen um beim Entkommen aus lokalen Minima zu helfen und verschiedene Regionen der Verlustlandschaft zu erkunden, oft bessere Lösungen findend.",
          nl: "Cosinus-annealing biedt vloeiend, continu verval volgens een cosinus-curve. Met herstarts (SGDR) kan het periodiek leersnelheid verhogen om te helpen ontsnappen uit lokale minima en verschillende gebieden van het verlieslandschap te verkennen, vaak betere oplossingen vindend."
        }
      },
      {
        question: {
          en: "What is the purpose of gradient accumulation in training?",
          es: "¿Cuál es el propósito de la acumulación de gradientes en entrenamiento?",
          de: "Was ist der Zweck von Gradientenakkumulation beim Training?",
          nl: "Wat is het doel van gradiëntaccumulatie bij training?"
        },
        options: [
          { en: "Simulate larger batch sizes when memory is limited by accumulating gradients over multiple mini-batches", es: "Simular tamaños de lote más grandes cuando la memoria es limitada acumulando gradientes sobre múltiples mini-lotes", de: "Größere Batch-Größen simulieren wenn Speicher begrenzt ist durch Akkumulation von Gradienten über mehrere Mini-Batches", nl: "Grotere batch-groottes simuleren wanneer geheugen beperkt is door gradiënten te accumuleren over meerdere mini-batches" },
          { en: "Store all gradients from previous epochs for reference", es: "Almacenar todos los gradientes de épocas previas para referencia", de: "Alle Gradienten von vorherigen Epochen zur Referenz speichern", nl: "Alle gradiënten van vorige epochs opslaan voor referentie" },
          { en: "Prevent gradient explosion by accumulating slowly", es: "Prevenir explosión de gradientes acumulando lentamente", de: "Gradientenexplosion durch langsame Akkumulation verhindern", nl: "Gradiëntexplosie voorkomen door langzaam te accumuleren" },
          { en: "Average gradients across different model architectures", es: "Promediar gradientes a través de diferentes arquitecturas de modelo", de: "Gradienten über verschiedene Modellarchitekturen mitteln", nl: "Gradiënten middelen over verschillende modelarchitecturen" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient accumulation allows training with effective larger batch sizes when GPU memory is insufficient for the desired batch size. Gradients are computed and accumulated over multiple mini-batches before updating parameters, achieving similar effects to larger batches.",
          es: "La acumulación de gradientes permite entrenar con tamaños de lote efectivamente más grandes cuando la memoria GPU es insuficiente para el tamaño de lote deseado. Los gradientes se calculan y acumulan sobre múltiples mini-lotes antes de actualizar parámetros, logrando efectos similares a lotes más grandes.",
          de: "Gradientenakkumulation ermöglicht Training mit effektiv größeren Batch-Größen wenn GPU-Speicher für die gewünschte Batch-Größe unzureichend ist. Gradienten werden über mehrere Mini-Batches berechnet und akkumuliert bevor Parameter aktualisiert werden, erreicht ähnliche Effekte wie größere Batches.",
          nl: "Gradiëntaccumulatie maakt training mogelijk met effectief grotere batch-groottes wanneer GPU-geheugen ontoereikend is voor de gewenste batch-grootte. Gradiënten worden berekend en geaccumuleerd over meerdere mini-batches voordat parameters worden bijgewerkt, waarbij vergelijkbare effecten worden bereikt als grotere batches."
        }
      },
      {
        question: {
          en: "What is knowledge distillation in neural network training?",
          es: "¿Qué es la destilación de conocimiento en entrenamiento de redes neuronales?",
          de: "Was ist Wissensdestillation beim Training neuronaler Netzwerke?",
          nl: "Wat is kennisdistillatie bij neurale netwerktraining?"
        },
        options: [
          { en: "Train a smaller student model to mimic a larger teacher model's behavior", es: "Entrenar un modelo estudiante más pequeño para imitar el comportamiento de un modelo profesor más grande", de: "Ein kleineres Schüler-Modell trainieren um das Verhalten eines größeren Lehrer-Modells nachzuahmen", nl: "Een kleiner studentmodel trainen om het gedrag van een groter lerarenmodel na te bootsen" },
          { en: "Extract important features from trained models", es: "Extraer características importantes de modelos entrenados", de: "Wichtige Features aus trainierten Modellen extrahieren", nl: "Belangrijke features extraheren uit getrainde modellen" },
          { en: "Reduce the precision of model weights to compress it", es: "Reducir la precisión de pesos del modelo para comprimirlo", de: "Präzision von Modellgewichten reduzieren um es zu komprimieren", nl: "Precisie van modelgewichten verminderen om het te comprimeren" },
          { en: "Transfer learning between different domains", es: "Aprendizaje de transferencia entre diferentes dominios", de: "Transfer Learning zwischen verschiedenen Domänen", nl: "Transfer learning tussen verschillende domeinen" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge distillation involves training a smaller 'student' network to reproduce the soft probability outputs of a larger 'teacher' network. The student learns not just from the hard labels but from the teacher's probability distributions, often achieving comparable performance with fewer parameters.",
          es: "La destilación de conocimiento involucra entrenar una red 'estudiante' más pequeña para reproducir las salidas de probabilidad suaves de una red 'profesor' más grande. El estudiante aprende no solo de etiquetas duras sino de las distribuciones de probabilidad del profesor, a menudo logrando rendimiento comparable con menos parámetros.",
          de: "Wissensdestillation beinhaltet das Training eines kleineren 'Schüler'-Netzwerks um die weichen Wahrscheinlichkeitsausgaben eines größeren 'Lehrer'-Netzwerks zu reproduzieren. Der Schüler lernt nicht nur von harten Labels sondern von den Wahrscheinlichkeitsverteilungen des Lehrers, erreicht oft vergleichbare Leistung mit weniger Parametern.",
          nl: "Kennisdistillatie houdt in dat een kleiner 'student'-netwerk wordt getraind om de zachte waarschijnlijkheidsoutputs van een groter 'leraren'-netwerk te reproduceren. De student leert niet alleen van harde labels maar van de waarschijnlijkheidsverdelingen van de leraar, en bereikt vaak vergelijkbare prestaties met minder parameters."
        }
      },
      {
        question: {
          en: "What is the purpose of learning rate finder/range test?",
          es: "¿Cuál es el propósito del buscador/prueba de rango de tasa de aprendizaje?",
          de: "Was ist der Zweck des Lernraten-Finders/Bereichstests?",
          nl: "Wat is het doel van de leersnelheid-finder/bereiktest?"
        },
        options: [
          { en: "Find optimal learning rate by plotting loss vs learning rate across a range", es: "Encontrar tasa de aprendizaje óptima graficando pérdida vs tasa de aprendizaje en un rango", de: "Optimale Lernrate finden durch Plotting von Verlust vs Lernrate über einen Bereich", nl: "Optimale leersnelheid vinden door verlies vs leersnelheid te plotten over een bereik" },
          { en: "Test different batch sizes to find the optimal one", es: "Probar diferentes tamaños de lote para encontrar el óptimo", de: "Verschiedene Batch-Größen testen um die optimale zu finden", nl: "Verschillende batch-groottes testen om de optimale te vinden" },
          { en: "Validate model performance across different learning rates", es: "Validar rendimiento del modelo a través de diferentes tasas de aprendizaje", de: "Modellleistung über verschiedene Lernraten validieren", nl: "Modelprestaties valideren over verschillende leersnelheden" },
          { en: "Find the maximum learning rate the model can handle", es: "Encontrar la tasa de aprendizaje máxima que el modelo puede manejar", de: "Maximale Lernrate finden die das Modell handhaben kann", nl: "Maximale leersnelheid vinden die het model aankan" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate finder involves training briefly while exponentially increasing learning rate and plotting the resulting loss. The optimal learning rate is typically chosen at the steepest descent point before loss starts increasing, providing a principled way to set learning rates.",
          es: "El buscador de tasa de aprendizaje involucra entrenar brevemente mientras se aumenta exponencialmente la tasa de aprendizaje y graficar la pérdida resultante. La tasa de aprendizaje óptima se elige típicamente en el punto de descenso más pronunciado antes de que la pérdida comience a aumentar, proporcionando una forma principista de establecer tasas de aprendizaje.",
          de: "Lernraten-Finder beinhaltet kurzes Training während exponentieller Erhöhung der Lernrate und Plotting des resultierenden Verlusts. Die optimale Lernrate wird typischerweise am steilsten Abstiegspunkt vor Verlustanstieg gewählt, bietet einen prinzipiellen Weg Lernraten zu setzen.",
          nl: "Leersnelheid-finder houdt in dat kort wordt getraind terwijl de leersnelheid exponentieel wordt verhoogd en het resulterende verlies wordt geplot. De optimale leersnelheid wordt typisch gekozen op het steilste afdalingspunt voordat het verlies begint te stijgen, wat een principiële manier biedt om leersnelheden in te stellen."
        }
      },
      {
        question: {
          en: "What is the One Cycle Learning Rate policy and its advantages?",
          es: "¿Qué es la política de Tasa de Aprendizaje de Un Ciclo y sus ventajas?",
          de: "Was ist die One Cycle Learning Rate-Politik und ihre Vorteile?",
          nl: "Wat is het One Cycle Learning Rate-beleid en zijn voordelen?"
        },
        options: [
          { en: "Train with high learning rates for most of training, then quickly decay to achieve fast convergence", es: "Entrenar con tasas de aprendizaje altas durante la mayor parte del entrenamiento, luego decaer rápidamente para lograr convergencia rápida", de: "Mit hohen Lernraten für den Großteil des Trainings trainieren, dann schnell zerfallen für schnelle Konvergenz", nl: "Trainen met hoge leersnelheden voor het grootste deel van training, dan snel vervallen om snelle convergentie te bereiken" },
          { en: "Complete exactly one epoch of training for optimal performance", es: "Completar exactamente una época de entrenamiento para rendimiento óptimo", de: "Genau eine Trainingsepoche für optimale Leistung absolvieren", nl: "Precies één epoch training voltooien voor optimale prestaties" },
          { en: "Use one fixed learning rate throughout the entire training process", es: "Usar una tasa de aprendizaje fija durante todo el proceso de entrenamiento", de: "Eine feste Lernrate während des gesamten Trainingsprozesses verwenden", nl: "Eén vaste leersnelheid gebruiken gedurende het hele trainingsproces" },
          { en: "Cycle through different optimizers once during training", es: "Ciclar a través de diferentes optimizadores una vez durante entrenamiento", de: "Einmal während des Trainings durch verschiedene Optimierer zyklieren", nl: "Eenmaal door verschillende optimizers cyclen tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "One Cycle Learning Rate starts with a low learning rate, quickly increases to a maximum value (often much higher than typically used), then rapidly decreases. This allows faster training with better generalization by enabling the model to escape local minima and converge quickly to better solutions.",
          es: "La Tasa de Aprendizaje de Un Ciclo comienza con una tasa baja, aumenta rápidamente a un valor máximo (a menudo mucho más alto de lo típicamente usado), luego disminuye rápidamente. Esto permite entrenamiento más rápido con mejor generalización permitiendo al modelo escapar mínimos locales y converger rápidamente a mejores soluciones.",
          de: "One Cycle Learning Rate beginnt mit einer niedrigen Lernrate, steigt schnell auf einen Maximalwert (oft viel höher als typisch verwendet), dann nimmt schnell ab. Dies ermöglicht schnelleres Training mit besserer Generalisierung durch Ermöglichung des Modells lokale Minima zu entkommen und schnell zu besseren Lösungen zu konvergieren.",
          nl: "One Cycle Learning Rate begint met een lage leersnelheid, stijgt snel naar een maximumwaarde (vaak veel hoger dan typisch gebruikt), daalt dan snel. Dit maakt snellere training mogelijk met betere generalisatie door het model in staat te stellen lokale minima te ontsnappen en snel te convergeren naar betere oplossingen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
