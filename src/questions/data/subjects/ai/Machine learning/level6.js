// Machine learning Quiz - Level 6
(function() {
  const level6 = {
    name: {
          "en": "Advanced ML Algorithms",
          "es": "Algoritmos Avanzados de ML",
          "de": "Fortgeschrittene ML-Algorithmen",
          "nl": "Geavanceerde ML Algoritmes"
    },
    questions: [
      {
        question: {
                  "en": "What is the bias-variance tradeoff in machine learning?",
                  "es": "¿Qué es el tradeoff sesgo-varianza en machine learning?",
                  "de": "Was ist der Bias-Varianz-Tradeoff im maschinellen Lernen?",
                  "nl": "Wat is de bias-variance tradeoff in machine learning?"
        },
        options: [
        {
                  "en": "Balance between model simplicity and complexity to minimize total error",
                  "es": "Equilibrio entre simplicidad y complejidad del modelo para minimizar error total",
                  "de": "Balance zwischen Modellsimplizität und Komplexität zur Minimierung des Gesamtfehlers",
                  "nl": "Balans tussen modelsimpliciteit en complexiteit om totale fout te minimaliseren"
        },
        {
                  "en": "Trading computational speed for accuracy",
                  "es": "Intercambiar velocidad computacional por precisión",
                  "de": "Rechengeschwindigkeit gegen Genauigkeit eintauschen",
                  "nl": "Computationele snelheid inruilen voor nauwkeurigheid"
        },
        {
                  "en": "Balancing training and testing time",
                  "es": "Equilibrar tiempo de entrenamiento y prueba",
                  "de": "Training- und Testzeit ausbalancieren",
                  "nl": "Trainings- en testtijd balanceren"
        },
        {
                  "en": "Choosing between biased and unbiased training data",
                  "es": "Elegir entre datos de entrenamiento sesgados y no sesgados",
                  "de": "Wahl zwischen voreingenommenen und unvoreingenommenen Trainingsdaten",
                  "nl": "Kiezen tussen bevooroordeelde en onbevooroordeelde trainingsdata"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The bias-variance tradeoff describes the tension between underfitting (high bias, low variance) and overfitting (low bias, high variance), where the goal is to find the sweet spot that minimizes total prediction error.",
                  "es": "El tradeoff sesgo-varianza describe la tensión entre underfitting (alto sesgo, baja varianza) y overfitting (bajo sesgo, alta varianza), donde el objetivo es encontrar el punto óptimo que minimiza el error total de predicción.",
                  "de": "Der Bias-Varianz-Tradeoff beschreibt die Spannung zwischen Underfitting (hoher Bias, niedrige Varianz) und Overfitting (niedriger Bias, hohe Varianz), wobei das Ziel ist, den optimalen Punkt zu finden, der den Gesamtvorhersagefehler minimiert.",
                  "nl": "De bias-variance tradeoff beschrijft de spanning tussen underfitting (hoge bias, lage variance) en overfitting (lage bias, hoge variance), waarbij het doel is om het optimale punt te vinden dat de totale voorspellingsfout minimaliseert."
        }
      },
      {
        question: {
                  "en": "What is the difference between bagging and boosting in ensemble methods?",
                  "es": "¿Cuál es la diferencia entre bagging y boosting en métodos de ensemble?",
                  "de": "Was ist der Unterschied zwischen Bagging und Boosting in Ensemble-Methoden?",
                  "nl": "Wat is het verschil tussen bagging en boosting in ensemble methoden?"
        },
        options: [
        {
                  "en": "Bagging trains models in parallel, boosting trains sequentially to correct previous errors",
                  "es": "Bagging entrena modelos en paralelo, boosting entrena secuencialmente para corregir errores previos",
                  "de": "Bagging trainiert Modelle parallel, Boosting trainiert sequenziell um vorherige Fehler zu korrigieren",
                  "nl": "Bagging traint modellen parallel, boosting traint sequentieel om vorige fouten te corrigeren"
        },
        {
                  "en": "Boosting requires more memory than bagging",
                  "es": "Boosting requiere más memoria que bagging",
                  "de": "Boosting benötigt mehr Speicher als Bagging",
                  "nl": "Boosting vereist meer geheugen dan bagging"
        },
        {
                  "en": "Bagging is faster than boosting",
                  "es": "Bagging es más rápido que boosting",
                  "de": "Bagging ist schneller als Boosting",
                  "nl": "Bagging is sneller dan boosting"
        },
        {
                  "en": "Bagging uses tree models, boosting uses linear models",
                  "es": "Bagging usa modelos de árbol, boosting usa modelos lineales",
                  "de": "Bagging verwendet Baummodelle, Boosting verwendet lineare Modelle",
                  "nl": "Bagging gebruikt boommodellen, boosting gebruikt lineaire modellen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Bagging (Bootstrap Aggregating) trains multiple models independently on different subsets of data and averages their predictions, while boosting trains models sequentially, with each model focusing on correcting the mistakes of previous ones.",
                  "es": "Bagging (Bootstrap Aggregating) entrena múltiples modelos independientemente en diferentes subconjuntos de datos y promedia sus predicciones, mientras boosting entrena modelos secuencialmente, con cada modelo enfocándose en corregir los errores de los anteriores.",
                  "de": "Bagging (Bootstrap Aggregating) trainiert mehrere Modelle unabhängig auf verschiedenen Datenuntergruppen und mittelt ihre Vorhersagen, während Boosting Modelle sequenziell trainiert, wobei sich jedes Modell darauf konzentriert, die Fehler der vorherigen zu korrigieren.",
                  "nl": "Bagging (Bootstrap Aggregating) traint meerdere modellen onafhankelijk op verschillende subsets van data en middelt hun voorspellingen, terwijl boosting modellen sequentieel traint, waarbij elk model zich richt op het corrigeren van fouten van vorige modellen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of regularization in machine learning?",
                  "es": "¿Cuál es el propósito de la regularización en machine learning?",
                  "de": "Was ist der Zweck der Regularisierung im maschinellen Lernen?",
                  "nl": "Wat is het doel van regularisatie in machine learning?"
        },
        options: [
        {
                  "en": "Make training data more regular and consistent",
                  "es": "Hacer que los datos de entrenamiento sean más regulares y consistentes",
                  "de": "Trainingsdaten regelmäßiger und konsistenter machen",
                  "nl": "Trainingsdata meer regelmatig en consistent maken"
        },
        {
                  "en": "Normalize input features to the same scale",
                  "es": "Normalizar características de entrada a la misma escala",
                  "de": "Eingabemerkmale auf dieselbe Skala normalisieren",
                  "nl": "Input features normaliseren naar dezelfde schaal"
        },
        {
                  "en": "Regularize the learning rate during training",
                  "es": "Regularizar la tasa de aprendizaje durante el entrenamiento",
                  "de": "Die Lernrate während des Trainings regularisieren",
                  "nl": "De learning rate regulariseren tijdens training"
        },
        {
                  "en": "Prevent overfitting by adding penalty terms to the loss function",
                  "es": "Prevenir overfitting agregando términos de penalización a la función de pérdida",
                  "de": "Overfitting verhindern durch Hinzufügen von Straftermen zur Verlustfunktion",
                  "nl": "Overfitting voorkomen door straaftermen toe te voegen aan de verliesfunctie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Regularization techniques like L1 (Lasso) and L2 (Ridge) add penalty terms to the loss function that discourage large weights, helping to prevent overfitting and improve model generalization.",
                  "es": "Las técnicas de regularización como L1 (Lasso) y L2 (Ridge) agregan términos de penalización a la función de pérdida que desalientan pesos grandes, ayudando a prevenir overfitting y mejorar la generalización del modelo.",
                  "de": "Regularisierungstechniken wie L1 (Lasso) und L2 (Ridge) fügen Strafterme zur Verlustfunktion hinzu, die große Gewichte verhindern und helfen, Overfitting zu verhindern und die Modellgeneralisierung zu verbessern.",
                  "nl": "Regularisatietechnieken zoals L1 (Lasso) en L2 (Ridge) voegen straaftermen toe aan de verliesfunctie die grote gewichten ontmoedigen, helpen overfitting te voorkomen en modelgeneralisatie te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is the kernel trick in Support Vector Machines (SVM)?",
                  "es": "¿Qué es el truco del kernel en Support Vector Machines (SVM)?",
                  "de": "Was ist der Kernel-Trick in Support Vector Machines (SVM)?",
                  "nl": "Wat is de kernel trick in Support Vector Machines (SVM)?"
        },
        options: [
        {
                  "en": "Use multiple kernels in parallel for better performance",
                  "es": "Usar múltiples kernels en paralelo para mejor rendimiento",
                  "de": "Mehrere Kernel parallel für bessere Leistung verwenden",
                  "nl": "Meerdere kernels parallel gebruiken voor betere prestaties"
        },
        {
                  "en": "Optimize the kernel parameters automatically",
                  "es": "Optimizar los parámetros del kernel automáticamente",
                  "de": "Kernel-Parameter automatisch optimieren",
                  "nl": "Kernel parameters automatisch optimaliseren"
        },
        {
                  "en": "Reduce the computational complexity of SVM training",
                  "es": "Reducir la complejidad computacional del entrenamiento SVM",
                  "de": "Rechenkomplexität des SVM-Trainings reduzieren",
                  "nl": "Computationele complexiteit van SVM training verminderen"
        },
        {
                  "en": "Transform data to higher dimensions without explicitly computing the transformation",
                  "es": "Transformar datos a dimensiones superiores sin calcular explícitamente la transformación",
                  "de": "Daten in höhere Dimensionen transformieren ohne explizite Berechnung der Transformation",
                  "nl": "Data transformeren naar hogere dimensies zonder expliciet de transformatie te berekenen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The kernel trick allows SVMs to work in high-dimensional feature spaces by computing inner products in the original space using kernel functions, making it computationally efficient to find non-linear decision boundaries.",
                  "es": "El truco del kernel permite a las SVM trabajar en espacios de características de alta dimensión calculando productos internos en el espacio original usando funciones kernel, haciendo computacionalmente eficiente encontrar límites de decisión no lineales.",
                  "de": "Der Kernel-Trick ermöglicht SVMs in hochdimensionalen Merkmalsräumen zu arbeiten, indem Innenprodukte im ursprünglichen Raum mit Kernel-Funktionen berechnet werden, macht es rechnerisch effizient, nichtlineare Entscheidungsgrenzen zu finden.",
                  "nl": "De kernel trick stelt SVMs in staat om te werken in hoogdimensionale feature spaces door inner products in de oorspronkelijke ruimte te berekenen met kernel functies, maakt het computationeel efficiënt om niet-lineaire beslissingsgrenzen te vinden."
        }
      },
      {
        question: {
                  "en": "What is the Expectation-Maximization (EM) algorithm used for?",
                  "es": "¿Para qué se usa el algoritmo Expectation-Maximization (EM)?",
                  "de": "Wofür wird der Expectation-Maximization (EM) Algorithmus verwendet?",
                  "nl": "Waarvoor wordt het Expectation-Maximization (EM) algoritme gebruikt?"
        },
        options: [
        {
                  "en": "Maximizing the expectation of prediction accuracy",
                  "es": "Maximizar la expectativa de precisión de predicción",
                  "de": "Erwartung der Vorhersagegenauigkeit maximieren",
                  "nl": "Verwachting van voorspellingsnauwkeurigheid maximaliseren"
        },
        {
                  "en": "Finding maximum likelihood estimates when some data is missing or hidden",
                  "es": "Encontrar estimaciones de máxima verosimilitud cuando algunos datos faltan o están ocultos",
                  "de": "Maximum-Likelihood-Schätzungen finden wenn einige Daten fehlen oder verborgen sind",
                  "nl": "Maximum likelihood schattingen vinden wanneer sommige data ontbreekt of verborgen is"
        },
        {
                  "en": "Estimating the expected runtime of algorithms",
                  "es": "Estimar el tiempo de ejecución esperado de algoritmos",
                  "de": "Erwartete Laufzeit von Algorithmen schätzen",
                  "nl": "Verwachte runtime van algoritmes schatten"
        },
        {
                  "en": "Maximizing computational efficiency during training",
                  "es": "Maximizar la eficiencia computacional durante el entrenamiento",
                  "de": "Rechnerische Effizienz während des Trainings maximieren",
                  "nl": "Computationele efficiëntie maximaliseren tijdens training"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "EM algorithm iteratively estimates missing data (Expectation step) and updates model parameters (Maximization step) to find maximum likelihood estimates, commonly used in clustering algorithms like Gaussian Mixture Models.",
                  "es": "El algoritmo EM estima iterativamente datos faltantes (paso de Expectativa) y actualiza parámetros del modelo (paso de Maximización) para encontrar estimaciones de máxima verosimilitud, comúnmente usado en algoritmos de clustering como Modelos de Mezcla Gaussiana.",
                  "de": "EM-Algorithmus schätzt iterativ fehlende Daten (Expectation-Schritt) und aktualisiert Modellparameter (Maximization-Schritt) um Maximum-Likelihood-Schätzungen zu finden, häufig verwendet in Clustering-Algorithmen wie Gaussian Mixture Models.",
                  "nl": "EM algoritme schat iteratief ontbrekende data (Expectation stap) en werkt modelparameters bij (Maximization stap) om maximum likelihood schattingen te vinden, vaak gebruikt in clustering algoritmes zoals Gaussian Mixture Models."
        }
      },
      {
        question: {
                  "en": "What is the difference between Random Forest and AdaBoost in ensemble learning?",
                  "es": "¿Cuál es la diferencia entre Random Forest y AdaBoost en aprendizaje de conjunto?",
                  "de": "Was ist der Unterschied zwischen Random Forest und AdaBoost im Ensemble Learning?",
                  "nl": "Wat is het verschil tussen Random Forest en AdaBoost in ensemble learning?"
        },
        options: [
        {
                  "en": "AdaBoost is always faster than Random Forest",
                  "es": "AdaBoost siempre es más rápido que Random Forest",
                  "de": "AdaBoost ist immer schneller als Random Forest",
                  "nl": "AdaBoost is altijd sneller dan Random Forest"
        },
        {
                  "en": "Random Forest requires more memory than AdaBoost",
                  "es": "Random Forest requiere más memoria que AdaBoost",
                  "de": "Random Forest benötigt mehr Speicher als AdaBoost",
                  "nl": "Random Forest vereist meer geheugen dan AdaBoost"
        },
        {
                  "en": "Random Forest is only for classification, AdaBoost only for regression",
                  "es": "Random Forest es solo para clasificación, AdaBoost solo para regresión",
                  "de": "Random Forest ist nur für Klassifikation, AdaBoost nur für Regression",
                  "nl": "Random Forest is alleen voor classificatie, AdaBoost alleen voor regressie"
        },
        {
                  "en": "Random Forest uses parallel bagging with random features, AdaBoost uses sequential boosting with weighted samples",
                  "es": "Random Forest usa bagging paralelo con características aleatorias, AdaBoost usa boosting secuencial con muestras ponderadas",
                  "de": "Random Forest verwendet paralleles Bagging mit zufälligen Features, AdaBoost verwendet sequenzielles Boosting mit gewichteten Stichproben",
                  "nl": "Random Forest gebruikt parallelle bagging met willekeurige features, AdaBoost gebruikt sequentiële boosting met gewogen samples"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Random Forest builds many decision trees in parallel using bootstrap samples and random feature subsets, averaging predictions. AdaBoost builds trees sequentially, giving more weight to misclassified samples, making each tree focus on previous errors.",
                  "es": "Random Forest construye muchos árboles de decisión en paralelo usando muestras bootstrap y subconjuntos de características aleatorias, promediando predicciones. AdaBoost construye árboles secuencialmente, dando más peso a muestras mal clasificadas, haciendo que cada árbol se enfoque en errores previos.",
                  "de": "Random Forest baut viele Entscheidungsbäume parallel mit Bootstrap-Stichproben und zufälligen Feature-Untergruppen, mittelt Vorhersagen. AdaBoost baut Bäume sequenziell, gibt mehr Gewicht auf falsch klassifizierte Stichproben, macht dass jeder Baum sich auf vorherige Fehler konzentriert.",
                  "nl": "Random Forest bouwt veel beslisbomen parallel met bootstrap samples en willekeurige feature subsets, middelt voorspellingen. AdaBoost bouwt bomen sequentieel, geeft meer gewicht aan verkeerd geclassificeerde samples, zorgt dat elke boom zich richt op vorige fouten."
        }
      },
      {
        question: {
                  "en": "What is Gradient Boosting and how does it differ from traditional boosting methods?",
                  "es": "¿Qué es Gradient Boosting y cómo difiere de métodos tradicionales de boosting?",
                  "de": "Was ist Gradient Boosting und wie unterscheidet es sich von traditionellen Boosting-Methoden?",
                  "nl": "Wat is Gradient Boosting en hoe verschilt het van traditionele boosting methoden?"
        },
        options: [
        {
                  "en": "Uses only gradient-based algorithms as base learners",
                  "es": "Usa solo algoritmos basados en gradiente como aprendices base",
                  "de": "Verwendet nur gradientenbasierte Algorithmen als Base Learner",
                  "nl": "Gebruikt alleen gradiënt-gebaseerde algoritmes als basis learners"
        },
        {
                  "en": "Optimizes loss function by fitting new models to residual errors using gradient descent",
                  "es": "Optimiza función de pérdida ajustando nuevos modelos a errores residuales usando descenso de gradiente",
                  "de": "Optimiert Verlustfunktion durch Anpassen neuer Modelle an Residualfehler mit Gradientenabstieg",
                  "nl": "Optimaliseert verliesfunctie door nieuwe modellen te fitten aan residuele fouten met gradient descent"
        },
        {
                  "en": "Boosts only gradient features in the dataset",
                  "es": "Impulsa solo características de gradiente en el conjunto de datos",
                  "de": "Verstärkt nur Gradientenmerkmale im Datensatz",
                  "nl": "Boost alleen gradiënt features in de dataset"
        },
        {
                  "en": "Applies gradient normalization to training data",
                  "es": "Aplica normalización de gradiente a datos de entrenamiento",
                  "de": "Wendet Gradientennormalisierung auf Trainingsdaten an",
                  "nl": "Past gradiëntnormalisatie toe op trainingsdata"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Gradient Boosting builds models sequentially, where each new model is trained to predict the residuals (errors) of the previous models, optimizing any differentiable loss function through gradient descent, making it more flexible than AdaBoost which only works with exponential loss.",
                  "es": "Gradient Boosting construye modelos secuencialmente, donde cada nuevo modelo se entrena para predecir los residuos (errores) de modelos anteriores, optimizando cualquier función de pérdida diferenciable a través de descenso de gradiente, haciéndolo más flexible que AdaBoost que solo funciona con pérdida exponencial.",
                  "de": "Gradient Boosting baut Modelle sequenziell, wobei jedes neue Modell trainiert wird um die Residuen (Fehler) der vorherigen Modelle vorherzusagen, optimiert jede differenzierbare Verlustfunktion durch Gradientenabstieg, macht es flexibler als AdaBoost das nur mit exponentialem Verlust funktioniert.",
                  "nl": "Gradient Boosting bouwt modellen sequentieel, waarbij elk nieuw model wordt getraind om de residuen (fouten) van vorige modellen te voorspellen, optimaliseert elke differentieerbare verliesfunctie door gradient descent, maakt het flexibeler dan AdaBoost dat alleen werkt met exponentieel verlies."
        }
      },
      {
        question: {
                  "en": "What is XGBoost and what key innovations make it superior to traditional gradient boosting?",
                  "es": "¿Qué es XGBoost y qué innovaciones clave lo hacen superior al gradient boosting tradicional?",
                  "de": "Was ist XGBoost und welche Schlüsselinnovationen machen es traditionellem Gradient Boosting überlegen?",
                  "nl": "Wat is XGBoost en welke belangrijke innovaties maken het superieur aan traditionele gradient boosting?"
        },
        options: [
        {
                  "en": "Extra gradient computation for better optimization",
                  "es": "Computación extra de gradiente para mejor optimización",
                  "de": "Extra Gradientenberechnung für bessere Optimierung",
                  "nl": "Extra gradiëntberekening voor betere optimalisatie"
        },
        {
                  "en": "Experimental gradient boosting for research purposes",
                  "es": "Gradient boosting experimental para propósitos de investigación",
                  "de": "Experimentelles Gradient Boosting für Forschungszwecke",
                  "nl": "Experimentele gradient boosting voor onderzoeksdoeleinden"
        },
        {
                  "en": "Extended gradient boosting that works only with large datasets",
                  "es": "Gradient boosting extendido que funciona solo con conjuntos de datos grandes",
                  "de": "Erweitertes Gradient Boosting das nur mit großen Datensätzen funktioniert",
                  "nl": "Uitgebreide gradient boosting die alleen werkt met grote datasets"
        },
        {
                  "en": "Extreme gradient boosting with regularization, parallel processing, handling missing values, and advanced tree construction",
                  "es": "Gradient boosting extremo con regularización, procesamiento paralelo, manejo de valores faltantes y construcción avanzada de árboles",
                  "de": "Extremes Gradient Boosting mit Regularisierung, Parallelverarbeitung, Behandlung fehlender Werte und fortgeschrittener Baumkonstruktion",
                  "nl": "Extreme gradient boosting met regularisatie, parallelle verwerking, behandeling van missende waarden en geavanceerde boomconstructie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "XGBoost (eXtreme Gradient Boosting) introduces several optimizations: L1/L2 regularization to prevent overfitting, column subsampling, efficient handling of sparse data and missing values, parallel tree construction, and advanced pruning techniques, making it highly effective for structured data competitions.",
                  "es": "XGBoost (eXtreme Gradient Boosting) introduce varias optimizaciones: regularización L1/L2 para prevenir overfitting, submuestreo de columnas, manejo eficiente de datos dispersos y valores faltantes, construcción paralela de árboles y técnicas avanzadas de poda, haciéndolo altamente efectivo para competencias de datos estructurados.",
                  "de": "XGBoost (eXtreme Gradient Boosting) führt mehrere Optimierungen ein: L1/L2-Regularisierung zur Verhinderung von Overfitting, Spalten-Subsampling, effiziente Behandlung spärlicher Daten und fehlender Werte, parallele Baumkonstruktion und fortgeschrittene Pruning-Techniken, macht es hocheffektiv für strukturierte Datenwettbewerbe.",
                  "nl": "XGBoost (eXtreme Gradient Boosting) introduceert verschillende optimalisaties: L1/L2 regularisatie om overfitting te voorkomen, kolom subsampling, efficiënte behandeling van sparse data en missende waarden, parallelle boomconstructie en geavanceerde pruning technieken, maakt het zeer effectief voor gestructureerde datawedstrijden."
        }
      },
      {
        question: {
                  "en": "What is the difference between hard and soft voting in ensemble methods?",
                  "es": "¿Cuál es la diferencia entre votación dura y suave en métodos de conjunto?",
                  "de": "Was ist der Unterschied zwischen Hard- und Soft-Voting in Ensemble-Methoden?",
                  "nl": "Wat is het verschil tussen hard en soft voting in ensemble methoden?"
        },
        options: [
        {
                  "en": "Soft voting requires more computational resources",
                  "es": "Votación suave requiere más recursos computacionales",
                  "de": "Soft Voting benötigt mehr Rechenressourcen",
                  "nl": "Soft voting vereist meer computationele middelen"
        },
        {
                  "en": "Hard voting uses class predictions, soft voting uses predicted probabilities",
                  "es": "Votación dura usa predicciones de clase, votación suave usa probabilidades predichas",
                  "de": "Hard Voting verwendet Klassenvorhersagen, Soft Voting verwendet vorhergesagte Wahrscheinlichkeiten",
                  "nl": "Hard voting gebruikt klassevoorspellingen, soft voting gebruikt voorspelde kansen"
        },
        {
                  "en": "Hard voting is faster than soft voting",
                  "es": "Votación dura es más rápida que votación suave",
                  "de": "Hard Voting ist schneller als Soft Voting",
                  "nl": "Hard voting is sneller dan soft voting"
        },
        {
                  "en": "Hard voting works only with tree-based models",
                  "es": "Votación dura funciona solo con modelos basados en árboles",
                  "de": "Hard Voting funktioniert nur mit baumbasierten Modellen",
                  "nl": "Hard voting werkt alleen met boom-gebaseerde modellen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Hard voting takes the majority vote of predicted class labels from ensemble members, while soft voting averages the predicted probabilities from each classifier and assigns the class with highest average probability, often providing better performance when classifiers output well-calibrated probabilities.",
                  "es": "Votación dura toma la votación mayoritaria de etiquetas de clase predichas de miembros del conjunto, mientras votación suave promedia las probabilidades predichas de cada clasificador y asigna la clase con mayor probabilidad promedio, a menudo proporcionando mejor rendimiento cuando clasificadores producen probabilidades bien calibradas.",
                  "de": "Hard Voting nimmt die Mehrheitsstimme der vorhergesagten Klassenlabels von Ensemble-Mitgliedern, während Soft Voting die vorhergesagten Wahrscheinlichkeiten von jedem Klassifikator mittelt und die Klasse mit der höchsten durchschnittlichen Wahrscheinlichkeit zuweist, bietet oft bessere Leistung wenn Klassifikatoren gut kalibrierte Wahrscheinlichkeiten ausgeben.",
                  "nl": "Hard voting neemt de meerderheidstem van voorspelde klasselabels van ensemble leden, terwijl soft voting de voorspelde kansen van elke classifier middelt en de klasse met hoogste gemiddelde kans toewijst, biedt vaak betere prestaties wanneer classifiers goed gekalibreerde kansen uitgeven."
        }
      },
      {
        question: {
                  "en": "What is stacking (stacked generalization) in ensemble learning?",
                  "es": "¿Qué es el apilamiento (generalización apilada) en aprendizaje de conjunto?",
                  "de": "Was ist Stacking (gestapelte Generalisierung) im Ensemble Learning?",
                  "nl": "Wat is stacking (gestapelde generalisatie) in ensemble learning?"
        },
        options: [
        {
                  "en": "Training a meta-learner to combine predictions from multiple base models optimally",
                  "es": "Entrenar un meta-aprendiz para combinar predicciones de múltiples modelos base de manera óptima",
                  "de": "Training eines Meta-Learners um Vorhersagen von mehreren Basismodellen optimal zu kombinieren",
                  "nl": "Training van een meta-learner om voorspellingen van meerdere basismodellen optimaal te combineren"
        },
        {
                  "en": "Training models sequentially in a stacked manner",
                  "es": "Entrenar modelos secuencialmente de manera apilada",
                  "de": "Modelle sequenziell auf gestapelte Weise trainieren",
                  "nl": "Modellen sequentieel trainen op een gestapelde manier"
        },
        {
                  "en": "Storing model predictions in a stack data structure",
                  "es": "Almacenar predicciones de modelos en una estructura de datos de pila",
                  "de": "Modellvorhersagen in einer Stack-Datenstruktur speichern",
                  "nl": "Modelvoorspellingen opslaan in een stack datastructuur"
        },
        {
                  "en": "Stacking multiple layers in deep neural networks",
                  "es": "Apilar múltiples capas en redes neuronales profundas",
                  "de": "Mehrere Schichten in tiefen neuronalen Netzwerken stapeln",
                  "nl": "Meerdere lagen stapelen in diepe neurale netwerken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Stacking uses a meta-learner (blender) that learns how to best combine predictions from diverse base models by training on their outputs, potentially capturing complex relationships between different model predictions and often achieving better performance than simple voting.",
                  "es": "El apilamiento usa un meta-aprendiz (mezclador) que aprende cómo combinar mejor predicciones de modelos base diversos entrenando en sus salidas, potencialmente capturando relaciones complejas entre diferentes predicciones de modelos y a menudo logrando mejor rendimiento que votación simple.",
                  "de": "Stacking verwendet einen Meta-Learner (Blender) der lernt wie man Vorhersagen von verschiedenen Basismodellen am besten kombiniert durch Training auf ihren Ausgaben, erfasst potentiell komplexe Beziehungen zwischen verschiedenen Modellvorhersagen und erreicht oft bessere Leistung als einfaches Voting.",
                  "nl": "Stacking gebruikt een meta-learner (blender) die leert hoe voorspellingen van diverse basismodellen het beste te combineren door te trainen op hun outputs, vangt mogelijk complexe relaties tussen verschillende modelvoorspellingen en behaalt vaak betere prestaties dan eenvoudige voting."
        }
      },
      {
        question: {
                  "en": "What is the kernel trick's computational advantage in Support Vector Machines?",
                  "es": "¿Cuál es la ventaja computacional del truco del kernel en Support Vector Machines?",
                  "de": "Was ist der rechnerische Vorteil des Kernel-Tricks in Support Vector Machines?",
                  "nl": "Wat is het computationele voordeel van de kernel trick in Support Vector Machines?"
        },
        options: [
        {
                  "en": "Automatically selects optimal hyperparameters",
                  "es": "Selecciona automáticamente hiperparámetros óptimos",
                  "de": "Wählt automatisch optimale Hyperparameter",
                  "nl": "Selecteert automatisch optimale hyperparameters"
        },
        {
                  "en": "Reduces the number of support vectors needed",
                  "es": "Reduce el número de vectores de soporte necesarios",
                  "de": "Reduziert die Anzahl der benötigten Support Vectors",
                  "nl": "Vermindert het aantal benodigde support vectors"
        },
        {
                  "en": "Speeds up the optimization algorithm convergence",
                  "es": "Acelera la convergencia del algoritmo de optimización",
                  "de": "Beschleunigt die Konvergenz des Optimierungsalgorithmus",
                  "nl": "Versnelt de convergentie van het optimalisatie-algoritme"
        },
        {
                  "en": "Enables non-linear classification without explicitly computing high-dimensional feature transformations",
                  "es": "Permite clasificación no lineal sin calcular explícitamente transformaciones de características de alta dimensión",
                  "de": "Ermöglicht nichtlineare Klassifikation ohne explizite Berechnung hochdimensionaler Feature-Transformationen",
                  "nl": "Maakt niet-lineaire classificatie mogelijk zonder expliciet hoogdimensionale feature transformaties te berekenen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The kernel trick computes inner products in transformed feature spaces using kernel functions (like RBF or polynomial) without explicitly mapping data to those high-dimensional spaces, making non-linear SVMs computationally feasible by avoiding the curse of dimensionality.",
                  "es": "El truco del kernel calcula productos internos en espacios de características transformados usando funciones kernel (como RBF o polinomial) sin mapear explícitamente datos a esos espacios de alta dimensión, haciendo SVMs no lineales computacionalmente factibles evitando la maldición de la dimensionalidad.",
                  "de": "Der Kernel-Trick berechnet Innenprodukte in transformierten Merkmalsräumen mit Kernel-Funktionen (wie RBF oder Polynomial) ohne explizite Abbildung der Daten in diese hochdimensionalen Räume, macht nichtlineare SVMs rechnerisch machbar durch Vermeidung des Fluchs der Dimensionalität.",
                  "nl": "De kernel trick berekent inner products in getransformeerde feature spaces met kernel functies (zoals RBF of polynomiaal) zonder expliciet data te mappen naar die hoogdimensionale ruimtes, maakt niet-lineaire SVMs computationeel haalbaar door de vloek van dimensionaliteit te vermijden."
        }
      },
      {
        question: {
                  "en": "What is the difference between one-vs-one and one-vs-rest strategies for multi-class classification?",
                  "es": "¿Cuál es la diferencia entre estrategias uno-vs-uno y uno-vs-resto para clasificación multi-clase?",
                  "de": "Was ist der Unterschied zwischen One-vs-One und One-vs-Rest Strategien für Multi-Klassen-Klassifikation?",
                  "nl": "Wat is het verschil tussen one-vs-one en one-vs-rest strategieën voor multi-class classificatie?"
        },
        options: [
        {
                  "en": "One-vs-rest requires more memory than one-vs-one",
                  "es": "Uno-vs-resto requiere más memoria que uno-vs-uno",
                  "de": "One-vs-Rest benötigt mehr Speicher als One-vs-One",
                  "nl": "One-vs-rest vereist meer geheugen dan one-vs-one"
        },
        {
                  "en": "One-vs-one only works with tree-based classifiers",
                  "es": "Uno-vs-uno solo funciona con clasificadores basados en árboles",
                  "de": "One-vs-One funktioniert nur mit baumbasierten Klassifikatoren",
                  "nl": "One-vs-one werkt alleen met boom-gebaseerde classifiers"
        },
        {
                  "en": "One-vs-one trains n(n-1)/2 binary classifiers between each pair, one-vs-rest trains n classifiers against all others",
                  "es": "Uno-vs-uno entrena n(n-1)/2 clasificadores binarios entre cada par, uno-vs-resto entrena n clasificadores contra todos los otros",
                  "de": "One-vs-One trainiert n(n-1)/2 binäre Klassifikatoren zwischen jedem Paar, One-vs-Rest trainiert n Klassifikatoren gegen alle anderen",
                  "nl": "One-vs-one traint n(n-1)/2 binaire classifiers tussen elk paar, one-vs-rest traint n classifiers tegen alle anderen"
        },
        {
                  "en": "One-vs-one is always faster than one-vs-rest",
                  "es": "Uno-vs-uno siempre es más rápido que uno-vs-resto",
                  "de": "One-vs-One ist immer schneller als One-vs-Rest",
                  "nl": "One-vs-one is altijd sneller dan one-vs-rest"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "One-vs-one creates a binary classifier for every pair of classes, requiring more classifiers but smaller training sets per classifier. One-vs-rest creates one classifier per class against all remaining classes, requiring fewer classifiers but larger, potentially imbalanced training sets.",
                  "es": "Uno-vs-uno crea un clasificador binario para cada par de clases, requiriendo más clasificadores pero conjuntos de entrenamiento más pequeños por clasificador. Uno-vs-resto crea un clasificador por clase contra todas las clases restantes, requiriendo menos clasificadores pero conjuntos de entrenamiento más grandes, potencialmente desbalanceados.",
                  "de": "One-vs-One erstellt einen binären Klassifikator für jedes Klassenpaar, benötigt mehr Klassifikatoren aber kleinere Trainingssätze pro Klassifikator. One-vs-Rest erstellt einen Klassifikator pro Klasse gegen alle verbleibenden Klassen, benötigt weniger Klassifikatoren aber größere, potentiell unausgewogene Trainingssätze.",
                  "nl": "One-vs-one creëert een binaire classifier voor elk paar klassen, vereist meer classifiers maar kleinere trainingssets per classifier. One-vs-rest creëert één classifier per klasse tegen alle resterende klassen, vereist minder classifiers maar grotere, mogelijk ongebalanceerde trainingssets."
        }
      },
      {
        question: {
                  "en": "What is the purpose of feature importance in Random Forest and how is it calculated?",
                  "es": "¿Cuál es el propósito de la importancia de características en Random Forest y cómo se calcula?",
                  "de": "Was ist der Zweck der Feature-Wichtigkeit in Random Forest und wie wird sie berechnet?",
                  "nl": "Wat is het doel van feature importance in Random Forest en hoe wordt het berekend?"
        },
        options: [
        {
                  "en": "Ranks features by their correlation with target variable",
                  "es": "Clasifica características por su correlación con variable objetivo",
                  "de": "Ordnet Features nach ihrer Korrelation mit der Zielvariable",
                  "nl": "Rankt features naar hun correlatie met doelvariabele"
        },
        {
                  "en": "Counts how often each feature appears in decision trees",
                  "es": "Cuenta cuántas veces aparece cada característica en árboles de decisión",
                  "de": "Zählt wie oft jedes Feature in Entscheidungsbäumen erscheint",
                  "nl": "Telt hoe vaak elke feature voorkomt in beslisbomen"
        },
        {
                  "en": "Measures the depth at which features are used in trees",
                  "es": "Mide la profundidad en la que se usan características en árboles",
                  "de": "Misst die Tiefe in der Features in Bäumen verwendet werden",
                  "nl": "Meet de diepte waarop features worden gebruikt in bomen"
        },
        {
                  "en": "Measures feature contribution by calculating decrease in node impurity weighted by sample probability",
                  "es": "Mide contribución de características calculando disminución en impureza de nodo ponderada por probabilidad de muestra",
                  "de": "Misst Feature-Beitrag durch Berechnung der Abnahme der Knotenunreinheit gewichtet nach Stichprobenwahrscheinlichkeit",
                  "nl": "Meet feature bijdrage door afname in node impurity gewogen naar sample kans te berekenen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Random Forest calculates feature importance by measuring how much each feature decreases node impurity (Gini or entropy) when used for splits, weighted by the probability of reaching each node. Features that consistently provide good splits across trees receive higher importance scores.",
                  "es": "Random Forest calcula importancia de características midiendo cuánto cada característica disminuye la impureza del nodo (Gini o entropía) cuando se usa para divisiones, ponderado por la probabilidad de alcanzar cada nodo. Características que consistentemente proporcionan buenas divisiones a través de árboles reciben puntuaciones de importancia más altas.",
                  "de": "Random Forest berechnet Feature-Wichtigkeit durch Messung wie viel jedes Feature die Knotenunreinheit (Gini oder Entropie) verringert wenn für Splits verwendet, gewichtet nach der Wahrscheinlichkeit jeden Knoten zu erreichen. Features die konsistent gute Splits über Bäume bieten erhalten höhere Wichtigkeitswerte.",
                  "nl": "Random Forest berekent feature importance door te meten hoeveel elke feature de node impurity (Gini of entropy) vermindert wanneer gebruikt voor splits, gewogen naar de kans om elke node te bereiken. Features die consistent goede splits leveren over bomen krijgen hogere importance scores."
        }
      },
      {
        question: {
                  "en": "What is early stopping in gradient boosting and why is it important?",
                  "es": "¿Qué es la parada temprana en gradient boosting y por qué es importante?",
                  "de": "Was ist Early Stopping im Gradient Boosting und warum ist es wichtig?",
                  "nl": "Wat is early stopping in gradient boosting en waarom is het belangrijk?"
        },
        options: [
        {
                  "en": "Stops training when validation error stops improving to prevent overfitting and save computation",
                  "es": "Detiene entrenamiento cuando error de validación deja de mejorar para prevenir overfitting y ahorrar computación",
                  "de": "Stoppt Training wenn Validierungsfehler sich nicht mehr verbessert um Overfitting zu verhindern und Berechnung zu sparen",
                  "nl": "Stopt training wanneer validatiefout stopt met verbeteren om overfitting te voorkomen en berekening te besparen"
        },
        {
                  "en": "Reduces the learning rate automatically",
                  "es": "Reduce la tasa de aprendizaje automáticamente",
                  "de": "Reduziert die Lernrate automatisch",
                  "nl": "Vermindert de learning rate automatisch"
        },
        {
                  "en": "Terminates weak learners that perform poorly",
                  "es": "Termina aprendices débiles que funcionan mal",
                  "de": "Beendet schwache Lerner die schlecht funktionieren",
                  "nl": "Beëindigt zwakke learners die slecht presteren"
        },
        {
                  "en": "Stops adding new features to the model",
                  "es": "Deja de agregar nuevas características al modelo",
                  "de": "Stoppt das Hinzufügen neuer Features zum Modell",
                  "nl": "Stopt met het toevoegen van nieuwe features aan het model"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Early stopping monitors validation performance during gradient boosting training and halts when the validation error starts increasing or plateaus, preventing overfitting and reducing computational cost. It's essential for finding the optimal number of boosting iterations.",
                  "es": "La parada temprana monitorea el rendimiento de validación durante el entrenamiento de gradient boosting y se detiene cuando el error de validación comienza a aumentar o se estabiliza, previniendo overfitting y reduciendo costo computacional. Es esencial para encontrar el número óptimo de iteraciones de boosting.",
                  "de": "Early Stopping überwacht Validierungsleistung während Gradient Boosting Training und stoppt wenn der Validierungsfehler zu steigen beginnt oder stagniert, verhindert Overfitting und reduziert Rechenkosten. Es ist wesentlich um die optimale Anzahl von Boosting-Iterationen zu finden.",
                  "nl": "Early stopping monitort validatieprestaties tijdens gradient boosting training en stopt wanneer de validatiefout begint te stijgen of stagneert, voorkomt overfitting en vermindert computationele kosten. Het is essentieel voor het vinden van het optimale aantal boosting iteraties."
        }
      },
      {
        question: {
                  "en": "What is the difference between L1 and L2 regularization in the context of ensemble methods?",
                  "es": "¿Cuál es la diferencia entre regularización L1 y L2 en el contexto de métodos de conjunto?",
                  "de": "Was ist der Unterschied zwischen L1- und L2-Regularisierung im Kontext von Ensemble-Methoden?",
                  "nl": "Wat is het verschil tussen L1 en L2 regularisatie in de context van ensemble methoden?"
        },
        options: [
        {
                  "en": "L1 promotes sparsity by zeroing weights, L2 shrinks weights towards zero uniformly",
                  "es": "L1 promueve dispersión al hacer cero pesos, L2 encoge pesos hacia cero uniformemente",
                  "de": "L1 fördert Sparsität durch Nullsetzen von Gewichten, L2 schrumpft Gewichte gleichmäßig gegen Null",
                  "nl": "L1 bevordert sparsity door gewichten op nul te zetten, L2 krimpt gewichten uniform naar nul"
        },
        {
                  "en": "L1 is faster to compute than L2 regularization",
                  "es": "L1 es más rápido de calcular que regularización L2",
                  "de": "L1 ist schneller zu berechnen als L2-Regularisierung",
                  "nl": "L1 is sneller te berekenen dan L2 regularisatie"
        },
        {
                  "en": "L1 prevents overfitting better than L2",
                  "es": "L1 previene overfitting mejor que L2",
                  "de": "L1 verhindert Overfitting besser als L2",
                  "nl": "L1 voorkomt overfitting beter dan L2"
        },
        {
                  "en": "L2 works only with tree-based ensemble methods",
                  "es": "L2 funciona solo con métodos de conjunto basados en árboles",
                  "de": "L2 funktioniert nur mit baumbasierten Ensemble-Methoden",
                  "nl": "L2 werkt alleen met boom-gebaseerde ensemble methoden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "L1 regularization (Lasso) adds the sum of absolute weights as penalty, encouraging sparse solutions where some weights become exactly zero, effectively performing feature selection. L2 regularization (Ridge) adds sum of squared weights, shrinking all weights but rarely making them exactly zero.",
                  "es": "Regularización L1 (Lasso) agrega la suma de pesos absolutos como penalización, alentando soluciones dispersas donde algunos pesos se vuelven exactamente cero, efectivamente realizando selección de características. Regularización L2 (Ridge) agrega suma de pesos al cuadrado, encogiendo todos los pesos pero raramente haciéndolos exactamente cero.",
                  "de": "L1-Regularisierung (Lasso) fügt die Summe der absoluten Gewichte als Strafe hinzu, ermutigt spärliche Lösungen wo einige Gewichte genau Null werden, führt effektiv Feature-Selektion durch. L2-Regularisierung (Ridge) fügt Summe der quadrierten Gewichte hinzu, schrumpft alle Gewichte aber macht sie selten genau Null.",
                  "nl": "L1 regularisatie (Lasso) voegt de som van absolute gewichten toe als straf, moedigt sparse oplossingen aan waar sommige gewichten exact nul worden, voert effectief feature selectie uit. L2 regularisatie (Ridge) voegt som van gekwadrateerde gewichten toe, krimpt alle gewichten maar maakt ze zelden exact nul."
        }
      },
      {
        question: {
                  "en": "What is out-of-bag (OOB) error estimation in Random Forest?",
                  "es": "¿Qué es la estimación de error out-of-bag (OOB) en Random Forest?",
                  "de": "Was ist Out-of-Bag (OOB) Fehlerschätzung in Random Forest?",
                  "nl": "Wat is out-of-bag (OOB) foutschatting in Random Forest?"
        },
        options: [
        {
                  "en": "Validation using samples not included in bootstrap training sets of individual trees",
                  "es": "Validación usando muestras no incluidas en conjuntos de entrenamiento bootstrap de árboles individuales",
                  "de": "Validierung mit Stichproben die nicht in Bootstrap-Trainingssätzen einzelner Bäume enthalten sind",
                  "nl": "Validatie met samples die niet zijn opgenomen in bootstrap trainingssets van individuele bomen"
        },
        {
                  "en": "Estimation of bagging overhead costs",
                  "es": "Estimación de costos generales de bagging",
                  "de": "Schätzung von Bagging-Overhead-Kosten",
                  "nl": "Schatting van bagging overhead kosten"
        },
        {
                  "en": "Prediction accuracy for outlier detection",
                  "es": "Precisión de predicción para detección de valores atípicos",
                  "de": "Vorhersagegenauigkeit für Ausreißererkennung",
                  "nl": "Voorspellingsnauwkeurigheid voor uitbijter detectie"
        },
        {
                  "en": "Error calculation for samples outside the training dataset",
                  "es": "Cálculo de error para muestras fuera del conjunto de datos de entrenamiento",
                  "de": "Fehlerberechnung für Stichproben außerhalb des Trainingsdatensatzes",
                  "nl": "Foutberekening voor samples buiten de trainingsdataset"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "OOB error uses approximately 1/3 of samples that weren't selected in each tree's bootstrap sample for validation, providing an unbiased estimate of model performance without requiring a separate validation set, making it a built-in cross-validation mechanism.",
                  "es": "Error OOB usa aproximadamente 1/3 de muestras que no fueron seleccionadas en la muestra bootstrap de cada árbol para validación, proporcionando una estimación no sesgada del rendimiento del modelo sin requerir un conjunto de validación separado, haciéndolo un mecanismo de validación cruzada incorporado.",
                  "de": "OOB-Fehler verwendet etwa 1/3 der Stichproben die nicht in der Bootstrap-Stichprobe jedes Baums ausgewählt wurden für Validierung, bietet eine unvoreingenommene Schätzung der Modellleistung ohne separaten Validierungssatz zu benötigen, macht es zu einem eingebauten Kreuzvalidierungsmechanismus.",
                  "nl": "OOB fout gebruikt ongeveer 1/3 van samples die niet werden geselecteerd in elke boom's bootstrap sample voor validatie, biedt een onbevooroordeelde schatting van modelprestaties zonder een aparte validatieset te vereisen, maakt het een ingebouwd cross-validatie mechanisme."
        }
      },
      {
        question: {
                  "en": "What is the concept of diversity in ensemble learning and why is it crucial?",
                  "es": "¿Qué es el concepto de diversidad en aprendizaje de conjunto y por qué es crucial?",
                  "de": "Was ist das Konzept der Diversität im Ensemble Learning und warum ist es entscheidend?",
                  "nl": "Wat is het concept van diversiteit in ensemble learning en waarom is het cruciaal?"
        },
        options: [
        {
                  "en": "Different models making different types of errors, leading to reduced overall error through error cancellation",
                  "es": "Diferentes modelos cometiendo diferentes tipos de errores, llevando a error general reducido a través de cancelación de errores",
                  "de": "Verschiedene Modelle machen verschiedene Arten von Fehlern, führt zu reduziertem Gesamtfehler durch Fehlerlöschung",
                  "nl": "Verschillende modellen maken verschillende soorten fouten, leidt tot verminderde totale fout door foutannulering"
        },
        {
                  "en": "Using models from different programming languages",
                  "es": "Usar modelos de diferentes lenguajes de programación",
                  "de": "Verwendung von Modellen aus verschiedenen Programmiersprachen",
                  "nl": "Het gebruik van modellen uit verschillende programmeertalen"
        },
        {
                  "en": "Training models on datasets with diverse topics",
                  "es": "Entrenar modelos en conjuntos de datos con temas diversos",
                  "de": "Training von Modellen auf Datensätzen mit verschiedenen Themen",
                  "nl": "Training van modellen op datasets met diverse onderwerpen"
        },
        {
                  "en": "Including models with different computational complexities",
                  "es": "Incluir modelos con diferentes complejidades computacionales",
                  "de": "Einbeziehung von Modellen mit verschiedenen rechnerischen Komplexitäten",
                  "nl": "Het opnemen van modellen met verschillende computationele complexiteiten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Ensemble diversity ensures that individual models make different mistakes, so when combined, their errors can cancel out while correct predictions reinforce each other. This is achieved through different algorithms, training data subsets, feature subsets, or hyperparameters, maximizing ensemble effectiveness.",
                  "es": "La diversidad de conjunto asegura que modelos individuales cometan diferentes errores, así que cuando se combinan, sus errores pueden cancelarse mientras predicciones correctas se refuerzan entre sí. Esto se logra a través de diferentes algoritmos, subconjuntos de datos de entrenamiento, subconjuntos de características o hiperparámetros, maximizando efectividad del conjunto.",
                  "de": "Ensemble-Diversität stellt sicher dass individuelle Modelle verschiedene Fehler machen, so dass wenn kombiniert ihre Fehler sich aufheben können während korrekte Vorhersagen sich gegenseitig verstärken. Dies wird durch verschiedene Algorithmen, Trainingsdaten-Untergruppen, Feature-Untergruppen oder Hyperparameter erreicht, maximiert Ensemble-Effektivität.",
                  "nl": "Ensemble diversiteit zorgt ervoor dat individuele modellen verschillende fouten maken, zodat wanneer gecombineerd hun fouten kunnen uitvallen terwijl correcte voorspellingen elkaar versterken. Dit wordt bereikt door verschillende algoritmes, trainingsdata subsets, feature subsets of hyperparameters, maximaliseert ensemble effectiviteit."
        }
      },
      {
        question: {
                  "en": "What is the difference between homogeneous and heterogeneous ensembles?",
                  "es": "¿Cuál es la diferencia entre conjuntos homogéneos y heterogéneos?",
                  "de": "Was ist der Unterschied zwischen homogenen und heterogenen Ensembles?",
                  "nl": "Wat is het verschil tussen homogene en heterogene ensembles?"
        },
        options: [
        {
                  "en": "Homogeneous uses same algorithm with different parameters/data, heterogeneous combines different algorithms",
                  "es": "Homogéneo usa mismo algoritmo con diferentes parámetros/datos, heterogéneo combina diferentes algoritmos",
                  "de": "Homogen verwendet denselben Algorithmus mit verschiedenen Parametern/Daten, heterogen kombiniert verschiedene Algorithmen",
                  "nl": "Homogeen gebruikt hetzelfde algoritme met verschillende parameters/data, heterogeen combineert verschillende algoritmes"
        },
        {
                  "en": "Homogeneous works only with classification problems",
                  "es": "Homogéneo funciona solo con problemas de clasificación",
                  "de": "Homogen funktioniert nur mit Klassifikationsproblemen",
                  "nl": "Homogeen werkt alleen met classificatieproblemen"
        },
        {
                  "en": "Homogeneous is faster than heterogeneous ensembles",
                  "es": "Homogéneo es más rápido que conjuntos heterogéneos",
                  "de": "Homogen ist schneller als heterogene Ensembles",
                  "nl": "Homogeen is sneller dan heterogene ensembles"
        },
        {
                  "en": "Heterogeneous requires more computational resources",
                  "es": "Heterogéneo requiere más recursos computacionales",
                  "de": "Heterogen benötigt mehr Rechenressourcen",
                  "nl": "Heterogeen vereist meer computationele middelen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Homogeneous ensembles use the same base algorithm (like Random Forest using only decision trees) but vary training data, features, or parameters. Heterogeneous ensembles combine fundamentally different algorithms (like combining trees, SVMs, and neural networks) to maximize diversity.",
                  "es": "Conjuntos homogéneos usan el mismo algoritmo base (como Random Forest usando solo árboles de decisión) pero varían datos de entrenamiento, características o parámetros. Conjuntos heterogéneos combinan algoritmos fundamentalmente diferentes (como combinar árboles, SVMs y redes neuronales) para maximizar diversidad.",
                  "de": "Homogene Ensembles verwenden denselben Basis-Algorithmus (wie Random Forest nur mit Entscheidungsbäumen) aber variieren Trainingsdaten, Features oder Parameter. Heterogene Ensembles kombinieren grundlegend verschiedene Algorithmen (wie Kombination von Bäumen, SVMs und neuronalen Netzwerken) um Diversität zu maximieren.",
                  "nl": "Homogene ensembles gebruiken hetzelfde basis-algoritme (zoals Random Forest met alleen beslisbomen) maar variëren trainingsdata, features of parameters. Heterogene ensembles combineren fundamenteel verschillende algoritmes (zoals het combineren van bomen, SVMs en neurale netwerken) om diversiteit te maximaliseren."
        }
      },
      {
        question: {
                  "en": "What is the role of learning rate (shrinkage) in gradient boosting algorithms?",
                  "es": "¿Cuál es el papel de la tasa de aprendizaje (contracción) en algoritmos de gradient boosting?",
                  "de": "Was ist die Rolle der Lernrate (Shrinkage) in Gradient Boosting Algorithmen?",
                  "nl": "Wat is de rol van learning rate (shrinkage) in gradient boosting algoritmes?"
        },
        options: [
        {
                  "en": "Controls step size of each boosting iteration to prevent overfitting and improve generalization",
                  "es": "Controla tamaño de paso de cada iteración de boosting para prevenir overfitting y mejorar generalización",
                  "de": "Kontrolliert Schrittgröße jeder Boosting-Iteration um Overfitting zu verhindern und Generalisierung zu verbessern",
                  "nl": "Controleert stapgrootte van elke boosting iteratie om overfitting te voorkomen en generalisatie te verbeteren"
        },
        {
                  "en": "Determines how fast the algorithm learns from data",
                  "es": "Determina qué tan rápido aprende el algoritmo de los datos",
                  "de": "Bestimmt wie schnell der Algorithmus aus Daten lernt",
                  "nl": "Bepaalt hoe snel het algoritme leert van data"
        },
        {
                  "en": "Controls the number of features used in each iteration",
                  "es": "Controla el número de características usadas en cada iteración",
                  "de": "Kontrolliert die Anzahl der Features in jeder Iteration",
                  "nl": "Controleert het aantal features gebruikt in elke iteratie"
        },
        {
                  "en": "Sets the maximum depth of boosting trees",
                  "es": "Establece la profundidad máxima de árboles de boosting",
                  "de": "Setzt die maximale Tiefe von Boosting-Bäumen",
                  "nl": "Stelt de maximale diepte van boosting bomen in"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Learning rate (shrinkage) scales the contribution of each weak learner, with smaller values requiring more boosting rounds but typically achieving better generalization. It creates a bias-variance tradeoff: lower rates reduce overfitting but increase training time and computational cost.",
                  "es": "La tasa de aprendizaje (contracción) escala la contribución de cada aprendiz débil, con valores más pequeños requiriendo más rondas de boosting pero típicamente logrando mejor generalización. Crea un tradeoff sesgo-varianza: tasas más bajas reducen overfitting pero aumentan tiempo de entrenamiento y costo computacional.",
                  "de": "Lernrate (Shrinkage) skaliert den Beitrag jedes schwachen Lerners, mit kleineren Werten die mehr Boosting-Runden benötigen aber typisch bessere Generalisierung erreichen. Es erstellt einen Bias-Varianz-Tradeoff: niedrigere Raten reduzieren Overfitting aber erhöhen Trainingszeit und Rechenkosten.",
                  "nl": "Learning rate (shrinkage) schaalt de bijdrage van elke zwakke learner, met kleinere waarden die meer boosting rondes vereisen maar typisch betere generalisatie bereiken. Het creëert een bias-variance tradeoff: lagere rates verminderen overfitting maar verhogen trainingstijd en computationele kosten."
        }
      },
      {
        question: {
                  "en": "What is the difference between symmetric and asymmetric loss functions in boosting algorithms?",
                  "es": "¿Cuál es la diferencia entre funciones de pérdida simétricas y asimétricas en algoritmos de boosting?",
                  "de": "Was ist der Unterschied zwischen symmetrischen und asymmetrischen Verlustfunktionen in Boosting-Algorithmen?",
                  "nl": "Wat is het verschil tussen symmetrische en asymmetrische verliesfuncties in boosting algoritmes?"
        },
        options: [
        {
                  "en": "Symmetric loss requires balanced datasets",
                  "es": "Pérdida simétrica requiere conjuntos de datos balanceados",
                  "de": "Symmetrischer Verlust benötigt ausgewogene Datensätze",
                  "nl": "Symmetrisch verlies vereist gebalanceerde datasets"
        },
        {
                  "en": "Asymmetric functions work only with classification",
                  "es": "Funciones asimétricas funcionan solo con clasificación",
                  "de": "Asymmetrische Funktionen funktionieren nur mit Klassifikation",
                  "nl": "Asymmetrische functies werken alleen met classificatie"
        },
        {
                  "en": "Symmetric is computationally faster than asymmetric",
                  "es": "Simétrica es computacionalmente más rápida que asimétrica",
                  "de": "Symmetrisch ist rechnerisch schneller als asymmetrisch",
                  "nl": "Symmetrisch is computationeel sneller dan asymmetrisch"
        },
        {
                  "en": "Symmetric treats all errors equally, asymmetric penalizes different error types differently based on cost",
                  "es": "Simétrica trata todos los errores igualmente, asimétrica penaliza diferentes tipos de errores diferentemente basado en costo",
                  "de": "Symmetrisch behandelt alle Fehler gleich, asymmetrisch bestraft verschiedene Fehlertypen unterschiedlich basierend auf Kosten",
                  "nl": "Symmetrisch behandelt alle fouten gelijk, asymmetrisch bestraft verschillende fouttypes anders gebaseerd op kosten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Symmetric loss functions like squared error treat overestimation and underestimation equally. Asymmetric loss functions like quantile loss or asymmetric exponential loss penalize errors differently based on business costs, useful when false positives and false negatives have different consequences.",
                  "es": "Funciones de pérdida simétricas como error cuadrático tratan sobreestimación y subestimación igualmente. Funciones de pérdida asimétricas como pérdida de cuantil o pérdida exponencial asimétrica penalizan errores diferentemente basado en costos de negocio, útiles cuando falsos positivos y falsos negativos tienen diferentes consecuencias.",
                  "de": "Symmetrische Verlustfunktionen wie quadratischer Fehler behandeln Über- und Unterschätzung gleich. Asymmetrische Verlustfunktionen wie Quantil-Verlust oder asymmetrischer exponentieller Verlust bestrafen Fehler unterschiedlich basierend auf Geschäftskosten, nützlich wenn falsche Positive und falsche Negative verschiedene Konsequenzen haben.",
                  "nl": "Symmetrische verliesfuncties zoals gekwadrateerde fout behandelen overschatting en onderschatting gelijk. Asymmetrische verliesfuncties zoals quantile loss of asymmetrisch exponentieel verlies straffen fouten anders af gebaseerd op bedrijfskosten, nuttig wanneer false positives en false negatives verschillende gevolgen hebben."
        }
      },
      {
        question: {
                  "en": "What is the vanishing gradient problem in deep networks?",
                  "es": "¿Qué es el problema del gradiente evanescente en redes profundas?",
                  "de": "Was ist das Problem des verschwindenden Gradienten in tiefen Netzwerken?",
                  "nl": "Wat is het vanishing gradient probleem in diepe netwerken?"
        },
        options: [
        {
                  "en": "Memory usage increases exponentially",
                  "es": "El uso de memoria aumenta exponencialmente",
                  "de": "Speicherverbrauch steigt exponentiell",
                  "nl": "Geheugengebruik stijgt exponentieel"
        },
        {
                  "en": "Gradients disappear completely during backpropagation",
                  "es": "Los gradientes desaparecen completamente durante retropropagación",
                  "de": "Gradienten verschwinden vollständig während Backpropagation",
                  "nl": "Gradiënten verdwijnen volledig tijdens backpropagation"
        },
        {
                  "en": "Training time becomes infinite",
                  "es": "El tiempo de entrenamiento se vuelve infinito",
                  "de": "Trainingszeit wird unendlich",
                  "nl": "Trainingstijd wordt oneindig"
        },
        {
                  "en": "Gradients become very small in early layers, slowing learning",
                  "es": "Los gradientes se vuelven muy pequeños en capas tempranas, ralentizando aprendizaje",
                  "de": "Gradienten werden in frühen Schichten sehr klein, verlangsamt Lernen",
                  "nl": "Gradiënten worden zeer klein in vroege lagen, vertraagt leren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "In deep networks with many layers, gradients can become extremely small when backpropagating through layers with activation functions like sigmoid/tanh. This makes early layers learn very slowly. Solutions include ReLU activation, batch normalization, and skip connections.",
                  "es": "En redes profundas con muchas capas, los gradientes pueden volverse extremadamente pequeños al retropropagar a través de capas con funciones de activación como sigmoid/tanh. Esto hace que capas tempranas aprendan muy lentamente. Soluciones incluyen activación ReLU, normalización por lotes y conexiones skip.",
                  "de": "In tiefen Netzwerken mit vielen Schichten können Gradienten extrem klein werden beim Zurückpropagieren durch Schichten mit Aktivierungsfunktionen wie Sigmoid/Tanh. Dies macht frühe Schichten sehr langsam lernend. Lösungen beinhalten ReLU-Aktivierung, Batch-Normalisierung und Skip-Verbindungen.",
                  "nl": "In diepe netwerken met veel lagen kunnen gradiënten extreem klein worden bij backpropagatie door lagen met activeringsfuncties zoals sigmoid/tanh. Dit maakt vroege lagen zeer langzaam lerend. Oplossingen omvatten ReLU activering, batch normalisatie en skip connecties."
        }
      },
      {
        question: {
                  "en": "What is batch normalization and why is it beneficial?",
                  "es": "¿Qué es normalización por lotes y por qué es beneficiosa?",
                  "de": "Was ist Batch-Normalisierung und warum ist sie vorteilhaft?",
                  "nl": "Wat is batch normalization en waarom is het voordelig?"
        },
        options: [
        {
                  "en": "Normalizes layer inputs to stabilize training and enable higher learning rates",
                  "es": "Normaliza entradas de capa para estabilizar entrenamiento y permitir tasas de aprendizaje más altas",
                  "de": "Normalisiert Schichteingaben um Training zu stabilisieren und höhere Lernraten zu ermöglichen",
                  "nl": "Normaliseert laag inputs om training te stabiliseren en hogere learning rates mogelijk te maken"
        },
        {
                  "en": "Processes data in batches for faster training",
                  "es": "Procesa datos en lotes para entrenamiento más rápido",
                  "de": "Verarbeitet Daten in Batches für schnelleres Training",
                  "nl": "Verwerkt data in batches voor snellere training"
        },
        {
                  "en": "Groups similar samples together",
                  "es": "Agrupa muestras similares juntas",
                  "de": "Gruppiert ähnliche Stichproben zusammen",
                  "nl": "Groepeert vergelijkbare samples samen"
        },
        {
                  "en": "Normalizes output predictions",
                  "es": "Normaliza predicciones de salida",
                  "de": "Normalisiert Ausgabevorhersagen",
                  "nl": "Normaliseert output voorspellingen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Batch normalization normalizes activations within each mini-batch, reducing internal covariate shift. This stabilizes training, allows higher learning rates, reduces sensitivity to initialization, and acts as regularization. It's applied before or after activation functions in neural network layers.",
                  "es": "La normalización por lotes normaliza activaciones dentro de cada mini-lote, reduciendo cambio de covarianza interno. Esto estabiliza entrenamiento, permite tasas de aprendizaje más altas, reduce sensibilidad a inicialización y actúa como regularización. Se aplica antes o después de funciones de activación en capas de redes neuronales.",
                  "de": "Batch-Normalisierung normalisiert Aktivierungen innerhalb jedes Mini-Batches, reduziert interne Kovarianzverschiebung. Dies stabilisiert Training, ermöglicht höhere Lernraten, reduziert Empfindlichkeit gegenüber Initialisierung und wirkt als Regularisierung. Wird vor oder nach Aktivierungsfunktionen in neuronalen Netzwerkschichten angewendet.",
                  "nl": "Batch normalization normaliseert activaties binnen elke mini-batch, vermindert interne covariantieverschuiving. Dit stabiliseert training, maakt hogere learning rates mogelijk, vermindert gevoeligheid voor initialisatie en werkt als regularisatie. Wordt toegepast voor of na activeringsfuncties in neurale netwerklagen."
        }
      },
      {
        question: {
                  "en": "What is transfer learning in machine learning?",
                  "es": "¿Qué es transfer learning en machine learning?",
                  "de": "Was ist Transfer Learning im maschinellen Lernen?",
                  "nl": "Wat is transfer learning in machine learning?"
        },
        options: [
        {
                  "en": "Converting models between frameworks",
                  "es": "Convertir modelos entre frameworks",
                  "de": "Modelle zwischen Frameworks konvertieren",
                  "nl": "Modellen converteren tussen frameworks"
        },
        {
                  "en": "Transferring data between different storage systems",
                  "es": "Transferir datos entre diferentes sistemas de almacenamiento",
                  "de": "Daten zwischen verschiedenen Speichersystemen übertragen",
                  "nl": "Data overdragen tussen verschillende opslagsystemen"
        },
        {
                  "en": "Using knowledge from one task to improve performance on a related task",
                  "es": "Usar conocimiento de una tarea para mejorar rendimiento en una tarea relacionada",
                  "de": "Verwendung von Wissen aus einer Aufgabe um Leistung bei einer verwandten Aufgabe zu verbessern",
                  "nl": "Gebruik van kennis van één taak om prestaties op een gerelateerde taak te verbeteren"
        },
        {
                  "en": "Moving trained models to production servers",
                  "es": "Mover modelos entrenados a servidores de producción",
                  "de": "Trainierte Modelle auf Produktionsserver verschieben",
                  "nl": "Getrainde modellen verplaatsen naar productieservers"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Transfer learning reuses knowledge from a pre-trained model on a source task for a target task, especially when target data is limited. Common approaches include fine-tuning (adjusting pre-trained weights) or feature extraction (using pre-trained layers as fixed feature extractors).",
                  "es": "Transfer learning reutiliza conocimiento de un modelo pre-entrenado en una tarea fuente para una tarea objetivo, especialmente cuando datos objetivo son limitados. Enfoques comunes incluyen fine-tuning (ajustar pesos pre-entrenados) o extracción de características (usar capas pre-entrenadas como extractores de características fijos).",
                  "de": "Transfer Learning verwendet Wissen eines vortrainierten Modells auf einer Quellaufgabe für eine Zielaufgabe wieder, besonders wenn Zieldaten begrenzt sind. Häufige Ansätze beinhalten Fine-Tuning (Anpassung vortrainierter Gewichte) oder Feature-Extraktion (Verwendung vortrainierter Schichten als feste Feature-Extraktoren).",
                  "nl": "Transfer learning hergebruikt kennis van een voorgetraind model op een brontaak voor een doeltaak, vooral wanneer doeldata beperkt is. Veelvoorkomende benaderingen omvatten fine-tuning (aanpassen van voorgetrainde gewichten) of feature extractie (gebruik van voorgetrainde lagen als vaste feature extractors)."
        }
      },
      {
        question: {
                  "en": "What is the Adam optimizer and how does it improve upon SGD?",
                  "es": "¿Qué es el optimizador Adam y cómo mejora sobre SGD?",
                  "de": "Was ist der Adam-Optimizer und wie verbessert er SGD?",
                  "nl": "Wat is de Adam optimizer en hoe verbetert het SGD?"
        },
        options: [
        {
                  "en": "Uses only momentum to speed up convergence",
                  "es": "Usa solo momentum para acelerar convergencia",
                  "de": "Verwendet nur Momentum um Konvergenz zu beschleunigen",
                  "nl": "Gebruikt alleen momentum om convergentie te versnellen"
        },
        {
                  "en": "Simplifies gradient computation",
                  "es": "Simplifica computación de gradiente",
                  "de": "Vereinfacht Gradientenberechnung",
                  "nl": "Vereenvoudigt gradiëntberekening"
        },
        {
                  "en": "Combines momentum and adaptive learning rates for each parameter",
                  "es": "Combina momentum y tasas de aprendizaje adaptativas para cada parámetro",
                  "de": "Kombiniert Momentum und adaptive Lernraten für jeden Parameter",
                  "nl": "Combineert momentum en adaptieve learning rates voor elke parameter"
        },
        {
                  "en": "Adapts batch size automatically",
                  "es": "Adapta tamaño de lote automáticamente",
                  "de": "Passt Batch-Größe automatisch an",
                  "nl": "Past batch grootte automatisch aan"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Adam (Adaptive Moment Estimation) combines momentum (using exponentially decaying average of gradients) and RMSprop (adaptive learning rates per parameter). It maintains estimates of both first (mean) and second (variance) moments of gradients, making it efficient and requiring less manual tuning.",
                  "es": "Adam (Estimación de Momento Adaptativo) combina momentum (usando promedio exponencialmente decreciente de gradientes) y RMSprop (tasas de aprendizaje adaptativas por parámetro). Mantiene estimaciones tanto del primer (media) como segundo (varianza) momento de gradientes, haciéndolo eficiente y requiriendo menos ajuste manual.",
                  "de": "Adam (Adaptive Moment Estimation) kombiniert Momentum (exponentiell abklingender Durchschnitt von Gradienten) und RMSprop (adaptive Lernraten pro Parameter). Es hält Schätzungen sowohl des ersten (Mittelwert) als auch zweiten (Varianz) Moments von Gradienten, macht es effizient und benötigt weniger manuelle Abstimmung.",
                  "nl": "Adam (Adaptive Moment Estimation) combineert momentum (exponentieel afnemend gemiddelde van gradiënten) en RMSprop (adaptieve learning rates per parameter). Het houdt schattingen bij van zowel eerste (gemiddelde) als tweede (variantie) momenten van gradiënten, maakt het efficiënt en vereist minder handmatige tuning."
        }
      },
      {
        question: {
                  "en": "What is label smoothing in classification?",
                  "es": "¿Qué es suavizado de etiquetas en clasificación?",
                  "de": "Was ist Label Smoothing in der Klassifikation?",
                  "nl": "Wat is label smoothing in classificatie?"
        },
        options: [
        {
                  "en": "Replacing hard 0/1 labels with soft probabilities to prevent overconfidence",
                  "es": "Reemplazar etiquetas duras 0/1 con probabilidades suaves para prevenir exceso de confianza",
                  "de": "Ersetzen harter 0/1-Labels mit weichen Wahrscheinlichkeiten um Überkonfidenz zu verhindern",
                  "nl": "Vervangen van harde 0/1 labels met zachte kansen om overconfidentie te voorkomen"
        },
        {
                  "en": "Removing noisy labels from dataset",
                  "es": "Eliminar etiquetas ruidosas del conjunto de datos",
                  "de": "Entfernung verrauschter Labels aus dem Datensatz",
                  "nl": "Verwijderen van ruis labels uit dataset"
        },
        {
                  "en": "Interpolating between different label encodings",
                  "es": "Interpolar entre diferentes codificaciones de etiquetas",
                  "de": "Interpolation zwischen verschiedenen Label-Kodierungen",
                  "nl": "Interpoleren tussen verschillende label encodings"
        },
        {
                  "en": "Averaging labels across batches",
                  "es": "Promediar etiquetas a través de lotes",
                  "de": "Mitteln von Labels über Batches",
                  "nl": "Middelen van labels over batches"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Label smoothing replaces hard targets (1 for correct class, 0 for others) with soft targets (e.g., 0.9 for correct, 0.1/(n-1) for others), preventing the model from becoming overconfident and improving calibration and generalization. It acts as a form of regularization.",
                  "es": "Suavizado de etiquetas reemplaza objetivos duros (1 para clase correcta, 0 para otros) con objetivos suaves (ej., 0.9 para correcta, 0.1/(n-1) para otros), previniendo que el modelo se vuelva demasiado confiado y mejorando calibración y generalización. Actúa como forma de regularización.",
                  "de": "Label Smoothing ersetzt harte Ziele (1 für korrekte Klasse, 0 für andere) mit weichen Zielen (z.B., 0.9 für korrekt, 0.1/(n-1) für andere), verhindert dass das Modell überkonfi wird und verbessert Kalibrierung und Generalisierung. Es wirkt als Form der Regularisierung.",
                  "nl": "Label smoothing vervangt harde doelen (1 voor correcte klasse, 0 voor anderen) met zachte doelen (bijv., 0.9 voor correct, 0.1/(n-1) voor anderen), voorkomt dat het model overconfident wordt en verbetert kalibratie en generalisatie. Het werkt als vorm van regularisatie."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a learning rate schedule?",
                  "es": "¿Cuál es el propósito de un schedule de tasa de aprendizaje?",
                  "de": "Was ist der Zweck eines Lernraten-Schedulers?",
                  "nl": "Wat is het doel van een learning rate schedule?"
        },
        options: [
        {
                  "en": "Determine training duration automatically",
                  "es": "Determinar duración de entrenamiento automáticamente",
                  "de": "Trainingsdauer automatisch bestimmen",
                  "nl": "Trainingsduur automatisch bepalen"
        },
        {
                  "en": "Balance computation across GPUs",
                  "es": "Equilibrar computación a través de GPUs",
                  "de": "Berechnung über GPUs ausbalancieren",
                  "nl": "Berekening balanceren over GPUs"
        },
        {
                  "en": "Adjust learning rate during training to improve convergence and final performance",
                  "es": "Ajustar tasa de aprendizaje durante entrenamiento para mejorar convergencia y rendimiento final",
                  "de": "Lernrate während Training anpassen um Konvergenz und finale Leistung zu verbessern",
                  "nl": "Learning rate aanpassen tijdens training om convergentie en finale prestaties te verbeteren"
        },
        {
                  "en": "Schedule when to perform learning updates",
                  "es": "Programar cuándo realizar actualizaciones de aprendizaje",
                  "de": "Planen wann Lernupdates durchzuführen sind",
                  "nl": "Plannen wanneer leerupdates uit te voeren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Learning rate schedules gradually reduce learning rate during training (e.g., step decay, exponential decay, cosine annealing). Start with higher rates for fast initial progress, then reduce to fine-tune and reach better optima. Common strategies include reducing on plateau or following predefined schedules.",
                  "es": "Schedules de tasa de aprendizaje reducen gradualmente tasa de aprendizaje durante entrenamiento (ej., decaimiento por pasos, decaimiento exponencial, annealing coseno). Comienza con tasas más altas para progreso inicial rápido, luego reduce para ajustar fino y alcanzar mejores óptimos. Estrategias comunes incluyen reducir en meseta o seguir schedules predefinidos.",
                  "de": "Lernraten-Scheduler reduzieren allmählich Lernrate während Training (z.B., Schritt-Zerfall, exponentieller Zerfall, Kosinus-Annealing). Beginnen mit höheren Raten für schnellen anfänglichen Fortschritt, dann reduzieren zum Feintuning und Erreichen besserer Optima. Häufige Strategien beinhalten Reduzierung bei Plateau oder Folgen vordefinierter Scheduler.",
                  "nl": "Learning rate schedules verminderen geleidelijk learning rate tijdens training (bijv., step decay, exponential decay, cosine annealing). Begin met hogere rates voor snelle initiële voortgang, reduceer dan voor fine-tuning en bereik betere optima. Veelvoorkomende strategieën omvatten verminderen bij plateau of volgen van voorgedefinieerde schedules."
        }
      },
      {
        question: {
                  "en": "What is mixup as a data augmentation technique?",
                  "es": "¿Qué es mixup como técnica de aumento de datos?",
                  "de": "Was ist Mixup als Datenaugmentierungstechnik?",
                  "nl": "Wat is mixup als data augmentatie techniek?"
        },
        options: [
        {
                  "en": "Combines predictions from multiple models",
                  "es": "Combina predicciones de múltiples modelos",
                  "de": "Kombiniert Vorhersagen mehrerer Modelle",
                  "nl": "Combineert voorspellingen van meerdere modellen"
        },
        {
                  "en": "Mixes different datasets together",
                  "es": "Mezcla diferentes conjuntos de datos juntos",
                  "de": "Mischt verschiedene Datensätze zusammen",
                  "nl": "Mengt verschillende datasets samen"
        },
        {
                  "en": "Randomly shuffles training batches",
                  "es": "Baraja aleatoriamente lotes de entrenamiento",
                  "de": "Mischt Trainings-Batches zufällig",
                  "nl": "Mengt willekeurig trainings batches"
        },
        {
                  "en": "Creates virtual training examples by linearly interpolating pairs of samples and labels",
                  "es": "Crea ejemplos de entrenamiento virtuales interpolando linealmente pares de muestras y etiquetas",
                  "de": "Erstellt virtuelle Trainingsbeispiele durch lineare Interpolation von Stichproben- und Label-Paaren",
                  "nl": "Creëert virtuele trainingsvoorbeelden door lineair interpoleren van paren samples en labels"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Mixup creates synthetic training examples by taking weighted combinations of input-label pairs: x_new = λx_i + (1-λ)x_j, y_new = λy_i + (1-λ)y_j, where λ~Beta(α,α). This encourages linear behavior between classes, improves generalization, and makes models more robust.",
                  "es": "Mixup crea ejemplos de entrenamiento sintéticos tomando combinaciones ponderadas de pares entrada-etiqueta: x_new = λx_i + (1-λ)x_j, y_new = λy_i + (1-λ)y_j, donde λ~Beta(α,α). Esto fomenta comportamiento lineal entre clases, mejora generalización y hace modelos más robustos.",
                  "de": "Mixup erstellt synthetische Trainingsbeispiele durch gewichtete Kombinationen von Eingabe-Label-Paaren: x_new = λx_i + (1-λ)x_j, y_new = λy_i + (1-λ)y_j, wobei λ~Beta(α,α). Dies fördert lineares Verhalten zwischen Klassen, verbessert Generalisierung und macht Modelle robuster.",
                  "nl": "Mixup creëert synthetische trainingsvoorbeelden door gewogen combinaties van input-label paren: x_new = λx_i + (1-λ)x_j, y_new = λy_i + (1-λ)y_j, waarbij λ~Beta(α,α). Dit moedigt lineair gedrag tussen klassen aan, verbetert generalisatie en maakt modellen robuuster."
        }
      },
      {
        question: {
                  "en": "What is catastrophic forgetting in neural networks?",
                  "es": "¿Qué es olvido catastrófico en redes neuronales?",
                  "de": "Was ist katastrophales Vergessen in neuronalen Netzwerken?",
                  "nl": "Wat is catastrophic forgetting in neurale netwerken?"
        },
        options: [
        {
                  "en": "Complete failure to learn due to gradient issues",
                  "es": "Fallo completo en aprender debido a problemas de gradiente",
                  "de": "Vollständiges Versagen beim Lernen aufgrund von Gradientenproblemen",
                  "nl": "Volledig falen om te leren door gradiëntproblemen"
        },
        {
                  "en": "Loss of previously learned knowledge when learning new tasks sequentially",
                  "es": "Pérdida de conocimiento previamente aprendido al aprender nuevas tareas secuencialmente",
                  "de": "Verlust zuvor erlernten Wissens beim sequenziellen Lernen neuer Aufgaben",
                  "nl": "Verlies van eerder geleerde kennis bij sequentieel leren van nieuwe taken"
        },
        {
                  "en": "Memory overflow during training",
                  "es": "Desbordamiento de memoria durante entrenamiento",
                  "de": "Speicherüberlauf während Training",
                  "nl": "Geheugenoverloop tijdens training"
        },
        {
                  "en": "Sudden loss of model weights",
                  "es": "Pérdida repentina de pesos del modelo",
                  "de": "Plötzlicher Verlust von Modellgewichten",
                  "nl": "Plotseling verlies van modelgewichten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Catastrophic forgetting occurs when neural networks trained on task A lose performance on A after training on task B, as new weights overwrite previous knowledge. Solutions include elastic weight consolidation, progressive neural networks, and rehearsal methods that retain some old data.",
                  "es": "Olvido catastrófico ocurre cuando redes neuronales entrenadas en tarea A pierden rendimiento en A después de entrenar en tarea B, ya que nuevos pesos sobrescriben conocimiento previo. Soluciones incluyen consolidación elástica de pesos, redes neuronales progresivas y métodos de ensayo que retienen algunos datos antiguos.",
                  "de": "Katastrophales Vergessen tritt auf wenn neuronale Netzwerke trainiert auf Aufgabe A Leistung auf A verlieren nach Training auf Aufgabe B, da neue Gewichte vorheriges Wissen überschreiben. Lösungen beinhalten elastische Gewichtskonsolidierung, progressive neuronale Netzwerke und Wiederholungsmethoden die alte Daten behalten.",
                  "nl": "Catastrophic forgetting treedt op wanneer neurale netwerken getraind op taak A prestaties verliezen op A na training op taak B, omdat nieuwe gewichten eerdere kennis overschrijven. Oplossingen omvatten elastische gewichtsconsolidatie, progressieve neurale netwerken en rehearsal methoden die oude data behouden."
        }
      },
      {
        question: {
                  "en": "What is the difference between online and batch learning?",
                  "es": "¿Cuál es la diferencia entre aprendizaje online y por lotes?",
                  "de": "Was ist der Unterschied zwischen Online- und Batch-Learning?",
                  "nl": "Wat is het verschil tussen online en batch learning?"
        },
        options: [
        {
                  "en": "Online requires internet connection, batch doesn't",
                  "es": "Online requiere conexión a internet, lotes no",
                  "de": "Online benötigt Internetverbindung, Batch nicht",
                  "nl": "Online vereist internetverbinding, batch niet"
        },
        {
                  "en": "Batch is always faster than online learning",
                  "es": "Lotes siempre es más rápido que aprendizaje online",
                  "de": "Batch ist immer schneller als Online-Learning",
                  "nl": "Batch is altijd sneller dan online learning"
        },
        {
                  "en": "Online learns from one sample at a time, batch learns from entire dataset",
                  "es": "Online aprende de una muestra a la vez, lotes aprende del conjunto de datos completo",
                  "de": "Online lernt von einer Stichprobe nach der anderen, Batch lernt vom gesamten Datensatz",
                  "nl": "Online leert van één sample per keer, batch leert van hele dataset"
        },
        {
                  "en": "Online works only with neural networks",
                  "es": "Online funciona solo con redes neuronales",
                  "de": "Online funktioniert nur mit neuronalen Netzwerken",
                  "nl": "Online werkt alleen met neurale netwerken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Online learning updates the model incrementally as new data arrives, suitable for streaming data and adapting to changes. Batch learning trains on the entire dataset at once, then deploys the fixed model. Mini-batch learning is a hybrid approach using small batches.",
                  "es": "Aprendizaje online actualiza el modelo incrementalmente a medida que llegan nuevos datos, adecuado para datos en streaming y adaptarse a cambios. Aprendizaje por lotes entrena en el conjunto de datos completo de una vez, luego despliega el modelo fijo. Aprendizaje mini-lote es un enfoque híbrido usando lotes pequeños.",
                  "de": "Online-Learning aktualisiert das Modell schrittweise wenn neue Daten ankommen, geeignet für Streaming-Daten und Anpassung an Änderungen. Batch-Learning trainiert auf dem gesamten Datensatz auf einmal, dann deployed das feste Modell. Mini-Batch-Learning ist ein hybrider Ansatz mit kleinen Batches.",
                  "nl": "Online learning werkt het model incrementeel bij naarmate nieuwe data arriveert, geschikt voor streaming data en aanpassen aan veranderingen. Batch learning traint op de hele dataset tegelijk, deploy dan het vaste model. Mini-batch learning is een hybride benadering met kleine batches."
        }
      },
      {
        question: {
                  "en": "What is the VC dimension in statistical learning theory?",
                  "es": "¿Qué es la dimensión VC en teoría de aprendizaje estadístico?",
                  "de": "Was ist die VC-Dimension in der statistischen Lerntheorie?",
                  "nl": "Wat is de VC dimensie in statistische leertheorie?"
        },
        options: [
        {
                  "en": "Number of virtual classifiers needed",
                  "es": "Número de clasificadores virtuales necesarios",
                  "de": "Anzahl benötigter virtueller Klassifikatoren",
                  "nl": "Aantal benodigde virtuele classifiers"
        },
        {
                  "en": "Maximum number of points that can be shattered by a hypothesis class",
                  "es": "Número máximo de puntos que pueden ser destrozados por una clase de hipótesis",
                  "de": "Maximale Anzahl von Punkten die von einer Hypothesenklasse zerschmettert werden können",
                  "nl": "Maximum aantal punten dat kan worden shattered door een hypotheseklasse"
        },
        {
                  "en": "Variance-covariance matrix dimension",
                  "es": "Dimensión de matriz de varianza-covarianza",
                  "de": "Varianz-Kovarianz-Matrix-Dimension",
                  "nl": "Variantie-covariantie matrix dimensie"
        },
        {
                  "en": "Dimension of the feature space",
                  "es": "Dimensión del espacio de características",
                  "de": "Dimension des Merkmalsraums",
                  "nl": "Dimensie van de feature space"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "VC (Vapnik-Chervonenkis) dimension measures model capacity - the largest set of points the model can correctly classify for all possible labelings. Higher VC dimension means more complex models but requires more training data to generalize well. It helps bound generalization error.",
                  "es": "Dimensión VC (Vapnik-Chervonenkis) mide capacidad del modelo - el conjunto más grande de puntos que el modelo puede clasificar correctamente para todos los etiquetados posibles. Mayor dimensión VC significa modelos más complejos pero requiere más datos de entrenamiento para generalizar bien. Ayuda a acotar error de generalización.",
                  "de": "VC-Dimension (Vapnik-Chervonenkis) misst Modellkapazität - die größte Menge von Punkten die das Modell für alle möglichen Beschriftungen korrekt klassifizieren kann. Höhere VC-Dimension bedeutet komplexere Modelle aber benötigt mehr Trainingsdaten um gut zu generalisieren. Es hilft Generalisierungsfehler zu begrenzen.",
                  "nl": "VC (Vapnik-Chervonenkis) dimensie meet modelcapaciteit - de grootste set punten die het model correct kan classificeren voor alle mogelijke labelings. Hogere VC dimensie betekent complexere modellen maar vereist meer trainingsdata om goed te generaliseren. Het helpt generalisatiefout begrenzen."
        }
      },
      {
        question: {
                  "en": "What is active learning in machine learning?",
                  "es": "¿Qué es aprendizaje activo en machine learning?",
                  "de": "Was ist aktives Lernen im maschinellen Lernen?",
                  "nl": "Wat is active learning in machine learning?"
        },
        options: [
        {
                  "en": "Using reinforcement learning for training",
                  "es": "Usar reinforcement learning para entrenamiento",
                  "de": "Reinforcement Learning für Training verwenden",
                  "nl": "Reinforcement learning gebruiken voor training"
        },
        {
                  "en": "Training models while they are in production",
                  "es": "Entrenar modelos mientras están en producción",
                  "de": "Modelle trainieren während sie in Produktion sind",
                  "nl": "Modellen trainen terwijl ze in productie zijn"
        },
        {
                  "en": "Continuously updating model weights",
                  "es": "Actualizar continuamente pesos del modelo",
                  "de": "Kontinuierliches Aktualisieren von Modellgewichten",
                  "nl": "Continu modelgewichten updaten"
        },
        {
                  "en": "Model queries which unlabeled samples to label for maximum learning benefit",
                  "es": "Modelo consulta qué muestras sin etiquetar etiquetar para máximo beneficio de aprendizaje",
                  "de": "Modell fragt welche unbeschrifteten Stichproben zu beschriften für maximalen Lernnutzen",
                  "nl": "Model vraagt welke ongelabelde samples te labelen voor maximaal leervoordeel"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Active learning strategically selects the most informative unlabeled samples for annotation, reducing labeling costs. Strategies include uncertainty sampling (query most uncertain predictions), query-by-committee (samples with disagreement), and expected model change. Especially useful when labels are expensive.",
                  "es": "Aprendizaje activo selecciona estratégicamente las muestras sin etiquetar más informativas para anotación, reduciendo costos de etiquetado. Estrategias incluyen muestreo de incertidumbre (consultar predicciones más inciertas), query-by-committee (muestras con desacuerdo) y cambio de modelo esperado. Especialmente útil cuando etiquetas son costosas.",
                  "de": "Aktives Lernen wählt strategisch die informativsten unbeschrifteten Stichproben für Annotation aus, reduziert Beschriftungskosten. Strategien beinhalten Unsicherheits-Sampling (unsicherste Vorhersagen abfragen), Query-by-Committee (Stichproben mit Uneinigkeit) und erwartete Modelländerung. Besonders nützlich wenn Labels teuer sind.",
                  "nl": "Active learning selecteert strategisch de meest informatieve ongelabelde samples voor annotatie, vermindert labelkosten. Strategieën omvatten uncertainty sampling (vraag meest onzekere voorspellingen), query-by-committee (samples met onenigheid) en verwachte modelverandering. Vooral nuttig wanneer labels duur zijn."
        }
      },
      {
        question: {
                  "en": "What is multi-task learning?",
                  "es": "¿Qué es aprendizaje multi-tarea?",
                  "de": "Was ist Multi-Task Learning?",
                  "nl": "Wat is multi-task learning?"
        },
        options: [
        {
                  "en": "Distributing computation across GPUs",
                  "es": "Distribuir computación a través de GPUs",
                  "de": "Berechnung über GPUs verteilen",
                  "nl": "Berekening verdelen over GPUs"
        },
        {
                  "en": "Training separate models for different tasks",
                  "es": "Entrenar modelos separados para diferentes tareas",
                  "de": "Separate Modelle für verschiedene Aufgaben trainieren",
                  "nl": "Aparte modellen trainen voor verschillende taken"
        },
        {
                  "en": "Training a model on multiple related tasks simultaneously to improve generalization",
                  "es": "Entrenar un modelo en múltiples tareas relacionadas simultáneamente para mejorar generalización",
                  "de": "Training eines Modells auf mehreren verwandten Aufgaben gleichzeitig um Generalisierung zu verbessern",
                  "nl": "Training van een model op meerdere gerelateerde taken tegelijk om generalisatie te verbeteren"
        },
        {
                  "en": "Running multiple training jobs in parallel",
                  "es": "Ejecutar múltiples trabajos de entrenamiento en paralelo",
                  "de": "Mehrere Trainingsjobs parallel ausführen",
                  "nl": "Meerdere trainingsjobs parallel uitvoeren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Multi-task learning trains a single model on multiple related tasks, sharing representations across tasks. This helps the model learn more robust features and improves data efficiency. Common in NLP (joint training for parsing, tagging, NER) and computer vision (detection + segmentation).",
                  "es": "Aprendizaje multi-tarea entrena un solo modelo en múltiples tareas relacionadas, compartiendo representaciones a través de tareas. Esto ayuda al modelo a aprender características más robustas y mejora eficiencia de datos. Común en NLP (entrenamiento conjunto para parsing, etiquetado, NER) y visión por computadora (detección + segmentación).",
                  "de": "Multi-Task Learning trainiert ein einzelnes Modell auf mehreren verwandten Aufgaben, teilt Repräsentationen über Aufgaben. Dies hilft dem Modell robustere Features zu lernen und verbessert Dateneffizienz. Häufig in NLP (gemeinsames Training für Parsing, Tagging, NER) und Computer Vision (Erkennung + Segmentierung).",
                  "nl": "Multi-task learning traint een enkel model op meerdere gerelateerde taken, deelt representaties over taken. Dit helpt het model robuustere features te leren en verbetert data-efficiëntie. Gebruikelijk in NLP (gezamenlijke training voor parsing, tagging, NER) en computer vision (detectie + segmentatie)."
        }
      },
      {
        question: {
                  "en": "What is curriculum learning?",
                  "es": "¿Qué es aprendizaje curricular?",
                  "de": "Was ist Curriculum Learning?",
                  "nl": "Wat is curriculum learning?"
        },
        options: [
        {
                  "en": "Learning multiple subjects simultaneously",
                  "es": "Aprender múltiples materias simultáneamente",
                  "de": "Mehrere Fächer gleichzeitig lernen",
                  "nl": "Meerdere vakken tegelijk leren"
        },
        {
                  "en": "Creating educational content with ML",
                  "es": "Crear contenido educativo con ML",
                  "de": "Bildungsinhalte mit ML erstellen",
                  "nl": "Educatieve content creëren met ML"
        },
        {
                  "en": "Training on easier examples first, gradually increasing difficulty",
                  "es": "Entrenar primero en ejemplos más fáciles, aumentando gradualmente dificultad",
                  "de": "Zuerst auf einfacheren Beispielen trainieren, Schwierigkeit allmählich erhöhen",
                  "nl": "Eerst trainen op makkelijkere voorbeelden, geleidelijk moeilijkheid verhogen"
        },
        {
                  "en": "Following a predefined training schedule",
                  "es": "Seguir un horario de entrenamiento predefinido",
                  "de": "Einem vordefinierten Trainingsplan folgen",
                  "nl": "Een voorgedefinieerd trainingsschema volgen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Curriculum learning orders training examples from simple to complex, mimicking human learning. Starting with easier examples helps build foundational representations before tackling harder cases. Can significantly improve convergence speed and final performance, especially for complex tasks.",
                  "es": "Aprendizaje curricular ordena ejemplos de entrenamiento de simple a complejo, imitando aprendizaje humano. Comenzar con ejemplos más fáciles ayuda a construir representaciones fundamentales antes de abordar casos más difíciles. Puede mejorar significativamente velocidad de convergencia y rendimiento final, especialmente para tareas complejas.",
                  "de": "Curriculum Learning ordnet Trainingsbeispiele von einfach zu komplex, ahmt menschliches Lernen nach. Beginnen mit einfacheren Beispielen hilft grundlegende Repräsentationen aufzubauen bevor schwierigere Fälle angegangen werden. Kann Konvergenzgeschwindigkeit und finale Leistung erheblich verbessern, besonders für komplexe Aufgaben.",
                  "nl": "Curriculum learning ordent trainingsvoorbeelden van eenvoudig naar complex, bootst menselijk leren na. Beginnen met makkelijkere voorbeelden helpt fundamentele representaties opbouwen voordat moeilijkere gevallen worden aangepakt. Kan convergentiesnelheid en finale prestaties aanzienlijk verbeteren, vooral voor complexe taken."
        }
      },
      {
        question: {
                  "en": "What is the Matthew correlation coefficient (MCC)?",
                  "es": "¿Qué es el coeficiente de correlación de Matthews (MCC)?",
                  "de": "Was ist der Matthews-Korrelationskoeffizient (MCC)?",
                  "nl": "Wat is de Matthew correlation coefficient (MCC)?"
        },
        options: [
        {
                  "en": "Coefficient for multi-class problems only",
                  "es": "Coeficiente solo para problemas multi-clase",
                  "de": "Koeffizient nur für Multi-Klassen-Probleme",
                  "nl": "Coëfficiënt alleen voor multi-class problemen"
        },
        {
                  "en": "Correlation between predicted and actual probabilities",
                  "es": "Correlación entre probabilidades predichas y reales",
                  "de": "Korrelation zwischen vorhergesagten und tatsächlichen Wahrscheinlichkeiten",
                  "nl": "Correlatie tussen voorspelde en werkelijke kansen"
        },
        {
                  "en": "A balanced classification metric considering all confusion matrix elements",
                  "es": "Una métrica de clasificación balanceada considerando todos los elementos de matriz de confusión",
                  "de": "Eine ausgewogene Klassifikationsmetrik die alle Konfusionsmatrix-Elemente berücksichtigt",
                  "nl": "Een gebalanceerde classificatiemetriek die alle confusion matrix elementen overweegt"
        },
        {
                  "en": "Measure of model complexity",
                  "es": "Medida de complejidad del modelo",
                  "de": "Maß für Modellkomplexität",
                  "nl": "Maat voor modelcomplexiteit"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "MCC ranges from -1 to +1, considering TP, TN, FP, FN: MCC = (TP×TN - FP×FN) / √((TP+FP)(TP+FN)(TN+FP)(TN+FN)). It's particularly useful for imbalanced datasets as it gives a balanced measure even when classes are very different in size, unlike accuracy or F1.",
                  "es": "MCC va de -1 a +1, considerando TP, TN, FP, FN: MCC = (TP×TN - FP×FN) / √((TP+FP)(TP+FN)(TN+FP)(TN+FN)). Es particularmente útil para conjuntos de datos desbalanceados ya que da una medida balanceada incluso cuando clases son muy diferentes en tamaño, a diferencia de exactitud o F1.",
                  "de": "MCC reicht von -1 bis +1, berücksichtigt TP, TN, FP, FN: MCC = (TP×TN - FP×FN) / √((TP+FP)(TP+FN)(TN+FP)(TN+FN)). Es ist besonders nützlich für unausgewogene Datensätze da es eine ausgewogene Maßnahme gibt selbst wenn Klassen sehr unterschiedlich groß sind, im Gegensatz zu Genauigkeit oder F1.",
                  "nl": "MCC varieert van -1 tot +1, overweegt TP, TN, FP, FN: MCC = (TP×TN - FP×FN) / √((TP+FP)(TP+FN)(TN+FP)(TN+FN)). Het is bijzonder nuttig voor ongebalanceerde datasets omdat het een gebalanceerde maat geeft zelfs wanneer klassen zeer verschillend in grootte zijn, in tegenstelling tot accuracy of F1."
        }
      },
      {
        question: {
                  "en": "What is the No Free Lunch theorem in machine learning?",
                  "es": "¿Qué es el teorema No Free Lunch en machine learning?",
                  "de": "Was ist das No Free Lunch Theorem im maschinellen Lernen?",
                  "nl": "Wat is het No Free Lunch theorema in machine learning?"
        },
        options: [
        {
                  "en": "Training requires computational resources",
                  "es": "Entrenamiento requiere recursos computacionales",
                  "de": "Training benötigt Rechenressourcen",
                  "nl": "Training vereist computationele middelen"
        },
        {
                  "en": "Free machine learning tools have hidden costs",
                  "es": "Herramientas gratuitas de machine learning tienen costos ocultos",
                  "de": "Kostenlose Machine Learning Tools haben versteckte Kosten",
                  "nl": "Gratis machine learning tools hebben verborgen kosten"
        },
        {
                  "en": "No algorithm is universally best across all possible problems",
                  "es": "Ningún algoritmo es universalmente mejor en todos los problemas posibles",
                  "de": "Kein Algorithmus ist universal am besten über alle möglichen Probleme",
                  "nl": "Geen algoritme is universeel het beste over alle mogelijke problemen"
        },
        {
                  "en": "Data collection is always expensive",
                  "es": "Recolección de datos siempre es costosa",
                  "de": "Datensammlung ist immer teuer",
                  "nl": "Dataverzameling is altijd duur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The No Free Lunch theorem states that averaged over all possible problems, every optimization algorithm performs equally well. This means algorithm superiority depends on problem characteristics, emphasizing the importance of understanding your specific problem and trying different approaches rather than assuming one algorithm is always best.",
                  "es": "El teorema No Free Lunch establece que promediado sobre todos los problemas posibles, cada algoritmo de optimización funciona igualmente bien. Esto significa que superioridad del algoritmo depende de características del problema, enfatizando importancia de entender tu problema específico y probar diferentes enfoques en lugar de asumir que un algoritmo siempre es mejor.",
                  "de": "Das No Free Lunch Theorem besagt dass gemittelt über alle möglichen Probleme jeder Optimierungsalgorithmus gleich gut funktioniert. Dies bedeutet Algorithmusüberlegenheit hängt von Problemcharakteristiken ab, betont Wichtigkeit Ihr spezifisches Problem zu verstehen und verschiedene Ansätze zu versuchen anstatt anzunehmen ein Algorithmus ist immer am besten.",
                  "nl": "Het No Free Lunch theorema stelt dat gemiddeld over alle mogelijke problemen elk optimalisatie-algoritme even goed presteert. Dit betekent dat algoritme superioriteit afhangt van probleemkenmerken, benadrukt het belang van je specifieke probleem begrijpen en verschillende benaderingen proberen in plaats van aan te nemen dat één algoritme altijd het beste is."
        }
      },
      {
        question: {
                  "en": "What is the purpose of weight initialization in neural networks?",
                  "es": "¿Cuál es el propósito de inicialización de pesos en redes neuronales?",
                  "de": "Was ist der Zweck der Gewichtsinitialisierung in neuronalen Netzwerken?",
                  "nl": "Wat is het doel van weight initialisatie in neurale netwerken?"
        },
        options: [
        {
                  "en": "Determine final model capacity",
                  "es": "Determinar capacidad final del modelo",
                  "de": "Finale Modellkapazität bestimmen",
                  "nl": "Finale modelcapaciteit bepalen"
        },
        {
                  "en": "Speed up inference time",
                  "es": "Acelerar tiempo de inferencia",
                  "de": "Inferenzzeit beschleunigen",
                  "nl": "Inferentietijd versnellen"
        },
        {
                  "en": "Set initial weights to break symmetry and enable effective learning",
                  "es": "Establecer pesos iniciales para romper simetría y permitir aprendizaje efectivo",
                  "de": "Anfangsgewichte setzen um Symmetrie zu brechen und effektives Lernen zu ermöglichen",
                  "nl": "Initiële gewichten instellen om symmetrie te breken en effectief leren mogelijk te maken"
        },
        {
                  "en": "Reduce model size",
                  "es": "Reducir tamaño del modelo",
                  "de": "Modellgröße reduzieren",
                  "nl": "Modelgrootte reduceren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Proper initialization (Xavier/Glorot, He initialization) prevents vanishing/exploding gradients and breaks symmetry (all neurons learning same features). Initialization scale depends on layer size and activation function. Poor initialization can make training slow or impossible, while good initialization accelerates convergence.",
                  "es": "Inicialización apropiada (Xavier/Glorot, He initialization) previene gradientes que se desvanecen/explotan y rompe simetría (todas neuronas aprendiendo mismas características). Escala de inicialización depende de tamaño de capa y función de activación. Mala inicialización puede hacer entrenamiento lento o imposible, mientras buena inicialización acelera convergencia.",
                  "de": "Richtige Initialisierung (Xavier/Glorot, He Initialization) verhindert verschwindende/explodierende Gradienten und bricht Symmetrie (alle Neuronen lernen gleiche Features). Initialisierungsskala hängt von Schichtgröße und Aktivierungsfunktion ab. Schlechte Initialisierung kann Training langsam oder unmöglich machen, während gute Initialisierung Konvergenz beschleunigt.",
                  "nl": "Juiste initialisatie (Xavier/Glorot, He initialization) voorkomt vanishing/exploding gradiënten en breekt symmetrie (alle neuronen leren dezelfde features). Initialisatieschaal hangt af van laaggrootte en activeringsfunctie. Slechte initialisatie kan training traag of onmogelijk maken, terwijl goede initialisatie convergentie versnelt."
        }
      },
      {
        question: {
                  "en": "What is model calibration in machine learning?",
                  "es": "¿Qué es calibración de modelo en machine learning?",
                  "de": "Was ist Modellkalibrierung im maschinellen Lernen?",
                  "nl": "Wat is modelkalibratie in machine learning?"
        },
        options: [
        {
                  "en": "Normalizing input features",
                  "es": "Normalizar características de entrada",
                  "de": "Eingabemerkmale normalisieren",
                  "nl": "Input features normaliseren"
        },
        {
                  "en": "Balancing class distributions",
                  "es": "Equilibrar distribuciones de clase",
                  "de": "Klassenverteilungen ausbalancieren",
                  "nl": "Klassedistributies balanceren"
        },
        {
                  "en": "Adjusting hyperparameters for best performance",
                  "es": "Ajustar hiperparámetros para mejor rendimiento",
                  "de": "Hyperparameter für beste Leistung anpassen",
                  "nl": "Hyperparameters aanpassen voor beste prestaties"
        },
        {
                  "en": "Ensuring predicted probabilities match actual frequencies of outcomes",
                  "es": "Asegurar que probabilidades predichas coincidan con frecuencias reales de resultados",
                  "de": "Sicherstellen dass vorhergesagte Wahrscheinlichkeiten tatsächlichen Häufigkeiten von Ergebnissen entsprechen",
                  "nl": "Zorgen dat voorspelde kansen overeenkomen met werkelijke frequenties van uitkomsten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A calibrated model's predicted probability of 0.8 should mean the event occurs ~80% of the time. Neural networks often produce overconfident predictions. Calibration methods like Platt scaling or temperature scaling adjust probabilities without changing predictions, crucial for decision-making based on probability thresholds.",
                  "es": "Probabilidad predicha de 0.8 de un modelo calibrado debe significar que evento ocurre ~80% del tiempo. Redes neuronales a menudo producen predicciones demasiado confiadas. Métodos de calibración como Platt scaling o temperature scaling ajustan probabilidades sin cambiar predicciones, crucial para toma de decisiones basada en umbrales de probabilidad.",
                  "de": "Vorhergesagte Wahrscheinlichkeit von 0.8 eines kalibrierten Modells sollte bedeuten dass Ereignis ~80% der Zeit auftritt. Neuronale Netzwerke produzieren oft überkonfidente Vorhersagen. Kalibrierungsmethoden wie Platt Scaling oder Temperature Scaling passen Wahrscheinlichkeiten an ohne Vorhersagen zu ändern, entscheidend für Entscheidungsfindung basierend auf Wahrscheinlichkeitsschwellen.",
                  "nl": "Voorspelde kans van 0.8 van een gekalibreerd model zou moeten betekenen dat gebeurtenis ~80% van de tijd optreedt. Neurale netwerken produceren vaak overconfident voorspellingen. Kalibratiemethoden zoals Platt scaling of temperature scaling passen kansen aan zonder voorspellingen te veranderen, cruciaal voor besluitvorming gebaseerd op kansdrempels."
        }
      },
      {
        question: {
                  "en": "What is the purpose of gradient clipping?",
                  "es": "¿Cuál es el propósito del recorte de gradiente?",
                  "de": "Was ist der Zweck des Gradienten-Clippings?",
                  "nl": "Wat is het doel van gradient clipping?"
        },
        options: [
        {
                  "en": "Reduce memory usage",
                  "es": "Reducir uso de memoria",
                  "de": "Speicherverbrauch reduzieren",
                  "nl": "Geheugengebruik verminderen"
        },
        {
                  "en": "Prevent exploding gradients by limiting gradient magnitude",
                  "es": "Prevenir gradientes que explotan limitando magnitud del gradiente",
                  "de": "Explodierende Gradienten verhindern durch Begrenzung der Gradientenmagnitude",
                  "nl": "Exploding gradiënten voorkomen door gradiëntgrootte te beperken"
        },
        {
                  "en": "Remove unnecessary gradient computations",
                  "es": "Eliminar computaciones de gradiente innecesarias",
                  "de": "Unnötige Gradientenberechnungen entfernen",
                  "nl": "Onnodige gradiëntberekeningen verwijderen"
        },
        {
                  "en": "Speed up backpropagation",
                  "es": "Acelerar retropropagación",
                  "de": "Backpropagation beschleunigen",
                  "nl": "Backpropagatie versnellen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Gradient clipping caps gradient values (by value or norm) to prevent exploding gradients, especially in RNNs. When gradients exceed a threshold, they're scaled down. This stabilizes training without significantly affecting learning direction. Common thresholds: clip by value [-1, 1] or by norm (max norm of 5).",
                  "es": "Recorte de gradiente limita valores de gradiente (por valor o norma) para prevenir gradientes que explotan, especialmente en RNNs. Cuando gradientes exceden umbral, se reducen. Esto estabiliza entrenamiento sin afectar significativamente dirección de aprendizaje. Umbrales comunes: recortar por valor [-1, 1] o por norma (norma máx de 5).",
                  "de": "Gradienten-Clipping begrenzt Gradientenwerte (nach Wert oder Norm) um explodierende Gradienten zu verhindern, besonders in RNNs. Wenn Gradienten einen Schwellwert überschreiten werden sie herunterskaliert. Dies stabilisiert Training ohne Lernrichtung signifikant zu beeinflussen. Häufige Schwellwerte: Clip nach Wert [-1, 1] oder nach Norm (max Norm von 5).",
                  "nl": "Gradient clipping beperkt gradiëntwaarden (naar waarde of norm) om exploding gradiënten te voorkomen, vooral in RNNs. Wanneer gradiënten een drempel overschrijden worden ze afgeschaald. Dit stabiliseert training zonder leerrichting significant te beïnvloeden. Veelvoorkomende drempels: clip naar waarde [-1, 1] of naar norm (max norm van 5)."
        }
      },
      {
        question: {
                  "en": "What is the purpose of skip connections in neural networks?",
                  "es": "¿Cuál es el propósito de conexiones skip en redes neuronales?",
                  "de": "Was ist der Zweck von Skip-Verbindungen in neuronalen Netzwerken?",
                  "nl": "Wat is het doel van skip connections in neurale netwerken?"
        },
        options: [
        {
                  "en": "Reduce number of parameters",
                  "es": "Reducir número de parámetros",
                  "de": "Anzahl der Parameter reduzieren",
                  "nl": "Aantal parameters reduceren"
        },
        {
                  "en": "Skip unnecessary layers during inference",
                  "es": "Omitir capas innecesarias durante inferencia",
                  "de": "Unnötige Schichten während Inferenz überspringen",
                  "nl": "Onnodige lagen overslaan tijdens inferentie"
        },
        {
                  "en": "Speed up training time",
                  "es": "Acelerar tiempo de entrenamiento",
                  "de": "Trainingszeit beschleunigen",
                  "nl": "Trainingstijd versnellen"
        },
        {
                  "en": "Allow gradients to flow directly through network, enabling deeper architectures",
                  "es": "Permitir que gradientes fluyan directamente a través de red, permitiendo arquitecturas más profundas",
                  "de": "Ermöglichen Gradienten direkt durch Netzwerk zu fließen, ermöglichen tiefere Architekturen",
                  "nl": "Staan gradiënten toe direct door netwerk te stromen, maken diepere architecturen mogelijk"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Skip connections (residual connections) add the input of a layer block directly to its output: F(x) + x. This creates gradient highways, preventing vanishing gradients and enabling training of very deep networks (ResNet uses this). They allow networks to learn identity mappings easily and improve gradient flow.",
                  "es": "Conexiones skip (conexiones residuales) agregan entrada de bloque de capa directamente a su salida: F(x) + x. Esto crea autopistas de gradiente, previniendo gradientes que se desvanecen y permitiendo entrenamiento de redes muy profundas (ResNet usa esto). Permiten a redes aprender mapeos de identidad fácilmente y mejoran flujo de gradiente.",
                  "de": "Skip-Verbindungen (Residualverbindungen) addieren Eingabe eines Schichtblocks direkt zu seiner Ausgabe: F(x) + x. Dies erstellt Gradienten-Autobahnen, verhindert verschwindende Gradienten und ermöglicht Training sehr tiefer Netzwerke (ResNet verwendet dies). Sie ermöglichen Netzwerken Identitätsabbildungen leicht zu lernen und verbessern Gradientenfluss.",
                  "nl": "Skip connections (residuele connecties) voegen de input van een laagblok direct toe aan zijn output: F(x) + x. Dit creëert gradiënt snelwegen, voorkomt vanishing gradiënten en maakt training van zeer diepe netwerken mogelijk (ResNet gebruikt dit). Ze stellen netwerken in staat identity mappings gemakkelijk te leren en verbeteren gradiëntenstroom."
        }
      },
      {
        question: {
                  "en": "What is the lottery ticket hypothesis?",
                  "es": "¿Qué es la hipótesis del billete de lotería?",
                  "de": "Was ist die Lottery Ticket Hypothese?",
                  "nl": "Wat is de lottery ticket hypothese?"
        },
        options: [
        {
                  "en": "Training success depends on luck",
                  "es": "Éxito de entrenamiento depende de suerte",
                  "de": "Trainingserfolg hängt von Glück ab",
                  "nl": "Trainingsucces hangt af van geluk"
        },
        {
                  "en": "Random initialization sometimes yields perfect models",
                  "es": "Inicialización aleatoria a veces produce modelos perfectos",
                  "de": "Zufällige Initialisierung erzeugt manchmal perfekte Modelle",
                  "nl": "Willekeurige initialisatie levert soms perfecte modellen op"
        },
        {
                  "en": "Winning models are found by trial and error",
                  "es": "Modelos ganadores se encuentran por ensayo y error",
                  "de": "Gewinnende Modelle werden durch Versuch und Irrtum gefunden",
                  "nl": "Winnende modellen worden gevonden door trial and error"
        },
        {
                  "en": "Dense networks contain sparse subnetworks that can train to full accuracy independently",
                  "es": "Redes densas contienen subredes dispersas que pueden entrenar a exactitud completa independientemente",
                  "de": "Dichte Netzwerke enthalten spärliche Subnetzwerke die unabhängig zu voller Genauigkeit trainieren können",
                  "nl": "Dichte netwerken bevatten sparse subnetwerken die onafhankelijk tot volledige nauwkeurigheid kunnen trainen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The lottery ticket hypothesis states that randomly-initialized dense networks contain small subnetworks ('winning tickets') that, when trained in isolation with the same initialization, can match the full network's performance. This suggests networks could be much smaller if we could identify these subnetworks upfront.",
                  "es": "La hipótesis del billete de lotería establece que redes densas inicializadas aleatoriamente contienen pequeñas subredes ('billetes ganadores') que, cuando se entrenan aisladamente con la misma inicialización, pueden igualar rendimiento de red completa. Esto sugiere que redes podrían ser mucho más pequeñas si pudiéramos identificar estas subredes de antemano.",
                  "de": "Die Lottery Ticket Hypothese besagt dass zufällig initialisierte dichte Netzwerke kleine Subnetzwerke ('Gewinnlose') enthalten die, wenn isoliert mit derselben Initialisierung trainiert, die Leistung des vollständigen Netzwerks erreichen können. Dies deutet an dass Netzwerke viel kleiner sein könnten wenn wir diese Subnetzwerke vorab identifizieren könnten.",
                  "nl": "De lottery ticket hypothese stelt dat willekeurig geïnitialiseerde dichte netwerken kleine subnetwerken ('winnende tickets') bevatten die, wanneer getraind in isolatie met dezelfde initialisatie, de prestaties van het volledige netwerk kunnen evenaren. Dit suggereert dat netwerken veel kleiner zouden kunnen zijn als we deze subnetwerken vooraf konden identificeren."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  }
})();