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
      },
      {
        question: {
          en: "What specific iron clamps were used to join travertine blocks?",
          es: "¿Qué abrazaderas de hierro específicas se usaron para unir bloques de travertino?",
          de: "Welche spezifischen Eisenklammern wurden verwendet, um Travertinblöcke zu verbinden?",
          nl: "Welke specifieke ijzeren klemmen werden gebruikt om travertijnblokken te verbinden?"
        },
        options: [
          { en: "Mortared joints only", es: "Solo juntas de mortero", de: "Nur Mörtelverbindungen", nl: "Alleen gemetselde voegen" },
          { en: "Bronze dovetail and T-shaped iron clamps", es: "Abrazaderas de hierro en forma de cola de milano de bronce y en forma de T", de: "Bronze-Schwalbenschwanz- und T-förmige Eisenklammern", nl: "Bronzen zwaluwstaartklemmen en T-vormige ijzeren klemmen" },
          { en: "Wooden pegs", es: "Clavijas de madera", de: "Holzpflöcke", nl: "Houten pennen" },
          { en: "No fasteners were used", es: "No se usaron fijadores", de: "Es wurden keine Befestigungen verwendet", nl: "Er werden geen bevestigingsmiddelen gebruikt" }
        ],
        correct: 1,
        explanation: {
          en: "The Colosseum used approximately 300 tons of iron clamps - bronze dovetail joints and T-shaped iron clamps poured with lead - to secure stone blocks. Medieval scavengers extracted most of these metal fasteners, leaving characteristic holes throughout the structure. Modern restoration must account for this missing structural element when stabilizing walls.",
          es: "El Coliseo usó aproximadamente 300 toneladas de abrazaderas de hierro - juntas de cola de milano de bronce y abrazaderas de hierro en forma de T vertidas con plomo - para asegurar bloques de piedra. Los carroñeros medievales extrajeron la mayoría de estos fijadores metálicos, dejando agujeros característicos en toda la estructura. La restauración moderna debe tener en cuenta este elemento estructural faltante al estabilizar paredes.",
          de: "Das Kolosseum verwendete etwa 300 Tonnen Eisenklammern - Bronze-Schwalbenschwanzverbindungen und T-förmige Eisenklammern mit Bleiguss -, um Steinblöcke zu sichern. Mittelalterliche Plünderer entfernten die meisten dieser Metallbefestigungen und hinterließen charakteristische Löcher in der gesamten Struktur. Moderne Restaurierung muss dieses fehlende Strukturelement berücksichtigen, wenn Wände stabilisiert werden.",
          nl: "Het Colosseum gebruikte ongeveer 300 ton ijzeren klemmen - bronzen zwaluwstaartklemmen en T-vormige ijzeren klemmen gegoten met lood - om stenen blokken te beveiligen. Middeleeuwse plunderaars haalden de meeste van deze metalen bevestigingsmiddelen weg, waardoor karakteristieke gaten door de hele structuur achterbleven. Moderne restauratie moet rekening houden met dit ontbrekende structurele element bij het stabiliseren van muren."
        }
      },
      {
        question: {
          en: "What was the purpose of the 'summa cavea in ligneis'?",
          es: "¿Cuál era el propósito del 'summa cavea in ligneis'?",
          de: "Was war der Zweck der 'Summa Cavea in Ligneis'?",
          nl: "Wat was het doel van de 'summa cavea in ligneis'?"
        },
        options: [
          { en: "Storage for weapons", es: "Almacenamiento de armas", de: "Waffenlager", nl: "Opslag voor wapens" },
          { en: "Wooden gallery for lowest social classes", es: "Galería de madera para las clases sociales más bajas", de: "Holzgalerie für niedrigste soziale Klassen", nl: "Houten galerij voor laagste sociale klassen" },
          { en: "Emperor's private viewing area", es: "Área de visualización privada del emperador", de: "Privater Bereich des Kaisers", nl: "Privé kijkgebied van de keizer" },
          { en: "Animal cage storage", es: "Almacenamiento de jaulas de animales", de: "Tierkäfiglagerung", nl: "Opslag van dierenkooien" }
        ],
        correct: 1,
        explanation: {
          en: "The summa cavea in ligneis was a wooden gallery at the very top of the seating area, constructed of timber rather than stone to reduce weight on the upper structure. This section housed standing-room spaces for the poorest citizens, women, and slaves - those furthest from the action both physically and socially. The wooden construction is long gone, leaving only stone supports visible today.",
          es: "El summa cavea in ligneis era una galería de madera en la parte superior del área de asientos, construida de madera en lugar de piedra para reducir el peso en la estructura superior. Esta sección albergaba espacios de pie para los ciudadanos más pobres, mujeres y esclavos - aquellos más alejados de la acción tanto física como socialmente. La construcción de madera hace mucho que desapareció, dejando solo soportes de piedra visibles hoy.",
          de: "Die Summa Cavea in Ligneis war eine Holzgalerie ganz oben im Sitzbereich, aus Holz statt Stein gebaut, um das Gewicht auf der oberen Struktur zu reduzieren. Dieser Abschnitt beherbergte Stehplätze für die ärmsten Bürger, Frauen und Sklaven - diejenigen, die sowohl physisch als auch sozial am weitesten von der Aktion entfernt waren. Die Holzkonstruktion ist längst verschwunden und hinterlässt nur noch heute sichtbare Steinstützen.",
          nl: "De summa cavea in ligneis was een houten galerij helemaal bovenaan het zitgedeelte, gebouwd van hout in plaats van steen om het gewicht op de bovenste structuur te verminderen. Deze sectie herbergde staanplaatsen voor de armste burgers, vrouwen en slaven - degenen die het verst van de actie waren, zowel fysiek als sociaal. De houten constructie is lang verdwenen en laat alleen stenen steunen zien die vandaag zichtbaar zijn."
        }
      },
      {
        question: {
          en: "How did the Romans achieve the Colosseum's precise elliptical shape?",
          es: "¿Cómo lograron los romanos la forma elíptica precisa del Coliseo?",
          de: "Wie erreichten die Römer die präzise elliptische Form des Kolosseums?",
          nl: "Hoe bereikten de Romeinen de precieze elliptische vorm van het Colosseum?"
        },
        options: [
          { en: "Trial and error construction", es: "Construcción por ensayo y error", de: "Bau durch Versuch und Irrtum", nl: "Constructie door vallen en opstaan" },
          { en: "Two-point rope and stake geometric construction", es: "Construcción geométrica de dos puntos con cuerda y estaca", de: "Zweipunkt-Seil- und Pflock-Geometriekonstruktion", nl: "Tweepuntige touw- en paalgeometrische constructie" },
          { en: "Imported Greek architectural plans", es: "Planos arquitectónicos griegos importados", de: "Importierte griechische Architekturpläne", nl: "Geïmporteerde Griekse architectonische plannen" },
          { en: "Random circular approximation", es: "Aproximación circular aleatoria", de: "Zufällige kreisförmige Annäherung", nl: "Willekeurige cirkelbenadering" }
        ],
        correct: 1,
        explanation: {
          en: "Roman surveyors used the classic two-point method to create the ellipse: two foci (focal points) were marked, and a rope loop was stretched around stakes at both points. Keeping the rope taut while moving a marking stick created the perfect elliptical curve. This ancient geometric technique, combined with precise measurement using the groma for angles and Roman foot for distance, achieved remarkable accuracy without modern instruments.",
          es: "Los topógrafos romanos usaron el método clásico de dos puntos para crear la elipse: se marcaron dos focos (puntos focales), y se estiró un lazo de cuerda alrededor de estacas en ambos puntos. Mantener la cuerda tensa mientras se movía un palo de marcado creó la curva elíptica perfecta. Esta técnica geométrica antigua, combinada con medición precisa usando la groma para ángulos y el pie romano para distancia, logró notable precisión sin instrumentos modernos.",
          de: "Römische Vermesser verwendeten die klassische Zweipunktmethode zur Erstellung der Ellipse: Zwei Brennpunkte wurden markiert, und eine Seilschlaufe wurde um Pfähle an beiden Punkten gespannt. Das Seil straff zu halten, während ein Markierungsstab bewegt wurde, erzeugte die perfekte elliptische Kurve. Diese alte geometrische Technik, kombiniert mit präziser Messung unter Verwendung der Groma für Winkel und des römischen Fußes für Entfernung, erreichte bemerkenswerte Genauigkeit ohne moderne Instrumente.",
          nl: "Romeinse landmeters gebruikten de klassieke tweepuntsmethode om de ellips te creëren: twee brandpunten werden gemarkeerd, en een touwen lus werd gespannen rond palen op beide punten. Het touw strak houden terwijl een markeerstok werd bewogen, creëerde de perfecte elliptische kromme. Deze oude geometrische techniek, gecombineerd met precieze metingen met de groma voor hoeken en de Romeinse voet voor afstand, bereikte opmerkelijke nauwkeurigheid zonder moderne instrumenten."
        }
      },
      {
        question: {
          en: "What structural purpose did the Colosseum's radial walls serve?",
          es: "¿Qué propósito estructural servían los muros radiales del Coliseo?",
          de: "Welchen strukturellen Zweck dienten die Radialwände des Kolosseums?",
          nl: "Welk structureel doel dienden de radiale muren van het Colosseum?"
        },
        options: [
          { en: "Purely decorative elements", es: "Elementos puramente decorativos", de: "Rein dekorative Elemente", nl: "Puur decoratieve elementen" },
          { en: "Load distribution and crowd control barriers", es: "Distribución de carga y barreras de control de multitudes", de: "Lastverteilung und Menschenkontrollbarrieren", nl: "Lastdistributie en publiekcontrolebarrières" },
          { en: "Water channels", es: "Canales de agua", de: "Wasserkanäle", nl: "Waterkanalen" },
          { en: "Ventilation shafts", es: "Pozos de ventilación", de: "Belüftungsschächte", nl: "Ventilatieschachten" }
        ],
        correct: 1,
        explanation: {
          en: "The 80 radial walls extending from the arena to the outer perimeter served crucial structural and organizational functions. They distributed the enormous weight of the seating tiers, creating wedge-shaped sections (cunei) that helped manage crowd flow. Each wall aligned with one of the 80 entrances, creating a sophisticated traffic management system. The walls also acted as fire breaks and provided lateral support against the outward thrust of the vaulted corridors.",
          es: "Los 80 muros radiales que se extienden desde la arena hasta el perímetro exterior servían funciones estructurales y organizativas cruciales. Distribuían el enorme peso de los niveles de asientos, creando secciones en forma de cuña (cunei) que ayudaban a gestionar el flujo de multitudes. Cada muro se alineaba con una de las 80 entradas, creando un sofisticado sistema de gestión de tráfico. Los muros también actuaban como cortafuegos y proporcionaban soporte lateral contra el empuje hacia afuera de los corredores abovedados.",
          de: "Die 80 Radialwände, die von der Arena zum äußeren Umfang verlaufen, erfüllten entscheidende strukturelle und organisatorische Funktionen. Sie verteilten das enorme Gewicht der Sitzränge und schufen keilförmige Abschnitte (Cunei), die bei der Steuerung des Menschenstroms halfen. Jede Wand war auf einen der 80 Eingänge ausgerichtet und schuf ein ausgeklügeltes Verkehrsmanagement. Die Wände dienten auch als Brandschneisen und boten seitlichen Halt gegen den Außenschub der gewölbten Korridore.",
          nl: "De 80 radiale muren die zich uitstrekken van de arena naar de buitenste omtrek dienden cruciale structurele en organisatorische functies. Ze distribueerden het enorme gewicht van de zitrijen en creëerden wigvormige secties (cunei) die hielpen bij het beheren van de mensenstroom. Elke muur was uitgelijnd met een van de 80 ingangen, waardoor een geavanceerd verkeersbeheersysteem ontstond. De muren fungeerden ook als brandgangen en boden zijdelingse ondersteuning tegen de buitenwaartse druk van de gewelfde gangen."
        }
      },
      {
        question: {
          en: "What evidence suggests the Colosseum once hosted mock sea battles?",
          es: "¿Qué evidencia sugiere que el Coliseo una vez albergó batallas navales simuladas?",
          de: "Welche Beweise deuten darauf hin, dass das Kolosseum einst Seeschlachten veranstaltete?",
          nl: "Welk bewijs suggereert dat het Colosseum ooit nabootsingen van zeeslagen organiseerde?"
        },
        options: [
          { en: "Ancient texts about naumachiae before hypogeum construction", es: "Textos antiguos sobre naumaquias antes de la construcción del hipogeo", de: "Antike Texte über Naumachien vor dem Bau des Hypogäums", nl: "Oude teksten over naumachiae voor de bouw van het hypogeum" },
          { en: "Underwater drainage channels", es: "Canales de drenaje subacuáticos", de: "Unterwasser-Entwässerungskanäle", nl: "Onderwaterdrainagekanalen" },
          { en: "Ship anchors found in the arena", es: "Anclas de barcos encontradas en la arena", de: "Im Arena gefundene Schiffsanker", nl: "Scheepsankers gevonden in de arena" },
          { en: "No such evidence exists", es: "No existe tal evidencia", de: "Es gibt keine solchen Beweise", nl: "Dergelijk bewijs bestaat niet" }
        ],
        correct: 0,
        explanation: {
          en: "Historical accounts describe naumachiae (mock naval battles) during the Colosseum's opening games in 80 AD. This was only possible before Domitian added the hypogeum, when the arena had a flat, waterproof floor that could be flooded. After the hypogeum's construction, such spectacles were impossible. Modern analysis confirms the arena's original design could accommodate flooding, though debates continue about the depth and scale of these naval re-enactments.",
          es: "Los relatos históricos describen naumaquias (batallas navales simuladas) durante los juegos de apertura del Coliseo en 80 d.C. Esto solo fue posible antes de que Domiciano añadiera el hipogeo, cuando la arena tenía un piso plano e impermeable que podía inundarse. Después de la construcción del hipogeo, tales espectáculos fueron imposibles. El análisis moderno confirma que el diseño original de la arena podía acomodar inundaciones, aunque continúan los debates sobre la profundidad y escala de estas recreaciones navales.",
          de: "Historische Berichte beschreiben Naumachien (Seeschlachten) während der Eröffnungsspiele des Kolosseums im Jahr 80 n.Chr. Dies war nur möglich, bevor Domitian das Hypogäum hinzufügte, als die Arena einen flachen, wasserdichten Boden hatte, der geflutet werden konnte. Nach dem Bau des Hypogäums waren solche Spektakel unmöglich. Moderne Analysen bestätigen, dass das ursprüngliche Design der Arena Überflutungen aufnehmen konnte, obwohl Debatten über die Tiefe und das Ausmaß dieser Seeschlachten-Nachstellungen fortbestehen.",
          nl: "Historische verslagen beschrijven naumachiae (nabootsingen van zeeslagen) tijdens de openingsspelen van het Colosseum in 80 na Chr. Dit was alleen mogelijk voor Domitianus het hypogeum toevoegde, toen de arena een vlakke, waterdichte vloer had die kon worden overstroomd. Na de constructie van het hypogeum waren dergelijke spektakels onmogelijk. Moderne analyse bevestigt dat het oorspronkelijke ontwerp van de arena overstromingen kon accommoderen, hoewel debatten over de diepte en schaal van deze navale re-enactments voortduren."
        }
      },
      {
        question: {
          en: "What was the function of the 'vomitoria' in the Colosseum?",
          es: "¿Cuál era la función de los 'vomitoria' en el Coliseo?",
          de: "Was war die Funktion der 'Vomitoria' im Kolosseum?",
          nl: "Wat was de functie van de 'vomitoria' in het Colosseum?"
        },
        options: [
          { en: "Medical facilities for sick spectators", es: "Instalaciones médicas para espectadores enfermos", de: "Medizinische Einrichtungen für kranke Zuschauer", nl: "Medische faciliteiten voor zieke toeschouwers" },
          { en: "Passageways allowing rapid crowd flow", es: "Pasajes que permiten flujo rápido de multitudes", de: "Durchgänge für schnellen Menschenstrom", nl: "Doorgangen die snelle mensenstroom mogelijk maken" },
          { en: "Waste disposal areas", es: "Áreas de eliminación de desechos", de: "Müllentsorgungsbereiche", nl: "Afvalverwerkingsgebieden" },
          { en: "Animal feeding stations", es: "Estaciones de alimentación de animales", de: "Tierfütterungsstationen", nl: "Diervoederstations" }
        ],
        correct: 1,
        explanation: {
          en: "Vomitoria (singular: vomitorium) were passageways that 'spewed forth' spectators from the seating areas - the name derives from Latin 'vomere' (to spew forth). The Colosseum's 76 numbered vomitoria enabled rapid entry and exit. Archaeological studies show the entire crowd could enter in 15 minutes and exit in 5 minutes through this efficient design, preventing dangerous crushing. Modern stadiums still use this principle.",
          es: "Los vomitoria (singular: vomitorium) eran pasajes que 'vomitaban' espectadores de las áreas de asientos - el nombre deriva del latín 'vomere' (vomitar). Los 76 vomitoria numerados del Coliseo permitían entrada y salida rápidas. Los estudios arqueológicos muestran que toda la multitud podía entrar en 15 minutos y salir en 5 minutos a través de este diseño eficiente, previniendo aplastamiento peligroso. Los estadios modernos aún usan este principio.",
          de: "Vomitoria (Singular: Vomitorium) waren Durchgänge, die Zuschauer aus den Sitzbereichen 'ausspien' - der Name leitet sich vom lateinischen 'vomere' (ausspeien) ab. Die 76 nummerierten Vomitoria des Kolosseums ermöglichten schnellen Ein- und Ausgang. Archäologische Studien zeigen, dass die gesamte Menge in 15 Minuten eintreten und in 5 Minuten durch dieses effiziente Design austreten konnte, was gefährliches Zerquetschen verhinderte. Moderne Stadien verwenden dieses Prinzip noch heute.",
          nl: "Vomitoria (enkelvoud: vomitorium) waren doorgangen die toeschouwers 'uitbraakten' uit de zitplaatsen - de naam komt van het Latijnse 'vomere' (uitbraken). De 76 genummerde vomitoria van het Colosseum maakten snelle in- en uitgang mogelijk. Archeologische studies tonen aan dat de hele menigte in 15 minuten kon binnenkomen en in 5 minuten kon vertrekken door dit efficiënte ontwerp, waardoor gevaarlijke verdrukking werd voorkomen. Moderne stadions gebruiken dit principe nog steeds."
        }
      },
      {
        question: {
          en: "What was the estimated workforce size during peak Colosseum construction?",
          es: "¿Cuál era el tamaño estimado de la fuerza laboral durante la construcción pico del Coliseo?",
          de: "Wie groß war die geschätzte Belegschaft während der Spitzenbauzeit des Kolosseums?",
          nl: "Wat was de geschatte omvang van de beroepsbevolking tijdens de piekbouw van het Colosseum?"
        },
        options: [
          { en: "Approximately 500 workers", es: "Aproximadamente 500 trabajadores", de: "Ungefähr 500 Arbeiter", nl: "Ongeveer 500 arbeiders" },
          { en: "Approximately 3,000-5,000 workers", es: "Aproximadamente 3,000-5,000 trabajadores", de: "Ungefähr 3.000-5.000 Arbeiter", nl: "Ongeveer 3.000-5.000 arbeiders" },
          { en: "Approximately 10,000-15,000 workers", es: "Aproximadamente 10,000-15,000 trabajadores", de: "Ungefähr 10.000-15.000 Arbeiter", nl: "Ongeveer 10.000-15.000 arbeiders" },
          { en: "Over 50,000 workers", es: "Más de 50,000 trabajadores", de: "Über 50.000 Arbeiter", nl: "Meer dan 50.000 arbeiders" }
        ],
        correct: 1,
        explanation: {
          en: "Scholars estimate 3,000-5,000 workers labored simultaneously during peak construction. The workforce included skilled Roman craftsmen (stonemasons, carpenters, engineers), Jewish prisoners from the 70 AD Jerusalem conquest, slaves, and specialized laborers. Different teams worked on various sections concurrently. The relatively fast 8-10 year construction timeline required this large, organized workforce using assembly-line techniques and prefabricated components.",
          es: "Los académicos estiman que 3,000-5,000 trabajadores laboraban simultáneamente durante la construcción pico. La fuerza laboral incluía artesanos romanos calificados (canteros, carpinteros, ingenieros), prisioneros judíos de la conquista de Jerusalén del 70 d.C., esclavos y trabajadores especializados. Diferentes equipos trabajaron en varias secciones concurrentemente. El cronograma de construcción relativamente rápido de 8-10 años requirió esta gran fuerza laboral organizada usando técnicas de línea de ensamblaje y componentes prefabricados.",
          de: "Gelehrte schätzen, dass während der Spitzenbauzeit gleichzeitig 3.000-5.000 Arbeiter arbeiteten. Die Belegschaft umfasste qualifizierte römische Handwerker (Steinmetze, Zimmerleute, Ingenieure), jüdische Gefangene aus der Eroberung Jerusalems von 70 n.Chr., Sklaven und spezialisierte Arbeiter. Verschiedene Teams arbeiteten gleichzeitig an verschiedenen Abschnitten. Der relativ schnelle Bauzeitplan von 8-10 Jahren erforderte diese große, organisierte Belegschaft unter Verwendung von Fließbandtechniken und vorgefertigten Komponenten.",
          nl: "Wetenschappers schatten dat 3.000-5.000 arbeiders gelijktijdig werkten tijdens de piekbouw. De beroepsbevolking omvatte bekwame Romeinse ambachtslieden (steenhouwers, timmerlieden, ingenieurs), Joodse gevangenen van de Jeruzalem-verovering van 70 na Chr., slaven en gespecialiseerde arbeiders. Verschillende teams werkten gelijktijdig aan verschillende secties. Het relatief snelle 8-10 jaar bouwtijdschema vereiste deze grote, georganiseerde beroepsbevolking met behulp van assemblagelijn-technieken en geprefabriceerde componenten."
        }
      },
      {
        question: {
          en: "What seismic events significantly damaged the Colosseum?",
          es: "¿Qué eventos sísmicos dañaron significativamente el Coliseo?",
          de: "Welche seismischen Ereignisse beschädigten das Kolosseum erheblich?",
          nl: "Welke seismische gebeurtenissen beschadigden het Colosseum aanzienlijk?"
        },
        options: [
          { en: "No earthquakes ever affected it", es: "Ningún terremoto lo afectó nunca", de: "Kein Erdbeben hat es je betroffen", nl: "Geen aardbevingen hebben het ooit beïnvloed" },
          { en: "Major earthquakes in 847 and 1349 AD", es: "Terremotos importantes en 847 y 1349 d.C.", de: "Große Erdbeben in den Jahren 847 und 1349 n.Chr.", nl: "Grote aardbevingen in 847 en 1349 na Chr." },
          { en: "Only minor tremors in the 20th century", es: "Solo temblores menores en el siglo XX", de: "Nur kleinere Erschütterungen im 20. Jahrhundert", nl: "Alleen kleine trillingen in de 20e eeuw" },
          { en: "Volcanic eruption damage only", es: "Solo daño por erupción volcánica", de: "Nur Vulkanausbruchschäden", nl: "Alleen schade door vulkaanuitbarsting" }
        ],
        correct: 1,
        explanation: {
          en: "Two major earthquakes devastated the Colosseum. The 847 AD earthquake caused initial damage, but the catastrophic 1349 earthquake during the Avignon Papacy caused the southern exterior facade to collapse completely. The damaged stone was subsequently quarried for other buildings. This is why the Colosseum appears asymmetrical today, with the northern section more intact than the southern ruins. Modern reinforcement aims to prevent further seismic damage.",
          es: "Dos terremotos importantes devastaron el Coliseo. El terremoto del 847 d.C. causó daño inicial, pero el catastrófico terremoto de 1349 durante el Papado de Aviñón causó el colapso completo de la fachada exterior sur. La piedra dañada fue posteriormente extraída para otros edificios. Por esto el Coliseo parece asimétrico hoy, con la sección norte más intacta que las ruinas del sur. El refuerzo moderno pretende prevenir más daño sísmico.",
          de: "Zwei große Erdbeben verwüsteten das Kolosseum. Das Erdbeben von 847 n.Chr. verursachte anfängliche Schäden, aber das katastrophale Erdbeben von 1349 während des Avignon-Papsttums ließ die südliche Außenfassade vollständig einstürzen. Der beschädigte Stein wurde anschließend für andere Gebäude abgebaut. Aus diesem Grund erscheint das Kolosseum heute asymmetrisch, wobei der nördliche Abschnitt intakter ist als die südlichen Ruinen. Moderne Verstärkung zielt darauf ab, weitere seismische Schäden zu verhindern.",
          nl: "Twee grote aardbevingen verwoestten het Colosseum. De aardbeving van 847 na Chr. veroorzaakte initiële schade, maar de catastrofale aardbeving van 1349 tijdens het Avignon-pausdom veroorzaakte dat de zuidelijke buitengevel volledig instortte. De beschadigde steen werd vervolgens gewonnen voor andere gebouwen. Daarom lijkt het Colosseum vandaag asymmetrisch, met de noordelijke sectie intacter dan de zuidelijke ruïnes. Moderne versterking is bedoeld om verdere seismische schade te voorkomen."
        }
      },
      {
        question: {
          en: "What architectural order appears on each level of the Colosseum's facade?",
          es: "¿Qué orden arquitectónico aparece en cada nivel de la fachada del Coliseo?",
          de: "Welche architektonische Ordnung erscheint auf jeder Ebene der Kolosseum-Fassade?",
          nl: "Welke architectonische orde verschijnt op elk niveau van de gevel van het Colosseum?"
        },
        options: [
          { en: "All levels use the same Ionic order", es: "Todos los niveles usan el mismo orden jónico", de: "Alle Ebenen verwenden die gleiche ionische Ordnung", nl: "Alle niveaus gebruiken dezelfde Ionische orde" },
          { en: "Ground: Doric, Second: Ionic, Third: Corinthian, Fourth: Corinthian pilasters", es: "Planta baja: Dórico, Segunda: Jónico, Tercera: Corintio, Cuarta: Pilastras corintias", de: "Erdgeschoss: Dorisch, Zweite: Ionisch, Dritte: Korinthisch, Vierte: Korinthische Pilaster", nl: "Begane grond: Dorisch, Tweede: Ionisch, Derde: Korinthisch, Vierde: Korinthische pilasters" },
          { en: "Random mixture of orders", es: "Mezcla aleatoria de órdenes", de: "Zufällige Mischung von Ordnungen", nl: "Willekeurige mix van orden" },
          { en: "Only Corinthian throughout", es: "Solo corintio en todo", de: "Nur korinthisch durchgehend", nl: "Alleen Korinthisch overal" }
        ],
        correct: 1,
        explanation: {
          en: "The Colosseum's facade demonstrates the Roman progression of classical orders from bottom to top. Ground level uses sturdy Tuscan Doric columns, second level employs elegant Ionic columns, third level features ornate Corinthian columns, and the fourth level has Corinthian pilasters with windows between them. This hierarchical arrangement became a standard architectural principle, showing increasing decorative complexity while ascending - reflecting both structural logic (heavier below) and aesthetic sophistication.",
          es: "La fachada del Coliseo demuestra la progresión romana de órdenes clásicos de abajo hacia arriba. El nivel del suelo usa columnas toscanas dóricas robustas, el segundo nivel emplea elegantes columnas jónicas, el tercer nivel presenta ornamentadas columnas corintias, y el cuarto nivel tiene pilastras corintias con ventanas entre ellas. Esta disposición jerárquica se convirtió en un principio arquitectónico estándar, mostrando creciente complejidad decorativa mientras se asciende - reflejando tanto lógica estructural (más pesado abajo) como sofisticación estética.",
          de: "Die Fassade des Kolosseums demonstriert die römische Progression klassischer Ordnungen von unten nach oben. Das Erdgeschoss verwendet robuste toskanisch-dorische Säulen, die zweite Ebene verwendet elegante ionische Säulen, die dritte Ebene zeigt verzierte korinthische Säulen, und die vierte Ebene hat korinthische Pilaster mit Fenstern dazwischen. Diese hierarchische Anordnung wurde zu einem Standardarchitekturprinzip, das zunehmende dekorative Komplexität beim Aufstieg zeigt - was sowohl strukturelle Logik (schwerer unten) als auch ästhetische Raffinesse widerspiegelt.",
          nl: "De gevel van het Colosseum demonstreert de Romeinse progressie van klassieke orden van beneden naar boven. De begane grond gebruikt stevige Toscaanse Dorische zuilen, het tweede niveau gebruikt elegante Ionische zuilen, het derde niveau heeft sierlijke Korinthische zuilen, en het vierde niveau heeft Korinthische pilasters met ramen ertussen. Deze hiërarchische rangschikking werd een standaard architectonisch principe, dat toenemende decoratieve complexiteit toont bij het opstijgen - wat zowel structurele logica (zwaarder beneden) als esthetische verfijning weerspiegelt."
        }
      },
      {
        question: {
          en: "What modern conservation project began in 2011 to clean the Colosseum?",
          es: "¿Qué proyecto moderno de conservación comenzó en 2011 para limpiar el Coliseo?",
          de: "Welches moderne Konservierungsprojekt begann 2011 zur Reinigung des Kolosseums?",
          nl: "Welk modern conservatieproject begon in 2011 om het Colosseum te reinigen?"
        },
        options: [
          { en: "Power washing campaign", es: "Campaña de lavado a presión", de: "Hochdruckreinigungskampagne", nl: "Hogedrukreinigingscampagne" },
          { en: "Tod's luxury brand sponsorship restoration", es: "Restauración patrocinada por la marca de lujo Tod's", de: "Tod's Luxusmarken-Sponsoring-Restaurierung", nl: "Tod's luxe merk sponsoring restauratie" },
          { en: "UNESCO emergency intervention", es: "Intervención de emergencia de la UNESCO", de: "UNESCO-Notfallintervention", nl: "UNESCO noodinterventie" },
          { en: "No cleaning has occurred", es: "No ha ocurrido limpieza", de: "Es hat keine Reinigung stattgefunden", nl: "Er heeft geen reiniging plaatsgevonden" }
        ],
        correct: 1,
        explanation: {
          en: "In 2011, Italian luxury goods company Tod's pledged 25 million euros for a comprehensive restoration project - the first major private sponsorship of an Italian monument. The controversial public-private partnership involved cleaning pollution-blackened travertine, stabilizing structures, opening previously closed upper levels to visitors, and installing new visitor facilities. The three-phase project completed in 2016 sparked debate about corporate involvement in cultural heritage preservation.",
          es: "En 2011, la compañía italiana de productos de lujo Tod's prometió 25 millones de euros para un proyecto de restauración integral - el primer patrocinio privado importante de un monumento italiano. La controvertida asociación público-privada involucró limpiar el travertino ennegrecido por la contaminación, estabilizar estructuras, abrir niveles superiores previamente cerrados a visitantes e instalar nuevas instalaciones para visitantes. El proyecto de tres fases completado en 2016 generó debate sobre la participación corporativa en la preservación del patrimonio cultural.",
          de: "Im Jahr 2011 versprach das italienische Luxusgüterunternehmen Tod's 25 Millionen Euro für ein umfassendes Restaurierungsprojekt - das erste große private Sponsoring eines italienischen Monuments. Die kontroverse öffentlich-private Partnerschaft umfasste die Reinigung des durch Verschmutzung geschwärzten Travertins, die Stabilisierung von Strukturen, die Öffnung zuvor geschlossener oberer Ebenen für Besucher und die Installation neuer Besuchereinrichtungen. Das 2016 abgeschlossene dreiphasige Projekt löste eine Debatte über die Beteiligung von Unternehmen an der Erhaltung des kulturellen Erbes aus.",
          nl: "In 2011 beloofde het Italiaanse luxegoederen bedrijf Tod's 25 miljoen euro voor een uitgebreid restauratieproject - het eerste grote particuliere sponsoring van een Italiaans monument. Het controversiële publiek-private partnerschap omvatte het reinigen van door vervuiling gezwart travertijn, het stabiliseren van structuren, het openen van voorheen gesloten bovenste niveaus voor bezoekers en het installeren van nieuwe bezoekersfaciliteiten. Het drieledige project dat in 2016 werd voltooid, leidde tot een debat over bedrijfsbetrokkenheid bij de bewaring van cultureel erfgoed."
        }
      },
      {
        question: {
          en: "What construction technique enabled rapid building of the Colosseum's arches?",
          es: "¿Qué técnica de construcción permitió la construcción rápida de los arcos del Coliseo?",
          de: "Welche Bautechnik ermöglichte den schnellen Bau der Bögen des Kolosseums?",
          nl: "Welke bouwtechniek maakte snelle bouw van de bogen van het Colosseum mogelijk?"
        },
        options: [
          { en: "Steel reinforcement bars", es: "Barras de refuerzo de acero", de: "Stahlbewehrungsstäbe", nl: "Stalen wapeningsstaven" },
          { en: "Reusable wooden centering frameworks", es: "Marcos de centrado de madera reutilizables", de: "Wiederverwendbare hölzerne Lehrgerüste", nl: "Herbruikbare houten centreerframeworks" },
          { en: "3D printing", es: "Impresión 3D", de: "3D-Druck", nl: "3D-printen" },
          { en: "Arches were pre-built elsewhere", es: "Los arcos fueron pre-construidos en otro lugar", de: "Bögen wurden anderswo vorgebaut", nl: "Bogen werden elders voorgebouwd" }
        ],
        correct: 1,
        explanation: {
          en: "Romans used sophisticated reusable wooden centering (formwork) to construct arches and vaults efficiently. These temporary wooden frames supported stones during assembly until the keystone locked the arch. Once mortar cured, the centering was removed and reused for the next arch. This assembly-line approach, combined with standardized arch dimensions, dramatically accelerated construction. Archaeological evidence shows the Colosseum's 80+ exterior arches and hundreds of interior vaults used this method.",
          es: "Los romanos usaban sofisticados centros de madera reutilizables (encofrado) para construir arcos y bóvedas eficientemente. Estos marcos de madera temporales soportaban piedras durante el ensamblaje hasta que la clave bloqueaba el arco. Una vez que el mortero curaba, el centro se retiraba y reutilizaba para el siguiente arco. Este enfoque de línea de ensamblaje, combinado con dimensiones de arco estandarizadas, aceleró dramáticamente la construcción. La evidencia arqueológica muestra que los más de 80 arcos exteriores y cientos de bóvedas interiores del Coliseo usaron este método.",
          de: "Die Römer verwendeten ausgeklügelte wiederverwendbare hölzerne Lehrgerüste (Schalungen), um Bögen und Gewölbe effizient zu bauen. Diese temporären Holzrahmen stützten Steine während der Montage, bis der Schlussstein den Bogen verriegelte. Sobald der Mörtel ausgehärtet war, wurde das Lehrgerüst entfernt und für den nächsten Bogen wiederverwendet. Dieser Fließbandansatz, kombiniert mit standardisierten Bogenabmessungen, beschleunigte den Bau dramatisch. Archäologische Beweise zeigen, dass die über 80 Außenbögen und Hunderte von Innengewölben des Kolosseums diese Methode verwendeten.",
          nl: "Romeinen gebruikten geavanceerde herbruikbare houten centreerframeworks (bekisting) om bogen en gewelven efficiënt te bouwen. Deze tijdelijke houten frames ondersteunden stenen tijdens de montage totdat de sluitsteen de boog vergrendelde. Zodra de mortel uitgehard was, werd het centreerframework verwijderd en hergebruikt voor de volgende boog. Deze assemblagelijn-aanpak, gecombineerd met gestandaardiseerde boogafmetingen, versnelde de bouw dramatisch. Archeologisch bewijs toont aan dat de 80+ buitenbogen en honderden binnengewelven van het Colosseum deze methode gebruikten."
        }
      },
      {
        question: {
          en: "What symbolic significance did the Colosseum's location hold?",
          es: "¿Qué significado simbólico tenía la ubicación del Coliseo?",
          de: "Welche symbolische Bedeutung hatte der Standort des Kolosseums?",
          nl: "Welke symbolische betekenis had de locatie van het Colosseum?"
        },
        options: [
          { en: "Built on Rome's highest hill for visibility", es: "Construido en la colina más alta de Roma para visibilidad", de: "Auf Roms höchstem Hügel gebaut für Sichtbarkeit", nl: "Gebouwd op Rome's hoogste heuvel voor zichtbaarheid" },
          { en: "Replaced Nero's private lake, returning land to the people", es: "Reemplazó el lago privado de Nerón, devolviendo tierra al pueblo", de: "Ersetzte Neros privaten See und gab Land an das Volk zurück", nl: "Verving Nero's privémeer, waardoor land aan het volk werd teruggegeven" },
          { en: "Built over an ancient temple", es: "Construido sobre un templo antiguo", de: "Über einem alten Tempel gebaut", nl: "Gebouwd over een oude tempel" },
          { en: "Random location with no significance", es: "Ubicación aleatoria sin significancia", de: "Zufälliger Standort ohne Bedeutung", nl: "Willekeurige locatie zonder betekenis" }
        ],
        correct: 1,
        explanation: {
          en: "The Flavian emperors deliberately built the Colosseum on the site of Nero's despised Domus Aurea (Golden House) - specifically draining his massive artificial lake. This symbolic gesture repudiated Nero's excesses and 'returned' public land to Roman citizens for entertainment. The project also drained a swamp, required innovative foundation engineering, and positioned the monument at the valley between Rome's hills, making it visible from multiple vantage points - a statement of imperial generosity and power.",
          es: "Los emperadores Flavios construyeron deliberadamente el Coliseo en el sitio de la despreciada Domus Aurea (Casa Dorada) de Nerón - específicamente drenando su enorme lago artificial. Este gesto simbólico repudió los excesos de Nerón y 'devolvió' tierra pública a los ciudadanos romanos para entretenimiento. El proyecto también drenó un pantano, requirió ingeniería de cimientos innovadora y posicionó el monumento en el valle entre las colinas de Roma, haciéndolo visible desde múltiples puntos de vista - una declaración de generosidad y poder imperial.",
          de: "Die flavischen Kaiser bauten das Kolosseum absichtlich auf dem Gelände von Neros verabscheutem Domus Aurea (Goldenes Haus) - speziell durch Trockenlegung seines massiven künstlichen Sees. Diese symbolische Geste wies Neros Exzesse zurück und 'gab' öffentliches Land an römische Bürger zur Unterhaltung 'zurück'. Das Projekt entwässerte auch einen Sumpf, erforderte innovative Fundamenttechnik und positionierte das Monument im Tal zwischen Roms Hügeln, wodurch es von mehreren Aussichtspunkten aus sichtbar war - eine Aussage über kaiserliche Großzügigkeit und Macht.",
          nl: "De Flavische keizers bouwden het Colosseum opzettelijk op de locatie van Nero's verafschuwde Domus Aurea (Gouden Huis) - specifiek door zijn enorme kunstmatige meer te draineren. Dit symbolische gebaar verwierp Nero's buitensporigheid en 'gaf' openbaar land 'terug' aan Romeinse burgers voor entertainment. Het project draineerde ook een moeras, vereiste innovatieve fundamenten engineering en positioneerde het monument in de vallei tussen Rome's heuvels, waardoor het zichtbaar was vanaf meerdere uitzichtpunten - een verklaring van keizerlijke vrijgevigheid en macht."
        }
      },
      {
        question: {
          en: "What evidence of Roman numerals remains at the Colosseum today?",
          es: "¿Qué evidencia de números romanos permanece en el Coliseo hoy?",
          de: "Welche Beweise für römische Ziffern bleiben heute im Kolosseum?",
          nl: "Welk bewijs van Romeinse cijfers blijft vandaag in het Colosseum?"
        },
        options: [
          { en: "Numbered archways marking entrance passages", es: "Arcadas numeradas marcando pasajes de entrada", de: "Nummerierte Torbögen, die Eingangsdurchgänge markieren", nl: "Genummerde boogopeningen die ingangspassages markeren" },
          { en: "No numbers were ever used", es: "Nunca se usaron números", de: "Es wurden nie Zahlen verwendet", nl: "Er werden nooit nummers gebruikt" },
          { en: "Only Arabic numerals were used", es: "Solo se usaron números arábigos", de: "Nur arabische Ziffern wurden verwendet", nl: "Alleen Arabische cijfers werden gebruikt" },
          { en: "Numbers painted on seats only", es: "Números pintados solo en asientos", de: "Nur auf Sitzen gemalte Zahlen", nl: "Alleen op zitplaatsen geschilderde nummers" }
        ],
        correct: 0,
        explanation: {
          en: "Roman numerals (I-LXXVI) were carved above entrance arches to guide spectators to their assigned sections. These ticket numbers corresponded to tokens (tesserae) distributed to attendees. Some original numerals remain visible today on the exterior arches, providing direct evidence of the sophisticated crowd management system. This numbering method prevented chaos and allowed efficient seating of tens of thousands, a revolutionary concept still used in modern venues.",
          es: "Los números romanos (I-LXXVI) fueron tallados sobre arcos de entrada para guiar a los espectadores a sus secciones asignadas. Estos números de boleto correspondían a fichas (tesserae) distribuidas a los asistentes. Algunos números originales permanecen visibles hoy en los arcos exteriores, proporcionando evidencia directa del sofisticado sistema de gestión de multitudes. Este método de numeración previno el caos y permitió asientos eficientes de decenas de miles, un concepto revolucionario aún usado en lugares modernos.",
          de: "Römische Ziffern (I-LXXVI) wurden über Eingangstorbögen geschnitzt, um Zuschauer zu ihren zugewiesenen Abschnitten zu führen. Diese Ticketnummern entsprachen den an Teilnehmer verteilten Tokens (Tesserae). Einige Originalziffern sind heute an den Außenbögen noch sichtbar und liefern direkte Beweise für das ausgeklügelte Menschenmanagementsystem. Diese Nummerierungsmethode verhinderte Chaos und ermöglichte effiziente Bestuhlung von Zehntausenden, ein revolutionäres Konzept, das noch in modernen Veranstaltungsorten verwendet wird.",
          nl: "Romeinse cijfers (I-LXXVI) werden boven ingangsbogen gehouwen om toeschouwers naar hun toegewezen secties te leiden. Deze ticketnummers kwamen overeen met munten (tesserae) die aan aanwezigen werden uitgedeeld. Sommige originele cijfers blijven vandaag zichtbaar op de buitenbogen, wat direct bewijs levert van het geavanceerde publieksbeheersysteem. Deze nummeringsmethode voorkwam chaos en maakte efficiënte plaatsing van tienduizenden mogelijk, een revolutionair concept dat nog steeds wordt gebruikt in moderne locaties."
        }
      },
      {
        question: {
          en: "What was the Colosseum's original formal name?",
          es: "¿Cuál era el nombre formal original del Coliseo?",
          de: "Was war der ursprüngliche formale Name des Kolosseums?",
          nl: "Wat was de oorspronkelijke formele naam van het Colosseum?"
        },
        options: [
          { en: "Amphitheatrum Romanum", es: "Anfiteatro Romano", de: "Amphitheatrum Romanum", nl: "Amphitheatrum Romanum" },
          { en: "Amphitheatrum Flavium", es: "Anfiteatro Flavio", de: "Amphitheatrum Flavium", nl: "Amphitheatrum Flavium" },
          { en: "Circus Maximus", es: "Circo Máximo", de: "Circus Maximus", nl: "Circus Maximus" },
          { en: "Colosseum was always its name", es: "Coliseo siempre fue su nombre", de: "Kolosseum war immer sein Name", nl: "Colosseum was altijd zijn naam" }
        ],
        correct: 1,
        explanation: {
          en: "The structure's original name was Amphitheatrum Flavium (Flavian Amphitheater), honoring the Flavian dynasty (Vespasian, Titus, Domitian) who built it. The nickname 'Colosseum' emerged in medieval times, likely referencing the colossal bronze statue of Nero (Colossus of Nero) that stood nearby. The statue was later modified to represent Sol Invictus (the sun god) and eventually disappeared, but the name 'Colosseum' persisted.",
          es: "El nombre original de la estructura era Amphitheatrum Flavium (Anfiteatro Flavio), honrando a la dinastía Flavia (Vespasiano, Tito, Domiciano) que lo construyó. El apodo 'Coliseo' surgió en tiempos medievales, probablemente referenciando la estatua colosal de bronce de Nerón (Coloso de Nerón) que estaba cerca. La estatua fue posteriormente modificada para representar a Sol Invictus (el dios sol) y finalmente desapareció, pero el nombre 'Coliseo' persistió.",
          de: "Der ursprüngliche Name der Struktur war Amphitheatrum Flavium (Flavisches Amphitheater), zu Ehren der flavischen Dynastie (Vespasian, Titus, Domitian), die es baute. Der Spitzname 'Kolosseum' entstand in mittelalterlichen Zeiten, wahrscheinlich in Bezug auf die kolossale Bronzestatue Neros (Koloss von Nero), die in der Nähe stand. Die Statue wurde später modifiziert, um Sol Invictus (den Sonnengott) darzustellen, und verschwand schließlich, aber der Name 'Kolosseum' blieb bestehen.",
          nl: "De oorspronkelijke naam van de structuur was Amphitheatrum Flavium (Flavisch Amfitheater), ter ere van de Flavische dynastie (Vespasianus, Titus, Domitianus) die het bouwde. De bijnaam 'Colosseum' ontstond in de Middeleeuwen, waarschijnlijk verwijzend naar het kolossale bronzen standbeeld van Nero (Colossus van Nero) dat vlakbij stond. Het standbeeld werd later aangepast om Sol Invictus (de zonnegod) voor te stellen en verdween uiteindelijk, maar de naam 'Colosseum' bleef bestaan."
        }
      },
      {
        question: {
          en: "What role did the 'bestiarii' play in Colosseum spectacles?",
          es: "¿Qué papel jugaban los 'bestiarii' en los espectáculos del Coliseo?",
          de: "Welche Rolle spielten die 'Bestiarii' bei den Kolosseum-Spektakeln?",
          nl: "Welke rol speelden de 'bestiarii' bij de spektakels in het Colosseum?"
        },
        options: [
          { en: "Beast tamers and hunters who fought wild animals", es: "Domadores y cazadores de bestias que luchaban contra animales salvajes", de: "Tierbändiger und Jäger, die gegen wilde Tiere kämpften", nl: "Dierentemers en jagers die tegen wilde dieren vochten" },
          { en: "Animal trainers for circuses only", es: "Entrenadores de animales solo para circos", de: "Tiertrainer nur für Zirkusse", nl: "Dierentrainers alleen voor circussen" },
          { en: "Veterinarians caring for animals", es: "Veterinarios cuidando animales", de: "Tierärzte, die Tiere pflegten", nl: "Dierenartsen die voor dieren zorgden" },
          { en: "Food vendors selling meat", es: "Vendedores de alimentos vendiendo carne", de: "Lebensmittelverkäufer, die Fleisch verkaufen", nl: "Voedselleveranciers die vlees verkopen" }
        ],
        correct: 0,
        explanation: {
          en: "Bestiarii were specialized fighters who battled wild animals in venationes (beast hunts). Unlike gladiators who fought each other, bestiarii used spears, bows, and hunting skills against lions, bears, leopards, and exotic animals. Some bestiarii were condemned criminals forced to fight, while others were professional hunters. Their performances occurred during morning shows, demonstrating Roman dominance over nature. Evidence shows bestiarii had their own training schools and celebrity status.",
          es: "Los bestiarii eran luchadores especializados que combatían animales salvajes en venationes (cacerías de bestias). A diferencia de los gladiadores que luchaban entre sí, los bestiarii usaban lanzas, arcos y habilidades de caza contra leones, osos, leopardos y animales exóticos. Algunos bestiarii eran criminales condenados forzados a luchar, mientras otros eran cazadores profesionales. Sus presentaciones ocurrían durante espectáculos matutinos, demostrando dominación romana sobre la naturaleza. La evidencia muestra que los bestiarii tenían sus propias escuelas de entrenamiento y estatus de celebridad.",
          de: "Bestiarii waren spezialisierte Kämpfer, die in Venationes (Tierjagden) gegen wilde Tiere kämpften. Im Gegensatz zu Gladiatoren, die gegeneinander kämpften, verwendeten Bestiarii Speere, Bögen und Jagdfähigkeiten gegen Löwen, Bären, Leoparden und exotische Tiere. Einige Bestiarii waren verurteilte Verbrecher, die zum Kampf gezwungen wurden, während andere professionelle Jäger waren. Ihre Aufführungen fanden während Morgenvorstellungen statt und demonstrierten römische Dominanz über die Natur. Beweise zeigen, dass Bestiarii ihre eigenen Trainingsschulen und Promi-Status hatten.",
          nl: "Bestiarii waren gespecialiseerde vechters die tegen wilde dieren vochten in venationes (dierenjachten). In tegenstelling tot gladiatoren die tegen elkaar vochten, gebruikten bestiarii speren, bogen en jachtvaardigheden tegen leeuwen, beren, luipaarden en exotische dieren. Sommige bestiarii waren veroordeelde criminelen gedwongen om te vechten, terwijl anderen professionele jagers waren. Hun opvoeringen vonden plaats tijdens ochtendshows, die Romeinse dominantie over de natuur demonstreerden. Bewijs toont aan dat bestiarii hun eigen trainingsscholen en celebrity status hadden."
        }
      },
      {
        question: {
          en: "What material covered the arena floor surface?",
          es: "¿Qué material cubría la superficie del piso de la arena?",
          de: "Welches Material bedeckte die Oberfläche des Arenabodens?",
          nl: "Welk materiaal bedekte het oppervlak van de arenabodem?"
        },
        options: [
          { en: "Marble tiles", es: "Azulejos de mármol", de: "Marmorfliesen", nl: "Marmeren tegels" },
          { en: "Sand covering wooden planks", es: "Arena cubriendo tablones de madera", de: "Sand über Holzplanken", nl: "Zand over houten planken" },
          { en: "Concrete only", es: "Solo concreto", de: "Nur Beton", nl: "Alleen beton" },
          { en: "Grass turf", es: "Césped", de: "Grasnarbe", nl: "Grastapijt" }
        ],
        correct: 1,
        explanation: {
          en: "The arena floor consisted of wooden planks covered with sand (Latin 'harena,' from which 'arena' derives). The sand absorbed blood, provided footing for combatants, and could be raked clean between events. After the hypogeum was built, the wooden floor covered the elaborate underground machinery, with trap doors allowing surprise entrances. The term 'arena' literally means 'sand' and became synonymous with combat spaces throughout history.",
          es: "El piso de la arena consistía en tablones de madera cubiertos con arena (latín 'harena,' del cual deriva 'arena'). La arena absorbía sangre, proporcionaba apoyo para combatientes y podía rastrillarse limpia entre eventos. Después de que se construyó el hipogeo, el piso de madera cubría la elaborada maquinaria subterránea, con trampillas permitiendo entradas sorpresa. El término 'arena' literalmente significa 'arena' y se volvió sinónimo de espacios de combate a lo largo de la historia.",
          de: "Der Arenaboden bestand aus Holzplanken, die mit Sand bedeckt waren (lateinisch 'harena,' von dem sich 'Arena' ableitet). Der Sand absorbierte Blut, bot Halt für Kämpfer und konnte zwischen Veranstaltungen sauber geharkt werden. Nachdem das Hypogäum gebaut wurde, bedeckte der Holzboden die aufwändige unterirdische Maschinerie, wobei Falltüren Überraschungsauftritte ermöglichten. Der Begriff 'Arena' bedeutet wörtlich 'Sand' und wurde im Laufe der Geschichte zum Synonym für Kampfräume.",
          nl: "De arenabodem bestond uit houten planken bedekt met zand (Latijn 'harena,' waarvan 'arena' is afgeleid). Het zand absorbeerde bloed, bood grip voor strijders en kon tussen evenementen schoon geharkt worden. Nadat het hypogeum was gebouwd, bedekte de houten vloer de uitgebreide ondergrondse machines, met valluiken die verrassende ingangen mogelijk maakten. De term 'arena' betekent letterlijk 'zand' en werd door de geschiedenis heen synoniem met gevechtsruimtes."
        }
      },
      {
        question: {
          en: "What modern structural concern threatens the Colosseum?",
          es: "¿Qué preocupación estructural moderna amenaza al Coliseo?",
          de: "Welche moderne strukturelle Sorge bedroht das Kolosseum?",
          nl: "Welke moderne structurele zorg bedreigt het Colosseum?"
        },
        options: [
          { en: "The structure is sinking due to groundwater extraction", es: "La estructura se está hundiendo debido a extracción de agua subterránea", de: "Die Struktur sinkt aufgrund von Grundwasserentnahme", nl: "De structuur zinkt weg door grondwaterwinning" },
          { en: "No structural concerns exist", es: "No existen preocupaciones estructurales", de: "Es gibt keine strukturellen Bedenken", nl: "Er bestaan geen structurele zorgen" },
          { en: "Acid rain is the only problem", es: "La lluvia ácida es el único problema", de: "Saurer Regen ist das einzige Problem", nl: "Zure regen is het enige probleem" },
          { en: "Tourist foot traffic only", es: "Solo tráfico peatonal turístico", de: "Nur touristischer Fußverkehr", nl: "Alleen toeristisch voetgangersverkeer" }
        ],
        correct: 0,
        explanation: {
          en: "The Colosseum faces a serious threat from subsidence caused by excessive groundwater extraction in Rome and nearby Metro construction. Studies show the south side is sinking faster than the north, exacerbating existing tilt from earthquake damage. Conservators monitor subsidence using GPS sensors and inclinometers. Additional concerns include vehicle vibrations from nearby roads, pollution-induced stone erosion, and the cumulative weight of 6+ million annual visitors.",
          es: "El Coliseo enfrenta una amenaza seria de subsidencia causada por extracción excesiva de agua subterránea en Roma y construcción cercana del Metro. Los estudios muestran que el lado sur se está hundiendo más rápido que el norte, exacerbando la inclinación existente del daño del terremoto. Los conservadores monitorean la subsidencia usando sensores GPS e inclinómetros. Las preocupaciones adicionales incluyen vibraciones de vehículos de carreteras cercanas, erosión de piedra inducida por contaminación y el peso acumulativo de más de 6 millones de visitantes anuales.",
          de: "Das Kolosseum ist durch Absenkung bedroht, die durch übermäßige Grundwasserentnahme in Rom und nahegelegene Metro-Bauarbeiten verursacht wird. Studien zeigen, dass die Südseite schneller absinkt als die Nordseite, was die bestehende Neigung durch Erdbebenschäden verschärft. Konservatoren überwachen die Absenkung mit GPS-Sensoren und Neigungsmessern. Zusätzliche Bedenken umfassen Fahrzeugvibrationen von nahegelegenen Straßen, durch Verschmutzung verursachte Steinerosion und das kumulative Gewicht von über 6 Millionen jährlichen Besuchern.",
          nl: "Het Colosseum wordt bedreigd door verzakking veroorzaakt door overmatige grondwaterwinning in Rome en nabije metroconstructie. Studies tonen aan dat de zuidkant sneller zakt dan de noordkant, wat de bestaande helling door aardbeving schade verergert. Conservatoren monitoren verzakking met behulp van GPS-sensoren en hellingsmeters. Aanvullende zorgen omvatten voertuigtrillingen van nabije wegen, door vervuiling veroorzaakte steenerosie en het cumulatieve gewicht van 6+ miljoen jaarlijkse bezoekers."
        }
      },
      {
        question: {
          en: "What happened to the bronze fittings and decorations?",
          es: "¿Qué pasó con los accesorios y decoraciones de bronce?",
          de: "Was geschah mit den Bronzebeschlägen und -dekorationen?",
          nl: "Wat gebeurde er met de bronzen fittingen en decoraties?"
        },
        options: [
          { en: "They remain intact today", es: "Permanecen intactos hoy", de: "Sie bleiben heute intakt", nl: "Ze blijven vandaag intact" },
          { en: "Melted down during medieval times for reuse", es: "Fundidos durante tiempos medievales para reutilización", de: "Während des Mittelalters für Wiederverwendung eingeschmolzen", nl: "Omgesmolten tijdens de Middeleeuwen voor hergebruik" },
          { en: "Stolen by invading armies only", es: "Robados solo por ejércitos invasores", de: "Nur von eindringenden Armeen gestohlen", nl: "Alleen gestolen door binnenvallende legers" },
          { en: "Donated to churches voluntarily", es: "Donados voluntariamente a iglesias", de: "Freiwillig an Kirchen gespendet", nl: "Vrijwillig gedoneerd aan kerken" }
        ],
        correct: 1,
        explanation: {
          en: "Virtually all bronze decorations, statues, clamps, and architectural fittings were systematically removed and melted down during medieval times. The metal was valuable for weapons, church bells, and new construction. The Barberini family notably melted bronze roof beams from the Pantheon for St. Peter's Basilica, epitomizing this practice. The distinctive holes throughout the Colosseum mark where bronze and iron clamps once secured stones, creating the pockmarked appearance visible today.",
          es: "Prácticamente todas las decoraciones de bronce, estatuas, abrazaderas y accesorios arquitectónicos fueron sistemáticamente removidos y fundidos durante tiempos medievales. El metal era valioso para armas, campanas de iglesia y nueva construcción. La familia Barberini notablemente fundió vigas de techo de bronce del Panteón para la Basílica de San Pedro, epitomizando esta práctica. Los agujeros distintivos en todo el Coliseo marcan donde abrazaderas de bronce y hierro una vez aseguraban piedras, creando la apariencia marcada visible hoy.",
          de: "Praktisch alle Bronzedekorationen, Statuen, Klammern und architektonischen Beschläge wurden während des Mittelalters systematisch entfernt und eingeschmolzen. Das Metall war wertvoll für Waffen, Kirchenglocken und Neubauten. Die Familie Barberini schmolz bekanntlich Bronzedachbalken vom Pantheon für den Petersdom ein, was diese Praxis verkörpert. Die markanten Löcher im gesamten Kolosseum markieren, wo Bronze- und Eisenklammern einst Steine sicherten, und schaffen das heute sichtbare narbige Aussehen.",
          nl: "Vrijwel alle bronzen decoraties, standbeelden, klemmen en architectonische fittingen werden systematisch verwijderd en omgesmolten tijdens de Middeleeuwen. Het metaal was waardevol voor wapens, kerkklokken en nieuwe constructie. De Barberini-familie smolt opmerkelijk genoeg bronzen dakbalken van het Pantheon om voor de Sint-Pietersbasiliek, wat deze praktijk belichaamde. De onderscheidende gaten door het hele Colosseum markeren waar bronzen en ijzeren klemmen ooit stenen bevestigden, wat het zichtbare pokdalige uiterlijk van vandaag creëert."
        }
      },
      {
        question: {
          en: "What innovative crowd safety feature did the Colosseum employ?",
          es: "¿Qué característica innovadora de seguridad de multitudes empleó el Coliseo?",
          de: "Welches innovative Menschensicherheitsmerkmal setzte das Kolosseum ein?",
          nl: "Welke innovatieve menigteveiligheidsfunctie gebruikte het Colosseum?"
        },
        options: [
          { en: "Emergency helicopter landing pad", es: "Plataforma de aterrizaje de helicópteros de emergencia", de: "Not-Hubschrauber-Landeplatz", nl: "Noodhelikopterlandingsplaats" },
          { en: "Multiple exits, wide corridors, and class-segregated sections", es: "Múltiples salidas, pasillos anchos y secciones segregadas por clase", de: "Mehrere Ausgänge, breite Korridore und klassensegregierte Abschnitte", nl: "Meerdere uitgangen, brede gangen en klasse-gescheiden secties" },
          { en: "Only one main entrance for control", es: "Solo una entrada principal para control", de: "Nur ein Haupteingang zur Kontrolle", nl: "Alleen een hoofdingang voor controle" },
          { en: "No safety features existed", es: "No existían características de seguridad", de: "Es gab keine Sicherheitsmerkmale", nl: "Er bestonden geen veiligheidskenmerken" }
        ],
        correct: 1,
        explanation: {
          en: "The Colosseum pioneered modern crowd management principles still used today. Its 80 entrances (including 76 public vomitoria), wide radial corridors, multiple concentric circulation rings, and class-segregated seating prevented crushing and enabled rapid evacuation. The design allowed the entire audience to exit in approximately 5-10 minutes. Class segregation, while socially divisive, also distributed crowds and prevented bottlenecks. This engineering feat influenced stadium design for two millennia.",
          es: "El Coliseo fue pionero en principios modernos de gestión de multitudes aún usados hoy. Sus 80 entradas (incluyendo 76 vomitoria públicos), amplios pasillos radiales, múltiples anillos de circulación concéntricos y asientos segregados por clase previnieron aplastamiento y permitieron evacuación rápida. El diseño permitió que toda la audiencia saliera en aproximadamente 5-10 minutos. La segregación de clases, aunque socialmente divisiva, también distribuyó multitudes y previno cuellos de botella. Esta hazaña de ingeniería influyó en el diseño de estadios durante dos milenios.",
          de: "Das Kolosseum war Vorreiter moderner Menschenmanagementprinzipien, die heute noch verwendet werden. Seine 80 Eingänge (einschließlich 76 öffentlicher Vomitoria), breite Radialkorridore, mehrere konzentrische Zirkulationsringe und klassensegregierte Sitzplätze verhinderten Zerquetschung und ermöglichten schnelle Evakuierung. Das Design ermöglichte es dem gesamten Publikum, in etwa 5-10 Minuten zu verlassen. Klassensegregation, obwohl sozial spaltend, verteilte auch Menschenmengen und verhinderte Engpässe. Diese technische Meisterleistung beeinflusste das Stadiondesign für zwei Jahrtausende.",
          nl: "Het Colosseum was baanbrekend voor moderne publieksbeheerprincipes die vandaag nog steeds worden gebruikt. Zijn 80 ingangen (waaronder 76 openbare vomitoria), brede radiale gangen, meerdere concentrische circulatieringen en klasse-gescheiden zitplaatsen voorkwamen verdrukking en maakten snelle evacuatie mogelijk. Het ontwerp stelde het gehele publiek in staat om in ongeveer 5-10 minuten te vertrekken. Klassensegregatie, hoewel sociaal verdeeld, distribueerde ook menigten en voorkwam knelpunten. Deze technische prestatie beïnvloedde stadionontwerp gedurende twee millennia."
        }
      },
      {
        question: {
          en: "What architectural innovation allowed the Colosseum to be free-standing?",
          es: "¿Qué innovación arquitectónica permitió que el Coliseo fuera independiente?",
          de: "Welche architektonische Innovation ermöglichte es dem Kolosseum, freistehend zu sein?",
          nl: "Welke architectonische innovatie maakte het mogelijk dat het Colosseum vrijstaand was?"
        },
        options: [
          { en: "It was built into a hillside like earlier amphitheaters", es: "Fue construido en una ladera como anfiteatros anteriores", de: "Es wurde wie frühere Amphitheater in einen Hügel gebaut", nl: "Het werd in een heuvel gebouwd zoals eerdere amfitheaters" },
          { en: "Self-supporting concrete and arch construction", es: "Construcción autoportante de concreto y arco", de: "Selbsttragende Beton- und Bogenkonstruktion", nl: "Zelfdragende beton- en boogconstructie" },
          { en: "Steel frame support", es: "Soporte de marco de acero", de: "Stahlrahmenstütze", nl: "Stalen frameondersteuning" },
          { en: "Wooden scaffolding remains inside", es: "Andamios de madera permanecen dentro", de: "Holzgerüste bleiben innen", nl: "Houten steigers blijven binnen" }
        ],
        correct: 1,
        explanation: {
          en: "Unlike earlier amphitheaters built into hillsides for natural support, the Colosseum stands free-standing through Roman mastery of arch and vault construction combined with concrete. The radial load-bearing walls, concentric rings of arches, and Roman concrete (opus caementicium) created a self-supporting structure. This innovation eliminated the need for natural terrain support, allowing construction anywhere and establishing the architectural template for modern stadiums. The structural principles - compression forces channeled through arches - remain sound engineering today.",
          es: "A diferencia de anfiteatros anteriores construidos en laderas para soporte natural, el Coliseo se mantiene independiente mediante el dominio romano de construcción de arco y bóveda combinado con concreto. Los muros radiales de carga, anillos concéntricos de arcos y concreto romano (opus caementicium) crearon una estructura autoportante. Esta innovación eliminó la necesidad de soporte de terreno natural, permitiendo construcción en cualquier lugar y estableciendo la plantilla arquitectónica para estadios modernos. Los principios estructurales - fuerzas de compresión canalizadas a través de arcos - permanecen como ingeniería sólida hoy.",
          de: "Im Gegensatz zu früheren Amphitheatern, die zur natürlichen Unterstützung in Hügel gebaut wurden, steht das Kolosseum durch römische Meisterschaft in Bogen- und Gewölbekonstruktion kombiniert mit Beton frei. Die radialen tragenden Wände, konzentrischen Bogenringe und römischer Beton (Opus Caementicium) schufen eine selbsttragende Struktur. Diese Innovation beseitigte die Notwendigkeit für natürliche Geländeunterstützung, ermöglichte Bau überall und etablierte die architektonische Vorlage für moderne Stadien. Die strukturellen Prinzipien - Kompressionskräfte durch Bögen geleitet - bleiben heute solide Technik.",
          nl: "In tegenstelling tot eerdere amfitheaters die in heuvels waren gebouwd voor natuurlijke ondersteuning, staat het Colosseum vrijstaand door Romeinse beheersing van boog- en gewelfconstructie gecombineerd met beton. De radiale dragende muren, concentrische bogenringen en Romeins beton (opus caementicium) creëerden een zelfdragende structuur. Deze innovatie elimineerde de noodzaak voor natuurlijke terreinondersteuning, waardoor overal gebouwd kon worden en de architectonische sjabloon voor moderne stadions werd vastgesteld. De structurele principes - compressiekrachten geleid door bogen - blijven vandaag solide engineering."
        }
      },
      {
        question: {
          en: "What tribute is the Colosseum linked to in a medieval prophecy?",
          es: "¿A qué tributo está vinculado el Coliseo en una profecía medieval?",
          de: "Mit welchem Tribut ist das Kolosseum in einer mittelalterlichen Prophezeiung verbunden?",
          nl: "Aan welk eerbetoon is het Colosseum gekoppeld in een middeleeuwse profetie?"
        },
        options: [
          { en: "As long as the Colosseum stands, Rome shall stand", es: "Mientras el Coliseo permanezca, Roma permanecerá", de: "Solange das Kolosseum steht, wird Rom bestehen", nl: "Zolang het Colosseum staat, zal Rome bestaan" },
          { en: "When the Colosseum falls, a new empire rises", es: "Cuando el Coliseo caiga, un nuevo imperio surgirá", de: "Wenn das Kolosseum fällt, erhebt sich ein neues Reich", nl: "Wanneer het Colosseum valt, rijst een nieuw rijk op" },
          { en: "The Colosseum predicts weather patterns", es: "El Coliseo predice patrones climáticos", de: "Das Kolosseum sagt Wettermuster voraus", nl: "Het Colosseum voorspelt weerspatronen" },
          { en: "No prophecy exists", es: "No existe profecía", de: "Es gibt keine Prophezeiung", nl: "Er bestaat geen profetie" }
        ],
        correct: 0,
        explanation: {
          en: "The 8th-century Anglo-Saxon monk Venerable Bede wrote: 'While stands the Coliseum, Rome shall stand; When falls the Coliseum, Rome shall fall; And when Rome falls—the World.' This prophecy elevated the structure from entertainment venue to symbol of Rome's eternal nature. The quote, later romanticized by Lord Byron, influenced preservation efforts. This cultural significance helped save the Colosseum when it was threatened with demolition, transforming it into an enduring icon of Roman civilization.",
          es: "El monje anglosajón del siglo VIII Venerable Beda escribió: 'Mientras el Coliseo permanezca, Roma permanecerá; Cuando el Coliseo caiga, Roma caerá; Y cuando Roma caiga—el Mundo.' Esta profecía elevó la estructura de lugar de entretenimiento a símbolo de la naturaleza eterna de Roma. La cita, posteriormente romantizada por Lord Byron, influyó en esfuerzos de preservación. Esta significancia cultural ayudó a salvar el Coliseo cuando fue amenazado con demolición, transformándolo en un ícono perdurable de la civilización romana.",
          de: "Der angelsächsische Mönch Beda Venerabilis aus dem 8. Jahrhundert schrieb: 'Solange das Kolosseum steht, wird Rom bestehen; Wenn das Kolosseum fällt, wird Rom fallen; Und wenn Rom fällt - die Welt.' Diese Prophezeiung erhob die Struktur von einer Unterhaltungsstätte zum Symbol der ewigen Natur Roms. Das Zitat, später von Lord Byron romantisiert, beeinflusste Erhaltungsbemühungen. Diese kulturelle Bedeutung half, das Kolosseum zu retten, als es mit Abriss bedroht war, und verwandelte es in ein dauerhaftes Symbol der römischen Zivilisation.",
          nl: "De 8e-eeuwse Angelsaksische monnik Beda Venerabilis schreef: 'Zolang het Colosseum staat, zal Rome bestaan; Wanneer het Colosseum valt, zal Rome vallen; En wanneer Rome valt—de Wereld.' Deze profetie verhief de structuur van entertainmentlocatie tot symbool van Rome's eeuwige aard. Het citaat, later geromantiseerd door Lord Byron, beïnvloedde behoudinspanningen. Deze culturele betekenis hielp het Colosseum te redden toen het werd bedreigd met sloop, en transformeerde het in een blijvend icoon van de Romeinse beschaving."
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