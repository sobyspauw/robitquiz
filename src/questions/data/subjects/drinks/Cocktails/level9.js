// Cocktails Quiz - Level 9
(function() {
  const level9 = {
    name: {
          "en": "Master-Level Cocktail Expertise & Innovation",
          "es": "Experiencia e Innovación de Cócteles a Nivel Maestro",
          "de": "Meisterschafts-Cocktail-Expertise & Innovation",
          "nl": "Meester-Level Cocktail Expertise & Innovatie"
    },
    questions: [
      {
        question: {
                  "en": "What is 'sous vide' cocktail preparation and how does it differ from traditional infusion methods?",
                  "es": "¿Qué es la preparación de cócteles 'sous vide' y cómo difiere de los métodos tradicionales de infusión?",
                  "de": "Was ist 'Sous Vide' Cocktail-Zubereitung und wie unterscheidet sie sich von traditionellen Infusionsmethoden?",
                  "nl": "Wat is 'sous vide' cocktailbereiding en hoe verschilt het van traditionele infusiemethoden?"
        },
        options: [
        {
                  "en": "Vacuum-sealed controlled temperature infusion allowing precise extraction without degradation",
                  "es": "Infusión a temperatura controlada sellada al vacío permitiendo extracción precisa sin degradación",
                  "de": "Vakuumversiegelte kontrollierte Temperatur-Infusion ermöglicht präzise Extraktion ohne Abbau",
                  "nl": "Vacuüm verzegelde gecontroleerde temperatuur infusie die precieze extractie mogelijk maakt zonder degradatie"
        },
        {
                  "en": "Cold brewing technique below 5°C",
                  "es": "Técnica de preparación fría por debajo de 5°C",
                  "de": "Kaltbrühverfahren unter 5°C",
                  "nl": "Koude brew techniek onder 5°C"
        },
        {
                  "en": "Traditional shaking method from France",
                  "es": "Método de agitado tradicional de Francia",
                  "de": "Traditionelle Schüttelmethode aus Frankreich",
                  "nl": "Traditionele schudmethode uit Frankrijk"
        },
        {
                  "en": "French cooking method using only wine",
                  "es": "Método de cocina francés usando solo vino",
                  "de": "Französische Kochmethode nur mit Wein",
                  "nl": "Franse kookmethode met alleen wijn"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sous vide cocktail preparation involves vacuum-sealing ingredients with spirits or other liquids and heating them at precisely controlled low temperatures (typically 55-65°C) for extended periods. This technique allows for rapid, consistent infusions while preventing alcohol evaporation and ingredient degradation that occurs with traditional heating. It enables complex flavor extractions from delicate ingredients like herbs, fruits, or spices in hours rather than days or weeks. The controlled environment ensures reproducible results and can create flavors impossible through conventional methods.",
                  "es": "La preparación de cócteles sous vide implica sellar al vacío ingredientes con licores u otros líquidos y calentarlos a temperaturas bajas precisamente controladas (típicamente 55-65°C) por períodos extendidos. Esta técnica permite infusiones rápidas y consistentes mientras previene evaporación del alcohol y degradación de ingredientes que ocurre con calentamiento tradicional. Permite extracciones de sabor complejas de ingredientes delicados como hierbas, frutas o especias en horas en lugar de días o semanas. El ambiente controlado asegura resultados reproducibles y puede crear sabores imposibles a través de métodos convencionales.",
                  "de": "Sous Vide Cocktail-Zubereitung beinhaltet Vakuumversiegelung von Zutaten mit Spirituosen oder anderen Flüssigkeiten und Erhitzung bei präzise kontrollierten niedrigen Temperaturen (typisch 55-65°C) für längere Zeiträume. Diese Technik ermöglicht schnelle, konsistente Infusionen während Alkoholverdampfung und Zutatenzersetzung verhindert wird, die bei traditioneller Erhitzung auftritt. Sie ermöglicht komplexe Geschmacksextraktionen aus empfindlichen Zutaten wie Kräutern, Früchten oder Gewürzen in Stunden statt Tagen oder Wochen. Die kontrollierte Umgebung gewährleistet reproduzierbare Ergebnisse und kann Aromen schaffen, die durch konventionelle Methoden unmöglich sind.",
                  "nl": "Sous vide cocktailbereiding houdt in dat ingrediënten vacuüm worden verzegeld met sterke dranken of andere vloeistoffen en verwarmd bij precies gecontroleerde lage temperaturen (typisch 55-65°C) voor langere perioden. Deze techniek maakt snelle, consistente infusies mogelijk terwijl alcoholverdamping en ingrediënt degradatie wordt voorkomen die optreedt bij traditionele verwarming. Het maakt complexe smaakextracties mogelijk van delicate ingrediënten zoals kruiden, fruit of specerijen in uren in plaats van dagen of weken. De gecontroleerde omgeving verzekert reproduceerbare resultaten en kan smaken creëren die onmogelijk zijn door conventionele methoden."
        }
      },
      {
        question: {
                  "en": "What is 'rotary evaporation' (rotavap) in cocktail ingredient preparation?",
                  "es": "¿Qué es la 'evaporación rotatoria' (rotavap) en la preparación de ingredientes para cócteles?",
                  "de": "Was ist 'Rotationsverdampfung' (Rotavap) in der Cocktail-Zutatenvorbereitung?",
                  "nl": "Wat is 'rotatie verdamping' (rotavap) in cocktail ingrediënt voorbereiding?"
        },
        options: [
        {
                  "en": "Spinning cocktail shakers for better mixing",
                  "es": "Girar cocteleras para mejor mezcla",
                  "de": "Cocktail-Shaker drehen für besseres Mischen",
                  "nl": "Cocktail shakers draaien voor beter mengen"
        },
        {
                  "en": "Vacuum distillation at low temperatures to separate and concentrate volatile compounds",
                  "es": "Destilación al vacío a bajas temperaturas para separar y concentrar compuestos volátiles",
                  "de": "Vakuumdestillation bei niedrigen Temperaturen zur Trennung und Konzentration flüchtiger Verbindungen",
                  "nl": "Vacuüm distillatie bij lage temperaturen om vluchtige verbindingen te scheiden en concentreren"
        },
        {
                  "en": "Rotating garnishes for presentation",
                  "es": "Rotar guarniciones para presentación",
                  "de": "Garnituren für Präsentation rotieren",
                  "nl": "Garneringen roteren voor presentatie"
        },
        {
                  "en": "Circular motion stirring technique",
                  "es": "Técnica de revolver con movimiento circular",
                  "de": "Kreisbewegung-Rührtechnik",
                  "nl": "Circulaire beweging roertechniek"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Rotary evaporation uses vacuum distillation at reduced pressures and temperatures to gently separate volatile compounds from liquids. In cocktail applications, this allows bartenders to capture delicate aromatic compounds from fruits, herbs, or other ingredients without heat damage. The process can create highly concentrated essences, distilled spirits variations, or even 'impossible' combinations like clear fruit essences. Rotavap enables isolation of specific flavor components, creation of layered taste experiences, and development of unique ingredients that would be impossible through traditional methods.",
                  "es": "La evaporación rotatoria usa destilación al vacío a presiones y temperaturas reducidas para separar suavemente compuestos volátiles de líquidos. En aplicaciones de cócteles, esto permite a los bartenders capturar compuestos aromáticos delicados de frutas, hierbas u otros ingredientes sin daño por calor. El proceso puede crear esencias altamente concentradas, variaciones de licores destilados o incluso combinaciones 'imposibles' como esencias de frutas claras. Rotavap permite aislamiento de componentes de sabor específicos, creación de experiencias de sabor en capas y desarrollo de ingredientes únicos que serían imposibles a través de métodos tradicionales.",
                  "de": "Rotationsverdampfung verwendet Vakuumdestillation bei reduzierten Drücken und Temperaturen zur sanften Trennung flüchtiger Verbindungen aus Flüssigkeiten. In Cocktail-Anwendungen ermöglicht dies Bartendern, empfindliche aromatische Verbindungen aus Früchten, Kräutern oder anderen Zutaten ohne Hitzeschäden einzufangen. Der Prozess kann hochkonzentrierte Essenzen, destillierte Spirituosenvariationen oder sogar 'unmögliche' Kombinationen wie klare Fruchtessenzen schaffen. Rotavap ermöglicht Isolation spezifischer Geschmackskomponenten, Schaffung geschichteter Geschmackserfahrungen und Entwicklung einzigartiger Zutaten, die durch traditionelle Methoden unmöglich wären.",
                  "nl": "Rotatie verdamping gebruikt vacuüm distillatie bij verminderde drukken en temperaturen om vluchtige verbindingen zachtjes te scheiden van vloeistoffen. In cocktail toepassingen stelt dit bartenders in staat delicate aromatische verbindingen te vangen van fruit, kruiden of andere ingrediënten zonder hitteschade. Het proces kan zeer geconcentreerde essences creëren, gedistilleerde sterke dranken variaties of zelfs 'onmogelijke' combinaties zoals heldere fruitessences. Rotavap maakt isolatie van specifieke smaakcomponenten mogelijk, creatie van gelaagde smaakervaringen en ontwikkeling van unieke ingrediënten die onmogelijk zouden zijn door traditionele methoden."
        }
      },
      {
        question: {
                  "en": "What is 'liquid nitrogen' used for in molecular mixology and what safety considerations apply?",
                  "es": "¿Para qué se usa el 'nitrógeno líquido' en mixología molecular y qué consideraciones de seguridad se aplican?",
                  "de": "Wofür wird 'flüssiger Stickstoff' in der molekularen Mixologie verwendet und welche Sicherheitsüberlegungen gelten?",
                  "nl": "Waarvoor wordt 'vloeibare stikstof' gebruikt in moleculaire mixologie en welke veiligheidsoverwegingen gelden?"
        },
        options: [
        {
                  "en": "Preserving cocktails for weeks",
                  "es": "Conservar cócteles por semanas",
                  "de": "Cocktails wochenlang konservieren",
                  "nl": "Cocktails weken bewaren"
        },
        {
                  "en": "Adding nitrogen flavor to cocktails",
                  "es": "Añadir sabor de nitrógeno a cócteles",
                  "de": "Stickstoffgeschmack zu Cocktails hinzufügen",
                  "nl": "Stikstof smaak toevoegen aan cocktails"
        },
        {
                  "en": "Flash-freezing for texture effects and dramatic presentation, requires proper ventilation and safety equipment",
                  "es": "Congelación instantánea para efectos de textura y presentación dramática, requiere ventilación apropiada y equipo de seguridad",
                  "de": "Schockgefrieren für Textureffekte und dramatische Präsentation, erfordert ordnungsgemäße Belüftung und Sicherheitsausrüstung",
                  "nl": "Flash-vriezen voor textuureffecten en dramatische presentatie, vereist juiste ventilatie en veiligheidsuitrusting"
        },
        {
                  "en": "Carbonating drinks naturally",
                  "es": "Carbonatar bebidas naturalmente",
                  "de": "Getränke natürlich karbonisieren",
                  "nl": "Drankjes natuurlijk koolzuur geven"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Liquid nitrogen (-196°C/-321°F) is used in molecular mixology for instant freezing effects, creating unique textures like frozen mousses, shattered cocktail elements, or smoking presentations. It can freeze cocktail components instantly, create dramatic vapor effects, or make 'caviar' pearls from liquids. However, it requires extreme safety precautions: proper ventilation (nitrogen displacement can cause asphyxiation), insulated gloves, eye protection, and ensuring all liquid nitrogen evaporates before consumption. Only food-grade liquid nitrogen should be used, and bartenders need specialized training for safe handling.",
                  "es": "El nitrógeno líquido (-196°C/-321°F) se usa en mixología molecular para efectos de congelación instantánea, creando texturas únicas como mousses congelados, elementos de cóctel fragmentados o presentaciones humeantes. Puede congelar componentes de cócteles instantáneamente, crear efectos dramáticos de vapor o hacer perlas 'caviar' de líquidos. Sin embargo, requiere precauciones de seguridad extremas: ventilación apropiada (el desplazamiento de nitrógeno puede causar asfixia), guantes aislados, protección ocular y asegurar que todo el nitrógeno líquido se evapore antes del consumo. Solo debe usarse nitrógeno líquido grado alimentario, y los bartenders necesitan entrenamiento especializado para manejo seguro.",
                  "de": "Flüssiger Stickstoff (-196°C/-321°F) wird in molekularer Mixologie für Sofortgefriereffekte verwendet, schafft einzigartige Texturen wie gefrorene Mousses, zerbrochene Cocktail-Elemente oder rauchende Präsentationen. Er kann Cocktail-Komponenten sofort einfrieren, dramatische Dampfeffekte erzeugen oder 'Kaviar'-Perlen aus Flüssigkeiten machen. Er erfordert jedoch extreme Sicherheitsvorkehrungen: ordnungsgemäße Belüftung (Stickstoffverdrängung kann Erstickung verursachen), isolierte Handschuhe, Augenschutz und Sicherstellung, dass aller flüssige Stickstoff vor Verzehr verdampft. Nur lebensmittelechter flüssiger Stickstoff sollte verwendet werden, und Bartender benötigen spezialisierte Schulung für sicheren Umgang.",
                  "nl": "Vloeibare stikstof (-196°C/-321°F) wordt gebruikt in moleculaire mixologie voor directe vrieseffecten, wat unieke texturen creëert zoals bevroren mousses, verbrijzelde cocktail elementen of rokende presentaties. Het kan cocktail componenten direct bevriezen, dramatische dampeffecten creëren of 'kaviaar' parels maken van vloeistoffen. Het vereist echter extreme veiligheidsvoorzorgen: juiste ventilatie (stikstof verplaatsing kan verstikking veroorzaken), geïsoleerde handschoenen, oogbescherming en ervoor zorgen dat alle vloeibare stikstof verdampt voor consumptie. Alleen voedselkwaliteit vloeibare stikstof moet worden gebruikt, en bartenders hebben gespecialiseerde training nodig voor veilige hantering."
        }
      },
      {
        question: {
                  "en": "What is 'fermentation' in cocktail ingredients and how do bartenders control the process?",
                  "es": "¿Qué es la 'fermentación' en ingredientes de cócteles y cómo controlan los bartenders el proceso?",
                  "de": "Was ist 'Fermentation' in Cocktail-Zutaten und wie kontrollieren Bartender den Prozess?",
                  "nl": "Wat is 'fermentatie' in cocktail ingrediënten en hoe controleren bartenders het proces?"
        },
        options: [
        {
                  "en": "Natural spoilage of ingredients",
                  "es": "Deterioro natural de ingredientes",
                  "de": "Natürlicher Verderb von Zutaten",
                  "nl": "Natuurlijk bederf van ingrediënten"
        },
        {
                  "en": "Adding yeast to any cocktail",
                  "es": "Añadir levadura a cualquier cóctel",
                  "de": "Hefe zu jedem Cocktail hinzufügen",
                  "nl": "Gist toevoegen aan elke cocktail"
        },
        {
                  "en": "Aging spirits in barrels only",
                  "es": "Envejecer licores solo en barricas",
                  "de": "Spirituosen nur in Fässern reifen",
                  "nl": "Sterke dranken alleen in vaten rijpen"
        },
        {
                  "en": "Controlled microbial transformation creating complex flavors through pH, temperature, and time management",
                  "es": "Transformación microbiana controlada creando sabores complejos a través de manejo de pH, temperatura y tiempo",
                  "de": "Kontrollierte mikrobielle Transformation, die komplexe Aromen durch pH-, Temperatur- und Zeitmanagement schafft",
                  "nl": "Gecontroleerde microbiële transformatie die complexe smaken creëert door pH-, temperatuur- en tijdbeheer"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Controlled fermentation in cocktail preparation involves deliberately cultivating beneficial microorganisms (yeasts, bacteria, or koji) to transform ingredients and create complex flavors. Bartenders control fermentation through precise pH monitoring (typically 3.5-4.5), temperature regulation (varies by organism), timing (hours to weeks), and ingredient selection. This can create fermented fruit cordials, vegetable-based cocktail components, kombucha-style mixers, or even fermented garnishes. The process requires understanding of food safety, sterile technique, and microbiology to prevent harmful bacteria while encouraging desired flavors.",
                  "es": "La fermentación controlada en preparación de cócteles implica cultivar deliberadamente microorganismos beneficiosos (levaduras, bacterias o koji) para transformar ingredientes y crear sabores complejos. Los bartenders controlan la fermentación a través de monitoreo preciso del pH (típicamente 3.5-4.5), regulación de temperatura (varía por organismo), tiempo (horas a semanas) y selección de ingredientes. Esto puede crear cordiales de frutas fermentadas, componentes de cócteles basados en vegetales, mezcladores estilo kombucha o incluso guarniciones fermentadas. El proceso requiere entendimiento de seguridad alimentaria, técnica estéril y microbiología para prevenir bacterias dañinas mientras se fomentan sabores deseados.",
                  "de": "Kontrollierte Fermentation in Cocktail-Zubereitung beinhaltet bewusste Kultivierung nützlicher Mikroorganismen (Hefen, Bakterien oder Koji) zur Transformation von Zutaten und Schaffung komplexer Aromen. Bartender kontrollieren Fermentation durch präzise pH-Überwachung (typisch 3,5-4,5), Temperaturregulierung (variiert je Organismus), Timing (Stunden bis Wochen) und Zutatenselektion. Dies kann fermentierte Fruchtsiruppe, gemüsebasierte Cocktail-Komponenten, Kombucha-Style-Mixer oder sogar fermentierte Garnituren schaffen. Der Prozess erfordert Verständnis von Lebensmittelsicherheit, steriler Technik und Mikrobiologie zur Verhinderung schädlicher Bakterien während Förderung gewünschter Aromen.",
                  "nl": "Gecontroleerde fermentatie in cocktailbereiding houdt in dat opzettelijk gunstige micro-organismen (gisten, bacteriën of koji) worden gekweekt om ingrediënten te transformeren en complexe smaken te creëren. Bartenders controleren fermentatie door precieze pH monitoring (typisch 3,5-4,5), temperatuurregulatie (varieert per organisme), timing (uren tot weken) en ingrediënt selectie. Dit kan gefermenteerde fruitcordials creëren, groente-gebaseerde cocktail componenten, kombucha-stijl mixers of zelfs gefermenteerde garneringen. Het proces vereist begrip van voedselveiligheid, steriele techniek en microbiologie om schadelijke bacteriën te voorkomen terwijl gewenste smaken worden aangemoedigd."
        }
      },
      {
        question: {
                  "en": "What is 'ultrasonic extraction' and how does it revolutionize cocktail ingredient preparation?",
                  "es": "¿Qué es la 'extracción ultrasónica' y cómo revoluciona la preparación de ingredientes para cócteles?",
                  "de": "Was ist 'Ultraschallextraktion' und wie revolutioniert sie die Cocktail-Zutatenvorbereitung?",
                  "nl": "Wat is 'ultrasone extractie' en hoe revolutioneert het cocktail ingrediënt voorbereiding?"
        },
        options: [
        {
                  "en": "High-frequency sound waves rapidly extract flavors and compounds in minutes instead of hours or days",
                  "es": "Ondas de sonido de alta frecuencia extraen rápidamente sabores y compuestos en minutos en lugar de horas o días",
                  "de": "Hochfrequente Schallwellen extrahieren schnell Aromen und Verbindungen in Minuten statt Stunden oder Tagen",
                  "nl": "Hoogfrequente geluidsgolven extraheren snel smaken en verbindingen in minuten in plaats van uren of dagen"
        },
        {
                  "en": "Playing ultrasonic music during preparation",
                  "es": "Tocar música ultrasónica durante la preparación",
                  "de": "Ultraschallmusik während der Zubereitung spielen",
                  "nl": "Ultrasone muziek afspelen tijdens bereiding"
        },
        {
                  "en": "Using ultrasonic shakers for better mixing",
                  "es": "Usar agitadores ultrasónicos para mejor mezcla",
                  "de": "Ultraschall-Shaker für besseres Mischen verwenden",
                  "nl": "Ultrasone shakers gebruiken voor beter mengen"
        },
        {
                  "en": "Cleaning equipment with ultrasonic waves",
                  "es": "Limpiar equipo con ondas ultrasónicas",
                  "de": "Ausrüstung mit Ultraschallwellen reinigen",
                  "nl": "Apparatuur reinigen met ultrasone golven"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Ultrasonic extraction uses high-frequency sound waves (20-40 kHz) to create cavitation bubbles in liquids, which rapidly break down cellular structures and extract flavors, essential oils, and other compounds. This technique can achieve in 5-15 minutes what traditional infusion takes hours or days to accomplish. The mechanical action is gentle enough to preserve delicate volatile compounds while being powerful enough to extract deep flavors from tough materials like woody herbs or citrus peels. It's particularly valuable for creating consistent, rapid infusions for high-volume cocktail operations or experimental flavor development.",
                  "es": "La extracción ultrasónica usa ondas de sonido de alta frecuencia (20-40 kHz) para crear burbujas de cavitación en líquidos, que rápidamente descomponen estructuras celulares y extraen sabores, aceites esenciales y otros compuestos. Esta técnica puede lograr en 5-15 minutos lo que la infusión tradicional toma horas o días en realizar. La acción mecánica es suficientemente suave para preservar compuestos volátiles delicados mientras es suficientemente poderosa para extraer sabores profundos de materiales duros como hierbas leñosas o cáscaras cítricas. Es particularmente valiosa para crear infusiones consistentes y rápidas para operaciones de cócteles de alto volumen o desarrollo experimental de sabores.",
                  "de": "Ultraschallextraktion verwendet hochfrequente Schallwellen (20-40 kHz) zur Erzeugung von Kavitationsblasen in Flüssigkeiten, die schnell Zellstrukturen aufbrechen und Aromen, ätherische Öle und andere Verbindungen extrahieren. Diese Technik kann in 5-15 Minuten erreichen, was traditionelle Infusion Stunden oder Tage benötigt. Die mechanische Wirkung ist sanft genug, um empfindliche flüchtige Verbindungen zu bewahren, während sie kraftvoll genug ist, um tiefe Aromen aus harten Materialien wie holzigen Kräutern oder Zitrusschalen zu extrahieren. Sie ist besonders wertvoll für konsistente, schnelle Infusionen in hochvolumigen Cocktail-Operationen oder experimenteller Geschmacksentwicklung.",
                  "nl": "Ultrasone extractie gebruikt hoogfrequente geluidsgolven (20-40 kHz) om cavitatie bellen in vloeistoffen te creëren, die snel cellulaire structuren afbreken en smaken, essentiële oliën en andere verbindingen extraheren. Deze techniek kan in 5-15 minuten bereiken wat traditionele infusie uren of dagen kost. De mechanische actie is zacht genoeg om delicate vluchtige verbindingen te behouden terwijl het krachtig genoeg is om diepe smaken te extraheren uit harde materialen zoals houtige kruiden of citrusschillen. Het is bijzonder waardevol voor het creëren van consistente, snelle infusies voor hoog-volume cocktail operaties of experimentele smaakontwikkeling."
        }
      },
      {
        question: {
                  "en": "What is 'encapsulation' technology in modern cocktail garnishes and mixers?",
                  "es": "¿Qué es la tecnología de 'encapsulación' en guarniciones y mezcladores modernos de cócteles?",
                  "de": "Was ist 'Verkapselungs'-Technologie in modernen Cocktail-Garnituren und -Mixern?",
                  "nl": "Wat is 'inkapseling' technologie in moderne cocktail garneringen en mixers?"
        },
        options: [
        {
                  "en": "Wrapping garnishes in plastic",
                  "es": "Envolver guarniciones en plástico",
                  "de": "Garnituren in Plastik einwickeln",
                  "nl": "Garneringen in plastic wikkelen"
        },
        {
                  "en": "Using pill bottles for serving",
                  "es": "Usar frascos de pastillas para servir",
                  "de": "Pillenflaschen zum Servieren verwenden",
                  "nl": "Pil flesjes gebruiken voor serveren"
        },
        {
                  "en": "Putting cocktails in capsules",
                  "es": "Poner cócteles en cápsulas",
                  "de": "Cocktails in Kapseln packen",
                  "nl": "Cocktails in capsules doen"
        },
        {
                  "en": "Creating liquid-filled spheres that burst with flavor using calcium chloride and sodium alginate",
                  "es": "Crear esferas llenas de líquido que explotan con sabor usando cloruro de calcio y alginato de sodio",
                  "de": "Flüssigkeitsgefüllte Kugeln schaffen, die mit Geschmack platzen, mit Calciumchlorid und Natriumalginat",
                  "nl": "Vloeistof-gevulde bollen creëren die barsten met smaak met calciumchloride en natriumalginaat"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Encapsulation in cocktails primarily uses spherification - a molecular gastronomy technique creating liquid-filled spheres with gel membranes. The basic spherification uses sodium alginate and calcium chloride to form caviar-like pearls or larger 'ravioli' spheres containing cocktail liquids. When bitten, these spheres burst with concentrated flavors. Reverse spherification can create larger spheres with liquid centers. This technology allows bartenders to create surprising textural elements, concentrated flavor bombs, or interactive garnishes that transform the drinking experience through unexpected taste releases.",
                  "es": "La encapsulación en cócteles usa principalmente esferificación - una técnica de gastronomía molecular creando esferas llenas de líquido con membranas de gel. La esferificación básica usa alginato de sodio y cloruro de calcio para formar perlas similares al caviar o esferas 'ravioli' más grandes conteniendo líquidos de cóctel. Al morderlas, estas esferas explotan con sabores concentrados. La esferificación inversa puede crear esferas más grandes con centros líquidos. Esta tecnología permite a los bartenders crear elementos texturales sorprendentes, bombas de sabor concentradas o guarniciones interactivas que transforman la experiencia de bebida a través de liberaciones de sabor inesperadas.",
                  "de": "Verkapselung in Cocktails verwendet hauptsächlich Sphärifizierung - eine molekulargastronomische Technik zur Schaffung flüssigkeitsgefüllter Kugeln mit Gelmembranen. Die grundlegende Sphärifizierung verwendet Natriumalginat und Calciumchlorid zur Bildung kaviarähnlicher Perlen oder größerer 'Ravioli'-Kugeln mit Cocktail-Flüssigkeiten. Beim Beißen platzen diese Kugeln mit konzentrierten Aromen. Umgekehrte Sphärifizierung kann größere Kugeln mit flüssigen Zentren schaffen. Diese Technologie ermöglicht Bartendern, überraschende Texturelemente, konzentrierte Geschmacksbomben oder interaktive Garnituren zu schaffen, die das Trinkerlebnis durch unerwartete Geschmacksfreisetzungen transformieren.",
                  "nl": "Inkapseling in cocktails gebruikt voornamelijk spherificatie - een moleculair gastronomie techniek die vloeistof-gevulde bollen creëert met gel membranen. De basis spherificatie gebruikt natriumalginaat en calciumchloride om kaviaar-achtige parels te vormen of grotere 'ravioli' bollen met cocktail vloeistoffen. Wanneer gebeten, barsten deze bollen met geconcentreerde smaken. Omgekeerde spherificatie kan grotere bollen creëren met vloeibare centra. Deze technologie stelt bartenders in staat verrassende textuur elementen te creëren, geconcentreerde smaakbommen of interactieve garneringen die de drinkervaring transformeren door onverwachte smaak vrijgaves."
        }
      },
      {
        question: {
                  "en": "What is 'smoke capture and infusion' technology in cocktail presentation?",
                  "es": "¿Qué es la tecnología de 'captura e infusión de humo' en la presentación de cócteles?",
                  "de": "Was ist 'Rauchfang und -infusions'-Technologie in der Cocktail-Präsentation?",
                  "nl": "Wat is 'rook opvang en infusie' technologie in cocktail presentatie?"
        },
        options: [
        {
                  "en": "Controlled smoking using wood chips, aromatic herbs, or spices to infuse cocktails with smoke flavors",
                  "es": "Ahumado controlado usando astillas de madera, hierbas aromáticas o especias para infundir cócteles con sabores ahumados",
                  "de": "Kontrolliertes Räuchern mit Holzspänen, aromatischen Kräutern oder Gewürzen zur Rauchinfusion in Cocktails",
                  "nl": "Gecontroleerd roken met houtspaanders, aromatische kruiden of specerijen om cocktails te infuseren met rooksmaak"
        },
        {
                  "en": "Capturing cigarette smoke for cocktails",
                  "es": "Capturar humo de cigarrillos para cócteles",
                  "de": "Zigarettenrauch für Cocktails einfangen",
                  "nl": "Sigarettenrook vangen voor cocktails"
        },
        {
                  "en": "Using dry ice for visual effects only",
                  "es": "Usar hielo seco solo para efectos visuales",
                  "de": "Trockeneis nur für visuelle Effekte verwenden",
                  "nl": "Droogijs gebruiken alleen voor visuele effecten"
        },
        {
                  "en": "Industrial smoke machines for bars",
                  "es": "Máquinas de humo industriales para bares",
                  "de": "Industrielle Nebelmaschinen für Bars",
                  "nl": "Industriële rookmachines voor bars"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Smoke capture and infusion involves controlled combustion of aromatic materials (wood chips like applewood or cherry, herbs like rosemary or thyme, spices like cinnamon or star anise) to create flavored smoke that's captured under glass cloches, in smoking boxes, or through specialized equipment. The smoke infuses the cocktail with aromatic compounds, adding complexity and theatrical presentation. Techniques include smoking the glass beforehand, trapping smoke with the drink, or using smoking guns. Safety requires proper ventilation, food-grade materials only, and understanding which materials are safe for consumption.",
                  "es": "La captura e infusión de humo implica combustión controlada de materiales aromáticos (astillas de madera como manzano o cerezo, hierbas como romero o tomillo, especias como canela o anís estrellado) para crear humo saborizado que se captura bajo campanas de vidrio, en cajas de ahumado o a través de equipo especializado. El humo infunde el cóctel con compuestos aromáticos, añadiendo complejidad y presentación teatral. Las técnicas incluyen ahumar el vaso previamente, atrapar humo con la bebida o usar pistolas de humo. La seguridad requiere ventilación apropiada, solo materiales grado alimentario y entender qué materiales son seguros para consumo.",
                  "de": "Rauchfang und -infusion beinhaltet kontrollierte Verbrennung aromatischer Materialien (Holzspäne wie Apfel- oder Kirschholz, Kräuter wie Rosmarin oder Thymian, Gewürze wie Zimt oder Sternanis) zur Erzeugung von aromatisiertem Rauch, der unter Glasglocken, in Rauchboxen oder durch spezialisierte Ausrüstung gefangen wird. Der Rauch infundiert den Cocktail mit aromatischen Verbindungen und fügt Komplexität und theatralische Präsentation hinzu. Techniken umfassen Vorraucherung des Glases, Rauchfang mit dem Getränk oder Verwendung von Rauchpistolen. Sicherheit erfordert ordnungsgemäße Belüftung, nur lebensmittelechte Materialien und Verständnis, welche Materialien für Verzehr sicher sind.",
                  "nl": "Rook opvang en infusie houdt gecontroleerde verbranding in van aromatische materialen (houtspaanders zoals appel- of kersenhout, kruiden zoals rozemarijn of tijm, specerijen zoals kaneel of steranijs) om gearomatiseerde rook te creëren die wordt opgevangen onder glazen stolpen, in rookboxen of door gespecialiseerde apparatuur. De rook infuseert de cocktail met aromatische verbindingen, wat complexiteit en theatrale presentatie toevoegt. Technieken omvatten het glas vooraf roken, rook vangen met de drank of rookpistolen gebruiken. Veiligheid vereist juiste ventilatie, alleen voedselkwaliteit materialen en begrip welke materialen veilig zijn voor consumptie."
        }
      },
      {
        question: {
                  "en": "What is 'precision dilution' and how do professional bartenders calculate optimal water ratios?",
                  "es": "¿Qué es la 'dilución de precisión' y cómo calculan los bartenders profesionales las proporciones óptimas de agua?",
                  "de": "Was ist 'Präzisionsverdünnung' und wie berechnen professionelle Bartender optimale Wasserverhältnisse?",
                  "nl": "Wat is 'precisie verdunning' en hoe berekenen professionele bartenders optimale waterverhoudingen?"
        },
        options: [
        {
                  "en": "Diluting all cocktails to 20% alcohol",
                  "es": "Diluir todos los cócteles a 20% alcohol",
                  "de": "Alle Cocktails auf 20% Alkohol verdünnen",
                  "nl": "Alle cocktails verdunnen tot 20% alcohol"
        },
        {
                  "en": "Using only ice for dilution",
                  "es": "Usar solo hielo para dilución",
                  "de": "Nur Eis für Verdünnung verwenden",
                  "nl": "Alleen ijs gebruiken voor verdunning"
        },
        {
                  "en": "Mathematical calculation of exact water amounts to achieve target alcohol percentage and flavor balance",
                  "es": "Cálculo matemático de cantidades exactas de agua para lograr porcentaje objetivo de alcohol y equilibrio de sabor",
                  "de": "Mathematische Berechnung exakter Wassermengen zur Erreichung des Ziel-Alkoholprozentsatzes und Geschmacksgleichgewichts",
                  "nl": "Wiskundige berekening van exacte waterhoeveelheden om doelalcoholpercentage en smaakbalans te bereiken"
        },
        {
                  "en": "Adding random amounts of water",
                  "es": "Añadir cantidades aleatorias de agua",
                  "de": "Zufällige Wassermengen hinzufügen",
                  "nl": "Willekeurige hoeveelheden water toevoegen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Precision dilution involves calculating exact water amounts to achieve specific alcohol percentages and optimal flavor balance in cocktails. Professional bartenders use formulas considering initial spirit proof, desired final proof, and total volume to determine precise dilution ratios. For example, to reduce a 40% ABV spirit to 25% in a 100ml cocktail requires approximately 60ml of the original spirit plus 40ml of water/other ingredients. This technique ensures consistent results, proper flavor integration, and replicatable cocktails. It's particularly important for batched cocktails, spirit-forward drinks, and maintaining consistency across different base spirit proofs.",
                  "es": "La dilución de precisión implica calcular cantidades exactas de agua para lograr porcentajes específicos de alcohol y equilibrio óptimo de sabor en cócteles. Los bartenders profesionales usan fórmulas considerando graduación inicial del licor, graduación final deseada y volumen total para determinar proporciones precisas de dilución. Por ejemplo, para reducir un licor de 40% ABV a 25% en un cóctel de 100ml requiere aproximadamente 60ml del licor original más 40ml de agua/otros ingredientes. Esta técnica asegura resultados consistentes, integración apropiada de sabor y cócteles replicables. Es particularmente importante para cócteles loteados, bebidas con predominio de licor y mantener consistencia a través de diferentes graduaciones de licores base.",
                  "de": "Präzisionsverdünnung beinhaltet Berechnung exakter Wassermengen zur Erreichung spezifischer Alkoholprozentsätze und optimaler Geschmacksbalance in Cocktails. Professionelle Bartender verwenden Formeln unter Berücksichtigung des anfänglichen Spirituosen-Proofs, gewünschten End-Proofs und Gesamtvolumens zur Bestimmung präziser Verdünnungsverhältnisse. Zum Beispiel erfordert die Reduzierung einer 40% ABV Spirituose auf 25% in einem 100ml Cocktail etwa 60ml der ursprünglichen Spirituose plus 40ml Wasser/andere Zutaten. Diese Technik gewährleistet konsistente Ergebnisse, ordnungsgemäße Geschmacksintegration und reproduzierbare Cocktails. Sie ist besonders wichtig für Batch-Cocktails, spirituosenbetonte Getränke und Konsistenzerhaltung über verschiedene Basis-Spirituosen-Proofs.",
                  "nl": "Precisie verdunning houdt in dat exacte waterhoeveelheden worden berekend om specifieke alcoholpercentages en optimale smaakbalans in cocktails te bereiken. Professionele bartenders gebruiken formules die rekening houden met initiële sterke drank proof, gewenste finale proof en totaal volume om precieze verdunningsverhoudingen te bepalen. Bijvoorbeeld, om een 40% ABV sterke drank te reduceren naar 25% in een 100ml cocktail vereist ongeveer 60ml van de originele sterke drank plus 40ml water/andere ingrediënten. Deze techniek verzekert consistente resultaten, juiste smaakintegratie en repliceerbare cocktails. Het is bijzonder belangrijk voor batch cocktails, sterke drank-gerichte drankjes en consistentie behouden over verschillende basis sterke drank proofs."
        }
      },
      {
        question: {
                  "en": "What is 'umami integration' in cocktail flavor profiling?",
                  "es": "¿Qué es la 'integración umami' en el perfilado de sabor de cócteles?",
                  "de": "Was ist 'Umami-Integration' in der Cocktail-Geschmacksprofilierung?",
                  "nl": "Wat is 'umami integratie' in cocktail smaakprofilering?"
        },
        options: [
        {
                  "en": "Adding Japanese sake to all cocktails",
                  "es": "Añadir sake japonés a todos los cócteles",
                  "de": "Japanischen Sake zu allen Cocktails hinzufügen",
                  "nl": "Japanse sake toevoegen aan alle cocktails"
        },
        {
                  "en": "Making cocktails taste like sushi",
                  "es": "Hacer que los cócteles sepan a sushi",
                  "de": "Cocktails wie Sushi schmecken lassen",
                  "nl": "Cocktails laten smaken naar sushi"
        },
        {
                  "en": "Incorporating savory, meaty, or mushroom-like flavors to add depth and complexity beyond sweet, sour, bitter, and salty",
                  "es": "Incorporar sabores salados, carnosos o similares a hongos para añadir profundidad y complejidad más allá de dulce, agrio, amargo y salado",
                  "de": "Einbindung herzhafter, fleischiger oder pilzähnlicher Aromen zur Hinzufügung von Tiefe und Komplexität jenseits von süß, sauer, bitter und salzig",
                  "nl": "Hartige, vleesachtige of paddenstoel-achtige smaken incorporeren om diepte en complexiteit toe te voegen voorbij zoet, zuur, bitter en zout"
        },
        {
                  "en": "Using only Asian ingredients",
                  "es": "Usar solo ingredientes asiáticos",
                  "de": "Nur asiatische Zutaten verwenden",
                  "nl": "Alleen Aziatische ingrediënten gebruiken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Umami integration introduces the fifth taste - savory, meaty, or brothy flavors - into cocktail profiles through ingredients like mushroom-infused spirits, miso, soy sauce, aged cheeses, cured meats, or kombu seaweed. This creates multi-dimensional flavor experiences that go beyond traditional sweet-sour-bitter-salty cocktail profiles. Umami adds depth, complexity, and often a surprising 'completeness' to cocktails. It can be subtle (mushroom-washed whiskey) or pronounced (a Bloody Mary with dashi). This technique requires careful balancing as umami can easily overpower other flavors, but when done correctly, creates memorable and sophisticated drinking experiences.",
                  "es": "La integración umami introduce el quinto sabor - salado, carnoso o caldoso - en perfiles de cócteles a través de ingredientes como licores infundidos con hongos, miso, salsa de soja, quesos añejos, carnes curadas o alga kombu. Esto crea experiencias de sabor multidimensionales que van más allá de perfiles tradicionales dulce-agrio-amargo-salado de cócteles. Umami añade profundidad, complejidad y a menudo una 'completitud' sorprendente a los cócteles. Puede ser sutil (whiskey lavado con hongos) o pronunciado (un Bloody Mary con dashi). Esta técnica requiere equilibrio cuidadoso ya que umami puede fácilmente sobrepasar otros sabores, pero cuando se hace correctamente, crea experiencias de bebida memorables y sofisticadas.",
                  "de": "Umami-Integration führt den fünften Geschmack - herzhaft, fleischig oder brühig - in Cocktail-Profile durch Zutaten wie pilzinfundierte Spirituosen, Miso, Sojasauce, gereifte Käse, gepökelte Fleischwaren oder Kombu-Seetang ein. Dies schafft multidimensionale Geschmackserfahrungen, die über traditionelle süß-sauer-bitter-salzig Cocktail-Profile hinausgehen. Umami fügt Tiefe, Komplexität und oft eine überraschende 'Vollständigkeit' zu Cocktails hinzu. Es kann subtil sein (pilzgewaschener Whiskey) oder ausgeprägt (ein Bloody Mary mit Dashi). Diese Technik erfordert sorgfältige Balance, da Umami leicht andere Aromen überwältigen kann, aber richtig gemacht schafft es unvergessliche und raffinierte Trinkerfahrungen.",
                  "nl": "Umami integratie introduceert de vijfde smaak - hartig, vleesachtig of bouillon-achtig - in cocktail profielen door ingrediënten zoals paddenstoel-geïnfuseerde sterke dranken, miso, sojasaus, gerijpte kazen, gezouten vlees of kombu zeewier. Dit creëert multidimensionale smaakervaringen die verder gaan dan traditionele zoet-zuur-bitter-zout cocktail profielen. Umami voegt diepte, complexiteit en vaak een verrassende 'volledigheid' toe aan cocktails. Het kan subtiel zijn (paddenstoel-gewassen whiskey) of uitgesproken (een Bloody Mary met dashi). Deze techniek vereist zorgvuldige balancering omdat umami gemakkelijk andere smaken kan overheersen, maar wanneer correct gedaan, creëert het memorabele en verfijnde drinkervaringen."
        }
      },
      {
        question: {
                  "en": "What is 'temperature layering' in cocktail construction and service?",
                  "es": "¿Qué es la 'estratificación de temperatura' en la construcción y servicio de cócteles?",
                  "de": "Was ist 'Temperaturschichtung' in Cocktail-Konstruktion und -Service?",
                  "nl": "Wat is 'temperatuur gelaagdheid' in cocktail constructie en service?"
        },
        options: [
        {
                  "en": "Creating different temperature zones within a single cocktail for varying sensory experiences",
                  "es": "Crear diferentes zonas de temperatura dentro de un solo cóctel para experiencias sensoriales variadas",
                  "de": "Verschiedene Temperaturzonen innerhalb eines einzelnen Cocktails für variierende Sinneserfahrungen schaffen",
                  "nl": "Verschillende temperatuurzones binnen een enkele cocktail creëren voor variërende zintuiglijke ervaringen"
        },
        {
                  "en": "Serving cocktails at room temperature only",
                  "es": "Servir cócteles solo a temperatura ambiente",
                  "de": "Cocktails nur bei Raumtemperatur servieren",
                  "nl": "Cocktails alleen op kamertemperatuur serveren"
        },
        {
                  "en": "Using layers of different colored ingredients",
                  "es": "Usar capas de ingredientes de diferentes colores",
                  "de": "Schichten verschiedenfarbiger Zutaten verwenden",
                  "nl": "Lagen van verschillende gekleurde ingrediënten gebruiken"
        },
        {
                  "en": "Stacking ice cubes in order",
                  "es": "Apilar cubos de hielo en orden",
                  "de": "Eiswürfel in Reihenfolge stapeln",
                  "nl": "IJsblokjes op volgorde stapelen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Temperature layering creates distinct temperature zones within a single cocktail, offering evolving sensory experiences as the drink is consumed. This might involve frozen elements (granitas, ice wines), chilled components (standard cocktail), and warm elements (heated spirits, warm garnishes). Techniques include using different density liquids at varying temperatures, introducing temperature-contrasting garnishes, or serving components that change temperature during consumption. The goal is to create dynamic drinking experiences where temperature differences enhance flavor perception, create textural contrasts, and provide surprising sensory moments throughout the drinking process.",
                  "es": "La estratificación de temperatura crea zonas de temperatura distintas dentro de un solo cóctel, ofreciendo experiencias sensoriales evolutivas mientras se consume la bebida. Esto podría involucrar elementos congelados (granitas, vinos helados), componentes fríos (cóctel estándar) y elementos calientes (licores calentados, guarniciones calientes). Las técnicas incluyen usar líquidos de diferentes densidades a temperaturas variadas, introducir guarniciones con temperatura contrastante, o servir componentes que cambian de temperatura durante el consumo. El objetivo es crear experiencias de bebida dinámicas donde las diferencias de temperatura mejoran la percepción del sabor, crean contrastes texturales y proporcionan momentos sensoriales sorprendentes durante todo el proceso de bebida.",
                  "de": "Temperaturschichtung schafft unterschiedliche Temperaturzonen innerhalb eines einzelnen Cocktails und bietet sich entwickelnde Sinneserfahrungen während des Trinkens. Dies könnte gefrorene Elemente (Granitas, Eisweine), gekühlte Komponenten (Standard-Cocktail) und warme Elemente (erhitzte Spirituosen, warme Garnituren) umfassen. Techniken umfassen verschiedene Dichte-Flüssigkeiten bei variierenden Temperaturen, Einführung temperaturkontrastierender Garnituren oder Servieren von Komponenten, die während des Konsums die Temperatur ändern. Das Ziel ist, dynamische Trinkerfahrungen zu schaffen, wo Temperaturunterschiede Geschmackswahrnehmung verbessern, Texturkontraste schaffen und überraschende Sinnesmomente während des gesamten Trinkprozesses bieten.",
                  "nl": "Temperatuur gelaagdheid creëert verschillende temperatuurzones binnen een enkele cocktail, wat evoluerende zintuiglijke ervaringen biedt terwijl de drank wordt geconsumeerd. Dit kan bevroren elementen omvatten (granita's, ijswijnen), gekoelde componenten (standaard cocktail) en warme elementen (verwarmde sterke dranken, warme garneringen). Technieken omvatten verschillende dichtheid vloeistoffen op variërende temperaturen gebruiken, temperatuur-contrasterende garneringen introduceren, of componenten serveren die van temperatuur veranderen tijdens consumptie. Het doel is dynamische drinkervaringen te creëren waar temperatuurverschillen smaakperceptie verbeteren, textuur contrasten creëren en verrassende zintuiglijke momenten bieden gedurende het hele drinkproces."
        }
      },
      {
        question: {
                  "en": "What is the 'golden ratio' for classic sour cocktails according to modern mixology standards?",
                  "es": "¿Cuál es la 'proporción áurea' para cócteles sour clásicos según los estándares modernos de mixología?",
                  "de": "Was ist das 'goldene Verhältnis' für klassische Sour-Cocktails nach modernen Mixologie-Standards?",
                  "nl": "Wat is de 'gulden snede' voor klassieke sour cocktails volgens moderne mixologie standaarden?"
        },
        options: [
        {
                  "en": "4:2:1 (spirit:citrus:sweetener)",
                  "es": "4:2:1 (licor:cítrico:endulzante)",
                  "de": "4:2:1 (Spirituose:Zitrus:Süßungsmittel)",
                  "nl": "4:2:1 (sterke drank:citrus:zoetstof)"
        },
        {
                  "en": "2:1:1 (spirit:citrus:sweetener)",
                  "es": "2:1:1 (licor:cítrico:endulzante)",
                  "de": "2:1:1 (Spirituose:Zitrus:Süßungsmittel)",
                  "nl": "2:1:1 (sterke drank:citrus:zoetstof)"
        },
        {
                  "en": "1:1:1 (equal parts)",
                  "es": "1:1:1 (partes iguales)",
                  "de": "1:1:1 (gleiche Teile)",
                  "nl": "1:1:1 (gelijke delen)"
        },
        {
                  "en": "3:2:1 (spirit:citrus:sweetener)",
                  "es": "3:2:1 (licor:cítrico:endulzante)",
                  "de": "3:2:1 (Spirituose:Zitrus:Süßungsmittel)",
                  "nl": "3:2:1 (sterke drank:citrus:zoetstof)"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The modern golden ratio for sour cocktails is 2:1:1 (2 parts spirit, 1 part citrus juice, 1 part sweetener). This ratio, often attributed to Sasha Petraske and other contemporary bartenders, creates balanced cocktails where the base spirit remains prominent while achieving proper sweet-tart balance. For example: 2 oz whiskey, 1 oz lemon juice, 1 oz simple syrup. However, this is a starting point—adjustments are needed based on spirit proof, citrus acidity, and sweetener concentration. Higher-proof spirits may use 2:0.75:0.75, while lower-acid citrus might need 2:1.25:0.75.",
                  "es": "La proporción áurea moderna para cócteles sour es 2:1:1 (2 partes licor, 1 parte jugo cítrico, 1 parte endulzante). Esta proporción, a menudo atribuida a Sasha Petraske y otros bartenders contemporáneos, crea cócteles equilibrados donde el licor base permanece prominente mientras se logra equilibrio dulce-ácido apropiado. Por ejemplo: 2 oz whiskey, 1 oz jugo de limón, 1 oz jarabe simple. Sin embargo, esto es un punto de partida—se necesitan ajustes basados en graduación del licor, acidez cítrica y concentración del endulzante. Licores de mayor graduación pueden usar 2:0.75:0.75, mientras que cítricos de menor acidez pueden necesitar 2:1.25:0.75.",
                  "de": "Das moderne goldene Verhältnis für Sour-Cocktails ist 2:1:1 (2 Teile Spirituose, 1 Teil Zitrussaft, 1 Teil Süßungsmittel). Dieses Verhältnis, oft Sasha Petraske und anderen zeitgenössischen Bartendern zugeschrieben, schafft ausgewogene Cocktails, wo die Basis-Spirituose prominent bleibt während angemessene süß-herbe Balance erreicht wird. Zum Beispiel: 2 oz Whiskey, 1 oz Zitronensaft, 1 oz einfacher Sirup. Dies ist jedoch ein Ausgangspunkt—Anpassungen sind erforderlich basierend auf Spirituosen-Proof, Zitrussäure und Süßungsmittel-Konzentration. Höher-prozentige Spirituosen können 2:0,75:0,75 verwenden, während niedrig-saure Zitrus 2:1,25:0,75 benötigen könnten.",
                  "nl": "De moderne gulden snede voor sour cocktails is 2:1:1 (2 delen sterke drank, 1 deel citrussap, 1 deel zoetstof). Deze verhouding, vaak toegeschreven aan Sasha Petraske en andere hedendaagse bartenders, creëert gebalanceerde cocktails waar de basis sterke drank prominent blijft terwijl een juiste zoet-zuur balans wordt bereikt. Bijvoorbeeld: 2 oz whiskey, 1 oz citroensap, 1 oz eenvoudige siroop. Dit is echter een startpunt—aanpassingen zijn nodig gebaseerd op sterke drank proof, citrus zuurgraad en zoetstof concentratie. Hogere-proof sterke dranken kunnen 2:0,75:0,75 gebruiken, terwijl lagere-zuur citrus 2:1,25:0,75 nodig kunnen hebben."
        }
      },
      {
        question: {
                  "en": "What is a 'Fix' cocktail and how does it differ from a traditional sour?",
                  "es": "¿Qué es un cóctel 'Fix' y cómo difiere de un sour tradicional?",
                  "de": "Was ist ein 'Fix'-Cocktail und wie unterscheidet er sich von einem traditionellen Sour?",
                  "nl": "Wat is een 'Fix' cocktail en hoe verschilt het van een traditionele sour?"
        },
        options: [
        {
                  "en": "A cocktail with fixed proportions that never change",
                  "es": "Un cóctel con proporciones fijas que nunca cambian",
                  "de": "Ein Cocktail mit festen Proportionen die nie ändern",
                  "nl": "Een cocktail met vaste verhoudingen die nooit veranderen"
        },
        {
                  "en": "A sour served over crushed ice with fresh fruit garnish and seasonal ingredients",
                  "es": "Un sour servido sobre hielo picado con guarnición de fruta fresca e ingredientes estacionales",
                  "de": "Ein Sour serviert über zerstoßenem Eis mit frischer Fruchtgarnitur und saisonalen Zutaten",
                  "nl": "Een sour geserveerd op crushed ijs met verse fruit garnering en seizoensgebonden ingrediënten"
        },
        {
                  "en": "A pre-batched cocktail stored for weeks",
                  "es": "Un cóctel pre-loteado almacenado por semanas",
                  "de": "Ein vorbatch Cocktail wochenlang gelagert",
                  "nl": "Een vooraf batch cocktail weken bewaard"
        },
        {
                  "en": "A cocktail that fixes hangovers",
                  "es": "Un cóctel que cura resacas",
                  "de": "Ein Cocktail der Kater heilt",
                  "nl": "Een cocktail die katers geneest"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A Fix is a classic cocktail category from the 1800s, essentially a sour cocktail served over crushed or pebble ice with abundant fresh fruit garnish and often seasonal ingredients. The typical structure is spirit, citrus juice, sweetener (often pineapple syrup or fruit-based sweeteners), served in a rocks glass over crushed ice with fresh berries, citrus wedges, or seasonal fruit. Famous examples include the Gin Fix and Brandy Fix. The crushed ice creates rapid dilution and a refreshing, slushy texture, while the fruit adds aromatics and visual appeal. It's considered a predecessor to the modern julep and cobbler categories.",
                  "es": "Un Fix es una categoría clásica de cóctel de los 1800s, esencialmente un cóctel sour servido sobre hielo picado o de guijarros con abundante guarnición de fruta fresca y a menudo ingredientes estacionales. La estructura típica es licor, jugo cítrico, endulzante (a menudo jarabe de piña o endulzantes basados en fruta), servido en un vaso rocks sobre hielo picado con bayas frescas, gajos de cítricos o fruta estacional. Ejemplos famosos incluyen el Gin Fix y Brandy Fix. El hielo picado crea dilución rápida y una textura refrescante y aguanieve, mientras que la fruta añade aromáticos y atractivo visual. Se considera un predecesor de las categorías modernas julep y cobbler.",
                  "de": "Ein Fix ist eine klassische Cocktail-Kategorie aus den 1800ern, im Wesentlichen ein Sour-Cocktail serviert über zerstoßenem oder Kieseleis mit reichlicher frischer Fruchtgarnitur und oft saisonalen Zutaten. Die typische Struktur ist Spirituose, Zitrussaft, Süßungsmittel (oft Ananassirup oder fruchtbasierte Süßungsmittel), serviert in einem Rocks-Glas über zerstoßenem Eis mit frischen Beeren, Zitrusspalten oder saisonaler Frucht. Berühmte Beispiele sind Gin Fix und Brandy Fix. Das zerstoßene Eis schafft schnelle Verdünnung und eine erfrischende, matschige Textur, während die Frucht Aromen und visuelle Anziehung hinzufügt. Es gilt als Vorläufer der modernen Julep- und Cobbler-Kategorien.",
                  "nl": "Een Fix is een klassieke cocktail categorie uit de jaren 1800, in wezen een sour cocktail geserveerd op crushed of grind ijs met overvloedige verse fruit garnering en vaak seizoensgebonden ingrediënten. De typische structuur is sterke drank, citrussap, zoetstof (vaak ananas siroop of fruit-gebaseerde zoetstoffen), geserveerd in een rocks glas op crushed ijs met verse bessen, citrus partjes of seizoensfruit. Beroemde voorbeelden zijn de Gin Fix en Brandy Fix. Het crushed ijs creëert snelle verdunning en een verfrissende, slushy textuur, terwijl het fruit aromaten en visuele aantrekkingskracht toevoegt. Het wordt beschouwd als een voorloper van de moderne julep en cobbler categorieën."
        }
      },
      {
        question: {
                  "en": "What is 'Ti' Punch' and what makes it different from a standard rum cocktail?",
                  "es": "¿Qué es el 'Ti' Punch' y qué lo hace diferente de un cóctel de ron estándar?",
                  "de": "Was ist 'Ti' Punch' und was macht ihn anders als einen Standard-Rum-Cocktail?",
                  "nl": "Wat is 'Ti' Punch' en wat maakt het anders dan een standaard rum cocktail?"
        },
        options: [
        {
                  "en": "A tiny punch served in shot glasses",
                  "es": "Un ponche pequeño servido en vasos de chupito",
                  "de": "Ein winziger Punsch in Schnapsgläsern serviert",
                  "nl": "Een kleine punch geserveerd in shotglazen"
        },
        {
                  "en": "Martinique rhum agricole, lime disc, cane syrup, self-mixed at the table by the drinker",
                  "es": "Rhum agricole de Martinica, disco de lima, jarabe de caña, auto-mezclado en la mesa por el bebedor",
                  "de": "Martinique Rhum Agricole, Limettenscheibe, Rohrzuckersirup, vom Trinker am Tisch selbst gemischt",
                  "nl": "Martinique rhum agricole, limoen schijf, rietsuikersiroop, zelf gemixt aan tafel door de drinker"
        },
        {
                  "en": "A punch made with Thai ingredients",
                  "es": "Un ponche hecho con ingredientes tailandeses",
                  "de": "Ein Punsch mit thailändischen Zutaten gemacht",
                  "nl": "Een punch gemaakt met Thaise ingrediënten"
        },
        {
                  "en": "A Hawaiian punch with tiki garnishes",
                  "es": "Un ponche hawaiano con guarniciones tiki",
                  "de": "Ein hawaiianischer Punsch mit Tiki-Garnituren",
                  "nl": "Een Hawaïaanse punch met tiki garneringen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "'Ti' Punch (short for 'Petit Punch') is the national drink of Martinique and French Caribbean islands. It consists of rhum agricole (cane juice rum), a lime disc (not juice), and cane syrup (sirop de canne). What makes it unique is the preparation ritual: ingredients are presented separately and the drinker mixes their own drink at the table using a swizzle stick (bois lélé), pressing the lime disc to release oils and adjusting sweetness to taste. The lime disc (not squeezed juice) provides aromatic oils and subtle acidity. It's typically served at room temperature to preserve the rhum's grassy, vegetal character.",
                  "es": "El 'Ti' Punch (abreviatura de 'Petit Punch') es la bebida nacional de Martinica y las islas del Caribe francés. Consiste en rhum agricole (ron de jugo de caña), un disco de lima (no jugo) y jarabe de caña (sirop de canne). Lo que lo hace único es el ritual de preparación: los ingredientes se presentan por separado y el bebedor mezcla su propia bebida en la mesa usando un palillo mezclador (bois lélé), presionando el disco de lima para liberar aceites y ajustando el dulzor al gusto. El disco de lima (no jugo exprimido) proporciona aceites aromáticos y acidez sutil. Típicamente se sirve a temperatura ambiente para preservar el carácter herbáceo y vegetal del rhum.",
                  "de": "'Ti' Punch (kurz für 'Petit Punch') ist das Nationalgetränk von Martinique und französischen Karibikinseln. Es besteht aus Rhum Agricole (Zuckerrohrsaft-Rum), einer Limettenscheibe (kein Saft) und Rohrzuckersirup (Sirop de Canne). Was ihn einzigartig macht, ist das Zubereitungsritual: Zutaten werden separat präsentiert und der Trinker mischt sein eigenes Getränk am Tisch mit einem Swizzle-Stick (Bois Lélé), drückt die Limettenscheibe um Öle freizusetzen und passt Süße nach Geschmack an. Die Limettenscheibe (nicht ausgepresster Saft) liefert aromatische Öle und subtile Säure. Es wird typisch bei Raumtemperatur serviert um den grasigen, pflanzlichen Charakter des Rhums zu bewahren.",
                  "nl": "'Ti' Punch (kort voor 'Petit Punch') is de nationale drank van Martinique en Franse Caribische eilanden. Het bestaat uit rhum agricole (rietsuikersap rum), een limoen schijf (niet sap) en rietsuikersiroop (sirop de canne). Wat het uniek maakt is het bereidingsritueel: ingrediënten worden apart gepresenteerd en de drinker mixt hun eigen drank aan tafel met een swizzle stick (bois lélé), de limoen schijf indrukkend om oliën vrij te maken en zoetheid naar smaak aan te passen. De limoen schijf (niet uitgeperst sap) levert aromatische oliën en subtiele zuurgraad. Het wordt typisch op kamertemperatuur geserveerd om het grasachtige, plantaardige karakter van de rhum te bewaren."
        }
      },
      {
        question: {
                  "en": "What is 'mise en place' in cocktail bar operations and why is it crucial?",
                  "es": "¿Qué es el 'mise en place' en las operaciones de bares de cócteles y por qué es crucial?",
                  "de": "Was ist 'Mise en Place' in Cocktail-Bar-Operationen und warum ist es entscheidend?",
                  "nl": "Wat is 'mise en place' in cocktail bar operaties en waarom is het cruciaal?"
        },
        options: [
        {
                  "en": "The bar's seating arrangement",
                  "es": "La disposición de asientos del bar",
                  "de": "Die Sitzordnung der Bar",
                  "nl": "De zitplaatsen regeling van de bar"
        },
        {
                  "en": "Complete preparation and organization of all ingredients, tools, and garnishes before service begins",
                  "es": "Preparación y organización completa de todos los ingredientes, herramientas y guarniciones antes de que comience el servicio",
                  "de": "Vollständige Vorbereitung und Organisation aller Zutaten, Werkzeuge und Garnituren vor Dienstbeginn",
                  "nl": "Complete voorbereiding en organisatie van alle ingrediënten, gereedschappen en garneringen voordat de dienst begint"
        },
        {
                  "en": "A French cocktail with special ingredients",
                  "es": "Un cóctel francés con ingredientes especiales",
                  "de": "Ein französischer Cocktail mit speziellen Zutaten",
                  "nl": "Een Franse cocktail met speciale ingrediënten"
        },
        {
                  "en": "The location where cocktails are placed after making",
                  "es": "La ubicación donde se colocan los cócteles después de hacerlos",
                  "de": "Der Ort wo Cocktails nach dem Machen platziert werden",
                  "nl": "De locatie waar cocktails worden geplaatst na het maken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Mise en place (French for 'everything in its place') is the foundational practice of preparing and organizing all ingredients, tools, and garnishes before service. This includes: fresh juices squeezed, syrups prepared, fruits cut, herbs picked and organized, ice bins filled, glassware polished and chilled, bar tools positioned, and backup ingredients stocked. Proper mise en place is crucial because it enables fast, consistent cocktail production during busy service, reduces errors, minimizes waste, ensures quality control, and allows bartenders to focus on technique and customer interaction rather than searching for ingredients. Professional bars may spend 2-4 hours on mise en place before opening.",
                  "es": "Mise en place (francés para 'todo en su lugar') es la práctica fundamental de preparar y organizar todos los ingredientes, herramientas y guarniciones antes del servicio. Esto incluye: jugos frescos exprimidos, jarabes preparados, frutas cortadas, hierbas recogidas y organizadas, depósitos de hielo llenos, cristalería pulida y enfriada, herramientas de bar posicionadas e ingredientes de respaldo almacenados. El mise en place apropiado es crucial porque permite producción rápida y consistente de cócteles durante el servicio ocupado, reduce errores, minimiza desperdicios, asegura control de calidad y permite a los bartenders enfocarse en técnica e interacción con clientes en lugar de buscar ingredientes. Los bares profesionales pueden pasar 2-4 horas en mise en place antes de abrir.",
                  "de": "Mise en Place (französisch für 'alles an seinem Platz') ist die grundlegende Praxis der Vorbereitung und Organisation aller Zutaten, Werkzeuge und Garnituren vor dem Service. Dies umfasst: frische Säfte gepresst, Sirupe vorbereitet, Früchte geschnitten, Kräuter gepflückt und organisiert, Eisbehälter gefüllt, Glaswaren poliert und gekühlt, Bar-Werkzeuge positioniert und Ersatzzutaten gelagert. Ordnungsgemäße Mise en Place ist entscheidend, weil sie schnelle, konsistente Cocktail-Produktion während geschäftigem Service ermöglicht, Fehler reduziert, Verschwendung minimiert, Qualitätskontrolle sicherstellt und Bartendern erlaubt, sich auf Technik und Kundeninteraktion zu konzentrieren statt nach Zutaten zu suchen. Professionelle Bars können 2-4 Stunden Mise en Place vor Öffnung verbringen.",
                  "nl": "Mise en place (Frans voor 'alles op zijn plaats') is de fundamentele praktijk van het voorbereiden en organiseren van alle ingrediënten, gereedschappen en garneringen voor de dienst. Dit omvat: verse sappen geperst, siropen bereid, fruit gesneden, kruiden geplukt en georganiseerd, ijsbakken gevuld, glaswerk gepolijst en gekoeld, bar gereedschappen gepositioneerd en backup ingrediënten opgeslagen. Juiste mise en place is cruciaal omdat het snelle, consistente cocktail productie mogelijk maakt tijdens drukke dienst, fouten vermindert, verspilling minimaliseert, kwaliteitscontrole verzekert en bartenders in staat stelt zich te concentreren op techniek en klant interactie in plaats van zoeken naar ingrediënten. Professionele bars kunnen 2-4 uur besteden aan mise en place voor opening."
        }
      },
      {
        question: {
                  "en": "What is the 'Bartender's Handshake' and what does it represent in cocktail culture?",
                  "es": "¿Qué es el 'Apretón de Manos del Bartender' y qué representa en la cultura de cócteles?",
                  "de": "Was ist der 'Bartender's Handshake' und was repräsentiert er in der Cocktail-Kultur?",
                  "nl": "Wat is de 'Bartender's Handshake' en wat vertegenwoordigt het in cocktail cultuur?"
        },
        options: [
        {
                  "en": "The first cocktail served to a new customer",
                  "es": "El primer cóctel servido a un nuevo cliente",
                  "de": "Der erste Cocktail der einem neuen Kunden serviert wird",
                  "nl": "De eerste cocktail geserveerd aan een nieuwe klant"
        },
        {
                  "en": "A handshake technique for greeting customers",
                  "es": "Una técnica de apretón de manos para saludar clientes",
                  "de": "Eine Handschlag-Technik zur Begrüßung von Kunden",
                  "nl": "Een handdruk techniek voor het begroeten van klanten"
        },
        {
                  "en": "A shot of Fernet-Branca offered between bartenders as a sign of hospitality and professional respect",
                  "es": "Un trago de Fernet-Branca ofrecido entre bartenders como signo de hospitalidad y respeto profesional",
                  "de": "Ein Shot Fernet-Branca zwischen Bartendern als Zeichen von Gastfreundschaft und professionellem Respekt angeboten",
                  "nl": "Een shot Fernet-Branca aangeboden tussen bartenders als teken van gastvrijheid en professioneel respect"
        },
        {
                  "en": "A special way bartenders shake cocktails",
                  "es": "Una forma especial en que los bartenders agitan cócteles",
                  "de": "Eine spezielle Art wie Bartender Cocktails schütteln",
                  "nl": "Een speciale manier waarop bartenders cocktails schudden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The 'Bartender's Handshake' is an industry tradition where bartenders offer each other a shot of Fernet-Branca, an intensely bitter Italian amaro. This ritual represents professional camaraderie, mutual respect, and hospitality within the bartending community. The tradition likely started in San Francisco in the early 2000s and spread worldwide. Fernet-Branca was chosen for its acquired taste—bitter, mentholated, and complex—which separates industry professionals from casual drinkers. Accepting and drinking the shot signals you're part of the bartending fraternity. The practice has extended to other spirituous offerings but Fernet-Branca remains the iconic choice.",
                  "es": "El 'Apretón de Manos del Bartender' es una tradición de la industria donde los bartenders se ofrecen mutuamente un trago de Fernet-Branca, un amaro italiano intensamente amargo. Este ritual representa camaradería profesional, respeto mutuo y hospitalidad dentro de la comunidad de bartenders. La tradición probablemente comenzó en San Francisco a principios de los 2000s y se extendió mundialmente. Fernet-Branca fue elegido por su sabor adquirido—amargo, mentolado y complejo—que separa profesionales de la industria de bebedores casuales. Aceptar y beber el trago señala que eres parte de la fraternidad de bartenders. La práctica se ha extendido a otras ofertas espirituosas pero Fernet-Branca permanece como la elección icónica.",
                  "de": "Der 'Bartender's Handshake' ist eine Branchentradition, wo Bartender einander einen Shot Fernet-Branca anbieten, einen intensiv bitteren italienischen Amaro. Dieses Ritual repräsentiert professionelle Kameradschaft, gegenseitigen Respekt und Gastfreundschaft innerhalb der Bartender-Gemeinschaft. Die Tradition begann wahrscheinlich in San Francisco Anfang der 2000er und verbreitete sich weltweit. Fernet-Branca wurde wegen seines erworbenen Geschmacks gewählt—bitter, mentholiert und komplex—der Branchenprofis von Gelegenheitstrinkern trennt. Das Akzeptieren und Trinken des Shots signalisiert, dass man Teil der Bartender-Bruderschaft ist. Die Praxis hat sich auf andere spirituose Angebote ausgedehnt, aber Fernet-Branca bleibt die ikonische Wahl.",
                  "nl": "De 'Bartender's Handshake' is een industrie traditie waar bartenders elkaar een shot Fernet-Branca aanbieden, een intens bittere Italiaanse amaro. Dit ritueel vertegenwoordigt professionele kameraadschap, wederzijds respect en gastvrijheid binnen de bartender gemeenschap. De traditie begon waarschijnlijk in San Francisco begin jaren 2000 en verspreidde zich wereldwijd. Fernet-Branca werd gekozen voor zijn verworven smaak—bitter, gementholeerd en complex—wat industrie professionals scheidt van casual drinkers. Het accepteren en drinken van de shot geeft aan dat je deel uitmaakt van de bartender broederschap. De praktijk is uitgebreid naar andere spiritueuze aanbiedingen maar Fernet-Branca blijft de iconische keuze."
        }
      },
      {
        question: {
                  "en": "What is the 'Brown Derby' cocktail and what's unique about its creation story?",
                  "es": "¿Qué es el cóctel 'Brown Derby' y qué es único sobre su historia de creación?",
                  "de": "Was ist der 'Brown Derby'-Cocktail und was ist einzigartig an seiner Entstehungsgeschichte?",
                  "nl": "Wat is de 'Brown Derby' cocktail en wat is uniek aan het creatie verhaal?"
        },
        options: [
        {
                  "en": "Bourbon, grapefruit juice, honey syrup; created at the Vendôme Club but named after the famous hat-shaped restaurant",
                  "es": "Bourbon, jugo de toronja, jarabe de miel; creado en el Vendôme Club pero nombrado por el famoso restaurante en forma de sombrero",
                  "de": "Bourbon, Grapefruitsaft, Honigsirup; im Vendôme Club kreiert aber nach dem berühmten hutförmigen Restaurant benannt",
                  "nl": "Bourbon, grapefruitsap, honing siroop; gecreëerd in de Vendôme Club maar genoemd naar het beroemde hoed-vormige restaurant"
        },
        {
                  "en": "Served in a derby hat glass",
                  "es": "Servido en un vaso de sombrero derby",
                  "de": "In einem Derby-Hut-Glas serviert",
                  "nl": "Geserveerd in een derby hoed glas"
        },
        {
                  "en": "Created for horse racing events",
                  "es": "Creado para eventos de carreras de caballos",
                  "de": "Für Pferderennen kreiert",
                  "nl": "Gecreëerd voor paardenraces"
        },
        {
                  "en": "Made with brown rum only",
                  "es": "Hecho solo con ron marrón",
                  "de": "Nur mit braunem Rum gemacht",
                  "nl": "Gemaakt met alleen bruine rum"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Brown Derby is a Prohibition-era cocktail made with bourbon, fresh grapefruit juice, and honey syrup. Despite being famously associated with the Brown Derby restaurant (the iconic hat-shaped Los Angeles restaurant), it was actually created at the nearby Vendôme Club in the 1930s. The cocktail showcases the classic American combination of whiskey with citrus, enhanced by honey's floral complexity. The grapefruit provides bitter-sweet balance that complements bourbon's caramel notes. It's considered a predecessor to modern craft cocktail movements that emphasize fresh citrus and natural sweeteners.",
                  "es": "El Brown Derby es un cóctel de la era de la Prohibición hecho con bourbon, jugo fresco de toronja y jarabe de miel. A pesar de estar famosamente asociado con el restaurante Brown Derby (el icónico restaurante de Los Ángeles en forma de sombrero), fue realmente creado en el cercano Vendôme Club en los 1930s. El cóctel muestra la combinación americana clásica de whiskey con cítricos, realzada por la complejidad floral de la miel. La toronja proporciona equilibrio amargo-dulce que complementa las notas de caramelo del bourbon. Se considera un predecesor de los movimientos modernos de cócteles artesanales que enfatizan cítricos frescos y endulzantes naturales.",
                  "de": "Der Brown Derby ist ein Cocktail aus der Prohibitionszeit aus Bourbon, frischem Grapefruitsaft und Honigsirup. Trotz berühmter Assoziation mit dem Brown Derby Restaurant (das ikonische hutförmige Los Angeles Restaurant) wurde er tatsächlich im nahegelegenen Vendôme Club in den 1930ern kreiert. Der Cocktail zeigt die klassische amerikanische Kombination von Whiskey mit Zitrus, verstärkt durch Honigs florale Komplexität. Die Grapefruit bietet bitter-süße Balance, die Bourbons Karamellnoten ergänzt. Er gilt als Vorläufer moderner Craft-Cocktail-Bewegungen, die frische Zitrus und natürliche Süßungsmittel betonen.",
                  "nl": "De Brown Derby is een Prohibition-tijdperk cocktail gemaakt met bourbon, vers grapefruitsap en honing siroop. Ondanks dat het beroemd wordt geassocieerd met het Brown Derby restaurant (het iconische hoed-vormige Los Angeles restaurant), werd het eigenlijk gecreëerd in de nabijgelegen Vendôme Club in de jaren 1930. De cocktail toont de klassieke Amerikaanse combinatie van whiskey met citrus, versterkt door honing's bloemen complexiteit. De grapefruit biedt bitter-zoete balans die bourbon's karamel noten complementeert. Het wordt beschouwd als een voorloper van moderne craft cocktail bewegingen die verse citrus en natuurlijke zoetstoffen benadrukken."
        }
      },
      {
        question: {
                  "en": "What is the 'Aviation' cocktail controversy regarding crème de violette?",
                  "es": "¿Cuál es la controversia del cóctel 'Aviation' respecto al crème de violette?",
                  "de": "Was ist die 'Aviation'-Cocktail-Kontroverse bezüglich Crème de Violette?",
                  "nl": "Wat is de 'Aviation' cocktail controverse over crème de violette?"
        },
        options: [
        {
                  "en": "Airlines complained about the name",
                  "es": "Las aerolíneas se quejaron del nombre",
                  "de": "Fluggesellschaften beschwerten sich über den Namen",
                  "nl": "Luchtvaartmaatschappijen klaagden over de naam"
        },
        {
                  "en": "The cocktail was never meant to have violets",
                  "es": "El cóctel nunca debía tener violetas",
                  "de": "Der Cocktail sollte nie Veilchen haben",
                  "nl": "De cocktail was nooit bedoeld om viooltjes te hebben"
        },
        {
                  "en": "Violet liqueur is illegal in some countries",
                  "es": "El licor de violeta es ilegal en algunos países",
                  "de": "Veilchenlikör ist in einigen Ländern illegal",
                  "nl": "Violet likeur is illegaal in sommige landen"
        },
        {
                  "en": "Original 1916 recipe included crème de violette, but it was omitted from 1930s-2000s recipes due to unavailability, changing the cocktail's character and color",
                  "es": "La receta original de 1916 incluía crème de violette, pero fue omitido de recetas de 1930s-2000s debido a indisponibilidad, cambiando el carácter y color del cóctel",
                  "de": "Original 1916 Rezept enthielt Crème de Violette, wurde aber von 1930er-2000er Rezepten weggelassen wegen Nichtverfügbarkeit, änderte Charakter und Farbe des Cocktails",
                  "nl": "Origineel 1916 recept bevatte crème de violette, maar het werd weggelaten uit 1930s-2000s recepten door onbeschikbaarheid, wat het karakter en kleur van de cocktail veranderde"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Aviation controversy centers on crème de violette. Hugo Ensslin's original 1916 recipe included gin, lemon juice, maraschino liqueur, and crème de violette (giving it a distinctive pale purple hue). However, when crème de violette became unavailable in the mid-20th century, recipes omitted it—most famously in 'The Savoy Cocktail Book' (1930). This created two distinct drinks: the pale Aviation without violette, and the original purple-hued version. When Rothman & Winter reintroduced crème de violette in 2007, bartenders rediscovered the original recipe. The debate continues: is the 'true' Aviation with or without violette?",
                  "es": "La controversia del Aviation se centra en el crème de violette. La receta original de Hugo Ensslin de 1916 incluía gin, jugo de limón, licor maraschino y crème de violette (dándole un distintivo tono púrpura pálido). Sin embargo, cuando el crème de violette se volvió indisponible a mediados del siglo XX, las recetas lo omitieron—más famosamente en 'The Savoy Cocktail Book' (1930). Esto creó dos bebidas distintas: el Aviation pálido sin violette y la versión original con tono púrpura. Cuando Rothman & Winter reintrodujo el crème de violette en 2007, los bartenders redescubrieron la receta original. El debate continúa: ¿es el 'verdadero' Aviation con o sin violette?",
                  "de": "Die Aviation-Kontroverse dreht sich um Crème de Violette. Hugo Ensslins Original-1916-Rezept enthielt Gin, Zitronensaft, Maraschino-Likör und Crème de Violette (gab ihm einen charakteristischen blassvioletten Farbton). Als Crème de Violette Mitte des 20. Jahrhunderts nicht verfügbar wurde, ließen Rezepte es weg—am berühmtesten in 'The Savoy Cocktail Book' (1930). Dies schuf zwei unterschiedliche Drinks: den blassen Aviation ohne Violette und die ursprüngliche lila-getönte Version. Als Rothman & Winter Crème de Violette 2007 wieder einführte, entdeckten Bartender das Originalrezept wieder. Die Debatte geht weiter: Ist der 'echte' Aviation mit oder ohne Violette?",
                  "nl": "De Aviation controverse draait om crème de violette. Hugo Ensslin's originele 1916 recept bevatte gin, citroensap, maraschino likeur en crème de violette (wat het een onderscheidende bleek paarse tint gaf). Echter, toen crème de violette onbeschikbaar werd in het midden van de 20e eeuw, lieten recepten het weg—meest beroemd in 'The Savoy Cocktail Book' (1930). Dit creëerde twee verschillende drankjes: de bleke Aviation zonder violette, en de originele paars-getinte versie. Toen Rothman & Winter crème de violette opnieuw introduceerde in 2007, herontdekten bartenders het originele recept. Het debat gaat door: is de 'echte' Aviation met of zonder violette?"
        }
      },
      {
        question: {
                  "en": "What is 'perlage' and why is it important in Champagne cocktails?",
                  "es": "¿Qué es el 'perlage' y por qué es importante en cócteles de Champagne?",
                  "de": "Was ist 'Perlage' und warum ist es wichtig in Champagner-Cocktails?",
                  "nl": "Wat is 'perlage' en waarom is het belangrijk in Champagne cocktails?"
        },
        options: [
        {
                  "en": "The French method of pouring Champagne",
                  "es": "El método francés de servir Champagne",
                  "de": "Die französische Methode Champagner einzuschenken",
                  "nl": "De Franse methode van Champagne inschenken"
        },
        {
                  "en": "A Champagne cocktail invented in Paris",
                  "es": "Un cóctel de Champagne inventado en París",
                  "de": "Ein in Paris erfundener Champagner-Cocktail",
                  "nl": "Een Champagne cocktail uitgevonden in Parijs"
        },
        {
                  "en": "The quality, size, and persistence of bubbles; important for texture, aroma delivery, and visual appeal in sparkling wine cocktails",
                  "es": "La calidad, tamaño y persistencia de las burbujas; importante para textura, entrega de aroma y atractivo visual en cócteles de vino espumoso",
                  "de": "Die Qualität, Größe und Persistenz der Blasen; wichtig für Textur, Aromaabgabe und visuelle Anziehung in Schaumwein-Cocktails",
                  "nl": "De kwaliteit, grootte en persistentie van bubbels; belangrijk voor textuur, aroma afgifte en visuele aantrekkingskracht in mousserende wijn cocktails"
        },
        {
                  "en": "A type of pearl garnish for fancy cocktails",
                  "es": "Un tipo de guarnición de perlas para cócteles elegantes",
                  "de": "Eine Art Perlengarnitur für schicke Cocktails",
                  "nl": "Een type parel garnering voor chique cocktails"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Perlage refers to the bubbles in sparkling wine—their size, quantity, persistence, and how they rise (train of bubbles). Fine perlage has small, persistent bubbles that create creamy mousse, deliver aromatics to the nose, and provide pleasant texture. In Champagne cocktails, preserving perlage is crucial: gentle stirring (never shaking), adding Champagne last, using chilled ingredients, and proper glassware all help maintain bubble structure. Poor technique destroys perlage, making cocktails flat and less aromatic. High-quality Champagne's persistent perlage ensures cocktails remain effervescent throughout drinking.",
                  "es": "Perlage se refiere a las burbujas en vino espumoso—su tamaño, cantidad, persistencia y cómo suben (tren de burbujas). Perlage fino tiene burbujas pequeñas y persistentes que crean mousse cremosa, entregan aromáticos a la nariz y proporcionan textura agradable. En cócteles de Champagne, preservar el perlage es crucial: revolver suavemente (nunca agitar), añadir Champagne al final, usar ingredientes fríos y cristalería apropiada ayudan a mantener la estructura de burbujas. Técnica pobre destruye el perlage, haciendo cócteles planos y menos aromáticos. El perlage persistente de Champagne de alta calidad asegura que los cócteles permanezcan efervescentes durante toda la bebida.",
                  "de": "Perlage bezieht sich auf die Blasen in Schaumwein—ihre Größe, Menge, Persistenz und wie sie aufsteigen (Blasenzug). Feine Perlage hat kleine, persistente Blasen, die cremige Mousse schaffen, Aromen zur Nase liefern und angenehme Textur bieten. In Champagner-Cocktails ist Perlage-Erhaltung entscheidend: sanftes Rühren (nie schütteln), Champagner zuletzt hinzufügen, gekühlte Zutaten verwenden und ordnungsgemäße Glaswaren helfen, Blasenstruktur zu erhalten. Schlechte Technik zerstört Perlage, macht Cocktails flach und weniger aromatisch. Hochwertige Champagners persistente Perlage gewährleistet, dass Cocktails während des Trinkens sprudelnd bleiben.",
                  "nl": "Perlage verwijst naar de bubbels in mousserende wijn—hun grootte, hoeveelheid, persistentie en hoe ze opstijgen (trein van bubbels). Fijne perlage heeft kleine, persistente bubbels die romige mousse creëren, aromaten leveren aan de neus en aangename textuur bieden. In Champagne cocktails is het behouden van perlage cruciaal: zacht roeren (nooit schudden), Champagne als laatste toevoegen, gekoelde ingrediënten gebruiken en juist glaswerk helpen allemaal bubbel structuur te behouden. Slechte techniek vernietigt perlage, wat cocktails plat en minder aromatisch maakt. Hoge-kwaliteit Champagne's persistente perlage verzekert dat cocktails bruisend blijven tijdens het drinken."
        }
      },
      {
        question: {
                  "en": "What is 'The Navy Grog' and why is it considered a 'holy grail' of tiki cocktails?",
                  "es": "¿Qué es 'The Navy Grog' y por qué se considera un 'santo grial' de cócteles tiki?",
                  "de": "Was ist 'The Navy Grog' und warum wird er als 'Heiliger Gral' der Tiki-Cocktails betrachtet?",
                  "nl": "Wat is 'The Navy Grog' en waarom wordt het beschouwd als een 'heilige graal' van tiki cocktails?"
        },
        options: [
        {
                  "en": "A cocktail served only to navy officers",
                  "es": "Un cóctel servido solo a oficiales de la marina",
                  "de": "Ein nur für Marineoffiziere servierter Cocktail",
                  "nl": "Een cocktail alleen geserveerd aan marine officieren"
        },
        {
                  "en": "A simple rum and cola variation",
                  "es": "Una simple variación de ron y cola",
                  "de": "Eine einfache Rum-Cola-Variation",
                  "nl": "Een eenvoudige rum en cola variatie"
        },
        {
                  "en": "Made with seawater and naval rum",
                  "es": "Hecho con agua de mar y ron naval",
                  "de": "Mit Meerwasser und Marine-Rum gemacht",
                  "nl": "Gemaakt met zeewater en marine rum"
        },
        {
                  "en": "Don the Beachcomber's complex three-rum blend with citrus, honey, and soda; famous for balanced complexity and the original 'grog' served with crushed ice cone",
                  "es": "Mezcla compleja de tres rones de Don the Beachcomber con cítricos, miel y soda; famoso por complejidad equilibrada y el 'grog' original servido con cono de hielo picado",
                  "de": "Don the Beachcombers komplexe Drei-Rum-Mischung mit Zitrus, Honig und Soda; berühmt für ausgewogene Komplexität und das original 'Grog' serviert mit zerstoßenem Eiskegel",
                  "nl": "Don the Beachcomber's complexe drie-rum blend met citrus, honing en soda; beroemd voor gebalanceerde complexiteit en de originele 'grog' geserveerd met crushed ijs kegel"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Navy Grog, created by Don the Beachcomber (Donn Beach) in the 1940s, is considered tiki royalty for its sophisticated balance. It uses three rums (typically light Puerto Rican, dark Jamaican, and Demerara), fresh lime and grapefruit juice, honey syrup, and soda water. The complexity comes from layering different rum profiles while maintaining refreshing citrus balance. Traditionally served with a crushed ice cone rising from the drink. The recipe was closely guarded—Don used numbered bottles and prepared secret mixes to prevent staff from replicating it. It represents tiki's evolution from simple tropical drinks to complex, balanced cocktails requiring genuine bartending skill.",
                  "es": "El Navy Grog, creado por Don the Beachcomber (Donn Beach) en los 1940s, se considera realeza tiki por su sofisticado equilibrio. Usa tres rones (típicamente puertorriqueño ligero, jamaicano oscuro y Demerara), jugo fresco de lima y toronja, jarabe de miel y agua con gas. La complejidad viene de capas de diferentes perfiles de ron mientras se mantiene equilibrio cítrico refrescante. Tradicionalmente servido con un cono de hielo picado elevándose de la bebida. La receta fue celosamente guardada—Don usó botellas numeradas y mezclas secretas preparadas para prevenir que el personal la replicara. Representa la evolución del tiki de bebidas tropicales simples a cócteles complejos y equilibrados que requieren genuina habilidad de bartender.",
                  "de": "Der Navy Grog, von Don the Beachcomber (Donn Beach) in den 1940ern kreiert, gilt als Tiki-Königtum für seine raffinierte Balance. Er verwendet drei Rums (typisch heller Puerto Rican, dunkler Jamaican und Demerara), frischen Limetten- und Grapefruitsaft, Honigsirup und Sodawasser. Die Komplexität kommt vom Schichten verschiedener Rum-Profile während erfrischende Zitrus-Balance erhalten wird. Traditionell mit einem zerstoßenen Eiskegel serviert, der aus dem Drink ragt. Das Rezept wurde streng gehütet—Don benutzte nummerierte Flaschen und vorbereitete geheime Mischungen, um Personal von Replikation abzuhalten. Es repräsentiert Tikis Evolution von einfachen tropischen Drinks zu komplexen, ausgewogenen Cocktails, die echtes Bartender-Können erfordern.",
                  "nl": "De Navy Grog, gecreëerd door Don the Beachcomber (Donn Beach) in de jaren 1940, wordt beschouwd als tiki royalty voor zijn verfijnde balans. Het gebruikt drie rums (typisch lichte Puerto Ricaanse, donkere Jamaicaanse en Demerara), vers limoen en grapefruitsap, honing siroop en sodawater. De complexiteit komt van het lagen van verschillende rum profielen terwijl verfrissende citrus balans wordt behouden. Traditioneel geserveerd met een crushed ijs kegel opstijgend uit de drank. Het recept werd nauwgezet bewaakt—Don gebruikte genummerde flessen en bereide geheime mixen om personeel van replicatie te weerhouden. Het vertegenwoordigt tiki's evolutie van eenvoudige tropische drankjes naar complexe, gebalanceerde cocktails die echte bartender vaardigheid vereisen."
        }
      },
      {
        question: {
                  "en": "What is 'batching' cocktails and what adjustments must be made for proper execution?",
                  "es": "¿Qué es el 'loteado' de cócteles y qué ajustes deben hacerse para ejecución apropiada?",
                  "de": "Was ist 'Batching' von Cocktails und welche Anpassungen müssen für ordnungsgemäße Ausführung gemacht werden?",
                  "nl": "Wat is 'batching' cocktails en welke aanpassingen moeten worden gemaakt voor juiste uitvoering?"
        },
        options: [
        {
                  "en": "Making one cocktail at a time very slowly",
                  "es": "Hacer un cóctel a la vez muy lentamente",
                  "de": "Einen Cocktail zur Zeit sehr langsam machen",
                  "nl": "Een cocktail tegelijk zeer langzaam maken"
        },
        {
                  "en": "Pre-mixing cocktail ingredients in large quantities; requires adding calculated dilution (20-25% water) to replicate shaking/stirring and adjusting for ingredient integration over time",
                  "es": "Pre-mezclar ingredientes de cócteles en grandes cantidades; requiere añadir dilución calculada (20-25% agua) para replicar agitado/revolver y ajustar por integración de ingredientes con el tiempo",
                  "de": "Vorab-Mischen von Cocktail-Zutaten in großen Mengen; erfordert Hinzufügung berechneter Verdünnung (20-25% Wasser) zur Replikation von Schütteln/Rühren und Anpassung für Zutatenintegration über Zeit",
                  "nl": "Vooraf mengen van cocktail ingrediënten in grote hoeveelheden; vereist toevoegen van berekende verdunning (20-25% water) om schudden/roeren te repliceren en aanpassen voor ingrediënt integratie over tijd"
        },
        {
                  "en": "Using batch production equipment like blenders",
                  "es": "Usar equipo de producción por lotes como licuadoras",
                  "de": "Batch-Produktionsausrüstung wie Mixer verwenden",
                  "nl": "Batch productie apparatuur zoals blenders gebruiken"
        },
        {
                  "en": "Serving cocktails in large bowls only",
                  "es": "Servir cócteles solo en tazones grandes",
                  "de": "Cocktails nur in großen Schalen servieren",
                  "nl": "Cocktails alleen in grote kom men serveren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Batching involves pre-mixing cocktail ingredients in large quantities for efficient service. Critical adjustments include: (1) Adding calculated dilution—typically 20-25% water by volume—to replicate the water added through shaking or stirring with ice. (2) Allowing ingredients to integrate—citrus acids, sugars, and spirits marry over time, often improving flavor. (3) Accounting for temperature—batched cocktails are stored cold and served over ice or chilled. (4) Adjusting for ingredient settling or separation. (5) Never batch egg whites, dairy, or carbonation. Proper batching maintains cocktail quality while enabling rapid service for events or high-volume bars.",
                  "es": "El loteado implica pre-mezclar ingredientes de cócteles en grandes cantidades para servicio eficiente. Ajustes críticos incluyen: (1) Añadir dilución calculada—típicamente 20-25% agua por volumen—para replicar el agua añadida al agitar o revolver con hielo. (2) Permitir que los ingredientes se integren—ácidos cítricos, azúcares y licores se casan con el tiempo, a menudo mejorando el sabor. (3) Contabilizar temperatura—cócteles loteados se almacenan fríos y se sirven sobre hielo o enfriados. (4) Ajustar por sedimentación o separación de ingredientes. (5) Nunca lotear claras de huevo, lácteos o carbonatación. El loteado apropiado mantiene calidad de cóctel mientras permite servicio rápido para eventos o bares de alto volumen.",
                  "de": "Batching beinhaltet Vorab-Mischen von Cocktail-Zutaten in großen Mengen für effizienten Service. Kritische Anpassungen umfassen: (1) Hinzufügung berechneter Verdünnung—typisch 20-25% Wasser nach Volumen—zur Replikation des durch Schütteln oder Rühren mit Eis hinzugefügten Wassers. (2) Zutatenintegration ermöglichen—Zitrussäuren, Zucker und Spirituosen vermählen sich über Zeit, verbessern oft Geschmack. (3) Temperaturberücksichtigung—gebatchte Cocktails werden kalt gelagert und über Eis oder gekühlt serviert. (4) Anpassung für Zutatensedimentation oder -trennung. (5) Nie Eiweiß, Milchprodukte oder Kohlensäure batchen. Ordnungsgemäßes Batching erhält Cocktail-Qualität während schneller Service für Events oder hochvolumige Bars ermöglicht wird.",
                  "nl": "Batching houdt in dat cocktail ingrediënten vooraf worden gemengd in grote hoeveelheden voor efficiënte service. Kritieke aanpassingen omvatten: (1) Berekende verdunning toevoegen—typisch 20-25% water per volume—om het water te repliceren dat wordt toegevoegd door schudden of roeren met ijs. (2) Ingrediënten laten integreren—citrus zuren, suikers en sterke dranken trouwen over tijd, verbeteren vaak smaak. (3) Rekening houden met temperatuur—batch cocktails worden koud opgeslagen en geserveerd over ijs of gekoeld. (4) Aanpassen voor ingrediënt bezinking of scheiding. (5) Nooit eiwit, zuivel of carbonatie batchen. Juiste batching behoudt cocktail kwaliteit terwijl snelle service mogelijk wordt gemaakt voor events of hoog-volume bars."
        }
      },
      {
        question: {
                  "en": "What is 'fat washing' and how does it create unique cocktail flavors?",
                  "es": "¿Qué es el 'lavado con grasa' y cómo crea sabores únicos de cócteles?",
                  "de": "Was ist 'Fettwaschen' und wie schafft es einzigartige Cocktail-Aromen?",
                  "nl": "Wat is 'vet wassen' en hoe creëert het unieke cocktail smaken?"
        },
        options: [
        {
                  "en": "Removing fat from ingredients before mixing",
                  "es": "Eliminar grasa de ingredientes antes de mezclar",
                  "de": "Fett aus Zutaten vor dem Mischen entfernen",
                  "nl": "Vet verwijderen uit ingrediënten voor mengen"
        },
        {
                  "en": "Infusing spirits with fat-soluble flavors (bacon, brown butter, olive oil) then freezing to separate fat, leaving rich aromatic compounds",
                  "es": "Infusionar licores con sabores solubles en grasa (tocino, mantequilla marrón, aceite de oliva) luego congelar para separar la grasa, dejando compuestos aromáticos ricos",
                  "de": "Spirituosen mit fettlöslichen Aromen (Speck, braune Butter, Olivenöl) infundieren, dann einfrieren um Fett zu trennen, hinterlässt reiche aromatische Verbindungen",
                  "nl": "Sterke dranken infuseren met vetoplosbare smaken (bacon, bruine boter, olijfolie) dan bevriezen om vet te scheiden, wat rijke aromatische verbindingen achterlaat"
        },
        {
                  "en": "Adding cream to cocktails for texture",
                  "es": "Añadir crema a cócteles para textura",
                  "de": "Sahne zu Cocktails für Textur hinzufügen",
                  "nl": "Room toevoegen aan cocktails voor textuur"
        },
        {
                  "en": "Washing cocktail equipment with fatty soap",
                  "es": "Lavar equipo de cócteles con jabón graso",
                  "de": "Cocktail-Ausrüstung mit Fettseife waschen",
                  "nl": "Cocktail apparatuur wassen met vettige zeep"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Fat washing is a technique where spirits are infused with fat-soluble flavor compounds from ingredients like bacon, brown butter, sesame oil, or duck fat. The spirit and fat are mixed and allowed to infuse (often 4-6 hours), then frozen. Since fat solidifies at cold temperatures while alcohol remains liquid, the solid fat layer can be removed, leaving behind a spirit infused with rich, savory, or umami flavors that would be impossible to extract through traditional infusion. This creates unique flavor profiles like bacon-bourbon or brown butter-rum.",
                  "es": "El lavado con grasa es una técnica donde los licores se infusionan con compuestos de sabor solubles en grasa de ingredientes como tocino, mantequilla marrón, aceite de sésamo o grasa de pato. El licor y la grasa se mezclan y se dejan infusionar (a menudo 4-6 horas), luego se congelan. Como la grasa se solidifica a temperaturas frías mientras el alcohol permanece líquido, la capa de grasa sólida puede ser eliminada, dejando atrás un licor infusionado con sabores ricos, salados o umami que serían imposibles de extraer a través de infusión tradicional. Esto crea perfiles de sabor únicos como bourbon-tocino o ron-mantequilla marrón.",
                  "de": "Fettwaschen ist eine Technik, bei der Spirituosen mit fettlöslichen Geschmacksverbindungen aus Zutaten wie Speck, brauner Butter, Sesamöl oder Entenfett infundiert werden. Die Spirituose und das Fett werden gemischt und dürfen infundieren (oft 4-6 Stunden), dann eingefroren. Da Fett bei kalten Temperaturen fest wird während Alkohol flüssig bleibt, kann die feste Fettschicht entfernt werden, hinterlässt eine Spirituose infundiert mit reichen, herzhaften oder Umami-Aromen, die durch traditionelle Infusion unmöglich zu extrahieren wären. Dies schafft einzigartige Geschmacksprofile wie Speck-Bourbon oder braune Butter-Rum.",
                  "nl": "Vet wassen is een techniek waarbij sterke dranken worden geïnfuseerd met vetoplosbare smaakverbindingen van ingrediënten zoals bacon, bruine boter, sesamolie of eendenvet. De sterke drank en het vet worden gemengd en mogen infuseren (vaak 4-6 uur), dan bevroren. Omdat vet stolt bij koude temperaturen terwijl alcohol vloeibaar blijft, kan de vaste vetlaag worden verwijderd, wat een sterke drank achterlaat geïnfuseerd met rijke, hartige of umami smaken die onmogelijk te extraheren zouden zijn door traditionele infusie. Dit creëert unieke smaakprofielen zoals bacon-bourbon of bruine boter-rum."
        }
      },
      {
        question: {
                  "en": "What is 'centrifugal clarification' in cocktails and what advantages does it offer?",
                  "es": "¿Qué es la 'clarificación centrífuga' en cócteles y qué ventajas ofrece?",
                  "de": "Was ist 'Zentrifugalklärung' in Cocktails und welche Vorteile bietet sie?",
                  "nl": "Wat is 'centrifugale verheldering' in cocktails en welke voordelen biedt het?"
        },
        options: [
        {
                  "en": "Using a special filter paper",
                  "es": "Usar papel de filtro especial",
                  "de": "Spezielles Filterpapier verwenden",
                  "nl": "Speciaal filterpapier gebruiken"
        },
        {
                  "en": "Stirring cocktails in circular motions",
                  "es": "Revolver cócteles en movimientos circulares",
                  "de": "Cocktails in kreisförmigen Bewegungen rühren",
                  "nl": "Cocktails in circulaire bewegingen roeren"
        },
        {
                  "en": "Shaking cocktails very vigorously",
                  "es": "Agitar cócteles muy vigorosamente",
                  "de": "Cocktails sehr kräftig schütteln",
                  "nl": "Cocktails zeer krachtig schudden"
        },
        {
                  "en": "Using high-speed spinning to separate solids from liquids rapidly, creating crystal-clear cocktails in minutes instead of hours/days with superior flavor retention",
                  "es": "Usar giro de alta velocidad para separar sólidos de líquidos rápidamente, creando cócteles cristalinos en minutos en lugar de horas/días con retención de sabor superior",
                  "de": "Hochgeschwindigkeitsschleudern verwenden um Feststoffe schnell von Flüssigkeiten zu trennen, kristallklare Cocktails in Minuten statt Stunden/Tagen mit überlegener Geschmackserhaltung schaffen",
                  "nl": "Hoge snelheid draaien gebruiken om vaste stoffen snel van vloeistoffen te scheiden, kristalheldere cocktails creëren in minuten in plaats van uren/dagen met superieure smaakbehoud"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Centrifugal clarification uses a centrifuge (typically lab-grade at 3000-5000 RPM) to separate particles from cocktail ingredients through rapid spinning. The centrifugal force pulls denser particles outward, leaving crystal-clear liquid. This technique clarifies citrus juices, removes pulp and sediment, or creates transparent versions of normally opaque ingredients in minutes. Compared to traditional filtering or milk punch clarification (which can take hours or days), centrifugation is rapid and preserves more volatile aromatic compounds that might be lost in longer processes.",
                  "es": "La clarificación centrífuga usa una centrífuga (típicamente grado laboratorio a 3000-5000 RPM) para separar partículas de ingredientes de cócteles a través de giro rápido. La fuerza centrífuga empuja partículas más densas hacia afuera, dejando líquido cristalino. Esta técnica clarifica jugos cítricos, elimina pulpa y sedimento, o crea versiones transparentes de ingredientes normalmente opacos en minutos. Comparado con filtrado tradicional o clarificación con leche punch (que puede tomar horas o días), la centrifugación es rápida y preserva más compuestos aromáticos volátiles que podrían perderse en procesos más largos.",
                  "de": "Zentrifugalklärung verwendet eine Zentrifuge (typisch Laborqualität bei 3000-5000 RPM) um Partikel aus Cocktail-Zutaten durch schnelles Schleudern zu trennen. Die Zentrifugalkraft zieht dichtere Partikel nach außen, hinterlässt kristallklare Flüssigkeit. Diese Technik klärt Zitrussäfte, entfernt Fruchtfleisch und Sediment, oder schafft transparente Versionen normalerweise undurchsichtiger Zutaten in Minuten. Verglichen mit traditionellem Filtern oder Milk Punch Klärung (die Stunden oder Tage dauern kann), ist Zentrifugation schnell und bewahrt mehr flüchtige aromatische Verbindungen die in längeren Prozessen verloren gehen könnten.",
                  "nl": "Centrifugale verheldering gebruikt een centrifuge (typisch laboratorium kwaliteit bij 3000-5000 RPM) om deeltjes te scheiden van cocktail ingrediënten door snel draaien. De centrifugale kracht trekt dichtere deeltjes naar buiten, laat kristalheldere vloeistof achter. Deze techniek verheldert citrus sappen, verwijdert pulp en sediment, of creëert transparante versies van normaal ondoorzichtige ingrediënten in minuten. Vergeleken met traditioneel filteren of melk punch verheldering (die uren of dagen kan duren), is centrifugatie snel en behoudt meer vluchtige aromatische verbindingen die verloren kunnen gaan in langere processen."
        }
      },
      {
        question: {
                  "en": "What is 'acid adjustment' in cocktails and why is it critical for balanced drinks?",
                  "es": "¿Qué es el 'ajuste de ácido' en cócteles y por qué es crítico para bebidas balanceadas?",
                  "de": "Was ist 'Säureanpassung' in Cocktails und warum ist sie kritisch für ausgewogene Getränke?",
                  "nl": "Wat is 'zuur aanpassing' in cocktails en waarom is het kritiek voor gebalanceerde drankjes?"
        },
        options: [
        {
                  "en": "Measuring and standardizing acidity (pH/titratable acidity) using citric, malic, or tartaric acids to compensate for natural variation in citrus and ensure consistency",
                  "es": "Medir y estandarizar acidez (pH/acidez titulable) usando ácidos cítrico, málico o tartárico para compensar variación natural en cítricos y asegurar consistencia",
                  "de": "Säure (pH/titrierbare Säure) messen und standardisieren mit Zitronen-, Apfel- oder Weinsäure um natürliche Variation in Zitrusfrüchten auszugleichen und Konsistenz sicherzustellen",
                  "nl": "Zuurgraad (pH/titreerbare zuurgraad) meten en standaardiseren met citroen-, appel- of wijnsteenzuur om natuurlijke variatie in citrus te compenseren en consistentie te waarborgen"
        },
        {
                  "en": "Using only organic citrus fruits",
                  "es": "Usar solo frutas cítricas orgánicas",
                  "de": "Nur biologische Zitrusfrüchte verwenden",
                  "nl": "Alleen biologische citrusvruchten gebruiken"
        },
        {
                  "en": "Avoiding all acidic ingredients",
                  "es": "Evitar todos los ingredientes ácidos",
                  "de": "Alle sauren Zutaten vermeiden",
                  "nl": "Alle zure ingrediënten vermijden"
        },
        {
                  "en": "Adding lemon juice to all cocktails",
                  "es": "Añadir jugo de limón a todos los cócteles",
                  "de": "Zitronensaft zu allen Cocktails hinzufügen",
                  "nl": "Citroensap toevoegen aan alle cocktails"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Acid adjustment involves measuring the acidity of citrus juices (which varies by season, ripeness, and variety) and standardizing it to consistent levels. Professional bartenders measure pH (typically targeting 2.2-2.5 for lime, 2.3-2.6 for lemon) or titratable acidity. When natural juice is too weak, they add citric acid, malic acid, or tartaric acid; when too strong, they dilute. This ensures every cocktail has identical balance regardless of seasonal fruit variation. Advanced bars create 'super juices' combining citric/malic acids with citrus oils for extended shelf life and consistency.",
                  "es": "El ajuste de ácido implica medir la acidez de jugos cítricos (que varía por estación, madurez y variedad) y estandarizarla a niveles consistentes. Bartenders profesionales miden pH (típicamente apuntando a 2.2-2.5 para lima, 2.3-2.6 para limón) o acidez titulable. Cuando el jugo natural es demasiado débil, añaden ácido cítrico, ácido málico o ácido tartárico; cuando es demasiado fuerte, diluyen. Esto asegura que cada cóctel tenga balance idéntico sin importar variación estacional de frutas. Bares avanzados crean 'super jugos' combinando ácidos cítrico/málico con aceites cítricos para vida útil extendida y consistencia.",
                  "de": "Säureanpassung beinhaltet Messung der Säure von Zitrussäften (die nach Saison, Reife und Sorte variiert) und Standardisierung auf konsistente Niveaus. Professionelle Bartender messen pH (typisch Ziel 2,2-2,5 für Limette, 2,3-2,6 für Zitrone) oder titrierbare Säure. Wenn natürlicher Saft zu schwach ist, fügen sie Zitronensäure, Apfelsäure oder Weinsäure hinzu; wenn zu stark, verdünnen sie. Dies stellt sicher dass jeder Cocktail identische Balance hat unabhängig von saisonaler Fruchtvariation. Fortgeschrittene Bars schaffen 'Super-Säfte' die Zitronen-/Apfelsäuren mit Zitrusölen für verlängerte Haltbarkeit und Konsistenz kombinieren.",
                  "nl": "Zuur aanpassing houdt in dat de zuurgraad van citrus sappen wordt gemeten (die varieert per seizoen, rijpheid en variëteit) en gestandaardiseerd naar consistente niveaus. Professionele bartenders meten pH (typisch streven naar 2,2-2,5 voor limoen, 2,3-2,6 voor citroen) of titreerbare zuurgraad. Wanneer natuurlijk sap te zwak is, voegen ze citroenzuur, appelzuur of wijnsteenzuur toe; wanneer te sterk, verdunnen ze. Dit zorgt ervoor dat elke cocktail identieke balans heeft ongeacht seizoensgebonden fruitvariatie. Geavanceerde bars creëren 'super sappen' die citroen-/appelzuren combineren met citrus oliën voor verlengde houdbaarheid en consistentie."
        }
      },
      {
        question: {
                  "en": "What is 'carbonation' in craft cocktails and what methods do bartenders use?",
                  "es": "¿Qué es la 'carbonatación' en cócteles artesanales y qué métodos usan los bartenders?",
                  "de": "Was ist 'Karbonisierung' in handwerklichen Cocktails und welche Methoden verwenden Bartender?",
                  "nl": "Wat is 'carbonatie' in ambachtelijke cocktails en welke methoden gebruiken bartenders?"
        },
        options: [
        {
                  "en": "Infusing CO2 into cocktails using forced carbonation (kegs/CO2), iSi whippers, or carbonation rigs for effervescence and enhanced aromatics",
                  "es": "Infusionar CO2 en cócteles usando carbonatación forzada (barriles/CO2), sifones iSi o equipos de carbonatación para efervescencia y aromáticos mejorados",
                  "de": "CO2 in Cocktails infundieren mit Zwangskarbonisierung (Fässer/CO2), iSi-Sahnespender oder Karbonisierungsanlagen für Sprudel und verbesserte Aromatik",
                  "nl": "CO2 infuseren in cocktails met geforceerde carbonatie (vaten/CO2), iSi whippers of carbonatie rigs voor bruising en verbeterde aromaten"
        },
        {
                  "en": "Shaking cocktails very hard",
                  "es": "Agitar cócteles muy fuerte",
                  "de": "Cocktails sehr hart schütteln",
                  "nl": "Cocktails zeer hard schudden"
        },
        {
                  "en": "Adding sparkling water to any drink",
                  "es": "Añadir agua con gas a cualquier bebida",
                  "de": "Sprudelwasser zu jedem Getränk hinzufügen",
                  "nl": "Bruisend water toevoegen aan elke drank"
        },
        {
                  "en": "Using only champagne as mixer",
                  "es": "Usar solo champaña como mezclador",
                  "de": "Nur Champagner als Mixer verwenden",
                  "nl": "Alleen champagne als mixer gebruiken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Craft cocktail carbonation involves infusing carbon dioxide into mixed drinks to create effervescence and enhance aromatic perception. Methods include: (1) Forced carbonation using kegs and CO2 tanks (like beer), allowing batched carbonated cocktails. (2) iSi whippers/cream chargers with CO2 cartridges for quick carbonation. (3) Carbonation rigs/bottles that carbonate individual servings. Carbonation lifts aromatics to the nose, adds texture, and creates unique drinking experiences. Critical factors include cold temperature (CO2 dissolves better in cold liquids), pressure levels (typically 30-40 PSI), and avoiding ingredients that foam excessively.",
                  "es": "La carbonatación de cócteles artesanales implica infusionar dióxido de carbono en bebidas mezcladas para crear efervescencia y mejorar percepción aromática. Métodos incluyen: (1) Carbonatación forzada usando barriles y tanques de CO2 (como cerveza), permitiendo cócteles carbonatados por lotes. (2) Sifones iSi/cargadores de crema con cartuchos de CO2 para carbonatación rápida. (3) Equipos/botellas de carbonatación que carbonatan porciones individuales. La carbonatación eleva aromáticos a la nariz, añade textura y crea experiencias de bebida únicas. Factores críticos incluyen temperatura fría (CO2 se disuelve mejor en líquidos fríos), niveles de presión (típicamente 30-40 PSI) y evitar ingredientes que espuman excesivamente.",
                  "de": "Handwerkliche Cocktail-Karbonisierung beinhaltet Infusion von Kohlendioxid in gemischte Getränke um Sprudel zu schaffen und aromatische Wahrnehmung zu verbessern. Methoden umfassen: (1) Zwangskarbonisierung mit Fässern und CO2-Tanks (wie Bier), ermöglicht gebatchte karbonisierte Cocktails. (2) iSi-Sahnespender/Sahnepatronen mit CO2-Kartuschen für schnelle Karbonisierung. (3) Karbonisierungsanlagen/-flaschen die einzelne Portionen karbonisieren. Karbonisierung hebt Aromen zur Nase, fügt Textur hinzu und schafft einzigartige Trinkerfahrungen. Kritische Faktoren umfassen kalte Temperatur (CO2 löst sich besser in kalten Flüssigkeiten), Druckniveaus (typisch 30-40 PSI) und Vermeidung von Zutaten die übermäßig schäumen.",
                  "nl": "Ambachtelijke cocktail carbonatie houdt in dat koolstofdioxide wordt geïnfuseerd in gemengde dranken om bruising te creëren en aromatische perceptie te verbeteren. Methoden omvatten: (1) Geforceerde carbonatie met vaten en CO2 tanks (zoals bier), wat batch gecarboneerde cocktails mogelijk maakt. (2) iSi whippers/room chargers met CO2 cartridges voor snelle carbonatie. (3) Carbonatie rigs/flessen die individuele porties carboneren. Carbonatie tilt aromaten naar de neus, voegt textuur toe en creëert unieke drinkervaringen. Kritieke factoren omvatten koude temperatuur (CO2 lost beter op in koude vloeistoffen), drukniveaus (typisch 30-40 PSI) en vermijden van ingrediënten die overmatig schuimen."
        }
      },
      {
        question: {
                  "en": "What is 'nitro-muddling' or 'rapid infusion' with nitrogen and how does it work?",
                  "es": "¿Qué es el 'macerado con nitro' o 'infusión rápida' con nitrógeno y cómo funciona?",
                  "de": "Was ist 'Nitro-Muddeln' oder 'Schnellinfusion' mit Stickstoff und wie funktioniert es?",
                  "nl": "Wat is 'nitro-muddelen' of 'snelle infusie' met stikstof en hoe werkt het?"
        },
        options: [
        {
                  "en": "Muddling ingredients very quickly by hand",
                  "es": "Macerar ingredientes muy rápidamente a mano",
                  "de": "Zutaten sehr schnell von Hand muddeln",
                  "nl": "Ingrediënten zeer snel met de hand muddelen"
        },
        {
                  "en": "Adding nitrogen gas for bubbles like beer",
                  "es": "Añadir gas nitrógeno para burbujas como cerveza",
                  "de": "Stickstoffgas für Blasen wie Bier hinzufügen",
                  "nl": "Stikstof gas toevoegen voor bubbels zoals bier"
        },
        {
                  "en": "Using iSi whipper with N2O to force liquid into ingredient cells under pressure, then releasing pressure causes rapid extraction as liquid expands out with flavors",
                  "es": "Usar sifón iSi con N2O para forzar líquido en células de ingredientes bajo presión, luego liberar presión causa extracción rápida al expandirse líquido con sabores",
                  "de": "iSi-Sahnespender mit N2O verwenden um Flüssigkeit unter Druck in Zutatenzellen zu zwingen, dann Druckfreigabe verursacht schnelle Extraktion da Flüssigkeit sich mit Aromen ausdehnt",
                  "nl": "iSi whipper met N2O gebruiken om vloeistof onder druk in ingrediënt cellen te forceren, dan druk vrijgeven veroorzaakt snelle extractie als vloeistof expandeert met smaken"
        },
        {
                  "en": "Freezing ingredients with liquid nitrogen",
                  "es": "Congelar ingredientes con nitrógeno líquido",
                  "de": "Zutaten mit flüssigem Stickstoff einfrieren",
                  "nl": "Ingrediënten bevriezen met vloeibare stikstof"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Nitro-muddling or rapid infusion uses an iSi whipper (cream whipper) charged with N2O to achieve instant infusions. Ingredients and liquid are sealed in the canister and pressurized (typically 2 charges). The pressure forces liquid deep into the cellular structure of herbs, fruits, or spices. When pressure is released, the rapid decompression causes the liquid to expand out of the cells, bringing extracted flavors with it. What normally takes hours or days of traditional infusion happens in 1-2 minutes. This technique works best with delicate aromatics like herbs, tea, or fresh fruit.",
                  "es": "El macerado con nitro o infusión rápida usa un sifón iSi (sifón de crema) cargado con N2O para lograr infusiones instantáneas. Ingredientes y líquido se sellan en el contenedor y se presurizan (típicamente 2 cargas). La presión fuerza líquido profundo en la estructura celular de hierbas, frutas o especias. Cuando se libera la presión, la rápida descompresión causa que el líquido se expanda fuera de las células, trayendo sabores extraídos con él. Lo que normalmente toma horas o días de infusión tradicional sucede en 1-2 minutos. Esta técnica funciona mejor con aromáticos delicados como hierbas, té o frutas frescas.",
                  "de": "Nitro-Muddeln oder Schnellinfusion verwendet einen iSi-Sahnespender geladen mit N2O um sofortige Infusionen zu erreichen. Zutaten und Flüssigkeit werden im Behälter versiegelt und unter Druck gesetzt (typisch 2 Ladungen). Der Druck zwingt Flüssigkeit tief in die Zellstruktur von Kräutern, Früchten oder Gewürzen. Wenn Druck freigegeben wird, verursacht die schnelle Dekompression dass Flüssigkeit aus den Zellen expandiert, bringt extrahierte Aromen mit sich. Was normalerweise Stunden oder Tage traditioneller Infusion dauert geschieht in 1-2 Minuten. Diese Technik funktioniert am besten mit empfindlichen Aromaten wie Kräutern, Tee oder frischem Obst.",
                  "nl": "Nitro-muddelen of snelle infusie gebruikt een iSi whipper (room whipper) geladen met N2O om directe infusies te bereiken. Ingrediënten en vloeistof worden verzegeld in de container en onder druk gezet (typisch 2 ladingen). De druk forceert vloeistof diep in de cellulaire structuur van kruiden, fruit of specerijen. Wanneer druk wordt vrijgegeven, veroorzaakt de snelle decompressie dat de vloeistof uit de cellen expandeert, geëxtraheerde smaken meeneemt. Wat normaal uren of dagen van traditionele infusie kost gebeurt in 1-2 minuten. Deze techniek werkt het beste met delicate aromaten zoals kruiden, thee of vers fruit."
        }
      },
      {
        question: {
                  "en": "What is 'smoke aging' or 'wood smoking' cocktails and what flavors does it impart?",
                  "es": "¿Qué es el 'envejecimiento con humo' o 'ahumado con madera' de cócteles y qué sabores imparte?",
                  "de": "Was ist 'Rauchalterung' oder 'Holzräuchern' von Cocktails und welche Aromen verleiht es?",
                  "nl": "Wat is 'rook rijping' of 'hout roken' cocktails en welke smaken geeft het?"
        },
        options: [
        {
                  "en": "Adding liquid smoke flavoring",
                  "es": "Añadir saborizante de humo líquido",
                  "de": "Flüssigrauchgewürz hinzufügen",
                  "nl": "Vloeibare rook smaakstof toevoegen"
        },
        {
                  "en": "Storing cocktails in smoky rooms",
                  "es": "Almacenar cócteles en habitaciones humeantes",
                  "de": "Cocktails in rauchigen Räumen lagern",
                  "nl": "Cocktails opslaan in rokerige kamers"
        },
        {
                  "en": "Exposing cocktails/ingredients to wood smoke (oak, applewood, cherry, mesquite) to add complexity through phenolic compounds, vanillin, and char flavors",
                  "es": "Exponer cócteles/ingredientes a humo de madera (roble, manzano, cereza, mezquite) para añadir complejidad a través de compuestos fenólicos, vainillina y sabores carbonizados",
                  "de": "Cocktails/Zutaten Holzrauch (Eiche, Apfelholz, Kirsche, Mesquite) aussetzen um Komplexität durch phenolische Verbindungen, Vanillin und Kohlearomen hinzuzufügen",
                  "nl": "Cocktails/ingrediënten blootstellen aan houtrook (eik, appelhout, kers, mesquite) om complexiteit toe te voegen door fenolische verbindingen, vanilline en rokerige smaken"
        },
        {
                  "en": "Burning sugar for caramelization",
                  "es": "Quemar azúcar para caramelización",
                  "de": "Zucker für Karamellisierung verbrennen",
                  "nl": "Suiker verbranden voor karamelisatie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Smoke aging or wood smoking involves exposing cocktail ingredients or finished drinks to wood smoke to impart complex flavors. Methods include smoking glassware (trapping smoke under inverted glass), smoking spirits or syrups in smokers/smoke guns, or using smoke-filled chambers. Different woods provide distinct profiles: oak (vanilla, caramel), applewood (sweet, fruity), cherry (mild, sweet), mesquite (intense, earthy). The smoke adds phenolic compounds, guaiacol (smoky, medicinal), and char notes. This technique complements aged spirits, adds depth to fresh ingredients, and creates campfire or BBQ associations in the drinking experience.",
                  "es": "El envejecimiento con humo o ahumado con madera implica exponer ingredientes de cócteles o bebidas terminadas a humo de madera para impartir sabores complejos. Métodos incluyen ahumar cristalería (atrapar humo bajo vaso invertido), ahumar licores o jarabes en ahumadores/pistolas de humo, o usar cámaras llenas de humo. Diferentes maderas proporcionan perfiles distintos: roble (vainilla, caramelo), manzano (dulce, afrutado), cereza (suave, dulce), mezquite (intenso, terroso). El humo añade compuestos fenólicos, guayacol (ahumado, medicinal) y notas carbonizadas. Esta técnica complementa licores añejados, añade profundidad a ingredientes frescos y crea asociaciones de fogata o BBQ en la experiencia de bebida.",
                  "de": "Rauchalterung oder Holzräuchern beinhaltet Exposition von Cocktail-Zutaten oder fertigen Getränken gegenüber Holzrauch um komplexe Aromen zu verleihen. Methoden umfassen Räuchern von Gläsern (Rauch unter umgedrehtem Glas einfangen), Räuchern von Spirituosen oder Sirupen in Räucheröfen/Rauchpistolen, oder Verwendung rauchgefüllter Kammern. Verschiedene Hölzer bieten unterschiedliche Profile: Eiche (Vanille, Karamell), Apfelholz (süß, fruchtig), Kirsche (mild, süß), Mesquite (intensiv, erdig). Der Rauch fügt phenolische Verbindungen, Guajakol (rauchig, medizinisch) und Kohlenoten hinzu. Diese Technik ergänzt gealterte Spirituosen, fügt frischen Zutaten Tiefe hinzu und schafft Lagerfeuer- oder BBQ-Assoziationen im Trinkerlebnis.",
                  "nl": "Rook rijping of hout roken houdt in dat cocktail ingrediënten of afgewerkte drankjes worden blootgesteld aan houtrook om complexe smaken over te brengen. Methoden omvatten glazen roken (rook vangen onder omgekeerd glas), sterke dranken of siropen roken in rokers/rook pistolen, of rook gevulde kamers gebruiken. Verschillende houtsoorten bieden verschillende profielen: eik (vanille, karamel), appelhout (zoet, fruitig), kers (mild, zoet), mesquite (intens, aards). De rook voegt fenolische verbindingen, guaiacol (rokerig, medicinaal) en rokerige noten toe. Deze techniek vult gerijpte sterke dranken aan, voegt diepte toe aan verse ingrediënten en creëert kampvuur of BBQ associaties in de drinkervaring."
        }
      },
      {
        question: {
                  "en": "What is 'hydrocolloid' use in cocktails and what textures can it create?",
                  "es": "¿Qué es el uso de 'hidrocoloide' en cócteles y qué texturas puede crear?",
                  "de": "Was ist 'Hydrokolloid'-Verwendung in Cocktails und welche Texturen kann es schaffen?",
                  "nl": "Wat is 'hydrocolloïde' gebruik in cocktails en welke texturen kan het creëren?"
        },
        options: [
        {
                  "en": "Using only ice to chill drinks",
                  "es": "Usar solo hielo para enfriar bebidas",
                  "de": "Nur Eis zum Kühlen von Getränken verwenden",
                  "nl": "Alleen ijs gebruiken om drankjes te koelen"
        },
        {
                  "en": "Using gelling agents (agar, gellan, xanthan, methylcellulose) to create gels, foams, pearls, or suspensions, manipulating cocktail texture independently of flavor",
                  "es": "Usar agentes gelificantes (agar, gellan, xantano, metilcelulosa) para crear geles, espumas, perlas o suspensiones, manipulando textura de cóctel independientemente del sabor",
                  "de": "Geliermittel (Agar, Gellan, Xanthan, Methylcellulose) verwenden um Gele, Schäume, Perlen oder Suspensionen zu schaffen, Cocktail-Textur unabhängig vom Geschmack manipulieren",
                  "nl": "Geleermiddelen (agar, gellan, xanthan, methylcellulose) gebruiken om gels, schuimen, parels of suspensies te creëren, cocktail textuur onafhankelijk van smaak manipuleren"
        },
        {
                  "en": "Adding water to cocktails for dilution",
                  "es": "Añadir agua a cócteles para dilución",
                  "de": "Wasser zu Cocktails für Verdünnung hinzufügen",
                  "nl": "Water toevoegen aan cocktails voor verdunning"
        },
        {
                  "en": "Creating foam with egg whites",
                  "es": "Crear espuma con claras de huevo",
                  "de": "Schaum mit Eiweiß schaffen",
                  "nl": "Schuim creëren met eiwit"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Hydrocolloids are substances (agar-agar, gellan gum, xanthan gum, methylcellulose, lecithin) that modify liquid texture without affecting flavor. In cocktails, they enable: (1) Agar/gellan for solid gels or 'caviar' pearls using spherification. (2) Xanthan gum for suspending ingredients or creating viscosity. (3) Lecithin for stable foams/airs. (4) Methylcellulose for hot gels or unique textures. These allow bartenders to create cocktails with unexpected textures: gelatinous cubes, spherified flavor bursts, ultra-stable foams, or thick suspensions while maintaining pure flavor profiles. Molecular mixology relies heavily on hydrocolloid science.",
                  "es": "Los hidrocoloides son sustancias (agar-agar, goma gellan, goma xantana, metilcelulosa, lecitina) que modifican textura líquida sin afectar sabor. En cócteles, permiten: (1) Agar/gellan para geles sólidos o perlas 'caviar' usando esferificación. (2) Goma xantana para suspender ingredientes o crear viscosidad. (3) Lecitina para espumas/aires estables. (4) Metilcelulosa para geles calientes o texturas únicas. Estos permiten a bartenders crear cócteles con texturas inesperadas: cubos gelatinosos, explosiones de sabor esferificadas, espumas ultra-estables o suspensiones espesas mientras mantienen perfiles de sabor puros. La mixología molecular depende fuertemente de ciencia de hidrocoloides.",
                  "de": "Hydrokolloide sind Substanzen (Agar-Agar, Gellan-Gummi, Xanthan-Gummi, Methylcellulose, Lecithin) die Flüssigkeitstextur modifizieren ohne Geschmack zu beeinflussen. In Cocktails ermöglichen sie: (1) Agar/Gellan für feste Gele oder 'Kaviar'-Perlen mit Sphärifizierung. (2) Xanthan-Gummi zum Suspendieren von Zutaten oder Schaffen von Viskosität. (3) Lecithin für stabile Schäume/Lüfte. (4) Methylcellulose für heiße Gele oder einzigartige Texturen. Diese erlauben Bartendern Cocktails mit unerwarteten Texturen zu schaffen: gelatinöse Würfel, sphärifizierte Geschmacksausbrüche, ultra-stabile Schäume oder dicke Suspensionen während reine Geschmacksprofile erhalten bleiben. Molekulare Mixologie verlässt sich stark auf Hydrokolloid-Wissenschaft.",
                  "nl": "Hydrocolloïden zijn stoffen (agar-agar, gellan gom, xanthan gom, methylcellulose, lecithine) die vloeistof textuur wijzigen zonder smaak te beïnvloeden. In cocktails maken ze mogelijk: (1) Agar/gellan voor vaste gels of 'kaviaar' parels met spherificatie. (2) Xanthan gom voor het suspenderen van ingrediënten of creëren van viscositeit. (3) Lecithine voor stabiele schuimen/luchten. (4) Methylcellulose voor warme gels of unieke texturen. Deze stellen bartenders in staat cocktails te creëren met onverwachte texturen: gelatineuze blokjes, spherified smaak uitbarstingen, ultra-stabiele schuimen of dikke suspensies terwijl pure smaakprofielen behouden blijven. Moleculaire mixologie vertrouwt sterk op hydrocolloïde wetenschap."
        }
      },
      {
        question: {
                  "en": "What is the 'Negroni family' of cocktails and what formula defines them?",
                  "es": "¿Qué es la 'familia Negroni' de cócteles y qué fórmula los define?",
                  "de": "Was ist die 'Negroni-Familie' von Cocktails und welche Formel definiert sie?",
                  "nl": "Wat is de 'Negroni familie' van cocktails en welke formule definieert ze?"
        },
        options: [
        {
                  "en": "Equal parts spirit + amaro/bitter liqueur + aromatized wine, following the 1:1:1 Negroni template with variations substituting base ingredients (Boulevardier uses whiskey, White Negroni uses Suze/Lillet)",
                  "es": "Partes iguales licor + amaro/licor amargo + vino aromatizado, siguiendo la plantilla Negroni 1:1:1 con variaciones sustituyendo ingredientes base (Boulevardier usa whisky, Negroni Blanco usa Suze/Lillet)",
                  "de": "Gleiche Teile Spirituose + Amaro/Bitter-Likör + aromatisierter Wein, folgt der 1:1:1 Negroni-Vorlage mit Variationen die Basiszutaten ersetzen (Boulevardier verwendet Whiskey, Weißer Negroni verwendet Suze/Lillet)",
                  "nl": "Gelijke delen sterke drank + amaro/bitter likeur + gearomatiseerde wijn, volgens het 1:1:1 Negroni sjabloon met variaties die basis ingrediënten vervangen (Boulevardier gebruikt whisky, Witte Negroni gebruikt Suze/Lillet)"
        },
        {
                  "en": "Cocktails containing Campari exclusively",
                  "es": "Cócteles que contienen exclusivamente Campari",
                  "de": "Cocktails die ausschließlich Campari enthalten",
                  "nl": "Cocktails die exclusief Campari bevatten"
        },
        {
                  "en": "Italian cocktails made only with gin",
                  "es": "Cócteles italianos hechos solo con ginebra",
                  "de": "Italienische Cocktails nur mit Gin gemacht",
                  "nl": "Italiaanse cocktails alleen gemaakt met gin"
        },
        {
                  "en": "Any cocktail served in a rocks glass",
                  "es": "Cualquier cóctel servido en vaso rocks",
                  "de": "Jeder Cocktail im Rocks-Glas serviert",
                  "nl": "Elke cocktail geserveerd in een rocks glas"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Negroni family follows the equal-parts formula: 1 part spirit + 1 part amaro/bitter liqueur + 1 part aromatized/fortified wine. The classic Negroni uses gin + Campari + sweet vermouth. Variations substitute ingredients while maintaining the structure: Boulevardier (bourbon/rye + Campari + sweet vermouth), White Negroni (gin + Suze + Lillet Blanc), Enzoni (gin + Campari + sweet vermouth + lemon + grapes). This template creates balanced, bittersweet, spirit-forward cocktails. The equal-parts ratio makes them forgiving to batch and easy to remember, while the bitter component (Campari, Aperol, Cynar, etc.) defines the family's characteristic profile.",
                  "es": "La familia Negroni sigue la fórmula de partes iguales: 1 parte licor + 1 parte amaro/licor amargo + 1 parte vino aromatizado/fortificado. El Negroni clásico usa ginebra + Campari + vermut dulce. Variaciones sustituyen ingredientes mientras mantienen la estructura: Boulevardier (bourbon/centeno + Campari + vermut dulce), Negroni Blanco (ginebra + Suze + Lillet Blanc), Enzoni (ginebra + Campari + vermut dulce + limón + uvas). Esta plantilla crea cócteles balanceados, agridulces, centrados en licor. La proporción de partes iguales los hace tolerantes al loteado y fáciles de recordar, mientras el componente amargo (Campari, Aperol, Cynar, etc.) define el perfil característico de la familia.",
                  "de": "Die Negroni-Familie folgt der Gleich-Teile-Formel: 1 Teil Spirituose + 1 Teil Amaro/Bitter-Likör + 1 Teil aromatisierter/verstärkter Wein. Der klassische Negroni verwendet Gin + Campari + süßer Wermut. Variationen ersetzen Zutaten während Struktur beibehalten wird: Boulevardier (Bourbon/Roggen + Campari + süßer Wermut), Weißer Negroni (Gin + Suze + Lillet Blanc), Enzoni (Gin + Campari + süßer Wermut + Zitrone + Trauben). Diese Vorlage schafft ausgewogene, bittersüße, spirituosenorientierte Cocktails. Das Gleich-Teile-Verhältnis macht sie verzeihend zum Batchen und leicht zu merken, während die bittere Komponente (Campari, Aperol, Cynar, etc.) das charakteristische Profil der Familie definiert.",
                  "nl": "De Negroni familie volgt de gelijke-delen formule: 1 deel sterke drank + 1 deel amaro/bitter likeur + 1 deel gearomatiseerde/versterkte wijn. De klassieke Negroni gebruikt gin + Campari + zoete vermouth. Variaties vervangen ingrediënten terwijl de structuur behouden blijft: Boulevardier (bourbon/rogge + Campari + zoete vermouth), Witte Negroni (gin + Suze + Lillet Blanc), Enzoni (gin + Campari + zoete vermouth + citroen + druiven). Dit sjabloon creëert gebalanceerde, bitterzoete, sterke drank-gerichte cocktails. De gelijke-delen verhouding maakt ze vergevend om te batchen en gemakkelijk te onthouden, terwijl de bittere component (Campari, Aperol, Cynar, etc.) het karakteristieke profiel van de familie definieert."
        }
      },
      {
        question: {
                  "en": "What is 'barrel aging' cocktails and what chemical changes occur during the process?",
                  "es": "¿Qué es el 'envejecimiento en barrica' de cócteles y qué cambios químicos ocurren durante el proceso?",
                  "de": "Was ist 'Fassreifung' von Cocktails und welche chemischen Veränderungen treten während des Prozesses auf?",
                  "nl": "Wat is 'vat rijping' cocktails en welke chemische veranderingen vinden plaats tijdens het proces?"
        },
        options: [
        {
                  "en": "Storing bottles in wooden racks",
                  "es": "Almacenar botellas en estantes de madera",
                  "de": "Flaschen in Holzregalen lagern",
                  "nl": "Flessen opslaan in houten rekken"
        },
        {
                  "en": "Storing batched cocktails in oak barrels where oxidation, wood extraction (vanillin, tannins, lactones), and micro-oxygenation mellow harshness and add complexity over weeks/months",
                  "es": "Almacenar cócteles por lotes en barricas de roble donde oxidación, extracción de madera (vainillina, taninos, lactonas) y micro-oxigenación suavizan aspereza y añaden complejidad durante semanas/meses",
                  "de": "Gebatchte Cocktails in Eichenfässern lagern wo Oxidation, Holzextraktion (Vanillin, Tannine, Laktone) und Mikro-Sauerstoffzufuhr Härte mildern und Komplexität über Wochen/Monate hinzufügen",
                  "nl": "Batch cocktails opslaan in eiken vaten waar oxidatie, hout extractie (vanilline, tannines, lactonen) en micro-oxygenatie ruwheid verzachten en complexiteit toevoegen over weken/maanden"
        },
        {
                  "en": "Adding wood chips to individual drinks",
                  "es": "Añadir astillas de madera a bebidas individuales",
                  "de": "Holzspäne zu einzelnen Getränken hinzufügen",
                  "nl": "Houtspaanders toevoegen aan individuele drankjes"
        },
        {
                  "en": "Serving cocktails in wooden cups",
                  "es": "Servir cócteles en vasos de madera",
                  "de": "Cocktails in Holzbechern servieren",
                  "nl": "Cocktails serveren in houten bekers"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Barrel aging involves storing batched cocktails in oak barrels (often used bourbon, wine, or new oak barrels) for extended periods (typically 3-8 weeks). Chemical processes include: (1) Oxidation—slow air exposure mellows harsh alcohol notes and integrates flavors. (2) Wood extraction—vanillin (vanilla notes), tannins (structure, astringency), lactones (coconut, oak), and lignin breakdown products infuse into the cocktail. (3) Esterification—acids and alcohols combine forming fruity esters. (4) Color development from wood compounds. Works best with spirit-forward cocktails (Manhattan, Negroni, Old Fashioned) without citrus or dairy. Results in rounder, more integrated, wood-influenced complexity.",
                  "es": "El envejecimiento en barrica implica almacenar cócteles por lotes en barricas de roble (a menudo barricas usadas de bourbon, vino o roble nuevo) por períodos extendidos (típicamente 3-8 semanas). Procesos químicos incluyen: (1) Oxidación—exposición lenta al aire suaviza notas de alcohol ásperas e integra sabores. (2) Extracción de madera—vainillina (notas de vainilla), taninos (estructura, astringencia), lactonas (coco, roble) y productos de descomposición de lignina se infunden en el cóctel. (3) Esterificación—ácidos y alcoholes se combinan formando ésteres afrutados. (4) Desarrollo de color de compuestos de madera. Funciona mejor con cócteles centrados en licor (Manhattan, Negroni, Old Fashioned) sin cítricos o lácteos. Resulta en complejidad más redonda, más integrada, influenciada por madera.",
                  "de": "Fassreifung beinhaltet Lagerung gebatchter Cocktails in Eichenfässern (oft gebrauchte Bourbon-, Wein- oder neue Eichenfässer) für längere Zeiträume (typisch 3-8 Wochen). Chemische Prozesse umfassen: (1) Oxidation—langsame Luftexposition mildert harte Alkoholnoten und integriert Aromen. (2) Holzextraktion—Vanillin (Vanillenoten), Tannine (Struktur, Adstringenz), Laktone (Kokosnuss, Eiche) und Lignin-Abbauprodukte infundieren in den Cocktail. (3) Veresterung—Säuren und Alkohole kombinieren sich zu fruchtigen Estern. (4) Farbentwicklung aus Holzverbindungen. Funktioniert am besten mit spirituosenorientierten Cocktails (Manhattan, Negroni, Old Fashioned) ohne Zitrus oder Milchprodukte. Resultiert in runderer, integrierter, holzbeeinflusster Komplexität.",
                  "nl": "Vat rijping houdt in dat batch cocktails worden opgeslagen in eiken vaten (vaak gebruikte bourbon, wijn of nieuwe eiken vaten) voor langere perioden (typisch 3-8 weken). Chemische processen omvatten: (1) Oxidatie—langzame luchtblootstelling verzacht ruwe alcohol noten en integreert smaken. (2) Hout extractie—vanilline (vanille noten), tannines (structuur, adstringentie), lactonen (kokos, eik) en lignine afbraakproducten infuseren in de cocktail. (3) Verestering—zuren en alcoholen combineren tot fruitige esters. (4) Kleurontwikkeling van houtverbindingen. Werkt het beste met sterke drank-gerichte cocktails (Manhattan, Negroni, Old Fashioned) zonder citrus of zuivel. Resulteert in rondere, meer geïntegreerde, hout-beïnvloede complexiteit."
        }
      },
      {
        question: {
                  "en": "What is 'milk punch clarification' and what does it achieve beyond visual clarity?",
                  "es": "¿Qué es la 'clarificación con milk punch' y qué logra más allá de claridad visual?",
                  "de": "Was ist 'Milk Punch Klärung' und was erreicht sie jenseits visueller Klarheit?",
                  "nl": "Wat is 'melk punch verheldering' en wat bereikt het naast visuele helderheid?"
        },
        options: [
        {
                  "en": "Adding milk to cocktails for creaminess",
                  "es": "Añadir leche a cócteles para cremosidad",
                  "de": "Milch zu Cocktails für Cremigkeit hinzufügen",
                  "nl": "Melk toevoegen aan cocktails voor romigheid"
        },
        {
                  "en": "Acid-induced curdling of milk proteins binds tannins, phenolics, and particles; filtering removes bitterness/harshness while creating silky texture and extended shelf stability (weeks refrigerated)",
                  "es": "Cuajado inducido por ácido de proteínas lácteas une taninos, fenólicos y partículas; filtrar elimina amargura/aspereza mientras crea textura sedosa y estabilidad de estante extendida (semanas refrigeradas)",
                  "de": "Säure-induzierte Gerinnung von Milchproteinen bindet Tannine, Phenole und Partikel; Filtern entfernt Bitterkeit/Härte während seidiger Textur und verlängerte Lagerstabilität geschaffen wird (Wochen gekühlt)",
                  "nl": "Zuur-geïnduceerde stremming van melk eiwitten bindt tannines, fenolen en deeltjes; filteren verwijdert bitterheid/ruwheid terwijl zijdezachte textuur en verlengde houdbaarheid wordt gecreëerd (weken gekoeld)"
        },
        {
                  "en": "Removing dairy allergens from cocktails",
                  "es": "Eliminar alérgenos lácteos de cócteles",
                  "de": "Milchallergene aus Cocktails entfernen",
                  "nl": "Zuivel allergenen verwijderen uit cocktails"
        },
        {
                  "en": "Making cocktails white colored",
                  "es": "Hacer cócteles de color blanco",
                  "de": "Cocktails weiß färben",
                  "nl": "Cocktails wit gekleurd maken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Milk punch clarification is a historic technique (dating to 1700s) where milk is added to acidic cocktails, causing proteins to curdle. The curds bind to tannins, phenolic compounds, bitter elements, and suspended particles. When filtered through the curd mass (typically cheesecloth/coffee filter), the result is a crystal-clear, silky-textured cocktail with reduced bitterness and astringency. Benefits beyond clarity: (1) Smoother mouthfeel from trace milk fats/proteins. (2) Shelf stability—can last weeks refrigerated. (3) Flavor mellowing—harsh edges removed. (4) Visual drama—opaque ingredients become transparent. Works with citrus-based punches, tea cocktails, or tannic spirits.",
                  "es": "La clarificación con milk punch es una técnica histórica (que data de 1700s) donde se añade leche a cócteles ácidos, causando que las proteínas se cuajen. Los cuajos se unen a taninos, compuestos fenólicos, elementos amargos y partículas suspendidas. Cuando se filtra a través de la masa de cuajada (típicamente estopilla/filtro de café), el resultado es un cóctel cristalino, de textura sedosa con amargura y astringencia reducidas. Beneficios más allá de claridad: (1) Sensación en boca más suave de grasas/proteínas lácteas residuales. (2) Estabilidad de estante—puede durar semanas refrigerado. (3) Suavización de sabor—bordes ásperos eliminados. (4) Drama visual—ingredientes opacos se vuelven transparentes. Funciona con ponches basados en cítricos, cócteles de té o licores tánicos.",
                  "de": "Milk Punch Klärung ist eine historische Technik (aus den 1700er Jahren) wo Milch zu sauren Cocktails hinzugefügt wird, was Proteine gerinnen lässt. Die Gerinnsel binden an Tannine, phenolische Verbindungen, bittere Elemente und suspendierte Partikel. Wenn durch die Gerinnungsmasse gefiltert (typisch Käsetuch/Kaffeefilter), ist das Ergebnis ein kristallklarer, seidig-texturierter Cocktail mit reduzierter Bitterkeit und Adstringenz. Vorteile jenseits Klarheit: (1) Glatteres Mundgefühl von Spur-Milchfetten/-proteinen. (2) Lagerstabilität—kann Wochen gekühlt halten. (3) Geschmacksmilderung—harte Kanten entfernt. (4) Visuelles Drama—undurchsichtige Zutaten werden transparent. Funktioniert mit zitrusbasierten Punches, Tee-Cocktails oder tanninhaltigen Spirituosen.",
                  "nl": "Melk punch verheldering is een historische techniek (daterend uit 1700s) waar melk wordt toegevoegd aan zure cocktails, wat eiwitten doet stremmen. De wrongel bindt aan tannines, fenolische verbindingen, bittere elementen en zwevende deeltjes. Wanneer gefilterd door de wrongel massa (typisch kaasdoek/koffiefilter), is het resultaat een kristalheldere, zijdezachte getextureerde cocktail met verminderde bitterheid en adstringentie. Voordelen naast helderheid: (1) Gladdere mondgevoel van spoor melkvetten/eiwitten. (2) Houdbaarheid—kan weken gekoeld blijven. (3) Smaak verzachting—ruwe randen verwijderd. (4) Visueel drama—ondoorzichtige ingrediënten worden transparant. Werkt met citrus-gebaseerde punches, thee cocktails of tannine-rijke sterke dranken."
        }
      },
      {
        question: {
                  "en": "What is the 'Daisy' cocktail template and how did it influence modern cocktails?",
                  "es": "¿Qué es la plantilla de cóctel 'Daisy' y cómo influyó en cócteles modernos?",
                  "de": "Was ist die 'Daisy' Cocktail-Vorlage und wie beeinflusste sie moderne Cocktails?",
                  "nl": "Wat is het 'Daisy' cocktail sjabloon en hoe beïnvloedde het moderne cocktails?"
        },
        options: [
        {
                  "en": "Spirit + citrus + sweetener + soda water formula from 1870s; direct ancestor of the Margarita (tequila Daisy) and template for highball-style sours with effervescence",
                  "es": "Fórmula licor + cítrico + edulcorante + agua con gas de 1870s; ancestro directo de la Margarita (Daisy de tequila) y plantilla para agrios estilo highball con efervescencia",
                  "de": "Spirituose + Zitrus + Süßungsmittel + Sodawasser Formel aus 1870er Jahren; direkter Vorfahre der Margarita (Tequila Daisy) und Vorlage für Highball-Stil Sours mit Sprudel",
                  "nl": "Sterke drank + citrus + zoetstof + sodawater formule uit 1870s; directe voorouder van de Margarita (tequila Daisy) en sjabloon voor highball-stijl zuren met bruising"
        },
        {
                  "en": "Morning brunch cocktails",
                  "es": "Cócteles de brunch matutino",
                  "de": "Morgen-Brunch-Cocktails",
                  "nl": "Ochtend brunch cocktails"
        },
        {
                  "en": "Sweet dessert cocktails",
                  "es": "Cócteles de postre dulces",
                  "de": "Süße Dessert-Cocktails",
                  "nl": "Zoete dessert cocktails"
        },
        {
                  "en": "Flower-garnished cocktails only",
                  "es": "Cócteles solo guarnecidos con flores",
                  "de": "Nur blumengeschmückte Cocktails",
                  "nl": "Alleen bloem-gegarneerde cocktails"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Daisy is a classic cocktail template from the 1870s: base spirit + citrus juice + sweetener (often orange liqueur or grenadine) + soda water, served over crushed ice. This formula created refreshing, effervescent versions of sours. The Margarita is actually a tequila Daisy (spirit + lime + orange liqueur + optional salt, though modern versions omit soda). Other Daisy variations include Gin Daisy, Brandy Daisy, and Whiskey Daisy. The template influenced modern highball-sour hybrids and demonstrated how carbonation could lighten and refresh traditional sour cocktails. The Daisy represents the bridge between classic sours and modern sparkling cocktails.",
                  "es": "El Daisy es una plantilla de cóctel clásica de 1870s: licor base + jugo cítrico + edulcorante (a menudo licor de naranja o granadina) + agua con gas, servido sobre hielo triturado. Esta fórmula creó versiones refrescantes y efervescentes de agrios. La Margarita es en realidad un Daisy de tequila (licor + lima + licor de naranja + sal opcional, aunque versiones modernas omiten soda). Otras variaciones Daisy incluyen Gin Daisy, Brandy Daisy y Whiskey Daisy. La plantilla influyó en híbridos modernos highball-agrio y demostró cómo la carbonatación podría aligerar y refrescar cócteles agrios tradicionales. El Daisy representa el puente entre agrios clásicos y cócteles espumosos modernos.",
                  "de": "Der Daisy ist eine klassische Cocktail-Vorlage aus den 1870er Jahren: Basis-Spirituose + Zitrussaft + Süßungsmittel (oft Orangenlikör oder Grenadine) + Sodawasser, serviert über zerstoßenem Eis. Diese Formel schuf erfrischende, sprudelnde Versionen von Sours. Die Margarita ist eigentlich ein Tequila Daisy (Spirituose + Limette + Orangenlikör + optionales Salz, obwohl moderne Versionen Soda weglassen). Andere Daisy-Variationen umfassen Gin Daisy, Brandy Daisy und Whiskey Daisy. Die Vorlage beeinflusste moderne Highball-Sour-Hybride und demonstrierte wie Karbonisierung traditionelle Sour Cocktails aufhellen und erfrischen konnte. Der Daisy repräsentiert die Brücke zwischen klassischen Sours und modernen sprudelnden Cocktails.",
                  "nl": "De Daisy is een klassiek cocktail sjabloon uit de 1870s: basis sterke drank + citrus sap + zoetstof (vaak sinaasappel likeur of grenadine) + sodawater, geserveerd over fijngemaakt ijs. Deze formule creëerde verfrissende, bruisende versies van zuren. De Margarita is eigenlijk een tequila Daisy (sterke drank + limoen + sinaasappel likeur + optioneel zout, hoewel moderne versies soda weglaten). Andere Daisy variaties omvatten Gin Daisy, Brandy Daisy en Whiskey Daisy. Het sjabloon beïnvloedde moderne highball-zuur hybriden en toonde aan hoe carbonatie traditionele zure cocktails kon verlichten en verversen. De Daisy vertegenwoordigt de brug tussen klassieke zuren en moderne bruisende cocktails."
        }
      },
      {
        question: {
                  "en": "What is 'reverse spherification' and how does it differ from basic spherification?",
                  "es": "¿Qué es la 'esferificación inversa' y cómo difiere de la esferificación básica?",
                  "de": "Was ist 'umgekehrte Sphärifizierung' und wie unterscheidet sie sich von grundlegender Sphärifizierung?",
                  "nl": "Wat is 'omgekeerde spherificatie' en hoe verschilt het van basis spherificatie?"
        },
        options: [
        {
                  "en": "Calcium-containing liquid dropped into sodium alginate bath creates thicker, more stable spheres that don't continue gelling internally, allowing spheres to be rinsed and held longer",
                  "es": "Líquido que contiene calcio goteado en baño de alginato de sodio crea esferas más gruesas y estables que no continúan gelificando internamente, permitiendo que esferas sean enjuagadas y sostenidas más tiempo",
                  "de": "Kalziumhaltige Flüssigkeit in Natriumalginat-Bad getropft schafft dickere, stabilere Kugeln die nicht weiter intern gelieren, ermöglicht Kugeln gespült und länger gehalten zu werden",
                  "nl": "Calcium-bevattende vloeistof gedruppeld in natrium alginaat bad creëert dikkere, stabielere bollen die niet verder intern geleren, waardoor bollen kunnen worden gespoeld en langer worden bewaard"
        },
        {
                  "en": "Using reverse osmosis to create spheres",
                  "es": "Usar ósmosis inversa para crear esferas",
                  "de": "Umkehrosmose verwenden um Kugeln zu schaffen",
                  "nl": "Omgekeerde osmose gebruiken om bollen te creëren"
        },
        {
                  "en": "Spinning spheres in opposite direction",
                  "es": "Girar esferas en dirección opuesta",
                  "de": "Kugeln in entgegengesetzte Richtung drehen",
                  "nl": "Bollen in tegengestelde richting draaien"
        },
        {
                  "en": "Making spheres backwards from inside-out",
                  "es": "Hacer esferas al revés de adentro hacia afuera",
                  "de": "Kugeln rückwärts von innen nach außen machen",
                  "nl": "Bollen achterstevoren maken van binnen naar buiten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Reverse spherification inverts the basic spherification process. In basic spherification, sodium alginate-containing liquid is dropped into calcium chloride bath, forming instant gel membrane. However, this continues gelling throughout, limiting hold time. Reverse spherification uses calcium-containing liquid (calcium lactate/gluconate added) dropped into sodium alginate bath. This creates a thicker, more controlled membrane that forms only at the surface contact point. The spheres can be rinsed, stopping reaction, and held for hours or even refrigerated. This technique works better with high-acid or high-alcohol ingredients (citrus, spirits) where basic spherification fails, making it ideal for cocktail applications.",
                  "es": "La esferificación inversa invierte el proceso básico de esferificación. En esferificación básica, líquido que contiene alginato de sodio se gotea en baño de cloruro de calcio, formando membrana de gel instantánea. Sin embargo, esto continúa gelificando en todo, limitando tiempo de retención. La esferificación inversa usa líquido que contiene calcio (lactato/gluconato de calcio añadido) goteado en baño de alginato de sodio. Esto crea una membrana más gruesa y controlada que se forma solo en el punto de contacto superficial. Las esferas pueden ser enjuagadas, deteniendo reacción, y sostenidas por horas o incluso refrigeradas. Esta técnica funciona mejor con ingredientes de alta acidez o alto alcohol (cítricos, licores) donde la esferificación básica falla, haciéndola ideal para aplicaciones de cócteles.",
                  "de": "Umgekehrte Sphärifizierung kehrt den grundlegenden Sphärifizierungsprozess um. Bei grundlegender Sphärifizierung wird Natriumalginat-enthaltende Flüssigkeit in Kalziumchlorid-Bad getropft, bildet sofortige Gel-Membran. Dies geliert jedoch weiter durch, begrenzt Haltezeit. Umgekehrte Sphärifizierung verwendet kalziumhaltige Flüssigkeit (Kalziumlaktat/-glukonat hinzugefügt) in Natriumalginat-Bad getropft. Dies schafft eine dickere, kontrolliertere Membran die sich nur am Oberflächenkontaktpunkt bildet. Die Kugeln können gespült werden, Reaktion stoppen, und für Stunden oder sogar gekühlt gehalten werden. Diese Technik funktioniert besser mit hoher Säure oder hohem Alkoholgehalt Zutaten (Zitrus, Spirituosen) wo grundlegende Sphärifizierung versagt, macht sie ideal für Cocktail-Anwendungen.",
                  "nl": "Omgekeerde spherificatie keert het basis spherificatie proces om. Bij basis spherificatie wordt natrium alginaat-bevattende vloeistof gedruppeld in calcium chloride bad, vormt directe gel membraan. Dit blijft echter geleren, beperkt bewaartijd. Omgekeerde spherificatie gebruikt calcium-bevattende vloeistof (calcium lactaat/gluconaat toegevoegd) gedruppeld in natrium alginaat bad. Dit creëert een dikkere, meer gecontroleerde membraan die alleen vormt op het oppervlakte contactpunt. De bollen kunnen worden gespoeld, reactie stoppen, en uren of zelfs gekoeld worden bewaard. Deze techniek werkt beter met hoge zuur of hoge alcohol ingrediënten (citrus, sterke dranken) waar basis spherificatie faalt, waardoor het ideaal is voor cocktail toepassingen."
        }
      },
      {
        question: {
                  "en": "What is 'oleo saccharum' and what role does it play in punch-making?",
                  "es": "¿Qué es el 'oleo saccharum' y qué papel juega en la elaboración de ponches?",
                  "de": "Was ist 'Oleo Saccharum' und welche Rolle spielt es in der Punsch-Herstellung?",
                  "nl": "Wat is 'oleo saccharum' en welke rol speelt het in punch-bereiding?"
        },
        options: [
        {
                  "en": "Latin name for simple syrup",
                  "es": "Nombre latino para jarabe simple",
                  "de": "Lateinischer Name für einfachen Sirup",
                  "nl": "Latijnse naam voor simpele siroop"
        },
        {
                  "en": "Ancient Roman sweetener",
                  "es": "Edulcorante romano antiguo",
                  "de": "Antikes römisches Süßungsmittel",
                  "nl": "Oude Romeinse zoetstof"
        },
        {
                  "en": "Special sugar from tropical plants",
                  "es": "Azúcar especial de plantas tropicales",
                  "de": "Spezieller Zucker aus tropischen Pflanzen",
                  "nl": "Speciale suiker van tropische planten"
        },
        {
                  "en": "Citrus oil extracted from peels with sugar through maceration; provides intense aromatic citrus flavor without acidity or bitterness, essential for traditional punch recipes",
                  "es": "Aceite cítrico extraído de cáscaras con azúcar mediante maceración; proporciona sabor cítrico aromático intenso sin acidez o amargura, esencial para recetas tradicionales de ponche",
                  "de": "Zitrusöl aus Schalen mit Zucker durch Mazeration extrahiert; bietet intensive aromatische Zitrusnote ohne Säure oder Bitterkeit, wesentlich für traditionelle Punsch-Rezepte",
                  "nl": "Citrus olie geëxtraheerd uit schillen met suiker door maceratie; biedt intense aromatische citrus smaak zonder zuurgraad of bitterheid, essentieel voor traditionele punch recepten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Oleo saccharum (Latin for 'oil sugar') is a historic ingredient in punch-making created by macerating citrus peels with granulated sugar. The sugar's hygroscopic nature draws essential oils from the peel's zest while leaving behind bitter pith compounds. After several hours (or overnight), the result is an intensely aromatic, oily syrup that captures the essence of citrus fruit without acidity or bitterness. This provides superior citrus flavor compared to juice alone and was essential in pre-refrigeration punch-making when fresh juice spoiled quickly. Modern bartenders use oleo saccharum for punches, sours, and as a superior sweetener for citrus-forward cocktails.",
                  "es": "Oleo saccharum (latín para 'azúcar de aceite') es un ingrediente histórico en elaboración de ponches creado macerando cáscaras de cítricos con azúcar granulada. La naturaleza higroscópica del azúcar extrae aceites esenciales de la ralladura de la cáscara mientras deja atrás compuestos amargos de la médula. Después de varias horas (o durante la noche), el resultado es un jarabe aceitoso intensamente aromático que captura la esencia de fruta cítrica sin acidez o amargura. Esto proporciona sabor cítrico superior comparado solo con jugo y era esencial en elaboración de ponche pre-refrigeración cuando jugo fresco se echaba a perder rápidamente. Bartenders modernos usan oleo saccharum para ponches, agrios y como edulcorante superior para cócteles centrados en cítricos.",
                  "de": "Oleo Saccharum (Latein für 'Ölzucker') ist eine historische Zutat in Punsch-Herstellung, erstellt durch Mazeration von Zitrusschalen mit Kristallzucker. Die hygroskopische Natur des Zuckers zieht ätherische Öle aus der Schale während bittere Albedo-Verbindungen zurückbleiben. Nach mehreren Stunden (oder über Nacht) ist das Ergebnis ein intensiv aromatischer, öliger Sirup der die Essenz von Zitrusfrüchten ohne Säure oder Bitterkeit einfängt. Dies bietet überlegenen Zitrusgeschmack verglichen mit Saft allein und war wesentlich in Vor-Kühlschrank-Punsch-Herstellung als frischer Saft schnell verdarb. Moderne Bartender verwenden Oleo Saccharum für Punches, Sours und als überlegenes Süßungsmittel für zitrusorientierte Cocktails.",
                  "nl": "Oleo saccharum (Latijn voor 'olie suiker') is een historisch ingrediënt in punch-bereiding gecreëerd door citrus schillen te macereren met kristalsuiker. De hygroscopische aard van suiker trekt essentiële oliën uit de schilrasp terwijl bittere pit verbindingen achterblijven. Na enkele uren (of 's nachts), is het resultaat een intens aromatische, olieachtige siroop die de essentie van citrus fruit vangt zonder zuurgraad of bitterheid. Dit biedt superieure citrus smaak vergeleken met alleen sap en was essentieel in pre-koeling punch-bereiding toen vers sap snel bedierf. Moderne bartenders gebruiken oleo saccharum voor punches, zuren en als superieure zoetstof voor citrus-gerichte cocktails."
        }
      },
      {
        question: {
                  "en": "What is the 'fix' cocktail category and how does it relate to other classic templates?",
                  "es": "¿Qué es la categoría de cóctel 'fix' y cómo se relaciona con otras plantillas clásicas?",
                  "de": "Was ist die 'Fix' Cocktail-Kategorie und wie bezieht sie sich auf andere klassische Vorlagen?",
                  "nl": "Wat is de 'fix' cocktail categorie en hoe verhoudt het zich tot andere klassieke sjablonen?"
        },
        options: [
        {
                  "en": "Spirit + citrus + sugar served over crushed ice; essentially a sour on crushed ice that bridges the gap between cobblers and sours, popularized in 1850s",
                  "es": "Licor + cítrico + azúcar servido sobre hielo triturado; esencialmente un agrio sobre hielo triturado que cierra la brecha entre cobblers y agrios, popularizado en 1850s",
                  "de": "Spirituose + Zitrus + Zucker serviert über zerstoßenem Eis; im Wesentlichen ein Sour auf zerstoßenem Eis der Lücke zwischen Cobblers und Sours überbrückt, populär in 1850er Jahren",
                  "nl": "Sterke drank + citrus + suiker geserveerd over fijngemaakt ijs; in wezen een zure op fijngemaakt ijs die de kloof tussen cobblers en zuren overbrugt, populair in 1850s"
        },
        {
                  "en": "Cocktails that fix hangovers only",
                  "es": "Cócteles que solo arreglan resacas",
                  "de": "Cocktails die nur Kater beheben",
                  "nl": "Cocktails die alleen katers verhelpen"
        },
        {
                  "en": "Stabilized molecular cocktails",
                  "es": "Cócteles moleculares estabilizados",
                  "de": "Stabilisierte molekulare Cocktails",
                  "nl": "Gestabiliseerde moleculaire cocktails"
        },
        {
                  "en": "Cocktails with exactly fixed proportions",
                  "es": "Cócteles con proporciones exactamente fijas",
                  "de": "Cocktails mit exakt festen Proportionen",
                  "nl": "Cocktails met exact vaste verhoudingen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Fix is a classic cocktail category from the 1850s consisting of spirit + citrus juice + sugar served over crushed or pebble ice, often with fruit garnish. It's essentially a sour cocktail served on crushed ice rather than strained. The Fix sits between the Cobbler (spirit + sugar + fruit over crushed ice, no citrus) and the Sour (spirit + citrus + sugar, strained). Famous examples include the Whiskey Fix, Brandy Fix, and Gin Fix. The crushed ice creates dilution and keeps the drink very cold, making it refreshing. Modern bartenders have revived the Fix as a template for creating elaborate, aromatic cocktails with seasonal fruit and herb garnishes over crushed ice.",
                  "es": "El Fix es una categoría clásica de cócteles de 1850s que consiste en licor + jugo cítrico + azúcar servido sobre hielo triturado o guijarros, a menudo con guarnición de frutas. Es esencialmente un cóctel agrio servido sobre hielo triturado en lugar de colado. El Fix se sitúa entre el Cobbler (licor + azúcar + fruta sobre hielo triturado, sin cítrico) y el Sour (licor + cítrico + azúcar, colado). Ejemplos famosos incluyen Whiskey Fix, Brandy Fix y Gin Fix. El hielo triturado crea dilución y mantiene la bebida muy fría, haciéndola refrescante. Bartenders modernos han revivido el Fix como plantilla para crear cócteles elaborados y aromáticos con guarniciones de frutas y hierbas estacionales sobre hielo triturado.",
                  "de": "Der Fix ist eine klassische Cocktail-Kategorie aus den 1850er Jahren bestehend aus Spirituose + Zitrussaft + Zucker serviert über zerstoßenem oder Kieseleis, oft mit Fruchtgarnitur. Es ist im Wesentlichen ein Sour Cocktail serviert auf zerstoßenem Eis statt abgeseiht. Der Fix sitzt zwischen dem Cobbler (Spirituose + Zucker + Frucht über zerstoßenem Eis, kein Zitrus) und dem Sour (Spirituose + Zitrus + Zucker, abgeseiht). Berühmte Beispiele umfassen Whiskey Fix, Brandy Fix und Gin Fix. Das zerstoßene Eis schafft Verdünnung und hält das Getränk sehr kalt, macht es erfrischend. Moderne Bartender haben den Fix als Vorlage für Schaffung elaborierter, aromatischer Cocktails mit saisonalen Frucht- und Kräutergarnituren über zerstoßenem Eis wiederbelebt.",
                  "nl": "De Fix is een klassieke cocktail categorie uit de 1850s bestaande uit sterke drank + citrus sap + suiker geserveerd over fijngemaakt of kiezel ijs, vaak met fruit garnering. Het is in wezen een zure cocktail geserveerd op fijngemaakt ijs in plaats van gezeefd. De Fix zit tussen de Cobbler (sterke drank + suiker + fruit over fijngemaakt ijs, geen citrus) en de Zure (sterke drank + citrus + suiker, gezeefd). Beroemde voorbeelden omvatten Whiskey Fix, Brandy Fix en Gin Fix. Het fijngemaakt ijs creëert verdunning en houdt de drank zeer koud, waardoor het verfrissend is. Moderne bartenders hebben de Fix nieuw leven ingeblazen als sjabloon voor het creëren van uitgebreide, aromatische cocktails met seizoensgebonden fruit en kruiden garneringen over fijngemaakt ijs."
        }
      },
      {
        question: {
                  "en": "What is 'whey washing' spirits and what flavor transformation does it create?",
                  "es": "¿Qué es el 'lavado con suero' de licores y qué transformación de sabor crea?",
                  "de": "Was ist 'Molke-Waschen' von Spirituosen und welche Geschmackstransformation schafft es?",
                  "nl": "Wat is 'wei wassen' sterke dranken en welke smaaktransformatie creëert het?"
        },
        options: [
        {
                  "en": "Washing spirits through acidified milk whey to remove harsh congeners and tannins while adding subtle creaminess; creates smoother, rounder spirits ideal for aged-style cocktails",
                  "es": "Lavar licores a través de suero de leche acidificado para eliminar congéneres ásperos y taninos mientras añade cremosidad sutil; crea licores más suaves y redondos ideales para cócteles estilo añejado",
                  "de": "Spirituosen durch angesäuerte Milchmolke waschen um harte Begleitstoffe und Tannine zu entfernen während subtile Cremigkeit hinzugefügt wird; schafft glattere, rundere Spirituosen ideal für gealterte-Stil Cocktails",
                  "nl": "Sterke dranken wassen door aangezuurde melk wei om harde bijproducten en tannines te verwijderen terwijl subtiele romigheid wordt toegevoegd; creëert gladdere, rondere sterke dranken ideaal voor gerijpte-stijl cocktails"
        },
        {
                  "en": "Adding whey powder to cocktails",
                  "es": "Añadir polvo de suero a cócteles",
                  "de": "Molkenpulver zu Cocktails hinzufügen",
                  "nl": "Wei poeder toevoegen aan cocktails"
        },
        {
                  "en": "Diluting spirits with water",
                  "es": "Diluir licores con agua",
                  "de": "Spirituosen mit Wasser verdünnen",
                  "nl": "Sterke dranken verdunnen met water"
        },
        {
                  "en": "Cleaning bottles with whey protein",
                  "es": "Limpiar botellas con proteína de suero",
                  "de": "Flaschen mit Molkenprotein reinigen",
                  "nl": "Flessen schoonmaken met wei eiwit"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Whey washing involves passing spirits through acidified whey (the liquid byproduct from cheese-making) to remove harsh flavor compounds. The whey proteins bind to congeners, fusel oils, and bitter tannins, pulling them out of the spirit. The process works similarly to milk punch clarification but specifically targets harsh alcohol notes rather than creating clarity. The result is a notably smoother, rounder spirit with subtle creamy mouthfeel. Whey-washed spirits (particularly rum, whiskey, or brandy) work excellently in aged-spirit cocktails where smoothness is desired. The technique originated at Milk & Honey bar and has been adopted by molecular mixology bars worldwide.",
                  "es": "El lavado con suero implica pasar licores a través de suero acidificado (el subproducto líquido de elaboración de queso) para eliminar compuestos de sabor ásperos. Las proteínas del suero se unen a congéneres, aceites de fusel y taninos amargos, sacándolos del licor. El proceso funciona similar a la clarificación con milk punch pero específicamente apunta notas de alcohol ásperas en lugar de crear claridad. El resultado es un licor notablemente más suave y redondo con sensación cremosa sutil en boca. Licores lavados con suero (particularmente ron, whisky o brandy) funcionan excelentemente en cócteles de licores añejados donde se desea suavidad. La técnica se originó en el bar Milk & Honey y ha sido adoptada por bares de mixología molecular en todo el mundo.",
                  "de": "Molke-Waschen beinhaltet Durchleiten von Spirituosen durch angesäuerte Molke (das flüssige Nebenprodukt der Käseherstellung) um harte Geschmacksverbindungen zu entfernen. Die Molkenproteine binden an Begleitstoffe, Fuselöle und bittere Tannine, ziehen sie aus der Spirituose. Der Prozess funktioniert ähnlich wie Milk Punch Klärung aber zielt speziell auf harte Alkoholnoten statt Klarheit zu schaffen. Das Ergebnis ist eine merklich glattere, rundere Spirituose mit subtilem cremigem Mundgefühl. Molke-gewaschene Spirituosen (besonders Rum, Whiskey oder Brandy) funktionieren ausgezeichnet in gealterten-Spirituosen-Cocktails wo Glätte gewünscht ist. Die Technik entstand in der Milk & Honey Bar und wurde von molekularen Mixologie-Bars weltweit übernommen.",
                  "nl": "Wei wassen houdt in dat sterke dranken worden doorgegeven door aangezuurde wei (het vloeibare bijproduct van kaasmaking) om harde smaakverbindingen te verwijderen. De wei eiwitten binden aan bijproducten, fusel oliën en bittere tannines, trekken ze uit de sterke drank. Het proces werkt vergelijkbaar met melk punch verheldering maar richt zich specifiek op harde alcohol noten in plaats van helderheid te creëren. Het resultaat is een merkbaar gladdere, rondere sterke drank met subtiel romig mondgevoel. Wei-gewassen sterke dranken (met name rum, whisky of brandy) werken uitstekend in gerijpte-sterke drank cocktails waar gladheid gewenst is. De techniek is ontstaan in de Milk & Honey bar en is overgenomen door moleculaire mixologie bars wereldwijd."
        }
      },
      {
        question: {
                  "en": "What is 'tea washing' spirits and how does it differ from traditional tea infusion?",
                  "es": "¿Qué es el 'lavado con té' de licores y cómo difiere de la infusión tradicional de té?",
                  "de": "Was ist 'Tee-Waschen' von Spirituosen und wie unterscheidet es sich von traditioneller Tee-Infusion?",
                  "nl": "Wat is 'thee wassen' sterke dranken en hoe verschilt het van traditionele thee infusie?"
        },
        options: [
        {
                  "en": "Mixing tea and alcohol equally",
                  "es": "Mezclar té y alcohol por igual",
                  "de": "Tee und Alkohol gleich mischen",
                  "nl": "Thee en alcohol gelijk mengen"
        },
        {
                  "en": "Cleaning tea equipment with spirits",
                  "es": "Limpiar equipo de té con licores",
                  "de": "Teeausrüstung mit Spirituosen reinigen",
                  "nl": "Thee apparatuur schoonmaken met sterke dranken"
        },
        {
                  "en": "Washing spirits through concentrated tea then filtering removes tannins/bitterness while leaving delicate aromatics; creates tea-influenced spirits without astringency unlike direct infusion",
                  "es": "Lavar licores a través de té concentrado luego filtrar elimina taninos/amargura mientras deja aromáticos delicados; crea licores influenciados por té sin astringencia a diferencia de infusión directa",
                  "de": "Spirituosen durch konzentrierten Tee waschen dann filtern entfernt Tannine/Bitterkeit während empfindliche Aromaten bleiben; schafft tee-beeinflusste Spirituosen ohne Adstringenz im Gegensatz zu direkter Infusion",
                  "nl": "Sterke dranken wassen door geconcentreerde thee dan filteren verwijdert tannines/bitterheid terwijl delicate aromaten blijven; creëert thee-beïnvloede sterke dranken zonder adstringentie in tegenstelling tot directe infusie"
        },
        {
                  "en": "Simply adding tea bags to spirits",
                  "es": "Simplemente añadir bolsas de té a licores",
                  "de": "Einfach Teebeutel zu Spirituosen hinzufügen",
                  "nl": "Simpelweg theezakjes toevoegen aan sterke dranken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Tea washing is a clarification technique where spirits are mixed with strongly brewed tea, then filtered to remove tea solids. Unlike direct tea infusion (which can create harsh tannins and astringency), tea washing captures aromatic tea compounds while filtering out bitter tannins and particulates. The spirit passes through the tea solution, picking up delicate floral, fruity, or earthy notes depending on tea variety (oolong, jasmine, pu-erh, etc.), then filtering removes the heavier tannic compounds. The result is a tea-influenced spirit with clean aromatics and no bitterness. Works particularly well with gin, vodka, or white rum for creating subtle tea cocktails.",
                  "es": "El lavado con té es una técnica de clarificación donde licores se mezclan con té fuertemente preparado, luego se filtran para eliminar sólidos de té. A diferencia de infusión directa de té (que puede crear taninos ásperos y astringencia), el lavado con té captura compuestos aromáticos de té mientras filtra taninos amargos y partículas. El licor pasa a través de la solución de té, recogiendo notas florales, afrutadas o terrosas delicadas dependiendo de variedad de té (oolong, jazmín, pu-erh, etc.), luego filtrar elimina los compuestos tánicos más pesados. El resultado es un licor influenciado por té con aromáticos limpios y sin amargura. Funciona particularmente bien con ginebra, vodka o ron blanco para crear cócteles de té sutiles.",
                  "de": "Tee-Waschen ist eine Klärungstechnik wo Spirituosen mit stark gebrühtem Tee gemischt werden, dann gefiltert um Tee-Feststoffe zu entfernen. Im Gegensatz zu direkter Tee-Infusion (die harte Tannine und Adstringenz schaffen kann), fängt Tee-Waschen aromatische Tee-Verbindungen ein während bittere Tannine und Partikel ausgefiltert werden. Die Spirituose passiert die Tee-Lösung, nimmt empfindliche florale, fruchtige oder erdige Noten auf je nach Tee-Sorte (Oolong, Jasmin, Pu-erh, etc.), dann entfernt Filtern die schwereren Tanninverbindungen. Das Ergebnis ist eine tee-beeinflusste Spirituose mit sauberen Aromaten und ohne Bitterkeit. Funktioniert besonders gut mit Gin, Wodka oder weißem Rum für Schaffung subtiler Tee-Cocktails.",
                  "nl": "Thee wassen is een verhelderings techniek waarbij sterke dranken worden gemengd met sterk gezette thee, dan gefilterd om thee vaste stoffen te verwijderen. In tegenstelling tot directe thee infusie (die harde tannines en adstringentie kan creëren), vangt thee wassen aromatische thee verbindingen terwijl bittere tannines en deeltjes worden uitgefilterd. De sterke drank passeert door de thee oplossing, pikt delicate bloemen, fruitige of aardse noten op afhankelijk van thee variëteit (oolong, jasmijn, pu-erh, etc.), dan verwijdert filteren de zwaardere tannine verbindingen. Het resultaat is een thee-beïnvloede sterke drank met schone aromaten en geen bitterheid. Werkt bijzonder goed met gin, vodka of witte rum voor het creëren van subtiele thee cocktails."
        }
      },
      {
        question: {
                  "en": "What is the concept of 'dilution control' in professional bartending and why is it critical?",
                  "es": "¿Qué es el concepto de 'control de dilución' en bartending profesional y por qué es crítico?",
                  "de": "Was ist das Konzept der 'Verdünnungskontrolle' im professionellen Bartending und warum ist sie kritisch?",
                  "nl": "Wat is het concept van 'verdunning controle' in professioneel bartending en waarom is het kritiek?"
        },
        options: [
        {
                  "en": "Adding specific amount of water to every drink",
                  "es": "Añadir cantidad específica de agua a cada bebida",
                  "de": "Spezifische Wassermenge zu jedem Getränk hinzufügen",
                  "nl": "Specifieke hoeveelheid water toevoegen aan elke drank"
        },
        {
                  "en": "Preventing any water from entering cocktails",
                  "es": "Prevenir que entre agua en cócteles",
                  "de": "Verhindern dass Wasser in Cocktails gelangt",
                  "nl": "Voorkomen dat water in cocktails komt"
        },
        {
                  "en": "Using only certain ice brands",
                  "es": "Usar solo ciertas marcas de hielo",
                  "de": "Nur bestimmte Eismarken verwenden",
                  "nl": "Alleen bepaalde ijsmerken gebruiken"
        },
        {
                  "en": "Precisely controlling water added through ice (targeting 20-30% for shaken, 25-35% for stirred) via ice type, temperature, shake/stir duration to achieve consistent texture and proof",
                  "es": "Controlar precisamente agua añadida a través de hielo (apuntando 20-30% para agitado, 25-35% para revuelto) vía tipo de hielo, temperatura, duración de agitado/revolver para lograr textura y graduación consistentes",
                  "de": "Präzise Kontrolle von durch Eis hinzugefügtem Wasser (Ziel 20-30% für geschüttelt, 25-35% für gerührt) über Eistyp, Temperatur, Schüttel-/Rührdauer um konsistente Textur und Alkoholgehalt zu erreichen",
                  "nl": "Precies water controleren toegevoegd door ijs (richtend op 20-30% voor geschud, 25-35% voor geroerd) via ijstype, temperatuur, schud/roer duur om consistente textuur en proof te bereiken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dilution control is the professional practice of precisely managing water integration from ice during cocktail preparation. Proper dilution is critical: too little creates harsh, unbalanced drinks; too much makes weak, watery cocktails. Target dilution: 20-30% for shaken drinks (more aeration/colder), 25-35% for stirred (less temperature drop). Factors affecting dilution: (1) Ice quality/temperature (colder ice = less dilution). (2) Ice size (larger cubes dilute slower). (3) Shaking/stirring duration and vigor. (4) Initial ingredient temperature. Professional bartenders track dilution by weighing drinks or using refractometers, achieving consistency across thousands of serves. Mastery of dilution separates amateur from professional cocktail execution.",
                  "es": "El control de dilución es la práctica profesional de gestionar precisamente la integración de agua del hielo durante preparación de cócteles. Dilución apropiada es crítica: muy poca crea bebidas ásperas y desbalanceadas; demasiada hace cócteles débiles y aguados. Dilución objetivo: 20-30% para bebidas agitadas (más aireación/más frías), 25-35% para revueltas (menos caída de temperatura). Factores que afectan dilución: (1) Calidad/temperatura de hielo (hielo más frío = menos dilución). (2) Tamaño de hielo (cubos más grandes diluyen más lento). (3) Duración e intensidad de agitado/revolver. (4) Temperatura inicial de ingredientes. Bartenders profesionales rastrean dilución pesando bebidas o usando refractómetros, logrando consistencia en miles de servicios. Maestría de dilución separa ejecución amateur de profesional de cócteles.",
                  "de": "Verdünnungskontrolle ist die professionelle Praxis präziser Verwaltung von Wasserintegration aus Eis während Cocktail-Zubereitung. Ordnungsgemäße Verdünnung ist kritisch: zu wenig schafft harte, unausgewogene Getränke; zu viel macht schwache, wässrige Cocktails. Ziel-Verdünnung: 20-30% für geschüttelte Getränke (mehr Belüftung/kälter), 25-35% für gerührte (weniger Temperaturabfall). Faktoren die Verdünnung beeinflussen: (1) Eisqualität/-temperatur (kälteres Eis = weniger Verdünnung). (2) Eisgröße (größere Würfel verdünnen langsamer). (3) Schüttel-/Rührdauer und -kraft. (4) Anfängliche Zutatentemperatur. Professionelle Bartender verfolgen Verdünnung durch Wiegen von Getränken oder Refraktometer-Nutzung, erreichen Konsistenz über Tausende Servierungen. Verdünnungs-Meisterschaft trennt Amateur von professioneller Cocktail-Ausführung.",
                  "nl": "Verdunning controle is de professionele praktijk van precies water integratie beheren van ijs tijdens cocktail bereiding. Juiste verdunning is kritiek: te weinig creëert ruwe, ongebalanceerde dranken; te veel maakt zwakke, waterige cocktails. Doel verdunning: 20-30% voor geschudde dranken (meer beluchting/kouder), 25-35% voor geroerde (minder temperatuur daling). Factoren die verdunning beïnvloeden: (1) Ijskwaliteit/temperatuur (kouder ijs = minder verdunning). (2) IJsgrootte (grotere blokjes verdunnen langzamer). (3) Schud/roer duur en kracht. (4) Initiële ingrediënt temperatuur. Professionele bartenders volgen verdunning door dranken te wegen of refractometers te gebruiken, consistentie bereiken over duizenden serves. Meesterschap van verdunning scheidt amateur van professionele cocktail uitvoering."
        }
      },
      {
        question: {
                  "en": "What is 'texture modification' through temperature in molecular mixology?",
                  "es": "¿Qué es la 'modificación de textura' a través de temperatura en mixología molecular?",
                  "de": "Was ist 'Texturmodifikation' durch Temperatur in molekularer Mixologie?",
                  "nl": "Wat is 'textuur modificatie' door temperatuur in moleculaire mixologie?"
        },
        options: [
        {
                  "en": "Using temperature-reactive hydrocolloids (methylcellulose gels when hot, agar melts when hot) to create cocktails that change texture with temperature",
                  "es": "Usar hidrocoloides reactivos a temperatura (metilcelulosa gelifica cuando caliente, agar se derrite cuando caliente) para crear cócteles que cambian textura con temperatura",
                  "de": "Temperatur-reaktive Hydrokolloide verwenden (Methylcellulose geliert wenn heiß, Agar schmilzt wenn heiß) um Cocktails zu schaffen die Textur mit Temperatur ändern",
                  "nl": "Temperatuur-reactieve hydrocolloïden gebruiken (methylcellulose geleert wanneer heet, agar smelt wanneer heet) om cocktails te creëren die textuur veranderen met temperatuur"
        },
        {
                  "en": "Heating cocktails with fire",
                  "es": "Calentar cócteles con fuego",
                  "de": "Cocktails mit Feuer erhitzen",
                  "nl": "Cocktails verwarmen met vuur"
        },
        {
                  "en": "Serving all cocktails at room temperature",
                  "es": "Servir todos los cócteles a temperatura ambiente",
                  "de": "Alle Cocktails bei Raumtemperatur servieren",
                  "nl": "Alle cocktails op kamertemperatuur serveren"
        },
        {
                  "en": "Only using frozen ingredients",
                  "es": "Solo usar ingredientes congelados",
                  "de": "Nur gefrorene Zutaten verwenden",
                  "nl": "Alleen bevroren ingrediënten gebruiken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Temperature-based texture modification uses hydrocolloids with unusual thermal properties to create cocktails that transform as they warm or cool. Key examples: (1) Methylcellulose—liquid when cold, forms gel when heated (40-90°C), enabling hot cocktails that become thick and creamy. (2) Agar—forms gel when cooled below 35-40°C, melts when reheated, creating cocktails that solidify as they cool. (3) Gellan gum—can create thermally reversible or irreversible gels depending on preparation. This enables creative presentations: hot cocktails that gel in the mouth, frozen cocktails that melt into different textures, or temperature-triggered flavor releases. It represents cutting-edge molecular mixology.",
                  "es": "La modificación de textura basada en temperatura usa hidrocoloides con propiedades térmicas inusuales para crear cócteles que se transforman al calentarse o enfriarse. Ejemplos clave: (1) Metilcelulosa—líquida cuando fría, forma gel cuando calentada (40-90°C), permitiendo cócteles calientes que se vuelven espesos y cremosos. (2) Agar—forma gel cuando enfriada por debajo de 35-40°C, se derrite cuando recalentada, creando cócteles que se solidifican al enfriarse. (3) Goma gellan—puede crear geles térmicamente reversibles o irreversibles dependiendo de preparación. Esto permite presentaciones creativas: cócteles calientes que gelifican en la boca, cócteles congelados que se derriten en diferentes texturas, o liberaciones de sabor activadas por temperatura. Representa mixología molecular de vanguardia.",
                  "de": "Temperaturbasierte Texturmodifikation verwendet Hydrokolloide mit ungewöhnlichen thermischen Eigenschaften um Cocktails zu schaffen die sich transformieren während sie erwärmen oder abkühlen. Schlüsselbeispiele: (1) Methylcellulose—flüssig wenn kalt, bildet Gel wenn erhitzt (40-90°C), ermöglicht heiße Cocktails die dick und cremig werden. (2) Agar—bildet Gel wenn unter 35-40°C gekühlt, schmilzt wenn wieder erhitzt, schafft Cocktails die erstarren während sie abkühlen. (3) Gellan-Gummi—kann thermisch reversible oder irreversible Gele schaffen je nach Vorbereitung. Dies ermöglicht kreative Präsentationen: heiße Cocktails die im Mund gelieren, gefrorene Cocktails die in verschiedene Texturen schmelzen, oder temperatur-ausgelöste Geschmacksfreisetzungen. Es repräsentiert modernste molekulare Mixologie.",
                  "nl": "Temperatuur-gebaseerde textuur modificatie gebruikt hydrocolloïden met ongewone thermische eigenschappen om cocktails te creëren die transformeren als ze opwarmen of afkoelen. Belangrijke voorbeelden: (1) Methylcellulose—vloeibaar wanneer koud, vormt gel wanneer verwarmd (40-90°C), maakt warme cocktails mogelijk die dik en romig worden. (2) Agar—vormt gel wanneer gekoeld onder 35-40°C, smelt wanneer opnieuw verwarmd, creëert cocktails die stollen als ze afkoelen. (3) Gellan gom—kan thermisch reversibele of irreversibele gels creëren afhankelijk van voorbereiding. Dit maakt creatieve presentaties mogelijk: warme cocktails die geleren in de mond, bevroren cocktails die smelten in verschillende texturen, of temperatuur-getriggerde smaak vrijgaven. Het vertegenwoordigt geavanceerde moleculaire mixologie."
        }
      },
      {
        question: {
                  "en": "What is the role of 'ice programs' in modern cocktail bars and what factors do they control?",
                  "es": "¿Cuál es el papel de los 'programas de hielo' en bares de cócteles modernos y qué factores controlan?",
                  "de": "Was ist die Rolle von 'Eis-Programmen' in modernen Cocktail-Bars und welche Faktoren kontrollieren sie?",
                  "nl": "Wat is de rol van 'ijs programma's' in moderne cocktail bars en welke factoren controleren ze?"
        },
        options: [
        {
                  "en": "Programming ice machines to run automatically",
                  "es": "Programar máquinas de hielo para funcionar automáticamente",
                  "de": "Eismaschinen programmieren um automatisch zu laufen",
                  "nl": "IJs machines programmeren om automatisch te draaien"
        },
        {
                  "en": "Using only crushed ice for all drinks",
                  "es": "Usar solo hielo triturado para todas las bebidas",
                  "de": "Nur zerstoßenes Eis für alle Getränke verwenden",
                  "nl": "Alleen fijngemaakt ijs gebruiken voor alle dranken"
        },
        {
                  "en": "Only buying ice from one supplier",
                  "es": "Solo comprar hielo de un proveedor",
                  "de": "Nur Eis von einem Lieferanten kaufen",
                  "nl": "Alleen ijs kopen van één leverancier"
        },
        {
                  "en": "Comprehensive ice management controlling water purity, freezing method (directional/clear ice), ice size/shape for different drinks, storage temperature (-20°C optimal), and ice-to-drink ratios for dilution consistency",
                  "es": "Gestión integral de hielo controlando pureza de agua, método de congelación (hielo direccional/claro), tamaño/forma de hielo para diferentes bebidas, temperatura de almacenamiento (-20°C óptimo) y proporciones hielo-bebida para consistencia de dilución",
                  "de": "Umfassendes Eis-Management das Wasserreinheit, Gefriermethode (gerichtetes/klares Eis), Eisgröße/-form für verschiedene Getränke, Lagertemperatur (-20°C optimal) und Eis-zu-Getränk-Verhältnisse für Verdünnungskonsistenz kontrolliert",
                  "nl": "Uitgebreid ijs management dat water zuiverheid controleert, bevriezingsmethode (directioneel/helder ijs), ijsgrootte/-vorm voor verschillende dranken, opslag temperatuur (-20°C optimaal) en ijs-tot-drank verhoudingen voor verdunning consistentie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Ice programs are comprehensive systems in high-end cocktail bars managing every aspect of ice production and use. Components include: (1) Water treatment—filtered, deionized, or reverse-osmosis water for clarity and purity. (2) Directional freezing—specialized machines freeze ice from one direction, pushing impurities/air bubbles out, creating crystal-clear ice. (3) Size/shape variety—large format blocks for carving, 2-inch cubes for rocks drinks, smaller cubes for shaking, crushed for juleps, spears for Collins glasses. (4) Temperature management—storing ice at optimal -20°C prevents surface melting. (5) Dilution protocols—specific ice amounts/types for consistent cocktail dilution. Premier bars have dedicated ice programs ensuring every drink receives perfectly appropriate ice, elevating the cocktail experience.",
                  "es": "Los programas de hielo son sistemas integrales en bares de cócteles de alta gama gestionando cada aspecto de producción y uso de hielo. Componentes incluyen: (1) Tratamiento de agua—agua filtrada, desionizada o ósmosis inversa para claridad y pureza. (2) Congelación direccional—máquinas especializadas congelan hielo desde una dirección, empujando impurezas/burbujas de aire fuera, creando hielo cristalino. (3) Variedad de tamaño/forma—bloques de gran formato para tallar, cubos de 2 pulgadas para bebidas en roca, cubos más pequeños para agitar, triturado para juleps, lanzas para vasos Collins. (4) Gestión de temperatura—almacenar hielo a -20°C óptimo previene derretimiento superficial. (5) Protocolos de dilución—cantidades/tipos específicos de hielo para dilución consistente de cócteles. Bares premier tienen programas de hielo dedicados asegurando que cada bebida reciba hielo perfectamente apropiado, elevando la experiencia de cóctel.",
                  "de": "Eis-Programme sind umfassende Systeme in High-End-Cocktail-Bars die jeden Aspekt der Eisproduktion und -nutzung verwalten. Komponenten umfassen: (1) Wasseraufbereitung—gefiltertes, entionisiertes oder Umkehrosmose-Wasser für Klarheit und Reinheit. (2) Gerichtetes Gefrieren—spezialisierte Maschinen gefrieren Eis aus einer Richtung, schieben Verunreinigungen/Luftblasen hinaus, schaffen kristallklares Eis. (3) Größen-/Formvielfalt—großformatige Blöcke zum Schnitzen, 2-Zoll-Würfel für Rocks-Getränke, kleinere Würfel zum Schütteln, zerstoßen für Juleps, Speere für Collins-Gläser. (4) Temperatur-Management—Eis bei optimalem -20°C lagern verhindert Oberflächenschmelzen. (5) Verdünnungsprotokolle—spezifische Eismengen/-typen für konsistente Cocktail-Verdünnung. Premier-Bars haben dedizierte Eis-Programme die sicherstellen dass jedes Getränk perfekt geeignetes Eis erhält, heben das Cocktail-Erlebnis.",
                  "nl": "IJs programma's zijn uitgebreide systemen in high-end cocktail bars die elk aspect van ijs productie en gebruik beheren. Componenten omvatten: (1) Water behandeling—gefilterd, gedeïoniseerd of omgekeerde osmose water voor helderheid en zuiverheid. (2) Directioneel bevriezen—gespecialiseerde machines bevriezen ijs vanuit één richting, duwen onzuiverheden/luchtbellen eruit, creëren kristalhelder ijs. (3) Grootte/vorm variëteit—groot formaat blokken voor snijden, 2-inch blokjes voor rocks dranken, kleinere blokjes voor schudden, fijngemaakt voor juleps, speren voor Collins glazen. (4) Temperatuur management—ijs opslaan bij optimale -20°C voorkomt oppervlakte smelten. (5) Verdunning protocollen—specifieke ijs hoeveelheden/types voor consistente cocktail verdunning. Premier bars hebben toegewijde ijs programma's die ervoor zorgen dat elke drank perfect geschikt ijs ontvangt, verhogen de cocktail ervaring."
        }
      },
      {
        question: {
                  "en": "What is 'freeze distillation' or 'fractional freezing' in craft spirits and cocktails?",
                  "es": "¿Qué es la 'destilación por congelación' o 'congelación fraccionada' en licores artesanales y cócteles?",
                  "de": "Was ist 'Gefrier-Destillation' oder 'fraktionierte Gefrierung' in handwerklichen Spirituosen und Cocktails?",
                  "nl": "Wat is 'vries distillatie' of 'fractionele bevriezing' in ambachtelijke sterke dranken en cocktails?"
        },
        options: [
        {
                  "en": "Concentrating alcohol by freezing and removing ice (water freezes at 0°C, alcohol stays liquid), increases ABV and intensifies flavors but is illegal for commercial spirits in many countries",
                  "es": "Concentrar alcohol congelando y eliminando hielo (agua se congela a 0°C, alcohol permanece líquido), aumenta ABV e intensifica sabores pero es ilegal para licores comerciales en muchos países",
                  "de": "Alkohol durch Gefrieren und Entfernen von Eis konzentrieren (Wasser gefriert bei 0°C, Alkohol bleibt flüssig), erhöht ABV und intensiviert Aromen aber ist illegal für kommerzielle Spirituosen in vielen Ländern",
                  "nl": "Alcohol concentreren door bevriezen en ijs verwijderen (water bevriest bij 0°C, alcohol blijft vloeibaar), verhoogt ABV en intensiveert smaken maar is illegaal voor commerciële sterke dranken in veel landen"
        },
        {
                  "en": "Freezing cocktails to serve frozen",
                  "es": "Congelar cócteles para servir congelados",
                  "de": "Cocktails einfrieren um gefroren zu servieren",
                  "nl": "Cocktails bevriezen om bevroren te serveren"
        },
        {
                  "en": "Traditional heat-based distillation",
                  "es": "Destilación tradicional basada en calor",
                  "de": "Traditionelle hitzebasierte Destillation",
                  "nl": "Traditionele warmte-gebaseerde distillatie"
        },
        {
                  "en": "Using liquid nitrogen to chill drinks",
                  "es": "Usar nitrógeno líquido para enfriar bebidas",
                  "de": "Flüssigen Stickstoff verwenden um Getränke zu kühlen",
                  "nl": "Vloeibare stikstof gebruiken om drankjes te koelen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Freeze distillation (fractional freezing or 'jacking') concentrates alcohol by exploiting the different freezing points of water (0°C) and ethanol (-114°C). When a fermented liquid is partially frozen, water crystallizes into ice while alcohol remains liquid. Removing the ice leaves behind a more concentrated alcoholic liquid. This technique was historically used for applejack and Eisbock beer. However, freeze distillation doesn't separate methanol or other congeners like heat distillation does, potentially concentrating harmful compounds. It's illegal for commercial spirit production in many jurisdictions (US, EU) but used experimentally by craft bartenders for creating concentrated cocktail ingredients or ice-distilled drinks.",
                  "es": "La destilación por congelación (congelación fraccionada o 'jacking') concentra alcohol explotando los diferentes puntos de congelación del agua (0°C) y etanol (-114°C). Cuando un líquido fermentado se congela parcialmente, el agua cristaliza en hielo mientras el alcohol permanece líquido. Eliminar el hielo deja atrás un líquido alcohólico más concentrado. Esta técnica se usó históricamente para applejack y cerveza Eisbock. Sin embargo, la destilación por congelación no separa metanol u otros congéneres como lo hace la destilación por calor, potencialmente concentrando compuestos dañinos. Es ilegal para producción comercial de licores en muchas jurisdicciones (EE.UU., UE) pero se usa experimentalmente por bartenders artesanales para crear ingredientes de cócteles concentrados o bebidas destiladas por hielo.",
                  "de": "Gefrier-Destillation (fraktionierte Gefrierung oder 'Jacking') konzentriert Alkohol durch Ausnutzung der unterschiedlichen Gefrierpunkte von Wasser (0°C) und Ethanol (-114°C). Wenn eine fermentierte Flüssigkeit teilweise gefroren wird, kristallisiert Wasser zu Eis während Alkohol flüssig bleibt. Entfernen des Eises hinterlässt eine konzentriertere alkoholische Flüssigkeit. Diese Technik wurde historisch für Applejack und Eisbock-Bier verwendet. Allerdings trennt Gefrier-Destillation nicht Methanol oder andere Begleitstoffe wie Hitze-Destillation, konzentriert potenziell schädliche Verbindungen. Sie ist illegal für kommerzielle Spirituosenproduktion in vielen Rechtssystemen (USA, EU) aber wird experimentell von handwerklichen Bartendern für Schaffung konzentrierter Cocktail-Zutaten oder eis-destillierter Getränke verwendet.",
                  "nl": "Vries distillatie (fractionele bevriezing of 'jacking') concentreert alcohol door de verschillende vriespunten van water (0°C) en ethanol (-114°C) te benutten. Wanneer een gefermenteerde vloeistof gedeeltelijk bevriest, kristalliseert water tot ijs terwijl alcohol vloeibaar blijft. Het ijs verwijderen laat een meer geconcentreerde alcoholische vloeistof achter. Deze techniek werd historisch gebruikt voor applejack en Eisbock bier. Echter, vries distillatie scheidt geen methanol of andere bijproducten zoals warmte distillatie doet, concentreert mogelijk schadelijke verbindingen. Het is illegaal voor commerciële sterke drank productie in veel jurisdicties (VS, EU) maar wordt experimenteel gebruikt door ambachtelijke bartenders voor het creëren van geconcentreerde cocktail ingrediënten of ijs-gedistilleerde drankjes."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  }
})();