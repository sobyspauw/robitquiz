// Deep learning Quiz - Level 6
(function() {
  const level6 = {
    name: {
          "en": "Deep Learning Level 6",
          "es": "Aprendizaje Profundo Nivel 6",
          "de": "Deep Learning Stufe 6",
          "nl": "Deep Learning Level 6"
    },
    questions: [
      {
        question: {
                  "en": "What are Generative Adversarial Networks (GANs) designed to do?",
                  "es": "¿Qué están diseñadas a hacer las Redes Generativas Adversariales (GAN)?",
                  "de": "Wofür sind Generative Adversarial Networks (GANs) entworfen?",
                  "nl": "Waarvoor zijn Generative Adversarial Networks (GANs) ontworpen?"
        },
        options: [
        {
                  "en": "Create networks that are adversarial to humans",
                  "es": "Crear redes que son adversarias a humanos",
                  "de": "Netzwerke erstellen die Menschen gegenüber feindlich sind",
                  "nl": "Netwerken maken die vijandig zijn tegenover mensen"
        },
        {
                  "en": "Generate adversarial attacks against other models",
                  "es": "Generar ataques adversarios contra otros modelos",
                  "de": "Adversarielle Angriffe gegen andere Modelle generieren",
                  "nl": "Adversariële aanvallen genereren tegen andere modellen"
        },
        {
                  "en": "Generate new realistic data by training two competing neural networks",
                  "es": "Generar nuevos datos realistas entrenando dos redes neuronales que compiten",
                  "de": "Neue realistische Daten generieren durch Training zweier konkurrierender neuronaler Netzwerke",
                  "nl": "Nieuwe realistische data genereren door twee concurrerende neurale netwerken te trainen"
        },
        {
                  "en": "Generate alternative network architectures",
                  "es": "Generar arquitecturas de red alternativas",
                  "de": "Alternative Netzwerkarchitekturen generieren",
                  "nl": "Alternatieve netwerkarchitecturen genereren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "GANs consist of a generator creating fake data and a discriminator trying to detect fakes, competing until the generator produces highly realistic synthetic data.",
                  "es": "Las GAN consisten en un generador creando datos falsos y un discriminador tratando de detectar falsificaciones, compitiendo hasta que el generador produce datos sintéticos altamente realistas.",
                  "de": "GANs bestehen aus einem Generator der gefälschte Daten erstellt und einem Diskriminator der Fälschungen zu erkennen versucht, konkurrieren bis der Generator hochrealistische synthetische Daten produziert.",
                  "nl": "GANs bestaan uit een generator die nep data maakt en een discriminator die probeert nep data te detecteren, concurreren totdat de generator zeer realistische synthetische data produceert."
        }
      },
      {
        question: {
                  "en": "What is the transformer architecture's main innovation in deep learning?",
                  "es": "¿Cuál es la principal innovación de la arquitectura transformer en aprendizaje profundo?",
                  "de": "Was ist die Hauptinnovation der Transformer-Architektur in Deep Learning?",
                  "nl": "Wat is de hoofdinnovatie van de transformer architectuur in deep learning?"
        },
        options: [
        {
                  "en": "Using electrical transformers for power efficiency",
                  "es": "Usar transformadores eléctricos para eficiencia energética",
                  "de": "Elektrische Transformatoren für Energieeffizienz verwenden",
                  "nl": "Elektrische transformatoren gebruiken voor energie-efficiëntie"
        },
        {
                  "en": "Transforming data from one format to another",
                  "es": "Transformar datos de un formato a otro",
                  "de": "Daten von einem Format in ein anderes transformieren",
                  "nl": "Data transformeren van het ene formaat naar het andere"
        },
        {
                  "en": "Using self-attention mechanisms to process sequences in parallel instead of sequentially",
                  "es": "Usar mecanismos de auto-atención para procesar secuencias en paralelo en lugar de secuencialmente",
                  "de": "Selbstaufmerksamkeits-Mechanismen verwenden um Sequenzen parallel statt sequenziell zu verarbeiten",
                  "nl": "Zelf-aandacht mechanismen gebruiken om sequenties parallel te verwerken in plaats van sequentieel"
        },
        {
                  "en": "Automatically transforming network architectures",
                  "es": "Transformar automáticamente arquitecturas de red",
                  "de": "Netzwerkarchitekturen automatisch transformieren",
                  "nl": "Netwerkarchitecturen automatisch transformeren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Transformers revolutionized NLP by using self-attention to process all positions in a sequence simultaneously, enabling much faster training and better long-range dependencies.",
                  "es": "Los transformers revolucionaron NLP usando auto-atención para procesar todas las posiciones en una secuencia simultáneamente, permitiendo entrenamiento mucho más rápido y mejores dependencias de largo alcance.",
                  "de": "Transformer revolutionierten NLP durch Selbstaufmerksamkeit um alle Positionen in einer Sequenz gleichzeitig zu verarbeiten, ermöglichen viel schnelleres Training und bessere Langstrecken-Abhängigkeiten.",
                  "nl": "Transformers revolutioneerden NLP door zelf-aandacht te gebruiken om alle posities in een sequentie tegelijkertijd te verwerken, maken veel snellere training en betere lange afstand afhankelijkheden mogelijk."
        }
      },
      {
        question: {
                  "en": "What is residual learning in ResNet architectures?",
                  "es": "¿Qué es el aprendizaje residual en arquitecturas ResNet?",
                  "de": "Was ist residuales Lernen in ResNet-Architekturen?",
                  "nl": "Wat is residueel leren in ResNet architecturen?"
        },
        options: [
        {
                  "en": "Learning what's left after training other networks",
                  "es": "Aprender lo que queda después de entrenar otras redes",
                  "de": "Lernen was nach dem Training anderer Netzwerke übrig bleibt",
                  "nl": "Leren wat overblijft na het trainen van andere netwerken"
        },
        {
                  "en": "Learning from residual errors in the model",
                  "es": "Aprender de errores residuales en el modelo",
                  "de": "Von Restfehlern im Modell lernen",
                  "nl": "Leren van restfouten in het model"
        },
        {
                  "en": "Learning the difference between input and desired output through skip connections",
                  "es": "Aprender la diferencia entre entrada y salida deseada a través de conexiones de salto",
                  "de": "Die Differenz zwischen Eingabe und gewünschter Ausgabe durch Skip-Verbindungen lernen",
                  "nl": "Het verschil leren tussen input en gewenste output door skip verbindingen"
        },
        {
                  "en": "Learning only the remaining unused data",
                  "es": "Aprender solo los datos restantes no utilizados",
                  "de": "Nur die verbleibenden ungenutzten Daten lernen",
                  "nl": "Alleen de resterende ongebruikte data leren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "ResNets use skip connections that allow layers to learn residual mappings, making it easier to train very deep networks by addressing vanishing gradients.",
                  "es": "Las ResNet usan conexiones de salto que permiten a capas aprender mapeos residuales, facilitando entrenar redes muy profundas abordando gradientes que desaparecen.",
                  "de": "ResNets verwenden Skip-Verbindungen die Schichten ermöglichen residuale Abbildungen zu lernen, erleichtern Training sehr tiefer Netzwerke durch Adressierung verschwindender Gradienten.",
                  "nl": "ResNets gebruiken skip verbindingen die lagen toestaan residuele mappings te leren, maken het makkelijker om zeer diepe netwerken te trainen door verdwijnende gradiënten aan te pakken."
        }
      },
      {
        question: {
                  "en": "What is the purpose of variational autoencoders (VAEs)?",
                  "es": "¿Cuál es el propósito de los autocodificadores variacionales (VAE)?",
                  "de": "Was ist der Zweck von Variational Autoencodern (VAEs)?",
                  "nl": "Wat is het doel van variational autoencoders (VAEs)?"
        },
        options: [
        {
                  "en": "Varying the encoding process automatically",
                  "es": "Variar el proceso de codificación automáticamente",
                  "de": "Den Kodierungsprozess automatisch variieren",
                  "nl": "Het coderingsproces automatisch variëren"
        },
        {
                  "en": "Creating variations of existing autoencoders",
                  "es": "Crear variaciones de autocodificadores existentes",
                  "de": "Variationen bestehender Autoencoder erstellen",
                  "nl": "Variaties van bestaande autoencoders maken"
        },
        {
                  "en": "Encoding data with variable compression ratios",
                  "es": "Codificar datos con ratios de compresión variables",
                  "de": "Daten mit variablen Komprimierungsverhältnissen kodieren",
                  "nl": "Data coderen met variabele compressieverhoudingen"
        },
        {
                  "en": "Learning probabilistic latent representations that can generate new data samples",
                  "es": "Aprender representaciones latentes probabilísticas que pueden generar nuevas muestras de datos",
                  "de": "Probabilistische latente Repräsentationen lernen die neue Datenproben generieren können",
                  "nl": "Probabilistische latente representaties leren die nieuwe datasamples kunnen genereren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "VAEs combine autoencoders with probabilistic modeling, learning a continuous latent space that enables generating new data by sampling from learned distributions.",
                  "es": "Los VAE combinan autocodificadores con modelado probabilístico, aprendiendo un espacio latente continuo que permite generar nuevos datos muestreando de distribuciones aprendidas.",
                  "de": "VAEs kombinieren Autoencoder mit probabilistischer Modellierung, lernen einen kontinuierlichen latenten Raum der Generierung neuer Daten durch Sampling aus gelernten Verteilungen ermöglicht.",
                  "nl": "VAEs combineren autoencoders met probabilistische modellering, leren een continue latente ruimte die het genereren van nieuwe data mogelijk maakt door sampling uit geleerde distributies."
        }
      },
      {
        question: {
                  "en": "What is the key innovation of attention mechanisms in neural machine translation?",
                  "es": "¿Cuál es la innovación clave de los mecanismos de atención en traducción automática neuronal?",
                  "de": "Was ist die Schlüsselinnovation von Aufmerksamkeitsmechanismen in neuronaler maschineller Übersetzung?",
                  "nl": "Wat is de belangrijkste innovatie van attention mechanismen in neurale machinevertaling?"
        },
        options: [
        {
                  "en": "Allowing the model to focus on relevant source words when generating each target word",
                  "es": "Permitir al modelo enfocarse en palabras fuente relevantes al generar cada palabra objetivo",
                  "de": "Dem Modell ermöglichen sich auf relevante Quellwörter zu konzentrieren beim Generieren jedes Zielworts",
                  "nl": "Het model toestaan zich te focussen op relevante bronwoorden bij het genereren van elk doelwoord"
        },
        {
                  "en": "Automatically detecting attention patterns in text",
                  "es": "Detectar automáticamente patrones de atención en texto",
                  "de": "Aufmerksamkeitsmuster in Text automatisch erkennen",
                  "nl": "Automatisch aandachtspatronen in tekst detecteren"
        },
        {
                  "en": "Focusing computational resources on difficult translations",
                  "es": "Enfocar recursos computacionales en traducciones difíciles",
                  "de": "Rechenressourcen auf schwierige Übersetzungen fokussieren",
                  "nl": "Computationele bronnen focussen op moeilijke vertalingen"
        },
        {
                  "en": "Making humans pay attention to translation quality",
                  "es": "Hacer que humanos presten atención a la calidad de traducción",
                  "de": "Menschen dazu bringen auf Übersetzungsqualität zu achten",
                  "nl": "Mensen aandacht laten besteden aan vertaalkwaliteit"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Attention mechanisms solve the bottleneck problem of encoder-decoder models by allowing direct access to all source positions, dramatically improving translation quality.",
                  "es": "Los mecanismos de atención resuelven el problema de cuello de botella de modelos codificador-decodificador permitiendo acceso directo a todas las posiciones fuente, mejorando dramáticamente la calidad de traducción.",
                  "de": "Aufmerksamkeitsmechanismen lösen das Engpass-Problem von Encoder-Decoder-Modellen durch direkten Zugang zu allen Quellpositionen, verbessern die Übersetzungsqualität dramatisch.",
                  "nl": "Attention mechanismen lossen het bottleneck probleem van encoder-decoder modellen op door directe toegang tot alle bronposities te bieden, verbeteren vertaalkwaliteit dramatisch."
        }
      },
      {
        question: {
                  "en": "What is the main advantage of DenseNet over traditional CNN architectures?",
                  "es": "¿Cuál es la ventaja principal de DenseNet sobre arquitecturas CNN tradicionales?",
                  "de": "Was ist der Hauptvorteil von DenseNet gegenüber traditionellen CNN-Architekturen?",
                  "nl": "Wat is het hoofdvoordeel van DenseNet ten opzichte van traditionele CNN architecturen?"
        },
        options: [
        {
                  "en": "Higher computational density",
                  "es": "Mayor densidad computacional",
                  "de": "Höhere Rechendichte",
                  "nl": "Hogere computationele dichtheid"
        },
        {
                  "en": "Dense connections between all layers for better feature reuse",
                  "es": "Conexiones densas entre todas las capas para mejor reutilización de características",
                  "de": "Dichte Verbindungen zwischen allen Schichten für bessere Feature-Wiederverwendung",
                  "nl": "Dense verbindingen tussen alle lagen voor betere feature hergebruik"
        },
        {
                  "en": "Dense data storage format",
                  "es": "Formato de almacenamiento de datos denso",
                  "de": "Dichtes Datenspeicherformat",
                  "nl": "Dense data opslagformaat"
        },
        {
                  "en": "Denser weight matrices",
                  "es": "Matrices de peso más densas",
                  "de": "Dichtere Gewichtsmatrizen",
                  "nl": "Dichtere gewichtsmatrices"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "DenseNet connects each layer to every subsequent layer, promoting feature reuse and gradient flow, which reduces parameters while improving performance.",
                  "es": "DenseNet conecta cada capa a todas las capas subsiguientes, promoviendo reutilización de características y flujo de gradientes, reduciendo parámetros mientras mejora rendimiento.",
                  "de": "DenseNet verbindet jede Schicht mit allen nachfolgenden Schichten, fördert Feature-Wiederverwendung und Gradientenfluss, reduziert Parameter während es die Leistung verbessert.",
                  "nl": "DenseNet verbindt elke laag met alle daaropvolgende lagen, bevordert feature hergebruik en gradient flow, reduceert parameters terwijl prestaties verbeteren."
        }
      },
      {
        question: {
                  "en": "What problem do Squeeze-and-Excitation (SE) blocks solve in CNNs?",
                  "es": "¿Qué problema resuelven los bloques Squeeze-and-Excitation (SE) en las CNN?",
                  "de": "Welches Problem lösen Squeeze-and-Excitation (SE) Blöcke in CNNs?",
                  "nl": "Welk probleem lossen Squeeze-and-Excitation (SE) blokken op in CNNs?"
        },
        options: [
        {
                  "en": "Adaptive recalibration of channel-wise feature responses",
                  "es": "Recalibración adaptiva de respuestas de características por canal",
                  "de": "Adaptive Neukalibrierung von kanalweisen Feature-Antworten",
                  "nl": "Adaptieve herkaligbratie van kanaalgewijze feature responses"
        },
        {
                  "en": "Emotional excitement in neural networks",
                  "es": "Excitación emocional en redes neuronales",
                  "de": "Emotionale Erregung in neuronalen Netzwerken",
                  "nl": "Emotionele opwinding in neurale netwerken"
        },
        {
                  "en": "Squeezing data through narrow channels",
                  "es": "Comprimir datos a través de canales estrechos",
                  "de": "Daten durch enge Kanäle pressen",
                  "nl": "Data door smalle kanalen persen"
        },
        {
                  "en": "Physical compression of network weights",
                  "es": "Compresión física de pesos de red",
                  "de": "Physische Kompression von Netzwerkgewichten",
                  "nl": "Fysieke compressie van netwerkgewichten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "SE blocks adaptively recalibrate channel-wise feature responses by explicitly modeling interdependencies between channels, improving representational capacity.",
                  "es": "Los bloques SE recalibran adaptativamente respuestas de características por canal modelando explícitamente interdependencias entre canales, mejorando capacidad representacional.",
                  "de": "SE-Blöcke kalibrieren adaptiv kanalweise Feature-Antworten neu durch explizite Modellierung von Interdependenzen zwischen Kanälen, verbessern Repräsentationskapazität.",
                  "nl": "SE blokken herkalibbreren adaptief kanaalgewijze feature responses door expliciet interdependenties tussen kanalen te modelleren, verbeteren representationele capaciteit."
        }
      },
      {
        question: {
                  "en": "What is the key innovation of EfficientNet architecture?",
                  "es": "¿Cuál es la innovación clave de la arquitectura EfficientNet?",
                  "de": "Was ist die Schlüsselinnovation der EfficientNet-Architektur?",
                  "nl": "Wat is de belangrijkste innovatie van de EfficientNet architectuur?"
        },
        options: [
        {
                  "en": "Efficient memory management",
                  "es": "Gestión eficiente de memoria",
                  "de": "Effiziente Speicherverwaltung",
                  "nl": "Efficiënt geheugen beheer"
        },
        {
                  "en": "Network efficiency optimization",
                  "es": "Optimización de eficiencia de red",
                  "de": "Netzwerk-Effizienz-Optimierung",
                  "nl": "Netwerk efficiëntie optimalisatie"
        },
        {
                  "en": "More efficient hardware utilization",
                  "es": "Utilización de hardware más eficiente",
                  "de": "Effizientere Hardware-Nutzung",
                  "nl": "Efficiëntere hardware benutting"
        },
        {
                  "en": "Compound scaling method for balanced network dimensions",
                  "es": "Método de escalado compuesto para dimensiones de red balanceadas",
                  "de": "Zusammengesetzte Skalierungsmethode für ausgewogene Netzwerkdimensionen",
                  "nl": "Compound scaling methode voor gebalanceerde netwerkdimensies"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "EfficientNet uses compound scaling to uniformly scale network width, depth, and resolution with fixed ratios, achieving better accuracy-efficiency trade-offs.",
                  "es": "EfficientNet usa escalado compuesto para escalar uniformemente ancho, profundidad y resolución de red con ratios fijos, logrando mejores compensaciones precisión-eficiencia.",
                  "de": "EfficientNet verwendet zusammengesetzte Skalierung um Netzwerkbreite, -tiefe und -auflösung gleichmäßig mit festen Verhältnissen zu skalieren, erreicht bessere Genauigkeit-Effizienz-Kompromisse.",
                  "nl": "EfficientNet gebruikt compound scaling om netwerkbreedte, diepte en resolutie uniform te schalen met vaste verhoudingen, behaalt betere nauwkeurigheid-efficiëntie afwegingen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of batch normalization in deep learning?",
                  "es": "¿Cuál es el propósito de la normalización por lotes en aprendizaje profundo?",
                  "de": "Was ist der Zweck der Batch-Normalisierung in Deep Learning?",
                  "nl": "Wat is het doel van batch normalisatie in deep learning?"
        },
        options: [
        {
                  "en": "Create normal distribution of data",
                  "es": "Crear distribución normal de datos",
                  "de": "Normalverteilung von Daten erstellen",
                  "nl": "Normale distributie van data creëren"
        },
        {
                  "en": "Batch process multiple networks",
                  "es": "Procesar por lotes múltiples redes",
                  "de": "Mehrere Netzwerke stapelweise verarbeiten",
                  "nl": "Meerdere netwerken batch-gewijs verwerken"
        },
        {
                  "en": "Stabilize training by normalizing layer inputs",
                  "es": "Estabilizar entrenamiento normalizando entradas de capas",
                  "de": "Training stabilisieren durch Normalisierung von Schichteingaben",
                  "nl": "Training stabiliseren door laag inputs te normaliseren"
        },
        {
                  "en": "Normalize the size of training batches",
                  "es": "Normalizar el tamaño de lotes de entrenamiento",
                  "de": "Die Größe von Trainings-Batches normalisieren",
                  "nl": "De grootte van training batches normaliseren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Batch normalization normalizes inputs to each layer, reducing internal covariate shift and allowing higher learning rates and more stable training.",
                  "es": "La normalización por lotes normaliza entradas a cada capa, reduciendo cambio de covarianza interna y permitiendo tasas de aprendizaje más altas y entrenamiento más estable.",
                  "de": "Batch-Normalisierung normalisiert Eingaben zu jeder Schicht, reduziert interne Kovarianzverschiebung und ermöglicht höhere Lernraten und stabileres Training.",
                  "nl": "Batch normalisatie normaliseert inputs naar elke laag, vermindert interne covariate shift en maakt hogere leerrates en stabielere training mogelijk."
        }
      },
      {
        question: {
                  "en": "What advantage do dilated convolutions provide?",
                  "es": "¿Qué ventaja proporcionan las convoluciones dilatadas?",
                  "de": "Welchen Vorteil bieten dilatierte Faltungen?",
                  "nl": "Welk voordeel bieden dilated convoluties?"
        },
        options: [
        {
                  "en": "Expansion of network capacity",
                  "es": "Expansión de capacidad de red",
                  "de": "Erweiterung der Netzwerkkapazität",
                  "nl": "Uitbreiding van netwerkcapaciteit"
        },
        {
                  "en": "Dilated training time",
                  "es": "Tiempo de entrenamiento dilatado",
                  "de": "Verlängerte Trainingszeit",
                  "nl": "Verlengde trainingstijd"
        },
        {
                  "en": "Increased receptive field without additional parameters",
                  "es": "Campo receptivo aumentado sin parámetros adicionales",
                  "de": "Vergrößertes rezeptives Feld ohne zusätzliche Parameter",
                  "nl": "Vergroot receptief veld zonder extra parameters"
        },
        {
                  "en": "Dilation of image resolution",
                  "es": "Dilatación de resolución de imagen",
                  "de": "Dilatation der Bildauflösung",
                  "nl": "Dilatatie van beeldresolutie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Dilated convolutions insert gaps between kernel elements, expanding the receptive field exponentially while maintaining the same number of parameters.",
                  "es": "Las convoluciones dilatadas insertan espacios entre elementos del kernel, expandiendo el campo receptivo exponencialmente manteniendo el mismo número de parámetros.",
                  "de": "Dilatierte Faltungen fügen Lücken zwischen Kernel-Elementen ein, erweitern das rezeptive Feld exponentiell bei gleicher Parameteranzahl.",
                  "nl": "Dilated convoluties voegen gaten tussen kernel elementen in, breiden het receptieve veld exponentieel uit met hetzelfde aantal parameters."
        }
      },
      {
        question: {
                  "en": "What is the key innovation of BERT (Bidirectional Encoder Representations from Transformers)?",
                  "es": "¿Cuál es la innovación clave de BERT (Representaciones de Codificador Bidireccional de Transformers)?",
                  "de": "Was ist die Schlüsselinnovation von BERT (Bidirectional Encoder Representations from Transformers)?",
                  "nl": "Wat is de belangrijkste innovatie van BERT (Bidirectional Encoder Representations from Transformers)?"
        },
        options: [
        {
                  "en": "Bidirectional context understanding through masked language modeling",
                  "es": "Comprensión de contexto bidireccional a través de modelado de lenguaje enmascarado",
                  "de": "Bidirektionales Kontextverständnis durch maskierte Sprachmodellierung",
                  "nl": "Bidirectioneel contextbegrip door gemaskeerde taalmodellering"
        },
        {
                  "en": "Bert-specific training protocols",
                  "es": "Protocolos de entrenamiento específicos de Bert",
                  "de": "Bert-spezifische Trainingsprotokolle",
                  "nl": "Bert-specifieke trainingsprotocollen"
        },
        {
                  "en": "Binary encoding of transformer outputs",
                  "es": "Codificación binaria de salidas de transformer",
                  "de": "Binäre Kodierung von Transformer-Ausgaben",
                  "nl": "Binaire codering van transformer outputs"
        },
        {
                  "en": "Better encoding than previous models",
                  "es": "Mejor codificación que modelos anteriores",
                  "de": "Bessere Kodierung als vorherige Modelle",
                  "nl": "Betere codering dan vorige modellen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "BERT revolutionized NLP by training bidirectionally, using context from both directions to better understand word meanings in context.",
                  "es": "BERT revolucionó NLP entrenando bidireccionalmente, usando contexto de ambas direcciones para entender mejor significados de palabras en contexto.",
                  "de": "BERT revolutionierte NLP durch bidirektionales Training, nutzt Kontext aus beiden Richtungen um Wortbedeutungen im Kontext besser zu verstehen.",
                  "nl": "BERT revolutioneerde NLP door bidirectioneel te trainen, gebruikt context uit beide richtingen om woordbetekenissen in context beter te begrijpen."
        }
      },
      {
        question: {
                  "en": "What is diffusion modeling in generative AI?",
                  "es": "¿Qué es el modelado de difusión en IA generativa?",
                  "de": "Was ist Diffusionsmodellierung in generativer KI?",
                  "nl": "Wat is diffusiemodellering in generatieve AI?"
        },
        options: [
        {
                  "en": "Diffusing model parameters across layers",
                  "es": "Difundir parámetros de modelo a través de capas",
                  "de": "Modellparameter über Schichten diffundieren",
                  "nl": "Modelparameters verspreiden over lagen"
        },
        {
                  "en": "Creating diffuse image representations",
                  "es": "Crear representaciones de imagen difusas",
                  "de": "Diffuse Bildrepräsentationen erstellen",
                  "nl": "Diffuse beeldrepresentaties creëren"
        },
        {
                  "en": "Learning to reverse a noise-adding process to generate high-quality samples",
                  "es": "Aprender a revertir un proceso de adición de ruido para generar muestras de alta calidad",
                  "de": "Lernen einen Rausch-Hinzufügungsprozess umzukehren um hochqualitative Proben zu generieren",
                  "nl": "Leren om een ruistoevoegingsproces om te keren om hoogkwalitatieve samples te genereren"
        },
        {
                  "en": "Spreading training data diffusely",
                  "es": "Esparcir datos de entrenamiento difusamente",
                  "de": "Trainingsdaten diffus verbreiten",
                  "nl": "Trainingsdata diffuus verspreiden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Diffusion models like DALL-E 2 and Stable Diffusion gradually add noise to data during training, then learn to reverse this process for generation.",
                  "es": "Los modelos de difusión como DALL-E 2 y Stable Diffusion añaden gradualmente ruido a datos durante entrenamiento, luego aprenden a revertir este proceso para generación.",
                  "de": "Diffusionsmodelle wie DALL-E 2 und Stable Diffusion fügen während des Trainings graduell Rauschen zu Daten hinzu, lernen dann diesen Prozess für Generierung umzukehren.",
                  "nl": "Diffusiemodellen zoals DALL-E 2 en Stable Diffusion voegen geleidelijk ruis toe aan data tijdens training, leren dan dit proces om te keren voor generatie."
        }
      },
      {
        question: {
                  "en": "What is the purpose of self-supervised learning in modern deep learning?",
                  "es": "¿Cuál es el propósito del aprendizaje auto-supervisado en aprendizaje profundo moderno?",
                  "de": "Was ist der Zweck von selbstüberwachtem Lernen in modernem Deep Learning?",
                  "nl": "Wat is het doel van zelf-gesuperviseerd leren in modern deep learning?"
        },
        options: [
        {
                  "en": "Learning representations from unlabeled data by creating pretext tasks",
                  "es": "Aprender representaciones de datos sin etiquetar creando tareas de pretexto",
                  "de": "Repräsentationen aus unbeschrifteten Daten lernen durch Erstellen von Vorwand-Aufgaben",
                  "nl": "Representaties leren van ongelabelde data door pretext taken te creëren"
        },
        {
                  "en": "Supervising the learning process automatically",
                  "es": "Supervisar el proceso de aprendizaje automáticamente",
                  "de": "Den Lernprozess automatisch überwachen",
                  "nl": "Het leerproces automatisch superviseren"
        },
        {
                  "en": "Learning to supervise other models",
                  "es": "Aprender a supervisar otros modelos",
                  "de": "Lernen andere Modelle zu überwachen",
                  "nl": "Leren om andere modellen te superviseren"
        },
        {
                  "en": "Self-training without external data",
                  "es": "Auto-entrenamiento sin datos externos",
                  "de": "Selbsttraining ohne externe Daten",
                  "nl": "Zelftraining zonder externe data"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Self-supervised learning exploits inherent structure in data (like predicting next words or image patches) to learn useful representations without manual labels.",
                  "es": "El aprendizaje auto-supervisado explota estructura inherente en datos (como predecir siguientes palabras o parches de imagen) para aprender representaciones útiles sin etiquetas manuales.",
                  "de": "Selbstüberwachtes Lernen nutzt inhärente Struktur in Daten (wie Vorhersage nächster Wörter oder Bildpatches) um nützliche Repräsentationen ohne manuelle Labels zu lernen.",
                  "nl": "Zelf-gesuperviseerd leren benut inherente structuur in data (zoals voorspellen van volgende woorden of beeldpatches) om nuttige representaties te leren zonder handmatige labels."
        }
      },
      {
        question: {
                  "en": "What is the significance of Vision Transformers (ViTs) in computer vision?",
                  "es": "¿Cuál es la significancia de Vision Transformers (ViTs) en visión por computadora?",
                  "de": "Was ist die Bedeutung von Vision Transformers (ViTs) in Computer Vision?",
                  "nl": "Wat is de betekenis van Vision Transformers (ViTs) in computer vision?"
        },
        options: [
        {
                  "en": "Creating visual interfaces for transformers",
                  "es": "Crear interfaces visuales para transformers",
                  "de": "Visuelle Schnittstellen für Transformer erstellen",
                  "nl": "Visuele interfaces voor transformers creëren"
        },
        {
                  "en": "Transforming vision research methodologies",
                  "es": "Transformar metodologías de investigación de visión",
                  "de": "Vision-Forschungsmethodologien transformieren",
                  "nl": "Vision onderzoeksmethodologieën transformeren"
        },
        {
                  "en": "Successfully applying transformer architecture to image classification by treating image patches as tokens",
                  "es": "Aplicar exitosamente arquitectura transformer a clasificación de imágenes tratando parches de imagen como tokens",
                  "de": "Erfolgreiche Anwendung der Transformer-Architektur auf Bildklassifikation durch Behandlung von Bildpatches als Tokens",
                  "nl": "Succesvolle toepassing van transformer architectuur op beeldclassificatie door beeldpatches als tokens te behandelen"
        },
        {
                  "en": "Improving visual quality of transformer outputs",
                  "es": "Mejorar calidad visual de salidas de transformer",
                  "de": "Visuelle Qualität von Transformer-Ausgaben verbessern",
                  "nl": "Visuele kwaliteit van transformer outputs verbeteren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "ViTs demonstrate that transformers can match or exceed CNNs in image tasks when sufficient training data is available, changing computer vision paradigms.",
                  "es": "Los ViTs demuestran que transformers pueden igualar o superar CNNs en tareas de imagen cuando hay suficientes datos de entrenamiento disponibles, cambiando paradigmas de visión por computadora.",
                  "de": "ViTs demonstrieren dass Transformer CNNs in Bildaufgaben erreichen oder übertreffen können wenn ausreichend Trainingsdaten verfügbar sind, ändern Computer Vision Paradigmen.",
                  "nl": "ViTs tonen aan dat transformers CNNs kunnen evenaren of overtreffen in beeldtaken wanneer voldoende trainingsdata beschikbaar is, veranderen computer vision paradigma's."
        }
      },
      {
        question: {
                  "en": "What is neural style transfer and how does it work?",
                  "es": "¿Qué es la transferencia de estilo neuronal y cómo funciona?",
                  "de": "Was ist Neural Style Transfer und wie funktioniert es?",
                  "nl": "Wat is neural style transfer en hoe werkt het?"
        },
        options: [
        {
                  "en": "Combining content from one image with artistic style from another using CNN feature representations",
                  "es": "Combinar contenido de una imagen con estilo artístico de otra usando representaciones de características CNN",
                  "de": "Inhalt von einem Bild mit künstlerischem Stil von einem anderen kombinieren unter Verwendung von CNN-Feature-Repräsentationen",
                  "nl": "Inhoud van één beeld combineren met artistieke stijl van een ander met behulp van CNN feature representaties"
        },
        {
                  "en": "Styling neural network visualizations",
                  "es": "Estilizar visualizaciones de redes neuronales",
                  "de": "Neuronale Netzwerk-Visualisierungen stylen",
                  "nl": "Neurale netwerk visualisaties stylen"
        },
        {
                  "en": "Learning different artistic styles separately",
                  "es": "Aprender diferentes estilos artísticos por separado",
                  "de": "Verschiedene künstlerische Stile separat lernen",
                  "nl": "Verschillende artistieke stijlen apart leren"
        },
        {
                  "en": "Transferring neural network styles between architectures",
                  "es": "Transferir estilos de red neuronal entre arquitecturas",
                  "de": "Neuronale Netzwerkstile zwischen Architekturen übertragen",
                  "nl": "Neurale netwerkstijlen tussen architecturen overdragen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Neural style transfer optimizes an image to match content features from one image while matching style features (textures, colors) from another.",
                  "es": "La transferencia de estilo neuronal optimiza una imagen para igualar características de contenido de una imagen mientras iguala características de estilo (texturas, colores) de otra.",
                  "de": "Neural Style Transfer optimiert ein Bild um Inhalts-Features von einem Bild zu entsprechen während Stil-Features (Texturen, Farben) von einem anderen entsprochen werden.",
                  "nl": "Neural style transfer optimaliseert een beeld om content features van één beeld te matchen terwijl style features (texturen, kleuren) van een ander worden gematcht."
        }
      },
      {
        question: {
                  "en": "What is the main advantage of MobileNets for mobile applications?",
                  "es": "¿Cuál es la ventaja principal de MobileNets para aplicaciones móviles?",
                  "de": "Was ist der Hauptvorteil von MobileNets für mobile Anwendungen?",
                  "nl": "Wat is het hoofdvoordeel van MobileNets voor mobiele toepassingen?"
        },
        options: [
        {
                  "en": "Depthwise separable convolutions that dramatically reduce computational cost",
                  "es": "Convoluciones separables en profundidad que reducen dramáticamente el costo computacional",
                  "de": "Tiefenweise trennbare Faltungen die Rechenkosten dramatisch reduzieren",
                  "nl": "Depthwise separable convoluties die computationele kosten dramatisch verminderen"
        },
        {
                  "en": "Optimized for mobile data networks",
                  "es": "Optimizado para redes de datos móviles",
                  "de": "Optimiert für mobile Datennetzwerke",
                  "nl": "Geoptimaliseerd voor mobiele datanetwerken"
        },
        {
                  "en": "Mobile-specific network architectures",
                  "es": "Arquitecturas de red específicas para móviles",
                  "de": "Mobile-spezifische Netzwerkarchitekturen",
                  "nl": "Mobiel-specifieke netwerkarchitecturen"
        },
        {
                  "en": "Better mobile device compatibility",
                  "es": "Mejor compatibilidad con dispositivos móviles",
                  "de": "Bessere Kompatibilität mit mobilen Geräten",
                  "nl": "Betere compatibiliteit met mobiele apparaten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "MobileNets use depthwise separable convolutions to achieve similar accuracy to traditional CNNs with 8-9x fewer parameters and computations.",
                  "es": "MobileNets usan convoluciones separables en profundidad para lograr precisión similar a CNNs tradicionales con 8-9x menos parámetros y cálculos.",
                  "de": "MobileNets verwenden tiefenweise trennbare Faltungen um ähnliche Genauigkeit wie traditionelle CNNs mit 8-9x weniger Parametern und Berechnungen zu erreichen.",
                  "nl": "MobileNets gebruiken depthwise separable convoluties om vergelijkbare nauwkeurigheid te bereiken als traditionele CNNs met 8-9x minder parameters en berekeningen."
        }
      },
      {
        question: {
                  "en": "What is the key innovation of Graph Neural Networks (GNNs)?",
                  "es": "¿Cuál es la innovación clave de las Redes Neuronales de Grafos (GNN)?",
                  "de": "Was ist die Schlüsselinnovation von Graph Neural Networks (GNNs)?",
                  "nl": "Wat is de belangrijkste innovatie van Graph Neural Networks (GNNs)?"
        },
        options: [
        {
                  "en": "Learning on non-Euclidean graph-structured data through message passing",
                  "es": "Aprender en datos estructurados en grafos no-euclidianos a través de paso de mensajes",
                  "de": "Lernen auf nicht-euklidischen graph-strukturierten Daten durch Nachrichtenweitergabe",
                  "nl": "Leren op niet-Euclidische graaf-gestructureerde data via message passing"
        },
        {
                  "en": "Creating neural networks that look like graphs",
                  "es": "Crear redes neuronales que parecen grafos",
                  "de": "Neuronale Netzwerke erstellen die wie Graphen aussehen",
                  "nl": "Neurale netwerken maken die eruitzien als grafen"
        },
        {
                  "en": "Graph-based optimization algorithms",
                  "es": "Algoritmos de optimización basados en grafos",
                  "de": "Graph-basierte Optimierungsalgorithmen",
                  "nl": "Graaf-gebaseerde optimalisatie algoritmes"
        },
        {
                  "en": "Graphical representation of neural networks",
                  "es": "Representación gráfica de redes neuronales",
                  "de": "Grafische Darstellung neuronaler Netzwerke",
                  "nl": "Grafische weergave van neurale netwerken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "GNNs extend deep learning to graph domains like social networks, molecules, and knowledge graphs by aggregating information from node neighborhoods.",
                  "es": "Las GNN extienden el aprendizaje profundo a dominios de grafos como redes sociales, moléculas y grafos de conocimiento agregando información de vecindarios de nodos.",
                  "de": "GNNs erweitern Deep Learning auf Graph-Domänen wie soziale Netzwerke, Moleküle und Wissensgraphen durch Aggregation von Informationen aus Knoten-Nachbarschaften.",
                  "nl": "GNNs breiden deep learning uit naar graaf domeinen zoals sociale netwerken, moleculen en kennisgrafen door informatie uit knooppunt buurten te aggregeren."
        }
      },
      {
        question: {
                  "en": "What is the purpose of normalization flows in generative modeling?",
                  "es": "¿Cuál es el propósito de los flujos de normalización en modelado generativo?",
                  "de": "Was ist der Zweck von Normalisierungsflüssen in generativer Modellierung?",
                  "nl": "Wat is het doel van normalisatie flows in generatieve modellering?"
        },
        options: [
        {
                  "en": "Normalizing data flow through networks",
                  "es": "Normalizar flujo de datos a través de redes",
                  "de": "Datenfluss durch Netzwerke normalisieren",
                  "nl": "Datastroom door netwerken normaliseren"
        },
        {
                  "en": "Learning invertible transformations to map complex distributions to simple ones",
                  "es": "Aprender transformaciones invertibles para mapear distribuciones complejas a simples",
                  "de": "Invertierbare Transformationen lernen um komplexe Verteilungen auf einfache abzubilden",
                  "nl": "Inverteerbare transformaties leren om complexe distributies naar eenvoudige af te beelden"
        },
        {
                  "en": "Creating normal distribution flows",
                  "es": "Crear flujos de distribución normal",
                  "de": "Normalverteilungsflüsse erstellen",
                  "nl": "Normale distributie flows creëren"
        },
        {
                  "en": "Flow control in neural architectures",
                  "es": "Control de flujo en arquitecturas neuronales",
                  "de": "Flusskontrolle in neuronalen Architekturen",
                  "nl": "Flow control in neurale architecturen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Normalizing flows enable exact likelihood computation and generation by learning reversible mappings between data and latent distributions.",
                  "es": "Los flujos de normalización permiten computación exacta de verosimilitud y generación aprendiendo mapeos reversibles entre datos y distribuciones latentes.",
                  "de": "Normalisierungsflüsse ermöglichen exakte Likelihood-Berechnung und Generierung durch Lernen reversibler Abbildungen zwischen Daten und latenten Verteilungen.",
                  "nl": "Normalisatie flows maken exacte likelihood berekening en generatie mogelijk door reversibele mappings tussen data en latente distributies te leren."
        }
      },
      {
        question: {
                  "en": "What is contrastive learning and why is it effective?",
                  "es": "¿Qué es el aprendizaje contrastivo y por qué es efectivo?",
                  "de": "Was ist kontrastives Lernen und warum ist es effektiv?",
                  "nl": "Wat is contrastief leren en waarom is het effectief?"
        },
        options: [
        {
                  "en": "Learning representations by distinguishing between similar and dissimilar data pairs",
                  "es": "Aprender representaciones distinguiendo entre pares de datos similares y disímiles",
                  "de": "Repräsentationen lernen durch Unterscheidung zwischen ähnlichen und unähnlichen Datenpaaren",
                  "nl": "Representaties leren door onderscheid te maken tussen vergelijkbare en verschillende dataparen"
        },
        {
                  "en": "Learning from contrasting opinions in data",
                  "es": "Aprender de opiniones contrastantes en datos",
                  "de": "Von kontrastierenden Meinungen in Daten lernen",
                  "nl": "Leren van contrasterende meningen in data"
        },
        {
                  "en": "Learning by contrasting different model architectures",
                  "es": "Aprender contrastando diferentes arquitecturas de modelo",
                  "de": "Lernen durch Kontrastierung verschiedener Modellarchitekturen",
                  "nl": "Leren door verschillende modelarchitecturen te contrasteren"
        },
        {
                  "en": "Contrasting prediction accuracy across models",
                  "es": "Contrastar precisión de predicción entre modelos",
                  "de": "Vorhersagegenauigkeit zwischen Modellen kontrastieren",
                  "nl": "Voorspellingsnauwkeurigheid tussen modellen contrasteren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Contrastive learning like SimCLR learns rich representations by pulling similar samples together and pushing dissimilar ones apart in embedding space.",
                  "es": "El aprendizaje contrastivo como SimCLR aprende representaciones ricas atrayendo muestras similares y empujando las disímiles en espacio de embedding.",
                  "de": "Kontrastives Lernen wie SimCLR lernt reiche Repräsentationen durch Zusammenziehen ähnlicher Proben und Auseinanderschieben unähnlicher im Embedding-Raum.",
                  "nl": "Contrastief leren zoals SimCLR leert rijke representaties door vergelijkbare samples samen te trekken en verschillende uit elkaar te duwen in embedding ruimte."
        }
      },
      {
        question: {
                  "en": "What is the main purpose of dropout in deep neural networks?",
                  "es": "¿Cuál es el propósito principal del dropout en redes neuronales profundas?",
                  "de": "Was ist der Hauptzweck von Dropout in tiefen neuronalen Netzwerken?",
                  "nl": "Wat is het hoofddoel van dropout in diepe neurale netwerken?"
        },
        options: [
        {
                  "en": "Dropping out poorly performing layers",
                  "es": "Eliminar capas de bajo rendimiento",
                  "de": "Schlecht performende Schichten entfernen",
                  "nl": "Slecht presterende lagen verwijderen"
        },
        {
                  "en": "Reducing network size permanently",
                  "es": "Reducir permanentemente el tamaño de red",
                  "de": "Netzwerkgröße dauerhaft reduzieren",
                  "nl": "Netwerkgrootte permanent verminderen"
        },
        {
                  "en": "Preventing overfitting by randomly deactivating neurons during training",
                  "es": "Prevenir sobreajuste desactivando aleatoriamente neuronas durante entrenamiento",
                  "de": "Overfitting verhindern durch zufällige Deaktivierung von Neuronen während des Trainings",
                  "nl": "Overfitting voorkomen door willekeurig neuronen te deactiveren tijdens training"
        },
        {
                  "en": "Dropping connections between layers",
                  "es": "Eliminar conexiones entre capas",
                  "de": "Verbindungen zwischen Schichten fallen lassen",
                  "nl": "Verbindingen tussen lagen laten vallen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Dropout randomly sets a fraction of input units to 0 during training, which prevents neurons from co-adapting too much and reduces overfitting.",
                  "es": "Dropout establece aleatoriamente una fracción de unidades de entrada a 0 durante entrenamiento, lo que previene que neuronas se co-adapten demasiado y reduce sobreajuste.",
                  "de": "Dropout setzt zufällig einen Bruchteil der Eingabeeinheiten auf 0 während des Trainings, was verhindert dass Neuronen sich zu stark co-adaptieren und Overfitting reduziert.",
                  "nl": "Dropout zet willekeurig een fractie van input units op 0 tijdens training, wat voorkomt dat neuronen te veel co-adapteren en overfitting vermindert."
        }
      },
      {
        question: {
                  "en": "What is the discriminator's role in a GAN?",
                  "es": "¿Cuál es el papel del discriminador en una GAN?",
                  "de": "Was ist die Rolle des Diskriminators in einem GAN?",
                  "nl": "Wat is de rol van de discriminator in een GAN?"
        },
        options: [
        {
                  "en": "Generate discriminating features",
                  "es": "Generar características discriminantes",
                  "de": "Diskriminierende Merkmale generieren",
                  "nl": "Discriminerende kenmerken genereren"
        },
        {
                  "en": "Distinguish between real and generated samples to provide training signal to the generator",
                  "es": "Distinguir entre muestras reales y generadas para proporcionar señal de entrenamiento al generador",
                  "de": "Zwischen echten und generierten Proben unterscheiden um Trainingssignal an Generator zu liefern",
                  "nl": "Onderscheid maken tussen echte en gegenereerde samples om trainingssignaal aan de generator te geven"
        },
        {
                  "en": "Filter out discriminatory biases in data",
                  "es": "Filtrar sesgos discriminatorios en datos",
                  "de": "Diskriminierende Verzerrungen in Daten herausfiltern",
                  "nl": "Discriminerende vooroordelen uit data filteren"
        },
        {
                  "en": "Discriminate against poorly performing networks",
                  "es": "Discriminar contra redes de bajo rendimiento",
                  "de": "Gegen schlecht performende Netzwerke diskriminieren",
                  "nl": "Discrimineren tegen slecht presterende netwerken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The discriminator acts as a learned loss function, training to classify real vs fake while the generator tries to fool it, creating an adversarial training dynamic.",
                  "es": "El discriminador actúa como una función de pérdida aprendida, entrenando para clasificar real vs falso mientras el generador intenta engañarlo, creando una dinámica de entrenamiento adversaria.",
                  "de": "Der Diskriminator fungiert als gelernte Verlustfunktion, trainiert um real vs fake zu klassifizieren während der Generator versucht ihn zu täuschen, schafft eine adversarielle Trainingsdynamik.",
                  "nl": "De discriminator fungeert als een geleerde loss functie, traint om echt vs nep te classificeren terwijl de generator probeert hem te misleiden, creëert een adversariële trainingsdynamiek."
        }
      },
      {
        question: {
                  "en": "What is mode collapse in GANs?",
                  "es": "¿Qué es el colapso de modo en GANs?",
                  "de": "Was ist Mode Collapse in GANs?",
                  "nl": "Wat is mode collapse in GANs?"
        },
        options: [
        {
                  "en": "When the generator produces limited variety, failing to capture the full diversity of the training distribution",
                  "es": "Cuando el generador produce variedad limitada, fallando en capturar la diversidad completa de la distribución de entrenamiento",
                  "de": "Wenn der Generator begrenzte Vielfalt produziert, versagt die volle Diversität der Trainingsverteilung zu erfassen",
                  "nl": "Wanneer de generator beperkte variëteit produceert, faalt om de volledige diversiteit van de trainingsdistributie vast te leggen"
        },
        {
                  "en": "The training mode collapsing unexpectedly",
                  "es": "El modo de entrenamiento colapsando inesperadamente",
                  "de": "Der Trainingsmodus bricht unerwartet zusammen",
                  "nl": "De trainingsmodus stort onverwacht in"
        },
        {
                  "en": "Multiple modes merging into one",
                  "es": "Múltiples modos fusionándose en uno",
                  "de": "Mehrere Modi verschmelzen zu einem",
                  "nl": "Meerdere modes fuseren tot één"
        },
        {
                  "en": "The model collapsing due to computational errors",
                  "es": "El modelo colapsando debido a errores computacionales",
                  "de": "Das Modell kollabiert aufgrund von Rechenfehlern",
                  "nl": "Het model stort in door computationele fouten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Mode collapse occurs when the generator finds a limited set of samples that fool the discriminator and stops exploring the full data distribution, producing repetitive outputs.",
                  "es": "El colapso de modo ocurre cuando el generador encuentra un conjunto limitado de muestras que engañan al discriminador y deja de explorar la distribución de datos completa, produciendo salidas repetitivas.",
                  "de": "Mode Collapse tritt auf wenn der Generator eine begrenzte Menge von Proben findet die den Diskriminator täuschen und aufhört die volle Datenverteilung zu erkunden, produziert repetitive Ausgaben.",
                  "nl": "Mode collapse treedt op wanneer de generator een beperkte set samples vindt die de discriminator misleiden en stopt met het verkennen van de volledige datadistributie, produceert repetitieve outputs."
        }
      },
      {
        question: {
                  "en": "What is the generator's objective in a GAN?",
                  "es": "¿Cuál es el objetivo del generador en una GAN?",
                  "de": "Was ist das Ziel des Generators in einem GAN?",
                  "nl": "Wat is het doel van de generator in een GAN?"
        },
        options: [
        {
                  "en": "Generate as many samples as possible",
                  "es": "Generar tantas muestras como sea posible",
                  "de": "So viele Proben wie möglich generieren",
                  "nl": "Zo veel mogelijk samples genereren"
        },
        {
                  "en": "Generate training data for other models",
                  "es": "Generar datos de entrenamiento para otros modelos",
                  "de": "Trainingsdaten für andere Modelle generieren",
                  "nl": "Trainingsdata genereren voor andere modellen"
        },
        {
                  "en": "Generate power for the discriminator",
                  "es": "Generar potencia para el discriminador",
                  "de": "Energie für den Diskriminator generieren",
                  "nl": "Energie genereren voor de discriminator"
        },
        {
                  "en": "Create realistic synthetic samples that fool the discriminator into classifying them as real",
                  "es": "Crear muestras sintéticas realistas que engañen al discriminador para clasificarlas como reales",
                  "de": "Realistische synthetische Proben erstellen die den Diskriminator täuschen sie als echt zu klassifizieren",
                  "nl": "Realistische synthetische samples creëren die de discriminator misleiden om ze als echt te classificeren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The generator learns to map random noise to realistic data samples by minimizing the discriminator's ability to distinguish its outputs from real data.",
                  "es": "El generador aprende a mapear ruido aleatorio a muestras de datos realistas minimizando la capacidad del discriminador de distinguir sus salidas de datos reales.",
                  "de": "Der Generator lernt zufälliges Rauschen auf realistische Datenproben abzubilden durch Minimierung der Fähigkeit des Diskriminators seine Ausgaben von echten Daten zu unterscheiden.",
                  "nl": "De generator leert om willekeurige ruis te mappen naar realistische datasamples door het vermogen van de discriminator om zijn outputs van echte data te onderscheiden te minimaliseren."
        }
      },
      {
        question: {
                  "en": "What is positional encoding in transformers?",
                  "es": "¿Qué es la codificación posicional en transformers?",
                  "de": "Was ist Positionskodierung in Transformern?",
                  "nl": "Wat is positional encoding in transformers?"
        },
        options: [
        {
                  "en": "Positioning the encoder in the architecture",
                  "es": "Posicionar el codificador en la arquitectura",
                  "de": "Den Encoder in der Architektur positionieren",
                  "nl": "De encoder in de architectuur positioneren"
        },
        {
                  "en": "Encoding the physical position of data in memory",
                  "es": "Codificar la posición física de datos en memoria",
                  "de": "Physische Position von Daten im Speicher kodieren",
                  "nl": "Fysieke positie van data in geheugen coderen"
        },
        {
                  "en": "Encoding spatial positions in images",
                  "es": "Codificar posiciones espaciales en imágenes",
                  "de": "Räumliche Positionen in Bildern kodieren",
                  "nl": "Ruimtelijke posities in beelden coderen"
        },
        {
                  "en": "Adding position information to embeddings since transformers process sequences in parallel without inherent order",
                  "es": "Añadir información de posición a embeddings ya que transformers procesan secuencias en paralelo sin orden inherente",
                  "de": "Positionsinformationen zu Embeddings hinzufügen da Transformer Sequenzen parallel ohne inhärente Ordnung verarbeiten",
                  "nl": "Positie-informatie toevoegen aan embeddings omdat transformers sequenties parallel verwerken zonder inherente volgorde"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Since transformers lack recurrence, positional encodings inject sequence order information using sinusoidal functions or learned embeddings, allowing the model to understand token positions.",
                  "es": "Como los transformers carecen de recurrencia, las codificaciones posicionales inyectan información de orden de secuencia usando funciones sinusoidales o embeddings aprendidos, permitiendo al modelo entender posiciones de tokens.",
                  "de": "Da Transformer keine Rekurrenz haben, injizieren Positionskodierungen Sequenzordnungsinformationen mittels Sinusfunktionen oder gelernten Embeddings, ermöglichen dem Modell Token-Positionen zu verstehen.",
                  "nl": "Omdat transformers geen recurrentie hebben, injecteren positional encodings sequentie volgorde informatie met behulp van sinusoïdale functies of geleerde embeddings, stellen het model in staat token posities te begrijpen."
        }
      },
      {
        question: {
                  "en": "What is multi-head attention in transformers?",
                  "es": "¿Qué es la atención multi-cabeza en transformers?",
                  "de": "Was ist Multi-Head Attention in Transformern?",
                  "nl": "Wat is multi-head attention in transformers?"
        },
        options: [
        {
                  "en": "Running multiple attention mechanisms in parallel to capture different representation subspaces",
                  "es": "Ejecutar múltiples mecanismos de atención en paralelo para capturar diferentes subespacios de representación",
                  "de": "Mehrere Aufmerksamkeitsmechanismen parallel laufen lassen um verschiedene Repräsentations-Unterräume zu erfassen",
                  "nl": "Meerdere attention mechanismen parallel uitvoeren om verschillende representatie subruimtes vast te leggen"
        },
        {
                  "en": "Distributed attention across multiple devices",
                  "es": "Atención distribuida a través de múltiples dispositivos",
                  "de": "Verteilte Aufmerksamkeit über mehrere Geräte",
                  "nl": "Verdeelde aandacht over meerdere apparaten"
        },
        {
                  "en": "Paying attention to multiple tasks simultaneously",
                  "es": "Prestar atención a múltiples tareas simultáneamente",
                  "de": "Mehreren Aufgaben gleichzeitig Aufmerksamkeit schenken",
                  "nl": "Aandacht besteden aan meerdere taken tegelijkertijd"
        },
        {
                  "en": "Attention mechanism with multiple heads in the network",
                  "es": "Mecanismo de atención con múltiples cabezas en la red",
                  "de": "Aufmerksamkeitsmechanismus mit mehreren Köpfen im Netzwerk",
                  "nl": "Attention mechanisme met meerdere koppen in het netwerk"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions, enriching the learned representations.",
                  "es": "La atención multi-cabeza permite al modelo atender conjuntamente información de diferentes subespacios de representación en diferentes posiciones, enriqueciendo las representaciones aprendidas.",
                  "de": "Multi-Head Attention ermöglicht dem Modell gemeinsam Informationen aus verschiedenen Repräsentations-Unterräumen an verschiedenen Positionen zu beachten, bereichert die gelernten Repräsentationen.",
                  "nl": "Multi-head attention stelt het model in staat om gezamenlijk aandacht te besteden aan informatie uit verschillende representatie subruimtes op verschillende posities, verrijkt de geleerde representaties."
        }
      },
      {
        question: {
                  "en": "What is the Wasserstein GAN (WGAN) improvement over vanilla GANs?",
                  "es": "¿Qué mejora ofrece Wasserstein GAN (WGAN) sobre GANs vanilla?",
                  "de": "Was ist die Wasserstein GAN (WGAN) Verbesserung gegenüber Vanilla GANs?",
                  "nl": "Wat is de Wasserstein GAN (WGAN) verbetering ten opzichte van vanilla GANs?"
        },
        options: [
        {
                  "en": "Washing away gradient problems",
                  "es": "Lavar problemas de gradiente",
                  "de": "Gradientenprobleme wegwaschen",
                  "nl": "Gradiënt problemen wegwassen"
        },
        {
                  "en": "More stable training using Wasserstein distance instead of Jensen-Shannon divergence",
                  "es": "Entrenamiento más estable usando distancia Wasserstein en lugar de divergencia Jensen-Shannon",
                  "de": "Stabileres Training mit Wasserstein-Distanz anstatt Jensen-Shannon-Divergenz",
                  "nl": "Stabielere training met Wasserstein afstand in plaats van Jensen-Shannon divergentie"
        },
        {
                  "en": "Using water-based cooling for GPUs",
                  "es": "Usar enfriamiento basado en agua para GPUs",
                  "de": "Wasserbasierte Kühlung für GPUs verwenden",
                  "nl": "Watergebaseerde koeling voor GPU's gebruiken"
        },
        {
                  "en": "Generating wavy patterns better",
                  "es": "Generar mejores patrones ondulados",
                  "de": "Wellige Muster besser generieren",
                  "nl": "Golvende patronen beter genereren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "WGAN uses Wasserstein distance as the loss function, providing more meaningful gradients even when discriminator is trained to optimality, reducing mode collapse and training instability.",
                  "es": "WGAN usa distancia Wasserstein como función de pérdida, proporcionando gradientes más significativos incluso cuando el discriminador está entrenado a optimalidad, reduciendo colapso de modo e inestabilidad de entrenamiento.",
                  "de": "WGAN verwendet Wasserstein-Distanz als Verlustfunktion, bietet bedeutungsvollere Gradienten selbst wenn Diskriminator optimal trainiert ist, reduziert Mode Collapse und Trainingsinstabilität.",
                  "nl": "WGAN gebruikt Wasserstein afstand als loss functie, biedt meer betekenisvolle gradiënten zelfs wanneer discriminator optimaal getraind is, vermindert mode collapse en trainingsinstabiliteit."
        }
      },
      {
        question: {
                  "en": "What is the purpose of the feed-forward network in transformer layers?",
                  "es": "¿Cuál es el propósito de la red feed-forward en capas transformer?",
                  "de": "Was ist der Zweck des Feed-Forward-Netzwerks in Transformer-Schichten?",
                  "nl": "Wat is het doel van het feed-forward netwerk in transformer lagen?"
        },
        options: [
        {
                  "en": "Process each position independently after attention, adding non-linear transformations",
                  "es": "Procesar cada posición independientemente después de atención, añadiendo transformaciones no lineales",
                  "de": "Jede Position unabhängig nach Aufmerksamkeit verarbeiten, fügt nichtlineare Transformationen hinzu",
                  "nl": "Elke positie onafhankelijk verwerken na attention, voegt niet-lineaire transformaties toe"
        },
        {
                  "en": "Feed data forward to the next layer",
                  "es": "Alimentar datos hacia adelante a la siguiente capa",
                  "de": "Daten zur nächsten Schicht vorwärts leiten",
                  "nl": "Data vooruit voeden naar de volgende laag"
        },
        {
                  "en": "Provide feedback to earlier layers",
                  "es": "Proporcionar retroalimentación a capas anteriores",
                  "de": "Feedback an frühere Schichten liefern",
                  "nl": "Feedback geven aan eerdere lagen"
        },
        {
                  "en": "Forward the network to different tasks",
                  "es": "Reenviar la red a diferentes tareas",
                  "de": "Das Netzwerk an verschiedene Aufgaben weiterleiten",
                  "nl": "Het netwerk doorsturen naar verschillende taken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "After attention aggregates information, the position-wise feed-forward network (typically two linear layers with activation) processes each position to add representational capacity.",
                  "es": "Después de que atención agrega información, la red feed-forward por posición (típicamente dos capas lineales con activación) procesa cada posición para añadir capacidad representacional.",
                  "de": "Nachdem Aufmerksamkeit Informationen aggregiert, verarbeitet das positionsweise Feed-Forward-Netzwerk (typischerweise zwei lineare Schichten mit Aktivierung) jede Position um Repräsentationskapazität hinzuzufügen.",
                  "nl": "Nadat attention informatie aggregeert, verwerkt het positie-gewijs feed-forward netwerk (typisch twee lineaire lagen met activatie) elke positie om representationele capaciteit toe te voegen."
        }
      },
      {
        question: {
                  "en": "What is knowledge distillation in deep learning?",
                  "es": "¿Qué es la destilación de conocimiento en aprendizaje profundo?",
                  "de": "Was ist Knowledge Distillation in Deep Learning?",
                  "nl": "Wat is knowledge distillation in deep learning?"
        },
        options: [
        {
                  "en": "Extracting knowledge from trained models",
                  "es": "Extraer conocimiento de modelos entrenados",
                  "de": "Wissen aus trainierten Modellen extrahieren",
                  "nl": "Kennis uit getrainde modellen extraheren"
        },
        {
                  "en": "Purifying knowledge representations",
                  "es": "Purificar representaciones de conocimiento",
                  "de": "Wissensrepräsentationen reinigen",
                  "nl": "Kennisrepresentaties zuiveren"
        },
        {
                  "en": "Training a smaller student model to mimic a larger teacher model's behavior",
                  "es": "Entrenar un modelo estudiante más pequeño para imitar el comportamiento de un modelo maestro más grande",
                  "de": "Ein kleineres Schüler-Modell trainieren um das Verhalten eines größeren Lehrer-Modells nachzuahmen",
                  "nl": "Een kleiner student model trainen om het gedrag van een groter leraar model na te bootsen"
        },
        {
                  "en": "Distilling essential knowledge from data",
                  "es": "Destilar conocimiento esencial de datos",
                  "de": "Wesentliches Wissen aus Daten destillieren",
                  "nl": "Essentiële kennis uit data distilleren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Knowledge distillation transfers knowledge from a complex teacher model to a simpler student model by training the student to match the teacher's soft probability distributions, not just hard labels.",
                  "es": "La destilación de conocimiento transfiere conocimiento de un modelo maestro complejo a un modelo estudiante más simple entrenando al estudiante para igualar las distribuciones de probabilidad suaves del maestro, no solo etiquetas duras.",
                  "de": "Knowledge Distillation überträgt Wissen von einem komplexen Lehrer-Modell auf ein einfacheres Schüler-Modell durch Training des Schülers um die weichen Wahrscheinlichkeitsverteilungen des Lehrers zu entsprechen, nicht nur harte Labels.",
                  "nl": "Knowledge distillation draagt kennis over van een complex leraar model naar een eenvoudiger student model door de student te trainen om de zachte waarschijnlijkheidsverdelingen van de leraar te matchen, niet alleen harde labels."
        }
      },
      {
        question: {
                  "en": "What is the reparameterization trick in VAEs?",
                  "es": "¿Qué es el truco de reparametrización en VAEs?",
                  "de": "Was ist der Reparametrisierungstrick in VAEs?",
                  "nl": "Wat is de reparametrisatie truc in VAEs?"
        },
        options: [
        {
                  "en": "Changing parameter initialization strategies",
                  "es": "Cambiar estrategias de inicialización de parámetros",
                  "de": "Parameterinitialisierungsstrategien ändern",
                  "nl": "Parameter initialisatie strategieën veranderen"
        },
        {
                  "en": "Expressing random sampling as a deterministic function plus noise to enable backpropagation through stochastic nodes",
                  "es": "Expresar muestreo aleatorio como función determinística más ruido para habilitar retropropagación a través de nodos estocásticos",
                  "de": "Zufälliges Sampling als deterministische Funktion plus Rauschen ausdrücken um Backpropagation durch stochastische Knoten zu ermöglichen",
                  "nl": "Willekeurige sampling uitdrukken als deterministische functie plus ruis om backpropagation door stochastische knooppunten mogelijk te maken"
        },
        {
                  "en": "Re-parameterizing the model during training",
                  "es": "Re-parametrizar el modelo durante entrenamiento",
                  "de": "Das Modell während Training neu parametrisieren",
                  "nl": "Het model opnieuw parametriseren tijdens training"
        },
        {
                  "en": "A trick to reduce the number of parameters",
                  "es": "Un truco para reducir el número de parámetros",
                  "de": "Ein Trick um die Anzahl der Parameter zu reduzieren",
                  "nl": "Een truc om het aantal parameters te verminderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The reparameterization trick reformulates sampling z ~ N(μ, σ²) as z = μ + σε where ε ~ N(0,1), making the sampling operation differentiable and allowing gradient descent.",
                  "es": "El truco de reparametrización reformula muestreo z ~ N(μ, σ²) como z = μ + σε donde ε ~ N(0,1), haciendo la operación de muestreo diferenciable y permitiendo descenso de gradiente.",
                  "de": "Der Reparametrisierungstrick formuliert Sampling z ~ N(μ, σ²) um als z = μ + σε wo ε ~ N(0,1), macht die Sampling-Operation differenzierbar und ermöglicht Gradientenabstieg.",
                  "nl": "De reparametrisatie truc herformuleert sampling z ~ N(μ, σ²) als z = μ + σε waarbij ε ~ N(0,1), maakt de sampling operatie differentieerbaar en maakt gradient descent mogelijk."
        }
      },
      {
        question: {
                  "en": "What is the ELBO (Evidence Lower Bound) in VAEs?",
                  "es": "¿Qué es el ELBO (Límite Inferior de Evidencia) en VAEs?",
                  "de": "Was ist das ELBO (Evidence Lower Bound) in VAEs?",
                  "nl": "Wat is de ELBO (Evidence Lower Bound) in VAEs?"
        },
        options: [
        {
                  "en": "Evidence-based lower boundary of the network",
                  "es": "Límite inferior basado en evidencia de la red",
                  "de": "Evidenzbasierte untere Grenze des Netzwerks",
                  "nl": "Bewijs-gebaseerde ondergrens van het netwerk"
        },
        {
                  "en": "A tractable lower bound on log-likelihood that VAEs maximize, consisting of reconstruction loss and KL divergence",
                  "es": "Un límite inferior tratable en log-verosimilitud que VAEs maximizan, consistente en pérdida de reconstrucción y divergencia KL",
                  "de": "Eine handhabbare untere Grenze der Log-Likelihood die VAEs maximieren, bestehend aus Rekonstruktionsverlust und KL-Divergenz",
                  "nl": "Een hanteerbare ondergrens op log-likelihood die VAEs maximaliseren, bestaande uit reconstructie loss en KL divergentie"
        },
        {
                  "en": "The minimum amount of data required",
                  "es": "La cantidad mínima de datos requerida",
                  "de": "Die minimale Menge an benötigten Daten",
                  "nl": "De minimale hoeveelheid vereiste data"
        },
        {
                  "en": "The lower bound of evidence needed for training",
                  "es": "El límite inferior de evidencia necesaria para entrenamiento",
                  "de": "Die untere Grenze der für Training benötigten Evidenz",
                  "nl": "De ondergrens van bewijs nodig voor training"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "ELBO = E[log p(x|z)] - KL[q(z|x)||p(z)] balances reconstruction quality with regularization, providing a computable objective for optimizing the intractable true likelihood.",
                  "es": "ELBO = E[log p(x|z)] - KL[q(z|x)||p(z)] balancea calidad de reconstrucción con regularización, proporcionando un objetivo computable para optimizar la verosimilitud verdadera intratable.",
                  "de": "ELBO = E[log p(x|z)] - KL[q(z|x)||p(z)] balanciert Rekonstruktionsqualität mit Regularisierung, bietet ein berechenbares Ziel für Optimierung der intraktablen wahren Likelihood.",
                  "nl": "ELBO = E[log p(x|z)] - KL[q(z|x)||p(z)] balanceert reconstructie kwaliteit met regularisatie, biedt een berekenbaar doel voor optimalisatie van de intractabele ware likelihood."
        }
      },
      {
        question: {
                  "en": "What is neural architecture search (NAS)?",
                  "es": "¿Qué es la búsqueda de arquitectura neuronal (NAS)?",
                  "de": "Was ist Neural Architecture Search (NAS)?",
                  "nl": "Wat is neural architecture search (NAS)?"
        },
        options: [
        {
                  "en": "Finding neurons in architectural images",
                  "es": "Encontrar neuronas en imágenes arquitectónicas",
                  "de": "Neuronen in architektonischen Bildern finden",
                  "nl": "Neuronen vinden in architectonische beelden"
        },
        {
                  "en": "Automated methods for discovering optimal neural network architectures for specific tasks",
                  "es": "Métodos automatizados para descubrir arquitecturas de redes neuronales óptimas para tareas específicas",
                  "de": "Automatisierte Methoden zur Entdeckung optimaler neuronaler Netzwerkarchitekturen für spezifische Aufgaben",
                  "nl": "Geautomatiseerde methoden voor het ontdekken van optimale neurale netwerkarchitecturen voor specifieke taken"
        },
        {
                  "en": "Searching for architectural patterns in data",
                  "es": "Buscar patrones arquitectónicos en datos",
                  "de": "Nach architektonischen Mustern in Daten suchen",
                  "nl": "Zoeken naar architectonische patronen in data"
        },
        {
                  "en": "Searching through neural network parameters",
                  "es": "Buscar a través de parámetros de redes neuronales",
                  "de": "Durch neuronale Netzwerkparameter suchen",
                  "nl": "Zoeken door neurale netwerkparameters"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "NAS uses techniques like reinforcement learning, evolutionary algorithms, or gradient-based methods to automatically design network architectures, potentially discovering novel designs humans might miss.",
                  "es": "NAS usa técnicas como aprendizaje por refuerzo, algoritmos evolutivos o métodos basados en gradientes para diseñar automáticamente arquitecturas de red, potencialmente descubriendo diseños novedosos que humanos podrían perder.",
                  "de": "NAS verwendet Techniken wie Reinforcement Learning, evolutionäre Algorithmen oder gradientenbasierte Methoden um automatisch Netzwerkarchitekturen zu entwerfen, entdeckt potenziell neuartige Designs die Menschen übersehen könnten.",
                  "nl": "NAS gebruikt technieken zoals reinforcement learning, evolutionaire algoritmes of gradient-gebaseerde methoden om automatisch netwerkarchitecturen te ontwerpen, ontdekt potentieel nieuwe ontwerpen die mensen kunnen missen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of layer-wise pre-training in deep networks?",
                  "es": "¿Cuál es el propósito del pre-entrenamiento por capas en redes profundas?",
                  "de": "Was ist der Zweck von schichtweisem Pre-Training in tiefen Netzwerken?",
                  "nl": "Wat is het doel van laag-gewijs pre-training in diepe netwerken?"
        },
        options: [
        {
                  "en": "Pre-train each layer separately on different datasets",
                  "es": "Pre-entrenar cada capa por separado en diferentes conjuntos de datos",
                  "de": "Jede Schicht separat auf verschiedenen Datensätzen vortrainieren",
                  "nl": "Elke laag apart pre-trainen op verschillende datasets"
        },
        {
                  "en": "Prepare layers for deployment",
                  "es": "Preparar capas para despliegue",
                  "de": "Schichten für Deployment vorbereiten",
                  "nl": "Lagen voorbereiden voor deployment"
        },
        {
                  "en": "Initialize deep networks by training layers sequentially before fine-tuning, historically used before better initialization methods",
                  "es": "Inicializar redes profundas entrenando capas secuencialmente antes de fine-tuning, usado antes de mejores métodos",
                  "de": "Tiefe Netzwerke initialisieren durch sequenzielles Training von Schichten vor Fine-Tuning, vor besseren Initialisierungsmethoden",
                  "nl": "Diepe netwerken initialiseren door lagen sequentieel te trainen voor fine-tuning, gebruikt voor betere initialisatiemethoden"
        },
        {
                  "en": "Train layers at different learning rates",
                  "es": "Entrenar capas a diferentes tasas de aprendizaje",
                  "de": "Schichten mit verschiedenen Lernraten trainieren",
                  "nl": "Lagen trainen met verschillende learning rates"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Layer-wise pre-training using autoencoders or RBMs was crucial for training deep networks before modern techniques like ReLU, batch normalization, and better initialization made it less necessary.",
                  "es": "El pre-entrenamiento por capas usando autocodificadores o RBMs fue crucial para entrenar redes profundas antes de que técnicas modernas como ReLU, normalización por lotes y mejor inicialización lo hicieran menos necesario.",
                  "de": "Schichtweises Pre-Training mit Autoencodern oder RBMs war entscheidend für Training tiefer Netzwerke bevor moderne Techniken wie ReLU, Batch-Normalisierung und bessere Initialisierung es weniger notwendig machten.",
                  "nl": "Laag-gewijs pre-training met autoencoders of RBMs was cruciaal voor het trainen van diepe netwerken voordat moderne technieken zoals ReLU, batch normalisatie en betere initialisatie het minder noodzakelijk maakten."
        }
      },
      {
        question: {
                  "en": "What is adversarial training in deep learning?",
                  "es": "¿Qué es el entrenamiento adversario en aprendizaje profundo?",
                  "de": "Was ist adversariales Training in Deep Learning?",
                  "nl": "Wat is adversariële training in deep learning?"
        },
        options: [
        {
                  "en": "Training models to be adversarial to users",
                  "es": "Entrenar modelos para ser adversarios a usuarios",
                  "de": "Modelle trainieren um Benutzern gegenüber feindlich zu sein",
                  "nl": "Modellen trainen om vijandig te zijn tegen gebruikers"
        },
        {
                  "en": "Training under adverse conditions",
                  "es": "Entrenar bajo condiciones adversas",
                  "de": "Unter widrigen Bedingungen trainieren",
                  "nl": "Trainen onder ongunstige omstandigheden"
        },
        {
                  "en": "Training models on adversarial examples to improve robustness against attacks",
                  "es": "Entrenar modelos en ejemplos adversarios para mejorar robustez contra ataques",
                  "de": "Modelle auf adversariellen Beispielen trainieren um Robustheit gegen Angriffe zu verbessern",
                  "nl": "Modellen trainen op adversariële voorbeelden om robuustheid tegen aanvallen te verbeteren"
        },
        {
                  "en": "Training two models to compete",
                  "es": "Entrenar dos modelos para competir",
                  "de": "Zwei Modelle zum Wettkampf trainieren",
                  "nl": "Twee modellen trainen om te concurreren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Adversarial training augments training data with adversarial examples (inputs with small perturbations designed to fool the model), making models more robust to such attacks.",
                  "es": "El entrenamiento adversario aumenta datos de entrenamiento con ejemplos adversarios (entradas con pequeñas perturbaciones diseñadas para engañar al modelo), haciendo modelos más robustos a tales ataques.",
                  "de": "Adversariales Training erweitert Trainingsdaten mit adversariellen Beispielen (Eingaben mit kleinen Störungen entworfen um das Modell zu täuschen), macht Modelle robuster gegen solche Angriffe.",
                  "nl": "Adversariële training vergroot trainingsdata met adversariële voorbeelden (inputs met kleine verstoringen ontworpen om het model te misleiden), maakt modellen robuuster tegen dergelijke aanvallen."
        }
      },
      {
        question: {
                  "en": "What are conditional GANs (cGANs)?",
                  "es": "¿Qué son las GANs condicionales (cGAN)?",
                  "de": "Was sind bedingte GANs (cGANs)?",
                  "nl": "Wat zijn conditionele GANs (cGANs)?"
        },
        options: [
        {
                  "en": "GANs with conditional statements in code",
                  "es": "GANs con declaraciones condicionales en código",
                  "de": "GANs mit bedingten Anweisungen im Code",
                  "nl": "GANs met voorwaardelijke statements in code"
        },
        {
                  "en": "GANs conditioned on training success",
                  "es": "GANs condicionadas al éxito del entrenamiento",
                  "de": "GANs bedingt auf Trainingserfolg",
                  "nl": "GANs geconditioneerd op trainings succes"
        },
        {
                  "en": "GANs that work under certain conditions only",
                  "es": "GANs que funcionan solo bajo ciertas condiciones",
                  "de": "GANs die nur unter bestimmten Bedingungen funktionieren",
                  "nl": "GANs die alleen onder bepaalde voorwaarden werken"
        },
        {
                  "en": "GANs that generate samples conditioned on additional information like class labels or text",
                  "es": "GANs que generan muestras condicionadas en información adicional como etiquetas de clase o texto",
                  "de": "GANs die Proben bedingt auf zusätzlichen Informationen wie Klassenlabels oder Text generieren",
                  "nl": "GANs die samples genereren geconditioneerd op aanvullende informatie zoals class labels of tekst"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "cGANs extend GANs by conditioning both generator and discriminator on extra information, enabling controlled generation like creating specific digit classes or image-to-image translation.",
                  "es": "Las cGANs extienden GANs condicionando tanto generador como discriminador en información extra, habilitando generación controlada como crear clases de dígitos específicas o traducción imagen a imagen.",
                  "de": "cGANs erweitern GANs durch Konditionierung von Generator und Diskriminator auf zusätzliche Informationen, ermöglichen kontrollierte Generierung wie Erstellen spezifischer Ziffernklassen oder Bild-zu-Bild-Übersetzung.",
                  "nl": "cGANs breiden GANs uit door zowel generator als discriminator te conditioneren op extra informatie, maken gecontroleerde generatie mogelijk zoals het creëren van specifieke cijferklassen of beeld-naar-beeld vertaling."
        }
      },
      {
        question: {
                  "en": "What is the purpose of residual connections in ResNet?",
                  "es": "¿Cuál es el propósito de las conexiones residuales en ResNet?",
                  "de": "Was ist der Zweck von residualen Verbindungen in ResNet?",
                  "nl": "Wat is het doel van residuele verbindingen in ResNet?"
        },
        options: [
        {
                  "en": "Reuse residual computations",
                  "es": "Reutilizar computaciones residuales",
                  "de": "Restberechnungen wiederverwenden",
                  "nl": "Restberekeningen hergebruiken"
        },
        {
                  "en": "Store residual information for later",
                  "es": "Almacenar información residual para después",
                  "de": "Restinformationen für später speichern",
                  "nl": "Restinformatie opslaan voor later"
        },
        {
                  "en": "Enable training of very deep networks by providing gradient highways and allowing identity mappings",
                  "es": "Habilitar entrenamiento de redes muy profundas proporcionando autopistas de gradientes y permitiendo mapeos de identidad",
                  "de": "Training sehr tiefer Netzwerke ermöglichen durch Bereitstellung von Gradienten-Highways und Ermöglichung von Identitätsabbildungen",
                  "nl": "Training van zeer diepe netwerken mogelijk maken door gradiënt highways te bieden en identiteit mappings toe te staan"
        },
        {
                  "en": "Connect residual errors between layers",
                  "es": "Conectar errores residuales entre capas",
                  "de": "Restfehler zwischen Schichten verbinden",
                  "nl": "Restfouten tussen lagen verbinden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Skip connections in ResNet allow gradients to flow directly through the network and enable layers to learn residual functions F(x) rather than the full transformation H(x), making optimization easier.",
                  "es": "Las conexiones de salto en ResNet permiten que gradientes fluyan directamente a través de la red y habilitan capas a aprender funciones residuales F(x) en lugar de la transformación completa H(x), facilitando la optimización.",
                  "de": "Skip-Verbindungen in ResNet ermöglichen Gradienten direkt durch das Netzwerk zu fließen und ermöglichen Schichten residuale Funktionen F(x) zu lernen anstatt der vollen Transformation H(x), erleichtert Optimierung.",
                  "nl": "Skip verbindingen in ResNet maken het mogelijk dat gradiënten direct door het netwerk stromen en stellen lagen in staat residuele functies F(x) te leren in plaats van de volledige transformatie H(x), maakt optimalisatie makkelijker."
        }
      },
      {
        question: {
                  "en": "What is cycle consistency loss in CycleGAN?",
                  "es": "¿Qué es la pérdida de consistencia de ciclo en CycleGAN?",
                  "de": "Was ist Cycle Consistency Loss in CycleGAN?",
                  "nl": "Wat is cycle consistency loss in CycleGAN?"
        },
        options: [
        {
                  "en": "Ensuring that translating from domain A to B and back to A recovers the original image",
                  "es": "Asegurar que traducir del dominio A a B y de vuelta a A recupera la imagen original",
                  "de": "Sicherstellen dass Übersetzung von Domäne A zu B und zurück zu A das Originalbild wiederherstellt",
                  "nl": "Verzekeren dat vertalen van domein A naar B en terug naar A het originele beeld herstelt"
        },
        {
                  "en": "Loss accumulated over training cycles",
                  "es": "Pérdida acumulada sobre ciclos de entrenamiento",
                  "de": "Verlust über Trainingszyklen akkumuliert",
                  "nl": "Loss geaccumuleerd over trainingscycli"
        },
        {
                  "en": "Consistent loss across epochs",
                  "es": "Pérdida consistente a través de épocas",
                  "de": "Konsistenter Verlust über Epochen",
                  "nl": "Consistente loss over epochs"
        },
        {
                  "en": "Cycling through different loss functions",
                  "es": "Ciclar a través de diferentes funciones de pérdida",
                  "de": "Durch verschiedene Verlustfunktionen zyklieren",
                  "nl": "Cycleren door verschillende loss functies"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Cycle consistency enforces that F(G(x)) ≈ x and G(F(y)) ≈ y, enabling unpaired image-to-image translation by ensuring the mappings are inverses of each other.",
                  "es": "La consistencia de ciclo impone que F(G(x)) ≈ x y G(F(y)) ≈ y, habilitando traducción imagen a imagen no emparejada asegurando que los mapeos sean inversos uno del otro.",
                  "de": "Cycle Consistency erzwingt dass F(G(x)) ≈ x und G(F(y)) ≈ y, ermöglicht ungepaarte Bild-zu-Bild-Übersetzung durch Sicherstellung dass die Abbildungen Inverse voneinander sind.",
                  "nl": "Cycle consistency dwingt af dat F(G(x)) ≈ x en G(F(y)) ≈ y, maakt ongepaard beeld-naar-beeld vertaling mogelijk door te verzekeren dat de mappings elkaars inverse zijn."
        }
      },
      {
        question: {
                  "en": "What is the purpose of the softmax function in neural networks?",
                  "es": "¿Cuál es el propósito de la función softmax en redes neuronales?",
                  "de": "Was ist der Zweck der Softmax-Funktion in neuronalen Netzwerken?",
                  "nl": "Wat is het doel van de softmax functie in neurale netwerken?"
        },
        options: [
        {
                  "en": "Soften the impact of outliers",
                  "es": "Suavizar el impacto de valores atípicos",
                  "de": "Die Auswirkung von Ausreißern mildern",
                  "nl": "De impact van uitbijters verzachten"
        },
        {
                  "en": "Convert raw scores into a probability distribution over classes that sum to 1",
                  "es": "Convertir puntuaciones brutas en una distribución de probabilidad sobre clases que suman 1",
                  "de": "Rohe Scores in eine Wahrscheinlichkeitsverteilung über Klassen umwandeln die zu 1 summieren",
                  "nl": "Ruwe scores converteren naar een waarschijnlijkheidsverdeling over klassen die optellen tot 1"
        },
        {
                  "en": "Find the maximum value softly",
                  "es": "Encontrar el valor máximo suavemente",
                  "de": "Den Maximalwert sanft finden",
                  "nl": "De maximale waarde zacht vinden"
        },
        {
                  "en": "Make the network softer and more flexible",
                  "es": "Hacer la red más suave y flexible",
                  "de": "Das Netzwerk weicher und flexibler machen",
                  "nl": "Het netwerk zachter en flexibeler maken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Softmax exponentiates and normalizes logits to produce interpretable probabilities for multi-class classification, with higher scores getting exponentially larger probability mass.",
                  "es": "Softmax exponencia y normaliza logits para producir probabilidades interpretables para clasificación multi-clase, con puntuaciones más altas obteniendo masa de probabilidad exponencialmente mayor.",
                  "de": "Softmax potenziert und normalisiert Logits um interpretierbare Wahrscheinlichkeiten für Multi-Klassen-Klassifikation zu produzieren, mit höheren Scores die exponentiell größere Wahrscheinlichkeitsmasse erhalten.",
                  "nl": "Softmax verheft tot macht en normaliseert logits om interpreteerbare waarschijnlijkheden te produceren voor multi-klasse classificatie, met hogere scores die exponentieel grotere waarschijnlijkheidsmassa krijgen."
        }
      },
      {
        question: {
                  "en": "What is meta-learning (learning to learn)?",
                  "es": "¿Qué es el meta-aprendizaje (aprender a aprender)?",
                  "de": "Was ist Meta-Learning (Lernen zu lernen)?",
                  "nl": "Wat is meta-learning (leren om te leren)?"
        },
        options: [
        {
                  "en": "Training models to quickly adapt to new tasks with few examples by learning good initialization or learning algorithms",
                  "es": "Entrenar modelos para adaptarse rápidamente a nuevas tareas con pocos ejemplos aprendiendo inicialización o algoritmos",
                  "de": "Modelle trainieren um sich schnell an neue Aufgaben anzupassen durch Lernen guter Initialisierung oder Lernalgorithmen",
                  "nl": "Modellen trainen om snel aan te passen aan nieuwe taken met weinig voorbeelden door goede initialisatie of leeralgoritmes"
        },
        {
                  "en": "Higher-level learning above deep learning",
                  "es": "Aprendizaje de nivel superior sobre aprendizaje profundo",
                  "de": "Höherstufiges Lernen über Deep Learning",
                  "nl": "Hoger niveau leren boven deep learning"
        },
        {
                  "en": "Learning about learning theory",
                  "es": "Aprender sobre teoría del aprendizaje",
                  "de": "Über Lerntheorie lernen",
                  "nl": "Leren over leertheorie"
        },
        {
                  "en": "Learning metadata about datasets",
                  "es": "Aprender metadatos sobre conjuntos de datos",
                  "de": "Metadaten über Datensätze lernen",
                  "nl": "Metadata over datasets leren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Meta-learning algorithms like MAML learn from multiple tasks to find model parameters that can be quickly fine-tuned to new tasks with minimal data, enabling few-shot learning.",
                  "es": "Los algoritmos de meta-aprendizaje como MAML aprenden de múltiples tareas para encontrar parámetros de modelo que pueden ser rápidamente ajustados a nuevas tareas con datos mínimos, habilitando aprendizaje few-shot.",
                  "de": "Meta-Learning-Algorithmen wie MAML lernen aus mehreren Aufgaben um Modellparameter zu finden die schnell auf neue Aufgaben mit minimalen Daten feinabgestimmt werden können, ermöglichen Few-Shot-Learning.",
                  "nl": "Meta-learning algoritmes zoals MAML leren van meerdere taken om modelparameters te vinden die snel kunnen worden afgestemd op nieuwe taken met minimale data, maken few-shot learning mogelijk."
        }
      },
      {
        question: {
                  "en": "What is the pruning technique in neural network compression?",
                  "es": "¿Qué es la técnica de poda en compresión de redes neuronales?",
                  "de": "Was ist die Pruning-Technik in neuronaler Netzwerkkompression?",
                  "nl": "Wat is de pruning techniek in neurale netwerk compressie?"
        },
        options: [
        {
                  "en": "Removing unnecessary weights or neurons to reduce model size while maintaining performance",
                  "es": "Remover pesos o neuronas innecesarias para reducir tamaño de modelo manteniendo rendimiento",
                  "de": "Unnötige Gewichte oder Neuronen entfernen um Modellgröße zu reduzieren während Leistung beibehalten wird",
                  "nl": "Onnodige gewichten of neuronen verwijderen om modelgrootte te verminderen terwijl prestaties behouden blijven"
        },
        {
                  "en": "Pruning decision trees",
                  "es": "Podar árboles de decisión",
                  "de": "Entscheidungsbäume beschneiden",
                  "nl": "Beslisbomen snoeien"
        },
        {
                  "en": "Cutting off training early",
                  "es": "Cortar entrenamiento temprano",
                  "de": "Training früh abbrechen",
                  "nl": "Training vroeg afbreken"
        },
        {
                  "en": "Trimming training data",
                  "es": "Recortar datos de entrenamiento",
                  "de": "Trainingsdaten trimmen",
                  "nl": "Trainingsdata trimmen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Pruning identifies and removes low-magnitude weights or entire neurons/filters that contribute little to the output, creating sparse networks that are faster and smaller with minimal accuracy loss.",
                  "es": "La poda identifica y remueve pesos de baja magnitud o neuronas/filtros enteros que contribuyen poco a la salida, creando redes dispersas que son más rápidas y pequeñas con pérdida mínima de precisión.",
                  "de": "Pruning identifiziert und entfernt Gewichte mit niedriger Magnitude oder ganze Neuronen/Filter die wenig zur Ausgabe beitragen, erstellt sparse Netzwerke die schneller und kleiner sind mit minimalem Genauigkeitsverlust.",
                  "nl": "Pruning identificeert en verwijdert lage-magnitude gewichten of hele neuronen/filters die weinig bijdragen aan de output, creëert sparse netwerken die sneller en kleiner zijn met minimaal nauwkeurigheidsverlies."
        }
      },
      {
        question: {
                  "en": "What is quantization in neural network optimization?",
                  "es": "¿Qué es la cuantización en optimización de redes neuronales?",
                  "de": "Was ist Quantisierung in neuronaler Netzwerk-Optimierung?",
                  "nl": "Wat is quantisatie in neurale netwerk optimalisatie?"
        },
        options: [
        {
                  "en": "Quantifying network performance",
                  "es": "Cuantificar rendimiento de red",
                  "de": "Netzwerkleistung quantifizieren",
                  "nl": "Netwerkprestaties kwantificeren"
        },
        {
                  "en": "Measuring quantities in the network",
                  "es": "Medir cantidades en la red",
                  "de": "Mengen im Netzwerk messen",
                  "nl": "Hoeveelheden in het netwerk meten"
        },
        {
                  "en": "Reducing precision of weights and activations from 32-bit floats to lower bit-widths to reduce memory and computation",
                  "es": "Reducir precisión de pesos y activaciones de floats de 32 bits a anchos de bit menores para reducir memoria y computación",
                  "de": "Präzision von Gewichten und Aktivierungen von 32-Bit-Floats auf niedrigere Bit-Breiten reduzieren um Speicher und Berechnung zu reduzieren",
                  "nl": "Precisie van gewichten en activaties verminderen van 32-bit floats naar lagere bit-breedtes om geheugen en berekening te verminderen"
        },
        {
                  "en": "Converting continuous to discrete values",
                  "es": "Convertir valores continuos a discretos",
                  "de": "Kontinuierliche in diskrete Werte umwandeln",
                  "nl": "Continue naar discrete waarden converteren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Quantization converts high-precision floating-point numbers to lower-precision representations (e.g., 8-bit integers), dramatically reducing model size and inference time with acceptable accuracy degradation.",
                  "es": "La cuantización convierte números de punto flotante de alta precisión a representaciones de menor precisión (ej. enteros de 8 bits), reduciendo dramáticamente tamaño de modelo y tiempo de inferencia con degradación de precisión aceptable.",
                  "de": "Quantisierung konvertiert hochpräzise Gleitkommazahlen in niedrigerpräzise Darstellungen (z.B. 8-Bit-Ganzzahlen), reduziert Modellgröße und Inferenzzeit dramatisch mit akzeptabler Genauigkeitsverschlechterung.",
                  "nl": "Quantisatie converteert hoge-precisie floating-point nummers naar lagere-precisie representaties (bijv. 8-bit integers), vermindert modelgrootte en inferentietijd dramatisch met acceptabele nauwkeurigheidsverslechtering."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  }
})();