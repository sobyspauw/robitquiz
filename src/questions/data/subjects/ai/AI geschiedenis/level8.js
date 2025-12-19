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
      },
      {
        question: {
          en: "What was the contribution of attention mechanisms before transformers?",
          es: "¿Cuál fue la contribución de mecanismos de atención antes de transformers?",
          de: "Was war der Beitrag von Attention-Mechanismen vor Transformers?",
          nl: "Wat was de bijdrage van attention mechanismen voor transformers?"
        },
        options: [
          { en: "They enabled neural machine translation to focus on relevant input parts, improving translation quality", es: "Permitieron a traducción automática neuronal enfocarse en partes relevantes de entrada, mejorando calidad de traducción", de: "Sie ermöglichten neuronaler maschineller Übersetzung sich auf relevante Eingabeteile zu fokussieren und verbesserten Übersetzungsqualität", nl: "Ze stelden neurale machinevertaling in staat om te focussen op relevante invoerdelen, wat vertaalkwaliteit verbeterde" },
          { en: "They were database indexing systems", es: "Fueron sistemas de indexación de base de datos", de: "Sie waren Datenbank-Indexierungssysteme", nl: "Ze waren database indexeringssystemen" },
          { en: "They created social media", es: "Crearon redes sociales", de: "Sie schufen soziale Medien", nl: "Ze creëerden sociale media" },
          { en: "They invented programming languages", es: "Inventaron lenguajes de programación", de: "Sie erfanden Programmiersprachen", nl: "Ze vonden programmeertalen uit" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms, introduced by Bahdanau et al. (2014), allowed seq2seq models to selectively focus on different parts of input sequences when generating each output token. This solved the information bottleneck problem in encoder-decoder architectures and dramatically improved neural machine translation, paving the way for transformers.",
          es: "Los mecanismos de atención, introducidos por Bahdanau et al. (2014), permitieron a modelos seq2seq enfocarse selectivamente en diferentes partes de secuencias de entrada al generar cada token de salida. Esto resolvió el problema de cuello de botella de información.",
          de: "Attention-Mechanismen, eingeführt von Bahdanau et al. (2014), erlaubten seq2seq-Modellen sich selektiv auf verschiedene Teile von Eingabesequenzen zu fokussieren bei Generierung jedes Ausgabe-Tokens. Dies löste das Informations-Bottleneck-Problem.",
          nl: "Attention mechanismen, geïntroduceerd door Bahdanau et al. (2014), stelden seq2seq modellen in staat om selectief te focussen op verschillende delen van invoersequenties bij het genereren van elk output token. Dit loste het informatie bottleneck probleem op."
        }
      },
      {
        question: {
          en: "What was OpenAI's GPT-2's controversial release strategy in 2019?",
          es: "¿Cuál fue la estrategia de lanzamiento controvertida de GPT-2 de OpenAI en 2019?",
          de: "Was war OpenAIs kontroverse Veröffentlichungsstrategie für GPT-2 2019?",
          nl: "Wat was OpenAI's controversiële release strategie voor GPT-2 in 2019?"
        },
        options: [
          { en: "They initially withheld the full model citing concerns about malicious use of AI-generated text", es: "Inicialmente retuvieron el modelo completo citando preocupaciones sobre uso malicioso de texto generado por IA", de: "Sie hielten das vollständige Modell zunächst zurück unter Berufung auf Bedenken bezüglich böswilliger Nutzung KI-generierter Texte", nl: "Ze hielden aanvankelijk het volledige model achter onder verwijzing naar zorgen over kwaadaardig gebruik van AI-gegenereerde tekst" },
          { en: "They sold it for millions of dollars", es: "Lo vendieron por millones de dólares", de: "Sie verkauften es für Millionen Dollar", nl: "Ze verkochten het voor miljoenen dollars" },
          { en: "They gave it only to governments", es: "Lo dieron solo a gobiernos", de: "Sie gaben es nur an Regierungen", nl: "Ze gaven het alleen aan regeringen" },
          { en: "They destroyed all copies", es: "Destruyeron todas las copias", de: "Sie zerstörten alle Kopien", nl: "Ze vernietigden alle kopieën" }
        ],
        correct: 0,
        explanation: {
          en: "OpenAI's staged release of GPT-2 sparked debate about AI safety and responsible disclosure. They initially released only smaller versions, citing potential misuse for generating fake news and spam. This controversial decision highlighted growing concerns about powerful language models' societal impact and set precedent for discussions about AI release policies.",
          es: "El lanzamiento por etapas de GPT-2 de OpenAI provocó debate sobre seguridad de IA y divulgación responsable. Inicialmente lanzaron solo versiones más pequeñas, citando potencial uso indebido para generar noticias falsas y spam.",
          de: "OpenAIs gestaffelte Veröffentlichung von GPT-2 löste Debatte über KI-Sicherheit und verantwortungsvolle Offenlegung aus. Sie veröffentlichten zunächst nur kleinere Versionen unter Verweis auf potentiellen Missbrauch für Fake News und Spam.",
          nl: "OpenAI's gefaseerde release van GPT-2 veroorzaakte debat over AI veiligheid en verantwoordelijke openbaarmaking. Ze brachten aanvankelijk alleen kleinere versies uit, onder verwijzing naar mogelijk misbruik voor nepnieuws en spam."
        }
      },
      {
        question: {
          en: "What was the significance of ELMo (Embeddings from Language Models)?",
          es: "¿Cuál fue la importancia de ELMo (Embeddings from Language Models)?",
          de: "Was war die Bedeutung von ELMo (Embeddings from Language Models)?",
          nl: "Wat was de betekenis van ELMo (Embeddings from Language Models)?"
        },
        options: [
          { en: "It introduced contextualized word representations that changed meaning based on context", es: "Introdujo representaciones de palabras contextualizadas que cambiaban significado según contexto", de: "Es führte kontextualisierte Wortrepräsentationen ein die Bedeutung basierend auf Kontext änderten", nl: "Het introduceerde gecontextualiseerde woordrepresentaties die betekenis veranderden op basis van context" },
          { en: "It was a children's TV character", es: "Fue un personaje de TV infantil", de: "Es war eine Kinderfernseh-Figur", nl: "Het was een kinderTV personage" },
          { en: "It created databases", es: "Creó bases de datos", de: "Es schuf Datenbanken", nl: "Het creëerde databases" },
          { en: "It invented neural networks", es: "Inventó redes neuronales", de: "Es erfand neuronale Netzwerke", nl: "Het vond neurale netwerken uit" }
        ],
        correct: 0,
        explanation: {
          en: "ELMo (2018) represented a major advance over static embeddings like word2vec by generating context-dependent representations. The same word received different embeddings based on surrounding context, capturing polysemy and contextual nuances. This breakthrough influenced BERT and other contextual models, revolutionizing NLP transfer learning.",
          es: "ELMo (2018) representó un avance importante sobre embeddings estáticos como word2vec generando representaciones dependientes del contexto. La misma palabra recibió diferentes embeddings según contexto circundante, capturando polisemia y matices contextuales.",
          de: "ELMo (2018) stellte einen großen Fortschritt über statische Embeddings wie word2vec dar durch Generierung kontextabhängiger Repräsentationen. Dasselbe Wort erhielt verschiedene Embeddings basierend auf umgebendem Kontext und erfasste Polysemie.",
          nl: "ELMo (2018) vertegenwoordigde een grote vooruitgang over statische embeddings zoals word2vec door context-afhankelijke representaties te genereren. Hetzelfde woord kreeg verschillende embeddings gebaseerd op omringende context, wat polysemie vastlegde."
        }
      },
      {
        question: {
          en: "What was the impact of neural architecture search's AutoML developments?",
          es: "¿Cuál fue el impacto de los desarrollos AutoML de búsqueda de arquitectura neuronal?",
          de: "Was war die Auswirkung der AutoML-Entwicklungen von Neural Architecture Search?",
          nl: "Wat was de impact van AutoML ontwikkelingen van neural architecture search?"
        },
        options: [
          { en: "It democratized deep learning by automating model design, reducing need for expert knowledge", es: "Democratizó aprendizaje profundo automatizando diseño de modelo, reduciendo necesidad de conocimiento experto", de: "Es demokratisierte Deep Learning durch Automatisierung von Modell-Design und reduzierte Bedarf an Expertenwissen", nl: "Het democratiseerde deep learning door modelontwerp te automatiseren, wat de noodzaak voor expertkennis verminderde" },
          { en: "It created programming languages", es: "Creó lenguajes de programación", de: "Es schuf Programmiersprachen", nl: "Het creëerde programmeertalen" },
          { en: "It was a car manufacturer", es: "Fue un fabricante de automóviles", de: "Es war ein Autohersteller", nl: "Het was een autofabrikant" },
          { en: "It invented databases", es: "Inventó bases de datos", de: "Es erfand Datenbanken", nl: "Het vond databases uit" }
        ],
        correct: 0,
        explanation: {
          en: "AutoML tools like Google's AutoML, H2O.ai, and others built on NAS to automate the entire ML pipeline: data preprocessing, feature engineering, model selection, and hyperparameter tuning. This democratization allowed non-experts to build effective models, though concerns arose about interpretability and the environmental cost of extensive search.",
          es: "Herramientas AutoML como AutoML de Google, H2O.ai y otras construidas sobre NAS automatizaron todo el pipeline de ML: preprocesamiento de datos, ingeniería de características, selección de modelo y ajuste de hiperparámetros. Esta democratización permitió a no expertos construir modelos efectivos.",
          de: "AutoML-Tools wie Googles AutoML, H2O.ai und andere bauten auf NAS auf um die gesamte ML-Pipeline zu automatisieren: Datenvorverarbeitung, Feature Engineering, Modellauswahl und Hyperparameter-Tuning. Diese Demokratisierung erlaubte Nicht-Experten effektive Modelle zu bauen.",
          nl: "AutoML tools zoals Google's AutoML, H2O.ai en andere gebouwd op NAS automatiseerden de hele ML pipeline: data voorverwerking, feature engineering, modelselectie en hyperparameter tuning. Deze democratisering stelde niet-experts in staat effectieve modellen te bouwen."
        }
      },
      {
        question: {
          en: "What was capsule networks' proposed advantage over CNNs?",
          es: "¿Cuál fue la ventaja propuesta de redes de cápsula sobre CNN?",
          de: "Was war der vorgeschlagene Vorteil von Capsule Networks über CNNs?",
          nl: "Wat was het voorgestelde voordeel van capsule netwerken over CNNs?"
        },
        options: [
          { en: "They preserved spatial hierarchies and part-whole relationships better through vector outputs", es: "Preservaron jerarquías espaciales y relaciones parte-todo mejor mediante salidas vectoriales", de: "Sie erhielten räumliche Hierarchien und Teil-Ganzes-Beziehungen besser durch Vektor-Ausgaben", nl: "Ze behielden ruimtelijke hiërarchieën en deel-geheel relaties beter door vector outputs" },
          { en: "They were faster than all other networks", es: "Fueron más rápidas que todas las otras redes", de: "Sie waren schneller als alle anderen Netzwerke", nl: "Ze waren sneller dan alle andere netwerken" },
          { en: "They required no training data", es: "No requirieron datos de entrenamiento", de: "Sie benötigten keine Trainingsdaten", nl: "Ze vereisten geen trainingsdata" },
          { en: "They created consciousness", es: "Crearon conciencia", de: "Sie schufen Bewusstsein", nl: "Ze creëerden bewustzijn" }
        ],
        correct: 0,
        explanation: {
          en: "Geoffrey Hinton's capsule networks (2017) proposed using groups of neurons (capsules) outputting vectors rather than scalars to encode pose, deformation, and part-whole relationships. While theoretically promising for better spatial understanding and viewpoint invariance, they saw limited practical adoption due to computational cost and implementation complexity.",
          es: "Las redes de cápsula de Geoffrey Hinton (2017) propusieron usar grupos de neuronas (cápsulas) produciendo vectores en lugar de escalares para codificar pose, deformación y relaciones parte-todo. Aunque teóricamente prometedoras, vieron adopción práctica limitada.",
          de: "Geoffrey Hintons Capsule Networks (2017) schlugen vor Gruppen von Neuronen (Kapseln) zu nutzen die Vektoren statt Skalare ausgeben um Pose, Deformation und Teil-Ganzes-Beziehungen zu kodieren. Obwohl theoretisch vielversprechend, sahen sie begrenzte praktische Adoption.",
          nl: "Geoffrey Hinton's capsule netwerken (2017) stelden voor om groepen neuronen (capsules) te gebruiken die vectors in plaats van scalars uitvoeren om pose, vervorming en deel-geheel relaties te coderen. Hoewel theoretisch veelbelovend, zagen ze beperkte praktische adoptie."
        }
      },
      {
        question: {
          en: "What was the significance of neural Turing machines and differentiable programming?",
          es: "¿Cuál fue la importancia de máquinas de Turing neuronales y programación diferenciable?",
          de: "Was war die Bedeutung von Neural Turing Machines und differenzierbarer Programmierung?",
          nl: "Wat was de betekenis van neural Turing machines en differentieerbaar programmeren?"
        },
        options: [
          { en: "They extended neural networks with external memory and algorithmic capabilities through differentiable operations", es: "Extendieron redes neuronales con memoria externa y capacidades algorítmicas mediante operaciones diferenciables", de: "Sie erweiterten neuronale Netzwerke mit externem Speicher und algorithmischen Fähigkeiten durch differenzierbare Operationen", nl: "Ze breidden neurale netwerken uit met extern geheugen en algoritmische mogelijkheden door differentieerbare operaties" },
          { en: "They created quantum computers", es: "Crearon computadoras cuánticas", de: "Sie schufen Quantencomputer", nl: "Ze creëerden quantumcomputers" },
          { en: "They were hardware devices", es: "Fueron dispositivos de hardware", de: "Sie waren Hardware-Geräte", nl: "Ze waren hardware apparaten" },
          { en: "They invented databases", es: "Inventaron bases de datos", de: "Sie erfanden Datenbanken", nl: "Ze vonden databases uit" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Turing Machines (2014) and related memory-augmented networks attempted to give neural networks external read-write memory and algorithmic reasoning capabilities. Differentiable programming extended this vision, making arbitrary programs differentiable and trainable. While conceptually influential, practical applications remained limited compared to standard architectures.",
          es: "Las Máquinas de Turing Neuronales (2014) y redes relacionadas aumentadas con memoria intentaron dar a redes neuronales memoria externa de lectura-escritura y capacidades de razonamiento algorítmico. La programación diferenciable extendió esta visión.",
          de: "Neural Turing Machines (2014) und verwandte speicher-augmentierte Netzwerke versuchten neuronalen Netzwerken externen Lese-Schreib-Speicher und algorithmische Reasoning-Fähigkeiten zu geben. Differenzierbare Programmierung erweiterte diese Vision.",
          nl: "Neural Turing Machines (2014) en gerelateerde geheugen-versterkte netwerken probeerden neurale netwerken extern lees-schrijf geheugen en algoritmische redeneer mogelijkheden te geven. Differentieerbaar programmeren breidde deze visie uit."
        }
      },
      {
        question: {
          en: "What was the impact of deepfake technology on AI discourse?",
          es: "¿Cuál fue el impacto de la tecnología deepfake en el discurso de IA?",
          de: "Was war die Auswirkung von Deepfake-Technologie auf den KI-Diskurs?",
          nl: "Wat was de impact van deepfake technologie op AI discours?"
        },
        options: [
          { en: "It raised urgent concerns about misinformation, consent, and need for AI detection/regulation", es: "Planteó preocupaciones urgentes sobre desinformación, consentimiento y necesidad de detección/regulación de IA", de: "Es warf dringende Bedenken bezüglich Fehlinformation, Einwilligung und Bedarf an KI-Erkennung/Regulierung auf", nl: "Het wekte dringende zorgen op over misinformatie, toestemming en de noodzaak voor AI detectie/regulering" },
          { en: "It had no social impact", es: "No tuvo impacto social", de: "Es hatte keine sozialen Auswirkungen", nl: "Het had geen sociale impact" },
          { en: "It was only used for entertainment", es: "Solo se usó para entretenimiento", de: "Es wurde nur für Unterhaltung verwendet", nl: "Het werd alleen gebruikt voor entertainment" },
          { en: "It created new programming languages", es: "Creó nuevos lenguajes de programación", de: "Es schuf neue Programmiersprachen", nl: "Het creëerde nieuwe programmeertalen" }
        ],
        correct: 0,
        explanation: {
          en: "Deepfakes (AI-generated realistic fake videos/images) emerged around 2017, powered by GANs and autoencoders. They sparked serious concerns about misinformation, non-consensual pornography, political manipulation, and identity theft. This catalyzed research into detection methods, watermarking, and discussions about AI regulation, demonstrating technology's dual-use nature.",
          es: "Los deepfakes (videos/imágenes falsas realistas generadas por IA) surgieron alrededor de 2017, impulsados por GAN y autoencoders. Generaron serias preocupaciones sobre desinformación, pornografía no consensuada, manipulación política y robo de identidad.",
          de: "Deepfakes (KI-generierte realistische gefälschte Videos/Bilder) entstanden um 2017, angetrieben von GANs und Autoencodern. Sie lösten ernste Bedenken bezüglich Fehlinformation, nicht-einvernehmlicher Pornografie, politischer Manipulation und Identitätsdiebstahl aus.",
          nl: "Deepfakes (AI-gegenereerde realistische nep video's/afbeeldingen) ontstonden rond 2017, aangedreven door GANs en autoencoders. Ze veroorzaakten serieuze zorgen over misinformatie, niet-consensuele pornografie, politieke manipulatie en identiteitsdiefstal."
        }
      },
      {
        question: {
          en: "What was the contribution of graph neural networks (GNNs)?",
          es: "¿Cuál fue la contribución de redes neuronales de grafos (GNN)?",
          de: "Was war der Beitrag von Graph Neural Networks (GNNs)?",
          nl: "Wat was de bijdrage van graph neural networks (GNNs)?"
        },
        options: [
          { en: "They enabled deep learning on graph-structured data like social networks and molecules", es: "Permitieron aprendizaje profundo en datos estructurados en grafos como redes sociales y moléculas", de: "Sie ermöglichten Deep Learning auf graphstrukturierten Daten wie sozialen Netzwerken und Molekülen", nl: "Ze maakten deep learning mogelijk op grafisch gestructureerde data zoals sociale netwerken en moleculen" },
          { en: "They created computer graphics", es: "Crearon gráficos por computadora", de: "Sie schufen Computergrafik", nl: "Ze creëerden computergraphics" },
          { en: "They were data visualization tools", es: "Fueron herramientas de visualización de datos", de: "Sie waren Datenvisualisierungswerkzeuge", nl: "Ze waren datavisualisatie tools" },
          { en: "They invented databases", es: "Inventaron bases de datos", de: "Sie erfanden Datenbanken", nl: "Ze vonden databases uit" }
        ],
        correct: 0,
        explanation: {
          en: "GNNs extended deep learning to graph-structured data, learning representations that incorporate graph topology. Applications span drug discovery (molecular graphs), social network analysis, recommendation systems, and knowledge graphs. Variants like Graph Convolutional Networks and Graph Attention Networks became essential tools for non-Euclidean data.",
          es: "Las GNN extendieron aprendizaje profundo a datos estructurados en grafos, aprendiendo representaciones que incorporan topología de grafo. Las aplicaciones abarcan descubrimiento de fármacos, análisis de redes sociales, sistemas de recomendación y grafos de conocimiento.",
          de: "GNNs erweiterten Deep Learning auf graphstrukturierte Daten und lernten Repräsentationen die Graph-Topologie einbeziehen. Anwendungen umfassen Arzneimittelentdeckung, Social Network Analyse, Empfehlungssysteme und Wissensgraphen.",
          nl: "GNNs breidden deep learning uit naar grafisch gestructureerde data, waarbij representaties geleerd werden die graaf topologie incorporeren. Toepassingen omvatten geneesmiddelenontdekking, sociale netwerk analyse, aanbevelingssystemen en kennisgrafieën."
        }
      },
      {
        question: {
          en: "What was the significance of few-shot and zero-shot learning research?",
          es: "¿Cuál fue la importancia de la investigación de aprendizaje few-shot y zero-shot?",
          de: "Was war die Bedeutung von Few-Shot und Zero-Shot Learning Forschung?",
          nl: "Wat was de betekenis van few-shot en zero-shot learning onderzoek?"
        },
        options: [
          { en: "It aimed to enable AI systems to learn new tasks from very few or no examples, like humans", es: "Buscó permitir a sistemas de IA aprender nuevas tareas con muy pocos o ningún ejemplo, como humanos", de: "Es zielte darauf ab KI-Systemen zu ermöglichen neue Aufgaben von sehr wenigen oder keinen Beispielen zu lernen, wie Menschen", nl: "Het streefde ernaar AI systemen in staat te stellen nieuwe taken te leren van zeer weinig of geen voorbeelden, zoals mensen" },
          { en: "It reduced photo quality", es: "Redujo la calidad de fotos", de: "Es reduzierte Fotoqualität", nl: "Het verminderde fotokwaliteit" },
          { en: "It created social media", es: "Creó redes sociales", de: "Es schuf soziale Medien", nl: "Het creëerde sociale media" },
          { en: "It invented programming", es: "Inventó programación", de: "Es erfand Programmierung", nl: "Het vond programmeren uit" }
        ],
        correct: 0,
        explanation: {
          en: "Few-shot and zero-shot learning research addressed deep learning's data hunger by developing methods to generalize from minimal examples. Meta-learning, prototypical networks, and matching networks enabled rapid adaptation. Large language models later demonstrated impressive zero-shot capabilities through in-context learning, approaching human-like task generalization.",
          es: "La investigación de aprendizaje few-shot y zero-shot abordó el hambre de datos del aprendizaje profundo desarrollando métodos para generalizar a partir de ejemplos mínimos. Meta-learning, redes prototípicas y redes de coincidencia permitieron adaptación rápida.",
          de: "Few-Shot und Zero-Shot Learning Forschung adressierte Deep Learnings Datenhunger durch Entwicklung von Methoden zur Generalisierung aus minimalen Beispielen. Meta-Learning, prototypische Netzwerke und Matching Networks ermöglichten schnelle Anpassung.",
          nl: "Few-shot en zero-shot learning onderzoek pakte deep learning's datahonger aan door methoden te ontwikkelen om te generaliseren van minimale voorbeelden. Meta-learning, prototypische netwerken en matching netwerken maakten snelle aanpassing mogelijk."
        }
      },
      {
        question: {
          en: "What was AlphaFold's breakthrough achievement?",
          es: "¿Cuál fue el logro revolucionario de AlphaFold?",
          de: "Was war AlphaFolds Durchbruchleistung?",
          nl: "Wat was AlphaFold's doorbraak prestatie?"
        },
        options: [
          { en: "It solved the 50-year protein folding problem, predicting 3D structures from amino acid sequences", es: "Resolvió el problema de plegamiento de proteínas de 50 años, prediciendo estructuras 3D a partir de secuencias de aminoácidos", de: "Es löste das 50-jährige Proteinfaltungsproblem und sagte 3D-Strukturen aus Aminosäuresequenzen vorher", nl: "Het loste het 50-jarige proteïnevouwings probleem op, waarbij 3D structuren voorspeld werden uit aminozuursequenties" },
          { en: "It created new elements", es: "Creó nuevos elementos", de: "Es schuf neue Elemente", nl: "Het creëerde nieuwe elementen" },
          { en: "It invented quantum mechanics", es: "Inventó mecánica cuántica", de: "Es erfand Quantenmechanik", nl: "Het vond quantummechanica uit" },
          { en: "It was a social media platform", es: "Fue una plataforma de redes sociales", de: "Es war eine Social-Media-Plattform", nl: "Het was een sociale media platform" }
        ],
        correct: 0,
        explanation: {
          en: "AlphaFold (2018) and especially AlphaFold 2 (2020) achieved revolutionary accuracy in protein structure prediction, solving a grand challenge in biology. By combining deep learning with evolutionary, physical, and geometric constraints, it predicted structures rivaling experimental methods, accelerating drug discovery and biological research across the scientific community.",
          es: "AlphaFold (2018) y especialmente AlphaFold 2 (2020) lograron precisión revolucionaria en predicción de estructura de proteínas, resolviendo un gran desafío en biología. Al combinar aprendizaje profundo con restricciones evolutivas, físicas y geométricas.",
          de: "AlphaFold (2018) und besonders AlphaFold 2 (2020) erreichten revolutionäre Genauigkeit in Proteinstruktur-Vorhersage und lösten eine große Herausforderung in Biologie. Durch Kombination von Deep Learning mit evolutionären, physikalischen und geometrischen Constraints.",
          nl: "AlphaFold (2018) en vooral AlphaFold 2 (2020) bereikten revolutionaire nauwkeurigheid in eiwit structuur voorspelling, waarbij een grote uitdaging in biologie opgelost werd. Door deep learning te combineren met evolutionaire, fysieke en geometrische beperkingen."
        }
      },
      {
        question: {
          en: "What was the contribution of neural ordinary differential equations (Neural ODEs)?",
          es: "¿Cuál fue la contribución de ecuaciones diferenciales ordinarias neuronales (Neural ODEs)?",
          de: "Was war der Beitrag von Neural Ordinary Differential Equations (Neural ODEs)?",
          nl: "Wat was de bijdrage van neural ordinary differential equations (Neural ODEs)?"
        },
        options: [
          { en: "They provided continuous-depth models with memory efficiency and new theoretical connections", es: "Proporcionaron modelos de profundidad continua con eficiencia de memoria y nuevas conexiones teóricas", de: "Sie boten kontinuierliche Tiefenmodelle mit Speichereffizienz und neuen theoretischen Verbindungen", nl: "Ze boden continue-diepte modellen met geheugenefficiëntie en nieuwe theoretische verbindingen" },
          { en: "They created quantum computers", es: "Crearon computadoras cuánticas", de: "Sie schufen Quantencomputer", nl: "Ze creëerden quantumcomputers" },
          { en: "They were mathematical textbooks", es: "Fueron libros de texto matemáticos", de: "Sie waren mathematische Lehrbücher", nl: "Ze waren wiskundige leerboeken" },
          { en: "They invented databases", es: "Inventaron bases de datos", de: "Sie erfanden Datenbanken", nl: "Ze vonden databases uit" }
        ],
        correct: 0,
        explanation: {
          en: "Neural ODEs (2018) reconceptualized residual networks as discretizations of continuous transformations, using ODE solvers for forward passes. This enabled memory-efficient training, continuous-time models, and new connections between deep learning and dynamical systems theory. They influenced normalizing flows and sparked research in physics-informed neural networks.",
          es: "Las Neural ODEs (2018) reconceptualizaron redes residuales como discretizaciones de transformaciones continuas, usando solucionadores ODE para pases hacia adelante. Esto permitió entrenamiento eficiente en memoria, modelos de tiempo continuo y nuevas conexiones.",
          de: "Neural ODEs (2018) konzeptualisierten residuale Netzwerke als Diskretisierungen kontinuierlicher Transformationen neu und nutzten ODE-Solver für Forward Passes. Dies ermöglichte speichereffizientes Training, kontinuierliche Zeitmodelle.",
          nl: "Neural ODEs (2018) herconceptualiseerden residuele netwerken als discretisaties van continue transformaties, waarbij ODE solvers gebruikt werden voor forward passes. Dit maakte geheugen-efficiënte training mogelijk, continue-tijd modellen."
        }
      },
      {
        question: {
          en: "What was the significance of contrastive learning methods like SimCLR?",
          es: "¿Cuál fue la importancia de métodos de aprendizaje contrastivo como SimCLR?",
          de: "Was war die Bedeutung von Contrastive Learning Methoden wie SimCLR?",
          nl: "Wat was de betekenis van contrastive learning methoden zoals SimCLR?"
        },
        options: [
          { en: "They enabled powerful self-supervised learning by contrasting augmented views of data", es: "Permitieron aprendizaje auto-supervisado poderoso contrastando vistas aumentadas de datos", de: "Sie ermöglichten mächtiges selbstüberwachtes Lernen durch Kontrastierung augmentierter Ansichten von Daten", nl: "Ze maakten krachtig zelf-gesuperviseerd leren mogelijk door versterkte weergaven van data te contrasteren" },
          { en: "They created social media", es: "Crearon redes sociales", de: "Sie schufen soziale Medien", nl: "Ze creëerden sociale media" },
          { en: "They were image filters", es: "Fueron filtros de imagen", de: "Sie waren Bildfilter", nl: "Ze waren beeldfilters" },
          { en: "They invented programming", es: "Inventaron programación", de: "Sie erfanden Programmierung", nl: "Ze vonden programmeren uit" }
        ],
        correct: 0,
        explanation: {
          en: "SimCLR (2020) and related contrastive methods (MoCo, BYOL) achieved supervised-level performance using only unlabeled data. By learning to pull together augmented views of the same image while pushing apart different images, they created powerful representations. This self-supervised learning revolution reduced dependence on labeled data and influenced language models.",
          es: "SimCLR (2020) y métodos contrastivos relacionados (MoCo, BYOL) lograron rendimiento a nivel supervisado usando solo datos no etiquetados. Al aprender a juntar vistas aumentadas de la misma imagen mientras separaban imágenes diferentes, crearon representaciones poderosas.",
          de: "SimCLR (2020) und verwandte kontrastive Methoden (MoCo, BYOL) erreichten supervised-level Leistung nur mit unlabeled Daten. Durch Lernen augmentierte Ansichten desselben Bildes zusammenzuziehen während verschiedene Bilder auseinandergedrückt wurden.",
          nl: "SimCLR (2020) en gerelateerde contrastive methoden (MoCo, BYOL) bereikten supervised-niveau prestaties met alleen ongelabelde data. Door te leren versterkte weergaven van dezelfde afbeelding bij elkaar te trekken terwijl verschillende afbeeldingen uit elkaar geduwd werden."
        }
      },
      {
        question: {
          en: "What was the impact of adversarial examples research?",
          es: "¿Cuál fue el impacto de la investigación de ejemplos adversarios?",
          de: "Was war die Auswirkung der Adversarial Examples Forschung?",
          nl: "Wat was de impact van adversarial examples onderzoek?"
        },
        options: [
          { en: "It revealed neural networks' vulnerability to imperceptible perturbations, raising security concerns", es: "Reveló vulnerabilidad de redes neuronales a perturbaciones imperceptibles, planteando preocupaciones de seguridad", de: "Es enthüllte Verwundbarkeit neuronaler Netzwerke gegenüber unmerklichen Störungen und warf Sicherheitsbedenken auf", nl: "Het onthulde de kwetsbaarheid van neurale netwerken voor onmerkbare verstoringen, wat veiligheidszorgen opriep" },
          { en: "It created video games", es: "Creó videojuegos", de: "Es schuf Videospiele", nl: "Het creëerde videogames" },
          { en: "It invented encryption", es: "Inventó encriptación", de: "Es erfand Verschlüsselung", nl: "Het vond encryptie uit" },
          { en: "It was a social movement", es: "Fue un movimiento social", de: "Es war eine soziale Bewegung", nl: "Het was een sociale beweging" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial examples research (Szegedy et al., 2013) showed that tiny, often imperceptible perturbations could fool state-of-the-art neural networks. This exposed fundamental vulnerabilities in deep learning, spurring research in robust ML, certified defenses, and adversarial training. It highlighted critical concerns for deploying AI in security-sensitive applications.",
          es: "La investigación de ejemplos adversarios (Szegedy et al., 2013) mostró que pequeñas perturbaciones a menudo imperceptibles podían engañar redes neuronales de última generación. Esto expuso vulnerabilidades fundamentales en aprendizaje profundo.",
          de: "Adversarial Examples Forschung (Szegedy et al., 2013) zeigte dass winzige, oft unmerkliche Störungen state-of-the-art neuronale Netzwerke täuschen konnten. Dies legte fundamentale Verwundbarkeiten in Deep Learning offen.",
          nl: "Adversarial examples onderzoek (Szegedy et al., 2013) toonde aan dat kleine, vaak onmerkbare verstoringen state-of-the-art neurale netwerken konden misleiden. Dit onthulde fundamentele kwetsbaarheden in deep learning."
        }
      },
      {
        question: {
          en: "What was the contribution of vision transformers (ViT)?",
          es: "¿Cuál fue la contribución de transformers de visión (ViT)?",
          de: "Was war der Beitrag von Vision Transformers (ViT)?",
          nl: "Wat was de bijdrage van vision transformers (ViT)?"
        },
        options: [
          { en: "They demonstrated transformers could match/exceed CNNs on vision tasks using patch-based attention", es: "Demostraron que transformers podían igualar/superar CNN en tareas de visión usando atención basada en parches", de: "Sie demonstrierten dass Transformers CNNs bei Vision-Aufgaben durch patch-basierte Attention erreichen/übertreffen konnten", nl: "Ze toonden aan dat transformers CNNs konden evenaren/overtreffen op vision taken met patch-gebaseerde attention" },
          { en: "They created virtual reality", es: "Crearon realidad virtual", de: "Sie schufen Virtual Reality", nl: "Ze creëerden virtual reality" },
          { en: "They were camera lenses", es: "Fueron lentes de cámara", de: "Sie waren Kameraobjektive", nl: "Ze waren camera lenzen" },
          { en: "They invented photography", es: "Inventaron fotografía", de: "Sie erfanden Fotografie", nl: "Ze vonden fotografie uit" }
        ],
        correct: 0,
        explanation: {
          en: "Vision Transformers (ViT, 2020) applied transformer architecture to computer vision by treating images as sequences of patches. With sufficient data, they matched or exceeded CNN performance, demonstrating transformers' generality beyond NLP. This sparked unified architectures for vision-language tasks and influenced models like CLIP and DALL-E.",
          es: "Los Vision Transformers (ViT, 2020) aplicaron arquitectura transformer a visión por computadora tratando imágenes como secuencias de parches. Con datos suficientes, igualaron o superaron rendimiento CNN, demostrando generalidad de transformers más allá de NLP.",
          de: "Vision Transformers (ViT, 2020) wendeten Transformer-Architektur auf Computer Vision an durch Behandlung von Bildern als Sequenzen von Patches. Mit ausreichend Daten erreichten oder übertrafen sie CNN-Leistung.",
          nl: "Vision Transformers (ViT, 2020) pasten transformer architectuur toe op computer vision door afbeeldingen te behandelen als sequenties van patches. Met voldoende data evenarden of overtroffen ze CNN prestaties."
        }
      },
      {
        question: {
          en: "What was the significance of CLIP (Contrastive Language-Image Pre-training)?",
          es: "¿Cuál fue la importancia de CLIP (Contrastive Language-Image Pre-training)?",
          de: "Was war die Bedeutung von CLIP (Contrastive Language-Image Pre-training)?",
          nl: "Wat was de betekenis van CLIP (Contrastive Language-Image Pre-training)?"
        },
        options: [
          { en: "It learned joint vision-language representations enabling zero-shot image classification from text", es: "Aprendió representaciones conjuntas visión-lenguaje permitiendo clasificación de imagen zero-shot desde texto", de: "Es lernte gemeinsame Vision-Sprache-Repräsentationen die Zero-Shot-Bildklassifikation aus Text ermöglichten", nl: "Het leerde gezamenlijke vision-taal representaties die zero-shot beeldclassificatie vanuit tekst mogelijk maakten" },
          { en: "It was a video editing tool", es: "Fue una herramienta de edición de video", de: "Es war ein Videobearbeitungswerkzeug", nl: "Het was een video bewerkingstool" },
          { en: "It created social media", es: "Creó redes sociales", de: "Es schuf soziale Medien", nl: "Het creëerde sociale media" },
          { en: "It invented cameras", es: "Inventó cámaras", de: "Es erfand Kameras", nl: "Het vond camera's uit" }
        ],
        correct: 0,
        explanation: {
          en: "CLIP (2021) trained on 400M image-text pairs from the internet, learning to match images with their descriptions. This enabled impressive zero-shot transfer: classifying images using arbitrary text descriptions without task-specific training. CLIP's approach influenced multimodal AI and became foundation for text-to-image models like DALL-E 2 and Stable Diffusion.",
          es: "CLIP (2021) entrenado en 400M pares imagen-texto de internet, aprendiendo a emparejar imágenes con sus descripciones. Esto permitió impresionante transferencia zero-shot: clasificar imágenes usando descripciones de texto arbitrarias sin entrenamiento específico de tarea.",
          de: "CLIP (2021) trainiert auf 400M Bild-Text-Paaren aus dem Internet, lernte Bilder mit ihren Beschreibungen zu matchen. Dies ermöglichte beeindruckenden Zero-Shot-Transfer: Bildklassifikation mit beliebigen Textbeschreibungen ohne aufgabenspezifisches Training.",
          nl: "CLIP (2021) getraind op 400M beeld-tekst paren van het internet, leerde afbeeldingen te matchen met hun beschrijvingen. Dit maakte indrukwekkende zero-shot transfer mogelijk: afbeeldingen classificeren met willekeurige tekstbeschrijvingen zonder taak-specifieke training."
        }
      },
      {
        question: {
          en: "What was the impact of mixture of experts (MoE) architectures?",
          es: "¿Cuál fue el impacto de arquitecturas de mezcla de expertos (MoE)?",
          de: "Was war die Auswirkung von Mixture of Experts (MoE) Architekturen?",
          nl: "Wat was de impact van mixture of experts (MoE) architecturen?"
        },
        options: [
          { en: "They enabled sparsely-activated models with massive capacity but efficient inference", es: "Permitieron modelos activados escasamente con capacidad masiva pero inferencia eficiente", de: "Sie ermöglichten spärlich aktivierte Modelle mit massiver Kapazität aber effizienter Inferenz", nl: "Ze maakten schaars geactiveerde modellen mogelijk met massale capaciteit maar efficiënte inferentie" },
          { en: "They created expert systems from 1980s", es: "Crearon sistemas expertos de los 1980", de: "Sie schufen Expertensysteme aus den 1980ern", nl: "Ze creëerden expertsystemen uit de jaren 1980" },
          { en: "They were consulting firms", es: "Fueron firmas de consultoría", de: "Sie waren Beratungsfirmen", nl: "Ze waren adviesbureaus" },
          { en: "They invented databases", es: "Inventaron bases de datos", de: "Sie erfanden Datenbanken", nl: "Ze vonden databases uit" }
        ],
        correct: 0,
        explanation: {
          en: "MoE models route each input to a subset of specialized expert networks, enabling models with trillions of parameters where only a fraction activate per input. Switch Transformers (2021) and GPT-4's rumored MoE architecture demonstrated this approach's potential for scaling model capacity efficiently, balancing size with computational cost.",
          es: "Los modelos MoE enrutan cada entrada a un subconjunto de redes expertas especializadas, permitiendo modelos con trillones de parámetros donde solo una fracción se activa por entrada. Switch Transformers (2021) y la rumoreada arquitectura MoE de GPT-4 demostraron potencial.",
          de: "MoE-Modelle routen jede Eingabe zu einer Teilmenge spezialisierter Experten-Netzwerke und ermöglichen Modelle mit Billionen Parametern wo nur ein Bruchteil pro Eingabe aktiviert. Switch Transformers (2021) demonstrierten dieses Ansatz-Potenzial.",
          nl: "MoE modellen routeren elke invoer naar een subset van gespecialiseerde expert netwerken, wat modellen met triljoenen parameters mogelijk maakt waarbij slechts een fractie per invoer activeert. Switch Transformers (2021) toonden dit benaderingspotentieel."
        }
      },
      {
        question: {
          en: "What was the significance of prompt engineering and in-context learning?",
          es: "¿Cuál fue la importancia de ingeniería de prompts y aprendizaje en contexto?",
          de: "Was war die Bedeutung von Prompt Engineering und In-Context Learning?",
          nl: "Wat was de betekenis van prompt engineering en in-context learning?"
        },
        options: [
          { en: "They showed large language models could perform new tasks via carefully crafted prompts without retraining", es: "Mostraron que grandes modelos de lenguaje podían realizar nuevas tareas mediante prompts cuidadosamente elaborados sin reentrenamiento", de: "Sie zeigten dass große Sprachmodelle neue Aufgaben durch sorgfältig gestaltete Prompts ohne Retraining ausführen konnten", nl: "Ze toonden aan dat grote taalmodellen nieuwe taken konden uitvoeren via zorgvuldig opgestelde prompts zonder hertraining" },
          { en: "They were programming languages", es: "Fueron lenguajes de programación", de: "Sie waren Programmiersprachen", nl: "Ze waren programmeertalen" },
          { en: "They created social media", es: "Crearon redes sociales", de: "Sie schufen soziale Medien", nl: "Ze creëerden sociale media" },
          { en: "They invented databases", es: "Inventaron bases de datos", de: "Sie erfanden Datenbanken", nl: "Ze vonden databases uit" }
        ],
        correct: 0,
        explanation: {
          en: "GPT-3 demonstrated that large language models could perform diverse tasks through prompting alone, learning from examples provided in the prompt (few-shot) or task descriptions (zero-shot). This sparked research into prompt engineering, prompt tuning, and chain-of-thought prompting, fundamentally changing how we interact with and deploy AI systems.",
          es: "GPT-3 demostró que grandes modelos de lenguaje podían realizar tareas diversas solo mediante prompting, aprendiendo de ejemplos proporcionados en el prompt (few-shot) o descripciones de tarea (zero-shot). Esto provocó investigación en ingeniería de prompts.",
          de: "GPT-3 demonstrierte dass große Sprachmodelle diverse Aufgaben allein durch Prompting ausführen konnten, lernend aus im Prompt bereitgestellten Beispielen (few-shot) oder Aufgabenbeschreibungen (zero-shot). Dies löste Forschung in Prompt Engineering aus.",
          nl: "GPT-3 toonde aan dat grote taalmodellen diverse taken konden uitvoeren door alleen prompting, lerend van voorbeelden in de prompt (few-shot) of taakbeschrijvingen (zero-shot). Dit veroorzaakte onderzoek in prompt engineering."
        }
      },
      {
        question: {
          en: "What was the contribution of neural radiance fields (NeRF)?",
          es: "¿Cuál fue la contribución de campos de radiancia neuronales (NeRF)?",
          de: "Was war der Beitrag von Neural Radiance Fields (NeRF)?",
          nl: "Wat was de bijdrage van neural radiance fields (NeRF)?"
        },
        options: [
          { en: "They synthesized novel 3D views from 2D images using neural scene representations", es: "Sintetizaron vistas 3D novedosas a partir de imágenes 2D usando representaciones de escena neuronales", de: "Sie synthetisierten neuartige 3D-Ansichten aus 2D-Bildern unter Verwendung neuraler Szenenrepräsentationen", nl: "Ze syntheseerden nieuwe 3D weergaven vanuit 2D afbeeldingen met behulp van neurale scène representaties" },
          { en: "They created video games", es: "Crearon videojuegos", de: "Sie schufen Videospiele", nl: "Ze creëerden videogames" },
          { en: "They were camera lenses", es: "Fueron lentes de cámara", de: "Sie waren Kameraobjektive", nl: "Ze waren camera lenzen" },
          { en: "They invented photography", es: "Inventaron fotografía", de: "Sie erfanden Fotografie", nl: "Ze vonden fotografie uit" }
        ],
        correct: 0,
        explanation: {
          en: "NeRF (2020) represented 3D scenes as continuous functions mapping 5D coordinates (position and viewing direction) to color and density. By training neural networks on multiple 2D views, it achieved photorealistic novel view synthesis. NeRF revolutionized 3D reconstruction, influencing AR/VR, robotics, and creative applications.",
          es: "NeRF (2020) representó escenas 3D como funciones continuas mapeando coordenadas 5D (posición y dirección de vista) a color y densidad. Al entrenar redes neuronales en múltiples vistas 2D, logró síntesis de vista novedosa fotorrealista.",
          de: "NeRF (2020) repräsentierte 3D-Szenen als kontinuierliche Funktionen die 5D-Koordinaten (Position und Blickrichtung) auf Farbe und Dichte abbilden. Durch Training neuronaler Netzwerke auf mehreren 2D-Ansichten erreichte es fotorealistische neuartige Ansichtssynthese.",
          nl: "NeRF (2020) representeerde 3D scènes als continue functies die 5D coördinaten (positie en kijkrichting) mappen naar kleur en dichtheid. Door neurale netwerken te trainen op meerdere 2D weergaven, bereikte het fotorealistische nieuwe weergave synthese."
        }
      },
      {
        question: {
          en: "What was the impact of constitutional AI and AI alignment research?",
          es: "¿Cuál fue el impacto de IA constitucional e investigación de alineación de IA?",
          de: "Was war die Auswirkung von Constitutional AI und KI-Alignment-Forschung?",
          nl: "Wat was de impact van constitutional AI en AI alignment onderzoek?"
        },
        options: [
          { en: "It aimed to make AI systems helpful, harmless, and honest through value alignment techniques", es: "Buscó hacer sistemas de IA útiles, inofensivos y honestos mediante técnicas de alineación de valores", de: "Es zielte darauf ab KI-Systeme durch Werte-Alignment-Techniken hilfreich, harmlos und ehrlich zu machen", nl: "Het streefde ernaar AI systemen behulpzaam, onschadelijk en eerlijk te maken door waarde alignment technieken" },
          { en: "It created government systems", es: "Creó sistemas gubernamentales", de: "Es schuf Regierungssysteme", nl: "Het creëerde overheidssystemen" },
          { en: "It was a legal framework", es: "Fue un marco legal", de: "Es war ein rechtlicher Rahmen", nl: "Het was een juridisch kader" },
          { en: "It invented databases", es: "Inventó bases de datos", de: "Es erfand Datenbanken", nl: "Het vond databases uit" }
        ],
        correct: 0,
        explanation: {
          en: "As AI systems became more capable, alignment research intensified. Techniques like RLHF (Reinforcement Learning from Human Feedback), Constitutional AI, and red-teaming aimed to align AI behavior with human values. This research addressed concerns about AI safety, bias, truthfulness, and potential misuse, becoming critical as models like GPT-4 and Claude emerged.",
          es: "A medida que los sistemas de IA se volvieron más capaces, la investigación de alineación se intensificó. Técnicas como RLHF, IA Constitucional y red-teaming buscaron alinear comportamiento de IA con valores humanos. Esta investigación abordó preocupaciones sobre seguridad.",
          de: "Als KI-Systeme fähiger wurden, intensivierte sich Alignment-Forschung. Techniken wie RLHF, Constitutional AI und Red-Teaming zielten darauf ab KI-Verhalten mit menschlichen Werten auszurichten. Diese Forschung adressierte Bedenken bezüglich Sicherheit.",
          nl: "Naarmate AI systemen capabeler werden, intensiveerde alignment onderzoek. Technieken zoals RLHF, Constitutional AI en red-teaming streefden ernaar AI gedrag af te stemmen op menselijke waarden. Dit onderzoek pakte zorgen aan over veiligheid."
        }
      },
      {
        question: {
          en: "What was the significance of diffusion models like DALL-E 2 and Stable Diffusion?",
          es: "¿Cuál fue la importancia de modelos de difusión como DALL-E 2 y Stable Diffusion?",
          de: "Was war die Bedeutung von Diffusionsmodellen wie DALL-E 2 und Stable Diffusion?",
          nl: "Wat was de betekenis van diffusie modellen zoals DALL-E 2 en Stable Diffusion?"
        },
        options: [
          { en: "They revolutionized text-to-image generation with unprecedented quality and control", es: "Revolucionaron generación texto-a-imagen con calidad y control sin precedentes", de: "Sie revolutionierten Text-zu-Bild-Generierung mit beispielloser Qualität und Kontrolle", nl: "Ze revolutioneerden tekst-naar-beeld generatie met ongekende kwaliteit en controle" },
          { en: "They created social media platforms", es: "Crearon plataformas de redes sociales", de: "Sie schufen Social-Media-Plattformen", nl: "Ze creëerden sociale media platforms" },
          { en: "They were image compression tools", es: "Fueron herramientas de compresión de imagen", de: "Sie waren Bildkompressionswerkzeuge", nl: "Ze waren beeldcompressie tools" },
          { en: "They invented photography", es: "Inventaron fotografía", de: "Sie erfanden Fotografie", nl: "Ze vonden fotografie uit" }
        ],
        correct: 0,
        explanation: {
          en: "Diffusion models (2020-2022) surpassed GANs in image generation quality by iteratively denoising random noise into images. DALL-E 2, Stable Diffusion, and Midjourney democratized AI art creation, enabling anyone to generate high-quality images from text. This sparked discussions about creativity, copyright, artist rights, and AI's role in creative industries.",
          es: "Los modelos de difusión (2020-2022) superaron a GANs en calidad de generación de imágenes mediante eliminación iterativa de ruido aleatorio en imágenes. DALL-E 2, Stable Diffusion y Midjourney democratizaron creación de arte con IA.",
          de: "Diffusionsmodelle (2020-2022) übertrafen GANs in Bildgenerierungsqualität durch iteratives Entrauschen von Zufallsrauschen zu Bildern. DALL-E 2, Stable Diffusion und Midjourney demokratisierten KI-Kunstschaffung.",
          nl: "Diffusie modellen (2020-2022) overtroffen GANs in beeldgeneratie kwaliteit door iteratief willekeurige ruis te ontstoren tot afbeeldingen. DALL-E 2, Stable Diffusion en Midjourney democratiseerden AI kunst creatie."
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