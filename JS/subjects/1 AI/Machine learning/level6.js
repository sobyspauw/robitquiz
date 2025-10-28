// Machine Learning Quiz - Level 6: Advanced Algorithms and Optimization
(function() {
  const level6 = {
    name: {
      en: "Advanced ML Algorithms",
      es: "Algoritmos Avanzados de ML",
      de: "Fortgeschrittene ML-Algorithmen",
      nl: "Geavanceerde ML Algoritmes"
    },
    questions: [
      {
        question: {
          en: "What is the bias-variance tradeoff in machine learning?",
          es: "¿Qué es el tradeoff sesgo-varianza en machine learning?",
          de: "Was ist der Bias-Varianz-Tradeoff im maschinellen Lernen?",
          nl: "Wat is de bias-variance tradeoff in machine learning?"
        },
        options: [
          { en: "Balance between model simplicity and complexity to minimize total error", es: "Equilibrio entre simplicidad y complejidad del modelo para minimizar error total", de: "Balance zwischen Modellsimplizität und Komplexität zur Minimierung des Gesamtfehlers", nl: "Balans tussen modelsimpliciteit en complexiteit om totale fout te minimaliseren" },
          { en: "Choosing between biased and unbiased training data", es: "Elegir entre datos de entrenamiento sesgados y no sesgados", de: "Wahl zwischen voreingenommenen und unvoreingenommenen Trainingsdaten", nl: "Kiezen tussen bevooroordeelde en onbevooroordeelde trainingsdata" },
          { en: "Trading computational speed for accuracy", es: "Intercambiar velocidad computacional por precisión", de: "Rechengeschwindigkeit gegen Genauigkeit eintauschen", nl: "Computationele snelheid inruilen voor nauwkeurigheid" },
          { en: "Balancing training and testing time", es: "Equilibrar tiempo de entrenamiento y prueba", de: "Training- und Testzeit ausbalancieren", nl: "Trainings- en testtijd balanceren" }
        ],
        correct: 0,
        explanation: {
          en: "The bias-variance tradeoff describes the tension between underfitting (high bias, low variance) and overfitting (low bias, high variance), where the goal is to find the sweet spot that minimizes total prediction error.",
          es: "El tradeoff sesgo-varianza describe la tensión entre underfitting (alto sesgo, baja varianza) y overfitting (bajo sesgo, alta varianza), donde el objetivo es encontrar el punto óptimo que minimiza el error total de predicción.",
          de: "Der Bias-Varianz-Tradeoff beschreibt die Spannung zwischen Underfitting (hoher Bias, niedrige Varianz) und Overfitting (niedriger Bias, hohe Varianz), wobei das Ziel ist, den optimalen Punkt zu finden, der den Gesamtvorhersagefehler minimiert.",
          nl: "De bias-variance tradeoff beschrijft de spanning tussen underfitting (hoge bias, lage variance) en overfitting (lage bias, hoge variance), waarbij het doel is om het optimale punt te vinden dat de totale voorspellingsfout minimaliseert."
        }
      },
      {
        question: {
          en: "What is the difference between bagging and boosting in ensemble methods?",
          es: "¿Cuál es la diferencia entre bagging y boosting en métodos de ensemble?",
          de: "Was ist der Unterschied zwischen Bagging und Boosting in Ensemble-Methoden?",
          nl: "Wat is het verschil tussen bagging en boosting in ensemble methoden?"
        },
        options: [
          { en: "Bagging trains models in parallel, boosting trains sequentially to correct previous errors", es: "Bagging entrena modelos en paralelo, boosting entrena secuencialmente para corregir errores previos", de: "Bagging trainiert Modelle parallel, Boosting trainiert sequenziell um vorherige Fehler zu korrigieren", nl: "Bagging traint modellen parallel, boosting traint sequentieel om vorige fouten te corrigeren" },
          { en: "Bagging uses tree models, boosting uses linear models", es: "Bagging usa modelos de árbol, boosting usa modelos lineales", de: "Bagging verwendet Baummodelle, Boosting verwendet lineare Modelle", nl: "Bagging gebruikt boommodellen, boosting gebruikt lineaire modellen" },
          { en: "Bagging is faster than boosting", es: "Bagging es más rápido que boosting", de: "Bagging ist schneller als Boosting", nl: "Bagging is sneller dan boosting" },
          { en: "Boosting requires more memory than bagging", es: "Boosting requiere más memoria que bagging", de: "Boosting benötigt mehr Speicher als Bagging", nl: "Boosting vereist meer geheugen dan bagging" }
        ],
        correct: 0,
        explanation: {
          en: "Bagging (Bootstrap Aggregating) trains multiple models independently on different subsets of data and averages their predictions, while boosting trains models sequentially, with each model focusing on correcting the mistakes of previous ones.",
          es: "Bagging (Bootstrap Aggregating) entrena múltiples modelos independientemente en diferentes subconjuntos de datos y promedia sus predicciones, mientras boosting entrena modelos secuencialmente, con cada modelo enfocándose en corregir los errores de los anteriores.",
          de: "Bagging (Bootstrap Aggregating) trainiert mehrere Modelle unabhängig auf verschiedenen Datenuntergruppen und mittelt ihre Vorhersagen, während Boosting Modelle sequenziell trainiert, wobei sich jedes Modell darauf konzentriert, die Fehler der vorherigen zu korrigieren.",
          nl: "Bagging (Bootstrap Aggregating) traint meerdere modellen onafhankelijk op verschillende subsets van data en middelt hun voorspellingen, terwijl boosting modellen sequentieel traint, waarbij elk model zich richt op het corrigeren van fouten van vorige modellen."
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
          { en: "Prevent overfitting by adding penalty terms to the loss function", es: "Prevenir overfitting agregando términos de penalización a la función de pérdida", de: "Overfitting verhindern durch Hinzufügen von Straftermen zur Verlustfunktion", nl: "Overfitting voorkomen door straaftermen toe te voegen aan de verliesfunctie" },
          { en: "Make training data more regular and consistent", es: "Hacer que los datos de entrenamiento sean más regulares y consistentes", de: "Trainingsdaten regelmäßiger und konsistenter machen", nl: "Trainingsdata meer regelmatig en consistent maken" },
          { en: "Regularize the learning rate during training", es: "Regularizar la tasa de aprendizaje durante el entrenamiento", de: "Die Lernrate während des Trainings regularisieren", nl: "De learning rate regulariseren tijdens training" },
          { en: "Normalize input features to the same scale", es: "Normalizar características de entrada a la misma escala", de: "Eingabemerkmale auf dieselbe Skala normalisieren", nl: "Input features normaliseren naar dezelfde schaal" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization techniques like L1 (Lasso) and L2 (Ridge) add penalty terms to the loss function that discourage large weights, helping to prevent overfitting and improve model generalization.",
          es: "Las técnicas de regularización como L1 (Lasso) y L2 (Ridge) agregan términos de penalización a la función de pérdida que desalientan pesos grandes, ayudando a prevenir overfitting y mejorar la generalización del modelo.",
          de: "Regularisierungstechniken wie L1 (Lasso) und L2 (Ridge) fügen Strafterme zur Verlustfunktion hinzu, die große Gewichte verhindern und helfen, Overfitting zu verhindern und die Modellgeneralisierung zu verbessern.",
          nl: "Regularisatietechnieken zoals L1 (Lasso) en L2 (Ridge) voegen straaftermen toe aan de verliesfunctie die grote gewichten ontmoedigen, helpen overfitting te voorkomen en modelgeneralisatie te verbeteren."
        }
      },
      {
        question: {
          en: "What is the kernel trick in Support Vector Machines (SVM)?",
          es: "¿Qué es el truco del kernel en Support Vector Machines (SVM)?",
          de: "Was ist der Kernel-Trick in Support Vector Machines (SVM)?",
          nl: "Wat is de kernel trick in Support Vector Machines (SVM)?"
        },
        options: [
          { en: "Transform data to higher dimensions without explicitly computing the transformation", es: "Transformar datos a dimensiones superiores sin calcular explícitamente la transformación", de: "Daten in höhere Dimensionen transformieren ohne explizite Berechnung der Transformation", nl: "Data transformeren naar hogere dimensies zonder expliciet de transformatie te berekenen" },
          { en: "Use multiple kernels in parallel for better performance", es: "Usar múltiples kernels en paralelo para mejor rendimiento", de: "Mehrere Kernel parallel für bessere Leistung verwenden", nl: "Meerdere kernels parallel gebruiken voor betere prestaties" },
          { en: "Optimize the kernel parameters automatically", es: "Optimizar los parámetros del kernel automáticamente", de: "Kernel-Parameter automatisch optimieren", nl: "Kernel parameters automatisch optimaliseren" },
          { en: "Reduce the computational complexity of SVM training", es: "Reducir la complejidad computacional del entrenamiento SVM", de: "Rechenkomplexität des SVM-Trainings reduzieren", nl: "Computationele complexiteit van SVM training verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "The kernel trick allows SVMs to work in high-dimensional feature spaces by computing inner products in the original space using kernel functions, making it computationally efficient to find non-linear decision boundaries.",
          es: "El truco del kernel permite a las SVM trabajar en espacios de características de alta dimensión calculando productos internos en el espacio original usando funciones kernel, haciendo computacionalmente eficiente encontrar límites de decisión no lineales.",
          de: "Der Kernel-Trick ermöglicht SVMs in hochdimensionalen Merkmalsräumen zu arbeiten, indem Innenprodukte im ursprünglichen Raum mit Kernel-Funktionen berechnet werden, macht es rechnerisch effizient, nichtlineare Entscheidungsgrenzen zu finden.",
          nl: "De kernel trick stelt SVMs in staat om te werken in hoogdimensionale feature spaces door inner products in de oorspronkelijke ruimte te berekenen met kernel functies, maakt het computationeel efficiënt om niet-lineaire beslissingsgrenzen te vinden."
        }
      },
      {
        question: {
          en: "What is the Expectation-Maximization (EM) algorithm used for?",
          es: "¿Para qué se usa el algoritmo Expectation-Maximization (EM)?",
          de: "Wofür wird der Expectation-Maximization (EM) Algorithmus verwendet?",
          nl: "Waarvoor wordt het Expectation-Maximization (EM) algoritme gebruikt?"
        },
        options: [
          { en: "Finding maximum likelihood estimates when some data is missing or hidden", es: "Encontrar estimaciones de máxima verosimilitud cuando algunos datos faltan o están ocultos", de: "Maximum-Likelihood-Schätzungen finden wenn einige Daten fehlen oder verborgen sind", nl: "Maximum likelihood schattingen vinden wanneer sommige data ontbreekt of verborgen is" },
          { en: "Maximizing computational efficiency during training", es: "Maximizar la eficiencia computacional durante el entrenamiento", de: "Rechnerische Effizienz während des Trainings maximieren", nl: "Computationele efficiëntie maximaliseren tijdens training" },
          { en: "Estimating the expected runtime of algorithms", es: "Estimar el tiempo de ejecución esperado de algoritmos", de: "Erwartete Laufzeit von Algorithmen schätzen", nl: "Verwachte runtime van algoritmes schatten" },
          { en: "Maximizing the expectation of prediction accuracy", es: "Maximizar la expectativa de precisión de predicción", de: "Erwartung der Vorhersagegenauigkeit maximieren", nl: "Verwachting van voorspellingsnauwkeurigheid maximaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "EM algorithm iteratively estimates missing data (Expectation step) and updates model parameters (Maximization step) to find maximum likelihood estimates, commonly used in clustering algorithms like Gaussian Mixture Models.",
          es: "El algoritmo EM estima iterativamente datos faltantes (paso de Expectativa) y actualiza parámetros del modelo (paso de Maximización) para encontrar estimaciones de máxima verosimilitud, comúnmente usado en algoritmos de clustering como Modelos de Mezcla Gaussiana.",
          de: "EM-Algorithmus schätzt iterativ fehlende Daten (Expectation-Schritt) und aktualisiert Modellparameter (Maximization-Schritt) um Maximum-Likelihood-Schätzungen zu finden, häufig verwendet in Clustering-Algorithmen wie Gaussian Mixture Models.",
          nl: "EM algoritme schat iteratief ontbrekende data (Expectation stap) en werkt modelparameters bij (Maximization stap) om maximum likelihood schattingen te vinden, vaak gebruikt in clustering algoritmes zoals Gaussian Mixture Models."
        }
      },
      {
        question: {
          en: "What is the difference between Random Forest and AdaBoost in ensemble learning?",
          es: "¿Cuál es la diferencia entre Random Forest y AdaBoost en aprendizaje de conjunto?",
          de: "Was ist der Unterschied zwischen Random Forest und AdaBoost im Ensemble Learning?",
          nl: "Wat is het verschil tussen Random Forest en AdaBoost in ensemble learning?"
        },
        options: [
          { en: "Random Forest uses parallel bagging with random features, AdaBoost uses sequential boosting with weighted samples", es: "Random Forest usa bagging paralelo con características aleatorias, AdaBoost usa boosting secuencial con muestras ponderadas", de: "Random Forest verwendet paralleles Bagging mit zufälligen Features, AdaBoost verwendet sequenzielles Boosting mit gewichteten Stichproben", nl: "Random Forest gebruikt parallelle bagging met willekeurige features, AdaBoost gebruikt sequentiële boosting met gewogen samples" },
          { en: "Random Forest is only for classification, AdaBoost only for regression", es: "Random Forest es solo para clasificación, AdaBoost solo para regresión", de: "Random Forest ist nur für Klassifikation, AdaBoost nur für Regression", nl: "Random Forest is alleen voor classificatie, AdaBoost alleen voor regressie" },
          { en: "AdaBoost is always faster than Random Forest", es: "AdaBoost siempre es más rápido que Random Forest", de: "AdaBoost ist immer schneller als Random Forest", nl: "AdaBoost is altijd sneller dan Random Forest" },
          { en: "Random Forest requires more memory than AdaBoost", es: "Random Forest requiere más memoria que AdaBoost", de: "Random Forest benötigt mehr Speicher als AdaBoost", nl: "Random Forest vereist meer geheugen dan AdaBoost" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest builds many decision trees in parallel using bootstrap samples and random feature subsets, averaging predictions. AdaBoost builds trees sequentially, giving more weight to misclassified samples, making each tree focus on previous errors.",
          es: "Random Forest construye muchos árboles de decisión en paralelo usando muestras bootstrap y subconjuntos de características aleatorias, promediando predicciones. AdaBoost construye árboles secuencialmente, dando más peso a muestras mal clasificadas, haciendo que cada árbol se enfoque en errores previos.",
          de: "Random Forest baut viele Entscheidungsbäume parallel mit Bootstrap-Stichproben und zufälligen Feature-Untergruppen, mittelt Vorhersagen. AdaBoost baut Bäume sequenziell, gibt mehr Gewicht auf falsch klassifizierte Stichproben, macht dass jeder Baum sich auf vorherige Fehler konzentriert.",
          nl: "Random Forest bouwt veel beslisbomen parallel met bootstrap samples en willekeurige feature subsets, middelt voorspellingen. AdaBoost bouwt bomen sequentieel, geeft meer gewicht aan verkeerd geclassificeerde samples, zorgt dat elke boom zich richt op vorige fouten."
        }
      },
      {
        question: {
          en: "What is Gradient Boosting and how does it differ from traditional boosting methods?",
          es: "¿Qué es Gradient Boosting y cómo difiere de métodos tradicionales de boosting?",
          de: "Was ist Gradient Boosting und wie unterscheidet es sich von traditionellen Boosting-Methoden?",
          nl: "Wat is Gradient Boosting en hoe verschilt het van traditionele boosting methoden?"
        },
        options: [
          { en: "Optimizes loss function by fitting new models to residual errors using gradient descent", es: "Optimiza función de pérdida ajustando nuevos modelos a errores residuales usando descenso de gradiente", de: "Optimiert Verlustfunktion durch Anpassen neuer Modelle an Residualfehler mit Gradientenabstieg", nl: "Optimaliseert verliesfunctie door nieuwe modellen te fitten aan residuele fouten met gradient descent" },
          { en: "Uses only gradient-based algorithms as base learners", es: "Usa solo algoritmos basados en gradiente como aprendices base", de: "Verwendet nur gradientenbasierte Algorithmen als Base Learner", nl: "Gebruikt alleen gradiënt-gebaseerde algoritmes als basis learners" },
          { en: "Applies gradient normalization to training data", es: "Aplica normalización de gradiente a datos de entrenamiento", de: "Wendet Gradientennormalisierung auf Trainingsdaten an", nl: "Past gradiëntnormalisatie toe op trainingsdata" },
          { en: "Boosts only gradient features in the dataset", es: "Impulsa solo características de gradiente en el conjunto de datos", de: "Verstärkt nur Gradientenmerkmale im Datensatz", nl: "Boost alleen gradiënt features in de dataset" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient Boosting builds models sequentially, where each new model is trained to predict the residuals (errors) of the previous models, optimizing any differentiable loss function through gradient descent, making it more flexible than AdaBoost which only works with exponential loss.",
          es: "Gradient Boosting construye modelos secuencialmente, donde cada nuevo modelo se entrena para predecir los residuos (errores) de modelos anteriores, optimizando cualquier función de pérdida diferenciable a través de descenso de gradiente, haciéndolo más flexible que AdaBoost que solo funciona con pérdida exponencial.",
          de: "Gradient Boosting baut Modelle sequenziell, wobei jedes neue Modell trainiert wird um die Residuen (Fehler) der vorherigen Modelle vorherzusagen, optimiert jede differenzierbare Verlustfunktion durch Gradientenabstieg, macht es flexibler als AdaBoost das nur mit exponentialem Verlust funktioniert.",
          nl: "Gradient Boosting bouwt modellen sequentieel, waarbij elk nieuw model wordt getraind om de residuen (fouten) van vorige modellen te voorspellen, optimaliseert elke differentieerbare verliesfunctie door gradient descent, maakt het flexibeler dan AdaBoost dat alleen werkt met exponentieel verlies."
        }
      },
      {
        question: {
          en: "What is XGBoost and what key innovations make it superior to traditional gradient boosting?",
          es: "¿Qué es XGBoost y qué innovaciones clave lo hacen superior al gradient boosting tradicional?",
          de: "Was ist XGBoost und welche Schlüsselinnovationen machen es traditionellem Gradient Boosting überlegen?",
          nl: "Wat is XGBoost en welke belangrijke innovaties maken het superieur aan traditionele gradient boosting?"
        },
        options: [
          { en: "Extreme gradient boosting with regularization, parallel processing, handling missing values, and advanced tree construction", es: "Gradient boosting extremo con regularización, procesamiento paralelo, manejo de valores faltantes y construcción avanzada de árboles", de: "Extremes Gradient Boosting mit Regularisierung, Parallelverarbeitung, Behandlung fehlender Werte und fortgeschrittener Baumkonstruktion", nl: "Extreme gradient boosting met regularisatie, parallelle verwerking, behandeling van missende waarden en geavanceerde boomconstructie" },
          { en: "Extra gradient computation for better optimization", es: "Computación extra de gradiente para mejor optimización", de: "Extra Gradientenberechnung für bessere Optimierung", nl: "Extra gradiëntberekening voor betere optimalisatie" },
          { en: "Extended gradient boosting that works only with large datasets", es: "Gradient boosting extendido que funciona solo con conjuntos de datos grandes", de: "Erweitertes Gradient Boosting das nur mit großen Datensätzen funktioniert", nl: "Uitgebreide gradient boosting die alleen werkt met grote datasets" },
          { en: "Experimental gradient boosting for research purposes", es: "Gradient boosting experimental para propósitos de investigación", de: "Experimentelles Gradient Boosting für Forschungszwecke", nl: "Experimentele gradient boosting voor onderzoeksdoeleinden" }
        ],
        correct: 0,
        explanation: {
          en: "XGBoost (eXtreme Gradient Boosting) introduces several optimizations: L1/L2 regularization to prevent overfitting, column subsampling, efficient handling of sparse data and missing values, parallel tree construction, and advanced pruning techniques, making it highly effective for structured data competitions.",
          es: "XGBoost (eXtreme Gradient Boosting) introduce varias optimizaciones: regularización L1/L2 para prevenir overfitting, submuestreo de columnas, manejo eficiente de datos dispersos y valores faltantes, construcción paralela de árboles y técnicas avanzadas de poda, haciéndolo altamente efectivo para competencias de datos estructurados.",
          de: "XGBoost (eXtreme Gradient Boosting) führt mehrere Optimierungen ein: L1/L2-Regularisierung zur Verhinderung von Overfitting, Spalten-Subsampling, effiziente Behandlung spärlicher Daten und fehlender Werte, parallele Baumkonstruktion und fortgeschrittene Pruning-Techniken, macht es hocheffektiv für strukturierte Datenwettbewerbe.",
          nl: "XGBoost (eXtreme Gradient Boosting) introduceert verschillende optimalisaties: L1/L2 regularisatie om overfitting te voorkomen, kolom subsampling, efficiënte behandeling van sparse data en missende waarden, parallelle boomconstructie en geavanceerde pruning technieken, maakt het zeer effectief voor gestructureerde datawedstrijden."
        }
      },
      {
        question: {
          en: "What is the difference between hard and soft voting in ensemble methods?",
          es: "¿Cuál es la diferencia entre votación dura y suave en métodos de conjunto?",
          de: "Was ist der Unterschied zwischen Hard- und Soft-Voting in Ensemble-Methoden?",
          nl: "Wat is het verschil tussen hard en soft voting in ensemble methoden?"
        },
        options: [
          { en: "Hard voting uses class predictions, soft voting uses predicted probabilities", es: "Votación dura usa predicciones de clase, votación suave usa probabilidades predichas", de: "Hard Voting verwendet Klassenvorhersagen, Soft Voting verwendet vorhergesagte Wahrscheinlichkeiten", nl: "Hard voting gebruikt klassevoorspellingen, soft voting gebruikt voorspelde kansen" },
          { en: "Hard voting is faster than soft voting", es: "Votación dura es más rápida que votación suave", de: "Hard Voting ist schneller als Soft Voting", nl: "Hard voting is sneller dan soft voting" },
          { en: "Soft voting requires more computational resources", es: "Votación suave requiere más recursos computacionales", de: "Soft Voting benötigt mehr Rechenressourcen", nl: "Soft voting vereist meer computationele middelen" },
          { en: "Hard voting works only with tree-based models", es: "Votación dura funciona solo con modelos basados en árboles", de: "Hard Voting funktioniert nur mit baumbasierten Modellen", nl: "Hard voting werkt alleen met boom-gebaseerde modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Hard voting takes the majority vote of predicted class labels from ensemble members, while soft voting averages the predicted probabilities from each classifier and assigns the class with highest average probability, often providing better performance when classifiers output well-calibrated probabilities.",
          es: "Votación dura toma la votación mayoritaria de etiquetas de clase predichas de miembros del conjunto, mientras votación suave promedia las probabilidades predichas de cada clasificador y asigna la clase con mayor probabilidad promedio, a menudo proporcionando mejor rendimiento cuando clasificadores producen probabilidades bien calibradas.",
          de: "Hard Voting nimmt die Mehrheitsstimme der vorhergesagten Klassenlabels von Ensemble-Mitgliedern, während Soft Voting die vorhergesagten Wahrscheinlichkeiten von jedem Klassifikator mittelt und die Klasse mit der höchsten durchschnittlichen Wahrscheinlichkeit zuweist, bietet oft bessere Leistung wenn Klassifikatoren gut kalibrierte Wahrscheinlichkeiten ausgeben.",
          nl: "Hard voting neemt de meerderheidstem van voorspelde klasselabels van ensemble leden, terwijl soft voting de voorspelde kansen van elke classifier middelt en de klasse met hoogste gemiddelde kans toewijst, biedt vaak betere prestaties wanneer classifiers goed gekalibreerde kansen uitgeven."
        }
      },
      {
        question: {
          en: "What is stacking (stacked generalization) in ensemble learning?",
          es: "¿Qué es el apilamiento (generalización apilada) en aprendizaje de conjunto?",
          de: "Was ist Stacking (gestapelte Generalisierung) im Ensemble Learning?",
          nl: "Wat is stacking (gestapelde generalisatie) in ensemble learning?"
        },
        options: [
          { en: "Training a meta-learner to combine predictions from multiple base models optimally", es: "Entrenar un meta-aprendiz para combinar predicciones de múltiples modelos base de manera óptima", de: "Training eines Meta-Learners um Vorhersagen von mehreren Basismodellen optimal zu kombinieren", nl: "Training van een meta-learner om voorspellingen van meerdere basismodellen optimaal te combineren" },
          { en: "Stacking multiple layers in deep neural networks", es: "Apilar múltiples capas en redes neuronales profundas", de: "Mehrere Schichten in tiefen neuronalen Netzwerken stapeln", nl: "Meerdere lagen stapelen in diepe neurale netwerken" },
          { en: "Storing model predictions in a stack data structure", es: "Almacenar predicciones de modelos en una estructura de datos de pila", de: "Modellvorhersagen in einer Stack-Datenstruktur speichern", nl: "Modelvoorspellingen opslaan in een stack datastructuur" },
          { en: "Training models sequentially in a stacked manner", es: "Entrenar modelos secuencialmente de manera apilada", de: "Modelle sequenziell auf gestapelte Weise trainieren", nl: "Modellen sequentieel trainen op een gestapelde manier" }
        ],
        correct: 0,
        explanation: {
          en: "Stacking uses a meta-learner (blender) that learns how to best combine predictions from diverse base models by training on their outputs, potentially capturing complex relationships between different model predictions and often achieving better performance than simple voting.",
          es: "El apilamiento usa un meta-aprendiz (mezclador) que aprende cómo combinar mejor predicciones de modelos base diversos entrenando en sus salidas, potencialmente capturando relaciones complejas entre diferentes predicciones de modelos y a menudo logrando mejor rendimiento que votación simple.",
          de: "Stacking verwendet einen Meta-Learner (Blender) der lernt wie man Vorhersagen von verschiedenen Basismodellen am besten kombiniert durch Training auf ihren Ausgaben, erfasst potentiell komplexe Beziehungen zwischen verschiedenen Modellvorhersagen und erreicht oft bessere Leistung als einfaches Voting.",
          nl: "Stacking gebruikt een meta-learner (blender) die leert hoe voorspellingen van diverse basismodellen het beste te combineren door te trainen op hun outputs, vangt mogelijk complexe relaties tussen verschillende modelvoorspellingen en behaalt vaak betere prestaties dan eenvoudige voting."
        }
      },
      {
        question: {
          en: "What is the kernel trick's computational advantage in Support Vector Machines?",
          es: "¿Cuál es la ventaja computacional del truco del kernel en Support Vector Machines?",
          de: "Was ist der rechnerische Vorteil des Kernel-Tricks in Support Vector Machines?",
          nl: "Wat is het computationele voordeel van de kernel trick in Support Vector Machines?"
        },
        options: [
          { en: "Enables non-linear classification without explicitly computing high-dimensional feature transformations", es: "Permite clasificación no lineal sin calcular explícitamente transformaciones de características de alta dimensión", de: "Ermöglicht nichtlineare Klassifikation ohne explizite Berechnung hochdimensionaler Feature-Transformationen", nl: "Maakt niet-lineaire classificatie mogelijk zonder expliciet hoogdimensionale feature transformaties te berekenen" },
          { en: "Reduces the number of support vectors needed", es: "Reduce el número de vectores de soporte necesarios", de: "Reduziert die Anzahl der benötigten Support Vectors", nl: "Vermindert het aantal benodigde support vectors" },
          { en: "Speeds up the optimization algorithm convergence", es: "Acelera la convergencia del algoritmo de optimización", de: "Beschleunigt die Konvergenz des Optimierungsalgorithmus", nl: "Versnelt de convergentie van het optimalisatie-algoritme" },
          { en: "Automatically selects optimal hyperparameters", es: "Selecciona automáticamente hiperparámetros óptimos", de: "Wählt automatisch optimale Hyperparameter", nl: "Selecteert automatisch optimale hyperparameters" }
        ],
        correct: 0,
        explanation: {
          en: "The kernel trick computes inner products in transformed feature spaces using kernel functions (like RBF or polynomial) without explicitly mapping data to those high-dimensional spaces, making non-linear SVMs computationally feasible by avoiding the curse of dimensionality.",
          es: "El truco del kernel calcula productos internos en espacios de características transformados usando funciones kernel (como RBF o polinomial) sin mapear explícitamente datos a esos espacios de alta dimensión, haciendo SVMs no lineales computacionalmente factibles evitando la maldición de la dimensionalidad.",
          de: "Der Kernel-Trick berechnet Innenprodukte in transformierten Merkmalsräumen mit Kernel-Funktionen (wie RBF oder Polynomial) ohne explizite Abbildung der Daten in diese hochdimensionalen Räume, macht nichtlineare SVMs rechnerisch machbar durch Vermeidung des Fluchs der Dimensionalität.",
          nl: "De kernel trick berekent inner products in getransformeerde feature spaces met kernel functies (zoals RBF of polynomiaal) zonder expliciet data te mappen naar die hoogdimensionale ruimtes, maakt niet-lineaire SVMs computationeel haalbaar door de vloek van dimensionaliteit te vermijden."
        }
      },
      {
        question: {
          en: "What is the difference between one-vs-one and one-vs-rest strategies for multi-class classification?",
          es: "¿Cuál es la diferencia entre estrategias uno-vs-uno y uno-vs-resto para clasificación multi-clase?",
          de: "Was ist der Unterschied zwischen One-vs-One und One-vs-Rest Strategien für Multi-Klassen-Klassifikation?",
          nl: "Wat is het verschil tussen one-vs-one en one-vs-rest strategieën voor multi-class classificatie?"
        },
        options: [
          { en: "One-vs-one trains n(n-1)/2 binary classifiers between each pair, one-vs-rest trains n classifiers against all others", es: "Uno-vs-uno entrena n(n-1)/2 clasificadores binarios entre cada par, uno-vs-resto entrena n clasificadores contra todos los otros", de: "One-vs-One trainiert n(n-1)/2 binäre Klassifikatoren zwischen jedem Paar, One-vs-Rest trainiert n Klassifikatoren gegen alle anderen", nl: "One-vs-one traint n(n-1)/2 binaire classifiers tussen elk paar, one-vs-rest traint n classifiers tegen alle anderen" },
          { en: "One-vs-one is always faster than one-vs-rest", es: "Uno-vs-uno siempre es más rápido que uno-vs-resto", de: "One-vs-One ist immer schneller als One-vs-Rest", nl: "One-vs-one is altijd sneller dan one-vs-rest" },
          { en: "One-vs-rest requires more memory than one-vs-one", es: "Uno-vs-resto requiere más memoria que uno-vs-uno", de: "One-vs-Rest benötigt mehr Speicher als One-vs-One", nl: "One-vs-rest vereist meer geheugen dan one-vs-one" },
          { en: "One-vs-one only works with tree-based classifiers", es: "Uno-vs-uno solo funciona con clasificadores basados en árboles", de: "One-vs-One funktioniert nur mit baumbasierten Klassifikatoren", nl: "One-vs-one werkt alleen met boom-gebaseerde classifiers" }
        ],
        correct: 0,
        explanation: {
          en: "One-vs-one creates a binary classifier for every pair of classes, requiring more classifiers but smaller training sets per classifier. One-vs-rest creates one classifier per class against all remaining classes, requiring fewer classifiers but larger, potentially imbalanced training sets.",
          es: "Uno-vs-uno crea un clasificador binario para cada par de clases, requiriendo más clasificadores pero conjuntos de entrenamiento más pequeños por clasificador. Uno-vs-resto crea un clasificador por clase contra todas las clases restantes, requiriendo menos clasificadores pero conjuntos de entrenamiento más grandes, potencialmente desbalanceados.",
          de: "One-vs-One erstellt einen binären Klassifikator für jedes Klassenpaar, benötigt mehr Klassifikatoren aber kleinere Trainingssätze pro Klassifikator. One-vs-Rest erstellt einen Klassifikator pro Klasse gegen alle verbleibenden Klassen, benötigt weniger Klassifikatoren aber größere, potentiell unausgewogene Trainingssätze.",
          nl: "One-vs-one creëert een binaire classifier voor elk paar klassen, vereist meer classifiers maar kleinere trainingssets per classifier. One-vs-rest creëert één classifier per klasse tegen alle resterende klassen, vereist minder classifiers maar grotere, mogelijk ongebalanceerde trainingssets."
        }
      },
      {
        question: {
          en: "What is the purpose of feature importance in Random Forest and how is it calculated?",
          es: "¿Cuál es el propósito de la importancia de características en Random Forest y cómo se calcula?",
          de: "Was ist der Zweck der Feature-Wichtigkeit in Random Forest und wie wird sie berechnet?",
          nl: "Wat is het doel van feature importance in Random Forest en hoe wordt het berekend?"
        },
        options: [
          { en: "Measures feature contribution by calculating decrease in node impurity weighted by sample probability", es: "Mide contribución de características calculando disminución en impureza de nodo ponderada por probabilidad de muestra", de: "Misst Feature-Beitrag durch Berechnung der Abnahme der Knotenunreinheit gewichtet nach Stichprobenwahrscheinlichkeit", nl: "Meet feature bijdrage door afname in node impurity gewogen naar sample kans te berekenen" },
          { en: "Ranks features by their correlation with target variable", es: "Clasifica características por su correlación con variable objetivo", de: "Ordnet Features nach ihrer Korrelation mit der Zielvariable", nl: "Rankt features naar hun correlatie met doelvariabele" },
          { en: "Counts how often each feature appears in decision trees", es: "Cuenta cuántas veces aparece cada característica en árboles de decisión", de: "Zählt wie oft jedes Feature in Entscheidungsbäumen erscheint", nl: "Telt hoe vaak elke feature voorkomt in beslisbomen" },
          { en: "Measures the depth at which features are used in trees", es: "Mide la profundidad en la que se usan características en árboles", de: "Misst die Tiefe in der Features in Bäumen verwendet werden", nl: "Meet de diepte waarop features worden gebruikt in bomen" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest calculates feature importance by measuring how much each feature decreases node impurity (Gini or entropy) when used for splits, weighted by the probability of reaching each node. Features that consistently provide good splits across trees receive higher importance scores.",
          es: "Random Forest calcula importancia de características midiendo cuánto cada característica disminuye la impureza del nodo (Gini o entropía) cuando se usa para divisiones, ponderado por la probabilidad de alcanzar cada nodo. Características que consistentemente proporcionan buenas divisiones a través de árboles reciben puntuaciones de importancia más altas.",
          de: "Random Forest berechnet Feature-Wichtigkeit durch Messung wie viel jedes Feature die Knotenunreinheit (Gini oder Entropie) verringert wenn für Splits verwendet, gewichtet nach der Wahrscheinlichkeit jeden Knoten zu erreichen. Features die konsistent gute Splits über Bäume bieten erhalten höhere Wichtigkeitswerte.",
          nl: "Random Forest berekent feature importance door te meten hoeveel elke feature de node impurity (Gini of entropy) vermindert wanneer gebruikt voor splits, gewogen naar de kans om elke node te bereiken. Features die consistent goede splits leveren over bomen krijgen hogere importance scores."
        }
      },
      {
        question: {
          en: "What is early stopping in gradient boosting and why is it important?",
          es: "¿Qué es la parada temprana en gradient boosting y por qué es importante?",
          de: "Was ist Early Stopping im Gradient Boosting und warum ist es wichtig?",
          nl: "Wat is early stopping in gradient boosting en waarom is het belangrijk?"
        },
        options: [
          { en: "Stops training when validation error stops improving to prevent overfitting and save computation", es: "Detiene entrenamiento cuando error de validación deja de mejorar para prevenir overfitting y ahorrar computación", de: "Stoppt Training wenn Validierungsfehler sich nicht mehr verbessert um Overfitting zu verhindern und Berechnung zu sparen", nl: "Stopt training wanneer validatiefout stopt met verbeteren om overfitting te voorkomen en berekening te besparen" },
          { en: "Stops adding new features to the model", es: "Deja de agregar nuevas características al modelo", de: "Stoppt das Hinzufügen neuer Features zum Modell", nl: "Stopt met het toevoegen van nieuwe features aan het model" },
          { en: "Terminates weak learners that perform poorly", es: "Termina aprendices débiles que funcionan mal", de: "Beendet schwache Lerner die schlecht funktionieren", nl: "Beëindigt zwakke learners die slecht presteren" },
          { en: "Reduces the learning rate automatically", es: "Reduce la tasa de aprendizaje automáticamente", de: "Reduziert die Lernrate automatisch", nl: "Vermindert de learning rate automatisch" }
        ],
        correct: 0,
        explanation: {
          en: "Early stopping monitors validation performance during gradient boosting training and halts when the validation error starts increasing or plateaus, preventing overfitting and reducing computational cost. It's essential for finding the optimal number of boosting iterations.",
          es: "La parada temprana monitorea el rendimiento de validación durante el entrenamiento de gradient boosting y se detiene cuando el error de validación comienza a aumentar o se estabiliza, previniendo overfitting y reduciendo costo computacional. Es esencial para encontrar el número óptimo de iteraciones de boosting.",
          de: "Early Stopping überwacht Validierungsleistung während Gradient Boosting Training und stoppt wenn der Validierungsfehler zu steigen beginnt oder stagniert, verhindert Overfitting und reduziert Rechenkosten. Es ist wesentlich um die optimale Anzahl von Boosting-Iterationen zu finden.",
          nl: "Early stopping monitort validatieprestaties tijdens gradient boosting training en stopt wanneer de validatiefout begint te stijgen of stagneert, voorkomt overfitting en vermindert computationele kosten. Het is essentieel voor het vinden van het optimale aantal boosting iteraties."
        }
      },
      {
        question: {
          en: "What is the difference between L1 and L2 regularization in the context of ensemble methods?",
          es: "¿Cuál es la diferencia entre regularización L1 y L2 en el contexto de métodos de conjunto?",
          de: "Was ist der Unterschied zwischen L1- und L2-Regularisierung im Kontext von Ensemble-Methoden?",
          nl: "Wat is het verschil tussen L1 en L2 regularisatie in de context van ensemble methoden?"
        },
        options: [
          { en: "L1 promotes sparsity by zeroing weights, L2 shrinks weights towards zero uniformly", es: "L1 promueve dispersión al hacer cero pesos, L2 encoge pesos hacia cero uniformemente", de: "L1 fördert Sparsität durch Nullsetzen von Gewichten, L2 schrumpft Gewichte gleichmäßig gegen Null", nl: "L1 bevordert sparsity door gewichten op nul te zetten, L2 krimpt gewichten uniform naar nul" },
          { en: "L1 is faster to compute than L2 regularization", es: "L1 es más rápido de calcular que regularización L2", de: "L1 ist schneller zu berechnen als L2-Regularisierung", nl: "L1 is sneller te berekenen dan L2 regularisatie" },
          { en: "L2 works only with tree-based ensemble methods", es: "L2 funciona solo con métodos de conjunto basados en árboles", de: "L2 funktioniert nur mit baumbasierten Ensemble-Methoden", nl: "L2 werkt alleen met boom-gebaseerde ensemble methoden" },
          { en: "L1 prevents overfitting better than L2", es: "L1 previene overfitting mejor que L2", de: "L1 verhindert Overfitting besser als L2", nl: "L1 voorkomt overfitting beter dan L2" }
        ],
        correct: 0,
        explanation: {
          en: "L1 regularization (Lasso) adds the sum of absolute weights as penalty, encouraging sparse solutions where some weights become exactly zero, effectively performing feature selection. L2 regularization (Ridge) adds sum of squared weights, shrinking all weights but rarely making them exactly zero.",
          es: "Regularización L1 (Lasso) agrega la suma de pesos absolutos como penalización, alentando soluciones dispersas donde algunos pesos se vuelven exactamente cero, efectivamente realizando selección de características. Regularización L2 (Ridge) agrega suma de pesos al cuadrado, encogiendo todos los pesos pero raramente haciéndolos exactamente cero.",
          de: "L1-Regularisierung (Lasso) fügt die Summe der absoluten Gewichte als Strafe hinzu, ermutigt spärliche Lösungen wo einige Gewichte genau Null werden, führt effektiv Feature-Selektion durch. L2-Regularisierung (Ridge) fügt Summe der quadrierten Gewichte hinzu, schrumpft alle Gewichte aber macht sie selten genau Null.",
          nl: "L1 regularisatie (Lasso) voegt de som van absolute gewichten toe als straf, moedigt sparse oplossingen aan waar sommige gewichten exact nul worden, voert effectief feature selectie uit. L2 regularisatie (Ridge) voegt som van gekwadrateerde gewichten toe, krimpt alle gewichten maar maakt ze zelden exact nul."
        }
      },
      {
        question: {
          en: "What is out-of-bag (OOB) error estimation in Random Forest?",
          es: "¿Qué es la estimación de error out-of-bag (OOB) en Random Forest?",
          de: "Was ist Out-of-Bag (OOB) Fehlerschätzung in Random Forest?",
          nl: "Wat is out-of-bag (OOB) foutschatting in Random Forest?"
        },
        options: [
          { en: "Validation using samples not included in bootstrap training sets of individual trees", es: "Validación usando muestras no incluidas en conjuntos de entrenamiento bootstrap de árboles individuales", de: "Validierung mit Stichproben die nicht in Bootstrap-Trainingssätzen einzelner Bäume enthalten sind", nl: "Validatie met samples die niet zijn opgenomen in bootstrap trainingssets van individuele bomen" },
          { en: "Error calculation for samples outside the training dataset", es: "Cálculo de error para muestras fuera del conjunto de datos de entrenamiento", de: "Fehlerberechnung für Stichproben außerhalb des Trainingsdatensatzes", nl: "Foutberekening voor samples buiten de trainingsdataset" },
          { en: "Estimation of bagging overhead costs", es: "Estimación de costos generales de bagging", de: "Schätzung von Bagging-Overhead-Kosten", nl: "Schatting van bagging overhead kosten" },
          { en: "Prediction accuracy for outlier detection", es: "Precisión de predicción para detección de valores atípicos", de: "Vorhersagegenauigkeit für Ausreißererkennung", nl: "Voorspellingsnauwkeurigheid voor uitbijter detectie" }
        ],
        correct: 0,
        explanation: {
          en: "OOB error uses approximately 1/3 of samples that weren't selected in each tree's bootstrap sample for validation, providing an unbiased estimate of model performance without requiring a separate validation set, making it a built-in cross-validation mechanism.",
          es: "Error OOB usa aproximadamente 1/3 de muestras que no fueron seleccionadas en la muestra bootstrap de cada árbol para validación, proporcionando una estimación no sesgada del rendimiento del modelo sin requerir un conjunto de validación separado, haciéndolo un mecanismo de validación cruzada incorporado.",
          de: "OOB-Fehler verwendet etwa 1/3 der Stichproben die nicht in der Bootstrap-Stichprobe jedes Baums ausgewählt wurden für Validierung, bietet eine unvoreingenommene Schätzung der Modellleistung ohne separaten Validierungssatz zu benötigen, macht es zu einem eingebauten Kreuzvalidierungsmechanismus.",
          nl: "OOB fout gebruikt ongeveer 1/3 van samples die niet werden geselecteerd in elke boom's bootstrap sample voor validatie, biedt een onbevooroordeelde schatting van modelprestaties zonder een aparte validatieset te vereisen, maakt het een ingebouwd cross-validatie mechanisme."
        }
      },
      {
        question: {
          en: "What is the concept of diversity in ensemble learning and why is it crucial?",
          es: "¿Qué es el concepto de diversidad en aprendizaje de conjunto y por qué es crucial?",
          de: "Was ist das Konzept der Diversität im Ensemble Learning und warum ist es entscheidend?",
          nl: "Wat is het concept van diversiteit in ensemble learning en waarom is het cruciaal?"
        },
        options: [
          { en: "Different models making different types of errors, leading to reduced overall error through error cancellation", es: "Diferentes modelos cometiendo diferentes tipos de errores, llevando a error general reducido a través de cancelación de errores", de: "Verschiedene Modelle machen verschiedene Arten von Fehlern, führt zu reduziertem Gesamtfehler durch Fehlerlöschung", nl: "Verschillende modellen maken verschillende soorten fouten, leidt tot verminderde totale fout door foutannulering" },
          { en: "Using models from different programming languages", es: "Usar modelos de diferentes lenguajes de programación", de: "Verwendung von Modellen aus verschiedenen Programmiersprachen", nl: "Het gebruik van modellen uit verschillende programmeertalen" },
          { en: "Training models on datasets with diverse topics", es: "Entrenar modelos en conjuntos de datos con temas diversos", de: "Training von Modellen auf Datensätzen mit verschiedenen Themen", nl: "Training van modellen op datasets met diverse onderwerpen" },
          { en: "Including models with different computational complexities", es: "Incluir modelos con diferentes complejidades computacionales", de: "Einbeziehung von Modellen mit verschiedenen rechnerischen Komplexitäten", nl: "Het opnemen van modellen met verschillende computationele complexiteiten" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble diversity ensures that individual models make different mistakes, so when combined, their errors can cancel out while correct predictions reinforce each other. This is achieved through different algorithms, training data subsets, feature subsets, or hyperparameters, maximizing ensemble effectiveness.",
          es: "La diversidad de conjunto asegura que modelos individuales cometan diferentes errores, así que cuando se combinan, sus errores pueden cancelarse mientras predicciones correctas se refuerzan entre sí. Esto se logra a través de diferentes algoritmos, subconjuntos de datos de entrenamiento, subconjuntos de características o hiperparámetros, maximizando efectividad del conjunto.",
          de: "Ensemble-Diversität stellt sicher dass individuelle Modelle verschiedene Fehler machen, so dass wenn kombiniert ihre Fehler sich aufheben können während korrekte Vorhersagen sich gegenseitig verstärken. Dies wird durch verschiedene Algorithmen, Trainingsdaten-Untergruppen, Feature-Untergruppen oder Hyperparameter erreicht, maximiert Ensemble-Effektivität.",
          nl: "Ensemble diversiteit zorgt ervoor dat individuele modellen verschillende fouten maken, zodat wanneer gecombineerd hun fouten kunnen uitvallen terwijl correcte voorspellingen elkaar versterken. Dit wordt bereikt door verschillende algoritmes, trainingsdata subsets, feature subsets of hyperparameters, maximaliseert ensemble effectiviteit."
        }
      },
      {
        question: {
          en: "What is the difference between homogeneous and heterogeneous ensembles?",
          es: "¿Cuál es la diferencia entre conjuntos homogéneos y heterogéneos?",
          de: "Was ist der Unterschied zwischen homogenen und heterogenen Ensembles?",
          nl: "Wat is het verschil tussen homogene en heterogene ensembles?"
        },
        options: [
          { en: "Homogeneous uses same algorithm with different parameters/data, heterogeneous combines different algorithms", es: "Homogéneo usa mismo algoritmo con diferentes parámetros/datos, heterogéneo combina diferentes algoritmos", de: "Homogen verwendet denselben Algorithmus mit verschiedenen Parametern/Daten, heterogen kombiniert verschiedene Algorithmen", nl: "Homogeen gebruikt hetzelfde algoritme met verschillende parameters/data, heterogeen combineert verschillende algoritmes" },
          { en: "Homogeneous is faster than heterogeneous ensembles", es: "Homogéneo es más rápido que conjuntos heterogéneos", de: "Homogen ist schneller als heterogene Ensembles", nl: "Homogeen is sneller dan heterogene ensembles" },
          { en: "Heterogeneous requires more computational resources", es: "Heterogéneo requiere más recursos computacionales", de: "Heterogen benötigt mehr Rechenressourcen", nl: "Heterogeen vereist meer computationele middelen" },
          { en: "Homogeneous works only with classification problems", es: "Homogéneo funciona solo con problemas de clasificación", de: "Homogen funktioniert nur mit Klassifikationsproblemen", nl: "Homogeen werkt alleen met classificatieproblemen" }
        ],
        correct: 0,
        explanation: {
          en: "Homogeneous ensembles use the same base algorithm (like Random Forest using only decision trees) but vary training data, features, or parameters. Heterogeneous ensembles combine fundamentally different algorithms (like combining trees, SVMs, and neural networks) to maximize diversity.",
          es: "Conjuntos homogéneos usan el mismo algoritmo base (como Random Forest usando solo árboles de decisión) pero varían datos de entrenamiento, características o parámetros. Conjuntos heterogéneos combinan algoritmos fundamentalmente diferentes (como combinar árboles, SVMs y redes neuronales) para maximizar diversidad.",
          de: "Homogene Ensembles verwenden denselben Basis-Algorithmus (wie Random Forest nur mit Entscheidungsbäumen) aber variieren Trainingsdaten, Features oder Parameter. Heterogene Ensembles kombinieren grundlegend verschiedene Algorithmen (wie Kombination von Bäumen, SVMs und neuronalen Netzwerken) um Diversität zu maximieren.",
          nl: "Homogene ensembles gebruiken hetzelfde basis-algoritme (zoals Random Forest met alleen beslisbomen) maar variëren trainingsdata, features of parameters. Heterogene ensembles combineren fundamenteel verschillende algoritmes (zoals het combineren van bomen, SVMs en neurale netwerken) om diversiteit te maximaliseren."
        }
      },
      {
        question: {
          en: "What is the role of learning rate (shrinkage) in gradient boosting algorithms?",
          es: "¿Cuál es el papel de la tasa de aprendizaje (contracción) en algoritmos de gradient boosting?",
          de: "Was ist die Rolle der Lernrate (Shrinkage) in Gradient Boosting Algorithmen?",
          nl: "Wat is de rol van learning rate (shrinkage) in gradient boosting algoritmes?"
        },
        options: [
          { en: "Controls step size of each boosting iteration to prevent overfitting and improve generalization", es: "Controla tamaño de paso de cada iteración de boosting para prevenir overfitting y mejorar generalización", de: "Kontrolliert Schrittgröße jeder Boosting-Iteration um Overfitting zu verhindern und Generalisierung zu verbessern", nl: "Controleert stapgrootte van elke boosting iteratie om overfitting te voorkomen en generalisatie te verbeteren" },
          { en: "Determines how fast the algorithm learns from data", es: "Determina qué tan rápido aprende el algoritmo de los datos", de: "Bestimmt wie schnell der Algorithmus aus Daten lernt", nl: "Bepaalt hoe snel het algoritme leert van data" },
          { en: "Sets the maximum depth of boosting trees", es: "Establece la profundidad máxima de árboles de boosting", de: "Setzt die maximale Tiefe von Boosting-Bäumen", nl: "Stelt de maximale diepte van boosting bomen in" },
          { en: "Controls the number of features used in each iteration", es: "Controla el número de características usadas en cada iteración", de: "Kontrolliert die Anzahl der Features in jeder Iteration", nl: "Controleert het aantal features gebruikt in elke iteratie" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate (shrinkage) scales the contribution of each weak learner, with smaller values requiring more boosting rounds but typically achieving better generalization. It creates a bias-variance tradeoff: lower rates reduce overfitting but increase training time and computational cost.",
          es: "La tasa de aprendizaje (contracción) escala la contribución de cada aprendiz débil, con valores más pequeños requiriendo más rondas de boosting pero típicamente logrando mejor generalización. Crea un tradeoff sesgo-varianza: tasas más bajas reducen overfitting pero aumentan tiempo de entrenamiento y costo computacional.",
          de: "Lernrate (Shrinkage) skaliert den Beitrag jedes schwachen Lerners, mit kleineren Werten die mehr Boosting-Runden benötigen aber typisch bessere Generalisierung erreichen. Es erstellt einen Bias-Varianz-Tradeoff: niedrigere Raten reduzieren Overfitting aber erhöhen Trainingszeit und Rechenkosten.",
          nl: "Learning rate (shrinkage) schaalt de bijdrage van elke zwakke learner, met kleinere waarden die meer boosting rondes vereisen maar typisch betere generalisatie bereiken. Het creëert een bias-variance tradeoff: lagere rates verminderen overfitting maar verhogen trainingstijd en computationele kosten."
        }
      },
      {
        question: {
          en: "What is the difference between symmetric and asymmetric loss functions in boosting algorithms?",
          es: "¿Cuál es la diferencia entre funciones de pérdida simétricas y asimétricas en algoritmos de boosting?",
          de: "Was ist der Unterschied zwischen symmetrischen und asymmetrischen Verlustfunktionen in Boosting-Algorithmen?",
          nl: "Wat is het verschil tussen symmetrische en asymmetrische verliesfuncties in boosting algoritmes?"
        },
        options: [
          { en: "Symmetric treats all errors equally, asymmetric penalizes different error types differently based on cost", es: "Simétrica trata todos los errores igualmente, asimétrica penaliza diferentes tipos de errores diferentemente basado en costo", de: "Symmetrisch behandelt alle Fehler gleich, asymmetrisch bestraft verschiedene Fehlertypen unterschiedlich basierend auf Kosten", nl: "Symmetrisch behandelt alle fouten gelijk, asymmetrisch bestraft verschillende fouttypes anders gebaseerd op kosten" },
          { en: "Symmetric is computationally faster than asymmetric", es: "Simétrica es computacionalmente más rápida que asimétrica", de: "Symmetrisch ist rechnerisch schneller als asymmetrisch", nl: "Symmetrisch is computationeel sneller dan asymmetrisch" },
          { en: "Asymmetric functions work only with classification", es: "Funciones asimétricas funcionan solo con clasificación", de: "Asymmetrische Funktionen funktionieren nur mit Klassifikation", nl: "Asymmetrische functies werken alleen met classificatie" },
          { en: "Symmetric loss requires balanced datasets", es: "Pérdida simétrica requiere conjuntos de datos balanceados", de: "Symmetrischer Verlust benötigt ausgewogene Datensätze", nl: "Symmetrisch verlies vereist gebalanceerde datasets" }
        ],
        correct: 0,
        explanation: {
          en: "Symmetric loss functions like squared error treat overestimation and underestimation equally. Asymmetric loss functions like quantile loss or asymmetric exponential loss penalize errors differently based on business costs, useful when false positives and false negatives have different consequences.",
          es: "Funciones de pérdida simétricas como error cuadrático tratan sobreestimación y subestimación igualmente. Funciones de pérdida asimétricas como pérdida de cuantil o pérdida exponencial asimétrica penalizan errores diferentemente basado en costos de negocio, útiles cuando falsos positivos y falsos negativos tienen diferentes consecuencias.",
          de: "Symmetrische Verlustfunktionen wie quadratischer Fehler behandeln Über- und Unterschätzung gleich. Asymmetrische Verlustfunktionen wie Quantil-Verlust oder asymmetrischer exponentieller Verlust bestrafen Fehler unterschiedlich basierend auf Geschäftskosten, nützlich wenn falsche Positive und falsche Negative verschiedene Konsequenzen haben.",
          nl: "Symmetrische verliesfuncties zoals gekwadrateerde fout behandelen overschatting en onderschatting gelijk. Asymmetrische verliesfuncties zoals quantile loss of asymmetrisch exponentieel verlies straffen fouten anders af gebaseerd op bedrijfskosten, nuttig wanneer false positives en false negatives verschillende gevolgen hebben."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();