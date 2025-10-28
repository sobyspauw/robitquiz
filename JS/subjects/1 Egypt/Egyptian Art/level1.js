// Egyptian Art Quiz - Level 1: Knowledge about Egyptian Art
(function() {
  const level1 = {
    name: {
      en: "Egyptian Art Level 1",
      es: "Arte Egipcio Nivel 1",
      de: "Aegyptische Kunst Stufe 1",
      nl: "Egyptische Kunst Level 1"
    },
    questions: [
      {
        question: {
          en: "What material did ancient Egyptians commonly use for painting?",
          es: "Que material utilizaban comunmente los antiguos egipcios para pintar?",
          de: "Welches Material verwendeten die alten Aegypter haeufig zum Malen?",
          nl: "Welk materiaal gebruikten de oude Egyptenaren vaak voor schilderen?"
        },
        options: [
          { en: "Natural pigments and minerals", es: "Pigmentos naturales y minerales", de: "Natuerliche Pigmente und Mineralien", nl: "Natuurlijke pigmenten en mineralen" },
          { en: "Oil paints", es: "Pinturas al oleo", de: "Oelfarben", nl: "Olieverf" },
          { en: "Acrylic paints", es: "Pinturas acrilicas", de: "Acrylfarben", nl: "Acrylverf" },
          { en: "Watercolors", es: "Acuarelas", de: "Aquarellfarben", nl: "Aquarelverf" }
        ],
        correct: 0,
        explanation: {
          en: "Ancient Egyptians used natural pigments from minerals like malachite green, azurite blue, and ochre red mixed with water and gum arabic.",
          es: "Los antiguos egipcios usaban pigmentos naturales de minerales como malaquita verde, azurita azul y ocre rojo mezclados con agua y goma arabiga.",
          de: "Die alten Aegypter verwendeten natuerliche Pigmente aus Mineralien wie Malachitgruen, Azuritblau und Ockerrot, gemischt mit Wasser und Gummi arabicum.",
          nl: "De oude Egyptenaren gebruikten natuurlijke pigmenten van mineralen zoals malachietgroen, azurietblauw en okerrood gemengd met water en Arabische gom."
        }
      },
      {
        question: {
          en: "What is the name of the famous bust of an Egyptian queen?",
          es: "Como se llama el famoso busto de una reina egipcia?",
          de: "Wie heisst die beruehmte Bueste einer aegyptischen Koenigin?",
          nl: "Wat is de naam van de beroemde buste van een Egyptische koningin?"
        },
        options: [
          { en: "Bust of Nefertiti", es: "Busto de Nefertiti", de: "Bueste der Nofretete", nl: "Buste van Nefertiti" },
          { en: "Bust of Cleopatra", es: "Busto de Cleopatra", de: "Bueste der Kleopatra", nl: "Buste van Cleopatra" },
          { en: "Bust of Hatshepsut", es: "Busto de Hatshepsut", de: "Bueste der Hatschepsut", nl: "Buste van Hatshepsut" },
          { en: "Bust of Isis", es: "Busto de Isis", de: "Bueste der Isis", nl: "Buste van Isis" }
        ],
        correct: 0,
        explanation: {
          en: "The Bust of Nefertiti is one of the most famous works of ancient Egyptian art, created around 1345 BCE.",
          es: "El Busto de Nefertiti es una de las obras mas famosas del arte egipcio antiguo, creada alrededor de 1345 a.C.",
          de: "Die Bueste der Nofretete ist eines der beruehmtesten Werke der altaegyptischen Kunst, entstanden um 1345 v. Chr.",
          nl: "De Buste van Nefertiti is een van de beroemdste werken van oude Egyptische kunst, gemaakt rond 1345 v.Chr."
        }
      },
      {
        question: {
          en: "What color represented life and fertility in Egyptian art?",
          es: "Que color representaba la vida y la fertilidad en el arte egipcio?",
          de: "Welche Farbe repraesentierte Leben und Fruchtbarkeit in der aegyptischen Kunst?",
          nl: "Welke kleur vertegenwoordigde leven en vruchtbaarheid in Egyptische kunst?"
        },
        options: [
          { en: "Green", es: "Verde", de: "Gruen", nl: "Groen" },
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" }
        ],
        correct: 0,
        explanation: {
          en: "Green symbolized life, fertility, and regeneration in Egyptian art, often associated with Osiris and vegetation.",
          es: "El verde simbolizaba la vida, la fertilidad y la regeneracion en el arte egipcio, a menudo asociado con Osiris y la vegetacion.",
          de: "Gruen symbolisierte Leben, Fruchtbarkeit und Regeneration in der aegyptischen Kunst, oft mit Osiris und Vegetation verbunden.",
          nl: "Groen symboliseerde leven, vruchtbaarheid en regeneratie in Egyptische kunst, vaak geassocieerd met Osiris en vegetatie."
        }
      },
      {
        question: {
          en: "What is papyrus used for in Egyptian art?",
          es: "Para que se usaba el papiro en el arte egipcio?",
          de: "Wofuer wurde Papyrus in der aegyptischen Kunst verwendet?",
          nl: "Waarvoor werd papyrus gebruikt in Egyptische kunst?"
        },
        options: [
          { en: "Writing and painting surface", es: "Superficie para escribir y pintar", de: "Schreib- und Maloberflaeche", nl: "Schrijf- en schilderoppervlak" },
          { en: "Building material", es: "Material de construccion", de: "Baumaterial", nl: "Bouwmateriaal" },
          { en: "Food source", es: "Fuente de alimento", de: "Nahrungsquelle", nl: "Voedselbron" },
          { en: "Clothing fabric", es: "Tela para ropa", de: "Kleidungsstoff", nl: "Kledingstof" }
        ],
        correct: 0,
        explanation: {
          en: "Papyrus was the primary writing and painting surface in ancient Egypt, made from the papyrus plant that grew along the Nile.",
          es: "El papiro era la principal superficie de escritura y pintura en el antiguo Egipto, hecho de la planta de papiro que crecia a lo largo del Nilo.",
          de: "Papyrus war die primaere Schreib- und Maloberflaeche im alten Aegypten, hergestellt aus der Papyruspflanze, die am Nil wuchs.",
          nl: "Papyrus was het belangrijkste schrijf- en schilderoppervlak in het oude Egypte, gemaakt van de papyrusplant die langs de Nijl groeide."
        }
      },
      {
        question: {
          en: "How were Egyptian figures typically depicted in art?",
          es: "Como se representaban tipicamente las figuras egipcias en el arte?",
          de: "Wie wurden aegyptische Figuren typischerweise in der Kunst dargestellt?",
          nl: "Hoe werden Egyptische figuren meestal afgebeeld in kunst?"
        },
        options: [
          { en: "In profile with forward-facing eyes", es: "De perfil con ojos mirando al frente", de: "Im Profil mit nach vorne gerichteten Augen", nl: "In profiel met naar voren gerichte ogen" },
          { en: "Always in frontal view", es: "Siempre de frente", de: "Immer in Frontalansicht", nl: "Altijd frontaal" },
          { en: "From behind", es: "Desde atras", de: "Von hinten", nl: "Van achteren" },
          { en: "In three-quarter view", es: "En vista de tres cuartos", de: "In Dreiviertelansicht", nl: "In driekwart aanzicht" }
        ],
        correct: 0,
        explanation: {
          en: "Egyptian artists used a distinctive style showing figures in profile with the eye drawn as if viewed from the front, combining multiple perspectives.",
          es: "Los artistas egipcios usaban un estilo distintivo mostrando figuras de perfil con el ojo dibujado como si se viera de frente, combinando multiples perspectivas.",
          de: "Aegyptische Kuenstler verwendeten einen charakteristischen Stil, der Figuren im Profil mit frontal gezeichnetem Auge zeigte und mehrere Perspektiven kombinierte.",
          nl: "Egyptische kunstenaars gebruikten een kenmerkende stijl waarbij figuren in profiel werden getoond met het oog getekend alsof het van voren werd gezien, waarbij meerdere perspectieven werden gecombineerd."
        }
      },
      {
        question: {
          en: "What are scarabs in Egyptian art?",
          es: "Que son los escarabajos en el arte egipcio?",
          de: "Was sind Skarabaeus in der aegyptischen Kunst?",
          nl: "Wat zijn scarabeeën in Egyptische kunst?"
        },
        options: [
          { en: "Beetle-shaped amulets or seals", es: "Amuletos o sellos con forma de escarabajo", de: "Kaeferfoermige Amulette oder Siegel", nl: "Keverachtige amuletten of zegels" },
          { en: "Temple decorations", es: "Decoraciones de templos", de: "Tempeldekorationen", nl: "Tempelversieringen" },
          { en: "Painting tools", es: "Herramientas de pintura", de: "Malwerkzeuge", nl: "Schildergereedschap" },
          { en: "Crown ornaments", es: "Ornamentos de corona", de: "Kronenornamente", nl: "Kroonornamenten" }
        ],
        correct: 0,
        explanation: {
          en: "Scarabs were beetle-shaped amulets representing the dung beetle, symbolizing rebirth and transformation in Egyptian culture.",
          es: "Los escarabajos eran amuletos con forma de escarabajo que representaban al escarabajo pelotero, simbolizando el renacimiento y la transformacion en la cultura egipcia.",
          de: "Skarabaeus waren kaeferfoermige Amulette, die den Mistkaefer darstellten und Wiedergeburt und Transformation in der aegyptischen Kultur symbolisierten.",
          nl: "Scarabeeën waren keverachtige amuletten die de mestkever vertegenwoordigden en wedergeboorte en transformatie in de Egyptische cultuur symboliseerden."
        }
      },
      {
        question: {
          en: "What type of columns were common in Egyptian architecture?",
          es: "Que tipo de columnas eran comunes en la arquitectura egipcia?",
          de: "Welche Art von Saeulen war in der aegyptischen Architektur ueblich?",
          nl: "Welk type zuilen waren gebruikelijk in Egyptische architectuur?"
        },
        options: [
          { en: "Lotus and papyrus columns", es: "Columnas de loto y papiro", de: "Lotus- und Papyrussaeulen", nl: "Lotus- en papyruszuilen" },
          { en: "Ionic columns", es: "Columnas ionicas", de: "Ionische Saeulen", nl: "Ionische zuilen" },
          { en: "Doric columns", es: "Columnas doricas", de: "Dorische Saeulen", nl: "Dorische zuilen" },
          { en: "Corinthian columns", es: "Columnas corintias", de: "Korinthische Saeulen", nl: "Corinthische zuilen" }
        ],
        correct: 0,
        explanation: {
          en: "Egyptian columns were often decorated to resemble lotus flowers and papyrus plants, reflecting the importance of these plants in Egyptian culture.",
          es: "Las columnas egipcias a menudo se decoraban para parecerse a flores de loto y plantas de papiro, reflejando la importancia de estas plantas en la cultura egipcia.",
          de: "Aegyptische Saeulen wurden oft dekoriert, um Lotusblumen und Papyruspflanzen zu aehneln, was die Bedeutung dieser Pflanzen in der aegyptischen Kultur widerspiegelt.",
          nl: "Egyptische zuilen waren vaak versierd om op lotusbloemen en papyrusplanten te lijken, wat het belang van deze planten in de Egyptische cultuur weerspiegelt."
        }
      },
      {
        question: {
          en: "What is a cartouche in Egyptian art?",
          es: "Que es un cartucho en el arte egipcio?",
          de: "Was ist eine Kartusche in der aegyptischen Kunst?",
          nl: "Wat is een cartouche in Egyptische kunst?"
        },
        options: [
          { en: "An oval enclosing royal names", es: "Un ovalo que encierra nombres reales", de: "Ein Oval, das koenigliche Namen umschliesst", nl: "Een ovaal die koninklijke namen omsluit" },
          { en: "A type of crown", es: "Un tipo de corona", de: "Eine Art Krone", nl: "Een type kroon" },
          { en: "A painting technique", es: "Una tecnica de pintura", de: "Eine Maltechnik", nl: "Een schildertechniek" },
          { en: "A musical instrument", es: "Un instrumento musical", de: "Ein Musikinstrument", nl: "Een muziekinstrument" }
        ],
        correct: 0,
        explanation: {
          en: "A cartouche is an oval or oblong design containing hieroglyphic characters, typically used to enclose the names of pharaohs and other royal figures.",
          es: "Un cartucho es un diseno oval u oblongo que contiene caracteres jeroglificos, tipicamente usado para encerrar los nombres de faraones y otras figuras reales.",
          de: "Eine Kartusche ist ein ovales oder laengliches Design mit hieroglyphischen Zeichen, typischerweise verwendet, um die Namen von Pharaonen und anderen koeniglichen Figuren zu umschliessen.",
          nl: "Een cartouche is een ovaal of langwerpig ontwerp met hieroglyfische tekens, typisch gebruikt om de namen van farao's en andere koninklijke figuren te omsluiten."
        }
      },
      {
        question: {
          en: "What was the main purpose of Egyptian tomb art?",
          es: "Cual era el proposito principal del arte de las tumbas egipcias?",
          de: "Was war der Hauptzweck der aegyptischen Grabkunst?",
          nl: "Wat was het hoofddoel van Egyptische grafkunst?"
        },
        options: [
          { en: "To help the deceased in the afterlife", es: "Para ayudar al difunto en la otra vida", de: "Um dem Verstorbenen im Jenseits zu helfen", nl: "Om de overledene te helpen in het hiernamaals" },
          { en: "To display wealth", es: "Para mostrar riqueza", de: "Um Reichtum zu zeigen", nl: "Om rijkdom te tonen" },
          { en: "For decoration only", es: "Solo para decoracion", de: "Nur zur Dekoration", nl: "Alleen voor decoratie" },
          { en: "To frighten tomb robbers", es: "Para asustar a los ladrones de tumbas", de: "Um Grabräuber abzuschrecken", nl: "Om grafrovers af te schrikken" }
        ],
        correct: 0,
        explanation: {
          en: "Egyptian tomb art served a magical and religious function, providing the deceased with everything they would need for their journey and existence in the afterlife.",
          es: "El arte de las tumbas egipcias servia una funcion magica y religiosa, proporcionando al difunto todo lo que necesitaria para su viaje y existencia en la otra vida.",
          de: "Aegyptische Grabkunst erfuellte eine magische und religioese Funktion und versorgte den Verstorbenen mit allem, was er fuer seine Reise und Existenz im Jenseits benoetigen wuerde.",
          nl: "Egyptische grafkunst diende een magische en religieuze functie en voorzag de overledene van alles wat ze nodig zouden hebben voor hun reis en bestaan in het hiernamaals."
        }
      },
      {
        question: {
          en: "What is the Ankh symbol in Egyptian art?",
          es: "Que es el simbolo Ankh en el arte egipcio?",
          de: "Was ist das Ankh-Symbol in der aegyptischen Kunst?",
          nl: "Wat is het Ankh-symbool in Egyptische kunst?"
        },
        options: [
          { en: "Symbol of life", es: "Simbolo de la vida", de: "Symbol des Lebens", nl: "Symbool van het leven" },
          { en: "Symbol of death", es: "Simbolo de la muerte", de: "Symbol des Todes", nl: "Symbool van de dood" },
          { en: "Symbol of war", es: "Simbolo de la guerra", de: "Symbol des Krieges", nl: "Symbool van oorlog" },
          { en: "Symbol of wealth", es: "Simbolo de la riqueza", de: "Symbol des Reichtums", nl: "Symbool van rijkdom" }
        ],
        correct: 0,
        explanation: {
          en: "The Ankh is a cross with a loop at the top, representing eternal life and was one of the most important symbols in ancient Egyptian art.",
          es: "El Ankh es una cruz con un bucle en la parte superior, que representa la vida eterna y fue uno de los simbolos mas importantes en el arte egipcio antiguo.",
          de: "Das Ankh ist ein Kreuz mit einer Schleife an der Spitze, das ewiges Leben repraesentiert und eines der wichtigsten Symbole in der altaegyptischen Kunst war.",
          nl: "De Ankh is een kruis met een lus aan de bovenkant, dat eeuwig leven vertegenwoordigt en een van de belangrijkste symbolen in oude Egyptische kunst was."
        }
      },
      {
        question: {
          en: "What animals were commonly depicted in Egyptian art?",
          es: "Que animales se representaban comunmente en el arte egipcio?",
          de: "Welche Tiere wurden haeufig in der aegyptischen Kunst dargestellt?",
          nl: "Welke dieren werden vaak afgebeeld in Egyptische kunst?"
        },
        options: [
          { en: "Cats, birds, and crocodiles", es: "Gatos, pajaros y cocodrilos", de: "Katzen, Voegel und Krokodile", nl: "Katten, vogels en krokodillen" },
          { en: "Dogs, horses, and sheep", es: "Perros, caballos y ovejas", de: "Hunde, Pferde und Schafe", nl: "Honden, paarden en schapen" },
          { en: "Bears, wolves, and deer", es: "Osos, lobos y ciervos", de: "Baeren, Woelfe und Hirsche", nl: "Beren, wolven en herten" },
          { en: "Elephants, tigers, and monkeys", es: "Elefantes, tigres y monos", de: "Elefanten, Tiger und Affen", nl: "Olifanten, tijgers en apen" }
        ],
        correct: 0,
        explanation: {
          en: "Cats, birds like falcons and ibises, and crocodiles were sacred animals frequently depicted in Egyptian art, often associated with specific deities.",
          es: "Los gatos, pajaros como halcones e ibis, y cocodrilos eran animales sagrados frecuentemente representados en el arte egipcio, a menudo asociados con deidades especificas.",
          de: "Katzen, Voegel wie Falken und Ibisse und Krokodile waren heilige Tiere, die haeufig in der aegyptischen Kunst dargestellt wurden, oft mit bestimmten Gottheiten verbunden.",
          nl: "Katten, vogels zoals valken en ibissen, en krokodillen waren heilige dieren die vaak werden afgebeeld in Egyptische kunst, vaak geassocieerd met specifieke godheden."
        }
      },
      {
        question: {
          en: "What is relief carving in Egyptian art?",
          es: "Que es el tallado en relieve en el arte egipcio?",
          de: "Was ist Reliefschnitzerei in der aegyptischen Kunst?",
          nl: "Wat is reliefsnijwerk in Egyptische kunst?"
        },
        options: [
          { en: "Images carved into stone surfaces", es: "Imagenes talladas en superficies de piedra", de: "Bilder in Steinoberflaechen geschnitzt", nl: "Afbeeldingen gesneden in stenen oppervlakken" },
          { en: "Painted pottery", es: "Ceramica pintada", de: "Bemalte Toepferei", nl: "Beschilderd aardewerk" },
          { en: "Woven textiles", es: "Textiles tejidos", de: "Gewebte Textilien", nl: "Geweven textiel" },
          { en: "Metal sculptures", es: "Esculturas de metal", de: "Metallskulpturen", nl: "Metalen sculpturen" }
        ],
        correct: 0,
        explanation: {
          en: "Relief carving involved carving images into stone walls and surfaces, either raised relief or sunken relief, common in temples and tombs.",
          es: "El tallado en relieve implicaba tallar imagenes en paredes y superficies de piedra, ya sea relieve alzado o relieve hundido, comun en templos y tumbas.",
          de: "Reliefschnitzerei beinhaltete das Schnitzen von Bildern in Steinwaende und Oberflaechen, entweder erhabenes Relief oder versenktes Relief, ueblich in Tempeln und Graebern.",
          nl: "Reliefsnijwerk omvatte het snijden van afbeeldingen in stenen muren en oppervlakken, ofwel verhoogd relief of verzonken relief, gebruikelijk in tempels en graven."
        }
      },
      {
        question: {
          en: "What material were most Egyptian sculptures made from?",
          es: "De que material estaban hechas la mayoria de las esculturas egipcias?",
          de: "Aus welchem Material wurden die meisten aegyptischen Skulpturen hergestellt?",
          nl: "Van welk materiaal waren de meeste Egyptische sculpturen gemaakt?"
        },
        options: [
          { en: "Stone", es: "Piedra", de: "Stein", nl: "Steen" },
          { en: "Clay", es: "Arcilla", de: "Ton", nl: "Klei" },
          { en: "Wood only", es: "Solo madera", de: "Nur Holz", nl: "Alleen hout" },
          { en: "Bronze", es: "Bronce", de: "Bronze", nl: "Brons" }
        ],
        correct: 0,
        explanation: {
          en: "Most Egyptian sculptures were carved from stone such as limestone, granite, and basalt, which were abundant in Egypt and ensured lasting monuments.",
          es: "La mayoria de las esculturas egipcias se tallaban en piedra como caliza, granito y basalto, que abundaban en Egipto y aseguraban monumentos duraderos.",
          de: "Die meisten aegyptischen Skulpturen wurden aus Stein wie Kalkstein, Granit und Basalt geschnitzt, die in Aegypten reichlich vorhanden waren und dauerhafte Monumente sicherstellten.",
          nl: "De meeste Egyptische sculpturen waren gesneden uit steen zoals kalksteen, graniet en basalt, die overvloedig aanwezig waren in Egypte en blijvende monumenten garandeerden."
        }
      },
      {
        question: {
          en: "What does the Eye of Horus represent in Egyptian art?",
          es: "Que representa el Ojo de Horus en el arte egipcio?",
          de: "Was repraesentiert das Auge des Horus in der aegyptischen Kunst?",
          nl: "Wat vertegenwoordigt het Oog van Horus in Egyptische kunst?"
        },
        options: [
          { en: "Protection and healing", es: "Proteccion y curacion", de: "Schutz und Heilung", nl: "Bescherming en genezing" },
          { en: "War and conflict", es: "Guerra y conflicto", de: "Krieg und Konflikt", nl: "Oorlog en conflict" },
          { en: "Harvest and agriculture", es: "Cosecha y agricultura", de: "Ernte und Landwirtschaft", nl: "Oogst en landbouw" },
          { en: "Trade and commerce", es: "Comercio y negocios", de: "Handel und Gewerbe", nl: "Handel en commercie" }
        ],
        correct: 0,
        explanation: {
          en: "The Eye of Horus, also called the Wadjet eye, was a powerful symbol of protection, royal power, and good health in Egyptian culture.",
          es: "El Ojo de Horus, tambien llamado ojo Wadjet, era un poderoso simbolo de proteccion, poder real y buena salud en la cultura egipcia.",
          de: "Das Auge des Horus, auch Wadjet-Auge genannt, war ein maechtiges Symbol fuer Schutz, koenigliche Macht und gute Gesundheit in der aegyptischen Kultur.",
          nl: "Het Oog van Horus, ook wel het Wadjet-oog genoemd, was een krachtig symbool van bescherming, koninklijke macht en goede gezondheid in de Egyptische cultuur."
        }
      },
      {
        question: {
          en: "What were canopic jars decorated with?",
          es: "Con que se decoraban los vasos canopos?",
          de: "Womit wurden Kanopenkruege dekoriert?",
          nl: "Waarmee waren canopische kruiken versierd?"
        },
        options: [
          { en: "Heads of four sons of Horus", es: "Cabezas de los cuatro hijos de Horus", de: "Koepfe der vier Soehne des Horus", nl: "Hoofden van vier zonen van Horus" },
          { en: "Pharaoh portraits", es: "Retratos de faraones", de: "Pharaonenportraets", nl: "Farao portretten" },
          { en: "Flower patterns", es: "Patrones de flores", de: "Blumenmuster", nl: "Bloemenpatronen" },
          { en: "Geometric shapes", es: "Formas geometricas", de: "Geometrische Formen", nl: "Geometrische vormen" }
        ],
        correct: 0,
        explanation: {
          en: "Canopic jars, used to store organs during mummification, were topped with lids shaped like the heads of Horus's four sons: human, baboon, falcon, and jackal.",
          es: "Los vasos canopos, usados para almacenar organos durante la momificacion, tenian tapas con forma de cabezas de los cuatro hijos de Horus: humano, babuino, halcon y chacal.",
          de: "Kanopenkruege, die zur Aufbewahrung von Organen waehrend der Mumifizierung verwendet wurden, hatten Deckel in Form der Koepfe der vier Soehne des Horus: Mensch, Pavian, Falke und Schakal.",
          nl: "Canopische kruiken, gebruikt om organen op te slaan tijdens mummificatie, hadden deksels in de vorm van de hoofden van de vier zonen van Horus: mens, baviaan, valk en jakhals."
        }
      },
      {
        question: {
          en: "What was the typical pose of seated Egyptian statues?",
          es: "Cual era la pose tipica de las estatuas egipcias sentadas?",
          de: "Was war die typische Pose sitzender aegyptischer Statuen?",
          nl: "Wat was de typische pose van zittende Egyptische beelden?"
        },
        options: [
          { en: "Hands on knees, sitting upright", es: "Manos sobre las rodillas, sentado erguido", de: "Haende auf Knien, aufrecht sitzend", nl: "Handen op knieen, rechtop zittend" },
          { en: "Crossed legs", es: "Piernas cruzadas", de: "Gekreuzte Beine", nl: "Gekruiste benen" },
          { en: "Reclining position", es: "Posicion reclinada", de: "Liegende Position", nl: "Liggende positie" },
          { en: "Standing pose only", es: "Solo pose de pie", de: "Nur stehende Pose", nl: "Alleen staande pose" }
        ],
        correct: 0,
        explanation: {
          en: "Egyptian seated statues typically showed figures sitting upright with hands placed flat on their knees, symbolizing eternal stability and order.",
          es: "Las estatuas egipcias sentadas tipicamente mostraban figuras sentadas erguidas con las manos planas sobre las rodillas, simbolizando estabilidad y orden eternos.",
          de: "Aegyptische sitzende Statuen zeigten typischerweise aufrecht sitzende Figuren mit flach auf die Knie gelegten Haenden, was ewige Stabilitaet und Ordnung symbolisierte.",
          nl: "Egyptische zittende beelden toonden typisch figuren die rechtop zaten met handen plat op hun knieen, wat eeuwige stabiliteit en orde symboliseerde."
        }
      },
      {
        question: {
          en: "What is faience in Egyptian art?",
          es: "Que es la loza en el arte egipcio?",
          de: "Was ist Fayence in der aegyptischen Kunst?",
          nl: "Wat is faience in Egyptische kunst?"
        },
        options: [
          { en: "Blue-green glazed ceramic", es: "Ceramica vidriada azul-verde", de: "Blaugruene glasierte Keramik", nl: "Blauwgroene geglazuurde keramiek" },
          { en: "Gold leaf decoration", es: "Decoracion de pan de oro", de: "Blattgold-Dekoration", nl: "Bladgoud decoratie" },
          { en: "Carved ivory", es: "Marfil tallado", de: "Geschnitztes Elfenbein", nl: "Gesneden ivoor" },
          { en: "Painted wood", es: "Madera pintada", de: "Bemaltes Holz", nl: "Beschilderd hout" }
        ],
        correct: 0,
        explanation: {
          en: "Faience was a glazed ceramic material in distinctive blue-green colors, widely used for jewelry, amulets, and decorative objects in ancient Egypt.",
          es: "La loza era un material ceramico vidriado en colores azul-verde distintivos, ampliamente utilizado para joyeria, amuletos y objetos decorativos en el antiguo Egipto.",
          de: "Fayence war ein glasiertes Keramikmaterial in charakteristischen blaugruenen Farben, weit verbreitet fuer Schmuck, Amulette und dekorative Objekte im alten Aegypten.",
          nl: "Faience was een geglazuurd keramisch materiaal in kenmerkende blauwgroene kleuren, veel gebruikt voor sieraden, amuletten en decoratieve objecten in het oude Egypte."
        }
      },
      {
        question: {
          en: "What is hieratic art style?",
          es: "Que es el estilo de arte hieratico?",
          de: "Was ist hieratischer Kunststil?",
          nl: "Wat is hieratische kunststijl?"
        },
        options: [
          { en: "Formal, rigid style for important figures", es: "Estilo formal y rigido para figuras importantes", de: "Formaler, starrer Stil fuer wichtige Figuren", nl: "Formele, stijve stijl voor belangrijke figuren" },
          { en: "Realistic, natural style", es: "Estilo realista y natural", de: "Realistischer, natuerlicher Stil", nl: "Realistische, natuurlijke stijl" },
          { en: "Abstract, modern style", es: "Estilo abstracto y moderno", de: "Abstrakter, moderner Stil", nl: "Abstracte, moderne stijl" },
          { en: "Impressionistic style", es: "Estilo impresionista", de: "Impressionistischer Stil", nl: "Impressionistische stijl" }
        ],
        correct: 0,
        explanation: {
          en: "Hieratic art style was the formal, rigid, and idealized style used for depicting pharaohs and gods, emphasizing their divine and eternal nature.",
          es: "El estilo de arte hieratico era el estilo formal, rigido e idealizado usado para representar faraones y dioses, enfatizando su naturaleza divina y eterna.",
          de: "Der hieratische Kunststil war der formale, starre und idealisierte Stil zur Darstellung von Pharaonen und Goettern, der ihre goettliche und ewige Natur betonte.",
          nl: "Hieratische kunststijl was de formele, stijve en geidealiseerde stijl die werd gebruikt voor het afbeelden van farao's en goden, waarbij hun goddelijke en eeuwige aard werd benadrukt."
        }
      },
      {
        question: {
          en: "What was the purpose of ushabti figures?",
          es: "Cual era el proposito de las figuras ushabti?",
          de: "Was war der Zweck von Uschebti-Figuren?",
          nl: "Wat was het doel van ushabti figuren?"
        },
        options: [
          { en: "Servants in the afterlife", es: "Sirvientes en la otra vida", de: "Diener im Jenseits", nl: "Dienaren in het hiernamaals" },
          { en: "Toys for children", es: "Juguetes para ninos", de: "Spielzeug fuer Kinder", nl: "Speelgoed voor kinderen" },
          { en: "Temple offerings", es: "Ofrendas de templo", de: "Tempelopfer", nl: "Tempeloffers" },
          { en: "Building decorations", es: "Decoraciones de edificios", de: "Gebaeudedekorationen", nl: "Gebouwversieringen" }
        ],
        correct: 0,
        explanation: {
          en: "Ushabti figures were small servant statues placed in tombs to perform labor for the deceased in the afterlife when called upon.",
          es: "Las figuras ushabti eran pequenas estatuas de sirvientes colocadas en tumbas para realizar trabajo para el difunto en la otra vida cuando fueran llamadas.",
          de: "Uschebti-Figuren waren kleine Dienerfiguren, die in Graebern platziert wurden, um bei Bedarf Arbeit fuer den Verstorbenen im Jenseits zu verrichten.",
          nl: "Ushabti figuren waren kleine dienaarbeelden die in graven werden geplaatst om werk te verrichten voor de overledene in het hiernamaals wanneer daarom werd gevraagd."
        }
      },
      {
        question: {
          en: "What metal was most valued in Egyptian jewelry?",
          es: "Que metal era mas valorado en la joyeria egipcia?",
          de: "Welches Metall war am meisten in aegyptischem Schmuck geschaetzt?",
          nl: "Welk metaal was het meest gewaardeerd in Egyptische sieraden?"
        },
        options: [
          { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" },
          { en: "Silver", es: "Plata", de: "Silber", nl: "Zilver" },
          { en: "Iron", es: "Hierro", de: "Eisen", nl: "IJzer" },
          { en: "Copper", es: "Cobre", de: "Kupfer", nl: "Koper" }
        ],
        correct: 0,
        explanation: {
          en: "Gold was the most prized metal in ancient Egypt, associated with the sun god Ra and believed to be the flesh of the gods.",
          es: "El oro era el metal mas preciado en el antiguo Egipto, asociado con el dios sol Ra y se creia que era la carne de los dioses.",
          de: "Gold war das wertvollste Metall im alten Aegypten, verbunden mit dem Sonnengott Ra und man glaubte, es sei das Fleisch der Goetter.",
          nl: "Goud was het meest gewaardeerde metaal in het oude Egypte, geassocieerd met de zonnegod Ra en men geloofde dat het het vlees van de goden was."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
