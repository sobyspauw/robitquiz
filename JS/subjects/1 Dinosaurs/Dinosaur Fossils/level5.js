// Dinosaur Fossils Quiz - Level 5: Knowledge about Dinosaur Fossils
(function() {
  const level5 = {
    name: {
      en: "Dinosaur Fossils Level 5",
      es: "Fosiles de Dinosaurios Nivel 5",
      de: "Dinosaurier Fossilien Stufe 5",
      nl: "Dino Fossielen Level 5"
    },
    questions: [
      {
        question: {
          en: "What is the significance of growth rings in dinosaur bones?",
          es: "¿Cuál es la importancia de los anillos de crecimiento en los huesos de dinosaurios?",
          de: "Was ist die Bedeutung von Wachstumsringen in Dinosaurier-Knochen?",
          nl: "Wat is de betekenis van groeiringen in dinosaurusbotten?"
        },
        options: [
          { en: "They indicate age and seasonal growth patterns", es: "Indican la edad y patrones de crecimiento estacional", de: "Sie zeigen Alter und saisonale Wachstumsmuster an", nl: "Ze geven leeftijd en seizoensgebonden groeipatronen aan" },
          { en: "They show what dinosaurs ate", es: "Muestran lo que comían los dinosaurios", de: "Sie zeigen, was Dinosaurier fraßen", nl: "Ze tonen wat dinosaurussen aten" },
          { en: "They indicate bone diseases", es: "Indican enfermedades óseas", de: "Sie zeigen Knochenkrankheiten an", nl: "Ze wijzen op botziekten" },
          { en: "They are just decoration", es: "Solo son decoración", de: "Sie sind nur Dekoration", nl: "Ze zijn alleen decoratie" }
        ],
        correct: 0,
        explanation: {
          en: "Growth rings (LAGs - Lines of Arrested Growth) in dinosaur bone cross-sections reveal age at death and provide insights into growth rates and seasonal variations.",
          es: "Los anillos de crecimiento (LAGs - Líneas de Crecimiento Arrestado) en las secciones transversales de huesos de dinosaurios revelan la edad al morir y proporcionan perspectivas sobre las tasas de crecimiento y variaciones estacionales.",
          de: "Wachstumsringe (LAGs - Linien gestoppten Wachstums) in Dinosaurier-Knochen-Querschnitten enthüllen das Alter beim Tod und bieten Einblicke in Wachstumsraten und saisonale Variationen.",
          nl: "Groeiringen (LAGs - Lines of Arrested Growth) in doorsneden van dinosaurusbotten onthullen leeftijd bij overlijden en verschaffen inzichten in groeisnelheden en seizoensvariaties."
        }
      },
      {
        question: {
          en: "What is paleohistology?",
          es: "¿Qué es la paleohistología?",
          de: "Was ist Paläohistologie?",
          nl: "Wat is paleohistologie?"
        },
        options: [
          { en: "The study of ancient tissue structure in fossils", es: "El estudio de la estructura de tejidos antiguos en fósiles", de: "Das Studium alter Gewebestrukturen in Fossilien", nl: "De studie van oude weefselstructuren in fossielen" },
          { en: "The study of fossil locations", es: "El estudio de ubicaciones de fósiles", de: "Das Studium fossiler Standorte", nl: "De studie van fossiellocaties" },
          { en: "The study of fossil colors", es: "El estudio de colores de fósiles", de: "Das Studium von Fossilfarben", nl: "De studie van fossielkleuren" },
          { en: "The study of fossil weights", es: "El estudio de pesos de fósiles", de: "Das Studium von Fossilgewichten", nl: "De studie van fossielgewichten" }
        ],
        correct: 0,
        explanation: {
          en: "Paleohistology examines the microscopic structure of ancient bones and teeth, revealing information about growth, metabolism, and physiology.",
          es: "La paleohistología examina la estructura microscópica de huesos y dientes antiguos, revelando información sobre crecimiento, metabolismo y fisiología.",
          de: "Paläohistologie untersucht die mikroskopische Struktur alter Knochen und Zähne und enthüllt Informationen über Wachstum, Stoffwechsel und Physiologie.",
          nl: "Paleohistologie onderzoekt de microscopische structuur van oude botten en tanden, wat informatie onthult over groei, metabolisme en fysiologie."
        }
      },
      {
        question: {
          en: "What are Haversian systems in dinosaur bone?",
          es: "¿Qué son los sistemas haversianos en el hueso de dinosaurio?",
          de: "Was sind Havers'sche Systeme in Dinosaurier-Knochen?",
          nl: "Wat zijn Haverse systemen in dinosaurusbot?"
        },
        options: [
          { en: "Concentric layers around blood vessels indicating fast bone growth", es: "Capas concéntricas alrededor de vasos sanguíneos que indican crecimiento óseo rápido", de: "Konzentrische Schichten um Blutgefäße, die schnelles Knochenwachstum anzeigen", nl: "Concentrische lagen rond bloedvaten die snelle botgroei aangeven" },
          { en: "Gaps in dinosaur teeth", es: "Espacios en los dientes de dinosaurios", de: "Lücken in Dinosaurier-Zähnen", nl: "Openingen in dinosaurustanden" },
          { en: "External bone surface patterns", es: "Patrones de superficie ósea externa", de: "Äußere Knochenoberflächenmuster", nl: "Externe botoppervlaktepatronen" },
          { en: "Bone marrow cavities", es: "Cavidades de médula ósea", de: "Knochenmarkhöhlen", nl: "Beenmergholtes" }
        ],
        correct: 0,
        explanation: {
          en: "Haversian systems (osteons) are circular structures in bone tissue that form around blood vessels, indicating active bone remodeling and fast growth typical of warm-blooded metabolism.",
          es: "Los sistemas haversianos (osteonas) son estructuras circulares en el tejido óseo que se forman alrededor de vasos sanguíneos, indicando remodelación ósea activa y crecimiento rápido típico del metabolismo de sangre caliente.",
          de: "Havers'sche Systeme (Osteone) sind kreisförmige Strukturen im Knochengewebe, die sich um Blutgefäße bilden und aktive Knochenumbildung und schnelles Wachstum anzeigen, das typisch für warmblütigen Stoffwechsel ist.",
          nl: "Haverse systemen (osteonen) zijn cirkelvormige structuren in botweefsel die zich rond bloedvaten vormen, wat actieve bothermodellering en snelle groei aangeeft die typisch is voor warmbloedig metabolisme."
        }
      },
      {
        question: {
          en: "What can isotope analysis of dinosaur teeth reveal?",
          es: "¿Qué puede revelar el análisis de isótopos de dientes de dinosaurios?",
          de: "Was kann die Isotopen-Analyse von Dinosaurier-Zähnen enthüllen?",
          nl: "Wat kan isotopenanalyse van dinosaurustanden onthullen?"
        },
        options: [
          { en: "Diet composition and environmental conditions", es: "Composición de la dieta y condiciones ambientales", de: "Nahrungszusammensetzung und Umweltbedingungen", nl: "Dieetsamenstelling en omgevingsomstandigheden" },
          { en: "Exact age in years", es: "Edad exacta en años", de: "Genaues Alter in Jahren", nl: "Exacte leeftijd in jaren" },
          { en: "Bone density measurements", es: "Mediciones de densidad ósea", de: "Knochendichtemessungen", nl: "Botdichtheidsmetingen" },
          { en: "Tooth sharpness levels", es: "Niveles de agudeza dental", de: "Zahnschärfegrade", nl: "Tandscherpteniveaus" }
        ],
        correct: 0,
        explanation: {
          en: "Stable isotope ratios (carbon, oxygen, nitrogen) in dinosaur teeth provide information about diet (herbivore vs carnivore), drinking water sources, and ancient climate conditions.",
          es: "Las proporciones de isótopos estables (carbono, oxígeno, nitrógeno) en los dientes de dinosaurios proporcionan información sobre la dieta (herbívoro vs carnívoro), fuentes de agua potable y condiciones climáticas antiguas.",
          de: "Stabile Isotopenverhältnisse (Kohlenstoff, Sauerstoff, Stickstoff) in Dinosaurier-Zähnen liefern Informationen über die Nahrung (Pflanzenfresser vs Fleischfresser), Trinkwasserquellen und alte Klimabedingungen.",
          nl: "Stabiele isotoopverhoudingen (koolstof, zuurstof, stikstof) in dinosaurustanden verschaffen informatie over dieet (herbivoor vs carnivoor), drinkwaterbronnen en oude klimaatomstandigheden."
        }
      },
      {
        question: {
          en: "What is the bone-bed formation known as an Assemblage-Zone?",
          es: "¿Qué es la formación de lecho de huesos conocida como Zona de Conjunto?",
          de: "Was ist die Knochenbett-Formation, die als Vergesellschaftungszone bekannt ist?",
          nl: "Wat is de botbedformatie bekend als een Assemblage-Zone?"
        },
        options: [
          { en: "A stratigraphic unit defined by characteristic fossil associations", es: "Una unidad estratigráfica definida por asociaciones fósiles características", de: "Eine stratigraphische Einheit, die durch charakteristische Fossilassoziationen definiert ist", nl: "Een stratigrafische eenheid gedefinieerd door karakteristieke fossielassociaties" },
          { en: "A single large fossil discovery", es: "Un solo descubrimiento de fósil grande", de: "Eine einzelne große Fossilentdeckung", nl: "Een enkele grote fossielontdekking" },
          { en: "A museum display arrangement", es: "Un arreglo de exhibición de museo", de: "Eine Museumsausstellungsanordnung", nl: "Een museumtentoonstellingsopstelling" },
          { en: "A geological time period", es: "Un período de tiempo geológico", de: "Eine geologische Zeitperiode", nl: "Een geologische tijdsperiode" }
        ],
        correct: 0,
        explanation: {
          en: "An Assemblage-Zone represents a body of strata characterized by a specific association of fossil taxa that lived together during a particular time interval.",
          es: "Una Zona de Conjunto representa un cuerpo de estratos caracterizado por una asociación específica de taxa fósiles que vivieron juntos durante un intervalo de tiempo particular.",
          de: "Eine Vergesellschaftungszone repräsentiert einen Gesteinskörper, der durch eine spezifische Assoziation fossiler Taxa charakterisiert ist, die während eines bestimmten Zeitintervalls zusammen lebten.",
          nl: "Een Assemblage-Zone vertegenwoordigt een gesteentelichaam gekarakteriseerd door een specifieke associatie van fossiele taxa die samen leefden tijdens een bepaald tijdsinterval."
        }
      },
      {
        question: {
          en: "What is the process of biomineralization in living organisms?",
          es: "¿Qué es el proceso de biomineralización en organismos vivos?",
          de: "Was ist der Prozess der Biomineralisation in lebenden Organismen?",
          nl: "Wat is het proces van biomineralisatie in levende organismen?"
        },
        options: [
          { en: "Controlled formation of minerals by living cells", es: "Formación controlada de minerales por células vivas", de: "Kontrollierte Bildung von Mineralien durch lebende Zellen", nl: "Gecontroleerde vorming van mineralen door levende cellen" },
          { en: "Random mineral accumulation", es: "Acumulación mineral aleatoria", de: "Zufällige Mineralansammlung", nl: "Willekeurige mineraalophoping" },
          { en: "Artificial mineral injection", es: "Inyección mineral artificial", de: "Künstliche Mineralinjektion", nl: "Kunstmatige mineraalinjectie" },
          { en: "Environmental mineral absorption", es: "Absorción mineral ambiental", de: "Umwelt-Mineralabsorption", nl: "Omgevingsmineraalsabsorptie" }
        ],
        correct: 0,
        explanation: {
          en: "Biomineralization is the biological process where organisms produce minerals to create hard structures like bones, teeth, and shells through controlled cellular mechanisms.",
          es: "La biomineralización es el proceso biológico donde los organismos producen minerales para crear estructuras duras como huesos, dientes y conchas a través de mecanismos celulares controlados.",
          de: "Biomineralisation ist der biologische Prozess, bei dem Organismen Mineralien produzieren, um harte Strukturen wie Knochen, Zähne und Schalen durch kontrollierte zelluläre Mechanismen zu schaffen.",
          nl: "Biomineralisatie is het biologische proces waarbij organismen mineralen produceren om harde structuren zoals botten, tanden en schelpen te creëren via gecontroleerde cellulaire mechanismen."
        }
      },
      {
        question: {
          en: "What information can the microstructure of dinosaur eggshells provide?",
          es: "¿Qué información puede proporcionar la microestructura de las cáscaras de huevos de dinosaurio?",
          de: "Welche Informationen kann die Mikrostruktur von Dinosaurier-Eierschalen liefern?",
          nl: "Welke informatie kan de microstructuur van dinosauruseischalen verschaffen?"
        },
        options: [
          { en: "Species identification and nesting behavior", es: "Identificación de especies y comportamiento de anidación", de: "Artidentifikation und Nistverhalten", nl: "Soortenidentificatie en nestgedrag" },
          { en: "Exact hatching dates", es: "Fechas exactas de eclosión", de: "Genaue Schlüpfdaten", nl: "Exacte uitkomstdata" },
          { en: "Egg nutritional content", es: "Contenido nutricional del huevo", de: "Nährstoffgehalt des Eies", nl: "Ei-voedingswaarde" },
          { en: "Incubation temperature only", es: "Solo temperatura de incubación", de: "Nur Bruttemperatur", nl: "Alleen broedtemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Dinosaur eggshell microstructure reveals taxonomic relationships, reproductive strategies, incubation methods, and environmental conditions during egg-laying periods.",
          es: "La microestructura de la cáscara de huevo de dinosaurio revela relaciones taxonómicas, estrategias reproductivas, métodos de incubación y condiciones ambientales durante los períodos de puesta de huevos.",
          de: "Die Mikrostruktur von Dinosaurier-Eierschalen enthüllt taxonomische Beziehungen, Fortpflanzungsstrategien, Brutmethoden und Umweltbedingungen während der Eiablagephasen.",
          nl: "Dinosauruseischaal-microstructuur onthult taxonomische verwantschappen, voortplantingsstrategieën, broedmethoden en omgevingsomstandigheden tijdens eilegtijden."
        }
      },
      {
        question: {
          en: "What is functional morphology in paleontology?",
          es: "¿Qué es la morfología funcional en paleontología?",
          de: "Was ist funktionale Morphologie in der Paläontologie?",
          nl: "Wat is functionele morfologie in de paleontologie?"
        },
        options: [
          { en: "Study of how anatomical structures relate to their biological function", es: "Estudio de cómo las estructuras anatómicas se relacionan con su función biológica", de: "Studie darüber, wie anatomische Strukturen mit ihrer biologischen Funktion zusammenhängen", nl: "Studie van hoe anatomische structuren gerelateerd zijn aan hun biologische functie" },
          { en: "Classification of fossil shapes", es: "Clasificación de formas fósiles", de: "Klassifizierung fossiler Formen", nl: "Classificatie van fossielvormen" },
          { en: "Measurement of fossil dimensions", es: "Medición de dimensiones fósiles", de: "Messung fossiler Dimensionen", nl: "Meting van fossielafmetingen" },
          { en: "Description of fossil colors", es: "Descripción de colores fósiles", de: "Beschreibung fossiler Farben", nl: "Beschrijving van fossielkleuren" }
        ],
        correct: 0,
        explanation: {
          en: "Functional morphology interprets the relationship between form and function in extinct organisms, helping reconstruct behaviors, diets, and ecological roles.",
          es: "La morfología funcional interpreta la relación entre forma y función en organismos extintos, ayudando a reconstruir comportamientos, dietas y roles ecológicos.",
          de: "Funktionale Morphologie interpretiert die Beziehung zwischen Form und Funktion in ausgestorbenen Organismen und hilft bei der Rekonstruktion von Verhalten, Ernährung und ökologischen Rollen.",
          nl: "Functionele morfologie interpreteert de relatie tussen vorm en functie in uitgestorven organismen, wat helpt bij het reconstrueren van gedrag, dieet en ecologische rollen."
        }
      },
      {
        question: {
          en: "What is the significance of medullary bone in dinosaur fossils?",
          es: "¿Cuál es la importancia del hueso medular en los fósiles de dinosaurios?",
          de: "Was ist die Bedeutung des Markknochens in Dinosaurier-Fossilien?",
          nl: "Wat is de betekenis van medullair bot in dinosaurusfossielen?"
        },
        options: [
          { en: "It indicates reproductive females and egg-laying behavior", es: "Indica hembras reproductivas y comportamiento de puesta de huevos", de: "Es zeigt reproduktive Weibchen und Eiablageverhalten an", nl: "Het wijst op reproductieve vrouwtjes en eileggedrag" },
          { en: "It shows bone diseases", es: "Muestra enfermedades óseas", de: "Es zeigt Knochenkrankheiten", nl: "Het toont botziekten" },
          { en: "It indicates old age", es: "Indica vejez", de: "Es zeigt hohes Alter an", nl: "Het wijst op hoge leeftijd" },
          { en: "It shows fighting injuries", es: "Muestra heridas de combate", de: "Es zeigt Kampfverletzungen", nl: "Het toont gevechtsletsel" }
        ],
        correct: 0,
        explanation: {
          en: "Medullary bone is a specialized tissue found in reproductive female dinosaurs that serves as a calcium reservoir for eggshell formation, similar to modern birds.",
          es: "El hueso medular es un tejido especializado encontrado en dinosaurios hembra reproductivos que sirve como reservorio de calcio para la formación de cáscaras de huevo, similar a las aves modernas.",
          de: "Markknochen ist ein spezialisiertes Gewebe, das in reproduktiven weiblichen Dinosauriern gefunden wird und als Kalziumreservoir für die Eierschalenbildung dient, ähnlich wie bei modernen Vögeln.",
          nl: "Medullair bot is een gespecialiseerd weefsel gevonden in reproductieve vrouwelijke dinosaurussen dat dient als calciumreservoir voor eischaalvorming, vergelijkbaar met moderne vogels."
        }
      },
      {
        question: {
          en: "What is paleobiogeography?",
          es: "¿Qué es la paleobiogeografía?",
          de: "Was ist Paläobiogeographie?",
          nl: "Wat is paleobiogeografie?"
        },
        options: [
          { en: "Study of ancient geographic distribution of organisms", es: "Estudio de la distribución geográfica antigua de organismos", de: "Studie der alten geografischen Verteilung von Organismen", nl: "Studie van oude geografische verspreiding van organismen" },
          { en: "Study of fossil preservation", es: "Estudio de preservación de fósiles", de: "Studie der Fossilerhaltung", nl: "Studie van fossielpreservatie" },
          { en: "Study of rock formations", es: "Estudio de formaciones rocosas", de: "Studie von Gesteinsformationen", nl: "Studie van gesteenteformaties" },
          { en: "Study of fossil dating methods", es: "Estudio de métodos de datación de fósiles", de: "Studie fossiler Datierungsmethoden", nl: "Studie van fossieldateringsmethoden" }
        ],
        correct: 0,
        explanation: {
          en: "Paleobiogeography reconstructs how species were distributed across ancient continents and how continental drift affected evolution and biodiversity patterns.",
          es: "La paleobiogeografía reconstruye cómo las especies estaban distribuidas a través de continentes antiguos y cómo la deriva continental afectó la evolución y los patrones de biodiversidad.",
          de: "Paläobiogeographie rekonstruiert, wie Arten über alte Kontinente verteilt waren und wie die Kontinentaldrift Evolution und Biodiversitätsmuster beeinflusste.",
          nl: "Paleobiogeografie reconstrueert hoe soorten verspreid waren over oude continenten en hoe continentale drift evolutie en biodiversiteitspatronen beïnvloedde."
        }
      },
      {
        question: {
          en: "What are bone modification features that indicate scavenging behavior?",
          es: "¿Qué son las características de modificación ósea que indican comportamiento carroñero?",
          de: "Was sind Knochenmodifikationsmerkmale, die Aasfressverhalten anzeigen?",
          nl: "Wat zijn botmodificatiekenmerken die aasgedrag aangeven?"
        },
        options: [
          { en: "Tooth marks, gnaw marks, and bone breakage patterns", es: "Marcas de dientes, marcas de roer y patrones de rotura ósea", de: "Zahnspuren, Nagespuren und Knochenbruchmuster", nl: "Tandsporen, knaagsporen en botbreukpatronen" },
          { en: "Only bone color changes", es: "Solo cambios de color del hueso", de: "Nur Knochenfarbveränderungen", nl: "Alleen botkleurveranderingen" },
          { en: "Bone growth patterns", es: "Patrones de crecimiento óseo", de: "Knochenwachstumsmuster", nl: "Botgroeipatronen" },
          { en: "Mineral replacement only", es: "Solo reemplazo mineral", de: "Nur Mineralersatz", nl: "Alleen mineraalvervanging" }
        ],
        correct: 0,
        explanation: {
          en: "Taphonomic analysis of bite marks, gnaw patterns, and bone fractures can distinguish between different scavengers and reveal ancient food web interactions.",
          es: "El análisis tafonómico de marcas de mordeduras, patrones de roer y fracturas óseas puede distinguir entre diferentes carroñeros y revelar interacciones antiguas de redes alimentarias.",
          de: "Taphonomische Analyse von Bissspuren, Nagemustern und Knochenbrüchen kann zwischen verschiedenen Aasfressern unterscheiden und alte Nahrungsnetz-Interaktionen enthüllen.",
          nl: "Tafonomische analyse van bijtwonden, knaagpatronen en botbreuken kan onderscheid maken tussen verschillende aaseters en oude voedselwebinteracties onthullen."
        }
      },
      {
        question: {
          en: "What is paleoecology?",
          es: "¿Qué es la paleoecología?",
          de: "Was ist Paläoökologie?",
          nl: "Wat is paleoecologie?"
        },
        options: [
          { en: "Study of ancient ecosystems and environmental interactions", es: "Estudio de ecosistemas antiguos e interacciones ambientales", de: "Studie alter Ökosysteme und Umweltinteraktionen", nl: "Studie van oude ecosystemen en omgevingsinteracties" },
          { en: "Study of individual fossil specimens", es: "Estudio de especímenes fósiles individuales", de: "Studie einzelner Fossilexemplare", nl: "Studie van individuele fossielspecimens" },
          { en: "Study of rock mineral content", es: "Estudio del contenido mineral de rocas", de: "Studie des Mineralgehalts von Gestein", nl: "Studie van gesteentemineraalgehalte" },
          { en: "Study of fossil collection methods", es: "Estudio de métodos de colección de fósiles", de: "Studie fossiler Sammelmethoden", nl: "Studie van fossielcollectiemethoden" }
        ],
        correct: 0,
        explanation: {
          en: "Paleoecology reconstructs ancient environments, communities, and ecological relationships between organisms using fossil evidence and sedimentological data.",
          es: "La paleoecología reconstruye ambientes antiguos, comunidades y relaciones ecológicas entre organismos usando evidencia fósil y datos sedimentológicos.",
          de: "Paläoökologie rekonstruiert alte Umwelten, Gemeinschaften und ökologische Beziehungen zwischen Organismen unter Verwendung fossiler Beweise und sedimentologischer Daten.",
          nl: "Paleoecologie reconstrueert oude omgevingen, gemeenschappen en ecologische relaties tussen organismen met gebruik van fossielbewijzen en sedimentologische gegevens."
        }
      },
      {
        question: {
          en: "What is the concept of evolutionary developmental biology (evo-devo) in paleontology?",
          es: "¿Qué es el concepto de biología evolutiva del desarrollo (evo-devo) en paleontología?",
          de: "Was ist das Konzept der evolutionären Entwicklungsbiologie (Evo-Devo) in der Paläontologie?",
          nl: "Wat is het concept van evolutionaire ontwikkelingsbiologie (evo-devo) in de paleontologie?"
        },
        options: [
          { en: "Study of how developmental processes changed during evolution", es: "Estudio de cómo los procesos de desarrollo cambiaron durante la evolución", de: "Studie darüber, wie sich Entwicklungsprozesse während der Evolution veränderten", nl: "Studie van hoe ontwikkelingsprocessen veranderden tijdens evolutie" },
          { en: "Classification of evolutionary stages", es: "Clasificación de etapas evolutivas", de: "Klassifizierung evolutionärer Stadien", nl: "Classificatie van evolutionaire stadia" },
          { en: "Dating of evolutionary events", es: "Datación de eventos evolutivos", de: "Datierung evolutionärer Ereignisse", nl: "Datering van evolutionaire gebeurtenissen" },
          { en: "Study of fossil preservation", es: "Estudio de preservación de fósiles", de: "Studie der Fossilerhaltung", nl: "Studie van fossielpreservatie" }
        ],
        correct: 0,
        explanation: {
          en: "Evo-devo in paleontology examines how changes in developmental genes and processes drove major evolutionary transitions, such as the evolution of flight in dinosaurs.",
          es: "Evo-devo en paleontología examina cómo los cambios en genes y procesos de desarrollo impulsaron transiciones evolutivas importantes, como la evolución del vuelo en dinosaurios.",
          de: "Evo-Devo in der Paläontologie untersucht, wie Veränderungen in Entwicklungsgenen und -prozessen große evolutionäre Übergänge vorantrieben, wie die Evolution des Flugs bei Dinosauriern.",
          nl: "Evo-devo in paleontologie onderzoekt hoe veranderingen in ontwikkelingsgenen en -processen belangrijke evolutionaire overgangen aandreven, zoals de evolutie van vliegen bij dinosaurussen."
        }
      },
      {
        question: {
          en: "What information can tooth wear patterns provide about dinosaur behavior?",
          es: "¿Qué información pueden proporcionar los patrones de desgaste dental sobre el comportamiento de los dinosaurios?",
          de: "Welche Informationen können Zahnabnutzungsmuster über das Verhalten von Dinosauriern liefern?",
          nl: "Welke informatie kunnen tandslijtagepartronen verschaffen over dinosaurusgedrag?"
        },
        options: [
          { en: "Feeding strategies and food processing methods", es: "Estrategias de alimentación y métodos de procesamiento de alimentos", de: "Fütterungsstrategien und Nahrungsverarbeitungsmethoden", nl: "Voedingsstrategieën en voedselverwerkmethoden" },
          { en: "Exact lifespan in years", es: "Esperanza de vida exacta en años", de: "Genaue Lebensspanne in Jahren", nl: "Exacte levensduur in jaren" },
          { en: "Geographic migration patterns", es: "Patrones de migración geográfica", de: "Geografische Migrationsmuster", nl: "Geografische migratiepatronen" },
          { en: "Social hierarchy positions", es: "Posiciones de jerarquía social", de: "Soziale Hierarchiepositionen", nl: "Sociale hiërarchieposities" }
        ],
        correct: 0,
        explanation: {
          en: "Microscopic analysis of tooth wear reveals how dinosaurs processed food, whether they stripped vegetation, crushed bones, or used other specialized feeding behaviors.",
          es: "El análisis microscópico del desgaste dental revela cómo los dinosaurios procesaban la comida, si despojaban vegetación, trituraban huesos o usaban otros comportamientos de alimentación especializados.",
          de: "Mikroskopische Analyse von Zahnabnutzung enthüllt, wie Dinosaurier Nahrung verarbeiteten, ob sie Vegetation abstreiften, Knochen zerkleinerten oder andere spezialisierte Fütterungsverhalten verwendeten.",
          nl: "Microscopische analyse van tandslijtage onthult hoe dinosaurussen voedsel verwerkten, of ze vegetatie afstroopten, botten verbrijzelden of andere gespecialiseerde voedingsgedragingen gebruikten."
        }
      },
      {
        question: {
          en: "What is actualistic taphonomy?",
          es: "¿Qué es la tafonomía actualística?",
          de: "Was ist aktualistische Taphonomie?",
          nl: "Wat is actualistische tafonomie?"
        },
        options: [
          { en: "Study of modern decay processes to understand fossil formation", es: "Estudio de procesos de descomposición modernos para entender la formación de fósiles", de: "Studie moderner Zerfallsprozesse zum Verständnis der Fossilbildung", nl: "Studie van moderne vervalprocessen om fossilvorming te begrijpen" },
          { en: "Study of the most recent fossils only", es: "Estudio solo de los fósiles más recientes", de: "Studie nur der neuesten Fossilien", nl: "Studie van alleen de meest recente fossielen" },
          { en: "Study of laboratory-created fossils", es: "Estudio de fósiles creados en laboratorio", de: "Studie laborerstellter Fossilien", nl: "Studie van laboratorium-gecreëerde fossielen" },
          { en: "Study of fossil fakes and forgeries", es: "Estudio de fósiles falsos y falsificaciones", de: "Studie von gefälschten Fossilien und Fälschungen", nl: "Studie van nep-fossielen en vervalsingen" }
        ],
        correct: 0,
        explanation: {
          en: "Actualistic taphonomy studies how organisms decay and become fossilized in modern environments to better interpret ancient fossil assemblages.",
          es: "La tafonomía actualística estudia cómo los organismos se descomponen y se fosilizan en ambientes modernos para interpretar mejor los conjuntos fósiles antiguos.",
          de: "Aktualistische Taphonomie studiert, wie Organismen in modernen Umgebungen zerfallen und fossilieren, um alte Fossilvergesellschaftungen besser zu interpretieren.",
          nl: "Actualistische tafonomie bestudeert hoe organismen vergaan en gefossiliseerd worden in moderne omgevingen om oude fossielassemblages beter te interpreteren."
        }
      },
      {
        question: {
          en: "What are fluctuating asymmetry patterns in fossils?",
          es: "¿Qué son los patrones de asimetría fluctuante en los fósiles?",
          de: "Was sind fluktuierende Asymmetriemuster in Fossilien?",
          nl: "Wat zijn fluctuerende asymmetriepatronen in fossielen?"
        },
        options: [
          { en: "Random deviations from perfect bilateral symmetry indicating developmental stress", es: "Desviaciones aleatorias de la simetría bilateral perfecta que indican estrés de desarrollo", de: "Zufällige Abweichungen von perfekter bilateraler Symmetrie, die Entwicklungsstress anzeigen", nl: "Willekeurige afwijkingen van perfecte bilaterale symmetrie die ontwikkelingsstress aangeven" },
          { en: "Intentional asymmetric body plans", es: "Planes corporales asimétricos intencionales", de: "Absichtliche asymmetrische Körperpläne", nl: "Opzettelijke asymmetrische lichaamsplannen" },
          { en: "Fossilization artifacts", es: "Artefactos de fosilización", de: "Fossilisationsartefakte", nl: "Fossilisatieartefacten" },
          { en: "Sexual dimorphism features", es: "Características de dimorfismo sexual", de: "Merkmale des Geschlechtsdimorphismus", nl: "Seksuele dimorfismefenmerken" }
        ],
        correct: 0,
        explanation: {
          en: "Fluctuating asymmetry measures small random deviations from perfect symmetry, providing insights into developmental instability and environmental stress during growth.",
          es: "La asimetría fluctuante mide pequeñas desviaciones aleatorias de la simetría perfecta, proporcionando perspectivas sobre la inestabilidad del desarrollo y el estrés ambiental durante el crecimiento.",
          de: "Fluktuierende Asymmetrie misst kleine zufällige Abweichungen von perfekter Symmetrie und bietet Einblicke in Entwicklungsinstabilität und Umweltstress während des Wachstums.",
          nl: "Fluctuerende asymmetrie meet kleine willekeurige afwijkingen van perfecte symmetrie, wat inzichten geeft in ontwikkelingsinstabiliteit en omgevingsstress tijdens groei."
        }
      },
      {
        question: {
          en: "What is phylogenetic paleobiology?",
          es: "¿Qué es la paleobiología filogenética?",
          de: "Was ist phylogenetische Paläobiologie?",
          nl: "Wat is fylogenetische paleobiologie?"
        },
        options: [
          { en: "Integration of evolutionary trees with fossil data to understand biodiversity patterns", es: "Integración de árboles evolutivos con datos fósiles para entender patrones de biodiversidad", de: "Integration evolutionärer Bäume mit Fossildaten zum Verständnis von Biodiversitätsmustern", nl: "Integratie van evolutionaire bomen met fossielgegevens om biodiversiteitspatronen te begrijpen" },
          { en: "Classification of fossil shapes", es: "Clasificación de formas fósiles", de: "Klassifizierung fossiler Formen", nl: "Classificatie van fossielvormen" },
          { en: "Study of fossil DNA only", es: "Estudio solo de ADN fósil", de: "Studie nur fossiler DNA", nl: "Studie van alleen fossiel-DNA" },
          { en: "Dating of evolutionary events", es: "Datación de eventos evolutivos", de: "Datierung evolutionärer Ereignisse", nl: "Datering van evolutionaire gebeurtenissen" }
        ],
        correct: 0,
        explanation: {
          en: "Phylogenetic paleobiology combines molecular phylogenies with fossil data to understand macroevolutionary patterns, extinction rates, and evolutionary tempo.",
          es: "La paleobiología filogenética combina filogenias moleculares con datos fósiles para entender patrones macroevolutivos, tasas de extinción y tempo evolutivo.",
          de: "Phylogenetische Paläobiologie kombiniert molekulare Phylogenien mit Fossildaten, um makroevolutionäre Muster, Aussterberaten und evolutionäres Tempo zu verstehen.",
          nl: "Fylogenetische paleobiologie combineert moleculaire fylogeniën met fossielgegevens om macro-evolutionaire patronen, uitsterfsnelheden en evolutionair tempo te begrijpen."
        }
      },
      {
        question: {
          en: "What can pathological conditions in dinosaur fossils reveal?",
          es: "¿Qué pueden revelar las condiciones patológicas en los fósiles de dinosaurios?",
          de: "Was können pathologische Zustände in Dinosaurier-Fossilien enthüllen?",
          nl: "Wat kunnen pathologische condities in dinosaurusfossielen onthullen?"
        },
        options: [
          { en: "Evidence of disease, injury, and healing processes", es: "Evidencia de enfermedad, lesión y procesos de curación", de: "Beweise für Krankheit, Verletzung und Heilungsprozesse", nl: "Bewijs van ziekte, letsel en genezingsprocessen" },
          { en: "Only information about fossil age", es: "Solo información sobre la edad del fósil", de: "Nur Informationen über das Fossilalter", nl: "Alleen informatie over fossielleeftijd" },
          { en: "Geographic location data", es: "Datos de ubicación geográfica", de: "Geografische Standortdaten", nl: "Geografische locatiegegevens" },
          { en: "Preservation quality only", es: "Solo calidad de preservación", de: "Nur Erhaltungsqualität", nl: "Alleen preservatiekwaliteit" }
        ],
        correct: 0,
        explanation: {
          en: "Paleopathology studies diseases, injuries, parasites, and healing in fossil bones, providing insights into dinosaur health, behavior, and life history.",
          es: "La paleopatología estudia enfermedades, lesiones, parásitos y curación en huesos fósiles, proporcionando perspectivas sobre la salud, comportamiento e historia de vida de los dinosaurios.",
          de: "Paläopathologie studiert Krankheiten, Verletzungen, Parasiten und Heilung in fossilen Knochen und bietet Einblicke in Gesundheit, Verhalten und Lebensgeschichte von Dinosauriern.",
          nl: "Paleopathologie bestudeert ziekten, letsel, parasieten en genezing in fossiele botten, wat inzichten geeft in dinosaurusgezondheid, gedrag en levensgeschiedenis."
        }
      },
      {
        question: {
          en: "What is geometric morphometrics in paleontology?",
          es: "¿Qué es la morfometría geométrica en paleontología?",
          de: "Was ist geometrische Morphometrik in der Paläontologie?",
          nl: "Wat is geometrische morfometrie in de paleontologie?"
        },
        options: [
          { en: "Quantitative analysis of shape changes using landmark coordinates", es: "Análisis cuantitativo de cambios de forma usando coordenadas de puntos de referencia", de: "Quantitative Analyse von Formveränderungen unter Verwendung von Landmarkenkoordinaten", nl: "Kwantitatieve analyse van vormveranderingen met gebruik van landmarkcoördinaten" },
          { en: "Simple measurement of fossil lengths", es: "Medición simple de longitudes de fósiles", de: "Einfache Messung fossiler Längen", nl: "Eenvoudige meting van fossiellengte" },
          { en: "Classification by fossil weight", es: "Clasificación por peso de fósil", de: "Klassifizierung nach Fossilgewicht", nl: "Classificatie op fossielgewicht" },
          { en: "Description of fossil colors", es: "Descripción de colores fósiles", de: "Beschreibung fossiler Farben", nl: "Beschrijving van fossielkleuren" }
        ],
        correct: 0,
        explanation: {
          en: "Geometric morphometrics uses coordinate data from anatomical landmarks to statistically analyze shape variation, growth patterns, and evolutionary changes in fossils.",
          es: "La morfometría geométrica usa datos de coordenadas de puntos de referencia anatómicos para analizar estadísticamente la variación de forma, patrones de crecimiento y cambios evolutivos en fósiles.",
          de: "Geometrische Morphometrik verwendet Koordinatendaten anatomischer Landmarken, um Formvariation, Wachstumsmuster und evolutionäre Veränderungen in Fossilien statistisch zu analysieren.",
          nl: "Geometrische morfometrie gebruikt coördinaatgegevens van anatomische landmarken om vormvariatie, groeipatronen en evolutionaire veranderingen in fossielen statistisch te analyseren."
        }
      },
      {
        question: {
          en: "What challenges exist in molecular paleontology studies of dinosaur fossils?",
          es: "¿Qué desafíos existen en los estudios de paleontología molecular de fósiles de dinosaurios?",
          de: "Welche Herausforderungen bestehen in molekularen Paläontologie-Studien von Dinosaurier-Fossilien?",
          nl: "Welke uitdagingen bestaan er in moleculaire paleontologiestudies van dinosaurusfossielen?"
        },
        options: [
          { en: "DNA degradation over millions of years and contamination issues", es: "Degradación del ADN durante millones de años y problemas de contaminación", de: "DNA-Abbau über Millionen Jahre und Kontaminationsprobleme", nl: "DNA-degradatie over miljoenen jaren en contaminatieproblemen" },
          { en: "Fossils are too large to analyze", es: "Los fósiles son demasiado grandes para analizar", de: "Fossilien sind zu groß zum Analysieren", nl: "Fossielen zijn te groot om te analyseren" },
          { en: "Lack of microscopes powerful enough", es: "Falta de microscopios lo suficientemente potentes", de: "Mangel an ausreichend starken Mikroskopen", nl: "Gebrek aan voldoende krachtige microscopen" },
          { en: "Fossils are too expensive to study", es: "Los fósiles son demasiado caros de estudiar", de: "Fossilien sind zu teuer zum Studieren", nl: "Fossielen zijn te duur om te bestuderen" }
        ],
        correct: 0,
        explanation: {
          en: "DNA and other biomolecules typically degrade within thousands of years, making authentic preservation over tens of millions of years extremely unlikely, plus modern contamination is a constant concern.",
          es: "El ADN y otras biomoléculas típicamente se degradan en miles de años, haciendo la preservación auténtica durante decenas de millones de años extremadamente improbable, además la contaminación moderna es una preocupación constante.",
          de: "DNA und andere Biomoleküle zerfallen typischerweise innerhalb von Tausenden von Jahren, was authentische Erhaltung über zig Millionen Jahre extrem unwahrscheinlich macht, außerdem ist moderne Kontamination ein ständiges Problem.",
          nl: "DNA en andere biomoleculen degraderen typisch binnen duizenden jaren, waardoor authentieke bewaring over tientallen miljoenen jaren extreem onwaarschijnlijk is, plus moderne contaminatie is een constante zorg."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
