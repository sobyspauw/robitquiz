// AI Machine Learning Quiz - Level 5: Evaluation Metrics
(function() {
  const level5 = {
    name: {
      en: "ML Evaluation Metrics",
      es: "Métricas de Evaluación de ML",
      de: "ML-Bewertungsmetriken",
      nl: "ML Evaluatie Metrieken"
    },
    questions: [
      {
        question: {
          en: "What is the difference between batch gradient descent and stochastic gradient descent?",
          es: "Â¿CuÃ¡l es la diferencia entre descenso de gradiente por lotes y descenso de gradiente estocÃ¡stico?",
          de: "Was ist der Unterschied zwischen Batch-Gradientenabstieg und stochastischem Gradientenabstieg?",
          nl: "Wat is het verschil tussen batch gradient descent en stochastic gradient descent?"
        },
        options: [
          { en: "Batch uses entire dataset, SGD uses one sample at a time", es: "Batch usa todo el conjunto de datos, SGD usa una muestra a la vez", de: "Batch verwendet den gesamten Datensatz, SGD verwendet eine Stichprobe nach der anderen", nl: "Batch gebruikt hele dataset, SGD gebruikt Ã©Ã©n sample tegelijk" },
          { en: "Batch is faster than SGD", es: "Batch es mÃ¡s rÃ¡pido que SGD", de: "Batch ist schneller als SGD", nl: "Batch is sneller dan SGD" },
          { en: "SGD is more accurate than batch", es: "SGD es mÃ¡s preciso que batch", de: "SGD ist genauer als Batch", nl: "SGD is nauwkeuriger dan batch" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" }
        ],
        correct: 0,
        explanation: {
          en: "Batch gradient descent computes gradients using the entire training dataset before updating parameters, while SGD updates parameters after each individual training example, making it faster but noisier.",
          es: "El descenso de gradiente por lotes calcula gradientes usando todo el conjunto de datos de entrenamiento antes de actualizar parÃ¡metros, mientras SGD actualiza parÃ¡metros despuÃ©s de cada ejemplo de entrenamiento individual, haciÃ©ndolo mÃ¡s rÃ¡pido pero mÃ¡s ruidoso.",
          de: "Batch-Gradientenabstieg berechnet Gradienten mit dem gesamten Trainingsdatensatz vor der Parameteraktualisierung, wÃ¤hrend SGD Parameter nach jedem einzelnen Trainingsbeispiel aktualisiert, was schneller aber verrauschter ist.",
          nl: "Batch gradient descent berekent gradiÃ«nten met de hele trainingsdataset voordat parameters worden bijgewerkt, terwijl SGD parameters bijwerkt na elk individueel trainingsvoorbeeld, wat sneller maar ruisiger is."
        }
      },
      {
        question: {
          en: "What is the curse of dimensionality in machine learning?",
          es: "Â¿QuÃ© es la maldiciÃ³n de la dimensionalidad en machine learning?",
          de: "Was ist der Fluch der DimensionalitÃ¤t im maschinellen Lernen?",
          nl: "Wat is de curse of dimensionality in machine learning?"
        },
        options: [
          { en: "Too many features make data sparse and algorithms ineffective", es: "Demasiadas caracterÃ­sticas hacen que los datos sean escasos y los algoritmos ineficaces", de: "Zu viele Features machen Daten spÃ¤rlich und Algorithmen ineffektiv", nl: "Te veel features maken data schaars en algoritmes ineffectief" },
          { en: "Computers cannot handle 3D data", es: "Las computadoras no pueden manejar datos 3D", de: "Computer kÃ¶nnen keine 3D-Daten verarbeiten", nl: "Computers kunnen geen 3D data verwerken" },
          { en: "Machine learning models become cursed", es: "Los modelos de machine learning se maldicen", de: "Maschinelle Lernmodelle werden verflucht", nl: "Machine learning modellen worden vervloekt" },
          { en: "Training time increases linearly with features", es: "El tiempo de entrenamiento aumenta linealmente con las caracterÃ­sticas", de: "Trainingszeit steigt linear mit Features", nl: "Trainingstijd stijgt lineair met features" }
        ],
        correct: 0,
        explanation: {
          en: "As the number of dimensions (features) increases, data points become increasingly sparse in the high-dimensional space, making it difficult for algorithms to find meaningful patterns and requiring exponentially more data.",
          es: "A medida que aumenta el nÃºmero de dimensiones (caracterÃ­sticas), los puntos de datos se vuelven cada vez mÃ¡s escasos en el espacio de alta dimensiÃ³n, dificultando que los algoritmos encuentren patrones significativos y requiriendo exponencialmente mÃ¡s datos.",
          de: "Mit steigender Anzahl von Dimensionen (Features) werden Datenpunkte im hochdimensionalen Raum zunehmend spÃ¤rlich, erschweren es Algorithmen, bedeutungsvolle Muster zu finden und erfordern exponentiell mehr Daten.",
          nl: "Naarmate het aantal dimensies (features) toeneemt, worden datapunten steeds schaarser in de hoogdimensionale ruimte, waardoor het moeilijk wordt voor algoritmes om betekenisvolle patronen te vinden en exponentieel meer data vereist is."
        }
      },
      {
        question: {
          en: "What is the difference between precision and recall in classification?",
          es: "Â¿CuÃ¡l es la diferencia entre precisiÃ³n y recall en clasificaciÃ³n?",
          de: "Was ist der Unterschied zwischen PrÃ¤zision und Recall in der Klassifikation?",
          nl: "Wat is het verschil tussen precision en recall in classificatie?"
        },
        options: [
          { en: "Precision measures accuracy, recall measures speed", es: "La precisiÃ³n mide exactitud, recall mide velocidad", de: "PrÃ¤zision misst Genauigkeit, Recall misst Geschwindigkeit", nl: "Precision meet nauwkeurigheid, recall meet snelheid" },
          { en: "Precision is true positives / (true + false positives), recall is true positives / (true positives + false negatives)", es: "PrecisiÃ³n es verdaderos positivos / (verdaderos + falsos positivos), recall es verd. positivos / (verd. positivos + falsos negativos)", de: "PrÃ¤zision ist wahre Positive / (wahre + falsche Positive), Recall ist wahre Positive / (wahre Positive + falsche Negative)", nl: "Precision is true positives / (true + false positives), recall is true positives / (true positives + false negatives)" },
          { en: "Precision and recall are the same metric", es: "PrecisiÃ³n y recall son la misma mÃ©trica", de: "PrÃ¤zision und Recall sind dieselbe Metrik", nl: "Precision en recall zijn dezelfde metriek" },
          { en: "Precision measures training time, recall measures testing time", es: "PrecisiÃ³n mide tiempo de entrenamiento, recall mide tiempo de prueba", de: "PrÃ¤zision misst Trainingszeit, Recall misst Testzeit", nl: "Precision meet trainingstijd, recall meet testtijd" }
        ],
        correct: 1,
        explanation: {
          en: "Precision measures how many of the predicted positive cases were actually positive (avoiding false positives), while recall measures how many of the actual positive cases were correctly identified (avoiding false negatives).",
          es: "La precisiÃ³n mide cuÃ¡ntos de los casos positivos predichos fueron realmente positivos (evitando falsos positivos), mientras que recall mide cuÃ¡ntos de los casos positivos reales fueron correctamente identificados (evitando falsos negativos).",
          de: "PrÃ¤zision misst, wie viele der vorhergesagten positiven FÃ¤lle tatsÃ¤chlich positiv waren (Vermeidung falscher Positive), wÃ¤hrend Recall misst, wie viele der tatsÃ¤chlichen positiven FÃ¤lle korrekt identifiziert wurden (Vermeidung falscher Negative).",
          nl: "Precision meet hoeveel van de voorspelde positieve gevallen daadwerkelijk positief waren (valse positieven vermijden), terwijl recall meet hoeveel van de werkelijke positieve gevallen correct werden geÃ¯dentificeerd (valse negatieven vermijden)."
        }
      },
      {
        question: {
          en: "What is hyperparameter tuning in machine learning?",
          es: "Â¿QuÃ© es el ajuste de hiperparÃ¡metros en machine learning?",
          de: "Was ist Hyperparameter-Tuning im maschinellen Lernen?",
          nl: "Wat is hyperparameter tuning in machine learning?"
        },
        options: [
          { en: "Adjusting the volume of computer speakers", es: "Ajustar el volumen de los altavoces de la computadora", de: "LautstÃ¤rke der Computer-Lautsprecher einstellen", nl: "Het volume van computerspeakers aanpassen" },
          { en: "Optimizing model configuration settings for best performance", es: "Optimizar la configuraciÃ³n del modelo para el mejor rendimiento", de: "Modellkonfigurationseinstellungen fÃ¼r beste Leistung optimieren", nl: "Model configuratie-instellingen optimaliseren voor beste prestaties" },
          { en: "Training the model multiple times", es: "Entrenar el modelo mÃºltiples veces", de: "Das Modell mehrmals trainieren", nl: "Het model meerdere keren trainen" },
          { en: "Tuning the computer's hardware", es: "Ajustar el hardware de la computadora", de: "Computer-Hardware abstimmen", nl: "Computer hardware afstemmen" }
        ],
        correct: 1,
        explanation: {
          en: "Hyperparameter tuning involves adjusting model configuration parameters (like learning rate, number of layers, regularization strength) that are set before training to optimize model performance.",
          es: "El ajuste de hiperparÃ¡metros implica ajustar los parÃ¡metros de configuraciÃ³n del modelo (como tasa de aprendizaje, nÃºmero de capas, fuerza de regularizaciÃ³n) que se establecen antes del entrenamiento para optimizar el rendimiento del modelo.",
          de: "Hyperparameter-Tuning beinhaltet die Anpassung von Modellkonfigurationsparametern (wie Lernrate, Anzahl der Schichten, RegularisierungsstÃ¤rke), die vor dem Training gesetzt werden, um die Modellleistung zu optimieren.",
          nl: "Hyperparameter tuning houdt in dat je model configuratieparameters aanpast (zoals learning rate, aantal lagen, regularisatie sterkte) die voor training worden ingesteld om modelprestaties te optimaliseren."
        }
      },
      {
        question: {
          en: "What is the purpose of dropout in neural networks?",
          es: "Â¿CuÃ¡l es el propÃ³sito del dropout en redes neuronales?",
          de: "Was ist der Zweck von Dropout in neuronalen Netzwerken?",
          nl: "Wat is het doel van dropout in neurale netwerken?"
        },
        options: [
          { en: "To remove bad training data", es: "Para eliminar datos de entrenamiento malos", de: "Um schlechte Trainingsdaten zu entfernen", nl: "Om slechte trainingsdata te verwijderen" },
          { en: "To prevent overfitting by randomly deactivating neurons", es: "Para prevenir overfitting desactivando aleatoriamente neuronas", de: "Um Overfitting zu verhindern, indem Neuronen zufÃ¤llig deaktiviert werden", nl: "Om overfitting te voorkomen door willekeurig neuronen te deactiveren" },
          { en: "To speed up training", es: "Para acelerar el entrenamiento", de: "Um das Training zu beschleunigen", nl: "Om training te versnellen" },
          { en: "To reduce memory usage", es: "Para reducir el uso de memoria", de: "Um den Speicherverbrauch zu reduzieren", nl: "Om geheugengebruik te verminderen" }
        ],
        correct: 1,
        explanation: {
          en: "Dropout randomly sets some neurons to zero during training, forcing the network to not rely too heavily on specific neurons and improving generalization by reducing overfitting.",
          es: "Dropout establece aleatoriamente algunas neuronas a cero durante el entrenamiento, forzando a la red a no depender demasiado de neuronas especÃ­ficas y mejorando la generalizaciÃ³n al reducir el overfitting.",
          de: "Dropout setzt wÃ¤hrend des Trainings zufÃ¤llig einige Neuronen auf Null, zwingt das Netzwerk, nicht zu stark auf spezifische Neuronen zu vertrauen und verbessert die Generalisierung durch Reduzierung von Overfitting.",
          nl: "Dropout zet willekeurig sommige neuronen op nul tijdens training, dwingt het netwerk om niet te zwaar te vertrouwen op specifieke neuronen en verbetert generalisatie door overfitting te verminderen."
        }
      },
      {
        question: {
          en: "What is accuracy in machine learning?",
          es: "¿Qué es la exactitud en machine learning?",
          de: "Was ist Genauigkeit im maschinellen Lernen?",
          nl: "Wat is nauwkeurigheid in machine learning?"
        },
        options: [
          { en: "The percentage of correct predictions out of all predictions", es: "El porcentaje de predicciones correctas de todas las predicciones", de: "Der Prozentsatz korrekter Vorhersagen von allen Vorhersagen", nl: "Het percentage correcte voorspellingen van alle voorspellingen" },
          { en: "How precise the measurements are", es: "Qué tan precisas son las mediciones", de: "Wie präzise die Messungen sind", nl: "Hoe nauwkeurig de metingen zijn" },
          { en: "The speed of model training", es: "La velocidad del entrenamiento del modelo", de: "Die Geschwindigkeit des Modelltrainings", nl: "De snelheid van modeltraining" },
          { en: "The amount of data used", es: "La cantidad de datos utilizados", de: "Die Menge der verwendeten Daten", nl: "De hoeveelheid gebruikte data" }
        ],
        correct: 0,
        explanation: {
          en: "Accuracy is the ratio of correct predictions to total predictions, calculated as (True Positives + True Negatives) / (Total Predictions). It's a basic measure of model performance.",
          es: "La exactitud es la proporción de predicciones correctas del total de predicciones, calculada como (Verdaderos Positivos + Verdaderos Negativos) / (Predicciones Totales). Es una medida básica del rendimiento del modelo.",
          de: "Genauigkeit ist das Verhältnis korrekter Vorhersagen zu Gesamtvorhersagen, berechnet als (Wahre Positive + Wahre Negative) / (Gesamtvorhersagen). Es ist ein grundlegendes Maß für Modellleistung.",
          nl: "Nauwkeurigheid is de verhouding van correcte voorspellingen tot totale voorspellingen, berekend als (Ware Positieven + Ware Negatieven) / (Totale Voorspellingen). Het is een basismaat voor modelprestaties."
        }
      },
      {
        question: {
          en: "What is the F1-score?",
          es: "¿Qué es el F1-score?",
          de: "Was ist der F1-Score?",
          nl: "Wat is de F1-score?"
        },
        options: [
          { en: "The harmonic mean of precision and recall", es: "La media armónica de precisión y recall", de: "Das harmonische Mittel von Präzision und Recall", nl: "Het harmonisch gemiddelde van precision en recall" },
          { en: "The first score in a sequence", es: "La primera puntuación en una secuencia", de: "Die erste Punktzahl in einer Sequenz", nl: "De eerste score in een reeks" },
          { en: "A racing formula score", es: "Una puntuación de fórmula de carreras", de: "Eine Rennformel-Punktzahl", nl: "Een racefomule score" },
          { en: "The maximum of precision and recall", es: "El máximo de precisión y recall", de: "Das Maximum von Präzision und Recall", nl: "Het maximum van precision en recall" }
        ],
        correct: 0,
        explanation: {
          en: "F1-score combines precision and recall into a single metric using their harmonic mean: 2 * (precision * recall) / (precision + recall). It's useful when you need to balance both precision and recall.",
          es: "El F1-score combina precisión y recall en una sola métrica usando su media armónica: 2 * (precisión * recall) / (precisión + recall). Es útil cuando necesitas equilibrar tanto precisión como recall.",
          de: "F1-Score kombiniert Präzision und Recall in eine einzige Metrik mit ihrem harmonischen Mittel: 2 * (Präzision * Recall) / (Präzision + Recall). Es ist nützlich wenn Sie sowohl Präzision als auch Recall ausbalancieren müssen.",
          nl: "F1-score combineert precision en recall in één metriek met hun harmonisch gemiddelde: 2 * (precision * recall) / (precision + recall). Het is nuttig wanneer je zowel precision als recall moet balanceren."
        }
      },
      {
        question: {
          en: "What is a confusion matrix?",
          es: "¿Qué es una matriz de confusión?",
          de: "Was ist eine Konfusionsmatrix?",
          nl: "Wat is een confusion matrix?"
        },
        options: [
          { en: "A table showing true vs predicted classifications for each class", es: "Una tabla que muestra clasificaciones verdaderas vs predichas para cada clase", de: "Eine Tabelle die wahre vs vorhergesagte Klassifikationen für jede Klasse zeigt", nl: "Een tabel die ware vs voorspelde classificaties toont voor elke klasse" },
          { en: "A matrix that confuses the algorithm", es: "Una matriz que confunde al algoritmo", de: "Eine Matrix die den Algorithmus verwirrt", nl: "Een matrix die het algoritme verward" },
          { en: "A complex mathematical formula", es: "Una fórmula matemática compleja", de: "Eine komplexe mathematische Formel", nl: "Een complexe wiskundige formule" },
          { en: "A table of random numbers", es: "Una tabla de números aleatorios", de: "Eine Tabelle mit Zufallszahlen", nl: "Een tabel met willekeurige getallen" }
        ],
        correct: 0,
        explanation: {
          en: "A confusion matrix is a table where rows represent actual classes and columns represent predicted classes. It shows true positives, false positives, true negatives, and false negatives, helping visualize classification performance.",
          es: "Una matriz de confusión es una tabla donde las filas representan clases reales y las columnas representan clases predichas. Muestra verdaderos positivos, falsos positivos, verdaderos negativos y falsos negativos, ayudando a visualizar el rendimiento de clasificación.",
          de: "Eine Konfusionsmatrix ist eine Tabelle wo Zeilen tatsächliche Klassen und Spalten vorhergesagte Klassen repräsentieren. Sie zeigt wahre Positive, falsche Positive, wahre Negative und falsche Negative, hilft Klassifikationsleistung zu visualisieren.",
          nl: "Een confusion matrix is een tabel waarbij rijen werkelijke klassen vertegenwoordigen en kolommen voorspelde klassen. Het toont ware positieven, valse positieven, ware negatieven en valse negatieven, helpt bij het visualiseren van classificatieprestaties."
        }
      },
      {
        question: {
          en: "What is ROC-AUC in machine learning?",
          es: "¿Qué es ROC-AUC en machine learning?",
          de: "Was ist ROC-AUC im maschinellen Lernen?",
          nl: "Wat is ROC-AUC in machine learning?"
        },
        options: [
          { en: "Area Under the ROC Curve, measuring classifier performance across thresholds", es: "Área Bajo la Curva ROC, midiendo rendimiento del clasificador a través de umbrales", de: "Fläche unter der ROC-Kurve, misst Klassifikatorleistung über Schwellwerte", nl: "Gebied onder de ROC-curve, meet classifier prestaties over drempelwaarden" },
          { en: "A rock music rating system", es: "Un sistema de calificación de música rock", de: "Ein Rock-Musik-Bewertungssystem", nl: "Een rockmuziek beoordelingssysteem" },
          { en: "The speed of model training", es: "La velocidad del entrenamiento del modelo", de: "Die Geschwindigkeit des Modelltrainings", nl: "De snelheid van modeltraining" },
          { en: "A type of neural network", es: "Un tipo de red neuronal", de: "Ein Typ neuronales Netzwerk", nl: "Een type neuraal netwerk" }
        ],
        correct: 0,
        explanation: {
          en: "ROC-AUC measures how well a binary classifier distinguishes between classes. ROC curve plots True Positive Rate vs False Positive Rate at different thresholds. AUC (Area Under Curve) ranges from 0.5 (random) to 1.0 (perfect).",
          es: "ROC-AUC mide qué tan bien un clasificador binario distingue entre clases. La curva ROC grafica Tasa de Verdaderos Positivos vs Tasa de Falsos Positivos en diferentes umbrales. AUC (Área Bajo la Curva) va de 0.5 (aleatorio) a 1.0 (perfecto).",
          de: "ROC-AUC misst wie gut ein binärer Klassifikator zwischen Klassen unterscheidet. ROC-Kurve plottet Wahre-Positive-Rate vs Falsche-Positive-Rate bei verschiedenen Schwellwerten. AUC (Fläche unter Kurve) reicht von 0.5 (zufällig) bis 1.0 (perfekt).",
          nl: "ROC-AUC meet hoe goed een binaire classifier onderscheid maakt tussen klassen. ROC curve plot Ware Positieve Rate vs Valse Positieve Rate bij verschillende drempelwaarden. AUC (Gebied onder Curve) varieert van 0.5 (willekeurig) tot 1.0 (perfect)."
        }
      },
      {
        question: {
          en: "What is mean squared error (MSE)?",
          es: "¿Qué es el error cuadrático medio (MSE)?",
          de: "Was ist der mittlere quadratische Fehler (MSE)?",
          nl: "Wat is mean squared error (MSE)?"
        },
        options: [
          { en: "Average of squared differences between predicted and actual values", es: "Promedio de diferencias al cuadrado entre valores predichos y reales", de: "Durchschnitt quadrierter Differenzen zwischen vorhergesagten und tatsächlichen Werten", nl: "Gemiddelde van gekwadrateerde verschillen tussen voorspelde en werkelijke waarden" },
          { en: "The largest error in the dataset", es: "El error más grande en el conjunto de datos", de: "Der größte Fehler im Datensatz", nl: "De grootste fout in de dataset" },
          { en: "The number of mistakes made", es: "El número de errores cometidos", de: "Die Anzahl der gemachten Fehler", nl: "Het aantal gemaakte fouten" },
          { en: "A type of regression algorithm", es: "Un tipo de algoritmo de regresión", de: "Ein Typ Regressionsalgorithmus", nl: "Een type regressie algoritme" }
        ],
        correct: 0,
        explanation: {
          en: "MSE measures the average squared difference between predicted and actual values. Squaring emphasizes larger errors and makes all errors positive. Lower MSE indicates better model performance for regression tasks.",
          es: "MSE mide la diferencia al cuadrado promedio entre valores predichos y reales. Elevar al cuadrado enfatiza errores más grandes y hace todos los errores positivos. MSE más bajo indica mejor rendimiento del modelo para tareas de regresión.",
          de: "MSE misst die durchschnittliche quadrierte Differenz zwischen vorhergesagten und tatsächlichen Werten. Quadrieren betont größere Fehler und macht alle Fehler positiv. Niedrigerer MSE zeigt bessere Modellleistung für Regressionsaufgaben an.",
          nl: "MSE meet het gemiddelde gekwadrateerde verschil tussen voorspelde en werkelijke waarden. Kwadraat nemen benadrukt grotere fouten en maakt alle fouten positief. Lagere MSE duidt op betere modelprestaties voor regressietaken."
        }
      },
      {
        question: {
          en: "What is cross-validation used for?",
          es: "¿Para qué se usa la validación cruzada?",
          de: "Wofür wird Kreuzvalidierung verwendet?",
          nl: "Waarvoor wordt cross-validation gebruikt?"
        },
        options: [
          { en: "To get more reliable estimates of model performance", es: "Para obtener estimaciones más confiables del rendimiento del modelo", de: "Um zuverlässigere Schätzungen der Modellleistung zu erhalten", nl: "Om betrouwbaardere schattingen van modelprestaties te krijgen" },
          { en: "To validate user passwords", es: "Para validar contraseñas de usuario", de: "Um Benutzerpasswörter zu validieren", nl: "Om gebruikerswachtwoorden te valideren" },
          { en: "To check data quality", es: "Para verificar la calidad de los datos", de: "Um Datenqualität zu prüfen", nl: "Om datakwaliteit te controleren" },
          { en: "To cross-reference different datasets", es: "Para hacer referencias cruzadas de diferentes conjuntos de datos", de: "Um verschiedene Datensätze zu kreuzen", nl: "Om verschillende datasets te kruisrefereren" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-validation splits data into multiple folds, trains on some folds and tests on others repeatedly. This provides more robust performance estimates and helps detect overfitting by testing on multiple different subsets.",
          es: "La validación cruzada divide los datos en múltiples pliegues, entrena en algunos pliegues y prueba en otros repetidamente. Esto proporciona estimaciones de rendimiento más robustas y ayuda a detectar overfitting probando en múltiples subconjuntos diferentes.",
          de: "Kreuzvalidierung teilt Daten in mehrere Falten auf, trainiert auf einigen Falten und testet wiederholt auf anderen. Dies bietet robustere Leistungsschätzungen und hilft Overfitting zu erkennen durch Testen auf mehreren verschiedenen Teilmengen.",
          nl: "Cross-validation splitst data in meerdere vouwen, traint op sommige vouwen en test herhaaldelijk op anderen. Dit biedt robuustere prestatieschattingen en helpt overfitting te detecteren door te testen op meerdere verschillende subsets."
        }
      },
      {
        question: {
          en: "What is root mean squared error (RMSE)?",
          es: "¿Qué es la raíz del error cuadrático medio (RMSE)?",
          de: "Was ist die Wurzel des mittleren quadratischen Fehlers (RMSE)?",
          nl: "Wat is root mean squared error (RMSE)?"
        },
        options: [
          { en: "The square root of MSE, giving error in original units", es: "La raíz cuadrada de MSE, dando error en unidades originales", de: "Die Quadratwurzel von MSE, gibt Fehler in ursprünglichen Einheiten", nl: "De vierkantswortel van MSE, geeft fout in originele eenheden" },
          { en: "A more complex version of accuracy", es: "Una versión más compleja de exactitud", de: "Eine komplexere Version von Genauigkeit", nl: "Een complexere versie van nauwkeurigheid" },
          { en: "The square of MSE", es: "El cuadrado de MSE", de: "Das Quadrat von MSE", nl: "Het kwadraat van MSE" },
          { en: "A classification metric", es: "Una métrica de clasificación", de: "Eine Klassifikationsmetrik", nl: "Een classificatiemetriek" }
        ],
        correct: 0,
        explanation: {
          en: "RMSE is the square root of MSE, which converts the error back to the same units as the original data. This makes it more interpretable than MSE while maintaining sensitivity to larger errors.",
          es: "RMSE es la raíz cuadrada de MSE, que convierte el error de vuelta a las mismas unidades que los datos originales. Esto lo hace más interpretable que MSE mientras mantiene sensibilidad a errores más grandes.",
          de: "RMSE ist die Quadratwurzel von MSE, die den Fehler zurück in dieselben Einheiten wie die ursprünglichen Daten konvertiert. Dies macht es interpretierbarer als MSE während es Sensitivität für größere Fehler beibehält.",
          nl: "RMSE is de vierkantswortel van MSE, wat de fout terugzet naar dezelfde eenheden als de originele data. Dit maakt het interpreteerbaar dan MSE terwijl het gevoeligheid voor grotere fouten behoudt."
        }
      },
      {
        question: {
          en: "What is mean absolute error (MAE)?",
          es: "¿Qué es el error absoluto medio (MAE)?",
          de: "Was ist der mittlere absolute Fehler (MAE)?",
          nl: "Wat is mean absolute error (MAE)?"
        },
        options: [
          { en: "Average of absolute differences between predicted and actual values", es: "Promedio de diferencias absolutas entre valores predichos y reales", de: "Durchschnitt absoluter Differenzen zwischen vorhergesagten und tatsächlichen Werten", nl: "Gemiddelde van absolute verschillen tussen voorspelde en werkelijke waarden" },
          { en: "The maximum error in predictions", es: "El error máximo en predicciones", de: "Der maximale Fehler in Vorhersagen", nl: "De maximale fout in voorspellingen" },
          { en: "A measure of model complexity", es: "Una medida de complejidad del modelo", de: "Ein Maß für Modellkomplexität", nl: "Een maat voor modelcomplexiteit" },
          { en: "The average of all predictions", es: "El promedio de todas las predicciones", de: "Der Durchschnitt aller Vorhersagen", nl: "Het gemiddelde van alle voorspellingen" }
        ],
        correct: 0,
        explanation: {
          en: "MAE measures the average absolute difference between predictions and actual values. Unlike MSE, it doesn't square errors, so it's less sensitive to outliers and easier to interpret in original units.",
          es: "MAE mide la diferencia absoluta promedio entre predicciones y valores reales. A diferencia de MSE, no eleva al cuadrado los errores, por lo que es menos sensible a valores atípicos y más fácil de interpretar en unidades originales.",
          de: "MAE misst die durchschnittliche absolute Differenz zwischen Vorhersagen und tatsächlichen Werten. Im Gegensatz zu MSE quadriert es Fehler nicht, daher ist es weniger empfindlich für Ausreißer und einfacher in ursprünglichen Einheiten zu interpretieren.",
          nl: "MAE meet het gemiddelde absolute verschil tussen voorspellingen en werkelijke waarden. In tegenstelling tot MSE kwadrateert het fouten niet, dus het is minder gevoelig voor outliers en gemakkelijker te interpreteren in originele eenheden."
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
          { en: "To evaluate model performance during training and tune hyperparameters", es: "Para evaluar el rendimiento del modelo durante el entrenamiento y ajustar hiperparámetros", de: "Um Modellleistung während des Trainings zu bewerten und Hyperparameter zu optimieren", nl: "Om modelprestaties te evalueren tijdens training en hyperparameters af te stellen" },
          { en: "To validate that data is correct", es: "Para validar que los datos son correctos", de: "Um zu validieren dass Daten korrekt sind", nl: "Om te valideren dat data correct is" },
          { en: "To store backup copies of data", es: "Para almacenar copias de respaldo de datos", de: "Um Backup-Kopien von Daten zu speichern", nl: "Om backup kopieën van data op te slaan" },
          { en: "To test the final model performance", es: "Para probar el rendimiento final del modelo", de: "Um die finale Modellleistung zu testen", nl: "Om de finale modelprestaties te testen" }
        ],
        correct: 0,
        explanation: {
          en: "A validation set is used during model development to evaluate performance and make decisions about hyperparameters, model architecture, or feature selection without touching the test set, preventing data leakage.",
          es: "Un conjunto de validación se usa durante el desarrollo del modelo para evaluar rendimiento y tomar decisiones sobre hiperparámetros, arquitectura del modelo, o selección de características sin tocar el conjunto de prueba, previniendo filtración de datos.",
          de: "Ein Validierungsset wird während der Modellentwicklung verwendet um Leistung zu bewerten und Entscheidungen über Hyperparameter, Modellarchitektur oder Feature-Auswahl zu treffen ohne das Testset zu berühren, verhindert Datenleckage.",
          nl: "Een validatieset wordt gebruikt tijdens modelontwikkeling om prestaties te evalueren en beslissingen te nemen over hyperparameters, modelarchitectuur of feature selectie zonder de testset aan te raken, voorkomt data leakage."
        }
      },
      {
        question: {
          en: "What does it mean when a model has high bias?",
          es: "¿Qué significa cuando un modelo tiene alto sesgo?",
          de: "Was bedeutet es wenn ein Modell hohen Bias hat?",
          nl: "Wat betekent het wanneer een model hoge bias heeft?"
        },
        options: [
          { en: "The model is too simple and underfits the data", es: "El modelo es demasiado simple y subajusta los datos", de: "Das Modell ist zu einfach und unterpasst die Daten", nl: "Het model is te eenvoudig en onderfit de data" },
          { en: "The model is prejudiced against certain groups", es: "El modelo está prejuiciado contra ciertos grupos", de: "Das Modell ist voreingenommen gegen bestimmte Gruppen", nl: "Het model is bevooroordeeld tegen bepaalde groepen" },
          { en: "The model takes too long to train", es: "El modelo tarda demasiado en entrenar", de: "Das Modell braucht zu lange zum Trainieren", nl: "Het model duurt te lang om te trainen" },
          { en: "The model is too complex and overfits", es: "El modelo es demasiado complejo y sobreajusta", de: "Das Modell ist zu komplex und überpasst", nl: "Het model is te complex en overfit" }
        ],
        correct: 0,
        explanation: {
          en: "High bias indicates the model is too simple to capture the underlying patterns in the data, leading to underfitting. The model makes strong assumptions that don't match reality, resulting in systematic errors.",
          es: "Alto sesgo indica que el modelo es demasiado simple para capturar los patrones subyacentes en los datos, llevando a subajuste. El modelo hace suposiciones fuertes que no coinciden con la realidad, resultando en errores sistemáticos.",
          de: "Hoher Bias zeigt an dass das Modell zu einfach ist um die zugrundeliegenden Muster in den Daten zu erfassen, führt zu Underfitting. Das Modell macht starke Annahmen die nicht der Realität entsprechen, resultiert in systematischen Fehlern.",
          nl: "Hoge bias duidt erop dat het model te eenvoudig is om de onderliggende patronen in de data vast te leggen, leidt tot underfitting. Het model maakt sterke aannames die niet overeenkomen met de realiteit, resulteert in systematische fouten."
        }
      },
      {
        question: {
          en: "What does it mean when a model has high variance?",
          es: "¿Qué significa cuando un modelo tiene alta varianza?",
          de: "Was bedeutet es wenn ein Modell hohe Varianz hat?",
          nl: "Wat betekent het wanneer een model hoge variantie heeft?"
        },
        options: [
          { en: "The model is too sensitive to training data and overfits", es: "El modelo es demasiado sensible a los datos de entrenamiento y sobreajusta", de: "Das Modell ist zu empfindlich für Trainingsdaten und überpasst", nl: "Het model is te gevoelig voor trainingsdata en overfit" },
          { en: "The model has inconsistent output format", es: "El modelo tiene formato de salida inconsistente", de: "Das Modell hat inkonsistentes Ausgabeformat", nl: "Het model heeft inconsistent uitvoerformaat" },
          { en: "The model uses many different algorithms", es: "El modelo usa muchos algoritmos diferentes", de: "Das Modell verwendet viele verschiedene Algorithmen", nl: "Het model gebruikt veel verschillende algoritmes" },
          { en: "The model parameters change randomly", es: "Los parámetros del modelo cambian aleatoriamente", de: "Die Modellparameter ändern sich zufällig", nl: "De modelparameters veranderen willekeurig" }
        ],
        correct: 0,
        explanation: {
          en: "High variance means the model is too complex and learns noise in the training data, causing overfitting. Small changes in training data lead to very different models, indicating poor generalization.",
          es: "Alta varianza significa que el modelo es demasiado complejo y aprende ruido en los datos de entrenamiento, causando sobreajuste. Pequeños cambios en datos de entrenamiento llevan a modelos muy diferentes, indicando pobre generalización.",
          de: "Hohe Varianz bedeutet dass das Modell zu komplex ist und Rauschen in den Trainingsdaten lernt, verursacht Overfitting. Kleine Änderungen in Trainingsdaten führen zu sehr verschiedenen Modellen, zeigt schlechte Generalisierung an.",
          nl: "Hoge variantie betekent dat het model te complex is en ruis in de trainingsdata leert, veroorzaakt overfitting. Kleine veranderingen in trainingsdata leiden tot zeer verschillende modellen, duidt op slechte generalisatie."
        }
      },
      {
        question: {
          en: "What is the precision-recall tradeoff?",
          es: "¿Qué es el tradeoff precisión-recall?",
          de: "Was ist der Präzision-Recall-Tradeoff?",
          nl: "Wat is de precision-recall tradeoff?"
        },
        options: [
          { en: "As you increase precision, recall typically decreases and vice versa", es: "Mientras aumentas precisión, el recall típicamente disminuye y viceversa", de: "Wenn Sie Präzision erhöhen, nimmt Recall typischerweise ab und umgekehrt", nl: "Naarmate je precision verhoogt, neemt recall meestal af en omgekeerd" },
          { en: "You must choose between precision and recall, can't have both", es: "Debes elegir entre precisión y recall, no puedes tener ambos", de: "Sie müssen zwischen Präzision und Recall wählen, können nicht beide haben", nl: "Je moet kiezen tussen precision en recall, je kunt niet beide hebben" },
          { en: "Precision and recall always move in the same direction", es: "Precisión y recall siempre se mueven en la misma dirección", de: "Präzision und Recall bewegen sich immer in dieselbe Richtung", nl: "Precision en recall bewegen altijd in dezelfde richting" },
          { en: "There is no relationship between precision and recall", es: "No hay relación entre precisión y recall", de: "Es gibt keine Beziehung zwischen Präzision und Recall", nl: "Er is geen relatie tussen precision en recall" }
        ],
        correct: 0,
        explanation: {
          en: "The precision-recall tradeoff occurs because adjusting the classification threshold affects both metrics inversely. Lowering the threshold increases recall (catches more positives) but decreases precision (more false positives). The optimal balance depends on the problem domain.",
          es: "El tradeoff precisión-recall ocurre porque ajustar el umbral de clasificación afecta ambas métricas inversamente. Bajar el umbral aumenta recall (captura más positivos) pero disminuye precisión (más falsos positivos). El equilibrio óptimo depende del dominio del problema.",
          de: "Der Präzision-Recall-Tradeoff tritt auf weil Anpassung des Klassifikationsschwellwerts beide Metriken umgekehrt beeinflusst. Senken des Schwellwerts erhöht Recall (fängt mehr Positive) aber verringert Präzision (mehr falsche Positive). Das optimale Gleichgewicht hängt vom Problembereich ab.",
          nl: "De precision-recall tradeoff treedt op omdat het aanpassen van de classificatiedrempel beide metrieken omgekeerd beïnvloedt. Het verlagen van de drempel verhoogt recall (vangt meer positieven) maar verlaagt precision (meer valse positieven). De optimale balans hangt af van het probleemdomein."
        }
      },
      {
        question: {
          en: "What is the difference between Type I and Type II errors?",
          es: "¿Cuál es la diferencia entre errores Tipo I y Tipo II?",
          de: "Was ist der Unterschied zwischen Typ I und Typ II Fehlern?",
          nl: "Wat is het verschil tussen Type I en Type II fouten?"
        },
        options: [
          { en: "Type I is false positive, Type II is false negative", es: "Tipo I es falso positivo, Tipo II es falso negativo", de: "Typ I ist falsch positiv, Typ II ist falsch negativ", nl: "Type I is vals positief, Type II is vals negatief" },
          { en: "Type I is a minor error, Type II is a major error", es: "Tipo I es un error menor, Tipo II es un error mayor", de: "Typ I ist ein geringer Fehler, Typ II ist ein schwerer Fehler", nl: "Type I is een kleine fout, Type II is een grote fout" },
          { en: "Type I occurs during training, Type II during testing", es: "Tipo I ocurre durante entrenamiento, Tipo II durante pruebas", de: "Typ I tritt während Training auf, Typ II während Testing", nl: "Type I treedt op tijdens training, Type II tijdens testen" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Het zijn hetzelfde" }
        ],
        correct: 0,
        explanation: {
          en: "Type I error (false positive) occurs when we reject a true null hypothesis - we say something is positive when it's actually negative. Type II error (false negative) occurs when we fail to reject a false null hypothesis - we miss a positive case.",
          es: "Error Tipo I (falso positivo) ocurre cuando rechazamos una hipótesis nula verdadera - decimos que algo es positivo cuando en realidad es negativo. Error Tipo II (falso negativo) ocurre cuando fallamos en rechazar una hipótesis nula falsa - perdemos un caso positivo.",
          de: "Typ I Fehler (falsch positiv) tritt auf wenn wir eine wahre Nullhypothese ablehnen - wir sagen etwas ist positiv wenn es tatsächlich negativ ist. Typ II Fehler (falsch negativ) tritt auf wenn wir eine falsche Nullhypothese nicht ablehnen - wir verpassen einen positiven Fall.",
          nl: "Type I fout (vals positief) treedt op wanneer we een ware nulhypothese verwerpen - we zeggen dat iets positief is terwijl het eigenlijk negatief is. Type II fout (vals negatief) treedt op wanneer we falen een valse nulhypothese te verwerpen - we missen een positief geval."
        }
      },
      {
        question: {
          en: "What is regularization and why is it used in machine learning?",
          es: "¿Qué es la regularización y por qué se usa en machine learning?",
          de: "Was ist Regularisierung und warum wird sie im maschinellen Lernen verwendet?",
          nl: "Wat is regularisatie en waarom wordt het gebruikt in machine learning?"
        },
        options: [
          { en: "A technique to prevent overfitting by adding penalty terms to the loss function", es: "Una técnica para prevenir sobreajuste añadiendo términos de penalización a la función de pérdida", de: "Eine Technik zur Verhinderung von Overfitting durch Hinzufügen von Penalty-Termen zur Verlustfunktion", nl: "Een techniek om overfitting te voorkomen door penalty termen toe te voegen aan de loss functie" },
          { en: "Making data follow regular patterns", es: "Hacer que los datos sigan patrones regulares", de: "Daten regelmäßigen Mustern folgen lassen", nl: "Data reguliere patronen laten volgen" },
          { en: "Organizing data in regular intervals", es: "Organizar datos en intervalos regulares", de: "Daten in regelmäßigen Intervallen organisieren", nl: "Data organiseren in reguliere intervallen" },
          { en: "Creating regular training schedules", es: "Crear horarios regulares de entrenamiento", de: "Regelmäßige Trainingspläne erstellen", nl: "Reguliere trainingsschema's maken" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization techniques like L1 and L2 add penalty terms that discourage complex models, helping prevent overfitting by forcing the model to be simpler and more generalizable.",
          es: "Las técnicas de regularización como L1 y L2 añaden términos de penalización que desalientan modelos complejos, ayudando a prevenir sobreajuste forzando al modelo a ser más simple y generalizable.",
          de: "Regularisierungstechniken wie L1 und L2 fügen Penalty-Terme hinzu die komplexe Modelle entmutigen, helfen Overfitting zu verhindern indem sie das Modell zwingen einfacher und verallgemeinerbarer zu sein.",
          nl: "Regularisatietechnieken zoals L1 en L2 voegen penalty termen toe die complexe modellen ontmoedigen, helpen overfitting voorkomen door het model te dwingen eenvoudiger en meer generaliseerbaar te zijn."
        }
      },
      {
        question: {
          en: "What is ensemble learning and what are its main benefits?",
          es: "¿Qué es el aprendizaje ensemble y cuáles son sus principales beneficios?",
          de: "Was ist Ensemble Learning und was sind seine Hauptvorteile?",
          nl: "Wat is ensemble learning en wat zijn de belangrijkste voordelen?"
        },
        options: [
          { en: "Combining multiple models to make predictions, often achieving better performance than individual models", es: "Combinar múltiples modelos para hacer predicciones, a menudo logrando mejor rendimiento que modelos individuales", de: "Mehrere Modelle kombinieren um Vorhersagen zu treffen, erreicht oft bessere Leistung als einzelne Modelle", nl: "Meerdere modellen combineren om voorspellingen te maken, behaalt vaak betere prestaties dan individuele modellen" },
          { en: "Training models in musical ensembles", es: "Entrenar modelos en conjuntos musicales", de: "Modelle in Musikensembles trainieren", nl: "Modellen trainen in muziekensembles" },
          { en: "Learning from ensemble casts in movies", es: "Aprender de reparto coral en películas", de: "Von Ensemble-Besetzungen in Filmen lernen", nl: "Leren van ensemble-casts in films" },
          { en: "Only using the best single model", es: "Solo usar el mejor modelo individual", de: "Nur das beste einzelne Modell verwenden", nl: "Alleen het beste individuele model gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble methods like bagging, boosting, and stacking combine predictions from multiple models, reducing variance and bias to achieve more robust and accurate predictions than any single model.",
          es: "Los métodos ensemble como bagging, boosting y stacking combinan predicciones de múltiples modelos, reduciendo varianza y sesgo para lograr predicciones más robustas y precisas que cualquier modelo individual.",
          de: "Ensemble-Methoden wie Bagging, Boosting und Stacking kombinieren Vorhersagen mehrerer Modelle, reduzieren Varianz und Bias um robustere und genauere Vorhersagen als jedes einzelne Modell zu erreichen.",
          nl: "Ensemble methoden zoals bagging, boosting en stacking combineren voorspellingen van meerdere modellen, verminderen variantie en bias om robustere en nauwkeurigere voorspellingen te bereiken dan elk individueel model."
        }
      },
      {
        question: {
          en: "What is gradient boosting?",
          es: "¿Qué es gradient boosting?",
          de: "Was ist Gradient Boosting?",
          nl: "Wat is gradient boosting?"
        },
        options: [
          { en: "An ensemble method that sequentially builds models to correct previous errors", es: "Un método ensemble que construye modelos secuencialmente para corregir errores previos", de: "Eine Ensemble-Methode die sequenziell Modelle baut um frühere Fehler zu korrigieren", nl: "Een ensemble methode die opeenvolgend modellen bouwt om eerdere fouten te corrigeren" },
          { en: "A way to speed up gradient descent", es: "Una forma de acelerar gradient descent", de: "Eine Methode um Gradientenabstieg zu beschleunigen", nl: "Een manier om gradient descent te versnellen" },
          { en: "Increasing the learning rate gradually", es: "Aumentar gradualmente la tasa de aprendizaje", de: "Lernrate allmählich erhöhen", nl: "De learning rate geleidelijk verhogen" },
          { en: "Boosting computer performance for gradient calculations", es: "Aumentar el rendimiento del ordenador para cálculos de gradiente", de: "Computerleistung für Gradientenberechnungen steigern", nl: "Computerprestaties verhogen voor gradiëntberekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient boosting builds models sequentially, where each new model focuses on correcting errors from previous models by fitting residuals, leading to powerful ensemble performance.",
          es: "Gradient boosting construye modelos secuencialmente, donde cada nuevo modelo se enfoca en corregir errores de modelos previos ajustando residuos, llevando a rendimiento ensemble poderoso.",
          de: "Gradient Boosting baut Modelle sequenziell, wobei jedes neue Modell sich auf Korrektur von Fehlern früherer Modelle konzentriert durch Fitting von Residuen, führt zu leistungsstarker Ensemble-Performance.",
          nl: "Gradient boosting bouwt modellen opeenvolgend, waarbij elk nieuw model zich richt op het corrigeren van fouten van eerdere modellen door residuen te fitten, leidt tot krachtige ensemble prestaties."
        }
      },
      {
        question: {
          en: "What are word embeddings in NLP?",
          es: "¿Qué son word embeddings en NLP?",
          de: "Was sind Word Embeddings in NLP?",
          nl: "Wat zijn word embeddings in NLP?"
        },
        options: [
          { en: "Dense vector representations of words capturing semantic relationships", es: "Representaciones vectoriales densas de palabras que capturan relaciones semánticas", de: "Dichte Vektordarstellungen von Wörtern die semantische Beziehungen erfassen", nl: "Dichte vectorrepresentaties van woorden die semantische relaties vastleggen" },
          { en: "Words embedded in sentences", es: "Palabras incrustadas en oraciones", de: "Wörter eingebettet in Sätzen", nl: "Woorden ingebed in zinnen" },
          { en: "Dictionary definitions of words", es: "Definiciones de diccionario de palabras", de: "Wörterbuchdefinitionen von Wörtern", nl: "Woordenboekdefinities van woorden" },
          { en: "Frequency counts of words", es: "Conteos de frecuencia de palabras", de: "Häufigkeitszählungen von Wörtern", nl: "Frequentietellingen van woorden" }
        ],
        correct: 0,
        explanation: {
          en: "Word embeddings like Word2Vec or GloVe represent words as dense vectors where similar words have similar vectors, capturing semantic meaning through vector arithmetic (e.g., king - man + woman ≈ queen).",
          es: "Word embeddings como Word2Vec o GloVe representan palabras como vectores densos donde palabras similares tienen vectores similares, capturando significado semántico mediante aritmética vectorial (ej., rey - hombre + mujer ≈ reina).",
          de: "Word Embeddings wie Word2Vec oder GloVe stellen Wörter als dichte Vektoren dar wo ähnliche Wörter ähnliche Vektoren haben, erfassen semantische Bedeutung durch Vektorarithmetik (z.B., König - Mann + Frau ≈ Königin).",
          nl: "Word embeddings zoals Word2Vec of GloVe vertegenwoordigen woorden als dichte vectoren waarbij vergelijkbare woorden vergelijkbare vectoren hebben, leggen semantische betekenis vast door vectorrekenkunde (bijv., koning - man + vrouw ≈ koningin)."
        }
      },
      {
        question: {
          en: "What is the attention mechanism in neural networks?",
          es: "¿Qué es el mecanismo de atención en redes neuronales?",
          de: "Was ist der Aufmerksamkeitsmechanismus in neuronalen Netzwerken?",
          nl: "Wat is het attention mechanisme in neurale netwerken?"
        },
        options: [
          { en: "A mechanism that allows models to focus on relevant parts of input", es: "Un mecanismo que permite a los modelos enfocarse en partes relevantes de la entrada", de: "Ein Mechanismus der Modellen ermöglicht sich auf relevante Teile der Eingabe zu konzentrieren", nl: "Een mechanisme dat modellen in staat stelt zich te richten op relevante delen van de input" },
          { en: "Making models more attentive to training time", es: "Hacer modelos más atentos al tiempo de entrenamiento", de: "Modelle aufmerksamer für Trainingszeit machen", nl: "Modellen attentiever maken voor trainingstijd" },
          { en: "User attention tracking during inference", es: "Seguimiento de atención del usuario durante inferencia", de: "Benutzeraufmerksamkeitsverfolgung während Inferenz", nl: "Gebruikersaandacht volgen tijdens inferentie" },
          { en: "A warning system for model errors", es: "Un sistema de advertencia para errores del modelo", de: "Ein Warnsystem für Modellfehler", nl: "Een waarschuwingssysteem voor modelfouten" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms assign different weights to different parts of the input, allowing the model to focus on the most relevant information for each prediction, crucial in transformers and sequence-to-sequence models.",
          es: "Los mecanismos de atención asignan diferentes pesos a diferentes partes de la entrada, permitiendo al modelo enfocarse en la información más relevante para cada predicción, crucial en transformers y modelos secuencia-a-secuencia.",
          de: "Aufmerksamkeitsmechanismen weisen verschiedenen Teilen der Eingabe unterschiedliche Gewichte zu, ermöglichen dem Modell sich auf die relevanteste Information für jede Vorhersage zu konzentrieren, entscheidend in Transformern und Sequenz-zu-Sequenz-Modellen.",
          nl: "Attention mechanismen kennen verschillende gewichten toe aan verschillende delen van de input, stellen het model in staat zich te richten op de meest relevante informatie voor elke voorspelling, cruciaal in transformers en sequence-to-sequence modellen."
        }
      },
      {
        question: {
          en: "What is grid search for hyperparameter tuning?",
          es: "¿Qué es grid search para ajuste de hiperparámetros?",
          de: "Was ist Grid Search für Hyperparameter-Tuning?",
          nl: "Wat is grid search voor hyperparameter tuning?"
        },
        options: [
          { en: "Exhaustively trying all combinations of predefined parameter values", es: "Probar exhaustivamente todas las combinaciones de valores de parámetros predefinidos", de: "Erschöpfendes Ausprobieren aller Kombinationen vordefinierter Parameterwerte", nl: "Uitputtend alle combinaties van voorgedefinieerde parameterwaarden proberen" },
          { en: "Searching for data in a grid structure", es: "Buscar datos en una estructura de cuadrícula", de: "Daten in einer Gitterstruktur suchen", nl: "Zoeken naar data in een rasterstructuur" },
          { en: "Organizing hyperparameters in a visual grid", es: "Organizar hiperparámetros en una cuadrícula visual", de: "Hyperparameter in einem visuellen Gitter organisieren", nl: "Hyperparameters organiseren in een visueel raster" },
          { en: "Random search in parameter space", es: "Búsqueda aleatoria en espacio de parámetros", de: "Zufällige Suche im Parameterraum", nl: "Willekeurig zoeken in parameterruimte" }
        ],
        correct: 0,
        explanation: {
          en: "Grid search systematically tries every combination of hyperparameter values from predefined ranges, evaluating model performance for each. While thorough, it can be computationally expensive for many parameters.",
          es: "Grid search prueba sistemáticamente cada combinación de valores de hiperparámetros de rangos predefinidos, evaluando rendimiento del modelo para cada uno. Aunque exhaustivo, puede ser computacionalmente costoso para muchos parámetros.",
          de: "Grid Search probiert systematisch jede Kombination von Hyperparameterwerten aus vordefinierten Bereichen aus, bewertet Modellleistung für jede. Obwohl gründlich, kann es rechenintensiv für viele Parameter sein.",
          nl: "Grid search probeert systematisch elke combinatie van hyperparameterwaarden uit voorgedefinieerde bereiken, evalueert modelprestaties voor elk. Hoewel grondig, kan het rekenintensief zijn voor veel parameters."
        }
      },
      {
        question: {
          en: "What is data leakage in machine learning?",
          es: "¿Qué es data leakage en machine learning?",
          de: "Was ist Data Leakage im maschinellen Lernen?",
          nl: "Wat is data leakage in machine learning?"
        },
        options: [
          { en: "When test/validation data information leaks into the training process", es: "Cuando información de datos de test/validación se filtra en el proceso de entrenamiento", de: "Wenn Test-/Validierungsdateninformationen in den Trainingsprozess lecken", nl: "Wanneer test/validatie data informatie lekt in het trainingsproces" },
          { en: "Data being stolen by hackers", es: "Datos siendo robados por hackers", de: "Daten werden von Hackern gestohlen", nl: "Data wordt gestolen door hackers" },
          { en: "Memory leaks in the code", es: "Fugas de memoria en el código", de: "Speicherlecks im Code", nl: "Geheugenlekken in de code" },
          { en: "Data being lost during training", es: "Datos perdiéndose durante entrenamiento", de: "Daten gehen während Training verloren", nl: "Data raakt verloren tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Data leakage occurs when information from outside the training dataset influences the model, leading to overly optimistic performance estimates. Examples include using future data, improperly preprocessing before splitting, or including target-derived features.",
          es: "Data leakage ocurre cuando información fuera del conjunto de entrenamiento influye en el modelo, llevando a estimaciones de rendimiento demasiado optimistas. Ejemplos incluyen usar datos futuros, preprocesar incorrectamente antes de dividir, o incluir características derivadas del objetivo.",
          de: "Data Leakage tritt auf wenn Information außerhalb des Trainingsdatensatzes das Modell beeinflusst, führt zu übermäßig optimistischen Leistungsschätzungen. Beispiele sind Verwendung zukünftiger Daten, unsachgemäßes Vorverarbeiten vor Aufteilung, oder Einbeziehen zielabgeleiteter Features.",
          nl: "Data leakage treedt op wanneer informatie van buiten de trainingsdataset het model beïnvloedt, leidt tot te optimistische prestatieschattingen. Voorbeelden zijn toekomstige data gebruiken, onjuist voorverwerken voor splitsen, of doel-afgeleide features opnemen."
        }
      },
      {
        question: {
          en: "What is the difference between eager and lazy evaluation?",
          es: "¿Cuál es la diferencia entre evaluación eager y lazy?",
          de: "Was ist der Unterschied zwischen Eager- und Lazy-Evaluierung?",
          nl: "Wat is het verschil tussen eager en lazy evaluatie?"
        },
        options: [
          { en: "Eager evaluates immediately, lazy delays until result is needed", es: "Eager evalúa inmediatamente, lazy retrasa hasta que se necesita el resultado", de: "Eager wertet sofort aus, Lazy verzögert bis Ergebnis benötigt wird", nl: "Eager evalueert direct, lazy stelt uit tot resultaat nodig is" },
          { en: "Eager is faster, lazy is slower", es: "Eager es más rápido, lazy es más lento", de: "Eager ist schneller, Lazy ist langsamer", nl: "Eager is sneller, lazy is langzamer" },
          { en: "Eager uses more memory, lazy uses less", es: "Eager usa más memoria, lazy usa menos", de: "Eager verwendet mehr Speicher, Lazy weniger", nl: "Eager gebruikt meer geheugen, lazy minder" },
          { en: "They are the same concept", es: "Son el mismo concepto", de: "Sie sind dasselbe Konzept", nl: "Het zijn hetzelfde concept" }
        ],
        correct: 0,
        explanation: {
          en: "Eager evaluation computes operations immediately when defined (like PyTorch's default), while lazy evaluation builds a computation graph first and executes later (like TensorFlow 1.x), allowing for optimization but adding complexity.",
          es: "Eager evaluation computa operaciones inmediatamente cuando se definen (como predeterminado de PyTorch), mientras lazy evaluation construye un grafo de computación primero y ejecuta después (como TensorFlow 1.x), permitiendo optimización pero añadiendo complejidad.",
          de: "Eager Evaluation berechnet Operationen sofort wenn definiert (wie PyTorch Standard), während Lazy Evaluation zuerst einen Berechnungsgraphen baut und später ausführt (wie TensorFlow 1.x), ermöglicht Optimierung aber fügt Komplexität hinzu.",
          nl: "Eager evaluatie berekent operaties direct wanneer gedefinieerd (zoals PyTorch standaard), terwijl lazy evaluatie eerst een berekeningsgrafiek bouwt en later uitvoert (zoals TensorFlow 1.x), maakt optimalisatie mogelijk maar voegt complexiteit toe."
        }
      },
      {
        question: {
          en: "What is adversarial training?",
          es: "¿Qué es entrenamiento adversarial?",
          de: "Was ist Adversarial Training?",
          nl: "Wat is adversarial training?"
        },
        options: [
          { en: "Training models with intentionally perturbed examples to improve robustness", es: "Entrenar modelos con ejemplos intencionalmente perturbados para mejorar robustez", de: "Modelle mit absichtlich gestörten Beispielen trainieren um Robustheit zu verbessern", nl: "Modellen trainen met opzettelijk verstoorde voorbeelden om robuustheid te verbeteren" },
          { en: "Training two models to compete against each other", es: "Entrenar dos modelos para competir entre sí", de: "Zwei Modelle trainieren um gegeneinander zu konkurrieren", nl: "Twee modellen trainen om tegen elkaar te concurreren" },
          { en: "Training models on adversarial datasets", es: "Entrenar modelos en conjuntos de datos adversariales", de: "Modelle auf adversarialen Datensätzen trainieren", nl: "Modellen trainen op adversariale datasets" },
          { en: "Training in hostile environments", es: "Entrenar en entornos hostiles", de: "In feindlichen Umgebungen trainieren", nl: "Trainen in vijandige omgevingen" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial training augments training data with adversarial examples (inputs with small perturbations that fool the model), forcing the model to learn more robust features and defend against adversarial attacks.",
          es: "Adversarial training aumenta datos de entrenamiento con ejemplos adversariales (entradas con pequeñas perturbaciones que engañan al modelo), forzando al modelo a aprender características más robustas y defenderse contra ataques adversariales.",
          de: "Adversarial Training erweitert Trainingsdaten mit adversarialen Beispielen (Eingaben mit kleinen Störungen die das Modell täuschen), zwingt das Modell robustere Features zu lernen und sich gegen adversariale Angriffe zu verteidigen.",
          nl: "Adversarial training vergroot trainingsdata met adversariale voorbeelden (inputs met kleine verstoringen die het model misleiden), dwingt het model robuustere features te leren en zich te verdedigen tegen adversariale aanvallen."
        }
      },
      {
        question: {
          en: "What is meta-learning?",
          es: "¿Qué es meta-learning?",
          de: "Was ist Meta-Learning?",
          nl: "Wat is meta-learning?"
        },
        options: [
          { en: "Learning how to learn - training models to adapt quickly to new tasks", es: "Aprender a aprender - entrenar modelos para adaptarse rápidamente a nuevas tareas", de: "Lernen zu lernen - Modelle trainieren um sich schnell an neue Aufgaben anzupassen", nl: "Leren te leren - modellen trainen om snel aan te passen aan nieuwe taken" },
          { en: "Learning metadata about datasets", es: "Aprender metadatos sobre conjuntos de datos", de: "Metadaten über Datensätze lernen", nl: "Metadata leren over datasets" },
          { en: "High-level abstract learning", es: "Aprendizaje abstracto de alto nivel", de: "Hochrangiges abstraktes Lernen", nl: "Hoog-niveau abstract leren" },
          { en: "Learning from meta tags", es: "Aprender de meta etiquetas", de: "Von Meta-Tags lernen", nl: "Leren van meta tags" }
        ],
        correct: 0,
        explanation: {
          en: "Meta-learning trains models on a variety of tasks so they can quickly adapt to new, similar tasks with minimal data. Also called 'learning to learn', it's crucial for few-shot learning scenarios.",
          es: "Meta-learning entrena modelos en una variedad de tareas para que puedan adaptarse rápidamente a tareas nuevas similares con datos mínimos. También llamado 'aprender a aprender', es crucial para escenarios de few-shot learning.",
          de: "Meta-Learning trainiert Modelle auf verschiedenen Aufgaben damit sie sich schnell an neue ähnliche Aufgaben mit minimalen Daten anpassen können. Auch 'Lernen zu lernen' genannt, ist entscheidend für Few-Shot-Learning-Szenarien.",
          nl: "Meta-learning traint modellen op diverse taken zodat ze snel kunnen aanpassen aan nieuwe, vergelijkbare taken met minimale data. Ook 'leren te leren' genoemd, is cruciaal voor few-shot learning scenario's."
        }
      },
      {
        question: {
          en: "What is the Markov assumption in sequence models?",
          es: "¿Qué es la asunción de Markov en modelos de secuencia?",
          de: "Was ist die Markov-Annahme in Sequenzmodellen?",
          nl: "Wat is de Markov assumptie in sequentiemodellen?"
        },
        options: [
          { en: "The future state depends only on the current state, not the full history", es: "El estado futuro depende solo del estado actual, no del historial completo", de: "Der zukünftige Zustand hängt nur vom aktuellen Zustand ab, nicht von der vollständigen Historie", nl: "De toekomstige staat hangt alleen af van de huidige staat, niet van de volledige geschiedenis" },
          { en: "All states are equally probable", es: "Todos los estados son igualmente probables", de: "Alle Zustände sind gleich wahrscheinlich", nl: "Alle staten zijn even waarschijnlijk" },
          { en: "States change randomly", es: "Los estados cambian aleatoriamente", de: "Zustände ändern sich zufällig", nl: "Staten veranderen willekeurig" },
          { en: "The model was created by Markov", es: "El modelo fue creado por Markov", de: "Das Modell wurde von Markov erstellt", nl: "Het model is gemaakt door Markov" }
        ],
        correct: 0,
        explanation: {
          en: "The Markov assumption states that the probability of a future state depends only on the current state (first-order) or a fixed number of previous states, not the entire sequence history. This simplifies computation but may lose long-range dependencies.",
          es: "La asunción de Markov establece que la probabilidad de un estado futuro depende solo del estado actual (primer orden) o un número fijo de estados previos, no del historial completo de la secuencia. Esto simplifica computación pero puede perder dependencias de largo alcance.",
          de: "Die Markov-Annahme besagt dass die Wahrscheinlichkeit eines zukünftigen Zustands nur vom aktuellen Zustand (erster Ordnung) oder einer festen Anzahl vorheriger Zustände abhängt, nicht von der gesamten Sequenzhistorie. Dies vereinfacht Berechnung kann aber Langstrecken-Abhängigkeiten verlieren.",
          nl: "De Markov assumptie stelt dat de waarschijnlijkheid van een toekomstige staat alleen afhangt van de huidige staat (eerste-orde) of een vast aantal vorige staten, niet van de hele sequentiegeschiedenis. Dit vereenvoudigt berekening maar kan lange-afstand afhankelijkheden verliezen."
        }
      },
      {
        question: {
          en: "What is model compression?",
          es: "¿Qué es compresión de modelo?",
          de: "Was ist Modellkompression?",
          nl: "Wat is modelcompressie?"
        },
        options: [
          { en: "Techniques to reduce model size while maintaining performance", es: "Técnicas para reducir tamaño del modelo manteniendo rendimiento", de: "Techniken zur Reduzierung der Modellgröße bei Beibehaltung der Leistung", nl: "Technieken om modelgrootte te reduceren met behoud van prestaties" },
          { en: "Compressing training data", es: "Comprimir datos de entrenamiento", de: "Trainingsdaten komprimieren", nl: "Trainingsdata comprimeren" },
          { en: "Zipping model files", es: "Comprimir archivos de modelo", de: "Modelldateien zippen", nl: "Modelbestanden zippen" },
          { en: "Reducing training time", es: "Reducir tiempo de entrenamiento", de: "Trainingszeit reduzieren", nl: "Trainingstijd reduceren" }
        ],
        correct: 0,
        explanation: {
          en: "Model compression techniques like pruning, quantization, and knowledge distillation reduce model size and computational requirements while trying to preserve accuracy, enabling deployment on resource-constrained devices.",
          es: "Técnicas de compresión de modelo como pruning, quantization y knowledge distillation reducen tamaño del modelo y requisitos computacionales mientras intentan preservar exactitud, permitiendo despliegue en dispositivos con recursos limitados.",
          de: "Modellkompressionstechniken wie Pruning, Quantisierung und Knowledge Distillation reduzieren Modellgröße und Rechenanforderungen während sie versuchen Genauigkeit zu bewahren, ermöglichen Deployment auf ressourcenbeschränkten Geräten.",
          nl: "Modelcompressie technieken zoals pruning, quantization en knowledge distillation reduceren modelgrootte en rekenvereisten terwijl ze proberen nauwkeurigheid te behouden, maken deployment mogelijk op apparaten met beperkte middelen."
        }
      },
      {
        question: {
          en: "What is knowledge distillation?",
          es: "¿Qué es destilación de conocimiento?",
          de: "Was ist Knowledge Distillation?",
          nl: "Wat is knowledge distillation?"
        },
        options: [
          { en: "Training a smaller model to mimic a larger teacher model", es: "Entrenar un modelo más pequeño para imitar un modelo maestro más grande", de: "Ein kleineres Modell trainieren um ein größeres Lehrermodell nachzuahmen", nl: "Een kleiner model trainen om een groter leraar model na te bootsen" },
          { en: "Extracting pure knowledge from data", es: "Extraer conocimiento puro de datos", de: "Reines Wissen aus Daten extrahieren", nl: "Zuivere kennis uit data extraheren" },
          { en: "Removing unnecessary knowledge", es: "Eliminar conocimiento innecesario", de: "Unnötiges Wissen entfernen", nl: "Onnodige kennis verwijderen" },
          { en: "Converting knowledge to liquid form", es: "Convertir conocimiento a forma líquida", de: "Wissen in flüssige Form umwandeln", nl: "Kennis omzetten naar vloeibare vorm" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge distillation transfers knowledge from a large, complex teacher model to a smaller student model by training the student to match the teacher's output probabilities, creating a compact model with similar performance.",
          es: "Knowledge distillation transfiere conocimiento de un modelo maestro grande y complejo a un modelo estudiante más pequeño entrenando al estudiante para igualar las probabilidades de salida del maestro, creando un modelo compacto con rendimiento similar.",
          de: "Knowledge Distillation überträgt Wissen von einem großen komplexen Lehrermodell zu einem kleineren Schülermodell indem der Schüler trainiert wird die Ausgabewahrscheinlichkeiten des Lehrers zu entsprechen, erstellt ein kompaktes Modell mit ähnlicher Leistung.",
          nl: "Knowledge distillation draagt kennis over van een groot, complex leraar model naar een kleiner student model door de student te trainen om de uitvoerwaarschijnlijkheden van de leraar te evenaren, creëert een compact model met vergelijkbare prestaties."
        }
      },
      {
        question: {
          en: "What is the exploration-exploitation tradeoff?",
          es: "¿Qué es el tradeoff exploración-explotación?",
          de: "Was ist der Exploration-Exploitation-Tradeoff?",
          nl: "Wat is de exploration-exploitation tradeoff?"
        },
        options: [
          { en: "Balancing trying new actions vs using known good actions", es: "Balancear probar nuevas acciones vs usar acciones buenas conocidas", de: "Ausbalancieren neuer Aktionen ausprobieren vs bekannte gute Aktionen nutzen", nl: "Balanceren tussen nieuwe acties proberen vs bekende goede acties gebruiken" },
          { en: "Exploring data vs exploiting resources", es: "Explorar datos vs explotar recursos", de: "Daten erkunden vs Ressourcen ausbeuten", nl: "Data verkennen vs middelen exploiteren" },
          { en: "Mining data vs using it", es: "Minar datos vs usarlos", de: "Daten abbauen vs verwenden", nl: "Data mijnen vs gebruiken" },
          { en: "Discovering vs applying knowledge", es: "Descubrir vs aplicar conocimiento", de: "Wissen entdecken vs anwenden", nl: "Kennis ontdekken vs toepassen" }
        ],
        correct: 0,
        explanation: {
          en: "In reinforcement learning, exploration-exploitation balances trying new actions to discover better strategies (exploration) versus choosing known rewarding actions (exploitation). Too much exploration wastes time; too much exploitation may miss better solutions.",
          es: "En reinforcement learning, exploration-exploitation balancea probar nuevas acciones para descubrir mejores estrategias (exploración) versus elegir acciones recompensadoras conocidas (explotación). Demasiada exploración desperdicia tiempo; demasiada explotación puede perder mejores soluciones.",
          de: "In Reinforcement Learning balanciert Exploration-Exploitation das Ausprobieren neuer Aktionen um bessere Strategien zu entdecken (Exploration) versus bekannte belohnende Aktionen wählen (Exploitation). Zu viel Exploration verschwendet Zeit; zu viel Exploitation kann bessere Lösungen verpassen.",
          nl: "In reinforcement learning balanceert exploration-exploitation het proberen van nieuwe acties om betere strategieën te ontdekken (exploration) versus bekende belonende acties kiezen (exploitation). Te veel exploration verspilt tijd; te veel exploitation kan betere oplossingen missen."
        }
      },
      {
        question: {
          en: "What is temporal difference (TD) learning?",
          es: "¿Qué es aprendizaje de diferencia temporal (TD)?",
          de: "Was ist Temporal Difference (TD) Learning?",
          nl: "Wat is temporal difference (TD) learning?"
        },
        options: [
          { en: "Learning by comparing predictions at different time steps", es: "Aprender comparando predicciones en diferentes pasos temporales", de: "Lernen durch Vergleich von Vorhersagen zu verschiedenen Zeitpunkten", nl: "Leren door voorspellingen op verschillende tijdstappen te vergelijken" },
          { en: "Learning time series patterns", es: "Aprender patrones de series temporales", de: "Zeitreihenmuster lernen", nl: "Tijdreekspatronen leren" },
          { en: "Calculating time differences in training", es: "Calcular diferencias de tiempo en entrenamiento", de: "Zeitunterschiede im Training berechnen", nl: "Tijdverschillen berekenen in training" },
          { en: "Training at different times", es: "Entrenar en diferentes momentos", de: "Zu verschiedenen Zeiten trainieren", nl: "Op verschillende tijden trainen" }
        ],
        correct: 0,
        explanation: {
          en: "TD learning is a reinforcement learning method that updates value estimates based on the difference between successive predictions (TD error), combining ideas from Monte Carlo and dynamic programming without needing complete episodes.",
          es: "TD learning es un método de reinforcement learning que actualiza estimaciones de valor basándose en la diferencia entre predicciones sucesivas (error TD), combinando ideas de Monte Carlo y programación dinámica sin necesitar episodios completos.",
          de: "TD Learning ist eine Reinforcement-Learning-Methode die Wertschätzungen basierend auf der Differenz zwischen aufeinanderfolgenden Vorhersagen (TD-Fehler) aktualisiert, kombiniert Ideen von Monte Carlo und dynamischer Programmierung ohne vollständige Episoden zu benötigen.",
          nl: "TD learning is een reinforcement learning methode die waardeschattingen bijwerkt gebaseerd op het verschil tussen opeenvolgende voorspellingen (TD fout), combineert ideeën van Monte Carlo en dynamisch programmeren zonder complete episodes nodig te hebben."
        }
      },
      {
        question: {
          en: "What is curriculum learning?",
          es: "¿Qué es aprendizaje curricular?",
          de: "Was ist Curriculum Learning?",
          nl: "Wat is curriculum learning?"
        },
        options: [
          { en: "Training on easier examples first, gradually increasing difficulty", es: "Entrenar primero en ejemplos más fáciles, aumentando gradualmente dificultad", de: "Zuerst auf einfacheren Beispielen trainieren, Schwierigkeit allmählich erhöhen", nl: "Eerst trainen op makkelijkere voorbeelden, geleidelijk moeilijkheid verhogen" },
          { en: "Learning school curriculums", es: "Aprender currículos escolares", de: "Schullehrpläne lernen", nl: "Schoolcurricula leren" },
          { en: "Creating learning schedules", es: "Crear horarios de aprendizaje", de: "Lernpläne erstellen", nl: "Leerplannen maken" },
          { en: "Learning multiple subjects simultaneously", es: "Aprender múltiples materias simultáneamente", de: "Mehrere Fächer gleichzeitig lernen", nl: "Meerdere vakken tegelijk leren" }
        ],
        correct: 0,
        explanation: {
          en: "Curriculum learning presents training examples in a meaningful order, starting with simpler examples and progressively introducing more complex ones, mimicking human learning and often improving convergence and final performance.",
          es: "Curriculum learning presenta ejemplos de entrenamiento en un orden significativo, comenzando con ejemplos más simples y progresivamente introduciendo más complejos, imitando aprendizaje humano y a menudo mejorando convergencia y rendimiento final.",
          de: "Curriculum Learning präsentiert Trainingsbeispiele in sinnvoller Reihenfolge, beginnend mit einfacheren Beispielen und progressiv komplexere einführend, ahmt menschliches Lernen nach und verbessert oft Konvergenz und finale Leistung.",
          nl: "Curriculum learning presenteert trainingsvoorbeelden in een betekenisvolle volgorde, beginnend met eenvoudigere voorbeelden en progressief complexere introducerend, bootst menselijk leren na en verbetert vaak convergentie en uiteindelijke prestaties."
        }
      },
      {
        question: {
          en: "What is few-shot learning?",
          es: "¿Qué es few-shot learning?",
          de: "Was ist Few-Shot Learning?",
          nl: "Wat is few-shot learning?"
        },
        options: [
          { en: "Learning to perform tasks with very few training examples", es: "Aprender a realizar tareas con muy pocos ejemplos de entrenamiento", de: "Lernen Aufgaben mit sehr wenigen Trainingsbeispielen durchzuführen", nl: "Leren taken uit te voeren met zeer weinig trainingsvoorbeelden" },
          { en: "Training with few epochs", es: "Entrenar con pocas épocas", de: "Mit wenigen Epochen trainieren", nl: "Trainen met weinig epochs" },
          { en: "Quick learning sessions", es: "Sesiones de aprendizaje rápidas", de: "Schnelle Lernsitzungen", nl: "Snelle leersessies" },
          { en: "Learning a small number of classes", es: "Aprender un pequeño número de clases", de: "Eine kleine Anzahl von Klassen lernen", nl: "Een klein aantal klassen leren" }
        ],
        correct: 0,
        explanation: {
          en: "Few-shot learning enables models to learn new concepts from just a handful (1-10) of examples, typically using meta-learning or transfer learning. Zero-shot (0 examples) and one-shot (1 example) are special cases.",
          es: "Few-shot learning permite a modelos aprender nuevos conceptos de solo un puñado (1-10) de ejemplos, típicamente usando meta-learning o transfer learning. Zero-shot (0 ejemplos) y one-shot (1 ejemplo) son casos especiales.",
          de: "Few-Shot Learning ermöglicht Modellen neue Konzepte von nur einer Handvoll (1-10) Beispielen zu lernen, typischerweise unter Verwendung von Meta-Learning oder Transfer Learning. Zero-Shot (0 Beispiele) und One-Shot (1 Beispiel) sind Sonderfälle.",
          nl: "Few-shot learning stelt modellen in staat nieuwe concepten te leren van slechts een handvol (1-10) voorbeelden, meestal met meta-learning of transfer learning. Zero-shot (0 voorbeelden) en one-shot (1 voorbeeld) zijn speciale gevallen."
        }
      },
      {
        question: {
          en: "What is contrastive learning?",
          es: "¿Qué es aprendizaje contrastivo?",
          de: "Was ist Contrastive Learning?",
          nl: "Wat is contrastive learning?"
        },
        options: [
          { en: "Learning by contrasting similar and dissimilar examples", es: "Aprender contrastando ejemplos similares y disímiles", de: "Lernen durch Kontrast ähnlicher und unähnlicher Beispiele", nl: "Leren door vergelijkbare en ongelijksoortige voorbeelden te contrasteren" },
          { en: "Comparing different learning methods", es: "Comparar diferentes métodos de aprendizaje", de: "Verschiedene Lernmethoden vergleichen", nl: "Verschillende leermethoden vergelijken" },
          { en: "Learning from contrasting colors", es: "Aprender de colores contrastantes", de: "Von kontrastierenden Farben lernen", nl: "Leren van contrasterende kleuren" },
          { en: "Learning opposite concepts", es: "Aprender conceptos opuestos", de: "Gegensätzliche Konzepte lernen", nl: "Tegenovergestelde concepten leren" }
        ],
        correct: 0,
        explanation: {
          en: "Contrastive learning trains models to bring similar examples closer together in representation space while pushing dissimilar ones apart. It's effective for self-supervised learning without labels, learning robust feature representations.",
          es: "Contrastive learning entrena modelos para acercar ejemplos similares en el espacio de representación mientras aleja disímiles. Es efectivo para aprendizaje auto-supervisado sin etiquetas, aprendiendo representaciones de características robustas.",
          de: "Contrastive Learning trainiert Modelle um ähnliche Beispiele im Darstellungsraum näher zusammenzubringen während unähnliche auseinander geschoben werden. Es ist effektiv für selbstüberwachtes Lernen ohne Labels, lernt robuste Feature-Repräsentationen.",
          nl: "Contrastive learning traint modellen om vergelijkbare voorbeelden dichter bij elkaar te brengen in representatieruimte terwijl ongelijksoortige uit elkaar worden geduwd. Het is effectief voor zelf-gesuperviseerd leren zonder labels, leert robuuste feature representaties."
        }
      },
      {
        question: {
          en: "What is self-supervised learning?",
          es: "¿Qué es aprendizaje auto-supervisado?",
          de: "Was ist selbstüberwachtes Lernen?",
          nl: "Wat is zelf-gesuperviseerd leren?"
        },
        options: [
          { en: "Learning from unlabeled data by creating pretext tasks from the data itself", es: "Aprender de datos sin etiquetar creando tareas pretexto de los datos mismos", de: "Aus unbeschrifteten Daten lernen durch Erstellen von Vorwand-Aufgaben aus den Daten selbst", nl: "Leren van ongelabelde data door pretext taken te creëren van de data zelf" },
          { en: "Models learning without any supervision", es: "Modelos aprendiendo sin supervisión", de: "Modelle lernen ohne Aufsicht", nl: "Modellen leren zonder supervisie" },
          { en: "Models teaching themselves", es: "Modelos enseñándose a sí mismos", de: "Modelle bringen sich selbst bei", nl: "Modellen leren zichzelf" },
          { en: "Automated supervised learning", es: "Aprendizaje supervisado automatizado", de: "Automatisiertes überwachtes Lernen", nl: "Geautomatiseerd gesuperviseerd leren" }
        ],
        correct: 0,
        explanation: {
          en: "Self-supervised learning generates supervisory signals from the data itself (e.g., predicting masked words, image rotations, or next frames), enabling learning from vast unlabeled datasets like BERT and GPT do with text.",
          es: "Self-supervised learning genera señales supervisoras de los datos mismos (ej., predecir palabras enmascaradas, rotaciones de imagen, o próximos frames), permitiendo aprender de vastos conjuntos de datos sin etiquetar como BERT y GPT hacen con texto.",
          de: "Selbstüberwachtes Lernen generiert Überwachungssignale aus den Daten selbst (z.B. maskierte Wörter vorhersagen, Bildrotationen, oder nächste Frames), ermöglicht Lernen aus riesigen unbeschrifteten Datensätzen wie BERT und GPT mit Text machen.",
          nl: "Zelf-gesuperviseerd leren genereert toezichtsignalen van de data zelf (bijv. gemaskeerde woorden voorspellen, beeldrotaties, of volgende frames), maakt leren mogelijk van enorme ongelabelde datasets zoals BERT en GPT doen met tekst."
        }
      },
      {
        question: {
          en: "What is domain adaptation?",
          es: "¿Qué es adaptación de dominio?",
          de: "Was ist Domain Adaptation?",
          nl: "Wat is domainaanpassing?"
        },
        options: [
          { en: "Adapting a model trained on one domain to work on a different domain", es: "Adaptar un modelo entrenado en un dominio para trabajar en un dominio diferente", de: "Ein auf einer Domäne trainiertes Modell für eine andere Domäne anpassen", nl: "Een model getraind op één domein aanpassen om te werken op een ander domein" },
          { en: "Changing the model's domain name", es: "Cambiar el nombre de dominio del modelo", de: "Den Domainnamen des Modells ändern", nl: "De domeinnaam van het model veranderen" },
          { en: "Adapting to new hardware", es: "Adaptarse a nuevo hardware", de: "An neue Hardware anpassen", nl: "Aanpassen aan nieuwe hardware" },
          { en: "Learning multiple domains simultaneously", es: "Aprender múltiples dominios simultáneamente", de: "Mehrere Domänen gleichzeitig lernen", nl: "Meerdere domeinen tegelijk leren" }
        ],
        correct: 0,
        explanation: {
          en: "Domain adaptation transfers knowledge from a source domain (where labeled data exists) to a target domain (with different distribution), addressing domain shift. Techniques include fine-tuning, adversarial training, and feature alignment.",
          es: "Domain adaptation transfiere conocimiento de un dominio fuente (donde existen datos etiquetados) a un dominio objetivo (con distribución diferente), abordando cambio de dominio. Técnicas incluyen fine-tuning, entrenamiento adversarial y alineación de características.",
          de: "Domain Adaptation überträgt Wissen von einer Quelldomäne (wo beschriftete Daten existieren) zu einer Zieldomäne (mit anderer Verteilung), adressiert Domain Shift. Techniken beinhalten Fine-Tuning, Adversarial Training und Feature-Ausrichtung.",
          nl: "Domainaanpassing draagt kennis over van een brondomein (waar gelabelde data bestaat) naar een doeldomein (met andere distributie), pakt domain shift aan. Technieken omvatten fine-tuning, adversarial training en feature uitlijning."
        }
      },
      {
        question: {
          en: "What is quantization in neural networks?",
          es: "¿Qué es quantization en redes neuronales?",
          de: "Was ist Quantisierung in neuronalen Netzwerken?",
          nl: "Wat is quantization in neurale netwerken?"
        },
        options: [
          { en: "Reducing precision of weights and activations to use fewer bits", es: "Reducir precisión de pesos y activaciones para usar menos bits", de: "Präzision von Gewichten und Aktivierungen reduzieren um weniger Bits zu nutzen", nl: "Precisie van gewichten en activaties verminderen om minder bits te gebruiken" },
          { en: "Measuring quantum effects in networks", es: "Medir efectos cuánticos en redes", de: "Quanteneffekte in Netzwerken messen", nl: "Kwantumeffecten in netwerken meten" },
          { en: "Dividing the network into quantities", es: "Dividir la red en cantidades", de: "Das Netzwerk in Mengen aufteilen", nl: "Het netwerk verdelen in hoeveelheden" },
          { en: "Adding quantum layers", es: "Añadir capas cuánticas", de: "Quantenschichten hinzufügen", nl: "Kwantumlagen toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Quantization converts high-precision floating-point weights (32-bit) to lower precision (8-bit, 4-bit, or even binary), drastically reducing model size and inference speed while accepting minimal accuracy loss, crucial for mobile deployment.",
          es: "Quantization convierte pesos de punto flotante de alta precisión (32-bit) a menor precisión (8-bit, 4-bit, o incluso binario), reduciendo drásticamente tamaño del modelo y velocidad de inferencia aceptando pérdida mínima de exactitud, crucial para despliegue móvil.",
          de: "Quantisierung konvertiert hochpräzise Gleitkomma-Gewichte (32-Bit) zu niedrigerer Präzision (8-Bit, 4-Bit, oder sogar binär), reduziert drastisch Modellgröße und Inferenzgeschwindigkeit bei minimaler Genauigkeitseinbuße, entscheidend für Mobile-Deployment.",
          nl: "Quantization converteert hoge-precisie floating-point gewichten (32-bit) naar lagere precisie (8-bit, 4-bit, of zelfs binair), vermindert drastisch modelgrootte en inference snelheid met minimaal nauwkeurigheidsverlies, cruciaal voor mobiele deployment."
        }
      },
      {
        question: {
          en: "What is neural architecture search (NAS)?",
          es: "¿Qué es búsqueda de arquitectura neuronal (NAS)?",
          de: "Was ist Neural Architecture Search (NAS)?",
          nl: "Wat is neural architecture search (NAS)?"
        },
        options: [
          { en: "Automatically finding optimal neural network architectures", es: "Encontrar automáticamente arquitecturas óptimas de redes neuronales", de: "Automatisches Finden optimaler neuronaler Netzwerkarchitekturen", nl: "Automatisch optimale neurale netwerkarchitecturen vinden" },
          { en: "Searching for neural networks online", es: "Buscar redes neuronales en línea", de: "Online nach neuronalen Netzwerken suchen", nl: "Online zoeken naar neurale netwerken" },
          { en: "Organizing neural network documentation", es: "Organizar documentación de redes neuronales", de: "Dokumentation neuronaler Netzwerke organisieren", nl: "Neurale netwerk documentatie organiseren" },
          { en: "Finding neurons in brain scans", es: "Encontrar neuronas en escaneos cerebrales", de: "Neuronen in Gehirnscans finden", nl: "Neuronen vinden in hersenscans" }
        ],
        correct: 0,
        explanation: {
          en: "NAS uses algorithms (often reinforcement learning or evolutionary methods) to automatically design neural network architectures, discovering novel designs that can outperform human-designed architectures but requiring significant computational resources.",
          es: "NAS usa algoritmos (a menudo reinforcement learning o métodos evolutivos) para diseñar automáticamente arquitecturas de redes neuronales, descubriendo diseños novedosos que pueden superar arquitecturas diseñadas por humanos pero requiriendo recursos computacionales significativos.",
          de: "NAS verwendet Algorithmen (oft Reinforcement Learning oder evolutionäre Methoden) um automatisch neuronale Netzwerkarchitekturen zu entwerfen, entdeckt neuartige Designs die menschengestaltete Architekturen übertreffen können aber erhebliche Rechenressourcen erfordern.",
          nl: "NAS gebruikt algoritmen (vaak reinforcement learning of evolutionaire methoden) om automatisch neurale netwerkarchitecturen te ontwerpen, ontdekt vernieuwende designs die mensontworpen architecturen kunnen overtreffen maar vereist aanzienlijke rekenresources."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
