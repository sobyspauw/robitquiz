// Deep Learning Quiz - Level 1: Basic Deep Learning
(function() {
  const level1 = {
    name: {
      en: "Deep Learning Level 1",
      es: "Aprendizaje Profundo Nivel 1",
      de: "Deep Learning Stufe 1",
      nl: "Deep Learning Level 1"
    },
    questions: [
      {
        question: {
          en: "What is deep learning inspired by?",
          es: "Â¿En quÃ© se inspira el aprendizaje profundo?",
          de: "Wovon ist Deep Learning inspiriert?",
          nl: "Waarop is deep learning geÃ¯nspireerd?"
        },
        options: [
          { en: "The human brain", es: "El cerebro humano", de: "Das menschliche Gehirn", nl: "Het menselijke brein" },
          { en: "Ocean waves", es: "Olas del ocÃ©ano", de: "Meereswellen", nl: "Oceaangolven" },
          { en: "Tree branches", es: "Ramas de Ã¡rboles", de: "BaumÃ¤ste", nl: "Boomtakken" },
          { en: "Bird flight", es: "Vuelo de pÃ¡jaros", de: "Vogelflug", nl: "Vogelvlucht" }
        ],
        correct: 0,
        explanation: {
          en: "Deep learning uses artificial neural networks that mimic how neurons in the human brain process information.",
          es: "El aprendizaje profundo usa redes neuronales artificiales que imitan cÃ³mo las neuronas en el cerebro humano procesan informaciÃ³n.",
          de: "Deep Learning nutzt kÃ¼nstliche neuronale Netzwerke die nachahmen wie Neuronen im menschlichen Gehirn Informationen verarbeiten.",
          nl: "Deep learning gebruikt kunstmatige neurale netwerken die nabootsen hoe neuronen in het menselijke brein informatie verwerken."
        }
      },
      {
        question: {
          en: "What does 'deep' in deep learning refer to?",
          es: "Â¿A quÃ© se refiere 'profundo' en aprendizaje profundo?",
          de: "Worauf bezieht sich 'deep' in Deep Learning?",
          nl: "Waar verwijst 'deep' in deep learning naar?"
        },
        options: [
          { en: "Many layers in the neural network", es: "Muchas capas en la red neuronal", de: "Viele Schichten im neuronalen Netzwerk", nl: "Vele lagen in het neurale netwerk" },
          { en: "Deep underwater research", es: "InvestigaciÃ³n submarina profunda", de: "Tiefe Unterwasserforschung", nl: "Diep onderwater onderzoek" },
          { en: "Complex mathematics", es: "MatemÃ¡ticas complejas", de: "Komplexe Mathematik", nl: "Complexe wiskunde" },
          { en: "Deep thinking", es: "Pensamiento profundo", de: "Tiefes Denken", nl: "Diep nadenken" }
        ],
        correct: 0,
        explanation: {
          en: "The 'deep' refers to multiple hidden layers in the neural network that can learn increasingly complex patterns.",
          es: "Lo 'profundo' se refiere a mÃºltiples capas ocultas en la red neuronal que pueden aprender patrones cada vez mÃ¡s complejos.",
          de: "Das 'Deep' bezieht sich auf mehrere versteckte Schichten im neuronalen Netzwerk die zunehmend komplexe Muster lernen kÃ¶nnen.",
          nl: "Het 'deep' verwijst naar meerdere verborgen lagen in het neurale netwerk die steeds complexere patronen kunnen leren."
        }
      },
      {
        question: {
          en: "What is a neural network made up of?",
          es: "¿De qué está compuesta una red neuronal?",
          de: "Woraus besteht ein neuronales Netzwerk?",
          nl: "Waaruit bestaat een neuraal netwerk?"
        },
        options: [
          { en: "Artificial neurons connected together", es: "Neuronas artificiales conectadas entre sí", de: "Künstliche Neuronen miteinander verbunden", nl: "Kunstmatige neuronen verbonden met elkaar" },
          { en: "Computer processors", es: "Procesadores de computadora", de: "Computerprozessoren", nl: "Computerprocessors" },
          { en: "Database tables", es: "Tablas de base de datos", de: "Datenbanktabellen", nl: "Database tabellen" },
          { en: "Programming code", es: "Código de programación", de: "Programmcode", nl: "Programmeercode" }
        ],
        correct: 0,
        explanation: {
          en: "Neural networks consist of artificial neurons (nodes) that are connected and pass information between layers to process data.",
          es: "Las redes neuronales consisten en neuronas artificiales (nodos) que están conectadas y pasan información entre capas para procesar datos.",
          de: "Neuronale Netzwerke bestehen aus künstlichen Neuronen (Knoten) die verbunden sind und Informationen zwischen Schichten weiterleiten um Daten zu verarbeiten.",
          nl: "Neurale netwerken bestaan uit kunstmatige neuronen (knooppunten) die verbonden zijn en informatie tussen lagen doorgeven om data te verwerken."
        }
      },
      {
        question: {
          en: "What is the main advantage of deep learning over traditional programming?",
          es: "¿Cuál es la principal ventaja del aprendizaje profundo sobre la programación tradicional?",
          de: "Was ist der Hauptvorteil von Deep Learning gegenüber traditioneller Programmierung?",
          nl: "Wat is het hoofdvoordeel van deep learning ten opzichte van traditioneel programmeren?"
        },
        options: [
          { en: "It can automatically learn patterns from data", es: "Puede aprender automáticamente patrones de los datos", de: "Es kann automatisch Muster aus Daten lernen", nl: "Het kan automatisch patronen leren uit data" },
          { en: "It runs faster", es: "Funciona más rápido", de: "Es läuft schneller", nl: "Het werkt sneller" },
          { en: "It uses less memory", es: "Usa menos memoria", de: "Es verwendet weniger Speicher", nl: "Het gebruikt minder geheugen" },
          { en: "It's easier to understand", es: "Es más fácil de entender", de: "Es ist einfacher zu verstehen", nl: "Het is makkelijker te begrijpen" }
        ],
        correct: 0,
        explanation: {
          en: "Unlike traditional programming where rules are explicitly coded, deep learning automatically discovers patterns and features from training data.",
          es: "A diferencia de la programación tradicional donde las reglas se codifican explícitamente, el aprendizaje profundo descubre automáticamente patrones y características de los datos de entrenamiento.",
          de: "Im Gegensatz zur traditionellen Programmierung wo Regeln explizit kodiert werden, entdeckt Deep Learning automatisch Muster und Merkmale aus Trainingsdaten.",
          nl: "In tegenstelling tot traditioneel programmeren waar regels expliciet gecodeerd worden, ontdekt deep learning automatisch patronen en kenmerken uit trainingsdata."
        }
      },
      {
        question: {
          en: "Which of these is a common application of deep learning?",
          es: "¿Cuál de estas es una aplicación común del aprendizaje profundo?",
          de: "Welches ist eine häufige Anwendung von Deep Learning?",
          nl: "Welke van deze is een veelvoorkomende toepassing van deep learning?"
        },
        options: [
          { en: "Image recognition", es: "Reconocimiento de imágenes", de: "Bilderkennung", nl: "Beeldherkenning" },
          { en: "Word processing", es: "Procesamiento de texto", de: "Textverarbeitung", nl: "Tekstverwerking" },
          { en: "File compression", es: "Compresión de archivos", de: "Dateikompression", nl: "Bestandscompressie" },
          { en: "Database management", es: "Gestión de bases de datos", de: "Datenbankmanagement", nl: "Database beheer" }
        ],
        correct: 0,
        explanation: {
          en: "Deep learning excels at image recognition, enabling computers to identify objects, faces, and scenes in photographs with high accuracy.",
          es: "El aprendizaje profundo sobresale en el reconocimiento de imágenes, permitiendo a las computadoras identificar objetos, caras y escenas en fotografías con alta precisión.",
          de: "Deep Learning glänzt bei der Bilderkennung und ermöglicht Computern Objekte, Gesichter und Szenen in Fotografien mit hoher Genauigkeit zu identifizieren.",
          nl: "Deep learning blinkt uit in beeldherkenning, waardoor computers objecten, gezichten en scènes in foto's met hoge nauwkeurigheid kunnen identificeren."
        }
      },
      {
        question: {
          en: "What is an artificial neuron?",
          es: "¿Qué es una neurona artificial?",
          de: "Was ist ein künstliches Neuron?",
          nl: "Wat is een kunstmatige neuron?"
        },
        options: [
          { en: "A simple mathematical function that processes input data", es: "Una función matemática simple que procesa datos de entrada", de: "Eine einfache mathematische Funktion die Eingabedaten verarbeitet", nl: "Een eenvoudige wiskundige functie die invoerdata verwerkt" },
          { en: "A real brain cell in a computer", es: "Una célula cerebral real en una computadora", de: "Eine echte Gehirnzelle in einem Computer", nl: "Een echte hersencel in een computer" },
          { en: "A type of computer memory", es: "Un tipo de memoria de computadora", de: "Eine Art Computerspeicher", nl: "Een type computergeheugen" },
          { en: "A special processor chip", es: "Un chip procesador especial", de: "Ein spezieller Prozessorchip", nl: "Een speciale processorchip" }
        ],
        correct: 0,
        explanation: {
          en: "An artificial neuron takes inputs, applies weights and a mathematical function, then produces an output - mimicking basic brain neuron behavior.",
          es: "Una neurona artificial toma entradas, aplica pesos y una función matemática, luego produce una salida - imitando el comportamiento básico de una neurona cerebral.",
          de: "Ein künstliches Neuron nimmt Eingaben, wendet Gewichte und eine mathematische Funktion an, dann produziert es eine Ausgabe - imitiert grundlegendes Gehirnneuron-Verhalten.",
          nl: "Een kunstmatige neuron neemt inputs, past gewichten en een wiskundige functie toe, en produceert dan een output - imiteert basaal hersenneuronengedrag."
        }
      },
      {
        question: {
          en: "What does 'training' a neural network mean?",
          es: "¿Qué significa 'entrenar' una red neuronal?",
          de: "Was bedeutet das 'Training' eines neuronalen Netzwerks?",
          nl: "Wat betekent het 'trainen' van een neuraal netwerk?"
        },
        options: [
          { en: "Teaching it to recognize patterns by showing it examples", es: "Enseñarle a reconocer patrones mostrándole ejemplos", de: "Ihm beibringen Muster zu erkennen indem man ihm Beispiele zeigt", nl: "Het leren patronen te herkennen door het voorbeelden te tonen" },
          { en: "Making it exercise to get stronger", es: "Hacerlo ejercitarse para volverse más fuerte", de: "Es trainieren lassen um stärker zu werden", nl: "Het laten oefenen om sterker te worden" },
          { en: "Installing new software updates", es: "Instalar nuevas actualizaciones de software", de: "Neue Software-Updates installieren", nl: "Nieuwe software-updates installeren" },
          { en: "Connecting it to the internet", es: "Conectarlo a internet", de: "Es mit dem Internet verbinden", nl: "Het verbinden met internet" }
        ],
        correct: 0,
        explanation: {
          en: "Training involves feeding the network many examples so it can learn to recognize patterns and make accurate predictions on new data.",
          es: "El entrenamiento involucra alimentar la red con muchos ejemplos para que pueda aprender a reconocer patrones y hacer predicciones precisas en datos nuevos.",
          de: "Training beinhaltet das Füttern des Netzwerks mit vielen Beispielen damit es lernen kann Muster zu erkennen und genaue Vorhersagen auf neuen Daten zu machen.",
          nl: "Trainen houdt in dat het netwerk veel voorbeelden krijgt zodat het patronen kan leren herkennen en nauwkeurige voorspellingen kan doen op nieuwe data."
        }
      },
      {
        question: {
          en: "What is machine learning?",
          es: "¿Qué es el aprendizaje automático?",
          de: "Was ist maschinelles Lernen?",
          nl: "Wat is machine learning?"
        },
        options: [
          { en: "A way for computers to learn without being explicitly programmed", es: "Una forma para que las computadoras aprendan sin ser programadas explícitamente", de: "Ein Weg für Computer zu lernen ohne explizit programmiert zu werden", nl: "Een manier voor computers om te leren zonder expliciet geprogrammeerd te worden" },
          { en: "A type of factory automation", es: "Un tipo de automatización de fábrica", de: "Eine Art Fabrikautomation", nl: "Een type fabrieksautomatisering" },
          { en: "Learning how to use machines", es: "Aprender cómo usar máquinas", de: "Lernen wie man Maschinen benutzt", nl: "Leren hoe machines te gebruiken" },
          { en: "A computer game", es: "Un juego de computadora", de: "Ein Computerspiel", nl: "Een computerspel" }
        ],
        correct: 0,
        explanation: {
          en: "Machine learning allows computers to automatically improve their performance on tasks through experience and data, without manual programming.",
          es: "El aprendizaje automático permite a las computadoras mejorar automáticamente su rendimiento en tareas a través de experiencia y datos, sin programación manual.",
          de: "Maschinelles Lernen ermöglicht Computern ihre Leistung bei Aufgaben automatisch durch Erfahrung und Daten zu verbessern, ohne manuelle Programmierung.",
          nl: "Machine learning stelt computers in staat hun prestaties bij taken automatisch te verbeteren door ervaring en data, zonder handmatige programmering."
        }
      },
      {
        question: {
          en: "What is the difference between shallow and deep neural networks?",
          es: "¿Cuál es la diferencia entre redes neuronales superficiales y profundas?",
          de: "Was ist der Unterschied zwischen oberflächlichen und tiefen neuronalen Netzwerken?",
          nl: "Wat is het verschil tussen oppervlakkige en diepe neurale netwerken?"
        },
        options: [
          { en: "Deep networks have more hidden layers than shallow networks", es: "Las redes profundas tienen más capas ocultas que las redes superficiales", de: "Tiefe Netzwerke haben mehr versteckte Schichten als oberflächliche Netzwerke", nl: "Diepe netwerken hebben meer verborgen lagen dan oppervlakkige netwerken" },
          { en: "Deep networks are physically deeper in the computer", es: "Las redes profundas están físicamente más profundas en la computadora", de: "Tiefe Netzwerke sind physisch tiefer im Computer", nl: "Diepe netwerken zitten fysiek dieper in de computer" },
          { en: "Shallow networks are easier to understand", es: "Las redes superficiales son más fáciles de entender", de: "Oberflächliche Netzwerke sind einfacher zu verstehen", nl: "Oppervlakkige netwerken zijn makkelijker te begrijpen" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Deep networks typically have 3 or more hidden layers, allowing them to learn more complex patterns than shallow networks with fewer layers.",
          es: "Las redes profundas típicamente tienen 3 o más capas ocultas, permitiéndoles aprender patrones más complejos que las redes superficiales con menos capas.",
          de: "Tiefe Netzwerke haben typischerweise 3 oder mehr versteckte Schichten, wodurch sie komplexere Muster lernen können als oberflächliche Netzwerke mit weniger Schichten.",
          nl: "Diepe netwerken hebben doorgaans 3 of meer verborgen lagen, waardoor ze complexere patronen kunnen leren dan oppervlakkige netwerken met minder lagen."
        }
      },
      {
        question: {
          en: "What is a dataset in machine learning?",
          es: "¿Qué es un conjunto de datos en aprendizaje automático?",
          de: "Was ist ein Datensatz in maschinellem Lernen?",
          nl: "Wat is een dataset in machine learning?"
        },
        options: [
          { en: "A collection of examples used to train and test algorithms", es: "Una colección de ejemplos usados para entrenar y probar algoritmos", de: "Eine Sammlung von Beispielen die verwendet werden um Algorithmen zu trainieren und zu testen", nl: "Een verzameling voorbeelden gebruikt om algoritmes te trainen en testen" },
          { en: "A computer hard drive", es: "Un disco duro de computadora", de: "Eine Computer-Festplatte", nl: "Een computerharde schijf" },
          { en: "A type of calendar", es: "Un tipo de calendario", de: "Eine Art Kalender", nl: "Een soort kalender" },
          { en: "A set of dates and times", es: "Un conjunto de fechas y horas", de: "Ein Satz von Daten und Zeiten", nl: "Een set data en tijden" }
        ],
        correct: 0,
        explanation: {
          en: "A dataset contains the training examples (input-output pairs) that machine learning algorithms use to learn patterns and make predictions.",
          es: "Un conjunto de datos contiene los ejemplos de entrenamiento (pares entrada-salida) que los algoritmos de aprendizaje automático usan para aprender patrones y hacer predicciones.",
          de: "Ein Datensatz enthält die Trainingsbeispiele (Eingabe-Ausgabe-Paare) die maschinelle Lernalgorithmen verwenden um Muster zu lernen und Vorhersagen zu machen.",
          nl: "Een dataset bevat de trainingsvoorbeelden (input-output paren) die machine learning algoritmes gebruiken om patronen te leren en voorspellingen te doen."
        }
      },
      {
        question: {
          en: "What does 'weights' mean in neural networks?",
          es: "¿Qué significan los 'pesos' en las redes neuronales?",
          de: "Was bedeuten 'Gewichte' in neuronalen Netzwerken?",
          nl: "Wat betekenen 'gewichten' in neurale netwerken?"
        },
        options: [
          { en: "Numbers that determine how important each input is", es: "Números que determinan qué tan importante es cada entrada", de: "Zahlen die bestimmen wie wichtig jede Eingabe ist", nl: "Getallen die bepalen hoe belangrijk elke input is" },
          { en: "The physical weight of the computer", es: "El peso físico de la computadora", de: "Das physische Gewicht des Computers", nl: "Het fysieke gewicht van de computer" },
          { en: "How heavy the data files are", es: "Qué tan pesados son los archivos de datos", de: "Wie schwer die Datendateien sind", nl: "Hoe zwaar de databestanden zijn" },
          { en: "The processing speed", es: "La velocidad de procesamiento", de: "Die Verarbeitungsgeschwindigkeit", nl: "De verwerkingssnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "Weights are adjustable parameters that control the strength of connections between neurons, determining how much influence each input has on the output.",
          es: "Los pesos son parámetros ajustables que controlan la fuerza de las conexiones entre neuronas, determinando cuánta influencia tiene cada entrada en la salida.",
          de: "Gewichte sind anpassbare Parameter die die Stärke der Verbindungen zwischen Neuronen kontrollieren und bestimmen wie viel Einfluss jede Eingabe auf die Ausgabe hat.",
          nl: "Gewichten zijn aanpasbare parameters die de sterkte van verbindingen tussen neuronen controleren, en bepalen hoeveel invloed elke input heeft op de output."
        }
      },
      {
        question: {
          en: "What is supervised learning?",
          es: "¿Qué es el aprendizaje supervisado?",
          de: "Was ist überwachtes Lernen?",
          nl: "Wat is supervised learning?"
        },
        options: [
          { en: "Learning with correct answers provided during training", es: "Aprender con respuestas correctas proporcionadas durante el entrenamiento", de: "Lernen mit korrekten Antworten die während des Trainings bereitgestellt werden", nl: "Leren met correcte antwoorden die tijdens training worden gegeven" },
          { en: "Learning while a teacher watches", es: "Aprender mientras un maestro observa", de: "Lernen während ein Lehrer zuschaut", nl: "Leren terwijl een leraar toekijkt" },
          { en: "Learning during supervised work hours", es: "Aprender durante horas de trabajo supervisadas", de: "Lernen während überwachter Arbeitszeiten", nl: "Leren tijdens begeleid werkuren" },
          { en: "Learning with parental supervision", es: "Aprender con supervisión parental", de: "Lernen unter elterlicher Aufsicht", nl: "Leren onder ouderlijk toezicht" }
        ],
        correct: 0,
        explanation: {
          en: "In supervised learning, the algorithm is trained using input-output pairs where the correct answers are known, helping it learn to make accurate predictions.",
          es: "En el aprendizaje supervisado, el algoritmo se entrena usando pares entrada-salida donde las respuestas correctas son conocidas, ayudándole a aprender a hacer predicciones precisas.",
          de: "Beim überwachten Lernen wird der Algorithmus mit Eingabe-Ausgabe-Paaren trainiert wo die korrekten Antworten bekannt sind, hilft ihm zu lernen genaue Vorhersagen zu machen.",
          nl: "Bij supervised learning wordt het algoritme getraind met input-output paren waar de correcte antwoorden bekend zijn, waardoor het leert nauwkeurige voorspellingen te maken."
        }
      },
      {
        question: {
          en: "What is unsupervised learning?",
          es: "¿Qué es el aprendizaje no supervisado?",
          de: "Was ist unüberwachtes Lernen?",
          nl: "Wat is unsupervised learning?"
        },
        options: [
          { en: "Learning patterns from data without knowing the correct answers", es: "Aprender patrones de datos sin conocer las respuestas correctas", de: "Muster aus Daten lernen ohne die korrekten Antworten zu kennen", nl: "Patronen leren uit data zonder de correcte antwoorden te kennen" },
          { en: "Learning without any supervision", es: "Aprender sin supervisión alguna", de: "Lernen ohne jegliche Aufsicht", nl: "Leren zonder enig toezicht" },
          { en: "Learning during unsupervised time", es: "Aprender durante tiempo no supervisado", de: "Lernen während unüberwachter Zeit", nl: "Leren tijdens onbegeleid tijd" },
          { en: "Learning when nobody is watching", es: "Aprender cuando nadie está mirando", de: "Lernen wenn niemand zuschaut", nl: "Leren wanneer niemand kijkt" }
        ],
        correct: 0,
        explanation: {
          en: "Unsupervised learning finds hidden patterns in data without being given examples of correct answers, like grouping similar items together.",
          es: "El aprendizaje no supervisado encuentra patrones ocultos en los datos sin recibir ejemplos de respuestas correctas, como agrupar elementos similares.",
          de: "Unüberwachtes Lernen findet versteckte Muster in Daten ohne Beispiele korrekter Antworten zu erhalten, wie das Gruppieren ähnlicher Gegenstände.",
          nl: "Unsupervised learning vindt verborgen patronen in data zonder voorbeelden van correcte antwoorden te krijgen, zoals het groeperen van vergelijkbare items."
        }
      },
      {
        question: {
          en: "What is an algorithm in machine learning?",
          es: "¿Qué es un algoritmo en aprendizaje automático?",
          de: "Was ist ein Algorithmus in maschinellem Lernen?",
          nl: "Wat is een algoritme in machine learning?"
        },
        options: [
          { en: "A set of rules and instructions for solving problems", es: "Un conjunto de reglas e instrucciones para resolver problemas", de: "Ein Satz von Regeln und Anweisungen zur Problemlösung", nl: "Een set regels en instructies voor het oplossen van problemen" },
          { en: "A type of computer virus", es: "Un tipo de virus de computadora", de: "Eine Art Computervirus", nl: "Een soort computervirus" },
          { en: "A mathematical equation", es: "Una ecuación matemática", de: "Eine mathematische Gleichung", nl: "Een wiskundige vergelijking" },
          { en: "A computer programming language", es: "Un lenguaje de programación de computadora", de: "Eine Computerprogrammiersprache", nl: "Een computerprogrammeertaal" }
        ],
        correct: 0,
        explanation: {
          en: "An algorithm is a step-by-step procedure that tells the computer how to process data and learn patterns to make predictions or decisions.",
          es: "Un algoritmo es un procedimiento paso a paso que le dice a la computadora cómo procesar datos y aprender patrones para hacer predicciones o decisiones.",
          de: "Ein Algorithmus ist ein schrittweises Verfahren das dem Computer sagt wie Daten zu verarbeiten und Muster zu lernen sind um Vorhersagen oder Entscheidungen zu treffen.",
          nl: "Een algoritme is een stap-voor-stap procedure die de computer vertelt hoe data te verwerken en patronen te leren om voorspellingen of beslissingen te maken."
        }
      },
      {
        question: {
          en: "Why is deep learning called 'artificial intelligence'?",
          es: "¿Por qué se llama 'inteligencia artificial' al aprendizaje profundo?",
          de: "Warum wird Deep Learning 'künstliche Intelligenz' genannt?",
          nl: "Waarom wordt deep learning 'kunstmatige intelligentie' genoemd?"
        },
        options: [
          { en: "Because it can perform tasks that typically require human intelligence", es: "Porque puede realizar tareas que típicamente requieren inteligencia humana", de: "Weil es Aufgaben ausführen kann die typischerweise menschliche Intelligenz erfordern", nl: "Omdat het taken kan uitvoeren die doorgaans menselijke intelligentie vereisen" },
          { en: "Because it uses artificial materials", es: "Porque usa materiales artificiales", de: "Weil es künstliche Materialien verwendet", nl: "Omdat het kunstmatige materialen gebruikt" },
          { en: "Because it's not real intelligence", es: "Porque no es inteligencia real", de: "Weil es keine echte Intelligenz ist", nl: "Omdat het geen echte intelligentie is" },
          { en: "Because it was invented artificially", es: "Porque fue inventado artificialmente", de: "Weil es künstlich erfunden wurde", nl: "Omdat het kunstmatig uitgevonden werd" }
        ],
        correct: 0,
        explanation: {
          en: "AI systems can recognize images, understand speech, translate languages, and make decisions - cognitive tasks that were once only possible for humans.",
          es: "Los sistemas de IA pueden reconocer imágenes, entender habla, traducir idiomas y tomar decisiones - tareas cognitivas que una vez solo eran posibles para humanos.",
          de: "KI-Systeme können Bilder erkennen, Sprache verstehen, Sprachen übersetzen und Entscheidungen treffen - kognitive Aufgaben die einst nur für Menschen möglich waren.",
          nl: "AI-systemen kunnen beelden herkennen, spraak begrijpen, talen vertalen en beslissingen nemen - cognitieve taken die ooit alleen mogelijk waren voor mensen."
        }
      },
      {
        question: {
          en: "What happens during the 'learning' process in deep learning?",
          es: "¿Qué sucede durante el proceso de 'aprendizaje' en aprendizaje profundo?",
          de: "Was passiert während des 'Lern'-Prozesses in Deep Learning?",
          nl: "Wat gebeurt er tijdens het 'leer'-proces in deep learning?"
        },
        options: [
          { en: "The network adjusts its weights to improve its predictions", es: "La red ajusta sus pesos para mejorar sus predicciones", de: "Das Netzwerk passt seine Gewichte an um seine Vorhersagen zu verbessern", nl: "Het netwerk past zijn gewichten aan om zijn voorspellingen te verbeteren" },
          { en: "The computer reads textbooks", es: "La computadora lee libros de texto", de: "Der Computer liest Lehrbücher", nl: "De computer leest tekstboeken" },
          { en: "New neurons are created", es: "Se crean nuevas neuronas", de: "Neue Neuronen werden erstellt", nl: "Nieuwe neuronen worden gecreëerd" },
          { en: "The network memorizes all the data", es: "La red memoriza todos los datos", de: "Das Netzwerk merkt sich alle Daten", nl: "Het netwerk memoriseert alle data" }
        ],
        correct: 0,
        explanation: {
          en: "During learning, the neural network continuously adjusts the strength of connections (weights) between neurons to minimize errors and improve accuracy.",
          es: "Durante el aprendizaje, la red neuronal ajusta continuamente la fuerza de las conexiones (pesos) entre neuronas para minimizar errores y mejorar la precisión.",
          de: "Während des Lernens passt das neuronale Netzwerk kontinuierlich die Stärke der Verbindungen (Gewichte) zwischen Neuronen an um Fehler zu minimieren und Genauigkeit zu verbessern.",
          nl: "Tijdens het leren past het neurale netwerk voortdurend de sterkte van verbindingen (gewichten) tussen neuronen aan om fouten te minimaliseren en nauwkeurigheid te verbeteren."
        }
      },
      {
        question: {
          en: "What is the goal of training a deep learning model?",
          es: "¿Cuál es el objetivo de entrenar un modelo de aprendizaje profundo?",
          de: "Was ist das Ziel beim Training eines Deep Learning Modells?",
          nl: "Wat is het doel van het trainen van een deep learning model?"
        },
        options: [
          { en: "To make accurate predictions on new, unseen data", es: "Hacer predicciones precisas en datos nuevos, no vistos", de: "Genaue Vorhersagen auf neuen, ungesehenen Daten zu machen", nl: "Nauwkeurige voorspellingen doen op nieuwe, ongeziene data" },
          { en: "To make the model run faster", es: "Hacer que el modelo funcione más rápido", de: "Das Modell schneller laufen zu lassen", nl: "Het model sneller te laten werken" },
          { en: "To use less computer memory", es: "Usar menos memoria de computadora", de: "Weniger Computerspeicher zu verwenden", nl: "Minder computergeheugen te gebruiken" },
          { en: "To make the model smaller", es: "Hacer el modelo más pequeño", de: "Das Modell kleiner zu machen", nl: "Het model kleiner te maken" }
        ],
        correct: 0,
        explanation: {
          en: "The ultimate goal is generalization - creating a model that can accurately predict or classify new examples it has never seen before.",
          es: "El objetivo final es la generalización - crear un modelo que pueda predecir o clasificar con precisión nuevos ejemplos que nunca ha visto antes.",
          de: "Das ultimative Ziel ist Generalisierung - ein Modell zu erstellen das neue Beispiele die es nie zuvor gesehen hat genau vorhersagen oder klassifizieren kann.",
          nl: "Het uiteindelijke doel is generalisatie - een model creëren dat nieuwe voorbeelden die het nooit eerder heeft gezien nauwkeurig kan voorspellen of classificeren."
        }
      },
      {
        question: {
          en: "What makes deep learning different from traditional programming?",
          es: "¿Qué hace diferente al aprendizaje profundo de la programación tradicional?",
          de: "Was macht Deep Learning anders als traditionelle Programmierung?",
          nl: "Wat maakt deep learning anders dan traditioneel programmeren?"
        },
        options: [
          { en: "It discovers rules from examples instead of being explicitly programmed", es: "Descubre reglas de ejemplos en lugar de ser programado explícitamente", de: "Es entdeckt Regeln aus Beispielen anstatt explizit programmiert zu werden", nl: "Het ontdekt regels uit voorbeelden in plaats van expliciet geprogrammeerd te worden" },
          { en: "It uses different programming languages", es: "Usa diferentes lenguajes de programación", de: "Es verwendet verschiedene Programmiersprachen", nl: "Het gebruikt verschillende programmeertalen" },
          { en: "It runs on special computers", es: "Funciona en computadoras especiales", de: "Es läuft auf speziellen Computern", nl: "Het draait op speciale computers" },
          { en: "It doesn't use any code", es: "No usa ningún código", de: "Es verwendet keinen Code", nl: "Het gebruikt geen code" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional programming requires explicitly writing rules, while deep learning automatically learns patterns and rules from training data examples.",
          es: "La programación tradicional requiere escribir reglas explícitamente, mientras que el aprendizaje profundo aprende automáticamente patrones y reglas de ejemplos de datos de entrenamiento.",
          de: "Traditionelle Programmierung erfordert das explizite Schreiben von Regeln, während Deep Learning automatisch Muster und Regeln aus Trainingsdatenbeispielen lernt.",
          nl: "Traditioneel programmeren vereist het expliciet schrijven van regels, terwijl deep learning automatisch patronen en regels leert uit trainingsdata voorbeelden."
        }
      },
      {
        question: {
          en: "What is needed to train a deep learning model?",
          es: "¿Qué se necesita para entrenar un modelo de aprendizaje profundo?",
          de: "Was wird benötigt um ein Deep Learning Modell zu trainieren?",
          nl: "Wat is er nodig om een deep learning model te trainen?"
        },
        options: [
          { en: "Data, computing power, and time", es: "Datos, poder de cómputo y tiempo", de: "Daten, Rechenleistung und Zeit", nl: "Data, rekenkracht en tijd" },
          { en: "Only a fast internet connection", es: "Solo una conexión rápida a internet", de: "Nur eine schnelle Internetverbindung", nl: "Alleen een snelle internetverbinding" },
          { en: "Just a good programmer", es: "Solo un buen programador", de: "Nur ein guter Programmierer", nl: "Alleen een goede programmeur" },
          { en: "Nothing special", es: "Nada especial", de: "Nichts Besonderes", nl: "Niets speciaals" }
        ],
        correct: 0,
        explanation: {
          en: "Deep learning requires large amounts of training data, significant computational resources (like GPUs), and time for the iterative learning process.",
          es: "El aprendizaje profundo requiere grandes cantidades de datos de entrenamiento, recursos computacionales significativos (como GPUs) y tiempo para el proceso de aprendizaje iterativo.",
          de: "Deep Learning erfordert große Mengen an Trainingsdaten, erhebliche Rechenressourcen (wie GPUs) und Zeit für den iterativen Lernprozess.",
          nl: "Deep learning vereist grote hoeveelheden trainingsdata, aanzienlijke computationele middelen (zoals GPU's) en tijd voor het iteratieve leerproces."
        }
      },
      {
        question: {
          en: "What is a simple example of something deep learning can do?",
          es: "¿Cuál es un ejemplo simple de algo que el aprendizaje profundo puede hacer?",
          de: "Was ist ein einfaches Beispiel für etwas das Deep Learning kann?",
          nl: "Wat is een eenvoudig voorbeeld van iets dat deep learning kan doen?"
        },
        options: [
          { en: "Recognize if a photo contains a cat or dog", es: "Reconocer si una foto contiene un gato o perro", de: "Erkennen ob ein Foto eine Katze oder einen Hund enthält", nl: "Herkennen of een foto een kat of hond bevat" },
          { en: "Fix a broken computer", es: "Arreglar una computadora rota", de: "Einen kaputten Computer reparieren", nl: "Een kapotte computer repareren" },
          { en: "Cook dinner", es: "Cocinar la cena", de: "Abendessen kochen", nl: "Avondeten koken" },
          { en: "Drive a car physically", es: "Conducir un auto físicamente", de: "Ein Auto physisch fahren", nl: "Een auto fysiek besturen" }
        ],
        correct: 0,
        explanation: {
          en: "Image classification is one of the most successful applications of deep learning, where models can accurately identify objects, animals, or people in photographs.",
          es: "La clasificación de imágenes es una de las aplicaciones más exitosas del aprendizaje profundo, donde los modelos pueden identificar con precisión objetos, animales o personas en fotografías.",
          de: "Bildklassifikation ist eine der erfolgreichsten Anwendungen von Deep Learning, wo Modelle Objekte, Tiere oder Menschen in Fotografien genau identifizieren können.",
          nl: "Beeldclassificatie is een van de meest succesvolle toepassingen van deep learning, waarbij modellen objecten, dieren of mensen in foto's nauwkeurig kunnen identificeren."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
