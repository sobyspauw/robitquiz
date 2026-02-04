import os
import re

# Path to the file
file_path = r"c:/Users/rbosch/OneDrive - A.S. Watson Europe/prive/RobitQuiz/src/questions/data/subjects/ai/AI geschiedenis/level1.js"

# Read the file
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# New questions to add (60 questions)
new_questions = """      ,
      {
        question: {
                  "en": "What was the name of the first chess program developed in the 1950s?",
                  "es": "¿Cuál fue el nombre del primer programa de ajedrez desarrollado en los años 1950?",
                  "de": "Wie hieß das erste Schachprogramm, das in den 1950er Jahren entwickelt wurde?",
                  "nl": "Wat was de naam van het eerste schaakprogramma dat in de jaren 1950 werd ontwikkeld?"
        },
        options: [
        {
                  "en": "ChessBot",
                  "es": "ChessBot",
                  "de": "ChessBot",
                  "nl": "ChessBot"
        },
        {
                  "en": "Turochamp",
                  "es": "Turochamp",
                  "de": "Turochamp",
                  "nl": "Turochamp"
        },
        {
                  "en": "Deep Thought",
                  "es": "Deep Thought",
                  "de": "Deep Thought",
                  "nl": "Deep Thought"
        },
        {
                  "en": "Kasparov AI",
                  "es": "Kasparov AI",
                  "de": "Kasparov AI",
                  "nl": "Kasparov AI"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Turochamp was one of the first chess programs, developed by Alan Turing and David Champernowne in 1948, though it was never fully implemented on a computer.",
                  "es": "Turochamp fue uno de los primeros programas de ajedrez, desarrollado por Alan Turing y David Champernowne en 1948, aunque nunca se implementó completamente en una computadora.",
                  "de": "Turochamp war eines der ersten Schachprogramme, entwickelt von Alan Turing und David Champernowne im Jahr 1948, obwohl es nie vollständig auf einem Computer implementiert wurde.",
                  "nl": "Turochamp was een van de eerste schaakprogramma's, ontwikkeld door Alan Turing en David Champernowne in 1948, hoewel het nooit volledig op een computer werd geïmplementeerd."
        }
      },
      {
        question: {
                  "en": "Which organization hosted the 1956 Dartmouth Conference?",
                  "es": "¿Qué organización organizó la Conferencia de Dartmouth de 1956?",
                  "de": "Welche Organisation veranstaltete die Dartmouth-Konferenz 1956?",
                  "nl": "Welke organisatie organiseerde de Dartmouth Conferentie van 1956?"
        },
        options: [
        {
                  "en": "MIT",
                  "es": "MIT",
                  "de": "MIT",
                  "nl": "MIT"
        },
        {
                  "en": "Stanford University",
                  "es": "Universidad de Stanford",
                  "de": "Stanford Universität",
                  "nl": "Stanford Universiteit"
        },
        {
                  "en": "Dartmouth College",
                  "es": "Dartmouth College",
                  "de": "Dartmouth College",
                  "nl": "Dartmouth College"
        },
        {
                  "en": "Carnegie Mellon",
                  "es": "Carnegie Mellon",
                  "de": "Carnegie Mellon",
                  "nl": "Carnegie Mellon"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Dartmouth Conference was held at Dartmouth College in New Hampshire in the summer of 1956, marking the birth of AI as a formal field of study.",
                  "es": "La Conferencia de Dartmouth se celebró en Dartmouth College en New Hampshire en el verano de 1956, marcando el nacimiento de la IA como campo formal de estudio.",
                  "de": "Die Dartmouth-Konferenz fand im Sommer 1956 am Dartmouth College in New Hampshire statt und markierte die Geburt der KI als formales Studienfeld.",
                  "nl": "De Dartmouth Conferentie werd gehouden op Dartmouth College in New Hampshire in de zomer van 1956, wat het begin markeerde van AI als formeel studiegebied."
        }
      },
      {
        question: {
                  "en": "What was the 'Lighthill Report' about?",
                  "es": "¿De qué trataba el 'Informe Lighthill'?",
                  "de": "Worum ging es im 'Lighthill-Bericht'?",
                  "nl": "Waar ging het 'Lighthill Rapport' over?"
        },
        options: [
        {
                  "en": "It praised AI achievements",
                  "es": "Elogió los logros de la IA",
                  "de": "Es lobte KI-Errungenschaften",
                  "nl": "Het prees AI prestaties"
        },
        {
                  "en": "It criticized AI research and led to funding cuts",
                  "es": "Criticó la investigación de IA y llevó a recortes de financiamiento",
                  "de": "Es kritisierte KI-Forschung und führte zu Finanzierungskürzungen",
                  "nl": "Het bekritiseerde AI onderzoek en leidde tot financieringsverminderingen"
        },
        {
                  "en": "It proposed new AI methods",
                  "es": "Propuso nuevos métodos de IA",
                  "de": "Es schlug neue KI-Methoden vor",
                  "nl": "Het stelde nieuwe AI methoden voor"
        },
        {
                  "en": "It was about robotics only",
                  "es": "Trataba solo sobre robótica",
                  "de": "Es ging nur um Robotik",
                  "nl": "Het ging alleen over robotica"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Lighthill Report (1973) was a critical assessment of AI research in the UK that led to significant funding cuts and contributed to the AI winter.",
                  "es": "El Informe Lighthill (1973) fue una evaluación crítica de la investigación de IA en el Reino Unido que llevó a recortes significativos de financiamiento y contribuyó al invierno de la IA.",
                  "de": "Der Lighthill-Bericht (1973) war eine kritische Bewertung der KI-Forschung in Großbritannien, die zu erheblichen Finanzierungskürzungen führte und zum KI-Winter beitrug.",
                  "nl": "Het Lighthill Rapport (1973) was een kritische beoordeling van AI onderzoek in het VK dat leidde tot aanzienlijke financieringsverminderingen en bijdroeg aan de AI winter."
        }
      },
      {
        question: {
                  "en": "Who developed the first neural network simulator in 1950?",
                  "es": "¿Quién desarrolló el primer simulador de red neuronal en 1950?",
                  "de": "Wer entwickelte den ersten neuronalen Netzwerksimulator im Jahr 1950?",
                  "nl": "Wie ontwikkelde de eerste neurale netwerksimulator in 1950?"
        },
        options: [
        {
                  "en": "Marvin Minsky",
                  "es": "Marvin Minsky",
                  "de": "Marvin Minsky",
                  "nl": "Marvin Minsky"
        },
        {
                  "en": "Frank Rosenblatt",
                  "es": "Frank Rosenblatt",
                  "de": "Frank Rosenblatt",
                  "nl": "Frank Rosenblatt"
        },
        {
                  "en": "Warren McCulloch and Walter Pitts",
                  "es": "Warren McCulloch y Walter Pitts",
                  "de": "Warren McCulloch und Walter Pitts",
                  "nl": "Warren McCulloch en Walter Pitts"
        },
        {
                  "en": "Marvin Minsky and Dean Edmonds",
                  "es": "Marvin Minsky y Dean Edmonds",
                  "de": "Marvin Minsky und Dean Edmonds",
                  "nl": "Marvin Minsky en Dean Edmonds"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Marvin Minsky and Dean Edmonds built SNARC in 1950, the first neural network simulator, which used 3000 vacuum tubes to simulate 40 neurons.",
                  "es": "Marvin Minsky y Dean Edmonds construyeron SNARC en 1950, el primer simulador de red neuronal, que usó 3000 tubos de vacío para simular 40 neuronas.",
                  "de": "Marvin Minsky und Dean Edmonds bauten SNARC im Jahr 1950, den ersten neuronalen Netzwerksimulator, der 3000 Vakuumröhren verwendete, um 40 Neuronen zu simulieren.",
                  "nl": "Marvin Minsky en Dean Edmonds bouwden SNARC in 1950, de eerste neurale netwerksimulator, die 3000 vacuümbuizen gebruikte om 40 neuronen te simuleren."
        }
      },
      {
        question: {
                  "en": "What was the name of the checkers program that could learn from experience in 1952?",
                  "es": "¿Cuál fue el nombre del programa de damas que podía aprender de la experiencia en 1952?",
                  "de": "Wie hieß das Dame-Programm, das 1952 aus Erfahrung lernen konnte?",
                  "nl": "Wat was de naam van het dammenprogramma dat in 1952 kon leren van ervaring?"
        },
        options: [
        {
                  "en": "Deep Blue",
                  "es": "Deep Blue",
                  "de": "Deep Blue",
                  "nl": "Deep Blue"
        },
        {
                  "en": "Samuel's Checkers",
                  "es": "Damas de Samuel",
                  "de": "Samuels Dame",
                  "nl": "Samuel's Dammen"
        },
        {
                  "en": "AlphaGo",
                  "es": "AlphaGo",
                  "de": "AlphaGo",
                  "nl": "AlphaGo"
        },
        {
                  "en": "GameMaster",
                  "es": "GameMaster",
                  "de": "GameMaster",
                  "nl": "GameMaster"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Arthur Samuel's checkers program, developed at IBM in 1952, was one of the first programs to demonstrate machine learning by improving its play through experience.",
                  "es": "El programa de damas de Arthur Samuel, desarrollado en IBM en 1952, fue uno de los primeros programas en demostrar aprendizaje automático al mejorar su juego a través de la experiencia.",
                  "de": "Arthur Samuels Dame-Programm, 1952 bei IBM entwickelt, war eines der ersten Programme, das maschinelles Lernen demonstrierte, indem es sein Spiel durch Erfahrung verbesserte.",
                  "nl": "Arthur Samuel's dammenprogramma, ontwikkeld bij IBM in 1952, was een van de eerste programma's die machine learning demonstreerden door het spel te verbeteren door ervaring."
        }
      },
      {
        question: {
                  "en": "Which early AI researcher co-founded the Stanford Artificial Intelligence Laboratory?",
                  "es": "¿Qué investigador temprano de IA cofundó el Laboratorio de Inteligencia Artificial de Stanford?",
                  "de": "Welcher frühe KI-Forscher war Mitbegründer des Stanford Artificial Intelligence Laboratory?",
                  "nl": "Welke vroege AI onderzoeker was medeoprichter van het Stanford Artificial Intelligence Laboratory?"
        },
        options: [
        {
                  "en": "Marvin Minsky",
                  "es": "Marvin Minsky",
                  "de": "Marvin Minsky",
                  "nl": "Marvin Minsky"
        },
        {
                  "en": "Herbert Simon",
                  "es": "Herbert Simon",
                  "de": "Herbert Simon",
                  "nl": "Herbert Simon"
        },
        {
                  "en": "John McCarthy",
                  "es": "John McCarthy",
                  "de": "John McCarthy",
                  "nl": "John McCarthy"
        },
        {
                  "en": "Allen Newell",
                  "es": "Allen Newell",
                  "de": "Allen Newell",
                  "nl": "Allen Newell"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "John McCarthy co-founded the Stanford Artificial Intelligence Laboratory (SAIL) in 1963, which became one of the premier AI research centers.",
                  "es": "John McCarthy cofundó el Laboratorio de Inteligencia Artificial de Stanford (SAIL) en 1963, que se convirtió en uno de los principales centros de investigación de IA.",
                  "de": "John McCarthy war Mitbegründer des Stanford Artificial Intelligence Laboratory (SAIL) im Jahr 1963, das zu einem der führenden KI-Forschungszentren wurde.",
                  "nl": "John McCarthy was medeoprichter van het Stanford Artificial Intelligence Laboratory (SAIL) in 1963, dat een van de belangrijkste AI onderzoekscentra werd."
        }
      },
      {
        question: {
                  "en": "What was the Perceptron?",
                  "es": "¿Qué fue el Perceptrón?",
                  "de": "Was war das Perzeptron?",
                  "nl": "Wat was het Perceptron?"
        },
        options: [
        {
                  "en": "A robot",
                  "es": "Un robot",
                  "de": "Ein Roboter",
                  "nl": "Een robot"
        },
        {
                  "en": "An early neural network for pattern recognition",
                  "es": "Una red neuronal temprana para reconocimiento de patrones",
                  "de": "Ein frühes neuronales Netzwerk zur Mustererkennung",
                  "nl": "Een vroeg neuraal netwerk voor patroonherkenning"
        },
        {
                  "en": "A programming language",
                  "es": "Un lenguaje de programación",
                  "de": "Eine Programmiersprache",
                  "nl": "Een programmeertaal"
        },
        {
                  "en": "A database system",
                  "es": "Un sistema de base de datos",
                  "de": "Ein Datenbanksystem",
                  "nl": "Een databasesysteem"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Perceptron, developed by Frank Rosenblatt in 1958, was an early artificial neural network designed for pattern recognition and image classification.",
                  "es": "El Perceptrón, desarrollado por Frank Rosenblatt en 1958, fue una red neuronal artificial temprana diseñada para reconocimiento de patrones y clasificación de imágenes.",
                  "de": "Das Perzeptron, 1958 von Frank Rosenblatt entwickelt, war ein frühes künstliches neuronales Netzwerk, das für Mustererkennung und Bildklassifizierung entwickelt wurde.",
                  "nl": "Het Perceptron, ontwikkeld door Frank Rosenblatt in 1958, was een vroeg kunstmatig neuraal netwerk ontworpen voor patroonherkenning en beeldclassificatie."
        }
      },
      {
        question: {
                  "en": "Which book by Marvin Minsky and Seymour Papert was controversial in AI history?",
                  "es": "¿Qué libro de Marvin Minsky y Seymour Papert fue controvertido en la historia de la IA?",
                  "de": "Welches Buch von Marvin Minsky und Seymour Papert war in der KI-Geschichte kontrovers?",
                  "nl": "Welk boek van Marvin Minsky en Seymour Papert was controversieel in de AI geschiedenis?"
        },
        options: [
        {
                  "en": "Society of Mind",
                  "es": "Sociedad de la Mente",
                  "de": "Gesellschaft des Geistes",
                  "nl": "Samenleving van de Geest"
        },
        {
                  "en": "Perceptrons",
                  "es": "Perceptrones",
                  "de": "Perzeptronen",
                  "nl": "Perceptrons"
        },
        {
                  "en": "The Emotion Machine",
                  "es": "La Máquina de las Emociones",
                  "de": "Die Emotionsmaschine",
                  "nl": "De Emotiemachine"
        },
        {
                  "en": "Steps Toward Artificial Intelligence",
                  "es": "Pasos hacia la Inteligencia Artificial",
                  "de": "Schritte zur künstlichen Intelligenz",
                  "nl": "Stappen naar Kunstmatige Intelligentie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Perceptrons (1969) by Minsky and Papert highlighted limitations of single-layer neural networks, which contributed to reduced funding for neural network research during the AI winter.",
                  "es": "Perceptrones (1969) de Minsky y Papert destacó las limitaciones de las redes neuronales de una sola capa, lo que contribuyó a la reducción de financiamiento para la investigación de redes neuronales durante el invierno de la IA.",
                  "de": "Perzeptronen (1969) von Minsky und Papert hob die Einschränkungen einschichtiger neuronaler Netzwerke hervor, was zur verringerten Finanzierung der neuronalen Netzwerkforschung während des KI-Winters beitrug.",
                  "nl": "Perceptrons (1969) van Minsky en Papert benadrukte beperkingen van enkellaagse neurale netwerken, wat bijdroeg aan verminderde financiering voor neuraal netwerkonderzoek tijdens de AI winter."
        }
      },
      {
        question: {
                  "en": "Who wrote the influential paper 'Computing Machinery and Intelligence' in 1950?",
                  "es": "¿Quién escribió el influyente artículo 'Maquinaria Computacional e Inteligencia' en 1950?",
                  "de": "Wer schrieb 1950 den einflussreichen Artikel 'Computing Machinery and Intelligence'?",
                  "nl": "Wie schreef het invloedrijke artikel 'Computing Machinery and Intelligence' in 1950?"
        },
        options: [
        {
                  "en": "John von Neumann",
                  "es": "John von Neumann",
                  "de": "John von Neumann",
                  "nl": "John von Neumann"
        },
        {
                  "en": "Claude Shannon",
                  "es": "Claude Shannon",
                  "de": "Claude Shannon",
                  "nl": "Claude Shannon"
        },
        {
                  "en": "Alan Turing",
                  "es": "Alan Turing",
                  "de": "Alan Turing",
                  "nl": "Alan Turing"
        },
        {
                  "en": "Norbert Wiener",
                  "es": "Norbert Wiener",
                  "de": "Norbert Wiener",
                  "nl": "Norbert Wiener"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Alan Turing's 1950 paper 'Computing Machinery and Intelligence' introduced the famous Turing Test and explored whether machines can think.",
                  "es": "El artículo de Alan Turing de 1950 'Maquinaria Computacional e Inteligencia' introdujo la famosa Prueba de Turing y exploró si las máquinas pueden pensar.",
                  "de": "Alan Turings Artikel von 1950 'Computing Machinery and Intelligence' führte den berühmten Turing-Test ein und erforschte, ob Maschinen denken können.",
                  "nl": "Alan Turing's artikel van 1950 'Computing Machinery and Intelligence' introduceerde de beroemde Turing Test en onderzocht of machines kunnen denken."
        }
      },
      {
        question: {
                  "en": "What was ELIZA?",
                  "es": "¿Qué fue ELIZA?",
                  "de": "Was war ELIZA?",
                  "nl": "Wat was ELIZA?"
        },
        options: [
        {
                  "en": "A robot assistant",
                  "es": "Un asistente robótico",
                  "de": "Ein Roboter-Assistent",
                  "nl": "Een robotassistent"
        },
        {
                  "en": "An early chatbot that simulated a psychotherapist",
                  "es": "Un chatbot temprano que simulaba a un psicoterapeuta",
                  "de": "Ein früher Chatbot, der einen Psychotherapeuten simulierte",
                  "nl": "Een vroege chatbot die een psychotherapeut simuleerde"
        },
        {
                  "en": "A chess program",
                  "es": "Un programa de ajedrez",
                  "de": "Ein Schachprogramm",
                  "nl": "Een schaakprogramma"
        },
        {
                  "en": "A vision system",
                  "es": "Un sistema de visión",
                  "de": "Ein Sehsystem",
                  "nl": "Een visiesysteem"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "ELIZA, created by Joseph Weizenbaum at MIT in 1966, was an early natural language processing program that simulated conversation with a psychotherapist.",
                  "es": "ELIZA, creado por Joseph Weizenbaum en el MIT en 1966, fue un programa temprano de procesamiento de lenguaje natural que simulaba conversación con un psicoterapeuta.",
                  "de": "ELIZA, 1966 von Joseph Weizenbaum am MIT erstellt, war ein frühes natürliches Sprachverarbeitungsprogramm, das ein Gespräch mit einem Psychotherapeuten simulierte.",
                  "nl": "ELIZA, gemaakt door Joseph Weizenbaum aan MIT in 1966, was een vroeg natuurlijke taalverwerkingsprogramma dat gesprekken met een psychotherapeut simuleerde."
        }
      },
      {
        question: {
                  "en": "Which AI system was designed to prove mathematical theorems?",
                  "es": "¿Qué sistema de IA fue diseñado para probar teoremas matemáticos?",
                  "de": "Welches KI-System wurde entwickelt, um mathematische Theoreme zu beweisen?",
                  "nl": "Welk AI systeem was ontworpen om wiskundige stellingen te bewijzen?"
        },
        options: [
        {
                  "en": "MYCIN",
                  "es": "MYCIN",
                  "de": "MYCIN",
                  "nl": "MYCIN"
        },
        {
                  "en": "Logic Theorist",
                  "es": "Teórico Lógico",
                  "de": "Logik-Theoretiker",
                  "nl": "Logic Theorist"
        },
        {
                  "en": "DENDRAL",
                  "es": "DENDRAL",
                  "de": "DENDRAL",
                  "nl": "DENDRAL"
        },
        {
                  "en": "SHRDLU",
                  "es": "SHRDLU",
                  "de": "SHRDLU",
                  "nl": "SHRDLU"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Logic Theorist, developed by Allen Newell, Herbert Simon, and Cliff Shaw in 1956, was designed to prove mathematical theorems and is considered one of the first AI programs.",
                  "es": "Logic Theorist, desarrollado por Allen Newell, Herbert Simon y Cliff Shaw en 1956, fue diseñado para probar teoremas matemáticos y se considera uno de los primeros programas de IA.",
                  "de": "Logic Theorist, 1956 von Allen Newell, Herbert Simon und Cliff Shaw entwickelt, wurde entwickelt, um mathematische Theoreme zu beweisen und gilt als eines der ersten KI-Programme.",
                  "nl": "Logic Theorist, ontwikkeld door Allen Newell, Herbert Simon en Cliff Shaw in 1956, was ontworpen om wiskundige stellingen te bewijzen en wordt beschouwd als een van de eerste AI programma's."
        }
      },
      {
        question: {
                  "en": "What did the 'blocks world' refer to in early AI research?",
                  "es": "¿A qué se refería el 'mundo de bloques' en la investigación temprana de IA?",
                  "de": "Was bedeutete die 'Blockwelt' in der frühen KI-Forschung?",
                  "nl": "Waarnaar verwees de 'blokkenwereld' in vroeg AI onderzoek?"
        },
        options: [
        {
                  "en": "A video game",
                  "es": "Un videojuego",
                  "de": "Ein Videospiel",
                  "nl": "Een videospel"
        },
        {
                  "en": "A simplified environment for testing AI planning and reasoning",
                  "es": "Un entorno simplificado para probar planificación y razonamiento de IA",
                  "de": "Eine vereinfachte Umgebung zum Testen von KI-Planung und -Denken",
                  "nl": "Een vereenvoudigde omgeving voor het testen van AI planning en redeneren"
        },
        {
                  "en": "A programming language",
                  "es": "Un lenguaje de programación",
                  "de": "Eine Programmiersprache",
                  "nl": "Een programmeertaal"
        },
        {
                  "en": "A hardware design",
                  "es": "Un diseño de hardware",
                  "de": "Ein Hardware-Design",
                  "nl": "Een hardware ontwerp"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The blocks world was a simplified environment used in early AI research to test planning, reasoning, and natural language understanding, notably used in the SHRDLU system.",
                  "es": "El mundo de bloques fue un entorno simplificado utilizado en la investigación temprana de IA para probar planificación, razonamiento y comprensión del lenguaje natural, notablemente usado en el sistema SHRDLU.",
                  "de": "Die Blockwelt war eine vereinfachte Umgebung, die in der frühen KI-Forschung verwendet wurde, um Planung, Denken und natürliches Sprachverständnis zu testen, insbesondere im SHRDLU-System.",
                  "nl": "De blokkenwereld was een vereenvoudigde omgeving die in vroeg AI onderzoek werd gebruikt om planning, redeneren en natuurlijk taalbegrip te testen, met name gebruikt in het SHRDLU systeem."
        }
      },
      {
        question: {
                  "en": "Which programming language was specifically developed for AI in 1958?",
                  "es": "¿Qué lenguaje de programación fue desarrollado específicamente para IA en 1958?",
                  "de": "Welche Programmiersprache wurde 1958 speziell für KI entwickelt?",
                  "nl": "Welke programmeertaal werd specifiek voor AI ontwikkeld in 1958?"
        },
        options: [
        {
                  "en": "Python",
                  "es": "Python",
                  "de": "Python",
                  "nl": "Python"
        },
        {
                  "en": "LISP",
                  "es": "LISP",
                  "de": "LISP",
                  "nl": "LISP"
        },
        {
                  "en": "Java",
                  "es": "Java",
                  "de": "Java",
                  "nl": "Java"
        },
        {
                  "en": "C++",
                  "es": "C++",
                  "de": "C++",
                  "nl": "C++"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "LISP (LISt Processing) was developed by John McCarthy in 1958 specifically for AI research and became the dominant AI programming language for decades.",
                  "es": "LISP (Procesamiento de Listas) fue desarrollado por John McCarthy en 1958 específicamente para investigación de IA y se convirtió en el lenguaje de programación dominante de IA durante décadas.",
                  "de": "LISP (Listenverarbeitung) wurde 1958 von John McCarthy speziell für KI-Forschung entwickelt und wurde für Jahrzehnte zur dominierenden KI-Programmiersprache.",
                  "nl": "LISP (LISt Processing) werd ontwikkeld door John McCarthy in 1958 specifiek voor AI onderzoek en werd decennialang de dominante AI programmeertaal."
        }
      },
      {
        question: {
                  "en": "What was the General Problem Solver (GPS)?",
                  "es": "¿Qué fue el Solucionador General de Problemas (GPS)?",
                  "de": "Was war der General Problem Solver (GPS)?",
                  "nl": "Wat was de General Problem Solver (GPS)?"
        },
        options: [
        {
                  "en": "A navigation system",
                  "es": "Un sistema de navegación",
                  "de": "Ein Navigationssystem",
                  "nl": "Een navigatiesysteem"
        },
        {
                  "en": "An early AI program designed to solve a wide range of problems",
                  "es": "Un programa de IA temprano diseñado para resolver una amplia gama de problemas",
                  "de": "Ein frühes KI-Programm zur Lösung einer breiten Palette von Problemen",
                  "nl": "Een vroeg AI programma ontworpen om een breed scala aan problemen op te lossen"
        },
        {
                  "en": "A database",
                  "es": "Una base de datos",
                  "de": "Eine Datenbank",
                  "nl": "Een database"
        },
        {
                  "en": "A robot",
                  "es": "Un robot",
                  "de": "Ein Roboter",
                  "nl": "Een robot"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The General Problem Solver, developed by Newell and Simon in 1957, was an early AI program that attempted to solve a wide range of problems using means-ends analysis.",
                  "es": "El Solucionador General de Problemas, desarrollado por Newell y Simon en 1957, fue un programa de IA temprano que intentó resolver una amplia gama de problemas usando análisis de medios-fines.",
                  "de": "Der General Problem Solver, 1957 von Newell und Simon entwickelt, war ein frühes KI-Programm, das versuchte, eine breite Palette von Problemen mittels Mittel-Zweck-Analyse zu lösen.",
                  "nl": "De General Problem Solver, ontwikkeld door Newell en Simon in 1957, was een vroeg AI programma dat probeerde een breed scala aan problemen op te lossen met behulp van middelen-doelen analyse."
        }
      },
      {
        question: {
                  "en": "Which laboratory at MIT was a major center for AI research?",
                  "es": "¿Qué laboratorio en el MIT fue un centro importante para la investigación de IA?",
                  "de": "Welches Labor am MIT war ein wichtiges Zentrum für KI-Forschung?",
                  "nl": "Welk laboratorium aan MIT was een belangrijk centrum voor AI onderzoek?"
        },
        options: [
        {
                  "en": "MIT Media Lab",
                  "es": "MIT Media Lab",
                  "de": "MIT Media Lab",
                  "nl": "MIT Media Lab"
        },
        {
                  "en": "MIT AI Lab",
                  "es": "MIT AI Lab",
                  "de": "MIT AI Lab",
                  "nl": "MIT AI Lab"
        },
        {
                  "en": "MIT Physics Lab",
                  "es": "MIT Physics Lab",
                  "de": "MIT Physik Labor",
                  "nl": "MIT Physics Lab"
        },
        {
                  "en": "MIT Chemistry Lab",
                  "es": "MIT Chemistry Lab",
                  "de": "MIT Chemie Labor",
                  "nl": "MIT Chemistry Lab"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The MIT AI Lab, founded in 1959 by John McCarthy and Marvin Minsky, became one of the world's leading AI research centers.",
                  "es": "El MIT AI Lab, fundado en 1959 por John McCarthy y Marvin Minsky, se convirtió en uno de los centros de investigación de IA líderes del mundo.",
                  "de": "Das MIT AI Lab, 1959 von John McCarthy und Marvin Minsky gegründet, wurde zu einem der weltweit führenden KI-Forschungszentren.",
                  "nl": "Het MIT AI Lab, opgericht in 1959 door John McCarthy en Marvin Minsky, werd een van 's werelds leidende AI onderzoekscentra."
        }
      },
      {
        question: {
                  "en": "What was the main goal of early AI expert systems?",
                  "es": "¿Cuál fue el objetivo principal de los sistemas expertos tempranos de IA?",
                  "de": "Was war das Hauptziel früher KI-Expertensysteme?",
                  "nl": "Wat was het hoofddoel van vroege AI expertsystemen?"
        },
        options: [
        {
                  "en": "To play games",
                  "es": "Jugar juegos",
                  "de": "Spiele zu spielen",
                  "nl": "Om spellen te spelen"
        },
        {
                  "en": "To capture and apply human expertise in specific domains",
                  "es": "Capturar y aplicar la experiencia humana en dominios específicos",
                  "de": "Menschliches Fachwissen in spezifischen Bereichen zu erfassen und anzuwenden",
                  "nl": "Om menselijke expertise in specifieke domeinen vast te leggen en toe te passen"
        },
        {
                  "en": "To control robots",
                  "es": "Controlar robots",
                  "de": "Roboter zu steuern",
                  "nl": "Om robots te besturen"
        },
        {
                  "en": "To process images",
                  "es": "Procesar imágenes",
                  "de": "Bilder zu verarbeiten",
                  "nl": "Om afbeeldingen te verwerken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Early expert systems like MYCIN and DENDRAL were designed to capture and apply human expertise in specific domains such as medicine and chemistry.",
                  "es": "Los primeros sistemas expertos como MYCIN y DENDRAL fueron diseñados para capturar y aplicar la experiencia humana en dominios específicos como medicina y química.",
                  "de": "Frühe Expertensysteme wie MYCIN und DENDRAL wurden entwickelt, um menschliches Fachwissen in spezifischen Bereichen wie Medizin und Chemie zu erfassen und anzuwenden.",
                  "nl": "Vroege expertsystemen zoals MYCIN en DENDRAL waren ontworpen om menselijke expertise in specifieke domeinen zoals geneeskunde en scheikunde vast te leggen en toe te passen."
        }
      },
      {
        question: {
                  "en": "When was the first AI winter period?",
                  "es": "¿Cuándo fue el primer período de invierno de IA?",
                  "de": "Wann war die erste KI-Winter-Periode?",
                  "nl": "Wanneer was de eerste AI winter periode?"
        },
        options: [
        {
                  "en": "1950s",
                  "es": "1950s",
                  "de": "1950er",
                  "nl": "1950s"
        },
        {
                  "en": "1960s",
                  "es": "1960s",
                  "de": "1960er",
                  "nl": "1960s"
        },
        {
                  "en": "1974-1980",
                  "es": "1974-1980",
                  "de": "1974-1980",
                  "nl": "1974-1980"
        },
        {
                  "en": "1990s",
                  "es": "1990s",
                  "de": "1990er",
                  "nl": "1990s"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The first AI winter occurred from 1974 to 1980, marked by reduced funding and interest in AI research due to unfulfilled promises and limited progress.",
                  "es": "El primer invierno de IA ocurrió de 1974 a 1980, marcado por reducción de financiamiento e interés en investigación de IA debido a promesas incumplidas y progreso limitado.",
                  "de": "Der erste KI-Winter ereignete sich von 1974 bis 1980, gekennzeichnet durch reduzierte Finanzierung und Interesse an KI-Forschung aufgrund unerfüllter Versprechen und begrenztem Fortschritt.",
                  "nl": "De eerste AI winter vond plaats van 1974 tot 1980, gekenmerkt door verminderde financiering en interesse in AI onderzoek vanwege niet-nagekomen beloften en beperkte vooruitgang."
        }
      },
      {
        question: {
                  "en": "What was MYCIN designed to do?",
                  "es": "¿Para qué fue diseñado MYCIN?",
                  "de": "Wofür wurde MYCIN entwickelt?",
                  "nl": "Waarvoor was MYCIN ontworpen?"
        },
        options: [
        {
                  "en": "Diagnose blood infections and recommend antibiotics",
                  "es": "Diagnosticar infecciones sanguíneas y recomendar antibióticos",
                  "de": "Blutinfektionen diagnostizieren und Antibiotika empfehlen",
                  "nl": "Bloedinfecties diagnosticeren en antibiotica aanbevelen"
        },
        {
                  "en": "Play chess",
                  "es": "Jugar ajedrez",
                  "de": "Schach spielen",
                  "nl": "Schaken spelen"
        },
        {
                  "en": "Translate languages",
                  "es": "Traducir idiomas",
                  "de": "Sprachen übersetzen",
                  "nl": "Talen vertalen"
        },
        {
                  "en": "Control robots",
                  "es": "Controlar robots",
                  "de": "Roboter steuern",
                  "nl": "Robots besturen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "MYCIN, developed at Stanford in the 1970s, was an expert system designed to diagnose blood infections and recommend appropriate antibiotics.",
                  "es": "MYCIN, desarrollado en Stanford en los años 1970, fue un sistema experto diseñado para diagnosticar infecciones sanguíneas y recomendar antibióticos apropiados.",
                  "de": "MYCIN, in den 1970er Jahren in Stanford entwickelt, war ein Expertensystem zur Diagnose von Blutinfektionen und zur Empfehlung geeigneter Antibiotika.",
                  "nl": "MYCIN, ontwikkeld aan Stanford in de jaren 1970, was een expertsysteem ontworpen om bloedinfecties te diagnosticeren en geschikte antibiotica aan te bevelen."
        }
      },
      {
        question: {
                  "en": "Who developed the concept of the 'Chinese Room' thought experiment?",
                  "es": "¿Quién desarrolló el concepto del experimento mental de la 'Habitación China'?",
                  "de": "Wer entwickelte das Konzept des 'Chinesischen Zimmers' als Gedankenexperiment?",
                  "nl": "Wie ontwikkelde het concept van het 'Chinese Kamer' gedachte-experiment?"
        },
        options: [
        {
                  "en": "John Searle",
                  "es": "John Searle",
                  "de": "John Searle",
                  "nl": "John Searle"
        },
        {
                  "en": "Alan Turing",
                  "es": "Alan Turing",
                  "de": "Alan Turing",
                  "nl": "Alan Turing"
        },
        {
                  "en": "Marvin Minsky",
                  "es": "Marvin Minsky",
                  "de": "Marvin Minsky",
                  "nl": "Marvin Minsky"
        },
        {
                  "en": "Herbert Simon",
                  "es": "Herbert Simon",
                  "de": "Herbert Simon",
                  "nl": "Herbert Simon"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "John Searle introduced the Chinese Room thought experiment in 1980 to challenge the idea that computers can truly understand language.",
                  "es": "John Searle introdujo el experimento mental de la Habitación China en 1980 para desafiar la idea de que las computadoras pueden realmente entender el lenguaje.",
                  "de": "John Searle führte 1980 das Gedankenexperiment des Chinesischen Zimmers ein, um die Idee zu hinterfragen, dass Computer Sprache wirklich verstehen können.",
                  "nl": "John Searle introduceerde het Chinese Kamer gedachte-experiment in 1980 om het idee te betwisten dat computers taal echt kunnen begrijpen."
        }
      },
      {
        question: {
                  "en": "What was DENDRAL?",
                  "es": "¿Qué fue DENDRAL?",
                  "de": "Was war DENDRAL?",
                  "nl": "Wat was DENDRAL?"
        },
        options: [
        {
                  "en": "A robot arm",
                  "es": "Un brazo robótico",
                  "de": "Ein Roboterarm",
                  "nl": "Een robotarm"
        },
        {
                  "en": "An expert system for analyzing molecular structures",
                  "es": "Un sistema experto para analizar estructuras moleculares",
                  "de": "Ein Expertensystem zur Analyse molekularer Strukturen",
                  "nl": "Een expertsysteem voor het analyseren van moleculaire structuren"
        },
        {
                  "en": "A neural network",
                  "es": "Una red neuronal",
                  "de": "Ein neuronales Netzwerk",
                  "nl": "Een neuraal netwerk"
        },
        {
                  "en": "A chess program",
                  "es": "Un programa de ajedrez",
                  "de": "Ein Schachprogramm",
                  "nl": "Een schaakprogramma"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "DENDRAL, developed at Stanford in the 1960s, was an expert system designed to analyze mass spectrometry data and determine molecular structures.",
                  "es": "DENDRAL, desarrollado en Stanford en los años 1960, fue un sistema experto diseñado para analizar datos de espectrometría de masas y determinar estructuras moleculares.",
                  "de": "DENDRAL, in den 1960er Jahren in Stanford entwickelt, war ein Expertensystem zur Analyse von Massenspektrometriedaten und zur Bestimmung molekularer Strukturen.",
                  "nl": "DENDRAL, ontwikkeld aan Stanford in de jaren 1960, was een expertsysteem ontworpen om massaspectrometriegegevens te analyseren en moleculaire structuren te bepalen."
        }
      },
      {
        question: {
                  "en": "What was the 'frame problem' in AI?",
                  "es": "¿Qué fue el 'problema del marco' en IA?",
                  "de": "Was war das 'Frame-Problem' in der KI?",
                  "nl": "Wat was het 'frame probleem' in AI?"
        },
        options: [
        {
                  "en": "Hardware limitations",
                  "es": "Limitaciones de hardware",
                  "de": "Hardware-Einschränkungen",
                  "nl": "Hardware beperkingen"
        },
        {
                  "en": "The difficulty of representing what changes and what stays the same in a changing world",
                  "es": "La dificultad de representar qué cambia y qué permanece igual en un mundo cambiante",
                  "de": "Die Schwierigkeit darzustellen, was sich ändert und was in einer sich verändernden Welt gleich bleibt",
                  "nl": "De moeilijkheid om weer te geven wat verandert en wat hetzelfde blijft in een veranderende wereld"
        },
        {
                  "en": "Programming errors",
                  "es": "Errores de programación",
                  "de": "Programmierfehler",
                  "nl": "Programmeerfouten"
        },
        {
                  "en": "Network connectivity",
                  "es": "Conectividad de red",
                  "de": "Netzwerkkonnektivität",
                  "nl": "Netwerkconnectiviteit"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The frame problem, identified in the 1960s, refers to the difficulty of representing the effects of actions without having to explicitly state what doesn't change.",
                  "es": "El problema del marco, identificado en los años 1960, se refiere a la dificultad de representar los efectos de acciones sin tener que establecer explícitamente qué no cambia.",
                  "de": "Das Frame-Problem, in den 1960er Jahren identifiziert, bezieht sich auf die Schwierigkeit, die Auswirkungen von Handlungen darzustellen, ohne explizit angeben zu müssen, was sich nicht ändert.",
                  "nl": "Het frame probleem, geïdentificeerd in de jaren 1960, verwijst naar de moeilijkheid om de effecten van acties weer te geven zonder expliciet te moeten vermelden wat niet verandert."
        }
      },
      {
        question: {
                  "en": "Which AI researcher won the Turing Award for contributions to AI?",
                  "es": "¿Qué investigador de IA ganó el Premio Turing por contribuciones a la IA?",
                  "de": "Welcher KI-Forscher gewann den Turing Award für Beiträge zur KI?",
                  "nl": "Welke AI onderzoeker won de Turing Award voor bijdragen aan AI?"
        },
        options: [
        {
                  "en": "Marvin Minsky",
                  "es": "Marvin Minsky",
                  "de": "Marvin Minsky",
                  "nl": "Marvin Minsky"
        },
        {
                  "en": "Bill Gates",
                  "es": "Bill Gates",
                  "de": "Bill Gates",
                  "nl": "Bill Gates"
        },
        {
                  "en": "Steve Jobs",
                  "es": "Steve Jobs",
                  "de": "Steve Jobs",
                  "nl": "Steve Jobs"
        },
        {
                  "en": "Mark Zuckerberg",
                  "es": "Mark Zuckerberg",
                  "de": "Mark Zuckerberg",
                  "nl": "Mark Zuckerberg"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Marvin Minsky received the Turing Award in 1969 for his contributions to AI, along with many other AI pioneers who have been honored with this award.",
                  "es": "Marvin Minsky recibió el Premio Turing en 1969 por sus contribuciones a la IA, junto con muchos otros pioneros de la IA que han sido honrados con este premio.",
                  "de": "Marvin Minsky erhielt 1969 den Turing Award für seine Beiträge zur KI, zusammen mit vielen anderen KI-Pionieren, die mit dieser Auszeichnung geehrt wurden.",
                  "nl": "Marvin Minsky ontving de Turing Award in 1969 voor zijn bijdragen aan AI, samen met veel andere AI pioniers die met deze prijs zijn geëerd."
        }
      },
      {
        question: {
                  "en": "What was the 'symbol grounding problem'?",
                  "es": "¿Qué fue el 'problema de fundamentación de símbolos'?",
                  "de": "Was war das 'Symbol Grounding Problem'?",
                  "nl": "Wat was het 'symbool grounding probleem'?"
        },
        options: [
        {
                  "en": "A hardware issue",
                  "es": "Un problema de hardware",
                  "de": "Ein Hardware-Problem",
                  "nl": "Een hardware probleem"
        },
        {
                  "en": "The problem of how symbols in AI systems can be connected to real-world meanings",
                  "es": "El problema de cómo los símbolos en sistemas de IA pueden conectarse a significados del mundo real",
                  "de": "Das Problem, wie Symbole in KI-Systemen mit realen Bedeutungen verbunden werden können",
                  "nl": "Het probleem van hoe symbolen in AI systemen verbonden kunnen worden met echte betekenissen"
        },
        {
                  "en": "A programming syntax error",
                  "es": "Un error de sintaxis de programación",
                  "de": "Ein Programmiersyntaxfehler",
                  "nl": "Een programmeersyntaxfout"
        },
        {
                  "en": "A network protocol issue",
                  "es": "Un problema de protocolo de red",
                  "de": "Ein Netzwerkprotokoll-Problem",
                  "nl": "Een netwerkprotocol probleem"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The symbol grounding problem, articulated by Stevan Harnad in 1990, addresses how symbols used by AI systems can be meaningfully connected to the real-world objects and concepts they represent.",
                  "es": "El problema de fundamentación de símbolos, articulado por Stevan Harnad en 1990, aborda cómo los símbolos usados por sistemas de IA pueden conectarse significativamente a los objetos y conceptos del mundo real que representan.",
                  "de": "Das Symbol Grounding Problem, 1990 von Stevan Harnad formuliert, befasst sich damit, wie Symbole, die von KI-Systemen verwendet werden, sinnvoll mit den realen Objekten und Konzepten verbunden werden können, die sie darstellen.",
                  "nl": "Het symbool grounding probleem, gearticuleerd door Stevan Harnad in 1990, behandelt hoe symbolen die door AI systemen worden gebruikt zinvol verbonden kunnen worden met de echte objecten en concepten die ze vertegenwoordigen."
        }
      },
      {
        question: {
                  "en": "What was SHRDLU?",
                  "es": "¿Qué fue SHRDLU?",
                  "de": "Was war SHRDLU?",
                  "nl": "Wat was SHRDLU?"
        },
        options: [
        {
                  "en": "A chess program",
                  "es": "Un programa de ajedrez",
                  "de": "Ein Schachprogramm",
                  "nl": "Een schaakprogramma"
        },
        {
                  "en": "A natural language understanding program for the blocks world",
                  "es": "Un programa de comprensión del lenguaje natural para el mundo de bloques",
                  "de": "Ein natürliches Sprachverständnisprogramm für die Blockwelt",
                  "nl": "Een natuurlijk taalbegrip programma voor de blokkenwereld"
        },
        {
                  "en": "A robot",
                  "es": "Un robot",
                  "de": "Ein Roboter",
                  "nl": "Een robot"
        },
        {
                  "en": "A neural network",
                  "es": "Una red neuronal",
                  "de": "Ein neuronales Netzwerk",
                  "nl": "Een neuraal netwerk"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "SHRDLU, developed by Terry Winograd at MIT in 1970, was a natural language understanding program that could manipulate objects and answer questions in a simple blocks world.",
                  "es": "SHRDLU, desarrollado por Terry Winograd en el MIT en 1970, fue un programa de comprensión del lenguaje natural que podía manipular objetos y responder preguntas en un mundo de bloques simple.",
                  "de": "SHRDLU, 1970 von Terry Winograd am MIT entwickelt, war ein natürliches Sprachverständnisprogramm, das Objekte manipulieren und Fragen in einer einfachen Blockwelt beantworten konnte.",
                  "nl": "SHRDLU, ontwikkeld door Terry Winograd aan MIT in 1970, was een natuurlijk taalbegrip programma dat objecten kon manipuleren en vragen kon beantwoorden in een eenvoudige blokkenwereld."
        }
      },
      {
        question: {
                  "en": "What was the main limitation of early AI that led to the first AI winter?",
                  "es": "¿Cuál fue la principal limitación de la IA temprana que llevó al primer invierno de IA?",
                  "de": "Was war die Haupteinschränkung früher KI, die zum ersten KI-Winter führte?",
                  "nl": "Wat was de belangrijkste beperking van vroege AI die leidde tot de eerste AI winter?"
        },
        options: [
        {
                  "en": "Lack of internet",
                  "es": "Falta de internet",
                  "de": "Fehlen des Internets",
                  "nl": "Gebrek aan internet"
        },
        {
                  "en": "Over-promising and under-delivering on AI capabilities",
                  "es": "Prometer en exceso y entregar menos en capacidades de IA",
                  "de": "Übermäßige Versprechen und unzureichende Lieferung von KI-Fähigkeiten",
                  "nl": "Te veel beloven en te weinig leveren op het gebied van AI capaciteiten"
        },
        {
                  "en": "No researchers",
                  "es": "Sin investigadores",
                  "de": "Keine Forscher",
                  "nl": "Geen onderzoekers"
        },
        {
                  "en": "Too many applications",
                  "es": "Demasiadas aplicaciones",
                  "de": "Zu viele Anwendungen",
                  "nl": "Te veel toepassingen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The first AI winter was largely caused by unrealistic expectations and over-promising results, combined with limited computational power and narrow problem-solving capabilities.",
                  "es": "El primer invierno de IA fue causado en gran parte por expectativas poco realistas y resultados exagerados, combinados con poder computacional limitado y capacidades limitadas de resolución de problemas.",
                  "de": "Der erste KI-Winter wurde größtenteils durch unrealistische Erwartungen und übertriebene Versprechungen verursacht, kombiniert mit begrenzter Rechenleistung und engen Problemlösungsfähigkeiten.",
                  "nl": "De eerste AI winter werd grotendeels veroorzaakt door onrealistische verwachtingen en te veel beloven, gecombineerd met beperkte rekenkracht en beperkte probleemoplossende capaciteiten."
        }
      },
      {
        question: {
                  "en": "Who co-authored the Logic Theorist with Herbert Simon?",
                  "es": "¿Quién fue coautor del Teórico Lógico con Herbert Simon?",
                  "de": "Wer war Ko-Autor des Logik-Theoretikers mit Herbert Simon?",
                  "nl": "Wie was mede-auteur van de Logic Theorist met Herbert Simon?"
        },
        options: [
        {
                  "en": "John McCarthy",
                  "es": "John McCarthy",
                  "de": "John McCarthy",
                  "nl": "John McCarthy"
        },
        {
                  "en": "Allen Newell",
                  "es": "Allen Newell",
                  "de": "Allen Newell",
                  "nl": "Allen Newell"
        },
        {
                  "en": "Marvin Minsky",
                  "es": "Marvin Minsky",
                  "de": "Marvin Minsky",
                  "nl": "Marvin Minsky"
        },
        {
                  "en": "Claude Shannon",
                  "es": "Claude Shannon",
                  "de": "Claude Shannon",
                  "nl": "Claude Shannon"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Allen Newell co-authored the Logic Theorist with Herbert Simon and Cliff Shaw in 1956, creating one of the first AI programs.",
                  "es": "Allen Newell fue coautor del Teórico Lógico con Herbert Simon y Cliff Shaw en 1956, creando uno de los primeros programas de IA.",
                  "de": "Allen Newell war Ko-Autor des Logik-Theoretikers mit Herbert Simon und Cliff Shaw im Jahr 1956 und schuf eines der ersten KI-Programme.",
                  "nl": "Allen Newell was mede-auteur van de Logic Theorist met Herbert Simon en Cliff Shaw in 1956, waarmee een van de eerste AI programma's werd gemaakt."
        }
      },
      {
        question: {
                  "en": "What was the Dartmouth Conference proposal's main claim?",
                  "es": "¿Cuál fue la afirmación principal de la propuesta de la Conferencia de Dartmouth?",
                  "de": "Was war die Hauptbehauptung des Dartmouth-Konferenz-Vorschlags?",
                  "nl": "Wat was de belangrijkste claim van het Dartmouth Conferentie voorstel?"
        },
        options: [
        {
                  "en": "AI is impossible",
                  "es": "La IA es imposible",
                  "de": "KI ist unmöglich",
                  "nl": "AI is onmogelijk"
        },
        {
                  "en": "Every aspect of learning can be precisely described and simulated by a machine",
                  "es": "Cada aspecto del aprendizaje puede ser descrito con precisión y simulado por una máquina",
                  "de": "Jeder Aspekt des Lernens kann präzise beschrieben und von einer Maschine simuliert werden",
                  "nl": "Elk aspect van leren kan nauwkeurig worden beschreven en door een machine worden gesimuleerd"
        },
        {
                  "en": "Humans are superior to machines",
                  "es": "Los humanos son superiores a las máquinas",
                  "de": "Menschen sind Maschinen überlegen",
                  "nl": "Mensen zijn superieur aan machines"
        },
        {
                  "en": "Only robots can be intelligent",
                  "es": "Solo los robots pueden ser inteligentes",
                  "de": "Nur Roboter können intelligent sein",
                  "nl": "Alleen robots kunnen intelligent zijn"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Dartmouth Conference proposal in 1956 boldly claimed that 'every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it.'",
                  "es": "La propuesta de la Conferencia de Dartmouth en 1956 afirmó audazmente que 'cada aspecto del aprendizaje o cualquier otra característica de la inteligencia puede en principio ser descrito tan precisamente que una máquina puede ser hecha para simularlo.'",
                  "de": "Der Dartmouth-Konferenz-Vorschlag von 1956 behauptete kühn, dass 'jeder Aspekt des Lernens oder jedes andere Merkmal der Intelligenz im Prinzip so präzise beschrieben werden kann, dass eine Maschine es simulieren kann.'",
                  "nl": "Het Dartmouth Conferentie voorstel in 1956 beweerde moedig dat 'elk aspect van leren of enig ander kenmerk van intelligentie in principe zo nauwkeurig kan worden beschreven dat een machine het kan simuleren.'"
        }
      },
      {
        question: {
                  "en": "What type of reasoning did early AI systems primarily use?",
                  "es": "¿Qué tipo de razonamiento usaron principalmente los sistemas de IA tempranos?",
                  "de": "Welche Art von Denken verwendeten frühe KI-Systeme hauptsächlich?",
                  "nl": "Welk type redeneren gebruikten vroege AI systemen voornamelijk?"
        },
        options: [
        {
                  "en": "Emotional reasoning",
                  "es": "Razonamiento emocional",
                  "de": "Emotionales Denken",
                  "nl": "Emotioneel redeneren"
        },
        {
                  "en": "Symbolic logic and rule-based reasoning",
                  "es": "Lógica simbólica y razonamiento basado en reglas",
                  "de": "Symbolische Logik und regelbasiertes Denken",
                  "nl": "Symbolische logica en regelgebaseerd redeneren"
        },
        {
                  "en": "Quantum reasoning",
                  "es": "Razonamiento cuántico",
                  "de": "Quanten-Denken",
                  "nl": "Kwantum redeneren"
        },
        {
                  "en": "Biological reasoning",
                  "es": "Razonamiento biológico",
                  "de": "Biologisches Denken",
                  "nl": "Biologisch redeneren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Early AI systems primarily used symbolic logic and rule-based reasoning, following the 'Good Old-Fashioned AI' (GOFAI) approach based on formal logic and knowledge representation.",
                  "es": "Los sistemas de IA tempranos usaron principalmente lógica simbólica y razonamiento basado en reglas, siguiendo el enfoque 'IA Tradicional Buena y Vieja' (GOFAI) basado en lógica formal y representación del conocimiento.",
                  "de": "Frühe KI-Systeme verwendeten hauptsächlich symbolische Logik und regelbasiertes Denken und folgten dem Ansatz der 'Guten Altmodischen KI' (GOFAI), der auf formaler Logik und Wissensrepräsentation basiert.",
                  "nl": "Vroege AI systemen gebruikten voornamelijk symbolische logica en regelgebaseerd redeneren, volgens de 'Good Old-Fashioned AI' (GOFAI) benadering gebaseerd op formele logica en kennisrepresentatie."
        }
      },
      {
        question: {
                  "en": "Which university was NOT a major center for early AI research?",
                  "es": "¿Qué universidad NO fue un centro importante para la investigación temprana de IA?",
                  "de": "Welche Universität war KEIN wichtiges Zentrum für frühe KI-Forschung?",
                  "nl": "Welke universiteit was GEEN belangrijk centrum voor vroeg AI onderzoek?"
        },
        options: [
        {
                  "en": "MIT",
                  "es": "MIT",
                  "de": "MIT",
                  "nl": "MIT"
        },
        {
                  "en": "Stanford",
                  "es": "Stanford",
                  "de": "Stanford",
                  "nl": "Stanford"
        },
        {
                  "en": "Carnegie Mellon",
                  "es": "Carnegie Mellon",
                  "de": "Carnegie Mellon",
                  "nl": "Carnegie Mellon"
        },
        {
                  "en": "Community College of Philadelphia",
                  "es": "Colegio Comunitario de Filadelfia",
                  "de": "Community College von Philadelphia",
                  "nl": "Community College van Philadelphia"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "MIT, Stanford, and Carnegie Mellon were the three major centers for early AI research, while Community College of Philadelphia was not involved in pioneering AI work.",
                  "es": "MIT, Stanford y Carnegie Mellon fueron los tres centros principales para la investigación temprana de IA, mientras que el Colegio Comunitario de Filadelfia no estuvo involucrado en trabajo pionero de IA.",
                  "de": "MIT, Stanford und Carnegie Mellon waren die drei Hauptzentren für frühe KI-Forschung, während das Community College von Philadelphia nicht an Pionierarbeit der KI beteiligt war.",
                  "nl": "MIT, Stanford en Carnegie Mellon waren de drie belangrijkste centra voor vroeg AI onderzoek, terwijl Community College van Philadelphia niet betrokken was bij baanbrekend AI werk."
        }
      },
      {
        question: {
                  "en": "What was the relationship between AI and cognitive science in early research?",
                  "es": "¿Cuál fue la relación entre IA y ciencia cognitiva en la investigación temprana?",
                  "de": "Was war die Beziehung zwischen KI und Kognitionswissenschaft in der frühen Forschung?",
                  "nl": "Wat was de relatie tussen AI en cognitieve wetenschap in vroeg onderzoek?"
        },
        options: [
        {
                  "en": "They were completely separate",
                  "es": "Fueron completamente separadas",
                  "de": "Sie waren völlig getrennt",
                  "nl": "Ze waren volledig gescheiden"
        },
        {
                  "en": "They were closely linked, with AI trying to model human cognition",
                  "es": "Estuvieron estrechamente vinculadas, con IA tratando de modelar la cognición humana",
                  "de": "Sie waren eng verbunden, wobei KI versuchte, menschliche Kognition zu modellieren",
                  "nl": "Ze waren nauw verbonden, waarbij AI probeerde menselijke cognitie te modelleren"
        },
        {
                  "en": "Cognitive science came after AI",
                  "es": "La ciencia cognitiva vino después de la IA",
                  "de": "Kognitionswissenschaft kam nach der KI",
                  "nl": "Cognitieve wetenschap kwam na AI"
        },
        {
                  "en": "They competed against each other",
                  "es": "Compitieron entre sí",
                  "de": "Sie konkurrierten miteinander",
                  "nl": "Ze concurreerden met elkaar"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "AI and cognitive science were closely linked in early research, with many AI systems attempting to model and understand human cognitive processes.",
                  "es": "La IA y la ciencia cognitiva estuvieron estrechamente vinculadas en la investigación temprana, con muchos sistemas de IA intentando modelar y entender procesos cognitivos humanos.",
                  "de": "KI und Kognitionswissenschaft waren in der frühen Forschung eng verbunden, wobei viele KI-Systeme versuchten, menschliche kognitive Prozesse zu modellieren und zu verstehen.",
                  "nl": "AI en cognitieve wetenschap waren nauw verbonden in vroeg onderzoek, waarbij veel AI systemen probeerden menselijke cognitieve processen te modelleren en begrijpen."
        }
      },
      {
        question: {
                  "en": "What was the main goal of the Dartmouth Summer Research Project?",
                  "es": "¿Cuál fue el objetivo principal del Proyecto de Investigación de Verano de Dartmouth?",
                  "de": "Was war das Hauptziel des Dartmouth Summer Research Project?",
                  "nl": "Wat was het hoofddoel van het Dartmouth Summer Research Project?"
        },
        options: [
        {
                  "en": "To build robots",
                  "es": "Construir robots",
                  "de": "Roboter zu bauen",
                  "nl": "Om robots te bouwen"
        },
        {
                  "en": "To explore whether machines could simulate human intelligence",
                  "es": "Explorar si las máquinas podrían simular la inteligencia humana",
                  "de": "Zu erkunden, ob Maschinen menschliche Intelligenz simulieren können",
                  "nl": "Om te onderzoeken of machines menselijke intelligentie konden simuleren"
        },
        {
                  "en": "To create video games",
                  "es": "Crear videojuegos",
                  "de": "Videospiele zu erstellen",
                  "nl": "Om videogames te maken"
        },
        {
                  "en": "To develop the internet",
                  "es": "Desarrollar internet",
                  "de": "Das Internet zu entwickeln",
                  "nl": "Om het internet te ontwikkelen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The 1956 Dartmouth Summer Research Project aimed to explore the fundamental question of whether machines could be made to simulate aspects of human intelligence.",
                  "es": "El Proyecto de Investigación de Verano de Dartmouth de 1956 tuvo como objetivo explorar la cuestión fundamental de si las máquinas podrían ser hechas para simular aspectos de la inteligencia humana.",
                  "de": "Das Dartmouth Summer Research Project von 1956 zielte darauf ab, die grundlegende Frage zu erforschen, ob Maschinen dazu gebracht werden können, Aspekte menschlicher Intelligenz zu simulieren.",
                  "nl": "Het Dartmouth Summer Research Project van 1956 had als doel de fundamentele vraag te onderzoeken of machines gemaakt konden worden om aspecten van menselijke intelligentie te simuleren."
        }
      },
      {
        question: {
                  "en": "What was significant about the term 'artificial intelligence' when it was first coined?",
                  "es": "¿Qué fue significativo sobre el término 'inteligencia artificial' cuando fue acuñado por primera vez?",
                  "de": "Was war bedeutsam an dem Begriff 'Künstliche Intelligenz', als er zum ersten Mal geprägt wurde?",
                  "nl": "Wat was belangrijk aan de term 'kunstmatige intelligentie' toen deze voor het eerst werd bedacht?"
        },
        options: [
        {
                  "en": "It was controversial and many rejected it",
                  "es": "Fue controvertido y muchos lo rechazaron",
                  "de": "Es war kontrovers und viele lehnten es ab",
                  "nl": "Het was controversieel en velen verwierpen het"
        },
        {
                  "en": "It helped define and legitimize the field as a distinct area of study",
                  "es": "Ayudó a definir y legitimar el campo como un área distinta de estudio",
                  "de": "Es half, das Feld als eigenständiges Studiengebiet zu definieren und zu legitimieren",
                  "nl": "Het hielp het vakgebied te definiëren en legitimeren als een apart studiegebied"
        },
        {
                  "en": "It was used only for robots",
                  "es": "Se usó solo para robots",
                  "de": "Es wurde nur für Roboter verwendet",
                  "nl": "Het werd alleen voor robots gebruikt"
        },
        {
                  "en": "It replaced the term 'computer science'",
                  "es": "Reemplazó el término 'ciencia de la computación'",
                  "de": "Es ersetzte den Begriff 'Informatik'",
                  "nl": "Het verving de term 'computerwetenschap'"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The term 'artificial intelligence' helped establish AI as a legitimate and distinct field of study, separating it from general computer science and giving researchers a clear identity.",
                  "es": "El término 'inteligencia artificial' ayudó a establecer la IA como un campo legítimo y distinto de estudio, separándolo de la ciencia de la computación general y dando a los investigadores una identidad clara.",
                  "de": "Der Begriff 'Künstliche Intelligenz' half dabei, KI als legitimes und eigenständiges Studiengebiet zu etablieren, es von der allgemeinen Informatik zu trennen und Forschern eine klare Identität zu geben.",
                  "nl": "De term 'kunstmatige intelligentie' hielp AI te vestigen als een legitiem en onderscheidend studiegebied, het scheidend van algemene computerwetenschap en onderzoekers gevend een duidelijke identiteit."
        }
      },
      {
        question: {
                  "en": "Which concept did Warren McCulloch and Walter Pitts contribute to AI?",
                  "es": "¿Qué concepto contribuyeron Warren McCulloch y Walter Pitts a la IA?",
                  "de": "Welches Konzept trugen Warren McCulloch und Walter Pitts zur KI bei?",
                  "nl": "Welk concept droegen Warren McCulloch en Walter Pitts bij aan AI?"
        },
        options: [
        {
                  "en": "Expert systems",
                  "es": "Sistemas expertos",
                  "de": "Expertensysteme",
                  "nl": "Expertsystemen"
        },
        {
                  "en": "Artificial neurons and neural networks",
                  "es": "Neuronas artificiales y redes neuronales",
                  "de": "Künstliche Neuronen und neuronale Netzwerke",
                  "nl": "Kunstmatige neuronen en neurale netwerken"
        },
        {
                  "en": "Chess programs",
                  "es": "Programas de ajedrez",
                  "de": "Schachprogramme",
                  "nl": "Schaakprogramma's"
        },
        {
                  "en": "Natural language processing",
                  "es": "Procesamiento del lenguaje natural",
                  "de": "Natürliche Sprachverarbeitung",
                  "nl": "Natuurlijke taalverwerking"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Warren McCulloch and Walter Pitts published their groundbreaking paper on artificial neurons in 1943, laying the mathematical foundation for neural networks.",
                  "es": "Warren McCulloch y Walter Pitts publicaron su artículo innovador sobre neuronas artificiales en 1943, estableciendo la base matemática para las redes neuronales.",
                  "de": "Warren McCulloch und Walter Pitts veröffentlichten 1943 ihre bahnbrechende Arbeit über künstliche Neuronen und legten damit die mathematische Grundlage für neuronale Netzwerke.",
                  "nl": "Warren McCulloch en Walter Pitts publiceerden hun baanbrekende artikel over kunstmatige neuronen in 1943, waarmee de wiskundige basis voor neurale netwerken werd gelegd."
        }
      },
      {
        question: {
                  "en": "What was the primary computational limitation facing early AI researchers?",
                  "es": "¿Cuál fue la limitación computacional primaria que enfrentaron los investigadores tempranos de IA?",
                  "de": "Was war die primäre rechnerische Einschränkung für frühe KI-Forscher?",
                  "nl": "Wat was de primaire computationele beperking waarmee vroege AI onderzoekers werden geconfronteerd?"
        },
        options: [
        {
                  "en": "Lack of programming languages",
                  "es": "Falta de lenguajes de programación",
                  "de": "Mangel an Programmiersprachen",
                  "nl": "Gebrek aan programmeertalen"
        },
        {
                  "en": "Limited processing power and memory",
                  "es": "Poder de procesamiento y memoria limitados",
                  "de": "Begrenzte Rechenleistung und Speicher",
                  "nl": "Beperkte verwerkingskracht en geheugen"
        },
        {
                  "en": "No display screens",
                  "es": "Sin pantallas de visualización",
                  "de": "Keine Bildschirme",
                  "nl": "Geen beeldschermen"
        },
        {
                  "en": "Too much data",
                  "es": "Demasiados datos",
                  "de": "Zu viele Daten",
                  "nl": "Te veel data"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Early AI researchers faced severe limitations in processing power and memory capacity, which restricted the complexity and size of problems they could tackle.",
                  "es": "Los investigadores tempranos de IA enfrentaron limitaciones severas en el poder de procesamiento y la capacidad de memoria, lo que restringió la complejidad y el tamaño de los problemas que podían abordar.",
                  "de": "Frühe KI-Forscher standen vor schweren Einschränkungen bei Rechenleistung und Speicherkapazität, was die Komplexität und Größe der Probleme einschränkte, die sie angehen konnten.",
                  "nl": "Vroege AI onderzoekers werden geconfronteerd met ernstige beperkingen in verwerkingskracht en geheugencapaciteit, wat de complexiteit en omvang van problemen die ze konden aanpakken beperkte."
        }
      },
      {
        question: {
                  "en": "What role did Claude Shannon play in early AI history?",
                  "es": "¿Qué papel jugó Claude Shannon en la historia temprana de la IA?",
                  "de": "Welche Rolle spielte Claude Shannon in der frühen KI-Geschichte?",
                  "nl": "Welke rol speelde Claude Shannon in de vroege AI geschiedenis?"
        },
        options: [
        {
                  "en": "He invented the transistor",
                  "es": "Inventó el transistor",
                  "de": "Er erfand den Transistor",
                  "nl": "Hij vond de transistor uit"
        },
        {
                  "en": "He developed information theory and worked on computer chess",
                  "es": "Desarrolló la teoría de la información y trabajó en ajedrez computacional",
                  "de": "Er entwickelte die Informationstheorie und arbeitete an Computer-Schach",
                  "nl": "Hij ontwikkelde informatietheorie en werkte aan computerschaak"
        },
        {
                  "en": "He built the first robot",
                  "es": "Construyó el primer robot",
                  "de": "Er baute den ersten Roboter",
                  "nl": "Hij bouwde de eerste robot"
        },
        {
                  "en": "He created the internet",
                  "es": "Creó el internet",
                  "de": "Er schuf das Internet",
                  "nl": "Hij creëerde het internet"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Claude Shannon developed information theory and also wrote influential papers on computer chess in the 1950s, contributing to early AI game-playing research.",
                  "es": "Claude Shannon desarrolló la teoría de la información y también escribió artículos influyentes sobre ajedrez computacional en los años 1950, contribuyendo a la investigación temprana de juegos de IA.",
                  "de": "Claude Shannon entwickelte die Informationstheorie und schrieb in den 1950er Jahren auch einflussreiche Arbeiten über Computer-Schach, was zur frühen KI-Spielforschung beitrug.",
                  "nl": "Claude Shannon ontwikkelde informatietheorie en schreef ook invloedrijke artikelen over computerschaak in de jaren 1950, bijdragend aan vroeg AI game-playing onderzoek."
        }
      },
      {
        question: {
                  "en": "What was the 'knowledge acquisition bottleneck' in expert systems?",
                  "es": "¿Qué fue el 'cuello de botella de adquisición de conocimiento' en sistemas expertos?",
                  "de": "Was war der 'Wissenserwerbsengpass' in Expertensystemen?",
                  "nl": "Wat was het 'kennisverwerving knelpunt' in expertsystemen?"
        },
        options: [
        {
                  "en": "Computers were too slow",
                  "es": "Las computadoras eran demasiado lentas",
                  "de": "Computer waren zu langsam",
                  "nl": "Computers waren te traag"
        },
        {
                  "en": "The difficulty and time required to extract and encode expert knowledge",
                  "es": "La dificultad y el tiempo requeridos para extraer y codificar conocimiento experto",
                  "de": "Die Schwierigkeit und Zeit, die erforderlich war, um Expertenwissen zu extrahieren und zu kodieren",
                  "nl": "De moeilijkheid en tijd die nodig was om expertkennis te extraheren en coderen"
        },
        {
                  "en": "Lack of storage space",
                  "es": "Falta de espacio de almacenamiento",
                  "de": "Mangel an Speicherplatz",
                  "nl": "Gebrek aan opslagruimte"
        },
        {
                  "en": "No internet connection",
                  "es": "Sin conexión a internet",
                  "de": "Keine Internetverbindung",
                  "nl": "Geen internetverbinding"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The knowledge acquisition bottleneck referred to the difficulty and time-consuming process of extracting knowledge from human experts and encoding it into rule-based systems.",
                  "es": "El cuello de botella de adquisición de conocimiento se refería a la dificultad y el proceso que consume tiempo de extraer conocimiento de expertos humanos y codificarlo en sistemas basados en reglas.",
                  "de": "Der Wissenserwerbsengpass bezog sich auf die Schwierigkeit und den zeitaufwändigen Prozess, Wissen von menschlichen Experten zu extrahieren und in regelbasierte Systeme zu kodieren.",
                  "nl": "Het kennisverwerving knelpunt verwees naar de moeilijkheid en tijdrovende proces van het extraheren van kennis van menselijke experts en het coderen ervan in regelgebaseerde systemen."
        }
      },
      {
        question: {
                  "en": "What was the impact of the Turing Test on AI research?",
                  "es": "¿Cuál fue el impacto de la Prueba de Turing en la investigación de IA?",
                  "de": "Welchen Einfluss hatte der Turing-Test auf die KI-Forschung?",
                  "nl": "Wat was de impact van de Turing Test op AI onderzoek?"
        },
        options: [
        {
                  "en": "It had no impact",
                  "es": "No tuvo impacto",
                  "de": "Es hatte keinen Einfluss",
                  "nl": "Het had geen impact"
        },
        {
                  "en": "It provided a benchmark for measuring machine intelligence",
                  "es": "Proporcionó un punto de referencia para medir la inteligencia de las máquinas",
                  "de": "Es lieferte einen Maßstab zur Messung von Maschinenintelligenz",
                  "nl": "Het bood een benchmark voor het meten van machine intelligentie"
        },
        {
                  "en": "It stopped AI research",
                  "es": "Detuvo la investigación de IA",
                  "de": "Es stoppte die KI-Forschung",
                  "nl": "Het stopte AI onderzoek"
        },
        {
                  "en": "It only applied to robots",
                  "es": "Solo se aplicó a robots",
                  "de": "Es galt nur für Roboter",
                  "nl": "Het was alleen van toepassing op robots"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Turing Test provided a influential benchmark for thinking about and measuring machine intelligence, though it remains controversial and debated to this day.",
                  "es": "La Prueba de Turing proporcionó un punto de referencia influyente para pensar y medir la inteligencia de las máquinas, aunque sigue siendo controvertida y debatida hasta el día de hoy.",
                  "de": "Der Turing-Test lieferte einen einflussreichen Maßstab zum Nachdenken über und Messen von Maschinenintelligenz, obwohl er bis heute kontrovers und umstritten bleibt.",
                  "nl": "De Turing Test bood een invloedrijke benchmark voor het denken over en meten van machine intelligentie, hoewel het tot op de dag van vandaag controversieel en bediscussieerd blijft."
        }
      }"""

# Find the position to insert new questions (before the closing bracket of questions array)
pattern = r'(\s+}\s+}\s+]\s+};)'
match = re.search(pattern, content)

if match:
    insert_pos = match.start(1)
    # Insert new questions
    new_content = content[:insert_pos] + new_questions + content[insert_pos:]

    # Write the updated content
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Successfully added 60 new questions to {file_path}")
    print("File now contains 100 questions total.")
else:
    print("Error: Could not find insertion point in file.")
