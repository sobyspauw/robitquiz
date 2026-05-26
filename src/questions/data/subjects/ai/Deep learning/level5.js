// Deep learning - Level 5
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "What is cross-entropy loss used for?",
                "es": "¿Para qué se usa la pérdida de entropía cruzada?",
                "de": "Wofür wird der Kreuzentropie-Verlust verwendet?",
                "nl": "Waarvoor wordt cross-entropieverlies gebruikt?"
            },
            "options": [
                {
                    "en": "Classification problems",
                    "es": "Problemas de clasificación",
                    "de": "Klassifikationsprobleme",
                    "nl": "Classificatieproblemen"
                },
                {
                    "en": "Regression problems",
                    "es": "Problemas de regresión",
                    "de": "Regressionsprobleme",
                    "nl": "Regressieproblemen"
                },
                {
                    "en": "Clustering tasks",
                    "es": "Tareas de agrupamiento",
                    "de": "Clustering-Aufgaben",
                    "nl": "Clusteringtaken"
                },
                {
                    "en": "Dimensionality reduction",
                    "es": "Reducción de dimensionalidad",
                    "de": "Dimensionsreduktion",
                    "nl": "Dimensiereductie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Cross-entropy loss is primarily used for classification problems to measure prediction error.",
                "es": "La pérdida de entropía cruzada se usa principalmente en clasificación para medir el error de predicción.",
                "de": "Der Kreuzentropie-Verlust wird hauptsächlich bei Klassifikationsproblemen verwendet.",
                "nl": "Cross-entropieverlies wordt voornamelijk gebruikt bij classificatieproblemen."
            }
        },
        {
            "question": {
                "en": "What does MSE stand for in deep learning?",
                "es": "¿Qué significa MSE en aprendizaje profundo?",
                "de": "Wofür steht MSE im Deep Learning?",
                "nl": "Waar staat MSE voor in deep learning?"
            },
            "options": [
                {
                    "en": "Mean Squared Error",
                    "es": "Error cuadrático medio",
                    "de": "Mittlerer quadratischer Fehler",
                    "nl": "Gemiddelde kwadratische fout"
                },
                {
                    "en": "Maximum Standard Error",
                    "es": "Error estándar máximo",
                    "de": "Maximaler Standardfehler",
                    "nl": "Maximale standaardfout"
                },
                {
                    "en": "Minimum System Error",
                    "es": "Error mínimo del sistema",
                    "de": "Minimaler Systemfehler",
                    "nl": "Minimale systeemfout"
                },
                {
                    "en": "Multiple Selection Error",
                    "es": "Error de selección múltiple",
                    "de": "Mehrfachauswahlfehler",
                    "nl": "Meervoudige selectiefout"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "MSE (Mean Squared Error) is commonly used as a loss function for regression problems.",
                "es": "MSE (Error cuadrático medio) se usa comúnmente como función de pérdida en regresión.",
                "de": "MSE (Mittlerer quadratischer Fehler) wird häufig als Verlustfunktion bei Regression verwendet.",
                "nl": "MSE (Gemiddelde kwadratische fout) wordt vaak gebruikt als verliesfunctie bij regressie."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a learning rate schedule?",
                "es": "¿Cuál es el propósito de un programa de tasa de aprendizaje?",
                "de": "Was ist der Zweck eines Lernratenplans?",
                "nl": "Wat is het doel van een leersnelheidschema?"
            },
            "options": [
                {
                    "en": "Adjust learning rate during training",
                    "es": "Ajustar la tasa de aprendizaje durante el entrenamiento",
                    "de": "Lernrate während des Trainings anpassen",
                    "nl": "Leersnelheid aanpassen tijdens het trainen"
                },
                {
                    "en": "Fix the batch size",
                    "es": "Fijar el tamaño del lote",
                    "de": "Die Batchgröße festlegen",
                    "nl": "De batchgrootte vastleggen"
                },
                {
                    "en": "Schedule training hours",
                    "es": "Programar horas de entrenamiento",
                    "de": "Trainingszeiten planen",
                    "nl": "Trainingsuren plannen"
                },
                {
                    "en": "Select the optimizer type",
                    "es": "Seleccionar el tipo de optimizador",
                    "de": "Den Optimierer-Typ auswählen",
                    "nl": "Het type optimizer selecteren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A learning rate schedule adjusts the learning rate during training to improve convergence.",
                "es": "Un programa de tasa de aprendizaje ajusta la tasa durante el entrenamiento para mejorar la convergencia.",
                "de": "Ein Lernratenplan passt die Lernrate während des Trainings an, um die Konvergenz zu verbessern.",
                "nl": "Een leersnelheidschema past de leersnelheid aan tijdens training om convergentie te verbeteren."
            }
        },
        {
            "question": {
                "en": "What is weight initialization in neural networks?",
                "es": "¿Qué es la inicialización de pesos en redes neuronales?",
                "de": "Was ist Gewichtsinitialisierung in neuronalen Netzen?",
                "nl": "Wat is gewichtsinitialisatie in neurale netwerken?"
            },
            "options": [
                {
                    "en": "Setting starting values for network weights",
                    "es": "Establecer valores iniciales para los pesos",
                    "de": "Anfangswerte für Netzwerkgewichte festlegen",
                    "nl": "Beginwaarden instellen voor netwerkgewichten"
                },
                {
                    "en": "Removing unused weights",
                    "es": "Eliminar pesos no utilizados",
                    "de": "Unbenutzte Gewichte entfernen",
                    "nl": "Ongebruikte gewichten verwijderen"
                },
                {
                    "en": "Freezing all weights",
                    "es": "Congelar todos los pesos",
                    "de": "Alle Gewichte einfrieren",
                    "nl": "Alle gewichten bevriezen"
                },
                {
                    "en": "Doubling the weight values",
                    "es": "Duplicar los valores de los pesos",
                    "de": "Die Gewichtswerte verdoppeln",
                    "nl": "De gewichtswaarden verdubbelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Weight initialization sets starting values for network parameters before training begins.",
                "es": "La inicialización de pesos establece valores iniciales para los parámetros antes del entrenamiento.",
                "de": "Die Gewichtsinitialisierung legt Anfangswerte für Netzwerkparameter vor dem Training fest.",
                "nl": "Gewichtsinitialisatie stelt beginwaarden in voor netwerkparameters voor het trainen."
            }
        },
        {
            "question": {
                "en": "What is Xavier initialization?",
                "es": "¿Qué es la inicialización Xavier?",
                "de": "Was ist die Xavier-Initialisierung?",
                "nl": "Wat is Xavier-initialisatie?"
            },
            "options": [
                {
                    "en": "Weight init based on layer input/output size",
                    "es": "Inicialización basada en tamaño de entrada/salida",
                    "de": "Gewichtsinitialisierung basierend auf Ein-/Ausgabegröße",
                    "nl": "Gewichtsinitialisatie op basis van in-/uitvoergrootte"
                },
                {
                    "en": "Random weight assignment",
                    "es": "Asignación aleatoria de pesos",
                    "de": "Zufällige Gewichtszuweisung",
                    "nl": "Willekeurige gewichtstoewijzing"
                },
                {
                    "en": "Setting all weights to one",
                    "es": "Establecer todos los pesos en uno",
                    "de": "Alle Gewichte auf eins setzen",
                    "nl": "Alle gewichten op één zetten"
                },
                {
                    "en": "Using pre-trained weights only",
                    "es": "Usar solo pesos preentrenados",
                    "de": "Nur vortrainierte Gewichte verwenden",
                    "nl": "Alleen voorgetrainde gewichten gebruiken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Xavier initialization scales weights based on the number of input and output neurons per layer.",
                "es": "La inicialización Xavier escala los pesos según el número de neuronas de entrada y salida.",
                "de": "Die Xavier-Initialisierung skaliert Gewichte basierend auf der Anzahl der Ein- und Ausgabeneuronen.",
                "nl": "Xavier-initialisatie schaalt gewichten op basis van het aantal invoer- en uitvoerneuronen."
            }
        },
        {
            "question": {
                "en": "What is the vanishing gradient problem?",
                "es": "¿Qué es el problema del gradiente que desaparece?",
                "de": "Was ist das Problem verschwindender Gradienten?",
                "nl": "Wat is het probleem van verdwijnende gradiënten?"
            },
            "options": [
                {
                    "en": "Gradients become extremely small in deep layers",
                    "es": "Los gradientes se vuelven muy pequeños en capas profundas",
                    "de": "Gradienten werden in tiefen Schichten extrem klein",
                    "nl": "Gradiënten worden extreem klein in diepe lagen"
                },
                {
                    "en": "Weights grow without limit",
                    "es": "Los pesos crecen sin límite",
                    "de": "Gewichte wachsen unbegrenzt",
                    "nl": "Gewichten groeien onbeperkt"
                },
                {
                    "en": "Training data disappears",
                    "es": "Los datos de entrenamiento desaparecen",
                    "de": "Trainingsdaten verschwinden",
                    "nl": "Trainingsdata verdwijnt"
                },
                {
                    "en": "The model loses its architecture",
                    "es": "El modelo pierde su arquitectura",
                    "de": "Das Modell verliert seine Architektur",
                    "nl": "Het model verliest zijn architectuur"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The vanishing gradient problem occurs when gradients become too small for effective learning in deep networks.",
                "es": "El problema del gradiente que desaparece ocurre cuando los gradientes son demasiado pequeños.",
                "de": "Das Problem verschwindender Gradienten tritt auf, wenn Gradienten zu klein für effektives Lernen werden.",
                "nl": "Het probleem van verdwijnende gradiënten treedt op wanneer gradiënten te klein worden om effectief te leren."
            }
        },
        {
            "question": {
                "en": "What is the exploding gradient problem?",
                "es": "¿Qué es el problema del gradiente explosivo?",
                "de": "Was ist das Problem explodierender Gradienten?",
                "nl": "Wat is het probleem van exploderende gradiënten?"
            },
            "options": [
                {
                    "en": "Gradients grow extremely large during training",
                    "es": "Los gradientes crecen extremadamente durante el entrenamiento",
                    "de": "Gradienten werden beim Training extrem groß",
                    "nl": "Gradiënten worden extreem groot tijdens training"
                },
                {
                    "en": "The model size increases",
                    "es": "El tamaño del modelo aumenta",
                    "de": "Die Modellgröße nimmt zu",
                    "nl": "De modelgrootte neemt toe"
                },
                {
                    "en": "Training data grows too fast",
                    "es": "Los datos crecen demasiado rápido",
                    "de": "Trainingsdaten wachsen zu schnell",
                    "nl": "Trainingsdata groeit te snel"
                },
                {
                    "en": "Memory usage doubles",
                    "es": "El uso de memoria se duplica",
                    "de": "Der Speicherverbrauch verdoppelt sich",
                    "nl": "Het geheugengebruik verdubbelt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The exploding gradient problem causes gradients to grow uncontrollably, leading to unstable training.",
                "es": "El problema del gradiente explosivo causa que los gradientes crezcan de forma incontrolable.",
                "de": "Das Problem explodierender Gradienten führt zu unkontrolliertem Gradientenwachstum.",
                "nl": "Het probleem van exploderende gradiënten zorgt voor ongecontroleerde groei van gradiënten."
            }
        },
        {
            "question": {
                "en": "What is gradient clipping used for?",
                "es": "¿Para qué se usa el recorte de gradientes?",
                "de": "Wofür wird Gradient Clipping verwendet?",
                "nl": "Waarvoor wordt gradiëntafkapping gebruikt?"
            },
            "options": [
                {
                    "en": "Preventing exploding gradients",
                    "es": "Prevenir gradientes explosivos",
                    "de": "Explodierende Gradienten verhindern",
                    "nl": "Exploderende gradiënten voorkomen"
                },
                {
                    "en": "Increasing model accuracy",
                    "es": "Aumentar la precisión del modelo",
                    "de": "Die Modellgenauigkeit erhöhen",
                    "nl": "De modelnauwkeurigheid verhogen"
                },
                {
                    "en": "Reducing training data",
                    "es": "Reducir datos de entrenamiento",
                    "de": "Trainingsdaten reduzieren",
                    "nl": "Trainingsdata verminderen"
                },
                {
                    "en": "Compressing the model",
                    "es": "Comprimir el modelo",
                    "de": "Das Modell komprimieren",
                    "nl": "Het model comprimeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Gradient clipping limits gradient values to a maximum threshold to prevent exploding gradients.",
                "es": "El recorte de gradientes limita los valores a un umbral máximo para prevenir explosiones.",
                "de": "Gradient Clipping begrenzt Gradientenwerte auf einen Schwellenwert gegen Explosionen.",
                "nl": "Gradiëntafkapping beperkt gradiëntwaarden tot een maximale drempel."
            }
        },
        {
            "question": {
                "en": "What is a residual connection in deep learning?",
                "es": "¿Qué es una conexión residual en aprendizaje profundo?",
                "de": "Was ist eine Residualverbindung im Deep Learning?",
                "nl": "Wat is een residuele verbinding in deep learning?"
            },
            "options": [
                {
                    "en": "A shortcut that skips one or more layers",
                    "es": "Un atajo que salta una o más capas",
                    "de": "Eine Abkürzung, die Schichten überspringt",
                    "nl": "Een snelkoppeling die lagen overslaat"
                },
                {
                    "en": "A connection to external data",
                    "es": "Una conexión a datos externos",
                    "de": "Eine Verbindung zu externen Daten",
                    "nl": "Een verbinding met externe data"
                },
                {
                    "en": "A backup of the model weights",
                    "es": "Una copia de seguridad de los pesos",
                    "de": "Eine Sicherung der Modellgewichte",
                    "nl": "Een back-up van de modelgewichten"
                },
                {
                    "en": "A link between two separate models",
                    "es": "Un enlace entre dos modelos separados",
                    "de": "Eine Verbindung zwischen zwei Modellen",
                    "nl": "Een link tussen twee aparte modellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Residual connections add shortcuts that skip layers, helping gradients flow through deep networks.",
                "es": "Las conexiones residuales añaden atajos que saltan capas, ayudando al flujo de gradientes.",
                "de": "Residualverbindungen fügen Abkürzungen hinzu, die den Gradientenfluss in tiefen Netzen verbessern.",
                "nl": "Residuele verbindingen voegen snelkoppelingen toe die het gradiëntverloop in diepe netwerken helpen."
            }
        },
        {
            "question": {
                "en": "What is the softmax function used for?",
                "es": "¿Para qué se usa la función softmax?",
                "de": "Wofür wird die Softmax-Funktion verwendet?",
                "nl": "Waarvoor wordt de softmax-functie gebruikt?"
            },
            "options": [
                {
                    "en": "Converting outputs to probabilities",
                    "es": "Convertir salidas en probabilidades",
                    "de": "Ausgaben in Wahrscheinlichkeiten umwandeln",
                    "nl": "Uitvoer omzetten naar waarschijnlijkheden"
                },
                {
                    "en": "Normalizing input data",
                    "es": "Normalizar datos de entrada",
                    "de": "Eingabedaten normalisieren",
                    "nl": "Invoerdata normaliseren"
                },
                {
                    "en": "Reducing model complexity",
                    "es": "Reducir la complejidad del modelo",
                    "de": "Die Modellkomplexität reduzieren",
                    "nl": "De modelcomplexiteit verminderen"
                },
                {
                    "en": "Increasing training speed",
                    "es": "Aumentar la velocidad de entrenamiento",
                    "de": "Die Trainingsgeschwindigkeit erhöhen",
                    "nl": "De trainingssnelheid verhogen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Softmax converts raw output scores into probability distributions that sum to one.",
                "es": "Softmax convierte puntuaciones en distribuciones de probabilidad que suman uno.",
                "de": "Softmax wandelt Rohausgaben in Wahrscheinlichkeitsverteilungen um, die sich zu eins summieren.",
                "nl": "Softmax zet ruwe uitvoerscores om in waarschijnlijkheidsverdelingen die optellen tot één."
            }
        },
        {
            "question": {
                "en": "What is the purpose of L2 regularization?",
                "es": "¿Cuál es el propósito de la regularización L2?",
                "de": "Was ist der Zweck der L2-Regularisierung?",
                "nl": "Wat is het doel van L2-regularisatie?"
            },
            "options": [
                {
                    "en": "Penalizing large weight values",
                    "es": "Penalizar valores de pesos grandes",
                    "de": "Große Gewichtswerte bestrafen",
                    "nl": "Grote gewichtswaarden bestraffen"
                },
                {
                    "en": "Speeding up training",
                    "es": "Acelerar el entrenamiento",
                    "de": "Das Training beschleunigen",
                    "nl": "Het trainen versnellen"
                },
                {
                    "en": "Adding more layers",
                    "es": "Agregar más capas",
                    "de": "Mehr Schichten hinzufügen",
                    "nl": "Meer lagen toevoegen"
                },
                {
                    "en": "Increasing model capacity",
                    "es": "Aumentar la capacidad del modelo",
                    "de": "Die Modellkapazität erhöhen",
                    "nl": "De modelcapaciteit vergroten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "L2 regularization adds a penalty for large weights to prevent overfitting.",
                "es": "La regularización L2 añade una penalización por pesos grandes para prevenir sobreajuste.",
                "de": "L2-Regularisierung bestraft große Gewichte, um Überanpassung zu verhindern.",
                "nl": "L2-regularisatie bestraft grote gewichten om overfitting te voorkomen."
            }
        },
        {
            "question": {
                "en": "What is L1 regularization also known as?",
                "es": "¿Cómo se conoce también la regularización L1?",
                "de": "Wie wird L1-Regularisierung auch genannt?",
                "nl": "Hoe wordt L1-regularisatie ook wel genoemd?"
            },
            "options": [
                {
                    "en": "Lasso regularization",
                    "es": "Regularización Lasso",
                    "de": "Lasso-Regularisierung",
                    "nl": "Lasso-regularisatie"
                },
                {
                    "en": "Ridge regularization",
                    "es": "Regularización Ridge",
                    "de": "Ridge-Regularisierung",
                    "nl": "Ridge-regularisatie"
                },
                {
                    "en": "Elastic regularization",
                    "es": "Regularización elástica",
                    "de": "Elastische Regularisierung",
                    "nl": "Elastische regularisatie"
                },
                {
                    "en": "Dropout regularization",
                    "es": "Regularización Dropout",
                    "de": "Dropout-Regularisierung",
                    "nl": "Dropout-regularisatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "L1 regularization is also called Lasso, and it encourages sparsity by pushing weights to zero.",
                "es": "La regularización L1 también se llama Lasso y fomenta la escasez llevando pesos a cero.",
                "de": "L1-Regularisierung wird auch Lasso genannt und fördert Sparsity durch Nullsetzen von Gewichten.",
                "nl": "L1-regularisatie wordt ook Lasso genoemd en bevordert schaarsheid door gewichten naar nul te duwen."
            }
        },
        {
            "question": {
                "en": "What does data augmentation do in deep learning?",
                "es": "¿Qué hace la aumentación de datos en aprendizaje profundo?",
                "de": "Was bewirkt Datenaugmentation im Deep Learning?",
                "nl": "Wat doet data-augmentatie in deep learning?"
            },
            "options": [
                {
                    "en": "Creates modified copies of training data",
                    "es": "Crea copias modificadas de datos de entrenamiento",
                    "de": "Erstellt modifizierte Kopien der Trainingsdaten",
                    "nl": "Maakt gewijzigde kopieën van trainingsdata"
                },
                {
                    "en": "Deletes duplicate samples",
                    "es": "Elimina muestras duplicadas",
                    "de": "Löscht doppelte Datensätze",
                    "nl": "Verwijdert dubbele samples"
                },
                {
                    "en": "Compresses the dataset",
                    "es": "Comprime el conjunto de datos",
                    "de": "Komprimiert den Datensatz",
                    "nl": "Comprimeert de dataset"
                },
                {
                    "en": "Encrypts sensitive data",
                    "es": "Cifra datos sensibles",
                    "de": "Verschlüsselt sensible Daten",
                    "nl": "Versleutelt gevoelige data"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Data augmentation artificially enlarges training sets by creating modified versions of existing data.",
                "es": "La aumentación de datos amplía artificialmente los conjuntos creando versiones modificadas.",
                "de": "Datenaugmentation vergrößert Trainingssets künstlich durch modifizierte Versionen bestehender Daten.",
                "nl": "Data-augmentatie vergroot trainingssets kunstmatig door gewijzigde versies van bestaande data te maken."
            }
        },
        {
            "question": {
                "en": "What is early stopping in neural network training?",
                "es": "¿Qué es la parada temprana en el entrenamiento?",
                "de": "Was ist Early Stopping beim Training neuronaler Netze?",
                "nl": "Wat is vroegtijdig stoppen bij het trainen?"
            },
            "options": [
                {
                    "en": "Stopping training when validation loss increases",
                    "es": "Detener el entrenamiento cuando la pérdida de validación sube",
                    "de": "Training stoppen wenn der Validierungsverlust steigt",
                    "nl": "Training stoppen wanneer het validatieverlies stijgt"
                },
                {
                    "en": "Training for only one epoch",
                    "es": "Entrenar por solo una época",
                    "de": "Nur eine Epoche trainieren",
                    "nl": "Slechts één epoch trainen"
                },
                {
                    "en": "Using fewer data samples",
                    "es": "Usar menos muestras de datos",
                    "de": "Weniger Datenstichproben verwenden",
                    "nl": "Minder datasamples gebruiken"
                },
                {
                    "en": "Reducing the number of layers",
                    "es": "Reducir el número de capas",
                    "de": "Die Anzahl der Schichten reduzieren",
                    "nl": "Het aantal lagen verminderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Early stopping halts training when the validation loss starts increasing to prevent overfitting.",
                "es": "La parada temprana detiene el entrenamiento cuando la pérdida de validación empieza a subir.",
                "de": "Early Stopping stoppt das Training, wenn der Validierungsverlust steigt, um Überanpassung zu vermeiden.",
                "nl": "Vroegtijdig stoppen stopt het trainen wanneer het validatieverlies begint te stijgen."
            }
        },
        {
            "question": {
                "en": "What is a hyperparameter in deep learning?",
                "es": "¿Qué es un hiperparámetro en aprendizaje profundo?",
                "de": "Was ist ein Hyperparameter im Deep Learning?",
                "nl": "Wat is een hyperparameter in deep learning?"
            },
            "options": [
                {
                    "en": "A parameter set before training begins",
                    "es": "Un parámetro definido antes del entrenamiento",
                    "de": "Ein Parameter, der vor dem Training festgelegt wird",
                    "nl": "Een parameter die voor het trainen wordt ingesteld"
                },
                {
                    "en": "A weight learned during training",
                    "es": "Un peso aprendido durante el entrenamiento",
                    "de": "Ein während des Trainings gelerntes Gewicht",
                    "nl": "Een gewicht dat tijdens training wordt geleerd"
                },
                {
                    "en": "A type of activation function",
                    "es": "Un tipo de función de activación",
                    "de": "Eine Art Aktivierungsfunktion",
                    "nl": "Een type activeringsfunctie"
                },
                {
                    "en": "A measurement of model accuracy",
                    "es": "Una medida de precisión del modelo",
                    "de": "Ein Maß für die Modellgenauigkeit",
                    "nl": "Een maat voor modelnauwkeurigheid"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Hyperparameters are configuration values set before training, like learning rate and batch size.",
                "es": "Los hiperparámetros son valores configurados antes del entrenamiento, como la tasa de aprendizaje.",
                "de": "Hyperparameter sind Konfigurationswerte vor dem Training, wie Lernrate und Batchgröße.",
                "nl": "Hyperparameters zijn configuratiewaarden die voor het trainen worden ingesteld, zoals leersnelheid."
            }
        },
        {
            "question": {
                "en": "What is transfer learning?",
                "es": "¿Qué es el aprendizaje por transferencia?",
                "de": "Was ist Transfer Learning?",
                "nl": "Wat is transfer learning?"
            },
            "options": [
                {
                    "en": "Using a pre-trained model for a new task",
                    "es": "Usar un modelo preentrenado para una nueva tarea",
                    "de": "Ein vortrainiertes Modell für neue Aufgaben nutzen",
                    "nl": "Een voorgetraind model gebruiken voor een nieuwe taak"
                },
                {
                    "en": "Moving data between servers",
                    "es": "Mover datos entre servidores",
                    "de": "Daten zwischen Servern verschieben",
                    "nl": "Data tussen servers verplaatsen"
                },
                {
                    "en": "Converting model formats",
                    "es": "Convertir formatos de modelo",
                    "de": "Modellformate konvertieren",
                    "nl": "Modelformaten converteren"
                },
                {
                    "en": "Copying weights between layers",
                    "es": "Copiar pesos entre capas",
                    "de": "Gewichte zwischen Schichten kopieren",
                    "nl": "Gewichten tussen lagen kopiëren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Transfer learning reuses knowledge from a model trained on one task for a different but related task.",
                "es": "El aprendizaje por transferencia reutiliza conocimiento de un modelo entrenado para otra tarea.",
                "de": "Transfer Learning nutzt Wissen eines trainierten Modells für eine andere, verwandte Aufgabe.",
                "nl": "Transfer learning hergebruikt kennis van een getraind model voor een andere, gerelateerde taak."
            }
        },
        {
            "question": {
                "en": "What is fine-tuning in the context of deep learning?",
                "es": "¿Qué es el ajuste fino en el contexto del aprendizaje profundo?",
                "de": "Was ist Feinabstimmung im Kontext von Deep Learning?",
                "nl": "Wat is fijnafstemming in de context van deep learning?"
            },
            "options": [
                {
                    "en": "Retraining parts of a pre-trained model",
                    "es": "Reentrenar partes de un modelo preentrenado",
                    "de": "Teile eines vortrainierten Modells nachtrainieren",
                    "nl": "Delen van een voorgetraind model hertrainen"
                },
                {
                    "en": "Building a model from scratch",
                    "es": "Construir un modelo desde cero",
                    "de": "Ein Modell von Grund auf erstellen",
                    "nl": "Een model vanaf nul bouwen"
                },
                {
                    "en": "Deleting unnecessary layers",
                    "es": "Eliminar capas innecesarias",
                    "de": "Unnötige Schichten löschen",
                    "nl": "Onnodige lagen verwijderen"
                },
                {
                    "en": "Adjusting hardware settings",
                    "es": "Ajustar configuraciones de hardware",
                    "de": "Hardware-Einstellungen anpassen",
                    "nl": "Hardware-instellingen aanpassen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Fine-tuning adapts a pre-trained model to a specific task by retraining some of its layers.",
                "es": "El ajuste fino adapta un modelo preentrenado reentrenando algunas de sus capas.",
                "de": "Feinabstimmung passt ein vortrainiertes Modell an, indem einige Schichten nachtrainiert werden.",
                "nl": "Fijnafstemming past een voorgetraind model aan door enkele lagen opnieuw te trainen."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a validation set?",
                "es": "¿Cuál es el propósito de un conjunto de validación?",
                "de": "Was ist der Zweck eines Validierungssets?",
                "nl": "Wat is het doel van een validatieset?"
            },
            "options": [
                {
                    "en": "Tuning hyperparameters during training",
                    "es": "Ajustar hiperparámetros durante el entrenamiento",
                    "de": "Hyperparameter während des Trainings abstimmen",
                    "nl": "Hyperparameters afstemmen tijdens training"
                },
                {
                    "en": "Training the neural network",
                    "es": "Entrenar la red neuronal",
                    "de": "Das neuronale Netz trainieren",
                    "nl": "Het neurale netwerk trainen"
                },
                {
                    "en": "Final model evaluation",
                    "es": "Evaluación final del modelo",
                    "de": "Endgültige Modellevaluierung",
                    "nl": "Finale modelevaluatie"
                },
                {
                    "en": "Storing model checkpoints",
                    "es": "Almacenar puntos de control del modelo",
                    "de": "Modell-Checkpoints speichern",
                    "nl": "Model-checkpoints opslaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A validation set is used to tune hyperparameters and monitor model performance during training.",
                "es": "Un conjunto de validación se usa para ajustar hiperparámetros y monitorear el rendimiento.",
                "de": "Ein Validierungsset dient zur Abstimmung von Hyperparametern und Überwachung der Modellleistung.",
                "nl": "Een validatieset wordt gebruikt om hyperparameters af te stemmen en prestaties te monitoren."
            }
        },
        {
            "question": {
                "en": "What does the term 'epoch' mean in training?",
                "es": "¿Qué significa el término 'época' en el entrenamiento?",
                "de": "Was bedeutet der Begriff 'Epoche' beim Training?",
                "nl": "Wat betekent de term 'epoch' bij het trainen?"
            },
            "options": [
                {
                    "en": "One complete pass through the training data",
                    "es": "Una pasada completa por los datos de entrenamiento",
                    "de": "Ein vollständiger Durchlauf der Trainingsdaten",
                    "nl": "Eén volledige doorgang door de trainingsdata"
                },
                {
                    "en": "A single weight update",
                    "es": "Una sola actualización de peso",
                    "de": "Eine einzelne Gewichtsaktualisierung",
                    "nl": "Eén enkele gewichtsupdate"
                },
                {
                    "en": "One hour of training time",
                    "es": "Una hora de tiempo de entrenamiento",
                    "de": "Eine Stunde Trainingszeit",
                    "nl": "Eén uur trainingstijd"
                },
                {
                    "en": "A version of the model",
                    "es": "Una versión del modelo",
                    "de": "Eine Version des Modells",
                    "nl": "Een versie van het model"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An epoch is one complete pass through the entire training dataset during the learning process.",
                "es": "Una época es una pasada completa por todo el conjunto de datos de entrenamiento.",
                "de": "Eine Epoche ist ein vollständiger Durchlauf durch den gesamten Trainingsdatensatz.",
                "nl": "Een epoch is één volledige doorgang door de gehele trainingsdataset."
            }
        },
        {
            "question": {
                "en": "What is mini-batch gradient descent?",
                "es": "¿Qué es el descenso de gradiente por mini-lotes?",
                "de": "Was ist Mini-Batch-Gradientenabstieg?",
                "nl": "Wat is mini-batch gradiëntafdaling?"
            },
            "options": [
                {
                    "en": "Updating weights using small data subsets",
                    "es": "Actualizar pesos usando subconjuntos pequeños",
                    "de": "Gewichte mit kleinen Datenuntermengen aktualisieren",
                    "nl": "Gewichten bijwerken met kleine datasubsets"
                },
                {
                    "en": "Training with one sample at a time",
                    "es": "Entrenar con una muestra a la vez",
                    "de": "Mit einer Stichprobe gleichzeitig trainieren",
                    "nl": "Trainen met één sample tegelijk"
                },
                {
                    "en": "Using the full dataset per update",
                    "es": "Usar el conjunto completo por actualización",
                    "de": "Den gesamten Datensatz pro Aktualisierung nutzen",
                    "nl": "De volledige dataset per update gebruiken"
                },
                {
                    "en": "Training without any gradient",
                    "es": "Entrenar sin ningún gradiente",
                    "de": "Ohne Gradienten trainieren",
                    "nl": "Trainen zonder enige gradiënt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Mini-batch gradient descent updates weights using small subsets of data for each iteration.",
                "es": "El descenso por mini-lotes actualiza pesos usando subconjuntos pequeños en cada iteración.",
                "de": "Mini-Batch-Gradientenabstieg aktualisiert Gewichte mit kleinen Datenuntermengen pro Iteration.",
                "nl": "Mini-batch gradiëntafdaling werkt gewichten bij met kleine datasubsets per iteratie."
            }
        },
        {
            "question": {
                "en": "What is the Adam optimizer?",
                "es": "¿Qué es el optimizador Adam?",
                "de": "Was ist der Adam-Optimierer?",
                "nl": "Wat is de Adam-optimizer?"
            },
            "options": [
                {
                    "en": "Adaptive learning rate optimization algorithm",
                    "es": "Algoritmo de optimización con tasa adaptativa",
                    "de": "Adaptiver Lernraten-Optimierungsalgorithmus",
                    "nl": "Adaptief leersnelheid-optimalisatiealgoritme"
                },
                {
                    "en": "A type of neural network",
                    "es": "Un tipo de red neuronal",
                    "de": "Eine Art neuronales Netz",
                    "nl": "Een type neuraal netwerk"
                },
                {
                    "en": "A loss function",
                    "es": "Una función de pérdida",
                    "de": "Eine Verlustfunktion",
                    "nl": "Een verliesfunctie"
                },
                {
                    "en": "A data preprocessing tool",
                    "es": "Una herramienta de preprocesamiento",
                    "de": "Ein Datenvorverarbeitungswerkzeug",
                    "nl": "Een datavoorverwerkingstool"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Adam combines momentum and adaptive learning rates for efficient optimization of neural networks.",
                "es": "Adam combina impulso y tasas adaptativas para una optimización eficiente de redes neuronales.",
                "de": "Adam kombiniert Momentum und adaptive Lernraten für effiziente Optimierung neuronaler Netze.",
                "nl": "Adam combineert momentum en adaptieve leersnelheden voor efficiënte optimalisatie."
            }
        },
        {
            "question": {
                "en": "What is stochastic gradient descent (SGD)?",
                "es": "¿Qué es el descenso de gradiente estocástico (SGD)?",
                "de": "Was ist stochastischer Gradientenabstieg (SGD)?",
                "nl": "Wat is stochastische gradiëntafdaling (SGD)?"
            },
            "options": [
                {
                    "en": "Optimization using random single samples",
                    "es": "Optimización usando muestras individuales aleatorias",
                    "de": "Optimierung mit zufälligen Einzelstichproben",
                    "nl": "Optimalisatie met willekeurige enkele samples"
                },
                {
                    "en": "Training with the entire dataset each step",
                    "es": "Entrenamiento con todo el conjunto por paso",
                    "de": "Training mit dem gesamten Datensatz pro Schritt",
                    "nl": "Trainen met de hele dataset per stap"
                },
                {
                    "en": "A method to increase batch size",
                    "es": "Un método para aumentar el tamaño del lote",
                    "de": "Eine Methode zur Vergrößerung der Batchgröße",
                    "nl": "Een methode om de batchgrootte te vergroten"
                },
                {
                    "en": "A technique to freeze weights",
                    "es": "Una técnica para congelar pesos",
                    "de": "Eine Technik zum Einfrieren von Gewichten",
                    "nl": "Een techniek om gewichten te bevriezen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "SGD updates model parameters using the gradient from a single randomly selected training sample.",
                "es": "SGD actualiza parámetros usando el gradiente de una muestra de entrenamiento aleatoria.",
                "de": "SGD aktualisiert Modellparameter mit dem Gradienten einer zufällig ausgewählten Trainingsstichprobe.",
                "nl": "SGD werkt modelparameters bij met de gradiënt van een willekeurig geselecteerd trainingsample."
            }
        },
        {
            "question": {
                "en": "What is momentum in gradient descent?",
                "es": "¿Qué es el impulso en el descenso de gradiente?",
                "de": "Was ist Momentum beim Gradientenabstieg?",
                "nl": "Wat is momentum bij gradiëntafdaling?"
            },
            "options": [
                {
                    "en": "Accumulated gradient from previous steps",
                    "es": "Gradiente acumulado de pasos anteriores",
                    "de": "Akkumulierter Gradient aus vorherigen Schritten",
                    "nl": "Geaccumuleerde gradiënt van vorige stappen"
                },
                {
                    "en": "The speed of the hardware",
                    "es": "La velocidad del hardware",
                    "de": "Die Geschwindigkeit der Hardware",
                    "nl": "De snelheid van de hardware"
                },
                {
                    "en": "The size of the training data",
                    "es": "El tamaño de los datos de entrenamiento",
                    "de": "Die Größe der Trainingsdaten",
                    "nl": "De grootte van de trainingsdata"
                },
                {
                    "en": "The number of layers",
                    "es": "El número de capas",
                    "de": "Die Anzahl der Schichten",
                    "nl": "Het aantal lagen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Momentum accelerates gradient descent by accumulating a velocity vector from past gradients.",
                "es": "El impulso acelera el descenso de gradiente acumulando un vector de velocidad de gradientes pasados.",
                "de": "Momentum beschleunigt den Gradientenabstieg durch Akkumulation eines Geschwindigkeitsvektors.",
                "nl": "Momentum versnelt gradiëntafdaling door een snelheidsvector van eerdere gradiënten op te bouwen."
            }
        },
        {
            "question": {
                "en": "What is a loss function in deep learning?",
                "es": "¿Qué es una función de pérdida en aprendizaje profundo?",
                "de": "Was ist eine Verlustfunktion im Deep Learning?",
                "nl": "Wat is een verliesfunctie in deep learning?"
            },
            "options": [
                {
                    "en": "Measures the error between prediction and target",
                    "es": "Mide el error entre predicción y objetivo",
                    "de": "Misst den Fehler zwischen Vorhersage und Ziel",
                    "nl": "Meet de fout tussen voorspelling en doel"
                },
                {
                    "en": "Counts the number of parameters",
                    "es": "Cuenta el número de parámetros",
                    "de": "Zählt die Anzahl der Parameter",
                    "nl": "Telt het aantal parameters"
                },
                {
                    "en": "Determines model architecture",
                    "es": "Determina la arquitectura del modelo",
                    "de": "Bestimmt die Modellarchitektur",
                    "nl": "Bepaalt de modelarchitectuur"
                },
                {
                    "en": "Selects training data",
                    "es": "Selecciona datos de entrenamiento",
                    "de": "Wählt Trainingsdaten aus",
                    "nl": "Selecteert trainingsdata"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A loss function quantifies how far the model's predictions are from the actual target values.",
                "es": "Una función de pérdida cuantifica cuán lejos están las predicciones del modelo de los valores reales.",
                "de": "Eine Verlustfunktion misst, wie weit die Vorhersagen des Modells von den Zielwerten entfernt sind.",
                "nl": "Een verliesfunctie kwantificeert hoe ver de voorspellingen van het model afwijken van de doelwaarden."
            }
        },
        {
            "question": {
                "en": "What is a feature map in a convolutional network?",
                "es": "¿Qué es un mapa de características en una red convolucional?",
                "de": "Was ist eine Feature-Map in einem Faltungsnetz?",
                "nl": "Wat is een featuremap in een convolutienetwerk?"
            },
            "options": [
                {
                    "en": "Output of applying a filter to the input",
                    "es": "Salida de aplicar un filtro a la entrada",
                    "de": "Ausgabe der Anwendung eines Filters auf die Eingabe",
                    "nl": "Uitvoer van het toepassen van een filter op de invoer"
                },
                {
                    "en": "A geographic map used for location data",
                    "es": "Un mapa geográfico para datos de ubicación",
                    "de": "Eine geografische Karte für Standortdaten",
                    "nl": "Een geografische kaart voor locatiedata"
                },
                {
                    "en": "A diagram of the network architecture",
                    "es": "Un diagrama de la arquitectura de la red",
                    "de": "Ein Diagramm der Netzwerkarchitektur",
                    "nl": "Een diagram van de netwerkarchitectuur"
                },
                {
                    "en": "A list of all model features",
                    "es": "Una lista de todas las características del modelo",
                    "de": "Eine Liste aller Modelleigenschaften",
                    "nl": "Een lijst van alle modeleigenschappen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A feature map is the result of applying a convolutional filter to an input, detecting specific patterns.",
                "es": "Un mapa de características es el resultado de aplicar un filtro convolucional para detectar patrones.",
                "de": "Eine Feature-Map entsteht durch Anwendung eines Faltungsfilters zur Erkennung bestimmter Muster.",
                "nl": "Een featuremap is het resultaat van het toepassen van een convolutiefilter om patronen te detecteren."
            }
        },
        {
            "question": {
                "en": "What is the role of padding in convolutions?",
                "es": "¿Cuál es el papel del relleno en las convoluciones?",
                "de": "Welche Rolle spielt Padding bei Faltungen?",
                "nl": "Wat is de rol van padding bij convoluties?"
            },
            "options": [
                {
                    "en": "Preserving spatial dimensions of the output",
                    "es": "Preservar las dimensiones espaciales de la salida",
                    "de": "Räumliche Dimensionen der Ausgabe erhalten",
                    "nl": "Ruimtelijke dimensies van de uitvoer behouden"
                },
                {
                    "en": "Adding more training data",
                    "es": "Agregar más datos de entrenamiento",
                    "de": "Mehr Trainingsdaten hinzufügen",
                    "nl": "Meer trainingsdata toevoegen"
                },
                {
                    "en": "Increasing the learning rate",
                    "es": "Aumentar la tasa de aprendizaje",
                    "de": "Die Lernrate erhöhen",
                    "nl": "De leersnelheid verhogen"
                },
                {
                    "en": "Reducing the number of filters",
                    "es": "Reducir el número de filtros",
                    "de": "Die Anzahl der Filter reduzieren",
                    "nl": "Het aantal filters verminderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Padding adds extra pixels around the input to control the spatial size of the output feature maps.",
                "es": "El relleno añade píxeles extra alrededor de la entrada para controlar el tamaño de la salida.",
                "de": "Padding fügt zusätzliche Pixel um die Eingabe hinzu, um die Ausgabegröße zu steuern.",
                "nl": "Padding voegt extra pixels toe rond de invoer om de grootte van de uitvoer te regelen."
            }
        },
        {
            "question": {
                "en": "What is stride in a convolutional layer?",
                "es": "¿Qué es el paso en una capa convolucional?",
                "de": "Was ist der Stride in einer Faltungsschicht?",
                "nl": "Wat is de stride in een convolutielaag?"
            },
            "options": [
                {
                    "en": "The step size when sliding the filter",
                    "es": "El tamaño del paso al deslizar el filtro",
                    "de": "Die Schrittweite beim Verschieben des Filters",
                    "nl": "De stapgrootte bij het schuiven van het filter"
                },
                {
                    "en": "The number of filters used",
                    "es": "El número de filtros utilizados",
                    "de": "Die Anzahl der verwendeten Filter",
                    "nl": "Het aantal gebruikte filters"
                },
                {
                    "en": "The depth of the network",
                    "es": "La profundidad de la red",
                    "de": "Die Tiefe des Netzwerks",
                    "nl": "De diepte van het netwerk"
                },
                {
                    "en": "The size of the input image",
                    "es": "El tamaño de la imagen de entrada",
                    "de": "Die Größe des Eingabebildes",
                    "nl": "De grootte van het invoerbeeld"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Stride determines how many pixels the filter moves at each step across the input.",
                "es": "El paso determina cuántos píxeles se mueve el filtro en cada paso a través de la entrada.",
                "de": "Der Stride bestimmt, um wie viele Pixel der Filter bei jedem Schritt verschoben wird.",
                "nl": "De stride bepaalt hoeveel pixels het filter bij elke stap over de invoer verschuift."
            }
        },
        {
            "question": {
                "en": "What is global average pooling?",
                "es": "¿Qué es el pooling promedio global?",
                "de": "Was ist Global Average Pooling?",
                "nl": "Wat is globale gemiddelde pooling?"
            },
            "options": [
                {
                    "en": "Averaging each feature map to a single value",
                    "es": "Promediar cada mapa a un solo valor",
                    "de": "Jede Feature-Map zu einem einzigen Wert mitteln",
                    "nl": "Elke featuremap middelen tot één waarde"
                },
                {
                    "en": "Taking the maximum of all features",
                    "es": "Tomar el máximo de todas las características",
                    "de": "Das Maximum aller Features nehmen",
                    "nl": "Het maximum van alle features nemen"
                },
                {
                    "en": "Summing all pixel values",
                    "es": "Sumar todos los valores de píxeles",
                    "de": "Alle Pixelwerte summieren",
                    "nl": "Alle pixelwaarden optellen"
                },
                {
                    "en": "Selecting random feature values",
                    "es": "Seleccionar valores aleatorios",
                    "de": "Zufällige Feature-Werte auswählen",
                    "nl": "Willekeurige featurewaarden selecteren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Global average pooling reduces each feature map to a single number by computing the average.",
                "es": "El pooling promedio global reduce cada mapa de características a un número calculando el promedio.",
                "de": "Global Average Pooling reduziert jede Feature-Map durch Durchschnittsberechnung auf eine Zahl.",
                "nl": "Globale gemiddelde pooling reduceert elke featuremap tot één getal door het gemiddelde te berekenen."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a flatten layer?",
                "es": "¿Cuál es el propósito de una capa de aplanamiento?",
                "de": "Was ist der Zweck einer Flatten-Schicht?",
                "nl": "Wat is het doel van een flatten-laag?"
            },
            "options": [
                {
                    "en": "Convert multi-dimensional data to 1D",
                    "es": "Convertir datos multidimensionales a 1D",
                    "de": "Mehrdimensionale Daten in 1D umwandeln",
                    "nl": "Multidimensionale data omzetten naar 1D"
                },
                {
                    "en": "Reduce the number of parameters",
                    "es": "Reducir el número de parámetros",
                    "de": "Die Anzahl der Parameter reduzieren",
                    "nl": "Het aantal parameters verminderen"
                },
                {
                    "en": "Apply activation functions",
                    "es": "Aplicar funciones de activación",
                    "de": "Aktivierungsfunktionen anwenden",
                    "nl": "Activeringsfuncties toepassen"
                },
                {
                    "en": "Normalize the input values",
                    "es": "Normalizar los valores de entrada",
                    "de": "Die Eingabewerte normalisieren",
                    "nl": "De invoerwaarden normaliseren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A flatten layer reshapes multi-dimensional feature maps into a one-dimensional vector.",
                "es": "Una capa de aplanamiento convierte mapas de características multidimensionales en un vector 1D.",
                "de": "Eine Flatten-Schicht formt mehrdimensionale Feature-Maps in einen eindimensionalen Vektor um.",
                "nl": "Een flatten-laag hervormt multidimensionale featuremaps tot een eendimensionale vector."
            }
        },
        {
            "question": {
                "en": "What is the sigmoid activation function?",
                "es": "¿Qué es la función de activación sigmoide?",
                "de": "Was ist die Sigmoid-Aktivierungsfunktion?",
                "nl": "Wat is de sigmoid-activeringsfunctie?"
            },
            "options": [
                {
                    "en": "Maps inputs to values between 0 and 1",
                    "es": "Mapea entradas a valores entre 0 y 1",
                    "de": "Bildet Eingaben auf Werte zwischen 0 und 1 ab",
                    "nl": "Brengt invoer naar waarden tussen 0 en 1"
                },
                {
                    "en": "Outputs only negative values",
                    "es": "Produce solo valores negativos",
                    "de": "Gibt nur negative Werte aus",
                    "nl": "Geeft alleen negatieve waarden"
                },
                {
                    "en": "Returns the square of the input",
                    "es": "Devuelve el cuadrado de la entrada",
                    "de": "Gibt das Quadrat der Eingabe zurück",
                    "nl": "Geeft het kwadraat van de invoer terug"
                },
                {
                    "en": "Always outputs the value 1",
                    "es": "Siempre produce el valor 1",
                    "de": "Gibt immer den Wert 1 aus",
                    "nl": "Geeft altijd de waarde 1"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The sigmoid function squashes any input into a value between 0 and 1, useful for probabilities.",
                "es": "La función sigmoide comprime cualquier entrada a un valor entre 0 y 1, útil para probabilidades.",
                "de": "Die Sigmoid-Funktion komprimiert jede Eingabe auf einen Wert zwischen 0 und 1 für Wahrscheinlichkeiten.",
                "nl": "De sigmoid-functie comprimeert elke invoer tot een waarde tussen 0 en 1, nuttig voor kansen."
            }
        },
        {
            "question": {
                "en": "Why is ReLU preferred over sigmoid in hidden layers?",
                "es": "¿Por qué se prefiere ReLU sobre sigmoide en capas ocultas?",
                "de": "Warum wird ReLU in versteckten Schichten dem Sigmoid vorgezogen?",
                "nl": "Waarom heeft ReLU de voorkeur boven sigmoid in verborgen lagen?"
            },
            "options": [
                {
                    "en": "It reduces the vanishing gradient problem",
                    "es": "Reduce el problema del gradiente que desaparece",
                    "de": "Es reduziert das Problem verschwindender Gradienten",
                    "nl": "Het vermindert het probleem van verdwijnende gradiënten"
                },
                {
                    "en": "It produces smoother outputs",
                    "es": "Produce salidas más suaves",
                    "de": "Es erzeugt glattere Ausgaben",
                    "nl": "Het produceert vloeiendere uitvoer"
                },
                {
                    "en": "It always outputs positive values",
                    "es": "Siempre produce valores positivos",
                    "de": "Es gibt immer positive Werte aus",
                    "nl": "Het geeft altijd positieve waarden"
                },
                {
                    "en": "It uses less memory",
                    "es": "Usa menos memoria",
                    "de": "Es verwendet weniger Speicher",
                    "nl": "Het gebruikt minder geheugen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "ReLU mitigates the vanishing gradient problem because it does not saturate for positive inputs.",
                "es": "ReLU mitiga el problema del gradiente que desaparece porque no se satura para entradas positivas.",
                "de": "ReLU mildert das Problem verschwindender Gradienten, da es bei positiven Eingaben nicht sättigt.",
                "nl": "ReLU vermindert het verdwijnende gradiëntprobleem omdat het niet verzadigt bij positieve invoer."
            }
        },
        {
            "question": {
                "en": "What is the leaky ReLU activation function?",
                "es": "¿Qué es la función de activación Leaky ReLU?",
                "de": "Was ist die Leaky-ReLU-Aktivierungsfunktion?",
                "nl": "Wat is de leaky ReLU-activeringsfunctie?"
            },
            "options": [
                {
                    "en": "ReLU with a small slope for negative inputs",
                    "es": "ReLU con pendiente pequeña para entradas negativas",
                    "de": "ReLU mit kleiner Steigung für negative Eingaben",
                    "nl": "ReLU met een kleine helling voor negatieve invoer"
                },
                {
                    "en": "Standard ReLU without modifications",
                    "es": "ReLU estándar sin modificaciones",
                    "de": "Standard-ReLU ohne Änderungen",
                    "nl": "Standaard ReLU zonder aanpassingen"
                },
                {
                    "en": "A function that only outputs zeros",
                    "es": "Una función que solo produce ceros",
                    "de": "Eine Funktion, die nur Nullen ausgibt",
                    "nl": "Een functie die alleen nullen uitvoert"
                },
                {
                    "en": "Sigmoid with a different name",
                    "es": "Sigmoide con un nombre diferente",
                    "de": "Sigmoid mit anderem Namen",
                    "nl": "Sigmoid met een andere naam"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Leaky ReLU allows a small gradient for negative inputs instead of outputting zero, avoiding dead neurons.",
                "es": "Leaky ReLU permite un gradiente pequeño para entradas negativas en lugar de cero, evitando neuronas muertas.",
                "de": "Leaky ReLU erlaubt einen kleinen Gradienten für negative Eingaben, um tote Neuronen zu vermeiden.",
                "nl": "Leaky ReLU staat een kleine gradiënt toe voor negatieve invoer om dode neuronen te voorkomen."
            }
        },
        {
            "question": {
                "en": "What is the tanh activation function?",
                "es": "¿Qué es la función de activación tanh?",
                "de": "Was ist die Tanh-Aktivierungsfunktion?",
                "nl": "Wat is de tanh-activeringsfunctie?"
            },
            "options": [
                {
                    "en": "Maps inputs to values between -1 and 1",
                    "es": "Mapea entradas a valores entre -1 y 1",
                    "de": "Bildet Eingaben auf Werte zwischen -1 und 1 ab",
                    "nl": "Brengt invoer naar waarden tussen -1 en 1"
                },
                {
                    "en": "Outputs only positive values",
                    "es": "Produce solo valores positivos",
                    "de": "Gibt nur positive Werte aus",
                    "nl": "Geeft alleen positieve waarden"
                },
                {
                    "en": "Returns the absolute value of input",
                    "es": "Devuelve el valor absoluto de la entrada",
                    "de": "Gibt den Absolutwert der Eingabe zurück",
                    "nl": "Geeft de absolute waarde van de invoer terug"
                },
                {
                    "en": "Always outputs zero",
                    "es": "Siempre produce cero",
                    "de": "Gibt immer Null aus",
                    "nl": "Geeft altijd nul"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tanh maps inputs to a range of -1 to 1 and is zero-centered, unlike sigmoid.",
                "es": "Tanh mapea entradas a un rango de -1 a 1 y está centrado en cero, a diferencia del sigmoide.",
                "de": "Tanh bildet Eingaben auf den Bereich -1 bis 1 ab und ist nullzentriert, anders als Sigmoid.",
                "nl": "Tanh brengt invoer naar een bereik van -1 tot 1 en is nulgecentreerd, in tegenstelling tot sigmoid."
            }
        },
        {
            "question": {
                "en": "What is weight decay in neural network training?",
                "es": "¿Qué es la disminución de pesos en el entrenamiento?",
                "de": "Was ist Weight Decay beim Training neuronaler Netze?",
                "nl": "Wat is gewichtsverval bij het trainen van neurale netwerken?"
            },
            "options": [
                {
                    "en": "Reducing weights slightly each update step",
                    "es": "Reducir los pesos ligeramente en cada paso",
                    "de": "Gewichte bei jedem Schritt leicht reduzieren",
                    "nl": "Gewichten bij elke stap licht verminderen"
                },
                {
                    "en": "Removing entire layers from the model",
                    "es": "Eliminar capas enteras del modelo",
                    "de": "Ganze Schichten aus dem Modell entfernen",
                    "nl": "Hele lagen uit het model verwijderen"
                },
                {
                    "en": "Increasing weights after each epoch",
                    "es": "Aumentar los pesos después de cada época",
                    "de": "Gewichte nach jeder Epoche erhöhen",
                    "nl": "Gewichten na elke epoch verhogen"
                },
                {
                    "en": "Resetting weights to zero periodically",
                    "es": "Restablecer pesos a cero periódicamente",
                    "de": "Gewichte periodisch auf Null zurücksetzen",
                    "nl": "Gewichten periodiek op nul resetten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Weight decay reduces weight values by a small factor each step, acting as a form of regularization.",
                "es": "La disminución de pesos reduce los valores por un pequeño factor como forma de regularización.",
                "de": "Weight Decay reduziert Gewichtswerte um einen kleinen Faktor als Regularisierung.",
                "nl": "Gewichtsverval vermindert gewichtswaarden met een kleine factor als regularisatie."
            }
        },
        {
            "question": {
                "en": "What is a dense layer in a neural network?",
                "es": "¿Qué es una capa densa en una red neuronal?",
                "de": "Was ist eine Dense-Schicht in einem neuronalen Netz?",
                "nl": "Wat is een dense-laag in een neuraal netwerk?"
            },
            "options": [
                {
                    "en": "A fully connected layer",
                    "es": "Una capa completamente conectada",
                    "de": "Eine vollständig verbundene Schicht",
                    "nl": "Een volledig verbonden laag"
                },
                {
                    "en": "A layer with no connections",
                    "es": "Una capa sin conexiones",
                    "de": "Eine Schicht ohne Verbindungen",
                    "nl": "Een laag zonder verbindingen"
                },
                {
                    "en": "A convolutional layer",
                    "es": "Una capa convolucional",
                    "de": "Eine Faltungsschicht",
                    "nl": "Een convolutielaag"
                },
                {
                    "en": "A layer that stores data",
                    "es": "Una capa que almacena datos",
                    "de": "Eine Schicht, die Daten speichert",
                    "nl": "Een laag die data opslaat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A dense layer connects every neuron to all neurons in the previous layer, also called fully connected.",
                "es": "Una capa densa conecta cada neurona con todas las neuronas de la capa anterior.",
                "de": "Eine Dense-Schicht verbindet jedes Neuron mit allen Neuronen der vorherigen Schicht.",
                "nl": "Een dense-laag verbindt elk neuron met alle neuronen in de vorige laag."
            }
        },
        {
            "question": {
                "en": "What is the purpose of an embedding layer?",
                "es": "¿Cuál es el propósito de una capa de embeddings?",
                "de": "Was ist der Zweck einer Embedding-Schicht?",
                "nl": "Wat is het doel van een embedding-laag?"
            },
            "options": [
                {
                    "en": "Map discrete tokens to dense vectors",
                    "es": "Mapear tokens discretos a vectores densos",
                    "de": "Diskrete Token auf dichte Vektoren abbilden",
                    "nl": "Discrete tokens mappen naar dichte vectoren"
                },
                {
                    "en": "Compress image data",
                    "es": "Comprimir datos de imagen",
                    "de": "Bilddaten komprimieren",
                    "nl": "Beelddata comprimeren"
                },
                {
                    "en": "Filter out noise from data",
                    "es": "Filtrar ruido de los datos",
                    "de": "Rauschen aus Daten filtern",
                    "nl": "Ruis uit data filteren"
                },
                {
                    "en": "Store model checkpoints",
                    "es": "Almacenar puntos de control",
                    "de": "Modell-Checkpoints speichern",
                    "nl": "Model-checkpoints opslaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Embedding layers convert discrete items like words into continuous vector representations.",
                "es": "Las capas de embeddings convierten elementos discretos como palabras en representaciones vectoriales.",
                "de": "Embedding-Schichten wandeln diskrete Elemente wie Wörter in kontinuierliche Vektoren um.",
                "nl": "Embedding-lagen zetten discrete items zoals woorden om in continue vectorrepresentaties."
            }
        },
        {
            "question": {
                "en": "What is a skip connection?",
                "es": "¿Qué es una conexión de salto?",
                "de": "Was ist eine Skip-Verbindung?",
                "nl": "Wat is een skip-verbinding?"
            },
            "options": [
                {
                    "en": "A path that bypasses one or more layers",
                    "es": "Un camino que salta una o más capas",
                    "de": "Ein Pfad, der Schichten überspringt",
                    "nl": "Een pad dat een of meer lagen overslaat"
                },
                {
                    "en": "A deleted connection between neurons",
                    "es": "Una conexión eliminada entre neuronas",
                    "de": "Eine gelöschte Verbindung zwischen Neuronen",
                    "nl": "Een verwijderde verbinding tussen neuronen"
                },
                {
                    "en": "A shortcut in the training process",
                    "es": "Un atajo en el proceso de entrenamiento",
                    "de": "Eine Abkürzung im Trainingsprozess",
                    "nl": "Een snelkoppeling in het trainingsproces"
                },
                {
                    "en": "An optional layer in the network",
                    "es": "Una capa opcional en la red",
                    "de": "Eine optionale Schicht im Netzwerk",
                    "nl": "Een optionele laag in het netwerk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Skip connections allow data to bypass layers, helping deeper networks train more effectively.",
                "es": "Las conexiones de salto permiten que los datos salten capas para un entrenamiento más efectivo.",
                "de": "Skip-Verbindungen ermöglichen es Daten, Schichten zu überspringen, für effektiveres Training.",
                "nl": "Skip-verbindingen laten data lagen overslaan voor effectiever trainen van diepe netwerken."
            }
        },
        {
            "question": {
                "en": "What is batch normalization?",
                "es": "¿Qué es la normalización por lotes?",
                "de": "Was ist Batch-Normalisierung?",
                "nl": "Wat is batchnormalisatie?"
            },
            "options": [
                {
                    "en": "Normalizing layer inputs for each mini-batch",
                    "es": "Normalizar las entradas de capa para cada mini-lote",
                    "de": "Schichteingaben für jeden Mini-Batch normalisieren",
                    "nl": "Laaginvoer normaliseren voor elke mini-batch"
                },
                {
                    "en": "Sorting data into equal groups",
                    "es": "Ordenar datos en grupos iguales",
                    "de": "Daten in gleiche Gruppen sortieren",
                    "nl": "Data sorteren in gelijke groepen"
                },
                {
                    "en": "Combining multiple models",
                    "es": "Combinar múltiples modelos",
                    "de": "Mehrere Modelle kombinieren",
                    "nl": "Meerdere modellen combineren"
                },
                {
                    "en": "Removing outliers from data",
                    "es": "Eliminar valores atípicos de los datos",
                    "de": "Ausreißer aus Daten entfernen",
                    "nl": "Uitschieters uit data verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Batch normalization normalizes the inputs of each layer, stabilizing and speeding up training.",
                "es": "La normalización por lotes normaliza las entradas de cada capa, estabilizando el entrenamiento.",
                "de": "Batch-Normalisierung normalisiert die Eingaben jeder Schicht und stabilisiert das Training.",
                "nl": "Batchnormalisatie normaliseert de invoer van elke laag en stabiliseert het trainen."
            }
        },
        {
            "question": {
                "en": "What is a convolutional filter?",
                "es": "¿Qué es un filtro convolucional?",
                "de": "Was ist ein Faltungsfilter?",
                "nl": "Wat is een convolutiefilter?"
            },
            "options": [
                {
                    "en": "A small matrix that detects patterns in data",
                    "es": "Una pequeña matriz que detecta patrones en datos",
                    "de": "Eine kleine Matrix, die Muster in Daten erkennt",
                    "nl": "Een kleine matrix die patronen in data detecteert"
                },
                {
                    "en": "A tool that removes noise from images",
                    "es": "Una herramienta que elimina ruido de imágenes",
                    "de": "Ein Werkzeug, das Rauschen aus Bildern entfernt",
                    "nl": "Een tool dat ruis uit afbeeldingen verwijdert"
                },
                {
                    "en": "A function that selects training data",
                    "es": "Una función que selecciona datos de entrenamiento",
                    "de": "Eine Funktion, die Trainingsdaten auswählt",
                    "nl": "Een functie die trainingsdata selecteert"
                },
                {
                    "en": "A method to compress models",
                    "es": "Un método para comprimir modelos",
                    "de": "Eine Methode zum Komprimieren von Modellen",
                    "nl": "Een methode om modellen te comprimeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A convolutional filter is a small learnable matrix that slides over input data to detect features.",
                "es": "Un filtro convolucional es una pequeña matriz que se desliza sobre los datos para detectar características.",
                "de": "Ein Faltungsfilter ist eine kleine lernbare Matrix, die über die Eingabe gleitet, um Merkmale zu erkennen.",
                "nl": "Een convolutiefilter is een kleine leerbare matrix die over de invoer schuift om kenmerken te detecteren."
            }
        },
        {
            "question": {
                "en": "What is the role of an output layer?",
                "es": "¿Cuál es el papel de una capa de salida?",
                "de": "Welche Rolle spielt die Ausgabeschicht?",
                "nl": "Wat is de rol van een uitvoerlaag?"
            },
            "options": [
                {
                    "en": "Produce the final prediction of the model",
                    "es": "Producir la predicción final del modelo",
                    "de": "Die endgültige Vorhersage des Modells erzeugen",
                    "nl": "De uiteindelijke voorspelling van het model produceren"
                },
                {
                    "en": "Store the training data",
                    "es": "Almacenar los datos de entrenamiento",
                    "de": "Die Trainingsdaten speichern",
                    "nl": "De trainingsdata opslaan"
                },
                {
                    "en": "Calculate the learning rate",
                    "es": "Calcular la tasa de aprendizaje",
                    "de": "Die Lernrate berechnen",
                    "nl": "De leersnelheid berekenen"
                },
                {
                    "en": "Initialize all the weights",
                    "es": "Inicializar todos los pesos",
                    "de": "Alle Gewichte initialisieren",
                    "nl": "Alle gewichten initialiseren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The output layer produces the final result, such as class probabilities or regression values.",
                "es": "La capa de salida produce el resultado final, como probabilidades de clase o valores de regresión.",
                "de": "Die Ausgabeschicht erzeugt das Endergebnis, wie Klassenwahrscheinlichkeiten oder Regressionswerte.",
                "nl": "De uitvoerlaag produceert het eindresultaat, zoals klassekansen of regressiewaarden."
            }
        },
        {
            "question": {
                "en": "What is model overfitting?",
                "es": "¿Qué es el sobreajuste del modelo?",
                "de": "Was ist Überanpassung eines Modells?",
                "nl": "Wat is overfitting van een model?"
            },
            "options": [
                {
                    "en": "Model performs well on training but not test data",
                    "es": "El modelo funciona bien con datos de entrenamiento pero no con datos de prueba",
                    "de": "Modell funktioniert gut auf Trainings- aber nicht auf Testdaten",
                    "nl": "Model presteert goed op trainings- maar niet op testdata"
                },
                {
                    "en": "Model is too simple to learn patterns",
                    "es": "El modelo es demasiado simple para aprender patrones",
                    "de": "Das Modell ist zu einfach, um Muster zu lernen",
                    "nl": "Het model is te eenvoudig om patronen te leren"
                },
                {
                    "en": "Training takes too long",
                    "es": "El entrenamiento tarda demasiado",
                    "de": "Das Training dauert zu lange",
                    "nl": "Het trainen duurt te lang"
                },
                {
                    "en": "Model has too few parameters",
                    "es": "El modelo tiene muy pocos parámetros",
                    "de": "Das Modell hat zu wenige Parameter",
                    "nl": "Het model heeft te weinig parameters"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Overfitting occurs when a model memorizes training data but fails to generalize to new data.",
                "es": "El sobreajuste ocurre cuando un modelo memoriza datos de entrenamiento pero no generaliza.",
                "de": "Überanpassung tritt auf, wenn ein Modell Trainingsdaten auswendig lernt, aber nicht generalisiert.",
                "nl": "Overfitting treedt op wanneer een model trainingsdata uit het hoofd leert maar niet generaliseert."
            }
        },
        {
            "question": {
                "en": "What is model underfitting?",
                "es": "¿Qué es el subajuste del modelo?",
                "de": "Was ist Unteranpassung eines Modells?",
                "nl": "Wat is underfitting van een model?"
            },
            "options": [
                {
                    "en": "Model fails to learn patterns from training data",
                    "es": "El modelo no logra aprender patrones de los datos",
                    "de": "Modell lernt keine Muster aus den Trainingsdaten",
                    "nl": "Model slaagt er niet in patronen te leren"
                },
                {
                    "en": "Model has too many parameters",
                    "es": "El modelo tiene demasiados parámetros",
                    "de": "Das Modell hat zu viele Parameter",
                    "nl": "Het model heeft te veel parameters"
                },
                {
                    "en": "Model trains for too many epochs",
                    "es": "El modelo entrena por demasiadas épocas",
                    "de": "Das Modell trainiert zu viele Epochen",
                    "nl": "Het model traint te veel epochs"
                },
                {
                    "en": "Model uses too much memory",
                    "es": "El modelo usa demasiada memoria",
                    "de": "Das Modell verwendet zu viel Speicher",
                    "nl": "Het model gebruikt te veel geheugen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Underfitting occurs when a model is too simple to capture the underlying patterns in the data.",
                "es": "El subajuste ocurre cuando un modelo es demasiado simple para capturar los patrones subyacentes.",
                "de": "Unteranpassung tritt auf, wenn ein Modell zu einfach ist, um die zugrunde liegenden Muster zu erfassen.",
                "nl": "Underfitting treedt op wanneer een model te eenvoudig is om de onderliggende patronen te vangen."
            }
        },
        {
            "question": {
                "en": "What is the bias-variance tradeoff?",
                "es": "¿Qué es el equilibrio sesgo-varianza?",
                "de": "Was ist der Bias-Varianz-Kompromiss?",
                "nl": "Wat is de bias-variantie-afweging?"
            },
            "options": [
                {
                    "en": "Balance between underfitting and overfitting",
                    "es": "Equilibrio entre subajuste y sobreajuste",
                    "de": "Balance zwischen Unter- und Überanpassung",
                    "nl": "Balans tussen underfitting en overfitting"
                },
                {
                    "en": "Choice between speed and accuracy",
                    "es": "Elección entre velocidad y precisión",
                    "de": "Wahl zwischen Geschwindigkeit und Genauigkeit",
                    "nl": "Keuze tussen snelheid en nauwkeurigheid"
                },
                {
                    "en": "Selection of the right optimizer",
                    "es": "Selección del optimizador correcto",
                    "de": "Auswahl des richtigen Optimierers",
                    "nl": "Selectie van de juiste optimizer"
                },
                {
                    "en": "Tradeoff between GPU and CPU usage",
                    "es": "Equilibrio entre uso de GPU y CPU",
                    "de": "Kompromiss zwischen GPU- und CPU-Nutzung",
                    "nl": "Afweging tussen GPU- en CPU-gebruik"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The bias-variance tradeoff balances model simplicity (bias) against sensitivity to data (variance).",
                "es": "El equilibrio sesgo-varianza balancea la simplicidad del modelo con la sensibilidad a los datos.",
                "de": "Der Bias-Varianz-Kompromiss balanciert Modellsimplizität gegen Datensensitivität.",
                "nl": "De bias-variantie-afweging balanceert modeleenvoud (bias) tegen gevoeligheid voor data (variantie)."
            }
        },
        {
            "question": {
                "en": "What is model ensembling?",
                "es": "¿Qué es el ensamblaje de modelos?",
                "de": "Was ist Modell-Ensembling?",
                "nl": "Wat is model-ensembling?"
            },
            "options": [
                {
                    "en": "Combining predictions from multiple models",
                    "es": "Combinar predicciones de múltiples modelos",
                    "de": "Vorhersagen mehrerer Modelle kombinieren",
                    "nl": "Voorspellingen van meerdere modellen combineren"
                },
                {
                    "en": "Training a single large model",
                    "es": "Entrenar un solo modelo grande",
                    "de": "Ein einzelnes großes Modell trainieren",
                    "nl": "Eén groot model trainen"
                },
                {
                    "en": "Splitting a model into smaller parts",
                    "es": "Dividir un modelo en partes más pequeñas",
                    "de": "Ein Modell in kleinere Teile aufteilen",
                    "nl": "Een model in kleinere delen splitsen"
                },
                {
                    "en": "Removing duplicate predictions",
                    "es": "Eliminar predicciones duplicadas",
                    "de": "Doppelte Vorhersagen entfernen",
                    "nl": "Dubbele voorspellingen verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Model ensembling combines outputs of multiple models to achieve better performance than any single model.",
                "es": "El ensamblaje combina salidas de múltiples modelos para lograr mejor rendimiento.",
                "de": "Modell-Ensembling kombiniert Ausgaben mehrerer Modelle für bessere Leistung als ein einzelnes Modell.",
                "nl": "Model-ensembling combineert uitvoer van meerdere modellen voor betere prestaties dan één model."
            }
        },
        {
            "question": {
                "en": "What is knowledge distillation?",
                "es": "¿Qué es la destilación de conocimiento?",
                "de": "Was ist Wissensdestillation?",
                "nl": "Wat is kennisdistillatie?"
            },
            "options": [
                {
                    "en": "Training a small model to mimic a large one",
                    "es": "Entrenar un modelo pequeño para imitar uno grande",
                    "de": "Ein kleines Modell trainieren, ein großes nachzuahmen",
                    "nl": "Een klein model trainen om een groot model na te bootsen"
                },
                {
                    "en": "Extracting data from databases",
                    "es": "Extraer datos de bases de datos",
                    "de": "Daten aus Datenbanken extrahieren",
                    "nl": "Data uit databases extraheren"
                },
                {
                    "en": "Removing unnecessary layers",
                    "es": "Eliminar capas innecesarias",
                    "de": "Unnötige Schichten entfernen",
                    "nl": "Onnodige lagen verwijderen"
                },
                {
                    "en": "Compressing training data",
                    "es": "Comprimir datos de entrenamiento",
                    "de": "Trainingsdaten komprimieren",
                    "nl": "Trainingsdata comprimeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Knowledge distillation trains a smaller student model to replicate the behavior of a larger teacher model.",
                "es": "La destilación entrena un modelo estudiante más pequeño para replicar el comportamiento de un modelo maestro.",
                "de": "Wissensdestillation trainiert ein kleineres Schülermodell, das Verhalten eines Lehrermodells nachzuahmen.",
                "nl": "Kennisdistillatie traint een kleiner studentmodel om het gedrag van een groter lerarenmodel na te bootsen."
            }
        },
        {
            "question": {
                "en": "What is model pruning?",
                "es": "¿Qué es la poda de modelos?",
                "de": "Was ist Modell-Pruning?",
                "nl": "Wat is model-pruning?"
            },
            "options": [
                {
                    "en": "Removing unimportant weights or neurons",
                    "es": "Eliminar pesos o neuronas poco importantes",
                    "de": "Unwichtige Gewichte oder Neuronen entfernen",
                    "nl": "Onbelangrijke gewichten of neuronen verwijderen"
                },
                {
                    "en": "Adding more layers to the model",
                    "es": "Agregar más capas al modelo",
                    "de": "Mehr Schichten zum Modell hinzufügen",
                    "nl": "Meer lagen aan het model toevoegen"
                },
                {
                    "en": "Duplicating model weights",
                    "es": "Duplicar los pesos del modelo",
                    "de": "Modellgewichte duplizieren",
                    "nl": "Modelgewichten dupliceren"
                },
                {
                    "en": "Increasing training data size",
                    "es": "Aumentar el tamaño de los datos de entrenamiento",
                    "de": "Die Größe der Trainingsdaten erhöhen",
                    "nl": "De grootte van de trainingsdata vergroten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Model pruning removes less important connections to make the network smaller and more efficient.",
                "es": "La poda de modelos elimina conexiones menos importantes para hacer la red más pequeña y eficiente.",
                "de": "Modell-Pruning entfernt weniger wichtige Verbindungen, um das Netz kleiner und effizienter zu machen.",
                "nl": "Model-pruning verwijdert minder belangrijke verbindingen om het netwerk kleiner en efficiënter te maken."
            }
        },
        {
            "question": {
                "en": "What is quantization in deep learning?",
                "es": "¿Qué es la cuantización en aprendizaje profundo?",
                "de": "Was ist Quantisierung im Deep Learning?",
                "nl": "Wat is kwantisatie in deep learning?"
            },
            "options": [
                {
                    "en": "Reducing precision of model weights",
                    "es": "Reducir la precisión de los pesos del modelo",
                    "de": "Die Präzision der Modellgewichte reduzieren",
                    "nl": "De precisie van modelgewichten verminderen"
                },
                {
                    "en": "Counting the number of parameters",
                    "es": "Contar el número de parámetros",
                    "de": "Die Anzahl der Parameter zählen",
                    "nl": "Het aantal parameters tellen"
                },
                {
                    "en": "Increasing model accuracy",
                    "es": "Aumentar la precisión del modelo",
                    "de": "Die Modellgenauigkeit erhöhen",
                    "nl": "De modelnauwkeurigheid verhogen"
                },
                {
                    "en": "Splitting data into chunks",
                    "es": "Dividir datos en fragmentos",
                    "de": "Daten in Stücke aufteilen",
                    "nl": "Data in stukken verdelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Quantization reduces weight precision, for example from 32-bit to 8-bit, to decrease model size.",
                "es": "La cuantización reduce la precisión de los pesos, por ejemplo de 32 bits a 8 bits.",
                "de": "Quantisierung reduziert die Gewichtspräzision, z.B. von 32-Bit auf 8-Bit, um die Modellgröße zu verringern.",
                "nl": "Kwantisatie vermindert de gewichtsprecisie, bijvoorbeeld van 32-bit naar 8-bit, om het model kleiner te maken."
            }
        },
        {
            "question": {
                "en": "What is a depthwise separable convolution?",
                "es": "¿Qué es una convolución separable en profundidad?",
                "de": "Was ist eine tiefenweise trennbare Faltung?",
                "nl": "Wat is een dieptegewijs scheidbare convolutie?"
            },
            "options": [
                {
                    "en": "Efficient convolution splitting spatial and channel ops",
                    "es": "Convolución eficiente que separa operaciones espaciales y de canal",
                    "de": "Effiziente Faltung die räumliche und Kanaloperationen trennt",
                    "nl": "Efficiënte convolutie die ruimtelijke en kanaaloperaties scheidt"
                },
                {
                    "en": "A standard 3x3 convolution",
                    "es": "Una convolución estándar de 3x3",
                    "de": "Eine Standard-3x3-Faltung",
                    "nl": "Een standaard 3x3 convolutie"
                },
                {
                    "en": "A pooling operation",
                    "es": "Una operación de pooling",
                    "de": "Eine Pooling-Operation",
                    "nl": "Een pooling-operatie"
                },
                {
                    "en": "A type of activation function",
                    "es": "Un tipo de función de activación",
                    "de": "Eine Art Aktivierungsfunktion",
                    "nl": "Een type activeringsfunctie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Depthwise separable convolutions split standard convolutions into spatial and channel steps for efficiency.",
                "es": "Las convoluciones separables en profundidad dividen las convoluciones en pasos espaciales y de canal.",
                "de": "Tiefenweise trennbare Faltungen teilen Standardfaltungen in räumliche und Kanalschritte für Effizienz.",
                "nl": "Dieptegewijs scheidbare convoluties splitsen standaardconvoluties in ruimtelijke en kanaalstappen."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a learning rate warmup?",
                "es": "¿Cuál es el propósito del calentamiento de tasa de aprendizaje?",
                "de": "Was ist der Zweck eines Lernraten-Warmups?",
                "nl": "Wat is het doel van leersnelheid-warmup?"
            },
            "options": [
                {
                    "en": "Gradually increasing learning rate at start",
                    "es": "Aumentar gradualmente la tasa al inicio",
                    "de": "Lernrate zu Beginn schrittweise erhöhen",
                    "nl": "Leersnelheid geleidelijk verhogen bij aanvang"
                },
                {
                    "en": "Keeping learning rate constant",
                    "es": "Mantener la tasa de aprendizaje constante",
                    "de": "Die Lernrate konstant halten",
                    "nl": "De leersnelheid constant houden"
                },
                {
                    "en": "Decreasing learning rate from the start",
                    "es": "Disminuir la tasa desde el inicio",
                    "de": "Die Lernrate von Anfang an senken",
                    "nl": "De leersnelheid vanaf het begin verlagen"
                },
                {
                    "en": "Setting learning rate to zero",
                    "es": "Establecer la tasa en cero",
                    "de": "Die Lernrate auf Null setzen",
                    "nl": "De leersnelheid op nul zetten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Learning rate warmup gradually increases the rate from a small value to avoid early training instability.",
                "es": "El calentamiento aumenta gradualmente la tasa desde un valor pequeño para evitar inestabilidad inicial.",
                "de": "Lernraten-Warmup erhöht die Rate schrittweise, um anfängliche Trainingsinstabilität zu vermeiden.",
                "nl": "Leersnelheid-warmup verhoogt de snelheid geleidelijk om vroege trainingsinstabiliteit te voorkomen."
            }
        },
        {
            "question": {
                "en": "What does the term 'backbone' refer to in deep learning?",
                "es": "¿A qué se refiere el término 'backbone' en aprendizaje profundo?",
                "de": "Was bedeutet der Begriff 'Backbone' im Deep Learning?",
                "nl": "Wat betekent de term 'backbone' in deep learning?"
            },
            "options": [
                {
                    "en": "The main feature extraction network",
                    "es": "La red principal de extracción de características",
                    "de": "Das Hauptnetzwerk zur Merkmalsextraktion",
                    "nl": "Het hoofdnetwerk voor feature-extractie"
                },
                {
                    "en": "The final classification layer",
                    "es": "La capa final de clasificación",
                    "de": "Die letzte Klassifikationsschicht",
                    "nl": "De laatste classificatielaag"
                },
                {
                    "en": "The hardware running the model",
                    "es": "El hardware que ejecuta el modelo",
                    "de": "Die Hardware, die das Modell ausführt",
                    "nl": "De hardware die het model draait"
                },
                {
                    "en": "The training dataset",
                    "es": "El conjunto de datos de entrenamiento",
                    "de": "Der Trainingsdatensatz",
                    "nl": "De trainingsdataset"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A backbone is the core feature extraction network in a deep learning architecture, often pre-trained.",
                "es": "Un backbone es la red central de extracción de características, a menudo preentrenada.",
                "de": "Ein Backbone ist das zentrale Merkmalextraktionsnetzwerk, oft vortrainiert.",
                "nl": "Een backbone is het centrale feature-extractienetwerk in een deep learning-architectuur."
            }
        },
        {
            "question": {
                "en": "What is mixed precision training?",
                "es": "¿Qué es el entrenamiento de precisión mixta?",
                "de": "Was ist Mixed-Precision-Training?",
                "nl": "Wat is mixed precision training?"
            },
            "options": [
                {
                    "en": "Using both 16-bit and 32-bit floating point",
                    "es": "Usar punto flotante de 16 y 32 bits",
                    "de": "Verwendung von 16-Bit und 32-Bit Gleitkomma",
                    "nl": "Gebruik van zowel 16-bit als 32-bit drijvende komma"
                },
                {
                    "en": "Training on multiple datasets",
                    "es": "Entrenar con múltiples conjuntos de datos",
                    "de": "Training mit mehreren Datensätzen",
                    "nl": "Trainen op meerdere datasets"
                },
                {
                    "en": "Combining supervised and unsupervised learning",
                    "es": "Combinar aprendizaje supervisado y no supervisado",
                    "de": "Überwachtes und unüberwachtes Lernen kombinieren",
                    "nl": "Gesuperviseerd en ongesuperviseerd leren combineren"
                },
                {
                    "en": "Using different optimizers per layer",
                    "es": "Usar diferentes optimizadores por capa",
                    "de": "Verschiedene Optimierer pro Schicht verwenden",
                    "nl": "Verschillende optimizers per laag gebruiken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Mixed precision training uses lower precision (FP16) for speed while maintaining accuracy with FP32.",
                "es": "El entrenamiento de precisión mixta usa menor precisión (FP16) para velocidad manteniendo precisión.",
                "de": "Mixed-Precision-Training nutzt niedrigere Präzision (FP16) für Geschwindigkeit bei FP32-Genauigkeit.",
                "nl": "Mixed precision training gebruikt lagere precisie (FP16) voor snelheid met FP32-nauwkeurigheid."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a pooling layer?",
                "es": "¿Cuál es el propósito de una capa de pooling?",
                "de": "Was ist der Zweck einer Pooling-Schicht?",
                "nl": "Wat is het doel van een pooling-laag?"
            },
            "options": [
                {
                    "en": "Reduce spatial dimensions of feature maps",
                    "es": "Reducir las dimensiones espaciales de los mapas",
                    "de": "Räumliche Dimensionen der Feature-Maps reduzieren",
                    "nl": "Ruimtelijke dimensies van featuremaps verkleinen"
                },
                {
                    "en": "Increase the resolution of images",
                    "es": "Aumentar la resolución de las imágenes",
                    "de": "Die Auflösung von Bildern erhöhen",
                    "nl": "De resolutie van afbeeldingen verhogen"
                },
                {
                    "en": "Add more neurons to the network",
                    "es": "Agregar más neuronas a la red",
                    "de": "Mehr Neuronen zum Netzwerk hinzufügen",
                    "nl": "Meer neuronen aan het netwerk toevoegen"
                },
                {
                    "en": "Store intermediate computations",
                    "es": "Almacenar cálculos intermedios",
                    "de": "Zwischenberechnungen speichern",
                    "nl": "Tussentijdse berekeningen opslaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Pooling layers downsample feature maps, reducing their spatial size while retaining important features.",
                "es": "Las capas de pooling reducen los mapas de características conservando las características importantes.",
                "de": "Pooling-Schichten verkleinern Feature-Maps und behalten dabei wichtige Merkmale bei.",
                "nl": "Pooling-lagen verkleinen featuremaps terwijl ze belangrijke kenmerken behouden."
            }
        },
        {
            "question": {
                "en": "What is upsampling in deep learning?",
                "es": "¿Qué es el sobremuestreo en aprendizaje profundo?",
                "de": "Was ist Upsampling im Deep Learning?",
                "nl": "Wat is upsampling in deep learning?"
            },
            "options": [
                {
                    "en": "Increasing spatial resolution of feature maps",
                    "es": "Aumentar la resolución espacial de los mapas",
                    "de": "Räumliche Auflösung der Feature-Maps erhöhen",
                    "nl": "Ruimtelijke resolutie van featuremaps verhogen"
                },
                {
                    "en": "Reducing model size",
                    "es": "Reducir el tamaño del modelo",
                    "de": "Die Modellgröße reduzieren",
                    "nl": "De modelgrootte verkleinen"
                },
                {
                    "en": "Adding training samples",
                    "es": "Agregar muestras de entrenamiento",
                    "de": "Trainingsstichproben hinzufügen",
                    "nl": "Trainingssamples toevoegen"
                },
                {
                    "en": "Increasing batch size",
                    "es": "Aumentar el tamaño del lote",
                    "de": "Die Batchgröße erhöhen",
                    "nl": "De batchgrootte vergroten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Upsampling increases the spatial dimensions of feature maps, commonly used in segmentation networks.",
                "es": "El sobremuestreo aumenta las dimensiones espaciales, comúnmente usado en redes de segmentación.",
                "de": "Upsampling erhöht die räumlichen Dimensionen, häufig in Segmentierungsnetzwerken verwendet.",
                "nl": "Upsampling vergroot de ruimtelijke dimensies van featuremaps, vaak gebruikt in segmentatienetwerken."
            }
        },
        {
            "question": {
                "en": "What is the difference between max and average pooling?",
                "es": "¿Cuál es la diferencia entre max pooling y average pooling?",
                "de": "Was ist der Unterschied zwischen Max- und Average-Pooling?",
                "nl": "Wat is het verschil tussen max- en gemiddelde pooling?"
            },
            "options": [
                {
                    "en": "Max takes highest value, average takes mean",
                    "es": "Max toma el mayor valor, average toma la media",
                    "de": "Max nimmt den höchsten Wert, Average den Durchschnitt",
                    "nl": "Max neemt de hoogste waarde, average neemt het gemiddelde"
                },
                {
                    "en": "They are identical operations",
                    "es": "Son operaciones idénticas",
                    "de": "Sie sind identische Operationen",
                    "nl": "Ze zijn identieke operaties"
                },
                {
                    "en": "Max pooling is slower",
                    "es": "Max pooling es más lento",
                    "de": "Max-Pooling ist langsamer",
                    "nl": "Max-pooling is langzamer"
                },
                {
                    "en": "Average pooling only works on images",
                    "es": "Average pooling solo funciona con imágenes",
                    "de": "Average-Pooling funktioniert nur mit Bildern",
                    "nl": "Gemiddelde pooling werkt alleen op afbeeldingen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Max pooling selects the maximum value in each window, while average pooling computes the mean value.",
                "es": "Max pooling selecciona el valor máximo en cada ventana, average pooling calcula la media.",
                "de": "Max-Pooling wählt den Maximalwert pro Fenster, Average-Pooling berechnet den Durchschnitt.",
                "nl": "Max-pooling selecteert de maximale waarde per venster, gemiddelde pooling berekent het gemiddelde."
            }
        },
        {
            "question": {
                "en": "What is a loss landscape in deep learning?",
                "es": "¿Qué es un paisaje de pérdida en aprendizaje profundo?",
                "de": "Was ist eine Verlustlandschaft im Deep Learning?",
                "nl": "Wat is een verlieslandschap in deep learning?"
            },
            "options": [
                {
                    "en": "Surface showing loss values across weight space",
                    "es": "Superficie que muestra valores de pérdida en el espacio de pesos",
                    "de": "Oberfläche der Verlustwerte über den Gewichtsraum",
                    "nl": "Oppervlak dat verlieswaarden toont over gewichtsruimte"
                },
                {
                    "en": "A chart showing training time",
                    "es": "Un gráfico que muestra el tiempo de entrenamiento",
                    "de": "Ein Diagramm der Trainingszeit",
                    "nl": "Een grafiek van de trainingstijd"
                },
                {
                    "en": "The amount of data lost during training",
                    "es": "La cantidad de datos perdidos durante el entrenamiento",
                    "de": "Die Menge an verlorenen Daten während des Trainings",
                    "nl": "De hoeveelheid verloren data tijdens training"
                },
                {
                    "en": "A map of GPU memory usage",
                    "es": "Un mapa del uso de memoria GPU",
                    "de": "Eine Karte der GPU-Speichernutzung",
                    "nl": "Een kaart van GPU-geheugengebruik"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A loss landscape visualizes how the loss function changes as model weights vary in parameter space.",
                "es": "Un paisaje de pérdida visualiza cómo cambia la función de pérdida al variar los pesos.",
                "de": "Eine Verlustlandschaft zeigt, wie sich die Verlustfunktion bei Gewichtsänderungen verhält.",
                "nl": "Een verlieslandschap visualiseert hoe de verliesfunctie verandert bij gewichtsvariaties."
            }
        },
        {
            "question": {
                "en": "What is a local minimum in optimization?",
                "es": "¿Qué es un mínimo local en optimización?",
                "de": "Was ist ein lokales Minimum bei der Optimierung?",
                "nl": "Wat is een lokaal minimum bij optimalisatie?"
            },
            "options": [
                {
                    "en": "A point lower than nearby points but not the lowest",
                    "es": "Un punto menor que los cercanos pero no el más bajo",
                    "de": "Ein Punkt niedriger als nahe Punkte aber nicht der tiefste",
                    "nl": "Een punt lager dan nabijgelegen punten maar niet het laagste"
                },
                {
                    "en": "The absolute lowest loss value",
                    "es": "El valor de pérdida más bajo absoluto",
                    "de": "Der absolut niedrigste Verlustwert",
                    "nl": "De absoluut laagste verlieswaarde"
                },
                {
                    "en": "The starting point of training",
                    "es": "El punto de inicio del entrenamiento",
                    "de": "Der Startpunkt des Trainings",
                    "nl": "Het startpunt van training"
                },
                {
                    "en": "The maximum loss value",
                    "es": "El valor máximo de pérdida",
                    "de": "Der maximale Verlustwert",
                    "nl": "De maximale verlieswaarde"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A local minimum is a point where the loss is lower than surrounding points but not globally optimal.",
                "es": "Un mínimo local es un punto donde la pérdida es menor que los puntos cercanos pero no óptimo globalmente.",
                "de": "Ein lokales Minimum ist ein Punkt mit niedrigerem Verlust als die Umgebung, aber nicht global optimal.",
                "nl": "Een lokaal minimum is een punt waar het verlies lager is dan de omgeving maar niet globaal optimaal."
            }
        },
        {
            "question": {
                "en": "What is a saddle point in optimization?",
                "es": "¿Qué es un punto de silla en optimización?",
                "de": "Was ist ein Sattelpunkt bei der Optimierung?",
                "nl": "Wat is een zadelpunt bij optimalisatie?"
            },
            "options": [
                {
                    "en": "A point that is a minimum in one direction and maximum in another",
                    "es": "Un punto que es mínimo en una dirección y máximo en otra",
                    "de": "Ein Punkt der in einer Richtung Minimum und in einer anderen Maximum ist",
                    "nl": "Een punt dat minimum is in één richting en maximum in een andere"
                },
                {
                    "en": "The global minimum of the loss",
                    "es": "El mínimo global de la pérdida",
                    "de": "Das globale Minimum des Verlusts",
                    "nl": "Het globale minimum van het verlies"
                },
                {
                    "en": "A point where training stops",
                    "es": "Un punto donde el entrenamiento se detiene",
                    "de": "Ein Punkt, an dem das Training stoppt",
                    "nl": "Een punt waar het trainen stopt"
                },
                {
                    "en": "The best weight configuration",
                    "es": "La mejor configuración de pesos",
                    "de": "Die beste Gewichtskonfiguration",
                    "nl": "De beste gewichtsconfiguratie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A saddle point has zero gradient but is not a local minimum, slowing down optimization progress.",
                "es": "Un punto de silla tiene gradiente cero pero no es un mínimo local, ralentizando la optimización.",
                "de": "Ein Sattelpunkt hat Gradient Null, ist aber kein lokales Minimum und verlangsamt die Optimierung.",
                "nl": "Een zadelpunt heeft nul gradiënt maar is geen lokaal minimum en vertraagt de optimalisatie."
            }
        },
        {
            "question": {
                "en": "What is cosine annealing?",
                "es": "¿Qué es el recocido coseno?",
                "de": "Was ist Cosine Annealing?",
                "nl": "Wat is cosinus-annealing?"
            },
            "options": [
                {
                    "en": "Learning rate schedule following a cosine curve",
                    "es": "Programa de tasa de aprendizaje que sigue una curva coseno",
                    "de": "Lernratenplan der einer Kosinuskurve folgt",
                    "nl": "Leersnelheidschema dat een cosinuscurve volgt"
                },
                {
                    "en": "A method to increase batch size",
                    "es": "Un método para aumentar el tamaño del lote",
                    "de": "Eine Methode zur Erhöhung der Batchgröße",
                    "nl": "Een methode om de batchgrootte te vergroten"
                },
                {
                    "en": "A type of weight initialization",
                    "es": "Un tipo de inicialización de pesos",
                    "de": "Eine Art der Gewichtsinitialisierung",
                    "nl": "Een type gewichtsinitialisatie"
                },
                {
                    "en": "A loss function for regression",
                    "es": "Una función de pérdida para regresión",
                    "de": "Eine Verlustfunktion für Regression",
                    "nl": "Een verliesfunctie voor regressie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Cosine annealing gradually reduces the learning rate following a cosine function for smooth decay.",
                "es": "El recocido coseno reduce gradualmente la tasa de aprendizaje siguiendo una función coseno.",
                "de": "Cosine Annealing senkt die Lernrate schrittweise gemäß einer Kosinusfunktion.",
                "nl": "Cosinus-annealing verlaagt de leersnelheid geleidelijk volgens een cosinusfunctie."
            }
        },
        {
            "question": {
                "en": "What is the purpose of He initialization?",
                "es": "¿Cuál es el propósito de la inicialización He?",
                "de": "Was ist der Zweck der He-Initialisierung?",
                "nl": "Wat is het doel van He-initialisatie?"
            },
            "options": [
                {
                    "en": "Initialize weights optimally for ReLU networks",
                    "es": "Inicializar pesos de forma óptima para redes ReLU",
                    "de": "Gewichte optimal für ReLU-Netzwerke initialisieren",
                    "nl": "Gewichten optimaal initialiseren voor ReLU-netwerken"
                },
                {
                    "en": "Set all weights to the same value",
                    "es": "Establecer todos los pesos al mismo valor",
                    "de": "Alle Gewichte auf den gleichen Wert setzen",
                    "nl": "Alle gewichten op dezelfde waarde zetten"
                },
                {
                    "en": "Remove bias terms from the network",
                    "es": "Eliminar términos de sesgo de la red",
                    "de": "Bias-Terme aus dem Netzwerk entfernen",
                    "nl": "Biastermen uit het netwerk verwijderen"
                },
                {
                    "en": "Initialize only the output layer",
                    "es": "Inicializar solo la capa de salida",
                    "de": "Nur die Ausgabeschicht initialisieren",
                    "nl": "Alleen de uitvoerlaag initialiseren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "He initialization is designed specifically for ReLU activations, scaling weights by the number of inputs.",
                "es": "La inicialización He está diseñada para activaciones ReLU, escalando pesos por el número de entradas.",
                "de": "Die He-Initialisierung ist speziell für ReLU-Aktivierungen und skaliert Gewichte nach der Eingabeanzahl.",
                "nl": "He-initialisatie is ontworpen voor ReLU-activeringen en schaalt gewichten naar het aantal invoer."
            }
        },
        {
            "question": {
                "en": "What is the RMSProp optimizer?",
                "es": "¿Qué es el optimizador RMSProp?",
                "de": "Was ist der RMSProp-Optimierer?",
                "nl": "Wat is de RMSProp-optimizer?"
            },
            "options": [
                {
                    "en": "Adaptive optimizer using moving average of squared gradients",
                    "es": "Optimizador adaptativo con media móvil de gradientes cuadrados",
                    "de": "Adaptiver Optimierer mit gleitendem Mittel quadrierter Gradienten",
                    "nl": "Adaptieve optimizer met voortschrijdend gemiddelde van kwadraatgradiënten"
                },
                {
                    "en": "A fixed learning rate optimizer",
                    "es": "Un optimizador con tasa fija",
                    "de": "Ein Optimierer mit fester Lernrate",
                    "nl": "Een optimizer met vaste leersnelheid"
                },
                {
                    "en": "A loss function for classification",
                    "es": "Una función de pérdida para clasificación",
                    "de": "Eine Verlustfunktion für Klassifikation",
                    "nl": "Een verliesfunctie voor classificatie"
                },
                {
                    "en": "A method to initialize weights",
                    "es": "Un método para inicializar pesos",
                    "de": "Eine Methode zur Gewichtsinitialisierung",
                    "nl": "Een methode om gewichten te initialiseren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "RMSProp adapts learning rates per parameter using a running average of recent gradient magnitudes.",
                "es": "RMSProp adapta tasas de aprendizaje por parámetro usando un promedio de magnitudes de gradiente.",
                "de": "RMSProp passt Lernraten pro Parameter mit einem laufenden Durchschnitt der Gradientenbeträge an.",
                "nl": "RMSProp past leersnelheden per parameter aan met een voortschrijdend gemiddelde van gradiëntgrootten."
            }
        },
        {
            "question": {
                "en": "What is label smoothing?",
                "es": "¿Qué es el suavizado de etiquetas?",
                "de": "Was ist Label Smoothing?",
                "nl": "Wat is label-smoothing?"
            },
            "options": [
                {
                    "en": "Replacing hard labels with soft probability targets",
                    "es": "Reemplazar etiquetas duras con objetivos de probabilidad suaves",
                    "de": "Harte Labels durch weiche Wahrscheinlichkeitsziele ersetzen",
                    "nl": "Harde labels vervangen door zachte waarschijnlijkheidsdoelen"
                },
                {
                    "en": "Removing noisy labels from data",
                    "es": "Eliminar etiquetas ruidosas de los datos",
                    "de": "Verrauschte Labels aus Daten entfernen",
                    "nl": "Ruis-labels uit data verwijderen"
                },
                {
                    "en": "Averaging labels across the dataset",
                    "es": "Promediar etiquetas en todo el conjunto",
                    "de": "Labels über den Datensatz mitteln",
                    "nl": "Labels over de dataset middelen"
                },
                {
                    "en": "Encoding labels as integers",
                    "es": "Codificar etiquetas como enteros",
                    "de": "Labels als Ganzzahlen kodieren",
                    "nl": "Labels coderen als gehele getallen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Label smoothing replaces one-hot targets with softer distributions to reduce model overconfidence.",
                "es": "El suavizado de etiquetas reemplaza objetivos one-hot con distribuciones suaves contra el exceso de confianza.",
                "de": "Label Smoothing ersetzt One-Hot-Ziele durch weichere Verteilungen gegen Übervertrauen des Modells.",
                "nl": "Label-smoothing vervangt one-hot doelen door zachtere verdelingen om overmatig vertrouwen te verminderen."
            }
        },
        {
            "question": {
                "en": "What is the Huber loss function?",
                "es": "¿Qué es la función de pérdida de Huber?",
                "de": "Was ist die Huber-Verlustfunktion?",
                "nl": "Wat is de Huber-verliesfunctie?"
            },
            "options": [
                {
                    "en": "Loss that is quadratic for small errors, linear for large",
                    "es": "Pérdida cuadrática para errores pequeños, lineal para grandes",
                    "de": "Verlust quadratisch für kleine Fehler, linear für große",
                    "nl": "Verlies kwadratisch voor kleine fouten, lineair voor grote"
                },
                {
                    "en": "Always linear regardless of error size",
                    "es": "Siempre lineal independientemente del error",
                    "de": "Immer linear unabhängig von der Fehlergröße",
                    "nl": "Altijd lineair ongeacht de foutgrootte"
                },
                {
                    "en": "Only works for classification tasks",
                    "es": "Solo funciona para tareas de clasificación",
                    "de": "Funktioniert nur für Klassifikationsaufgaben",
                    "nl": "Werkt alleen voor classificatietaken"
                },
                {
                    "en": "Same as cross-entropy loss",
                    "es": "Igual que la pérdida de entropía cruzada",
                    "de": "Gleich wie Kreuzentropie-Verlust",
                    "nl": "Hetzelfde als cross-entropieverlies"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Huber loss combines MSE for small errors and MAE for large errors, making it robust to outliers.",
                "es": "La pérdida de Huber combina MSE para errores pequeños y MAE para grandes, siendo robusta ante atípicos.",
                "de": "Huber-Verlust kombiniert MSE für kleine und MAE für große Fehler und ist robust gegen Ausreißer.",
                "nl": "Huber-verlies combineert MSE voor kleine en MAE voor grote fouten en is robuust tegen uitschieters."
            }
        },
        {
            "question": {
                "en": "What is a checkpoint in model training?",
                "es": "¿Qué es un punto de control en el entrenamiento?",
                "de": "Was ist ein Checkpoint beim Modelltraining?",
                "nl": "Wat is een checkpoint bij modeltraining?"
            },
            "options": [
                {
                    "en": "A saved snapshot of the model at a given point",
                    "es": "Una instantánea guardada del modelo en un punto dado",
                    "de": "Ein gespeicherter Schnappschuss des Modells zu einem Zeitpunkt",
                    "nl": "Een opgeslagen momentopname van het model op een bepaald punt"
                },
                {
                    "en": "A validation metric threshold",
                    "es": "Un umbral de métrica de validación",
                    "de": "Ein Validierungsmetrik-Schwellenwert",
                    "nl": "Een drempelwaarde voor validatiemetrieken"
                },
                {
                    "en": "A data preprocessing step",
                    "es": "Un paso de preprocesamiento de datos",
                    "de": "Ein Datenvorverarbeitungsschritt",
                    "nl": "Een datavoorverwerkingsstap"
                },
                {
                    "en": "A type of loss function",
                    "es": "Un tipo de función de pérdida",
                    "de": "Eine Art Verlustfunktion",
                    "nl": "Een type verliesfunctie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A checkpoint saves model weights and training state, allowing recovery if training is interrupted.",
                "es": "Un punto de control guarda los pesos y el estado, permitiendo recuperación si se interrumpe.",
                "de": "Ein Checkpoint speichert Gewichte und Trainingszustand für die Wiederherstellung bei Unterbrechung.",
                "nl": "Een checkpoint slaat gewichten en trainingsstatus op voor herstel bij onderbreking."
            }
        },
        {
            "question": {
                "en": "What is the difference between a parameter and hyperparameter?",
                "es": "¿Cuál es la diferencia entre parámetro e hiperparámetro?",
                "de": "Was ist der Unterschied zwischen Parameter und Hyperparameter?",
                "nl": "Wat is het verschil tussen een parameter en hyperparameter?"
            },
            "options": [
                {
                    "en": "Parameters are learned, hyperparameters are set manually",
                    "es": "Los parámetros se aprenden, los hiperparámetros se fijan manualmente",
                    "de": "Parameter werden gelernt, Hyperparameter manuell festgelegt",
                    "nl": "Parameters worden geleerd, hyperparameters handmatig ingesteld"
                },
                {
                    "en": "They are exactly the same thing",
                    "es": "Son exactamente lo mismo",
                    "de": "Sie sind genau dasselbe",
                    "nl": "Ze zijn precies hetzelfde"
                },
                {
                    "en": "Hyperparameters are always larger",
                    "es": "Los hiperparámetros son siempre más grandes",
                    "de": "Hyperparameter sind immer größer",
                    "nl": "Hyperparameters zijn altijd groter"
                },
                {
                    "en": "Parameters are set before training only",
                    "es": "Los parámetros solo se fijan antes del entrenamiento",
                    "de": "Parameter werden nur vor dem Training festgelegt",
                    "nl": "Parameters worden alleen voor het trainen ingesteld"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Parameters like weights are learned during training; hyperparameters like learning rate are set beforehand.",
                "es": "Los parámetros como pesos se aprenden; los hiperparámetros como la tasa se fijan previamente.",
                "de": "Parameter wie Gewichte werden gelernt; Hyperparameter wie Lernrate werden vorher festgelegt.",
                "nl": "Parameters zoals gewichten worden geleerd; hyperparameters zoals leersnelheid worden vooraf ingesteld."
            }
        },
        {
            "question": {
                "en": "What does 'inference' mean in deep learning?",
                "es": "¿Qué significa 'inferencia' en aprendizaje profundo?",
                "de": "Was bedeutet 'Inferenz' im Deep Learning?",
                "nl": "Wat betekent 'inferentie' in deep learning?"
            },
            "options": [
                {
                    "en": "Using a trained model to make predictions",
                    "es": "Usar un modelo entrenado para hacer predicciones",
                    "de": "Ein trainiertes Modell zur Vorhersage verwenden",
                    "nl": "Een getraind model gebruiken om voorspellingen te doen"
                },
                {
                    "en": "Training the model on new data",
                    "es": "Entrenar el modelo con nuevos datos",
                    "de": "Das Modell mit neuen Daten trainieren",
                    "nl": "Het model trainen op nieuwe data"
                },
                {
                    "en": "Evaluating model architecture",
                    "es": "Evaluar la arquitectura del modelo",
                    "de": "Die Modellarchitektur evaluieren",
                    "nl": "De modelarchitectuur evalueren"
                },
                {
                    "en": "Preprocessing input data",
                    "es": "Preprocesar datos de entrada",
                    "de": "Eingabedaten vorverarbeiten",
                    "nl": "Invoerdata voorverwerken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Inference is the process of using a trained model to generate predictions on new, unseen data.",
                "es": "La inferencia es el proceso de usar un modelo entrenado para generar predicciones con datos nuevos.",
                "de": "Inferenz ist der Prozess, ein trainiertes Modell zur Vorhersage auf neuen Daten zu verwenden.",
                "nl": "Inferentie is het proces van het gebruik van een getraind model voor voorspellingen op nieuwe data."
            }
        },
        {
            "question": {
                "en": "What is gradient accumulation?",
                "es": "¿Qué es la acumulación de gradientes?",
                "de": "Was ist Gradientenakkumulation?",
                "nl": "Wat is gradiëntaccumulatie?"
            },
            "options": [
                {
                    "en": "Summing gradients over multiple mini-batches",
                    "es": "Sumar gradientes de múltiples mini-lotes",
                    "de": "Gradienten über mehrere Mini-Batches summieren",
                    "nl": "Gradiënten optellen over meerdere mini-batches"
                },
                {
                    "en": "Storing all gradients in memory",
                    "es": "Almacenar todos los gradientes en memoria",
                    "de": "Alle Gradienten im Speicher speichern",
                    "nl": "Alle gradiënten in het geheugen opslaan"
                },
                {
                    "en": "Removing small gradients",
                    "es": "Eliminar gradientes pequeños",
                    "de": "Kleine Gradienten entfernen",
                    "nl": "Kleine gradiënten verwijderen"
                },
                {
                    "en": "Doubling the gradient values",
                    "es": "Duplicar los valores de gradiente",
                    "de": "Die Gradientenwerte verdoppeln",
                    "nl": "De gradiëntwaarden verdubbelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Gradient accumulation sums gradients over several mini-batches before updating, simulating larger batches.",
                "es": "La acumulación de gradientes suma gradientes de varios mini-lotes antes de actualizar.",
                "de": "Gradientenakkumulation summiert Gradienten über mehrere Mini-Batches und simuliert so größere Batches.",
                "nl": "Gradiëntaccumulatie telt gradiënten over meerdere mini-batches op en simuleert zo grotere batches."
            }
        },
        {
            "question": {
                "en": "What is the purpose of weight sharing?",
                "es": "¿Cuál es el propósito de compartir pesos?",
                "de": "Was ist der Zweck des Gewichtsteilens?",
                "nl": "Wat is het doel van het delen van gewichten?"
            },
            "options": [
                {
                    "en": "Using the same weights across different parts",
                    "es": "Usar los mismos pesos en diferentes partes",
                    "de": "Dieselben Gewichte in verschiedenen Teilen verwenden",
                    "nl": "Dezelfde gewichten in verschillende delen gebruiken"
                },
                {
                    "en": "Distributing weights across GPUs",
                    "es": "Distribuir pesos entre GPUs",
                    "de": "Gewichte auf GPUs verteilen",
                    "nl": "Gewichten verdelen over GPU's"
                },
                {
                    "en": "Copying weights to a backup",
                    "es": "Copiar pesos a una copia de seguridad",
                    "de": "Gewichte in ein Backup kopieren",
                    "nl": "Gewichten naar een back-up kopiëren"
                },
                {
                    "en": "Splitting weights between models",
                    "es": "Dividir pesos entre modelos",
                    "de": "Gewichte zwischen Modellen aufteilen",
                    "nl": "Gewichten verdelen tussen modellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Weight sharing reduces parameters by using the same weights in multiple parts of the network.",
                "es": "Compartir pesos reduce parámetros usando los mismos pesos en múltiples partes de la red.",
                "de": "Gewichtsteilen reduziert Parameter durch Verwendung derselben Gewichte in mehreren Netzwerkteilen.",
                "nl": "Gewichten delen vermindert parameters door dezelfde gewichten in meerdere delen te gebruiken."
            }
        },
        {
            "question": {
                "en": "What is the Swish activation function?",
                "es": "¿Qué es la función de activación Swish?",
                "de": "Was ist die Swish-Aktivierungsfunktion?",
                "nl": "Wat is de Swish-activeringsfunctie?"
            },
            "options": [
                {
                    "en": "x multiplied by sigmoid(x)",
                    "es": "x multiplicado por sigmoid(x)",
                    "de": "x multipliziert mit sigmoid(x)",
                    "nl": "x vermenigvuldigd met sigmoid(x)"
                },
                {
                    "en": "Same as ReLU",
                    "es": "Igual que ReLU",
                    "de": "Gleich wie ReLU",
                    "nl": "Hetzelfde als ReLU"
                },
                {
                    "en": "The inverse of tanh",
                    "es": "El inverso de tanh",
                    "de": "Die Umkehrung von tanh",
                    "nl": "De inverse van tanh"
                },
                {
                    "en": "A step function",
                    "es": "Una función escalón",
                    "de": "Eine Stufenfunktion",
                    "nl": "Een stapfunctie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Swish is defined as x times sigmoid(x) and often outperforms ReLU in deep networks.",
                "es": "Swish se define como x por sigmoid(x) y a menudo supera a ReLU en redes profundas.",
                "de": "Swish ist definiert als x mal sigmoid(x) und übertrifft oft ReLU in tiefen Netzwerken.",
                "nl": "Swish is gedefinieerd als x keer sigmoid(x) en presteert vaak beter dan ReLU in diepe netwerken."
            }
        },
        {
            "question": {
                "en": "What is layer normalization?",
                "es": "¿Qué es la normalización de capas?",
                "de": "Was ist Schichtnormalisierung?",
                "nl": "Wat is laaglnormalisatie?"
            },
            "options": [
                {
                    "en": "Normalizing across features within a single sample",
                    "es": "Normalizar a través de características dentro de una muestra",
                    "de": "Über Features innerhalb einer Stichprobe normalisieren",
                    "nl": "Normaliseren over features binnen één sample"
                },
                {
                    "en": "Normalizing across the entire batch",
                    "es": "Normalizar a través de todo el lote",
                    "de": "Über den gesamten Batch normalisieren",
                    "nl": "Normaliseren over de hele batch"
                },
                {
                    "en": "Removing layers from the network",
                    "es": "Eliminar capas de la red",
                    "de": "Schichten aus dem Netzwerk entfernen",
                    "nl": "Lagen uit het netwerk verwijderen"
                },
                {
                    "en": "Adding extra layers for stability",
                    "es": "Agregar capas extra para estabilidad",
                    "de": "Zusätzliche Schichten für Stabilität hinzufügen",
                    "nl": "Extra lagen toevoegen voor stabiliteit"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Layer normalization normalizes across all features within a single sample, independent of batch size.",
                "es": "La normalización de capas normaliza a través de todas las características dentro de una muestra.",
                "de": "Schichtnormalisierung normalisiert über alle Features einer einzelnen Stichprobe, unabhängig vom Batch.",
                "nl": "Laagnormalisatie normaliseert over alle features binnen één sample, onafhankelijk van batchgrootte."
            }
        },
        {
            "question": {
                "en": "What is the GELU activation function?",
                "es": "¿Qué es la función de activación GELU?",
                "de": "Was ist die GELU-Aktivierungsfunktion?",
                "nl": "Wat is de GELU-activeringsfunctie?"
            },
            "options": [
                {
                    "en": "Gaussian Error Linear Unit activation",
                    "es": "Activación de unidad lineal de error gaussiano",
                    "de": "Gausssche Fehler-Lineareinheit-Aktivierung",
                    "nl": "Gaussiaanse fout lineaire eenheid activering"
                },
                {
                    "en": "A type of pooling operation",
                    "es": "Un tipo de operación de pooling",
                    "de": "Eine Art Pooling-Operation",
                    "nl": "Een type pooling-operatie"
                },
                {
                    "en": "A loss function",
                    "es": "Una función de pérdida",
                    "de": "Eine Verlustfunktion",
                    "nl": "Een verliesfunctie"
                },
                {
                    "en": "A weight initialization method",
                    "es": "Un método de inicialización de pesos",
                    "de": "Eine Gewichtsinitialisierungsmethode",
                    "nl": "Een gewichtsinitialisatiemethode"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "GELU smoothly gates inputs using a Gaussian distribution and is used in models like BERT and GPT.",
                "es": "GELU aplica una compuerta suave usando una distribución gaussiana, usada en modelos como BERT y GPT.",
                "de": "GELU filtert Eingaben sanft mit einer Gaußverteilung und wird in Modellen wie BERT und GPT verwendet.",
                "nl": "GELU filtert invoer soepel met een Gaussverdeling en wordt gebruikt in modellen zoals BERT en GPT."
            }
        },
        {
            "question": {
                "en": "What is the Adagrad optimizer?",
                "es": "¿Qué es el optimizador Adagrad?",
                "de": "Was ist der Adagrad-Optimierer?",
                "nl": "Wat is de Adagrad-optimizer?"
            },
            "options": [
                {
                    "en": "Adapts learning rate based on past gradient history",
                    "es": "Adapta la tasa según el historial de gradientes pasados",
                    "de": "Passt die Lernrate basierend auf der Gradientenhistorie an",
                    "nl": "Past de leersnelheid aan op basis van gradiëntgeschiedenis"
                },
                {
                    "en": "Uses a constant learning rate",
                    "es": "Usa una tasa de aprendizaje constante",
                    "de": "Verwendet eine konstante Lernrate",
                    "nl": "Gebruikt een constante leersnelheid"
                },
                {
                    "en": "Only works for image classification",
                    "es": "Solo funciona para clasificación de imágenes",
                    "de": "Funktioniert nur für Bildklassifikation",
                    "nl": "Werkt alleen voor beeldclassificatie"
                },
                {
                    "en": "A type of loss function",
                    "es": "Un tipo de función de pérdida",
                    "de": "Eine Art Verlustfunktion",
                    "nl": "Een type verliesfunctie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Adagrad adapts the learning rate for each parameter based on the sum of all past squared gradients.",
                "es": "Adagrad adapta la tasa para cada parámetro basándose en la suma de gradientes cuadrados pasados.",
                "de": "Adagrad passt die Lernrate pro Parameter basierend auf der Summe aller vergangenen quadrierten Gradienten an.",
                "nl": "Adagrad past de leersnelheid per parameter aan op basis van de som van alle eerdere kwadraatgradiënten."
            }
        },
        {
            "question": {
                "en": "What is the focal loss function?",
                "es": "¿Qué es la función de pérdida focal?",
                "de": "Was ist die Focal-Verlustfunktion?",
                "nl": "Wat is de focale verliesfunctie?"
            },
            "options": [
                {
                    "en": "Loss that focuses on hard-to-classify samples",
                    "es": "Pérdida que se enfoca en muestras difíciles de clasificar",
                    "de": "Verlust der sich auf schwer klassifizierbare Proben konzentriert",
                    "nl": "Verlies dat focust op moeilijk te classificeren samples"
                },
                {
                    "en": "Standard mean squared error",
                    "es": "Error cuadrático medio estándar",
                    "de": "Standard mittlerer quadratischer Fehler",
                    "nl": "Standaard gemiddelde kwadratische fout"
                },
                {
                    "en": "A loss only for regression tasks",
                    "es": "Una pérdida solo para tareas de regresión",
                    "de": "Ein Verlust nur für Regressionsaufgaben",
                    "nl": "Een verlies alleen voor regressietaken"
                },
                {
                    "en": "A fixed penalty for all predictions",
                    "es": "Una penalización fija para todas las predicciones",
                    "de": "Eine feste Strafe für alle Vorhersagen",
                    "nl": "Een vaste straf voor alle voorspellingen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Focal loss downweights easy examples and focuses on hard ones, useful for imbalanced datasets.",
                "es": "La pérdida focal reduce el peso de ejemplos fáciles y se enfoca en los difíciles.",
                "de": "Focal Loss gewichtet einfache Beispiele herunter und konzentriert sich auf schwierige.",
                "nl": "Focaal verlies vermindert het gewicht van makkelijke voorbeelden en focust op moeilijke."
            }
        },
        {
            "question": {
                "en": "What is spectral normalization?",
                "es": "¿Qué es la normalización espectral?",
                "de": "Was ist spektrale Normalisierung?",
                "nl": "Wat is spectrale normalisatie?"
            },
            "options": [
                {
                    "en": "Constraining the spectral norm of weight matrices",
                    "es": "Restringir la norma espectral de matrices de pesos",
                    "de": "Die Spektralnorm der Gewichtsmatrizen beschränken",
                    "nl": "De spectrale norm van gewichtsmatrices beperken"
                },
                {
                    "en": "Normalizing audio input data",
                    "es": "Normalizar datos de entrada de audio",
                    "de": "Audio-Eingabedaten normalisieren",
                    "nl": "Audio-invoerdata normaliseren"
                },
                {
                    "en": "Adjusting color spectrums in images",
                    "es": "Ajustar espectros de color en imágenes",
                    "de": "Farbspektren in Bildern anpassen",
                    "nl": "Kleurspectra in afbeeldingen aanpassen"
                },
                {
                    "en": "Sorting data by frequency",
                    "es": "Ordenar datos por frecuencia",
                    "de": "Daten nach Häufigkeit sortieren",
                    "nl": "Data sorteren op frequentie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Spectral normalization controls the Lipschitz constant of layers by normalizing the spectral norm of weights.",
                "es": "La normalización espectral controla la constante de Lipschitz normalizando la norma espectral.",
                "de": "Spektrale Normalisierung kontrolliert die Lipschitz-Konstante durch Normalisierung der Spektralnorm.",
                "nl": "Spectrale normalisatie beheerst de Lipschitz-constante door de spectrale norm van gewichten te normaliseren."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a bottleneck layer?",
                "es": "¿Cuál es el propósito de una capa cuello de botella?",
                "de": "Was ist der Zweck einer Engpassschicht?",
                "nl": "Wat is het doel van een bottleneck-laag?"
            },
            "options": [
                {
                    "en": "Reduce dimensions before expanding them again",
                    "es": "Reducir dimensiones antes de expandirlas de nuevo",
                    "de": "Dimensionen reduzieren bevor sie wieder erweitert werden",
                    "nl": "Dimensies verkleinen voordat ze weer worden vergroot"
                },
                {
                    "en": "Increase the number of parameters",
                    "es": "Aumentar el número de parámetros",
                    "de": "Die Anzahl der Parameter erhöhen",
                    "nl": "Het aantal parameters vergroten"
                },
                {
                    "en": "Store intermediate results",
                    "es": "Almacenar resultados intermedios",
                    "de": "Zwischenergebnisse speichern",
                    "nl": "Tussenresultaten opslaan"
                },
                {
                    "en": "Slow down training on purpose",
                    "es": "Ralentizar el entrenamiento a propósito",
                    "de": "Das Training absichtlich verlangsamen",
                    "nl": "Het trainen opzettelijk vertragen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A bottleneck layer compresses features to a smaller dimension, reducing computation while preserving information.",
                "es": "Una capa cuello de botella comprime características a menor dimensión, reduciendo cómputo.",
                "de": "Eine Engpassschicht komprimiert Features auf kleinere Dimensionen und reduziert die Berechnung.",
                "nl": "Een bottleneck-laag comprimeert features naar kleinere dimensies en vermindert berekeningen."
            }
        },
        {
            "question": {
                "en": "What is the difference between 1x1 and 3x3 convolutions?",
                "es": "¿Cuál es la diferencia entre convoluciones 1x1 y 3x3?",
                "de": "Was ist der Unterschied zwischen 1x1 und 3x3 Faltungen?",
                "nl": "Wat is het verschil tussen 1x1 en 3x3 convoluties?"
            },
            "options": [
                {
                    "en": "1x1 changes channel depth, 3x3 captures spatial patterns",
                    "es": "1x1 cambia profundidad de canal, 3x3 captura patrones espaciales",
                    "de": "1x1 ändert Kanaltiefe, 3x3 erfasst räumliche Muster",
                    "nl": "1x1 verandert kanaaldiepte, 3x3 vangt ruimtelijke patronen"
                },
                {
                    "en": "They produce identical results",
                    "es": "Producen resultados idénticos",
                    "de": "Sie erzeugen identische Ergebnisse",
                    "nl": "Ze produceren identieke resultaten"
                },
                {
                    "en": "3x3 is always faster than 1x1",
                    "es": "3x3 es siempre más rápido que 1x1",
                    "de": "3x3 ist immer schneller als 1x1",
                    "nl": "3x3 is altijd sneller dan 1x1"
                },
                {
                    "en": "1x1 only works for grayscale images",
                    "es": "1x1 solo funciona para imágenes en escala de grises",
                    "de": "1x1 funktioniert nur für Graustufenbilder",
                    "nl": "1x1 werkt alleen voor grijswaardenafbeeldingen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A 1x1 convolution adjusts channel dimensions efficiently, while 3x3 captures local spatial features.",
                "es": "Una convolución 1x1 ajusta dimensiones de canal eficientemente, mientras 3x3 captura patrones espaciales.",
                "de": "Eine 1x1-Faltung passt Kanaldimensionen effizient an, während 3x3 lokale räumliche Merkmale erfasst.",
                "nl": "Een 1x1-convolutie past kanaaldimensies efficiënt aan, terwijl 3x3 lokale ruimtelijke patronen vangt."
            }
        },
        {
            "question": {
                "en": "What is dilated convolution?",
                "es": "¿Qué es la convolución dilatada?",
                "de": "Was ist eine dilatierte Faltung?",
                "nl": "Wat is een gedilateerde convolutie?"
            },
            "options": [
                {
                    "en": "Convolution with gaps between filter elements",
                    "es": "Convolución con espacios entre elementos del filtro",
                    "de": "Faltung mit Lücken zwischen Filterelementen",
                    "nl": "Convolutie met gaten tussen filterelementen"
                },
                {
                    "en": "A wider version of standard convolution",
                    "es": "Una versión más ancha de la convolución estándar",
                    "de": "Eine breitere Version der Standardfaltung",
                    "nl": "Een bredere versie van standaard convolutie"
                },
                {
                    "en": "Convolution applied twice",
                    "es": "Convolución aplicada dos veces",
                    "de": "Zweimal angewandte Faltung",
                    "nl": "Convolutie die twee keer wordt toegepast"
                },
                {
                    "en": "A type of pooling operation",
                    "es": "Un tipo de operación de pooling",
                    "de": "Eine Art Pooling-Operation",
                    "nl": "Een type pooling-operatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Dilated convolutions insert gaps between filter elements to increase the receptive field without more parameters.",
                "es": "Las convoluciones dilatadas insertan espacios entre elementos del filtro para ampliar el campo receptivo.",
                "de": "Dilatierte Faltungen fügen Lücken zwischen Filterelementen ein, um das rezeptive Feld zu vergrößern.",
                "nl": "Gedilateerde convoluties voegen gaten in tussen filterelementen om het receptief veld te vergroten."
            }
        },
        {
            "question": {
                "en": "What is the purpose of dropout regularization?",
                "es": "¿Cuál es el propósito de la regularización dropout?",
                "de": "Was ist der Zweck der Dropout-Regularisierung?",
                "nl": "Wat is het doel van dropout-regularisatie?"
            },
            "options": [
                {
                    "en": "Randomly deactivate neurons during training",
                    "es": "Desactivar neuronas aleatoriamente durante el entrenamiento",
                    "de": "Neuronen beim Training zufällig deaktivieren",
                    "nl": "Neuronen willekeurig deactiveren tijdens training"
                },
                {
                    "en": "Remove entire layers permanently",
                    "es": "Eliminar capas enteras permanentemente",
                    "de": "Ganze Schichten dauerhaft entfernen",
                    "nl": "Hele lagen permanent verwijderen"
                },
                {
                    "en": "Reduce the learning rate",
                    "es": "Reducir la tasa de aprendizaje",
                    "de": "Die Lernrate reduzieren",
                    "nl": "De leersnelheid verlagen"
                },
                {
                    "en": "Increase the batch size",
                    "es": "Aumentar el tamaño del lote",
                    "de": "Die Batchgröße erhöhen",
                    "nl": "De batchgrootte vergroten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Dropout randomly sets neuron outputs to zero during training, preventing co-adaptation and overfitting.",
                "es": "Dropout establece aleatoriamente las salidas de neuronas en cero para prevenir sobreajuste.",
                "de": "Dropout setzt Neuronenausgaben zufällig auf Null, um Ko-Adaptation und Überanpassung zu verhindern.",
                "nl": "Dropout zet neuronenuitvoer willekeurig op nul om co-adaptatie en overfitting te voorkomen."
            }
        },
        {
            "question": {
                "en": "What is a transposed convolution?",
                "es": "¿Qué es una convolución transpuesta?",
                "de": "Was ist eine transponierte Faltung?",
                "nl": "Wat is een getransponeerde convolutie?"
            },
            "options": [
                {
                    "en": "Convolution that increases spatial dimensions",
                    "es": "Convolución que aumenta las dimensiones espaciales",
                    "de": "Faltung die räumliche Dimensionen vergrößert",
                    "nl": "Convolutie die ruimtelijke dimensies vergroot"
                },
                {
                    "en": "Convolution applied in reverse order",
                    "es": "Convolución aplicada en orden inverso",
                    "de": "In umgekehrter Reihenfolge angewandte Faltung",
                    "nl": "Convolutie toegepast in omgekeerde volgorde"
                },
                {
                    "en": "A convolution with no padding",
                    "es": "Una convolución sin relleno",
                    "de": "Eine Faltung ohne Padding",
                    "nl": "Een convolutie zonder padding"
                },
                {
                    "en": "A convolution using larger filters",
                    "es": "Una convolución con filtros más grandes",
                    "de": "Eine Faltung mit größeren Filtern",
                    "nl": "Een convolutie met grotere filters"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Transposed convolutions upsample feature maps by learning to increase spatial dimensions.",
                "es": "Las convoluciones transpuestas sobremuestrean los mapas aprendiendo a aumentar las dimensiones.",
                "de": "Transponierte Faltungen vergrößern Feature-Maps durch Lernen der räumlichen Dimensionserweiterung.",
                "nl": "Getransponeerde convoluties vergroten featuremaps door te leren de ruimtelijke dimensies te vergroten."
            }
        },
        {
            "question": {
                "en": "What is group normalization?",
                "es": "¿Qué es la normalización de grupo?",
                "de": "Was ist Gruppennormalisierung?",
                "nl": "Wat is groepsnormalisatie?"
            },
            "options": [
                {
                    "en": "Dividing channels into groups and normalizing each",
                    "es": "Dividir canales en grupos y normalizar cada uno",
                    "de": "Kanäle in Gruppen teilen und jede normalisieren",
                    "nl": "Kanalen in groepen verdelen en elke normaliseren"
                },
                {
                    "en": "Normalizing the entire batch at once",
                    "es": "Normalizar todo el lote de una vez",
                    "de": "Den gesamten Batch auf einmal normalisieren",
                    "nl": "De hele batch in één keer normaliseren"
                },
                {
                    "en": "Grouping similar data points together",
                    "es": "Agrupar puntos de datos similares",
                    "de": "Ähnliche Datenpunkte gruppieren",
                    "nl": "Vergelijkbare datapunten groeperen"
                },
                {
                    "en": "Reducing the number of groups in data",
                    "es": "Reducir el número de grupos en los datos",
                    "de": "Die Anzahl der Gruppen reduzieren",
                    "nl": "Het aantal groepen in data verminderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Group normalization divides channels into groups and normalizes within each, working well with small batches.",
                "es": "La normalización de grupo divide canales en grupos y normaliza dentro de cada uno.",
                "de": "Gruppennormalisierung teilt Kanäle in Gruppen und normalisiert innerhalb jeder Gruppe.",
                "nl": "Groepsnormalisatie verdeelt kanalen in groepen en normaliseert binnen elke groep."
            }
        },
        {
            "question": {
                "en": "What is the warmup-then-decay learning rate strategy?",
                "es": "¿Qué es la estrategia de calentamiento y luego decaimiento?",
                "de": "Was ist die Warmup-dann-Decay-Lernratenstrategie?",
                "nl": "Wat is de warmup-dan-verval leersnelheidstrategie?"
            },
            "options": [
                {
                    "en": "Increase rate first then gradually decrease it",
                    "es": "Aumentar la tasa primero y luego reducirla gradualmente",
                    "de": "Rate erst erhöhen und dann schrittweise senken",
                    "nl": "Snelheid eerst verhogen en dan geleidelijk verlagen"
                },
                {
                    "en": "Keep rate constant throughout training",
                    "es": "Mantener la tasa constante durante el entrenamiento",
                    "de": "Rate während des gesamten Trainings konstant halten",
                    "nl": "Snelheid constant houden tijdens training"
                },
                {
                    "en": "Only decrease the learning rate",
                    "es": "Solo disminuir la tasa de aprendizaje",
                    "de": "Nur die Lernrate senken",
                    "nl": "Alleen de leersnelheid verlagen"
                },
                {
                    "en": "Use random learning rates each epoch",
                    "es": "Usar tasas aleatorias en cada época",
                    "de": "Zufällige Lernraten pro Epoche verwenden",
                    "nl": "Willekeurige leersnelheden per epoch gebruiken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "This strategy starts with a low rate, increases it during warmup, then gradually decreases for stability.",
                "es": "Esta estrategia comienza con una tasa baja, la aumenta durante el calentamiento y luego la reduce.",
                "de": "Diese Strategie beginnt mit niedriger Rate, erhöht sie beim Warmup und senkt sie dann schrittweise.",
                "nl": "Deze strategie begint met een lage snelheid, verhoogt die tijdens warmup en verlaagt daarna geleidelijk."
            }
        },
        {
            "question": {
                "en": "What is the purpose of attention mechanisms?",
                "es": "¿Cuál es el propósito de los mecanismos de atención?",
                "de": "Was ist der Zweck von Aufmerksamkeitsmechanismen?",
                "nl": "Wat is het doel van aandachtsmechanismen?"
            },
            "options": [
                {
                    "en": "Focus on relevant parts of the input",
                    "es": "Enfocarse en partes relevantes de la entrada",
                    "de": "Auf relevante Teile der Eingabe fokussieren",
                    "nl": "Focussen op relevante delen van de invoer"
                },
                {
                    "en": "Speed up model training",
                    "es": "Acelerar el entrenamiento del modelo",
                    "de": "Das Modelltraining beschleunigen",
                    "nl": "Het trainen van het model versnellen"
                },
                {
                    "en": "Reduce the number of layers needed",
                    "es": "Reducir el número de capas necesarias",
                    "de": "Die Anzahl der benötigten Schichten reduzieren",
                    "nl": "Het aantal benodigde lagen verminderen"
                },
                {
                    "en": "Compress the model size",
                    "es": "Comprimir el tamaño del modelo",
                    "de": "Die Modellgröße komprimieren",
                    "nl": "De modelgrootte comprimeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Attention mechanisms let the model weigh the importance of different input parts dynamically.",
                "es": "Los mecanismos de atención permiten al modelo ponderar la importancia de las partes de la entrada.",
                "de": "Aufmerksamkeitsmechanismen lassen das Modell die Wichtigkeit verschiedener Eingabeteile dynamisch gewichten.",
                "nl": "Aandachtsmechanismen laten het model het belang van verschillende invoerdelen dynamisch wegen."
            }
        },
        {
            "question": {
                "en": "What is multi-head attention?",
                "es": "¿Qué es la atención multi-cabeza?",
                "de": "Was ist Multi-Head-Attention?",
                "nl": "Wat is multi-head-aandacht?"
            },
            "options": [
                {
                    "en": "Running multiple attention operations in parallel",
                    "es": "Ejecutar múltiples operaciones de atención en paralelo",
                    "de": "Mehrere Attention-Operationen parallel ausführen",
                    "nl": "Meerdere aandachtsoperaties parallel uitvoeren"
                },
                {
                    "en": "Using multiple output layers",
                    "es": "Usar múltiples capas de salida",
                    "de": "Mehrere Ausgabeschichten verwenden",
                    "nl": "Meerdere uitvoerlagen gebruiken"
                },
                {
                    "en": "Training on multiple GPUs",
                    "es": "Entrenar en múltiples GPUs",
                    "de": "Auf mehreren GPUs trainieren",
                    "nl": "Trainen op meerdere GPU's"
                },
                {
                    "en": "Applying attention only at the end",
                    "es": "Aplicar atención solo al final",
                    "de": "Attention nur am Ende anwenden",
                    "nl": "Aandacht alleen aan het einde toepassen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Multi-head attention runs several attention functions in parallel, capturing different relationship types.",
                "es": "La atención multi-cabeza ejecuta varias funciones de atención en paralelo para captar diferentes relaciones.",
                "de": "Multi-Head-Attention führt mehrere Attention-Funktionen parallel aus für verschiedene Beziehungstypen.",
                "nl": "Multi-head-aandacht voert meerdere aandachtsfuncties parallel uit voor verschillende relatietypes."
            }
        },
        {
            "question": {
                "en": "What is the role of positional encoding?",
                "es": "¿Cuál es el papel de la codificación posicional?",
                "de": "Welche Rolle spielt Positionskodierung?",
                "nl": "Wat is de rol van positie-encodering?"
            },
            "options": [
                {
                    "en": "Adding sequence position information to inputs",
                    "es": "Agregar información de posición de secuencia a las entradas",
                    "de": "Sequenzpositionsinformation zu Eingaben hinzufügen",
                    "nl": "Sequentiepositie-informatie toevoegen aan invoer"
                },
                {
                    "en": "Encoding data into binary format",
                    "es": "Codificar datos en formato binario",
                    "de": "Daten in Binärformat kodieren",
                    "nl": "Data coderen in binair formaat"
                },
                {
                    "en": "Compressing input sequences",
                    "es": "Comprimir secuencias de entrada",
                    "de": "Eingabesequenzen komprimieren",
                    "nl": "Invoersequenties comprimeren"
                },
                {
                    "en": "Removing duplicate positions",
                    "es": "Eliminar posiciones duplicadas",
                    "de": "Doppelte Positionen entfernen",
                    "nl": "Dubbele posities verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Positional encoding adds position information so transformers can understand the order of input tokens.",
                "es": "La codificación posicional añade información de posición para que los transformers entiendan el orden.",
                "de": "Positionskodierung fügt Positionsinformation hinzu, damit Transformer die Reihenfolge verstehen.",
                "nl": "Positie-encodering voegt positie-informatie toe zodat transformers de volgorde van tokens begrijpen."
            }
        },
        {
            "question": {
                "en": "What is self-supervised learning?",
                "es": "¿Qué es el aprendizaje auto-supervisado?",
                "de": "Was ist selbstüberwachtes Lernen?",
                "nl": "Wat is zelfgesuperviseerd leren?"
            },
            "options": [
                {
                    "en": "Learning from data without manual labels",
                    "es": "Aprender de datos sin etiquetas manuales",
                    "de": "Aus Daten ohne manuelle Labels lernen",
                    "nl": "Leren van data zonder handmatige labels"
                },
                {
                    "en": "Training with fully labeled data",
                    "es": "Entrenar con datos completamente etiquetados",
                    "de": "Mit vollständig beschrifteten Daten trainieren",
                    "nl": "Trainen met volledig gelabelde data"
                },
                {
                    "en": "A model that trains itself without data",
                    "es": "Un modelo que se entrena sin datos",
                    "de": "Ein Modell das sich ohne Daten trainiert",
                    "nl": "Een model dat zichzelf traint zonder data"
                },
                {
                    "en": "Using reinforcement learning rewards",
                    "es": "Usar recompensas de aprendizaje por refuerzo",
                    "de": "Belohnungen aus Reinforcement Learning nutzen",
                    "nl": "Beloningen van versterkend leren gebruiken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Self-supervised learning creates labels from the data itself, like predicting masked words in text.",
                "es": "El aprendizaje auto-supervisado crea etiquetas a partir de los datos, como predecir palabras ocultas.",
                "de": "Selbstüberwachtes Lernen erstellt Labels aus den Daten selbst, wie maskierte Wörter vorherzusagen.",
                "nl": "Zelfgesuperviseerd leren maakt labels van de data zelf, zoals het voorspellen van gemaskeerde woorden."
            }
        },
        {
            "question": {
                "en": "What is contrastive learning?",
                "es": "¿Qué es el aprendizaje contrastivo?",
                "de": "Was ist kontrastives Lernen?",
                "nl": "Wat is contrastief leren?"
            },
            "options": [
                {
                    "en": "Learning by comparing similar and different pairs",
                    "es": "Aprender comparando pares similares y diferentes",
                    "de": "Lernen durch Vergleich ähnlicher und verschiedener Paare",
                    "nl": "Leren door vergelijking van gelijkaardige en verschillende paren"
                },
                {
                    "en": "Training with high-contrast images only",
                    "es": "Entrenar solo con imágenes de alto contraste",
                    "de": "Nur mit kontrastreichen Bildern trainieren",
                    "nl": "Alleen trainen met afbeeldingen met hoog contrast"
                },
                {
                    "en": "Comparing different model architectures",
                    "es": "Comparar diferentes arquitecturas de modelos",
                    "de": "Verschiedene Modellarchitekturen vergleichen",
                    "nl": "Verschillende modelarchitecturen vergelijken"
                },
                {
                    "en": "A technique to improve image quality",
                    "es": "Una técnica para mejorar la calidad de imagen",
                    "de": "Eine Technik zur Verbesserung der Bildqualität",
                    "nl": "Een techniek om beeldkwaliteit te verbeteren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Contrastive learning trains models to pull similar items closer and push dissimilar items apart.",
                "es": "El aprendizaje contrastivo entrena modelos para acercar elementos similares y alejar los diferentes.",
                "de": "Kontrastives Lernen trainiert Modelle, ähnliche Elemente näher und verschiedene weiter auseinander zu bringen.",
                "nl": "Contrastief leren traint modellen om gelijkaardige items dichter en verschillende items verder te plaatsen."
            }
        },
        {
            "question": {
                "en": "What is elastic net regularization?",
                "es": "¿Qué es la regularización de red elástica?",
                "de": "Was ist Elastic-Net-Regularisierung?",
                "nl": "Wat is elastisch net-regularisatie?"
            },
            "options": [
                {
                    "en": "Combination of L1 and L2 regularization",
                    "es": "Combinación de regularización L1 y L2",
                    "de": "Kombination von L1- und L2-Regularisierung",
                    "nl": "Combinatie van L1- en L2-regularisatie"
                },
                {
                    "en": "A flexible neural network architecture",
                    "es": "Una arquitectura de red neuronal flexible",
                    "de": "Eine flexible neuronale Netzwerkarchitektur",
                    "nl": "Een flexibele neurale netwerkarchitectuur"
                },
                {
                    "en": "Regularization using dropout only",
                    "es": "Regularización usando solo dropout",
                    "de": "Regularisierung nur mit Dropout",
                    "nl": "Regularisatie met alleen dropout"
                },
                {
                    "en": "A method to stretch training data",
                    "es": "Un método para estirar datos de entrenamiento",
                    "de": "Eine Methode zum Dehnen von Trainingsdaten",
                    "nl": "Een methode om trainingsdata uit te rekken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Elastic net combines L1 (sparsity) and L2 (weight penalty) regularization for balanced model control.",
                "es": "La red elástica combina regularización L1 (escasez) y L2 (penalización de pesos).",
                "de": "Elastic Net kombiniert L1-Sparsity und L2-Gewichtsstrafe für ausgewogene Modellkontrolle.",
                "nl": "Elastisch net combineert L1-schaarsheid en L2-gewichtsstraf voor gebalanceerde modelcontrole."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a decoder in an autoencoder?",
                "es": "¿Cuál es el propósito del decodificador en un autoencoder?",
                "de": "Was ist der Zweck des Decoders in einem Autoencoder?",
                "nl": "Wat is het doel van de decoder in een autoencoder?"
            },
            "options": [
                {
                    "en": "Reconstruct the input from compressed representation",
                    "es": "Reconstruir la entrada desde la representación comprimida",
                    "de": "Eingabe aus komprimierter Darstellung rekonstruieren",
                    "nl": "Invoer reconstrueren uit gecomprimeerde representatie"
                },
                {
                    "en": "Compress the input data",
                    "es": "Comprimir los datos de entrada",
                    "de": "Die Eingabedaten komprimieren",
                    "nl": "De invoerdata comprimeren"
                },
                {
                    "en": "Classify the input into categories",
                    "es": "Clasificar la entrada en categorías",
                    "de": "Die Eingabe in Kategorien klassifizieren",
                    "nl": "De invoer in categorieën classificeren"
                },
                {
                    "en": "Remove noise from the weights",
                    "es": "Eliminar ruido de los pesos",
                    "de": "Rauschen aus den Gewichten entfernen",
                    "nl": "Ruis uit de gewichten verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The decoder part of an autoencoder learns to reconstruct the original input from its compressed form.",
                "es": "El decodificador de un autoencoder aprende a reconstruir la entrada original desde su forma comprimida.",
                "de": "Der Decoder eines Autoencoders lernt, die Eingabe aus der komprimierten Form zu rekonstruieren.",
                "nl": "De decoder van een autoencoder leert de originele invoer te reconstrueren uit de gecomprimeerde vorm."
            }
        },
        {
            "question": {
                "en": "What is curriculum learning?",
                "es": "¿Qué es el aprendizaje por currículo?",
                "de": "Was ist Curriculum Learning?",
                "nl": "Wat is curriculumleren?"
            },
            "options": [
                {
                    "en": "Training on easy examples first, then harder ones",
                    "es": "Entrenar con ejemplos fáciles primero, luego más difíciles",
                    "de": "Erst mit einfachen Beispielen trainieren, dann schwierigere",
                    "nl": "Eerst trainen op makkelijke voorbeelden, dan moeilijkere"
                },
                {
                    "en": "Following a fixed training schedule",
                    "es": "Seguir un programa de entrenamiento fijo",
                    "de": "Einem festen Trainingsplan folgen",
                    "nl": "Een vast trainingsschema volgen"
                },
                {
                    "en": "Using a school-like grading system",
                    "es": "Usar un sistema de calificación escolar",
                    "de": "Ein schulähnliches Bewertungssystem verwenden",
                    "nl": "Een schoolachtig beoordelingssysteem gebruiken"
                },
                {
                    "en": "Training multiple subjects simultaneously",
                    "es": "Entrenar múltiples materias simultáneamente",
                    "de": "Mehrere Fächer gleichzeitig trainieren",
                    "nl": "Meerdere onderwerpen tegelijkertijd trainen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Curriculum learning presents training data in order of difficulty, starting easy and progressing to harder examples.",
                "es": "El aprendizaje por currículo presenta datos de entrenamiento en orden de dificultad creciente.",
                "de": "Curriculum Learning präsentiert Trainingsdaten nach Schwierigkeit sortiert, von einfach zu schwer.",
                "nl": "Curriculumleren presenteert trainingsdata op volgorde van moeilijkheid, van makkelijk naar moeilijk."
            }
        },
        {
            "question": {
                "en": "What is the purpose of batch size in training?",
                "es": "¿Cuál es el propósito del tamaño del lote en el entrenamiento?",
                "de": "Was ist der Zweck der Batchgröße beim Training?",
                "nl": "Wat is het doel van de batchgrootte bij training?"
            },
            "options": [
                {
                    "en": "Number of samples processed per weight update",
                    "es": "Número de muestras procesadas por actualización de pesos",
                    "de": "Anzahl der pro Gewichtsaktualisierung verarbeiteten Proben",
                    "nl": "Aantal samples verwerkt per gewichtsupdate"
                },
                {
                    "en": "Total number of epochs",
                    "es": "Número total de épocas",
                    "de": "Gesamtzahl der Epochen",
                    "nl": "Totaal aantal epochs"
                },
                {
                    "en": "Amount of memory available",
                    "es": "Cantidad de memoria disponible",
                    "de": "Verfügbarer Speicher",
                    "nl": "Hoeveelheid beschikbaar geheugen"
                },
                {
                    "en": "Number of layers in the model",
                    "es": "Número de capas en el modelo",
                    "de": "Anzahl der Schichten im Modell",
                    "nl": "Aantal lagen in het model"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Batch size determines how many training samples are used to compute one gradient update step.",
                "es": "El tamaño del lote determina cuántas muestras se usan para calcular una actualización de gradiente.",
                "de": "Die Batchgröße bestimmt, wie viele Proben für eine Gradientenaktualisierung verwendet werden.",
                "nl": "De batchgrootte bepaalt hoeveel trainingssamples worden gebruikt voor één gradiëntupdate."
            }
        },
        {
            "question": {
                "en": "What is the dying ReLU problem?",
                "es": "¿Qué es el problema de ReLU muerto?",
                "de": "Was ist das Problem des sterbenden ReLU?",
                "nl": "Wat is het probleem van stervende ReLU?"
            },
            "options": [
                {
                    "en": "Neurons that always output zero and stop learning",
                    "es": "Neuronas que siempre producen cero y dejan de aprender",
                    "de": "Neuronen die immer Null ausgeben und aufhören zu lernen",
                    "nl": "Neuronen die altijd nul uitvoeren en stoppen met leren"
                },
                {
                    "en": "ReLU becoming too computationally expensive",
                    "es": "ReLU volviéndose demasiado costoso computacionalmente",
                    "de": "ReLU wird zu rechenintensiv",
                    "nl": "ReLU wordt te rekenintensief"
                },
                {
                    "en": "The activation function crashing the training",
                    "es": "La función de activación que bloquea el entrenamiento",
                    "de": "Die Aktivierungsfunktion lässt das Training abstürzen",
                    "nl": "De activeringsfunctie laat de training crashen"
                },
                {
                    "en": "ReLU outputting negative values",
                    "es": "ReLU produciendo valores negativos",
                    "de": "ReLU gibt negative Werte aus",
                    "nl": "ReLU die negatieve waarden uitvoert"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Dying ReLU occurs when neurons get stuck outputting zero for all inputs, effectively becoming inactive.",
                "es": "El ReLU muerto ocurre cuando las neuronas se quedan produciendo cero para todas las entradas.",
                "de": "Sterbender ReLU tritt auf, wenn Neuronen für alle Eingaben Null ausgeben und inaktiv werden.",
                "nl": "Stervende ReLU treedt op wanneer neuronen voor alle invoer nul uitvoeren en inactief worden."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a decoder in a seq2seq model?",
                "es": "¿Cuál es el propósito del decodificador en un modelo seq2seq?",
                "de": "Was ist der Zweck des Decoders in einem Seq2Seq-Modell?",
                "nl": "Wat is het doel van de decoder in een seq2seq-model?"
            },
            "options": [
                {
                    "en": "Generate the output sequence step by step",
                    "es": "Generar la secuencia de salida paso a paso",
                    "de": "Die Ausgabesequenz Schritt für Schritt erzeugen",
                    "nl": "De uitvoersequentie stap voor stap genereren"
                },
                {
                    "en": "Compress the input into a fixed vector",
                    "es": "Comprimir la entrada en un vector fijo",
                    "de": "Die Eingabe in einen festen Vektor komprimieren",
                    "nl": "De invoer comprimeren tot een vaste vector"
                },
                {
                    "en": "Filter irrelevant input tokens",
                    "es": "Filtrar tokens de entrada irrelevantes",
                    "de": "Irrelevante Eingabe-Tokens filtern",
                    "nl": "Irrelevante invoertokens filteren"
                },
                {
                    "en": "Evaluate model performance metrics",
                    "es": "Evaluar métricas de rendimiento del modelo",
                    "de": "Modellleistungsmetriken bewerten",
                    "nl": "Modelprestatiemetrieken evalueren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In seq2seq models, the decoder generates the output sequence one token at a time from the encoded input.",
                "es": "En modelos seq2seq, el decodificador genera la secuencia de salida un token a la vez.",
                "de": "In Seq2Seq-Modellen erzeugt der Decoder die Ausgabesequenz Token für Token aus der kodierten Eingabe.",
                "nl": "In seq2seq-modellen genereert de decoder de uitvoersequentie één token tegelijk."
            }
        },
        {
            "question": {
                "en": "What is teacher forcing in sequence models?",
                "es": "¿Qué es teacher forcing en modelos de secuencia?",
                "de": "Was ist Teacher Forcing bei Sequenzmodellen?",
                "nl": "Wat is teacher forcing bij sequentiemodellen?"
            },
            "options": [
                {
                    "en": "Using actual outputs as next input during training",
                    "es": "Usar las salidas reales como próxima entrada en el entrenamiento",
                    "de": "Tatsächliche Ausgaben als nächste Eingabe beim Training verwenden",
                    "nl": "Werkelijke uitvoer als volgende invoer gebruiken bij training"
                },
                {
                    "en": "Forcing the model to use a specific optimizer",
                    "es": "Forzar al modelo a usar un optimizador específico",
                    "de": "Das Modell zwingen, einen bestimmten Optimierer zu verwenden",
                    "nl": "Het model dwingen een specifieke optimizer te gebruiken"
                },
                {
                    "en": "Using a teacher model to validate results",
                    "es": "Usar un modelo maestro para validar resultados",
                    "de": "Ein Lehrermodell zur Ergebnisvalidierung verwenden",
                    "nl": "Een lerarenmodel gebruiken om resultaten te valideren"
                },
                {
                    "en": "Training with extra supervision signals",
                    "es": "Entrenar con señales de supervisión extra",
                    "de": "Mit zusätzlichen Überwachungssignalen trainieren",
                    "nl": "Trainen met extra supervisiesignalen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Teacher forcing feeds the ground truth output as input to the next time step during training.",
                "es": "Teacher forcing alimenta la salida verdadera como entrada al siguiente paso temporal.",
                "de": "Teacher Forcing gibt die wahre Ausgabe als Eingabe für den nächsten Zeitschritt beim Training.",
                "nl": "Teacher forcing voert de werkelijke uitvoer als invoer voor de volgende tijdstap tijdens training."
            }
        },
        {
            "question": {
                "en": "What is model calibration?",
                "es": "¿Qué es la calibración del modelo?",
                "de": "Was ist Modellkalibrierung?",
                "nl": "Wat is modelkalibratie?"
            },
            "options": [
                {
                    "en": "Aligning predicted probabilities with true outcomes",
                    "es": "Alinear probabilidades predichas con resultados reales",
                    "de": "Vorhergesagte Wahrscheinlichkeiten mit wahren Ergebnissen abgleichen",
                    "nl": "Voorspelde kansen afstemmen op werkelijke uitkomsten"
                },
                {
                    "en": "Adjusting monitor settings for display",
                    "es": "Ajustar configuraciones del monitor",
                    "de": "Monitoreinstellungen für die Anzeige anpassen",
                    "nl": "Monitorinstellingen aanpassen voor weergave"
                },
                {
                    "en": "Setting the initial learning rate",
                    "es": "Establecer la tasa de aprendizaje inicial",
                    "de": "Die anfängliche Lernrate festlegen",
                    "nl": "De initiële leersnelheid instellen"
                },
                {
                    "en": "Measuring GPU performance",
                    "es": "Medir el rendimiento de la GPU",
                    "de": "Die GPU-Leistung messen",
                    "nl": "GPU-prestaties meten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Model calibration ensures predicted probabilities accurately reflect the true likelihood of outcomes.",
                "es": "La calibración del modelo asegura que las probabilidades predichas reflejen la probabilidad real.",
                "de": "Modellkalibrierung stellt sicher, dass vorhergesagte Wahrscheinlichkeiten die wahre Wahrscheinlichkeit widerspiegeln.",
                "nl": "Modelkalibratie zorgt ervoor dat voorspelde kansen de werkelijke waarschijnlijkheid nauwkeurig weergeven."
            }
        },
        {
            "question": {
                "en": "What is the triplet loss function?",
                "es": "¿Qué es la función de pérdida de triplete?",
                "de": "Was ist die Triplet-Verlustfunktion?",
                "nl": "Wat is de triplet-verliesfunctie?"
            },
            "options": [
                {
                    "en": "Loss using anchor, positive, and negative samples",
                    "es": "Pérdida usando muestras ancla, positiva y negativa",
                    "de": "Verlust mit Anker-, Positiv- und Negativproben",
                    "nl": "Verlies met anker-, positief en negatief sample"
                },
                {
                    "en": "Loss calculated from three epochs",
                    "es": "Pérdida calculada de tres épocas",
                    "de": "Verlust berechnet aus drei Epochen",
                    "nl": "Verlies berekend uit drie epochs"
                },
                {
                    "en": "Three times the standard loss",
                    "es": "Tres veces la pérdida estándar",
                    "de": "Dreimal der Standardverlust",
                    "nl": "Drie keer het standaardverlies"
                },
                {
                    "en": "Loss from three different models",
                    "es": "Pérdida de tres modelos diferentes",
                    "de": "Verlust von drei verschiedenen Modellen",
                    "nl": "Verlies van drie verschillende modellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Triplet loss compares an anchor to a positive and negative example to learn meaningful distances.",
                "es": "La pérdida de triplete compara un ancla con un ejemplo positivo y negativo para aprender distancias.",
                "de": "Triplet-Verlust vergleicht einen Anker mit einem positiven und negativen Beispiel für sinnvolle Abstände.",
                "nl": "Triplet-verlies vergelijkt een anker met een positief en negatief voorbeeld om zinvolle afstanden te leren."
            }
        },
        {
            "question": {
                "en": "What is gradient checkpointing?",
                "es": "¿Qué es el checkpointing de gradientes?",
                "de": "Was ist Gradient Checkpointing?",
                "nl": "Wat is gradiënt-checkpointing?"
            },
            "options": [
                {
                    "en": "Trading compute for memory by recomputing activations",
                    "es": "Intercambiar cómputo por memoria recomputando activaciones",
                    "de": "Rechenzeit gegen Speicher tauschen durch Neuberechnung",
                    "nl": "Rekenkracht inruilen voor geheugen door herberekening"
                },
                {
                    "en": "Saving gradients to disk periodically",
                    "es": "Guardar gradientes en disco periódicamente",
                    "de": "Gradienten periodisch auf Festplatte speichern",
                    "nl": "Gradiënten periodiek op schijf opslaan"
                },
                {
                    "en": "Checking gradients for correctness",
                    "es": "Verificar la corrección de los gradientes",
                    "de": "Gradienten auf Korrektheit prüfen",
                    "nl": "Gradiënten controleren op juistheid"
                },
                {
                    "en": "Freezing gradient values",
                    "es": "Congelar valores de gradientes",
                    "de": "Gradientenwerte einfrieren",
                    "nl": "Gradiëntwaarden bevriezen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Gradient checkpointing saves memory by not storing all activations, recomputing them during backpropagation.",
                "es": "El checkpointing de gradientes ahorra memoria al no almacenar todas las activaciones.",
                "de": "Gradient Checkpointing spart Speicher, indem nicht alle Aktivierungen gespeichert, sondern neu berechnet werden.",
                "nl": "Gradiënt-checkpointing bespaart geheugen door niet alle activaties op te slaan maar opnieuw te berekenen."
            }
        },
        {
            "question": {
                "en": "What is the Dice loss function used for?",
                "es": "¿Para qué se usa la función de pérdida Dice?",
                "de": "Wofür wird die Dice-Verlustfunktion verwendet?",
                "nl": "Waarvoor wordt de Dice-verliesfunctie gebruikt?"
            },
            "options": [
                {
                    "en": "Measuring overlap in segmentation tasks",
                    "es": "Medir la superposición en tareas de segmentación",
                    "de": "Überlappung bei Segmentierungsaufgaben messen",
                    "nl": "Overlap meten bij segmentatietaken"
                },
                {
                    "en": "Random sampling of training data",
                    "es": "Muestreo aleatorio de datos de entrenamiento",
                    "de": "Zufällige Stichproben der Trainingsdaten",
                    "nl": "Willekeurige steekproeven van trainingsdata"
                },
                {
                    "en": "Calculating model complexity",
                    "es": "Calcular la complejidad del modelo",
                    "de": "Die Modellkomplexität berechnen",
                    "nl": "De modelcomplexiteit berekenen"
                },
                {
                    "en": "Evaluating training speed",
                    "es": "Evaluar la velocidad de entrenamiento",
                    "de": "Die Trainingsgeschwindigkeit bewerten",
                    "nl": "De trainingssnelheid evalueren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Dice loss measures the overlap between predicted and ground truth segmentation masks.",
                "es": "La pérdida Dice mide la superposición entre las máscaras de segmentación predichas y reales.",
                "de": "Dice-Verlust misst die Überlappung zwischen vorhergesagten und wahren Segmentierungsmasken.",
                "nl": "Dice-verlies meet de overlap tussen voorspelde en werkelijke segmentatiemaskers."
            }
        },
        {
            "question": {
                "en": "What is instance normalization?",
                "es": "¿Qué es la normalización de instancia?",
                "de": "Was ist Instanznormalisierung?",
                "nl": "Wat is instantienormalisatie?"
            },
            "options": [
                {
                    "en": "Normalizing each feature map per sample independently",
                    "es": "Normalizar cada mapa de características por muestra independientemente",
                    "de": "Jede Feature-Map pro Probe unabhängig normalisieren",
                    "nl": "Elke featuremap per sample onafhankelijk normaliseren"
                },
                {
                    "en": "Normalizing across the entire dataset",
                    "es": "Normalizar a través de todo el conjunto de datos",
                    "de": "Über den gesamten Datensatz normalisieren",
                    "nl": "Over de hele dataset normaliseren"
                },
                {
                    "en": "Creating instances of the model",
                    "es": "Crear instancias del modelo",
                    "de": "Instanzen des Modells erstellen",
                    "nl": "Instanties van het model aanmaken"
                },
                {
                    "en": "Counting the number of samples",
                    "es": "Contar el número de muestras",
                    "de": "Die Anzahl der Proben zählen",
                    "nl": "Het aantal samples tellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Instance normalization normalizes each channel of each sample independently, common in style transfer.",
                "es": "La normalización de instancia normaliza cada canal de cada muestra, común en transferencia de estilo.",
                "de": "Instanznormalisierung normalisiert jeden Kanal jeder Probe, häufig bei Stiltransfer verwendet.",
                "nl": "Instantienormalisatie normaliseert elk kanaal van elk sample onafhankelijk, gangbaar bij stijloverdracht."
            }
        },
        {
            "question": {
                "en": "What is the cross-validation technique?",
                "es": "¿Qué es la técnica de validación cruzada?",
                "de": "Was ist die Kreuzvalidierungstechnik?",
                "nl": "Wat is de kruisvalidatietechniek?"
            },
            "options": [
                {
                    "en": "Splitting data into folds and rotating test sets",
                    "es": "Dividir datos en pliegues y rotar conjuntos de prueba",
                    "de": "Daten in Falten teilen und Testsets rotieren",
                    "nl": "Data in vouwen splitsen en testsets roteren"
                },
                {
                    "en": "Training on two datasets simultaneously",
                    "es": "Entrenar con dos conjuntos de datos simultáneamente",
                    "de": "Gleichzeitig auf zwei Datensätzen trainieren",
                    "nl": "Tegelijkertijd op twee datasets trainen"
                },
                {
                    "en": "Using one sample for validation",
                    "es": "Usar una muestra para validación",
                    "de": "Eine Stichprobe zur Validierung verwenden",
                    "nl": "Eén sample voor validatie gebruiken"
                },
                {
                    "en": "Validating across different models",
                    "es": "Validar a través de diferentes modelos",
                    "de": "Über verschiedene Modelle validieren",
                    "nl": "Valideren over verschillende modellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Cross-validation divides data into k folds, training on k-1 and testing on the remaining fold each time.",
                "es": "La validación cruzada divide los datos en k pliegues, entrenando en k-1 y probando en el restante.",
                "de": "Kreuzvalidierung teilt Daten in k Falten und trainiert auf k-1, testet auf der restlichen.",
                "nl": "Kruisvalidatie verdeelt data in k vouwen, traint op k-1 en test op de overgebleven vouw."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a learning rate finder?",
                "es": "¿Cuál es el propósito de un buscador de tasa de aprendizaje?",
                "de": "Was ist der Zweck eines Lernraten-Finders?",
                "nl": "Wat is het doel van een leersnelheidzoeker?"
            },
            "options": [
                {
                    "en": "Find the optimal learning rate range",
                    "es": "Encontrar el rango óptimo de tasa de aprendizaje",
                    "de": "Den optimalen Lernratenbereich finden",
                    "nl": "Het optimale leersnelheidbereik vinden"
                },
                {
                    "en": "Automatically train the model",
                    "es": "Entrenar el modelo automáticamente",
                    "de": "Das Modell automatisch trainieren",
                    "nl": "Het model automatisch trainen"
                },
                {
                    "en": "Select the best model architecture",
                    "es": "Seleccionar la mejor arquitectura de modelo",
                    "de": "Die beste Modellarchitektur auswählen",
                    "nl": "De beste modelarchitectuur selecteren"
                },
                {
                    "en": "Determine the training dataset size",
                    "es": "Determinar el tamaño del conjunto de entrenamiento",
                    "de": "Die Größe des Trainingsdatensatzes bestimmen",
                    "nl": "De grootte van de trainingsdataset bepalen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A learning rate finder systematically tests different rates to find the one that trains most effectively.",
                "es": "Un buscador de tasa de aprendizaje prueba sistemáticamente diferentes tasas para la más efectiva.",
                "de": "Ein Lernraten-Finder testet systematisch verschiedene Raten, um die effektivste zu finden.",
                "nl": "Een leersnelheidzoeker test systematisch verschillende snelheden om de meest effectieve te vinden."
            }
        },
        {
            "question": {
                "en": "What is neural architecture search (NAS)?",
                "es": "¿Qué es la búsqueda de arquitectura neuronal (NAS)?",
                "de": "Was ist neuronale Architektursuche (NAS)?",
                "nl": "Wat is neurale architectuurzoeking (NAS)?"
            },
            "options": [
                {
                    "en": "Automated method to find optimal network design",
                    "es": "Método automatizado para encontrar el diseño óptimo de red",
                    "de": "Automatisierte Methode zum Finden des optimalen Netzwerkdesigns",
                    "nl": "Geautomatiseerde methode om optimaal netwerkontwerp te vinden"
                },
                {
                    "en": "Searching for bugs in neural network code",
                    "es": "Buscar errores en el código de la red neuronal",
                    "de": "Nach Fehlern im neuronalen Netzwerkcode suchen",
                    "nl": "Zoeken naar bugs in neurale netwerkcode"
                },
                {
                    "en": "Finding the best training data online",
                    "es": "Encontrar los mejores datos de entrenamiento en línea",
                    "de": "Die besten Trainingsdaten online finden",
                    "nl": "De beste trainingsdata online vinden"
                },
                {
                    "en": "A web search engine for AI papers",
                    "es": "Un motor de búsqueda para artículos de IA",
                    "de": "Eine Suchmaschine für KI-Publikationen",
                    "nl": "Een zoekmachine voor AI-papers"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "NAS automates the design of neural network architectures by searching over possible configurations.",
                "es": "NAS automatiza el diseño de arquitecturas de redes neuronales buscando entre configuraciones posibles.",
                "de": "NAS automatisiert das Design neuronaler Netzwerkarchitekturen durch Suche über mögliche Konfigurationen.",
                "nl": "NAS automatiseert het ontwerp van neurale netwerkarchitecturen door te zoeken over mogelijke configuraties."
            }
        }
    ]
};
