// Quiz Level 3: Famous buildings - Machu Picchu
(function() {
  const level3 = {
    name: {
      en: "Machu Picchu",
      es: "Machu Picchu",
      de: "Machu Picchu",
      nl: "Machu Picchu"
    },
    questions: [
      {
        question: {
          en: "What technique did the Incas use to cut stones for Machu Picchu?",
          es: "¿Qué técnica usaron los Incas para cortar piedras para Machu Picchu?",
          de: "Welche Technik verwendeten die Inkas zum Schneiden von Steinen für Machu Picchu?",
          nl: "Welke techniek gebruikten de Inca's om stenen te snijden voor Machu Picchu?"
        },
        options: [
          { en: "Diamond saws", es: "Sierras de diamante", de: "Diamantsägen", nl: "Diamantzagen" },
          { en: "Laser cutting", es: "Corte láser", de: "Laserschneiden", nl: "Lasersnijden" },
          { en: "Stone hammers and bronze chisels", es: "Martillos de piedra y cinceles de bronce", de: "Steinhämmer und Bronzemeißel", nl: "Stenen hamers en bronzen beitels" },
          { en: "Iron tools", es: "Herramientas de hierro", de: "Eisenwerkzeuge", nl: "IJzeren gereedschap" }
        ],
        correct: 2,
        explanation: {
          en: "The Incas used harder river stones as hammers and bronze tools as chisels to shape the granite blocks with remarkable precision.",
          es: "Los Incas usaron piedras de río más duras como martillos y herramientas de bronce como cinceles para dar forma a los bloques de granito con notable precisión.",
          de: "Die Inkas verwendeten härtere Flusssteine als Hämmer und Bronzewerkzeuge als Meißel, um die Granitblöcke mit bemerkenswerter Präzision zu formen.",
          nl: "De Inca's gebruikten hardere rivierstenen als hamers en bronzen gereedschap als beitels om de granieten blokken met opmerkelijke precisie te vormen."
        }
      },
      {
        question: {
          en: "How precise was the stone fitting at Machu Picchu?",
          es: "¿Qué tan preciso era el encaje de piedras en Machu Picchu?",
          de: "Wie präzise war die Steinfügung in Machu Picchu?",
          nl: "Hoe precies was de steenpasvorm in Machu Picchu?"
        },
        options: [
          { en: "Gaps of several centimeters", es: "Espacios de varios centímetros", de: "Lücken von mehreren Zentimetern", nl: "Ruimtes van verschillende centimeters" },
          { en: "So tight a knife blade cannot fit between stones", es: "Tan ajustado que una hoja de cuchillo no cabe entre las piedras", de: "So eng, dass eine Messerklinge nicht zwischen die Steine passt", nl: "Zo strak dat een mesblad niet tussen de stenen past" },
          { en: "Held together with cement", es: "Unidos con cemento", de: "Mit Zement zusammengehalten", nl: "Bijeengehouden met cement" },
          { en: "Loosely stacked", es: "Apiladas sin orden", de: "Lose gestapelt", nl: "Los gestapeld" }
        ],
        correct: 1,
        explanation: {
          en: "The stonework is so precise that a knife blade cannot fit between the stones, demonstrating extraordinary craftsmanship without modern tools.",
          es: "El trabajo en piedra es tan preciso que una hoja de cuchillo no puede caber entre las piedras, demostrando una artesanía extraordinaria sin herramientas modernas.",
          de: "Die Steinarbeit ist so präzise, dass eine Messerklinge nicht zwischen die Steine passt, was außergewöhnliche Handwerkskunst ohne moderne Werkzeuge demonstriert.",
          nl: "Het steenwerk is zo precies dat een mesblad niet tussen de stenen past, wat buitengewone vakmanschap zonder moderne gereedschappen aantoont."
        }
      },
      {
        question: {
          en: "What are the two main architectural styles found at Machu Picchu?",
          es: "¿Cuáles son los dos estilos arquitectónicos principales en Machu Picchu?",
          de: "Was sind die beiden Hauptbaustile in Machu Picchu?",
          nl: "Wat zijn de twee belangrijkste architectonische stijlen in Machu Picchu?"
        },
        options: [
          { en: "Gothic and Renaissance", es: "Gótico y Renacimiento", de: "Gotisch und Renaissance", nl: "Gotisch en Renaissance" },
          { en: "Ashlar (finely cut) and fieldstone (rough)", es: "Sillar (finamente cortado) y piedra de campo (tosca)", de: "Quaderstein (fein geschnitten) und Feldstein (rau)", nl: "Ashlar (fijn gesneden) en veldst een (ruw)" },
          { en: "Brick and wood", es: "Ladrillo y madera", de: "Ziegel und Holz", nl: "Baksteen en hout" },
          { en: "Concrete and steel", es: "Concreto y acero", de: "Beton und Stahl", nl: "Beton en staal" }
        ],
        correct: 1,
        explanation: {
          en: "Machu Picchu features both ashlar masonry (precisely cut stones for important buildings) and fieldstone construction (rougher stones for less important structures).",
          es: "Machu Picchu presenta tanto mampostería de sillar (piedras cortadas con precisión para edificios importantes) como construcción de piedra de campo (piedras más toscas para estructuras menos importantes).",
          de: "Machu Picchu verfügt sowohl über Quadermauerwerk (präzise geschnittene Steine für wichtige Gebäude) als auch über Feldsteinbau (rauere Steine für weniger wichtige Strukturen).",
          nl: "Machu Picchu heeft zowel ashlar metselwerk (precies gesneden stenen voor belangrijke gebouwen) als veldsteenconstructie (ruwere stenen voor minder belangrijke structuren)."
        }
      },
      {
        question: {
          en: "How many major sectors can Machu Picchu's urban area be divided into?",
          es: "¿En cuántos sectores principales se puede dividir el área urbana de Machu Picchu?",
          de: "In wie viele Hauptsektoren kann der städtische Bereich von Machu Picchu unterteilt werden?",
          nl: "In hoeveel hoofdsectoren kan het stedelijke gebied van Machu Picchu worden verdeeld?"
        },
        options: [
          { en: "Two: Sacred and Residential", es: "Dos: Sagrado y Residencial", de: "Zwei: Sakral und Wohn-", nl: "Twee: Heilig en Residentieel" },
          { en: "Three: Sacred, Residential, and Industrial", es: "Tres: Sagrado, Residencial e Industrial", de: "Drei: Sakral, Wohn- und Industrie-", nl: "Drie: Heilig, Residentieel en Industrieel" },
          { en: "Four: North, South, East, West", es: "Cuatro: Norte, Sur, Este, Oeste", de: "Vier: Nord, Süd, Ost, West", nl: "Vier: Noord, Zuid, Oost, West" },
          { en: "Five: Palace, Temple, Market, Residential, Storage", es: "Cinco: Palacio, Templo, Mercado, Residencial, Almacenamiento", de: "Fünf: Palast, Tempel, Markt, Wohn-, Lager-", nl: "Vijf: Paleis, Tempel, Markt, Residentieel, Opslag" }
        ],
        correct: 0,
        explanation: {
          en: "The urban sector is divided into Sacred (temples and ceremonial buildings) and Residential (living quarters for different social classes) sectors.",
          es: "El sector urbano se divide en sectores Sagrado (templos y edificios ceremoniales) y Residencial (viviendas para diferentes clases sociales).",
          de: "Der städtische Sektor ist in Sakral (Tempel und Zeremonialgebäude) und Wohn- (Wohnquartiere für verschiedene Sozialklassen) Sektoren unterteilt.",
          nl: "De stedelijke sector is verdeeld in Heilige (tempels en ceremoniële gebouwen) en Residentiële (woonruimtes voor verschillende sociale klassen) sectoren."
        }
      },
      {
        question: {
          en: "What separates the urban and agricultural sectors?",
          es: "¿Qué separa los sectores urbano y agrícola?",
          de: "Was trennt den städtischen und landwirtschaftlichen Sektor?",
          nl: "Wat scheidt de stedelijke en landbouwsectoren?"
        },
        options: [
          { en: "A river", es: "Un río", de: "Ein Fluss", nl: "Een rivier" },
          { en: "A main wall or plaza", es: "Un muro principal o plaza", de: "Eine Hauptmauer oder Plaza", nl: "Een hoofdmuur of plein" },
          { en: "A mountain", es: "Una montaña", de: "Ein Berg", nl: "Een berg" },
          { en: "A forest", es: "Un bosque", de: "Ein Wald", nl: "Een bos" }
        ],
        correct: 1,
        explanation: {
          en: "A long wall and the main plaza (Central Plaza) separate the agricultural terraces from the urban residential and ceremonial areas.",
          es: "Un largo muro y la plaza principal (Plaza Central) separan las terrazas agrícolas de las áreas residenciales urbanas y ceremoniales.",
          de: "Eine lange Mauer und der Hauptplatz (Zentralplatz) trennen die landwirtschaftlichen Terrassen von den städtischen Wohn- und Zeremonialbereichen.",
          nl: "Een lange muur en het hoofdplein (Centraal Plein) scheiden de landbouwterrassen van de stedelijke woon- en ceremoniële gebieden."
        }
      },
      {
        question: {
          en: "What structural feature helped Machu Picchu withstand earthquakes?",
          es: "¿Qué característica estructural ayudó a Machu Picchu a resistir terremotos?",
          de: "Welches strukturelle Merkmal half Machu Picchu, Erdbeben zu widerstehen?",
          nl: "Welk structureel kenmerk hielp Machu Picchu aardbevingen te weerstaan?"
        },
        options: [
          { en: "Steel reinforcement", es: "Refuerzo de acero", de: "Stahlverstärkung", nl: "Staalversterking" },
          { en: "Flexible dry-stone walls that move and resettle", es: "Muros flexibles de piedra seca que se mueven y se reacomodan", de: "Flexible Trockenmauern, die sich bewegen und neu setzen", nl: "Flexibele droge-stenen muren die bewegen en opnieuw schikken" },
          { en: "Deep foundations", es: "Cimientos profundos", de: "Tiefe Fundamente", nl: "Diepe fundamenten" },
          { en: "Rubber joints", es: "Juntas de goma", de: "Gummifugen", nl: "Rubberen voegen" }
        ],
        correct: 1,
        explanation: {
          en: "The interlocking stones without mortar allow walls to 'dance' during earthquakes, moving slightly and then resettling without collapsing.",
          es: "Las piedras entrelazadas sin mortero permiten que los muros 'bailen' durante los terremotos, moviéndose ligeramente y luego reacomodándose sin colapsar.",
          de: "Die ineinandergreifenden Steine ohne Mörtel ermöglichen es den Mauern, während Erdbeben zu 'tanzen', sich leicht zu bewegen und sich dann neu zu setzen, ohne einzustürzen.",
          nl: "De in elkaar grijpende stenen zonder mortel stellen muren in staat om tijdens aardbevingen te 'dansen', licht te bewegen en zich dan opnieuw te schikken zonder in te storten."
        }
      },
      {
        question: {
          en: "What type of roof structure was likely used on Machu Picchu buildings?",
          es: "¿Qué tipo de estructura de techo se usaba probablemente en los edificios de Machu Picchu?",
          de: "Welche Art von Dachstruktur wurde wahrscheinlich auf Machu Picchu-Gebäuden verwendet?",
          nl: "Welk type dakstructuur werd waarschijnlijk gebruikt op gebouwen in Machu Picchu?"
        },
        options: [
          { en: "Tile roofs", es: "Techos de tejas", de: "Ziegeldächer", nl: "Tegeldaken" },
          { en: "Thatched roofs made of ichu grass", es: "Techos de paja hechos de pasto ichu", de: "Strohdächer aus Ichu-Gras", nl: "Rieten daken gemaakt van ichu-gras" },
          { en: "Stone slabs", es: "Losas de piedra", de: "Steinplatten", nl: "Stenen platen" },
          { en: "Metal sheets", es: "Láminas de metal", de: "Metallbleche", nl: "Metalen platen" }
        ],
        correct: 1,
        explanation: {
          en: "Buildings likely had steep thatched roofs made from local ichu grass, though these have not survived. The steep angle helped shed heavy rainfall.",
          es: "Los edificios probablemente tenían techos empinados de paja hechos de pasto ichu local, aunque estos no han sobrevivido. El ángulo empinado ayudaba a drenar las fuertes lluvias.",
          de: "Gebäude hatten wahrscheinlich steile Strohdächer aus lokalem Ichu-Gras, obwohl diese nicht überlebt haben. Der steile Winkel half, starke Regenfälle abzuleiten.",
          nl: "Gebouwen hadden waarschijnlijk steile rieten daken gemaakt van lokaal ichu-gras, hoewel deze niet zijn bewaard gebleven. De steile hoek hielp zware regenval af te voeren."
        }
      },
      {
        question: {
          en: "What purpose did the trapezoid-shaped doors and windows serve?",
          es: "¿Qué propósito tenían las puertas y ventanas en forma de trapezoide?",
          de: "Welchen Zweck erfüllten die trapezförmigen Türen und Fenster?",
          nl: "Welk doel dienden de trapezoïdale deuren en ramen?"
        },
        options: [
          { en: "Decoration only", es: "Solo decoración", de: "Nur Dekoration", nl: "Alleen decoratie" },
          { en: "Better structural stability during earthquakes", es: "Mejor estabilidad estructural durante terremotos", de: "Bessere strukturelle Stabilität bei Erdbeben", nl: "Betere structurele stabiliteit tijdens aardbevingen" },
          { en: "To save stone", es: "Para ahorrar piedra", de: "Um Stein zu sparen", nl: "Om steen te besparen" },
          { en: "Religious symbolism", es: "Simbolismo religioso", de: "Religiöse Symbolik", nl: "Religieuze symboliek" }
        ],
        correct: 1,
        explanation: {
          en: "The trapezoid shape (wider at the bottom) provided excellent structural stability, helping openings resist earthquake forces and support the weight above them.",
          es: "La forma de trapezoide (más ancha en la base) proporcionaba excelente estabilidad estructural, ayudando a las aberturas a resistir las fuerzas sísmicas y soportar el peso sobre ellas.",
          de: "Die Trapezform (unten breiter) bot ausgezeichnete strukturelle Stabilität und half Öffnungen, Erdbebenkräften zu widerstehen und das Gewicht darüber zu tragen.",
          nl: "De trapezoïdale vorm (breder onderaan) bood uitstekende structurele stabiliteit en hielp openingen aardbevingskrachten te weerstaan en het gewicht erboven te dragen."
        }
      },
      {
        question: {
          en: "How were multi-ton stones transported to Machu Picchu?",
          es: "¿Cómo se transportaron las piedras de varias toneladas a Machu Picchu?",
          de: "Wie wurden die mehrere Tonnen schweren Steine nach Machu Picchu transportiert?",
          nl: "Hoe werden de stenen van meerdere tonnen naar Machu Picchu getransporteerd?"
        },
        options: [
          { en: "By helicopter", es: "En helicóptero", de: "Per Hubschrauber", nl: "Per helikopter" },
          { en: "By wagon", es: "En carreta", de: "Per Wagen", nl: "Per wagen" },
          { en: "Manual labor using log rollers, ropes, and ramps", es: "Trabajo manual usando rodillos de troncos, cuerdas y rampas", de: "Handarbeit unter Verwendung von Baumstammrollen, Seilen und Rampen", nl: "Handarbeid met behulp van boomstamrollen, touwen en hellingen" },
          { en: "They were carved on site from existing rock", es: "Fueron talladas en el sitio de roca existente", de: "Sie wurden vor Ort aus bestehendem Gestein geschnitzt", nl: "Ze werden ter plaatse uit bestaand gesteente gehouwen" }
        ],
        correct: 2,
        explanation: {
          en: "The Incas used human labor with wooden rollers, ropes, and earthen ramps to move stones. Much of the granite was quarried locally from the mountain.",
          es: "Los Incas usaron trabajo humano con rodillos de madera, cuerdas y rampas de tierra para mover piedras. Gran parte del granito fue extraído localmente de la montaña.",
          de: "Die Inkas verwendeten menschliche Arbeitskraft mit Holzrollen, Seilen und Erdrampen, um Steine zu bewegen. Viel des Granits wurde lokal vom Berg abgebaut.",
          nl: "De Inca's gebruikten menselijke arbeid met houten rollen, touwen en aarden hellingen om stenen te verplaatsen. Veel van het graniet werd lokaal uit de berg gewonnen."
        }
      },
      {
        question: {
          en: "What is the function of the stone pegs (ring stones) found on some walls?",
          es: "¿Cuál es la función de las clavijas de piedra encontradas en algunos muros?",
          de: "Was ist die Funktion der Steinstifte an einigen Mauern?",
          nl: "Wat is de functie van de stenen pennen aan sommige muren?"
        },
        options: [
          { en: "Decoration", es: "Decoración", de: "Dekoration", nl: "Decoratie" },
          { en: "To tie ropes for securing thatched roofs", es: "Para atar cuerdas y asegurar techos de paja", de: "Zum Binden von Seilen zur Sicherung von Strohdächern", nl: "Om touwen vast te binden voor het beveiligen van rieten daken" },
          { en: "Clock markers", es: "Marcadores de reloj", de: "Uhrzeiger", nl: "Klokmarkeringen" },
          { en: "Weapons holders", es: "Porta armas", de: "Waffenhalter", nl: "Wapenhouders" }
        ],
        correct: 1,
        explanation: {
          en: "Stone pegs (or ring stones) protruding from walls were used to tie down ropes that secured the thatched roofs against strong winds.",
          es: "Las clavijas de piedra que sobresalen de los muros se usaban para atar cuerdas que aseguraban los techos de paja contra vientos fuertes.",
          de: "Steinstifte, die aus Mauern hervorstehen, wurden verwendet, um Seile zu binden, die die Strohdächer gegen starke Winde sicherten.",
          nl: "Stenen pennen die uit muren steken, werden gebruikt om touwen vast te binden die de rieten daken tegen sterke winden vastzetten."
        }
      },
      {
        question: {
          en: "What material was used for the foundations under buildings?",
          es: "¿Qué material se usó para los cimientos bajo los edificios?",
          de: "Welches Material wurde für die Fundamente unter Gebäuden verwendet?",
          nl: "Welk materiaal werd gebruikt voor de fundamenten onder gebouwen?"
        },
        options: [
          { en: "Concrete", es: "Concreto", de: "Beton", nl: "Beton" },
          { en: "Layers of gravel and sand for drainage", es: "Capas de grava y arena para drenaje", de: "Schichten aus Kies und Sand zur Entwässerung", nl: "Lagen grind en zand voor drainage" },
          { en: "Wood pilings", es: "Pilotes de madera", de: "Holzpfähle", nl: "Houten palen" },
          { en: "Metal bars", es: "Barras de metal", de: "Metallstäbe", nl: "Metalen staven" }
        ],
        correct: 1,
        explanation: {
          en: "Buildings were built on deep foundations of layered gravel, sand, and stone chips that provided excellent drainage, crucial in the wet cloud forest climate.",
          es: "Los edificios fueron construidos sobre cimientos profundos de grava en capas, arena y fragmentos de piedra que proporcionaban excelente drenaje, crucial en el clima húmedo del bosque nuboso.",
          de: "Gebäude wurden auf tiefen Fundamenten aus geschichteten Schotter, Sand und Steinsplittern gebaut, die ausgezeichnete Entwässerung boten, entscheidend im feuchten Nebelwald-Klima.",
          nl: "Gebouwen werden gebouwd op diepe fundamenten van gelaagd grind, zand en steensplinters die uitstekende drainage boden, cruciaal in het natte nevelwoudklimaat."
        }
      },
      {
        question: {
          en: "How many Inca urban sectors have been identified at Machu Picchu?",
          es: "¿Cuántos sectores urbanos incas se han identificado en Machu Picchu?",
          de: "Wie viele Inka-Stadtsektoren wurden in Machu Picchu identifiziert?",
          nl: "Hoeveel Inca-stedelijke sectoren zijn geïdentificeerd in Machu Picchu?"
        },
        options: [
          { en: "About 10", es: "Alrededor de 10", de: "Etwa 10", nl: "Ongeveer 10" },
          { en: "About 20", es: "Alrededor de 20", de: "Etwa 20", nl: "Ongeveer 20" },
          { en: "About 50", es: "Alrededor de 50", de: "Etwa 50", nl: "Ongeveer 50" },
          { en: "About 100", es: "Alrededor de 100", de: "Etwa 100", nl: "Ongeveer 100" }
        ],
        correct: 1,
        explanation: {
          en: "Archaeologists have identified approximately 20 distinct sectors or precincts within the urban area, each with specific functions or social groups.",
          es: "Los arqueólogos han identificado aproximadamente 20 sectores o recintos distintos dentro del área urbana, cada uno con funciones o grupos sociales específicos.",
          de: "Archäologen haben etwa 20 verschiedene Sektoren oder Bezirke im städtischen Bereich identifiziert, jeder mit spezifischen Funktionen oder sozialen Gruppen.",
          nl: "Archeologen hebben ongeveer 20 verschillende sectoren of zones binnen het stedelijke gebied geïdentificeerd, elk met specifieke functies of sociale groepen."
        }
      },
      {
        question: {
          en: "What construction feature helped prevent water damage to structures?",
          es: "¿Qué característica de construcción ayudó a prevenir daños por agua a las estructuras?",
          de: "Welches Baumerkmal half, Wasserschäden an Strukturen zu verhindern?",
          nl: "Welk bouwkenmerk hielp waterschade aan structuren te voorkomen?"
        },
        options: [
          { en: "Waterproof paint", es: "Pintura impermeable", de: "Wasserdichte Farbe", nl: "Waterbestendige verf" },
          { en: "Elaborate drainage system with channels", es: "Elaborado sistema de drenaje con canales", de: "Ausgeklügeltes Entwässerungssystem mit Kanälen", nl: "Uitgebreid drainagesysteem met kanalen" },
          { en: "Plastic sheeting", es: "Láminas de plástico", de: "Plastikfolien", nl: "Plastic folie" },
          { en: "Elevated on stilts", es: "Elevado sobre pilotes", de: "Auf Stelzen erhöht", nl: "Verhoogd op palen" }
        ],
        correct: 1,
        explanation: {
          en: "Machu Picchu has an sophisticated drainage system with approximately 130 drainage channels to handle the heavy rainfall and prevent erosion and flooding.",
          es: "Machu Picchu tiene un sofisticado sistema de drenaje con aproximadamente 130 canales de drenaje para manejar las fuertes lluvias y prevenir la erosión e inundaciones.",
          de: "Machu Picchu verfügt über ein ausgeklügeltes Entwässerungssystem mit etwa 130 Entwässerungskanälen, um die starken Regenfälle zu bewältigen und Erosion und Überschwemmungen zu verhindern.",
          nl: "Machu Picchu heeft een geavanceerd drainagesysteem met ongeveer 130 drainagekanalen om de zware regenval op te vangen en erosie en overstroming te voorkomen."
        }
      },
      {
        question: {
          en: "What type of stone joints were used in the finest walls?",
          es: "¿Qué tipo de juntas de piedra se usaron en los muros más finos?",
          de: "Welche Art von Steinfugen wurden in den feinsten Mauern verwendet?",
          nl: "Welk type steenvoegen werden gebruikt in de fijnste muren?"
        },
        options: [
          { en: "Straight horizontal courses", es: "Hiladas horizontales rectas", de: "Gerade horizontale Schichten", nl: "Rechte horizontale lagen" },
          { en: "Irregular polygonal (jigsaw-like)", es: "Poligonal irregular (como rompecabezas)", de: "Unregelmäßig polygonal (puzzleartig)", nl: "Onregelmatig veelhoekig (puzzelachtig)" },
          { en: "Circular", es: "Circular", de: "Kreisförmig", nl: "Cirkelvormig" },
          { en: "Diamond pattern", es: "Patrón de diamante", de: "Rautenmuster", nl: "Ruitpatroon" }
        ],
        correct: 1,
        explanation: {
          en: "The finest walls use irregular polygonal joints where each stone has a unique shape, fitting together like a complex jigsaw puzzle for maximum stability.",
          es: "Los muros más finos usan juntas poligonales irregulares donde cada piedra tiene una forma única, encajando como un rompecabezas complejo para máxima estabilidad.",
          de: "Die feinsten Mauern verwenden unregelmäßige polygonale Fugen, bei denen jeder Stein eine einzigartige Form hat und wie ein komplexes Puzzle für maximale Stabilität zusammenpasst.",
          nl: "De fijnste muren gebruiken onregelmatige veelhoekige voegen waarbij elke steen een unieke vorm heeft en als een complexe puzzel voor maximale stabiliteit in elkaar past."
        }
      },
      {
        question: {
          en: "How thick are the walls of typical buildings?",
          es: "¿Qué grosor tienen los muros de los edificios típicos?",
          de: "Wie dick sind die Wände typischer Gebäude?",
          nl: "Hoe dik zijn de muren van typische gebouwen?"
        },
        options: [
          { en: "10-20 cm", es: "10-20 cm", de: "10-20 cm", nl: "10-20 cm" },
          { en: "40-60 cm", es: "40-60 cm", de: "40-60 cm", nl: "40-60 cm" },
          { en: "1-2 m", es: "1-2 metros", de: "1-2 Meter", nl: "1-2 meter" },
          { en: "3-4 m", es: "3-4 metros", de: "3-4 Meter", nl: "3-4 meter" }
        ],
        correct: 1,
        explanation: {
          en: "Most walls are approximately 40-60 centimeters thick, providing structural strength while efficiently using materials. Important buildings have thicker walls.",
          es: "La mayoría de los muros tienen aproximadamente 40-60 centímetros de grosor, proporcionando resistencia estructural mientras usan los materiales eficientemente. Los edificios importantes tienen muros más gruesos.",
          de: "Die meisten Wände sind etwa 40-60 Zentimeter dick und bieten strukturelle Festigkeit bei effizienter Materialnutzung. Wichtige Gebäude haben dickere Wände.",
          nl: "De meeste muren zijn ongeveer 40-60 centimeter dik, wat structurele sterkte biedt terwijl materialen efficiënt worden gebruikt. Belangrijke gebouwen hebben dikkere muren."
        }
      },
      {
        question: {
          en: "What architectural feature is used at building corners for strength?",
          es: "¿Qué característica arquitectónica se usa en las esquinas de los edificios para dar fuerza?",
          de: "Welches architektonische Merkmal wird an Gebäudeecken für Festigkeit verwendet?",
          nl: "Welk architectonisch kenmerk wordt bij gebouwhoeken gebruikt voor sterkte?"
        },
        options: [
          { en: "Metal reinforcement", es: "Refuerzo de metal", de: "Metallverstärkung", nl: "Metaalversterking" },
          { en: "L-shaped interlocking corner stones", es: "Piedras angulares entrelazadas en forma de L", de: "L-förmige ineinandergreifende Ecksteine", nl: "L-vormige in elkaar grijpende hoekstenen" },
          { en: "Wooden beams", es: "Vigas de madera", de: "Holzbalken", nl: "Houten balken" },
          { en: "Concrete columns", es: "Columnas de concreto", de: "Betonsäulen", nl: "Betonnen kolommen" }
        ],
        correct: 1,
        explanation: {
          en: "Corners use specially shaped L-shaped stones that interlock with walls on both sides, providing exceptional strength and earthquake resistance at these critical junctures.",
          es: "Las esquinas usan piedras especialmente formadas en forma de L que se entrelazan con los muros en ambos lados, proporcionando resistencia excepcional y resistencia a terremotos en estos puntos críticos.",
          de: "Ecken verwenden speziell geformte L-förmige Steine, die mit Wänden auf beiden Seiten verzahnt sind und außergewöhnliche Festigkeit und Erdbebenfestigkeit an diesen kritischen Knotenpunkten bieten.",
          nl: "Hoeken gebruiken speciaal gevormde L-vormige stenen die met muren aan beide zijden in elkaar grijpen, wat uitzonderlijke sterkte en aardbevingsbestendigheid biedt op deze kritieke punten."
        }
      },
      {
        question: {
          en: "What evidence suggests different social classes lived in separate areas?",
          es: "¿Qué evidencia sugiere que diferentes clases sociales vivían en áreas separadas?",
          de: "Welche Beweise deuten darauf hin, dass verschiedene Sozialklassen in getrennten Bereichen lebten?",
          nl: "Welk bewijs suggereert dat verschillende sociale klassen in aparte gebieden woonden?"
        },
        options: [
          { en: "Written records", es: "Registros escritos", de: "Schriftliche Aufzeichnungen", nl: "Geschreven archieven" },
          { en: "Varying quality of stonework in different sectors", es: "Calidad variable del trabajo en piedra en diferentes sectores", de: "Unterschiedliche Qualität der Steinarbeit in verschiedenen Sektoren", nl: "Variërende kwaliteit van steenwerk in verschillende sectoren" },
          { en: "Paint colors", es: "Colores de pintura", de: "Farben", nl: "Verfkleuren" },
          { en: "Metal gates", es: "Portones de metal", de: "Metalltore", nl: "Metalen poorten" }
        ],
        correct: 1,
        explanation: {
          en: "The quality of stonework varies significantly across sectors: elite areas have finely fitted ashlar masonry, while servant quarters have rougher fieldstone construction.",
          es: "La calidad del trabajo en piedra varía significativamente entre sectores: las áreas de élite tienen mampostería de sillar finamente ajustada, mientras que los cuartos de sirvientes tienen construcción más tosca de piedra de campo.",
          de: "Die Qualität der Steinarbeit variiert erheblich zwischen den Sektoren: Elitebereiche haben fein gearbeitetes Quadermauerwerk, während Dienerquartiere gröbere Feldsteinbauweise aufweisen.",
          nl: "De kwaliteit van het steenwerk varieert aanzienlijk tussen sectoren: elite-gebieden hebben fijn passend ashlar metselwerk, terwijl bediendenkwartieren ruwere veldsteenconstructie hebben."
        }
      },
      {
        question: {
          en: "How were windows and niches typically shaped?",
          es: "¿Cómo se formaban típicamente las ventanas y nichos?",
          de: "Wie wurden Fenster und Nischen typischerweise geformt?",
          nl: "Hoe werden ramen en nissen typisch gevormd?"
        },
        options: [
          { en: "Square", es: "Cuadradas", de: "Quadratisch", nl: "Vierkant" },
          { en: "Circular", es: "Circulares", de: "Kreisförmig", nl: "Rond" },
          { en: "Trapezoid", es: "Trapezoidales", de: "Trapezförmig", nl: "Trapezoïdaal" },
          { en: "Triangular", es: "Triangulares", de: "Dreieckig", nl: "Driehoekig" }
        ],
        correct: 2,
        explanation: {
          en: "Like doorways, windows and interior niches were trapezoid-shaped (wider at bottom) for structural stability and are a distinctive feature of Inca architecture.",
          es: "Como las puertas, las ventanas y nichos interiores tenían forma de trapezoide (más anchos abajo) para estabilidad estructural y son una característica distintiva de la arquitectura inca.",
          de: "Wie Türen waren Fenster und Innennischen trapezförmig (unten breiter) für strukturelle Stabilität und sind ein charakteristisches Merkmal der Inka-Architektur.",
          nl: "Net als deuropeningen waren ramen en binnennis sen trapezoïdaal van vorm (breder onderaan) voor structurele stabiliteit en zijn een kenmerkend kenmerk van Inca-architectuur."
        }
      },
      {
        question: {
          en: "What was the typical height of residential buildings?",
          es: "¿Cuál era la altura típica de los edificios residenciales?",
          de: "Was war die typische Höhe von Wohngebäuden?",
          nl: "Wat was de typische hoogte van woongebouwen?"
        },
        options: [
          { en: "One story (single level)", es: "Un piso (nivel único)", de: "Einstöckig (eine Ebene)", nl: "Eén verdieping (enkel niveau)" },
          { en: "Two stories", es: "Dos pisos", de: "Zweistöckig", nl: "Twee verdiepingen" },
          { en: "Three stories", es: "Tres pisos", de: "Dreistöckig", nl: "Drie verdiepingen" },
          { en: "Four or more stories", es: "Cuatro o más pisos", de: "Vier oder mehr Stockwerke", nl: "Vier of meer verdiepingen" }
        ],
        correct: 0,
        explanation: {
          en: "Almost all buildings at Machu Picchu were single-story structures. The stone walls supported thatched roofs, and the steep terrain made multi-story construction impractical.",
          es: "Casi todos los edificios en Machu Picchu eran estructuras de un solo piso. Los muros de piedra sostenían techos de paja, y el terreno empinado hacía la construcción de múltiples pisos poco práctica.",
          de: "Fast alle Gebäude in Machu Picchu waren einstöckige Strukturen. Die Steinmauern trugen Strohdächer, und das steile Gelände machte mehrstöckige Bauweise unpraktisch.",
          nl: "Bijna alle gebouwen in Machu Picchu waren enkelverdiepingsstructuren. De stenen muren droegen rieten daken, en het steile terrein maakte bouw met meerdere verdiepingen onpraktisch."
        }
      },
      {
        question: {
          en: "What is distinctive about the plaza areas?",
          es: "¿Qué es distintivo sobre las áreas de plaza?",
          de: "Was ist an den Platzbereichen charakteristisch?",
          nl: "Wat is kenmerkend aan de pleingebieden?"
        },
        options: [
          { en: "They have fountains", es: "Tienen fuentes", de: "Sie haben Brunnen", nl: "Ze hebben fonteinen" },
          { en: "They are flat open spaces between sectors", es: "Son espacios abiertos planos entre sectores", de: "Sie sind flache offene Räume zwischen Sektoren", nl: "Het zijn vlakke open ruimtes tussen sectoren" },
          { en: "They have golden statues", es: "Tienen estatuas doradas", de: "Sie haben goldene Statuen", nl: "Ze hebben gouden beelden" },
          { en: "They are underground", es: "Están bajo tierra", de: "Sie sind unterirdisch", nl: "Ze zijn ondergronds" }
        ],
        correct: 1,
        explanation: {
          en: "The plazas are carefully leveled open spaces that served as gathering areas and separated different functional sectors, providing ceremonial and social spaces.",
          es: "Las plazas son espacios abiertos cuidadosamente nivelados que servían como áreas de reunión y separaban diferentes sectores funcionales, proporcionando espacios ceremoniales y sociales.",
          de: "Die Plätze sind sorgfältig eingeebnete offene Räume, die als Versammlungsbereiche dienten und verschiedene funktionale Sektoren trennten und zeremonielle und soziale Räume boten.",
          nl: "De pleinen zijn zorgvuldig genivelleerde open ruimtes die dienden als ontmoetingsgebieden en verschillende functionele sectoren scheidden, waarmee ceremoniële en sociale ruimtes werden geboden."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();