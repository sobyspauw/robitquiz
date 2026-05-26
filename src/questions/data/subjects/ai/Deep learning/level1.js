// Deep learning - Level 1
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "What is a neural network?",
                "es": "¿Qué es una red neuronal?",
                "de": "Was ist ein neuronales Netz?",
                "nl": "Wat is een neuraal netwerk?"
            },
            "options": [
                {
                    "en": "System inspired by biological neurons",
                    "es": "Sistema inspirado en neuronas biológicas",
                    "de": "System inspiriert von biologischen Neuronen",
                    "nl": "Systeem geïnspireerd op biologische neuronen"
                },
                {
                    "en": "Database system",
                    "es": "Sistema de base de datos",
                    "de": "Datenbanksystem",
                    "nl": "Databasesysteem"
                },
                {
                    "en": "Web framework",
                    "es": "Marco web",
                    "de": "Web-Framework",
                    "nl": "Webframework"
                },
                {
                    "en": "Operating system",
                    "es": "Sistema operativo",
                    "de": "Betriebssystem",
                    "nl": "Besturingssysteem"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Neural networks are computing systems inspired by biological neural networks in brains.",
                "es": "Las redes neuronales son sistemas de computación inspirados en redes neuronales biológicas.",
                "de": "Neuronale Netze sind Computersysteme, die von biologischen neuronalen Netzen inspiriert sind.",
                "nl": "Neurale netwerken zijn computersystemen geïnspireerd op biologische neurale netwerken."
            }
        },
        {
            "question": {
                "en": "What is deep learning?",
                "es": "¿Qué es el aprendizaje profundo?",
                "de": "Was ist Deep Learning?",
                "nl": "Wat is deep learning?"
            },
            "options": [
                {
                    "en": "ML using multi-layer neural networks",
                    "es": "ML con redes neuronales multicapa",
                    "de": "ML mit mehrschichtigen neuronalen Netzen",
                    "nl": "ML met meerlaagse neurale netwerken"
                },
                {
                    "en": "Database mining",
                    "es": "Minería de datos",
                    "de": "Daten-Mining",
                    "nl": "Data mining"
                },
                {
                    "en": "Web scraping",
                    "es": "Raspado web",
                    "de": "Web-Scraping",
                    "nl": "Web scraping"
                },
                {
                    "en": "Cloud computing",
                    "es": "Computación en la nube",
                    "de": "Cloud-Computing",
                    "nl": "Cloud computing"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Deep learning uses neural networks with many layers to learn from large amounts of data.",
                "es": "El aprendizaje profundo usa redes neuronales con muchas capas para aprender de grandes cantidades de datos.",
                "de": "Deep Learning verwendet neuronale Netze mit vielen Schichten, um aus großen Datenmengen zu lernen.",
                "nl": "Deep learning gebruikt neurale netwerken met veel lagen om te leren van grote hoeveelheden data."
            }
        },
        {
            "question": {
                "en": "What is a neuron in deep learning?",
                "es": "¿Qué es una neurona en deep learning?",
                "de": "Was ist ein Neuron im Deep Learning?",
                "nl": "Wat is een neuron in deep learning?"
            },
            "options": [
                {
                    "en": "A basic processing unit",
                    "es": "Una unidad de procesamiento básica",
                    "de": "Eine grundlegende Verarbeitungseinheit",
                    "nl": "Een basale verwerkingseenheid"
                },
                {
                    "en": "A type of database",
                    "es": "Un tipo de base de datos",
                    "de": "Ein Datenbanktyp",
                    "nl": "Een type database"
                },
                {
                    "en": "A programming language",
                    "es": "Un lenguaje de programación",
                    "de": "Eine Programmiersprache",
                    "nl": "Een programmeertaal"
                },
                {
                    "en": "A hardware chip",
                    "es": "Un chip de hardware",
                    "de": "Ein Hardware-Chip",
                    "nl": "Een hardwarechip"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A neuron is a basic computational unit that receives inputs, processes them, and produces an output.",
                "es": "Una neurona es una unidad computacional básica que recibe entradas, las procesa y produce una salida.",
                "de": "Ein Neuron ist eine grundlegende Recheneinheit, die Eingaben empfängt, verarbeitet und eine Ausgabe erzeugt.",
                "nl": "Een neuron is een basale rekeneenheid die invoer ontvangt, verwerkt en een uitvoer produceert."
            }
        },
        {
            "question": {
                "en": "What does a layer do in a neural network?",
                "es": "¿Qué hace una capa en una red neuronal?",
                "de": "Was macht eine Schicht in einem neuronalen Netz?",
                "nl": "Wat doet een laag in een neuraal netwerk?"
            },
            "options": [
                {
                    "en": "Processes data at one step",
                    "es": "Procesa datos en un paso",
                    "de": "Verarbeitet Daten in einem Schritt",
                    "nl": "Verwerkt data in één stap"
                },
                {
                    "en": "Stores files",
                    "es": "Almacena archivos",
                    "de": "Speichert Dateien",
                    "nl": "Slaat bestanden op"
                },
                {
                    "en": "Connects to the internet",
                    "es": "Se conecta a internet",
                    "de": "Verbindet sich mit dem Internet",
                    "nl": "Maakt verbinding met internet"
                },
                {
                    "en": "Displays images",
                    "es": "Muestra imágenes",
                    "de": "Zeigt Bilder an",
                    "nl": "Toont afbeeldingen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A layer is a group of neurons that processes data at one stage of the network.",
                "es": "Una capa es un grupo de neuronas que procesa datos en una etapa de la red.",
                "de": "Eine Schicht ist eine Gruppe von Neuronen, die Daten in einer Stufe des Netzwerks verarbeitet.",
                "nl": "Een laag is een groep neuronen die data verwerkt in één fase van het netwerk."
            }
        },
        {
            "question": {
                "en": "What is the input layer?",
                "es": "¿Qué es la capa de entrada?",
                "de": "Was ist die Eingabeschicht?",
                "nl": "Wat is de invoerlaag?"
            },
            "options": [
                {
                    "en": "First layer receiving raw data",
                    "es": "Primera capa que recibe datos crudos",
                    "de": "Erste Schicht, die Rohdaten empfängt",
                    "nl": "Eerste laag die ruwe data ontvangt"
                },
                {
                    "en": "Last layer giving results",
                    "es": "Última capa que da resultados",
                    "de": "Letzte Schicht mit Ergebnissen",
                    "nl": "Laatste laag die resultaten geeft"
                },
                {
                    "en": "Middle processing layer",
                    "es": "Capa de procesamiento intermedia",
                    "de": "Mittlere Verarbeitungsschicht",
                    "nl": "Middelste verwerkingslaag"
                },
                {
                    "en": "A debugging tool",
                    "es": "Una herramienta de depuración",
                    "de": "Ein Debugging-Tool",
                    "nl": "Een debugging tool"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The input layer is the first layer of a neural network that receives the raw data for processing.",
                "es": "La capa de entrada es la primera capa de una red neuronal que recibe los datos crudos para procesar.",
                "de": "Die Eingabeschicht ist die erste Schicht eines neuronalen Netzes, die Rohdaten zur Verarbeitung empfängt.",
                "nl": "De invoerlaag is de eerste laag van een neuraal netwerk die de ruwe data ontvangt voor verwerking."
            }
        },
        {
            "question": {
                "en": "What is the output layer?",
                "es": "¿Qué es la capa de salida?",
                "de": "Was ist die Ausgabeschicht?",
                "nl": "Wat is de uitvoerlaag?"
            },
            "options": [
                {
                    "en": "Last layer producing results",
                    "es": "Última capa que produce resultados",
                    "de": "Letzte Schicht, die Ergebnisse liefert",
                    "nl": "Laatste laag die resultaten produceert"
                },
                {
                    "en": "First layer receiving data",
                    "es": "Primera capa que recibe datos",
                    "de": "Erste Schicht, die Daten empfängt",
                    "nl": "Eerste laag die data ontvangt"
                },
                {
                    "en": "A hidden layer",
                    "es": "Una capa oculta",
                    "de": "Eine versteckte Schicht",
                    "nl": "Een verborgen laag"
                },
                {
                    "en": "A storage layer",
                    "es": "Una capa de almacenamiento",
                    "de": "Eine Speicherschicht",
                    "nl": "Een opslaglaag"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The output layer is the final layer that produces the network's prediction or result.",
                "es": "La capa de salida es la capa final que produce la predicción o resultado de la red.",
                "de": "Die Ausgabeschicht ist die letzte Schicht, die die Vorhersage oder das Ergebnis des Netzes liefert.",
                "nl": "De uitvoerlaag is de laatste laag die de voorspelling of het resultaat van het netwerk produceert."
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
                    "en": "Layer between input and output",
                    "es": "Capa entre entrada y salida",
                    "de": "Schicht zwischen Ein- und Ausgabe",
                    "nl": "Laag tussen invoer en uitvoer"
                },
                {
                    "en": "Layer that is invisible",
                    "es": "Capa que es invisible",
                    "de": "Schicht die unsichtbar ist",
                    "nl": "Laag die onzichtbaar is"
                },
                {
                    "en": "Layer that stores secrets",
                    "es": "Capa que almacena secretos",
                    "de": "Schicht die Geheimnisse speichert",
                    "nl": "Laag die geheimen opslaat"
                },
                {
                    "en": "Layer that is unused",
                    "es": "Capa que no se usa",
                    "de": "Schicht die nicht verwendet wird",
                    "nl": "Laag die niet wordt gebruikt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Hidden layers are layers between input and output that perform intermediate computations.",
                "es": "Las capas ocultas son capas entre entrada y salida que realizan cálculos intermedios.",
                "de": "Versteckte Schichten sind Schichten zwischen Ein- und Ausgabe, die Zwischenberechnungen durchführen.",
                "nl": "Verborgen lagen zijn lagen tussen invoer en uitvoer die tussenberekeningen uitvoeren."
            }
        },
        {
            "question": {
                "en": "What is training a neural network?",
                "es": "¿Qué es entrenar una red neuronal?",
                "de": "Was ist das Training eines neuronalen Netzes?",
                "nl": "Wat is het trainen van een neuraal netwerk?"
            },
            "options": [
                {
                    "en": "Teaching it from example data",
                    "es": "Enseñarle con datos de ejemplo",
                    "de": "Es mit Beispieldaten zu lehren",
                    "nl": "Het leren van voorbeelddata"
                },
                {
                    "en": "Installing software",
                    "es": "Instalar software",
                    "de": "Software installieren",
                    "nl": "Software installeren"
                },
                {
                    "en": "Building hardware",
                    "es": "Construir hardware",
                    "de": "Hardware bauen",
                    "nl": "Hardware bouwen"
                },
                {
                    "en": "Writing code manually",
                    "es": "Escribir código manualmente",
                    "de": "Code manuell schreiben",
                    "nl": "Code handmatig schrijven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Training means adjusting the network's parameters using example data so it learns to make predictions.",
                "es": "Entrenar significa ajustar los parámetros de la red usando datos de ejemplo para que aprenda a hacer predicciones.",
                "de": "Training bedeutet, die Parameter des Netzes mit Beispieldaten anzupassen, damit es Vorhersagen lernt.",
                "nl": "Trainen betekent de parameters van het netwerk aanpassen met voorbeelddata zodat het leert voorspellingen te maken."
            }
        },
        {
            "question": {
                "en": "What is an activation function?",
                "es": "¿Qué es una función de activación?",
                "de": "Was ist eine Aktivierungsfunktion?",
                "nl": "Wat is een activatiefunctie?"
            },
            "options": [
                {
                    "en": "Function deciding neuron output",
                    "es": "Función que decide la salida",
                    "de": "Funktion die Ausgabe bestimmt",
                    "nl": "Functie die uitvoer bepaalt"
                },
                {
                    "en": "Function to start a program",
                    "es": "Función para iniciar un programa",
                    "de": "Funktion zum Starten eines Programms",
                    "nl": "Functie om een programma te starten"
                },
                {
                    "en": "Function to delete data",
                    "es": "Función para borrar datos",
                    "de": "Funktion zum Löschen von Daten",
                    "nl": "Functie om data te verwijderen"
                },
                {
                    "en": "Function to save files",
                    "es": "Función para guardar archivos",
                    "de": "Funktion zum Speichern von Dateien",
                    "nl": "Functie om bestanden op te slaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An activation function determines whether a neuron should be activated based on its input.",
                "es": "Una función de activación determina si una neurona debe activarse según su entrada.",
                "de": "Eine Aktivierungsfunktion bestimmt, ob ein Neuron basierend auf seiner Eingabe aktiviert werden soll.",
                "nl": "Een activatiefunctie bepaalt of een neuron geactiveerd moet worden op basis van de invoer."
            }
        },
        {
            "question": {
                "en": "What is a weight in a neural network?",
                "es": "¿Qué es un peso en una red neuronal?",
                "de": "Was ist ein Gewicht in einem neuronalen Netz?",
                "nl": "Wat is een gewicht in een neuraal netwerk?"
            },
            "options": [
                {
                    "en": "Number showing connection strength",
                    "es": "Número que muestra fuerza de conexión",
                    "de": "Zahl die Verbindungsstärke zeigt",
                    "nl": "Getal dat verbindingssterkte toont"
                },
                {
                    "en": "Physical mass of the network",
                    "es": "Masa física de la red",
                    "de": "Physische Masse des Netzes",
                    "nl": "Fysieke massa van het netwerk"
                },
                {
                    "en": "Speed of computation",
                    "es": "Velocidad de cálculo",
                    "de": "Berechnungsgeschwindigkeit",
                    "nl": "Rekensnelheid"
                },
                {
                    "en": "Amount of stored data",
                    "es": "Cantidad de datos almacenados",
                    "de": "Menge gespeicherter Daten",
                    "nl": "Hoeveelheid opgeslagen data"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A weight is a number that represents the strength of the connection between two neurons.",
                "es": "Un peso es un número que representa la fuerza de la conexión entre dos neuronas.",
                "de": "Ein Gewicht ist eine Zahl, die die Stärke der Verbindung zwischen zwei Neuronen darstellt.",
                "nl": "Een gewicht is een getal dat de sterkte van de verbinding tussen twee neuronen weergeeft."
            }
        },
        {
            "question": {
                "en": "What is a bias in a neural network?",
                "es": "¿Qué es un sesgo en una red neuronal?",
                "de": "Was ist ein Bias in einem neuronalen Netz?",
                "nl": "Wat is een bias in een neuraal netwerk?"
            },
            "options": [
                {
                    "en": "Extra value added to neuron input",
                    "es": "Valor extra añadido a la entrada",
                    "de": "Zusätzlicher Wert zur Eingabe",
                    "nl": "Extra waarde toegevoegd aan invoer"
                },
                {
                    "en": "Error in the network",
                    "es": "Error en la red",
                    "de": "Fehler im Netz",
                    "nl": "Fout in het netwerk"
                },
                {
                    "en": "Type of activation function",
                    "es": "Tipo de función de activación",
                    "de": "Art der Aktivierungsfunktion",
                    "nl": "Type activatiefunctie"
                },
                {
                    "en": "Network speed setting",
                    "es": "Ajuste de velocidad de red",
                    "de": "Netzwerk-Geschwindigkeitseinstellung",
                    "nl": "Netwerksnelheidsinstelling"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A bias is an additional parameter that helps the model fit the data better by shifting the activation.",
                "es": "Un sesgo es un parámetro adicional que ayuda al modelo a ajustarse mejor desplazando la activación.",
                "de": "Ein Bias ist ein zusätzlicher Parameter, der dem Modell hilft, die Daten besser anzupassen.",
                "nl": "Een bias is een extra parameter die het model helpt de data beter te fitten door de activatie te verschuiven."
            }
        },
        {
            "question": {
                "en": "What does 'deep' mean in deep learning?",
                "es": "¿Qué significa 'profundo' en deep learning?",
                "de": "Was bedeutet 'tief' in Deep Learning?",
                "nl": "Wat betekent 'diep' in deep learning?"
            },
            "options": [
                {
                    "en": "Many layers in the network",
                    "es": "Muchas capas en la red",
                    "de": "Viele Schichten im Netz",
                    "nl": "Veel lagen in het netwerk"
                },
                {
                    "en": "Very complex math",
                    "es": "Matemáticas muy complejas",
                    "de": "Sehr komplexe Mathematik",
                    "nl": "Zeer complexe wiskunde"
                },
                {
                    "en": "Deep underground computing",
                    "es": "Computación subterránea",
                    "de": "Unterirdische Berechnung",
                    "nl": "Ondergrondse berekening"
                },
                {
                    "en": "Deep thinking by humans",
                    "es": "Pensamiento profundo humano",
                    "de": "Tiefes menschliches Denken",
                    "nl": "Diep menselijk denken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The 'deep' in deep learning refers to the many layers between input and output in the neural network.",
                "es": "El 'profundo' en aprendizaje profundo se refiere a las muchas capas entre entrada y salida en la red.",
                "de": "Das 'tief' in Deep Learning bezieht sich auf die vielen Schichten zwischen Ein- und Ausgabe im Netz.",
                "nl": "Het 'diep' in deep learning verwijst naar de vele lagen tussen invoer en uitvoer in het netwerk."
            }
        },
        {
            "question": {
                "en": "What is forward propagation?",
                "es": "¿Qué es la propagación hacia adelante?",
                "de": "Was ist Vorwärtspropagation?",
                "nl": "Wat is forward propagation?"
            },
            "options": [
                {
                    "en": "Data flowing from input to output",
                    "es": "Datos fluyendo de entrada a salida",
                    "de": "Daten fließen von Eingabe zu Ausgabe",
                    "nl": "Data stroomt van invoer naar uitvoer"
                },
                {
                    "en": "Data going backwards",
                    "es": "Datos retrocediendo",
                    "de": "Daten gehen rückwärts",
                    "nl": "Data gaat achteruit"
                },
                {
                    "en": "Deleting network layers",
                    "es": "Eliminar capas de red",
                    "de": "Netzwerkschichten löschen",
                    "nl": "Netwerklagen verwijderen"
                },
                {
                    "en": "Adding new neurons",
                    "es": "Añadir nuevas neuronas",
                    "de": "Neue Neuronen hinzufügen",
                    "nl": "Nieuwe neuronen toevoegen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Forward propagation is when data passes through the network from input to output to make a prediction.",
                "es": "La propagación hacia adelante es cuando los datos pasan por la red de entrada a salida para hacer una predicción.",
                "de": "Vorwärtspropagation ist, wenn Daten vom Eingang zum Ausgang durch das Netz fließen, um eine Vorhersage zu machen.",
                "nl": "Forward propagation is wanneer data door het netwerk stroomt van invoer naar uitvoer om een voorspelling te maken."
            }
        },
        {
            "question": {
                "en": "What is backpropagation?",
                "es": "¿Qué es la retropropagación?",
                "de": "Was ist Backpropagation?",
                "nl": "Wat is backpropagation?"
            },
            "options": [
                {
                    "en": "Method to update weights using errors",
                    "es": "Método para actualizar pesos con errores",
                    "de": "Methode zur Aktualisierung von Gewichten",
                    "nl": "Methode om gewichten bij te werken met fouten"
                },
                {
                    "en": "Running the network backwards",
                    "es": "Ejecutar la red al revés",
                    "de": "Das Netz rückwärts laufen lassen",
                    "nl": "Het netwerk achteruit draaien"
                },
                {
                    "en": "Deleting old data",
                    "es": "Eliminar datos antiguos",
                    "de": "Alte Daten löschen",
                    "nl": "Oude data verwijderen"
                },
                {
                    "en": "Creating new layers",
                    "es": "Crear nuevas capas",
                    "de": "Neue Schichten erstellen",
                    "nl": "Nieuwe lagen aanmaken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Backpropagation calculates how much each weight contributed to the error and adjusts them.",
                "es": "La retropropagación calcula cuánto contribuyó cada peso al error y los ajusta.",
                "de": "Backpropagation berechnet, wie viel jedes Gewicht zum Fehler beigetragen hat, und passt sie an.",
                "nl": "Backpropagation berekent hoeveel elk gewicht aan de fout heeft bijgedragen en past ze aan."
            }
        },
        {
            "question": {
                "en": "What is a loss function?",
                "es": "¿Qué es una función de pérdida?",
                "de": "Was ist eine Verlustfunktion?",
                "nl": "Wat is een verliesfunctie?"
            },
            "options": [
                {
                    "en": "Measures prediction error",
                    "es": "Mide el error de predicción",
                    "de": "Misst den Vorhersagefehler",
                    "nl": "Meet de voorspellingsfout"
                },
                {
                    "en": "Counts network layers",
                    "es": "Cuenta capas de red",
                    "de": "Zählt Netzwerkschichten",
                    "nl": "Telt netwerklagen"
                },
                {
                    "en": "Measures network speed",
                    "es": "Mide velocidad de la red",
                    "de": "Misst Netzwerkgeschwindigkeit",
                    "nl": "Meet netwerksnelheid"
                },
                {
                    "en": "Counts training data",
                    "es": "Cuenta datos de entrenamiento",
                    "de": "Zählt Trainingsdaten",
                    "nl": "Telt trainingsdata"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A loss function measures how far the network's predictions are from the actual correct values.",
                "es": "Una función de pérdida mide qué tan lejos están las predicciones de la red de los valores correctos.",
                "de": "Eine Verlustfunktion misst, wie weit die Vorhersagen des Netzes von den tatsächlichen Werten entfernt sind.",
                "nl": "Een verliesfunctie meet hoe ver de voorspellingen van het netwerk afwijken van de werkelijke waarden."
            }
        },
        {
            "question": {
                "en": "What is an epoch in training?",
                "es": "¿Qué es una época en entrenamiento?",
                "de": "Was ist eine Epoche beim Training?",
                "nl": "Wat is een epoch bij training?"
            },
            "options": [
                {
                    "en": "One pass through all training data",
                    "es": "Un paso por todos los datos",
                    "de": "Ein Durchlauf durch alle Daten",
                    "nl": "Eén keer door alle trainingsdata"
                },
                {
                    "en": "One single prediction",
                    "es": "Una sola predicción",
                    "de": "Eine einzelne Vorhersage",
                    "nl": "Eén enkele voorspelling"
                },
                {
                    "en": "A time period of one hour",
                    "es": "Un período de una hora",
                    "de": "Ein Zeitraum von einer Stunde",
                    "nl": "Een periode van één uur"
                },
                {
                    "en": "A type of neural network",
                    "es": "Un tipo de red neuronal",
                    "de": "Ein Typ neuronales Netz",
                    "nl": "Een type neuraal netwerk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An epoch is one complete pass through the entire training dataset during the learning process.",
                "es": "Una época es un paso completo por todo el conjunto de datos de entrenamiento durante el aprendizaje.",
                "de": "Eine Epoche ist ein vollständiger Durchlauf durch den gesamten Trainingsdatensatz.",
                "nl": "Een epoch is één complete doorgang door de gehele trainingsdataset tijdens het leerproces."
            }
        },
        {
            "question": {
                "en": "What is a batch in deep learning?",
                "es": "¿Qué es un lote en deep learning?",
                "de": "Was ist ein Batch im Deep Learning?",
                "nl": "Wat is een batch in deep learning?"
            },
            "options": [
                {
                    "en": "Subset of training data per step",
                    "es": "Subconjunto de datos por paso",
                    "de": "Teilmenge der Trainingsdaten pro Schritt",
                    "nl": "Deelverzameling trainingsdata per stap"
                },
                {
                    "en": "The entire dataset",
                    "es": "El conjunto de datos completo",
                    "de": "Der gesamte Datensatz",
                    "nl": "De gehele dataset"
                },
                {
                    "en": "A type of neural network",
                    "es": "Un tipo de red neuronal",
                    "de": "Ein Typ neuronales Netz",
                    "nl": "Een type neuraal netwerk"
                },
                {
                    "en": "A testing method",
                    "es": "Un método de prueba",
                    "de": "Eine Testmethode",
                    "nl": "Een testmethode"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A batch is a subset of training data used in one iteration to update the network's weights.",
                "es": "Un lote es un subconjunto de datos de entrenamiento usado en una iteración para actualizar los pesos.",
                "de": "Ein Batch ist eine Teilmenge der Trainingsdaten, die in einer Iteration zur Gewichtsaktualisierung verwendet wird.",
                "nl": "Een batch is een deelverzameling trainingsdata die in één iteratie wordt gebruikt om gewichten bij te werken."
            }
        },
        {
            "question": {
                "en": "What is the learning rate?",
                "es": "¿Qué es la tasa de aprendizaje?",
                "de": "Was ist die Lernrate?",
                "nl": "Wat is de leersnelheid?"
            },
            "options": [
                {
                    "en": "Controls how fast weights update",
                    "es": "Controla la velocidad de actualización",
                    "de": "Steuert Geschwindigkeit der Aktualisierung",
                    "nl": "Bepaalt hoe snel gewichten updaten"
                },
                {
                    "en": "Speed of the computer",
                    "es": "Velocidad del ordenador",
                    "de": "Geschwindigkeit des Computers",
                    "nl": "Snelheid van de computer"
                },
                {
                    "en": "Number of training epochs",
                    "es": "Número de épocas de entrenamiento",
                    "de": "Anzahl der Trainingsepochen",
                    "nl": "Aantal trainingsepochen"
                },
                {
                    "en": "Size of the dataset",
                    "es": "Tamaño del conjunto de datos",
                    "de": "Größe des Datensatzes",
                    "nl": "Grootte van de dataset"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The learning rate controls how much weights are adjusted during each training step.",
                "es": "La tasa de aprendizaje controla cuánto se ajustan los pesos en cada paso de entrenamiento.",
                "de": "Die Lernrate steuert, wie stark die Gewichte bei jedem Trainingsschritt angepasst werden.",
                "nl": "De leersnelheid bepaalt hoeveel de gewichten worden aangepast bij elke trainingsstap."
            }
        },
        {
            "question": {
                "en": "What is overfitting?",
                "es": "¿Qué es el sobreajuste?",
                "de": "Was ist Überanpassung?",
                "nl": "Wat is overfitting?"
            },
            "options": [
                {
                    "en": "Model learns training data too well",
                    "es": "Modelo aprende datos demasiado bien",
                    "de": "Modell lernt Trainingsdaten zu gut",
                    "nl": "Model leert trainingsdata te goed"
                },
                {
                    "en": "Model does not learn at all",
                    "es": "Modelo no aprende nada",
                    "de": "Modell lernt gar nicht",
                    "nl": "Model leert helemaal niet"
                },
                {
                    "en": "Model runs too slowly",
                    "es": "Modelo funciona demasiado lento",
                    "de": "Modell läuft zu langsam",
                    "nl": "Model draait te langzaam"
                },
                {
                    "en": "Model uses too much memory",
                    "es": "Modelo usa demasiada memoria",
                    "de": "Modell verwendet zu viel Speicher",
                    "nl": "Model gebruikt te veel geheugen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Overfitting happens when a model memorizes training data instead of learning general patterns.",
                "es": "El sobreajuste ocurre cuando un modelo memoriza los datos de entrenamiento en vez de aprender patrones generales.",
                "de": "Überanpassung tritt auf, wenn ein Modell Trainingsdaten auswendig lernt statt allgemeine Muster.",
                "nl": "Overfitting gebeurt wanneer een model trainingsdata uit het hoofd leert in plaats van algemene patronen."
            }
        },
        {
            "question": {
                "en": "What is underfitting?",
                "es": "¿Qué es el subajuste?",
                "de": "Was ist Unteranpassung?",
                "nl": "Wat is underfitting?"
            },
            "options": [
                {
                    "en": "Model is too simple to learn patterns",
                    "es": "Modelo es demasiado simple",
                    "de": "Modell ist zu einfach für Muster",
                    "nl": "Model is te simpel om patronen te leren"
                },
                {
                    "en": "Model is too complex",
                    "es": "Modelo es demasiado complejo",
                    "de": "Modell ist zu komplex",
                    "nl": "Model is te complex"
                },
                {
                    "en": "Model runs too fast",
                    "es": "Modelo funciona demasiado rápido",
                    "de": "Modell läuft zu schnell",
                    "nl": "Model draait te snel"
                },
                {
                    "en": "Model has too much data",
                    "es": "Modelo tiene demasiados datos",
                    "de": "Modell hat zu viele Daten",
                    "nl": "Model heeft te veel data"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Underfitting happens when a model is too simple to capture the underlying patterns in the data.",
                "es": "El subajuste ocurre cuando un modelo es demasiado simple para capturar los patrones de los datos.",
                "de": "Unteranpassung tritt auf, wenn ein Modell zu einfach ist, um die Muster in den Daten zu erfassen.",
                "nl": "Underfitting gebeurt wanneer een model te simpel is om de onderliggende patronen in de data te herkennen."
            }
        },
        {
            "question": {
                "en": "What is a convolutional neural network?",
                "es": "¿Qué es una red neuronal convolucional?",
                "de": "Was ist ein Faltungsneuronales Netz?",
                "nl": "Wat is een convolutioneel neuraal netwerk?"
            },
            "options": [
                {
                    "en": "Network designed for image data",
                    "es": "Red diseñada para datos de imagen",
                    "de": "Netz für Bilddaten entwickelt",
                    "nl": "Netwerk ontworpen voor beelddata"
                },
                {
                    "en": "Network for text only",
                    "es": "Red solo para texto",
                    "de": "Netz nur für Text",
                    "nl": "Netwerk alleen voor tekst"
                },
                {
                    "en": "Network for audio only",
                    "es": "Red solo para audio",
                    "de": "Netz nur für Audio",
                    "nl": "Netwerk alleen voor audio"
                },
                {
                    "en": "Network for numbers only",
                    "es": "Red solo para números",
                    "de": "Netz nur für Zahlen",
                    "nl": "Netwerk alleen voor getallen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A CNN is a type of neural network especially good at processing grid-like data such as images.",
                "es": "Una CNN es un tipo de red neuronal especialmente buena procesando datos de cuadrícula como imágenes.",
                "de": "Ein CNN ist ein neuronales Netz, das besonders gut bei gitterartigen Daten wie Bildern ist.",
                "nl": "Een CNN is een type neuraal netwerk dat vooral goed is in het verwerken van rasterdata zoals afbeeldingen."
            }
        },
        {
            "question": {
                "en": "What is a recurrent neural network?",
                "es": "¿Qué es una red neuronal recurrente?",
                "de": "Was ist ein rekurrentes neuronales Netz?",
                "nl": "Wat is een recurrent neuraal netwerk?"
            },
            "options": [
                {
                    "en": "Network with memory for sequences",
                    "es": "Red con memoria para secuencias",
                    "de": "Netz mit Gedächtnis für Sequenzen",
                    "nl": "Netwerk met geheugen voor reeksen"
                },
                {
                    "en": "Network that runs in circles",
                    "es": "Red que funciona en círculos",
                    "de": "Netz das im Kreis läuft",
                    "nl": "Netwerk dat in cirkels draait"
                },
                {
                    "en": "Network that never stops",
                    "es": "Red que nunca para",
                    "de": "Netz das nie stoppt",
                    "nl": "Netwerk dat nooit stopt"
                },
                {
                    "en": "Network with no layers",
                    "es": "Red sin capas",
                    "de": "Netz ohne Schichten",
                    "nl": "Netwerk zonder lagen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An RNN is designed to handle sequential data by maintaining a form of memory across time steps.",
                "es": "Una RNN está diseñada para manejar datos secuenciales manteniendo memoria a través del tiempo.",
                "de": "Ein RNN ist dafür ausgelegt, sequenzielle Daten zu verarbeiten, indem es ein Gedächtnis über Zeitschritte behält.",
                "nl": "Een RNN is ontworpen om sequentiële data te verwerken door een vorm van geheugen over tijdstappen te behouden."
            }
        },
        {
            "question": {
                "en": "What is dropout in deep learning?",
                "es": "¿Qué es dropout en deep learning?",
                "de": "Was ist Dropout im Deep Learning?",
                "nl": "Wat is dropout in deep learning?"
            },
            "options": [
                {
                    "en": "Randomly disabling neurons during training",
                    "es": "Desactivar neuronas aleatoriamente",
                    "de": "Zufälliges Deaktivieren von Neuronen",
                    "nl": "Willekeurig neuronen uitschakelen"
                },
                {
                    "en": "Removing all layers",
                    "es": "Eliminar todas las capas",
                    "de": "Alle Schichten entfernen",
                    "nl": "Alle lagen verwijderen"
                },
                {
                    "en": "Stopping training early",
                    "es": "Detener el entrenamiento temprano",
                    "de": "Training früh beenden",
                    "nl": "Training vroeg stoppen"
                },
                {
                    "en": "Reducing data size",
                    "es": "Reducir tamaño de datos",
                    "de": "Datengröße reduzieren",
                    "nl": "Datagrootte verkleinen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Dropout randomly deactivates neurons during training to prevent overfitting.",
                "es": "Dropout desactiva neuronas aleatoriamente durante el entrenamiento para prevenir sobreajuste.",
                "de": "Dropout deaktiviert zufällig Neuronen während des Trainings, um Überanpassung zu verhindern.",
                "nl": "Dropout schakelt willekeurig neuronen uit tijdens het trainen om overfitting te voorkomen."
            }
        },
        {
            "question": {
                "en": "What is gradient descent?",
                "es": "¿Qué es el descenso de gradiente?",
                "de": "Was ist Gradientenabstieg?",
                "nl": "Wat is gradient descent?"
            },
            "options": [
                {
                    "en": "Method to minimize the loss function",
                    "es": "Método para minimizar la pérdida",
                    "de": "Methode zur Minimierung der Verlustfunktion",
                    "nl": "Methode om de verliesfunctie te minimaliseren"
                },
                {
                    "en": "Method to increase accuracy",
                    "es": "Método para aumentar precisión",
                    "de": "Methode zur Erhöhung der Genauigkeit",
                    "nl": "Methode om nauwkeurigheid te verhogen"
                },
                {
                    "en": "Method to add more data",
                    "es": "Método para añadir más datos",
                    "de": "Methode zum Hinzufügen von Daten",
                    "nl": "Methode om meer data toe te voegen"
                },
                {
                    "en": "Method to speed up training",
                    "es": "Método para acelerar entrenamiento",
                    "de": "Methode zur Beschleunigung des Trainings",
                    "nl": "Methode om training te versnellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Gradient descent is an optimization algorithm that adjusts weights to minimize the loss function.",
                "es": "El descenso de gradiente es un algoritmo de optimización que ajusta pesos para minimizar la pérdida.",
                "de": "Gradientenabstieg ist ein Optimierungsalgorithmus, der Gewichte anpasst, um die Verlustfunktion zu minimieren.",
                "nl": "Gradient descent is een optimalisatie-algoritme dat gewichten aanpast om de verliesfunctie te minimaliseren."
            }
        },
        {
            "question": {
                "en": "What is a tensor?",
                "es": "¿Qué es un tensor?",
                "de": "Was ist ein Tensor?",
                "nl": "Wat is een tensor?"
            },
            "options": [
                {
                    "en": "Multi-dimensional array of numbers",
                    "es": "Matriz multidimensional de números",
                    "de": "Mehrdimensionales Zahlenarray",
                    "nl": "Meerdimensionale reeks getallen"
                },
                {
                    "en": "A type of neural network",
                    "es": "Un tipo de red neuronal",
                    "de": "Ein Typ neuronales Netz",
                    "nl": "Een type neuraal netwerk"
                },
                {
                    "en": "A graphics card",
                    "es": "Una tarjeta gráfica",
                    "de": "Eine Grafikkarte",
                    "nl": "Een grafische kaart"
                },
                {
                    "en": "A programming language",
                    "es": "Un lenguaje de programación",
                    "de": "Eine Programmiersprache",
                    "nl": "Een programmeertaal"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tensor is a multi-dimensional array used to represent data in deep learning frameworks.",
                "es": "Un tensor es una matriz multidimensional usada para representar datos en frameworks de deep learning.",
                "de": "Ein Tensor ist ein mehrdimensionales Array zur Darstellung von Daten in Deep-Learning-Frameworks.",
                "nl": "Een tensor is een meerdimensionale array die wordt gebruikt om data weer te geven in deep learning frameworks."
            }
        },
        {
            "question": {
                "en": "What is TensorFlow?",
                "es": "¿Qué es TensorFlow?",
                "de": "Was ist TensorFlow?",
                "nl": "Wat is TensorFlow?"
            },
            "options": [
                {
                    "en": "Google's deep learning framework",
                    "es": "Framework de deep learning de Google",
                    "de": "Googles Deep-Learning-Framework",
                    "nl": "Google's deep learning framework"
                },
                {
                    "en": "A social media platform",
                    "es": "Una red social",
                    "de": "Eine Social-Media-Plattform",
                    "nl": "Een sociaal mediaplatform"
                },
                {
                    "en": "A database system",
                    "es": "Un sistema de base de datos",
                    "de": "Ein Datenbanksystem",
                    "nl": "Een databasesysteem"
                },
                {
                    "en": "An operating system",
                    "es": "Un sistema operativo",
                    "de": "Ein Betriebssystem",
                    "nl": "Een besturingssysteem"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "TensorFlow is an open-source deep learning framework developed by Google Brain.",
                "es": "TensorFlow es un framework de aprendizaje profundo de código abierto desarrollado por Google Brain.",
                "de": "TensorFlow ist ein Open-Source-Deep-Learning-Framework, das von Google Brain entwickelt wurde.",
                "nl": "TensorFlow is een open-source deep learning framework ontwikkeld door Google Brain."
            }
        },
        {
            "question": {
                "en": "What is PyTorch?",
                "es": "¿Qué es PyTorch?",
                "de": "Was ist PyTorch?",
                "nl": "Wat is PyTorch?"
            },
            "options": [
                {
                    "en": "Facebook's deep learning framework",
                    "es": "Framework de deep learning de Facebook",
                    "de": "Facebooks Deep-Learning-Framework",
                    "nl": "Facebook's deep learning framework"
                },
                {
                    "en": "A Python game engine",
                    "es": "Un motor de juegos Python",
                    "de": "Eine Python-Spiel-Engine",
                    "nl": "Een Python game engine"
                },
                {
                    "en": "A web browser",
                    "es": "Un navegador web",
                    "de": "Ein Webbrowser",
                    "nl": "Een webbrowser"
                },
                {
                    "en": "A cloud service",
                    "es": "Un servicio en la nube",
                    "de": "Ein Cloud-Dienst",
                    "nl": "Een clouddienst"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "PyTorch is an open-source deep learning framework developed by Meta's AI Research lab.",
                "es": "PyTorch es un framework de aprendizaje profundo de código abierto desarrollado por Meta AI Research.",
                "de": "PyTorch ist ein Open-Source-Deep-Learning-Framework, das von Metas KI-Forschungslabor entwickelt wurde.",
                "nl": "PyTorch is een open-source deep learning framework ontwikkeld door Meta's AI Research lab."
            }
        },
        {
            "question": {
                "en": "What is a GPU used for in deep learning?",
                "es": "¿Para qué se usa una GPU en deep learning?",
                "de": "Wofür wird eine GPU im Deep Learning verwendet?",
                "nl": "Waarvoor wordt een GPU gebruikt in deep learning?"
            },
            "options": [
                {
                    "en": "Faster parallel computations",
                    "es": "Cálculos paralelos más rápidos",
                    "de": "Schnellere parallele Berechnungen",
                    "nl": "Snellere parallelle berekeningen"
                },
                {
                    "en": "Displaying text on screen",
                    "es": "Mostrar texto en pantalla",
                    "de": "Text auf dem Bildschirm anzeigen",
                    "nl": "Tekst op het scherm weergeven"
                },
                {
                    "en": "Storing training data",
                    "es": "Almacenar datos de entrenamiento",
                    "de": "Trainingsdaten speichern",
                    "nl": "Trainingsdata opslaan"
                },
                {
                    "en": "Connecting to internet",
                    "es": "Conectarse a internet",
                    "de": "Verbindung zum Internet",
                    "nl": "Verbinding met internet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "GPUs can perform many calculations simultaneously, making deep learning training much faster.",
                "es": "Las GPUs pueden realizar muchos cálculos simultáneamente, haciendo el entrenamiento mucho más rápido.",
                "de": "GPUs können viele Berechnungen gleichzeitig durchführen, was das Deep-Learning-Training viel schneller macht.",
                "nl": "GPU's kunnen veel berekeningen tegelijkertijd uitvoeren, waardoor deep learning training veel sneller gaat."
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
                    "en": "Using a pretrained model for new tasks",
                    "es": "Usar modelo preentrenado para nuevas tareas",
                    "de": "Vortrainiertes Modell für neue Aufgaben",
                    "nl": "Voorgetraind model voor nieuwe taken"
                },
                {
                    "en": "Moving data between computers",
                    "es": "Mover datos entre ordenadores",
                    "de": "Daten zwischen Computern verschieben",
                    "nl": "Data verplaatsen tussen computers"
                },
                {
                    "en": "Copying a neural network",
                    "es": "Copiar una red neuronal",
                    "de": "Ein neuronales Netz kopieren",
                    "nl": "Een neuraal netwerk kopiëren"
                },
                {
                    "en": "Sending results by email",
                    "es": "Enviar resultados por correo",
                    "de": "Ergebnisse per E-Mail senden",
                    "nl": "Resultaten per e-mail versturen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Transfer learning reuses a model trained on one task as a starting point for a different task.",
                "es": "El aprendizaje por transferencia reutiliza un modelo entrenado en una tarea como punto de partida para otra.",
                "de": "Transfer Learning verwendet ein auf einer Aufgabe trainiertes Modell als Ausgangspunkt für eine andere.",
                "nl": "Transfer learning hergebruikt een model getraind op één taak als startpunt voor een andere taak."
            }
        },
        {
            "question": {
                "en": "What is a pooling layer?",
                "es": "¿Qué es una capa de pooling?",
                "de": "Was ist eine Pooling-Schicht?",
                "nl": "Wat is een pooling laag?"
            },
            "options": [
                {
                    "en": "Reduces spatial dimensions of data",
                    "es": "Reduce dimensiones espaciales",
                    "de": "Reduziert räumliche Dimensionen",
                    "nl": "Vermindert ruimtelijke dimensies"
                },
                {
                    "en": "Increases the number of neurons",
                    "es": "Aumenta el número de neuronas",
                    "de": "Erhöht die Anzahl der Neuronen",
                    "nl": "Verhoogt het aantal neuronen"
                },
                {
                    "en": "Adds more training data",
                    "es": "Añade más datos de entrenamiento",
                    "de": "Fügt mehr Trainingsdaten hinzu",
                    "nl": "Voegt meer trainingsdata toe"
                },
                {
                    "en": "Connects to a database",
                    "es": "Se conecta a una base de datos",
                    "de": "Verbindet sich mit einer Datenbank",
                    "nl": "Maakt verbinding met een database"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pooling layer reduces the spatial size of the data, making computation more efficient.",
                "es": "Una capa de pooling reduce el tamaño espacial de los datos, haciendo la computación más eficiente.",
                "de": "Eine Pooling-Schicht reduziert die räumliche Größe der Daten und macht die Berechnung effizienter.",
                "nl": "Een pooling laag verkleint de ruimtelijke grootte van de data, waardoor berekeningen efficiënter worden."
            }
        },
        {
            "question": {
                "en": "What is batch normalization?",
                "es": "¿Qué es la normalización por lotes?",
                "de": "Was ist Batch-Normalisierung?",
                "nl": "Wat is batch normalisatie?"
            },
            "options": [
                {
                    "en": "Normalizing layer inputs per batch",
                    "es": "Normalizar entradas de capa por lote",
                    "de": "Eingaben pro Batch normalisieren",
                    "nl": "Laaginvoer per batch normaliseren"
                },
                {
                    "en": "Sorting data alphabetically",
                    "es": "Ordenar datos alfabéticamente",
                    "de": "Daten alphabetisch sortieren",
                    "nl": "Data alfabetisch sorteren"
                },
                {
                    "en": "Removing duplicate data",
                    "es": "Eliminar datos duplicados",
                    "de": "Doppelte Daten entfernen",
                    "nl": "Dubbele data verwijderen"
                },
                {
                    "en": "Increasing batch size",
                    "es": "Aumentar el tamaño del lote",
                    "de": "Batch-Größe erhöhen",
                    "nl": "Batchgrootte verhogen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Batch normalization normalizes the inputs of each layer to stabilize and speed up training.",
                "es": "La normalización por lotes normaliza las entradas de cada capa para estabilizar y acelerar el entrenamiento.",
                "de": "Batch-Normalisierung normalisiert die Eingaben jeder Schicht, um das Training zu stabilisieren und zu beschleunigen.",
                "nl": "Batch normalisatie normaliseert de invoer van elke laag om training te stabiliseren en te versnellen."
            }
        },
        {
            "question": {
                "en": "What is ReLU?",
                "es": "¿Qué es ReLU?",
                "de": "Was ist ReLU?",
                "nl": "Wat is ReLU?"
            },
            "options": [
                {
                    "en": "An activation function",
                    "es": "Una función de activación",
                    "de": "Eine Aktivierungsfunktion",
                    "nl": "Een activatiefunctie"
                },
                {
                    "en": "A neural network type",
                    "es": "Un tipo de red neuronal",
                    "de": "Ein neuronales Netz",
                    "nl": "Een type neuraal netwerk"
                },
                {
                    "en": "A programming language",
                    "es": "Un lenguaje de programación",
                    "de": "Eine Programmiersprache",
                    "nl": "Een programmeertaal"
                },
                {
                    "en": "A dataset format",
                    "es": "Un formato de datos",
                    "de": "Ein Datenformat",
                    "nl": "Een dataformaat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "ReLU (Rectified Linear Unit) outputs the input directly if positive, otherwise zero.",
                "es": "ReLU (Unidad Lineal Rectificada) devuelve la entrada directamente si es positiva, sino cero.",
                "de": "ReLU (Rectified Linear Unit) gibt die Eingabe direkt aus, wenn positiv, sonst Null.",
                "nl": "ReLU (Rectified Linear Unit) geeft de invoer direct door als positief, anders nul."
            }
        },
        {
            "question": {
                "en": "What is the softmax function?",
                "es": "¿Qué es la función softmax?",
                "de": "Was ist die Softmax-Funktion?",
                "nl": "Wat is de softmax functie?"
            },
            "options": [
                {
                    "en": "Converts outputs to probabilities",
                    "es": "Convierte salidas en probabilidades",
                    "de": "Wandelt Ausgaben in Wahrscheinlichkeiten um",
                    "nl": "Zet uitvoer om naar kansen"
                },
                {
                    "en": "Makes the network faster",
                    "es": "Hace la red más rápida",
                    "de": "Macht das Netz schneller",
                    "nl": "Maakt het netwerk sneller"
                },
                {
                    "en": "Reduces the number of layers",
                    "es": "Reduce el número de capas",
                    "de": "Reduziert die Anzahl der Schichten",
                    "nl": "Vermindert het aantal lagen"
                },
                {
                    "en": "Removes negative values",
                    "es": "Elimina valores negativos",
                    "de": "Entfernt negative Werte",
                    "nl": "Verwijdert negatieve waarden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Softmax converts a vector of numbers into a probability distribution that sums to 1.",
                "es": "Softmax convierte un vector de números en una distribución de probabilidad que suma 1.",
                "de": "Softmax wandelt einen Vektor von Zahlen in eine Wahrscheinlichkeitsverteilung um, die sich zu 1 summiert.",
                "nl": "Softmax zet een vector van getallen om naar een kansverdeling die optelt tot 1."
            }
        },
        {
            "question": {
                "en": "What is data augmentation?",
                "es": "¿Qué es la augmentación de datos?",
                "de": "Was ist Datenaugmentation?",
                "nl": "Wat is data-augmentatie?"
            },
            "options": [
                {
                    "en": "Creating more training data by modifying it",
                    "es": "Crear más datos modificándolos",
                    "de": "Mehr Trainingsdaten durch Modifikation",
                    "nl": "Meer trainingsdata door aanpassing"
                },
                {
                    "en": "Deleting unwanted data",
                    "es": "Eliminar datos no deseados",
                    "de": "Unerwünschte Daten löschen",
                    "nl": "Ongewenste data verwijderen"
                },
                {
                    "en": "Compressing data files",
                    "es": "Comprimir archivos de datos",
                    "de": "Datendateien komprimieren",
                    "nl": "Databestanden comprimeren"
                },
                {
                    "en": "Uploading data to the cloud",
                    "es": "Subir datos a la nube",
                    "de": "Daten in die Cloud hochladen",
                    "nl": "Data uploaden naar de cloud"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Data augmentation increases training data by applying transformations like rotation or flipping.",
                "es": "La augmentación de datos aumenta los datos de entrenamiento aplicando transformaciones como rotación.",
                "de": "Datenaugmentation erhöht die Trainingsdaten durch Transformationen wie Rotation oder Spiegelung.",
                "nl": "Data-augmentatie vergroot trainingsdata door transformaties toe te passen zoals rotatie of spiegeling."
            }
        },
        {
            "question": {
                "en": "What is a fully connected layer?",
                "es": "¿Qué es una capa completamente conectada?",
                "de": "Was ist eine vollverbundene Schicht?",
                "nl": "Wat is een volledig verbonden laag?"
            },
            "options": [
                {
                    "en": "Each neuron connects to all in next layer",
                    "es": "Cada neurona conecta con todas",
                    "de": "Jedes Neuron verbindet sich mit allen",
                    "nl": "Elk neuron verbindt met alle in volgende laag"
                },
                {
                    "en": "Only some neurons are connected",
                    "es": "Solo algunas neuronas conectan",
                    "de": "Nur einige Neuronen verbunden",
                    "nl": "Slechts enkele neuronen verbonden"
                },
                {
                    "en": "No neurons are connected",
                    "es": "Ninguna neurona está conectada",
                    "de": "Keine Neuronen sind verbunden",
                    "nl": "Geen neuronen zijn verbonden"
                },
                {
                    "en": "Neurons connect to themselves",
                    "es": "Neuronas se conectan a sí mismas",
                    "de": "Neuronen verbinden sich selbst",
                    "nl": "Neuronen verbinden met zichzelf"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In a fully connected layer, every neuron is connected to every neuron in the next layer.",
                "es": "En una capa completamente conectada, cada neurona está conectada con todas en la siguiente capa.",
                "de": "In einer vollverbundenen Schicht ist jedes Neuron mit jedem Neuron der nächsten Schicht verbunden.",
                "nl": "In een volledig verbonden laag is elk neuron verbonden met elk neuron in de volgende laag."
            }
        },
        {
            "question": {
                "en": "What is a convolution in image processing?",
                "es": "¿Qué es una convolución en procesamiento de imagen?",
                "de": "Was ist eine Faltung in der Bildverarbeitung?",
                "nl": "Wat is een convolutie bij beeldverwerking?"
            },
            "options": [
                {
                    "en": "Sliding a filter over the image",
                    "es": "Deslizar un filtro sobre la imagen",
                    "de": "Einen Filter über das Bild schieben",
                    "nl": "Een filter over het beeld schuiven"
                },
                {
                    "en": "Deleting parts of the image",
                    "es": "Eliminar partes de la imagen",
                    "de": "Teile des Bildes löschen",
                    "nl": "Delen van het beeld verwijderen"
                },
                {
                    "en": "Enlarging the image",
                    "es": "Agrandar la imagen",
                    "de": "Das Bild vergrößern",
                    "nl": "Het beeld vergroten"
                },
                {
                    "en": "Compressing the image",
                    "es": "Comprimir la imagen",
                    "de": "Das Bild komprimieren",
                    "nl": "Het beeld comprimeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A convolution applies a small filter across the image to detect features like edges and patterns.",
                "es": "Una convolución aplica un pequeño filtro sobre la imagen para detectar características como bordes.",
                "de": "Eine Faltung wendet einen kleinen Filter über das Bild an, um Merkmale wie Kanten zu erkennen.",
                "nl": "Een convolutie past een klein filter toe over het beeld om kenmerken zoals randen te detecteren."
            }
        },
        {
            "question": {
                "en": "What is an optimizer in deep learning?",
                "es": "¿Qué es un optimizador en deep learning?",
                "de": "Was ist ein Optimierer im Deep Learning?",
                "nl": "Wat is een optimizer in deep learning?"
            },
            "options": [
                {
                    "en": "Algorithm that updates model weights",
                    "es": "Algoritmo que actualiza pesos",
                    "de": "Algorithmus der Gewichte aktualisiert",
                    "nl": "Algoritme dat gewichten bijwerkt"
                },
                {
                    "en": "Tool that cleans data",
                    "es": "Herramienta que limpia datos",
                    "de": "Werkzeug das Daten bereinigt",
                    "nl": "Tool dat data opschoont"
                },
                {
                    "en": "Program that runs the network",
                    "es": "Programa que ejecuta la red",
                    "de": "Programm das das Netz ausführt",
                    "nl": "Programma dat het netwerk draait"
                },
                {
                    "en": "Device that speeds up training",
                    "es": "Dispositivo que acelera entrenamiento",
                    "de": "Gerät das Training beschleunigt",
                    "nl": "Apparaat dat training versnelt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An optimizer adjusts the model's weights to minimize the loss during training.",
                "es": "Un optimizador ajusta los pesos del modelo para minimizar la pérdida durante el entrenamiento.",
                "de": "Ein Optimierer passt die Gewichte des Modells an, um den Verlust während des Trainings zu minimieren.",
                "nl": "Een optimizer past de gewichten van het model aan om het verlies tijdens training te minimaliseren."
            }
        },
        {
            "question": {
                "en": "What is the sigmoid function?",
                "es": "¿Qué es la función sigmoide?",
                "de": "Was ist die Sigmoid-Funktion?",
                "nl": "Wat is de sigmoid functie?"
            },
            "options": [
                {
                    "en": "Maps values to range 0-1",
                    "es": "Mapea valores al rango 0-1",
                    "de": "Bildet Werte auf Bereich 0-1 ab",
                    "nl": "Brengt waarden naar bereik 0-1"
                },
                {
                    "en": "Doubles all input values",
                    "es": "Duplica todos los valores",
                    "de": "Verdoppelt alle Eingabewerte",
                    "nl": "Verdubbelt alle invoerwaarden"
                },
                {
                    "en": "Removes negative values",
                    "es": "Elimina valores negativos",
                    "de": "Entfernt negative Werte",
                    "nl": "Verwijdert negatieve waarden"
                },
                {
                    "en": "Rounds values to integers",
                    "es": "Redondea valores a enteros",
                    "de": "Rundet Werte auf Ganzzahlen",
                    "nl": "Rondt waarden af op gehele getallen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The sigmoid function squashes any input value to a number between 0 and 1.",
                "es": "La función sigmoide comprime cualquier valor de entrada a un número entre 0 y 1.",
                "de": "Die Sigmoid-Funktion komprimiert jeden Eingabewert auf eine Zahl zwischen 0 und 1.",
                "nl": "De sigmoid functie comprimeert elke invoerwaarde tot een getal tussen 0 en 1."
            }
        },
        {
            "question": {
                "en": "What is a generative adversarial network?",
                "es": "¿Qué es una red generativa adversaria?",
                "de": "Was ist ein generatives adversariales Netz?",
                "nl": "Wat is een generatief adversarieel netwerk?"
            },
            "options": [
                {
                    "en": "Two networks competing against each other",
                    "es": "Dos redes compitiendo entre sí",
                    "de": "Zwei Netze die gegeneinander konkurrieren",
                    "nl": "Twee netwerken die tegen elkaar concurreren"
                },
                {
                    "en": "A single very large network",
                    "es": "Una sola red muy grande",
                    "de": "Ein einzelnes sehr großes Netz",
                    "nl": "Eén heel groot netwerk"
                },
                {
                    "en": "A network that only generates text",
                    "es": "Red que solo genera texto",
                    "de": "Ein Netz das nur Text generiert",
                    "nl": "Een netwerk dat alleen tekst genereert"
                },
                {
                    "en": "A network with no training",
                    "es": "Red sin entrenamiento",
                    "de": "Ein Netz ohne Training",
                    "nl": "Een netwerk zonder training"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A GAN has a generator creating fake data and a discriminator trying to detect the fakes.",
                "es": "Una GAN tiene un generador creando datos falsos y un discriminador intentando detectarlos.",
                "de": "Ein GAN hat einen Generator, der Fake-Daten erstellt, und einen Diskriminator, der sie erkennen soll.",
                "nl": "Een GAN heeft een generator die neppe data maakt en een discriminator die de vervalsingen probeert te detecteren."
            }
        },
        {
            "question": {
                "en": "What is a feature in deep learning?",
                "es": "¿Qué es una característica en deep learning?",
                "de": "Was ist ein Merkmal im Deep Learning?",
                "nl": "Wat is een kenmerk in deep learning?"
            },
            "options": [
                {
                    "en": "A measurable property of data",
                    "es": "Una propiedad medible de los datos",
                    "de": "Eine messbare Eigenschaft der Daten",
                    "nl": "Een meetbare eigenschap van data"
                },
                {
                    "en": "A software update",
                    "es": "Una actualización de software",
                    "de": "Ein Software-Update",
                    "nl": "Een software-update"
                },
                {
                    "en": "A type of neural network",
                    "es": "Un tipo de red neuronal",
                    "de": "Ein Typ neuronales Netz",
                    "nl": "Een type neuraal netwerk"
                },
                {
                    "en": "A hardware component",
                    "es": "Un componente de hardware",
                    "de": "Eine Hardware-Komponente",
                    "nl": "Een hardwarecomponent"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A feature is a measurable property or characteristic of data that the model uses for learning.",
                "es": "Una característica es una propiedad medible de los datos que el modelo usa para aprender.",
                "de": "Ein Merkmal ist eine messbare Eigenschaft der Daten, die das Modell zum Lernen verwendet.",
                "nl": "Een kenmerk is een meetbare eigenschap van data die het model gebruikt om te leren."
            }
        },
        {
            "question": {
                "en": "What is image classification?",
                "es": "¿Qué es la clasificación de imágenes?",
                "de": "Was ist Bildklassifikation?",
                "nl": "Wat is beeldclassificatie?"
            },
            "options": [
                {
                    "en": "Assigning a label to an image",
                    "es": "Asignar una etiqueta a una imagen",
                    "de": "Einem Bild ein Label zuweisen",
                    "nl": "Een label toewijzen aan een afbeelding"
                },
                {
                    "en": "Sorting images by file size",
                    "es": "Ordenar imágenes por tamaño",
                    "de": "Bilder nach Dateigröße sortieren",
                    "nl": "Afbeeldingen sorteren op bestandsgrootte"
                },
                {
                    "en": "Deleting bad images",
                    "es": "Eliminar imágenes malas",
                    "de": "Schlechte Bilder löschen",
                    "nl": "Slechte afbeeldingen verwijderen"
                },
                {
                    "en": "Compressing image files",
                    "es": "Comprimir archivos de imagen",
                    "de": "Bilddateien komprimieren",
                    "nl": "Afbeeldingsbestanden comprimeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Image classification assigns a category label to an entire image based on its content.",
                "es": "La clasificación de imágenes asigna una etiqueta de categoría a una imagen basándose en su contenido.",
                "de": "Bildklassifikation weist einem Bild basierend auf seinem Inhalt eine Kategorie zu.",
                "nl": "Beeldclassificatie wijst een categorielabel toe aan een afbeelding op basis van de inhoud."
            }
        },
        {
            "question": {
                "en": "What is object detection?",
                "es": "¿Qué es la detección de objetos?",
                "de": "Was ist Objekterkennung?",
                "nl": "Wat is objectdetectie?"
            },
            "options": [
                {
                    "en": "Finding and locating objects in images",
                    "es": "Encontrar y localizar objetos en imágenes",
                    "de": "Objekte in Bildern finden und lokalisieren",
                    "nl": "Objecten vinden en lokaliseren in afbeeldingen"
                },
                {
                    "en": "Counting pixels in an image",
                    "es": "Contar píxeles en una imagen",
                    "de": "Pixel in einem Bild zählen",
                    "nl": "Pixels tellen in een afbeelding"
                },
                {
                    "en": "Creating new images",
                    "es": "Crear nuevas imágenes",
                    "de": "Neue Bilder erstellen",
                    "nl": "Nieuwe afbeeldingen maken"
                },
                {
                    "en": "Deleting objects from images",
                    "es": "Eliminar objetos de imágenes",
                    "de": "Objekte aus Bildern löschen",
                    "nl": "Objecten verwijderen uit afbeeldingen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Object detection identifies and locates multiple objects within an image using bounding boxes.",
                "es": "La detección de objetos identifica y localiza múltiples objetos en una imagen usando cajas delimitadoras.",
                "de": "Objekterkennung identifiziert und lokalisiert mehrere Objekte in einem Bild mit Begrenzungsrahmen.",
                "nl": "Objectdetectie identificeert en lokaliseert meerdere objecten in een afbeelding met begrenzingskaders."
            }
        },
        {
            "question": {
                "en": "What is natural language processing?",
                "es": "¿Qué es el procesamiento del lenguaje natural?",
                "de": "Was ist natürliche Sprachverarbeitung?",
                "nl": "Wat is natuurlijke taalverwerking?"
            },
            "options": [
                {
                    "en": "AI understanding human language",
                    "es": "IA entendiendo lenguaje humano",
                    "de": "KI die menschliche Sprache versteht",
                    "nl": "AI die menselijke taal begrijpt"
                },
                {
                    "en": "Programming in natural code",
                    "es": "Programar en código natural",
                    "de": "Programmieren in natürlichem Code",
                    "nl": "Programmeren in natuurlijke code"
                },
                {
                    "en": "Speaking to computers vocally",
                    "es": "Hablar a ordenadores vocalmente",
                    "de": "Mündlich mit Computern sprechen",
                    "nl": "Mondeling met computers praten"
                },
                {
                    "en": "Writing code without syntax",
                    "es": "Escribir código sin sintaxis",
                    "de": "Code ohne Syntax schreiben",
                    "nl": "Code schrijven zonder syntaxis"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "NLP enables computers to understand, interpret, and generate human language.",
                "es": "El NLP permite a los ordenadores entender, interpretar y generar lenguaje humano.",
                "de": "NLP ermöglicht es Computern, menschliche Sprache zu verstehen, zu interpretieren und zu generieren.",
                "nl": "NLP stelt computers in staat menselijke taal te begrijpen, interpreteren en genereren."
            }
        },
        {
            "question": {
                "en": "What is a training dataset?",
                "es": "¿Qué es un conjunto de datos de entrenamiento?",
                "de": "Was ist ein Trainingsdatensatz?",
                "nl": "Wat is een trainingsdataset?"
            },
            "options": [
                {
                    "en": "Data used to teach the model",
                    "es": "Datos usados para enseñar al modelo",
                    "de": "Daten zum Lehren des Modells",
                    "nl": "Data gebruikt om het model te leren"
                },
                {
                    "en": "Data used to test the model",
                    "es": "Datos usados para probar el modelo",
                    "de": "Daten zum Testen des Modells",
                    "nl": "Data gebruikt om het model te testen"
                },
                {
                    "en": "Data stored in the cloud",
                    "es": "Datos almacenados en la nube",
                    "de": "Daten in der Cloud gespeichert",
                    "nl": "Data opgeslagen in de cloud"
                },
                {
                    "en": "Data deleted after use",
                    "es": "Datos eliminados después del uso",
                    "de": "Daten nach Gebrauch gelöscht",
                    "nl": "Data verwijderd na gebruik"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A training dataset is the collection of labeled examples used to teach a model to make predictions.",
                "es": "Un conjunto de datos de entrenamiento es la colección de ejemplos etiquetados para enseñar al modelo.",
                "de": "Ein Trainingsdatensatz ist die Sammlung beschrifteter Beispiele, um ein Modell zu trainieren.",
                "nl": "Een trainingsdataset is de verzameling gelabelde voorbeelden die wordt gebruikt om het model te leren."
            }
        },
        {
            "question": {
                "en": "What is a validation dataset?",
                "es": "¿Qué es un conjunto de validación?",
                "de": "Was ist ein Validierungsdatensatz?",
                "nl": "Wat is een validatiedataset?"
            },
            "options": [
                {
                    "en": "Data to tune model during training",
                    "es": "Datos para ajustar modelo en entrenamiento",
                    "de": "Daten zur Modellabstimmung",
                    "nl": "Data om model af te stemmen tijdens training"
                },
                {
                    "en": "Data to train the model",
                    "es": "Datos para entrenar el modelo",
                    "de": "Daten zum Trainieren",
                    "nl": "Data om het model te trainen"
                },
                {
                    "en": "Data to deploy the model",
                    "es": "Datos para implementar el modelo",
                    "de": "Daten zur Bereitstellung",
                    "nl": "Data om het model te implementeren"
                },
                {
                    "en": "Data to delete the model",
                    "es": "Datos para eliminar el modelo",
                    "de": "Daten zum Löschen des Modells",
                    "nl": "Data om het model te verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A validation dataset evaluates the model during training to help tune hyperparameters.",
                "es": "Un conjunto de validación evalúa el modelo durante el entrenamiento para ajustar hiperparámetros.",
                "de": "Ein Validierungsdatensatz bewertet das Modell während des Trainings zur Abstimmung von Hyperparametern.",
                "nl": "Een validatiedataset evalueert het model tijdens training om hyperparameters af te stemmen."
            }
        },
        {
            "question": {
                "en": "What is a test dataset?",
                "es": "¿Qué es un conjunto de prueba?",
                "de": "Was ist ein Testdatensatz?",
                "nl": "Wat is een testdataset?"
            },
            "options": [
                {
                    "en": "Data to evaluate final model performance",
                    "es": "Datos para evaluar rendimiento final",
                    "de": "Daten zur Bewertung der Endleistung",
                    "nl": "Data om eindprestaties te evalueren"
                },
                {
                    "en": "Data used during training",
                    "es": "Datos usados durante entrenamiento",
                    "de": "Daten während des Trainings",
                    "nl": "Data gebruikt tijdens training"
                },
                {
                    "en": "Data for debugging code",
                    "es": "Datos para depurar código",
                    "de": "Daten zum Debuggen von Code",
                    "nl": "Data voor het debuggen van code"
                },
                {
                    "en": "Data stored as backup",
                    "es": "Datos almacenados como respaldo",
                    "de": "Daten als Backup gespeichert",
                    "nl": "Data opgeslagen als backup"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A test dataset is used only after training to evaluate how well the model performs on unseen data.",
                "es": "Un conjunto de prueba se usa solo después del entrenamiento para evaluar el rendimiento en datos nuevos.",
                "de": "Ein Testdatensatz wird nur nach dem Training verwendet, um die Leistung bei ungesehenen Daten zu bewerten.",
                "nl": "Een testdataset wordt alleen na training gebruikt om te evalueren hoe goed het model presteert op nieuwe data."
            }
        },
        {
            "question": {
                "en": "What is a hyperparameter?",
                "es": "¿Qué es un hiperparámetro?",
                "de": "Was ist ein Hyperparameter?",
                "nl": "Wat is een hyperparameter?"
            },
            "options": [
                {
                    "en": "Setting chosen before training starts",
                    "es": "Ajuste elegido antes del entrenamiento",
                    "de": "Einstellung vor dem Training gewählt",
                    "nl": "Instelling gekozen vóór het trainen"
                },
                {
                    "en": "Parameter learned during training",
                    "es": "Parámetro aprendido durante entrenamiento",
                    "de": "Parameter während des Trainings gelernt",
                    "nl": "Parameter geleerd tijdens training"
                },
                {
                    "en": "Output of the neural network",
                    "es": "Salida de la red neuronal",
                    "de": "Ausgabe des neuronalen Netzes",
                    "nl": "Uitvoer van het neurale netwerk"
                },
                {
                    "en": "Error in the model",
                    "es": "Error en el modelo",
                    "de": "Fehler im Modell",
                    "nl": "Fout in het model"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A hyperparameter is a configuration set before training, like learning rate or batch size.",
                "es": "Un hiperparámetro es una configuración establecida antes del entrenamiento, como tasa de aprendizaje.",
                "de": "Ein Hyperparameter ist eine Konfiguration vor dem Training, wie Lernrate oder Batch-Größe.",
                "nl": "Een hyperparameter is een configuratie die vóór het trainen wordt ingesteld, zoals leersnelheid of batchgrootte."
            }
        },
        {
            "question": {
                "en": "What is regularization?",
                "es": "¿Qué es la regularización?",
                "de": "Was ist Regularisierung?",
                "nl": "Wat is regularisatie?"
            },
            "options": [
                {
                    "en": "Technique to prevent overfitting",
                    "es": "Técnica para prevenir sobreajuste",
                    "de": "Technik zur Verhinderung von Überanpassung",
                    "nl": "Techniek om overfitting te voorkomen"
                },
                {
                    "en": "Method to speed up training",
                    "es": "Método para acelerar entrenamiento",
                    "de": "Methode zur Beschleunigung des Trainings",
                    "nl": "Methode om training te versnellen"
                },
                {
                    "en": "Way to increase data size",
                    "es": "Forma de aumentar datos",
                    "de": "Weg zur Vergrößerung der Daten",
                    "nl": "Manier om data te vergroten"
                },
                {
                    "en": "Tool to format output",
                    "es": "Herramienta para formatear salida",
                    "de": "Werkzeug zur Formatierung der Ausgabe",
                    "nl": "Tool om uitvoer te formatteren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Regularization adds constraints to the model to prevent it from fitting noise in the training data.",
                "es": "La regularización añade restricciones al modelo para evitar que se ajuste al ruido de los datos.",
                "de": "Regularisierung fügt dem Modell Beschränkungen hinzu, um Überanpassung an Rauschen zu verhindern.",
                "nl": "Regularisatie voegt beperkingen toe aan het model om te voorkomen dat het ruis in de data leert."
            }
        },
        {
            "question": {
                "en": "What is max pooling?",
                "es": "¿Qué es max pooling?",
                "de": "Was ist Max-Pooling?",
                "nl": "Wat is max pooling?"
            },
            "options": [
                {
                    "en": "Takes the maximum value in a region",
                    "es": "Toma el valor máximo de una región",
                    "de": "Nimmt den Maximalwert einer Region",
                    "nl": "Neemt de maximale waarde in een regio"
                },
                {
                    "en": "Takes the minimum value in a region",
                    "es": "Toma el valor mínimo",
                    "de": "Nimmt den Minimalwert",
                    "nl": "Neemt de minimale waarde"
                },
                {
                    "en": "Takes the average value",
                    "es": "Toma el valor promedio",
                    "de": "Nimmt den Durchschnittswert",
                    "nl": "Neemt het gemiddelde"
                },
                {
                    "en": "Takes a random value",
                    "es": "Toma un valor aleatorio",
                    "de": "Nimmt einen zufälligen Wert",
                    "nl": "Neemt een willekeurige waarde"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Max pooling selects the largest value from each region of the feature map to reduce dimensions.",
                "es": "Max pooling selecciona el valor más grande de cada región del mapa de características.",
                "de": "Max-Pooling wählt den größten Wert aus jeder Region der Feature-Map, um Dimensionen zu reduzieren.",
                "nl": "Max pooling selecteert de grootste waarde uit elke regio van de feature map om dimensies te verkleinen."
            }
        },
        {
            "question": {
                "en": "What is a filter in a CNN?",
                "es": "¿Qué es un filtro en una CNN?",
                "de": "Was ist ein Filter in einem CNN?",
                "nl": "Wat is een filter in een CNN?"
            },
            "options": [
                {
                    "en": "Small matrix that detects features",
                    "es": "Pequeña matriz que detecta características",
                    "de": "Kleine Matrix die Merkmale erkennt",
                    "nl": "Kleine matrix die kenmerken detecteert"
                },
                {
                    "en": "Tool to remove bad images",
                    "es": "Herramienta para eliminar imágenes malas",
                    "de": "Werkzeug zum Entfernen schlechter Bilder",
                    "nl": "Tool om slechte afbeeldingen te verwijderen"
                },
                {
                    "en": "Program to sort data",
                    "es": "Programa para ordenar datos",
                    "de": "Programm zum Sortieren von Daten",
                    "nl": "Programma om data te sorteren"
                },
                {
                    "en": "Device to clean input",
                    "es": "Dispositivo para limpiar entrada",
                    "de": "Gerät zum Bereinigen der Eingabe",
                    "nl": "Apparaat om invoer op te schonen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A filter is a small matrix of weights that slides over input data to detect patterns like edges.",
                "es": "Un filtro es una pequeña matriz de pesos que se desliza sobre los datos para detectar patrones.",
                "de": "Ein Filter ist eine kleine Gewichtsmatrix, die über die Eingabedaten gleitet, um Muster zu erkennen.",
                "nl": "Een filter is een kleine matrix van gewichten die over invoerdata schuift om patronen te detecteren."
            }
        },
        {
            "question": {
                "en": "What is fine-tuning in deep learning?",
                "es": "¿Qué es el ajuste fino en deep learning?",
                "de": "Was ist Feinabstimmung im Deep Learning?",
                "nl": "Wat is fine-tuning in deep learning?"
            },
            "options": [
                {
                    "en": "Further training a pretrained model",
                    "es": "Entrenar más un modelo preentrenado",
                    "de": "Vortrainiertes Modell weiter trainieren",
                    "nl": "Voorgetraind model verder trainen"
                },
                {
                    "en": "Deleting unused layers",
                    "es": "Eliminar capas no usadas",
                    "de": "Unbenutzte Schichten löschen",
                    "nl": "Ongebruikte lagen verwijderen"
                },
                {
                    "en": "Increasing the learning rate",
                    "es": "Aumentar la tasa de aprendizaje",
                    "de": "Die Lernrate erhöhen",
                    "nl": "De leersnelheid verhogen"
                },
                {
                    "en": "Reducing training data",
                    "es": "Reducir datos de entrenamiento",
                    "de": "Trainingsdaten reduzieren",
                    "nl": "Trainingsdata verminderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Fine-tuning adjusts a pretrained model on new data to adapt it for a specific task.",
                "es": "El ajuste fino adapta un modelo preentrenado con nuevos datos para una tarea específica.",
                "de": "Feinabstimmung passt ein vortrainiertes Modell mit neuen Daten für eine spezifische Aufgabe an.",
                "nl": "Fine-tuning past een voorgetraind model aan op nieuwe data om het geschikt te maken voor een specifieke taak."
            }
        },
        {
            "question": {
                "en": "What is a stride in a CNN?",
                "es": "¿Qué es un paso en una CNN?",
                "de": "Was ist ein Stride in einem CNN?",
                "nl": "Wat is een stride in een CNN?"
            },
            "options": [
                {
                    "en": "Steps the filter moves each time",
                    "es": "Pasos que el filtro avanza cada vez",
                    "de": "Schritte die der Filter jedes Mal macht",
                    "nl": "Stappen die het filter elke keer zet"
                },
                {
                    "en": "Speed of computation",
                    "es": "Velocidad de cálculo",
                    "de": "Berechnungsgeschwindigkeit",
                    "nl": "Rekensnelheid"
                },
                {
                    "en": "Number of filters used",
                    "es": "Número de filtros usados",
                    "de": "Anzahl verwendeter Filter",
                    "nl": "Aantal gebruikte filters"
                },
                {
                    "en": "Size of the output",
                    "es": "Tamaño de la salida",
                    "de": "Größe der Ausgabe",
                    "nl": "Grootte van de uitvoer"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Stride determines how many pixels the filter moves across the input in each step.",
                "es": "El paso determina cuántos píxeles se mueve el filtro en la entrada en cada paso.",
                "de": "Stride bestimmt, wie viele Pixel der Filter bei jedem Schritt über die Eingabe bewegt wird.",
                "nl": "Stride bepaalt hoeveel pixels het filter bij elke stap over de invoer verplaatst."
            }
        },
        {
            "question": {
                "en": "What is padding in a CNN?",
                "es": "¿Qué es el relleno en una CNN?",
                "de": "Was ist Padding in einem CNN?",
                "nl": "Wat is padding in een CNN?"
            },
            "options": [
                {
                    "en": "Adding zeros around the input",
                    "es": "Añadir ceros alrededor de la entrada",
                    "de": "Nullen um die Eingabe hinzufügen",
                    "nl": "Nullen toevoegen rond de invoer"
                },
                {
                    "en": "Removing border pixels",
                    "es": "Eliminar píxeles del borde",
                    "de": "Randpixel entfernen",
                    "nl": "Randpixels verwijderen"
                },
                {
                    "en": "Doubling the image size",
                    "es": "Duplicar el tamaño de la imagen",
                    "de": "Bildgröße verdoppeln",
                    "nl": "Afbeeldingsgrootte verdubbelen"
                },
                {
                    "en": "Compressing the image",
                    "es": "Comprimir la imagen",
                    "de": "Das Bild komprimieren",
                    "nl": "Het beeld comprimeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Padding adds extra pixels around the input borders to preserve spatial dimensions after convolution.",
                "es": "El relleno añade píxeles extra alrededor de los bordes para preservar dimensiones espaciales.",
                "de": "Padding fügt zusätzliche Pixel um die Eingaberänder hinzu, um räumliche Dimensionen zu erhalten.",
                "nl": "Padding voegt extra pixels toe rond de invoergrens om ruimtelijke dimensies te behouden na convolutie."
            }
        },
        {
            "question": {
                "en": "What is early stopping?",
                "es": "¿Qué es la parada temprana?",
                "de": "Was ist frühes Stoppen?",
                "nl": "Wat is early stopping?"
            },
            "options": [
                {
                    "en": "Stopping training when performance drops",
                    "es": "Parar cuando el rendimiento baja",
                    "de": "Stoppen wenn Leistung sinkt",
                    "nl": "Stoppen wanneer prestatie daalt"
                },
                {
                    "en": "Starting training early in the morning",
                    "es": "Empezar entrenamiento temprano",
                    "de": "Training früh am Morgen starten",
                    "nl": "Training vroeg in de ochtend starten"
                },
                {
                    "en": "Using fewer epochs",
                    "es": "Usar menos épocas",
                    "de": "Weniger Epochen verwenden",
                    "nl": "Minder epochs gebruiken"
                },
                {
                    "en": "Reducing the dataset size",
                    "es": "Reducir el tamaño del dataset",
                    "de": "Datensatzgröße reduzieren",
                    "nl": "Datasetgrootte verkleinen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Early stopping halts training when the validation performance stops improving to prevent overfitting.",
                "es": "La parada temprana detiene el entrenamiento cuando el rendimiento de validación deja de mejorar.",
                "de": "Frühes Stoppen beendet das Training, wenn die Validierungsleistung nicht mehr besser wird.",
                "nl": "Early stopping stopt het trainen wanneer de validatieprestatie niet meer verbetert om overfitting te voorkomen."
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
                    "en": "Network that compresses and reconstructs data",
                    "es": "Red que comprime y reconstruye datos",
                    "de": "Netz das Daten komprimiert und rekonstruiert",
                    "nl": "Netwerk dat data comprimeert en reconstrueert"
                },
                {
                    "en": "Network that only classifies images",
                    "es": "Red que solo clasifica imágenes",
                    "de": "Netz das nur Bilder klassifiziert",
                    "nl": "Netwerk dat alleen afbeeldingen classificeert"
                },
                {
                    "en": "Network that generates text",
                    "es": "Red que genera texto",
                    "de": "Netz das Text generiert",
                    "nl": "Netwerk dat tekst genereert"
                },
                {
                    "en": "Network that plays games",
                    "es": "Red que juega juegos",
                    "de": "Netz das Spiele spielt",
                    "nl": "Netwerk dat spelletjes speelt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An autoencoder learns to compress data into a smaller representation and then reconstruct it.",
                "es": "Un autoencoder aprende a comprimir datos en una representación más pequeña y luego reconstruirlos.",
                "de": "Ein Autoencoder lernt, Daten in eine kleinere Darstellung zu komprimieren und dann zu rekonstruieren.",
                "nl": "Een autoencoder leert data te comprimeren naar een kleinere representatie en het dan te reconstrueren."
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
                    "en": "Graph showing loss over training time",
                    "es": "Gráfico de pérdida durante entrenamiento",
                    "de": "Graph des Verlusts über die Trainingszeit",
                    "nl": "Grafiek van verlies over trainingstijd"
                },
                {
                    "en": "Graph showing network size",
                    "es": "Gráfico de tamaño de red",
                    "de": "Graph der Netzwerkgröße",
                    "nl": "Grafiek van netwerkgrootte"
                },
                {
                    "en": "Graph showing data volume",
                    "es": "Gráfico de volumen de datos",
                    "de": "Graph des Datenvolumens",
                    "nl": "Grafiek van datavolume"
                },
                {
                    "en": "Graph showing memory usage",
                    "es": "Gráfico de uso de memoria",
                    "de": "Graph der Speichernutzung",
                    "nl": "Grafiek van geheugengebruik"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A loss curve plots how the loss changes during training, helping monitor the learning progress.",
                "es": "Una curva de pérdida muestra cómo cambia la pérdida durante el entrenamiento, ayudando a monitorear.",
                "de": "Eine Verlustkurve zeigt, wie sich der Verlust während des Trainings ändert und hilft beim Monitoring.",
                "nl": "Een verliescurve toont hoe het verlies verandert tijdens training en helpt bij het monitoren van de voortgang."
            }
        },
        {
            "question": {
                "en": "What is a learning rate schedule?",
                "es": "¿Qué es un horario de tasa de aprendizaje?",
                "de": "Was ist ein Lernratenplan?",
                "nl": "Wat is een leersnelheidsschema?"
            },
            "options": [
                {
                    "en": "Plan to change learning rate over time",
                    "es": "Plan para cambiar la tasa con el tiempo",
                    "de": "Plan zur Änderung der Lernrate",
                    "nl": "Plan om leersnelheid te veranderen in de tijd"
                },
                {
                    "en": "Time to start training",
                    "es": "Hora de iniciar entrenamiento",
                    "de": "Zeitpunkt zum Start des Trainings",
                    "nl": "Tijd om training te starten"
                },
                {
                    "en": "Fixed learning rate value",
                    "es": "Valor fijo de tasa de aprendizaje",
                    "de": "Fester Lernratenwert",
                    "nl": "Vaste leersnelheidswaarde"
                },
                {
                    "en": "Number of training epochs",
                    "es": "Número de épocas de entrenamiento",
                    "de": "Anzahl der Trainingsepochen",
                    "nl": "Aantal trainingsepochen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A learning rate schedule adjusts the learning rate during training to improve convergence.",
                "es": "Un horario de tasa de aprendizaje ajusta la tasa durante el entrenamiento para mejorar la convergencia.",
                "de": "Ein Lernratenplan passt die Lernrate während des Trainings an, um die Konvergenz zu verbessern.",
                "nl": "Een leersnelheidsschema past de leersnelheid aan tijdens training om convergentie te verbeteren."
            }
        },
        {
            "question": {
                "en": "What is vanishing gradient problem?",
                "es": "¿Qué es el problema del gradiente evanescente?",
                "de": "Was ist das Problem verschwindender Gradienten?",
                "nl": "Wat is het probleem van verdwijnende gradiënten?"
            },
            "options": [
                {
                    "en": "Gradients become too small to update",
                    "es": "Gradientes se vuelven demasiado pequeños",
                    "de": "Gradienten werden zu klein",
                    "nl": "Gradiënten worden te klein om bij te werken"
                },
                {
                    "en": "Gradients become too large",
                    "es": "Gradientes se vuelven demasiado grandes",
                    "de": "Gradienten werden zu groß",
                    "nl": "Gradiënten worden te groot"
                },
                {
                    "en": "Network runs out of memory",
                    "es": "Red se queda sin memoria",
                    "de": "Netz hat keinen Speicher mehr",
                    "nl": "Netwerk heeft geen geheugen meer"
                },
                {
                    "en": "Training data disappears",
                    "es": "Datos de entrenamiento desaparecen",
                    "de": "Trainingsdaten verschwinden",
                    "nl": "Trainingsdata verdwijnt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Vanishing gradients occur when gradients become extremely small, preventing deep layers from learning.",
                "es": "Los gradientes evanescentes ocurren cuando los gradientes se vuelven extremadamente pequeños.",
                "de": "Verschwindende Gradienten treten auf, wenn Gradienten extrem klein werden und tiefe Schichten nicht lernen.",
                "nl": "Verdwijnende gradiënten treden op wanneer gradiënten extreem klein worden, waardoor diepe lagen niet leren."
            }
        },
        {
            "question": {
                "en": "What is the Adam optimizer?",
                "es": "¿Qué es el optimizador Adam?",
                "de": "Was ist der Adam-Optimierer?",
                "nl": "Wat is de Adam optimizer?"
            },
            "options": [
                {
                    "en": "Popular adaptive learning rate optimizer",
                    "es": "Optimizador adaptativo popular",
                    "de": "Beliebter adaptiver Lernraten-Optimierer",
                    "nl": "Populaire adaptieve leersnelheid optimizer"
                },
                {
                    "en": "The first ever optimizer created",
                    "es": "El primer optimizador creado",
                    "de": "Der erste je erstellte Optimierer",
                    "nl": "De eerste optimizer ooit gemaakt"
                },
                {
                    "en": "An optimizer named after a person",
                    "es": "Optimizador nombrado por una persona",
                    "de": "Ein nach einer Person benannter Optimierer",
                    "nl": "Een optimizer vernoemd naar een persoon"
                },
                {
                    "en": "A simple gradient descent variant",
                    "es": "Una variante simple de descenso",
                    "de": "Eine einfache Gradientenabstiegsvariante",
                    "nl": "Een simpele gradient descent variant"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Adam combines momentum and adaptive learning rates for efficient training of deep networks.",
                "es": "Adam combina momentum y tasas adaptativas para un entrenamiento eficiente de redes profundas.",
                "de": "Adam kombiniert Momentum und adaptive Lernraten für effizientes Training tiefer Netze.",
                "nl": "Adam combineert momentum en adaptieve leersnelheden voor efficiënte training van diepe netwerken."
            }
        },
        {
            "question": {
                "en": "What is a feature map?",
                "es": "¿Qué es un mapa de características?",
                "de": "Was ist eine Feature-Map?",
                "nl": "Wat is een feature map?"
            },
            "options": [
                {
                    "en": "Output of a filter applied to input",
                    "es": "Salida de un filtro aplicado a entrada",
                    "de": "Ausgabe eines auf Eingabe angewendeten Filters",
                    "nl": "Uitvoer van een filter toegepast op invoer"
                },
                {
                    "en": "Map showing network structure",
                    "es": "Mapa de estructura de red",
                    "de": "Karte der Netzwerkstruktur",
                    "nl": "Kaart van netwerkstructuur"
                },
                {
                    "en": "Diagram of training progress",
                    "es": "Diagrama de progreso",
                    "de": "Diagramm des Trainingsfortschritts",
                    "nl": "Diagram van trainingsvoortgang"
                },
                {
                    "en": "List of all parameters",
                    "es": "Lista de todos los parámetros",
                    "de": "Liste aller Parameter",
                    "nl": "Lijst van alle parameters"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A feature map is the output produced when a filter is applied to an input, highlighting detected patterns.",
                "es": "Un mapa de características es la salida producida cuando un filtro se aplica a una entrada.",
                "de": "Eine Feature-Map ist die Ausgabe, die entsteht, wenn ein Filter auf eine Eingabe angewendet wird.",
                "nl": "Een feature map is de uitvoer die ontstaat wanneer een filter wordt toegepast op een invoer."
            }
        },
        {
            "question": {
                "en": "What is flattening in a CNN?",
                "es": "¿Qué es aplanar en una CNN?",
                "de": "Was ist Flattening in einem CNN?",
                "nl": "Wat is flattening in een CNN?"
            },
            "options": [
                {
                    "en": "Converting 2D data to 1D vector",
                    "es": "Convertir datos 2D a vector 1D",
                    "de": "2D-Daten in 1D-Vektor umwandeln",
                    "nl": "2D data omzetten naar 1D vector"
                },
                {
                    "en": "Making images flat",
                    "es": "Hacer imágenes planas",
                    "de": "Bilder flach machen",
                    "nl": "Afbeeldingen plat maken"
                },
                {
                    "en": "Removing all layers",
                    "es": "Eliminar todas las capas",
                    "de": "Alle Schichten entfernen",
                    "nl": "Alle lagen verwijderen"
                },
                {
                    "en": "Reducing image quality",
                    "es": "Reducir calidad de imagen",
                    "de": "Bildqualität reduzieren",
                    "nl": "Beeldkwaliteit verminderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Flattening converts multi-dimensional feature maps into a single vector for the fully connected layer.",
                "es": "Aplanar convierte mapas de características multidimensionales en un vector para la capa completamente conectada.",
                "de": "Flattening wandelt mehrdimensionale Feature-Maps in einen einzelnen Vektor für die vollverbundene Schicht um.",
                "nl": "Flattening zet meerdimensionale feature maps om naar één vector voor de volledig verbonden laag."
            }
        },
        {
            "question": {
                "en": "What is a pretrained model?",
                "es": "¿Qué es un modelo preentrenado?",
                "de": "Was ist ein vortrainiertes Modell?",
                "nl": "Wat is een voorgetraind model?"
            },
            "options": [
                {
                    "en": "Model already trained on large data",
                    "es": "Modelo ya entrenado con muchos datos",
                    "de": "Bereits auf großen Daten trainiertes Modell",
                    "nl": "Model al getraind op grote data"
                },
                {
                    "en": "Model that has never been trained",
                    "es": "Modelo que nunca fue entrenado",
                    "de": "Modell das nie trainiert wurde",
                    "nl": "Model dat nooit is getraind"
                },
                {
                    "en": "Model designed for testing only",
                    "es": "Modelo diseñado solo para pruebas",
                    "de": "Modell nur zum Testen",
                    "nl": "Model alleen voor testen ontworpen"
                },
                {
                    "en": "Model with no parameters",
                    "es": "Modelo sin parámetros",
                    "de": "Modell ohne Parameter",
                    "nl": "Model zonder parameters"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pretrained model has been previously trained on a large dataset and can be reused for new tasks.",
                "es": "Un modelo preentrenado ha sido previamente entrenado en un gran conjunto de datos y puede reutilizarse.",
                "de": "Ein vortrainiertes Modell wurde zuvor auf einem großen Datensatz trainiert und kann wiederverwendet werden.",
                "nl": "Een voorgetraind model is eerder getraind op een grote dataset en kan hergebruikt worden voor nieuwe taken."
            }
        },
        {
            "question": {
                "en": "What is a deep neural network?",
                "es": "¿Qué es una red neuronal profunda?",
                "de": "Was ist ein tiefes neuronales Netz?",
                "nl": "Wat is een diep neuraal netwerk?"
            },
            "options": [
                {
                    "en": "Network with many hidden layers",
                    "es": "Red con muchas capas ocultas",
                    "de": "Netz mit vielen versteckten Schichten",
                    "nl": "Netwerk met veel verborgen lagen"
                },
                {
                    "en": "Network that thinks deeply",
                    "es": "Red que piensa profundamente",
                    "de": "Netz das tief denkt",
                    "nl": "Netwerk dat diep denkt"
                },
                {
                    "en": "Network underground",
                    "es": "Red subterránea",
                    "de": "Unterirdisches Netz",
                    "nl": "Ondergronds netwerk"
                },
                {
                    "en": "Network with only one layer",
                    "es": "Red con solo una capa",
                    "de": "Netz mit nur einer Schicht",
                    "nl": "Netwerk met slechts één laag"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A deep neural network has multiple hidden layers, allowing it to learn complex patterns.",
                "es": "Una red neuronal profunda tiene múltiples capas ocultas, permitiéndole aprender patrones complejos.",
                "de": "Ein tiefes neuronales Netz hat mehrere versteckte Schichten, um komplexe Muster zu lernen.",
                "nl": "Een diep neuraal netwerk heeft meerdere verborgen lagen, waardoor het complexe patronen kan leren."
            }
        },
        {
            "question": {
                "en": "What is semantic segmentation?",
                "es": "¿Qué es la segmentación semántica?",
                "de": "Was ist semantische Segmentierung?",
                "nl": "Wat is semantische segmentatie?"
            },
            "options": [
                {
                    "en": "Labeling every pixel in an image",
                    "es": "Etiquetar cada píxel en una imagen",
                    "de": "Jeden Pixel in einem Bild beschriften",
                    "nl": "Elk pixel in een afbeelding labelen"
                },
                {
                    "en": "Splitting text into words",
                    "es": "Dividir texto en palabras",
                    "de": "Text in Wörter aufteilen",
                    "nl": "Tekst in woorden splitsen"
                },
                {
                    "en": "Sorting images by topic",
                    "es": "Ordenar imágenes por tema",
                    "de": "Bilder nach Thema sortieren",
                    "nl": "Afbeeldingen sorteren op onderwerp"
                },
                {
                    "en": "Counting objects in images",
                    "es": "Contar objetos en imágenes",
                    "de": "Objekte in Bildern zählen",
                    "nl": "Objecten tellen in afbeeldingen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Semantic segmentation assigns a class label to every pixel in an image for detailed understanding.",
                "es": "La segmentación semántica asigna una etiqueta de clase a cada píxel de una imagen.",
                "de": "Semantische Segmentierung weist jedem Pixel in einem Bild eine Klassenlabel zu.",
                "nl": "Semantische segmentatie wijst een klasselabel toe aan elk pixel in een afbeelding voor gedetailleerd begrip."
            }
        },
        {
            "question": {
                "en": "What is a residual connection?",
                "es": "¿Qué es una conexión residual?",
                "de": "Was ist eine Residualverbindung?",
                "nl": "Wat is een residuele verbinding?"
            },
            "options": [
                {
                    "en": "Shortcut skipping one or more layers",
                    "es": "Atajo que salta una o más capas",
                    "de": "Abkürzung die Schichten überspringt",
                    "nl": "Snelkoppeling die lagen overslaat"
                },
                {
                    "en": "Connection to a database",
                    "es": "Conexión a una base de datos",
                    "de": "Verbindung zu einer Datenbank",
                    "nl": "Verbinding met een database"
                },
                {
                    "en": "Leftover network connections",
                    "es": "Conexiones sobrantes de la red",
                    "de": "Übrige Netzwerkverbindungen",
                    "nl": "Overgebleven netwerkverbindingen"
                },
                {
                    "en": "Connection between two networks",
                    "es": "Conexión entre dos redes",
                    "de": "Verbindung zwischen zwei Netzen",
                    "nl": "Verbinding tussen twee netwerken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Residual connections allow data to skip layers, helping train very deep networks effectively.",
                "es": "Las conexiones residuales permiten que los datos salten capas, ayudando a entrenar redes profundas.",
                "de": "Residualverbindungen ermöglichen es Daten, Schichten zu überspringen, um tiefe Netze effektiv zu trainieren.",
                "nl": "Residuele verbindingen laten data lagen overslaan, wat helpt om zeer diepe netwerken effectief te trainen."
            }
        },
        {
            "question": {
                "en": "What is the tanh function?",
                "es": "¿Qué es la función tanh?",
                "de": "Was ist die Tanh-Funktion?",
                "nl": "Wat is de tanh functie?"
            },
            "options": [
                {
                    "en": "Maps values to range -1 to 1",
                    "es": "Mapea valores al rango -1 a 1",
                    "de": "Bildet Werte auf -1 bis 1 ab",
                    "nl": "Brengt waarden naar bereik -1 tot 1"
                },
                {
                    "en": "Maps values to range 0 to 1",
                    "es": "Mapea valores al rango 0 a 1",
                    "de": "Bildet Werte auf 0 bis 1 ab",
                    "nl": "Brengt waarden naar bereik 0 tot 1"
                },
                {
                    "en": "Doubles input values",
                    "es": "Duplica valores de entrada",
                    "de": "Verdoppelt Eingabewerte",
                    "nl": "Verdubbelt invoerwaarden"
                },
                {
                    "en": "Removes all negative values",
                    "es": "Elimina todos los valores negativos",
                    "de": "Entfernt alle negativen Werte",
                    "nl": "Verwijdert alle negatieve waarden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The tanh function maps input values to a range between -1 and 1, centered at zero.",
                "es": "La función tanh mapea valores de entrada a un rango entre -1 y 1, centrado en cero.",
                "de": "Die Tanh-Funktion bildet Eingabewerte auf einen Bereich von -1 bis 1 ab, zentriert bei Null.",
                "nl": "De tanh functie brengt invoerwaarden naar een bereik tussen -1 en 1, gecentreerd op nul."
            }
        },
        {
            "question": {
                "en": "What is model inference?",
                "es": "¿Qué es la inferencia del modelo?",
                "de": "Was ist Modellinferenz?",
                "nl": "Wat is modelinferentie?"
            },
            "options": [
                {
                    "en": "Using trained model to make predictions",
                    "es": "Usar modelo entrenado para predecir",
                    "de": "Trainiertes Modell für Vorhersagen nutzen",
                    "nl": "Getraind model gebruiken om voorspellingen te doen"
                },
                {
                    "en": "Training the model with data",
                    "es": "Entrenar el modelo con datos",
                    "de": "Das Modell mit Daten trainieren",
                    "nl": "Het model trainen met data"
                },
                {
                    "en": "Building a new model",
                    "es": "Construir un nuevo modelo",
                    "de": "Ein neues Modell bauen",
                    "nl": "Een nieuw model bouwen"
                },
                {
                    "en": "Deleting old predictions",
                    "es": "Eliminar predicciones antiguas",
                    "de": "Alte Vorhersagen löschen",
                    "nl": "Oude voorspellingen verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Model inference is the process of using a trained model to make predictions on new data.",
                "es": "La inferencia del modelo es el proceso de usar un modelo entrenado para hacer predicciones.",
                "de": "Modellinferenz ist der Prozess, ein trainiertes Modell für Vorhersagen bei neuen Daten zu verwenden.",
                "nl": "Modelinferentie is het proces van het gebruiken van een getraind model om voorspellingen te doen op nieuwe data."
            }
        },
        {
            "question": {
                "en": "What is model accuracy?",
                "es": "¿Qué es la precisión del modelo?",
                "de": "Was ist die Modellgenauigkeit?",
                "nl": "Wat is modelnauwkeurigheid?"
            },
            "options": [
                {
                    "en": "Percentage of correct predictions",
                    "es": "Porcentaje de predicciones correctas",
                    "de": "Prozentsatz korrekter Vorhersagen",
                    "nl": "Percentage correcte voorspellingen"
                },
                {
                    "en": "Speed of the model",
                    "es": "Velocidad del modelo",
                    "de": "Geschwindigkeit des Modells",
                    "nl": "Snelheid van het model"
                },
                {
                    "en": "Size of the model",
                    "es": "Tamaño del modelo",
                    "de": "Größe des Modells",
                    "nl": "Grootte van het model"
                },
                {
                    "en": "Cost of running the model",
                    "es": "Costo de ejecutar el modelo",
                    "de": "Kosten für die Ausführung",
                    "nl": "Kosten om het model te draaien"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Model accuracy is the ratio of correct predictions to total predictions, expressed as a percentage.",
                "es": "La precisión del modelo es la proporción de predicciones correctas sobre el total.",
                "de": "Die Modellgenauigkeit ist das Verhältnis korrekter Vorhersagen zur Gesamtzahl.",
                "nl": "Modelnauwkeurigheid is de verhouding van correcte voorspellingen tot het totaal, uitgedrukt als percentage."
            }
        },
        {
            "question": {
                "en": "What is one-hot encoding?",
                "es": "¿Qué es la codificación one-hot?",
                "de": "Was ist One-Hot-Kodierung?",
                "nl": "Wat is one-hot codering?"
            },
            "options": [
                {
                    "en": "Representing categories as binary vectors",
                    "es": "Representar categorías como vectores binarios",
                    "de": "Kategorien als binäre Vektoren darstellen",
                    "nl": "Categorieën als binaire vectoren weergeven"
                },
                {
                    "en": "Using only one feature",
                    "es": "Usar solo una característica",
                    "de": "Nur ein Merkmal verwenden",
                    "nl": "Slechts één kenmerk gebruiken"
                },
                {
                    "en": "Heating up the GPU",
                    "es": "Calentar la GPU",
                    "de": "Die GPU aufheizen",
                    "nl": "De GPU opwarmen"
                },
                {
                    "en": "Encoding data as text",
                    "es": "Codificar datos como texto",
                    "de": "Daten als Text kodieren",
                    "nl": "Data coderen als tekst"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "One-hot encoding converts categorical variables into binary vectors with a 1 for the correct category.",
                "es": "La codificación one-hot convierte variables categóricas en vectores binarios con un 1 para la categoría correcta.",
                "de": "One-Hot-Kodierung wandelt kategorische Variablen in binäre Vektoren mit einer 1 für die richtige Kategorie um.",
                "nl": "One-hot codering zet categorische variabelen om naar binaire vectoren met een 1 voor de juiste categorie."
            }
        },
        {
            "question": {
                "en": "What is cross-entropy loss?",
                "es": "¿Qué es la pérdida de entropía cruzada?",
                "de": "Was ist Kreuzentropieverlust?",
                "nl": "Wat is cross-entropy verlies?"
            },
            "options": [
                {
                    "en": "Common loss for classification tasks",
                    "es": "Pérdida común para clasificación",
                    "de": "Häufiger Verlust für Klassifikation",
                    "nl": "Veelgebruikt verlies voor classificatie"
                },
                {
                    "en": "Loss used only for regression",
                    "es": "Pérdida solo para regresión",
                    "de": "Verlust nur für Regression",
                    "nl": "Verlies alleen voor regressie"
                },
                {
                    "en": "Error in data storage",
                    "es": "Error en almacenamiento de datos",
                    "de": "Fehler bei Datenspeicherung",
                    "nl": "Fout in dataopslag"
                },
                {
                    "en": "Measure of network speed",
                    "es": "Medida de velocidad de red",
                    "de": "Maß für Netzwerkgeschwindigkeit",
                    "nl": "Maat voor netwerksnelheid"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Cross-entropy loss measures the difference between predicted probabilities and actual labels.",
                "es": "La pérdida de entropía cruzada mide la diferencia entre probabilidades predichas y etiquetas reales.",
                "de": "Kreuzentropieverlust misst den Unterschied zwischen vorhergesagten Wahrscheinlichkeiten und Labeln.",
                "nl": "Cross-entropy verlies meet het verschil tussen voorspelde kansen en werkelijke labels."
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
                    "en": "Setting starting values for weights",
                    "es": "Establecer valores iniciales de pesos",
                    "de": "Anfangswerte für Gewichte setzen",
                    "nl": "Startwaarden voor gewichten instellen"
                },
                {
                    "en": "Removing all weights",
                    "es": "Eliminar todos los pesos",
                    "de": "Alle Gewichte entfernen",
                    "nl": "Alle gewichten verwijderen"
                },
                {
                    "en": "Doubling all weights",
                    "es": "Duplicar todos los pesos",
                    "de": "Alle Gewichte verdoppeln",
                    "nl": "Alle gewichten verdubbelen"
                },
                {
                    "en": "Freezing weights permanently",
                    "es": "Congelar pesos permanentemente",
                    "de": "Gewichte dauerhaft einfrieren",
                    "nl": "Gewichten permanent bevriezen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Weight initialization sets the starting values of network weights before training begins.",
                "es": "La inicialización de pesos establece los valores iniciales antes de comenzar el entrenamiento.",
                "de": "Gewichtsinitialisierung setzt die Anfangswerte der Netzwerkgewichte vor Beginn des Trainings.",
                "nl": "Gewichtsinitialisatie stelt de startwaarden van netwerkgewichten in voordat training begint."
            }
        },
        {
            "question": {
                "en": "What is SGD?",
                "es": "¿Qué es SGD?",
                "de": "Was ist SGD?",
                "nl": "Wat is SGD?"
            },
            "options": [
                {
                    "en": "Stochastic Gradient Descent",
                    "es": "Descenso de Gradiente Estocástico",
                    "de": "Stochastischer Gradientenabstieg",
                    "nl": "Stochastische Gradiëntafdaling"
                },
                {
                    "en": "Super Graphics Driver",
                    "es": "Super Controlador Gráfico",
                    "de": "Super-Grafiktreiber",
                    "nl": "Super Graphics Driver"
                },
                {
                    "en": "Structured Graph Database",
                    "es": "Base de Datos de Grafos Estructurados",
                    "de": "Strukturierte Graphdatenbank",
                    "nl": "Gestructureerde Grafdatabase"
                },
                {
                    "en": "Simple Game Development",
                    "es": "Desarrollo Simple de Juegos",
                    "de": "Einfache Spielentwicklung",
                    "nl": "Simpele Game Ontwikkeling"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "SGD updates model weights using gradients computed on random subsets of training data.",
                "es": "SGD actualiza los pesos del modelo usando gradientes calculados en subconjuntos aleatorios.",
                "de": "SGD aktualisiert Modellgewichte mit Gradienten, die auf zufälligen Teilmengen berechnet werden.",
                "nl": "SGD werkt modelgewichten bij met gradiënten berekend op willekeurige deelverzamelingen van trainingsdata."
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
                    "en": "Table showing prediction results",
                    "es": "Tabla que muestra resultados",
                    "de": "Tabelle die Ergebnisse zeigt",
                    "nl": "Tabel die voorspellingsresultaten toont"
                },
                {
                    "en": "Matrix that confuses the model",
                    "es": "Matriz que confunde al modelo",
                    "de": "Matrix die das Modell verwirrt",
                    "nl": "Matrix die het model verwart"
                },
                {
                    "en": "Random weight matrix",
                    "es": "Matriz de pesos aleatorios",
                    "de": "Zufällige Gewichtsmatrix",
                    "nl": "Willekeurige gewichtsmatrix"
                },
                {
                    "en": "Training data table",
                    "es": "Tabla de datos de entrenamiento",
                    "de": "Trainingsdatentabelle",
                    "nl": "Trainingsdatatabel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A confusion matrix shows how many predictions were correct and incorrect for each class.",
                "es": "Una matriz de confusión muestra cuántas predicciones fueron correctas e incorrectas por clase.",
                "de": "Eine Konfusionsmatrix zeigt, wie viele Vorhersagen pro Klasse korrekt und inkorrekt waren.",
                "nl": "Een verwarringsmatrix toont hoeveel voorspellingen correct en incorrect waren per klasse."
            }
        },
        {
            "question": {
                "en": "What is mini-batch training?",
                "es": "¿Qué es entrenamiento por mini-lotes?",
                "de": "Was ist Mini-Batch-Training?",
                "nl": "Wat is mini-batch training?"
            },
            "options": [
                {
                    "en": "Training on small subsets of data",
                    "es": "Entrenar con pequeños subconjuntos",
                    "de": "Training auf kleinen Datenteilen",
                    "nl": "Trainen op kleine deelverzamelingen data"
                },
                {
                    "en": "Training on the full dataset",
                    "es": "Entrenar con el conjunto completo",
                    "de": "Training auf dem gesamten Datensatz",
                    "nl": "Trainen op de volledige dataset"
                },
                {
                    "en": "Training on one sample at a time",
                    "es": "Entrenar con una muestra a la vez",
                    "de": "Training auf einer Probe",
                    "nl": "Trainen op één sample tegelijk"
                },
                {
                    "en": "Training without any data",
                    "es": "Entrenar sin datos",
                    "de": "Training ohne Daten",
                    "nl": "Trainen zonder data"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Mini-batch training processes small groups of samples at a time, balancing speed and stability.",
                "es": "El entrenamiento por mini-lotes procesa pequeños grupos de muestras, equilibrando velocidad y estabilidad.",
                "de": "Mini-Batch-Training verarbeitet kleine Gruppen von Proben und balanciert Geschwindigkeit und Stabilität.",
                "nl": "Mini-batch training verwerkt kleine groepen samples tegelijk en balanceert snelheid en stabiliteit."
            }
        },
        {
            "question": {
                "en": "What is L1 regularization?",
                "es": "¿Qué es la regularización L1?",
                "de": "Was ist L1-Regularisierung?",
                "nl": "Wat is L1 regularisatie?"
            },
            "options": [
                {
                    "en": "Adds absolute values of weights to loss",
                    "es": "Añade valores absolutos de pesos",
                    "de": "Fügt absolute Gewichtswerte zum Verlust hinzu",
                    "nl": "Voegt absolute waarden van gewichten toe aan verlies"
                },
                {
                    "en": "Adds squared weights to loss",
                    "es": "Añade pesos al cuadrado",
                    "de": "Fügt quadrierte Gewichte hinzu",
                    "nl": "Voegt gekwadrateerde gewichten toe"
                },
                {
                    "en": "Removes all weights",
                    "es": "Elimina todos los pesos",
                    "de": "Entfernt alle Gewichte",
                    "nl": "Verwijdert alle gewichten"
                },
                {
                    "en": "Doubles the learning rate",
                    "es": "Duplica la tasa de aprendizaje",
                    "de": "Verdoppelt die Lernrate",
                    "nl": "Verdubbelt de leersnelheid"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "L1 regularization adds the sum of absolute weight values to the loss, encouraging sparse weights.",
                "es": "La regularización L1 añade la suma de valores absolutos de pesos, fomentando pesos dispersos.",
                "de": "L1-Regularisierung fügt die Summe der absoluten Gewichtswerte zum Verlust hinzu für spärliche Gewichte.",
                "nl": "L1 regularisatie voegt de som van absolute gewichtswaarden toe aan het verlies voor schaarse gewichten."
            }
        },
        {
            "question": {
                "en": "What is L2 regularization?",
                "es": "¿Qué es la regularización L2?",
                "de": "Was ist L2-Regularisierung?",
                "nl": "Wat is L2 regularisatie?"
            },
            "options": [
                {
                    "en": "Adds squared weights to the loss",
                    "es": "Añade pesos al cuadrado a la pérdida",
                    "de": "Fügt quadrierte Gewichte zum Verlust hinzu",
                    "nl": "Voegt gekwadrateerde gewichten toe aan verlies"
                },
                {
                    "en": "Adds absolute weights to the loss",
                    "es": "Añade valores absolutos de pesos",
                    "de": "Fügt absolute Gewichte zum Verlust hinzu",
                    "nl": "Voegt absolute gewichten toe"
                },
                {
                    "en": "Removes negative weights",
                    "es": "Elimina pesos negativos",
                    "de": "Entfernt negative Gewichte",
                    "nl": "Verwijdert negatieve gewichten"
                },
                {
                    "en": "Halves the learning rate",
                    "es": "Reduce la tasa a la mitad",
                    "de": "Halbiert die Lernrate",
                    "nl": "Halveert de leersnelheid"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "L2 regularization adds the sum of squared weight values to the loss, preventing large weights.",
                "es": "La regularización L2 añade la suma de pesos al cuadrado, previniendo pesos grandes.",
                "de": "L2-Regularisierung fügt die Summe der quadrierten Gewichtswerte zum Verlust hinzu gegen große Gewichte.",
                "nl": "L2 regularisatie voegt de som van gekwadrateerde gewichtswaarden toe om grote gewichten te voorkomen."
            }
        },
        {
            "question": {
                "en": "What is momentum in optimization?",
                "es": "¿Qué es el momentum en optimización?",
                "de": "Was ist Momentum bei der Optimierung?",
                "nl": "Wat is momentum bij optimalisatie?"
            },
            "options": [
                {
                    "en": "Helps accelerate gradients in the right direction",
                    "es": "Ayuda a acelerar gradientes",
                    "de": "Hilft Gradienten in die richtige Richtung",
                    "nl": "Helpt gradiënten in de juiste richting te versnellen"
                },
                {
                    "en": "Stops the training process",
                    "es": "Detiene el entrenamiento",
                    "de": "Stoppt den Trainingsprozess",
                    "nl": "Stopt het trainingsproces"
                },
                {
                    "en": "Increases the batch size",
                    "es": "Aumenta el tamaño del lote",
                    "de": "Erhöht die Batch-Größe",
                    "nl": "Verhoogt de batchgrootte"
                },
                {
                    "en": "Removes old gradients",
                    "es": "Elimina gradientes antiguos",
                    "de": "Entfernt alte Gradienten",
                    "nl": "Verwijdert oude gradiënten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Momentum uses past gradients to smooth updates and help optimization escape local minima.",
                "es": "El momentum usa gradientes pasados para suavizar actualizaciones y escapar mínimos locales.",
                "de": "Momentum nutzt vergangene Gradienten, um Updates zu glätten und lokale Minima zu überwinden.",
                "nl": "Momentum gebruikt eerdere gradiënten om updates te gladstrijken en lokale minima te ontsnappen."
            }
        },
        {
            "question": {
                "en": "What is a recurrent layer?",
                "es": "¿Qué es una capa recurrente?",
                "de": "Was ist eine rekurrente Schicht?",
                "nl": "Wat is een recurrente laag?"
            },
            "options": [
                {
                    "en": "Layer that processes sequences step by step",
                    "es": "Capa que procesa secuencias paso a paso",
                    "de": "Schicht die Sequenzen schrittweise verarbeitet",
                    "nl": "Laag die reeksen stap voor stap verwerkt"
                },
                {
                    "en": "Layer that only runs once",
                    "es": "Capa que solo se ejecuta una vez",
                    "de": "Schicht die nur einmal läuft",
                    "nl": "Laag die maar één keer draait"
                },
                {
                    "en": "Layer with no connections",
                    "es": "Capa sin conexiones",
                    "de": "Schicht ohne Verbindungen",
                    "nl": "Laag zonder verbindingen"
                },
                {
                    "en": "Layer that deletes data",
                    "es": "Capa que elimina datos",
                    "de": "Schicht die Daten löscht",
                    "nl": "Laag die data verwijdert"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A recurrent layer processes sequential data by passing information from one step to the next.",
                "es": "Una capa recurrente procesa datos secuenciales pasando información de un paso al siguiente.",
                "de": "Eine rekurrente Schicht verarbeitet sequenzielle Daten, indem sie Informationen von Schritt zu Schritt weitergibt.",
                "nl": "Een recurrente laag verwerkt sequentiële data door informatie van de ene stap naar de volgende door te geven."
            }
        },
        {
            "question": {
                "en": "What is word embedding?",
                "es": "¿Qué es word embedding?",
                "de": "Was ist Word Embedding?",
                "nl": "Wat is word embedding?"
            },
            "options": [
                {
                    "en": "Representing words as number vectors",
                    "es": "Representar palabras como vectores",
                    "de": "Wörter als Zahlenvektoren darstellen",
                    "nl": "Woorden weergeven als getallenvectoren"
                },
                {
                    "en": "Embedding words in images",
                    "es": "Incrustar palabras en imágenes",
                    "de": "Wörter in Bilder einbetten",
                    "nl": "Woorden in afbeeldingen inbedden"
                },
                {
                    "en": "Hiding words in text",
                    "es": "Ocultar palabras en texto",
                    "de": "Wörter in Text verstecken",
                    "nl": "Woorden verbergen in tekst"
                },
                {
                    "en": "Sorting words alphabetically",
                    "es": "Ordenar palabras alfabéticamente",
                    "de": "Wörter alphabetisch sortieren",
                    "nl": "Woorden alfabetisch sorteren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Word embeddings represent words as dense numerical vectors that capture semantic meaning.",
                "es": "Los word embeddings representan palabras como vectores numéricos densos que capturan significado.",
                "de": "Word Embeddings stellen Wörter als dichte numerische Vektoren dar, die semantische Bedeutung erfassen.",
                "nl": "Word embeddings vertegenwoordigen woorden als dichte numerieke vectoren die semantische betekenis vastleggen."
            }
        },
        {
            "question": {
                "en": "What is attention in deep learning?",
                "es": "¿Qué es la atención en deep learning?",
                "de": "Was ist Aufmerksamkeit im Deep Learning?",
                "nl": "Wat is aandacht in deep learning?"
            },
            "options": [
                {
                    "en": "Mechanism to focus on important parts",
                    "es": "Mecanismo para enfocarse en partes importantes",
                    "de": "Mechanismus zum Fokussieren auf wichtige Teile",
                    "nl": "Mechanisme om te focussen op belangrijke delen"
                },
                {
                    "en": "How fast the model learns",
                    "es": "Qué tan rápido aprende el modelo",
                    "de": "Wie schnell das Modell lernt",
                    "nl": "Hoe snel het model leert"
                },
                {
                    "en": "Amount of training data needed",
                    "es": "Cantidad de datos necesarios",
                    "de": "Menge benötigter Trainingsdaten",
                    "nl": "Hoeveelheid trainingsdata nodig"
                },
                {
                    "en": "Number of neurons in a layer",
                    "es": "Número de neuronas en una capa",
                    "de": "Anzahl der Neuronen in einer Schicht",
                    "nl": "Aantal neuronen in een laag"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Attention allows the model to focus on the most relevant parts of the input for each output.",
                "es": "La atención permite al modelo enfocarse en las partes más relevantes de la entrada para cada salida.",
                "de": "Aufmerksamkeit erlaubt dem Modell, sich auf die relevantesten Teile der Eingabe zu konzentrieren.",
                "nl": "Aandacht stelt het model in staat zich te richten op de meest relevante delen van de invoer voor elke uitvoer."
            }
        },
        {
            "question": {
                "en": "What is a Transformer model?",
                "es": "¿Qué es un modelo Transformer?",
                "de": "Was ist ein Transformer-Modell?",
                "nl": "Wat is een Transformer model?"
            },
            "options": [
                {
                    "en": "Architecture using self-attention",
                    "es": "Arquitectura usando autoatención",
                    "de": "Architektur mit Selbstaufmerksamkeit",
                    "nl": "Architectuur die self-attention gebruikt"
                },
                {
                    "en": "A robot that transforms",
                    "es": "Un robot que se transforma",
                    "de": "Ein Roboter der sich verwandelt",
                    "nl": "Een robot die transformeert"
                },
                {
                    "en": "A power converter device",
                    "es": "Un dispositivo convertidor",
                    "de": "Ein Stromwandler",
                    "nl": "Een stroomomvormer"
                },
                {
                    "en": "A data compression tool",
                    "es": "Herramienta de compresión",
                    "de": "Ein Datenkomprimierungstool",
                    "nl": "Een datacompressietool"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Transformers use self-attention to process all parts of the input in parallel, powering modern AI.",
                "es": "Los Transformers usan autoatención para procesar todas las partes de la entrada en paralelo.",
                "de": "Transformer verwenden Selbstaufmerksamkeit, um alle Teile der Eingabe parallel zu verarbeiten.",
                "nl": "Transformers gebruiken self-attention om alle delen van de invoer parallel te verwerken."
            }
        },
        {
            "question": {
                "en": "What is LSTM?",
                "es": "¿Qué es LSTM?",
                "de": "Was ist LSTM?",
                "nl": "Wat is LSTM?"
            },
            "options": [
                {
                    "en": "Long Short-Term Memory network",
                    "es": "Red de Memoria Largo-Corto Plazo",
                    "de": "Langes Kurzzeitgedächtnis-Netz",
                    "nl": "Lang Kortetermijngeheugen netwerk"
                },
                {
                    "en": "Large Scale Training Model",
                    "es": "Modelo de Entrenamiento a Gran Escala",
                    "de": "Großes Trainingsmodell",
                    "nl": "Groot Schaal Trainingsmodel"
                },
                {
                    "en": "Linear Statistical Testing Method",
                    "es": "Método Estadístico Lineal",
                    "de": "Lineare statistische Testmethode",
                    "nl": "Lineaire Statistische Testmethode"
                },
                {
                    "en": "Low Speed Transfer Module",
                    "es": "Módulo de Transferencia Lenta",
                    "de": "Niedriggeschwindigkeits-Transfermodul",
                    "nl": "Lage Snelheid Transfer Module"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "LSTM is a type of RNN designed to remember long-term dependencies in sequential data.",
                "es": "LSTM es un tipo de RNN diseñado para recordar dependencias a largo plazo en datos secuenciales.",
                "de": "LSTM ist ein RNN-Typ, der für langfristige Abhängigkeiten in sequenziellen Daten entwickelt wurde.",
                "nl": "LSTM is een type RNN ontworpen om langetermijnafhankelijkheden in sequentiële data te onthouden."
            }
        },
        {
            "question": {
                "en": "What is a GRU?",
                "es": "¿Qué es una GRU?",
                "de": "Was ist eine GRU?",
                "nl": "Wat is een GRU?"
            },
            "options": [
                {
                    "en": "Gated Recurrent Unit",
                    "es": "Unidad Recurrente con Compuertas",
                    "de": "Gated Recurrent Unit",
                    "nl": "Gated Recurrent Unit"
                },
                {
                    "en": "Graphics Rendering Unit",
                    "es": "Unidad de Renderizado Gráfico",
                    "de": "Grafikwiedergabeeinheit",
                    "nl": "Grafische Rendering Eenheid"
                },
                {
                    "en": "General Recognition Utility",
                    "es": "Utilidad de Reconocimiento General",
                    "de": "Allgemeines Erkennungstool",
                    "nl": "Algemeen Herkenningshulpmiddel"
                },
                {
                    "en": "Guided Random Update",
                    "es": "Actualización Aleatoria Guiada",
                    "de": "Geführte zufällige Aktualisierung",
                    "nl": "Geleide Willekeurige Update"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A GRU is a simpler alternative to LSTM that also handles sequential data with gating mechanisms.",
                "es": "Una GRU es una alternativa más simple a LSTM que también maneja datos secuenciales con compuertas.",
                "de": "Eine GRU ist eine einfachere Alternative zu LSTM, die sequenzielle Daten mit Gating-Mechanismen verarbeitet.",
                "nl": "Een GRU is een eenvoudiger alternatief voor LSTM dat ook sequentiële data verwerkt met gating mechanismen."
            }
        },
        {
            "question": {
                "en": "What is exploding gradient problem?",
                "es": "¿Qué es el problema del gradiente explosivo?",
                "de": "Was ist das Problem explodierender Gradienten?",
                "nl": "Wat is het probleem van exploderende gradiënten?"
            },
            "options": [
                {
                    "en": "Gradients become extremely large",
                    "es": "Gradientes se vuelven extremadamente grandes",
                    "de": "Gradienten werden extrem groß",
                    "nl": "Gradiënten worden extreem groot"
                },
                {
                    "en": "Gradients become very small",
                    "es": "Gradientes se vuelven muy pequeños",
                    "de": "Gradienten werden sehr klein",
                    "nl": "Gradiënten worden heel klein"
                },
                {
                    "en": "Network catches fire",
                    "es": "La red se incendia",
                    "de": "Netz fängt Feuer",
                    "nl": "Netwerk vat vlam"
                },
                {
                    "en": "Training data increases rapidly",
                    "es": "Datos de entrenamiento crecen rápido",
                    "de": "Trainingsdaten wachsen schnell",
                    "nl": "Trainingsdata groeit snel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Exploding gradients cause weights to update by huge amounts, making training unstable.",
                "es": "Los gradientes explosivos causan que los pesos se actualicen enormemente, haciendo el entrenamiento inestable.",
                "de": "Explodierende Gradienten bewirken riesige Gewichtsaktualisierungen und machen das Training instabil.",
                "nl": "Exploderende gradiënten zorgen voor enorme gewichtsupdates, waardoor training instabiel wordt."
            }
        },
        {
            "question": {
                "en": "What is gradient clipping?",
                "es": "¿Qué es el recorte de gradientes?",
                "de": "Was ist Gradient Clipping?",
                "nl": "Wat is gradient clipping?"
            },
            "options": [
                {
                    "en": "Limiting gradient values to a max",
                    "es": "Limitar gradientes a un máximo",
                    "de": "Gradientenwerte auf Maximum begrenzen",
                    "nl": "Gradiëntwaarden beperken tot een maximum"
                },
                {
                    "en": "Removing all gradients",
                    "es": "Eliminar todos los gradientes",
                    "de": "Alle Gradienten entfernen",
                    "nl": "Alle gradiënten verwijderen"
                },
                {
                    "en": "Doubling gradient values",
                    "es": "Duplicar valores de gradientes",
                    "de": "Gradientenwerte verdoppeln",
                    "nl": "Gradiëntwaarden verdubbelen"
                },
                {
                    "en": "Sorting gradients by size",
                    "es": "Ordenar gradientes por tamaño",
                    "de": "Gradienten nach Größe sortieren",
                    "nl": "Gradiënten sorteren op grootte"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Gradient clipping caps gradient values to prevent the exploding gradient problem.",
                "es": "El recorte de gradientes limita los valores para prevenir el problema de gradientes explosivos.",
                "de": "Gradient Clipping begrenzt Gradientenwerte, um das Problem explodierender Gradienten zu verhindern.",
                "nl": "Gradient clipping beperkt gradiëntwaarden om het probleem van exploderende gradiënten te voorkomen."
            }
        },
        {
            "question": {
                "en": "What is a skip connection?",
                "es": "¿Qué es una conexión de salto?",
                "de": "Was ist eine Skip-Verbindung?",
                "nl": "Wat is een skip verbinding?"
            },
            "options": [
                {
                    "en": "Connection bypassing one or more layers",
                    "es": "Conexión que omite capas",
                    "de": "Verbindung die Schichten umgeht",
                    "nl": "Verbinding die lagen overslaat"
                },
                {
                    "en": "Connection to skip training",
                    "es": "Conexión para saltar entrenamiento",
                    "de": "Verbindung zum Überspringen des Trainings",
                    "nl": "Verbinding om training over te slaan"
                },
                {
                    "en": "Connection to the internet",
                    "es": "Conexión a internet",
                    "de": "Verbindung zum Internet",
                    "nl": "Verbinding met internet"
                },
                {
                    "en": "Connection between two models",
                    "es": "Conexión entre dos modelos",
                    "de": "Verbindung zwischen zwei Modellen",
                    "nl": "Verbinding tussen twee modellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Skip connections allow information to bypass layers, helping gradients flow in deep networks.",
                "es": "Las conexiones de salto permiten que la información omita capas, ayudando al flujo de gradientes.",
                "de": "Skip-Verbindungen ermöglichen es Informationen, Schichten zu umgehen und Gradienten besser fließen zu lassen.",
                "nl": "Skip verbindingen laten informatie lagen overslaan, wat helpt bij de stroom van gradiënten in diepe netwerken."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a validation set?",
                "es": "¿Cuál es el propósito del conjunto de validación?",
                "de": "Was ist der Zweck eines Validierungssets?",
                "nl": "Wat is het doel van een validatieset?"
            },
            "options": [
                {
                    "en": "Monitor performance during training",
                    "es": "Monitorear rendimiento durante entrenamiento",
                    "de": "Leistung während des Trainings überwachen",
                    "nl": "Prestaties monitoren tijdens training"
                },
                {
                    "en": "Store the final model",
                    "es": "Almacenar el modelo final",
                    "de": "Das finale Modell speichern",
                    "nl": "Het uiteindelijke model opslaan"
                },
                {
                    "en": "Generate new training data",
                    "es": "Generar nuevos datos de entrenamiento",
                    "de": "Neue Trainingsdaten generieren",
                    "nl": "Nieuwe trainingsdata genereren"
                },
                {
                    "en": "Delete bad predictions",
                    "es": "Eliminar predicciones malas",
                    "de": "Schlechte Vorhersagen löschen",
                    "nl": "Slechte voorspellingen verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The validation set helps monitor model performance during training and tune hyperparameters.",
                "es": "El conjunto de validación ayuda a monitorear el rendimiento y ajustar hiperparámetros.",
                "de": "Das Validierungsset hilft, die Modellleistung zu überwachen und Hyperparameter abzustimmen.",
                "nl": "De validatieset helpt de modelprestaties te monitoren tijdens training en hyperparameters af te stemmen."
            }
        },
        {
            "question": {
                "en": "What is a perceptron?",
                "es": "¿Qué es un perceptrón?",
                "de": "Was ist ein Perzeptron?",
                "nl": "Wat is een perceptron?"
            },
            "options": [
                {
                    "en": "Simplest type of neural network",
                    "es": "El tipo más simple de red neuronal",
                    "de": "Einfachster Typ neuronales Netz",
                    "nl": "Eenvoudigste type neuraal netwerk"
                },
                {
                    "en": "Most complex neural network",
                    "es": "La red neuronal más compleja",
                    "de": "Komplexestes neuronales Netz",
                    "nl": "Meest complexe neuraal netwerk"
                },
                {
                    "en": "A type of computer chip",
                    "es": "Un tipo de chip",
                    "de": "Ein Typ Computerchip",
                    "nl": "Een type computerchip"
                },
                {
                    "en": "A data storage device",
                    "es": "Un dispositivo de almacenamiento",
                    "de": "Ein Speichergerät",
                    "nl": "Een opslagapparaat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A perceptron is the simplest neural network with just one neuron that makes binary decisions.",
                "es": "Un perceptrón es la red neuronal más simple con una neurona que toma decisiones binarias.",
                "de": "Ein Perzeptron ist das einfachste neuronale Netz mit nur einem Neuron für binäre Entscheidungen.",
                "nl": "Een perceptron is het eenvoudigste neurale netwerk met slechts één neuron voor binaire beslissingen."
            }
        },
        {
            "question": {
                "en": "What is ResNet?",
                "es": "¿Qué es ResNet?",
                "de": "Was ist ResNet?",
                "nl": "Wat is ResNet?"
            },
            "options": [
                {
                    "en": "Deep network with residual connections",
                    "es": "Red profunda con conexiones residuales",
                    "de": "Tiefes Netz mit Residualverbindungen",
                    "nl": "Diep netwerk met residuele verbindingen"
                },
                {
                    "en": "A type of internet network",
                    "es": "Un tipo de red de internet",
                    "de": "Eine Art Internetnetz",
                    "nl": "Een type internetnetwerk"
                },
                {
                    "en": "A gaming network",
                    "es": "Una red de juegos",
                    "de": "Ein Spielenetzwerk",
                    "nl": "Een gamingnetwerk"
                },
                {
                    "en": "A social media network",
                    "es": "Una red social",
                    "de": "Ein soziales Netzwerk",
                    "nl": "Een sociaal netwerk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "ResNet uses residual connections to train very deep networks with hundreds of layers effectively.",
                "es": "ResNet usa conexiones residuales para entrenar redes muy profundas con cientos de capas.",
                "de": "ResNet verwendet Residualverbindungen, um sehr tiefe Netze mit Hunderten von Schichten effektiv zu trainieren.",
                "nl": "ResNet gebruikt residuele verbindingen om zeer diepe netwerken met honderden lagen effectief te trainen."
            }
        },
        {
            "question": {
                "en": "What is VGGNet?",
                "es": "¿Qué es VGGNet?",
                "de": "Was ist VGGNet?",
                "nl": "Wat is VGGNet?"
            },
            "options": [
                {
                    "en": "CNN known for simple deep structure",
                    "es": "CNN conocida por estructura simple profunda",
                    "de": "CNN bekannt für einfache tiefe Struktur",
                    "nl": "CNN bekend om eenvoudige diepe structuur"
                },
                {
                    "en": "A video game network",
                    "es": "Una red de videojuegos",
                    "de": "Ein Videospielnetzwerk",
                    "nl": "Een videogamenetwerk"
                },
                {
                    "en": "A very good graphics network",
                    "es": "Una red de gráficos muy buena",
                    "de": "Ein sehr gutes Grafiknetz",
                    "nl": "Een heel goed grafisch netwerk"
                },
                {
                    "en": "A voice generation system",
                    "es": "Un sistema de generación de voz",
                    "de": "Ein Sprachgenerierungssystem",
                    "nl": "Een stemgeneratiesysteem"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "VGGNet is a CNN architecture known for using small 3x3 filters in a very deep network.",
                "es": "VGGNet es una arquitectura CNN conocida por usar filtros pequeños 3x3 en una red muy profunda.",
                "de": "VGGNet ist eine CNN-Architektur, die für kleine 3x3-Filter in einem sehr tiefen Netz bekannt ist.",
                "nl": "VGGNet is een CNN-architectuur bekend om het gebruik van kleine 3x3 filters in een zeer diep netwerk."
            }
        },
        {
            "question": {
                "en": "What is AlexNet?",
                "es": "¿Qué es AlexNet?",
                "de": "Was ist AlexNet?",
                "nl": "Wat is AlexNet?"
            },
            "options": [
                {
                    "en": "CNN that won ImageNet 2012",
                    "es": "CNN que ganó ImageNet 2012",
                    "de": "CNN das ImageNet 2012 gewann",
                    "nl": "CNN dat ImageNet 2012 won"
                },
                {
                    "en": "An AI personal assistant",
                    "es": "Un asistente personal de IA",
                    "de": "Ein KI-Assistent",
                    "nl": "Een persoonlijke AI-assistent"
                },
                {
                    "en": "A social media platform",
                    "es": "Una plataforma de redes sociales",
                    "de": "Eine Social-Media-Plattform",
                    "nl": "Een sociaal mediaplatform"
                },
                {
                    "en": "A gaming AI system",
                    "es": "Un sistema de IA para juegos",
                    "de": "Ein Spiel-KI-System",
                    "nl": "Een gaming AI-systeem"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "AlexNet is a CNN that won the 2012 ImageNet competition and popularized deep learning.",
                "es": "AlexNet es una CNN que ganó la competición ImageNet 2012 y popularizó el aprendizaje profundo.",
                "de": "AlexNet ist ein CNN, das den ImageNet-Wettbewerb 2012 gewann und Deep Learning populär machte.",
                "nl": "AlexNet is een CNN dat de ImageNet competitie van 2012 won en deep learning populair maakte."
            }
        },
        {
            "question": {
                "en": "What is a deconvolution?",
                "es": "¿Qué es una deconvolución?",
                "de": "Was ist eine Dekonvolution?",
                "nl": "Wat is een deconvolutie?"
            },
            "options": [
                {
                    "en": "Reverse of convolution operation",
                    "es": "Inversa de la operación de convolución",
                    "de": "Umkehrung der Faltungsoperation",
                    "nl": "Omgekeerde van convolutie-operatie"
                },
                {
                    "en": "A faster convolution",
                    "es": "Una convolución más rápida",
                    "de": "Eine schnellere Faltung",
                    "nl": "Een snellere convolutie"
                },
                {
                    "en": "Removing convolution filters",
                    "es": "Eliminar filtros de convolución",
                    "de": "Faltungsfilter entfernen",
                    "nl": "Convolutiefilters verwijderen"
                },
                {
                    "en": "A data cleaning method",
                    "es": "Un método de limpieza de datos",
                    "de": "Eine Datenbereinigungsmethode",
                    "nl": "Een methode voor het opschonen van data"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Deconvolution upsamples feature maps, often used in image segmentation to restore spatial dimensions.",
                "es": "La deconvolución aumenta mapas de características, usada en segmentación para restaurar dimensiones.",
                "de": "Dekonvolution vergrößert Feature-Maps, oft bei Bildsegmentierung zur Wiederherstellung der Dimensionen.",
                "nl": "Deconvolutie vergroot feature maps, vaak gebruikt bij segmentatie om ruimtelijke dimensies te herstellen."
            }
        },
        {
            "question": {
                "en": "What is global average pooling?",
                "es": "¿Qué es el pooling promedio global?",
                "de": "Was ist globales durchschnittliches Pooling?",
                "nl": "Wat is globale gemiddelde pooling?"
            },
            "options": [
                {
                    "en": "Averages each feature map to one value",
                    "es": "Promedia cada mapa a un valor",
                    "de": "Mittelt jede Feature-Map zu einem Wert",
                    "nl": "Middelt elke feature map tot één waarde"
                },
                {
                    "en": "Takes global maximum values",
                    "es": "Toma valores máximos globales",
                    "de": "Nimmt globale Maximalwerte",
                    "nl": "Neemt globale maximale waarden"
                },
                {
                    "en": "Pools data from the internet",
                    "es": "Agrupa datos de internet",
                    "de": "Sammelt Daten aus dem Internet",
                    "nl": "Verzamelt data van internet"
                },
                {
                    "en": "Averages all network weights",
                    "es": "Promedia todos los pesos",
                    "de": "Mittelt alle Netzwerkgewichte",
                    "nl": "Middelt alle netwerkgewichten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Global average pooling reduces each feature map to a single value by averaging all elements.",
                "es": "El pooling promedio global reduce cada mapa de características a un valor promediando todos los elementos.",
                "de": "Globales durchschnittliches Pooling reduziert jede Feature-Map auf einen Wert durch Mittelung aller Elemente.",
                "nl": "Globale gemiddelde pooling reduceert elke feature map tot één waarde door alle elementen te middelen."
            }
        },
        {
            "question": {
                "en": "What is depthwise separable convolution?",
                "es": "¿Qué es la convolución separable en profundidad?",
                "de": "Was ist tiefenweise trennbare Faltung?",
                "nl": "Wat is dieptewijs scheidbare convolutie?"
            },
            "options": [
                {
                    "en": "Efficient convolution splitting spatial and depth",
                    "es": "Convolución eficiente separando espacio y profundidad",
                    "de": "Effiziente Faltung die Raum und Tiefe trennt",
                    "nl": "Efficiënte convolutie die ruimte en diepte scheidt"
                },
                {
                    "en": "Very deep convolution operation",
                    "es": "Operación de convolución muy profunda",
                    "de": "Sehr tiefe Faltungsoperation",
                    "nl": "Zeer diepe convolutie-operatie"
                },
                {
                    "en": "Convolution that only works on depth",
                    "es": "Convolución solo en profundidad",
                    "de": "Faltung die nur auf Tiefe wirkt",
                    "nl": "Convolutie die alleen op diepte werkt"
                },
                {
                    "en": "Standard convolution method",
                    "es": "Método de convolución estándar",
                    "de": "Standard-Faltungsmethode",
                    "nl": "Standaard convolutiemethode"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Depthwise separable convolution splits filtering into spatial and depth steps for efficiency.",
                "es": "La convolución separable en profundidad divide el filtrado en pasos espaciales y de profundidad.",
                "de": "Tiefenweise trennbare Faltung teilt die Filterung in räumliche und Tiefenschritte für Effizienz.",
                "nl": "Dieptewijs scheidbare convolutie splitst filtering in ruimtelijke en dieptestappen voor efficiëntie."
            }
        },
        {
            "question": {
                "en": "What is model compression?",
                "es": "¿Qué es la compresión de modelos?",
                "de": "Was ist Modellkompression?",
                "nl": "Wat is modelcompressie?"
            },
            "options": [
                {
                    "en": "Making models smaller and faster",
                    "es": "Hacer modelos más pequeños y rápidos",
                    "de": "Modelle kleiner und schneller machen",
                    "nl": "Modellen kleiner en sneller maken"
                },
                {
                    "en": "Zipping model files",
                    "es": "Comprimir archivos de modelo",
                    "de": "Modelldateien zippen",
                    "nl": "Modelbestanden zippen"
                },
                {
                    "en": "Removing all model layers",
                    "es": "Eliminar todas las capas",
                    "de": "Alle Schichten entfernen",
                    "nl": "Alle lagen verwijderen"
                },
                {
                    "en": "Combining multiple models",
                    "es": "Combinar múltiples modelos",
                    "de": "Mehrere Modelle kombinieren",
                    "nl": "Meerdere modellen combineren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Model compression reduces model size while maintaining accuracy for deployment on limited devices.",
                "es": "La compresión de modelos reduce el tamaño manteniendo precisión para dispositivos limitados.",
                "de": "Modellkompression reduziert die Modellgröße bei Beibehaltung der Genauigkeit für begrenzte Geräte.",
                "nl": "Modelcompressie verkleint het model met behoud van nauwkeurigheid voor inzet op beperkte apparaten."
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
                    "en": "Training small model from large model",
                    "es": "Entrenar modelo pequeño desde grande",
                    "de": "Kleines Modell von großem trainieren",
                    "nl": "Klein model trainen van groot model"
                },
                {
                    "en": "Extracting data from text",
                    "es": "Extraer datos de texto",
                    "de": "Daten aus Text extrahieren",
                    "nl": "Data uit tekst halen"
                },
                {
                    "en": "Removing knowledge from model",
                    "es": "Eliminar conocimiento del modelo",
                    "de": "Wissen aus Modell entfernen",
                    "nl": "Kennis uit model verwijderen"
                },
                {
                    "en": "Testing model accuracy",
                    "es": "Probar precisión del modelo",
                    "de": "Modellgenauigkeit testen",
                    "nl": "Modelnauwkeurigheid testen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Knowledge distillation trains a smaller student model to mimic a larger teacher model.",
                "es": "La destilación de conocimiento entrena un modelo estudiante pequeño para imitar un modelo maestro grande.",
                "de": "Wissensdestillation trainiert ein kleineres Schülermodell, ein größeres Lehrermodell nachzuahmen.",
                "nl": "Kennisdistillatie traint een kleiner studentmodel om een groter leraarmodel na te bootsen."
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
                    "en": "Using both 16-bit and 32-bit numbers",
                    "es": "Usar números de 16 y 32 bits",
                    "de": "16-Bit und 32-Bit Zahlen verwenden",
                    "nl": "Zowel 16-bit als 32-bit getallen gebruiken"
                },
                {
                    "en": "Training at different times of day",
                    "es": "Entrenar a diferentes horas del día",
                    "de": "Zu verschiedenen Tageszeiten trainieren",
                    "nl": "Op verschillende tijden trainen"
                },
                {
                    "en": "Using multiple datasets",
                    "es": "Usar múltiples conjuntos de datos",
                    "de": "Mehrere Datensätze verwenden",
                    "nl": "Meerdere datasets gebruiken"
                },
                {
                    "en": "Mixing different model types",
                    "es": "Mezclar diferentes tipos de modelos",
                    "de": "Verschiedene Modelltypen mischen",
                    "nl": "Verschillende modeltypen mixen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Mixed precision training uses lower precision numbers to speed up training while maintaining accuracy.",
                "es": "El entrenamiento de precisión mixta usa números de menor precisión para acelerar el entrenamiento.",
                "de": "Mixed-Precision-Training verwendet Zahlen niedrigerer Genauigkeit, um das Training zu beschleunigen.",
                "nl": "Mixed precision training gebruikt lagere precisiegetallen om training te versnellen met behoud van nauwkeurigheid."
            }
        },
        {
            "question": {
                "en": "What does 'epoch' mean in deep learning?",
                "es": "¿Qué significa 'época' en deep learning?",
                "de": "Was bedeutet 'Epoche' im Deep Learning?",
                "nl": "Wat betekent 'epoch' in deep learning?"
            },
            "options": [
                {
                    "en": "One full pass through the training data",
                    "es": "Un pase completo por los datos de entrenamiento",
                    "de": "Ein vollständiger Durchlauf der Trainingsdaten",
                    "nl": "Een volledige doorgang door de trainingsdata"
                },
                {
                    "en": "A single weight update",
                    "es": "Una sola actualización de pesos",
                    "de": "Eine einzelne Gewichtsaktualisierung",
                    "nl": "Een enkele gewichtsupdate"
                },
                {
                    "en": "The final training step",
                    "es": "El último paso de entrenamiento",
                    "de": "Der letzte Trainingsschritt",
                    "nl": "De laatste trainingsstap"
                },
                {
                    "en": "A type of neural network",
                    "es": "Un tipo de red neuronal",
                    "de": "Eine Art neuronales Netz",
                    "nl": "Een type neuraal netwerk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An epoch is one complete pass through the entire training dataset during the learning process.",
                "es": "Una época es un pase completo por todo el conjunto de datos de entrenamiento durante el aprendizaje.",
                "de": "Eine Epoche ist ein vollständiger Durchlauf durch den gesamten Trainingsdatensatz beim Lernen.",
                "nl": "Een epoch is een volledige doorgang door de hele trainingsdataset tijdens het leerproces."
            }
        },
        {
            "question": {
                "en": "What is a tensor in deep learning?",
                "es": "¿Qué es un tensor en deep learning?",
                "de": "Was ist ein Tensor im Deep Learning?",
                "nl": "Wat is een tensor in deep learning?"
            },
            "options": [
                {
                    "en": "A multi-dimensional array of numbers",
                    "es": "Un arreglo multidimensional de números",
                    "de": "Ein mehrdimensionales Zahlenfeld",
                    "nl": "Een meerdimensionale reeks getallen"
                },
                {
                    "en": "A type of activation function",
                    "es": "Un tipo de función de activación",
                    "de": "Eine Art Aktivierungsfunktion",
                    "nl": "Een type activeringsfunctie"
                },
                {
                    "en": "A training algorithm",
                    "es": "Un algoritmo de entrenamiento",
                    "de": "Ein Trainingsalgorithmus",
                    "nl": "Een trainingsalgoritme"
                },
                {
                    "en": "A hardware component",
                    "es": "Un componente de hardware",
                    "de": "Eine Hardwarekomponente",
                    "nl": "Een hardwarecomponent"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tensor is a multi-dimensional array that serves as the fundamental data structure in deep learning frameworks.",
                "es": "Un tensor es un arreglo multidimensional que sirve como estructura de datos fundamental en deep learning.",
                "de": "Ein Tensor ist ein mehrdimensionales Array, das als grundlegende Datenstruktur im Deep Learning dient.",
                "nl": "Een tensor is een meerdimensionale array die dient als fundamentele datastructuur in deep learning."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a bias in a neuron?",
                "es": "¿Cuál es el propósito de un sesgo en una neurona?",
                "de": "Was ist der Zweck eines Bias in einem Neuron?",
                "nl": "Wat is het doel van een bias in een neuron?"
            },
            "options": [
                {
                    "en": "To shift the activation function output",
                    "es": "Desplazar la salida de la función de activación",
                    "de": "Die Ausgabe der Aktivierungsfunktion verschieben",
                    "nl": "De uitvoer van de activeringsfunctie verschuiven"
                },
                {
                    "en": "To speed up training",
                    "es": "Acelerar el entrenamiento",
                    "de": "Das Training beschleunigen",
                    "nl": "Het trainen versnellen"
                },
                {
                    "en": "To reduce the number of parameters",
                    "es": "Reducir el número de parámetros",
                    "de": "Die Anzahl der Parameter reduzieren",
                    "nl": "Het aantal parameters verminderen"
                },
                {
                    "en": "To connect layers together",
                    "es": "Conectar capas entre sí",
                    "de": "Schichten miteinander verbinden",
                    "nl": "Lagen met elkaar verbinden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A bias allows the neuron to shift its activation function, enabling better fitting of the data.",
                "es": "Un sesgo permite a la neurona desplazar su función de activación para ajustarse mejor a los datos.",
                "de": "Ein Bias ermöglicht dem Neuron, seine Aktivierungsfunktion zu verschieben für eine bessere Datenanpassung.",
                "nl": "Een bias stelt het neuron in staat om zijn activeringsfunctie te verschuiven voor betere data-aanpassing."
            }
        }
    ]
};
