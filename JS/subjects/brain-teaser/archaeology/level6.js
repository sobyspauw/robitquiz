// Archaeology - Level 6: Archaeological Methods and Dating
(function() {
  const level6 = {
    name: {
      en: "Archaeological Methods and Dating",
      es: "Métodos Arqueológicos y Datación", 
      de: "Archäologische Methoden und Datierung",
      nl: "Archeologische Methoden en Datering"
    },
    questions: [
      {
        question: {
          en: "What is the maximum age that can be accurately determined using carbon-14 dating?",
          es: "¿Cuál es la edad máxima que se puede determinar con precisión usando datación por carbono-14?",
          de: "Welches ist das maximale Alter, das mit der Kohlenstoff-14-Datierung genau bestimmt werden kann?",
          nl: "Wat is de maximale leeftijd die nauwkeurig kan worden bepaald met koolstof-14 datering?"
        },
        options: [
          { en: "About 50,000 years", es: "Unos 50,000 años", de: "Etwa 50.000 Jahre", nl: "Ongeveer 50.000 jaar" },
          { en: "About 100,000 years", es: "Unos 100,000 años", de: "Etwa 100.000 Jahre", nl: "Ongeveer 100.000 jaar" },
          { en: "About 10,000 years", es: "Unos 10,000 años", de: "Etwa 10.000 Jahre", nl: "Ongeveer 10.000 jaar" },
          { en: "About 1 million years", es: "Unos 1 millón de años", de: "Etwa 1 Million Jahre", nl: "Ongeveer 1 miljoen jaar" }
        ],
        correct: 0,
        explanation: {
          en: "Carbon-14 dating is effective for organic materials up to about 50,000 years old. Beyond this, the amount of C-14 remaining is too small to measure accurately.",
          es: "La datación por carbono-14 es efectiva para materiales orgánicos de hasta unos 50,000 años. Más allá de esto, la cantidad de C-14 restante es demasiado pequeña para medirla con precisión.",
          de: "Die Kohlenstoff-14-Datierung ist für organische Materialien bis zu etwa 50.000 Jahren wirksam. Darüber hinaus ist die verbleibende Menge an C-14 zu gering, um sie genau zu messen.",
          nl: "Koolstof-14 datering is effectief voor organische materialen tot ongeveer 50.000 jaar oud. Daarvoorbij is de hoeveelheid overgebleven C-14 te klein om nauwkeurig te meten."
        }
      },
      {
        question: {
          en: "What principle is the foundation of stratigraphic dating?",
          es: "¿Qué principio es la base de la datación estratigráfica?",
          de: "Welches Prinzip ist die Grundlage der stratigraphischen Datierung?",
          nl: "Welk principe vormt de basis van stratigrafische datering?"
        },
        options: [
          { en: "Law of Superposition", es: "Ley de Superposición", de: "Lagerungsgesetz", nl: "Wet van Superpositie" },
          { en: "Law of Uniformitarianism", es: "Ley del Uniformitarismo", de: "Uniformitätsprinzip", nl: "Wet van Uniformitarisme" },
          { en: "Law of Original Horizontality", es: "Ley de Horizontalidad Original", de: "Gesetz der ursprünglichen Horizontalität", nl: "Wet van Oorspronkelijke Horizontaliteit" },
          { en: "Law of Cross-cutting Relations", es: "Ley de Relaciones Transversales", de: "Gesetz der durchschneidenden Beziehungen", nl: "Wet van Kruisende Relaties" }
        ],
        correct: 0,
        explanation: {
          en: "The Law of Superposition states that in undisturbed stratified deposits, the oldest layers are at the bottom and younger layers are above them.",
          es: "La Ley de Superposición establece que en depósitos estratificados no perturbados, las capas más antiguas están en el fondo y las capas más jóvenes están arriba.",
          de: "Das Lagerungsgesetz besagt, dass in ungestörten geschichteten Ablagerungen die ältesten Schichten unten liegen und jüngere Schichten darüber.",
          nl: "De Wet van Superpositie stelt dat in onverstoorde gelaagde afzettingen de oudste lagen onderaan liggen en jongere lagen erboven."
        }
      },
      {
        question: {
          en: "What type of dating provides absolute dates in calendar years?",
          es: "¿Qué tipo de datación proporciona fechas absolutas en años calendario?",
          de: "Welche Art der Datierung liefert absolute Daten in Kalenderjahren?",
          nl: "Welk type datering geeft absolute data in kalenderjaren?"
        },
        options: [
          { en: "Chronometric dating", es: "Datación cronométrica", de: "Chronometrische Datierung", nl: "Chronometrische datering" },
          { en: "Relative dating", es: "Datación relativa", de: "Relative Datierung", nl: "Relatieve datering" },
          { en: "Contextual dating", es: "Datación contextual", de: "Kontextuelle Datierung", nl: "Contextuele datering" },
          { en: "Typological dating", es: "Datación tipológica", de: "Typologische Datierung", nl: "Typologische datering" }
        ],
        correct: 0,
        explanation: {
          en: "Chronometric (or absolute) dating methods provide specific dates in calendar years, such as radiocarbon dating, while relative dating only shows which artifacts are older or younger.",
          es: "Los métodos de datación cronométrica (o absoluta) proporcionan fechas específicas en años calendario, como la datación por radiocarbono, mientras que la datación relativa solo muestra qué artefactos son más antiguos o más recientes.",
          de: "Chronometrische (oder absolute) Datierungsmethoden liefern spezifische Daten in Kalenderjahren, wie die Radiokarbon-Datierung, während relative Datierung nur zeigt, welche Artefakte älter oder jünger sind.",
          nl: "Chronometrische (of absolute) dateringsmethoden geven specifieke data in kalenderjaren, zoals radiokoolstofdatering, terwijl relatieve datering alleen toont welke artefacten ouder of jonger zijn."
        }
      },
      {
        question: {
          en: "Which dating method uses tree rings to establish chronologies?",
          es: "¿Qué método de datación usa los anillos de los árboles para establecer cronologías?",
          de: "Welche Datierungsmethode verwendet Baumringe zur Erstellung von Chronologien?",
          nl: "Welke dateringsmethode gebruikt boomringen om chronologieën vast te stellen?"
        },
        options: [
          { en: "Dendrochronology", es: "Dendrocronología", de: "Dendrochronologie", nl: "Dendrochronologie" },
          { en: "Thermoluminescence", es: "Termoluminiscencia", de: "Thermolumineszenz", nl: "Thermoluminescentie" },
          { en: "Potassium-Argon dating", es: "Datación Potasio-Argón", de: "Kalium-Argon-Datierung", nl: "Kalium-Argon datering" },
          { en: "Paleomagnetic dating", es: "Datación paleomagnética", de: "Paläomagnetische Datierung", nl: "Paleomagnetische datering" }
        ],
        correct: 0,
        explanation: {
          en: "Dendrochronology analyzes tree ring patterns to date wooden artifacts and structures. Each year creates a unique ring pattern that can be matched across different trees.",
          es: "La dendrocronología analiza los patrones de anillos de árboles para datar artefactos y estructuras de madera. Cada año crea un patrón único de anillos que puede coincidir entre diferentes árboles.",
          de: "Die Dendrochronologie analysiert Baumringmuster zur Datierung von Holzartefakten und -strukturen. Jedes Jahr erzeugt ein einzigartiges Ringmuster, das zwischen verschiedenen Bäumen abgeglichen werden kann.",
          nl: "Dendrochronologie analyseert boomringpatronen om houten artefacten en structuren te dateren. Elk jaar creëert een uniek ringpatroon dat kan worden gematcht tussen verschillende bomen."
        }
      },
      {
        question: {
          en: "What is thermoluminescence dating primarily used for?",
          es: "¿Para qué se usa principalmente la datación por termoluminiscencia?",
          de: "Wofür wird die Thermolumineszenz-Datierung hauptsächlich verwendet?",
          nl: "Waarvoor wordt thermoluminescentie datering voornamelijk gebruikt?"
        },
        options: [
          { en: "Pottery and fired clay", es: "Cerámica y arcilla cocida", de: "Töpferwaren und gebrannter Ton", nl: "Aardewerk en gebakken klei" },
          { en: "Organic materials", es: "Materiales orgánicos", de: "Organische Materialien", nl: "Organische materialen" },
          { en: "Metal artifacts", es: "Artefactos metálicos", de: "Metallartefakte", nl: "Metalen artefacten" },
          { en: "Stone tools", es: "Herramientas de piedra", de: "Steinwerkzeuge", nl: "Stenen werktuigen" }
        ],
        correct: 0,
        explanation: {
          en: "Thermoluminescence dating measures the accumulated radiation damage in crystalline materials like pottery and fired clay, dating when they were last heated above 500°C.",
          es: "La datación por termoluminiscencia mide el daño por radiación acumulado en materiales cristalinos como cerámica y arcilla cocida, datando cuándo fueron calentados por última vez por encima de 500°C.",
          de: "Die Thermolumineszenz-Datierung misst den akkumulierten Strahlungsschaden in kristallinen Materialien wie Töpferwaren und gebranntem Ton und datiert, wann sie zuletzt über 500°C erhitzt wurden.",
          nl: "Thermoluminescentie datering meet de geaccumuleerde stralingsschade in kristallijne materialen zoals aardewerk en gebakken klei, en dateert wanneer ze voor het laatst boven 500°C werden verhit."
        }
      },
      {
        question: {
          en: "What is the half-life of carbon-14?",
          es: "¿Cuál es la vida media del carbono-14?",
          de: "Wie lang ist die Halbwertszeit von Kohlenstoff-14?",
          nl: "Wat is de halfwaardetijd van koolstof-14?"
        },
        options: [
          { en: "5,730 years", es: "5,730 años", de: "5.730 Jahre", nl: "5.730 jaar" },
          { en: "1,200 years", es: "1,200 años", de: "1.200 Jahre", nl: "1.200 jaar" },
          { en: "50,000 years", es: "50,000 años", de: "50.000 Jahre", nl: "50.000 jaar" },
          { en: "100 years", es: "100 años", de: "100 Jahre", nl: "100 jaar" }
        ],
        correct: 0,
        explanation: {
          en: "Carbon-14 has a half-life of 5,730 years, meaning that half of the C-14 atoms in a sample will decay to nitrogen-14 in that time period.",
          es: "El carbono-14 tiene una vida media de 5,730 años, lo que significa que la mitad de los átomos de C-14 en una muestra se descompondrán en nitrógeno-14 en ese período de tiempo.",
          de: "Kohlenstoff-14 hat eine Halbwertszeit von 5.730 Jahren, was bedeutet, dass die Hälfte der C-14-Atome in einer Probe in diesem Zeitraum zu Stickstoff-14 zerfällt.",
          nl: "Koolstof-14 heeft een halfwaardetijd van 5.730 jaar, wat betekent dat de helft van de C-14 atomen in een monster in die tijd zal vervallen tot stikstof-14."
        }
      },
      {
        question: {
          en: "Which archaeological method involves systematic removal of soil in measured levels?",
          es: "¿Qué método arqueológico implica la remoción sistemática del suelo en niveles medidos?",
          de: "Welche archäologische Methode beinhaltet die systematische Entfernung von Boden in gemessenen Ebenen?",
          nl: "Welke archeologische methode houdt systematische verwijdering van grond in gemeten niveaus in?"
        },
        options: [
          { en: "Stratigraphic excavation", es: "Excavación estratigráfica", de: "Stratigraphische Ausgrabung", nl: "Stratigrafische opgraving" },
          { en: "Surface collection", es: "Recolección superficial", de: "Oberflächensammlung", nl: "Oppervlakteverzameling" },
          { en: "Remote sensing", es: "Teledetección", de: "Fernerkundung", nl: "Remote sensing" },
          { en: "Geophysical survey", es: "Prospección geofísica", de: "Geophysikalische Untersuchung", nl: "Geofysisch onderzoek" }
        ],
        correct: 0,
        explanation: {
          en: "Stratigraphic excavation involves carefully removing soil layer by layer, documenting the context and position of every artifact and feature found.",
          es: "La excavación estratigráfica implica remover cuidadosamente el suelo capa por capa, documentando el contexto y posición de cada artefacto y característica encontrada.",
          de: "Stratigraphische Ausgrabung beinhaltet das sorgfältige Entfernen von Boden Schicht für Schicht, wobei der Kontext und die Position jedes gefundenen Artefakts und Merkmals dokumentiert wird.",
          nl: "Stratigrafische opgraving houdt het zorgvuldig verwijderen van grond laag voor laag in, waarbij de context en positie van elk gevonden artefact en kenmerk wordt gedocumenteerd."
        }
      },
      {
        question: {
          en: "What is the purpose of a datum point in archaeological excavation?",
          es: "¿Cuál es el propósito de un punto de referencia en la excavación arqueológica?",
          de: "Was ist der Zweck eines Referenzpunkts bei archäologischen Ausgrabungen?",
          nl: "Wat is het doel van een referentiepunt bij archeologische opgravingen?"
        },
        options: [
          { en: "To provide a fixed reference for measurements", es: "Proporcionar una referencia fija para mediciones", de: "Einen festen Bezugspunkt für Messungen bereitzustellen", nl: "Een vast referentiepunt voor metingen te bieden" },
          { en: "To mark the center of the site", es: "Marcar el centro del sitio", de: "Die Mitte der Fundstelle zu markieren", nl: "Het centrum van de site te markeren" },
          { en: "To indicate the deepest excavation level", es: "Indicar el nivel de excavación más profundo", de: "Die tiefste Ausgrabungsebene anzuzeigen", nl: "Het diepste opgravingsniveau aan te geven" },
          { en: "To show the direction of magnetic north", es: "Mostrar la dirección del norte magnético", de: "Die Richtung des magnetischen Nordens zu zeigen", nl: "De richting van het magnetische noorden te tonen" }
        ],
        correct: 0,
        explanation: {
          en: "A datum point is a fixed reference point with known coordinates used to map and record the precise location of all finds and features during excavation.",
          es: "Un punto de referencia es un punto de referencia fijo con coordenadas conocidas usado para mapear y registrar la ubicación precisa de todos los hallazgos y características durante la excavación.",
          de: "Ein Referenzpunkt ist ein fester Bezugspunkt mit bekannten Koordinaten, der verwendet wird, um die genaue Lage aller Funde und Merkmale während der Ausgrabung zu kartieren und zu dokumentieren.",
          nl: "Een referentiepunt is een vast referentiepunt met bekende coördinaten dat wordt gebruikt om de precieze locatie van alle vondsten en kenmerken tijdens de opgraving in kaart te brengen en vast te leggen."
        }
      },
      {
        question: {
          en: "What does 'provenience' mean in archaeology?",
          es: "¿Qué significa 'procedencia' en arqueología?",
          de: "Was bedeutet 'Provenienz' in der Archäologie?",
          nl: "Wat betekent 'herkomst' in de archeologie?"
        },
        options: [
          { en: "The exact three-dimensional location where an artifact was found", es: "La ubicación tridimensional exacta donde se encontró un artefacto", de: "Der exakte dreidimensionale Ort, an dem ein Artefakt gefunden wurde", nl: "De exacte driedimensionale locatie waar een artefact werd gevonden" },
          { en: "The cultural group that made the artifact", es: "El grupo cultural que hizo el artefacto", de: "Die kulturelle Gruppe, die das Artefakt hergestellt hat", nl: "De culturele groep die het artefact maakte" },
          { en: "The age of the artifact", es: "La edad del artefacto", de: "Das Alter des Artefakts", nl: "De leeftijd van het artefact" },
          { en: "The material the artifact is made from", es: "El material del que está hecho el artefacto", de: "Das Material, aus dem das Artefakt besteht", nl: "Het materiaal waarvan het artefact is gemaakt" }
        ],
        correct: 0,
        explanation: {
          en: "Provenience refers to the exact three-dimensional location (horizontal and vertical coordinates) where an artifact, feature, or other archaeological material was discovered.",
          es: "La procedencia se refiere a la ubicación tridimensional exacta (coordenadas horizontales y verticales) donde se descubrió un artefacto, característica u otro material arqueológico.",
          de: "Provenienz bezieht sich auf den exakten dreidimensionalen Ort (horizontale und vertikale Koordinaten), an dem ein Artefakt, Merkmal oder anderes archäologisches Material entdeckt wurde.",
          nl: "Herkomst verwijst naar de exacte driedimensionale locatie (horizontale en verticale coördinaten) waar een artefact, kenmerk of ander archeologisch materiaal werd ontdekt."
        }
      },
      {
        question: {
          en: "Which survey method uses variations in the Earth's magnetic field to detect buried features?",
          es: "¿Qué método de prospección usa variaciones en el campo magnético de la Tierra para detectar características enterradas?",
          de: "Welche Vermessungsmethode nutzt Variationen im Erdmagnetfeld zur Erkennung vergrabener Merkmale?",
          nl: "Welke onderzoeksmethode gebruikt variaties in het magnetische veld van de aarde om begraven kenmerken te detecteren?"
        },
        options: [
          { en: "Magnetometry", es: "Magnetometría", de: "Magnetometrie", nl: "Magnetometrie" },
          { en: "Ground-penetrating radar", es: "Radar de penetración terrestre", de: "Bodenradar", nl: "Grondpenetrerende radar" },
          { en: "Electrical resistivity", es: "Resistividad eléctrica", de: "Elektrischer Widerstand", nl: "Elektrische weerstand" },
          { en: "LiDAR", es: "LiDAR", de: "LiDAR", nl: "LiDAR" }
        ],
        correct: 0,
        explanation: {
          en: "Magnetometry detects variations in the Earth's magnetic field caused by buried archaeological features like walls, hearths, and storage pits that alter local magnetism.",
          es: "La magnetometría detecta variaciones en el campo magnético de la Tierra causadas por características arqueológicas enterradas como muros, hogares y fosas de almacenamiento que alteran el magnetismo local.",
          de: "Die Magnetometrie erkennt Variationen im Erdmagnetfeld, die durch vergrabene archäologische Merkmale wie Mauern, Herde und Speichergruben verursacht werden, die den lokalen Magnetismus verändern.",
          nl: "Magnetometrie detecteert variaties in het magnetische veld van de aarde veroorzaakt door begraven archeologische kenmerken zoals muren, haarden en opslagkuilen die het lokale magnetisme veranderen."
        }
      },
      {
        question: {
          en: "What is the primary advantage of LiDAR in archaeological survey?",
          es: "¿Cuál es la ventaja principal del LiDAR en la prospección arqueológica?",
          de: "Was ist der Hauptvorteil von LiDAR bei archäologischen Untersuchungen?",
          nl: "Wat is het hoofdvoordeel van LiDAR bij archeologisch onderzoek?"
        },
        options: [
          { en: "Can penetrate forest canopy to reveal hidden features", es: "Puede penetrar el dosel forestal para revelar características ocultas", de: "Kann durch das Walddach eindringen und verborgene Merkmale enthüllen", nl: "Kan door het boskapitaal dringen om verborgen kenmerken te onthullen" },
          { en: "Provides chemical analysis of artifacts", es: "Proporciona análisis químico de artefactos", de: "Liefert chemische Analyse von Artefakten", nl: "Biedt chemische analyse van artefacten" },
          { en: "Determines the age of organic materials", es: "Determina la edad de materiales orgánicos", de: "Bestimmt das Alter organischer Materialien", nl: "Bepaalt de leeftijd van organische materialen" },
          { en: "Identifies specific cultural groups", es: "Identifica grupos culturales específicos", de: "Identifiziert spezifische kulturelle Gruppen", nl: "Identificeert specifieke culturele groepen" }
        ],
        correct: 0,
        explanation: {
          en: "LiDAR (Light Detection and Ranging) can penetrate vegetation to create detailed topographic maps, revealing archaeological features hidden under forest canopy.",
          es: "LiDAR (Detección y Medición de Luz) puede penetrar la vegetación para crear mapas topográficos detallados, revelando características arqueológicas ocultas bajo el dosel forestal.",
          de: "LiDAR (Light Detection and Ranging) kann Vegetation durchdringen, um detaillierte topographische Karten zu erstellen und archäologische Merkmale zu enthüllen, die unter dem Walddach verborgen sind.",
          nl: "LiDAR (Light Detection and Ranging) kan vegetatie doordringen om gedetailleerde topografische kaarten te maken, waarbij archeologische kenmerken worden onthuld die verborgen zijn onder het boskapitaal."
        }
      },
      {
        question: {
          en: "What is the smallest excavation unit typically used in systematic archaeological excavation?",
          es: "¿Cuál es la unidad de excavación más pequeña típicamente usada en excavación arqueológica sistemática?",
          de: "Was ist die kleinste Ausgrabungseinheit, die typischerweise bei systematischen archäologischen Ausgrabungen verwendet wird?",
          nl: "Wat is de kleinste opgravingseenheid die typisch wordt gebruikt bij systematische archeologische opgravingen?"
        },
        options: [
          { en: "1 x 1 meter square", es: "Cuadrado de 1 x 1 metro", de: "1 x 1 Meter Quadrat", nl: "1 x 1 meter vierkant" },
          { en: "5 x 5 meter square", es: "Cuadrado de 5 x 5 metros", de: "5 x 5 Meter Quadrat", nl: "5 x 5 meter vierkant" },
          { en: "2 x 2 meter square", es: "Cuadrado de 2 x 2 metros", de: "2 x 2 Meter Quadrat", nl: "2 x 2 meter vierkant" },
          { en: "10 x 10 meter square", es: "Cuadrado de 10 x 10 metros", de: "10 x 10 Meter Quadrat", nl: "10 x 10 meter vierkant" }
        ],
        correct: 0,
        explanation: {
          en: "A 1 x 1 meter square is the standard smallest excavation unit, allowing for precise control and documentation of finds and stratigraphy.",
          es: "Un cuadrado de 1 x 1 metro es la unidad de excavación más pequeña estándar, permitiendo control preciso y documentación de hallazgos y estratigrafía.",
          de: "Ein 1 x 1 Meter Quadrat ist die standardmäßig kleinste Ausgrabungseinheit, die präzise Kontrolle und Dokumentation von Funden und Stratigraphie ermöglicht.",
          nl: "Een 1 x 1 meter vierkant is de standaard kleinste opgravingseenheid, die precieze controle en documentatie van vondsten en stratigrafie mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is a 'baulk' in archaeological excavation?",
          es: "¿Qué es un 'testigo' en excavación arqueológica?",
          de: "Was ist ein 'Steg' bei archäologischen Ausgrabungen?",
          nl: "Wat is een 'balkenrand' bij archeologische opgravingen?"
        },
        options: [
          { en: "Unexcavated strip between excavation units", es: "Franja no excavada entre unidades de excavación", de: "Nicht ausgegrabener Streifen zwischen Ausgrabungseinheiten", nl: "Niet-opgegraven strook tussen opgravingseenheden" },
          { en: "Deepest part of the excavation", es: "Parte más profunda de la excavación", de: "Tiefster Teil der Ausgrabung", nl: "Diepste deel van de opgraving" },
          { en: "Surface collection area", es: "Área de recolección superficial", de: "Oberflächensammlungsbereich", nl: "Oppervlakteverzamelingsgebied" },
          { en: "Storage area for artifacts", es: "Área de almacenamiento para artefactos", de: "Lagerbereich für Artefakte", nl: "Opslaggebied voor artefacten" }
        ],
        correct: 0,
        explanation: {
          en: "A baulk is an unexcavated strip of earth left standing between excavation units to preserve stratigraphic profiles for study and documentation.",
          es: "Un testigo es una franja no excavada de tierra que se deja entre unidades de excavación para preservar perfiles estratigráficos para estudio y documentación.",
          de: "Ein Steg ist ein nicht ausgegrabener Erdstreifen, der zwischen Ausgrabungseinheiten stehen gelassen wird, um stratigraphische Profile für Studium und Dokumentation zu bewahren.",
          nl: "Een balkenrand is een niet-opgegraven strook aarde die tussen opgravingseenheden wordt gelaten om stratigrafische profielen te bewaren voor studie en documentatie."
        }
      },
      {
        question: {
          en: "Which method is used to create precise scale drawings of archaeological features?",
          es: "¿Qué método se usa para crear dibujos a escala precisos de características arqueológicas?",
          de: "Welche Methode wird verwendet, um präzise maßstabsgetreue Zeichnungen archäologischer Merkmale zu erstellen?",
          nl: "Welke methode wordt gebruikt om precieze schaaltekeningen van archeologische kenmerken te maken?"
        },
        options: [
          { en: "Planimetric mapping", es: "Mapeo planimétrico", de: "Planimetrische Kartierung", nl: "Planimetrische kartering" },
          { en: "Photogrammetry only", es: "Solo fotogrametría", de: "Nur Photogrammetrie", nl: "Alleen fotogrammetrie" },
          { en: "GPS mapping", es: "Mapeo GPS", de: "GPS-Kartierung", nl: "GPS-kartering" },
          { en: "Satellite imagery", es: "Imágenes satelitales", de: "Satellitenbilder", nl: "Satellietbeelden" }
        ],
        correct: 0,
        explanation: {
          en: "Planimetric mapping uses measured coordinates and triangulation to create accurate scale drawings of features, walls, and artifact distributions.",
          es: "El mapeo planimétrico usa coordenadas medidas y triangulación para crear dibujos a escala precisos de características, muros y distribuciones de artefactos.",
          de: "Planimetrische Kartierung verwendet gemessene Koordinaten und Triangulation, um genaue maßstabsgetreue Zeichnungen von Merkmalen, Mauern und Artefaktverteilungen zu erstellen.",
          nl: "Planimetrische kartering gebruikt gemeten coördinaten en triangulatie om nauwkeurige schaaltekeningen van kenmerken, muren en artefactverdelingen te maken."
        }
      },
      {
        question: {
          en: "What information must be recorded for every artifact found during excavation?",
          es: "¿Qué información debe registrarse para cada artefacto encontrado durante la excavación?",
          de: "Welche Informationen müssen für jedes bei der Ausgrabung gefundene Artefakt aufgezeichnet werden?",
          nl: "Welke informatie moet worden vastgelegd voor elk artefact dat tijdens de opgraving wordt gevonden?"
        },
        options: [
          { en: "Provenience, context, and description", es: "Procedencia, contexto y descripción", de: "Provenienz, Kontext und Beschreibung", nl: "Herkomst, context en beschrijving" },
          { en: "Only the material type", es: "Solo el tipo de material", de: "Nur die Materialart", nl: "Alleen het materiaaltype" },
          { en: "Just the approximate location", es: "Solo la ubicación aproximada", de: "Nur die ungefähre Lage", nl: "Alleen de geschatte locatie" },
          { en: "Only the date found", es: "Solo la fecha de hallazgo", de: "Nur das Funddatum", nl: "Alleen de datum van vondst" }
        ],
        correct: 0,
        explanation: {
          en: "Every artifact must have its exact provenience (3D coordinates), archaeological context (associated features/layers), and detailed description recorded for scientific value.",
          es: "Cada artefacto debe tener su procedencia exacta (coordenadas 3D), contexto arqueológico (características/capas asociadas) y descripción detallada registrada para valor científico.",
          de: "Jedes Artefakt muss seine exakte Provenienz (3D-Koordinaten), archäologischen Kontext (zugehörige Merkmale/Schichten) und detaillierte Beschreibung für wissenschaftlichen Wert aufgezeichnet haben.",
          nl: "Elk artefact moet zijn exacte herkomst (3D-coördinaten), archeologische context (geassocieerde kenmerken/lagen) en gedetailleerde beschrijving vastgelegd hebben voor wetenschappelijke waarde."
        }
      },
      {
        question: {
          en: "What is the purpose of screening or sieving excavated soil?",
          es: "¿Cuál es el propósito de cribar o tamizar el suelo excavado?",
          de: "Was ist der Zweck des Siebens oder Sichtens ausgegrabener Erde?",
          nl: "Wat is het doel van het zeven of siften van opgegraven grond?"
        },
        options: [
          { en: "To recover small artifacts and ecofacts", es: "Recuperar artefactos pequeños y ecofactos", de: "Kleine Artefakte und Ökofakte zu bergen", nl: "Om kleine artefacten en ecofacten te verzamelen" },
          { en: "To remove all organic material", es: "Remover todo material orgánico", de: "Alles organische Material zu entfernen", nl: "Om al het organische materiaal te verwijderen" },
          { en: "To separate different soil types", es: "Separar diferentes tipos de suelo", de: "Verschiedene Bodentypen zu trennen", nl: "Om verschillende grondsoorten te scheiden" },
          { en: "To prepare soil for chemical analysis", es: "Preparar suelo para análisis químico", de: "Boden für chemische Analyse vorzubereiten", nl: "Om grond voor te bereiden voor chemische analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Screening excavated soil through mesh screens recovers small artifacts, bone fragments, seeds, and other tiny materials that might be missed during excavation.",
          es: "Cribar el suelo excavado a través de mallas recupera artefactos pequeños, fragmentos de hueso, semillas y otros materiales diminutos que podrían pasarse por alto durante la excavación.",
          de: "Das Sieben ausgegrabener Erde durch Maschensiebe birgt kleine Artefakte, Knochenfragmente, Samen und andere winzige Materialien, die bei der Ausgrabung übersehen werden könnten.",
          nl: "Het zeven van opgegraven grond door gaasschermen verzamelt kleine artefacten, botfragmenten, zaden en andere kleine materialen die tijdens de opgraving gemist zouden kunnen worden."
        }
      },
      {
        question: {
          en: "What does 'in situ' mean in archaeological context?",
          es: "¿Qué significa 'in situ' en contexto arqueológico?",
          de: "Was bedeutet 'in situ' im archäologischen Kontext?",
          nl: "Wat betekent 'in situ' in archeologische context?"
        },
        options: [
          { en: "In its original position as found", es: "En su posición original como se encontró", de: "In seiner ursprünglichen Position wie gefunden", nl: "In zijn oorspronkelijke positie zoals gevonden" },
          { en: "Outside the excavation area", es: "Fuera del área de excavación", de: "Außerhalb des Ausgrabungsbereichs", nl: "Buiten het opgravingsgebied" },
          { en: "In the laboratory", es: "En el laboratorio", de: "Im Labor", nl: "In het laboratorium" },
          { en: "In a museum display", es: "En una exhibición de museo", de: "In einer Museumsausstellung", nl: "In een museumtentoonstelling" }
        ],
        correct: 0,
        explanation: {
          en: "'In situ' means an artifact or feature remains in its original position as discovered, providing important contextual information about past human activities.",
          es: "'In situ' significa que un artefacto o característica permanece en su posición original como se descubrió, proporcionando información contextual importante sobre actividades humanas pasadas.",
          de: "'In situ' bedeutet, dass ein Artefakt oder Merkmal in seiner ursprünglichen Position wie entdeckt verbleibt und wichtige kontextuelle Informationen über vergangene menschliche Aktivitäten liefert.",
          nl: "'In situ' betekent dat een artefact of kenmerk in zijn oorspronkelijke positie blijft zoals ontdekt, wat belangrijke contextuele informatie verschaft over vroegere menselijke activiteiten."
        }
      },
      {
        question: {
          en: "Which dating method is most suitable for volcanic rocks and very old archaeological sites?",
          es: "¿Qué método de datación es más adecuado para rocas volcánicas y sitios arqueológicos muy antiguos?",
          de: "Welche Datierungsmethode ist am besten für Vulkangesteine und sehr alte archäologische Fundstätten geeignet?",
          nl: "Welke dateringsmethode is het meest geschikt voor vulkanische gesteenten en zeer oude archeologische sites?"
        },
        options: [
          { en: "Potassium-Argon dating", es: "Datación Potasio-Argón", de: "Kalium-Argon-Datierung", nl: "Kalium-Argon datering" },
          { en: "Carbon-14 dating", es: "Datación por Carbono-14", de: "Kohlenstoff-14-Datierung", nl: "Koolstof-14 datering" },
          { en: "Dendrochronology", es: "Dendrocronología", de: "Dendrochronologie", nl: "Dendrochronologie" },
          { en: "Thermoluminescence", es: "Termoluminiscencia", de: "Thermolumineszenz", nl: "Thermoluminescentie" }
        ],
        correct: 0,
        explanation: {
          en: "Potassium-Argon dating can date volcanic rocks millions of years old, making it ideal for early human fossil sites in volcanic contexts like East Africa.",
          es: "La datación Potasio-Argón puede datar rocas volcánicas de millones de años, haciéndola ideal para sitios tempranos de fósiles humanos en contextos volcánicos como África Oriental.",
          de: "Kalium-Argon-Datierung kann millionen Jahre alte Vulkangesteine datieren, was sie ideal für frühe menschliche Fossilienfundstätten in vulkanischen Kontexten wie Ostafrika macht.",
          nl: "Kalium-Argon datering kan vulkanische gesteenten van miljoenen jaren oud dateren, waardoor het ideaal is voor vroege menselijke fossielensites in vulkanische contexten zoals Oost-Afrika."
        }
      },
      {
        question: {
          en: "What is the primary purpose of flotation in archaeological processing?",
          es: "¿Cuál es el propósito principal de la flotación en el procesamiento arqueológico?",
          de: "Was ist der Hauptzweck der Flotation bei der archäologischen Aufbereitung?",
          nl: "Wat is het hoofddoel van flotatie bij archeologische verwerking?"
        },
        options: [
          { en: "To recover plant remains and small organic materials", es: "Recuperar restos de plantas y materiales orgánicos pequeños", de: "Pflanzenreste und kleine organische Materialien zu bergen", nl: "Om plantenresten en kleine organische materialen te verzamelen" },
          { en: "To clean pottery sherds", es: "Limpiar fragmentos de cerámica", de: "Töpferscherben zu reinigen", nl: "Om aardewerk scherven te reinigen" },
          { en: "To separate metal from stone", es: "Separar metal de piedra", de: "Metall von Stein zu trennen", nl: "Om metaal van steen te scheiden" },
          { en: "To date organic materials", es: "Datar materiales orgánicos", de: "Organische Materialien zu datieren", nl: "Om organische materialen te dateren" }
        ],
        correct: 0,
        explanation: {
          en: "Flotation uses water to separate light organic materials like seeds, charcoal, and small bones from heavier soil and debris for paleoenvironmental studies.",
          es: "La flotación usa agua para separar materiales orgánicos ligeros como semillas, carbón y huesos pequeños del suelo y desechos más pesados para estudios paleoambientales.",
          de: "Flotation nutzt Wasser, um leichte organische Materialien wie Samen, Holzkohle und kleine Knochen von schwererem Boden und Schutt für paläoumweltliche Studien zu trennen.",
          nl: "Flotatie gebruikt water om lichte organische materialen zoals zaden, houtskool en kleine botten te scheiden van zwaardere grond en puin voor paleomilieustudies."
        }
      },
      {
        question: {
          en: "What is the difference between an artifact and an ecofact?",
          es: "¿Cuál es la diferencia entre un artefacto y un ecofacto?",
          de: "Was ist der Unterschied zwischen einem Artefakt und einem Ökofakt?",
          nl: "Wat is het verschil tussen een artefact en een ecofact?"
        },
        options: [
          { en: "Artifacts are human-made, ecofacts are natural materials used by humans", es: "Los artefactos son hechos por humanos, los ecofactos son materiales naturales usados por humanos", de: "Artefakte sind menschengemacht, Ökofakte sind natürliche Materialien, die von Menschen verwendet wurden", nl: "Artefacten zijn door mensen gemaakt, ecofacten zijn natuurlijke materialen gebruikt door mensen" },
          { en: "Artifacts are stone tools, ecofacts are pottery", es: "Los artefactos son herramientas de piedra, los ecofactos son cerámica", de: "Artefakte sind Steinwerkzeuge, Ökofakte sind Töpferwaren", nl: "Artefacten zijn stenen werktuigen, ecofacten zijn aardewerk" },
          { en: "Artifacts are old, ecofacts are recent", es: "Los artefactos son antiguos, los ecofactos son recientes", de: "Artefakte sind alt, Ökofakte sind neu", nl: "Artefacten zijn oud, ecofacten zijn recent" },
          { en: "Artifacts are large, ecofacts are small", es: "Los artefactos son grandes, los ecofactos son pequeños", de: "Artefakte sind groß, Ökofakte sind klein", nl: "Artefacten zijn groot, ecofacten zijn klein" }
        ],
        correct: 0,
        explanation: {
          en: "Artifacts are objects modified or created by humans (tools, pottery), while ecofacts are natural materials (bones, seeds, pollen) that provide environmental information.",
          es: "Los artefactos son objetos modificados o creados por humanos (herramientas, cerámica), mientras que los ecofactos son materiales naturales (huesos, semillas, polen) que proporcionan información ambiental.",
          de: "Artefakte sind von Menschen veränderte oder geschaffene Objekte (Werkzeuge, Töpferwaren), während Ökofakte natürliche Materialien (Knochen, Samen, Pollen) sind, die Umweltinformationen liefern.",
          nl: "Artefacten zijn voorwerpen gewijzigd of gemaakt door mensen (werktuigen, aardewerk), terwijl ecofacten natuurlijke materialen (botten, zaden, stuifmeel) zijn die omgevingsinformatie verschaffen."
        }
      },
      {
        question: {
          en: "What does ground-penetrating radar (GPR) detect in archaeological surveys?",
          es: "¿Qué detecta el radar de penetración terrestre (GPR) en prospecciones arqueológicas?",
          de: "Was erkennt Bodenradar (GPR) bei archäologischen Untersuchungen?",
          nl: "Wat detecteert grondpenetrerende radar (GPR) bij archeologische onderzoeken?"
        },
        options: [
          { en: "Subsurface features and buried structures", es: "Características subterráneas y estructuras enterradas", de: "Unterirdische Merkmale und vergrabene Strukturen", nl: "Ondergrondse kenmerken en begraven structuren" },
          { en: "Chemical composition of soil", es: "Composición química del suelo", de: "Chemische Zusammensetzung des Bodens", nl: "Chemische samenstelling van grond" },
          { en: "Age of buried artifacts", es: "Edad de artefactos enterrados", de: "Alter vergrabener Artefakte", nl: "Leeftijd van begraven artefacten" },
          { en: "DNA in ancient bones", es: "ADN en huesos antiguos", de: "DNA in alten Knochen", nl: "DNA in oude botten" }
        ],
        correct: 0,
        explanation: {
          en: "GPR sends electromagnetic pulses into the ground and detects reflections from buried features like walls, graves, and other archaeological structures.",
          es: "GPR envía pulsos electromagnéticos al suelo y detecta reflexiones de características enterradas como muros, tumbas y otras estructuras arqueológicas.",
          de: "GPR sendet elektromagnetische Impulse in den Boden und erkennt Reflexionen von vergrabenen Merkmalen wie Mauern, Gräbern und anderen archäologischen Strukturen.",
          nl: "GPR zendt elektromagnetische pulsen de grond in en detecteert reflecties van begraven kenmerken zoals muren, graven en andere archeologische structuren."
        }
      },
      {
        question: {
          en: "What is the purpose of creating a site grid system?",
          es: "¿Cuál es el propósito de crear un sistema de cuadrícula del sitio?",
          de: "Was ist der Zweck der Erstellung eines Fundstellen-Gittersystems?",
          nl: "Wat is het doel van het creëren van een site rastersysteem?"
        },
        options: [
          { en: "To provide systematic spatial control for excavation and recording", es: "Proporcionar control espacial sistemático para excavación y registro", de: "Systematische räumliche Kontrolle für Ausgrabung und Aufzeichnung zu bieten", nl: "Om systematische ruimtelijke controle te bieden voor opgraving en registratie" },
          { en: "To mark the boundaries of the archaeological site", es: "Marcar los límites del sitio arqueológico", de: "Die Grenzen der archäologischen Fundstätte zu markieren", nl: "Om de grenzen van de archeologische site te markeren" },
          { en: "To separate different cultural periods", es: "Separar diferentes períodos culturales", de: "Verschiedene kulturelle Perioden zu trennen", nl: "Om verschillende culturele perioden te scheiden" },
          { en: "To indicate areas of high artifact density", es: "Indicar áreas de alta densidad de artefactos", de: "Gebiete hoher Artefaktdichte anzuzeigen", nl: "Om gebieden met hoge artefactdichtheid aan te geven" }
        ],
        correct: 0,
        explanation: {
          en: "A site grid provides a systematic coordinate system that allows precise mapping of features, artifacts, and excavation units for scientific documentation and analysis.",
          es: "Una cuadrícula del sitio proporciona un sistema de coordenadas sistemático que permite el mapeo preciso de características, artefactos y unidades de excavación para documentación y análisis científico.",
          de: "Ein Fundstellen-Gitter bietet ein systematisches Koordinatensystem, das präzise Kartierung von Merkmalen, Artefakten und Ausgrabungseinheiten für wissenschaftliche Dokumentation und Analyse ermöglicht.",
          nl: "Een site raster biedt een systematisch coördinatensysteem dat precieze kartering van kenmerken, artefacten en opgravingseenheden mogelijk maakt voor wetenschappelijke documentatie en analyse."
        }
      },
      {
        question: {
          en: "Which type of photography is essential for documenting archaeological features?",
          es: "¿Qué tipo de fotografía es esencial para documentar características arqueológicas?",
          de: "Welche Art von Fotografie ist für die Dokumentation archäologischer Merkmale unerlässlich?",
          nl: "Welk type fotografie is essentieel voor het documenteren van archeologische kenmerken?"
        },
        options: [
          { en: "Scaled photography with measuring devices", es: "Fotografía a escala con dispositivos de medición", de: "Maßstabsgerechte Fotografie mit Messgeräten", nl: "Geschaalde fotografie met meetapparatuur" },
          { en: "Only black and white photography", es: "Solo fotografía en blanco y negro", de: "Nur Schwarz-Weiß-Fotografie", nl: "Alleen zwart-wit fotografie" },
          { en: "Aerial photography only", es: "Solo fotografía aérea", de: "Nur Luftbildfotografie", nl: "Alleen luchtfotografie" },
          { en: "Infrared photography only", es: "Solo fotografía infrarroja", de: "Nur Infrarotfotografie", nl: "Alleen infrarood fotografie" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeological photography must include scales (rulers, meter sticks) and often directional arrows to provide size reference and orientation for scientific documentation.",
          es: "La fotografía arqueológica debe incluir escalas (reglas, metros) y a menudo flechas direccionales para proporcionar referencia de tamaño y orientación para documentación científica.",
          de: "Archäologische Fotografie muss Maßstäbe (Lineale, Meterstäbe) und oft Richtungspfeile enthalten, um Größenreferenz und Orientierung für wissenschaftliche Dokumentation zu bieten.",
          nl: "Archeologische fotografie moet schalen (linialen, meterstokken) en vaak richtingspijlen bevatten om grootte referentie en oriëntatie te bieden voor wetenschappelijke documentatie."
        }
      },
      {
        question: {
          en: "What is the main advantage of photogrammetry in archaeology?",
          es: "¿Cuál es la principal ventaja de la fotogrametría en arqueología?",
          de: "Was ist der Hauptvorteil der Photogrammetrie in der Archäologie?",
          nl: "Wat is het hoofdvoordeel van fotogrammetrie in de archeologie?"
        },
        options: [
          { en: "Creates precise 3D models from multiple photographs", es: "Crea modelos 3D precisos a partir de múltiples fotografías", de: "Erstellt präzise 3D-Modelle aus mehreren Fotografien", nl: "Creëert precieze 3D-modellen uit meerdere foto's" },
          { en: "Provides chemical analysis of artifacts", es: "Proporciona análisis químico de artefactos", de: "Liefert chemische Analyse von Artefakten", nl: "Biedt chemische analyse van artefacten" },
          { en: "Determines the age of features", es: "Determina la edad de las características", de: "Bestimmt das Alter von Merkmalen", nl: "Bepaalt de leeftijd van kenmerken" },
          { en: "Identifies specific cultural groups", es: "Identifica grupos culturales específicos", de: "Identifiziert spezifische kulturelle Gruppen", nl: "Identificeert specifieke culturele groepen" }
        ],
        correct: 0,
        explanation: {
          en: "Photogrammetry processes multiple overlapping photographs to create accurate 3D models of archaeological features, sites, and artifacts for detailed study and preservation.",
          es: "La fotogrametría procesa múltiples fotografías superpuestas para crear modelos 3D precisos de características, sitios y artefactos arqueológicos para estudio detallado y preservación.",
          de: "Photogrammetrie verarbeitet mehrere überlappende Fotografien, um genaue 3D-Modelle archäologischer Merkmale, Fundstätten und Artefakte für detaillierte Studie und Erhaltung zu erstellen.",
          nl: "Fotogrammetrie verwerkt meerdere overlappende foto's om nauwkeurige 3D-modellen van archeologische kenmerken, sites en artefacten te maken voor gedetailleerde studie en behoud."
        }
      },
      {
        question: {
          en: "What information can be obtained from pollen analysis (palynology) in archaeology?",
          es: "¿Qué información se puede obtener del análisis de polen (palinología) en arqueología?",
          de: "Welche Informationen können aus der Pollenanalyse (Palynologie) in der Archäologie gewonnen werden?",
          nl: "Welke informatie kan worden verkregen uit pollenanalyse (palynologie) in de archeologie?"
        },
        options: [
          { en: "Ancient climate and vegetation patterns", es: "Patrones antiguos de clima y vegetación", de: "Alte Klima- und Vegetationsmuster", nl: "Oude klimaat- en vegetatiepatronen" },
          { en: "Age of stone tools", es: "Edad de herramientas de piedra", de: "Alter von Steinwerkzeugen", nl: "Leeftijd van stenen werktuigen" },
          { en: "Cultural identity of inhabitants", es: "Identidad cultural de los habitantes", de: "Kulturelle Identität der Bewohner", nl: "Culturele identiteit van bewoners" },
          { en: "Metal composition of artifacts", es: "Composición metálica de artefactos", de: "Metallzusammensetzung von Artefakten", nl: "Metaalsamenstelling van artefacten" }
        ],
        correct: 0,
        explanation: {
          en: "Pollen grains preserved in archaeological sediments reveal past vegetation and climate conditions, helping reconstruct ancient environments and human-environment interactions.",
          es: "Los granos de polen preservados en sedimentos arqueológicos revelan condiciones pasadas de vegetación y clima, ayudando a reconstruir ambientes antiguos e interacciones humano-ambiente.",
          de: "Pollenkörner, die in archäologischen Sedimenten erhalten sind, enthüllen vergangene Vegetations- und Klimabedingungen und helfen bei der Rekonstruktion alter Umgebungen und Mensch-Umwelt-Interaktionen.",
          nl: "Pollenkorrels bewaard in archeologische sedimenten onthullen vroegere vegetatie- en klimaatomstandigheden, wat helpt bij het reconstrueren van oude omgevingen en mens-omgeving interacties."
        }
      },
      {
        question: {
          en: "What is a 'feature' in archaeological terminology?",
          es: "¿Qué es una 'característica' en terminología arqueológica?",
          de: "Was ist ein 'Merkmal' in der archäologischen Terminologie?",
          nl: "Wat is een 'kenmerk' in archeologische terminologie?"
        },
        options: [
          { en: "Non-portable archaeological evidence like hearths or post holes", es: "Evidencia arqueológica no portátil como hogares o agujeros de postes", de: "Nicht transportierbare archäologische Evidenz wie Herde oder Pfostenlöcher", nl: "Niet-draagbaar archeologisch bewijs zoals haarden of paalgaten" },
          { en: "Any artifact found during excavation", es: "Cualquier artefacto encontrado durante la excavación", de: "Jedes bei der Ausgrabung gefundene Artefakt", nl: "Elk artefact gevonden tijdens opgraving" },
          { en: "The natural landscape of the site", es: "El paisaje natural del sitio", de: "Die natürliche Landschaft der Fundstätte", nl: "Het natuurlijke landschap van de site" },
          { en: "Modern disturbances to the site", es: "Perturbaciones modernas al sitio", de: "Moderne Störungen der Fundstätte", nl: "Moderne verstoringen van de site" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeological features are non-portable evidence of human activity, such as hearths, storage pits, walls, or post holes that cannot be removed from their context.",
          es: "Las características arqueológicas son evidencia no portátil de actividad humana, como hogares, fosas de almacenamiento, muros o agujeros de postes que no pueden removerse de su contexto.",
          de: "Archäologische Merkmale sind nicht transportierbare Belege menschlicher Aktivität, wie Herde, Speichergruben, Mauern oder Pfostenlöcher, die nicht aus ihrem Kontext entfernt werden können.",
          nl: "Archeologische kenmerken zijn niet-draagbaar bewijs van menselijke activiteit, zoals haarden, opslagkuilen, muren of paalgaten die niet uit hun context kunnen worden weggenomen."
        }
      },
      {
        question: {
          en: "Which technique is used for dating obsidian artifacts?",
          es: "¿Qué técnica se usa para datar artefactos de obsidiana?",
          de: "Welche Technik wird zur Datierung von Obsidian-Artefakten verwendet?",
          nl: "Welke techniek wordt gebruikt voor het dateren van obsidiaan artefacten?"
        },
        options: [
          { en: "Obsidian hydration dating", es: "Datación por hidratación de obsidiana", de: "Obsidian-Hydratations-Datierung", nl: "Obsidiaan hydratie datering" },
          { en: "Carbon-14 dating", es: "Datación por Carbono-14", de: "Kohlenstoff-14-Datierung", nl: "Koolstof-14 datering" },
          { en: "Dendrochronology", es: "Dendrocronología", de: "Dendrochronologie", nl: "Dendrochronologie" },
          { en: "Thermoluminescence only", es: "Solo termoluminiscencia", de: "Nur Thermolumineszenz", nl: "Alleen thermoluminescentie" }
        ],
        correct: 0,
        explanation: {
          en: "Obsidian hydration dating measures the microscopic hydration layer that forms on freshly fractured obsidian surfaces at a known rate over time.",
          es: "La datación por hidratación de obsidiana mide la capa de hidratación microscópica que se forma en superficies de obsidiana recién fracturadas a una tasa conocida a lo largo del tiempo.",
          de: "Obsidian-Hydratations-Datierung misst die mikroskopische Hydratationsschicht, die sich auf frisch gebrochenen Obsidianoberflächen mit bekannter Rate über Zeit bildet.",
          nl: "Obsidiaan hydratie datering meet de microscopische hydratielaag die zich vormt op vers gebroken obsidiaan oppervlakken met een bekende snelheid over tijd."
        }
      },
      {
        question: {
          en: "What does the term 'assemblage' refer to in archaeology?",
          es: "¿A qué se refiere el término 'conjunto' en arqueología?",
          de: "Worauf bezieht sich der Begriff 'Assemblage' in der Archäologie?",
          nl: "Waar verwijst de term 'assemblage' naar in de archeologie?"
        },
        options: [
          { en: "A collection of artifacts from the same cultural context", es: "Una colección de artefactos del mismo contexto cultural", de: "Eine Sammlung von Artefakten aus demselben kulturellen Kontext", nl: "Een verzameling artefacten uit dezelfde culturele context" },
          { en: "The process of putting together broken pottery", es: "El proceso de unir cerámica rota", de: "Der Prozess des Zusammenfügens zerbrochener Töpferwaren", nl: "Het proces van het samenvoegen van gebroken aardewerk" },
          { en: "A type of excavation technique", es: "Un tipo de técnica de excavación", de: "Eine Art Ausgrabungstechnik", nl: "Een type opgravingstechniek" },
          { en: "The arrangement of tools in a laboratory", es: "La disposición de herramientas en un laboratorio", de: "Die Anordnung von Werkzeugen in einem Labor", nl: "De rangschikking van gereedschappen in een laboratorium" }
        ],
        correct: 0,
        explanation: {
          en: "An assemblage is a group of artifacts that are associated with each other in time and space, representing the material culture of a particular group or period.",
          es: "Un conjunto es un grupo de artefactos que están asociados entre sí en tiempo y espacio, representando la cultura material de un grupo o período particular.",
          de: "Eine Assemblage ist eine Gruppe von Artefakten, die in Zeit und Raum miteinander verbunden sind und die materielle Kultur einer bestimmten Gruppe oder Periode repräsentieren.",
          nl: "Een assemblage is een groep artefacten die met elkaar geassocieerd zijn in tijd en ruimte, die de materiële cultuur van een bepaalde groep of periode vertegenwoordigen."
        }
      },
      {
        question: {
          en: "What is the purpose of faunal analysis in archaeology?",
          es: "¿Cuál es el propósito del análisis faunístico en arqueología?",
          de: "Was ist der Zweck der Faunenanalyse in der Archäologie?",
          nl: "Wat is het doel van faunale analyse in de archeologie?"
        },
        options: [
          { en: "To study animal bones for diet, environment, and hunting practices", es: "Estudiar huesos de animales para dieta, ambiente y prácticas de caza", de: "Tierknochen für Ernährung, Umwelt und Jagdpraktiken zu studieren", nl: "Om dierenbotten te bestuderen voor dieet, omgeving en jachtpraktijken" },
          { en: "To date archaeological sites", es: "Para datar sitios arqueológicos", de: "Archäologische Fundstätten zu datieren", nl: "Om archeologische sites te dateren" },
          { en: "To identify human remains", es: "Para identificar restos humanos", de: "Menschliche Überreste zu identifizieren", nl: "Om menselijke resten te identificeren" },
          { en: "To analyze pottery styles", es: "Para analizar estilos de cerámica", de: "Töpfereistile zu analysieren", nl: "Om aardewerk stijlen te analyseren" }
        ],
        correct: 0,
        explanation: {
          en: "Faunal analysis examines animal bones to understand ancient diets, hunting strategies, domestication practices, and environmental conditions.",
          es: "El análisis faunístico examina huesos de animales para entender dietas antiguas, estrategias de caza, prácticas de domesticación y condiciones ambientales.",
          de: "Faunenanalyse untersucht Tierknochen, um alte Ernährung, Jagdstrategien, Domestikationspraktiken und Umweltbedingungen zu verstehen.",
          nl: "Faunale analyse onderzoekt dierenbotten om oude diëten, jachtstrategieën, domesticatiepraktijken en omgevingsomstandigheden te begrijpen."
        }
      },
      {
        question: {
          en: "What information can be gained from studying phytoliths?",
          es: "¿Qué información se puede obtener del estudio de fitolitos?",
          de: "Welche Informationen können aus dem Studium von Phytolithen gewonnen werden?",
          nl: "Welke informatie kan worden verkregen uit het bestuderen van fytolithen?"
        },
        options: [
          { en: "Ancient plant use and agricultural practices", es: "Uso de plantas antiguas y prácticas agrícolas", de: "Alte Pflanzennutzung und landwirtschaftliche Praktiken", nl: "Oud plantengebruik en landbouwpraktijken" },
          { en: "Age of stone tools", es: "Edad de herramientas de piedra", de: "Alter von Steinwerkzeugen", nl: "Leeftijd van stenen werktuigen" },
          { en: "Climate temperature only", es: "Solo temperatura climática", de: "Nur Klimatemperatur", nl: "Alleen klimaattemperatuur" },
          { en: "Human population size", es: "Tamaño de población humana", de: "Menschliche Bevölkerungsgröße", nl: "Menselijke populatiegrootte" }
        ],
        correct: 0,
        explanation: {
          en: "Phytoliths are microscopic silica bodies from plants that preserve well and can reveal information about ancient plant use, agriculture, and vegetation patterns.",
          es: "Los fitolitos son cuerpos microscópicos de sílice de plantas que se preservan bien y pueden revelar información sobre uso de plantas antiguas, agricultura y patrones de vegetación.",
          de: "Phytolithe sind mikroskopische Silikat-Körper von Pflanzen, die gut erhalten bleiben und Informationen über alte Pflanzennutzung, Landwirtschaft und Vegetationsmuster enthüllen können.",
          nl: "Fytolithen zijn microscopische silica lichamen van planten die goed bewaren en informatie kunnen onthullen over oud plantengebruik, landbouw en vegetatiepatronen."
        }
      },
      {
        question: {
          en: "What is the main advantage of using total station equipment in archaeological surveying?",
          es: "¿Cuál es la principal ventaja de usar equipos de estación total en prospección arqueológica?",
          de: "Was ist der Hauptvorteil der Verwendung von Totalstation-Geräten bei archäologischen Vermessungen?",
          nl: "Wat is het hoofdvoordeel van het gebruik van total station apparatuur bij archeologisch onderzoek?"
        },
        options: [
          { en: "Provides precise electronic distance and angle measurements", es: "Proporciona mediciones electrónicas precisas de distancia y ángulo", de: "Liefert präzise elektronische Entfernungs- und Winkelmessungen", nl: "Biedt precieze elektronische afstands- en hoekmetingen" },
          { en: "Can date artifacts automatically", es: "Puede datar artefactos automáticamente", de: "Kann Artefakte automatisch datieren", nl: "Kan artefacten automatisch dateren" },
          { en: "Identifies buried features", es: "Identifica características enterradas", de: "Identifiziert vergrabene Merkmale", nl: "Identificeert begraven kenmerken" },
          { en: "Analyzes soil composition", es: "Analiza composición del suelo", de: "Analysiert Bodenzusammensetzung", nl: "Analyseert grondsamenstelling" }
        ],
        correct: 0,
        explanation: {
          en: "Total stations combine electronic distance measurement and angle measurement to provide highly accurate 3D coordinates for mapping archaeological features and artifacts.",
          es: "Las estaciones totales combinan medición electrónica de distancia y medición de ángulos para proporcionar coordenadas 3D altamente precisas para mapear características y artefactos arqueológicos.",
          de: "Totalstationen kombinieren elektronische Entfernungsmessung und Winkelmessung, um hochgenaue 3D-Koordinaten für die Kartierung archäologischer Merkmale und Artefakte zu liefern.",
          nl: "Total stations combineren elektronische afstandsmeting en hoekmeting om zeer nauwkeurige 3D-coördinaten te bieden voor het in kaart brengen van archeologische kenmerken en artefacten."
        }
      },
      {
        question: {
          en: "What is the significance of cultural stratigraphy in archaeology?",
          es: "¿Cuál es la significancia de la estratigrafía cultural en arqueología?",
          de: "Was ist die Bedeutung der kulturellen Stratigraphie in der Archäologie?",
          nl: "Wat is de betekenis van culturele stratigrafie in de archeologie?"
        },
        options: [
          { en: "Shows the sequence of human occupation and cultural change", es: "Muestra la secuencia de ocupación humana y cambio cultural", de: "Zeigt die Sequenz menschlicher Besiedlung und kulturellen Wandels", nl: "Toont de volgorde van menselijke bewoning en culturele verandering" },
          { en: "Determines the chemical composition of artifacts", es: "Determina la composición química de artefactos", de: "Bestimmt die chemische Zusammensetzung von Artefakten", nl: "Bepaalt de chemische samenstelling van artefacten" },
          { en: "Identifies the age of geological formations", es: "Identifica la edad de formaciones geológicas", de: "Identifiziert das Alter geologischer Formationen", nl: "Identificeert de leeftijd van geologische formaties" },
          { en: "Shows seasonal weather patterns", es: "Muestra patrones climáticos estacionales", de: "Zeigt saisonale Wettermuster", nl: "Toont seizoensgebonden weerpatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Cultural stratigraphy reveals the temporal sequence of human activities at a site, showing how cultures changed over time through different layers of occupation.",
          es: "La estratigrafía cultural revela la secuencia temporal de actividades humanas en un sitio, mostrando cómo las culturas cambiaron a lo largo del tiempo a través de diferentes capas de ocupación.",
          de: "Kulturelle Stratigraphie enthüllt die zeitliche Sequenz menschlicher Aktivitäten an einer Fundstätte und zeigt, wie sich Kulturen über Zeit durch verschiedene Besiedlungsschichten veränderten.",
          nl: "Culturele stratigrafie onthult de temporele volgorde van menselijke activiteiten op een site, die toont hoe culturen veranderden over tijd door verschillende bewoningslagen."
        }
      },
      {
        question: {
          en: "What does 'context' mean in archaeological excavation?",
          es: "¿Qué significa 'contexto' en excavación arqueológica?",
          de: "Was bedeutet 'Kontext' bei archäologischen Ausgrabungen?",
          nl: "Wat betekent 'context' bij archeologische opgravingen?"
        },
        options: [
          { en: "The relationship between artifacts and their surrounding environment", es: "La relación entre artefactos y su ambiente circundante", de: "Die Beziehung zwischen Artefakten und ihrer umgebenden Umwelt", nl: "De relatie tussen artefacten en hun omringende omgeving" },
          { en: "The age of the archaeological site", es: "La edad del sitio arqueológico", de: "Das Alter der archäologischen Fundstätte", nl: "De leeftijd van de archeologische site" },
          { en: "The number of artifacts found", es: "El número de artefactos encontrados", de: "Die Anzahl der gefundenen Artefakte", nl: "Het aantal gevonden artefacten" },
          { en: "The depth of excavation", es: "La profundidad de excavación", de: "Die Ausgrabungstiefe", nl: "De diepte van de opgraving" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeological context refers to the specific environmental and spatial relationships of artifacts, features, and other materials that provide meaning about past human behavior.",
          es: "El contexto arqueológico se refiere a las relaciones ambientales y espaciales específicas de artefactos, características y otros materiales que proporcionan significado sobre comportamiento humano pasado.",
          de: "Archäologischer Kontext bezieht sich auf die spezifischen umweltlichen und räumlichen Beziehungen von Artefakten, Merkmalen und anderen Materialien, die Bedeutung über vergangenes menschliches Verhalten liefern.",
          nl: "Archeologische context verwijst naar de specifieke omgevings- en ruimtelijke relaties van artefacten, kenmerken en andere materialen die betekenis geven over vroeger menselijk gedrag."
        }
      },
      {
        question: {
          en: "What is the purpose of using a plumb bob during archaeological excavation?",
          es: "¿Cuál es el propósito de usar una plomada durante la excavación arqueológica?",
          de: "Was ist der Zweck der Verwendung eines Lots bei archäologischen Ausgrabungen?",
          nl: "Wat is het doel van het gebruik van een schietlood tijdens archeologische opgravingen?"
        },
        options: [
          { en: "To ensure vertical measurements and maintain straight walls", es: "Asegurar mediciones verticales y mantener paredes rectas", de: "Vertikale Messungen sicherzustellen und gerade Wände zu halten", nl: "Om verticale metingen te garanderen en rechte wanden te behouden" },
          { en: "To detect buried metal objects", es: "Para detectar objetos metálicos enterrados", de: "Vergrabene Metallobjekte zu erkennen", nl: "Om begraven metalen voorwerpen te detecteren" },
          { en: "To measure the weight of artifacts", es: "Para medir el peso de artefactos", de: "Das Gewicht von Artefakten zu messen", nl: "Om het gewicht van artefacten te meten" },
          { en: "To determine magnetic north", es: "Para determinar el norte magnético", de: "Den magnetischen Norden zu bestimmen", nl: "Om het magnetische noorden te bepalen" }
        ],
        correct: 0,
        explanation: {
          en: "A plumb bob uses gravity to establish true vertical lines, ensuring that excavation walls remain straight and that vertical measurements are accurate.",
          es: "Una plomada usa la gravedad para establecer líneas verticales verdaderas, asegurando que las paredes de excavación permanezcan rectas y que las mediciones verticales sean precisas.",
          de: "Ein Lot nutzt die Schwerkraft, um echte vertikale Linien zu etablieren und sicherzustellen, dass Ausgrabungswände gerade bleiben und vertikale Messungen genau sind.",
          nl: "Een schietlood gebruikt de zwaartekracht om echte verticale lijnen vast te stellen, waardoor wordt gegarandeerd dat opgravingswanden recht blijven en dat verticale metingen nauwkeurig zijn."
        }
      },
      {
        question: {
          en: "What is archaeometry?",
          es: "¿Qué es la arqueometría?",
          de: "Was ist Archäometrie?",
          nl: "Wat is archeometrie?"
        },
        options: [
          { en: "The application of scientific methods to archaeological materials", es: "La aplicación de métodos científicos a materiales arqueológicos", de: "Die Anwendung wissenschaftlicher Methoden auf archäologische Materialien", nl: "De toepassing van wetenschappelijke methoden op archeologische materialen" },
          { en: "The measurement of archaeological sites", es: "La medición de sitios arqueológicos", de: "Die Vermessung archäologischer Fundstätten", nl: "Het meten van archeologische sites" },
          { en: "The study of ancient mathematics", es: "El estudio de matemáticas antiguas", de: "Das Studium alter Mathematik", nl: "De studie van oude wiskunde" },
          { en: "The dating of geological formations", es: "La datación de formaciones geológicas", de: "Die Datierung geologischer Formationen", nl: "Het dateren van geologische formaties" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeometry applies scientific analytical techniques like X-ray fluorescence, mass spectrometry, and other methods to study archaeological materials and answer archaeological questions.",
          es: "La arqueometría aplica técnicas analíticas científicas como fluorescencia de rayos X, espectrometría de masas y otros métodos para estudiar materiales arqueológicos y responder preguntas arqueológicas.",
          de: "Archäometrie wendet wissenschaftliche analytische Techniken wie Röntgenfluoreszenz, Massenspektrometrie und andere Methoden an, um archäologische Materialien zu studieren und archäologische Fragen zu beantworten.",
          nl: "Archeometrie past wetenschappelijke analytische technieken toe zoals röntgenfluorescentie, massaspectrometrie en andere methoden om archeologische materialen te bestuderen en archeologische vragen te beantwoorden."
        }
      },
      {
        question: {
          en: "What type of specialist analyzes ancient human skeletal remains?",
          es: "¿Qué tipo de especialista analiza restos esqueléticos humanos antiguos?",
          de: "Welche Art von Spezialist analysiert alte menschliche Skelettüberreste?",
          nl: "Welk type specialist analyseert oude menselijke skeletresten?"
        },
        options: [
          { en: "Bioarchaeologist or physical anthropologist", es: "Bioarqueólogo o antropólogo físico", de: "Bioarchäologe oder physischer Anthropologe", nl: "Bioarcheoloog of fysiek antropoloog" },
          { en: "Geologist", es: "Geólogo", de: "Geologe", nl: "Geoloog" },
          { en: "Botanist", es: "Botánico", de: "Botaniker", nl: "Botanicus" },
          { en: "Chemist", es: "Químico", de: "Chemiker", nl: "Chemicus" }
        ],
        correct: 0,
        explanation: {
          en: "Bioarchaeologists or physical anthropologists specialize in analyzing human skeletal remains to determine age, sex, health, diet, and cause of death from archaeological contexts.",
          es: "Los bioarqueólogos o antropólogos físicos se especializan en analizar restos esqueléticos humanos para determinar edad, sexo, salud, dieta y causa de muerte de contextos arqueológicos.",
          de: "Bioarchäologen oder physische Anthropologen spezialisieren sich auf die Analyse menschlicher Skelettüberreste, um Alter, Geschlecht, Gesundheit, Ernährung und Todesursache aus archäologischen Kontexten zu bestimmen.",
          nl: "Bioarcheologen of fysieke antropologen specialiseren zich in het analyseren van menselijke skeletresten om leeftijd, geslacht, gezondheid, dieet en doodsoorzaak uit archeologische contexten te bepalen."
        }
      },
      {
        question: {
          en: "What is the primary goal of conservation in archaeology?",
          es: "¿Cuál es el objetivo principal de la conservación en arqueología?",
          de: "Was ist das Hauptziel der Konservierung in der Archäologie?",
          nl: "Wat is het hoofddoel van conservering in de archeologie?"
        },
        options: [
          { en: "To preserve artifacts and sites for future study and public benefit", es: "Preservar artefactos y sitios para estudio futuro y beneficio público", de: "Artefakte und Fundstätten für zukünftige Studien und öffentlichen Nutzen zu bewahren", nl: "Om artefacten en sites te behouden voor toekomstig onderzoek en publiek belang" },
          { en: "To make artifacts look new again", es: "Hacer que los artefactos se vean nuevos otra vez", de: "Artefakte wieder neu aussehen zu lassen", nl: "Om artefacten er weer nieuw uit te laten zien" },
          { en: "To increase the monetary value of finds", es: "Aumentar el valor monetario de los hallazgos", de: "Den monetären Wert der Funde zu steigern", nl: "Om de monetaire waarde van vondsten te verhogen" },
          { en: "To remove all traces of age from objects", es: "Remover todas las trazas de edad de los objetos", de: "Alle Altersspuren von Objekten zu entfernen", nl: "Om alle sporen van ouderdom van voorwerpen te verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeological conservation aims to stabilize and preserve artifacts and sites in their current state, maintaining their integrity for research and education while respecting their historical authenticity.",
          es: "La conservación arqueológica busca estabilizar y preservar artefactos y sitios en su estado actual, manteniendo su integridad para investigación y educación mientras respeta su autenticidad histórica.",
          de: "Archäologische Konservierung zielt darauf ab, Artefakte und Fundstätten in ihrem aktuellen Zustand zu stabilisieren und zu bewahren, ihre Integrität für Forschung und Bildung zu erhalten, während ihre historische Authentizität respektiert wird.",
          nl: "Archeologische conservering heeft als doel artefacten en sites in hun huidige staat te stabiliseren en te behouden, hun integriteit voor onderzoek en onderwijs te behouden terwijl hun historische authenticiteit wordt gerespecteerd."
        }
      },
      {
        question: {
          en: "What is the difference between excavation and survey in archaeology?",
          es: "¿Cuál es la diferencia entre excavación y prospección en arqueología?",
          de: "Was ist der Unterschied zwischen Ausgrabung und Vermessung in der Archäologie?",
          nl: "Wat is het verschil tussen opgraving en onderzoek in de archeologie?"
        },
        options: [
          { en: "Excavation involves digging and removing soil; survey locates and maps sites without digging", es: "La excavación implica cavar y remover suelo; la prospección localiza y mapea sitios sin cavar", de: "Ausgrabung beinhaltet Graben und Entfernen von Boden; Vermessung lokalisiert und kartiert Fundstätten ohne zu graben", nl: "Opgraving houdt graven en grond verwijderen in; onderzoek lokaliseert en brengt sites in kaart zonder te graven" },
          { en: "Excavation is done in laboratories; survey is done in the field", es: "La excavación se hace en laboratorios; la prospección se hace en el campo", de: "Ausgrabung wird in Laboren durchgeführt; Vermessung wird im Feld durchgeführt", nl: "Opgraving wordt gedaan in laboratoria; onderzoek wordt gedaan in het veld" },
          { en: "Excavation studies pottery; survey studies stone tools", es: "La excavación estudia cerámica; la prospección estudia herramientas de piedra", de: "Ausgrabung studiert Töpferwaren; Vermessung studiert Steinwerkzeuge", nl: "Opgraving bestudeert aardewerk; onderzoek bestudeert stenen werktuigen" },
          { en: "There is no difference between them", es: "No hay diferencia entre ellas", de: "Es gibt keinen Unterschied zwischen ihnen", nl: "Er is geen verschil tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeological survey involves finding and recording sites without excavation, using surface observation and remote sensing, while excavation involves systematic digging to uncover buried remains.",
          es: "La prospección arqueológica implica encontrar y registrar sitios sin excavación, usando observación superficial y teledetección, mientras que la excavación implica cavar sistemáticamente para descubrir restos enterrados.",
          de: "Archäologische Vermessung beinhaltet das Finden und Aufzeichnen von Fundstätten ohne Ausgrabung, unter Verwendung von Oberflächenbeobachtung und Fernerkundung, während Ausgrabung systematisches Graben zur Aufdeckung vergrabener Überreste beinhaltet.",
          nl: "Archeologisch onderzoek houdt het vinden en vastleggen van sites in zonder opgraving, met behulp van oppervlakteobservatie en remote sensing, terwijl opgraving systematisch graven inhoudt om begraven resten bloot te leggen."
        }
      },
      {
        question: {
          en: "What role does GIS (Geographic Information Systems) play in modern archaeology?",
          es: "¿Qué papel juegan los SIG (Sistemas de Información Geográfica) en la arqueología moderna?",
          de: "Welche Rolle spielen GIS (Geographische Informationssysteme) in der modernen Archäologie?",
          nl: "Welke rol spelen GIS (Geografische Informatiesystemen) in de moderne archeologie?"
        },
        options: [
          { en: "Spatial analysis, site management, and predictive modeling", es: "Análisis espacial, gestión de sitios y modelado predictivo", de: "Räumliche Analyse, Fundstättenverwaltung und prädiktive Modellierung", nl: "Ruimtelijke analyse, sitebeheer en voorspellende modellering" },
          { en: "Only for creating simple maps", es: "Solo para crear mapas simples", de: "Nur für das Erstellen einfacher Karten", nl: "Alleen voor het maken van eenvoudige kaarten" },
          { en: "Dating archaeological materials", es: "Datar materiales arqueológicos", de: "Archäologische Materialien zu datieren", nl: "Archeologische materialen dateren" },
          { en: "Chemical analysis of artifacts", es: "Análisis químico de artefactos", de: "Chemische Analyse von Artefakten", nl: "Chemische analyse van artefacten" }
        ],
        correct: 0,
        explanation: {
          en: "GIS enables archaeologists to analyze spatial relationships, manage site databases, create predictive models for site locations, and integrate multiple data types for comprehensive analysis.",
          es: "Los SIG permiten a los arqueólogos analizar relaciones espaciales, gestionar bases de datos de sitios, crear modelos predictivos para ubicaciones de sitios e integrar múltiples tipos de datos para análisis integral.",
          de: "GIS ermöglicht es Archäologen, räumliche Beziehungen zu analysieren, Fundstättendatenbanken zu verwalten, prädiktive Modelle für Fundstättenstandorte zu erstellen und mehrere Datentypen für umfassende Analysen zu integrieren.",
          nl: "GIS stelt archeologen in staat om ruimtelijke relaties te analyseren, site databases te beheren, voorspellende modellen voor site locaties te maken en meerdere datatypes te integreren voor uitgebreide analyse."
        }
      },
      {
        question: {
          en: "What is the significance of underwater archaeology in understanding ancient maritime cultures?",
          es: "¿Cuál es la importancia de la arqueología subacuática para entender culturas marítimas antiguas?",
          de: "Welche Bedeutung hat die Unterwasserarchäologie für das Verständnis antiker Meereskulturen?",
          nl: "Wat is de betekenis van onderwater archeologie voor het begrijpen van oude maritieme culturen?"
        },
        options: [
          { en: "Preserves organic materials and reveals trade routes, shipbuilding techniques", es: "Preserva materiales orgánicos y revela rutas comerciales, técnicas de construcción naval", de: "Bewahrt organische Materialien und enthüllt Handelsrouten, Schiffbautechniken", nl: "Bewaart organische materialen en onthult handelsroutes, scheepsbouwtechnieken" },
          { en: "Only provides information about naval warfare", es: "Solo proporciona información sobre guerra naval", de: "Liefert nur Informationen über Seekrieg", nl: "Geeft alleen informatie over zeeoorlogvoering" },
          { en: "Focuses exclusively on treasure hunting", es: "Se enfoca exclusivamente en búsqueda de tesoros", de: "Fokussiert ausschließlich auf Schatzsuche", nl: "Focust uitsluitend op schatzoeken" },
          { en: "Limited to studying modern shipwrecks only", es: "Limitada a estudiar solo naufragios modernos", de: "Beschränkt auf das Studium nur moderner Schiffswracks", nl: "Beperkt tot het bestuderen van alleen moderne scheepswrakken" }
        ],
        correct: 0,
        explanation: {
          en: "Underwater archaeology provides unique insights into ancient maritime cultures by preserving organic materials like wood and textiles that rarely survive on land, revealing ship construction techniques, cargo contents, trade networks, and daily life aboard vessels.",
          es: "La arqueología subacuática proporciona perspectivas únicas sobre culturas marítimas antiguas al preservar materiales orgánicos como madera y textiles que raramente sobreviven en tierra, revelando técnicas de construcción naval, contenidos de carga, redes comerciales y vida diaria a bordo de embarcaciones.",
          de: "Unterwasserarchäologie bietet einzigartige Einblicke in antike Meereskulturen durch die Bewahrung organischer Materialien wie Holz und Textilien, die selten an Land überleben, wodurch Schiffbautechniken, Fracht, Handelsnetze und das tägliche Leben an Bord von Schiffen enthüllt werden.",
          nl: "Onderwater archeologie biedt unieke inzichten in oude maritieme culturen door organische materialen zoals hout en textiel te bewaren die zelden op land overleven, waarbij scheepsbouwtechnieken, vrachtinhoud, handelsnetwerken en dagelijks leven aan boord van schepen worden onthuld."
        }
      },
      {
        question: {
          en: "How has LIDAR technology revolutionized archaeological survey and discovery?",
          es: "¿Cómo ha revolucionado la tecnología LIDAR la prospección y descubrimiento arqueológicos?",
          de: "Wie hat die LIDAR-Technologie archäologische Vermessung und Entdeckung revolutioniert?",
          nl: "Hoe heeft LIDAR-technologie archeologische survey en ontdekking gerevolutioneerd?"
        },
        options: [
          { en: "Reveals hidden structures beneath forest canopy and terrain features", es: "Revela estructuras ocultas bajo dosel forestal y características del terreno", de: "Enthüllt verborgene Strukturen unter Waldkronen und Geländemerkmalen", nl: "Onthult verborgen structuren onder bosluifel en terreinkenmerken" },
          { en: "Only useful for dating archaeological materials", es: "Solo útil para datar materiales arqueológicos", de: "Nur nützlich für die Datierung archäologischer Materialien", nl: "Alleen nuttig voor het dateren van archeologische materialen" },
          { en: "Replaces the need for ground-based excavation entirely", es: "Reemplaza completamente la necesidad de excavación terrestre", de: "Ersetzt vollständig die Notwendigkeit bodenbasierter Ausgrabungen", nl: "Vervangt volledig de behoefte aan grond-gebaseerde opgraving" },
          { en: "Provides chemical analysis of buried artifacts", es: "Proporciona análisis químico de artefactos enterrados", de: "Bietet chemische Analyse vergrabener Artefakte", nl: "Biedt chemische analyse van begraven artefacten" }
        ],
        correct: 0,
        explanation: {
          en: "LIDAR (Light Detection and Ranging) uses laser pulses to create detailed topographic maps that can penetrate forest canopy, revealing previously unknown archaeological sites, ancient field systems, and settlement patterns hidden beneath vegetation.",
          es: "LIDAR (Detección y Medición de Luz) usa pulsos láser para crear mapas topográficos detallados que pueden penetrar dosel forestal, revelando sitios arqueológicos previamente desconocidos, sistemas de campos antiguos y patrones de asentamiento ocultos bajo vegetación.",
          de: "LIDAR (Light Detection and Ranging) verwendet Laserpulse zur Erstellung detaillierter topographischer Karten, die Waldkronen durchdringen können und zuvor unbekannte archäologische Stätten, alte Feldsysteme und unter Vegetation verborgene Siedlungsmuster enthüllen.",
          nl: "LIDAR (Light Detection and Ranging) gebruikt laserpulsen om gedetailleerde topografische kaarten te maken die bosluifels kunnen doordringen, waarbij voorheen onbekende archeologische sites, oude veldsystemen en nederzettingspatronen verborgen onder vegetatie worden onthuld."
        }
      },
      {
        question: {
          en: "What is the importance of contextual documentation in archaeological excavation?",
          es: "¿Cuál es la importancia de la documentación contextual en excavación arqueológica?",
          de: "Welche Bedeutung hat die kontextuelle Dokumentation in der archäologischen Ausgrabung?",
          nl: "Wat is het belang van contextuele documentatie bij archeologische opgraving?"
        },
        options: [
          { en: "Preserves spatial relationships and associations between finds for interpretation", es: "Preserva relaciones espaciales y asociaciones entre hallazgos para interpretación", de: "Bewahrt räumliche Beziehungen und Assoziationen zwischen Funden für die Interpretation", nl: "Bewaart ruimtelijke relaties en associaties tussen vondsten voor interpretatie" },
          { en: "Only required for legal compliance", es: "Solo requerida para cumplimiento legal", de: "Nur für rechtliche Compliance erforderlich", nl: "Alleen vereist voor wettelijke naleving" },
          { en: "Unnecessary with modern dating techniques", es: "Innecesaria con técnicas de datación modernas", de: "Unnötig mit modernen Datierungstechniken", nl: "Onnodig met moderne dateringstechnieken" },
          { en: "Primarily for creating museum displays", es: "Principalmente para crear exhibiciones de museo", de: "Hauptsächlich für die Erstellung von Museumsausstellungen", nl: "Voornamelijk voor het creëren van museumtentoonstellingen" }
        ],
        correct: 0,
        explanation: {
          en: "Contextual documentation is crucial because archaeological excavation is destructive. Detailed recording of spatial relationships, stratigraphic associations, and artifact positions enables post-excavation analysis and interpretation of past human behaviors and site formation processes.",
          es: "La documentación contextual es crucial porque la excavación arqueológica es destructiva. El registro detallado de relaciones espaciales, asociaciones estratigráficas y posiciones de artefactos permite análisis post-excavación e interpretación de comportamientos humanos pasados y procesos de formación del sitio.",
          de: "Kontextuelle Dokumentation ist entscheidend, weil archäologische Ausgrabung destruktiv ist. Detaillierte Aufzeichnung räumlicher Beziehungen, stratigraphischer Assoziationen und Artefaktpositionen ermöglicht Post-Ausgrabungs-Analyse und Interpretation vergangener menschlicher Verhaltensweisen und Fundplatzbildungsprozesse.",
          nl: "Contextuele documentatie is cruciaal omdat archeologische opgraving destructief is. Gedetailleerde vastlegging van ruimtelijke relaties, stratigrafische associaties en artefactposities maakt post-opgraving analyse en interpretatie van voormalige menselijke gedragingen en site-vormingsprocessen mogelijk."
        }
      },
      {
        question: {
          en: "How do archaeologists distinguish between natural and cultural site formation processes?",
          es: "¿Cómo distinguen los arqueólogos entre procesos naturales y culturales de formación del sitio?",
          de: "Wie unterscheiden Archäologen zwischen natürlichen und kulturellen Fundplatzbildungsprozessen?",
          nl: "Hoe onderscheiden archeologen tussen natuurlijke en culturele site-vormingsprocessen?"
        },
        options: [
          { en: "Through taphonomic analysis, sediment study, and artifact distribution patterns", es: "A través de análisis tafonómico, estudio de sedimentos y patrones de distribución de artefactos", de: "Durch taphonomische Analyse, Sedimentstudium und Artefaktverteilungsmuster", nl: "Door tafonomische analyse, sedimentstudie en artefact distributiepatronen" },
          { en: "Only by radiocarbon dating all materials", es: "Solo mediante datación por radiocarbono de todos los materiales", de: "Nur durch Radiokohlenstoffdatierung aller Materialien", nl: "Alleen door radiokoolstofdatering van alle materialen" },
          { en: "Based solely on artifact typology", es: "Basado únicamente en tipología de artefactos", de: "Ausschließlich basierend auf Artefakttypologie", nl: "Gebaseerd uitsluitend op artefacttypologie" },
          { en: "Through chemical analysis alone", es: "Solo a través de análisis químico", de: "Allein durch chemische Analyse", nl: "Alleen door chemische analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeologists use multiple approaches including taphonomic analysis to understand post-depositional changes, sediment analysis to identify natural versus cultural deposits, artifact distribution patterns, and micro-morphology studies to distinguish between human activities and natural processes.",
          es: "Los arqueólogos usan múltiples enfoques incluyendo análisis tafonómico para entender cambios post-deposicionales, análisis de sedimentos para identificar depósitos naturales versus culturales, patrones de distribución de artefactos y estudios de micro-morfología para distinguir entre actividades humanas y procesos naturales.",
          de: "Archäologen verwenden mehrere Ansätze einschließlich taphonomischer Analyse zum Verständnis post-depositioneller Veränderungen, Sedimentanalyse zur Identifizierung natürlicher versus kultureller Ablagerungen, Artefaktverteilungsmuster und Mikromorphologie-Studien zur Unterscheidung zwischen menschlichen Aktivitäten und natürlichen Prozessen.",
          nl: "Archeologen gebruiken meerdere benaderingen inclusief tafonomische analyse om post-depositionele veranderingen te begrijpen, sedimentanalyse om natuurlijke versus culturele afzettingen te identificeren, artefact distributiepatronen en micromorfologie studies om onderscheid te maken tussen menselijke activiteiten en natuurlijke processen."
        }
      },
      {
        question: {
          en: "What is the significance of experimental archaeology in understanding ancient technologies?",
          es: "¿Cuál es la importancia de la arqueología experimental para entender tecnologías antiguas?",
          de: "Welche Bedeutung hat die experimentelle Archäologie für das Verständnis antiker Technologien?",
          nl: "Wat is de betekenis van experimentele archeologie voor het begrijpen van oude technologieën?"
        },
        options: [
          { en: "Tests hypotheses about production techniques and tool functionality through replication", es: "Prueba hipótesis sobre técnicas de producción y funcionalidad de herramientas mediante replicación", de: "Testet Hypothesen über Produktionstechniken und Werkzeugfunktionalität durch Replikation", nl: "Test hypotheses over productietechnieken en gereedschapsfunctionaliteit door replicatie" },
          { en: "Only recreates ancient buildings for tourism", es: "Solo recrea edificios antiguos para turismo", de: "Rekonstruiert nur antike Gebäude für Tourismus", nl: "Recreëert alleen oude gebouwen voor toerisme" },
          { en: "Replaces the need for traditional archaeological methods", es: "Reemplaza la necesidad de métodos arqueológicos tradicionales", de: "Ersetzt die Notwendigkeit traditioneller archäologischer Methoden", nl: "Vervangt de behoefte aan traditionele archeologische methoden" },
          { en: "Focuses exclusively on artistic recreations", es: "Se enfoca exclusivamente en recreaciones artísticas", de: "Fokussiert ausschließlich auf künstlerische Nachbildungen", nl: "Focust uitsluitend op artistieke recreaties" }
        ],
        correct: 0,
        explanation: {
          en: "Experimental archaeology involves replicating ancient technologies and techniques to understand production processes, tool efficiency, skill requirements, and resource consumption, providing empirical data to test archaeological interpretations and hypotheses about past technologies.",
          es: "La arqueología experimental involucra replicar tecnologías y técnicas antiguas para entender procesos de producción, eficiencia de herramientas, requisitos de habilidad y consumo de recursos, proporcionando datos empíricos para probar interpretaciones arqueológicas e hipótesis sobre tecnologías pasadas.",
          de: "Experimentelle Archäologie beinhaltet die Replikation antiker Technologien und Techniken zum Verständnis von Produktionsprozessen, Werkzeugeffizienz, Fertigkeitsanforderungen und Ressourcenverbrauch, wodurch empirische Daten zur Prüfung archäologischer Interpretationen und Hypothesen über vergangene Technologien bereitgestellt werden.",
          nl: "Experimentele archeologie houdt het repliceren van oude technologieën en technieken in om productieprocessen, gereedschapsefficiëntie, vaardigheidsvereisten en grondstoffenverbruik te begrijpen, waarbij empirische data wordt verschaft om archeologische interpretaties en hypotheses over voormalige technologieën te testen."
        }
      },
      {
        question: {
          en: "How does paleoethnobotany contribute to understanding ancient subsistence strategies?",
          es: "¿Cómo contribuye la paleoetnobotánica a entender estrategias de subsistencia antiguas?",
          de: "Wie trägt die Paläoethnobotanik zum Verständnis antiker Subsistenzstrategien bei?",
          nl: "Hoe draagt paleoetnobotanie bij aan het begrijpen van oude bestaansstrategieën?"
        },
        options: [
          { en: "Analyzes plant remains to reconstruct diet, agriculture, and resource management", es: "Analiza restos vegetales para reconstruir dieta, agricultura y manejo de recursos", de: "Analysiert Pflanzenreste zur Rekonstruktion von Ernährung, Landwirtschaft und Ressourcenmanagement", nl: "Analyseert plantenresten om dieet, landbouw en grondstoffenbeheer te reconstrueren" },
          { en: "Only studies modern plant cultivation methods", es: "Solo estudia métodos modernos de cultivo de plantas", de: "Studiert nur moderne Pflanzenbaumethoden", nl: "Bestudeert alleen moderne plantenteeltmethoden" },
          { en: "Focuses exclusively on decorative plant use", es: "Se enfoca exclusivamente en uso decorativo de plantas", de: "Fokussiert ausschließlich auf dekorative Pflanzennutzung", nl: "Focust uitsluitend op decoratief plantengebruik" },
          { en: "Limited to identifying wood species only", es: "Limitado a identificar solo especies de madera", de: "Beschränkt auf die Identifizierung nur von Holzarten", nl: "Beperkt tot het identificeren van alleen houtsoorten" }
        ],
        correct: 0,
        explanation: {
          en: "Paleoethnobotany studies preserved plant remains from archaeological sites to understand past human-plant interactions, including domestication processes, agricultural practices, seasonal resource exploitation, dietary preferences, and environmental adaptations of ancient societies.",
          es: "La paleoetnobotánica estudia restos vegetales preservados de sitios arqueológicos para entender interacciones pasadas humano-planta, incluyendo procesos de domesticación, prácticas agrícolas, explotación estacional de recursos, preferencias dietéticas y adaptaciones ambientales de sociedades antiguas.",
          de: "Paläoethnobotanik studiert erhaltene Pflanzenreste von archäologischen Fundstätten zum Verständnis vergangener Mensch-Pflanzen-Interaktionen, einschließlich Domestikationsprozessen, landwirtschaftlichen Praktiken, saisonaler Ressourcennutzung, Ernährungspräferenzen und Umweltanpassungen antiker Gesellschaften.",
          nl: "Paleoetnobotanie bestudeert gepreserveerde plantenresten van archeologische sites om voormalige mens-plant interacties te begrijpen, inclusief domesticatieprocessen, agrarische praktijken, seizoensgebonden grondstoffenexploitatie, dieetvoorkeuren en omgevingsaanpassingen van oude samenlevingen."
        }
      },
      {
        question: {
          en: "What challenges do archaeologists face when interpreting fragmented material culture?",
          es: "¿Qué desafíos enfrentan los arqueólogos al interpretar cultura material fragmentada?",
          de: "Welchen Herausforderungen stehen Archäologen bei der Interpretation fragmentierter materieller Kultur gegenüber?",
          nl: "Welke uitdagingen ondervinden archeologen bij het interpreteren van gefragmenteerde materiële cultuur?"
        },
        options: [
          { en: "Incomplete assemblages, preservation bias, and contextual uncertainty", es: "Conjuntos incompletos, sesgo de preservación e incertidumbre contextual", de: "Unvollständige Ensembles, Erhaltungsverzerrung und kontextuelle Unsicherheit", nl: "Onvolledige assemblages, bewaringsvooroordeel en contextuele onzekerheid" },
          { en: "Too much information to process effectively", es: "Demasiada información para procesar efectivamente", de: "Zu viele Informationen zur effektiven Verarbeitung", nl: "Te veel informatie om effectief te verwerken" },
          { en: "Artifacts are always perfectly preserved", es: "Los artefactos siempre están perfectamente preservados", de: "Artefakte sind immer perfekt erhalten", nl: "Artefacten zijn altijd perfect bewaard" },
          { en: "Only modern contamination affects interpretation", es: "Solo la contaminación moderna afecta la interpretación", de: "Nur moderne Kontamination beeinflusst die Interpretation", nl: "Alleen moderne contaminatie beïnvloedt interpretatie" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeologists must work with incomplete, biased assemblages where organic materials may not survive, artifacts may be broken or displaced, and original contexts may be disturbed, requiring careful analysis of taphonomic processes and multiple lines of evidence for interpretation.",
          es: "Los arqueólogos deben trabajar con conjuntos incompletos y sesgados donde materiales orgánicos pueden no sobrevivir, artefactos pueden estar rotos o desplazados, y contextos originales pueden estar perturbados, requiriendo análisis cuidadoso de procesos tafonómicos y múltiples líneas de evidencia para interpretación.",
          de: "Archäologen müssen mit unvollständigen, verzerrten Ensembles arbeiten, wo organische Materialien möglicherweise nicht überleben, Artefakte zerbrochen oder verlagert sein können und ursprüngliche Kontexte gestört sein mögen, was sorgfältige Analyse taphonomischer Prozesse und mehrere Beweislinien für die Interpretation erfordert.",
          nl: "Archeologen moeten werken met onvolledige, bevooroordeelde assemblages waar organische materialen mogelijk niet overleven, artefacten gebroken of verplaatst kunnen zijn, en oorspronkelijke contexten verstoord kunnen zijn, wat zorgvuldige analyse van tafonomische processen en meerdere bewijslijnen voor interpretatie vereist."
        }
      },
      {
        question: {
          en: "How has digital documentation transformed archaeological practice?",
          es: "¿Cómo ha transformado la documentación digital la práctica arqueológica?",
          de: "Wie hat die digitale Dokumentation die archäologische Praxis transformiert?",
          nl: "Hoe heeft digitale documentatie de archeologische praktijk getransformeerd?"
        },
        options: [
          { en: "Enables precise 3D recording, database integration, and collaborative research", es: "Permite registro 3D preciso, integración de bases de datos e investigación colaborativa", de: "Ermöglicht präzise 3D-Aufzeichnung, Datenbankintegration und kollaborative Forschung", nl: "Maakt precieze 3D-opname, database-integratie en collaboratief onderzoek mogelijk" },
          { en: "Only replaces traditional paper records", es: "Solo reemplaza registros tradicionales en papel", de: "Ersetzt nur traditionelle Papieraufzeichnungen", nl: "Vervangt alleen traditionele papieren records" },
          { en: "Makes archaeological work completely automated", es: "Hace el trabajo arqueológico completamente automatizado", de: "Macht archäologische Arbeit vollständig automatisiert", nl: "Maakt archeologisch werk volledig geautomatiseerd" },
          { en: "Eliminates the need for field excavation", es: "Elimina la necesidad de excavación de campo", de: "Beseitigt die Notwendigkeit von Feldausgrabungen", nl: "Elimineert de behoefte aan veldopgravingen" }
        ],
        correct: 0,
        explanation: {
          en: "Digital documentation has revolutionized archaeology by enabling high-precision 3D recording, seamless database integration for analysis, enhanced collaboration through data sharing, virtual reconstruction capabilities, and long-term preservation of digital archives.",
          es: "La documentación digital ha revolucionado la arqueología al permitir registro 3D de alta precisión, integración perfecta de bases de datos para análisis, colaboración mejorada a través de intercambio de datos, capacidades de reconstrucción virtual y preservación a largo plazo de archivos digitales.",
          de: "Digitale Dokumentation hat die Archäologie revolutioniert durch hochpräzise 3D-Aufzeichnung, nahtlose Datenbankintegration für Analysen, verbesserte Zusammenarbeit durch Datenaustausch, virtuelle Rekonstruktionsfähigkeiten und langfristige Bewahrung digitaler Archive.",
          nl: "Digitale documentatie heeft archeologie gerevolutioneerd door hoge-precisie 3D-opname mogelijk te maken, naadloze database-integratie voor analyse, verbeterde samenwerking door data-uitwisseling, virtuele reconstructiecapaciteiten en lange-termijn bewaring van digitale archieven."
        }
      },
      {
        question: {
          en: "What is the role of public archaeology in contemporary archaeological practice?",
          es: "¿Cuál es el papel de la arqueología pública en la práctica arqueológica contemporánea?",
          de: "Welche Rolle spielt die öffentliche Archäologie in der zeitgenössischen archäologischen Praxis?",
          nl: "Wat is de rol van publieke archeologie in hedendaagse archeologische praktijk?"
        },
        options: [
          { en: "Engages communities, promotes heritage preservation, and democratizes archaeological knowledge", es: "Involucra comunidades, promueve preservación patrimonial y democratiza conocimiento arqueológico", de: "Bindet Gemeinschaften ein, fördert Denkmalschutz und demokratisiert archäologisches Wissen", nl: "Betrekt gemeenschappen, bevordert erfgoedbehoud en democratiseert archeologische kennis" },
          { en: "Only focuses on museum exhibitions", es: "Solo se enfoca en exhibiciones de museo", de: "Fokussiert nur auf Museumsausstellungen", nl: "Focust alleen op museumtentoonstellingen" },
          { en: "Restricts archaeological information from the public", es: "Restringe información arqueológica del público", de: "Beschränkt archäologische Informationen vor der Öffentlichkeit", nl: "Beperkt archeologische informatie van het publiek" },
          { en: "Exclusively serves commercial development interests", es: "Sirve exclusivamente intereses de desarrollo comercial", de: "Dient ausschließlich kommerziellen Entwicklungsinteressen", nl: "Dient uitsluitend commerciële ontwikkelingsbelangen" }
        ],
        correct: 0,
        explanation: {
          en: "Public archaeology involves community engagement, education, and advocacy for heritage preservation, making archaeological knowledge accessible through outreach programs, participatory research, and collaboration with local communities to protect and interpret cultural heritage.",
          es: "La arqueología pública involucra participación comunitaria, educación y abogacía por preservación patrimonial, haciendo conocimiento arqueológico accesible a través de programas de alcance, investigación participativa y colaboración con comunidades locales para proteger e interpretar patrimonio cultural.",
          de: "Öffentliche Archäologie beinhaltet Gemeinschaftsengagement, Bildung und Interessenvertretung für Denkmalschutz, wodurch archäologisches Wissen durch Outreach-Programme, partizipative Forschung und Zusammenarbeit mit lokalen Gemeinschaften zum Schutz und zur Interpretation kulturellen Erbes zugänglich gemacht wird.",
          nl: "Publieke archeologie houdt gemeenschapsbetrokkenheid, onderwijs en belangenbehartiging voor erfgoedbehoud in, waarbij archeologische kennis toegankelijk wordt gemaakt door outreach-programma's, participatief onderzoek en samenwerking met lokale gemeenschappen om cultureel erfgoed te beschermen en interpreteren."
        }
      },
      {
        question: {
          en: "How do archaeologists address ethical considerations in studying Indigenous cultural heritage?",
          es: "¿Cómo abordan los arqueólogos consideraciones éticas al estudiar patrimonio cultural indígena?",
          de: "Wie gehen Archäologen mit ethischen Überlegungen beim Studium des indigenen Kulturerbes um?",
          nl: "Hoe pakken archeologen ethische overwegingen aan bij het bestuderen van inheems cultureel erfgoed?"
        },
        options: [
          { en: "Collaborative research, community consent, and respectful repatriation practices", es: "Investigación colaborativa, consentimiento comunitario y prácticas de repatriación respetuosas", de: "Kollaborative Forschung, Gemeinschaftszustimmung und respektvolle Rückführungspraktiken", nl: "Collaboratief onderzoek, gemeenschapstoestemming en respectvolle repatriatiepraktijken" },
          { en: "Studying all materials without consultation", es: "Estudiar todos los materiales sin consulta", de: "Studium aller Materialien ohne Konsultation", nl: "Bestuderen van alle materialen zonder overleg" },
          { en: "Focusing only on monetary value of artifacts", es: "Enfocarse solo en valor monetario de artefactos", de: "Fokussierung nur auf Geldwert von Artefakten", nl: "Focussen alleen op geldwaarde van artefacten" },
          { en: "Ignoring Indigenous perspectives entirely", es: "Ignorar perspectivas indígenas completamente", de: "Indigene Perspektiven vollständig ignorieren", nl: "Inheemse perspectieven volledig negeren" }
        ],
        correct: 0,
        explanation: {
          en: "Ethical archaeological practice requires collaborative relationships with Indigenous communities, obtaining informed consent, incorporating Indigenous knowledge and perspectives, ensuring community benefits, and respecting protocols for sensitive materials and ancestral remains through proper consultation and repatriation processes.",
          es: "La práctica arqueológica ética requiere relaciones colaborativas con comunidades indígenas, obtener consentimiento informado, incorporar conocimiento y perspectivas indígenas, asegurar beneficios comunitarios y respetar protocolos para materiales sensibles y restos ancestrales a través de consulta apropiada y procesos de repatriación.",
          de: "Ethische archäologische Praxis erfordert kollaborative Beziehungen mit indigenen Gemeinschaften, informierte Zustimmung, Einbeziehung indigenen Wissens und Perspektiven, Sicherstellung von Gemeinschaftsvorteilen und Respekt vor Protokollen für sensible Materialien und Ahnenreste durch angemessene Konsultation und Rückführungsprozesse.",
          nl: "Ethische archeologische praktijk vereist collaboratieve relaties met inheemse gemeenschappen, geïnformeerde toestemming verkrijgen, inheemse kennis en perspectieven incorporeren, gemeenschapsvoordelen waarborgen en protocollen respecteren voor gevoelige materialen en voorouderlijke resten door juiste consultatie en repatriatiep orcessen."
        }
      },
      {
        question: {
          en: "What is the significance of landscape archaeology in understanding past human-environment relationships?",
          es: "¿Cuál es la importancia de la arqueología del paisaje para entender relaciones pasadas humano-ambiente?",
          de: "Welche Bedeutung hat die Landschaftsarchäologie für das Verständnis vergangener Mensch-Umwelt-Beziehungen?",
          nl: "Wat is de betekenis van landschapsarcheologie voor het begrijpen van voormalige mens-omgeving relaties?"
        },
        options: [
          { en: "Studies spatial relationships, environmental adaptation, and cultural landscape formation", es: "Estudia relaciones espaciales, adaptación ambiental y formación de paisaje cultural", de: "Studiert räumliche Beziehungen, Umweltanpassung und kulturelle Landschaftsbildung", nl: "Bestudeert ruimtelijke relaties, omgevingsaanpassing en culturele landschapsvorming" },
          { en: "Only maps modern geological features", es: "Solo mapea características geológicas modernas", de: "Kartiert nur moderne geologische Merkmale", nl: "Brengt alleen moderne geologische kenmerken in kaart" },
          { en: "Focuses exclusively on single-site excavations", es: "Se enfoca exclusivamente en excavaciones de sitio único", de: "Fokussiert ausschließlich auf Einzelfundstellen-Ausgrabungen", nl: "Focust uitsluitend op enkele-site opgravingen" },
          { en: "Studies only urban archaeological contexts", es: "Estudia solo contextos arqueológicos urbanos", de: "Studiert nur städtische archäologische Kontexte", nl: "Bestudeert alleen stedelijke archeologische contexten" }
        ],
        correct: 0,
        explanation: {
          en: "Landscape archaeology examines the spatial distribution of sites, environmental contexts, territorial organization, and how past societies modified and adapted to their environments, providing insights into resource management, settlement patterns, and long-term human-landscape interactions.",
          es: "La arqueología del paisaje examina la distribución espacial de sitios, contextos ambientales, organización territorial y cómo sociedades pasadas modificaron y se adaptaron a sus entornos, proporcionando perspectivas sobre manejo de recursos, patrones de asentamiento e interacciones humano-paisaje a largo plazo.",
          de: "Landschaftsarchäologie untersucht die räumliche Verteilung von Fundstätten, Umweltkontexte, territoriale Organisation und wie vergangene Gesellschaften ihre Umgebungen modifizierten und sich daran anpassten, wodurch Einblicke in Ressourcenmanagement, Siedlungsmuster und langfristige Mensch-Landschafts-Interaktionen gewährt werden.",
          nl: "Landschapsarcheologie onderzoekt de ruimtelijke distributie van sites, omgevingscontexten, territoriale organisatie en hoe voormalige samenlevingen hun omgevingen modificeerden en zich daaraan aanpasten, waarbij inzichten worden geboden in grondstoffenbeheer, nederzettingspatronen en lange-termijn mens-landschap interacties."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/archaeology', level6);
  }
})();