// Artificial Intelligence - Level 5: Deep Learning and Neural Networks
(function() {
  const level5 = {
    name: {
      en: "Deep Learning and Neural Networks",
      es: "Aprendizaje Profundo y Redes Neuronales",
      de: "Deep Learning und neuronale Netzwerke",
      nl: "Deep Learning en Neurale Netwerken"
    },
    questions: [
      {
        question: {
          en: "What is the primary purpose of batch normalization in deep neural networks?",
          es: "¿Cuál es el propósito principal de la normalización por lotes en las redes neuronales profundas?",
          de: "Was ist der Hauptzweck der Batch-Normalisierung in tiefen neuronalen Netzwerken?",
          nl: "Wat is het primaire doel van batch normalisatie in diepe neurale netwerken?"
        },
        options: [
          { en: "Stabilize training by normalizing layer inputs and reducing internal covariate shift", es: "Estabilizar el entrenamiento normalizando entradas de capas y reduciendo el cambio de covariado interno", de: "Training stabilisieren durch Normalisierung von Schichteingaben und Reduzierung interner Kovarianzverschiebung", nl: "Training stabiliseren door laaginvoer te normaliseren en interne covariate verschuiving te verminderen" },
          { en: "Increase the number of parameters", es: "Aumentar el número de parámetros", de: "Anzahl der Parameter erhöhen", nl: "Het aantal parameters verhogen" },
          { en: "Reduce computational complexity", es: "Reducir complejidad computacional", de: "Rechenkomplexität reduzieren", nl: "Computationele complexiteit verminderen" },
          { en: "Add non-linearity to the model", es: "Agregar no-linealidad al modelo", de: "Nichtlinearität zum Modell hinzufügen", nl: "Non-lineariteit aan het model toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Batch normalization normalizes the inputs to each layer, reducing internal covariate shift and allowing for higher learning rates, faster convergence, and more stable training in deep networks.",
          es: "La normalización por lotes normaliza las entradas a cada capa, reduciendo el cambio de covariado interno y permitiendo tasas de aprendizaje más altas, convergencia más rápida y entrenamiento más estable en redes profundas.",
          de: "Batch-Normalisierung normalisiert die Eingaben für jede Schicht, reduziert interne Kovarianzverschiebung und ermöglicht höhere Lernraten, schnellere Konvergenz und stabileres Training in tiefen Netzwerken.",
          nl: "Batch normalisatie normaliseert de invoer naar elke laag, vermindert interne covariate verschuiving en maakt hogere leersnelheden, snellere convergentie en stabielere training in diepe netwerken mogelijk."
        }
      },
      {
        question: {
          en: "What distinguishes a Convolutional Neural Network (CNN) from a standard feedforward network?",
          es: "¿Qué distingue a una Red Neuronal Convolucional (CNN) de una red feedforward estándar?",
          de: "Was unterscheidet ein Convolutional Neural Network (CNN) von einem Standard-Feedforward-Netzwerk?",
          nl: "Wat onderscheidt een Convolutional Neural Network (CNN) van een standaard feedforward netwerk?"
        },
        options: [
          { en: "Uses convolution operations and parameter sharing for spatial data processing", es: "Usa operaciones de convolución y compartición de parámetros para procesamiento de datos espaciales", de: "Verwendet Faltungsoperationen und Parameter-Sharing für räumliche Datenverarbeitung", nl: "Gebruikt convolutie operaties en parameter delen voor ruimtelijke data verwerking" },
          { en: "Has fewer layers than standard networks", es: "Tiene menos capas que las redes estándar", de: "Hat weniger Schichten als Standard-Netzwerke", nl: "Heeft minder lagen dan standaard netwerken" },
          { en: "Only works with text data", es: "Solo funciona con datos de texto", de: "Funktioniert nur mit Textdaten", nl: "Werkt alleen met tekstdata" },
          { en: "Uses different activation functions", es: "Usa diferentes funciones de activación", de: "Verwendet verschiedene Aktivierungsfunktionen", nl: "Gebruikt verschillende activatiefuncties" }
        ],
        correct: 0,
        explanation: {
          en: "CNNs use convolutional layers that apply learned filters across spatial dimensions, sharing parameters and detecting local features, making them particularly effective for image processing and other spatially structured data.",
          es: "Las CNN usan capas convolucionales que aplican filtros aprendidos a través de dimensiones espaciales, compartiendo parámetros y detectando características locales, haciéndolas particularmente efectivas para procesamiento de imágenes y otros datos estructurados espacialmente.",
          de: "CNNs verwenden Faltungsschichten, die gelernte Filter über räumliche Dimensionen anwenden, Parameter teilen und lokale Merkmale erkennen, wodurch sie besonders effektiv für Bildverarbeitung und andere räumlich strukturierte Daten sind.",
          nl: "CNNs gebruiken convolutielagen die geleerde filters toepassen over ruimtelijke dimensies, parameters delen en lokale kenmerken detecteren, waardoor ze bijzonder effectief zijn voor beeldverwerking en andere ruimtelijk gestructureerde data."
        }
      },
      {
        question: {
          en: "What is the key advantage of Long Short-Term Memory (LSTM) networks over standard RNNs?",
          es: "¿Cuál es la ventaja clave de las redes Long Short-Term Memory (LSTM) sobre las RNN estándar?",
          de: "Was ist der Hauptvorteil von Long Short-Term Memory (LSTM) Netzwerken gegenüber Standard-RNNs?",
          nl: "Wat is het belangrijkste voordeel van Long Short-Term Memory (LSTM) netwerken ten opzichte van standaard RNNs?"
        },
        options: [
          { en: "Better handling of long-term dependencies through gated memory cells", es: "Mejor manejo de dependencias a largo plazo através de células de memoria con compuertas", de: "Bessere Handhabung langfristiger Abhängigkeiten durch Gated Memory Cells", nl: "Betere behandeling van lange-termijn afhankelijkheden door gated memory cellen" },
          { en: "Faster training speed", es: "Velocidad de entrenamiento más rápida", de: "Schnellere Trainingsgeschwindigkeit", nl: "Snellere trainingssnelheid" },
          { en: "Fewer parameters required", es: "Menos parámetros requeridos", de: "Weniger Parameter erforderlich", nl: "Minder parameters vereist" },
          { en: "Works only with image data", es: "Funciona solo con datos de imagen", de: "Funktioniert nur mit Bilddaten", nl: "Werkt alleen met beelddata" }
        ],
        correct: 0,
        explanation: {
          en: "LSTMs address the vanishing gradient problem in standard RNNs through gated mechanisms (input, forget, and output gates) that control information flow, enabling them to learn and remember long-term dependencies in sequential data.",
          es: "Las LSTM abordan el problema del gradiente que desaparece en las RNN estándar a través de mecanismos de compuertas (compuertas de entrada, olvido y salida) que controlan el flujo de información, permitiéndoles aprender y recordar dependencias a largo plazo en datos secuenciales.",
          de: "LSTMs lösen das Problem des verschwindenden Gradienten in Standard-RNNs durch Gate-Mechanismen (Eingabe-, Vergess- und Ausgabe-Gates), die den Informationsfluss kontrollieren und es ihnen ermöglichen, langfristige Abhängigkeiten in sequenziellen Daten zu lernen und zu behalten.",
          nl: "LSTMs pakken het vanishing gradient probleem in standaard RNNs aan door gate mechanismen (input, forget, en output gates) die informatiestroming controleren, waardoor ze lange-termijn afhankelijkheden in sequentiële data kunnen leren en onthouden."
        }
      },
      {
        question: {
          en: "What is the fundamental concept behind the Transformer architecture?",
          es: "¿Cuál es el concepto fundamental detrás de la arquitectura Transformer?",
          de: "Was ist das grundlegende Konzept hinter der Transformer-Architektur?",
          nl: "Wat is het fundamentele concept achter de Transformer architectuur?"
        },
        options: [
          { en: "Self-attention mechanism to process sequences without recurrence", es: "Mecanismo de auto-atención para procesar secuencias sin recurrencia", de: "Selbst-Aufmerksamkeitsmechanismus zur Verarbeitung von Sequenzen ohne Rekurrenz", nl: "Zelf-aandacht mechanisme om sequenties te verwerken zonder recurrentie" },
          { en: "Convolutional layers for feature extraction", es: "Capas convolucionales para extracción de características", de: "Faltungsschichten für Merkmalsextraktion", nl: "Convolutielagen voor feature extractie" },
          { en: "Recurrent connections for memory", es: "Conexiones recurrentes para memoria", de: "Rekurrente Verbindungen für Gedächtnis", nl: "Recurrente verbindingen voor geheugen" },
          { en: "Pooling operations for dimensionality reduction", es: "Operaciones de pooling para reducción de dimensionalidad", de: "Pooling-Operationen für Dimensionalitätsreduktion", nl: "Pooling operaties voor dimensionaliteitsreductie" }
        ],
        correct: 0,
        explanation: {
          en: "The Transformer architecture relies entirely on self-attention mechanisms to capture relationships between all positions in a sequence simultaneously, eliminating the need for recurrence and enabling parallel processing.",
          es: "La arquitectura Transformer depende completamente de mecanismos de auto-atención para capturar relaciones entre todas las posiciones en una secuencia simultáneamente, eliminando la necesidad de recurrencia y permitiendo procesamiento paralelo.",
          de: "Die Transformer-Architektur stützt sich vollständig auf Selbst-Aufmerksamkeitsmechanismen, um Beziehungen zwischen allen Positionen in einer Sequenz gleichzeitig zu erfassen, wodurch die Notwendigkeit von Rekurrenz eliminiert und parallele Verarbeitung ermöglicht wird.",
          nl: "De Transformer architectuur vertrouwt volledig op zelf-aandacht mechanismen om relaties tussen alle posities in een sequentie tegelijkertijd vast te leggen, waardoor de behoefte aan recurrentie wordt weggenomen en parallelle verwerking mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is the purpose of dropout regularization in neural networks?",
          es: "¿Cuál es el propósito de la regularización dropout en las redes neuronales?",
          de: "Was ist der Zweck der Dropout-Regularisierung in neuronalen Netzwerken?",
          nl: "Wat is het doel van dropout regularisatie in neurale netwerken?"
        },
        options: [
          { en: "Randomly deactivate neurons during training to prevent overfitting", es: "Desactivar aleatoriamente neuronas durante el entrenamiento para prevenir sobreajuste", de: "Neuronen während des Trainings zufällig deaktivieren, um Überanpassung zu verhindern", nl: "Willekeurig neuronen deactiveren tijdens training om overfitting te voorkomen" },
          { en: "Increase the learning rate", es: "Aumentar la tasa de aprendizaje", de: "Lernrate erhöhen", nl: "De leersnelheid verhogen" },
          { en: "Add more hidden layers", es: "Agregar más capas ocultas", de: "Mehr versteckte Schichten hinzufügen", nl: "Meer verborgen lagen toevoegen" },
          { en: "Normalize the input data", es: "Normalizar los datos de entrada", de: "Eingabedaten normalisieren", nl: "De invoerdata normaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout randomly sets a fraction of neurons to zero during training, forcing the network to learn more robust and generalizable representations by preventing co-adaptation of neurons and reducing overfitting.",
          es: "Dropout pone aleatoriamente una fracción de neuronas en cero durante el entrenamiento, forzando a la red a aprender representaciones más robustas y generalizables al prevenir la co-adaptación de neuronas y reducir el sobreajuste.",
          de: "Dropout setzt zufällig einen Bruchteil der Neuronen auf null während des Trainings, wodurch das Netzwerk robustere und generalisierbarere Darstellungen lernen muss, indem Co-Adaptation von Neuronen verhindert und Überanpassung reduziert wird.",
          nl: "Dropout zet willekeurig een fractie van neuronen op nul tijdens training, waardoor het netwerk gedwongen wordt om meer robuuste en generaliseerbare representaties te leren door co-adaptatie van neuronen te voorkomen en overfitting te verminderen."
        }
      },
      {
        question: {
          en: "What is the main innovation of Residual Networks (ResNet)?",
          es: "¿Cuál es la principal innovación de las Redes Residuales (ResNet)?",
          de: "Was ist die Hauptinnovation von Residual Networks (ResNet)?",
          nl: "Wat is de belangrijkste innovatie van Residual Networks (ResNet)?"
        },
        options: [
          { en: "Skip connections that allow gradients to flow directly to earlier layers", es: "Conexiones de salto que permiten que los gradientes fluyan directamente a capas anteriores", de: "Skip-Verbindungen, die Gradienten direkten Fluss zu früheren Schichten ermöglichen", nl: "Skip verbindingen die gradiënten directe doorstroom naar eerdere lagen mogelijk maken" },
          { en: "Using different activation functions", es: "Usar diferentes funciones de activación", de: "Verwendung verschiedener Aktivierungsfunktionen", nl: "Verschillende activatiefuncties gebruiken" },
          { en: "Reducing the number of parameters", es: "Reducir el número de parámetros", de: "Reduzierung der Anzahl Parameter", nl: "Het aantal parameters verminderen" },
          { en: "Adding more pooling layers", es: "Agregar más capas de pooling", de: "Mehr Pooling-Schichten hinzufügen", nl: "Meer pooling lagen toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "ResNet introduces skip connections (shortcuts) that add the input of a layer to its output, allowing gradients to flow directly backwards and enabling the training of much deeper networks by mitigating the vanishing gradient problem.",
          es: "ResNet introduce conexiones de salto (atajos) que agregan la entrada de una capa a su salida, permitiendo que los gradientes fluyan directamente hacia atrás y habilitando el entrenamiento de redes mucho más profundas al mitigar el problema del gradiente que desaparece.",
          de: "ResNet führt Skip-Verbindungen (Shortcuts) ein, die die Eingabe einer Schicht zu ihrer Ausgabe hinzufügen, wodurch Gradienten direkt rückwärts fließen können und das Training viel tieferer Netzwerke ermöglicht wird, indem das Problem des verschwindenden Gradienten gemildert wird.",
          nl: "ResNet introduceert skip verbindingen (shortcuts) die de invoer van een laag toevoegen aan de uitvoer, waardoor gradiënten direct achterwaarts kunnen stromen en training van veel diepere netwerken mogelijk wordt door het vanishing gradient probleem te verminderen."
        }
      },
      {
        question: {
          en: "What is the purpose of the encoder-decoder architecture in sequence-to-sequence models?",
          es: "¿Cuál es el propósito de la arquitectura codificador-decodificador en modelos secuencia-a-secuencia?",
          de: "Was ist der Zweck der Encoder-Decoder-Architektur in Sequence-to-Sequence-Modellen?",
          nl: "Wat is het doel van de encoder-decoder architectuur in sequence-to-sequence modellen?"
        },
        options: [
          { en: "Encode input sequence into fixed representation, then decode to target sequence", es: "Codificar secuencia de entrada en representación fija, luego decodificar a secuencia objetivo", de: "Eingabesequenz in feste Darstellung kodieren, dann in Zielsequenz dekodieren", nl: "Invoersequentie coderen naar vaste representatie, dan decoderen naar doelsequentie" },
          { en: "Reduce computational complexity", es: "Reducir complejidad computacional", de: "Rechenkomplexität reduzieren", nl: "Computationele complexiteit verminderen" },
          { en: "Increase training speed", es: "Aumentar velocidad de entrenamiento", de: "Trainingsgeschwindigkeit erhöhen", nl: "Trainingssnelheid verhogen" },
          { en: "Handle only fixed-length sequences", es: "Manejar solo secuencias de longitud fija", de: "Nur Sequenzen fester Länge handhaben", nl: "Alleen sequenties van vaste lengte behandelen" }
        ],
        correct: 0,
        explanation: {
          en: "The encoder-decoder architecture compresses variable-length input sequences into fixed-size representations (context vectors), which the decoder then uses to generate variable-length output sequences, enabling tasks like translation and summarization.",
          es: "La arquitectura codificador-decodificador comprime secuencias de entrada de longitud variable en representaciones de tamaño fijo (vectores de contexto), que el decodificador luego usa para generar secuencias de salida de longitud variable, habilitando tareas como traducción y resumen.",
          de: "Die Encoder-Decoder-Architektur komprimiert Eingabesequenzen variabler Länge in Darstellungen fester Größe (Kontextvektoren), die der Decoder dann verwendet, um Ausgabesequenzen variabler Länge zu generieren, wodurch Aufgaben wie Übersetzung und Zusammenfassung ermöglicht werden.",
          nl: "De encoder-decoder architectuur comprimeert variabele-lengte invoersequenties naar vaste-grootte representaties (contextvectoren), die de decoder vervolgens gebruikt om variabele-lengte uitvoersequenties te genereren, waardoor taken zoals vertaling en samenvatting mogelijk worden."
        }
      },
      {
        question: {
          en: "What is the key difference between generative and discriminative models?",
          es: "¿Cuál es la diferencia clave entre modelos generativos y discriminativos?",
          de: "Was ist der Hauptunterschied zwischen generativen und diskriminativen Modellen?",
          nl: "Wat is het belangrijkste verschil tussen generatieve en discriminatieve modellen?"
        },
        options: [
          { en: "Generative models learn P(x,y), discriminative models learn P(y|x)", es: "Los modelos generativos aprenden P(x,y), los modelos discriminativos aprenden P(y|x)", de: "Generative Modelle lernen P(x,y), diskriminative Modelle lernen P(y|x)", nl: "Generatieve modellen leren P(x,y), discriminatieve modellen leren P(y|x)" },
          { en: "Generative models are faster to train", es: "Los modelos generativos son más rápidos de entrenar", de: "Generative Modelle sind schneller zu trainieren", nl: "Generatieve modellen zijn sneller te trainen" },
          { en: "Discriminative models require more data", es: "Los modelos discriminativos requieren más datos", de: "Diskriminative Modelle benötigen mehr Daten", nl: "Discriminatieve modellen hebben meer data nodig" },
          { en: "They use different activation functions", es: "Usan diferentes funciones de activación", de: "Sie verwenden verschiedene Aktivierungsfunktionen", nl: "Ze gebruiken verschillende activatiefuncties" }
        ],
        correct: 0,
        explanation: {
          en: "Generative models learn the joint probability distribution P(x,y) and can generate new data samples, while discriminative models learn the conditional probability P(y|x) and focus on decision boundaries for classification.",
          es: "Los modelos generativos aprenden la distribución de probabilidad conjunta P(x,y) y pueden generar nuevas muestras de datos, mientras que los modelos discriminativos aprenden la probabilidad condicional P(y|x) y se enfocan en las fronteras de decisión para clasificación.",
          de: "Generative Modelle lernen die gemeinsame Wahrscheinlichkeitsverteilung P(x,y) und können neue Datenproben generieren, während diskriminative Modelle die bedingte Wahrscheinlichkeit P(y|x) lernen und sich auf Entscheidungsgrenzen für Klassifikation konzentrieren.",
          nl: "Generatieve modellen leren de gezamenlijke waarschijnlijkheidsverdeling P(x,y) en kunnen nieuwe datasamples genereren, terwijl discriminatieve modellen de conditionele waarschijnlijkheid P(y|x) leren en focussen op beslissingsgrenzen voor classificatie."
        }
      },
      {
        question: {
          en: "What is the main challenge that Variational Autoencoders (VAEs) address?",
          es: "¿Cuál es el principal desafío que abordan los Autoencoders Variacionales (VAE)?",
          de: "Was ist die Hauptherausforderung, die Variational Autoencoders (VAEs) angehen?",
          nl: "Wat is de belangrijkste uitdaging die Variational Autoencoders (VAEs) aanpakken?"
        },
        options: [
          { en: "Generate diverse samples from learned latent space distributions", es: "Generar muestras diversas desde distribuciones de espacio latente aprendidas", de: "Diverse Proben aus erlernten latenten Raumverteilungen generieren", nl: "Diverse samples genereren uit geleerde latente ruimteverdelingen" },
          { en: "Reduce training time", es: "Reducir tiempo de entrenamiento", de: "Trainingszeit reduzieren", nl: "Trainingstijd verminderen" },
          { en: "Increase model accuracy", es: "Aumentar precisión del modelo", de: "Modellgenauigkeit erhöhen", nl: "Modelnauwkeurigheid verhogen" },
          { en: "Handle larger datasets", es: "Manejar conjuntos de datos más grandes", de: "Größere Datensätze handhaben", nl: "Grotere datasets behandelen" }
        ],
        correct: 0,
        explanation: {
          en: "VAEs learn probabilistic distributions in latent space rather than deterministic encodings, enabling generation of diverse, meaningful samples by sampling from the learned latent distributions and using the reparameterization trick for backpropagation.",
          es: "Los VAE aprenden distribuciones probabilísticas en el espacio latente en lugar de codificaciones determinísticas, habilitando la generación de muestras diversas y significativas al muestrear desde las distribuciones latentes aprendidas y usar el truco de reparametrización para retropropagación.",
          de: "VAEs lernen probabilistische Verteilungen im latenten Raum anstelle deterministischer Kodierungen, wodurch die Generierung diverser, bedeutungsvoller Proben durch Sampling aus den erlernten latenten Verteilungen und Verwendung des Reparametrisierungstricks für Backpropagation ermöglicht wird.",
          nl: "VAEs leren probabilistische verdelingen in latente ruimte in plaats van deterministische coderingen, waardoor generatie van diverse, betekenisvolle samples mogelijk wordt door sampling uit geleerde latente verdelingen en gebruik van de reparametrisatie truc voor backpropagation."
        }
      },
      {
        question: {
          en: "What is the fundamental principle behind transfer learning in deep networks?",
          es: "¿Cuál es el principio fundamental detrás del aprendizaje por transferencia en redes profundas?",
          de: "Was ist das grundlegende Prinzip hinter Transfer Learning in tiefen Netzwerken?",
          nl: "Wat is het fundamentele principe achter transfer learning in diepe netwerken?"
        },
        options: [
          { en: "Reuse pre-trained features for new tasks with limited data", es: "Reusar características preentrenadas para nuevas tareas con datos limitados", de: "Vortrainierte Merkmale für neue Aufgaben mit begrenzten Daten wiederverwenden", nl: "Vooraf getrainde features hergebruiken voor nieuwe taken met beperkte data" },
          { en: "Train multiple models simultaneously", es: "Entrenar múltiples modelos simultáneamente", de: "Mehrere Modelle gleichzeitig trainieren", nl: "Meerdere modellen tegelijkertijd trainen" },
          { en: "Use different architectures for each task", es: "Usar diferentes arquitecturas para cada tarea", de: "Verschiedene Architekturen für jede Aufgabe verwenden", nl: "Verschillende architecturen gebruiken voor elke taak" },
          { en: "Increase the number of parameters", es: "Aumentar el número de parámetros", de: "Anzahl der Parameter erhöhen", nl: "Het aantal parameters verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning leverages features learned from large datasets and pre-trained models to solve new tasks with limited training data, often by fine-tuning the pre-trained network or using learned representations as feature extractors.",
          es: "El aprendizaje por transferencia aprovecha características aprendidas de grandes conjuntos de datos y modelos preentrenados para resolver nuevas tareas con datos de entrenamiento limitados, a menudo ajustando finamente la red preentrenada o usando representaciones aprendidas como extractores de características.",
          de: "Transfer Learning nutzt Merkmale, die aus großen Datensätzen und vortrainierten Modellen gelernt wurden, um neue Aufgaben mit begrenzten Trainingsdaten zu lösen, oft durch Feintuning des vortrainierten Netzwerks oder Verwendung erlernter Darstellungen als Merkmalsextraktoren.",
          nl: "Transfer learning maakt gebruik van features geleerd uit grote datasets en vooraf getrainde modellen om nieuwe taken op te lossen met beperkte trainingsdata, vaak door fine-tuning van het vooraf getrainde netwerk of gebruik van geleerde representaties als feature extractors."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/artificial-intelligence', level5);
  }
})();
