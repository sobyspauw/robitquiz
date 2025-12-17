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
