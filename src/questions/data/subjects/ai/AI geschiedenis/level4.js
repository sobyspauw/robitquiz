// AI History Quiz - Level 4: Expert Knowledge about AI History
(function() {
  const level4 = {
    name: {
      en: "AI History Level 4",
      es: "Historia de IA Nivel 4",
      de: "KI-Geschichte Stufe 4",
      nl: "AI Geschiedenis Level 4"
    },
    questions: [
      {
        question: {
          en: "What was the 'connectionist revival' of the 1980s?",
          es: "¿Qué fue el 'resurgimiento conexionista' de los años 1980?",
          de: "Was war das 'konnektionistische Revival' der 1980er Jahre?",
          nl: "Wat was de 'connectionistische heropleving' van de jaren 1980?"
        },
        options: [
          { en: "The renewed interest in neural networks and parallel distributed processing", es: "El renovado interés en redes neuronales y procesamiento distribuido paralelo", de: "Das erneuerte Interesse an neuronalen Netzwerken und paralleler verteilter Verarbeitung", nl: "De hernieuwde interesse in neurale netwerken en parallelle gedistribueerde verwerking" },
          { en: "The development of internet protocols", es: "El desarrollo de protocolos de internet", de: "Die Entwicklung von Internet-Protokollen", nl: "De ontwikkeling van internetprotocollen" },
          { en: "The creation of expert systems", es: "La creación de sistemas expertos", de: "Die Schaffung von Expertensystemen", nl: "De creatie van expertsystemen" },
          { en: "The invention of personal computers", es: "La invención de computadoras personales", de: "Die Erfindung von Personalcomputern", nl: "De uitvinding van personal computers" }
        ],
        correct: 0,
        explanation: {
          en: "The connectionist revival was triggered by work like Rumelhart and McClelland's PDP models and backpropagation algorithm, showing that neural networks could overcome previous limitations and learn complex patterns.",
          es: "El resurgimiento conexionista fue provocado por trabajos como los modelos PDP de Rumelhart y McClelland y el algoritmo de retropropagación, mostrando que las redes neuronales podían superar limitaciones previas y aprender patrones complejos.",
          de: "Das konnektionistische Revival wurde durch Arbeiten wie Rumelharts und McClellands PDP-Modelle und den Backpropagation-Algorithmus ausgelöst, die zeigten dass neuronale Netzwerke frühere Begrenzungen überwinden und komplexe Muster lernen konnten.",
          nl: "De connectionistische heropleving werd veroorzaakt door werk zoals Rumelhart en McClelland's PDP modellen en het backpropagation algoritme, wat toonde dat neurale netwerken eerdere beperkingen konden overwinnen en complexe patronen konden leren."
        }
      },
      {
        question: {
          en: "What was significant about the CYC project started by Douglas Lenat in 1984?",
          es: "¿Qué fue significativo sobre el proyecto CYC iniciado por Douglas Lenat en 1984?",
          de: "Was war bedeutsam am CYC-Projekt das Douglas Lenat 1984 startete?",
          nl: "Wat was belangrijk aan het CYC project gestart door Douglas Lenat in 1984?"
        },
        options: [
          { en: "It aimed to encode common sense knowledge into a massive knowledge base", es: "Tenía como objetivo codificar conocimiento de sentido común en una base de conocimiento masiva", de: "Es zielte darauf ab Allgemeinwissen in einer massiven Wissensbasis zu kodieren", nl: "Het was gericht op het coderen van gezond verstand kennis in een massieve kennisbank" },
          { en: "It was the first computer virus detection system", es: "Fue el primer sistema de detección de virus informáticos", de: "Es war das erste Computervirus-Erkennungssystem", nl: "Het was het eerste computervirus detectiesysteem" },
          { en: "It created the first graphical user interface", es: "Creó la primera interfaz gráfica de usuario", de: "Es schuf die erste grafische Benutzeroberfläche", nl: "Het creëerde de eerste grafische gebruikersinterface" },
          { en: "It developed the first database management system", es: "Desarrolló el primer sistema de gestión de bases de datos", de: "Es entwickelte das erste Datenbankverwaltungssystem", nl: "Het ontwikkelde het eerste database managementsysteem" }
        ],
        correct: 0,
        explanation: {
          en: "CYC was an ambitious attempt to create a comprehensive knowledge base of human common sense, containing millions of assertions about everyday facts that humans take for granted but computers need to be explicitly told.",
          es: "CYC fue un intento ambicioso de crear una base de conocimiento comprensiva del sentido común humano, conteniendo millones de afirmaciones sobre hechos cotidianos que los humanos dan por sentado pero las computadoras necesitan que se les diga explícitamente.",
          de: "CYC war ein ehrgeiziger Versuch eine umfassende Wissensbasis des menschlichen Allgemeinwissens zu schaffen, die Millionen von Aussagen über alltägliche Fakten enthielt die Menschen für selbstverständlich halten aber Computern explizit mitgeteilt werden müssen.",
          nl: "CYC was een ambitieuze poging om een uitgebreide kennisbank van menselijk gezond verstand te creëren, met miljoenen beweringen over alledaagse feiten die mensen als vanzelfsprekend beschouwen maar computers expliciet verteld moeten worden."
        }
      },
      {
        question: {
          en: "What breakthrough did Yann LeCun achieve with convolutional neural networks in the 1980s-1990s?",
          es: "¿Qué avance logró Yann LeCun con las redes neuronales convolucionales en los años 1980-1990?",
          de: "Welchen Durchbruch erzielte Yann LeCun mit Convolutional Neural Networks in den 1980er-1990er Jahren?",
          nl: "Welke doorbraak behaalde Yann LeCun met convolutionele neurale netwerken in de jaren 1980-1990?"
        },
        options: [
          { en: "Successful handwritten digit recognition for postal systems", es: "Reconocimiento exitoso de dígitos escritos a mano para sistemas postales", de: "Erfolgreiche Erkennung handgeschriebener Ziffern für Postsysteme", nl: "Succesvolle herkenning van handgeschreven cijfers voor postsystemen" },
          { en: "The first speech recognition system", es: "El primer sistema de reconocimiento de voz", de: "Das erste Spracherkennungssystem", nl: "Het eerste spraakherkenningssysteem" },
          { en: "The invention of the internet", es: "La invención de internet", de: "Die Erfindung des Internets", nl: "De uitvinding van het internet" },
          { en: "The first computer game", es: "El primer juego de computadora", de: "Das erste Computerspiel", nl: "Het eerste computerspel" }
        ],
        correct: 0,
        explanation: {
          en: "LeCun's LeNet architecture successfully recognized handwritten ZIP codes for the US Postal Service, demonstrating that convolutional neural networks could handle real-world computer vision tasks at scale.",
          es: "La arquitectura LeNet de LeCun reconoció exitosamente códigos ZIP escritos a mano para el Servicio Postal de EE.UU., demostrando que las redes neuronales convolucionales podían manejar tareas de visión por computadora del mundo real a escala.",
          de: "LeCuns LeNet-Architektur erkannte erfolgreich handgeschriebene Postleitzahlen für den US-Postdienst und demonstrierte dass Convolutional Neural Networks reale Computer Vision-Aufgaben in großem Maßstab bewältigen konnten.",
          nl: "LeCun's LeNet architectuur herkende succesvol handgeschreven postcodes voor de Amerikaanse Postdienst, wat toonde dat convolutionele neurale netwerken echte computer vision taken op schaal konden aanpakken."
        }
      },
      {
        question: {
          en: "What was the significance of IBM's Watson winning Jeopardy! in 2011?",
          es: "¿Cuál fue la importancia de que Watson de IBM ganara Jeopardy! en 2011?",
          de: "Was war die Bedeutung von IBMs Watson-Sieg bei Jeopardy! 2011?",
          nl: "Wat was de betekenis van IBM's Watson die Jeopardy! won in 2011?"
        },
        options: [
          { en: "It demonstrated AI's ability to understand natural language and answer complex questions", es: "Demostró la capacidad de la IA para entender lenguaje natural y responder preguntas complejas", de: "Es demonstrierte die Fähigkeit der KI natürliche Sprache zu verstehen und komplexe Fragen zu beantworten", nl: "Het toonde AI's vermogen om natuurlijke taal te begrijpen en complexe vragen te beantwoorden" },
          { en: "It was the first AI to pass the Turing Test", es: "Fue la primera IA en pasar el Test de Turing", de: "Es war die erste KI die den Turing-Test bestand", nl: "Het was de eerste AI die de Turing Test behaalde" },
          { en: "It created the first artificial consciousness", es: "Creó la primera conciencia artificial", de: "Es schuf das erste künstliche Bewusstsein", nl: "Het creëerde het eerste kunstmatige bewustzijn" },
          { en: "It solved all mathematical theorems", es: "Resolvió todos los teoremas matemáticos", de: "Es löste alle mathematischen Theoreme", nl: "Het loste alle wiskundige stellingen op" }
        ],
        correct: 0,
        explanation: {
          en: "Watson's victory showcased advances in natural language processing, knowledge representation, and question-answering systems, handling wordplay, puns, and complex reasoning that had previously challenged AI systems.",
          es: "La victoria de Watson mostró avances en procesamiento de lenguaje natural, representación de conocimiento y sistemas de respuesta a preguntas, manejando juegos de palabras, albures y razonamiento complejo que previamente había desafiado a los sistemas de IA.",
          de: "Watsons Sieg zeigte Fortschritte in natürlicher Sprachverarbeitung, Wissensrepräsentation und Frage-Antwort-Systemen, die Wortspiele, Wortwitze und komplexes Denken bewältigten die zuvor KI-Systeme herausgefordert hatten.",
          nl: "Watson's overwinning toonde vooruitgang in natuurlijke taalverwerking, kennisrepresentatie en vraag-antwoord systemen, waarbij woordspelingen, woordgrappen en complex redeneren werden aangepakt die eerder AI systemen hadden uitgedaagd."
        }
      },
      {
        question: {
          en: "What was the 'AI Effect' phenomenon in the history of artificial intelligence?",
          es: "¿Qué fue el fenómeno del 'Efecto IA' en la historia de la inteligencia artificial?",
          de: "Was war das 'KI-Effekt' Phänomen in der Geschichte der künstlichen Intelligenz?",
          nl: "Wat was het 'AI Effect' fenomeen in de geschiedenis van kunstmatige intelligentie?"
        },
        options: [
          { en: "The tendency to redefine AI as 'not real AI' once a capability is achieved", es: "La tendencia a redefinir la IA como 'no IA real' una vez que se logra una capacidad", de: "Die Tendenz KI als 'nicht echte KI' neu zu definieren sobald eine Fähigkeit erreicht ist", nl: "De neiging om AI te herdefiniëren als 'geen echte AI' zodra een vaardigheid wordt bereikt" },
          { en: "The positive impact of AI on society", es: "El impacto positivo de la IA en la sociedad", de: "Die positive Auswirkung von KI auf die Gesellschaft", nl: "De positieve impact van AI op de samenleving" },
          { en: "The rapid improvement in AI capabilities", es: "La rápida mejora en capacidades de IA", de: "Die schnelle Verbesserung der KI-Fähigkeiten", nl: "De snelle verbetering in AI vaardigheden" },
          { en: "The collaboration between humans and AI", es: "La colaboración entre humanos y IA", de: "Die Zusammenarbeit zwischen Menschen und KI", nl: "De samenwerking tussen mensen en AI" }
        ],
        correct: 0,
        explanation: {
          en: "The AI Effect describes how once AI achieves a particular capability (like chess, speech recognition, or image classification), people tend to dismiss it as 'not really AI' and move the goalposts for what constitutes 'true' intelligence.",
          es: "El Efecto IA describe cómo una vez que la IA logra una capacidad particular (como ajedrez, reconocimiento de voz o clasificación de imágenes), la gente tiende a descartarla como 'no realmente IA' y mueve los objetivos de lo que constituye inteligencia 'verdadera'.",
          de: "Der KI-Effekt beschreibt wie sobald KI eine bestimmte Fähigkeit erreicht (wie Schach, Spracherkennung oder Bildklassifikation), Menschen dazu neigen es als 'nicht wirklich KI' abzutun und die Torpfosten dessen verschieben was 'wahre' Intelligenz ausmacht.",
          nl: "Het AI Effect beschrijft hoe zodra AI een bepaalde vaardigheid bereikt (zoals schaken, spraakherkenning of beeldclassificatie), mensen de neiging hebben het af te doen als 'niet echt AI' en de doelpalen verschuiven voor wat 'echte' intelligentie vormt."
        }
      },
      {
        question: {
          en: "What was the second AI Winter and what caused it?",
          es: "¿Qué fue el segundo Invierno de IA y qué lo causó?",
          de: "Was war der zweite KI-Winter und was verursachte ihn?",
          nl: "Wat was de tweede AI Winter en wat veroorzaakte het?"
        },
        options: [
          { en: "Late 1980s-early 1990s, caused by limitations of expert systems and reduced funding", es: "Finales de los 1980-principios de los 1990, causado por limitaciones de sistemas expertos y reducción de financiamiento", de: "Ende 1980er-frühe 1990er Jahre, verursacht durch Begrenzungen von Expertensystemen und reduzierte Finanzierung", nl: "Eind jaren 1980-begin jaren 1990, veroorzaakt door beperkingen van expertsystemen en verminderde financiering" },
          { en: "1995-2000, caused by the internet bubble", es: "1995-2000, causado por la burbuja de internet", de: "1995-2000, verursacht durch die Internet-Blase", nl: "1995-2000, veroorzaakt door de internetbubbel" },
          { en: "2001-2005, caused by the dot-com crash", es: "2001-2005, causado por el colapso de las punto-com", de: "2001-2005, verursacht durch den Dotcom-Crash", nl: "2001-2005, veroorzaakt door de dotcom crash" },
          { en: "Never occurred, AI research continued steadily", es: "Nunca ocurrió, la investigación de IA continuó constantemente", de: "Ist nie aufgetreten, KI-Forschung setzte sich stetig fort", nl: "Vond nooit plaats, AI onderzoek ging gestaag door" }
        ],
        correct: 0,
        explanation: {
          en: "The second AI Winter occurred in the late 1980s to early 1990s when expert systems proved brittle and expensive to maintain, leading to disappointment and funding cuts after the initial excitement of the 1980s AI boom.",
          es: "El segundo Invierno de IA ocurrió a finales de los 1980 a principios de los 1990 cuando los sistemas expertos resultaron frágiles y costosos de mantener, llevando a decepción y recortes de financiamiento después del entusiasmo inicial del boom de IA de los 1980.",
          de: "Der zweite KI-Winter trat Ende der 1980er bis Anfang der 1990er Jahre auf als Expertensysteme sich als zerbrechlich und teuer in der Wartung erwiesen, was zu Enttäuschung und Finanzierungskürzungen nach der anfänglichen Aufregung des 1980er KI-Booms führte.",
          nl: "De tweede AI Winter vond plaats eind jaren 1980 tot begin jaren 1990 toen expertsystemen bros en duur te onderhouden bleken, wat leidde tot teleurstelling en financieringsbesnoeiingen na de aanvankelijke opwinding van de jaren 1980 AI boom."
        }
      },
      {
        question: {
          en: "What was the role of DARPA in reviving AI research during the strategic computing initiative?",
          es: "¿Cuál fue el rol de DARPA en revivir la investigación de IA durante la iniciativa de computación estratégica?",
          de: "Was war die Rolle von DARPA bei der Wiederbelebung der KI-Forschung während der Strategic Computing Initiative?",
          nl: "Wat was de rol van DARPA in het herleven van AI onderzoek tijdens het strategic computing initiatief?"
        },
        options: [
          { en: "DARPA invested $1 billion in AI research from 1983-1993, funding key projects and infrastructure", es: "DARPA invirtió $1 mil millones en investigación de IA de 1983-1993, financiando proyectos clave e infraestructura", de: "DARPA investierte $1 Milliarde in KI-Forschung von 1983-1993 und finanzierte Schlüsselprojekte und Infrastruktur", nl: "DARPA investeerde $1 miljard in AI onderzoek van 1983-1993, financierde belangrijke projecten en infrastructuur" },
          { en: "DARPA created the first neural networks", es: "DARPA creó las primeras redes neuronales", de: "DARPA schuf die ersten neuronalen Netzwerke", nl: "DARPA creëerde de eerste neurale netwerken" },
          { en: "DARPA invented the personal computer", es: "DARPA inventó la computadora personal", de: "DARPA erfand den Personalcomputer", nl: "DARPA vond de personal computer uit" },
          { en: "DARPA banned AI research", es: "DARPA prohibió la investigación de IA", de: "DARPA verbot KI-Forschung", nl: "DARPA verbood AI onderzoek" }
        ],
        correct: 0,
        explanation: {
          en: "DARPA's Strategic Computing Initiative was a massive $1 billion program that sustained AI research through the 1980s, funding autonomous vehicles, expert systems, and advanced computing technologies that kept the field alive during difficult periods.",
          es: "La Iniciativa de Computación Estratégica de DARPA fue un programa masivo de $1 mil millones que sostuvo la investigación de IA a través de los 1980, financiando vehículos autónomos, sistemas expertos y tecnologías de computación avanzadas que mantuvieron el campo vivo durante períodos difíciles.",
          de: "DARPAs Strategic Computing Initiative war ein massives $1 Milliarden Programm das KI-Forschung durch die 1980er Jahre aufrechterhielt, autonome Fahrzeuge, Expertensysteme und fortgeschrittene Computing-Technologien finanzierte die das Feld während schwieriger Zeiten am Leben hielten.",
          nl: "DARPA's Strategic Computing Initiative was een massief $1 miljard programma dat AI onderzoek door de jaren 1980 heen ondersteunde, autonome voertuigen, expertsystemen en geavanceerde computertechnologieën financierde die het veld levend hielden tijdens moeilijke periodes."
        }
      },
      {
        question: {
          en: "What was the importance of the backpropagation algorithm's rediscovery in the 1980s?",
          es: "¿Cuál fue la importancia del redescubrimiento del algoritmo de retropropagación en los años 1980?",
          de: "Was war die Wichtigkeit der Wiederentdeckung des Backpropagation-Algorithmus in den 1980er Jahren?",
          nl: "Wat was het belang van de herontdekking van het backpropagation algoritme in de jaren 1980?"
        },
        options: [
          { en: "It enabled training of multi-layer neural networks, overcoming the limitations identified by Minsky and Papert", es: "Permitió entrenar redes neuronales multicapa, superando las limitaciones identificadas por Minsky y Papert", de: "Es ermöglichte das Training mehrschichtiger neuronaler Netzwerke und überwand die von Minsky und Papert identifizierten Begrenzungen", nl: "Het maakte training van meerlaagse neurale netwerken mogelijk, waarbij de beperkingen geïdentificeerd door Minsky en Papert werden overwonnen" },
          { en: "It created the first expert system", es: "Creó el primer sistema experto", de: "Es schuf das erste Expertensystem", nl: "Het creëerde het eerste expertsysteem" },
          { en: "It invented symbolic logic", es: "Inventó la lógica simbólica", de: "Es erfand die symbolische Logik", nl: "Het vond symbolische logica uit" },
          { en: "It solved the frame problem", es: "Resolvió el problema del marco", de: "Es löste das Frame-Problem", nl: "Het loste het frame probleem op" }
        ],
        correct: 0,
        explanation: {
          en: "The rediscovery and popularization of backpropagation by Rumelhart, Hinton, and Williams in 1986 showed that multi-layer networks could learn complex patterns, directly addressing the XOR problem that had limited perceptrons and reigniting neural network research.",
          es: "El redescubrimiento y popularización de la retropropagación por Rumelhart, Hinton y Williams en 1986 mostró que las redes multicapa podían aprender patrones complejos, abordando directamente el problema XOR que había limitado los perceptrones y reavivando la investigación de redes neuronales.",
          de: "Die Wiederentdeckung und Popularisierung von Backpropagation durch Rumelhart, Hinton und Williams 1986 zeigte dass mehrschichtige Netzwerke komplexe Muster lernen konnten, behandelte direkt das XOR-Problem das Perceptrons begrenzt hatte und entfachte die neuronale Netzwerkforschung neu.",
          nl: "De herontdekking en popularisatie van backpropagation door Rumelhart, Hinton en Williams in 1986 toonde dat meerlaagse netwerken complexe patronen konden leren, behandelde direct het XOR probleem dat perceptrons had beperkt en deed neuraal netwerk onderzoek weer opleven."
        }
      },
      {
        question: {
          en: "What were the main limitations of expert systems that led to the second AI Winter?",
          es: "¿Cuáles fueron las principales limitaciones de los sistemas expertos que llevaron al segundo Invierno de IA?",
          de: "Was waren die Hauptbegrenzungen von Expertensystemen die zum zweiten KI-Winter führten?",
          nl: "Wat waren de belangrijkste beperkingen van expertsystemen die leidden tot de tweede AI Winter?"
        },
        options: [
          { en: "Brittleness, difficulty in knowledge acquisition, high maintenance costs, and inability to learn", es: "Fragilidad, dificultad en adquisición de conocimiento, altos costos de mantenimiento e incapacidad de aprender", de: "Zerbrechlichkeit, Schwierigkeit bei Wissensakquisition, hohe Wartungskosten und Unfähigkeit zu lernen", nl: "Broosheid, moeilijkheid in kennisverwerving, hoge onderhoudskosten en onvermogen om te leren" },
          { en: "Too fast processing speed", es: "Velocidad de procesamiento demasiado rápida", de: "Zu schnelle Verarbeitungsgeschwindigkeit", nl: "Te snelle verwerkingssnelheid" },
          { en: "Excessive intelligence", es: "Inteligencia excesiva", de: "Übermäßige Intelligenz", nl: "Overmatige intelligentie" },
          { en: "Perfect reliability", es: "Confiabilidad perfecta", de: "Perfekte Zuverlässigkeit", nl: "Perfecte betrouwbaarheid" }
        ],
        correct: 0,
        explanation: {
          en: "Expert systems proved brittle because they couldn't handle cases outside their narrow domains, required expensive knowledge engineering, were difficult to maintain and update, and couldn't learn from experience, leading to disillusionment with AI.",
          es: "Los sistemas expertos resultaron frágiles porque no podían manejar casos fuera de sus dominios estrechos, requerían ingeniería de conocimiento costosa, eran difíciles de mantener y actualizar, y no podían aprender de la experiencia, llevando a desilusión con la IA.",
          de: "Expertensysteme erwiesen sich als zerbrechlich weil sie keine Fälle außerhalb ihrer engen Domänen handhaben konnten, teure Wissenstechnik erforderten, schwer zu warten und zu aktualisieren waren und nicht aus Erfahrung lernen konnten, was zu Desillusionierung mit KI führte.",
          nl: "Expertsystemen bleken bros omdat ze geen gevallen buiten hun smalle domeinen konden aanpakken, dure kennistechniek vereisten, moeilijk te onderhouden en bij te werken waren, en niet uit ervaring konden leren, wat leidde tot desillusie met AI."
        }
      },
      {
        question: {
          en: "What was the impact of the PDP (Parallel Distributed Processing) books by Rumelhart and McClelland?",
          es: "¿Cuál fue el impacto de los libros PDP (Parallel Distributed Processing) de Rumelhart y McClelland?",
          de: "Was war die Auswirkung der PDP (Parallel Distributed Processing) Bücher von Rumelhart und McClelland?",
          nl: "Wat was de impact van de PDP (Parallel Distributed Processing) boeken door Rumelhart en McClelland?"
        },
        options: [
          { en: "They launched the connectionist revival by showing neural networks could model cognitive processes", es: "Lanzaron el resurgimiento conexionista mostrando que las redes neuronales podían modelar procesos cognitivos", de: "Sie starteten das konnektionistische Revival indem sie zeigten dass neuronale Netzwerke kognitive Prozesse modellieren konnten", nl: "Ze lanceerden de connectionistische heropleving door te tonen dat neurale netwerken cognitieve processen konden modelleren" },
          { en: "They disproved neural network theories", es: "Refutaron las teorías de redes neuronales", de: "Sie widerlegten neuronale Netzwerktheorien", nl: "Ze weerlegden neurale netwerk theorieën" },
          { en: "They invented the computer", es: "Inventaron la computadora", de: "Sie erfanden den Computer", nl: "Ze vonden de computer uit" },
          { en: "They created the first programming language", es: "Crearon el primer lenguaje de programación", de: "Sie schufen die erste Programmiersprache", nl: "Ze creëerden de eerste programmeertaal" }
        ],
        correct: 0,
        explanation: {
          en: "The 1986 PDP books demonstrated that neural networks could model human cognitive processes like learning, memory, and pattern recognition, providing both the theoretical framework and practical algorithms that revitalized neural network research.",
          es: "Los libros PDP de 1986 demostraron que las redes neuronales podían modelar procesos cognitivos humanos como aprendizaje, memoria y reconocimiento de patrones, proporcionando tanto el marco teórico como algoritmos prácticos que revitalizaron la investigación de redes neuronales.",
          de: "Die 1986er PDP-Bücher demonstrierten dass neuronale Netzwerke menschliche kognitive Prozesse wie Lernen, Gedächtnis und Mustererkennung modellieren konnten und boten sowohl den theoretischen Rahmen als auch praktische Algorithmen die die neuronale Netzwerkforschung revitalisierten.",
          nl: "De 1986 PDP boeken toonden dat neurale netwerken menselijke cognitieve processen zoals leren, geheugen en patroonherkenning konden modelleren, wat zowel het theoretische raamwerk als praktische algoritmen bood die neuraal netwerk onderzoek revitaliseerde."
        }
      },
      {
        question: {
          en: "What was the significance of Hopfield networks introduced by John Hopfield in 1982?",
          es: "¿Cuál fue la importancia de las redes Hopfield introducidas por John Hopfield en 1982?",
          de: "Was war die Bedeutung von Hopfield-Netzwerken die John Hopfield 1982 einführte?",
          nl: "Wat was de betekenis van Hopfield netwerken geïntroduceerd door John Hopfield in 1982?"
        },
        options: [
          { en: "They showed neural networks could serve as associative memory and solve optimization problems", es: "Mostraron que las redes neuronales podían servir como memoria asociativa y resolver problemas de optimización", de: "Sie zeigten dass neuronale Netzwerke als assoziatives Gedächtnis dienen und Optimierungsprobleme lösen konnten", nl: "Ze toonden dat neurale netwerken konden dienen als associatief geheugen en optimalisatieproblemen konden oplossen" },
          { en: "They were the first computers", es: "Fueron las primeras computadoras", de: "Sie waren die ersten Computer", nl: "Ze waren de eerste computers" },
          { en: "They invented artificial consciousness", es: "Inventaron conciencia artificial", de: "Sie erfanden künstliches Bewusstsein", nl: "Ze vonden kunstmatig bewustzijn uit" },
          { en: "They solved natural language understanding", es: "Resolvieron la comprensión de lenguaje natural", de: "Sie lösten natürliches Sprachverständnis", nl: "Ze losten natuurlijk taalbegrip op" }
        ],
        correct: 0,
        explanation: {
          en: "Hopfield networks demonstrated that recurrent neural networks could function as content-addressable memory and solve combinatorial optimization problems, bridging neuroscience and computation and inspiring renewed interest in neural approaches.",
          es: "Las redes Hopfield demostraron que las redes neuronales recurrentes podían funcionar como memoria direccionable por contenido y resolver problemas de optimización combinatoria, conectando neurociencia y computación e inspirando renovado interés en enfoques neuronales.",
          de: "Hopfield-Netzwerke demonstrierten dass rekurrente neuronale Netzwerke als inhaltsadressierbarer Speicher funktionieren und kombinatorische Optimierungsprobleme lösen konnten, überbrückten Neurowissenschaft und Berechnung und inspirierten erneutes Interesse an neuronalen Ansätzen.",
          nl: "Hopfield netwerken toonden dat recurrente neurale netwerken konden functioneren als inhoud-adresseerbaar geheugen en combinatorische optimalisatieproblemen konden oplossen, wat neurowetenschappen en berekening verbond en hernieuwde interesse in neurale benaderingen inspireerde."
        }
      },
      {
        question: {
          en: "What was the role of Japanese government funding in the AI boom of the 1980s?",
          es: "¿Cuál fue el rol del financiamiento del gobierno japonés en el boom de IA de los años 1980?",
          de: "Was war die Rolle japanischer Regierungsfinanzierung im KI-Boom der 1980er Jahre?",
          nl: "Wat was de rol van Japanse overheidsfinanciering in de AI boom van de jaren 1980?"
        },
        options: [
          { en: "The Fifth Generation Computer Project spurred international competition and AI investment", es: "El Proyecto de Computadoras de Quinta Generación estimuló la competencia internacional e inversión en IA", de: "Das Fifth Generation Computer Project spornte internationale Konkurrenz und KI-Investition an", nl: "Het Fifth Generation Computer Project stimuleerde internationale concurrentie en AI investering" },
          { en: "Japan banned AI research", es: "Japón prohibió la investigación de IA", de: "Japan verbot KI-Forschung", nl: "Japan verbood AI onderzoek" },
          { en: "Japan only funded robotics", es: "Japón solo financió robótica", de: "Japan finanzierte nur Robotik", nl: "Japan financierde alleen robotica" },
          { en: "Japan had no impact on AI development", es: "Japón no tuvo impacto en el desarrollo de IA", de: "Japan hatte keinen Einfluss auf KI-Entwicklung", nl: "Japan had geen impact op AI ontwikkeling" }
        ],
        correct: 0,
        explanation: {
          en: "Japan's ambitious Fifth Generation Computer Project (1982-1992) aimed to leapfrog Western computing with AI-based systems, prompting massive responsive investments from the US and Europe who feared being left behind in AI technology.",
          es: "El ambicioso Proyecto de Computadoras de Quinta Generación de Japón (1982-1992) tenía como objetivo superar la computación occidental con sistemas basados en IA, provocando inversiones masivas de respuesta de EE.UU. y Europa que temían quedarse atrás en tecnología de IA.",
          de: "Japans ehrgeiziges Fifth Generation Computer Project (1982-1992) zielte darauf ab westliche Computer mit KI-basierten Systemen zu überholen, was massive responsive Investitionen aus den USA und Europa hervorrief die fürchteten in KI-Technologie zurückzubleiben.",
          nl: "Japan's ambitieuze Fifth Generation Computer Project (1982-1992) was gericht op het overtroefen van westerse computing met AI-gebaseerde systemen, wat massale reactionaire investeringen uit de VS en Europa uitlokte die vreesden achter te blijven in AI technologie."
        }
      },
      {
        question: {
          en: "What was the significance of genetic algorithms developed by John Holland?",
          es: "¿Cuál fue la importancia de los algoritmos genéticos desarrollados por John Holland?",
          de: "Was war die Bedeutung genetischer Algorithmen die John Holland entwickelte?",
          nl: "Wat was de betekenis van genetische algoritmen ontwikkeld door John Holland?"
        },
        options: [
          { en: "They introduced evolutionary computation as an alternative AI approach for optimization and learning", es: "Introdujeron computación evolutiva como un enfoque alternativo de IA para optimización y aprendizaje", de: "Sie führten evolutionäre Berechnung als alternativen KI-Ansatz für Optimierung und Lernen ein", nl: "Ze introduceerden evolutionaire berekening als alternatieve AI benadering voor optimalisatie en leren" },
          { en: "They created actual living organisms", es: "Crearon organismos vivos reales", de: "Sie schufen tatsächlich lebende Organismen", nl: "Ze creëerden werkelijke levende organismen" },
          { en: "They solved protein folding", es: "Resolvieron el plegamiento de proteínas", de: "Sie lösten Proteinfaltung", nl: "Ze losten proteïnevouwing op" },
          { en: "They invented DNA sequencing", es: "Inventaron secuenciación de ADN", de: "Sie erfanden DNA-Sequenzierung", nl: "Ze vonden DNA sequencing uit" }
        ],
        correct: 0,
        explanation: {
          en: "Genetic algorithms provided a new paradigm for AI based on evolutionary principles, using selection, crossover, and mutation to evolve solutions to complex problems, opening up evolutionary computation as a major AI subfield.",
          es: "Los algoritmos genéticos proporcionaron un nuevo paradigma para IA basado en principios evolutivos, usando selección, cruzamiento y mutación para evolucionar soluciones a problemas complejos, abriendo la computación evolutiva como un subcampo principal de IA.",
          de: "Genetische Algorithmen boten ein neues Paradigma für KI basierend auf evolutionären Prinzipien, verwendeten Selektion, Kreuzung und Mutation um Lösungen für komplexe Probleme zu entwickeln und öffneten evolutionäre Berechnung als wichtiges KI-Teilgebiet.",
          nl: "Genetische algoritmen boden een nieuw paradigma voor AI gebaseerd op evolutionaire principes, gebruikten selectie, kruising en mutatie om oplossingen voor complexe problemen te evolueren, wat evolutionaire berekening opende als belangrijk AI deelgebied."
        }
      },
      {
        question: {
          en: "What was the impact of the Thinking Machines Corporation and Connection Machine?",
          es: "¿Cuál fue el impacto de Thinking Machines Corporation y Connection Machine?",
          de: "Was war die Auswirkung der Thinking Machines Corporation und Connection Machine?",
          nl: "Wat was de impact van de Thinking Machines Corporation en Connection Machine?"
        },
        options: [
          { en: "They pioneered massively parallel computing for AI applications in the 1980s", es: "Fueron pioneros en computación masivamente paralela para aplicaciones de IA en los años 1980", de: "Sie waren Pioniere in massiv paralleler Berechnung für KI-Anwendungen in den 1980er Jahren", nl: "Ze waren pioniers in massaal parallelle berekening voor AI toepassingen in de jaren 1980" },
          { en: "They created the first personal computers", es: "Crearon las primeras computadoras personales", de: "Sie schufen die ersten Personalcomputer", nl: "Ze creëerden de eerste personal computers" },
          { en: "They invented the internet", es: "Inventaron internet", de: "Sie erfanden das Internet", nl: "Ze vonden het internet uit" },
          { en: "They developed word processing software", es: "Desarrollaron software de procesamiento de texto", de: "Sie entwickelten Textverarbeitungssoftware", nl: "Ze ontwikkelden tekstverwerking software" }
        ],
        correct: 0,
        explanation: {
          en: "Thinking Machines' Connection Machine was a revolutionary massively parallel computer designed specifically for AI and scientific computing, demonstrating the potential of parallel architectures for neural networks and symbolic processing.",
          es: "La Connection Machine de Thinking Machines fue una computadora masivamente paralela revolucionaria diseñada específicamente para IA y computación científica, demostrando el potencial de arquitecturas paralelas para redes neuronales y procesamiento simbólico.",
          de: "Thinking Machines' Connection Machine war ein revolutionärer massiv paralleler Computer der speziell für KI und wissenschaftliche Berechnung entworfen wurde und das Potential paralleler Architekturen für neuronale Netzwerke und symbolische Verarbeitung demonstrierte.",
          nl: "Thinking Machines' Connection Machine was een revolutionaire massaal parallelle computer die specifiek was ontworpen voor AI en wetenschappelijke berekening, wat het potentieel toonde van parallelle architecturen voor neurale netwerken en symbolische verwerking."
        }
      },
      {
        question: {
          en: "What role did venture capital play in the AI boom and bust of the 1980s?",
          es: "¿Qué papel jugó el capital de riesgo en el boom y colapso de IA de los años 1980?",
          de: "Welche Rolle spielte Risikokapital im KI-Boom und -Kollaps der 1980er Jahre?",
          nl: "Welke rol speelde durfkapitaal in de AI boom en bust van de jaren 1980?"
        },
        options: [
          { en: "VCs invested heavily in AI startups during the boom, then pulled funding when commercialization proved difficult", es: "Los VC invirtieron fuertemente en startups de IA durante el boom, luego retiraron el financiamiento cuando la comercialización resultó difícil", de: "VCs investierten stark in KI-Startups während des Booms, zogen dann Finanzierung zurück als Kommerzialisierung sich als schwierig erwies", nl: "VCs investeerden zwaar in AI startups tijdens de boom, trokken vervolgens financiering terug toen commercialisatie moeilijk bleek" },
          { en: "VCs never invested in AI companies", es: "Los VC nunca invirtieron en compañías de IA", de: "VCs investierten nie in KI-Unternehmen", nl: "VCs investeerden nooit in AI bedrijven" },
          { en: "VCs only funded hardware companies", es: "Los VC solo financiaron compañías de hardware", de: "VCs finanzierten nur Hardware-Unternehmen", nl: "VCs financierden alleen hardware bedrijven" },
          { en: "VCs avoided technology investments", es: "Los VC evitaron inversiones en tecnología", de: "VCs vermieden Technologie-Investitionen", nl: "VCs vermeden technologie investeringen" }
        ],
        correct: 0,
        explanation: {
          en: "Venture capitalists poured money into AI companies like Symbolics, Lisp Machines Inc., and Thinking Machines during the 1980s boom, but when these companies failed to deliver promised returns and expert systems proved limited, funding dried up, contributing to the AI winter.",
          es: "Los capitalistas de riesgo vertieron dinero en compañías de IA como Symbolics, Lisp Machines Inc. y Thinking Machines durante el boom de los 1980, pero cuando estas compañías fallaron en entregar retornos prometidos y los sistemas expertos resultaron limitados, el financiamiento se secó, contribuyendo al invierno de IA.",
          de: "Risikokapitalgeber gossen Geld in KI-Unternehmen wie Symbolics, Lisp Machines Inc. und Thinking Machines während des 1980er Booms, aber als diese Unternehmen versagten versprochene Renditen zu liefern und Expertensysteme sich als begrenzt erwiesen, trocknete die Finanzierung aus und trug zum KI-Winter bei.",
          nl: "Durfkapitalisten goten geld in AI bedrijven zoals Symbolics, Lisp Machines Inc. en Thinking Machines tijdens de jaren 1980 boom, maar toen deze bedrijven faalden in het leveren van beloofde rendementen en expertsystemen beperkt bleken, droogde financiering op, wat bijdroeg aan de AI winter."
        }
      },
      {
        question: {
          en: "What was the significance of the Society of Mind by Marvin Minsky (1985)?",
          es: "¿Cuál fue la importancia de la Sociedad de la Mente de Marvin Minsky (1985)?",
          de: "Was war die Bedeutung von The Society of Mind von Marvin Minsky (1985)?",
          nl: "Wat was de betekenis van de Society of Mind door Marvin Minsky (1985)?"
        },
        options: [
          { en: "It proposed that intelligence emerges from interactions of many simple, non-intelligent agents", es: "Propuso que la inteligencia emerge de interacciones de muchos agentes simples y no inteligentes", de: "Es schlug vor dass Intelligenz aus Interaktionen vieler einfacher, nicht-intelligenter Agenten entsteht", nl: "Het stelde voor dat intelligentie ontstaat uit interacties van vele eenvoudige, niet-intelligente agenten" },
          { en: "It proved AI was impossible", es: "Probó que la IA era imposible", de: "Es bewies dass KI unmöglich war", nl: "Het bewees dat AI onmogelijk was" },
          { en: "It created the first neural network", es: "Creó la primera red neuronal", de: "Es schuf das erste neuronale Netzwerk", nl: "Het creëerde het eerste neurale netwerk" },
          { en: "It solved consciousness", es: "Resolvió la conciencia", de: "Es löste Bewusstsein", nl: "Het loste bewustzijn op" }
        ],
        correct: 0,
        explanation: {
          en: "Minsky's Society of Mind theory proposed that intelligence emerges from the interaction of many simple agents, each performing specific tasks, influencing later work on multi-agent systems and distributed AI approaches.",
          es: "La teoría Sociedad de la Mente de Minsky propuso que la inteligencia emerge de la interacción de muchos agentes simples, cada uno realizando tareas específicas, influyendo trabajo posterior en sistemas multi-agente y enfoques de IA distribuida.",
          de: "Minskys Society of Mind-Theorie schlug vor dass Intelligenz aus der Interaktion vieler einfacher Agenten entsteht, die jeweils spezifische Aufgaben ausführen, und beeinflusste spätere Arbeiten an Multi-Agenten-Systemen und verteilten KI-Ansätzen.",
          nl: "Minsky's Society of Mind theorie stelde voor dat intelligentie ontstaat uit de interactie van vele eenvoudige agenten, elk specifieke taken uitvoerend, wat later werk aan multi-agent systemen en gedistribueerde AI benaderingen beïnvloedde."
        }
      },
      {
        question: {
          en: "What was the impact of statistical machine learning approaches emerging in the 1990s?",
          es: "¿Cuál fue el impacto de los enfoques de aprendizaje automático estadístico que emergieron en los años 1990?",
          de: "Was war die Auswirkung statistischer maschineller Lernansätze die in den 1990er Jahren aufkamen?",
          nl: "Wat was de impact van statistische machine learning benaderingen die opkwamen in de jaren 1990?"
        },
        options: [
          { en: "They shifted AI from knowledge-based to data-driven approaches, leading to practical successes", es: "Cambiaron la IA de enfoques basados en conocimiento a enfoques impulsados por datos, llevando a éxitos prácticos", de: "Sie verlagerten KI von wissensbasierten zu datengetriebenen Ansätzen und führten zu praktischen Erfolgen", nl: "Ze verschoven AI van kennisgebaseerde naar datagedreven benaderingen, leidend tot praktische successen" },
          { en: "They made AI research purely theoretical", es: "Hicieron la investigación de IA puramente teórica", de: "Sie machten KI-Forschung rein theoretisch", nl: "Ze maakten AI onderzoek puur theoretisch" },
          { en: "They eliminated all previous AI methods", es: "Eliminaron todos los métodos previos de IA", de: "Sie eliminierten alle vorherigen KI-Methoden", nl: "Ze elimineerden alle voorgaande AI methoden" },
          { en: "They had no significant impact", es: "No tuvieron impacto significativo", de: "Sie hatten keinen signifikanten Einfluss", nl: "Ze hadden geen significant impact" }
        ],
        correct: 0,
        explanation: {
          en: "Statistical machine learning methods like support vector machines, decision trees, and probabilistic models moved AI away from hand-crafted rules toward learning from data, achieving practical successes in applications like spam filtering and data mining.",
          es: "Los métodos de aprendizaje automático estadístico como máquinas de vectores de soporte, árboles de decisión y modelos probabilísticos movieron la IA lejos de reglas hechas a mano hacia aprender de datos, logrando éxitos prácticos en aplicaciones como filtrado de spam y minería de datos.",
          de: "Statistische maschinelle Lernmethoden wie Support Vector Machines, Entscheidungsbäume und probabilistische Modelle bewegten KI weg von handgefertigten Regeln hin zum Lernen aus Daten und erzielten praktische Erfolge in Anwendungen wie Spam-Filterung und Data Mining.",
          nl: "Statistische machine learning methoden zoals support vector machines, beslissingsbomen en probabilistische modellen verschoven AI weg van handgemaakte regels naar leren van data, wat praktische successen behaalde in toepassingen zoals spam filtering en data mining."
        }
      },
      {
        question: {
          en: "What was the role of the Internet boom in reviving AI interest in the late 1990s?",
          es: "¿Cuál fue el rol del boom de Internet en revivir el interés en IA a finales de los años 1990?",
          de: "Was war die Rolle des Internet-Booms bei der Wiederbelebung des KI-Interesses Ende der 1990er Jahre?",
          nl: "Wat was de rol van de Internet boom in het herleven van AI interesse eind jaren 1990?"
        },
        options: [
          { en: "It created demand for intelligent systems to handle web search, recommendation, and data mining", es: "Creó demanda de sistemas inteligentes para manejar búsqueda web, recomendación y minería de datos", de: "Es schuf Nachfrage nach intelligenten Systemen für Websuche, Empfehlungen und Data Mining", nl: "Het creëerde vraag naar intelligente systemen om webzoeken, aanbevelingen en datamining te behandelen" },
          { en: "It eliminated the need for AI research", es: "Eliminó la necesidad de investigación de IA", de: "Es eliminierte den Bedarf an KI-Forschung", nl: "Het elimineerde de behoefte aan AI onderzoek" },
          { en: "It only affected hardware development", es: "Solo afectó el desarrollo de hardware", de: "Es beeinflusste nur Hardware-Entwicklung", nl: "Het beïnvloedde alleen hardware ontwikkeling" },
          { en: "It had no connection to AI", es: "No tuvo conexión con IA", de: "Es hatte keine Verbindung zur KI", nl: "Het had geen verbinding met AI" }
        ],
        correct: 0,
        explanation: {
          en: "The Internet boom created massive amounts of data and new problems requiring intelligent solutions: search engines needed ranking algorithms, e-commerce sites needed recommendation systems, and businesses needed data mining tools, driving renewed investment in AI technologies.",
          es: "El boom de Internet creó cantidades masivas de datos y nuevos problemas que requerían soluciones inteligentes: los motores de búsqueda necesitaban algoritmos de clasificación, los sitios de e-commerce necesitaban sistemas de recomendación y las empresas necesitaban herramientas de minería de datos, impulsando renovada inversión en tecnologías de IA.",
          de: "Der Internet-Boom schuf massive Datenmengen und neue Probleme die intelligente Lösungen erforderten: Suchmaschinen brauchten Ranking-Algorithmen, E-Commerce-Sites brauchten Empfehlungssysteme und Unternehmen brauchten Data Mining-Tools, was erneute Investitionen in KI-Technologien antrieb.",
          nl: "De Internet boom creëerde massale hoeveelheden data en nieuwe problemen die intelligente oplossingen vereisten: zoekmachines hadden ranking algoritmen nodig, e-commerce sites hadden aanbevelingssystemen nodig en bedrijven hadden datamining tools nodig, wat hernieuwde investering in AI technologieën aandreef."
        }
      },
      {
        question: {
          en: "What was the significance of RoboCup, the robot soccer competition started in 1997?",
          es: "¿Cuál fue la importancia de RoboCup, la competencia de fútbol robótico iniciada en 1997?",
          de: "Was war die Bedeutung von RoboCup, dem 1997 gestarteten Roboterfußball-Wettbewerb?",
          nl: "Wat was de betekenis van RoboCup, de robotvoetbal competitie gestart in 1997?"
        },
        options: [
          { en: "It provided a standard benchmark for AI research in multi-agent systems and robotics", es: "Proporcionó un benchmark estándar para investigación de IA en sistemas multi-agente y robótica", de: "Es bot einen Standard-Benchmark für KI-Forschung in Multi-Agenten-Systemen und Robotik", nl: "Het bood een standaard benchmark voor AI onderzoek in multi-agent systemen en robotica" },
          { en: "It was purely for entertainment", es: "Fue puramente para entretenimiento", de: "Es war rein zur Unterhaltung", nl: "Het was puur voor entertainment" },
          { en: "It replaced human soccer", es: "Reemplazó el fútbol humano", de: "Es ersetzte menschlichen Fußball", nl: "Het verving menselijk voetbal" },
          { en: "It had no research value", es: "No tuvo valor de investigación", de: "Es hatte keinen Forschungswert", nl: "Het had geen onderzoekswaarde" }
        ],
        correct: 0,
        explanation: {
          en: "RoboCup created a common testbed for AI research, challenging teams to develop robots that could coordinate, make real-time decisions, and adapt to dynamic environments, advancing robotics, computer vision, and multi-agent AI research.",
          es: "RoboCup creó un banco de pruebas común para investigación de IA, desafiando a equipos a desarrollar robots que pudieran coordinarse, tomar decisiones en tiempo real y adaptarse a ambientes dinámicos, avanzando robótica, visión por computadora e investigación de IA multi-agente.",
          de: "RoboCup schuf ein gemeinsames Testfeld für KI-Forschung und forderte Teams heraus Roboter zu entwickeln die koordinieren, Echtzeitentscheidungen treffen und sich an dynamische Umgebungen anpassen konnten, was Robotik, Computer Vision und Multi-Agenten-KI-Forschung vorantrieb.",
          nl: "RoboCup creëerde een gemeenschappelijk testbed voor AI onderzoek, uitdagende teams om robots te ontwikkelen die konden coördineren, real-time beslissingen nemen en zich aanpassen aan dynamische omgevingen, wat robotica, computer vision en multi-agent AI onderzoek vooruitbracht."
        }
      },
      {
        question: {
          en: "What was the Lighthill Report and what impact did it have on AI research?",
          es: "¿Qué fue el Informe Lighthill y qué impacto tuvo en la investigación de IA?",
          de: "Was war der Lighthill-Bericht und welche Auswirkung hatte er auf die KI-Forschung?",
          nl: "Wat was het Lighthill Rapport en welke impact had het op AI onderzoek?"
        },
        options: [
          { en: "A 1973 British report criticizing AI progress that led to funding cuts and the first AI winter", es: "Un informe británico de 1973 criticando el progreso de IA que llevó a recortes de financiamiento y el primer invierno de IA", de: "Ein britischer Bericht von 1973 der KI-Fortschritt kritisierte und zu Finanzierungskürzungen und dem ersten KI-Winter führte", nl: "Een Brits rapport van 1973 dat AI vooruitgang bekritiseerde en leidde tot financieringsbesnoeiingen en de eerste AI winter" },
          { en: "A positive assessment that increased AI funding", es: "Una evaluación positiva que aumentó el financiamiento de IA", de: "Eine positive Bewertung die KI-Finanzierung erhöhte", nl: "Een positieve beoordeling die AI financiering verhoogde" },
          { en: "A technical manual for building AI systems", es: "Un manual técnico para construir sistemas de IA", de: "Ein technisches Handbuch zum Bau von KI-Systemen", nl: "Een technische handleiding voor het bouwen van AI systemen" },
          { en: "A science fiction novel about AI", es: "Una novela de ciencia ficción sobre IA", de: "Ein Science-Fiction-Roman über KI", nl: "Een science fiction roman over AI" }
        ],
        correct: 0,
        explanation: {
          en: "The Lighthill Report, commissioned by the British government in 1973, harshly criticized AI research for failing to deliver on its promises. It concluded that AI had achieved little beyond what conventional programming could accomplish, leading to dramatic funding cuts in the UK and contributing to the first AI winter.",
          es: "El Informe Lighthill, comisionado por el gobierno británico en 1973, criticó duramente la investigación de IA por fallar en cumplir sus promesas. Concluyó que la IA había logrado poco más allá de lo que la programación convencional podía lograr, llevando a recortes dramáticos de financiamiento en el Reino Unido y contribuyendo al primer invierno de IA.",
          de: "Der Lighthill-Bericht, 1973 von der britischen Regierung in Auftrag gegeben, kritisierte KI-Forschung scharf dafür ihre Versprechen nicht einzuhalten. Er kam zu dem Schluss dass KI wenig mehr erreicht hatte als konventionelle Programmierung leisten konnte, was zu dramatischen Finanzierungskürzungen im UK führte und zum ersten KI-Winter beitrug.",
          nl: "Het Lighthill Rapport, opgedragen door de Britse regering in 1973, bekritiseerde AI onderzoek hard voor het falen om beloftes waar te maken. Het concludeerde dat AI weinig meer had bereikt dan wat conventionele programmering kon bereiken, leidend tot dramatische financieringsbesnoeiingen in het VK en bijdragend aan de eerste AI winter."
        }
      },
      {
        question: {
          en: "What was the impact of Geoffrey Hinton's work on deep belief networks in 2006?",
          es: "¿Cuál fue el impacto del trabajo de Geoffrey Hinton sobre redes de creencia profundas en 2006?",
          de: "Was war die Auswirkung von Geoffrey Hintons Arbeit über Deep Belief Networks 2006?",
          nl: "Wat was de impact van Geoffrey Hinton's werk aan deep belief networks in 2006?"
        },
        options: [
          { en: "Showed deep neural networks could be trained effectively, sparking the deep learning revolution", es: "Mostró que las redes neuronales profundas podían entrenarse efectivamente, desencadenando la revolución del aprendizaje profundo", de: "Zeigte dass tiefe neuronale Netzwerke effektiv trainiert werden konnten und löste die Deep Learning Revolution aus", nl: "Toonde dat diepe neurale netwerken effectief getraind konden worden, wat de deep learning revolutie ontketende" },
          { en: "Proved neural networks were impossible", es: "Probó que las redes neuronales eran imposibles", de: "Bewies dass neuronale Netzwerke unmöglich waren", nl: "Bewees dat neurale netwerken onmogelijk waren" },
          { en: "Created the first computer", es: "Creó la primera computadora", de: "Schuf den ersten Computer", nl: "Creëerde de eerste computer" },
          { en: "Invented the internet", es: "Inventó internet", de: "Erfand das Internet", nl: "Vond het internet uit" }
        ],
        correct: 0,
        explanation: {
          en: "Hinton's 2006 paper on training deep belief networks through greedy layer-wise pretraining showed that deep networks could be trained effectively, overcoming previous training difficulties and launching the modern deep learning era.",
          es: "El artículo de Hinton de 2006 sobre entrenar redes de creencia profundas através de preentrenamiento codicioso capa por capa mostró que las redes profundas podían entrenarse efectivamente, superando dificultades previas de entrenamiento y lanzando la era moderna del aprendizaje profundo.",
          de: "Hintons 2006er Paper über das Training von Deep Belief Networks durch gieriges schichtweises Vortraining zeigte dass tiefe Netzwerke effektiv trainiert werden konnten, überwand frühere Trainingsschwierigkeiten und startete die moderne Deep Learning Ära.",
          nl: "Hinton's 2006 paper over het trainen van deep belief networks door greedy laag-per-laag voortraining toonde dat diepe netwerken effectief getraind konden worden, wat eerdere trainingsmoeilijkheden overwon en het moderne deep learning tijdperk lanceerde."
        }
      },
      {
        question: {
          en: "What was the significance of AlexNet winning ImageNet in 2012?",
          es: "¿Cuál fue la importancia de que AlexNet ganara ImageNet en 2012?",
          de: "Was war die Bedeutung von AlexNets ImageNet-Sieg 2012?",
          nl: "Wat was de betekenis van AlexNet die ImageNet won in 2012?"
        },
        options: [
          { en: "Demonstrated convolutional neural networks vastly outperformed traditional computer vision methods", es: "Demostró que las redes neuronales convolucionales superaban vastamente los métodos tradicionales de visión por computadora", de: "Demonstrierte dass Convolutional Neural Networks traditionelle Computer Vision Methoden bei weitem übertrafen", nl: "Toonde dat convolutionele neurale netwerken traditionele computer vision methoden ver overtroffen" },
          { en: "First time a computer displayed any image", es: "Primera vez que una computadora mostró cualquier imagen", de: "Erstes Mal dass ein Computer irgendein Bild anzeigte", nl: "Eerste keer dat een computer een afbeelding toonde" },
          { en: "Proved deep learning was useless", es: "Probó que el aprendizaje profundo era inútil", de: "Bewies dass Deep Learning nutzlos war", nl: "Bewees dat deep learning nutteloos was" },
          { en: "Created artificial consciousness", es: "Creó conciencia artificial", de: "Schuf künstliches Bewusstsein", nl: "Creëerde kunstmatig bewustzijn" }
        ],
        correct: 0,
        explanation: {
          en: "AlexNet's dramatic ImageNet victory with a 15.3% error rate (versus 26% for second place) proved that deep convolutional networks trained on GPUs could achieve superhuman computer vision performance, catalyzing the deep learning revolution.",
          es: "La victoria dramática de AlexNet en ImageNet con una tasa de error del 15.3% (versus 26% para el segundo lugar) probó que las redes convolucionales profundas entrenadas en GPUs podían lograr rendimiento de visión por computadora sobrehumano, catalizando la revolución del aprendizaje profundo.",
          de: "AlexNets dramatischer ImageNet-Sieg mit 15,3% Fehlerrate (versus 26% für den Zweiten) bewies dass tiefe Convolutional Networks auf GPUs trainiert übermenschliche Computer Vision Leistung erreichen konnten und katalysierte die Deep Learning Revolution.",
          nl: "AlexNet's dramatische ImageNet overwinning met een 15.3% foutpercentage (versus 26% voor tweede plaats) bewees dat diepe convolutionele netwerken getraind op GPU's bovenmenselijke computer vision prestaties konden bereiken, wat de deep learning revolutie katalyseerde."
        }
      },
      {
        question: {
          en: "What was the Rete algorithm's contribution to expert systems?",
          es: "¿Cuál fue la contribución del algoritmo Rete a los sistemas expertos?",
          de: "Was war der Beitrag des Rete-Algorithmus zu Expertensystemen?",
          nl: "Wat was de bijdrage van het Rete algoritme aan expertsystemen?"
        },
        options: [
          { en: "Efficient pattern matching for production rules reducing redundant computations", es: "Coincidencia eficiente de patrones para reglas de producción reduciendo computaciones redundantes", de: "Effiziente Mustererkennung für Produktionsregeln die redundante Berechnungen reduzierte", nl: "Efficiënte patroonherkenning voor productieregels die redundante berekeningen verminderde" },
          { en: "First neural network algorithm", es: "Primer algoritmo de red neuronal", de: "Erster neuronaler Netzwerk-Algorithmus", nl: "Eerste neurale netwerk algoritme" },
          { en: "Invented backpropagation", es: "Inventó la retropropagación", de: "Erfand Backpropagation", nl: "Vond backpropagation uit" },
          { en: "Created genetic algorithms", es: "Creó algoritmos genéticos", de: "Schuf genetische Algorithmen", nl: "Creëerde genetische algoritmen" }
        ],
        correct: 0,
        explanation: {
          en: "Charles Forgy's Rete algorithm (1979) revolutionized expert systems by efficiently matching rules against facts, storing partial matches and avoiding redundant comparisons, making large rule-based systems practical.",
          es: "El algoritmo Rete de Charles Forgy (1979) revolucionó los sistemas expertos al emparejar eficientemente reglas con hechos, almacenando coincidencias parciales y evitando comparaciones redundantes, haciendo prácticos sistemas basados en reglas grandes.",
          de: "Charles Forgys Rete-Algorithmus (1979) revolutionierte Expertensysteme durch effizientes Abgleichen von Regeln mit Fakten, Speichern partieller Übereinstimmungen und Vermeiden redundanter Vergleiche, was große regelbasierte Systeme praktikabel machte.",
          nl: "Charles Forgy's Rete algoritme (1979) revolutioneerde expertsystemen door efficiënt regels te matchen met feiten, gedeeltelijke matches op te slaan en redundante vergelijkingen te vermijden, wat grote op regels gebaseerde systemen praktisch maakte."
        }
      },
      {
        question: {
          en: "What was the ALVINN (Autonomous Land Vehicle In a Neural Network) project?",
          es: "¿Qué fue el proyecto ALVINN (Vehículo Terrestre Autónomo en una Red Neuronal)?",
          de: "Was war das ALVINN (Autonomous Land Vehicle In a Neural Network) Projekt?",
          nl: "Wat was het ALVINN (Autonomous Land Vehicle In a Neural Network) project?"
        },
        options: [
          { en: "Early neural network autonomous driving system that learned to steer from human demonstrations", es: "Sistema temprano de conducción autónoma con red neuronal que aprendió a dirigir de demostraciones humanas", de: "Frühes neuronales Netzwerk autonomes Fahrsystem das aus menschlichen Demonstrationen lenken lernte", nl: "Vroeg neuraal netwerk autonoom rijsysteem dat leerde sturen van menselijke demonstraties" },
          { en: "First commercial robot vacuum", es: "Primera aspiradora robot comercial", de: "Erster kommerzieller Roboterstaubsauger", nl: "Eerste commerciële robotstofzuiger" },
          { en: "Expert system for medical diagnosis", es: "Sistema experto para diagnóstico médico", de: "Expertensystem für medizinische Diagnose", nl: "Expertsysteem voor medische diagnose" },
          { en: "Chess-playing program", es: "Programa para jugar ajedrez", de: "Schachspielprogramm", nl: "Schaakspelprogramma" }
        ],
        correct: 0,
        explanation: {
          en: "ALVINN (1989) was a pioneering neural network system that learned to drive by watching a human driver, achieving highway speeds and demonstrating end-to-end learning for autonomous driving decades before modern self-driving cars.",
          es: "ALVINN (1989) fue un sistema pionero de red neuronal que aprendió a conducir observando a un conductor humano, alcanzando velocidades de autopista y demostrando aprendizaje de extremo a extremo para conducción autónoma décadas antes de los autos autónomos modernos.",
          de: "ALVINN (1989) war ein bahnbrechendes neuronales Netzwerksystem das Fahren lernte indem es einem menschlichen Fahrer zusah, Autobahngeschwindigkeiten erreichte und End-to-End-Lernen für autonomes Fahren Jahrzehnte vor modernen selbstfahrenden Autos demonstrierte.",
          nl: "ALVINN (1989) was een baanbrekend neuraal netwerk systeem dat leerde rijden door een menselijke bestuurder te observeren, snelwegsnelheden bereikte en end-to-end learning voor autonoom rijden demonstreerde decennia voor moderne zelfrijdende auto's."
        }
      },
      {
        question: {
          en: "What was the significance of the ImageNet dataset created by Fei-Fei Li?",
          es: "¿Cuál fue la importancia del conjunto de datos ImageNet creado por Fei-Fei Li?",
          de: "Was war die Bedeutung des ImageNet-Datensatzes von Fei-Fei Li?",
          nl: "Wat was de betekenis van de ImageNet dataset gecreëerd door Fei-Fei Li?"
        },
        options: [
          { en: "Provided large-scale labeled dataset enabling training of deep neural networks for vision", es: "Proporcionó conjunto de datos etiquetado a gran escala habilitando entrenamiento de redes neuronales profundas para visión", de: "Bot großangelegten beschrifteten Datensatz der Training tiefer neuronaler Netzwerke für Vision ermöglichte", nl: "Bood grootschalige gelabelde dataset die training van diepe neurale netwerken voor vision mogelijk maakte" },
          { en: "Was the first photograph ever taken", es: "Fue la primera fotografía jamás tomada", de: "War die erste jemals aufgenommene Fotografie", nl: "Was de eerste foto ooit genomen" },
          { en: "Created artificial reality", es: "Creó realidad artificial", de: "Schuf künstliche Realität", nl: "Creëerde kunstmatige realiteit" },
          { en: "Invented digital cameras", es: "Inventó cámaras digitales", de: "Erfand Digitalkameras", nl: "Vond digitale camera's uit" }
        ],
        correct: 0,
        explanation: {
          en: "ImageNet (2009) provided 14+ million labeled images across 20,000+ categories, giving researchers the large-scale data needed to train deep neural networks effectively, catalyzing the computer vision revolution and modern deep learning.",
          es: "ImageNet (2009) proporcionó 14+ millones de imágenes etiquetadas en 20,000+ categorías, dando a investigadores los datos a gran escala necesarios para entrenar redes neuronales profundas efectivamente, catalizando la revolución de visión por computadora y aprendizaje profundo moderno.",
          de: "ImageNet (2009) bot 14+ Millionen beschriftete Bilder über 20.000+ Kategorien und gab Forschern die großangelegten Daten die nötig waren um tiefe neuronale Netzwerke effektiv zu trainieren, katalysierte die Computer Vision Revolution und modernes Deep Learning.",
          nl: "ImageNet (2009) bood 14+ miljoen gelabelde afbeeldingen over 20.000+ categorieën, gaf onderzoekers de grootschalige data die nodig was om diepe neurale netwerken effectief te trainen, katalyseerde de computer vision revolutie en modern deep learning."
        }
      },
      {
        question: {
          en: "What was the Monte Carlo Tree Search algorithm's impact on game AI?",
          es: "¿Cuál fue el impacto del algoritmo de Búsqueda de Árbol Monte Carlo en IA de juegos?",
          de: "Was war die Auswirkung des Monte Carlo Tree Search Algorithmus auf Spiel-KI?",
          nl: "Wat was de impact van het Monte Carlo Tree Search algoritme op game AI?"
        },
        options: [
          { en: "Enabled strong play in games with huge branching factors like Go before deep learning", es: "Habilitó juego fuerte en juegos con factores de ramificación enormes como Go antes del aprendizaje profundo", de: "Ermöglichte starkes Spiel in Spielen mit riesigen Verzweigungsfaktoren wie Go vor Deep Learning", nl: "Maakte sterk spel mogelijk in spellen met enorme vertakkingsfactoren zoals Go voor deep learning" },
          { en: "Was only useful for chess", es: "Solo fue útil para ajedrez", de: "War nur für Schach nützlich", nl: "Was alleen nuttig voor schaak" },
          { en: "Required perfect information", es: "Requirió información perfecta", de: "Erforderte perfekte Information", nl: "Vereiste perfecte informatie" },
          { en: "Couldn't handle randomness", es: "No podía manejar aleatoriedad", de: "Konnte keine Zufälligkeit handhaben", nl: "Kon geen willekeur aan" }
        ],
        correct: 0,
        explanation: {
          en: "MCTS (2006) revolutionized game AI by using random sampling and statistical analysis to evaluate moves, enabling strong computer Go play for the first time and influencing AlphaGo's eventual mastery of the game.",
          es: "MCTS (2006) revolucionó la IA de juegos usando muestreo aleatorio y análisis estadístico para evaluar movimientos, habilitando por primera vez juego fuerte de Go por computadora e influyendo en el eventual dominio de AlphaGo del juego.",
          de: "MCTS (2006) revolutionierte Spiel-KI durch Verwendung von Zufallsstichproben und statistischer Analyse zur Bewertung von Zügen, ermöglichte erstmals starkes Computer-Go-Spiel und beeinflusste AlphaGos eventuelle Meisterschaft des Spiels.",
          nl: "MCTS (2006) revolutioneerde game AI door willekeurige sampling en statistische analyse te gebruiken om zetten te evalueren, maakte voor het eerst sterk computer Go spel mogelijk en beïnvloedde AlphaGo's uiteindelijke beheersing van het spel."
        }
      },
      {
        question: {
          en: "What was the significance of word2vec released by Google in 2013?",
          es: "¿Cuál fue la importancia de word2vec lanzado por Google en 2013?",
          de: "Was war die Bedeutung von word2vec veröffentlicht von Google 2013?",
          nl: "Wat was de betekenis van word2vec uitgebracht door Google in 2013?"
        },
        options: [
          { en: "Learned dense word embeddings capturing semantic relationships from large text corpora", es: "Aprendió incrustaciones de palabras densas capturando relaciones semánticas de grandes corpus de texto", de: "Lernte dichte Worteinbettungen die semantische Beziehungen aus großen Textkorpora erfassten", nl: "Leerde dichte woord embeddings die semantische relaties vastlegden uit grote tekstcorpora" },
          { en: "First spell checker program", es: "Primer programa de corrección ortográfica", de: "Erstes Rechtschreibprüfprogramm", nl: "Eerste spellingcontrole programma" },
          { en: "Invented natural language", es: "Inventó lenguaje natural", de: "Erfand natürliche Sprache", nl: "Vond natuurlijke taal uit" },
          { en: "Created the first dictionary", es: "Creó el primer diccionario", de: "Schuf das erste Wörterbuch", nl: "Creëerde het eerste woordenboek" }
        ],
        correct: 0,
        explanation: {
          en: "word2vec revolutionized NLP by learning vector representations where semantically similar words had similar vectors, enabling operations like 'king - man + woman = queen', and became foundational for modern language models.",
          es: "word2vec revolucionó el procesamiento de lenguaje natural aprendiendo representaciones vectoriales donde palabras semánticamente similares tenían vectores similares, habilitando operaciones como 'rey - hombre + mujer = reina'.",
          de: "word2vec revolutionierte NLP durch Lernen von Vektordarstellungen wo semantisch ähnliche Wörter ähnliche Vektoren hatten, ermöglichte Operationen wie 'König - Mann + Frau = Königin' und wurde grundlegend für moderne Sprachmodelle.",
          nl: "word2vec revolutioneerde NLP door vector representaties te leren waar semantisch vergelijkbare woorden vergelijkbare vectoren hadden, maakte operaties mogelijk zoals 'koning - man + vrouw = koningin' en werd fundamenteel voor moderne taalmodellen."
        }
      },
      {
        question: {
          en: "What was the DARPA Grand Challenge and its significance for autonomous vehicles?",
          es: "¿Qué fue el DARPA Grand Challenge y su importancia para vehículos autónomos?",
          de: "Was war die DARPA Grand Challenge und ihre Bedeutung für autonome Fahrzeuge?",
          nl: "Wat was de DARPA Grand Challenge en zijn betekenis voor autonome voertuigen?"
        },
        options: [
          { en: "Robot car race that catalyzed self-driving vehicle technology development from 2004-2007", es: "Carrera de autos robot que catalizó el desarrollo de tecnología de vehículos autónomos de 2004-2007", de: "Roboter-Auto-Rennen das Selbstfahrzeug-Technologie-Entwicklung von 2004-2007 katalysierte", nl: "Robot auto race die zelfrijdende voertuig technologie ontwikkeling katalyseerde van 2004-2007" },
          { en: "First computer programming contest", es: "Primer concurso de programación de computadoras", de: "Erster Computerprogrammier-Wettbewerb", nl: "Eerste computer programmeer wedstrijd" },
          { en: "Chess championship for computers", es: "Campeonato de ajedrez para computadoras", de: "Schachmeisterschaft für Computer", nl: "Schaakkampioenschap voor computers" },
          { en: "AI safety conference", es: "Conferencia de seguridad de IA", de: "KI-Sicherheitskonferenz", nl: "AI veiligheidsconferentie" }
        ],
        correct: 0,
        explanation: {
          en: "The DARPA Grand Challenges (2004-2007) challenged teams to build autonomous vehicles navigating desert terrain and urban environments, jumpstarting modern self-driving car technology and attracting major tech companies to the field.",
          es: "Los DARPA Grand Challenges (2004-2007) desafiaron a equipos a construir vehículos autónomos navegando terreno desértico y ambientes urbanos, impulsando la tecnología moderna de autos autónomos y atrayendo grandes compañías tecnológicas al campo.",
          de: "Die DARPA Grand Challenges (2004-2007) forderten Teams heraus autonome Fahrzeuge zu bauen die Wüstengelände und städtische Umgebungen navigierten, starteten moderne Selbstfahrauto-Technologie und zogen große Tech-Unternehmen in das Feld.",
          nl: "De DARPA Grand Challenges (2004-2007) daagden teams uit om autonome voertuigen te bouwen die woestijnterrein en stedelijke omgevingen navigeerden, lanceerden moderne zelfrijdende auto technologie en trokken grote tech bedrijven naar het veld."
        }
      },
      {
        question: {
          en: "What was the Semantic Web initiative and its relationship to AI?",
          es: "¿Qué fue la iniciativa de Web Semántica y su relación con IA?",
          de: "Was war die Semantic Web Initiative und ihre Beziehung zur KI?",
          nl: "Wat was het Semantic Web initiatief en zijn relatie tot AI?"
        },
        options: [
          { en: "Effort to make web data machine-readable through ontologies and reasoning", es: "Esfuerzo para hacer datos web legibles por máquina através de ontologías y razonamiento", de: "Bemühung Webdaten durch Ontologien und Denken maschinenlesbar zu machen", nl: "Inspanning om webdata machine-leesbaar te maken door ontologieën en redeneren" },
          { en: "First web browser", es: "Primer navegador web", de: "Erster Webbrowser", nl: "Eerste webbrowser" },
          { en: "Social media platform", es: "Plataforma de redes sociales", de: "Social Media Plattform", nl: "Social media platform" },
          { en: "E-commerce system", es: "Sistema de comercio electrónico", de: "E-Commerce-System", nl: "E-commerce systeem" }
        ],
        correct: 0,
        explanation: {
          en: "The Semantic Web, championed by Tim Berners-Lee, aimed to structure web data using ontologies, RDF, and logic-based reasoning, enabling intelligent agents to process and integrate information automatically, though it faced challenges in widespread adoption.",
          es: "La Web Semántica, defendida por Tim Berners-Lee, tuvo como objetivo estructurar datos web usando ontologías, RDF y razonamiento basado en lógica, habilitando agentes inteligentes para procesar e integrar información automáticamente.",
          de: "Das Semantic Web, verfochten von Tim Berners-Lee, zielte darauf ab Webdaten unter Verwendung von Ontologien, RDF und logikbasiertem Denken zu strukturieren und intelligente Agenten zu befähigen Information automatisch zu verarbeiten und zu integrieren.",
          nl: "Het Semantic Web, voorgestaan door Tim Berners-Lee, was gericht op het structureren van webdata met ontologieën, RDF en logisch gebaseerd redeneren, wat intelligente agenten in staat stelde informatie automatisch te verwerken en integreren."
        }
      },
      {
        question: {
          en: "What was the significance of GANs (Generative Adversarial Networks) introduced by Ian Goodfellow in 2014?",
          es: "¿Cuál fue la importancia de las GANs (Redes Adversarias Generativas) introducidas por Ian Goodfellow en 2014?",
          de: "Was war die Bedeutung von GANs (Generative Adversarial Networks) eingeführt von Ian Goodfellow 2014?",
          nl: "Wat was de betekenis van GANs (Generative Adversarial Networks) geïntroduceerd door Ian Goodfellow in 2014?"
        },
        options: [
          { en: "Revolutionary approach to generating realistic synthetic data through adversarial training", es: "Enfoque revolucionario para generar datos sintéticos realistas através de entrenamiento adversarial", de: "Revolutionärer Ansatz zur Erzeugung realistischer synthetischer Daten durch adversariales Training", nl: "Revolutionaire benadering voor het genereren van realistische synthetische data door adversarial training" },
          { en: "First classification algorithm", es: "Primer algoritmo de clasificación", de: "Erster Klassifikationsalgorithmus", nl: "Eerste classificatie algoritme" },
          { en: "Invented supervised learning", es: "Inventó aprendizaje supervisado", de: "Erfand überwachtes Lernen", nl: "Vond supervised learning uit" },
          { en: "Created symbolic AI", es: "Creó IA simbólica", de: "Schuf symbolische KI", nl: "Creëerde symbolische AI" }
        ],
        correct: 0,
        explanation: {
          en: "GANs pit a generator network against a discriminator network in a game-theoretic framework, enabling generation of remarkably realistic images, videos, and data, revolutionizing generative modeling and creative AI applications.",
          es: "Las GANs enfrentan una red generadora contra una red discriminadora en un marco de teoría de juegos, habilitando generación de imágenes, videos y datos notablemente realistas, revolucionando el modelado generativo y aplicaciones creativas de IA.",
          de: "GANs stellen ein Generator-Netzwerk gegen ein Diskriminator-Netzwerk in einem spieltheoretischen Rahmen und ermöglichen die Erzeugung bemerkenswert realistischer Bilder, Videos und Daten, revolutionierten generative Modellierung und kreative KI-Anwendungen.",
          nl: "GANs zetten een generator netwerk tegen een discriminator netwerk in een speltheoretisch framework, wat generatie van opmerkelijk realistische beelden, video's en data mogelijk maakte, revolutioneerde generatief modelleren en creatieve AI toepassingen."
        }
      },
      {
        question: {
          en: "What was the significance of ResNet (Residual Networks) introduced in 2015?",
          es: "¿Cuál fue la importancia de ResNet (Redes Residuales) introducidas en 2015?",
          de: "Was war die Bedeutung von ResNet (Residuale Netzwerke) eingeführt 2015?",
          nl: "Wat was de betekenis van ResNet (Residuele Netwerken) geïntroduceerd in 2015?"
        },
        options: [
          { en: "Skip connections enabled training of very deep networks with 100+ layers", es: "Conexiones de salto habilitaron entrenamiento de redes muy profundas con 100+ capas", de: "Skip-Verbindungen ermöglichten Training sehr tiefer Netzwerke mit 100+ Schichten", nl: "Skip verbindingen maakten training van zeer diepe netwerken met 100+ lagen mogelijk" },
          { en: "First use of neural networks", es: "Primer uso de redes neuronales", de: "Erste Verwendung neuronaler Netzwerke", nl: "Eerste gebruik van neurale netwerken" },
          { en: "Invented backpropagation", es: "Inventó la retropropagación", de: "Erfand Backpropagation", nl: "Vond backpropagation uit" },
          { en: "Created reinforcement learning", es: "Creó aprendizaje por refuerzo", de: "Schuf Verstärkungslernen", nl: "Creëerde versterkingsleren" }
        ],
        correct: 0,
        explanation: {
          en: "ResNet's residual connections solved the degradation problem in very deep networks, enabling architectures with 100+ layers that achieved unprecedented accuracy on ImageNet and other benchmarks, advancing computer vision significantly.",
          es: "Las conexiones residuales de ResNet resolvieron el problema de degradación en redes muy profundas, habilitando arquitecturas con 100+ capas que lograron precisión sin precedentes en ImageNet y otros benchmarks.",
          de: "ResNets residuale Verbindungen lösten das Degradationsproblem in sehr tiefen Netzwerken, ermöglichten Architekturen mit 100+ Schichten die beispiellose Genauigkeit auf ImageNet und anderen Benchmarks erreichten.",
          nl: "ResNet's residuele verbindingen losten het degradatie probleem in zeer diepe netwerken op, maakten architecturen met 100+ lagen mogelijk die ongekende nauwkeurigheid bereikten op ImageNet en andere benchmarks."
        }
      },
      {
        question: {
          en: "What was the Cyc project's approach to encoding common sense?",
          es: "¿Cuál fue el enfoque del proyecto Cyc para codificar sentido común?",
          de: "Was war der Ansatz des Cyc-Projekts zur Kodierung von gesundem Menschenverstand?",
          nl: "Wat was de aanpak van het Cyc project voor het coderen van gezond verstand?"
        },
        options: [
          { en: "Manual encoding of millions of facts and rules over decades", es: "Codificación manual de millones de hechos y reglas durante décadas", de: "Manuelle Kodierung von Millionen Fakten und Regeln über Jahrzehnte", nl: "Handmatige codering van miljoenen feiten en regels over decennia" },
          { en: "Pure neural network learning", es: "Aprendizaje puro de redes neuronales", de: "Reines neuronales Netzwerk-Lernen", nl: "Puur neuraal netwerk leren" },
          { en: "Genetic algorithms only", es: "Solo algoritmos genéticos", de: "Nur genetische Algorithmen", nl: "Alleen genetische algoritmen" },
          { en: "Crowdsourced from social media", es: "Colaboración masiva de redes sociales", de: "Crowdsourced von sozialen Medien", nl: "Crowdsourced van social media" }
        ],
        correct: 0,
        explanation: {
          en: "Cyc's massive knowledge engineering effort manually encoded millions of common sense facts and inference rules over 30+ years, representing one of the largest symbolic AI projects, though it faced challenges in coverage and brittleness.",
          es: "El esfuerzo masivo de ingeniería de conocimiento de Cyc codificó manualmente millones de hechos de sentido común y reglas de inferencia durante 30+ años, representando uno de los proyectos de IA simbólica más grandes.",
          de: "Cycs massives Wissenstechnik-Bemühen kodierte manuell Millionen von Common-Sense-Fakten und Inferenzregeln über 30+ Jahre und repräsentierte eines der größten symbolischen KI-Projekte.",
          nl: "Cyc's massale kennistechniek inspanning codeerde handmatig miljoenen gezond verstand feiten en inferentieregels over 30+ jaar, wat een van de grootste symbolische AI projecten vertegenwoordigde."
        }
      },
      {
        question: {
          en: "What was the significance of the Transformer architecture introduced in 2017?",
          es: "¿Cuál fue la importancia de la arquitectura Transformer introducida en 2017?",
          de: "Was war die Bedeutung der Transformer-Architektur eingeführt 2017?",
          nl: "Wat was de betekenis van de Transformer architectuur geïntroduceerd in 2017?"
        },
        options: [
          { en: "Attention mechanisms replaced recurrence, enabling parallel training and better long-range dependencies", es: "Mecanismos de atención reemplazaron recurrencia, habilitando entrenamiento paralelo y mejores dependencias de largo rango", de: "Aufmerksamkeitsmechanismen ersetzten Rekurrenz, ermöglichten paralleles Training und bessere Langstreckenabhängigkeiten", nl: "Aandachtsmechanismen vervingen recurrentie, maakten parallelle training en betere lange-afstands afhankelijkheden mogelijk" },
          { en: "First neural network ever created", es: "Primera red neuronal jamás creada", de: "Erstes jemals erstelltes neuronales Netzwerk", nl: "Eerste neurale netwerk ooit gecreëerd" },
          { en: "Invented computer vision", es: "Inventó visión por computadora", de: "Erfand Computer Vision", nl: "Vond computer vision uit" },
          { en: "Created symbolic reasoning", es: "Creó razonamiento simbólico", de: "Schuf symbolisches Denken", nl: "Creëerde symbolisch redeneren" }
        ],
        correct: 0,
        explanation: {
          en: "The Transformer's self-attention mechanism eliminated recurrence, enabling efficient parallel training and better modeling of long-range dependencies, revolutionizing NLP and leading to models like BERT, GPT, and modern large language models.",
          es: "El mecanismo de auto-atención del Transformer eliminó la recurrencia, habilitando entrenamiento paralelo eficiente y mejor modelado de dependencias de largo rango, revolucionando el procesamiento de lenguaje natural y llevando a modelos como BERT, GPT.",
          de: "Der Self-Attention-Mechanismus des Transformers eliminierte Rekurrenz, ermöglichte effizientes paralleles Training und bessere Modellierung von Langstreckenabhängigkeiten, revolutionierte NLP und führte zu Modellen wie BERT, GPT.",
          nl: "Het Transformer's self-attention mechanisme elimineerde recurrentie, maakte efficiënte parallelle training en betere modellering van lange-afstands afhankelijkheden mogelijk, revolutioneerde NLP en leidde tot modellen zoals BERT, GPT."
        }
      },
      {
        question: {
          en: "What was the impact of transfer learning on deep learning practice?",
          es: "¿Cuál fue el impacto del aprendizaje por transferencia en la práctica del aprendizaje profundo?",
          de: "Was war die Auswirkung von Transfer Learning auf die Deep Learning Praxis?",
          nl: "Wat was de impact van transfer learning op deep learning praktijk?"
        },
        options: [
          { en: "Enabled reusing pretrained models for new tasks with limited data", es: "Habilitó reutilizar modelos preentrenados para nuevas tareas con datos limitados", de: "Ermöglichte Wiederverwendung vortrainierter Modelle für neue Aufgaben mit begrenzten Daten", nl: "Maakte hergebruik van voorgetrainde modellen mogelijk voor nieuwe taken met beperkte data" },
          { en: "Made training slower", es: "Hizo el entrenamiento más lento", de: "Machte Training langsamer", nl: "Maakte training langzamer" },
          { en: "Required more data", es: "Requirió más datos", de: "Erforderte mehr Daten", nl: "Vereiste meer data" },
          { en: "Only worked for images", es: "Solo funcionó para imágenes", de: "Funktionierte nur für Bilder", nl: "Werkte alleen voor beelden" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning revolutionized practical deep learning by allowing models pretrained on large datasets to be fine-tuned for specific tasks with minimal data, democratizing AI and enabling small teams to achieve state-of-the-art results.",
          es: "El aprendizaje por transferencia revolucionó el aprendizaje profundo práctico permitiendo que modelos preentrenados en grandes conjuntos de datos sean ajustados para tareas específicas con datos mínimos, democratizando la IA.",
          de: "Transfer Learning revolutionierte praktisches Deep Learning indem es ermöglichte dass auf großen Datensätzen vortrainierte Modelle für spezifische Aufgaben mit minimalen Daten feinabgestimmt werden konnten, demokratisierte KI.",
          nl: "Transfer learning revolutioneerde praktische deep learning door modellen voorgetraind op grote datasets mogelijk te maken om afgestemd te worden voor specifieke taken met minimale data, democratiseerde AI."
        }
      },
      {
        question: {
          en: "What was the NELL (Never-Ending Language Learning) project?",
          es: "¿Qué fue el proyecto NELL (Never-Ending Language Learning)?",
          de: "Was war das NELL (Never-Ending Language Learning) Projekt?",
          nl: "Wat was het NELL (Never-Ending Language Learning) project?"
        },
        options: [
          { en: "CMU system continuously learning facts from web since 2010", es: "Sistema de CMU aprendiendo continuamente hechos de la web desde 2010", de: "CMU-System das seit 2010 kontinuierlich Fakten aus dem Web lernt", nl: "CMU systeem dat continu feiten leert van het web sinds 2010" },
          { en: "First spell checker", es: "Primer corrector ortográfico", de: "Erster Rechtschreibprüfer", nl: "Eerste spellingcontrole" },
          { en: "Social media platform", es: "Plataforma de redes sociales", de: "Social Media Plattform", nl: "Social media platform" },
          { en: "Video game", es: "Videojuego", de: "Videospiel", nl: "Videospel" }
        ],
        correct: 0,
        explanation: {
          en: "NELL demonstrates lifelong learning by continuously reading web pages since 2010, extracting facts and improving its knowledge base over time, representing an ongoing experiment in cumulative machine learning.",
          es: "NELL demuestra aprendizaje de por vida leyendo continuamente páginas web desde 2010, extrayendo hechos y mejorando su base de conocimiento con el tiempo, representando un experimento continuo en aprendizaje automático acumulativo.",
          de: "NELL demonstriert lebenslanges Lernen durch kontinuierliches Lesen von Webseiten seit 2010, extrahiert Fakten und verbessert seine Wissensbasis über Zeit, repräsentiert ein laufendes Experiment in kumulativem maschinellem Lernen.",
          nl: "NELL demonstreert levenslang leren door continu webpagina's te lezen sinds 2010, feiten te extraheren en zijn kennisbank te verbeteren over tijd, vertegenwoordigt een doorlopend experiment in cumulatief machine learning."
        }
      },
      {
        question: {
          en: "What was the significance of BERT (Bidirectional Encoder Representations from Transformers) in 2018?",
          es: "¿Cuál fue la importancia de BERT en 2018?",
          de: "Was war die Bedeutung von BERT 2018?",
          nl: "Wat was de betekenis van BERT in 2018?"
        },
        options: [
          { en: "Bidirectional pretraining achieved state-of-the-art on multiple NLP benchmarks", es: "Preentrenamiento bidireccional logró estado del arte en múltiples benchmarks de procesamiento de lenguaje natural", de: "Bidirektionales Vortraining erreichte State-of-the-Art auf mehreren NLP-Benchmarks", nl: "Bidirectionele voortraining behaalde state-of-the-art op meerdere NLP benchmarks" },
          { en: "First computer program ever", es: "Primer programa de computadora jamás", de: "Erstes Computerprogramm überhaupt", nl: "Eerste computerprogramma ooit" },
          { en: "Created consciousness", es: "Creó conciencia", de: "Schuf Bewusstsein", nl: "Creëerde bewustzijn" },
          { en: "Invented language", es: "Inventó lenguaje", de: "Erfand Sprache", nl: "Vond taal uit" }
        ],
        correct: 0,
        explanation: {
          en: "BERT's bidirectional training using masked language modeling enabled deep contextual understanding, achieving breakthrough performance across NLP tasks and demonstrating the power of pretrain-then-finetune approaches.",
          es: "El entrenamiento bidireccional de BERT usando modelado de lenguaje enmascarado habilitó comprensión contextual profunda, logrando rendimiento revolucionario en tareas de procesamiento de lenguaje natural.",
          de: "BERTs bidirektionales Training mit maskiertem Sprachmodellierung ermöglichte tiefes kontextuelles Verständnis, erreichte Durchbruchleistung über NLP-Aufgaben und demonstrierte die Kraft von Vortrain-dann-Feinabstimmungs-Ansätzen.",
          nl: "BERT's bidirectionele training met gemaskeerde taalmodellering maakte diep contextueel begrip mogelijk, behaalde doorbraak prestaties over NLP taken en demonstreerde de kracht van pretrain-dan-finetune benaderingen."
        }
      },
      {
        question: {
          en: "What was the role of GPUs in the deep learning revolution?",
          es: "¿Cuál fue el rol de las GPUs en la revolución del aprendizaje profundo?",
          de: "Was war die Rolle von GPUs in der Deep Learning Revolution?",
          nl: "Wat was de rol van GPU's in de deep learning revolutie?"
        },
        options: [
          { en: "Massively parallel architecture accelerated neural network training by 10-100x", es: "Arquitectura masivamente paralela aceleró entrenamiento de redes neuronales por 10-100x", de: "Massiv parallele Architektur beschleunigte neuronales Netzwerk-Training um das 10-100-fache", nl: "Massaal parallelle architectuur versnelde neurale netwerk training met 10-100x" },
          { en: "Made training impossible", es: "Hizo el entrenamiento imposible", de: "Machte Training unmöglich", nl: "Maakte training onmogelijk" },
          { en: "Only useful for graphics", es: "Solo útil para gráficos", de: "Nur nützlich für Grafik", nl: "Alleen nuttig voor graphics" },
          { en: "Slowed down computations", es: "Ralentizó las computaciones", de: "Verlangsamte Berechnungen", nl: "Vertraagde berekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "GPUs' thousands of cores enabled massively parallel matrix operations crucial for neural networks, reducing training time from months to days, making deep learning practical and catalyzing the AI boom starting with AlexNet's 2012 ImageNet victory.",
          es: "Los miles de núcleos de las GPUs habilitaron operaciones matriciales masivamente paralelas cruciales para redes neuronales, reduciendo tiempo de entrenamiento de meses a días, haciendo el aprendizaje profundo práctico.",
          de: "GPUs Tausende von Kernen ermöglichten massiv parallele Matrixoperationen entscheidend für neuronale Netzwerke, reduzierten Trainingszeit von Monaten auf Tage, machten Deep Learning praktikabel und katalysierten den KI-Boom.",
          nl: "GPU's duizenden cores maakten massaal parallelle matrix operaties mogelijk cruciaal voor neurale netwerken, reduceerden trainingstijd van maanden tot dagen, maakten deep learning praktisch en katalyseerden de AI boom."
        }
      },
      {
        question: {
          en: "What was the significance of OpenAI's GPT (Generative Pre-trained Transformer) approach?",
          es: "¿Cuál fue la importancia del enfoque GPT de OpenAI?",
          de: "Was war die Bedeutung von OpenAIs GPT-Ansatz?",
          nl: "Wat was de betekenis van OpenAI's GPT benadering?"
        },
        options: [
          { en: "Showed unsupervised pretraining on text enabled few-shot and zero-shot learning", es: "Mostró que el preentrenamiento no supervisado en texto habilitó aprendizaje de pocos y cero ejemplos", de: "Zeigte dass unüberwachtes Vortraining auf Text Few-Shot und Zero-Shot Lernen ermöglichte", nl: "Toonde dat onbegeleid voortrainen op tekst few-shot en zero-shot leren mogelijk maakte" },
          { en: "First computer ever built", es: "Primera computadora jamás construida", de: "Erster jemals gebauter Computer", nl: "Eerste computer ooit gebouwd" },
          { en: "Invented electricity", es: "Inventó la electricidad", de: "Erfand Elektrizität", nl: "Vond elektriciteit uit" },
          { en: "Created the internet", es: "Creó internet", de: "Schuf das Internet", nl: "Creëerde het internet" }
        ],
        correct: 0,
        explanation: {
          en: "GPT demonstrated that language models pretrained on massive text corpora could perform diverse tasks with minimal or no task-specific training, pioneering the foundation model paradigm that led to GPT-3 and ChatGPT.",
          es: "GPT demostró que modelos de lenguaje preentrenados en corpus masivos de texto podían realizar tareas diversas con entrenamiento mínimo o nulo específico de tarea, siendo pionero del paradigma de modelo fundacional que llevó a GPT-3 y ChatGPT.",
          de: "GPT demonstrierte dass Sprachmodelle auf massiven Textkorpora vortrainiert diverse Aufgaben mit minimalem oder keinem aufgabenspezifischem Training ausführen konnten, war Pionier des Foundation-Model-Paradigmas das zu GPT-3 und ChatGPT führte.",
          nl: "GPT toonde dat taalmodellen voorgetraind op massale tekstcorpora diverse taken konden uitvoeren met minimale of geen taak-specifieke training, was pionier van het foundation model paradigma dat leidde tot GPT-3 en ChatGPT."
        }
      },
      {
        question: {
          en: "What was the Moravec paradox in AI history?",
          es: "¿Qué fue la paradoja de Moravec en la historia de IA?",
          de: "Was war das Moravec-Paradoxon in der KI-Geschichte?",
          nl: "Wat was de Moravec paradox in AI geschiedenis?"
        },
        options: [
          { en: "High-level reasoning is easier for AI than sensorimotor skills contrary to human experience", es: "Razonamiento de alto nivel es más fácil para IA que habilidades sensoriomotoras contrario a experiencia humana", de: "Hochrangiges Denken ist für KI einfacher als sensomotorische Fähigkeiten entgegen menschlicher Erfahrung", nl: "Hoog-niveau redeneren is makkelijker voor AI dan sensomotorische vaardigheden in tegenstelling tot menselijke ervaring" },
          { en: "AI is impossible to build", es: "La IA es imposible de construir", de: "KI ist unmöglich zu bauen", nl: "AI is onmogelijk te bouwen" },
          { en: "Computers are always faster than humans", es: "Las computadoras siempre son más rápidas que los humanos", de: "Computer sind immer schneller als Menschen", nl: "Computers zijn altijd sneller dan mensen" },
          { en: "Humans and AI are identical", es: "Humanos e IA son idénticos", de: "Menschen und KI sind identisch", nl: "Mensen en AI zijn identiek" }
        ],
        correct: 0,
        explanation: {
          en: "Moravec observed that AI found chess and theorem-proving easier than tasks like perception and motor control that toddlers master effortlessly, revealing that evolutionary ancient skills are harder to replicate than abstract reasoning.",
          es: "Moravec observó que la IA encontró ajedrez y demostración de teoremas más fácil que tareas como percepción y control motor que los niños pequeños dominan sin esfuerzo, revelando que habilidades evolutivamente antiguas son más difíciles de replicar.",
          de: "Moravec beobachtete dass KI Schach und Theorembeweis einfacher fand als Aufgaben wie Wahrnehmung und Motorkontrolle die Kleinkinder mühelos meistern, offenbarte dass evolutionär alte Fähigkeiten schwerer zu replizieren sind.",
          nl: "Moravec observeerde dat AI schaken en stellingbewijs makkelijker vond dan taken zoals perceptie en motorische controle die peuters moeiteloos beheersen, onthulde dat evolutionair oude vaardigheden moeilijker te repliceren zijn."
        }
      },
      {
        question: {
          en: "What was the significance of dropout as a regularization technique?",
          es: "¿Cuál fue la importancia del dropout como técnica de regularización?",
          de: "Was war die Bedeutung von Dropout als Regularisierungstechnik?",
          nl: "Wat was de betekenis van dropout als regularisatie techniek?"
        },
        options: [
          { en: "Randomly dropping neurons during training prevented overfitting in deep networks", es: "Descartar aleatoriamente neuronas durante entrenamiento previno sobreajuste en redes profundas", de: "Zufälliges Fallenlassen von Neuronen während des Trainings verhinderte Überanpassung in tiefen Netzwerken", nl: "Willekeurig laten vallen van neuronen tijdens training voorkwam overfitting in diepe netwerken" },
          { en: "Made networks train slower always", es: "Hizo que las redes entrenaran más lento siempre", de: "Machte Netzwerke immer langsamer im Training", nl: "Maakte netwerken altijd langzamer trainen" },
          { en: "Only worked for small networks", es: "Solo funcionó para redes pequeñas", de: "Funktionierte nur für kleine Netzwerke", nl: "Werkte alleen voor kleine netwerken" },
          { en: "Required more data", es: "Requirió más datos", de: "Erforderte mehr Daten", nl: "Vereiste meer data" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout, introduced by Hinton et al. in 2012, randomly deactivates neurons during training, preventing co-adaptation and acting like training an ensemble of networks, becoming a standard technique for preventing overfitting in deep learning.",
          es: "Dropout, introducido por Hinton et al. en 2012, desactiva aleatoriamente neuronas durante entrenamiento, previniendo co-adaptación y actuando como entrenar un conjunto de redes, convirtiéndose en técnica estándar para prevenir sobreajuste.",
          de: "Dropout, eingeführt von Hinton et al. 2012, deaktiviert zufällig Neuronen während des Trainings, verhindert Ko-Adaptation und wirkt wie Training eines Ensembles von Netzwerken, wurde Standardtechnik zur Verhinderung von Überanpassung.",
          nl: "Dropout, geïntroduceerd door Hinton et al. in 2012, deactiveert willekeurig neuronen tijdens training, voorkomt co-adaptatie en werkt als het trainen van een ensemble van netwerken, werd standaard techniek voor het voorkomen van overfitting."
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