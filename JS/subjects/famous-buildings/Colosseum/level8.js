// Quiz Template - Level 8: Famous buildings - Colosseum
(function() {
  const level8 = {
    name: {
      en: "Colosseum - Engineering & Comparisons",
      es: "Coliseo - Ingeniería y Comparaciones",
      de: "Kolosseum - Technik und Vergleiche",
      nl: "Colosseum - Engineering en Vergelijkingen"
    },
    questions: [
      {
        question: {
          en: "What innovative building technique was used to construct the Colosseum's foundation?",
          es: "¿Qué técnica de construcción innovadora se utilizó para construir la fundación del Coliseo?",
          de: "Welche innovative Bautechnik wurde für das Fundament des Kolosseums verwendet?",
          nl: "Welke innovatieve bouwtechniek werd gebruikt om de fundering van het Colosseum te construeren?"
        },
        options: [
          { en: "Wooden pilings driven into marshy ground", es: "Pilotes de madera clavados en terreno pantanoso", de: "Holzpfähle in sumpfigem Boden", nl: "Houten heipalen in moerassige grond" },
          { en: "Floating concrete platform", es: "Plataforma flotante de hormigón", de: "Schwimmende Betonplattform", nl: "Drijvend betonplatform" },
          { en: "Deep stone pillars to bedrock", es: "Pilares de piedra profundos hasta el lecho rocoso", de: "Tiefe Steinsäulen bis zum Grundgestein", nl: "Diepe stenen pijlers tot op de rots" },
          { en: "Compacted earth and gravel", es: "Tierra compactada y grava", de: "Verdichtete Erde und Kies", nl: "Verdichte aarde en grind" }
        ],
        correct: 0,
        explanation: {
          en: "The Colosseum was built on the site of Nero's artificial lake, which left marshy, unstable ground. Engineers drove wooden pilings deep into the earth and topped them with a foundation of concrete and stone. This technique was crucial for supporting the massive weight of the structure on unstable soil.",
          es: "El Coliseo fue construido en el sitio del lago artificial de Nerón, que dejó terreno pantanoso e inestable. Los ingenieros clavaron pilotes de madera profundamente en la tierra y los cubrieron con una fundación de hormigón y piedra. Esta técnica fue crucial para soportar el peso masivo de la estructura en suelo inestable.",
          de: "Das Kolosseum wurde auf dem Gelände von Neros künstlichem See gebaut, das sumpfigen, instabilen Boden hinterließ. Ingenieure trieben Holzpfähle tief in die Erde und bedeckten sie mit einem Fundament aus Beton und Stein. Diese Technik war entscheidend, um das massive Gewicht der Struktur auf instabilem Boden zu tragen.",
          nl: "Het Colosseum werd gebouwd op de locatie van Nero's kunstmatige meer, wat moerassige, onstabiele grond achterliet. Ingenieurs dreven houten heipalen diep in de aarde en bedekten ze met een fundering van beton en steen. Deze techniek was cruciaal voor het dragen van het enorme gewicht van de structuur op onstabiele grond."
        }
      },
      {
        question: {
          en: "How does the Colosseum's seating capacity compare to the Circus Maximus?",
          es: "¿Cómo se compara la capacidad de asientos del Coliseo con el Circo Máximo?",
          de: "Wie vergleicht sich die Sitzplatzkapazität des Kolosseums mit dem Circus Maximus?",
          nl: "Hoe verhoudt de zitcapaciteit van het Colosseum zich tot het Circus Maximus?"
        },
        options: [
          { en: "The Colosseum held more spectators", es: "El Coliseo tenía más espectadores", de: "Das Kolosseum fasste mehr Zuschauer", nl: "Het Colosseum had meer toeschouwers" },
          { en: "They had equal capacity", es: "Tenían igual capacidad", de: "Sie hatten gleiche Kapazität", nl: "Ze hadden gelijke capaciteit" },
          { en: "The Circus Maximus held about twice as many", es: "El Circo Máximo tenía aproximadamente el doble", de: "Der Circus Maximus fasste etwa doppelt so viele", nl: "Het Circus Maximus had ongeveer twee keer zoveel" },
          { en: "The Circus Maximus held about three times as many", es: "El Circo Máximo tenía aproximadamente el triple", de: "Der Circus Maximus fasste etwa dreimal so viele", nl: "Het Circus Maximus had ongeveer drie keer zoveel" }
        ],
        correct: 3,
        explanation: {
          en: "While the Colosseum could hold 50,000-80,000 spectators, the Circus Maximus was much larger, accommodating approximately 150,000-250,000 spectators at its peak. The Circus Maximus was Rome's largest entertainment venue, used primarily for chariot racing.",
          es: "Mientras que el Coliseo podía albergar 50,000-80,000 espectadores, el Circo Máximo era mucho más grande, acomodando aproximadamente 150,000-250,000 espectadores en su apogeo. El Circo Máximo era el mayor lugar de entretenimiento de Roma, utilizado principalmente para carreras de carros.",
          de: "Während das Kolosseum 50.000-80.000 Zuschauer fassen konnte, war der Circus Maximus viel größer und bot auf seinem Höhepunkt etwa 150.000-250.000 Zuschauern Platz. Der Circus Maximus war Roms größter Unterhaltungsort, der hauptsächlich für Wagenrennen genutzt wurde.",
          nl: "Terwijl het Colosseum 50.000-80.000 toeschouwers kon herbergen, was het Circus Maximus veel groter en bood het op zijn hoogtepunt ongeveer 150.000-250.000 toeschouwers plaats. Het Circus Maximus was Rome's grootste entertainmentlocatie, voornamelijk gebruikt voor wagenraces."
        }
      },
      {
        question: {
          en: "What structural system enabled the Colosseum's exterior facade?",
          es: "¿Qué sistema estructural permitió la fachada exterior del Coliseo?",
          de: "Welches Struktursystem ermöglichte die Außenfassade des Kolosseums?",
          nl: "Welk structureel systeem maakte de buitengevel van het Colosseum mogelijk?"
        },
        options: [
          { en: "Post and lintel system", es: "Sistema de poste y dintel", de: "Pfosten-und-Sturz-System", nl: "Posten en lateelsysteem" },
          { en: "Radial walls with barrel vaults", es: "Muros radiales con bóvedas de cañón", de: "Radiale Wände mit Tonnengewölben", nl: "Radiale muren met tongewelven" },
          { en: "Flying buttresses", es: "Arbotantes", de: "Strebepfeiler", nl: "Luchtbogen" },
          { en: "Suspension cables", es: "Cables de suspensión", de: "Aufhängungsseile", nl: "Ophangkabels" }
        ],
        correct: 1,
        explanation: {
          en: "The Colosseum utilized a sophisticated system of radial walls connected by barrel vaults and groin vaults. This created a stable framework that distributed weight efficiently while allowing for the open arcade design of the exterior. The system of 80 radial walls acted like spokes of a wheel, providing exceptional structural integrity.",
          es: "El Coliseo utilizó un sofisticado sistema de muros radiales conectados por bóvedas de cañón y bóvedas de arista. Esto creó un marco estable que distribuyó el peso eficientemente mientras permitía el diseño de arcada abierta del exterior. El sistema de 80 muros radiales actuaba como radios de una rueda, proporcionando una integridad estructural excepcional.",
          de: "Das Kolosseum verwendete ein ausgeklügeltes System radialer Wände, die durch Tonnengewölbe und Kreuzgewölbe verbunden waren. Dies schuf einen stabilen Rahmen, der das Gewicht effizient verteilte und gleichzeitig das offene Arkadendesign des Äußeren ermöglichte. Das System von 80 radialen Wänden wirkte wie Speichen eines Rades und bot außergewöhnliche strukturelle Integrität.",
          nl: "Het Colosseum gebruikte een verfijnd systeem van radiale muren verbonden door tongewelven en kruisgewelven. Dit creëerde een stabiel raamwerk dat het gewicht efficiënt verdeelde terwijl het het open arcadeontwerp van de buitenkant mogelijk maakte. Het systeem van 80 radiale muren werkte als spaken van een wiel en bood uitzonderlijke structurele integriteit."
        }
      },
      {
        question: {
          en: "What percentage of the Colosseum's original structure remains today?",
          es: "¿Qué porcentaje de la estructura original del Coliseo permanece hoy?",
          de: "Wie viel Prozent der ursprünglichen Struktur des Kolosseums existiert heute noch?",
          nl: "Welk percentage van de oorspronkelijke structuur van het Colosseum blijft vandaag over?"
        },
        options: [
          { en: "Approximately one-quarter", es: "Aproximadamente un cuarto", de: "Etwa ein Viertel", nl: "Ongeveer een kwart" },
          { en: "Approximately one-third", es: "Aproximadamente un tercio", de: "Etwa ein Drittel", nl: "Ongeveer een derde" },
          { en: "Approximately one-half", es: "Aproximadamente la mitad", de: "Etwa die Hälfte", nl: "Ongeveer de helft" },
          { en: "Approximately three-quarters", es: "Aproximadamente tres cuartos", de: "Etwa drei Viertel", nl: "Ongeveer driekwart" }
        ],
        correct: 1,
        explanation: {
          en: "Approximately one-third of the original Colosseum remains today. The structure has lost about two-thirds of its original mass due to earthquakes, fires, stone-robbing, and general deterioration over nearly 2,000 years. The southern external facade collapsed entirely in the 1349 earthquake.",
          es: "Aproximadamente un tercio del Coliseo original permanece hoy. La estructura ha perdido alrededor de dos tercios de su masa original debido a terremotos, incendios, robo de piedra y deterioro general durante casi 2,000 años. La fachada externa sur se derrumbó por completo en el terremoto de 1349.",
          de: "Etwa ein Drittel des ursprünglichen Kolosseums existiert heute noch. Die Struktur hat etwa zwei Drittel ihrer ursprünglichen Masse durch Erdbeben, Brände, Steinraub und allgemeinen Verfall über fast 2.000 Jahre verloren. Die südliche Außenfassade stürzte beim Erdbeben von 1349 vollständig ein.",
          nl: "Ongeveer een derde van het oorspronkelijke Colosseum blijft vandaag over. De structuur heeft ongeveer tweederde van zijn oorspronkelijke massa verloren door aardbevingen, branden, steendiefstal en algemeen verval over bijna 2.000 jaar. De zuidelijke buitengevel stortte volledig in tijdens de aardbeving van 1349."
        }
      },
      {
        question: {
          en: "How did the Colosseum's construction techniques differ from earlier Greek amphitheaters?",
          es: "¿En qué diferían las técnicas de construcción del Coliseo de los anfiteatros griegos anteriores?",
          de: "Wie unterschieden sich die Bautechniken des Kolosseums von früheren griechischen Amphitheatern?",
          nl: "Hoe verschilden de bouwtechnieken van het Colosseum van eerdere Griekse amfitheaters?"
        },
        options: [
          { en: "Greeks built in wood, Romans in stone", es: "Los griegos construían en madera, los romanos en piedra", de: "Griechen bauten aus Holz, Römer aus Stein", nl: "Grieken bouwden in hout, Romeinen in steen" },
          { en: "Greeks carved into hillsides, Romans built free-standing structures", es: "Los griegos excavaban en laderas, los romanos construían estructuras independientes", de: "Griechen gruben in Hänge, Römer bauten freistehende Strukturen", nl: "Grieken groeven in heuvels, Romeinen bouwden vrijstaande structuren" },
          { en: "Greeks used arches, Romans used columns", es: "Los griegos usaban arcos, los romanos columnas", de: "Griechen verwendeten Bögen, Römer Säulen", nl: "Grieken gebruikten bogen, Romeinen zuilen" },
          { en: "There were no significant differences", es: "No hubo diferencias significativas", de: "Es gab keine wesentlichen Unterschiede", nl: "Er waren geen significante verschillen" }
        ],
        correct: 1,
        explanation: {
          en: "Greek theaters were typically carved into natural hillsides, using the slope for seating. The Colosseum represents Roman innovation: a completely free-standing structure built on level ground using concrete, vaults, and arches. This allowed Romans to build entertainment venues anywhere, not just where suitable hills existed.",
          es: "Los teatros griegos típicamente se excavaban en laderas naturales, usando la pendiente para asientos. El Coliseo representa la innovación romana: una estructura completamente independiente construida en terreno nivelado usando hormigón, bóvedas y arcos. Esto permitió a los romanos construir lugares de entretenimiento en cualquier lugar, no solo donde existían colinas adecuadas.",
          de: "Griechische Theater wurden typischerweise in natürliche Hänge gehauen, wobei die Neigung für Sitzplätze genutzt wurde. Das Kolosseum repräsentiert römische Innovation: eine vollständig freistehende Struktur, die auf ebenem Boden mit Beton, Gewölben und Bögen gebaut wurde. Dies ermöglichte es Römern, Unterhaltungsorte überall zu bauen, nicht nur wo geeignete Hügel existierten.",
          nl: "Griekse theaters werden typisch uitgehouwen in natuurlijke heuvels, waarbij de helling voor zitplaatsen werd gebruikt. Het Colosseum vertegenwoordigt Romeinse innovatie: een volledig vrijstaande structuur gebouwd op vlakke grond met gebruik van beton, gewelven en bogen. Dit stelde Romeinen in staat entertainmentlocaties overal te bouwen, niet alleen waar geschikte heuvels bestonden."
        }
      },
      {
        question: {
          en: "What engineering feature allowed the Colosseum to be evacuated quickly?",
          es: "¿Qué característica de ingeniería permitió que el Coliseo se evacuara rápidamente?",
          de: "Welches ingenieurtechnische Merkmal ermöglichte die schnelle Evakuierung des Kolosseums?",
          nl: "Welk technisch kenmerk maakte snelle evacuatie van het Colosseum mogelijk?"
        },
        options: [
          { en: "Single wide exit", es: "Salida única ancha", de: "Einzelner breiter Ausgang", nl: "Enkele brede uitgang" },
          { en: "Network of numbered staircases and vomitoria", es: "Red de escaleras numeradas y vomitorios", de: "Netzwerk nummerierter Treppen und Vomitorien", nl: "Netwerk van genummerde trappen en vomitoria" },
          { en: "Underground escape tunnels", es: "Túneles de escape subterráneos", de: "Unterirdische Fluchttunnel", nl: "Ondergrondse ontsnappingstunnels" },
          { en: "Rope ladders from upper levels", es: "Escalas de cuerda desde niveles superiores", de: "Seilleitern von oberen Ebenen", nl: "Touwladders vanaf hogere niveaus" }
        ],
        correct: 1,
        explanation: {
          en: "The Colosseum featured 80 numbered entrances (vomitoria) connected to an elaborate system of staircases and corridors. Each entrance served specific seating sections, allowing spectators to quickly find their seats and exit. This brilliant crowd-management system could evacuate all 50,000-80,000 spectators in just a few minutes.",
          es: "El Coliseo contaba con 80 entradas numeradas (vomitorios) conectadas a un elaborado sistema de escaleras y corredores. Cada entrada servía a secciones de asientos específicas, permitiendo a los espectadores encontrar rápidamente sus asientos y salir. Este brillante sistema de gestión de multitudes podía evacuar a los 50,000-80,000 espectadores en solo unos minutos.",
          de: "Das Kolosseum verfügte über 80 nummerierte Eingänge (Vomitorien), die mit einem ausgeklügelten System von Treppen und Korridoren verbunden waren. Jeder Eingang bediente bestimmte Sitzbereiche, sodass Zuschauer schnell ihre Plätze finden und verlassen konnten. Dieses brillante Crowd-Management-System konnte alle 50.000-80.000 Zuschauer in nur wenigen Minuten evakuieren.",
          nl: "Het Colosseum had 80 genummerde ingangen (vomitoria) verbonden met een uitgebreid systeem van trappen en gangen. Elke ingang diende specifieke zitsecties, waardoor toeschouwers snel hun plaatsen konden vinden en verlaten. Dit briljante mensenmassabeheersysteem kon alle 50.000-80.000 toeschouwers in slechts enkele minuten evacueren."
        }
      },
      {
        question: {
          en: "Which ancient Roman amphitheater is older than the Colosseum?",
          es: "¿Qué anfiteatro romano antiguo es más antiguo que el Coliseo?",
          de: "Welches antike römische Amphitheater ist älter als das Kolosseum?",
          nl: "Welk oud Romeins amfitheater is ouder dan het Colosseum?"
        },
        options: [
          { en: "Arena of Verona", es: "Arena de Verona", de: "Arena von Verona", nl: "Arena van Verona" },
          { en: "Amphitheater of Pompeii", es: "Anfiteatro de Pompeya", de: "Amphitheater von Pompeji", nl: "Amfitheater van Pompeii" },
          { en: "Amphitheater of Nimes", es: "Anfiteatro de Nîmes", de: "Amphitheater von Nîmes", nl: "Amfitheater van Nîmes" },
          { en: "Amphitheater of El Djem", es: "Anfiteatro de El Djem", de: "Amphitheater von El Djem", nl: "Amfitheater van El Djem" }
        ],
        correct: 1,
        explanation: {
          en: "The Amphitheater of Pompeii, built around 70 BC, is one of the oldest surviving Roman stone amphitheaters, constructed about 150 years before the Colosseum. It could hold about 20,000 spectators. It's also one of the best-preserved due to being buried and protected by the eruption of Mount Vesuvius in 79 AD.",
          es: "El Anfiteatro de Pompeya, construido alrededor del 70 a.C., es uno de los anfiteatros de piedra romanos más antiguos que sobreviven, construido unos 150 años antes del Coliseo. Podía albergar unos 20,000 espectadores. También es uno de los mejor conservados debido a que fue enterrado y protegido por la erupción del Monte Vesubio en 79 d.C.",
          de: "Das Amphitheater von Pompeji, gebaut um 70 v.Chr., ist eines der ältesten erhaltenen römischen Steinamphitheater, etwa 150 Jahre vor dem Kolosseum erbaut. Es konnte etwa 20.000 Zuschauer fassen. Es ist auch eines der besterhaltenen, da es durch den Ausbruch des Vesuvs im Jahr 79 n.Chr. begraben und geschützt wurde.",
          nl: "Het Amfitheater van Pompeii, gebouwd rond 70 v.Chr., is een van de oudste overgebleven Romeinse stenen amfitheaters, ongeveer 150 jaar voor het Colosseum gebouwd. Het kon ongeveer 20.000 toeschouwers herbergen. Het is ook een van de best bewaarde omdat het werd begraven en beschermd door de uitbarsting van de Vesuvius in 79 na Chr."
        }
      },
      {
        question: {
          en: "What load-bearing innovation did Roman engineers use in the Colosseum's construction?",
          es: "¿Qué innovación de carga utilizaron los ingenieros romanos en la construcción del Coliseo?",
          de: "Welche lasttragende Innovation nutzten römische Ingenieure beim Bau des Kolosseums?",
          nl: "Welke dragende innovatie gebruikten Romeinse ingenieurs bij de bouw van het Colosseum?"
        },
        options: [
          { en: "Steel reinforcement bars", es: "Barras de refuerzo de acero", de: "Stahlbewehrungsstäbe", nl: "Stalen wapeningsstaven" },
          { en: "Concrete with volcanic ash (pozzolana)", es: "Hormigón con ceniza volcánica (pozzolana)", de: "Beton mit Vulkanasche (Puzzolan)", nl: "Beton met vulkanische as (puzzolaan)" },
          { en: "Laminated timber beams", es: "Vigas de madera laminada", de: "Laminierte Holzbalken", nl: "Gelamineerde houten balken" },
          { en: "Prestressed concrete", es: "Hormigón pretensado", de: "Spannbeton", nl: "Voorgespannen beton" }
        ],
        correct: 1,
        explanation: {
          en: "Romans used concrete made with volcanic ash (pozzolana) from the region around Mount Vesuvius. This created an incredibly strong and durable concrete that could set underwater and improved with age. This Roman concrete (opus caementicium) was crucial for building the Colosseum's massive vaults and structural elements.",
          es: "Los romanos usaron hormigón hecho con ceniza volcánica (pozzolana) de la región alrededor del Monte Vesubio. Esto creó un hormigón increíblemente fuerte y duradero que podía fraguar bajo el agua y mejoraba con la edad. Este hormigón romano (opus caementicium) fue crucial para construir las bóvedas masivas y elementos estructurales del Coliseo.",
          de: "Die Römer verwendeten Beton aus Vulkanasche (Puzzolan) aus der Region um den Vesuv. Dies schuf einen unglaublich starken und langlebigen Beton, der unter Wasser abbinden konnte und sich mit dem Alter verbesserte. Dieser römische Beton (Opus caementicium) war entscheidend für den Bau der massiven Gewölbe und strukturellen Elemente des Kolosseums.",
          nl: "Romeinen gebruikten beton gemaakt van vulkanische as (puzzolaan) uit de regio rond de Vesuvius. Dit creëerde een ongelooflijk sterk en duurzaam beton dat onder water kon uitharden en met de tijd verbeterde. Dit Romeinse beton (opus caementicium) was cruciaal voor het bouwen van de enorme gewelven en structurele elementen van het Colosseum."
        }
      },
      {
        question: {
          en: "How many types of marble were originally used to decorate the Colosseum's interior?",
          es: "¿Cuántos tipos de mármol se usaron originalmente para decorar el interior del Coliseo?",
          de: "Wie viele Marmorsorten wurden ursprünglich zur Dekoration des Inneren des Kolosseums verwendet?",
          nl: "Hoeveel soorten marmer werden oorspronkelijk gebruikt om het interieur van het Colosseum te decoreren?"
        },
        options: [
          { en: "Only white Carrara marble", es: "Solo mármol blanco de Carrara", de: "Nur weißer Carrara-Marmor", nl: "Alleen wit Carrara marmer" },
          { en: "Two types", es: "Dos tipos", de: "Zwei Arten", nl: "Twee soorten" },
          { en: "Multiple colored marbles from across the empire", es: "Múltiples mármoles de colores de todo el imperio", de: "Mehrere farbige Marmorsorten aus dem ganzen Reich", nl: "Meerdere gekleurde marmers uit het hele rijk" },
          { en: "No marble was used", es: "No se usó mármol", de: "Es wurde kein Marmor verwendet", nl: "Er werd geen marmer gebruikt" }
        ],
        correct: 2,
        explanation: {
          en: "The Colosseum was decorated with multiple types of colored marble from throughout the Roman Empire, including white marble from Luna (Carrara), yellow marble from Numidia, purple porphyry from Egypt, and green marble from Greece. This display of imperial wealth and power showcased Rome's far-reaching control. Most of this decorative marble was later removed and reused.",
          es: "El Coliseo fue decorado con múltiples tipos de mármol de colores de todo el Imperio Romano, incluyendo mármol blanco de Luna (Carrara), mármol amarillo de Numidia, pórfido púrpura de Egipto y mármol verde de Grecia. Esta exhibición de riqueza y poder imperial mostraba el control de largo alcance de Roma. La mayoría de este mármol decorativo fue posteriormente removido y reutilizado.",
          de: "Das Kolosseum wurde mit mehreren Arten farbigen Marmors aus dem gesamten Römischen Reich dekoriert, darunter weißer Marmor aus Luna (Carrara), gelber Marmor aus Numidien, violetter Porphyr aus Ägypten und grüner Marmor aus Griechenland. Diese Darstellung kaiserlichen Reichtums und Macht zeigte Roms weitreichende Kontrolle. Der meiste dekorative Marmor wurde später entfernt und wiederverwendet.",
          nl: "Het Colosseum was versierd met meerdere soorten gekleurd marmer uit het hele Romeinse Rijk, waaronder wit marmer uit Luna (Carrara), geel marmer uit Numidië, paars porfier uit Egypte en groen marmer uit Griekenland. Deze vertoning van keizerlijke rijkdom en macht toonde Rome's verstrekkende controle. Het meeste decoratieve marmer werd later verwijderd en hergebruikt."
        }
      },
      {
        question: {
          en: "What was unique about the Colosseum's radial wall system?",
          es: "¿Qué era único sobre el sistema de muros radiales del Coliseo?",
          de: "Was war einzigartig am radialen Wandsystem des Kolosseums?",
          nl: "Wat was uniek aan het radiale muursysteem van het Colosseum?"
        },
        options: [
          { en: "It was purely decorative", es: "Era puramente decorativo", de: "Es war rein dekorativ", nl: "Het was puur decoratief" },
          { en: "It created 80 wedge-shaped sections distributing weight evenly", es: "Creó 80 secciones en forma de cuña distribuyendo el peso uniformemente", de: "Es schuf 80 keilförmige Abschnitte, die das Gewicht gleichmäßig verteilten", nl: "Het creëerde 80 wigvormige secties die het gewicht gelijkmatig verdeelden" },
          { en: "It was filled with water for naval battles", es: "Se llenaba de agua para batallas navales", de: "Es wurde für Seeschlachten mit Wasser gefüllt", nl: "Het werd gevuld met water voor zeeslagen" },
          { en: "It served as living quarters for gladiators", es: "Servía como alojamiento para gladiadores", de: "Es diente als Unterkunft für Gladiatoren", nl: "Het diende als verblijf voor gladiatoren" }
        ],
        correct: 1,
        explanation: {
          en: "The Colosseum's 80 radial walls created wedge-shaped sections (like pie slices) that distributed the enormous weight of the structure evenly to the foundation. This system, combined with the concentric ring of exterior walls, created exceptional structural stability. Each radial wall corresponded to one of the 80 entrance arches, creating an efficient organizational system.",
          es: "Los 80 muros radiales del Coliseo crearon secciones en forma de cuña (como rebanadas de pastel) que distribuyeron el enorme peso de la estructura uniformemente a la fundación. Este sistema, combinado con el anillo concéntrico de muros exteriores, creó una estabilidad estructural excepcional. Cada muro radial correspondía a uno de los 80 arcos de entrada, creando un sistema organizativo eficiente.",
          de: "Die 80 radialen Wände des Kolosseums schufen keilförmige Abschnitte (wie Kuchenstücke), die das enorme Gewicht der Struktur gleichmäßig auf das Fundament verteilten. Dieses System, kombiniert mit dem konzentrischen Ring der Außenwände, schuf außergewöhnliche strukturelle Stabilität. Jede radiale Wand entsprach einem der 80 Eingangsbögen und schuf ein effizientes Organisationssystem.",
          nl: "De 80 radiale muren van het Colosseum creëerden wigvormige secties (zoals taartpunten) die het enorme gewicht van de structuur gelijkmatig naar de fundering verdeelden. Dit systeem, gecombineerd met de concentrische ring van buitenmuren, creëerde uitzonderlijke structurele stabiliteit. Elke radiale muur kwam overeen met een van de 80 ingangsbogen, waardoor een efficiënt organisatiesysteem ontstond."
        }
      },
      {
        question: {
          en: "How does the Colosseum compare in size to the Amphitheater of El Djem in Tunisia?",
          es: "¿Cómo se compara el Coliseo en tamaño con el Anfiteatro de El Djem en Túnez?",
          de: "Wie vergleicht sich das Kolosseum in der Größe mit dem Amphitheater von El Djem in Tunesien?",
          nl: "Hoe vergelijkt het Colosseum in grootte met het Amfitheater van El Djem in Tunesië?"
        },
        options: [
          { en: "The Colosseum is much larger", es: "El Coliseo es mucho más grande", de: "Das Kolosseum ist viel größer", nl: "Het Colosseum is veel groter" },
          { en: "They are approximately the same size", es: "Son aproximadamente del mismo tamaño", de: "Sie sind ungefähr gleich groß", nl: "Ze zijn ongeveer even groot" },
          { en: "El Djem is slightly larger", es: "El Djem es ligeramente más grande", de: "El Djem ist etwas größer", nl: "El Djem is iets groter" },
          { en: "El Djem is twice as large", es: "El Djem es el doble de grande", de: "El Djem ist doppelt so groß", nl: "El Djem is twee keer zo groot" }
        ],
        correct: 0,
        explanation: {
          en: "The Colosseum is significantly larger than the Amphitheater of El Djem. While the Colosseum could hold 50,000-80,000 spectators, El Djem held about 35,000. However, El Djem is remarkably well-preserved and is the third-largest Roman amphitheater in the world, built around 238 AD. It demonstrates the spread of Roman architectural techniques throughout the empire.",
          es: "El Coliseo es significativamente más grande que el Anfiteatro de El Djem. Mientras que el Coliseo podía albergar 50,000-80,000 espectadores, El Djem albergaba unos 35,000. Sin embargo, El Djem está notablemente bien conservado y es el tercer anfiteatro romano más grande del mundo, construido alrededor del 238 d.C. Demuestra la difusión de las técnicas arquitectónicas romanas por todo el imperio.",
          de: "Das Kolosseum ist deutlich größer als das Amphitheater von El Djem. Während das Kolosseum 50.000-80.000 Zuschauer fassen konnte, bot El Djem etwa 35.000 Platz. El Djem ist jedoch bemerkenswert gut erhalten und das drittgrößte römische Amphitheater der Welt, gebaut um 238 n.Chr. Es demonstriert die Verbreitung römischer Architekturtechniken im gesamten Reich.",
          nl: "Het Colosseum is aanzienlijk groter dan het Amfitheater van El Djem. Terwijl het Colosseum 50.000-80.000 toeschouwers kon herbergen, bood El Djem plaats aan ongeveer 35.000. El Djem is echter opmerkelijk goed bewaard gebleven en is het op twee na grootste Romeinse amfitheater ter wereld, gebouwd rond 238 na Chr. Het toont de verspreiding van Romeinse architectonische technieken door het hele rijk."
        }
      },
      {
        question: {
          en: "What mechanical system was used to operate the hypogeum's elevators?",
          es: "¿Qué sistema mecánico se utilizó para operar los elevadores del hipogeo?",
          de: "Welches mechanische System wurde verwendet, um die Aufzüge des Hypogeums zu betreiben?",
          nl: "Welk mechanisch systeem werd gebruikt om de liften van het hypogeum te bedienen?"
        },
        options: [
          { en: "Water-powered hydraulics", es: "Hidráulica impulsada por agua", de: "Wasserangetriebene Hydraulik", nl: "Door water aangedreven hydrauliek" },
          { en: "Counterweights and pulleys operated by slaves", es: "Contrapesos y poleas operadas por esclavos", de: "Gegengewichte und Flaschenzüge von Sklaven bedient", nl: "Contragewichten en katrollen bediend door slaven" },
          { en: "Steam-powered engines", es: "Motores de vapor", de: "Dampfbetriebene Motoren", nl: "Door stoom aangedreven motoren" },
          { en: "Animal-powered treadmills", es: "Ruedas de andar impulsadas por animales", de: "Tiergetriebene Laufräder", nl: "Door dieren aangedreven loopmolens" }
        ],
        correct: 1,
        explanation: {
          en: "The hypogeum's approximately 28 elevators were operated by a sophisticated system of counterweights, pulleys, and ropes, manually powered by slaves and workers stationed in the underground chambers. The counterweight system allowed relatively easy lifting of heavy animals and scenery. Modern reconstructions have demonstrated this system's effectiveness.",
          es: "Los aproximadamente 28 elevadores del hipogeo eran operados por un sofisticado sistema de contrapesos, poleas y cuerdas, impulsados manualmente por esclavos y trabajadores estacionados en las cámaras subterráneas. El sistema de contrapesos permitía elevar con relativa facilidad animales pesados y escenografía. Las reconstrucciones modernas han demostrado la efectividad de este sistema.",
          de: "Die etwa 28 Aufzüge des Hypogeums wurden durch ein ausgeklügeltes System von Gegengewichten, Flaschenzügen und Seilen betrieben, das manuell von Sklaven und Arbeitern bedient wurde, die in den unterirdischen Kammern stationiert waren. Das Gegengewichtssystem ermöglichte das relativ einfache Heben schwerer Tiere und Kulissen. Moderne Rekonstruktionen haben die Wirksamkeit dieses Systems demonstriert.",
          nl: "De ongeveer 28 liften van het hypogeum werden bediend door een verfijnd systeem van contragewichten, katrollen en touwen, handmatig aangedreven door slaven en arbeiders die in de ondergrondse kamers waren gestationeerd. Het contragewichtsysteem maakte het relatief gemakkelijk om zware dieren en decors te hijsen. Moderne reconstructies hebben de effectiviteit van dit systeem aangetoond."
        }
      },
      {
        question: {
          en: "What architectural order appears on the Colosseum's fourth level?",
          es: "¿Qué orden arquitectónico aparece en el cuarto nivel del Coliseo?",
          de: "Welche architektonische Ordnung erscheint auf der vierten Ebene des Kolosseums?",
          nl: "Welke architectonische orde verschijnt op het vierde niveau van het Colosseum?"
        },
        options: [
          { en: "Tuscan order", es: "Orden toscano", de: "Toskanische Ordnung", nl: "Toscaanse orde" },
          { en: "Corinthian pilasters", es: "Pilastras corintias", de: "Korinthische Pilaster", nl: "Korinthische pilasters" },
          { en: "Composite order", es: "Orden compuesto", de: "Kompositordnung", nl: "Composiete orde" },
          { en: "No columns, just rectangular windows", es: "Sin columnas, solo ventanas rectangulares", de: "Keine Säulen, nur rechteckige Fenster", nl: "Geen zuilen, alleen rechthoekige ramen" }
        ],
        correct: 1,
        explanation: {
          en: "The fourth level features Corinthian pilasters (flat, decorative columns attached to the wall) between rectangular window openings. The lower three levels display the progression of orders: Doric (ground), Ionic (second), and Corinthian (third). This vertical arrangement demonstrates the Roman principle of placing simpler, sturdier orders below and more elaborate ones above.",
          es: "El cuarto nivel presenta pilastras corintias (columnas planas decorativas adheridas a la pared) entre aberturas de ventanas rectangulares. Los tres niveles inferiores muestran la progresión de órdenes: dórico (planta baja), jónico (segundo) y corintio (tercero). Esta disposición vertical demuestra el principio romano de colocar órdenes más simples y robustos abajo y más elaborados arriba.",
          de: "Die vierte Ebene zeigt korinthische Pilaster (flache, dekorative Säulen an der Wand befestigt) zwischen rechteckigen Fensteröffnungen. Die unteren drei Ebenen zeigen die Progression der Ordnungen: Dorisch (Erdgeschoss), Ionisch (zweite) und Korinthisch (dritte). Diese vertikale Anordnung demonstriert das römische Prinzip, einfachere, robustere Ordnungen unten und aufwändigere oben zu platzieren.",
          nl: "Het vierde niveau heeft Korinthische pilasters (platte, decoratieve zuilen aan de muur bevestigd) tussen rechthoekige raamopeningen. De onderste drie niveaus tonen de progressie van orden: Dorisch (begane grond), Ionisch (tweede) en Korinthisch (derde). Deze verticale rangschikking toont het Romeinse principe om eenvoudiger, steviger orden onder en meer uitgebreide boven te plaatsen."
        }
      },
      {
        question: {
          en: "How many tons of iron clamps were estimated to have been used in the Colosseum's construction?",
          es: "¿Cuántas toneladas de abrazaderas de hierro se estima que se utilizaron en la construcción del Coliseo?",
          de: "Wie viele Tonnen Eisenklammern wurden schätzungsweise beim Bau des Kolosseums verwendet?",
          nl: "Hoeveel ton ijzeren klemmen werden naar schatting gebruikt bij de bouw van het Colosseum?"
        },
        options: [
          { en: "Approximately 50 tons", es: "Aproximadamente 50 toneladas", de: "Etwa 50 Tonnen", nl: "Ongeveer 50 ton" },
          { en: "Approximately 150 tons", es: "Aproximadamente 150 toneladas", de: "Etwa 150 Tonnen", nl: "Ongeveer 150 ton" },
          { en: "Approximately 300 tons", es: "Aproximadamente 300 toneladas", de: "Etwa 300 Tonnen", nl: "Ongeveer 300 ton" },
          { en: "Approximately 500 tons", es: "Aproximadamente 500 toneladas", de: "Etwa 500 Tonnen", nl: "Ongeveer 500 ton" }
        ],
        correct: 2,
        explanation: {
          en: "An estimated 300 tons of iron clamps were used to hold the travertine blocks together. These clamps were set in channels cut into the stones. During medieval times, most were extracted for reuse, leaving distinctive holes throughout the structure. The theft of these iron clamps significantly weakened the building and contributed to later earthquake damage.",
          es: "Se estima que se utilizaron 300 toneladas de abrazaderas de hierro para mantener unidos los bloques de travertino. Estas abrazaderas se colocaban en canales cortados en las piedras. Durante la época medieval, la mayoría fueron extraídas para reutilización, dejando agujeros distintivos por toda la estructura. El robo de estas abrazaderas de hierro debilitó significativamente el edificio y contribuyó a daños posteriores por terremotos.",
          de: "Schätzungsweise 300 Tonnen Eisenklammern wurden verwendet, um die Travertinblöcke zusammenzuhalten. Diese Klammern wurden in Kanäle gesetzt, die in die Steine geschnitten wurden. Im Mittelalter wurden die meisten zur Wiederverwendung extrahiert, was charakteristische Löcher in der gesamten Struktur hinterließ. Der Diebstahl dieser Eisenklammern schwächte das Gebäude erheblich und trug zu späteren Erdbebenschäden bei.",
          nl: "Naar schatting werden 300 ton ijzeren klemmen gebruikt om de travertijnblokken samen te houden. Deze klemmen werden in kanalen geplaatst die in de stenen waren gesneden. Tijdens de Middeleeuwen werden de meeste geëxtraheerd voor hergebruik, wat kenmerkende gaten door de hele structuur achterliet. De diefstal van deze ijzeren klemmen verzwakte het gebouw aanzienlijk en droeg bij aan latere aardbevingsschade."
        }
      },
      {
        question: {
          en: "What percentage gradient did the seating sections have to facilitate drainage and visibility?",
          es: "¿Qué porcentaje de gradiente tenían las secciones de asientos para facilitar el drenaje y la visibilidad?",
          de: "Welches Gefälle hatten die Sitzbereiche, um Entwässerung und Sichtbarkeit zu erleichtern?",
          nl: "Welk hellingpercentage hadden de zitsecties om drainage en zichtbaarheid te vergemakkelijken?"
        },
        options: [
          { en: "15 degrees", es: "15 grados", de: "15 Grad", nl: "15 graden" },
          { en: "25 degrees", es: "25 grados", de: "25 Grad", nl: "25 graden" },
          { en: "35 degrees", es: "35 grados", de: "35 Grad", nl: "35 graden" },
          { en: "45 degrees", es: "45 grados", de: "45 Grad", nl: "45 graden" }
        ],
        correct: 2,
        explanation: {
          en: "The seating sections were constructed at approximately 35-degree angles. This steep gradient provided excellent sightlines for all spectators, regardless of their distance from the arena, and facilitated quick drainage of rainwater. The mathematical precision of these angles demonstrates Roman engineering sophistication in optimizing both function and spectator experience.",
          es: "Las secciones de asientos se construyeron en ángulos de aproximadamente 35 grados. Este gradiente empinado proporcionó excelentes líneas de visión para todos los espectadores, independientemente de su distancia de la arena, y facilitó el drenaje rápido del agua de lluvia. La precisión matemática de estos ángulos demuestra la sofisticación de la ingeniería romana en optimizar tanto la función como la experiencia del espectador.",
          de: "Die Sitzbereiche wurden in einem Winkel von etwa 35 Grad konstruiert. Dieses steile Gefälle bot allen Zuschauern hervorragende Sichtlinien, unabhängig von ihrer Entfernung zur Arena, und erleichterte die schnelle Entwässerung von Regenwasser. Die mathematische Präzision dieser Winkel demonstriert die Raffinesse römischer Ingenieurskunst bei der Optimierung von Funktion und Zuschauererlebnis.",
          nl: "De zitsecties werden geconstrueerd onder een hoek van ongeveer 35 graden. Dit steile verloop zorgde voor uitstekende zichtlijnen voor alle toeschouwers, ongeacht hun afstand tot de arena, en vergemakkelijkte snelle afvoer van regenwater. De wiskundige precisie van deze hoeken toont de verfijning van Romeinse engineering in het optimaliseren van zowel functie als toeschouwervaring."
        }
      },
      {
        question: {
          en: "Which Roman amphitheater features the best-preserved hypogeum system?",
          es: "¿Qué anfiteatro romano presenta el sistema de hipogeo mejor conservado?",
          de: "Welches römische Amphitheater verfügt über das besterhaltene Hypogeum-System?",
          nl: "Welk Romeins amfitheater heeft het best bewaarde hypogeum systeem?"
        },
        options: [
          { en: "The Colosseum in Rome", es: "El Coliseo en Roma", de: "Das Kolosseum in Rom", nl: "Het Colosseum in Rome" },
          { en: "The Arena of Nimes", es: "La Arena de Nîmes", de: "Die Arena von Nîmes", nl: "De Arena van Nîmes" },
          { en: "The Amphitheater of Pozzuoli", es: "El Anfiteatro de Pozzuoli", de: "Das Amphitheater von Pozzuoli", nl: "Het Amfitheater van Pozzuoli" },
          { en: "The Arena of Verona", es: "La Arena de Verona", de: "Die Arena von Verona", nl: "De Arena van Verona" }
        ],
        correct: 2,
        explanation: {
          en: "While the Colosseum's hypogeum is impressive, the Amphitheater of Pozzuoli (Flavian Amphitheater) near Naples has the best-preserved underground system. Built slightly later than the Colosseum, its hypogeum is still largely intact, allowing visitors to see the complete network of passages, animal cages, and mechanical systems in their original configuration.",
          es: "Aunque el hipogeo del Coliseo es impresionante, el Anfiteatro de Pozzuoli (Anfiteatro Flavio) cerca de Nápoles tiene el sistema subterráneo mejor conservado. Construido un poco más tarde que el Coliseo, su hipogeo todavía está en gran parte intacto, permitiendo a los visitantes ver la red completa de pasajes, jaulas de animales y sistemas mecánicos en su configuración original.",
          de: "Obwohl das Hypogeum des Kolosseums beeindruckend ist, verfügt das Amphitheater von Pozzuoli (Flavisches Amphitheater) in der Nähe von Neapel über das besterhaltene unterirdische System. Etwas später als das Kolosseum gebaut, ist sein Hypogeum noch weitgehend intakt und ermöglicht Besuchern, das vollständige Netzwerk von Gängen, Tierkäfigen und mechanischen Systemen in ihrer ursprünglichen Konfiguration zu sehen.",
          nl: "Hoewel het hypogeum van het Colosseum indrukwekkend is, heeft het Amfitheater van Pozzuoli (Flavisch Amfitheater) bij Napels het best bewaarde ondergrondse systeem. Gebouwd iets later dan het Colosseum, is zijn hypogeum nog grotendeels intact, waardoor bezoekers het volledige netwerk van gangen, dierenkooien en mechanische systemen in hun oorspronkelijke configuratie kunnen zien."
        }
      },
      {
        question: {
          en: "What engineering principle did the Colosseum's annular vaults demonstrate?",
          es: "¿Qué principio de ingeniería demostraban las bóvedas anulares del Coliseo?",
          de: "Welches ingenieurtechnische Prinzip demonstrierten die ringförmigen Gewölbe des Kolosseums?",
          nl: "Welk technisch principe toonden de ringvormige gewelven van het Colosseum aan?"
        },
        options: [
          { en: "Triangulation for stability", es: "Triangulación para estabilidad", de: "Triangulation für Stabilität", nl: "Triangulatie voor stabiliteit" },
          { en: "Weight distribution through arched structures", es: "Distribución de peso a través de estructuras arqueadas", de: "Gewichtsverteilung durch gewölbte Strukturen", nl: "Gewichtsverdeling door gebogen structuren" },
          { en: "Cantilever support", es: "Soporte en voladizo", de: "Kragarmsupport", nl: "Cantilever ondersteuning" },
          { en: "Tension cables", es: "Cables de tensión", de: "Zugseile", nl: "Spanningskabels" }
        ],
        correct: 1,
        explanation: {
          en: "The Colosseum's concentric rings of annular (barrel and groin) vaults demonstrate the Roman mastery of distributing weight through arched structures. The vaults transfer the load from the seating and upper levels down through the walls to the foundation, while the arch shape naturally directs compressive forces to the supports. This principle allowed for the open, multi-level design.",
          es: "Los anillos concéntricos de bóvedas anulares (de cañón y de arista) del Coliseo demuestran el dominio romano de distribuir peso a través de estructuras arqueadas. Las bóvedas transfieren la carga de los asientos y niveles superiores hacia abajo a través de las paredes hasta la fundación, mientras que la forma de arco dirige naturalmente las fuerzas de compresión a los soportes. Este principio permitió el diseño abierto de múltiples niveles.",
          de: "Die konzentrischen Ringe ringförmiger (Tonnen- und Kreuz-) Gewölbe des Kolosseums demonstrieren die römische Meisterschaft in der Gewichtsverteilung durch gewölbte Strukturen. Die Gewölbe übertragen die Last von den Sitzplätzen und oberen Ebenen durch die Wände zum Fundament, während die Bogenform Druckkräfte natürlich zu den Stützen leitet. Dieses Prinzip ermöglichte das offene, mehrstöckige Design.",
          nl: "De concentrische ringen van ringvormige (ton- en kruis-) gewelven van het Colosseum tonen de Romeinse beheersing van gewichtsverdeling door gebogen structuren. De gewelven dragen de last van de zitplaatsen en bovenste niveaus door de muren naar de fundering, terwijl de boogvorm natuurlijk drukkrachten naar de ondersteuningen leidt. Dit principe maakte het open, meerlagige ontwerp mogelijk."
        }
      },
      {
        question: {
          en: "How did the Colosseum's design influence the construction of bullrings in Spain?",
          es: "¿Cómo influyó el diseño del Coliseo en la construcción de plazas de toros en España?",
          de: "Wie beeinflusste das Design des Kolosseums den Bau von Stierkampfarenen in Spanien?",
          nl: "Hoe beïnvloedde het ontwerp van het Colosseum de bouw van stierenvechtersarena's in Spanje?"
        },
        options: [
          { en: "No influence - bullrings use completely different designs", es: "Sin influencia - las plazas de toros usan diseños completamente diferentes", de: "Kein Einfluss - Stierkampfarenen verwenden völlig andere Designs", nl: "Geen invloed - stierenvechtersarena's gebruiken compleet andere ontwerpen" },
          { en: "Direct copying of the elliptical shape and tiered seating", es: "Copia directa de la forma elíptica y asientos escalonados", de: "Direkte Kopie der elliptischen Form und gestuften Sitzplätze", nl: "Directe kopie van de elliptische vorm en gelaagde zitplaatsen" },
          { en: "Inspired the circular arena concept with tiered seating", es: "Inspiró el concepto de arena circular con asientos escalonados", de: "Inspirierte das Konzept der kreisförmigen Arena mit gestuften Sitzplätzen", nl: "Inspireerde het concept van circulaire arena met gelaagde zitplaatsen" },
          { en: "Only the underground holding areas were copied", es: "Solo se copiaron las áreas de retención subterráneas", de: "Nur die unterirdischen Haltebereiche wurden kopiert", nl: "Alleen de ondergrondse verblijfsruimtes werden gekopieerd" }
        ],
        correct: 2,
        explanation: {
          en: "Spanish bullrings (plazas de toros) were directly inspired by Roman amphitheaters like the Colosseum. They adopted the circular arena design, tiered seating arrangement, and the concept of underground holding areas. However, bullrings are typically circular rather than elliptical, and most are permanent structures built from the 18th century onward, adapting Roman principles to the specific needs of bullfighting.",
          es: "Las plazas de toros españolas fueron directamente inspiradas por anfiteatros romanos como el Coliseo. Adoptaron el diseño de arena circular, disposición de asientos escalonados y el concepto de áreas de retención subterráneas. Sin embargo, las plazas de toros son típicamente circulares en lugar de elípticas, y la mayoría son estructuras permanentes construidas desde el siglo XVIII en adelante, adaptando los principios romanos a las necesidades específicas de la tauromaquia.",
          de: "Spanische Stierkampfarenen (Plazas de Toros) wurden direkt von römischen Amphitheatern wie dem Kolosseum inspiriert. Sie übernahmen das kreisförmige Arenadesign, die gestuften Sitzplatzanordnung und das Konzept unterirdischer Haltebereiche. Stierkampfarenen sind jedoch typischerweise kreisförmig statt elliptisch, und die meisten sind permanente Strukturen, die ab dem 18. Jahrhundert gebaut wurden und römische Prinzipien an die spezifischen Bedürfnisse des Stierkampfs anpassten.",
          nl: "Spaanse stierenvechtersarena's (plaza's de toros) werden direct geïnspireerd door Romeinse amfitheaters zoals het Colosseum. Ze namen het circulaire arena-ontwerp, de gelaagde zitplaatsindeling en het concept van ondergrondse verblijfsruimtes over. Stierenvechtersarena's zijn echter typisch circulair in plaats van elliptisch, en de meeste zijn permanente structuren gebouwd vanaf de 18e eeuw, waarbij Romeinse principes werden aangepast aan de specifieke behoeften van het stierenvechten."
        }
      },
      {
        question: {
          en: "What was the purpose of the capstans (large winches) found in the hypogeum?",
          es: "¿Cuál era el propósito de los cabestrantes (grandes cabrestantes) encontrados en el hipogeo?",
          de: "Was war der Zweck der Gangspills (große Winden), die im Hypogeum gefunden wurden?",
          nl: "Wat was het doel van de kaapstanders (grote lieren) gevonden in het hypogeum?"
        },
        options: [
          { en: "To open and close the arena entrance gates", es: "Para abrir y cerrar las puertas de entrada de la arena", de: "Um die Arena-Eingangstore zu öffnen und zu schließen", nl: "Om de arena-ingangspoorten te openen en sluiten" },
          { en: "To operate the trap door elevators", es: "Para operar los elevadores de trampilla", de: "Um die Falltüraufzüge zu bedienen", nl: "Om de valluikliften te bedienen" },
          { en: "To raise and lower scenery and stage props", es: "Para subir y bajar escenografía y accesorios de escenario", de: "Um Kulissen und Bühnenrequisiten zu heben und zu senken", nl: "Om decors en toneelrekwisieten te hijsen en neer te laten" },
          { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "The capstans in the hypogeum served multiple purposes: operating the elevators that lifted animals and gladiators through trap doors, raising and lowering elaborate scenery and stage props for different spectacles, and controlling various mechanical gates. Archaeological evidence and modern reconstructions show these were part of a sophisticated theatrical machinery system operated by teams of workers.",
          es: "Los cabestrantes en el hipogeo servían múltiples propósitos: operar los elevadores que levantaban animales y gladiadores a través de trampillas, subir y bajar escenografía elaborada y accesorios de escenario para diferentes espectáculos, y controlar varias puertas mecánicas. La evidencia arqueológica y las reconstrucciones modernas muestran que estos eran parte de un sofisticado sistema de maquinaria teatral operado por equipos de trabajadores.",
          de: "Die Gangspills im Hypogeum dienten mehreren Zwecken: Bedienung der Aufzüge, die Tiere und Gladiatoren durch Falltüren hoben, Heben und Senken aufwändiger Kulissen und Bühnenrequisiten für verschiedene Spektakel und Steuerung verschiedener mechanischer Tore. Archäologische Beweise und moderne Rekonstruktionen zeigen, dass diese Teil eines ausgeklügelten theatralischen Maschinensystems waren, das von Arbeiterteams bedient wurde.",
          nl: "De kaapstanders in het hypogeum dienden meerdere doeleinden: het bedienen van de liften die dieren en gladiatoren door valluiken tilden, het hijsen en neerlaten van uitgebreide decors en toneelrekwisieten voor verschillende spektakels, en het bedienen van verschillende mechanische poorten. Archeologisch bewijs en moderne reconstructies tonen aan dat deze deel uitmaakten van een verfijnd theatraal machinesysteem bediend door werkteams."
        }
      },
      {
        question: {
          en: "What distinguishes the Colosseum from earlier Roman amphitheaters architecturally?",
          es: "¿Qué distingue al Coliseo de anfiteatros romanos anteriores arquitectónicamente?",
          de: "Was unterscheidet das Kolosseum architektonisch von früheren römischen Amphitheatern?",
          nl: "Wat onderscheidt het Colosseum architectonisch van eerdere Romeinse amfitheaters?"
        },
        options: [
          { en: "It was the first to use stone instead of wood", es: "Fue el primero en usar piedra en lugar de madera", de: "Es war das erste, das Stein statt Holz verwendete", nl: "Het was het eerste dat steen gebruikte in plaats van hout" },
          { en: "It was the first free-standing amphitheater with a hypogeum", es: "Fue el primer anfiteatro independiente con hipogeo", de: "Es war das erste freistehende Amphitheater mit Hypogeum", nl: "Het was het eerste vrijstaande amfitheater met een hypogeum" },
          { en: "Its unprecedented size and complex four-story facade", es: "Su tamaño sin precedentes y compleja fachada de cuatro pisos", de: "Seine beispiellose Größe und komplexe vierstöckige Fassade", nl: "Zijn ongekende grootte en complexe viervergadigde gevel" },
          { en: "It was the first to have tiered seating", es: "Fue el primero en tener asientos escalonados", de: "Es war das erste mit gestuften Sitzplätzen", nl: "Het was het eerste met gelaagde zitplaatsen" }
        ],
        correct: 2,
        explanation: {
          en: "While earlier amphitheaters existed, the Colosseum's unprecedented scale and architectural sophistication set it apart. Its four-story exterior facade using three classical orders plus Corinthian pilasters, massive free-standing structure, elaborate hypogeum system, and capacity for 50,000-80,000 spectators made it the most ambitious amphitheater ever built. It became the architectural model for all subsequent amphitheaters.",
          es: "Aunque existían anfiteatros anteriores, la escala sin precedentes y sofisticación arquitectónica del Coliseo lo distinguían. Su fachada exterior de cuatro pisos usando tres órdenes clásicos más pilastras corintias, estructura masiva independiente, elaborado sistema de hipogeo y capacidad para 50,000-80,000 espectadores lo convirtieron en el anfiteatro más ambicioso jamás construido. Se convirtió en el modelo arquitectónico para todos los anfiteatros posteriores.",
          de: "Obwohl frühere Amphitheater existierten, hoben die beispiellose Größe und architektonische Raffinesse des Kolosseums es hervor. Seine vierstöckige Außenfassade mit drei klassischen Ordnungen plus korinthischen Pilastern, massive freistehende Struktur, aufwändiges Hypogeum-System und Kapazität für 50.000-80.000 Zuschauer machten es zum ehrgeizigsten jemals gebauten Amphitheater. Es wurde zum architektonischen Vorbild für alle nachfolgenden Amphitheater.",
          nl: "Hoewel eerdere amfitheaters bestonden, onderscheidde de ongekende schaal en architectonische verfijning van het Colosseum het. Zijn viervergadigde buitengevel met drie klassieke orden plus Korinthische pilasters, massieve vrijstaande structuur, uitgebreid hypogeum systeem en capaciteit voor 50.000-80.000 toeschouwers maakten het het ambitieuste amfitheater ooit gebouwd. Het werd het architectonische model voor alle daaropvolgende amfitheaters."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();