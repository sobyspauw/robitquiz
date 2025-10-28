// AI History Quiz - Level 8: Expert Knowledge about AI History
(function() {
  const level8 = {
    name: {
      en: "AI History Level 8",
      es: "Historia de IA Nivel 8",
      de: "KI-Geschichte Stufe 8",
      nl: "AI Geschiedenis Level 8"
    },
    questions: [
      {
        question: {
          en: "What was the significance of the development of BERT (Bidirectional Encoder Representations from Transformers) by Google in 2018?",
          es: "¿Cuál fue la importancia del desarrollo de BERT (Representaciones de Codificador Bidireccional de Transformers) por Google en 2018?",
          de: "Was war die Bedeutung der Entwicklung von BERT (Bidirectional Encoder Representations from Transformers) durch Google 2018?",
          nl: "Wat was de betekenis van de ontwikkeling van BERT (Bidirectional Encoder Representations from Transformers) door Google in 2018?"
        },
        options: [
          { en: "It introduced bidirectional context understanding for language models", es: "Introdujo comprensión de contexto bidireccional para modelos de lenguaje", de: "Es führte bidirektionales Kontextverständnis für Sprachmodelle ein", nl: "Het introduceerde bidirectioneel contextbegrip voor taalmodellen" },
          { en: "It created the first search engine", es: "Creó el primer motor de búsqueda", de: "Es schuf die erste Suchmaschine", nl: "Het creëerde de eerste zoekmachine" },
          { en: "It invented the internet", es: "Inventó internet", de: "Es erfand das Internet", nl: "Het vond het internet uit" },
          { en: "It solved quantum computing", es: "Resolvió la computación cuántica", de: "Es löste Quantencomputing", nl: "Het loste quantum computing op" }
        ],
        correct: 0,
        explanation: {
          en: "BERT revolutionized NLP by pre-training on bidirectional context (reading text in both directions), unlike previous models that only read left-to-right. This breakthrough enabled better understanding of context and achieved state-of-the-art results across many language tasks.",
          es: "BERT revolucionó el PLN pre-entrenando en contexto bidireccional (leyendo texto en ambas direcciones), a diferencia de modelos previos que solo leían de izquierda a derecha. Este avance permitió mejor comprensión de contexto y logró resultados de vanguardia en muchas tareas de lenguaje.",
          de: "BERT revolutionierte NLP durch Vortraining auf bidirektionalem Kontext (Text in beide Richtungen lesen), im Gegensatz zu vorherigen Modellen die nur von links nach rechts lasen. Dieser Durchbruch ermöglichte besseres Kontextverständnis und erreichte Spitzenergebnisse bei vielen Sprachaufgaben.",
          nl: "BERT revolutioneerde NLP door voor-training op bidirectionele context (tekst in beide richtingen lezen), in tegenstelling tot eerdere modellen die alleen van links naar rechts lazen. Deze doorbraak maakte beter contextbegrip mogelijk en behaalde toonaangevende resultaten bij veel taaltaken."
        }
      },
      {
        question: {
          en: "What was the historical importance of the XOR problem in neural network research?",
          es: "¿Cuál fue la importancia histórica del problema XOR en investigación de redes neuronales?",
          de: "Was war die historische Bedeutung des XOR-Problems in der neuronalen Netzwerkforschung?",
          nl: "Wat was het historische belang van het XOR probleem in neuraal netwerk onderzoek?"
        },
        options: [
          { en: "It created the first database", es: "Creó la primera base de datos", de: "Es schuf die erste Datenbank", nl: "Het creëerde de eerste database" },
          { en: "It demonstrated the limitations of single-layer perceptrons", es: "Demostró las limitaciones de perceptrones de una sola capa", de: "Es demonstrierte die Begrenzungen einschichtiger Perceptrons", nl: "Het toonde de beperkingen van enkele-laags perceptrons" },
          { en: "It invented programming languages", es: "Inventó lenguajes de programación", de: "Es erfand Programmiersprachen", nl: "Het vond programmeertalen uit" },
          { en: "It solved computer graphics", es: "Resolvió gráficos por computadora", de: "Es löste Computergrafik", nl: "Het loste computergraphics op" }
        ],
        correct: 1,
        explanation: {
          en: "The XOR problem, highlighted by Minsky and Papert in 'Perceptrons' (1969), showed that single-layer perceptrons couldn't solve non-linearly separable problems, contributing to the first AI winter and emphasizing the need for multi-layer networks with hidden layers.",
          es: "El problema XOR, destacado por Minsky y Papert en 'Perceptrones' (1969), mostró que los perceptrones de una sola capa no podían resolver problemas no linealmente separables, contribuyendo al primer invierno de IA y enfatizando la necesidad de redes multicapa con capas ocultas.",
          de: "Das XOR-Problem, hervorgehoben von Minsky und Papert in 'Perceptrons' (1969), zeigte dass einschichtige Perceptrons nicht-linear trennbare Probleme nicht lösen konnten, trug zum ersten KI-Winter bei und betonte die Notwendigkeit mehrschichtiger Netzwerke mit verborgenen Schichten.",
          nl: "Het XOR probleem, benadrukt door Minsky en Papert in 'Perceptrons' (1969), toonde dat enkele-laags perceptrons niet-lineair scheidbare problemen niet konden oplossen, droeg bij aan de eerste AI winter en benadrukte de behoefte aan meerlaagse netwerken met verborgen lagen."
        }
      },
      {
        question: {
          en: "What was the contribution of the Stanford Research Institute's Artificial Intelligence Center (SRI AIC) to robotics history?",
          es: "¿Cuál fue la contribución del Centro de Inteligencia Artificial del Stanford Research Institute (SRI AIC) a la historia de la robótica?",
          de: "Was war der Beitrag des Artificial Intelligence Centers des Stanford Research Institute (SRI AIC) zur Robotikgeschichte?",
          nl: "Wat was de bijdrage van het Stanford Research Institute's Artificial Intelligence Center (SRI AIC) aan de robotica geschiedenis?"
        },
        options: [
          { en: "They developed SHAKEY, the first mobile robot with AI reasoning capabilities", es: "Desarrollaron SHAKEY, el primer robot móvil con capacidades de razonamiento de IA", de: "Sie entwickelten SHAKEY, den ersten mobilen Roboter mit KI-Denkfähigkeiten", nl: "Ze ontwikkelden SHAKEY, de eerste mobiele robot met AI redeneringscapaciteiten" },
          { en: "They created the first computer virus", es: "Crearon el primer virus informático", de: "Sie schufen den ersten Computervirus", nl: "Ze creëerden het eerste computervirus" },
          { en: "They invented the microprocessor", es: "Inventaron el microprocesador", de: "Sie erfanden den Mikroprozessor", nl: "Ze vonden de microprocessor uit" },
          { en: "They developed the first operating system", es: "Desarrollaron el primer sistema operativo", de: "Sie entwickelten das erste Betriebssystem", nl: "Ze ontwikkelden het eerste besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "SRI's SHAKEY robot (1966-1972) was groundbreaking as the first mobile robot that could reason about its environment, plan sequences of actions, and navigate autonomously using computer vision and logical reasoning, setting the foundation for modern autonomous robotics.",
          es: "El robot SHAKEY de SRI (1966-1972) fue revolucionario como el primer robot móvil que podía razonar sobre su ambiente, planificar secuencias de acciones y navegar autónomamente usando visión por computadora y razonamiento lógico, sentando las bases para la robótica autónoma moderna.",
          de: "SRIs SHAKEY-Roboter (1966-1972) war bahnbrechend als erster mobiler Roboter der über seine Umgebung nachdenken, Aktionssequenzen planen und autonom mit Computer Vision und logischem Denken navigieren konnte, was die Grundlage für moderne autonome Robotik legte.",
          nl: "SRI's SHAKEY robot (1966-1972) was baanbrekend als de eerste mobiele robot die kon redeneren over zijn omgeving, actiesequenties kon plannen en autonoom kon navigeren met computer vision en logisch redeneren, wat de basis legde voor moderne autonome robotica."
        }
      },
      {
        question: {
          en: "What was the significance of the development of Q-learning by Chris Watkins in 1989?",
          es: "¿Cuál fue la importancia del desarrollo de Q-learning por Chris Watkins en 1989?",
          de: "Was war die Bedeutung der Entwicklung von Q-Learning durch Chris Watkins 1989?",
          nl: "Wat was de betekenis van de ontwikkeling van Q-learning door Chris Watkins in 1989?"
        },
        options: [
          { en: "It provided a model-free method for learning optimal policies in reinforcement learning", es: "Proporcionó un método libre de modelos para aprender políticas óptimas en aprendizaje por refuerzo", de: "Es bot eine modellfreie Methode zum Lernen optimaler Strategien im Reinforcement Learning", nl: "Het bood een modelvrije methode voor het leren van optimale beleidslijnen in reinforcement learning" },
          { en: "It created the first neural network", es: "Creó la primera red neuronal", de: "Es schuf das erste neuronale Netzwerk", nl: "Het creëerde het eerste neurale netwerk" },
          { en: "It solved natural language processing", es: "Resolvió el procesamiento de lenguaje natural", de: "Es löste natürliche Sprachverarbeitung", nl: "Het loste natuurlijke taalverwerking op" },
          { en: "It invented computer graphics", es: "Inventó gráficos por computadora", de: "Es erfand Computergrafik", nl: "Het vond computergraphics uit" }
        ],
        correct: 0,
        explanation: {
          en: "Q-learning was a breakthrough in reinforcement learning, providing an algorithm that could learn optimal action-selection policies without requiring a model of the environment, enabling agents to learn through trial and error in unknown environments.",
          es: "Q-learning fue un avance en aprendizaje por refuerzo, proporcionando un algoritmo que podía aprender políticas óptimas de selección de acciones sin requerir un modelo del ambiente, permitiendo a agentes aprender por ensayo y error en ambientes desconocidos.",
          de: "Q-Learning war ein Durchbruch im Reinforcement Learning und bot einen Algorithmus der optimale Aktionsauswahlstrategien lernen konnte ohne ein Modell der Umgebung zu benötigen, was Agenten ermöglichte durch Versuch und Irrtum in unbekannten Umgebungen zu lernen.",
          nl: "Q-learning was een doorbraak in reinforcement learning, waarbij een algoritme werd geboden dat optimale actieselectie-beleidslijnen kon leren zonder een model van de omgeving te vereisen, waardoor agenten konden leren door trial en error in onbekende omgevingen."
        }
      },
      {
        question: {
          en: "What was the historical impact of the development of Support Vector Machines (SVMs) by Vladimir Vapnik and colleagues?",
          es: "¿Cuál fue el impacto histórico del desarrollo de Máquinas de Vectores de Soporte (SVM) por Vladimir Vapnik y colegas?",
          de: "Was war die historische Auswirkung der Entwicklung von Support Vector Machines (SVMs) durch Vladimir Vapnik und Kollegen?",
          nl: "Wat was de historische impact van de ontwikkeling van Support Vector Machines (SVMs) door Vladimir Vapnik en collega's?"
        },
        options: [
          { en: "They provided a powerful method for classification and regression with strong theoretical foundations", es: "Proporcionaron un método poderoso para clasificación y regresión con fundamentos teóricos sólidos", de: "Sie boten eine mächtige Methode für Klassifikation und Regression mit starken theoretischen Grundlagen", nl: "Ze boden een krachtige methode voor classificatie en regressie met sterke theoretische fundamenten" },
          { en: "They invented the first computer", es: "Inventaron la primera computadora", de: "Sie erfanden den ersten Computer", nl: "Ze vonden de eerste computer uit" },
          { en: "They created the internet", es: "Crearon internet", de: "Sie schufen das Internet", nl: "Ze creëerden het internet" },
          { en: "They solved quantum mechanics", es: "Resolvieron la mecánica cuántica", de: "Sie lösten die Quantenmechanik", nl: "Ze losten quantummechanica op" }
        ],
        correct: 0,
        explanation: {
          en: "SVMs, developed in the 1990s, became one of the most successful machine learning algorithms before the deep learning era, providing excellent generalization performance through the principle of structural risk minimization and kernel methods for handling non-linear data.",
          es: "Los SVM, desarrollados en los años 1990, se convirtieron en uno de los algoritmos de aprendizaje automático más exitosos antes de la era del aprendizaje profundo, proporcionando excelente rendimiento de generalización a través del principio de minimización de riesgo estructural y métodos kernel para manejar datos no lineales.",
          de: "SVMs, entwickelt in den 1990er Jahren, wurden zu einem der erfolgreichsten maschinellen Lernalgorithmen vor der Deep Learning-Ära und boten exzellente Generalisierungsleistung durch das Prinzip der strukturellen Risikominimierung und Kernel-Methoden für nicht-lineare Daten.",
          nl: "SVMs, ontwikkeld in de jaren 1990, werden een van de meest succesvolle machine learning algoritmen voor het deep learning tijdperk, met excellente generalisatie-prestaties door het principe van structurele risicominimalisatie en kernel methoden voor het hanteren van niet-lineaire data."
        }
      },
      {
        question: {
          en: "What was the significance of AlphaGo's victory over Lee Sedol in 2016?",
          es: "¿Cuál fue la importancia de la victoria de AlphaGo sobre Lee Sedol en 2016?",
          de: "Was war die Bedeutung von AlphaGos Sieg über Lee Sedol 2016?",
          nl: "Wat was de betekenis van AlphaGo's overwinning op Lee Sedol in 2016?"
        },
        options: [
          { en: "It was the first time AI defeated a world champion at Go, a game more complex than chess", es: "Fue la primera vez que IA derrotó a un campeón mundial en Go, un juego más complejo que ajedrez", de: "Es war das erste Mal dass KI einen Weltmeister in Go besiegte, einem komplexeren Spiel als Schach", nl: "Het was de eerste keer dat AI een wereldkampioen versloeg in Go, een spel complexer dan schaak" },
          { en: "It created the first computer", es: "Creó la primera computadora", de: "Es schuf den ersten Computer", nl: "Het creëerde de eerste computer" },
          { en: "It solved quantum physics", es: "Resolvió la física cuántica", de: "Es löste die Quantenphysik", nl: "Het loste quantumfysica op" },
          { en: "It invented the internet", es: "Inventó internet", de: "Es erfand das Internet", nl: "Het vond het internet uit" }
        ],
        correct: 0,
        explanation: {
          en: "AlphaGo's 4-1 victory over Lee Sedol marked a watershed moment, demonstrating that AI could master intuitive, strategic thinking in Go (10^170 possible positions), previously thought to require human intuition. This breakthrough showcased deep reinforcement learning and Monte Carlo tree search.",
          es: "La victoria 4-1 de AlphaGo sobre Lee Sedol marcó un momento decisivo, demostrando que la IA podía dominar el pensamiento intuitivo y estratégico en Go (10^170 posiciones posibles), previamente considerado requeridor de intuición humana. Este avance mostró aprendizaje profundo por refuerzo y búsqueda de árbol Monte Carlo.",
          de: "AlphaGos 4-1 Sieg über Lee Sedol markierte einen Wendepunkt und demonstrierte dass KI intuitives, strategisches Denken in Go beherrschen konnte (10^170 mögliche Positionen), was zuvor menschliche Intuition zu erfordern schien. Dieser Durchbruch zeigte tiefes Reinforcement Learning und Monte Carlo Baumsuche.",
          nl: "AlphaGo's 4-1 overwinning op Lee Sedol markeerde een keerpunt, en toonde dat AI intuïtief, strategisch denken in Go kon beheersen (10^170 mogelijke posities), wat eerder menselijke intuïtie leek te vereisen. Deze doorbraak toonde deep reinforcement learning en Monte Carlo tree search."
        }
      },
      {
        question: {
          en: "What revolutionary architecture was introduced in the 'Attention Is All You Need' paper by Vaswani et al. in 2017?",
          es: "¿Qué arquitectura revolucionaria fue introducida en el artículo 'Attention Is All You Need' por Vaswani et al. en 2017?",
          de: "Welche revolutionäre Architektur wurde im 'Attention Is All You Need' Paper von Vaswani et al. 2017 eingeführt?",
          nl: "Welke revolutionaire architectuur werd geïntroduceerd in het 'Attention Is All You Need' paper van Vaswani et al. in 2017?"
        },
        options: [
          { en: "The Transformer architecture", es: "La arquitectura Transformer", de: "Die Transformer-Architektur", nl: "De Transformer architectuur" },
          { en: "Convolutional Neural Networks", es: "Redes Neuronales Convolucionales", de: "Konvolutionale Neurale Netzwerke", nl: "Convolutionele Neurale Netwerken" },
          { en: "Recurrent Neural Networks", es: "Redes Neuronales Recurrentes", de: "Rekurrente Neurale Netzwerke", nl: "Recurrente Neurale Netwerken" },
          { en: "Support Vector Machines", es: "Máquinas de Vectores de Soporte", de: "Support Vector Machines", nl: "Support Vector Machines" }
        ],
        correct: 0,
        explanation: {
          en: "The Transformer architecture revolutionized NLP by relying entirely on attention mechanisms, eliminating recurrence and convolutions. This enabled better parallelization, captured long-range dependencies more effectively, and became the foundation for modern large language models like GPT and BERT.",
          es: "La arquitectura Transformer revolucionó el PLN basándose completamente en mecanismos de atención, eliminando recurrencia y convoluciones. Esto permitió mejor paralelización, capturó dependencias de largo alcance más efectivamente, y se convirtió en la base para modelos de lenguaje grandes modernos como GPT y BERT.",
          de: "Die Transformer-Architektur revolutionierte NLP indem sie sich vollständig auf Aufmerksamkeitsmechanismen stützte und Rekurrenz und Konvolutionen eliminierte. Dies ermöglichte bessere Parallelisierung, erfasste Fernabhängigkeiten effektiver und wurde die Grundlage für moderne große Sprachmodelle wie GPT und BERT.",
          nl: "De Transformer architectuur revolutioneerde NLP door volledig te vertrouwen op attention mechanismen, waarbij recurrence en convoluties werden geëlimineerd. Dit maakte betere parallelisatie mogelijk, ving lange-afstand afhankelijkheden effectiever op, en werd de basis voor moderne grote taalmodellen zoals GPT en BERT."
        }
      },
      {
        question: {
          en: "What was the breakthrough achievement of OpenAI Five in 2018?",
          es: "¿Cuál fue el logro revolucionario de OpenAI Five en 2018?",
          de: "Was war die Durchbruchsleistung von OpenAI Five 2018?",
          nl: "Wat was de doorbraakprestatie van OpenAI Five in 2018?"
        },
        options: [
          { en: "It became the first AI to defeat professional human teams at Dota 2, a complex real-time strategy game", es: "Se convirtió en la primera IA en derrotar equipos humanos profesionales en Dota 2, un juego de estrategia en tiempo real complejo", de: "Es wurde die erste KI die professionelle menschliche Teams in Dota 2 besiegte, einem komplexen Echtzeitstrategie-Spiel", nl: "Het werd de eerste AI die professionele menselijke teams versloeg in Dota 2, een complex real-time strategie spel" },
          { en: "It created the first neural network", es: "Creó la primera red neuronal", de: "Es schuf das erste neuronale Netzwerk", nl: "Het creëerde het eerste neurale netwerk" },
          { en: "It solved climate change", es: "Resolvió el cambio climático", de: "Es löste den Klimawandel", nl: "Het loste klimaatverandering op" },
          { en: "It invented quantum computing", es: "Inventó la computación cuántica", de: "Es erfand Quantencomputing", nl: "Het vond quantum computing uit" }
        ],
        correct: 0,
        explanation: {
          en: "OpenAI Five's victory demonstrated AI's ability to handle complex, multi-agent real-time scenarios with imperfect information, long-term strategy, and team coordination. This achievement showed progress beyond turn-based games toward more realistic, dynamic environments.",
          es: "La victoria de OpenAI Five demostró la capacidad de la IA para manejar escenarios complejos multi-agente en tiempo real con información imperfecta, estrategia a largo plazo y coordinación en equipo. Este logro mostró progreso más allá de juegos por turnos hacia ambientes más realistas y dinámicos.",
          de: "OpenAI Fives Sieg demonstrierte KIs Fähigkeit komplexe Multi-Agent Echtzeit-Szenarien mit unvollständigen Informationen, Langzeitstrategie und Teamkoordination zu handhaben. Diese Leistung zeigte Fortschritt über rundenbasierte Spiele hinaus zu realistischeren, dynamischen Umgebungen.",
          nl: "OpenAI Five's overwinning toonde AI's vermogen om complexe, multi-agent real-time scenario's te hanteren met onvolledige informatie, lange-termijn strategie en teamcoördinatie. Deze prestatie toonde vooruitgang voorbij beurt-gebaseerde spellen naar meer realistische, dynamische omgevingen."
        }
      },
      {
        question: {
          en: "What was the significance of ResNet (Residual Networks) introduced by He et al. in 2015?",
          es: "¿Cuál fue la importancia de ResNet (Redes Residuales) introducida por He et al. en 2015?",
          de: "Was war die Bedeutung von ResNet (Residual Networks) eingeführt von He et al. 2015?",
          nl: "Wat was de betekenis van ResNet (Residual Networks) geïntroduceerd door He et al. in 2015?"
        },
        options: [
          { en: "It solved the vanishing gradient problem, enabling training of very deep neural networks", es: "Resolvió el problema del gradiente que desaparece, permitiendo entrenamiento de redes neuronales muy profundas", de: "Es löste das Problem verschwindender Gradienten und ermöglichte Training sehr tiefer neuronaler Netzwerke", nl: "Het loste het verdwijnende gradiënt probleem op, waardoor training van zeer diepe neurale netwerken mogelijk werd" },
          { en: "It created the first computer", es: "Creó la primera computadora", de: "Es schuf den ersten Computer", nl: "Het creëerde de eerste computer" },
          { en: "It solved natural language processing completely", es: "Resolvió el procesamiento de lenguaje natural completamente", de: "Es löste natürliche Sprachverarbeitung vollständig", nl: "Het loste natuurlijke taalverwerking volledig op" },
          { en: "It invented the internet", es: "Inventó internet", de: "Es erfand das Internet", nl: "Het vond het internet uit" }
        ],
        correct: 0,
        explanation: {
          en: "ResNet's skip connections allowed gradients to flow directly through shortcut paths, solving the vanishing gradient problem that prevented training of very deep networks. This enabled networks with 152+ layers, significantly improving computer vision performance and influencing subsequent deep learning architectures.",
          es: "Las conexiones de salto de ResNet permitieron que los gradientes fluyeran directamente a través de rutas de acceso directo, resolviendo el problema del gradiente que desaparece que impedía el entrenamiento de redes muy profundas. Esto permitió redes con 152+ capas, mejorando significativamente el rendimiento de visión por computadora e influenciando arquitecturas posteriores de aprendizaje profundo.",
          de: "ResNets Skip-Verbindungen ermöglichten Gradienten direkt durch Shortcut-Pfade zu fließen, was das Problem verschwindender Gradienten löste das Training sehr tiefer Netzwerke verhinderte. Dies ermöglichte Netzwerke mit 152+ Schichten, verbesserte Computer Vision Leistung erheblich und beeinflusste nachfolgende Deep Learning Architekturen.",
          nl: "ResNet's skip connections stelden gradiënten in staat direct door shortcut paden te stromen, wat het verdwijnende gradiënt probleem oploste dat training van zeer diepe netwerken verhinderde. Dit maakte netwerken met 152+ lagen mogelijk, verbeterde computer vision prestaties aanzienlijk en beïnvloedde latere deep learning architecturen."
        }
      },
      {
        question: {
          en: "What was the breakthrough in generative AI achieved by GANs (Generative Adversarial Networks) introduced by Ian Goodfellow in 2014?",
          es: "¿Cuál fue el avance en IA generativa logrado por GANs (Redes Generativas Adversariales) introducidas por Ian Goodfellow en 2014?",
          de: "Was war der Durchbruch in generativer KI erreicht durch GANs (Generative Adversarial Networks) eingeführt von Ian Goodfellow 2014?",
          nl: "Wat was de doorbraak in generatieve AI behaald door GANs (Generative Adversarial Networks) geïntroduceerd door Ian Goodfellow in 2014?"
        },
        options: [
          { en: "They enabled high-quality generation of realistic images through adversarial training", es: "Permitieron generación de alta calidad de imágenes realistas a través de entrenamiento adversarial", de: "Sie ermöglichten hochqualitative Generierung realistischer Bilder durch adversariales Training", nl: "Ze maakten hoogwaardige generatie van realistische afbeeldingen mogelijk door adversarial training" },
          { en: "They solved quantum mechanics", es: "Resolvieron la mecánica cuántica", de: "Sie lösten die Quantenmechanik", nl: "Ze losten quantummechanica op" },
          { en: "They created the first neural network", es: "Crearon la primera red neuronal", de: "Sie schufen das erste neuronale Netzwerk", nl: "Ze creëerden het eerste neurale netwerk" },
          { en: "They invented time travel", es: "Inventaron el viaje en el tiempo", de: "Sie erfanden Zeitreisen", nl: "Ze vonden tijdreizen uit" }
        ],
        correct: 0,
        explanation: {
          en: "GANs revolutionized generative modeling by pitting two neural networks against each other: a generator creating fake data and a discriminator trying to detect fakes. This adversarial process led to remarkably realistic synthetic images and sparked the generative AI revolution.",
          es: "Los GANs revolucionaron el modelado generativo enfrentando dos redes neuronales: un generador creando datos falsos y un discriminador tratando de detectar falsificaciones. Este proceso adversarial llevó a imágenes sintéticas notablemente realistas y desencadenó la revolución de IA generativa.",
          de: "GANs revolutionierten generative Modellierung indem sie zwei neuronale Netzwerke gegeneinander antreten ließen: einen Generator der gefälschte Daten erstellt und einen Diskriminator der Fälschungen zu erkennen versucht. Dieser adversariale Prozess führte zu bemerkenswert realistischen synthetischen Bildern und entfachte die generative KI-Revolution.",
          nl: "GANs revolutioneerden generatieve modellering door twee neurale netwerken tegen elkaar op te zetten: een generator die nep data creëert en een discriminator die vervalsingen probeert te detecteren. Dit adversarial proces leidde tot opmerkelijk realistische synthetische afbeeldingen en startte de generatieve AI revolutie."
        }
      },
      {
        question: {
          en: "What was the significance of the development of Word2Vec by Mikolov et al. at Google in 2013?",
          es: "¿Cuál fue la importancia del desarrollo de Word2Vec por Mikolov et al. en Google en 2013?",
          de: "Was war die Bedeutung der Entwicklung von Word2Vec durch Mikolov et al. bei Google 2013?",
          nl: "Wat was de betekenis van de ontwikkeling van Word2Vec door Mikolov et al. bij Google in 2013?"
        },
        options: [
          { en: "It created dense vector representations of words that captured semantic relationships", es: "Creó representaciones vectoriales densas de palabras que capturaron relaciones semánticas", de: "Es schuf dichte Vektordarstellungen von Wörtern die semantische Beziehungen erfassten", nl: "Het creëerde dichte vectorrepresentaties van woorden die semantische relaties vastlegden" },
          { en: "It solved quantum computing", es: "Resolvió la computación cuántica", de: "Es löste Quantencomputing", nl: "Het loste quantum computing op" },
          { en: "It created the first search engine", es: "Creó el primer motor de búsqueda", de: "Es schuf die erste Suchmaschine", nl: "Het creëerde de eerste zoekmachine" },
          { en: "It invented neural networks", es: "Inventó las redes neuronales", de: "Es erfand neuronale Netzwerke", nl: "Het vond neurale netwerken uit" }
        ],
        correct: 0,
        explanation: {
          en: "Word2Vec demonstrated that neural networks could learn meaningful word embeddings where semantically similar words had similar vector representations. The famous example 'king - man + woman = queen' showed how these embeddings captured analogical relationships, revolutionizing how we represent text in AI systems.",
          es: "Word2Vec demostró que las redes neuronales podían aprender embeddings de palabras significativos donde palabras semánticamente similares tenían representaciones vectoriales similares. El famoso ejemplo 'rey - hombre + mujer = reina' mostró cómo estos embeddings capturaron relaciones analógicas, revolucionando cómo representamos texto en sistemas de IA.",
          de: "Word2Vec demonstrierte dass neuronale Netzwerke bedeutungsvolle Wort-Embeddings lernen konnten wo semantisch ähnliche Wörter ähnliche Vektordarstellungen hatten. Das berühmte Beispiel 'König - Mann + Frau = Königin' zeigte wie diese Embeddings analogische Beziehungen erfassten und revolutionierte wie wir Text in KI-Systemen repräsentieren.",
          nl: "Word2Vec toonde aan dat neurale netwerken betekenisvolle word embeddings konden leren waarbij semantisch vergelijkbare woorden soortgelijke vectorrepresentaties hadden. Het beroemde voorbeeld 'koning - man + vrouw = koningin' toonde hoe deze embeddings analogische relaties vastlegden, wat een revolutie teweegbracht in hoe we tekst in AI systemen representeren."
        }
      },
      {
        question: {
          en: "What was the breakthrough achieved by DeepMind's AlphaStar in 2019?",
          es: "¿Cuál fue el avance logrado por AlphaStar de DeepMind en 2019?",
          de: "Was war der Durchbruch von DeepMinds AlphaStar 2019?",
          nl: "Wat was de doorbraak behaald door DeepMind's AlphaStar in 2019?"
        },
        options: [
          { en: "It achieved Grandmaster level in StarCraft II, mastering complex real-time strategy with imperfect information", es: "Alcanzó nivel Gran Maestro en StarCraft II, dominando estrategia compleja en tiempo real con información imperfecta", de: "Es erreichte Großmeister-Niveau in StarCraft II und beherrschte komplexe Echtzeitstrategie mit unvollständigen Informationen", nl: "Het behaalde Grandmaster niveau in StarCraft II, waarbij complexe real-time strategie met onvolledige informatie werd beheerst" },
          { en: "It solved protein folding", es: "Resolvió el plegamiento de proteínas", de: "Es löste Proteinfaltung", nl: "Het loste proteïnevouwing op" },
          { en: "It created the first computer", es: "Creó la primera computadora", de: "Es schuf den ersten Computer", nl: "Het creëerde de eerste computer" },
          { en: "It invented quantum mechanics", es: "Inventó la mecánica cuántica", de: "Es erfand die Quantenmechanik", nl: "Het vond quantummechanica uit" }
        ],
        correct: 0,
        explanation: {
          en: "AlphaStar became the first AI to achieve Grandmaster level in StarCraft II, handling real-time decision making, long-term planning, and complex multi-unit control with imperfect information. This demonstrated AI's progress toward mastering complex, dynamic environments requiring both tactical and strategic thinking.",
          es: "AlphaStar se convirtió en la primera IA en alcanzar nivel Gran Maestro en StarCraft II, manejando toma de decisiones en tiempo real, planificación a largo plazo y control complejo de múltiples unidades con información imperfecta. Esto demostró el progreso de la IA hacia dominar ambientes complejos y dinámicos que requieren pensamiento tanto táctico como estratégico.",
          de: "AlphaStar wurde die erste KI die Großmeister-Niveau in StarCraft II erreichte, mit Echtzeitentscheidungen, Langzeitplanung und komplexer Mehreinheiten-Kontrolle mit unvollständigen Informationen. Dies demonstrierte KIs Fortschritt zur Beherrschung komplexer, dynamischer Umgebungen die sowohl taktisches als auch strategisches Denken erfordern.",
          nl: "AlphaStar werd de eerste AI die Grandmaster niveau in StarCraft II behaalde, waarbij real-time besluitvorming, lange-termijn planning en complexe multi-unit controle met onvolledige informatie werd gehandhaafd. Dit toonde AI's vooruitgang naar het beheersen van complexe, dynamische omgevingen die zowel tactisch als strategisch denken vereisen."
        }
      },
      {
        question: {
          en: "What was the significance of the ImageNet competition and its impact on computer vision (2009-2017)?",
          es: "¿Cuál fue la importancia de la competición ImageNet y su impacto en visión por computadora (2009-2017)?",
          de: "Was war die Bedeutung der ImageNet-Konkurrenz und ihr Einfluss auf Computer Vision (2009-2017)?",
          nl: "Wat was de betekenis van de ImageNet competitie en de impact op computer vision (2009-2017)?"
        },
        options: [
          { en: "It drove rapid improvements in deep learning for image recognition, culminating in superhuman performance", es: "Impulsó mejoras rápidas en aprendizaje profundo para reconocimiento de imágenes, culminando en rendimiento sobrehumano", de: "Es trieb schnelle Verbesserungen im Deep Learning für Bilderkennung voran und gipfelte in übermenschlicher Leistung", nl: "Het dreef snelle verbeteringen in deep learning voor beeldherkenning aan, culminerend in bovenmenselijke prestaties" },
          { en: "It created the first neural network", es: "Creó la primera red neuronal", de: "Es schuf das erste neuronale Netzwerk", nl: "Het creëerde het eerste neurale netwerk" },
          { en: "It solved natural language processing", es: "Resolvió el procesamiento de lenguaje natural", de: "Es löste natürliche Sprachverarbeitung", nl: "Het loste natuurlijke taalverwerking op" },
          { en: "It invented quantum computing", es: "Inventó la computación cuántica", de: "Es erfand Quantencomputing", nl: "Het vond quantum computing uit" }
        ],
        correct: 0,
        explanation: {
          en: "The ImageNet Large Scale Visual Recognition Challenge provided a standardized benchmark that drove the deep learning revolution. AlexNet's victory in 2012 marked the beginning of the deep learning era, and by 2015, systems achieved superhuman performance on image classification, demonstrating AI's rapid progress in computer vision.",
          es: "El ImageNet Large Scale Visual Recognition Challenge proporcionó un benchmark estandarizado que impulsó la revolución del aprendizaje profundo. La victoria de AlexNet en 2012 marcó el inicio de la era del aprendizaje profundo, y para 2015, los sistemas lograron rendimiento sobrehumano en clasificación de imágenes, demostrando el rápido progreso de la IA en visión por computadora.",
          de: "Die ImageNet Large Scale Visual Recognition Challenge bot einen standardisierten Benchmark der die Deep Learning Revolution antrieb. AlexNets Sieg 2012 markierte den Beginn der Deep Learning Ära, und bis 2015 erreichten Systeme übermenschliche Leistung in Bildklassifikation und demonstrierten KIs schnellen Fortschritt in Computer Vision.",
          nl: "De ImageNet Large Scale Visual Recognition Challenge bood een gestandaardiseerde benchmark die de deep learning revolutie aandreef. AlexNet's overwinning in 2012 markeerde het begin van het deep learning tijdperk, en tegen 2015 behaalden systemen bovenmenselijke prestaties in beeldclassificatie, wat AI's snelle vooruitgang in computer vision demonstreerde."
        }
      },
      {
        question: {
          en: "What was the impact of DeepMind's DQN (Deep Q-Network) breakthrough in 2015?",
          es: "¿Cuál fue el impacto del avance DQN (Deep Q-Network) de DeepMind en 2015?",
          de: "Was war der Einfluss von DeepMinds DQN (Deep Q-Network) Durchbruch 2015?",
          nl: "Wat was de impact van DeepMind's DQN (Deep Q-Network) doorbraak in 2015?"
        },
        options: [
          { en: "It successfully combined deep learning with reinforcement learning, achieving human-level performance on Atari games", es: "Combinó exitosamente aprendizaje profundo con aprendizaje por refuerzo, logrando rendimiento a nivel humano en juegos Atari", de: "Es kombinierte erfolgreich Deep Learning mit Reinforcement Learning und erreichte menschliche Leistung bei Atari-Spielen", nl: "Het combineerde succesvol deep learning met reinforcement learning, waarbij menselijk niveau prestaties op Atari spellen werden behaald" },
          { en: "It created the first computer", es: "Creó la primera computadora", de: "Es schuf den ersten Computer", nl: "Het creëerde de eerste computer" },
          { en: "It solved climate change", es: "Resolvió el cambio climático", de: "Es löste den Klimawandel", nl: "Het loste klimaatverandering op" },
          { en: "It invented the internet", es: "Inventó internet", de: "Es erfand das Internet", nl: "Het vond het internet uit" }
        ],
        correct: 0,
        explanation: {
          en: "DQN demonstrated that deep neural networks could successfully learn to play Atari games directly from pixel inputs, achieving human-level performance on many games. This breakthrough showed how deep learning could be effectively combined with reinforcement learning, opening new possibilities for AI in complex environments.",
          es: "DQN demostró que las redes neuronales profundas podían aprender exitosamente a jugar juegos Atari directamente de entradas de píxeles, logrando rendimiento a nivel humano en muchos juegos. Este avance mostró cómo el aprendizaje profundo podía combinarse efectivamente con aprendizaje por refuerzo, abriendo nuevas posibilidades para IA en ambientes complejos.",
          de: "DQN demonstrierte dass tiefe neuronale Netzwerke erfolgreich Atari-Spiele direkt aus Pixel-Eingaben lernen konnten und menschliche Leistung bei vielen Spielen erreichten. Dieser Durchbruch zeigte wie Deep Learning effektiv mit Reinforcement Learning kombiniert werden konnte und eröffnete neue Möglichkeiten für KI in komplexen Umgebungen.",
          nl: "DQN toonde aan dat diepe neurale netwerken succesvol Atari spellen konden leren spelen direct van pixel inputs, waarbij menselijk niveau prestaties op veel spellen werden behaald. Deze doorbraak toonde hoe deep learning effectief kon worden gecombineerd met reinforcement learning, wat nieuwe mogelijkheden opende voor AI in complexe omgevingen."
        }
      },
      {
        question: {
          en: "What was the breakthrough achieved by ELMo (Embeddings from Language Models) in 2018?",
          es: "¿Cuál fue el avance logrado por ELMo (Embeddings from Language Models) en 2018?",
          de: "Was war der Durchbruch von ELMo (Embeddings from Language Models) 2018?",
          nl: "Wat was de doorbraak behaald door ELMo (Embeddings from Language Models) in 2018?"
        },
        options: [
          { en: "It introduced contextualized word embeddings that changed meaning based on context", es: "Introdujo embeddings de palabras contextualizados que cambiaban significado basado en contexto", de: "Es führte kontextualisierte Wort-Embeddings ein die Bedeutung basierend auf Kontext änderten", nl: "Het introduceerde gecontextualiseerde woordembeddings die betekenis veranderden gebaseerd op context" },
          { en: "It created the first neural network", es: "Creó la primera red neuronal", de: "Es schuf das erste neuronale Netzwerk", nl: "Het creëerde het eerste neurale netwerk" },
          { en: "It solved quantum mechanics", es: "Resolvió la mecánica cuántica", de: "Es löste die Quantenmechanik", nl: "Het loste quantummechanica op" },
          { en: "It invented the computer", es: "Inventó la computadora", de: "Es erfand den Computer", nl: "Het vond de computer uit" }
        ],
        correct: 0,
        explanation: {
          en: "ELMo marked a crucial step toward contextualized representations by generating word embeddings that varied based on context, unlike static embeddings like Word2Vec. This addressed the polysemy problem (words with multiple meanings) and paved the way for transformer-based models like BERT.",
          es: "ELMo marcó un paso crucial hacia representaciones contextualizadas generando embeddings de palabras que variaban basados en contexto, a diferencia de embeddings estáticos como Word2Vec. Esto abordó el problema de polisemia (palabras con múltiples significados) y allanó el camino para modelos basados en transformers como BERT.",
          de: "ELMo markierte einen entscheidenden Schritt zu kontextualisierten Repräsentationen indem es Wort-Embeddings generierte die basierend auf Kontext variierten, im Gegensatz zu statischen Embeddings wie Word2Vec. Dies adressierte das Polysemie-Problem (Wörter mit mehreren Bedeutungen) und ebnete den Weg für transformer-basierte Modelle wie BERT.",
          nl: "ELMo markeerde een cruciale stap naar gecontextualiseerde representaties door woordembeddings te genereren die varieerden gebaseerd op context, in tegenstelling tot statische embeddings zoals Word2Vec. Dit adresseerde het polysemie probleem (woorden met meerdere betekenissen) en baande de weg voor transformer-gebaseerde modellen zoals BERT."
        }
      },
      {
        question: {
          en: "What was the significance of OpenAI's GPT-2 release strategy in 2019?",
          es: "¿Cuál fue la importancia de la estrategia de lanzamiento de GPT-2 de OpenAI en 2019?",
          de: "Was war die Bedeutung von OpenAIs GPT-2 Veröffentlichungsstrategie 2019?",
          nl: "Wat was de betekenis van OpenAI's GPT-2 release strategie in 2019?"
        },
        options: [
          { en: "It sparked debates about AI safety and responsible disclosure by initially withholding the full model", es: "Desencadenó debates sobre seguridad de IA y divulgación responsable al retener inicialmente el modelo completo", de: "Es entfachte Debatten über KI-Sicherheit und verantwortliche Veröffentlichung indem es zunächst das vollständige Modell zurückhielt", nl: "Het ontketende debatten over AI veiligheid en verantwoordelijke openbaarmaking door aanvankelijk het volledige model achter te houden" },
          { en: "It created the first neural network", es: "Creó la primera red neuronal", de: "Es schuf das erste neuronale Netzwerk", nl: "Het creëerde het eerste neurale netwerk" },
          { en: "It solved climate change", es: "Resolvió el cambio climático", de: "Es löste den Klimawandel", nl: "Het loste klimaatverandering op" },
          { en: "It invented quantum computing", es: "Inventó la computación cuántica", de: "Es erfand Quantencomputing", nl: "Het vond quantum computing uit" }
        ],
        correct: 0,
        explanation: {
          en: "OpenAI's decision to initially release only smaller versions of GPT-2, citing concerns about potential misuse for generating fake news and disinformation, marked a watershed moment in AI ethics and responsible AI development, sparking widespread discussion about AI safety and governance.",
          es: "La decisión de OpenAI de lanzar inicialmente solo versiones más pequeñas de GPT-2, citando preocupaciones sobre posible mal uso para generar noticias falsas y desinformación, marcó un momento decisivo en ética de IA y desarrollo responsable de IA, desencadenando discusión generalizada sobre seguridad y gobernanza de IA.",
          de: "OpenAIs Entscheidung zunächst nur kleinere Versionen von GPT-2 zu veröffentlichen unter Berufung auf Bedenken über möglichen Missbrauch für Fake News und Desinformation markierte einen Wendepunkt in KI-Ethik und verantwortlicher KI-Entwicklung und entfachte weitreichende Diskussionen über KI-Sicherheit und Governance.",
          nl: "OpenAI's beslissing om aanvankelijk alleen kleinere versies van GPT-2 uit te brengen, daarbij bezorgdheden citerend over mogelijk misbruik voor het genereren van nepnieuws en desinformatie, markeerde een keerpunt in AI ethiek en verantwoordelijke AI ontwikkeling, wat wijdverspreide discussie over AI veiligheid en governance ontketende."
        }
      },
      {
        question: {
          en: "What was the breakthrough achieved by YOLO (You Only Look Once) in object detection?",
          es: "¿Cuál fue el avance logrado por YOLO (You Only Look Once) en detección de objetos?",
          de: "Was war der Durchbruch von YOLO (You Only Look Once) in Objekterkennung?",
          nl: "Wat was de doorbraak behaald door YOLO (You Only Look Once) in objectdetectie?"
        },
        options: [
          { en: "It unified object detection into a single neural network, enabling real-time detection", es: "Unificó detección de objetos en una sola red neuronal, permitiendo detección en tiempo real", de: "Es vereinigte Objekterkennung in einem einzigen neuronalen Netzwerk und ermöglichte Echtzeit-Erkennung", nl: "Het verenigde objectdetectie in een enkel neuraal netwerk, waardoor real-time detectie mogelijk werd" },
          { en: "It created the first computer vision system", es: "Creó el primer sistema de visión por computadora", de: "Es schuf das erste Computer Vision System", nl: "Het creëerde het eerste computer vision systeem" },
          { en: "It solved natural language processing", es: "Resolvió el procesamiento de lenguaje natural", de: "Es löste natürliche Sprachverarbeitung", nl: "Het loste natuurlijke taalverwerking op" },
          { en: "It invented neural networks", es: "Inventó las redes neuronales", de: "Es erfand neuronale Netzwerke", nl: "Het vond neurale netwerken uit" }
        ],
        correct: 0,
        explanation: {
          en: "YOLO revolutionized object detection by treating it as a single regression problem, predicting bounding boxes and class probabilities directly from full images in one evaluation. This approach was much faster than previous methods that required multiple region proposals, enabling real-time object detection applications.",
          es: "YOLO revolucionó la detección de objetos tratándola como un solo problema de regresión, prediciendo cajas delimitadoras y probabilidades de clase directamente de imágenes completas en una evaluación. Este enfoque fue mucho más rápido que métodos previos que requerían múltiples propuestas de región, permitiendo aplicaciones de detección de objetos en tiempo real.",
          de: "YOLO revolutionierte Objekterkennung indem es sie als einzelnes Regressionsproblem behandelte und Begrenzungsrahmen und Klassenwahrscheinlichkeiten direkt aus vollständigen Bildern in einer Auswertung vorhersagte. Dieser Ansatz war viel schneller als vorherige Methoden die mehrere Regionsvorschläge benötigten und ermöglichte Echtzeit-Objekterkennungsanwendungen.",
          nl: "YOLO revolutioneerde objectdetectie door het te behandelen als een enkel regressieprobleem, waarbij bounding boxes en klasseprobabiliteiten direct uit volledige afbeeldingen in één evaluatie werden voorspeld. Deze benadering was veel sneller dan eerdere methoden die meerdere regiovoorstellen vereisten, waardoor real-time objectdetectie-applicaties mogelijk werden."
        }
      },
      {
        question: {
          en: "What was the significance of the development of Mask R-CNN for computer vision in 2017?",
          es: "¿Cuál fue la importancia del desarrollo de Mask R-CNN para visión por computadora en 2017?",
          de: "Was war die Bedeutung der Entwicklung von Mask R-CNN für Computer Vision 2017?",
          nl: "Wat was de betekenis van de ontwikkeling van Mask R-CNN voor computer vision in 2017?"
        },
        options: [
          { en: "It extended object detection to instance segmentation, providing pixel-level object boundaries", es: "Extendió detección de objetos a segmentación de instancias, proporcionando límites de objetos a nivel de píxel", de: "Es erweiterte Objekterkennung zu Instanzsegmentierung und bot Objektgrenzen auf Pixel-Ebene", nl: "Het breidde objectdetectie uit naar instantiesegmentatie, waarbij objectgrenzen op pixelniveau werden geboden" },
          { en: "It created the first neural network", es: "Creó la primera red neuronal", de: "Es schuf das erste neuronale Netzwerk", nl: "Het creëerde het eerste neurale netwerk" },
          { en: "It solved natural language processing", es: "Resolvió el procesamiento de lenguaje natural", de: "Es löste natürliche Sprachverarbeitung", nl: "Het loste natuurlijke taalverwerking op" },
          { en: "It invented quantum computing", es: "Inventó la computación cuántica", de: "Es erfand Quantencomputing", nl: "Het vond quantum computing uit" }
        ],
        correct: 0,
        explanation: {
          en: "Mask R-CNN advanced computer vision by simultaneously solving object detection, classification, and instance segmentation tasks. It provided precise pixel-level masks for each detected object, enabling more detailed scene understanding crucial for applications like autonomous driving and medical imaging.",
          es: "Mask R-CNN avanzó la visión por computadora resolviendo simultáneamente tareas de detección, clasificación y segmentación de instancias de objetos. Proporcionó máscaras precisas a nivel de píxel para cada objeto detectado, permitiendo comprensión de escena más detallada crucial para aplicaciones como conducción autónoma e imágenes médicas.",
          de: "Mask R-CNN brachte Computer Vision voran indem es gleichzeitig Objekterkennung, Klassifikation und Instanzsegmentierung löste. Es bot präzise Masken auf Pixel-Ebene für jedes erkannte Objekt und ermöglichte detaillierteres Szenenverständnis das für Anwendungen wie autonomes Fahren und medizinische Bildgebung entscheidend ist.",
          nl: "Mask R-CNN bevorderde computer vision door gelijktijdig objectdetectie, classificatie en instantiesegmentatie taken op te lossen. Het bood precieze maskers op pixelniveau voor elk gedetecteerd object, waardoor gedetailleerder begrip van scènes mogelijk werd dat cruciaal is voor toepassingen zoals autonoom rijden en medische beeldvorming."
        }
      },
      {
        question: {
          en: "What was the significance of the introduction of Adam optimizer by Kingma and Ba in 2014?",
          es: "¿Cuál fue la importancia de la introducción del optimizador Adam por Kingma y Ba en 2014?",
          de: "Was war die Bedeutung der Einführung des Adam-Optimierers durch Kingma und Ba 2014?",
          nl: "Wat was de betekenis van de introductie van de Adam optimizer door Kingma en Ba in 2014?"
        },
        options: [
          { en: "It provided an adaptive learning rate algorithm that became the default optimizer for deep learning", es: "Proporcionó un algoritmo de tasa de aprendizaje adaptativo que se convirtió en el optimizador por defecto para aprendizaje profundo", de: "Es bot einen adaptiven Lernraten-Algorithmus der zum Standard-Optimierer für Deep Learning wurde", nl: "Het bood een adaptief leersnelheidsalgoritme dat de standaard optimizer voor deep learning werd" },
          { en: "It created the first neural network", es: "Creó la primera red neuronal", de: "Es schuf das erste neuronale Netzwerk", nl: "Het creëerde het eerste neurale netwerk" },
          { en: "It solved quantum mechanics", es: "Resolvió la mecánica cuántica", de: "Es löste die Quantenmechanik", nl: "Het loste quantummechanica op" },
          { en: "It invented the computer", es: "Inventó la computadora", de: "Es erfand den Computer", nl: "Het vond de computer uit" }
        ],
        correct: 0,
        explanation: {
          en: "The Adam optimizer combined the benefits of AdaGrad and RMSprop, providing adaptive learning rates for each parameter while maintaining momentum. Its robustness and effectiveness across diverse deep learning tasks made it the de facto standard optimizer, significantly simplifying neural network training.",
          es: "El optimizador Adam combinó los beneficios de AdaGrad y RMSprop, proporcionando tasas de aprendizaje adaptativas para cada parámetro mientras mantenía momentum. Su robustez y efectividad a través de diversas tareas de aprendizaje profundo lo convirtió en el optimizador estándar de facto, simplificando significativamente el entrenamiento de redes neuronales.",
          de: "Der Adam-Optimierer kombinierte die Vorteile von AdaGrad und RMSprop und bot adaptive Lernraten für jeden Parameter bei Beibehaltung des Momentums. Seine Robustheit und Effektivität bei diversen Deep Learning Aufgaben machte ihn zum de facto Standard-Optimierer und vereinfachte das Training neuronaler Netzwerke erheblich.",
          nl: "De Adam optimizer combineerde de voordelen van AdaGrad en RMSprop, waarbij adaptieve leersnelheden voor elke parameter werden geboden terwijl momentum werd behouden. Zijn robuustheid en effectiviteit bij diverse deep learning taken maakte het de de facto standaard optimizer, wat neuraal netwerk training aanzienlijk vereenvoudigde."
        }
      },
      {
        question: {
          en: "What was the significance of AlphaZero's achievement in 2017?",
          es: "¿Cuál fue la importancia del logro de AlphaZero en 2017?",
          de: "Was war die Bedeutung von AlphaZeros Leistung 2017?",
          nl: "Wat was de betekenis van AlphaZero's prestatie in 2017?"
        },
        options: [
          { en: "It achieved superhuman performance in chess, shogi, and Go using only self-play without human knowledge", es: "Logró rendimiento sobrehumano en ajedrez, shogi y Go usando solo auto-juego sin conocimiento humano", de: "Es erreichte übermenschliche Leistung in Schach, Shogi und Go nur durch Selbstspiel ohne menschliches Wissen", nl: "Het behaalde bovenmenselijke prestaties in schaak, shogi en Go door alleen zelfspel zonder menselijke kennis" },
          { en: "It created the first neural network", es: "Creó la primera red neuronal", de: "Es schuf das erste neuronale Netzwerk", nl: "Het creëerde het eerste neurale netwerk" },
          { en: "It solved protein folding", es: "Resolvió el plegamiento de proteínas", de: "Es löste Proteinfaltung", nl: "Het loste proteïnevouwing op" },
          { en: "It invented quantum computing", es: "Inventó la computación cuántica", de: "Es erfand Quantencomputing", nl: "Het vond quantum computing uit" }
        ],
        correct: 0,
        explanation: {
          en: "AlphaZero represented a breakthrough in general game-playing AI by learning to master chess, shogi, and Go through pure self-play reinforcement learning, without any human game knowledge or opening books. It rediscovered centuries of chess knowledge and developed novel strategies in just hours of training.",
          es: "AlphaZero representó un avance en IA de juego general aprendiendo a dominar ajedrez, shogi y Go a través de aprendizaje por refuerzo de auto-juego puro, sin conocimiento de juego humano o libros de aperturas. Redescubrió siglos de conocimiento de ajedrez y desarrolló estrategias novedosas en solo horas de entrenamiento.",
          de: "AlphaZero stellte einen Durchbruch in allgemeinem Spiel-KI dar indem es lernte Schach, Shogi und Go durch reines Selbstspiel-Reinforcement-Learning zu beherrschen, ohne menschliches Spielwissen oder Eröffnungsbücher. Es entdeckte jahrhundertelange Schachwissen neu und entwickelte neuartige Strategien in nur Stunden Training.",
          nl: "AlphaZero vertegenwoordigde een doorbraak in algemene spel-AI door te leren schaak, shogi en Go te beheersen door pure zelfspel reinforcement learning, zonder menselijke spelkennis of openingsboeken. Het herontdekte eeuwen van schaakkennis en ontwikkelde nieuwe strategieën in slechts uren training."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();