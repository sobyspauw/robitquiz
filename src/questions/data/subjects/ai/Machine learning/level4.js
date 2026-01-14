// AI Machine Learning Quiz - Level 4: Advanced Applications
(function() {
  const level4 = {
    name: {
      en: "ML Advanced Applications",
      es: "Aplicaciones Avanzadas de ML",
      de: "Erweiterte ML-Anwendungen",
      nl: "Geavanceerde ML Toepassingen"
    },
    questions: [
      {
        question: {
          en: "What is the difference between classification and regression in machine learning?",
          es: "Â¿CuÃ¡l es la diferencia entre clasificaciÃ³n y regresiÃ³n en machine learning?",
          de: "Was ist der Unterschied zwischen Klassifikation und Regression im maschinellen Lernen?",
          nl: "Wat is het verschil tussen classificatie en regressie in machine learning?"
        },
        options: [
          { en: "Classification predicts categories, regression predicts continuous values", es: "La clasificaciÃ³n predice categorÃ­as, la regresiÃ³n predice valores continuos", de: "Klassifikation sagt Kategorien vorher, Regression sagt kontinuierliche Werte vorher", nl: "Classificatie voorspelt categorieÃ«n, regressie voorspelt continue waarden" },
          { en: "Classification is faster than regression", es: "La clasificaciÃ³n es mÃ¡s rÃ¡pida que la regresiÃ³n", de: "Klassifikation ist schneller als Regression", nl: "Classificatie is sneller dan regressie" },
          { en: "Regression uses more data than classification", es: "La regresiÃ³n usa mÃ¡s datos que la clasificaciÃ³n", de: "Regression verwendet mehr Daten als Klassifikation", nl: "Regressie gebruikt meer data dan classificatie" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Het zijn hetzelfde" }
        ],
        correct: 0,
        explanation: {
          en: "Classification algorithms predict discrete categories or classes (like spam/not spam), while regression algorithms predict continuous numerical values (like house prices or temperature).",
          es: "Los algoritmos de clasificaciÃ³n predicen categorÃ­as o clases discretas (como spam/no spam), mientras que los algoritmos de regresiÃ³n predicen valores numÃ©ricos continuos (como precios de casas o temperatura).",
          de: "Klassifikationsalgorithmen sagen diskrete Kategorien oder Klassen vorher (wie Spam/kein Spam), wÃ¤hrend Regressionsalgorithmen kontinuierliche numerische Werte vorhersagen (wie Hauspreise oder Temperatur).",
          nl: "Classificatie algoritmes voorspellen discrete categorieÃ«n of klassen (zoals spam/geen spam), terwijl regressie algoritmes continue numerieke waarden voorspellen (zoals huizenprijzen of temperatuur)."
        }
      },
      {
        question: {
          en: "What is cross-validation used for in machine learning?",
          es: "Â¿Para quÃ© se usa la validaciÃ³n cruzada en machine learning?",
          de: "WofÃ¼r wird Kreuzvalidierung im maschinellen Lernen verwendet?",
          nl: "Waarvoor wordt cross-validatie gebruikt in machine learning?"
        },
        options: [
          { en: "To validate user passwords", es: "Para validar contraseÃ±as de usuario", de: "Um BenutzerpasswÃ¶rter zu validieren", nl: "Om gebruikerswachtwoorden te valideren" },
          { en: "To test model performance on different data splits", es: "Para probar el rendimiento del modelo en diferentes divisiones de datos", de: "Um die Modellleistung bei verschiedenen Datenaufteilungen zu testen", nl: "Om modelprestaties te testen op verschillende data splits" },
          { en: "To cross-reference different algorithms", es: "Para hacer referencias cruzadas de diferentes algoritmos", de: "Um verschiedene Algorithmen zu kreuzen", nl: "Om verschillende algoritmes te kruisrefereren" },
          { en: "To validate training data quality", es: "Para validar la calidad de los datos de entrenamiento", de: "Um die QualitÃ¤t der Trainingsdaten zu validieren", nl: "Om de kwaliteit van trainingsdata te valideren" }
        ],
        correct: 1,
        explanation: {
          en: "Cross-validation splits data into multiple folds, training on some and testing on others repeatedly, to get a more robust estimate of model performance and reduce overfitting to a specific train-test split.",
          es: "La validaciÃ³n cruzada divide los datos en mÃºltiples pliegues, entrenando en algunos y probando en otros repetidamente, para obtener una estimaciÃ³n mÃ¡s robusta del rendimiento del modelo y reducir el sobreajuste a una divisiÃ³n especÃ­fica de entrenamiento-prueba.",
          de: "Kreuzvalidierung teilt Daten in mehrere Falten auf, trainiert wiederholt auf einigen und testet auf anderen, um eine robustere SchÃ¤tzung der Modellleistung zu erhalten und Overfitting auf eine spezifische Train-Test-Aufteilung zu reduzieren.",
          nl: "Cross-validatie splitst data in meerdere vouwen, traint herhaaldelijk op sommige en test op andere, om een robuustere schatting van modelprestaties te krijgen en overfitting op een specifieke train-test split te verminderen."
        }
      },
      {
        question: {
          en: "What is feature engineering in machine learning?",
          es: "Â¿QuÃ© es la ingenierÃ­a de caracterÃ­sticas en machine learning?",
          de: "Was ist Feature Engineering im maschinellen Lernen?",
          nl: "Wat is feature engineering in machine learning?"
        },
        options: [
          { en: "Building physical features of computers", es: "Construir caracterÃ­sticas fÃ­sicas de computadoras", de: "Physikalische Eigenschaften von Computern bauen", nl: "Fysieke kenmerken van computers bouwen" },
          { en: "Creating and selecting relevant input variables", es: "Crear y seleccionar variables de entrada relevantes", de: "Relevante Eingabevariablen erstellen und auswÃ¤hlen", nl: "Relevante input variabelen creÃ«ren en selecteren" },
          { en: "Engineering software features", es: "DiseÃ±ar caracterÃ­sticas de software", de: "Software-Features entwickeln", nl: "Software features ontwikkelen" },
          { en: "Testing hardware compatibility", es: "Probar compatibilidad de hardware", de: "Hardware-KompatibilitÃ¤t testen", nl: "Hardware compatibiliteit testen" }
        ],
        correct: 1,
        explanation: {
          en: "Feature engineering is the process of selecting, modifying, or creating input variables (features) from raw data to improve machine learning model performance, often requiring domain expertise.",
          es: "La ingenierÃ­a de caracterÃ­sticas es el proceso de seleccionar, modificar o crear variables de entrada (caracterÃ­sticas) a partir de datos sin procesar para mejorar el rendimiento del modelo de machine learning, a menudo requiriendo experiencia en el dominio.",
          de: "Feature Engineering ist der Prozess der Auswahl, Modifikation oder Erstellung von Eingabevariablen (Features) aus Rohdaten zur Verbesserung der Leistung von maschinellen Lernmodellen, oft erfordert es DomÃ¤nenexpertise.",
          nl: "Feature engineering is het proces van selecteren, modificeren of creÃ«ren van input variabelen (features) uit ruwe data om machine learning modelprestaties te verbeteren, vaak vereist het domeinexpertise."
        }
      },
      {
        question: {
          en: "What is the purpose of a confusion matrix?",
          es: "Â¿CuÃ¡l es el propÃ³sito de una matriz de confusiÃ³n?",
          de: "Was ist der Zweck einer Konfusionsmatrix?",
          nl: "Wat is het doel van een confusion matrix?"
        },
        options: [
          { en: "To confuse the machine learning algorithm", es: "Para confundir el algoritmo de machine learning", de: "Um den maschinellen Lernalgorithmus zu verwirren", nl: "Om het machine learning algoritme te verwarren" },
          { en: "To visualize classification model performance", es: "Para visualizar el rendimiento del modelo de clasificaciÃ³n", de: "Um die Leistung des Klassifikationsmodells zu visualisieren", nl: "Om classificatie modelprestaties te visualiseren" },
          { en: "To store training data", es: "Para almacenar datos de entrenamiento", de: "Um Trainingsdaten zu speichern", nl: "Om trainingsdata op te slaan" },
          { en: "To generate random numbers", es: "Para generar nÃºmeros aleatorios", de: "Um Zufallszahlen zu generieren", nl: "Om willekeurige nummers te genereren" }
        ],
        correct: 1,
        explanation: {
          en: "A confusion matrix is a table that shows true vs predicted classifications, helping evaluate model accuracy, precision, recall, and identify which classes are being confused with each other.",
          es: "Una matriz de confusiÃ³n es una tabla que muestra clasificaciones verdaderas vs predichas, ayudando a evaluar la precisiÃ³n del modelo, precisiÃ³n, recall, e identificar quÃ© clases se estÃ¡n confundiendo entre sÃ­.",
          de: "Eine Konfusionsmatrix ist eine Tabelle, die wahre vs vorhergesagte Klassifikationen zeigt, hilft bei der Bewertung von Modellgenauigkeit, PrÃ¤zision, Recall und identifiziert, welche Klassen miteinander verwechselt werden.",
          nl: "Een confusion matrix is een tabel die ware vs voorspelde classificaties toont, helpt bij het evalueren van modelnauwkeurigheid, precisie, recall en identificeert welke klassen met elkaar worden verward."
        }
      },
      {
        question: {
          en: "What is ensemble learning in machine learning?",
          es: "Â¿QuÃ© es el aprendizaje por conjuntos en machine learning?",
          de: "Was ist Ensemble Learning im maschinellen Lernen?",
          nl: "Wat is ensemble learning in machine learning?"
        },
        options: [
          { en: "Learning music with multiple instruments", es: "Aprender mÃºsica con mÃºltiples instrumentos", de: "Musik mit mehreren Instrumenten lernen", nl: "Muziek leren met meerdere instrumenten" },
          { en: "Combining multiple models to improve performance", es: "Combinar mÃºltiples modelos para mejorar el rendimiento", de: "Mehrere Modelle kombinieren um die Leistung zu verbessern", nl: "Meerdere modellen combineren om prestaties te verbeteren" },
          { en: "Training models simultaneously", es: "Entrenar modelos simultÃ¡neamente", de: "Modelle gleichzeitig trainieren", nl: "Modellen gelijktijdig trainen" },
          { en: "Using cloud computing", es: "Usar computaciÃ³n en la nube", de: "Cloud Computing verwenden", nl: "Cloud computing gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Ensemble learning combines predictions from multiple machine learning models to create a stronger predictor than any individual model, using techniques like voting, averaging, or stacking.",
          es: "El aprendizaje por conjuntos combina predicciones de mÃºltiples modelos de machine learning para crear un predictor mÃ¡s fuerte que cualquier modelo individual, usando tÃ©cnicas como votaciÃ³n, promediado o apilamiento.",
          de: "Ensemble Learning kombiniert Vorhersagen von mehreren maschinellen Lernmodellen, um einen stÃ¤rkeren PrÃ¤diktor zu schaffen als jedes einzelne Modell, mit Techniken wie Abstimmung, Mittelwertbildung oder Stapelung.",
          nl: "Ensemble learning combineert voorspellingen van meerdere machine learning modellen om een sterkere voorspeller te creÃ«ren dan elk individueel model, met technieken zoals stemmen, middelen of stapelen."
        }
      },
      {
        question: {
          en: "What is linear regression used for?",
          es: "¿Para qué se usa la regresión lineal?",
          de: "Wofür wird lineare Regression verwendet?",
          nl: "Waarvoor wordt lineaire regressie gebruikt?"
        },
        options: [
          { en: "Predicting continuous numerical values using a straight line relationship", es: "Predecir valores numéricos continuos usando una relación de línea recta", de: "Kontinuierliche numerische Werte mit einer Geraden-Beziehung vorhersagen", nl: "Continue numerieke waarden voorspellen met een rechte lijn relatie" },
          { en: "Drawing straight lines on graphs", es: "Dibujar líneas rectas en gráficos", de: "Gerade Linien auf Diagramme zeichnen", nl: "Rechte lijnen tekenen op grafieken" },
          { en: "Classifying data into categories", es: "Clasificar datos en categorías", de: "Daten in Kategorien klassifizieren", nl: "Data classificeren in categorieën" },
          { en: "Creating linear equations for math", es: "Crear ecuaciones lineales para matemáticas", de: "Lineare Gleichungen für Mathematik erstellen", nl: "Lineaire vergelijkingen maken voor wiskunde" }
        ],
        correct: 0,
        explanation: {
          en: "Linear regression models the relationship between variables using a straight line to predict continuous outcomes like prices, temperatures, or sales based on input features.",
          es: "La regresión lineal modela la relación entre variables usando una línea recta para predecir resultados continuos como precios, temperaturas o ventas basados en características de entrada.",
          de: "Lineare Regression modelliert die Beziehung zwischen Variablen mit einer Geraden, um kontinuierliche Ergebnisse wie Preise, Temperaturen oder Verkäufe basierend auf Eingabemerkmalen vorherzusagen.",
          nl: "Lineaire regressie modelleert de relatie tussen variabelen met een rechte lijn om continue uitkomsten te voorspellen zoals prijzen, temperaturen of verkopen gebaseerd op input features."
        }
      },
      {
        question: {
          en: "What is a decision tree in machine learning?",
          es: "¿Qué es un árbol de decisión en machine learning?",
          de: "Was ist ein Entscheidungsbaum im maschinellen Lernen?",
          nl: "Wat is een decision tree in machine learning?"
        },
        options: [
          { en: "A tree-like model that makes decisions by asking yes/no questions about features", es: "Un modelo tipo árbol que toma decisiones haciendo preguntas sí/no sobre características", de: "Ein baumartiges Modell das Entscheidungen trifft durch Ja/Nein-Fragen über Merkmale", nl: "Een boom-achtig model dat beslissingen neemt door ja/nee vragen te stellen over features" },
          { en: "A real tree used for making decisions", es: "Un árbol real usado para tomar decisiones", de: "Ein echter Baum für Entscheidungsfindung", nl: "Een echte boom gebruikt voor beslissingen nemen" },
          { en: "A family tree of algorithms", es: "Un árbol genealógico de algoritmos", de: "Ein Stammbaum von Algorithmen", nl: "Een stamboom van algoritmes" },
          { en: "A tree structure for storing data", es: "Una estructura de árbol para almacenar datos", de: "Eine Baumstruktur zum Speichern von Daten", nl: "Een boomstructuur voor het opslaan van data" }
        ],
        correct: 0,
        explanation: {
          en: "Decision trees split data by asking binary questions about features, creating a tree structure where each branch represents a decision path leading to a prediction or classification.",
          es: "Los árboles de decisión dividen datos haciendo preguntas binarias sobre características, creando una estructura de árbol donde cada rama representa un camino de decisión que lleva a una predicción o clasificación.",
          de: "Entscheidungsbäume teilen Daten durch binäre Fragen über Merkmale auf, erstellen eine Baumstruktur wo jeder Ast einen Entscheidungspfad darstellt der zu einer Vorhersage oder Klassifikation führt.",
          nl: "Decision trees splitsen data door binaire vragen te stellen over features, creëren een boomstructuur waarbij elke tak een beslissingspad vertegenwoordigt dat leidt tot een voorspelling of classificatie."
        }
      },
      {
        question: {
          en: "What is k-means clustering?",
          es: "¿Qué es el clustering k-means?",
          de: "Was ist k-means Clustering?",
          nl: "Wat is k-means clustering?"
        },
        options: [
          { en: "An algorithm that groups data into k clusters based on similarity", es: "Un algoritmo que agrupa datos en k clústeres basado en similitud", de: "Ein Algorithmus der Daten in k Cluster basierend auf Ähnlichkeit gruppiert", nl: "Een algoritme dat data groepeert in k clusters gebaseerd op gelijkenis" },
          { en: "Calculating the mean of k numbers", es: "Calcular la media de k números", de: "Den Mittelwert von k Zahlen berechnen", nl: "Het gemiddelde van k getallen berekenen" },
          { en: "A method to find k solutions", es: "Un método para encontrar k soluciones", de: "Eine Methode um k Lösungen zu finden", nl: "Een methode om k oplossingen te vinden" },
          { en: "Dividing data into exactly k equal parts", es: "Dividir datos en exactamente k partes iguales", de: "Daten in genau k gleiche Teile aufteilen", nl: "Data verdelen in precies k gelijke delen" }
        ],
        correct: 0,
        explanation: {
          en: "K-means clustering partitions data into k clusters by finding cluster centers and assigning each data point to the nearest center, minimizing within-cluster distances.",
          es: "El clustering k-means particiona datos en k clústeres encontrando centros de clúster y asignando cada punto de datos al centro más cercano, minimizando distancias dentro del clúster.",
          de: "K-means Clustering teilt Daten in k Cluster auf durch Finden von Clusterzentren und Zuweisen jedes Datenpunkts zum nächsten Zentrum, minimiert Abstände innerhalb der Cluster.",
          nl: "K-means clustering verdeelt data in k clusters door clustercentra te vinden en elk datapunt toe te wijzen aan het dichtstbijzijnde centrum, minimaliseert afstanden binnen clusters."
        }
      },
      {
        question: {
          en: "What is logistic regression used for?",
          es: "¿Para qué se usa la regresión logística?",
          de: "Wofür wird logistische Regression verwendet?",
          nl: "Waarvoor wordt logistische regressie gebruikt?"
        },
        options: [
          { en: "Binary classification problems to predict probabilities", es: "Problemas de clasificación binaria para predecir probabilidades", de: "Binäre Klassifikationsprobleme um Wahrscheinlichkeiten vorherzusagen", nl: "Binaire classificatieproblemen om kansen te voorspellen" },
          { en: "Organizing logistics and transportation", es: "Organizar logística y transporte", de: "Logistik und Transport organisieren", nl: "Logistiek en transport organiseren" },
          { en: "Predicting continuous values like linear regression", es: "Predecir valores continuos como regresión lineal", de: "Kontinuierliche Werte wie lineare Regression vorhersagen", nl: "Continue waarden voorspellen zoals lineaire regressie" },
          { en: "Creating logical reasoning systems", es: "Crear sistemas de razonamiento lógico", de: "Logische Argumentationssysteme erstellen", nl: "Logische redeneeersystemen creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Logistic regression predicts the probability of binary outcomes (yes/no, spam/not spam) using a logistic function that outputs values between 0 and 1.",
          es: "La regresión logística predice la probabilidad de resultados binarios (sí/no, spam/no spam) usando una función logística que produce valores entre 0 y 1.",
          de: "Logistische Regression sagt die Wahrscheinlichkeit binärer Ergebnisse (ja/nein, spam/kein spam) mit einer logistischen Funktion vorher die Werte zwischen 0 und 1 ausgibt.",
          nl: "Logistische regressie voorspelt de kans op binaire uitkomsten (ja/nee, spam/geen spam) met een logistische functie die waarden tussen 0 en 1 uitvoert."
        }
      },
      {
        question: {
          en: "What is the k-nearest neighbors (KNN) algorithm?",
          es: "¿Qué es el algoritmo k-vecinos más cercanos (KNN)?",
          de: "Was ist der k-nächste-Nachbarn (KNN) Algorithmus?",
          nl: "Wat is het k-nearest neighbors (KNN) algoritme?"
        },
        options: [
          { en: "Classifies data points based on the majority class of k nearest neighbors", es: "Clasifica puntos de datos basado en la clase mayoritaria de k vecinos más cercanos", de: "Klassifiziert Datenpunkte basierend auf der Mehrheitsklasse von k nächsten Nachbarn", nl: "Classificeert datapunten gebaseerd op de meerderheidsklasse van k dichtstbijzijnde buren" },
          { en: "Finds the k best friends in social networks", es: "Encuentra los k mejores amigos en redes sociales", de: "Findet die k besten Freunde in sozialen Netzwerken", nl: "Vindt de k beste vrienden in sociale netwerken" },
          { en: "Locates the nearest k stores", es: "Localiza las k tiendas más cercanas", de: "Lokalisiert die nächsten k Geschäfte", nl: "Lokaliseert de dichtstbijzijnde k winkels" },
          { en: "Connects k computers in a network", es: "Conecta k computadoras en una red", de: "Verbindet k Computer in einem Netzwerk", nl: "Verbindt k computers in een netwerk" }
        ],
        correct: 0,
        explanation: {
          en: "KNN classifies a new data point by looking at the k closest training examples and assigning the most common class among those neighbors. It's simple but effective for many problems.",
          es: "KNN clasifica un nuevo punto de datos mirando los k ejemplos de entrenamiento más cercanos y asignando la clase más común entre esos vecinos. Es simple pero efectivo para muchos problemas.",
          de: "KNN klassifiziert einen neuen Datenpunkt durch Betrachten der k nächsten Trainingsbeispiele und Zuweisen der häufigsten Klasse unter diesen Nachbarn. Es ist einfach aber effektiv für viele Probleme.",
          nl: "KNN classificeert een nieuw datapunt door naar de k dichtstbijzijnde trainingsvoorbeelden te kijken en de meest voorkomende klasse onder die buren toe te wijzen. Het is eenvoudig maar effectief voor veel problemen."
        }
      },
      {
        question: {
          en: "What is naive Bayes classification?",
          es: "¿Qué es la clasificación naive Bayes?",
          de: "Was ist naive Bayes Klassifikation?",
          nl: "Wat is naive Bayes classificatie?"
        },
        options: [
          { en: "A probabilistic classifier based on Bayes' theorem assuming feature independence", es: "Un clasificador probabilístico basado en el teorema de Bayes asumiendo independencia de características", de: "Ein probabilistischer Klassifikator basierend auf Bayes' Theorem unter Annahme von Merkmalsunabhängigkeit", nl: "Een probabilistische classifier gebaseerd op Bayes' stelling met aanname van feature onafhankelijkheid" },
          { en: "A simple classification method for beginners", es: "Un método de clasificación simple para principiantes", de: "Eine einfache Klassifikationsmethode für Anfänger", nl: "Een eenvoudige classificatiemethode voor beginners" },
          { en: "Classification using naive assumptions only", es: "Clasificación usando solo suposiciones ingenuas", de: "Klassifikation nur mit naiven Annahmen", nl: "Classificatie met alleen naïeve aannames" },
          { en: "A classifier named after someone naive", es: "Un clasificador nombrado por alguien ingenuo", de: "Ein Klassifikator benannt nach jemandem Naivem", nl: "Een classifier vernoemd naar iemand naïef" }
        ],
        correct: 0,
        explanation: {
          en: "Naive Bayes applies Bayes' theorem with the 'naive' assumption that features are independent. Despite this simplification, it works well for text classification and spam detection.",
          es: "Naive Bayes aplica el teorema de Bayes con la suposición 'ingenua' de que las características son independientes. A pesar de esta simplificación, funciona bien para clasificación de texto y detección de spam.",
          de: "Naive Bayes wendet Bayes' Theorem mit der 'naiven' Annahme an, dass Merkmale unabhängig sind. Trotz dieser Vereinfachung funktioniert es gut für Textklassifikation und Spam-Erkennung.",
          nl: "Naive Bayes past Bayes' stelling toe met de 'naïeve' aanname dat features onafhankelijk zijn. Ondanks deze vereenvoudiging werkt het goed voor tekstclassificatie en spam detectie."
        }
      },
      {
        question: {
          en: "What is Support Vector Machine (SVM)?",
          es: "¿Qué es una Máquina de Vectores de Soporte (SVM)?",
          de: "Was ist eine Support Vector Machine (SVM)?",
          nl: "Wat is een Support Vector Machine (SVM)?"
        },
        options: [
          { en: "Algorithm that finds optimal boundary to separate different classes", es: "Algoritmo que encuentra el límite óptimo para separar diferentes clases", de: "Algorithmus der optimale Grenze findet um verschiedene Klassen zu trennen", nl: "Algoritme dat optimale grens vindt om verschillende klassen te scheiden" },
          { en: "Machine that provides technical support", es: "Máquina que proporciona soporte técnico", de: "Maschine die technischen Support bietet", nl: "Machine die technische ondersteuning biedt" },
          { en: "Vector graphics support system", es: "Sistema de soporte de gráficos vectoriales", de: "Vektorgrafik-Unterstützungssystem", nl: "Vector graphics ondersteuningssysteem" },
          { en: "Machine for storing support vectors", es: "Máquina para almacenar vectores de soporte", de: "Maschine zum Speichern von Support-Vektoren", nl: "Machine voor het opslaan van support vectoren" }
        ],
        correct: 0,
        explanation: {
          en: "SVM finds the optimal hyperplane that separates classes with maximum margin, using support vectors (data points closest to the boundary) to define the decision boundary.",
          es: "SVM encuentra el hiperplano óptimo que separa clases con margen máximo, usando vectores de soporte (puntos de datos más cercanos al límite) para definir el límite de decisión.",
          de: "SVM findet die optimale Hyperebene die Klassen mit maximalem Rand trennt, verwendet Support-Vektoren (Datenpunkte nächst zur Grenze) um die Entscheidungsgrenze zu definieren.",
          nl: "SVM vindt het optimale hypervlak dat klassen scheidt met maximale marge, gebruikt support vectoren (datapunten dichtst bij de grens) om de beslissingsgrens te definiëren."
        }
      },
      {
        question: {
          en: "What is random forest algorithm?",
          es: "¿Qué es el algoritmo random forest?",
          de: "Was ist der Random Forest Algorithmus?",
          nl: "Wat is het random forest algoritme?"
        },
        options: [
          { en: "Ensemble method combining multiple decision trees with randomization", es: "Método de conjunto que combina múltiples árboles de decisión con aleatorización", de: "Ensemble-Methode die mehrere Entscheidungsbäume mit Randomisierung kombiniert", nl: "Ensemble methode die meerdere decision trees combineert met randomisatie" },
          { en: "Algorithm for planting trees randomly", es: "Algoritmo para plantar árboles aleatoriamente", de: "Algorithmus zum zufälligen Pflanzen von Bäumen", nl: "Algoritme voor het willekeurig planten van bomen" },
          { en: "Forest management system", es: "Sistema de gestión forestal", de: "Forstwirtschaftssystem", nl: "Bosbeheer systeem" },
          { en: "Random selection of forest data", es: "Selección aleatoria de datos forestales", de: "Zufällige Auswahl von Walddaten", nl: "Willekeurige selectie van bosdata" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest builds multiple decision trees using random subsets of features and data, then combines their predictions through voting or averaging to reduce overfitting and improve accuracy.",
          es: "Random Forest construye múltiples árboles de decisión usando subconjuntos aleatorios de características y datos, luego combina sus predicciones a través de votación o promediado para reducir overfitting y mejorar precisión.",
          de: "Random Forest baut mehrere Entscheidungsbäume mit zufälligen Teilmengen von Merkmalen und Daten, kombiniert dann ihre Vorhersagen durch Abstimmung oder Mittelwertbildung um Overfitting zu reduzieren und Genauigkeit zu verbessern.",
          nl: "Random Forest bouwt meerdere decision trees met willekeurige subsets van features en data, combineert dan hun voorspellingen door stemmen of middelen om overfitting te verminderen en nauwkeurigheid te verbeteren."
        }
      },
      {
        question: {
          en: "What is hierarchical clustering?",
          es: "¿Qué es el clustering jerárquico?",
          de: "Was ist hierarchisches Clustering?",
          nl: "Wat is hierarchical clustering?"
        },
        options: [
          { en: "Clustering method that creates tree-like structure of nested clusters", es: "Método de clustering que crea estructura tipo árbol de clústeres anidados", de: "Clustering-Methode die baumartige Struktur verschachtelter Cluster erstellt", nl: "Clustering methode die boom-achtige structuur van geneste clusters creëert" },
          { en: "Clustering based on organizational hierarchy", es: "Clustering basado en jerarquía organizacional", de: "Clustering basierend auf organisatorischer Hierarchie", nl: "Clustering gebaseerd op organisatorische hiërarchie" },
          { en: "Clustering only important data points", es: "Clustering solo puntos de datos importantes", de: "Clustering nur wichtiger Datenpunkte", nl: "Clustering alleen belangrijke datapunten" },
          { en: "High-level clustering for executives", es: "Clustering de alto nivel para ejecutivos", de: "High-Level Clustering für Führungskräfte", nl: "High-level clustering voor leidinggevenden" }
        ],
        correct: 0,
        explanation: {
          en: "Hierarchical clustering creates a tree (dendrogram) showing how clusters merge or split at different levels, allowing analysis of data structure at multiple granularities without predefined cluster numbers.",
          es: "El clustering jerárquico crea un árbol (dendrograma) mostrando cómo los clústeres se fusionan o dividen en diferentes niveles, permitiendo análisis de estructura de datos en múltiples granularidades sin números de clúster predefinidos.",
          de: "Hierarchisches Clustering erstellt einen Baum (Dendrogram) der zeigt wie Cluster auf verschiedenen Ebenen verschmelzen oder sich teilen, ermöglicht Analyse der Datenstruktur auf mehreren Granularitätsebenen ohne vordefinierte Clusterzahlen.",
          nl: "Hierarchical clustering creëert een boom (dendrogram) die toont hoe clusters samenvoegen of splitsen op verschillende niveaus, staat analyse van datastructuur toe op meerdere granulariteiten zonder voorgedefinieerde cluster aantallen."
        }
      },
      {
        question: {
          en: "What is polynomial regression?",
          es: "¿Qué es la regresión polinómica?",
          de: "Was ist polynomiale Regression?",
          nl: "Wat is polynomiale regressie?"
        },
        options: [
          { en: "Extension of linear regression using polynomial features to model non-linear relationships", es: "Extensión de regresión lineal usando características polinómicas para modelar relaciones no lineales", de: "Erweiterung linearer Regression mit polynomialen Merkmalen um nichtlineare Beziehungen zu modellieren", nl: "Uitbreiding van lineaire regressie met polynomiale features om niet-lineaire relaties te modelleren" },
          { en: "Regression for polynomial equations only", es: "Regresión solo para ecuaciones polinómicas", de: "Regression nur für polynomiale Gleichungen", nl: "Regressie alleen voor polynomiale vergelijkingen" },
          { en: "Multiple regression with many variables", es: "Regresión múltiple con muchas variables", de: "Multiple Regression mit vielen Variablen", nl: "Meervoudige regressie met veel variabelen" },
          { en: "Advanced form of logistic regression", es: "Forma avanzada de regresión logística", de: "Erweiterte Form logistischer Regression", nl: "Geavanceerde vorm van logistische regressie" }
        ],
        correct: 0,
        explanation: {
          en: "Polynomial regression fits non-linear relationships by adding polynomial terms (x², x³, etc.) as features, allowing linear regression techniques to model curved relationships.",
          es: "La regresión polinómica ajusta relaciones no lineales agregando términos polinómicos (x², x³, etc.) como características, permitiendo técnicas de regresión lineal modelar relaciones curvas.",
          de: "Polynomiale Regression passt nichtlineare Beziehungen durch Hinzufügen polynomialer Terme (x², x³, etc.) als Merkmale an, ermöglicht linearen Regressionstechniken gekrümmte Beziehungen zu modellieren.",
          nl: "Polynomiale regressie past niet-lineaire relaties aan door polynomiale termen (x², x³, etc.) als features toe te voegen, staat lineaire regressietechnieken toe om gebogen relaties te modelleren."
        }
      },
      {
        question: {
          en: "What is the purpose of regularization in machine learning?",
          es: "¿Cuál es el propósito de la regularización en machine learning?",
          de: "Was ist der Zweck der Regularisierung im maschinellen Lernen?",
          nl: "Wat is het doel van regularisatie in machine learning?"
        },
        options: [
          { en: "Prevent overfitting by adding penalty terms to the loss function", es: "Prevenir overfitting agregando términos de penalización a la función de pérdida", de: "Overfitting verhindern durch Hinzufügen von Straftermen zur Verlustfunktion", nl: "Overfitting voorkomen door straftermen toe te voegen aan de loss functie" },
          { en: "Make algorithms run on regular schedules", es: "Hacer que algoritmos corran en horarios regulares", de: "Algorithmen in regelmäßigen Zeitplänen laufen lassen", nl: "Algoritmes laten draaien op regelmatige schema's" },
          { en: "Normalize data to regular ranges", es: "Normalizar datos a rangos regulares", de: "Daten auf reguläre Bereiche normalisieren", nl: "Data normaliseren naar reguliere bereiken" },
          { en: "Ensure algorithms follow regulations", es: "Asegurar que algoritmos sigan regulaciones", de: "Sicherstellen dass Algorithmen Vorschriften befolgen", nl: "Ervoor zorgen dat algoritmes regelgeving volgen" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization adds penalty terms (L1, L2) to the loss function to discourage complex models with large weights, helping prevent overfitting and improving generalization to new data.",
          es: "La regularización agrega términos de penalización (L1, L2) a la función de pérdida para desalentar modelos complejos con pesos grandes, ayudando a prevenir overfitting y mejorar generalización a nuevos datos.",
          de: "Regularisierung fügt Strafterme (L1, L2) zur Verlustfunktion hinzu um komplexe Modelle mit großen Gewichten zu entmutigen, hilft Overfitting zu verhindern und Generalisierung auf neue Daten zu verbessern.",
          nl: "Regularisatie voegt straftermen (L1, L2) toe aan de loss functie om complexe modellen met grote gewichten te ontmoedigen, helpt overfitting te voorkomen en generalisatie naar nieuwe data te verbeteren."
        }
      },
      {
        question: {
          en: "What is gradient descent?",
          es: "¿Qué es el descenso de gradiente?",
          de: "Was ist Gradientenabstieg?",
          nl: "Wat is gradient descent?"
        },
        options: [
          { en: "Optimization algorithm that finds minimum of a function by following steepest descent", es: "Algoritmo de optimización que encuentra el mínimo de una función siguiendo el descenso más pronunciado", de: "Optimierungsalgorithmus der das Minimum einer Funktion durch Folgen des steilsten Abstiegs findet", nl: "Optimalisatie algoritme dat minimum van een functie vindt door de steilste afdaling te volgen" },
          { en: "Algorithm for walking down hills", es: "Algoritmo para caminar cuesta abajo", de: "Algorithmus zum Bergabgehen", nl: "Algoritme voor het aflopen van heuvels" },
          { en: "Method for calculating gradients", es: "Método para calcular gradientes", de: "Methode zur Berechnung von Gradienten", nl: "Methode voor het berekenen van gradiënten" },
          { en: "Technique for climbing gradients", es: "Técnica para escalar gradientes", de: "Technik zum Klettern von Gradienten", nl: "Techniek voor het beklimmen van gradiënten" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient descent iteratively updates model parameters in the direction opposite to the gradient to minimize the loss function, like rolling a ball downhill to find the lowest point.",
          es: "El descenso de gradiente actualiza iterativamente parámetros del modelo en la dirección opuesta al gradiente para minimizar la función de pérdida, como rodar una pelota cuesta abajo para encontrar el punto más bajo.",
          de: "Gradientenabstieg aktualisiert iterativ Modellparameter in die dem Gradienten entgegengesetzte Richtung um die Verlustfunktion zu minimieren, wie einen Ball bergab rollen um den tiefsten Punkt zu finden.",
          nl: "Gradient descent werkt iteratief modelparameters bij in de richting tegengesteld aan de gradiënt om de loss functie te minimaliseren, zoals een bal bergafwaarts rollen om het laagste punt te vinden."
        }
      },
      {
        question: {
          en: "What is the difference between supervised and unsupervised learning algorithms?",
          es: "¿Cuál es la diferencia entre algoritmos de aprendizaje supervisado y no supervisado?",
          de: "Was ist der Unterschied zwischen überwachten und unüberwachten Lernalgorithmen?",
          nl: "Wat is het verschil tussen supervised en unsupervised learning algoritmes?"
        },
        options: [
          { en: "Supervised uses labeled data, unsupervised finds patterns in unlabeled data", es: "Supervisado usa datos etiquetados, no supervisado encuentra patrones en datos sin etiquetar", de: "Überwacht verwendet beschriftete Daten, unüberwacht findet Muster in unbeschrifteten Daten", nl: "Supervised gebruikt gelabelde data, unsupervised vindt patronen in ongelabelde data" },
          { en: "Supervised algorithms need human supervision during training", es: "Algoritmos supervisados necesitan supervisión humana durante entrenamiento", de: "Überwachte Algorithmen benötigen menschliche Überwachung während des Trainings", nl: "Supervised algoritmes hebben menselijke supervisie nodig tijdens training" },
          { en: "Unsupervised algorithms work without computers", es: "Algoritmos no supervisados funcionan sin computadoras", de: "Unüberwachte Algorithmen funktionieren ohne Computer", nl: "Unsupervised algoritmes werken zonder computers" },
          { en: "There is no real difference between them", es: "No hay diferencia real entre ellos", de: "Es gibt keinen wirklichen Unterschied zwischen ihnen", nl: "Er is geen echt verschil tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised learning algorithms learn from examples with known correct answers (labels), while unsupervised algorithms discover hidden patterns in data without knowing the correct answers.",
          es: "Los algoritmos de aprendizaje supervisado aprenden de ejemplos con respuestas correctas conocidas (etiquetas), mientras los algoritmos no supervisados descubren patrones ocultos en datos sin conocer las respuestas correctas.",
          de: "Überwachte Lernalgorithmen lernen von Beispielen mit bekannten korrekten Antworten (Labels), während unüberwachte Algorithmen versteckte Muster in Daten entdecken ohne die korrekten Antworten zu kennen.",
          nl: "Supervised learning algoritmes leren van voorbeelden met bekende juiste antwoorden (labels), terwijl unsupervised algoritmes verborgen patronen in data ontdekken zonder de juiste antwoorden te kennen."
        }
      },
      {
        question: {
          en: "What is clustering in machine learning?",
          es: "¿Qué es el clustering en machine learning?",
          de: "Was ist Clustering im maschinellen Lernen?",
          nl: "Wat is clustering in machine learning?"
        },
        options: [
          { en: "Grouping similar data points together without predefined labels", es: "Agrupar puntos de datos similares sin etiquetas predefinidas", de: "Ähnliche Datenpunkte ohne vordefinierte Labels gruppieren", nl: "Vergelijkbare datapunten groeperen zonder voorgedefinieerde labels" },
          { en: "Organizing computer clusters for processing", es: "Organizar clústeres de computadoras para procesamiento", de: "Computer-Cluster für Verarbeitung organisieren", nl: "Computer clusters organiseren voor verwerking" },
          { en: "Creating groups of algorithms", es: "Crear grupos de algoritmos", de: "Gruppen von Algorithmen erstellen", nl: "Groepen van algoritmes creëren" },
          { en: "Clustering servers in data centers", es: "Agrupar servidores en centros de datos", de: "Server in Rechenzentren clustern", nl: "Servers clusteren in datacenters" }
        ],
        correct: 0,
        explanation: {
          en: "Clustering is an unsupervised learning technique that groups data points with similar characteristics together, helping discover natural patterns and structures in data without knowing the groups beforehand.",
          es: "El clustering es una técnica de aprendizaje no supervisado que agrupa puntos de datos con características similares, ayudando a descubrir patrones y estructuras naturales en datos sin conocer los grupos de antemano.",
          de: "Clustering ist eine unüberwachte Lerntechnik die Datenpunkte mit ähnlichen Eigenschaften gruppiert, hilft natürliche Muster und Strukturen in Daten zu entdecken ohne die Gruppen vorher zu kennen.",
          nl: "Clustering is een unsupervised learning techniek die datapunten met vergelijkbare kenmerken groepeert, helpt natuurlijke patronen en structuren in data te ontdekken zonder de groepen van tevoren te kennen."
        }
      },
      {
        question: {
          en: "What is cross-validation and why is it important in machine learning?",
          es: "¿Qué es la validación cruzada y por qué es importante en machine learning?",
          de: "Was ist Kreuzvalidierung und warum ist sie wichtig im maschinellen Lernen?",
          nl: "Wat is cross-validation en waarom is het belangrijk in machine learning?"
        },
        options: [
          { en: "A technique for evaluating model performance by testing on multiple data splits to reduce overfitting", es: "Una técnica para evaluar rendimiento del modelo probando en múltiples divisiones de datos para reducir sobreajuste", de: "Eine Technik zur Bewertung der Modellleistung durch Testen auf mehreren Datenaufteilungen zur Reduzierung von Overfitting", nl: "Een techniek voor het evalueren van modelprestaties door te testen op meerdere data splits om overfitting te verminderen" },
          { en: "Validating data across different databases", es: "Validar datos a través de diferentes bases de datos", de: "Daten über verschiedene Datenbanken validieren", nl: "Data valideren over verschillende databases" },
          { en: "Cross-checking validation results manually", es: "Verificar resultados de validación manualmente", de: "Validierungsergebnisse manuell überprüfen", nl: "Validatieresultaten handmatig controleren" },
          { en: "Validating models against competitors", es: "Validar modelos contra competidores", de: "Modelle gegen Konkurrenten validieren", nl: "Modellen valideren tegen concurrenten" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-validation divides data into multiple folds, trains on some folds and tests on others, repeating this process to get a robust estimate of model performance and detect overfitting.",
          es: "La validación cruzada divide datos en múltiples pliegues, entrena en algunos pliegues y prueba en otros, repitiendo este proceso para obtener una estimación robusta del rendimiento del modelo y detectar sobreajuste.",
          de: "Kreuzvalidierung teilt Daten in mehrere Folds auf, trainiert auf einigen Folds und testet auf anderen, wiederholt diesen Prozess um eine robuste Schätzung der Modellleistung zu erhalten und Overfitting zu erkennen.",
          nl: "Cross-validation verdeelt data in meerdere folds, traint op sommige folds en test op anderen, herhaalt dit proces om een robuuste schatting van modelprestaties te krijgen en overfitting te detecteren."
        }
      },
      {
        question: {
          en: "What is the kernel trick in SVM?",
          es: "¿Qué es el truco del kernel en SVM?",
          de: "Was ist der Kernel-Trick in SVM?",
          nl: "Wat is de kernel trick in SVM?"
        },
        options: [
          { en: "Transforming data into higher dimensions to make it linearly separable", es: "Transformar datos en dimensiones más altas para hacerlos linealmente separables", de: "Daten in höhere Dimensionen transformieren um sie linear trennbar zu machen", nl: "Data transformeren naar hogere dimensies om het lineair scheidbaar te maken" },
          { en: "A trick to speed up kernel operations", es: "Un truco para acelerar operaciones de kernel", de: "Ein Trick um Kernel-Operationen zu beschleunigen", nl: "Een truc om kernel operaties te versnellen" },
          { en: "Using multiple kernels simultaneously", es: "Usar múltiples kernels simultáneamente", de: "Mehrere Kernel gleichzeitig verwenden", nl: "Meerdere kernels tegelijkertijd gebruiken" },
          { en: "Removing the kernel from computation", es: "Eliminar el kernel del cálculo", de: "Kernel aus der Berechnung entfernen", nl: "Kernel verwijderen uit berekening" }
        ],
        correct: 0,
        explanation: {
          en: "The kernel trick allows SVMs to efficiently operate in high-dimensional space without explicitly computing coordinates there, making non-linear separation possible while keeping computation tractable.",
          es: "El truco del kernel permite a SVMs operar eficientemente en espacio de alta dimensión sin calcular explícitamente coordenadas allí, haciendo posible separación no lineal mientras mantiene el cálculo manejable.",
          de: "Der Kernel-Trick ermöglicht SVMs effizient im hochdimensionalen Raum zu operieren ohne explizit Koordinaten dort zu berechnen, macht nicht-lineare Trennung möglich während Berechnung handhabbar bleibt.",
          nl: "De kernel trick stelt SVMs in staat efficiënt te opereren in hoogdimensionale ruimte zonder expliciet coördinaten daar te berekenen, maakt niet-lineaire scheiding mogelijk terwijl berekening beheersbaar blijft."
        }
      },
      {
        question: {
          en: "What is the difference between parametric and non-parametric models?",
          es: "¿Cuál es la diferencia entre modelos paramétricos y no paramétricos?",
          de: "Was ist der Unterschied zwischen parametrischen und nicht-parametrischen Modellen?",
          nl: "Wat is het verschil tussen parametrische en non-parametrische modellen?"
        },
        options: [
          { en: "Parametric models have fixed parameters, non-parametric grow with data", es: "Modelos paramétricos tienen parámetros fijos, no paramétricos crecen con datos", de: "Parametrische Modelle haben feste Parameter, nicht-parametrische wachsen mit Daten", nl: "Parametrische modellen hebben vaste parameters, non-parametrische groeien met data" },
          { en: "Parametric models are always better", es: "Modelos paramétricos son siempre mejores", de: "Parametrische Modelle sind immer besser", nl: "Parametrische modellen zijn altijd beter" },
          { en: "Non-parametric models have no parameters", es: "Modelos no paramétricos no tienen parámetros", de: "Nicht-parametrische Modelle haben keine Parameter", nl: "Non-parametrische modellen hebben geen parameters" },
          { en: "They use different programming languages", es: "Usan diferentes lenguajes de programación", de: "Sie verwenden verschiedene Programmiersprachen", nl: "Ze gebruiken verschillende programmeertalen" }
        ],
        correct: 0,
        explanation: {
          en: "Parametric models have a fixed number of parameters regardless of data size (like linear regression), while non-parametric models' complexity grows with data (like k-NN), offering more flexibility but requiring more data.",
          es: "Modelos paramétricos tienen un número fijo de parámetros independientemente del tamaño de datos (como regresión lineal), mientras modelos no paramétricos su complejidad crece con datos (como k-NN), ofreciendo más flexibilidad pero requiriendo más datos.",
          de: "Parametrische Modelle haben eine feste Anzahl von Parametern unabhängig von Datengröße (wie lineare Regression), während nicht-parametrische Modelle ihre Komplexität mit Daten wächst (wie k-NN), bieten mehr Flexibilität aber benötigen mehr Daten.",
          nl: "Parametrische modellen hebben een vast aantal parameters ongeacht datagrootte (zoals lineaire regressie), terwijl non-parametrische modellen hun complexiteit groeit met data (zoals k-NN), bieden meer flexibiliteit maar vereisen meer data."
        }
      },
      {
        question: {
          en: "What is feature scaling and why is it important?",
          es: "¿Qué es el escalado de características y por qué es importante?",
          de: "Was ist Feature-Skalierung und warum ist es wichtig?",
          nl: "Wat is feature scaling en waarom is het belangrijk?"
        },
        options: [
          { en: "Normalizing feature ranges to prevent some features from dominating", es: "Normalizar rangos de características para prevenir que algunas dominen", de: "Feature-Bereiche normalisieren um zu verhindern dass einige dominieren", nl: "Feature bereiken normaliseren om te voorkomen dat sommige domineren" },
          { en: "Making features bigger or smaller visually", es: "Hacer características más grandes o pequeñas visualmente", de: "Features visuell größer oder kleiner machen", nl: "Features visueel groter of kleiner maken" },
          { en: "Scaling up the number of features", es: "Aumentar el número de características", de: "Anzahl der Features erhöhen", nl: "Aantal features opschalen" },
          { en: "Measuring feature importance", es: "Medir importancia de características", de: "Feature-Wichtigkeit messen", nl: "Feature belangrijkheid meten" }
        ],
        correct: 0,
        explanation: {
          en: "Feature scaling brings all features to similar ranges (e.g., 0-1 or standard deviation), crucial for algorithms like gradient descent, SVM, and k-NN that are sensitive to feature magnitudes.",
          es: "El escalado de características lleva todas las características a rangos similares (ej. 0-1 o desviación estándar), crucial para algoritmos como descenso de gradiente, SVM y k-NN que son sensibles a magnitudes de características.",
          de: "Feature-Skalierung bringt alle Features auf ähnliche Bereiche (z.B. 0-1 oder Standardabweichung), entscheidend für Algorithmen wie Gradientenabstieg, SVM und k-NN die empfindlich auf Feature-Größen sind.",
          nl: "Feature scaling brengt alle features naar vergelijkbare bereiken (bijv. 0-1 of standaarddeviatie), cruciaal voor algoritmes zoals gradient descent, SVM en k-NN die gevoelig zijn voor feature magnitudes."
        }
      },
      {
        question: {
          en: "What is the No Free Lunch theorem in machine learning?",
          es: "¿Qué es el teorema No Free Lunch en machine learning?",
          de: "Was ist das No Free Lunch Theorem im maschinellen Lernen?",
          nl: "Wat is het No Free Lunch theorema in machine learning?"
        },
        options: [
          { en: "No single algorithm works best for all problems; performance depends on the problem", es: "Ningún algoritmo funciona mejor para todos los problemas; rendimiento depende del problema", de: "Kein einzelner Algorithmus funktioniert am besten für alle Probleme; Leistung hängt vom Problem ab", nl: "Geen enkel algoritme werkt het beste voor alle problemen; prestaties hangen af van het probleem" },
          { en: "Machine learning requires payment", es: "Machine learning requiere pago", de: "Maschinelles Lernen erfordert Bezahlung", nl: "Machine learning vereist betaling" },
          { en: "You need expensive hardware", es: "Necesitas hardware costoso", de: "Man braucht teure Hardware", nl: "Je hebt dure hardware nodig" },
          { en: "Free algorithms don't exist", es: "Algoritmos gratuitos no existen", de: "Kostenlose Algorithmen existieren nicht", nl: "Gratis algoritmes bestaan niet" }
        ],
        correct: 0,
        explanation: {
          en: "The No Free Lunch theorem states that averaged over all possible problems, every algorithm performs equally well. This means we must choose algorithms based on specific problem characteristics and assumptions.",
          es: "El teorema No Free Lunch establece que promediado sobre todos los problemas posibles, cada algoritmo funciona igualmente bien. Esto significa que debemos elegir algoritmos basados en características específicas del problema y suposiciones.",
          de: "Das No Free Lunch Theorem besagt dass über alle möglichen Probleme gemittelt jeder Algorithmus gleich gut funktioniert. Das bedeutet wir müssen Algorithmen basierend auf spezifischen Problemmerkmalen und Annahmen wählen.",
          nl: "Het No Free Lunch theorema stelt dat gemiddeld over alle mogelijke problemen elk algoritme even goed presteert. Dit betekent dat we algoritmes moeten kiezen gebaseerd op specifieke probleemkenmerken en aannames."
        }
      },
      {
        question: {
          en: "What is mini-batch gradient descent?",
          es: "¿Qué es el descenso de gradiente por mini-lotes?",
          de: "Was ist Mini-Batch-Gradientenabstieg?",
          nl: "Wat is mini-batch gradient descent?"
        },
        options: [
          { en: "Using small batches of data for each update, balancing speed and stability", es: "Usar pequeños lotes de datos para cada actualización, equilibrando velocidad y estabilidad", de: "Kleine Daten-Batches für jedes Update verwenden, balanciert Geschwindigkeit und Stabilität", nl: "Kleine batches data gebruiken voor elke update, balanceert snelheid en stabiliteit" },
          { en: "Using very small learning rates", es: "Usar tasas de aprendizaje muy pequeñas", de: "Sehr kleine Lernraten verwenden", nl: "Zeer kleine learning rates gebruiken" },
          { en: "Training miniature models", es: "Entrenar modelos en miniatura", de: "Miniaturmodelle trainieren", nl: "Miniatuurmodellen trainen" },
          { en: "Gradient descent for small datasets only", es: "Descenso de gradiente solo para conjuntos de datos pequeños", de: "Gradientenabstieg nur für kleine Datensätze", nl: "Gradient descent alleen voor kleine datasets" }
        ],
        correct: 0,
        explanation: {
          en: "Mini-batch gradient descent splits data into small batches (e.g., 32-256 samples), updating parameters after each batch. It combines benefits of batch GD (stable) and SGD (fast), making it the most commonly used variant.",
          es: "El descenso de gradiente por mini-lotes divide datos en lotes pequeños (ej. 32-256 muestras), actualizando parámetros después de cada lote. Combina beneficios de GD por lotes (estable) y SGD (rápido), haciéndolo la variante más comúnmente usada.",
          de: "Mini-Batch-Gradientenabstieg teilt Daten in kleine Batches (z.B. 32-256 Samples), aktualisiert Parameter nach jedem Batch. Kombiniert Vorteile von Batch-GD (stabil) und SGD (schnell), macht es zur am häufigsten verwendeten Variante.",
          nl: "Mini-batch gradient descent splitst data in kleine batches (bijv. 32-256 samples), update parameters na elke batch. Combineert voordelen van batch GD (stabiel) en SGD (snel), maakt het de meest gebruikte variant."
        }
      },
      {
        question: {
          en: "What is the activation function in neural networks?",
          es: "¿Qué es la función de activación en redes neuronales?",
          de: "Was ist die Aktivierungsfunktion in neuronalen Netzwerken?",
          nl: "Wat is de activation function in neurale netwerken?"
        },
        options: [
          { en: "A function that introduces non-linearity to help learn complex patterns", es: "Una función que introduce no linealidad para ayudar a aprender patrones complejos", de: "Eine Funktion die Nicht-Linearität einführt um komplexe Muster zu lernen", nl: "Een functie die non-lineariteit introduceert om complexe patronen te leren" },
          { en: "A function that activates the network", es: "Una función que activa la red", de: "Eine Funktion die das Netzwerk aktiviert", nl: "Een functie die het netwerk activeert" },
          { en: "The start button for training", es: "El botón de inicio para entrenamiento", de: "Die Starttaste für Training", nl: "De startknop voor training" },
          { en: "A function that turns neurons on and off", es: "Una función que enciende y apaga neuronas", de: "Eine Funktion die Neuronen ein- und ausschaltet", nl: "Een functie die neuronen aan en uit zet" }
        ],
        correct: 0,
        explanation: {
          en: "Activation functions like ReLU, sigmoid, or tanh introduce non-linearity into neural networks, allowing them to learn complex non-linear relationships. Without them, networks would only learn linear functions.",
          es: "Funciones de activación como ReLU, sigmoide o tanh introducen no linealidad en redes neuronales, permitiéndoles aprender relaciones complejas no lineales. Sin ellas, las redes solo aprenderían funciones lineales.",
          de: "Aktivierungsfunktionen wie ReLU, Sigmoid oder Tanh führen Nicht-Linearität in neuronale Netzwerke ein, ermöglichen ihnen komplexe nicht-lineare Beziehungen zu lernen. Ohne sie würden Netzwerke nur lineare Funktionen lernen.",
          nl: "Activation functions zoals ReLU, sigmoid of tanh introduceren non-lineariteit in neurale netwerken, stellen ze in staat complexe non-lineaire relaties te leren. Zonder hen zouden netwerken alleen lineaire functies leren."
        }
      },
      {
        question: {
          en: "What is backpropagation?",
          es: "¿Qué es la retropropagación?",
          de: "Was ist Backpropagation?",
          nl: "Wat is backpropagation?"
        },
        options: [
          { en: "An algorithm that calculates gradients by propagating errors backward through the network", es: "Un algoritmo que calcula gradientes propagando errores hacia atrás a través de la red", de: "Ein Algorithmus der Gradienten berechnet indem Fehler rückwärts durch das Netzwerk propagiert werden", nl: "Een algoritme dat gradiënten berekent door fouten achterwaarts door het netwerk te propageren" },
          { en: "Propagating data backwards for validation", es: "Propagar datos hacia atrás para validación", de: "Daten rückwärts zur Validierung propagieren", nl: "Data achterwaarts propageren voor validatie" },
          { en: "Going back to previous training epochs", es: "Volver a épocas de entrenamiento anteriores", de: "Zu vorherigen Trainingsepochen zurückgehen", nl: "Teruggaan naar vorige training epochs" },
          { en: "Reversing the neural network architecture", es: "Revertir la arquitectura de red neuronal", de: "Neuronale Netzwerkarchitektur umkehren", nl: "Neurale netwerkarchitectuur omkeren" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation uses the chain rule to efficiently compute gradients of the loss with respect to each weight, propagating errors from output to input layers, enabling neural network training through gradient descent.",
          es: "La retropropagación usa la regla de la cadena para calcular eficientemente gradientes de la pérdida con respecto a cada peso, propagando errores de capas de salida a entrada, habilitando entrenamiento de redes neuronales a través de descenso de gradiente.",
          de: "Backpropagation verwendet die Kettenregel um effizient Gradienten des Verlusts bezüglich jedes Gewichts zu berechnen, propagiert Fehler von Ausgabe- zu Eingabeschichten, ermöglicht neuronales Netzwerktraining durch Gradientenabstieg.",
          nl: "Backpropagation gebruikt de kettingregel om efficiënt gradiënten van de loss te berekenen met betrekking tot elk gewicht, propageert fouten van output naar input lagen, maakt neuraal netwerktraining mogelijk door gradient descent."
        }
      },
      {
        question: {
          en: "What is the purpose of a confusion matrix?",
          es: "¿Cuál es el propósito de una matriz de confusión?",
          de: "Was ist der Zweck einer Konfusionsmatrix?",
          nl: "Wat is het doel van een confusion matrix?"
        },
        options: [
          { en: "To visualize classification performance showing true/false positives and negatives", es: "Visualizar rendimiento de clasificación mostrando positivos/negativos verdaderos/falsos", de: "Klassifikationsleistung visualisieren mit wahren/falschen Positiven und Negativen", nl: "Classificatieprestaties visualiseren met true/false positives en negatives" },
          { en: "To confuse the model during training", es: "Para confundir el modelo durante el entrenamiento", de: "Um das Modell während des Trainings zu verwirren", nl: "Om het model te verwarren tijdens training" },
          { en: "To show which features are confusing", es: "Para mostrar qué características son confusas", de: "Um zu zeigen welche Features verwirrend sind", nl: "Om te tonen welke features verwarrend zijn" },
          { en: "To measure confusion in the dataset", es: "Para medir confusión en el conjunto de datos", de: "Um Verwirrung im Datensatz zu messen", nl: "Om verwarring in de dataset te meten" }
        ],
        correct: 0,
        explanation: {
          en: "A confusion matrix is a table showing counts of true positives, true negatives, false positives, and false negatives, providing detailed insight into classifier performance beyond simple accuracy.",
          es: "Una matriz de confusión es una tabla que muestra conteos de verdaderos positivos, verdaderos negativos, falsos positivos y falsos negativos, proporcionando información detallada sobre rendimiento del clasificador más allá de simple precisión.",
          de: "Eine Konfusionsmatrix ist eine Tabelle die Anzahlen von wahren Positiven, wahren Negativen, falschen Positiven und falschen Negativen zeigt, bietet detaillierte Einblicke in Klassifikatorleistung über einfache Genauigkeit hinaus.",
          nl: "Een confusion matrix is een tabel die aantallen van true positives, true negatives, false positives en false negatives toont, biedt gedetailleerd inzicht in classifier prestaties verder dan eenvoudige nauwkeurigheid."
        }
      },
      {
        question: {
          en: "What is the difference between generative and discriminative models?",
          es: "¿Cuál es la diferencia entre modelos generativos y discriminativos?",
          de: "Was ist der Unterschied zwischen generativen und diskriminativen Modellen?",
          nl: "Wat is het verschil tussen generatieve en discriminatieve modellen?"
        },
        options: [
          { en: "Generative models learn data distribution, discriminative learn decision boundaries", es: "Modelos generativos aprenden distribución de datos, discriminativos aprenden límites de decisión", de: "Generative Modelle lernen Datenverteilung, diskriminative lernen Entscheidungsgrenzen", nl: "Generatieve modellen leren dataverdeling, discriminatieve leren beslissingsgrenzen" },
          { en: "Generative models are newer technology", es: "Modelos generativos son tecnología más nueva", de: "Generative Modelle sind neuere Technologie", nl: "Generatieve modellen zijn nieuwere technologie" },
          { en: "Discriminative models discriminate against data", es: "Modelos discriminativos discriminan contra datos", de: "Diskriminative Modelle diskriminieren Daten", nl: "Discriminatieve modellen discrimineren data" },
          { en: "They use different programming languages", es: "Usan diferentes lenguajes de programación", de: "Sie verwenden verschiedene Programmiersprachen", nl: "Ze gebruiken verschillende programmeertalen" }
        ],
        correct: 0,
        explanation: {
          en: "Generative models (like GANs, VAEs) learn P(X,Y) to generate new data samples, while discriminative models (like logistic regression, SVM) learn P(Y|X) to classify existing data.",
          es: "Modelos generativos (como GANs, VAEs) aprenden P(X,Y) para generar nuevas muestras de datos, mientras modelos discriminativos (como regresión logística, SVM) aprenden P(Y|X) para clasificar datos existentes.",
          de: "Generative Modelle (wie GANs, VAEs) lernen P(X,Y) um neue Datenproben zu generieren, während diskriminative Modelle (wie logistische Regression, SVM) P(Y|X) lernen um existierende Daten zu klassifizieren.",
          nl: "Generatieve modellen (zoals GANs, VAEs) leren P(X,Y) om nieuwe datasamples te genereren, terwijl discriminatieve modellen (zoals logistische regressie, SVM) P(Y|X) leren om bestaande data te classificeren."
        }
      },
      {
        question: {
          en: "What is catastrophic forgetting in neural networks?",
          es: "¿Qué es el olvido catastrófico en redes neuronales?",
          de: "Was ist katastrophales Vergessen in neuronalen Netzwerken?",
          nl: "Wat is catastrophic forgetting in neurale netwerken?"
        },
        options: [
          { en: "When a network forgets previously learned tasks while learning new ones", es: "Cuando una red olvida tareas aprendidas previamente mientras aprende nuevas", de: "Wenn ein Netzwerk zuvor gelernte Aufgaben vergisst während es neue lernt", nl: "Wanneer een netwerk eerder geleerde taken vergeet tijdens het leren van nieuwe" },
          { en: "A catastrophic error in training", es: "Un error catastrófico en entrenamiento", de: "Ein katastrophaler Fehler im Training", nl: "Een catastrofale fout in training" },
          { en: "Forgetting to save model weights", es: "Olvidar guardar pesos del modelo", de: "Vergessen Modellgewichte zu speichern", nl: "Vergeten modelgewichten op te slaan" },
          { en: "Memory overflow in the network", es: "Desbordamiento de memoria en la red", de: "Speicherüberlauf im Netzwerk", nl: "Geheugenoverloop in het netwerk" }
        ],
        correct: 0,
        explanation: {
          en: "Catastrophic forgetting occurs when neural networks lose performance on old tasks after being trained on new ones, as new learning overwrites old weights. Solutions include continual learning techniques and replay buffers.",
          es: "El olvido catastrófico ocurre cuando redes neuronales pierden rendimiento en tareas antiguas después de ser entrenadas en nuevas, ya que nuevo aprendizaje sobrescribe pesos antiguos. Soluciones incluyen técnicas de aprendizaje continuo y buffers de replay.",
          de: "Katastrophales Vergessen tritt auf wenn neuronale Netzwerke Leistung bei alten Aufgaben verlieren nachdem sie auf neue trainiert wurden, da neues Lernen alte Gewichte überschreibt. Lösungen umfassen kontinuierliche Lerntechniken und Replay-Puffer.",
          nl: "Catastrophic forgetting treedt op wanneer neurale netwerken prestaties verliezen op oude taken na training op nieuwe, omdat nieuw leren oude gewichten overschrijft. Oplossingen omvatten continual learning technieken en replay buffers."
        }
      },
      {
        question: {
          en: "What is the Bellman equation in reinforcement learning?",
          es: "¿Qué es la ecuación de Bellman en aprendizaje por refuerzo?",
          de: "Was ist die Bellman-Gleichung im Reinforcement Learning?",
          nl: "Wat is de Bellman vergelijking in reinforcement learning?"
        },
        options: [
          { en: "An equation expressing optimal value as immediate reward plus discounted future value", es: "Una ecuación que expresa valor óptimo como recompensa inmediata más valor futuro descontado", de: "Eine Gleichung die optimalen Wert als sofortige Belohnung plus diskontierten zukünftigen Wert ausdrückt", nl: "Een vergelijking die optimale waarde uitdrukt als onmiddellijke beloning plus verdisconteerde toekomstige waarde" },
          { en: "An equation for bell curve distribution", es: "Una ecuación para distribución de curva de campana", de: "Eine Gleichung für Glockenkurvenverteilung", nl: "Een vergelijking voor klokcurve verdeling" },
          { en: "A mathematical formula named after a bell", es: "Una fórmula matemática nombrada por una campana", de: "Eine mathematische Formel benannt nach einer Glocke", nl: "Een wiskundige formule vernoemd naar een bel" },
          { en: "The equation for network topology", es: "La ecuación para topología de red", de: "Die Gleichung für Netzwerktopologie", nl: "De vergelijking voor netwerktopologie" }
        ],
        correct: 0,
        explanation: {
          en: "The Bellman equation is fundamental to RL, stating that the value of a state equals the immediate reward plus the discounted value of the next state, forming the basis for dynamic programming and Q-learning.",
          es: "La ecuación de Bellman es fundamental para RL, establece que el valor de un estado es igual a la recompensa inmediata más el valor descontado del siguiente estado, formando la base para programación dinámica y Q-learning.",
          de: "Die Bellman-Gleichung ist fundamental für RL, besagt dass der Wert eines Zustands der sofortigen Belohnung plus dem diskontierten Wert des nächsten Zustands entspricht, bildet Basis für dynamische Programmierung und Q-Learning.",
          nl: "De Bellman vergelijking is fundamenteel voor RL, stelt dat de waarde van een staat gelijk is aan de onmiddellijke beloning plus de verdisconteerde waarde van de volgende staat, vormt de basis voor dynamische programmering en Q-learning."
        }
      },
      {
        question: {
          en: "What is t-SNE used for?",
          es: "¿Para qué se usa t-SNE?",
          de: "Wofür wird t-SNE verwendet?",
          nl: "Waarvoor wordt t-SNE gebruikt?"
        },
        options: [
          { en: "Visualizing high-dimensional data in 2D or 3D while preserving local structure", es: "Visualizar datos de alta dimensión en 2D o 3D preservando estructura local", de: "Hochdimensionale Daten in 2D oder 3D visualisieren während lokale Struktur erhalten bleibt", nl: "Hoogdimensionale data visualiseren in 2D of 3D terwijl lokale structuur behouden blijft" },
          { en: "Testing network security", es: "Probar seguridad de red", de: "Netzwerksicherheit testen", nl: "Netwerkbeveiliging testen" },
          { en: "Time series analysis", es: "Análisis de series temporales", de: "Zeitreihenanalyse", nl: "Tijdreeksanalyse" },
          { en: "Training neural networks faster", es: "Entrenar redes neuronales más rápido", de: "Neuronale Netzwerke schneller trainieren", nl: "Neurale netwerken sneller trainen" }
        ],
        correct: 0,
        explanation: {
          en: "t-SNE (t-Distributed Stochastic Neighbor Embedding) is a dimensionality reduction technique excellent for visualizing clusters in high-dimensional data by mapping to 2D/3D while maintaining point relationships.",
          es: "t-SNE (t-Distributed Stochastic Neighbor Embedding) es una técnica de reducción de dimensionalidad excelente para visualizar clusters en datos de alta dimensión mapeando a 2D/3D mientras mantiene relaciones de puntos.",
          de: "t-SNE (t-Distributed Stochastic Neighbor Embedding) ist eine Dimensionsreduktionstechnik exzellent für Visualisierung von Clustern in hochdimensionalen Daten durch Mapping auf 2D/3D während Punktbeziehungen erhalten bleiben.",
          nl: "t-SNE (t-Distributed Stochastic Neighbor Embedding) is een dimensionaliteitsreductie techniek uitstekend voor het visualiseren van clusters in hoogdimensionale data door te mappen naar 2D/3D terwijl puntrelaties behouden blijven."
        }
      },
      {
        question: {
          en: "What is the VC dimension?",
          es: "¿Qué es la dimensión VC?",
          de: "Was ist die VC-Dimension?",
          nl: "Wat is de VC dimensie?"
        },
        options: [
          { en: "A measure of model capacity indicating maximum points it can shatter", es: "Una medida de capacidad del modelo indicando puntos máximos que puede fragmentar", de: "Ein Maß für Modellkapazität das maximale Punkte angibt die es zerschmettern kann", nl: "Een maat voor modelcapaciteit die maximale punten aangeeft die het kan verbrijzelen" },
          { en: "Virtual computing dimension", es: "Dimensión de computación virtual", de: "Virtuelle Computing-Dimension", nl: "Virtuele computing dimensie" },
          { en: "Video compression dimension", es: "Dimensión de compresión de video", de: "Videokompression-Dimension", nl: "Video compressie dimensie" },
          { en: "Variable control dimension", es: "Dimensión de control variable", de: "Variable Kontrolldimension", nl: "Variabele controle dimensie" }
        ],
        correct: 0,
        explanation: {
          en: "VC (Vapnik-Chervonenkis) dimension measures a model's complexity and learning capacity, indicating the maximum number of points it can classify correctly for all possible labelings, helping understand generalization ability.",
          es: "La dimensión VC (Vapnik-Chervonenkis) mide complejidad y capacidad de aprendizaje de un modelo, indicando el número máximo de puntos que puede clasificar correctamente para todos los etiquetados posibles, ayudando a entender capacidad de generalización.",
          de: "VC (Vapnik-Chervonenkis) Dimension misst Modellkomplexität und Lernkapazität, zeigt maximale Anzahl von Punkten die es korrekt für alle möglichen Beschriftungen klassifizieren kann, hilft Generalisierungsfähigkeit zu verstehen.",
          nl: "VC (Vapnik-Chervonenkis) dimensie meet modelcomplexiteit en leercapaciteit, geeft het maximale aantal punten aan dat het correct kan classificeren voor alle mogelijke labelingen, helpt generalisatievermogen te begrijpen."
        }
      },
      {
        question: {
          en: "What is imbalanced learning?",
          es: "¿Qué es el aprendizaje desbalanceado?",
          de: "Was ist unausgewogenes Lernen?",
          nl: "Wat is imbalanced learning?"
        },
        options: [
          { en: "Learning from datasets where classes have very different frequencies", es: "Aprender de conjuntos de datos donde clases tienen frecuencias muy diferentes", de: "Lernen von Datensätzen wo Klassen sehr unterschiedliche Häufigkeiten haben", nl: "Leren van datasets waar klassen zeer verschillende frequenties hebben" },
          { en: "Learning with unstable algorithms", es: "Aprender con algoritmos inestables", de: "Lernen mit instabilen Algorithmen", nl: "Leren met instabiele algoritmes" },
          { en: "Unbalanced neural network architecture", es: "Arquitectura de red neuronal desbalanceada", de: "Unausgewogene neuronale Netzwerkarchitektur", nl: "Ongebalanceerde neurale netwerkarchitectuur" },
          { en: "Learning on tilted hardware", es: "Aprender en hardware inclinado", de: "Lernen auf geneigter Hardware", nl: "Leren op gekantelde hardware" }
        ],
        correct: 0,
        explanation: {
          en: "Imbalanced learning deals with datasets where one class is much more frequent than others (e.g., fraud detection). Techniques include resampling, class weights, and specialized metrics like F1-score instead of accuracy.",
          es: "El aprendizaje desbalanceado trata con conjuntos de datos donde una clase es mucho más frecuente que otras (ej. detección de fraude). Técnicas incluyen remuestreo, pesos de clase y métricas especializadas como F1-score en lugar de precisión.",
          de: "Unausgewogenes Lernen befasst sich mit Datensätzen wo eine Klasse viel häufiger ist als andere (z.B. Betrugserkennung). Techniken umfassen Resampling, Klassengewichte und spezialisierte Metriken wie F1-Score statt Genauigkeit.",
          nl: "Imbalanced learning gaat om datasets waar een klasse veel frequenter is dan andere (bijv. fraudedetectie). Technieken omvatten resampling, klassengewichten en gespecialiseerde metrieken zoals F1-score in plaats van nauwkeurigheid."
        }
      },
      {
        question: {
          en: "What is the difference between online and batch learning?",
          es: "¿Cuál es la diferencia entre aprendizaje en línea y por lotes?",
          de: "Was ist der Unterschied zwischen Online- und Batch-Lernen?",
          nl: "Wat is het verschil tussen online en batch learning?"
        },
        options: [
          { en: "Online learns incrementally from new data, batch retrains on entire dataset", es: "En línea aprende incrementalmente de nuevos datos, por lotes reentrena en conjunto completo", de: "Online lernt inkrementell von neuen Daten, Batch trainiert auf gesamtem Datensatz neu", nl: "Online leert incrementeel van nieuwe data, batch hertraint op hele dataset" },
          { en: "Online learning requires internet connection", es: "Aprendizaje en línea requiere conexión a internet", de: "Online-Lernen erfordert Internetverbindung", nl: "Online learning vereist internetverbinding" },
          { en: "Batch learning is always faster", es: "Aprendizaje por lotes es siempre más rápido", de: "Batch-Lernen ist immer schneller", nl: "Batch learning is altijd sneller" },
          { en: "They use different loss functions", es: "Usan diferentes funciones de pérdida", de: "Sie verwenden verschiedene Verlustfunktionen", nl: "Ze gebruiken verschillende loss functions" }
        ],
        correct: 0,
        explanation: {
          en: "Online learning updates the model continuously as new data arrives, adapting to changes in real-time. Batch learning trains on the full dataset at once and must be retrained for updates.",
          es: "El aprendizaje en línea actualiza el modelo continuamente a medida que llegan nuevos datos, adaptándose a cambios en tiempo real. El aprendizaje por lotes entrena en el conjunto completo de datos de una vez y debe ser reentrenado para actualizaciones.",
          de: "Online-Lernen aktualisiert das Modell kontinuierlich wenn neue Daten ankommen, passt sich in Echtzeit an Änderungen an. Batch-Lernen trainiert auf dem vollständigen Datensatz auf einmal und muss für Updates neu trainiert werden.",
          nl: "Online learning update het model continu wanneer nieuwe data binnenkomt, past zich in real-time aan veranderingen aan. Batch learning traint op de volledige dataset tegelijk en moet opnieuw getraind worden voor updates."
        }
      },
      {
        question: {
          en: "What is multi-task learning?",
          es: "¿Qué es el aprendizaje multi-tarea?",
          de: "Was ist Multi-Task-Learning?",
          nl: "Wat is multi-task learning?"
        },
        options: [
          { en: "Training a model on multiple related tasks simultaneously to improve generalization", es: "Entrenar un modelo en múltiples tareas relacionadas simultáneamente para mejorar generalización", de: "Ein Modell auf mehreren verwandten Aufgaben gleichzeitig trainieren um Generalisierung zu verbessern", nl: "Een model trainen op meerdere gerelateerde taken tegelijkertijd om generalisatie te verbeteren" },
          { en: "Running multiple training jobs in parallel", es: "Ejecutar múltiples trabajos de entrenamiento en paralelo", de: "Mehrere Trainingsjobs parallel ausführen", nl: "Meerdere training jobs parallel uitvoeren" },
          { en: "Teaching AI to multitask like humans", es: "Enseñar a IA a hacer multitarea como humanos", de: "KI beibringen wie Menschen Multitasking zu machen", nl: "AI leren multitasken zoals mensen" },
          { en: "Distributing tasks across GPUs", es: "Distribuir tareas a través de GPUs", de: "Aufgaben über GPUs verteilen", nl: "Taken verdelen over GPUs" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-task learning trains a single model on multiple related tasks, sharing representations between tasks. This often improves performance by learning more robust features and reducing overfitting through implicit regularization.",
          es: "El aprendizaje multi-tarea entrena un modelo único en múltiples tareas relacionadas, compartiendo representaciones entre tareas. Esto a menudo mejora rendimiento aprendiendo características más robustas y reduciendo sobreajuste a través de regularización implícita.",
          de: "Multi-Task-Learning trainiert ein einzelnes Modell auf mehreren verwandten Aufgaben, teilt Repräsentationen zwischen Aufgaben. Dies verbessert oft Leistung durch Lernen robusterer Features und Reduzierung von Overfitting durch implizite Regularisierung.",
          nl: "Multi-task learning traint een enkel model op meerdere gerelateerde taken, deelt representaties tussen taken. Dit verbetert vaak prestaties door robuustere features te leren en overfitting te verminderen door impliciete regularisatie."
        }
      },
      {
        question: {
          en: "What is the Matthew's Correlation Coefficient (MCC)?",
          es: "¿Qué es el Coeficiente de Correlación de Matthew (MCC)?",
          de: "Was ist der Matthews-Korrelationskoeffizient (MCC)?",
          nl: "Wat is de Matthew's Correlation Coefficient (MCC)?"
        },
        options: [
          { en: "A balanced metric for binary classification even with imbalanced classes", es: "Una métrica balanceada para clasificación binaria incluso con clases desbalanceadas", de: "Eine ausgewogene Metrik für binäre Klassifikation auch bei unausgeglichenen Klassen", nl: "Een gebalanceerde metriek voor binaire classificatie zelfs met ongebalanceerde klassen" },
          { en: "A correlation between models named Matthew", es: "Una correlación entre modelos llamados Matthew", de: "Eine Korrelation zwischen Modellen namens Matthew", nl: "Een correlatie tussen modellen genaamd Matthew" },
          { en: "The coefficient for matrix calculations", es: "El coeficiente para cálculos de matriz", de: "Der Koeffizient für Matrixberechnungen", nl: "De coëfficiënt voor matrixberekeningen" },
          { en: "A measure of mathematical complexity", es: "Una medida de complejidad matemática", de: "Ein Maß für mathematische Komplexität", nl: "Een maat voor wiskundige complexiteit" }
        ],
        correct: 0,
        explanation: {
          en: "MCC ranges from -1 to +1 and is considered one of the best metrics for imbalanced classification, taking into account true/false positives and negatives in a balanced way, with 0 indicating random prediction.",
          es: "MCC varía de -1 a +1 y se considera una de las mejores métricas para clasificación desbalanceada, teniendo en cuenta positivos/negativos verdaderos/falsos de manera balanceada, con 0 indicando predicción aleatoria.",
          de: "MCC reicht von -1 bis +1 und gilt als eine der besten Metriken für unausgeglichene Klassifikation, berücksichtigt wahre/falsche Positive und Negative ausgewogen, mit 0 als Hinweis auf zufällige Vorhersage.",
          nl: "MCC varieert van -1 tot +1 en wordt beschouwd als een van de beste metrieken voor ongebalanceerde classificatie, houdt rekening met true/false positives en negatives op gebalanceerde wijze, met 0 als indicatie van willekeurige voorspelling."
        }
      },
      {
        question: {
          en: "What is active learning?",
          es: "¿Qué es el aprendizaje activo?",
          de: "Was ist aktives Lernen?",
          nl: "Wat is active learning?"
        },
        options: [
          { en: "A strategy where the model selects which data to label for most efficient learning", es: "Una estrategia donde el modelo selecciona qué datos etiquetar para aprendizaje más eficiente", de: "Eine Strategie wo das Modell wählt welche Daten zu beschriften für effizientestes Lernen", nl: "Een strategie waarbij het model selecteert welke data te labelen voor meest efficiënt leren" },
          { en: "Learning while being physically active", es: "Aprender mientras se está físicamente activo", de: "Lernen während man körperlich aktiv ist", nl: "Leren terwijl je fysiek actief bent" },
          { en: "Training models on live production data", es: "Entrenar modelos en datos de producción en vivo", de: "Modelle auf Live-Produktionsdaten trainieren", nl: "Modellen trainen op live productiedata" },
          { en: "Actively searching for more data", es: "Buscar activamente más datos", de: "Aktiv nach mehr Daten suchen", nl: "Actief zoeken naar meer data" }
        ],
        correct: 0,
        explanation: {
          en: "Active learning intelligently queries for labels on the most informative examples, reducing labeling costs by focusing human effort on data that maximally improves the model, particularly useful when labeling is expensive.",
          es: "El aprendizaje activo consulta inteligentemente etiquetas en los ejemplos más informativos, reduciendo costos de etiquetado enfocando esfuerzo humano en datos que mejoran maximalmente el modelo, particularmente útil cuando etiquetar es costoso.",
          de: "Aktives Lernen fragt intelligent nach Labels für informativste Beispiele, reduziert Beschriftungskosten durch Fokussierung menschlicher Anstrengung auf Daten die das Modell maximal verbessern, besonders nützlich wenn Beschriftung teuer ist.",
          nl: "Active learning vraagt intelligent om labels voor de meest informatieve voorbeelden, vermindert labelkosten door menselijke inspanning te richten op data die het model maximaal verbetert, bijzonder nuttig wanneer labelen duur is."
        }
      },
      {
        question: {
          en: "What is the difference between shallow and deep learning?",
          es: "¿Cuál es la diferencia entre aprendizaje superficial y profundo?",
          de: "Was ist der Unterschied zwischen flachem und tiefem Lernen?",
          nl: "Wat is het verschil tussen shallow en deep learning?"
        },
        options: [
          { en: "Shallow has few layers, deep has many layers enabling hierarchical feature learning", es: "Superficial tiene pocas capas, profundo tiene muchas capas habilitando aprendizaje jerárquico de características", de: "Flach hat wenige Schichten, tief hat viele Schichten ermöglicht hierarchisches Feature-Lernen", nl: "Shallow heeft weinig lagen, deep heeft veel lagen waardoor hiërarchisch feature leren mogelijk is" },
          { en: "Deep learning is more recent", es: "Aprendizaje profundo es más reciente", de: "Deep Learning ist neueren Datums", nl: "Deep learning is recenter" },
          { en: "Shallow learning is easier to understand", es: "Aprendizaje superficial es más fácil de entender", de: "Flaches Lernen ist einfacher zu verstehen", nl: "Shallow learning is makkelijker te begrijpen" },
          { en: "They use different data types", es: "Usan diferentes tipos de datos", de: "Sie verwenden verschiedene Datentypen", nl: "Ze gebruiken verschillende datatypes" }
        ],
        correct: 0,
        explanation: {
          en: "Shallow learning uses models with few (1-2) hidden layers like traditional neural networks. Deep learning uses many layers (3+) to learn hierarchical representations, automatically discovering complex features from raw data.",
          es: "El aprendizaje superficial usa modelos con pocas (1-2) capas ocultas como redes neuronales tradicionales. El aprendizaje profundo usa muchas capas (3+) para aprender representaciones jerárquicas, descubriendo automáticamente características complejas de datos en bruto.",
          de: "Flaches Lernen verwendet Modelle mit wenigen (1-2) verborgenen Schichten wie traditionelle neuronale Netzwerke. Tiefes Lernen verwendet viele Schichten (3+) um hierarchische Repräsentationen zu lernen, entdeckt automatisch komplexe Features aus Rohdaten.",
          nl: "Shallow learning gebruikt modellen met weinig (1-2) verborgen lagen zoals traditionele neurale netwerken. Deep learning gebruikt veel lagen (3+) om hiërarchische representaties te leren, ontdekt automatisch complexe features uit ruwe data."
        }
      },
      {
        question: {
          en: "What is model compression?",
          es: "¿Qué es la compresión de modelos?",
          de: "Was ist Modellkompression?",
          nl: "Wat is model compressie?"
        },
        options: [
          { en: "Reducing model size and computational requirements while maintaining performance", es: "Reducir tamaño de modelo y requisitos computacionales mientras se mantiene rendimiento", de: "Modellgröße und Rechenanforderungen reduzieren während Leistung erhalten bleibt", nl: "Modelgrootte en computationele vereisten verminderen terwijl prestaties behouden blijven" },
          { en: "Compressing training data", es: "Comprimir datos de entrenamiento", de: "Trainingsdaten komprimieren", nl: "Trainingsdata comprimeren" },
          { en: "Storing models in zip files", es: "Almacenar modelos en archivos zip", de: "Modelle in Zip-Dateien speichern", nl: "Modellen opslaan in zip bestanden" },
          { en: "Making models run faster", es: "Hacer que los modelos funcionen más rápido", de: "Modelle schneller laufen lassen", nl: "Modellen sneller laten draaien" }
        ],
        correct: 0,
        explanation: {
          en: "Model compression techniques like pruning, quantization, and knowledge distillation reduce model size and inference cost, enabling deployment on resource-constrained devices while preserving accuracy.",
          es: "Técnicas de compresión de modelos como poda, cuantización y destilación de conocimiento reducen tamaño de modelo y costo de inferencia, permitiendo despliegue en dispositivos con recursos limitados mientras preservan precisión.",
          de: "Modellkompressionstechniken wie Pruning, Quantisierung und Knowledge Distillation reduzieren Modellgröße und Inferenzkosten, ermöglichen Einsatz auf ressourcenbeschränkten Geräten während Genauigkeit erhalten bleibt.",
          nl: "Model compressie technieken zoals pruning, kwantisatie en kennis destillatie verminderen modelgrootte en inferentiekosten, maken implementatie mogelijk op apparaten met beperkte middelen terwijl nauwkeurigheid behouden blijft."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
