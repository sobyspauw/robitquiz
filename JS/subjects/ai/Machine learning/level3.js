// AI Machine Learning Quiz - Level 3: Intermediate
(function() {
  const level3 = {
    name: {
      en: "ML Applications & Techniques",
      es: "Aplicaciones y TÃ©cnicas de ML",
      de: "ML-Anwendungen & Techniken",
      nl: "ML Toepassingen & Technieken"
    },
    questions: [
      {
        question: {
          en: "What is 'overfitting' in machine learning?",
          es: "Â¿QuÃ© es 'overfitting' en aprendizaje automÃ¡tico?",
          de: "Was ist 'Overfitting' im maschinellen Lernen?",
          nl: "Wat is 'overfitting' in machine learning?"
        },
        options: [
          { en: "When a model performs too well on training data but poorly on new data", es: "Cuando un modelo funciona demasiado bien en datos de entrenamiento pero mal en datos nuevos", de: "Wenn ein Modell zu gut auf Trainingsdaten aber schlecht auf neuen Daten funktioniert", nl: "Wanneer een model te goed presteert op trainingsdata maar slecht op nieuwe data" },
          { en: "When a computer runs out of memory", es: "Cuando una computadora se queda sin memoria", de: "Wenn ein Computer keinen Speicher mehr hat", nl: "Wanneer een computer geen geheugen meer heeft" },
          { en: "When training takes too long", es: "Cuando el entrenamiento toma demasiado tiempo", de: "Wenn das Training zu lange dauert", nl: "Wanneer training te lang duurt" },
          { en: "When data is too large", es: "Cuando los datos son demasiado grandes", de: "Wenn Daten zu groÃŸ sind", nl: "Wanneer data te groot is" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting occurs when a model learns the training data too specifically, including noise and outliers, making it unable to generalize well to new, unseen data.",
          es: "El overfitting ocurre cuando un modelo aprende los datos de entrenamiento demasiado especÃ­ficamente, incluyendo ruido y valores atÃ­picos, haciÃ©ndolo incapaz de generalizar bien a datos nuevos y no vistos.",
          de: "Overfitting tritt auf, wenn ein Modell die Trainingsdaten zu spezifisch lernt, einschlieÃŸlich Rauschen und AusreiÃŸern, wodurch es nicht gut auf neue, ungesehene Daten verallgemeinern kann.",
          nl: "Overfitting treedt op wanneer een model de trainingsdata te specifiek leert, inclusief ruis en uitschieters, waardoor het niet goed kan generaliseren naar nieuwe, ongeziene data."
        }
      },
      {
        question: {
          en: "Which company created the deep learning framework TensorFlow?",
          es: "Â¿QuÃ© empresa creÃ³ el framework de deep learning TensorFlow?",
          de: "Welches Unternehmen hat das Deep-Learning-Framework TensorFlow erstellt?",
          nl: "Welk bedrijf creÃ«erde het deep learning framework TensorFlow?"
        },
        options: [
          { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
          { en: "Google", es: "Google", de: "Google", nl: "Google" },
          { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" },
          { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" }
        ],
        correct: 1,
        explanation: {
          en: "Google Brain team developed TensorFlow, which was released as open source in 2015 and has become one of the most popular machine learning frameworks.",
          es: "El equipo de Google Brain desarrollÃ³ TensorFlow, que fue lanzado como cÃ³digo abierto en 2015 y se ha convertido en uno de los frameworks de aprendizaje automÃ¡tico mÃ¡s populares.",
          de: "Das Google Brain-Team entwickelte TensorFlow, das 2015 als Open Source verÃ¶ffentlicht wurde und zu einem der beliebtesten Machine Learning-Frameworks geworden ist.",
          nl: "Het Google Brain team ontwikkelde TensorFlow, dat in 2015 werd vrijgegeven als open source en een van de populairste machine learning frameworks is geworden."
        }
      },
      {
        question: {
          en: "What is the main advantage of supervised learning?",
          es: "Â¿CuÃ¡l es la principal ventaja del aprendizaje supervisado?",
          de: "Was ist der Hauptvorteil des Ã¼berwachten Lernens?",
          nl: "Wat is het hoofdvoordeel van supervised learning?"
        },
        options: [
          { en: "It doesn't need data", es: "No necesita datos", de: "Es braucht keine Daten", nl: "Het heeft geen data nodig" },
          { en: "It learns from labeled examples", es: "Aprende de ejemplos etiquetados", de: "Es lernt aus beschrifteten Beispielen", nl: "Het leert van gelabelde voorbeelden" },
          { en: "It's always 100% accurate", es: "Siempre es 100% preciso", de: "Es ist immer 100% genau", nl: "Het is altijd 100% accuraat" },
          { en: "It works without electricity", es: "Funciona sin electricidad", de: "Es funktioniert ohne Strom", nl: "Het werkt zonder elektriciteit" }
        ],
        correct: 1,
        explanation: {
          en: "Supervised learning uses labeled training data where both input and correct output are known, allowing the algorithm to learn the relationship between them.",
          es: "El aprendizaje supervisado utiliza datos de entrenamiento etiquetados donde tanto la entrada como la salida correcta son conocidas, permitiendo al algoritmo aprender la relaciÃ³n entre ellas.",
          de: "Ãœberwachtes Lernen verwendet beschriftete Trainingsdaten, bei denen sowohl Eingabe als auch korrekte Ausgabe bekannt sind, wodurch der Algorithmus die Beziehung zwischen ihnen lernen kann.",
          nl: "Supervised learning gebruikt gelabelde trainingsdata waarbij zowel input als correcte output bekend zijn, waardoor het algoritme de relatie ertussen kan leren."
        }
      },
      {
        question: {
          en: "What does 'computer vision' enable machines to do?",
          es: "Â¿QuÃ© permite hacer la 'visiÃ³n por computadora' a las mÃ¡quinas?",
          de: "Was ermÃ¶glicht 'Computer Vision' Maschinen zu tun?",
          nl: "Wat stelt 'computer vision' machines in staat om te doen?"
        },
        options: [
          { en: "See and understand images", es: "Ver y entender imÃ¡genes", de: "Bilder sehen und verstehen", nl: "Afbeeldingen zien en begrijpen" },
          { en: "Have better eyesight than humans", es: "Tener mejor vista que los humanos", de: "Bessere Sehkraft als Menschen haben", nl: "Beter zicht hebben dan mensen" },
          { en: "Replace human eyes", es: "Reemplazar los ojos humanos", de: "Menschliche Augen ersetzen", nl: "Menselijke ogen vervangen" },
          { en: "Create holographic displays", es: "Crear pantallas hologrÃ¡ficas", de: "Holographische Displays erstellen", nl: "Holografische displays creÃ«ren" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision is a field of AI that trains computers to interpret and understand visual information from the world, such as identifying objects in photos or videos.",
          es: "La visiÃ³n por computadora es un campo de IA que entrena a las computadoras para interpretar y entender informaciÃ³n visual del mundo, como identificar objetos en fotos o videos.",
          de: "Computer Vision ist ein Bereich der KI, der Computer darauf trainiert, visuelle Informationen aus der Welt zu interpretieren und zu verstehen, wie das Erkennen von Objekten in Fotos oder Videos.",
          nl: "Computer vision is een veld van AI dat computers traint om visuele informatie uit de wereld te interpreteren en begrijpen, zoals het identificeren van objecten in foto's of video's."
        }
      },
      {
        question: {
          en: "What is 'natural language processing' (NLP)?",
          es: "Â¿QuÃ© es el 'procesamiento de lenguaje natural' (PLN)?",
          de: "Was ist 'natÃ¼rliche Sprachverarbeitung' (NLP)?",
          nl: "Wat is 'natural language processing' (NLP)?"
        },
        options: [
          { en: "Teaching computers human languages", es: "EnseÃ±ar idiomas humanos a las computadoras", de: "Computern menschliche Sprachen beibringen", nl: "Computers menselijke talen leren" },
          { en: "Making computers speak louder", es: "Hacer que las computadoras hablen mÃ¡s fuerte", de: "Computer lauter sprechen lassen", nl: "Computers harder laten praten" },
          { en: "Creating new programming languages", es: "Crear nuevos lenguajes de programaciÃ³n", de: "Neue Programmiersprachen erstellen", nl: "Nieuwe programmeertalen creÃ«ren" },
          { en: "Translating between programming languages", es: "Traducir entre lenguajes de programaciÃ³n", de: "Zwischen Programmiersprachen Ã¼bersetzen", nl: "Vertalen tussen programmeertalen" }
        ],
        correct: 0,
        explanation: {
          en: "NLP is the branch of AI that helps computers understand, interpret, and generate human language in a way that is both meaningful and useful.",
          es: "PLN es la rama de IA que ayuda a las computadoras a entender, interpretar y generar lenguaje humano de una manera que sea tanto significativa como Ãºtil.",
          de: "NLP ist der Zweig der KI, der Computern hilft, menschliche Sprache zu verstehen, zu interpretieren und zu generieren auf eine Weise, die sowohl bedeutungsvoll als auch nÃ¼tzlich ist.",
          nl: "NLP is de tak van AI die computers helpt menselijke taal te begrijpen, interpreteren en genereren op een manier die zowel betekenisvol als nuttig is."
        }
      },
      {
        question: {
          en: "What is data preprocessing in machine learning?",
          es: "¿Qué es el preprocesamiento de datos en machine learning?",
          de: "Was ist Datenvorverarbeitung im maschinellen Lernen?",
          nl: "Wat is data preprocessing in machine learning?"
        },
        options: [
          { en: "Cleaning and preparing data before training", es: "Limpiar y preparar datos antes del entrenamiento", de: "Daten vor dem Training reinigen und vorbereiten", nl: "Data schoonmaken en voorbereiden voor training" },
          { en: "Processing data after training", es: "Procesar datos después del entrenamiento", de: "Daten nach dem Training verarbeiten", nl: "Data verwerken na training" },
          { en: "Storing data in a database", es: "Almacenar datos en una base de datos", de: "Daten in einer Datenbank speichern", nl: "Data opslaan in een database" },
          { en: "Deleting all data", es: "Eliminar todos los datos", de: "Alle Daten löschen", nl: "Alle data verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Data preprocessing involves cleaning, transforming, and preparing raw data to make it suitable for machine learning algorithms. This includes handling missing values, removing duplicates, and formatting data correctly.",
          es: "El preprocesamiento de datos involucra limpiar, transformar y preparar datos en bruto para hacerlos adecuados para algoritmos de machine learning. Esto incluye manejar valores faltantes, eliminar duplicados y formatear datos correctamente.",
          de: "Datenvorverarbeitung umfasst das Reinigen, Transformieren und Vorbereiten von Rohdaten, um sie für maschinelle Lernalgorithmen geeignet zu machen. Dies beinhaltet das Behandeln fehlender Werte, das Entfernen von Duplikaten und das korrekte Formatieren der Daten.",
          nl: "Data preprocessing houdt in dat ruwe data wordt schoongemaakt, getransformeerd en voorbereid om geschikt te maken voor machine learning algoritmes. Dit omvat het omgaan met ontbrekende waarden, duplicaten verwijderen en data correct formatteren."
        }
      },
      {
        question: {
          en: "What are missing values in a dataset?",
          es: "¿Qué son los valores faltantes en un conjunto de datos?",
          de: "Was sind fehlende Werte in einem Datensatz?",
          nl: "Wat zijn ontbrekende waarden in een dataset?"
        },
        options: [
          { en: "Data points that are absent or not recorded", es: "Puntos de datos que están ausentes o no registrados", de: "Datenpunkte, die fehlen oder nicht aufgezeichnet wurden", nl: "Datapunten die afwezig zijn of niet opgenomen" },
          { en: "Values that are too small to see", es: "Valores que son demasiado pequeños para ver", de: "Werte, die zu klein sind, um gesehen zu werden", nl: "Waarden die te klein zijn om te zien" },
          { en: "Incorrect data entries", es: "Entradas de datos incorrectas", de: "Falsche Dateneinträge", nl: "Onjuiste data-invoer" },
          { en: "Values that cost money", es: "Valores que cuestan dinero", de: "Werte, die Geld kosten", nl: "Waarden die geld kosten" }
        ],
        correct: 0,
        explanation: {
          en: "Missing values are data points that should be there but are absent from the dataset. They can occur due to data collection errors, equipment failure, or people not answering survey questions. They need to be handled before training models.",
          es: "Los valores faltantes son puntos de datos que deberían estar ahí pero están ausentes del conjunto de datos. Pueden ocurrir debido a errores de recolección de datos, falla del equipo, o personas que no responden preguntas de encuestas. Necesitan ser manejados antes de entrenar modelos.",
          de: "Fehlende Werte sind Datenpunkte, die da sein sollten, aber im Datensatz fehlen. Sie können aufgrund von Datensammlungsfehlern, Geräteausfall oder Menschen, die Umfragefragen nicht beantworten, auftreten. Sie müssen vor dem Training von Modellen behandelt werden.",
          nl: "Ontbrekende waarden zijn datapunten die er zouden moeten zijn maar afwezig zijn in de dataset. Ze kunnen voorkomen door dataververzamelingsfouten, apparatuurstoringen, of mensen die enquêtevragen niet beantwoorden. Ze moeten worden behandeld voor het trainen van modellen."
        }
      },
      {
        question: {
          en: "What is train-test split in machine learning?",
          es: "¿Qué es la división entrenamiento-prueba en machine learning?",
          de: "Was ist Train-Test-Split im maschinellen Lernen?",
          nl: "Wat is train-test split in machine learning?"
        },
        options: [
          { en: "Dividing data into training set and testing set", es: "Dividir datos en conjunto de entrenamiento y conjunto de prueba", de: "Daten in Trainings- und Testsatz aufteilen", nl: "Data verdelen in trainingsset en testset" },
          { en: "Training two different models", es: "Entrenar dos modelos diferentes", de: "Zwei verschiedene Modelle trainieren", nl: "Twee verschillende modellen trainen" },
          { en: "Testing if the computer works", es: "Probar si la computadora funciona", de: "Testen, ob der Computer funktioniert", nl: "Testen of de computer werkt" },
          { en: "Splitting the training time", es: "Dividir el tiempo de entrenamiento", de: "Die Trainingszeit aufteilen", nl: "De trainingstijd verdelen" }
        ],
        correct: 0,
        explanation: {
          en: "Train-test split divides the dataset into two parts: training data (used to teach the model) and test data (used to evaluate how well the model performs on unseen data). Common splits are 80% training, 20% testing.",
          es: "La división entrenamiento-prueba divide el conjunto de datos en dos partes: datos de entrenamiento (usados para enseñar al modelo) y datos de prueba (usados para evaluar qué tan bien funciona el modelo en datos no vistos). Divisiones comunes son 80% entrenamiento, 20% prueba.",
          de: "Train-Test-Split teilt den Datensatz in zwei Teile auf: Trainingsdaten (verwendet, um das Modell zu lehren) und Testdaten (verwendet, um zu bewerten, wie gut das Modell bei ungesehenen Daten funktioniert). Übliche Aufteilungen sind 80% Training, 20% Test.",
          nl: "Train-test split verdeelt de dataset in twee delen: trainingsdata (gebruikt om het model te leren) en testdata (gebruikt om te evalueren hoe goed het model presteert op ongeziene data). Veel voorkomende verdelingen zijn 80% training, 20% testen."
        }
      },
      {
        question: {
          en: "What is data normalization?",
          es: "¿Qué es la normalización de datos?",
          de: "Was ist Datennormalisierung?",
          nl: "Wat is data normalisatie?"
        },
        options: [
          { en: "Scaling data to similar ranges to improve model performance", es: "Escalar datos a rangos similares para mejorar el rendimiento del modelo", de: "Daten auf ähnliche Bereiche skalieren, um die Modellleistung zu verbessern", nl: "Data schalen naar vergelijkbare bereiken om modelprestaties te verbeteren" },
          { en: "Making data normal looking", es: "Hacer que los datos se vean normales", de: "Daten normal aussehen lassen", nl: "Data er normaal uit laten zien" },
          { en: "Removing abnormal data", es: "Eliminar datos anormales", de: "Abnormale Daten entfernen", nl: "Abnormale data verwijderen" },
          { en: "Converting data to normal distribution", es: "Convertir datos a distribución normal", de: "Daten zu Normalverteilung konvertieren", nl: "Data converteren naar normale verdeling" }
        ],
        correct: 0,
        explanation: {
          en: "Data normalization scales numerical features to similar ranges (like 0-1 or -1 to 1) so that no single feature dominates others due to scale differences. This helps algorithms perform better and train faster.",
          es: "La normalización de datos escala características numéricas a rangos similares (como 0-1 o -1 a 1) para que ninguna característica domine a otras debido a diferencias de escala. Esto ayuda a los algoritmos a funcionar mejor y entrenar más rápido.",
          de: "Datennormalisierung skaliert numerische Merkmale auf ähnliche Bereiche (wie 0-1 oder -1 bis 1), damit kein einzelnes Merkmal andere aufgrund von Skalenunterschieden dominiert. Dies hilft Algorithmen, besser zu funktionieren und schneller zu trainieren.",
          nl: "Data normalisatie schaalt numerieke features naar vergelijkbare bereiken (zoals 0-1 of -1 tot 1) zodat geen enkele feature anderen domineert vanwege schaalverschillen. Dit helpt algoritmes beter presteren en sneller trainen."
        }
      },
      {
        question: {
          en: "What is feature engineering?",
          es: "¿Qué es la ingeniería de características?",
          de: "Was ist Feature Engineering?",
          nl: "Wat is feature engineering?"
        },
        options: [
          { en: "Creating and selecting the best input variables for models", es: "Crear y seleccionar las mejores variables de entrada para modelos", de: "Die besten Eingabevariablen für Modelle erstellen und auswählen", nl: "De beste inputvariabelen voor modellen creëren en selecteren" },
          { en: "Building physical features of machines", es: "Construir características físicas de máquinas", de: "Physische Merkmale von Maschinen bauen", nl: "Fysieke kenmerken van machines bouwen" },
          { en: "Engineering software features", es: "Desarrollar características de software", de: "Software-Features entwickeln", nl: "Software features ontwikkelen" },
          { en: "Designing computer hardware", es: "Diseñar hardware de computadora", de: "Computer-Hardware entwerfen", nl: "Computer hardware ontwerpen" }
        ],
        correct: 0,
        explanation: {
          en: "Feature engineering involves creating, transforming, and selecting the most relevant input variables (features) for machine learning models. Good features can significantly improve model performance.",
          es: "La ingeniería de características involucra crear, transformar y seleccionar las variables de entrada (características) más relevantes para modelos de machine learning. Buenas características pueden mejorar significativamente el rendimiento del modelo.",
          de: "Feature Engineering umfasst das Erstellen, Transformieren und Auswählen der relevantesten Eingabevariablen (Features) für maschinelle Lernmodelle. Gute Features können die Modellleistung erheblich verbessern.",
          nl: "Feature engineering houdt in dat de meest relevante inputvariabelen (features) voor machine learning modellen worden gecreëerd, getransformeerd en geselecteerd. Goede features kunnen de modelprestaties aanzienlijk verbeteren."
        }
      },
      {
        question: {
          en: "What is cross-validation?",
          es: "¿Qué es la validación cruzada?",
          de: "Was ist Kreuzvalidierung?",
          nl: "Wat is cross-validation?"
        },
        options: [
          { en: "A technique to evaluate model performance by testing on multiple data splits", es: "Una técnica para evaluar el rendimiento del modelo probando en múltiples divisiones de datos", de: "Eine Technik zur Bewertung der Modellleistung durch Testen auf mehreren Datenaufteilungen", nl: "Een techniek om modelprestaties te evalueren door te testen op meerdere data-opsplitsingen" },
          { en: "Validating data across different computers", es: "Validar datos en diferentes computadoras", de: "Daten über verschiedene Computer validieren", nl: "Data valideren over verschillende computers" },
          { en: "Checking if data is correct", es: "Verificar si los datos son correctos", de: "Prüfen, ob Daten korrekt sind", nl: "Controleren of data correct is" },
          { en: "Crossing out invalid data", es: "Tachar datos inválidos", de: "Ungültige Daten durchstreichen", nl: "Ongeldige data doorstrepen" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-validation repeatedly splits data into training and validation sets to get a more reliable estimate of how well a model will perform. K-fold cross-validation is a common approach that uses k different splits.",
          es: "La validación cruzada divide repetidamente los datos en conjuntos de entrenamiento y validación para obtener una estimación más confiable de qué tan bien funcionará un modelo. La validación cruzada k-fold es un enfoque común que usa k divisiones diferentes.",
          de: "Kreuzvalidierung teilt Daten wiederholt in Trainings- und Validierungssets auf, um eine zuverlässigere Schätzung zu erhalten, wie gut ein Modell funktionieren wird. K-fold Kreuzvalidierung ist ein häufiger Ansatz, der k verschiedene Aufteilungen verwendet.",
          nl: "Cross-validation splitst herhaaldelijk data in trainings- en validatiesets om een betrouwbaardere schatting te krijgen van hoe goed een model zal presteren. K-fold cross-validation is een veelgebruikte benadering die k verschillende opsplitsingen gebruikt."
        }
      },
      {
        question: {
          en: "What is the purpose of a validation set?",
          es: "¿Cuál es el propósito de un conjunto de validación?",
          de: "Was ist der Zweck eines Validierungssets?",
          nl: "Wat is het doel van een validatieset?"
        },
        options: [
          { en: "To tune model parameters and select the best model during training", es: "Para ajustar parámetros del modelo y seleccionar el mejor modelo durante el entrenamiento", de: "Um Modellparameter zu optimieren und das beste Modell während des Trainings auszuwählen", nl: "Om modelparameters af te stellen en het beste model te selecteren tijdens training" },
          { en: "To validate that the computer works", es: "Para validar que la computadora funciona", de: "Um zu validieren, dass der Computer funktioniert", nl: "Om te valideren dat de computer werkt" },
          { en: "To check data for errors", es: "Para verificar errores en los datos", de: "Um Daten auf Fehler zu prüfen", nl: "Om data te controleren op fouten" },
          { en: "To store validation certificates", es: "Para almacenar certificados de validación", de: "Um Validierungszertifikate zu speichern", nl: "Om validatiecertificaten op te slaan" }
        ],
        correct: 0,
        explanation: {
          en: "A validation set is used during model development to tune hyperparameters and select the best performing model. It's separate from both training and test sets to avoid overfitting.",
          es: "Un conjunto de validación se usa durante el desarrollo del modelo para ajustar hiperparámetros y seleccionar el modelo con mejor rendimiento. Es separado tanto de los conjuntos de entrenamiento como de prueba para evitar overfitting.",
          de: "Ein Validierungsset wird während der Modellentwicklung verwendet, um Hyperparameter zu optimieren und das beste Modell auszuwählen. Es ist sowohl von Trainings- als auch von Testsets getrennt, um Overfitting zu vermeiden.",
          nl: "Een validatieset wordt gebruikt tijdens modelontwikkeling om hyperparameters af te stellen en het best presterende model te selecteren. Het is gescheiden van zowel trainings- als testsets om overfitting te voorkomen."
        }
      },
      {
        question: {
          en: "What is data augmentation?",
          es: "¿Qué es el aumento de datos?",
          de: "Was ist Datenaugmentierung?",
          nl: "Wat is data augmentation?"
        },
        options: [
          { en: "Creating more training examples by modifying existing data", es: "Crear más ejemplos de entrenamiento modificando datos existentes", de: "Mehr Trainingsbeispiele durch Modifikation vorhandener Daten erstellen", nl: "Meer trainingsvoorbeelden creëren door bestaande data te modificeren" },
          { en: "Adding more computers to process data", es: "Agregar más computadoras para procesar datos", de: "Mehr Computer zum Verarbeiten von Daten hinzufügen", nl: "Meer computers toevoegen om data te verwerken" },
          { en: "Increasing data storage capacity", es: "Aumentar la capacidad de almacenamiento de datos", de: "Datenspeicherkapazität erhöhen", nl: "Dataopslagcapaciteit verhogen" },
          { en: "Making data files larger", es: "Hacer archivos de datos más grandes", de: "Datendateien größer machen", nl: "Databestanden groter maken" }
        ],
        correct: 0,
        explanation: {
          en: "Data augmentation artificially increases the size of training datasets by creating modified versions of existing data. For images, this might include rotation, flipping, or changing brightness to help models generalize better.",
          es: "El aumento de datos aumenta artificialmente el tamaño de conjuntos de datos de entrenamiento creando versiones modificadas de datos existentes. Para imágenes, esto podría incluir rotación, volteo o cambio de brillo para ayudar a los modelos a generalizar mejor.",
          de: "Datenaugmentierung vergrößert künstlich die Größe von Trainingsdatensätzen durch Erstellen modifizierter Versionen vorhandener Daten. Bei Bildern könnte dies Rotation, Spiegelung oder Helligkeitsänderung umfassen, um Modellen zu helfen, besser zu verallgemeinern.",
          nl: "Data augmentation vergroot kunstmatig de grootte van trainingsdatasets door gemodificeerde versies van bestaande data te creëren. Voor afbeeldingen kan dit rotatie, omdraaien of helderheid veranderen omvatten om modellen te helpen beter te generaliseren."
        }
      },
      {
        question: {
          en: "What are categorical variables?",
          es: "¿Qué son las variables categóricas?",
          de: "Was sind kategorische Variablen?",
          nl: "Wat zijn categorische variabelen?"
        },
        options: [
          { en: "Variables that represent categories or groups", es: "Variables que representan categorías o grupos", de: "Variablen, die Kategorien oder Gruppen darstellen", nl: "Variabelen die categorieën of groepen vertegenwoordigen" },
          { en: "Variables that are very important", es: "Variables que son muy importantes", de: "Variablen, die sehr wichtig sind", nl: "Variabelen die heel belangrijk zijn" },
          { en: "Variables stored in categories folder", es: "Variables almacenadas en carpeta de categorías", de: "Variablen, die im Kategorienordner gespeichert sind", nl: "Variabelen opgeslagen in categorieënmap" },
          { en: "Variables that change categories", es: "Variables que cambian categorías", de: "Variablen, die Kategorien ändern", nl: "Variabelen die categorieën veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Categorical variables represent distinct categories or groups without numerical meaning, like colors (red, blue, green) or departments (sales, marketing, engineering). They often need special encoding for machine learning.",
          es: "Las variables categóricas representan categorías o grupos distintos sin significado numérico, como colores (rojo, azul, verde) o departamentos (ventas, marketing, ingeniería). A menudo necesitan codificación especial para machine learning.",
          de: "Kategorische Variablen repräsentieren unterschiedliche Kategorien oder Gruppen ohne numerische Bedeutung, wie Farben (rot, blau, grün) oder Abteilungen (Verkauf, Marketing, Technik). Sie benötigen oft spezielle Kodierung für maschinelles Lernen.",
          nl: "Categorische variabelen vertegenwoordigen verschillende categorieën of groepen zonder numerieke betekenis, zoals kleuren (rood, blauw, groen) of afdelingen (verkoop, marketing, engineering). Ze hebben vaak speciale codering nodig voor machine learning."
        }
      },
      {
        question: {
          en: "What is one-hot encoding?",
          es: "¿Qué es la codificación one-hot?",
          de: "Was ist One-Hot-Kodierung?",
          nl: "Wat is one-hot encoding?"
        },
        options: [
          { en: "Converting categorical variables into binary columns", es: "Convertir variables categóricas en columnas binarias", de: "Kategorische Variablen in binäre Spalten konvertieren", nl: "Categorische variabelen omzetten naar binaire kolommen" },
          { en: "Encoding data when computer is hot", es: "Codificar datos cuando la computadora está caliente", de: "Daten kodieren, wenn der Computer heiß ist", nl: "Data coderen wanneer de computer heet is" },
          { en: "Using only one encoding method", es: "Usar solo un método de codificación", de: "Nur eine Kodierungsmethode verwenden", nl: "Slechts één coderingsmethode gebruiken" },
          { en: "Encoding one variable at a time", es: "Codificar una variable a la vez", de: "Eine Variable nach der anderen kodieren", nl: "Één variabele tegelijk coderen" }
        ],
        correct: 0,
        explanation: {
          en: "One-hot encoding converts categorical variables into binary columns (0s and 1s). For example, colors 'red', 'blue', 'green' become three columns where each row has exactly one '1' indicating the color.",
          es: "La codificación one-hot convierte variables categóricas en columnas binarias (0s y 1s). Por ejemplo, colores 'rojo', 'azul', 'verde' se convierten en tres columnas donde cada fila tiene exactamente un '1' indicando el color.",
          de: "One-Hot-Kodierung konvertiert kategorische Variablen in binäre Spalten (0en und 1en). Zum Beispiel werden Farben 'rot', 'blau', 'grün' zu drei Spalten, wo jede Zeile genau eine '1' hat, die die Farbe anzeigt.",
          nl: "One-hot encoding zet categorische variabelen om naar binaire kolommen (0en en 1en). Bijvoorbeeld, kleuren 'rood', 'blauw', 'groen' worden drie kolommen waarbij elke rij precies één '1' heeft die de kleur aangeeft."
        }
      },
      {
        question: {
          en: "What is the purpose of data splitting in machine learning?",
          es: "¿Cuál es el propósito de dividir datos en machine learning?",
          de: "Was ist der Zweck der Datenaufteilung im maschinellen Lernen?",
          nl: "Wat is het doel van data splitting in machine learning?"
        },
        options: [
          { en: "To ensure unbiased evaluation of model performance", es: "Para asegurar evaluación imparcial del rendimiento del modelo", de: "Um eine unvoreingenommene Bewertung der Modellleistung sicherzustellen", nl: "Om onbevooroordeelde evaluatie van modelprestaties te verzekeren" },
          { en: "To make data processing faster", es: "Para hacer el procesamiento de datos más rápido", de: "Um die Datenverarbeitung schneller zu machen", nl: "Om dataverwerking sneller te maken" },
          { en: "To save storage space", es: "Para ahorrar espacio de almacenamiento", de: "Um Speicherplatz zu sparen", nl: "Om opslagruimte te besparen" },
          { en: "To organize data better", es: "Para organizar mejor los datos", de: "Um Daten besser zu organisieren", nl: "Om data beter te organiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Data splitting separates data into different sets (train/validation/test) to evaluate how well models will perform on new, unseen data. This prevents overfitting and gives realistic performance estimates.",
          es: "La división de datos separa los datos en diferentes conjuntos (entrenamiento/validación/prueba) para evaluar qué tan bien funcionarán los modelos en datos nuevos y no vistos. Esto previene overfitting y da estimaciones realistas de rendimiento.",
          de: "Datenaufteilung trennt Daten in verschiedene Sets (Train/Validierung/Test), um zu bewerten, wie gut Modelle bei neuen, ungesehenen Daten funktionieren werden. Dies verhindert Overfitting und gibt realistische Leistungsschätzungen.",
          nl: "Data splitting scheidt data in verschillende sets (train/validatie/test) om te evalueren hoe goed modellen zullen presteren op nieuwe, ongeziene data. Dit voorkomt overfitting en geeft realistische prestatieschattingen."
        }
      },
      {
        question: {
          en: "What is an outlier in data?",
          es: "¿Qué es un valor atípico en los datos?",
          de: "Was ist ein Ausreißer in Daten?",
          nl: "Wat is een outlier in data?"
        },
        options: [
          { en: "A data point that is significantly different from other pts", es: "Un punto de datos que es significativamente diferente de otros puntos", de: "Ein Datenpunkt, der sich erheblich von anderen Punkten unterscheidet", nl: "Een datapunt dat significant verschilt van andere punten" },
          { en: "Data that lies outside the computer", es: "Datos que están fuera de la computadora", de: "Daten, die außerhalb des Computers liegen", nl: "Data die buiten de computer ligt" },
          { en: "The first point in a dataset", es: "El primer punto en un conjunto de datos", de: "Der erste Punkt in einem Datensatz", nl: "Het eerste punt in een dataset" },
          { en: "Data that is perfectly normal", es: "Datos que son perfectamente normales", de: "Daten, die völlig normal sind", nl: "Data die perfect normaal is" }
        ],
        correct: 0,
        explanation: {
          en: "An outlier is a data point that differs significantly from other observations. It could be due to measurement errors, data entry mistakes, or genuine extreme values. Outliers can affect model performance and may need special handling.",
          es: "Un valor atípico es un punto de datos que difiere significativamente de otras observaciones. Podría deberse a errores de medición, errores de entrada de datos, o valores extremos genuinos. Los valores atípicos pueden afectar el rendimiento del modelo y pueden necesitar manejo especial.",
          de: "Ein Ausreißer ist ein Datenpunkt, der sich erheblich von anderen Beobachtungen unterscheidet. Es könnte auf Messfehler, Dateneingabefehler oder echte Extremwerte zurückzuführen sein. Ausreißer können die Modellleistung beeinträchtigen und benötigen möglicherweise spezielle Behandlung.",
          nl: "Een outlier is een datapunt dat significant verschilt van andere observaties. Het kan komen door meetfouten, data-invoerfouten, of echte extreme waarden. Outliers kunnen modelprestaties beïnvloeden en hebben mogelijk speciale behandeling nodig."
        }
      },
      {
        question: {
          en: "What is the difference between structured and unstructured data?",
          es: "¿Cuál es la diferencia entre datos estructurados y no estructurados?",
          de: "Was ist der Unterschied zwischen strukturierten und unstrukturierten Daten?",
          nl: "Wat is het verschil tussen gestructureerde en ongestructureerde data?"
        },
        options: [
          { en: "Structured data is organized in tables, unstructured data has no fixed format", es: "Datos estructurados están organizados en tablas, datos no estructurados no tienen formato fijo", de: "Strukturierte Daten sind in Tabellen organisiert, unstrukturierte Daten haben kein festes Format", nl: "Gestructureerde data is georganiseerd in tabellen, ongestructureerde data heeft geen vast formaat" },
          { en: "Structured data is newer than unstructured data", es: "Datos estructurados son más nuevos que datos no estructurados", de: "Strukturierte Daten sind neuer als unstrukturierte Daten", nl: "Gestructureerde data is nieuwer dan ongestructureerde data" },
          { en: "Structured data is always numerical", es: "Datos estructurados son siempre numéricos", de: "Strukturierte Daten sind immer numerisch", nl: "Gestructureerde data is altijd numeriek" },
          { en: "There is no difference between them", es: "No hay diferencia entre ellos", de: "Es gibt keinen Unterschied zwischen ihnen", nl: "Er is geen verschil tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "Structured data is organized in a fixed format like databases or spreadsheets with rows and columns. Unstructured data includes text, images, videos, and audio without predefined structure.",
          es: "Los datos estructurados están organizados en un formato fijo como bases de datos o hojas de cálculo con filas y columnas. Los datos no estructurados incluyen texto, imágenes, videos y audio sin estructura predefinida.",
          de: "Strukturierte Daten sind in einem festen Format wie Datenbanken oder Tabellenkalkulationen mit Zeilen und Spalten organisiert. Unstrukturierte Daten umfassen Text, Bilder, Videos und Audio ohne vordefinierte Struktur.",
          nl: "Gestructureerde data is georganiseerd in een vast formaat zoals databases of spreadsheets met rijen en kolommen. Ongestructureerde data omvat tekst, afbeeldingen, video's en audio zonder voorgedefinieerde structuur."
        }
      },
      {
        question: {
          en: "What is the purpose of data visualization in machine learning?",
          es: "¿Cuál es el propósito de la visualización de datos en machine learning?",
          de: "Was ist der Zweck der Datenvisualisierung im maschinellen Lernen?",
          nl: "Wat is het doel van datavisualisatie in machine learning?"
        },
        options: [
          { en: "To understand patterns and relationships in data", es: "Para entender patrones y relaciones en los datos", de: "Um Muster und Beziehungen in Daten zu verstehen", nl: "Om patronen en relaties in data te begrijpen" },
          { en: "To make data look pretty", es: "Para hacer que los datos se vean bonitos", de: "Um Daten hübsch aussehen zu lassen", nl: "Om data er mooi uit te laten zien" },
          { en: "To slow down data processing", es: "Para ralentizar el procesamiento de datos", de: "Um die Datenverarbeitung zu verlangsamen", nl: "Om dataverwerking te vertragen" },
          { en: "To hide sensitive information", es: "Para ocultar información sensible", de: "Um sensible Informationen zu verbergen", nl: "Om gevoelige informatie te verbergen" }
        ],
        correct: 0,
        explanation: {
          en: "Data visualization helps identify patterns, trends, outliers, and relationships in data that might not be obvious from looking at raw numbers. It's crucial for exploratory data analysis and communicating insights.",
          es: "La visualización de datos ayuda a identificar patrones, tendencias, valores atípicos y relaciones en datos que podrían no ser obvios al mirar números en bruto. Es crucial para análisis exploratorio de datos y comunicar insights.",
          de: "Datenvisualisierung hilft dabei, Muster, Trends, Ausreißer und Beziehungen in Daten zu identifizieren, die beim Betrachten roher Zahlen möglicherweise nicht offensichtlich sind. Sie ist entscheidend für explorative Datenanalyse und Kommunikation von Erkenntnissen.",
          nl: "Datavisualisatie helpt patronen, trends, outliers en relaties in data te identificeren die misschien niet duidelijk zijn bij het bekijken van ruwe getallen. Het is cruciaal voor verkennende data-analyse en het communiceren van inzichten."
        }
      },
      {
        question: {
          en: "What is feature engineering and why is it important in machine learning?",
          es: "¿Qué es la ingeniería de características y por qué es importante en machine learning?",
          de: "Was ist Feature Engineering und warum ist es wichtig im maschinellen Lernen?",
          nl: "Wat is feature engineering en waarom is het belangrijk in machine learning?"
        },
        options: [
          { en: "The process of selecting, modifying, or creating features from raw data to improve model performance", es: "El proceso de seleccionar, modificar o crear características de datos en bruto para mejorar el rendimiento del modelo", de: "Der Prozess der Auswahl, Modifikation oder Erstellung von Features aus Rohdaten zur Verbesserung der Modellleistung", nl: "Het proces van selecteren, modificeren of creëren van features uit ruwe data om modelprestaties te verbeteren" },
          { en: "Building physical features for computers", es: "Construir características físicas para computadoras", de: "Physische Features für Computer bauen", nl: "Fysieke kenmerken bouwen voor computers" },
          { en: "Engineering software features only", es: "Ingeniar solo características de software", de: "Nur Software-Features entwickeln", nl: "Alleen software features ontwikkelen" },
          { en: "Testing feature functionality", es: "Probar funcionalidad de características", de: "Feature-Funktionalität testen", nl: "Feature functionaliteit testen" }
        ],
        correct: 0,
        explanation: {
          en: "Feature engineering is one of the most important steps in machine learning. It involves transforming raw data into meaningful features that better represent the underlying patterns, directly impacting model accuracy and performance.",
          es: "La ingeniería de características es uno de los pasos más importantes en machine learning. Involucra transformar datos en bruto en características significativas que representan mejor los patrones subyacentes, impactando directamente la precisión y rendimiento del modelo.",
          de: "Feature Engineering ist einer der wichtigsten Schritte im maschinellen Lernen. Es beinhaltet die Transformation von Rohdaten in bedeutungsvolle Features, die die zugrundeliegenden Muster besser repräsentieren und direkt die Modellgenauigkeit und -leistung beeinflussen.",
          nl: "Feature engineering is een van de belangrijkste stappen in machine learning. Het behelst het transformeren van ruwe data naar betekenisvolle features die onderliggende patronen beter representeren, wat direct de modelnauwkeurigheid en prestaties beïnvloedt."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
