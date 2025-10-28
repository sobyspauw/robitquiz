// Quiz Level 7: Famous buildings - Petra - Architecture Details
(function() {
  const level7 = {
    name: {
      en: "Architecture Details",
      es: "Detalles de Arquitectura",
      de: "Architekturdetails",
      nl: "Architectuurdetails"
    },
    questions: [
      {
        question: {
          en: "How many columns does the Treasury (Al-Khazneh) facade have?",
          es: "¿Cu\u00e1ntas columnas tiene la fachada del Tesoro (Al-Khazneh)?",
          de: "Wie viele S\u00e4ulen hat die Fassade der Schatzkammer (Al-Khazneh)?",
          nl: "Hoeveel kolommen heeft de gevel van de Schatkamer (Al-Khazneh)?"
        },
        options: [
          { en: "4 columns", es: "4 columnas", de: "4 S\u00e4ulen", nl: "4 kolommen" },
          { en: "6 columns", es: "6 columnas", de: "6 S\u00e4ulen", nl: "6 kolommen" },
          { en: "8 columns", es: "8 columnas", de: "8 S\u00e4ulen", nl: "8 kolommen" },
          { en: "10 columns", es: "10 columnas", de: "10 S\u00e4ulen", nl: "10 kolommen" },
        ],
        correct: 1,
        explanation: {
          en: "The Treasury facade features 6 Corinthian columns arranged in two tiers, creating its iconic appearance that blends Nabataean and Hellenistic architectural styles.",
          es: "La fachada del Tesoro presenta 6 columnas corintias dispuestas en dos niveles, creando su apariencia ic\u00f3nica que combina estilos arquitect\u00f3nicos nabateos y helen\u00edsticos.",
          de: "Die Fassade der Schatzkammer verf\u00fcgt \u00fcber 6 korinthische S\u00e4ulen, die in zwei Ebenen angeordnet sind und ihr ikonisches Erscheinungsbild schaffen, das nabat\u00e4ische und hellenistische Baustile verbindet.",
          nl: "De gevel van de Schatkamer heeft 6 Korinthische kolommen gerangschikt in twee lagen, wat het iconische uiterlijk cre\u00ebert dat Nabatese en Hellenistische architectuurstijlen combineert."
        }
      },
      {
        question: {
          en: "What is the width of the Monastery (Ad-Deir)?",
          es: "¿Cu\u00e1l es el ancho del Monasterio (Ad-Deir)?",
          de: "Was ist die Breite des Klosters (Ad-Deir)?",
          nl: "Wat is de breedte van het Klooster (Ad-Deir)?"
        },
        options: [
          { en: "30 meters wide", es: "30 metros de ancho", de: "30 Meter breit", nl: "30 meter breed" },
          { en: "40 meters wide", es: "40 metros de ancho", de: "40 Meter breit", nl: "40 meter breed" },
          { en: "50 meters wide", es: "50 metros de ancho", de: "50 Meter breit", nl: "50 meter breed" },
          { en: "60 meters wide", es: "60 metros de ancho", de: "60 Meter breit", nl: "60 meter breed" },
        ],
        correct: 2,
        explanation: {
          en: "The Monastery is approximately 50 meters wide and 45 meters high, making it larger than the Treasury and one of Petra's most impressive monuments.",
          es: "El Monasterio tiene aproximadamente 50 metros de ancho y 45 metros de alto, haci\u00e9ndolo m\u00e1s grande que el Tesoro y uno de los monumentos m\u00e1s impresionantes de Petra.",
          de: "Das Kloster ist etwa 50 Meter breit und 45 Meter hoch, was es gr\u00f6\u00dfer als die Schatzkammer und zu einem der beeindruckendsten Monumente Petras macht.",
          nl: "Het Klooster is ongeveer 50 meter breed en 45 meter hoog, waardoor het groter is dan de Schatkamer en een van de meest indrukwekkende monumenten van Petra."
        }
      },
      {
        question: {
          en: "How many rock-cut tombs are there in Petra?",
          es: "¿Cu\u00e1ntas tumbas excavadas en roca hay en Petra?",
          de: "Wie viele in Fels gehauene Gr\u00e4ber gibt es in Petra?",
          nl: "Hoeveel uit rots gehouwen graven zijn er in Petra?"
        },
        options: [
          { en: "Over 300", es: "M\u00e1s de 300", de: "\u00dcber 300", nl: "Meer dan 300" },
          { en: "Over 450", es: "M\u00e1s de 450", de: "\u00dcber 450", nl: "Meer dan 450" },
          { en: "Over 600", es: "M\u00e1s de 600", de: "\u00dcber 600", nl: "Meer dan 600" },
          { en: "Over 800", es: "M\u00e1s de 800", de: "\u00dcber 800", nl: "Meer dan 800" },
        ],
        correct: 2,
        explanation: {
          en: "Petra contains over 600 rock-cut tombs of varying sizes and elaborate designs, demonstrating the importance of funerary practices in Nabataean culture.",
          es: "Petra contiene m\u00e1s de 600 tumbas excavadas en roca de varios tama\u00f1os y dise\u00f1os elaborados, demostrando la importancia de las pr\u00e1cticas funerarias en la cultura nabatea.",
          de: "Petra enth\u00e4lt \u00fcber 600 in Fels gehauene Gr\u00e4ber verschiedener Gr\u00f6\u00dfen und aufwendiger Designs, was die Bedeutung der Bestattungspraktiken in der nabat\u00e4ischen Kultur zeigt.",
          nl: "Petra bevat meer dan 600 uit rots gehouwen graven van verschillende groottes en uitgebreide ontwerpen, wat het belang van begrafenispraktijken in de Nabatese cultuur aantoont."
        }
      },
      {
        question: {
          en: "What architectural influences are visible in Petra's facades?",
          es: "¿Qu\u00e9 influencias arquitect\u00f3nicas son visibles en las fachadas de Petra?",
          de: "Welche architektonischen Einfl\u00fcsse sind in Petras Fassaden sichtbar?",
          nl: "Welke architectonische invloeden zijn zichtbaar in de gevels van Petra?"
        },
        options: [
          { en: "Only Nabataean", es: "Solo nabatea", de: "Nur nabat\u00e4isch", nl: "Alleen Nabatees" },
          { en: "Assyrian and Egyptian only", es: "Solo asiria y egipcia", de: "Nur assyrisch und \u00e4gyptisch", nl: "Alleen Assyrisch en Egyptisch" },
          { en: "Assyrian, Egyptian, Greek, and Roman", es: "Asiria, egipcia, griega y romana", de: "Assyrisch, \u00e4gyptisch, griechisch und r\u00f6misch", nl: "Assyrisch, Egyptisch, Grieks en Romeins" },
          { en: "Persian and Byzantine", es: "Persa y bizantina", de: "Persisch und byzantinisch", nl: "Perzisch en Byzantijns" },
        ],
        correct: 2,
        explanation: {
          en: "Petra's architecture shows a fascinating blend of Assyrian, Egyptian, Greek (Hellenistic), and Roman influences, reflecting the Nabataeans' position at cultural crossroads.",
          es: "La arquitectura de Petra muestra una fascinante mezcla de influencias asirias, egipcias, griegas (helen\u00edsticas) y romanas, reflejando la posici\u00f3n de los nabateos en encrucijadas culturales.",
          de: "Petras Architektur zeigt eine faszinierende Mischung assyrischer, \u00e4gyptischer, griechischer (hellenistischer) und r\u00f6mischer Einfl\u00fcsse, die die Position der Nabat\u00e4er an kulturellen Kreuzungen widerspiegelt.",
          nl: "De architectuur van Petra toont een fascinerende mix van Assyrische, Egyptische, Griekse (Hellenistische) en Romeinse invloeden, wat de positie van de Nabatee\u00ebrs op culturele kruispunten weerspiegelt."
        }
      },
      {
        question: {
          en: "What is the seating capacity of Petra's Roman-style theater?",
          es: "¿Cu\u00e1l es la capacidad de asientos del teatro de estilo romano de Petra?",
          de: "Wie viele Sitzpl\u00e4tze hat das r\u00f6mische Theater von Petra?",
          nl: "Wat is de zitcapaciteit van het Romeins theater van Petra?"
        },
        options: [
          { en: "3,000 seats", es: "3,000 asientos", de: "3.000 Sitzpl\u00e4tze", nl: "3.000 zitplaatsen" },
          { en: "5,500 seats", es: "5,500 asientos", de: "5.500 Sitzpl\u00e4tze", nl: "5.500 zitplaatsen" },
          { en: "8,500 seats", es: "8,500 asientos", de: "8.500 Sitzpl\u00e4tze", nl: "8.500 zitplaatsen" },
          { en: "12,000 seats", es: "12,000 asientos", de: "12.000 Sitzpl\u00e4tze", nl: "12.000 zitplaatsen" },
        ],
        correct: 2,
        explanation: {
          en: "The theater in Petra could accommodate approximately 8,500 spectators and was carved directly into the hillside, demonstrating advanced engineering capabilities.",
          es: "El teatro en Petra pod\u00eda acomodar aproximadamente 8,500 espectadores y fue tallado directamente en la ladera, demostrando capacidades de ingenier\u00eda avanzadas.",
          de: "Das Theater in Petra konnte etwa 8.500 Zuschauer aufnehmen und wurde direkt in den Berghang gehauen, was fortgeschrittene technische F\u00e4higkeiten zeigt.",
          nl: "Het theater in Petra kon ongeveer 8.500 toeschouwers herbergen en werd rechtstreeks in de heuvel uitgehouwen, wat geavanceerde technische capaciteiten aantoont."
        }
      },
      {
        question: {
          en: "Which tomb is known for its colorful striped sandstone patterns?",
          es: "¿Qu\u00e9 tumba es conocida por sus patrones de arenisca rayada de colores?",
          de: "Welches Grab ist f\u00fcr seine farbigen gestreiften Sandsteinmuster bekannt?",
          nl: "Welk graf staat bekend om zijn kleurrijke gestreepte zandsteenpatronen?"
        },
        options: [
          { en: "The Urn Tomb", es: "La Tumba de la Urna", de: "Das Urnengrab", nl: "Het Urnengraf" },
          { en: "The Silk Tomb", es: "La Tumba de la Seda", de: "Das Seidengrab", nl: "Het Zijdegraf" },
          { en: "The Corinthian Tomb", es: "La Tumba Corintia", de: "Das Korinthische Grab", nl: "Het Korinthische Graf" },
          { en: "The Palace Tomb", es: "La Tumba del Palacio", de: "Das Palastgrab", nl: "Het Paleisgraf" },
        ],
        correct: 1,
        explanation: {
          en: "The Silk Tomb is famous for its stunning multicolored sandstone patterns that resemble flowing silk fabric, created by natural mineral variations in the rock.",
          es: "La Tumba de la Seda es famosa por sus impresionantes patrones de arenisca multicolores que se asemejan a tela de seda fluyendo, creados por variaciones minerales naturales en la roca.",
          de: "Das Seidengrab ist ber\u00fchmt f\u00fcr seine atemberaubenden mehrfarbigen Sandsteinmuster, die flie\u00dfendem Seidenstoff \u00e4hneln und durch nat\u00fcrliche Mineralvariationen im Gestein entstanden sind.",
          nl: "Het Zijdegraf is beroemd om zijn prachtige meerkleurige zandsteenpatronen die lijken op vloeiende zijden stof, gecre\u00eberd door natuurlijke mineraalvariaties in het gesteente."
        }
      },
      {
        question: {
          en: "What is Qasr al-Bint?",
          es: "¿Qu\u00e9 es Qasr al-Bint?",
          de: "Was ist Qasr al-Bint?",
          nl: "Wat is Qasr al-Bint?"
        },
        options: [
          { en: "A royal tomb", es: "Una tumba real", de: "Ein k\u00f6nigliches Grab", nl: "Een koninklijk graf" },
          { en: "A Nabataean temple", es: "Un templo nabateo", de: "Ein nabat\u00e4ischer Tempel", nl: "Een Nabatese tempel" },
          { en: "A water cistern", es: "Una cisterna de agua", de: "Eine Wasserzisterne", nl: "Een waterreservoir" },
          { en: "A fortress", es: "Una fortaleza", de: "Eine Festung", nl: "Een fort" },
        ],
        correct: 1,
        explanation: {
          en: "Qasr al-Bint (Palace of Pharaoh's Daughter) is one of the few freestanding structures in Petra, serving as an important Nabataean temple dedicated to their deities.",
          es: "Qasr al-Bint (Palacio de la Hija del Fara\u00f3n) es una de las pocas estructuras independientes en Petra, sirviendo como un importante templo nabateo dedicado a sus deidades.",
          de: "Qasr al-Bint (Palast der Tochter des Pharaos) ist eines der wenigen freistehenden Bauwerke in Petra und diente als wichtiger nabat\u00e4ischer Tempel, der ihren Gottheiten gewidmet war.",
          nl: "Qasr al-Bint (Paleis van de Dochter van Farao) is een van de weinige vrijstaande structuren in Petra en diende als een belangrijke Nabatese tempel gewijd aan hun goden."
        }
      },
      {
        question: {
          en: "What characterizes the Street of Facades?",
          es: "¿Qu\u00e9 caracteriza la Calle de las Fachadas?",
          de: "Was kennzeichnet die Stra\u00dfe der Fassaden?",
          nl: "Wat kenmerkt de Straat van de Gevels?"
        },
        options: [
          { en: "A single large tomb", es: "Una sola tumba grande", de: "Ein einzelnes gro\u00dfes Grab", nl: "Een enkel groot graf" },
          { en: "Rows of tomb facades carved into both cliff sides", es: "Filas de fachadas de tumbas talladas en ambos lados del acantilado", de: "Reihen von Grabfassaden in beide Felsw\u00e4nde gehauen", nl: "Rijen grafgevels uitgehouwen in beide rotswanden" },
          { en: "Market stalls", es: "Puestos de mercado", de: "Marktst\u00e4nde", nl: "Marktkramen" },
          { en: "Roman columns", es: "Columnas romanas", de: "R\u00f6mische S\u00e4ulen", nl: "Romeinse kolommen" },
        ],
        correct: 1,
        explanation: {
          en: "The Street of Facades features dozens of tomb facades carved into both sides of a canyon, creating an impressive corridor of funerary monuments from the Nabataean period.",
          es: "La Calle de las Fachadas presenta docenas de fachadas de tumbas talladas en ambos lados de un ca\u00f1\u00f3n, creando un impresionante corredor de monumentos funerarios del per\u00edodo nabateo.",
          de: "Die Stra\u00dfe der Fassaden zeigt Dutzende von Grabfassaden, die in beide Seiten einer Schlucht gehauen sind und einen beeindruckenden Korridor von Grabmonumenten aus der nabat\u00e4ischen Zeit bilden.",
          nl: "De Straat van de Gevels heeft tientallen grafgevels uitgehouwen in beide zijden van een kloof, wat een indrukwekkende corridor van begrafenismonumenten uit de Nabatese periode cre\u00ebert."
        }
      },
      {
        question: {
          en: "What was the primary purpose of the Royal Tombs?",
          es: "¿Cu\u00e1l era el prop\u00f3sito principal de las Tumbas Reales?",
          de: "Was war der Hauptzweck der K\u00f6nigsgr\u00e4ber?",
          nl: "Wat was het primaire doel van de Koninklijke Graven?"
        },
        options: [
          { en: "Residential palaces", es: "Palacios residenciales", de: "Wohnpal\u00e4ste", nl: "Woonpaleizen" },
          { en: "Elite burial chambers", es: "C\u00e1maras funerarias de elite", de: "Elite-Grabkammern", nl: "Elite-grafkamers" },
          { en: "Temples for worship", es: "Templos para adoraci\u00f3n", de: "Tempel f\u00fcr die Anbetung", nl: "Tempels voor aanbidding" },
          { en: "Military fortifications", es: "Fortificaciones militares", de: "Milit\u00e4rische Befestigungen", nl: "Militaire versterkingen" },
        ],
        correct: 1,
        explanation: {
          en: "The Royal Tombs served as elaborate burial chambers for Nabataean elite and royalty, featuring grand facades and interior chambers designed for funerary rituals and commemorations.",
          es: "Las Tumbas Reales serv\u00edan como c\u00e1maras funerarias elaboradas para la elite nabatea y la realeza, con grandes fachadas y c\u00e1maras interiores dise\u00f1adas para rituales funerarios y conmemoraciones.",
          de: "Die K\u00f6nigsgr\u00e4ber dienten als aufwendige Grabkammern f\u00fcr die nabat\u00e4ische Elite und das K\u00f6nigtum, mit gro\u00dfartigen Fassaden und Innenkammern f\u00fcr Bestattungsrituale und Gedenkfeiern.",
          nl: "De Koninklijke Graven dienden als uitgebreide grafkamers voor de Nabatese elite en royalty, met grote gevels en binnenkamers ontworpen voor begrafenisrituelen en herdenkingen."
        }
      },
      {
        question: {
          en: "What is unique about the Obelisk Tomb?",
          es: "¿Qu\u00e9 es \u00fanico sobre la Tumba del Obelisco?",
          de: "Was ist einzigartig am Obeliskengrab?",
          nl: "Wat is uniek aan het Obeliskengraf?"
        },
        options: [
          { en: "It has four obelisks carved above the entrance", es: "Tiene cuatro obeliscos tallados sobre la entrada", de: "Es hat vier Obelisken \u00fcber dem Eingang gemeisselt", nl: "Het heeft vier obelisken boven de ingang uitgehouwen" },
          { en: "It is the largest tomb", es: "Es la tumba m\u00e1s grande", de: "Es ist das gr\u00f6\u00dfte Grab", nl: "Het is het grootste graf" },
          { en: "It contains mosaics", es: "Contiene mosaicos", de: "Es enth\u00e4lt Mosaiken", nl: "Het bevat mozaïeken" },
          { en: "It is painted", es: "Est\u00e1 pintada", de: "Es ist bemalt", nl: "Het is geschilderd" },
        ],
        correct: 0,
        explanation: {
          en: "The Obelisk Tomb features four distinctive obelisks carved above its entrance, representing Egyptian influence and likely commemorating the four individuals buried within.",
          es: "La Tumba del Obelisco presenta cuatro obeliscos distintivos tallados sobre su entrada, representando influencia egipcia y probablemente conmemorando a los cuatro individuos enterrados dentro.",
          de: "Das Obeliskengrab verf\u00fcgt \u00fcber vier markante Obelisken, die \u00fcber seinem Eingang gemeisselt sind und \u00e4gyptischen Einfluss repr\u00e4sentieren und wahrscheinlich die vier darin begrabenen Personen gedenken.",
          nl: "Het Obeliskengraf heeft vier kenmerkende obelisken boven zijn ingang uitgehouwen, wat Egyptische invloed vertegenwoordigt en waarschijnlijk de vier personen herdenkt die erin begraven zijn."
        }
      },
      {
        question: {
          en: "What is a triclinium in Nabataean architecture?",
          es: "¿Qu\u00e9 es un triclinium en la arquitectura nabatea?",
          de: "Was ist ein Triclinium in der nabat\u00e4ischen Architektur?",
          nl: "Wat is een triclinium in de Nabatese architectuur?"
        },
        options: [
          { en: "A water channel", es: "Un canal de agua", de: "Ein Wasserkanal", nl: "Een waterkanaal" },
          { en: "A banquet hall for funeral feasts", es: "Un sal\u00f3n de banquetes para festines f\u00fanebres", de: "Eine Banketthalle f\u00fcr Totenmahle", nl: "Een banketzaal voor begrafenismaaltijden" },
          { en: "A temple altar", es: "Un altar de templo", de: "Ein Tempelal tar", nl: "Een tempelaltaar" },
          { en: "A defensive tower", es: "Una torre defensiva", de: "Ein Verteidigungsturm", nl: "Een verdedigingstoren" },
        ],
        correct: 1,
        explanation: {
          en: "A triclinium was a banquet hall used for funeral feasts and commemorative meals, typically featuring three benches or couches around the walls where guests reclined during ceremonies.",
          es: "Un triclinium era un sal\u00f3n de banquetes usado para festines f\u00fanebres y comidas conmemorativas, t\u00edpicamente con tres bancos o lechos alrededor de las paredes donde los invitados se reclinaban durante ceremonias.",
          de: "Ein Triclinium war eine Banketthalle f\u00fcr Totenmahle und Gedenkmahlzeiten, typischerweise mit drei B\u00e4nken oder Liegen um die W\u00e4nde, auf denen G\u00e4ste w\u00e4hrend Zeremonien lagen.",
          nl: "Een triclinium was een banketzaal gebruikt voor begrafenismaaltijden en herdenkingsmaaltijden, typisch met drie banken of rustbedden rond de muren waar gasten tijdens ceremonies lagen."
        }
      },
      {
        question: {
          en: "How were interior chambers of tombs typically designed?",
          es: "¿C\u00f3mo se dise\u00f1aban t\u00edpicamente las c\u00e1maras interiores de las tumbas?",
          de: "Wie wurden Innenkammern von Gr\u00e4bern typischerweise gestaltet?",
          nl: "Hoe werden binnenkamers van graven typisch ontworpen?"
        },
        options: [
          { en: "Simple single rooms", es: "Habitaciones simples individuales", de: "Einfache Einzelr\u00e4ume", nl: "Eenvoudige enkele kamers" },
          { en: "Multiple chambers with burial niches (loculi)", es: "M\u00faltiples c\u00e1maras con nichos funerarios (loculi)", de: "Mehrere Kammern mit Grabnischen (Loculi)", nl: "Meerdere kamers met begrafenisnissen (loculi)" },
          { en: "Underground tunnels", es: "T\u00faneles subterr\u00e1neos", de: "Unterirdische Tunnel", nl: "Ondergrondse tunnels" },
          { en: "Open courtyards", es: "Patios abiertos", de: "Offene Innenh\u00f6fe", nl: "Open binnenplaatsen" },
        ],
        correct: 1,
        explanation: {
          en: "Tomb interiors typically featured multiple chambers connected by passages, with burial niches (loculi) carved into the walls for placing the deceased and grave goods.",
          es: "Los interiores de las tumbas t\u00edpicamente presentaban m\u00faltiples c\u00e1maras conectadas por pasajes, con nichos funerarios (loculi) tallados en las paredes para colocar a los difuntos y bienes funerarios.",
          de: "Grabinnenr\u00e4ume verf\u00fcgten typischerweise \u00fcber mehrere durch G\u00e4nge verbundene Kammern mit Grabnischen (Loculi), die in die W\u00e4nde gehauen waren, um die Verstorbenen und Grabbeigaben aufzunehmen.",
          nl: "Grafinterieurs hadden typisch meerdere kamers verbonden door gangen, met begrafenisnissen (loculi) uitgehouwen in de muren voor het plaatsen van overledenen en grafgiften."
        }
      },
      {
        question: {
          en: "What remains of the Colonnaded Street in Petra?",
          es: "¿Qu\u00e9 queda de la Calle Columnada en Petra?",
          de: "Was bleibt von der S\u00e4ulenstra\u00dfe in Petra?",
          nl: "Wat blijft er over van de Colonnaded Street in Petra?"
        },
        options: [
          { en: "Nothing remains", es: "Nada queda", de: "Nichts bleibt", nl: "Niets blijft over" },
          { en: "Only the paving stones", es: "Solo las piedras del pavimento", de: "Nur die Pflastersteine", nl: "Alleen de bestrating" },
          { en: "Columns, paving, and architectural fragments", es: "Columnas, pavimento y fragmentos arquitect\u00f3nicos", de: "S\u00e4ulen, Pflaster und Architekturfragmente", nl: "Kolommen, bestrating en architectonische fragmenten" },
          { en: "Complete intact structures", es: "Estructuras completas intactas", de: "Vollst\u00e4ndig intakte Strukturen", nl: "Complete intacte structuren" },
        ],
        correct: 2,
        explanation: {
          en: "The Colonnaded Street retains numerous columns, original paving stones, and architectural fragments, showing it was once a grand Roman-style thoroughfare through Petra's center.",
          es: "La Calle Columnada conserva numerosas columnas, piedras de pavimento originales y fragmentos arquitect\u00f3nicos, mostrando que fue una vez una gran v\u00eda de estilo romano a trav\u00e9s del centro de Petra.",
          de: "Die S\u00e4ulenstra\u00dfe beh\u00e4lt zahlreiche S\u00e4ulen, originale Pflastersteine und Architekturfragmente bei, was zeigt, dass sie einst eine gro\u00dfartige Durchgangsstra\u00dfe im r\u00f6mischen Stil durch Petras Zentrum war.",
          nl: "De Colonnaded Street behoudt talrijke kolommen, originele bestratingsstenen en architectonische fragmenten, wat aantoont dat het ooit een grote Romeinse stijl doorgangsweg door het centrum van Petra was."
        }
      },
      {
        question: {
          en: "What is the Great Temple complex in Petra?",
          es: "¿Qu\u00e9 es el complejo del Gran Templo en Petra?",
          de: "Was ist der Gro\u00dfe Tempelkomplex in Petra?",
          nl: "Wat is het Grote Tempelcomplex in Petra?"
        },
        options: [
          { en: "A small shrine", es: "Un peque\u00f1o santuario", de: "Ein kleiner Schrein", nl: "Een klein heiligdom" },
          { en: "A massive religious complex with multiple structures", es: "Un complejo religioso masivo con m\u00faltiples estructuras", de: "Ein massiver religi\u00f6ser Komplex mit mehreren Strukturen", nl: "Een massief religieus complex met meerdere structuren" },
          { en: "A residential area", es: "Un \u00e1rea residencial", de: "Ein Wohngebiet", nl: "Een woongebied" },
          { en: "A marketplace", es: "Un mercado", de: "Ein Marktplatz", nl: "Een marktplaats" },
        ],
        correct: 1,
        explanation: {
          en: "The Great Temple is a massive complex covering 7,560 square meters, featuring colonnaded porticos, staircases, and a central temple building that may have also served civic functions.",
          es: "El Gran Templo es un complejo masivo que cubre 7,560 metros cuadrados, con p\u00f3rticos columnados, escaleras y un edificio de templo central que puede haber servido tambi\u00e9n funciones c\u00edvicas.",
          de: "Der Gro\u00dfe Tempel ist ein massiver Komplex von 7.560 Quadratmetern mit S\u00e4ulenportiken, Treppen und einem zentralen Tempelgeb\u00e4ude, das m\u00f6glicherweise auch zivile Funktionen hatte.",
          nl: "De Grote Tempel is een massief complex van 7.560 vierkante meter, met colonnade portieken, trappen en een centraal tempelgebouw dat mogelijk ook civiele functies diende."
        }
      },
      {
        question: {
          en: "What is the Temenos Gateway?",
          es: "¿Qu\u00e9 es la Puerta del Temenos?",
          de: "Was ist das Temenos-Tor?",
          nl: "Wat is de Temenos Gateway?"
        },
        options: [
          { en: "The entrance to the Siq", es: "La entrada al Siq", de: "Der Eingang zum Siq", nl: "De ingang tot de Siq" },
          { en: "A monumental entrance to a sacred precinct", es: "Una entrada monumental a un recinto sagrado", de: "Ein monumentaler Eingang zu einem heiligen Bezirk", nl: "Een monumentale ingang tot een heilig gebied" },
          { en: "A water gate", es: "Una puerta de agua", de: "Ein Wassertor", nl: "Een waterpoort" },
          { en: "A city gate", es: "Una puerta de ciudad", de: "Ein Stadttor", nl: "Een stadspoort" },
        ],
        correct: 1,
        explanation: {
          en: "The Temenos Gateway was a monumental triple-arched entrance to the sacred temenos (religious precinct) surrounding Qasr al-Bint temple, demonstrating Nabataean architectural grandeur.",
          es: "La Puerta del Temenos era una entrada monumental de triple arco al temenos sagrado (recinto religioso) que rodeaba el templo Qasr al-Bint, demostrando la grandeza arquitect\u00f3nica nabatea.",
          de: "Das Temenos-Tor war ein monumentaler dreibogiger Eingang zum heiligen Temenos (religi\u00f6sen Bezirk) um den Qasr al-Bint-Tempel, der nabat\u00e4ische architektonische Gro\u00dfartigkeit zeigt.",
          nl: "De Temenos Gateway was een monumentale drievoudige boog ingang tot het heilige temenos (religieus gebied) rond de Qasr al-Bint tempel, wat de Nabatese architectonische grootsheid aantoont."
        }
      },
      {
        question: {
          en: "What is the High Place of Sacrifice?",
          es: "¿Qu\u00e9 es el Alto Lugar del Sacrificio?",
          de: "Was ist der Hohe Opferplatz?",
          nl: "Wat is de Hoge Plaats van Offer?"
        },
        options: [
          { en: "A tomb complex", es: "Un complejo de tumbas", de: "Ein Grabkomplex", nl: "Een grafcomplex" },
          { en: "A mountaintop religious site with altars", es: "Un sitio religioso en la cima de una monta\u00f1a con altares", de: "Eine religi\u00f6se St\u00e4tte auf einem Berggipfel mit Alt\u00e4ren", nl: "Een religieuze plek op een bergtop met altaren" },
          { en: "A defensive position", es: "Una posici\u00f3n defensiva", de: "Eine Verteidigungsstellung", nl: "Een verdedigingspositie" },
          { en: "A water reservoir", es: "Un reservorio de agua", de: "Ein Wasserreservoir", nl: "Een waterreservoir" },
        ],
        correct: 1,
        explanation: {
          en: "The High Place of Sacrifice is a mountaintop religious site featuring altars, offering tables, and ceremonial structures where Nabataeans performed religious rituals and animal sacrifices.",
          es: "El Alto Lugar del Sacrificio es un sitio religioso en la cima de una monta\u00f1a con altares, mesas de ofrendas y estructuras ceremoniales donde los nabateos realizaban rituales religiosos y sacrificios de animales.",
          de: "Der Hohe Opferplatz ist eine religi\u00f6se St\u00e4tte auf einem Berggipfel mit Alt\u00e4ren, Opfertischen und zeremoniellen Strukturen, wo Nabat\u00e4er religi\u00f6se Rituale und Tieropfer durchf\u00fchrten.",
          nl: "De Hoge Plaats van Offer is een religieuze plek op een bergtop met altaren, offeringentafels en ceremoni\u00eble structuren waar Nabatee\u00ebrs religieuze rituelen en dierenoffers uitvoerden."
        }
      },
      {
        question: {
          en: "How do Petra's monuments compare to other rock-cut architecture sites?",
          es: "¿C\u00f3mo se comparan los monumentos de Petra con otros sitios de arquitectura excavada en roca?",
          de: "Wie vergleichen sich Petras Monumente mit anderen in Fels gehauenen Architekturst\u00e4tten?",
          nl: "Hoe verhouden de monumenten van Petra zich tot andere uit rots gehouwen architectuursites?"
        },
        options: [
          { en: "Petra is smaller than most", es: "Petra es m\u00e1s peque\u00f1a que la mayor\u00eda", de: "Petra ist kleiner als die meisten", nl: "Petra is kleiner dan de meeste" },
          { en: "Petra is among the largest and most elaborate rock-cut sites", es: "Petra es uno de los sitios excavados en roca m\u00e1s grandes y elaborados", de: "Petra geh\u00f6rt zu den gr\u00f6\u00dften und aufwendigsten in Fels gehauenen St\u00e4tten", nl: "Petra behoort tot de grootste en meest uitgebreide uit rots gehouwen sites" },
          { en: "Petra has no unique features", es: "Petra no tiene caracter\u00edsticas \u00fanicas", de: "Petra hat keine einzigartigen Merkmale", nl: "Petra heeft geen unieke kenmerken" },
          { en: "Petra is identical to Egyptian sites", es: "Petra es id\u00e9ntica a los sitios egipcios", de: "Petra ist identisch mit \u00e4gyptischen St\u00e4tten", nl: "Petra is identiek aan Egyptische sites" },
        ],
        correct: 1,
        explanation: {
          en: "Petra is considered one of the most impressive rock-cut archaeological sites in the world, featuring over 800 monuments with exceptional artistry, scale, and preservation.",
          es: "Petra es considerada uno de los sitios arqueol\u00f3gicos excavados en roca m\u00e1s impresionantes del mundo, con m\u00e1s de 800 monumentos con arte excepcional, escala y preservaci\u00f3n.",
          de: "Petra gilt als eine der beeindruckendsten in Fels gehauenen arch\u00e4ologischen St\u00e4tten der Welt, mit \u00fcber 800 Monumenten von au\u00dfergew\u00f6hnlicher Kunstfertigkeit, Gr\u00f6\u00dfe und Erhaltung.",
          nl: "Petra wordt beschouwd als een van de meest indrukwekkende uit rots gehouwen archeologische sites ter wereld, met meer dan 800 monumenten met uitzonderlijke kunstzinnigheid, schaal en bewaring."
        }
      },
      {
        question: {
          en: "What decorative elements are common on Petra's facades?",
          es: "¿Qu\u00e9 elementos decorativos son comunes en las fachadas de Petra?",
          de: "Welche dekorativen Elemente sind auf Petras Fassaden h\u00e4ufig?",
          nl: "Welke decoratieve elementen zijn gebruikelijk op de gevels van Petra?"
        },
        options: [
          { en: "Only geometric patterns", es: "Solo patrones geom\u00e9tricos", de: "Nur geometrische Muster", nl: "Alleen geometrische patronen" },
          { en: "Columns, pediments, friezes, and carved capitals", es: "Columnas, frontones, frisos y capiteles tallados", de: "S\u00e4ulen, Giebel, Friese und geschnitzte Kapitelle", nl: "Kolommen, frontons, friezen en gebeeldhouwde kapitelen" },
          { en: "No decorations", es: "Sin decoraciones", de: "Keine Dekorationen", nl: "Geen decoraties" },
          { en: "Only religious symbols", es: "Solo s\u00edmbolos religiosos", de: "Nur religi\u00f6se Symbole", nl: "Alleen religieuze symbolen" },
        ],
        correct: 1,
        explanation: {
          en: "Petra's facades feature rich decorative elements including Corinthian and Doric columns, triangular and broken pediments, elaborate friezes, and intricately carved capitals showing Hellenistic influence.",
          es: "Las fachadas de Petra presentan ricos elementos decorativos incluyendo columnas corintias y d\u00f3ricas, frontones triangulares y rotos, frisos elaborados y capiteles intrincadamente tallados mostrando influencia helen\u00edstica.",
          de: "Petras Fassaden zeigen reiche dekorative Elemente einschlie\u00dflich korinthischer und dorischer S\u00e4ulen, dreieckiger und gebrochener Giebel, aufwendiger Friese und kompliziert geschnitzter Kapitelle mit hellenistischem Einfluss.",
          nl: "De gevels van Petra tonen rijke decoratieve elementen waaronder Korinthische en Dorische kolommen, driehoekige en gebroken frontons, uitgebreide friezen en ingewikkeld gebeeldhouwde kapitelen met Hellenistische invloed."
        }
      },
      {
        question: {
          en: "What structural engineering technique was used in Petra's rock-cut architecture?",
          es: "¿Qu\u00e9 t\u00e9cnica de ingenier\u00eda estructural se us\u00f3 en la arquitectura excavada en roca de Petra?",
          de: "Welche bauliche Ingenieurtech nik wurde in Petras in Fels gehauener Architektur verwendet?",
          nl: "Welke structurele technische techniek werd gebruikt in de uit rots gehouwen architectuur van Petra?"
        },
        options: [
          { en: "Building with separate blocks", es: "Construcci\u00f3n con bloques separados", de: "Bau mit separaten Bl\u00f6cken", nl: "Bouwen met afzonderlijke blokken" },
          { en: "Carving from solid rock face downward (top to bottom)", es: "Tallado desde la cara de roca s\u00f3lida hacia abajo (de arriba hacia abajo)", de: "Schnitzen von oben nach unten aus massivem Fels", nl: "Uithouwen van massief rotsoppervlak naar beneden (van boven naar beneden)" },
          { en: "Using wooden frameworks", es: "Usando estructuras de madera", de: "Verwendung von Holzger\u00fcsten", nl: "Gebruik van houten raamwerken" },
          { en: "Casting with concrete", es: "Fundici\u00f3n con concreto", de: "Gie\u00dfen mit Beton", nl: "Gieten met beton" },
        ],
        correct: 1,
        explanation: {
          en: "Nabataean builders carved monuments from solid rock working from top to bottom, removing material gradually to create facades and interiors without requiring supporting scaffolding.",
          es: "Los constructores nabateos tallaban monumentos desde roca s\u00f3lida trabajando de arriba hacia abajo, removiendo material gradualmente para crear fachadas e interiores sin requerir andamios de soporte.",
          de: "Nabat\u00e4ische Baumeister mei\u00dfelten Monumente aus massivem Fels von oben nach unten und entfernten Material allm\u00e4hlich, um Fassaden und Innenr\u00e4ume ohne st\u00fctzende Ger\u00fcste zu schaffen.",
          nl: "Nabatese bouwers houwden monumenten uit massief gesteente werkend van boven naar beneden, waarbij materiaal geleidelijk werd verwijderd om gevels en interieurs te cre\u00ebren zonder ondersteunende steigers nodig te hebben."
        }
      },
      {
        question: {
          en: "What challenges affect the preservation of Petra's rock-cut facades?",
          es: "¿Qu\u00e9 desaf\u00edos afectan la preservaci\u00f3n de las fachadas excavadas en roca de Petra?",
          de: "Welche Herausforderungen beeinflussen die Erhaltung von Petras in Fels gehauenen Fassaden?",
          nl: "Welke uitdagingen be\u00efnvloeden het behoud van de uit rots gehouwen gevels van Petra?"
        },
        options: [
          { en: "No preservation challenges exist", es: "No existen desaf\u00edos de preservaci\u00f3n", de: "Es gibt keine Erhaltungsherausforderungen", nl: "Er zijn geen conserveringsuitdagingen" },
          { en: "Wind erosion, salt crystallization, and water damage", es: "Erosi\u00f3n e\u00f3lica, cristalizaci\u00f3n de sal y da\u00f1o por agua", de: "Winderosion, Salzkristallisation und Wassersch\u00e4den", nl: "Winderosie, zoutkristallisatie en waterschade" },
          { en: "Only human vandalism", es: "Solo vandalismo humano", de: "Nur menschlicher Vandalismus", nl: "Alleen menselijk vandalisme" },
          { en: "Earthquakes only", es: "Solo terremotos", de: "Nur Erdbeben", nl: "Alleen aardbevingen" },
        ],
        correct: 1,
        explanation: {
          en: "Petra's sandstone facades face multiple preservation challenges including wind erosion, salt crystallization that causes flaking, water infiltration damage, and structural stress from tourism.",
          es: "Las fachadas de arenisca de Petra enfrentan m\u00faltiples desaf\u00edos de preservaci\u00f3n incluyendo erosi\u00f3n e\u00f3lica, cristalizaci\u00f3n de sal que causa descamaci\u00f3n, da\u00f1o por infiltraci\u00f3n de agua y estr\u00e9s estructural del turismo.",
          de: "Petras Sandsteinfassaden stehen vor mehreren Erhaltungsherausforderungen einschlie\u00dflich Winderosion, Salzkristallisation, die Abbl\u00e4ttern verursacht, Wasserinfiltration und strukturellem Stress durch Tourismus.",
          nl: "De zandstenen gevels van Petra worden geconfronteerd met meerdere conserveringsuitdagingen waaronder winderosie, zoutkristallisatie die afschilfering veroorzaakt, waterschade door infiltratie en structurele stress door toerisme."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  }
})();