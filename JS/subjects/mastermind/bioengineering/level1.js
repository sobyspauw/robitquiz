// Bioengineering - Level 1: Genetic Engineering & Biomaterials
(function() {
  const level1 = {
    name: {
      en: "Genetic Engineering & Biomaterials",
      es: "Ingeniería Genética y Biomateriales",
      de: "Gentechnik und Biomaterialien",
      nl: "Genetische Manipulatie en Biomaterialen"
    },
    questions: [
      {
        question: {
          en: "What is CRISPR-Cas9?",
          es: "¿Qué es CRISPR-Cas9?",
          de: "Was ist CRISPR-Cas9?",
          nl: "Wat is CRISPR-Cas9?"
        },
        options: [
          { en: "Gene editing system that can precisely modify DNA", es: "Sistema de edición genética que puede modificar ADN con precisión", de: "Genbearbeitungssystem, das DNA präzise modifizieren kann", nl: "Gen-bewerkingssysteem dat DNA nauwkeurig kan modificeren" },
          { en: "Protein synthesis inhibitor", es: "Inhibidor de síntesis de proteínas", de: "Proteinsynthese-Hemmer", nl: "Proteïnesynthese remmer" },
          { en: "DNA sequencing technology", es: "Tecnología de secuenciación de ADN", de: "DNA-Sequenzierungstechnologie", nl: "DNA-sequentietechnologie" },
          { en: "Cell culture medium", es: "Medio de cultivo celular", de: "Zellkulturmedium", nl: "Celkweek medium" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR-Cas9 is a revolutionary gene editing tool that uses guide RNAs to direct the Cas9 nuclease to specific DNA sequences, allowing precise cutting and modification of genes. It has transformed genetic engineering and therapeutic applications.",
          es: "CRISPR-Cas9 es una herramienta revolucionaria de edición genética que usa ARN guía para dirigir la nucleasa Cas9 a secuencias específicas de ADN, permitiendo el corte y modificación precisa de genes. Ha transformado la ingeniería genética y aplicaciones terapéuticas.",
          de: "CRISPR-Cas9 ist ein revolutionäres Genbearbeitungswerkzeug, das Leit-RNAs verwendet, um die Cas9-Nuklease zu spezifischen DNA-Sequenzen zu dirigieren, wodurch präzises Schneiden und Modifizieren von Genen ermöglicht wird. Es hat die Gentechnik und therapeutische Anwendungen transformiert.",
          nl: "CRISPR-Cas9 is een revolutionaire gen-bewerkingstool die gids-RNA's gebruikt om het Cas9-nuclease naar specifieke DNA-sequenties te leiden, wat nauwkeurig knippen en modificeren van genen mogelijk maakt. Het heeft genetische manipulatie en therapeutische toepassingen getransformeerd."
        }
      },
      {
        question: {
          en: "What is tissue engineering?",
          es: "¿Qué es la ingeniería de tejidos?",
          de: "Was ist Tissue Engineering?",
          nl: "Wat is weefselengineering?"
        },
        options: [
          { en: "Creating biological substitutes to restore tissue function", es: "Crear sustitutos biológicos para restaurar la función del tejido", de: "Biologische Ersatzstoffe zur Wiederherstellung der Gewebefunktion schaffen", nl: "Biologische vervangingsmiddelen creëren om weefselfunctie te herstellen" },
          { en: "Designing mechanical prosthetics", es: "Diseñar prótesis mecánicas", de: "Mechanische Prothesen entwerfen", nl: "Mechanische protheses ontwerpen" },
          { en: "Studying tissue histology", es: "Estudiar histología de tejidos", de: "Gewebehistologie studieren", nl: "Weefselhistologie bestuderen" },
          { en: "Manufacturing surgical instruments", es: "Fabricar instrumentos quirúrgicos", de: "Chirurgische Instrumente herstellen", nl: "Chirurgische instrumenten vervaardigen" }
        ],
        correct: 0,
        explanation: {
          en: "Tissue engineering combines cells, biomaterials, and bioactive molecules to create functional tissue constructs that can replace damaged or diseased tissues, potentially eliminating the need for organ transplants.",
          es: "La ingeniería de tejidos combina células, biomateriales y moléculas bioactivas para crear construcciones de tejido funcional que pueden reemplazar tejidos dañados o enfermos, potencialmente eliminando la necesidad de trasplantes de órganos.",
          de: "Tissue Engineering kombiniert Zellen, Biomaterialien und bioaktive Moleküle, um funktionelle Gewebekonstrukte zu schaffen, die beschädigte oder kranke Gewebe ersetzen können und möglicherweise die Notwendigkeit von Organtransplantationen eliminieren.",
          nl: "Weefselengineering combineert cellen, biomaterialen en bioactieve moleculen om functionele weefselconstructies te creëren die beschadigde of zieke weefsels kunnen vervangen, wat mogelijk de behoefte aan orgaantransplantaties wegneemt."
        }
      },
      {
        question: {
          en: "What is synthetic biology?",
          es: "¿Qué es la biología sintética?",
          de: "Was ist synthetische Biologie?",
          nl: "Wat is synthetische biologie?"
        },
        options: [
          { en: "Engineering biological systems with artificial components", es: "Ingeniería de sistemas biológicos con componentes artificiales", de: "Biologische Systeme mit künstlichen Komponenten konstruieren", nl: "Biologische systemen engineeren met kunstmatige componenten" },
          { en: "Creating artificial life forms", es: "Crear formas de vida artificiales", de: "Künstliche Lebensformen schaffen", nl: "Kunstmatige levensvormen creëren" },
          { en: "Studying natural biological processes", es: "Estudiar procesos biológicos naturales", de: "Natürliche biologische Prozesse studieren", nl: "Natuurlijke biologische processen bestuderen" },
          { en: "Manufacturing synthetic drugs", es: "Fabricar medicamentos sintéticos", de: "Synthetische Medikamente herstellen", nl: "Synthetische medicijnen produceren" }
        ],
        correct: 0,
        explanation: {
          en: "Synthetic biology involves designing and constructing new biological parts, devices, and systems, or redesigning existing natural biological systems for useful purposes, often using standardized biological components called BioBricks.",
          es: "La biología sintética involucra diseñar y construir nuevas partes, dispositivos y sistemas biológicos, o rediseñar sistemas biológicos naturales existentes para propósitos útiles, a menudo usando componentes biológicos estandarizados llamados BioBricks.",
          de: "Synthetische Biologie beinhaltet das Design und die Konstruktion neuer biologischer Teile, Geräte und Systeme oder das Redesign bestehender natürlicher biologischer Systeme für nützliche Zwecke, oft unter Verwendung standardisierter biologischer Komponenten namens BioBricks.",
          nl: "Synthetische biologie houdt in het ontwerpen en construeren van nieuwe biologische onderdelen, apparaten en systemen, of het herontwerpen van bestaande natuurlijke biologische systemen voor nuttige doeleinden, vaak met gestandaardiseerde biologische componenten genaamd BioBricks."
        }
      },
      {
        question: {
          en: "What is a biomaterial?",
          es: "¿Qué es un biomaterial?",
          de: "Was ist ein Biomaterial?",
          nl: "Wat is een biomateriaal?"
        },
        options: [
          { en: "Material designed to interact with biological systems", es: "Material diseñado para interactuar con sistemas biológicos", de: "Material, das für die Interaktion mit biologischen Systemen entwickelt wurde", nl: "Materiaal ontworpen om te interacteren met biologische systemen" },
          { en: "Material extracted from living organisms", es: "Material extraído de organismos vivos", de: "Material aus lebenden Organismen extrahiert", nl: "Materiaal geëxtraheerd uit levende organismen" },
          { en: "Biodegradable plastic", es: "Plástico biodegradable", de: "Biologisch abbaubares Plastik", nl: "Biologisch afbreekbaar plastic" },
          { en: "Natural fiber composite", es: "Compuesto de fibra natural", de: "Naturfaser-Verbundstoff", nl: "Natuurvezel composiet" }
        ],
        correct: 0,
        explanation: {
          en: "Biomaterials are engineered or natural materials used to replace or support biological functions. They must be biocompatible, non-toxic, and designed to interface appropriately with the body without causing adverse reactions.",
          es: "Los biomateriales son materiales diseñados o naturales usados para reemplazar o apoyar funciones biológicas. Deben ser biocompatibles, no tóxicos y diseñados para interactuar apropiadamente con el cuerpo sin causar reacciones adversas.",
          de: "Biomaterialien sind konstruierte oder natürliche Materialien, die verwendet werden, um biologische Funktionen zu ersetzen oder zu unterstützen. Sie müssen biokompatibel, ungiftig und so gestaltet sein, dass sie angemessen mit dem Körper interagieren, ohne schädliche Reaktionen zu verursachen.",
          nl: "Biomaterialen zijn gemanipuleerde of natuurlijke materialen die worden gebruikt om biologische functies te vervangen of ondersteunen. Ze moeten biocompatibel, niet-toxisch zijn en ontworpen om op de juiste manier met het lichaam te interacteren zonder ongewenste reacties te veroorzaken."
        }
      },
      {
        question: {
          en: "What is biocompatibility?",
          es: "¿Qué es la biocompatibilidad?",
          de: "Was ist Biokompatibilität?",
          nl: "Wat is biocompatibiliteit?"
        },
        options: [
          { en: "Ability of material to perform without causing adverse biological response", es: "Capacidad del material para funcionar sin causar respuesta biológica adversa", de: "Fähigkeit eines Materials zu funktionieren ohne schädliche biologische Reaktion zu verursachen", nl: "Vermogen van materiaal om te functioneren zonder ongewenste biologische reactie te veroorzaken" },
          { en: "Compatibility between different organisms", es: "Compatibilidad entre diferentes organismos", de: "Kompatibilität zwischen verschiedenen Organismen", nl: "Compatibiliteit tussen verschillende organismen" },
          { en: "Ability to biodegrade naturally", es: "Capacidad para biodegradarse naturalmente", de: "Fähigkeit zur natürlichen biologischen Abbaubarkeit", nl: "Vermogen om natuurlijk biologisch af te breken" },
          { en: "Similarity to natural biological materials", es: "Similitud con materiales biológicos naturales", de: "Ähnlichkeit mit natürlichen biologischen Materialien", nl: "Gelijkenis met natuurlijke biologische materialen" }
        ],
        correct: 0,
        explanation: {
          en: "Biocompatibility refers to the ability of a biomaterial to perform its desired function without eliciting any undesirable local or systemic effects in the recipient or beneficiary of therapy, while generating the most appropriate beneficial cellular or tissue response.",
          es: "La biocompatibilidad se refiere a la capacidad de un biomaterial para realizar su función deseada sin provocar efectos locales o sistémicos indeseables en el receptor o beneficiario de la terapia, mientras genera la respuesta celular o tisular beneficiosa más apropiada.",
          de: "Biokompatibilität bezieht sich auf die Fähigkeit eines Biomaterials, seine gewünschte Funktion zu erfüllen, ohne unerwünschte lokale oder systemische Effekte im Empfänger oder Nutznießer der Therapie hervorzurufen, während es die angemessenste nützliche zelluläre oder gewebliche Reaktion erzeugt.",
          nl: "Biocompatibiliteit verwijst naar het vermogen van een biomateriaal om zijn gewenste functie uit te voeren zonder ongewenste lokale of systemische effecten bij de ontvanger of begunstigde van therapie te veroorzaken, terwijl het de meest geschikte gunstige cellulaire of weefselreactie genereert."
        }
      },
      {
        question: {
          en: "What is gene therapy?",
          es: "¿Qué es la terapia génica?",
          de: "Was ist Gentherapie?",
          nl: "Wat is gentherapie?"
        },
        options: [
          { en: "Introducing genetic material into patient cells to treat disease", es: "Introducir material genético en células del paciente para tratar enfermedades", de: "Genetisches Material in Patientenzellen einführen zur Krankheitsbehandlung", nl: "Genetisch materiaal introduceren in patiëntencellen om ziekte te behandelen" },
          { en: "Sequencing patient's genome", es: "Secuenciar el genoma del paciente", de: "Sequenzierung des Patientengenoms", nl: "Sequenteren van patiënt's genoom" },
          { en: "Counseling about genetic disorders", es: "Asesoramiento sobre trastornos genéticos", de: "Beratung über genetische Störungen", nl: "Advisering over genetische aandoeningen" },
          { en: "Screening for genetic mutations", es: "Detección de mutaciones genéticas", de: "Screening auf genetische Mutationen", nl: "Screening voor genetische mutaties" }
        ],
        correct: 0,
        explanation: {
          en: "Gene therapy involves the introduction of nucleic acids (DNA or RNA) into a patient's cells to treat or prevent disease, either by correcting defective genes or providing new cellular function. Delivery methods include viral vectors, liposomes, or direct injection.",
          es: "La terapia génica involucra la introducción de ácidos nucleicos (ADN o ARN) en las células de un paciente para tratar o prevenir enfermedades, ya sea corrigiendo genes defectuosos o proporcionando nueva función celular. Los métodos de administración incluyen vectores virales, liposomas o inyección directa.",
          de: "Gentherapie beinhaltet die Einführung von Nukleinsäuren (DNA oder RNA) in die Zellen eines Patienten zur Behandlung oder Prävention von Krankheiten, entweder durch Korrektur defekter Gene oder Bereitstellung neuer zellulärer Funktionen. Übertragungsmethoden umfassen virale Vektoren, Liposomen oder direkte Injektion.",
          nl: "Gentherapie houdt de introductie van nucleïnezuren (DNA of RNA) in een patiënt's cellen in om ziekte te behandelen of voorkomen, ofwel door defecte genen te corrigeren of nieuwe cellulaire functie te bieden. Overdrachtsmethoden omvatten virale vectoren, liposomen of directe injectie."
        }
      },
      {
        question: {
          en: "What is protein engineering?",
          es: "¿Qué es la ingeniería de proteínas?",
          de: "Was ist Protein Engineering?",
          nl: "Wat is proteïne-engineering?"
        },
        options: [
          { en: "Designing proteins with novel or improved functions", es: "Diseñar proteínas con funciones nuevas o mejoradas", de: "Proteine mit neuen oder verbesserten Funktionen entwerfen", nl: "Proteïnen ontwerpen met nieuwe of verbeterde functies" },
          { en: "Manufacturing protein supplements", es: "Fabricar suplementos de proteínas", de: "Protein-Ergänzungen herstellen", nl: "Proteïnesupplementen produceren" },
          { en: "Studying protein structure", es: "Estudiar estructura de proteínas", de: "Proteinstruktur studieren", nl: "Proteïnestructuur bestuderen" },
          { en: "Extracting proteins from cells", es: "Extraer proteínas de células", de: "Proteine aus Zellen extrahieren", nl: "Proteïnen extraheren uit cellen" }
        ],
        correct: 0,
        explanation: {
          en: "Protein engineering involves modifying protein sequences to achieve desired properties such as increased stability, altered substrate specificity, or novel catalytic activities. Techniques include rational design, directed evolution, and computational modeling.",
          es: "La ingeniería de proteínas involucra modificar secuencias de proteínas para lograr propiedades deseadas como mayor estabilidad, especificidad de sustrato alterada o actividades catalíticas nuevas. Las técnicas incluyen diseño racional, evolución dirigida y modelado computacional.",
          de: "Protein Engineering beinhaltet die Modifikation von Proteinsequenzen zur Erreichung gewünschter Eigenschaften wie erhöhter Stabilität, veränderter Substratspezifität oder neuer katalytischer Aktivitäten. Techniken umfassen rationales Design, gerichtete Evolution und Computermodellierung.",
          nl: "Proteïne-engineering houdt het modificeren van proteïnesequenties in om gewenste eigenschappen te bereiken zoals verhoogde stabiliteit, gewijzigde substraatspecificiteit of nieuwe katalytische activiteiten. Technieken omvatten rationeel ontwerp, gerichte evolutie en computationele modellering."
        }
      },
      {
        question: {
          en: "What is a scaffold in tissue engineering?",
          es: "¿Qué es un andamio en ingeniería de tejidos?",
          de: "Was ist ein Scaffold im Tissue Engineering?",
          nl: "Wat is een scaffold in weefselengineering?"
        },
        options: [
          { en: "3D structure that supports cell growth and tissue formation", es: "Estructura 3D que soporta el crecimiento celular y formación de tejido", de: "3D-Struktur, die Zellwachstum und Gewebebildung unterstützt", nl: "3D-structuur die celgroei en weefselvorming ondersteunt" },
          { en: "Surgical support structure", es: "Estructura de soporte quirúrgico", de: "Chirurgische Stützstruktur", nl: "Chirurgische ondersteuningsstructuur" },
          { en: "Cell culture container", es: "Contenedor de cultivo celular", de: "Zellkultur-Behälter", nl: "Celkweek container" },
          { en: "Protein framework in cells", es: "Marco proteico en células", de: "Protein-Rahmenwerk in Zellen", nl: "Proteïne raamwerk in cellen" }
        ],
        correct: 0,
        explanation: {
          en: "Scaffolds are three-dimensional porous structures made from natural or synthetic materials that provide mechanical support and guidance for cell attachment, proliferation, and differentiation during tissue regeneration.",
          es: "Los andamios son estructuras porosas tridimensionales hechas de materiales naturales o sintéticos que proporcionan soporte mecánico y guía para la adhesión, proliferación y diferenciación celular durante la regeneración de tejidos.",
          de: "Scaffolds sind dreidimensionale poröse Strukturen aus natürlichen oder synthetischen Materialien, die mechanische Unterstützung und Führung für Zelladhäsion, Proliferation und Differenzierung während der Geweberegeneration bieten.",
          nl: "Scaffolds zijn driedimensionale poreuze structuren gemaakt van natuurlijke of synthetische materialen die mechanische ondersteuning en geleiding bieden voor celhechting, proliferatie en differentiatie tijdens weefselregeneratie."
        }
      },
      {
        question: {
          en: "What is bioinformatics?",
          es: "¿Qué es la bioinformática?",
          de: "Was ist Bioinformatik?",
          nl: "Wat is bioinformatica?"
        },
        options: [
          { en: "Application of computational methods to analyze biological data", es: "Aplicación de métodos computacionales para analizar datos biológicos", de: "Anwendung von Computermethoden zur Analyse biologischer Daten", nl: "Toepassing van computationele methoden om biologische data te analyseren" },
          { en: "Information systems in hospitals", es: "Sistemas de información en hospitales", de: "Informationssysteme in Krankenhäusern", nl: "Informatiesystemen in ziekenhuizen" },
          { en: "Digital medical records", es: "Registros médicos digitales", de: "Digitale Krankenakten", nl: "Digitale medische dossiers" },
          { en: "Biological specimen cataloging", es: "Catalogación de especímenes biológicos", de: "Katalogisierung biologischer Proben", nl: "Catalogiseren van biologische specimens" }
        ],
        correct: 0,
        explanation: {
          en: "Bioinformatics combines biology, computer science, and information technology to collect, store, analyze, and interpret biological data, particularly genomic and proteomic information, enabling advances in personalized medicine and drug discovery.",
          es: "La bioinformática combina biología, ciencias de la computación y tecnología de la información para recopilar, almacenar, analizar e interpretar datos biológicos, particularmente información genómica y proteómica, permitiendo avances en medicina personalizada y descubrimiento de fármacos.",
          de: "Bioinformatik kombiniert Biologie, Informatik und Informationstechnologie zur Sammlung, Speicherung, Analyse und Interpretation biologischer Daten, insbesondere genomischer und proteomischer Informationen, wodurch Fortschritte in der personalisierten Medizin und Arzneimittelentdeckung ermöglicht werden.",
          nl: "Bioinformatica combineert biologie, informatica en informatietechnologie om biologische data te verzamelen, opslaan, analyseren en interpreteren, met name genomische en proteomische informatie, wat vooruitgang in gepersonaliseerde geneeskunde en geneesmiddelenontdekking mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is a biosensor?",
          es: "¿Qué es un biosensor?",
          de: "Was ist ein Biosensor?",
          nl: "Wat is een biosensor?"
        },
        options: [
          { en: "Device that uses biological components to detect chemical substances", es: "Dispositivo que usa componentes biológicos para detectar sustancias químicas", de: "Gerät, das biologische Komponenten zur Detektion chemischer Substanzen verwendet", nl: "Apparaat dat biologische componenten gebruikt om chemische stoffen te detecteren" },
          { en: "Sensor for measuring temperature", es: "Sensor para medir temperatura", de: "Sensor zur Temperaturmessung", nl: "Sensor voor temperatuurmeting" },
          { en: "Motion detection system", es: "Sistema de detección de movimiento", de: "Bewegungserkennungssystem", nl: "Bewegingsdetectiesysteem" },
          { en: "Radiation monitoring device", es: "Dispositivo de monitoreo de radiación", de: "Strahlungsüberwachungsgerät", nl: "Stralingsmonitoring apparaat" }
        ],
        correct: 0,
        explanation: {
          en: "Biosensors integrate biological recognition elements (enzymes, antibodies, cells) with transducers to convert biological interactions into measurable signals, used in applications from glucose monitoring to environmental contamination detection.",
          es: "Los biosensores integran elementos de reconocimiento biológico (enzimas, anticuerpos, células) con transductores para convertir interacciones biológicas en señales medibles, usados en aplicaciones desde monitoreo de glucosa hasta detección de contaminación ambiental.",
          de: "Biosensoren integrieren biologische Erkennungselemente (Enzyme, Antikörper, Zellen) mit Transducern, um biologische Interaktionen in messbare Signale umzuwandeln, verwendet in Anwendungen von Glukose-Monitoring bis zur Umweltverschmutzungsdetektion.",
          nl: "Biosensoren integreren biologische herkenningselementen (enzymen, antilichamen, cellen) met transducers om biologische interacties om te zetten in meetbare signalen, gebruikt in toepassingen van glucosemonitoring tot milieuverontreinigingsdetectie."
        }
      },
      {
        question: {
          en: "What is metabolic engineering?",
          es: "¿Qué es la ingeniería metabólica?",
          de: "Was ist metabolisches Engineering?",
          nl: "Wat is metabole engineering?"
        },
        options: [
          { en: "Modifying cellular metabolism to enhance production of desired compounds", es: "Modificar el metabolismo celular para mejorar la producción de compuestos deseados", de: "Modifikation des zellulären Stoffwechsels zur Verbesserung der Produktion gewünschter Verbindungen", nl: "Modificeren van cellulair metabolisme om productie van gewenste verbindingen te verbeteren" },
          { en: "Studying metabolic disorders", es: "Estudiar trastornos metabólicos", de: "Stoffwechselstörungen studieren", nl: "Metabole stoornissen bestuderen" },
          { en: "Engineering exercise equipment", es: "Diseñar equipo de ejercicio", de: "Trainingsgeräte konstruieren", nl: "Sportapparatuur ontwerpen" },
          { en: "Measuring metabolic rates", es: "Medir tasas metabólicas", de: "Stoffwechselraten messen", nl: "Metabole snelheden meten" }
        ],
        correct: 0,
        explanation: {
          en: "Metabolic engineering involves redirecting cellular metabolism through genetic modifications to optimize the production of specific metabolites, enabling the biotechnological production of pharmaceuticals, fuels, and chemicals in microorganisms.",
          es: "La ingeniería metabólica involucra redirigir el metabolismo celular a través de modificaciones genéticas para optimizar la producción de metabolitos específicos, permitiendo la producción biotecnológica de fármacos, combustibles y químicos en microorganismos.",
          de: "Metabolisches Engineering beinhaltet die Umleitung des zellulären Stoffwechsels durch genetische Modifikationen zur Optimierung der Produktion spezifischer Metaboliten, wodurch die biotechnologische Produktion von Pharmazeutika, Brennstoffen und Chemikalien in Mikroorganismen ermöglicht wird.",
          nl: "Metabole engineering houdt het omleiden van cellulair metabolisme in door genetische modificaties om de productie van specifieke metabolieten te optimaliseren, waardoor biotechnologische productie van farmaceutica, brandstoffen en chemicaliën in micro-organismen mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is organ-on-a-chip technology?",
          es: "¿Qué es la tecnología de órgano-en-un-chip?",
          de: "Was ist Organ-on-a-Chip-Technologie?",
          nl: "Wat is orgaan-op-een-chip technologie?"
        },
        options: [
          { en: "Microfluidic devices that simulate human organ functions", es: "Dispositivos microfluídicos que simulan funciones de órganos humanos", de: "Mikrofluidische Geräte, die menschliche Organfunktionen simulieren", nl: "Microfluïdische apparaten die menselijke orgaanfuncties simuleren" },
          { en: "Computer chips implanted in organs", es: "Chips de computadora implantados en órganos", de: "Computerchips, die in Organe implantiert werden", nl: "Computerchips geïmplanteerd in organen" },
          { en: "Digital organ monitoring systems", es: "Sistemas digitales de monitoreo de órganos", de: "Digitale Organüberwachungssysteme", nl: "Digitale orgaanmonitoringsystemen" },
          { en: "Artificial organ replacement devices", es: "Dispositivos de reemplazo de órganos artificiales", de: "Künstliche Organersatzgeräte", nl: "Kunstmatige orgaanvervangende apparaten" }
        ],
        correct: 0,
        explanation: {
          en: "Organs-on-chips are microengineered cell culture devices that contain continuously perfused chambers inhabited by living human cells arranged to simulate tissue- and organ-level physiology, providing alternatives to animal testing for drug development.",
          es: "Los órganos-en-chips son dispositivos de cultivo celular micromanipulados que contienen cámaras continuamente perfundidas habitadas por células humanas vivas organizadas para simular la fisiología a nivel de tejido y órgano, proporcionando alternativas a las pruebas en animales para el desarrollo de fármacos.",
          de: "Organs-on-Chips sind mikromanipulierte Zellkulturgerate, die kontinuierlich perfundierte Kammern enthalten, die von lebenden menschlichen Zellen bewohnt werden, die so angeordnet sind, dass sie Gewebe- und Organphysiologie simulieren, wodurch Alternativen zu Tierversuchen für die Arzneimittelentwicklung bereitgestellt werden.",
          nl: "Organen-op-chips zijn micro-gemanipuleerde celkweek apparaten die continu geperfundeerde kamers bevatten bewoond door levende menselijke cellen gerangschikt om weefsel- en orgaanfysiologie te simuleren, wat alternatieven biedt voor dierproeven bij geneesmiddelenontwikkeling."
        }
      },
      {
        question: {
          en: "What is recombinant DNA technology?",
          es: "¿Qué es la tecnología de ADN recombinante?",
          de: "Was ist rekombinante DNA-Technologie?",
          nl: "Wat is recombinant DNA-technologie?"
        },
        options: [
          { en: "Technique for joining DNA from different sources", es: "Técnica para unir ADN de diferentes fuentes", de: "Technik zur Verbindung von DNA aus verschiedenen Quellen", nl: "Techniek voor het samenvoegen van DNA uit verschillende bronnen" },
          { en: "DNA sequencing method", es: "Método de secuenciación de ADN", de: "DNA-Sequenzierungsmethode", nl: "DNA-sequentiemethode" },
          { en: "DNA repair mechanism", es: "Mecanismo de reparación de ADN", de: "DNA-Reparaturmechanismus", nl: "DNA-reparatiemechanisme" },
          { en: "DNA replication process", es: "Proceso de replicación de ADN", de: "DNA-Replikationsprozess", nl: "DNA-replicatieproces" }
        ],
        correct: 0,
        explanation: {
          en: "Recombinant DNA technology involves cutting and joining DNA segments from different organisms using restriction enzymes and ligases, enabling the production of genetically modified organisms and recombinant proteins for research and therapeutic applications.",
          es: "La tecnología de ADN recombinante involucra cortar y unir segmentos de ADN de diferentes organismos usando enzimas de restricción y ligasas, permitiendo la producción de organismos genéticamente modificados y proteínas recombinantes para aplicaciones de investigación y terapéuticas.",
          de: "Rekombinante DNA-Technologie beinhaltet das Schneiden und Verbinden von DNA-Segmenten verschiedener Organismen mit Restriktionsenzymen und Ligasen, wodurch die Produktion genetisch veränderter Organismen und rekombinanter Proteine für Forschungs- und therapeutische Anwendungen ermöglicht wird.",
          nl: "Recombinant DNA-technologie houdt het knippen en samenvoegen van DNA-segmenten uit verschillende organismen in met restrictie-enzymen en ligasen, wat de productie van genetisch gemodificeerde organismen en recombinante proteïnen voor onderzoek en therapeutische toepassingen mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is a bioreactor?",
          es: "¿Qué es un biorreactor?",
          de: "Was ist ein Bioreaktor?",
          nl: "Wat is een bioreactor?"
        },
        options: [
          { en: "Vessel for growing cells or microorganisms under controlled conditions", es: "Recipiente para cultivar células o microorganismos bajo condiciones controladas", de: "Gefäß zum Züchten von Zellen oder Mikroorganismen unter kontrollierten Bedingungen", nl: "Vat voor het kweken van cellen of micro-organismen onder gecontroleerde omstandigheden" },
          { en: "Chemical reaction chamber", es: "Cámara de reacción química", de: "Chemische Reaktionskammer", nl: "Chemische reactiekamer" },
          { en: "Nuclear reactor component", es: "Componente de reactor nuclear", de: "Kernreaktor-Komponente", nl: "Kernreactor component" },
          { en: "Water treatment facility", es: "Instalación de tratamiento de agua", de: "Wasserbehandlungsanlage", nl: "Waterzuiveringsinstallatie" }
        ],
        correct: 0,
        explanation: {
          en: "Bioreactors provide controlled environments for biological processes, maintaining optimal conditions of temperature, pH, oxygen, and nutrients for cell growth, microbial fermentation, or tissue cultivation in biotechnology applications.",
          es: "Los biorreactores proporcionan ambientes controlados para procesos biológicos, manteniendo condiciones óptimas de temperatura, pH, oxígeno y nutrientes para crecimiento celular, fermentación microbiana o cultivo de tejidos en aplicaciones biotecnológicas.",
          de: "Bioreaktoren bieten kontrollierte Umgebungen für biologische Prozesse und halten optimale Bedingungen von Temperatur, pH, Sauerstoff und Nährstoffen für Zellwachstum, mikrobielle Fermentation oder Gewebekultivierung in biotechnologischen Anwendungen aufrecht.",
          nl: "Bioreactoren bieden gecontroleerde omgevingen voor biologische processen, waarbij optimale condities van temperatuur, pH, zuurstof en voedingsstoffen worden gehandhaafd voor celgroei, microbiële fermentatie of weefselkweek in biotechnologische toepassingen."
        }
      },
      {
        question: {
          en: "What is pharmacogenomics?",
          es: "¿Qué es la farmacogenómica?",
          de: "Was ist Pharmakogenomik?",
          nl: "Wat is farmacogenomica?"
        },
        options: [
          { en: "Study of how genes affect drug responses", es: "Estudio de cómo los genes afectan las respuestas a los medicamentos", de: "Studium, wie Gene Arzneimittelreaktionen beeinflussen", nl: "Studie van hoe genen geneesmiddelreacties beïnvloeden" },
          { en: "Development of new pharmaceuticals", es: "Desarrollo de nuevos fármacos", de: "Entwicklung neuer Pharmazeutika", nl: "Ontwikkeling van nieuwe farmaceutica" },
          { en: "Mapping of disease genes", es: "Mapeo de genes de enfermedades", de: "Kartierung von Krankheitsgenen", nl: "In kaart brengen van ziektegenen" },
          { en: "Studying drug manufacturing", es: "Estudiar fabricación de medicamentos", de: "Arzneimittelherstellung studieren", nl: "Geneesmiddelenproductie bestuderen" }
        ],
        correct: 0,
        explanation: {
          en: "Pharmacogenomics studies how genetic variations affect individual responses to medications, enabling personalized medicine approaches that optimize drug selection and dosing based on a patient's genetic profile to maximize efficacy and minimize adverse effects.",
          es: "La farmacogenómica estudia cómo las variaciones genéticas afectan las respuestas individuales a los medicamentos, habilitando enfoques de medicina personalizada que optimizan la selección y dosificación de fármacos basados en el perfil genético de un paciente para maximizar la eficacia y minimizar efectos adversos.",
          de: "Pharmakogenomik untersucht, wie genetische Variationen individuelle Reaktionen auf Medikamente beeinflussen, wodurch personalisierte Medizinansätze ermöglicht werden, die Arzneimittelauswahl und Dosierung basierend auf dem genetischen Profil eines Patienten optimieren, um Wirksamkeit zu maximieren und unerwünschte Wirkungen zu minimieren.",
          nl: "Farmacogenomica bestudeert hoe genetische variaties individuele reacties op medicijnen beïnvloeden, wat gepersonaliseerde geneeskunde-benaderingen mogelijk maakt die medicijnselectie en dosering optimaliseren gebaseerd op het genetische profiel van een patiënt om werkzaamheid te maximaliseren en bijwerkingen te minimaliseren."
        }
      },
      {
        question: {
          en: "What is hydrogel in bioengineering?",
          es: "¿Qué es el hidrogel en bioingeniería?",
          de: "Was ist Hydrogel im Bioengineering?",
          nl: "Wat is hydrogel in bio-engineering?"
        },
        options: [
          { en: "Water-swollen crosslinked polymer network", es: "Red de polímeros entrecruzados hinchados con agua", de: "Wasserquellbares vernetztes Polymernetzwerk", nl: "Water-gezwollen verknoopt polymeernetwerk" },
          { en: "Liquid drug delivery system", es: "Sistema líquido de administración de fármacos", de: "Flüssiges Arzneimittelabgabesystem", nl: "Vloeibaar geneesmiddelafgifte systeem" },
          { en: "Gel used for cell storage", es: "Gel usado para almacenamiento celular", de: "Gel zur Zellspeicherung verwendet", nl: "Gel gebruikt voor celopslag" },
          { en: "Aqueous solution for cell culture", es: "Solución acuosa para cultivo celular", de: "Wässrige Lösung für Zellkultur", nl: "Waterige oplossing voor celkweek" }
        ],
        correct: 0,
        explanation: {
          en: "Hydrogels are three-dimensional polymer networks that can absorb large amounts of water while maintaining their structure, making them ideal for tissue engineering, drug delivery, and contact lenses due to their biocompatibility and similarity to natural tissues.",
          es: "Los hidrogeles son redes de polímeros tridimensionales que pueden absorber grandes cantidades de agua mientras mantienen su estructura, haciéndolos ideales para ingeniería de tejidos, administración de fármacos y lentes de contacto debido a su biocompatibilidad y similitud con tejidos naturales.",
          de: "Hydrogele sind dreidimensionale Polymernetzwerke, die große Wassermengen absorbieren können, während sie ihre Struktur beibehalten, wodurch sie ideal für Tissue Engineering, Arzneimittelabgabe und Kontaktlinsen sind aufgrund ihrer Biokompatibilität und Ähnlichkeit mit natürlichen Geweben.",
          nl: "Hydrogels zijn driedimensionale polymeernetwerken die grote hoeveelheden water kunnen absorberen terwijl ze hun structuur behouden, waardoor ze ideaal zijn voor weefselengineering, geneesmiddelafgifte en contactlenzen vanwege hun biocompatibiliteit en gelijkenis met natuurlijke weefsels."
        }
      },
      {
        question: {
          en: "What is cell reprogramming?",
          es: "¿Qué es la reprogramación celular?",
          de: "Was ist Zellreprogrammierung?",
          nl: "Wat is celherprogrammering?"
        },
        options: [
          { en: "Converting differentiated cells back to pluripotent state", es: "Convertir células diferenciadas de vuelta al estado pluripotente", de: "Differenzierte Zellen zurück in pluripotenten Zustand umwandeln", nl: "Gedifferentieerde cellen terugbrengen naar pluripotente toestand" },
          { en: "Programming cells to perform specific functions", es: "Programar células para realizar funciones específicas", de: "Zellen programmieren, um spezifische Funktionen auszuführen", nl: "Cellen programmeren om specifieke functies uit te voeren" },
          { en: "Changing cell culture conditions", es: "Cambiar condiciones de cultivo celular", de: "Zellkulturbedingungen ändern", nl: "Celkweekomstandigheden veranderen" },
          { en: "Modifying cellular DNA directly", es: "Modificar ADN celular directamente", de: "Zelluläre DNA direkt modifizieren", nl: "Cellulaire DNA direct modificeren" }
        ],
        correct: 0,
        explanation: {
          en: "Cell reprogramming involves converting mature, specialized cells back into pluripotent stem cells that can differentiate into any cell type, typically achieved through the expression of specific transcription factors like Oct4, Sox2, Klf4, and c-Myc (Yamanaka factors).",
          es: "La reprogramación celular involucra convertir células maduras y especializadas de vuelta en células madre pluripotentes que pueden diferenciarse en cualquier tipo celular, típicamente logrado a través de la expresión de factores de transcripción específicos como Oct4, Sox2, Klf4 y c-Myc (factores de Yamanaka).",
          de: "Zellreprogrammierung beinhaltet die Umwandlung reifer, spezialisierter Zellen zurück in pluripotente Stammzellen, die sich in jeden Zelltyp differenzieren können, typischerweise erreicht durch die Expression spezifischer Transkriptionsfaktoren wie Oct4, Sox2, Klf4 und c-Myc (Yamanaka-Faktoren).",
          nl: "Celherprogrammering houdt het omzetten van rijpe, gespecialiseerde cellen terug naar pluripotente stamcellen in die zich kunnen differentiëren tot elk celtype, typisch bereikt door de expressie van specifieke transcriptiefactoren zoals Oct4, Sox2, Klf4 en c-Myc (Yamanaka factoren)."
        }
      },
      {
        question: {
          en: "What is bioprinting?",
          es: "¿Qué es la bioimpresión?",
          de: "Was ist Bioprinting?",
          nl: "Wat is bioprinting?"
        },
        options: [
          { en: "3D printing using living cells and biomaterials", es: "Impresión 3D usando células vivas y biomateriales", de: "3D-Druck mit lebenden Zellen und Biomaterialien", nl: "3D-printen met levende cellen en biomaterialen" },
          { en: "Printing biological research papers", es: "Imprimir artículos de investigación biológica", de: "Biologische Forschungsarbeiten drucken", nl: "Biologische onderzoekspapers printen" },
          { en: "Creating biological illustrations", es: "Crear ilustraciones biológicas", de: "Biologische Illustrationen erstellen", nl: "Biologische illustraties maken" },
          { en: "Printing molecular structures", es: "Imprimir estructuras moleculares", de: "Molekularstrukturen drucken", nl: "Moleculaire structuren printen" }
        ],
        correct: 0,
        explanation: {
          en: "Bioprinting is an additive manufacturing process that creates tissue-like structures by precisely depositing living cells, biomaterials, and growth factors layer by layer, potentially revolutionizing regenerative medicine and drug testing.",
          es: "La bioimpresión es un proceso de manufactura aditiva que crea estructuras similares a tejidos depositando con precisión células vivas, biomateriales y factores de crecimiento capa por capa, potencialmente revolucionando la medicina regenerativa y pruebas de fármacos.",
          de: "Bioprinting ist ein additiver Herstellungsprozess, der gewebeähnliche Strukturen durch präzises Absetzen von lebenden Zellen, Biomaterialien und Wachstumsfaktoren Schicht für Schicht erstellt, wodurch die regenerative Medizin und Arzneimitteltests möglicherweise revolutioniert werden.",
          nl: "Bioprinting is een additief productieproces dat weefselachtige structuren creëert door nauwkeurig levende cellen, biomaterialen en groeifactoren laag voor laag neer te zetten, wat mogelijk regeneratieve geneeskunde en geneesmiddeltesten revolutioneert."
        }
      },
      {
        question: {
          en: "What is nanomedicine?",
          es: "¿Qué es la nanomedicina?",
          de: "Was ist Nanomedizin?",
          nl: "Wat is nanogeneeskunde?"
        },
        options: [
          { en: "Medical applications using nanoscale materials and devices", es: "Aplicaciones médicas usando materiales y dispositivos a nanoescala", de: "Medizinische Anwendungen mit nanoskaligen Materialien und Geräten", nl: "Medische toepassingen met nanosschaal materialen en apparaten" },
          { en: "Very small medical procedures", es: "Procedimientos médicos muy pequeños", de: "Sehr kleine medizinische Verfahren", nl: "Zeer kleine medische procedures" },
          { en: "Microscopic surgery techniques", es: "Técnicas de cirugía microscópica", de: "Mikroskopische Chirurgie-Techniken", nl: "Microscopische chirurgietechnieken" },
          { en: "Molecular-level diagnostics", es: "Diagnósticos a nivel molecular", de: "Diagnostik auf molekularer Ebene", nl: "Moleculair-niveau diagnostiek" }
        ],
        correct: 0,
        explanation: {
          en: "Nanomedicine involves the use of nanoscale materials, devices, and systems for medical applications, including targeted drug delivery, imaging contrast agents, and therapeutic nanoparticles that can cross biological barriers and interact at the cellular level.",
          es: "La nanomedicina involucra el uso de materiales, dispositivos y sistemas a nanoescala para aplicaciones médicas, incluyendo administración dirigida de fármacos, agentes de contraste para imagen y nanopartículas terapéuticas que pueden cruzar barreras biológicas e interactuar a nivel celular.",
          de: "Nanomedizin beinhaltet die Verwendung von nanoskaligen Materialien, Geräten und Systemen für medizinische Anwendungen, einschließlich gezielter Arzneimittelabgabe, bildgebender Kontrastmittel und therapeutischer Nanopartikel, die biologische Barrieren überwinden und auf zellulärer Ebene interagieren können.",
          nl: "Nanogeneeskunde houdt het gebruik van nanosschaal materialen, apparaten en systemen in voor medische toepassingen, inclusief gerichte geneesmiddelafgifte, beeldvorming contrastmiddelen en therapeutische nanodeeltjes die biologische barrières kunnen overschrijden en op cellulair niveau kunnen interacteren."
        }
      },
      {
        question: {
          en: "What is optogenetics?",
          es: "¿Qué es la optogenética?",
          de: "Was ist Optogenetik?",
          nl: "Wat is optogenetica?"
        },
        options: [
          { en: "Using light to control genetically modified cells", es: "Usar luz para controlar células genéticamente modificadas", de: "Licht verwenden, um genetisch veränderte Zellen zu kontrollieren", nl: "Licht gebruiken om genetisch gemodificeerde cellen te controleren" },
          { en: "Genetic analysis using optical methods", es: "Análisis genético usando métodos ópticos", de: "Genetische Analyse mit optischen Methoden", nl: "Genetische analyse met optische methoden" },
          { en: "Light therapy for genetic disorders", es: "Terapia de luz para trastornos genéticos", de: "Lichttherapie für genetische Störungen", nl: "Lichttherapie voor genetische stoornissen" },
          { en: "Optical gene sequencing", es: "Secuenciación genética óptica", de: "Optische Gensequenzierung", nl: "Optische gensequentiëring" }
        ],
        correct: 0,
        explanation: {
          en: "Optogenetics is a technique that uses light-sensitive proteins (opsins) introduced into specific cells to control their activity with precise temporal and spatial resolution, enabling researchers to study neural circuits and potentially treat neurological disorders.",
          es: "La optogenética es una técnica que usa proteínas sensibles a la luz (opsinas) introducidas en células específicas para controlar su actividad con resolución temporal y espacial precisa, permitiendo a los investigadores estudiar circuitos neurales y potencialmente tratar trastornos neurológicos.",
          de: "Optogenetik ist eine Technik, die lichtempfindliche Proteine (Opsine) verwendet, die in spezifische Zellen eingeführt werden, um deren Aktivität mit präziser zeitlicher und räumlicher Auflösung zu kontrollieren, wodurch Forscher neurale Schaltkreise studieren und möglicherweise neurologische Störungen behandeln können.",
          nl: "Optogenetica is een techniek die lichtgevoelige proteïnen (opsines) gebruikt die in specifieke cellen worden geïntroduceerd om hun activiteit te controleren met precieze temporele en ruimtelijke resolutie, waardoor onderzoekers neurale circuits kunnen bestuderen en mogelijk neurologische aandoeningen kunnen behandelen."
        }
      },
      {
        question: {
          en: "What is immunoengineering?",
          es: "¿Qué es la inmunoingeniería?",
          de: "Was ist Immunengineering?",
          nl: "Wat is immuno-engineering?"
        },
        options: [
          { en: "Engineering immune system responses for therapeutic purposes", es: "Diseñar respuestas del sistema inmune para propósitos terapéuticos", de: "Immunsystemreaktionen für therapeutische Zwecke konstruieren", nl: "Immuunsysteemreacties engineeren voor therapeutische doeleinden" },
          { en: "Building immunity databases", es: "Construir bases de datos de inmunidad", de: "Immunitätsdatenbanken aufbauen", nl: "Immuniteitsdatabases bouwen" },
          { en: "Designing vaccines only", es: "Diseñar solo vacunas", de: "Nur Impfstoffe entwickeln", nl: "Alleen vaccins ontwerpen" },
          { en: "Studying autoimmune diseases", es: "Estudiar enfermedades autoinmunes", de: "Autoimmunerkrankungen studieren", nl: "Auto-immuunziekten bestuderen" }
        ],
        correct: 0,
        explanation: {
          en: "Immunoengineering involves designing and modifying immune system components to enhance therapeutic outcomes, including engineered antibodies, CAR-T cell therapy, and biomaterial-based immunomodulation to treat cancer, autoimmune diseases, and transplant rejection.",
          es: "La inmunoingeniería involucra diseñar y modificar componentes del sistema inmune para mejorar resultados terapéuticos, incluyendo anticuerpos diseñados, terapia de células CAR-T y inmunomodulación basada en biomateriales para tratar cáncer, enfermedades autoinmunes y rechazo de trasplantes.",
          de: "Immunengineering beinhaltet das Design und die Modifikation von Immunsystemkomponenten zur Verbesserung therapeutischer Ergebnisse, einschließlich konstruierter Antikörper, CAR-T-Zelltherapie und biomaterialbasierter Immunmodulation zur Behandlung von Krebs, Autoimmunerkrankungen und Transplantatabstoßung.",
          nl: "Immuno-engineering houdt het ontwerpen en modificeren van immuunsysteemcomponenten in om therapeutische uitkomsten te verbeteren, inclusief gemanipuleerde antilichamen, CAR-T celtherapie en biomaterialgebaseerde immunomodulatie om kanker, auto-immuunziekten en transplantaatafstoting te behandelen."
        }
      },
      {
        question: {
          en: "What is directed evolution?",
          es: "¿Qué es la evolución dirigida?",
          de: "Was ist gerichtete Evolution?",
          nl: "Wat is gerichte evolutie?"
        },
        options: [
          { en: "Laboratory technique to evolve proteins with desired properties", es: "Técnica de laboratorio para evolucionar proteínas con propiedades deseadas", de: "Labortechnik zur Evolution von Proteinen mit gewünschten Eigenschaften", nl: "Laboratoriumtechniek om proteïnen te evolueren met gewenste eigenschappen" },
          { en: "Controlling natural evolution processes", es: "Controlar procesos de evolución natural", de: "Natürliche Evolutionsprozesse kontrollieren", nl: "Natuurlijke evolutieprocessen controleren" },
          { en: "Breeding animals for specific traits", es: "Criar animales para rasgos específicos", de: "Tiere für spezifische Eigenschaften züchten", nl: "Dieren fokken voor specifieke eigenschappen" },
          { en: "Planning evolutionary pathways", es: "Planificar vías evolutivas", de: "Evolutionäre Wege planen", nl: "Evolutionaire paden plannen" }
        ],
        correct: 0,
        explanation: {
          en: "Directed evolution is a method used in protein engineering that mimics natural evolution in the laboratory by iteratively generating variants, selecting for desired properties, and amplifying successful candidates to develop proteins with improved or novel functions.",
          es: "La evolución dirigida es un método usado en ingeniería de proteínas que imita la evolución natural en el laboratorio generando iterativamente variantes, seleccionando propiedades deseadas y amplificando candidatos exitosos para desarrollar proteínas con funciones mejoradas o nuevas.",
          de: "Gerichtete Evolution ist eine Methode im Protein Engineering, die die natürliche Evolution im Labor nachahmt, indem iterativ Varianten erzeugt, für gewünschte Eigenschaften selektiert und erfolgreiche Kandidaten amplifiziert werden, um Proteine mit verbesserten oder neuen Funktionen zu entwickeln.",
          nl: "Gerichte evolutie is een methode gebruikt in proteïne-engineering die natuurlijke evolutie in het laboratorium nabootst door iteratief varianten te genereren, te selecteren voor gewenste eigenschappen en succesvolle kandidaten te versterken om proteïnen met verbeterde of nieuwe functies te ontwikkelen."
        }
      },
      {
        question: {
          en: "What is biomimetics in engineering?",
          es: "¿Qué es la biomimética en ingeniería?",
          de: "Was ist Biomimetik im Engineering?",
          nl: "Wat is biomimetica in engineering?"
        },
        options: [
          { en: "Designing materials and systems inspired by biological structures", es: "Diseñar materiales y sistemas inspirados en estructuras biológicas", de: "Materialien und Systeme entwerfen, die von biologischen Strukturen inspiriert sind", nl: "Materialen en systemen ontwerpen geïnspireerd door biologische structuren" },
          { en: "Copying biological processes exactly", es: "Copiar procesos biológicos exactamente", de: "Biologische Prozesse exakt kopieren", nl: "Biologische processen exact kopiëren" },
          { en: "Studying animal behavior", es: "Estudiar comportamiento animal", de: "Tierverhalten studieren", nl: "Diergedrag bestuderen" },
          { en: "Creating artificial ecosystems", es: "Crear ecosistemas artificiales", de: "Künstliche Ökosysteme schaffen", nl: "Kunstmatige ecosystemen creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Biomimetics involves studying biological systems and processes to inspire the design of new materials, devices, and systems. Examples include Velcro inspired by burr seeds, gecko-inspired adhesives, and shark skin-inspired swimsuits and ship hulls.",
          es: "La biomimética involucra estudiar sistemas y procesos biológicos para inspirar el diseño de nuevos materiales, dispositivos y sistemas. Ejemplos incluyen Velcro inspirado en semillas de bardana, adhesivos inspirados en gecko y trajes de baño e cascos de barco inspirados en piel de tiburón.",
          de: "Biomimetik beinhaltet das Studium biologischer Systeme und Prozesse zur Inspiration für das Design neuer Materialien, Geräte und Systeme. Beispiele sind Klettverschluss inspiriert von Klettensamen, gecko-inspirierte Klebstoffe und haifischhaut-inspirierte Schwimmanzüge und Schiffsrümpfe.",
          nl: "Biomimetica houdt het bestuderen van biologische systemen en processen in om het ontwerp van nieuwe materialen, apparaten en systemen te inspireren. Voorbeelden zijn klittenband geïnspireerd door klitten, gecko-geïnspireerde lijmen en haaienhuidi-geïnspireerde zwempakken en scheepsrompen."
        }
      },
      {
        question: {
          en: "What is systems biology?",
          es: "¿Qué es la biología de sistemas?",
          de: "Was ist Systembiologie?",
          nl: "Wat is systeembiologie?"
        },
        options: [
          { en: "Holistic approach to understanding biological systems", es: "Enfoque holístico para entender sistemas biológicos", de: "Ganzheitlicher Ansatz zum Verständnis biologischer Systeme", nl: "Holistische benadering voor het begrijpen van biologische systemen" },
          { en: "Computer systems for biology", es: "Sistemas de computadora para biología", de: "Computersysteme für Biologie", nl: "Computersystemen voor biologie" },
          { en: "Classification of biological systems", es: "Clasificación de sistemas biológicos", de: "Klassifizierung biologischer Systeme", nl: "Classificatie van biologische systemen" },
          { en: "Engineering biological equipment", es: "Diseñar equipo biológico", de: "Biologische Ausrüstung konstruieren", nl: "Biologische apparatuur engineeren" }
        ],
        correct: 0,
        explanation: {
          en: "Systems biology is an interdisciplinary approach that studies biological systems as integrated networks rather than individual components, using mathematical modeling, computational analysis, and experimental validation to understand complex biological phenomena.",
          es: "La biología de sistemas es un enfoque interdisciplinario que estudia sistemas biológicos como redes integradas en lugar de componentes individuales, usando modelado matemático, análisis computacional y validación experimental para entender fenómenos biológicos complejos.",
          de: "Systembiologie ist ein interdisziplinärer Ansatz, der biologische Systeme als integrierte Netzwerke anstatt als einzelne Komponenten studiert, unter Verwendung mathematischer Modellierung, computergestützter Analyse und experimenteller Validierung zum Verständnis komplexer biologischer Phänomene.",
          nl: "Systeembiologie is een interdisciplinaire benadering die biologische systemen bestudeert als geïntegreerde netwerken in plaats van individuele componenten, met behulp van wiskundige modellering, computationele analyse en experimentele validatie om complexe biologische fenomenen te begrijpen."
        }
      },
      {
        question: {
          en: "What is precision medicine?",
          es: "¿Qué es la medicina de precisión?",
          de: "Was ist Präzisionsmedizin?",
          nl: "Wat is precisiegeneeskunde?"
        },
        options: [
          { en: "Tailoring medical treatment to individual patient characteristics", es: "Adaptar tratamiento médico a características individuales del paciente", de: "Medizinische Behandlung an individuelle Patienteneigenschaften anpassen", nl: "Medische behandeling afstemmen op individuele patiëntkenmerken" },
          { en: "Extremely accurate surgical procedures", es: "Procedimientos quirúrgicos extremadamente precisos", de: "Extrem genaue chirurgische Verfahren", nl: "Extreem nauwkeurige chirurgische procedures" },
          { en: "Precise measurement in medicine", es: "Medición precisa en medicina", de: "Präzise Messung in der Medizin", nl: "Precieze meting in de geneeskunde" },
          { en: "Standardized treatment protocols", es: "Protocolos de tratamiento estandarizados", de: "Standardisierte Behandlungsprotokolle", nl: "Gestandaardiseerde behandelingsprotocollen" }
        ],
        correct: 0,
        explanation: {
          en: "Precision medicine is an approach that considers individual differences in genetics, environment, and lifestyle when designing treatment plans, enabling more effective and targeted therapies while minimizing adverse effects through personalized healthcare strategies.",
          es: "La medicina de precisión es un enfoque que considera diferencias individuales en genética, ambiente y estilo de vida al diseñar planes de tratamiento, habilitando terapias más efectivas y dirigidas mientras minimiza efectos adversos a través de estrategias de atención médica personalizadas.",
          de: "Präzisionsmedizin ist ein Ansatz, der individuelle Unterschiede in Genetik, Umwelt und Lebensstil bei der Gestaltung von Behandlungsplänen berücksichtigt, wodurch effektivere und gezieltere Therapien ermöglicht werden, während unerwünschte Wirkungen durch personalisierte Gesundheitsstrategien minimiert werden.",
          nl: "Precisiegeneeskunde is een benadering die individuele verschillen in genetica, omgeving en levensstijl overweegt bij het ontwerpen van behandelingsplannen, waardoor effectievere en gerichte therapieën mogelijk worden terwijl bijwerkingen worden geminimaliseerd door gepersonaliseerde zorgstrategieën."
        }
      },
      {
        question: {
          en: "What is CRISPR base editing?",
          es: "¿Qué es la edición de bases CRISPR?",
          de: "Was ist CRISPR-Base-Editing?",
          nl: "Wat is CRISPR base editing?"
        },
        options: [
          { en: "Precise single nucleotide changes without double-strand breaks", es: "Cambios precisos de nucleótidos individuales sin rupturas de doble cadena", de: "Präzise Einzelnukleotid-Änderungen ohne Doppelstrangbrüche", nl: "Precieze enkele nucleotide veranderingen zonder dubbelstreng breuken" },
          { en: "Creating CRISPR guide RNAs", es: "Crear ARN guía CRISPR", de: "CRISPR-Leit-RNAs erstellen", nl: "CRISPR gids-RNA's creëren" },
          { en: "Editing CRISPR system components", es: "Editar componentes del sistema CRISPR", de: "CRISPR-Systemkomponenten bearbeiten", nl: "CRISPR systeemcomponenten bewerken" },
          { en: "Basic CRISPR modifications", es: "Modificaciones básicas de CRISPR", de: "Grundlegende CRISPR-Modifikationen", nl: "Basis CRISPR modificaties" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR base editing is an advanced gene editing technique that enables precise single nucleotide changes without creating double-strand DNA breaks, using modified Cas proteins fused with deaminase enzymes to convert specific bases (like C to T or A to G).",
          es: "La edición de bases CRISPR es una técnica avanzada de edición genética que permite cambios precisos de nucleótidos individuales sin crear rupturas de ADN de doble cadena, usando proteínas Cas modificadas fusionadas con enzimas deaminasas para convertir bases específicas (como C a T o A a G).",
          de: "CRISPR-Base-Editing ist eine fortgeschrittene Genbearbeitungstechnik, die präzise Einzelnukleotid-Änderungen ohne Doppelstrang-DNA-Brüche ermöglicht, unter Verwendung modifizierter Cas-Proteine, die mit Deaminase-Enzymen fusioniert sind, um spezifische Basen zu konvertieren (wie C zu T oder A zu G).",
          nl: "CRISPR base editing is een geavanceerde gen-bewerkingstechniek die precieze enkele nucleotide veranderingen mogelijk maakt zonder dubbelstreng-DNA breuken te creëren, met behulp van gemodificeerde Cas-proteïnen gefuseerd met deaminase enzymen om specifieke bases te converteren (zoals C naar T of A naar G)."
        }
      },
      {
        question: {
          en: "What is tissue decellularization?",
          es: "¿Qué es la descelularización de tejidos?",
          de: "Was ist Gewebe-Dezellularisierung?",
          nl: "Wat is weefseldecellularisatie?"
        },
        options: [
          { en: "Removing cells while preserving extracellular matrix structure", es: "Remover células mientras se preserva la estructura de matriz extracelular", de: "Zellen entfernen unter Beibehaltung der extrazellulären Matrixstruktur", nl: "Cellen verwijderen terwijl extracellulaire matrix structuur behouden blijft" },
          { en: "Breaking down cell walls", es: "Romper paredes celulares", de: "Zellwände aufbrechen", nl: "Celwanden afbreken" },
          { en: "Separating different cell types", es: "Separar diferentes tipos de células", de: "Verschiedene Zelltypen trennen", nl: "Verschillende celtypes scheiden" },
          { en: "Reducing cell density", es: "Reducir densidad celular", de: "Zelldichte reduzieren", nl: "Celdichtheid verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Tissue decellularization involves removing cellular components from tissues while preserving the native extracellular matrix architecture and composition, creating natural scaffolds that can be repopulated with patient cells for tissue engineering applications.",
          es: "La descelularización de tejidos involucra remover componentes celulares de tejidos mientras se preserva la arquitectura y composición nativa de la matriz extracelular, creando andamios naturales que pueden ser repoblados con células del paciente para aplicaciones de ingeniería de tejidos.",
          de: "Gewebe-Dezellularisierung beinhaltet das Entfernen zellulärer Komponenten aus Geweben unter Beibehaltung der nativen extrazellulären Matrixarchitektur und -zusammensetzung, wodurch natürliche Gerüste entstehen, die mit Patientenzellen für Tissue-Engineering-Anwendungen repopuliert werden können.",
          nl: "Weefseldecellularisatie houdt het verwijderen van cellulaire componenten uit weefsels in terwijl de natuurlijke extracellulaire matrix architectuur en samenstelling behouden blijft, waardoor natuurlijke scaffolds ontstaan die kunnen worden herbevolkt met patiëntcellen voor weefselengineering toepassingen."
        }
      },
      {
        question: {
          en: "What is synthetic biology's BioBrick system?",
          es: "¿Qué es el sistema BioBrick de biología sintética?",
          de: "Was ist das BioBrick-System der synthetischen Biologie?",
          nl: "Wat is het BioBrick systeem van synthetische biologie?"
        },
        options: [
          { en: "Standardized biological parts for engineering organisms", es: "Partes biológicas estandarizadas para diseñar organismos", de: "Standardisierte biologische Teile für das Engineering von Organismen", nl: "Gestandaardiseerde biologische onderdelen voor het engineeren van organismen" },
          { en: "Building blocks for cell structures", es: "Bloques de construcción para estructuras celulares", de: "Bausteine für Zellstrukturen", nl: "Bouwstenen voor celstructuren" },
          { en: "Computer modeling software", es: "Software de modelado por computadora", de: "Computer-Modellierungssoftware", nl: "Computer modelleringssoftware" },
          { en: "Laboratory equipment set", es: "Conjunto de equipo de laboratorio", de: "Laborausrüstungsset", nl: "Laboratoriumapparatuur set" }
        ],
        correct: 0,
        explanation: {
          en: "BioBricks are standardized DNA sequences with defined functions that can be easily combined and assembled into larger biological systems. They follow standard assembly methods and include promoters, genes, and terminators, enabling modular biological engineering.",
          es: "Los BioBricks son secuencias de ADN estandarizadas con funciones definidas que pueden ser fácilmente combinadas y ensambladas en sistemas biológicos más grandes. Siguen métodos de ensamblaje estándar e incluyen promotores, genes y terminadores, habilitando ingeniería biológica modular.",
          de: "BioBricks sind standardisierte DNA-Sequenzen mit definierten Funktionen, die leicht kombiniert und zu größeren biologischen Systemen zusammengesetzt werden können. Sie folgen Standard-Assemblierungsmethoden und umfassen Promotoren, Gene und Terminatoren, wodurch modulares biologisches Engineering ermöglicht wird.",
          nl: "BioBricks zijn gestandaardiseerde DNA-sequenties met gedefinieerde functies die gemakkelijk kunnen worden gecombineerd en geassembleerd tot grotere biologische systemen. Ze volgen standaard assemblagemethoden en omvatten promotors, genen en terminators, waardoor modulair biologisch engineering mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is microfluidics in bioengineering?",
          es: "¿Qué es la microfluídica en bioingeniería?",
          de: "Was ist Mikrofluidik im Bioengineering?",
          nl: "Wat is microfluïdica in bio-engineering?"
        },
        options: [
          { en: "Manipulation of small fluid volumes in miniaturized devices", es: "Manipulación de pequeños volúmenes de fluidos en dispositivos miniaturizados", de: "Manipulation kleiner Flüssigkeitsvolumen in miniaturisierten Geräten", nl: "Manipulatie van kleine vloeistofvolumes in geminiaturiseerde apparaten" },
          { en: "Study of microscopic organisms in fluids", es: "Estudio de organismos microscópicos en fluidos", de: "Studium mikroskopischer Organismen in Flüssigkeiten", nl: "Studie van microscopische organismen in vloeistoffen" },
          { en: "Fluid mechanics in biological systems", es: "Mecánica de fluidos en sistemas biológicos", de: "Strömungsmechanik in biologischen Systemen", nl: "Vloeistofmechanica in biologische systemen" },
          { en: "Water treatment in biotechnology", es: "Tratamiento de agua en biotecnología", de: "Wasseraufbereitung in der Biotechnologie", nl: "Waterbehandeling in biotechnologie" }
        ],
        correct: 0,
        explanation: {
          en: "Microfluidics involves the precise control and manipulation of fluids at the microscale, typically in channels with dimensions of micrometers. It enables applications like lab-on-a-chip devices, cell sorting, drug screening, and point-of-care diagnostics.",
          es: "La microfluídica involucra el control y manipulación precisos de fluidos a microescala, típicamente en canales con dimensiones de micrómetros. Habilita aplicaciones como dispositivos de laboratorio-en-un-chip, clasificación celular, tamizaje de fármacos y diagnósticos en el punto de atención.",
          de: "Mikrofluidik beinhaltet die präzise Kontrolle und Manipulation von Flüssigkeiten im Mikrometerbereich, typischerweise in Kanälen mit Mikrometer-Dimensionen. Sie ermöglicht Anwendungen wie Lab-on-a-Chip-Geräte, Zellsortierung, Arzneimittelscreening und Point-of-Care-Diagnostik.",
          nl: "Microfluïdica houdt de precieze controle en manipulatie van vloeistoffen op microschaal in, typisch in kanalen met micrometer dimensies. Het maakt toepassingen mogelijk zoals lab-op-een-chip apparaten, celsortering, geneesmiddelscreening en point-of-care diagnostiek."
        }
      },
      {
        question: {
          en: "What is cellular reprogramming using iPSCs?",
          es: "¿Qué es la reprogramación celular usando iPSCs?",
          de: "Was ist Zellreprogrammierung mit iPSCs?",
          nl: "Wat is cellulaire herprogrammering met iPSCs?"
        },
        options: [
          { en: "Converting adult cells to induced pluripotent stem cells", es: "Convertir células adultas a células madre pluripotentes inducidas", de: "Adulte Zellen zu induzierten pluripotenten Stammzellen umwandeln", nl: "Volwassen cellen omzetten naar geïnduceerde pluripotente stamcellen" },
          { en: "Programming stem cells for specific functions", es: "Programar células madre para funciones específicas", de: "Stammzellen für spezifische Funktionen programmieren", nl: "Stamcellen programmeren voor specifieke functies" },
          { en: "Creating synthetic stem cells", es: "Crear células madre sintéticas", de: "Synthetische Stammzellen erstellen", nl: "Synthetische stamcellen creëren" },
          { en: "Modifying stem cell DNA", es: "Modificar ADN de células madre", de: "Stammzell-DNA modifizieren", nl: "Stamcel DNA modificeren" }
        ],
        correct: 0,
        explanation: {
          en: "Induced pluripotent stem cells (iPSCs) are created by reprogramming adult somatic cells back to an embryonic-like pluripotent state using specific transcription factors, offering potential for personalized regenerative medicine without ethical concerns of embryonic stem cells.",
          es: "Las células madre pluripotentes inducidas (iPSCs) se crean reprogramando células somáticas adultas de vuelta a un estado pluripotente similar al embrionario usando factores de transcripción específicos, ofreciendo potencial para medicina regenerativa personalizada sin preocupaciones éticas de células madre embrionarias.",
          de: "Induzierte pluripotente Stammzellen (iPSCs) werden durch Reprogrammierung adulter somatischer Zellen zurück in einen embryonalen-ähnlichen pluripotenten Zustand mit spezifischen Transkriptionsfaktoren erstellt, wodurch Potenzial für personalisierte regenerative Medizin ohne ethische Bedenken embryonaler Stammzellen geboten wird.",
          nl: "Geïnduceerde pluripotente stamcellen (iPSCs) worden gecreëerd door volwassen somatische cellen te herprogrammeren terug naar een embryonale-achtige pluripotente toestand met specifieke transcriptiefactoren, wat potentieel biedt voor gepersonaliseerde regeneratieve geneeskunde zonder ethische zorgen van embryonale stamcellen."
        }
      },
      {
        question: {
          en: "What is bioconjugation?",
          es: "¿Qué es la bioconjugación?",
          de: "Was ist Biokonjugation?",
          nl: "Wat is bioconjugatie?"
        },
        options: [
          { en: "Chemical linking of biomolecules to other substances", es: "Unión química de biomoléculas a otras sustancias", de: "Chemische Verknüpfung von Biomolekülen mit anderen Substanzen", nl: "Chemische koppeling van biomoleculen aan andere stoffen" },
          { en: "Combining biological organisms", es: "Combinar organismos biológicos", de: "Biologische Organismen kombinieren", nl: "Biologische organismen combineren" },
          { en: "Pairing complementary DNA strands", es: "Emparejar cadenas de ADN complementarias", de: "Komplementäre DNA-Stränge paaren", nl: "Complementaire DNA-strengen paren" },
          { en: "Joining cells together", es: "Unir células juntas", de: "Zellen zusammenfügen", nl: "Cellen samenvoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Bioconjugation is the chemical linking of biomolecules (proteins, nucleic acids, carbohydrates) to other molecules, often synthetic compounds, to create hybrid molecules with new properties for applications in diagnostics, therapeutics, and research.",
          es: "La bioconjugación es la unión química de biomoléculas (proteínas, ácidos nucleicos, carbohidratos) a otras moléculas, a menudo compuestos sintéticos, para crear moléculas híbridas con nuevas propiedades para aplicaciones en diagnósticos, terapéuticos e investigación.",
          de: "Biokonjugation ist die chemische Verknüpfung von Biomolekülen (Proteine, Nukleinsäuren, Kohlenhydrate) mit anderen Molekülen, oft synthetischen Verbindungen, um Hybridmoleküle mit neuen Eigenschaften für Anwendungen in Diagnostik, Therapeutika und Forschung zu schaffen.",
          nl: "Bioconjugatie is de chemische koppeling van biomoleculen (proteïnen, nucleïnezuren, koolhydraten) aan andere moleculen, vaak synthetische verbindingen, om hybride moleculen te creëren met nieuwe eigenschappen voor toepassingen in diagnostiek, therapeutica en onderzoek."
        }
      },
      {
        question: {
          en: "What is the role of scaffolds in bone tissue engineering?",
          es: "¿Cuál es el papel de los andamios en ingeniería de tejido óseo?",
          de: "Was ist die Rolle von Scaffolds im Knochengewebe-Engineering?",
          nl: "Wat is de rol van scaffolds in botweefselengineering?"
        },
        options: [
          { en: "Provide structural support and guide bone regeneration", es: "Proporcionar soporte estructural y guiar la regeneración ósea", de: "Strukturelle Unterstützung bieten und Knochenregeneration leiten", nl: "Structurele ondersteuning bieden en botregeneratie begeleiden" },
          { en: "Replace bone tissue permanently", es: "Reemplazar tejido óseo permanentemente", de: "Knochengewebe dauerhaft ersetzen", nl: "Botweefsel permanent vervangen" },
          { en: "Deliver drugs to bone cells", es: "Entregar fármacos a células óseas", de: "Medikamente an Knochenzellen abgeben", nl: "Geneesmiddelen leveren aan botcellen" },
          { en: "Measure bone density", es: "Medir densidad ósea", de: "Knochendichte messen", nl: "Botdichtheid meten" }
        ],
        correct: 0,
        explanation: {
          en: "In bone tissue engineering, scaffolds serve as temporary templates that provide mechanical support, guide cell attachment and proliferation, and gradually degrade as new bone tissue forms, ultimately being replaced by the patient's own regenerated bone.",
          es: "En ingeniería de tejido óseo, los andamios sirven como plantillas temporales que proporcionan soporte mecánico, guían la adhesión y proliferación celular, y se degradan gradualmente a medida que se forma nuevo tejido óseo, siendo finalmente reemplazados por el hueso regenerado del propio paciente.",
          de: "Im Knochengewebe-Engineering dienen Scaffolds als temporäre Vorlagen, die mechanische Unterstützung bieten, Zelladhäsion und -proliferation leiten und sich allmählich abbauen, während neues Knochengewebe entsteht, und schließlich durch den regenerierten Knochen des Patienten ersetzt werden.",
          nl: "In botweefselengineering dienen scaffolds als tijdelijke sjablonen die mechanische ondersteuning bieden, celhechting en proliferatie begeleiden, en geleidelijk afbreken naarmate nieuw botweefsel vormt, uiteindelijk vervangen door het geregenereerde bot van de patiënt zelf."
        }
      },
      {
        question: {
          en: "What is synthetic biology?",
          es: "¿Qué es la biología sintética?",
          de: "Was ist synthetische Biologie?",
          nl: "Wat is synthetische biologie?"
        },
        options: [
          { en: "Engineering biological systems by designing and constructing new biological parts and systems", es: "Ingeniería de sistemas biológicos diseñando y construyendo nuevas partes y sistemas biológicos", de: "Ingenieurwesen biologischer Systeme durch Entwurf und Konstruktion neuer biologischer Teile und Systeme", nl: "Enginering van biologische systemen door nieuwe biologische onderdelen en systemen te ontwerpen en construeren" },
          { en: "Study of naturally occurring biological processes", es: "Estudio de procesos biológicos que ocurren naturalmente", de: "Studium natürlich vorkommender biologischer Prozesse", nl: "Studie van natuurlijk voorkomende biologische processen" },
          { en: "Manufacturing synthetic pharmaceuticals only", es: "Fabricar solo productos farmacéuticos sintéticos", de: "Nur synthetische Pharmazeutika herstellen", nl: "Alleen synthetische farmaceutica vervaardigen" },
          { en: "Computer modeling of biological systems", es: "Modelado computacional de sistemas biológicos", de: "Computermodellierung biologischer Systeme", nl: "Computermodellering van biologische systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Synthetic biology is an interdisciplinary field that applies engineering principles to biology, designing and constructing new biological parts, devices, and systems, or redesigning existing natural systems for useful purposes, including biosensors, biofuels, and therapeutics.",
          es: "La biología sintética es un campo interdisciplinario que aplica principios de ingeniería a la biología, diseñando y construyendo nuevas partes, dispositivos y sistemas biológicos, o rediseñando sistemas naturales existentes para propósitos útiles, incluyendo biosensores, biocombustibles y terapéuticos.",
          de: "Synthetische Biologie ist ein interdisziplinäres Feld, das Ingenieursprinzipien auf die Biologie anwendet, neue biologische Teile, Geräte und Systeme entwirft und konstruiert oder bestehende natürliche Systeme für nützliche Zwecke umgestaltet, einschließlich Biosensoren, Biokraftstoffen und Therapeutika.",
          nl: "Synthetische biologie is een interdisciplinair veld dat engineering principes toepast op biologie, nieuwe biologische onderdelen, apparaten en systemen ontwerpt en construeert, of bestaande natuurlijke systemen herontwerpt voor nuttige doeleinden, inclusief biosensoren, biobrandstoffen en therapeutica."
        }
      },
      {
        question: {
          en: "What are induced pluripotent stem cells (iPSCs)?",
          es: "¿Qué son las células madre pluripotentes inducidas (iPSC)?",
          de: "Was sind induzierte pluripotente Stammzellen (iPSCs)?",
          nl: "Wat zijn geïnduceerde pluripotente stamcellen (iPSCs)?"
        },
        options: [
          { en: "Adult cells reprogrammed to embryonic-like stem cell state", es: "Células adultas reprogramadas al estado de células madre similar a embrionarias", de: "Erwachsene Zellen, die zu embryonenähnlichem Stammzellzustand umprogrammiert wurden", nl: "Volwassen cellen geherprogrammeerd naar embryonale-achtige stamcel toestand" },
          { en: "Stem cells extracted directly from embryos", es: "Células madre extraídas directamente de embriones", de: "Stammzellen, die direkt aus Embryonen extrahiert wurden", nl: "Stamcellen direct uit embryo's geëxtraheerd" },
          { en: "Genetically modified cancer cells", es: "Células cancerosas genéticamente modificadas", de: "Genetisch veränderte Krebszellen", nl: "Genetisch gemodificeerde kankercellen" },
          { en: "Artificially synthesized stem cells", es: "Células madre artificialmente sintetizadas", de: "Künstlich synthetisierte Stammzellen", nl: "Kunstmatig gesynthetiseerde stamcellen" }
        ],
        correct: 0,
        explanation: {
          en: "iPSCs are adult cells that have been genetically reprogrammed to an embryonic stem cell-like state using transcription factors (Yamanaka factors). This breakthrough technology allows patient-specific stem cells for personalized medicine without ethical concerns of embryonic stem cells.",
          es: "Las iPSC son células adultas que han sido genéticamente reprogramadas a un estado similar a células madre embrionarias usando factores de transcripción (factores Yamanaka). Esta tecnología revolucionaria permite células madre específicas del paciente para medicina personalizada sin preocupaciones éticas de células madre embrionarias.",
          de: "iPSCs sind erwachsene Zellen, die genetisch zu einem embryonalen stammzellenähnlichen Zustand umprogrammiert wurden, unter Verwendung von Transkriptionsfaktoren (Yamanaka-Faktoren). Diese bahnbrechende Technologie ermöglicht patientenspezifische Stammzellen für personalisierte Medizin ohne ethische Bedenken embryonaler Stammzellen.",
          nl: "iPSCs zijn volwassen cellen die genetisch geherprogrammeerd zijn naar een embryonale stamcel-achtige toestand met transcriptiefactoren (Yamanaka factoren). Deze baanbrekende technologie maakt patiënt-specifieke stamcellen mogelijk voor gepersonaliseerde geneeskunde zonder ethische bezwaren van embryonale stamcellen."
        }
      },
      {
        question: {
          en: "What is optogenetics?",
          es: "¿Qué es la optogenética?",
          de: "Was ist Optogenetik?",
          nl: "Wat is optogenetica?"
        },
        options: [
          { en: "Using light to control genetically modified cells expressing light-sensitive proteins", es: "Usar luz para controlar células genéticamente modificadas que expresan proteínas sensibles a la luz", de: "Verwendung von Licht zur Kontrolle genetisch modifizierter Zellen, die lichtempfindliche Proteine exprimieren", nl: "Licht gebruiken om genetisch gemodificeerde cellen te controleren die lichtgevoelige eiwitten tot expressie brengen" },
          { en: "Genetic sequencing using optical methods", es: "Secuenciación genética usando métodos ópticos", de: "Genetische Sequenzierung mit optischen Methoden", nl: "Genetische sequentiëring met optische methoden" },
          { en: "Creating bioluminescent organisms", es: "Crear organismos bioluminiscentes", de: "Biolumineszierende Organismen schaffen", nl: "Bioluminescente organismen creëren" },
          { en: "Optical microscopy of genetic material", es: "Microscopía óptica de material genético", de: "Optische Mikroskopie genetischen Materials", nl: "Optische microscopie van genetisch materiaal" }
        ],
        correct: 0,
        explanation: {
          en: "Optogenetics combines genetics and optics to control cellular activity with light. Cells are genetically modified to express light-sensitive ion channels (like channelrhodopsin), allowing researchers to precisely control neural activity and study brain function in real-time.",
          es: "La optogenética combina genética y óptica para controlar actividad celular con luz. Las células son genéticamente modificadas para expresar canales iónicos sensibles a la luz (como canalrodopsina), permitiendo a investigadores controlar precisamente actividad neural y estudiar función cerebral en tiempo real.",
          de: "Optogenetik kombiniert Genetik und Optik, um zelluläre Aktivität mit Licht zu kontrollieren. Zellen werden genetisch modifiziert, um lichtempfindliche Ionenkanäle (wie Channelrhodopsin) zu exprimieren, wodurch Forscher neuronale Aktivität präzise kontrollieren und Gehirnfunktion in Echtzeit studieren können.",
          nl: "Optogenetica combineert genetica en optica om cellulaire activiteit met licht te controleren. Cellen worden genetisch gemodificeerd om lichtgevoelige ionenkanalen (zoals channelrhodopsine) tot expressie te brengen, waardoor onderzoekers neurale activiteit nauwkeurig kunnen controleren en hersenfunctie in real-time kunnen bestuderen."
        }
      },
      {
        question: {
          en: "What are biomimetic materials?",
          es: "¿Qué son los materiales biomiméticos?",
          de: "Was sind biomimetische Materialien?",
          nl: "Wat zijn biomimetische materialen?"
        },
        options: [
          { en: "Synthetic materials that mimic properties and functions of natural biological systems", es: "Materiales sintéticos que imitan propiedades y funciones de sistemas biológicos naturales", de: "Synthetische Materialien, die Eigenschaften und Funktionen natürlicher biologischer Systeme nachahmen", nl: "Synthetische materialen die eigenschappen en functies van natuurlijke biologische systemen nabootsen" },
          { en: "Materials extracted directly from living organisms", es: "Materiales extraídos directamente de organismos vivos", de: "Materialien, die direkt aus lebenden Organismen extrahiert werden", nl: "Materialen direct uit levende organismen geëxtraheerd" },
          { en: "Only biodegradable polymers", es: "Solo polímeros biodegradables", de: "Nur biologisch abbaubare Polymere", nl: "Alleen biologisch afbreekbare polymeren" },
          { en: "Materials used exclusively in medical implants", es: "Materiales usados exclusivamente en implantes médicos", de: "Materialien, die ausschließlich in medizinischen Implantaten verwendet werden", nl: "Materialen exclusief gebruikt in medische implantaten" }
        ],
        correct: 0,
        explanation: {
          en: "Biomimetic materials are engineered to replicate the structure, properties, or functions found in nature. Examples include gecko-inspired adhesives, shark skin-inspired surfaces for drag reduction, and spider silk-inspired fibers with exceptional strength-to-weight ratios.",
          es: "Los materiales biomiméticos son diseñados para replicar estructura, propiedades o funciones encontradas en la naturaleza. Ejemplos incluyen adhesivos inspirados en gecko, superficies inspiradas en piel de tiburón para reducción de arrastre, y fibras inspiradas en seda de araña con ratios excepcionales de resistencia-peso.",
          de: "Biomimetische Materialien sind so konstruiert, dass sie Struktur, Eigenschaften oder Funktionen aus der Natur nachahmen. Beispiele sind gecko-inspirierte Klebstoffe, haihaut-inspirierte Oberflächen zur Widerstandsreduzierung und spinnenseiden-inspirierte Fasern mit außergewöhnlichen Festigkeit-Gewicht-Verhältnissen.",
          nl: "Biomimetische materialen zijn ontworpen om structuur, eigenschappen of functies uit de natuur na te bootsen. Voorbeelden zijn gecko-geïnspireerde kleefmiddelen, haaienvel-geïnspireerde oppervlakken voor weerstandsvermindering, en spinnenzijde-geïnspireerde vezels met uitzonderlijke sterkte-gewicht verhoudingen."
        }
      },
      {
        question: {
          en: "What is bioprinting?",
          es: "¿Qué es la bioimpresión?",
          de: "Was ist Bioprinting?",
          nl: "Wat is bioprinting?"
        },
        options: [
          { en: "3D printing technology using living cells and biomaterials to create tissue-like structures", es: "Tecnología de impresión 3D usando células vivas y biomateriales para crear estructuras similares a tejidos", de: "3D-Drucktechnologie mit lebenden Zellen und Biomaterialien zur Schaffung gewebeähnlicher Strukturen", nl: "3D printtechnologie met levende cellen en biomaterialen om weefsel-achtige structuren te creëren" },
          { en: "Printing biological research papers", es: "Imprimir artículos de investigación biológica", de: "Biologische Forschungsarbeiten drucken", nl: "Biologische onderzoekspapers printen" },
          { en: "Creating blueprints for biological experiments", es: "Crear planos para experimentos biológicos", de: "Blaupausen für biologische Experimente erstellen", nl: "Blauwdrukken maken voor biologische experimenten" },
          { en: "Digital modeling of biological processes", es: "Modelado digital de procesos biológicos", de: "Digitale Modellierung biologischer Prozesse", nl: "Digitale modellering van biologische processen" }
        ],
        correct: 0,
        explanation: {
          en: "Bioprinting uses 3D printing technology to precisely deposit living cells, growth factors, and biomaterial scaffolds layer by layer to fabricate tissue-like constructs. This technology holds promise for creating transplantable organs, drug testing platforms, and disease models.",
          es: "La bioimpresión usa tecnología de impresión 3D para depositar precisamente células vivas, factores de crecimiento y andamios de biomateriales capa por capa para fabricar construcciones similares a tejidos. Esta tecnología promete crear órganos trasplantables, plataformas de prueba de fármacos y modelos de enfermedad.",
          de: "Bioprinting verwendet 3D-Drucktechnologie, um lebende Zellen, Wachstumsfaktoren und Biomaterial-Gerüste schichtweise präzise abzulagern, um gewebeähnliche Konstrukte zu fabrizieren. Diese Technologie verspricht, transplantierbare Organe, Arzneimitteltestplattformen und Krankheitsmodelle zu schaffen.",
          nl: "Bioprinting gebruikt 3D printtechnologie om levende cellen, groeifactoren en biomaterialen scaffolds laag voor laag nauwkeurig te deponeren om weefsel-achtige constructen te fabriceren. Deze technologie belooft transplanteerbare organen, medicijn testplatforms en ziektemodellen te creëren."
        }
      },
      {
        question: {
          en: "What is gene therapy?",
          es: "¿Qué es la terapia génica?",
          de: "Was ist Gentherapie?",
          nl: "Wat is gentherapie?"
        },
        options: [
          { en: "Introducing genetic material into patient's cells to treat disease", es: "Introducir material genético en células del paciente para tratar enfermedad", de: "Genetisches Material in Patientenzellen einführen zur Krankheitsbehandlung", nl: "Genetisch materiaal introduceren in patiënt cellen om ziekte te behandelen" },
          { en: "Physical therapy for genetic disorders", es: "Terapia física para trastornos genéticos", de: "Physiotherapie für genetische Störungen", nl: "Fysieke therapie voor genetische aandoeningen" },
          { en: "Genetic counseling sessions", es: "Sesiones de consejería genética", de: "Genetische Beratungssitzungen", nl: "Genetische counseling sessies" },
          { en: "Dietary modifications based on genetics", es: "Modificaciones dietéticas basadas en genética", de: "Ernährungsmodifikationen basierend auf Genetik", nl: "Dieetaanpassingen gebaseerd op genetica" }
        ],
        correct: 0,
        explanation: {
          en: "Gene therapy involves delivering therapeutic genes into patient cells to correct defective genes or provide new cellular functions. Methods include viral vectors, liposomes, and direct injection. It's used to treat inherited disorders, cancers, and viral infections.",
          es: "La terapia génica involucra entregar genes terapéuticos a células de pacientes para corregir genes defectuosos o proporcionar nuevas funciones celulares. Los métodos incluyen vectores virales, liposomas e inyección directa. Se usa para tratar trastornos hereditarios, cánceres e infecciones virales.",
          de: "Gentherapie beinhaltet die Übertragung therapeutischer Gene in Patientenzellen, um defekte Gene zu korrigieren oder neue zelluläre Funktionen bereitzustellen. Methoden umfassen virale Vektoren, Liposomen und direkte Injektion. Sie wird zur Behandlung erblicher Störungen, Krebs und Virusinfektionen eingesetzt.",
          nl: "Gentherapie houdt in dat therapeutische genen geleverd worden aan patiënt cellen om defecte genen te corrigeren of nieuwe cellulaire functies te bieden. Methoden omvatten virale vectoren, liposomen en directe injectie. Het wordt gebruikt om erfelijke aandoeningen, kankers en virale infecties te behandelen."
        }
      },
      {
        question: {
          en: "What are hydrogels in bioengineering?",
          es: "¿Qué son los hidrogeles en bioingeniería?",
          de: "Was sind Hydrogele in der Bioingenieurwissenschaft?",
          nl: "Wat zijn hydrogels in bioengineering?"
        },
        options: [
          { en: "Water-swollen polymer networks that mimic natural tissue properties", es: "Redes poliméricas hinchadas con agua que imitan propiedades de tejidos naturales", de: "Wasserquellende Polymernetzwerke, die natürliche Gewebeeigenschaften nachahmen", nl: "Water-gezwollen polymeer netwerken die natuurlijke weefseleigenschappen nabootsen" },
          { en: "Dehydrated protein powders", es: "Polvos de proteína deshidratados", de: "Dehydrierte Proteinpulver", nl: "Gedehydrateerde eiwit poeders" },
          { en: "Crystalline drug delivery systems", es: "Sistemas de entrega de fármacos cristalinos", de: "Kristalline Arzneimittelabgabesysteme", nl: "Kristallijne medicijn afgifte systemen" },
          { en: "Metallic implant coatings", es: "Recubrimientos de implantes metálicos", de: "Metallische Implantatbeschichtungen", nl: "Metalen implantaat coatings" }
        ],
        correct: 0,
        explanation: {
          en: "Hydrogels are three-dimensional polymer networks that can absorb large amounts of water while maintaining structural integrity. They're biocompatible, resemble natural extracellular matrix, and are used in drug delivery, tissue engineering, and wound healing applications.",
          es: "Los hidrogeles son redes poliméricas tridimensionales que pueden absorber grandes cantidades de agua mientras mantienen integridad estructural. Son biocompatibles, se asemejan a la matriz extracelular natural y se usan en entrega de fármacos, ingeniería de tejidos y aplicaciones de curación de heridas.",
          de: "Hydrogele sind dreidimensionale Polymernetzwerke, die große Wassermengen absorbieren können, während sie strukturelle Integrität bewahren. Sie sind biokompatibel, ähneln natürlicher extrazellulärer Matrix und werden in Arzneimittelabgabe, Tissue Engineering und Wundheilungsanwendungen verwendet.",
          nl: "Hydrogels zijn driedimensionale polymeer netwerken die grote hoeveelheden water kunnen absorberen terwijl ze structurele integriteit behouden. Ze zijn biocompatibel, lijken op natuurlijke extracellulaire matrix, en worden gebruikt in medicijn afgifte, weefselengineering en wondgenezing toepassingen."
        }
      },
      {
        question: {
          en: "What is metabolic engineering?",
          es: "¿Qué es la ingeniería metabólica?",
          de: "Was ist metabolische Ingenieurwissenschaft?",
          nl: "Wat is metabole engineering?"
        },
        options: [
          { en: "Modifying cellular metabolism to optimize production of desired compounds", es: "Modificar metabolismo celular para optimizar producción de compuestos deseados", de: "Zellulärer Metabolismus modifizieren zur Optimierung der Produktion gewünschter Verbindungen", nl: "Cellulaire metabolisme modificeren om productie van gewenste verbindingen te optimaliseren" },
          { en: "Designing exercise programs for metabolic disorders", es: "Diseñar programas de ejercicio para trastornos metabólicos", de: "Trainingsprogramme für Stoffwechselstörungen entwerfen", nl: "Oefenprogramma's ontwerpen voor metabole aandoeningen" },
          { en: "Studying natural metabolic pathways only", es: "Estudiar solo vías metabólicas naturales", de: "Nur natürliche Stoffwechselwege studieren", nl: "Alleen natuurlijke metabole paden bestuderen" },
          { en: "Manufacturing metabolic monitoring devices", es: "Fabricar dispositivos de monitoreo metabólico", de: "Stoffwechsel-Überwachungsgeräte herstellen", nl: "Metabole monitoring apparaten vervaardigen" }
        ],
        correct: 0,
        explanation: {
          en: "Metabolic engineering involves redirecting cellular metabolism through genetic modifications to enhance production of valuable compounds like biofuels, pharmaceuticals, or food additives. It combines systems biology, genetic engineering, and bioprocess optimization.",
          es: "La ingeniería metabólica involucra redirigir metabolismo celular a través de modificaciones genéticas para mejorar producción de compuestos valiosos como biocombustibles, farmacéuticos o aditivos alimentarios. Combina biología de sistemas, ingeniería genética y optimización de bioprocesos.",
          de: "Metabolische Ingenieurwissenschaft beinhaltet die Umleitung des zellulären Metabolismus durch genetische Modifikationen, um die Produktion wertvoller Verbindungen wie Biokraftstoffe, Pharmazeutika oder Lebensmittelzusatzstoffe zu verbessern. Sie kombiniert Systembiologie, Gentechnik und Bioprozessoptimierung.",
          nl: "Metabole engineering behelst het omleiden van cellulaire metabolisme door genetische modificaties om productie van waardevolle verbindingen zoals biobrandstoffen, farmaceutica of voedsel additieven te verbeteren. Het combineert systeembiologie, genetische manipulatie en bioprocesoptimalisatie."
        }
      },
      {
        question: {
          en: "What is biocompatibility?",
          es: "¿Qué es la biocompatibilidad?",
          de: "Was ist Biokompatibilität?",
          nl: "Wat is biocompatibiliteit?"
        },
        options: [
          { en: "Ability of material to perform with appropriate host response in specific application", es: "Capacidad del material de funcionar con respuesta apropiada del huésped en aplicación específica", de: "Fähigkeit eines Materials, mit angemessener Wirtsreaktion in spezifischer Anwendung zu funktionieren", nl: "Vermogen van materiaal om te functioneren met juiste gastheer respons in specifieke toepassing" },
          { en: "Complete absence of any biological reaction", es: "Ausencia completa de cualquier reacción biológica", de: "Vollständige Abwesenheit jeder biologischen Reaktion", nl: "Volledige afwezigheid van elke biologische reactie" },
          { en: "Only biodegradable materials", es: "Solo materiales biodegradables", de: "Nur biologisch abbaubare Materialien", nl: "Alleen biologisch afbreekbare materialen" },
          { en: "Materials that enhance immune response", es: "Materiales que mejoran respuesta inmune", de: "Materialien, die die Immunantwort verstärken", nl: "Materialen die immuun respons verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Biocompatibility means a biomaterial performs its intended function without causing adverse local or systemic effects, but eliciting appropriate beneficial cellular/tissue response. It's context-dependent - a material biocompatible for one application may not be for another.",
          es: "Biocompatibilidad significa que un biomaterial realiza su función prevista sin causar efectos adversos locales o sistémicos, pero provocando respuesta celular/tisular beneficiosa apropiada. Depende del contexto - un material biocompatible para una aplicación puede no serlo para otra.",
          de: "Biokompatibilität bedeutet, dass ein Biomaterial seine beabsichtigte Funktion erfüllt, ohne nachteilige lokale oder systemische Effekte zu verursachen, aber angemessene vorteilhafte zelluläre/Gewebe-Reaktion hervorzurufen. Sie ist kontextabhängig - ein Material, das für eine Anwendung biokompatibel ist, ist es möglicherweise nicht für eine andere.",
          nl: "Biocompatibiliteit betekent dat een biomateriaal zijn beoogde functie vervult zonder nadelige lokale of systemische effecten te veroorzaken, maar wel juiste gunstige cellulaire/weefsel respons uitlokt. Het is context-afhankelijk - een materiaal biocompatibel voor één toepassing is dat mogelijk niet voor een andere."
        }
      },
      {
        question: {
          en: "What is cell encapsulation?",
          es: "¿Qué es la encapsulación celular?",
          de: "Was ist Zellverkapselung?",
          nl: "Wat is celinkapseling?"
        },
        options: [
          { en: "Encasing cells within protective semi-permeable barriers while maintaining viability", es: "Encerrar células dentro de barreras semipermeables protectoras mientras se mantiene viabilidad", de: "Zellen in schützende semipermeable Barrieren einhüllen unter Beibehaltung der Lebensfähigkeit", nl: "Cellen omhullen met beschermende semi-permeabele barrières terwijl levensvatbaarheid behouden blijft" },
          { en: "Freezing cells for long-term storage", es: "Congelar células para almacenamiento a largo plazo", de: "Zellen für langfristige Lagerung einfrieren", nl: "Cellen bevriezen voor langdurige opslag" },
          { en: "Growing cells in culture dishes", es: "Cultivar células en placas de cultivo", de: "Zellen in Kulturschalen züchten", nl: "Cellen kweken in kweekschalen" },
          { en: "Extracting cellular components", es: "Extraer componentes celulares", de: "Zelluläre Komponenten extrahieren", nl: "Cellulaire componenten extraheren" }
        ],
        correct: 0,
        explanation: {
          en: "Cell encapsulation involves surrounding living cells with semi-permeable membranes that protect cells from immune rejection while allowing nutrient and waste exchange. It's used in diabetes treatment (pancreatic islets), drug delivery, and tissue engineering.",
          es: "La encapsulación celular involucra rodear células vivas con membranas semipermeables que protegen células de rechazo inmune mientras permiten intercambio de nutrientes y desechos. Se usa en tratamiento de diabetes (islotes pancreáticos), entrega de fármacos e ingeniería de tejidos.",
          de: "Zellverkapselung beinhaltet das Umgeben lebender Zellen mit semipermeablen Membranen, die Zellen vor Immunabstoßung schützen, während sie Nährstoff- und Abfallaustausch ermöglichen. Sie wird bei Diabetesbehandlung (Pankreasinseln), Arzneimittelabgabe und Tissue Engineering verwendet.",
          nl: "Celinkapseling behelst het omringen van levende cellen met semi-permeabele membranen die cellen beschermen tegen immuun afwijzing terwijl ze nutriënt en afval uitwisseling toestaan. Het wordt gebruikt in diabetes behandeling (pancreaseilanden), medicijn afgifte en weefselengineering."
        }
      },
      {
        question: {
          en: "What is bioprocessing?",
          es: "¿Qué es el bioprocesamiento?",
          de: "Was ist Bioprozessierung?",
          nl: "Wat is bioverwerking?"
        },
        options: [
          { en: "Using biological systems to manufacture products on industrial scale", es: "Usar sistemas biológicos para fabricar productos a escala industrial", de: "Biologische Systeme zur Herstellung von Produkten im industriellen Maßstab verwenden", nl: "Biologische systemen gebruiken om producten op industriële schaal te vervaardigen" },
          { en: "Processing biological waste only", es: "Procesar solo residuos biológicos", de: "Nur biologische Abfälle verarbeiten", nl: "Alleen biologisch afval verwerken" },
          { en: "Computer analysis of biological data", es: "Análisis computacional de datos biológicos", de: "Computeranalyse biologischer Daten", nl: "Computer analyse van biologische data" },
          { en: "Preserving biological specimens", es: "Preservar especímenes biológicos", de: "Biologische Exemplare konservieren", nl: "Biologische specimens bewaren" }
        ],
        correct: 0,
        explanation: {
          en: "Bioprocessing involves using living cells or their components (enzymes, organelles) to produce desired products like pharmaceuticals, biofuels, food ingredients, or industrial chemicals. It includes upstream processing (cell cultivation), downstream processing (product recovery), and quality control.",
          es: "El bioprocesamiento involucra usar células vivas o sus componentes (enzimas, orgánulos) para producir productos deseados como farmacéuticos, biocombustibles, ingredientes alimentarios o químicos industriales. Incluye procesamiento upstream (cultivo celular), procesamiento downstream (recuperación de producto) y control de calidad.",
          de: "Bioprozessierung beinhaltet die Verwendung lebender Zellen oder ihrer Komponenten (Enzyme, Organellen) zur Produktion gewünschter Produkte wie Pharmazeutika, Biokraftstoffe, Lebensmittelzutaten oder Industriechemikalien. Sie umfasst Upstream-Prozessierung (Zellkultivierung), Downstream-Prozessierung (Produktgewinnung) und Qualitätskontrolle.",
          nl: "Bioverwerking behelst het gebruiken van levende cellen of hun componenten (enzymen, organellen) om gewenste producten zoals farmaceutica, biobrandstoffen, voedsel ingrediënten of industriële chemicaliën te produceren. Het omvat upstream verwerking (celcultivatie), downstream verwerking (product recovery) en kwaliteitscontrole."
        }
      },
      {
        question: {
          en: "What are biomolecular motors?",
          es: "¿Qué son los motores biomoleculares?",
          de: "Was sind biomolekulare Motoren?",
          nl: "Wat zijn biomoleculaire motoren?"
        },
        options: [
          { en: "Proteins that convert chemical energy into mechanical work at molecular level", es: "Proteínas que convierten energía química en trabajo mecánico a nivel molecular", de: "Proteine, die chemische Energie in mechanische Arbeit auf molekularer Ebene umwandeln", nl: "Eiwitten die chemische energie omzetten in mechanisch werk op moleculair niveau" },
          { en: "Mechanical devices powered by biological fuels", es: "Dispositivos mecánicos alimentados por combustibles biológicos", de: "Mechanische Geräte, die von biologischen Brennstoffen angetrieben werden", nl: "Mechanische apparaten aangedreven door biologische brandstoffen" },
          { en: "Electric motors in biological instruments", es: "Motores eléctricos en instrumentos biológicos", de: "Elektromotoren in biologischen Instrumenten", nl: "Elektrische motoren in biologische instrumenten" },
          { en: "Synthetic engines for drug delivery", es: "Motores sintéticos para entrega de fármacos", de: "Synthetische Motoren für Arzneimittelabgabe", nl: "Synthetische motoren voor medicijn afgifte" }
        ],
        correct: 0,
        explanation: {
          en: "Biomolecular motors are proteins that use ATP or other energy sources to generate force and movement. Examples include kinesin and dynein (intracellular transport), myosin (muscle contraction), and ATP synthase (energy production). They inspire development of artificial molecular machines.",
          es: "Los motores biomoleculares son proteínas que usan ATP u otras fuentes de energía para generar fuerza y movimiento. Ejemplos incluyen kinesina y dineína (transporte intracelular), miosina (contracción muscular) y ATP sintasa (producción de energía). Inspiran desarrollo de máquinas moleculares artificiales.",
          de: "Biomolekulare Motoren sind Proteine, die ATP oder andere Energiequellen verwenden, um Kraft und Bewegung zu erzeugen. Beispiele sind Kinesin und Dynein (intrazellulärer Transport), Myosin (Muskelkontraktion) und ATP-Synthase (Energieproduktion). Sie inspirieren die Entwicklung künstlicher molekularer Maschinen.",
          nl: "Biomoleculaire motoren zijn eiwitten die ATP of andere energiebronnen gebruiken om kracht en beweging te genereren. Voorbeelden zijn kinesine en dyneïne (intracellulaire transport), myosine (spiercontractie) en ATP synthase (energie productie). Ze inspireren ontwikkeling van kunstmatige moleculaire machines."
        }
      },
      {
        question: {
          en: "What is protein engineering?",
          es: "¿Qué es la ingeniería de proteínas?",
          de: "Was ist Protein-Engineering?",
          nl: "Wat is eiwit engineering?"
        },
        options: [
          { en: "Modifying protein structure to alter or improve function through rational design or directed evolution", es: "Modificar estructura proteica para alterar o mejorar función a través de diseño racional o evolución dirigida", de: "Proteinstruktur modifizieren, um Funktion durch rationales Design oder gerichtete Evolution zu verändern oder zu verbessern", nl: "Eiwit structuur modificeren om functie te veranderen of verbeteren door rationeel ontwerp of gerichte evolutie" },
          { en: "Manufacturing protein supplements for athletes", es: "Fabricar suplementos proteicos para atletas", de: "Proteinsupplemente für Athleten herstellen", nl: "Eiwit supplementen vervaardigen voor atleten" },
          { en: "Structural analysis of natural proteins only", es: "Análisis estructural solo de proteínas naturales", de: "Strukturanalyse nur natürlicher Proteine", nl: "Structurele analyse van alleen natuurlijke eiwitten" },
          { en: "Protein purification techniques", es: "Técnicas de purificación de proteínas", de: "Proteinreinigungstechniken", nl: "Eiwit zuiverings technieken" }
        ],
        correct: 0,
        explanation: {
          en: "Protein engineering involves modifying amino acid sequences to create proteins with enhanced stability, activity, specificity, or novel functions. Approaches include rational design (structure-based modifications) and directed evolution (random mutagenesis with selection), leading to improved enzymes, therapeutics, and biosensors.",
          es: "La ingeniería de proteínas involucra modificar secuencias de aminoácidos para crear proteínas con estabilidad, actividad, especificidad mejoradas o funciones novedosas. Los enfoques incluyen diseño racional (modificaciones basadas en estructura) y evolución dirigida (mutagénesis aleatoria con selección), llevando a enzimas mejoradas, terapéuticos y biosensores.",
          de: "Protein-Engineering beinhaltet die Modifikation von Aminosäuresequenzen, um Proteine mit verbesserter Stabilität, Aktivität, Spezifität oder neuartigen Funktionen zu schaffen. Ansätze umfassen rationales Design (strukturbasierte Modifikationen) und gerichtete Evolution (zufällige Mutagenese mit Selektion), was zu verbesserten Enzymen, Therapeutika und Biosensoren führt.",
          nl: "Eiwit engineering behelst het modificeren van aminozuur sequenties om eiwitten te creëren met verbeterde stabiliteit, activiteit, specificiteit of nieuwe functies. Benaderingen omvatten rationeel ontwerp (structuur-gebaseerde modificaties) en gerichte evolutie (willekeurige mutagenese met selectie), leidend tot verbeterde enzymen, therapeutica en biosensoren."
        }
      },
      {
        question: {
          en: "What is biofabrication?",
          es: "¿Qué es la biofabricación?",
          de: "Was ist Biofabrikation?",
          nl: "Wat is biofabricatie?"
        },
        options: [
          { en: "Manufacturing products using biological production systems or containing biological materials", es: "Fabricar productos usando sistemas de producción biológicos o conteniendo materiales biológicos", de: "Herstellung von Produkten unter Verwendung biologischer Produktionssysteme oder mit biologischen Materialien", nl: "Producten vervaardigen met biologische productiesystemen of biologische materialen bevattend" },
          { en: "Creating artificial biological organisms", es: "Crear organismos biológicos artificiales", de: "Künstliche biologische Organismen schaffen", nl: "Kunstmatige biologische organismen creëren" },
          { en: "Studying biological manufacturing processes in nature", es: "Estudiar procesos de fabricación biológica en la naturaleza", de: "Biologische Herstellungsprozesse in der Natur studieren", nl: "Biologische fabricage processen in de natuur bestuderen" },
          { en: "Quality control in biological laboratories", es: "Control de calidad en laboratorios biológicos", de: "Qualitätskontrolle in biologischen Laboren", nl: "Kwaliteitscontrole in biologische laboratoria" }
        ],
        correct: 0,
        explanation: {
          en: "Biofabrication encompasses manufacturing approaches that use biological systems (cells, enzymes, organisms) as factories or incorporate biological materials into products. This includes bioprinting tissues, growing materials with microorganisms, and producing pharmaceuticals in genetically modified cells or organisms.",
          es: "La biofabricación abarca enfoques de fabricación que usan sistemas biológicos (células, enzimas, organismos) como fábricas o incorporan materiales biológicos en productos. Esto incluye bioimpresión de tejidos, cultivar materiales con microorganismos y producir farmacéuticos en células u organismos genéticamente modificados.",
          de: "Biofabrikation umfasst Herstellungsansätze, die biologische Systeme (Zellen, Enzyme, Organismen) als Fabriken verwenden oder biologische Materialien in Produkte integrieren. Dies umfasst Bioprinting von Geweben, Materialzucht mit Mikroorganismen und Pharmazeutika-Produktion in genetisch modifizierten Zellen oder Organismen.",
          nl: "Biofabricatie omvat fabricage benaderingen die biologische systemen (cellen, enzymen, organismen) als fabrieken gebruiken of biologische materialen in producten integreren. Dit omvat bioprinting van weefsels, materialen kweken met micro-organismen, en farmaceutica produceren in genetisch gemodificeerde cellen of organismen."
        }
      },
      {
        question: {
          en: "What is regenerative medicine?",
          es: "¿Qué es la medicina regenerativa?",
          de: "Was ist regenerative Medizin?",
          nl: "Wat is regeneratieve geneeskunde?"
        },
        options: [
          { en: "Medical approach to repair, replace, or regenerate damaged tissues and organs", es: "Enfoque médico para reparar, reemplazar o regenerar tejidos y órganos dañados", de: "Medizinischer Ansatz zur Reparatur, zum Ersatz oder zur Regeneration beschädigter Gewebe und Organe", nl: "Medische benadering om beschadigde weefsels en organen te repareren, vervangen of regenereren" },
          { en: "Using only natural healing processes", es: "Usar solo procesos de curación naturales", de: "Nur natürliche Heilungsprozesse verwenden", nl: "Alleen natuurlijke genezingsprocessen gebruiken" },
          { en: "Traditional pharmaceutical treatments", es: "Tratamientos farmacéuticos tradicionales", de: "Traditionelle pharmazeutische Behandlungen", nl: "Traditionele farmaceutische behandelingen" },
          { en: "Surgical reconstruction techniques only", es: "Solo técnicas de reconstrucción quirúrgica", de: "Nur chirurgische Rekonstruktionstechniken", nl: "Alleen chirurgische reconstructie technieken" }
        ],
        correct: 0,
        explanation: {
          en: "Regenerative medicine combines stem cell therapy, tissue engineering, and gene therapy to restore function of damaged tissues and organs. It includes approaches like stem cell transplantation, growth factor delivery, and bioengineered organ development to treat conditions from heart disease to spinal cord injuries.",
          es: "La medicina regenerativa combina terapia con células madre, ingeniería de tejidos y terapia génica para restaurar función de tejidos y órganos dañados. Incluye enfoques como trasplante de células madre, entrega de factores de crecimiento y desarrollo de órganos bioingeniería para tratar condiciones desde enfermedad cardíaca hasta lesiones de médula espinal.",
          de: "Regenerative Medizin kombiniert Stammzelltherapie, Tissue Engineering und Gentherapie, um die Funktion beschädigter Gewebe und Organe wiederherzustellen. Sie umfasst Ansätze wie Stammzelltransplantation, Wachstumsfaktor-Abgabe und bioengineered Organentwicklung zur Behandlung von Zuständen von Herzerkrankungen bis zu Rückenmarksverletzungen.",
          nl: "Regeneratieve geneeskunde combineert stamceltherapie, weefselengineering en gentherapie om functie van beschadigde weefsels en organen te herstellen. Het omvat benaderingen zoals stamcel transplantatie, groeifactor afgifte en bio-engineered orgaan ontwikkeling om aandoeningen te behandelen van hartziekte tot ruggenmerg verwondingen."
        }
      },
      {
        question: {
          en: "What is nanotechnology in bioengineering?",
          es: "¿Qué es la nanotecnología en bioingeniería?",
          de: "Was ist Nanotechnologie in der Bioingenieurwissenschaft?",
          nl: "Wat is nanotechnologie in bioengineering?"
        },
        options: [
          { en: "Engineering materials and devices at nanoscale (1-100 nm) for biological applications", es: "Ingeniería de materiales y dispositivos a nanoescala (1-100 nm) para aplicaciones biológicas", de: "Materialien und Geräte im Nanomaßstab (1-100 nm) für biologische Anwendungen konstruieren", nl: "Materialen en apparaten op nanoschaal (1-100 nm) engineeren voor biologische toepassingen" },
          { en: "Only studying naturally occurring nanostructures", es: "Solo estudiar nanoestructuras que ocurren naturalmente", de: "Nur natürlich vorkommende Nanostrukturen studieren", nl: "Alleen natuurlijk voorkomende nanostructuren bestuderen" },
          { en: "Large-scale manufacturing of biological products", es: "Fabricación a gran escala de productos biológicos", de: "Großmaßstäbliche Herstellung biologischer Produkte", nl: "Grootschalige vervaardiging van biologische producten" },
          { en: "Computer modeling of biological systems", es: "Modelado computacional de sistemas biológicos", de: "Computermodellierung biologischer Systeme", nl: "Computer modellering van biologische systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Bioengineering nanotechnology involves creating and manipulating materials at the nanoscale for medical and biological applications. Examples include nanoparticles for targeted drug delivery, nanosensors for disease detection, nanofibers for tissue engineering scaffolds, and nanorobots for precise therapeutic interventions.",
          es: "La nanotecnología en bioingeniería involucra crear y manipular materiales a nanoescala para aplicaciones médicas y biológicas. Ejemplos incluyen nanopartículas para entrega dirigida de fármacos, nanosensores para detección de enfermedades, nanofibras para andamios de ingeniería de tejidos y nanorobots para intervenciones terapéuticas precisas.",
          de: "Bioingenieurwissenschaft-Nanotechnologie beinhaltet das Schaffen und Manipulieren von Materialien im Nanomaßstab für medizinische und biologische Anwendungen. Beispiele sind Nanopartikel für gezielte Arzneimittelabgabe, Nanosensoren für Krankheitserkennung, Nanofasern für Tissue-Engineering-Gerüste und Nanoroboter für präzise therapeutische Eingriffe.",
          nl: "Bioengineering nanotechnologie behelst het creëren en manipuleren van materialen op nanoschaal voor medische en biologische toepassingen. Voorbeelden zijn nanodeeltjes voor gerichte medicijn afgifte, nanosensoren voor ziekte detectie, nanovezels voor weefselengineering scaffolds, en nanorobots voor precieze therapeutische interventies."
        }
      },
      {
        question: {
          en: "What are biosensors?",
          es: "¿Qué son los biosensores?",
          de: "Was sind Biosensoren?",
          nl: "Wat zijn biosensoren?"
        },
        options: [
          { en: "Analytical devices that combine biological recognition element with physicochemical transducer", es: "Dispositivos analíticos que combinan elemento de reconocimiento biológico con transductor fisicoquímico", de: "Analytische Geräte, die biologisches Erkennungselement mit physikochemischem Wandler kombinieren", nl: "Analytische apparaten die biologische herkenning element combineren met fysicochemische transducer" },
          { en: "Only electronic sensors used in hospitals", es: "Solo sensores electrónicos usados en hospitales", de: "Nur elektronische Sensoren in Krankenhäusern verwendet", nl: "Alleen elektronische sensoren gebruikt in ziekenhuizen" },
          { en: "Biological organisms used as detectors", es: "Organismos biológicos usados como detectores", de: "Biologische Organismen als Detektoren verwendet", nl: "Biologische organismen gebruikt als detectoren" },
          { en: "Sensors that detect only living cells", es: "Sensores que detectan solo células vivas", de: "Sensoren, die nur lebende Zellen erkennen", nl: "Sensoren die alleen levende cellen detecteren" }
        ],
        correct: 0,
        explanation: {
          en: "Biosensors integrate biological components (enzymes, antibodies, DNA, cells) that specifically recognize target analytes with transducers that convert biological interactions into measurable signals. Applications include glucose monitoring, pathogen detection, environmental monitoring, and drug discovery.",
          es: "Los biosensores integran componentes biológicos (enzimas, anticuerpos, ADN, células) que reconocen específicamente analitos objetivo con transductores que convierten interacciones biológicas en señales medibles. Las aplicaciones incluyen monitoreo de glucosa, detección de patógenos, monitoreo ambiental y descubrimiento de fármacos.",
          de: "Biosensoren integrieren biologische Komponenten (Enzyme, Antikörper, DNA, Zellen), die Zielanalyte spezifisch erkennen, mit Wandlern, die biologische Interaktionen in messbare Signale umwandeln. Anwendungen umfassen Glukose-Monitoring, Pathogen-Detektion, Umwelt-Monitoring und Medikamentenentdeckung.",
          nl: "Biosensoren integreren biologische componenten (enzymen, antilichamen, DNA, cellen) die specifiek doel analyten herkennen met transducers die biologische interacties omzetten in meetbare signalen. Toepassingen omvatten glucose monitoring, pathogeen detectie, milieu monitoring, en medicijn ontdekking."
        }
      },
      {
        question: {
          en: "What is computational bioengineering?",
          es: "¿Qué es la bioingeniería computacional?",
          de: "Was ist computergestützte Bioingenieurwissenschaft?",
          nl: "Wat is computationele bioengineering?"
        },
        options: [
          { en: "Using mathematical models and computer simulations to understand and design biological systems", es: "Usar modelos matemáticos y simulaciones computacionales para entender y diseñar sistemas biológicos", de: "Mathematische Modelle und Computersimulationen verwenden, um biologische Systeme zu verstehen und zu entwerfen", nl: "Wiskundige modellen en computersimulaties gebruiken om biologische systemen te begrijpen en ontwerpen" },
          { en: "Only programming software for biological research", es: "Solo programar software para investigación biológica", de: "Nur Software für biologische Forschung programmieren", nl: "Alleen software programmeren voor biologisch onderzoek" },
          { en: "Building computers from biological materials", es: "Construir computadoras de materiales biológicos", de: "Computer aus biologischen Materialien bauen", nl: "Computers bouwen uit biologische materialen" },
          { en: "Data storage in biological systems only", es: "Solo almacenamiento de datos en sistemas biológicos", de: "Nur Datenspeicherung in biologischen Systemen", nl: "Alleen gegevensopslag in biologische systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Computational bioengineering integrates mathematical modeling, computer simulation, and data analysis to study biological systems and design engineering solutions. It includes finite element modeling of tissues, molecular dynamics simulations, systems biology approaches, and machine learning applications in biotechnology.",
          es: "La bioingeniería computacional integra modelado matemático, simulación computacional y análisis de datos para estudiar sistemas biológicos y diseñar soluciones de ingeniería. Incluye modelado de elementos finitos de tejidos, simulaciones de dinámica molecular, enfoques de biología de sistemas y aplicaciones de aprendizaje automático en biotecnología.",
          de: "Computergestützte Bioingenieurwissenschaft integriert mathematische Modellierung, Computersimulation und Datenanalyse, um biologische Systeme zu studieren und ingenieurtechnische Lösungen zu entwerfen. Sie umfasst Finite-Elemente-Modellierung von Geweben, Molekulardynamik-Simulationen, Systembiologie-Ansätze und maschinelles Lernen in der Biotechnologie.",
          nl: "Computationele bioengineering integreert wiskundige modellering, computersimulatie en gegevensanalyse om biologische systemen te bestuderen en engineering oplossingen te ontwerpen. Het omvat eindige elementen modellering van weefsels, moleculaire dynamica simulaties, systeembiologie benaderingen, en machine learning toepassingen in biotechnologie."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/bioengineering', level1);
  }
})();
