// Archaeology - Level 1: Ancient Civilizations
(function() {
  const level1 = {
    name: {
      en: "Ancient Civilizations",
      es: "Civilizaciones Antiguas",
      de: "Antike Zivilisationen",
      nl: "Oude Beschavingen"
    },
    questions: [
      {
        question: {
          en: "Which ancient civilization built Machu Picchu?",
          es: "¿Qué civilización antigua construyó Machu Picchu?",
          de: "Welche antike Zivilisation baute Machu Picchu?",
          nl: "Welke oude beschaving bouwde Machu Picchu?"
        },
        options: [
          { en: "Inca", es: "Inca", de: "Inka", nl: "Inca" },
          { en: "Maya", es: "Maya", de: "Maya", nl: "Maya" },
          { en: "Aztec", es: "Azteca", de: "Azteken", nl: "Azteken" },
          { en: "Olmec", es: "Olmeca", de: "Olmeken", nl: "Olmeken" }
        ],
        correct: 0,
        explanation: {
          en: "Machu Picchu was built by the Inca civilization around 1450 CE as a royal estate for Inca emperor Pachacuti. It was abandoned around 1572 during the Spanish conquest.",
          es: "Machu Picchu fue construido por la civilización inca alrededor de 1450 CE como una propiedad real para el emperador inca Pachacuti. Fue abandonado alrededor de 1572 durante la conquista española.",
          de: "Machu Picchu wurde um 1450 n. Chr. von der Inka-Zivilisation als königlicher Besitz für den Inka-Kaiser Pachacuti erbaut. Es wurde um 1572 während der spanischen Eroberung aufgegeben.",
          nl: "Machu Picchu werd rond 1450 CE gebouwd door de Inca-beschaving als koninklijk landgoed voor Inca-keizer Pachacuti. Het werd rond 1572 verlaten tijdens de Spaanse verovering."
        }
      },
      {
        question: {
          en: "What is the study of ancient human cultures through material remains called?",
          es: "¿Cómo se llama el estudio de las culturas humanas antiguas a través de restos materiales?",
          de: "Wie nennt man das Studium alter menschlicher Kulturen durch materielle Überreste?",
          nl: "Hoe wordt de studie van oude menselijke culturen door materiële resten genoemd?"
        },
        options: [
          { en: "Archaeology", es: "Arqueología", de: "Archäologie", nl: "Archeologie" },
          { en: "Anthropology", es: "Antropología", de: "Anthropologie", nl: "Antropologie" },
          { en: "Geology", es: "Geología", de: "Geologie", nl: "Geologie" },
          { en: "Paleontology", es: "Paleontología", de: "Paläontologie", nl: "Paleontologie" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeology is the scientific study of human activity through the recovery and analysis of material culture. It examines artifacts, architecture, and other physical remains to understand past civilizations.",
          es: "La arqueología es el estudio científico de la actividad humana a través de la recuperación y análisis de la cultura material. Examina artefactos, arquitectura y otros restos físicos para entender civilizaciones pasadas.",
          de: "Archäologie ist das wissenschaftliche Studium menschlicher Aktivität durch die Wiederherstellung und Analyse materieller Kultur. Sie untersucht Artefakte, Architektur und andere physische Überreste, um vergangene Zivilisationen zu verstehen.",
          nl: "Archeologie is de wetenschappelijke studie van menselijke activiteit door het herstel en de analyse van materiële cultuur. Het onderzoekt artefacten, architectuur en andere fysieke resten om verleden beschavingen te begrijpen."
        }
      },
      {
        question: {
          en: "Which archaeological technique uses radioactive carbon-14 decay to date organic materials?",
          es: "¿Qué técnica arqueológica usa la descomposición del carbono-14 radioactivo para datar materiales orgánicos?",
          de: "Welche archäologische Technik nutzt den radioaktiven Kohlenstoff-14-Zerfall zur Datierung organischer Materialien?",
          nl: "Welke archeologische techniek gebruikt radioactief koolstof-14 verval om organische materialen te dateren?"
        },
        options: [
          { en: "Radiocarbon dating", es: "Datación por radiocarbono", de: "Radiokohlenstoffdatierung", nl: "Koolstofdatering" },
          { en: "Stratigraphy", es: "Estratigrafía", de: "Stratigraphie", nl: "Stratigrafie" },
          { en: "Dendrochronology", es: "Dendrocronología", de: "Dendrochronologie", nl: "Dendrochronologie" },
          { en: "Thermoluminescence", es: "Termoluminiscencia", de: "Thermolumineszenz", nl: "Thermoluminescentie" }
        ],
        correct: 0,
        explanation: {
          en: "Radiocarbon dating measures the decay of carbon-14 isotopes in organic materials to determine their age up to about 50,000 years. Developed by Willard Libby in the 1940s.",
          es: "La datación por radiocarbono mide la descomposición de isótopos de carbono-14 en materiales orgánicos para determinar su edad hasta unos 50,000 años. Desarrollada por Willard Libby en los años 1940.",
          de: "Die Radiokohlenstoffdatierung misst den Zerfall von Kohlenstoff-14-Isotopen in organischen Materialien, um ihr Alter bis zu etwa 50.000 Jahren zu bestimmen. In den 1940er Jahren von Willard Libby entwickelt.",
          nl: "Koolstofdatering meet het verval van koolstof-14 isotopen in organische materialen om hun leeftijd te bepalen tot ongeveer 50.000 jaar. Ontwikkeld door Willard Libby in de jaren 1940."
        }
      },
      {
        question: {
          en: "What was the primary writing material used in ancient Egypt?",
          es: "¿Cuál era el material de escritura principal usado en el antiguo Egipto?",
          de: "Was war das primäre Schreibmaterial im alten Ägypten?",
          nl: "Wat was het primaire schrijfmateriaal gebruikt in het oude Egypte?"
        },
        options: [
          { en: "Papyrus", es: "Papiro", de: "Papyrus", nl: "Papyrus" },
          { en: "Parchment", es: "Pergamino", de: "Pergament", nl: "Perkament" },
          { en: "Clay tablets", es: "Tablillas de arcilla", de: "Tontafeln", nl: "Kleitabletten" },
          { en: "Stone tablets", es: "Tablillas de piedra", de: "Steintafeln", nl: "Stenen tabletten" }
        ],
        correct: 0,
        explanation: {
          en: "Papyrus was made from the pith of the papyrus plant that grew along the Nile River. It was lighter and more portable than stone or clay, making it ideal for record-keeping and literature.",
          es: "El papiro se hacía del meollo de la planta de papiro que crecía a lo largo del río Nilo. Era más ligero y portátil que la piedra o arcilla, haciéndolo ideal para mantenimiento de registros y literatura.",
          de: "Papyrus wurde aus dem Mark der Papyruspflanze hergestellt, die entlang des Nils wuchs. Es war leichter und portabler als Stein oder Ton, was es ideal für Aufzeichnungen und Literatur machte.",
          nl: "Papyrus werd gemaakt van het merg van de papyrusplant die langs de Nijl groeide. Het was lichter en draagbaarder dan steen of klei, waardoor het ideaal was voor administratie en literatuur."
        }
      },
      {
        question: {
          en: "Which ancient Greek city is famous for its well-preserved ruins including the Parthenon?",
          es: "¿Qué ciudad griega antigua es famosa por sus ruinas bien conservadas incluyendo el Partenón?",
          de: "Welche antike griechische Stadt ist berühmt für ihre gut erhaltenen Ruinen einschließlich des Parthenons?",
          nl: "Welke oude Griekse stad is beroemd om zijn goed bewaarde ruïnes inclusief het Parthenon?"
        },
        options: [
          { en: "Athens", es: "Atenas", de: "Athen", nl: "Athene" },
          { en: "Sparta", es: "Esparta", de: "Sparta", nl: "Sparta" },
          { en: "Corinth", es: "Corinto", de: "Korinth", nl: "Korinthe" },
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" }
        ],
        correct: 0,
        explanation: {
          en: "Athens, the birthplace of democracy, contains the Acropolis with the famous Parthenon temple dedicated to the goddess Athena. Built in the 5th century BCE, it remains an iconic symbol of ancient Greek civilization.",
          es: "Atenas, la cuna de la democracia, contiene la Acrópolis con el famoso templo Partenón dedicado a la diosa Atenea. Construido en el siglo V a.C., sigue siendo un símbolo icónico de la civilización griega antigua.",
          de: "Athen, die Geburtsstätte der Demokratie, enthält die Akropolis mit dem berühmten Parthenon-Tempel, der der Göttin Athena gewidmet ist. Im 5. Jahrhundert v. Chr. erbaut, bleibt er ein ikonisches Symbol der antiken griechischen Zivilisation.",
          nl: "Athene, de geboorteplaats van democratie, bevat de Acropolis met de beroemde Parthenon tempel gewijd aan de godin Athena. Gebouwd in de 5e eeuw BCE, blijft het een iconisch symbool van de oude Griekse beschaving."
        }
      },
      {
        question: {
          en: "What was the main function of a ziggurat in ancient Mesopotamian cities?",
          es: "¿Cuál era la función principal de un zigurat en las ciudades mesopotámicas antiguas?",
          de: "Was war die Hauptfunktion einer Zikkurat in antiken mesopotamischen Städten?",
          nl: "Wat was de hoofdfunctie van een ziggurat in oude Mesopotamische steden?"
        },
        options: [
          { en: "Religious temple", es: "Templo religioso", de: "Religiöser Tempel", nl: "Religieuze tempel" },
          { en: "Royal palace", es: "Palacio real", de: "Königspalast", nl: "Koninklijk paleis" },
          { en: "Military fortress", es: "Fortaleza militar", de: "Militärfestung", nl: "Militaire vesting" },
          { en: "Market center", es: "Centro de mercado", de: "Marktzentrum", nl: "Marktcentrum" }
        ],
        correct: 0,
        explanation: {
          en: "Ziggurats were massive stepped pyramid structures that served as temples in ancient Mesopotamia. They were believed to be dwelling places for gods and centers of religious and economic activity in Sumerian, Babylonian, and Assyrian cities.",
          es: "Los zigurats eran estructuras piramidales escalonadas masivas que servían como templos en la antigua Mesopotamia. Se creía que eran lugares de morada para los dioses y centros de actividad religiosa y económica en ciudades sumerias, babilónicas y asirias.",
          de: "Zikkurats waren massive Stufenpyramiden-Strukturen, die als Tempel im antiken Mesopotamien dienten. Man glaubte, sie seien Wohnstätten für Götter und Zentren religiöser und wirtschaftlicher Aktivität in sumerischen, babylonischen und assyrischen Städten.",
          nl: "Ziggurats waren massieve getrapte piramidenstructuren die dienden als tempels in het oude Mesopotamië. Men geloofde dat ze verblijfplaatsen waren voor goden en centra van religieuze en economische activiteit in Sumerische, Babylonische en Assyrische steden."
        }
      },
      {
        question: {
          en: "Which ancient civilization developed the first known system of writing?",
          es: "¿Qué civilización antigua desarrolló el primer sistema conocido de escritura?",
          de: "Welche antike Zivilisation entwickelte das erste bekannte Schriftsystem?",
          nl: "Welke oude beschaving ontwikkelde het eerste bekende schrijfsysteem?"
        },
        options: [
          { en: "Sumerians", es: "Sumerios", de: "Sumerer", nl: "Sumeriërs" },
          { en: "Egyptians", es: "Egipcios", de: "Ägypter", nl: "Egyptenaren" },
          { en: "Chinese", es: "Chinos", de: "Chinesen", nl: "Chinezen" },
          { en: "Indus Valley people", es: "Pueblo del valle del Indo", de: "Indus-Tal-Völker", nl: "Indus-vallei mensen" }
        ],
        correct: 0,
        explanation: {
          en: "The Sumerians developed cuneiform writing around 3200 BCE, making it the earliest known writing system. It began as pictographic symbols pressed into clay tablets and evolved into a complex system representing sounds and concepts.",
          es: "Los sumerios desarrollaron la escritura cuneiforme alrededor del 3200 a.C., convirtiéndola en el sistema de escritura conocido más temprano. Comenzó como símbolos pictográficos presionados en tablillas de arcilla y evolucionó a un sistema complejo representando sonidos y conceptos.",
          de: "Die Sumerer entwickelten um 3200 v. Chr. die Keilschrift, was sie zum frühesten bekannten Schriftsystem macht. Sie begann als bildliche Symbole, die in Tontafeln gedrückt wurden, und entwickelte sich zu einem komplexen System, das Klänge und Konzepte darstellte.",
          nl: "De Sumeriërs ontwikkelden spijkerschrift rond 3200 BCE, waardoor het het vroegst bekende schrijfsysteem werd. Het begon als pictografische symbolen gedrukt in kleitabletten en evolueerde tot een complex systeem dat geluiden en concepten vertegenwoordigde."
        }
      },
      {
        question: {
          en: "What is an archaeological site's stratigraphy?",
          es: "¿Qué es la estratigrafía de un sitio arqueológico?",
          de: "Was ist die Stratigraphie einer archäologischen Stätte?",
          nl: "Wat is de stratigrafie van een archeologische site?"
        },
        options: [
          { en: "Layers of soil and artifacts showing chronological sequence", es: "Capas de suelo y artefactos mostrando secuencia cronológica", de: "Schichten von Boden und Artefakten, die chronologische Abfolge zeigen", nl: "Lagen van grond en artefacten die chronologische volgorde tonen" },
          { en: "Geographic location of the site", es: "Ubicación geográfica del sitio", de: "Geografische Lage der Stätte", nl: "Geografische locatie van de site" },
          { en: "Cultural significance of findings", es: "Significado cultural de los hallazgos", de: "Kulturelle Bedeutung der Funde", nl: "Culturele betekenis van vondsten" },
          { en: "Dating of individual artifacts", es: "Datación de artefactos individuales", de: "Datierung einzelner Artefakte", nl: "Datering van individuele artefacten" }
        ],
        correct: 0,
        explanation: {
          en: "Stratigraphy is the study of rock and soil layers, crucial in archaeology for understanding the chronological sequence of human occupation. Deeper layers are generally older, following the law of superposition.",
          es: "La estratigrafía es el estudio de capas de roca y suelo, crucial en arqueología para entender la secuencia cronológica de ocupación humana. Las capas más profundas son generalmente más antiguas, siguiendo la ley de superposición.",
          de: "Stratigraphie ist das Studium von Gesteins- und Bodenschichten, entscheidend in der Archäologie zum Verständnis der chronologischen Abfolge menschlicher Besiedlung. Tiefere Schichten sind im Allgemeinen älter, nach dem Gesetz der Superposition.",
          nl: "Stratigrafie is de studie van rots- en grondlagen, cruciaal in archeologie voor het begrijpen van de chronologische volgorde van menselijke bewoning. Diepere lagen zijn over het algemeen ouder, volgend op de wet van superpositie."
        }
      },
      {
        question: {
          en: "Which famous archaeological discovery was made by Howard Carter in 1922?",
          es: "¿Qué famoso descubrimiento arqueológico fue hecho por Howard Carter en 1922?",
          de: "Welche berühmte archäologische Entdeckung wurde von Howard Carter 1922 gemacht?",
          nl: "Welke beroemde archeologische ontdekking werd gemaakt door Howard Carter in 1922?"
        },
        options: [
          { en: "Tutankhamun's tomb", es: "Tumba de Tutankamón", de: "Tutanchamuns Grab", nl: "Toetanchamon's graf" },
          { en: "Rosetta Stone", es: "Piedra de Rosetta", de: "Rosetta-Stein", nl: "Rosetta Steen" },
          { en: "Dead Sea Scrolls", es: "Rollos del Mar Muerto", de: "Schriftrollen vom Toten Meer", nl: "Dode Zee-rollen" },
          { en: "Terracotta Army", es: "Ejército de Terracota", de: "Terrakotta-Armee", nl: "Terracotta leger" }
        ],
        correct: 0,
        explanation: {
          en: "Howard Carter discovered the nearly intact tomb of Tutankhamun (KV62) in the Valley of the Kings, Egypt. The tomb contained over 5,000 artifacts and the famous golden burial mask of the boy pharaoh.",
          es: "Howard Carter descubrió la tumba casi intacta de Tutankamón (KV62) en el Valle de los Reyes, Egipto. La tumba contenía más de 5,000 artefactos y la famosa máscara funeraria dorada del faraón niño.",
          de: "Howard Carter entdeckte das nahezu intakte Grab von Tutanchamun (KV62) im Tal der Könige, Ägypten. Das Grab enthielt über 5.000 Artefakte und die berühmte goldene Totenmaske des Kindpharaos.",
          nl: "Howard Carter ontdekte het bijna intacte graf van Toetanchamon (KV62) in de Vallei der Koningen, Egypte. Het graf bevatte meer dan 5.000 artefacten en het beroemde gouden begrafenismasker van de jonge farao."
        }
      },
      {
        question: {
          en: "What type of stone was primarily used to build Stonehenge?",
          es: "¿Qué tipo de piedra se usó principalmente para construir Stonehenge?",
          de: "Welche Art von Stein wurde hauptsächlich für den Bau von Stonehenge verwendet?",
          nl: "Welk type steen werd voornamelijk gebruikt om Stonehenge te bouwen?"
        },
        options: [
          { en: "Sarsen and bluestone", es: "Sarsen y piedra azul", de: "Sarsen und Blausteine", nl: "Sarsen en blauwe steen" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
          { en: "Limestone", es: "Caliza", de: "Kalkstein", nl: "Kalksteen" },
          { en: "Marble", es: "Mármol", de: "Marmor", nl: "Marmer" }
        ],
        correct: 0,
        explanation: {
          en: "Stonehenge was built using large sarsen stones (a type of sandstone) for the outer circle and smaller bluestones transported from Wales for the inner circle. The bluestones traveled over 150 miles to reach the site.",
          es: "Stonehenge fue construido usando grandes piedras sarsen (un tipo de arenisca) para el círculo exterior y piedras azules más pequeñas transportadas desde Gales para el círculo interior. Las piedras azules viajaron más de 240 kilómetros para llegar al sitio.",
          de: "Stonehenge wurde mit großen Sarsen-Steinen (eine Art Sandstein) für den äußeren Kreis und kleineren Blausteinen aus Wales für den inneren Kreis gebaut. Die Blausteine reisten über 240 Kilometer zur Baustelle.",
          nl: "Stonehenge werd gebouwd met grote sarsen stenen (een type zandsteen) voor de buitenste cirkel en kleinere blauwstenen getransporteerd uit Wales voor de binnenste cirkel. De blauwstenen reisden meer dan 240 kilometer naar de locatie."
        }
      },
      {
        question: {
          en: "What does the term 'in situ' mean in archaeology?",
          es: "¿Qué significa el término 'in situ' en arqueología?",
          de: "Was bedeutet der Begriff 'in situ' in der Archäologie?",
          nl: "Wat betekent de term 'in situ' in archeologie?"
        },
        options: [
          { en: "Found in original position", es: "Encontrado en posición original", de: "In ursprünglicher Position gefunden", nl: "Gevonden in oorspronkelijke positie" },
          { en: "Carefully preserved", es: "Cuidadosamente conservado", de: "Sorgfältig erhalten", nl: "Zorgvuldig bewaard" },
          { en: "Recently discovered", es: "Recientemente descubierto", de: "Kürzlich entdeckt", nl: "Onlangs ontdekt" },
          { en: "Laboratory tested", es: "Probado en laboratorio", de: "Laborgetestet", nl: "Laboratorium getest" }
        ],
        correct: 0,
        explanation: {
          en: "'In situ' is Latin for 'in place' and refers to artifacts or features found in their original, undisturbed archaeological context. This provides maximum information about how they were used and deposited.",
          es: "'In situ' es latín para 'en lugar' y se refiere a artefactos o características encontradas en su contexto arqueológico original, no perturbado. Esto proporciona máxima información sobre cómo fueron usados y depositados.",
          de: "'In situ' ist Latein für 'an Ort und Stelle' und bezieht sich auf Artefakte oder Merkmale, die in ihrem ursprünglichen, ungestörten archäologischen Kontext gefunden wurden. Dies liefert maximale Informationen über ihre Nutzung und Ablagerung.",
          nl: "'In situ' is Latijn voor 'op zijn plaats' en verwijst naar artefacten of kenmerken gevonden in hun oorspronkelijke, ongestoorde archeologische context. Dit biedt maximale informatie over hoe ze werden gebruikt en afgezet."
        }
      },
      {
        question: {
          en: "Which ancient wonder of the world was located in Alexandria, Egypt?",
          es: "¿Cuál antigua maravilla del mundo estaba ubicada en Alejandría, Egipto?",
          de: "Welches antike Weltwunder befand sich in Alexandria, Ägypten?",
          nl: "Welk oud wereldwonder bevond zich in Alexandrië, Egypte?"
        },
        options: [
          { en: "Lighthouse of Alexandria", es: "Faro de Alejandría", de: "Leuchtturm von Alexandria", nl: "Vuurtoren van Alexandrië" },
          { en: "Great Pyramid", es: "Gran Pirámide", de: "Große Pyramide", nl: "Grote Piramide" },
          { en: "Colossus of Rhodes", es: "Coloso de Rodas", de: "Koloss von Rhodos", nl: "Kolossus van Rhodos" },
          { en: "Hanging Gardens", es: "Jardines Colgantes", de: "Hängende Gärten", nl: "Hangende Tuinen" }
        ],
        correct: 0,
        explanation: {
          en: "The Lighthouse of Alexandria (Pharos of Alexandria) was one of the Seven Wonders of the Ancient World. Built around 280 BCE, it stood over 100 meters tall and guided ships into Alexandria's harbor for over 1,500 years.",
          es: "El Faro de Alejandría (Faro de Alejandría) fue una de las Siete Maravillas del Mundo Antiguo. Construido alrededor del 280 a.C., medía más de 100 metros de altura y guió barcos al puerto de Alejandría por más de 1,500 años.",
          de: "Der Leuchtturm von Alexandria (Pharos von Alexandria) war eines der Sieben Weltwunder der Antike. Um 280 v. Chr. erbaut, war er über 100 Meter hoch und führte über 1.500 Jahre lang Schiffe in Alexandrias Hafen.",
          nl: "De Vuurtoren van Alexandrië (Pharos van Alexandrië) was een van de Zeven Wonderen van de Oude Wereld. Gebouwd rond 280 BCE, stond hij meer dan 100 meter hoog en leidde schepen naar Alexandrië's haven gedurende meer dan 1.500 jaar."
        }
      },
      {
        question: {
          en: "What is the primary dating range for the Neolithic period?",
          es: "¿Cuál es el rango de datación principal para el período Neolítico?",
          de: "Was ist der primäre Datierungsbereich für die Jungsteinzeit?",
          nl: "Wat is het primaire dateringsbereik voor het Neolithicum?"
        },
        options: [
          { en: "10,000-4,000 BCE", es: "10,000-4,000 a.C.", de: "10.000-4.000 v. Chr.", nl: "10.000-4.000 BCE" },
          { en: "50,000-10,000 BCE", es: "50,000-10,000 a.C.", de: "50.000-10.000 v. Chr.", nl: "50.000-10.000 BCE" },
          { en: "4,000-1,000 BCE", es: "4,000-1,000 a.C.", de: "4.000-1.000 v. Chr.", nl: "4.000-1.000 BCE" },
          { en: "1,000 BCE-500 CE", es: "1,000 a.C.-500 d.C.", de: "1.000 v. Chr.-500 n. Chr.", nl: "1.000 BCE-500 CE" }
        ],
        correct: 0,
        explanation: {
          en: "The Neolithic (New Stone Age) period roughly spans 10,000-4,000 BCE, characterized by the development of agriculture, pottery, and permanent settlements. It marks the transition from hunter-gatherer to farming societies.",
          es: "El período Neolítico (Nueva Edad de Piedra) abarca aproximadamente 10,000-4,000 a.C., caracterizado por el desarrollo de la agricultura, cerámica y asentamientos permanentes. Marca la transición de sociedades cazadoras-recolectoras a sociedades agrícolas.",
          de: "Die Jungsteinzeit (Neolithikum) umfasst etwa 10.000-4.000 v. Chr. und ist charakterisiert durch die Entwicklung von Landwirtschaft, Keramik und permanenten Siedlungen. Sie markiert den Übergang von Jäger-Sammler- zu Ackerbaugesellschaften.",
          nl: "Het Neolithicum (Nieuwe Steentijd) beslaat ruwweg 10.000-4.000 BCE, gekenmerkt door de ontwikkeling van landbouw, aardewerk en permanente nederzettingen. Het markeert de overgang van jager-verzamelaar naar landbouwsamenlevingen."
        }
      },
      {
        question: {
          en: "What was the most significant feature of Çatalhöyük, the Neolithic settlement in Turkey?",
          es: "¿Cuál era la característica más significativa de Çatalhöyük, el asentamiento neolítico en Turquía?",
          de: "Was war das bedeutendste Merkmal von Çatalhöyük, der neolithischen Siedlung in der Türkei?",
          nl: "Wat was het meest significante kenmerk van Çatalhöyük, de Neolithische nederzetting in Turkije?"
        },
        options: [
          { en: "Houses built without doors, entered through roofs", es: "Casas construidas sin puertas, ingreso por techos", de: "Häuser ohne Türen gebaut, Zugang über Dächer", nl: "Huizen gebouwd zonder deuren, betreden via daken" },
          { en: "Massive defensive walls", es: "Muros defensivos masivos", de: "Massive Verteidigungsmauern", nl: "Massieve verdedigingsmuren" },
          { en: "Underground water system", es: "Sistema de agua subterráneo", de: "Unterirdisches Wassersystem", nl: "Ondergronds watersysteem" },
          { en: "Central marketplace", es: "Mercado central", de: "Zentraler Marktplatz", nl: "Centrale marktplaats" }
        ],
        correct: 0,
        explanation: {
          en: "Çatalhöyük (7400-6200 BCE) featured densely packed houses with no doors or windows at ground level. Residents entered through holes in the roofs using ladders, and moved between buildings across the rooftops.",
          es: "Çatalhöyük (7400-6200 a.C.) presentaba casas densamente empacadas sin puertas o ventanas a nivel del suelo. Los residentes ingresaban a través de agujeros en los techos usando escaleras, y se movían entre edificios a través de los tejados.",
          de: "Çatalhöyük (7400-6200 v. Chr.) hatte dicht gepackte Häuser ohne Türen oder Fenster auf Bodenniveau. Die Bewohner gelangten durch Löcher in den Dächern mit Leitern hinein und bewegten sich zwischen den Gebäuden über die Dächer.",
          nl: "Çatalhöyük (7400-6200 BCE) had dicht opeengepakte huizen zonder deuren of ramen op grondniveau. Bewoners kwamen binnen door gaten in de daken met behulp van ladders, en bewogen tussen gebouwen over de daken."
        }
      },
      {
        question: {
          en: "Which archaeological method involves systematically recording the exact location of every artifact found?",
          es: "¿Qué método arqueológico involucra registrar sistemáticamente la ubicación exacta de cada artefacto encontrado?",
          de: "Welche archäologische Methode beinhaltet die systematische Aufzeichnung der exakten Lage jedes gefundenen Artefakts?",
          nl: "Welke archeologische methode behelst het systematisch registreren van de exacte locatie van elk gevonden artefact?"
        },
        options: [
          { en: "Provenance recording", es: "Registro de procedencia", de: "Provenienz-Aufzeichnung", nl: "Herkomstregistratie" },
          { en: "Surface survey", es: "Reconocimiento de superficie", de: "Oberflächenuntersuchung", nl: "Oppervlakteonderzoek" },
          { en: "Test pitting", es: "Pozos de prueba", de: "Testgruben", nl: "Testputten" },
          { en: "Remote sensing", es: "Detección remota", de: "Fernerkundung", nl: "Remote sensing" }
        ],
        correct: 0,
        explanation: {
          en: "Provenance recording involves documenting the exact three-dimensional location, context, and associations of every artifact. This spatial data is crucial for understanding how sites were used and how artifacts relate to each other.",
          es: "El registro de procedencia involucra documentar la ubicación tridimensional exacta, contexto y asociaciones de cada artefacto. Estos datos espaciales son cruciales para entender cómo se usaron los sitios y cómo los artefactos se relacionan entre sí.",
          de: "Die Provenienz-Aufzeichnung beinhaltet die Dokumentation der exakten dreidimensionalen Lage, des Kontexts und der Assoziationen jedes Artefakts. Diese räumlichen Daten sind entscheidend für das Verständnis, wie Stätten genutzt wurden und wie Artefakte miteinander in Beziehung stehen.",
          nl: "Herkomstregistratie behelst het documenteren van de exacte driedimensionale locatie, context en associaties van elk artefact. Deze ruimtelijke gegevens zijn cruciaal voor het begrijpen van hoe sites werden gebruikt en hoe artefacten zich tot elkaar verhouden."
        }
      },
      {
        question: {
          en: "What is the primary function of ground-penetrating radar (GPR) in archaeology?",
          es: "¿Cuál es la función principal del radar de penetración terrestre (GPR) en arqueología?",
          de: "Was ist die primäre Funktion des Bodenradars (GPR) in der Archäologie?",
          nl: "Wat is de primaire functie van grondpenetrerende radar (GPR) in archeologie?"
        },
        options: [
          { en: "Detecting buried features without excavation", es: "Detectar características enterradas sin excavación", de: "Vergrabene Merkmale ohne Ausgrabung erkennen", nl: "Begraven kenmerken detecteren zonder opgraving" },
          { en: "Dating organic materials", es: "Datación de materiales orgánicos", de: "Datierung organischer Materialien", nl: "Datering van organische materialen" },
          { en: "Chemical analysis of artifacts", es: "Análisis químico de artefactos", de: "Chemische Analyse von Artefakten", nl: "Chemische analyse van artefacten" },
          { en: "Measuring site elevation", es: "Medición de elevación del sitio", de: "Messung der Standorthöhe", nl: "Meting van site-elevatie" }
        ],
        correct: 0,
        explanation: {
          en: "GPR uses electromagnetic pulses to create subsurface images, allowing archaeologists to detect buried walls, foundations, graves, and other features before excavating. It's a non-invasive survey technique that helps plan excavations.",
          es: "GPR usa pulsos electromagnéticos para crear imágenes subsuperficiales, permitiendo a los arqueólogos detectar muros enterrados, fundaciones, tumbas y otras características antes de excavar. Es una técnica de reconocimiento no invasiva que ayuda a planificar excavaciones.",
          de: "GPR verwendet elektromagnetische Impulse, um Untergrundbilder zu erstellen, wodurch Archäologen vergrabene Mauern, Fundamente, Gräber und andere Merkmale vor der Ausgrabung erkennen können. Es ist eine nicht-invasive Untersuchungstechnik, die bei der Ausgrabungsplanung hilft.",
          nl: "GPR gebruikt elektromagnetische pulsen om ondergrondse beelden te creëren, waardoor archeologen begraven muren, funderingen, graven en andere kenmerken kunnen detecteren voor opgraving. Het is een niet-invasieve onderzoekstechniek die helpt bij het plannen van opgravingen."
        }
      },
      {
        question: {
          en: "Which culture is associated with the famous Lascaux cave paintings in France?",
          es: "¿Qué cultura está asociada con las famosas pinturas rupestres de Lascaux en Francia?",
          de: "Welche Kultur wird mit den berühmten Höhlenmalereien von Lascaux in Frankreich in Verbindung gebracht?",
          nl: "Welke cultuur wordt geassocieerd met de beroemde grotschilderingen van Lascaux in Frankrijk?"
        },
        options: [
          { en: "Magdalenian", es: "Magdaleniense", de: "Magdalénien", nl: "Magdalenien" },
          { en: "Aurignacian", es: "Auriñaciense", de: "Aurignacien", nl: "Aurignacien" },
          { en: "Solutrean", es: "Solutrense", de: "Solutréen", nl: "Solutreen" },
          { en: "Gravettian", es: "Gravetiense", de: "Gravettien", nl: "Gravettien" }
        ],
        correct: 0,
        explanation: {
          en: "The Lascaux cave paintings were created by the Magdalenian culture around 17,000 years ago during the Upper Paleolithic period. The cave contains over 600 painted animals, primarily horses, deer, aurochs, and bison.",
          es: "Las pinturas rupestres de Lascaux fueron creadas por la cultura Magdaleniense hace unos 17,000 años durante el período Paleolítico Superior. La cueva contiene más de 600 animales pintados, principalmente caballos, ciervos, uros y bisontes.",
          de: "Die Lascaux-Höhlenmalereien wurden von der Magdalénien-Kultur vor etwa 17.000 Jahren während der jüngeren Altsteinzeit geschaffen. Die Höhle enthält über 600 gemalte Tiere, hauptsächlich Pferde, Hirsche, Auerochsen und Bisons.",
          nl: "De Lascaux grotschilderingen werden gecreëerd door de Magdalenien cultuur ongeveer 17.000 jaar geleden tijdens het Laat-Paleolithicum. De grot bevat meer dan 600 geschilderde dieren, voornamelijk paarden, herten, oerossen en bizons."
        }
      },
      {
        question: {
          en: "What is the main purpose of flotation in archaeological processing?",
          es: "¿Cuál es el propósito principal de la flotación en el procesamiento arqueológico?",
          de: "Was ist der Hauptzweck der Flotation in der archäologischen Verarbeitung?",
          nl: "Wat is het hoofddoel van flotatie in archeologische verwerking?"
        },
        options: [
          { en: "Recovering small organic remains like seeds", es: "Recuperar pequeños restos orgánicos como semillas", de: "Gewinnung kleiner organischer Überreste wie Samen", nl: "Herwinnen van kleine organische resten zoals zaden" },
          { en: "Cleaning pottery shards", es: "Limpiar fragmentos de cerámica", de: "Reinigung von Keramikscherben", nl: "Reinigen van aardewerkscherven" },
          { en: "Dating bone fragments", es: "Datación de fragmentos de hueso", de: "Datierung von Knochenfragmenten", nl: "Datering van botfragmenten" },
          { en: "Preserving metal objects", es: "Conservar objetos de metal", de: "Erhaltung von Metallobjekten", nl: "Conserveren van metalen objecten" }
        ],
        correct: 0,
        explanation: {
          en: "Flotation uses water to separate light organic materials (seeds, charcoal, small bones) from heavier soil and stones. This technique is essential for recovering paleobotanical and paleoenvironmental evidence from archaeological sites.",
          es: "La flotación usa agua para separar materiales orgánicos ligeros (semillas, carbón, huesos pequeños) de suelo y piedras más pesados. Esta técnica es esencial para recuperar evidencia paleobotánica y paleoambiental de sitios arqueológicos.",
          de: "Die Flotation nutzt Wasser, um leichte organische Materialien (Samen, Holzkohle, kleine Knochen) von schwereren Böden und Steinen zu trennen. Diese Technik ist wesentlich für die Gewinnung paläobotanischer und paläoumweltlicher Belege aus archäologischen Stätten.",
          nl: "Flotatie gebruikt water om lichte organische materialen (zaden, houtskool, kleine botten) te scheiden van zwaarder grond en stenen. Deze techniek is essentieel voor het herwinnen van paleobotanisch en paleomilieu bewijs van archeologische sites."
        }
      },
      {
        question: {
          en: "Which ancient civilization is credited with inventing the wheel?",
          es: "¿Qué civilización antigua se acredita con la invención de la rueda?",
          de: "Welche antike Zivilisation wird mit der Erfindung des Rades in Verbindung gebracht?",
          nl: "Welke oude beschaving wordt gecrediteerd met de uitvinding van het wiel?"
        },
        options: [
          { en: "Mesopotamians", es: "Mesopotámicos", de: "Mesopotamier", nl: "Mesopotamiërs" },
          { en: "Egyptians", es: "Egipcios", de: "Ägypter", nl: "Egyptenaren" },
          { en: "Chinese", es: "Chinos", de: "Chinesen", nl: "Chinezen" },
          { en: "Indians", es: "Indios", de: "Inder", nl: "Indiërs" }
        ],
        correct: 0,
        explanation: {
          en: "The earliest evidence of wheeled vehicles comes from Mesopotamia around 3500 BCE. Initially used as potter's wheels, the technology was later adapted for transportation with the first wheeled carts appearing around 3200 BCE.",
          es: "La evidencia más temprana de vehículos con ruedas viene de Mesopotamia alrededor del 3500 a.C. Inicialmente usada como ruedas de alfarero, la tecnología fue luego adaptada para transporte con los primeros carros con ruedas apareciendo alrededor del 3200 a.C.",
          de: "Die frühesten Belege für Radfahrzeuge stammen aus Mesopotamien um 3500 v. Chr. Zunächst als Töpferscheiben verwendet, wurde die Technologie später für den Transport angepasst, wobei die ersten Radkarren um 3200 v. Chr. erschienen.",
          nl: "Het vroegste bewijs van voertuigen met wielen komt uit Mesopotamië rond 3500 BCE. Aanvankelijk gebruikt als pottenbakkerswielen, werd de technologie later aangepast voor transport waarbij de eerste wielkarren rond 3200 BCE verschenen."
        }
      },
      {
        question: {
          en: "What is a 'tell' in Middle Eastern archaeology?",
          es: "¿Qué es un 'tell' en la arqueología del Medio Oriente?",
          de: "Was ist ein 'Tell' in der nahöstlichen Archäologie?",
          nl: "Wat is een 'tell' in Midden-Oosterse archeologie?"
        },
        options: [
          { en: "An artificial mound formed by successive settlements", es: "Un montículo artificial formado por asentamientos sucesivos", de: "Ein künstlicher Hügel, gebildet durch aufeinanderfolgende Siedlungen", nl: "Een kunstmatige heuvel gevormd door opeenvolgende nederzettingen" },
          { en: "A type of ancient pottery", es: "Un tipo de cerámica antigua", de: "Eine Art antiker Keramik", nl: "Een type oud aardewerk" },
          { en: "A burial chamber", es: "Una cámara funeraria", de: "Eine Grabkammer", nl: "Een grafkamer" },
          { en: "An ancient writing system", es: "Un sistema de escritura antiguo", de: "Ein antikes Schriftsystem", nl: "Een oud schrijfsysteem" }
        ],
        correct: 0,
        explanation: {
          en: "A tell is an artificial mound created by the accumulation of debris from successive human settlements built on the same spot over thousands of years. These mounds can reach significant heights and contain multiple layers of occupation.",
          es: "Un tell es un montículo artificial creado por la acumulación de escombros de asentamientos humanos sucesivos construidos en el mismo lugar durante miles de años. Estos montículos pueden alcanzar alturas significativas y contener múltiples capas de ocupación.",
          de: "Ein Tell ist ein künstlicher Hügel, der durch die Ansammlung von Trümmern aufeinanderfolgender menschlicher Siedlungen entsteht, die über Tausende von Jahren am selben Ort errichtet wurden. Diese Hügel können beträchtliche Höhen erreichen und mehrere Besiedlungsschichten enthalten.",
          nl: "Een tell is een kunstmatige heuvel gecreëerd door de accumulatie van puin van opeenvolgende menselijke nederzettingen gebouwd op dezelfde plaats gedurende duizenden jaren. Deze heuvels kunnen aanzienlijke hoogtes bereiken en bevatten meerdere lagen van bewoning."
        }
      },
      {
        question: {
          en: "What revolutionary discovery at Pompeii provided unprecedented insight into daily Roman life?",
          es: "¿Qué descubrimiento revolucionario en Pompeya proporcionó una perspectiva sin precedentes de la vida diaria romana?",
          de: "Welche revolutionäre Entdeckung in Pompeji bot beispiellose Einblicke in das tägliche römische Leben?",
          nl: "Welke revolutionaire ontdekking bij Pompeii verschafte ongekende inzichten in het dagelijkse Romeinse leven?"
        },
        options: [
          { en: "Perfectly preserved buildings and artifacts under volcanic ash", es: "Edificios y artefactos perfectamente conservados bajo ceniza volcánica", de: "Perfekt erhaltene Gebäude und Artefakte unter Vulkanasche", nl: "Perfect bewaarde gebouwen en artefacten onder vulkanische as" },
          { en: "Ancient Roman library scrolls", es: "Rollos de biblioteca romana antigua", de: "Antike römische Bibliotheksrollen", nl: "Oude Romeinse bibliotheekrollen" },
          { en: "Roman military weapons cache", es: "Depósito de armas militares romanas", de: "Römisches Militärwaffenlager", nl: "Romeinse militaire wapenvoorraad" },
          { en: "Underground aqueduct system", es: "Sistema de acueducto subterráneo", de: "Unterirdisches Aquäduktsystem", nl: "Ondergronds aquaductsysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Mount Vesuvius's eruption in 79 CE buried Pompeii under volcanic ash, creating a time capsule that preserved buildings, frescoes, mosaics, everyday objects, and even human forms in extraordinary detail.",
          es: "La erupción del Monte Vesubio en 79 d.C. enterró Pompeya bajo ceniza volcánica, creando una cápsula del tiempo que conservó edificios, frescos, mosaicos, objetos cotidianos e incluso formas humanas en detalle extraordinario.",
          de: "Der Ausbruch des Vesuvs im Jahr 79 n. Chr. begrub Pompeji unter Vulkanasche und schuf eine Zeitkapsel, die Gebäude, Fresken, Mosaike, Alltagsgegenstände und sogar menschliche Formen in außergewöhnlicher Detailgenauigkeit bewahrte.",
          nl: "De uitbarsting van de Vesuvius in 79 CE begroef Pompeii onder vulkanische as, waardoor een tijdcapsule ontstond die gebouwen, fresco's, mozaïeken, dagelijkse voorwerpen en zelfs menselijke vormen in buitengewone detail bewaarde."
        }
      },
      {
        question: {
          en: "Which dating method is most appropriate for materials older than 50,000 years?",
          es: "¿Qué método de datación es más apropiado para materiales mayores de 50,000 años?",
          de: "Welche Datierungsmethode ist für Materialien älter als 50.000 Jahre am besten geeignet?",
          nl: "Welke dateringsmethode is het meest geschikt voor materialen ouder dan 50.000 jaar?"
        },
        options: [
          { en: "Potassium-argon dating", es: "Datación potasio-argón", de: "Kalium-Argon-Datierung", nl: "Kalium-argon datering" },
          { en: "Radiocarbon dating", es: "Datación por radiocarbono", de: "Radiokohlenstoffdatierung", nl: "Koolstofdatering" },
          { en: "Dendrochronology", es: "Dendrocronología", de: "Dendrochronologie", nl: "Dendrochronologie" },
          { en: "Thermoluminescence", es: "Termoluminiscencia", de: "Thermolumineszenz", nl: "Thermoluminescentie" }
        ],
        correct: 0,
        explanation: {
          en: "Potassium-argon dating measures the decay of potassium-40 to argon-40 in volcanic rocks and is effective for materials from 100,000 to billions of years old. Radiocarbon dating only works up to about 50,000 years.",
          es: "La datación potasio-argón mide la descomposición del potasio-40 al argón-40 en rocas volcánicas y es efectiva para materiales de 100,000 a miles de millones de años. La datación por radiocarbono solo funciona hasta unos 50,000 años.",
          de: "Die Kalium-Argon-Datierung misst den Zerfall von Kalium-40 zu Argon-40 in vulkanischen Gesteinen und ist effektiv für Materialien von 100.000 bis zu Milliarden von Jahren. Die Radiokohlenstoffdatierung funktioniert nur bis etwa 50.000 Jahre.",
          nl: "Kalium-argon datering meet het verval van kalium-40 naar argon-40 in vulkanische rotsen en is effectief voor materialen van 100.000 tot miljarden jaren oud. Koolstofdatering werkt slechts tot ongeveer 50.000 jaar."
        }
      },
      {
        question: {
          en: "What is the significance of the archaeological site of Göbekli Tepe in Turkey?",
          es: "¿Cuál es la significancia del sitio arqueológico de Göbekli Tepe en Turquía?",
          de: "Was ist die Bedeutung der archäologischen Stätte Göbekli Tepe in der Türkei?",
          nl: "Wat is de betekenis van de archeologische site Göbekli Tepe in Turkije?"
        },
        options: [
          { en: "World's oldest known temple complex", es: "Complejo de templos conocido más antiguo del mundo", de: "Ältester bekannter Tempelkomplex der Welt", nl: "'s Werelds oudst bekende tempelcomplex" },
          { en: "Earliest evidence of agriculture", es: "Evidencia más temprana de agricultura", de: "Früheste Belege für Landwirtschaft", nl: "Vroegste bewijs van landbouw" },
          { en: "First use of written language", es: "Primer uso de lenguaje escrito", de: "Erste Verwendung geschriebener Sprache", nl: "Eerste gebruik van geschreven taal" },
          { en: "Oldest human burial site", es: "Sitio de entierro humano más antiguo", de: "Älteste menschliche Begräbnisstätte", nl: "Oudste menselijke begraafplaats" }
        ],
        correct: 0,
        explanation: {
          en: "Göbekli Tepe, dating to around 9500 BCE, is considered the world's oldest known temple complex. Built by hunter-gatherers before the development of agriculture, it challenges theories about the sequence of human cultural development.",
          es: "Göbekli Tepe, datado alrededor del 9500 a.C., se considera el complejo de templos conocido más antiguo del mundo. Construido por cazadores-recolectores antes del desarrollo de la agricultura, desafía teorías sobre la secuencia del desarrollo cultural humano.",
          de: "Göbekli Tepe, datiert auf etwa 9500 v. Chr., gilt als der älteste bekannte Tempelkomplex der Welt. Von Jägern und Sammlern vor der Entwicklung der Landwirtschaft erbaut, stellt er Theorien über die Abfolge der menschlichen kulturellen Entwicklung in Frage.",
          nl: "Göbekli Tepe, gedateerd rond 9500 BCE, wordt beschouwd als 's werelds oudst bekende tempelcomplex. Gebouwd door jager-verzamelaars vóór de ontwikkeling van landbouw, daagt het theorieën uit over de volgorde van menselijke culturele ontwikkeling."
        }
      },
      {
        question: {
          en: "What type of archaeological evidence is most commonly used to reconstruct ancient diets?",
          es: "¿Qué tipo de evidencia arqueológica se usa más comúnmente para reconstruir dietas antiguas?",
          de: "Welche Art archäologischer Belege wird am häufigsten zur Rekonstruktion antiker Ernährung verwendet?",
          nl: "Welk type archeologisch bewijs wordt het meest gebruikt om oude diëten te reconstrueren?"
        },
        options: [
          { en: "Plant and animal remains, stable isotope analysis", es: "Restos de plantas y animales, análisis de isótopos estables", de: "Pflanzen- und Tierreste, stabile Isotopenanalyse", nl: "Plant- en dierresten, stabiele isotopenanalyse" },
          { en: "Pottery styles and decorations", es: "Estilos y decoraciones de cerámica", de: "Keramikstile und Dekorationen", nl: "Aardewerkstijlen en decoraties" },
          { en: "Architectural layouts", es: "Diseños arquitectónicos", de: "Architektonische Grundrisse", nl: "Architectonische indelingen" },
          { en: "Metal tool composition", es: "Composición de herramientas metálicas", de: "Zusammensetzung von Metallwerkzeugen", nl: "Samenstelling van metalen gereedschap" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeological reconstruction of ancient diets relies on plant remains (seeds, pollen), animal bones, coprolites (fossilized feces), and stable isotope analysis of human remains that reveals the types of foods consumed.",
          es: "La reconstrucción arqueológica de dietas antiguas se basa en restos de plantas (semillas, polen), huesos de animales, coprolitos (heces fosilizadas), y análisis de isótopos estables de restos humanos que revela los tipos de alimentos consumidos.",
          de: "Die archäologische Rekonstruktion antiker Ernährung stützt sich auf Pflanzenreste (Samen, Pollen), Tierknochen, Koprolite (fossiler Kot) und stabile Isotopenanalyse menschlicher Überreste, die die Art der konsumierten Nahrung offenbart.",
          nl: "Archeologische reconstructie van oude diëten vertrouwt op plantenresten (zaden, pollen), dierenbotten, coprolieten (gefossiliseerde uitwerpselen), en stabiele isotopenanalyse van menselijke resten die de soorten geconsumeerd voedsel onthullen."
        }
      },
      {
        question: {
          en: "Which ancient Mesopotamian city is considered the world's first urban center?",
          es: "¿Qué ciudad mesopotámica antigua se considera el primer centro urbano del mundo?",
          de: "Welche antike mesopotamische Stadt gilt als das erste urbane Zentrum der Welt?",
          nl: "Welke oude Mesopotamische stad wordt beschouwd als 's werelds eerste stedelijk centrum?"
        },
        options: [
          { en: "Uruk", es: "Uruk", de: "Uruk", nl: "Uruk" },
          { en: "Babylon", es: "Babilonia", de: "Babylon", nl: "Babylon" },
          { en: "Ur", es: "Ur", de: "Ur", nl: "Ur" },
          { en: "Nineveh", es: "Nínive", de: "Ninive", nl: "Nineve" }
        ],
        correct: 0,
        explanation: {
          en: "Uruk, dating to around 4000 BCE, is considered the world's first true city with a population reaching 50,000-80,000 people. It featured monumental architecture, complex administration, and is where cuneiform writing was developed.",
          es: "Uruk, datado alrededor del 4000 a.C., se considera la primera ciudad verdadera del mundo con una población que alcanzó 50,000-80,000 personas. Presentaba arquitectura monumental, administración compleja, y es donde se desarrolló la escritura cuneiforme.",
          de: "Uruk, datiert auf etwa 4000 v. Chr., gilt als die erste wahre Stadt der Welt mit einer Bevölkerung von 50.000-80.000 Menschen. Sie wies monumentale Architektur, komplexe Verwaltung auf und ist der Ort, wo die Keilschrift entwickelt wurde.",
          nl: "Uruk, gedateerd rond 4000 BCE, wordt beschouwd als 's werelds eerste echte stad met een bevolking die 50.000-80.000 mensen bereikte. Het had monumentale architectuur, complexe administratie, en is waar spijkerschrift werd ontwikkeld."
        }
      },
      {
        question: {
          en: "What is the primary advantage of using LiDAR technology in archaeology?",
          es: "¿Cuál es la ventaja principal de usar tecnología LiDAR en arqueología?",
          de: "Was ist der Hauptvorteil der Verwendung von LiDAR-Technologie in der Archäologie?",
          nl: "Wat is het primaire voordeel van het gebruik van LiDAR-technologie in archeologie?"
        },
        options: [
          { en: "Detecting structures hidden under vegetation", es: "Detectar estructuras ocultas bajo vegetación", de: "Erkennung von Strukturen, die unter Vegetation verborgen sind", nl: "Detecteren van structuren verborgen onder vegetatie" },
          { en: "Dating artifacts precisely", es: "Datación precisa de artefactos", de: "Präzise Datierung von Artefakten", nl: "Precieze datering van artefacten" },
          { en: "Chemical composition analysis", es: "Análisis de composición química", de: "Analyse der chemischen Zusammensetzung", nl: "Chemische samenstellingsanalyse" },
          { en: "Underwater exploration", es: "Exploración submarina", de: "Unterwassererkundung", nl: "Onderwater exploratie" }
        ],
        correct: 0,
        explanation: {
          en: "LiDAR (Light Detection and Ranging) uses laser pulses to create detailed topographic maps that can reveal archaeological features like ancient roads, buildings, and settlements hidden under forest canopy or other vegetation.",
          es: "LiDAR (Detección y Rango de Luz) usa pulsos láser para crear mapas topográficos detallados que pueden revelar características arqueológicas como caminos antiguos, edificios y asentamientos ocultos bajo dosel forestal u otra vegetación.",
          de: "LiDAR (Light Detection and Ranging) verwendet Laserpulse, um detaillierte topographische Karten zu erstellen, die archäologische Merkmale wie antike Straßen, Gebäude und Siedlungen enthüllen können, die unter Walddach oder anderer Vegetation verborgen sind.",
          nl: "LiDAR (Light Detection and Ranging) gebruikt laserpulsen om gedetailleerde topografische kaarten te maken die archeologische kenmerken kunnen onthullen zoals oude wegen, gebouwen en nederzettingen verborgen onder boskap of andere vegetatie."
        }
      },
      {
        question: {
          en: "Which civilization built the massive stone heads found on Easter Island (Rapa Nui)?",
          es: "¿Qué civilización construyó las cabezas de piedra masivas encontradas en la Isla de Pascua (Rapa Nui)?",
          de: "Welche Zivilisation baute die massiven Steinköpfe, die auf der Osterinsel (Rapa Nui) gefunden wurden?",
          nl: "Welke beschaving bouwde de massieve stenen hoofden gevonden op Paaseiland (Rapa Nui)?"
        },
        options: [
          { en: "Rapa Nui (Polynesian)", es: "Rapa Nui (Polinesio)", de: "Rapa Nui (Polynesisch)", nl: "Rapa Nui (Polynesisch)" },
          { en: "Inca", es: "Inca", de: "Inka", nl: "Inca" },
          { en: "Maya", es: "Maya", de: "Maya", nl: "Maya" },
          { en: "Aztec", es: "Azteca", de: "Azteken", nl: "Azteken" }
        ],
        correct: 0,
        explanation: {
          en: "The moai statues were created by the Rapa Nui people, Polynesian settlers who arrived on Easter Island around 1200 CE. Nearly 1,000 statues were carved from volcanic tuff between 1250-1500 CE, representing ancestral figures.",
          es: "Las estatuas moai fueron creadas por el pueblo Rapa Nui, colonos polinesios que llegaron a la Isla de Pascua alrededor del 1200 d.C. Casi 1,000 estatuas fueron talladas de toba volcánica entre 1250-1500 d.C., representando figuras ancestrales.",
          de: "Die Moai-Statuen wurden vom Rapa Nui-Volk geschaffen, polynesischen Siedlern, die um 1200 n. Chr. auf der Osterinsel ankamen. Fast 1.000 Statuen wurden zwischen 1250-1500 n. Chr. aus Vulkantuff geschnitzt und stellen Ahnenfiguren dar.",
          nl: "De moai beelden werden gecreëerd door het Rapa Nui volk, Polynesische kolonisten die rond 1200 CE op Paaseiland aankwamen. Bijna 1.000 beelden werden gehouwen uit vulkanische tufsteen tussen 1250-1500 CE, voorstellende voorouderlijke figuren."
        }
      },
      {
        question: {
          en: "What is the main purpose of an archaeological site survey before excavation?",
          es: "¿Cuál es el propósito principal de un reconocimiento de sitio arqueológico antes de la excavación?",
          de: "Was ist der Hauptzweck einer archäologischen Stättenuntersuchung vor der Ausgrabung?",
          nl: "Wat is het hoofddoel van een archeologische site-survey voor opgraving?"
        },
        options: [
          { en: "Map site extent and identify key features", es: "Mapear extensión del sitio e identificar características clave", de: "Kartierung der Stättenausdehnung und Identifikation wichtiger Merkmale", nl: "Site-uitbreiding in kaart brengen en sleutelkenmerken identificeren" },
          { en: "Determine artifact ownership", es: "Determinar propiedad de artefactos", de: "Bestimmung des Artefaktbesitzes", nl: "Eigendom van artefacten bepalen" },
          { en: "Calculate excavation costs", es: "Calcular costos de excavación", de: "Berechnung der Ausgrabungskosten", nl: "Opgravingskosten berekenen" },
          { en: "Train field school students", es: "Entrenar estudiantes de escuela de campo", de: "Ausbildung von Feldschulstudenten", nl: "Veldschoolstudenten trainen" }
        ],
        correct: 0,
        explanation: {
          en: "Site surveys involve systematic surface collection, mapping, and non-invasive techniques to understand a site's extent, preserve important areas, and plan effective excavation strategies before any digging begins.",
          es: "Los reconocimientos de sitio involucran recolección superficial sistemática, mapeo y técnicas no invasivas para entender la extensión de un sitio, preservar áreas importantes y planear estrategias de excavación efectivas antes de que comience cualquier excavación.",
          de: "Stättenuntersuchungen beinhalten systematische Oberflächensammlung, Kartierung und nicht-invasive Techniken, um die Ausdehnung einer Stätte zu verstehen, wichtige Bereiche zu erhalten und effektive Ausgrabungsstrategien zu planen, bevor gegraben wird.",
          nl: "Site-surveys omvatten systematische oppervlakteverzameling, kartering en niet-invasieve technieken om een site's omvang te begrijpen, belangrijke gebieden te bewaren en effectieve opgravingsstrategieën te plannen voordat enig graven begint."
        }
      },
      {
        question: {
          en: "Which technique allows archaeologists to determine the season when an animal was killed?",
          es: "¿Qué técnica permite a los arqueólogos determinar la temporada cuando un animal fue matado?",
          de: "Welche Technik ermöglicht es Archäologen, die Jahreszeit zu bestimmen, in der ein Tier getötet wurde?",
          nl: "Welke techniek stelt archeologen in staat om het seizoen te bepalen waarin een dier werd gedood?"
        },
        options: [
          { en: "Tooth eruption and wear patterns", es: "Patrones de erupción y desgaste dental", de: "Zahndurchbruch- und Abnutzungsmuster", nl: "Tanduitbarsting en slijtagepartronen" },
          { en: "Bone density measurement", es: "Medición de densidad ósea", de: "Knochendichtemessung", nl: "Botdichtheidsmeting" },
          { en: "Carbon isotope analysis", es: "Análisis de isótopos de carbono", de: "Kohlenstoffisotopenanalyse", nl: "Koolstofisotopenanalyse" },
          { en: "DNA sequencing", es: "Secuenciación de ADN", de: "DNA-Sequenzierung", nl: "DNA-sequencing" }
        ],
        correct: 0,
        explanation: {
          en: "Tooth eruption sequences and wear patterns in young animals can indicate the season of death. Different teeth erupt at specific ages, and seasonal dietary changes leave distinct wear patterns on teeth surfaces.",
          es: "Las secuencias de erupción dental y patrones de desgaste en animales jóvenes pueden indicar la temporada de muerte. Diferentes dientes erupcionan a edades específicas, y cambios dietéticos estacionales dejan patrones de desgaste distintos en superficies dentales.",
          de: "Zahndurchbruchsequenzen und Abnutzungsmuster bei jungen Tieren können die Todeszeit anzeigen. Verschiedene Zähne brechen in bestimmten Altern durch, und saisonale Ernährungsveränderungen hinterlassen unterschiedliche Abnutzungsmuster auf Zahnoberflächen.",
          nl: "Tanduitbarstingssequenties en slijtagepartronen in jonge dieren kunnen het seizoen van overlijden aangeven. Verschillende tanden komen door op specifieke leeftijden, en seizoensgebonden dieetveranderingen laten onderscheidende slijtagepartronen achter op tandoppervlakken."
        }
      },
      {
        question: {
          en: "What was the primary building material used for Mesopotamian ziggurats?",
          es: "¿Cuál era el material de construcción principal usado para los zigurats mesopotámicos?",
          de: "Was war das primäre Baumaterial für mesopotamische Zikkurats?",
          nl: "Wat was het primaire bouwmateriaal gebruikt voor Mesopotamische ziggurats?"
        },
        options: [
          { en: "Mud bricks", es: "Ladrillos de barro", de: "Lehmziegel", nl: "Modderstenen" },
          { en: "Limestone blocks", es: "Bloques de caliza", de: "Kalksteinblöcke", nl: "Kalksteenblokken" },
          { en: "Granite slabs", es: "Losas de granito", de: "Granitplatten", nl: "Granieten platen" },
          { en: "Wooden logs", es: "Troncos de madera", de: "Holzstämme", nl: "Houten stammen" }
        ],
        correct: 0,
        explanation: {
          en: "Mesopotamian ziggurats were constructed primarily from sun-dried mud bricks, as stone was scarce in the river valley region. These bricks were sometimes fired for increased durability and often faced with fired bricks or bitumen for protection.",
          es: "Los zigurats mesopotámicos se construyeron principalmente de ladrillos de barro secados al sol, ya que la piedra era escasa en la región del valle fluvial. Estos ladrillos a veces se cocían para mayor durabilidad y a menudo se revestían con ladrillos cocidos o betún para protección.",
          de: "Mesopotamische Zikkurats wurden hauptsächlich aus sonnengetrockneten Lehmziegeln gebaut, da Stein in der Flusstalregion knapp war. Diese Ziegel wurden manchmal gebrannt für erhöhte Haltbarkeit und oft mit gebrannten Ziegeln oder Bitumen für Schutz verkleidet.",
          nl: "Mesopotamische ziggurats werden voornamelijk geconstrueerd uit zongedroogde modderstenen, omdat steen schaars was in de riviervalleistreek. Deze stenen werden soms gebakken voor verhoogde duurzaamheid en vaak bekleed met gebakken stenen of bitumen voor bescherming."
        }
      },
      {
        question: {
          en: "Which archaeological method is best for dating burned clay pottery?",
          es: "¿Qué método arqueológico es mejor para datar cerámica de arcilla quemada?",
          de: "Welche archäologische Methode eignet sich am besten zur Datierung gebrannter Tonkeramik?",
          nl: "Welke archeologische methode is het beste voor het dateren van gebrande klei aardewerk?"
        },
        options: [
          { en: "Thermoluminescence dating", es: "Datación por termoluminiscencia", de: "Thermolumineszenzdatierung", nl: "Thermoluminescentiedatering" },
          { en: "Radiocarbon dating", es: "Datación por radiocarbono", de: "Radiokohlenstoffdatierung", nl: "Koolstofdatering" },
          { en: "Potassium-argon dating", es: "Datación potasio-argón", de: "Kalium-Argon-Datierung", nl: "Kalium-argon datering" },
          { en: "Dendrochronology", es: "Dendrocronología", de: "Dendrochronologie", nl: "Dendrochronologie" }
        ],
        correct: 0,
        explanation: {
          en: "Thermoluminescence dating measures the light emitted from crystalline materials when heated. Clay pottery, when originally fired, has its 'luminescence clock' reset to zero, making this method ideal for dating ceramics up to 500,000 years old.",
          es: "La datación por termoluminiscencia mide la luz emitida de materiales cristalinos cuando se calientan. La cerámica de arcilla, cuando se coció originalmente, tiene su 'reloj de luminiscencia' reiniciado a cero, haciendo este método ideal para datar cerámicas hasta 500,000 años de antigüedad.",
          de: "Die Thermolumineszenzdatierung misst das Licht, das von kristallinen Materialien beim Erhitzen abgegeben wird. Tonkeramik hat, als sie ursprünglich gebrannt wurde, ihre 'Lumineszenzuhr' auf null zurückgesetzt, was diese Methode ideal für die Datierung von Keramik bis zu 500.000 Jahren macht.",
          nl: "Thermoluminescentiedatering meet het licht uitgezonden door kristallijne materialen wanneer verhit. Klei aardewerk, toen oorspronkelijk gebakken, heeft zijn 'luminescentie klok' gereset naar nul, waardoor deze methode ideaal is voor het dateren van keramiek tot 500.000 jaar oud."
        }
      },
      {
        question: {
          en: "What is the significance of the Venus of Willendorf figurine?",
          es: "¿Cuál es la significancia de la figurilla Venus de Willendorf?",
          de: "Was ist die Bedeutung der Venus von Willendorf-Figurine?",
          nl: "Wat is de betekenis van het Venus van Willendorf beeldje?"
        },
        options: [
          { en: "Earliest known example of prehistoric art depicting the human form", es: "Ejemplo conocido más temprano de arte prehistórico representando la forma humana", de: "Frühestes bekanntes Beispiel prähistorischer Kunst, die die menschliche Form darstellt", nl: "Vroegst bekende voorbeeld van prehistorische kunst die de menselijke vorm weergeeft" },
          { en: "First evidence of written language", es: "Primera evidencia de lenguaje escrito", de: "Erste Belege für geschriebene Sprache", nl: "Eerste bewijs van geschreven taal" },
          { en: "Ancient astronomical calculator", es: "Calculadora astronómica antigua", de: "Antiker astronomischer Rechner", nl: "Oude astronomische rekenmachine" },
          { en: "Religious sacrifice altar", es: "Altar de sacrificio religioso", de: "Religiöser Opferaltar", nl: "Religieus offeraltaar" }
        ],
        correct: 0,
        explanation: {
          en: "The Venus of Willendorf, dating to 28,000-25,000 BCE, is one of many 'Venus figurines' from the Paleolithic period. These small carvings are among the earliest known artistic representations of the human form, particularly emphasizing female characteristics.",
          es: "La Venus de Willendorf, datada de 28,000-25,000 a.C., es una de muchas 'figurillas de Venus' del período Paleolítico. Estas pequeñas tallas están entre las representaciones artísticas conocidas más tempranas de la forma humana, particularmente enfatizando características femeninas.",
          de: "Die Venus von Willendorf, datiert auf 28.000-25.000 v. Chr., ist eine von vielen 'Venus-Figurinen' aus der Paläolithikum-Periode. Diese kleinen Schnitzereien gehören zu den frühesten bekannten künstlerischen Darstellungen der menschlichen Form, die besonders weibliche Eigenschaften betonen.",
          nl: "De Venus van Willendorf, gedateerd op 28.000-25.000 BCE, is een van vele 'Venus beeldjes' uit de Paleolithische periode. Deze kleine snijwerken behoren tot de vroegst bekende artistieke representaties van de menselijke vorm, vooral benadrukkend vrouwelijke kenmerken."
        }
      },
      {
        question: {
          en: "Which ancient trade route connected East and West, facilitating cultural exchange?",
          es: "¿Qué ruta comercial antigua conectó Este y Oeste, facilitando intercambio cultural?",
          de: "Welche antike Handelsroute verband Ost und West und erleichterte den kulturellen Austausch?",
          nl: "Welke oude handelsroute verbond Oost en West, culturele uitwisseling faciliterend?"
        },
        options: [
          { en: "Silk Road", es: "Ruta de la Seda", de: "Seidenstraße", nl: "Zijderoute" },
          { en: "Amber Road", es: "Ruta del Ámbar", de: "Bernsteinstraße", nl: "Barnsteenroute" },
          { en: "Salt Road", es: "Ruta de la Sal", de: "Salzstraße", nl: "Zoutroute" },
          { en: "Spice Route", es: "Ruta de las Especias", de: "Gewürzroute", nl: "Specerijenroute" }
        ],
        correct: 0,
        explanation: {
          en: "The Silk Road was a network of trade routes connecting China with the Mediterranean world from around 130 BCE to 1453 CE. It facilitated not only trade in silk, spices, and goods, but also the exchange of ideas, technologies, and cultures.",
          es: "La Ruta de la Seda era una red de rutas comerciales conectando China con el mundo mediterráneo desde alrededor del 130 a.C. hasta 1453 d.C. Facilitó no solo comercio de seda, especias y bienes, sino también el intercambio de ideas, tecnologías y culturas.",
          de: "Die Seidenstraße war ein Netzwerk von Handelsrouten, das China von etwa 130 v. Chr. bis 1453 n. Chr. mit der Mittelmeerwelt verband. Sie erleichterte nicht nur den Handel mit Seide, Gewürzen und Waren, sondern auch den Austausch von Ideen, Technologien und Kulturen.",
          nl: "De Zijderoute was een netwerk van handelsroutes die China verbond met de mediterrane wereld van ongeveer 130 BCE tot 1453 CE. Het faciliteerde niet alleen handel in zijde, specerijen en goederen, maar ook de uitwisseling van ideeën, technologieën en culturen."
        }
      },
      {
        question: {
          en: "What does the term 'assemblage' refer to in archaeology?",
          es: "¿A qué se refiere el término 'ensamblaje' en arqueología?",
          de: "Worauf bezieht sich der Begriff 'Assemblage' in der Archäologie?",
          nl: "Waar verwijst de term 'assemblage' naar in archeologie?"
        },
        options: [
          { en: "A collection of artifacts from the same context", es: "Una colección de artefactos del mismo contexto", de: "Eine Sammlung von Artefakten aus demselben Kontext", nl: "Een verzameling van artefacten uit dezelfde context" },
          { en: "The process of reconstructing broken pottery", es: "El proceso de reconstruir cerámica rota", de: "Der Prozess der Rekonstruktion zerbrochener Keramik", nl: "Het proces van het reconstrueren van gebroken aardewerk" },
          { en: "A team of archaeologists working together", es: "Un equipo de arqueólogos trabajando juntos", de: "Ein Team von Archäologen, die zusammenarbeiten", nl: "Een team van archeologen die samenwerken" },
          { en: "The physical arrangement of excavation units", es: "La disposición física de unidades de excavación", de: "Die physische Anordnung von Ausgrabungseinheiten", nl: "De fysieke regeling van opgravingseenheden" }
        ],
        correct: 0,
        explanation: {
          en: "An assemblage is a collection of artifacts that were deposited at the same time and place, representing the material culture of a specific group or activity. Analyzing assemblages helps archaeologists understand past behaviors and cultural practices.",
          es: "Un ensamblaje es una colección de artefactos que fueron depositados al mismo tiempo y lugar, representando la cultura material de un grupo específico o actividad. Analizar ensamblajes ayuda a los arqueólogos a entender comportamientos pasados y prácticas culturales.",
          de: "Eine Assemblage ist eine Sammlung von Artefakten, die zur gleichen Zeit und am gleichen Ort abgelagert wurden und die materielle Kultur einer bestimmten Gruppe oder Aktivität repräsentieren. Die Analyse von Assemblagen hilft Archäologen, vergangene Verhaltensweisen und kulturelle Praktiken zu verstehen.",
          nl: "Een assemblage is een verzameling van artefacten die op hetzelfde tijdstip en plaats werden afgezet, vertegenwoordigend van de materiële cultuur van een specifieke groep of activiteit. Het analyseren van assemblages helpt archeologen verleden gedragingen en culturele praktijken te begrijpen."
        }
      },
      {
        question: {
          en: "Which ancient civilization is credited with developing the first systematic legal code?",
          es: "¿Qué civilización antigua se acredita con desarrollar el primer código legal sistemático?",
          de: "Welche antike Zivilisation wird mit der Entwicklung des ersten systematischen Rechtsgesetzbuchs in Verbindung gebracht?",
          nl: "Welke oude beschaving wordt gecrediteerd met het ontwikkelen van de eerste systematische juridische code?"
        },
        options: [
          { en: "Babylonians (Code of Hammurabi)", es: "Babilonios (Código de Hammurabi)", de: "Babylonier (Codex Hammurabi)", nl: "Babyloniërs (Code van Hammurabi)" },
          { en: "Egyptians", es: "Egipcios", de: "Ägypter", nl: "Egyptenaren" },
          { en: "Greeks", es: "Griegos", de: "Griechen", nl: "Grieken" },
          { en: "Romans", es: "Romanos", de: "Römer", nl: "Romeinen" }
        ],
        correct: 0,
        explanation: {
          en: "The Code of Hammurabi, created around 1750 BCE by Babylonian king Hammurabi, is one of the earliest and most complete legal codes. It contained 282 laws covering various aspects of daily life, business, and justice.",
          es: "El Código de Hammurabi, creado alrededor del 1750 a.C. por el rey babilónico Hammurabi, es uno de los códigos legales más tempranos y completos. Contenía 282 leyes cubriendo varios aspectos de la vida diaria, negocios y justicia.",
          de: "Der Codex Hammurabi, um 1750 v. Chr. vom babylonischen König Hammurabi geschaffen, ist eines der frühesten und vollständigsten Rechtsgesetzbücher. Er enthielt 282 Gesetze, die verschiedene Aspekte des täglichen Lebens, der Geschäfte und der Gerechtigkeit abdeckten.",
          nl: "De Code van Hammurabi, gecreëerd rond 1750 BCE door Babylonische koning Hammurabi, is een van de vroegste en meest complete juridische codes. Het bevatte 282 wetten die verschillende aspecten van het dagelijks leven, zaken en justitie bestreken."
        }
      },
      {
        question: {
          en: "What is the main advantage of underwater archaeology compared to terrestrial sites?",
          es: "¿Cuál es la ventaja principal de la arqueología submarina comparada con sitios terrestres?",
          de: "Was ist der Hauptvorteil der Unterwasserarchäologie im Vergleich zu terrestrischen Stätten?",
          nl: "Wat is het hoofdvoordeel van onderwater archeologie vergeleken met terrestrische sites?"
        },
        options: [
          { en: "Better preservation of organic materials", es: "Mejor conservación de materiales orgánicos", de: "Bessere Erhaltung organischer Materialien", nl: "Betere bewaring van organische materialen" },
          { en: "Easier excavation methods", es: "Métodos de excavación más fáciles", de: "Einfachere Ausgrabungsmethoden", nl: "Gemakkelijkere opgravingsmethoden" },
          { en: "More accessible to the public", es: "Más accesible al público", de: "Für die Öffentlichkeit zugänglicher", nl: "Toegankelijker voor het publiek" },
          { en: "Lower excavation costs", es: "Costos de excavación más bajos", de: "Niedrigere Ausgrabungskosten", nl: "Lagere opgravingskosten" }
        ],
        correct: 0,
        explanation: {
          en: "Underwater environments, particularly in cold or low-oxygen conditions, provide excellent preservation for organic materials like wood, leather, textiles, and human remains that would normally decay in terrestrial sites.",
          es: "Los ambientes subacuáticos, particularmente en condiciones frías o de bajo oxígeno, proporcionan excelente conservación para materiales orgánicos como madera, cuero, textiles y restos humanos que normalmente se descompondrían en sitios terrestres.",
          de: "Unterwasserumgebungen, insbesondere unter kalten oder sauerstoffarmen Bedingungen, bieten ausgezeichnete Erhaltung für organische Materialien wie Holz, Leder, Textilien und menschliche Überreste, die normalerweise an terrestrischen Stätten verfallen würden.",
          nl: "Onderwater omgevingen, vooral in koude of zuurstofarm condities, bieden uitstekende bewaring voor organische materialen zoals hout, leer, textiel en menselijke resten die normaal zouden vervallen op terrestrische sites."
        }
      },
      {
        question: {
          en: "Which dating method would be most appropriate for a 2,000-year-old wooden beam?",
          es: "¿Qué método de datación sería más apropiado para una viga de madera de 2,000 años?",
          de: "Welche Datierungsmethode wäre für einen 2.000 Jahre alten Holzbalken am besten geeignet?",
          nl: "Welke dateringsmethode zou het meest geschikt zijn voor een 2.000 jaar oude houten balk?"
        },
        options: [
          { en: "Dendrochronology", es: "Dendrocronología", de: "Dendrochronologie", nl: "Dendrochronologie" },
          { en: "Potassium-argon dating", es: "Datación potasio-argón", de: "Kalium-Argon-Datierung", nl: "Kalium-argon datering" },
          { en: "Thermoluminescence", es: "Termoluminiscencia", de: "Thermolumineszenz", nl: "Thermoluminescentie" },
          { en: "Uranium-lead dating", es: "Datación uranio-plomo", de: "Uran-Blei-Datierung", nl: "Uranium-lood datering" }
        ],
        correct: 0,
        explanation: {
          en: "Dendrochronology (tree-ring dating) analyzes the pattern of annual growth rings in wood. For a 2,000-year-old beam, this method can provide extremely precise dating, often to the exact year the tree was cut, if regional chronologies exist.",
          es: "La dendrocronología (datación por anillos de árboles) analiza el patrón de anillos de crecimiento anual en madera. Para una viga de 2,000 años, este método puede proporcionar datación extremadamente precisa, a menudo al año exacto en que se cortó el árbol, si existen cronologías regionales.",
          de: "Die Dendrochronologie (Baumringdatierung) analysiert das Muster der jährlichen Wachstumsringe im Holz. Für einen 2.000 Jahre alten Balken kann diese Methode extrem präzise Datierung liefern, oft bis auf das genaue Jahr, in dem der Baum gefällt wurde, wenn regionale Chronologien existieren.",
          nl: "Dendrochronologie (boomring-datering) analyseert het patroon van jaarlijkse groeiringen in hout. Voor een 2.000 jaar oude balk kan deze methode extreem precieze datering bieden, vaak tot het exacte jaar waarin de boom werd gekapt, als regionale chronologieën bestaan."
        }
      },
      {
        question: {
          en: "What was the primary function of the ancient Roman forum?",
          es: "¿Cuál era la función principal del foro romano antiguo?",
          de: "Was war die primäre Funktion des antiken römischen Forums?",
          nl: "Wat was de primaire functie van het oude Romeinse forum?"
        },
        options: [
          { en: "Central marketplace and civic center", es: "Mercado central y centro cívico", de: "Zentraler Marktplatz und Bürgerzentrum", nl: "Centrale marktplaats en burgercenter" },
          { en: "Religious temple complex", es: "Complejo de templos religiosos", de: "Religiöser Tempelkomplex", nl: "Religieus tempelcomplex" },
          { en: "Military training ground", es: "Campo de entrenamiento militar", de: "Militärischer Übungsplatz", nl: "Militaire trainingsgrond" },
          { en: "Private residential area", es: "Área residencial privada", de: "Privater Wohnbereich", nl: "Privé woongebied" }
        ],
        correct: 0,
        explanation: {
          en: "The Roman forum served as the heart of civic life, combining marketplace functions with government buildings, courts, temples, and public spaces. It was where citizens conducted business, participated in politics, and gathered for public events.",
          es: "El foro romano servía como el corazón de la vida cívica, combinando funciones de mercado con edificios gubernamentales, tribunales, templos y espacios públicos. Era donde los ciudadanos conducían negocios, participaban en política y se reunían para eventos públicos.",
          de: "Das römische Forum diente als Herz des bürgerlichen Lebens und kombinierte Marktplatzfunktionen mit Regierungsgebäuden, Gerichten, Tempeln und öffentlichen Räumen. Hier führten Bürger Geschäfte, nahmen an Politik teil und versammelten sich zu öffentlichen Veranstaltungen.",
          nl: "Het Romeinse forum diende als het hart van het burgerlijke leven, marktplaatsfuncties combinerend met overheidsgebouwen, rechtbanken, tempels en openbare ruimtes. Het was waar burgers zaken deden, deelnamen aan politiek en zich verzamelden voor publieke evenementen."
        }
      },
      {
        question: {
          en: "Which archaeological technique involves the systematic removal and documentation of soil layers?",
          es: "¿Qué técnica arqueológica involucra la remoción sistemática y documentación de capas de suelo?",
          de: "Welche archäologische Technik beinhaltet die systematische Entfernung und Dokumentation von Bodenschichten?",
          nl: "Welke archeologische techniek behelst de systematische verwijdering en documentatie van grondlagen?"
        },
        options: [
          { en: "Stratigraphic excavation", es: "Excavación estratigráfica", de: "Stratigraphische Ausgrabung", nl: "Stratigrafische opgraving" },
          { en: "Surface collection", es: "Recolección superficial", de: "Oberflächensammlung", nl: "Oppervlakteverzameling" },
          { en: "Remote sensing", es: "Detección remota", de: "Fernerkundung", nl: "Remote sensing" },
          { en: "Aerial photography", es: "Fotografía aérea", de: "Luftbildfotografie", nl: "Luchtfotografie" }
        ],
        correct: 0,
        explanation: {
          en: "Stratigraphic excavation follows the principle of superposition, carefully removing and documenting each distinct soil layer or 'stratum' to maintain chronological control and understand the sequence of site formation.",
          es: "La excavación estratigráfica sigue el principio de superposición, removiendo y documentando cuidadosamente cada capa de suelo distinta o 'estrato' para mantener control cronológico y entender la secuencia de formación del sitio.",
          de: "Die stratigraphische Ausgrabung folgt dem Prinzip der Superposition und entfernt und dokumentiert sorgfältig jede einzelne Bodenschicht oder 'Stratum', um chronologische Kontrolle zu behalten und die Sequenz der Stättenbildung zu verstehen.",
          nl: "Stratigrafische opgraving volgt het principe van superpositie, elke onderscheidende grondlaag of 'stratum' zorgvuldig verwijderend en documenterend om chronologische controle te behouden en de sequentie van site-vorming te begrijpen."
        }
      },
      {
        question: {
          en: "What is the archaeological significance of the Iceman 'Ötzi' discovered in the Alps?",
          es: "¿Cuál es la significancia arqueológica del Hombre de Hielo 'Ötzi' descubierto en los Alpes?",
          de: "Was ist die archäologische Bedeutung des in den Alpen entdeckten Eismanns 'Ötzi'?",
          nl: "Wat is de archeologische betekenis van de IJsman 'Ötzi' ontdekt in de Alpen?"
        },
        options: [
          { en: "Perfectly preserved Copper Age human with complete equipment", es: "Humano de la Edad del Cobre perfectamente conservado con equipo completo", de: "Perfekt erhaltener Kupferzeit-Mensch mit vollständiger Ausrüstung", nl: "Perfect bewaarde Koperen Tijd mens met complete uitrusting" },
          { en: "Oldest known example of mummification", es: "Ejemplo conocido más antiguo de momificación", de: "Ältestes bekanntes Beispiel der Mumifizierung", nl: "Oudst bekende voorbeeld van mummificatie" },
          { en: "Evidence of early Viking exploration", es: "Evidencia de exploración vikinga temprana", de: "Belege für frühe Wikinger-Erkundung", nl: "Bewijs van vroege Viking exploratie" },
          { en: "First discovery of prehistoric cave art", es: "Primer descubrimiento de arte rupestre prehistórico", de: "Erste Entdeckung prähistorischer Höhlenkunst", nl: "Eerste ontdekking van prehistorische grotkunst" }
        ],
        correct: 0,
        explanation: {
          en: "Ötzi, dating to around 3300 BCE, is a naturally mummified Copper Age man found with his complete toolkit including clothing, weapons, and equipment. This provides unprecedented insight into Neolithic/Copper Age technology and lifestyle.",
          es: "Ötzi, datado alrededor del 3300 a.C., es un hombre de la Edad del Cobre momificado naturalmente encontrado con su kit de herramientas completo incluyendo ropa, armas y equipo. Esto proporciona perspectiva sin precedentes sobre tecnología y estilo de vida Neolítico/Edad del Cobre.",
          de: "Ötzi, datiert auf etwa 3300 v. Chr., ist ein natürlich mumifizierter Kupferzeit-Mann, der mit seinem kompletten Werkzeugsatz einschließlich Kleidung, Waffen und Ausrüstung gefunden wurde. Dies bietet beispiellose Einblicke in die Technologie und Lebensweise der Jungsteinzeit/Kupferzeit.",
          nl: "Ötzi, gedateerd rond 3300 BCE, is een natuurlijk gemummificeerde Koperen Tijd man gevonden met zijn complete gereedschapsset inclusief kleding, wapens en uitrusting. Dit biedt ongekende inzichten in Neolithische/Koperen Tijd technologie en levensstijl."
        }
      },
      {
        question: {
          en: "Which ancient writing system was deciphered using the Rosetta Stone?",
          es: "¿Qué sistema de escritura antiguo fue descifrado usando la Piedra de Rosetta?",
          de: "Welches antike Schriftsystem wurde mit Hilfe des Rosetta-Steins entziffert?",
          nl: "Welk oud schrijfsysteem werd ontcijferd met behulp van de Rosetta Steen?"
        },
        options: [
          { en: "Egyptian hieroglyphs", es: "Jeroglíficos egipcios", de: "Ägyptische Hieroglyphen", nl: "Egyptische hiërogliefs" },
          { en: "Mesopotamian cuneiform", es: "Cuneiforme mesopotámico", de: "Mesopotamische Keilschrift", nl: "Mesopotamisch spijkerschrift" },
          { en: "Indus Valley script", es: "Escritura del Valle del Indo", de: "Indus-Tal-Schrift", nl: "Indus-vallei schrift" },
          { en: "Linear B", es: "Lineal B", de: "Linear B", nl: "Lineair B" }
        ],
        correct: 0,
        explanation: {
          en: "The Rosetta Stone, discovered in 1799, contains the same text in three scripts: hieroglyphic, demotic, and ancient Greek. By comparing the known Greek text with the hieroglyphs, scholars like Jean-François Champollion deciphered Egyptian hieroglyphs in 1822.",
          es: "La Piedra de Rosetta, descubierta en 1799, contiene el mismo texto en tres escrituras: jeroglífica, demótica y griego antiguo. Comparando el texto griego conocido con los jeroglíficos, eruditos como Jean-François Champollion descifraron los jeroglíficos egipcios en 1822.",
          de: "Der Rosetta-Stein, 1799 entdeckt, enthält denselben Text in drei Schriften: hieroglyphisch, demotisch und altgriechisch. Durch den Vergleich des bekannten griechischen Textes mit den Hieroglyphen entzifferten Gelehrte wie Jean-François Champollion 1822 die ägyptischen Hieroglyphen.",
          nl: "De Rosetta Steen, ontdekt in 1799, bevat dezelfde tekst in drie schriften: hiëroglifisch, demotisch en oud Grieks. Door de bekende Griekse tekst te vergelijken met de hiërogliefs, ontcijferden geleerden zoals Jean-François Champollion Egyptische hiërogliefs in 1822."
        }
      },
      {
        question: {
          en: "What is the primary purpose of creating a site datum in archaeological excavation?",
          es: "¿Cuál es el propósito principal de crear un datum del sitio en excavación arqueológica?",
          de: "Was ist der Hauptzweck der Erstellung eines Stättendatums bei archäologischen Ausgrabungen?",
          nl: "Wat is het hoofddoel van het creëren van een site-datum in archeologische opgraving?"
        },
        options: [
          { en: "Provide a fixed reference point for all measurements", es: "Proporcionar un punto de referencia fijo para todas las mediciones", de: "Einen festen Referenzpunkt für alle Messungen bereitstellen", nl: "Een vast referentiepunt bieden voor alle metingen" },
          { en: "Mark the center of the excavation", es: "Marcar el centro de la excavación", de: "Das Zentrum der Ausgrabung markieren", nl: "Het centrum van de opgraving markeren" },
          { en: "Indicate the deepest excavation point", es: "Indicar el punto de excavación más profundo", de: "Den tiefsten Ausgrabungspunkt anzeigen", nl: "Het diepste opgravingspunt aangeven" },
          { en: "Show the site's geographic orientation", es: "Mostrar la orientación geográfica del sitio", de: "Die geografische Ausrichtung der Stätte zeigen", nl: "De geografische oriëntatie van de site tonen" }
        ],
        correct: 0,
        explanation: {
          en: "A site datum is a permanent, fixed reference point (usually a concrete marker or metal spike) from which all horizontal and vertical measurements are taken. This ensures consistent, accurate recording of artifact locations throughout the excavation.",
          es: "Un datum del sitio es un punto de referencia permanente y fijo (usualmente un marcador de concreto o pico de metal) desde el cual se toman todas las mediciones horizontales y verticales. Esto asegura registro consistente y preciso de ubicaciones de artefactos a lo largo de la excavación.",
          de: "Ein Stättendatum ist ein permanenter, fester Referenzpunkt (normalerweise ein Betonmarker oder Metallspieß), von dem aus alle horizontalen und vertikalen Messungen vorgenommen werden. Dies gewährleistet konsistente, genaue Aufzeichnung von Artefaktstandorten während der gesamten Ausgrabung.",
          nl: "Een site-datum is een permanent, vast referentiepunt (meestal een betonnen markering of metalen pin) vanwaar alle horizontale en verticale metingen worden genomen. Dit zorgt voor consistente, nauwkeurige registratie van artefactlocaties gedurende de hele opgraving."
        }
      },
      {
        question: {
          en: "Which material evidence would best indicate craft specialization in an archaeological context?",
          es: "¿Qué evidencia material indicaría mejor especialización artesanal en un contexto arqueológico?",
          de: "Welche materielle Evidenz würde Handwerksspezialisierung in einem archäologischen Kontext am besten anzeigen?",
          nl: "Welk materiaal bewijs zou ambachtspecialisatie in een archeologische context het beste aangeven?"
        },
        options: [
          { en: "Concentrated production debris and specialized tools", es: "Desechos de producción concentrados y herramientas especializadas", de: "Konzentrierte Produktionsabfälle und spezialisierte Werkzeuge", nl: "Geconcentreerd productieafval en gespecialiseerd gereedschap" },
          { en: "Large storage containers", es: "Contenedores de almacenamiento grandes", de: "Große Lagerbehälter", nl: "Grote opslagcontainers" },
          { en: "Decorated pottery", es: "Cerámica decorada", de: "Dekorierte Keramik", nl: "Gedecoreerd aardewerk" },
          { en: "Imported raw materials", es: "Materias primas importadas", de: "Importierte Rohstoffe", nl: "Geïmporteerde grondstoffen" }
        ],
        correct: 0,
        explanation: {
          en: "Craft specialization is best evidenced by concentrated workshop areas containing production debris (like metal slag, pottery wasters, stone chips) along with specialized tools and equipment that indicate dedicated, skilled production activities.",
          es: "La especialización artesanal se evidencia mejor por áreas de taller concentradas conteniendo desechos de producción (como escoria de metal, cerámica defectuosa, astillas de piedra) junto con herramientas y equipo especializados que indican actividades de producción dedicadas y hábiles.",
          de: "Handwerksspezialisierung wird am besten durch konzentrierte Werkstattbereiche belegt, die Produktionsabfälle (wie Metallschlacke, Keramikausschuss, Steinspäne) zusammen mit spezialisierten Werkzeugen und Ausrüstung enthalten, die dedizierte, qualifizierte Produktionsaktivitäten anzeigen.",
          nl: "Ambachtspecialisatie wordt het beste bewezen door geconcentreerde werkplaatsgebieden met productieafval (zoals metaalslak, aardewerkuitval, steenspaanders) samen met gespecialiseerd gereedschap en uitrusting die toegewijde, bekwame productieactiviteiten aangeven."
        }
      },
      {
        question: {
          en: "What does the term 'taphonomy' refer to in archaeology?",
          es: "¿A qué se refiere el término 'tafonomía' en arqueología?",
          de: "Worauf bezieht sich der Begriff 'Taphonomie' in der Archäologie?",
          nl: "Waar verwijst de term 'tafonomie' naar in archeologie?"
        },
        options: [
          { en: "Study of what happens to remains after deposition", es: "Estudio de lo que pasa a los restos después de la deposición", de: "Studium dessen, was mit Überresten nach der Ablagerung geschieht", nl: "Studie van wat er met resten gebeurt na afzetting" },
          { en: "Classification of burial practices", es: "Clasificación de prácticas funerarias", de: "Klassifizierung von Bestattungspraktiken", nl: "Classificatie van begrafenispraktijken" },
          { en: "Analysis of trade relationships", es: "Análisis de relaciones comerciales", de: "Analyse von Handelsbeziehungen", nl: "Analyse van handelsrelaties" },
          { en: "Dating of archaeological sites", es: "Datación de sitios arqueológicos", de: "Datierung archäologischer Stätten", nl: "Datering van archeologische sites" }
        ],
        correct: 0,
        explanation: {
          en: "Taphonomy studies the processes that affect organic and inorganic remains after their initial deposition, including decay, scavenging, weathering, and human disturbance. Understanding taphonomy helps archaeologists interpret what they find and what might be missing.",
          es: "La tafonomía estudia los procesos que afectan restos orgánicos e inorgánicos después de su deposición inicial, incluyendo descomposición, carroñeo, meteorización y perturbación humana. Entender tafonomía ayuda a los arqueólogos interpretar lo que encuentran y lo que podría faltar.",
          de: "Die Taphonomie untersucht die Prozesse, die organische und anorganische Überreste nach ihrer anfänglichen Ablagerung betreffen, einschließlich Verfall, Aasfraß, Verwitterung und menschlicher Störung. Das Verständnis der Taphonomie hilft Archäologen zu interpretieren, was sie finden und was fehlen könnte.",
          nl: "Tafonomie bestudeert de processen die organische en anorganische resten beïnvloeden na hun oorspronkelijke afzetting, inclusief verval, aaseten, verwering en menselijke verstoring. Het begrijpen van tafonomie helpt archeologen te interpreteren wat ze vinden en wat er zou kunnen ontbreken."
        }
      },
      {
        question: {
          en: "Which archaeological evidence would best support the existence of social stratification in ancient societies?",
          es: "¿Qué evidencia arqueológica apoyaría mejor la existencia de estratificación social en sociedades antiguas?",
          de: "Welche archäologische Evidenz würde die Existenz sozialer Schichtung in antiken Gesellschaften am besten unterstützen?",
          nl: "Welk archeologisch bewijs zou het beste het bestaan van sociale stratificatie in oude samenlevingen ondersteunen?"
        },
        options: [
          { en: "Differential burial goods and house sizes", es: "Bienes funerarios diferenciales y tamaños de casas", de: "Unterschiedliche Grabbeigaben und Hausgrößen", nl: "Differentiële grafgiften en huisgroottes" },
          { en: "Presence of writing systems", es: "Presencia de sistemas de escritura", de: "Vorhandensein von Schriftsystemen", nl: "Aanwezigheid van schrijfsystemen" },
          { en: "Evidence of long-distance trade", es: "Evidencia de comercio a larga distancia", de: "Belege für Fernhandel", nl: "Bewijs van langafstandshandel" },
          { en: "Use of metal tools", es: "Uso de herramientas metálicas", de: "Verwendung von Metallwerkzeugen", nl: "Gebruik van metalen gereedschap" }
        ],
        correct: 0,
        explanation: {
          en: "Social stratification is best evidenced by differential access to resources, shown through varying qualities and quantities of burial goods, house sizes, and luxury items. Elite individuals typically have larger dwellings and richer grave goods than commoners.",
          es: "La estratificación social se evidencia mejor por acceso diferencial a recursos, mostrado a través de calidades y cantidades variadas de bienes funerarios, tamaños de casas y artículos de lujo. Los individuos élite típicamente tienen viviendas más grandes y bienes funerarios más ricos que los plebeyos.",
          de: "Soziale Schichtung wird am besten durch unterschiedlichen Zugang zu Ressourcen belegt, der durch variierende Qualitäten und Quantitäten von Grabbeigaben, Hausgrößen und Luxusgegenständen gezeigt wird. Eliteindividuen haben typischerweise größere Wohnungen und reichere Grabbeigaben als Gewöhnliche.",
          nl: "Sociale stratificatie wordt het beste bewezen door differentiële toegang tot middelen, getoond door variërende kwaliteiten en hoeveelheden grafgiften, huisgroottes en luxe-items. Elite individuen hebben typisch grotere woningen en rijkere grafgiften dan gewone mensen."
        }
      },
      {
        question: {
          en: "What is the term for the preserved remains or traces of ancient organisms?",
          es: "¿Cuál es el término para los restos preservados o rastros de organismos antiguos?",
          de: "Wie lautet der Begriff für die konservierten Überreste oder Spuren alter Organismen?",
          nl: "Wat is de term voor de bewaard gebleven resten of sporen van oude organismen?"
        },
        options: [
          { en: "Fossils", es: "Fósiles", de: "Fossilien", nl: "Fossielen" },
          { en: "Artifacts", es: "Artefactos", de: "Artefakte", nl: "Artefacten" },
          { en: "Ecofacts", es: "Ecofactos", de: "Ökofakte", nl: "Ecofacten" },
          { en: "Features", es: "Características", de: "Befunde", nl: "Kenmerken" }
        ],
        correct: 0,
        explanation: {
          en: "Fossils are the preserved remains, impressions, or traces of ancient organisms. They provide crucial evidence about past life forms and environmental conditions, helping archaeologists understand ancient ecosystems.",
          es: "Los fósiles son los restos preservados, impresiones o rastros de organismos antiguos. Proporcionan evidencia crucial sobre formas de vida pasadas y condiciones ambientales, ayudando a los arqueólogos a entender ecosistemas antiguos.",
          de: "Fossilien sind die konservierten Überreste, Abdrücke oder Spuren alter Organismen. Sie liefern entscheidende Belege für vergangene Lebensformen und Umweltbedingungen und helfen Archäologen, alte Ökosysteme zu verstehen.",
          nl: "Fossielen zijn de bewaard gebleven resten, afdrukken of sporen van oude organismen. Ze bieden cruciaal bewijs over verleden levensvormen en omgevingscondities, wat archeologen helpt oude ecosystemen te begrijpen."
        }
      },
      {
        question: {
          en: "Which archaeological feature typically indicates a settled community rather than a nomadic one?",
          es: "¿Qué característica arqueológica típicamente indica una comunidad establecida en lugar de una nómada?",
          de: "Welches archäologische Merkmal zeigt typischerweise eine sesshafte Gemeinschaft anstatt einer nomadischen an?",
          nl: "Welk archeologisch kenmerk duidt typisch op een gevestigde gemeenschap in plaats van een nomadische?"
        },
        options: [
          { en: "Permanent foundations and storage facilities", es: "Cimientos permanentes y instalaciones de almacenamiento", de: "Permanente Fundamente und Lagerstätten", nl: "Permanente funderingen en opslagfaciliteiten" },
          { en: "Portable tools and weapons", es: "Herramientas y armas portátiles", de: "Tragbare Werkzeuge und Waffen", nl: "Draagbaar gereedschap en wapens" },
          { en: "Temporary shelters", es: "Refugios temporales", de: "Temporäre Unterkünfte", nl: "Tijdelijke schuilplaatsen" },
          { en: "Small cooking hearths", es: "Pequeños hogares de cocina", de: "Kleine Kochherde", nl: "Kleine kookhaarden" }
        ],
        correct: 0,
        explanation: {
          en: "Permanent foundations, storage pits, granaries, and substantial architectural remains indicate settled communities that invested in long-term infrastructure. Nomadic societies typically leave more ephemeral archaeological traces.",
          es: "Cimientos permanentes, pozos de almacenamiento, graneros y restos arquitectónicos sustanciales indican comunidades establecidas que invirtieron en infraestructura a largo plazo. Las sociedades nómadas típicamente dejan rastros arqueológicos más efímeros.",
          de: "Permanente Fundamente, Lagerschächte, Getreidespeicher und substantielle architektonische Überreste zeigen sesshafte Gemeinschaften an, die in langfristige Infrastruktur investierten. Nomadische Gesellschaften hinterlassen typischerweise vergänglichere archäologische Spuren.",
          nl: "Permanente funderingen, opslaggeruiten, graanschuren en substantiële architectonische resten duiden op gevestigde gemeenschappen die investeerden in langetermijn infrastructuur. Nomadische samenlevingen laten typisch meer tijdelijke archeologische sporen achter."
        }
      },
      {
        question: {
          en: "What is the archaeological term for objects made or modified by humans?",
          es: "¿Cuál es el término arqueológico para objetos hechos o modificados por humanos?",
          de: "Wie lautet der archäologische Begriff für von Menschen hergestellte oder modifizierte Objekte?",
          nl: "Wat is de archeologische term voor objecten gemaakt of gewijzigd door mensen?"
        },
        options: [
          { en: "Artifacts", es: "Artefactos", de: "Artefakte", nl: "Artefacten" },
          { en: "Ecofacts", es: "Ecofactos", de: "Ökofakte", nl: "Ecofacten" },
          { en: "Features", es: "Características", de: "Befunde", nl: "Kenmerken" },
          { en: "Specimens", es: "Especímenes", de: "Exemplare", nl: "Specimens" }
        ],
        correct: 0,
        explanation: {
          en: "Artifacts are portable objects that have been made, used, or modified by humans. They include tools, pottery, jewelry, weapons, and other manufactured items that provide evidence of human behavior and technology.",
          es: "Los artefactos son objetos portátiles que han sido hechos, usados o modificados por humanos. Incluyen herramientas, cerámica, joyas, armas y otros artículos manufacturados que proporcionan evidencia del comportamiento y tecnología humana.",
          de: "Artefakte sind tragbare Objekte, die von Menschen hergestellt, verwendet oder modifiziert wurden. Sie umfassen Werkzeuge, Töpferwaren, Schmuck, Waffen und andere hergestellte Gegenstände, die Belege für menschliches Verhalten und Technologie liefern.",
          nl: "Artefacten zijn draagbare objecten die gemaakt, gebruikt of gewijzigd zijn door mensen. Ze omvatten gereedschap, aardewerk, sieraden, wapens en andere vervaardigde items die bewijs leveren van menselijk gedrag en technologie."
        }
      },
      {
        question: {
          en: "Which dating method is most suitable for dating wooden artifacts up to 10,000 years old?",
          es: "¿Qué método de datación es más adecuado para datar artefactos de madera de hasta 10,000 años de antigüedad?",
          de: "Welche Datierungsmethode ist am besten geeignet für die Datierung von Holzartefakten bis zu 10.000 Jahren alt?",
          nl: "Welke dateringsmethode is het meest geschikt voor het dateren van houten artefacten tot 10.000 jaar oud?"
        },
        options: [
          { en: "Dendrochronology", es: "Dendrocronología", de: "Dendrochronologie", nl: "Dendrochronologie" },
          { en: "Potassium-argon dating", es: "Datación potasio-argón", de: "Kalium-Argon-Datierung", nl: "Kalium-argon datering" },
          { en: "Thermoluminescence", es: "Termoluminiscencia", de: "Thermolumineszenz", nl: "Thermoluminescentie" },
          { en: "Uranium series dating", es: "Datación de series de uranio", de: "Uran-Serien-Datierung", nl: "Uraan reeks datering" }
        ],
        correct: 0,
        explanation: {
          en: "Dendrochronology, or tree-ring dating, is highly accurate for wooden artifacts within its applicable range. It matches tree-ring patterns in artifacts to established chronologies, providing precise dates often to the exact year.",
          es: "La dendrocronología, o datación por anillos de árboles, es muy precisa para artefactos de madera dentro de su rango aplicable. Hace coincidir patrones de anillos de árboles en artefactos con cronologías establecidas, proporcionando fechas precisas a menudo hasta el año exacto.",
          de: "Die Dendrochronologie oder Baumringdatierung ist sehr genau für Holzartefakte in ihrem anwendbaren Bereich. Sie gleicht Baumringmuster in Artefakten mit etablierten Chronologien ab und liefert präzise Daten oft bis zum genauen Jahr.",
          nl: "Dendrochronologie, of boomringdatering, is zeer nauwkeurig voor houten artefacten binnen het toepasselijke bereik. Het matcht boomringpatronen in artefacten met gevestigde chronologieën, wat precieze data levert vaak tot op het exacte jaar."
        }
      },
      {
        question: {
          en: "What is the primary purpose of archaeological site survey before excavation?",
          es: "¿Cuál es el propósito principal del reconocimiento del sitio arqueológico antes de la excavación?",
          de: "Was ist der Hauptzweck der archäologischen Standorterkundung vor der Ausgrabung?",
          nl: "Wat is het primaire doel van archeologische site survey voor opgraving?"
        },
        options: [
          { en: "To map surface features and plan systematic excavation", es: "Para mapear características superficiales y planificar excavación sistemática", de: "Oberflächenmerkmale zu kartieren und systematische Ausgrabung zu planen", nl: "Om oppervlaktekenmerken in kaart te brengen en systematische opgraving te plannen" },
          { en: "To collect all visible artifacts", es: "Para recolectar todos los artefactos visibles", de: "Alle sichtbaren Artefakte zu sammeln", nl: "Om alle zichtbare artefacten te verzamelen" },
          { en: "To determine the exact age of the site", es: "Para determinar la edad exacta del sitio", de: "Das genaue Alter der Stätte zu bestimmen", nl: "Om de exacte leeftijd van de site te bepalen" },
          { en: "To identify the site's ancient name", es: "Para identificar el nombre antiguo del sitio", de: "Den antiken Namen der Stätte zu identifizieren", nl: "Om de oude naam van de site te identificeren" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeological survey documents surface features, artifact distributions, and topography to understand site layout and guide strategic excavation planning. This preliminary work maximizes information recovery while minimizing site disturbance.",
          es: "El reconocimiento arqueológico documenta características superficiales, distribuciones de artefactos y topografía para entender el diseño del sitio y guiar la planificación estratégica de excavación. Este trabajo preliminar maximiza la recuperación de información mientras minimiza la perturbación del sitio.",
          de: "Die archäologische Erkundung dokumentiert Oberflächenmerkmale, Artefaktverteilungen und Topographie, um das Standortlayout zu verstehen und strategische Ausgrabungsplanung zu leiten. Diese vorbereitende Arbeit maximiert die Informationsgewinnung bei minimaler Standortstörung.",
          nl: "Archeologische survey documenteert oppervlaktekenmerken, artefactverdelingen en topografie om site-indeling te begrijpen en strategische opgravingsplanning te leiden. Dit voorbereidende werk maximaliseert informatierecuperatie terwijl site-verstoring wordt geminimaliseerd."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/archaeology', level1);
  }
})();