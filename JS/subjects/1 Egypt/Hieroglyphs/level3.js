// Quiz Level 3: Hiërogliefen - Royal Names & Cartouches
(function() {
  "use strict";

  const level3 = {
    name: {
      en: "Royal Names & Cartouches",
      es: "Nombres Reales y Cartuchos",
      de: "Königliche Namen und Kartuschen",
      nl: "Koninklijke Namen & Cartouches"
    },
    questions: [
      {
        question: {
          en: "What is a cartouche in Egyptian hieroglyphic writing?",
          es: "¿Qué es un cartucho en la escritura jeroglífica egipcia?",
          de: "Was ist eine Kartusche in der ägyptischen Hieroglyphenschrift?",
          nl: "Wat is een cartouche in Egyptisch hiëroglifisch schrift?"
        },
        options: [
          { en: "An oval loop enclosing royal names", es: "Un lazo ovalado que encierra nombres reales", de: "Eine ovale Schleife, die königliche Namen umschließt", nl: "Een ovale lus die koninklijke namen omsluit" },
          { en: "A type of crown", es: "Un tipo de corona", de: "Eine Art Krone", nl: "Een soort kroon" },
          { en: "A royal seal", es: "Un sello real", de: "Ein königliches Siegel", nl: "Een koninklijk zegel" },
          { en: "A temple decoration", es: "Una decoración de templo", de: "Eine Tempeldekoration", nl: "Een tempelversiering" }
        ],
        correct: 0,
        explanation: {
          en: "A cartouche (shenut in Egyptian) is an oval loop with a horizontal line at one end that encloses the birth name and throne name of pharaohs. It represents a magical rope that protects the royal name.",
          es: "Un cartucho (shenut en egipcio) es un lazo ovalado con una línea horizontal en un extremo que encierra el nombre de nacimiento y el nombre del trono de los faraones. Representa una cuerda mágica que protege el nombre real.",
          de: "Eine Kartusche (Schenut auf Ägyptisch) ist eine ovale Schleife mit einer horizontalen Linie an einem Ende, die den Geburtsnamen und Thronnamen der Pharaonen umschließt. Sie stellt ein magisches Seil dar, das den königlichen Namen schützt.",
          nl: "Een cartouche (shenut in het Egyptisch) is een ovale lus met een horizontale lijn aan één kant die de geboortenaam en troonnaam van farao's omsluit. Het stelt een magisch touw voor dat de koninklijke naam beschermt."
        }
      },
      {
        question: {
          en: "How many names did a pharaoh typically have in their full royal titulary?",
          es: "¿Cuántos nombres tenía típicamente un faraón en su titulatura real completa?",
          de: "Wie viele Namen hatte ein Pharao typischerweise in seiner vollständigen königlichen Titulatur?",
          nl: "Hoeveel namen had een farao typisch in hun volledige koninklijke titulatuur?"
        },
        options: [
          { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
          { en: "Four", es: "Cuatro", de: "Vier", nl: "Vier" },
          { en: "Five", es: "Cinco", de: "Fünf", nl: "Vijf" },
          { en: "Six", es: "Seis", de: "Sechs", nl: "Zes" }
        ],
        correct: 2,
        explanation: {
          en: "Pharaohs had five names in their royal titulary: Horus name, Nebty name, Golden Horus name, throne name (prenomen), and birth name (nomen). The last two were typically enclosed in cartouches.",
          es: "Los faraones tenían cinco nombres en su titulatura real: nombre de Horus, nombre Nebty, nombre del Horus Dorado, nombre del trono (prenomen) y nombre de nacimiento (nomen). Los dos últimos típicamente se encerraban en cartuchos.",
          de: "Pharaonen hatten fünf Namen in ihrer königlichen Titulatur: Horus-Name, Nebty-Name, Goldener Horus-Name, Thronname (Pränomen) und Geburtsname (Nomen). Die letzten beiden wurden typischerweise in Kartuschen eingeschlossen.",
          nl: "Farao's hadden vijf namen in hun koninklijke titulatuur: Horus-naam, Nebty-naam, Gouden Horus-naam, troonnaam (prenomen) en geboortenaam (nomen). De laatste twee werden typisch omsloten in cartouches."
        }
      },
      {
        question: {
          en: "Which pharaoh's name appears in this cartouche: 𓂋𓈖𓎦𓄟𓋴?",
          es: "¿El nombre de qué faraón aparece en este cartucho: 𓂋𓈖𓎦𓄟𓋴?",
          de: "Welcher Pharao-Name erscheint in dieser Kartusche: 𓂋𓈖𓎦𓄟𓋴?",
          nl: "Wiens farao-naam verschijnt in deze cartouche: 𓂋𓈖𓎦𓄟𓋴?"
        },
        options: [
          { en: "Khufu", es: "Keops", de: "Cheops", nl: "Cheops" },
          { en: "Ramesses", es: "Ramsés", de: "Ramses", nl: "Ramses" },
          { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
          { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" }
        ],
        correct: 1,
        explanation: {
          en: "This cartouche reads 'Ra-messu' (Ramesses), meaning 'Born of Ra'. The hieroglyphs show Ra (sun disk), mes (child/born), and su (him), forming the name of one of Egypt's most famous pharaohs.",
          es: "Este cartucho se lee 'Ra-messu' (Ramsés), que significa 'Nacido de Ra'. Los jeroglíficos muestran Ra (disco solar), mes (niño/nacido) y su (él), formando el nombre de uno de los faraones más famosos de Egipto.",
          de: "Diese Kartusche liest sich 'Ra-messu' (Ramses), was 'Sohn des Ra' bedeutet. Die Hieroglyphen zeigen Ra (Sonnenscheibe), mes (Kind/geboren) und su (er), was den Namen eines der berühmtesten Pharaonen Ägyptens bildet.",
          nl: "Deze cartouche leest 'Ra-messu' (Ramses), wat 'Geboren van Ra' betekent. De hiërogliefen tonen Ra (zonneschijf), mes (kind/geboren) en su (hij), wat de naam vormt van een van Egypte's beroemdste farao's."
        }
      },
      {
        question: {
          en: "What does the name 'Tutankhamun' mean in ancient Egyptian?",
          es: "¿Qué significa el nombre 'Tutankamón' en egipcio antiguo?",
          de: "Was bedeutet der Name 'Tutanchamun' im alten Ägyptisch?",
          nl: "Wat betekent de naam 'Toetanchamon' in het oude Egyptisch?"
        },
        options: [
          { en: "Living image of Ra", es: "Imagen viviente de Ra", de: "Lebendiges Bild des Ra", nl: "Levend beeld van Ra" },
          { en: "Living image of Amun", es: "Imagen viviente de Amón", de: "Lebendiges Bild des Amun", nl: "Levend beeld van Amun" },
          { en: "Son of the sun", es: "Hijo del sol", de: "Sohn der Sonne", nl: "Zoon van de zon" },
          { en: "Golden falcon", es: "Halcón dorado", de: "Goldener Falke", nl: "Gouden valk" }
        ],
        correct: 1,
        explanation: {
          en: "Tutankhamun means 'Living image of Amun'. The name consists of 'tut' (image), 'ankh' (living), and 'Amun' (the god). He originally was named Tutankhaten (living image of Aten) but changed it when the Amarna period ended.",
          es: "Tutankamón significa 'Imagen viviente de Amón'. El nombre consiste en 'tut' (imagen), 'ankh' (viviente) y 'Amón' (el dios). Originalmente se llamaba Tutankatón (imagen viviente de Atón) pero lo cambió cuando terminó el período de Amarna.",
          de: "Tutanchamun bedeutet 'Lebendiges Bild des Amun'. Der Name besteht aus 'tut' (Bild), 'anch' (lebend) und 'Amun' (der Gott). Er hieß ursprünglich Tutanchaton (lebendiges Bild des Aton), änderte es aber, als die Amarna-Zeit endete.",
          nl: "Toetanchamon betekent 'Levend beeld van Amun'. De naam bestaat uit 'tut' (beeld), 'ankh' (levend) en 'Amun' (de god). Hij heette oorspronkelijk Toetanchaton (levend beeld van Aton) maar veranderde dit toen de Amarna-periode eindigde."
        }
      },
      {
        question: {
          en: "Which title typically precedes a pharaoh's cartouche name?",
          es: "¿Qué título precede típicamente al nombre de cartucho de un faraón?",
          de: "Welcher Titel geht typischerweise dem Kartuschen-Namen eines Pharaos voraus?",
          nl: "Welke titel gaat typisch vooraf aan de cartouche-naam van een farao?"
        },
        options: [
          { en: "Lord of the Two Lands", es: "Señor de las Dos Tierras", de: "Herr der Beiden Länder", nl: "Heer van de Twee Landen" },
          { en: "Son of Ra", es: "Hijo de Ra", de: "Sohn des Ra", nl: "Zoon van Ra" },
          { en: "Great House", es: "Gran Casa", de: "Großes Haus", nl: "Groot Huis" },
          { en: "Living Horus", es: "Horus Viviente", de: "Lebender Horus", nl: "Levende Horus" }
        ],
        correct: 1,
        explanation: {
          en: "'Sa Ra' (Son of Ra) typically precedes the birth name cartouche, while 'nesut bity' (King of Upper and Lower Egypt) precedes the throne name. These titles establish the pharaoh's divine nature and legitimate rule.",
          es: "'Sa Ra' (Hijo de Ra) típicamente precede al cartucho del nombre de nacimiento, mientras que 'nesut bity' (Rey del Alto y Bajo Egipto) precede al nombre del trono. Estos títulos establecen la naturaleza divina del faraón y su gobierno legítimo.",
          de: "'Sa Ra' (Sohn des Ra) geht typischerweise dem Geburtsnamen-Kartusche voraus, während 'nesut bity' (König von Ober- und Unterägypten) dem Thronnamen vorausgeht. Diese Titel etablieren die göttliche Natur des Pharaos und seine legitime Herrschaft.",
          nl: "'Sa Ra' (Zoon van Ra) gaat typisch vooraf aan de geboortenaam-cartouche, terwijl 'nesut bity' (Koning van Opper- en Neder-Egypte) voorafgaat aan de troonnaam. Deze titels vestigen de goddelijke aard van de farao en legitieme heerschappij."
        }
      },
      {
        question: {
          en: "What does the name 'Khufu' mean?",
          es: "¿Qué significa el nombre 'Keops'?",
          de: "Was bedeutet der Name 'Cheops'?",
          nl: "Wat betekent de naam 'Cheops'?"
        },
        options: [
          { en: "He protects me", es: "Él me protege", de: "Er beschützt mich", nl: "Hij beschermt me" },
          { en: "Builder of pyramids", es: "Constructor de pirámides", de: "Pyramidenbauer", nl: "Bouwer van piramides" },
          { en: "Lord of the sun", es: "Señor del sol", de: "Herr der Sonne", nl: "Heer van de zon" },
          { en: "Golden king", es: "Rey dorado", de: "Goldener König", nl: "Gouden koning" }
        ],
        correct: 0,
        explanation: {
          en: "Khufu (𓐍𓅱𓊖𓅱) means 'He (the god Khnum) protects me'. Khnum was a ram-headed creator god, and pharaohs often incorporated divine protection into their names to ensure divine favor.",
          es: "Keops (𓐍𓅱𓊖𓅱) significa 'Él (el dios Khnum) me protege'. Khnum era un dios creador con cabeza de carnero, y los faraones a menudo incorporaban protección divina en sus nombres para asegurar el favor divino.",
          de: "Cheops (𓐍𓅱𓊖𓅱) bedeutet 'Er (der Gott Chnum) beschützt mich'. Chnum war ein widderköpfiger Schöpfergott, und Pharaonen bauten oft göttlichen Schutz in ihre Namen ein, um göttliche Gunst zu sichern.",
          nl: "Cheops (𓐍𓅱𓊖𓅱) betekent 'Hij (de god Khnum) beschermt me'. Khnum was een ramskoppige scheppergod, en farao's namen vaak goddelijke bescherming op in hun namen om goddelijke gunst te verzekeren."
        }
      },
      {
        question: {
          en: "Which pharaoh's throne name was 'Nebkheperure'?",
          es: "¿Cuál faraón tenía el nombre de trono 'Nebkheperure'?",
          de: "Welcher Pharao hatte den Thronnamen 'Nebkheperure'?",
          nl: "Welke farao had de troonnaam 'Nebkheperure'?"
        },
        options: [
          { en: "Akhenaten", es: "Akenatón", de: "Echnaton", nl: "Achnaton" },
          { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
          { en: "Ramesses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatsjepsoet" }
        ],
        correct: 1,
        explanation: {
          en: "Nebkheperure was the throne name of Tutankhamun, meaning 'Ra is the lord of manifestations'. Throne names often incorporated the name of Ra and expressed the pharaoh's divine connection to the sun god.",
          es: "Nebkheperure era el nombre del trono de Tutankamón, que significa 'Ra es el señor de las manifestaciones'. Los nombres del trono a menudo incorporaban el nombre de Ra y expresaban la conexión divina del faraón con el dios sol.",
          de: "Nebkheperure war der Thronname von Tutanchamun, was 'Ra ist der Herr der Manifestationen' bedeutet. Thronnamen enthielten oft den Namen des Ra und drückten die göttliche Verbindung des Pharaos zum Sonnengott aus.",
          nl: "Nebkheperure was de troonnaam van Toetanchamon, wat 'Ra is de heer van manifestaties' betekent. Troonnamen bevatten vaak de naam van Ra en drukten de goddelijke verbinding van de farao met de zonnegod uit."
        }
      },
      {
        question: {
          en: "What does the name 'Cleopatra' mean in hieroglyphic writing?",
          es: "¿Qué significa el nombre 'Cleopatra' en escritura jeroglífica?",
          de: "Was bedeutet der Name 'Kleopatra' in hieroglyphischer Schrift?",
          nl: "Wat betekent de naam 'Cleopatra' in hiëroglifisch schrift?"
        },
        options: [
          { en: "Glory of her father", es: "Gloria de su padre", de: "Ruhm ihres Vaters", nl: "Glorie van haar vader" },
          { en: "Beautiful queen", es: "Reina hermosa", de: "Schöne Königin", nl: "Mooie koningin" },
          { en: "Daughter of the sun", es: "Hija del sol", de: "Tochter der Sonne", nl: "Dochter van de zon" },
          { en: "Golden goddess", es: "Diosa dorada", de: "Goldene Göttin", nl: "Gouden godin" }
        ],
        correct: 0,
        explanation: {
          en: "Cleopatra (𓊃𓃭𓇯𓄿𓄿𓇾𓇯𓈖) means 'Glory of her father' in Greek, but was written phonetically in hieroglyphs as 'Kliopatra'. The Ptolemaic dynasty used Greek names that were adapted into Egyptian writing.",
          es: "Cleopatra (𓊃𓃭𓇯𓄿𓄿𓇾𓇯𓈖) significa 'Gloria de su padre' en griego, pero se escribía fonéticamente en jeroglíficos como 'Kliopatra'. La dinastía ptolemaica usaba nombres griegos que se adaptaban a la escritura egipcia.",
          de: "Kleopatra (𓊃𓃭𓇯𓄿𓄿𓇾𓇯𓈖) bedeutet 'Ruhm ihres Vaters' auf Griechisch, wurde aber phonetisch in Hieroglyphen als 'Kliopatra' geschrieben. Die ptolemäische Dynastie verwendete griechische Namen, die an die ägyptische Schrift angepasst wurden.",
          nl: "Cleopatra (𓊃𓃭𓇯𓄿𓄿𓇾𓇯𓈖) betekent 'Glorie van haar vader' in het Grieks, maar werd fonetisch in hiërogliefen geschreven als 'Kliopatra'. De Ptolemese dynastie gebruikte Griekse namen die aangepast werden aan het Egyptische schrift."
        }
      },
      {
        question: {
          en: "Which title means 'Great Royal Wife' for queen consorts?",
          es: "¿Qué título significa 'Gran Esposa Real' para las consortes reinas?",
          de: "Welcher Titel bedeutet 'Große Königliche Gemahlin' für Königin-Gemahlinnen?",
          nl: "Welke titel betekent 'Grote Koninklijke Vrouw' voor koningin-gemalinnen?"
        },
        options: [
          { en: "Nebet per", es: "Nebet per", de: "Nebet per", nl: "Nebet per" },
          { en: "Hemet nesut weret", es: "Hemet nesut weret", de: "Hemet nesut weret", nl: "Hemet nesut weret" },
          { en: "Sat nesut", es: "Sat nesut", de: "Sat nesut", nl: "Sat nesut" },
          { en: "Maat ka Ra", es: "Maat ka Ra", de: "Maat ka Ra", nl: "Maat ka Ra" }
        ],
        correct: 1,
        explanation: {
          en: "Hemet nesut weret (𓎟𓇳𓂩𓏏𓆑𓊃) means 'Great Royal Wife' and was the title for the pharaoh's principal queen. This distinguished her from other wives and established her high status in the royal court.",
          es: "Hemet nesut weret (𓎟𓇳𓂩𓏏𓆑𓊃) significa 'Gran Esposa Real' y era el título para la reina principal del faraón. Esto la distinguía de otras esposas y establecía su alto estatus en la corte real.",
          de: "Hemet nesut weret (𓎟𓇳𓂩𓏏𓆑𓊃) bedeutet 'Große Königliche Gemahlin' und war der Titel für die Hauptkönigin des Pharaos. Dies unterschied sie von anderen Ehefrauen und etablierte ihren hohen Status am königlichen Hof.",
          nl: "Hemet nesut weret (𓎟𓇳𓂩𓏏𓆑𓊃) betekent 'Grote Koninklijke Vrouw' en was de titel voor de hoofdkoningin van de farao. Dit onderscheidde haar van andere vrouwen en vestigde haar hoge status aan het koninklijk hof."
        }
      },
      {
        question: {
          en: "What does the name 'Amenhotep' mean?",
          es: "¿Qué significa el nombre 'Amenhotep'?",
          de: "Was bedeutet der Name 'Amenhotep'?",
          nl: "Wat betekent de naam 'Amenhotep'?"
        },
        options: [
          { en: "Amun is angry", es: "Amón está enojado", de: "Amun ist zornig", nl: "Amun is boos" },
          { en: "Amun is satisfied", es: "Amón está satisfecho", de: "Amun ist zufrieden", nl: "Amun is tevreden" },
          { en: "Amun is powerful", es: "Amón es poderoso", de: "Amun ist mächtig", nl: "Amun is machtig" },
          { en: "Amun is hidden", es: "Amón está oculto", de: "Amun ist verborgen", nl: "Amun is verborgen" }
        ],
        correct: 1,
        explanation: {
          en: "Amenhotep (𓇋𓏠𓈖𓊵𓏏𓊪) means 'Amun is satisfied' or 'Amun is pleased'. This name reflects the pharaoh's piety toward the god Amun and was borne by several famous pharaohs of the 18th dynasty.",
          es: "Amenhotep (𓇋𓏠𓈖𓊵𓏏𓊪) significa 'Amón está satisfecho' o 'Amón está complacido'. Este nombre refleja la piedad del faraón hacia el dios Amón y fue llevado por varios faraones famosos de la dinastía XVIII.",
          de: "Amenhotep (𓇋𓏠𓈖𓊵𓏏𓊪) bedeutet 'Amun ist zufrieden' oder 'Amun ist erfreut'. Dieser Name spiegelt die Frömmigkeit des Pharaos gegenüber dem Gott Amun wider und wurde von mehreren berühmten Pharaonen der 18. Dynastie getragen.",
          nl: "Amenhotep (𓇋𓏠𓈖𓊵𓏏𓊪) betekent 'Amun is tevreden' of 'Amun is verheugd'. Deze naam weerspiegelt de vroomheid van de farao jegens de god Amun en werd gedragen door verschillende beroemde farao's van de 18e dynastie."
        }
      },
      {
        question: {
          en: "Which pharaoh changed his name from Amenhotep IV to emphasize his religious reforms?",
          es: "¿Qué faraón cambió su nombre de Amenhotep IV para enfatizar sus reformas religiosas?",
          de: "Welcher Pharao änderte seinen Namen von Amenhotep IV, um seine religiösen Reformen zu betonen?",
          nl: "Welke farao veranderde zijn naam van Amenhotep IV om zijn religieuze hervormingen te benadrukken?"
        },
        options: [
          { en: "Akhenaten", es: "Akenatón", de: "Echnaton", nl: "Achnaton" },
          { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
          { en: "Ramesses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
          { en: "Thutmose III", es: "Tutmosis III", de: "Thutmosis III", nl: "Thoetmoses III" }
        ],
        correct: 0,
        explanation: {
          en: "Amenhotep IV changed his name to Akhenaten (𓇋𓏠𓈖𓇳𓅱𓈖), meaning 'Beneficial to Aten', when he established the worship of Aten as the sole god. This name change reflected his revolutionary religious reforms.",
          es: "Amenhotep IV cambió su nombre a Akenatón (𓇋𓏠𓈖𓇳𓅱𓈖), que significa 'Beneficioso para Atón', cuando estableció la adoración de Atón como el único dios. Este cambio de nombre reflejó sus reformas religiosas revolucionarias.",
          de: "Amenhotep IV änderte seinen Namen zu Echnaton (𓇋𓏠𓈖𓇳𓅱𓈖), was 'Wohltätig für Aton' bedeutet, als er die Verehrung des Aton als einzigen Gott etablierte. Diese Namensänderung spiegelte seine revolutionären religiösen Reformen wider.",
          nl: "Amenhotep IV veranderde zijn naam naar Achnaton (𓇋𓏠𓈖𓇳𓅱𓈖), wat 'Heilzaam voor Aton' betekent, toen hij de aanbidding van Aton als enige god vestigde. Deze naamsverandering weerspiegelde zijn revolutionaire religieuze hervormingen."
        }
      },
      {
        question: {
          en: "What does the royal epithet 'ankh djed was' mean?",
          es: "¿Qué significa el epíteto real 'ankh djed was'?",
          de: "Was bedeutet der königliche Beiname 'anch djed was'?",
          nl: "Wat betekent het koninklijke epitheton 'ankh djed was'?"
        },
        options: [
          { en: "Life, stability, dominion", es: "Vida, estabilidad, dominio", de: "Leben, Stabilität, Herrschaft", nl: "Leven, stabiliteit, heerschappij" },
          { en: "Power, glory, victory", es: "Poder, gloria, victoria", de: "Macht, Ruhm, Sieg", nl: "Macht, glorie, overwinning" },
          { en: "Truth, justice, order", es: "Verdad, justicia, orden", de: "Wahrheit, Gerechtigkeit, Ordnung", nl: "Waarheid, rechtvaardigheid, orde" },
          { en: "Strength, wisdom, prosperity", es: "Fuerza, sabiduría, prosperidad", de: "Stärke, Weisheit, Wohlstand", nl: "Kracht, wijsheid, voorspoed" }
        ],
        correct: 0,
        explanation: {
          en: "Ankh djed was (𓋹𓊽𓌀) means 'life, stability, dominion' and was a powerful royal formula. These three symbols together represented the ideal royal attributes and divine blessings upon the pharaoh.",
          es: "Ankh djed was (𓋹𓊽𓌀) significa 'vida, estabilidad, dominio' y era una fórmula real poderosa. Estos tres símbolos juntos representaban los atributos reales ideales y las bendiciones divinas sobre el faraón.",
          de: "Anch djed was (𓋹𓊽𓌀) bedeutet 'Leben, Stabilität, Herrschaft' und war eine mächtige königliche Formel. Diese drei Symbole zusammen stellten die idealen königlichen Eigenschaften und göttlichen Segnungen über den Pharao dar.",
          nl: "Ankh djed was (𓋹𓊽𓌀) betekent 'leven, stabiliteit, heerschappij' en was een krachtige koninklijke formule. Deze drie symbolen samen vertegenwoordigden de ideale koninklijke eigenschappen en goddelijke zegeningen over de farao."
        }
      },
      {
        question: {
          en: "Which queen ruled as pharaoh and had her name written in cartouches?",
          es: "¿Qué reina gobernó como faraón y tuvo su nombre escrito en cartuchos?",
          de: "Welche Königin herrschte als Pharao und ließ ihren Namen in Kartuschen schreiben?",
          nl: "Welke koningin regeerde als farao en had haar naam geschreven in cartouches?"
        },
        options: [
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatsjepsoet" },
          { en: "Cleopatra VII", es: "Cleopatra VII", de: "Kleopatra VII", nl: "Cleopatra VII" },
          { en: "Nefertari", es: "Nefertari", de: "Nefertari", nl: "Nefertari" }
        ],
        correct: 1,
        explanation: {
          en: "Hatshepsut (𓇉𓍺𓇾𓅱𓋔) ruled as pharaoh for about 22 years and had her name written in cartouches like male pharaohs. She initially served as regent but later claimed full pharaonic titles and regalia.",
          es: "Hatshepsut (𓇉𓍺𓇾𓅱𓋔) gobernó como faraón durante unos 22 años y tuvo su nombre escrito en cartuchos como los faraones masculinos. Inicialmente sirvió como regente pero luego reclamó títulos y regalia faraónicos completos.",
          de: "Hatschepsut (𓇉𓍺𓇾𓅱𓋔) herrschte etwa 22 Jahre als Pharao und ließ ihren Namen in Kartuschen wie männliche Pharaonen schreiben. Sie diente zunächst als Regentin, beanspruchte aber später vollständige pharaonische Titel und Insignien.",
          nl: "Hatsjepsoet (𓇉𓍺𓇾𓅱𓋔) regeerde ongeveer 22 jaar als farao en had haar naam geschreven in cartouches zoals mannelijke farao's. Ze diende aanvankelijk als regentes maar claimde later volledige faraonische titels en regalia."
        }
      },
      {
        question: {
          en: "What does the name 'Thutmose' mean?",
          es: "¿Qué significa el nombre 'Tutmosis'?",
          de: "Was bedeutet der Name 'Thutmosis'?",
          nl: "Wat betekent de naam 'Thoetmoses'?"
        },
        options: [
          { en: "Thoth is born", es: "Thoth ha nacido", de: "Thoth ist geboren", nl: "Thoth is geboren" },
          { en: "Thoth is powerful", es: "Thoth es poderoso", de: "Thoth ist mächtig", nl: "Thoth is machtig" },
          { en: "Thoth protects", es: "Thoth protege", de: "Thoth beschützt", nl: "Thoth beschermt" },
          { en: "Thoth speaks", es: "Thoth habla", de: "Thoth spricht", nl: "Thoth spreekt" }
        ],
        correct: 0,
        explanation: {
          en: "Thutmose (𓇳𓏠𓈖𓍿𓅱𓋴) means 'Thoth is born' or 'Born of Thoth'. Thoth was the god of wisdom and writing, making this a prestigious name that emphasized divine patronage and intellectual authority.",
          es: "Tutmosis (𓇳𓏠𓈖𓍿𓅱𓋴) significa 'Thoth ha nacido' o 'Nacido de Thoth'. Thoth era el dios de la sabiduría y la escritura, lo que hace que este sea un nombre prestigioso que enfatizaba el patrocinio divino y la autoridad intelectual.",
          de: "Thutmosis (𓇳𓏠𓈖𓍿𓅱𓋴) bedeutet 'Thoth ist geboren' oder 'Geboren von Thoth'. Thoth war der Gott der Weisheit und Schrift, was dies zu einem prestigeträchtigen Namen machte, der göttliche Schirmherrschaft und intellektuelle Autorität betonte.",
          nl: "Thoetmoses (𓇳𓏠𓈖𓍿𓅱𓋴) betekent 'Thoth is geboren' of 'Geboren van Thoth'. Thoth was de god van wijsheid en schrift, waardoor dit een prestigieuze naam werd die goddelijk patronaat en intellectuele autoriteit benadrukte."
        }
      },
      {
        question: {
          en: "Which epithet means 'Given life like Ra forever'?",
          es: "¿Qué epíteto significa 'Dada vida como Ra para siempre'?",
          de: "Welcher Beiname bedeutet 'Leben gegeben wie Ra für immer'?",
          nl: "Welk epitheton betekent 'Leven gegeven zoals Ra voor altijd'?"
        },
        options: [
          { en: "Ankh djed was", es: "Ankh djed was", de: "Anch djed was", nl: "Ankh djed was" },
          { en: "Di ankh mi Ra djet", es: "Di ankh mi Ra djet", de: "Di anch mi Ra djet", nl: "Di ankh mi Ra djet" },
          { en: "Neb tawy", es: "Neb tawy", de: "Neb tawy", nl: "Neb tawy" },
          { en: "Sa Ra", es: "Sa Ra", de: "Sa Ra", nl: "Sa Ra" }
        ],
        correct: 1,
        explanation: {
          en: "Di ankh mi Ra djet (𓂞𓋹𓐝𓇳𓇳) means 'Given life like Ra forever' and was a common royal blessing formula, expressing the wish that the pharaoh would have eternal life like the sun god Ra.",
          es: "Di ankh mi Ra djet (𓂞𓋹𓐝𓇳𓇳) significa 'Dada vida como Ra para siempre' y era una fórmula de bendición real común, expresando el deseo de que el faraón tuviera vida eterna como el dios sol Ra.",
          de: "Di anch mi Ra djet (𓂞𓋹𓐝𓇳𓇳) bedeutet 'Leben gegeben wie Ra für immer' und war eine übliche königliche Segensformel, die den Wunsch ausdrückte, dass der Pharao ewiges Leben wie der Sonnengott Ra haben möge.",
          nl: "Di ankh mi Ra djet (𓂞𓋹𓐝𓇳𓇳) betekent 'Leven gegeven zoals Ra voor altijd' en was een veelgebruikte koninklijke zegenformule, die de wens uitdrukte dat de farao eeuwig leven zou hebben zoals de zonnegod Ra."
        }
      },
      {
        question: {
          en: "What was special about the way Ptolemaic rulers wrote their names in hieroglyphs?",
          es: "¿Qué tenía de especial la forma en que los gobernantes ptolemaicos escribían sus nombres en jeroglíficos?",
          de: "Was war besonders an der Art, wie ptolemäische Herrscher ihre Namen in Hieroglyphen schrieben?",
          nl: "Wat was bijzonder aan de manier waarop Ptolemese heersers hun namen in hiërogliefen schreven?"
        },
        options: [
          { en: "They used only Egyptian names", es: "Usaban solo nombres egipcios", de: "Sie verwendeten nur ägyptische Namen", nl: "Ze gebruikten alleen Egyptische namen" },
          { en: "They wrote Greek names phonetically in hieroglyphs", es: "Escribían nombres griegos fonéticamente en jeroglíficos", de: "Sie schrieben griechische Namen phonetisch in Hieroglyphen", nl: "Ze schreven Griekse namen fonetisch in hiërogliefen" },
          { en: "They never used cartouches", es: "Nunca usaron cartuchos", de: "Sie verwendeten nie Kartuschen", nl: "Ze gebruikten nooit cartouches" },
          { en: "They only wrote in demotic script", es: "Solo escribían en escritura demótica", de: "Sie schrieben nur in demotischer Schrift", nl: "Ze schreven alleen in demotisch schrift" }
        ],
        correct: 1,
        explanation: {
          en: "Ptolemaic rulers, being of Greek origin, wrote their Greek names phonetically using hieroglyphic signs. This created new combinations of hieroglyphs to represent foreign sounds not native to Egyptian.",
          es: "Los gobernantes ptolemaicos, siendo de origen griego, escribían sus nombres griegos fonéticamente usando signos jeroglíficos. Esto creó nuevas combinaciones de jeroglíficos para representar sonidos extranjeros no nativos del egipcio.",
          de: "Ptolemäische Herrscher, die griechischen Ursprungs waren, schrieben ihre griechischen Namen phonetisch mit hieroglyphischen Zeichen. Dies schuf neue Kombinationen von Hieroglyphen, um fremde Laute darzustellen, die dem Ägyptischen nicht eigen waren.",
          nl: "Ptolemese heersers, van Griekse oorsprong, schreven hun Griekse namen fonetisch met hiëroglifische tekens. Dit creëerde nieuwe combinaties van hiërogliefen om vreemde klanken voor te stellen die niet eigen waren aan het Egyptisch."
        }
      },
      {
        question: {
          en: "What does the name 'Seti' mean in hieroglyphic writing?",
          es: "¿Qué significa el nombre 'Seti' en escritura jeroglífica?",
          de: "Was bedeutet der Name 'Seti' in hieroglyphischer Schrift?",
          nl: "Wat betekent de naam 'Seti' in hiëroglifisch schrift?"
        },
        options: [
          { en: "Man of Set", es: "Hombre de Set", de: "Mann des Set", nl: "Man van Set" },
          { en: "Son of Ra", es: "Hijo de Ra", de: "Sohn des Ra", nl: "Zoon van Ra" },
          { en: "Beloved of Ptah", es: "Amado de Ptah", de: "Geliebt von Ptah", nl: "Geliefd door Ptah" },
          { en: "Protected by Isis", es: "Protegido por Isis", de: "Geschützt von Isis", nl: "Beschermd door Isis" }
        ],
        correct: 0,
        explanation: {
          en: "Seti (𓋴𓏏𓏠) means 'Man of Set' or 'He of Set', referring to the god Set. Despite Set's complex reputation, pharaohs like Seti I used this name, showing the multifaceted nature of Egyptian religious thought.",
          es: "Seti (𓋴𓏏𓏠) significa 'Hombre de Set' o 'Él de Set', refiriéndose al dios Set. A pesar de la reputación compleja de Set, faraones como Seti I usaron este nombre, mostrando la naturaleza multifacética del pensamiento religioso egipcio.",
          de: "Seti (𓋴𓏏𓏠) bedeutet 'Mann des Set' oder 'Er des Set', bezieht sich auf den Gott Set. Trotz Sets komplexer Reputation verwendeten Pharaonen wie Seti I. diesen Namen, was die vielschichtige Natur des ägyptischen religiösen Denkens zeigt.",
          nl: "Seti (𓋴𓏏𓏠) betekent 'Man van Set' of 'Hij van Set', verwijzend naar de god Set. Ondanks Set's complexe reputatie gebruikten farao's zoals Seti I deze naam, wat de veelzijdige aard van het Egyptische religieuze denken toont."
        }
      },
      {
        question: {
          en: "Which symbol is commonly found after royal names meaning 'life, prosperity, health'?",
          es: "¿Qué símbolo se encuentra comúnmente después de nombres reales que significa 'vida, prosperidad, salud'?",
          de: "Welches Symbol findet sich häufig nach königlichen Namen und bedeutet 'Leben, Wohlstand, Gesundheit'?",
          nl: "Welk symbool wordt vaak gevonden na koninklijke namen met de betekenis 'leven, voorspoed, gezondheid'?"
        },
        options: [
          { en: "Three vertical strokes", es: "Tres trazos verticales", de: "Drei vertikale Striche", nl: "Drie verticale strepen" },
          { en: "A lotus flower", es: "Una flor de loto", de: "Eine Lotusblume", nl: "Een lotusbloem" },
          { en: "The ankh-wedja-seneb formula", es: "La fórmula ankh-wedja-seneb", de: "Die Anch-Wedja-Seneb-Formel", nl: "De ankh-wedja-seneb formule" },
          { en: "A scarab beetle", es: "Un escarabajo", de: "Ein Skarabäus", nl: "Een scarabee" }
        ],
        correct: 2,
        explanation: {
          en: "The ankh-wedja-seneb formula (𓋹𓍯𓋴𓈖𓃀) meaning 'life, prosperity, health' commonly follows royal names and cartouches as a blessing formula, similar to modern expressions like 'long live the king'.",
          es: "La fórmula ankh-wedja-seneb (𓋹𓍯𓋴𓈖𓃀) que significa 'vida, prosperidad, salud' comúnmente sigue a los nombres reales y cartuchos como una fórmula de bendición, similar a expresiones modernas como 'larga vida al rey'.",
          de: "Die Anch-Wedja-Seneb-Formel (𓋹𓍯𓋴𓈖𓃀), die 'Leben, Wohlstand, Gesundheit' bedeutet, folgt häufig königlichen Namen und Kartuschen als Segensformel, ähnlich modernen Ausdrücken wie 'lang lebe der König'.",
          nl: "De ankh-wedja-seneb formule (𓋹𓍯𓋴𓈖𓃀) met de betekenis 'leven, voorspoed, gezondheid' volgt vaak koninklijke namen en cartouches als een zegenformule, vergelijkbaar met moderne uitdrukkingen zoals 'lang leve de koning'."
        }
      },
      {
        question: {
          en: "What does the name 'Nefertiti' mean in hieroglyphic writing?",
          es: "¿Qué significa el nombre 'Nefertiti' en escritura jeroglífica?",
          de: "Was bedeutet der Name 'Nofretete' in hieroglyphischer Schrift?",
          nl: "Wat betekent de naam 'Nefertiti' in hiëroglifisch schrift?"
        },
        options: [
          { en: "The beautiful woman", es: "La mujer hermosa", de: "Die schöne Frau", nl: "De mooie vrouw" },
          { en: "The beautiful one has come", es: "La bella ha llegado", de: "Die Schöne ist gekommen", nl: "De mooie is gekomen" },
          { en: "Beautiful like Ra", es: "Hermosa como Ra", de: "Schön wie Ra", nl: "Mooi zoals Ra" },
          { en: "The golden queen", es: "La reina dorada", de: "Die goldene Königin", nl: "De gouden koningin" }
        ],
        correct: 1,
        explanation: {
          en: "Nefertiti (𓇳𓄤𓆑𓂋𓏏𓊖) means 'The beautiful one has come' or 'A beautiful woman has arrived'. She was the Great Royal Wife of Pharaoh Akhenaten and one of the most famous queens of ancient Egypt.",
          es: "Nefertiti (𓇳𓄤𓆑𓂋𓏏𓊖) significa 'La bella ha llegado' o 'Una mujer hermosa ha llegado'. Fue la Gran Esposa Real del faraón Akenatón y una de las reinas más famosas del antiguo Egipto.",
          de: "Nofretete (𓇳𓄤𓆑𓂋𓏏𓊖) bedeutet 'Die Schöne ist gekommen' oder 'Eine schöne Frau ist angekommen'. Sie war die Große Königliche Gemahlin von Pharao Echnaton und eine der berühmtesten Königinnen des alten Ägypten.",
          nl: "Nefertiti (𓇳𓄤𓆑𓂋𓏏𓊖) betekent 'De mooie is gekomen' of 'Een mooie vrouw is gearriveerd'. Ze was de Grote Koninklijke Vrouw van farao Achnaton en een van de beroemdste koninginnen van het oude Egypte."
        }
      },
      {
        question: {
          en: "Which hieroglyphic title refers to the pharaoh as 'Lord of the Two Lands'?",
          es: "¿Qué título jeroglífico se refiere al faraón como 'Señor de las Dos Tierras'?",
          de: "Welcher hieroglyphische Titel bezieht sich auf den Pharao als 'Herr der Beiden Länder'?",
          nl: "Welke hiëroglifische titel verwijst naar de farao als 'Heer van de Twee Landen'?"
        },
        options: [
          { en: "Neb tawy", es: "Neb tawy", de: "Neb tawy", nl: "Neb tawy" },
          { en: "Sa Ra", es: "Sa Ra", de: "Sa Ra", nl: "Sa Ra" },
          { en: "Nesut bity", es: "Nesut bity", de: "Nesut bity", nl: "Nesut bity" },
          { en: "Horus name", es: "Nombre de Horus", de: "Horus-Name", nl: "Horus-naam" }
        ],
        correct: 0,
        explanation: {
          en: "Neb tawy (𓎟𓏏𓊖) means 'Lord of the Two Lands' and refers to the pharaoh's dominion over both Upper and Lower Egypt. This title emphasized the unification of Egypt under one ruler.",
          es: "Neb tawy (𓎟𓏏𓊖) significa 'Señor de las Dos Tierras' y se refiere al dominio del faraón sobre el Alto y Bajo Egipto. Este título enfatizaba la unificación de Egipto bajo un solo gobernante.",
          de: "Neb tawy (𓎟𓏏𓊖) bedeutet 'Herr der Beiden Länder' und bezieht sich auf die Herrschaft des Pharaos über Ober- und Unterägypten. Dieser Titel betonte die Vereinigung Ägyptens unter einem Herrscher.",
          nl: "Neb tawy (𓎟𓏏𓊖) betekent 'Heer van de Twee Landen' en verwijst naar de heerschappij van de farao over zowel Opper- als Neder-Egypte. Deze titel benadrukte de eenwording van Egypte onder één heerser."
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

  return level3;
})();