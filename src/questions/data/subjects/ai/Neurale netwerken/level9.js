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
      },
      {
        question: {
          en: "What is the Stochastic Weight Averaging (SWA) technique?",
          es: "¿Qué es la técnica de Promediación Estocástica de Pesos (SWA)?",
          de: "Was ist die Stochastic Weight Averaging (SWA) Technik?",
          nl: "Wat is de Stochastic Weight Averaging (SWA) techniek?"
        },
        options: [
          { en: "Average weights from multiple points along the training trajectory to improve generalization", es: "Promediar pesos de múltiples puntos a lo largo de la trayectoria de entrenamiento para mejorar generalización", de: "Gewichte von mehreren Punkten entlang der Trainingstrajektorie mitteln um Generalisierung zu verbessern", nl: "Gewichten middelen van meerdere punten langs het trainingstraject om generalisatie te verbeteren" },
          { en: "Randomly initialize weights multiple times and average them", es: "Inicializar aleatoriamente pesos múltiples veces y promediarlos", de: "Gewichte mehrfach zufällig initialisieren und mitteln", nl: "Gewichten meerdere keren willekeurig initialiseren en middelen" },
          { en: "Average gradients across different data batches", es: "Promediar gradientes a través de diferentes lotes de datos", de: "Gradienten über verschiedene Daten-Batches mitteln", nl: "Gradiënten middelen over verschillende databatches" },
          { en: "Use stochastic processes to determine weight values", es: "Usar procesos estocásticos para determinar valores de peso", de: "Stochastische Prozesse zur Bestimmung von Gewichtswerten verwenden", nl: "Stochastische processen gebruiken om gewichtswaarden te bepalen" }
        ],
        correct: 0,
        explanation: {
          en: "SWA maintains a running average of model weights from different training epochs, typically near the end of training. This averaging over multiple points in weight space leads to solutions that generalize better than individual snapshots, often with little additional computational cost.",
          es: "SWA mantiene un promedio corriente de pesos del modelo de diferentes épocas de entrenamiento, típicamente cerca del final del entrenamiento. Este promediado sobre múltiples puntos en el espacio de pesos lleva a soluciones que generalizan mejor que instantáneas individuales, a menudo con poco costo computacional adicional.",
          de: "SWA hält einen laufenden Durchschnitt von Modellgewichten aus verschiedenen Trainingsepochen, typischerweise gegen Ende des Trainings. Diese Mittelung über mehrere Punkte im Gewichtsraum führt zu Lösungen die besser generalisieren als einzelne Snapshots, oft mit wenig zusätzlichen rechnerischen Kosten.",
          nl: "SWA houdt een lopend gemiddelde bij van modelgewichten uit verschillende trainingsepochen, typisch aan het einde van training. Dit middelen over meerdere punten in gewichtsruimte leidt tot oplossingen die beter generaliseren dan individuele snapshots, vaak met weinig extra rekenkosten."
        }
      },
      {
        question: {
          en: "What is the Lookahead optimizer and how does it work?",
          es: "¿Qué es el optimizador Lookahead y cómo funciona?",
          de: "Was ist der Lookahead-Optimierer und wie funktioniert er?",
          nl: "Wat is de Lookahead-optimizer en hoe werkt deze?"
        },
        options: [
          { en: "Maintain slow and fast weights, periodically update slow weights toward fast weights' trajectory", es: "Mantener pesos lentos y rápidos, actualizar periódicamente pesos lentos hacia trayectoria de pesos rápidos", de: "Langsame und schnelle Gewichte beibehalten, langsame Gewichte periodisch in Richtung Trajektorie schneller Gewichte aktualisieren", nl: "Langzame en snelle gewichten bijhouden, periodiek langzame gewichten bijwerken richting traject van snelle gewichten" },
          { en: "Predict future gradient directions before taking optimization steps", es: "Predecir direcciones futuras de gradiente antes de tomar pasos de optimización", de: "Zukünftige Gradientenrichtungen vorhersagen bevor Optimierungsschritte genommen werden", nl: "Toekomstige gradiëntrichtingen voorspellen voordat optimalisatiestappen worden genomen" },
          { en: "Look ahead at validation performance to guide training", es: "Mirar hacia adelante al rendimiento de validación para guiar entrenamiento", de: "Auf Validierungsleistung vorausschauen um Training zu leiten", nl: "Vooruitkijken naar validatieprestaties om training te begeleiden" },
          { en: "Use future data batches to compute current gradients", es: "Usar lotes de datos futuros para calcular gradientes actuales", de: "Zukünftige Daten-Batches verwenden um aktuelle Gradienten zu berechnen", nl: "Toekomstige databatches gebruiken om huidige gradiënten te berekenen" }
        ],
        correct: 0,
        explanation: {
          en: "Lookahead wraps around any base optimizer and maintains two sets of weights: fast weights updated by the base optimizer, and slow weights that periodically move toward the trajectory of fast weights. This helps reduce variance and improves convergence stability.",
          es: "Lookahead envuelve cualquier optimizador base y mantiene dos conjuntos de pesos: pesos rápidos actualizados por el optimizador base, y pesos lentos que periódicamente se mueven hacia la trayectoria de pesos rápidos. Esto ayuda a reducir varianza y mejora estabilidad de convergencia.",
          de: "Lookahead umhüllt jeden Basis-Optimierer und hält zwei Gewichtssätze bei: schnelle Gewichte aktualisiert durch den Basis-Optimierer, und langsame Gewichte die sich periodisch in Richtung Trajektorie schneller Gewichte bewegen. Dies hilft Varianz zu reduzieren und verbessert Konvergenzstabilität.",
          nl: "Lookahead omhult elke basis-optimizer en houdt twee sets gewichten bij: snelle gewichten bijgewerkt door de basis-optimizer, en langzame gewichten die periodiek bewegen richting het traject van snelle gewichten. Dit helpt variantie verminderen en verbetert convergentiestabiliteit."
        }
      },
      {
        question: {
          en: "What is the purpose of the AdamW optimizer variant?",
          es: "¿Cuál es el propósito de la variante del optimizador AdamW?",
          de: "Was ist der Zweck der AdamW-Optimierer-Variante?",
          nl: "Wat is het doel van de AdamW-optimizer variant?"
        },
        options: [
          { en: "Decouple weight decay from gradient-based updates for better regularization", es: "Desacoplar decaimiento de pesos de actualizaciones basadas en gradiente para mejor regularización", de: "Gewichtsverfall von gradientenbasierten Updates entkoppeln für bessere Regularisierung", nl: "Gewichtsverval ontkoppelen van gradiënt-gebaseerde updates voor betere regularisatie" },
          { en: "Add warmup automatically to Adam optimizer", es: "Agregar calentamiento automáticamente al optimizador Adam", de: "Warmup automatisch zum Adam-Optimierer hinzufügen", nl: "Warmup automatisch toevoegen aan Adam-optimizer" },
          { en: "Use wider learning rate ranges than standard Adam", es: "Usar rangos de tasa de aprendizaje más amplios que Adam estándar", de: "Breitere Lernratenbereiche als Standard-Adam verwenden", nl: "Bredere leersnelheidsbereiken gebruiken dan standaard Adam" },
          { en: "Optimize weights in a windowed fashion", es: "Optimizar pesos de manera ventana", de: "Gewichte in fensterartiger Weise optimieren", nl: "Gewichten op een venster-achtige manier optimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "AdamW (Adam with decoupled weight decay) fixes a flaw in the original Adam implementation where weight decay interacts with adaptive learning rates. By decoupling weight decay, AdamW provides better regularization and often achieves superior generalization, especially in deep learning.",
          es: "AdamW (Adam con decaimiento de pesos desacoplado) corrige un fallo en la implementación original de Adam donde el decaimiento de pesos interactúa con tasas de aprendizaje adaptativas. Al desacoplar el decaimiento de pesos, AdamW proporciona mejor regularización y a menudo logra generalización superior, especialmente en aprendizaje profundo.",
          de: "AdamW (Adam mit entkoppeltem Gewichtsverfall) behebt einen Fehler in der ursprünglichen Adam-Implementierung wo Gewichtsverfall mit adaptiven Lernraten interagiert. Durch Entkopplung des Gewichtsverfalls bietet AdamW bessere Regularisierung und erreicht oft überlegene Generalisierung, besonders im Deep Learning.",
          nl: "AdamW (Adam met ontkoppeld gewichtsverval) verhelpt een fout in de originele Adam-implementatie waar gewichtsverval interacteert met adaptieve leersnelheden. Door gewichtsverval te ontkoppelen, biedt AdamW betere regularisatie en bereikt vaak superieure generalisatie, vooral in deep learning."
        }
      },
      {
        question: {
          en: "What is the purpose of learning rate decay schedules like step decay?",
          es: "¿Cuál es el propósito de programas de decaimiento de tasa de aprendizaje como decaimiento por pasos?",
          de: "Was ist der Zweck von Lernraten-Verfallschemata wie Schritt-Verfall?",
          nl: "Wat is het doel van leersnelheid-verval schema's zoals stap-verval?"
        },
        options: [
          { en: "Reduce learning rate at specific intervals to help model settle into better local minima", es: "Reducir tasa de aprendizaje en intervalos específicos para ayudar al modelo a establecerse en mejores mínimos locales", de: "Lernrate in bestimmten Intervallen reduzieren um dem Modell zu helfen in bessere lokale Minima zu gelangen", nl: "Leersnelheid verminderen op specifieke intervallen om het model te helpen zich te vestigen in betere lokale minima" },
          { en: "Increase learning rate exponentially throughout training", es: "Aumentar tasa de aprendizaje exponencialmente durante todo el entrenamiento", de: "Lernrate während des gesamten Trainings exponentiell erhöhen", nl: "Leersnelheid exponentieel verhogen gedurende training" },
          { en: "Keep learning rate constant but reduce batch size", es: "Mantener tasa de aprendizaje constante pero reducir tamaño de lote", de: "Lernrate konstant halten aber Batch-Größe reduzieren", nl: "Leersnelheid constant houden maar batch-grootte verminderen" },
          { en: "Randomly vary learning rate to explore parameter space", es: "Variar aleatoriamente tasa de aprendizaje para explorar espacio de parámetros", de: "Lernrate zufällig variieren um Parameterraum zu erkunden", nl: "Leersnelheid willekeurig variëren om parameterruimte te verkennen" }
        ],
        correct: 0,
        explanation: {
          en: "Step decay reduces learning rate by a fixed factor at predetermined epochs (e.g., halve it every 30 epochs). This allows aggressive exploration early in training with larger steps, then finer adjustments later as the model approaches convergence.",
          es: "El decaimiento por pasos reduce la tasa de aprendizaje por un factor fijo en épocas predeterminadas (ej., reducir a la mitad cada 30 épocas). Esto permite exploración agresiva temprano en entrenamiento con pasos más grandes, luego ajustes más finos más tarde cuando el modelo se acerca a convergencia.",
          de: "Schritt-Verfall reduziert die Lernrate um einen festen Faktor in vorbestimmten Epochen (z.B. halbieren alle 30 Epochen). Dies ermöglicht aggressive Exploration früh im Training mit größeren Schritten, dann feinere Anpassungen später wenn das Modell sich der Konvergenz nähert.",
          nl: "Stap-verval vermindert leersnelheid met een vaste factor op vooraf bepaalde epochs (bijv. halveren elke 30 epochs). Dit maakt agressieve verkenning mogelijk vroeg in training met grotere stappen, dan fijnere aanpassingen later wanneer het model convergentie nadert."
        }
      },
      {
        question: {
          en: "What is the Nesterov momentum technique and how does it improve on standard momentum?",
          es: "¿Qué es la técnica de momentum Nesterov y cómo mejora el momentum estándar?",
          de: "Was ist die Nesterov-Momentum-Technik und wie verbessert sie Standard-Momentum?",
          nl: "Wat is de Nesterov momentum-techniek en hoe verbetert het standaard momentum?"
        },
        options: [
          { en: "Look ahead to where momentum would take you, then compute gradient there for better updates", es: "Mirar adelante a donde el momentum te llevaría, luego calcular gradiente allí para mejores actualizaciones", de: "Vorausschauen wohin Momentum führen würde, dann Gradient dort berechnen für bessere Updates", nl: "Vooruitkijken waar momentum je zou brengen, dan daar gradiënt berekenen voor betere updates" },
          { en: "Use adaptive momentum values based on gradient magnitude", es: "Usar valores de momentum adaptativos basados en magnitud de gradiente", de: "Adaptive Momentum-Werte basierend auf Gradientenmagnitude verwenden", nl: "Adaptieve momentumwaarden gebruiken gebaseerd op gradiëntmagnitude" },
          { en: "Average momentum from multiple previous steps", es: "Promediar momentum de múltiples pasos previos", de: "Momentum von mehreren vorherigen Schritten mitteln", nl: "Momentum middelen van meerdere vorige stappen" },
          { en: "Apply momentum only when gradients are consistent", es: "Aplicar momentum solo cuando los gradientes son consistentes", de: "Momentum nur anwenden wenn Gradienten konsistent sind", nl: "Momentum alleen toepassen wanneer gradiënten consistent zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Nesterov Accelerated Gradient (NAG) computes gradients at the approximate future position where momentum would move the parameters, rather than the current position. This 'look ahead' provides better gradient information and often leads to faster convergence with less oscillation.",
          es: "Nesterov Accelerated Gradient (NAG) calcula gradientes en la posición futura aproximada donde el momentum movería los parámetros, en lugar de la posición actual. Esta 'mirada adelante' proporciona mejor información de gradiente y a menudo lleva a convergencia más rápida con menos oscilación.",
          de: "Nesterov Accelerated Gradient (NAG) berechnet Gradienten an der ungefähren zukünftigen Position wohin Momentum die Parameter bewegen würde, statt der aktuellen Position. Dieses 'Vorausschauen' bietet bessere Gradienteninformationen und führt oft zu schnellerer Konvergenz mit weniger Oszillation.",
          nl: "Nesterov Accelerated Gradient (NAG) berekent gradiënten op de geschatte toekomstige positie waar momentum de parameters zou verplaatsen, in plaats van de huidige positie. Dit 'vooruitkijken' biedt betere gradiëntinformatie en leidt vaak tot snellere convergentie met minder oscillatie."
        }
      },
      {
        question: {
          en: "What is the purpose of using exponential moving averages in optimizers like Adam?",
          es: "¿Cuál es el propósito de usar promedios móviles exponenciales en optimizadores como Adam?",
          de: "Was ist der Zweck der Verwendung exponentieller gleitender Durchschnitte in Optimierern wie Adam?",
          nl: "Wat is het doel van het gebruik van exponentiële voortschrijdende gemiddelden in optimizers zoals Adam?"
        },
        options: [
          { en: "Track running estimates of gradient moments while giving more weight to recent values", es: "Rastrear estimaciones corrientes de momentos de gradiente dando más peso a valores recientes", de: "Laufende Schätzungen von Gradientenmomenten verfolgen während neueren Werten mehr Gewicht gegeben wird", nl: "Lopende schattingen van gradiëntmomenten bijhouden terwijl meer gewicht wordt gegeven aan recente waarden" },
          { en: "Store all historical gradients efficiently in compressed format", es: "Almacenar todos los gradientes históricos eficientemente en formato comprimido", de: "Alle historischen Gradienten effizient in komprimiertem Format speichern", nl: "Alle historische gradiënten efficiënt opslaan in gecomprimeerd formaat" },
          { en: "Exponentially increase learning rate over time", es: "Aumentar exponencialmente tasa de aprendizaje con el tiempo", de: "Lernrate mit der Zeit exponentiell erhöhen", nl: "Leersnelheid exponentieel verhogen in de loop van de tijd" },
          { en: "Average predictions from multiple model checkpoints", es: "Promediar predicciones de múltiples puntos de control del modelo", de: "Vorhersagen von mehreren Modell-Checkpoints mitteln", nl: "Voorspellingen middelen van meerdere model-checkpoints" }
        ],
        correct: 0,
        explanation: {
          en: "Exponential moving averages (EMA) provide a way to track statistics (like mean and variance of gradients) while giving exponentially decreasing weight to older observations. This balances the need for historical information with responsiveness to recent changes, key to Adam's adaptive learning rates.",
          es: "Los promedios móviles exponenciales (EMA) proporcionan una forma de rastrear estadísticas (como media y varianza de gradientes) dando peso exponencialmente decreciente a observaciones más antiguas. Esto equilibra la necesidad de información histórica con capacidad de respuesta a cambios recientes, clave para las tasas de aprendizaje adaptativas de Adam.",
          de: "Exponentielle gleitende Durchschnitte (EMA) bieten eine Möglichkeit Statistiken (wie Mittelwert und Varianz von Gradienten) zu verfolgen während älteren Beobachtungen exponentiell abnehmende Gewichtung gegeben wird. Dies balanciert das Bedürfnis nach historischer Information mit Reaktionsfähigkeit auf aktuelle Änderungen, Schlüssel zu Adams adaptiven Lernraten.",
          nl: "Exponentiële voortschrijdende gemiddelden (EMA) bieden een manier om statistieken (zoals gemiddelde en variantie van gradiënten) bij te houden terwijl exponentieel afnemend gewicht wordt gegeven aan oudere waarnemingen. Dit balanceert de behoefte aan historische informatie met responsiviteit op recente veranderingen, essentieel voor Adam's adaptieve leersnelheden."
        }
      },
      {
        question: {
          en: "What is the ReduceLROnPlateau learning rate scheduling strategy?",
          es: "¿Qué es la estrategia de programación de tasa de aprendizaje ReduceLROnPlateau?",
          de: "Was ist die ReduceLROnPlateau Lernraten-Planungsstrategie?",
          nl: "Wat is de ReduceLROnPlateau leersnelheid-planningsstrategie?"
        },
        options: [
          { en: "Reduce learning rate when validation metric stops improving for several epochs", es: "Reducir tasa de aprendizaje cuando la métrica de validación deja de mejorar durante varias épocas", de: "Lernrate reduzieren wenn Validierungsmetrik für mehrere Epochen aufhört sich zu verbessern", nl: "Leersnelheid verminderen wanneer validatiemetriek ophoudt met verbeteren gedurende meerdere epochs" },
          { en: "Reduce learning rate when training loss plateaus", es: "Reducir tasa de aprendizaje cuando la pérdida de entrenamiento se estabiliza", de: "Lernrate reduzieren wenn Trainingsverlust ein Plateau erreicht", nl: "Leersnelheid verminderen wanneer trainingsverlies stabiliseert" },
          { en: "Gradually reduce learning rate to reach a plateau value", es: "Reducir gradualmente tasa de aprendizaje para alcanzar un valor de meseta", de: "Lernrate schrittweise reduzieren um einen Plateau-Wert zu erreichen", nl: "Geleidelijk leersnelheid verminderen om een plateau-waarde te bereiken" },
          { en: "Keep learning rate constant on plateau regions", es: "Mantener tasa de aprendizaje constante en regiones de meseta", de: "Lernrate in Plateau-Regionen konstant halten", nl: "Leersnelheid constant houden op plateau-gebieden" }
        ],
        correct: 0,
        explanation: {
          en: "ReduceLROnPlateau monitors a validation metric (like loss or accuracy) and reduces learning rate by a factor when the metric hasn't improved for a patience number of epochs. This adaptive approach helps overcome training plateaus without manual intervention.",
          es: "ReduceLROnPlateau monitorea una métrica de validación (como pérdida o precisión) y reduce la tasa de aprendizaje por un factor cuando la métrica no ha mejorado durante un número de paciencia de épocas. Este enfoque adaptativo ayuda a superar mesetas de entrenamiento sin intervención manual.",
          de: "ReduceLROnPlateau überwacht eine Validierungsmetrik (wie Verlust oder Genauigkeit) und reduziert Lernrate um einen Faktor wenn die Metrik für eine Geduld-Anzahl von Epochen nicht verbessert hat. Dieser adaptive Ansatz hilft Trainingsplateaus ohne manuelle Intervention zu überwinden.",
          nl: "ReduceLROnPlateau monitort een validatiemetriek (zoals verlies of nauwkeurigheid) en vermindert leersnelheid met een factor wanneer de metriek gedurende een geduld-aantal epochs niet is verbeterd. Deze adaptieve aanpak helpt trainingsplateaus te overwinnen zonder handmatige interventie."
        }
      },
      {
        question: {
          en: "What is the purpose of learning rate scaling rules when changing batch size?",
          es: "¿Cuál es el propósito de las reglas de escalado de tasa de aprendizaje al cambiar el tamaño de lote?",
          de: "Was ist der Zweck von Lernraten-Skalierungsregeln beim Ändern der Batch-Größe?",
          nl: "Wat is het doel van leersnelheid-schalingsregels bij het wijzigen van batch-grootte?"
        },
        options: [
          { en: "Maintain similar optimization dynamics by scaling learning rate proportionally with batch size", es: "Mantener dinámicas de optimización similares escalando tasa de aprendizaje proporcionalmente con tamaño de lote", de: "Ähnliche Optimierungsdynamiken beibehalten durch proportionales Skalieren der Lernrate mit Batch-Größe", nl: "Vergelijkbare optimalisatiedynamiek behouden door leersnelheid proportioneel te schalen met batch-grootte" },
          { en: "Ensure all batch sizes converge at the same speed", es: "Asegurar que todos los tamaños de lote converjan a la misma velocidad", de: "Sicherstellen dass alle Batch-Größen mit derselben Geschwindigkeit konvergieren", nl: "Ervoor zorgen dat alle batch-groottes met dezelfde snelheid convergeren" },
          { en: "Compensate for GPU memory limitations", es: "Compensar las limitaciones de memoria GPU", de: "GPU-Speicherbeschränkungen kompensieren", nl: "Compenseren voor GPU-geheugenbeperkingen" },
          { en: "Prevent overfitting with larger batches", es: "Prevenir sobreajuste con lotes más grandes", de: "Overfitting mit größeren Batches verhindern", nl: "Overfitting voorkomen met grotere batches" }
        ],
        correct: 0,
        explanation: {
          en: "The linear scaling rule suggests that when increasing batch size by k, you should also increase learning rate by k to maintain similar training dynamics. This is because larger batches provide more accurate gradient estimates, allowing for larger update steps while maintaining stability.",
          es: "La regla de escalado lineal sugiere que al aumentar el tamaño de lote por k, también se debe aumentar la tasa de aprendizaje por k para mantener dinámicas de entrenamiento similares. Esto es porque lotes más grandes proporcionan estimaciones de gradiente más precisas, permitiendo pasos de actualización más grandes manteniendo estabilidad.",
          de: "Die lineare Skalierungsregel schlägt vor dass bei Erhöhung der Batch-Größe um k auch die Lernrate um k erhöht werden sollte um ähnliche Trainingsdynamiken zu erhalten. Dies liegt daran dass größere Batches genauere Gradientenschätzungen liefern und größere Update-Schritte bei Beibehaltung der Stabilität ermöglichen.",
          nl: "De lineaire schalingsregel suggereert dat bij het verhogen van batch-grootte met k, je ook leersnelheid met k moet verhogen om vergelijkbare trainingsdynamiek te behouden. Dit komt omdat grotere batches nauwkeurigere gradiëntschattingen bieden, wat grotere update-stappen mogelijk maakt terwijl stabiliteit behouden blijft."
        }
      },
      {
        question: {
          en: "What is the purpose of using bias correction in Adam optimizer?",
          es: "¿Cuál es el propósito de usar corrección de sesgo en el optimizador Adam?",
          de: "Was ist der Zweck der Verwendung von Bias-Korrektur im Adam-Optimierer?",
          nl: "Wat is het doel van het gebruik van bias-correctie in de Adam-optimizer?"
        },
        options: [
          { en: "Correct for initialization bias in exponential moving averages during early training", es: "Corregir sesgo de inicialización en promedios móviles exponenciales durante entrenamiento temprano", de: "Initialisierungs-Bias in exponentiellen gleitenden Durchschnitten während frühem Training korrigieren", nl: "Initialisatie-bias corrigeren in exponentiële voortschrijdende gemiddelden tijdens vroege training" },
          { en: "Remove bias from the training data", es: "Eliminar sesgo de los datos de entrenamiento", de: "Bias aus den Trainingsdaten entfernen", nl: "Bias verwijderen uit trainingsdata" },
          { en: "Correct for bias in model predictions", es: "Corregir sesgo en predicciones del modelo", de: "Bias in Modellvorhersagen korrigieren", nl: "Bias corrigeren in modelvoorspellingen" },
          { en: "Prevent bias terms from growing too large", es: "Prevenir que términos de sesgo crezcan demasiado", de: "Verhindern dass Bias-Terme zu groß werden", nl: "Voorkomen dat bias-termen te groot worden" }
        ],
        correct: 0,
        explanation: {
          en: "Exponential moving averages in Adam are initialized to zero, creating a bias toward zero in early training. Bias correction divides by (1 - beta^t) to compensate for this initialization, providing better estimates especially during the first few iterations.",
          es: "Los promedios móviles exponenciales en Adam se inicializan a cero, creando un sesgo hacia cero en entrenamiento temprano. La corrección de sesgo divide por (1 - beta^t) para compensar esta inicialización, proporcionando mejores estimaciones especialmente durante las primeras iteraciones.",
          de: "Exponentielle gleitende Durchschnitte in Adam werden auf null initialisiert, was einen Bias in Richtung null im frühen Training erzeugt. Bias-Korrektur teilt durch (1 - beta^t) um diese Initialisierung zu kompensieren und bietet bessere Schätzungen besonders während der ersten Iterationen.",
          nl: "Exponentiële voortschrijdende gemiddelden in Adam worden geïnitialiseerd op nul, wat een bias naar nul creëert in vroege training. Bias-correctie deelt door (1 - beta^t) om deze initialisatie te compenseren, wat betere schattingen biedt vooral tijdens de eerste iteraties."
        }
      },
      {
        question: {
          en: "What is progressive learning rate scaling in distributed training?",
          es: "¿Qué es el escalado progresivo de tasa de aprendizaje en entrenamiento distribuido?",
          de: "Was ist progressive Lernraten-Skalierung beim verteilten Training?",
          nl: "Wat is progressieve leersnelheid-schaling in gedistribueerde training?"
        },
        options: [
          { en: "Gradually increase batch size and learning rate during training to improve stability", es: "Aumentar gradualmente tamaño de lote y tasa de aprendizaje durante entrenamiento para mejorar estabilidad", de: "Batch-Größe und Lernrate während des Trainings schrittweise erhöhen um Stabilität zu verbessern", nl: "Geleidelijk batch-grootte en leersnelheid verhogen tijdens training om stabiliteit te verbeteren" },
          { en: "Progressively add more distributed workers during training", es: "Agregar progresivamente más trabajadores distribuidos durante entrenamiento", de: "Progressiv mehr verteilte Arbeiter während des Trainings hinzufügen", nl: "Progressief meer gedistribueerde workers toevoegen tijdens training" },
          { en: "Scale learning rate based on validation progress", es: "Escalar tasa de aprendizaje basado en progreso de validación", de: "Lernrate basierend auf Validierungsfortschritt skalieren", nl: "Leersnelheid schalen gebaseerd op validatievoortgang" },
          { en: "Increase model capacity progressively during training", es: "Aumentar capacidad del modelo progresivamente durante entrenamiento", de: "Modellkapazität während des Trainings progressiv erhöhen", nl: "Modelcapaciteit progressief verhogen tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Progressive learning rate scaling starts training with smaller batch sizes and learning rates, then gradually increases both. This approach combines the generalization benefits of small batches early on with the efficiency of large batches later, improving both speed and final model quality.",
          es: "El escalado progresivo de tasa de aprendizaje comienza entrenamiento con tamaños de lote y tasas de aprendizaje más pequeños, luego aumenta gradualmente ambos. Este enfoque combina los beneficios de generalización de lotes pequeños al principio con la eficiencia de lotes grandes más tarde, mejorando tanto velocidad como calidad final del modelo.",
          de: "Progressive Lernraten-Skalierung beginnt Training mit kleineren Batch-Größen und Lernraten, erhöht dann beide schrittweise. Dieser Ansatz kombiniert die Generalisierungsvorteile kleiner Batches am Anfang mit der Effizienz großer Batches später und verbessert sowohl Geschwindigkeit als auch finale Modellqualität.",
          nl: "Progressieve leersnelheid-schaling begint training met kleinere batch-groottes en leersnelheden, verhoogt dan beide geleidelijk. Deze aanpak combineert de generalisatievoordelen van kleine batches vroeg met de efficiëntie van grote batches later, wat zowel snelheid als uiteindelijke modelkwaliteit verbetert."
        }
      },
      {
        question: {
          en: "What is the purpose of using different learning rates for different parameter groups?",
          es: "¿Cuál es el propósito de usar diferentes tasas de aprendizaje para diferentes grupos de parámetros?",
          de: "Was ist der Zweck der Verwendung verschiedener Lernraten für verschiedene Parametergruppen?",
          nl: "Wat is het doel van het gebruik van verschillende leersnelheden voor verschillende parametergroepen?"
        },
        options: [
          { en: "Allow fine-tuning pretrained layers with smaller updates while training new layers faster", es: "Permitir ajuste fino de capas preentrenadas con actualizaciones más pequeñas mientras se entrenan capas nuevas más rápido", de: "Feinabstimmung vortrainierter Schichten mit kleineren Updates ermöglichen während neue Schichten schneller trainiert werden", nl: "Fijnafstelling van voorgetrainde lagen mogelijk maken met kleinere updates terwijl nieuwe lagen sneller worden getraind" },
          { en: "Ensure all parameters converge at the same rate", es: "Asegurar que todos los parámetros converjan a la misma tasa", de: "Sicherstellen dass alle Parameter mit derselben Rate konvergieren", nl: "Ervoor zorgen dat alle parameters met dezelfde snelheid convergeren" },
          { en: "Reduce overall training time by parallelization", es: "Reducir tiempo total de entrenamiento por paralelización", de: "Gesamte Trainingszeit durch Parallelisierung reduzieren", nl: "Totale trainingstijd verminderen door parallelisatie" },
          { en: "Balance memory usage across different layers", es: "Equilibrar uso de memoria entre diferentes capas", de: "Speicherverbrauch über verschiedene Schichten ausbalancieren", nl: "Geheugengebruik balanceren over verschillende lagen" }
        ],
        correct: 0,
        explanation: {
          en: "Discriminative learning rates (also called layer-wise learning rates) allow different parameter groups to learn at different rates. This is especially useful in transfer learning where pretrained layers should change slowly to preserve learned features, while new layers need faster learning to adapt to new tasks.",
          es: "Las tasas de aprendizaje discriminativas (también llamadas tasas de aprendizaje por capa) permiten que diferentes grupos de parámetros aprendan a tasas diferentes. Esto es especialmente útil en aprendizaje por transferencia donde capas preentrenadas deberían cambiar lentamente para preservar características aprendidas, mientras capas nuevas necesitan aprendizaje más rápido para adaptarse a nuevas tareas.",
          de: "Diskriminative Lernraten (auch schichtweise Lernraten genannt) erlauben verschiedenen Parametergruppen mit unterschiedlichen Raten zu lernen. Dies ist besonders nützlich beim Transfer Learning wo vortrainierte Schichten langsam ändern sollten um gelernte Features zu erhalten, während neue Schichten schnelleres Lernen zur Anpassung an neue Aufgaben benötigen.",
          nl: "Discriminatieve leersnelheden (ook wel laag-gewijze leersnelheden genoemd) stellen verschillende parametergroepen in staat om met verschillende snelheden te leren. Dit is vooral nuttig bij transfer learning waar voorgetrainde lagen langzaam moeten veranderen om geleerde features te behouden, terwijl nieuwe lagen sneller leren nodig hebben om zich aan te passen aan nieuwe taken."
        }
      },
      {
        question: {
          en: "What is the RAdam (Rectified Adam) optimizer and what problem does it solve?",
          es: "¿Qué es el optimizador RAdam (Adam Rectificado) y qué problema resuelve?",
          de: "Was ist der RAdam (Rectified Adam) Optimierer und welches Problem löst er?",
          nl: "Wat is de RAdam (Rectified Adam) optimizer en welk probleem lost het op?"
        },
        options: [
          { en: "Automatically adjusts variance correction to prevent bad local optima in early training", es: "Ajusta automáticamente corrección de varianza para prevenir óptimos locales malos en entrenamiento temprano", de: "Passt Varianzkorrektur automatisch an um schlechte lokale Optima im frühen Training zu verhindern", nl: "Past automatisch variantiecorrectie aan om slechte lokale optima in vroege training te voorkomen" },
          { en: "Rectifies gradient directions to always point toward global minimum", es: "Rectifica direcciones de gradiente para siempre apuntar hacia mínimo global", de: "Korrigiert Gradientenrichtungen um immer auf globales Minimum zu zeigen", nl: "Rectificeert gradiëntrichtingen om altijd naar globaal minimum te wijzen" },
          { en: "Uses rectified linear units in the optimization process", es: "Usa unidades lineales rectificadas en el proceso de optimización", de: "Verwendet rektifizierte lineare Einheiten im Optimierungsprozess", nl: "Gebruikt gerectificeerde lineaire eenheden in het optimalisatieproces" },
          { en: "Rectifies learning rate based on batch statistics", es: "Rectifica tasa de aprendizaje basado en estadísticas de lote", de: "Korrigiert Lernrate basierend auf Batch-Statistiken", nl: "Rectificeert leersnelheid gebaseerd op batch-statistieken" }
        ],
        correct: 0,
        explanation: {
          en: "RAdam addresses the issue of high variance in Adam's adaptive learning rate during early training stages. It rectifies the variance term by using a warmup heuristic that automatically adjusts based on variance estimates, eliminating the need for manual learning rate warmup.",
          es: "RAdam aborda el problema de alta varianza en la tasa de aprendizaje adaptativa de Adam durante etapas tempranas de entrenamiento. Rectifica el término de varianza usando una heurística de calentamiento que se ajusta automáticamente basado en estimaciones de varianza, eliminando la necesidad de calentamiento manual de tasa de aprendizaje.",
          de: "RAdam adressiert das Problem hoher Varianz in Adams adaptiver Lernrate während früher Trainingsphasen. Es korrigiert den Varianzterm durch Verwendung einer Warmup-Heuristik die sich automatisch basierend auf Varianzschätzungen anpasst und die Notwendigkeit manuellen Lernraten-Warmups eliminiert.",
          nl: "RAdam pakt het probleem aan van hoge variantie in Adam's adaptieve leersnelheid tijdens vroege trainingsfasen. Het rectificeert de variantieterm door een warmup-heuristiek te gebruiken die automatisch aanpast op basis van variatieschattingen, waardoor de behoefte aan handmatige leersnelheid-warmup wordt geëlimineerd."
        }
      },
      {
        question: {
          en: "What is the purpose of polyak averaging in optimization?",
          es: "¿Cuál es el propósito del promediado de Polyak en optimización?",
          de: "Was ist der Zweck von Polyak-Averaging in der Optimierung?",
          nl: "Wat is het doel van Polyak-averaging in optimalisatie?"
        },
        options: [
          { en: "Maintain exponential moving average of parameters to smooth model updates and improve stability", es: "Mantener promedio móvil exponencial de parámetros para suavizar actualizaciones del modelo y mejorar estabilidad", de: "Exponentiellen gleitenden Durchschnitt von Parametern beibehalten um Modell-Updates zu glätten und Stabilität zu verbessern", nl: "Exponentieel voortschrijdend gemiddelde van parameters bijhouden om model-updates glad te maken en stabiliteit te verbeteren" },
          { en: "Average predictions from multiple models trained on different data splits", es: "Promediar predicciones de múltiples modelos entrenados en diferentes divisiones de datos", de: "Vorhersagen von mehreren auf verschiedenen Datenaufteilungen trainierten Modellen mitteln", nl: "Voorspellingen middelen van meerdere modellen getraind op verschillende datasplitsingen" },
          { en: "Combine gradients from different optimization algorithms", es: "Combinar gradientes de diferentes algoritmos de optimización", de: "Gradienten von verschiedenen Optimierungsalgorithmen kombinieren", nl: "Gradiënten combineren van verschillende optimalisatie-algoritmen" },
          { en: "Average learning rates across different training runs", es: "Promediar tasas de aprendizaje a través de diferentes ejecuciones de entrenamiento", de: "Lernraten über verschiedene Trainingsläufe mitteln", nl: "Leersnelheden middelen over verschillende trainingsruns" }
        ],
        correct: 0,
        explanation: {
          en: "Polyak averaging (also called exponential moving average of parameters) maintains a smoothed version of model weights by computing a running average. This averaged model often generalizes better than the final checkpoint, especially useful in generative models and reinforcement learning.",
          es: "El promediado de Polyak (también llamado promedio móvil exponencial de parámetros) mantiene una versión suavizada de pesos del modelo calculando un promedio corriente. Este modelo promediado a menudo generaliza mejor que el punto de control final, especialmente útil en modelos generativos y aprendizaje por refuerzo.",
          de: "Polyak-Averaging (auch exponentieller gleitender Durchschnitt von Parametern genannt) hält eine geglättete Version von Modellgewichten durch Berechnung eines laufenden Durchschnitts bei. Dieses gemittelte Modell generalisiert oft besser als der finale Checkpoint, besonders nützlich in generativen Modellen und Reinforcement Learning.",
          nl: "Polyak-averaging (ook wel exponentieel voortschrijdend gemiddelde van parameters genoemd) houdt een afgevlakte versie van modelgewichten bij door een lopend gemiddelde te berekenen. Dit gemiddelde model generaliseert vaak beter dan het finale checkpoint, vooral nuttig in generatieve modellen en reinforcement learning."
        }
      },
      {
        question: {
          en: "What is the Lion optimizer and what makes it different from Adam?",
          es: "¿Qué es el optimizador Lion y qué lo hace diferente de Adam?",
          de: "Was ist der Lion-Optimierer und was macht ihn anders als Adam?",
          nl: "Wat is de Lion-optimizer en wat maakt het anders dan Adam?"
        },
        options: [
          { en: "Uses sign of interpolated momentum for updates with larger weight decay, more memory efficient", es: "Usa signo de momentum interpolado para actualizaciones con mayor decaimiento de pesos, más eficiente en memoria", de: "Verwendet Vorzeichen von interpoliertem Momentum für Updates mit größerem Gewichtsverfall, speichereffizienter", nl: "Gebruikt teken van geïnterpoleerd momentum voor updates met groter gewichtsverval, geheugenefficiënter" },
          { en: "Named after being strong like a lion, uses aggressive learning rates", es: "Nombrado por ser fuerte como un león, usa tasas de aprendizaje agresivas", de: "Benannt nach Stärke wie ein Löwe, verwendet aggressive Lernraten", nl: "Vernoemd naar sterk zijn als een leeuw, gebruikt agressieve leersnelheden" },
          { en: "Combines multiple optimizers in a hierarchical structure", es: "Combina múltiples optimizadores en una estructura jerárquica", de: "Kombiniert mehrere Optimierer in einer hierarchischen Struktur", nl: "Combineert meerdere optimizers in een hiërarchische structuur" },
          { en: "Uses linear interpolation for all optimizer computations", es: "Usa interpolación lineal para todos los cálculos del optimizador", de: "Verwendet lineare Interpolation für alle Optimierer-Berechnungen", nl: "Gebruikt lineaire interpolatie voor alle optimizer-berekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "Lion (EvoLved Sign Momentum) uses the sign of the momentum term (interpolation between current gradient and EMA of gradients) for parameter updates, making it more memory-efficient than Adam while achieving comparable or better performance. It typically requires larger weight decay and smaller learning rates.",
          es: "Lion (EvoLved Sign Momentum) usa el signo del término de momentum (interpolación entre gradiente actual y EMA de gradientes) para actualizaciones de parámetros, haciéndolo más eficiente en memoria que Adam logrando rendimiento comparable o mejor. Típicamente requiere mayor decaimiento de pesos y tasas de aprendizaje más pequeñas.",
          de: "Lion (EvoLved Sign Momentum) verwendet das Vorzeichen des Momentum-Terms (Interpolation zwischen aktuellem Gradient und EMA von Gradienten) für Parameter-Updates, macht es speichereffizienter als Adam bei vergleichbarer oder besserer Leistung. Es erfordert typischerweise größeren Gewichtsverfall und kleinere Lernraten.",
          nl: "Lion (EvoLved Sign Momentum) gebruikt het teken van de momentum-term (interpolatie tussen huidige gradiënt en EMA van gradiënten) voor parameter-updates, waardoor het geheugenefficiënter is dan Adam bij vergelijkbare of betere prestaties. Het vereist typisch groter gewichtsverval en kleinere leersnelheden."
        }
      },
      {
        question: {
          en: "What is the purpose of gradient checkpointing in training deep networks?",
          es: "¿Cuál es el propósito del checkpointing de gradientes en entrenamiento de redes profundas?",
          de: "Was ist der Zweck von Gradienten-Checkpointing beim Training tiefer Netzwerke?",
          nl: "Wat is het doel van gradiënt-checkpointing bij training van diepe netwerken?"
        },
        options: [
          { en: "Trade computation for memory by recomputing activations during backprop instead of storing them", es: "Intercambiar computación por memoria recomputando activaciones durante retropropagación en lugar de almacenarlas", de: "Berechnung gegen Speicher tauschen durch Neuberechnung von Aktivierungen während Backprop anstatt sie zu speichern", nl: "Berekening ruilen voor geheugen door activaties te herberekenen tijdens backprop in plaats van ze op te slaan" },
          { en: "Save gradient values periodically to prevent loss from crashes", es: "Guardar valores de gradiente periódicamente para prevenir pérdida por caídas", de: "Gradientenwerte periodisch speichern um Verlust durch Abstürze zu verhindern", nl: "Gradiëntwaarden periodiek opslaan om verlies door crashes te voorkomen" },
          { en: "Check gradient magnitudes at specific points for debugging", es: "Verificar magnitudes de gradiente en puntos específicos para depuración", de: "Gradientenmagnituden an bestimmten Punkten zur Fehlersuche prüfen", nl: "Gradiëntmagnitudes controleren op specifieke punten voor debugging" },
          { en: "Create checkpoints of best gradient configurations", es: "Crear puntos de control de mejores configuraciones de gradiente", de: "Checkpoints von besten Gradientenkonfigurationen erstellen", nl: "Checkpoints creëren van beste gradiëntconfiguraties" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient checkpointing saves memory by not storing all intermediate activations during forward pass. Instead, it checkpoints certain layers and recomputes activations on-the-fly during backpropagation. This trades ~33% more computation for significant memory savings, enabling training of deeper/larger models.",
          es: "El checkpointing de gradientes ahorra memoria no almacenando todas las activaciones intermedias durante el pase hacia adelante. En su lugar, crea puntos de control de ciertas capas y recomputa activaciones al vuelo durante retropropagación. Esto intercambia ~33% más computación por ahorros significativos de memoria, permitiendo entrenamiento de modelos más profundos/grandes.",
          de: "Gradienten-Checkpointing spart Speicher durch Nichtspeicherung aller Zwischenaktivierungen während des Vorwärtsdurchlaufs. Stattdessen checkpointet es bestimmte Schichten und berechnet Aktivierungen während Backpropagation neu. Dies tauscht ~33% mehr Berechnung für signifikante Speichereinsparungen und ermöglicht Training tieferer/größerer Modelle.",
          nl: "Gradiënt-checkpointing bespaart geheugen door niet alle tussenliggende activaties op te slaan tijdens voorwaartse doorgang. In plaats daarvan checkpointet het bepaalde lagen en herberekent activaties on-the-fly tijdens backpropagation. Dit ruilt ~33% meer berekening voor aanzienlijke geheugenbesparing, wat training van diepere/grotere modellen mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the purpose of using skip connections (residual connections) in optimization?",
          es: "¿Cuál es el propósito de usar conexiones de salto (conexiones residuales) en optimización?",
          de: "Was ist der Zweck der Verwendung von Skip-Verbindungen (residualen Verbindungen) in der Optimierung?",
          nl: "Wat is het doel van het gebruik van skip-verbindingen (residuele verbindingen) in optimalisatie?"
        },
        options: [
          { en: "Create direct gradient paths to earlier layers preventing vanishing gradients in deep networks", es: "Crear caminos de gradiente directos a capas anteriores previniendo gradientes desvanecientes en redes profundas", de: "Direkte Gradientenpfade zu früheren Schichten erstellen um verschwindende Gradienten in tiefen Netzwerken zu verhindern", nl: "Directe gradiëntpaden creëren naar eerdere lagen om verdwijnende gradiënten in diepe netwerken te voorkomen" },
          { en: "Skip certain optimization steps to speed up training", es: "Saltar ciertos pasos de optimización para acelerar entrenamiento", de: "Bestimmte Optimierungsschritte überspringen um Training zu beschleunigen", nl: "Bepaalde optimalisatiestappen overslaan om training te versnellen" },
          { en: "Allow the optimizer to skip over local minima", es: "Permitir al optimizador saltar sobre mínimos locales", de: "Dem Optimierer ermöglichen über lokale Minima zu springen", nl: "De optimizer in staat stellen over lokale minima te springen" },
          { en: "Connect different learning rate schedules together", es: "Conectar diferentes programas de tasa de aprendizaje juntos", de: "Verschiedene Lernraten-Zeitpläne miteinander verbinden", nl: "Verschillende leersnelheid-schema's met elkaar verbinden" }
        ],
        correct: 0,
        explanation: {
          en: "Skip connections allow gradients to flow directly through the network via identity mappings, bypassing intermediate layers. This addresses the vanishing gradient problem in very deep networks, enabling stable training of networks with hundreds of layers by providing shorter gradient paths.",
          es: "Las conexiones de salto permiten que los gradientes fluyan directamente a través de la red vía mapeos de identidad, evitando capas intermedias. Esto aborda el problema del gradiente desvaneciente en redes muy profundas, permitiendo entrenamiento estable de redes con cientos de capas proporcionando caminos de gradiente más cortos.",
          de: "Skip-Verbindungen erlauben Gradienten direkt durch das Netzwerk via Identitätsabbildungen zu fließen und Zwischenschichten zu umgehen. Dies adressiert das Problem verschwindender Gradienten in sehr tiefen Netzwerken und ermöglicht stabiles Training von Netzwerken mit Hunderten von Schichten durch Bereitstellung kürzerer Gradientenpfade.",
          nl: "Skip-verbindingen stellen gradiënten in staat direct door het netwerk te stromen via identiteitstoewijzingen, waarbij tussenliggende lagen worden omzeild. Dit pakt het verdwijnende gradiëntprobleem aan in zeer diepe netwerken, waardoor stabiele training mogelijk is van netwerken met honderden lagen door kortere gradiëntpaden te bieden."
        }
      },
      {
        question: {
          en: "What is the Adagrad optimizer and when is it most useful?",
          es: "¿Qué es el optimizador Adagrad y cuándo es más útil?",
          de: "Was ist der Adagrad-Optimierer und wann ist er am nützlichsten?",
          nl: "Wat is de Adagrad-optimizer en wanneer is het het meest nuttig?"
        },
        options: [
          { en: "Adapts learning rate per parameter based on historical gradient magnitudes, good for sparse data", es: "Adapta tasa de aprendizaje por parámetro basado en magnitudes históricas de gradiente, bueno para datos dispersos", de: "Passt Lernrate pro Parameter basierend auf historischen Gradientenmagnituden an, gut für spärliche Daten", nl: "Past leersnelheid per parameter aan gebaseerd op historische gradiëntmagnitudes, goed voor schaarse data" },
          { en: "Uses gradient addition to speed up convergence", es: "Usa adición de gradientes para acelerar convergencia", de: "Verwendet Gradientenaddition um Konvergenz zu beschleunigen", nl: "Gebruikt gradiënttoevoeging om convergentie te versnellen" },
          { en: "Adds gradients from multiple sources for ensemble learning", es: "Agrega gradientes de múltiples fuentes para aprendizaje de conjunto", de: "Fügt Gradienten von mehreren Quellen für Ensemble-Lernen hinzu", nl: "Voegt gradiënten van meerdere bronnen toe voor ensemble-learning" },
          { en: "Applies aggressive learning rates uniformly across all parameters", es: "Aplica tasas de aprendizaje agresivas uniformemente en todos los parámetros", de: "Wendet aggressive Lernraten gleichmäßig über alle Parameter an", nl: "Past agressieve leersnelheden uniform toe over alle parameters" }
        ],
        correct: 0,
        explanation: {
          en: "Adagrad adapts learning rates for each parameter based on the sum of squared gradients accumulated over time. Parameters with frequently occurring features get smaller updates, while infrequent features get larger updates. This is particularly useful for sparse data like NLP, but can be too aggressive for deep learning.",
          es: "Adagrad adapta tasas de aprendizaje para cada parámetro basado en la suma de gradientes al cuadrado acumulados con el tiempo. Parámetros con características frecuentemente ocurrentes obtienen actualizaciones más pequeñas, mientras características infrecuentes obtienen actualizaciones más grandes. Esto es particularmente útil para datos dispersos como PLN, pero puede ser demasiado agresivo para aprendizaje profundo.",
          de: "Adagrad passt Lernraten für jeden Parameter basierend auf der Summe quadrierter Gradienten akkumuliert über Zeit an. Parameter mit häufig auftretenden Features erhalten kleinere Updates, während seltene Features größere Updates erhalten. Dies ist besonders nützlich für spärliche Daten wie NLP, kann aber zu aggressiv für Deep Learning sein.",
          nl: "Adagrad past leersnelheden aan voor elke parameter gebaseerd op de som van gekwadrateerde gradiënten geaccumuleerd over tijd. Parameters met veelvuldig voorkomende features krijgen kleinere updates, terwijl zeldzame features grotere updates krijgen. Dit is bijzonder nuttig voor schaarse data zoals NLP, maar kan te agressief zijn voor deep learning."
        }
      },
      {
        question: {
          en: "What is the RMSprop optimizer and what problem does it solve compared to Adagrad?",
          es: "¿Qué es el optimizador RMSprop y qué problema resuelve comparado con Adagrad?",
          de: "Was ist der RMSprop-Optimierer und welches Problem löst er im Vergleich zu Adagrad?",
          nl: "Wat is de RMSprop-optimizer en welk probleem lost het op vergeleken met Adagrad?"
        },
        options: [
          { en: "Uses exponential moving average of squared gradients instead of cumulative sum, preventing learning rate decay", es: "Usa promedio móvil exponencial de gradientes al cuadrado en lugar de suma acumulativa, previniendo decaimiento de tasa de aprendizaje", de: "Verwendet exponentiellen gleitenden Durchschnitt quadrierter Gradienten statt kumulativer Summe, verhindert Lernraten-Verfall", nl: "Gebruikt exponentieel voortschrijdend gemiddelde van gekwadrateerde gradiënten in plaats van cumulatieve som, voorkomt leersnelheid-verval" },
          { en: "Proposes root mean square error as the loss function", es: "Propone error cuadrático medio raíz como función de pérdida", de: "Schlägt Root Mean Square Error als Verlustfunktion vor", nl: "Stelt root mean square error voor als verliesfunctie" },
          { en: "Propagates gradients more efficiently through recurrent connections", es: "Propaga gradientes más eficientemente a través de conexiones recurrentes", de: "Propagiert Gradienten effizienter durch rekurrente Verbindungen", nl: "Propageert gradiënten efficiënter door recurrente verbindingen" },
          { en: "Removes momentum from Adagrad for faster convergence", es: "Elimina momentum de Adagrad para convergencia más rápida", de: "Entfernt Momentum von Adagrad für schnellere Konvergenz", nl: "Verwijdert momentum van Adagrad voor snellere convergentie" }
        ],
        correct: 0,
        explanation: {
          en: "RMSprop addresses Adagrad's aggressive, monotonically decreasing learning rate by using an exponential moving average of squared gradients rather than cumulative sum. This allows the learning rate to increase and decrease, preventing it from becoming infinitesimally small during long training runs.",
          es: "RMSprop aborda la tasa de aprendizaje agresiva y monótonamente decreciente de Adagrad usando un promedio móvil exponencial de gradientes al cuadrado en lugar de suma acumulativa. Esto permite que la tasa de aprendizaje aumente y disminuya, previniendo que se vuelva infinitesimalmente pequeña durante entrenamientos largos.",
          de: "RMSprop adressiert Adagrads aggressive, monoton abnehmende Lernrate durch Verwendung eines exponentiellen gleitenden Durchschnitts quadrierter Gradienten statt kumulativer Summe. Dies erlaubt der Lernrate zu steigen und zu fallen und verhindert dass sie während langer Trainingsläufe infinitesimal klein wird.",
          nl: "RMSprop pakt Adagrad's agressieve, monotoon afnemende leersnelheid aan door een exponentieel voortschrijdend gemiddelde van gekwadrateerde gradiënten te gebruiken in plaats van cumulatieve som. Dit stelt de leersnelheid in staat te stijgen en dalen, waardoor wordt voorkomen dat het oneindig klein wordt tijdens lange trainingsruns."
        }
      },
      {
        question: {
          en: "What is the purpose of using synthetic gradients in neural network training?",
          es: "¿Cuál es el propósito de usar gradientes sintéticos en entrenamiento de redes neuronales?",
          de: "Was ist der Zweck der Verwendung synthetischer Gradienten beim Training neuronaler Netzwerke?",
          nl: "Wat is het doel van het gebruik van synthetische gradiënten bij neurale netwerktraining?"
        },
        options: [
          { en: "Predict gradients with auxiliary networks to enable asynchronous layer updates without full backprop", es: "Predecir gradientes con redes auxiliares para permitir actualizaciones asíncronas de capas sin retropropagación completa", de: "Gradienten mit Hilfsnetzwerken vorhersagen um asynchrone Schicht-Updates ohne vollständige Backprop zu ermöglichen", nl: "Gradiënten voorspellen met hulpnetwerken om asynchrone laag-updates mogelijk te maken zonder volledige backprop" },
          { en: "Generate artificial training data through gradient manipulation", es: "Generar datos de entrenamiento artificiales a través de manipulación de gradiente", de: "Künstliche Trainingsdaten durch Gradientenmanipulation generieren", nl: "Kunstmatige trainingsdata genereren door gradiëntmanipulatie" },
          { en: "Synthesize multiple gradients into a single update direction", es: "Sintetizar múltiples gradientes en una dirección de actualización única", de: "Mehrere Gradienten in eine einzelne Update-Richtung synthetisieren", nl: "Meerdere gradiënten synthetiseren tot één update-richting" },
          { en: "Create smooth gradient approximations for non-differentiable functions", es: "Crear aproximaciones de gradiente suaves para funciones no diferenciables", de: "Glatte Gradientenapproximationen für nicht-differenzierbare Funktionen erstellen", nl: "Gladde gradiëntbenaderingen creëren voor niet-differentieerbare functies" }
        ],
        correct: 0,
        explanation: {
          en: "Synthetic gradients use auxiliary models to predict what gradients will be, allowing layers to update asynchronously without waiting for full backpropagation. This decouples layers and can speed up training, though it adds complexity and the gradient predictions may not be perfectly accurate.",
          es: "Los gradientes sintéticos usan modelos auxiliares para predecir qué serán los gradientes, permitiendo que las capas se actualicen asincrónicamente sin esperar retropropagación completa. Esto desacopla capas y puede acelerar entrenamiento, aunque agrega complejidad y las predicciones de gradiente pueden no ser perfectamente precisas.",
          de: "Synthetische Gradienten verwenden Hilfsmodelle um vorherzusagen was Gradienten sein werden, erlauben Schichten asynchron zu aktualisieren ohne auf vollständige Backpropagation zu warten. Dies entkoppelt Schichten und kann Training beschleunigen, fügt aber Komplexität hinzu und Gradientenvorhersagen sind möglicherweise nicht perfekt genau.",
          nl: "Synthetische gradiënten gebruiken hulpmodellen om te voorspellen wat gradiënten zullen zijn, waardoor lagen asynchroon kunnen updaten zonder te wachten op volledige backpropagation. Dit ontkoppelt lagen en kan training versnellen, hoewel het complexiteit toevoegt en de gradiëntvoorspellingen mogelijk niet perfect nauwkeurig zijn."
        }
      },
      {
        question: {
          en: "What is the LAMB optimizer designed for?",
          es: "¿Para qué está diseñado el optimizador LAMB?",
          de: "Wofür ist der LAMB-Optimierer konzipiert?",
          nl: "Waarvoor is de LAMB-optimizer ontworpen?"
        },
        options: [
          { en: "Large batch training by adapting learning rate per layer based on trust ratio", es: "Entrenamiento de lotes grandes adaptando tasa de aprendizaje por capa basado en ratio de confianza", de: "Large-Batch-Training durch Anpassung der Lernrate pro Schicht basierend auf Vertrauensverhältnis", nl: "Grote batch-training door leersnelheid per laag aan te passen gebaseerd op vertrouwensratio" },
          { en: "Training models on limited hardware resources", es: "Entrenar modelos en recursos de hardware limitados", de: "Modelle auf begrenzten Hardware-Ressourcen trainieren", nl: "Modellen trainen op beperkte hardware-bronnen" },
          { en: "Optimizing lambda parameters in regularization", es: "Optimizar parámetros lambda en regularización", de: "Lambda-Parameter in Regularisierung optimieren", nl: "Lambda-parameters optimaliseren in regularisatie" },
          { en: "Batch normalization for language models", es: "Normalización de lote para modelos de lenguaje", de: "Batch-Normalisierung für Sprachmodelle", nl: "Batch-normalisatie voor taalmodellen" }
        ],
        correct: 0,
        explanation: {
          en: "LAMB (Layer-wise Adaptive Moments optimizer for Batch training) enables large batch training without loss of accuracy by computing layer-wise adaptation based on the ratio of weight norm to gradient norm (trust ratio). This allows training BERT in minutes instead of days with very large batches.",
          es: "LAMB (optimizador de Momentos Adaptativos por Capa para entrenamiento de Lote) permite entrenamiento de lotes grandes sin pérdida de precisión calculando adaptación por capa basada en la ratio de norma de peso a norma de gradiente (ratio de confianza). Esto permite entrenar BERT en minutos en lugar de días con lotes muy grandes.",
          de: "LAMB (Layer-wise Adaptive Moments optimizer for Batch training) ermöglicht Large-Batch-Training ohne Genauigkeitsverlust durch Berechnung schichtweiser Anpassung basierend auf dem Verhältnis von Gewichtsnorm zu Gradientennorm (Vertrauensverhältnis). Dies ermöglicht BERT-Training in Minuten statt Tagen mit sehr großen Batches.",
          nl: "LAMB (Layer-wise Adaptive Moments optimizer for Batch training) maakt grote batch-training mogelijk zonder nauwkeurigheidsverlies door laag-gewijze aanpassing te berekenen gebaseerd op de ratio van gewichtsnorm tot gradiëntnorm (vertrouwensratio). Dit maakt BERT-training mogelijk in minuten in plaats van dagen met zeer grote batches."
        }
      },
      {
        question: {
          en: "What is the purpose of loss scaling in mixed precision training?",
          es: "¿Cuál es el propósito del escalado de pérdida en entrenamiento de precisión mixta?",
          de: "Was ist der Zweck der Verlust-Skalierung im Mixed-Precision-Training?",
          nl: "Wat is het doel van verliesschaling in mixed precision training?"
        },
        options: [
          { en: "Scale up gradients to prevent underflow when using 16-bit precision", es: "Escalar gradientes hacia arriba para prevenir subdesbordamiento al usar precisión de 16 bits", de: "Gradienten hochskalieren um Underflow bei Verwendung von 16-Bit-Präzision zu verhindern", nl: "Gradiënten opschalen om underflow te voorkomen bij gebruik van 16-bit precisie" },
          { en: "Scale loss values to normalize across different batch sizes", es: "Escalar valores de pérdida para normalizar entre diferentes tamaños de lote", de: "Verlustwerte skalieren um über verschiedene Batch-Größen zu normalisieren", nl: "Verlieswaarden schalen om te normaliseren over verschillende batch-groottes" },
          { en: "Reduce the magnitude of loss for stability", es: "Reducir la magnitud de pérdida para estabilidad", de: "Magnitude des Verlusts für Stabilität reduzieren", nl: "Magnitude van verlies verminderen voor stabiliteit" },
          { en: "Rescale losses from different tasks in multi-task learning", es: "Reescalar pérdidas de diferentes tareas en aprendizaje multi-tarea", de: "Verluste von verschiedenen Aufgaben im Multi-Task-Lernen neu skalieren", nl: "Verliezen van verschillende taken herschalen in multi-task learning" }
        ],
        correct: 0,
        explanation: {
          en: "In mixed precision training, small gradient values can underflow (become zero) in 16-bit precision. Loss scaling multiplies the loss by a large factor before backprop, scaling up gradients to a representable range, then scales them back down before parameter updates. This preserves numerical precision.",
          es: "En entrenamiento de precisión mixta, valores pequeños de gradiente pueden subdesbordarse (volverse cero) en precisión de 16 bits. El escalado de pérdida multiplica la pérdida por un factor grande antes de retropropagación, escalando gradientes a un rango representable, luego los escala hacia abajo antes de actualizaciones de parámetros. Esto preserva precisión numérica.",
          de: "Im Mixed-Precision-Training können kleine Gradientenwerte in 16-Bit-Präzision zu Underflow führen (null werden). Verlust-Skalierung multipliziert den Verlust mit einem großen Faktor vor Backprop, skaliert Gradienten auf einen darstellbaren Bereich hoch, skaliert sie dann vor Parameter-Updates wieder herunter. Dies erhält numerische Präzision.",
          nl: "In mixed precision training kunnen kleine gradiëntwaarden underflow veroorzaken (nul worden) in 16-bit precisie. Verliesschaling vermenigvuldigt het verlies met een grote factor voor backprop, schaalt gradiënten op naar een representeerbaar bereik, schaalt ze dan terug voordat parameters worden bijgewerkt. Dit behoudt numerieke precisie."
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
