// Neural Networks Quiz - Level 4: Different Types of Neural Networks
(function() {
  const level4 = {
    name: {
      en: "Different Types of Neural Networks",
      es: "Diferentes Tipos de Redes Neuronales",
      de: "Verschiedene Arten von Neuronalen Netzwerken",
      nl: "Verschillende Soorten Neurale Netwerken"
    },
    questions: [
      {
        question: {
          en: "What is a convolutional neural network (CNN) primarily used for?",
          es: "¿Para qué se usa principalmente una red neuronal convolucional (CNN)?",
          de: "Wofür wird ein Convolutional Neural Network (CNN) hauptsächlich verwendet?",
          nl: "Waarvoor wordt een convolutioneel neuraal netwerk (CNN) hoofdzakelijk gebruikt?"
        },
        options: [
          { en: "Image processing and computer vision tasks", es: "Procesamiento de imágenes y tareas de visión por computadora", de: "Bildverarbeitung und Computer Vision Aufgaben", nl: "Beeldverwerking en computer vision taken" },
          { en: "Natural language processing only", es: "Solo procesamiento de lenguaje natural", de: "Nur natürliche Sprachverarbeitung", nl: "Alleen natuurlijke taalverwerking" },
          { en: "Time series prediction exclusively", es: "Exclusivamente predicción de series temporales", de: "Ausschließlich Zeitreihenvorhersage", nl: "Uitsluitend tijdreeksvoorspelling" },
          { en: "Database management", es: "Gestión de bases de datos", de: "Datenbankmanagement", nl: "Databasebeheer" }
        ],
        correct: 0,
        explanation: {
          en: "CNNs are specifically designed for processing grid-like data such as images. Their convolutional layers can detect local features like edges, textures, and patterns, making them highly effective for computer vision tasks including image classification, object detection, and image segmentation.",
          es: "Las CNN están específicamente diseñadas para procesar datos tipo cuadrícula como imágenes. Sus capas convolucionales pueden detectar características locales como bordes, texturas y patrones, haciéndolas altamente efectivas para tareas de visión por computadora incluyendo clasificación de imágenes, detección de objetos y segmentación de imágenes.",
          de: "CNNs sind speziell für die Verarbeitung gitterartiger Daten wie Bilder entwickelt. Ihre Faltungsschichten können lokale Merkmale wie Kanten, Texturen und Muster erkennen, was sie hocheffektiv für Computer Vision Aufgaben wie Bildklassifikation, Objekterkennung und Bildsegmentierung macht.",
          nl: "CNNs zijn specifiek ontworpen voor het verwerken van roosterachtige data zoals afbeeldingen. Hun convolutielagen kunnen lokale kenmerken zoals randen, texturen en patronen detecteren, waardoor ze zeer effectief zijn voor computer vision taken inclusief beeldclassificatie, objectdetectie en beeldsegmentatie."
        }
      },
      {
        question: {
          en: "What is a recurrent neural network (RNN) best suited for?",
          es: "¿Para qué es más adecuada una red neuronal recurrente (RNN)?",
          de: "Wofür ist ein Recurrent Neural Network (RNN) am besten geeignet?",
          nl: "Waarvoor is een recurrent neuraal netwerk (RNN) het meest geschikt?"
        },
        options: [
          { en: "Sequential data and time series analysis", es: "Datos secuenciales y análisis de series temporales", de: "Sequenzielle Daten und Zeitreihenanalyse", nl: "Sequentiële data en tijdreeksanalyse" },
          { en: "Static image classification", es: "Clasificación de imágenes estáticas", de: "Statische Bildklassifikation", nl: "Statische beeldclassificatie" },
          { en: "Simple linear regression", es: "Regresión lineal simple", de: "Einfache lineare Regression", nl: "Eenvoudige lineaire regressie" },
          { en: "Database optimization", es: "Optimización de bases de datos", de: "Datenbankoptimierung", nl: "Database-optimalisatie" }
        ],
        correct: 0,
        explanation: {
          en: "RNNs are designed to handle sequential data where the order matters. They have memory that allows them to remember previous inputs, making them ideal for tasks like language modeling, machine translation, speech recognition, and time series prediction.",
          es: "Las RNN están diseñadas para manejar datos secuenciales donde el orden importa. Tienen memoria que les permite recordar entradas anteriores, haciéndolas ideales para tareas como modelado de lenguaje, traducción automática, reconocimiento de voz y predicción de series temporales.",
          de: "RNNs sind darauf ausgelegt sequenzielle Daten zu verarbeiten wo die Reihenfolge wichtig ist. Sie haben Gedächtnis das ihnen erlaubt sich an vorherige Eingaben zu erinnern, was sie ideal für Aufgaben wie Sprachmodellierung, maschinelle Übersetzung, Spracherkennung und Zeitreihenvorhersage macht.",
          nl: "RNNs zijn ontworpen om sequentiële data te verwerken waarbij de volgorde belangrijk is. Ze hebben geheugen dat hen toestaat vorige invoer te onthouden, waardoor ze ideaal zijn voor taken zoals taalmodellering, machinevertaling, spraakherkenning en tijdreeksvoorspelling."
        }
      },
      {
        question: {
          en: "What is an autoencoder neural network?",
          es: "¿Qué es una red neuronal autoencoder?",
          de: "Was ist ein Autoencoder neuronales Netzwerk?",
          nl: "Wat is een autoencoder neuraal netwerk?"
        },
        options: [
          { en: "A network that learns to compress and reconstruct input data", es: "Una red que aprende a comprimir y reconstruir datos de entrada", de: "Ein Netzwerk das lernt Eingabedaten zu komprimieren und zu rekonstruieren", nl: "Een netwerk dat leert invoerdata te comprimeren en te reconstrueren" },
          { en: "A network that automatically generates code", es: "Una red que genera código automáticamente", de: "Ein Netzwerk das automatisch Code generiert", nl: "Een netwerk dat automatisch code genereert" },
          { en: "A network for automatic speech recognition", es: "Una red para reconocimiento automático de voz", de: "Ein Netzwerk für automatische Spracherkennung", nl: "Een netwerk voor automatische spraakherkenning" },
          { en: "A network that encodes passwords", es: "Una red que codifica contraseñas", de: "Ein Netzwerk das Passwörter kodiert", nl: "Een netwerk dat wachtwoorden codeert" }
        ],
        correct: 0,
        explanation: {
          en: "An autoencoder consists of an encoder that compresses input data into a lower-dimensional representation and a decoder that reconstructs the original data. They're used for dimensionality reduction, data denoising, and learning compact representations of data.",
          es: "Un autoencoder consiste en un codificador que comprime datos de entrada en una representación de menor dimensión y un decodificador que reconstruye los datos originales. Se usan para reducción de dimensionalidad, denoising de datos y aprendizaje de representaciones compactas de datos.",
          de: "Ein Autoencoder besteht aus einem Encoder der Eingabedaten in eine niedrigerdimensionale Darstellung komprimiert und einem Decoder der die ursprünglichen Daten rekonstruiert. Sie werden für Dimensionalitätsreduktion, Datenrauschentfernung und Lernen kompakter Datenrepräsentationen verwendet.",
          nl: "Een autoencoder bestaat uit een encoder die invoerdata comprimeert tot een lagerdimensionale representatie en een decoder die de originele data reconstrueert. Ze worden gebruikt voor dimensionaliteitsreductie, data denoising en het leren van compacte datarepresentaties."
        }
      },
      {
        question: {
          en: "What is a Generative Adversarial Network (GAN)?",
          es: "¿Qué es una Red Generativa Adversarial (GAN)?",
          de: "Was ist ein Generative Adversarial Network (GAN)?",
          nl: "Wat is een Generative Adversarial Network (GAN)?"
        },
        options: [
          { en: "Two neural networks competing against each other - a generator and discriminator", es: "Dos redes neuronales compitiendo entre sí - un generador y un discriminador", de: "Zwei neuronale Netzwerke die gegeneinander konkurrieren - ein Generator und Diskriminator", nl: "Twee neurale netwerken die tegen elkaar concurreren - een generator en discriminator" },
          { en: "A network for general artificial intelligence", es: "Una red para inteligencia artificial general", de: "Ein Netzwerk für allgemeine künstliche Intelligenz", nl: "Een netwerk voor algemene kunstmatige intelligentie" },
          { en: "A network that generates random data", es: "Una red que genera datos aleatorios", de: "Ein Netzwerk das zufällige Daten generiert", nl: "Een netwerk dat willekeurige data genereert" },
          { en: "A collaborative network architecture", es: "Una arquitectura de red colaborativa", de: "Eine kollaborative Netzwerkarchitektur", nl: "Een collaboratieve netwerkarchitectuur" }
        ],
        correct: 0,
        explanation: {
          en: "GANs consist of two networks in competition: the generator creates fake data trying to fool the discriminator, while the discriminator tries to distinguish real from fake data. This adversarial training process leads to generators that can create highly realistic synthetic data.",
          es: "Las GAN consisten en dos redes en competencia: el generador crea datos falsos tratando de engañar al discriminador, mientras que el discriminador trata de distinguir datos reales de falsos. Este proceso de entrenamiento adversarial lleva a generadores que pueden crear datos sintéticos altamente realistas.",
          de: "GANs bestehen aus zwei konkurrierenden Netzwerken: der Generator erstellt falsche Daten um den Diskriminator zu täuschen, während der Diskriminator versucht echte von falschen Daten zu unterscheiden. Dieser adversariale Trainingsprozess führt zu Generatoren die hochrealistische synthetische Daten erstellen können.",
          nl: "GANs bestaan uit twee concurrerende netwerken: de generator creëert nepdata om de discriminator te misleiden, terwijl de discriminator probeert echte van nepdata te onderscheiden. Dit adversariale trainingsproces leidt tot generators die zeer realistische synthetische data kunnen creëren."
        }
      },
      {
        question: {
          en: "What is an LSTM (Long Short-Term Memory) network?",
          es: "¿Qué es una red LSTM (Long Short-Term Memory)?",
          de: "Was ist ein LSTM (Long Short-Term Memory) Netzwerk?",
          nl: "Wat is een LSTM (Long Short-Term Memory) netwerk?"
        },
        options: [
          { en: "A type of RNN designed to remember information for long periods and solve the vanishing gradient problem", es: "Un tipo de RNN diseñado para recordar información durante largos períodos y resolver el problema del gradiente que se desvanece", de: "Eine Art von RNN die darauf ausgelegt ist Informationen für lange Zeiträume zu speichern und das Problem des verschwindenden Gradienten zu lösen", nl: "Een type RNN ontworpen om informatie voor lange periodes te onthouden en het probleem van verdwijnende gradiënten op te lossen" },
          { en: "A network with the largest possible memory", es: "Una red con la mayor memoria posible", de: "Ein Netzwerk mit dem größtmöglichen Speicher", nl: "Een netwerk met het grootst mogelijke geheugen" },
          { en: "A network that works only with short sequences", es: "Una red que funciona solo con secuencias cortas", de: "Ein Netzwerk das nur mit kurzen Sequenzen arbeitet", nl: "Een netwerk dat alleen werkt met korte sequenties" },
          { en: "A type of convolutional network", es: "Un tipo de red convolucional", de: "Eine Art von Faltungsnetzwerk", nl: "Een type convolutioneel netwerk" }
        ],
        correct: 0,
        explanation: {
          en: "LSTMs are a special kind of RNN with memory cells that can selectively remember or forget information using gates (input, forget, output). This architecture allows them to capture long-term dependencies in sequences much better than traditional RNNs.",
          es: "Las LSTM son un tipo especial de RNN con celdas de memoria que pueden recordar u olvidar información selectivamente usando puertas (entrada, olvido, salida). Esta arquitectura les permite capturar dependencias a largo plazo en secuencias mucho mejor que las RNN tradicionales.",
          de: "LSTMs sind eine spezielle Art von RNN mit Speicherzellen die selektiv Informationen erinnern oder vergessen können durch Verwendung von Gates (Eingabe, Vergessen, Ausgabe). Diese Architektur ermöglicht es ihnen langfristige Abhängigkeiten in Sequenzen viel besser zu erfassen als traditionelle RNNs.",
          nl: "LSTMs zijn een speciaal type RNN met geheugencellen die selectief informatie kunnen onthouden of vergeten met behulp van poorten (invoer, vergeet, uitvoer). Deze architectuur stelt hen in staat om langetermijnafhankelijkheden in sequenties veel beter vast te leggen dan traditionele RNNs."
        }
      },
      {
        question: {
          en: "What is a GRU (Gated Recurrent Unit)?",
          es: "¿Qué es una GRU (Gated Recurrent Unit)?",
          de: "Was ist eine GRU (Gated Recurrent Unit)?",
          nl: "Wat is een GRU (Gated Recurrent Unit)?"
        },
        options: [
          { en: "A simplified version of LSTM with fewer gates but similar performance", es: "Una versión simplificada de LSTM con menos puertas pero rendimiento similar", de: "Eine vereinfachte Version von LSTM mit weniger Gates aber ähnlicher Leistung", nl: "Een vereenvoudigde versie van LSTM met minder poorten maar vergelijkbare prestaties" },
          { en: "A more complex version of LSTM", es: "Una versión más compleja de LSTM", de: "Eine komplexere Version von LSTM", nl: "Een complexere versie van LSTM" },
          { en: "A type of convolutional layer", es: "Un tipo de capa convolucional", de: "Eine Art von Faltungsschicht", nl: "Een type convolutielaag" },
          { en: "A graphics processing unit", es: "Una unidad de procesamiento gráfico", de: "Eine Grafikverarbeitungseinheit", nl: "Een grafische verwerkingseenheid" }
        ],
        correct: 0,
        explanation: {
          en: "GRUs are a variation of LSTM that combine the forget and input gates into a single update gate, making them simpler and faster to train while maintaining similar performance for many tasks. They use reset and update gates to control information flow.",
          es: "Las GRU son una variación de LSTM que combinan las puertas de olvido y entrada en una sola puerta de actualización, haciéndolas más simples y rápidas de entrenar manteniendo rendimiento similar para muchas tareas. Usan puertas de reinicio y actualización para controlar el flujo de información.",
          de: "GRUs sind eine Variation von LSTM die die Vergessen- und Eingabe-Gates in ein einziges Update-Gate kombinieren, was sie einfacher und schneller zu trainieren macht während sie ähnliche Leistung für viele Aufgaben beibehalten. Sie verwenden Reset- und Update-Gates um den Informationsfluss zu kontrollieren.",
          nl: "GRUs zijn een variatie van LSTM die de vergeet- en invoerpoorten combineren tot een enkele updatepoort, waardoor ze eenvoudiger en sneller te trainen zijn terwijl ze vergelijkbare prestaties behouden voor veel taken. Ze gebruiken reset- en updatepoorten om informatiestromen te controleren."
        }
      },
      {
        question: {
          en: "What is a Transformer neural network?",
          es: "¿Qué es una red neuronal Transformer?",
          de: "Was ist ein Transformer neuronales Netzwerk?",
          nl: "Wat is een Transformer neuraal netwerk?"
        },
        options: [
          { en: "A model based entirely on attention mechanisms without recurrence or convolution", es: "Un modelo basado completamente en mecanismos de atención sin recurrencia o convolución", de: "Ein Modell das vollständig auf Aufmerksamkeitsmechanismen basiert ohne Rekurrenz oder Faltung", nl: "Een model volledig gebaseerd op aandachtmechanismen zonder recurrentie of convolutie" },
          { en: "A network that transforms images into text", es: "Una red que transforma imágenes en texto", de: "Ein Netzwerk das Bilder in Text umwandelt", nl: "Een netwerk dat afbeeldingen omzet naar tekst" },
          { en: "A type of electrical transformer", es: "Un tipo de transformador eléctrico", de: "Eine Art elektrischer Transformator", nl: "Een type elektrische transformator" },
          { en: "A network that only works with robotics", es: "Una red que solo funciona con robótica", de: "Ein Netzwerk das nur mit Robotik funktioniert", nl: "Een netwerk dat alleen werkt met robotica" }
        ],
        correct: 0,
        explanation: {
          en: "Transformers revolutionized NLP by using self-attention to process sequences in parallel rather than sequentially. They can capture long-range dependencies more effectively than RNNs and have become the foundation for models like BERT, GPT, and ChatGPT.",
          es: "Los Transformers revolucionaron el NLP usando auto-atención para procesar secuencias en paralelo en lugar de secuencialmente. Pueden capturar dependencias de largo alcance más efectivamente que las RNN y se han convertido en la base para modelos como BERT, GPT y ChatGPT.",
          de: "Transformers revolutionierten NLP durch Verwendung von Selbstaufmerksamkeit um Sequenzen parallel statt sequenziell zu verarbeiten. Sie können weitreichende Abhängigkeiten effektiver erfassen als RNNs und sind die Grundlage für Modelle wie BERT, GPT und ChatGPT geworden.",
          nl: "Transformers revolutioneerden NLP door self-attention te gebruiken om sequenties parallel te verwerken in plaats van sequentieel. Ze kunnen langetermijnafhankelijkheden effectiever vastleggen dan RNNs en zijn de basis geworden voor modellen zoals BERT, GPT en ChatGPT."
        }
      },
      {
        question: {
          en: "What is a Radial Basis Function (RBF) network?",
          es: "¿Qué es una red de Función de Base Radial (RBF)?",
          de: "Was ist ein Radial Basis Function (RBF) Netzwerk?",
          nl: "Wat is een Radial Basis Function (RBF) netwerk?"
        },
        options: [
          { en: "A network that uses distance-based activation functions centered around data points", es: "Una red que usa funciones de activación basadas en distancia centradas alrededor de puntos de datos", de: "Ein Netzwerk das distanzbasierte Aktivierungsfunktionen verwendet die um Datenpunkte zentriert sind", nl: "Een netwerk dat afstandsgebaseerde activatiefuncties gebruikt gecentreerd rond datapunten" },
          { en: "A network for radio frequency processing", es: "Una red para procesamiento de radiofrecuencia", de: "Ein Netzwerk für Radiofrequenzverarbeitung", nl: "Een netwerk voor radiofrequentieverwerking" },
          { en: "A linear regression model", es: "Un modelo de regresión lineal", de: "Ein lineares Regressionsmodell", nl: "Een lineair regressiemodel" },
          { en: "A type of decision tree", es: "Un tipo de árbol de decisión", de: "Eine Art Entscheidungsbaum", nl: "Een type beslissingsboom" }
        ],
        correct: 0,
        explanation: {
          en: "RBF networks use radial basis functions (like Gaussian functions) as activation functions. These functions respond to the distance from a center point, making them effective for function approximation and pattern recognition tasks where local similarity matters.",
          es: "Las redes RBF usan funciones de base radial (como funciones Gaussianas) como funciones de activación. Estas funciones responden a la distancia desde un punto central, haciéndolas efectivas para aproximación de funciones y tareas de reconocimiento de patrones donde la similitud local importa.",
          de: "RBF-Netzwerke verwenden radiale Basisfunktionen (wie Gaußsche Funktionen) als Aktivierungsfunktionen. Diese Funktionen reagieren auf die Entfernung von einem Mittelpunkt, was sie effektiv für Funktionsapproximation und Mustererkennungsaufgaben macht wo lokale Ähnlichkeit wichtig ist.",
          nl: "RBF-netwerken gebruiken radiale basisfuncties (zoals Gaussiaanse functies) als activatiefuncties. Deze functies reageren op de afstand tot een middelpunt, waardoor ze effectief zijn voor functieapproximatie en patroonherkenningstaken waarbij lokale gelijkenis belangrijk is."
        }
      },
      {
        question: {
          en: "What is a Variational Autoencoder (VAE)?",
          es: "¿Qué es un Autoencoder Variacional (VAE)?",
          de: "Was ist ein Variational Autoencoder (VAE)?",
          nl: "Wat is een Variational Autoencoder (VAE)?"
        },
        options: [
          { en: "An autoencoder that learns a probabilistic latent space for generating new data", es: "Un autoencoder que aprende un espacio latente probabilístico para generar nuevos datos", de: "Ein Autoencoder der einen probabilistischen latenten Raum zum Generieren neuer Daten lernt", nl: "Een autoencoder die een probabilistische latente ruimte leert voor het genereren van nieuwe data" },
          { en: "An autoencoder with variable input size", es: "Un autoencoder con tamaño de entrada variable", de: "Ein Autoencoder mit variabler Eingabegröße", nl: "Een autoencoder met variabele invoergrootte" },
          { en: "An autoencoder that varies its architecture", es: "Un autoencoder que varía su arquitectura", de: "Ein Autoencoder der seine Architektur variiert", nl: "Een autoencoder die zijn architectuur varieert" },
          { en: "An autoencoder for text only", es: "Un autoencoder solo para texto", de: "Ein Autoencoder nur für Text", nl: "Een autoencoder alleen voor tekst" }
        ],
        correct: 0,
        explanation: {
          en: "VAEs combine autoencoders with variational inference to learn a continuous, probabilistic latent space. Unlike regular autoencoders, they can generate new data by sampling from the learned latent distribution, making them useful for data generation and representation learning.",
          es: "Los VAE combinan autoencoders con inferencia variacional para aprender un espacio latente continuo y probabilístico. A diferencia de los autoencoders regulares, pueden generar nuevos datos muestreando de la distribución latente aprendida, haciéndolos útiles para generación de datos y aprendizaje de representaciones.",
          de: "VAEs kombinieren Autoencoder mit variationaler Inferenz um einen kontinuierlichen, probabilistischen latenten Raum zu lernen. Im Gegensatz zu regulären Autoencodern können sie neue Daten generieren durch Sampling aus der gelernten latenten Verteilung, was sie nützlich für Datengenerierung und Repräsentationslernen macht.",
          nl: "VAEs combineren autoencoders met variationele inferentie om een continue, probabilistische latente ruimte te leren. In tegenstelling tot gewone autoencoders kunnen ze nieuwe data genereren door te samplen uit de geleerde latente verdeling, waardoor ze nuttig zijn voor datageneratie en representatieleren."
        }
      },
      {
        question: {
          en: "What is a Hopfield network?",
          es: "¿Qué es una red de Hopfield?",
          de: "Was ist ein Hopfield-Netzwerk?",
          nl: "Wat is een Hopfield-netwerk?"
        },
        options: [
          { en: "A recurrent network that serves as an associative memory model", es: "Una red recurrente que sirve como modelo de memoria asociativa", de: "Ein rekurrentes Netzwerk das als assoziatives Gedächtnismodell dient", nl: "Een recurrent netwerk dat dient als associatief geheugenmodel" },
          { en: "A feedforward network for classification", es: "Una red feedforward para clasificación", de: "Ein Feedforward-Netzwerk für Klassifikation", nl: "Een feedforward netwerk voor classificatie" },
          { en: "A network named after a football field", es: "Una red nombrada por un campo de fútbol", de: "Ein Netzwerk benannt nach einem Fußballfeld", nl: "Een netwerk vernoemd naar een voetbalveld" },
          { en: "A type of convolutional network", es: "Un tipo de red convolucional", de: "Eine Art von Faltungsnetzwerk", nl: "Een type convolutioneel netwerk" }
        ],
        correct: 0,
        explanation: {
          en: "Hopfield networks are recurrent neural networks that can store and retrieve patterns through associative memory. They use symmetric weights and energy minimization to converge to stored patterns, making them useful for pattern completion and error correction tasks.",
          es: "Las redes de Hopfield son redes neuronales recurrentes que pueden almacenar y recuperar patrones a través de memoria asociativa. Usan pesos simétricos y minimización de energía para converger a patrones almacenados, haciéndolas útiles para tareas de completado de patrones y corrección de errores.",
          de: "Hopfield-Netzwerke sind rekurrente neuronale Netzwerke die Muster durch assoziatives Gedächtnis speichern und abrufen können. Sie verwenden symmetrische Gewichte und Energieminimierung um zu gespeicherten Mustern zu konvergieren, was sie nützlich für Mustervervollständigung und Fehlerkorrektur macht.",
          nl: "Hopfield-netwerken zijn recurrente neurale netwerken die patronen kunnen opslaan en ophalen via associatief geheugen. Ze gebruiken symmetrische gewichten en energieminimalisatie om te convergeren naar opgeslagen patronen, waardoor ze nuttig zijn voor patrooncompletering en foutcorrectie."
        }
      },
      {
        question: {
          en: "What is a Self-Organizing Map (SOM)?",
          es: "¿Qué es un Mapa Auto-Organizativo (SOM)?",
          de: "Was ist eine Self-Organizing Map (SOM)?",
          nl: "Wat is een Self-Organizing Map (SOM)?"
        },
        options: [
          { en: "An unsupervised learning algorithm that creates a low-dimensional representation of high-dimensional data", es: "Un algoritmo de aprendizaje no supervisado que crea una representación de baja dimensión de datos de alta dimensión", de: "Ein unüberwachter Lernalgorithmus der eine niedrigdimensionale Darstellung hochdimensionaler Daten erstellt", nl: "Een unsupervised leeralgoritme dat een lage-dimensionale representatie van hoge-dimensionale data creëert" },
          { en: "A map that organizes itself physically", es: "Un mapa que se organiza físicamente", de: "Eine Karte die sich physisch organisiert", nl: "Een kaart die zichzelf fysiek organiseert" },
          { en: "A supervised learning algorithm", es: "Un algoritmo de aprendizaje supervisado", de: "Ein überwachter Lernalgorithmus", nl: "Een supervised leeralgoritme" },
          { en: "A type of decision tree", es: "Un tipo de árbol de decisión", de: "Eine Art Entscheidungsbaum", nl: "Een type beslissingsboom" }
        ],
        correct: 0,
        explanation: {
          en: "SOMs use competitive learning to map high-dimensional input data onto a lower-dimensional grid while preserving topological relationships. Neurons compete to respond to inputs, and neighboring neurons are updated together, creating organized feature maps useful for visualization and clustering.",
          es: "Los SOM usan aprendizaje competitivo para mapear datos de entrada de alta dimensión en una cuadrícula de menor dimensión preservando relaciones topológicas. Las neuronas compiten para responder a entradas, y las neuronas vecinas se actualizan juntas, creando mapas de características organizados útiles para visualización y agrupamiento.",
          de: "SOMs verwenden kompetitives Lernen um hochdimensionale Eingabedaten auf ein niedrigerdimensionales Gitter abzubilden während topologische Beziehungen erhalten bleiben. Neuronen konkurrieren um auf Eingaben zu reagieren, und benachbarte Neuronen werden zusammen aktualisiert, wodurch organisierte Merkmalskarten entstehen die für Visualisierung und Clustering nützlich sind.",
          nl: "SOMs gebruiken competitief leren om hoge-dimensionale invoerdata toe te wijzen aan een lager-dimensionaal raster terwijl topologische relaties behouden blijven. Neuronen concurreren om te reageren op invoer, en naburige neuronen worden samen bijgewerkt, waardoor georganiseerde kenmerkkaarten ontstaan die nuttig zijn voor visualisatie en clustering."
        }
      },
      {
        question: {
          en: "What is a Boltzmann machine?",
          es: "¿Qué es una máquina de Boltzmann?",
          de: "Was ist eine Boltzmann-Maschine?",
          nl: "Wat is een Boltzmann-machine?"
        },
        options: [
          { en: "A stochastic neural network that can learn probability distributions over binary data", es: "Una red neuronal estocástica que puede aprender distribuciones de probabilidad sobre datos binarios", de: "Ein stochastisches neuronales Netzwerk das Wahrscheinlichkeitsverteilungen über binäre Daten lernen kann", nl: "Een stochastisch neuraal netwerk dat waarschijnlijkheidsverdelingen over binaire data kan leren" },
          { en: "A deterministic feedforward network", es: "Una red feedforward determinística", de: "Ein deterministisches Feedforward-Netzwerk", nl: "Een deterministisch feedforward netwerk" },
          { en: "A machine for thermal physics", es: "Una máquina para física térmica", de: "Eine Maschine für Thermophysik", nl: "Een machine voor thermische fysica" },
          { en: "A type of support vector machine", es: "Un tipo de máquina de vector de soporte", de: "Eine Art Support Vector Machine", nl: "Een type support vector machine" }
        ],
        correct: 0,
        explanation: {
          en: "Boltzmann machines are neural networks with stochastic (random) binary units that follow statistical mechanics principles. They can learn complex probability distributions and are used for unsupervised learning, but training them is computationally intensive.",
          es: "Las máquinas de Boltzmann son redes neuronales con unidades binarias estocásticas (aleatorias) que siguen principios de mecánica estadística. Pueden aprender distribuciones de probabilidad complejas y se usan para aprendizaje no supervisado, pero entrenarlas es computacionalmente intensivo.",
          de: "Boltzmann-Maschinen sind neuronale Netzwerke mit stochastischen (zufälligen) binären Einheiten die statistischen Mechanik-Prinzipien folgen. Sie können komplexe Wahrscheinlichkeitsverteilungen lernen und werden für unüberwachtes Lernen verwendet, aber ihr Training ist rechnerisch intensiv.",
          nl: "Boltzmann-machines zijn neurale netwerken met stochastische (willekeurige) binaire eenheden die statistische mechanica-principes volgen. Ze kunnen complexe waarschijnlijkheidsverdelingen leren en worden gebruikt voor unsupervised learning, maar hun training is computationeel intensief."
        }
      },
      {
        question: {
          en: "What is a Restricted Boltzmann Machine (RBM)?",
          es: "¿Qué es una Máquina de Boltzmann Restringida (RBM)?",
          de: "Was ist eine Restricted Boltzmann Machine (RBM)?",
          nl: "Wat is een Restricted Boltzmann Machine (RBM)?"
        },
        options: [
          { en: "A simplified Boltzmann machine with no connections within layers, only between visible and hidden layers", es: "Una máquina de Boltzmann simplificada sin conexiones dentro de capas, solo entre capas visibles y ocultas", de: "Eine vereinfachte Boltzmann-Maschine ohne Verbindungen innerhalb von Schichten, nur zwischen sichtbaren und versteckten Schichten", nl: "Een vereenvoudigde Boltzmann-machine zonder verbindingen binnen lagen, alleen tussen zichtbare en verborgen lagen" },
          { en: "A Boltzmann machine with restricted memory", es: "Una máquina de Boltzmann con memoria restringida", de: "Eine Boltzmann-Maschine mit eingeschränktem Speicher", nl: "Een Boltzmann-machine met beperkt geheugen" },
          { en: "A Boltzmann machine that only works with small datasets", es: "Una máquina de Boltzmann que solo funciona con conjuntos de datos pequeños", de: "Eine Boltzmann-Maschine die nur mit kleinen Datensätzen funktioniert", nl: "Een Boltzmann-machine die alleen werkt met kleine datasets" },
          { en: "A supervised version of Boltzmann machine", es: "Una versión supervisada de la máquina de Boltzmann", de: "Eine überwachte Version der Boltzmann-Maschine", nl: "Een supervised versie van de Boltzmann-machine" }
        ],
        correct: 0,
        explanation: {
          en: "RBMs are a simpler form of Boltzmann machines where connections only exist between visible and hidden layers, not within layers. This restriction makes them easier to train and they were important building blocks for deep belief networks and early deep learning systems.",
          es: "Las RBM son una forma más simple de máquinas de Boltzmann donde las conexiones solo existen entre capas visibles y ocultas, no dentro de capas. Esta restricción las hace más fáciles de entrenar y fueron bloques de construcción importantes para redes de creencia profunda y sistemas tempranos de aprendizaje profundo.",
          de: "RBMs sind eine einfachere Form von Boltzmann-Maschinen wo Verbindungen nur zwischen sichtbaren und versteckten Schichten existieren, nicht innerhalb von Schichten. Diese Einschränkung macht sie einfacher zu trainieren und sie waren wichtige Bausteine für Deep Belief Networks und frühe Deep Learning Systeme.",
          nl: "RBMs zijn een eenvoudigere vorm van Boltzmann-machines waarbij verbindingen alleen bestaan tussen zichtbare en verborgen lagen, niet binnen lagen. Deze beperking maakt ze gemakkelijker te trainen en ze waren belangrijke bouwstenen voor deep belief networks en vroege deep learning systemen."
        }
      },
      {
        question: {
          en: "What is a Deep Belief Network (DBN)?",
          es: "¿Qué es una Red de Creencia Profunda (DBN)?",
          de: "Was ist ein Deep Belief Network (DBN)?",
          nl: "Wat is een Deep Belief Network (DBN)?"
        },
        options: [
          { en: "A deep network composed of multiple layers of Restricted Boltzmann Machines", es: "Una red profunda compuesta de múltiples capas de Máquinas de Boltzmann Restringidas", de: "Ein tiefes Netzwerk bestehend aus mehreren Schichten von Restricted Boltzmann Machines", nl: "Een diep netwerk bestaande uit meerdere lagen van Restricted Boltzmann Machines" },
          { en: "A network that has strong religious beliefs", es: "Una red que tiene fuertes creencias religiosas", de: "Ein Netzwerk das starke religiöse Überzeugungen hat", nl: "Een netwerk dat sterke religieuze overtuigingen heeft" },
          { en: "A network for belief propagation only", es: "Una red solo para propagación de creencias", de: "Ein Netzwerk nur für Belief Propagation", nl: "Een netwerk alleen voor belief propagation" },
          { en: "A shallow network with belief-based learning", es: "Una red superficial con aprendizaje basado en creencias", de: "Ein flaches Netzwerk mit glaubensbasiertem Lernen", nl: "Een ondiep netwerk met belief-gebaseerd leren" }
        ],
        correct: 0,
        explanation: {
          en: "DBNs are generative models that stack multiple RBMs. Each layer learns increasingly abstract representations of the data. They were historically important as one of the first successful deep learning architectures, though they've largely been superseded by other deep learning methods.",
          es: "Las DBN son modelos generativos que apilan múltiples RBM. Cada capa aprende representaciones cada vez más abstractas de los datos. Fueron históricamente importantes como una de las primeras arquitecturas exitosas de aprendizaje profundo, aunque han sido ampliamente superadas por otros métodos de aprendizaje profundo.",
          de: "DBNs sind generative Modelle die mehrere RBMs stapeln. Jede Schicht lernt zunehmend abstrakte Darstellungen der Daten. Sie waren historisch wichtig als eine der ersten erfolgreichen Deep Learning Architekturen, obwohl sie weitgehend von anderen Deep Learning Methoden übertroffen wurden.",
          nl: "DBNs zijn generatieve modellen die meerdere RBMs stapelen. Elke laag leert steeds abstractere representaties van de data. Ze waren historisch belangrijk als een van de eerste succesvolle deep learning architecturen, hoewel ze grotendeels zijn overtroffen door andere deep learning methoden."
        }
      },
      {
        question: {
          en: "What is a Capsule Network (CapsNet)?",
          es: "¿Qué es una Red de Cápsulas (CapsNet)?",
          de: "Was ist ein Capsule Network (CapsNet)?",
          nl: "Wat is een Capsule Network (CapsNet)?"
        },
        options: [
          { en: "A network that uses capsules (groups of neurons) to represent objects and their spatial relationships", es: "Una red que usa cápsulas (grupos de neuronas) para representar objetos y sus relaciones espaciales", de: "Ein Netzwerk das Kapseln (Gruppen von Neuronen) verwendet um Objekte und ihre räumlichen Beziehungen zu repräsentieren", nl: "Een netwerk dat capsules (groepen neuronen) gebruikt om objecten en hun ruimtelijke relaties te representeren" },
          { en: "A network contained in physical capsules", es: "Una red contenida en cápsulas físicas", de: "Ein Netzwerk das in physischen Kapseln enthalten ist", nl: "Een netwerk vervat in fysieke capsules" },
          { en: "A simplified CNN architecture", es: "Una arquitectura CNN simplificada", de: "Eine vereinfachte CNN-Architektur", nl: "Een vereenvoudigde CNN-architectuur" },
          { en: "A network for medical capsule analysis", es: "Una red para análisis de cápsulas médicas", de: "Ein Netzwerk für medizinische Kapselanalyse", nl: "Een netwerk voor medische capsuleanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "CapsNets use capsules - small groups of neurons that output vectors instead of scalars. These vectors encode both the probability that a feature exists and its instantiation parameters (pose, orientation, etc.), potentially addressing some limitations of traditional CNNs.",
          es: "Las CapsNets usan cápsulas - pequeños grupos de neuronas que producen vectores en lugar de escalares. Estos vectores codifican tanto la probabilidad de que exista una característica como sus parámetros de instanciación (pose, orientación, etc.), potencialmente abordando algunas limitaciones de las CNN tradicionales.",
          de: "CapsNets verwenden Kapseln - kleine Gruppen von Neuronen die Vektoren statt Skalare ausgeben. Diese Vektoren kodieren sowohl die Wahrscheinlichkeit dass ein Merkmal existiert als auch seine Instantiierungsparameter (Pose, Orientierung, etc.), wodurch möglicherweise einige Beschränkungen traditioneller CNNs adressiert werden.",
          nl: "CapsNets gebruiken capsules - kleine groepen neuronen die vectoren uitvoeren in plaats van scalars. Deze vectoren coderen zowel de waarschijnlijkheid dat een kenmerk bestaat als zijn instantiatieparameters (pose, oriëntatie, etc.), waarmee mogelijk enkele beperkingen van traditionele CNNs worden aangepakt."
        }
      },
      {
        question: {
          en: "What is a Graph Neural Network (GNN)?",
          es: "¿Qué es una Red Neuronal de Grafos (GNN)?",
          de: "Was ist ein Graph Neural Network (GNN)?",
          nl: "Wat is een Graph Neural Network (GNN)?"
        },
        options: [
          { en: "A neural network designed to work directly with graph-structured data", es: "Una red neuronal diseñada para trabajar directamente con datos estructurados en grafos", de: "Ein neuronales Netzwerk das darauf ausgelegt ist direkt mit graphstrukturierten Daten zu arbeiten", nl: "Een neuraal netwerk ontworpen om direct te werken met graafgestructureerde data" },
          { en: "A network for creating visual graphs", es: "Una red para crear gráficos visuales", de: "Ein Netzwerk zur Erstellung visueller Graphiken", nl: "Een netwerk voor het creëren van visuele grafieken" },
          { en: "A network that only processes 2D images", es: "Una red que solo procesa imágenes 2D", de: "Ein Netzwerk das nur 2D-Bilder verarbeitet", nl: "Een netwerk dat alleen 2D-afbeeldingen verwerkt" },
          { en: "A linear regression model for graphs", es: "Un modelo de regresión lineal para grafos", de: "Ein lineares Regressionsmodell für Graphen", nl: "Een lineair regressiemodel voor grafen" }
        ],
        correct: 0,
        explanation: {
          en: "GNNs can process data where relationships between entities are represented as graphs (nodes and edges). They use message passing between connected nodes to learn representations, making them useful for social networks, molecular analysis, and recommendation systems.",
          es: "Las GNN pueden procesar datos donde las relaciones entre entidades se representan como grafos (nodos y aristas). Usan paso de mensajes entre nodos conectados para aprender representaciones, haciéndolas útiles para redes sociales, análisis molecular y sistemas de recomendación.",
          de: "GNNs können Daten verarbeiten wo Beziehungen zwischen Entitäten als Graphen (Knoten und Kanten) repräsentiert sind. Sie verwenden Nachrichtenaustausch zwischen verbundenen Knoten um Darstellungen zu lernen, was sie nützlich für soziale Netzwerke, Molekularanalyse und Empfehlungssysteme macht.",
          nl: "GNNs kunnen data verwerken waarbij relaties tussen entiteiten worden weergegeven als grafen (knopen en randen). Ze gebruiken berichtuitwisseling tussen verbonden knopen om representaties te leren, waardoor ze nuttig zijn voor sociale netwerken, moleculaire analyse en aanbevelingssystemen."
        }
      },
      {
        question: {
          en: "What is a Siamese Network?",
          es: "¿Qué es una Red Siamesa?",
          de: "Was ist ein Siamese Network?",
          nl: "Wat is een Siamese Network?"
        },
        options: [
          { en: "A neural network architecture with two identical sub-networks that share weights and process paired inputs", es: "Una arquitectura de red neuronal con dos sub-redes idénticas que comparten pesos y procesan entradas emparejadas", de: "Eine neuronale Netzwerkarchitektur mit zwei identischen Teilnetzwerken die Gewichte teilen und gepaarte Eingaben verarbeiten", nl: "Een neurale netwerkarchitectuur met twee identieke sub-netwerken die gewichten delen en gepaarde invoer verwerken" },
          { en: "A network from Thailand", es: "Una red de Tailandia", de: "Ein Netzwerk aus Thailand", nl: "Een netwerk uit Thailand" },
          { en: "A network with two different architectures", es: "Una red con dos arquitecturas diferentes", de: "Ein Netzwerk mit zwei verschiedenen Architekturen", nl: "Een netwerk met twee verschillende architecturen" },
          { en: "A network that processes only twin data", es: "Una red que procesa solo datos gemelos", de: "Ein Netzwerk das nur Zwillingsdaten verarbeitet", nl: "Een netwerk dat alleen tweelingdata verwerkt" }
        ],
        correct: 0,
        explanation: {
          en: "Siamese networks consist of two identical neural networks that share the same weights and architecture. They're designed to learn similarity metrics between pairs of inputs, commonly used for face verification, signature verification, and one-shot learning tasks.",
          es: "Las redes siamesas consisten en dos redes neuronales idénticas que comparten los mismos pesos y arquitectura. Están diseñadas para aprender métricas de similitud entre pares de entradas, comúnmente usadas para verificación facial, verificación de firmas y tareas de aprendizaje de una sola vez.",
          de: "Siamese Networks bestehen aus zwei identischen neuronalen Netzwerken die dieselben Gewichte und Architektur teilen. Sie sind darauf ausgelegt Ähnlichkeitsmetriken zwischen Eingabepaaren zu lernen, häufig verwendet für Gesichtsverifikation, Signaturverifikation und One-Shot Learning Aufgaben.",
          nl: "Siamese networks bestaan uit twee identieke neurale netwerken die dezelfde gewichten en architectuur delen. Ze zijn ontworpen om gelijkenismetrieken tussen invoerparen te leren, vaak gebruikt voor gezichtsverificatie, handtekeningverificatie en one-shot learning taken."
        }
      },
      {
        question: {
          en: "What is a Neural Turing Machine (NTM)?",
          es: "¿Qué es una Máquina de Turing Neural (NTM)?",
          de: "Was ist eine Neural Turing Machine (NTM)?",
          nl: "Wat is een Neural Turing Machine (NTM)?"
        },
        options: [
          { en: "A neural network coupled with external memory that can read and write, extending computational capabilities", es: "Una red neuronal acoplada con memoria externa que puede leer y escribir, extendiendo capacidades computacionales", de: "Ein neuronales Netzwerk gekoppelt mit externem Speicher das lesen und schreiben kann, wodurch Rechenkapazitäten erweitert werden", nl: "Een neuraal netwerk gekoppeld aan extern geheugen dat kan lezen en schrijven, waardoor computationele mogelijkheden worden uitgebreid" },
          { en: "A mechanical Turing machine made of neurons", es: "Una máquina de Turing mecánica hecha de neuronas", de: "Eine mechanische Turing-Maschine aus Neuronen", nl: "Een mechanische Turing-machine gemaakt van neuronen" },
          { en: "A network that can only compute simple functions", es: "Una red que solo puede computar funciones simples", de: "Ein Netzwerk das nur einfache Funktionen berechnen kann", nl: "Een netwerk dat alleen eenvoudige functies kan berekenen" },
          { en: "A network for historical computation", es: "Una red para computación histórica", de: "Ein Netzwerk für historische Berechnung", nl: "Een netwerk voor historische berekening" }
        ],
        correct: 0,
        explanation: {
          en: "NTMs combine neural networks with addressable memory, allowing them to store and retrieve information in ways similar to traditional computers. They can learn algorithms and perform complex reasoning tasks that require working memory and attention mechanisms.",
          es: "Las NTM combinan redes neuronales con memoria direccionable, permitiéndoles almacenar y recuperar información de maneras similares a las computadoras tradicionales. Pueden aprender algoritmos y realizar tareas de razonamiento complejo que requieren memoria de trabajo y mecanismos de atención.",
          de: "NTMs kombinieren neuronale Netzwerke mit adressierbarem Speicher, wodurch sie Informationen auf ähnliche Weise wie traditionelle Computer speichern und abrufen können. Sie können Algorithmen lernen und komplexe Denkaufgaben durchführen die Arbeitsgedächtnis und Aufmerksamkeitsmechanismen erfordern.",
          nl: "NTMs combineren neurale netwerken met adresseerbaar geheugen, waardoor ze informatie kunnen opslaan en ophalen op manieren vergelijkbaar met traditionele computers. Ze kunnen algoritmen leren en complexe redeneertaken uitvoeren die werkgeheugen en aandachtmechanismen vereisen."
        }
      },
      {
        question: {
          en: "What is a Residual Neural Network (ResNet)?",
          es: "¿Qué es una Red Neuronal Residual (ResNet)?",
          de: "Was ist ein Residual Neural Network (ResNet)?",
          nl: "Wat is een Residual Neural Network (ResNet)?"
        },
        options: [
          { en: "A deep network that uses skip connections to allow gradients to flow directly to earlier layers", es: "Una red profunda que usa conexiones de salto para permitir que los gradientes fluyan directamente a capas anteriores", de: "Ein tiefes Netzwerk das Skip-Verbindungen verwendet um Gradienten direkt zu früheren Schichten fließen zu lassen", nl: "Een diep netwerk dat skip-verbindingen gebruikt om gradiënten direct naar eerdere lagen te laten stromen" },
          { en: "A network that processes only leftover data", es: "Una red que procesa solo datos sobrantes", de: "Ein Netzwerk das nur übriggebliebene Daten verarbeitet", nl: "Een netwerk dat alleen overgebleven data verwerkt" },
          { en: "A network with reduced computational requirements", es: "Una red con requisitos computacionales reducidos", de: "Ein Netzwerk mit reduzierten Rechenanforderungen", nl: "Een netwerk met verminderde computationele vereisten" },
          { en: "A network for residential applications", es: "Una red para aplicaciones residenciales", de: "Ein Netzwerk für Wohnanwendungen", nl: "Een netwerk voor residentiële toepassingen" }
        ],
        correct: 0,
        explanation: {
          en: "ResNets introduced skip connections (or residual connections) that allow the input to bypass one or more layers and be added to the output. This solves the vanishing gradient problem in very deep networks and enables training of networks with hundreds of layers.",
          es: "Las ResNets introdujeron conexiones de salto (o conexiones residuales) que permiten que la entrada bypase una o más capas y se sume a la salida. Esto resuelve el problema del gradiente que se desvanece en redes muy profundas y permite entrenar redes con cientos de capas.",
          de: "ResNets führten Skip-Verbindungen (oder Residualverbindungen) ein die es der Eingabe ermöglichen eine oder mehrere Schichten zu umgehen und zur Ausgabe hinzugefügt zu werden. Dies löst das Problem des verschwindenden Gradienten in sehr tiefen Netzwerken und ermöglicht das Training von Netzwerken mit Hunderten von Schichten.",
          nl: "ResNets introduceerden skip-verbindingen (of residuele verbindingen) die de invoer toestaan om een of meer lagen te omzeilen en bij de uitvoer te worden opgeteld. Dit lost het probleem van verdwijnende gradiënten in zeer diepe netwerken op en maakt training van netwerken met honderden lagen mogelijk."
        }
      },
      {
        question: {
          en: "What is a U-Net neural network?",
          es: "¿Qué es una red neuronal U-Net?",
          de: "Was ist ein U-Net neuronales Netzwerk?",
          nl: "Wat is een U-Net neuraal netwerk?"
        },
        options: [
          { en: "A convolutional network with an encoder-decoder structure and skip connections, primarily used for image segmentation", es: "Una red convolucional con estructura codificador-decodificador y conexiones de salto, principalmente usada para segmentación de imágenes", de: "Ein Faltungsnetzwerk mit Encoder-Decoder-Struktur und Skip-Verbindungen, hauptsächlich für Bildsegmentierung verwendet", nl: "Een convolutioneel netwerk met een encoder-decoder structuur en skip-verbindingen, voornamelijk gebruikt voor beeldsegmentatie" },
          { en: "A network shaped like the letter U", es: "Una red con forma de la letra U", de: "Ein Netzwerk in Form des Buchstabens U", nl: "Een netwerk in de vorm van de letter U" },
          { en: "A network for university applications", es: "Una red para aplicaciones universitarias", de: "Ein Netzwerk für Universitätsanwendungen", nl: "Een netwerk voor universitaire toepassingen" },
          { en: "A simplified CNN without pooling layers", es: "Una CNN simplificada sin capas de pooling", de: "Ein vereinfachtes CNN ohne Pooling-Schichten", nl: "Een vereenvoudigde CNN zonder pooling-lagen" }
        ],
        correct: 0,
        explanation: {
          en: "U-Net has a U-shaped architecture with a contracting path (encoder) that captures context and an expansive path (decoder) that enables precise localization. Skip connections between corresponding layers help preserve fine details, making it excellent for medical image segmentation and pixel-level classification.",
          es: "U-Net tiene una arquitectura en forma de U con una ruta contractual (codificador) que captura contexto y una ruta expansiva (decodificador) que permite localización precisa. Las conexiones de salto entre capas correspondientes ayudan a preservar detalles finos, haciéndola excelente para segmentación de imágenes médicas y clasificación a nivel de píxel.",
          de: "U-Net hat eine U-förmige Architektur mit einem zusammenziehenden Pfad (Encoder) der Kontext erfasst und einem erweiternden Pfad (Decoder) der präzise Lokalisierung ermöglicht. Skip-Verbindungen zwischen entsprechenden Schichten helfen feine Details zu bewahren, was es ausgezeichnet für medizinische Bildsegmentierung und Pixelebenen-Klassifikation macht.",
          nl: "U-Net heeft een U-vormige architectuur met een samentrekkend pad (encoder) dat context vastlegt en een uitbreidend pad (decoder) dat precieze lokalisatie mogelijk maakt. Skip-verbindingen tussen overeenkomstige lagen helpen fijne details te behouden, waardoor het uitstekend is voor medische beeldsegmentatie en classificatie op pixelniveau."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();