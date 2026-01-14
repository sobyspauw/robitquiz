// Neurale netwerken Quiz - Level 4
(function() {
  const level4 = {
    name: {
          "en": "Different Types of Neural Networks",
          "es": "Diferentes Tipos de Redes Neuronales",
          "de": "Verschiedene Arten von Neuronalen Netzwerken",
          "nl": "Verschillende Soorten Neurale Netwerken"
    },
    questions: [
      {
        question: {
                  "en": "What is a convolutional neural network (CNN) primarily used for?",
                  "es": "¿Para qué se usa principalmente una red neuronal convolucional (CNN)?",
                  "de": "Wofür wird ein Convolutional Neural Network (CNN) hauptsächlich verwendet?",
                  "nl": "Waarvoor wordt een convolutioneel neuraal netwerk (CNN) hoofdzakelijk gebruikt?"
        },
        options: [
        {
                  "en": "Natural language processing only",
                  "es": "Solo procesamiento de lenguaje natural",
                  "de": "Nur natürliche Sprachverarbeitung",
                  "nl": "Alleen natuurlijke taalverwerking"
        },
        {
                  "en": "Database management",
                  "es": "Gestión de bases de datos",
                  "de": "Datenbankmanagement",
                  "nl": "Databasebeheer"
        },
        {
                  "en": "Image processing and computer vision tasks",
                  "es": "Procesamiento de imágenes y tareas de visión por computadora",
                  "de": "Bildverarbeitung und Computer Vision Aufgaben",
                  "nl": "Beeldverwerking en computer vision taken"
        },
        {
                  "en": "Time series prediction exclusively",
                  "es": "Exclusivamente predicción de series temporales",
                  "de": "Ausschließlich Zeitreihenvorhersage",
                  "nl": "Uitsluitend tijdreeksvoorspelling"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "CNNs are specifically designed for processing grid-like data such as images. Their convolutional layers can detect local features like edges, textures, and patterns, making them highly effective for computer vision tasks including image classification, object detection, and image segmentation.",
                  "es": "Las CNN están específicamente diseñadas para procesar datos tipo cuadrícula como imágenes. Sus capas convolucionales pueden detectar características locales como bordes, texturas y patrones, haciéndolas altamente efectivas para tareas de visión por computadora incluyendo clasificación de imágenes, detección de objetos y segmentación de imágenes.",
                  "de": "CNNs sind speziell für die Verarbeitung gitterartiger Daten wie Bilder entwickelt. Ihre Faltungsschichten können lokale Merkmale wie Kanten, Texturen und Muster erkennen, was sie hocheffektiv für Computer Vision Aufgaben wie Bildklassifikation, Objekterkennung und Bildsegmentierung macht.",
                  "nl": "CNNs zijn specifiek ontworpen voor het verwerken van roosterachtige data zoals afbeeldingen. Hun convolutielagen kunnen lokale kenmerken zoals randen, texturen en patronen detecteren, waardoor ze zeer effectief zijn voor computer vision taken inclusief beeldclassificatie, objectdetectie en beeldsegmentatie."
        }
      },
      {
        question: {
                  "en": "What is a recurrent neural network (RNN) best suited for?",
                  "es": "¿Para qué es más adecuada una red neuronal recurrente (RNN)?",
                  "de": "Wofür ist ein Recurrent Neural Network (RNN) am besten geeignet?",
                  "nl": "Waarvoor is een recurrent neuraal netwerk (RNN) het meest geschikt?"
        },
        options: [
        {
                  "en": "Database optimization",
                  "es": "Optimización de bases de datos",
                  "de": "Datenbankoptimierung",
                  "nl": "Database-optimalisatie"
        },
        {
                  "en": "Static image classification",
                  "es": "Clasificación de imágenes estáticas",
                  "de": "Statische Bildklassifikation",
                  "nl": "Statische beeldclassificatie"
        },
        {
                  "en": "Simple linear regression",
                  "es": "Regresión lineal simple",
                  "de": "Einfache lineare Regression",
                  "nl": "Eenvoudige lineaire regressie"
        },
        {
                  "en": "Sequential data and time series analysis",
                  "es": "Datos secuenciales y análisis de series temporales",
                  "de": "Sequenzielle Daten und Zeitreihenanalyse",
                  "nl": "Sequentiële data en tijdreeksanalyse"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "RNNs are designed to handle sequential data where the order matters. They have memory that allows them to remember previous inputs, making them ideal for tasks like language modeling, machine translation, speech recognition, and time series prediction.",
                  "es": "Las RNN están diseñadas para manejar datos secuenciales donde el orden importa. Tienen memoria que les permite recordar entradas anteriores, haciéndolas ideales para tareas como modelado de lenguaje, traducción automática, reconocimiento de voz y predicción de series temporales.",
                  "de": "RNNs sind darauf ausgelegt sequenzielle Daten zu verarbeiten wo die Reihenfolge wichtig ist. Sie haben Gedächtnis das ihnen erlaubt sich an vorherige Eingaben zu erinnern, was sie ideal für Aufgaben wie Sprachmodellierung, maschinelle Übersetzung, Spracherkennung und Zeitreihenvorhersage macht.",
                  "nl": "RNNs zijn ontworpen om sequentiële data te verwerken waarbij de volgorde belangrijk is. Ze hebben geheugen dat hen toestaat vorige invoer te onthouden, waardoor ze ideaal zijn voor taken zoals taalmodellering, machinevertaling, spraakherkenning en tijdreeksvoorspelling."
        }
      },
      {
        question: {
                  "en": "What is an autoencoder neural network?",
                  "es": "¿Qué es una red neuronal autoencoder?",
                  "de": "Was ist ein Autoencoder neuronales Netzwerk?",
                  "nl": "Wat is een autoencoder neuraal netwerk?"
        },
        options: [
        {
                  "en": "A network for automatic speech recognition",
                  "es": "Una red para reconocimiento automático de voz",
                  "de": "Ein Netzwerk für automatische Spracherkennung",
                  "nl": "Een netwerk voor automatische spraakherkenning"
        },
        {
                  "en": "A network that encodes passwords",
                  "es": "Una red que codifica contraseñas",
                  "de": "Ein Netzwerk das Passwörter kodiert",
                  "nl": "Een netwerk dat wachtwoorden codeert"
        },
        {
                  "en": "A network that learns to compress and reconstruct input data",
                  "es": "Una red que aprende a comprimir y reconstruir datos de entrada",
                  "de": "Ein Netzwerk das lernt Eingabedaten zu komprimieren und zu rekonstruieren",
                  "nl": "Een netwerk dat leert invoerdata te comprimeren en te reconstrueren"
        },
        {
                  "en": "A network that automatically generates code",
                  "es": "Una red que genera código automáticamente",
                  "de": "Ein Netzwerk das automatisch Code generiert",
                  "nl": "Een netwerk dat automatisch code genereert"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "An autoencoder consists of an encoder that compresses input data into a lower-dimensional representation and a decoder that reconstructs the original data. They're used for dimensionality reduction, data denoising, and learning compact representations of data.",
                  "es": "Un autoencoder consiste en un codificador que comprime datos de entrada en una representación de menor dimensión y un decodificador que reconstruye los datos originales. Se usan para reducción de dimensionalidad, denoising de datos y aprendizaje de representaciones compactas de datos.",
                  "de": "Ein Autoencoder besteht aus einem Encoder der Eingabedaten in eine niedrigerdimensionale Darstellung komprimiert und einem Decoder der die ursprünglichen Daten rekonstruiert. Sie werden für Dimensionalitätsreduktion, Datenrauschentfernung und Lernen kompakter Datenrepräsentationen verwendet.",
                  "nl": "Een autoencoder bestaat uit een encoder die invoerdata comprimeert tot een lagerdimensionale representatie en een decoder die de originele data reconstrueert. Ze worden gebruikt voor dimensionaliteitsreductie, data denoising en het leren van compacte datarepresentaties."
        }
      },
      {
        question: {
                  "en": "What is a Generative Adversarial Network (GAN)?",
                  "es": "¿Qué es una Red Generativa Adversarial (GAN)?",
                  "de": "Was ist ein Generative Adversarial Network (GAN)?",
                  "nl": "Wat is een Generative Adversarial Network (GAN)?"
        },
        options: [
        {
                  "en": "A network for general artificial intelligence",
                  "es": "Una red para inteligencia artificial general",
                  "de": "Ein Netzwerk für allgemeine künstliche Intelligenz",
                  "nl": "Een netwerk voor algemene kunstmatige intelligentie"
        },
        {
                  "en": "A network that generates random data",
                  "es": "Una red que genera datos aleatorios",
                  "de": "Ein Netzwerk das zufällige Daten generiert",
                  "nl": "Een netwerk dat willekeurige data genereert"
        },
        {
                  "en": "Two neural networks competing against each other - a generator and discriminator",
                  "es": "Dos redes neuronales compitiendo entre sí - un generador y un discriminador",
                  "de": "Zwei neuronale Netzwerke die gegeneinander konkurrieren - ein Generator und Diskriminator",
                  "nl": "Twee neurale netwerken die tegen elkaar concurreren - een generator en discriminator"
        },
        {
                  "en": "A collaborative network architecture",
                  "es": "Una arquitectura de red colaborativa",
                  "de": "Eine kollaborative Netzwerkarchitektur",
                  "nl": "Een collaboratieve netwerkarchitectuur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "GANs consist of two networks in competition: the generator creates fake data trying to fool the discriminator, while the discriminator tries to distinguish real from fake data. This adversarial training process leads to generators that can create highly realistic synthetic data.",
                  "es": "Las GAN consisten en dos redes en competencia: el generador crea datos falsos tratando de engañar al discriminador, mientras que el discriminador trata de distinguir datos reales de falsos. Este proceso de entrenamiento adversarial lleva a generadores que pueden crear datos sintéticos altamente realistas.",
                  "de": "GANs bestehen aus zwei konkurrierenden Netzwerken: der Generator erstellt falsche Daten um den Diskriminator zu täuschen, während der Diskriminator versucht echte von falschen Daten zu unterscheiden. Dieser adversariale Trainingsprozess führt zu Generatoren die hochrealistische synthetische Daten erstellen können.",
                  "nl": "GANs bestaan uit twee concurrerende netwerken: de generator creëert nepdata om de discriminator te misleiden, terwijl de discriminator probeert echte van nepdata te onderscheiden. Dit adversariale trainingsproces leidt tot generators die zeer realistische synthetische data kunnen creëren."
        }
      },
      {
        question: {
                  "en": "What is an LSTM (Long Short-Term Memory) network?",
                  "es": "¿Qué es una red LSTM (Long Short-Term Memory)?",
                  "de": "Was ist ein LSTM (Long Short-Term Memory) Netzwerk?",
                  "nl": "Wat is een LSTM (Long Short-Term Memory) netwerk?"
        },
        options: [
        {
                  "en": "A type of convolutional network",
                  "es": "Un tipo de red convolucional",
                  "de": "Eine Art von Faltungsnetzwerk",
                  "nl": "Een type convolutioneel netwerk"
        },
        {
                  "en": "A network with the largest possible memory",
                  "es": "Una red con la mayor memoria posible",
                  "de": "Ein Netzwerk mit dem größtmöglichen Speicher",
                  "nl": "Een netwerk met het grootst mogelijke geheugen"
        },
        {
                  "en": "A network that works only with short sequences",
                  "es": "Una red que funciona solo con secuencias cortas",
                  "de": "Ein Netzwerk das nur mit kurzen Sequenzen arbeitet",
                  "nl": "Een netwerk dat alleen werkt met korte sequenties"
        },
        {
                  "en": "A type of RNN designed to remember information for long periods and solve the vanishing gradient problem",
                  "es": "Un tipo de RNN diseñado para recordar información durante largos períodos y resolver el problema del gradiente que se desvanece",
                  "de": "RNN-Art ausgelegt Informationen für lange Zeiträume zu speichern und Problem verschwindenden Gradienten zu lösen",
                  "nl": "Een type RNN ontworpen om informatie voor lange periodes te onthouden en het probleem van verdwijnende gradiënten op te lossen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "LSTMs are a special kind of RNN with memory cells that can selectively remember or forget information using gates (input, forget, output). This architecture allows them to capture long-term dependencies in sequences much better than traditional RNNs.",
                  "es": "Las LSTM son un tipo especial de RNN con celdas de memoria que pueden recordar u olvidar información selectivamente usando puertas (entrada, olvido, salida). Esta arquitectura les permite capturar dependencias a largo plazo en secuencias mucho mejor que las RNN tradicionales.",
                  "de": "LSTMs sind eine spezielle Art von RNN mit Speicherzellen die selektiv Informationen erinnern oder vergessen können durch Verwendung von Gates (Eingabe, Vergessen, Ausgabe). Diese Architektur ermöglicht es ihnen langfristige Abhängigkeiten in Sequenzen viel besser zu erfassen als traditionelle RNNs.",
                  "nl": "LSTMs zijn een speciaal type RNN met geheugencellen die selectief informatie kunnen onthouden of vergeten met behulp van poorten (invoer, vergeet, uitvoer). Deze architectuur stelt hen in staat om langetermijnafhankelijkheden in sequenties veel beter vast te leggen dan traditionele RNNs."
        }
      },
      {
        question: {
                  "en": "What is a GRU (Gated Recurrent Unit)?",
                  "es": "¿Qué es una GRU (Gated Recurrent Unit)?",
                  "de": "Was ist eine GRU (Gated Recurrent Unit)?",
                  "nl": "Wat is een GRU (Gated Recurrent Unit)?"
        },
        options: [
        {
                  "en": "A type of convolutional layer",
                  "es": "Un tipo de capa convolucional",
                  "de": "Eine Art von Faltungsschicht",
                  "nl": "Een type convolutielaag"
        },
        {
                  "en": "A more complex version of LSTM",
                  "es": "Una versión más compleja de LSTM",
                  "de": "Eine komplexere Version von LSTM",
                  "nl": "Een complexere versie van LSTM"
        },
        {
                  "en": "A graphics processing unit",
                  "es": "Una unidad de procesamiento gráfico",
                  "de": "Eine Grafikverarbeitungseinheit",
                  "nl": "Een grafische verwerkingseenheid"
        },
        {
                  "en": "A simplified version of LSTM with fewer gates but similar performance",
                  "es": "Una versión simplificada de LSTM con menos puertas pero rendimiento similar",
                  "de": "Eine vereinfachte Version von LSTM mit weniger Gates aber ähnlicher Leistung",
                  "nl": "Een vereenvoudigde versie van LSTM met minder poorten maar vergelijkbare prestaties"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "GRUs are a variation of LSTM that combine the forget and input gates into a single update gate, making them simpler and faster to train while maintaining similar performance for many tasks. They use reset and update gates to control information flow.",
                  "es": "Las GRU son una variación de LSTM que combinan las puertas de olvido y entrada en una sola puerta de actualización, haciéndolas más simples y rápidas de entrenar manteniendo rendimiento similar para muchas tareas. Usan puertas de reinicio y actualización para controlar el flujo de información.",
                  "de": "GRUs sind eine Variation von LSTM die die Vergessen- und Eingabe-Gates in ein einziges Update-Gate kombinieren, was sie einfacher und schneller zu trainieren macht während sie ähnliche Leistung für viele Aufgaben beibehalten. Sie verwenden Reset- und Update-Gates um den Informationsfluss zu kontrollieren.",
                  "nl": "GRUs zijn een variatie van LSTM die de vergeet- en invoerpoorten combineren tot een enkele updatepoort, waardoor ze eenvoudiger en sneller te trainen zijn terwijl ze vergelijkbare prestaties behouden voor veel taken. Ze gebruiken reset- en updatepoorten om informatiestromen te controleren."
        }
      },
      {
        question: {
                  "en": "What is a Transformer neural network?",
                  "es": "¿Qué es una red neuronal Transformer?",
                  "de": "Was ist ein Transformer neuronales Netzwerk?",
                  "nl": "Wat is een Transformer neuraal netwerk?"
        },
        options: [
        {
                  "en": "A model based entirely on attention mechanisms without recurrence or convolution",
                  "es": "Un modelo basado completamente en mecanismos de atención sin recurrencia o convolución",
                  "de": "Ein Modell das vollständig auf Aufmerksamkeitsmechanismen basiert ohne Rekurrenz oder Faltung",
                  "nl": "Een model volledig gebaseerd op aandachtmechanismen zonder recurrentie of convolutie"
        },
        {
                  "en": "A network that transforms images into text",
                  "es": "Una red que transforma imágenes en texto",
                  "de": "Ein Netzwerk das Bilder in Text umwandelt",
                  "nl": "Een netwerk dat afbeeldingen omzet naar tekst"
        },
        {
                  "en": "A network that only works with robotics",
                  "es": "Una red que solo funciona con robótica",
                  "de": "Ein Netzwerk das nur mit Robotik funktioniert",
                  "nl": "Een netwerk dat alleen werkt met robotica"
        },
        {
                  "en": "A type of electrical transformer",
                  "es": "Un tipo de transformador eléctrico",
                  "de": "Eine Art elektrischer Transformator",
                  "nl": "Een type elektrische transformator"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Transformers revolutionized NLP by using self-attention to process sequences in parallel rather than sequentially. They can capture long-range dependencies more effectively than RNNs and have become the foundation for models like BERT, GPT, and ChatGPT.",
                  "es": "Los Transformers revolucionaron el NLP usando auto-atención para procesar secuencias en paralelo en lugar de secuencialmente. Pueden capturar dependencias de largo alcance más efectivamente que las RNN y se han convertido en la base para modelos como BERT, GPT y ChatGPT.",
                  "de": "Transformers revolutionierten NLP durch Verwendung von Selbstaufmerksamkeit um Sequenzen parallel statt sequenziell zu verarbeiten. Sie können weitreichende Abhängigkeiten effektiver erfassen als RNNs und sind die Grundlage für Modelle wie BERT, GPT und ChatGPT geworden.",
                  "nl": "Transformers revolutioneerden NLP door self-attention te gebruiken om sequenties parallel te verwerken in plaats van sequentieel. Ze kunnen langetermijnafhankelijkheden effectiever vastleggen dan RNNs en zijn de basis geworden voor modellen zoals BERT, GPT en ChatGPT."
        }
      },
      {
        question: {
                  "en": "What is a Radial Basis Function (RBF) network?",
                  "es": "¿Qué es una red de Función de Base Radial (RBF)?",
                  "de": "Was ist ein Radial Basis Function (RBF) Netzwerk?",
                  "nl": "Wat is een Radial Basis Function (RBF) netwerk?"
        },
        options: [
        {
                  "en": "A type of decision tree",
                  "es": "Un tipo de árbol de decisión",
                  "de": "Eine Art Entscheidungsbaum",
                  "nl": "Een type beslissingsboom"
        },
        {
                  "en": "A linear regression model",
                  "es": "Un modelo de regresión lineal",
                  "de": "Ein lineares Regressionsmodell",
                  "nl": "Een lineair regressiemodel"
        },
        {
                  "en": "A network for radio frequency processing",
                  "es": "Una red para procesamiento de radiofrecuencia",
                  "de": "Ein Netzwerk für Radiofrequenzverarbeitung",
                  "nl": "Een netwerk voor radiofrequentieverwerking"
        },
        {
                  "en": "A network that uses distance-based activation functions centered around data points",
                  "es": "Una red que usa funciones de activación basadas en distancia centradas alrededor de puntos de datos",
                  "de": "Ein Netzwerk das distanzbasierte Aktivierungsfunktionen verwendet die um Datenpunkte zentriert sind",
                  "nl": "Een netwerk dat afstandsgebaseerde activatiefuncties gebruikt gecentreerd rond datapunten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "RBF networks use radial basis functions (like Gaussian functions) as activation functions. These functions respond to the distance from a center point, making them effective for function approximation and pattern recognition tasks where local similarity matters.",
                  "es": "Las redes RBF usan funciones de base radial (como funciones Gaussianas) como funciones de activación. Estas funciones responden a la distancia desde un punto central, haciéndolas efectivas para aproximación de funciones y tareas de reconocimiento de patrones donde la similitud local importa.",
                  "de": "RBF-Netzwerke verwenden radiale Basisfunktionen (wie Gaußsche Funktionen) als Aktivierungsfunktionen. Diese Funktionen reagieren auf die Entfernung von einem Mittelpunkt, was sie effektiv für Funktionsapproximation und Mustererkennungsaufgaben macht wo lokale Ähnlichkeit wichtig ist.",
                  "nl": "RBF-netwerken gebruiken radiale basisfuncties (zoals Gaussiaanse functies) als activatiefuncties. Deze functies reageren op de afstand tot een middelpunt, waardoor ze effectief zijn voor functieapproximatie en patroonherkenningstaken waarbij lokale gelijkenis belangrijk is."
        }
      },
      {
        question: {
                  "en": "What is a Variational Autoencoder (VAE)?",
                  "es": "¿Qué es un Autoencoder Variacional (VAE)?",
                  "de": "Was ist ein Variational Autoencoder (VAE)?",
                  "nl": "Wat is een Variational Autoencoder (VAE)?"
        },
        options: [
        {
                  "en": "An autoencoder with variable input size",
                  "es": "Un autoencoder con tamaño de entrada variable",
                  "de": "Ein Autoencoder mit variabler Eingabegröße",
                  "nl": "Een autoencoder met variabele invoergrootte"
        },
        {
                  "en": "An autoencoder that learns a probabilistic latent space for generating new data",
                  "es": "Un autoencoder que aprende un espacio latente probabilístico para generar nuevos datos",
                  "de": "Ein Autoencoder der einen probabilistischen latenten Raum zum Generieren neuer Daten lernt",
                  "nl": "Een autoencoder die een probabilistische latente ruimte leert voor het genereren van nieuwe data"
        },
        {
                  "en": "An autoencoder that varies its architecture",
                  "es": "Un autoencoder que varía su arquitectura",
                  "de": "Ein Autoencoder der seine Architektur variiert",
                  "nl": "Een autoencoder die zijn architectuur varieert"
        },
        {
                  "en": "An autoencoder for text only",
                  "es": "Un autoencoder solo para texto",
                  "de": "Ein Autoencoder nur für Text",
                  "nl": "Een autoencoder alleen voor tekst"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "VAEs combine autoencoders with variational inference to learn a continuous, probabilistic latent space. Unlike regular autoencoders, they can generate new data by sampling from the learned latent distribution, making them useful for data generation and representation learning.",
                  "es": "Los VAE combinan autoencoders con inferencia variacional para aprender un espacio latente continuo y probabilístico. A diferencia de los autoencoders regulares, pueden generar nuevos datos muestreando de la distribución latente aprendida, haciéndolos útiles para generación de datos y aprendizaje de representaciones.",
                  "de": "VAEs kombinieren Autoencoder mit variationaler Inferenz um einen kontinuierlichen, probabilistischen latenten Raum zu lernen. Im Gegensatz zu regulären Autoencodern können sie neue Daten generieren durch Sampling aus der gelernten latenten Verteilung, was sie nützlich für Datengenerierung und Repräsentationslernen macht.",
                  "nl": "VAEs combineren autoencoders met variationele inferentie om een continue, probabilistische latente ruimte te leren. In tegenstelling tot gewone autoencoders kunnen ze nieuwe data genereren door te samplen uit de geleerde latente verdeling, waardoor ze nuttig zijn voor datageneratie en representatieleren."
        }
      },
      {
        question: {
                  "en": "What is a Hopfield network?",
                  "es": "¿Qué es una red de Hopfield?",
                  "de": "Was ist ein Hopfield-Netzwerk?",
                  "nl": "Wat is een Hopfield-netwerk?"
        },
        options: [
        {
                  "en": "A feedforward network for classification",
                  "es": "Una red feedforward para clasificación",
                  "de": "Ein Feedforward-Netzwerk für Klassifikation",
                  "nl": "Een feedforward netwerk voor classificatie"
        },
        {
                  "en": "A type of convolutional network",
                  "es": "Un tipo de red convolucional",
                  "de": "Eine Art von Faltungsnetzwerk",
                  "nl": "Een type convolutioneel netwerk"
        },
        {
                  "en": "A recurrent network that serves as an associative memory model",
                  "es": "Una red recurrente que sirve como modelo de memoria asociativa",
                  "de": "Ein rekurrentes Netzwerk das als assoziatives Gedächtnismodell dient",
                  "nl": "Een recurrent netwerk dat dient als associatief geheugenmodel"
        },
        {
                  "en": "A network named after a football field",
                  "es": "Una red nombrada por un campo de fútbol",
                  "de": "Ein Netzwerk benannt nach einem Fußballfeld",
                  "nl": "Een netwerk vernoemd naar een voetbalveld"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Hopfield networks are recurrent neural networks that can store and retrieve patterns through associative memory. They use symmetric weights and energy minimization to converge to stored patterns, making them useful for pattern completion and error correction tasks.",
                  "es": "Las redes de Hopfield son redes neuronales recurrentes que pueden almacenar y recuperar patrones a través de memoria asociativa. Usan pesos simétricos y minimización de energía para converger a patrones almacenados, haciéndolas útiles para tareas de completado de patrones y corrección de errores.",
                  "de": "Hopfield-Netzwerke sind rekurrente neuronale Netzwerke die Muster durch assoziatives Gedächtnis speichern und abrufen können. Sie verwenden symmetrische Gewichte und Energieminimierung um zu gespeicherten Mustern zu konvergieren, was sie nützlich für Mustervervollständigung und Fehlerkorrektur macht.",
                  "nl": "Hopfield-netwerken zijn recurrente neurale netwerken die patronen kunnen opslaan en ophalen via associatief geheugen. Ze gebruiken symmetrische gewichten en energieminimalisatie om te convergeren naar opgeslagen patronen, waardoor ze nuttig zijn voor patrooncompletering en foutcorrectie."
        }
      },
      {
        question: {
                  "en": "What is a Self-Organizing Map (SOM)?",
                  "es": "¿Qué es un Mapa Auto-Organizativo (SOM)?",
                  "de": "Was ist eine Self-Organizing Map (SOM)?",
                  "nl": "Wat is een Self-Organizing Map (SOM)?"
        },
        options: [
        {
                  "en": "An unsupervised learning algorithm that creates a low-dimensional representation of high-dimensional data",
                  "es": "Un algoritmo de aprendizaje no supervisado que crea una representación de baja dimensión de datos de alta dimensión",
                  "de": "Ein unüberwachter Lernalgorithmus der eine niedrigdimensionale Darstellung hochdimensionaler Daten erstellt",
                  "nl": "Een unsupervised leeralgoritme dat een lage-dimensionale representatie van hoge-dimensionale data creëert"
        },
        {
                  "en": "A map that organizes itself physically",
                  "es": "Un mapa que se organiza físicamente",
                  "de": "Eine Karte die sich physisch organisiert",
                  "nl": "Een kaart die zichzelf fysiek organiseert"
        },
        {
                  "en": "A type of decision tree",
                  "es": "Un tipo de árbol de decisión",
                  "de": "Eine Art Entscheidungsbaum",
                  "nl": "Een type beslissingsboom"
        },
        {
                  "en": "A supervised learning algorithm",
                  "es": "Un algoritmo de aprendizaje supervisado",
                  "de": "Ein überwachter Lernalgorithmus",
                  "nl": "Een supervised leeralgoritme"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "SOMs use competitive learning to map high-dimensional input data onto a lower-dimensional grid while preserving topological relationships. Neurons compete to respond to inputs, and neighboring neurons are updated together, creating organized feature maps useful for visualization and clustering.",
                  "es": "Los SOM usan aprendizaje competitivo para mapear datos de entrada de alta dimensión en una cuadrícula de menor dimensión preservando relaciones topológicas. Las neuronas compiten para responder a entradas, y las neuronas vecinas se actualizan juntas, creando mapas de características organizados útiles para visualización y agrupamiento.",
                  "de": "SOMs verwenden kompetitives Lernen um hochdimensionale Eingabedaten auf ein niedrigerdimensionales Gitter abzubilden während topologische Beziehungen erhalten bleiben. Neuronen konkurrieren um auf Eingaben zu reagieren, und benachbarte Neuronen werden zusammen aktualisiert, wodurch organisierte Merkmalskarten entstehen die für Visualisierung und Clustering nützlich sind.",
                  "nl": "SOMs gebruiken competitief leren om hoge-dimensionale invoerdata toe te wijzen aan een lager-dimensionaal raster terwijl topologische relaties behouden blijven. Neuronen concurreren om te reageren op invoer, en naburige neuronen worden samen bijgewerkt, waardoor georganiseerde kenmerkkaarten ontstaan die nuttig zijn voor visualisatie en clustering."
        }
      },
      {
        question: {
                  "en": "What is a Boltzmann machine?",
                  "es": "¿Qué es una máquina de Boltzmann?",
                  "de": "Was ist eine Boltzmann-Maschine?",
                  "nl": "Wat is een Boltzmann-machine?"
        },
        options: [
        {
                  "en": "A deterministic feedforward network",
                  "es": "Una red feedforward determinística",
                  "de": "Ein deterministisches Feedforward-Netzwerk",
                  "nl": "Een deterministisch feedforward netwerk"
        },
        {
                  "en": "A machine for thermal physics",
                  "es": "Una máquina para física térmica",
                  "de": "Eine Maschine für Thermophysik",
                  "nl": "Een machine voor thermische fysica"
        },
        {
                  "en": "A stochastic neural network that can learn probability distributions over binary data",
                  "es": "Una red neuronal estocástica que puede aprender distribuciones de probabilidad sobre datos binarios",
                  "de": "Ein stochastisches neuronales Netzwerk das Wahrscheinlichkeitsverteilungen über binäre Daten lernen kann",
                  "nl": "Een stochastisch neuraal netwerk dat waarschijnlijkheidsverdelingen over binaire data kan leren"
        },
        {
                  "en": "A type of support vector machine",
                  "es": "Un tipo de máquina de vector de soporte",
                  "de": "Eine Art Support Vector Machine",
                  "nl": "Een type support vector machine"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Boltzmann machines are neural networks with stochastic (random) binary units that follow statistical mechanics principles. They can learn complex probability distributions and are used for unsupervised learning, but training them is computationally intensive.",
                  "es": "Las máquinas de Boltzmann son redes neuronales con unidades binarias estocásticas (aleatorias) que siguen principios de mecánica estadística. Pueden aprender distribuciones de probabilidad complejas y se usan para aprendizaje no supervisado, pero entrenarlas es computacionalmente intensivo.",
                  "de": "Boltzmann-Maschinen sind neuronale Netzwerke mit stochastischen (zufälligen) binären Einheiten die statistischen Mechanik-Prinzipien folgen. Sie können komplexe Wahrscheinlichkeitsverteilungen lernen und werden für unüberwachtes Lernen verwendet, aber ihr Training ist rechnerisch intensiv.",
                  "nl": "Boltzmann-machines zijn neurale netwerken met stochastische (willekeurige) binaire eenheden die statistische mechanica-principes volgen. Ze kunnen complexe waarschijnlijkheidsverdelingen leren en worden gebruikt voor unsupervised learning, maar hun training is computationeel intensief."
        }
      },
      {
        question: {
                  "en": "What is a Restricted Boltzmann Machine (RBM)?",
                  "es": "¿Qué es una Máquina de Boltzmann Restringida (RBM)?",
                  "de": "Was ist eine Restricted Boltzmann Machine (RBM)?",
                  "nl": "Wat is een Restricted Boltzmann Machine (RBM)?"
        },
        options: [
        {
                  "en": "A supervised version of Boltzmann machine",
                  "es": "Una versión supervisada de la máquina de Boltzmann",
                  "de": "Eine überwachte Version der Boltzmann-Maschine",
                  "nl": "Een supervised versie van de Boltzmann-machine"
        },
        {
                  "en": "A simplified Boltzmann machine with no connections within layers, only between visible and hidden layers",
                  "es": "Una máquina de Boltzmann simplificada sin conexiones dentro de capas, solo entre capas visibles y ocultas",
                  "de": "Eine vereinfachte Boltzmann-Maschine ohne Verbindungen innerhalb von Schichten, nur zwischen sichtbaren und versteckten Schichten",
                  "nl": "Een vereenvoudigde Boltzmann-machine zonder verbindingen binnen lagen, alleen tussen zichtbare en verborgen lagen"
        },
        {
                  "en": "A Boltzmann machine with restricted memory",
                  "es": "Una máquina de Boltzmann con memoria restringida",
                  "de": "Eine Boltzmann-Maschine mit eingeschränktem Speicher",
                  "nl": "Een Boltzmann-machine met beperkt geheugen"
        },
        {
                  "en": "A Boltzmann machine that only works with small datasets",
                  "es": "Una máquina de Boltzmann que solo funciona con conjuntos de datos pequeños",
                  "de": "Eine Boltzmann-Maschine die nur mit kleinen Datensätzen funktioniert",
                  "nl": "Een Boltzmann-machine die alleen werkt met kleine datasets"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "RBMs are a simpler form of Boltzmann machines where connections only exist between visible and hidden layers, not within layers. This restriction makes them easier to train and they were important building blocks for deep belief networks and early deep learning systems.",
                  "es": "Las RBM son una forma más simple de máquinas de Boltzmann donde las conexiones solo existen entre capas visibles y ocultas, no dentro de capas. Esta restricción las hace más fáciles de entrenar y fueron bloques de construcción importantes para redes de creencia profunda y sistemas tempranos de aprendizaje profundo.",
                  "de": "RBMs sind eine einfachere Form von Boltzmann-Maschinen wo Verbindungen nur zwischen sichtbaren und versteckten Schichten existieren, nicht innerhalb von Schichten. Diese Einschränkung macht sie einfacher zu trainieren und sie waren wichtige Bausteine für Deep Belief Networks und frühe Deep Learning Systeme.",
                  "nl": "RBMs zijn een eenvoudigere vorm van Boltzmann-machines waarbij verbindingen alleen bestaan tussen zichtbare en verborgen lagen, niet binnen lagen. Deze beperking maakt ze gemakkelijker te trainen en ze waren belangrijke bouwstenen voor deep belief networks en vroege deep learning systemen."
        }
      },
      {
        question: {
                  "en": "What is a Deep Belief Network (DBN)?",
                  "es": "¿Qué es una Red de Creencia Profunda (DBN)?",
                  "de": "Was ist ein Deep Belief Network (DBN)?",
                  "nl": "Wat is een Deep Belief Network (DBN)?"
        },
        options: [
        {
                  "en": "A deep network composed of multiple layers of Restricted Boltzmann Machines",
                  "es": "Una red profunda compuesta de múltiples capas de Máquinas de Boltzmann Restringidas",
                  "de": "Ein tiefes Netzwerk bestehend aus mehreren Schichten von Restricted Boltzmann Machines",
                  "nl": "Een diep netwerk bestaande uit meerdere lagen van Restricted Boltzmann Machines"
        },
        {
                  "en": "A network that has strong religious beliefs",
                  "es": "Una red que tiene fuertes creencias religiosas",
                  "de": "Ein Netzwerk das starke religiöse Überzeugungen hat",
                  "nl": "Een netwerk dat sterke religieuze overtuigingen heeft"
        },
        {
                  "en": "A shallow network with belief-based learning",
                  "es": "Una red superficial con aprendizaje basado en creencias",
                  "de": "Ein flaches Netzwerk mit glaubensbasiertem Lernen",
                  "nl": "Een ondiep netwerk met belief-gebaseerd leren"
        },
        {
                  "en": "A network for belief propagation only",
                  "es": "Una red solo para propagación de creencias",
                  "de": "Ein Netzwerk nur für Belief Propagation",
                  "nl": "Een netwerk alleen voor belief propagation"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "DBNs are generative models that stack multiple RBMs. Each layer learns increasingly abstract representations of the data. They were historically important as one of the first successful deep learning architectures, though they've largely been superseded by other deep learning methods.",
                  "es": "Las DBN son modelos generativos que apilan múltiples RBM. Cada capa aprende representaciones cada vez más abstractas de los datos. Fueron históricamente importantes como una de las primeras arquitecturas exitosas de aprendizaje profundo, aunque han sido ampliamente superadas por otros métodos de aprendizaje profundo.",
                  "de": "DBNs sind generative Modelle die mehrere RBMs stapeln. Jede Schicht lernt zunehmend abstrakte Darstellungen der Daten. Sie waren historisch wichtig als eine der ersten erfolgreichen Deep Learning Architekturen, obwohl sie weitgehend von anderen Deep Learning Methoden übertroffen wurden.",
                  "nl": "DBNs zijn generatieve modellen die meerdere RBMs stapelen. Elke laag leert steeds abstractere representaties van de data. Ze waren historisch belangrijk als een van de eerste succesvolle deep learning architecturen, hoewel ze grotendeels zijn overtroffen door andere deep learning methoden."
        }
      },
      {
        question: {
                  "en": "What is a Capsule Network (CapsNet)?",
                  "es": "¿Qué es una Red de Cápsulas (CapsNet)?",
                  "de": "Was ist ein Capsule Network (CapsNet)?",
                  "nl": "Wat is een Capsule Network (CapsNet)?"
        },
        options: [
        {
                  "en": "A network contained in physical capsules",
                  "es": "Una red contenida en cápsulas físicas",
                  "de": "Ein Netzwerk das in physischen Kapseln enthalten ist",
                  "nl": "Een netwerk vervat in fysieke capsules"
        },
        {
                  "en": "A network for medical capsule analysis",
                  "es": "Una red para análisis de cápsulas médicas",
                  "de": "Ein Netzwerk für medizinische Kapselanalyse",
                  "nl": "Een netwerk voor medische capsuleanalyse"
        },
        {
                  "en": "A simplified CNN architecture",
                  "es": "Una arquitectura CNN simplificada",
                  "de": "Eine vereinfachte CNN-Architektur",
                  "nl": "Een vereenvoudigde CNN-architectuur"
        },
        {
                  "en": "A network that uses capsules (groups of neurons) to represent objects and their spatial relationships",
                  "es": "Una red que usa cápsulas (grupos de neuronas) para representar objetos y sus relaciones espaciales",
                  "de": "Ein Netzwerk das Kapseln (Gruppen von Neuronen) verwendet um Objekte und ihre räumlichen Beziehungen zu repräsentieren",
                  "nl": "Een netwerk dat capsules (groepen neuronen) gebruikt om objecten en hun ruimtelijke relaties te representeren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "CapsNets use capsules - small groups of neurons that output vectors instead of scalars. These vectors encode both the probability that a feature exists and its instantiation parameters (pose, orientation, etc.), potentially addressing some limitations of traditional CNNs.",
                  "es": "Las CapsNets usan cápsulas - pequeños grupos de neuronas que producen vectores en lugar de escalares. Estos vectores codifican tanto la probabilidad de que exista una característica como sus parámetros de instanciación (pose, orientación, etc.), potencialmente abordando algunas limitaciones de las CNN tradicionales.",
                  "de": "CapsNets verwenden Kapseln - kleine Gruppen von Neuronen die Vektoren statt Skalare ausgeben. Diese Vektoren kodieren sowohl die Wahrscheinlichkeit dass ein Merkmal existiert als auch seine Instantiierungsparameter (Pose, Orientierung, etc.), wodurch möglicherweise einige Beschränkungen traditioneller CNNs adressiert werden.",
                  "nl": "CapsNets gebruiken capsules - kleine groepen neuronen die vectoren uitvoeren in plaats van scalars. Deze vectoren coderen zowel de waarschijnlijkheid dat een kenmerk bestaat als zijn instantiatieparameters (pose, oriëntatie, etc.), waarmee mogelijk enkele beperkingen van traditionele CNNs worden aangepakt."
        }
      },
      {
        question: {
                  "en": "What is a Graph Neural Network (GNN)?",
                  "es": "¿Qué es una Red Neuronal de Grafos (GNN)?",
                  "de": "Was ist ein Graph Neural Network (GNN)?",
                  "nl": "Wat is een Graph Neural Network (GNN)?"
        },
        options: [
        {
                  "en": "A linear regression model for graphs",
                  "es": "Un modelo de regresión lineal para grafos",
                  "de": "Ein lineares Regressionsmodell für Graphen",
                  "nl": "Een lineair regressiemodel voor grafen"
        },
        {
                  "en": "A neural network designed to work directly with graph-structured data",
                  "es": "Una red neuronal diseñada para trabajar directamente con datos estructurados en grafos",
                  "de": "Ein neuronales Netzwerk das darauf ausgelegt ist direkt mit graphstrukturierten Daten zu arbeiten",
                  "nl": "Een neuraal netwerk ontworpen om direct te werken met graafgestructureerde data"
        },
        {
                  "en": "A network for creating visual graphs",
                  "es": "Una red para crear gráficos visuales",
                  "de": "Ein Netzwerk zur Erstellung visueller Graphiken",
                  "nl": "Een netwerk voor het creëren van visuele grafieken"
        },
        {
                  "en": "A network that only processes 2D images",
                  "es": "Una red que solo procesa imágenes 2D",
                  "de": "Ein Netzwerk das nur 2D-Bilder verarbeitet",
                  "nl": "Een netwerk dat alleen 2D-afbeeldingen verwerkt"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "GNNs can process data where relationships between entities are represented as graphs (nodes and edges). They use message passing between connected nodes to learn representations, making them useful for social networks, molecular analysis, and recommendation systems.",
                  "es": "Las GNN pueden procesar datos donde las relaciones entre entidades se representan como grafos (nodos y aristas). Usan paso de mensajes entre nodos conectados para aprender representaciones, haciéndolas útiles para redes sociales, análisis molecular y sistemas de recomendación.",
                  "de": "GNNs können Daten verarbeiten wo Beziehungen zwischen Entitäten als Graphen (Knoten und Kanten) repräsentiert sind. Sie verwenden Nachrichtenaustausch zwischen verbundenen Knoten um Darstellungen zu lernen, was sie nützlich für soziale Netzwerke, Molekularanalyse und Empfehlungssysteme macht.",
                  "nl": "GNNs kunnen data verwerken waarbij relaties tussen entiteiten worden weergegeven als grafen (knopen en randen). Ze gebruiken berichtuitwisseling tussen verbonden knopen om representaties te leren, waardoor ze nuttig zijn voor sociale netwerken, moleculaire analyse en aanbevelingssystemen."
        }
      },
      {
        question: {
                  "en": "What is a Siamese Network?",
                  "es": "¿Qué es una Red Siamesa?",
                  "de": "Was ist ein Siamese Network?",
                  "nl": "Wat is een Siamese Network?"
        },
        options: [
        {
                  "en": "A network from Thailand",
                  "es": "Una red de Tailandia",
                  "de": "Ein Netzwerk aus Thailand",
                  "nl": "Een netwerk uit Thailand"
        },
        {
                  "en": "A network with two different architectures",
                  "es": "Una red con dos arquitecturas diferentes",
                  "de": "Ein Netzwerk mit zwei verschiedenen Architekturen",
                  "nl": "Een netwerk met twee verschillende architecturen"
        },
        {
                  "en": "A neural network architecture with two identical sub-networks that share weights and process paired inputs",
                  "es": "Una arquitectura de red neuronal con dos sub-redes idénticas que comparten pesos y procesan entradas emparejadas",
                  "de": "Eine neuronale Netzwerkarchitektur mit zwei identischen Teilnetzwerken die Gewichte teilen und gepaarte Eingaben verarbeiten",
                  "nl": "Een neurale netwerkarchitectuur met twee identieke sub-netwerken die gewichten delen en gepaarde invoer verwerken"
        },
        {
                  "en": "A network that processes only twin data",
                  "es": "Una red que procesa solo datos gemelos",
                  "de": "Ein Netzwerk das nur Zwillingsdaten verarbeitet",
                  "nl": "Een netwerk dat alleen tweelingdata verwerkt"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Siamese networks consist of two identical neural networks that share the same weights and architecture. They're designed to learn similarity metrics between pairs of inputs, commonly used for face verification, signature verification, and one-shot learning tasks.",
                  "es": "Las redes siamesas consisten en dos redes neuronales idénticas que comparten los mismos pesos y arquitectura. Están diseñadas para aprender métricas de similitud entre pares de entradas, comúnmente usadas para verificación facial, verificación de firmas y tareas de aprendizaje de una sola vez.",
                  "de": "Siamese Networks bestehen aus zwei identischen neuronalen Netzwerken die dieselben Gewichte und Architektur teilen. Sie sind darauf ausgelegt Ähnlichkeitsmetriken zwischen Eingabepaaren zu lernen, häufig verwendet für Gesichtsverifikation, Signaturverifikation und One-Shot Learning Aufgaben.",
                  "nl": "Siamese networks bestaan uit twee identieke neurale netwerken die dezelfde gewichten en architectuur delen. Ze zijn ontworpen om gelijkenismetrieken tussen invoerparen te leren, vaak gebruikt voor gezichtsverificatie, handtekeningverificatie en one-shot learning taken."
        }
      },
      {
        question: {
                  "en": "What is a Neural Turing Machine (NTM)?",
                  "es": "¿Qué es una Máquina de Turing Neural (NTM)?",
                  "de": "Was ist eine Neural Turing Machine (NTM)?",
                  "nl": "Wat is een Neural Turing Machine (NTM)?"
        },
        options: [
        {
                  "en": "A mechanical Turing machine made of neurons",
                  "es": "Una máquina de Turing mecánica hecha de neuronas",
                  "de": "Eine mechanische Turing-Maschine aus Neuronen",
                  "nl": "Een mechanische Turing-machine gemaakt van neuronen"
        },
        {
                  "en": "A network that can only compute simple functions",
                  "es": "Una red que solo puede computar funciones simples",
                  "de": "Ein Netzwerk das nur einfache Funktionen berechnen kann",
                  "nl": "Een netwerk dat alleen eenvoudige functies kan berekenen"
        },
        {
                  "en": "A neural network coupled with external memory that can read and write, extending computational capabilities",
                  "es": "Una red neuronal acoplada con memoria externa que puede leer y escribir, extendiendo capacidades computacionales",
                  "de": "Ein neuronales Netzwerk gekoppelt mit externem Speicher das lesen und schreiben kann, wodurch Rechenkapazitäten erweitert werden",
                  "nl": "Een neuraal netwerk gekoppeld aan extern geheugen dat kan lezen en schrijven, waardoor computationele mogelijkheden worden uitgebreid"
        },
        {
                  "en": "A network for historical computation",
                  "es": "Una red para computación histórica",
                  "de": "Ein Netzwerk für historische Berechnung",
                  "nl": "Een netwerk voor historische berekening"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "NTMs combine neural networks with addressable memory, allowing them to store and retrieve information in ways similar to traditional computers. They can learn algorithms and perform complex reasoning tasks that require working memory and attention mechanisms.",
                  "es": "Las NTM combinan redes neuronales con memoria direccionable, permitiéndoles almacenar y recuperar información de maneras similares a las computadoras tradicionales. Pueden aprender algoritmos y realizar tareas de razonamiento complejo que requieren memoria de trabajo y mecanismos de atención.",
                  "de": "NTMs kombinieren neuronale Netzwerke mit adressierbarem Speicher, wodurch sie Informationen auf ähnliche Weise wie traditionelle Computer speichern und abrufen können. Sie können Algorithmen lernen und komplexe Denkaufgaben durchführen die Arbeitsgedächtnis und Aufmerksamkeitsmechanismen erfordern.",
                  "nl": "NTMs combineren neurale netwerken met adresseerbaar geheugen, waardoor ze informatie kunnen opslaan en ophalen op manieren vergelijkbaar met traditionele computers. Ze kunnen algoritmen leren en complexe redeneertaken uitvoeren die werkgeheugen en aandachtmechanismen vereisen."
        }
      },
      {
        question: {
                  "en": "What is a Residual Neural Network (ResNet)?",
                  "es": "¿Qué es una Red Neuronal Residual (ResNet)?",
                  "de": "Was ist ein Residual Neural Network (ResNet)?",
                  "nl": "Wat is een Residual Neural Network (ResNet)?"
        },
        options: [
        {
                  "en": "A network that processes only leftover data",
                  "es": "Una red que procesa solo datos sobrantes",
                  "de": "Ein Netzwerk das nur übriggebliebene Daten verarbeitet",
                  "nl": "Een netwerk dat alleen overgebleven data verwerkt"
        },
        {
                  "en": "A deep network that uses skip connections to allow gradients to flow directly to earlier layers",
                  "es": "Una red profunda que usa conexiones de salto para permitir que los gradientes fluyan directamente a capas anteriores",
                  "de": "Ein tiefes Netzwerk das Skip-Verbindungen verwendet um Gradienten direkt zu früheren Schichten fließen zu lassen",
                  "nl": "Een diep netwerk dat skip-verbindingen gebruikt om gradiënten direct naar eerdere lagen te laten stromen"
        },
        {
                  "en": "A network for residential applications",
                  "es": "Una red para aplicaciones residenciales",
                  "de": "Ein Netzwerk für Wohnanwendungen",
                  "nl": "Een netwerk voor residentiële toepassingen"
        },
        {
                  "en": "A network with reduced computational requirements",
                  "es": "Una red con requisitos computacionales reducidos",
                  "de": "Ein Netzwerk mit reduzierten Rechenanforderungen",
                  "nl": "Een netwerk met verminderde computationele vereisten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "ResNets introduced skip connections (or residual connections) that allow the input to bypass one or more layers and be added to the output. This solves the vanishing gradient problem in very deep networks and enables training of networks with hundreds of layers.",
                  "es": "Las ResNets introdujeron conexiones de salto (o conexiones residuales) que permiten que la entrada bypase una o más capas y se sume a la salida. Esto resuelve el problema del gradiente que se desvanece en redes muy profundas y permite entrenar redes con cientos de capas.",
                  "de": "ResNets führten Skip-Verbindungen (oder Residualverbindungen) ein die es der Eingabe ermöglichen eine oder mehrere Schichten zu umgehen und zur Ausgabe hinzugefügt zu werden. Dies löst das Problem des verschwindenden Gradienten in sehr tiefen Netzwerken und ermöglicht das Training von Netzwerken mit Hunderten von Schichten.",
                  "nl": "ResNets introduceerden skip-verbindingen (of residuele verbindingen) die de invoer toestaan om een of meer lagen te omzeilen en bij de uitvoer te worden opgeteld. Dit lost het probleem van verdwijnende gradiënten in zeer diepe netwerken op en maakt training van netwerken met honderden lagen mogelijk."
        }
      },
      {
        question: {
                  "en": "What is a U-Net neural network?",
                  "es": "¿Qué es una red neuronal U-Net?",
                  "de": "Was ist ein U-Net neuronales Netzwerk?",
                  "nl": "Wat is een U-Net neuraal netwerk?"
        },
        options: [
        {
                  "en": "A convolutional network with an encoder-decoder structure and skip connections, primarily used for image segmentation",
                  "es": "Una red convolucional con estructura codificador-decodificador y conexiones de salto, principalmente usada para segmentación de imágenes",
                  "de": "Ein Faltungsnetzwerk mit Encoder-Decoder-Struktur und Skip-Verbindungen, hauptsächlich für Bildsegmentierung verwendet",
                  "nl": "Een convolutioneel netwerk met een encoder-decoder structuur en skip-verbindingen, voornamelijk gebruikt voor beeldsegmentatie"
        },
        {
                  "en": "A network for university applications",
                  "es": "Una red para aplicaciones universitarias",
                  "de": "Ein Netzwerk für Universitätsanwendungen",
                  "nl": "Een netwerk voor universitaire toepassingen"
        },
        {
                  "en": "A simplified CNN without pooling layers",
                  "es": "Una CNN simplificada sin capas de pooling",
                  "de": "Ein vereinfachtes CNN ohne Pooling-Schichten",
                  "nl": "Een vereenvoudigde CNN zonder pooling-lagen"
        },
        {
                  "en": "A network shaped like the letter U",
                  "es": "Una red con forma de la letra U",
                  "de": "Ein Netzwerk in Form des Buchstabens U",
                  "nl": "Een netwerk in de vorm van de letter U"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "U-Net has a U-shaped architecture with a contracting path (encoder) that captures context and an expansive path (decoder) that enables precise localization. Skip connections between corresponding layers help preserve fine details, making it excellent for medical image segmentation and pixel-level classification.",
                  "es": "U-Net tiene una arquitectura en forma de U con una ruta contractual (codificador) que captura contexto y una ruta expansiva (decodificador) que permite localización precisa. Las conexiones de salto entre capas correspondientes ayudan a preservar detalles finos, haciéndola excelente para segmentación de imágenes médicas y clasificación a nivel de píxel.",
                  "de": "U-Net hat eine U-förmige Architektur mit einem zusammenziehenden Pfad (Encoder) der Kontext erfasst und einem erweiternden Pfad (Decoder) der präzise Lokalisierung ermöglicht. Skip-Verbindungen zwischen entsprechenden Schichten helfen feine Details zu bewahren, was es ausgezeichnet für medizinische Bildsegmentierung und Pixelebenen-Klassifikation macht.",
                  "nl": "U-Net heeft een U-vormige architectuur met een samentrekkend pad (encoder) dat context vastlegt en een uitbreidend pad (decoder) dat precieze lokalisatie mogelijk maakt. Skip-verbindingen tussen overeenkomstige lagen helpen fijne details te behouden, waardoor het uitstekend is voor medische beeldsegmentatie en classificatie op pixelniveau."
        }
      },
      {
        question: {
                  "en": "What is attention pooling in neural networks?",
                  "es": "¿Qué es el attention pooling en redes neuronales?",
                  "de": "Was ist Attention Pooling in neuronalen Netzwerken?",
                  "nl": "Wat is attention pooling in neurale netwerken?"
        },
        options: [
        {
                  "en": "A type of max pooling layer",
                  "es": "Un tipo de capa de max pooling",
                  "de": "Eine Art Max-Pooling-Schicht",
                  "nl": "Een type max pooling laag"
        },
        {
                  "en": "A mechanism that weights features based on their importance before aggregating them",
                  "es": "Un mecanismo que pondera características basándose en su importancia antes de agregarlas",
                  "de": "Ein Mechanismus der Merkmale basierend auf ihrer Wichtigkeit gewichtet bevor sie aggregiert werden",
                  "nl": "Een mechanisme dat kenmerken weegt op basis van hun belang voordat ze worden geaggregeerd"
        },
        {
                  "en": "A layer that requires user attention",
                  "es": "Una capa que requiere atención del usuario",
                  "de": "Eine Schicht die Benutzeraufmerksamkeit erfordert",
                  "nl": "Een laag die gebruikersaandacht vereist"
        },
        {
                  "en": "Standard average pooling",
                  "es": "Pooling promedio estándar",
                  "de": "Standard Average Pooling",
                  "nl": "Standaard average pooling"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Attention pooling uses learned attention weights to determine how much each feature should contribute to the final pooled representation. Unlike max or average pooling which treat all positions equally, attention pooling adaptively focuses on the most relevant features for the task.",
                  "es": "El attention pooling usa pesos de atención aprendidos para determinar cuánto debe contribuir cada característica a la representación final agrupada. A diferencia del max o average pooling que tratan todas las posiciones igualmente, el attention pooling se enfoca adaptativamente en las características más relevantes para la tarea.",
                  "de": "Attention Pooling verwendet gelernte Aufmerksamkeitsgewichte um zu bestimmen wie viel jedes Merkmal zur finalen gepoolten Repräsentation beitragen sollte. Im Gegensatz zu Max- oder Average-Pooling die alle Positionen gleich behandeln, fokussiert sich Attention Pooling adaptiv auf die relevantesten Merkmale für die Aufgabe.",
                  "nl": "Attention pooling gebruikt geleerde aandachtsgewichten om te bepalen hoeveel elke feature moet bijdragen aan de uiteindelijke gepoolde representatie. In tegenstelling tot max of average pooling die alle posities gelijk behandelen, focust attention pooling adaptief op de meest relevante kenmerken voor de taak."
        }
      },
      {
        question: {
                  "en": "What is a Temporal Convolutional Network (TCN)?",
                  "es": "¿Qué es una Red Convolucional Temporal (TCN)?",
                  "de": "Was ist ein Temporal Convolutional Network (TCN)?",
                  "nl": "Wat is een Temporal Convolutional Network (TCN)?"
        },
        options: [
        {
                  "en": "A network for temporary data storage",
                  "es": "Una red para almacenamiento temporal de datos",
                  "de": "Ein Netzwerk für temporäre Datenspeicherung",
                  "nl": "Een netwerk voor tijdelijke dataopslag"
        },
        {
                  "en": "A standard RNN variant",
                  "es": "Una variante estándar de RNN",
                  "de": "Eine Standard-RNN-Variante",
                  "nl": "Een standaard RNN-variant"
        },
        {
                  "en": "A CNN that only processes time-based images",
                  "es": "Una CNN que solo procesa imágenes basadas en tiempo",
                  "de": "Ein CNN das nur zeitbasierte Bilder verarbeitet",
                  "nl": "Een CNN die alleen tijdgebaseerde afbeeldingen verwerkt"
        },
        {
                  "en": "A convolutional architecture adapted for sequence modeling using dilated causal convolutions",
                  "es": "Una arquitectura convolucional adaptada para modelado de secuencias usando convoluciones causales dilatadas",
                  "de": "Eine Faltungsarchitektur angepasst für Sequenzmodellierung unter Verwendung dilatierter kausaler Faltungen",
                  "nl": "Een convolutionele architectuur aangepast voor sequentiemodellering met gedilateerde causale convoluties"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "TCNs apply convolutional networks to sequence data using causal convolutions (only looking at past data) and dilated convolutions (expanding receptive field). They offer advantages over RNNs including parallel processing, stable gradients, and flexible receptive field sizes for capturing long-range dependencies.",
                  "es": "Las TCN aplican redes convolucionales a datos de secuencia usando convoluciones causales (solo mirando datos pasados) y convoluciones dilatadas (expandiendo campo receptivo). Ofrecen ventajas sobre las RNN incluyendo procesamiento paralelo, gradientes estables y tamaños de campo receptivo flexibles para capturar dependencias de largo alcance.",
                  "de": "TCNs wenden Faltungsnetzwerke auf Sequenzdaten an unter Verwendung kausaler Faltungen (nur auf vergangene Daten schauend) und dilatierter Faltungen (erweitertes rezeptives Feld). Sie bieten Vorteile gegenüber RNNs einschließlich paralleler Verarbeitung, stabiler Gradienten und flexibler rezeptiver Feldgrößen zum Erfassen weitreichender Abhängigkeiten.",
                  "nl": "TCNs passen convolutionele netwerken toe op sequentiedata met behulp van causale convoluties (alleen kijkend naar verleden data) en gedilateerde convoluties (uitbreidend receptief veld). Ze bieden voordelen ten opzichte van RNNs inclusief parallelle verwerking, stabiele gradiënten en flexibele receptieve veldgroottes voor het vastleggen van langetermijnafhankelijkheden."
        }
      },
      {
        question: {
                  "en": "What is a Mixture of Experts (MoE) network?",
                  "es": "¿Qué es una red de Mezcla de Expertos (MoE)?",
                  "de": "Was ist ein Mixture of Experts (MoE) Netzwerk?",
                  "nl": "Wat is een Mixture of Experts (MoE) netwerk?"
        },
        options: [
        {
                  "en": "An ensemble of identical networks",
                  "es": "Un conjunto de redes idénticas",
                  "de": "Ein Ensemble identischer Netzwerke",
                  "nl": "Een ensemble van identieke netwerken"
        },
        {
                  "en": "A network with multiple specialized sub-networks where a gating mechanism selects which experts to use for each input",
                  "es": "Una red con múltiples sub-redes especializadas donde un mecanismo de compuerta selecciona qué expertos usar para cada entrada",
                  "de": "Ein Netzwerk mit mehreren spezialisierten Teilnetzwerken wo ein Gating-Mechanismus auswählt welche Experten für jede Eingabe verwendet werden",
                  "nl": "Een netwerk met meerdere gespecialiseerde sub-netwerken waarbij een gating-mechanisme selecteert welke experts te gebruiken voor elke invoer"
        },
        {
                  "en": "A network for expert system applications",
                  "es": "Una red para aplicaciones de sistemas expertos",
                  "de": "Ein Netzwerk für Expertensystem-Anwendungen",
                  "nl": "Een netwerk voor expertsysteemtoepassingen"
        },
        {
                  "en": "A network trained by multiple human experts",
                  "es": "Una red entrenada por múltiples expertos humanos",
                  "de": "Ein Netzwerk trainiert von mehreren menschlichen Experten",
                  "nl": "Een netwerk getraind door meerdere menselijke experts"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "MoE networks consist of multiple expert networks and a gating network that decides which experts should process each input. This allows different parts of the model to specialize in different aspects of the data, improving capacity and performance while maintaining computational efficiency through sparse activation.",
                  "es": "Las redes MoE consisten en múltiples redes expertas y una red de compuerta que decide qué expertos deben procesar cada entrada. Esto permite que diferentes partes del modelo se especialicen en diferentes aspectos de los datos, mejorando capacidad y rendimiento mientras mantiene eficiencia computacional a través de activación dispersa.",
                  "de": "MoE-Netzwerke bestehen aus mehreren Experten-Netzwerken und einem Gating-Netzwerk das entscheidet welche Experten jede Eingabe verarbeiten sollen. Dies ermöglicht es verschiedenen Teilen des Modells sich auf verschiedene Aspekte der Daten zu spezialisieren, verbessert Kapazität und Leistung während rechnerische Effizienz durch spärliche Aktivierung beibehalten wird.",
                  "nl": "MoE-netwerken bestaan uit meerdere expertnetwerken en een gating-netwerk dat besluit welke experts elke invoer moeten verwerken. Dit stelt verschillende delen van het model in staat te specialiseren in verschillende aspecten van de data, waardoor capaciteit en prestaties verbeteren terwijl computationele efficiëntie behouden blijft door sparse activatie."
        }
      },
      {
        question: {
                  "en": "What is a Spiking Neural Network (SNN)?",
                  "es": "¿Qué es una Red Neuronal de Picos (SNN)?",
                  "de": "Was ist ein Spiking Neural Network (SNN)?",
                  "nl": "Wat is een Spiking Neural Network (SNN)?"
        },
        options: [
        {
                  "en": "A network designed for volleyball analysis",
                  "es": "Una red diseñada para análisis de voleibol",
                  "de": "Ein Netzwerk entworfen für Volleyball-Analyse",
                  "nl": "Een netwerk ontworpen voor volleybalanalyse"
        },
        {
                  "en": "A network that models neurons as firing discrete spikes over time, mimicking biological neurons more closely",
                  "es": "Una red que modela neuronas disparando picos discretos a lo largo del tiempo, imitando neuronas biológicas más cercanamente",
                  "de": "Ein Netzwerk das Neuronen als diskrete Spikes über Zeit feuernd modelliert, biologische Neuronen näher nachahmend",
                  "nl": "Een netwerk dat neuronen modelleert als het afvuren van discrete spikes over tijd, waarbij biologische neuronen nauwer worden nagebootst"
        },
        {
                  "en": "A network with sharp activation functions",
                  "es": "Una red con funciones de activación agudas",
                  "de": "Ein Netzwerk mit scharfen Aktivierungsfunktionen",
                  "nl": "Een netwerk met scherpe activatiefuncties"
        },
        {
                  "en": "A standard feedforward network",
                  "es": "Una red feedforward estándar",
                  "de": "Ein Standard-Feedforward-Netzwerk",
                  "nl": "Een standaard feedforward netwerk"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "SNNs are the third generation of neural networks that incorporate the temporal dimension of biological neurons. Neurons communicate through discrete spike events over time rather than continuous values, making them potentially more energy-efficient and better suited for neuromorphic hardware and temporal pattern recognition.",
                  "es": "Las SNN son la tercera generación de redes neuronales que incorporan la dimensión temporal de neuronas biológicas. Las neuronas se comunican a través de eventos de pico discretos a lo largo del tiempo en lugar de valores continuos, haciéndolas potencialmente más eficientes energéticamente y mejor adaptadas para hardware neuromórfico y reconocimiento de patrones temporales.",
                  "de": "SNNs sind die dritte Generation neuronaler Netzwerke die die zeitliche Dimension biologischer Neuronen einbeziehen. Neuronen kommunizieren durch diskrete Spike-Ereignisse über Zeit statt kontinuierlicher Werte, was sie potenziell energieeffizienter macht und besser geeignet für neuromorphe Hardware und zeitliche Mustererkennung.",
                  "nl": "SNNs zijn de derde generatie neurale netwerken die de temporele dimensie van biologische neuronen incorporeren. Neuronen communiceren via discrete spike-gebeurtenissen over tijd in plaats van continue waarden, waardoor ze mogelijk energiezuiniger zijn en beter geschikt voor neuromorfische hardware en temporele patroonherkenning."
        }
      },
      {
        question: {
                  "en": "What is an Attention Network (or Attention Mechanism)?",
                  "es": "¿Qué es una Red de Atención (o Mecanismo de Atención)?",
                  "de": "Was ist ein Attention Network (oder Aufmerksamkeitsmechanismus)?",
                  "nl": "Wat is een Attention Network (of aandachtmechanisme)?"
        },
        options: [
        {
                  "en": "A standard fully connected layer",
                  "es": "Una capa completamente conectada estándar",
                  "de": "Eine Standard vollständig verbundene Schicht",
                  "nl": "Een standaard volledig verbonden laag"
        },
        {
                  "en": "A network that requires constant monitoring",
                  "es": "Una red que requiere monitoreo constante",
                  "de": "Ein Netzwerk das konstante Überwachung erfordert",
                  "nl": "Een netwerk dat constante monitoring vereist"
        },
        {
                  "en": "A mechanism that allows the network to focus on relevant parts of input by learning importance weights",
                  "es": "Un mecanismo que permite a la red enfocarse en partes relevantes de la entrada aprendiendo pesos de importancia",
                  "de": "Ein Mechanismus der es dem Netzwerk ermöglicht sich auf relevante Teile der Eingabe zu fokussieren durch Lernen von Wichtigkeitsgewichten",
                  "nl": "Een mechanisme dat het netwerk toestaat te focussen op relevante delen van invoer door belanggewichten te leren"
        },
        {
                  "en": "A network for detecting user attention",
                  "es": "Una red para detectar atención del usuario",
                  "de": "Ein Netzwerk zur Erkennung von Benutzeraufmerksamkeit",
                  "nl": "Een netwerk voor het detecteren van gebruikersaandacht"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Attention mechanisms allow neural networks to dynamically focus on the most relevant parts of the input when producing each output. They compute attention weights that indicate the importance of each input element, enabling better handling of long sequences and improving interpretability by showing what the model focuses on.",
                  "es": "Los mecanismos de atención permiten a las redes neuronales enfocarse dinámicamente en las partes más relevantes de la entrada al producir cada salida. Calculan pesos de atención que indican la importancia de cada elemento de entrada, permitiendo mejor manejo de secuencias largas y mejorando interpretabilidad al mostrar en qué se enfoca el modelo.",
                  "de": "Aufmerksamkeitsmechanismen ermöglichen es neuronalen Netzwerken sich dynamisch auf die relevantesten Teile der Eingabe zu fokussieren beim Erzeugen jeder Ausgabe. Sie berechnen Aufmerksamkeitsgewichte die die Wichtigkeit jedes Eingabeelements anzeigen, ermöglichen besseres Handling langer Sequenzen und verbessern Interpretierbarkeit durch Zeigen worauf sich das Modell fokussiert.",
                  "nl": "Aandachtmechanismen stellen neurale netwerken in staat dynamisch te focussen op de meest relevante delen van de invoer bij het produceren van elke uitvoer. Ze berekenen aandachtsgewichten die het belang van elk invoerelement aangeven, waardoor betere verwerking van lange sequenties mogelijk wordt en interpreteerbaarheid verbetert door te tonen waarop het model focust."
        }
      },
      {
        question: {
                  "en": "What is a Memory Network?",
                  "es": "¿Qué es una Red de Memoria?",
                  "de": "Was ist ein Memory Network?",
                  "nl": "Wat is een Memory Network?"
        },
        options: [
        {
                  "en": "A network that memorizes training data",
                  "es": "Una red que memoriza datos de entrenamiento",
                  "de": "Ein Netzwerk das Trainingsdaten auswendig lernt",
                  "nl": "Een netwerk dat trainingsdata memoriseert"
        },
        {
                  "en": "A standard LSTM network",
                  "es": "Una red LSTM estándar",
                  "de": "Ein Standard-LSTM-Netzwerk",
                  "nl": "Een standaard LSTM-netwerk"
        },
        {
                  "en": "A network optimized for computer memory usage",
                  "es": "Una red optimizada para uso de memoria de computadora",
                  "de": "Ein Netzwerk optimiert für Computer-Speichernutzung",
                  "nl": "Een netwerk geoptimaliseerd voor computergeheugengebruik"
        },
        {
                  "en": "A neural network architecture with an external memory component that can be read from and written to during inference",
                  "es": "Una arquitectura de red neuronal con un componente de memoria externo del que se puede leer y escribir durante la inferencia",
                  "de": "Eine neuronale Netzwerkarchitektur mit einer externen Speicherkomponente die während der Inferenz gelesen und beschrieben werden kann",
                  "nl": "Een neurale netwerkarchitectuur met een externe geheugencomponent waarvan kan worden gelezen en geschreven tijdens inferentie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Memory Networks combine neural networks with a memory component that can store information and be accessed through attention mechanisms. They're designed for tasks requiring reasoning over facts and context, like question answering, where the network needs to retrieve relevant information from memory to answer queries.",
                  "es": "Las Redes de Memoria combinan redes neuronales con un componente de memoria que puede almacenar información y ser accedido a través de mecanismos de atención. Están diseñadas para tareas que requieren razonamiento sobre hechos y contexto, como respuesta a preguntas, donde la red necesita recuperar información relevante de la memoria para responder consultas.",
                  "de": "Memory Networks kombinieren neuronale Netzwerke mit einer Speicherkomponente die Informationen speichern kann und durch Aufmerksamkeitsmechanismen zugänglich ist. Sie sind für Aufgaben entworfen die Reasoning über Fakten und Kontext erfordern, wie Fragebeantwortung, wo das Netzwerk relevante Informationen aus dem Speicher abrufen muss um Anfragen zu beantworten.",
                  "nl": "Memory Networks combineren neurale netwerken met een geheugencomponent die informatie kan opslaan en toegankelijk is via aandachtmechanismen. Ze zijn ontworpen voor taken die redeneren over feiten en context vereisen, zoals vraagbeantwoording, waarbij het netwerk relevante informatie uit het geheugen moet ophalen om vragen te beantwoorden."
        }
      },
      {
        question: {
                  "en": "What is a Seq2Seq (Sequence-to-Sequence) model?",
                  "es": "¿Qué es un modelo Seq2Seq (Secuencia a Secuencia)?",
                  "de": "Was ist ein Seq2Seq (Sequence-to-Sequence) Modell?",
                  "nl": "Wat is een Seq2Seq (Sequence-to-Sequence) model?"
        },
        options: [
        {
                  "en": "A simple linear sequence transformation",
                  "es": "Una transformación de secuencia lineal simple",
                  "de": "Eine einfache lineare Sequenztransformation",
                  "nl": "Een eenvoudige lineaire sequentietransformatie"
        },
        {
                  "en": "A database sequential query model",
                  "es": "Un modelo de consulta secuencial de base de datos",
                  "de": "Ein Datenbank-Sequential-Query-Modell",
                  "nl": "Een database sequentieel querymodel"
        },
        {
                  "en": "A model that only processes sequences of length 2",
                  "es": "Un modelo que solo procesa secuencias de longitud 2",
                  "de": "Ein Modell das nur Sequenzen der Länge 2 verarbeitet",
                  "nl": "Een model dat alleen sequenties van lengte 2 verwerkt"
        },
        {
                  "en": "An encoder-decoder architecture that transforms one sequence into another, often using RNNs or Transformers",
                  "es": "Una arquitectura codificador-decodificador que transforma una secuencia en otra, a menudo usando RNNs o Transformers",
                  "de": "Eine Encoder-Decoder-Architektur die eine Sequenz in eine andere transformiert, oft unter Verwendung von RNNs oder Transformers",
                  "nl": "Een encoder-decoder architectuur die één sequentie transformeert naar een andere, vaak met RNNs of Transformers"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Seq2Seq models consist of an encoder that processes the input sequence into a fixed representation and a decoder that generates the output sequence from that representation. They're widely used for machine translation, text summarization, and other tasks where input and output are both sequences of potentially different lengths.",
                  "es": "Los modelos Seq2Seq consisten en un codificador que procesa la secuencia de entrada en una representación fija y un decodificador que genera la secuencia de salida a partir de esa representación. Se usan ampliamente para traducción automática, resumen de texto y otras tareas donde entrada y salida son ambas secuencias de longitudes potencialmente diferentes.",
                  "de": "Seq2Seq-Modelle bestehen aus einem Encoder der die Eingabesequenz in eine feste Repräsentation verarbeitet und einem Decoder der die Ausgabesequenz aus dieser Repräsentation generiert. Sie werden weit verbreitet für maschinelle Übersetzung, Textzusammenfassung und andere Aufgaben verwendet wo Eingabe und Ausgabe beide Sequenzen potenziell unterschiedlicher Längen sind.",
                  "nl": "Seq2Seq-modellen bestaan uit een encoder die de invoersequentie verwerkt tot een vaste representatie en een decoder die de uitvoersequentie genereert uit die representatie. Ze worden veel gebruikt voor machinevertaling, tekstsamenvatting en andere taken waarbij invoer en uitvoer beide sequenties zijn van mogelijk verschillende lengtes."
        }
      },
      {
        question: {
                  "en": "What is a Pointer Network?",
                  "es": "¿Qué es una Red de Punteros?",
                  "de": "Was ist ein Pointer Network?",
                  "nl": "Wat is een Pointer Network?"
        },
        options: [
        {
                  "en": "A standard classification network",
                  "es": "Una red de clasificación estándar",
                  "de": "Ein Standard-Klassifikationsnetzwerk",
                  "nl": "Een standaard classificatienetwerk"
        },
        {
                  "en": "A network that uses pointer variables in programming",
                  "es": "Una red que usa variables puntero en programación",
                  "de": "Ein Netzwerk das Zeigervariablen in der Programmierung verwendet",
                  "nl": "Een netwerk dat pointer variabelen gebruikt in programmeren"
        },
        {
                  "en": "A network for cursor movement prediction",
                  "es": "Una red para predicción de movimiento de cursor",
                  "de": "Ein Netzwerk für Cursor-Bewegungsvorhersage",
                  "nl": "Een netwerk voor cursorbeweging voorspelling"
        },
        {
                  "en": "A network that uses attention to point to positions in the input sequence as output, rather than generating from a fixed vocabulary",
                  "es": "Una red que usa atención para apuntar a posiciones en la secuencia de entrada como salida, en lugar de generar desde un vocabulario fijo",
                  "de": "Ein Netzwerk das Aufmerksamkeit verwendet um auf Positionen in der Eingabesequenz als Ausgabe zu zeigen, statt aus einem festen Vokabular zu generieren",
                  "nl": "Een netwerk dat aandacht gebruikt om te wijzen naar posities in de invoersequentie als uitvoer, in plaats van te genereren uit een vast vocabulaire"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pointer Networks use attention mechanisms to select elements from the input sequence as output, making them ideal for problems where the output depends on positions in the input (like sorting, traveling salesman problem, or extractive summarization). Unlike traditional seq2seq models, the output vocabulary is the input sequence itself.",
                  "es": "Las Redes de Punteros usan mecanismos de atención para seleccionar elementos de la secuencia de entrada como salida, haciéndolas ideales para problemas donde la salida depende de posiciones en la entrada (como ordenamiento, problema del viajante, o resumen extractivo). A diferencia de modelos seq2seq tradicionales, el vocabulario de salida es la secuencia de entrada misma.",
                  "de": "Pointer Networks verwenden Aufmerksamkeitsmechanismen um Elemente aus der Eingabesequenz als Ausgabe zu wählen, was sie ideal für Probleme macht wo die Ausgabe von Positionen in der Eingabe abhängt (wie Sortieren, Traveling Salesman Problem, oder extraktive Zusammenfassung). Im Gegensatz zu traditionellen Seq2Seq-Modellen ist das Ausgabevokabular die Eingabesequenz selbst.",
                  "nl": "Pointer Networks gebruiken aandachtmechanismen om elementen uit de invoersequentie te selecteren als uitvoer, waardoor ze ideaal zijn voor problemen waarbij de uitvoer afhangt van posities in de invoer (zoals sorteren, traveling salesman probleem, of extractieve samenvatting). In tegenstelling tot traditionele seq2seq-modellen is het uitvoervocabulaire de invoersequentie zelf."
        }
      },
      {
        question: {
                  "en": "What is a WaveNet?",
                  "es": "¿Qué es una WaveNet?",
                  "de": "Was ist ein WaveNet?",
                  "nl": "Wat is een WaveNet?"
        },
        options: [
        {
                  "en": "A deep generative model for raw audio waveforms using dilated causal convolutions",
                  "es": "Un modelo generativo profundo para formas de onda de audio crudo usando convoluciones causales dilatadas",
                  "de": "Ein tiefes generatives Modell für rohe Audio-Wellenformen unter Verwendung dilatierter kausaler Faltungen",
                  "nl": "Een diep generatief model voor ruwe audiogolfvormen met gedilateerde causale convoluties"
        },
        {
                  "en": "A network for analyzing ocean waves",
                  "es": "Una red para analizar olas del océano",
                  "de": "Ein Netzwerk zur Analyse von Ozeanwellen",
                  "nl": "Een netwerk voor het analyseren van oceaangolven"
        },
        {
                  "en": "A network for WiFi signal processing",
                  "es": "Una red para procesamiento de señal WiFi",
                  "de": "Ein Netzwerk für WiFi-Signalverarbeitung",
                  "nl": "Een netwerk voor WiFi-signaalverwerking"
        },
        {
                  "en": "A standard RNN for audio",
                  "es": "Una RNN estándar para audio",
                  "de": "Ein Standard-RNN für Audio",
                  "nl": "Een standaard RNN voor audio"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "WaveNet is a deep neural network for generating raw audio waveforms, developed by DeepMind. It uses stacked dilated causal convolutional layers to capture long-range temporal dependencies in audio. WaveNet has been successfully used for text-to-speech synthesis, music generation, and audio enhancement.",
                  "es": "WaveNet es una red neuronal profunda para generar formas de onda de audio crudo, desarrollada por DeepMind. Usa capas convolucionales causales dilatadas apiladas para capturar dependencias temporales de largo alcance en audio. WaveNet se ha usado exitosamente para síntesis de texto a voz, generación de música y mejora de audio.",
                  "de": "WaveNet ist ein tiefes neuronales Netzwerk zur Generierung roher Audio-Wellenformen, entwickelt von DeepMind. Es verwendet gestapelte dilatierte kausale Faltungsschichten um weitreichende zeitliche Abhängigkeiten in Audio zu erfassen. WaveNet wurde erfolgreich für Text-zu-Sprache-Synthese, Musikgenerierung und Audio-Verbesserung verwendet.",
                  "nl": "WaveNet is een diep neuraal netwerk voor het genereren van ruwe audiogolfvormen, ontwikkeld door DeepMind. Het gebruikt gestapelde gedilateerde causale convolutielagen om langetermijn temporeleafhankelijkheden in audio vast te leggen. WaveNet is met succes gebruikt voor tekst-naar-spraak synthese, muziekgeneratie en audioverbetering."
        }
      },
      {
        question: {
                  "en": "What is an Echo State Network (ESN)?",
                  "es": "¿Qué es una Red de Estado de Eco (ESN)?",
                  "de": "Was ist ein Echo State Network (ESN)?",
                  "nl": "Wat is een Echo State Network (ESN)?"
        },
        options: [
        {
                  "en": "A network that processes echo and reverb in audio",
                  "es": "Una red que procesa eco y reverberación en audio",
                  "de": "Ein Netzwerk das Echo und Hall in Audio verarbeitet",
                  "nl": "Een netwerk dat echo en nagalm in audio verwerkt"
        },
        {
                  "en": "A fully trainable recurrent network",
                  "es": "Una red recurrente completamente entrenable",
                  "de": "Ein vollständig trainierbares rekurrentes Netzwerk",
                  "nl": "Een volledig trainbaar recurrent netwerk"
        },
        {
                  "en": "A feedforward network for state prediction",
                  "es": "Una red feedforward para predicción de estado",
                  "de": "Ein Feedforward-Netzwerk für Zustandsvorhersage",
                  "nl": "Een feedforward netwerk voor toestandsvoorspelling"
        },
        {
                  "en": "A type of recurrent network where internal weights are randomly initialized and fixed, only output weights are trained",
                  "es": "Un tipo de red recurrente donde pesos internos son inicializados aleatoriamente y fijados, solo pesos de salida son entrenados",
                  "de": "Eine Art rekurrentes Netzwerk wo interne Gewichte zufällig initialisiert und fixiert sind, nur Ausgabegewichte werden trainiert",
                  "nl": "Een type recurrent netwerk waarbij interne gewichten willekeurig geïnitialiseerd en gefixeerd zijn, alleen uitvoergewichten worden getraind"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "ESNs belong to reservoir computing approaches where a large, randomly connected recurrent 'reservoir' of neurons creates a rich dynamical system. Only the output layer weights are trained using simple linear regression, making training extremely fast while still capturing complex temporal dynamics for tasks like time series prediction.",
                  "es": "Las ESN pertenecen a enfoques de computación de reservorio donde un 'reservorio' recurrente grande y conectado aleatoriamente de neuronas crea un sistema dinámico rico. Solo los pesos de la capa de salida son entrenados usando regresión lineal simple, haciendo el entrenamiento extremadamente rápido mientras aún captura dinámicas temporales complejas para tareas como predicción de series temporales.",
                  "de": "ESNs gehören zu Reservoir Computing Ansätzen wo ein großes, zufällig verbundenes rekurrentes 'Reservoir' von Neuronen ein reiches dynamisches System erzeugt. Nur die Ausgabeschicht-Gewichte werden mit einfacher linearer Regression trainiert, was Training extrem schnell macht während komplexe zeitliche Dynamiken für Aufgaben wie Zeitreihenvorhersage erfasst werden.",
                  "nl": "ESNs behoren tot reservoir computing benaderingen waarbij een groot, willekeurig verbonden recurrent 'reservoir' van neuronen een rijk dynamisch systeem creëert. Alleen de uitvoerlaaggewichten worden getraind met eenvoudige lineaire regressie, waardoor training extreem snel is terwijl nog steeds complexe temporele dynamieken worden vastgelegd voor taken zoals tijdreeksvoorspelling."
        }
      },
      {
        question: {
                  "en": "What are Siamese networks?",
                  "es": "¿Qué son las redes siamesas?",
                  "de": "Was sind Siamesische Netzwerke?",
                  "nl": "Wat zijn Siamese netwerken?"
        },
        options: [
        {
                  "en": "Networks designed specifically for Asian language processing",
                  "es": "Redes diseñadas específicamente para procesamiento de lenguaje asiático",
                  "de": "Netzwerke speziell für asiatische Sprachverarbeitung entwickelt",
                  "nl": "Netwerken speciaal ontworpen voor Aziatische taalverwerking"
        },
        {
                  "en": "Twin networks with shared weights that learn similarity between inputs through comparison",
                  "es": "Redes gemelas con pesos compartidos que aprenden similitud entre entradas mediante comparación",
                  "de": "Zwillingsnetzwerke mit gemeinsamen Gewichten die Ähnlichkeit zwischen Eingaben durch Vergleich lernen",
                  "nl": "Tweelingnetwerken met gedeelde gewichten die gelijkenis tussen invoer leren door vergelijking"
        },
        {
                  "en": "A type of ensemble with exactly two models",
                  "es": "Tipo de ensemble con exactamente dos modelos",
                  "de": "Art von Ensemble mit genau zwei Modellen",
                  "nl": "Type ensemble met precies twee modellen"
        },
        {
                  "en": "Networks with two completely independent branches",
                  "es": "Redes con dos ramas completamente independientes",
                  "de": "Netzwerke mit zwei völlig unabhängigen Zweigen",
                  "nl": "Netwerken met twee volledig onafhankelijke takken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Siamese networks consist of two identical sub-networks with shared weights that process different inputs. They learn to output similar representations for similar inputs and different representations for dissimilar inputs. Commonly used for face verification, signature verification, and one-shot learning tasks.",
                  "es": "Las redes siamesas consisten en dos sub-redes idénticas con pesos compartidos que procesan entradas diferentes. Aprenden a producir representaciones similares para entradas similares y representaciones diferentes para entradas diferentes. Comúnmente usadas para verificación facial, verificación de firma y tareas de aprendizaje de un solo disparo.",
                  "de": "Siamesische Netzwerke bestehen aus zwei identischen Teilnetzwerken mit gemeinsamen Gewichten die verschiedene Eingaben verarbeiten. Sie lernen ähnliche Darstellungen für ähnliche Eingaben und unterschiedliche Darstellungen für unähnliche Eingaben auszugeben. Häufig verwendet für Gesichtsverifizierung, Signaturverifizierung und One-Shot-Learning-Aufgaben.",
                  "nl": "Siamese netwerken bestaan uit twee identieke subnetwerken met gedeelde gewichten die verschillende invoer verwerken. Ze leren vergelijkbare representaties uit te voeren voor vergelijkbare invoer en verschillende representaties voor ongelijke invoer. Vaak gebruikt voor gezichtsverificatie, handtekeningverificatie en one-shot learning taken."
        }
      },
      {
        question: {
                  "en": "What is a Liquid State Machine (LSM)?",
                  "es": "¿Qué es una Máquina de Estado Líquido (LSM)?",
                  "de": "Was ist eine Liquid State Machine (LSM)?",
                  "nl": "Wat is een Liquid State Machine (LSM)?"
        },
        options: [
        {
                  "en": "A spiking neural network reservoir computing model inspired by biological neural microcircuits",
                  "es": "Modelo de computación de reservorio de red neuronal de picos inspirado en microcircuitos neuronales biológicos",
                  "de": "Spiking neuronales Netzwerk Reservoir Computing Modell inspiriert von biologischen neuronalen Mikroschaltungen",
                  "nl": "Een spiking neuraal netwerk reservoir computing model geïnspireerd door biologische neurale microcircuits"
        },
        {
                  "en": "A standard feedforward network",
                  "es": "Red feedforward estándar",
                  "de": "Standard-Feedforward-Netzwerk",
                  "nl": "Standaard feedforward netwerk"
        },
        {
                  "en": "A network with weights that change like liquid",
                  "es": "Red con pesos que cambian como líquido",
                  "de": "Netzwerk mit Gewichten die sich wie Flüssigkeit ändern",
                  "nl": "Netwerk met gewichten die veranderen als vloeistof"
        },
        {
                  "en": "A network for modeling liquid dynamics",
                  "es": "Red para modelar dinámicas de líquidos",
                  "de": "Netzwerk zur Modellierung von Flüssigkeitsdynamik",
                  "nl": "Netwerk voor het modelleren van vloeistofdynamica"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "LSMs are part of reservoir computing using spiking neurons arranged in a recurrent network 'reservoir' that transforms temporal input into high-dimensional spatial patterns. Like ESNs but using more biologically realistic spiking neurons, they excel at temporal pattern recognition and are particularly suitable for neuromorphic hardware.",
                  "es": "Las LSM son parte de computación de reservorio usando neuronas de picos dispuestas en un 'reservorio' de red recurrente que transforma entrada temporal en patrones espaciales de alta dimensión. Como ESN pero usando neuronas de picos más biológicamente realistas, sobresalen en reconocimiento de patrones temporales y son particularmente adecuadas para hardware neuromórfico.",
                  "de": "LSMs sind Teil von Reservoir Computing unter Verwendung von Spiking-Neuronen die in einem rekurrenten Netzwerk-'Reservoir' angeordnet sind das zeitliche Eingabe in hochdimensionale räumliche Muster transformiert. Wie ESNs aber mit biologisch realistischeren Spiking-Neuronen, zeichnen sie sich bei zeitlicher Mustererkennung aus und sind besonders für neuromorphe Hardware geeignet.",
                  "nl": "LSMs zijn onderdeel van reservoir computing met behulp van spiking neuronen gerangschikt in een recurrent netwerk 'reservoir' dat temporele invoer transformeert in hoogdimensionale ruimtelijke patronen. Zoals ESNs maar met biologisch realistischere spiking neuronen, blinken ze uit in temporele patroonherkenning en zijn bijzonder geschikt voor neuromorfische hardware."
        }
      },
      {
        question: {
                  "en": "What is Neural Architecture Search (NAS)?",
                  "es": "¿Qué es la Búsqueda de Arquitectura Neuronal (NAS)?",
                  "de": "Was ist Neural Architecture Search (NAS)?",
                  "nl": "Wat is Neural Architecture Search (NAS)?"
        },
        options: [
        {
                  "en": "Manual process of designing network layers",
                  "es": "Proceso manual de diseñar capas de red",
                  "de": "Manueller Prozess des Entwerfens von Netzwerkschichten",
                  "nl": "Handmatig proces van het ontwerpen van netwerklagen"
        },
        {
                  "en": "Finding the best learning rate for a network",
                  "es": "Encontrar la mejor tasa de aprendizaje para una red",
                  "de": "Finden der besten Lernrate für ein Netzwerk",
                  "nl": "Het vinden van de beste leersnelheid voor een netwerk"
        },
        {
                  "en": "A search engine for finding neural network papers",
                  "es": "Motor de búsqueda para encontrar artículos de redes neuronales",
                  "de": "Suchmaschine zum Finden von Artikeln über neuronale Netzwerke",
                  "nl": "Zoekmachine voor het vinden van neurale netwerk papers"
        },
        {
                  "en": "Automated method to design optimal neural network architectures using machine learning",
                  "es": "Método automatizado para diseñar arquitecturas de redes neuronales óptimas usando aprendizaje automático",
                  "de": "Automatisierte Methode zum Entwurf optimaler neuronaler Netzwerkarchitekturen unter Verwendung maschinellen Lernens",
                  "nl": "Geautomatiseerde methode om optimale neurale netwerkarchitecturen te ontwerpen met behulp van machine learning"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "NAS automates the design of neural network architectures, traditionally a manual expert-driven process. Using techniques like reinforcement learning, evolutionary algorithms, or gradient-based methods, NAS searches through the space of possible architectures to find optimal designs for specific tasks, sometimes discovering novel architectures that outperform human-designed ones.",
                  "es": "NAS automatiza el diseño de arquitecturas de redes neuronales, tradicionalmente un proceso manual impulsado por expertos. Usando técnicas como aprendizaje por refuerzo, algoritmos evolutivos o métodos basados en gradientes, NAS busca a través del espacio de arquitecturas posibles para encontrar diseños óptimos para tareas específicas, a veces descubriendo arquitecturas novedosas que superan a las diseñadas por humanos.",
                  "de": "NAS automatisiert den Entwurf neuronaler Netzwerkarchitekturen, traditionell ein manueller expertengetriebener Prozess. Mit Techniken wie Reinforcement Learning, evolutionären Algorithmen oder gradientenbasierten Methoden durchsucht NAS den Raum möglicher Architekturen um optimale Designs für spezifische Aufgaben zu finden, entdeckt manchmal neuartige Architekturen die von Menschen entworfene übertreffen.",
                  "nl": "NAS automatiseert het ontwerp van neurale netwerkarchitecturen, traditioneel een handmatig door experts gedreven proces. Met technieken zoals reinforcement learning, evolutionaire algoritmes of gradiënt-gebaseerde methoden zoekt NAS door de ruimte van mogelijke architecturen om optimale ontwerpen te vinden voor specifieke taken, ontdekt soms nieuwe architecturen die beter presteren dan door mensen ontworpen."
        }
      },
      {
        question: {
                  "en": "What are Temporal Convolutional Networks (TCNs)?",
                  "es": "¿Qué son las Redes Convolucionales Temporales (TCN)?",
                  "de": "Was sind Temporal Convolutional Networks (TCNs)?",
                  "nl": "Wat zijn Temporal Convolutional Networks (TCNs)?"
        },
        options: [
        {
                  "en": "RNNs with convolutional layers added",
                  "es": "RNNs con capas convolucionales agregadas",
                  "de": "RNNs mit hinzugefügten Faltungsschichten",
                  "nl": "RNNs met toegevoegde convolutielagen"
        },
        {
                  "en": "Networks that only process time-series data",
                  "es": "Redes que solo procesan datos de series temporales",
                  "de": "Netzwerke die nur Zeitreihendaten verarbeiten",
                  "nl": "Netwerken die alleen tijdreeksdata verwerken"
        },
        {
                  "en": "Convolutional networks using dilated causal convolutions for sequence modeling as alternative to RNNs",
                  "es": "Redes convolucionales usando convoluciones causales dilatadas para modelado de secuencias como alternativa a RNN",
                  "de": "Faltungsnetzwerke die dilatierte kausale Faltungen für Sequenzmodellierung als Alternative zu RNNs verwenden",
                  "nl": "Convolutionele netwerken die gedilateerde causale convoluties gebruiken voor sequentiemodellering als alternatief voor RNNs"
        },
        {
                  "en": "Convolutional networks for image sequences",
                  "es": "Redes convolucionales para secuencias de imágenes",
                  "de": "Faltungsnetzwerke für Bildsequenzen",
                  "nl": "Convolutionele netwerken voor beeldsequenties"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "TCNs apply convolutional operations across time using causal (past-only) and dilated convolutions to model sequential data. They offer advantages over RNNs including parallelizable training, stable gradients, flexible receptive field size, and no vanishing gradient issues. They're effective for tasks like speech synthesis, machine translation, and time series forecasting.",
                  "es": "Las TCN aplican operaciones convolucionales a través del tiempo usando convoluciones causales (solo pasado) y dilatadas para modelar datos secuenciales. Ofrecen ventajas sobre RNN incluyendo entrenamiento paralelizable, gradientes estables, tamaño de campo receptivo flexible y sin problemas de gradiente que se desvanece. Son efectivas para tareas como síntesis de voz, traducción automática y pronóstico de series temporales.",
                  "de": "TCNs wenden Faltungsoperationen über Zeit unter Verwendung kausaler (nur Vergangenheit) und dilatierter Faltungen an um sequentielle Daten zu modellieren. Sie bieten Vorteile gegenüber RNNs einschließlich parallelisierbarem Training, stabilen Gradienten, flexibler Rezeptivfeldgröße und keinen verschwindenden Gradientenproblemen. Sie sind effektiv für Aufgaben wie Sprachsynthese, maschinelle Übersetzung und Zeitreihenvorhersage.",
                  "nl": "TCNs passen convolutionele operaties toe over tijd met behulp van causale (alleen verleden) en gedilateerde convoluties om sequentiële data te modelleren. Ze bieden voordelen ten opzichte van RNNs inclusief paralleliseerbare training, stabiele gradiënten, flexibele receptieve veldgrootte en geen verdwijnende gradiënt problemen. Ze zijn effectief voor taken zoals spraaksynthese, machinevertaling en tijdreeksvoorspelling."
        }
      },
      {
        question: {
                  "en": "What is a Neural Turing Machine (NTM)?",
                  "es": "¿Qué es una Máquina de Turing Neural (NTM)?",
                  "de": "Was ist eine Neural Turing Machine (NTM)?",
                  "nl": "Wat is een Neural Turing Machine (NTM)?"
        },
        options: [
        {
                  "en": "A Turing machine implemented in hardware",
                  "es": "Máquina de Turing implementada en hardware",
                  "de": "In Hardware implementierte Turing-Maschine",
                  "nl": "Turing machine geïmplementeerd in hardware"
        },
        {
                  "en": "Neural network with external differentiable memory that can be read from and written to",
                  "es": "Red neuronal con memoria externa diferenciable de la que se puede leer y escribir",
                  "de": "Neuronales Netzwerk mit externer differenzierbarer Speicher von dem gelesen und auf den geschrieben werden kann",
                  "nl": "Neuraal netwerk met externe differentieerbare geheugen waarvan gelezen en waarnaar geschreven kan worden"
        },
        {
                  "en": "Neural network named after Alan Turing",
                  "es": "Red neuronal nombrada por Alan Turing",
                  "de": "Neuronales Netzwerk benannt nach Alan Turing",
                  "nl": "Neuraal netwerk vernoemd naar Alan Turing"
        },
        {
                  "en": "A standard RNN with more layers",
                  "es": "RNN estándar con más capas",
                  "de": "Standard-RNN mit mehr Schichten",
                  "nl": "Standaard RNN met meer lagen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "NTMs extend neural networks with an external memory matrix that can be addressed and modified through attention mechanisms. Like a Turing machine, they can perform algorithmic tasks through reading, writing, and manipulating memory. NTMs can learn algorithms like copying, sorting, and associative recall through gradient descent.",
                  "es": "Las NTM extienden redes neuronales con una matriz de memoria externa que puede ser direccionada y modificada a través de mecanismos de atención. Como una máquina de Turing, pueden realizar tareas algorítmicas mediante lectura, escritura y manipulación de memoria. Las NTM pueden aprender algoritmos como copiar, ordenar y recuperación asociativa mediante descenso de gradiente.",
                  "de": "NTMs erweitern neuronale Netzwerke mit einer externen Speichermatrix die über Aufmerksamkeitsmechanismen adressiert und modifiziert werden kann. Wie eine Turing-Maschine können sie algorithmische Aufgaben durch Lesen, Schreiben und Manipulieren von Speicher ausführen. NTMs können Algorithmen wie Kopieren, Sortieren und assoziatives Abrufen durch Gradientenabstieg lernen.",
                  "nl": "NTMs breiden neurale netwerken uit met een externe geheugenmatrix die via aandachtsmechanismen kan worden geadresseerd en gewijzigd. Zoals een Turing machine kunnen ze algoritmische taken uitvoeren door geheugen te lezen, schrijven en manipuleren. NTMs kunnen algoritmes leren zoals kopiëren, sorteren en associatief ophalen door gradient descent."
        }
      },
      {
        question: {
                  "en": "What are Hopfield Networks?",
                  "es": "¿Qué son las Redes de Hopfield?",
                  "de": "Was sind Hopfield-Netzwerke?",
                  "nl": "Wat zijn Hopfield Netwerken?"
        },
        options: [
        {
                  "en": "Feedforward networks for classification",
                  "es": "Redes feedforward para clasificación",
                  "de": "Feedforward-Netzwerke für Klassifikation",
                  "nl": "Feedforward netwerken voor classificatie"
        },
        {
                  "en": "Recurrent networks that function as content-addressable memory systems with stable attractors",
                  "es": "Redes recurrentes que funcionan como sistemas de memoria direccionables por contenido con atractores estables",
                  "de": "Rekurrente Netzwerke die als inhaltsadressierbare Speichersysteme mit stabilen Attraktoren funktionieren",
                  "nl": "Recurrente netwerken die functioneren als inhoud-adresseerbare geheugensystemen met stabiele attractoren"
        },
        {
                  "en": "Modern transformer architectures",
                  "es": "Arquitecturas transformer modernas",
                  "de": "Moderne Transformer-Architekturen",
                  "nl": "Moderne transformer architecturen"
        },
        {
                  "en": "Networks designed for image generation",
                  "es": "Redes diseñadas para generación de imágenes",
                  "de": "Netzwerke für Bilderzeugung entwickelt",
                  "nl": "Netwerken ontworpen voor beeldgeneratie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Hopfield Networks are fully connected recurrent networks where neurons update iteratively until reaching a stable state (attractor). They can store and retrieve patterns as stable states, functioning as associative memory - given a partial or noisy pattern, the network converges to the stored pattern. Recently modernized with continuous states and attention mechanisms.",
                  "es": "Las Redes de Hopfield son redes recurrentes completamente conectadas donde las neuronas se actualizan iterativamente hasta alcanzar un estado estable (atractor). Pueden almacenar y recuperar patrones como estados estables, funcionando como memoria asociativa - dado un patrón parcial o ruidoso, la red converge al patrón almacenado. Recientemente modernizadas con estados continuos y mecanismos de atención.",
                  "de": "Hopfield-Netzwerke sind vollständig verbundene rekurrente Netzwerke wo Neuronen iterativ aktualisieren bis ein stabiler Zustand (Attraktor) erreicht wird. Sie können Muster als stabile Zustände speichern und abrufen, funktionieren als assoziatives Gedächtnis - bei gegebenem teilweisem oder verrauschtem Muster konvergiert das Netzwerk zum gespeicherten Muster. Kürzlich mit kontinuierlichen Zuständen und Aufmerksamkeitsmechanismen modernisiert.",
                  "nl": "Hopfield Netwerken zijn volledig verbonden recurrente netwerken waarbij neuronen iteratief updaten totdat een stabiele toestand (attractor) bereikt wordt. Ze kunnen patronen opslaan en ophalen als stabiele toestanden, functioneren als associatief geheugen - gegeven een gedeeltelijk of ruis patroon, convergeert het netwerk naar het opgeslagen patroon. Recent gemoderniseerd met continue toestanden en aandachtsmechanismen."
        }
      },
      {
        question: {
                  "en": "What are Boltzmann Machines?",
                  "es": "¿Qué son las Máquinas de Boltzmann?",
                  "de": "Was sind Boltzmann-Maschinen?",
                  "nl": "Wat zijn Boltzmann Machines?"
        },
        options: [
        {
                  "en": "Networks for temperature prediction",
                  "es": "Redes para predicción de temperatura",
                  "de": "Netzwerke für Temperaturvorhersage",
                  "nl": "Netwerken voor temperatuurvoorspelling"
        },
        {
                  "en": "Networks named after a physicist, used only for physics simulations",
                  "es": "Redes nombradas por físico, usadas solo para simulaciones físicas",
                  "de": "Nach Physiker benannte Netzwerke, nur für Physiksimulationen verwendet",
                  "nl": "Netwerken vernoemd naar natuurkundige, alleen gebruikt voor natuurkundesimulaties"
        },
        {
                  "en": "Deterministic feedforward networks",
                  "es": "Redes feedforward deterministas",
                  "de": "Deterministische Feedforward-Netzwerke",
                  "nl": "Deterministische feedforward netwerken"
        },
        {
                  "en": "Stochastic recurrent networks that learn probability distribution over inputs using energy-based model",
                  "es": "Redes recurrentes estocásticas que aprenden distribución de probabilidad sobre entradas usando modelo basado en energía",
                  "de": "Stochastische rekurrente Netzwerke die Wahrscheinlichkeitsverteilung über Eingaben unter Verwendung energiebasiertem Modell lernen",
                  "nl": "Stochastische recurrente netwerken die waarschijnlijkheidsverdeling over invoer leren met behulp van energie-gebaseerd model"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Boltzmann Machines are generative stochastic neural networks based on statistical mechanics principles. They use binary stochastic units and learn through sampling to model complex probability distributions. Restricted Boltzmann Machines (RBMs) - a simplified variant with no connections within layers - became important building blocks for deep belief networks and feature learning.",
                  "es": "Las Máquinas de Boltzmann son redes neuronales estocásticas generativas basadas en principios de mecánica estadística. Usan unidades estocásticas binarias y aprenden mediante muestreo para modelar distribuciones de probabilidad complejas. Las Máquinas de Boltzmann Restringidas (RBM) - variante simplificada sin conexiones dentro de capas - se convirtieron en bloques importantes para redes de creencia profundas y aprendizaje de características.",
                  "de": "Boltzmann-Maschinen sind generative stochastische neuronale Netzwerke basierend auf Prinzipien der statistischen Mechanik. Sie verwenden binäre stochastische Einheiten und lernen durch Sampling um komplexe Wahrscheinlichkeitsverteilungen zu modellieren. Restricted Boltzmann Machines (RBMs) - vereinfachte Variante ohne Verbindungen innerhalb von Schichten - wurden wichtige Bausteine für Deep Belief Networks und Feature Learning.",
                  "nl": "Boltzmann Machines zijn generatieve stochastische neurale netwerken gebaseerd op statistische mechanica principes. Ze gebruiken binaire stochastische eenheden en leren door sampling om complexe waarschijnlijkheidsverdelingen te modelleren. Restricted Boltzmann Machines (RBMs) - vereenvoudigde variant zonder verbindingen binnen lagen - werden belangrijke bouwstenen voor deep belief networks en feature learning."
        }
      },
      {
        question: {
                  "en": "What is a Conditional GAN (cGAN)?",
                  "es": "¿Qué es una GAN Condicional (cGAN)?",
                  "de": "Was ist ein Conditional GAN (cGAN)?",
                  "nl": "Wat is een Conditional GAN (cGAN)?"
        },
        options: [
        {
                  "en": "GAN that only works under specific conditions",
                  "es": "GAN que solo funciona bajo condiciones específicas",
                  "de": "GAN das nur unter spezifischen Bedingungen funktioniert",
                  "nl": "GAN dat alleen onder specifieke condities werkt"
        },
        {
                  "en": "GAN variant where both generator and discriminator are conditioned on additional information like class labels",
                  "es": "Variante GAN donde generador y discriminador están condicionados a información adicional como etiquetas de clase",
                  "de": "GAN-Variante wo Generator und Diskriminator auf zusätzliche Information wie Klassenbezeichnungen konditioniert sind",
                  "nl": "GAN variant waarbij zowel generator als discriminator geconditioneerd zijn op aanvullende informatie zoals klasselabels"
        },
        {
                  "en": "Standard GAN with better convergence",
                  "es": "GAN estándar con mejor convergencia",
                  "de": "Standard-GAN mit besserer Konvergenz",
                  "nl": "Standaard GAN met betere convergentie"
        },
        {
                  "en": "GAN with conditional probability layers",
                  "es": "GAN con capas de probabilidad condicional",
                  "de": "GAN mit bedingten Wahrscheinlichkeitsschichten",
                  "nl": "GAN met conditionele waarschijnlijkheidslagen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Conditional GANs extend standard GANs by conditioning generation on auxiliary information like class labels, text descriptions, or other images. This allows controlled generation - for example, generating specific digits in MNIST or generating images from text descriptions. Both generator and discriminator receive the conditioning information, enabling directed synthesis.",
                  "es": "Las GAN Condicionales extienden GAN estándar condicionando la generación a información auxiliar como etiquetas de clase, descripciones de texto u otras imágenes. Esto permite generación controlada - por ejemplo, generar dígitos específicos en MNIST o generar imágenes de descripciones de texto. Tanto generador como discriminador reciben información de condicionamiento, permitiendo síntesis dirigida.",
                  "de": "Conditional GANs erweitern Standard-GANs durch Konditionierung der Generierung auf Hilfsinformation wie Klassenbezeichnungen, Textbeschreibungen oder andere Bilder. Dies ermöglicht kontrollierte Generierung - zum Beispiel Generierung spezifischer Ziffern in MNIST oder Generierung von Bildern aus Textbeschreibungen. Generator und Diskriminator erhalten beide Konditionierungsinformation, ermöglichen gerichtete Synthese.",
                  "nl": "Conditional GANs breiden standaard GANs uit door generatie te conditioneren op hulpinformatie zoals klasselabels, tekstbeschrijvingen of andere afbeeldingen. Dit maakt gecontroleerde generatie mogelijk - bijvoorbeeld specifieke cijfers genereren in MNIST of afbeeldingen genereren uit tekstbeschrijvingen. Zowel generator als discriminator ontvangen de conditioneringsinformatie, waardoor gerichte synthese mogelijk wordt."
        }
      },
      {
        question: {
                  "en": "What is a Differentiable Neural Computer (DNC)?",
                  "es": "¿Qué es un Computador Neural Diferenciable (DNC)?",
                  "de": "Was ist ein Differentiable Neural Computer (DNC)?",
                  "nl": "Wat is een Differentiable Neural Computer (DNC)?"
        },
        options: [
        {
                  "en": "Computer hardware for running neural networks",
                  "es": "Hardware de computadora para ejecutar redes neuronales",
                  "de": "Computer-Hardware zum Ausführen neuronaler Netzwerke",
                  "nl": "Computer hardware voor het uitvoeren van neurale netwerken"
        },
        {
                  "en": "Advanced NTM with more sophisticated memory addressing including temporal linking and allocation",
                  "es": "NTM avanzada con direccionamiento de memoria más sofisticado incluyendo vinculación temporal y asignación",
                  "de": "Fortgeschrittene NTM mit ausgefeilterem Speicheradressierung einschließlich zeitlicher Verknüpfung und Zuweisung",
                  "nl": "Geavanceerde NTM met meer geavanceerde geheugenadressering inclusief temporele koppeling en toewijzing"
        },
        {
                  "en": "Neural network that can be differentiated from other networks",
                  "es": "Red neuronal que puede diferenciarse de otras redes",
                  "de": "Neuronales Netzwerk das von anderen Netzwerken unterschieden werden kann",
                  "nl": "Neuraal netwerk dat onderscheiden kan worden van andere netwerken"
        },
        {
                  "en": "Standard neural network with differential equations",
                  "es": "Red neuronal estándar con ecuaciones diferenciales",
                  "de": "Standard neuronales Netzwerk mit Differentialgleichungen",
                  "nl": "Standaard neuraal netwerk met differentiaalvergelijkingen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "DNCs are an evolution of Neural Turing Machines with enhanced memory capabilities. They add temporal link matrices to track write order, dynamic memory allocation, and more flexible addressing mechanisms. This allows them to solve complex algorithmic tasks like graph traversal, pathfinding, and reasoning about structured data more effectively than standard RNNs.",
                  "es": "Los DNC son una evolución de Máquinas de Turing Neural con capacidades de memoria mejoradas. Añaden matrices de enlace temporal para rastrear orden de escritura, asignación dinámica de memoria y mecanismos de direccionamiento más flexibles. Esto les permite resolver tareas algorítmicas complejas como recorrido de grafos, búsqueda de caminos y razonamiento sobre datos estructurados más efectivamente que RNN estándar.",
                  "de": "DNCs sind eine Evolution von Neural Turing Machines mit verbesserten Speicherfähigkeiten. Sie fügen zeitliche Verknüpfungsmatrizen hinzu um Schreibreihenfolge zu verfolgen, dynamische Speicherzuweisung und flexiblere Adressierungsmechanismen. Dies ermöglicht ihnen komplexe algorithmische Aufgaben wie Graph-Traversierung, Pfadfindung und Schlussfolgern über strukturierte Daten effektiver als Standard-RNNs zu lösen.",
                  "nl": "DNCs zijn een evolutie van Neural Turing Machines met verbeterde geheugencapaciteiten. Ze voegen temporele koppelingsmatrices toe om schrijfvolgorde te volgen, dynamische geheugentoewijzing en meer flexibele adresseringsmechanismen. Dit stelt ze in staat complexe algoritmische taken op te lossen zoals graftraversering, pad vinden en redeneren over gestructureerde data effectiever dan standaard RNNs."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  }
})();