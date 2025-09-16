(function() {
    const level9 = {
        name: {
            en: "Hardware and Electronics",
            es: "Hardware y Electrónicos",
            de: "Hardware und Elektronik",
            nl: "Hardware en Elektronica"
        },
        questions: [
            {
                question: {
                    en: "What does CPU stand for?",
                    es: "¿Qué significa CPU?",
                    de: "Wofür steht CPU?",
                    nl: "Wat betekent CPU?"
                },
                options: [
                    { en: "Central Processing Unit", es: "Unidad Central de Procesamiento", de: "Zentrale Verarbeitungseinheit", nl: "Centrale Verwerkingseenheid" },
                    { en: "Computer Processing Unit", es: "Unidad de Procesamiento de Computadora", de: "Computer-Verarbeitungseinheit", nl: "Computer Verwerkingseenheid" },
                    { en: "Central Power Unit", es: "Unidad Central de Energía", de: "Zentrale Stromeinheit", nl: "Centrale Stroomunit" },
                    { en: "Control Processing Unit", es: "Unidad de Procesamiento de Control", de: "Kontrollverarbeitungseinheit", nl: "Controle Verwerkingseenheid" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What does RAM stand for?",
                    es: "¿Qué significa RAM?",
                    de: "Wofür steht RAM?",
                    nl: "Wat betekent RAM?"
                },
                options: [
                    { en: "Random Access Memory", es: "Memoria de Acceso Aleatorio", de: "Arbeitsspeicher", nl: "Willekeurig Toegankelijk Geheugen" },
                    { en: "Read Access Memory", es: "Memoria de Acceso de Lectura", de: "Lesezugriffsspeicher", nl: "Lees Toegang Geheugen" },
                    { en: "Rapid Access Memory", es: "Memoria de Acceso Rápido", de: "Schnellzugriffsspeicher", nl: "Snelle Toegang Geheugen" },
                    { en: "Real Access Memory", es: "Memoria de Acceso Real", de: "Echtzugriffsspeicher", nl: "Werkelijke Toegang Geheugen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the main function of a graphics card?",
                    es: "¿Cuál es la función principal de una tarjeta gráfica?",
                    de: "Was ist die Hauptfunktion einer Grafikkarte?",
                    nl: "Wat is de hoofdfunctie van een grafische kaart?"
                },
                options: [
                    { en: "Processing visual data and rendering images", es: "Procesar datos visuales y renderizar imágenes", de: "Visuelle Daten verarbeiten und Bilder rendern", nl: "Visuele data verwerken en afbeeldingen renderen" },
                    { en: "Storing data permanently", es: "Almacenar datos permanentemente", de: "Daten dauerhaft speichern", nl: "Data permanent opslaan" },
                    { en: "Managing network connections", es: "Gestionar conexiones de red", de: "Netzwerkverbindungen verwalten", nl: "Netwerkverbindingen beheren" },
                    { en: "Controlling power supply", es: "Controlar el suministro de energía", de: "Stromversorgung kontrollieren", nl: "Stroomvoorziening controleren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a motherboard?",
                    es: "¿Qué es una placa madre?",
                    de: "Was ist ein Motherboard?",
                    nl: "Wat is een moederbord?"
                },
                options: [
                    { en: "The main circuit board that connects all components", es: "La placa de circuito principal que conecta todos los componentes", de: "Die Hauptplatine, die alle Komponenten verbindet", nl: "De hoofdprintplaat die alle componenten verbindt" },
                    { en: "The computer's memory storage", es: "El almacenamiento de memoria de la computadora", de: "Der Speicher des Computers", nl: "De geheugenopslag van de computer" },
                    { en: "The power supply unit", es: "La unidad de fuente de alimentación", de: "Das Netzteil", nl: "De voedingseenheid" },
                    { en: "The computer case", es: "La carcasa de la computadora", de: "Das Computergehäuse", nl: "De computerbehuizing" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What does SSD stand for?",
                    es: "¿Qué significa SSD?",
                    de: "Wofür steht SSD?",
                    nl: "Wat betekent SSD?"
                },
                options: [
                    { en: "Solid State Drive", es: "Unidad de Estado Sólido", de: "Solid-State-Drive", nl: "Solid State Drive" },
                    { en: "Super Speed Drive", es: "Unidad de Super Velocidad", de: "Super Speed Drive", nl: "Super Speed Drive" },
                    { en: "Secure Storage Device", es: "Dispositivo de Almacenamiento Seguro", de: "Sichere Speichereinheit", nl: "Veilig Opslagapparaat" },
                    { en: "Serial Storage Drive", es: "Unidad de Almacenamiento Serial", de: "Serielle Speichereinheit", nl: "Seriële Opslagschijf" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the difference between HDD and SSD?",
                    es: "¿Cuál es la diferencia entre HDD y SSD?",
                    de: "Was ist der Unterschied zwischen HDD und SSD?",
                    nl: "Wat is het verschil tussen HDD en SSD?"
                },
                options: [
                    { en: "HDD has moving parts, SSD has no moving parts", es: "HDD tiene partes móviles, SSD no tiene partes móviles", de: "HDD hat bewegliche Teile, SSD hat keine beweglichen Teile", nl: "HDD heeft bewegende delen, SSD heeft geen bewegende delen" },
                    { en: "HDD is faster than SSD", es: "HDD es más rápido que SSD", de: "HDD ist schneller als SSD", nl: "HDD is sneller dan SSD" },
                    { en: "HDD uses less power than SSD", es: "HDD usa menos energía que SSD", de: "HDD verbraucht weniger Strom als SSD", nl: "HDD gebruikt minder stroom dan SSD" },
                    { en: "HDD is more expensive than SSD", es: "HDD es más caro que SSD", de: "HDD ist teurer als SSD", nl: "HDD is duurder dan SSD" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a power supply unit (PSU) used for?",
                    es: "¿Para qué se usa una unidad de fuente de alimentación (PSU)?",
                    de: "Wofür wird ein Netzteil (PSU) verwendet?",
                    nl: "Waarvoor wordt een voedingseenheid (PSU) gebruikt?"
                },
                options: [
                    { en: "Converting AC power to DC power for computer components", es: "Convertir energía AC a energía DC para componentes de computadora", de: "AC-Strom in DC-Strom für Computerkomponenten umwandeln", nl: "AC-stroom omzetten naar DC-stroom voor computercomponenten" },
                    { en: "Processing data", es: "Procesar datos", de: "Daten verarbeiten", nl: "Data verwerken" },
                    { en: "Storing files", es: "Almacenar archivos", de: "Dateien speichern", nl: "Bestanden opslaan" },
                    { en: "Managing network connections", es: "Gestionar conexiones de red", de: "Netzwerkverbindungen verwalten", nl: "Netwerkverbindingen beheren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What does BIOS stand for?",
                    es: "¿Qué significa BIOS?",
                    de: "Wofür steht BIOS?",
                    nl: "Wat betekent BIOS?"
                },
                options: [
                    { en: "Basic Input/Output System", es: "Sistema Básico de Entrada/Salida", de: "Grundlegendes Ein-/Ausgabesystem", nl: "Basis Invoer/Uitvoer Systeem" },
                    { en: "Binary Input/Output System", es: "Sistema de Entrada/Salida Binario", de: "Binäres Ein-/Ausgabesystem", nl: "Binair Invoer/Uitvoer Systeem" },
                    { en: "Boot Input/Output System", es: "Sistema de Entrada/Salida de Arranque", de: "Boot-Ein-/Ausgabesystem", nl: "Boot Invoer/Uitvoer Systeem" },
                    { en: "Base Input/Output Software", es: "Software Base de Entrada/Salida", de: "Basis-Ein-/Ausgabe-Software", nl: "Basis Invoer/Uitvoer Software" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is thermal paste used for?",
                    es: "¿Para qué se usa la pasta térmica?",
                    de: "Wofür wird Wärmeleitpaste verwendet?",
                    nl: "Waarvoor wordt thermische pasta gebruikt?"
                },
                options: [
                    { en: "Improving heat transfer between CPU and cooler", es: "Mejorar la transferencia de calor entre CPU y refrigerador", de: "Wärmeübertragung zwischen CPU und Kühler verbessern", nl: "Warmteoverdracht tussen CPU en koeler verbeteren" },
                    { en: "Securing components to the motherboard", es: "Asegurar componentes a la placa madre", de: "Komponenten am Motherboard befestigen", nl: "Componenten aan het moederbord bevestigen" },
                    { en: "Cleaning computer parts", es: "Limpiar partes de la computadora", de: "Computerteile reinigen", nl: "Computeronderdelen schoonmaken" },
                    { en: "Waterproofing electronics", es: "Impermeabilizar electrónicos", de: "Elektronik wasserdicht machen", nl: "Elektronica waterdicht maken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is overclocking?",
                    es: "¿Qué es el overclocking?",
                    de: "Was ist Overclocking?",
                    nl: "Wat is overklokken?"
                },
                options: [
                    { en: "Running a component at higher speeds than specified", es: "Ejecutar un componente a velocidades más altas de las especificadas", de: "Eine Komponente mit höheren Geschwindigkeiten als spezifiziert betreiben", nl: "Een component op hogere snelheden draaien dan gespecificeerd" },
                    { en: "Checking the system time", es: "Verificar la hora del sistema", de: "Systemzeit überprüfen", nl: "Systeemtijd controleren" },
                    { en: "Installing more memory", es: "Instalar más memoria", de: "Mehr Speicher installieren", nl: "Meer geheugen installeren" },
                    { en: "Upgrading the operating system", es: "Actualizar el sistema operativo", de: "Betriebssystem aktualisieren", nl: "Besturingssysteem upgraden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a heat sink?",
                    es: "¿Qué es un disipador de calor?",
                    de: "Was ist ein Kühlkörper?",
                    nl: "Wat is een koellichaam?"
                },
                options: [
                    { en: "A device that absorbs and dissipates heat from components", es: "Un dispositivo que absorbe y disipa calor de los componentes", de: "Ein Gerät, das Wärme von Komponenten absorbiert und ableitet", nl: "Een apparaat dat warmte van componenten absorbeert en afvoert" },
                    { en: "A component that generates heat", es: "Un componente que genera calor", de: "Eine Komponente, die Wärme erzeugt", nl: "Een component die warmte genereert" },
                    { en: "A type of memory", es: "Un tipo de memoria", de: "Eine Art von Speicher", nl: "Een type geheugen" },
                    { en: "A storage device", es: "Un dispositivo de almacenamiento", de: "Ein Speichergerät", nl: "Een opslagapparaat" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What does GPU stand for?",
                    es: "¿Qué significa GPU?",
                    de: "Wofür steht GPU?",
                    nl: "Wat betekent GPU?"
                },
                options: [
                    { en: "Graphics Processing Unit", es: "Unidad de Procesamiento Gráfico", de: "Grafikverarbeitungseinheit", nl: "Grafische Verwerkingseenheid" },
                    { en: "General Processing Unit", es: "Unidad de Procesamiento General", de: "Allgemeine Verarbeitungseinheit", nl: "Algemene Verwerkingseenheid" },
                    { en: "Graphical Power Unit", es: "Unidad de Energía Gráfica", de: "Grafische Stromeinheit", nl: "Grafische Stroomunit" },
                    { en: "Game Processing Unit", es: "Unidad de Procesamiento de Juegos", de: "Spielverarbeitungseinheit", nl: "Game Verwerkingseenheid" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the function of a capacitor in electronics?",
                    es: "¿Cuál es la función de un capacitor en electrónica?",
                    de: "Was ist die Funktion eines Kondensators in der Elektronik?",
                    nl: "Wat is de functie van een condensator in elektronica?"
                },
                options: [
                    { en: "Storing electrical energy", es: "Almacenar energía eléctrica", de: "Elektrische Energie speichern", nl: "Elektrische energie opslaan" },
                    { en: "Converting AC to DC", es: "Convertir AC a DC", de: "AC in DC umwandeln", nl: "AC naar DC omzetten" },
                    { en: "Amplifying signals", es: "Amplificar señales", de: "Signale verstärken", nl: "Signalen versterken" },
                    { en: "Switching circuits", es: "Conmutar circuitos", de: "Schaltkreise schalten", nl: "Schakelingen schakelen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the function of a resistor?",
                    es: "¿Cuál es la función de un resistor?",
                    de: "Was ist die Funktion eines Widerstands?",
                    nl: "Wat is de functie van een weerstand?"
                },
                options: [
                    { en: "Limiting current flow", es: "Limitar el flujo de corriente", de: "Stromfluss begrenzen", nl: "Stroomstroom beperken" },
                    { en: "Storing energy", es: "Almacenar energía", de: "Energie speichern", nl: "Energie opslaan" },
                    { en: "Amplifying signals", es: "Amplificar señales", de: "Signale verstärken", nl: "Signalen versterken" },
                    { en: "Converting voltage", es: "Convertir voltaje", de: "Spannung umwandeln", nl: "Spanning omzetten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What does PCIe stand for?",
                    es: "¿Qué significa PCIe?",
                    de: "Wofür steht PCIe?",
                    nl: "Wat betekent PCIe?"
                },
                options: [
                    { en: "Peripheral Component Interconnect Express", es: "Interconexión de Componentes Periféricos Express", de: "Peripheral Component Interconnect Express", nl: "Peripheral Component Interconnect Express" },
                    { en: "Personal Computer Interface Express", es: "Interfaz de Computadora Personal Express", de: "Personal Computer Interface Express", nl: "Personal Computer Interface Express" },
                    { en: "Power Control Interface Express", es: "Interfaz de Control de Energía Express", de: "Power Control Interface Express", nl: "Power Control Interface Express" },
                    { en: "Processor Communication Interface Express", es: "Interfaz de Comunicación del Procesador Express", de: "Processor Communication Interface Express", nl: "Processor Communication Interface Express" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the purpose of a cooling fan in a computer?",
                    es: "¿Cuál es el propósito de un ventilador de refrigeración en una computadora?",
                    de: "Was ist der Zweck eines Kühlventilators in einem Computer?",
                    nl: "Wat is het doel van een koelventilator in een computer?"
                },
                options: [
                    { en: "Moving air to cool components and prevent overheating", es: "Mover aire para enfriar componentes y prevenir sobrecalentamiento", de: "Luft bewegen, um Komponenten zu kühlen und Überhitzung zu verhindern", nl: "Lucht bewegen om componenten te koelen en oververhitting te voorkomen" },
                    { en: "Generating power", es: "Generar energía", de: "Strom erzeugen", nl: "Stroom opwekken" },
                    { en: "Processing data", es: "Procesar datos", de: "Daten verarbeiten", nl: "Data verwerken" },
                    { en: "Storing information", es: "Almacenar información", de: "Informationen speichern", nl: "Informatie opslaan" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is DDR in DDR RAM?",
                    es: "¿Qué es DDR en DDR RAM?",
                    de: "Was ist DDR in DDR RAM?",
                    nl: "Wat is DDR in DDR RAM?"
                },
                options: [
                    { en: "Double Data Rate", es: "Tasa de Datos Doble", de: "Doppelte Datenrate", nl: "Dubbele Data Rate" },
                    { en: "Direct Data Rate", es: "Tasa de Datos Directa", de: "Direkte Datenrate", nl: "Directe Data Rate" },
                    { en: "Dynamic Data Rate", es: "Tasa de Datos Dinámica", de: "Dynamische Datenrate", nl: "Dynamische Data Rate" },
                    { en: "Dual Data Rate", es: "Tasa de Datos Dual", de: "Duale Datenrate", nl: "Dubbele Data Rate" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the function of a transistor?",
                    es: "¿Cuál es la función de un transistor?",
                    de: "Was ist die Funktion eines Transistors?",
                    nl: "Wat is de functie van een transistor?"
                },
                options: [
                    { en: "Amplifying or switching electronic signals", es: "Amplificar o conmutar señales electrónicas", de: "Elektronische Signale verstärken oder schalten", nl: "Elektronische signalen versterken of schakelen" },
                    { en: "Storing electrical energy", es: "Almacenar energía eléctrica", de: "Elektrische Energie speichern", nl: "Elektrische energie opslaan" },
                    { en: "Resisting current flow", es: "Resistir el flujo de corriente", de: "Stromfluss widerstehen", nl: "Stroomstroom weerstaan" },
                    { en: "Converting AC to DC", es: "Convertir AC a DC", de: "AC in DC umwandeln", nl: "AC naar DC omzetten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the difference between SATA and NVMe?",
                    es: "¿Cuál es la diferencia entre SATA y NVMe?",
                    de: "Was ist der Unterschied zwischen SATA und NVMe?",
                    nl: "Wat is het verschil tussen SATA en NVMe?"
                },
                options: [
                    { en: "NVMe is faster and uses PCIe interface", es: "NVMe es más rápido y usa interfaz PCIe", de: "NVMe ist schneller und verwendet PCIe-Schnittstelle", nl: "NVMe is sneller en gebruikt PCIe interface" },
                    { en: "SATA is faster than NVMe", es: "SATA es más rápido que NVMe", de: "SATA ist schneller als NVMe", nl: "SATA is sneller dan NVMe" },
                    { en: "They are the same technology", es: "Son la misma tecnología", de: "Sie sind dieselbe Technologie", nl: "Het is dezelfde technologie" },
                    { en: "SATA uses wireless connection", es: "SATA usa conexión inalámbrica", de: "SATA verwendet drahtlose Verbindung", nl: "SATA gebruikt draadloze verbinding" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What does HDMI stand for?",
                    es: "¿Qué significa HDMI?",
                    de: "Wofür steht HDMI?",
                    nl: "Wat betekent HDMI?"
                },
                options: [
                    { en: "High-Definition Multimedia Interface", es: "Interfaz Multimedia de Alta Definición", de: "High-Definition Multimedia Interface", nl: "High-Definition Multimedia Interface" },
                    { en: "High-Data Multimedia Interface", es: "Interfaz Multimedia de Datos Altos", de: "High-Data Multimedia Interface", nl: "High-Data Multimedia Interface" },
                    { en: "Hardware-Digital Media Interface", es: "Interfaz de Medios Digitales de Hardware", de: "Hardware-Digital Media Interface", nl: "Hardware-Digital Media Interface" },
                    { en: "High-Definition Media Input", es: "Entrada de Medios de Alta Definición", de: "High-Definition Media Input", nl: "High-Definition Media Input" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a chipset on a motherboard?",
                    es: "¿Qué es un chipset en una placa madre?",
                    de: "Was ist ein Chipsatz auf einem Motherboard?",
                    nl: "Wat is een chipset op een moederbord?"
                },
                options: [
                    { en: "A group of microchips that control data flow between components", es: "Un grupo de microchips que controlan el flujo de datos entre componentes", de: "Eine Gruppe von Mikrochips, die den Datenfluss zwischen Komponenten steuert", nl: "Een groep microchips die de gegevensstroom tussen componenten regelt" },
                    { en: "The main processor", es: "El procesador principal", de: "Der Hauptprozessor", nl: "De hoofdprocessor" },
                    { en: "The power connector", es: "El conector de energía", de: "Der Stromanschluss", nl: "De stroomaansluiting" },
                    { en: "The memory slots", es: "Las ranuras de memoria", de: "Die Speichersteckplätze", nl: "De geheugenslots" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is liquid cooling in computers?",
                    es: "¿Qué es la refrigeración líquida en computadoras?",
                    de: "Was ist Flüssigkeitskühlung in Computern?",
                    nl: "Wat is vloeistofkoeling in computers?"
                },
                options: [
                    { en: "A cooling system using liquid coolant to transfer heat", es: "Un sistema de refrigeración que usa refrigerante líquido para transferir calor", de: "Ein Kühlsystem, das flüssiges Kühlmittel zur Wärmeübertragung verwendet", nl: "Een koelsysteem dat vloeibare koelvloeistof gebruikt om warmte over te dragen" },
                    { en: "A waterproof case for computers", es: "Una carcasa impermeable para computadoras", de: "Ein wasserdichtes Gehäuse für Computer", nl: "Een waterdichte behuizing voor computers" },
                    { en: "A method of cleaning components", es: "Un método para limpiar componentes", de: "Eine Methode zur Reinigung von Komponenten", nl: "Een methode om componenten schoon te maken" },
                    { en: "A type of storage device", es: "Un tipo de dispositivo de almacenamiento", de: "Eine Art Speichergerät", nl: "Een type opslagapparaat" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the purpose of cache memory?",
                    es: "¿Cuál es el propósito de la memoria caché?",
                    de: "Was ist der Zweck des Cache-Speichers?",
                    nl: "Wat is het doel van cache geheugen?"
                },
                options: [
                    { en: "Storing frequently used data for faster access", es: "Almacenar datos usados frecuentemente para acceso más rápido", de: "Häufig verwendete Daten für schnelleren Zugriff speichern", nl: "Veelgebruikte gegevens opslaan voor snellere toegang" },
                    { en: "Long-term data storage", es: "Almacenamiento de datos a largo plazo", de: "Langzeit-Datenspeicherung", nl: "Langetermijn gegevensopslag" },
                    { en: "Power backup", es: "Respaldo de energía", de: "Stromversorgung", nl: "Stroom backup" },
                    { en: "Network communication", es: "Comunicación de red", de: "Netzwerkkommunikation", nl: "Netwerkcommunicatie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is an optical drive?",
                    es: "¿Qué es una unidad óptica?",
                    de: "Was ist ein optisches Laufwerk?",
                    nl: "Wat is een optische drive?"
                },
                options: [
                    { en: "A device that reads/writes optical discs like CDs and DVDs", es: "Un dispositivo que lee/escribe discos ópticos como CDs y DVDs", de: "Ein Gerät, das optische Discs wie CDs und DVDs liest/schreibt", nl: "Een apparaat dat optische schijven zoals CD's en DVD's leest/schrijft" },
                    { en: "A type of monitor", es: "Un tipo de monitor", de: "Eine Art Monitor", nl: "Een type monitor" },
                    { en: "A network adapter", es: "Un adaptador de red", de: "Ein Netzwerkadapter", nl: "Een netwerkadapter" },
                    { en: "A sound card", es: "Una tarjeta de sonido", de: "Eine Soundkarte", nl: "Een geluidskaart" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What does USB stand for?",
                    es: "¿Qué significa USB?",
                    de: "Wofür steht USB?",
                    nl: "Wat betekent USB?"
                },
                options: [
                    { en: "Universal Serial Bus", es: "Bus Serie Universal", de: "Universal Serial Bus", nl: "Universal Serial Bus" },
                    { en: "United System Bus", es: "Bus de Sistema Unido", de: "United System Bus", nl: "United System Bus" },
                    { en: "Universal Storage Bus", es: "Bus de Almacenamiento Universal", de: "Universal Storage Bus", nl: "Universal Storage Bus" },
                    { en: "Unified Serial Bus", es: "Bus Serie Unificado", de: "Unified Serial Bus", nl: "Unified Serial Bus" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is ECC memory?",
                    es: "¿Qué es la memoria ECC?",
                    de: "Was ist ECC-Speicher?",
                    nl: "Wat is ECC geheugen?"
                },
                options: [
                    { en: "Error-Correcting Code memory that detects and corrects data errors", es: "Memoria de Código de Corrección de Errores que detecta y corrige errores de datos", de: "Error-Correcting Code Speicher, der Datenfehler erkennt und korrigiert", nl: "Error-Correcting Code geheugen dat datafouten detecteert en corrigeert" },
                    { en: "Extra Capacity Cache memory", es: "Memoria Caché de Capacidad Extra", de: "Extra Capacity Cache Speicher", nl: "Extra Capacity Cache geheugen" },
                    { en: "Enhanced Computer Communication memory", es: "Memoria de Comunicación Mejorada de Computadora", de: "Enhanced Computer Communication Speicher", nl: "Enhanced Computer Communication geheugen" },
                    { en: "Efficient Core Component memory", es: "Memoria de Componente de Núcleo Eficiente", de: "Efficient Core Component Speicher", nl: "Efficient Core Component geheugen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a network interface card (NIC)?",
                    es: "¿Qué es una tarjeta de interfaz de red (NIC)?",
                    de: "Was ist eine Netzwerkkarte (NIC)?",
                    nl: "Wat is een netwerkinterfacekaart (NIC)?"
                },
                options: [
                    { en: "Hardware that allows a computer to connect to a network", es: "Hardware que permite a una computadora conectarse a una red", de: "Hardware, das einem Computer ermöglicht, sich mit einem Netzwerk zu verbinden", nl: "Hardware waarmee een computer verbinding kan maken met een netwerk" },
                    { en: "A type of processor", es: "Un tipo de procesador", de: "Eine Art Prozessor", nl: "Een type processor" },
                    { en: "A storage device", es: "Un dispositivo de almacenamiento", de: "Ein Speichergerät", nl: "Een opslagapparaat" },
                    { en: "A display adapter", es: "Un adaptador de pantalla", de: "Ein Bildschirmadapter", nl: "Een beeldschermadapter" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is VRAM?",
                    es: "¿Qué es VRAM?",
                    de: "Was ist VRAM?",
                    nl: "Wat is VRAM?"
                },
                options: [
                    { en: "Video Random Access Memory used by graphics cards", es: "Memoria de Acceso Aleatorio de Video usada por tarjetas gráficas", de: "Video Random Access Memory, das von Grafikkarten verwendet wird", nl: "Video Random Access Memory gebruikt door grafische kaarten" },
                    { en: "Virtual Random Access Memory", es: "Memoria de Acceso Aleatorio Virtual", de: "Virtual Random Access Memory", nl: "Virtual Random Access Memory" },
                    { en: "Variable Random Access Memory", es: "Memoria de Acceso Aleatorio Variable", de: "Variable Random Access Memory", nl: "Variable Random Access Memory" },
                    { en: "Volatile Random Access Memory", es: "Memoria de Acceso Aleatorio Volátil", de: "Volatile Random Access Memory", nl: "Volatile Random Access Memory" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the function of a sound card?",
                    es: "¿Cuál es la función de una tarjeta de sonido?",
                    de: "Was ist die Funktion einer Soundkarte?",
                    nl: "Wat is de functie van een geluidskaart?"
                },
                options: [
                    { en: "Converting digital audio to analog signals for speakers", es: "Convertir audio digital a señales analógicas para altavoces", de: "Digitales Audio in analoge Signale für Lautsprecher umwandeln", nl: "Digitale audio omzetten naar analoge signalen voor luidsprekers" },
                    { en: "Processing video signals", es: "Procesar señales de video", de: "Videosignale verarbeiten", nl: "Video signalen verwerken" },
                    { en: "Managing network connections", es: "Gestionar conexiones de red", de: "Netzwerkverbindungen verwalten", nl: "Netwerkverbindingen beheren" },
                    { en: "Storing audio files", es: "Almacenar archivos de audio", de: "Audiodateien speichern", nl: "Audiobestanden opslaan" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is firmware?",
                    es: "¿Qué es el firmware?",
                    de: "Was ist Firmware?",
                    nl: "Wat is firmware?"
                },
                options: [
                    { en: "Low-level software stored in hardware that controls device functions", es: "Software de bajo nivel almacenado en hardware que controla funciones del dispositivo", de: "Low-Level-Software, die in Hardware gespeichert ist und Gerätefunktionen steuert", nl: "Low-level software opgeslagen in hardware die apparaatfuncties regelt" },
                    { en: "The computer's operating system", es: "El sistema operativo de la computadora", de: "Das Betriebssystem des Computers", nl: "Het besturingssysteem van de computer" },
                    { en: "Application software", es: "Software de aplicación", de: "Anwendungssoftware", nl: "Toepassingssoftware" },
                    { en: "A type of virus", es: "Un tipo de virus", de: "Eine Art Virus", nl: "Een type virus" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a diode in electronics?",
                    es: "¿Qué es un diodo en electrónica?",
                    de: "Was ist eine Diode in der Elektronik?",
                    nl: "Wat is een diode in elektronica?"
                },
                options: [
                    { en: "A component that allows current to flow in one direction only", es: "Un componente que permite que la corriente fluya solo en una dirección", de: "Eine Komponente, die Strom nur in eine Richtung fließen lässt", nl: "Een component die stroom slechts in één richting laat stromen" },
                    { en: "A component that stores electrical energy", es: "Un componente que almacena energía eléctrica", de: "Eine Komponente, die elektrische Energie speichert", nl: "Een component die elektrische energie opslaat" },
                    { en: "A component that amplifies signals", es: "Un componente que amplifica señales", de: "Eine Komponente, die Signale verstärkt", nl: "Een component die signalen versterkt" },
                    { en: "A component that resists current flow", es: "Un componente que resiste el flujo de corriente", de: "Eine Komponente, die dem Stromfluss widersteht", nl: "Een component die stroomstroom weerstand biedt" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the purpose of a voltage regulator?",
                    es: "¿Cuál es el propósito de un regulador de voltaje?",
                    de: "Was ist der Zweck eines Spannungsreglers?",
                    nl: "Wat is het doel van een spanningsregelaar?"
                },
                options: [
                    { en: "Maintaining constant voltage output despite input variations", es: "Mantener salida de voltaje constante a pesar de variaciones de entrada", de: "Konstante Spannungsausgabe trotz Eingangsschwankungen aufrechterhalten", nl: "Constante spanningsuitgang handhaven ondanks ingangsvariaties" },
                    { en: "Converting AC to DC", es: "Convertir AC a DC", de: "AC in DC umwandeln", nl: "AC naar DC omzetten" },
                    { en: "Amplifying signals", es: "Amplificar señales", de: "Signale verstärken", nl: "Signalen versterken" },
                    { en: "Storing electrical energy", es: "Almacenar energía eléctrica", de: "Elektrische Energie speichern", nl: "Elektrische energie opslaan" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is an integrated circuit (IC)?",
                    es: "¿Qué es un circuito integrado (IC)?",
                    de: "Was ist ein integrierter Schaltkreis (IC)?",
                    nl: "Wat is een geïntegreerde schakeling (IC)?"
                },
                options: [
                    { en: "Multiple electronic components combined on a single chip", es: "Múltiples componentes electrónicos combinados en un solo chip", de: "Mehrere elektronische Komponenten auf einem einzigen Chip kombiniert", nl: "Meerdere elektronische componenten gecombineerd op een enkele chip" },
                    { en: "A single transistor", es: "Un solo transistor", de: "Ein einzelner Transistor", nl: "Een enkele transistor" },
                    { en: "A power supply unit", es: "Una unidad de fuente de alimentación", de: "Ein Netzteil", nl: "Een voedingseenheid" },
                    { en: "A circuit board", es: "Una placa de circuito", de: "Eine Leiterplatte", nl: "Een printplaat" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What does LED stand for?",
                    es: "¿Qué significa LED?",
                    de: "Wofür steht LED?",
                    nl: "Wat betekent LED?"
                },
                options: [
                    { en: "Light Emitting Diode", es: "Diodo Emisor de Luz", de: "Lichtemittierende Diode", nl: "Licht Emitterende Diode" },
                    { en: "Low Energy Device", es: "Dispositivo de Baja Energía", de: "Low Energy Device", nl: "Lage Energie Apparaat" },
                    { en: "Light Electronic Display", es: "Pantalla Electrónica de Luz", de: "Light Electronic Display", nl: "Licht Elektronisch Display" },
                    { en: "Linear Electronic Device", es: "Dispositivo Electrónico Lineal", de: "Linear Electronic Device", nl: "Lineair Elektronisch Apparaat" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the difference between analog and digital signals?",
                    es: "¿Cuál es la diferencia entre señales analógicas y digitales?",
                    de: "Was ist der Unterschied zwischen analogen und digitalen Signalen?",
                    nl: "Wat is het verschil tussen analoge en digitale signalen?"
                },
                options: [
                    { en: "Analog signals are continuous, digital signals are discrete", es: "Las señales analógicas son continuas, las señales digitales son discretas", de: "Analoge Signale sind kontinuierlich, digitale Signale sind diskret", nl: "Analoge signalen zijn continu, digitale signalen zijn discreet" },
                    { en: "Digital signals are continuous, analog signals are discrete", es: "Las señales digitales son continuas, las señales analógicas son discretas", de: "Digitale Signale sind kontinuierlich, analoge Signale sind diskret", nl: "Digitale signalen zijn continu, analoge signalen zijn discreet" },
                    { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Het is hetzelfde" },
                    { en: "Analog signals are faster", es: "Las señales analógicas son más rápidas", de: "Analoge Signale sind schneller", nl: "Analoge signalen zijn sneller" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a breadboard used for?",
                    es: "¿Para qué se usa una protoboard?",
                    de: "Wofür wird ein Breadboard verwendet?",
                    nl: "Waarvoor wordt een breadboard gebruikt?"
                },
                options: [
                    { en: "Prototyping and testing electronic circuits without soldering", es: "Prototipar y probar circuitos electrónicos sin soldar", de: "Prototyping und Testen elektronischer Schaltungen ohne Löten", nl: "Prototyping en testen van elektronische schakelingen zonder solderen" },
                    { en: "Cutting bread", es: "Cortar pan", de: "Brot schneiden", nl: "Brood snijden" },
                    { en: "Storing components", es: "Almacenar componentes", de: "Komponenten lagern", nl: "Componenten opslaan" },
                    { en: "Measuring voltage", es: "Medir voltaje", de: "Spannung messen", nl: "Spanning meten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is PWM in electronics?",
                    es: "¿Qué es PWM en electrónica?",
                    de: "Was ist PWM in der Elektronik?",
                    nl: "Wat is PWM in elektronica?"
                },
                options: [
                    { en: "Pulse Width Modulation - controlling power by varying signal width", es: "Modulación de Ancho de Pulso - controlar potencia variando ancho de señal", de: "Pulsweitenmodulation - Leistungssteuerung durch Variation der Signalbreite", nl: "Pulse Width Modulation - vermogen regelen door signaalbreedtevariatie" },
                    { en: "Power Wave Management", es: "Gestión de Onda de Potencia", de: "Power Wave Management", nl: "Power Wave Management" },
                    { en: "Pulse Wave Monitoring", es: "Monitoreo de Onda de Pulso", de: "Pulse Wave Monitoring", nl: "Pulse Wave Monitoring" },
                    { en: "Primary Wire Management", es: "Gestión de Alambre Primario", de: "Primary Wire Management", nl: "Primary Wire Management" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a multimeter used for?",
                    es: "¿Para qué se usa un multímetro?",
                    de: "Wofür wird ein Multimeter verwendet?",
                    nl: "Waarvoor wordt een multimeter gebruikt?"
                },
                options: [
                    { en: "Measuring voltage, current, and resistance in circuits", es: "Medir voltaje, corriente y resistencia en circuitos", de: "Spannung, Strom und Widerstand in Schaltungen messen", nl: "Spanning, stroom en weerstand in schakelingen meten" },
                    { en: "Creating multiple circuits", es: "Crear múltiples circuitos", de: "Mehrere Schaltkreise erstellen", nl: "Meerdere schakelingen maken" },
                    { en: "Amplifying signals", es: "Amplificar señales", de: "Signale verstärken", nl: "Signalen versterken" },
                    { en: "Storing electrical energy", es: "Almacenar energía eléctrica", de: "Elektrische Energie speichern", nl: "Elektrische energie opslaan" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the purpose of a crystal oscillator?",
                    es: "¿Cuál es el propósito de un oscilador de cristal?",
                    de: "Was ist der Zweck eines Kristalloszillators?",
                    nl: "Wat is het doel van een kristal oscillator?"
                },
                options: [
                    { en: "Providing precise timing signals for digital circuits", es: "Proporcionar señales de tiempo precisas para circuitos digitales", de: "Präzise Zeitgebersignale für digitale Schaltungen bereitstellen", nl: "Nauwkeurige tijdsignalen leveren voor digitale schakelingen" },
                    { en: "Amplifying audio signals", es: "Amplificar señales de audio", de: "Audiosignale verstärken", nl: "Audiosignalen versterken" },
                    { en: "Converting AC to DC", es: "Convertir AC a DC", de: "AC in DC umwandeln", nl: "AC naar DC omzetten" },
                    { en: "Filtering noise from signals", es: "Filtrar ruido de las señales", de: "Rauschen aus Signalen filtern", nl: "Ruis uit signalen filteren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is an inductor in electronics?",
                    es: "¿Qué es un inductor en electrónica?",
                    de: "Was ist eine Induktivität in der Elektronik?",
                    nl: "Wat is een inductor in elektronica?"
                },
                options: [
                    { en: "A component that stores energy in a magnetic field", es: "Un componente que almacena energía en un campo magnético", de: "Eine Komponente, die Energie in einem Magnetfeld speichert", nl: "Een component die energie opslaat in een magnetisch veld" },
                    { en: "A component that stores energy in an electric field", es: "Un componente que almacena energía en un campo eléctrico", de: "Eine Komponente, die Energie in einem elektrischen Feld speichert", nl: "Een component die energie opslaat in een elektrisch veld" },
                    { en: "A component that amplifies signals", es: "Un componente que amplifica señales", de: "Eine Komponente, die Signale verstärkt", nl: "Een component die signalen versterkt" },
                    { en: "A component that converts signals", es: "Un componente que convierte señales", de: "Eine Komponente, die Signale umwandelt", nl: "Een component die signalen omzet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is soldering in electronics?",
                    es: "¿Qué es la soldadura en electrónica?",
                    de: "Was ist Löten in der Elektronik?",
                    nl: "Wat is solderen in elektronica?"
                },
                options: [
                    { en: "Joining components using melted metal alloy", es: "Unir componentes usando aleación metálica derretida", de: "Komponenten mit geschmolzener Metalllegierung verbinden", nl: "Componenten verbinden met gesmolten metaallegering" },
                    { en: "Testing circuit connections", es: "Probar conexiones de circuito", de: "Schaltungsverbindungen testen", nl: "Schakelingverbindingen testen" },
                    { en: "Measuring component values", es: "Medir valores de componentes", de: "Komponentenwerte messen", nl: "Componentwaarden meten" },
                    { en: "Designing circuit layouts", es: "Diseñar diseños de circuitos", de: "Schaltungslayouts entwerfen", nl: "Schakelinglayouts ontwerpen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a logic gate in digital electronics?",
                    es: "¿Qué es una compuerta lógica en electrónica digital?",
                    de: "Was ist ein Logikgatter in der Digitalelektronik?",
                    nl: "Wat is een logische poort in digitale elektronica?"
                },
                options: [
                    { en: "A circuit that performs logical operations on digital inputs", es: "Un circuito que realiza operaciones lógicas en entradas digitales", de: "Ein Schaltkreis, der logische Operationen an digitalen Eingängen durchführt", nl: "Een schakeling die logische bewerkingen uitvoert op digitale ingangen" },
                    { en: "A physical gate in a circuit", es: "Una compuerta física en un circuito", de: "Ein physisches Tor in einem Schaltkreis", nl: "Een fysieke poort in een schakeling" },
                    { en: "A power control switch", es: "Un interruptor de control de energía", de: "Ein Stromsteuerungsschalter", nl: "Een vermogensregelschakelaar" },
                    { en: "A signal amplifier", es: "Un amplificador de señal", de: "Ein Signalverstärker", nl: "Een signaalversterker" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What does MOSFET stand for?",
                    es: "¿Qué significa MOSFET?",
                    de: "Wofür steht MOSFET?",
                    nl: "Wat betekent MOSFET?"
                },
                options: [
                    { en: "Metal-Oxide-Semiconductor Field-Effect Transistor", es: "Transistor de Efecto de Campo de Semiconductor de Óxido Metálico", de: "Metal-Oxide-Semiconductor Field-Effect Transistor", nl: "Metal-Oxide-Semiconductor Field-Effect Transistor" },
                    { en: "Multiple-Output-Signal Field-Effect Transistor", es: "Transistor de Efecto de Campo de Señal de Salida Múltiple", de: "Multiple-Output-Signal Field-Effect Transistor", nl: "Multiple-Output-Signal Field-Effect Transistor" },
                    { en: "Micro-Operational-System Field-Effect Transistor", es: "Transistor de Efecto de Campo de Sistema Micro-Operacional", de: "Micro-Operational-System Field-Effect Transistor", nl: "Micro-Operational-System Field-Effect Transistor" },
                    { en: "Metal-Organic-Semiconductor Field-Effect Transistor", es: "Transistor de Efecto de Campo de Semiconductor Metálico-Orgánico", de: "Metal-Organic-Semiconductor Field-Effect Transistor", nl: "Metal-Organic-Semiconductor Field-Effect Transistor" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is electromagnetic interference (EMI)?",
                    es: "¿Qué es la interferencia electromagnética (EMI)?",
                    de: "Was ist elektromagnetische Interferenz (EMI)?",
                    nl: "Wat is elektromagnetische interferentie (EMI)?"
                },
                options: [
                    { en: "Unwanted electromagnetic signals that disrupt electronic devices", es: "Señales electromagnéticas no deseadas que interrumpen dispositivos electrónicos", de: "Unerwünschte elektromagnetische Signale, die elektronische Geräte stören", nl: "Ongewenste elektromagnetische signalen die elektronische apparaten verstoren" },
                    { en: "A method of signal amplification", es: "Un método de amplificación de señal", de: "Eine Methode zur Signalverstärkung", nl: "Een methode van signaalversterking" },
                    { en: "A type of circuit design", es: "Un tipo de diseño de circuito", de: "Eine Art Schaltungsentwurf", nl: "Een type schakelingontwerp" },
                    { en: "A power measurement unit", es: "Una unidad de medida de potencia", de: "Eine Leistungsmesseinheit", nl: "Een vermogensmeeteenheid" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a printed circuit board (PCB)?",
                    es: "¿Qué es una placa de circuito impreso (PCB)?",
                    de: "Was ist eine Leiterplatte (PCB)?",
                    nl: "Wat is een gedrukte printplaat (PCB)?"
                },
                options: [
                    { en: "A board with conductive pathways connecting electronic components", es: "Una placa con caminos conductivos que conectan componentes electrónicos", de: "Eine Platine mit leitfähigen Bahnen, die elektronische Komponenten verbinden", nl: "Een bord met geleidende paden die elektronische componenten verbinden" },
                    { en: "A display screen for computers", es: "Una pantalla de visualización para computadoras", de: "Ein Bildschirm für Computer", nl: "Een beeldscherm voor computers" },
                    { en: "A power supply unit", es: "Una unidad de fuente de alimentación", de: "Ein Netzteil", nl: "Een voedingseenheid" },
                    { en: "A type of memory chip", es: "Un tipo de chip de memoria", de: "Eine Art Speicherchip", nl: "Een type geheugenchip" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is clock speed in a CPU?",
                    es: "¿Qué es la velocidad de reloj en una CPU?",
                    de: "Was ist die Taktgeschwindigkeit in einer CPU?",
                    nl: "Wat is kloksnelheid in een CPU?"
                },
                options: [
                    { en: "The rate at which the CPU executes instructions per second", es: "La tasa a la que la CPU ejecuta instrucciones por segundo", de: "Die Geschwindigkeit, mit der die CPU Anweisungen pro Sekunde ausführt", nl: "De snelheid waarmee de CPU instructies per seconde uitvoert" },
                    { en: "The time it takes to boot the computer", es: "El tiempo que toma arrancar la computadora", de: "Die Zeit, die zum Starten des Computers benötigt wird", nl: "De tijd die het kost om de computer op te starten" },
                    { en: "The speed of data transfer to memory", es: "La velocidad de transferencia de datos a la memoria", de: "Die Geschwindigkeit der Datenübertragung zum Speicher", nl: "De snelheid van gegevensoverdracht naar het geheugen" },
                    { en: "The refresh rate of the display", es: "La tasa de refresco de la pantalla", de: "Die Bildwiederholrate des Displays", nl: "De verversingsfrequentie van het beeldscherm" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is overclocking?",
                    es: "¿Qué es el overclocking?",
                    de: "Was ist Übertakten?",
                    nl: "Wat is overklokken?"
                },
                options: [
                    { en: "Running hardware components at higher speeds than manufacturer specifications", es: "Ejecutar componentes de hardware a velocidades más altas que las especificaciones del fabricante", de: "Hardware-Komponenten mit höheren Geschwindigkeiten als den Herstellerspezifikationen betreiben", nl: "Hardware componenten draaien op hogere snelheden dan fabrieksspecificaties" },
                    { en: "Setting the system clock to the wrong time", es: "Configurar el reloj del sistema a la hora incorrecta", de: "Die Systemuhr auf die falsche Zeit stellen", nl: "De systeemklok op de verkeerde tijd instellen" },
                    { en: "Using too many programs at once", es: "Usar demasiados programas a la vez", de: "Zu viele Programme gleichzeitig verwenden", nl: "Te veel programma's tegelijk gebruiken" },
                    { en: "Upgrading the computer's hardware", es: "Actualizar el hardware de la computadora", de: "Die Hardware des Computers aufrüsten", nl: "De hardware van de computer upgraden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is thermal throttling?",
                    es: "¿Qué es la limitación térmica?",
                    de: "Was ist thermisches Drosseln?",
                    nl: "Wat is thermische beperking?"
                },
                options: [
                    { en: "Reducing performance when components get too hot to prevent damage", es: "Reducir el rendimiento cuando los componentes se calientan demasiado para evitar daños", de: "Leistung reduzieren, wenn Komponenten zu heiß werden, um Schäden zu verhindern", nl: "Prestaties verminderen wanneer componenten te heet worden om schade te voorkomen" },
                    { en: "Controlling the computer's fan speed", es: "Controlar la velocidad del ventilador de la computadora", de: "Die Lüftergeschwindigkeit des Computers steuern", nl: "De ventilatorsnelheid van de computer regelen" },
                    { en: "Measuring temperature with sensors", es: "Medir la temperatura con sensores", de: "Temperatur mit Sensoren messen", nl: "Temperatuur meten met sensoren" },
                    { en: "Installing cooling systems", es: "Instalar sistemas de refrigeración", de: "Kühlsysteme installieren", nl: "Koelsystemen installeren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is dual-channel memory?",
                    es: "¿Qué es la memoria de doble canal?",
                    de: "Was ist Dual-Channel-Speicher?",
                    nl: "Wat is dual-channel geheugen?"
                },
                options: [
                    { en: "Memory configuration using two channels for increased bandwidth", es: "Configuración de memoria usando dos canales para mayor ancho de banda", de: "Speicherkonfiguration mit zwei Kanälen für erhöhte Bandbreite", nl: "Geheugenconfiguratie die twee kanalen gebruikt voor verhoogde bandbreedte" },
                    { en: "Memory that can store two types of data", es: "Memoria que puede almacenar dos tipos de datos", de: "Speicher, der zwei Datentypen speichern kann", nl: "Geheugen dat twee soorten data kan opslaan" },
                    { en: "Two separate memory modules", es: "Dos módulos de memoria separados", de: "Zwei separate Speichermodule", nl: "Twee afzonderlijke geheugenmodules" },
                    { en: "Memory with two different speeds", es: "Memoria con dos velocidades diferentes", de: "Speicher mit zwei verschiedenen Geschwindigkeiten", nl: "Geheugen met twee verschillende snelheden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the purpose of a heat sink?",
                    es: "¿Cuál es el propósito de un disipador de calor?",
                    de: "Was ist der Zweck eines Kühlkörpers?",
                    nl: "Wat is het doel van een koellichaam?"
                },
                options: [
                    { en: "Absorbing and dissipating heat from electronic components", es: "Absorber y disipar el calor de los componentes electrónicos", de: "Wärme von elektronischen Komponenten absorbieren und ableiten", nl: "Warmte absorberen en afvoeren van elektronische componenten" },
                    { en: "Storing electrical energy", es: "Almacenar energía eléctrica", de: "Elektrische Energie speichern", nl: "Elektrische energie opslaan" },
                    { en: "Filtering electrical signals", es: "Filtrar señales eléctricas", de: "Elektrische Signale filtern", nl: "Elektrische signalen filteren" },
                    { en: "Converting AC to DC power", es: "Convertir energía AC a DC", de: "Wechselstrom zu Gleichstrom umwandeln", nl: "AC naar DC stroom omzetten" }
                ],
                correct: 0
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/technology', level9);
    }
})();