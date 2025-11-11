// Deep Learning Quiz - Level 6: Generative Models and Advanced Architectures
(function() {
  const level6 = {
    name: {
      en: "Deep Learning Level 6",
      es: "Aprendizaje Profundo Nivel 6",
      de: "Deep Learning Stufe 6",
      nl: "Deep Learning Level 6"
    },
    questions: [
      {
        question: {
          en: "What are Generative Adversarial Networks (GANs) designed to do?",
          es: "¿Qué están diseñadas a hacer las Redes Generativas Adversariales (GAN)?",
          de: "Wofür sind Generative Adversarial Networks (GANs) entworfen?",
          nl: "Waarvoor zijn Generative Adversarial Networks (GANs) ontworpen?"
        },
        options: [
          { en: "Generate new realistic data by training two competing neural networks", es: "Generar nuevos datos realistas entrenando dos redes neuronales que compiten", de: "Neue realistische Daten generieren durch Training zweier konkurrierender neuronaler Netzwerke", nl: "Nieuwe realistische data genereren door twee concurrerende neurale netwerken te trainen" },
          { en: "Generate adversarial attacks against other models", es: "Generar ataques adversarios contra otros modelos", de: "Adversarielle Angriffe gegen andere Modelle generieren", nl: "Adversariële aanvallen genereren tegen andere modellen" },
          { en: "Create networks that are adversarial to humans", es: "Crear redes que son adversarias a humanos", de: "Netzwerke erstellen die Menschen gegenüber feindlich sind", nl: "Netwerken maken die vijandig zijn tegenover mensen" },
          { en: "Generate alternative network architectures", es: "Generar arquitecturas de red alternativas", de: "Alternative Netzwerkarchitekturen generieren", nl: "Alternatieve netwerkarchitecturen genereren" }
        ],
        correct: 0,
        explanation: {
          en: "GANs consist of a generator creating fake data and a discriminator trying to detect fakes, competing until the generator produces highly realistic synthetic data.",
          es: "Las GAN consisten en un generador creando datos falsos y un discriminador tratando de detectar falsificaciones, compitiendo hasta que el generador produce datos sintéticos altamente realistas.",
          de: "GANs bestehen aus einem Generator der gefälschte Daten erstellt und einem Diskriminator der Fälschungen zu erkennen versucht, konkurrieren bis der Generator hochrealistische synthetische Daten produziert.",
          nl: "GANs bestaan uit een generator die nep data maakt en een discriminator die probeert nep data te detecteren, concurreren totdat de generator zeer realistische synthetische data produceert."
        }
      },
      {
        question: {
          en: "What is the transformer architecture's main innovation in deep learning?",
          es: "¿Cuál es la principal innovación de la arquitectura transformer en aprendizaje profundo?",
          de: "Was ist die Hauptinnovation der Transformer-Architektur in Deep Learning?",
          nl: "Wat is de hoofdinnovatie van de transformer architectuur in deep learning?"
        },
        options: [
          { en: "Using self-attention mechanisms to process sequences in parallel instead of sequentially", es: "Usar mecanismos de auto-atención para procesar secuencias en paralelo en lugar de secuencialmente", de: "Selbstaufmerksamkeits-Mechanismen verwenden um Sequenzen parallel statt sequenziell zu verarbeiten", nl: "Zelf-aandacht mechanismen gebruiken om sequenties parallel te verwerken in plaats van sequentieel" },
          { en: "Transforming data from one format to another", es: "Transformar datos de un formato a otro", de: "Daten von einem Format in ein anderes transformieren", nl: "Data transformeren van het ene formaat naar het andere" },
          { en: "Using electrical transformers for power efficiency", es: "Usar transformadores eléctricos para eficiencia energética", de: "Elektrische Transformatoren für Energieeffizienz verwenden", nl: "Elektrische transformatoren gebruiken voor energie-efficiëntie" },
          { en: "Automatically transforming network architectures", es: "Transformar automáticamente arquitecturas de red", de: "Netzwerkarchitekturen automatisch transformieren", nl: "Netwerkarchitecturen automatisch transformeren" }
        ],
        correct: 0,
        explanation: {
          en: "Transformers revolutionized NLP by using self-attention to process all positions in a sequence simultaneously, enabling much faster training and better long-range dependencies.",
          es: "Los transformers revolucionaron NLP usando auto-atención para procesar todas las posiciones en una secuencia simultáneamente, permitiendo entrenamiento mucho más rápido y mejores dependencias de largo alcance.",
          de: "Transformer revolutionierten NLP durch Selbstaufmerksamkeit um alle Positionen in einer Sequenz gleichzeitig zu verarbeiten, ermöglichen viel schnelleres Training und bessere Langstrecken-Abhängigkeiten.",
          nl: "Transformers revolutioneerden NLP door zelf-aandacht te gebruiken om alle posities in een sequentie tegelijkertijd te verwerken, maken veel snellere training en betere lange afstand afhankelijkheden mogelijk."
        }
      },
      {
        question: {
          en: "What is residual learning in ResNet architectures?",
          es: "¿Qué es el aprendizaje residual en arquitecturas ResNet?",
          de: "Was ist residuales Lernen in ResNet-Architekturen?",
          nl: "Wat is residueel leren in ResNet architecturen?"
        },
        options: [
          { en: "Learning the difference between input and desired output through skip connections", es: "Aprender la diferencia entre entrada y salida deseada a través de conexiones de salto", de: "Die Differenz zwischen Eingabe und gewünschter Ausgabe durch Skip-Verbindungen lernen", nl: "Het verschil leren tussen input en gewenste output door skip verbindingen" },
          { en: "Learning only the remaining unused data", es: "Aprender solo los datos restantes no utilizados", de: "Nur die verbleibenden ungenutzten Daten lernen", nl: "Alleen de resterende ongebruikte data leren" },
          { en: "Learning from residual errors in the model", es: "Aprender de errores residuales en el modelo", de: "Von Restfehlern im Modell lernen", nl: "Leren van restfouten in het model" },
          { en: "Learning what's left after training other networks", es: "Aprender lo que queda después de entrenar otras redes", de: "Lernen was nach dem Training anderer Netzwerke übrig bleibt", nl: "Leren wat overblijft na het trainen van andere netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "ResNets use skip connections that allow layers to learn residual mappings, making it easier to train very deep networks by addressing vanishing gradients.",
          es: "Las ResNet usan conexiones de salto que permiten a capas aprender mapeos residuales, facilitando entrenar redes muy profundas abordando gradientes que desaparecen.",
          de: "ResNets verwenden Skip-Verbindungen die Schichten ermöglichen residuale Abbildungen zu lernen, erleichtern Training sehr tiefer Netzwerke durch Adressierung verschwindender Gradienten.",
          nl: "ResNets gebruiken skip verbindingen die lagen toestaan residuele mappings te leren, maken het makkelijker om zeer diepe netwerken te trainen door verdwijnende gradiënten aan te pakken."
        }
      },
      {
        question: {
          en: "What is the purpose of variational autoencoders (VAEs)?",
          es: "¿Cuál es el propósito de los autocodificadores variacionales (VAE)?",
          de: "Was ist der Zweck von Variational Autoencodern (VAEs)?",
          nl: "Wat is het doel van variational autoencoders (VAEs)?"
        },
        options: [
          { en: "Learning probabilistic latent representations that can generate new data samples", es: "Aprender representaciones latentes probabilísticas que pueden generar nuevas muestras de datos", de: "Probabilistische latente Repräsentationen lernen die neue Datenproben generieren können", nl: "Probabilistische latente representaties leren die nieuwe datasamples kunnen genereren" },
          { en: "Varying the encoding process automatically", es: "Variar el proceso de codificación automáticamente", de: "Den Kodierungsprozess automatisch variieren", nl: "Het coderingsproces automatisch variëren" },
          { en: "Creating variations of existing autoencoders", es: "Crear variaciones de autocodificadores existentes", de: "Variationen bestehender Autoencoder erstellen", nl: "Variaties van bestaande autoencoders maken" },
          { en: "Encoding data with variable compression ratios", es: "Codificar datos con ratios de compresión variables", de: "Daten mit variablen Komprimierungsverhältnissen kodieren", nl: "Data coderen met variabele compressieverhoudingen" }
        ],
        correct: 0,
        explanation: {
          en: "VAEs combine autoencoders with probabilistic modeling, learning a continuous latent space that enables generating new data by sampling from learned distributions.",
          es: "Los VAE combinan autocodificadores con modelado probabilístico, aprendiendo un espacio latente continuo que permite generar nuevos datos muestreando de distribuciones aprendidas.",
          de: "VAEs kombinieren Autoencoder mit probabilistischer Modellierung, lernen einen kontinuierlichen latenten Raum der Generierung neuer Daten durch Sampling aus gelernten Verteilungen ermöglicht.",
          nl: "VAEs combineren autoencoders met probabilistische modellering, leren een continue latente ruimte die het genereren van nieuwe data mogelijk maakt door sampling uit geleerde distributies."
        }
      },
      {
        question: {
          en: "What is the key innovation of attention mechanisms in neural machine translation?",
          es: "¿Cuál es la innovación clave de los mecanismos de atención en traducción automática neuronal?",
          de: "Was ist die Schlüsselinnovation von Aufmerksamkeitsmechanismen in neuronaler maschineller Übersetzung?",
          nl: "Wat is de belangrijkste innovatie van attention mechanismen in neurale machinevertaling?"
        },
        options: [
          { en: "Allowing the model to focus on relevant source words when generating each target word", es: "Permitir al modelo enfocarse en palabras fuente relevantes al generar cada palabra objetivo", de: "Dem Modell ermöglichen sich auf relevante Quellwörter zu konzentrieren beim Generieren jedes Zielworts", nl: "Het model toestaan zich te focussen op relevante bronwoorden bij het genereren van elk doelwoord" },
          { en: "Making humans pay attention to translation quality", es: "Hacer que humanos presten atención a la calidad de traducción", de: "Menschen dazu bringen auf Übersetzungsqualität zu achten", nl: "Mensen aandacht laten besteden aan vertaalkwaliteit" },
          { en: "Automatically detecting attention patterns in text", es: "Detectar automáticamente patrones de atención en texto", de: "Aufmerksamkeitsmuster in Text automatisch erkennen", nl: "Automatisch aandachtspatronen in tekst detecteren" },
          { en: "Focusing computational resources on difficult translations", es: "Enfocar recursos computacionales en traducciones difíciles", de: "Rechenressourcen auf schwierige Übersetzungen fokussieren", nl: "Computationele bronnen focussen op moeilijke vertalingen" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms solve the bottleneck problem of encoder-decoder models by allowing direct access to all source positions, dramatically improving translation quality.",
          es: "Los mecanismos de atención resuelven el problema de cuello de botella de modelos codificador-decodificador permitiendo acceso directo a todas las posiciones fuente, mejorando dramáticamente la calidad de traducción.",
          de: "Aufmerksamkeitsmechanismen lösen das Engpass-Problem von Encoder-Decoder-Modellen durch direkten Zugang zu allen Quellpositionen, verbessern die Übersetzungsqualität dramatisch.",
          nl: "Attention mechanismen lossen het bottleneck probleem van encoder-decoder modellen op door directe toegang tot alle bronposities te bieden, verbeteren vertaalkwaliteit dramatisch."
        }
      },
      {
        question: {
          en: "What is the main advantage of DenseNet over traditional CNN architectures?",
          es: "¿Cuál es la ventaja principal de DenseNet sobre arquitecturas CNN tradicionales?",
          de: "Was ist der Hauptvorteil von DenseNet gegenüber traditionellen CNN-Architekturen?",
          nl: "Wat is het hoofdvoordeel van DenseNet ten opzichte van traditionele CNN architecturen?"
        },
        options: [
          { en: "Dense connections between all layers for better feature reuse", es: "Conexiones densas entre todas las capas para mejor reutilización de características", de: "Dichte Verbindungen zwischen allen Schichten für bessere Feature-Wiederverwendung", nl: "Dense verbindingen tussen alle lagen voor betere feature hergebruik" },
          { en: "Higher computational density", es: "Mayor densidad computacional", de: "Höhere Rechendichte", nl: "Hogere computationele dichtheid" },
          { en: "Denser weight matrices", es: "Matrices de peso más densas", de: "Dichtere Gewichtsmatrizen", nl: "Dichtere gewichtsmatrices" },
          { en: "Dense data storage format", es: "Formato de almacenamiento de datos denso", de: "Dichtes Datenspeicherformat", nl: "Dense data opslagformaat" }
        ],
        correct: 0,
        explanation: {
          en: "DenseNet connects each layer to every subsequent layer, promoting feature reuse and gradient flow, which reduces parameters while improving performance.",
          es: "DenseNet conecta cada capa a todas las capas subsiguientes, promoviendo reutilización de características y flujo de gradientes, reduciendo parámetros mientras mejora rendimiento.",
          de: "DenseNet verbindet jede Schicht mit allen nachfolgenden Schichten, fördert Feature-Wiederverwendung und Gradientenfluss, reduziert Parameter während es die Leistung verbessert.",
          nl: "DenseNet verbindt elke laag met alle daaropvolgende lagen, bevordert feature hergebruik en gradient flow, reduceert parameters terwijl prestaties verbeteren."
        }
      },
      {
        question: {
          en: "What problem do Squeeze-and-Excitation (SE) blocks solve in CNNs?",
          es: "¿Qué problema resuelven los bloques Squeeze-and-Excitation (SE) en las CNN?",
          de: "Welches Problem lösen Squeeze-and-Excitation (SE) Blöcke in CNNs?",
          nl: "Welk probleem lossen Squeeze-and-Excitation (SE) blokken op in CNNs?"
        },
        options: [
          { en: "Adaptive recalibration of channel-wise feature responses", es: "Recalibración adaptiva de respuestas de características por canal", de: "Adaptive Neukalibrierung von kanalweisen Feature-Antworten", nl: "Adaptieve herkaligbratie van kanaalgewijze feature responses" },
          { en: "Physical compression of network weights", es: "Compresión física de pesos de red", de: "Physische Kompression von Netzwerkgewichten", nl: "Fysieke compressie van netwerkgewichten" },
          { en: "Emotional excitement in neural networks", es: "Excitación emocional en redes neuronales", de: "Emotionale Erregung in neuronalen Netzwerken", nl: "Emotionele opwinding in neurale netwerken" },
          { en: "Squeezing data through narrow channels", es: "Comprimir datos a través de canales estrechos", de: "Daten durch enge Kanäle pressen", nl: "Data door smalle kanalen persen" }
        ],
        correct: 0,
        explanation: {
          en: "SE blocks adaptively recalibrate channel-wise feature responses by explicitly modeling interdependencies between channels, improving representational capacity.",
          es: "Los bloques SE recalibran adaptativamente respuestas de características por canal modelando explícitamente interdependencias entre canales, mejorando capacidad representacional.",
          de: "SE-Blöcke kalibrieren adaptiv kanalweise Feature-Antworten neu durch explizite Modellierung von Interdependenzen zwischen Kanälen, verbessern Repräsentationskapazität.",
          nl: "SE blokken herkalibbreren adaptief kanaalgewijze feature responses door expliciet interdependenties tussen kanalen te modelleren, verbeteren representationele capaciteit."
        }
      },
      {
        question: {
          en: "What is the key innovation of EfficientNet architecture?",
          es: "¿Cuál es la innovación clave de la arquitectura EfficientNet?",
          de: "Was ist die Schlüsselinnovation der EfficientNet-Architektur?",
          nl: "Wat is de belangrijkste innovatie van de EfficientNet architectuur?"
        },
        options: [
          { en: "Compound scaling method for balanced network dimensions", es: "Método de escalado compuesto para dimensiones de red balanceadas", de: "Zusammengesetzte Skalierungsmethode für ausgewogene Netzwerkdimensionen", nl: "Compound scaling methode voor gebalanceerde netwerkdimensies" },
          { en: "More efficient hardware utilization", es: "Utilización de hardware más eficiente", de: "Effizientere Hardware-Nutzung", nl: "Efficiëntere hardware benutting" },
          { en: "Efficient memory management", es: "Gestión eficiente de memoria", de: "Effiziente Speicherverwaltung", nl: "Efficiënt geheugen beheer" },
          { en: "Network efficiency optimization", es: "Optimización de eficiencia de red", de: "Netzwerk-Effizienz-Optimierung", nl: "Netwerk efficiëntie optimalisatie" }
        ],
        correct: 0,
        explanation: {
          en: "EfficientNet uses compound scaling to uniformly scale network width, depth, and resolution with fixed ratios, achieving better accuracy-efficiency trade-offs.",
          es: "EfficientNet usa escalado compuesto para escalar uniformemente ancho, profundidad y resolución de red con ratios fijos, logrando mejores compensaciones precisión-eficiencia.",
          de: "EfficientNet verwendet zusammengesetzte Skalierung um Netzwerkbreite, -tiefe und -auflösung gleichmäßig mit festen Verhältnissen zu skalieren, erreicht bessere Genauigkeit-Effizienz-Kompromisse.",
          nl: "EfficientNet gebruikt compound scaling om netwerkbreedte, diepte en resolutie uniform te schalen met vaste verhoudingen, behaalt betere nauwkeurigheid-efficiëntie afwegingen."
        }
      },
      {
        question: {
          en: "What is the purpose of batch normalization in deep learning?",
          es: "¿Cuál es el propósito de la normalización por lotes en aprendizaje profundo?",
          de: "Was ist der Zweck der Batch-Normalisierung in Deep Learning?",
          nl: "Wat is het doel van batch normalisatie in deep learning?"
        },
        options: [
          { en: "Stabilize training by normalizing layer inputs", es: "Estabilizar entrenamiento normalizando entradas de capas", de: "Training stabilisieren durch Normalisierung von Schichteingaben", nl: "Training stabiliseren door laag inputs te normaliseren" },
          { en: "Normalize the size of training batches", es: "Normalizar el tamaño de lotes de entrenamiento", de: "Die Größe von Trainings-Batches normalisieren", nl: "De grootte van training batches normaliseren" },
          { en: "Create normal distribution of data", es: "Crear distribución normal de datos", de: "Normalverteilung von Daten erstellen", nl: "Normale distributie van data creëren" },
          { en: "Batch process multiple networks", es: "Procesar por lotes múltiples redes", de: "Mehrere Netzwerke stapelweise verarbeiten", nl: "Meerdere netwerken batch-gewijs verwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Batch normalization normalizes inputs to each layer, reducing internal covariate shift and allowing higher learning rates and more stable training.",
          es: "La normalización por lotes normaliza entradas a cada capa, reduciendo cambio de covarianza interna y permitiendo tasas de aprendizaje más altas y entrenamiento más estable.",
          de: "Batch-Normalisierung normalisiert Eingaben zu jeder Schicht, reduziert interne Kovarianzverschiebung und ermöglicht höhere Lernraten und stabileres Training.",
          nl: "Batch normalisatie normaliseert inputs naar elke laag, vermindert interne covariate shift en maakt hogere leerrates en stabielere training mogelijk."
        }
      },
      {
        question: {
          en: "What advantage do dilated convolutions provide?",
          es: "¿Qué ventaja proporcionan las convoluciones dilatadas?",
          de: "Welchen Vorteil bieten dilatierte Faltungen?",
          nl: "Welk voordeel bieden dilated convoluties?"
        },
        options: [
          { en: "Increased receptive field without additional parameters", es: "Campo receptivo aumentado sin parámetros adicionales", de: "Vergrößertes rezeptives Feld ohne zusätzliche Parameter", nl: "Vergroot receptief veld zonder extra parameters" },
          { en: "Dilation of image resolution", es: "Dilatación de resolución de imagen", de: "Dilatation der Bildauflösung", nl: "Dilatatie van beeldresolutie" },
          { en: "Expansion of network capacity", es: "Expansión de capacidad de red", de: "Erweiterung der Netzwerkkapazität", nl: "Uitbreiding van netwerkcapaciteit" },
          { en: "Dilated training time", es: "Tiempo de entrenamiento dilatado", de: "Verlängerte Trainingszeit", nl: "Verlengde trainingstijd" }
        ],
        correct: 0,
        explanation: {
          en: "Dilated convolutions insert gaps between kernel elements, expanding the receptive field exponentially while maintaining the same number of parameters.",
          es: "Las convoluciones dilatadas insertan espacios entre elementos del kernel, expandiendo el campo receptivo exponencialmente manteniendo el mismo número de parámetros.",
          de: "Dilatierte Faltungen fügen Lücken zwischen Kernel-Elementen ein, erweitern das rezeptive Feld exponentiell bei gleicher Parameteranzahl.",
          nl: "Dilated convoluties voegen gaten tussen kernel elementen in, breiden het receptieve veld exponentieel uit met hetzelfde aantal parameters."
        }
      },
      {
        question: {
          en: "What is the key innovation of BERT (Bidirectional Encoder Representations from Transformers)?",
          es: "¿Cuál es la innovación clave de BERT (Representaciones de Codificador Bidireccional de Transformers)?",
          de: "Was ist die Schlüsselinnovation von BERT (Bidirectional Encoder Representations from Transformers)?",
          nl: "Wat is de belangrijkste innovatie van BERT (Bidirectional Encoder Representations from Transformers)?"
        },
        options: [
          { en: "Bidirectional context understanding through masked language modeling", es: "Comprensión de contexto bidireccional a través de modelado de lenguaje enmascarado", de: "Bidirektionales Kontextverständnis durch maskierte Sprachmodellierung", nl: "Bidirectioneel contextbegrip door gemaskeerde taalmodellering" },
          { en: "Better encoding than previous models", es: "Mejor codificación que modelos anteriores", de: "Bessere Kodierung als vorherige Modelle", nl: "Betere codering dan vorige modellen" },
          { en: "Binary encoding of transformer outputs", es: "Codificación binaria de salidas de transformer", de: "Binäre Kodierung von Transformer-Ausgaben", nl: "Binaire codering van transformer outputs" },
          { en: "Bert-specific training protocols", es: "Protocolos de entrenamiento específicos de Bert", de: "Bert-spezifische Trainingsprotokolle", nl: "Bert-specifieke trainingsprotocollen" }
        ],
        correct: 0,
        explanation: {
          en: "BERT revolutionized NLP by training bidirectionally, using context from both directions to better understand word meanings in context.",
          es: "BERT revolucionó NLP entrenando bidireccionalmente, usando contexto de ambas direcciones para entender mejor significados de palabras en contexto.",
          de: "BERT revolutionierte NLP durch bidirektionales Training, nutzt Kontext aus beiden Richtungen um Wortbedeutungen im Kontext besser zu verstehen.",
          nl: "BERT revolutioneerde NLP door bidirectioneel te trainen, gebruikt context uit beide richtingen om woordbetekenissen in context beter te begrijpen."
        }
      },
      {
        question: {
          en: "What is diffusion modeling in generative AI?",
          es: "¿Qué es el modelado de difusión en IA generativa?",
          de: "Was ist Diffusionsmodellierung in generativer KI?",
          nl: "Wat is diffusiemodellering in generatieve AI?"
        },
        options: [
          { en: "Learning to reverse a noise-adding process to generate high-quality samples", es: "Aprender a revertir un proceso de adición de ruido para generar muestras de alta calidad", de: "Lernen einen Rausch-Hinzufügungsprozess umzukehren um hochqualitative Proben zu generieren", nl: "Leren om een ruistoevoegingsproces om te keren om hoogkwalitatieve samples te genereren" },
          { en: "Diffusing model parameters across layers", es: "Difundir parámetros de modelo a través de capas", de: "Modellparameter über Schichten diffundieren", nl: "Modelparameters verspreiden over lagen" },
          { en: "Spreading training data diffusely", es: "Esparcir datos de entrenamiento difusamente", de: "Trainingsdaten diffus verbreiten", nl: "Trainingsdata diffuus verspreiden" },
          { en: "Creating diffuse image representations", es: "Crear representaciones de imagen difusas", de: "Diffuse Bildrepräsentationen erstellen", nl: "Diffuse beeldrepresentaties creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Diffusion models like DALL-E 2 and Stable Diffusion gradually add noise to data during training, then learn to reverse this process for generation.",
          es: "Los modelos de difusión como DALL-E 2 y Stable Diffusion añaden gradualmente ruido a datos durante entrenamiento, luego aprenden a revertir este proceso para generación.",
          de: "Diffusionsmodelle wie DALL-E 2 und Stable Diffusion fügen während des Trainings graduell Rauschen zu Daten hinzu, lernen dann diesen Prozess für Generierung umzukehren.",
          nl: "Diffusiemodellen zoals DALL-E 2 en Stable Diffusion voegen geleidelijk ruis toe aan data tijdens training, leren dan dit proces om te keren voor generatie."
        }
      },
      {
        question: {
          en: "What is the purpose of self-supervised learning in modern deep learning?",
          es: "¿Cuál es el propósito del aprendizaje auto-supervisado en aprendizaje profundo moderno?",
          de: "Was ist der Zweck von selbstüberwachtem Lernen in modernem Deep Learning?",
          nl: "Wat is het doel van zelf-gesuperviseerd leren in modern deep learning?"
        },
        options: [
          { en: "Learning representations from unlabeled data by creating pretext tasks", es: "Aprender representaciones de datos sin etiquetar creando tareas de pretexto", de: "Repräsentationen aus unbeschrifteten Daten lernen durch Erstellen von Vorwand-Aufgaben", nl: "Representaties leren van ongelabelde data door pretext taken te creëren" },
          { en: "Supervising the learning process automatically", es: "Supervisar el proceso de aprendizaje automáticamente", de: "Den Lernprozess automatisch überwachen", nl: "Het leerproces automatisch superviseren" },
          { en: "Self-training without external data", es: "Auto-entrenamiento sin datos externos", de: "Selbsttraining ohne externe Daten", nl: "Zelftraining zonder externe data" },
          { en: "Learning to supervise other models", es: "Aprender a supervisar otros modelos", de: "Lernen andere Modelle zu überwachen", nl: "Leren om andere modellen te superviseren" }
        ],
        correct: 0,
        explanation: {
          en: "Self-supervised learning exploits inherent structure in data (like predicting next words or image patches) to learn useful representations without manual labels.",
          es: "El aprendizaje auto-supervisado explota estructura inherente en datos (como predecir siguientes palabras o parches de imagen) para aprender representaciones útiles sin etiquetas manuales.",
          de: "Selbstüberwachtes Lernen nutzt inhärente Struktur in Daten (wie Vorhersage nächster Wörter oder Bildpatches) um nützliche Repräsentationen ohne manuelle Labels zu lernen.",
          nl: "Zelf-gesuperviseerd leren benut inherente structuur in data (zoals voorspellen van volgende woorden of beeldpatches) om nuttige representaties te leren zonder handmatige labels."
        }
      },
      {
        question: {
          en: "What is the significance of Vision Transformers (ViTs) in computer vision?",
          es: "¿Cuál es la significancia de Vision Transformers (ViTs) en visión por computadora?",
          de: "Was ist die Bedeutung von Vision Transformers (ViTs) in Computer Vision?",
          nl: "Wat is de betekenis van Vision Transformers (ViTs) in computer vision?"
        },
        options: [
          { en: "Successfully applying transformer architecture to image classification by treating image patches as tokens", es: "Aplicar exitosamente arquitectura transformer a clasificación de imágenes tratando parches de imagen como tokens", de: "Erfolgreiche Anwendung der Transformer-Architektur auf Bildklassifikation durch Behandlung von Bildpatches als Tokens", nl: "Succesvolle toepassing van transformer architectuur op beeldclassificatie door beeldpatches als tokens te behandelen" },
          { en: "Improving visual quality of transformer outputs", es: "Mejorar calidad visual de salidas de transformer", de: "Visuelle Qualität von Transformer-Ausgaben verbessern", nl: "Visuele kwaliteit van transformer outputs verbeteren" },
          { en: "Creating visual interfaces for transformers", es: "Crear interfaces visuales para transformers", de: "Visuelle Schnittstellen für Transformer erstellen", nl: "Visuele interfaces voor transformers creëren" },
          { en: "Transforming vision research methodologies", es: "Transformar metodologías de investigación de visión", de: "Vision-Forschungsmethodologien transformieren", nl: "Vision onderzoeksmethodologieën transformeren" }
        ],
        correct: 0,
        explanation: {
          en: "ViTs demonstrate that transformers can match or exceed CNNs in image tasks when sufficient training data is available, changing computer vision paradigms.",
          es: "Los ViTs demuestran que transformers pueden igualar o superar CNNs en tareas de imagen cuando hay suficientes datos de entrenamiento disponibles, cambiando paradigmas de visión por computadora.",
          de: "ViTs demonstrieren dass Transformer CNNs in Bildaufgaben erreichen oder übertreffen können wenn ausreichend Trainingsdaten verfügbar sind, ändern Computer Vision Paradigmen.",
          nl: "ViTs tonen aan dat transformers CNNs kunnen evenaren of overtreffen in beeldtaken wanneer voldoende trainingsdata beschikbaar is, veranderen computer vision paradigma's."
        }
      },
      {
        question: {
          en: "What is neural style transfer and how does it work?",
          es: "¿Qué es la transferencia de estilo neuronal y cómo funciona?",
          de: "Was ist Neural Style Transfer und wie funktioniert es?",
          nl: "Wat is neural style transfer en hoe werkt het?"
        },
        options: [
          { en: "Combining content from one image with artistic style from another using CNN feature representations", es: "Combinar contenido de una imagen con estilo artístico de otra usando representaciones de características CNN", de: "Inhalt von einem Bild mit künstlerischem Stil von einem anderen kombinieren unter Verwendung von CNN-Feature-Repräsentationen", nl: "Inhoud van één beeld combineren met artistieke stijl van een ander met behulp van CNN feature representaties" },
          { en: "Transferring neural network styles between architectures", es: "Transferir estilos de red neuronal entre arquitecturas", de: "Neuronale Netzwerkstile zwischen Architekturen übertragen", nl: "Neurale netwerkstijlen tussen architecturen overdragen" },
          { en: "Styling neural network visualizations", es: "Estilizar visualizaciones de redes neuronales", de: "Neuronale Netzwerk-Visualisierungen stylen", nl: "Neurale netwerk visualisaties stylen" },
          { en: "Learning different artistic styles separately", es: "Aprender diferentes estilos artísticos por separado", de: "Verschiedene künstlerische Stile separat lernen", nl: "Verschillende artistieke stijlen apart leren" }
        ],
        correct: 0,
        explanation: {
          en: "Neural style transfer optimizes an image to match content features from one image while matching style features (textures, colors) from another.",
          es: "La transferencia de estilo neuronal optimiza una imagen para igualar características de contenido de una imagen mientras iguala características de estilo (texturas, colores) de otra.",
          de: "Neural Style Transfer optimiert ein Bild um Inhalts-Features von einem Bild zu entsprechen während Stil-Features (Texturen, Farben) von einem anderen entsprochen werden.",
          nl: "Neural style transfer optimaliseert een beeld om content features van één beeld te matchen terwijl style features (texturen, kleuren) van een ander worden gematcht."
        }
      },
      {
        question: {
          en: "What is the main advantage of MobileNets for mobile applications?",
          es: "¿Cuál es la ventaja principal de MobileNets para aplicaciones móviles?",
          de: "Was ist der Hauptvorteil von MobileNets für mobile Anwendungen?",
          nl: "Wat is het hoofdvoordeel van MobileNets voor mobiele toepassingen?"
        },
        options: [
          { en: "Depthwise separable convolutions that dramatically reduce computational cost", es: "Convoluciones separables en profundidad que reducen dramáticamente el costo computacional", de: "Tiefenweise trennbare Faltungen die Rechenkosten dramatisch reduzieren", nl: "Depthwise separable convoluties die computationele kosten dramatisch verminderen" },
          { en: "Mobile-specific network architectures", es: "Arquitecturas de red específicas para móviles", de: "Mobile-spezifische Netzwerkarchitekturen", nl: "Mobiel-specifieke netwerkarchitecturen" },
          { en: "Better mobile device compatibility", es: "Mejor compatibilidad con dispositivos móviles", de: "Bessere Kompatibilität mit mobilen Geräten", nl: "Betere compatibiliteit met mobiele apparaten" },
          { en: "Optimized for mobile data networks", es: "Optimizado para redes de datos móviles", de: "Optimiert für mobile Datennetzwerke", nl: "Geoptimaliseerd voor mobiele datanetwerken" }
        ],
        correct: 0,
        explanation: {
          en: "MobileNets use depthwise separable convolutions to achieve similar accuracy to traditional CNNs with 8-9x fewer parameters and computations.",
          es: "MobileNets usan convoluciones separables en profundidad para lograr precisión similar a CNNs tradicionales con 8-9x menos parámetros y cálculos.",
          de: "MobileNets verwenden tiefenweise trennbare Faltungen um ähnliche Genauigkeit wie traditionelle CNNs mit 8-9x weniger Parametern und Berechnungen zu erreichen.",
          nl: "MobileNets gebruiken depthwise separable convoluties om vergelijkbare nauwkeurigheid te bereiken als traditionele CNNs met 8-9x minder parameters en berekeningen."
        }
      },
      {
        question: {
          en: "What is the key innovation of Graph Neural Networks (GNNs)?",
          es: "¿Cuál es la innovación clave de las Redes Neuronales de Grafos (GNN)?",
          de: "Was ist die Schlüsselinnovation von Graph Neural Networks (GNNs)?",
          nl: "Wat is de belangrijkste innovatie van Graph Neural Networks (GNNs)?"
        },
        options: [
          { en: "Learning on non-Euclidean graph-structured data through message passing", es: "Aprender en datos estructurados en grafos no-euclidianos a través de paso de mensajes", de: "Lernen auf nicht-euklidischen graph-strukturierten Daten durch Nachrichtenweitergabe", nl: "Leren op niet-Euclidische graaf-gestructureerde data via message passing" },
          { en: "Creating neural networks that look like graphs", es: "Crear redes neuronales que parecen grafos", de: "Neuronale Netzwerke erstellen die wie Graphen aussehen", nl: "Neurale netwerken maken die eruitzien als grafen" },
          { en: "Graphical representation of neural networks", es: "Representación gráfica de redes neuronales", de: "Grafische Darstellung neuronaler Netzwerke", nl: "Grafische weergave van neurale netwerken" },
          { en: "Graph-based optimization algorithms", es: "Algoritmos de optimización basados en grafos", de: "Graph-basierte Optimierungsalgorithmen", nl: "Graaf-gebaseerde optimalisatie algoritmes" }
        ],
        correct: 0,
        explanation: {
          en: "GNNs extend deep learning to graph domains like social networks, molecules, and knowledge graphs by aggregating information from node neighborhoods.",
          es: "Las GNN extienden el aprendizaje profundo a dominios de grafos como redes sociales, moléculas y grafos de conocimiento agregando información de vecindarios de nodos.",
          de: "GNNs erweitern Deep Learning auf Graph-Domänen wie soziale Netzwerke, Moleküle und Wissensgraphen durch Aggregation von Informationen aus Knoten-Nachbarschaften.",
          nl: "GNNs breiden deep learning uit naar graaf domeinen zoals sociale netwerken, moleculen en kennisgrafen door informatie uit knooppunt buurten te aggregeren."
        }
      },
      {
        question: {
          en: "What is the purpose of normalization flows in generative modeling?",
          es: "¿Cuál es el propósito de los flujos de normalización en modelado generativo?",
          de: "Was ist der Zweck von Normalisierungsflüssen in generativer Modellierung?",
          nl: "Wat is het doel van normalisatie flows in generatieve modellering?"
        },
        options: [
          { en: "Learning invertible transformations to map complex distributions to simple ones", es: "Aprender transformaciones invertibles para mapear distribuciones complejas a simples", de: "Invertierbare Transformationen lernen um komplexe Verteilungen auf einfache abzubilden", nl: "Inverteerbare transformaties leren om complexe distributies naar eenvoudige af te beelden" },
          { en: "Normalizing data flow through networks", es: "Normalizar flujo de datos a través de redes", de: "Datenfluss durch Netzwerke normalisieren", nl: "Datastroom door netwerken normaliseren" },
          { en: "Creating normal distribution flows", es: "Crear flujos de distribución normal", de: "Normalverteilungsflüsse erstellen", nl: "Normale distributie flows creëren" },
          { en: "Flow control in neural architectures", es: "Control de flujo en arquitecturas neuronales", de: "Flusskontrolle in neuronalen Architekturen", nl: "Flow control in neurale architecturen" }
        ],
        correct: 0,
        explanation: {
          en: "Normalizing flows enable exact likelihood computation and generation by learning reversible mappings between data and latent distributions.",
          es: "Los flujos de normalización permiten computación exacta de verosimilitud y generación aprendiendo mapeos reversibles entre datos y distribuciones latentes.",
          de: "Normalisierungsflüsse ermöglichen exakte Likelihood-Berechnung und Generierung durch Lernen reversibler Abbildungen zwischen Daten und latenten Verteilungen.",
          nl: "Normalisatie flows maken exacte likelihood berekening en generatie mogelijk door reversibele mappings tussen data en latente distributies te leren."
        }
      },
      {
        question: {
          en: "What is contrastive learning and why is it effective?",
          es: "¿Qué es el aprendizaje contrastivo y por qué es efectivo?",
          de: "Was ist kontrastives Lernen und warum ist es effektiv?",
          nl: "Wat is contrastief leren en waarom is het effectief?"
        },
        options: [
          { en: "Learning representations by distinguishing between similar and dissimilar data pairs", es: "Aprender representaciones distinguiendo entre pares de datos similares y disímiles", de: "Repräsentationen lernen durch Unterscheidung zwischen ähnlichen und unähnlichen Datenpaaren", nl: "Representaties leren door onderscheid te maken tussen vergelijkbare en verschillende dataparen" },
          { en: "Learning by contrasting different model architectures", es: "Aprender contrastando diferentes arquitecturas de modelo", de: "Lernen durch Kontrastierung verschiedener Modellarchitekturen", nl: "Leren door verschillende modelarchitecturen te contrasteren" },
          { en: "Contrasting prediction accuracy across models", es: "Contrastar precisión de predicción entre modelos", de: "Vorhersagegenauigkeit zwischen Modellen kontrastieren", nl: "Voorspellingsnauwkeurigheid tussen modellen contrasteren" },
          { en: "Learning from contrasting opinions in data", es: "Aprender de opiniones contrastantes en datos", de: "Von kontrastierenden Meinungen in Daten lernen", nl: "Leren van contrasterende meningen in data" }
        ],
        correct: 0,
        explanation: {
          en: "Contrastive learning like SimCLR learns rich representations by pulling similar samples together and pushing dissimilar ones apart in embedding space.",
          es: "El aprendizaje contrastivo como SimCLR aprende representaciones ricas atrayendo muestras similares y empujando las disímiles en espacio de embedding.",
          de: "Kontrastives Lernen wie SimCLR lernt reiche Repräsentationen durch Zusammenziehen ähnlicher Proben und Auseinanderschieben unähnlicher im Embedding-Raum.",
          nl: "Contrastief leren zoals SimCLR leert rijke representaties door vergelijkbare samples samen te trekken en verschillende uit elkaar te duwen in embedding ruimte."
        }
      },
      {
        question: {
          en: "What is the main purpose of dropout in deep neural networks?",
          es: "¿Cuál es el propósito principal del dropout en redes neuronales profundas?",
          de: "Was ist der Hauptzweck von Dropout in tiefen neuronalen Netzwerken?",
          nl: "Wat is het hoofddoel van dropout in diepe neurale netwerken?"
        },
        options: [
          { en: "Preventing overfitting by randomly deactivating neurons during training", es: "Prevenir sobreajuste desactivando aleatoriamente neuronas durante entrenamiento", de: "Overfitting verhindern durch zufällige Deaktivierung von Neuronen während des Trainings", nl: "Overfitting voorkomen door willekeurig neuronen te deactiveren tijdens training" },
          { en: "Dropping out poorly performing layers", es: "Eliminar capas de bajo rendimiento", de: "Schlecht performende Schichten entfernen", nl: "Slecht presterende lagen verwijderen" },
          { en: "Reducing network size permanently", es: "Reducir permanentemente el tamaño de red", de: "Netzwerkgröße dauerhaft reduzieren", nl: "Netwerkgrootte permanent verminderen" },
          { en: "Dropping connections between layers", es: "Eliminar conexiones entre capas", de: "Verbindungen zwischen Schichten fallen lassen", nl: "Verbindingen tussen lagen laten vallen" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout randomly sets a fraction of input units to 0 during training, which prevents neurons from co-adapting too much and reduces overfitting.",
          es: "Dropout establece aleatoriamente una fracción de unidades de entrada a 0 durante entrenamiento, lo que previene que neuronas se co-adapten demasiado y reduce sobreajuste.",
          de: "Dropout setzt zufällig einen Bruchteil der Eingabeeinheiten auf 0 während des Trainings, was verhindert dass Neuronen sich zu stark co-adaptieren und Overfitting reduziert.",
          nl: "Dropout zet willekeurig een fractie van input units op 0 tijdens training, wat voorkomt dat neuronen te veel co-adapteren en overfitting vermindert."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();