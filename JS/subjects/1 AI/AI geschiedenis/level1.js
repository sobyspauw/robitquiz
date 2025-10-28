// AI History Quiz - Level 1: Basic Knowledge about AI History
(function() {
  const level1 = {
    name: {
      en: "AI History Level 1",
      es: "Historia de IA Nivel 1",
      de: "KI-Geschichte Stufe 1",
      nl: "AI Geschiedenis Level 1"
    },
    questions: [
      {
        question: {
          en: "Who coined the term 'Artificial Intelligence'?",
          es: "¿Quién acuñó el término 'Inteligencia Artificial'?",
          de: "Wer prägte den Begriff 'Künstliche Intelligenz'?",
          nl: "Wie bedacht de term 'Kunstmatige Intelligentie'?"
        },
        options: [
          { en: "John McCarthy", es: "John McCarthy", de: "John McCarthy", nl: "John McCarthy" },
          { en: "Alan Turing", es: "Alan Turing", de: "Alan Turing", nl: "Alan Turing" },
          { en: "Marvin Minsky", es: "Marvin Minsky", de: "Marvin Minsky", nl: "Marvin Minsky" },
          { en: "Allen Newell", es: "Allen Newell", de: "Allen Newell", nl: "Allen Newell" }
        ],
        correct: 0,
        explanation: {
          en: "John McCarthy coined the term 'Artificial Intelligence' in 1956 when he organized the Dartmouth Conference, which is considered the founding event of AI as a field.",
          es: "John McCarthy acuñó el término 'Inteligencia Artificial' en 1956 cuando organizó la Conferencia de Dartmouth, que se considera el evento fundacional de la IA como campo.",
          de: "John McCarthy prägte den Begriff 'Künstliche Intelligenz' im Jahr 1956, als er die Dartmouth-Konferenz organisierte, die als Gründungsereignis der KI als Fachgebiet gilt.",
          nl: "John McCarthy bedacht de term 'Kunstmatige Intelligentie' in 1956 toen hij de Dartmouth Conferentie organiseerde, wat beschouwd wordt als de oprichtingsgebeurtenis van AI als vakgebied."
        }
      },
      {
        question: {
          en: "When was the Dartmouth Conference held?",
          es: "¿Cuándo se celebró la Conferencia de Dartmouth?",
          de: "Wann fand die Dartmouth-Konferenz statt?",
          nl: "Wanneer werd de Dartmouth Conferentie gehouden?"
        },
        options: [
          { en: "1950", es: "1950", de: "1950", nl: "1950" },
          { en: "1956", es: "1956", de: "1956", nl: "1956" },
          { en: "1960", es: "1960", de: "1960", nl: "1960" },
          { en: "1965", es: "1965", de: "1965", nl: "1965" }
        ],
        correct: 1,
        explanation: {
          en: "The Dartmouth Conference was held in the summer of 1956 and is widely considered the birth of artificial intelligence as a field of study.",
          es: "La Conferencia de Dartmouth se celebró en el verano de 1956 y es ampliamente considerada como el nacimiento de la inteligencia artificial como campo de estudio.",
          de: "Die Dartmouth-Konferenz fand im Sommer 1956 statt und gilt weithin als die Geburt der künstlichen Intelligenz als Forschungsfeld.",
          nl: "De Dartmouth Conferentie werd gehouden in de zomer van 1956 en wordt algemeen beschouwd als de geboorte van kunstmatige intelligentie als studiegebied."
        }
      },
      {
        question: {
          en: "What was Alan Turing's famous test designed to measure?",
          es: "¿Qué fue diseñado para medir el famoso test de Alan Turing?",
          de: "Was sollte Alan Turings berühmter Test messen?",
          nl: "Wat was Alan Turing's beroemde test ontworpen om te meten?"
        },
        options: [
          { en: "Computer processing speed", es: "Velocidad de procesamiento de computadora", de: "Computer-Verarbeitungsgeschwindigkeit", nl: "Computer verwerkingssnelheid" },
          { en: "Machine intelligence", es: "Inteligencia de máquina", de: "Maschinenintelligenz", nl: "Machine intelligentie" },
          { en: "Memory capacity", es: "Capacidad de memoria", de: "Speicherkapazität", nl: "Geheugencapaciteit" },
          { en: "Programming efficiency", es: "Eficiencia de programación", de: "Programmiereffizienz", nl: "Programmeerefficiëntie" }
        ],
        correct: 1,
        explanation: {
          en: "The Turing Test, proposed by Alan Turing in 1950, was designed to test a machine's ability to exhibit intelligent behavior equivalent to or indistinguishable from that of a human.",
          es: "El Test de Turing, propuesto por Alan Turing en 1950, fue diseñado para probar la capacidad de una máquina de exhibir comportamiento inteligente equivalente o indistinguible del de un humano.",
          de: "Der Turing-Test, 1950 von Alan Turing vorgeschlagen, sollte die Fähigkeit einer Maschine testen, intelligentes Verhalten zu zeigen, das dem eines Menschen entspricht oder von ihm nicht zu unterscheiden ist.",
          nl: "De Turing Test, voorgesteld door Alan Turing in 1950, was ontworpen om het vermogen van een machine te testen om intelligent gedrag te vertonen dat equivalent is aan of niet te onderscheiden van dat van een mens."
        }
      },
      {
        question: {
          en: "Which early AI program was designed to play checkers?",
          es: "¿Qué programa temprano de IA fue diseñado para jugar damas?",
          de: "Welches frühe KI-Programm wurde für Dame-Spiel entwickelt?",
          nl: "Welk vroeg AI programma was ontworpen om dammen te spelen?"
        },
        options: [
          { en: "Arthur Samuel's checker program", es: "El programa de damas de Arthur Samuel", de: "Arthur Samuels Dame-Programm", nl: "Arthur Samuel's dammenprogramma" },
          { en: "Logic Theorist", es: "Logic Theorist", de: "Logic Theorist", nl: "Logic Theorist" },
          { en: "ELIZA", es: "ELIZA", de: "ELIZA", nl: "ELIZA" },
          { en: "DENDRAL", es: "DENDRAL", de: "DENDRAL", nl: "DENDRAL" }
        ],
        correct: 0,
        explanation: {
          en: "Arthur Samuel developed one of the first successful machine learning programs in the 1950s - a checkers-playing program that could learn and improve its performance over time.",
          es: "Arthur Samuel desarrolló uno de los primeros programas exitosos de aprendizaje automático en los años 1950 - un programa que jugaba damas y podía aprender y mejorar su rendimiento con el tiempo.",
          de: "Arthur Samuel entwickelte in den 1950er Jahren eines der ersten erfolgreichen maschinellen Lernprogramme - ein Dame-spielendes Programm, das lernen und seine Leistung im Laufe der Zeit verbessern konnte.",
          nl: "Arthur Samuel ontwikkelde in de jaren 1950 een van de eerste succesvolle machine learning programma's - een dammenspelend programma dat kon leren en zijn prestaties kon verbeteren over tijd."
        }
      },
      {
        question: {
          en: "What does 'ELIZA' refer to in AI history?",
          es: "¿A qué se refiere 'ELIZA' en la historia de la IA?",
          de: "Worauf bezieht sich 'ELIZA' in der KI-Geschichte?",
          nl: "Waar verwijst 'ELIZA' naar in de AI geschiedenis?"
        },
        options: [
          { en: "The first computer", es: "La primera computadora", de: "Der erste Computer", nl: "De eerste computer" },
          { en: "An early chatbot program", es: "Un programa chatbot temprano", de: "Ein frühes Chatbot-Programm", nl: "Een vroeg chatbot programma" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "An AI research lab", es: "Un laboratorio de investigación de IA", de: "Ein KI-Forschungslabor", nl: "Een AI onderzoekslab" }
        ],
        correct: 1,
        explanation: {
          en: "ELIZA was an early natural language processing computer program created by Joseph Weizenbaum in the 1960s, designed to simulate conversation with humans.",
          es: "ELIZA fue un programa temprano de procesamiento de lenguaje natural creado por Joseph Weizenbaum en los años 1960, diseñado para simular conversación con humanos.",
          de: "ELIZA war ein frühes Computerprogramm zur natürlichen Sprachverarbeitung, das in den 1960er Jahren von Joseph Weizenbaum erstellt wurde und darauf ausgelegt war, Gespräche mit Menschen zu simulieren.",
          nl: "ELIZA was een vroeg computerprogramma voor natuurlijke taalverwerking gemaakt door Joseph Weizenbaum in de jaren 1960, ontworpen om conversatie met mensen te simuleren."
        }
      },
      {
        question: {
          en: "What is the name of the hypothesis proposed by Alan Turing in 1950 about machine intelligence?",
          es: "¿Cuál es el nombre de la hipótesis propuesta por Alan Turing en 1950 sobre inteligencia de máquina?",
          de: "Wie heißt die Hypothese die Alan Turing 1950 über Maschinenintelligenz vorschlug?",
          nl: "Wat is de naam van de hypothese voorgesteld door Alan Turing in 1950 over machine intelligentie?"
        },
        options: [
          { en: "The Turing Hypothesis", es: "La Hipótesis de Turing", de: "Die Turing-Hypothese", nl: "De Turing Hypothese" },
          { en: "The Intelligence Test", es: "El Test de Inteligencia", de: "Der Intelligenztest", nl: "De Intelligentie Test" },
          { en: "The Imitation Game", es: "El Juego de Imitación", de: "Das Imitationsspiel", nl: "Het Imitatiespel" },
          { en: "The Machine Theory", es: "La Teoría de Máquina", de: "Die Maschinentheorie", nl: "De Machine Theorie" }
        ],
        correct: 2,
        explanation: {
          en: "Turing proposed the 'Imitation Game' (later called the Turing Test) in his 1950 paper 'Computing Machinery and Intelligence' as a practical test for machine intelligence.",
          es: "Turing propuso el 'Juego de Imitación' (más tarde llamado Test de Turing) en su artículo de 1950 'Computing Machinery and Intelligence' como una prueba práctica para la inteligencia de máquina.",
          de: "Turing schlug das 'Imitationsspiel' (später Turing-Test genannt) in seinem 1950er Paper 'Computing Machinery and Intelligence' als praktischen Test für Maschinenintelligenz vor.",
          nl: "Turing stelde het 'Imitatiespel' (later de Turing Test genoemd) voor in zijn 1950 paper 'Computing Machinery and Intelligence' als praktische test voor machine intelligentie."
        }
      },
      {
        question: {
          en: "Who were the main organizers of the Dartmouth Conference in 1956?",
          es: "¿Quiénes fueron los principales organizadores de la Conferencia de Dartmouth en 1956?",
          de: "Wer waren die Hauptorganisatoren der Dartmouth-Konferenz 1956?",
          nl: "Wie waren de hoofdorganisatoren van de Dartmouth Conferentie in 1956?"
        },
        options: [
          { en: "John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon", es: "John McCarthy, Marvin Minsky, Nathaniel Rochester y Claude Shannon", de: "John McCarthy, Marvin Minsky, Nathaniel Rochester und Claude Shannon", nl: "John McCarthy, Marvin Minsky, Nathaniel Rochester en Claude Shannon" },
          { en: "Alan Turing, John von Neumann, and Herbert Simon", es: "Alan Turing, John von Neumann y Herbert Simon", de: "Alan Turing, John von Neumann und Herbert Simon", nl: "Alan Turing, John von Neumann en Herbert Simon" },
          { en: "Arthur Samuel, Frank Rosenblatt, and Joseph Weizenbaum", es: "Arthur Samuel, Frank Rosenblatt y Joseph Weizenbaum", de: "Arthur Samuel, Frank Rosenblatt und Joseph Weizenbaum", nl: "Arthur Samuel, Frank Rosenblatt en Joseph Weizenbaum" },
          { en: "Allen Newell, Warren McCulloch, and Walter Pitts", es: "Allen Newell, Warren McCulloch y Walter Pitts", de: "Allen Newell, Warren McCulloch und Walter Pitts", nl: "Allen Newell, Warren McCulloch en Walter Pitts" }
        ],
        correct: 0,
        explanation: {
          en: "The Dartmouth Conference was organized by John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon, who wrote the founding proposal that defined artificial intelligence as a field.",
          es: "La Conferencia de Dartmouth fue organizada por John McCarthy, Marvin Minsky, Nathaniel Rochester y Claude Shannon, quienes escribieron la propuesta fundacional que definió la inteligencia artificial como un campo.",
          de: "Die Dartmouth-Konferenz wurde von John McCarthy, Marvin Minsky, Nathaniel Rochester und Claude Shannon organisiert, die den Gründungsantrag schrieben der KI als Feld definierte.",
          nl: "De Dartmouth Conferentie werd georganiseerd door John McCarthy, Marvin Minsky, Nathaniel Rochester en Claude Shannon, die het oprichtingsvoorstel schreven dat kunstmatige intelligentie als vakgebied definieerde."
        }
      },
      {
        question: {
          en: "What was the first computer to be called an 'electronic brain'?",
          es: "¿Cuál fue la primera computadora en ser llamada 'cerebro electrónico'?",
          de: "Welcher war der erste Computer der 'elektronisches Gehirn' genannt wurde?",
          nl: "Wat was de eerste computer die een 'elektronische hersenen' werd genoemd?"
        },
        options: [
          { en: "ENIAC", es: "ENIAC", de: "ENIAC", nl: "ENIAC" },
          { en: "UNIVAC", es: "UNIVAC", de: "UNIVAC", nl: "UNIVAC" },
          { en: "COLOSSUS", es: "COLOSSUS", de: "COLOSSUS", nl: "COLOSSUS" },
          { en: "EDVAC", es: "EDVAC", de: "EDVAC", nl: "EDVAC" }
        ],
        correct: 0,
        explanation: {
          en: "ENIAC (Electronic Numerical Integrator and Computer), completed in 1946, was often called an 'electronic brain' by the media and helped popularize the idea of thinking machines.",
          es: "ENIAC (Electronic Numerical Integrator and Computer), completado en 1946, fue a menudo llamado 'cerebro electrónico' por los medios y ayudó a popularizar la idea de máquinas pensantes.",
          de: "ENIAC (Electronic Numerical Integrator and Computer), 1946 fertiggestellt, wurde oft 'elektronisches Gehirn' von den Medien genannt und half die Idee denkender Maschinen zu popularisieren.",
          nl: "ENIAC (Electronic Numerical Integrator and Computer), voltooid in 1946, werd vaak een 'elektronische hersenen' genoemd door de media en hielp het idee van denkende machines te populariseren."
        }
      },
      {
        question: {
          en: "Who created the first artificial neural network model in 1943?",
          es: "¿Quién creó el primer modelo de red neuronal artificial en 1943?",
          de: "Wer schuf das erste künstliche neuronale Netzwerkmodell 1943?",
          nl: "Wie creëerde het eerste kunstmatige neurale netwerk model in 1943?"
        },
        options: [
          { en: "Warren McCulloch and Walter Pitts", es: "Warren McCulloch y Walter Pitts", de: "Warren McCulloch und Walter Pitts", nl: "Warren McCulloch en Walter Pitts" },
          { en: "Frank Rosenblatt and Marvin Minsky", es: "Frank Rosenblatt y Marvin Minsky", de: "Frank Rosenblatt und Marvin Minsky", nl: "Frank Rosenblatt en Marvin Minsky" },
          { en: "Donald Hebb and John von Neumann", es: "Donald Hebb y John von Neumann", de: "Donald Hebb und John von Neumann", nl: "Donald Hebb en John von Neumann" },
          { en: "Alan Turing and Claude Shannon", es: "Alan Turing y Claude Shannon", de: "Alan Turing und Claude Shannon", nl: "Alan Turing en Claude Shannon" }
        ],
        correct: 0,
        explanation: {
          en: "Warren McCulloch and Walter Pitts published 'A Logical Calculus of Ideas Immanent in Nervous Activity' in 1943, creating the first mathematical model of artificial neurons.",
          es: "Warren McCulloch y Walter Pitts publicaron 'A Logical Calculus of Ideas Immanent in Nervous Activity' en 1943, creando el primer modelo matemático de neuronas artificiales.",
          de: "Warren McCulloch und Walter Pitts veröffentlichten 'A Logical Calculus of Ideas Immanent in Nervous Activity' 1943 und schufen das erste mathematische Modell künstlicher Neuronen.",
          nl: "Warren McCulloch en Walter Pitts publiceerden 'A Logical Calculus of Ideas Immanent in Nervous Activity' in 1943, wat het eerste wiskundige model van kunstmatige neuronen creëerde."
        }
      },
      {
        question: {
          en: "What was the significance of Claude Shannon's work for AI development?",
          es: "¿Cuál fue la importancia del trabajo de Claude Shannon para el desarrollo de IA?",
          de: "Was war die Bedeutung von Claude Shannons Arbeit für die KI-Entwicklung?",
          nl: "Wat was de betekenis van Claude Shannon's werk voor AI ontwikkeling?"
        },
        options: [
          { en: "He developed information theory and showed how logic could be implemented with circuits", es: "Desarrolló la teoría de la información y mostró cómo la lógica podía implementarse con circuitos", de: "Er entwickelte die Informationstheorie und zeigte wie Logik mit Schaltkreisen implementiert werden konnte", nl: "Hij ontwikkelde informatietheorie en toonde hoe logica kon worden geïmplementeerd met circuits" },
          { en: "He built the first computer", es: "Construyó la primera computadora", de: "Er baute den ersten Computer", nl: "Hij bouwde de eerste computer" },
          { en: "He invented the internet", es: "Inventó internet", de: "Er erfand das Internet", nl: "Hij vond het internet uit" },
          { en: "He created the first programming language", es: "Creó el primer lenguaje de programación", de: "Er schuf die erste Programmiersprache", nl: "Hij creëerde de eerste programmeertaal" }
        ],
        correct: 0,
        explanation: {
          en: "Claude Shannon's information theory and his work on Boolean algebra with electrical circuits provided the theoretical and practical foundation for digital computing and AI.",
          es: "La teoría de la información de Claude Shannon y su trabajo sobre álgebra booleana con circuitos eléctricos proporcionó la base teórica y práctica para la computación digital y la IA.",
          de: "Claude Shannons Informationstheorie und seine Arbeit über Boolesche Algebra mit elektrischen Schaltkreisen bot die theoretische und praktische Grundlage für digitales Computing und KI.",
          nl: "Claude Shannon's informatietheorie en zijn werk aan Booleaanse algebra met elektrische circuits bood de theoretische en praktische basis voor digitale computing en AI."
        }
      },
      {
        question: {
          en: "What was the 'General Problem Solver' (GPS) created by Allen Newell and Herbert Simon?",
          es: "¿Qué fue el 'General Problem Solver' (GPS) creado por Allen Newell y Herbert Simon?",
          de: "Was war der 'General Problem Solver' (GPS) von Allen Newell und Herbert Simon?",
          nl: "Wat was de 'General Problem Solver' (GPS) gemaakt door Allen Newell en Herbert Simon?"
        },
        options: [
          { en: "One of the first AI programs designed to solve a wide variety of problems", es: "Uno de los primeros programas de IA diseñados para resolver una amplia variedad de problemas", de: "Eines der ersten KI-Programme entworfen um eine große Vielfalt von Problemen zu lösen", nl: "Een van de eerste AI programma's ontworpen om een grote verscheidenheid aan problemen op te lossen" },
          { en: "A navigation system for satellites", es: "Un sistema de navegación para satélites", de: "Ein Navigationssystem für Satelliten", nl: "Een navigatiesysteem voor satellieten" },
          { en: "A chess-playing program", es: "Un programa para jugar ajedrez", de: "Ein Schachspielprogramm", nl: "Een schaakspelprogramma" },
          { en: "A mathematical theorem prover", es: "Un demostrador de teoremas matemáticos", de: "Ein mathematischer Theorembeweiser", nl: "Een wiskundige stellingbewijzer" }
        ],
        correct: 0,
        explanation: {
          en: "GPS was an early AI program that attempted to solve problems by using means-ends analysis, trying to reduce the difference between the current state and the goal state.",
          es: "GPS fue un programa temprano de IA que intentaba resolver problemas usando análisis de medios-fines, tratando de reducir la diferencia entre el estado actual y el estado objetivo.",
          de: "GPS war ein frühes KI-Programm das versuchte Probleme durch Mittel-Ziel-Analyse zu lösen, indem es die Differenz zwischen aktuellem Zustand und Zielzustand zu reduzieren suchte.",
          nl: "GPS was een vroeg AI programma dat probeerde problemen op te lossen door middel-doel analyse, probeerend het verschil tussen de huidige staat en doelstaat te verminderen."
        }
      },
      {
        question: {
          en: "What was the contribution of Norbert Wiener to early AI concepts?",
          es: "¿Cuál fue la contribución de Norbert Wiener a los conceptos tempranos de IA?",
          de: "Was war Norbert Wieners Beitrag zu frühen KI-Konzepten?",
          nl: "Wat was de bijdrage van Norbert Wiener aan vroege AI concepten?"
        },
        options: [
          { en: "He founded cybernetics, the study of communication and control in animals and machines", es: "Fundó la cibernética, el estudio de comunicación y control en animales y máquinas", de: "Er gründete die Kybernetik, das Studium von Kommunikation und Kontrolle in Tieren und Maschinen", nl: "Hij stichtte cybernetica, de studie van communicatie en controle in dieren en machines" },
          { en: "He invented the computer mouse", es: "Inventó el ratón de computadora", de: "Er erfand die Computermaus", nl: "Hij vond de computermuis uit" },
          { en: "He created the first database", es: "Creó la primera base de datos", de: "Er schuf die erste Datenbank", nl: "Hij creëerde de eerste database" },
          { en: "He designed the first microprocessor", es: "Diseñó el primer microprocesador", de: "Er entwarf den ersten Mikroprozessor", nl: "Hij ontwierp de eerste microprocessor" }
        ],
        correct: 0,
        explanation: {
          en: "Norbert Wiener founded cybernetics in the 1940s, which studied feedback, control, and communication in biological and artificial systems, influencing early AI development.",
          es: "Norbert Wiener fundó la cibernética en los años 1940, que estudió retroalimentación, control y comunicación en sistemas biológicos y artificiales, influyendo en el desarrollo temprano de IA.",
          de: "Norbert Wiener gründete die Kybernetik in den 1940er Jahren, die Feedback, Kontrolle und Kommunikation in biologischen und künstlichen Systemen studierte und die frühe KI-Entwicklung beeinflusste.",
          nl: "Norbert Wiener stichtte cybernetica in de jaren 1940, die feedback, controle en communicatie in biologische en kunstmatige systemen bestudeerde, wat de vroege AI ontwikkeling beïnvloedde."
        }
      },
      {
        question: {
          en: "What was special about the MARK I computer in relation to early AI concepts?",
          es: "¿Qué tenía de especial la computadora MARK I en relación con conceptos tempranos de IA?",
          de: "Was war besonders am MARK I Computer in Bezug auf frühe KI-Konzepte?",
          nl: "Wat was speciaal aan de MARK I computer in relatie tot vroege AI concepten?"
        },
        options: [
          { en: "It was one of the first programmable computers, enabling complex calculations", es: "Fue una de las primeras computadoras programables, permitiendo cálculos complejos", de: "Es war einer der ersten programmierbaren Computer und ermöglichte komplexe Berechnungen", nl: "Het was een van de eerste programmeerbare computers, die complexe berekeningen mogelijk maakte" },
          { en: "It could speak human language", es: "Podía hablar lenguaje humano", de: "Es konnte menschliche Sprache sprechen", nl: "Het kon menselijke taal spreken" },
          { en: "It had artificial vision", es: "Tenía visión artificial", de: "Es hatte künstliches Sehen", nl: "Het had kunstmatige visie" },
          { en: "It could learn from experience", es: "Podía aprender de la experiencia", de: "Es konnte aus Erfahrung lernen", nl: "Het kon leren van ervaring" }
        ],
        correct: 0,
        explanation: {
          en: "The Harvard Mark I, completed in 1944, was one of the first large-scale automatic digital computers, demonstrating the potential for machines to perform complex calculations that would later be essential for AI.",
          es: "El Harvard Mark I, completado en 1944, fue una de las primeras computadoras digitales automáticas a gran escala, demostrando el potencial de las máquinas para realizar cálculos complejos que más tarde serían esenciales para la IA.",
          de: "Der Harvard Mark I, 1944 fertiggestellt, war einer der ersten großflächigen automatischen digitalen Computer und demonstrierte das Potential von Maschinen komplexe Berechnungen durchzuführen die später für KI essentiell wären.",
          nl: "De Harvard Mark I, voltooid in 1944, was een van de eerste grootschalige automatische digitale computers, die het potentieel van machines toonde om complexe berekeningen uit te voeren die later essentieel zouden zijn voor AI."
        }
      },
      {
        question: {
          en: "Who proposed the concept of a 'universal computing machine'?",
          es: "¿Quién propuso el concepto de una 'máquina de computación universal'?",
          de: "Wer schlug das Konzept einer 'universellen Rechenmaschine' vor?",
          nl: "Wie stelde het concept van een 'universele rekenmachine' voor?"
        },
        options: [
          { en: "Alan Turing", es: "Alan Turing", de: "Alan Turing", nl: "Alan Turing" },
          { en: "John von Neumann", es: "John von Neumann", de: "John von Neumann", nl: "John von Neumann" },
          { en: "Charles Babbage", es: "Charles Babbage", de: "Charles Babbage", nl: "Charles Babbage" },
          { en: "Ada Lovelace", es: "Ada Lovelace", de: "Ada Lovelace", nl: "Ada Lovelace" }
        ],
        correct: 0,
        explanation: {
          en: "Alan Turing proposed the concept of a universal computing machine (Turing machine) in 1936, which could simulate any other computing machine and became fundamental to computer science and AI theory.",
          es: "Alan Turing propuso el concepto de una máquina de computación universal (máquina de Turing) en 1936, que podía simular cualquier otra máquina de computación y se volvió fundamental para la ciencia de la computación y la teoría de IA.",
          de: "Alan Turing schlug das Konzept einer universellen Rechenmaschine (Turing-Maschine) 1936 vor, die jede andere Rechenmaschine simulieren konnte und grundlegend für Informatik und KI-Theorie wurde.",
          nl: "Alan Turing stelde het concept van een universele rekenmachine (Turing machine) voor in 1936, die elke andere rekenmachine kon simuleren en fundamenteel werd voor computerwetenschap en AI theorie."
        }
      },
      {
        question: {
          en: "What was significant about Ada Lovelace's notes on the Analytical Engine?",
          es: "¿Qué fue significativo sobre las notas de Ada Lovelace sobre la Máquina Analítica?",
          de: "Was war bedeutsam an Ada Lovelaces Notizen zur Analytischen Maschine?",
          nl: "Wat was belangrijk aan Ada Lovelace's notities over de Analytische Machine?"
        },
        options: [
          { en: "She described how machines might go beyond calculation to create music and art", es: "Describió cómo las máquinas podrían ir más allá del cálculo para crear música y arte", de: "Sie beschrieb wie Maschinen über Berechnungen hinausgehen könnten um Musik und Kunst zu schaffen", nl: "Ze beschreef hoe machines verder konden gaan dan berekeningen om muziek en kunst te creëren" },
          { en: "She invented the first computer virus", es: "Inventó el primer virus de computadora", de: "Sie erfand den ersten Computervirus", nl: "Ze vond het eerste computervirus uit" },
          { en: "She created the first neural network", es: "Creó la primera red neuronal", de: "Sie schuf das erste neuronale Netzwerk", nl: "Ze creëerde het eerste neurale netwerk" },
          { en: "She built the first robot", es: "Construyó el primer robot", de: "Sie baute den ersten Roboter", nl: "Ze bouwde de eerste robot" }
        ],
        correct: 0,
        explanation: {
          en: "Ada Lovelace's 1843 notes on Babbage's Analytical Engine included the first algorithm and her vision that machines could manipulate symbols to create music and art, not just numbers - an early AI concept.",
          es: "Las notas de Ada Lovelace de 1843 sobre la Máquina Analítica de Babbage incluyeron el primer algoritmo y su visión de que las máquinas podrían manipular símbolos para crear música y arte, no solo números - un concepto temprano de IA.",
          de: "Ada Lovelaces 1843er Notizen zu Babbage's Analytischer Maschine enthielten den ersten Algorithmus und ihre Vision dass Maschinen Symbole manipulieren könnten um Musik und Kunst zu schaffen, nicht nur Zahlen - ein frühes KI-Konzept.",
          nl: "Ada Lovelace's 1843 notities over Babbage's Analytische Machine bevatten het eerste algoritme en haar visie dat machines symbolen konden manipuleren om muziek en kunst te creëren, niet alleen getallen - een vroeg AI concept."
        }
      },
      {
        question: {
          en: "What was the 'Chinese Room' thought experiment, and who proposed it?",
          es: "¿Qué fue el experimento mental del 'Cuarto Chino' y quién lo propuso?",
          de: "Was war das 'Chinesische Zimmer' Gedankenexperiment und wer schlug es vor?",
          nl: "Wat was het 'Chinese Kamer' gedachtenexperiment en wie stelde het voor?"
        },
        options: [
          { en: "A critique of strong AI by John Searle, arguing syntax is not semantics", es: "Una crítica a la IA fuerte por John Searle, argumentando que sintaxis no es semántica", de: "Eine Kritik an starker KI von John Searle, argumentierend dass Syntax nicht Semantik ist", nl: "Een kritiek op sterke AI door John Searle, argumenterend dat syntaxis geen semantiek is" },
          { en: "A programming language created by Confucius", es: "Un lenguaje de programación creado por Confucio", de: "Eine Programmiersprache von Konfuzius", nl: "Een programmeertaal gecreëerd door Confucius" },
          { en: "The first computer built in China", es: "La primera computadora construida en China", de: "Der erste in China gebaute Computer", nl: "De eerste computer gebouwd in China" },
          { en: "An early chess-playing program", es: "Un programa temprano para jugar ajedrez", de: "Ein frühes Schachspielprogramm", nl: "Een vroeg schaakspelprogramma" }
        ],
        correct: 0,
        explanation: {
          en: "Though proposed later in 1980, the Chinese Room thought experiment by John Searle argued that a computer following rules to manipulate Chinese characters could appear to understand Chinese without actually understanding it, challenging strong AI claims.",
          es: "Aunque propuesto más tarde en 1980, el experimento mental del Cuarto Chino por John Searle argumentó que una computadora siguiendo reglas para manipular caracteres chinos podría parecer entender chino sin realmente entenderlo, desafiando las afirmaciones de IA fuerte.",
          de: "Obwohl später 1980 vorgeschlagen, argumentierte John Searles Gedankenexperiment des Chinesischen Zimmers dass ein Computer der Regeln folgt um chinesische Zeichen zu manipulieren Chinesisch verstehen könnte ohne es wirklich zu verstehen, was starke KI-Behauptungen herausforderte.",
          nl: "Hoewel later voorgesteld in 1980, argumenteerde John Searle's Chinese Kamer gedachtenexperiment dat een computer die regels volgt om Chinese karakters te manipuleren Chinees zou kunnen lijken te begrijpen zonder het werkelijk te begrijpen, wat sterke AI claims uitdaagde."
        }
      },
      {
        question: {
          en: "What was the significance of Isaac Asimov's 'Three Laws of Robotics'?",
          es: "¿Cuál fue la importancia de las 'Tres Leyes de la Robótica' de Isaac Asimov?",
          de: "Was war die Bedeutung von Isaac Asimovs 'Drei Gesetzen der Robotik'?",
          nl: "Wat was de betekenis van Isaac Asimov's 'Drie Wetten van de Robotica'?"
        },
        options: [
          { en: "They provided early framework for thinking about AI safety and ethics", es: "Proporcionaron marco temprano para pensar sobre seguridad y ética de IA", de: "Sie boten einen frühen Rahmen zum Nachdenken über KI-Sicherheit und Ethik", nl: "Ze boden een vroeg raamwerk voor het nadenken over AI veiligheid en ethiek" },
          { en: "They described how to build robots", es: "Describieron cómo construir robots", de: "Sie beschrieben wie man Roboter baut", nl: "Ze beschreven hoe robots te bouwen" },
          { en: "They were actual laws passed by government", es: "Fueron leyes reales aprobadas por el gobierno", de: "Sie waren echte von der Regierung verabschiedete Gesetze", nl: "Het waren echte wetten aangenomen door de regering" },
          { en: "They explained robot programming languages", es: "Explicaron lenguajes de programación de robots", de: "Sie erklärten Roboter-Programmiersprachen", nl: "Ze legden robot programmeertalen uit" }
        ],
        correct: 0,
        explanation: {
          en: "Asimov's Three Laws, introduced in his 1942 short story 'Runaround', were: 1) A robot may not injure a human or allow harm through inaction, 2) A robot must obey human orders unless they conflict with the first law, 3) A robot must protect its existence unless it conflicts with the first two laws. These influenced early AI ethics discussions.",
          es: "Las Tres Leyes de Asimov, introducidas en su cuento de 1942 'Runaround', fueron: 1) Un robot no puede dañar a un humano o permitir daño por inacción, 2) Un robot debe obedecer órdenes humanas a menos que entren en conflicto con la primera ley, 3) Un robot debe proteger su existencia a menos que entre en conflicto con las primeras dos leyes. Estas influyeron en las primeras discusiones de ética de IA.",
          de: "Asimovs Drei Gesetze, eingeführt in seiner 1942er Kurzgeschichte 'Runaround', waren: 1) Ein Roboter darf keinem Menschen schaden oder durch Untätigkeit Schaden zulassen, 2) Ein Roboter muss menschlichen Befehlen gehorchen außer sie stehen im Konflikt mit dem ersten Gesetz, 3) Ein Roboter muss seine Existenz schützen außer es steht im Konflikt mit den ersten zwei Gesetzen. Diese beeinflussten frühe KI-Ethik-Diskussionen.",
          nl: "Asimov's Drie Wetten, geïntroduceerd in zijn 1942 korte verhaal 'Runaround', waren: 1) Een robot mag geen mens verwonden of door inactiviteit schade toelaten, 2) Een robot moet menselijke bevelen opvolgen tenzij ze conflicteren met de eerste wet, 3) Een robot moet zijn bestaan beschermen tenzij het conflicteert met de eerste twee wetten. Deze beïnvloedden vroege AI ethiek discussies."
        }
      },
      {
        question: {
          en: "What was the contribution of Donald Hebb to early AI and neural network theory?",
          es: "¿Cuál fue la contribución de Donald Hebb a la teoría temprana de IA y redes neuronales?",
          de: "Was war Donald Hebbs Beitrag zur frühen KI und neuronalen Netzwerktheorie?",
          nl: "Wat was de bijdrage van Donald Hebb aan vroege AI en neurale netwerk theorie?"
        },
        options: [
          { en: "He proposed Hebbian learning: 'cells that fire together, wire together'", es: "Propuso aprendizaje hebbiano: 'células que disparan juntas, se conectan juntas'", de: "Er schlug Hebbian Learning vor: 'Zellen die zusammen feuern, verbinden sich zusammen'", nl: "Hij stelde Hebbiaans leren voor: 'cellen die samen vuren, bekabelen samen'" },
          { en: "He invented the first computer", es: "Inventó la primera computadora", de: "Er erfand den ersten Computer", nl: "Hij vond de eerste computer uit" },
          { en: "He created the first programming language", es: "Creó el primer lenguaje de programación", de: "Er schuf die erste Programmiersprache", nl: "Hij creëerde de eerste programmeertaal" },
          { en: "He built the first robot", es: "Construyó el primer robot", de: "Er baute den ersten Roboter", nl: "Hij bouwde de eerste robot" }
        ],
        correct: 0,
        explanation: {
          en: "Donald Hebb's 1949 book 'The Organization of Behavior' proposed that learning occurs when synaptic connections strengthen between neurons that activate together, becoming a fundamental principle in neural network learning.",
          es: "El libro de Donald Hebb de 1949 'The Organization of Behavior' propuso que el aprendizaje ocurre cuando las conexiones sinápticas se fortalecen entre neuronas que se activan juntas, convirtiéndose en un principio fundamental en el aprendizaje de redes neuronales.",
          de: "Donald Hebbs 1949er Buch 'The Organization of Behavior' schlug vor dass Lernen auftritt wenn synaptische Verbindungen zwischen Neuronen stärker werden die zusammen aktivieren, was zu einem fundamentalen Prinzip im neuronalen Netzwerklernen wurde.",
          nl: "Donald Hebb's 1949 boek 'The Organization of Behavior' stelde voor dat leren optreedt wanneer synaptische verbindingen versterken tussen neuronen die samen activeren, wat een fundamenteel principe werd in neurale netwerk leren."
        }
      },
      {
        question: {
          en: "What was the 'Dartmouth Proposal' that led to the 1956 conference?",
          es: "¿Qué fue la 'Propuesta de Dartmouth' que llevó a la conferencia de 1956?",
          de: "Was war der 'Dartmouth-Vorschlag' der zur 1956er Konferenz führte?",
          nl: "Wat was het 'Dartmouth Voorstel' dat leidde tot de 1956 conferentie?"
        },
        options: [
          { en: "A proposal to study machine intelligence for two months with ten researchers", es: "Una propuesta para estudiar inteligencia de máquina durante dos meses con diez investigadores", de: "Ein Vorschlag Maschinenintelligenz zwei Monate lang mit zehn Forschern zu studieren", nl: "Een voorstel om machine intelligentie twee maanden te bestuderen met tien onderzoekers" },
          { en: "A plan to build the first computer", es: "Un plan para construir la primera computadora", de: "Ein Plan den ersten Computer zu bauen", nl: "Een plan om de eerste computer te bouwen" },
          { en: "A proposal for a new university", es: "Una propuesta para una nueva universidad", de: "Ein Vorschlag für eine neue Universität", nl: "Een voorstel voor een nieuwe universiteit" },
          { en: "A plan to create robots", es: "Un plan para crear robots", de: "Ein Plan Roboter zu schaffen", nl: "Een plan om robots te creëren" }
        ],
        correct: 0,
        explanation: {
          en: "The Dartmouth Proposal, submitted in 1955, requested funding for a two-month summer study on artificial intelligence with ten researchers, stating the conjecture that 'every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it.'",
          es: "La Propuesta de Dartmouth, presentada en 1955, solicitó financiamiento para un estudio de verano de dos meses sobre inteligencia artificial con diez investigadores, declarando la conjetura de que 'cada aspecto del aprendizaje o cualquier otra característica de la inteligencia puede en principio ser tan precisamente descrito que una máquina puede ser hecha para simularlo.'",
          de: "Der Dartmouth-Vorschlag, 1955 eingereicht, beantragte Finanzierung für eine zweimonatige Sommerstudie über künstliche Intelligenz mit zehn Forschern und stellte die Vermutung auf dass 'jeder Aspekt des Lernens oder jedes andere Merkmal der Intelligenz im Prinzip so präzise beschrieben werden kann dass eine Maschine gemacht werden kann es zu simulieren.'",
          nl: "Het Dartmouth Voorstel, ingediend in 1955, vroeg financiering voor een twee maanden durende zomerstudie over kunstmatige intelligentie met tien onderzoekers, stellend de gissing dat 'elk aspect van leren of elke andere eigenschap van intelligentie in principe zo precies kan worden beschreven dat een machine kan worden gemaakt om het te simuleren.'"
        }
      },
      {
        question: {
          en: "What was the Logic Theorist program created by Allen Newell and Herbert Simon?",
          es: "¿Qué fue el programa Logic Theorist creado por Allen Newell y Herbert Simon?",
          de: "Was war das Logic Theorist Programm von Allen Newell und Herbert Simon?",
          nl: "Wat was het Logic Theorist programma gemaakt door Allen Newell en Herbert Simon?"
        },
        options: [
          { en: "The first program to prove mathematical theorems automatically", es: "El primer programa para demostrar teoremas matemáticos automáticamente", de: "Das erste Programm um mathematische Theoreme automatisch zu beweisen", nl: "Het eerste programma om wiskundige stellingen automatisch te bewijzen" },
          { en: "A chess-playing computer", es: "Una computadora que jugaba ajedrez", de: "Ein Schach spielender Computer", nl: "Een schaakspelende computer" },
          { en: "The first word processor", es: "El primer procesador de texto", de: "Der erste Textverarbeiter", nl: "De eerste tekstverwerker" },
          { en: "An early operating system", es: "Un sistema operativo temprano", de: "Ein frühes Betriebssystem", nl: "Een vroeg besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Logic Theorist, developed in 1955-1956, was the first program designed to prove mathematical theorems automatically. It successfully proved 38 of the first 52 theorems in Russell and Whitehead's Principia Mathematica, demonstrating that machines could perform logical reasoning.",
          es: "Logic Theorist, desarrollado en 1955-1956, fue el primer programa diseñado para demostrar teoremas matemáticos automáticamente. Probó exitosamente 38 de los primeros 52 teoremas en Principia Mathematica de Russell y Whitehead, demostrando que las máquinas podían realizar razonamiento lógico.",
          de: "Logic Theorist, entwickelt 1955-1956, war das erste Programm das darauf ausgelegt war mathematische Theoreme automatisch zu beweisen. Es bewies erfolgreich 38 der ersten 52 Theoreme in Russell und Whiteheads Principia Mathematica und demonstrierte dass Maschinen logisches Denken durchführen konnten.",
          nl: "Logic Theorist, ontwikkeld in 1955-1956, was het eerste programma ontworpen om wiskundige stellingen automatisch te bewijzen. Het bewees succesvol 38 van de eerste 52 stellingen in Russell en Whitehead's Principia Mathematica, wat toonde dat machines logisch redeneren konden uitvoeren."
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