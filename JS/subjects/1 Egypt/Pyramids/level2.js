// Pyramids Quiz - Level 2: Beginner-Intermediate
(function() {
  const level2 = {
    name: {
      en: "Pyramids Level 2",
      es: "Pirámides Nivel 2",
      de: "Pyramiden Stufe 2",
      nl: "Piramides Level 2"
    },
    questions: [
      {
        question: {
          en: "Which pharaoh built the second largest pyramid at Giza?",
          es: "¿Qué faraón construyó la segunda pirámide más grande de Giza?",
          de: "Welcher Pharao baute die zweitgrößte Pyramide in Gizeh?",
          nl: "Welke farao bouwde de op een na grootste piramide in Giza?"
        },
        options: [
          { en: "Khafre (Chephren)", es: "Kefrén (Jafra)", de: "Chephren (Chaefre)", nl: "Chefren (Chafra)" },
          { en: "Khufu (Cheops)", es: "Keops (Jufu)", de: "Cheops (Chufu)", nl: "Cheops (Chufu)" },
          { en: "Sneferu", es: "Seneferu", de: "Snofru", nl: "Snofroe" },
          { en: "Djoser", es: "Zoser", de: "Djoser", nl: "Djoser" }
        ],
        correct: 0,
        explanation: {
          en: "Khafre built the second largest pyramid at Giza. Although it appears taller due to its elevated location, it is actually slightly smaller than Khufu's pyramid.",
          es: "Kefrén construyó la segunda pirámide más grande de Giza. Aunque parece más alta debido a su ubicación elevada, en realidad es ligeramente más pequeña que la pirámide de Keops.",
          de: "Chephren baute die zweitgrößte Pyramide in Gizeh. Obwohl sie aufgrund ihrer erhöhten Lage höher erscheint, ist sie tatsächlich etwas kleiner als die Pyramide des Cheops.",
          nl: "Chefren bouwde de op een na grootste piramide in Giza. Hoewel het hoger lijkt vanwege de verhoogde locatie, is het eigenlijk iets kleiner dan de piramide van Cheops."
        }
      },
      {
        question: {
          en: "Which is the smallest of the three main pyramids at Giza?",
          es: "¿Cuál es la más pequeña de las tres pirámides principales de Giza?",
          de: "Welche ist die kleinste der drei Hauptpyramiden in Gizeh?",
          nl: "Welke is de kleinste van de drie hoofdpiramides in Giza?"
        },
        options: [
          { en: "Pyramid of Menkaure", es: "Pirámide de Micerino", de: "Pyramide des Mykerinos", nl: "Piramide van Mykerinos" },
          { en: "Pyramid of Khafre", es: "Pirámide de Kefrén", de: "Pyramide des Chephren", nl: "Piramide van Chefren" },
          { en: "Great Pyramid of Khufu", es: "Gran Pirámide de Keops", de: "Große Pyramide des Cheops", nl: "Grote Piramide van Cheops" },
          { en: "Step Pyramid of Djoser", es: "Pirámide Escalonada de Zoser", de: "Stufenpyramide des Djoser", nl: "Trappenpiramide van Djoser" }
        ],
        correct: 0,
        explanation: {
          en: "The Pyramid of Menkaure is the smallest of the three main pyramids at Giza, standing at about 65 meters tall, less than half the height of Khufu's pyramid.",
          es: "La Pirámide de Micerino es la más pequeña de las tres pirámides principales de Giza, con unos 65 metros de altura, menos de la mitad de la altura de la pirámide de Keops.",
          de: "Die Pyramide des Mykerinos ist die kleinste der drei Hauptpyramiden in Gizeh und misst etwa 65 Meter Höhe, weniger als die Hälfte der Höhe der Cheops-Pyramide.",
          nl: "De Piramide van Mykerinos is de kleinste van de drie hoofdpiramides in Giza, ongeveer 65 meter hoog, minder dan de helft van de hoogte van de piramide van Cheops."
        }
      },
      {
        question: {
          en: "Where did the limestone blocks for the pyramids primarily come from?",
          es: "¿De dónde provenían principalmente los bloques de piedra caliza de las pirámides?",
          de: "Woher kamen die Kalksteinblöcke für die Pyramiden hauptsächlich?",
          nl: "Waar kwamen de kalkstenen blokken voor de piramides voornamelijk vandaan?"
        },
        options: [
          { en: "Tura quarries near Cairo", es: "Canteras de Tura cerca de El Cairo", de: "Tura-Steinbrüche bei Kairo", nl: "Tura-steengroeven bij Caïro" },
          { en: "Aswan quarries in the south", es: "Canteras de Asuán en el sur", de: "Assuan-Steinbrüche im Süden", nl: "Aswan-steengroeven in het zuiden" },
          { en: "Sinai Peninsula", es: "Península del Sinaí", de: "Sinai-Halbinsel", nl: "Sinaï-schiereiland" },
          { en: "Mediterranean coast", es: "Costa mediterránea", de: "Mittelmeerküste", nl: "Middellandse Zeekust" }
        ],
        correct: 0,
        explanation: {
          en: "Most limestone blocks came from the Tura quarries near Cairo, while the finer white casing stones came from Tura as well. Granite for interior chambers came from Aswan.",
          es: "La mayoría de los bloques de piedra caliza provenían de las canteras de Tura cerca de El Cairo, mientras que las piedras de revestimiento blanco más fino también provenían de Tura. El granito para las cámaras interiores provenía de Asuán.",
          de: "Die meisten Kalksteinblöcke kamen aus den Tura-Steinbrüchen bei Kairo, während die feineren weißen Verkleidungssteine ebenfalls aus Tura stammten. Granit für Innenkammern kam aus Assuan.",
          nl: "De meeste kalkstenen blokken kwamen uit de Tura-steengroeven bij Caïro, terwijl de fijnere witte bekledingsstenen ook uit Tura kwamen. Graniet voor binnenkamers kwam uit Aswan."
        }
      },
      {
        question: {
          en: "What is a pyramid complex?",
          es: "¿Qué es un complejo piramidal?",
          de: "Was ist ein Pyramidenkomplex?",
          nl: "Wat is een piramidecomplex?"
        },
        options: [
          { en: "The pyramid plus temples and causeways", es: "La pirámide más templos y calzadas", de: "Die Pyramide plus Tempel und Aufwege", nl: "De piramide plus tempels en verhoogde wegen" },
          { en: "Multiple pyramids in one location", es: "Múltiples pirámides en un lugar", de: "Mehrere Pyramiden an einem Ort", nl: "Meerdere piramides op één locatie" },
          { en: "The interior chambers only", es: "Solo las cámaras interiores", de: "Nur die Innenkammern", nl: "Alleen de binnenkamers" },
          { en: "The workers' village", es: "El pueblo de los trabajadores", de: "Das Arbeiterdorf", nl: "Het werkersdorp" }
        ],
        correct: 0,
        explanation: {
          en: "A pyramid complex includes the main pyramid, a mortuary temple, a causeway, a valley temple, and often smaller satellite pyramids for queens.",
          es: "Un complejo piramidal incluye la pirámide principal, un templo mortuorio, una calzada, un templo del valle y, a menudo, pirámides satélite más pequeñas para las reinas.",
          de: "Ein Pyramidenkomplex umfasst die Hauptpyramide, einen Totentempel, einen Aufweg, einen Taltempel und oft kleinere Satellitenpyramiden für Königinnen.",
          nl: "Een piramidecomplex omvat de hoofdpiramide, een dodentempel, een verhoogde weg, een valleitempel en vaak kleinere satellietpiramides voor koninginnen."
        }
      },
      {
        question: {
          en: "Which pharaoh built the Red Pyramid?",
          es: "¿Qué faraón construyó la Pirámide Roja?",
          de: "Welcher Pharao baute die Rote Pyramide?",
          nl: "Welke farao bouwde de Rode Piramide?"
        },
        options: [
          { en: "Sneferu", es: "Seneferu", de: "Snofru", nl: "Snofroe" },
          { en: "Khufu", es: "Keops", de: "Cheops", nl: "Cheops" },
          { en: "Khafre", es: "Kefrén", de: "Chephren", nl: "Chefren" },
          { en: "Menkaure", es: "Micerino", de: "Mykerinos", nl: "Mykerinos" }
        ],
        correct: 0,
        explanation: {
          en: "Sneferu built the Red Pyramid at Dahshur, which is considered the first successful true smooth-sided pyramid. It gets its name from the reddish limestone used in its construction.",
          es: "Seneferu construyó la Pirámide Roja en Dahshur, que se considera la primera pirámide verdadera de lados lisos exitosa. Su nombre proviene de la piedra caliza rojiza utilizada en su construcción.",
          de: "Snofru baute die Rote Pyramide in Dahschur, die als die erste erfolgreiche echte glatte Pyramide gilt. Sie erhielt ihren Namen vom rötlichen Kalkstein, der beim Bau verwendet wurde.",
          nl: "Snofroe bouwde de Rode Piramide in Dahsjoer, die wordt beschouwd als de eerste succesvolle echte gladde piramide. Het dankt zijn naam aan de roodachtige kalksteen die bij de bouw werd gebruikt."
        }
      },
      {
        question: {
          en: "How many pyramids did Pharaoh Sneferu build?",
          es: "¿Cuántas pirámides construyó el faraón Seneferu?",
          de: "Wie viele Pyramiden baute Pharao Snofru?",
          nl: "Hoeveel piramides bouwde farao Snofroe?"
        },
        options: [
          { en: "At least 3 pyramids", es: "Al menos 3 pirámides", de: "Mindestens 3 Pyramiden", nl: "Ten minste 3 piramides" },
          { en: "Only 1 pyramid", es: "Solo 1 pirámide", de: "Nur 1 Pyramide", nl: "Slechts 1 piramide" },
          { en: "Exactly 2 pyramids", es: "Exactamente 2 pirámides", de: "Genau 2 Pyramiden", nl: "Precies 2 piramides" },
          { en: "5 pyramids", es: "5 pirámides", de: "5 Pyramiden", nl: "5 piramides" }
        ],
        correct: 0,
        explanation: {
          en: "Sneferu built at least three pyramids: the Meidum Pyramid, the Bent Pyramid, and the Red Pyramid. This represents more stone than any other pharaoh used in their building projects.",
          es: "Seneferu construyó al menos tres pirámides: la Pirámide de Meidum, la Pirámide Acodada y la Pirámide Roja. Esto representa más piedra que cualquier otro faraón utilizó en sus proyectos de construcción.",
          de: "Snofru baute mindestens drei Pyramiden: die Meidum-Pyramide, die Knickpyramide und die Rote Pyramide. Dies entspricht mehr Stein als jeder andere Pharao für seine Bauprojekte verwendete.",
          nl: "Snofroe bouwde ten minste drie piramides: de Meidum-piramide, de Knikpiramide en de Rode Piramide. Dit vertegenwoordigt meer steen dan welke andere farao ook gebruikte voor zijn bouwprojecten."
        }
      },
      {
        question: {
          en: "What distinguishes Khafre's pyramid from the others at Giza?",
          es: "¿Qué distingue la pirámide de Kefrén de las otras en Giza?",
          de: "Was unterscheidet die Pyramide des Chephren von den anderen in Gizeh?",
          nl: "Wat onderscheidt de piramide van Chefren van de andere in Giza?"
        },
        options: [
          { en: "It still has some casing stones at the top", es: "Todavía tiene algunas piedras de revestimiento en la parte superior", de: "Sie hat noch einige Verkleidungssteine an der Spitze", nl: "Het heeft nog steeds enkele bekledingsstenen aan de top" },
          { en: "It's made entirely of granite", es: "Está hecha completamente de granito", de: "Sie besteht vollständig aus Granit", nl: "Het is volledig gemaakt van graniet" },
          { en: "It has no internal chambers", es: "No tiene cámaras internas", de: "Sie hat keine Innenkammern", nl: "Het heeft geen binnenkamers" },
          { en: "It's painted red", es: "Está pintada de rojo", de: "Sie ist rot bemalt", nl: "Het is rood geverfd" }
        ],
        correct: 0,
        explanation: {
          en: "Khafre's pyramid is unique because it still retains some of its original smooth limestone casing stones near the apex, giving us a glimpse of how all pyramids once looked.",
          es: "La pirámide de Kefrén es única porque aún conserva algunas de sus piedras de revestimiento de piedra caliza lisa originales cerca del ápice, lo que nos da una idea de cómo se veían todas las pirámides.",
          de: "Die Pyramide des Chephren ist einzigartig, weil sie noch einige ihrer ursprünglichen glatten Kalksteinverkleidungssteine nahe der Spitze bewahrt hat, was uns einen Einblick gibt, wie alle Pyramiden einst aussahen.",
          nl: "De piramide van Chefren is uniek omdat het nog steeds enkele van de oorspronkelijke gladde kalkstenen bekledingsstenen nabij de top heeft, wat ons een glimp geeft van hoe alle piramides er ooit uitzagen."
        }
      },
      {
        question: {
          en: "What was the base length of the Great Pyramid originally?",
          es: "¿Cuál era la longitud de la base de la Gran Pirámide originalmente?",
          de: "Wie lang war die Basis der Großen Pyramide ursprünglich?",
          nl: "Wat was de basislengte van de Grote Piramide oorspronkelijk?"
        },
        options: [
          { en: "About 230 meters (755 feet)", es: "Alrededor de 230 metros (755 pies)", de: "Etwa 230 Meter (755 Fuß)", nl: "Ongeveer 230 meter (755 voet)" },
          { en: "About 150 meters (492 feet)", es: "Alrededor de 150 metros (492 pies)", de: "Etwa 150 Meter (492 Fuß)", nl: "Ongeveer 150 meter (492 voet)" },
          { en: "About 300 meters (984 feet)", es: "Alrededor de 300 metros (984 pies)", de: "Etwa 300 Meter (984 Fuß)", nl: "Ongeveer 300 meter (984 voet)" },
          { en: "About 100 meters (328 feet)", es: "Alrededor de 100 metros (328 pies)", de: "Etwa 100 Meter (328 Fuß)", nl: "Ongeveer 100 meter (328 voet)" }
        ],
        correct: 0,
        explanation: {
          en: "The Great Pyramid's base measures approximately 230.4 meters on each side, covering an area of about 13 acres. The sides are remarkably straight and level.",
          es: "La base de la Gran Pirámide mide aproximadamente 230.4 metros en cada lado, cubriendo un área de aproximadamente 13 acres. Los lados son notablemente rectos y nivelados.",
          de: "Die Basis der Großen Pyramide misst auf jeder Seite etwa 230,4 Meter und bedeckt eine Fläche von etwa 13 Acres. Die Seiten sind bemerkenswert gerade und eben.",
          nl: "De basis van de Grote Piramide meet ongeveer 230,4 meter aan elke kant en beslaat een oppervlakte van ongeveer 13 acres. De zijden zijn opmerkelijk recht en vlak."
        }
      },
      {
        question: {
          en: "Where were workers who built the pyramids housed?",
          es: "¿Dónde se alojaban los trabajadores que construyeron las pirámides?",
          de: "Wo waren die Arbeiter untergebracht, die die Pyramiden bauten?",
          nl: "Waar werden de arbeiders die de piramides bouwden gehuisvest?"
        },
        options: [
          { en: "In workers' villages near the construction sites", es: "En pueblos de trabajadores cerca de los sitios de construcción", de: "In Arbeiterdörfern in der Nähe der Baustellen", nl: "In werkersdorpen bij de bouwplaatsen" },
          { en: "Inside the pyramids themselves", es: "Dentro de las propias pirámides", de: "In den Pyramiden selbst", nl: "In de piramides zelf" },
          { en: "In Cairo city center", es: "En el centro de la ciudad de El Cairo", de: "Im Stadtzentrum von Kairo", nl: "In het centrum van Caïro" },
          { en: "They commuted from their homes daily", es: "Viajaban diariamente desde sus hogares", de: "Sie pendelten täglich von zu Hause", nl: "Ze pendelden dagelijks van huis" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeological evidence shows workers lived in purpose-built villages near the pyramids, with bakeries, breweries, and medical facilities. These settlements housed thousands of workers and their families.",
          es: "La evidencia arqueológica muestra que los trabajadores vivían en pueblos construidos especialmente cerca de las pirámides, con panaderías, cervecerías e instalaciones médicas. Estos asentamientos albergaban a miles de trabajadores y sus familias.",
          de: "Archäologische Beweise zeigen, dass Arbeiter in eigens gebauten Dörfern in der Nähe der Pyramiden lebten, mit Bäckereien, Brauereien und medizinischen Einrichtungen. Diese Siedlungen beherbergten Tausende von Arbeitern und ihre Familien.",
          nl: "Archeologisch bewijs toont dat arbeiders in speciaal gebouwde dorpen bij de piramides woonden, met bakkerijen, brouwerijen en medische faciliteiten. Deze nederzettingen huisvestten duizenden arbeiders en hun families."
        }
      },
      {
        question: {
          en: "What type of stone was used for the pyramid capstones?",
          es: "¿Qué tipo de piedra se usaba para las piedras de coronación de las pirámides?",
          de: "Welche Art von Stein wurde für die Pyramidenspitzsteine verwendet?",
          nl: "Welk type steen werd gebruikt voor de piramide topstenen?"
        },
        options: [
          { en: "Often granite, sometimes covered in gold", es: "A menudo granito, a veces cubierto de oro", de: "Oft Granit, manchmal mit Gold bedeckt", nl: "Vaak graniet, soms bedekt met goud" },
          { en: "Regular limestone like the rest", es: "Piedra caliza regular como el resto", de: "Regulärer Kalkstein wie der Rest", nl: "Gewone kalksteen zoals de rest" },
          { en: "Wood covered in bronze", es: "Madera cubierta de bronce", de: "Holz mit Bronze bedeckt", nl: "Hout bedekt met brons" },
          { en: "Solid gold blocks", es: "Bloques de oro sólido", de: "Massive Goldblöcke", nl: "Massieve gouden blokken" }
        ],
        correct: 0,
        explanation: {
          en: "The capstones (pyramidions) were typically made of fine granite and often covered in gold or electrum to reflect sunlight. Unfortunately, none of the original capstones from the major pyramids have been found.",
          es: "Las piedras de coronación (piramidiones) se hacían típicamente de granito fino y a menudo se cubrían de oro o electro para reflejar la luz del sol. Desafortunadamente, no se han encontrado ninguna de las piedras de coronación originales de las pirámides principales.",
          de: "Die Spitzsteine (Pyramidions) wurden typischerweise aus feinem Granit hergestellt und oft mit Gold oder Elektrum bedeckt, um das Sonnenlicht zu reflektieren. Leider wurde keiner der ursprünglichen Spitzsteine der großen Pyramiden gefunden.",
          nl: "De topstenen (pyramidions) waren typisch gemaakt van fijn graniet en vaak bedekt met goud of elektrum om zonlicht te reflecteren. Helaas zijn geen van de originele topstenen van de grote piramides gevonden."
        }
      },
      {
        question: {
          en: "How were the pyramid construction sites supplied with water?",
          es: "¿Cómo se abastecían de agua los sitios de construcción de pirámides?",
          de: "Wie wurden die Pyramidenbaustellen mit Wasser versorgt?",
          nl: "Hoe werden de piramidebouwplaatsen van water voorzien?"
        },
        options: [
          { en: "Through canals from the Nile River", es: "A través de canales desde el río Nilo", de: "Durch Kanäle vom Nil", nl: "Via kanalen vanuit de Nijl" },
          { en: "From desert wells only", es: "Solo de pozos del desierto", de: "Nur aus Wüstenbrunnen", nl: "Alleen uit woestijnputten" },
          { en: "Rainwater collection systems", es: "Sistemas de recolección de agua de lluvia", de: "Regenwassersammelsysteme", nl: "Regenwaterverzamelsystemen" },
          { en: "Water was carried in jars daily", es: "El agua se transportaba en jarras diariamente", de: "Wasser wurde täglich in Krügen getragen", nl: "Water werd dagelijks in kruiken gedragen" }
        ],
        correct: 0,
        explanation: {
          en: "The construction sites were connected to the Nile through a network of canals. This allowed for both water supply for workers and transportation of heavy stone blocks by boat.",
          es: "Los sitios de construcción estaban conectados al Nilo a través de una red de canales. Esto permitía tanto el suministro de agua para los trabajadores como el transporte de bloques de piedra pesados por barco.",
          de: "Die Baustellen waren durch ein Netzwerk von Kanälen mit dem Nil verbunden. Dies ermöglichte sowohl die Wasserversorgung für Arbeiter als auch den Transport schwerer Steinblöcke per Boot.",
          nl: "De bouwplaatsen waren verbonden met de Nijl via een netwerk van kanalen. Dit maakte zowel watervoorziening voor arbeiders mogelijk als transport van zware stenen blokken per boot."
        }
      },
      {
        question: {
          en: "What was the primary purpose of the mortuary temple at a pyramid?",
          es: "¿Cuál era el propósito principal del templo mortuorio en una pirámide?",
          de: "Was war der Hauptzweck des Totentempels an einer Pyramide?",
          nl: "Wat was het primaire doel van de dodentempel bij een piramide?"
        },
        options: [
          { en: "Daily offerings and rituals for the deceased pharaoh", es: "Ofrendas y rituales diarios para el faraón fallecido", de: "Tägliche Opfergaben und Rituale für den verstorbenen Pharao", nl: "Dagelijkse offers en rituelen voor de overleden farao" },
          { en: "Storage for construction tools", es: "Almacenamiento de herramientas de construcción", de: "Lagerung von Bauwerkzeugen", nl: "Opslag voor bouwgereedschap" },
          { en: "Housing for priests", es: "Vivienda para sacerdotes", de: "Unterkunft für Priester", nl: "Huisvesting voor priesters" },
          { en: "Public worship of all gods", es: "Adoración pública de todos los dioses", de: "Öffentliche Anbetung aller Götter", nl: "Openbare aanbidding van alle goden" }
        ],
        correct: 0,
        explanation: {
          en: "The mortuary temple was where priests performed daily rituals and made offerings to sustain the pharaoh's spirit in the afterlife. These temples were active for many years after the pharaoh's death.",
          es: "El templo mortuorio era donde los sacerdotes realizaban rituales diarios y hacían ofrendas para sostener el espíritu del faraón en la vida después de la muerte. Estos templos estuvieron activos durante muchos años después de la muerte del faraón.",
          de: "Der Totentempel war der Ort, wo Priester tägliche Rituale durchführten und Opfergaben darbrachten, um den Geist des Pharaos im Jenseits zu erhalten. Diese Tempel waren viele Jahre nach dem Tod des Pharaos aktiv.",
          nl: "De dodentempel was waar priesters dagelijkse rituelen uitvoerden en offers brachten om de geest van de farao in het hiernamaals te ondersteunen. Deze tempels waren vele jaren na de dood van de farao actief."
        }
      },
      {
        question: {
          en: "What material lines the interior passages of the Great Pyramid?",
          es: "¿Qué material recubre los pasajes interiores de la Gran Pirámide?",
          de: "Welches Material kleidet die Innengänge der Großen Pyramide aus?",
          nl: "Welk materiaal bekleedt de binnenste gangen van de Grote Piramide?"
        },
        options: [
          { en: "Polished granite and limestone", es: "Granito y piedra caliza pulidos", de: "Polierter Granit und Kalkstein", nl: "Gepolijst graniet en kalksteen" },
          { en: "Cedar wood panels", es: "Paneles de madera de cedro", de: "Zedernholzplatten", nl: "Cederhout panelen" },
          { en: "Painted plaster", es: "Yeso pintado", de: "Bemalter Putz", nl: "Geschilderd pleisterwerk" },
          { en: "Bare stone blocks", es: "Bloques de piedra desnuda", de: "Nackte Steinblöcke", nl: "Kale stenen blokken" }
        ],
        correct: 0,
        explanation: {
          en: "The interior passages and chambers were lined with finely cut and polished granite and limestone blocks, fitted together with remarkable precision without mortar.",
          es: "Los pasajes y cámaras interiores estaban revestidos con bloques de granito y piedra caliza finamente cortados y pulidos, encajados con notable precisión sin mortero.",
          de: "Die Innengänge und Kammern wurden mit fein geschnittenem und poliertem Granit und Kalkstein ausgekleidet, mit bemerkenswerter Präzision ohne Mörtel zusammengefügt.",
          nl: "De binnenste gangen en kamers waren bekleed met fijn gesneden en gepolijste graniet en kalkstenen blokken, met opmerkelijke precisie zonder mortel samengevoegd."
        }
      },
      {
        question: {
          en: "Which dynasty saw the most pyramid building activity?",
          es: "¿Qué dinastía vio la mayor actividad de construcción de pirámides?",
          de: "Welche Dynastie sah die größte Pyramidenbauaktivität?",
          nl: "Welke dynastie zag de meeste piramidebouwactiviteit?"
        },
        options: [
          { en: "Fourth Dynasty", es: "Cuarta Dinastía", de: "Vierte Dynastie", nl: "Vierde Dynastie" },
          { en: "First Dynasty", es: "Primera Dinastía", de: "Erste Dynastie", nl: "Eerste Dynastie" },
          { en: "Twelfth Dynasty", es: "Duodécima Dinastía", de: "Zwölfte Dynastie", nl: "Twaalfde Dynastie" },
          { en: "Eighteenth Dynasty", es: "Decimoctava Dinastía", de: "Achtzehnte Dynastie", nl: "Achttiende Dynastie" }
        ],
        correct: 0,
        explanation: {
          en: "The Fourth Dynasty of the Old Kingdom (approximately 2613-2494 BCE) saw the construction of the greatest pyramids, including those of Sneferu, Khufu, Khafre, and Menkaure.",
          es: "La Cuarta Dinastía del Reino Antiguo (aproximadamente 2613-2494 a.C.) vio la construcción de las pirámides más grandes, incluidas las de Seneferu, Keops, Kefrén y Micerino.",
          de: "Die Vierte Dynastie des Alten Reiches (etwa 2613-2494 v. Chr.) sah den Bau der größten Pyramiden, einschließlich derer von Snofru, Cheops, Chephren und Mykerinos.",
          nl: "De Vierde Dynastie van het Oude Rijk (ongeveer 2613-2494 v.Chr.) zag de bouw van de grootste piramides, waaronder die van Snofroe, Cheops, Chefren en Mykerinos."
        }
      },
      {
        question: {
          en: "What was transported along the causeway to the pyramid?",
          es: "¿Qué se transportaba a lo largo de la calzada hasta la pirámide?",
          de: "Was wurde entlang des Aufwegs zur Pyramide transportiert?",
          nl: "Wat werd langs de verhoogde weg naar de piramide vervoerd?"
        },
        options: [
          { en: "The pharaoh's mummy and funeral goods", es: "La momia del faraón y los bienes funerarios", de: "Die Mumie des Pharaos und Grabbeigaben", nl: "De mummie van de farao en grafgoederen" },
          { en: "Stone blocks during construction", es: "Bloques de piedra durante la construcción", de: "Steinblöcke während des Baus", nl: "Stenen blokken tijdens de bouw" },
          { en: "Water from the Nile", es: "Agua del Nilo", de: "Wasser vom Nil", nl: "Water van de Nijl" },
          { en: "Food for workers", es: "Comida para trabajadores", de: "Essen für Arbeiter", nl: "Voedsel voor arbeiders" }
        ],
        correct: 0,
        explanation: {
          en: "The causeway was a covered corridor connecting the valley temple to the mortuary temple. During the funeral, the pharaoh's mummy and funeral procession traveled along this sacred path.",
          es: "La calzada era un corredor cubierto que conectaba el templo del valle con el templo mortuorio. Durante el funeral, la momia del faraón y la procesión fúnebre viajaban por este camino sagrado.",
          de: "Der Aufweg war ein überdachter Korridor, der den Taltempel mit dem Totentempel verband. Während der Beerdigung reiste die Mumie des Pharaos und der Trauerzug entlang dieses heiligen Weges.",
          nl: "De verhoogde weg was een overdekte gang die de valleitempel met de dodentempel verbond. Tijdens de begrafenis reisde de mummie van de farao en de begrafenisstoet langs dit heilige pad."
        }
      },
      {
        question: {
          en: "How accurate is the alignment of the Great Pyramid's sides?",
          es: "¿Qué tan precisa es la alineación de los lados de la Gran Pirámide?",
          de: "Wie genau ist die Ausrichtung der Seiten der Großen Pyramide?",
          nl: "Hoe nauwkeurig is de uitlijning van de zijden van de Grote Piramide?"
        },
        options: [
          { en: "Within a few centimeters of perfect square", es: "A pocos centímetros del cuadrado perfecto", de: "Innerhalb weniger Zentimeter von einem perfekten Quadrat", nl: "Binnen enkele centimeters van een perfect vierkant" },
          { en: "Off by several meters", es: "Desviado por varios metros", de: "Um mehrere Meter versetzt", nl: "Enkele meters ernaast" },
          { en: "Approximately aligned", es: "Aproximadamente alineado", de: "Ungefähr ausgerichtet", nl: "Ongeveer uitgelijnd" },
          { en: "No particular accuracy", es: "Sin precisión particular", de: "Keine besondere Genauigkeit", nl: "Geen bijzondere nauwkeurigheid" }
        ],
        correct: 0,
        explanation: {
          en: "The Great Pyramid's sides are remarkably accurate, with the base forming an almost perfect square. The maximum difference in side lengths is only about 4.4 centimeters, demonstrating extraordinary precision.",
          es: "Los lados de la Gran Pirámide son notablemente precisos, con la base formando un cuadrado casi perfecto. La diferencia máxima en las longitudes de los lados es de solo unos 4.4 centímetros, demostrando una precisión extraordinaria.",
          de: "Die Seiten der Großen Pyramide sind bemerkenswert genau, wobei die Basis ein fast perfektes Quadrat bildet. Der maximale Unterschied in den Seitenlängen beträgt nur etwa 4,4 Zentimeter, was außergewöhnliche Präzision zeigt.",
          nl: "De zijden van de Grote Piramide zijn opmerkelijk nauwkeurig, waarbij de basis een bijna perfect vierkant vormt. Het maximale verschil in zijdelengtes is slechts ongeveer 4,4 centimeter, wat buitengewone precisie aantoont."
        }
      },
      {
        question: {
          en: "What was found in Menkaure's pyramid?",
          es: "¿Qué se encontró en la pirámide de Micerino?",
          de: "Was wurde in der Pyramide des Mykerinos gefunden?",
          nl: "Wat werd er gevonden in de piramide van Mykerinos?"
        },
        options: [
          { en: "A beautiful basalt sarcophagus", es: "Un hermoso sarcófago de basalto", de: "Ein schöner Basaltsarkophag", nl: "Een prachtige basalten sarcofaag" },
          { en: "The pharaoh's intact mummy", es: "La momia intacta del faraón", de: "Die intakte Mumie des Pharaos", nl: "De intacte mummie van de farao" },
          { en: "Rooms full of gold treasures", es: "Habitaciones llenas de tesoros de oro", de: "Räume voller Goldschätze", nl: "Kamers vol gouden schatten" },
          { en: "Ancient scrolls and texts", es: "Pergaminos y textos antiguos", de: "Alte Schriftrollen und Texte", nl: "Oude rollen en teksten" }
        ],
        correct: 0,
        explanation: {
          en: "Menkaure's pyramid contained a beautiful basalt sarcophagus decorated with palace facade designs. Unfortunately, it was lost at sea in 1838 while being transported to England.",
          es: "La pirámide de Micerino contenía un hermoso sarcófago de basalto decorado con diseños de fachada de palacio. Desafortunadamente, se perdió en el mar en 1838 mientras era transportado a Inglaterra.",
          de: "Die Pyramide des Mykerinos enthielt einen schönen Basaltsarkophag, der mit Palastfassaden-Designs verziert war. Leider ging er 1838 auf See verloren, als er nach England transportiert wurde.",
          nl: "De piramide van Mykerinos bevatte een prachtige basalten sarcofaag versierd met paleisgevel ontwerpen. Helaas ging het in 1838 verloren op zee tijdens transport naar Engeland."
        }
      },
      {
        question: {
          en: "What was the purpose of queen's pyramids?",
          es: "¿Cuál era el propósito de las pirámides de las reinas?",
          de: "Was war der Zweck der Königinnenpyramiden?",
          nl: "Wat was het doel van koninginnenpiramides?"
        },
        options: [
          { en: "Burial places for queens and royal family", es: "Lugares de entierro para reinas y familia real", de: "Grabstätten für Königinnen und königliche Familie", nl: "Begraafplaatsen voor koninginnen en koninklijke familie" },
          { en: "Storage for pyramid treasures", es: "Almacenamiento de tesoros de pirámides", de: "Lagerung von Pyramidenschätzen", nl: "Opslag voor piramideschatten" },
          { en: "Practice structures for builders", es: "Estructuras de práctica para constructores", de: "Übungsstrukturen für Baumeister", nl: "Oefenstructuren voor bouwers" },
          { en: "Ceremonial temples", es: "Templos ceremoniales", de: "Zeremonielle Tempel", nl: "Ceremoniële tempels" }
        ],
        correct: 0,
        explanation: {
          en: "The smaller pyramids adjacent to the main pyramids were built as tombs for the pharaoh's wives and close family members. The Great Pyramid has three queen's pyramids to its east.",
          es: "Las pirámides más pequeñas adyacentes a las pirámides principales se construyeron como tumbas para las esposas del faraón y miembros cercanos de la familia. La Gran Pirámide tiene tres pirámides de reinas al este.",
          de: "Die kleineren Pyramiden neben den Hauptpyramiden wurden als Gräber für die Frauen des Pharaos und enge Familienmitglieder gebaut. Die Große Pyramide hat drei Königinnenpyramiden im Osten.",
          nl: "De kleinere piramides naast de hoofdpiramides werden gebouwd als graven voor de vrouwen van de farao en naaste familieleden. De Grote Piramide heeft drie koninginnenpiramides aan de oostkant."
        }
      },
      {
        question: {
          en: "What geological feature was important for pyramid construction?",
          es: "¿Qué característica geológica era importante para la construcción de pirámides?",
          de: "Welches geologische Merkmal war für den Pyramidenbau wichtig?",
          nl: "Welk geologisch kenmerk was belangrijk voor de piramidebouw?"
        },
        options: [
          { en: "Solid bedrock foundation", es: "Cimiento de roca sólida", de: "Solides Felsenfundament", nl: "Solide rotsfundering" },
          { en: "Sandy desert floor", es: "Suelo de desierto arenoso", de: "Sandiger Wüstenboden", nl: "Zanderige woestijnbodem" },
          { en: "Clay deposits", es: "Depósitos de arcilla", de: "Tonablagerungen", nl: "Kleiafzettingen" },
          { en: "Underground water", es: "Agua subterránea", de: "Unterirdisches Wasser", nl: "Ondergronds water" }
        ],
        correct: 0,
        explanation: {
          en: "Pyramids were built on solid bedrock to provide a stable foundation for their enormous weight. The Giza plateau's limestone bedrock was ideal for this purpose.",
          es: "Las pirámides se construyeron sobre roca sólida para proporcionar una base estable para su enorme peso. La roca caliza de la meseta de Giza era ideal para este propósito.",
          de: "Pyramiden wurden auf solidem Felsuntergrund gebaut, um eine stabile Grundlage für ihr enormes Gewicht zu bieten. Das Kalkstein-Grundgestein des Gizeh-Plateaus war ideal für diesen Zweck.",
          nl: "Piramides werden gebouwd op solide rotsbodem om een stabiele fundering te bieden voor hun enorme gewicht. De kalksteenrotsen van het Giza-plateau waren ideaal voor dit doel."
        }
      },
      {
        question: {
          en: "What evidence shows workers were paid laborers, not slaves?",
          es: "¿Qué evidencia muestra que los trabajadores eran trabajadores pagados, no esclavos?",
          de: "Welche Beweise zeigen, dass Arbeiter bezahlte Arbeiter waren, keine Sklaven?",
          nl: "Welk bewijs toont dat arbeiders betaalde arbeiders waren, geen slaven?"
        },
        options: [
          { en: "Worker villages with bakeries and medical care", es: "Pueblos de trabajadores con panaderías y atención médica", de: "Arbeiterdörfer mit Bäckereien und medizinischer Versorgung", nl: "Werkersdorpen met bakkerijen en medische zorg" },
          { en: "Ancient payment records", es: "Registros de pago antiguos", de: "Antike Zahlungsunterlagen", nl: "Oude betalingsrecords" },
          { en: "Chains found at construction sites", es: "Cadenas encontradas en sitios de construcción", de: "Ketten an Baustellen gefunden", nl: "Kettingen gevonden op bouwplaatsen" },
          { en: "Foreign slave markets", es: "Mercados de esclavos extranjeros", de: "Ausländische Sklavenmärkte", nl: "Buitenlandse slavenmarkten" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeological excavations found well-organized worker villages with bakeries producing bread, breweries, and medical facilities for treating injuries. Graffiti also shows workers' pride in their work teams.",
          es: "Las excavaciones arqueológicas encontraron pueblos de trabajadores bien organizados con panaderías produciendo pan, cervecerías e instalaciones médicas para tratar lesiones. Los graffitis también muestran el orgullo de los trabajadores en sus equipos de trabajo.",
          de: "Archäologische Ausgrabungen fanden gut organisierte Arbeiterdörfer mit Bäckereien, die Brot produzierten, Brauereien und medizinischen Einrichtungen zur Behandlung von Verletzungen. Graffiti zeigt auch den Stolz der Arbeiter auf ihre Arbeitsteams.",
          nl: "Archeologische opgravingen vonden goed georganiseerde werkersdorpen met bakkerijen die brood produceerden, brouwerijen en medische faciliteiten voor het behandelen van verwondingen. Graffiti toont ook de trots van arbeiders in hun werkteams."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
