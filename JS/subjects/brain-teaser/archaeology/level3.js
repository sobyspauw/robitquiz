// Archaeology - Level 3: Ancient Egypt and Pyramids
(function() {
  const level3 = {
    name: {
      en: "Ancient Egypt and Pyramids",
      es: "Antiguo Egipto y Pirámides", 
      de: "Altes Ägypten und Pyramiden",
      nl: "Oud-Egypte en Piramides"
    },
    questions: [
      {
        question: {
          en: "Which pharaoh is associated with the Great Pyramid of Giza?",
          es: "¿Qué faraón está asociado con la Gran Pirámide de Giza?",
          de: "Welcher Pharao ist mit der Großen Pyramide von Gizeh verbunden?",
          nl: "Welke farao wordt geassocieerd met de Grote Piramide van Giza?"
        },
        options: [
          { en: "Khufu", es: "Keops", de: "Cheops", nl: "Khufu" },
          { en: "Khafre", es: "Kefrén", de: "Chephren", nl: "Khafre" },
          { en: "Menkaure", es: "Micerino", de: "Mykerinos", nl: "Menkaure" },
          { en: "Djoser", es: "Zoser", de: "Djoser", nl: "Djoser" }
        ],
        correct: 0,
        explanation: {
          en: "The Great Pyramid of Giza was built for Pharaoh Khufu (also known as Cheops) around 2580-2560 BCE. It is the largest and oldest of the three pyramids at Giza.",
          es: "La Gran Pirámide de Giza fue construida para el Faraón Keops (también conocido como Khufu) alrededor del 2580-2560 a.C. Es la más grande y antigua de las tres pirámides de Giza.",
          de: "Die Große Pyramide von Gizeh wurde für Pharao Cheops (auch bekannt als Khufu) um 2580-2560 v. Chr. erbaut. Sie ist die größte und älteste der drei Pyramiden von Gizeh.",
          nl: "De Grote Piramide van Giza werd gebouwd voor Farao Khufu (ook bekend als Cheops) rond 2580-2560 v.Chr. Het is de grootste en oudste van de drie piramides van Giza."
        }
      },
      {
        question: {
          en: "What is the name of the writing system used in ancient Egypt?",
          es: "¿Cómo se llama el sistema de escritura usado en el antiguo Egipto?",
          de: "Wie heißt das Schriftsystem, das im alten Ägypten verwendet wurde?",
          nl: "Hoe heet het schriftsysteem dat in het oude Egypte werd gebruikt?"
        },
        options: [
          { en: "Hieroglyphs", es: "Jeroglíficos", de: "Hieroglyphen", nl: "Hiërogliefen" },
          { en: "Cuneiform", es: "Cuneiforme", de: "Keilschrift", nl: "Spijkerschrift" },
          { en: "Linear A", es: "Lineal A", de: "Linear A", nl: "Lineair A" },
          { en: "Phoenician", es: "Fenicio", de: "Phönizisch", nl: "Fenicisch" }
        ],
        correct: 0,
        explanation: {
          en: "Hieroglyphs were the formal writing system used in ancient Egypt, combining logographic and alphabetic elements. The Rosetta Stone was key to deciphering them.",
          es: "Los jeroglíficos fueron el sistema de escritura formal usado en el antiguo Egipto, combinando elementos logográficos y alfabéticos. La Piedra de Rosetta fue clave para descifrarlos.",
          de: "Hieroglyphen waren das formale Schriftsystem im alten Ägypten, das logographische und alphabetische Elemente kombinierte. Der Stein von Rosetta war der Schlüssel zu ihrer Entschlüsselung.",
          nl: "Hiërogliefen waren het formele schriftsysteem dat in het oude Egypte werd gebruikt, waarbij logografische en alfabetische elementen werden gecombineerd. De Steen van Rosetta was de sleutel tot het ontcijferen ervan."
        }
      },
      {
        question: {
          en: "Which river was central to ancient Egyptian civilization?",
          es: "¿Qué río fue central para la civilización del antiguo Egipto?",
          de: "Welcher Fluss war zentral für die altägyptische Zivilisation?",
          nl: "Welke rivier was centraal voor de oude Egyptische beschaving?"
        },
        options: [
          { en: "Nile", es: "Nilo", de: "Nil", nl: "Nijl" },
          { en: "Euphrates", es: "Éufrates", de: "Euphrat", nl: "Eufraat" },
          { en: "Tigris", es: "Tigris", de: "Tigris", nl: "Tigris" },
          { en: "Jordan", es: "Jordán", de: "Jordan", nl: "Jordaan" }
        ],
        correct: 0,
        explanation: {
          en: "The Nile River was the lifeblood of ancient Egypt, providing water, fertile soil through annual floods, and transportation. Egyptian civilization developed along its banks.",
          es: "El río Nilo fue la fuente de vida del antiguo Egipto, proporcionando agua, suelo fértil a través de inundaciones anuales y transporte. La civilización egipcia se desarrolló a lo largo de sus orillas.",
          de: "Der Nil war die Lebensader des alten Ägypten und lieferte Wasser, fruchtbaren Boden durch jährliche Überschwemmungen und Transport. Die ägyptische Zivilisation entwickelte sich entlang seiner Ufer.",
          nl: "De Nijl was de levensader van het oude Egypte, die water, vruchtbare grond door jaarlijkse overstromingen en transport leverde. De Egyptische beschaving ontwikkelde zich langs zijn oevers."
        }
      },
      {
        question: {
          en: "What material was primarily used to wrap Egyptian mummies?",
          es: "¿Qué material se usó principalmente para envolver las momias egipcias?",
          de: "Welches Material wurde hauptsächlich zum Einwickeln ägyptischer Mumien verwendet?",
          nl: "Welk materiaal werd voornamelijk gebruikt om Egyptische mummies in te wikkelen?"
        },
        options: [
          { en: "Linen", es: "Lino", de: "Leinen", nl: "Linnen" },
          { en: "Cotton", es: "Algodón", de: "Baumwolle", nl: "Katoen" },
          { en: "Silk", es: "Seda", de: "Seide", nl: "Zijde" },
          { en: "Wool", es: "Lana", de: "Wolle", nl: "Wol" }
        ],
        correct: 0,
        explanation: {
          en: "Linen strips were used to wrap mummies because linen was readily available in Egypt, durable, and had religious significance. The wrapping process could use hundreds of yards of linen.",
          es: "Se usaban tiras de lino para envolver momias porque el lino estaba fácilmente disponible en Egipto, era duradero y tenía significado religioso. El proceso de envoltura podía usar cientos de metros de lino.",
          de: "Leinenstreifen wurden zum Einwickeln von Mumien verwendet, weil Leinen in Ägypten leicht verfügbar, haltbar und von religiöser Bedeutung war. Der Einwickelungsprozess konnte Hunderte von Metern Leinen verwenden.",
          nl: "Linnen strips werden gebruikt om mummies in te wikkelen omdat linnen gemakkelijk verkrijgbaar was in Egypte, duurzaam was en religieuze betekenis had. Het inpakproces kon honderden meters linnen gebruiken."
        }
      },
      {
        question: {
          en: "Which god was considered the ruler of the underworld in Egyptian mythology?",
          es: "¿Qué dios era considerado el gobernante del inframundo en la mitología egipcia?",
          de: "Welcher Gott galt in der ägyptischen Mythologie als Herrscher der Unterwelt?",
          nl: "Welke god werd beschouwd als de heerser van de onderwereld in de Egyptische mythologie?"
        },
        options: [
          { en: "Osiris", es: "Osiris", de: "Osiris", nl: "Osiris" },
          { en: "Ra", es: "Ra", de: "Re", nl: "Ra" },
          { en: "Anubis", es: "Anubis", de: "Anubis", nl: "Anubis" },
          { en: "Horus", es: "Horus", de: "Horus", nl: "Horus" }
        ],
        correct: 0,
        explanation: {
          en: "Osiris was the Egyptian god of the underworld, death, and rebirth. He judged the dead and determined their fate in the afterlife according to Egyptian beliefs.",
          es: "Osiris era el dios egipcio del inframundo, la muerte y el renacimiento. Juzgaba a los muertos y determinaba su destino en el más allá según las creencias egipcias.",
          de: "Osiris war der ägyptische Gott der Unterwelt, des Todes und der Wiedergeburt. Er richtete die Toten und bestimmte ihr Schicksal im Jenseits nach ägyptischen Überzeugungen.",
          nl: "Osiris was de Egyptische god van de onderwereld, dood en wedergeboorte. Hij oordeelde de doden en bepaalde hun lot in het hiernamaals volgens Egyptische overtuigingen."
        }
      },
      {
        question: {
          en: "What is the name of the ancient Egyptian process of preserving bodies?",
          es: "¿Cómo se llama el proceso del antiguo Egipto de preservar cuerpos?",
          de: "Wie heißt der altägyptische Prozess der Körperkonservierung?",
          nl: "Hoe heet het oude Egyptische proces om lichamen te bewaren?"
        },
        options: [
          { en: "Mummification", es: "Momificación", de: "Mumifizierung", nl: "Mummificatie" },
          { en: "Embalming", es: "Embalsamamiento", de: "Einbalsamierung", nl: "Balsemen" },
          { en: "Fossilization", es: "Fosilización", de: "Fossilisierung", nl: "Fossilisatie" },
          { en: "Preservation", es: "Preservación", de: "Konservierung", nl: "Conservering" }
        ],
        correct: 0,
        explanation: {
          en: "Mummification was the Egyptian process of preserving bodies for the afterlife. It involved removing internal organs, drying the body with natron salt, and wrapping in linen bandages.",
          es: "La momificación era el proceso egipcio de preservar cuerpos para el más allá. Involucraba remover órganos internos, secar el cuerpo con sal natrón y envolver en vendas de lino.",
          de: "Mumifizierung war der ägyptische Prozess der Körperkonservierung für das Jenseits. Es beinhaltete die Entfernung innerer Organe, das Trocknen des Körpers mit Natronsalz und das Einwickeln in Leinenbandagen.",
          nl: "Mummificatie was het Egyptische proces om lichamen te bewaren voor het hiernamaals. Het omvatte het verwijderen van interne organen, het drogen van het lichaam met natronzout en het inwikkelen in linnen bandages."
        }
      },
      {
        question: {
          en: "Which Egyptian queen is famous for her relationship with Julius Caesar and Mark Antony?",
          es: "¿Qué reina egipcia es famosa por su relación con Julio César y Marco Antonio?",
          de: "Welche ägyptische Königin ist für ihre Beziehung zu Julius Caesar und Marcus Antonius berühmt?",
          nl: "Welke Egyptische koningin is beroemd om haar relatie met Julius Caesar en Marcus Antonius?"
        },
        options: [
          { en: "Cleopatra VII", es: "Cleopatra VII", de: "Kleopatra VII", nl: "Cleopatra VII" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatsjepsoet" },
          { en: "Ankhesenamun", es: "Anjesenamón", de: "Anchesenamun", nl: "Ankhesenamun" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra VII was the last pharaoh of Egypt and famous for her political and romantic relationships with Julius Caesar and later Mark Antony. She ruled from 69-30 BCE.",
          es: "Cleopatra VII fue la última faraona de Egipto y famosa por sus relaciones políticas y románticas con Julio César y después Marco Antonio. Gobernó del 69-30 a.C.",
          de: "Kleopatra VII war die letzte Pharaonin Ägyptens und berühmt für ihre politischen und romantischen Beziehungen zu Julius Caesar und später Marcus Antonius. Sie herrschte von 69-30 v. Chr.",
          nl: "Cleopatra VII was de laatste farao van Egypte en beroemd om haar politieke en romantische relaties met Julius Caesar en later Marcus Antonius. Ze regeerde van 69-30 v.Chr."
        }
      },
      {
        question: {
          en: "What stone provided the key to deciphering Egyptian hieroglyphs?",
          es: "¿Qué piedra proporcionó la clave para descifrar los jeroglíficos egipcios?",
          de: "Welcher Stein lieferte den Schlüssel zur Entschlüsselung der ägyptischen Hieroglyphen?",
          nl: "Welke steen verschafte de sleutel tot het ontcijferen van Egyptische hiërogliefen?"
        },
        options: [
          { en: "Rosetta Stone", es: "Piedra de Rosetta", de: "Stein von Rosetta", nl: "Steen van Rosetta" },
          { en: "Palermo Stone", es: "Piedra de Palermo", de: "Palermo-Stein", nl: "Palermo Steen" },
          { en: "Cairo Stone", es: "Piedra de El Cairo", de: "Kairo-Stein", nl: "Caïro Steen" },
          { en: "Memphis Stone", es: "Piedra de Memphis", de: "Memphis-Stein", nl: "Memphis Steen" }
        ],
        correct: 0,
        explanation: {
          en: "The Rosetta Stone, discovered in 1799, contained the same text in three scripts: hieroglyphic, demotic, and Greek. Jean-François Champollion used it to decipher hieroglyphs in 1822.",
          es: "La Piedra de Rosetta, descubierta en 1799, contenía el mismo texto en tres escrituras: jeroglífica, demótica y griega. Jean-François Champollion la usó para descifrar los jeroglíficos en 1822.",
          de: "Der Stein von Rosetta, 1799 entdeckt, enthielt denselben Text in drei Schriften: hieroglyphisch, demotisch und griechisch. Jean-François Champollion nutzte ihn 1822 zur Entschlüsselung der Hieroglyphen.",
          nl: "De Steen van Rosetta, ontdekt in 1799, bevatte dezelfde tekst in drie schriften: hiërogliefisch, demotisch en Grieks. Jean-François Champollion gebruikte het om hiërogliefen te ontcijferen in 1822."
        }
      },
      {
        question: {
          en: "Which pharaoh is known for establishing the first monotheistic religion in Egypt?",
          es: "¿Qué faraón es conocido por establecer la primera religión monoteísta en Egipto?",
          de: "Welcher Pharao ist dafür bekannt, die erste monotheistische Religion in Ägypten eingeführt zu haben?",
          nl: "Welke farao staat bekend om het vestigen van de eerste monotheïstische religie in Egypte?"
        },
        options: [
          { en: "Akhenaten", es: "Ajenatón", de: "Echnaton", nl: "Achnaton" },
          { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
          { en: "Ramesses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
          { en: "Thutmose III", es: "Tutmosis III", de: "Thutmosis III", nl: "Thoetmosis III" }
        ],
        correct: 0,
        explanation: {
          en: "Akhenaten (originally Amenhotep IV) temporarily changed Egyptian religion to worship only Aten, the sun disk, making it briefly monotheistic around 1350 BCE.",
          es: "Ajenatón (originalmente Amenhotep IV) cambió temporalmente la religión egipcia para adorar solo a Atón, el disco solar, haciéndola brevemente monoteísta alrededor del 1350 a.C.",
          de: "Echnaton (ursprünglich Amenhotep IV) änderte die ägyptische Religion vorübergehend, um nur Aton, die Sonnenscheibe, zu verehren, was sie um 1350 v. Chr. kurzzeitig monotheistisch machte.",
          nl: "Achnaton (oorspronkelijk Amenhotep IV) veranderde tijdelijk de Egyptische religie om alleen Aton, de zonneschijf, te aanbidden, waardoor het kort monotheïstisch werd rond 1350 v.Chr."
        }
      },
      {
        question: {
          en: "What is the name of the step pyramid built for Pharaoh Djoser?",
          es: "¿Cómo se llama la pirámide escalonada construida para el Faraón Zoser?",
          de: "Wie heißt die Stufenpyramide, die für Pharao Djoser gebaut wurde?",
          nl: "Hoe heet de trappenpiramide die werd gebouwd voor Farao Djoser?"
        },
        options: [
          { en: "Step Pyramid of Saqqara", es: "Pirámide Escalonada de Saqqara", de: "Stufenpyramide von Sakkara", nl: "Trappenpiramide van Saqqara" },
          { en: "Bent Pyramid", es: "Pirámide Acodada", de: "Knickpyramide", nl: "Geknakte Piramide" },
          { en: "Red Pyramid", es: "Pirámide Roja", de: "Rote Pyramide", nl: "Rode Piramide" },
          { en: "Great Pyramid", es: "Gran Pirámide", de: "Große Pyramide", nl: "Grote Piramide" }
        ],
        correct: 0,
        explanation: {
          en: "The Step Pyramid of Saqqara, built around 2670 BCE by architect Imhotep, was the first pyramid ever built and marked the beginning of pyramid construction in Egypt.",
          es: "La Pirámide Escalonada de Saqqara, construida alrededor del 2670 a.C. por el arquitecto Imhotep, fue la primera pirámide jamás construida y marcó el comienzo de la construcción de pirámides en Egipto.",
          de: "Die Stufenpyramide von Sakkara, um 2670 v. Chr. vom Architekten Imhotep erbaut, war die erste jemals gebaute Pyramide und markierte den Beginn des Pyramidenbaus in Ägypten.",
          nl: "De Trappenpiramide van Saqqara, gebouwd rond 2670 v.Chr. door architect Imhotep, was de eerste piramide ooit gebouwd en markeerde het begin van piramidebouw in Egypte."
        }
      },
      {
        question: {
          en: "Which Egyptian god had the head of a jackal and was associated with mummification?",
          es: "¿Qué dios egipcio tenía cabeza de chacal y estaba asociado con la momificación?",
          de: "Welcher ägyptische Gott hatte den Kopf eines Schakals und war mit der Mumifizierung verbunden?",
          nl: "Welke Egyptische god had het hoofd van een jakhals en was geassocieerd met mummificatie?"
        },
        options: [
          { en: "Anubis", es: "Anubis", de: "Anubis", nl: "Anubis" },
          { en: "Thoth", es: "Thot", de: "Thot", nl: "Thoth" },
          { en: "Sobek", es: "Sobek", de: "Sobek", nl: "Sobek" },
          { en: "Hapi", es: "Hapi", de: "Hapi", nl: "Hapi" }
        ],
        correct: 0,
        explanation: {
          en: "Anubis, the jackal-headed god, was the ancient Egyptian deity of mummification and the afterlife. He guided souls through the underworld and oversaw the weighing of hearts.",
          es: "Anubis, el dios con cabeza de chacal, era la deidad del antiguo Egipto de la momificación y el más allá. Guiaba las almas a través del inframundo y supervisaba el pesaje de corazones.",
          de: "Anubis, der schakalköpfige Gott, war die altägyptische Gottheit der Mumifizierung und des Jenseits. Er führte Seelen durch die Unterwelt und überwachte das Wiegen der Herzen.",
          nl: "Anubis, de god met jakhalsenhoofd, was de oude Egyptische godheid van mummificatie en het hiernamaals. Hij leidde zielen door de onderwereld en hield toezicht op het wegen van harten."
        }
      },
      {
        question: {
          en: "What was the primary purpose of the ancient Egyptian pyramids?",
          es: "¿Cuál era el propósito principal de las pirámides del antiguo Egipto?",
          de: "Was war der Hauptzweck der altägyptischen Pyramiden?",
          nl: "Wat was het primaire doel van de oude Egyptische piramides?"
        },
        options: [
          { en: "Tombs for pharaohs", es: "Tumbas para faraones", de: "Gräber für Pharaonen", nl: "Graven voor farao's" },
          { en: "Temples for worship", es: "Templos para adoración", de: "Tempel für die Anbetung", nl: "Tempels voor aanbidding" },
          { en: "Observatories for astronomy", es: "Observatorios para astronomía", de: "Observatorien für Astronomie", nl: "Observatoria voor astronomie" },
          { en: "Granaries for food storage", es: "Graneros para almacenar alimentos", de: "Getreidespeicher für Lebensmittel", nl: "Graanschuren voor voedselopslag" }
        ],
        correct: 0,
        explanation: {
          en: "Pyramids were built as elaborate tombs for pharaohs and their families, designed to protect their bodies and possessions for the journey to the afterlife.",
          es: "Las pirámides fueron construidas como tumbas elaboradas para faraones y sus familias, diseñadas para proteger sus cuerpos y posesiones para el viaje al más allá.",
          de: "Pyramiden wurden als aufwendige Gräber für Pharaonen und ihre Familien gebaut, um ihre Körper und Besitztümer für die Reise ins Jenseits zu schützen.",
          nl: "Piramides werden gebouwd als uitgebreide graven voor farao's en hun families, ontworpen om hun lichamen en bezittingen te beschermen voor de reis naar het hiernamaals."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian text provides instructions for the afterlife journey?",
          es: "¿Qué texto del antiguo Egipto proporciona instrucciones para el viaje al más allá?",
          de: "Welcher altägyptische Text gibt Anweisungen für die Reise ins Jenseits?",
          nl: "Welke oude Egyptische tekst geeft instructies voor de reis naar het hiernamaals?"
        },
        options: [
          { en: "Book of the Dead", es: "Libro de los Muertos", de: "Totenbuch", nl: "Dodenboek" },
          { en: "Pyramid Texts", es: "Textos de las Pirámides", de: "Pyramidentexte", nl: "Piramideteksten" },
          { en: "Book of Ra", es: "Libro de Ra", de: "Buch des Ra", nl: "Boek van Ra" },
          { en: "Coffin Texts", es: "Textos de los Sarcófagos", de: "Sargtexte", nl: "Sarcofaagteksten" }
        ],
        correct: 0,
        explanation: {
          en: "The Book of the Dead was a collection of magical spells and instructions to help the deceased navigate the underworld and achieve eternal life in the Egyptian afterlife.",
          es: "El Libro de los Muertos era una colección de hechizos mágicos e instrucciones para ayudar a los difuntos a navegar por el inframundo y lograr la vida eterna en el más allá egipcio.",
          de: "Das Totenbuch war eine Sammlung magischer Zaubersprüche und Anweisungen, um den Verstorbenen zu helfen, die Unterwelt zu navigieren und ewiges Leben im ägyptischen Jenseits zu erreichen.",
          nl: "Het Dodenboek was een verzameling van magische spreuken en instructies om de overledenen te helpen de onderwereld te navigeren en eeuwig leven te bereiken in het Egyptische hiernamaals."
        }
      },
      {
        question: {
          en: "What type of precious stone was most commonly used in ancient Egyptian jewelry?",
          es: "¿Qué tipo de piedra preciosa se usaba más comúnmente en la joyería del antiguo Egipto?",
          de: "Welche Art von Edelstein wurde am häufigsten im altägyptischen Schmuck verwendet?",
          nl: "Welk type edelsteen werd het meest gebruikt in oude Egyptische sieraden?"
        },
        options: [
          { en: "Lapis lazuli", es: "Lapislázuli", de: "Lapislazuli", nl: "Lapis lazuli" },
          { en: "Emerald", es: "Esmeralda", de: "Smaragd", nl: "Smaragd" },
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" },
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" }
        ],
        correct: 0,
        explanation: {
          en: "Lapis lazuli, a deep blue stone, was highly prized by ancient Egyptians and frequently used in royal jewelry, masks, and decorative objects. It was often imported from Afghanistan.",
          es: "El lapislázuli, una piedra azul profundo, era muy valorado por los antiguos egipcios y frecuentemente usado en joyería real, máscaras y objetos decorativos. A menudo se importaba de Afganistán.",
          de: "Lapislazuli, ein tiefblauer Stein, wurde von den alten Ägyptern hoch geschätzt und häufig in königlichem Schmuck, Masken und Dekorationsobjekten verwendet. Er wurde oft aus Afghanistan importiert.",
          nl: "Lapis lazuli, een diepblauwe steen, werd hoog gewaardeerd door de oude Egyptenaren en vaak gebruikt in koninklijke sieraden, maskers en decoratieve objecten. Het werd vaak geïmporteerd uit Afghanistan."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian capital city was founded by Akhenaten?",
          es: "¿Qué ciudad capital del antiguo Egipto fue fundada por Ajenatón?",
          de: "Welche altägyptische Hauptstadt wurde von Echnaton gegründet?",
          nl: "Welke oude Egyptische hoofdstad werd gesticht door Achnaton?"
        },
        options: [
          { en: "Amarna", es: "Amarna", de: "Amarna", nl: "Amarna" },
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" },
          { en: "Alexandria", es: "Alejandría", de: "Alexandria", nl: "Alexandrië" }
        ],
        correct: 0,
        explanation: {
          en: "Amarna (ancient Akhetaten) was built by Akhenaten around 1346 BCE as a new capital dedicated to the worship of Aten. The city was abandoned after his death.",
          es: "Amarna (antigua Ajetatón) fue construida por Ajenatón alrededor del 1346 a.C. como una nueva capital dedicada al culto de Atón. La ciudad fue abandonada después de su muerte.",
          de: "Amarna (antikes Achetaton) wurde um 1346 v. Chr. von Echnaton als neue Hauptstadt erbaut, die der Verehrung von Aton gewidmet war. Die Stadt wurde nach seinem Tod verlassen.",
          nl: "Amarna (oud Achetaton) werd rond 1346 v.Chr. door Achnaton gebouwd als nieuwe hoofdstad gewijd aan de aanbidding van Aton. De stad werd verlaten na zijn dood."
        }
      },
      {
        question: {
          en: "What material were ancient Egyptian sarcophagi typically made from?",
          es: "¿De qué material estaban hechos típicamente los sarcófagos del antiguo Egipto?",
          de: "Aus welchem Material bestanden altägyptische Sarkophage normalerweise?",
          nl: "Van welk materiaal waren oude Egyptische sarcofagen meestal gemaakt?"
        },
        options: [
          { en: "Stone", es: "Piedra", de: "Stein", nl: "Steen" },
          { en: "Wood", es: "Madera", de: "Holz", nl: "Hout" },
          { en: "Metal", es: "Metal", de: "Metall", nl: "Metaal" },
          { en: "Clay", es: "Arcilla", de: "Ton", nl: "Klei" }
        ],
        correct: 0,
        explanation: {
          en: "Egyptian sarcophagi were typically carved from stone, especially granite, limestone, or sandstone. The stone provided durability and protection for the mummy inside.",
          es: "Los sarcófagos egipcios típicamente se tallaban en piedra, especialmente granito, piedra caliza o arenisca. La piedra proporcionaba durabilidad y protección para la momia interior.",
          de: "Ägyptische Sarkophage wurden normalerweise aus Stein gehauen, besonders aus Granit, Kalkstein oder Sandstein. Der Stein bot Haltbarkeit und Schutz für die Mumie im Inneren.",
          nl: "Egyptische sarcofagen waren meestal uit steen gehouwen, vooral graniet, kalksteen of zandsteen. De steen bood duurzaamheid en bescherming voor de mummie binnenin."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian goddess was associated with cats and protection?",
          es: "¿Qué diosa del antiguo Egipto estaba asociada con gatos y protección?",
          de: "Welche altägyptische Göttin war mit Katzen und Schutz verbunden?",
          nl: "Welke oude Egyptische godin was geassocieerd met katten en bescherming?"
        },
        options: [
          { en: "Bastet", es: "Bastet", de: "Bastet", nl: "Bastet" },
          { en: "Isis", es: "Isis", de: "Isis", nl: "Isis" },
          { en: "Hathor", es: "Hathor", de: "Hathor", nl: "Hathor" },
          { en: "Sekhmet", es: "Sejmet", de: "Sachmet", nl: "Sekhmet" }
        ],
        correct: 0,
        explanation: {
          en: "Bastet was the Egyptian goddess of cats, protection, joy, and fertility. She was often depicted as a cat or a woman with a cat's head and was highly revered.",
          es: "Bastet era la diosa egipcia de los gatos, protección, alegría y fertilidad. A menudo se representaba como un gato o una mujer con cabeza de gato y era muy venerada.",
          de: "Bastet war die ägyptische Göttin der Katzen, des Schutzes, der Freude und der Fruchtbarkeit. Sie wurde oft als Katze oder als Frau mit Katzenkopf dargestellt und war hoch verehrt.",
          nl: "Bastet was de Egyptische godin van katten, bescherming, vreugde en vruchtbaarheid. Ze werd vaak afgebeeld als een kat of een vrouw met een kattenhoofd en was zeer vereerd."
        }
      },
      {
        question: {
          en: "What was the ancient Egyptian symbol of life called?",
          es: "¿Cómo se llamaba el símbolo de vida del antiguo Egipto?",
          de: "Wie hieß das altägyptische Symbol des Lebens?",
          nl: "Hoe heette het oude Egyptische symbool van het leven?"
        },
        options: [
          { en: "Ankh", es: "Anj", de: "Anch", nl: "Ankh" },
          { en: "Scarab", es: "Escarabajo", de: "Skarabäus", nl: "Scarabee" },
          { en: "Eye of Horus", es: "Ojo de Horus", de: "Auge des Horus", nl: "Oog van Horus" },
          { en: "Djed", es: "Djed", de: "Djed", nl: "Djed" }
        ],
        correct: 0,
        explanation: {
          en: "The ankh was the ancient Egyptian hieroglyphic symbol of life. It looks like a cross with a loop at the top and was often carried by gods and pharaohs in Egyptian art.",
          es: "El anj era el símbolo jeroglífico del antiguo Egipto de la vida. Parece una cruz con un lazo en la parte superior y a menudo era llevado por dioses y faraones en el arte egipcio.",
          de: "Das Anch war das altägyptische Hieroglyphensymbol des Lebens. Es sieht aus wie ein Kreuz mit einer Schlaufe oben und wurde oft von Göttern und Pharaonen in der ägyptischen Kunst getragen.",
          nl: "De ankh was het oude Egyptische hiërogliefensymbool van het leven. Het lijkt op een kruis met een lus aan de bovenkant en werd vaak gedragen door goden en farao's in Egyptische kunst."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian pharaoh ruled for the longest period?",
          es: "¿Qué faraón del antiguo Egipto gobernó durante el período más largo?",
          de: "Welcher altägyptische Pharao regierte am längsten?",
          nl: "Welke oude Egyptische farao regeerde het langst?"
        },
        options: [
          { en: "Ramesses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
          { en: "Khufu", es: "Keops", de: "Cheops", nl: "Khufu" },
          { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
          { en: "Akhenaten", es: "Ajenatón", de: "Echnaton", nl: "Achnaton" }
        ],
        correct: 0,
        explanation: {
          en: "Ramesses II ruled Egypt for 66 years (1279-1213 BCE), making him one of the longest-reigning pharaohs. He was known as Ramesses the Great and built many monuments.",
          es: "Ramsés II gobernó Egipto durante 66 años (1279-1213 a.C.), convirtiéndolo en uno de los faraones con reinado más largo. Era conocido como Ramsés el Grande y construyó muchos monumentos.",
          de: "Ramses II regierte Ägypten 66 Jahre lang (1279-1213 v. Chr.) und war damit einer der am längsten regierenden Pharaonen. Er war als Ramses der Große bekannt und baute viele Denkmäler.",
          nl: "Ramses II regeerde over Egypte gedurende 66 jaar (1279-1213 v.Chr.), waardoor hij een van de langst regerende farao's was. Hij stond bekend als Ramses de Grote en bouwde veel monumenten."
        }
      },
      {
        question: {
          en: "What was the ancient Egyptian name for their writing system?",
          es: "¿Cuál era el nombre egipcio antiguo para su sistema de escritura?",
          de: "Wie hieß das altägyptische Schriftsystem auf Ägyptisch?",
          nl: "Wat was de oude Egyptische naam voor hun schriftsysteem?"
        },
        options: [
          { en: "Medu netjer", es: "Medu netjer", de: "Medu netjer", nl: "Medu netjer" },
          { en: "Hieratic", es: "Hierático", de: "Hieratisch", nl: "Hiëratisch" },
          { en: "Demotic", es: "Demótico", de: "Demotisch", nl: "Demotisch" },
          { en: "Coptic", es: "Copto", de: "Koptisch", nl: "Koptisch" }
        ],
        correct: 0,
        explanation: {
          en: "The ancient Egyptians called their hieroglyphic writing 'medu netjer,' meaning 'words of the gods.' The term 'hieroglyphs' comes from the Greek meaning 'sacred carvings.'",
          es: "Los antiguos egipcios llamaban a su escritura jeroglífica 'medu netjer', que significa 'palabras de los dioses'. El término 'jeroglíficos' viene del griego y significa 'tallas sagradas'.",
          de: "Die alten Ägypter nannten ihre Hieroglyphenschrift 'medu netjer', was 'Worte der Götter' bedeutet. Der Begriff 'Hieroglyphen' stammt aus dem Griechischen und bedeutet 'heilige Schnitzereien'.",
          nl: "De oude Egyptenaren noemden hun hiërogliefenschrift 'medu netjer', wat 'woorden van de goden' betekent. De term 'hiërogliefen' komt uit het Grieks en betekent 'heilige gravures'."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian site contains the Valley of the Kings?",
          es: "¿Qué sitio del antiguo Egipto contiene el Valle de los Reyes?",
          de: "Welche altägyptische Stätte enthält das Tal der Könige?",
          nl: "Welke oude Egyptische locatie bevat de Vallei der Koningen?"
        },
        options: [
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" },
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Giza", es: "Giza", de: "Gizeh", nl: "Giza" },
          { en: "Saqqara", es: "Saqqara", de: "Sakkara", nl: "Saqqara" }
        ],
        correct: 0,
        explanation: {
          en: "The Valley of the Kings is located near ancient Thebes (modern Luxor). It served as a burial ground for pharaohs and nobles of the New Kingdom for nearly 500 years.",
          es: "El Valle de los Reyes está ubicado cerca de la antigua Tebas (moderna Luxor). Sirvió como cementerio para faraones y nobles del Reino Nuevo durante casi 500 años.",
          de: "Das Tal der Könige liegt in der Nähe des antiken Theben (heute Luxor). Es diente fast 500 Jahre lang als Begräbnisstätte für Pharaonen und Adlige des Neuen Reiches.",
          nl: "De Vallei der Koningen ligt in de buurt van het oude Thebe (modern Luxor). Het diende als begraafplaats voor farao's en edelen van het Nieuwe Rijk gedurende bijna 500 jaar."
        }
      },
      {
        question: {
          en: "What ancient Egyptian structure has a human head and lion's body?",
          es: "¿Qué estructura del antiguo Egipto tiene cabeza humana y cuerpo de león?",
          de: "Welches altägyptische Bauwerk hat einen menschlichen Kopf und einen Löwenkörper?",
          nl: "Welke oude Egyptische structuur heeft een mensenhoofd en leeuwenlichaam?"
        },
        options: [
          { en: "Great Sphinx", es: "Gran Esfinge", de: "Große Sphinx", nl: "Grote Sfinx" },
          { en: "Colossus", es: "Coloso", de: "Koloss", nl: "Colossus" },
          { en: "Obelisk", es: "Obelisco", de: "Obelisk", nl: "Obelisk" },
          { en: "Mastaba", es: "Mastaba", de: "Mastaba", nl: "Mastaba" }
        ],
        correct: 0,
        explanation: {
          en: "The Great Sphinx of Giza has a human head (believed to represent Pharaoh Khafre) and a lion's body. It was carved from a single piece of limestone around 2500 BCE.",
          es: "La Gran Esfinge de Giza tiene cabeza humana (se cree que representa al Faraón Kefrén) y cuerpo de león. Fue tallada de una sola pieza de piedra caliza alrededor del 2500 a.C.",
          de: "Die Große Sphinx von Gizeh hat einen menschlichen Kopf (vermutlich Pharao Chephren darstellend) und einen Löwenkörper. Sie wurde um 2500 v. Chr. aus einem einzigen Kalksteinblock geschnitzt.",
          nl: "De Grote Sfinx van Giza heeft een mensenhoofd (waarvan wordt aangenomen dat het Farao Khafre voorstelt) en een leeuwenlichaam. Het werd rond 2500 v.Chr. uit één stuk kalksteen gesneden."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian queen is known for her elaborate tomb and golden treasures?",
          es: "¿Qué reina del antiguo Egipto es conocida por su tumba elaborada y tesoros dorados?",
          de: "Welche altägyptische Königin ist für ihr aufwendiges Grab und ihre goldenen Schätze bekannt?",
          nl: "Welke oude Egyptische koningin is bekend om haar uitgebreide graf en gouden schatten?"
        },
        options: [
          { en: "Hetepheres I", es: "Hetepjeres I", de: "Hetepheres I", nl: "Hetepheres I" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" },
          { en: "Tiye", es: "Tiyi", de: "Teje", nl: "Tiye" }
        ],
        correct: 0,
        explanation: {
          en: "Queen Hetepheres I, mother of Khufu, had an elaborate tomb discovered at Giza filled with golden furniture and treasures, providing insights into royal burial practices.",
          es: "La Reina Hetepjeres I, madre de Keops, tenía una tumba elaborada descubierta en Giza llena de muebles dorados y tesoros, proporcionando información sobre las prácticas funerarias reales.",
          de: "Königin Hetepheres I, Mutter von Khufu, hatte ein aufwendiges Grab in Gizeh, das voller goldener Möbel und Schätze entdeckt wurde und Einblicke in königliche Bestattungspraktiken bietet.",
          nl: "Koningin Hetepheres I, moeder van Khufu, had een uitgebreid graf ontdekt in Giza vol met gouden meubels en schatten, wat inzicht geeft in koninklijke begrafenispraktijken."
        }
      },
      {
        question: {
          en: "What was the ancient Egyptian term for the soul that could leave the body?",
          es: "¿Cuál era el término egipcio antiguo para el alma que podía dejar el cuerpo?",
          de: "Wie lautete der altägyptische Begriff für die Seele, die den Körper verlassen konnte?",
          nl: "Wat was de oude Egyptische term voor de ziel die het lichaam kon verlaten?"
        },
        options: [
          { en: "Ba", es: "Ba", de: "Ba", nl: "Ba" },
          { en: "Ka", es: "Ka", de: "Ka", nl: "Ka" },
          { en: "Akh", es: "Aj", de: "Ach", nl: "Akh" },
          { en: "Ib", es: "Ib", de: "Ib", nl: "Ib" }
        ],
        correct: 0,
        explanation: {
          en: "The Ba was the ancient Egyptian concept of the soul that could move freely between the physical and spiritual worlds. It was often depicted as a bird with a human head.",
          es: "El Ba era el concepto egipcio antiguo del alma que podía moverse libremente entre los mundos físico y espiritual. A menudo se representaba como un pájaro con cabeza humana.",
          de: "Das Ba war das altägyptische Konzept der Seele, die sich frei zwischen der physischen und spirituellen Welt bewegen konnte. Es wurde oft als Vogel mit menschlichem Kopf dargestellt.",
          nl: "De Ba was het oude Egyptische concept van de ziel die vrij kon bewegen tussen de fysieke en spirituele werelden. Het werd vaak afgebeeld als een vogel met een mensenhoofd."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian pharaoh's tomb was discovered nearly intact in 1922?",
          es: "¿La tumba de qué faraón del antiguo Egipto fue descubierta casi intacta en 1922?",
          de: "Welches altägyptischen Pharaos Grab wurde 1922 nahezu unversehrt entdeckt?",
          nl: "Welke oude Egyptische farao's graf werd in 1922 bijna intact ontdekt?"
        },
        options: [
          { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
          { en: "Ramesses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
          { en: "Akhenaten", es: "Ajenatón", de: "Echnaton", nl: "Achnaton" },
          { en: "Seti I", es: "Seti I", de: "Sethos I", nl: "Seti I" }
        ],
        correct: 0,
        explanation: {
          en: "Tutankhamun's tomb was discovered by Howard Carter in 1922 in the Valley of the Kings. It contained over 5,000 artifacts and his famous golden death mask.",
          es: "La tumba de Tutankamón fue descubierta por Howard Carter en 1922 en el Valle de los Reyes. Contenía más de 5,000 artefactos y su famosa máscara mortuoria dorada.",
          de: "Tutanchamuns Grab wurde 1922 von Howard Carter im Tal der Könige entdeckt. Es enthielt über 5.000 Artefakte und seine berühmte goldene Totenmaske.",
          nl: "Toetanchamons graf werd in 1922 door Howard Carter ontdekt in de Vallei der Koningen. Het bevatte meer dan 5.000 artefacten en zijn beroemde gouden dodenmasker."
        }
      },
      {
        question: {
          en: "What was the ancient Egyptian calendar based on?",
          es: "¿En qué se basaba el calendario del antiguo Egipto?",
          de: "Worauf basierte der altägyptische Kalender?",
          nl: "Waarop was de oude Egyptische kalender gebaseerd?"
        },
        options: [
          { en: "The flooding of the Nile", es: "Las inundaciones del Nilo", de: "Die Nilüberschwemmungen", nl: "De overstromingen van de Nijl" },
          { en: "Lunar phases", es: "Fases lunares", de: "Mondphasen", nl: "Maanfasen" },
          { en: "Solar eclipses", es: "Eclipses solares", de: "Sonnenfinsternisse", nl: "Zonsverduisteringen" },
          { en: "Star constellations", es: "Constelaciones estelares", de: "Sternbilder", nl: "Sterrenbeelden" }
        ],
        correct: 0,
        explanation: {
          en: "The ancient Egyptian calendar was based on the annual flooding of the Nile River, which was crucial for agriculture. They developed a 365-day calendar divided into three seasons.",
          es: "El calendario del antiguo Egipto se basaba en las inundaciones anuales del río Nilo, que eran cruciales para la agricultura. Desarrollaron un calendario de 365 días dividido en tres estaciones.",
          de: "Der altägyptische Kalender basierte auf der jährlichen Überschwemmung des Nils, die für die Landwirtschaft entscheidend war. Sie entwickelten einen 365-Tage-Kalender, der in drei Jahreszeiten unterteilt war.",
          nl: "De oude Egyptische kalender was gebaseerd op de jaarlijkse overstroming van de Nijl, die cruciaal was voor de landbouw. Ze ontwikkelden een 365-dagen kalender verdeeld in drie seizoenen."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian site is famous for its twin temples carved into rock?",
          es: "¿Qué sitio del antiguo Egipto es famoso por sus templos gemelos tallados en roca?",
          de: "Welche altägyptische Stätte ist berühmt für ihre Zwillingstempel, die in Fels gehauen sind?",
          nl: "Welke oude Egyptische locatie is beroemd om zijn tweelingstempels die in rots zijn uitgehouwen?"
        },
        options: [
          { en: "Abu Simbel", es: "Abu Simbel", de: "Abu Simbel", nl: "Abu Simbel" },
          { en: "Karnak", es: "Karnak", de: "Karnak", nl: "Karnak" },
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Edfu", es: "Edfu", de: "Edfu", nl: "Edfu" }
        ],
        correct: 0,
        explanation: {
          en: "Abu Simbel features two massive rock-cut temples built by Ramesses II. The larger temple honors Ramesses II and the smaller one honors his queen Nefertari.",
          es: "Abu Simbel presenta dos templos masivos tallados en roca construidos por Ramsés II. El templo más grande honra a Ramsés II y el más pequeño honra a su reina Nefertari.",
          de: "Abu Simbel verfügt über zwei massive in Fels gehauene Tempel, die von Ramses II erbaut wurden. Der größere Tempel ehrt Ramses II und der kleinere ehrt seine Königin Nefertari.",
          nl: "Abu Simbel heeft twee massieve in rots uitgehakte tempels gebouwd door Ramses II. De grotere tempel eert Ramses II en de kleinere eert zijn koningin Nefertari."
        }
      },
      {
        question: {
          en: "What was the ancient Egyptian goddess Isis primarily associated with?",
          es: "¿Con qué estaba asociada principalmente la diosa egipcia antigua Isis?",
          de: "Womit war die altägyptische Göttin Isis hauptsächlich verbunden?",
          nl: "Waarmee werd de oude Egyptische godin Isis voornamelijk geassocieerd?"
        },
        options: [
          { en: "Magic and motherhood", es: "Magia y maternidad", de: "Magie und Mutterschaft", nl: "Magie en moederschap" },
          { en: "War and destruction", es: "Guerra y destrucción", de: "Krieg und Zerstörung", nl: "Oorlog en vernietiging" },
          { en: "Music and dance", es: "Música y danza", de: "Musik und Tanz", nl: "Muziek en dans" },
          { en: "Harvest and fertility", es: "Cosecha y fertilidad", de: "Ernte und Fruchtbarkeit", nl: "Oogst en vruchtbaarheid" }
        ],
        correct: 0,
        explanation: {
          en: "Isis was the ancient Egyptian goddess of magic, motherhood, and healing. She was the wife of Osiris and mother of Horus, playing a central role in Egyptian mythology.",
          es: "Isis era la diosa egipcia antigua de la magia, maternidad y curación. Era la esposa de Osiris y madre de Horus, desempeñando un papel central en la mitología egipcia.",
          de: "Isis war die altägyptische Göttin der Magie, Mutterschaft und Heilung. Sie war die Frau von Osiris und Mutter von Horus und spielte eine zentrale Rolle in der ägyptischen Mythologie.",
          nl: "Isis was de oude Egyptische godin van magie, moederschap en genezing. Ze was de vrouw van Osiris en moeder van Horus, en speelde een centrale rol in de Egyptische mythologie."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian pharaoh built the first known pyramid?",
          es: "¿Qué faraón del antiguo Egipto construyó la primera pirámide conocida?",
          de: "Welcher altägyptische Pharao baute die erste bekannte Pyramide?",
          nl: "Welke oude Egyptische farao bouwde de eerst bekende piramide?"
        },
        options: [
          { en: "Djoser", es: "Zoser", de: "Djoser", nl: "Djoser" },
          { en: "Sneferu", es: "Snefru", de: "Snofru", nl: "Sneferu" },
          { en: "Khufu", es: "Keops", de: "Cheops", nl: "Khufu" },
          { en: "Imhotep", es: "Imhotep", de: "Imhotep", nl: "Imhotep" }
        ],
        correct: 0,
        explanation: {
          en: "Pharaoh Djoser built the first known pyramid around 2670 BCE - the Step Pyramid at Saqqara, designed by his architect Imhotep. This marked the beginning of pyramid construction.",
          es: "El Faraón Zoser construyó la primera pirámide conocida alrededor del 2670 a.C. - la Pirámide Escalonada en Saqqara, diseñada por su arquitecto Imhotep. Esto marcó el comienzo de la construcción de pirámides.",
          de: "Pharao Djoser baute um 2670 v. Chr. die erste bekannte Pyramide - die Stufenpyramide von Sakkara, die von seinem Architekten Imhotep entworfen wurde. Dies markierte den Beginn des Pyramidenbaus.",
          nl: "Farao Djoser bouwde de eerste bekende piramide rond 2670 v.Chr. - de Trappenpiramide in Saqqara, ontworpen door zijn architect Imhotep. Dit markeerde het begin van piramidebouw."
        }
      },
      {
        question: {
          en: "What type of ancient Egyptian tomb preceded pyramids?",
          es: "¿Qué tipo de tumba del antiguo Egipto precedió a las pirámides?",
          de: "Welche Art altägyptisches Grab ging den Pyramiden voraus?",
          nl: "Welk type oude Egyptische graf ging vooraf aan piramides?"
        },
        options: [
          { en: "Mastaba", es: "Mastaba", de: "Mastaba", nl: "Mastaba" },
          { en: "Hypogeum", es: "Hipogeo", de: "Hypogäum", nl: "Hypogeum" },
          { en: "Catacomb", es: "Catacumba", de: "Katakombe", nl: "Catacombe" },
          { en: "Necropolis", es: "Necrópolis", de: "Nekropole", nl: "Necropolis" }
        ],
        correct: 0,
        explanation: {
          en: "Mastabas were flat-roofed, rectangular tomb structures that preceded pyramids. The Step Pyramid was essentially stacked mastabas, evolving into the pyramid form.",
          es: "Las mastabas eran estructuras de tumbas rectangulares con techo plano que precedieron a las pirámides. La Pirámide Escalonada era esencialmente mastabas apiladas, evolucionando hacia la forma piramidal.",
          de: "Mastabas waren flachdachige, rechteckige Grabbauten, die den Pyramiden vorausgingen. Die Stufenpyramide war im Wesentlichen gestapelte Mastabas, die sich zur Pyramidenform entwickelten.",
          nl: "Mastaba's waren platte, rechthoekige grafstructuren die voorafgingen aan piramides. De Trappenpiramide was in wezen gestapelde mastaba's, die evolueerden naar de piramidevorm."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian god was depicted with the head of an ibis bird?",
          es: "¿Qué dios del antiguo Egipto era representado con cabeza de ave ibis?",
          de: "Welcher altägyptische Gott wurde mit dem Kopf eines Ibis-Vogels dargestellt?",
          nl: "Welke oude Egyptische god werd afgebeeld met het hoofd van een ibisvogel?"
        },
        options: [
          { en: "Thoth", es: "Thot", de: "Thot", nl: "Thoth" },
          { en: "Horus", es: "Horus", de: "Horus", nl: "Horus" },
          { en: "Khonsu", es: "Jonsu", de: "Chons", nl: "Khonsu" },
          { en: "Ptah", es: "Ptah", de: "Ptah", nl: "Ptah" }
        ],
        correct: 0,
        explanation: {
          en: "Thoth was the ancient Egyptian god of wisdom, writing, and knowledge, often depicted with the head of an ibis bird. He was the scribe of the gods and keeper of divine records.",
          es: "Thot era el dios egipcio antiguo de la sabiduría, escritura y conocimiento, a menudo representado con cabeza de ave ibis. Era el escriba de los dioses y guardián de registros divinos.",
          de: "Thot war der altägyptische Gott der Weisheit, Schrift und des Wissens, oft mit dem Kopf eines Ibis-Vogels dargestellt. Er war der Schreiber der Götter und Hüter göttlicher Aufzeichnungen.",
          nl: "Thoth was de oude Egyptische god van wijsheid, schrijfkunst en kennis, vaak afgebeeld met het hoofd van een ibisvogel. Hij was de schrijver van de goden en bewaker van goddelijke records."
        }
      },
      {
        question: {
          en: "What ancient Egyptian architectural feature helped distribute pyramid weight?",
          es: "¿Qué característica arquitectónica del antiguo Egipto ayudaba a distribuir el peso de las pirámides?",
          de: "Welches altägyptische Architekturelement half bei der Gewichtsverteilung von Pyramiden?",
          nl: "Welk oude Egyptische architecturale kenmerk hielp het gewicht van piramides te verdelen?"
        },
        options: [
          { en: "Relieving chambers", es: "Cámaras de alivio", de: "Entlastungskammern", nl: "Ontlastingskamers" },
          { en: "Buttresses", es: "Contrafuertes", de: "Strebepfeiler", nl: "Steunberen" },
          { en: "Flying arches", es: "Arcos voladores", de: "Strebebögen", nl: "Vliegende bogen" },
          { en: "Corbelled vaults", es: "Bóvedas en voladizo", de: "Kraggewölbe", nl: "Kraaggewelven" }
        ],
        correct: 0,
        explanation: {
          en: "Relieving chambers were hollow spaces built above burial chambers to reduce the weight pressing down on the roof. The Great Pyramid has five relieving chambers above the King's Chamber.",
          es: "Las cámaras de alivio eran espacios huecos construidos sobre las cámaras funerarias para reducir el peso que presionaba el techo. La Gran Pirámide tiene cinco cámaras de alivio sobre la Cámara del Rey.",
          de: "Entlastungskammern waren hohle Räume, die über Grabkammern gebaut wurden, um das auf das Dach drückende Gewicht zu reduzieren. Die Große Pyramide hat fünf Entlastungskammern über der Königskammer.",
          nl: "Ontlastingskamers waren holle ruimtes gebouwd boven grafkamers om het gewicht dat op het dak drukte te verminderen. De Grote Piramide heeft vijf ontlastingskamers boven de Koningskamer."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian queen is famous for her beautiful bust sculpture?",
          es: "¿Qué reina del antiguo Egipto es famosa por su hermosa escultura de busto?",
          de: "Welche altägyptische Königin ist für ihre schöne Büstenskulptur berühmt?",
          nl: "Welke oude Egyptische koningin is beroemd om haar mooie bustesculptuur?"
        },
        options: [
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" },
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatsjepsoet" },
          { en: "Tiye", es: "Tiyi", de: "Teje", nl: "Tiye" }
        ],
        correct: 0,
        explanation: {
          en: "Queen Nefertiti, wife of Akhenaten, is famous for the limestone and stucco bust discovered in 1912. The sculpture is considered one of the masterpieces of ancient art.",
          es: "La Reina Nefertiti, esposa de Ajenatón, es famosa por el busto de piedra caliza y estuco descubierto en 1912. La escultura es considerada una de las obras maestras del arte antiguo.",
          de: "Königin Nofretete, Frau von Echnaton, ist berühmt für die 1912 entdeckte Büste aus Kalkstein und Stuck. Die Skulptur gilt als eines der Meisterwerke der antiken Kunst.",
          nl: "Koningin Nefertiti, vrouw van Achnaton, is beroemd om de kalkstenen en stucwerk buste ontdekt in 1912. Het sculptuur wordt beschouwd als een van de meesterwerken van oude kunst."
        }
      },
      {
        question: {
          en: "What was the ancient Egyptian belief about the heart after death?",
          es: "¿Cuál era la creencia del antiguo Egipto sobre el corazón después de la muerte?",
          de: "Was war der altägyptische Glaube über das Herz nach dem Tod?",
          nl: "Wat was het oude Egyptische geloof over het hart na de dood?"
        },
        options: [
          { en: "It was weighed against a feather", es: "Se pesaba contra una pluma", de: "Es wurde gegen eine Feder gewogen", nl: "Het werd gewogen tegen een veer" },
          { en: "It was removed and discarded", es: "Se removía y desechaba", de: "Es wurde entfernt und weggeworfen", nl: "Het werd weggenomen en weggegooid" },
          { en: "It was replaced with gold", es: "Se reemplazaba con oro", de: "Es wurde durch Gold ersetzt", nl: "Het werd vervangen door goud" },
          { en: "It was buried separately", es: "Se enterraba por separado", de: "Es wurde separat begraben", nl: "Het werd apart begraven" }
        ],
        correct: 0,
        explanation: {
          en: "In ancient Egyptian beliefs, the heart was weighed against the feather of Ma'at (truth and justice) in the afterlife. A balanced scale meant the soul could enter paradise.",
          es: "En las creencias del antiguo Egipto, el corazón se pesaba contra la pluma de Ma'at (verdad y justicia) en el más allá. Una balanza equilibrada significaba que el alma podía entrar al paraíso.",
          de: "Nach altägyptischen Überzeugungen wurde das Herz im Jenseits gegen die Feder der Ma'at (Wahrheit und Gerechtigkeit) gewogen. Eine ausgeglichene Waage bedeutete, dass die Seele ins Paradies eingehen konnte.",
          nl: "Volgens oude Egyptische overtuigingen werd het hart in het hiernamaals gewogen tegen de veer van Ma'at (waarheid en rechtvaardigheid). Een gebalanceerde weegschaal betekende dat de ziel het paradijs kon betreden."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian site contains the largest collection of hieroglyphic texts?",
          es: "¿Qué sitio del antiguo Egipto contiene la mayor colección de textos jeroglíficos?",
          de: "Welche altägyptische Stätte enthält die größte Sammlung von hieroglyphischen Texten?",
          nl: "Welke oude Egyptische locatie bevat de grootste collectie hiërogliefische teksten?"
        },
        options: [
          { en: "Karnak Temple", es: "Templo de Karnak", de: "Karnak-Tempel", nl: "Karnak Tempel" },
          { en: "Valley of the Kings", es: "Valle de los Reyes", de: "Tal der Könige", nl: "Vallei der Koningen" },
          { en: "Abu Simbel", es: "Abu Simbel", de: "Abu Simbel", nl: "Abu Simbel" },
          { en: "Philae Temple", es: "Templo de Filae", de: "Philae-Tempel", nl: "Philae Tempel" }
        ],
        correct: 0,
        explanation: {
          en: "The Karnak Temple complex contains the largest collection of hieroglyphic texts and inscriptions. Built over 2,000 years, it records the history and religious practices of ancient Egypt.",
          es: "El complejo del Templo de Karnak contiene la mayor colección de textos e inscripciones jeroglíficas. Construido durante 2,000 años, registra la historia y prácticas religiosas del antiguo Egipto.",
          de: "Der Karnak-Tempelkomplex enthält die größte Sammlung hieroglyphischer Texte und Inschriften. Über 2.000 Jahre erbaut, dokumentiert er die Geschichte und religiösen Praktiken des alten Ägypten.",
          nl: "Het Karnak Tempelcomplex bevat de grootste collectie hiërogliefische teksten en inscripties. Gebouwd over 2.000 jaar, registreert het de geschiedenis en religieuze praktijken van het oude Egypte."
        }
      },
      {
        question: {
          en: "What was the ancient Egyptian technique for creating false doors in tombs?",
          es: "¿Cuál era la técnica del antiguo Egipto para crear puertas falsas en las tumbas?",
          de: "Was war die altägyptische Technik zur Erschaffung falscher Türen in Gräbern?",
          nl: "Wat was de oude Egyptische techniek voor het maken van valse deuren in graven?"
        },
        options: [
          { en: "Relief carving", es: "Tallado en relieve", de: "Reliefschnitzerei", nl: "Reliëfsnijwerk" },
          { en: "Painted illusion", es: "Ilusión pintada", de: "Gemalte Illusion", nl: "Geschilderde illusie" },
          { en: "Stone inlay", es: "Incrustación de piedra", de: "Steineinlagen", nl: "Steeninleg" },
          { en: "Wooden panels", es: "Paneles de madera", de: "Holzpaneele", nl: "Houten panelen" }
        ],
        correct: 0,
        explanation: {
          en: "False doors were created using relief carving techniques, creating the illusion of a doorway for the deceased's spirit to pass through while keeping the tomb sealed.",
          es: "Las puertas falsas se creaban usando técnicas de tallado en relieve, creando la ilusión de una entrada para que el espíritu del difunto pasara mientras mantenía la tumba sellada.",
          de: "Falsche Türen wurden mit Reliefschnitztechniken geschaffen, die die Illusion eines Durchgangs für den Geist des Verstorbenen schufen, während das Grab versiegelt blieb.",
          nl: "Valse deuren werden gemaakt met reliëfsnijwerk technieken, waardoor de illusie van een doorgang werd gecreëerd voor de geest van de overledene om door te gaan terwijl het graf verzegeld bleef."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian period is known as the age of pyramid building?",
          es: "¿Qué período del antiguo Egipto es conocido como la era de construcción de pirámides?",
          de: "Welche altägyptische Periode ist als Zeitalter des Pyramidenbaus bekannt?",
          nl: "Welke oude Egyptische periode staat bekend als het tijdperk van piramidebouw?"
        },
        options: [
          { en: "Old Kingdom", es: "Reino Antiguo", de: "Altes Reich", nl: "Oude Rijk" },
          { en: "Middle Kingdom", es: "Reino Medio", de: "Mittleres Reich", nl: "Middenrijk" },
          { en: "New Kingdom", es: "Reino Nuevo", de: "Neues Reich", nl: "Nieuwe Rijk" },
          { en: "Ptolemaic Period", es: "Período Ptolemaico", de: "Ptolemäische Zeit", nl: "Ptolemeïsche Periode" }
        ],
        correct: 0,
        explanation: {
          en: "The Old Kingdom (c. 2686-2181 BCE) is known as the age of pyramid building, when the great pyramids of Giza and other major pyramids were constructed.",
          es: "El Reino Antiguo (c. 2686-2181 a.C.) es conocido como la era de construcción de pirámides, cuando se construyeron las grandes pirámides de Giza y otras pirámides importantes.",
          de: "Das Alte Reich (ca. 2686-2181 v. Chr.) ist als Zeitalter des Pyramidenbaus bekannt, als die großen Pyramiden von Gizeh und andere bedeutende Pyramiden errichtet wurden.",
          nl: "Het Oude Rijk (ca. 2686-2181 v.Chr.) staat bekend als het tijdperk van piramidebouw, toen de grote piramides van Giza en andere belangrijke piramides werden gebouwd."
        }
      },
      {
        question: {
          en: "What ancient Egyptian tool was used for opening the mouth ceremony?",
          es: "¿Qué herramienta del antiguo Egipto se usaba para la ceremonia de abrir la boca?",
          de: "Welches altägyptische Werkzeug wurde für die Mundöffnungszeremonie verwendet?",
          nl: "Welk oude Egyptische gereedschap werd gebruikt voor de mondopeningsceremonie?"
        },
        options: [
          { en: "Pesesh-kef knife", es: "Cuchillo Pesesh-kef", de: "Pesesh-kef Messer", nl: "Pesesh-kef mes" },
          { en: "Canopic knife", es: "Cuchillo canópico", de: "Kanopisches Messer", nl: "Canopisch mes" },
          { en: "Ritual dagger", es: "Daga ritual", de: "Ritualdolch", nl: "Rituele dolk" },
          { en: "Sacred blade", es: "Hoja sagrada", de: "Heilige Klinge", nl: "Heilig blad" }
        ],
        correct: 0,
        explanation: {
          en: "The pesesh-kef was a ritual knife used in the Opening of the Mouth ceremony, believed to restore the deceased's ability to eat, drink, and speak in the afterlife.",
          es: "El pesesh-kef era un cuchillo ritual usado en la ceremonia de Abrir la Boca, que se creía restauraba la habilidad del difunto para comer, beber y hablar en el más allá.",
          de: "Das Pesesh-kef war ein Ritualmesser, das in der Mundöffnungszeremonie verwendet wurde und von dem man glaubte, es würde die Fähigkeit des Verstorbenen wiederherstellen, im Jenseits zu essen, trinken und sprechen.",
          nl: "De pesesh-kef was een ritueel mes gebruikt in de Mondopeningsceremonie, waarvan werd geloofd dat het het vermogen van de overledene herstelde om te eten, drinken en spreken in het hiernamaals."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian pharaoh's mummy was never found in his pyramid?",
          es: "¿La momia de qué faraón del antiguo Egipto nunca fue encontrada en su pirámide?",
          de: "Welches altägyptischen Pharaos Mumie wurde nie in seiner Pyramide gefunden?",
          nl: "Welke oude Egyptische farao's mummie werd nooit gevonden in zijn piramide?"
        },
        options: [
          { en: "Khufu", es: "Keops", de: "Cheops", nl: "Khufu" },
          { en: "Khafre", es: "Kefrén", de: "Chephren", nl: "Khafre" },
          { en: "Menkaure", es: "Micerino", de: "Mykerinos", nl: "Menkaure" },
          { en: "All of the above", es: "Todos los anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "None of the pharaohs' mummies have been found in their pyramids at Giza. The pyramids were likely robbed in antiquity, and the pharaohs' remains were either destroyed or relocated.",
          es: "Ninguna de las momias de los faraones ha sido encontrada en sus pirámides en Giza. Las pirámides probablemente fueron saqueadas en la antigüedad, y los restos de los faraones fueron destruidos o reubicados.",
          de: "Keine der Pharaonenmumien wurde in ihren Pyramiden in Gizeh gefunden. Die Pyramiden wurden wahrscheinlich in der Antike beraubt, und die Überreste der Pharaonen wurden entweder zerstört oder verlegt.",
          nl: "Geen van de farao's mummies zijn gevonden in hun piramides in Giza. De piramides werden waarschijnlijk in de oudheid geplunderd, en de resten van de farao's werden vernietigd of verplaatst."
        }
      },
      {
        question: {
          en: "What was the ancient Egyptian term for the life force or vital essence?",
          es: "¿Cuál era el término egipcio antiguo para la fuerza vital o esencia vital?",
          de: "Wie lautete der altägyptische Begriff für die Lebenskraft oder lebenswichtige Essenz?",
          nl: "Wat was de oude Egyptische term voor de levenskracht of vitale essentie?"
        },
        options: [
          { en: "Ka", es: "Ka", de: "Ka", nl: "Ka" },
          { en: "Ba", es: "Ba", de: "Ba", nl: "Ba" },
          { en: "Akh", es: "Aj", de: "Ach", nl: "Akh" },
          { en: "Sheut", es: "Sheut", de: "Sheut", nl: "Sheut" }
        ],
        correct: 0,
        explanation: {
          en: "Ka was the ancient Egyptian concept of the life force or vital essence that remained with the body after death. Food offerings were made to sustain the Ka in the afterlife.",
          es: "Ka era el concepto egipcio antiguo de la fuerza vital o esencia vital que permanecía con el cuerpo después de la muerte. Se hacían ofertas de comida para sustentar el Ka en el más allá.",
          de: "Ka war das altägyptische Konzept der Lebenskraft oder lebenswichtigen Essenz, die nach dem Tod beim Körper verblieb. Speiseopfer wurden dargebracht, um das Ka im Jenseits zu erhalten.",
          nl: "Ka was het oude Egyptische concept van de levenskracht of vitale essentie die bij het lichaam bleef na de dood. Voedseloffers werden gemaakt om de Ka in het hiernamaals te onderhouden."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian site has the oldest known medical papyrus?",
          es: "¿Qué sitio del antiguo Egipto tiene el papiro médico más antiguo conocido?",
          de: "Welche altägyptische Stätte hat den ältesten bekannten medizinischen Papyrus?",
          nl: "Welke oude Egyptische locatie heeft de oudst bekende medische papyrus?"
        },
        options: [
          { en: "Kahun", es: "Kahun", de: "Kahun", nl: "Kahun" },
          { en: "Deir el-Medina", es: "Deir el-Medina", de: "Deir el-Medina", nl: "Deir el-Medina" },
          { en: "Abydos", es: "Abidos", de: "Abydos", nl: "Abydos" },
          { en: "Dendera", es: "Dendera", de: "Dendera", nl: "Dendera" }
        ],
        correct: 0,
        explanation: {
          en: "The Kahun Gynecological Papyrus, dating to around 1800 BCE, is one of the oldest known medical texts from ancient Egypt, focusing on women's health and veterinary medicine.",
          es: "El Papiro Ginecológico de Kahun, que data de alrededor del 1800 a.C., es uno de los textos médicos más antiguos conocidos del antiguo Egipto, enfocándose en la salud de las mujeres y medicina veterinaria.",
          de: "Der Kahun-Gynäkologische Papyrus, der um 1800 v. Chr. datiert, ist einer der ältesten bekannten medizinischen Texte aus dem alten Ägypten und konzentriert sich auf Frauengesundheit und Veterinärmedizin.",
          nl: "De Kahun Gynaecologische Papyrus, daterend van rond 1800 v.Chr., is een van de oudst bekende medische teksten uit het oude Egypte, gericht op vrouwengezondheid en diergeneeskunde."
        }
      },
      {
        question: {
          en: "What ancient Egyptian architectural innovation allowed for taller buildings?",
          es: "¿Qué innovación arquitectónica del antiguo Egipto permitía edificios más altos?",
          de: "Welche altägyptische architektonische Innovation ermöglichte höhere Gebäude?",
          nl: "Welke oude Egyptische architecturale innovatie maakte hogere gebouwen mogelijk?"
        },
        options: [
          { en: "Post and lintel system", es: "Sistema de poste y dintel", de: "Pfosten-und-Sturz-System", nl: "Post-en-lateelsysteem" },
          { en: "Flying buttresses", es: "Arbotantes", de: "Strebebögen", nl: "Vliegende steunberen" },
          { en: "Pointed arches", es: "Arcos apuntados", de: "Spitzbögen", nl: "Spitsbogen" },
          { en: "Ribbed vaults", es: "Bóvedas nervadas", de: "Rippengewölbe", nl: "Ribgewelven" }
        ],
        correct: 0,
        explanation: {
          en: "The post and lintel system, using vertical posts supporting horizontal beams, was the primary architectural method in ancient Egypt, allowing for the construction of temples and monuments.",
          es: "El sistema de poste y dintel, usando postes verticales que soportan vigas horizontales, era el método arquitectónico principal en el antiguo Egipto, permitiendo la construcción de templos y monumentos.",
          de: "Das Pfosten-und-Sturz-System, bei dem vertikale Pfosten horizontale Balken stützen, war die primäre architektonische Methode im alten Ägypten und ermöglichte den Bau von Tempeln und Denkmälern.",
          nl: "Het post-en-lateelsysteem, waarbij verticale posten horizontale balken ondersteunen, was de primaire architecturale methode in het oude Egypte, waardoor de bouw van tempels en monumenten mogelijk werd."
        }
      },
      {
        question: {
          en: "Which ancient Egyptian queen ruled as pharaoh for over 20 years?",
          es: "¿Qué reina del antiguo Egipto gobernó como faraón por más de 20 años?",
          de: "Welche altägyptische Königin regierte über 20 Jahre als Pharao?",
          nl: "Welke oude Egyptische koningin regeerde als farao voor meer dan 20 jaar?"
        },
        options: [
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatsjepsoet" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Tausret", es: "Tausret", de: "Tausret", nl: "Tausret" },
          { en: "Neithhotep", es: "Neithotep", de: "Neithhotep", nl: "Neithhotep" }
        ],
        correct: 0,
        explanation: {
          en: "Queen Hatshepsut ruled as pharaoh for approximately 22 years (c. 1479-1458 BCE). She was one of the most successful female pharaohs and built many monuments including her temple at Deir el-Bahri.",
          es: "La Reina Hatshepsut gobernó como faraón por aproximadamente 22 años (c. 1479-1458 a.C.). Fue una de las faraonas femeninas más exitosas y construyó muchos monumentos incluyendo su templo en Deir el-Bahri.",
          de: "Königin Hatschepsut regierte etwa 22 Jahre als Pharao (ca. 1479-1458 v. Chr.). Sie war eine der erfolgreichsten weiblichen Pharaonen und baute viele Denkmäler, einschließlich ihres Tempels in Deir el-Bahari.",
          nl: "Koningin Hatsjepsoet regeerde als farao voor ongeveer 22 jaar (ca. 1479-1458 v.Chr.). Ze was een van de meest succesvolle vrouwelijke farao's en bouwde veel monumenten inclusief haar tempel in Deir el-Bahri."
        }
      },
      {
        question: {
          en: "What was the primary building material for ancient Egyptian temples?",
          es: "¿Cuál era el material de construcción principal para los templos del antiguo Egipto?",
          de: "Was war das primäre Baumaterial für altägyptische Tempel?",
          nl: "Wat was het primaire bouwmateriaal voor oude Egyptische tempels?"
        },
        options: [
          { en: "Sandstone", es: "Arenisca", de: "Sandstein", nl: "Zandsteen" },
          { en: "Limestone", es: "Piedra caliza", de: "Kalkstein", nl: "Kalksteen" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
          { en: "Mud brick", es: "Ladrillo de barro", de: "Lehmziegel", nl: "Modderziegel" }
        ],
        correct: 0,
        explanation: {
          en: "Sandstone was the primary building material for most ancient Egyptian temples, especially those in Upper Egypt. It was easier to carve than granite and more durable than limestone.",
          es: "La arenisca era el material de construcción principal para la mayoría de los templos del antiguo Egipto, especialmente aquellos en el Alto Egipto. Era más fácil de tallar que el granito y más duradero que la piedra caliza.",
          de: "Sandstein war das primäre Baumaterial für die meisten altägyptischen Tempel, besonders die in Oberägypten. Er war einfacher zu bearbeiten als Granit und haltbarer als Kalkstein.",
          nl: "Zandsteen was het primaire bouwmateriaal voor de meeste oude Egyptische tempels, vooral die in Opper-Egypte. Het was makkelijker te bewerken dan graniet en duurzamer dan kalksteen."
        }
      },
      {
        question: {
          en: "Which Egyptian queen is famous for her beauty and relationship with Julius Caesar and Mark Antony?",
          es: "¿Qué reina egipcia es famosa por su belleza y relación con Julio César y Marco Antonio?",
          de: "Welche ägyptische Königin ist berühmt für ihre Schönheit und ihre Beziehung zu Julius Caesar und Mark Antonius?",
          nl: "Welke Egyptische koningin is beroemd om haar schoonheid en relatie met Julius Caesar en Marcus Antonius?"
        },
        options: [
          { en: "Cleopatra VII", es: "Cleopatra VII", de: "Kleopatra VII", nl: "Cleopatra VII" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatshepsut" },
          { en: "Ankhesenamun", es: "Anjesenamón", de: "Anchesenamun", nl: "Ankhesenamun" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra VII was the last active pharaoh of ancient Egypt, famous for her intelligence, political acumen, and romantic relationships with Julius Caesar and Mark Antony.",
          es: "Cleopatra VII fue la última faraona activa del antiguo Egipto, famosa por su inteligencia, perspicacia política y relaciones románticas with Julio César y Marco Antonio.",
          de: "Kleopatra VII war die letzte aktive Pharaonin des alten Ägypten, berühmt für ihre Intelligenz, politischen Scharfsinn und romantischen Beziehungen zu Julius Caesar und Mark Antonius.",
          nl: "Cleopatra VII was de laatste actieve farao van het oude Egypte, beroemd om haar intelligentie, politieke scherpzinnigheid en romantische relaties met Julius Caesar en Marcus Antonius."
        }
      },
      {
        question: {
          en: "What is the Great Sphinx of Giza believed to represent?",
          es: "¿Qué se cree que representa la Gran Esfinge de Giza?",
          de: "Was soll die Große Sphinx von Gizeh darstellen?",
          nl: "Wat wordt er geloofd dat de Grote Sfinx van Giza voorstelt?"
        },
        options: [
          { en: "A pharaoh with a lion's body", es: "Un faraón con cuerpo de león", de: "Ein Pharao mit Löwenkörper", nl: "Een farao met een leeuwenlichaam" },
          { en: "A god with an eagle's body", es: "Un dios con cuerpo de águila", de: "Ein Gott mit Adlerkörper", nl: "Een god met een arendslichaam" },
          { en: "A priest with a bull's body", es: "Un sacerdote con cuerpo de toro", de: "Ein Priester mit Stierkörper", nl: "Een priester met een stierenlichaam" },
          { en: "A queen with a snake's body", es: "Una reina con cuerpo de serpiente", de: "Eine Königin mit Schlangenkörper", nl: "Een koningin met een slangenlichaam" }
        ],
        correct: 0,
        explanation: {
          en: "The Great Sphinx has a human head (believed to represent a pharaoh) on a lion's body, symbolizing the pharaoh's divine power and royal strength.",
          es: "La Gran Esfinge tiene una cabeza humana (se cree que representa a un faraón) en un cuerpo de león, simbolizando el poder divino del faraón y la fuerza real.",
          de: "Die Große Sphinx hat einen menschlichen Kopf (vermutlich einen Pharao darstellend) auf einem Löwenkörper, was die göttliche Macht und königliche Stärke des Pharaos symbolisiert.",
          nl: "De Grote Sfinx heeft een mensenhoofd (waarvan wordt geloofd dat het een farao voorstelt) op een leeuwenlichaam, wat de goddelijke macht en koninklijke kracht van de farao symboliseert."
        }
      },
      {
        question: {
          en: "Which period saw the construction of most Egyptian pyramids?",
          es: "¿Qué período vio la construcción de la mayoría de las pirámides egipcias?",
          de: "In welcher Zeit wurden die meisten ägyptischen Pyramiden gebaut?",
          nl: "In welke periode werden de meeste Egyptische piramides gebouwd?"
        },
        options: [
          { en: "Old Kingdom", es: "Reino Antiguo", de: "Altes Reich", nl: "Oude Rijk" },
          { en: "Middle Kingdom", es: "Reino Medio", de: "Mittleres Reich", nl: "Middenrijk" },
          { en: "New Kingdom", es: "Reino Nuevo", de: "Neues Reich", nl: "Nieuwe Rijk" },
          { en: "Ptolemaic Period", es: "Período Ptolemaico", de: "Ptolemäerzeit", nl: "Ptolemeïsche periode" }
        ],
        correct: 0,
        explanation: {
          en: "The Old Kingdom period (c. 2686-2181 BCE) is known as the 'Age of the Pyramids' when most of Egypt's famous pyramids were built, including those at Giza.",
          es: "El período del Reino Antiguo (c. 2686-2181 a.C.) se conoce como la 'Era de las Pirámides' cuando se construyeron la mayoría de las famosas pirámides de Egipto, incluyendo las de Giza.",
          de: "Die Zeit des Alten Reiches (ca. 2686-2181 v. Chr.) wird als 'Zeitalter der Pyramiden' bezeichnet, als die meisten berühmten Pyramiden Ägyptens gebaut wurden, einschließlich derer von Gizeh.",
          nl: "De periode van het Oude Rijk (ca. 2686-2181 v.Chr.) staat bekend als het 'Tijdperk van de Piramides' toen de meeste beroemde piramides van Egypte werden gebouwd, inclusief die van Giza."
        }
      },
      {
        question: {
          en: "What was the significance of the Library of Alexandria in the ancient Mediterranean world?",
          es: "¿Cuál fue la importancia de la Biblioteca de Alejandría en el mundo mediterráneo antiguo?",
          de: "Welche Bedeutung hatte die Bibliothek von Alexandria in der antiken Mittelmeerwelt?",
          nl: "Wat was de betekenis van de Bibliotheek van Alexandrië in de antieke mediterrane wereld?"
        },
        options: [
          { en: "Center of learning and scholarship that preserved knowledge from multiple civilizations", es: "Centro de aprendizaje y erudición que preservó conocimiento de múltiples civilizaciones", de: "Zentrum des Lernens und der Gelehrsamkeit, das Wissen aus mehreren Zivilisationen bewahrte", nl: "Centrum van leren en wetenschap dat kennis van meerdere beschavingen bewaarde" },
          { en: "Military fortress protecting Egypt's northern coast", es: "Fortaleza militar protegiendo la costa norte de Egipto", de: "Militärfestung zum Schutz von Ägyptens Nordküste", nl: "Militaire vesting die de noordkust van Egypte beschermde" },
          { en: "Trading post for Mediterranean commerce", es: "Puesto comercial para comercio mediterráneo", de: "Handelsposten für Mittelmeerhandel", nl: "Handelspost voor mediterrane handel" },
          { en: "Religious temple dedicated to Egyptian gods", es: "Templo religioso dedicado a dioses egipcios", de: "Religiöser Tempel den ägyptischen Göttern geweiht", nl: "Religieuze tempel gewijd aan Egyptische goden" }
        ],
        correct: 0,
        explanation: {
          en: "The Library of Alexandria was the ancient world's greatest center of learning, founded by the Ptolemies around 295 BCE. It housed hundreds of thousands of scrolls containing knowledge from Greek, Egyptian, Persian, and other cultures, making it a crucial institution for preserving and advancing human knowledge.",
          es: "La Biblioteca de Alejandría fue el mayor centro de aprendizaje del mundo antiguo, fundada por los Ptolomeos alrededor del 295 a.C. Albergaba cientos de miles de rollos conteniendo conocimiento de culturas griega, egipcia, persa y otras, convirtiéndola en una institución crucial para preservar y avanzar el conocimiento humano.",
          de: "Die Bibliothek von Alexandria war das größte Zentrum des Lernens in der antiken Welt, gegründet von den Ptolemäern um 295 v.Chr. Sie beherbergte Hunderttausende von Schriftrollen mit Wissen aus griechischer, ägyptischer, persischer und anderen Kulturen, was sie zu einer entscheidenden Institution für die Bewahrung und Förderung menschlichen Wissens machte.",
          nl: "De Bibliotheek van Alexandrië was het grootste leercentrum van de antieke wereld, gesticht door de Ptolemaeën rond 295 v.Chr. Het herbergde honderdduizenden rollen met kennis uit de Griekse, Egyptische, Perzische en andere culturen, waardoor het een cruciale instelling werd voor het bewaren en bevorderen van menselijke kennis."
        }
      },
      {
        question: {
          en: "What archaeological evidence supports the historical existence of the Trojan War?",
          es: "¿Qué evidencia arqueológica apoya la existencia histórica de la Guerra de Troya?",
          de: "Welche archäologischen Beweise stützen die historische Existenz des Trojanischen Krieges?",
          nl: "Welk archeologisch bewijs ondersteunt het historisch bestaan van de Trojaanse Oorlog?"
        },
        options: [
          { en: "Destruction layers at Hisarlik (ancient Troy) dating to Late Bronze Age period", es: "Capas de destrucción en Hisarlik (antigua Troya) datando del período Bronce Tardío", de: "Zerstörungsschichten in Hisarlik (antikes Troja) aus der späten Bronzezeit", nl: "Vernietigingslagen in Hisarlik (oud Troje) daterend uit de Late Bronstijd periode" },
          { en: "Discovery of Achilles' shield and armor", es: "Descubrimiento del escudo y armadura de Aquiles", de: "Entdeckung von Achilles' Schild und Rüstung", nl: "Ontdekking van Achilles' schild en wapenrusting" },
          { en: "Intact wooden horse found in archaeological excavations", es: "Caballo de madera intacto encontrado en excavaciones arqueológicas", de: "Intaktes hölzernes Pferd in archäologischen Ausgrabungen gefunden", nl: "Intact houten paard gevonden in archeologische opgravingen" },
          { en: "Written records from Homer's personal archives", es: "Registros escritos de los archivos personales de Homero", de: "Schriftliche Aufzeichnungen aus Homers persönlichen Archiven", nl: "Geschreven records uit Homerus' persoonlijke archieven" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeological excavations at Hisarlik in Turkey, identified as ancient Troy, have revealed multiple destruction layers from the Late Bronze Age (circa 1300-1180 BCE), particularly Troy VIIa, which shows evidence of warfare, fire damage, and abandonment consistent with the timeframe suggested for the Trojan War.",
          es: "Las excavaciones arqueológicas en Hisarlik en Turquía, identificado como la antigua Troya, han revelado múltiples capas de destrucción del Bronce Tardío (circa 1300-1180 a.C.), particularmente Troya VIIa, que muestra evidencia de guerra, daño por fuego y abandono consistente con el marco temporal sugerido para la Guerra de Troya.",
          de: "Archäologische Ausgrabungen in Hisarlik in der Türkei, identifiziert als antikes Troja, haben mehrere Zerstörungsschichten aus der späten Bronzezeit (ca. 1300-1180 v.Chr.) offenbart, insbesondere Troja VIIa, das Beweise für Kriegsführung, Feuerschäden und Verlassenheit zeigt, die mit dem für den Trojanischen Krieg vorgeschlagenen Zeitrahmen übereinstimmen.",
          nl: "Archeologische opgravingen in Hisarlik in Turkije, geïdentificeerd als het oude Troje, hebben meerdere vernietigingslagen uit de Late Bronstijd (circa 1300-1180 v.Chr.) onthuld, met name Troje VIIa, dat bewijs toont van oorlogvoering, brandschade en verlating consistent met het tijdskader voorgesteld voor de Trojaanse Oorlog."
        }
      },
      {
        question: {
          en: "What was the cultural and political significance of the Parthenon in ancient Athens?",
          es: "¿Cuál fue la importancia cultural y política del Partenón en la Atenas antigua?",
          de: "Welche kulturelle und politische Bedeutung hatte der Parthenon im antiken Athen?",
          nl: "Wat was de culturele en politieke betekenis van het Parthenon in het antieke Athene?"
        },
        options: [
          { en: "Symbol of Athenian democracy, power, and devotion to Athena during the Golden Age", es: "Símbolo de democracia ateniense, poder y devoción a Atenea durante la Edad de Oro", de: "Symbol der athenischen Demokratie, Macht und Hingabe an Athena während des Goldenen Zeitalters", nl: "Symbool van Atheense democratie, macht en toewijding aan Athena tijdens de Gouden Eeuw" },
          { en: "Military fortress protecting the Athenian harbor", es: "Fortaleza militar protegiendo el puerto ateniense", de: "Militärfestung zum Schutz des athenischen Hafens", nl: "Militaire vesting die de Atheense haven beschermde" },
          { en: "Meeting place for the Athenian Senate", es: "Lugar de reunión para el Senado ateniense", de: "Versammlungsort für den athenischen Senat", nl: "Vergaderplaats voor de Atheense Senaat" },
          { en: "Training ground for Olympic athletes", es: "Terreno de entrenamiento para atletas olímpicos", de: "Trainingsplatz für olympische Athleten", nl: "Trainingsgrond voor Olympische atleten" }
        ],
        correct: 0,
        explanation: {
          en: "Built during Pericles' leadership (447-432 BCE), the Parthenon served as a temple to Athena and a powerful symbol of Athenian wealth, democratic ideals, and cultural supremacy during the city's Golden Age. It housed a massive gold and ivory statue of Athena and represented Athens' dominance in the Delian League.",
          es: "Construido durante el liderazgo de Pericles (447-432 a.C.), el Partenón sirvió como templo a Atenea y un símbolo poderoso de riqueza ateniense, ideales democráticos y supremacía cultural durante la Edad de Oro de la ciudad. Albergaba una estatua masiva de oro y marfil de Atenea y representaba la dominancia de Atenas en la Liga de Delos.",
          de: "Erbaut während Perikles' Führung (447-432 v.Chr.), diente der Parthenon als Tempel für Athena und mächtiges Symbol athenischen Reichtums, demokratischer Ideale und kultureller Vorherrschaft während der Goldenen Zeit der Stadt. Er beherbergte eine massive Gold- und Elfenbeinstatue der Athena und repräsentierte Athens Dominanz im Delischen Bund.",
          nl: "Gebouwd tijdens Pericles' leiderschap (447-432 v.Chr.), diende het Parthenon als tempel voor Athena en krachtig symbool van Atheense rijkdom, democratische idealen en culturele suprematie tijdens de Gouden Eeuw van de stad. Het herbergde een massaal gouden en ivoren standbeeld van Athena en vertegenwoordigde Athenes dominantie in de Delische Bond."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/archaeology', level3);
  }
})();