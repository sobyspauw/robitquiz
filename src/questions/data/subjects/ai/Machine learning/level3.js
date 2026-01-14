// Machine learning Quiz - Level 3
(function() {
  const level3 = {
    name: {
          "en": "ML Applications & Techniques",
          "es": "Aplicaciones y TÃ©cnicas de ML",
          "de": "ML-Anwendungen & Techniken",
          "nl": "ML Toepassingen & Technieken"
    },
    questions: [
      {
        question: {
                  "en": "What is 'overfitting' in machine learning?",
                  "es": "Â¿QuÃ© es 'overfitting' en aprendizaje automÃ¡tico?",
                  "de": "Was ist 'Overfitting' im maschinellen Lernen?",
                  "nl": "Wat is 'overfitting' in machine learning?"
        },
        options: [
        {
                  "en": "When a model performs too well on training data but poorly on new data",
                  "es": "Cuando un modelo funciona demasiado bien en datos de entrenamiento pero mal en datos nuevos",
                  "de": "Wenn ein Modell zu gut auf Trainingsdaten aber schlecht auf neuen Daten funktioniert",
                  "nl": "Wanneer een model te goed presteert op trainingsdata maar slecht op nieuwe data"
        },
        {
                  "en": "When training takes too long",
                  "es": "Cuando el entrenamiento toma demasiado tiempo",
                  "de": "Wenn das Training zu lange dauert",
                  "nl": "Wanneer training te lang duurt"
        },
        {
                  "en": "When a computer runs out of memory",
                  "es": "Cuando una computadora se queda sin memoria",
                  "de": "Wenn ein Computer keinen Speicher mehr hat",
                  "nl": "Wanneer een computer geen geheugen meer heeft"
        },
        {
                  "en": "When data is too large",
                  "es": "Cuando los datos son demasiado grandes",
                  "de": "Wenn Daten zu groÃŸ sind",
                  "nl": "Wanneer data te groot is"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Overfitting occurs when a model learns the training data too specifically, including noise and outliers, making it unable to generalize well to new, unseen data.",
                  "es": "El overfitting ocurre cuando un modelo aprende los datos de entrenamiento demasiado especÃ­ficamente, incluyendo ruido y valores atÃ­picos, haciÃ©ndolo incapaz de generalizar bien a datos nuevos y no vistos.",
                  "de": "Overfitting tritt auf, wenn ein Modell die Trainingsdaten zu spezifisch lernt, einschlieÃŸlich Rauschen und AusreiÃŸern, wodurch es nicht gut auf neue, ungesehene Daten verallgemeinern kann.",
                  "nl": "Overfitting treedt op wanneer een model de trainingsdata te specifiek leert, inclusief ruis en uitschieters, waardoor het niet goed kan generaliseren naar nieuwe, ongeziene data."
        }
      },
      {
        question: {
                  "en": "Which company created the deep learning framework TensorFlow?",
                  "es": "Â¿QuÃ© empresa creÃ³ el framework de deep learning TensorFlow?",
                  "de": "Welches Unternehmen hat das Deep-Learning-Framework TensorFlow erstellt?",
                  "nl": "Welk bedrijf creÃ«erde het deep learning framework TensorFlow?"
        },
        options: [
        {
                  "en": "IBM",
                  "es": "IBM",
                  "de": "IBM",
                  "nl": "IBM"
        },
        {
                  "en": "Google",
                  "es": "Google",
                  "de": "Google",
                  "nl": "Google"
        },
        {
                  "en": "Microsoft",
                  "es": "Microsoft",
                  "de": "Microsoft",
                  "nl": "Microsoft"
        },
        {
                  "en": "Facebook",
                  "es": "Facebook",
                  "de": "Facebook",
                  "nl": "Facebook"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Google Brain team developed TensorFlow, which was released as open source in 2015 and has become one of the most popular machine learning frameworks.",
                  "es": "El equipo de Google Brain desarrollÃ³ TensorFlow, que fue lanzado como cÃ³digo abierto en 2015 y se ha convertido en uno de los frameworks de aprendizaje automÃ¡tico mÃ¡s populares.",
                  "de": "Das Google Brain-Team entwickelte TensorFlow, das 2015 als Open Source verÃ¶ffentlicht wurde und zu einem der beliebtesten Machine Learning-Frameworks geworden ist.",
                  "nl": "Het Google Brain team ontwikkelde TensorFlow, dat in 2015 werd vrijgegeven als open source en een van de populairste machine learning frameworks is geworden."
        }
      },
      {
        question: {
                  "en": "What is the main advantage of supervised learning?",
                  "es": "Â¿CuÃ¡l es la principal ventaja del aprendizaje supervisado?",
                  "de": "Was ist der Hauptvorteil des Ã¼berwachten Lernens?",
                  "nl": "Wat is het hoofdvoordeel van supervised learning?"
        },
        options: [
        {
                  "en": "It learns from labeled examples",
                  "es": "Aprende de ejemplos etiquetados",
                  "de": "Es lernt aus beschrifteten Beispielen",
                  "nl": "Het leert van gelabelde voorbeelden"
        },
        {
                  "en": "It's always 100% accurate",
                  "es": "Siempre es 100% preciso",
                  "de": "Es ist immer 100% genau",
                  "nl": "Het is altijd 100% accuraat"
        },
        {
                  "en": "It works without electricity",
                  "es": "Funciona sin electricidad",
                  "de": "Es funktioniert ohne Strom",
                  "nl": "Het werkt zonder elektriciteit"
        },
        {
                  "en": "It doesn't need data",
                  "es": "No necesita datos",
                  "de": "Es braucht keine Daten",
                  "nl": "Het heeft geen data nodig"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Supervised learning uses labeled training data where both input and correct output are known, allowing the algorithm to learn the relationship between them.",
                  "es": "El aprendizaje supervisado utiliza datos de entrenamiento etiquetados donde tanto la entrada como la salida correcta son conocidas, permitiendo al algoritmo aprender la relaciÃ³n entre ellas.",
                  "de": "Ãœberwachtes Lernen verwendet beschriftete Trainingsdaten, bei denen sowohl Eingabe als auch korrekte Ausgabe bekannt sind, wodurch der Algorithmus die Beziehung zwischen ihnen lernen kann.",
                  "nl": "Supervised learning gebruikt gelabelde trainingsdata waarbij zowel input als correcte output bekend zijn, waardoor het algoritme de relatie ertussen kan leren."
        }
      },
      {
        question: {
                  "en": "What does 'computer vision' enable machines to do?",
                  "es": "Â¿QuÃ© permite hacer la 'visiÃ³n por computadora' a las mÃ¡quinas?",
                  "de": "Was ermÃ¶glicht 'Computer Vision' Maschinen zu tun?",
                  "nl": "Wat stelt 'computer vision' machines in staat om te doen?"
        },
        options: [
        {
                  "en": "Replace human eyes",
                  "es": "Reemplazar los ojos humanos",
                  "de": "Menschliche Augen ersetzen",
                  "nl": "Menselijke ogen vervangen"
        },
        {
                  "en": "Create holographic displays",
                  "es": "Crear pantallas hologrÃ¡ficas",
                  "de": "Holographische Displays erstellen",
                  "nl": "Holografische displays creÃ«ren"
        },
        {
                  "en": "Have better eyesight than humans",
                  "es": "Tener mejor vista que los humanos",
                  "de": "Bessere Sehkraft als Menschen haben",
                  "nl": "Beter zicht hebben dan mensen"
        },
        {
                  "en": "See and understand images",
                  "es": "Ver y entender imÃ¡genes",
                  "de": "Bilder sehen und verstehen",
                  "nl": "Afbeeldingen zien en begrijpen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Computer vision is a field of AI that trains computers to interpret and understand visual information from the world, such as identifying objects in photos or videos.",
                  "es": "La visiÃ³n por computadora es un campo de IA que entrena a las computadoras para interpretar y entender informaciÃ³n visual del mundo, como identificar objetos en fotos o videos.",
                  "de": "Computer Vision ist ein Bereich der KI, der Computer darauf trainiert, visuelle Informationen aus der Welt zu interpretieren und zu verstehen, wie das Erkennen von Objekten in Fotos oder Videos.",
                  "nl": "Computer vision is een veld van AI dat computers traint om visuele informatie uit de wereld te interpreteren en begrijpen, zoals het identificeren van objecten in foto's of video's."
        }
      },
      {
        question: {
                  "en": "What is 'natural language processing' (NLP)?",
                  "es": "Â¿QuÃ© es el 'procesamiento de lenguaje natural' (PLN)?",
                  "de": "Was ist 'natÃ¼rliche Sprachverarbeitung' (NLP)?",
                  "nl": "Wat is 'natural language processing' (NLP)?"
        },
        options: [
        {
                  "en": "Teaching computers human languages",
                  "es": "EnseÃ±ar idiomas humanos a las computadoras",
                  "de": "Computern menschliche Sprachen beibringen",
                  "nl": "Computers menselijke talen leren"
        },
        {
                  "en": "Translating between programming languages",
                  "es": "Traducir entre lenguajes de programaciÃ³n",
                  "de": "Zwischen Programmiersprachen Ã¼bersetzen",
                  "nl": "Vertalen tussen programmeertalen"
        },
        {
                  "en": "Making computers speak louder",
                  "es": "Hacer que las computadoras hablen mÃ¡s fuerte",
                  "de": "Computer lauter sprechen lassen",
                  "nl": "Computers harder laten praten"
        },
        {
                  "en": "Creating new programming languages",
                  "es": "Crear nuevos lenguajes de programaciÃ³n",
                  "de": "Neue Programmiersprachen erstellen",
                  "nl": "Nieuwe programmeertalen creÃ«ren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "NLP is the branch of AI that helps computers understand, interpret, and generate human language in a way that is both meaningful and useful.",
                  "es": "PLN es la rama de IA que ayuda a las computadoras a entender, interpretar y generar lenguaje humano de una manera que sea tanto significativa como Ãºtil.",
                  "de": "NLP ist der Zweig der KI, der Computern hilft, menschliche Sprache zu verstehen, zu interpretieren und zu generieren auf eine Weise, die sowohl bedeutungsvoll als auch nÃ¼tzlich ist.",
                  "nl": "NLP is de tak van AI die computers helpt menselijke taal te begrijpen, interpreteren en genereren op een manier die zowel betekenisvol als nuttig is."
        }
      },
      {
        question: {
                  "en": "What is data preprocessing in machine learning?",
                  "es": "¿Qué es el preprocesamiento de datos en machine learning?",
                  "de": "Was ist Datenvorverarbeitung im maschinellen Lernen?",
                  "nl": "Wat is data preprocessing in machine learning?"
        },
        options: [
        {
                  "en": "Cleaning and preparing data before training",
                  "es": "Limpiar y preparar datos antes del entrenamiento",
                  "de": "Daten vor dem Training reinigen und vorbereiten",
                  "nl": "Data schoonmaken en voorbereiden voor training"
        },
        {
                  "en": "Deleting all data",
                  "es": "Eliminar todos los datos",
                  "de": "Alle Daten löschen",
                  "nl": "Alle data verwijderen"
        },
        {
                  "en": "Storing data in a database",
                  "es": "Almacenar datos en una base de datos",
                  "de": "Daten in einer Datenbank speichern",
                  "nl": "Data opslaan in een database"
        },
        {
                  "en": "Processing data after training",
                  "es": "Procesar datos después del entrenamiento",
                  "de": "Daten nach dem Training verarbeiten",
                  "nl": "Data verwerken na training"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Data preprocessing involves cleaning, transforming, and preparing raw data to make it suitable for machine learning algorithms. This includes handling missing values, removing duplicates, and formatting data correctly.",
                  "es": "El preprocesamiento de datos involucra limpiar, transformar y preparar datos en bruto para hacerlos adecuados para algoritmos de machine learning. Esto incluye manejar valores faltantes, eliminar duplicados y formatear datos correctamente.",
                  "de": "Datenvorverarbeitung umfasst das Reinigen, Transformieren und Vorbereiten von Rohdaten, um sie für maschinelle Lernalgorithmen geeignet zu machen. Dies beinhaltet das Behandeln fehlender Werte, das Entfernen von Duplikaten und das korrekte Formatieren der Daten.",
                  "nl": "Data preprocessing houdt in dat ruwe data wordt schoongemaakt, getransformeerd en voorbereid om geschikt te maken voor machine learning algoritmes. Dit omvat het omgaan met ontbrekende waarden, duplicaten verwijderen en data correct formatteren."
        }
      },
      {
        question: {
                  "en": "What are missing values in a dataset?",
                  "es": "¿Qué son los valores faltantes en un conjunto de datos?",
                  "de": "Was sind fehlende Werte in einem Datensatz?",
                  "nl": "Wat zijn ontbrekende waarden in een dataset?"
        },
        options: [
        {
                  "en": "Values that cost money",
                  "es": "Valores que cuestan dinero",
                  "de": "Werte, die Geld kosten",
                  "nl": "Waarden die geld kosten"
        },
        {
                  "en": "Incorrect data entries",
                  "es": "Entradas de datos incorrectas",
                  "de": "Falsche Dateneinträge",
                  "nl": "Onjuiste data-invoer"
        },
        {
                  "en": "Values that are too small to see",
                  "es": "Valores que son demasiado pequeños para ver",
                  "de": "Werte, die zu klein sind, um gesehen zu werden",
                  "nl": "Waarden die te klein zijn om te zien"
        },
        {
                  "en": "Data points that are absent or not recorded",
                  "es": "Puntos de datos que están ausentes o no registrados",
                  "de": "Datenpunkte, die fehlen oder nicht aufgezeichnet wurden",
                  "nl": "Datapunten die afwezig zijn of niet opgenomen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Missing values are data points that should be there but are absent from the dataset. They can occur due to data collection errors, equipment failure, or people not answering survey questions. They need to be handled before training models.",
                  "es": "Los valores faltantes son puntos de datos que deberían estar ahí pero están ausentes del conjunto de datos. Pueden ocurrir debido a errores de recolección de datos, falla del equipo, o personas que no responden preguntas de encuestas. Necesitan ser manejados antes de entrenar modelos.",
                  "de": "Fehlende Werte sind Datenpunkte, die da sein sollten, aber im Datensatz fehlen. Sie können aufgrund von Datensammlungsfehlern, Geräteausfall oder Menschen, die Umfragefragen nicht beantworten, auftreten. Sie müssen vor dem Training von Modellen behandelt werden.",
                  "nl": "Ontbrekende waarden zijn datapunten die er zouden moeten zijn maar afwezig zijn in de dataset. Ze kunnen voorkomen door dataververzamelingsfouten, apparatuurstoringen, of mensen die enquêtevragen niet beantwoorden. Ze moeten worden behandeld voor het trainen van modellen."
        }
      },
      {
        question: {
                  "en": "What is train-test split in machine learning?",
                  "es": "¿Qué es la división entrenamiento-prueba en machine learning?",
                  "de": "Was ist Train-Test-Split im maschinellen Lernen?",
                  "nl": "Wat is train-test split in machine learning?"
        },
        options: [
        {
                  "en": "Training two different models",
                  "es": "Entrenar dos modelos diferentes",
                  "de": "Zwei verschiedene Modelle trainieren",
                  "nl": "Twee verschillende modellen trainen"
        },
        {
                  "en": "Testing if the computer works",
                  "es": "Probar si la computadora funciona",
                  "de": "Testen, ob der Computer funktioniert",
                  "nl": "Testen of de computer werkt"
        },
        {
                  "en": "Splitting the training time",
                  "es": "Dividir el tiempo de entrenamiento",
                  "de": "Die Trainingszeit aufteilen",
                  "nl": "De trainingstijd verdelen"
        },
        {
                  "en": "Dividing data into training set and testing set",
                  "es": "Dividir datos en conjunto de entrenamiento y conjunto de prueba",
                  "de": "Daten in Trainings- und Testsatz aufteilen",
                  "nl": "Data verdelen in trainingsset en testset"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Train-test split divides the dataset into two parts: training data (used to teach the model) and test data (used to evaluate how well the model performs on unseen data). Common splits are 80% training, 20% testing.",
                  "es": "La división entrenamiento-prueba divide el conjunto de datos en dos partes: datos de entrenamiento (usados para enseñar al modelo) y datos de prueba (usados para evaluar qué tan bien funciona el modelo en datos no vistos). Divisiones comunes son 80% entrenamiento, 20% prueba.",
                  "de": "Train-Test-Split teilt den Datensatz in zwei Teile auf: Trainingsdaten (verwendet, um das Modell zu lehren) und Testdaten (verwendet, um zu bewerten, wie gut das Modell bei ungesehenen Daten funktioniert). Übliche Aufteilungen sind 80% Training, 20% Test.",
                  "nl": "Train-test split verdeelt de dataset in twee delen: trainingsdata (gebruikt om het model te leren) en testdata (gebruikt om te evalueren hoe goed het model presteert op ongeziene data). Veel voorkomende verdelingen zijn 80% training, 20% testen."
        }
      },
      {
        question: {
                  "en": "What is data normalization?",
                  "es": "¿Qué es la normalización de datos?",
                  "de": "Was ist Datennormalisierung?",
                  "nl": "Wat is data normalisatie?"
        },
        options: [
        {
                  "en": "Scaling data to similar ranges to improve model performance",
                  "es": "Escalar datos a rangos similares para mejorar el rendimiento del modelo",
                  "de": "Daten auf ähnliche Bereiche skalieren, um die Modellleistung zu verbessern",
                  "nl": "Data schalen naar vergelijkbare bereiken om modelprestaties te verbeteren"
        },
        {
                  "en": "Making data normal looking",
                  "es": "Hacer que los datos se vean normales",
                  "de": "Daten normal aussehen lassen",
                  "nl": "Data er normaal uit laten zien"
        },
        {
                  "en": "Converting data to normal distribution",
                  "es": "Convertir datos a distribución normal",
                  "de": "Daten zu Normalverteilung konvertieren",
                  "nl": "Data converteren naar normale verdeling"
        },
        {
                  "en": "Removing abnormal data",
                  "es": "Eliminar datos anormales",
                  "de": "Abnormale Daten entfernen",
                  "nl": "Abnormale data verwijderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Data normalization scales numerical features to similar ranges (like 0-1 or -1 to 1) so that no single feature dominates others due to scale differences. This helps algorithms perform better and train faster.",
                  "es": "La normalización de datos escala características numéricas a rangos similares (como 0-1 o -1 a 1) para que ninguna característica domine a otras debido a diferencias de escala. Esto ayuda a los algoritmos a funcionar mejor y entrenar más rápido.",
                  "de": "Datennormalisierung skaliert numerische Merkmale auf ähnliche Bereiche (wie 0-1 oder -1 bis 1), damit kein einzelnes Merkmal andere aufgrund von Skalenunterschieden dominiert. Dies hilft Algorithmen, besser zu funktionieren und schneller zu trainieren.",
                  "nl": "Data normalisatie schaalt numerieke features naar vergelijkbare bereiken (zoals 0-1 of -1 tot 1) zodat geen enkele feature anderen domineert vanwege schaalverschillen. Dit helpt algoritmes beter presteren en sneller trainen."
        }
      },
      {
        question: {
                  "en": "What is feature engineering?",
                  "es": "¿Qué es la ingeniería de características?",
                  "de": "Was ist Feature Engineering?",
                  "nl": "Wat is feature engineering?"
        },
        options: [
        {
                  "en": "Engineering software features",
                  "es": "Desarrollar características de software",
                  "de": "Software-Features entwickeln",
                  "nl": "Software features ontwikkelen"
        },
        {
                  "en": "Building physical features of machines",
                  "es": "Construir características físicas de máquinas",
                  "de": "Physische Merkmale von Maschinen bauen",
                  "nl": "Fysieke kenmerken van machines bouwen"
        },
        {
                  "en": "Designing computer hardware",
                  "es": "Diseñar hardware de computadora",
                  "de": "Computer-Hardware entwerfen",
                  "nl": "Computer hardware ontwerpen"
        },
        {
                  "en": "Creating and selecting the best input variables for models",
                  "es": "Crear y seleccionar las mejores variables de entrada para modelos",
                  "de": "Die besten Eingabevariablen für Modelle erstellen und auswählen",
                  "nl": "De beste inputvariabelen voor modellen creëren en selecteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Feature engineering involves creating, transforming, and selecting the most relevant input variables (features) for machine learning models. Good features can significantly improve model performance.",
                  "es": "La ingeniería de características involucra crear, transformar y seleccionar las variables de entrada (características) más relevantes para modelos de machine learning. Buenas características pueden mejorar significativamente el rendimiento del modelo.",
                  "de": "Feature Engineering umfasst das Erstellen, Transformieren und Auswählen der relevantesten Eingabevariablen (Features) für maschinelle Lernmodelle. Gute Features können die Modellleistung erheblich verbessern.",
                  "nl": "Feature engineering houdt in dat de meest relevante inputvariabelen (features) voor machine learning modellen worden gecreëerd, getransformeerd en geselecteerd. Goede features kunnen de modelprestaties aanzienlijk verbeteren."
        }
      },
      {
        question: {
                  "en": "What is cross-validation?",
                  "es": "¿Qué es la validación cruzada?",
                  "de": "Was ist Kreuzvalidierung?",
                  "nl": "Wat is cross-validation?"
        },
        options: [
        {
                  "en": "A technique to evaluate model performance by testing on multiple data splits",
                  "es": "Una técnica para evaluar el rendimiento del modelo probando en múltiples divisiones de datos",
                  "de": "Eine Technik zur Bewertung der Modellleistung durch Testen auf mehreren Datenaufteilungen",
                  "nl": "Een techniek om modelprestaties te evalueren door te testen op meerdere data-opsplitsingen"
        },
        {
                  "en": "Crossing out invalid data",
                  "es": "Tachar datos inválidos",
                  "de": "Ungültige Daten durchstreichen",
                  "nl": "Ongeldige data doorstrepen"
        },
        {
                  "en": "Checking if data is correct",
                  "es": "Verificar si los datos son correctos",
                  "de": "Prüfen, ob Daten korrekt sind",
                  "nl": "Controleren of data correct is"
        },
        {
                  "en": "Validating data across different computers",
                  "es": "Validar datos en diferentes computadoras",
                  "de": "Daten über verschiedene Computer validieren",
                  "nl": "Data valideren over verschillende computers"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Cross-validation repeatedly splits data into training and validation sets to get a more reliable estimate of how well a model will perform. K-fold cross-validation is a common approach that uses k different splits.",
                  "es": "La validación cruzada divide repetidamente los datos en conjuntos de entrenamiento y validación para obtener una estimación más confiable de qué tan bien funcionará un modelo. La validación cruzada k-fold es un enfoque común que usa k divisiones diferentes.",
                  "de": "Kreuzvalidierung teilt Daten wiederholt in Trainings- und Validierungssets auf, um eine zuverlässigere Schätzung zu erhalten, wie gut ein Modell funktionieren wird. K-fold Kreuzvalidierung ist ein häufiger Ansatz, der k verschiedene Aufteilungen verwendet.",
                  "nl": "Cross-validation splitst herhaaldelijk data in trainings- en validatiesets om een betrouwbaardere schatting te krijgen van hoe goed een model zal presteren. K-fold cross-validation is een veelgebruikte benadering die k verschillende opsplitsingen gebruikt."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a validation set?",
                  "es": "¿Cuál es el propósito de un conjunto de validación?",
                  "de": "Was ist der Zweck eines Validierungssets?",
                  "nl": "Wat is het doel van een validatieset?"
        },
        options: [
        {
                  "en": "To tune model parameters and select the best model during training",
                  "es": "Para ajustar parámetros del modelo y seleccionar el mejor modelo durante el entrenamiento",
                  "de": "Um Modellparameter zu optimieren und das beste Modell während des Trainings auszuwählen",
                  "nl": "Om modelparameters af te stellen en het beste model te selecteren tijdens training"
        },
        {
                  "en": "To check data for errors",
                  "es": "Para verificar errores en los datos",
                  "de": "Um Daten auf Fehler zu prüfen",
                  "nl": "Om data te controleren op fouten"
        },
        {
                  "en": "To store validation certificates",
                  "es": "Para almacenar certificados de validación",
                  "de": "Um Validierungszertifikate zu speichern",
                  "nl": "Om validatiecertificaten op te slaan"
        },
        {
                  "en": "To validate that the computer works",
                  "es": "Para validar que la computadora funciona",
                  "de": "Um zu validieren, dass der Computer funktioniert",
                  "nl": "Om te valideren dat de computer werkt"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A validation set is used during model development to tune hyperparameters and select the best performing model. It's separate from both training and test sets to avoid overfitting.",
                  "es": "Un conjunto de validación se usa durante el desarrollo del modelo para ajustar hiperparámetros y seleccionar el modelo con mejor rendimiento. Es separado tanto de los conjuntos de entrenamiento como de prueba para evitar overfitting.",
                  "de": "Ein Validierungsset wird während der Modellentwicklung verwendet, um Hyperparameter zu optimieren und das beste Modell auszuwählen. Es ist sowohl von Trainings- als auch von Testsets getrennt, um Overfitting zu vermeiden.",
                  "nl": "Een validatieset wordt gebruikt tijdens modelontwikkeling om hyperparameters af te stellen en het best presterende model te selecteren. Het is gescheiden van zowel trainings- als testsets om overfitting te voorkomen."
        }
      },
      {
        question: {
                  "en": "What is data augmentation?",
                  "es": "¿Qué es el aumento de datos?",
                  "de": "Was ist Datenaugmentierung?",
                  "nl": "Wat is data augmentation?"
        },
        options: [
        {
                  "en": "Increasing data storage capacity",
                  "es": "Aumentar la capacidad de almacenamiento de datos",
                  "de": "Datenspeicherkapazität erhöhen",
                  "nl": "Dataopslagcapaciteit verhogen"
        },
        {
                  "en": "Creating more training examples by modifying existing data",
                  "es": "Crear más ejemplos de entrenamiento modificando datos existentes",
                  "de": "Mehr Trainingsbeispiele durch Modifikation vorhandener Daten erstellen",
                  "nl": "Meer trainingsvoorbeelden creëren door bestaande data te modificeren"
        },
        {
                  "en": "Making data files larger",
                  "es": "Hacer archivos de datos más grandes",
                  "de": "Datendateien größer machen",
                  "nl": "Databestanden groter maken"
        },
        {
                  "en": "Adding more computers to process data",
                  "es": "Agregar más computadoras para procesar datos",
                  "de": "Mehr Computer zum Verarbeiten von Daten hinzufügen",
                  "nl": "Meer computers toevoegen om data te verwerken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Data augmentation artificially increases the size of training datasets by creating modified versions of existing data. For images, this might include rotation, flipping, or changing brightness to help models generalize better.",
                  "es": "El aumento de datos aumenta artificialmente el tamaño de conjuntos de datos de entrenamiento creando versiones modificadas de datos existentes. Para imágenes, esto podría incluir rotación, volteo o cambio de brillo para ayudar a los modelos a generalizar mejor.",
                  "de": "Datenaugmentierung vergrößert künstlich die Größe von Trainingsdatensätzen durch Erstellen modifizierter Versionen vorhandener Daten. Bei Bildern könnte dies Rotation, Spiegelung oder Helligkeitsänderung umfassen, um Modellen zu helfen, besser zu verallgemeinern.",
                  "nl": "Data augmentation vergroot kunstmatig de grootte van trainingsdatasets door gemodificeerde versies van bestaande data te creëren. Voor afbeeldingen kan dit rotatie, omdraaien of helderheid veranderen omvatten om modellen te helpen beter te generaliseren."
        }
      },
      {
        question: {
                  "en": "What are categorical variables?",
                  "es": "¿Qué son las variables categóricas?",
                  "de": "Was sind kategorische Variablen?",
                  "nl": "Wat zijn categorische variabelen?"
        },
        options: [
        {
                  "en": "Variables that represent categories or groups",
                  "es": "Variables que representan categorías o grupos",
                  "de": "Variablen, die Kategorien oder Gruppen darstellen",
                  "nl": "Variabelen die categorieën of groepen vertegenwoordigen"
        },
        {
                  "en": "Variables that change categories",
                  "es": "Variables que cambian categorías",
                  "de": "Variablen, die Kategorien ändern",
                  "nl": "Variabelen die categorieën veranderen"
        },
        {
                  "en": "Variables stored in categories folder",
                  "es": "Variables almacenadas en carpeta de categorías",
                  "de": "Variablen, die im Kategorienordner gespeichert sind",
                  "nl": "Variabelen opgeslagen in categorieënmap"
        },
        {
                  "en": "Variables that are very important",
                  "es": "Variables que son muy importantes",
                  "de": "Variablen, die sehr wichtig sind",
                  "nl": "Variabelen die heel belangrijk zijn"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Categorical variables represent distinct categories or groups without numerical meaning, like colors (red, blue, green) or departments (sales, marketing, engineering). They often need special encoding for machine learning.",
                  "es": "Las variables categóricas representan categorías o grupos distintos sin significado numérico, como colores (rojo, azul, verde) o departamentos (ventas, marketing, ingeniería). A menudo necesitan codificación especial para machine learning.",
                  "de": "Kategorische Variablen repräsentieren unterschiedliche Kategorien oder Gruppen ohne numerische Bedeutung, wie Farben (rot, blau, grün) oder Abteilungen (Verkauf, Marketing, Technik). Sie benötigen oft spezielle Kodierung für maschinelles Lernen.",
                  "nl": "Categorische variabelen vertegenwoordigen verschillende categorieën of groepen zonder numerieke betekenis, zoals kleuren (rood, blauw, groen) of afdelingen (verkoop, marketing, engineering). Ze hebben vaak speciale codering nodig voor machine learning."
        }
      },
      {
        question: {
                  "en": "What is one-hot encoding?",
                  "es": "¿Qué es la codificación one-hot?",
                  "de": "Was ist One-Hot-Kodierung?",
                  "nl": "Wat is one-hot encoding?"
        },
        options: [
        {
                  "en": "Converting categorical variables into binary columns",
                  "es": "Convertir variables categóricas en columnas binarias",
                  "de": "Kategorische Variablen in binäre Spalten konvertieren",
                  "nl": "Categorische variabelen omzetten naar binaire kolommen"
        },
        {
                  "en": "Encoding data when computer is hot",
                  "es": "Codificar datos cuando la computadora está caliente",
                  "de": "Daten kodieren, wenn der Computer heiß ist",
                  "nl": "Data coderen wanneer de computer heet is"
        },
        {
                  "en": "Using only one encoding method",
                  "es": "Usar solo un método de codificación",
                  "de": "Nur eine Kodierungsmethode verwenden",
                  "nl": "Slechts één coderingsmethode gebruiken"
        },
        {
                  "en": "Encoding one variable at a time",
                  "es": "Codificar una variable a la vez",
                  "de": "Eine Variable nach der anderen kodieren",
                  "nl": "Één variabele tegelijk coderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "One-hot encoding converts categorical variables into binary columns (0s and 1s). For example, colors 'red', 'blue', 'green' become three columns where each row has exactly one '1' indicating the color.",
                  "es": "La codificación one-hot convierte variables categóricas en columnas binarias (0s y 1s). Por ejemplo, colores 'rojo', 'azul', 'verde' se convierten en tres columnas donde cada fila tiene exactamente un '1' indicando el color.",
                  "de": "One-Hot-Kodierung konvertiert kategorische Variablen in binäre Spalten (0en und 1en). Zum Beispiel werden Farben 'rot', 'blau', 'grün' zu drei Spalten, wo jede Zeile genau eine '1' hat, die die Farbe anzeigt.",
                  "nl": "One-hot encoding zet categorische variabelen om naar binaire kolommen (0en en 1en). Bijvoorbeeld, kleuren 'rood', 'blauw', 'groen' worden drie kolommen waarbij elke rij precies één '1' heeft die de kleur aangeeft."
        }
      },
      {
        question: {
                  "en": "What is the purpose of data splitting in machine learning?",
                  "es": "¿Cuál es el propósito de dividir datos en machine learning?",
                  "de": "Was ist der Zweck der Datenaufteilung im maschinellen Lernen?",
                  "nl": "Wat is het doel van data splitting in machine learning?"
        },
        options: [
        {
                  "en": "To ensure unbiased evaluation of model performance",
                  "es": "Para asegurar evaluación imparcial del rendimiento del modelo",
                  "de": "Um eine unvoreingenommene Bewertung der Modellleistung sicherzustellen",
                  "nl": "Om onbevooroordeelde evaluatie van modelprestaties te verzekeren"
        },
        {
                  "en": "To save storage space",
                  "es": "Para ahorrar espacio de almacenamiento",
                  "de": "Um Speicherplatz zu sparen",
                  "nl": "Om opslagruimte te besparen"
        },
        {
                  "en": "To organize data better",
                  "es": "Para organizar mejor los datos",
                  "de": "Um Daten besser zu organisieren",
                  "nl": "Om data beter te organiseren"
        },
        {
                  "en": "To make data processing faster",
                  "es": "Para hacer el procesamiento de datos más rápido",
                  "de": "Um die Datenverarbeitung schneller zu machen",
                  "nl": "Om dataverwerking sneller te maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Data splitting separates data into different sets (train/validation/test) to evaluate how well models will perform on new, unseen data. This prevents overfitting and gives realistic performance estimates.",
                  "es": "La división de datos separa los datos en diferentes conjuntos (entrenamiento/validación/prueba) para evaluar qué tan bien funcionarán los modelos en datos nuevos y no vistos. Esto previene overfitting y da estimaciones realistas de rendimiento.",
                  "de": "Datenaufteilung trennt Daten in verschiedene Sets (Train/Validierung/Test), um zu bewerten, wie gut Modelle bei neuen, ungesehenen Daten funktionieren werden. Dies verhindert Overfitting und gibt realistische Leistungsschätzungen.",
                  "nl": "Data splitting scheidt data in verschillende sets (train/validatie/test) om te evalueren hoe goed modellen zullen presteren op nieuwe, ongeziene data. Dit voorkomt overfitting en geeft realistische prestatieschattingen."
        }
      },
      {
        question: {
                  "en": "What is an outlier in data?",
                  "es": "¿Qué es un valor atípico en los datos?",
                  "de": "Was ist ein Ausreißer in Daten?",
                  "nl": "Wat is een outlier in data?"
        },
        options: [
        {
                  "en": "Data that is perfectly normal",
                  "es": "Datos que son perfectamente normales",
                  "de": "Daten, die völlig normal sind",
                  "nl": "Data die perfect normaal is"
        },
        {
                  "en": "The first point in a dataset",
                  "es": "El primer punto en un conjunto de datos",
                  "de": "Der erste Punkt in einem Datensatz",
                  "nl": "Het eerste punt in een dataset"
        },
        {
                  "en": "A data point that is significantly different from other pts",
                  "es": "Un punto de datos que es significativamente diferente de otros puntos",
                  "de": "Ein Datenpunkt, der sich erheblich von anderen Punkten unterscheidet",
                  "nl": "Een datapunt dat significant verschilt van andere punten"
        },
        {
                  "en": "Data that lies outside the computer",
                  "es": "Datos que están fuera de la computadora",
                  "de": "Daten, die außerhalb des Computers liegen",
                  "nl": "Data die buiten de computer ligt"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "An outlier is a data point that differs significantly from other observations. It could be due to measurement errors, data entry mistakes, or genuine extreme values. Outliers can affect model performance and may need special handling.",
                  "es": "Un valor atípico es un punto de datos que difiere significativamente de otras observaciones. Podría deberse a errores de medición, errores de entrada de datos, o valores extremos genuinos. Los valores atípicos pueden afectar el rendimiento del modelo y pueden necesitar manejo especial.",
                  "de": "Ein Ausreißer ist ein Datenpunkt, der sich erheblich von anderen Beobachtungen unterscheidet. Es könnte auf Messfehler, Dateneingabefehler oder echte Extremwerte zurückzuführen sein. Ausreißer können die Modellleistung beeinträchtigen und benötigen möglicherweise spezielle Behandlung.",
                  "nl": "Een outlier is een datapunt dat significant verschilt van andere observaties. Het kan komen door meetfouten, data-invoerfouten, of echte extreme waarden. Outliers kunnen modelprestaties beïnvloeden en hebben mogelijk speciale behandeling nodig."
        }
      },
      {
        question: {
                  "en": "What is the difference between structured and unstructured data?",
                  "es": "¿Cuál es la diferencia entre datos estructurados y no estructurados?",
                  "de": "Was ist der Unterschied zwischen strukturierten und unstrukturierten Daten?",
                  "nl": "Wat is het verschil tussen gestructureerde en ongestructureerde data?"
        },
        options: [
        {
                  "en": "Structured data is organized in tables, unstructured data has no fixed format",
                  "es": "Datos estructurados están organizados en tablas, datos no estructurados no tienen formato fijo",
                  "de": "Strukturierte Daten sind in Tabellen organisiert, unstrukturierte Daten haben kein festes Format",
                  "nl": "Gestructureerde data is georganiseerd in tabellen, ongestructureerde data heeft geen vast formaat"
        },
        {
                  "en": "Structured data is always numerical",
                  "es": "Datos estructurados son siempre numéricos",
                  "de": "Strukturierte Daten sind immer numerisch",
                  "nl": "Gestructureerde data is altijd numeriek"
        },
        {
                  "en": "Structured data is newer than unstructured data",
                  "es": "Datos estructurados son más nuevos que datos no estructurados",
                  "de": "Strukturierte Daten sind neuer als unstrukturierte Daten",
                  "nl": "Gestructureerde data is nieuwer dan ongestructureerde data"
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
                  "en": "Structured data is organized in a fixed format like databases or spreadsheets with rows and columns. Unstructured data includes text, images, videos, and audio without predefined structure.",
                  "es": "Los datos estructurados están organizados en un formato fijo como bases de datos o hojas de cálculo con filas y columnas. Los datos no estructurados incluyen texto, imágenes, videos y audio sin estructura predefinida.",
                  "de": "Strukturierte Daten sind in einem festen Format wie Datenbanken oder Tabellenkalkulationen mit Zeilen und Spalten organisiert. Unstrukturierte Daten umfassen Text, Bilder, Videos und Audio ohne vordefinierte Struktur.",
                  "nl": "Gestructureerde data is georganiseerd in een vast formaat zoals databases of spreadsheets met rijen en kolommen. Ongestructureerde data omvat tekst, afbeeldingen, video's en audio zonder voorgedefinieerde structuur."
        }
      },
      {
        question: {
                  "en": "What is the purpose of data visualization in machine learning?",
                  "es": "¿Cuál es el propósito de la visualización de datos en machine learning?",
                  "de": "Was ist der Zweck der Datenvisualisierung im maschinellen Lernen?",
                  "nl": "Wat is het doel van datavisualisatie in machine learning?"
        },
        options: [
        {
                  "en": "To hide sensitive information",
                  "es": "Para ocultar información sensible",
                  "de": "Um sensible Informationen zu verbergen",
                  "nl": "Om gevoelige informatie te verbergen"
        },
        {
                  "en": "To make data look pretty",
                  "es": "Para hacer que los datos se vean bonitos",
                  "de": "Um Daten hübsch aussehen zu lassen",
                  "nl": "Om data er mooi uit te laten zien"
        },
        {
                  "en": "To understand patterns and relationships in data",
                  "es": "Para entender patrones y relaciones en los datos",
                  "de": "Um Muster und Beziehungen in Daten zu verstehen",
                  "nl": "Om patronen en relaties in data te begrijpen"
        },
        {
                  "en": "To slow down data processing",
                  "es": "Para ralentizar el procesamiento de datos",
                  "de": "Um die Datenverarbeitung zu verlangsamen",
                  "nl": "Om dataverwerking te vertragen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Data visualization helps identify patterns, trends, outliers, and relationships in data that might not be obvious from looking at raw numbers. It's crucial for exploratory data analysis and communicating insights.",
                  "es": "La visualización de datos ayuda a identificar patrones, tendencias, valores atípicos y relaciones en datos que podrían no ser obvios al mirar números en bruto. Es crucial para análisis exploratorio de datos y comunicar insights.",
                  "de": "Datenvisualisierung hilft dabei, Muster, Trends, Ausreißer und Beziehungen in Daten zu identifizieren, die beim Betrachten roher Zahlen möglicherweise nicht offensichtlich sind. Sie ist entscheidend für explorative Datenanalyse und Kommunikation von Erkenntnissen.",
                  "nl": "Datavisualisatie helpt patronen, trends, outliers en relaties in data te identificeren die misschien niet duidelijk zijn bij het bekijken van ruwe getallen. Het is cruciaal voor verkennende data-analyse en het communiceren van inzichten."
        }
      },
      {
        question: {
                  "en": "What is feature engineering and why is it important in machine learning?",
                  "es": "¿Qué es la ingeniería de características y por qué es importante en machine learning?",
                  "de": "Was ist Feature Engineering und warum ist es wichtig im maschinellen Lernen?",
                  "nl": "Wat is feature engineering en waarom is het belangrijk in machine learning?"
        },
        options: [
        {
                  "en": "Testing feature functionality",
                  "es": "Probar funcionalidad de características",
                  "de": "Feature-Funktionalität testen",
                  "nl": "Feature functionaliteit testen"
        },
        {
                  "en": "Building physical features for computers",
                  "es": "Construir características físicas para computadoras",
                  "de": "Physische Features für Computer bauen",
                  "nl": "Fysieke kenmerken bouwen voor computers"
        },
        {
                  "en": "Engineering software features only",
                  "es": "Ingeniar solo características de software",
                  "de": "Nur Software-Features entwickeln",
                  "nl": "Alleen software features ontwikkelen"
        },
        {
                  "en": "The process of selecting, modifying, or creating features from raw data to improve model performance",
                  "es": "El proceso de seleccionar, modificar o crear características de datos en bruto para mejorar el rendimiento del modelo",
                  "de": "Der Prozess der Auswahl, Modifikation oder Erstellung von Features aus Rohdaten zur Verbesserung der Modellleistung",
                  "nl": "Het proces van selecteren, modificeren of creëren van features uit ruwe data om modelprestaties te verbeteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Feature engineering is one of the most important steps in machine learning. It involves transforming raw data into meaningful features that better represent the underlying patterns, directly impacting model accuracy and performance.",
                  "es": "La ingeniería de características es uno de los pasos más importantes en machine learning. Involucra transformar datos en bruto en características significativas que representan mejor los patrones subyacentes, impactando directamente la precisión y rendimiento del modelo.",
                  "de": "Feature Engineering ist einer der wichtigsten Schritte im maschinellen Lernen. Es beinhaltet die Transformation von Rohdaten in bedeutungsvolle Features, die die zugrundeliegenden Muster besser repräsentieren und direkt die Modellgenauigkeit und -leistung beeinflussen.",
                  "nl": "Feature engineering is een van de belangrijkste stappen in machine learning. Het behelst het transformeren van ruwe data naar betekenisvolle features die onderliggende patronen beter representeren, wat direct de modelnauwkeurigheid en prestaties beïnvloedt."
        }
      },
      {
        question: {
                  "en": "What is regularization in machine learning?",
                  "es": "¿Qué es la regularización en machine learning?",
                  "de": "Was ist Regularisierung im maschinellen Lernen?",
                  "nl": "Wat is regularisatie in machine learning?"
        },
        options: [
        {
                  "en": "Regular training schedules",
                  "es": "Horarios regulares de entrenamiento",
                  "de": "Regelmäßige Trainingspläne",
                  "nl": "Regelmatige trainingsschema's"
        },
        {
                  "en": "Making data regular and uniform",
                  "es": "Hacer los datos regulares y uniformes",
                  "de": "Daten regelmäßig und einheitlich machen",
                  "nl": "Data regelmatig en uniform maken"
        },
        {
                  "en": "A technique to prevent overfitting by adding a penalty for complex models",
                  "es": "Una técnica para prevenir sobreajuste añadiendo una penalización por modelos complejos",
                  "de": "Eine Technik zur Verhinderung von Overfitting durch Hinzufügen einer Strafe für komplexe Modelle",
                  "nl": "Een techniek om overfitting te voorkomen door een straf toe te voegen voor complexe modellen"
        },
        {
                  "en": "Following regulations and laws",
                  "es": "Seguir regulaciones y leyes",
                  "de": "Vorschriften und Gesetze befolgen",
                  "nl": "Regelgeving en wetten volgen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Regularization adds a penalty term to the loss function to discourage overly complex models, helping prevent overfitting. Common techniques include L1 (Lasso) and L2 (Ridge) regularization.",
                  "es": "La regularización añade un término de penalización a la función de pérdida para desalentar modelos excesivamente complejos, ayudando a prevenir sobreajuste. Técnicas comunes incluyen regularización L1 (Lasso) y L2 (Ridge).",
                  "de": "Regularisierung fügt der Verlustfunktion einen Strafterm hinzu um übermäßig komplexe Modelle zu verhindern, hilft Overfitting zu vermeiden. Gängige Techniken umfassen L1 (Lasso) und L2 (Ridge) Regularisierung.",
                  "nl": "Regularisatie voegt een strafterm toe aan de loss function om overdreven complexe modellen te ontmoedigen, helpt overfitting te voorkomen. Veelgebruikte technieken zijn L1 (Lasso) en L2 (Ridge) regularisatie."
        }
      },
      {
        question: {
                  "en": "What is the curse of dimensionality?",
                  "es": "¿Qué es la maldición de la dimensionalidad?",
                  "de": "Was ist der Fluch der Dimensionalität?",
                  "nl": "Wat is de vloek van dimensionaliteit?"
        },
        options: [
        {
                  "en": "A curse that affects all dimensions equally",
                  "es": "Una maldición que afecta todas las dimensiones igualmente",
                  "de": "Ein Fluch der alle Dimensionen gleich betrifft",
                  "nl": "Een vloek die alle dimensies gelijk beïnvloedt"
        },
        {
                  "en": "Problems that arise when working with high-dimensional data, making it sparse and hard to analyze",
                  "es": "Problemas que surgen al trabajar con datos de alta dimensión, haciéndolos escasos y difíciles de analizar",
                  "de": "Probleme die bei der Arbeit mit hochdimensionalen Daten auftreten, wodurch sie spärlich und schwer zu analysieren werden",
                  "nl": "Problemen die ontstaan bij het werken met hoogdimensionale data, waardoor het schaars en moeilijk te analyseren wordt"
        },
        {
                  "en": "The difficulty of visualizing 3D objects",
                  "es": "La dificultad de visualizar objetos 3D",
                  "de": "Die Schwierigkeit 3D-Objekte zu visualisieren",
                  "nl": "De moeilijkheid van het visualiseren van 3D objecten"
        },
        {
                  "en": "Having too many computer dimensions",
                  "es": "Tener demasiadas dimensiones de computadora",
                  "de": "Zu viele Computer-Dimensionen haben",
                  "nl": "Te veel computer dimensies hebben"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "As dimensionality increases, data becomes increasingly sparse in the space, requiring exponentially more data to maintain the same density. This makes patterns harder to detect and distances less meaningful.",
                  "es": "A medida que aumenta la dimensionalidad, los datos se vuelven cada vez más escasos en el espacio, requiriendo exponencialmente más datos para mantener la misma densidad. Esto hace que los patrones sean más difíciles de detectar y las distancias menos significativas.",
                  "de": "Mit zunehmender Dimensionalität werden Daten im Raum zunehmend spärlich, erfordern exponentiell mehr Daten um dieselbe Dichte zu erhalten. Dies macht Muster schwerer erkennbar und Entfernungen weniger bedeutungsvoll.",
                  "nl": "Naarmate dimensionaliteit toeneemt, wordt data steeds schaarser in de ruimte, vereist exponentieel meer data om dezelfde dichtheid te behouden. Dit maakt patronen moeilijker te detecteren en afstanden minder betekenisvol."
        }
      },
      {
        question: {
                  "en": "What is the learning rate in gradient descent?",
                  "es": "¿Qué es la tasa de aprendizaje en descenso de gradiente?",
                  "de": "Was ist die Lernrate im Gradientenabstieg?",
                  "nl": "Wat is de learning rate in gradient descent?"
        },
        options: [
        {
                  "en": "How fast the model learns new information",
                  "es": "Qué tan rápido el modelo aprende nueva información",
                  "de": "Wie schnell das Modell neue Informationen lernt",
                  "nl": "Hoe snel het model nieuwe informatie leert"
        },
        {
                  "en": "The step size used when updating model parameters during training",
                  "es": "El tamaño del paso usado al actualizar parámetros del modelo durante el entrenamiento",
                  "de": "Die Schrittgröße beim Aktualisieren von Modellparametern während des Trainings",
                  "nl": "De stapgrootte gebruikt bij het updaten van modelparameters tijdens training"
        },
        {
                  "en": "The speed of the computer processor",
                  "es": "La velocidad del procesador de la computadora",
                  "de": "Die Geschwindigkeit des Computerprozessors",
                  "nl": "De snelheid van de computerprocessor"
        },
        {
                  "en": "The number of examples learned per second",
                  "es": "El número de ejemplos aprendidos por segundo",
                  "de": "Die Anzahl der pro Sekunde gelernten Beispiele",
                  "nl": "Het aantal voorbeelden geleerd per seconde"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Learning rate controls how much to adjust parameters in each iteration. Too high causes overshooting, too low causes slow convergence. Finding the right learning rate is crucial for effective training.",
                  "es": "La tasa de aprendizaje controla cuánto ajustar los parámetros en cada iteración. Muy alta causa sobrepaso, muy baja causa convergencia lenta. Encontrar la tasa de aprendizaje correcta es crucial para entrenamiento efectivo.",
                  "de": "Lernrate steuert wie stark Parameter in jeder Iteration angepasst werden. Zu hoch verursacht Überschießen, zu niedrig verursacht langsame Konvergenz. Die richtige Lernrate zu finden ist entscheidend für effektives Training.",
                  "nl": "Learning rate controleert hoeveel parameters aangepast worden in elke iteratie. Te hoog veroorzaakt overshooting, te laag veroorzaakt langzame convergentie. De juiste learning rate vinden is cruciaal voor effectieve training."
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
                  "en": "Statistical gradient descent",
                  "es": "Descenso de gradiente estadístico",
                  "de": "Statistischer Gradientenabstieg",
                  "nl": "Statistische gradient descent"
        },
        {
                  "en": "Gradient descent using one or a few examples at a time instead of the entire dataset",
                  "es": "Descenso de gradiente usando uno o pocos ejemplos a la vez en lugar de todo el conjunto de datos",
                  "de": "Gradientenabstieg mit einem oder wenigen Beispielen gleichzeitig statt des gesamten Datensatzes",
                  "nl": "Gradient descent met één of enkele voorbeelden tegelijk in plaats van de hele dataset"
        },
        {
                  "en": "Gradient descent with random initial values",
                  "es": "Descenso de gradiente con valores iniciales aleatorios",
                  "de": "Gradientenabstieg mit zufälligen Anfangswerten",
                  "nl": "Gradient descent met willekeurige beginwaarden"
        },
        {
                  "en": "Random selection of algorithms",
                  "es": "Selección aleatoria de algoritmos",
                  "de": "Zufällige Auswahl von Algorithmen",
                  "nl": "Willekeurige selectie van algoritmes"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "SGD updates parameters using a small batch or single example rather than the full dataset, making it faster and enabling online learning. The stochastic nature helps escape local minima.",
                  "es": "SGD actualiza parámetros usando un lote pequeño o ejemplo único en lugar del conjunto de datos completo, haciéndolo más rápido y permitiendo aprendizaje en línea. La naturaleza estocástica ayuda a escapar de mínimos locales.",
                  "de": "SGD aktualisiert Parameter mit einem kleinen Batch oder einzelnem Beispiel statt des vollständigen Datensatzes, macht es schneller und ermöglicht Online-Lernen. Die stochastische Natur hilft lokale Minima zu verlassen.",
                  "nl": "SGD update parameters met een kleine batch of enkel voorbeeld in plaats van de volledige dataset, maakt het sneller en maakt online leren mogelijk. De stochastische aard helpt lokale minima te ontsnappen."
        }
      },
      {
        question: {
                  "en": "What is a ROC curve used for?",
                  "es": "¿Para qué se usa una curva ROC?",
                  "de": "Wofür wird eine ROC-Kurve verwendet?",
                  "nl": "Waarvoor wordt een ROC curve gebruikt?"
        },
        options: [
        {
                  "en": "Plotting training curves",
                  "es": "Trazar curvas de entrenamiento",
                  "de": "Trainingskurven zeichnen",
                  "nl": "Training curves plotten"
        },
        {
                  "en": "Evaluating classifier performance across different threshold settings",
                  "es": "Evaluar rendimiento del clasificador a través de diferentes configuraciones de umbral",
                  "de": "Bewertung der Klassifikatorleistung über verschiedene Schwellenwerteinstellungen",
                  "nl": "Evalueren van classifier prestaties over verschillende drempelinstellingen"
        },
        {
                  "en": "Calculating return on computation",
                  "es": "Calcular retorno de computación",
                  "de": "Return on Computation berechnen",
                  "nl": "Return on computation berekenen"
        },
        {
                  "en": "Measuring the rate of change",
                  "es": "Medir la tasa de cambio",
                  "de": "Änderungsrate messen",
                  "nl": "Veranderingssnelheid meten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "ROC (Receiver Operating Characteristic) curve plots true positive rate vs false positive rate at various classification thresholds, helping visualize classifier performance and choose optimal thresholds.",
                  "es": "La curva ROC (Característica Operativa del Receptor) traza tasa de verdaderos positivos vs tasa de falsos positivos en varios umbrales de clasificación, ayudando a visualizar rendimiento del clasificador y elegir umbrales óptimos.",
                  "de": "ROC (Receiver Operating Characteristic) Kurve plottet echte Positivrate vs falsche Positivrate bei verschiedenen Klassifikationsschwellen, hilft Klassifikatorleistung zu visualisieren und optimale Schwellen zu wählen.",
                  "nl": "ROC (Receiver Operating Characteristic) curve plot true positive rate vs false positive rate bij verschillende classificatiedrempels, helpt classifier prestaties te visualiseren en optimale drempels te kiezen."
        }
      },
      {
        question: {
                  "en": "What does AUC stand for in machine learning?",
                  "es": "¿Qué significa AUC en machine learning?",
                  "de": "Was bedeutet AUC im maschinellen Lernen?",
                  "nl": "Wat betekent AUC in machine learning?"
        },
        options: [
        {
                  "en": "Area Under the Curve",
                  "es": "Área Bajo la Curva",
                  "de": "Fläche Unter der Kurve",
                  "nl": "Area Under the Curve"
        },
        {
                  "en": "Algorithm Using Calculation",
                  "es": "Algoritmo Usando Cálculo",
                  "de": "Algorithmus mit Berechnung",
                  "nl": "Algoritme met Berekening"
        },
        {
                  "en": "Advanced User Control",
                  "es": "Control Avanzado de Usuario",
                  "de": "Erweiterte Benutzersteuerung",
                  "nl": "Geavanceerde Gebruikerscontrole"
        },
        {
                  "en": "Automatic Update Cycle",
                  "es": "Ciclo de Actualización Automática",
                  "de": "Automatischer Aktualisierungszyklus",
                  "nl": "Automatische Update Cyclus"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AUC (Area Under the ROC Curve) measures classifier performance, ranging from 0 to 1. Higher AUC indicates better model discrimination between classes, with 0.5 being random and 1.0 being perfect.",
                  "es": "AUC (Área Bajo la Curva ROC) mide rendimiento del clasificador, variando de 0 a 1. AUC más alto indica mejor discriminación del modelo entre clases, con 0.5 siendo aleatorio y 1.0 siendo perfecto.",
                  "de": "AUC (Fläche Unter der ROC-Kurve) misst Klassifikatorleistung, reicht von 0 bis 1. Höheres AUC zeigt bessere Modelldiskriminierung zwischen Klassen, mit 0.5 als zufällig und 1.0 als perfekt.",
                  "nl": "AUC (Area Under the ROC Curve) meet classifier prestaties, varieert van 0 tot 1. Hogere AUC duidt op betere modeldiscriminatie tussen klassen, met 0.5 als willekeurig en 1.0 als perfect."
        }
      },
      {
        question: {
                  "en": "What is dropout in neural networks?",
                  "es": "¿Qué es el dropout en redes neuronales?",
                  "de": "Was ist Dropout in neuronalen Netzwerken?",
                  "nl": "Wat is dropout in neurale netwerken?"
        },
        options: [
        {
                  "en": "Neurons that stop working permanently",
                  "es": "Neuronas que dejan de funcionar permanentemente",
                  "de": "Neuronen die dauerhaft aufhören zu funktionieren",
                  "nl": "Neuronen die permanent stoppen met werken"
        },
        {
                  "en": "Students dropping out of AI courses",
                  "es": "Estudiantes que abandonan cursos de IA",
                  "de": "Studenten die KI-Kurse abbrechen",
                  "nl": "Studenten die AI cursussen verlaten"
        },
        {
                  "en": "Removing bad training examples",
                  "es": "Eliminar malos ejemplos de entrenamiento",
                  "de": "Schlechte Trainingsbeispiele entfernen",
                  "nl": "Slechte trainingsvoorbeelden verwijderen"
        },
        {
                  "en": "Randomly ignoring some neurons during training to prevent overfitting",
                  "es": "Ignorar aleatoriamente algunas neuronas durante el entrenamiento para prevenir sobreajuste",
                  "de": "Zufälliges Ignorieren einiger Neuronen während des Trainings zur Verhinderung von Overfitting",
                  "nl": "Willekeurig negeren van sommige neuronen tijdens training om overfitting te voorkomen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dropout randomly deactivates a percentage of neurons during each training iteration, forcing the network to learn robust features and preventing over-reliance on specific neurons, reducing overfitting.",
                  "es": "El dropout desactiva aleatoriamente un porcentaje de neuronas durante cada iteración de entrenamiento, forzando a la red a aprender características robustas y previniendo dependencia excesiva en neuronas específicas, reduciendo sobreajuste.",
                  "de": "Dropout deaktiviert zufällig einen Prozentsatz von Neuronen während jeder Trainingsiteration, zwingt das Netzwerk robuste Features zu lernen und verhindert übermäßige Abhängigkeit von bestimmten Neuronen, reduziert Overfitting.",
                  "nl": "Dropout deactiveert willekeurig een percentage neuronen tijdens elke trainingsiteratie, dwingt het netwerk robuuste features te leren en voorkomt overmatige afhankelijkheid van specifieke neuronen, vermindert overfitting."
        }
      },
      {
        question: {
                  "en": "What is the difference between bagging and boosting?",
                  "es": "¿Cuál es la diferencia entre bagging y boosting?",
                  "de": "Was ist der Unterschied zwischen Bagging und Boosting?",
                  "nl": "Wat is het verschil tussen bagging en boosting?"
        },
        options: [
        {
                  "en": "They are exactly the same technique",
                  "es": "Son exactamente la misma técnica",
                  "de": "Sie sind genau dieselbe Technik",
                  "nl": "Ze zijn precies dezelfde techniek"
        },
        {
                  "en": "Bagging trains models in parallel, boosting trains sequentially focusing on mistakes",
                  "es": "Bagging entrena modelos en paralelo, boosting entrena secuencialmente enfocándose en errores",
                  "de": "Bagging trainiert Modelle parallel, Boosting trainiert sequenziell mit Fokus auf Fehler",
                  "nl": "Bagging traint modellen parallel, boosting traint sequentieel gericht op fouten"
        },
        {
                  "en": "Boosting uses bags of data",
                  "es": "Boosting usa bolsas de datos",
                  "de": "Boosting verwendet Datenbeutel",
                  "nl": "Boosting gebruikt zakken van data"
        },
        {
                  "en": "Bagging is faster than boosting always",
                  "es": "Bagging es siempre más rápido que boosting",
                  "de": "Bagging ist immer schneller als Boosting",
                  "nl": "Bagging is altijd sneller dan boosting"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Bagging (Bootstrap Aggregating) trains multiple models independently on random subsets and averages predictions. Boosting trains models sequentially, each focusing on examples the previous models got wrong.",
                  "es": "Bagging (Agregación Bootstrap) entrena múltiples modelos independientemente en subconjuntos aleatorios y promedia predicciones. Boosting entrena modelos secuencialmente, cada uno enfocándose en ejemplos que los modelos anteriores equivocaron.",
                  "de": "Bagging (Bootstrap Aggregating) trainiert mehrere Modelle unabhängig auf zufälligen Teilmengen und mittelt Vorhersagen. Boosting trainiert Modelle sequenziell, jedes fokussiert auf Beispiele die vorherige Modelle falsch hatten.",
                  "nl": "Bagging (Bootstrap Aggregating) traint meerdere modellen onafhankelijk op willekeurige subsets en middelt voorspellingen. Boosting traint modellen sequentieel, elk gericht op voorbeelden die vorige modellen fout hadden."
        }
      },
      {
        question: {
                  "en": "What is k-means clustering?",
                  "es": "¿Qué es el agrupamiento k-means?",
                  "de": "Was ist k-Means-Clustering?",
                  "nl": "Wat is k-means clustering?"
        },
        options: [
        {
                  "en": "Finding the mean of k values",
                  "es": "Encontrar la media de k valores",
                  "de": "Den Mittelwert von k Werten finden",
                  "nl": "Het gemiddelde vinden van k waarden"
        },
        {
                  "en": "A supervised learning algorithm",
                  "es": "Un algoritmo de aprendizaje supervisado",
                  "de": "Ein überwachter Lernalgorithmus",
                  "nl": "Een supervised learning algoritme"
        },
        {
                  "en": "An algorithm that groups data into k clusters based on similarity",
                  "es": "Un algoritmo que agrupa datos en k clusters basado en similitud",
                  "de": "Ein Algorithmus der Daten in k Cluster basierend auf Ähnlichkeit gruppiert",
                  "nl": "Een algoritme dat data groepeert in k clusters gebaseerd op overeenkomst"
        },
        {
                  "en": "Calculating k different means",
                  "es": "Calcular k medias diferentes",
                  "de": "k verschiedene Mittelwerte berechnen",
                  "nl": "k verschillende gemiddelden berekenen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "K-means partitions data into k clusters by iteratively assigning points to the nearest centroid and updating centroids, commonly used for customer segmentation and pattern discovery.",
                  "es": "K-means particiona datos en k clusters asignando iterativamente puntos al centroide más cercano y actualizando centroides, comúnmente usado para segmentación de clientes y descubrimiento de patrones.",
                  "de": "K-Means partitioniert Daten in k Cluster durch iteratives Zuweisen von Punkten zum nächsten Zentroid und Aktualisieren von Zentroiden, häufig verwendet für Kundensegmentierung und Mustererkennung.",
                  "nl": "K-means verdeelt data in k clusters door iteratief punten toe te wijzen aan de dichtstbijzijnde centroïde en centroïden bij te werken, vaak gebruikt voor klantsegmentatie en patroonontdekking."
        }
      },
      {
        question: {
                  "en": "What is the difference between L1 and L2 regularization?",
                  "es": "¿Cuál es la diferencia entre regularización L1 y L2?",
                  "de": "Was ist der Unterschied zwischen L1 und L2 Regularisierung?",
                  "nl": "Wat is het verschil tussen L1 en L2 regularisatie?"
        },
        options: [
        {
                  "en": "L1 is always better than L2",
                  "es": "L1 es siempre mejor que L2",
                  "de": "L1 ist immer besser als L2",
                  "nl": "L1 is altijd beter dan L2"
        },
        {
                  "en": "L1 can zero out features (sparse), L2 shrinks them uniformly",
                  "es": "L1 puede poner características en cero (escaso), L2 las reduce uniformemente",
                  "de": "L1 kann Features auf Null setzen (spärlich), L2 schrumpft sie gleichmäßig",
                  "nl": "L1 kan features op nul zetten (schaars), L2 verkleint ze uniform"
        },
        {
                  "en": "There is no difference",
                  "es": "No hay diferencia",
                  "de": "Es gibt keinen Unterschied",
                  "nl": "Er is geen verschil"
        },
        {
                  "en": "L2 is only for regression",
                  "es": "L2 es solo para regresión",
                  "de": "L2 ist nur für Regression",
                  "nl": "L2 is alleen voor regressie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "L1 (Lasso) adds absolute value of coefficients as penalty, can drive some to exactly zero for feature selection. L2 (Ridge) adds squared coefficients, shrinks all uniformly but rarely zeros them out.",
                  "es": "L1 (Lasso) añade valor absoluto de coeficientes como penalización, puede llevar algunos a exactamente cero para selección de características. L2 (Ridge) añade coeficientes al cuadrado, reduce todos uniformemente pero raramente los pone en cero.",
                  "de": "L1 (Lasso) fügt Absolutwert der Koeffizienten als Strafe hinzu, kann einige auf exakt Null treiben für Feature-Auswahl. L2 (Ridge) fügt quadrierte Koeffizienten hinzu, schrumpft alle gleichmäßig aber setzt sie selten auf Null.",
                  "nl": "L1 (Lasso) voegt absolute waarde van coëfficiënten toe als straf, kan sommige exact naar nul brengen voor feature selectie. L2 (Ridge) voegt gekwadrateerde coëfficiënten toe, verkleint alle uniform maar zet ze zelden op nul."
        }
      },
      {
        question: {
                  "en": "What is Principal Component Analysis (PCA)?",
                  "es": "¿Qué es el Análisis de Componentes Principales (PCA)?",
                  "de": "Was ist Hauptkomponentenanalyse (PCA)?",
                  "nl": "Wat is Principal Component Analysis (PCA)?"
        },
        options: [
        {
                  "en": "A type of clustering algorithm",
                  "es": "Un tipo de algoritmo de agrupamiento",
                  "de": "Eine Art Clustering-Algorithmus",
                  "nl": "Een type clustering algoritme"
        },
        {
                  "en": "A dimensionality reduction technique that finds directions of maximum variance",
                  "es": "Una técnica de reducción de dimensionalidad que encuentra direcciones de máxima varianza",
                  "de": "Eine Dimensionsreduktionstechnik die Richtungen maximaler Varianz findet",
                  "nl": "Een dimensionaliteitsreductie techniek die richtingen van maximale variantie vindt"
        },
        {
                  "en": "Primary component assessment",
                  "es": "Evaluación de componentes primarios",
                  "de": "Primäre Komponentenbewertung",
                  "nl": "Primaire component beoordeling"
        },
        {
                  "en": "Principal analysis of computer algorithms",
                  "es": "Análisis principal de algoritmos de computadora",
                  "de": "Hauptanalyse von Computeralgorithmen",
                  "nl": "Hoofdanalyse van computeralgoritmes"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "PCA transforms high-dimensional data into fewer uncorrelated principal components that capture most variance, useful for visualization, noise reduction, and speeding up algorithms.",
                  "es": "PCA transforma datos de alta dimensión en menos componentes principales no correlacionados que capturan la mayor varianza, útil para visualización, reducción de ruido y acelerar algoritmos.",
                  "de": "PCA transformiert hochdimensionale Daten in weniger unkorrelierte Hauptkomponenten die die meiste Varianz erfassen, nützlich für Visualisierung, Rauschreduktion und Beschleunigung von Algorithmen.",
                  "nl": "PCA transformeert hoogdimensionale data naar minder ongecorreleerde hoofdcomponenten die de meeste variantie vastleggen, nuttig voor visualisatie, ruisreductie en versnelling van algoritmes."
        }
      },
      {
        question: {
                  "en": "What is the vanishing gradient problem?",
                  "es": "¿Qué es el problema del gradiente que desaparece?",
                  "de": "Was ist das Problem des verschwindenden Gradienten?",
                  "nl": "Wat is het verdwijnende gradiënt probleem?"
        },
        options: [
        {
                  "en": "Gradients become too small in deep networks, slowing or preventing learning",
                  "es": "Los gradientes se vuelven demasiado pequeños en redes profundas, ralentizando o previniendo el aprendizaje",
                  "de": "Gradienten werden in tiefen Netzwerken zu klein, verlangsamen oder verhindern das Lernen",
                  "nl": "Gradiënten worden te klein in diepe netwerken, vertragen of verhinderen leren"
        },
        {
                  "en": "Losing track of gradient values",
                  "es": "Perder el rastro de valores de gradiente",
                  "de": "Gradientenwerte aus den Augen verlieren",
                  "nl": "Gradiëntwaarden kwijtraken"
        },
        {
                  "en": "The gradient calculation getting deleted",
                  "es": "El cálculo del gradiente siendo eliminado",
                  "de": "Gradientenberechnung wird gelöscht",
                  "nl": "Gradiëntberekening wordt verwijderd"
        },
        {
                  "en": "Gradients disappearing from memory",
                  "es": "Gradientes que desaparecen de la memoria",
                  "de": "Gradienten verschwinden aus dem Speicher",
                  "nl": "Gradiënten verdwijnen uit het geheugen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "In deep networks, gradients can become exponentially small during backpropagation, making it difficult for early layers to learn. Solutions include ReLU activation, batch normalization, and residual connections.",
                  "es": "En redes profundas, los gradientes pueden volverse exponencialmente pequeños durante retropropagación, dificultando que las capas tempranas aprendan. Soluciones incluyen activación ReLU, normalización por lotes y conexiones residuales.",
                  "de": "In tiefen Netzwerken können Gradienten während Backpropagation exponentiell klein werden, erschwert das Lernen früher Schichten. Lösungen umfassen ReLU-Aktivierung, Batch-Normalisierung und Residualverbindungen.",
                  "nl": "In diepe netwerken kunnen gradiënten exponentieel klein worden tijdens backpropagation, bemoeilijkt leren van vroege lagen. Oplossingen omvatten ReLU activatie, batch normalisatie en residuele verbindingen."
        }
      },
      {
        question: {
                  "en": "What is early stopping in model training?",
                  "es": "¿Qué es la parada temprana en el entrenamiento del modelo?",
                  "de": "Was ist frühes Stoppen im Modelltraining?",
                  "nl": "Wat is early stopping in modeltraining?"
        },
        options: [
        {
                  "en": "Stopping training early to save time",
                  "es": "Detener el entrenamiento temprano para ahorrar tiempo",
                  "de": "Training früh stoppen um Zeit zu sparen",
                  "nl": "Training vroeg stoppen om tijd te besparen"
        },
        {
                  "en": "Stopping training when validation performance stops improving to prevent overfitting",
                  "es": "Detener el entrenamiento cuando el rendimiento de validación deja de mejorar para prevenir sobreajuste",
                  "de": "Training stoppen wenn Validierungsleistung aufhört sich zu verbessern um Overfitting zu verhindern",
                  "nl": "Training stoppen wanneer validatieprestaties stoppen met verbeteren om overfitting te voorkomen"
        },
        {
                  "en": "Starting training before it's ready",
                  "es": "Comenzar el entrenamiento antes de que esté listo",
                  "de": "Training starten bevor es bereit ist",
                  "nl": "Training starten voordat het klaar is"
        },
        {
                  "en": "Canceling training due to errors",
                  "es": "Cancelar el entrenamiento debido a errores",
                  "de": "Training wegen Fehlern abbrechen",
                  "nl": "Training annuleren vanwege fouten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Early stopping monitors validation metrics during training and stops when performance plateaus or degrades, preventing the model from overfitting to training data while maintaining good generalization.",
                  "es": "La parada temprana monitorea métricas de validación durante el entrenamiento y se detiene cuando el rendimiento se estanca o degrada, previniendo que el modelo sobreajuste a datos de entrenamiento mientras mantiene buena generalización.",
                  "de": "Frühes Stoppen überwacht Validierungsmetriken während des Trainings und stoppt wenn Leistung stagniert oder sich verschlechtert, verhindert dass das Modell zu Trainingsdaten overfittet während gute Generalisierung erhalten bleibt.",
                  "nl": "Early stopping monitort validatiemetrieken tijdens training en stopt wanneer prestaties stagneren of verslechteren, voorkomt dat het model overfit op trainingsdata terwijl goede generalisatie behouden blijft."
        }
      },
      {
        question: {
                  "en": "What is a support vector machine (SVM)?",
                  "es": "¿Qué es una máquina de vectores de soporte (SVM)?",
                  "de": "Was ist eine Support Vector Machine (SVM)?",
                  "nl": "Wat is een support vector machine (SVM)?"
        },
        options: [
        {
                  "en": "A machine that provides support for vectors",
                  "es": "Una máquina que proporciona soporte para vectores",
                  "de": "Eine Maschine die Unterstützung für Vektoren bietet",
                  "nl": "Een machine die ondersteuning biedt voor vectoren"
        },
        {
                  "en": "A type of neural network",
                  "es": "Un tipo de red neuronal",
                  "de": "Eine Art neuronales Netzwerk",
                  "nl": "Een type neuraal netwerk"
        },
        {
                  "en": "A classifier that finds the optimal hyperplane to separate classes",
                  "es": "Un clasificador que encuentra el hiperplano óptimo para separar clases",
                  "de": "Ein Klassifikator der die optimale Hyperebene zum Trennen von Klassen findet",
                  "nl": "Een classifier die het optimale hyperplane vindt om klassen te scheiden"
        },
        {
                  "en": "Vector-based storage system",
                  "es": "Sistema de almacenamiento basado en vectores",
                  "de": "Vektorbasiertes Speichersystem",
                  "nl": "Vector-gebaseerd opslagsysteem"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "SVM finds the hyperplane that maximizes the margin between classes, using support vectors (nearest points to the boundary). Effective for high-dimensional data and can use kernels for non-linear separation.",
                  "es": "SVM encuentra el hiperplano que maximiza el margen entre clases, usando vectores de soporte (puntos más cercanos al límite). Efectivo para datos de alta dimensión y puede usar kernels para separación no lineal.",
                  "de": "SVM findet die Hyperebene die den Abstand zwischen Klassen maximiert, verwendet Support-Vektoren (nächste Punkte zur Grenze). Effektiv für hochdimensionale Daten und kann Kernel für nicht-lineare Trennung verwenden.",
                  "nl": "SVM vindt het hyperplane dat de marge tussen klassen maximaliseert, gebruikt support vectoren (dichtstbijzijnde punten bij de grens). Effectief voor hoogdimensionale data en kan kernels gebruiken voor niet-lineaire scheiding."
        }
      },
      {
        question: {
                  "en": "What is logistic regression used for?",
                  "es": "¿Para qué se usa la regresión logística?",
                  "de": "Wofür wird logistische Regression verwendet?",
                  "nl": "Waarvoor wordt logistische regressie gebruikt?"
        },
        options: [
        {
                  "en": "Only for regression tasks",
                  "es": "Solo para tareas de regresión",
                  "de": "Nur für Regressionsaufgaben",
                  "nl": "Alleen voor regressietaken"
        },
        {
                  "en": "Binary classification by predicting probability of class membership",
                  "es": "Clasificación binaria prediciendo probabilidad de pertenencia a clase",
                  "de": "Binäre Klassifikation durch Vorhersage der Klassenzugehörigkeitswahrscheinlichkeit",
                  "nl": "Binaire classificatie door waarschijnlijkheid van klasse-lidmaatschap te voorspellen"
        },
        {
                  "en": "Logging system errors",
                  "es": "Registrar errores del sistema",
                  "de": "Systemfehler protokollieren",
                  "nl": "Systeemfouten loggen"
        },
        {
                  "en": "Managing logistics operations",
                  "es": "Gestionar operaciones logísticas",
                  "de": "Logistikoperationen verwalten",
                  "nl": "Logistieke operaties beheren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Despite its name, logistic regression is a classification algorithm that uses a logistic function to model the probability of an instance belonging to a particular class, commonly used for binary classification.",
                  "es": "A pesar de su nombre, la regresión logística es un algoritmo de clasificación que usa una función logística para modelar la probabilidad de que una instancia pertenezca a una clase particular, comúnmente usada para clasificación binaria.",
                  "de": "Trotz des Namens ist logistische Regression ein Klassifikationsalgorithmus der eine logistische Funktion verwendet um die Wahrscheinlichkeit zu modellieren dass eine Instanz zu einer bestimmten Klasse gehört, häufig für binäre Klassifikation verwendet.",
                  "nl": "Ondanks de naam is logistische regressie een classificatie-algoritme dat een logistische functie gebruikt om de waarschijnlijkheid te modelleren dat een instantie tot een bepaalde klasse behoort, vaak gebruikt voor binaire classificatie."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a validation curve?",
                  "es": "¿Cuál es el propósito de una curva de validación?",
                  "de": "Was ist der Zweck einer Validierungskurve?",
                  "nl": "Wat is het doel van een validatiecurve?"
        },
        options: [
        {
                  "en": "To check data quality",
                  "es": "Para verificar calidad de datos",
                  "de": "Um Datenqualität zu prüfen",
                  "nl": "Om datakwaliteit te controleren"
        },
        {
                  "en": "To validate that curves are correct",
                  "es": "Para validar que las curvas son correctas",
                  "de": "Um zu validieren dass Kurven korrekt sind",
                  "nl": "Om te valideren dat curves correct zijn"
        },
        {
                  "en": "To visualize how model performance changes with different hyperparameter values",
                  "es": "Visualizar cómo el rendimiento del modelo cambia con diferentes valores de hiperparámetros",
                  "de": "Zu visualisieren wie sich Modellleistung mit verschiedenen Hyperparameterwerten ändert",
                  "nl": "Om te visualiseren hoe modelprestaties veranderen met verschillende hyperparameterwaarden"
        },
        {
                  "en": "To measure training speed",
                  "es": "Para medir velocidad de entrenamiento",
                  "de": "Um Trainingsgeschwindigkeit zu messen",
                  "nl": "Om trainingssnelheid te meten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Validation curves plot training and validation scores against hyperparameter values, helping identify optimal settings and diagnose whether the model is underfitting or overfitting.",
                  "es": "Las curvas de validación trazan puntuaciones de entrenamiento y validación contra valores de hiperparámetros, ayudando a identificar configuraciones óptimas y diagnosticar si el modelo está subajustado o sobreajustado.",
                  "de": "Validierungskurven plotten Trainings- und Validierungswerte gegen Hyperparameterwerte, helfen optimale Einstellungen zu identifizieren und zu diagnostizieren ob das Modell underfittet oder overfittet.",
                  "nl": "Validatiecurves plotten trainings- en validatiescores tegen hyperparameterwaarden, helpen optimale instellingen te identificeren en te diagnosticeren of het model underfit of overfit."
        }
      },
      {
        question: {
                  "en": "What is bootstrapping in machine learning?",
                  "es": "¿Qué es el bootstrapping en machine learning?",
                  "de": "Was ist Bootstrapping im maschinellen Lernen?",
                  "nl": "Wat is bootstrapping in machine learning?"
        },
        options: [
        {
                  "en": "Pulling yourself up by bootstraps",
                  "es": "Levantarse tirando de los cordones",
                  "de": "Sich an den eigenen Schnürsenkeln hochziehen",
                  "nl": "Jezelf optrekken aan je schoenveters"
        },
        {
                  "en": "Starting the computer boot process",
                  "es": "Iniciar el proceso de arranque de la computadora",
                  "de": "Computer-Bootprozess starten",
                  "nl": "Computer boot proces starten"
        },
        {
                  "en": "Loading initial parameters",
                  "es": "Cargar parámetros iniciales",
                  "de": "Initiale Parameter laden",
                  "nl": "Initiële parameters laden"
        },
        {
                  "en": "Sampling data with replacement to create multiple training sets",
                  "es": "Muestrear datos con reemplazo para crear múltiples conjuntos de entrenamiento",
                  "de": "Daten mit Zurücklegen sampeln um mehrere Trainingssets zu erstellen",
                  "nl": "Data samplen met vervanging om meerdere trainingssets te creëren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Bootstrapping randomly samples data with replacement to create multiple datasets of the same size. This technique is fundamental to bagging and used for estimating model uncertainty and creating ensemble methods.",
                  "es": "Bootstrapping muestrea aleatoriamente datos con reemplazo para crear múltiples conjuntos de datos del mismo tamaño. Esta técnica es fundamental para bagging y se usa para estimar incertidumbre del modelo y crear métodos de conjunto.",
                  "de": "Bootstrapping sampelt zufällig Daten mit Zurücklegen um mehrere Datensätze derselben Größe zu erstellen. Diese Technik ist fundamental für Bagging und wird verwendet um Modellunsicherheit zu schätzen und Ensemble-Methoden zu erstellen.",
                  "nl": "Bootstrapping samplet willekeurig data met vervanging om meerdere datasets van dezelfde grootte te creëren. Deze techniek is fundamenteel voor bagging en wordt gebruikt om modelonzekerheid te schatten en ensemble methoden te creëren."
        }
      },
      {
        question: {
                  "en": "What is a learning curve in machine learning?",
                  "es": "¿Qué es una curva de aprendizaje en machine learning?",
                  "de": "Was ist eine Lernkurve im maschinellen Lernen?",
                  "nl": "Wat is een learning curve in machine learning?"
        },
        options: [
        {
                  "en": "How fast someone learns ML concepts",
                  "es": "Qué tan rápido alguien aprende conceptos de ML",
                  "de": "Wie schnell jemand ML-Konzepte lernt",
                  "nl": "Hoe snel iemand ML concepten leert"
        },
        {
                  "en": "A plot showing model performance vs training set size",
                  "es": "Un gráfico que muestra rendimiento del modelo vs tamaño del conjunto de entrenamiento",
                  "de": "Ein Plot der Modellleistung vs Trainingssetgröße zeigt",
                  "nl": "Een plot die modelprestaties toont vs trainingsset grootte"
        },
        {
                  "en": "The difficulty curve of learning",
                  "es": "La curva de dificultad de aprendizaje",
                  "de": "Die Schwierigkeitskurve des Lernens",
                  "nl": "De moeilijkheidscurve van leren"
        },
        {
                  "en": "A curved learning path",
                  "es": "Un camino de aprendizaje curvo",
                  "de": "Ein gekrümmter Lernpfad",
                  "nl": "Een gebogen leerpad"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Learning curves plot training and validation performance against training set size, helping diagnose if more data would improve performance and whether the model suffers from high bias or high variance.",
                  "es": "Las curvas de aprendizaje trazan rendimiento de entrenamiento y validación contra tamaño del conjunto de entrenamiento, ayudando a diagnosticar si más datos mejorarían el rendimiento y si el modelo sufre de alto sesgo o alta varianza.",
                  "de": "Lernkurven plotten Trainings- und Validierungsleistung gegen Trainingssetgröße, helfen zu diagnostizieren ob mehr Daten die Leistung verbessern würden und ob das Modell unter hohem Bias oder hoher Varianz leidet.",
                  "nl": "Learning curves plotten trainings- en validatieprestaties tegen trainingsset grootte, helpen te diagnosticeren of meer data de prestaties zou verbeteren en of het model lijdt aan hoge bias of hoge variance."
        }
      },
      {
        question: {
                  "en": "What is the elbow method in clustering?",
                  "es": "¿Qué es el método del codo en clustering?",
                  "de": "Was ist die Ellbogenmethode im Clustering?",
                  "nl": "Wat is de elbow methode in clustering?"
        },
        options: [
        {
                  "en": "Bending clustering algorithms",
                  "es": "Doblar algoritmos de clustering",
                  "de": "Clustering-Algorithmen biegen",
                  "nl": "Clustering algoritmes buigen"
        },
        {
                  "en": "Using your elbow to point at clusters",
                  "es": "Usar tu codo para señalar clusters",
                  "de": "Deinen Ellbogen verwenden um auf Cluster zu zeigen",
                  "nl": "Je elleboog gebruiken om naar clusters te wijzen"
        },
        {
                  "en": "A physical exercise for data scientists",
                  "es": "Un ejercicio físico para científicos de datos",
                  "de": "Eine körperliche Übung für Datenwissenschaftler",
                  "nl": "Een fysieke oefening voor data scientists"
        },
        {
                  "en": "A technique to find optimal number of clusters by plotting inertia vs k",
                  "es": "Una técnica para encontrar número óptimo de clusters trazando inercia vs k",
                  "de": "Eine Technik um optimale Anzahl von Clustern zu finden durch Plotten von Inertia vs k",
                  "nl": "Een techniek om optimaal aantal clusters te vinden door inertia vs k te plotten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The elbow method plots within-cluster sum of squares (inertia) against number of clusters k. The 'elbow' point where the curve bends sharply suggests the optimal k value.",
                  "es": "El método del codo traza suma de cuadrados intra-cluster (inercia) contra número de clusters k. El punto 'codo' donde la curva se dobla bruscamente sugiere el valor óptimo de k.",
                  "de": "Die Ellbogenmethode plottet Within-Cluster-Quadratsumme (Inertia) gegen Anzahl der Cluster k. Der 'Ellbogen'-Punkt wo die Kurve sich scharf biegt schlägt den optimalen k-Wert vor.",
                  "nl": "De elbow methode plot binnen-cluster som van kwadraten (inertia) tegen aantal clusters k. Het 'elleboog' punt waar de curve scherp buigt suggereert de optimale k waarde."
        }
      },
      {
        question: {
                  "en": "What is silhouette score in clustering?",
                  "es": "¿Qué es el puntaje de silueta en clustering?",
                  "de": "Was ist der Silhouettenwert im Clustering?",
                  "nl": "Wat is silhouette score in clustering?"
        },
        options: [
        {
                  "en": "The shadow of data points",
                  "es": "La sombra de los puntos de datos",
                  "de": "Der Schatten von Datenpunkten",
                  "nl": "De schaduw van datapunten"
        },
        {
                  "en": "Visual appearance score",
                  "es": "Puntuación de apariencia visual",
                  "de": "Visueller Erscheinungswert",
                  "nl": "Visuele verschijningsscore"
        },
        {
                  "en": "A metric measuring how similar points are to their own cluster vs other clusters",
                  "es": "Una métrica que mide qué tan similares son los puntos a su propio cluster vs otros clusters",
                  "de": "Eine Metrik die misst wie ähnlich Punkte ihrem eigenen Cluster vs anderen Clustern sind",
                  "nl": "Een metriek die meet hoe vergelijkbaar punten zijn met hun eigen cluster vs andere clusters"
        },
        {
                  "en": "The outline of clusters",
                  "es": "El contorno de los clusters",
                  "de": "Die Umrisse von Clustern",
                  "nl": "De omtrek van clusters"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Silhouette score ranges from -1 to 1, measuring how well-separated clusters are. Higher scores indicate points are well-matched to their cluster and poorly-matched to neighboring clusters.",
                  "es": "El puntaje de silueta varía de -1 a 1, midiendo qué tan bien separados están los clusters. Puntajes más altos indican que los puntos están bien emparejados con su cluster y mal emparejados con clusters vecinos.",
                  "de": "Silhouettenwert reicht von -1 bis 1, misst wie gut Cluster getrennt sind. Höhere Werte zeigen dass Punkte gut zu ihrem Cluster passen und schlecht zu benachbarten Clustern.",
                  "nl": "Silhouette score varieert van -1 tot 1, meet hoe goed gescheiden clusters zijn. Hogere scores duiden erop dat punten goed bij hun cluster passen en slecht bij naburige clusters."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  }
})();