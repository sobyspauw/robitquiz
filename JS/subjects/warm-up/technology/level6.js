(function() {
    const level6 = {
        name: {
            en: "Cloud Computing and Web Services",
            es: "Computación en la Nube y Servicios Web",
            de: "Cloud Computing und Webdienste",
            nl: "Cloud Computing en Webservices"
        },
        questions: [
            {
                question: {
                    en: "What is cloud computing?",
                    es: "¿Qué es la computación en la nube?",
                    de: "Was ist Cloud Computing?",
                    nl: "Wat is cloud computing?"
                },
                options: [
                    { en: "Computing services delivered over the internet", es: "Servicios informáticos entregados a través de internet", de: "Computerdienstleistungen über das Internet bereitgestellt", nl: "Computerdiensten geleverd via internet" },
                    { en: "Computing in cloudy weather", es: "Computación en clima nublado", de: "Computer bei bewölktem Wetter", nl: "Computers bij bewolkt weer" },
                    { en: "Computers in the sky", es: "Computadoras en el cielo", de: "Computer im Himmel", nl: "Computers in de lucht" },
                    { en: "Weather forecasting", es: "Pronóstico del tiempo", de: "Wettervorhersage", nl: "Weersvoorspelling" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud computing delivers computing services including servers, storage, databases, networking, software, and analytics over the internet, allowing users to access resources on-demand without owning the underlying infrastructure.",
                    es: "La computación en la nube entrega servicios informáticos incluyendo servidores, almacenamiento, bases de datos, redes, software y análisis a través de internet, permitiendo a los usuarios acceder a recursos bajo demanda sin poseer la infraestructura subyacente.",
                    de: "Cloud Computing liefert Computerdienstleistungen einschließlich Server, Speicher, Datenbanken, Netzwerke, Software und Analysen über das Internet und ermöglicht Benutzern den bedarfsgerechten Zugriff auf Ressourcen ohne Besitz der zugrunde liegenden Infrastruktur.",
                    nl: "Cloud computing levert computerdiensten inclusief servers, opslag, databases, netwerken, software en analyses via het internet, waardoor gebruikers on-demand toegang hebben tot bronnen zonder eigendom van de onderliggende infrastructuur."
                }
            },
            {
                question: {
                    en: "What is Software as a Service (SaaS)?",
                    es: "¿Qué es Software como Servicio (SaaS)?",
                    de: "Was ist Software as a Service (SaaS)?",
                    nl: "Wat is Software as a Service (SaaS)?"
                },
                options: [
                    { en: "Software applications accessed through the internet", es: "Aplicaciones de software accedidas a través de internet", de: "Softwareanwendungen, auf die über das Internet zugegriffen wird", nl: "Softwaretoepassingen die via internet worden benaderd" },
                    { en: "Service for installing software", es: "Servicio para instalar software", de: "Service zur Installation von Software", nl: "Service voor het installeren van software" },
                    { en: "Software repair service", es: "Servicio de reparación de software", de: "Software-Reparaturservice", nl: "Software reparatieservice" },
                    { en: "Software sales service", es: "Servicio de venta de software", de: "Software-Verkaufsservice", nl: "Software verkoopservice" }
                ],
                correct: 0,
                explanation: {
                    en: "SaaS is a cloud computing model where software applications are hosted by a provider and made available to customers over the internet, typically through a web browser, eliminating the need for local installation and maintenance.",
                    es: "SaaS es un modelo de computación en la nube donde las aplicaciones de software son alojadas por un proveedor y puestas a disposición de los clientes a través de internet, típicamente a través de un navegador web, eliminando la necesidad de instalación y mantenimiento local.",
                    de: "SaaS ist ein Cloud-Computing-Modell, bei dem Softwareanwendungen von einem Anbieter gehostet und Kunden über das Internet zur Verfügung gestellt werden, normalerweise über einen Webbrowser, wodurch lokale Installation und Wartung überflüssig werden.",
                    nl: "SaaS is een cloud computing model waarbij softwaretoepassingen worden gehost door een provider en beschikbaar gesteld aan klanten via het internet, meestal via een webbrowser, waardoor lokale installatie en onderhoud overbodig wordt."
                }
            },
            {
                question: {
                    en: "What is Platform as a Service (PaaS)?",
                    es: "¿Qué es Plataforma como Servicio (PaaS)?",
                    de: "Was ist Platform as a Service (PaaS)?",
                    nl: "Wat is Platform as a Service (PaaS)?"
                },
                options: [
                    { en: "Development platform provided as a cloud service", es: "Plataforma de desarrollo proporcionada como servicio en la nube", de: "Entwicklungsplattform als Cloud-Service bereitgestellt", nl: "Ontwikkelingsplatform geleverd als cloudservice" },
                    { en: "Platform for standing", es: "Plataforma para estar de pie", de: "Plattform zum Stehen", nl: "Platform om op te staan" },
                    { en: "Service platform", es: "Plataforma de servicio", de: "Service-Plattform", nl: "Serviceplatform" },
                    { en: "Platform rental service", es: "Servicio de alquiler de plataforma", de: "Plattform-Vermietungsservice", nl: "Platform verhuurservice" }
                ],
                correct: 0,
                explanation: {
                    en: "PaaS provides a development platform including tools, libraries, and services that developers can use to build, test, and deploy applications without managing the underlying infrastructure.",
                    es: "PaaS proporciona una plataforma de desarrollo que incluye herramientas, bibliotecas y servicios que los desarrolladores pueden usar para construir, probar y desplegar aplicaciones sin gestionar la infraestructura subyacente.",
                    de: "PaaS bietet eine Entwicklungsplattform mit Tools, Bibliotheken und Services, die Entwickler nutzen können, um Anwendungen zu erstellen, zu testen und bereitzustellen, ohne die zugrunde liegende Infrastruktur zu verwalten.",
                    nl: "PaaS biedt een ontwikkelingsplatform inclusief tools, bibliotheken en services die ontwikkelaars kunnen gebruiken om applicaties te bouwen, testen en implementeren zonder de onderliggende infrastructuur te beheren."
                }
            },
            {
                question: {
                    en: "What is Infrastructure as a Service (IaaS)?",
                    es: "¿Qué es Infraestructura como Servicio (IaaS)?",
                    de: "Was ist Infrastructure as a Service (IaaS)?",
                    nl: "Wat is Infrastructure as a Service (IaaS)?"
                },
                options: [
                    { en: "Computing infrastructure provided as a cloud service", es: "Infraestructura informática proporcionada como servicio en la nube", de: "Computer-Infrastruktur als Cloud-Service bereitgestellt", nl: "Computerinfrastructuur geleverd als cloudservice" },
                    { en: "Infrastructure construction service", es: "Servicio de construcción de infraestructura", de: "Infrastrukturbauservice", nl: "Infrastructuur bouwservice" },
                    { en: "Internet access service", es: "Servicio de acceso a internet", de: "Internetzugangsservice", nl: "Internet toegangsservice" },
                    { en: "Infrastructure maintenance", es: "Mantenimiento de infraestructura", de: "Infrastruktur-Wartung", nl: "Infrastructuur onderhoud" }
                ],
                correct: 0,
                explanation: {
                    en: "IaaS provides virtualized computing resources over the internet, including virtual machines, storage, networks, and operating systems, giving users control over the infrastructure layer.",
                    es: "IaaS proporciona recursos informáticos virtualizados a través de internet, incluyendo máquinas virtuales, almacenamiento, redes y sistemas operativos, dando a los usuarios control sobre la capa de infraestructura.",
                    de: "IaaS bietet virtualisierte Computer-Ressourcen über das Internet, einschließlich virtueller Maschinen, Speicher, Netzwerke und Betriebssysteme, wodurch Benutzer Kontrolle über die Infrastrukturebene erhalten.",
                    nl: "IaaS biedt gevirtualiseerde computerbronnen via het internet, inclusief virtuele machines, opslag, netwerken en besturingssystemen, waardoor gebruikers controle hebben over de infrastructuurlaag."
                }
            },
            {
                question: {
                    en: "What is Amazon Web Services (AWS)?",
                    es: "¿Qué es Amazon Web Services (AWS)?",
                    de: "Was ist Amazon Web Services (AWS)?",
                    nl: "Wat is Amazon Web Services (AWS)?"
                },
                options: [
                    { en: "Amazon's cloud computing platform", es: "Plataforma de computación en la nube de Amazon", de: "Amazons Cloud-Computing-Plattform", nl: "Amazon's cloud computing platform" },
                    { en: "Amazon's website service", es: "Servicio de sitio web de Amazon", de: "Amazons Website-Service", nl: "Amazon's website service" },
                    { en: "Amazon's delivery service", es: "Servicio de entrega de Amazon", de: "Amazons Lieferservice", nl: "Amazon's bezorgservice" },
                    { en: "Amazon's web browser", es: "Navegador web de Amazon", de: "Amazons Webbrowser", nl: "Amazon's webbrowser" }
                ],
                correct: 0,
                explanation: {
                    en: "AWS is a comprehensive cloud computing platform offering over 200 services including computing power, storage, databases, networking, analytics, machine learning, and security tools.",
                    es: "AWS es una plataforma integral de computación en la nube que ofrece más de 200 servicios incluyendo poder de cómputo, almacenamiento, bases de datos, redes, análisis, aprendizaje automático y herramientas de seguridad.",
                    de: "AWS ist eine umfassende Cloud-Computing-Plattform mit über 200 Services einschließlich Rechenleistung, Speicher, Datenbanken, Netzwerken, Analysen, maschinellem Lernen und Sicherheitstools.",
                    nl: "AWS is een uitgebreid cloud computing platform dat meer dan 200 services biedt, inclusief rekenkracht, opslag, databases, netwerken, analyses, machine learning en beveiligingstools."
                }
            },
            {
                question: {
                    en: "What is Microsoft Azure?",
                    es: "¿Qué es Microsoft Azure?",
                    de: "Was ist Microsoft Azure?",
                    nl: "Wat is Microsoft Azure?"
                },
                options: [
                    { en: "Microsoft's cloud computing service", es: "Servicio de computación en la nube de Microsoft", de: "Microsofts Cloud-Computing-Service", nl: "Microsoft's cloud computing service" },
                    { en: "Microsoft's blue color", es: "Color azul de Microsoft", de: "Microsofts blaue Farbe", nl: "Microsoft's blauwe kleur" },
                    { en: "Microsoft's web browser", es: "Navegador web de Microsoft", de: "Microsofts Webbrowser", nl: "Microsoft's webbrowser" },
                    { en: "Microsoft's operating system", es: "Sistema operativo de Microsoft", de: "Microsofts Betriebssystem", nl: "Microsoft's besturingssysteem" }
                ],
                correct: 0,
                explanation: {
                    en: "Microsoft Azure is a cloud computing service offering IaaS, PaaS, and SaaS solutions, providing services for computing, analytics, storage, networking, and more across global data centers.",
                    es: "Microsoft Azure es un servicio de computación en la nube que ofrece soluciones IaaS, PaaS y SaaS, proporcionando servicios para computación, análisis, almacenamiento, redes y más a través de centros de datos globales.",
                    de: "Microsoft Azure ist ein Cloud-Computing-Service, der IaaS-, PaaS- und SaaS-Lösungen anbietet und Services für Computing, Analysen, Speicher, Netzwerke und mehr über globale Rechenzentren bereitstellt.",
                    nl: "Microsoft Azure is een cloud computing service die IaaS, PaaS en SaaS oplossingen biedt, met services voor computing, analyses, opslag, netwerken en meer via mondiale datacenters."
                }
            },
            {
                question: {
                    en: "What is Google Cloud Platform (GCP)?",
                    es: "¿Qué es Google Cloud Platform (GCP)?",
                    de: "Was ist Google Cloud Platform (GCP)?",
                    nl: "Wat is Google Cloud Platform (GCP)?"
                },
                options: [
                    { en: "Google's cloud computing services", es: "Servicios de computación en la nube de Google", de: "Googles Cloud-Computing-Services", nl: "Google's cloud computing services" },
                    { en: "Google's social platform", es: "Plataforma social de Google", de: "Googles soziale Plattform", nl: "Google's sociale platform" },
                    { en: "Google's search platform", es: "Plataforma de búsqueda de Google", de: "Googles Suchplattform", nl: "Google's zoekplatform" },
                    { en: "Google's gaming platform", es: "Plataforma de juegos de Google", de: "Googles Gaming-Plattform", nl: "Google's gaming platform" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is cloud storage?",
                    es: "¿Qué es el almacenamiento en la nube?",
                    de: "Was ist Cloud-Speicher?",
                    nl: "Wat is cloudopslag?"
                },
                options: [
                    { en: "Storing data on remote servers accessed via internet", es: "Almacenar datos en servidores remotos accedidos vía internet", de: "Daten auf entfernten Servern speichern, auf die über das Internet zugegriffen wird", nl: "Gegevens opslaan op externe servers die via internet worden benaderd" },
                    { en: "Storing things in clouds", es: "Almacenar cosas en nubes", de: "Dinge in Wolken speichern", nl: "Dingen opslaan in wolken" },
                    { en: "Weather data storage", es: "Almacenamiento de datos meteorológicos", de: "Wetterdatenspeicherung", nl: "Weergegevens opslag" },
                    { en: "Sky-based storage", es: "Almacenamiento basado en el cielo", de: "Himmelbasierte Speicherung", nl: "Op lucht gebaseerde opslag" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a web service?",
                    es: "¿Qué es un servicio web?",
                    de: "Was ist ein Webservice?",
                    nl: "Wat is een webservice?"
                },
                options: [
                    { en: "Software system designed for machine-to-machine interaction", es: "Sistema de software diseñado para interacción máquina a máquina", de: "Softwaresystem für Maschine-zu-Maschine-Interaktion entwickelt", nl: "Softwaresysteem ontworpen voor machine-tot-machine interactie" },
                    { en: "Website maintenance service", es: "Servicio de mantenimiento de sitios web", de: "Website-Wartungsservice", nl: "Website onderhoudsservice" },
                    { en: "Internet service provider", es: "Proveedor de servicios de internet", de: "Internet-Service-Provider", nl: "Internet service provider" },
                    { en: "Web design service", es: "Servicio de diseño web", de: "Webdesign-Service", nl: "Webdesign service" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is an API?",
                    es: "¿Qué es una API?",
                    de: "Was ist eine API?",
                    nl: "Wat is een API?"
                },
                options: [
                    { en: "Application Programming Interface for software communication", es: "Interfaz de Programación de Aplicaciones para comunicación de software", de: "Anwendungsprogrammierschnittstelle für Softwarekommunikation", nl: "Applicatieprogrammeerinterface voor softwarecommunicatie" },
                    { en: "Automatic Program Installation", es: "Instalación Automática de Programa", de: "Automatische Programminstallation", nl: "Automatische Programma Installatie" },
                    { en: "Advanced Programming Interface", es: "Interfaz de Programación Avanzada", de: "Erweiterte Programmierschnittstelle", nl: "Geavanceerde Programmeerinterface" },
                    { en: "Application Performance Indicator", es: "Indicador de Rendimiento de Aplicación", de: "Anwendungsleistungsindikator", nl: "Applicatie Prestatie-indicator" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is virtualization?",
                    es: "¿Qué es la virtualización?",
                    de: "Was ist Virtualisierung?",
                    nl: "Wat is virtualisatie?"
                },
                options: [
                    { en: "Creating virtual versions of computing resources", es: "Crear versiones virtuales de recursos informáticos", de: "Virtuelle Versionen von Computer-Ressourcen erstellen", nl: "Virtuele versies van computerbronnen maken" },
                    { en: "Making things virtual reality", es: "Hacer las cosas realidad virtual", de: "Dinge zu virtueller Realität machen", nl: "Dingen tot virtual reality maken" },
                    { en: "Visualizing data", es: "Visualizar datos", de: "Daten visualisieren", nl: "Gegevens visualiseren" },
                    { en: "Making things appear real", es: "Hacer que las cosas parezcan reales", de: "Dinge real erscheinen lassen", nl: "Dingen echt laten lijken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a container in cloud computing?",
                    es: "¿Qué es un contenedor en computación en la nube?",
                    de: "Was ist ein Container im Cloud Computing?",
                    nl: "Wat is een container in cloud computing?"
                },
                options: [
                    { en: "Lightweight, portable software package with dependencies", es: "Paquete de software ligero y portable con dependencias", de: "Leichtgewichtiges, tragbares Softwarepaket mit Abhängigkeiten", nl: "Lichtgewicht, draagbaar softwarepakket met afhankelijkheden" },
                    { en: "Storage container for data", es: "Contenedor de almacenamiento para datos", de: "Speicher-Container für Daten", nl: "Opslagcontainer voor gegevens" },
                    { en: "Physical container for servers", es: "Contenedor físico para servidores", de: "Physischer Container für Server", nl: "Fysieke container voor servers" },
                    { en: "Container for shipping computers", es: "Contenedor para enviar computadoras", de: "Container für den Versand von Computern", nl: "Container voor het verzenden van computers" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is Docker?",
                    es: "¿Qué es Docker?",
                    de: "Was ist Docker?",
                    nl: "Wat is Docker?"
                },
                options: [
                    { en: "Platform for developing and running containerized applications", es: "Plataforma para desarrollar y ejecutar aplicaciones en contenedores", de: "Plattform für die Entwicklung und Ausführung von containerisierten Anwendungen", nl: "Platform voor het ontwikkelen en uitvoeren van gecontaineriseerde applicaties" },
                    { en: "Ship loading software", es: "Software de carga de barcos", de: "Schiffslading-Software", nl: "Schip laadprogramma" },
                    { en: "Medical doctor software", es: "Software de médico", de: "Arzt-Software", nl: "Dokter software" },
                    { en: "Document storage system", es: "Sistema de almacenamiento de documentos", de: "Dokumentenspeichersystem", nl: "Document opslagsysteem" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is serverless computing?",
                    es: "¿Qué es la computación sin servidor?",
                    de: "Was ist Serverless Computing?",
                    nl: "Wat is serverless computing?"
                },
                options: [
                    { en: "Cloud computing where servers are managed by provider", es: "Computación en la nube donde los servidores son gestionados por el proveedor", de: "Cloud Computing, bei dem Server vom Anbieter verwaltet werden", nl: "Cloud computing waarbij servers worden beheerd door de provider" },
                    { en: "Computing without any servers", es: "Computación sin ningún servidor", de: "Computing ohne jegliche Server", nl: "Computing zonder servers" },
                    { en: "Broken server computing", es: "Computación con servidor roto", de: "Kaputte Server Computing", nl: "Kapotte server computing" },
                    { en: "Local computing only", es: "Solo computación local", de: "Nur lokale Datenverarbeitung", nl: "Alleen lokale computing" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is microservices architecture?",
                    es: "¿Qué es la arquitectura de microservicios?",
                    de: "Was ist Mikroservice-Architektur?",
                    nl: "Wat is microservices architectuur?"
                },
                options: [
                    { en: "Application built as collection of small, independent services", es: "Aplicación construida como colección de servicios pequeños e independientes", de: "Anwendung als Sammlung kleiner, unabhängiger Services aufgebaut", nl: "Applicatie gebouwd als verzameling van kleine, onafhankelijke services" },
                    { en: "Very small services", es: "Servicios muy pequeños", de: "Sehr kleine Services", nl: "Heel kleine services" },
                    { en: "Microscopic services", es: "Servicios microscópicos", de: "Mikroskopische Services", nl: "Microscopische services" },
                    { en: "Mini service architecture", es: "Arquitectura de mini servicios", de: "Mini-Service-Architektur", nl: "Mini service architectuur" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is load balancing?",
                    es: "¿Qué es el balanceo de carga?",
                    de: "Was ist Lastverteilung?",
                    nl: "Wat is load balancing?"
                },
                options: [
                    { en: "Distributing workload across multiple servers", es: "Distribuir carga de trabajo entre múltiples servidores", de: "Arbeitslast auf mehrere Server verteilen", nl: "Werklast verdelen over meerdere servers" },
                    { en: "Balancing physical loads", es: "Equilibrar cargas físicas", de: "Physische Lasten ausbalancieren", nl: "Fysieke lasten balanceren" },
                    { en: "Loading balance scales", es: "Cargar balanzas", de: "Waagen laden", nl: "Weegschalen laden" },
                    { en: "Carrying balanced loads", es: "Transportar cargas equilibradas", de: "Ausgeglichene Lasten tragen", nl: "Gebalanceerde lasten dragen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is auto-scaling?",
                    es: "¿Qué es el auto-escalado?",
                    de: "Was ist Auto-Skalierung?",
                    nl: "Wat is auto-scaling?"
                },
                options: [
                    { en: "Automatically adjusting computing resources based on demand", es: "Ajustar automáticamente recursos informáticos basado en demanda", de: "Automatisches Anpassen von Computer-Ressourcen basierend auf Bedarf", nl: "Automatisch aanpassen van computerbronnen op basis van vraag" },
                    { en: "Automatic scaling of fish", es: "Escalado automático de peces", de: "Automatisches Schuppen von Fischen", nl: "Automatisch schubben van vissen" },
                    { en: "Self-climbing stairs", es: "Escaleras que suben solas", de: "Selbstbegehbare Treppen", nl: "Zelf klimmenee trappen" },
                    { en: "Automatic weighing", es: "Pesado automático", de: "Automatisches Wiegen", nl: "Automatisch wegen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is CDN (Content Delivery Network)?",
                    es: "¿Qué es CDN (Red de Entrega de Contenido)?",
                    de: "Was ist ein CDN (Content Delivery Network)?",
                    nl: "Wat is een CDN (Content Delivery Network)?"
                },
                options: [
                    { en: "Network of servers that deliver web content efficiently", es: "Red de servidores que entrega contenido web eficientemente", de: "Netzwerk von Servern, das Webinhalte effizient bereitstellt", nl: "Netwerk van servers die webinhoud efficiënt leveren" },
                    { en: "Content Distribution Network", es: "Red de Distribución de Contenido", de: "Content-Verteilungsnetzwerk", nl: "Content Distributie Netwerk" },
                    { en: "Central Data Network", es: "Red de Datos Central", de: "Zentrales Datennetzwerk", nl: "Centraal Data Netwerk" },
                    { en: "Computer Download Network", es: "Red de Descarga de Computadora", de: "Computer-Download-Netzwerk", nl: "Computer Download Netwerk" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is cloud backup?",
                    es: "¿Qué es la copia de seguridad en la nube?",
                    de: "Was ist Cloud-Backup?",
                    nl: "Wat is cloud backup?"
                },
                options: [
                    { en: "Storing backup copies of data in cloud storage", es: "Almacenar copias de seguridad de datos en almacenamiento en la nube", de: "Backup-Kopien von Daten in Cloud-Speicher speichern", nl: "Back-upkopieën van gegevens opslaan in cloudopslag" },
                    { en: "Backing up clouds", es: "Hacer copias de seguridad de nubes", de: "Wolken sichern", nl: "Wolken back-uppen" },
                    { en: "Weather backup system", es: "Sistema de respaldo meteorológico", de: "Wetter-Backup-System", nl: "Weer backup systeem" },
                    { en: "Sky storage backup", es: "Respaldo de almacenamiento del cielo", de: "Himmelsspeicher-Backup", nl: "Lucht opslag backup" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is hybrid cloud?",
                    es: "¿Qué es la nube híbrida?",
                    de: "Was ist Hybrid Cloud?",
                    nl: "Wat is hybride cloud?"
                },
                options: [
                    { en: "Combination of public and private cloud services", es: "Combinación de servicios de nube pública y privada", de: "Kombination aus öffentlichen und privaten Cloud-Services", nl: "Combinatie van openbare en private cloudservices" },
                    { en: "Mixed weather cloud", es: "Nube de clima mixto", de: "Gemischte Wetterwolke", nl: "Gemengde weer wolk" },
                    { en: "Half cloud, half sun", es: "Mitad nube, mitad sol", de: "Halb Wolke, halb Sonne", nl: "Half wolk, half zon" },
                    { en: "Cloud with different colors", es: "Nube con diferentes colores", de: "Wolke mit verschiedenen Farben", nl: "Wolk met verschillende kleuren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is multi-cloud strategy?",
                    es: "¿Qué es la estrategia multi-nube?",
                    de: "Was ist Multi-Cloud-Strategie?",
                    nl: "Wat is multi-cloud strategie?"
                },
                options: [
                    { en: "Using multiple cloud service providers", es: "Usar múltiples proveedores de servicios en la nube", de: "Mehrere Cloud-Service-Anbieter nutzen", nl: "Meerdere cloudservice providers gebruiken" },
                    { en: "Many clouds in the sky", es: "Muchas nubes en el cielo", de: "Viele Wolken am Himmel", nl: "Veel wolken aan de hemel" },
                    { en: "Multiple weather patterns", es: "Múltiples patrones meteorológicos", de: "Mehrere Wettermuster", nl: "Meerdere weerpatronen" },
                    { en: "Cloud multiplication", es: "Multiplicación de nubes", de: "Wolkenvermehrung", nl: "Wolk vermenigvuldiging" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is edge computing?",
                    es: "¿Qué es la computación en el borde?",
                    de: "Was ist Edge Computing?",
                    nl: "Wat is edge computing?"
                },
                options: [
                    { en: "Processing data closer to where it's generated", es: "Procesar datos más cerca de donde se generan", de: "Datenverarbeitung näher am Entstehungsort", nl: "Gegevens verwerken dichter bij waar ze worden gegenereerd" },
                    { en: "Computing on the edge of cliffs", es: "Computación en el borde de acantilados", de: "Computing am Rande von Klippen", nl: "Computing op de rand van kliffen" },
                    { en: "Cutting-edge computing", es: "Computación de vanguardia", de: "Hochmoderne Datenverarbeitung", nl: "Geavanceerde computing" },
                    { en: "Computing with sharp edges", es: "Computación con bordes afilados", de: "Computing mit scharfen Kanten", nl: "Computing met scherpe randen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is DevOps?",
                    es: "¿Qué es DevOps?",
                    de: "Was ist DevOps?",
                    nl: "Wat is DevOps?"
                },
                options: [
                    { en: "Practices combining development and operations teams", es: "Prácticas que combinan equipos de desarrollo y operaciones", de: "Praktiken, die Entwicklungs- und Betriebsteams kombinieren", nl: "Praktijken die ontwikkelings- en operationele teams combineren" },
                    { en: "Development operations", es: "Operaciones de desarrollo", de: "Entwicklungsoperationen", nl: "Ontwikkelingsoperaties" },
                    { en: "Developer options", es: "Opciones de desarrollador", de: "Entwickleroptionen", nl: "Ontwikkelaar opties" },
                    { en: "Device operations", es: "Operaciones de dispositivo", de: "Geräteoperationen", nl: "Apparaat operaties" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is cloud migration?",
                    es: "¿Qué es la migración a la nube?",
                    de: "Was ist Cloud-Migration?",
                    nl: "Wat is cloud migratie?"
                },
                options: [
                    { en: "Moving applications and data to cloud infrastructure", es: "Mover aplicaciones y datos a infraestructura en la nube", de: "Anwendungen und Daten in die Cloud-Infrastruktur verlagern", nl: "Applicaties en gegevens verplaatsen naar cloudinfrastructuur" },
                    { en: "Clouds moving in the sky", es: "Nubes moviéndose en el cielo", de: "Wolken bewegen sich am Himmel", nl: "Wolken die in de lucht bewegen" },
                    { en: "Moving to cloudy places", es: "Mudarse a lugares nublados", de: "Umzug an bewölkte Orte", nl: "Verhuizen naar bewolkte plaatsen" },
                    { en: "Weather pattern migration", es: "Migración de patrones meteorológicos", de: "Wettermuster-Migration", nl: "Weerpatroon migratie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is cloud security?",
                    es: "¿Qué es la seguridad en la nube?",
                    de: "Was ist Cloud-Sicherheit?",
                    nl: "Wat is cloudbeveiliging?"
                },
                options: [
                    { en: "Protecting data, applications, and infrastructure in cloud", es: "Proteger datos, aplicaciones e infraestructura en la nube", de: "Daten, Anwendungen und Infrastruktur in der Cloud schützen", nl: "Gegevens, applicaties en infrastructuur in de cloud beschermen" },
                    { en: "Security guards for clouds", es: "Guardias de seguridad para nubes", de: "Sicherheitsbeamte für Wolken", nl: "Beveiligingsbeambten voor wolken" },
                    { en: "Weather security", es: "Seguridad meteorológica", de: "Wettersicherheit", nl: "Weer beveiliging" },
                    { en: "Sky protection", es: "Protección del cielo", de: "Himmelschutz", nl: "Lucht bescherming" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is cloud monitoring?",
                    es: "¿Qué es el monitoreo en la nube?",
                    de: "Was ist Cloud-Monitoring?",
                    nl: "Wat is cloud monitoring?"
                },
                options: [
                    { en: "Tracking performance and health of cloud resources", es: "Rastrear rendimiento y salud de recursos en la nube", de: "Leistung und Gesundheit von Cloud-Ressourcen verfolgen", nl: "Prestaties en gezondheid van cloudbronnen bijhouden" },
                    { en: "Watching clouds in the sky", es: "Observar nubes en el cielo", de: "Wolken am Himmel beobachten", nl: "Wolken in de lucht bekijken" },
                    { en: "Weather monitoring", es: "Monitoreo meteorológico", de: "Wetterüberwachung", nl: "Weer monitoring" },
                    { en: "Cloud photography", es: "Fotografía de nubes", de: "Wolkenfotografie", nl: "Wolk fotografie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is Kubernetes?",
                    es: "¿Qué es Kubernetes?",
                    de: "Was ist Kubernetes?",
                    nl: "Wat is Kubernetes?"
                },
                options: [
                    { en: "Container orchestration platform for managing applications", es: "Plataforma de orquestación de contenedores para gestionar aplicaciones", de: "Container-Orchestrierungsplattform zur Verwaltung von Anwendungen", nl: "Container orkestratie platform voor het beheren van applicaties" },
                    { en: "Greek sailing system", es: "Sistema de navegación griego", de: "Griechisches Segelsystem", nl: "Grieks zeilen systeem" },
                    { en: "Cube management system", es: "Sistema de gestión de cubos", de: "Würfelverwaltungssystem", nl: "Kubus beheersysteem" },
                    { en: "Cube networking tool", es: "Herramienta de red de cubos", de: "Würfelnetzwerk-Tool", nl: "Kubus netwerk tool" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a REST API?",
                    es: "¿Qué es una API REST?",
                    de: "Was ist eine REST-API?",
                    nl: "Wat is een REST API?"
                },
                options: [
                    { en: "Web service architecture using HTTP methods", es: "Arquitectura de servicio web usando métodos HTTP", de: "Webservice-Architektur mit HTTP-Methoden", nl: "Webservice architectuur die HTTP-methoden gebruikt" },
                    { en: "Resting API", es: "API descansando", de: "Ruhende API", nl: "Rustende API" },
                    { en: "Really Easy Service Technology", es: "Tecnología de Servicio Realmente Fácil", de: "Wirklich Einfache Service-Technologie", nl: "Echt Eenvoudige Service Technologie" },
                    { en: "Remote Electronic Service Tool", es: "Herramienta de Servicio Electrónico Remoto", de: "Remote Elektronisches Service-Tool", nl: "Remote Elektronische Service Tool" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is cloud elasticity?",
                    es: "¿Qué es la elasticidad en la nube?",
                    de: "Was ist Cloud-Elastizität?",
                    nl: "Wat is cloud elasticiteit?"
                },
                options: [
                    { en: "Ability to quickly scale resources up or down", es: "Capacidad de escalar recursos rápidamente hacia arriba o abajo", de: "Fähigkeit, Ressourcen schnell hoch- oder runterzuskalieren", nl: "Vermogen om bronnen snel op te schalen of af te schalen" },
                    { en: "Stretchy clouds", es: "Nubes elásticas", de: "Dehnbare Wolken", nl: "Elastische wolken" },
                    { en: "Flexible weather", es: "Clima flexible", de: "Flexibles Wetter", nl: "Flexibel weer" },
                    { en: "Bouncy cloud storage", es: "Almacenamiento en nube saltarín", de: "Federnde Cloud-Speicherung", nl: "Stuiterende cloud opslag" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is cloud orchestration?",
                    es: "¿Qué es la orquestación en la nube?",
                    de: "Was ist Cloud-Orchestrierung?",
                    nl: "Wat is cloud orkestratie?"
                },
                options: [
                    { en: "Automated coordination of cloud services and resources", es: "Coordinación automatizada de servicios y recursos en la nube", de: "Automatisierte Koordination von Cloud-Services und -Ressourcen", nl: "Geautomatiseerde coördinatie van cloudservices en bronnen" },
                    { en: "Cloud music conducting", es: "Dirigir música en la nube", de: "Wolkenmusik dirigieren", nl: "Wolk muziek dirigeren" },
                    { en: "Sky symphony", es: "Sinfonía del cielo", de: "Himmelssymphonie", nl: "Lucht symfonie" },
                    { en: "Weather conducting", es: "Dirigir el clima", de: "Wetter dirigieren", nl: "Weer dirigeren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is cloud compliance?",
                    es: "¿Qué es el cumplimiento en la nube?",
                    de: "Was ist Cloud-Compliance?",
                    nl: "Wat is cloud compliance?"
                },
                options: [
                    { en: "Meeting regulatory requirements for cloud operations", es: "Cumplir requisitos regulatorios para operaciones en la nube", de: "Regulatorische Anforderungen für Cloud-Operationen erfüllen", nl: "Voldoen aan regelgevingseisen voor cloudoperaties" },
                    { en: "Cloud following rules", es: "Nube siguiendo reglas", de: "Wolke folgt Regeln", nl: "Wolk volgt regels" },
                    { en: "Weather compliance", es: "Cumplimiento meteorológico", de: "Wetter-Compliance", nl: "Weer compliance" },
                    { en: "Sky regulations", es: "Regulaciones del cielo", de: "Himmelregulationen", nl: "Lucht regelgeving" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is CloudFormation?",
                    es: "¿Qué es CloudFormation?",
                    de: "Was ist CloudFormation?",
                    nl: "Wat is CloudFormation?"
                },
                options: [
                    { en: "AWS service for infrastructure as code", es: "Servicio de AWS para infraestructura como código", de: "AWS-Service für Infrastruktur als Code", nl: "AWS service voor infrastructuur als code" },
                    { en: "How clouds are formed", es: "Cómo se forman las nubes", de: "Wie Wolken entstehen", nl: "Hoe wolken worden gevormd" },
                    { en: "Cloud shaping service", es: "Servicio de moldeado de nubes", de: "Wolkenformungsservice", nl: "Wolk vormgevingsservice" },
                    { en: "Weather formation system", es: "Sistema de formación meteorológica", de: "Wetterbildungssystem", nl: "Weer vorming systeem" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is function as a service (FaaS)?",
                    es: "¿Qué es función como servicio (FaaS)?",
                    de: "Was ist Function as a Service (FaaS)?",
                    nl: "Wat is Function as a Service (FaaS)?"
                },
                options: [
                    { en: "Cloud service that runs individual functions", es: "Servicio en la nube que ejecuta funciones individuales", de: "Cloud-Service, der einzelne Funktionen ausführt", nl: "Cloudservice die individuele functies uitvoert" },
                    { en: "Fast as a Service", es: "Rápido como Servicio", de: "Schnell als Service", nl: "Snel als Service" },
                    { en: "Flexible as a Service", es: "Flexible como Servicio", de: "Flexibel als Service", nl: "Flexibel als Service" },
                    { en: "Fun as a Service", es: "Diversión como Servicio", de: "Spaß als Service", nl: "Plezier als Service" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are the main benefits of cloud computing?",
                    es: "¿Cuáles son los principales beneficios de la computación en la nube?",
                    de: "Was sind die Hauptvorteile von Cloud Computing?",
                    nl: "Wat zijn de belangrijkste voordelen van cloud computing?"
                },
                options: [
                    { en: "Cost efficiency, scalability, flexibility, and accessibility", es: "Eficiencia de costos, escalabilidad, flexibilidad y accesibilidad", de: "Kosteneffizienz, Skalierbarkeit, Flexibilität und Zugänglichkeit", nl: "Kostenefficiëntie, schaalbaarheid, flexibiliteit en toegankelijkheid" },
                    { en: "Only cost savings", es: "Solo ahorro de costos", de: "Nur Kosteneinsparungen", nl: "Alleen kostenbesparingen" },
                    { en: "Just storage space", es: "Solo espacio de almacenamiento", de: "Nur Speicherplatz", nl: "Alleen opslagruimte" },
                    { en: "Better weather prediction", es: "Mejor predicción meteorológica", de: "Bessere Wettervorhersage", nl: "Betere weersvoorspelling" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is cloud cost optimization?",
                    es: "¿Qué es la optimización de costos en la nube?",
                    de: "Was ist Cloud-Kostenoptimierung?",
                    nl: "Wat is cloud kostenoptimalisatie?"
                },
                options: [
                    { en: "Strategies to reduce cloud spending while maintaining performance", es: "Estrategias para reducir gastos en la nube manteniendo rendimiento", de: "Strategien zur Reduzierung der Cloud-Ausgaben bei Aufrechterhaltung der Leistung", nl: "Strategieën om clouduitgaven te verminderen terwijl prestaties behouden blijven" },
                    { en: "Making clouds cheaper", es: "Hacer las nubes más baratas", de: "Wolken billiger machen", nl: "Wolken goedkoper maken" },
                    { en: "Optimizing weather costs", es: "Optimizar costos meteorológicos", de: "Wetterkosten optimieren", nl: "Weer kosten optimaliseren" },
                    { en: "Reducing sky prices", es: "Reducir precios del cielo", de: "Himmelpreise reduzieren", nl: "Luchtprijzen verlagen" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud cost optimization involves analyzing usage patterns, rightsizing resources, implementing automation, using reserved instances, and eliminating waste to achieve the best value from cloud investments.",
                    es: "La optimización de costos en la nube involucra analizar patrones de uso, ajustar recursos correctamente, implementar automatización, usar instancias reservadas y eliminar desperdicio para lograr el mejor valor de las inversiones en la nube.",
                    de: "Cloud-Kostenoptimierung umfasst die Analyse von Nutzungsmustern, die richtige Dimensionierung von Ressourcen, die Implementierung von Automatisierung, die Verwendung reservierter Instanzen und die Beseitigung von Verschwendung, um den besten Wert aus Cloud-Investitionen zu erzielen.",
                    nl: "Cloud kostenoptimalisatie omvat het analyseren van gebruikspatronen, het juist dimensioneren van bronnen, het implementeren van automatisering, het gebruik van gereserveerde instanties en het elimineren van verspilling om de beste waarde uit cloud investeringen te halen."
                }
            },
            {
                question: {
                    en: "What is cloud native development?",
                    es: "¿Qué es el desarrollo nativo en la nube?",
                    de: "Was ist Cloud-native Entwicklung?",
                    nl: "Wat is cloud native ontwikkeling?"
                },
                options: [
                    { en: "Building applications specifically designed for cloud environments", es: "Construir aplicaciones diseñadas específicamente para entornos de nube", de: "Anwendungen erstellen, die speziell für Cloud-Umgebungen entwickelt wurden", nl: "Applicaties bouwen die specifiek ontworpen zijn voor cloudomgevingen" },
                    { en: "Developing weather applications", es: "Desarrollar aplicaciones meteorológicas", de: "Wetteranwendungen entwickeln", nl: "Weer applicaties ontwikkelen" },
                    { en: "Programming in the sky", es: "Programar en el cielo", de: "Im Himmel programmieren", nl: "Programmeren in de lucht" },
                    { en: "Native cloud languages only", es: "Solo lenguajes nativos de la nube", de: "Nur native Cloud-Sprachen", nl: "Alleen native cloud talen" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud native development involves building applications using microservices, containers, APIs, and DevOps practices to leverage cloud computing benefits like scalability, resilience, and agility.",
                    es: "El desarrollo nativo en la nube involucra construir aplicaciones usando microservicios, contenedores, APIs y prácticas DevOps para aprovechar los beneficios de la computación en la nube como escalabilidad, resistencia y agilidad.",
                    de: "Cloud-native Entwicklung umfasst das Erstellen von Anwendungen mit Microservices, Containern, APIs und DevOps-Praktiken, um Cloud-Computing-Vorteile wie Skalierbarkeit, Widerstandsfähigkeit und Agilität zu nutzen.",
                    nl: "Cloud native ontwikkeling houdt in het bouwen van applicaties met microservices, containers, API's en DevOps-praktijken om de voordelen van cloud computing zoals schaalbaarheid, veerkracht en behendigheid te benutten."
                }
            },
            {
                question: {
                    en: "What is Infrastructure as Code (IaC)?",
                    es: "¿Qué es Infraestructura como Código (IaC)?",
                    de: "Was ist Infrastructure as Code (IaC)?",
                    nl: "Wat is Infrastructure as Code (IaC)?"
                },
                options: [
                    { en: "Managing infrastructure through code and automation", es: "Gestionar infraestructura a través de código y automatización", de: "Infrastruktur durch Code und Automatisierung verwalten", nl: "Infrastructuur beheren door code en automatisering" },
                    { en: "Code for infrastructure buildings", es: "Código para edificios de infraestructura", de: "Code für Infrastrukturgebäude", nl: "Code voor infrastructuur gebouwen" },
                    { en: "Infrastructure building codes", es: "Códigos de construcción de infraestructura", de: "Infrastruktur-Baucodes", nl: "Infrastructuur bouwcodes" },
                    { en: "Coding infrastructure manually", es: "Codificar infraestructura manualmente", de: "Infrastruktur manuell codieren", nl: "Infrastructuur handmatig coderen" }
                ],
                correct: 0,
                explanation: {
                    en: "IaC enables provisioning and managing infrastructure using configuration files and automation tools, making infrastructure deployments consistent, repeatable, and version-controlled.",
                    es: "IaC permite aprovisionar y gestionar infraestructura usando archivos de configuración y herramientas de automatización, haciendo que las implementaciones de infraestructura sean consistentes, repetibles y controladas por versión.",
                    de: "IaC ermöglicht die Bereitstellung und Verwaltung von Infrastruktur mit Konfigurationsdateien und Automatisierungstools, wodurch Infrastruktur-Deployments konsistent, wiederholbar und versionskontrolliert werden.",
                    nl: "IaC maakt het mogelijk om infrastructuur te voorzien en te beheren met configuratiebestanden en automatiseringstools, waardoor infrastructuur implementaties consistent, herhaalbaar en versiegecontroleerd worden."
                }
            },
            {
                question: {
                    en: "What is cloud disaster recovery?",
                    es: "¿Qué es la recuperación ante desastres en la nube?",
                    de: "Was ist Cloud-Disaster Recovery?",
                    nl: "Wat is cloud disaster recovery?"
                },
                options: [
                    { en: "Using cloud services to backup and restore systems after disasters", es: "Usar servicios en la nube para respaldar y restaurar sistemas después de desastres", de: "Cloud-Services nutzen, um Systeme nach Katastrophen zu sichern und wiederherzustellen", nl: "Cloudservices gebruiken om systemen te back-uppen en herstellen na rampen" },
                    { en: "Recovering from cloud disasters", es: "Recuperarse de desastres en la nube", de: "Sich von Cloud-Katastrophen erholen", nl: "Herstellen van cloud rampen" },
                    { en: "Weather disaster recovery", es: "Recuperación de desastres meteorológicos", de: "Wetter-Katastrophenwiederherstellung", nl: "Weer ramp herstel" },
                    { en: "Sky disaster management", es: "Gestión de desastres del cielo", de: "Himmel-Katastrophenmanagement", nl: "Lucht ramp beheer" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud disaster recovery provides cost-effective, scalable backup and recovery solutions that can quickly restore business operations after system failures, natural disasters, or cyber attacks.",
                    es: "La recuperación ante desastres en la nube proporciona soluciones de respaldo y recuperación rentables y escalables que pueden restaurar rápidamente las operaciones comerciales después de fallas del sistema, desastres naturales o ciberataques.",
                    de: "Cloud-Disaster Recovery bietet kostengünstige, skalierbare Backup- und Recovery-Lösungen, die Geschäftsabläufe nach Systemausfällen, Naturkatastrophen oder Cyberangriffen schnell wiederherstellen können.",
                    nl: "Cloud disaster recovery biedt kosteneffectieve, schaalbare backup- en hersteloplossingen die bedrijfsactiviteiten snel kunnen herstellen na systeemstoringen, natuurrampen of cyberaanvallen."
                }
            },
            {
                question: {
                    en: "What is cloud governance?",
                    es: "¿Qué es la gobernanza en la nube?",
                    de: "Was ist Cloud Governance?",
                    nl: "Wat is cloud governance?"
                },
                options: [
                    { en: "Policies and processes for managing cloud resources and usage", es: "Políticas y procesos para gestionar recursos y uso en la nube", de: "Richtlinien und Prozesse zur Verwaltung von Cloud-Ressourcen und -Nutzung", nl: "Beleid en processen voor het beheren van cloudbronnen en gebruik" },
                    { en: "Government control of clouds", es: "Control gubernamental de las nubes", de: "Regierungskontrolle über Wolken", nl: "Overheidscontrole van wolken" },
                    { en: "Weather governance", es: "Gobernanza meteorológica", de: "Wetter-Governance", nl: "Weer governance" },
                    { en: "Sky management rules", es: "Reglas de gestión del cielo", de: "Himmel-Management-Regeln", nl: "Lucht beheer regels" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud governance establishes frameworks for security, compliance, cost management, and resource optimization to ensure cloud adoption aligns with business objectives and regulatory requirements.",
                    es: "La gobernanza en la nube establece marcos para seguridad, cumplimiento, gestión de costos y optimización de recursos para asegurar que la adopción de la nube se alinee con objetivos comerciales y requisitos regulatorios.",
                    de: "Cloud Governance etabliert Rahmenwerke für Sicherheit, Compliance, Kostenmanagement und Ressourcenoptimierung, um sicherzustellen, dass die Cloud-Adoption mit Geschäftszielen und regulatorischen Anforderungen übereinstimmt.",
                    nl: "Cloud governance stelt kaders vast voor beveiliging, compliance, kostenbeheer en resource-optimalisatie om ervoor te zorgen dat cloud adoptie aansluit bij bedrijfsdoelstellingen en regelgevingseisen."
                }
            },
            {
                question: {
                    en: "What is cloud vendor lock-in?",
                    es: "¿Qué es el bloqueo de proveedor en la nube?",
                    de: "Was ist Cloud Vendor Lock-in?",
                    nl: "Wat is cloud vendor lock-in?"
                },
                options: [
                    { en: "Dependency on specific cloud provider making migration difficult", es: "Dependencia de un proveedor específico de nube que hace difícil la migración", de: "Abhängigkeit von einem bestimmten Cloud-Anbieter, die Migration erschwert", nl: "Afhankelijkheid van specifieke cloud provider waardoor migratie moeilijk wordt" },
                    { en: "Vendors locking cloud doors", es: "Proveedores cerrando puertas de la nube", de: "Anbieter sperren Cloud-Türen", nl: "Leveranciers vergrendelen cloud deuren" },
                    { en: "Cloud providers in jail", es: "Proveedores de nube en la cárcel", de: "Cloud-Anbieter im Gefängnis", nl: "Cloud providers in de gevangenis" },
                    { en: "Weather vendor restrictions", es: "Restricciones de proveedor meteorológico", de: "Wetter-Anbieter-Beschränkungen", nl: "Weer leverancier restricties" }
                ],
                correct: 0,
                explanation: {
                    en: "Vendor lock-in occurs when organizations become dependent on proprietary cloud services, APIs, and data formats, making it costly and complex to switch to alternative providers or bring services in-house.",
                    es: "El bloqueo de proveedor ocurre cuando las organizaciones se vuelven dependientes de servicios de nube propietarios, APIs y formatos de datos, haciendo costoso y complejo cambiar a proveedores alternativos o traer servicios internamente.",
                    de: "Vendor Lock-in tritt auf, wenn Organisationen von proprietären Cloud-Services, APIs und Datenformaten abhängig werden, wodurch der Wechsel zu alternativen Anbietern oder die Internalisierung von Services kostspielig und komplex wird.",
                    nl: "Vendor lock-in treedt op wanneer organisaties afhankelijk worden van propriëtaire cloudservices, API's en dataformaten, waardoor overstappen naar alternatieve providers of diensten intern brengen kostbaar en complex wordt."
                }
            },
            {
                question: {
                    en: "What is cloud data lakes?",
                    es: "¿Qué son los lagos de datos en la nube?",
                    de: "Was sind Cloud Data Lakes?",
                    nl: "Wat zijn cloud data lakes?"
                },
                options: [
                    { en: "Centralized repositories storing structured and unstructured data", es: "Repositorios centralizados que almacenan datos estructurados y no estructurados", de: "Zentralisierte Repositories, die strukturierte und unstrukturierte Daten speichern", nl: "Gecentraliseerde repositories die gestructureerde en ongestructureerde data opslaan" },
                    { en: "Lakes of data in the sky", es: "Lagos de datos en el cielo", de: "Datenseen am Himmel", nl: "Datameren in de lucht" },
                    { en: "Water storage in clouds", es: "Almacenamiento de agua en nubes", de: "Wasserspeicherung in Wolken", nl: "Water opslag in wolken" },
                    { en: "Cloud-shaped lakes", es: "Lagos en forma de nube", de: "Wolkenförmige Seen", nl: "Wolkvormige meren" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud data lakes are scalable storage repositories that can hold vast amounts of raw data in its native format, enabling organizations to store, process, and analyze diverse data types for analytics and machine learning.",
                    es: "Los lagos de datos en la nube son repositorios de almacenamiento escalables que pueden contener vastas cantidades de datos en bruto en su formato nativo, permitiendo a las organizaciones almacenar, procesar y analizar diversos tipos de datos para análisis y aprendizaje automático.",
                    de: "Cloud Data Lakes sind skalierbare Speicher-Repositories, die große Mengen von Rohdaten in ihrem nativen Format speichern können und Organisationen ermöglichen, diverse Datentypen für Analysen und maschinelles Lernen zu speichern, zu verarbeiten und zu analysieren.",
                    nl: "Cloud data lakes zijn schaalbare opslagrepositories die grote hoeveelheden ruwe data in hun oorspronkelijke formaat kunnen bevatten, waardoor organisaties diverse datatypes kunnen opslaan, verwerken en analyseren voor analytics en machine learning."
                }
            },
            {
                question: {
                    en: "What is cloud-based AI/ML?",
                    es: "¿Qué es IA/ML basada en la nube?",
                    de: "Was ist cloudbasierte KI/ML?",
                    nl: "Wat is cloud-gebaseerde AI/ML?"
                },
                options: [
                    { en: "Artificial intelligence and machine learning services delivered via cloud", es: "Servicios de inteligencia artificial y aprendizaje automático entregados vía nube", de: "Künstliche Intelligenz und maschinelle Lerndienste über die Cloud bereitgestellt", nl: "Kunstmatige intelligentie en machine learning services geleverd via de cloud" },
                    { en: "AI for weather prediction only", es: "IA solo para predicción meteorológica", de: "KI nur für Wettervorhersage", nl: "AI alleen voor weersvoorspelling" },
                    { en: "Machine learning about clouds", es: "Aprendizaje automático sobre nubes", de: "Maschinelles Lernen über Wolken", nl: "Machine learning over wolken" },
                    { en: "Sky-based artificial intelligence", es: "Inteligencia artificial basada en el cielo", de: "Himmelbasierte künstliche Intelligenz", nl: "Op lucht gebaseerde kunstmatige intelligentie" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud-based AI/ML provides scalable, cost-effective access to artificial intelligence and machine learning capabilities, including pre-trained models, training infrastructure, and specialized hardware like GPUs.",
                    es: "La IA/ML basada en la nube proporciona acceso escalable y rentable a capacidades de inteligencia artificial y aprendizaje automático, incluyendo modelos preentrenados, infraestructura de entrenamiento y hardware especializado como GPUs.",
                    de: "Cloudbasierte KI/ML bietet skalierbaren, kostengünstigen Zugang zu Funktionen für künstliche Intelligenz und maschinelles Lernen, einschließlich vortrainierter Modelle, Trainingsinfrastruktur und spezialisierter Hardware wie GPUs.",
                    nl: "Cloud-gebaseerde AI/ML biedt schaalbare, kosteneffectieve toegang tot kunstmatige intelligentie en machine learning mogelijkheden, inclusief voorgetrainde modellen, trainingsinfrastructuur en gespecialiseerde hardware zoals GPU's."
                }
            },
            {
                question: {
                    en: "What is cloud interoperability?",
                    es: "¿Qué es la interoperabilidad en la nube?",
                    de: "Was ist Cloud-Interoperabilität?",
                    nl: "Wat is cloud interoperabiliteit?"
                },
                options: [
                    { en: "Ability for different cloud systems to work together seamlessly", es: "Capacidad de diferentes sistemas de nube para trabajar juntos sin problemas", de: "Fähigkeit verschiedener Cloud-Systeme, nahtlos zusammenzuarbeiten", nl: "Vermogen van verschillende cloudsystemen om naadloos samen te werken" },
                    { en: "Operating clouds together", es: "Operar nubes juntas", de: "Wolken zusammen betreiben", nl: "Wolken samen bedienen" },
                    { en: "Weather system cooperation", es: "Cooperación de sistemas meteorológicos", de: "Wettersystem-Kooperation", nl: "Weersysteem samenwerking" },
                    { en: "Sky compatibility", es: "Compatibilidad del cielo", de: "Himmel-Kompatibilität", nl: "Lucht compatibiliteit" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud interoperability enables seamless data exchange, application portability, and service integration across different cloud platforms, reducing vendor lock-in and improving flexibility in multi-cloud strategies.",
                    es: "La interoperabilidad en la nube permite el intercambio fluido de datos, portabilidad de aplicaciones e integración de servicios a través de diferentes plataformas de nube, reduciendo el bloqueo de proveedor y mejorando la flexibilidad en estrategias multi-nube.",
                    de: "Cloud-Interoperabilität ermöglicht nahtlosen Datenaustausch, Anwendungsportabilität und Service-Integration über verschiedene Cloud-Plattformen hinweg, reduziert Vendor Lock-in und verbessert die Flexibilität in Multi-Cloud-Strategien.",
                    nl: "Cloud interoperabiliteit maakt naadloze data-uitwisseling, applicatieportabiliteit en service-integratie mogelijk over verschillende cloudplatforms heen, waardoor vendor lock-in wordt verminderd en flexibiliteit in multi-cloud strategieën wordt verbeterd."
                }
            },
            {
                question: {
                    en: "What is cloud sustainability?",
                    es: "¿Qué es la sostenibilidad en la nube?",
                    de: "Was ist Cloud-Nachhaltigkeit?",
                    nl: "Wat is cloud duurzaamheid?"
                },
                options: [
                    { en: "Environmental responsibility and energy efficiency in cloud operations", es: "Responsabilidad ambiental y eficiencia energética en operaciones de nube", de: "Umweltverantwortung und Energieeffizienz in Cloud-Operationen", nl: "Milieu verantwoordelijkheid en energie-efficiëntie in cloud operaties" },
                    { en: "Keeping clouds in the sky", es: "Mantener las nubes en el cielo", de: "Wolken am Himmel halten", nl: "Wolken in de lucht houden" },
                    { en: "Weather sustainability", es: "Sostenibilidad meteorológica", de: "Wetter-Nachhaltigkeit", nl: "Weer duurzaamheid" },
                    { en: "Sky preservation", es: "Preservación del cielo", de: "Himmel-Erhaltung", nl: "Lucht preservatie" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud sustainability focuses on reducing environmental impact through renewable energy use, efficient resource utilization, carbon footprint reduction, and sustainable data center practices to support global climate goals.",
                    es: "La sostenibilidad en la nube se enfoca en reducir el impacto ambiental a través del uso de energía renovable, utilización eficiente de recursos, reducción de huella de carbono y prácticas sostenibles en centros de datos para apoyar objetivos climáticos globales.",
                    de: "Cloud-Nachhaltigkeit konzentriert sich auf die Reduzierung von Umweltauswirkungen durch erneuerbare Energienutzung, effiziente Ressourcennutzung, Kohlenstoff-Fußabdruck-Reduzierung und nachhaltige Rechenzentrum-Praktiken zur Unterstützung globaler Klimaziele.",
                    nl: "Cloud duurzaamheid richt zich op het verminderen van milieu-impact door gebruik van hernieuwbare energie, efficiënt gebruik van bronnen, vermindering van koolstofvoetafdruk en duurzame datacenter praktijken om mondiale klimaatdoelen te ondersteunen."
                }
            },
            {
                question: {
                    en: "What is the role of APIs in cloud computing?",
                    es: "¿Cuál es el papel de las APIs en la computación en la nube?",
                    de: "Welche Rolle spielen APIs im Cloud Computing?",
                    nl: "Wat is de rol van API's in cloud computing?"
                },
                options: [
                    { en: "Enabling programmatic access and integration between cloud services", es: "Permitir acceso programático e integración entre servicios de nube", de: "Programmgesteuerten Zugriff und Integration zwischen Cloud-Services ermöglichen", nl: "Programmatische toegang en integratie tussen cloudservices mogelijk maken" },
                    { en: "Application Programming for clouds only", es: "Programación de aplicaciones solo para nubes", de: "Anwendungsprogrammierung nur für Wolken", nl: "Applicatie programmering alleen voor wolken" },
                    { en: "Weather API services", es: "Servicios API meteorológicos", de: "Wetter-API-Services", nl: "Weer API services" },
                    { en: "Sky programming interfaces", es: "Interfaces de programación del cielo", de: "Himmel-Programmierschnittstellen", nl: "Lucht programmeerinterfaces" }
                ],
                correct: 0,
                explanation: {
                    en: "APIs are essential in cloud computing as they provide standardized interfaces for accessing cloud services, enabling automation, integration, and programmatic control of cloud resources and applications.",
                    es: "Las APIs son esenciales en la computación en la nube ya que proporcionan interfaces estandarizadas para acceder a servicios de nube, permitiendo automatización, integración y control programático de recursos y aplicaciones en la nube.",
                    de: "APIs sind im Cloud Computing wesentlich, da sie standardisierte Schnittstellen für den Zugriff auf Cloud-Services bereitstellen und Automatisierung, Integration und programmgesteuerte Kontrolle von Cloud-Ressourcen und -Anwendungen ermöglichen.",
                    nl: "API's zijn essentieel in cloud computing omdat ze gestandaardiseerde interfaces bieden voor toegang tot cloudservices, waardoor automatisering, integratie en programmatische controle van cloudbronnen en applicaties mogelijk wordt."
                }
            },
            {
                question: {
                    en: "What is cloud-based IoT?",
                    es: "¿Qué es IoT basado en la nube?",
                    de: "Was ist cloudbasiertes IoT?",
                    nl: "Wat is cloud-gebaseerd IoT?"
                },
                options: [
                    { en: "Internet of Things devices connected and managed through cloud platforms", es: "Dispositivos Internet de las Cosas conectados y gestionados a través de plataformas de nube", de: "Internet der Dinge-Geräte, die über Cloud-Plattformen verbunden und verwaltet werden", nl: "Internet of Things apparaten verbonden en beheerd via cloudplatforms" },
                    { en: "Internet clouds only", es: "Solo nubes de internet", de: "Nur Internet-Wolken", nl: "Alleen internet wolken" },
                    { en: "Things floating in clouds", es: "Cosas flotando en nubes", de: "Dinge schweben in Wolken", nl: "Dingen zwevend in wolken" },
                    { en: "Weather IoT devices", es: "Dispositivos IoT meteorológicos", de: "Wetter-IoT-Geräte", nl: "Weer IoT apparaten" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud-based IoT leverages cloud computing to collect, store, process, and analyze data from connected devices, providing scalable infrastructure for IoT applications and enabling real-time insights and remote device management.",
                    es: "IoT basado en la nube aprovecha la computación en la nube para recopilar, almacenar, procesar y analizar datos de dispositivos conectados, proporcionando infraestructura escalable para aplicaciones IoT y permitiendo insights en tiempo real y gestión remota de dispositivos.",
                    de: "Cloudbasiertes IoT nutzt Cloud Computing, um Daten von verbundenen Geräten zu sammeln, zu speichern, zu verarbeiten und zu analysieren, bietet skalierbare Infrastruktur für IoT-Anwendungen und ermöglicht Echtzeit-Einblicke und Remote-Geräteverwaltung.",
                    nl: "Cloud-gebaseerd IoT maakt gebruik van cloud computing om gegevens van verbonden apparaten te verzamelen, op te slaan, te verwerken en te analyseren, en biedt schaalbare infrastructuur voor IoT-toepassingen en maakt real-time inzichten en extern apparaatbeheer mogelijk."
                }
            },
            {
                question: {
                    en: "What challenges exist in cloud adoption?",
                    es: "¿Qué desafíos existen en la adopción de la nube?",
                    de: "Welche Herausforderungen gibt es bei der Cloud-Adoption?",
                    nl: "Welke uitdagingen bestaan er bij cloud adoptie?"
                },
                options: [
                    { en: "Security concerns, data migration, compliance, and vendor lock-in", es: "Preocupaciones de seguridad, migración de datos, cumplimiento y dependencia del proveedor", de: "Sicherheitsbedenken, Datenmigration, Compliance und Vendor Lock-in", nl: "Beveiligingszorgen, datamigratie, compliance en vendor lock-in" },
                    { en: "No challenges exist", es: "No existen desafíos", de: "Es gibt keine Herausforderungen", nl: "Er bestaan geen uitdagingen" },
                    { en: "Only technical difficulties", es: "Solo dificultades técnicas", de: "Nur technische Schwierigkeiten", nl: "Alleen technische moeilijkheden" },
                    { en: "Weather-related issues only", es: "Solo problemas relacionados con el clima", de: "Nur wetterbedingte Probleme", nl: "Alleen weergerelateerde problemen" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud adoption challenges include security vulnerabilities, complex data migration, regulatory compliance requirements, vendor lock-in risks, skills gaps, cost management, and integration with existing systems.",
                    es: "Los desafíos de adopción de la nube incluyen vulnerabilidades de seguridad, migración compleja de datos, requisitos de cumplimiento regulatorio, riesgos de dependencia del proveedor, brechas de habilidades, gestión de costos e integración con sistemas existentes.",
                    de: "Herausforderungen bei der Cloud-Adoption umfassen Sicherheitsvulnerabilitäten, komplexe Datenmigration, regulatorische Compliance-Anforderungen, Vendor Lock-in-Risiken, Qualifikationslücken, Kostenmanagement und Integration mit bestehenden Systemen.",
                    nl: "Cloud adoptie uitdagingen omvatten beveiligingskwetsbaarheden, complexe datamigratie, regelgevingseisen, vendor lock-in risico's, vaardigheidstekorten, kostenbeheer en integratie met bestaande systemen."
                }
            },
            {
                question: {
                    en: "What is the future of cloud computing?",
                    es: "¿Cuál es el futuro de la computación en la nube?",
                    de: "Was ist die Zukunft des Cloud Computing?",
                    nl: "Wat is de toekomst van cloud computing?"
                },
                options: [
                    { en: "Edge computing, AI integration, quantum cloud, and sustainability", es: "Computación en el borde, integración de IA, nube cuántica y sostenibilidad", de: "Edge Computing, KI-Integration, Quanten-Cloud und Nachhaltigkeit", nl: "Edge computing, AI-integratie, quantum cloud en duurzaamheid" },
                    { en: "Clouds will disappear", es: "Las nubes desaparecerán", de: "Wolken werden verschwinden", nl: "Wolken zullen verdwijnen" },
                    { en: "Only weather clouds", es: "Solo nubes meteorológicas", de: "Nur Wetterwolken", nl: "Alleen weerwolken" },
                    { en: "No changes expected", es: "No se esperan cambios", de: "Keine Änderungen erwartet", nl: "Geen veranderingen verwacht" }
                ],
                correct: 0,
                explanation: {
                    en: "The future of cloud computing includes edge computing for reduced latency, deeper AI/ML integration, quantum computing capabilities, enhanced sustainability initiatives, and serverless architectures becoming more prevalent.",
                    es: "El futuro de la computación en la nube incluye computación en el borde para reducir latencia, integración más profunda de IA/ML, capacidades de computación cuántica, iniciativas de sostenibilidad mejoradas y arquitecturas sin servidor más prevalentes.",
                    de: "Die Zukunft des Cloud Computing umfasst Edge Computing für reduzierte Latenz, tiefere KI/ML-Integration, Quantencomputing-Fähigkeiten, verbesserte Nachhaltigkeitsinitiativen und eine größere Verbreitung serverloser Architekturen.",
                    nl: "De toekomst van cloud computing omvat edge computing voor verminderde latentie, diepere AI/ML-integratie, quantum computing mogelijkheden, verbeterde duurzaamheidsinitiatieven en serverloze architecturen die meer prevalent worden."
                }
            },
            {
                question: {
                    en: "What is cloud automation?",
                    es: "¿Qué es la automatización en la nube?",
                    de: "Was ist Cloud-Automatisierung?",
                    nl: "Wat is cloud automatisering?"
                },
                options: [
                    { en: "Using software to automatically manage cloud resources and tasks", es: "Usar software para gestionar automáticamente recursos y tareas en la nube", de: "Software verwenden, um Cloud-Ressourcen und -Aufgaben automatisch zu verwalten", nl: "Software gebruiken om cloudbronnen en taken automatisch te beheren" },
                    { en: "Automatic cloud formation in sky", es: "Formación automática de nubes en el cielo", de: "Automatische Wolkenbildung am Himmel", nl: "Automatische wolkvorming aan de hemel" },
                    { en: "Self-driving clouds", es: "Nubes que se conducen solas", de: "Selbstfahrende Wolken", nl: "Zelfrijdende wolken" },
                    { en: "Weather automation systems", es: "Sistemas de automatización meteorológica", de: "Wetter-Automatisierungssysteme", nl: "Weer automatiseringssystemen" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud automation uses scripts, tools, and orchestration platforms to automatically provision, configure, monitor, and manage cloud infrastructure and applications, reducing manual effort and improving consistency.",
                    es: "La automatización en la nube usa scripts, herramientas y plataformas de orquestación para aprovisionar, configurar, monitorear y gestionar automáticamente infraestructura y aplicaciones en la nube, reduciendo el esfuerzo manual y mejorando la consistencia.",
                    de: "Cloud-Automatisierung nutzt Skripte, Tools und Orchestrierungsplattformen, um Cloud-Infrastruktur und -Anwendungen automatisch bereitzustellen, zu konfigurieren, zu überwachen und zu verwalten, wodurch manueller Aufwand reduziert und Konsistenz verbessert wird.",
                    nl: "Cloud automatisering gebruikt scripts, tools en orkestratie platforms om cloudinfrastructuur en applicaties automatisch te voorzien, configureren, monitoren en beheren, waardoor handmatige inspanning wordt verminderd en consistentie wordt verbeterd."
                }
            },
            {
                question: {
                    en: "What is the significance of cloud computing in digital transformation?",
                    es: "¿Cuál es la importancia de la computación en la nube en la transformación digital?",
                    de: "Welche Bedeutung hat Cloud Computing für die digitale Transformation?",
                    nl: "Wat is de betekenis van cloud computing in digitale transformatie?"
                },
                options: [
                    { en: "Enabling rapid innovation, scalability, and modernization of business processes", es: "Permitir innovación rápida, escalabilidad y modernización de procesos de negocio", de: "Schnelle Innovation, Skalierbarkeit und Modernisierung von Geschäftsprozessen ermöglichen", nl: "Snelle innovatie, schaalbaarheid en modernisering van bedrijfsprocessen mogelijk maken" },
                    { en: "Only providing storage space", es: "Solo proporcionar espacio de almacenamiento", de: "Nur Speicherplatz bereitstellen", nl: "Alleen opslagruimte bieden" },
                    { en: "Just reducing IT costs", es: "Solo reducir costos de TI", de: "Nur IT-Kosten reduzieren", nl: "Alleen IT-kosten verlagen" },
                    { en: "Weather forecasting for businesses", es: "Pronóstico meteorológico para empresas", de: "Wettervorhersage für Unternehmen", nl: "Weersvoorspelling voor bedrijven" }
                ],
                correct: 0,
                explanation: {
                    en: "Cloud computing is fundamental to digital transformation as it provides the agility, scalability, and modern technology foundation needed for organizations to innovate quickly, adopt new technologies, and compete effectively in the digital economy.",
                    es: "La computación en la nube es fundamental para la transformación digital ya que proporciona la agilidad, escalabilidad y base tecnológica moderna necesaria para que las organizaciones innoven rápidamente, adopten nuevas tecnologías y compitan efectivamente en la economía digital.",
                    de: "Cloud Computing ist fundamental für die digitale Transformation, da es die Agilität, Skalierbarkeit und moderne Technologiebasis bietet, die Organisationen benötigen, um schnell zu innovieren, neue Technologien zu übernehmen und in der digitalen Wirtschaft erfolgreich zu konkurrieren.",
                    nl: "Cloud computing is fundamenteel voor digitale transformatie omdat het de behendigheid, schaalbaarheid en moderne technologie basis biedt die organisaties nodig hebben om snel te innoveren, nieuwe technologieën te adopteren en effectief te concurreren in de digitale economie."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/technology', level6);
    }
})();