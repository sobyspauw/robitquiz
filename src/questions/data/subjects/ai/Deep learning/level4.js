// Deep learning - level4
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "What does ReLU stand for?",
                "es": "¿Qué significa ReLU?",
                "de": "Wofür steht ReLU?",
                "nl": "Waar staat ReLU voor?"
            },
            "options": [
                {
                    "en": "Rectified Linear Unit",
                    "es": "Unidad Lineal Rectificada",
                    "de": "Gleichgerichtete lineare Einheit",
                    "nl": "Gerectificeerde lineaire eenheid"
                },
                {
                    "en": "Recursive Linear Unit",
                    "es": "Unidad Lineal Recursiva",
                    "de": "Rekursive lineare Einheit",
                    "nl": "Recursieve lineaire eenheid"
                },
                {
                    "en": "Random Linear Unit",
                    "es": "Unidad Lineal Aleatoria",
                    "de": "Zufällige lineare Einheit",
                    "nl": "Willekeurige lineaire eenheid"
                },
                {
                    "en": "Robust Linear Unit",
                    "es": "Unidad Lineal Robusta",
                    "de": "Robuste lineare Einheit",
                    "nl": "Robuuste lineaire eenheid"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "ReLU stands for Rectified Linear Unit, outputting max(0,x) and is one of the most popular activation functions.",
                "es": "ReLU significa Unidad Lineal Rectificada, produce max(0,x) y es una de las funciones de activación más populares.",
                "de": "ReLU steht für Rectified Linear Unit, gibt max(0,x) aus und ist eine der beliebtesten Aktivierungsfunktionen.",
                "nl": "ReLU staat voor Rectified Linear Unit, geeft max(0,x) uit en is een van de populairste activeringsfuncties."
            }
        },
        {
            "question": {
                "en": "What is the output range of the sigmoid function?",
                "es": "¿Cuál es el rango de salida de la función sigmoide?",
                "de": "Was ist der Ausgabebereich der Sigmoidfunktion?",
                "nl": "Wat is het uitvoerbereik van de sigmoïdfunctie?"
            },
            "options": [
                {
                    "en": "Between 0 and 1",
                    "es": "Entre 0 y 1",
                    "de": "Zwischen 0 und 1",
                    "nl": "Tussen 0 en 1"
                },
                {
                    "en": "Between -1 and 1",
                    "es": "Entre -1 y 1",
                    "de": "Zwischen -1 und 1",
                    "nl": "Tussen -1 en 1"
                },
                {
                    "en": "Between 0 and infinity",
                    "es": "Entre 0 e infinito",
                    "de": "Zwischen 0 und unendlich",
                    "nl": "Tussen 0 en oneindig"
                },
                {
                    "en": "Between negative and positive infinity",
                    "es": "Entre infinito negativo y positivo",
                    "de": "Zwischen negativ und positiv unendlich",
                    "nl": "Tussen negatief en positief oneindig"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The sigmoid function squashes all input values into a range between 0 and 1, making it useful for binary classification.",
                "es": "La función sigmoide comprime todos los valores de entrada en un rango entre 0 y 1, útil para clasificación binaria.",
                "de": "Die Sigmoidfunktion komprimiert alle Eingabewerte in einen Bereich zwischen 0 und 1, nützlich für binäre Klassifikation.",
                "nl": "De sigmoïdfunctie perst alle invoerwaarden in een bereik tussen 0 en 1, nuttig voor binaire classificatie."
            }
        },
        {
            "question": {
                "en": "What is a convolution operation?",
                "es": "¿Qué es una operación de convolución?",
                "de": "Was ist eine Faltungsoperation?",
                "nl": "Wat is een convolutiebewerking?"
            },
            "options": [
                {
                    "en": "Sliding a filter over input to extract features",
                    "es": "Deslizar un filtro sobre la entrada para extraer características",
                    "de": "Einen Filter über die Eingabe schieben um Merkmale zu extrahieren",
                    "nl": "Een filter over de invoer schuiven om kenmerken te extraheren"
                },
                {
                    "en": "Adding two matrices together",
                    "es": "Sumar dos matrices",
                    "de": "Zwei Matrizen addieren",
                    "nl": "Twee matrices optellen"
                },
                {
                    "en": "Sorting data alphabetically",
                    "es": "Ordenar datos alfabéticamente",
                    "de": "Daten alphabetisch sortieren",
                    "nl": "Data alfabetisch sorteren"
                },
                {
                    "en": "Splitting data into parts",
                    "es": "Dividir datos en partes",
                    "de": "Daten in Teile aufteilen",
                    "nl": "Data in delen splitsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Convolution slides a small filter across the input data, computing dot products to create feature maps that detect patterns.",
                "es": "La convolución desliza un pequeño filtro sobre los datos de entrada, calculando productos punto para crear mapas de características.",
                "de": "Die Faltung schiebt einen kleinen Filter über die Eingabedaten und berechnet Skalarprodukte, um Merkmalskarten zu erstellen.",
                "nl": "Convolutie schuift een klein filter over de invoerdata en berekent inproducten om kenmerkenkaarten te maken die patronen detecteren."
            }
        },
        {
            "question": {
                "en": "What problem does dropout help prevent?",
                "es": "¿Qué problema ayuda a prevenir el dropout?",
                "de": "Welches Problem hilft Dropout zu verhindern?",
                "nl": "Welk probleem helpt dropout voorkomen?"
            },
            "options": [
                {
                    "en": "Overfitting",
                    "es": "Sobreajuste",
                    "de": "Überanpassung",
                    "nl": "Overfitting"
                },
                {
                    "en": "Underfitting",
                    "es": "Subajuste",
                    "de": "Unteranpassung",
                    "nl": "Underfitting"
                },
                {
                    "en": "Slow training",
                    "es": "Entrenamiento lento",
                    "de": "Langsames Training",
                    "nl": "Langzame training"
                },
                {
                    "en": "Data loss",
                    "es": "Pérdida de datos",
                    "de": "Datenverlust",
                    "nl": "Dataverlies"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Dropout randomly deactivates neurons during training, which prevents the network from relying too heavily on specific neurons.",
                "es": "El dropout desactiva neuronas aleatoriamente durante el entrenamiento, evitando que la red dependa demasiado de neuronas específicas.",
                "de": "Dropout deaktiviert zufällig Neuronen beim Training und verhindert, dass das Netz sich zu stark auf bestimmte Neuronen verlässt.",
                "nl": "Dropout deactiveert willekeurig neuronen tijdens training, wat voorkomt dat het netwerk te veel op specifieke neuronen vertrouwt."
            }
        },
        {
            "question": {
                "en": "Which layer type is best for image recognition?",
                "es": "¿Qué tipo de capa es mejor para reconocimiento de imágenes?",
                "de": "Welcher Schichttyp eignet sich am besten für Bilderkennung?",
                "nl": "Welk laagtype is het beste voor beeldherkenning?"
            },
            "options": [
                {
                    "en": "Convolutional layer",
                    "es": "Capa convolucional",
                    "de": "Faltungsschicht",
                    "nl": "Convolutielaag"
                },
                {
                    "en": "Fully connected layer",
                    "es": "Capa completamente conectada",
                    "de": "Vollständig verbundene Schicht",
                    "nl": "Volledig verbonden laag"
                },
                {
                    "en": "Recurrent layer",
                    "es": "Capa recurrente",
                    "de": "Rekurrente Schicht",
                    "nl": "Recurrente laag"
                },
                {
                    "en": "Embedding layer",
                    "es": "Capa de incrustación",
                    "de": "Einbettungsschicht",
                    "nl": "Embeddinglaag"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Convolutional layers are designed to detect spatial patterns like edges and textures, making them ideal for image tasks.",
                "es": "Las capas convolucionales están diseñadas para detectar patrones espaciales como bordes y texturas, ideales para tareas de imagen.",
                "de": "Faltungsschichten erkennen räumliche Muster wie Kanten und Texturen und eignen sich daher ideal für Bildaufgaben.",
                "nl": "Convolutielagen zijn ontworpen om ruimtelijke patronen zoals randen en texturen te detecteren, ideaal voor beeldtaken."
            }
        },
        {
            "question": {
                "en": "What is the purpose of the learning rate?",
                "es": "¿Cuál es el propósito de la tasa de aprendizaje?",
                "de": "Was ist der Zweck der Lernrate?",
                "nl": "Wat is het doel van de leersnelheid?"
            },
            "options": [
                {
                    "en": "Controls the step size in weight updates",
                    "es": "Controla el tamaño del paso en las actualizaciones de pesos",
                    "de": "Steuert die Schrittgröße bei Gewichtsaktualisierungen",
                    "nl": "Bepaalt de stapgrootte bij gewichtsupdates"
                },
                {
                    "en": "Sets the number of layers",
                    "es": "Establece el número de capas",
                    "de": "Legt die Anzahl der Schichten fest",
                    "nl": "Stelt het aantal lagen in"
                },
                {
                    "en": "Determines the batch size",
                    "es": "Determina el tamaño del lote",
                    "de": "Bestimmt die Batchgröße",
                    "nl": "Bepaalt de batchgrootte"
                },
                {
                    "en": "Chooses the activation function",
                    "es": "Elige la función de activación",
                    "de": "Wählt die Aktivierungsfunktion",
                    "nl": "Kiest de activeringsfunctie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The learning rate controls how much weights change in each training step. Too high causes instability, too low slows learning.",
                "es": "La tasa de aprendizaje controla cuánto cambian los pesos en cada paso. Muy alta causa inestabilidad, muy baja ralentiza el aprendizaje.",
                "de": "Die Lernrate steuert, wie stark sich die Gewichte in jedem Schritt ändern. Zu hoch verursacht Instabilität, zu niedrig verlangsamt das Lernen.",
                "nl": "De leersnelheid bepaalt hoeveel de gewichten veranderen per stap. Te hoog veroorzaakt instabiliteit, te laag vertraagt het leren."
            }
        },
        {
            "question": {
                "en": "What happens during forward propagation?",
                "es": "¿Qué sucede durante la propagación hacia adelante?",
                "de": "Was passiert bei der Vorwärtspropagation?",
                "nl": "Wat gebeurt er tijdens voorwaartse propagatie?"
            },
            "options": [
                {
                    "en": "Input data passes through layers to produce output",
                    "es": "Los datos pasan por las capas para producir una salida",
                    "de": "Eingabedaten durchlaufen Schichten um eine Ausgabe zu erzeugen",
                    "nl": "Invoerdata gaat door lagen om uitvoer te produceren"
                },
                {
                    "en": "Weights are updated based on errors",
                    "es": "Los pesos se actualizan según los errores",
                    "de": "Gewichte werden basierend auf Fehlern aktualisiert",
                    "nl": "Gewichten worden bijgewerkt op basis van fouten"
                },
                {
                    "en": "The model is saved to disk",
                    "es": "El modelo se guarda en disco",
                    "de": "Das Modell wird auf der Festplatte gespeichert",
                    "nl": "Het model wordt opgeslagen op schijf"
                },
                {
                    "en": "Data is deleted from memory",
                    "es": "Los datos se eliminan de la memoria",
                    "de": "Daten werden aus dem Speicher gelöscht",
                    "nl": "Data wordt uit het geheugen verwijderd"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Forward propagation passes input data through each layer, applying weights and activations, to compute the final prediction.",
                "es": "La propagación hacia adelante pasa los datos de entrada por cada capa, aplicando pesos y activaciones, para calcular la predicción final.",
                "de": "Vorwärtspropagation leitet Eingabedaten durch jede Schicht, wendet Gewichte und Aktivierungen an und berechnet die endgültige Vorhersage.",
                "nl": "Voorwaartse propagatie stuurt invoerdata door elke laag, past gewichten en activeringen toe, om de uiteindelijke voorspelling te berekenen."
            }
        },
        {
            "question": {
                "en": "What does backpropagation calculate?",
                "es": "¿Qué calcula la retropropagación?",
                "de": "Was berechnet Backpropagation?",
                "nl": "Wat berekent backpropagation?"
            },
            "options": [
                {
                    "en": "Gradients of the loss with respect to weights",
                    "es": "Gradientes de la pérdida respecto a los pesos",
                    "de": "Gradienten des Verlusts bezüglich der Gewichte",
                    "nl": "Gradiënten van het verlies ten opzichte van gewichten"
                },
                {
                    "en": "The final prediction",
                    "es": "La predicción final",
                    "de": "Die endgültige Vorhersage",
                    "nl": "De uiteindelijke voorspelling"
                },
                {
                    "en": "The number of neurons needed",
                    "es": "El número de neuronas necesarias",
                    "de": "Die benötigte Anzahl an Neuronen",
                    "nl": "Het benodigde aantal neuronen"
                },
                {
                    "en": "The size of the training set",
                    "es": "El tamaño del conjunto de entrenamiento",
                    "de": "Die Größe des Trainingsdatensatzes",
                    "nl": "De grootte van de trainingsset"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Backpropagation computes gradients of the loss function with respect to each weight, showing how to adjust them to reduce error.",
                "es": "La retropropagación calcula gradientes de la función de pérdida respecto a cada peso, mostrando cómo ajustarlos para reducir el error.",
                "de": "Backpropagation berechnet Gradienten der Verlustfunktion bezüglich jedes Gewichts und zeigt, wie sie angepasst werden müssen.",
                "nl": "Backpropagation berekent gradiënten van de verliesfunctie ten opzichte van elk gewicht, om te tonen hoe ze aangepast moeten worden."
            }
        },
        {
            "question": {
                "en": "What is the difference between CNN and RNN?",
                "es": "¿Cuál es la diferencia entre CNN y RNN?",
                "de": "Was ist der Unterschied zwischen CNN und RNN?",
                "nl": "Wat is het verschil tussen CNN en RNN?"
            },
            "options": [
                {
                    "en": "CNN processes spatial data, RNN sequential data",
                    "es": "CNN procesa datos espaciales, RNN datos secuenciales",
                    "de": "CNN verarbeitet räumliche Daten, RNN sequenzielle",
                    "nl": "CNN verwerkt ruimtelijke data, RNN sequentiële data"
                },
                {
                    "en": "CNN is faster than RNN",
                    "es": "CNN es más rápida que RNN",
                    "de": "CNN ist schneller als RNN",
                    "nl": "CNN is sneller dan RNN"
                },
                {
                    "en": "CNN uses more memory than RNN",
                    "es": "CNN usa más memoria que RNN",
                    "de": "CNN benötigt mehr Speicher als RNN",
                    "nl": "CNN gebruikt meer geheugen dan RNN"
                },
                {
                    "en": "There is no real difference",
                    "es": "No hay diferencia real",
                    "de": "Es gibt keinen echten Unterschied",
                    "nl": "Er is geen echt verschil"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "CNNs use filters to detect spatial patterns in images, while RNNs process sequences by maintaining hidden states over time steps.",
                "es": "Las CNN usan filtros para detectar patrones espaciales en imágenes, mientras las RNN procesan secuencias manteniendo estados ocultos en pasos de tiempo.",
                "de": "CNNs verwenden Filter zur Erkennung räumlicher Muster in Bildern, während RNNs Sequenzen verarbeiten und verborgene Zustände über Zeitschritte beibehalten.",
                "nl": "CNN's gebruiken filters om ruimtelijke patronen in afbeeldingen te detecteren, terwijl RNN's reeksen verwerken door verborgen toestanden over tijdstappen bij te houden."
            }
        },
        {
            "question": {
                "en": "Why do deep networks use GPUs for training?",
                "es": "¿Por qué las redes profundas usan GPU para entrenar?",
                "de": "Warum nutzen tiefe Netze GPUs zum Training?",
                "nl": "Waarom gebruiken diepe netwerken GPU's voor training?"
            },
            "options": [
                {
                    "en": "GPUs do many parallel calculations quickly",
                    "es": "Las GPU hacen muchos cálculos paralelos rápidamente",
                    "de": "GPUs führen viele parallele Berechnungen schnell durch",
                    "nl": "GPU's doen snel veel parallelle berekeningen"
                },
                {
                    "en": "GPUs are cheaper than CPUs",
                    "es": "Las GPU son más baratas que las CPU",
                    "de": "GPUs sind billiger als CPUs",
                    "nl": "GPU's zijn goedkoper dan CPU's"
                },
                {
                    "en": "GPUs have more storage",
                    "es": "Las GPU tienen más almacenamiento",
                    "de": "GPUs haben mehr Speicherplatz",
                    "nl": "GPU's hebben meer opslag"
                },
                {
                    "en": "GPUs produce better results",
                    "es": "Las GPU producen mejores resultados",
                    "de": "GPUs erzeugen bessere Ergebnisse",
                    "nl": "GPU's produceren betere resultaten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "GPUs have thousands of cores that perform matrix operations in parallel, drastically speeding up deep learning training.",
                "es": "Las GPU tienen miles de núcleos que realizan operaciones matriciales en paralelo, acelerando drásticamente el entrenamiento de aprendizaje profundo.",
                "de": "GPUs haben Tausende von Kernen, die Matrixoperationen parallel ausführen und das Deep-Learning-Training drastisch beschleunigen.",
                "nl": "GPU's hebben duizenden kernen die matrixbewerkingen parallel uitvoeren, wat de deep learning training drastisch versnelt."
            }
        },
        {
            "question": {
                "en": "What is max pooling used for?",
                "es": "¿Para qué se usa el max pooling?",
                "de": "Wofür wird Max-Pooling verwendet?",
                "nl": "Waarvoor wordt max pooling gebruikt?"
            },
            "options": [
                {
                    "en": "Reducing spatial dimensions of feature maps",
                    "es": "Reducir dimensiones espaciales de mapas de características",
                    "de": "Räumliche Dimensionen von Merkmalskarten reduzieren",
                    "nl": "Ruimtelijke dimensies van kenmerkenkaarten verkleinen"
                },
                {
                    "en": "Increasing the size of images",
                    "es": "Aumentar el tamaño de las imágenes",
                    "de": "Die Größe von Bildern erhöhen",
                    "nl": "De grootte van afbeeldingen vergroten"
                },
                {
                    "en": "Adding more layers to the network",
                    "es": "Añadir más capas a la red",
                    "de": "Dem Netz mehr Schichten hinzufügen",
                    "nl": "Meer lagen toevoegen aan het netwerk"
                },
                {
                    "en": "Connecting neurons together",
                    "es": "Conectar neuronas entre sí",
                    "de": "Neuronen miteinander verbinden",
                    "nl": "Neuronen met elkaar verbinden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Max pooling reduces the spatial size of feature maps by keeping only the maximum value from each region, reducing computation.",
                "es": "El max pooling reduce el tamaño espacial de los mapas de características conservando solo el valor máximo de cada región.",
                "de": "Max-Pooling reduziert die räumliche Größe von Merkmalskarten, indem nur der Maximalwert jeder Region beibehalten wird.",
                "nl": "Max pooling verkleint de ruimtelijke grootte van kenmerkenkaarten door alleen de maximale waarde uit elke regio te behouden."
            }
        },
        {
            "question": {
                "en": "What does batch normalization do?",
                "es": "¿Qué hace la normalización por lotes?",
                "de": "Was macht Batch-Normalisierung?",
                "nl": "Wat doet batchnormalisatie?"
            },
            "options": [
                {
                    "en": "Normalizes layer inputs to speed up training",
                    "es": "Normaliza las entradas de capas para acelerar el entrenamiento",
                    "de": "Normalisiert Schichteingaben um das Training zu beschleunigen",
                    "nl": "Normaliseert laaginvoer om training te versnellen"
                },
                {
                    "en": "Sorts data into equal batches",
                    "es": "Ordena datos en lotes iguales",
                    "de": "Sortiert Daten in gleiche Batches",
                    "nl": "Sorteert data in gelijke batches"
                },
                {
                    "en": "Removes abnormal data points",
                    "es": "Elimina puntos de datos anormales",
                    "de": "Entfernt abnormale Datenpunkte",
                    "nl": "Verwijdert abnormale datapunten"
                },
                {
                    "en": "Increases the batch size automatically",
                    "es": "Aumenta el tamaño del lote automáticamente",
                    "de": "Erhöht automatisch die Batchgröße",
                    "nl": "Vergroot automatisch de batchgrootte"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Batch normalization standardizes inputs to each layer, making training faster and more stable by reducing internal covariate shift.",
                "es": "La normalización por lotes estandariza las entradas de cada capa, haciendo el entrenamiento más rápido y estable al reducir el desplazamiento de covarianza.",
                "de": "Batch-Normalisierung standardisiert die Eingaben jeder Schicht und macht das Training schneller und stabiler durch Reduktion der internen Kovarianzverschiebung.",
                "nl": "Batchnormalisatie standaardiseert invoer van elke laag, maakt training sneller en stabieler door interne covariantieverandering te verminderen."
            }
        },
        {
            "question": {
                "en": "What is transfer learning useful for?",
                "es": "¿Para qué es útil el aprendizaje por transferencia?",
                "de": "Wofür ist Transferlernen nützlich?",
                "nl": "Waarvoor is transfer learning nuttig?"
            },
            "options": [
                {
                    "en": "Training with little data using pre-trained models",
                    "es": "Entrenar con pocos datos usando modelos preentrenados",
                    "de": "Training mit wenig Daten durch vortrainierte Modelle",
                    "nl": "Trainen met weinig data met voorgetrainde modellen"
                },
                {
                    "en": "Transferring data between servers",
                    "es": "Transferir datos entre servidores",
                    "de": "Daten zwischen Servern übertragen",
                    "nl": "Data overbrengen tussen servers"
                },
                {
                    "en": "Moving models to a different language",
                    "es": "Mover modelos a un idioma diferente",
                    "de": "Modelle in eine andere Sprache verschieben",
                    "nl": "Modellen naar een andere taal verplaatsen"
                },
                {
                    "en": "Converting models between frameworks",
                    "es": "Convertir modelos entre marcos",
                    "de": "Modelle zwischen Frameworks konvertieren",
                    "nl": "Modellen tussen frameworks converteren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Transfer learning reuses a model trained on large data for a new task with limited data, saving time and improving performance.",
                "es": "El aprendizaje por transferencia reutiliza un modelo entrenado con muchos datos para una nueva tarea con datos limitados, ahorrando tiempo.",
                "de": "Transferlernen nutzt ein auf großen Datenmengen trainiertes Modell für eine neue Aufgabe mit wenig Daten, spart Zeit und verbessert die Leistung.",
                "nl": "Transfer learning hergebruikt een model getraind op veel data voor een nieuwe taak met beperkte data, wat tijd bespaart en prestaties verbetert."
            }
        },
        {
            "question": {
                "en": "What is the vanishing gradient problem?",
                "es": "¿Qué es el problema del gradiente que desaparece?",
                "de": "Was ist das Vanishing-Gradient-Problem?",
                "nl": "Wat is het verdwijnende gradiëntprobleem?"
            },
            "options": [
                {
                    "en": "Gradients become tiny in deep networks",
                    "es": "Los gradientes se vuelven diminutos en redes profundas",
                    "de": "Gradienten werden in tiefen Netzen winzig",
                    "nl": "Gradiënten worden heel klein in diepe netwerken"
                },
                {
                    "en": "Data gets lost during training",
                    "es": "Los datos se pierden durante el entrenamiento",
                    "de": "Daten gehen beim Training verloren",
                    "nl": "Data gaat verloren tijdens training"
                },
                {
                    "en": "The network shrinks over time",
                    "es": "La red se encoge con el tiempo",
                    "de": "Das Netzwerk schrumpft mit der Zeit",
                    "nl": "Het netwerk krimpt na verloop van tijd"
                },
                {
                    "en": "Neurons stop working",
                    "es": "Las neuronas dejan de funcionar",
                    "de": "Neuronen funktionieren nicht mehr",
                    "nl": "Neuronen stoppen met werken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In deep networks, gradients can become extremely small during backpropagation, preventing early layers from learning effectively.",
                "es": "En redes profundas, los gradientes pueden volverse extremadamente pequeños durante la retropropagación, impidiendo que las primeras capas aprendan.",
                "de": "In tiefen Netzen können Gradienten bei der Backpropagation extrem klein werden, was das Lernen früher Schichten verhindert.",
                "nl": "In diepe netwerken kunnen gradiënten extreem klein worden tijdens backpropagation, waardoor vroege lagen niet effectief leren."
            }
        },
        {
            "question": {
                "en": "How does LSTM solve the vanishing gradient problem?",
                "es": "¿Cómo resuelve LSTM el problema del gradiente que desaparece?",
                "de": "Wie löst LSTM das Vanishing-Gradient-Problem?",
                "nl": "Hoe lost LSTM het verdwijnende gradiëntprobleem op?"
            },
            "options": [
                {
                    "en": "Using gates to control information flow",
                    "es": "Usando compuertas para controlar el flujo de información",
                    "de": "Mit Gates zur Steuerung des Informationsflusses",
                    "nl": "Met gates om de informatiestroom te regelen"
                },
                {
                    "en": "By making the network smaller",
                    "es": "Haciendo la red más pequeña",
                    "de": "Durch Verkleinerung des Netzes",
                    "nl": "Door het netwerk kleiner te maken"
                },
                {
                    "en": "By increasing the learning rate",
                    "es": "Aumentando la tasa de aprendizaje",
                    "de": "Durch Erhöhung der Lernrate",
                    "nl": "Door de leersnelheid te verhogen"
                },
                {
                    "en": "By removing activation functions",
                    "es": "Eliminando funciones de activación",
                    "de": "Durch Entfernen von Aktivierungsfunktionen",
                    "nl": "Door activeringsfuncties te verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "LSTM uses forget, input, and output gates that control which information is kept or discarded, allowing gradients to flow over long sequences.",
                "es": "LSTM usa compuertas de olvido, entrada y salida que controlan qué información se mantiene o descarta, permitiendo que los gradientes fluyan.",
                "de": "LSTM verwendet Vergessens-, Eingabe- und Ausgabe-Gates, die steuern, welche Informationen beibehalten oder verworfen werden.",
                "nl": "LSTM gebruikt vergeet-, invoer- en uitvoergates die bepalen welke informatie behouden of weggegooid wordt, waardoor gradiënten kunnen stromen."
            }
        },
        {
            "question": {
                "en": "What is the Adam optimizer known for?",
                "es": "¿Por qué es conocido el optimizador Adam?",
                "de": "Wofür ist der Adam-Optimierer bekannt?",
                "nl": "Waar staat de Adam-optimizer om bekend?"
            },
            "options": [
                {
                    "en": "Adaptive learning rates for each parameter",
                    "es": "Tasas de aprendizaje adaptativas para cada parámetro",
                    "de": "Adaptive Lernraten für jeden Parameter",
                    "nl": "Adaptieve leersnelheden voor elke parameter"
                },
                {
                    "en": "Being the fastest optimizer",
                    "es": "Ser el optimizador más rápido",
                    "de": "Der schnellste Optimierer zu sein",
                    "nl": "De snelste optimizer zijn"
                },
                {
                    "en": "Using the least memory",
                    "es": "Usar la menor cantidad de memoria",
                    "de": "Am wenigsten Speicher zu verwenden",
                    "nl": "Het minste geheugen gebruiken"
                },
                {
                    "en": "Being named after a person",
                    "es": "Llevar el nombre de una persona",
                    "de": "Nach einer Person benannt zu sein",
                    "nl": "Vernoemd zijn naar een persoon"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Adam maintains separate adaptive learning rates for each parameter using first and second moment estimates of the gradients.",
                "es": "Adam mantiene tasas de aprendizaje adaptativas separadas para cada parámetro usando estimaciones de primer y segundo momento de los gradientes.",
                "de": "Adam unterhält separate adaptive Lernraten für jeden Parameter unter Verwendung von Momenten erster und zweiter Ordnung der Gradienten.",
                "nl": "Adam houdt aparte adaptieve leersnelheden bij voor elke parameter met behulp van eerste en tweede momentschattingen van de gradiënten."
            }
        },
        {
            "question": {
                "en": "What is data augmentation used for in CNNs?",
                "es": "¿Para qué se usa la aumentación de datos en CNN?",
                "de": "Wofür wird Datenaugmentierung bei CNNs verwendet?",
                "nl": "Waarvoor wordt data-augmentatie gebruikt in CNN's?"
            },
            "options": [
                {
                    "en": "Increasing training data by creating variations",
                    "es": "Aumentar datos de entrenamiento creando variaciones",
                    "de": "Trainingsdaten durch Variationen vergrößern",
                    "nl": "Trainingsdata vergroten door variaties te maken"
                },
                {
                    "en": "Making images higher resolution",
                    "es": "Hacer las imágenes de mayor resolución",
                    "de": "Bilder in höherer Auflösung machen",
                    "nl": "Afbeeldingen een hogere resolutie geven"
                },
                {
                    "en": "Removing bad data from the dataset",
                    "es": "Eliminar datos malos del conjunto de datos",
                    "de": "Schlechte Daten aus dem Datensatz entfernen",
                    "nl": "Slechte data uit de dataset verwijderen"
                },
                {
                    "en": "Compressing data to save space",
                    "es": "Comprimir datos para ahorrar espacio",
                    "de": "Daten komprimieren um Platz zu sparen",
                    "nl": "Data comprimeren om ruimte te besparen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Data augmentation creates modified copies of images through rotations, flips, and crops, effectively increasing the training set size.",
                "es": "La aumentación de datos crea copias modificadas de imágenes mediante rotaciones, volteos y recortes, aumentando efectivamente el tamaño del conjunto de datos.",
                "de": "Datenaugmentierung erstellt modifizierte Bildkopien durch Rotationen, Spiegelungen und Beschneidungen und vergrößert so den Trainingsdatensatz.",
                "nl": "Data-augmentatie maakt aangepaste kopieën van afbeeldingen door rotaties, spiegelingen en bijsnijdingen, waardoor de trainingsset effectief groter wordt."
            }
        },
        {
            "question": {
                "en": "What is a residual network (ResNet)?",
                "es": "¿Qué es una red residual (ResNet)?",
                "de": "Was ist ein Residual-Netzwerk (ResNet)?",
                "nl": "Wat is een residueel netwerk (ResNet)?"
            },
            "options": [
                {
                    "en": "A network with skip connections between layers",
                    "es": "Una red con conexiones de salto entre capas",
                    "de": "Ein Netz mit Skip-Verbindungen zwischen Schichten",
                    "nl": "Een netwerk met skipverbindingen tussen lagen"
                },
                {
                    "en": "A network that reuses old data",
                    "es": "Una red que reutiliza datos antiguos",
                    "de": "Ein Netz das alte Daten wiederverwendet",
                    "nl": "Een netwerk dat oude data hergebruikt"
                },
                {
                    "en": "A small leftover network",
                    "es": "Una pequeña red sobrante",
                    "de": "Ein kleines übriges Netzwerk",
                    "nl": "Een klein overgebleven netwerk"
                },
                {
                    "en": "A network for recycling models",
                    "es": "Una red para reciclar modelos",
                    "de": "Ein Netz zum Recyceln von Modellen",
                    "nl": "Een netwerk voor het recyclen van modellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "ResNet uses skip connections that add the input to the output of layers, enabling training of very deep networks with hundreds of layers.",
                "es": "ResNet usa conexiones de salto que suman la entrada a la salida de las capas, permitiendo entrenar redes muy profundas con cientos de capas.",
                "de": "ResNet verwendet Skip-Verbindungen, die den Eingang zum Ausgang der Schichten addieren und das Training sehr tiefer Netze mit Hunderten von Schichten ermöglichen.",
                "nl": "ResNet gebruikt skipverbindingen die de invoer optellen bij de uitvoer van lagen, wat training van zeer diepe netwerken met honderden lagen mogelijk maakt."
            }
        },
        {
            "question": {
                "en": "What is fine-tuning a pre-trained model?",
                "es": "¿Qué es el ajuste fino de un modelo preentrenado?",
                "de": "Was ist die Feinabstimmung eines vortrainierten Modells?",
                "nl": "Wat is het finetunen van een voorgetraind model?"
            },
            "options": [
                {
                    "en": "Continuing training on new specific data",
                    "es": "Continuar el entrenamiento con datos nuevos específicos",
                    "de": "Training mit neuen spezifischen Daten fortsetzen",
                    "nl": "Training voortzetten op nieuwe specifieke data"
                },
                {
                    "en": "Making the model physically smaller",
                    "es": "Hacer el modelo físicamente más pequeño",
                    "de": "Das Modell physisch kleiner machen",
                    "nl": "Het model fysiek kleiner maken"
                },
                {
                    "en": "Deleting unnecessary parameters",
                    "es": "Eliminar parámetros innecesarios",
                    "de": "Unnötige Parameter löschen",
                    "nl": "Onnodige parameters verwijderen"
                },
                {
                    "en": "Rebuilding the model from scratch",
                    "es": "Reconstruir el modelo desde cero",
                    "de": "Das Modell von Grund auf neu aufbauen",
                    "nl": "Het model vanaf nul opnieuw opbouwen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Fine-tuning takes a model pre-trained on a large dataset and continues training it on a smaller task-specific dataset.",
                "es": "El ajuste fino toma un modelo preentrenado en un gran conjunto de datos y continúa entrenándolo en un conjunto de datos específico más pequeño.",
                "de": "Feinabstimmung nimmt ein auf einem großen Datensatz vortrainiertes Modell und trainiert es auf einem kleineren aufgabenspezifischen Datensatz weiter.",
                "nl": "Finetunen neemt een model voorgetraind op een grote dataset en traint het verder op een kleinere taakspecifieke dataset."
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
                    "en": "Converting outputs to class probabilities",
                    "es": "Convertir salidas en probabilidades de clase",
                    "de": "Ausgaben in Klassenwahrscheinlichkeiten umwandeln",
                    "nl": "Uitvoer omzetten naar klassekansen"
                },
                {
                    "en": "Making calculations softer",
                    "es": "Hacer los cálculos más suaves",
                    "de": "Berechnungen weicher machen",
                    "nl": "Berekeningen zachter maken"
                },
                {
                    "en": "Reducing the network size",
                    "es": "Reducir el tamaño de la red",
                    "de": "Die Netzwerkgröße reduzieren",
                    "nl": "De netwerkgrootte verkleinen"
                },
                {
                    "en": "Finding the maximum value",
                    "es": "Encontrar el valor máximo",
                    "de": "Den Maximalwert finden",
                    "nl": "De maximale waarde vinden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Softmax converts raw output scores into probabilities that sum to one, commonly used in the final layer for multi-class classification.",
                "es": "Softmax convierte puntuaciones brutas en probabilidades que suman uno, comúnmente usado en la capa final para clasificación multiclase.",
                "de": "Softmax wandelt rohe Ausgabewerte in Wahrscheinlichkeiten um, die sich zu eins summieren, häufig in der letzten Schicht für Mehrklassenklassifikation.",
                "nl": "Softmax zet ruwe uitvoerscores om in kansen die samen één zijn, vaak gebruikt in de laatste laag voor meerklassige classificatie."
            }
        },
        {
            "question": {
                "en": "What is cross-entropy loss commonly used for?",
                "es": "¿Para qué se usa comúnmente la pérdida de entropía cruzada?",
                "de": "Wofür wird Kreuzentropie-Verlust häufig verwendet?",
                "nl": "Waarvoor wordt kruisentropieverlies vaak gebruikt?"
            },
            "options": [
                {
                    "en": "Classification tasks",
                    "es": "Tareas de clasificación",
                    "de": "Klassifikationsaufgaben",
                    "nl": "Classificatietaken"
                },
                {
                    "en": "Regression tasks",
                    "es": "Tareas de regresión",
                    "de": "Regressionsaufgaben",
                    "nl": "Regressietaken"
                },
                {
                    "en": "Data visualization",
                    "es": "Visualización de datos",
                    "de": "Datenvisualisierung",
                    "nl": "Datavisualisatie"
                },
                {
                    "en": "Feature extraction",
                    "es": "Extracción de características",
                    "de": "Merkmalsextraktion",
                    "nl": "Kenmerkextractie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Cross-entropy loss measures how well predicted probabilities match the true class labels, making it ideal for classification tasks.",
                "es": "La pérdida de entropía cruzada mide qué tan bien las probabilidades predichas coinciden con las etiquetas verdaderas, ideal para clasificación.",
                "de": "Kreuzentropie-Verlust misst, wie gut vorhergesagte Wahrscheinlichkeiten mit den wahren Labels übereinstimmen, ideal für Klassifikation.",
                "nl": "Kruisentropieverlies meet hoe goed voorspelde kansen overeenkomen met de werkelijke labels, ideaal voor classificatietaken."
            }
        },
        {
            "question": {
                "en": "What is weight decay in deep learning?",
                "es": "¿Qué es la disminución de pesos en aprendizaje profundo?",
                "de": "Was ist Gewichtsabnahme im Deep Learning?",
                "nl": "Wat is gewichtsverval in deep learning?"
            },
            "options": [
                {
                    "en": "A regularization that penalizes large weights",
                    "es": "Una regularización que penaliza pesos grandes",
                    "de": "Eine Regularisierung die große Gewichte bestraft",
                    "nl": "Een regularisatie die grote gewichten bestraft"
                },
                {
                    "en": "Weights naturally decreasing over time",
                    "es": "Pesos disminuyendo naturalmente con el tiempo",
                    "de": "Gewichte die natürlich mit der Zeit abnehmen",
                    "nl": "Gewichten die natuurlijk afnemen in de tijd"
                },
                {
                    "en": "Removing unused weights",
                    "es": "Eliminar pesos no utilizados",
                    "de": "Unbenutzte Gewichte entfernen",
                    "nl": "Ongebruikte gewichten verwijderen"
                },
                {
                    "en": "Making all weights zero",
                    "es": "Hacer todos los pesos cero",
                    "de": "Alle Gewichte auf Null setzen",
                    "nl": "Alle gewichten op nul zetten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Weight decay adds a penalty proportional to the size of weights to the loss function, preventing weights from growing too large.",
                "es": "La disminución de pesos añade una penalización proporcional al tamaño de los pesos a la función de pérdida, evitando que crezcan demasiado.",
                "de": "Gewichtsabnahme fügt der Verlustfunktion eine Strafe proportional zur Gewichtsgröße hinzu und verhindert, dass Gewichte zu groß werden.",
                "nl": "Gewichtsverval voegt een straf toe aan de verliesfunctie die evenredig is met de gewichtsgrootte, om te voorkomen dat gewichten te groot worden."
            }
        },
        {
            "question": {
                "en": "What is an embedding layer used for?",
                "es": "¿Para qué se usa una capa de incrustación?",
                "de": "Wofür wird eine Einbettungsschicht verwendet?",
                "nl": "Waarvoor wordt een embeddinglaag gebruikt?"
            },
            "options": [
                {
                    "en": "Converting discrete tokens to dense vectors",
                    "es": "Convertir tokens discretos en vectores densos",
                    "de": "Diskrete Tokens in dichte Vektoren umwandeln",
                    "nl": "Discrete tokens omzetten naar dichte vectoren"
                },
                {
                    "en": "Embedding images in documents",
                    "es": "Incrustar imágenes en documentos",
                    "de": "Bilder in Dokumente einbetten",
                    "nl": "Afbeeldingen in documenten inbedden"
                },
                {
                    "en": "Hiding layers from view",
                    "es": "Ocultar capas de la vista",
                    "de": "Schichten vor der Ansicht verstecken",
                    "nl": "Lagen verbergen voor het zicht"
                },
                {
                    "en": "Connecting to external databases",
                    "es": "Conectar a bases de datos externas",
                    "de": "Mit externen Datenbanken verbinden",
                    "nl": "Verbinden met externe databases"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Embedding layers convert discrete items like words or categories into continuous dense vectors that capture semantic relationships.",
                "es": "Las capas de incrustación convierten elementos discretos como palabras en vectores densos continuos que capturan relaciones semánticas.",
                "de": "Einbettungsschichten wandeln diskrete Elemente wie Wörter in kontinuierliche dichte Vektoren um, die semantische Beziehungen erfassen.",
                "nl": "Embeddinglagen zetten discrete items zoals woorden om naar continue dichte vectoren die semantische relaties vastleggen."
            }
        },
        {
            "question": {
                "en": "What is the purpose of early stopping?",
                "es": "¿Cuál es el propósito de la parada temprana?",
                "de": "Was ist der Zweck des frühen Stoppens?",
                "nl": "Wat is het doel van early stopping?"
            },
            "options": [
                {
                    "en": "Preventing overfitting by stopping at the right time",
                    "es": "Prevenir sobreajuste deteniendo en el momento justo",
                    "de": "Überanpassung durch Stoppen zum richtigen Zeitpunkt verhindern",
                    "nl": "Overfitting voorkomen door op het juiste moment te stoppen"
                },
                {
                    "en": "Saving electricity",
                    "es": "Ahorrar electricidad",
                    "de": "Strom sparen",
                    "nl": "Elektriciteit besparen"
                },
                {
                    "en": "Finishing training as fast as possible",
                    "es": "Terminar el entrenamiento lo más rápido posible",
                    "de": "Das Training so schnell wie möglich beenden",
                    "nl": "Training zo snel mogelijk afronden"
                },
                {
                    "en": "Stopping before errors occur",
                    "es": "Detenerse antes de que ocurran errores",
                    "de": "Stoppen bevor Fehler auftreten",
                    "nl": "Stoppen voordat fouten optreden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Early stopping monitors validation performance and stops training when it starts degrading, preventing the model from overfitting.",
                "es": "La parada temprana monitorea el rendimiento de validación y detiene el entrenamiento cuando empieza a degradarse, previniendo el sobreajuste.",
                "de": "Frühes Stoppen überwacht die Validierungsleistung und beendet das Training, wenn sie sich verschlechtert, um Überanpassung zu verhindern.",
                "nl": "Early stopping monitort validatieprestaties en stopt de training wanneer deze verslechtert, om overfitting te voorkomen."
            }
        },
        {
            "question": {
                "en": "What is a GAN discriminator?",
                "es": "¿Qué es un discriminador GAN?",
                "de": "Was ist ein GAN-Diskriminator?",
                "nl": "Wat is een GAN-discriminator?"
            },
            "options": [
                {
                    "en": "A network that distinguishes real from fake data",
                    "es": "Una red que distingue datos reales de falsos",
                    "de": "Ein Netz das echte von falschen Daten unterscheidet",
                    "nl": "Een netwerk dat echte van nepdata onderscheidt"
                },
                {
                    "en": "A network that creates new images",
                    "es": "Una red que crea nuevas imágenes",
                    "de": "Ein Netz das neue Bilder erzeugt",
                    "nl": "Een netwerk dat nieuwe afbeeldingen maakt"
                },
                {
                    "en": "A filter that removes noise",
                    "es": "Un filtro que elimina ruido",
                    "de": "Ein Filter der Rauschen entfernt",
                    "nl": "Een filter dat ruis verwijdert"
                },
                {
                    "en": "A tool for data labeling",
                    "es": "Una herramienta para etiquetar datos",
                    "de": "Ein Werkzeug zur Datenbeschriftung",
                    "nl": "Een tool voor datalabeling"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The GAN discriminator is trained to tell real data from generated fake data, pushing the generator to produce more realistic output.",
                "es": "El discriminador GAN se entrena para distinguir datos reales de datos falsos generados, empujando al generador a producir salidas más realistas.",
                "de": "Der GAN-Diskriminator wird trainiert, echte von generierten falschen Daten zu unterscheiden, und treibt den Generator zu realistischerer Ausgabe.",
                "nl": "De GAN-discriminator wordt getraind om echte data van gegenereerde nepdata te onderscheiden, wat de generator dwingt realistischere uitvoer te produceren."
            }
        },
        {
            "question": {
                "en": "What is the GAN generator?",
                "es": "¿Qué es el generador GAN?",
                "de": "Was ist der GAN-Generator?",
                "nl": "Wat is de GAN-generator?"
            },
            "options": [
                {
                    "en": "A network that creates fake realistic data",
                    "es": "Una red que crea datos falsos realistas",
                    "de": "Ein Netz das realistische Fälschungen erzeugt",
                    "nl": "Een netwerk dat realistische nepdata maakt"
                },
                {
                    "en": "A network that judges data quality",
                    "es": "Una red que juzga la calidad de datos",
                    "de": "Ein Netz das Datenqualität beurteilt",
                    "nl": "Een netwerk dat datakwaliteit beoordeelt"
                },
                {
                    "en": "A power generator for GPUs",
                    "es": "Un generador de energía para GPU",
                    "de": "Ein Stromgenerator für GPUs",
                    "nl": "Een stroomgenerator voor GPU's"
                },
                {
                    "en": "A tool for generating code",
                    "es": "Una herramienta para generar código",
                    "de": "Ein Werkzeug zur Codegenerierung",
                    "nl": "Een tool voor het genereren van code"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The GAN generator takes random noise as input and learns to produce realistic data that can fool the discriminator.",
                "es": "El generador GAN toma ruido aleatorio como entrada y aprende a producir datos realistas que pueden engañar al discriminador.",
                "de": "Der GAN-Generator nimmt zufälliges Rauschen als Eingabe und lernt, realistische Daten zu erzeugen, die den Diskriminator täuschen können.",
                "nl": "De GAN-generator neemt willekeurige ruis als invoer en leert realistische data te produceren die de discriminator kan misleiden."
            }
        },
        {
            "question": {
                "en": "What is a transformer's self-attention mechanism?",
                "es": "¿Qué es el mecanismo de autoatención de un transformador?",
                "de": "Was ist der Selbstaufmerksamkeitsmechanismus eines Transformers?",
                "nl": "Wat is het zelfaandachtsmechanisme van een transformer?"
            },
            "options": [
                {
                    "en": "Each element attends to all other elements",
                    "es": "Cada elemento atiende a todos los demás elementos",
                    "de": "Jedes Element beachtet alle anderen Elemente",
                    "nl": "Elk element let op alle andere elementen"
                },
                {
                    "en": "The model pays attention to itself only",
                    "es": "El modelo solo presta atención a sí mismo",
                    "de": "Das Modell achtet nur auf sich selbst",
                    "nl": "Het model let alleen op zichzelf"
                },
                {
                    "en": "Neurons activate themselves automatically",
                    "es": "Las neuronas se activan automáticamente",
                    "de": "Neuronen aktivieren sich automatisch",
                    "nl": "Neuronen activeren zichzelf automatisch"
                },
                {
                    "en": "The model focuses on one input only",
                    "es": "El modelo se enfoca en una sola entrada",
                    "de": "Das Modell konzentriert sich auf nur eine Eingabe",
                    "nl": "Het model focust op slechts één invoer"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Self-attention lets each element in the input sequence compute attention scores with every other element, capturing long-range dependencies.",
                "es": "La autoatención permite que cada elemento calcule puntuaciones de atención con todos los demás elementos, capturando dependencias de largo alcance.",
                "de": "Selbstaufmerksamkeit ermöglicht jedem Element, Aufmerksamkeitswerte mit allen anderen Elementen zu berechnen und Langstreckenabhängigkeiten zu erfassen.",
                "nl": "Zelfaandacht laat elk element aandachtsscores berekenen met alle andere elementen, waardoor langereikafhankelijkheden worden vastgelegd."
            }
        },
        {
            "question": {
                "en": "What is gradient clipping used for?",
                "es": "¿Para qué se usa el recorte de gradientes?",
                "de": "Wofür wird Gradienten-Clipping verwendet?",
                "nl": "Waarvoor wordt gradiëntclipping gebruikt?"
            },
            "options": [
                {
                    "en": "Preventing exploding gradients",
                    "es": "Prevenir gradientes explosivos",
                    "de": "Explodierende Gradienten verhindern",
                    "nl": "Exploderende gradiënten voorkomen"
                },
                {
                    "en": "Making training faster",
                    "es": "Hacer el entrenamiento más rápido",
                    "de": "Das Training schneller machen",
                    "nl": "Training sneller maken"
                },
                {
                    "en": "Reducing the model size",
                    "es": "Reducir el tamaño del modelo",
                    "de": "Die Modellgröße reduzieren",
                    "nl": "De modelgrootte verkleinen"
                },
                {
                    "en": "Removing unnecessary layers",
                    "es": "Eliminar capas innecesarias",
                    "de": "Unnötige Schichten entfernen",
                    "nl": "Onnodige lagen verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Gradient clipping caps gradient values at a threshold to prevent them from becoming too large and destabilizing training.",
                "es": "El recorte de gradientes limita los valores de gradiente a un umbral para evitar que se vuelvan demasiado grandes y desestabilicen el entrenamiento.",
                "de": "Gradienten-Clipping begrenzt Gradientenwerte auf einen Schwellenwert, um zu verhindern, dass sie zu groß werden und das Training destabilisieren.",
                "nl": "Gradiëntclipping beperkt gradiëntwaarden tot een drempel om te voorkomen dat ze te groot worden en de training destabiliseren."
            }
        },
        {
            "question": {
                "en": "What is a hyperparameter search?",
                "es": "¿Qué es una búsqueda de hiperparámetros?",
                "de": "Was ist eine Hyperparametersuche?",
                "nl": "Wat is een hyperparameterzoekopdracht?"
            },
            "options": [
                {
                    "en": "Finding the best settings for model training",
                    "es": "Encontrar los mejores ajustes para el entrenamiento del modelo",
                    "de": "Die besten Einstellungen für das Modelltraining finden",
                    "nl": "De beste instellingen vinden voor modeltraining"
                },
                {
                    "en": "Searching for data on the internet",
                    "es": "Buscar datos en internet",
                    "de": "Nach Daten im Internet suchen",
                    "nl": "Zoeken naar data op internet"
                },
                {
                    "en": "Looking for bugs in the code",
                    "es": "Buscar errores en el código",
                    "de": "Nach Fehlern im Code suchen",
                    "nl": "Zoeken naar fouten in de code"
                },
                {
                    "en": "Finding the best hardware",
                    "es": "Encontrar el mejor hardware",
                    "de": "Die beste Hardware finden",
                    "nl": "De beste hardware vinden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Hyperparameter search systematically tries different combinations of settings like learning rate and batch size to find the best model.",
                "es": "La búsqueda de hiperparámetros prueba sistemáticamente diferentes combinaciones de ajustes como tasa de aprendizaje y tamaño de lote.",
                "de": "Hyperparametersuche probiert systematisch verschiedene Kombinationen von Einstellungen wie Lernrate und Batchgröße aus.",
                "nl": "Hyperparameterzoekopdracht probeert systematisch verschillende combinaties van instellingen zoals leersnelheid en batchgrootte."
            }
        },
        {
            "question": {
                "en": "What is knowledge distillation?",
                "es": "¿Qué es la destilación de conocimiento?",
                "de": "Was ist Wissensdestillation?",
                "nl": "Wat is kennisdestillatie?"
            },
            "options": [
                {
                    "en": "Training a small model to match a large model",
                    "es": "Entrenar un modelo pequeño para igualar uno grande",
                    "de": "Ein kleines Modell trainieren um ein großes nachzuahmen",
                    "nl": "Een klein model trainen om een groot model na te doen"
                },
                {
                    "en": "Filtering impure data",
                    "es": "Filtrar datos impuros",
                    "de": "Unreine Daten filtern",
                    "nl": "Onzuivere data filteren"
                },
                {
                    "en": "Extracting key features from data",
                    "es": "Extraer características clave de los datos",
                    "de": "Schlüsselmerkmale aus Daten extrahieren",
                    "nl": "Belangrijke kenmerken uit data extraheren"
                },
                {
                    "en": "Compressing data files",
                    "es": "Comprimir archivos de datos",
                    "de": "Datendateien komprimieren",
                    "nl": "Databestanden comprimeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Knowledge distillation trains a smaller student model to mimic the outputs of a larger teacher model, creating a compact but capable model.",
                "es": "La destilación de conocimiento entrena un modelo estudiante más pequeño para imitar las salidas de un modelo maestro más grande.",
                "de": "Wissensdestillation trainiert ein kleineres Schülermodell, die Ausgaben eines größeren Lehrermodells nachzuahmen.",
                "nl": "Kennisdestillatie traint een kleiner studentmodel om de uitvoer van een groter lerarenmodel na te bootsen."
            }
        },
        {
            "question": {
                "en": "What does a deconvolution layer do?",
                "es": "¿Qué hace una capa de deconvolución?",
                "de": "Was macht eine Dekonvolutionsschicht?",
                "nl": "Wat doet een deconvolutielaag?"
            },
            "options": [
                {
                    "en": "Upsamples feature maps to larger sizes",
                    "es": "Aumenta el tamaño de los mapas de características",
                    "de": "Vergrößert Merkmalskarten auf größere Dimensionen",
                    "nl": "Vergroot kenmerkenkaarten naar grotere afmetingen"
                },
                {
                    "en": "Reduces feature maps to smaller sizes",
                    "es": "Reduce los mapas de características a tamaños menores",
                    "de": "Verkleinert Merkmalskarten",
                    "nl": "Verkleint kenmerkenkaarten"
                },
                {
                    "en": "Reverses the training process",
                    "es": "Invierte el proceso de entrenamiento",
                    "de": "Kehrt den Trainingsprozess um",
                    "nl": "Keert het trainingsproces om"
                },
                {
                    "en": "Removes convolution effects",
                    "es": "Elimina efectos de convolución",
                    "de": "Entfernt Faltungseffekte",
                    "nl": "Verwijdert convolutie-effecten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Deconvolution (transposed convolution) upsamples feature maps, increasing their spatial dimensions, useful in image generation and segmentation.",
                "es": "La deconvolución (convolución transpuesta) aumenta el muestreo de los mapas de características, útil en generación y segmentación de imágenes.",
                "de": "Dekonvolution (transponierte Faltung) vergrößert Merkmalskarten und erhöht ihre räumlichen Dimensionen, nützlich bei Bilderzeugung und Segmentierung.",
                "nl": "Deconvolutie (getransponeerde convolutie) vergroot kenmerkenkaarten en is nuttig bij beeldgeneratie en segmentatie."
            }
        },
        {
            "question": {
                "en": "What is model pruning?",
                "es": "¿Qué es la poda del modelo?",
                "de": "Was ist Modell-Pruning?",
                "nl": "Wat is model pruning?"
            },
            "options": [
                {
                    "en": "Removing unimportant connections to make models smaller",
                    "es": "Eliminar conexiones poco importantes para reducir modelos",
                    "de": "Unwichtige Verbindungen entfernen um Modelle kleiner zu machen",
                    "nl": "Onbelangrijke verbindingen verwijderen om modellen kleiner te maken"
                },
                {
                    "en": "Adding more layers to the model",
                    "es": "Añadir más capas al modelo",
                    "de": "Dem Modell mehr Schichten hinzufügen",
                    "nl": "Meer lagen toevoegen aan het model"
                },
                {
                    "en": "Trimming the training data",
                    "es": "Recortar los datos de entrenamiento",
                    "de": "Trainingsdaten beschneiden",
                    "nl": "Trainingsdata bijsnijden"
                },
                {
                    "en": "Cutting the training time in half",
                    "es": "Reducir el tiempo de entrenamiento a la mitad",
                    "de": "Die Trainingszeit halbieren",
                    "nl": "De trainingstijd halveren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Model pruning removes weights or neurons with minimal impact on performance, creating a smaller and faster model for deployment.",
                "es": "La poda del modelo elimina pesos o neuronas con mínimo impacto en el rendimiento, creando un modelo más pequeño y rápido para implementación.",
                "de": "Modell-Pruning entfernt Gewichte oder Neuronen mit minimalem Einfluss auf die Leistung und erstellt ein kleineres, schnelleres Modell.",
                "nl": "Model pruning verwijdert gewichten of neuronen met minimale impact op prestaties, wat een kleiner en sneller model oplevert."
            }
        },
        {
            "question": {
                "en": "What is a diffusion model?",
                "es": "¿Qué es un modelo de difusión?",
                "de": "Was ist ein Diffusionsmodell?",
                "nl": "Wat is een diffusiemodel?"
            },
            "options": [
                {
                    "en": "Generates data by gradually removing noise",
                    "es": "Genera datos eliminando ruido gradualmente",
                    "de": "Erzeugt Daten durch schrittweises Entfernen von Rauschen",
                    "nl": "Genereert data door geleidelijk ruis te verwijderen"
                },
                {
                    "en": "Spreads data across multiple servers",
                    "es": "Distribuye datos entre múltiples servidores",
                    "de": "Verteilt Daten auf mehrere Server",
                    "nl": "Verspreidt data over meerdere servers"
                },
                {
                    "en": "Models how liquids spread",
                    "es": "Modela cómo se esparcen los líquidos",
                    "de": "Modelliert wie sich Flüssigkeiten ausbreiten",
                    "nl": "Modelleert hoe vloeistoffen zich verspreiden"
                },
                {
                    "en": "Transfers knowledge between models",
                    "es": "Transfiere conocimiento entre modelos",
                    "de": "Überträgt Wissen zwischen Modellen",
                    "nl": "Draagt kennis over tussen modellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Diffusion models learn to reverse a noise-adding process, generating high-quality data like images by progressively denoising random noise.",
                "es": "Los modelos de difusión aprenden a invertir un proceso de adición de ruido, generando datos de alta calidad eliminando progresivamente el ruido.",
                "de": "Diffusionsmodelle lernen einen Rausch-Hinzufügungsprozess umzukehren und erzeugen hochwertige Daten durch progressives Entrauschen.",
                "nl": "Diffusiemodellen leren een ruistoevoegingsproces om te keren en genereren hoogwaardige data door progressief ruis te verwijderen."
            }
        },
        {
            "question": {
                "en": "What is mixed precision training?",
                "es": "¿Qué es el entrenamiento de precisión mixta?",
                "de": "Was ist Training mit gemischter Präzision?",
                "nl": "Wat is mixed precision training?"
            },
            "options": [
                {
                    "en": "Using both 16-bit and 32-bit numbers to train faster",
                    "es": "Usar números de 16 y 32 bits para entrenar más rápido",
                    "de": "16-Bit- und 32-Bit-Zahlen nutzen um schneller zu trainieren",
                    "nl": "Zowel 16-bit als 32-bit getallen gebruiken om sneller te trainen"
                },
                {
                    "en": "Mixing different types of data together",
                    "es": "Mezclar diferentes tipos de datos",
                    "de": "Verschiedene Datentypen mischen",
                    "nl": "Verschillende typen data mixen"
                },
                {
                    "en": "Training with varying accuracy levels",
                    "es": "Entrenar con diferentes niveles de precisión",
                    "de": "Mit verschiedenen Genauigkeitsstufen trainieren",
                    "nl": "Trainen met variërende nauwkeurigheidsniveaus"
                },
                {
                    "en": "Combining multiple models at once",
                    "es": "Combinar múltiples modelos a la vez",
                    "de": "Mehrere Modelle gleichzeitig kombinieren",
                    "nl": "Meerdere modellen tegelijk combineren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Mixed precision training uses 16-bit floats for most operations and 32-bit for critical parts, speeding up training while maintaining accuracy.",
                "es": "El entrenamiento de precisión mixta usa flotantes de 16 bits para la mayoría de operaciones y 32 bits para partes críticas, acelerando el entrenamiento.",
                "de": "Training mit gemischter Präzision nutzt 16-Bit-Gleitkomma für die meisten Operationen und 32-Bit für kritische Teile, was das Training beschleunigt.",
                "nl": "Mixed precision training gebruikt 16-bit floats voor de meeste bewerkingen en 32-bit voor kritische delen, wat training versnelt met behoud van nauwkeurigheid."
            }
        },
        {
            "question": {
                "en": "What is a multi-head attention mechanism?",
                "es": "¿Qué es un mecanismo de atención multicabeza?",
                "de": "Was ist ein Multi-Head-Attention-Mechanismus?",
                "nl": "Wat is een multi-head aandachtsmechanisme?"
            },
            "options": [
                {
                    "en": "Multiple attention layers running in parallel",
                    "es": "Múltiples capas de atención ejecutándose en paralelo",
                    "de": "Mehrere Aufmerksamkeitsschichten parallel ausgeführt",
                    "nl": "Meerdere aandachtslagen die parallel draaien"
                },
                {
                    "en": "A model with multiple outputs",
                    "es": "Un modelo con múltiples salidas",
                    "de": "Ein Modell mit mehreren Ausgaben",
                    "nl": "Een model met meerdere uitvoer"
                },
                {
                    "en": "Several people controlling one model",
                    "es": "Varias personas controlando un modelo",
                    "de": "Mehrere Personen die ein Modell steuern",
                    "nl": "Meerdere personen die één model besturen"
                },
                {
                    "en": "A multi-headed robot",
                    "es": "Un robot con múltiples cabezas",
                    "de": "Ein mehrköpfiger Roboter",
                    "nl": "Een robot met meerdere hoofden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Multi-head attention runs several attention operations in parallel, allowing the model to focus on different aspects of the input simultaneously.",
                "es": "La atención multicabeza ejecuta varias operaciones de atención en paralelo, permitiendo al modelo enfocarse en diferentes aspectos de la entrada simultáneamente.",
                "de": "Multi-Head-Attention führt mehrere Aufmerksamkeitsoperationen parallel aus und ermöglicht dem Modell, sich gleichzeitig auf verschiedene Aspekte zu konzentrieren.",
                "nl": "Multi-head aandacht voert meerdere aandachtsbewerkingen parallel uit, zodat het model zich tegelijk op verschillende aspecten van de invoer kan richten."
            }
        },
        {
            "question": {
                "en": "What is label smoothing?",
                "es": "¿Qué es el suavizado de etiquetas?",
                "de": "Was ist Label-Glättung?",
                "nl": "Wat is label smoothing?"
            },
            "options": [
                {
                    "en": "Softening hard labels to reduce overconfidence",
                    "es": "Suavizar etiquetas duras para reducir la sobreconfianza",
                    "de": "Harte Labels glätten um Übervertrauen zu reduzieren",
                    "nl": "Harde labels verzachten om oververtrouwen te verminderen"
                },
                {
                    "en": "Making text labels more readable",
                    "es": "Hacer las etiquetas de texto más legibles",
                    "de": "Textlabels lesbarer machen",
                    "nl": "Tekstlabels leesbaarder maken"
                },
                {
                    "en": "Removing duplicate labels",
                    "es": "Eliminar etiquetas duplicadas",
                    "de": "Doppelte Labels entfernen",
                    "nl": "Dubbele labels verwijderen"
                },
                {
                    "en": "Sorting labels alphabetically",
                    "es": "Ordenar etiquetas alfabéticamente",
                    "de": "Labels alphabetisch sortieren",
                    "nl": "Labels alfabetisch sorteren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Label smoothing replaces hard 0/1 labels with soft values like 0.1/0.9, preventing the model from becoming overly confident in its predictions.",
                "es": "El suavizado de etiquetas reemplaza etiquetas duras 0/1 con valores suaves como 0.1/0.9, evitando que el modelo sea demasiado confiado.",
                "de": "Label-Glättung ersetzt harte 0/1-Labels durch weiche Werte wie 0.1/0.9 und verhindert, dass das Modell zu selbstsicher wird.",
                "nl": "Label smoothing vervangt harde 0/1 labels door zachte waarden zoals 0.1/0.9, om te voorkomen dat het model te zelfverzekerd wordt."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a validation set?",
                "es": "¿Cuál es el propósito de un conjunto de validación?",
                "de": "Was ist der Zweck eines Validierungsdatensatzes?",
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
                    "en": "Testing the final model",
                    "es": "Probar el modelo final",
                    "de": "Das fertige Modell testen",
                    "nl": "Het uiteindelijke model testen"
                },
                {
                    "en": "Training the model",
                    "es": "Entrenar el modelo",
                    "de": "Das Modell trainieren",
                    "nl": "Het model trainen"
                },
                {
                    "en": "Cleaning the data",
                    "es": "Limpiar los datos",
                    "de": "Die Daten bereinigen",
                    "nl": "De data opschonen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A validation set is used to evaluate the model during training and tune hyperparameters without touching the test set.",
                "es": "Un conjunto de validación se usa para evaluar el modelo durante el entrenamiento y ajustar hiperparámetros sin tocar el conjunto de prueba.",
                "de": "Ein Validierungsdatensatz wird verwendet, um das Modell während des Trainings zu bewerten und Hyperparameter abzustimmen, ohne den Testdatensatz zu berühren.",
                "nl": "Een validatieset wordt gebruikt om het model tijdens training te evalueren en hyperparameters af te stellen zonder de testset aan te raken."
            }
        },
        {
            "question": {
                "en": "What is model quantization?",
                "es": "¿Qué es la cuantización de modelos?",
                "de": "Was ist Modellquantisierung?",
                "nl": "Wat is modelkwantisatie?"
            },
            "options": [
                {
                    "en": "Reducing precision of weights to make models smaller",
                    "es": "Reducir la precisión de pesos para hacer modelos más pequeños",
                    "de": "Gewichtspräzision reduzieren um Modelle kleiner zu machen",
                    "nl": "Precisie van gewichten verminderen om modellen kleiner te maken"
                },
                {
                    "en": "Counting the number of parameters",
                    "es": "Contar el número de parámetros",
                    "de": "Die Anzahl der Parameter zählen",
                    "nl": "Het aantal parameters tellen"
                },
                {
                    "en": "Measuring model performance",
                    "es": "Medir el rendimiento del modelo",
                    "de": "Die Modellleistung messen",
                    "nl": "Modelprestaties meten"
                },
                {
                    "en": "Splitting a model into parts",
                    "es": "Dividir un modelo en partes",
                    "de": "Ein Modell in Teile aufteilen",
                    "nl": "Een model in delen splitsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Quantization converts model weights from 32-bit floats to lower precision like 8-bit integers, reducing model size and speeding up inference.",
                "es": "La cuantización convierte los pesos del modelo de flotantes de 32 bits a menor precisión como enteros de 8 bits, reduciendo tamaño y acelerando la inferencia.",
                "de": "Quantisierung wandelt Modellgewichte von 32-Bit-Gleitkomma in niedrigere Präzision wie 8-Bit-Ganzzahlen um und reduziert Größe und beschleunigt Inferenz.",
                "nl": "Kwantisatie converteert modelgewichten van 32-bit floats naar lagere precisie zoals 8-bit integers, wat de grootte verkleint en inferentie versnelt."
            }
        },
        {
            "question": {
                "en": "What is a U-Net used for?",
                "es": "¿Para qué se usa U-Net?",
                "de": "Wofür wird U-Net verwendet?",
                "nl": "Waarvoor wordt U-Net gebruikt?"
            },
            "options": [
                {
                    "en": "Image segmentation tasks",
                    "es": "Tareas de segmentación de imágenes",
                    "de": "Bildsegmentierungsaufgaben",
                    "nl": "Beeldsegmentatietaken"
                },
                {
                    "en": "Text translation",
                    "es": "Traducción de texto",
                    "de": "Textübersetzung",
                    "nl": "Tekstvertaling"
                },
                {
                    "en": "Speech recognition",
                    "es": "Reconocimiento de voz",
                    "de": "Spracherkennung",
                    "nl": "Spraakherkenning"
                },
                {
                    "en": "Music generation",
                    "es": "Generación de música",
                    "de": "Musikerzeugung",
                    "nl": "Muziekgeneratie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "U-Net is a CNN architecture with an encoder-decoder structure and skip connections, widely used for medical image segmentation.",
                "es": "U-Net es una arquitectura CNN con estructura codificador-decodificador y conexiones de salto, ampliamente usada en segmentación de imágenes médicas.",
                "de": "U-Net ist eine CNN-Architektur mit Encoder-Decoder-Struktur und Skip-Verbindungen, weit verbreitet in der medizinischen Bildsegmentierung.",
                "nl": "U-Net is een CNN-architectuur met encoder-decoder structuur en skipverbindingen, veel gebruikt voor medische beeldsegmentatie."
            }
        },
        {
            "question": {
                "en": "What is the purpose of padding in convolutions?",
                "es": "¿Cuál es el propósito del relleno en convoluciones?",
                "de": "Was ist der Zweck von Padding bei Faltungen?",
                "nl": "Wat is het doel van padding bij convoluties?"
            },
            "options": [
                {
                    "en": "Preserving the spatial size of the output",
                    "es": "Preservar el tamaño espacial de la salida",
                    "de": "Die räumliche Größe der Ausgabe bewahren",
                    "nl": "De ruimtelijke grootte van de uitvoer behouden"
                },
                {
                    "en": "Adding more training data",
                    "es": "Añadir más datos de entrenamiento",
                    "de": "Mehr Trainingsdaten hinzufügen",
                    "nl": "Meer trainingsdata toevoegen"
                },
                {
                    "en": "Protecting the model from noise",
                    "es": "Proteger el modelo del ruido",
                    "de": "Das Modell vor Rauschen schützen",
                    "nl": "Het model beschermen tegen ruis"
                },
                {
                    "en": "Making the filters larger",
                    "es": "Hacer los filtros más grandes",
                    "de": "Die Filter größer machen",
                    "nl": "De filters groter maken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Padding adds zeros around the input borders so that the output feature map keeps the same spatial dimensions as the input.",
                "es": "El relleno añade ceros alrededor de los bordes de entrada para que el mapa de características mantenga las mismas dimensiones espaciales.",
                "de": "Padding fügt Nullen um die Eingaberänder hinzu, damit die Ausgabe-Merkmalskarte die gleichen räumlichen Dimensionen wie die Eingabe behält.",
                "nl": "Padding voegt nullen toe rond de invoerranden zodat de uitvoer-kenmerkenkaart dezelfde ruimtelijke dimensies behoudt als de invoer."
            }
        },
        {
            "question": {
                "en": "What is the role of the bias term in a neuron?",
                "es": "¿Cuál es el papel del término de sesgo en una neurona?",
                "de": "Welche Rolle spielt der Bias-Term in einem Neuron?",
                "nl": "Wat is de rol van de biasterm in een neuron?"
            },
            "options": [
                {
                    "en": "Shifts the activation function output",
                    "es": "Desplaza la salida de la función de activación",
                    "de": "Verschiebt die Ausgabe der Aktivierungsfunktion",
                    "nl": "Verschuift de uitvoer van de activeringsfunctie"
                },
                {
                    "en": "Makes the neuron fire faster",
                    "es": "Hace que la neurona se active más rápido",
                    "de": "Lässt das Neuron schneller feuern",
                    "nl": "Laat het neuron sneller vuren"
                },
                {
                    "en": "Connects to other neurons",
                    "es": "Se conecta a otras neuronas",
                    "de": "Verbindet sich mit anderen Neuronen",
                    "nl": "Verbindt met andere neuronen"
                },
                {
                    "en": "Stores the learning rate",
                    "es": "Almacena la tasa de aprendizaje",
                    "de": "Speichert die Lernrate",
                    "nl": "Slaat de leersnelheid op"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The bias term allows the activation function to be shifted, giving the neuron more flexibility to fit the data correctly.",
                "es": "El término de sesgo permite desplazar la función de activación, dando a la neurona más flexibilidad para ajustarse correctamente a los datos.",
                "de": "Der Bias-Term ermöglicht die Verschiebung der Aktivierungsfunktion und gibt dem Neuron mehr Flexibilität, die Daten korrekt anzupassen.",
                "nl": "De biasterm maakt het mogelijk de activeringsfunctie te verschuiven, wat het neuron meer flexibiliteit geeft om de data correct te benaderen."
            }
        },
        {
            "question": {
                "en": "What is the Leaky ReLU function?",
                "es": "¿Qué es la función Leaky ReLU?",
                "de": "Was ist die Leaky-ReLU-Funktion?",
                "nl": "Wat is de Leaky ReLU-functie?"
            },
            "options": [
                {
                    "en": "ReLU that allows small negative values to pass",
                    "es": "ReLU que permite pasar pequeños valores negativos",
                    "de": "ReLU die kleine negative Werte durchlässt",
                    "nl": "ReLU die kleine negatieve waarden doorlaat"
                },
                {
                    "en": "A broken version of ReLU",
                    "es": "Una versión rota de ReLU",
                    "de": "Eine kaputte Version von ReLU",
                    "nl": "Een kapotte versie van ReLU"
                },
                {
                    "en": "ReLU that leaks memory",
                    "es": "ReLU que pierde memoria",
                    "de": "ReLU die Speicher verliert",
                    "nl": "ReLU die geheugen lekt"
                },
                {
                    "en": "A slower version of ReLU",
                    "es": "Una versión más lenta de ReLU",
                    "de": "Eine langsamere Version von ReLU",
                    "nl": "Een langzamere versie van ReLU"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Leaky ReLU allows a small gradient for negative inputs instead of zero, preventing the dying ReLU problem where neurons stop learning.",
                "es": "Leaky ReLU permite un pequeño gradiente para entradas negativas en lugar de cero, previniendo el problema de neuronas muertas.",
                "de": "Leaky ReLU erlaubt einen kleinen Gradienten für negative Eingaben statt Null und verhindert das Problem sterbender Neuronen.",
                "nl": "Leaky ReLU laat een kleine gradiënt door voor negatieve invoer in plaats van nul, wat het probleem van dode neuronen voorkomt."
            }
        },
        {
            "question": {
                "en": "What is a confusion matrix?",
                "es": "¿Qué es una matriz de confusión?",
                "de": "Was ist eine Konfusionsmatrix?",
                "nl": "Wat is een verwarringsmatrix?"
            },
            "options": [
                {
                    "en": "A table showing correct and incorrect predictions",
                    "es": "Una tabla que muestra predicciones correctas e incorrectas",
                    "de": "Eine Tabelle mit korrekten und falschen Vorhersagen",
                    "nl": "Een tabel met correcte en onjuiste voorspellingen"
                },
                {
                    "en": "A matrix that confuses the model",
                    "es": "Una matriz que confunde al modelo",
                    "de": "Eine Matrix die das Modell verwirrt",
                    "nl": "Een matrix die het model in de war brengt"
                },
                {
                    "en": "A random number generator",
                    "es": "Un generador de números aleatorios",
                    "de": "Ein Zufallszahlengenerator",
                    "nl": "Een willekeurige getallengenerator"
                },
                {
                    "en": "A visualization of network layers",
                    "es": "Una visualización de capas de red",
                    "de": "Eine Visualisierung von Netzwerkschichten",
                    "nl": "Een visualisatie van netwerklagen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A confusion matrix shows true positives, true negatives, false positives, and false negatives for each class in a classification task.",
                "es": "Una matriz de confusión muestra verdaderos positivos, verdaderos negativos, falsos positivos y falsos negativos para cada clase.",
                "de": "Eine Konfusionsmatrix zeigt richtig Positive, richtig Negative, falsch Positive und falsch Negative für jede Klasse einer Klassifikation.",
                "nl": "Een verwarringsmatrix toont juist positieven, juist negatieven, fout positieven en fout negatieven voor elke klasse in een classificatietaak."
            }
        },
        {
            "question": {
                "en": "What is the F1 score?",
                "es": "¿Qué es la puntuación F1?",
                "de": "Was ist der F1-Score?",
                "nl": "Wat is de F1-score?"
            },
            "options": [
                {
                    "en": "Harmonic mean of precision and recall",
                    "es": "Media armónica de precisión y exhaustividad",
                    "de": "Harmonisches Mittel von Präzision und Recall",
                    "nl": "Harmonisch gemiddelde van precisie en recall"
                },
                {
                    "en": "The fastest model score",
                    "es": "La puntuación del modelo más rápido",
                    "de": "Die Punktzahl des schnellsten Modells",
                    "nl": "De score van het snelste model"
                },
                {
                    "en": "First-place accuracy ranking",
                    "es": "Clasificación de precisión de primer lugar",
                    "de": "Erstplatzierte Genauigkeitsranking",
                    "nl": "Eerstgeplaatste nauwkeurigheidsranglijst"
                },
                {
                    "en": "A Formula 1 racing metric",
                    "es": "Una métrica de carreras de Fórmula 1",
                    "de": "Eine Formel-1-Rennmetrik",
                    "nl": "Een Formule 1-racemaatstaf"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The F1 score balances precision and recall into a single metric, especially useful when classes are imbalanced.",
                "es": "La puntuación F1 equilibra precisión y exhaustividad en una sola métrica, especialmente útil cuando las clases están desequilibradas.",
                "de": "Der F1-Score balanciert Präzision und Recall in einer einzigen Metrik, besonders nützlich bei unausgewogenen Klassen.",
                "nl": "De F1-score balanceert precisie en recall in één maatstaf, vooral nuttig wanneer klassen onevenwichtig zijn."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a test set?",
                "es": "¿Cuál es el propósito de un conjunto de prueba?",
                "de": "Was ist der Zweck eines Testdatensatzes?",
                "nl": "Wat is het doel van een testset?"
            },
            "options": [
                {
                    "en": "Final evaluation of model performance",
                    "es": "Evaluación final del rendimiento del modelo",
                    "de": "Endgültige Bewertung der Modellleistung",
                    "nl": "Eindevaluatie van modelprestaties"
                },
                {
                    "en": "Training the model",
                    "es": "Entrenar el modelo",
                    "de": "Das Modell trainieren",
                    "nl": "Het model trainen"
                },
                {
                    "en": "Tuning hyperparameters",
                    "es": "Ajustar hiperparámetros",
                    "de": "Hyperparameter abstimmen",
                    "nl": "Hyperparameters afstemmen"
                },
                {
                    "en": "Data preprocessing",
                    "es": "Preprocesamiento de datos",
                    "de": "Datenvorverarbeitung",
                    "nl": "Datavoorverwerking"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The test set provides an unbiased final evaluation of how well the model generalizes to completely unseen data.",
                "es": "El conjunto de prueba proporciona una evaluación final imparcial de qué tan bien generaliza el modelo a datos completamente no vistos.",
                "de": "Der Testdatensatz bietet eine unvoreingenommene endgültige Bewertung, wie gut das Modell auf völlig ungesehene Daten generalisiert.",
                "nl": "De testset biedt een onbevooroordeelde eindevaluatie van hoe goed het model generaliseert naar volledig onbekende data."
            }
        },
        {
            "question": {
                "en": "What is a feature extractor in a CNN?",
                "es": "¿Qué es un extractor de características en una CNN?",
                "de": "Was ist ein Merkmalsextraktor in einem CNN?",
                "nl": "Wat is een kenmerkextractor in een CNN?"
            },
            "options": [
                {
                    "en": "The convolutional layers that detect patterns",
                    "es": "Las capas convolucionales que detectan patrones",
                    "de": "Die Faltungsschichten die Muster erkennen",
                    "nl": "De convolutielagen die patronen detecteren"
                },
                {
                    "en": "A tool that removes features",
                    "es": "Una herramienta que elimina características",
                    "de": "Ein Werkzeug das Merkmale entfernt",
                    "nl": "Een tool dat kenmerken verwijdert"
                },
                {
                    "en": "The output layer only",
                    "es": "Solo la capa de salida",
                    "de": "Nur die Ausgabeschicht",
                    "nl": "Alleen de uitvoerlaag"
                },
                {
                    "en": "A data cleaning pipeline",
                    "es": "Un proceso de limpieza de datos",
                    "de": "Eine Datenbereinigungspipeline",
                    "nl": "Een data-opschoningspijplijn"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In a CNN, the convolutional and pooling layers act as a feature extractor, automatically learning to detect patterns at different levels.",
                "es": "En una CNN, las capas convolucionales y de agrupación actúan como extractor de características, aprendiendo a detectar patrones a diferentes niveles.",
                "de": "In einem CNN fungieren die Faltungs- und Pooling-Schichten als Merkmalsextraktor und lernen automatisch, Muster auf verschiedenen Ebenen zu erkennen.",
                "nl": "In een CNN fungeren de convolutie- en poolinglagen als kenmerkextractor en leren automatisch patronen op verschillende niveaus te detecteren."
            }
        },
        {
            "question": {
                "en": "What is a 1x1 convolution used for?",
                "es": "¿Para qué se usa una convolución 1x1?",
                "de": "Wofür wird eine 1x1-Faltung verwendet?",
                "nl": "Waarvoor wordt een 1x1 convolutie gebruikt?"
            },
            "options": [
                {
                    "en": "Changing the number of feature channels",
                    "es": "Cambiar el número de canales de características",
                    "de": "Die Anzahl der Merkmalskanäle ändern",
                    "nl": "Het aantal kenmerkkanalen veranderen"
                },
                {
                    "en": "Detecting single pixel patterns",
                    "es": "Detectar patrones de un solo píxel",
                    "de": "Einzelpixel-Muster erkennen",
                    "nl": "Patronen van één pixel detecteren"
                },
                {
                    "en": "Reducing the image to one pixel",
                    "es": "Reducir la imagen a un píxel",
                    "de": "Das Bild auf ein Pixel reduzieren",
                    "nl": "De afbeelding tot één pixel verkleinen"
                },
                {
                    "en": "Nothing useful",
                    "es": "Nada útil",
                    "de": "Nichts Nützliches",
                    "nl": "Niets nuttigs"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A 1x1 convolution changes the number of channels (depth) of a feature map without affecting its spatial dimensions, useful for dimensionality reduction.",
                "es": "Una convolución 1x1 cambia el número de canales de un mapa de características sin afectar sus dimensiones espaciales, útil para reducción de dimensionalidad.",
                "de": "Eine 1x1-Faltung ändert die Anzahl der Kanäle einer Merkmalskarte ohne deren räumliche Dimensionen zu beeinflussen.",
                "nl": "Een 1x1 convolutie verandert het aantal kanalen van een kenmerkenkaart zonder de ruimtelijke dimensies te beïnvloeden, nuttig voor dimensiereductie."
            }
        },
        {
            "question": {
                "en": "What is depthwise separable convolution?",
                "es": "¿Qué es la convolución separable en profundidad?",
                "de": "Was ist tiefenseparierbare Faltung?",
                "nl": "Wat is dieptescheidbare convolutie?"
            },
            "options": [
                {
                    "en": "Splitting convolution into depthwise and pointwise steps",
                    "es": "Dividir la convolución en pasos en profundidad y puntual",
                    "de": "Faltung in tiefenweise und punktweise Schritte aufteilen",
                    "nl": "Convolutie splitsen in dieptegewijze en puntsgewijze stappen"
                },
                {
                    "en": "A very deep convolution layer",
                    "es": "Una capa de convolución muy profunda",
                    "de": "Eine sehr tiefe Faltungsschicht",
                    "nl": "Een zeer diepe convolutielaag"
                },
                {
                    "en": "Removing depth from feature maps",
                    "es": "Eliminar profundidad de los mapas de características",
                    "de": "Tiefe aus Merkmalskarten entfernen",
                    "nl": "Diepte verwijderen uit kenmerkenkaarten"
                },
                {
                    "en": "A convolution that cannot be separated",
                    "es": "Una convolución que no se puede separar",
                    "de": "Eine Faltung die nicht getrennt werden kann",
                    "nl": "Een convolutie die niet gescheiden kan worden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Depthwise separable convolution splits a standard convolution into depthwise and 1x1 pointwise operations, greatly reducing computation.",
                "es": "La convolución separable en profundidad divide una convolución estándar en operaciones en profundidad y puntuales 1x1, reduciendo mucho el cálculo.",
                "de": "Tiefenseparierbare Faltung teilt eine Standardfaltung in tiefenweise und 1x1-punktweise Operationen auf und reduziert den Rechenaufwand erheblich.",
                "nl": "Dieptescheidbare convolutie splitst een standaardconvolutie in dieptegewijze en 1x1 puntsgewijze bewerkingen, wat de berekening sterk vermindert."
            }
        },
        {
            "question": {
                "en": "What is global average pooling?",
                "es": "¿Qué es el pooling de promedio global?",
                "de": "Was ist Global Average Pooling?",
                "nl": "Wat is globale gemiddelde pooling?"
            },
            "options": [
                {
                    "en": "Averaging all values in each feature map",
                    "es": "Promediar todos los valores de cada mapa de características",
                    "de": "Alle Werte in jeder Merkmalskarte mitteln",
                    "nl": "Alle waarden in elke kenmerkenkaart middelen"
                },
                {
                    "en": "Finding the global maximum",
                    "es": "Encontrar el máximo global",
                    "de": "Das globale Maximum finden",
                    "nl": "Het globale maximum vinden"
                },
                {
                    "en": "Pooling data from around the world",
                    "es": "Agrupar datos de todo el mundo",
                    "de": "Daten aus der ganzen Welt zusammenfassen",
                    "nl": "Data van over de hele wereld samenvoegen"
                },
                {
                    "en": "Computing the average batch size",
                    "es": "Calcular el tamaño promedio del lote",
                    "de": "Die durchschnittliche Batchgröße berechnen",
                    "nl": "De gemiddelde batchgrootte berekenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Global average pooling computes the mean of each entire feature map, reducing it to a single number per channel before classification.",
                "es": "El pooling de promedio global calcula la media de cada mapa de características completo, reduciéndolo a un solo número por canal antes de la clasificación.",
                "de": "Global Average Pooling berechnet den Mittelwert jeder gesamten Merkmalskarte und reduziert sie vor der Klassifikation auf eine Zahl pro Kanal.",
                "nl": "Globale gemiddelde pooling berekent het gemiddelde van elke volledige kenmerkenkaart en reduceert het tot één getal per kanaal vóór classificatie."
            }
        },
        {
            "question": {
                "en": "What is a learning rate warmup?",
                "es": "¿Qué es un calentamiento de tasa de aprendizaje?",
                "de": "Was ist ein Lernraten-Aufwärmen?",
                "nl": "Wat is een leersnelheidsopwarming?"
            },
            "options": [
                {
                    "en": "Gradually increasing learning rate at start of training",
                    "es": "Aumentar gradualmente la tasa al inicio del entrenamiento",
                    "de": "Lernrate zu Trainingsbeginn schrittweise erhöhen",
                    "nl": "Leersnelheid geleidelijk verhogen aan het begin van training"
                },
                {
                    "en": "Heating up the GPU before training",
                    "es": "Calentar la GPU antes de entrenar",
                    "de": "Die GPU vor dem Training aufwärmen",
                    "nl": "De GPU opwarmen voor training"
                },
                {
                    "en": "Running a small test before training",
                    "es": "Ejecutar una pequeña prueba antes de entrenar",
                    "de": "Vor dem Training einen kleinen Test ausführen",
                    "nl": "Een kleine test uitvoeren voor training"
                },
                {
                    "en": "Preloading data into memory",
                    "es": "Precargar datos en la memoria",
                    "de": "Daten in den Speicher vorladen",
                    "nl": "Data vooraf in het geheugen laden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Learning rate warmup starts training with a very small rate and gradually increases it, helping stabilize early training steps.",
                "es": "El calentamiento de tasa de aprendizaje comienza con una tasa muy pequeña y la aumenta gradualmente, estabilizando los primeros pasos del entrenamiento.",
                "de": "Lernraten-Aufwärmen beginnt das Training mit einer sehr kleinen Rate und erhöht sie schrittweise, um die frühen Trainingsschritte zu stabilisieren.",
                "nl": "Leersnelheidsopwarming begint training met een zeer lage snelheid en verhoogt deze geleidelijk, wat vroege trainingsstappen stabiliseert."
            }
        },
        {
            "question": {
                "en": "What is the dying ReLU problem?",
                "es": "¿Qué es el problema de ReLU muerta?",
                "de": "Was ist das Problem sterbender ReLU?",
                "nl": "Wat is het dode ReLU-probleem?"
            },
            "options": [
                {
                    "en": "Neurons always output zero and stop learning",
                    "es": "Las neuronas siempre dan cero y dejan de aprender",
                    "de": "Neuronen geben immer Null aus und lernen nicht mehr",
                    "nl": "Neuronen geven altijd nul uit en stoppen met leren"
                },
                {
                    "en": "ReLU uses too much memory",
                    "es": "ReLU usa demasiada memoria",
                    "de": "ReLU verbraucht zu viel Speicher",
                    "nl": "ReLU gebruikt te veel geheugen"
                },
                {
                    "en": "ReLU causes the network to crash",
                    "es": "ReLU hace que la red se bloquee",
                    "de": "ReLU lässt das Netzwerk abstürzen",
                    "nl": "ReLU laat het netwerk crashen"
                },
                {
                    "en": "ReLU produces infinite outputs",
                    "es": "ReLU produce salidas infinitas",
                    "de": "ReLU erzeugt unendliche Ausgaben",
                    "nl": "ReLU produceert oneindige uitvoer"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The dying ReLU problem occurs when neurons get stuck outputting zero for all inputs, effectively becoming permanently inactive.",
                "es": "El problema de ReLU muerta ocurre cuando las neuronas quedan atrapadas dando cero para todas las entradas, volviéndose permanentemente inactivas.",
                "de": "Das Problem sterbender ReLU tritt auf, wenn Neuronen für alle Eingaben Null ausgeben und dauerhaft inaktiv werden.",
                "nl": "Het dode ReLU-probleem treedt op wanneer neuronen vastlopen op nul uitvoer voor alle invoer en permanent inactief worden."
            }
        },
        {
            "question": {
                "en": "What is cosine annealing?",
                "es": "¿Qué es el recocido coseno?",
                "de": "Was ist Cosine Annealing?",
                "nl": "Wat is cosinus-afkoeling?"
            },
            "options": [
                {
                    "en": "A learning rate schedule following a cosine curve",
                    "es": "Un programa de tasa de aprendizaje siguiendo una curva coseno",
                    "de": "Ein Lernraten-Zeitplan der einer Kosinuskurve folgt",
                    "nl": "Een leersnelheidschema dat een cosinuscurve volgt"
                },
                {
                    "en": "A method for cooling GPUs",
                    "es": "Un método para enfriar GPU",
                    "de": "Eine Methode zur GPU-Kühlung",
                    "nl": "Een methode om GPU's te koelen"
                },
                {
                    "en": "Rotating images by cosine angles",
                    "es": "Rotar imágenes por ángulos coseno",
                    "de": "Bilder um Kosinuswinkel drehen",
                    "nl": "Afbeeldingen roteren met cosinushoeken"
                },
                {
                    "en": "A trigonometric activation function",
                    "es": "Una función de activación trigonométrica",
                    "de": "Eine trigonometrische Aktivierungsfunktion",
                    "nl": "Een trigonometrische activeringsfunctie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Cosine annealing gradually decreases the learning rate following a cosine curve, allowing smooth transitions and potential restarts.",
                "es": "El recocido coseno disminuye gradualmente la tasa de aprendizaje siguiendo una curva coseno, permitiendo transiciones suaves y posibles reinicios.",
                "de": "Cosine Annealing senkt die Lernrate allmählich entlang einer Kosinuskurve, ermöglicht sanfte Übergänge und mögliche Neustarts.",
                "nl": "Cosinus-afkoeling verlaagt de leersnelheid geleidelijk volgens een cosinuscurve, wat soepele overgangen en mogelijke herstarts mogelijk maakt."
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
                    "de": "Durch Vergleich ähnlicher und verschiedener Paare lernen",
                    "nl": "Leren door vergelijkbare en verschillende paren te vergelijken"
                },
                {
                    "en": "Adjusting screen contrast",
                    "es": "Ajustar contraste de pantalla",
                    "de": "Bildschirmkontrast anpassen",
                    "nl": "Schermcontrast aanpassen"
                },
                {
                    "en": "Comparing prices",
                    "es": "Comparar precios",
                    "de": "Preise vergleichen",
                    "nl": "Prijzen vergelijken"
                },
                {
                    "en": "A debate technique",
                    "es": "Una técnica de debate",
                    "de": "Eine Debattentechnik",
                    "nl": "Een debattechniek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Contrastive learning trains models by pulling similar pairs closer and pushing different apart.",
                "es": "El aprendizaje contrastivo entrena acercando pares similares y alejando diferentes.",
                "de": "Kontrastives Lernen trainiert durch Annäherung ähnlicher und Abstoßung verschiedener Paare.",
                "nl": "Contrastief leren traint modellen door vergelijkbare paren dichter bij elkaar te trekken."
            }
        },
        {
            "question": {
                "en": "What is a neural network layer?",
                "es": "¿Qué es una capa de red neuronal?",
                "de": "Was ist eine neuronale Netzschicht?",
                "nl": "Wat is een neurale netwerklaag?"
            },
            "options": [
                {
                    "en": "A layer of paint",
                    "es": "Una capa de pintura",
                    "de": "Eine Farbschicht",
                    "nl": "Een verflaag"
                },
                {
                    "en": "A geological formation",
                    "es": "Una formación geológica",
                    "de": "Eine geologische Formation",
                    "nl": "Een geologische formatie"
                },
                {
                    "en": "A group of neurons processing data",
                    "es": "Un grupo de neuronas procesando datos",
                    "de": "Eine Gruppe von Neuronen die Daten verarbeiten",
                    "nl": "Een groep neuronen die data verwerken"
                },
                {
                    "en": "A cake layer",
                    "es": "Una capa de pastel",
                    "de": "Eine Tortenschicht",
                    "nl": "Een taartlaag"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A neural network layer is a collection of neurons that transforms input data.",
                "es": "Una capa es una colección de neuronas que transforma datos de entrada.",
                "de": "Eine Schicht ist eine Sammlung von Neuronen die Eingabedaten transformiert.",
                "nl": "Een neurale netwerklaag is een verzameling neuronen die invoerdata transformeert."
            }
        },
        {
            "question": {
                "en": "What is a hidden layer?",
                "es": "¿Qué es una capa oculta?",
                "de": "Was ist eine versteckte Schicht?",
                "nl": "Wat is een verborgen laag?"
            },
            "options": [
                {
                    "en": "A layer between input and output",
                    "es": "Una capa entre entrada y salida",
                    "de": "Eine Schicht zwischen Eingang und Ausgang",
                    "nl": "Een laag tussen invoer en uitvoer"
                },
                {
                    "en": "A secret room",
                    "es": "Una habitación secreta",
                    "de": "Ein geheimer Raum",
                    "nl": "Een geheime kamer"
                },
                {
                    "en": "An invisible text field",
                    "es": "Un campo de texto invisible",
                    "de": "Ein unsichtbares Textfeld",
                    "nl": "Een onzichtbaar tekstveld"
                },
                {
                    "en": "A hidden file",
                    "es": "Un archivo oculto",
                    "de": "Eine versteckte Datei",
                    "nl": "Een verborgen bestand"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Hidden layers process data between input and output layers in a neural network.",
                "es": "Las capas ocultas procesan datos entre las capas de entrada y salida.",
                "de": "Versteckte Schichten verarbeiten Daten zwischen Eingangs- und Ausgangsschicht.",
                "nl": "Verborgen lagen verwerken data tussen de invoer- en uitvoerlagen in een neuraal netwerk."
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
                    "en": "Organizing batches of products",
                    "es": "Organizar lotes de productos",
                    "de": "Produktchargen organisieren",
                    "nl": "Productpartijen organiseren"
                },
                {
                    "en": "A cooking technique",
                    "es": "Una técnica de cocina",
                    "de": "Eine Kochtechnik",
                    "nl": "Een kooktechniek"
                },
                {
                    "en": "Normalizing layer inputs during training",
                    "es": "Normalizar entradas de capas durante el entrenamiento",
                    "de": "Schichteingaben während des Trainings normalisieren",
                    "nl": "Laaginvoer normaliseren tijdens training"
                },
                {
                    "en": "A cleaning method",
                    "es": "Un método de limpieza",
                    "de": "Eine Reinigungsmethode",
                    "nl": "Een schoonmaakmethode"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Batch normalization normalizes layer inputs to stabilize and speed up training.",
                "es": "La normalización por lotes normaliza entradas para estabilizar el entrenamiento.",
                "de": "Batch-Normalisierung normalisiert Eingaben zur Stabilisierung des Trainings.",
                "nl": "Batchnormalisatie normaliseert laaginvoer om training te stabiliseren en versnellen."
            }
        },
        {
            "question": {
                "en": "What is a GAN?",
                "es": "¿Qué es una GAN?",
                "de": "Was ist ein GAN?",
                "nl": "Wat is een GAN?"
            },
            "options": [
                {
                    "en": "Generative Adversarial Network",
                    "es": "Red Generativa Adversarial",
                    "de": "Generatives Adversariales Netzwerk",
                    "nl": "Generatief Adversarieel Netwerk"
                },
                {
                    "en": "A cooking tool",
                    "es": "Una herramienta de cocina",
                    "de": "Ein Kochwerkzeug",
                    "nl": "Een keukengerei"
                },
                {
                    "en": "A social network",
                    "es": "Una red social",
                    "de": "Ein soziales Netzwerk",
                    "nl": "Een sociaal netwerk"
                },
                {
                    "en": "A game engine",
                    "es": "Un motor de juegos",
                    "de": "Eine Spielengine",
                    "nl": "Een game-engine"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A GAN consists of a generator and discriminator that compete to create realistic data.",
                "es": "Una GAN consiste en un generador y discriminador que compiten.",
                "de": "Ein GAN besteht aus Generator und Diskriminator die konkurrieren.",
                "nl": "Een GAN bestaat uit een generator en discriminator die concurreren om realistische data te creëren."
            }
        },
        {
            "question": {
                "en": "What is an autoencoder?",
                "es": "¿Qué es un autoencoder?",
                "de": "Was ist ein Autoencoder?",
                "nl": "Wat is een autoencoder?"
            },
            "options": [
                {
                    "en": "A self-driving car",
                    "es": "Un auto autónomo",
                    "de": "Ein selbstfahrendes Auto",
                    "nl": "Een zelfrijdende auto"
                },
                {
                    "en": "An automatic encoder device",
                    "es": "Un dispositivo codificador automático",
                    "de": "Ein automatisches Kodiergerät",
                    "nl": "Een automatisch codeerapparaat"
                },
                {
                    "en": "A network that learns compressed representations",
                    "es": "Una red que aprende representaciones comprimidas",
                    "de": "Ein Netz das komprimierte Darstellungen lernt",
                    "nl": "Een netwerk dat gecomprimeerde representaties leert"
                },
                {
                    "en": "A text editor",
                    "es": "Un editor de texto",
                    "de": "Ein Texteditor",
                    "nl": "Een teksteditor"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "An autoencoder compresses input data and reconstructs it, learning efficient encodings.",
                "es": "Un autoencoder comprime datos de entrada y los reconstruye.",
                "de": "Ein Autoencoder komprimiert Eingabedaten und rekonstruiert sie.",
                "nl": "Een autoencoder comprimeert invoerdata en reconstrueert deze, waarbij efficiënte coderingen worden geleerd."
            }
        },
        {
            "question": {
                "en": "What is a transformer model?",
                "es": "¿Qué es un modelo transformer?",
                "de": "Was ist ein Transformer-Modell?",
                "nl": "Wat is een transformer-model?"
            },
            "options": [
                {
                    "en": "An attention-based deep learning architecture",
                    "es": "Una arquitectura basada en atención",
                    "de": "Eine aufmerksamkeitsbasierte Architektur",
                    "nl": "Een op aandacht gebaseerde architectuur"
                },
                {
                    "en": "A toy robot",
                    "es": "Un robot de juguete",
                    "de": "Ein Spielzeugroboter",
                    "nl": "Een speelgoedrobot"
                },
                {
                    "en": "An electrical transformer",
                    "es": "Un transformador eléctrico",
                    "de": "Ein elektrischer Transformator",
                    "nl": "Een elektrische transformator"
                },
                {
                    "en": "A shape-shifting device",
                    "es": "Un dispositivo que cambia de forma",
                    "de": "Ein formwandelndes Gerät",
                    "nl": "Een vormveranderend apparaat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Transformers use self-attention mechanisms to process sequences in parallel.",
                "es": "Los transformers usan mecanismos de auto-atención para procesar secuencias.",
                "de": "Transformer verwenden Selbstaufmerksamkeit zur parallelen Sequenzverarbeitung.",
                "nl": "Transformers gebruiken zelf-aandachtsmechanismen om sequenties parallel te verwerken."
            }
        },
        {
            "question": {
                "en": "What is attention mechanism?",
                "es": "¿Qué es el mecanismo de atención?",
                "de": "Was ist der Aufmerksamkeitsmechanismus?",
                "nl": "Wat is het aandachtsmechanisme?"
            },
            "options": [
                {
                    "en": "Paying attention in class",
                    "es": "Prestar atención en clase",
                    "de": "Im Unterricht aufpassen",
                    "nl": "Opletten in de klas"
                },
                {
                    "en": "A concentration exercise",
                    "es": "Un ejercicio de concentración",
                    "de": "Eine Konzentrationsübung",
                    "nl": "Een concentratieoefening"
                },
                {
                    "en": "Focusing on relevant parts of input",
                    "es": "Enfocarse en partes relevantes de la entrada",
                    "de": "Auf relevante Eingabeteile fokussieren",
                    "nl": "Focussen op relevante delen van de invoer"
                },
                {
                    "en": "A meditation technique",
                    "es": "Una técnica de meditación",
                    "de": "Eine Meditationstechnik",
                    "nl": "Een meditatietechniek"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Attention mechanisms let the model focus on the most relevant parts of the input.",
                "es": "Los mecanismos de atención permiten al modelo enfocarse en las partes más relevantes.",
                "de": "Aufmerksamkeitsmechanismen ermöglichen den Fokus auf relevante Eingabeteile.",
                "nl": "Aandachtsmechanismen laten het model focussen op de meest relevante delen van de invoer."
            }
        },
        {
            "question": {
                "en": "What is vanishing gradient problem?",
                "es": "¿Qué es el problema del gradiente evanescente?",
                "de": "Was ist das Problem verschwindender Gradienten?",
                "nl": "Wat is het verdwijnende gradiëntprobleem?"
            },
            "options": [
                {
                    "en": "Gradients becoming too small to train",
                    "es": "Gradientes que se vuelven muy pequeños para entrenar",
                    "de": "Gradienten werden zu klein zum Trainieren",
                    "nl": "Gradiënten worden te klein om te trainen"
                },
                {
                    "en": "A disappearing magic trick",
                    "es": "Un truco de magia de desaparición",
                    "de": "Ein Verschwindtrick",
                    "nl": "Een verdwijntovervtruc"
                },
                {
                    "en": "A fading screen display",
                    "es": "Una pantalla que se desvanece",
                    "de": "Ein verblassender Bildschirm",
                    "nl": "Een vervaagd schermbeeld"
                },
                {
                    "en": "A vanishing point in art",
                    "es": "Un punto de fuga en arte",
                    "de": "Ein Fluchtpunkt in der Kunst",
                    "nl": "Een verdwijnpunt in kunst"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Vanishing gradients occur when gradients shrink to near zero in deep networks during backpropagation.",
                "es": "Los gradientes evanescentes ocurren cuando se reducen a casi cero en redes profundas.",
                "de": "Verschwindende Gradienten treten auf wenn Gradienten in tiefen Netzen fast null werden.",
                "nl": "Verdwijnende gradiënten treden op wanneer gradiënten bijna nul worden in diepe netwerken."
            }
        },
        {
            "question": {
                "en": "What is weight initialization?",
                "es": "¿Qué es la inicialización de pesos?",
                "de": "Was ist Gewichtsinitialisierung?",
                "nl": "Wat is gewichtsinitialisatie?"
            },
            "options": [
                {
                    "en": "Measuring body weight",
                    "es": "Medir el peso corporal",
                    "de": "Körpergewicht messen",
                    "nl": "Lichaamsgewicht meten"
                },
                {
                    "en": "Loading weights at a gym",
                    "es": "Cargar pesas en un gimnasio",
                    "de": "Gewichte im Fitnessstudio laden",
                    "nl": "Gewichten laden in een sportschool"
                },
                {
                    "en": "Setting starting values for network weights",
                    "es": "Establecer valores iniciales para los pesos",
                    "de": "Startwerte für Netzgewichte setzen",
                    "nl": "Beginwaarden instellen voor netwerkgewichten"
                },
                {
                    "en": "Weighing ingredients",
                    "es": "Pesar ingredientes",
                    "de": "Zutaten wiegen",
                    "nl": "Ingrediënten wegen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Weight initialization sets the starting values of parameters to help training converge.",
                "es": "La inicialización establece los valores iniciales para ayudar a la convergencia.",
                "de": "Gewichtsinitialisierung setzt Startwerte um die Trainingskonvergenz zu unterstützen.",
                "nl": "Gewichtsinitialisatie stelt de beginwaarden in om training te laten convergeren."
            }
        },
        {
            "question": {
                "en": "What is fine-tuning in deep learning?",
                "es": "¿Qué es el ajuste fino en aprendizaje profundo?",
                "de": "Was ist Feinabstimmung im Deep Learning?",
                "nl": "Wat is fijnafstemming in deep learning?"
            },
            "options": [
                {
                    "en": "Adjusting a pre-trained model for new data",
                    "es": "Ajustar un modelo preentrenado para nuevos datos",
                    "de": "Ein vortrainiertes Modell für neue Daten anpassen",
                    "nl": "Een voorgetraind model aanpassen voor nieuwe data"
                },
                {
                    "en": "Tuning a musical instrument",
                    "es": "Afinar un instrumento musical",
                    "de": "Ein Instrument stimmen",
                    "nl": "Een muziekinstrument stemmen"
                },
                {
                    "en": "Adjusting a car engine",
                    "es": "Ajustar un motor de auto",
                    "de": "Einen Motor einstellen",
                    "nl": "Een automotor afstellen"
                },
                {
                    "en": "Fine-tuning a radio",
                    "es": "Sintonizar una radio",
                    "de": "Ein Radio einstellen",
                    "nl": "Een radio afstemmen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Fine-tuning retrains the last layers of a pre-trained model on a new specific dataset.",
                "es": "El ajuste fino reentrena las últimas capas de un modelo preentrenado.",
                "de": "Feinabstimmung trainiert die letzten Schichten eines vortrainierten Modells neu.",
                "nl": "Fijnafstemming traint de laatste lagen van een voorgetraind model opnieuw op een nieuwe dataset."
            }
        },
        {
            "question": {
                "en": "What is a loss curve?",
                "es": "¿Qué es una curva de pérdida?",
                "de": "Was ist eine Verlustkurve?",
                "nl": "Wat is een verliescurve?"
            },
            "options": [
                {
                    "en": "A road with many curves",
                    "es": "Una carretera con muchas curvas",
                    "de": "Eine Straße mit vielen Kurven",
                    "nl": "Een weg met veel bochten"
                },
                {
                    "en": "A weight loss chart",
                    "es": "Un gráfico de pérdida de peso",
                    "de": "Ein Gewichtsverlustdiagramm",
                    "nl": "Een gewichtsverliesgrafiek"
                },
                {
                    "en": "Graph showing training error over time",
                    "es": "Gráfico que muestra el error a lo largo del tiempo",
                    "de": "Grafik die den Trainingsfehler über die Zeit zeigt",
                    "nl": "Grafiek die trainingsfout over tijd toont"
                },
                {
                    "en": "A declining stock price",
                    "es": "Un precio de acciones en declive",
                    "de": "Ein fallender Aktienkurs",
                    "nl": "Een dalende aandelenkoers"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A loss curve visualizes how the training error decreases as the model learns.",
                "es": "Una curva de pérdida visualiza cómo disminuye el error durante el entrenamiento.",
                "de": "Eine Verlustkurve visualisiert die Abnahme des Trainingsfehlers.",
                "nl": "Een verliescurve visualiseert hoe de trainingsfout afneemt naarmate het model leert."
            }
        },
        {
            "question": {
                "en": "What is skip connection?",
                "es": "¿Qué es una conexión de salto?",
                "de": "Was ist eine Skip-Verbindung?",
                "nl": "Wat is een skip-verbinding?"
            },
            "options": [
                {
                    "en": "Shortcut bypassing one or more layers",
                    "es": "Atajo que omite una o más capas",
                    "de": "Abkürzung die Schichten überspringt",
                    "nl": "Snelkoppeling die lagen overslaat"
                },
                {
                    "en": "Skipping a rope",
                    "es": "Saltar la cuerda",
                    "de": "Seilspringen",
                    "nl": "Touwtjespringen"
                },
                {
                    "en": "A network cable shortcut",
                    "es": "Un atajo de cable de red",
                    "de": "Eine Netzwerkkabelabkürzung",
                    "nl": "Een netwerkkabelsnelkoppeling"
                },
                {
                    "en": "A bookmark feature",
                    "es": "Una función de marcadores",
                    "de": "Eine Lesezeichenfunktion",
                    "nl": "Een bladwijzerfunctie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Skip connections allow gradients to flow directly across layers, enabling deeper networks.",
                "es": "Las conexiones de salto permiten que los gradientes fluyan directamente entre capas.",
                "de": "Skip-Verbindungen ermöglichen direkten Gradientenfluss über Schichten.",
                "nl": "Skip-verbindingen laten gradiënten direct door lagen stromen, waardoor diepere netwerken mogelijk worden."
            }
        },
        {
            "question": {
                "en": "What is an embedding layer?",
                "es": "¿Qué es una capa de embedding?",
                "de": "Was ist eine Embedding-Schicht?",
                "nl": "Wat is een inbeddingslaag?"
            },
            "options": [
                {
                    "en": "A layer of cement",
                    "es": "Una capa de cemento",
                    "de": "Eine Zementschicht",
                    "nl": "Een cementlaag"
                },
                {
                    "en": "A protective coating",
                    "es": "Un recubrimiento protector",
                    "de": "Eine Schutzbeschichtung",
                    "nl": "Een beschermende coating"
                },
                {
                    "en": "Converts categorical data to dense vectors",
                    "es": "Convierte datos categóricos en vectores densos",
                    "de": "Kategorische Daten in dichte Vektoren umwandeln",
                    "nl": "Categorische data omzetten naar dichte vectoren"
                },
                {
                    "en": "A wrapping material",
                    "es": "Un material de envoltorio",
                    "de": "Ein Verpackungsmaterial",
                    "nl": "Een verpakkingsmateriaal"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "An embedding layer maps discrete tokens to continuous vector representations.",
                "es": "Una capa de embedding mapea tokens discretos a representaciones de vectores continuos.",
                "de": "Eine Embedding-Schicht bildet diskrete Token auf kontinuierliche Vektoren ab.",
                "nl": "Een inbeddingslaag mapt discrete tokens naar continue vectorrepresentaties."
            }
        },
        {
            "question": {
                "en": "What is a variational autoencoder?",
                "es": "¿Qué es un autoencoder variacional?",
                "de": "Was ist ein variabler Autoencoder?",
                "nl": "Wat is een variationele autoencoder?"
            },
            "options": [
                {
                    "en": "A generative model learning data distribution",
                    "es": "Un modelo generativo que aprende distribución de datos",
                    "de": "Ein generatives Modell das Datenverteilung lernt",
                    "nl": "Een generatief model dat datadistributie leert"
                },
                {
                    "en": "A variable encoding tool",
                    "es": "Una herramienta de codificación variable",
                    "de": "Ein variables Codierungswerkzeug",
                    "nl": "Een variabel codeertool"
                },
                {
                    "en": "A music variation tool",
                    "es": "Una herramienta de variación musical",
                    "de": "Ein Musikvariationswerkzeug",
                    "nl": "Een muziekvariatietool"
                },
                {
                    "en": "A data backup system",
                    "es": "Un sistema de respaldo",
                    "de": "Ein Datensicherungssystem",
                    "nl": "Een databack-upsysteem"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A VAE learns the probability distribution of data to generate new similar samples.",
                "es": "Un VAE aprende la distribución de probabilidad de datos para generar nuevas muestras.",
                "de": "Ein VAE lernt die Wahrscheinlichkeitsverteilung der Daten.",
                "nl": "Een VAE leert de kansverdeling van data om nieuwe vergelijkbare samples te genereren."
            }
        },
        {
            "question": {
                "en": "What is model pruning?",
                "es": "¿Qué es la poda de modelos?",
                "de": "Was ist Modellpruning?",
                "nl": "Wat is modelpruning?"
            },
            "options": [
                {
                    "en": "Pruning a tree",
                    "es": "Podar un árbol",
                    "de": "Einen Baum beschneiden",
                    "nl": "Een boom snoeien"
                },
                {
                    "en": "Deleting old files",
                    "es": "Eliminar archivos viejos",
                    "de": "Alte Dateien löschen",
                    "nl": "Oude bestanden verwijderen"
                },
                {
                    "en": "Removing unnecessary network connections",
                    "es": "Eliminar conexiones de red innecesarias",
                    "de": "Unnötige Netzverbindungen entfernen",
                    "nl": "Onnodige netwerkverbindingen verwijderen"
                },
                {
                    "en": "Cutting paper",
                    "es": "Cortar papel",
                    "de": "Papier schneiden",
                    "nl": "Papier knippen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Model pruning removes redundant weights and connections to make models smaller and faster.",
                "es": "La poda elimina pesos redundantes para hacer modelos más pequeños y rápidos.",
                "de": "Modellpruning entfernt redundante Gewichte für kleinere schnellere Modelle.",
                "nl": "Modelpruning verwijdert overbodige gewichten om modellen kleiner en sneller te maken."
            }
        },
        {
            "question": {
                "en": "What is knowledge distillation?",
                "es": "¿Qué es la destilación de conocimiento?",
                "de": "Was ist Wissensdestillation?",
                "nl": "Wat is kennisdestillatie?"
            },
            "options": [
                {
                    "en": "Training a small model from a large one",
                    "es": "Entrenar un modelo pequeño a partir de uno grande",
                    "de": "Ein kleines Modell von einem großen trainieren",
                    "nl": "Een klein model trainen van een groot model"
                },
                {
                    "en": "Distilling water",
                    "es": "Destilar agua",
                    "de": "Wasser destillieren",
                    "nl": "Water destilleren"
                },
                {
                    "en": "Extracting essential oils",
                    "es": "Extraer aceites esenciales",
                    "de": "Ätherische Öle extrahieren",
                    "nl": "Essentiële oliën extraheren"
                },
                {
                    "en": "Summarizing a book",
                    "es": "Resumir un libro",
                    "de": "Ein Buch zusammenfassen",
                    "nl": "Een boek samenvatten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Knowledge distillation transfers knowledge from a large teacher model to a smaller student.",
                "es": "La destilación transfiere conocimiento de un modelo grande a uno más pequeño.",
                "de": "Wissensdestillation überträgt Wissen von einem großen auf ein kleines Modell.",
                "nl": "Kennisdestillatie draagt kennis over van een groot lerarenmodel naar een kleiner studentmodel."
            }
        },
        {
            "question": {
                "en": "What is gradient clipping?",
                "es": "¿Qué es el recorte de gradientes?",
                "de": "Was ist Gradient Clipping?",
                "nl": "Wat is gradiënt-clipping?"
            },
            "options": [
                {
                    "en": "Clipping newspaper articles",
                    "es": "Recortar artículos de periódico",
                    "de": "Zeitungsartikel ausschneiden",
                    "nl": "Krantenartikelen knippen"
                },
                {
                    "en": "Cutting hair",
                    "es": "Cortar el cabello",
                    "de": "Haare schneiden",
                    "nl": "Haar knippen"
                },
                {
                    "en": "Limiting gradient values to prevent explosion",
                    "es": "Limitar valores de gradiente para prevenir explosión",
                    "de": "Gradientenwerte begrenzen um Explosion zu verhindern",
                    "nl": "Gradiëntwaarden beperken om explosie te voorkomen"
                },
                {
                    "en": "Trimming videos",
                    "es": "Recortar videos",
                    "de": "Videos kürzen",
                    "nl": "Video's bijsnijden"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Gradient clipping caps gradient values to prevent the exploding gradient problem.",
                "es": "El recorte limita los valores de gradiente para prevenir el problema de explosión.",
                "de": "Gradient Clipping begrenzt Gradientenwerte um Explosion zu verhindern.",
                "nl": "Gradiënt-clipping beperkt gradiëntwaarden om het exploderende gradiëntprobleem te voorkomen."
            }
        },
        {
            "question": {
                "en": "What is mixed precision training?",
                "es": "¿Qué es el entrenamiento de precisión mixta?",
                "de": "Was ist Training mit gemischter Präzision?",
                "nl": "Wat is mixed precision training?"
            },
            "options": [
                {
                    "en": "Using different number formats for speed",
                    "es": "Usar diferentes formatos numéricos para velocidad",
                    "de": "Verschiedene Zahlenformate für Geschwindigkeit",
                    "nl": "Verschillende getalformaten voor snelheid"
                },
                {
                    "en": "Mixing cooking ingredients precisely",
                    "es": "Mezclar ingredientes con precisión",
                    "de": "Zutaten präzise mischen",
                    "nl": "Ingrediënten precies mengen"
                },
                {
                    "en": "A gym training routine",
                    "es": "Una rutina de entrenamiento",
                    "de": "Ein Trainingsplan",
                    "nl": "Een trainingsschema"
                },
                {
                    "en": "A mixed martial arts style",
                    "es": "Un estilo de artes marciales",
                    "de": "Ein Kampfkunststil",
                    "nl": "Een gemengde vechtkunststijl"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Mixed precision training uses both 16-bit and 32-bit numbers to train faster with less memory.",
                "es": "El entrenamiento de precisión mixta usa números de 16 y 32 bits para mayor velocidad.",
                "de": "Training mit gemischter Präzision verwendet 16- und 32-Bit-Zahlen für schnelleres Training.",
                "nl": "Mixed precision training gebruikt zowel 16-bit als 32-bit getallen om sneller te trainen."
            }
        },
        {
            "question": {
                "en": "What is a U-Net?",
                "es": "¿Qué es una U-Net?",
                "de": "Was ist ein U-Net?",
                "nl": "Wat is een U-Net?"
            },
            "options": [
                {
                    "en": "A submarine network",
                    "es": "Una red submarina",
                    "de": "Ein U-Boot-Netzwerk",
                    "nl": "Een onderzeeërnetwerk"
                },
                {
                    "en": "A university network",
                    "es": "Una red universitaria",
                    "de": "Ein Universitätsnetzwerk",
                    "nl": "Een universiteitsnetwerk"
                },
                {
                    "en": "Encoder-decoder network for segmentation",
                    "es": "Red codificador-decodificador para segmentación",
                    "de": "Encoder-Decoder-Netz für Segmentierung",
                    "nl": "Encoder-decoder netwerk voor segmentatie"
                },
                {
                    "en": "A USB network",
                    "es": "Una red USB",
                    "de": "Ein USB-Netzwerk",
                    "nl": "Een USB-netwerk"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "U-Net is an encoder-decoder architecture widely used for image segmentation tasks.",
                "es": "U-Net es una arquitectura codificador-decodificador para segmentación de imágenes.",
                "de": "U-Net ist eine Encoder-Decoder-Architektur für Bildsegmentierung.",
                "nl": "U-Net is een encoder-decoder architectuur die veel wordt gebruikt voor beeldsegmentatie."
            }
        },
        {
            "question": {
                "en": "What is multi-head attention?",
                "es": "¿Qué es la atención multi-cabeza?",
                "de": "Was ist Multi-Head-Attention?",
                "nl": "Wat is multi-head attention?"
            },
            "options": [
                {
                    "en": "Running multiple attention in parallel",
                    "es": "Ejecutar múltiples atenciones en paralelo",
                    "de": "Mehrere Aufmerksamkeiten parallel ausführen",
                    "nl": "Meerdere aandachtsmechanismen parallel uitvoeren"
                },
                {
                    "en": "A multi-headed creature",
                    "es": "Una criatura de múltiples cabezas",
                    "de": "Ein vielköpfiges Wesen",
                    "nl": "Een wezen met meerdere hoofden"
                },
                {
                    "en": "Multiple shower heads",
                    "es": "Múltiples cabezales de ducha",
                    "de": "Mehrere Duschköpfe",
                    "nl": "Meerdere douchekoppen"
                },
                {
                    "en": "A team of leaders",
                    "es": "Un equipo de líderes",
                    "de": "Ein Führungsteam",
                    "nl": "Een team van leiders"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Multi-head attention runs several attention functions in parallel for richer representations.",
                "es": "La atención multi-cabeza ejecuta varias funciones de atención en paralelo.",
                "de": "Multi-Head-Attention führt mehrere Aufmerksamkeitsfunktionen parallel aus.",
                "nl": "Multi-head attention voert meerdere aandachtsfuncties parallel uit voor rijkere representaties."
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
                    "en": "Teaching yourself a skill",
                    "es": "Enseñarse una habilidad",
                    "de": "Sich selbst etwas beibringen",
                    "nl": "Jezelf een vaardigheid aanleren"
                },
                {
                    "en": "Self-study with textbooks",
                    "es": "Autoestudio con libros",
                    "de": "Selbststudium mit Büchern",
                    "nl": "Zelfstudie met boeken"
                },
                {
                    "en": "Learning from data without manual labels",
                    "es": "Aprender de datos sin etiquetas manuales",
                    "de": "Aus Daten ohne manuelle Labels lernen",
                    "nl": "Leren van data zonder handmatige labels"
                },
                {
                    "en": "Learning from mistakes",
                    "es": "Aprender de errores",
                    "de": "Aus Fehlern lernen",
                    "nl": "Leren van fouten"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Self-supervised learning creates labels from the data itself, avoiding manual annotation.",
                "es": "El aprendizaje auto-supervisado crea etiquetas de los propios datos.",
                "de": "Selbstüberwachtes Lernen erstellt Labels aus den Daten selbst.",
                "nl": "Zelfgesuperviseerd leren creëert labels uit de data zelf, zonder handmatige annotatie."
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
                    "de": "Durch Vergleich ähnlicher und verschiedener Paare lernen",
                    "nl": "Leren door vergelijkbare en verschillende paren te vergelijken"
                },
                {
                    "en": "Adjusting screen contrast",
                    "es": "Ajustar contraste de pantalla",
                    "de": "Bildschirmkontrast anpassen",
                    "nl": "Schermcontrast aanpassen"
                },
                {
                    "en": "Comparing prices",
                    "es": "Comparar precios",
                    "de": "Preise vergleichen",
                    "nl": "Prijzen vergelijken"
                },
                {
                    "en": "A debate technique",
                    "es": "Una técnica de debate",
                    "de": "Eine Debattentechnik",
                    "nl": "Een debattechniek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Contrastive learning trains models by pulling similar pairs closer and pushing different apart.",
                "es": "El aprendizaje contrastivo entrena acercando pares similares y alejando diferentes.",
                "de": "Kontrastives Lernen trainiert durch Annäherung ähnlicher und Abstoßung verschiedener Paare.",
                "nl": "Contrastief leren traint modellen door vergelijkbare paren dichter bij elkaar te trekken."
            }
        },
        {
            "question": {
                "en": "What is a neural network layer?",
                "es": "¿Qué es una capa de red neuronal?",
                "de": "Was ist eine neuronale Netzschicht?",
                "nl": "Wat is een neurale netwerklaag?"
            },
            "options": [
                {
                    "en": "A layer of paint",
                    "es": "Una capa de pintura",
                    "de": "Eine Farbschicht",
                    "nl": "Een verflaag"
                },
                {
                    "en": "A geological formation",
                    "es": "Una formación geológica",
                    "de": "Eine geologische Formation",
                    "nl": "Een geologische formatie"
                },
                {
                    "en": "A group of neurons processing data",
                    "es": "Un grupo de neuronas procesando datos",
                    "de": "Eine Gruppe von Neuronen die Daten verarbeiten",
                    "nl": "Een groep neuronen die data verwerken"
                },
                {
                    "en": "A cake layer",
                    "es": "Una capa de pastel",
                    "de": "Eine Tortenschicht",
                    "nl": "Een taartlaag"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A neural network layer is a collection of neurons that transforms input data.",
                "es": "Una capa es una colección de neuronas que transforma datos de entrada.",
                "de": "Eine Schicht ist eine Sammlung von Neuronen die Eingabedaten transformiert.",
                "nl": "Een neurale netwerklaag is een verzameling neuronen die invoerdata transformeert."
            }
        },
        {
            "question": {
                "en": "What is a hidden layer?",
                "es": "¿Qué es una capa oculta?",
                "de": "Was ist eine versteckte Schicht?",
                "nl": "Wat is een verborgen laag?"
            },
            "options": [
                {
                    "en": "A layer between input and output",
                    "es": "Una capa entre entrada y salida",
                    "de": "Eine Schicht zwischen Eingang und Ausgang",
                    "nl": "Een laag tussen invoer en uitvoer"
                },
                {
                    "en": "A secret room",
                    "es": "Una habitación secreta",
                    "de": "Ein geheimer Raum",
                    "nl": "Een geheime kamer"
                },
                {
                    "en": "An invisible text field",
                    "es": "Un campo de texto invisible",
                    "de": "Ein unsichtbares Textfeld",
                    "nl": "Een onzichtbaar tekstveld"
                },
                {
                    "en": "A hidden file",
                    "es": "Un archivo oculto",
                    "de": "Eine versteckte Datei",
                    "nl": "Een verborgen bestand"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Hidden layers process data between input and output layers in a neural network.",
                "es": "Las capas ocultas procesan datos entre las capas de entrada y salida.",
                "de": "Versteckte Schichten verarbeiten Daten zwischen Eingangs- und Ausgangsschicht.",
                "nl": "Verborgen lagen verwerken data tussen de invoer- en uitvoerlagen in een neuraal netwerk."
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
                    "en": "Organizing batches of products",
                    "es": "Organizar lotes de productos",
                    "de": "Produktchargen organisieren",
                    "nl": "Productpartijen organiseren"
                },
                {
                    "en": "A cooking technique",
                    "es": "Una técnica de cocina",
                    "de": "Eine Kochtechnik",
                    "nl": "Een kooktechniek"
                },
                {
                    "en": "Normalizing layer inputs during training",
                    "es": "Normalizar entradas de capas durante el entrenamiento",
                    "de": "Schichteingaben während des Trainings normalisieren",
                    "nl": "Laaginvoer normaliseren tijdens training"
                },
                {
                    "en": "A cleaning method",
                    "es": "Un método de limpieza",
                    "de": "Eine Reinigungsmethode",
                    "nl": "Een schoonmaakmethode"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Batch normalization normalizes layer inputs to stabilize and speed up training.",
                "es": "La normalización por lotes normaliza entradas para estabilizar el entrenamiento.",
                "de": "Batch-Normalisierung normalisiert Eingaben zur Stabilisierung des Trainings.",
                "nl": "Batchnormalisatie normaliseert laaginvoer om training te stabiliseren en versnellen."
            }
        },
        {
            "question": {
                "en": "What is a GAN?",
                "es": "¿Qué es una GAN?",
                "de": "Was ist ein GAN?",
                "nl": "Wat is een GAN?"
            },
            "options": [
                {
                    "en": "Generative Adversarial Network",
                    "es": "Red Generativa Adversarial",
                    "de": "Generatives Adversariales Netzwerk",
                    "nl": "Generatief Adversarieel Netwerk"
                },
                {
                    "en": "A cooking tool",
                    "es": "Una herramienta de cocina",
                    "de": "Ein Kochwerkzeug",
                    "nl": "Een keukengerei"
                },
                {
                    "en": "A social network",
                    "es": "Una red social",
                    "de": "Ein soziales Netzwerk",
                    "nl": "Een sociaal netwerk"
                },
                {
                    "en": "A game engine",
                    "es": "Un motor de juegos",
                    "de": "Eine Spielengine",
                    "nl": "Een game-engine"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A GAN consists of a generator and discriminator that compete to create realistic data.",
                "es": "Una GAN consiste en un generador y discriminador que compiten.",
                "de": "Ein GAN besteht aus Generator und Diskriminator die konkurrieren.",
                "nl": "Een GAN bestaat uit een generator en discriminator die concurreren om realistische data te creëren."
            }
        },
        {
            "question": {
                "en": "What is an autoencoder?",
                "es": "¿Qué es un autoencoder?",
                "de": "Was ist ein Autoencoder?",
                "nl": "Wat is een autoencoder?"
            },
            "options": [
                {
                    "en": "A self-driving car",
                    "es": "Un auto autónomo",
                    "de": "Ein selbstfahrendes Auto",
                    "nl": "Een zelfrijdende auto"
                },
                {
                    "en": "An automatic encoder device",
                    "es": "Un dispositivo codificador automático",
                    "de": "Ein automatisches Kodiergerät",
                    "nl": "Een automatisch codeerapparaat"
                },
                {
                    "en": "A network that learns compressed representations",
                    "es": "Una red que aprende representaciones comprimidas",
                    "de": "Ein Netz das komprimierte Darstellungen lernt",
                    "nl": "Een netwerk dat gecomprimeerde representaties leert"
                },
                {
                    "en": "A text editor",
                    "es": "Un editor de texto",
                    "de": "Ein Texteditor",
                    "nl": "Een teksteditor"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "An autoencoder compresses input data and reconstructs it, learning efficient encodings.",
                "es": "Un autoencoder comprime datos de entrada y los reconstruye.",
                "de": "Ein Autoencoder komprimiert Eingabedaten und rekonstruiert sie.",
                "nl": "Een autoencoder comprimeert invoerdata en reconstrueert deze, waarbij efficiënte coderingen worden geleerd."
            }
        },
        {
            "question": {
                "en": "What is a transformer model?",
                "es": "¿Qué es un modelo transformer?",
                "de": "Was ist ein Transformer-Modell?",
                "nl": "Wat is een transformer-model?"
            },
            "options": [
                {
                    "en": "An attention-based deep learning architecture",
                    "es": "Una arquitectura basada en atención",
                    "de": "Eine aufmerksamkeitsbasierte Architektur",
                    "nl": "Een op aandacht gebaseerde architectuur"
                },
                {
                    "en": "A toy robot",
                    "es": "Un robot de juguete",
                    "de": "Ein Spielzeugroboter",
                    "nl": "Een speelgoedrobot"
                },
                {
                    "en": "An electrical transformer",
                    "es": "Un transformador eléctrico",
                    "de": "Ein elektrischer Transformator",
                    "nl": "Een elektrische transformator"
                },
                {
                    "en": "A shape-shifting device",
                    "es": "Un dispositivo que cambia de forma",
                    "de": "Ein formwandelndes Gerät",
                    "nl": "Een vormveranderend apparaat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Transformers use self-attention mechanisms to process sequences in parallel.",
                "es": "Los transformers usan mecanismos de auto-atención para procesar secuencias.",
                "de": "Transformer verwenden Selbstaufmerksamkeit zur parallelen Sequenzverarbeitung.",
                "nl": "Transformers gebruiken zelf-aandachtsmechanismen om sequenties parallel te verwerken."
            }
        },
        {
            "question": {
                "en": "What is attention mechanism?",
                "es": "¿Qué es el mecanismo de atención?",
                "de": "Was ist der Aufmerksamkeitsmechanismus?",
                "nl": "Wat is het aandachtsmechanisme?"
            },
            "options": [
                {
                    "en": "Paying attention in class",
                    "es": "Prestar atención en clase",
                    "de": "Im Unterricht aufpassen",
                    "nl": "Opletten in de klas"
                },
                {
                    "en": "A concentration exercise",
                    "es": "Un ejercicio de concentración",
                    "de": "Eine Konzentrationsübung",
                    "nl": "Een concentratieoefening"
                },
                {
                    "en": "Focusing on relevant parts of input",
                    "es": "Enfocarse en partes relevantes de la entrada",
                    "de": "Auf relevante Eingabeteile fokussieren",
                    "nl": "Focussen op relevante delen van de invoer"
                },
                {
                    "en": "A meditation technique",
                    "es": "Una técnica de meditación",
                    "de": "Eine Meditationstechnik",
                    "nl": "Een meditatietechniek"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Attention mechanisms let the model focus on the most relevant parts of the input.",
                "es": "Los mecanismos de atención permiten al modelo enfocarse en las partes más relevantes.",
                "de": "Aufmerksamkeitsmechanismen ermöglichen den Fokus auf relevante Eingabeteile.",
                "nl": "Aandachtsmechanismen laten het model focussen op de meest relevante delen van de invoer."
            }
        },
        {
            "question": {
                "en": "What is vanishing gradient problem?",
                "es": "¿Qué es el problema del gradiente evanescente?",
                "de": "Was ist das Problem verschwindender Gradienten?",
                "nl": "Wat is het verdwijnende gradiëntprobleem?"
            },
            "options": [
                {
                    "en": "Gradients becoming too small to train",
                    "es": "Gradientes que se vuelven muy pequeños para entrenar",
                    "de": "Gradienten werden zu klein zum Trainieren",
                    "nl": "Gradiënten worden te klein om te trainen"
                },
                {
                    "en": "A disappearing magic trick",
                    "es": "Un truco de magia de desaparición",
                    "de": "Ein Verschwindtrick",
                    "nl": "Een verdwijntovervtruc"
                },
                {
                    "en": "A fading screen display",
                    "es": "Una pantalla que se desvanece",
                    "de": "Ein verblassender Bildschirm",
                    "nl": "Een vervaagd schermbeeld"
                },
                {
                    "en": "A vanishing point in art",
                    "es": "Un punto de fuga en arte",
                    "de": "Ein Fluchtpunkt in der Kunst",
                    "nl": "Een verdwijnpunt in kunst"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Vanishing gradients occur when gradients shrink to near zero in deep networks during backpropagation.",
                "es": "Los gradientes evanescentes ocurren cuando se reducen a casi cero en redes profundas.",
                "de": "Verschwindende Gradienten treten auf wenn Gradienten in tiefen Netzen fast null werden.",
                "nl": "Verdwijnende gradiënten treden op wanneer gradiënten bijna nul worden in diepe netwerken."
            }
        },
        {
            "question": {
                "en": "What is weight initialization?",
                "es": "¿Qué es la inicialización de pesos?",
                "de": "Was ist Gewichtsinitialisierung?",
                "nl": "Wat is gewichtsinitialisatie?"
            },
            "options": [
                {
                    "en": "Measuring body weight",
                    "es": "Medir el peso corporal",
                    "de": "Körpergewicht messen",
                    "nl": "Lichaamsgewicht meten"
                },
                {
                    "en": "Loading weights at a gym",
                    "es": "Cargar pesas en un gimnasio",
                    "de": "Gewichte im Fitnessstudio laden",
                    "nl": "Gewichten laden in een sportschool"
                },
                {
                    "en": "Setting starting values for network weights",
                    "es": "Establecer valores iniciales para los pesos",
                    "de": "Startwerte für Netzgewichte setzen",
                    "nl": "Beginwaarden instellen voor netwerkgewichten"
                },
                {
                    "en": "Weighing ingredients",
                    "es": "Pesar ingredientes",
                    "de": "Zutaten wiegen",
                    "nl": "Ingrediënten wegen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Weight initialization sets the starting values of parameters to help training converge.",
                "es": "La inicialización establece los valores iniciales para ayudar a la convergencia.",
                "de": "Gewichtsinitialisierung setzt Startwerte um die Trainingskonvergenz zu unterstützen.",
                "nl": "Gewichtsinitialisatie stelt de beginwaarden in om training te laten convergeren."
            }
        },
        {
            "question": {
                "en": "What is fine-tuning in deep learning?",
                "es": "¿Qué es el ajuste fino en aprendizaje profundo?",
                "de": "Was ist Feinabstimmung im Deep Learning?",
                "nl": "Wat is fijnafstemming in deep learning?"
            },
            "options": [
                {
                    "en": "Adjusting a pre-trained model for new data",
                    "es": "Ajustar un modelo preentrenado para nuevos datos",
                    "de": "Ein vortrainiertes Modell für neue Daten anpassen",
                    "nl": "Een voorgetraind model aanpassen voor nieuwe data"
                },
                {
                    "en": "Tuning a musical instrument",
                    "es": "Afinar un instrumento musical",
                    "de": "Ein Instrument stimmen",
                    "nl": "Een muziekinstrument stemmen"
                },
                {
                    "en": "Adjusting a car engine",
                    "es": "Ajustar un motor de auto",
                    "de": "Einen Motor einstellen",
                    "nl": "Een automotor afstellen"
                },
                {
                    "en": "Fine-tuning a radio",
                    "es": "Sintonizar una radio",
                    "de": "Ein Radio einstellen",
                    "nl": "Een radio afstemmen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Fine-tuning retrains the last layers of a pre-trained model on a new specific dataset.",
                "es": "El ajuste fino reentrena las últimas capas de un modelo preentrenado.",
                "de": "Feinabstimmung trainiert die letzten Schichten eines vortrainierten Modells neu.",
                "nl": "Fijnafstemming traint de laatste lagen van een voorgetraind model opnieuw op een nieuwe dataset."
            }
        },
        {
            "question": {
                "en": "What is a loss curve?",
                "es": "¿Qué es una curva de pérdida?",
                "de": "Was ist eine Verlustkurve?",
                "nl": "Wat is een verliescurve?"
            },
            "options": [
                {
                    "en": "A road with many curves",
                    "es": "Una carretera con muchas curvas",
                    "de": "Eine Straße mit vielen Kurven",
                    "nl": "Een weg met veel bochten"
                },
                {
                    "en": "A weight loss chart",
                    "es": "Un gráfico de pérdida de peso",
                    "de": "Ein Gewichtsverlustdiagramm",
                    "nl": "Een gewichtsverliesgrafiek"
                },
                {
                    "en": "Graph showing training error over time",
                    "es": "Gráfico que muestra el error a lo largo del tiempo",
                    "de": "Grafik die den Trainingsfehler über die Zeit zeigt",
                    "nl": "Grafiek die trainingsfout over tijd toont"
                },
                {
                    "en": "A declining stock price",
                    "es": "Un precio de acciones en declive",
                    "de": "Ein fallender Aktienkurs",
                    "nl": "Een dalende aandelenkoers"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A loss curve visualizes how the training error decreases as the model learns.",
                "es": "Una curva de pérdida visualiza cómo disminuye el error durante el entrenamiento.",
                "de": "Eine Verlustkurve visualisiert die Abnahme des Trainingsfehlers.",
                "nl": "Een verliescurve visualiseert hoe de trainingsfout afneemt naarmate het model leert."
            }
        },
        {
            "question": {
                "en": "What is skip connection?",
                "es": "¿Qué es una conexión de salto?",
                "de": "Was ist eine Skip-Verbindung?",
                "nl": "Wat is een skip-verbinding?"
            },
            "options": [
                {
                    "en": "Shortcut bypassing one or more layers",
                    "es": "Atajo que omite una o más capas",
                    "de": "Abkürzung die Schichten überspringt",
                    "nl": "Snelkoppeling die lagen overslaat"
                },
                {
                    "en": "Skipping a rope",
                    "es": "Saltar la cuerda",
                    "de": "Seilspringen",
                    "nl": "Touwtjespringen"
                },
                {
                    "en": "A network cable shortcut",
                    "es": "Un atajo de cable de red",
                    "de": "Eine Netzwerkkabelabkürzung",
                    "nl": "Een netwerkkabelsnelkoppeling"
                },
                {
                    "en": "A bookmark feature",
                    "es": "Una función de marcadores",
                    "de": "Eine Lesezeichenfunktion",
                    "nl": "Een bladwijzerfunctie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Skip connections allow gradients to flow directly across layers, enabling deeper networks.",
                "es": "Las conexiones de salto permiten que los gradientes fluyan directamente entre capas.",
                "de": "Skip-Verbindungen ermöglichen direkten Gradientenfluss über Schichten.",
                "nl": "Skip-verbindingen laten gradiënten direct door lagen stromen, waardoor diepere netwerken mogelijk worden."
            }
        },
        {
            "question": {
                "en": "What is an embedding layer?",
                "es": "¿Qué es una capa de embedding?",
                "de": "Was ist eine Embedding-Schicht?",
                "nl": "Wat is een inbeddingslaag?"
            },
            "options": [
                {
                    "en": "A layer of cement",
                    "es": "Una capa de cemento",
                    "de": "Eine Zementschicht",
                    "nl": "Een cementlaag"
                },
                {
                    "en": "A protective coating",
                    "es": "Un recubrimiento protector",
                    "de": "Eine Schutzbeschichtung",
                    "nl": "Een beschermende coating"
                },
                {
                    "en": "Converts categorical data to dense vectors",
                    "es": "Convierte datos categóricos en vectores densos",
                    "de": "Kategorische Daten in dichte Vektoren umwandeln",
                    "nl": "Categorische data omzetten naar dichte vectoren"
                },
                {
                    "en": "A wrapping material",
                    "es": "Un material de envoltorio",
                    "de": "Ein Verpackungsmaterial",
                    "nl": "Een verpakkingsmateriaal"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "An embedding layer maps discrete tokens to continuous vector representations.",
                "es": "Una capa de embedding mapea tokens discretos a representaciones de vectores continuos.",
                "de": "Eine Embedding-Schicht bildet diskrete Token auf kontinuierliche Vektoren ab.",
                "nl": "Een inbeddingslaag mapt discrete tokens naar continue vectorrepresentaties."
            }
        },
        {
            "question": {
                "en": "What is a variational autoencoder?",
                "es": "¿Qué es un autoencoder variacional?",
                "de": "Was ist ein variabler Autoencoder?",
                "nl": "Wat is een variationele autoencoder?"
            },
            "options": [
                {
                    "en": "A generative model learning data distribution",
                    "es": "Un modelo generativo que aprende distribución de datos",
                    "de": "Ein generatives Modell das Datenverteilung lernt",
                    "nl": "Een generatief model dat datadistributie leert"
                },
                {
                    "en": "A variable encoding tool",
                    "es": "Una herramienta de codificación variable",
                    "de": "Ein variables Codierungswerkzeug",
                    "nl": "Een variabel codeertool"
                },
                {
                    "en": "A music variation tool",
                    "es": "Una herramienta de variación musical",
                    "de": "Ein Musikvariationswerkzeug",
                    "nl": "Een muziekvariatietool"
                },
                {
                    "en": "A data backup system",
                    "es": "Un sistema de respaldo",
                    "de": "Ein Datensicherungssystem",
                    "nl": "Een databack-upsysteem"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A VAE learns the probability distribution of data to generate new similar samples.",
                "es": "Un VAE aprende la distribución de probabilidad de datos para generar nuevas muestras.",
                "de": "Ein VAE lernt die Wahrscheinlichkeitsverteilung der Daten.",
                "nl": "Een VAE leert de kansverdeling van data om nieuwe vergelijkbare samples te genereren."
            }
        },
        {
            "question": {
                "en": "What is model pruning?",
                "es": "¿Qué es la poda de modelos?",
                "de": "Was ist Modellpruning?",
                "nl": "Wat is modelpruning?"
            },
            "options": [
                {
                    "en": "Pruning a tree",
                    "es": "Podar un árbol",
                    "de": "Einen Baum beschneiden",
                    "nl": "Een boom snoeien"
                },
                {
                    "en": "Deleting old files",
                    "es": "Eliminar archivos viejos",
                    "de": "Alte Dateien löschen",
                    "nl": "Oude bestanden verwijderen"
                },
                {
                    "en": "Removing unnecessary network connections",
                    "es": "Eliminar conexiones de red innecesarias",
                    "de": "Unnötige Netzverbindungen entfernen",
                    "nl": "Onnodige netwerkverbindingen verwijderen"
                },
                {
                    "en": "Cutting paper",
                    "es": "Cortar papel",
                    "de": "Papier schneiden",
                    "nl": "Papier knippen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Model pruning removes redundant weights and connections to make models smaller and faster.",
                "es": "La poda elimina pesos redundantes para hacer modelos más pequeños y rápidos.",
                "de": "Modellpruning entfernt redundante Gewichte für kleinere schnellere Modelle.",
                "nl": "Modelpruning verwijdert overbodige gewichten om modellen kleiner en sneller te maken."
            }
        },
        {
            "question": {
                "en": "What is knowledge distillation?",
                "es": "¿Qué es la destilación de conocimiento?",
                "de": "Was ist Wissensdestillation?",
                "nl": "Wat is kennisdestillatie?"
            },
            "options": [
                {
                    "en": "Training a small model from a large one",
                    "es": "Entrenar un modelo pequeño a partir de uno grande",
                    "de": "Ein kleines Modell von einem großen trainieren",
                    "nl": "Een klein model trainen van een groot model"
                },
                {
                    "en": "Distilling water",
                    "es": "Destilar agua",
                    "de": "Wasser destillieren",
                    "nl": "Water destilleren"
                },
                {
                    "en": "Extracting essential oils",
                    "es": "Extraer aceites esenciales",
                    "de": "Ätherische Öle extrahieren",
                    "nl": "Essentiële oliën extraheren"
                },
                {
                    "en": "Summarizing a book",
                    "es": "Resumir un libro",
                    "de": "Ein Buch zusammenfassen",
                    "nl": "Een boek samenvatten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Knowledge distillation transfers knowledge from a large teacher model to a smaller student.",
                "es": "La destilación transfiere conocimiento de un modelo grande a uno más pequeño.",
                "de": "Wissensdestillation überträgt Wissen von einem großen auf ein kleines Modell.",
                "nl": "Kennisdestillatie draagt kennis over van een groot lerarenmodel naar een kleiner studentmodel."
            }
        },
        {
            "question": {
                "en": "What is gradient clipping?",
                "es": "¿Qué es el recorte de gradientes?",
                "de": "Was ist Gradient Clipping?",
                "nl": "Wat is gradiënt-clipping?"
            },
            "options": [
                {
                    "en": "Clipping newspaper articles",
                    "es": "Recortar artículos de periódico",
                    "de": "Zeitungsartikel ausschneiden",
                    "nl": "Krantenartikelen knippen"
                },
                {
                    "en": "Cutting hair",
                    "es": "Cortar el cabello",
                    "de": "Haare schneiden",
                    "nl": "Haar knippen"
                },
                {
                    "en": "Limiting gradient values to prevent explosion",
                    "es": "Limitar valores de gradiente para prevenir explosión",
                    "de": "Gradientenwerte begrenzen um Explosion zu verhindern",
                    "nl": "Gradiëntwaarden beperken om explosie te voorkomen"
                },
                {
                    "en": "Trimming videos",
                    "es": "Recortar videos",
                    "de": "Videos kürzen",
                    "nl": "Video's bijsnijden"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Gradient clipping caps gradient values to prevent the exploding gradient problem.",
                "es": "El recorte limita los valores de gradiente para prevenir el problema de explosión.",
                "de": "Gradient Clipping begrenzt Gradientenwerte um Explosion zu verhindern.",
                "nl": "Gradiënt-clipping beperkt gradiëntwaarden om het exploderende gradiëntprobleem te voorkomen."
            }
        },
        {
            "question": {
                "en": "What is mixed precision training?",
                "es": "¿Qué es el entrenamiento de precisión mixta?",
                "de": "Was ist Training mit gemischter Präzision?",
                "nl": "Wat is mixed precision training?"
            },
            "options": [
                {
                    "en": "Using different number formats for speed",
                    "es": "Usar diferentes formatos numéricos para velocidad",
                    "de": "Verschiedene Zahlenformate für Geschwindigkeit",
                    "nl": "Verschillende getalformaten voor snelheid"
                },
                {
                    "en": "Mixing cooking ingredients precisely",
                    "es": "Mezclar ingredientes con precisión",
                    "de": "Zutaten präzise mischen",
                    "nl": "Ingrediënten precies mengen"
                },
                {
                    "en": "A gym training routine",
                    "es": "Una rutina de entrenamiento",
                    "de": "Ein Trainingsplan",
                    "nl": "Een trainingsschema"
                },
                {
                    "en": "A mixed martial arts style",
                    "es": "Un estilo de artes marciales",
                    "de": "Ein Kampfkunststil",
                    "nl": "Een gemengde vechtkunststijl"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Mixed precision training uses both 16-bit and 32-bit numbers to train faster with less memory.",
                "es": "El entrenamiento de precisión mixta usa números de 16 y 32 bits para mayor velocidad.",
                "de": "Training mit gemischter Präzision verwendet 16- und 32-Bit-Zahlen für schnelleres Training.",
                "nl": "Mixed precision training gebruikt zowel 16-bit als 32-bit getallen om sneller te trainen."
            }
        },
        {
            "question": {
                "en": "What is a U-Net?",
                "es": "¿Qué es una U-Net?",
                "de": "Was ist ein U-Net?",
                "nl": "Wat is een U-Net?"
            },
            "options": [
                {
                    "en": "A submarine network",
                    "es": "Una red submarina",
                    "de": "Ein U-Boot-Netzwerk",
                    "nl": "Een onderzeeërnetwerk"
                },
                {
                    "en": "A university network",
                    "es": "Una red universitaria",
                    "de": "Ein Universitätsnetzwerk",
                    "nl": "Een universiteitsnetwerk"
                },
                {
                    "en": "Encoder-decoder network for segmentation",
                    "es": "Red codificador-decodificador para segmentación",
                    "de": "Encoder-Decoder-Netz für Segmentierung",
                    "nl": "Encoder-decoder netwerk voor segmentatie"
                },
                {
                    "en": "A USB network",
                    "es": "Una red USB",
                    "de": "Ein USB-Netzwerk",
                    "nl": "Een USB-netwerk"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "U-Net is an encoder-decoder architecture widely used for image segmentation tasks.",
                "es": "U-Net es una arquitectura codificador-decodificador para segmentación de imágenes.",
                "de": "U-Net ist eine Encoder-Decoder-Architektur für Bildsegmentierung.",
                "nl": "U-Net is een encoder-decoder architectuur die veel wordt gebruikt voor beeldsegmentatie."
            }
        },
        {
            "question": {
                "en": "What is multi-head attention?",
                "es": "¿Qué es la atención multi-cabeza?",
                "de": "Was ist Multi-Head-Attention?",
                "nl": "Wat is multi-head attention?"
            },
            "options": [
                {
                    "en": "Running multiple attention in parallel",
                    "es": "Ejecutar múltiples atenciones en paralelo",
                    "de": "Mehrere Aufmerksamkeiten parallel ausführen",
                    "nl": "Meerdere aandachtsmechanismen parallel uitvoeren"
                },
                {
                    "en": "A multi-headed creature",
                    "es": "Una criatura de múltiples cabezas",
                    "de": "Ein vielköpfiges Wesen",
                    "nl": "Een wezen met meerdere hoofden"
                },
                {
                    "en": "Multiple shower heads",
                    "es": "Múltiples cabezales de ducha",
                    "de": "Mehrere Duschköpfe",
                    "nl": "Meerdere douchekoppen"
                },
                {
                    "en": "A team of leaders",
                    "es": "Un equipo de líderes",
                    "de": "Ein Führungsteam",
                    "nl": "Een team van leiders"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Multi-head attention runs several attention functions in parallel for richer representations.",
                "es": "La atención multi-cabeza ejecuta varias funciones de atención en paralelo.",
                "de": "Multi-Head-Attention führt mehrere Aufmerksamkeitsfunktionen parallel aus.",
                "nl": "Multi-head attention voert meerdere aandachtsfuncties parallel uit voor rijkere representaties."
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
                    "en": "Teaching yourself a skill",
                    "es": "Enseñarse una habilidad",
                    "de": "Sich selbst etwas beibringen",
                    "nl": "Jezelf een vaardigheid aanleren"
                },
                {
                    "en": "Self-study with textbooks",
                    "es": "Autoestudio con libros",
                    "de": "Selbststudium mit Büchern",
                    "nl": "Zelfstudie met boeken"
                },
                {
                    "en": "Learning from data without manual labels",
                    "es": "Aprender de datos sin etiquetas manuales",
                    "de": "Aus Daten ohne manuelle Labels lernen",
                    "nl": "Leren van data zonder handmatige labels"
                },
                {
                    "en": "Learning from mistakes",
                    "es": "Aprender de errores",
                    "de": "Aus Fehlern lernen",
                    "nl": "Leren van fouten"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Self-supervised learning creates labels from the data itself, avoiding manual annotation.",
                "es": "El aprendizaje auto-supervisado crea etiquetas de los propios datos.",
                "de": "Selbstüberwachtes Lernen erstellt Labels aus den Daten selbst.",
                "nl": "Zelfgesuperviseerd leren creëert labels uit de data zelf, zonder handmatige annotatie."
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
                    "de": "Durch Vergleich ähnlicher und verschiedener Paare lernen",
                    "nl": "Leren door vergelijkbare en verschillende paren te vergelijken"
                },
                {
                    "en": "Adjusting screen contrast",
                    "es": "Ajustar contraste de pantalla",
                    "de": "Bildschirmkontrast anpassen",
                    "nl": "Schermcontrast aanpassen"
                },
                {
                    "en": "Comparing prices",
                    "es": "Comparar precios",
                    "de": "Preise vergleichen",
                    "nl": "Prijzen vergelijken"
                },
                {
                    "en": "A debate technique",
                    "es": "Una técnica de debate",
                    "de": "Eine Debattentechnik",
                    "nl": "Een debattechniek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Contrastive learning trains models by pulling similar pairs closer and pushing different apart.",
                "es": "El aprendizaje contrastivo entrena acercando pares similares y alejando diferentes.",
                "de": "Kontrastives Lernen trainiert durch Annäherung ähnlicher und Abstoßung verschiedener Paare.",
                "nl": "Contrastief leren traint modellen door vergelijkbare paren dichter bij elkaar te trekken."
            }
        },
        {
            "question": {
                "en": "What is a neural network layer?",
                "es": "¿Qué es una capa de red neuronal?",
                "de": "Was ist eine neuronale Netzschicht?",
                "nl": "Wat is een neurale netwerklaag?"
            },
            "options": [
                {
                    "en": "A layer of paint",
                    "es": "Una capa de pintura",
                    "de": "Eine Farbschicht",
                    "nl": "Een verflaag"
                },
                {
                    "en": "A geological formation",
                    "es": "Una formación geológica",
                    "de": "Eine geologische Formation",
                    "nl": "Een geologische formatie"
                },
                {
                    "en": "A group of neurons processing data",
                    "es": "Un grupo de neuronas procesando datos",
                    "de": "Eine Gruppe von Neuronen die Daten verarbeiten",
                    "nl": "Een groep neuronen die data verwerken"
                },
                {
                    "en": "A cake layer",
                    "es": "Una capa de pastel",
                    "de": "Eine Tortenschicht",
                    "nl": "Een taartlaag"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A neural network layer is a collection of neurons that transforms input data.",
                "es": "Una capa es una colección de neuronas que transforma datos de entrada.",
                "de": "Eine Schicht ist eine Sammlung von Neuronen die Eingabedaten transformiert.",
                "nl": "Een neurale netwerklaag is een verzameling neuronen die invoerdata transformeert."
            }
        },
        {
            "question": {
                "en": "What is a hidden layer?",
                "es": "¿Qué es una capa oculta?",
                "de": "Was ist eine versteckte Schicht?",
                "nl": "Wat is een verborgen laag?"
            },
            "options": [
                {
                    "en": "A layer between input and output",
                    "es": "Una capa entre entrada y salida",
                    "de": "Eine Schicht zwischen Eingang und Ausgang",
                    "nl": "Een laag tussen invoer en uitvoer"
                },
                {
                    "en": "A secret room",
                    "es": "Una habitación secreta",
                    "de": "Ein geheimer Raum",
                    "nl": "Een geheime kamer"
                },
                {
                    "en": "An invisible text field",
                    "es": "Un campo de texto invisible",
                    "de": "Ein unsichtbares Textfeld",
                    "nl": "Een onzichtbaar tekstveld"
                },
                {
                    "en": "A hidden file",
                    "es": "Un archivo oculto",
                    "de": "Eine versteckte Datei",
                    "nl": "Een verborgen bestand"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Hidden layers process data between input and output layers in a neural network.",
                "es": "Las capas ocultas procesan datos entre las capas de entrada y salida.",
                "de": "Versteckte Schichten verarbeiten Daten zwischen Eingangs- und Ausgangsschicht.",
                "nl": "Verborgen lagen verwerken data tussen de invoer- en uitvoerlagen in een neuraal netwerk."
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
                    "en": "Organizing batches of products",
                    "es": "Organizar lotes de productos",
                    "de": "Produktchargen organisieren",
                    "nl": "Productpartijen organiseren"
                },
                {
                    "en": "A cooking technique",
                    "es": "Una técnica de cocina",
                    "de": "Eine Kochtechnik",
                    "nl": "Een kooktechniek"
                },
                {
                    "en": "Normalizing layer inputs during training",
                    "es": "Normalizar entradas de capas durante el entrenamiento",
                    "de": "Schichteingaben während des Trainings normalisieren",
                    "nl": "Laaginvoer normaliseren tijdens training"
                },
                {
                    "en": "A cleaning method",
                    "es": "Un método de limpieza",
                    "de": "Eine Reinigungsmethode",
                    "nl": "Een schoonmaakmethode"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Batch normalization normalizes layer inputs to stabilize and speed up training.",
                "es": "La normalización por lotes normaliza entradas para estabilizar el entrenamiento.",
                "de": "Batch-Normalisierung normalisiert Eingaben zur Stabilisierung des Trainings.",
                "nl": "Batchnormalisatie normaliseert laaginvoer om training te stabiliseren en versnellen."
            }
        }
    ]
};
