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
