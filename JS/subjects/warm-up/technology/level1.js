(function() {
    const level1 = {
        name: {
            en: "Basic Computer and Internet Knowledge",
            es: "Conocimientos Básicos de Computadora e Internet",
            de: "Grundlegende Computer- und Internetkenntnisse",
            nl: "Basiskennis van Computer en Internet"
        },
        questions: [
            {
                question: {
                    en: "What does CPU stand for?",
                    es: "¿Qué significa CPU?",
                    de: "Wofür steht CPU?",
                    nl: "Waar staat CPU voor?"
                },
                options: [
                    { en: "Central Processing Unit", es: "Unidad Central de Procesamiento", de: "Zentrale Verarbeitungseinheit", nl: "Centrale Verwerkingseenheid" },
                    { en: "Computer Personal Unit", es: "Unidad Personal de Computadora", de: "Computer Personal Einheit", nl: "Computer Persoonlijke Eenheid" },
                    { en: "Central Power Unit", es: "Unidad Central de Energía", de: "Zentrale Energieeinheit", nl: "Centrale Stroomunit" },
                    { en: "Control Processing Unit", es: "Unidad de Procesamiento de Control", de: "Kontrollverarbeitungseinheit", nl: "Controle Verwerkingseenheid" }
                ],
                correct: 0,
                explanation: {
                    en: "CPU stands for Central Processing Unit, which is the main processor that executes instructions in a computer.",
                    es: "CPU significa Unidad Central de Procesamiento, que es el procesador principal que ejecuta instrucciones en una computadora.",
                    de: "CPU steht für Zentrale Verarbeitungseinheit, der Hauptprozessor, der Anweisungen in einem Computer ausführt.",
                    nl: "CPU staat voor Centrale Verwerkingseenheid, de hoofdprocessor die instructies uitvoert in een computer."
                }
            },
            {
                question: {
                    en: "What is RAM used for in a computer?",
                    es: "¿Para qué se usa la RAM en una computadora?",
                    de: "Wofür wird RAM in einem Computer verwendet?",
                    nl: "Waarvoor wordt RAM gebruikt in een computer?"
                },
                options: [
                    { en: "Temporary memory storage", es: "Almacenamiento temporal de memoria", de: "Temporäre Speicherung", nl: "Tijdelijke geheugenopslag" },
                    { en: "Permanent file storage", es: "Almacenamiento permanente de archivos", de: "Permanente Dateispeicherung", nl: "Permanente bestandsopslag" },
                    { en: "Internet connection", es: "Conexión a internet", de: "Internetverbindung", nl: "Internetverbinding" },
                    { en: "Screen display", es: "Pantalla de visualización", de: "Bildschirmanzeige", nl: "Schermweergave" }
                ],
                correct: 0,
                explanation: {
                    en: "RAM is temporary memory storage that holds data and programs currently being used by the computer.",
                    es: "RAM es almacenamiento temporal de memoria que contiene datos y programas que la computadora está usando actualmente.",
                    de: "RAM ist temporärer Speicher, der Daten und Programme speichert, die derzeit vom Computer verwendet werden.",
                    nl: "RAM is tijdelijke geheugenopslag die gegevens en programma's bevat die momenteel door de computer worden gebruikt."
                }
            },
            {
                question: {
                    en: "What does WWW stand for?",
                    es: "¿Qué significa WWW?",
                    de: "Wofür steht WWW?",
                    nl: "Waar staat WWW voor?"
                },
                options: [
                    { en: "World Wide Web", es: "Red Mundial", de: "World Wide Web", nl: "World Wide Web" },
                    { en: "Wide World Web", es: "Web del Mundo Amplio", de: "Weite Welt Web", nl: "Wijde Wereld Web" },
                    { en: "Web World Wide", es: "Web Mundial Amplio", de: "Web Welt Weit", nl: "Web Wereld Wijd" },
                    { en: "Worldwide Web", es: "Web Mundial", de: "Weltweites Web", nl: "Wereldwijd Web" }
                ],
                correct: 0,
                explanation: {
                    en: "WWW stands for World Wide Web, which is the system of interconnected web pages accessible through the internet.",
                    es: "WWW significa Red Mundial, que es el sistema de páginas web interconectadas accesibles a través de internet.",
                    de: "WWW steht für World Wide Web, das System miteinander verbundener Webseiten, die über das Internet zugänglich sind.",
                    nl: "WWW staat voor World Wide Web, het systeem van onderling verbonden webpagina's toegankelijk via internet."
                }
            },
            {
                question: {
                    en: "Which device is used to input text into a computer?",
                    es: "¿Qué dispositivo se usa para introducir texto en una computadora?",
                    de: "Welches Gerät wird verwendet, um Text in einen Computer einzugeben?",
                    nl: "Welk apparaat wordt gebruikt om tekst in een computer in te voeren?"
                },
                options: [
                    { en: "Keyboard", es: "Teclado", de: "Tastatur", nl: "Toetsenbord" },
                    { en: "Monitor", es: "Monitor", de: "Monitor", nl: "Monitor" },
                    { en: "Speaker", es: "Altavoz", de: "Lautsprecher", nl: "Luidspreker" },
                    { en: "Printer", es: "Impresora", de: "Drucker", nl: "Printer" }
                ],
                correct: 0,
                explanation: {
                    en: "A keyboard is the primary input device for typing text and entering commands into a computer.",
                    es: "Un teclado es el dispositivo de entrada principal para escribir texto e introducir comandos en una computadora.",
                    de: "Eine Tastatur ist das primäre Eingabegerät zum Tippen von Text und Eingeben von Befehlen in einen Computer.",
                    nl: "Een toetsenbord is het primaire invoerapparaat voor het typen van tekst en het invoeren van commando's in een computer."
                }
            },
            {
                question: {
                    en: "What is a mouse used for?",
                    es: "¿Para qué se usa un ratón?",
                    de: "Wofür wird eine Maus verwendet?",
                    nl: "Waarvoor wordt een muis gebruikt?"
                },
                options: [
                    { en: "Pointing and clicking on screen", es: "Señalar y hacer clic en la pantalla", de: "Zeigen und Klicken auf dem Bildschirm", nl: "Wijzen en klikken op het scherm" },
                    { en: "Typing text", es: "Escribir texto", de: "Text eingeben", nl: "Tekst typen" },
                    { en: "Playing sounds", es: "Reproducir sonidos", de: "Töne abspielen", nl: "Geluiden afspelen" },
                    { en: "Printing documents", es: "Imprimir documentos", de: "Dokumente drucken", nl: "Documenten printen" }
                ],
                correct: 0,
                explanation: {
                    en: "A computer mouse is used to point at objects on the screen and click to select or activate them.",
                    es: "Un ratón de computadora se usa para señalar objetos en la pantalla y hacer clic para seleccionarlos o activarlos.",
                    de: "Eine Computermaus wird verwendet, um auf Objekte auf dem Bildschirm zu zeigen und zu klicken, um sie auszuwählen oder zu aktivieren.",
                    nl: "Een computermuis wordt gebruikt om objecten op het scherm aan te wijzen en te klikken om ze te selecteren of activeren."
                }
            },
            {
                question: {
                    en: "What is software?",
                    es: "¿Qué es el software?",
                    de: "Was ist Software?",
                    nl: "Wat is software?"
                },
                options: [
                    { en: "Computer programs and applications", es: "Programas y aplicaciones de computadora", de: "Computerprogramme und Anwendungen", nl: "Computerprogramma's en applicaties" },
                    { en: "Physical computer parts", es: "Partes físicas de la computadora", de: "Physische Computerteile", nl: "Fysieke computeronderdelen" },
                    { en: "Internet cables", es: "Cables de internet", de: "Internetkabel", nl: "Internetkabels" },
                    { en: "Computer screen", es: "Pantalla de computadora", de: "Computerbildschirm", nl: "Computerscherm" }
                ],
                correct: 0,
                explanation: {
                    en: "Software refers to computer programs and applications that tell the hardware what to do.",
                    es: "El software se refiere a programas y aplicaciones de computadora que le dicen al hardware qué hacer.",
                    de: "Software bezieht sich auf Computerprogramme und Anwendungen, die der Hardware sagen, was zu tun ist.",
                    nl: "Software verwijst naar computerprogramma's en applicaties die de hardware vertellen wat te doen."
                }
            },
            {
                question: {
                    en: "What is hardware?",
                    es: "¿Qué es el hardware?",
                    de: "Was ist Hardware?",
                    nl: "Wat is hardware?"
                },
                options: [
                    { en: "Physical computer components", es: "Componentes físicos de la computadora", de: "Physische Computerkomponenten", nl: "Fysieke computercomponenten" },
                    { en: "Computer programs", es: "Programas de computadora", de: "Computerprogramme", nl: "Computerprogramma's" },
                    { en: "Internet websites", es: "Sitios web de internet", de: "Internet-Websites", nl: "Internet websites" },
                    { en: "Email messages", es: "Mensajes de correo electrónico", de: "E-Mail-Nachrichten", nl: "E-mailberichten" }
                ],
                correct: 0,
                explanation: {
                    en: "Hardware consists of the physical components of a computer, like the processor, memory, and storage devices.",
                    es: "El hardware consiste en los componentes físicos de una computadora, como el procesador, memoria y dispositivos de almacenamiento.",
                    de: "Hardware besteht aus den physischen Komponenten eines Computers, wie Prozessor, Speicher und Speichergeräten.",
                    nl: "Hardware bestaat uit de fysieke componenten van een computer, zoals de processor, geheugen en opslagapparaten."
                }
            },
            {
                question: {
                    en: "What does an operating system do?",
                    es: "¿Qué hace un sistema operativo?",
                    de: "Was macht ein Betriebssystem?",
                    nl: "Wat doet een besturingssysteem?"
                },
                options: [
                    { en: "Manages computer resources and runs programs", es: "Administra recursos de la computadora y ejecuta programas", de: "Verwaltet Computerressourcen und führt Programme aus", nl: "Beheert computerbronnen en voert programma's uit" },
                    { en: "Creates documents", es: "Crea documentos", de: "Erstellt Dokumente", nl: "Maakt documenten" },
                    { en: "Plays music", es: "Reproduce música", de: "Spielt Musik", nl: "Speelt muziek" },
                    { en: "Takes photos", es: "Toma fotos", de: "Macht Fotos", nl: "Maakt foto's" }
                ],
                correct: 0,
                explanation: {
                    en: "An operating system manages computer resources and provides a platform for other programs to run.",
                    es: "Un sistema operativo administra los recursos de la computadora y proporciona una plataforma para que otros programas se ejecuten.",
                    de: "Ein Betriebssystem verwaltet Computerressourcen und stellt eine Plattform für andere Programme bereit.",
                    nl: "Een besturingssysteem beheert computerbronnen en biedt een platform voor andere programma's om te draaien."
                }
            },
            {
                question: {
                    en: "What is Windows?",
                    es: "¿Qué es Windows?",
                    de: "Was ist Windows?",
                    nl: "Wat is Windows?"
                },
                options: [
                    { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" },
                    { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" },
                    { en: "A word processor", es: "Un procesador de texto", de: "Ein Textverarbeitungsprogramm", nl: "Een tekstverwerker" },
                    { en: "A search engine", es: "Un motor de búsqueda", de: "Eine Suchmaschine", nl: "Een zoekmachine" }
                ],
                correct: 0,
                explanation: {
                    en: "Windows is a popular operating system developed by Microsoft that manages computer operations.",
                    es: "Windows es un sistema operativo popular desarrollado por Microsoft que administra las operaciones de la computadora.",
                    de: "Windows ist ein beliebtes Betriebssystem von Microsoft, das Computeroperationen verwaltet.",
                    nl: "Windows is een populair besturingssysteem ontwikkeld door Microsoft dat computerbewerkingen beheert."
                }
            },
            {
                question: {
                    en: "What is a file?",
                    es: "¿Qué es un archivo?",
                    de: "Was ist eine Datei?",
                    nl: "Wat is een bestand?"
                },
                options: [
                    { en: "A collection of data stored on a computer", es: "Una colección de datos almacenados en una computadora", de: "Eine Sammlung von Daten, die auf einem Computer gespeichert ist", nl: "Een verzameling gegevens opgeslagen op een computer" },
                    { en: "A physical folder", es: "Una carpeta física", de: "Ein physischer Ordner", nl: "Een fysieke map" },
                    { en: "A computer screen", es: "Una pantalla de computadora", de: "Ein Computerbildschirm", nl: "Een computerscherm" },
                    { en: "A keyboard key", es: "Una tecla del teclado", de: "Eine Tastaturtaste", nl: "Een toetsenbordtoets" }
                ],
                correct: 0,
                explanation: {
                    en: "A file is a collection of data or information stored on a computer with a specific name.",
                    es: "Un archivo es una colección de datos o información almacenada en una computadora con un nombre específico.",
                    de: "Eine Datei ist eine Sammlung von Daten oder Informationen, die auf einem Computer mit einem bestimmten Namen gespeichert ist.",
                    nl: "Een bestand is een verzameling gegevens of informatie opgeslagen op een computer met een specifieke naam."
                }
            },
            {
                question: {
                    en: "What is a folder?",
                    es: "¿Qué es una carpeta?",
                    de: "Was ist ein Ordner?",
                    nl: "Wat is een map?"
                },
                options: [
                    { en: "A container for organizing files", es: "Un contenedor para organizar archivos", de: "Ein Behälter zur Organisation von Dateien", nl: "Een container voor het organiseren van bestanden" },
                    { en: "A type of computer", es: "Un tipo de computadora", de: "Eine Art Computer", nl: "Een type computer" },
                    { en: "A printing device", es: "Un dispositivo de impresión", de: "Ein Druckgerät", nl: "Een afdrukapparaat" },
                    { en: "An internet connection", es: "Una conexión a internet", de: "Eine Internetverbindung", nl: "Een internetverbinding" }
                ],
                correct: 0,
                explanation: {
                    en: "A folder is a container used to organize and group related files together on a computer.",
                    es: "Una carpeta es un contenedor usado para organizar y agrupar archivos relacionados en una computadora.",
                    de: "Ein Ordner ist ein Behälter, der verwendet wird, um verwandte Dateien auf einem Computer zu organisieren und zu gruppieren.",
                    nl: "Een map is een container gebruikt om gerelateerde bestanden samen te organiseren en groeperen op een computer."
                }
            },
            {
                question: {
                    en: "What does 'save' mean when working with files?",
                    es: "¿Qué significa 'guardar' cuando se trabaja con archivos?",
                    de: "Was bedeutet 'speichern' beim Arbeiten mit Dateien?",
                    nl: "Wat betekent 'opslaan' bij het werken met bestanden?"
                },
                options: [
                    { en: "Store the file permanently", es: "Almacenar el archivo permanentemente", de: "Die Datei dauerhaft speichern", nl: "Het bestand permanent opslaan" },
                    { en: "Delete the file", es: "Eliminar el archivo", de: "Die Datei löschen", nl: "Het bestand verwijderen" },
                    { en: "Print the file", es: "Imprimir el archivo", de: "Die Datei drucken", nl: "Het bestand afdrukken" },
                    { en: "Send the file by email", es: "Enviar el archivo por correo electrónico", de: "Die Datei per E-Mail senden", nl: "Het bestand per e-mail versturen" }
                ],
                correct: 0,
                explanation: {
                    en: "Saving means storing a file permanently on the computer so the information is kept for later use.",
                    es: "Guardar significa almacenar un archivo permanentemente en la computadora para que la información se conserve para uso posterior.",
                    de: "Speichern bedeutet, eine Datei dauerhaft auf dem Computer zu speichern, damit die Informationen für spätere Verwendung aufbewahrt werden.",
                    nl: "Opslaan betekent een bestand permanent op de computer opslaan zodat de informatie bewaard blijft voor later gebruik."
                }
            },
            {
                question: {
                    en: "What is copy and paste?",
                    es: "¿Qué es copiar y pegar?",
                    de: "Was ist Kopieren und Einfügen?",
                    nl: "Wat is kopiëren en plakken?"
                },
                options: [
                    { en: "Duplicate and place text or files", es: "Duplicar y colocar texto o archivos", de: "Text oder Dateien duplizieren und platzieren", nl: "Tekst of bestanden dupliceren en plaatsen" },
                    { en: "Delete files", es: "Eliminar archivos", de: "Dateien löschen", nl: "Bestanden verwijderen" },
                    { en: "Open programs", es: "Abrir programas", de: "Programme öffnen", nl: "Programma's openen" },
                    { en: "Connect to internet", es: "Conectar a internet", de: "Mit dem Internet verbinden", nl: "Verbinden met internet" }
                ],
                correct: 0,
                explanation: {
                    en: "Copy and paste allows you to duplicate text or files and place them in a different location.",
                    es: "Copiar y pegar te permite duplicar texto o archivos y colocarlos en una ubicación diferente.",
                    de: "Kopieren und Einfügen ermöglicht es, Text oder Dateien zu duplizieren und an einer anderen Stelle zu platzieren.",
                    nl: "Kopiëren en plakken stelt je in staat om tekst of bestanden te dupliceren en op een andere locatie te plaatsen."
                }
            },
            {
                question: {
                    en: "What is the desktop?",
                    es: "¿Qué es el escritorio?",
                    de: "Was ist der Desktop?",
                    nl: "Wat is het bureaublad?"
                },
                options: [
                    { en: "The main screen with icons and background", es: "La pantalla principal con iconos y fondo", de: "Der Hauptbildschirm mit Symbolen und Hintergrund", nl: "Het hoofdscherm met pictogrammen en achtergrond" },
                    { en: "A physical desk", es: "Un escritorio físico", de: "Ein physischer Schreibtisch", nl: "Een fysiek bureau" },
                    { en: "A computer program", es: "Un programa de computadora", de: "Ein Computerprogramm", nl: "Een computerprogramma" },
                    { en: "A storage device", es: "Un dispositivo de almacenamiento", de: "Ein Speichergerät", nl: "Een opslagapparaat" }
                ],
                correct: 0,
                explanation: {
                    en: "The desktop is the main screen you see when you start your computer, with icons and a background image.",
                    es: "El escritorio es la pantalla principal que ves cuando inicias tu computadora, con iconos e imagen de fondo.",
                    de: "Der Desktop ist der Hauptbildschirm, den du siehst, wenn du deinen Computer startest, mit Symbolen und einem Hintergrundbild.",
                    nl: "Het bureaublad is het hoofdscherm dat je ziet wanneer je je computer start, met pictogrammen en een achtergrondafbeelding."
                }
            },
            {
                question: {
                    en: "What is an icon?",
                    es: "¿Qué es un icono?",
                    de: "Was ist ein Symbol?",
                    nl: "Wat is een pictogram?"
                },
                options: [
                    { en: "A small picture representing a program or file", es: "Una pequeña imagen que representa un programa o archivo", de: "Ein kleines Bild, das ein Programm oder eine Datei repräsentiert", nl: "Een kleine afbeelding die een programma of bestand vertegenwoordigt" },
                    { en: "A type of computer", es: "Un tipo de computadora", de: "Eine Art Computer", nl: "Een type computer" },
                    { en: "A keyboard shortcut", es: "Un atajo de teclado", de: "Eine Tastenkombination", nl: "Een toetsenbordsnelkoppeling" },
                    { en: "An internet address", es: "Una dirección de internet", de: "Eine Internetadresse", nl: "Een internetadres" }
                ],
                correct: 0,
                explanation: {
                    en: "An icon is a small picture or symbol that represents a program, file, or function on your computer.",
                    es: "Un icono es una pequeña imagen o símbolo que representa un programa, archivo o función en tu computadora.",
                    de: "Ein Symbol ist ein kleines Bild oder Zeichen, das ein Programm, eine Datei oder eine Funktion auf deinem Computer repräsentiert.",
                    nl: "Een pictogram is een kleine afbeelding of symbool dat een programma, bestand of functie op je computer vertegenwoordigt."
                }
            },
            {
                question: {
                    en: "What is a web browser?",
                    es: "¿Qué es un navegador web?",
                    de: "Was ist ein Webbrowser?",
                    nl: "Wat is een webbrowser?"
                },
                options: [
                    { en: "A program to view websites", es: "Un programa para ver sitios web", de: "Ein Programm zum Betrachten von Websites", nl: "Een programma om websites te bekijken" },
                    { en: "A type of computer", es: "Un tipo de computadora", de: "Eine Art Computer", nl: "Een type computer" },
                    { en: "A storage device", es: "Un dispositivo de almacenamiento", de: "Ein Speichergerät", nl: "Een opslagapparaat" },
                    { en: "A printing program", es: "Un programa de impresión", de: "Ein Druckprogramm", nl: "Een afdrukprogramma" }
                ],
                correct: 0,
                explanation: {
                    en: "A web browser is a program that allows you to access and view websites on the internet.",
                    es: "Un navegador web es un programa que te permite acceder y ver sitios web en internet.",
                    de: "Ein Webbrowser ist ein Programm, das es dir ermöglicht, auf Websites im Internet zuzugreifen und sie anzuzeigen.",
                    nl: "Een webbrowser is een programma waarmee je websites op internet kunt openen en bekijken."
                }
            },
            {
                question: {
                    en: "What is Google?",
                    es: "¿Qué es Google?",
                    de: "Was ist Google?",
                    nl: "Wat is Google?"
                },
                options: [
                    { en: "A search engine", es: "Un motor de búsqueda", de: "Eine Suchmaschine", nl: "Een zoekmachine" },
                    { en: "An operating system", es: "Un sistema operativo", de: "Ein Betriebssystem", nl: "Een besturingssysteem" },
                    { en: "A word processor", es: "Un procesador de texto", de: "Ein Textverarbeitungsprogramm", nl: "Een tekstverwerker" },
                    { en: "A computer brand", es: "Una marca de computadora", de: "Eine Computermarke", nl: "Een computermerk" }
                ],
                correct: 0,
                explanation: {
                    en: "Google is a popular search engine that helps you find information on the internet.",
                    es: "Google es un motor de búsqueda popular que te ayuda a encontrar información en internet.",
                    de: "Google ist eine beliebte Suchmaschine, die dir hilft, Informationen im Internet zu finden.",
                    nl: "Google is een populaire zoekmachine die je helpt informatie op internet te vinden."
                }
            },
            {
                question: {
                    en: "What is email?",
                    es: "¿Qué es el correo electrónico?",
                    de: "Was ist E-Mail?",
                    nl: "Wat is e-mail?"
                },
                options: [
                    { en: "Electronic mail sent over the internet", es: "Correo electrónico enviado por internet", de: "Elektronische Post, die über das Internet gesendet wird", nl: "Elektronische post verzonden via internet" },
                    { en: "Physical mail", es: "Correo físico", de: "Physische Post", nl: "Fysieke post" },
                    { en: "A computer program", es: "Un programa de computadora", de: "Ein Computerprogramm", nl: "Een computerprogramma" },
                    { en: "A storage device", es: "Un dispositivo de almacenamiento", de: "Ein Speichergerät", nl: "Een opslagapparaat" }
                ],
                correct: 0,
                explanation: {
                    en: "Email is electronic mail that allows you to send and receive messages over the internet.",
                    es: "El correo electrónico es correo electrónico que te permite enviar y recibir mensajes a través de internet.",
                    de: "E-Mail ist elektronische Post, die es dir ermöglicht, Nachrichten über das Internet zu senden und zu empfangen.",
                    nl: "E-mail is elektronische post waarmee je berichten kunt verzenden en ontvangen via internet."
                }
            },
            {
                question: {
                    en: "What does @ symbol mean in an email address?",
                    es: "¿Qué significa el símbolo @ en una dirección de correo electrónico?",
                    de: "Was bedeutet das @-Symbol in einer E-Mail-Adresse?",
                    nl: "Wat betekent het @-symbool in een e-mailadres?"
                },
                options: [
                    { en: "It separates username from domain", es: "Separa el nombre de usuario del dominio", de: "Es trennt Benutzername vom Domain", nl: "Het scheidt gebruikersnaam van domein" },
                    { en: "It means 'and'", es: "Significa 'y'", de: "Es bedeutet 'und'", nl: "Het betekent 'en'" },
                    { en: "It's just decoration", es: "Es solo decoración", de: "Es ist nur Dekoration", nl: "Het is alleen decoratie" },
                    { en: "It means 'at home'", es: "Significa 'en casa'", de: "Es bedeutet 'zu Hause'", nl: "Het betekent 'thuis'" }
                ],
                correct: 0,
                explanation: {
                    en: "The @ symbol separates the username from the domain name in an email address.",
                    es: "El símbolo @ separa el nombre de usuario del nombre de dominio en una dirección de correo electrónico.",
                    de: "Das @-Symbol trennt den Benutzernamen vom Domainnamen in einer E-Mail-Adresse.",
                    nl: "Het @-symbool scheidt de gebruikersnaam van de domeinnaam in een e-mailadres."
                }
            },
            {
                question: {
                    en: "What is a password?",
                    es: "¿Qué es una contraseña?",
                    de: "Was ist ein Passwort?",
                    nl: "Wat is een wachtwoord?"
                },
                options: [
                    { en: "A secret code to access accounts", es: "Un código secreto para acceder a cuentas", de: "Ein geheimer Code zum Zugriff auf Konten", nl: "Een geheime code om toegang te krijgen tot accounts" },
                    { en: "A type of software", es: "Un tipo de software", de: "Eine Art Software", nl: "Een type software" },
                    { en: "A computer part", es: "Una parte de computadora", de: "Ein Computerteil", nl: "Een computeronderdeel" },
                    { en: "An internet address", es: "Una dirección de internet", de: "Eine Internetadresse", nl: "Een internetadres" }
                ],
                correct: 0,
                explanation: {
                    en: "A password is a secret code or phrase used to protect and access your personal accounts.",
                    es: "Una contraseña es un código secreto o frase usado para proteger y acceder a tus cuentas personales.",
                    de: "Ein Passwort ist ein geheimer Code oder Satz, der verwendet wird, um deine persönlichen Konten zu schützen und darauf zuzugreifen.",
                    nl: "Een wachtwoord is een geheime code of zin die wordt gebruikt om je persoonlijke accounts te beschermen en te openen."
                }
            },
            {
                question: {
                    en: "What should a good password have?",
                    es: "¿Qué debería tener una buena contraseña?",
                    de: "Was sollte ein gutes Passwort haben?",
                    nl: "Wat zou een goed wachtwoord moeten hebben?"
                },
                options: [
                    { en: "Letters, numbers, and symbols", es: "Letras, números y símbolos", de: "Buchstaben, Zahlen und Symbole", nl: "Letters, cijfers en symbolen" },
                    { en: "Only your name", es: "Solo tu nombre", de: "Nur deinen Namen", nl: "Alleen je naam" },
                    { en: "Only numbers", es: "Solo números", de: "Nur Zahlen", nl: "Alleen cijfers" },
                    { en: "Only letters", es: "Solo letras", de: "Nur Buchstaben", nl: "Alleen letters" }
                ],
                correct: 0,
                explanation: {
                    en: "A good password should have a mix of letters, numbers, and symbols to make it secure.",
                    es: "Una buena contraseña debe tener una mezcla de letras, números y símbolos para hacerla segura.",
                    de: "Ein gutes Passwort sollte eine Mischung aus Buchstaben, Zahlen und Symbolen haben, um es sicher zu machen.",
                    nl: "Een goed wachtwoord moet een mix van letters, cijfers en symbolen hebben om het veilig te maken."
                }
            },
            {
                question: {
                    en: "What is a USB port?",
                    es: "¿Qué es un puerto USB?",
                    de: "Was ist ein USB-Anschluss?",
                    nl: "Wat is een USB-poort?"
                },
                options: [
                    { en: "A connection point for external devices", es: "Un punto de conexión para dispositivos externos", de: "Ein Anschlusspunkt für externe Geräte", nl: "Een aansluitpunt voor externe apparaten" },
                    { en: "A type of memory", es: "Un tipo de memoria", de: "Eine Art Speicher", nl: "Een type geheugen" },
                    { en: "A software program", es: "Un programa de software", de: "Ein Softwareprogramm", nl: "Een softwareprogramma" },
                    { en: "A screen display", es: "Una pantalla de visualización", de: "Eine Bildschirmanzeige", nl: "Een schermweergave" }
                ],
                correct: 0,
                explanation: {
                    en: "A USB port is a connection point where you can plug in external devices like flash drives and keyboards.",
                    es: "Un puerto USB es un punto de conexión donde puedes conectar dispositivos externos como memorias USB y teclados.",
                    de: "Ein USB-Anschluss ist ein Verbindungspunkt, an den du externe Geräte wie USB-Sticks und Tastaturen anschließen kannst.",
                    nl: "Een USB-poort is een aansluitpunt waar je externe apparaten zoals USB-sticks en toetsenborden kunt aansluiten."
                }
            },
            {
                question: {
                    en: "What is Wi-Fi?",
                    es: "¿Qué es Wi-Fi?",
                    de: "Was ist Wi-Fi?",
                    nl: "Wat is Wi-Fi?"
                },
                options: [
                    { en: "Wireless internet connection", es: "Conexión inalámbrica a internet", de: "Drahtlose Internetverbindung", nl: "Draadloze internetverbinding" },
                    { en: "A type of computer", es: "Un tipo de computadora", de: "Eine Art Computer", nl: "Een type computer" },
                    { en: "A software program", es: "Un programa de software", de: "Ein Softwareprogramm", nl: "Een softwareprogramma" },
                    { en: "A storage device", es: "Un dispositivo de almacenamiento", de: "Ein Speichergerät", nl: "Een opslagapparaat" }
                ],
                correct: 0,
                explanation: {
                    en: "Wi-Fi is a wireless internet connection that lets devices connect to the internet without cables.",
                    es: "Wi-Fi es una conexión inalámbrica a internet que permite a los dispositivos conectarse a internet sin cables.",
                    de: "Wi-Fi ist eine drahtlose Internetverbindung, die es Geräten ermöglicht, sich ohne Kabel mit dem Internet zu verbinden.",
                    nl: "Wi-Fi is een draadloze internetverbinding waarmee apparaten zonder kabels verbinding kunnen maken met internet."
                }
            },
            {
                question: {
                    en: "What is a download?",
                    es: "¿Qué es una descarga?",
                    de: "Was ist ein Download?",
                    nl: "Wat is een download?"
                },
                options: [
                    { en: "Getting files from the internet to your computer", es: "Obtener archivos de internet a tu computadora", de: "Dateien aus dem Internet auf deinen Computer holen", nl: "Bestanden van internet naar je computer halen" },
                    { en: "Deleting files", es: "Eliminar archivos", de: "Dateien löschen", nl: "Bestanden verwijderen" },
                    { en: "Printing documents", es: "Imprimir documentos", de: "Dokumente drucken", nl: "Documenten printen" },
                    { en: "Creating new files", es: "Crear nuevos archivos", de: "Neue Dateien erstellen", nl: "Nieuwe bestanden maken" }
                ],
                correct: 0,
                explanation: {
                    en: "A download is the process of getting files from the internet and saving them to your computer.",
                    es: "Una descarga es el proceso de obtener archivos de internet y guardarlos en tu computadora.",
                    de: "Ein Download ist der Vorgang, Dateien aus dem Internet zu holen und auf deinem Computer zu speichern.",
                    nl: "Een download is het proces van bestanden van internet halen en opslaan op je computer."
                }
            },
            {
                question: {
                    en: "What is an upload?",
                    es: "¿Qué es una subida?",
                    de: "Was ist ein Upload?",
                    nl: "Wat is een upload?"
                },
                options: [
                    { en: "Sending files from your computer to the internet", es: "Enviar archivos de tu computadora a internet", de: "Dateien von deinem Computer ins Internet senden", nl: "Bestanden van je computer naar internet sturen" },
                    { en: "Opening files", es: "Abrir archivos", de: "Dateien öffnen", nl: "Bestanden openen" },
                    { en: "Saving files", es: "Guardar archivos", de: "Dateien speichern", nl: "Bestanden opslaan" },
                    { en: "Copying files", es: "Copiar archivos", de: "Dateien kopieren", nl: "Bestanden kopiëren" }
                ],
                correct: 0,
                explanation: {
                    en: "An upload is the process of sending files from your computer to the internet or another computer.",
                    es: "Una subida es el proceso de enviar archivos desde tu computadora a internet u otra computadora.",
                    de: "Ein Upload ist der Vorgang, Dateien von deinem Computer ins Internet oder zu einem anderen Computer zu senden.",
                    nl: "Een upload is het proces van bestanden van je computer naar internet of een andere computer sturen."
                }
            },
            {
                question: {
                    en: "What is a website?",
                    es: "¿Qué es un sitio web?",
                    de: "Was ist eine Website?",
                    nl: "Wat is een website?"
                },
                options: [
                    { en: "A collection of web pages on the internet", es: "Una colección de páginas web en internet", de: "Eine Sammlung von Webseiten im Internet", nl: "Een verzameling webpagina's op internet" },
                    { en: "A computer program", es: "Un programa de computadora", de: "Ein Computerprogramm", nl: "Een computerprogramma" },
                    { en: "A type of file", es: "Un tipo de archivo", de: "Eine Art Datei", nl: "Een type bestand" },
                    { en: "A storage device", es: "Un dispositivo de almacenamiento", de: "Ein Speichergerät", nl: "Een opslagapparaat" }
                ],
                correct: 0,
                explanation: {
                    en: "A website is a collection of related web pages that can be accessed through the internet.",
                    es: "Un sitio web es una colección de páginas web relacionadas a las que se puede acceder a través de internet.",
                    de: "Eine Website ist eine Sammlung verwandter Webseiten, auf die über das Internet zugegriffen werden kann.",
                    nl: "Een website is een verzameling gerelateerde webpagina's die toegankelijk zijn via internet."
                }
            },
            {
                question: {
                    en: "What is a URL?",
                    es: "¿Qué es una URL?",
                    de: "Was ist eine URL?",
                    nl: "Wat is een URL?"
                },
                options: [
                    { en: "A website address", es: "Una dirección de sitio web", de: "Eine Website-Adresse", nl: "Een websiteadres" },
                    { en: "A computer virus", es: "Un virus de computadora", de: "Ein Computervirus", nl: "Een computervirus" },
                    { en: "A software program", es: "Un programa de software", de: "Ein Softwareprogramm", nl: "Een softwareprogramma" },
                    { en: "A type of memory", es: "Un tipo de memoria", de: "Eine Art Speicher", nl: "Een type geheugen" }
                ],
                correct: 0,
                explanation: {
                    en: "A URL is a website address that tells your browser where to find a specific webpage on the internet.",
                    es: "Una URL es una dirección de sitio web que le dice a tu navegador dónde encontrar una página web específica en internet.",
                    de: "Eine URL ist eine Website-Adresse, die deinem Browser sagt, wo eine bestimmte Webseite im Internet zu finden ist.",
                    nl: "Een URL is een websiteadres dat je browser vertelt waar een specifieke webpagina op internet te vinden is."
                }
            },
            {
                question: {
                    en: "What does 'online' mean?",
                    es: "¿Qué significa 'en línea'?",
                    de: "Was bedeutet 'online'?",
                    nl: "Wat betekent 'online'?"
                },
                options: [
                    { en: "Connected to the internet", es: "Conectado a internet", de: "Mit dem Internet verbunden", nl: "Verbonden met internet" },
                    { en: "Computer is turned off", es: "La computadora está apagada", de: "Computer ist ausgeschaltet", nl: "Computer is uitgeschakeld" },
                    { en: "Using a printer", es: "Usando una impresora", de: "Einen Drucker verwenden", nl: "Een printer gebruiken" },
                    { en: "Reading books", es: "Leyendo libros", de: "Bücher lesen", nl: "Boeken lezen" }
                ],
                correct: 0,
                explanation: {
                    en: "Being online means your device is connected to the internet and can access websites and services.",
                    es: "Estar en línea significa que tu dispositivo está conectado a internet y puede acceder a sitios web y servicios.",
                    de: "Online sein bedeutet, dass dein Gerät mit dem Internet verbunden ist und auf Websites und Dienste zugreifen kann.",
                    nl: "Online zijn betekent dat je apparaat verbonden is met internet en websites en diensten kan openen."
                }
            },
            {
                question: {
                    en: "What does 'offline' mean?",
                    es: "¿Qué significa 'fuera de línea'?",
                    de: "Was bedeutet 'offline'?",
                    nl: "Wat betekent 'offline'?"
                },
                options: [
                    { en: "Not connected to the internet", es: "No conectado a internet", de: "Nicht mit dem Internet verbunden", nl: "Niet verbonden met internet" },
                    { en: "Computer is on", es: "La computadora está encendida", de: "Computer ist eingeschaltet", nl: "Computer is aangeschakeld" },
                    { en: "Typing text", es: "Escribiendo texto", de: "Text eingeben", nl: "Tekst typen" },
                    { en: "Playing games", es: "Jugando juegos", de: "Spiele spielen", nl: "Spelletjes spelen" }
                ],
                correct: 0,
                explanation: {
                    en: "Being offline means your device is not connected to the internet and cannot access websites or online services.",
                    es: "Estar fuera de línea significa que tu dispositivo no está conectado a internet y no puede acceder a sitios web o servicios en línea.",
                    de: "Offline sein bedeutet, dass dein Gerät nicht mit dem Internet verbunden ist und nicht auf Websites oder Online-Dienste zugreifen kann.",
                    nl: "Offline zijn betekent dat je apparaat niet verbonden is met internet en geen toegang heeft tot websites of online diensten."
                }
            },
            {
                question: {
                    en: "What is a search engine?",
                    es: "¿Qué es un motor de búsqueda?",
                    de: "Was ist eine Suchmaschine?",
                    nl: "Wat is een zoekmachine?"
                },
                options: [
                    { en: "A tool to find information on the internet", es: "Una herramienta para encontrar información en internet", de: "Ein Werkzeug zum Finden von Informationen im Internet", nl: "Een hulpmiddel om informatie op internet te vinden" },
                    { en: "A type of computer", es: "Un tipo de computadora", de: "Eine Art Computer", nl: "Een type computer" },
                    { en: "A printing device", es: "Un dispositivo de impresión", de: "Ein Druckgerät", nl: "Een afdrukapparaat" },
                    { en: "A storage system", es: "Un sistema de almacenamiento", de: "Ein Speichersystem", nl: "Een opslagsysteem" }
                ],
                correct: 0,
                explanation: {
                    en: "A search engine is a tool that helps you find information by searching through millions of websites on the internet.",
                    es: "Un motor de búsqueda es una herramienta que te ayuda a encontrar información buscando en millones de sitios web en internet.",
                    de: "Eine Suchmaschine ist ein Werkzeug, das dir hilft, Informationen zu finden, indem es Millionen von Websites im Internet durchsucht.",
                    nl: "Een zoekmachine is een hulpmiddel dat je helpt informatie te vinden door miljoenen websites op internet te doorzoeken."
                }
            },
            {
                question: {
                    en: "What is a link (hyperlink)?",
                    es: "¿Qué es un enlace (hipervínculo)?",
                    de: "Was ist ein Link (Hyperlink)?",
                    nl: "Wat is een link (hyperlink)?"
                },
                options: [
                    { en: "Text or image that leads to another webpage", es: "Texto o imagen que lleva a otra página web", de: "Text oder Bild, das zu einer anderen Webseite führt", nl: "Tekst of afbeelding die naar een andere webpagina leidt" },
                    { en: "A computer cable", es: "Un cable de computadora", de: "Ein Computerkabel", nl: "Een computerkabel" },
                    { en: "A type of file", es: "Un tipo de archivo", de: "Eine Art Datei", nl: "Een type bestand" },
                    { en: "A storage device", es: "Un dispositivo de almacenamiento", de: "Ein Speichergerät", nl: "Een opslagapparaat" }
                ],
                correct: 0,
                explanation: {
                    en: "A link is clickable text or image that connects one webpage to another, allowing easy navigation.",
                    es: "Un enlace es texto o imagen clickeable que conecta una página web con otra, permitiendo navegación fácil.",
                    de: "Ein Link ist anklickbarer Text oder ein Bild, das eine Webseite mit einer anderen verbindet und einfache Navigation ermöglicht.",
                    nl: "Een link is klikbare tekst of afbeelding die één webpagina met een andere verbindt, waardoor eenvoudige navigatie mogelijk is."
                }
            },
            {
                question: {
                    en: "What happens when you click on a link?",
                    es: "¿Qué pasa cuando haces clic en un enlace?",
                    de: "Was passiert, wenn du auf einen Link klickst?",
                    nl: "Wat gebeurt er als je op een link klikt?"
                },
                options: [
                    { en: "It takes you to another webpage", es: "Te lleva a otra página web", de: "Es führt dich zu einer anderen Webseite", nl: "Het brengt je naar een andere webpagina" },
                    { en: "It deletes the page", es: "Elimina la página", de: "Es löscht die Seite", nl: "Het verwijdert de pagina" },
                    { en: "It turns off the computer", es: "Apaga la computadora", de: "Es schaltet den Computer aus", nl: "Het zet de computer uit" },
                    { en: "It prints the page", es: "Imprime la página", de: "Es druckt die Seite", nl: "Het drukt de pagina af" }
                ],
                correct: 0,
                explanation: {
                    en: "Clicking a link takes you to another webpage, allowing you to navigate between different pages on the internet.",
                    es: "Hacer clic en un enlace te lleva a otra página web, permitiéndote navegar entre diferentes páginas en internet.",
                    de: "Ein Klick auf einen Link führt dich zu einer anderen Webseite und ermöglicht es dir, zwischen verschiedenen Seiten im Internet zu navigieren.",
                    nl: "Op een link klikken brengt je naar een andere webpagina, waardoor je tussen verschillende pagina's op internet kunt navigeren."
                }
            },
            {
                question: {
                    en: "What is a computer virus?",
                    es: "¿Qué es un virus de computadora?",
                    de: "Was ist ein Computervirus?",
                    nl: "Wat is een computervirus?"
                },
                options: [
                    { en: "Harmful software that damages computers", es: "Software dañino que daña las computadoras", de: "Schädliche Software, die Computer beschädigt", nl: "Schadelijke software die computers beschadigt" },
                    { en: "A useful program", es: "Un programa útil", de: "Ein nützliches Programm", nl: "Een handig programma" },
                    { en: "A computer part", es: "Una parte de computadora", de: "Ein Computerteil", nl: "Een computeronderdeel" },
                    { en: "An internet connection", es: "Una conexión a internet", de: "Eine Internetverbindung", nl: "Een internetverbinding" }
                ],
                correct: 0,
                explanation: {
                    en: "A computer virus is malicious software designed to harm computers by corrupting files or stealing data.",
                    es: "Un virus de computadora es software malicioso diseñado para dañar computadoras corrompiendo archivos o robando datos.",
                    de: "Ein Computervirus ist schädliche Software, die darauf ausgelegt ist, Computer zu schädigen, indem sie Dateien beschädigt oder Daten stiehlt.",
                    nl: "Een computervirus is kwaadaardige software ontworpen om computers te beschadigen door bestanden te corrumperen of gegevens te stelen."
                }
            },
            {
                question: {
                    en: "What is antivirus software?",
                    es: "¿Qué es el software antivirus?",
                    de: "Was ist Antivirensoftware?",
                    nl: "Wat is antivirussoftware?"
                },
                options: [
                    { en: "Software that protects against viruses", es: "Software que protege contra virus", de: "Software, die vor Viren schützt", nl: "Software die beschermt tegen virussen" },
                    { en: "Software that creates viruses", es: "Software que crea virus", de: "Software, die Viren erstellt", nl: "Software die virussen maakt" },
                    { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" },
                    { en: "A text editor", es: "Un editor de texto", de: "Ein Texteditor", nl: "Een teksteditor" }
                ],
                correct: 0,
                explanation: {
                    en: "Antivirus software detects, prevents, and removes malicious software to keep your computer safe from threats.",
                    es: "El software antivirus detecta, previene y elimina software malicioso para mantener tu computadora segura de amenazas.",
                    de: "Antivirensoftware erkennt, verhindert und entfernt schädliche Software, um deinen Computer vor Bedrohungen zu schützen.",
                    nl: "Antivirussoftware detecteert, voorkomt en verwijdert kwaadaardige software om je computer veilig te houden tegen bedreigingen."
                }
            },
            {
                question: {
                    en: "What should you do before downloading files?",
                    es: "¿Qué deberías hacer antes de descargar archivos?",
                    de: "Was solltest du tun, bevor du Dateien herunterlädst?",
                    nl: "Wat zou je moeten doen voordat je bestanden downloadt?"
                },
                options: [
                    { en: "Make sure the source is trustworthy", es: "Asegurarte de que la fuente sea confiable", de: "Sicherstellen, dass die Quelle vertrauenswürdig ist", nl: "Zorg dat de bron betrouwbaar is" },
                    { en: "Turn off the computer", es: "Apagar la computadora", de: "Den Computer ausschalten", nl: "De computer uitzetten" },
                    { en: "Delete all files", es: "Eliminar todos los archivos", de: "Alle Dateien löschen", nl: "Alle bestanden verwijderen" },
                    { en: "Disconnect from internet", es: "Desconectar de internet", de: "Vom Internet trennen", nl: "Van internet loskoppelen" }
                ],
                correct: 0,
                explanation: {
                    en: "Always verify that download sources are trustworthy to avoid downloading malicious software or viruses.",
                    es: "Siempre verifica que las fuentes de descarga sean confiables para evitar descargar software malicioso o virus.",
                    de: "Überprüfe immer, dass Download-Quellen vertrauenswürdig sind, um das Herunterladen von schädlicher Software oder Viren zu vermeiden.",
                    nl: "Verifieer altijd dat downloadbronnen betrouwbaar zijn om het downloaden van kwaadaardige software of virussen te voorkomen."
                }
            },
            {
                question: {
                    en: "What is a backup?",
                    es: "¿Qué es una copia de seguridad?",
                    de: "Was ist ein Backup?",
                    nl: "Wat is een back-up?"
                },
                options: [
                    { en: "A copy of important files stored safely", es: "Una copia de archivos importantes almacenada de forma segura", de: "Eine Kopie wichtiger Dateien, die sicher gespeichert wird", nl: "Een kopie van belangrijke bestanden veilig opgeslagen" },
                    { en: "A computer program", es: "Un programa de computadora", de: "Ein Computerprogramm", nl: "Een computerprogramma" },
                    { en: "A virus protection", es: "Una protección contra virus", de: "Ein Virenschutz", nl: "Een virusbescherming" },
                    { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
                ],
                correct: 0,
                explanation: {
                    en: "A backup is a duplicate copy of your important files stored separately to protect against data loss.",
                    es: "Una copia de seguridad es una copia duplicada de tus archivos importantes almacenada por separado para proteger contra la pérdida de datos.",
                    de: "Ein Backup ist eine doppelte Kopie deiner wichtigen Dateien, die separat gespeichert wird, um vor Datenverlust zu schützen.",
                    nl: "Een back-up is een duplicaat kopie van je belangrijke bestanden apart opgeslagen om te beschermen tegen gegevensverlies."
                }
            },
            {
                question: {
                    en: "Why is it important to make backups?",
                    es: "¿Por qué es importante hacer copias de seguridad?",
                    de: "Warum ist es wichtig, Backups zu erstellen?",
                    nl: "Waarom is het belangrijk om back-ups te maken?"
                },
                options: [
                    { en: "To protect data if something goes wrong", es: "Para proteger los datos si algo sale mal", de: "Um Daten zu schützen, falls etwas schief geht", nl: "Om gegevens te beschermen als er iets misgaat" },
                    { en: "To make the computer faster", es: "Para hacer que la computadora sea más rápida", de: "Um den Computer schneller zu machen", nl: "Om de computer sneller te maken" },
                    { en: "To connect to internet", es: "Para conectar a internet", de: "Um sich mit dem Internet zu verbinden", nl: "Om verbinding te maken met internet" },
                    { en: "To create new programs", es: "Para crear nuevos programas", de: "Um neue Programme zu erstellen", nl: "Om nieuwe programma's te maken" }
                ],
                correct: 0,
                explanation: {
                    en: "Regular backups protect your valuable data from computer crashes, accidental deletion, or hardware failures.",
                    es: "Las copias de seguridad regulares protegen tus datos valiosos de fallas de computadora, eliminación accidental o fallas de hardware.",
                    de: "Regelmäßige Backups schützen deine wertvollen Daten vor Computerabstürzen, versehentlichem Löschen oder Hardwareausfällen.",
                    nl: "Regelmatige back-ups beschermen je waardevolle gegevens tegen computerstoringen, onbedoelde verwijdering of hardwarestoringen."
                }
            },
            {
                question: {
                    en: "What is spam in email?",
                    es: "¿Qué es el spam en el correo electrónico?",
                    de: "Was ist Spam in E-Mails?",
                    nl: "Wat is spam in e-mail?"
                },
                options: [
                    { en: "Unwanted junk email", es: "Correo electrónico basura no deseado", de: "Unerwünschte Junk-E-Mails", nl: "Ongewenste junk e-mail" },
                    { en: "Important messages", es: "Mensajes importantes", de: "Wichtige Nachrichten", nl: "Belangrijke berichten" },
                    { en: "Email attachments", es: "Archivos adjuntos de correo electrónico", de: "E-Mail-Anhänge", nl: "E-mailbijlagen" },
                    { en: "Email addresses", es: "Direcciones de correo electrónico", de: "E-Mail-Adressen", nl: "E-mailadressen" }
                ],
                correct: 0,
                explanation: {
                    en: "Spam is unwanted junk email often containing advertisements, scams, or malicious content that clogs your inbox.",
                    es: "El spam es correo electrónico basura no deseado que a menudo contiene anuncios, estafas o contenido malicioso que obstruye tu bandeja de entrada.",
                    de: "Spam ist unerwünschte Junk-E-Mail, die oft Werbung, Betrug oder schädliche Inhalte enthält und deinen Posteingang verstopft.",
                    nl: "Spam is ongewenste junk e-mail die vaak advertenties, oplichting of kwaadaardige inhoud bevat die je inbox verstopt."
                }
            },
            {
                question: {
                    en: "What should you do with suspicious emails?",
                    es: "¿Qué deberías hacer con correos electrónicos sospechosos?",
                    de: "Was solltest du mit verdächtigen E-Mails machen?",
                    nl: "Wat zou je moeten doen met verdachte e-mails?"
                },
                options: [
                    { en: "Delete them without opening", es: "Eliminarlos sin abrirlos", de: "Sie löschen ohne sie zu öffnen", nl: "Ze verwijderen zonder ze te openen" },
                    { en: "Forward them to friends", es: "Reenviarlos a amigos", de: "Sie an Freunde weiterleiten", nl: "Ze doorsturen naar vrienden" },
                    { en: "Reply to them", es: "Responder a ellos", de: "Auf sie antworten", nl: "Erop antwoorden" },
                    { en: "Print them out", es: "Imprimirlos", de: "Sie ausdrucken", nl: "Ze uitprinten" }
                ],
                correct: 0,
                explanation: {
                    en: "Delete suspicious emails without opening them to prevent potential security threats and malware infections.",
                    es: "Elimina correos electrónicos sospechosos sin abrirlos para prevenir amenazas de seguridad potenciales e infecciones de malware.",
                    de: "Lösche verdächtige E-Mails, ohne sie zu öffnen, um potenzielle Sicherheitsbedrohungen und Malware-Infektionen zu verhindern.",
                    nl: "Verwijder verdachte e-mails zonder ze te openen om potentiële beveiligingsdreigingen en malware-infecties te voorkomen."
                }
            },
            {
                question: {
                    en: "What is social media?",
                    es: "¿Qué son las redes sociales?",
                    de: "Was sind soziale Medien?",
                    nl: "Wat zijn sociale media?"
                },
                options: [
                    { en: "Online platforms for sharing and communication", es: "Plataformas en línea para compartir y comunicarse", de: "Online-Plattformen zum Teilen und Kommunizieren", nl: "Online platformen voor delen en communicatie" },
                    { en: "Newspaper websites", es: "Sitios web de periódicos", de: "Zeitungswebsites", nl: "Krant websites" },
                    { en: "Shopping websites", es: "Sitios web de compras", de: "Shopping-Websites", nl: "Winkel websites" },
                    { en: "Government websites", es: "Sitios web del gobierno", de: "Regierungswebsites", nl: "Overheid websites" }
                ],
                correct: 0,
                explanation: {
                    en: "Social media are online platforms where people connect, share content, and communicate with friends and communities.",
                    es: "Las redes sociales son plataformas en línea donde las personas se conectan, comparten contenido y se comunican con amigos y comunidades.",
                    de: "Soziale Medien sind Online-Plattformen, auf denen Menschen sich vernetzen, Inhalte teilen und mit Freunden und Gemeinschaften kommunizieren.",
                    nl: "Sociale media zijn online platformen waar mensen verbinding maken, inhoud delen en communiceren met vrienden en gemeenschappen."
                }
            },
            {
                question: {
                    en: "What is important when sharing personal information online?",
                    es: "¿Qué es importante al compartir información personal en línea?",
                    de: "Was ist wichtig beim Teilen persönlicher Informationen online?",
                    nl: "Wat is belangrijk bij het delen van persoonlijke informatie online?"
                },
                options: [
                    { en: "Be very careful and selective", es: "Ser muy cuidadoso y selectivo", de: "Sehr vorsichtig und selektiv sein", nl: "Heel voorzichtig en selectief zijn" },
                    { en: "Share everything with everyone", es: "Compartir todo con todos", de: "Alles mit allen teilen", nl: "Alles met iedereen delen" },
                    { en: "Only share with strangers", es: "Solo compartir con extraños", de: "Nur mit Fremden teilen", nl: "Alleen delen met vreemden" },
                    { en: "Post all personal details", es: "Publicar todos los detalles personales", de: "Alle persönlichen Details posten", nl: "Alle persoonlijke details posten" }
                ],
                correct: 0,
                explanation: {
                    en: "Always be cautious with personal information online as it can be misused by strangers or lead to identity theft.",
                    es: "Siempre ten cuidado con la información personal en línea ya que puede ser mal utilizada por extraños o llevar al robo de identidad.",
                    de: "Sei immer vorsichtig mit persönlichen Informationen online, da sie von Fremden missbraucht werden können oder zu Identitätsdiebstahl führen können.",
                    nl: "Wees altijd voorzichtig met persoonlijke informatie online omdat het misbruikt kan worden door vreemden of kan leiden tot identiteitsdiefstal."
                }
            },
            {
                question: {
                    en: "What does it mean to 'boot up' a computer?",
                    es: "¿Qué significa 'arrancar' una computadora?",
                    de: "Was bedeutet es, einen Computer 'hochzufahren'?",
                    nl: "Wat betekent het om een computer 'op te starten'?"
                },
                options: [
                    { en: "To start and load the operating system", es: "Iniciar y cargar el sistema operativo", de: "Den Computer starten und das Betriebssystem laden", nl: "De computer starten en het besturingssysteem laden" },
                    { en: "To shut down the computer", es: "Apagar la computadora", de: "Den Computer herunterfahren", nl: "De computer afsluiten" },
                    { en: "To clean the computer", es: "Limpiar la computadora", de: "Den Computer reinigen", nl: "De computer schoonmaken" },
                    { en: "To repair the computer", es: "Reparar la computadora", de: "Den Computer reparieren", nl: "De computer repareren" }
                ],
                correct: 0,
                explanation: {
                    en: "Booting up means starting the computer and loading the operating system so it's ready for use.",
                    es: "Arrancar significa iniciar la computadora y cargar el sistema operativo para que esté listo para usar.",
                    de: "Hochfahren bedeutet, den Computer zu starten und das Betriebssystem zu laden, damit er einsatzbereit ist.",
                    nl: "Opstarten betekent de computer starten en het besturingssysteem laden zodat het klaar is voor gebruik."
                }
            },
            {
                question: {
                    en: "What does 'Ctrl+C' do?",
                    es: "¿Qué hace 'Ctrl+C'?",
                    de: "Was macht 'Strg+C'?",
                    nl: "Wat doet 'Ctrl+C'?"
                },
                options: [
                    { en: "Copy selected text or items", es: "Copiar texto o elementos seleccionados", de: "Ausgewählten Text oder Elemente kopieren", nl: "Geselecteerde tekst of items kopiëren" },
                    { en: "Delete files", es: "Eliminar archivos", de: "Dateien löschen", nl: "Bestanden verwijderen" },
                    { en: "Close programs", es: "Cerrar programas", de: "Programme schließen", nl: "Programma's sluiten" },
                    { en: "Create new files", es: "Crear nuevos archivos", de: "Neue Dateien erstellen", nl: "Nieuwe bestanden maken" }
                ],
                correct: 0,
                explanation: {
                    en: "Ctrl+C copies selected text or items to the clipboard, allowing you to duplicate them elsewhere.",
                    es: "Ctrl+C copia el texto o elementos seleccionados al portapapeles, permitiéndote duplicarlos en otro lugar.",
                    de: "Strg+C kopiert ausgewählten Text oder Elemente in die Zwischenablage und ermöglicht es dir, sie anderswo zu duplizieren.",
                    nl: "Ctrl+C kopieert geselecteerde tekst of items naar het klembord, waardoor je ze elders kunt dupliceren."
                }
            },
            {
                question: {
                    en: "What does 'Ctrl+V' do?",
                    es: "¿Qué hace 'Ctrl+V'?",
                    de: "Was macht 'Strg+V'?",
                    nl: "Wat doet 'Ctrl+V'?"
                },
                options: [
                    { en: "Paste copied items", es: "Pegar elementos copiados", de: "Kopierte Elemente einfügen", nl: "Gekopieerde items plakken" },
                    { en: "Cut items", es: "Cortar elementos", de: "Elemente ausschneiden", nl: "Items knippen" },
                    { en: "Save files", es: "Guardar archivos", de: "Dateien speichern", nl: "Bestanden opslaan" },
                    { en: "Open files", es: "Abrir archivos", de: "Dateien öffnen", nl: "Bestanden openen" }
                ],
                correct: 0,
                explanation: {
                    en: "Ctrl+V pastes copied or cut items from the clipboard to the current location.",
                    es: "Ctrl+V pega elementos copiados o cortados del portapapeles a la ubicación actual.",
                    de: "Strg+V fügt kopierte oder ausgeschnittene Elemente aus der Zwischenablage an der aktuellen Position ein.",
                    nl: "Ctrl+V plakt gekopieerde of geknipte items van het klembord op de huidige locatie."
                }
            },
            {
                question: {
                    en: "What does 'Ctrl+S' do?",
                    es: "¿Qué hace 'Ctrl+S'?",
                    de: "Was macht 'Strg+S'?",
                    nl: "Wat doet 'Ctrl+S'?"
                },
                options: [
                    { en: "Save the current file", es: "Guardar el archivo actual", de: "Die aktuelle Datei speichern", nl: "Het huidige bestand opslaan" },
                    { en: "Search for files", es: "Buscar archivos", de: "Nach Dateien suchen", nl: "Naar bestanden zoeken" },
                    { en: "Send emails", es: "Enviar correos electrónicos", de: "E-Mails senden", nl: "E-mails versturen" },
                    { en: "Start programs", es: "Iniciar programas", de: "Programme starten", nl: "Programma's starten" }
                ],
                correct: 0,
                explanation: {
                    en: "Ctrl+S saves the current file, preserving your work and preventing data loss.",
                    es: "Ctrl+S guarda el archivo actual, preservando tu trabajo y previniendo la pérdida de datos.",
                    de: "Strg+S speichert die aktuelle Datei, bewahrt deine Arbeit und verhindert Datenverlust.",
                    nl: "Ctrl+S slaat het huidige bestand op, bewaart je werk en voorkomt gegevensverlies."
                }
            },
            {
                question: {
                    en: "How can you keep your computer running well?",
                    es: "¿Cómo puedes mantener tu computadora funcionando bien?",
                    de: "Wie kannst du deinen Computer gut laufen lassen?",
                    nl: "Hoe kun je je computer goed laten werken?"
                },
                options: [
                    { en: "Regular updates and cleaning", es: "Actualizaciones regulares y limpieza", de: "Regelmäßige Updates und Reinigung", nl: "Regelmatige updates en schoonmaken" },
                    { en: "Never turn it off", es: "Nunca apagarlo", de: "Niemals ausschalten", nl: "Nooit uitschakelen" },
                    { en: "Install lots of programs", es: "Instalar muchos programas", de: "Viele Programme installieren", nl: "Veel programma's installeren" },
                    { en: "Ignore all warnings", es: "Ignorar todas las advertencias", de: "Alle Warnungen ignorieren", nl: "Alle waarschuwingen negeren" }
                ],
                correct: 0,
                explanation: {
                    en: "Regular updates and maintenance keep your computer secure, fast, and running smoothly by fixing bugs and security issues.",
                    es: "Las actualizaciones regulares y el mantenimiento mantienen tu computadora segura, rápida y funcionando sin problemas al corregir errores y problemas de seguridad.",
                    de: "Regelmäßige Updates und Wartung halten deinen Computer sicher, schnell und reibungslos am Laufen, indem sie Fehler und Sicherheitsprobleme beheben.",
                    nl: "Regelmatige updates en onderhoud houden je computer veilig, snel en soepel werkend door bugs en beveiligingsproblemen op te lossen."
                }
            },
            {
                question: {
                    en: "What does 'URL' stand for?",
                    es: "¿Qué significa 'URL'?",
                    de: "Wofür steht 'URL'?",
                    nl: "Waar staat 'URL' voor?"
                },
                options: [
                    { en: "Uniform Resource Locator", es: "Localizador Uniforme de Recursos", de: "Uniform Resource Locator", nl: "Uniform Resource Locator" },
                    { en: "Universal Reading Link", es: "Enlace de Lectura Universal", de: "Universeller Leselink", nl: "Universele Leeslink" },
                    { en: "User Request Language", es: "Lenguaje de Solicitud del Usuario", de: "Benutzeranfragesprache", nl: "Gebruiker Verzoek Taal" },
                    { en: "Unlimited Resource Library", es: "Biblioteca de Recursos Ilimitados", de: "Unbegrenzte Ressourcenbibliothek", nl: "Onbeperkte Resource Bibliotheek" }
                ],
                correct: 0,
                explanation: {
                    en: "URL stands for Uniform Resource Locator. It's the web address you type in your browser to visit websites, like www.example.com.",
                    es: "URL significa Localizador Uniforme de Recursos. Es la dirección web que escribes en tu navegador para visitar sitios web, como www.example.com.",
                    de: "URL steht für Uniform Resource Locator. Es ist die Webadresse, die Sie in Ihren Browser eingeben, um Websites zu besuchen, wie www.example.com.",
                    nl: "URL staat voor Uniform Resource Locator. Het is het webadres dat je in je browser typt om websites te bezoeken, zoals www.example.com."
                }
            },
            {
                question: {
                    en: "What is a 'smartphone'?",
                    es: "¿Qué es un 'smartphone'?",
                    de: "Was ist ein 'Smartphone'?",
                    nl: "Wat is een 'smartphone'?"
                },
                options: [
                    { en: "A phone that can do many things like a computer", es: "Un teléfono que puede hacer muchas cosas como una computadora", de: "Ein Telefon, das viele Dinge wie ein Computer kann", nl: "Een telefoon die veel dingen kan zoals een computer" },
                    { en: "A very expensive phone", es: "Un teléfono muy caro", de: "Ein sehr teures Telefon", nl: "Een zeer dure telefoon" },
                    { en: "A phone that talks back", es: "Un teléfono que responde", de: "Ein Telefon, das zurückspricht", nl: "Een telefoon die terugpraat" },
                    { en: "A phone for smart people only", es: "Un teléfono solo para gente inteligente", de: "Ein Telefon nur für kluge Leute", nl: "Een telefoon alleen voor slimme mensen" }
                ],
                correct: 0,
                explanation: {
                    en: "A smartphone is a mobile phone that can do many things like a computer - browse the internet, play games, take photos, use apps, and much more!",
                    es: "Un smartphone es un teléfono móvil que puede hacer muchas cosas como una computadora - navegar por internet, jugar juegos, tomar fotos, usar aplicaciones, ¡y mucho más!",
                    de: "Ein Smartphone ist ein Mobiltelefon, das viele Dinge wie ein Computer kann - im Internet surfen, Spiele spielen, Fotos machen, Apps verwenden und vieles mehr!",
                    nl: "Een smartphone is een mobiele telefoon die veel dingen kan zoals een computer - internetten, spelletjes spelen, foto's maken, apps gebruiken, en nog veel meer!"
                }
            },
            {
                question: {
                    en: "What should you do if you spill water on your computer?",
                    es: "¿Qué deberías hacer si derramas agua en tu computadora?",
                    de: "Was solltest du tun, wenn du Wasser auf deinen Computer verschüttest?",
                    nl: "Wat moet je doen als je water op je computer morst?"
                },
                options: [
                    { en: "Turn it off immediately and let it dry", es: "Apagarlo inmediatamente y dejarlo secar", de: "Sofort ausschalten und trocknen lassen", nl: "Onmiddellijk uitschakelen en laten drogen" },
                    { en: "Keep using it normally", es: "Seguir usándolo normalmente", de: "Normal weiter benutzen", nl: "Gewoon blijven gebruiken" },
                    { en: "Shake it to get the water out", es: "Agitarlo para sacar el agua", de: "Schütteln, um das Wasser herauszubekommen", nl: "Schudden om het water eruit te krijgen" },
                    { en: "Put it in the microwave to dry", es: "Ponerlo en el microondas para secar", de: "In die Mikrowelle zum Trocknen legen", nl: "In de magnetron stoppen om te drogen" }
                ],
                correct: 0,
                explanation: {
                    en: "If you spill water on a computer, turn it off immediately, unplug it, and let it dry completely before trying to use it again. Water and electricity don't mix safely!",
                    es: "Si derramas agua en una computadora, apágala inmediatamente, desconéctala y déjala secar completamente antes de intentar usarla de nuevo. ¡El agua y la electricidad no se mezclan de forma segura!",
                    de: "Wenn du Wasser auf einen Computer verschüttest, schalte ihn sofort aus, ziehe den Stecker und lass ihn vollständig trocknen, bevor du versuchst, ihn wieder zu benutzen. Wasser und Elektrizität mischen sich nicht sicher!",
                    nl: "Als je water op een computer morst, schakel hem onmiddellijk uit, trek de stekker eruit en laat hem volledig drogen voordat je hem weer probeert te gebruiken. Water en elektriciteit gaan niet veilig samen!"
                }
            },
            {
                question: {
                    en: "What is 'cloud storage'?",
                    es: "¿Qué es el 'almacenamiento en la nube'?",
                    de: "Was ist 'Cloud-Speicher'?",
                    nl: "Wat is 'cloud opslag'?"
                },
                options: [
                    { en: "Saving files on the internet instead of your device", es: "Guardar archivos en internet en lugar de tu dispositivo", de: "Dateien im Internet statt auf deinem Gerät speichern", nl: "Bestanden opslaan op internet in plaats van op je apparaat" },
                    { en: "Storage that floats in the sky", es: "Almacenamiento que flota en el cielo", de: "Speicher, der am Himmel schwebt", nl: "Opslag die in de lucht zweeft" },
                    { en: "A very fast storage device", es: "Un dispositivo de almacenamiento muy rápido", de: "Ein sehr schnelles Speichergerät", nl: "Een zeer snel opslagapparaat" },
                    { en: "Storage made from clouds", es: "Almacenamiento hecho de nubes", de: "Speicher aus Wolken gemacht", nl: "Opslag gemaakt van wolken" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud storage means saving your files on servers connected to the internet, so you can access them from any device with internet connection. It's like having a storage box in the digital sky!",
                    es: "El almacenamiento en la nube significa guardar tus archivos en servidores conectados a internet, para que puedas acceder a ellos desde cualquier dispositivo con conexión a internet. ¡Es como tener una caja de almacenamiento en el cielo digital!",
                    de: "Cloud-Speicher bedeutet, dass du deine Dateien auf mit dem Internet verbundenen Servern speicherst, sodass du von jedem Gerät mit Internetverbindung darauf zugreifen kannst. Es ist wie eine Aufbewahrungsbox im digitalen Himmel!",
                    nl: "Cloud opslag betekent je bestanden opslaan op servers die verbonden zijn met internet, zodat je er vanaf elk apparaat met internetverbinding bij kunt. Het is alsof je een opbergdoos in de digitale lucht hebt!"
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/technology', level1);
    }
})();