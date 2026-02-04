module.exports = {
  questions: [
    {
      question: {
        en: "What type of learning uses labeled data?",
        es: "¿Qué tipo de aprendizaje usa datos etiquetados?",
        de: "Welche Art des Lernens verwendet beschriftete Daten?",
        nl: "Welk type leren gebruikt gelabelde data?"
      },
      options: [
        {
          en: "Supervised learning",
          es: "Aprendizaje supervisado",
          de: "Überwachtes Lernen",
          nl: "Gesuperviseerd leren"
        },
        {
          en: "Unsupervised learning",
          es: "Aprendizaje no supervisado",
          de: "Unüberwachtes Lernen",
          nl: "Ongesuperviseerd leren"
        },
        {
          en: "Random learning",
          es: "Aprendizaje aleatorio",
          de: "Zufälliges Lernen",
          nl: "Willekeurig leren"
        },
        {
          en: "Manual learning",
          es: "Aprendizaje manual",
          de: "Manuelles Lernen",
          nl: "Handmatig leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Supervised learning uses labeled training data where each example has an input and desired output. The model learns to map inputs to outputs based on these examples.",
        es: "El aprendizaje supervisado usa datos de entrenamiento etiquetados donde cada ejemplo tiene una entrada y salida deseada. El modelo aprende a mapear entradas a salidas.",
        de: "Überwachtes Lernen verwendet beschriftete Trainingsdaten, bei denen jedes Beispiel eine Eingabe und gewünschte Ausgabe hat.",
        nl: "Gesuperviseerd leren gebruikt gelabelde trainingsdata waarbij elk voorbeeld een input en gewenste output heeft."
      }
    },
    {
      question: {
        en: "What is overfitting in machine learning?",
        es: "¿Qué es el sobreajuste en aprendizaje automático?",
        de: "Was ist Überanpassung im maschinellen Lernen?",
        nl: "Wat is overfitting in machine learning?"
      },
      options: [
        {
          en: "Model fits too well to training data",
          es: "Modelo se ajusta demasiado a datos de entrenamiento",
          de: "Modell passt zu gut zu Trainingsdaten",
          nl: "Model past te goed op trainingsdata"
        },
        {
          en: "Model doesn't learn anything",
          es: "Modelo no aprende nada",
          de: "Modell lernt nichts",
          nl: "Model leert niets"
        },
        {
          en: "Model is too simple",
          es: "Modelo es muy simple",
          de: "Modell ist zu einfach",
          nl: "Model is te simpel"
        },
        {
          en: "Model trains too fast",
          es: "Modelo entrena muy rápido",
          de: "Modell trainiert zu schnell",
          nl: "Model traint te snel"
        }
      ],
      correct: 0,
      explanation: {
        en: "Overfitting occurs when a model learns the training data too well, including noise and details that don't generalize to new data. This reduces performance on unseen data.",
        es: "El sobreajuste ocurre cuando un modelo aprende los datos de entrenamiento demasiado bien, incluyendo ruido que no generaliza a nuevos datos.",
        de: "Überanpassung tritt auf, wenn ein Modell die Trainingsdaten zu gut lernt, einschließlich Rauschen, das nicht auf neue Daten verallgemeinert.",
        nl: "Overfitting gebeurt wanneer een model de trainingsdata te goed leert, inclusief ruis die niet generaliseert naar nieuwe data."
      }
    },
    {
      question: {
        en: "Which algorithm is commonly used for classification?",
        es: "¿Qué algoritmo se usa comúnmente para clasificación?",
        de: "Welcher Algorithmus wird häufig zur Klassifikation verwendet?",
        nl: "Welk algoritme wordt vaak gebruikt voor classificatie?"
      },
      options: [
        {
          en: "Linear regression",
          es: "Regresión lineal",
          de: "Lineare Regression",
          nl: "Lineaire regressie"
        },
        {
          en: "Decision trees",
          es: "Árboles de decisión",
          de: "Entscheidungsbäume",
          nl: "Beslisbomen"
        },
        {
          en: "K-means clustering",
          es: "Agrupamiento K-medias",
          de: "K-Means-Clustering",
          nl: "K-means clustering"
        },
        {
          en: "PCA",
          es: "ACP",
          de: "PCA",
          nl: "PCA"
        }
      ],
      correct: 1,
      explanation: {
        en: "Decision trees are commonly used for classification tasks. They split data into branches based on feature values to predict class labels for new instances.",
        es: "Los árboles de decisión se usan comúnmente para tareas de clasificación. Dividen datos en ramas basadas en valores de características.",
        de: "Entscheidungsbäume werden häufig für Klassifikationsaufgaben verwendet. Sie teilen Daten basierend auf Merkmalswerten in Zweige auf.",
        nl: "Beslisbomen worden vaak gebruikt voor classificatietaken. Ze splitsen data in takken op basis van kenmerkwaarden."
      }
    },
    {
      question: {
        en: "What is a training dataset used for?",
        es: "¿Para qué se usa un conjunto de datos de entrenamiento?",
        de: "Wofür wird ein Trainingsdatensatz verwendet?",
        nl: "Waar wordt een trainingsdataset voor gebruikt?"
      },
      options: [
        {
          en: "To teach the model patterns",
          es: "Para enseñar patrones al modelo",
          de: "Um dem Modell Muster beizubringen",
          nl: "Om het model patronen te leren"
        },
        {
          en: "To test final performance",
          es: "Para probar rendimiento final",
          de: "Um finale Leistung zu testen",
          nl: "Om finale prestaties te testen"
        },
        {
          en: "To validate hyperparameters",
          es: "Para validar hiperparámetros",
          de: "Um Hyperparameter zu validieren",
          nl: "Om hyperparameters te valideren"
        },
        {
          en: "To deploy the model",
          es: "Para desplegar el modelo",
          de: "Um das Modell einzusetzen",
          nl: "Om het model te deployen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Training datasets are used to teach machine learning models patterns and relationships in data. The model adjusts its parameters based on this data to learn.",
        es: "Los conjuntos de datos de entrenamiento se usan para enseñar a los modelos patrones y relaciones en los datos.",
        de: "Trainingsdatensätze werden verwendet, um maschinellen Lernmodellen Muster und Beziehungen in Daten beizubringen.",
        nl: "Trainingsdatasets worden gebruikt om machine learning modellen patronen en relaties in data te leren."
      }
    },
    {
      question: {
        en: "What does 'feature' mean in machine learning?",
        es: "¿Qué significa 'característica' en aprendizaje automático?",
        de: "Was bedeutet 'Merkmal' im maschinellen Lernen?",
        nl: "Wat betekent 'kenmerk' in machine learning?"
      },
      options: [
        {
          en: "Input variable or attribute",
          es: "Variable o atributo de entrada",
          de: "Eingabevariable oder Attribut",
          nl: "Inputvariabele of attribuut"
        },
        {
          en: "Output prediction",
          es: "Predicción de salida",
          de: "Ausgabevorhersage",
          nl: "Output voorspelling"
        },
        {
          en: "Training algorithm",
          es: "Algoritmo de entrenamiento",
          de: "Trainingsalgorithmus",
          nl: "Trainingsalgoritme"
        },
        {
          en: "Model architecture",
          es: "Arquitectura del modelo",
          de: "Modellarchitektur",
          nl: "Modelarchitectuur"
        }
      ],
      correct: 0,
      explanation: {
        en: "A feature is an individual measurable property or characteristic used as input to a machine learning model. Examples include age, height, or pixel values in images.",
        es: "Una característica es una propiedad medible individual usada como entrada a un modelo de aprendizaje automático.",
        de: "Ein Merkmal ist eine einzelne messbare Eigenschaft, die als Eingabe für ein maschinelles Lernmodell verwendet wird.",
        nl: "Een kenmerk is een individuele meetbare eigenschap gebruikt als input voor een machine learning model."
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
        {
          en: "Optimization algorithm",
          es: "Algoritmo de optimización",
          de: "Optimierungsalgorithmus",
          nl: "Optimalisatie-algoritme"
        },
        {
          en: "Data preprocessing technique",
          es: "Técnica de preprocesamiento",
          de: "Datenvorverarbeitungstechnik",
          nl: "Data preprocessing techniek"
        },
        {
          en: "Classification method",
          es: "Método de clasificación",
          de: "Klassifikationsmethode",
          nl: "Classificatiemethode"
        },
        {
          en: "Evaluation metric",
          es: "Métrica de evaluación",
          de: "Bewertungsmetrik",
          nl: "Evaluatiemetriek"
        }
      ],
      correct: 0,
      explanation: {
        en: "Gradient descent is an optimization algorithm used to minimize the loss function in machine learning by iteratively moving in the direction of steepest descent.",
        es: "El descenso de gradiente es un algoritmo de optimización usado para minimizar la función de pérdida moviendo iterativamente en la dirección de mayor descenso.",
        de: "Gradientenabstieg ist ein Optimierungsalgorithmus zur Minimierung der Verlustfunktion durch iterative Bewegung in Richtung des steilsten Abstiegs.",
        nl: "Gradient descent is een optimalisatie-algoritme gebruikt om de loss functie te minimaliseren door iteratief in de richting van steilste daling te bewegen."
      }
    },
    {
      question: {
        en: "What is cross-validation used for?",
        es: "¿Para qué se usa la validación cruzada?",
        de: "Wofür wird Kreuzvalidierung verwendet?",
        nl: "Waar wordt kruisvalidatie voor gebruikt?"
      },
      options: [
        {
          en: "Assessing model performance",
          es: "Evaluar rendimiento del modelo",
          de: "Modellleistung bewerten",
          nl: "Modelprestaties beoordelen"
        },
        {
          en: "Increasing training speed",
          es: "Aumentar velocidad de entrenamiento",
          de: "Trainingsgeschwindigkeit erhöhen",
          nl: "Trainingssnelheid verhogen"
        },
        {
          en: "Reducing data size",
          es: "Reducir tamaño de datos",
          de: "Datengröße reduzieren",
          nl: "Datagrootte verkleinen"
        },
        {
          en: "Creating new features",
          es: "Crear nuevas características",
          de: "Neue Merkmale erstellen",
          nl: "Nieuwe kenmerken maken"
        }
      ],
      correct: 0,
      explanation: {
        en: "Cross-validation is used to assess how well a model generalizes to unseen data by splitting data into multiple folds and training/testing on different combinations.",
        es: "La validación cruzada se usa para evaluar qué tan bien un modelo generaliza a datos no vistos dividiendo datos en múltiples pliegues.",
        de: "Kreuzvalidierung wird verwendet, um zu bewerten, wie gut ein Modell auf ungesehene Daten generalisiert.",
        nl: "Kruisvalidatie wordt gebruikt om te beoordelen hoe goed een model generaliseert naar ongeziene data."
      }
    },
    {
      question: {
        en: "What is the purpose of a validation set?",
        es: "¿Cuál es el propósito de un conjunto de validación?",
        de: "Was ist der Zweck eines Validierungssatzes?",
        nl: "Wat is het doel van een validatieset?"
      },
      options: [
        {
          en: "Training the initial model",
          es: "Entrenar el modelo inicial",
          de: "Das initiale Modell trainieren",
          nl: "Het initiële model trainen"
        },
        {
          en: "Tuning hyperparameters",
          es: "Ajustar hiperparámetros",
          de: "Hyperparameter abstimmen",
          nl: "Hyperparameters afstemmen"
        },
        {
          en: "Final testing",
          es: "Prueba final",
          de: "Finaler Test",
          nl: "Finale test"
        },
        {
          en: "Data augmentation",
          es: "Aumento de datos",
          de: "Datenerweiterung",
          nl: "Data-augmentatie"
        }
      ],
      correct: 1,
      explanation: {
        en: "A validation set is used to tune hyperparameters and make decisions during model development without touching the test set, preventing overfitting to test data.",
        es: "Un conjunto de validación se usa para ajustar hiperparámetros y tomar decisiones durante el desarrollo sin tocar el conjunto de prueba.",
        de: "Ein Validierungssatz wird verwendet, um Hyperparameter abzustimmen und Entscheidungen während der Entwicklung zu treffen.",
        nl: "Een validatieset wordt gebruikt om hyperparameters af te stemmen en beslissingen te nemen tijdens ontwikkeling."
      }
    },
    {
      question: {
        en: "What is a confusion matrix?",
        es: "¿Qué es una matriz de confusión?",
        de: "Was ist eine Verwirrungsmatrix?",
        nl: "Wat is een confusion matrix?"
      },
      options: [
        {
          en: "Table showing prediction results",
          es: "Tabla mostrando resultados de predicción",
          de: "Tabelle mit Vorhersageergebnissen",
          nl: "Tabel met voorspellingsresultaten"
        },
        {
          en: "Neural network layer",
          es: "Capa de red neuronal",
          de: "Neuronale Netzwerkschicht",
          nl: "Neurale netwerklaag"
        },
        {
          en: "Data preprocessing tool",
          es: "Herramienta de preprocesamiento",
          de: "Datenvorverarbeitungstool",
          nl: "Data preprocessing tool"
        },
        {
          en: "Training algorithm",
          es: "Algoritmo de entrenamiento",
          de: "Trainingsalgorithmus",
          nl: "Trainingsalgoritme"
        }
      ],
      correct: 0,
      explanation: {
        en: "A confusion matrix is a table that visualizes the performance of a classification model by showing true vs predicted labels, helping identify where the model makes mistakes.",
        es: "Una matriz de confusión es una tabla que visualiza el rendimiento de un modelo de clasificación mostrando etiquetas verdaderas vs predichas.",
        de: "Eine Verwirrungsmatrix ist eine Tabelle, die die Leistung eines Klassifikationsmodells durch wahre vs vorhergesagte Labels visualisiert.",
        nl: "Een confusion matrix is een tabel die de prestaties van een classificatiemodel visualiseert door ware vs voorspelde labels te tonen."
      }
    },
    {
      question: {
        en: "What is regularization in machine learning?",
        es: "¿Qué es la regularización en aprendizaje automático?",
        de: "Was ist Regularisierung im maschinellen Lernen?",
        nl: "Wat is regularisatie in machine learning?"
      },
      options: [
        {
          en: "Preventing overfitting",
          es: "Prevenir sobreajuste",
          de: "Überanpassung verhindern",
          nl: "Overfitting voorkomen"
        },
        {
          en: "Speeding up training",
          es: "Acelerar entrenamiento",
          de: "Training beschleunigen",
          nl: "Training versnellen"
        },
        {
          en: "Adding more data",
          es: "Agregar más datos",
          de: "Mehr Daten hinzufügen",
          nl: "Meer data toevoegen"
        },
        {
          en: "Removing features",
          es: "Eliminar características",
          de: "Merkmale entfernen",
          nl: "Kenmerken verwijderen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Regularization is a technique to prevent overfitting by adding a penalty term to the loss function, discouraging complex models. Examples include L1 and L2 regularization.",
        es: "La regularización es una técnica para prevenir sobreajuste agregando un término de penalización a la función de pérdida.",
        de: "Regularisierung ist eine Technik zur Verhinderung von Überanpassung durch Hinzufügen eines Strafterms zur Verlustfunktion.",
        nl: "Regularisatie is een techniek om overfitting te voorkomen door een penalty term toe te voegen aan de loss functie."
      }
    },
    {
      question: {
        en: "What is the difference between precision and recall?",
        es: "¿Cuál es la diferencia entre precisión y recall?",
        de: "Was ist der Unterschied zwischen Präzision und Recall?",
        nl: "Wat is het verschil tussen precision en recall?"
      },
      options: [
        {
          en: "Precision: correct positives ratio, Recall: found positives ratio",
          es: "Precisión: ratio positivos correctos, Recall: ratio positivos encontrados",
          de: "Präzision: korrekte Positive, Recall: gefundene Positive",
          nl: "Precision: correcte positieven, Recall: gevonden positieven"
        },
        {
          en: "Both measure the same thing",
          es: "Ambos miden lo mismo",
          de: "Beide messen dasselbe",
          nl: "Beide meten hetzelfde"
        },
        {
          en: "Precision is for regression, Recall for classification",
          es: "Precisión es para regresión, Recall para clasificación",
          de: "Präzision ist für Regression, Recall für Klassifikation",
          nl: "Precision is voor regressie, Recall voor classificatie"
        },
        {
          en: "No difference exists",
          es: "No existe diferencia",
          de: "Kein Unterschied existiert",
          nl: "Er bestaat geen verschil"
        }
      ],
      correct: 0,
      explanation: {
        en: "Precision measures what fraction of predicted positives are correct, while recall measures what fraction of actual positives were found. Both are important for evaluation.",
        es: "La precisión mide qué fracción de positivos predichos son correctos, mientras recall mide qué fracción de positivos reales fueron encontrados.",
        de: "Präzision misst, welcher Anteil der vorhergesagten Positiven korrekt ist, während Recall misst, welcher Anteil der tatsächlichen Positiven gefunden wurde.",
        nl: "Precision meet welk deel van voorspelde positieven correct is, terwijl recall meet welk deel van werkelijke positieven gevonden werd."
      }
    },
    {
      question: {
        en: "What is ensemble learning?",
        es: "¿Qué es el aprendizaje por conjuntos?",
        de: "Was ist Ensemble-Lernen?",
        nl: "Wat is ensemble learning?"
      },
      options: [
        {
          en: "Combining multiple models",
          es: "Combinar múltiples modelos",
          de: "Mehrere Modelle kombinieren",
          nl: "Meerdere modellen combineren"
        },
        {
          en: "Training one large model",
          es: "Entrenar un modelo grande",
          de: "Ein großes Modell trainieren",
          nl: "Één groot model trainen"
        },
        {
          en: "Using single algorithm",
          es: "Usar algoritmo único",
          de: "Einzelnen Algorithmus verwenden",
          nl: "Enkel algoritme gebruiken"
        },
        {
          en: "Reducing model size",
          es: "Reducir tamaño del modelo",
          de: "Modellgröße reduzieren",
          nl: "Modelgrootte verkleinen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Ensemble learning combines predictions from multiple models to improve overall performance. Methods include bagging, boosting, and stacking.",
        es: "El aprendizaje por conjuntos combina predicciones de múltiples modelos para mejorar el rendimiento general.",
        de: "Ensemble-Lernen kombiniert Vorhersagen mehrerer Modelle zur Verbesserung der Gesamtleistung.",
        nl: "Ensemble learning combineert voorspellingen van meerdere modellen om de algehele prestaties te verbeteren."
      }
    },
    {
      question: {
        en: "What is Random Forest?",
        es: "¿Qué es Random Forest?",
        de: "Was ist Random Forest?",
        nl: "Wat is Random Forest?"
      },
      options: [
        {
          en: "Ensemble of decision trees",
          es: "Conjunto de árboles de decisión",
          de: "Ensemble von Entscheidungsbäumen",
          nl: "Ensemble van beslisbomen"
        },
        {
          en: "Single complex tree",
          es: "Árbol complejo único",
          de: "Einzelner komplexer Baum",
          nl: "Enkele complexe boom"
        },
        {
          en: "Neural network type",
          es: "Tipo de red neuronal",
          de: "Neuronaler Netzwerktyp",
          nl: "Neuraal netwerktype"
        },
        {
          en: "Clustering algorithm",
          es: "Algoritmo de agrupamiento",
          de: "Clustering-Algorithmus",
          nl: "Clustering-algoritme"
        }
      ],
      correct: 0,
      explanation: {
        en: "Random Forest is an ensemble learning method that creates multiple decision trees using random subsets of features and data, then combines their predictions.",
        es: "Random Forest es un método de conjunto que crea múltiples árboles de decisión usando subconjuntos aleatorios de características y datos.",
        de: "Random Forest ist eine Ensemble-Methode, die mehrere Entscheidungsbäume mit zufälligen Teilmengen von Merkmalen und Daten erstellt.",
        nl: "Random Forest is een ensemble methode die meerdere beslisbomen maakt met willekeurige subsets van kenmerken en data."
      }
    },
    {
      question: {
        en: "What is the purpose of dropout in neural networks?",
        es: "¿Cuál es el propósito del dropout en redes neuronales?",
        de: "Was ist der Zweck von Dropout in neuronalen Netzen?",
        nl: "Wat is het doel van dropout in neurale netwerken?"
      },
      options: [
        {
          en: "Prevent overfitting",
          es: "Prevenir sobreajuste",
          de: "Überanpassung verhindern",
          nl: "Overfitting voorkomen"
        },
        {
          en: "Speed up training",
          es: "Acelerar entrenamiento",
          de: "Training beschleunigen",
          nl: "Training versnellen"
        },
        {
          en: "Add more neurons",
          es: "Agregar más neuronas",
          de: "Mehr Neuronen hinzufügen",
          nl: "Meer neuronen toevoegen"
        },
        {
          en: "Increase accuracy",
          es: "Aumentar precisión",
          de: "Genauigkeit erhöhen",
          nl: "Nauwkeurigheid verhogen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Dropout is a regularization technique that randomly deactivates neurons during training to prevent overfitting and improve generalization to new data.",
        es: "Dropout es una técnica de regularización que desactiva neuronas aleatoriamente durante el entrenamiento para prevenir sobreajuste.",
        de: "Dropout ist eine Regularisierungstechnik, die während des Trainings zufällig Neuronen deaktiviert, um Überanpassung zu verhindern.",
        nl: "Dropout is een regularisatietechniek die willekeurig neuronen deactiveert tijdens training om overfitting te voorkomen."
      }
    },
    {
      question: {
        en: "What is transfer learning?",
        es: "¿Qué es el aprendizaje por transferencia?",
        de: "Was ist Transfer-Lernen?",
        nl: "Wat is transfer learning?"
      },
      options: [
        {
          en: "Using pre-trained models",
          es: "Usar modelos preentrenados",
          de: "Vortrainierte Modelle nutzen",
          nl: "Voorgetrainde modellen gebruiken"
        },
        {
          en: "Moving data between computers",
          es: "Mover datos entre computadoras",
          de: "Daten zwischen Computern verschieben",
          nl: "Data tussen computers verplaatsen"
        },
        {
          en: "Training from scratch",
          es: "Entrenar desde cero",
          de: "Von Grund auf trainieren",
          nl: "Vanaf nul trainen"
        },
        {
          en: "Copying model weights",
          es: "Copiar pesos del modelo",
          de: "Modellgewichte kopieren",
          nl: "Modelgewichten kopiëren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Transfer learning uses knowledge from pre-trained models on large datasets and applies it to new, related tasks with less data, saving time and resources.",
        es: "El aprendizaje por transferencia usa conocimiento de modelos preentrenados en grandes conjuntos de datos y lo aplica a nuevas tareas relacionadas.",
        de: "Transfer-Lernen nutzt Wissen aus vortrainierten Modellen auf großen Datensätzen und wendet es auf neue, verwandte Aufgaben an.",
        nl: "Transfer learning gebruikt kennis van voorgetrainde modellen op grote datasets en past dit toe op nieuwe, gerelateerde taken."
      }
    },
    {
      question: {
        en: "What is batch normalization?",
        es: "¿Qué es la normalización por lotes?",
        de: "Was ist Batch-Normalisierung?",
        nl: "Wat is batch normalization?"
      },
      options: [
        {
          en: "Normalizing inputs per batch",
          es: "Normalizar entradas por lote",
          de: "Eingaben pro Batch normalisieren",
          nl: "Inputs per batch normaliseren"
        },
        {
          en: "Grouping similar data",
          es: "Agrupar datos similares",
          de: "Ähnliche Daten gruppieren",
          nl: "Vergelijkbare data groeperen"
        },
        {
          en: "Splitting datasets",
          es: "Dividir conjuntos de datos",
          de: "Datensätze aufteilen",
          nl: "Datasets splitsen"
        },
        {
          en: "Removing outliers",
          es: "Eliminar valores atípicos",
          de: "Ausreißer entfernen",
          nl: "Uitschieters verwijderen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Batch normalization normalizes the inputs of each layer per mini-batch during training, which stabilizes learning and often allows higher learning rates.",
        es: "La normalización por lotes normaliza las entradas de cada capa por mini-lote durante el entrenamiento, estabilizando el aprendizaje.",
        de: "Batch-Normalisierung normalisiert die Eingaben jeder Schicht pro Mini-Batch während des Trainings und stabilisiert das Lernen.",
        nl: "Batch normalization normaliseert de inputs van elke laag per mini-batch tijdens training, wat het leren stabiliseert."
      }
    },
    {
      question: {
        en: "What is the vanishing gradient problem?",
        es: "¿Qué es el problema del gradiente desvaneciente?",
        de: "Was ist das Problem des verschwindenden Gradienten?",
        nl: "Wat is het vanishing gradient probleem?"
      },
      options: [
        {
          en: "Gradients become too small",
          es: "Gradientes se vuelven muy pequeños",
          de: "Gradienten werden zu klein",
          nl: "Gradiënten worden te klein"
        },
        {
          en: "Gradients become too large",
          es: "Gradientes se vuelven muy grandes",
          de: "Gradienten werden zu groß",
          nl: "Gradiënten worden te groot"
        },
        {
          en: "Gradients disappear randomly",
          es: "Gradientes desaparecen aleatoriamente",
          de: "Gradienten verschwinden zufällig",
          nl: "Gradiënten verdwijnen willekeurig"
        },
        {
          en: "Gradients change direction",
          es: "Gradientes cambian dirección",
          de: "Gradienten ändern Richtung",
          nl: "Gradiënten veranderen richting"
        }
      ],
      correct: 0,
      explanation: {
        en: "The vanishing gradient problem occurs in deep networks when gradients become exponentially small as they backpropagate, making it difficult to train earlier layers.",
        es: "El problema del gradiente desvaneciente ocurre en redes profundas cuando los gradientes se vuelven exponencialmente pequeños.",
        de: "Das Problem des verschwindenden Gradienten tritt in tiefen Netzen auf, wenn Gradienten exponentiell klein werden.",
        nl: "Het vanishing gradient probleem treedt op in diepe netwerken wanneer gradiënten exponentieel klein worden."
      }
    },
    {
      question: {
        en: "What is K-means clustering?",
        es: "¿Qué es el agrupamiento K-medias?",
        de: "Was ist K-Means-Clustering?",
        nl: "Wat is K-means clustering?"
      },
      options: [
        {
          en: "Unsupervised clustering algorithm",
          es: "Algoritmo de agrupamiento no supervisado",
          de: "Unüberwachter Clustering-Algorithmus",
          nl: "Ongesuperviseerd clustering-algoritme"
        },
        {
          en: "Supervised classification method",
          es: "Método de clasificación supervisado",
          de: "Überwachte Klassifikationsmethode",
          nl: "Gesuperviseerde classificatiemethode"
        },
        {
          en: "Regression technique",
          es: "Técnica de regresión",
          de: "Regressionstechnik",
          nl: "Regressietechniek"
        },
        {
          en: "Dimensionality reduction",
          es: "Reducción de dimensionalidad",
          de: "Dimensionsreduktion",
          nl: "Dimensionaliteitsreductie"
        }
      ],
      correct: 0,
      explanation: {
        en: "K-means is an unsupervised clustering algorithm that partitions data into K clusters by minimizing within-cluster variance, grouping similar data points together.",
        es: "K-medias es un algoritmo de agrupamiento no supervisado que particiona datos en K grupos minimizando la varianza dentro del grupo.",
        de: "K-Means ist ein unüberwachter Clustering-Algorithmus, der Daten in K Cluster partitioniert, indem er die Varianz innerhalb der Cluster minimiert.",
        nl: "K-means is een ongesuperviseerd clustering-algoritme dat data in K clusters verdeelt door binnen-cluster variantie te minimaliseren."
      }
    },
    {
      question: {
        en: "What is the purpose of activation functions?",
        es: "¿Cuál es el propósito de las funciones de activación?",
        de: "Was ist der Zweck von Aktivierungsfunktionen?",
        nl: "Wat is het doel van activatiefuncties?"
      },
      options: [
        {
          en: "Add non-linearity to networks",
          es: "Agregar no linealidad a las redes",
          de: "Nichtlinearität zu Netzen hinzufügen",
          nl: "Non-lineariteit toevoegen aan netwerken"
        },
        {
          en: "Speed up computations",
          es: "Acelerar cálculos",
          de: "Berechnungen beschleunigen",
          nl: "Berekeningen versnellen"
        },
        {
          en: "Reduce memory usage",
          es: "Reducir uso de memoria",
          de: "Speichernutzung reduzieren",
          nl: "Geheugengebruik verminderen"
        },
        {
          en: "Initialize weights",
          es: "Inicializar pesos",
          de: "Gewichte initialisieren",
          nl: "Gewichten initialiseren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Activation functions add non-linearity to neural networks, allowing them to learn complex patterns. Without them, networks would only learn linear relationships.",
        es: "Las funciones de activación agregan no linealidad a las redes neuronales, permitiéndoles aprender patrones complejos.",
        de: "Aktivierungsfunktionen fügen neuronalen Netzen Nichtlinearität hinzu und ermöglichen es ihnen, komplexe Muster zu lernen.",
        nl: "Activatiefuncties voegen non-lineariteit toe aan neurale netwerken, waardoor ze complexe patronen kunnen leren."
      }
    },
    {
      question: {
        en: "What is ReLU in neural networks?",
        es: "¿Qué es ReLU en redes neuronales?",
        de: "Was ist ReLU in neuronalen Netzen?",
        nl: "Wat is ReLU in neurale netwerken?"
      },
      options: [
        {
          en: "Rectified Linear Unit activation",
          es: "Activación Unidad Lineal Rectificada",
          de: "Rectified Linear Unit Aktivierung",
          nl: "Rectified Linear Unit activatie"
        },
        {
          en: "Recurrent Learning Unit",
          es: "Unidad de Aprendizaje Recurrente",
          de: "Rekurrente Lerneinheit",
          nl: "Recurrente Leereeinheid"
        },
        {
          en: "Regularized Loss Unit",
          es: "Unidad de Pérdida Regularizada",
          de: "Regularisierte Verlusteinheit",
          nl: "Geregulariseerde Verlieseenheid"
        },
        {
          en: "Random Learning Update",
          es: "Actualización de Aprendizaje Aleatorio",
          de: "Zufälliges Lernupdate",
          nl: "Willekeurige Leerupdate"
        }
      ],
      correct: 0,
      explanation: {
        en: "ReLU (Rectified Linear Unit) is a popular activation function that outputs the input if positive, otherwise zero. It helps avoid vanishing gradient problems.",
        es: "ReLU es una función de activación popular que devuelve la entrada si es positiva, de lo contrario cero.",
        de: "ReLU ist eine beliebte Aktivierungsfunktion, die die Eingabe ausgibt, wenn sie positiv ist, sonst null.",
        nl: "ReLU is een populaire activatiefunctie die de input uitvoert als deze positief is, anders nul."
      }
    },
    {
      question: {
        en: "What is a learning rate?",
        es: "¿Qué es una tasa de aprendizaje?",
        de: "Was ist eine Lernrate?",
        nl: "Wat is een learning rate?"
      },
      options: [
        {
          en: "Step size for gradient updates",
          es: "Tamaño de paso para actualizaciones",
          de: "Schrittgröße für Gradientenaktualisierungen",
          nl: "Stapgrootte voor gradient updates"
        },
        {
          en: "Speed of data loading",
          es: "Velocidad de carga de datos",
          de: "Geschwindigkeit des Datenladens",
          nl: "Snelheid van data laden"
        },
        {
          en: "Model accuracy measure",
          es: "Medida de precisión del modelo",
          de: "Modellgenauigkeitsmaß",
          nl: "Model nauwkeurigheidsmaat"
        },
        {
          en: "Training duration",
          es: "Duración del entrenamiento",
          de: "Trainingsdauer",
          nl: "Trainingsduur"
        }
      ],
      correct: 0,
      explanation: {
        en: "Learning rate is a hyperparameter that controls the step size when updating model weights during training. Too high can overshoot, too low slows convergence.",
        es: "La tasa de aprendizaje es un hiperparámetro que controla el tamaño del paso al actualizar los pesos del modelo durante el entrenamiento.",
        de: "Die Lernrate ist ein Hyperparameter, der die Schrittgröße bei der Aktualisierung der Modellgewichte während des Trainings steuert.",
        nl: "Learning rate is een hyperparameter die de stapgrootte bepaalt bij het updaten van modelgewichten tijdens training."
      }
    },
    {
      question: {
        en: "What is data augmentation?",
        es: "¿Qué es el aumento de datos?",
        de: "Was ist Datenerweiterung?",
        nl: "Wat is data-augmentatie?"
      },
      options: [
        {
          en: "Creating variations of training data",
          es: "Crear variaciones de datos de entrenamiento",
          de: "Variationen von Trainingsdaten erstellen",
          nl: "Variaties van trainingsdata maken"
        },
        {
          en: "Collecting more real data",
          es: "Recopilar más datos reales",
          de: "Mehr reale Daten sammeln",
          nl: "Meer echte data verzamelen"
        },
        {
          en: "Removing duplicate data",
          es: "Eliminar datos duplicados",
          de: "Doppelte Daten entfernen",
          nl: "Dubbele data verwijderen"
        },
        {
          en: "Compressing datasets",
          es: "Comprimir conjuntos de datos",
          de: "Datensätze komprimieren",
          nl: "Datasets comprimeren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Data augmentation artificially increases training data by creating modified versions of existing data (rotations, flips, crops) to improve model generalization.",
        es: "El aumento de datos incrementa artificialmente los datos de entrenamiento creando versiones modificadas de datos existentes.",
        de: "Datenerweiterung erhöht künstlich die Trainingsdaten durch Erstellen modifizierter Versionen vorhandener Daten.",
        nl: "Data-augmentatie verhoogt kunstmatig trainingsdata door gemodificeerde versies van bestaande data te maken."
      }
    },
    {
      question: {
        en: "What is a hyperparameter?",
        es: "¿Qué es un hiperparámetro?",
        de: "Was ist ein Hyperparameter?",
        nl: "Wat is een hyperparameter?"
      },
      options: [
        {
          en: "Configuration set before training",
          es: "Configuración establecida antes del entrenamiento",
          de: "Konfiguration vor dem Training festgelegt",
          nl: "Configuratie ingesteld voor training"
        },
        {
          en: "Weight learned during training",
          es: "Peso aprendido durante el entrenamiento",
          de: "Während des Trainings gelerntes Gewicht",
          nl: "Gewicht geleerd tijdens training"
        },
        {
          en: "Output of the model",
          es: "Salida del modelo",
          de: "Ausgabe des Modells",
          nl: "Output van het model"
        },
        {
          en: "Training data feature",
          es: "Característica de datos de entrenamiento",
          de: "Trainingsdatenmerkmal",
          nl: "Trainingsdata kenmerk"
        }
      ],
      correct: 0,
      explanation: {
        en: "Hyperparameters are configuration variables set before training begins (like learning rate, batch size, number of layers) that control the learning process.",
        es: "Los hiperparámetros son variables de configuración establecidas antes del entrenamiento que controlan el proceso de aprendizaje.",
        de: "Hyperparameter sind Konfigurationsvariablen, die vor dem Training festgelegt werden und den Lernprozess steuern.",
        nl: "Hyperparameters zijn configuratievariabelen ingesteld voor training die het leerproces controleren."
      }
    },
    {
      question: {
        en: "What is the bias-variance tradeoff?",
        es: "¿Qué es el compromiso sesgo-varianza?",
        de: "Was ist der Bias-Varianz-Kompromiss?",
        nl: "Wat is de bias-variance tradeoff?"
      },
      options: [
        {
          en: "Balance between underfitting and overfitting",
          es: "Equilibrio entre subajuste y sobreajuste",
          de: "Balance zwischen Unter- und Überanpassung",
          nl: "Balans tussen underfitting en overfitting"
        },
        {
          en: "Choosing between models",
          es: "Elegir entre modelos",
          de: "Zwischen Modellen wählen",
          nl: "Kiezen tussen modellen"
        },
        {
          en: "Data splitting strategy",
          es: "Estrategia de división de datos",
          de: "Datenaufteilungsstrategie",
          nl: "Data splitsingstrategie"
        },
        {
          en: "Training time vs accuracy",
          es: "Tiempo de entrenamiento vs precisión",
          de: "Trainingszeit vs Genauigkeit",
          nl: "Trainingstijd vs nauwkeurigheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "The bias-variance tradeoff is the balance between a model's ability to fit training data (low bias) and generalize to new data (low variance).",
        es: "El compromiso sesgo-varianza es el equilibrio entre la capacidad de un modelo para ajustar datos de entrenamiento y generalizar a nuevos datos.",
        de: "Der Bias-Varianz-Kompromiss ist das Gleichgewicht zwischen der Fähigkeit eines Modells, Trainingsdaten anzupassen und auf neue Daten zu verallgemeinern.",
        nl: "De bias-variance tradeoff is de balans tussen het vermogen van een model om trainingsdata te fitten en te generaliseren naar nieuwe data."
      }
    },
    {
      question: {
        en: "What is early stopping?",
        es: "¿Qué es la parada temprana?",
        de: "Was ist frühes Stoppen?",
        nl: "Wat is early stopping?"
      },
      options: [
        {
          en: "Stop training when validation error increases",
          es: "Detener entrenamiento cuando aumenta error de validación",
          de: "Training stoppen wenn Validierungsfehler steigt",
          nl: "Training stoppen als validatiefout toeneemt"
        },
        {
          en: "Start training early in the day",
          es: "Comenzar entrenamiento temprano en el día",
          de: "Training früh am Tag beginnen",
          nl: "Training vroeg op de dag starten"
        },
        {
          en: "Use fewer epochs",
          es: "Usar menos épocas",
          de: "Weniger Epochen verwenden",
          nl: "Minder epochs gebruiken"
        },
        {
          en: "Skip initial layers",
          es: "Omitir capas iniciales",
          de: "Anfangsschichten überspringen",
          nl: "Initiële lagen overslaan"
        }
      ],
      correct: 0,
      explanation: {
        en: "Early stopping is a regularization technique that stops training when validation performance starts to degrade, preventing overfitting to training data.",
        es: "La parada temprana es una técnica de regularización que detiene el entrenamiento cuando el rendimiento de validación comienza a degradarse.",
        de: "Frühes Stoppen ist eine Regularisierungstechnik, die das Training stoppt, wenn die Validierungsleistung abnimmt.",
        nl: "Early stopping is een regularisatietechniek die training stopt wanneer validatieprestaties beginnen te verslechteren."
      }
    },
    {
      question: {
        en: "What is dimensionality reduction?",
        es: "¿Qué es la reducción de dimensionalidad?",
        de: "Was ist Dimensionsreduktion?",
        nl: "Wat is dimensionaliteitsreductie?"
      },
      options: [
        {
          en: "Reducing number of features",
          es: "Reducir número de características",
          de: "Anzahl der Merkmale reduzieren",
          nl: "Aantal kenmerken verminderen"
        },
        {
          en: "Making models smaller",
          es: "Hacer modelos más pequeños",
          de: "Modelle kleiner machen",
          nl: "Modellen kleiner maken"
        },
        {
          en: "Compressing images",
          es: "Comprimir imágenes",
          de: "Bilder komprimieren",
          nl: "Afbeeldingen comprimeren"
        },
        {
          en: "Reducing training time",
          es: "Reducir tiempo de entrenamiento",
          de: "Trainingszeit reduzieren",
          nl: "Trainingstijd verminderen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Dimensionality reduction reduces the number of features while preserving important information, helping with visualization and reducing computational complexity.",
        es: "La reducción de dimensionalidad reduce el número de características mientras preserva información importante.",
        de: "Dimensionsreduktion reduziert die Anzahl der Merkmale unter Beibehaltung wichtiger Informationen.",
        nl: "Dimensionaliteitsreductie vermindert het aantal kenmerken terwijl belangrijke informatie behouden blijft."
      }
    },
    {
      question: {
        en: "What is Principal Component Analysis (PCA)?",
        es: "¿Qué es el Análisis de Componentes Principales?",
        de: "Was ist die Hauptkomponentenanalyse?",
        nl: "Wat is Principal Component Analysis?"
      },
      options: [
        {
          en: "Dimensionality reduction technique",
          es: "Técnica de reducción de dimensionalidad",
          de: "Dimensionsreduktionstechnik",
          nl: "Dimensionaliteitsreductietechniek"
        },
        {
          en: "Classification algorithm",
          es: "Algoritmo de clasificación",
          de: "Klassifikationsalgorithmus",
          nl: "Classificatie-algoritme"
        },
        {
          en: "Neural network type",
          es: "Tipo de red neuronal",
          de: "Neuronaler Netzwerktyp",
          nl: "Neuraal netwerktype"
        },
        {
          en: "Clustering method",
          es: "Método de agrupamiento",
          de: "Clustering-Methode",
          nl: "Clusteringmethode"
        }
      ],
      correct: 0,
      explanation: {
        en: "PCA is a dimensionality reduction technique that finds principal components - directions of maximum variance in data - to reduce features while preserving information.",
        es: "PCA es una técnica de reducción de dimensionalidad que encuentra componentes principales para reducir características preservando información.",
        de: "PCA ist eine Dimensionsreduktionstechnik, die Hauptkomponenten findet, um Merkmale zu reduzieren und Informationen zu erhalten.",
        nl: "PCA is een dimensionaliteitsreductietechniek die hoofdcomponenten vindt om kenmerken te verminderen terwijl informatie behouden blijft."
      }
    },
    {
      question: {
        en: "What is the purpose of a loss function?",
        es: "¿Cuál es el propósito de una función de pérdida?",
        de: "Was ist der Zweck einer Verlustfunktion?",
        nl: "Wat is het doel van een loss functie?"
      },
      options: [
        {
          en: "Measure prediction errors",
          es: "Medir errores de predicción",
          de: "Vorhersagefehler messen",
          nl: "Voorspellingsfouten meten"
        },
        {
          en: "Generate new data",
          es: "Generar nuevos datos",
          de: "Neue Daten generieren",
          nl: "Nieuwe data genereren"
        },
        {
          en: "Speed up training",
          es: "Acelerar entrenamiento",
          de: "Training beschleunigen",
          nl: "Training versnellen"
        },
        {
          en: "Select features",
          es: "Seleccionar características",
          de: "Merkmale auswählen",
          nl: "Kenmerken selecteren"
        }
      ],
      correct: 0,
      explanation: {
        en: "A loss function measures how wrong the model's predictions are compared to true values. The goal of training is to minimize this loss.",
        es: "Una función de pérdida mide qué tan incorrectas son las predicciones del modelo comparadas con los valores verdaderos.",
        de: "Eine Verlustfunktion misst, wie falsch die Vorhersagen des Modells im Vergleich zu wahren Werten sind.",
        nl: "Een loss functie meet hoe fout de voorspellingen van het model zijn vergeleken met werkelijke waarden."
      }
    },
    {
      question: {
        en: "What is reinforcement learning?",
        es: "¿Qué es el aprendizaje por refuerzo?",
        de: "Was ist verstärkendes Lernen?",
        nl: "Wat is reinforcement learning?"
      },
      options: [
        {
          en: "Learning through rewards and penalties",
          es: "Aprender mediante recompensas y penalizaciones",
          de: "Lernen durch Belohnungen und Strafen",
          nl: "Leren door beloningen en straffen"
        },
        {
          en: "Learning from labeled data",
          es: "Aprender de datos etiquetados",
          de: "Aus beschrifteten Daten lernen",
          nl: "Leren van gelabelde data"
        },
        {
          en: "Learning without labels",
          es: "Aprender sin etiquetas",
          de: "Ohne Labels lernen",
          nl: "Leren zonder labels"
        },
        {
          en: "Learning from examples",
          es: "Aprender de ejemplos",
          de: "Aus Beispielen lernen",
          nl: "Leren van voorbeelden"
        }
      ],
      correct: 0,
      explanation: {
        en: "Reinforcement learning trains agents to make decisions by rewarding desired behaviors and penalizing undesired ones, learning optimal strategies through trial and error.",
        es: "El aprendizaje por refuerzo entrena agentes para tomar decisiones recompensando comportamientos deseados y penalizando los no deseados.",
        de: "Verstärkendes Lernen trainiert Agenten, Entscheidungen zu treffen, indem erwünschte Verhaltensweisen belohnt und unerwünschte bestraft werden.",
        nl: "Reinforcement learning traint agenten om beslissingen te nemen door gewenst gedrag te belonen en ongewenst gedrag te bestraffen."
      }
    },
    {
      question: {
        en: "What is a convolutional neural network (CNN)?",
        es: "¿Qué es una red neuronal convolucional?",
        de: "Was ist ein konvolutionales neuronales Netz?",
        nl: "Wat is een convolutioneel neuraal netwerk?"
      },
      options: [
        {
          en: "Network designed for image processing",
          es: "Red diseñada para procesamiento de imágenes",
          de: "Netzwerk für Bildverarbeitung",
          nl: "Netwerk ontworpen voor beeldverwerking"
        },
        {
          en: "Network for text analysis",
          es: "Red para análisis de texto",
          de: "Netzwerk für Textanalyse",
          nl: "Netwerk voor tekstanalyse"
        },
        {
          en: "Network for time series",
          es: "Red para series temporales",
          de: "Netzwerk für Zeitreihen",
          nl: "Netwerk voor tijdreeksen"
        },
        {
          en: "Network for audio processing",
          es: "Red para procesamiento de audio",
          de: "Netzwerk für Audioverarbeitung",
          nl: "Netwerk voor audioverwerking"
        }
      ],
      correct: 0,
      explanation: {
        en: "CNNs are neural networks designed for processing grid-like data such as images, using convolutional layers to detect features like edges and patterns.",
        es: "Las CNN son redes neuronales diseñadas para procesar datos tipo cuadrícula como imágenes, usando capas convolucionales para detectar características.",
        de: "CNNs sind neuronale Netze für rasterartige Daten wie Bilder, die Faltungsschichten zur Erkennung von Merkmalen verwenden.",
        nl: "CNN's zijn neurale netwerken ontworpen voor rasterachtige data zoals afbeeldingen, gebruiken convolutionele lagen om kenmerken te detecteren."
      }
    },
    {
      question: {
        en: "What is a recurrent neural network (RNN)?",
        es: "¿Qué es una red neuronal recurrente?",
        de: "Was ist ein rekurrentes neuronales Netz?",
        nl: "Wat is een recurrent neuraal netwerk?"
      },
      options: [
        {
          en: "Network for sequential data",
          es: "Red para datos secuenciales",
          de: "Netzwerk für sequenzielle Daten",
          nl: "Netwerk voor sequentiële data"
        },
        {
          en: "Network for image data",
          es: "Red para datos de imagen",
          de: "Netzwerk für Bilddaten",
          nl: "Netwerk voor beelddata"
        },
        {
          en: "Network for tabular data",
          es: "Red para datos tabulares",
          de: "Netzwerk für tabellarische Daten",
          nl: "Netwerk voor tabulaire data"
        },
        {
          en: "Network for graph data",
          es: "Red para datos de grafo",
          de: "Netzwerk für Graphdaten",
          nl: "Netwerk voor grafiekdata"
        }
      ],
      correct: 0,
      explanation: {
        en: "RNNs are designed for sequential data like text or time series, with connections that loop back to maintain memory of previous inputs in the sequence.",
        es: "Las RNN están diseñadas para datos secuenciales como texto o series temporales, con conexiones que mantienen memoria de entradas previas.",
        de: "RNNs sind für sequenzielle Daten wie Text oder Zeitreihen konzipiert, mit Verbindungen die Speicher früherer Eingaben erhalten.",
        nl: "RNN's zijn ontworpen voor sequentiële data zoals tekst of tijdreeksen, met verbindingen die geheugen van eerdere inputs behouden."
      }
    },
    {
      question: {
        en: "What is LSTM in neural networks?",
        es: "¿Qué es LSTM en redes neuronales?",
        de: "Was ist LSTM in neuronalen Netzen?",
        nl: "Wat is LSTM in neurale netwerken?"
      },
      options: [
        {
          en: "Long Short-Term Memory",
          es: "Memoria a Largo-Corto Plazo",
          de: "Long Short-Term Memory",
          nl: "Long Short-Term Memory"
        },
        {
          en: "Large Scale Training Method",
          es: "Método de Entrenamiento a Gran Escala",
          de: "Großskaliges Trainingsverfahren",
          nl: "Grootschalige Trainingsmethode"
        },
        {
          en: "Linear System Transfer Model",
          es: "Modelo de Transferencia de Sistema Lineal",
          de: "Lineares Systemtransfermodell",
          nl: "Lineair Systeem Transfer Model"
        },
        {
          en: "Learning State Transition Machine",
          es: "Máquina de Transición de Estado de Aprendizaje",
          de: "Lernende Zustandsübergangsmaschine",
          nl: "Lerende Staat Transitie Machine"
        }
      ],
      correct: 0,
      explanation: {
        en: "LSTM (Long Short-Term Memory) is a type of RNN that can learn long-term dependencies, solving the vanishing gradient problem in traditional RNNs.",
        es: "LSTM es un tipo de RNN que puede aprender dependencias a largo plazo, resolviendo el problema del gradiente desvaneciente.",
        de: "LSTM ist ein RNN-Typ, der langfristige Abhängigkeiten lernen kann und das Problem des verschwindenden Gradienten löst.",
        nl: "LSTM is een type RNN dat lange-termijn afhankelijkheden kan leren, lost het vanishing gradient probleem op."
      }
    },
    {
      question: {
        en: "What is autoencoder used for?",
        es: "¿Para qué se usa un autocodificador?",
        de: "Wofür wird ein Autoencoder verwendet?",
        nl: "Waar wordt een autoencoder voor gebruikt?"
      },
      options: [
        {
          en: "Dimensionality reduction and compression",
          es: "Reducción de dimensionalidad y compresión",
          de: "Dimensionsreduktion und Kompression",
          nl: "Dimensionaliteitsreductie en compressie"
        },
        {
          en: "Classification tasks",
          es: "Tareas de clasificación",
          de: "Klassifikationsaufgaben",
          nl: "Classificatietaken"
        },
        {
          en: "Regression analysis",
          es: "Análisis de regresión",
          de: "Regressionsanalyse",
          nl: "Regressieanalyse"
        },
        {
          en: "Clustering data",
          es: "Agrupamiento de datos",
          de: "Daten clustern",
          nl: "Data clusteren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Autoencoders are neural networks that learn to compress data into a lower-dimensional representation and reconstruct it, useful for dimensionality reduction and denoising.",
        es: "Los autocodificadores son redes neuronales que aprenden a comprimir datos en una representación de menor dimensión y reconstruirlos.",
        de: "Autoencoder sind neuronale Netze, die Daten in eine niedrigdimensionale Darstellung komprimieren und rekonstruieren.",
        nl: "Autoencoders zijn neurale netwerken die data leren comprimeren naar een lagere dimensionale representatie en reconstrueren."
      }
    },
    {
      question: {
        en: "What is GAN in machine learning?",
        es: "¿Qué es GAN en aprendizaje automático?",
        de: "Was ist GAN im maschinellen Lernen?",
        nl: "Wat is GAN in machine learning?"
      },
      options: [
        {
          en: "Generative Adversarial Network",
          es: "Red Generativa Adversaria",
          de: "Generative Adversarial Network",
          nl: "Generative Adversarial Network"
        },
        {
          en: "Global Average Network",
          es: "Red Promedio Global",
          de: "Globales Durchschnittsnetzwerk",
          nl: "Globaal Gemiddeld Netwerk"
        },
        {
          en: "Gradient Activation Network",
          es: "Red de Activación de Gradiente",
          de: "Gradientenaktivierungsnetzwerk",
          nl: "Gradiënt Activatie Netwerk"
        },
        {
          en: "Graph Analysis Network",
          es: "Red de Análisis de Grafos",
          de: "Graphanalysenetzwerk",
          nl: "Grafiek Analyse Netwerk"
        }
      ],
      correct: 0,
      explanation: {
        en: "GANs consist of two neural networks competing against each other - a generator creating fake data and a discriminator detecting fakes, used for generating realistic data.",
        es: "Las GAN consisten en dos redes neuronales compitiendo - un generador creando datos falsos y un discriminador detectando falsificaciones.",
        de: "GANs bestehen aus zwei konkurrierenden neuronalen Netzen - einem Generator der falsche Daten erstellt und einem Diskriminator der Fälschungen erkennt.",
        nl: "GAN's bestaan uit twee neurale netwerken die tegen elkaar concurreren - een generator die valse data maakt en een discriminator die vervalsingen detecteert."
      }
    },
    {
      question: {
        en: "What is the difference between AI and ML?",
        es: "¿Cuál es la diferencia entre IA y AA?",
        de: "Was ist der Unterschied zwischen KI und ML?",
        nl: "Wat is het verschil tussen AI en ML?"
      },
      options: [
        {
          en: "AI is broader, ML is a subset",
          es: "IA es más amplia, AA es un subconjunto",
          de: "KI ist breiter, ML ist eine Teilmenge",
          nl: "AI is breder, ML is een subset"
        },
        {
          en: "They are the same thing",
          es: "Son lo mismo",
          de: "Sie sind dasselbe",
          nl: "Ze zijn hetzelfde"
        },
        {
          en: "ML is broader, AI is a subset",
          es: "AA es más amplia, IA es un subconjunto",
          de: "ML ist breiter, KI ist eine Teilmenge",
          nl: "ML is breder, AI is een subset"
        },
        {
          en: "No relationship exists",
          es: "No existe relación",
          de: "Keine Beziehung existiert",
          nl: "Er bestaat geen relatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "AI is the broader concept of machines being able to perform tasks intelligently, while ML is a specific subset where machines learn from data.",
        es: "IA es el concepto más amplio de máquinas realizando tareas inteligentemente, mientras AA es un subconjunto donde las máquinas aprenden de datos.",
        de: "KI ist das breitere Konzept von Maschinen die Aufgaben intelligent ausführen, während ML eine Teilmenge ist wo Maschinen aus Daten lernen.",
        nl: "AI is het bredere concept van machines die taken intelligent uitvoeren, terwijl ML een subset is waar machines leren van data."
      }
    },
    {
      question: {
        en: "What is a support vector machine (SVM)?",
        es: "¿Qué es una máquina de vectores de soporte?",
        de: "Was ist eine Support Vector Machine?",
        nl: "Wat is een support vector machine?"
      },
      options: [
        {
          en: "Classification algorithm finding optimal boundary",
          es: "Algoritmo de clasificación encontrando límite óptimo",
          de: "Klassifikationsalgorithmus der optimale Grenze findet",
          nl: "Classificatie-algoritme dat optimale grens vindt"
        },
        {
          en: "Neural network architecture",
          es: "Arquitectura de red neuronal",
          de: "Neuronale Netzwerkarchitektur",
          nl: "Neurale netwerkarchitectuur"
        },
        {
          en: "Clustering technique",
          es: "Técnica de agrupamiento",
          de: "Clustering-Technik",
          nl: "Clusteringtechniek"
        },
        {
          en: "Regression method",
          es: "Método de regresión",
          de: "Regressionsmethode",
          nl: "Regressiemethode"
        }
      ],
      correct: 0,
      explanation: {
        en: "SVM is a classification algorithm that finds the optimal hyperplane to separate different classes with maximum margin between them.",
        es: "SVM es un algoritmo de clasificación que encuentra el hiperplano óptimo para separar diferentes clases con máximo margen entre ellas.",
        de: "SVM ist ein Klassifikationsalgorithmus, der die optimale Hyperebene findet, um verschiedene Klassen mit maximalem Abstand zu trennen.",
        nl: "SVM is een classificatie-algoritme dat het optimale hypervlak vindt om verschillende klassen met maximale marge te scheiden."
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
        {
          en: "Creating new features from raw data",
          es: "Crear nuevas características de datos crudos",
          de: "Neue Merkmale aus Rohdaten erstellen",
          nl: "Nieuwe kenmerken maken uit ruwe data"
        },
        {
          en: "Building neural networks",
          es: "Construir redes neuronales",
          de: "Neuronale Netze bauen",
          nl: "Neurale netwerken bouwen"
        },
        {
          en: "Testing model performance",
          es: "Probar rendimiento del modelo",
          de: "Modellleistung testen",
          nl: "Modelprestaties testen"
        },
        {
          en: "Collecting more data",
          es: "Recopilar más datos",
          de: "Mehr Daten sammeln",
          nl: "Meer data verzamelen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Feature engineering is the process of creating new features or transforming existing ones to improve model performance by making patterns more apparent.",
        es: "La ingeniería de características es el proceso de crear nuevas características o transformar las existentes para mejorar el rendimiento del modelo.",
        de: "Feature Engineering ist der Prozess, neue Merkmale zu erstellen oder bestehende zu transformieren, um die Modellleistung zu verbessern.",
        nl: "Feature engineering is het proces van nieuwe kenmerken maken of bestaande transformeren om modelprestaties te verbeteren."
      }
    },
    {
      question: {
        en: "What is the curse of dimensionality?",
        es: "¿Qué es la maldición de la dimensionalidad?",
        de: "Was ist der Fluch der Dimensionalität?",
        nl: "Wat is de vloek van dimensionaliteit?"
      },
      options: [
        {
          en: "Problems arising with high-dimensional data",
          es: "Problemas que surgen con datos de alta dimensión",
          de: "Probleme mit hochdimensionalen Daten",
          nl: "Problemen met hoogdimensionale data"
        },
        {
          en: "Too few features in dataset",
          es: "Muy pocas características en el conjunto de datos",
          de: "Zu wenige Merkmale im Datensatz",
          nl: "Te weinig kenmerken in dataset"
        },
        {
          en: "Model complexity issues",
          es: "Problemas de complejidad del modelo",
          de: "Modellkomplexitätsprobleme",
          nl: "Model complexiteitsproblemen"
        },
        {
          en: "Training time limitations",
          es: "Limitaciones de tiempo de entrenamiento",
          de: "Trainingszeitbeschränkungen",
          nl: "Trainingstijd beperkingen"
        }
      ],
      correct: 0,
      explanation: {
        en: "The curse of dimensionality refers to various problems that arise when analyzing data in high-dimensional spaces, including sparsity and increased computational complexity.",
        es: "La maldición de la dimensionalidad se refiere a varios problemas que surgen al analizar datos en espacios de alta dimensión.",
        de: "Der Fluch der Dimensionalität bezieht sich auf Probleme bei der Analyse von Daten in hochdimensionalen Räumen.",
        nl: "De vloek van dimensionaliteit verwijst naar problemen die ontstaan bij het analyseren van data in hoogdimensionale ruimtes."
      }
    },
    {
      question: {
        en: "What is semi-supervised learning?",
        es: "¿Qué es el aprendizaje semi-supervisado?",
        de: "Was ist halbüberwachtes Lernen?",
        nl: "Wat is semi-gesuperviseerd leren?"
      },
      options: [
        {
          en: "Using both labeled and unlabeled data",
          es: "Usar datos etiquetados y no etiquetados",
          de: "Beschriftete und unbeschriftete Daten nutzen",
          nl: "Gelabelde en ongelabelde data gebruiken"
        },
        {
          en: "Only using labeled data",
          es: "Solo usar datos etiquetados",
          de: "Nur beschriftete Daten verwenden",
          nl: "Alleen gelabelde data gebruiken"
        },
        {
          en: "Only using unlabeled data",
          es: "Solo usar datos no etiquetados",
          de: "Nur unbeschriftete Daten verwenden",
          nl: "Alleen ongelabelde data gebruiken"
        },
        {
          en: "Learning without any data",
          es: "Aprender sin datos",
          de: "Ohne Daten lernen",
          nl: "Leren zonder data"
        }
      ],
      correct: 0,
      explanation: {
        en: "Semi-supervised learning uses a small amount of labeled data combined with a large amount of unlabeled data, useful when labeling is expensive.",
        es: "El aprendizaje semi-supervisado usa una pequeña cantidad de datos etiquetados combinados con muchos datos no etiquetados.",
        de: "Halbüberwachtes Lernen verwendet eine kleine Menge beschrifteter Daten kombiniert mit vielen unbeschrifteten Daten.",
        nl: "Semi-gesuperviseerd leren gebruikt een kleine hoeveelheid gelabelde data gecombineerd met veel ongelabelde data."
      }
    },
    {
      question: {
        en: "What is online learning in ML?",
        es: "¿Qué es el aprendizaje en línea en AA?",
        de: "Was ist Online-Lernen in ML?",
        nl: "Wat is online learning in ML?"
      },
      options: [
        {
          en: "Learning from data streams continuously",
          es: "Aprender de flujos de datos continuamente",
          de: "Kontinuierlich aus Datenströmen lernen",
          nl: "Continu leren van datastromen"
        },
        {
          en: "Learning through the internet",
          es: "Aprender a través de internet",
          de: "Über das Internet lernen",
          nl: "Leren via het internet"
        },
        {
          en: "Learning in batches",
          es: "Aprender en lotes",
          de: "In Stapeln lernen",
          nl: "Leren in batches"
        },
        {
          en: "Learning offline",
          es: "Aprender sin conexión",
          de: "Offline lernen",
          nl: "Offline leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Online learning (incremental learning) trains models on data streams, updating continuously as new data arrives rather than retraining on entire datasets.",
        es: "El aprendizaje en línea entrena modelos en flujos de datos, actualizándose continuamente cuando llegan nuevos datos.",
        de: "Online-Lernen trainiert Modelle auf Datenströmen und aktualisiert kontinuierlich, wenn neue Daten ankommen.",
        nl: "Online learning traint modellen op datastromen, updatet continu wanneer nieuwe data aankomt."
      }
    },
    {
      question: {
        en: "What is a Transformer model?",
        es: "¿Qué es un modelo Transformer?",
        de: "Was ist ein Transformer-Modell?",
        nl: "Wat is een Transformer model?"
      },
      options: [
        {
          en: "Architecture using attention mechanisms",
          es: "Arquitectura usando mecanismos de atención",
          de: "Architektur mit Aufmerksamkeitsmechanismen",
          nl: "Architectuur met attentiemechanismen"
        },
        {
          en: "Type of CNN",
          es: "Tipo de CNN",
          de: "CNN-Typ",
          nl: "Type CNN"
        },
        {
          en: "Type of RNN",
          es: "Tipo de RNN",
          de: "RNN-Typ",
          nl: "Type RNN"
        },
        {
          en: "Classical ML algorithm",
          es: "Algoritmo de AA clásico",
          de: "Klassischer ML-Algorithmus",
          nl: "Klassiek ML-algoritme"
        }
      ],
      correct: 0,
      explanation: {
        en: "Transformers are neural network architectures that use self-attention mechanisms to process sequential data, revolutionizing NLP tasks like language translation.",
        es: "Los Transformers son arquitecturas de redes neuronales que usan mecanismos de autoatención para procesar datos secuenciales.",
        de: "Transformer sind neuronale Netzwerkarchitekturen, die Selbstaufmerksamkeitsmechanismen zur Verarbeitung sequenzieller Daten verwenden.",
        nl: "Transformers zijn neurale netwerkarchitecturen die zelf-attentiemechanismen gebruiken om sequentiële data te verwerken."
      }
    },
    {
      question: {
        en: "What is BERT in NLP?",
        es: "¿Qué es BERT en PLN?",
        de: "Was ist BERT in NLP?",
        nl: "Wat is BERT in NLP?"
      },
      options: [
        {
          en: "Bidirectional Encoder Representations from Transformers",
          es: "Representaciones de Codificador Bidireccional de Transformers",
          de: "Bidirektionale Encoder-Repräsentationen von Transformers",
          nl: "Bidirectional Encoder Representations from Transformers"
        },
        {
          en: "Basic Error Reduction Technique",
          es: "Técnica Básica de Reducción de Errores",
          de: "Grundlegende Fehlerreduktionstechnik",
          nl: "Basis Fout Reductie Techniek"
        },
        {
          en: "Batch Evaluation and Regression Tool",
          es: "Herramienta de Evaluación y Regresión por Lotes",
          de: "Batch-Bewertungs- und Regressionstool",
          nl: "Batch Evaluatie en Regressie Tool"
        },
        {
          en: "Binary Encoding Recognition Technology",
          es: "Tecnología de Reconocimiento de Codificación Binaria",
          de: "Binäre Kodierungserkennungstechnologie",
          nl: "Binaire Codering Herkenning Technologie"
        }
      ],
      correct: 0,
      explanation: {
        en: "BERT is a pre-trained language model that understands context from both directions, significantly improving performance on various NLP tasks.",
        es: "BERT es un modelo de lenguaje preentrenado que entiende el contexto desde ambas direcciones, mejorando el rendimiento en tareas de PLN.",
        de: "BERT ist ein vortrainiertes Sprachmodell, das Kontext aus beiden Richtungen versteht und die Leistung bei NLP-Aufgaben verbessert.",
        nl: "BERT is een voorgetraind taalmodel dat context uit beide richtingen begrijpt, verbetert prestaties op NLP-taken."
      }
    },
    {
      question: {
        en: "What is federated learning?",
        es: "¿Qué es el aprendizaje federado?",
        de: "Was ist föderiertes Lernen?",
        nl: "Wat is federated learning?"
      },
      options: [
        {
          en: "Training on distributed data without centralizing",
          es: "Entrenar en datos distribuidos sin centralizar",
          de: "Training auf verteilten Daten ohne Zentralisierung",
          nl: "Trainen op gedistribueerde data zonder centralisatie"
        },
        {
          en: "Training multiple models together",
          es: "Entrenar múltiples modelos juntos",
          de: "Mehrere Modelle zusammen trainieren",
          nl: "Meerdere modellen samen trainen"
        },
        {
          en: "Centralizing all data first",
          es: "Centralizar todos los datos primero",
          de: "Alle Daten zuerst zentralisieren",
          nl: "Alle data eerst centraliseren"
        },
        {
          en: "Training on cloud platforms",
          es: "Entrenar en plataformas en la nube",
          de: "Training auf Cloud-Plattformen",
          nl: "Trainen op cloud platforms"
        }
      ],
      correct: 0,
      explanation: {
        en: "Federated learning trains models on distributed datasets without moving data to a central server, preserving privacy while learning from multiple sources.",
        es: "El aprendizaje federado entrena modelos en conjuntos de datos distribuidos sin mover datos a un servidor central, preservando la privacidad.",
        de: "Föderiertes Lernen trainiert Modelle auf verteilten Datensätzen ohne Daten zu einem zentralen Server zu verschieben.",
        nl: "Federated learning traint modellen op gedistribueerde datasets zonder data naar een centrale server te verplaatsen."
      }
    },
    {
      question: {
        en: "What is the Adam optimizer?",
        es: "¿Qué es el optimizador Adam?",
        de: "Was ist der Adam-Optimierer?",
        nl: "Wat is de Adam optimizer?"
      },
      options: [
        {
          en: "Adaptive moment estimation optimizer",
          es: "Optimizador de estimación de momento adaptativo",
          de: "Adaptiver Momentschätzungsoptimierer",
          nl: "Adaptieve moment schatting optimizer"
        },
        {
          en: "Advanced data augmentation method",
          es: "Método avanzado de aumento de datos",
          de: "Erweiterte Datenerweiterungsmethode",
          nl: "Geavanceerde data-augmentatiemethode"
        },
        {
          en: "Automatic model selector",
          es: "Selector automático de modelos",
          de: "Automatischer Modellselektor",
          nl: "Automatische modelselector"
        },
        {
          en: "Accuracy measurement tool",
          es: "Herramienta de medición de precisión",
          de: "Genauigkeitsmesswerkzeug",
          nl: "Nauwkeurigheid meetinstrument"
        }
      ],
      correct: 0,
      explanation: {
        en: "Adam is an optimization algorithm that combines advantages of AdaGrad and RMSProp, adapting learning rates for each parameter based on first and second moments.",
        es: "Adam es un algoritmo de optimización que combina ventajas de AdaGrad y RMSProp, adaptando tasas de aprendizaje para cada parámetro.",
        de: "Adam ist ein Optimierungsalgorithmus, der Vorteile von AdaGrad und RMSProp kombiniert und Lernraten für jeden Parameter anpasst.",
        nl: "Adam is een optimalisatie-algoritme dat voordelen van AdaGrad en RMSProp combineert, past learning rates aan voor elke parameter."
      }
    },
    {
      question: {
        en: "What is zero-shot learning?",
        es: "¿Qué es el aprendizaje zero-shot?",
        de: "Was ist Zero-Shot-Lernen?",
        nl: "Wat is zero-shot learning?"
      },
      options: [
        {
          en: "Classifying unseen classes without examples",
          es: "Clasificar clases no vistas sin ejemplos",
          de: "Ungesehene Klassen ohne Beispiele klassifizieren",
          nl: "Ongeziene klassen classificeren zonder voorbeelden"
        },
        {
          en: "Training without any data",
          es: "Entrenar sin ningún dato",
          de: "Training ohne Daten",
          nl: "Trainen zonder data"
        },
        {
          en: "Using zero training epochs",
          es: "Usar cero épocas de entrenamiento",
          de: "Null Trainingsepochen verwenden",
          nl: "Nul training epochs gebruiken"
        },
        {
          en: "Learning with zero errors",
          es: "Aprender con cero errores",
          de: "Mit null Fehlern lernen",
          nl: "Leren met nul fouten"
        }
      ],
      correct: 0,
      explanation: {
        en: "Zero-shot learning enables models to classify or recognize objects/concepts they haven't seen during training by leveraging auxiliary information or relationships.",
        es: "El aprendizaje zero-shot permite a los modelos clasificar objetos/conceptos que no han visto durante el entrenamiento usando información auxiliar.",
        de: "Zero-Shot-Lernen ermöglicht Modellen, Objekte/Konzepte zu klassifizieren, die sie während des Trainings nicht gesehen haben.",
        nl: "Zero-shot learning stelt modellen in staat objecten/concepten te classificeren die ze niet tijdens training hebben gezien."
      }
    },
    {
      question: {
        en: "What is model interpretability?",
        es: "¿Qué es la interpretabilidad del modelo?",
        de: "Was ist Modellinterpretierbarkeit?",
        nl: "Wat is model interpreteerbaarheid?"
      },
      options: [
        {
          en: "Understanding how models make decisions",
          es: "Entender cómo los modelos toman decisiones",
          de: "Verstehen, wie Modelle Entscheidungen treffen",
          nl: "Begrijpen hoe modellen beslissingen nemen"
        },
        {
          en: "Translating models between languages",
          es: "Traducir modelos entre idiomas",
          de: "Modelle zwischen Sprachen übersetzen",
          nl: "Modellen vertalen tussen talen"
        },
        {
          en: "Making models faster",
          es: "Hacer modelos más rápidos",
          de: "Modelle schneller machen",
          nl: "Modellen sneller maken"
        },
        {
          en: "Reducing model size",
          es: "Reducir tamaño del modelo",
          de: "Modellgröße reduzieren",
          nl: "Modelgrootte verkleinen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Model interpretability refers to the degree to which humans can understand and explain how a machine learning model arrives at its predictions or decisions.",
        es: "La interpretabilidad del modelo se refiere al grado en que los humanos pueden entender y explicar cómo un modelo llega a sus predicciones.",
        de: "Modellinterpretierbarkeit bezieht sich darauf, wie gut Menschen verstehen können, wie ein Modell zu seinen Vorhersagen kommt.",
        nl: "Model interpreteerbaarheid verwijst naar de mate waarin mensen kunnen begrijpen hoe een model tot voorspellingen komt."
      }
    },
    {
      question: {
        en: "What is the purpose of A/B testing in ML?",
        es: "¿Cuál es el propósito de las pruebas A/B en AA?",
        de: "Was ist der Zweck von A/B-Tests in ML?",
        nl: "Wat is het doel van A/B testing in ML?"
      },
      options: [
        {
          en: "Comparing model versions in production",
          es: "Comparar versiones de modelos en producción",
          de: "Modellversionen in Produktion vergleichen",
          nl: "Modelversies vergelijken in productie"
        },
        {
          en: "Training two models simultaneously",
          es: "Entrenar dos modelos simultáneamente",
          de: "Zwei Modelle gleichzeitig trainieren",
          nl: "Twee modellen tegelijk trainen"
        },
        {
          en: "Splitting data into sets",
          es: "Dividir datos en conjuntos",
          de: "Daten in Sets aufteilen",
          nl: "Data splitsen in sets"
        },
        {
          en: "Testing accuracy metrics",
          es: "Probar métricas de precisión",
          de: "Genauigkeitsmetriken testen",
          nl: "Nauwkeurigheidsmetrieken testen"
        }
      ],
      correct: 0,
      explanation: {
        en: "A/B testing in ML compares different model versions or features in production with real users to determine which performs better based on defined metrics.",
        es: "Las pruebas A/B en AA comparan diferentes versiones de modelos en producción con usuarios reales para determinar cuál funciona mejor.",
        de: "A/B-Tests in ML vergleichen verschiedene Modellversionen in der Produktion mit echten Benutzern, um zu bestimmen, welche besser funktioniert.",
        nl: "A/B testing in ML vergelijkt verschillende modelversies in productie met echte gebruikers om te bepalen welke beter presteert."
      }
    },
    {
      question: {
        en: "What is MLOps?",
        es: "¿Qué es MLOps?",
        de: "Was ist MLOps?",
        nl: "Wat is MLOps?"
      },
      options: [
        {
          en: "Machine Learning Operations practices",
          es: "Prácticas de Operaciones de Aprendizaje Automático",
          de: "Machine Learning Operations Praktiken",
          nl: "Machine Learning Operations praktijken"
        },
        {
          en: "ML optimization techniques",
          es: "Técnicas de optimización de AA",
          de: "ML-Optimierungstechniken",
          nl: "ML optimalisatietechnieken"
        },
        {
          en: "ML programming language",
          es: "Lenguaje de programación de AA",
          de: "ML-Programmiersprache",
          nl: "ML programmeertaal"
        },
        {
          en: "ML testing framework",
          es: "Marco de pruebas de AA",
          de: "ML-Testframework",
          nl: "ML testframework"
        }
      ],
      correct: 0,
      explanation: {
        en: "MLOps combines ML, DevOps, and data engineering practices to deploy and maintain ML models in production reliably and efficiently.",
        es: "MLOps combina prácticas de AA, DevOps e ingeniería de datos para desplegar y mantener modelos de AA en producción de manera confiable.",
        de: "MLOps kombiniert ML-, DevOps- und Data-Engineering-Praktiken, um ML-Modelle zuverlässig in der Produktion einzusetzen.",
        nl: "MLOps combineert ML, DevOps en data engineering praktijken om ML-modellen betrouwbaar in productie te deployen."
      }
    },
    {
      question: {
        en: "What is fine-tuning in ML?",
        es: "¿Qué es el ajuste fino en AA?",
        de: "Was ist Feinabstimmung in ML?",
        nl: "Wat is fine-tuning in ML?"
      },
      options: [
        {
          en: "Adapting pre-trained models to specific tasks",
          es: "Adaptar modelos preentrenados a tareas específicas",
          de: "Vortrainierte Modelle an spezifische Aufgaben anpassen",
          nl: "Voorgetrainde modellen aanpassen aan specifieke taken"
        },
        {
          en: "Adjusting hyperparameters",
          es: "Ajustar hiperparámetros",
          de: "Hyperparameter anpassen",
          nl: "Hyperparameters aanpassen"
        },
        {
          en: "Reducing model size",
          es: "Reducir tamaño del modelo",
          de: "Modellgröße reduzieren",
          nl: "Modelgrootte verkleinen"
        },
        {
          en: "Improving model speed",
          es: "Mejorar velocidad del modelo",
          de: "Modellgeschwindigkeit verbessern",
          nl: "Modelsnelheid verbeteren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Fine-tuning takes a pre-trained model and continues training it on a smaller, task-specific dataset to adapt it for a particular use case.",
        es: "El ajuste fino toma un modelo preentrenado y continúa entrenándolo en un conjunto de datos específico para adaptarlo a un caso de uso particular.",
        de: "Feinabstimmung nimmt ein vortrainiertes Modell und trainiert es auf einem kleineren, aufgabenspezifischen Datensatz weiter.",
        nl: "Fine-tuning neemt een voorgetraind model en traint het verder op een kleinere, taakspecifieke dataset."
      }
    },
    {
      question: {
        en: "What is model drift?",
        es: "¿Qué es la deriva del modelo?",
        de: "Was ist Modelldrift?",
        nl: "Wat is model drift?"
      },
      options: [
        {
          en: "Model performance degrading over time",
          es: "Rendimiento del modelo degradándose con el tiempo",
          de: "Modellleistung verschlechtert sich über Zeit",
          nl: "Modelprestaties verslechteren over tijd"
        },
        {
          en: "Model moving to different servers",
          es: "Modelo moviéndose a diferentes servidores",
          de: "Modell zu verschiedenen Servern verschieben",
          nl: "Model verplaatsen naar andere servers"
        },
        {
          en: "Model size increasing",
          es: "Tamaño del modelo aumentando",
          de: "Modellgröße nimmt zu",
          nl: "Modelgrootte neemt toe"
        },
        {
          en: "Model training speed changing",
          es: "Velocidad de entrenamiento del modelo cambiando",
          de: "Modelltrainingsgeschwindigkeit ändert sich",
          nl: "Model trainingssnelheid verandert"
        }
      ],
      correct: 0,
      explanation: {
        en: "Model drift occurs when a model's performance degrades over time due to changes in the underlying data distribution or relationships it was trained on.",
        es: "La deriva del modelo ocurre cuando el rendimiento de un modelo se degrada con el tiempo debido a cambios en la distribución de datos.",
        de: "Modelldrift tritt auf, wenn die Leistung eines Modells im Laufe der Zeit aufgrund von Änderungen in der Datenverteilung abnimmt.",
        nl: "Model drift treedt op wanneer modelprestaties verslechteren door veranderingen in de onderliggende datadistributie."
      }
    },
    {
      question: {
        en: "What is edge AI?",
        es: "¿Qué es IA de borde?",
        de: "Was ist Edge-KI?",
        nl: "Wat is edge AI?"
      },
      options: [
        {
          en: "AI running on local devices",
          es: "IA ejecutándose en dispositivos locales",
          de: "KI auf lokalen Geräten",
          nl: "AI draaiend op lokale apparaten"
        },
        {
          en: "AI at the cutting edge",
          es: "IA en la vanguardia",
          de: "KI an der Spitze",
          nl: "AI aan de voorhoede"
        },
        {
          en: "AI in cloud servers",
          es: "IA en servidores en la nube",
          de: "KI in Cloud-Servern",
          nl: "AI in cloud servers"
        },
        {
          en: "AI for edge detection",
          es: "IA para detección de bordes",
          de: "KI für Kantenerkennung",
          nl: "AI voor randdetectie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Edge AI refers to artificial intelligence algorithms processed locally on hardware devices, rather than in the cloud, enabling real-time processing with lower latency.",
        es: "IA de borde se refiere a algoritmos de IA procesados localmente en dispositivos, en lugar de la nube, permitiendo procesamiento en tiempo real.",
        de: "Edge-KI bezieht sich auf KI-Algorithmen, die lokal auf Geräten verarbeitet werden, anstatt in der Cloud.",
        nl: "Edge AI verwijst naar AI-algoritmen verwerkt op lokale apparaten, in plaats van in de cloud, voor real-time verwerking."
      }
    },
    {
      question: {
        en: "What is XGBoost?",
        es: "¿Qué es XGBoost?",
        de: "Was ist XGBoost?",
        nl: "Wat is XGBoost?"
      },
      options: [
        {
          en: "Extreme Gradient Boosting algorithm",
          es: "Algoritmo de Gradient Boosting Extremo",
          de: "Extreme Gradient Boosting Algorithmus",
          nl: "Extreme Gradient Boosting algoritme"
        },
        {
          en: "Extra GPU Boost technology",
          es: "Tecnología Extra GPU Boost",
          de: "Extra GPU Boost Technologie",
          nl: "Extra GPU Boost technologie"
        },
        {
          en: "Extended Graph Building tool",
          es: "Herramienta de Construcción de Grafos Extendida",
          de: "Erweitertes Graph-Erstellungstool",
          nl: "Uitgebreide Grafiek Bouw tool"
        },
        {
          en: "Cross-platform Gaming Boost",
          es: "Impulso de Juegos Multiplataforma",
          de: "Plattformübergreifender Gaming-Boost",
          nl: "Cross-platform Gaming Boost"
        }
      ],
      correct: 0,
      explanation: {
        en: "XGBoost is an optimized gradient boosting library designed for speed and performance, widely used in machine learning competitions and production systems.",
        es: "XGBoost es una biblioteca de gradient boosting optimizada diseñada para velocidad y rendimiento, ampliamente usada en competencias de AA.",
        de: "XGBoost ist eine optimierte Gradient-Boosting-Bibliothek für Geschwindigkeit und Leistung, weit verbreitet in ML-Wettbewerben.",
        nl: "XGBoost is een geoptimaliseerde gradient boosting bibliotheek ontworpen voor snelheid en prestaties, veel gebruikt in ML-competities."
      }
    },
    {
      question: {
        en: "What is active learning in ML?",
        es: "¿Qué es el aprendizaje activo en AA?",
        de: "Was ist aktives Lernen in ML?",
        nl: "Wat is active learning in ML?"
      },
      options: [
        {
          en: "Selecting most informative samples for labeling",
          es: "Seleccionar muestras más informativas para etiquetar",
          de: "Informativste Proben zur Beschriftung auswählen",
          nl: "Meest informatieve samples selecteren voor labeling"
        },
        {
          en: "Training models continuously",
          es: "Entrenar modelos continuamente",
          de: "Modelle kontinuierlich trainieren",
          nl: "Modellen continu trainen"
        },
        {
          en: "Using active GPUs",
          es: "Usar GPUs activas",
          de: "Aktive GPUs verwenden",
          nl: "Actieve GPU's gebruiken"
        },
        {
          en: "Interactive model training",
          es: "Entrenamiento interactivo del modelo",
          de: "Interaktives Modelltraining",
          nl: "Interactieve modeltraining"
        }
      ],
      correct: 0,
      explanation: {
        en: "Active learning is a technique where the model identifies which unlabeled data points would be most valuable to label next, reducing labeling costs.",
        es: "El aprendizaje activo es una técnica donde el modelo identifica qué puntos de datos no etiquetados serían más valiosos para etiquetar.",
        de: "Aktives Lernen ist eine Technik, bei der das Modell identifiziert, welche unbeschrifteten Datenpunkte am wertvollsten zu beschriften wären.",
        nl: "Active learning is een techniek waarbij het model identificeert welke ongelabelde datapunten het meest waardevol zijn om te labelen."
      }
    },
    {
      question: {
        en: "What is multi-task learning?",
        es: "¿Qué es el aprendizaje multitarea?",
        de: "Was ist Multi-Task-Lernen?",
        nl: "Wat is multi-task learning?"
      },
      options: [
        {
          en: "Training one model for multiple related tasks",
          es: "Entrenar un modelo para múltiples tareas relacionadas",
          de: "Ein Modell für mehrere verwandte Aufgaben trainieren",
          nl: "Één model trainen voor meerdere gerelateerde taken"
        },
        {
          en: "Training multiple separate models",
          es: "Entrenar múltiples modelos separados",
          de: "Mehrere separate Modelle trainieren",
          nl: "Meerdere aparte modellen trainen"
        },
        {
          en: "Running tasks in parallel",
          es: "Ejecutar tareas en paralelo",
          de: "Aufgaben parallel ausführen",
          nl: "Taken parallel uitvoeren"
        },
        {
          en: "Switching between tasks",
          es: "Cambiar entre tareas",
          de: "Zwischen Aufgaben wechseln",
          nl: "Wisselen tussen taken"
        }
      ],
      correct: 0,
      explanation: {
        en: "Multi-task learning trains a single model to perform multiple related tasks simultaneously, sharing representations to improve performance on all tasks.",
        es: "El aprendizaje multitarea entrena un modelo único para realizar múltiples tareas relacionadas simultáneamente, compartiendo representaciones.",
        de: "Multi-Task-Lernen trainiert ein einzelnes Modell für mehrere verwandte Aufgaben gleichzeitig und teilt Repräsentationen.",
        nl: "Multi-task learning traint één model om meerdere gerelateerde taken tegelijk uit te voeren, deelt representaties."
      }
    },
    {
      question: {
        en: "What is knowledge distillation?",
        es: "¿Qué es la destilación de conocimiento?",
        de: "Was ist Wissensdestillation?",
        nl: "Wat is knowledge distillation?"
      },
      options: [
        {
          en: "Transferring knowledge from large to small models",
          es: "Transferir conocimiento de modelos grandes a pequeños",
          de: "Wissen von großen auf kleine Modelle übertragen",
          nl: "Kennis overdragen van grote naar kleine modellen"
        },
        {
          en: "Extracting features from data",
          es: "Extraer características de datos",
          de: "Merkmale aus Daten extrahieren",
          nl: "Kenmerken uit data extraheren"
        },
        {
          en: "Compressing datasets",
          es: "Comprimir conjuntos de datos",
          de: "Datensätze komprimieren",
          nl: "Datasets comprimeren"
        },
        {
          en: "Filtering training data",
          es: "Filtrar datos de entrenamiento",
          de: "Trainingsdaten filtern",
          nl: "Trainingsdata filteren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Knowledge distillation trains a smaller 'student' model to mimic a larger 'teacher' model, creating efficient models that retain much of the teacher's performance.",
        es: "La destilación de conocimiento entrena un modelo 'estudiante' más pequeño para imitar un modelo 'maestro' más grande.",
        de: "Wissensdestillation trainiert ein kleineres 'Schüler'-Modell, um ein größeres 'Lehrer'-Modell nachzuahmen.",
        nl: "Knowledge distillation traint een kleiner 'student' model om een groter 'teacher' model na te bootsen."
      }
    }
  ]
};