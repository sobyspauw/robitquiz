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
      },
      {
        question: {
          en: "In which decade did the first 'AI Winter' occur?",
          es: "¿En qué década ocurrió el primer 'Invierno de IA'?",
          de: "In welchem Jahrzehnt trat der erste 'KI-Winter' auf?",
          nl: "In welk decennium vond de eerste 'AI Winter' plaats?"
        },
        options: [
          { en: "1950s", es: "1950", de: "1950er", nl: "Jaren 1950" },
          { en: "1960s", es: "1960", de: "1960er", nl: "Jaren 1960" },
          { en: "1970s", es: "1970", de: "1970er", nl: "Jaren 1970" },
          { en: "1980s", es: "1980", de: "1980er", nl: "Jaren 1980" }
        ],
        correct: 2,
        explanation: {
          en: "The first AI Winter occurred in the 1970s when AI research funding was dramatically reduced due to unmet expectations. This period lasted until the early 1980s when expert systems revived interest.",
          es: "El primer Invierno de IA ocurrió en los años 1970 cuando la financiación de investigación de IA se redujo dramáticamente debido a expectativas no cumplidas. Este período duró hasta principios de los 1980.",
          de: "Der erste KI-Winter trat in den 1970er Jahren auf, als die KI-Forschungsfinanzierung aufgrund nicht erfüllter Erwartungen dramatisch reduziert wurde. Diese Periode dauerte bis Anfang der 1980er.",
          nl: "De eerste AI Winter vond plaats in de jaren 1970 toen AI onderzoeksfinanciering dramatisch werd verminderd vanwege niet-ingeloste verwachtingen. Deze periode duurde tot begin jaren 1980."
        }
      },
      {
        question: {
          en: "What was the Perceptron created by Frank Rosenblatt?",
          es: "¿Qué fue el Perceptrón creado por Frank Rosenblatt?",
          de: "Was war das Perceptron von Frank Rosenblatt?",
          nl: "Wat was het Perceptron gemaakt door Frank Rosenblatt?"
        },
        options: [
          { en: "An early neural network designed for image recognition", es: "Una red neuronal temprana diseñada para reconocimiento de imágenes", de: "Ein frühes neuronales Netzwerk für Bilderkennung", nl: "Een vroeg neuraal netwerk ontworpen voor beeldherkenning" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A computer processor", es: "Un procesador de computadora", de: "Ein Computerprozessor", nl: "Een computerprocessor" },
          { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" }
        ],
        correct: 0,
        explanation: {
          en: "The Perceptron, invented in 1957, was an early type of neural network designed to recognize patterns and images. It laid the groundwork for modern neural networks despite its limitations.",
          es: "El Perceptrón, inventado en 1957, fue un tipo temprano de red neuronal diseñado para reconocer patrones e imágenes. Sentó las bases para las redes neuronales modernas a pesar de sus limitaciones.",
          de: "Das Perceptron, 1957 erfunden, war ein früher Typ neuronales Netzwerk zum Erkennen von Mustern und Bildern. Es legte trotz seiner Einschränkungen den Grundstein für moderne neuronale Netze.",
          nl: "Het Perceptron, uitgevonden in 1957, was een vroeg type neuraal netwerk ontworpen om patronen en beelden te herkennen. Het legde de basis voor moderne neurale netwerken ondanks zijn beperkingen."
        }
      },
      {
        question: {
          en: "What was DENDRAL's primary purpose?",
          es: "¿Cuál fue el propósito principal de DENDRAL?",
          de: "Was war DENDRALs Hauptzweck?",
          nl: "Wat was het primaire doel van DENDRAL?"
        },
        options: [
          { en: "Analyzing chemical molecular structures", es: "Analizar estructuras moleculares químicas", de: "Chemische Molekülstrukturen analysieren", nl: "Chemische moleculaire structuren analyseren" },
          { en: "Playing chess", es: "Jugar ajedrez", de: "Schach spielen", nl: "Schaken" },
          { en: "Translating languages", es: "Traducir idiomas", de: "Sprachen übersetzen", nl: "Talen vertalen" },
          { en: "Weather forecasting", es: "Pronóstico del tiempo", de: "Wettervorhersage", nl: "Weersvoorspelling" }
        ],
        correct: 0,
        explanation: {
          en: "DENDRAL, developed in the 1960s at Stanford, was the first expert system designed to analyze mass spectrometry data and determine chemical molecular structures. It demonstrated AI's practical applications in science.",
          es: "DENDRAL, desarrollado en los años 1960 en Stanford, fue el primer sistema experto diseñado para analizar datos de espectrometría de masas y determinar estructuras moleculares químicas.",
          de: "DENDRAL, in den 1960ern in Stanford entwickelt, war das erste Expertensystem zur Analyse von Massenspektrometriedaten und Bestimmung chemischer Molekülstrukturen.",
          nl: "DENDRAL, ontwikkeld in de jaren 1960 bij Stanford, was het eerste expertsysteem ontworpen om massaspectrometriegegevens te analyseren en chemische moleculaire structuren te bepalen."
        }
      },
      {
        question: {
          en: "Who developed the first chess program that could beat humans?",
          es: "¿Quién desarrolló el primer programa de ajedrez que podía vencer humanos?",
          de: "Wer entwickelte das erste Schachprogramm das Menschen schlagen konnte?",
          nl: "Wie ontwikkelde het eerste schaakprogramma dat mensen kon verslaan?"
        },
        options: [
          { en: "Various researchers in the 1970s", es: "Varios investigadores en los años 1970", de: "Verschiedene Forscher in den 1970ern", nl: "Verschillende onderzoekers in de jaren 1970" },
          { en: "Alan Turing", es: "Alan Turing", de: "Alan Turing", nl: "Alan Turing" },
          { en: "John von Neumann", es: "John von Neumann", de: "John von Neumann", nl: "John von Neumann" },
          { en: "Claude Shannon", es: "Claude Shannon", de: "Claude Shannon", nl: "Claude Shannon" }
        ],
        correct: 0,
        explanation: {
          en: "While Turing and Shannon theorized about chess programs in the 1950s, actual programs that could beat average humans emerged in the 1970s through the work of multiple research teams.",
          es: "Mientras Turing y Shannon teorizaron sobre programas de ajedrez en los 1950, programas que podían vencer humanos promedio surgieron en los 1970 del trabajo de múltiples equipos.",
          de: "Während Turing und Shannon in den 1950ern über Schachprogramme theoretisierten, entstanden Programme die durchschnittliche Menschen schlagen konnten in den 1970ern durch mehrere Forschungsteams.",
          nl: "Terwijl Turing en Shannon in de jaren 1950 theoretiseerden over schaakprogramma's, kwamen programma's die gemiddelde mensen konden verslaan in de jaren 1970 via het werk van meerdere onderzoeksteams."
        }
      },
      {
        question: {
          en: "What was Shakey the Robot known for?",
          es: "¿Por qué era conocido el robot Shakey?",
          de: "Wofür war Shakey der Roboter bekannt?",
          nl: "Waar was Shakey de Robot bekend om?"
        },
        options: [
          { en: "First mobile robot with reasoning ability", es: "Primer robot móvil con capacidad de razonamiento", de: "Erster mobiler Roboter mit Denkfähigkeit", nl: "Eerste mobiele robot met redeneervermogen" },
          { en: "First industrial assembly robot", es: "Primer robot de ensamblaje industrial", de: "Erster industrieller Montageroboter", nl: "Eerste industriële assemblagerobot" },
          { en: "First humanoid robot", es: "Primer robot humanoide", de: "Erster humanoider Roboter", nl: "Eerste humanoïde robot" },
          { en: "First robot on Mars", es: "Primer robot en Marte", de: "Erster Roboter auf Mars", nl: "Eerste robot op Mars" }
        ],
        correct: 0,
        explanation: {
          en: "Shakey, developed 1966-1972 at Stanford Research Institute, was the first mobile robot able to reason about its actions. It could perceive its environment, plan tasks, and navigate autonomously.",
          es: "Shakey, desarrollado 1966-1972 en Stanford Research Institute, fue el primer robot móvil capaz de razonar sobre sus acciones. Podía percibir su entorno, planificar tareas y navegar autónomamente.",
          de: "Shakey, 1966-1972 am Stanford Research Institute entwickelt, war der erste mobile Roboter der über seine Aktionen nachdenken konnte. Er konnte seine Umgebung wahrnehmen, Aufgaben planen und autonom navigieren.",
          nl: "Shakey, ontwikkeld 1966-1972 bij Stanford Research Institute, was de eerste mobiele robot die kon redeneren over zijn acties. Hij kon zijn omgeving waarnemen, taken plannen en autonoom navigeren."
        }
      },
      {
        question: {
          en: "What was significant about MYCIN in AI history?",
          es: "¿Qué fue significativo sobre MYCIN en la historia de IA?",
          de: "Was war bedeutsam an MYCIN in der KI-Geschichte?",
          nl: "Wat was belangrijk aan MYCIN in de AI geschiedenis?"
        },
        options: [
          { en: "It was an expert system for medical diagnosis", es: "Fue un sistema experto para diagnóstico médico", de: "Es war ein Expertensystem für medizinische Diagnose", nl: "Het was een expertsysteem voor medische diagnose" },
          { en: "It was the first computer virus", es: "Fue el primer virus de computadora", de: "Es war der erste Computervirus", nl: "Het was het eerste computervirus" },
          { en: "It was a programming language", es: "Fue un lenguaje de programación", de: "Es war eine Programmiersprache", nl: "Het was een programmeertaal" },
          { en: "It was an early internet protocol", es: "Fue un protocolo temprano de internet", de: "Es war ein frühes Internetprotokoll", nl: "Het was een vroeg internetprotocol" }
        ],
        correct: 0,
        explanation: {
          en: "MYCIN, developed at Stanford in the 1970s, was an expert system for diagnosing bacterial infections and recommending antibiotics. It performed as well as human experts, showing AI's potential in medicine.",
          es: "MYCIN, desarrollado en Stanford en los 1970, fue un sistema experto para diagnosticar infecciones bacterianas y recomendar antibióticos. Se desempeñó tan bien como expertos humanos.",
          de: "MYCIN, in den 1970ern in Stanford entwickelt, war ein Expertensystem zur Diagnose bakterieller Infektionen und Empfehlung von Antibiotika. Es war so gut wie menschliche Experten.",
          nl: "MYCIN, ontwikkeld bij Stanford in de jaren 1970, was een expertsysteem voor het diagnosticeren van bacteriële infecties en het aanbevelen van antibiotica. Het presteerde even goed als menselijke experts."
        }
      },
      {
        question: {
          en: "What did the Lighthill Report (1973) conclude about AI?",
          es: "¿Qué concluyó el Informe Lighthill (1973) sobre IA?",
          de: "Was schloss der Lighthill-Bericht (1973) über KI?",
          nl: "Wat concludeerde het Lighthill Report (1973) over AI?"
        },
        options: [
          { en: "AI had failed to meet its promises", es: "La IA no había cumplido sus promesas", de: "KI hatte ihre Versprechen nicht erfüllt", nl: "AI had zijn beloften niet ingelost" },
          { en: "AI would replace all jobs by 1980", es: "La IA reemplazaría todos los trabajos para 1980", de: "KI würde bis 1980 alle Jobs ersetzen", nl: "AI zou tegen 1980 alle banen vervangen" },
          { en: "AI was ready for commercial use", es: "La IA estaba lista para uso comercial", de: "KI war bereit für kommerziellen Einsatz", nl: "AI was klaar voor commercieel gebruik" },
          { en: "AI needed more funding immediately", es: "La IA necesitaba más financiamiento inmediatamente", de: "KI brauchte sofort mehr Finanzierung", nl: "AI had onmiddellijk meer financiering nodig" }
        ],
        correct: 0,
        explanation: {
          en: "The Lighthill Report criticized AI research in the UK for overpromising and underdelivering. It led to reduced funding and contributed to the first AI Winter, though later developments proved many of its criticisms premature.",
          es: "El Informe Lighthill criticó la investigación de IA en el Reino Unido por prometer demasiado y entregar poco. Llevó a financiamiento reducido y contribuyó al primer Invierno de IA.",
          de: "Der Lighthill-Bericht kritisierte KI-Forschung in Großbritannien für Überversprechen und Unterlieferung. Er führte zu reduzierter Finanzierung und trug zum ersten KI-Winter bei.",
          nl: "Het Lighthill Report bekritiseerde AI onderzoek in het VK voor te veel beloven en te weinig leveren. Het leidde tot verminderde financiering en droeg bij aan de eerste AI Winter."
        }
      },
      {
        question: {
          en: "What language was primarily used for AI research in the early days?",
          es: "¿Qué lenguaje se usó principalmente para investigación de IA en los primeros días?",
          de: "Welche Sprache wurde hauptsächlich für KI-Forschung in den frühen Tagen verwendet?",
          nl: "Welke taal werd vooral gebruikt voor AI onderzoek in de begindagen?"
        },
        options: [
          { en: "LISP", es: "LISP", de: "LISP", nl: "LISP" },
          { en: "FORTRAN", es: "FORTRAN", de: "FORTRAN", nl: "FORTRAN" },
          { en: "COBOL", es: "COBOL", de: "COBOL", nl: "COBOL" },
          { en: "BASIC", es: "BASIC", de: "BASIC", nl: "BASIC" }
        ],
        correct: 0,
        explanation: {
          en: "LISP (List Processing), created by John McCarthy in 1958, became the dominant language for AI research. Its support for symbolic reasoning and recursive functions made it ideal for AI applications.",
          es: "LISP (List Processing), creado por John McCarthy en 1958, se convirtió en el lenguaje dominante para investigación de IA. Su soporte para razonamiento simbólico y funciones recursivas lo hizo ideal.",
          de: "LISP (List Processing), 1958 von John McCarthy erstellt, wurde die dominierende Sprache für KI-Forschung. Seine Unterstützung für symbolisches Denken und rekursive Funktionen machte es ideal.",
          nl: "LISP (List Processing), gemaakt door John McCarthy in 1958, werd de dominante taal voor AI onderzoek. Zijn ondersteuning voor symbolisch redeneren en recursieve functies maakte het ideaal."
        }
      },
      {
        question: {
          en: "What was STRIPS in AI history?",
          es: "¿Qué fue STRIPS en la historia de IA?",
          de: "Was war STRIPS in der KI-Geschichte?",
          nl: "Wat was STRIPS in de AI geschiedenis?"
        },
        options: [
          { en: "An automated planning system", es: "Un sistema de planificación automatizada", de: "Ein automatisiertes Planungssystem", nl: "Een geautomatiseerd planningssysteem" },
          { en: "A computer graphics program", es: "Un programa de gráficos de computadora", de: "Ein Computergrafik-Programm", nl: "Een computergrafica programma" },
          { en: "A network protocol", es: "Un protocolo de red", de: "Ein Netzwerkprotokoll", nl: "Een netwerkprotocol" },
          { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "STRIPS (Stanford Research Institute Problem Solver) was an automated planning system developed in 1971. It introduced the concept of planning with preconditions and effects, influencing modern AI planning systems.",
          es: "STRIPS fue un sistema de planificación automatizada desarrollado en 1971. Introdujo el concepto de planificación con precondiciones y efectos, influyendo en sistemas modernos de planificación de IA.",
          de: "STRIPS war ein automatisiertes Planungssystem entwickelt 1971. Es führte das Konzept der Planung mit Vorbedingungen und Effekten ein und beeinflusste moderne KI-Planungssysteme.",
          nl: "STRIPS was een geautomatiseerd planningssysteem ontwikkeld in 1971. Het introduceerde het concept van planning met voorwaarden en effecten, wat moderne AI planningssystemen beïnvloedde."
        }
      },
      {
        question: {
          en: "Who wrote the book 'Perceptrons' that highlighted neural network limitations?",
          es: "¿Quién escribió el libro 'Perceptrons' que destacó las limitaciones de redes neuronales?",
          de: "Wer schrieb das Buch 'Perceptrons' das neuronale Netzwerk-Einschränkungen hervorhob?",
          nl: "Wie schreef het boek 'Perceptrons' dat neurale netwerk beperkingen benadrukte?"
        },
        options: [
          { en: "Marvin Minsky and Seymour Papert", es: "Marvin Minsky y Seymour Papert", de: "Marvin Minsky und Seymour Papert", nl: "Marvin Minsky en Seymour Papert" },
          { en: "Alan Turing and John von Neumann", es: "Alan Turing y John von Neumann", de: "Alan Turing und John von Neumann", nl: "Alan Turing en John von Neumann" },
          { en: "Frank Rosenblatt and Warren McCulloch", es: "Frank Rosenblatt y Warren McCulloch", de: "Frank Rosenblatt und Warren McCulloch", nl: "Frank Rosenblatt en Warren McCulloch" },
          { en: "Herbert Simon and Allen Newell", es: "Herbert Simon y Allen Newell", de: "Herbert Simon und Allen Newell", nl: "Herbert Simon en Allen Newell" }
        ],
        correct: 0,
        explanation: {
          en: "Minsky and Papert's 1969 book 'Perceptrons' mathematically proved that single-layer perceptrons couldn't solve certain problems like XOR. This contributed to reduced neural network funding until the 1980s.",
          es: "El libro 'Perceptrons' de Minsky y Papert de 1969 probó matemáticamente que los perceptrones de una capa no podían resolver ciertos problemas como XOR. Esto contribuyó a financiamiento reducido.",
          de: "Minsky und Paperts 1969er Buch 'Perceptrons' bewies mathematisch dass einschichtige Perceptrons bestimmte Probleme wie XOR nicht lösen konnten. Dies trug zu reduzierter Finanzierung bei.",
          nl: "Minsky en Papert's 1969 boek 'Perceptrons' bewees wiskundig dat enkellaagse perceptrons bepaalde problemen zoals XOR niet konden oplossen. Dit droeg bij aan verminderde financiering."
        }
      },
      {
        question: {
          en: "What was Prolog designed for?",
          es: "¿Para qué fue diseñado Prolog?",
          de: "Wofür wurde Prolog entworfen?",
          nl: "Waarvoor was Prolog ontworpen?"
        },
        options: [
          { en: "Logic programming and AI applications", es: "Programación lógica y aplicaciones de IA", de: "Logikprogrammierung und KI-Anwendungen", nl: "Logisch programmeren en AI toepassingen" },
          { en: "System administration", es: "Administración de sistemas", de: "Systemverwaltung", nl: "Systeembeheer" },
          { en: "Web development", es: "Desarrollo web", de: "Webentwicklung", nl: "Webontwikkeling" },
          { en: "Game development", es: "Desarrollo de juegos", de: "Spieleentwicklung", nl: "Game ontwikkeling" }
        ],
        correct: 0,
        explanation: {
          en: "Prolog, created in 1972, was designed for logic programming and became popular in AI for tasks involving symbolic reasoning, natural language processing, and expert systems.",
          es: "Prolog, creado en 1972, fue diseñado para programación lógica y se volvió popular en IA para tareas que involucran razonamiento simbólico, procesamiento de lenguaje natural y sistemas expertos.",
          de: "Prolog, 1972 erstellt, wurde für Logikprogrammierung entworfen und wurde populär in KI für Aufgaben mit symbolischem Denken, natürlicher Sprachverarbeitung und Expertensystemen.",
          nl: "Prolog, gemaakt in 1972, was ontworpen voor logisch programmeren en werd populair in AI voor taken met symbolisch redeneren, natuurlijke taalverwerking en expertsystemen."
        }
      },
      {
        question: {
          en: "What was the 'frame problem' in AI research?",
          es: "¿Qué fue el 'problema del marco' en investigación de IA?",
          de: "Was war das 'Frame-Problem' in der KI-Forschung?",
          nl: "Wat was het 'frame probleem' in AI onderzoek?"
        },
        options: [
          { en: "The difficulty of representing what changes and what stays the same", es: "La dificultad de representar qué cambia y qué permanece igual", de: "Die Schwierigkeit darzustellen was sich ändert und was gleich bleibt", nl: "De moeilijkheid om te representeren wat verandert en wat hetzelfde blijft" },
          { en: "A hardware limitation", es: "Una limitación de hardware", de: "Eine Hardware-Einschränkung", nl: "Een hardware beperking" },
          { en: "A programming syntax error", es: "Un error de sintaxis de programación", de: "Ein Programmiersyntaxfehler", nl: "Een programmeer syntaxfout" },
          { en: "A display rendering issue", es: "Un problema de renderizado de pantalla", de: "Ein Anzeigedarstellungsproblem", nl: "Een schermweergave probleem" }
        ],
        correct: 0,
        explanation: {
          en: "The frame problem, identified in 1969, concerns how AI systems should represent which aspects of a situation remain unchanged when an action occurs. It remains a fundamental challenge in AI planning and reasoning.",
          es: "El problema del marco, identificado en 1969, concierne cómo los sistemas de IA deben representar qué aspectos de una situación permanecen sin cambios cuando ocurre una acción.",
          de: "Das Frame-Problem, 1969 identifiziert, betrifft wie KI-Systeme darstellen sollten welche Aspekte einer Situation unverändert bleiben wenn eine Aktion auftritt.",
          nl: "Het frame probleem, geïdentificeerd in 1969, betreft hoe AI systemen moeten representeren welke aspecten van een situatie onveranderd blijven wanneer een actie optreedt."
        }
      },
      {
        question: {
          en: "When was the backpropagation algorithm popularized for neural networks?",
          es: "¿Cuándo se popularizó el algoritmo de retropropagación para redes neuronales?",
          de: "Wann wurde der Backpropagation-Algorithmus für neuronale Netze populär?",
          nl: "Wanneer werd het backpropagation algoritme gepopulariseerd voor neurale netwerken?"
        },
        options: [
          { en: "1980s", es: "1980", de: "1980er", nl: "Jaren 1980" },
          { en: "1950s", es: "1950", de: "1950er", nl: "Jaren 1950" },
          { en: "1960s", es: "1960", de: "1960er", nl: "Jaren 1960" },
          { en: "1990s", es: "1990", de: "1990er", nl: "Jaren 1990" }
        ],
        correct: 0,
        explanation: {
          en: "While earlier versions existed, backpropagation was popularized in 1986 by Rumelhart, Hinton, and Williams. This algorithm enabled training multi-layer neural networks and helped revive neural network research.",
          es: "Aunque existían versiones anteriores, la retropropagación fue popularizada en 1986 por Rumelhart, Hinton y Williams. Este algoritmo permitió entrenar redes neuronales multicapa.",
          de: "Obwohl frühere Versionen existierten, wurde Backpropagation 1986 von Rumelhart, Hinton und Williams populär. Dieser Algorithmus ermöglichte das Training mehrschichtiger neuronaler Netze.",
          nl: "Hoewel eerdere versies bestonden, werd backpropagation in 1986 gepopulariseerd door Rumelhart, Hinton en Williams. Dit algoritme maakte training van meerlaagse neurale netwerken mogelijk."
        }
      },
      {
        question: {
          en: "What was the Stanford Cart project?",
          es: "¿Qué fue el proyecto Stanford Cart?",
          de: "Was war das Stanford Cart Projekt?",
          nl: "Wat was het Stanford Cart project?"
        },
        options: [
          { en: "An early autonomous vehicle experiment", es: "Un experimento temprano de vehículo autónomo", de: "Ein frühes autonomes Fahrzeugexperiment", nl: "Een vroeg autonoom voertuig experiment" },
          { en: "A shopping cart tracking system", es: "Un sistema de seguimiento de carritos de compras", de: "Ein Einkaufswagenverfolgunssystem", nl: "Een winkelwagen volgsysteem" },
          { en: "An online marketplace", es: "Un mercado en línea", de: "Ein Online-Marktplatz", nl: "Een online marktplaats" },
          { en: "A library catalog system", es: "Un sistema de catálogo de biblioteca", de: "Ein Bibliothekskatalog-System", nl: "Een bibliotheek catalogussysteem" }
        ],
        correct: 0,
        explanation: {
          en: "The Stanford Cart, developed in the 1960s-1970s, was an early experiment in autonomous navigation using computer vision. It could navigate obstacle courses, pioneering self-driving vehicle technology.",
          es: "El Stanford Cart, desarrollado en los 1960-1970, fue un experimento temprano en navegación autónoma usando visión por computadora. Podía navegar cursos de obstáculos.",
          de: "Der Stanford Cart, in den 1960-1970ern entwickelt, war ein frühes Experiment in autonomer Navigation mit Computer Vision. Er konnte Hindernisparcours navigieren.",
          nl: "De Stanford Cart, ontwikkeld in de jaren 1960-1970, was een vroeg experiment in autonome navigatie met computer vision. Het kon hindernisbanen navigeren."
        }
      },
      {
        question: {
          en: "What is symbolic AI primarily based on?",
          es: "¿En qué se basa principalmente la IA simbólica?",
          de: "Worauf basiert symbolische KI hauptsächlich?",
          nl: "Waar is symbolische AI vooral op gebaseerd?"
        },
        options: [
          { en: "Logic and symbol manipulation", es: "Lógica y manipulación de símbolos", de: "Logik und Symbolmanipulation", nl: "Logica en symboolmanipulatie" },
          { en: "Statistical learning", es: "Aprendizaje estadístico", de: "Statistisches Lernen", nl: "Statistisch leren" },
          { en: "Genetic algorithms", es: "Algoritmos genéticos", de: "Genetische Algorithmen", nl: "Genetische algoritmen" },
          { en: "Image processing", es: "Procesamiento de imágenes", de: "Bildverarbeitung", nl: "Beeldverwerking" }
        ],
        correct: 0,
        explanation: {
          en: "Symbolic AI, dominant from the 1950s-1980s, uses logic and symbol manipulation to represent knowledge and solve problems. It contrasts with modern connectionist approaches like neural networks.",
          es: "La IA simbólica, dominante de los 1950-1980, usa lógica y manipulación de símbolos para representar conocimiento y resolver problemas. Contrasta con enfoques conexionistas modernos.",
          de: "Symbolische KI, dominant von 1950-1980, verwendet Logik und Symbolmanipulation um Wissen darzustellen und Probleme zu lösen. Sie kontrastiert mit modernen konnektionistischen Ansätzen.",
          nl: "Symbolische AI, dominant van de jaren 1950-1980, gebruikt logica en symboolmanipulatie om kennis te representeren en problemen op te lossen. Het contrasteert met moderne connectionistische benaderingen."
        }
      },
      {
        question: {
          en: "What was the main goal of early AI researchers in the 1950s-60s?",
          es: "¿Cuál fue el objetivo principal de investigadores tempranos de IA en los 1950-60?",
          de: "Was war das Hauptziel früher KI-Forscher in den 1950-60ern?",
          nl: "Wat was het hoofddoel van vroege AI onderzoekers in de jaren 1950-60?"
        },
        options: [
          { en: "Creating machines that could think like humans", es: "Crear máquinas que pudieran pensar como humanos", de: "Maschinen schaffen die wie Menschen denken können", nl: "Machines creëren die konden denken zoals mensen" },
          { en: "Building the internet", es: "Construir internet", de: "Das Internet bauen", nl: "Het internet bouwen" },
          { en: "Developing video games", es: "Desarrollar videojuegos", de: "Videospiele entwickeln", nl: "Videogames ontwikkelen" },
          { en: "Creating social media platforms", es: "Crear plataformas de redes sociales", de: "Social-Media-Plattformen erstellen", nl: "Social media platforms creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Early AI researchers believed they could create general artificial intelligence - machines capable of human-level thinking - within a few decades. While this proved overly optimistic, it drove fundamental research.",
          es: "Los investigadores tempranos de IA creían que podían crear inteligencia artificial general - máquinas capaces de pensamiento a nivel humano - en pocas décadas.",
          de: "Frühe KI-Forscher glaubten sie könnten allgemeine künstliche Intelligenz schaffen - Maschinen zu menschlichem Denken fähig - innerhalb weniger Jahrzehnte.",
          nl: "Vroege AI onderzoekers geloofden dat ze algemene kunstmatige intelligentie konden creëren - machines capabel tot menselijk denkniveau - binnen enkele decennia."
        }
      },
      {
        question: {
          en: "What computing limitation most restricted early AI research?",
          es: "¿Qué limitación de computación restringió más la investigación temprana de IA?",
          de: "Welche Rechenbeschränkung begrenzte frühe KI-Forschung am meisten?",
          nl: "Welke computerbeperking beperkte vroeg AI onderzoek het meest?"
        },
        options: [
          { en: "Limited processing power and memory", es: "Poder de procesamiento y memoria limitados", de: "Begrenzte Rechenleistung und Speicher", nl: "Beperkte verwerkingskracht en geheugen" },
          { en: "Lack of internet connectivity", es: "Falta de conectividad a internet", de: "Fehlende Internetverbindung", nl: "Gebrek aan internetverbinding" },
          { en: "No programming languages existed", es: "No existían lenguajes de programación", de: "Es gab keine Programmiersprachen", nl: "Er bestonden geen programmeertalen" },
          { en: "Computer screens were too small", es: "Las pantallas de computadora eran demasiado pequeñas", de: "Computerbildschirme waren zu klein", nl: "Computerschermen waren te klein" }
        ],
        correct: 0,
        explanation: {
          en: "Early computers had extremely limited processing power and memory compared to today. Problems that seemed simple conceptually often required computational resources that wouldn't be available for decades.",
          es: "Las computadoras tempranas tenían poder de procesamiento y memoria extremadamente limitados. Problemas que parecían simples conceptualmente a menudo requerían recursos que no estarían disponibles por décadas.",
          de: "Frühe Computer hatten extrem begrenzte Rechenleistung und Speicher. Probleme die konzeptuell einfach schienen erforderten oft Ressourcen die für Jahrzehnte nicht verfügbar sein würden.",
          nl: "Vroege computers hadden extreem beperkte verwerkingskracht en geheugen. Problemen die conceptueel simpel leken vereisten vaak computationele middelen die decennia niet beschikbaar zouden zijn."
        }
      },
      {
        question: {
          en: "What was the importance of the 1956 Dartmouth workshop's duration?",
          es: "¿Cuál fue la importancia de la duración del taller de Dartmouth de 1956?",
          de: "Was war die Bedeutung der Dauer des Dartmouth-Workshops 1956?",
          nl: "Wat was het belang van de duur van de Dartmouth workshop van 1956?"
        },
        options: [
          { en: "It lasted 6-8 weeks for intensive collaboration", es: "Duró 6-8 semanas para colaboración intensiva", de: "Es dauerte 6-8 Wochen für intensive Zusammenarbeit", nl: "Het duurde 6-8 weken voor intensieve samenwerking" },
          { en: "It was only one day", es: "Fue solo un día", de: "Es war nur ein Tag", nl: "Het was slechts één dag" },
          { en: "It lasted an entire year", es: "Duró un año entero", de: "Es dauerte ein ganzes Jahr", nl: "Het duurde een heel jaar" },
          { en: "It was a weekend event", es: "Fue un evento de fin de semana", de: "Es war ein Wochenend-Event", nl: "Het was een weekend evenement" }
        ],
        correct: 0,
        explanation: {
          en: "The Dartmouth Summer Research Project on Artificial Intelligence lasted 6-8 weeks in summer 1956. This extended duration allowed researchers to collaborate intensively and develop foundational AI concepts.",
          es: "El Proyecto de Investigación de Verano de Dartmouth sobre Inteligencia Artificial duró 6-8 semanas en verano 1956. Esta duración extendida permitió colaboración intensiva.",
          de: "Das Dartmouth Summer Research Project on Artificial Intelligence dauerte 6-8 Wochen im Sommer 1956. Diese verlängerte Dauer ermöglichte intensive Zusammenarbeit.",
          nl: "Het Dartmouth Summer Research Project on Artificial Intelligence duurde 6-8 weken in de zomer van 1956. Deze lange duur stelde onderzoekers in staat intensief samen te werken."
        }
      },
      {
        question: {
          en: "What role did ARPA play in early AI development?",
          es: "¿Qué papel jugó ARPA en el desarrollo temprano de IA?",
          de: "Welche Rolle spielte ARPA in der frühen KI-Entwicklung?",
          nl: "Welke rol speelde ARPA in de vroege AI ontwikkeling?"
        },
        options: [
          { en: "Major funding source for AI research", es: "Fuente principal de financiamiento para investigación de IA", de: "Hauptfinanzierungsquelle für KI-Forschung", nl: "Belangrijkste financieringsbron voor AI onderzoek" },
          { en: "Banned AI research", es: "Prohibió investigación de IA", de: "Verbot KI-Forschung", nl: "Verbood AI onderzoek" },
          { en: "Created the first AI", es: "Creó la primera IA", de: "Schuf die erste KI", nl: "Creëerde de eerste AI" },
          { en: "Had no involvement in AI", es: "No tuvo participación en IA", de: "Hatte keine Beteiligung an KI", nl: "Had geen betrokkenheid bij AI" }
        ],
        correct: 0,
        explanation: {
          en: "ARPA (Advanced Research Projects Agency, now DARPA) was a major funding source for AI research from the 1960s onward, supporting projects at MIT, Stanford, Carnegie Mellon, and other institutions.",
          es: "ARPA fue una fuente principal de financiamiento para investigación de IA desde los 1960, apoyando proyectos en MIT, Stanford, Carnegie Mellon y otras instituciones.",
          de: "ARPA war eine Hauptfinanzierungsquelle für KI-Forschung ab den 1960ern und unterstützte Projekte am MIT, Stanford, Carnegie Mellon und anderen Institutionen.",
          nl: "ARPA was een belangrijke financieringsbron voor AI onderzoek vanaf de jaren 1960, ondersteunend projecten bij MIT, Stanford, Carnegie Mellon en andere instituten."
        }
      },
      {
        question: {
          en: "What was the connection between cybernetics and early AI?",
          es: "¿Cuál fue la conexión entre cibernética e IA temprana?",
          de: "Was war die Verbindung zwischen Kybernetik und früher KI?",
          nl: "Wat was de connectie tussen cybernetica en vroege AI?"
        },
        options: [
          { en: "Both studied feedback and control in systems", es: "Ambos estudiaron retroalimentación y control en sistemas", de: "Beide studierten Feedback und Kontrolle in Systemen", nl: "Beide bestudeerden feedback en controle in systemen" },
          { en: "They were competing fields with no overlap", es: "Fueron campos competidores sin superposición", de: "Sie waren konkurrierende Felder ohne Überschneidung", nl: "Het waren concurrerende velden zonder overlap" },
          { en: "Cybernetics replaced AI in the 1960s", es: "La cibernética reemplazó a la IA en los 1960", de: "Kybernetik ersetzte KI in den 1960ern", nl: "Cybernetica verving AI in de jaren 1960" },
          { en: "AI was created to disprove cybernetics", es: "La IA fue creada para refutar la cibernética", de: "KI wurde geschaffen um Kybernetik zu widerlegen", nl: "AI werd gecreëerd om cybernetica te weerleggen" }
        ],
        correct: 0,
        explanation: {
          en: "Cybernetics and early AI both emerged in the 1940s-50s and shared interests in feedback, control, and information processing in biological and artificial systems, though they eventually developed as distinct fields.",
          es: "La cibernética y la IA temprana surgieron en los 1940-50 y compartieron intereses en retroalimentación, control y procesamiento de información en sistemas biológicos y artificiales.",
          de: "Kybernetik und frühe KI entstanden beide in den 1940-50ern und teilten Interessen an Feedback, Kontrolle und Informationsverarbeitung in biologischen und künstlichen Systemen.",
          nl: "Cybernetica en vroege AI ontstonden beide in de jaren 1940-50 en deelden interesses in feedback, controle en informatieverwerking in biologische en kunstmatige systemen."
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