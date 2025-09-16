(function() {
    const level3 = {
        name: {
            en: "Programming and Software Development",
            es: "Programación y Desarrollo de Software",
            de: "Programmierung und Softwareentwicklung",
            nl: "Programmeren en Softwareontwikkeling"
        },
        questions: [
            {
                question: {
                    en: "What is programming?",
                    es: "¿Qué es la programación?",
                    de: "Was ist Programmierung?",
                    nl: "Wat is programmeren?"
                },
                options: [
                    { en: "Writing instructions for computers to follow", es: "Escribir instrucciones para que las computadoras las sigan", de: "Anweisungen für Computer schreiben", nl: "Instructies schrijven voor computers om te volgen" },
                    { en: "Playing video games", es: "Jugar videojuegos", de: "Videospiele spielen", nl: "Videogames spelen" },
                    { en: "Using social media", es: "Usar redes sociales", de: "Soziale Medien nutzen", nl: "Sociale media gebruiken" },
                    { en: "Watching TV shows", es: "Ver programas de TV", de: "Fernsehsendungen schauen", nl: "TV-programma's kijken" }
                ],
                correct: 0,
                explanation: {
                    en: "Programming is the process of creating instructions that tell a computer exactly what to do and how to do it.",
                    es: "La programación es el proceso de crear instrucciones que le dicen a una computadora exactamente qué hacer y cómo hacerlo.",
                    de: "Programmierung ist der Prozess, Anweisungen zu erstellen, die einem Computer genau sagen, was er tun soll und wie er es tun soll.",
                    nl: "Programmeren is het proces van het creëren van instructies die een computer precies vertellen wat te doen en hoe het te doen."
                }
            },
            {
                question: {
                    en: "What is a programming language?",
                    es: "¿Qué es un lenguaje de programación?",
                    de: "Was ist eine Programmiersprache?",
                    nl: "Wat is een programmeertaal?"
                },
                options: [
                    { en: "A formal language with syntax rules for writing code", es: "Un lenguaje formal con reglas de sintaxis para escribir código", de: "Eine formale Sprache mit Syntaxregeln zum Code schreiben", nl: "Een formele taal met syntaxregels voor het schrijven van code" },
                    { en: "A foreign language", es: "Un idioma extranjero", de: "Eine Fremdsprache", nl: "Een vreemde taal" },
                    { en: "A secret code", es: "Un código secreto", de: "Ein Geheimcode", nl: "Een geheime code" },
                    { en: "A type of computer", es: "Un tipo de computadora", de: "Eine Art Computer", nl: "Een type computer" }
                ],
                correct: 0,
                explanation: {
                    en: "A programming language is a formal system with specific syntax rules that programmers use to write computer code.",
                    es: "Un lenguaje de programación es un sistema formal con reglas de sintaxis específicas que los programadores usan para escribir código de computadora.",
                    de: "Eine Programmiersprache ist ein formales System mit spezifischen Syntaxregeln, das Programmierer verwenden, um Computercode zu schreiben.",
                    nl: "Een programmeertaal is een formeel systeem met specifieke syntaxregels die programmeurs gebruiken om computercode te schrijven."
                }
            },
            {
                question: {
                    en: "What is Python?",
                    es: "¿Qué es Python?",
                    de: "Was ist Python?",
                    nl: "Wat is Python?"
                },
                options: [
                    { en: "A popular programming language", es: "Un lenguaje de programación popular", de: "Eine beliebte Programmiersprache", nl: "Een populaire programmeertaal" },
                    { en: "A type of snake", es: "Un tipo de serpiente", de: "Eine Schlangenart", nl: "Een type slang" },
                    { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" },
                    { en: "A video game", es: "Un videojuego", de: "Ein Videospiel", nl: "Een videogame" }
                ],
                correct: 0,
                explanation: {
                    en: "Python is a versatile, easy-to-learn programming language widely used for web development, data science, and automation.",
                    es: "Python es un lenguaje de programación versátil y fácil de aprender ampliamente utilizado para desarrollo web, ciencia de datos y automatización.",
                    de: "Python ist eine vielseitige, leicht zu erlernende Programmiersprache, die weit verbreitet für Webentwicklung, Data Science und Automatisierung verwendet wird.",
                    nl: "Python is een veelzijdige, gemakkelijk te leren programmeertaal die veel gebruikt wordt voor webontwikkeling, data science en automatisering."
                }
            },
            {
                question: {
                    en: "What is JavaScript?",
                    es: "¿Qué es JavaScript?",
                    de: "Was ist JavaScript?",
                    nl: "Wat is JavaScript?"
                },
                options: [
                    { en: "A programming language for web development", es: "Un lenguaje de programación para desarrollo web", de: "Eine Programmiersprache für Webentwicklung", nl: "Een programmeertaal voor webontwikkeling" },
                    { en: "A type of coffee", es: "Un tipo de café", de: "Eine Kaffeesorte", nl: "Een type koffie" },
                    { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" },
                    { en: "A programming book", es: "Un libro de programación", de: "Ein Programmierbuch", nl: "Een programmeerboek" }
                ],
                correct: 0,
                explanation: {
                    en: "JavaScript is a programming language primarily used to create interactive and dynamic content on websites.",
                    es: "JavaScript es un lenguaje de programación principalmente usado para crear contenido interactivo y dinámico en sitios web.",
                    de: "JavaScript ist eine Programmiersprache, die hauptsächlich verwendet wird, um interaktive und dynamische Inhalte auf Websites zu erstellen.",
                    nl: "JavaScript is een programmeertaal die voornamelijk gebruikt wordt om interactieve en dynamische content op websites te maken."
                }
            },
            {
                question: {
                    en: "What is HTML?",
                    es: "¿Qué es HTML?",
                    de: "Was ist HTML?",
                    nl: "Wat is HTML?"
                },
                options: [
                    { en: "Markup language for creating web pages", es: "Lenguaje de marcado para crear páginas web", de: "Markup-Sprache zum Erstellen von Webseiten", nl: "Opmaaktaal voor het maken van webpagina's" },
                    { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
                    { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
                    { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
                ],
                correct: 0,
                explanation: {
                    en: "HTML is the markup language used to structure and organize content on web pages using tags and elements.",
                    es: "HTML es el lenguaje de marcado usado para estructurar y organizar contenido en páginas web usando etiquetas y elementos.",
                    de: "HTML ist die Markup-Sprache, die verwendet wird, um Inhalte auf Webseiten mit Tags und Elementen zu strukturieren und zu organisieren.",
                    nl: "HTML is de opmaaktaal die gebruikt wordt om content op webpagina's te structureren en organiseren met behulp van tags en elementen."
                }
            },
            {
                question: {
                    en: "What is CSS?",
                    es: "¿Qué es CSS?",
                    de: "Was ist CSS?",
                    nl: "Wat is CSS?"
                },
                options: [
                    { en: "Language for styling web pages", es: "Lenguaje para dar estilo a páginas web", de: "Sprache zum Stylen von Webseiten", nl: "Taal voor het stylen van webpagina's" },
                    { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
                    { en: "A web server", es: "Un servidor web", de: "Ein Webserver", nl: "Een webserver" },
                    { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" }
                ],
                correct: 0,
                explanation: {
                    en: "CSS is a styling language that controls the appearance, layout, and design of web pages created with HTML.",
                    es: "CSS es un lenguaje de estilos que controla la apariencia, diseño y presentación de páginas web creadas con HTML.",
                    de: "CSS ist eine Styling-Sprache, die das Aussehen, Layout und Design von mit HTML erstellten Webseiten steuert.",
                    nl: "CSS is een stylingtaal die het uiterlijk, de lay-out en het ontwerp van webpagina's gemaakt met HTML bestuurt."
                }
            },
            {
                question: {
                    en: "What is a variable in programming?",
                    es: "¿Qué es una variable en programación?",
                    de: "Was ist eine Variable in der Programmierung?",
                    nl: "Wat is een variabele in programmeren?"
                },
                options: [
                    { en: "A container for storing data values", es: "Un contenedor para almacenar valores de datos", de: "Ein Container zum Speichern von Datenwerten", nl: "Een container voor het opslaan van gegevenswaarden" },
                    { en: "A type of computer", es: "Un tipo de computadora", de: "Eine Art Computer", nl: "Een type computer" },
                    { en: "A programming mistake", es: "Un error de programación", de: "Ein Programmierfehler", nl: "Een programmeerfout" },
                    { en: "A software tool", es: "Una herramienta de software", de: "Ein Software-Tool", nl: "Een softwaretool" }
                ],
                correct: 0,
                explanation: {
                    en: "A variable is a named storage location that can hold different values throughout a program's execution.",
                    es: "Una variable es una ubicación de almacenamiento con nombre que puede contener diferentes valores durante la ejecución de un programa.",
                    de: "Eine Variable ist ein benannter Speicherplatz, der während der Ausführung eines Programms verschiedene Werte halten kann.",
                    nl: "Een variabele is een benoemde opslaglocatie die verschillende waarden kan bevatten tijdens de uitvoering van een programma."
                }
            },
            {
                question: {
                    en: "What is a function in programming?",
                    es: "¿Qué es una función en programación?",
                    de: "Was ist eine Funktion in der Programmierung?",
                    nl: "Wat is een functie in programmeren?"
                },
                options: [
                    { en: "A block of code that performs a specific task", es: "Un bloque de código que realiza una tarea específica", de: "Ein Codeblock, der eine bestimmte Aufgabe erfüllt", nl: "Een codeblok dat een specifieke taak uitvoert" },
                    { en: "A mathematical operation", es: "Una operación matemática", de: "Eine mathematische Operation", nl: "Een wiskundige bewerking" },
                    { en: "A type of variable", es: "Un tipo de variable", de: "Eine Art Variable", nl: "Een type variabele" },
                    { en: "A computer part", es: "Una parte de computadora", de: "Ein Computerteil", nl: "Een computeronderdeel" }
                ],
                correct: 0,
                explanation: {
                    en: "A function is a reusable block of code that performs a specific task and can be called from other parts of a program.",
                    es: "Una función es un bloque reutilizable de código que realiza una tarea específica y puede ser llamado desde otras partes de un programa.",
                    de: "Eine Funktion ist ein wiederverwendbarer Codeblock, der eine bestimmte Aufgabe erfüllt und von anderen Teilen eines Programms aufgerufen werden kann.",
                    nl: "Een functie is een herbruikbaar codeblok dat een specifieke taak uitvoert en aangeroepen kan worden vanuit andere delen van een programma."
                }
            },
            {
                question: {
                    en: "What is debugging?",
                    es: "¿Qué es la depuración?",
                    de: "Was ist Debugging?",
                    nl: "Wat is debuggen?"
                },
                options: [
                    { en: "Finding and fixing errors in code", es: "Encontrar y corregir errores en el código", de: "Fehler im Code finden und beheben", nl: "Fouten in code vinden en oplossen" },
                    { en: "Writing new code", es: "Escribir código nuevo", de: "Neuen Code schreiben", nl: "Nieuwe code schrijven" },
                    { en: "Deleting programs", es: "Eliminar programas", de: "Programme löschen", nl: "Programma's verwijderen" },
                    { en: "Installing software", es: "Instalar software", de: "Software installieren", nl: "Software installeren" }
                ],
                correct: 0,
                explanation: {
                    en: "Debugging is the process of identifying, locating, and fixing errors or bugs in computer code.",
                    es: "La depuración es el proceso de identificar, localizar y corregir errores o bugs en el código de computadora.",
                    de: "Debugging ist der Prozess des Identifizierens, Lokalisierens und Behebens von Fehlern oder Bugs im Computercode.",
                    nl: "Debuggen is het proces van het identificeren, lokaliseren en oplossen van fouten of bugs in computercode."
                }
            },
            {
                question: {
                    en: "What is an algorithm?",
                    es: "¿Qué es un algoritmo?",
                    de: "Was ist ein Algorithmus?",
                    nl: "Wat is een algoritme?"
                },
                options: [
                    { en: "Step-by-step instructions to solve a problem", es: "Instrucciones paso a paso para resolver un problema", de: "Schritt-für-Schritt-Anweisungen zur Problemlösung", nl: "Stap-voor-stap instructies om een probleem op te lossen" },
                    { en: "A type of computer", es: "Un tipo de computadora", de: "Eine Art Computer", nl: "Een type computer" },
                    { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
                    { en: "A software application", es: "Una aplicación de software", de: "Eine Softwareanwendung", nl: "Een softwaretoepassing" }
                ],
                correct: 0,
                explanation: {
                    en: "An algorithm is a set of step-by-step instructions designed to solve a specific problem or complete a task.",
                    es: "Un algoritmo es un conjunto de instrucciones paso a paso diseñadas para resolver un problema específico o completar una tarea.",
                    de: "Ein Algorithmus ist eine Reihe von Schritt-für-Schritt-Anweisungen, die entwickelt wurden, um ein bestimmtes Problem zu lösen oder eine Aufgabe zu erfüllen.",
                    nl: "Een algoritme is een set stap-voor-stap instructies ontworpen om een specifiek probleem op te lossen of een taak te voltooien."
                }
            },
            {
                question: {
                    en: "What is a loop in programming?",
                    es: "¿Qué es un bucle en programación?",
                    de: "Was ist eine Schleife in der Programmierung?",
                    nl: "Wat is een lus in programmeren?"
                },
                options: [
                    { en: "Code that repeats until a condition is met", es: "Código que se repite hasta que se cumple una condición", de: "Code, der sich wiederholt, bis eine Bedingung erfüllt ist", nl: "Code die herhaalt tot een voorwaarde wordt vervuld" },
                    { en: "A circular cable", es: "Un cable circular", de: "Ein kreisförmiges Kabel", nl: "Een ronde kabel" },
                    { en: "A type of variable", es: "Un tipo de variable", de: "Eine Art Variable", nl: "Een type variabele" },
                    { en: "A programming error", es: "Un error de programación", de: "Ein Programmierfehler", nl: "Een programmeerfout" }
                ],
                correct: 0,
                explanation: {
                    en: "A loop is a programming construct that repeats a block of code multiple times until a specific condition is satisfied.",
                    es: "Un bucle es una construcción de programación que repite un bloque de código múltiples veces hasta que se satisface una condición específica.",
                    de: "Eine Schleife ist ein Programmierungskonstrukt, das einen Codeblock mehrfach wiederholt, bis eine bestimmte Bedingung erfüllt ist.",
                    nl: "Een lus is een programmeerconstruct die een codeblok meerdere keren herhaalt tot een specifieke voorwaarde wordt vervuld."
                }
            },
            {
                question: {
                    en: "What is an if-statement?",
                    es: "¿Qué es una declaración if?",
                    de: "Was ist eine if-Anweisung?",
                    nl: "Wat is een if-statement?"
                },
                options: [
                    { en: "Code that executes only if a condition is true", es: "Código que se ejecuta solo si una condición es verdadera", de: "Code, der nur ausgeführt wird, wenn eine Bedingung wahr ist", nl: "Code die alleen wordt uitgevoerd als een voorwaarde waar is" },
                    { en: "A type of loop", es: "Un tipo de bucle", de: "Eine Art Schleife", nl: "Een type lus" },
                    { en: "A variable declaration", es: "Una declaración de variable", de: "Eine Variablendeklaration", nl: "Een variabele declaratie" },
                    { en: "A function definition", es: "Una definición de función", de: "Eine Funktionsdefinition", nl: "Een functiedefinitie" }
                ],
                correct: 0,
                explanation: {
                    en: "An if-statement is a conditional control structure that executes code only when a specified condition evaluates to true.",
                    es: "Una declaración if es una estructura de control condicional que ejecuta código solo cuando una condición específica se evalúa como verdadera.",
                    de: "Eine if-Anweisung ist eine bedingte Kontrollstruktur, die Code nur ausführt, wenn eine bestimmte Bedingung als wahr bewertet wird.",
                    nl: "Een if-statement is een voorwaardelijke controlestructuur die code alleen uitvoert wanneer een gespecificeerde voorwaarde als waar wordt geëvalueerd."
                }
            },
            {
                question: {
                    en: "What is a database?",
                    es: "¿Qué es una base de datos?",
                    de: "Was ist eine Datenbank?",
                    nl: "Wat is een database?"
                },
                options: [
                    { en: "Organized collection of data", es: "Colección organizada de datos", de: "Organisierte Sammlung von Daten", nl: "Georganiseerde verzameling van gegevens" },
                    { en: "A type of software", es: "Un tipo de software", de: "Eine Art Software", nl: "Een type software" },
                    { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
                    { en: "A computer component", es: "Un componente de computadora", de: "Eine Computerkomponente", nl: "Een computercomponent" }
                ],
                correct: 0,
                explanation: {
                    en: "A database is a structured collection of data that is organized and stored electronically for easy access and management.",
                    es: "Una base de datos es una colección estructurada de datos que se organiza y almacena electrónicamente para fácil acceso y gestión.",
                    de: "Eine Datenbank ist eine strukturierte Sammlung von Daten, die elektronisch organisiert und gespeichert wird für einfachen Zugriff und Verwaltung.",
                    nl: "Een database is een gestructureerde verzameling gegevens die elektronisch georganiseerd en opgeslagen wordt voor gemakkelijke toegang en beheer."
                }
            },
            {
                question: {
                    en: "What is SQL?",
                    es: "¿Qué es SQL?",
                    de: "Was ist SQL?",
                    nl: "Wat is SQL?"
                },
                options: [
                    { en: "Language for managing databases", es: "Lenguaje para gestionar bases de datos", de: "Sprache zum Verwalten von Datenbanken", nl: "Taal voor het beheren van databases" },
                    { en: "A programming language for games", es: "Un lenguaje de programación para juegos", de: "Eine Programmiersprache für Spiele", nl: "Een programmeertaal voor games" },
                    { en: "A web framework", es: "Un marco web", de: "Ein Web-Framework", nl: "Een webframework" },
                    { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
                ],
                correct: 0,
                explanation: {
                    en: "SQL (Structured Query Language) is a standardized language specifically designed for managing and querying relational databases.",
                    es: "SQL (Lenguaje de Consulta Estructurado) es un lenguaje estandarizado específicamente diseñado para gestionar y consultar bases de datos relacionales.",
                    de: "SQL (Structured Query Language) ist eine standardisierte Sprache, die speziell für die Verwaltung und Abfrage relationaler Datenbanken entwickelt wurde.",
                    nl: "SQL (Structured Query Language) is een gestandaardiseerde taal speciaal ontworpen voor het beheren en bevragen van relationele databases."
                }
            },
            {
                question: {
                    en: "What is an IDE?",
                    es: "¿Qué es un IDE?",
                    de: "Was ist eine IDE?",
                    nl: "Wat is een IDE?"
                },
                options: [
                    { en: "Integrated Development Environment for coding", es: "Entorno de Desarrollo Integrado para codificar", de: "Integrierte Entwicklungsumgebung zum Programmieren", nl: "Geïntegreerde Ontwikkelingsomgeving voor coderen" },
                    { en: "Internet Data Exchange", es: "Intercambio de Datos de Internet", de: "Internet-Datenaustausch", nl: "Internet Gegevensuitwisseling" },
                    { en: "Intelligent Design Engine", es: "Motor de Diseño Inteligente", de: "Intelligente Design-Engine", nl: "Intelligente Ontwerp Engine" },
                    { en: "Interactive Display Equipment", es: "Equipo de Visualización Interactiva", de: "Interaktive Anzeigeausrüstung", nl: "Interactieve Weergave Apparatuur" }
                ],
                correct: 0,
                explanation: {
                    en: "An IDE is a software application that provides comprehensive tools for software development, including a code editor, compiler, and debugger.",
                    es: "Un IDE es una aplicación de software que proporciona herramientas integrales para el desarrollo de software, incluyendo un editor de código, compilador y depurador.",
                    de: "Eine IDE ist eine Softwareanwendung, die umfassende Werkzeuge für die Softwareentwicklung bereitstellt, einschließlich Code-Editor, Compiler und Debugger.",
                    nl: "Een IDE is een softwaretoepassing die uitgebreide tools biedt voor softwareontwikkeling, inclusief een code-editor, compiler en debugger."
                }
            },
            {
                question: {
                    en: "What is source code?",
                    es: "¿Qué es el código fuente?",
                    de: "Was ist Quellcode?",
                    nl: "Wat is broncode?"
                },
                options: [
                    { en: "Human-readable instructions written by programmers", es: "Instrucciones legibles para humanos escritas por programadores", de: "Menschenlesbare Anweisungen von Programmierern geschrieben", nl: "Door mensen leesbare instructies geschreven door programmeurs" },
                    { en: "Machine code", es: "Código de máquina", de: "Maschinencode", nl: "Machinecode" },
                    { en: "Binary data", es: "Datos binarios", de: "Binäre Daten", nl: "Binaire gegevens" },
                    { en: "Encrypted information", es: "Información encriptada", de: "Verschlüsselte Informationen", nl: "Gecodeerde informatie" }
                ],
                correct: 0,
                explanation: {
                    en: "Source code is the human-readable version of a computer program written by programmers using programming languages.",
                    es: "El código fuente es la versión legible para humanos de un programa de computadora escrito por programadores usando lenguajes de programación.",
                    de: "Quellcode ist die menschenlesbare Version eines Computerprogramms, das von Programmierern mit Programmiersprachen geschrieben wurde.",
                    nl: "Broncode is de door mensen leesbare versie van een computerprogramma geschreven door programmeurs met programmeertalen."
                }
            },
            {
                question: {
                    en: "What is compilation?",
                    es: "¿Qué es la compilación?",
                    de: "Was ist Kompilierung?",
                    nl: "Wat is compilatie?"
                },
                options: [
                    { en: "Converting source code to machine code", es: "Convertir código fuente a código de máquina", de: "Quellcode in Maschinencode umwandeln", nl: "Broncode omzetten naar machinecode" },
                    { en: "Writing code", es: "Escribir código", de: "Code schreiben", nl: "Code schrijven" },
                    { en: "Testing software", es: "Probar software", de: "Software testen", nl: "Software testen" },
                    { en: "Documenting code", es: "Documentar código", de: "Code dokumentieren", nl: "Code documenteren" }
                ],
                correct: 0,
                explanation: {
                    en: "Compilation is the process of translating source code written in a high-level programming language into machine code that computers can execute.",
                    es: "La compilación es el proceso de traducir código fuente escrito en un lenguaje de programación de alto nivel a código de máquina que las computadoras pueden ejecutar.",
                    de: "Kompilierung ist der Prozess der Übersetzung von Quellcode, der in einer höheren Programmiersprache geschrieben wurde, in Maschinencode, den Computer ausführen können.",
                    nl: "Compilatie is het proces van het vertalen van broncode geschreven in een hoog-niveau programmeertaal naar machinecode die computers kunnen uitvoeren."
                }
            },
            {
                question: {
                    en: "What is interpretation in programming?",
                    es: "¿Qué es la interpretación en programación?",
                    de: "Was ist Interpretation in der Programmierung?",
                    nl: "Wat is interpretatie in programmeren?"
                },
                options: [
                    { en: "Executing code line by line without compilation", es: "Ejecutar código línea por línea sin compilación", de: "Code Zeile für Zeile ohne Kompilierung ausführen", nl: "Code regel voor regel uitvoeren zonder compilatie" },
                    { en: "Translating between languages", es: "Traducir entre idiomas", de: "Zwischen Sprachen übersetzen", nl: "Vertalen tussen talen" },
                    { en: "Explaining code to others", es: "Explicar código a otros", de: "Code anderen erklären", nl: "Code uitleggen aan anderen" },
                    { en: "Reading documentation", es: "Leer documentación", de: "Dokumentation lesen", nl: "Documentatie lezen" }
                ],
                correct: 0,
                explanation: {
                    en: "Interpretation is the process of executing code directly line by line without first compiling it into machine code.",
                    es: "La interpretación es el proceso de ejecutar código directamente línea por línea sin compilarlo primero a código de máquina.",
                    de: "Interpretation ist der Prozess der direkten Ausführung von Code Zeile für Zeile, ohne ihn zuerst in Maschinencode zu kompilieren.",
                    nl: "Interpretatie is het proces van het direct uitvoeren van code regel voor regel zonder het eerst te compileren naar machinecode."
                }
            },
            {
                question: {
                    en: "What is object-oriented programming?",
                    es: "¿Qué es la programación orientada a objetos?",
                    de: "Was ist objektorientierte Programmierung?",
                    nl: "Wat is objectgeoriënteerd programmeren?"
                },
                options: [
                    { en: "Programming paradigm based on objects and classes", es: "Paradigma de programación basado en objetos y clases", de: "Programmierparadigma basierend auf Objekten und Klassen", nl: "Programmeerparadigma gebaseerd op objecten en klassen" },
                    { en: "Programming with physical objects", es: "Programar con objetos físicos", de: "Programmieren mit physischen Objekten", nl: "Programmeren met fysieke objecten" },
                    { en: "Programming for specific goals", es: "Programar para objetivos específicos", de: "Programmieren für bestimmte Ziele", nl: "Programmeren voor specifieke doelen" },
                    { en: "Programming with graphics", es: "Programar con gráficos", de: "Programmieren mit Grafiken", nl: "Programmeren met graphics" }
                ],
                correct: 0,
                explanation: {
                    en: "Object-oriented programming is a programming paradigm that organizes code using objects and classes, promoting reusability and modularity.",
                    es: "La programación orientada a objetos es un paradigma de programación que organiza el código usando objetos y clases, promoviendo la reutilización y modularidad.",
                    de: "Objektorientierte Programmierung ist ein Programmierparadigma, das Code mit Objekten und Klassen organisiert und Wiederverwendbarkeit und Modularität fördert.",
                    nl: "Objectgeoriënteerd programmeren is een programmeerparadigma dat code organiseert met objecten en klassen, wat herbruikbaarheid en modulariteit bevordert."
                }
            },
            {
                question: {
                    en: "What is a class in object-oriented programming?",
                    es: "¿Qué es una clase en programación orientada a objetos?",
                    de: "Was ist eine Klasse in der objektorientierten Programmierung?",
                    nl: "Wat is een klasse in objectgeoriënteerd programmeren?"
                },
                options: [
                    { en: "A blueprint for creating objects", es: "Un plano para crear objetos", de: "Ein Bauplan zum Erstellen von Objekten", nl: "Een blauwdruk voor het maken van objecten" },
                    { en: "A group of students", es: "Un grupo de estudiantes", de: "Eine Gruppe von Studenten", nl: "Een groep studenten" },
                    { en: "A type of function", es: "Un tipo de función", de: "Eine Art Funktion", nl: "Een type functie" },
                    { en: "A programming error", es: "Un error de programación", de: "Ein Programmierfehler", nl: "Een programmeerfout" }
                ],
                correct: 0,
                explanation: {
                    en: "A class is a template or blueprint that defines the structure and behavior of objects in object-oriented programming.",
                    es: "Una clase es una plantilla o plano que define la estructura y comportamiento de objetos en programación orientada a objetos.",
                    de: "Eine Klasse ist eine Vorlage oder ein Bauplan, der die Struktur und das Verhalten von Objekten in der objektorientierten Programmierung definiert.",
                    nl: "Een klasse is een sjabloon of blauwdruk die de structuur en het gedrag van objecten in objectgeoriënteerd programmeren definieert."
                }
            },
            {
                question: {
                    en: "What is an object in programming?",
                    es: "¿Qué es un objeto en programación?",
                    de: "Was ist ein Objekt in der Programmierung?",
                    nl: "Wat is een object in programmeren?"
                },
                options: [
                    { en: "An instance of a class with data and methods", es: "Una instancia de una clase con datos y métodos", de: "Eine Instanz einer Klasse mit Daten und Methoden", nl: "Een instantie van een klasse met gegevens en methoden" },
                    { en: "A physical thing", es: "Una cosa física", de: "Ein physisches Ding", nl: "Een fysiek ding" },
                    { en: "A goal to achieve", es: "Un objetivo a lograr", de: "Ein zu erreichendes Ziel", nl: "Een te bereiken doel" },
                    { en: "A type of variable", es: "Un tipo de variable", de: "Eine Art Variable", nl: "Een type variabele" }
                ],
                correct: 0,
                explanation: {
                    en: "An object is a specific instance of a class that contains both data (attributes) and methods (functions) that operate on that data.",
                    es: "Un objeto es una instancia específica de una clase que contiene tanto datos (atributos) como métodos (funciones) que operan en esos datos.",
                    de: "Ein Objekt ist eine spezifische Instanz einer Klasse, die sowohl Daten (Attribute) als auch Methoden (Funktionen) enthält, die auf diese Daten wirken.",
                    nl: "Een object is een specifieke instantie van een klasse die zowel gegevens (attributen) als methoden (functies) bevat die op die gegevens werken."
                }
            },
            {
                question: {
                    en: "What is inheritance in object-oriented programming?",
                    es: "¿Qué es la herencia en programación orientada a objetos?",
                    de: "Was ist Vererbung in der objektorientierten Programmierung?",
                    nl: "Wat is overerving in objectgeoriënteerd programmeren?"
                },
                options: [
                    { en: "Classes acquiring properties from parent classes", es: "Clases que adquieren propiedades de clases padre", de: "Klassen erben Eigenschaften von Elternklassen", nl: "Klassen die eigenschappen overnemen van bovenliggende klassen" },
                    { en: "Getting money from relatives", es: "Obtener dinero de parientes", de: "Geld von Verwandten bekommen", nl: "Geld krijgen van familie" },
                    { en: "Copying code", es: "Copiar código", de: "Code kopieren", nl: "Code kopiëren" },
                    { en: "Sharing variables", es: "Compartir variables", de: "Variablen teilen", nl: "Variabelen delen" }
                ],
                correct: 0,
                explanation: {
                    en: "Inheritance allows a class to automatically acquire properties and methods from a parent class, promoting code reuse and hierarchy.",
                    es: "La herencia permite que una clase adquiera automáticamente propiedades y métodos de una clase padre, promoviendo la reutilización de código y jerarquía.",
                    de: "Vererbung ermöglicht es einer Klasse, automatisch Eigenschaften und Methoden von einer Elternklasse zu erwerben und fördert Code-Wiederverwendung und Hierarchie.",
                    nl: "Overerving stelt een klasse in staat om automatisch eigenschappen en methoden over te nemen van een bovenliggende klasse, wat codeherbrug en hiërarchie bevordert."
                }
            },
            {
                question: {
                    en: "What is version control?",
                    es: "¿Qué es el control de versiones?",
                    de: "Was ist Versionskontrolle?",
                    nl: "Wat is versiebeheer?"
                },
                options: [
                    { en: "System for tracking changes in code over time", es: "Sistema para rastrear cambios en el código a lo largo del tiempo", de: "System zur Verfolgung von Codeänderungen über die Zeit", nl: "Systeem voor het bijhouden van veranderingen in code over tijd" },
                    { en: "Controlling software versions", es: "Controlar versiones de software", de: "Software-Versionen kontrollieren", nl: "Softwareversies controleren" },
                    { en: "Managing computer updates", es: "Gestionar actualizaciones de computadora", de: "Computer-Updates verwalten", nl: "Computer updates beheren" },
                    { en: "Version numbers in programs", es: "Números de versión en programas", de: "Versionsnummern in Programmen", nl: "Versienummers in programma's" }
                ],
                correct: 0,
                explanation: {
                    en: "Version control is a system that tracks and manages changes to files over time, allowing developers to collaborate and maintain code history.",
                    es: "El control de versiones es un sistema que rastrea y gestiona cambios en archivos a lo largo del tiempo, permitiendo a los desarrolladores colaborar y mantener el historial del código.",
                    de: "Versionskontrolle ist ein System, das Änderungen an Dateien über die Zeit verfolgt und verwaltet, wodurch Entwickler zusammenarbeiten und die Code-Historie pflegen können.",
                    nl: "Versiebeheer is een systeem dat wijzigingen in bestanden over tijd bijhoudt en beheert, waardoor ontwikkelaars kunnen samenwerken en codegeschiedenis kunnen onderhouden."
                }
            },
            {
                question: {
                    en: "What is Git?",
                    es: "¿Qué es Git?",
                    de: "Was ist Git?",
                    nl: "Wat is Git?"
                },
                options: [
                    { en: "Popular version control system", es: "Sistema de control de versiones popular", de: "Beliebtes Versionskontrollsystem", nl: "Populair versiebeheersysteem" },
                    { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
                    { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" },
                    { en: "A text editor", es: "Un editor de texto", de: "Ein Texteditor", nl: "Een teksteditor" }
                ],
                correct: 0,
                explanation: {
                    en: "Git is a distributed version control system that enables developers to track changes in their code and collaborate efficiently on projects.",
                    es: "Git es un sistema de control de versiones distribuido que permite a los desarrolladores rastrear cambios en su código y colaborar eficientemente en proyectos.",
                    de: "Git ist ein verteiltes Versionskontrollsystem, das Entwicklern ermöglicht, Änderungen in ihrem Code zu verfolgen und effizient an Projekten zusammenzuarbeiten.",
                    nl: "Git is een gedistribueerd versiebeheersysteem dat ontwikkelaars in staat stelt wijzigingen in hun code bij te houden en efficiënt samen te werken aan projecten."
                }
            },
            {
                question: {
                    en: "What is GitHub?",
                    es: "¿Qué es GitHub?",
                    de: "Was ist GitHub?",
                    nl: "Wat is GitHub?"
                },
                options: [
                    { en: "Web platform for hosting Git repositories", es: "Plataforma web para alojar repositorios Git", de: "Web-Plattform zum Hosten von Git-Repositories", nl: "Webplatform voor het hosten van Git-repositories" },
                    { en: "A social media platform", es: "Una plataforma de redes sociales", de: "Eine Social-Media-Plattform", nl: "Een sociale media platform" },
                    { en: "A search engine", es: "Un motor de búsqueda", de: "Eine Suchmaschine", nl: "Een zoekmachine" },
                    { en: "A gaming platform", es: "Una plataforma de juegos", de: "Eine Gaming-Plattform", nl: "Een gaming platform" }
                ],
                correct: 0,
                explanation: {
                    en: "GitHub is a web-based platform that provides hosting for Git repositories and includes collaboration features for software development teams.",
                    es: "GitHub es una plataforma basada en web que proporciona hosting para repositorios Git e incluye características de colaboración para equipos de desarrollo de software.",
                    de: "GitHub ist eine webbasierte Plattform, die Hosting für Git-Repositories bereitstellt und Kollaborationsfunktionen für Softwareentwicklungsteams enthält.",
                    nl: "GitHub is een webgebaseerd platform dat hosting biedt voor Git-repositories en samenwerkingsfuncties bevat voor softwareontwikkelingsteams."
                }
            },
            {
                question: {
                    en: "What is an API?",
                    es: "¿Qué es una API?",
                    de: "Was ist eine API?",
                    nl: "Wat is een API?"
                },
                options: [
                    { en: "Application Programming Interface for communication", es: "Interfaz de Programación de Aplicaciones para comunicación", de: "Anwendungsprogrammierschnittstelle für Kommunikation", nl: "Applicatieprogrammeerinterface voor communicatie" },
                    { en: "A type of programming language", es: "Un tipo de lenguaje de programación", de: "Eine Art Programmiersprache", nl: "Een type programmeertaal" },
                    { en: "A software application", es: "Una aplicación de software", de: "Eine Softwareanwendung", nl: "Een softwaretoepassing" },
                    { en: "A computer component", es: "Un componente de computadora", de: "Eine Computerkomponente", nl: "Een computercomponent" }
                ],
                correct: 0,
                explanation: {
                    en: "An API is a set of protocols and tools that allows different software applications to communicate and exchange data with each other.",
                    es: "Una API es un conjunto de protocolos y herramientas que permite a diferentes aplicaciones de software comunicarse e intercambiar datos entre sí.",
                    de: "Eine API ist eine Sammlung von Protokollen und Werkzeugen, die es verschiedenen Softwareanwendungen ermöglicht, miteinander zu kommunizieren und Daten auszutauschen.",
                    nl: "Een API is een set protocollen en tools die verschillende softwaretoepassingen in staat stelt om met elkaar te communiceren en gegevens uit te wisselen."
                }
            },
            {
                question: {
                    en: "What is a framework in programming?",
                    es: "¿Qué es un framework en programación?",
                    de: "Was ist ein Framework in der Programmierung?",
                    nl: "Wat is een framework in programmeren?"
                },
                options: [
                    { en: "Pre-built code structure to speed development", es: "Estructura de código preconstruida para acelerar el desarrollo", de: "Vorgefertigte Code-Struktur zur Beschleunigung der Entwicklung", nl: "Voorgebouwde codestructuur om ontwikkeling te versnellen" },
                    { en: "A physical frame for computers", es: "Un marco físico para computadoras", de: "Ein physischer Rahmen für Computer", nl: "Een fysiek frame voor computers" },
                    { en: "A type of database", es: "Un tipo de base de datos", de: "Eine Art Datenbank", nl: "Een type database" },
                    { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" }
                ],
                correct: 0,
                explanation: {
                    en: "A framework is a pre-built code structure that provides a foundation for applications, speeding up development by providing common functionality.",
                    es: "Un framework es una estructura de código preconstruida que proporciona una base para aplicaciones, acelerando el desarrollo al proporcionar funcionalidad común.",
                    de: "Ein Framework ist eine vorgefertigte Code-Struktur, die eine Grundlage für Anwendungen bietet und die Entwicklung durch die Bereitstellung gemeinsamer Funktionalität beschleunigt.",
                    nl: "Een framework is een voorgebouwde codestructuur die een basis biedt voor applicaties, waardoor ontwikkeling wordt versneld door gemeenschappelijke functionaliteit te bieden."
                }
            },
            {
                question: {
                    en: "What is React?",
                    es: "¿Qué es React?",
                    de: "Was ist React?",
                    nl: "Wat is React?"
                },
                options: [
                    { en: "JavaScript library for building user interfaces", es: "Biblioteca de JavaScript para construir interfaces de usuario", de: "JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen", nl: "JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces" },
                    { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
                    { en: "A database system", es: "Un sistema de base de datos", de: "Ein Datenbanksystem", nl: "Een databasesysteem" },
                    { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" }
                ],
                correct: 0,
                explanation: {
                    en: "React is a popular JavaScript library developed by Facebook for building dynamic and interactive user interfaces in web applications.",
                    es: "React es una biblioteca de JavaScript popular desarrollada por Facebook para construir interfaces de usuario dinámicas e interactivas en aplicaciones web.",
                    de: "React ist eine beliebte JavaScript-Bibliothek, die von Facebook für den Aufbau dynamischer und interaktiver Benutzeroberflächen in Webanwendungen entwickelt wurde.",
                    nl: "React is een populaire JavaScript-bibliotheek ontwikkeld door Facebook voor het bouwen van dynamische en interactieve gebruikersinterfaces in webapplicaties."
                }
            },
            {
                question: {
                    en: "What is Node.js?",
                    es: "¿Qué es Node.js?",
                    de: "Was ist Node.js?",
                    nl: "Wat is Node.js?"
                },
                options: [
                    { en: "JavaScript runtime for server-side development", es: "Entorno de ejecución de JavaScript para desarrollo del lado del servidor", de: "JavaScript-Laufzeitumgebung für serverseitige Entwicklung", nl: "JavaScript-runtime voor server-side ontwikkeling" },
                    { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" },
                    { en: "A database", es: "Una base de datos", de: "Eine Datenbank", nl: "Een database" },
                    { en: "A mobile app", es: "Una aplicación móvil", de: "Eine mobile App", nl: "Een mobiele app" }
                ],
                correct: 0,
                explanation: {
                    en: "Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server side for backend development.",
                    es: "Node.js es un entorno de ejecución de JavaScript que permite a los desarrolladores ejecutar JavaScript en el lado del servidor para desarrollo backend.",
                    de: "Node.js ist eine JavaScript-Laufzeitumgebung, die es Entwicklern ermöglicht, JavaScript auf der Serverseite für Backend-Entwicklung auszuführen.",
                    nl: "Node.js is een JavaScript-runtime-omgeving die ontwikkelaars in staat stelt JavaScript aan de serverzijde uit te voeren voor backend-ontwikkeling."
                }
            },
            {
                question: {
                    en: "What is unit testing?",
                    es: "¿Qué es la prueba unitaria?",
                    de: "Was ist Unit-Testing?",
                    nl: "Wat is unit testing?"
                },
                options: [
                    { en: "Testing individual components of code", es: "Probar componentes individuales del código", de: "Einzelne Code-Komponenten testen", nl: "Individuele codeonderdelen testen" },
                    { en: "Testing the entire application", es: "Probar toda la aplicación", de: "Die gesamte Anwendung testen", nl: "De hele applicatie testen" },
                    { en: "Testing user interfaces", es: "Probar interfaces de usuario", de: "Benutzeroberflächen testen", nl: "Gebruikersinterfaces testen" },
                    { en: "Testing network connections", es: "Probar conexiones de red", de: "Netzwerkverbindungen testen", nl: "Netwerkverbindingen testen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is agile methodology?",
                    es: "¿Qué es la metodología ágil?",
                    de: "Was ist agile Methodik?",
                    nl: "Wat is agile methodologie?"
                },
                options: [
                    { en: "Iterative approach to software development", es: "Enfoque iterativo para el desarrollo de software", de: "Iterativer Ansatz zur Softwareentwicklung", nl: "Iteratieve benadering van softwareontwikkeling" },
                    { en: "Fast programming", es: "Programación rápida", de: "Schnelles Programmieren", nl: "Snel programmeren" },
                    { en: "Flexible computers", es: "Computadoras flexibles", de: "Flexible Computer", nl: "Flexibele computers" },
                    { en: "Quick testing", es: "Pruebas rápidas", de: "Schnelles Testen", nl: "Snel testen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a bug in programming?",
                    es: "¿Qué es un error en programación?",
                    de: "Was ist ein Bug in der Programmierung?",
                    nl: "Wat is een bug in programmeren?"
                },
                options: [
                    { en: "An error or flaw in code", es: "Un error o falla en el código", de: "Ein Fehler oder Mangel im Code", nl: "Een fout of gebrek in code" },
                    { en: "An insect in the computer", es: "Un insecto en la computadora", de: "Ein Insekt im Computer", nl: "Een insect in de computer" },
                    { en: "A feature request", es: "Una solicitud de función", de: "Eine Funktionsanfrage", nl: "Een functieverzoek" },
                    { en: "A programming tool", es: "Una herramienta de programación", de: "Ein Programmierwerkzeug", nl: "Een programmeergereedschap" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is refactoring?",
                    es: "¿Qué es la refactorización?",
                    de: "Was ist Refactoring?",
                    nl: "Wat is refactoring?"
                },
                options: [
                    { en: "Improving code structure without changing functionality", es: "Mejorar la estructura del código sin cambiar la funcionalidad", de: "Code-Struktur verbessern ohne Funktionalität zu ändern", nl: "Codestructuur verbeteren zonder functionaliteit te veranderen" },
                    { en: "Adding new features", es: "Agregar nuevas funciones", de: "Neue Funktionen hinzufügen", nl: "Nieuwe functies toevoegen" },
                    { en: "Deleting code", es: "Eliminar código", de: "Code löschen", nl: "Code verwijderen" },
                    { en: "Copying code", es: "Copiar código", de: "Code kopieren", nl: "Code kopiëren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is open source software?",
                    es: "¿Qué es el software de código abierto?",
                    de: "Was ist Open-Source-Software?",
                    nl: "Wat is open source software?"
                },
                options: [
                    { en: "Software with publicly available source code", es: "Software con código fuente disponible públicamente", de: "Software mit öffentlich verfügbarem Quellcode", nl: "Software met openbaar beschikbare broncode" },
                    { en: "Free software", es: "Software gratuito", de: "Kostenlose Software", nl: "Gratis software" },
                    { en: "Software for opening files", es: "Software para abrir archivos", de: "Software zum Öffnen von Dateien", nl: "Software voor het openen van bestanden" },
                    { en: "Software without security", es: "Software sin seguridad", de: "Software ohne Sicherheit", nl: "Software zonder beveiliging" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a repository in programming?",
                    es: "¿Qué es un repositorio en programación?",
                    de: "Was ist ein Repository in der Programmierung?",
                    nl: "Wat is een repository in programmeren?"
                },
                options: [
                    { en: "Storage location for code and project files", es: "Ubicación de almacenamiento para código y archivos de proyecto", de: "Speicherort für Code und Projektdateien", nl: "Opslaglocatie voor code en projectbestanden" },
                    { en: "A type of database", es: "Un tipo de base de datos", de: "Eine Art Datenbank", nl: "Een type database" },
                    { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
                    { en: "A web server", es: "Un servidor web", de: "Ein Webserver", nl: "Een webserver" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is machine learning programming?",
                    es: "¿Qué es la programación de aprendizaje automático?",
                    de: "Was ist Machine Learning Programmierung?",
                    nl: "Wat is machine learning programmeren?"
                },
                options: [
                    { en: "Creating programs that learn from data", es: "Crear programas que aprenden de los datos", de: "Programme erstellen, die aus Daten lernen", nl: "Programma's maken die leren van gegevens" },
                    { en: "Programming machines", es: "Programar máquinas", de: "Maschinen programmieren", nl: "Machines programmeren" },
                    { en: "Learning to use machines", es: "Aprender a usar máquinas", de: "Lernen, Maschinen zu benutzen", nl: "Leren machines te gebruiken" },
                    { en: "Teaching computers manually", es: "Enseñar computadoras manualmente", de: "Computer manuell unterrichten", nl: "Computers handmatig onderwijzen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is data structure in programming?",
                    es: "¿Qué es una estructura de datos en programación?",
                    de: "Was ist eine Datenstruktur in der Programmierung?",
                    nl: "Wat is een datastructuur in programmeren?"
                },
                options: [
                    { en: "Way of organizing and storing data efficiently", es: "Forma de organizar y almacenar datos eficientemente", de: "Art, Daten effizient zu organisieren und zu speichern", nl: "Manier om gegevens efficiënt te organiseren en op te slaan" },
                    { en: "Building structure for computers", es: "Estructura de construcción para computadoras", de: "Baustruktur für Computer", nl: "Bouwstructuur voor computers" },
                    { en: "Data about structures", es: "Datos sobre estructuras", de: "Daten über Strukturen", nl: "Gegevens over structuren" },
                    { en: "Physical data storage", es: "Almacenamiento físico de datos", de: "Physische Datenspeicherung", nl: "Fysieke gegevensopslag" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is recursion in programming?",
                    es: "¿Qué es la recursión en programación?",
                    de: "Was ist Rekursion in der Programmierung?",
                    nl: "Wat is recursie in programmeren?"
                },
                options: [
                    { en: "Function calling itself to solve problems", es: "Función que se llama a sí misma para resolver problemas", de: "Funktion ruft sich selbst auf, um Probleme zu lösen", nl: "Functie roept zichzelf aan om problemen op te lossen" },
                    { en: "Repeating the same task", es: "Repetir la misma tarea", de: "Dieselbe Aufgabe wiederholen", nl: "Dezelfde taak herhalen" },
                    { en: "Going backwards in code", es: "Ir hacia atrás en el código", de: "Im Code rückwärts gehen", nl: "Achteruit gaan in code" },
                    { en: "Cursing while programming", es: "Maldecir mientras programas", de: "Fluchen beim Programmieren", nl: "Vloeken tijdens programmeren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the difference between frontend and backend?",
                    es: "¿Cuál es la diferencia entre frontend y backend?",
                    de: "Was ist der Unterschied zwischen Frontend und Backend?",
                    nl: "Wat is het verschil tussen frontend en backend?"
                },
                options: [
                    { en: "Frontend is user interface, backend is server logic", es: "Frontend es interfaz de usuario, backend es lógica del servidor", de: "Frontend ist Benutzeroberfläche, Backend ist Serverlogik", nl: "Frontend is gebruikersinterface, backend is serverlogica" },
                    { en: "Frontend is harder than backend", es: "Frontend es más difícil que backend", de: "Frontend ist schwerer als Backend", nl: "Frontend is moeilijker dan backend" },
                    { en: "Frontend is for beginners", es: "Frontend es para principiantes", de: "Frontend ist für Anfänger", nl: "Frontend is voor beginners" },
                    { en: "Backend is visual programming", es: "Backend es programación visual", de: "Backend ist visuelle Programmierung", nl: "Backend is visueel programmeren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a library in programming?",
                    es: "¿Qué es una biblioteca en programación?",
                    de: "Was ist eine Bibliothek in der Programmierung?",
                    nl: "Wat is een bibliotheek in programmeren?"
                },
                options: [
                    { en: "Collection of reusable code functions", es: "Colección de funciones de código reutilizables", de: "Sammlung wiederverwendbarer Code-Funktionen", nl: "Verzameling herbruikbare codefuncties" },
                    { en: "Building where books are stored", es: "Edificio donde se almacenan libros", de: "Gebäude, wo Bücher aufbewahrt werden", nl: "Gebouw waar boeken worden bewaard" },
                    { en: "List of programming books", es: "Lista de libros de programación", de: "Liste von Programmierbüchern", nl: "Lijst van programmeerboeken" },
                    { en: "Documentation system", es: "Sistema de documentación", de: "Dokumentationssystem", nl: "Documentatiesysteem" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is deployment in software development?",
                    es: "¿Qué es la implementación en el desarrollo de software?",
                    de: "Was ist Deployment in der Softwareentwicklung?",
                    nl: "Wat is deployment in softwareontwikkeling?"
                },
                options: [
                    { en: "Making software available for users", es: "Hacer que el software esté disponible para los usuarios", de: "Software für Benutzer verfügbar machen", nl: "Software beschikbaar maken voor gebruikers" },
                    { en: "Writing code", es: "Escribir código", de: "Code schreiben", nl: "Code schrijven" },
                    { en: "Testing software", es: "Probar software", de: "Software testen", nl: "Software testen" },
                    { en: "Designing user interface", es: "Diseñar interfaz de usuario", de: "Benutzeroberfläche entwerfen", nl: "Gebruikersinterface ontwerpen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is continuous integration (CI)?",
                    es: "¿Qué es la integración continua (CI)?",
                    de: "Was ist Continuous Integration (CI)?",
                    nl: "Wat is continue integratie (CI)?"
                },
                options: [
                    { en: "Automatically testing and merging code changes", es: "Probar y fusionar automáticamente cambios de código", de: "Automatisches Testen und Zusammenführen von Code-Änderungen", nl: "Automatisch testen en samenvoegen van codewijzigingen" },
                    { en: "Working without breaks", es: "Trabajar sin descansos", de: "Arbeiten ohne Pausen", nl: "Werken zonder pauzes" },
                    { en: "Integrating hardware", es: "Integrar hardware", de: "Hardware integrieren", nl: "Hardware integreren" },
                    { en: "Constant learning", es: "Aprendizaje constante", de: "Ständiges Lernen", nl: "Constant leren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What programming skills are most important for beginners?",
                    es: "¿Qué habilidades de programación son más importantes para principiantes?",
                    de: "Welche Programmierfähigkeiten sind für Anfänger am wichtigsten?",
                    nl: "Welke programmeervaardigheden zijn het belangrijkst voor beginners?"
                },
                options: [
                    { en: "Problem-solving, logical thinking, and patience", es: "Resolución de problemas, pensamiento lógico y paciencia", de: "Problemlösung, logisches Denken und Geduld", nl: "Probleemoplossing, logisch denken en geduld" },
                    { en: "Typing fast", es: "Escribir rápido", de: "Schnell tippen", nl: "Snel typen" },
                    { en: "Knowing all programming languages", es: "Conocer todos los lenguajes de programación", de: "Alle Programmiersprachen kennen", nl: "Alle programmeertalen kennen" },
                    { en: "Having expensive equipment", es: "Tener equipo costoso", de: "Teure Ausrüstung haben", nl: "Dure apparatuur hebben" }
                ],
                correct: 0,
                explanation: {
                    en: "The most important programming skills for beginners are problem-solving abilities, logical thinking to structure solutions, and patience to debug and learn from mistakes.",
                    es: "Las habilidades de programación más importantes para principiantes son capacidades de resolución de problemas, pensamiento lógico para estructurar soluciones, y paciencia para depurar y aprender de los errores.",
                    de: "Die wichtigsten Programmierfähigkeiten für Anfänger sind Problemlösungsfähigkeiten, logisches Denken zur Strukturierung von Lösungen und Geduld zum Debuggen und Lernen aus Fehlern.",
                    nl: "De belangrijkste programmeervaardigheden voor beginners zijn probleemoplossende vaardigheden, logisch denken om oplossingen te structureren, en geduld om te debuggen en te leren van fouten."
                }
            },
            {
                question: {
                    en: "What is pseudocode?",
                    es: "¿Qué es pseudocódigo?",
                    de: "Was ist Pseudocode?",
                    nl: "Wat is pseudocode?"
                },
                options: [
                    { en: "Human-readable description of programming logic", es: "Descripción legible por humanos de la lógica de programación", de: "Menschenlesbare Beschreibung der Programmierlogik", nl: "Door mensen leesbare beschrijving van programmeerlogica" },
                    { en: "Fake programming code", es: "Código de programación falso", de: "Falscher Programmcode", nl: "Neppe programmeercode" },
                    { en: "Secret programming language", es: "Lenguaje de programación secreto", de: "Geheime Programmiersprache", nl: "Geheime programmeertaal" },
                    { en: "Broken code that doesn't work", es: "Código roto que no funciona", de: "Kaputter Code, der nicht funktioniert", nl: "Kapotte code die niet werkt" }
                ],
                correct: 0,
                explanation: {
                    en: "Pseudocode is a plain language description of programming steps that helps plan algorithms before writing actual code.",
                    es: "El pseudocódigo es una descripción en lenguaje simple de los pasos de programación que ayuda a planificar algoritmos antes de escribir código real.",
                    de: "Pseudocode ist eine einfache Sprachbeschreibung von Programmierschritten, die hilft, Algorithmen zu planen, bevor echter Code geschrieben wird.",
                    nl: "Pseudocode is een beschrijving in gewone taal van programmeerstappen die helpt bij het plannen van algoritmen voordat echte code wordt geschreven."
                }
            },
            {
                question: {
                    en: "What is object-oriented programming (OOP)?",
                    es: "¿Qué es la programación orientada a objetos (POO)?",
                    de: "Was ist objektorientierte Programmierung (OOP)?",
                    nl: "Wat is objectgeoriënteerd programmeren (OOP)?"
                },
                options: [
                    { en: "Programming paradigm based on objects and classes", es: "Paradigma de programación basado en objetos y clases", de: "Programmierparadigma basierend auf Objekten und Klassen", nl: "Programmeerparadigma gebaseerd op objecten en klassen" },
                    { en: "Programming for objects only", es: "Programación solo para objetos", de: "Programmierung nur für Objekte", nl: "Programmeren alleen voor objecten" },
                    { en: "Programming physical objects", es: "Programar objetos físicos", de: "Physische Objekte programmieren", nl: "Fysieke objecten programmeren" },
                    { en: "Programming with pictures of objects", es: "Programar con imágenes de objetos", de: "Programmieren mit Bildern von Objekten", nl: "Programmeren met afbeeldingen van objecten" }
                ],
                correct: 0,
                explanation: {
                    en: "OOP organizes code around objects that contain data (attributes) and functions (methods), making programs more modular and reusable.",
                    es: "POO organiza el código alrededor de objetos que contienen datos (atributos) y funciones (métodos), haciendo los programas más modulares y reutilizables.",
                    de: "OOP organisiert Code um Objekte herum, die Daten (Attribute) und Funktionen (Methoden) enthalten, wodurch Programme modularer und wiederverwendbarer werden.",
                    nl: "OOP organiseert code rond objecten die gegevens (attributen) en functies (methoden) bevatten, waardoor programma's modulairder en herbruikbaarder worden."
                }
            },
            {
                question: {
                    en: "What is computational thinking?",
                    es: "¿Qué es el pensamiento computacional?",
                    de: "Was ist computergestütztes Denken?",
                    nl: "Wat is computationeel denken?"
                },
                options: [
                    { en: "Problem-solving process using computer science concepts", es: "Proceso de resolución de problemas usando conceptos de ciencias de la computación", de: "Problemlösungsprozess unter Verwendung von Informatikkonzepten", nl: "Probleemoplossingsproces met behulp van computerwetenschapsconcepten" },
                    { en: "Thinking like a computer", es: "Pensar como una computadora", de: "Wie ein Computer denken", nl: "Denken zoals een computer" },
                    { en: "Using computers for thinking", es: "Usar computadoras para pensar", de: "Computer zum Denken verwenden", nl: "Computers gebruiken om te denken" },
                    { en: "Mathematical calculations only", es: "Solo cálculos matemáticos", de: "Nur mathematische Berechnungen", nl: "Alleen wiskundige berekeningen" }
                ],
                correct: 0,
                explanation: {
                    en: "Computational thinking involves decomposing problems, pattern recognition, abstraction, and algorithm design - key skills for programming.",
                    es: "El pensamiento computacional involucra descomponer problemas, reconocimiento de patrones, abstracción y diseño de algoritmos - habilidades clave para la programación.",
                    de: "Computergestütztes Denken umfasst Problemzerlegung, Mustererkennung, Abstraktion und Algorithmusdesign - Schlüsselfähigkeiten für die Programmierung.",
                    nl: "Computationeel denken omvat het ontleden van problemen, patroonherkenning, abstractie en algoritmeontwerp - belangrijke vaardigheden voor programmeren."
                }
            },
            {
                question: {
                    en: "What is pair programming?",
                    es: "¿Qué es la programación en pareja?",
                    de: "Was ist Pair Programming?",
                    nl: "Wat is pair programming?"
                },
                options: [
                    { en: "Two programmers working together on the same code", es: "Dos programadores trabajando juntos en el mismo código", de: "Zwei Programmierer arbeiten zusammen am gleichen Code", nl: "Twee programmeurs werken samen aan dezelfde code" },
                    { en: "Programming for couples", es: "Programación para parejas", de: "Programmierung für Paare", nl: "Programmeren voor koppels" },
                    { en: "Programming in pairs of lines", es: "Programar en pares de líneas", de: "Programmieren in Zeilenpaaren", nl: "Programmeren in paren van regels" },
                    { en: "Using two computers", es: "Usar dos computadoras", de: "Zwei Computer verwenden", nl: "Twee computers gebruiken" }
                ],
                correct: 0,
                explanation: {
                    en: "Pair programming involves two developers sharing one workstation: one writes code (driver) while the other reviews and suggests (navigator).",
                    es: "La programación en pareja involucra dos desarrolladores compartiendo una estación de trabajo: uno escribe código (conductor) mientras el otro revisa y sugiere (navegador).",
                    de: "Pair Programming umfasst zwei Entwickler, die sich einen Arbeitsplatz teilen: einer schreibt Code (Driver), während der andere überprüft und vorschlägt (Navigator).",
                    nl: "Pair programming houdt twee ontwikkelaars in die een werkstation delen: een schrijft code (bestuurder) terwijl de ander bekijkt en suggereert (navigator)."
                }
            },
            {
                question: {
                    en: "What is code documentation?",
                    es: "¿Qué es la documentación de código?",
                    de: "Was ist Code-Dokumentation?",
                    nl: "Wat is codedocumentatie?"
                },
                options: [
                    { en: "Written explanations of how code works", es: "Explicaciones escritas de cómo funciona el código", de: "Schriftliche Erklärungen, wie Code funktioniert", nl: "Geschreven uitleg van hoe code werkt" },
                    { en: "Legal documents for code", es: "Documentos legales para código", de: "Rechtsdokumente für Code", nl: "Juridische documenten voor code" },
                    { en: "Code stored in documents", es: "Código almacenado en documentos", de: "Code in Dokumenten gespeichert", nl: "Code opgeslagen in documenten" },
                    { en: "Printing code on paper", es: "Imprimir código en papel", de: "Code auf Papier drucken", nl: "Code afdrukken op papier" }
                ],
                correct: 0,
                explanation: {
                    en: "Code documentation includes comments, README files, and guides that explain what code does and how to use it.",
                    es: "La documentación de código incluye comentarios, archivos README y guías que explican qué hace el código y cómo usarlo.",
                    de: "Code-Dokumentation umfasst Kommentare, README-Dateien und Anleitungen, die erklären, was Code tut und wie man ihn verwendet.",
                    nl: "Codedocumentatie omvat opmerkingen, README-bestanden en gidsen die uitleggen wat code doet en hoe het te gebruiken."
                }
            },
            {
                question: {
                    en: "What is programming syntax?",
                    es: "¿Qué es la sintaxis de programación?",
                    de: "Was ist Programmier-Syntax?",
                    nl: "Wat is programmeersyntax?"
                },
                options: [
                    { en: "Rules for writing valid code in a programming language", es: "Reglas para escribir código válido en un lenguaje de programación", de: "Regeln für das Schreiben gültigen Codes in einer Programmiersprache", nl: "Regels voor het schrijven van geldige code in een programmeertaal" },
                    { en: "Making programs look nice", es: "Hacer que los programas se vean bien", de: "Programme schön aussehen lassen", nl: "Programma's er mooi uit laten zien" },
                    { en: "Speed of program execution", es: "Velocidad de ejecución del programa", de: "Geschwindigkeit der Programmausführung", nl: "Snelheid van programma-uitvoering" },
                    { en: "Programming taxes", es: "Impuestos de programación", de: "Programmier-Steuern", nl: "Programmeerbelastingen" }
                ],
                correct: 0,
                explanation: {
                    en: "Programming syntax defines the correct structure, keywords, and symbols that must be used for code to compile and run properly.",
                    es: "La sintaxis de programación define la estructura correcta, palabras clave y símbolos que deben usarse para que el código compile y ejecute correctamente.",
                    de: "Programmier-Syntax definiert die korrekte Struktur, Schlüsselwörter und Symbole, die verwendet werden müssen, damit Code richtig kompiliert und ausgeführt wird.",
                    nl: "Programmeersyntax definieert de juiste structuur, trefwoorden en symbolen die moeten worden gebruikt opdat code correct compileert en draait."
                }
            },
            {
                question: {
                    en: "What is the importance of coding standards?",
                    es: "¿Cuál es la importancia de los estándares de codificación?",
                    de: "Was ist die Bedeutung von Coding-Standards?",
                    nl: "Wat is het belang van codeerstandaarden?"
                },
                options: [
                    { en: "Ensuring code consistency and readability across teams", es: "Asegurar la consistencia y legibilidad del código entre equipos", de: "Sicherstellen von Code-Konsistenz und Lesbarkeit in Teams", nl: "Zorgen voor codeconsistentie en leesbaarheid binnen teams" },
                    { en: "Making programs run faster", es: "Hacer que los programas funcionen más rápido", de: "Programme schneller laufen lassen", nl: "Programma's sneller laten werken" },
                    { en: "Preventing all bugs", es: "Prevenir todos los errores", de: "Alle Bugs verhindern", nl: "Alle bugs voorkomen" },
                    { en: "Legal requirements for programming", es: "Requisitos legales para la programación", de: "Rechtliche Anforderungen für die Programmierung", nl: "Juridische vereisten voor programmeren" }
                ],
                correct: 0,
                explanation: {
                    en: "Coding standards help teams write consistent, maintainable code that's easier to understand, debug, and modify by different developers.",
                    es: "Los estándares de codificación ayudan a los equipos a escribir código consistente y mantenible que es más fácil de entender, depurar y modificar por diferentes desarrolladores.",
                    de: "Coding-Standards helfen Teams dabei, konsistenten, wartbaren Code zu schreiben, der für verschiedene Entwickler leichter zu verstehen, zu debuggen und zu modifizieren ist.",
                    nl: "Codeerstandaarden helpen teams om consistente, onderhoudbare code te schrijven die gemakkelijker te begrijpen, debuggen en wijzigen is door verschillende ontwikkelaars."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/technology', level3);
    }
})();