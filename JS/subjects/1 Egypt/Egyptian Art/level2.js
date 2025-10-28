// Egyptian Art Quiz - Level 2: Knowledge about Egyptian Art
(function() {
  const level2 = {
    name: {
      en: "Egyptian Art Level 2",
      es: "Arte Egipcio Nivel 2",
      de: "Aegyptische Kunst Stufe 2",
      nl: "Egyptische Kunst Level 2"
    },
    questions: [
      {
        question: {
          en: "What material was most commonly used for ancient Egyptian statues?",
          es: "Que material se usaba mas comunmente para las estatuas del antiguo Egipto?",
          de: "Welches Material wurde am haeufigsten fuer altaegyptische Statuen verwendet?",
          nl: "Welk materiaal werd het meest gebruikt voor oude Egyptische beelden?"
        },
        options: [
          { en: "Limestone", es: "Piedra caliza", de: "Kalkstein", nl: "Kalksteen" },
          { en: "Marble", es: "Marmol", de: "Marmor", nl: "Marmer" },
          { en: "Clay", es: "Arcilla", de: "Ton", nl: "Klei" },
          { en: "Bronze", es: "Bronce", de: "Bronze", nl: "Brons" }
        ],
        correct: 0,
        explanation: {
          en: "Limestone was the most widely available and commonly used material for Egyptian statues and monuments.",
          es: "La piedra caliza era el material mas ampliamente disponible y comunmente usado para estatuas y monumentos egipcios.",
          de: "Kalkstein war das am weitesten verbreitete und am haeufigsten verwendete Material fuer aegyptische Statuen und Denkmäler.",
          nl: "Kalksteen was het meest beschikbare en gebruikte materiaal voor Egyptische beelden en monumenten."
        }
      },
      {
        question: {
          en: "What color was used to represent life and rebirth in Egyptian art?",
          es: "Que color se usaba para representar la vida y el renacimiento en el arte egipcio?",
          de: "Welche Farbe wurde verwendet, um Leben und Wiedergeburt in der aegyptischen Kunst darzustellen?",
          nl: "Welke kleur werd gebruikt om leven en wedergeboorte in Egyptische kunst te vertegenwoordigen?"
        },
        options: [
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Green", es: "Verde", de: "Gruen", nl: "Groen" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" }
        ],
        correct: 1,
        explanation: {
          en: "Green symbolized life, rebirth, and vegetation in Egyptian art, associated with the annual Nile flooding.",
          es: "El verde simbolizaba la vida, el renacimiento y la vegetacion en el arte egipcio, asociado con la inundacion anual del Nilo.",
          de: "Gruen symbolisierte Leben, Wiedergeburt und Vegetation in der aegyptischen Kunst, verbunden mit der jaehrlichen Nilflut.",
          nl: "Groen symboliseerde leven, wedergeboorte en vegetatie in Egyptische kunst, geassocieerd met de jaarlijkse Nijl-overstroming."
        }
      },
      {
        question: {
          en: "How were important people typically depicted in Egyptian art?",
          es: "Como se representaban tipicamente las personas importantes en el arte egipcio?",
          de: "Wie wurden wichtige Personen typischerweise in der aegyptischen Kunst dargestellt?",
          nl: "Hoe werden belangrijke mensen doorgaans afgebeeld in Egyptische kunst?"
        },
        options: [
          { en: "Smaller than others", es: "Mas pequenos que otros", de: "Kleiner als andere", nl: "Kleiner dan anderen" },
          { en: "Larger than others", es: "Mas grandes que otros", de: "Groesser als andere", nl: "Groter dan anderen" },
          { en: "Same size as others", es: "Del mismo tamano que otros", de: "Gleiche Groesse wie andere", nl: "Zelfde grootte als anderen" },
          { en: "In the background", es: "En el fondo", de: "Im Hintergrund", nl: "Op de achtergrond" }
        ],
        correct: 1,
        explanation: {
          en: "Important people like pharaohs were shown larger than others to indicate their status and power.",
          es: "Las personas importantes como los faraones se mostraban mas grandes que otros para indicar su estatus y poder.",
          de: "Wichtige Personen wie Pharaonen wurden groesser als andere dargestellt, um ihren Status und ihre Macht anzuzeigen.",
          nl: "Belangrijke mensen zoals farao's werden groter afgebeeld dan anderen om hun status en macht aan te geven."
        }
      },
      {
        question: {
          en: "What writing system is often seen in Egyptian tomb paintings?",
          es: "Que sistema de escritura se ve a menudo en las pinturas de tumbas egipcias?",
          de: "Welches Schriftsystem ist oft in aegyptischen Grabmalereien zu sehen?",
          nl: "Welk schriftsysteem wordt vaak gezien in Egyptische grafmuurschilderingen?"
        },
        options: [
          { en: "Cuneiform", es: "Cuneiforme", de: "Keilschrift", nl: "Spijkerschrift" },
          { en: "Hieroglyphs", es: "Jeroglificos", de: "Hieroglyphen", nl: "Hierogliefen" },
          { en: "Sanskrit", es: "Sanscrito", de: "Sanskrit", nl: "Sanskriet" },
          { en: "Phoenician", es: "Fenicio", de: "Phoenizisch", nl: "Foenicisch" }
        ],
        correct: 1,
        explanation: {
          en: "Hieroglyphs were the formal writing system used in Egyptian art, especially in tombs and temples.",
          es: "Los jeroglificos eran el sistema de escritura formal usado en el arte egipcio, especialmente en tumbas y templos.",
          de: "Hieroglyphen waren das formelle Schriftsystem, das in der aegyptischen Kunst verwendet wurde, besonders in Graebern und Tempeln.",
          nl: "Hierogliefen waren het formele schrijfsysteem dat in Egyptische kunst werd gebruikt, vooral in graven en tempels."
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
          { en: "Decoration only", es: "Solo decoracion", de: "Nur Dekoration", nl: "Alleen decoratie" },
          { en: "To help the deceased in the afterlife", es: "Para ayudar al difunto en la otra vida", de: "Um dem Verstorbenen im Jenseits zu helfen", nl: "Om de overledene te helpen in het hiernamaals" },
          { en: "To show wealth", es: "Para mostrar riqueza", de: "Um Reichtum zu zeigen", nl: "Om rijkdom te tonen" },
          { en: "To scare tomb robbers", es: "Para asustar a los ladrones de tumbas", de: "Um Grabräuber abzuschrecken", nl: "Om grafrovers af te schrikken" }
        ],
        correct: 1,
        explanation: {
          en: "Egyptian tomb art was created to provide the deceased with everything they would need in the afterlife.",
          es: "El arte de las tumbas egipcias se creaba para proporcionar al difunto todo lo que necesitaria en la otra vida.",
          de: "Aegyptische Grabkunst wurde geschaffen, um dem Verstorbenen alles zu bieten, was er im Jenseits brauchen wuerde.",
          nl: "Egyptische grafkunst werd gemaakt om de overledene alles te bieden wat hij nodig zou hebben in het hiernamaals."
        }
      },
      {
        question: {
          en: "What was painted on Egyptian coffins?",
          es: "Que se pintaba en los ataudes egipcios?",
          de: "Was wurde auf aegyptischen Saergen gemalt?",
          nl: "Wat werd geschilderd op Egyptische doodskisten?"
        },
        options: [
          { en: "Family portraits", es: "Retratos familiares", de: "Familienportraets", nl: "Familieportretten" },
          { en: "Gods and protective spells", es: "Dioses y hechizos protectores", de: "Goetter und Schutzsprueche", nl: "Goden en beschermende spreuken" },
          { en: "Battle scenes", es: "Escenas de batalla", de: "Kampfszenen", nl: "Gevechtscenes" },
          { en: "Landscape paintings", es: "Pinturas de paisajes", de: "Landschaftsmalereien", nl: "Landschapsschilderijen" }
        ],
        correct: 1,
        explanation: {
          en: "Egyptian coffins were decorated with images of gods and protective spells to help guide and protect the deceased.",
          es: "Los ataudes egipcios se decoraban con imagenes de dioses y hechizos protectores para ayudar a guiar y proteger al difunto.",
          de: "Aegyptische Saerge wurden mit Bildern von Goettern und Schutzspruechen dekoriert, um den Verstorbenen zu fuehren und zu schuetzen.",
          nl: "Egyptische doodskisten werden versierd met afbeeldingen van goden en beschermende spreuken om de overledene te leiden en beschermen."
        }
      },
      {
        question: {
          en: "What type of Egyptian art was created on papyrus scrolls?",
          es: "Que tipo de arte egipcio se creaba en rollos de papiro?",
          de: "Welche Art von aegyptischer Kunst wurde auf Papyrusrollen erstellt?",
          nl: "Welk type Egyptische kunst werd gemaakt op papyrusrollen?"
        },
        options: [
          { en: "Sculptures", es: "Esculturas", de: "Skulpturen", nl: "Beeldhouwwerken" },
          { en: "Paintings and texts", es: "Pinturas y textos", de: "Gemaelde und Texte", nl: "Schilderijen en teksten" },
          { en: "Jewelry designs", es: "Disenos de joyas", de: "Schmuckdesigns", nl: "Sieradenontwerpen" },
          { en: "Pottery patterns", es: "Patrones de ceramica", de: "Tonwarenmuster", nl: "Aardewerkpatronen" }
        ],
        correct: 1,
        explanation: {
          en: "Papyrus scrolls contained paintings and texts, including the famous Book of the Dead with illustrated spells.",
          es: "Los rollos de papiro contenian pinturas y textos, incluido el famoso Libro de los Muertos con hechizos ilustrados.",
          de: "Papyrusrollen enthielten Gemaelde und Texte, einschliesslich des beruehmten Totenbuchs mit illustrierten Spruechen.",
          nl: "Papyrusrollen bevatten schilderijen en teksten, inclusief het beroemde Dodenboek met geïllustreerde spreuken."
        }
      },
      {
        question: {
          en: "What perspective style was used in Egyptian paintings?",
          es: "Que estilo de perspectiva se usaba en las pinturas egipcias?",
          de: "Welcher Perspektivstil wurde in aegyptischen Gemaelden verwendet?",
          nl: "Welke perspectiefstijl werd gebruikt in Egyptische schilderijen?"
        },
        options: [
          { en: "Three-dimensional", es: "Tridimensional", de: "Dreidimensional", nl: "Driedimensionaal" },
          { en: "Flat/two-dimensional", es: "Plano/bidimensional", de: "Flach/zweidimensional", nl: "Plat/tweedimensionaal" },
          { en: "Abstract", es: "Abstracto", de: "Abstrakt", nl: "Abstract" },
          { en: "Impressionist", es: "Impresionista", de: "Impressionistisch", nl: "Impressionistisch" }
        ],
        correct: 1,
        explanation: {
          en: "Egyptian art used a flat, two-dimensional style with figures shown from multiple viewpoints simultaneously.",
          es: "El arte egipcio usaba un estilo plano y bidimensional con figuras mostradas desde multiples puntos de vista simultaneamente.",
          de: "Aegyptische Kunst verwendete einen flachen, zweidimensionalen Stil mit Figuren, die gleichzeitig aus mehreren Blickwinkeln gezeigt wurden.",
          nl: "Egyptische kunst gebruikte een platte, tweedimensionale stijl met figuren die simultaan vanuit meerdere gezichtspunten werden getoond."
        }
      },
      {
        question: {
          en: "What animal was frequently depicted in Egyptian art as a symbol of protection?",
          es: "Que animal se representaba frecuentemente en el arte egipcio como simbolo de proteccion?",
          de: "Welches Tier wurde haeufig in der aegyptischen Kunst als Symbol des Schutzes dargestellt?",
          nl: "Welk dier werd vaak afgebeeld in Egyptische kunst als symbool van bescherming?"
        },
        options: [
          { en: "Lion", es: "Leon", de: "Loewe", nl: "Leeuw" },
          { en: "Snake", es: "Serpiente", de: "Schlange", nl: "Slang" },
          { en: "Falcon", es: "Halcon", de: "Falke", nl: "Valk" },
          { en: "Cat", es: "Gato", de: "Katze", nl: "Kat" }
        ],
        correct: 0,
        explanation: {
          en: "Lions were frequently depicted as symbols of royal protection and strength in Egyptian art.",
          es: "Los leones se representaban frecuentemente como simbolos de proteccion real y fuerza en el arte egipcio.",
          de: "Loewen wurden haeufig als Symbole koeniglichen Schutzes und Staerke in der aegyptischen Kunst dargestellt.",
          nl: "Leeuwen werden vaak afgebeeld als symbolen van koninklijke bescherming en kracht in Egyptische kunst."
        }
      },
      {
        question: {
          en: "What was the Eye of Horus used for in Egyptian art?",
          es: "Para que se usaba el Ojo de Horus en el arte egipcio?",
          de: "Wofuer wurde das Auge des Horus in der aegyptischen Kunst verwendet?",
          nl: "Waarvoor werd het Oog van Horus gebruikt in Egyptische kunst?"
        },
        options: [
          { en: "Decoration", es: "Decoracion", de: "Dekoration", nl: "Decoratie" },
          { en: "Protection and healing", es: "Proteccion y curacion", de: "Schutz und Heilung", nl: "Bescherming en genezing" },
          { en: "Telling time", es: "Marcar el tiempo", de: "Zeitangabe", nl: "Tijdmeting" },
          { en: "Navigation", es: "Navegacion", de: "Navigation", nl: "Navigatie" }
        ],
        correct: 1,
        explanation: {
          en: "The Eye of Horus was a powerful protective symbol representing healing, wholeness, and protection.",
          es: "El Ojo de Horus era un poderoso simbolo protector que representaba curacion, totalidad y proteccion.",
          de: "Das Auge des Horus war ein maechtige Schutzsymbol, das Heilung, Ganzheit und Schutz darstellte.",
          nl: "Het Oog van Horus was een krachtig beschermingssymbool dat genezing, heelheid en bescherming vertegenwoordigde."
        }
      },
      {
        question: {
          en: "What type of crown appears in many Egyptian artworks?",
          es: "Que tipo de corona aparece en muchas obras de arte egipcias?",
          de: "Welche Art von Krone erscheint in vielen aegyptischen Kunstwerken?",
          nl: "Welk type kroon verschijnt in veel Egyptische kunstwerken?"
        },
        options: [
          { en: "Golden laurel wreath", es: "Corona de laurel dorada", de: "Goldener Lorbeerkranz", nl: "Gouden laurierkrans" },
          { en: "Double crown (red and white)", es: "Corona doble (roja y blanca)", de: "Doppelkrone (rot und weiss)", nl: "Dubbele kroon (rood en wit)" },
          { en: "Diamond tiara", es: "Tiara de diamantes", de: "Diamant-Tiara", nl: "Diamanten tiara" },
          { en: "Iron helmet", es: "Casco de hierro", de: "Eisenhelm", nl: "IJzeren helm" }
        ],
        correct: 1,
        explanation: {
          en: "The double crown combined the red crown of Lower Egypt and white crown of Upper Egypt, symbolizing unified rule.",
          es: "La corona doble combinaba la corona roja del Bajo Egipto y la corona blanca del Alto Egipto, simbolizando el gobierno unificado.",
          de: "Die Doppelkrone kombinierte die rote Krone von Untergypten und die weisse Krone von Oberaegypten und symbolisierte die vereinte Herrschaft.",
          nl: "De dubbele kroon combineerde de rode kroon van Neder-Egypte en de witte kroon van Opper-Egypte, wat verenigde heerschappij symboliseerde."
        }
      },
      {
        question: {
          en: "What plant was commonly shown in Egyptian art as a symbol of Upper Egypt?",
          es: "Que planta se mostraba comunmente en el arte egipcio como simbolo del Alto Egipto?",
          de: "Welche Pflanze wurde haeufig in der aegyptischen Kunst als Symbol fuer Oberaegypten gezeigt?",
          nl: "Welke plant werd vaak getoond in Egyptische kunst als symbool van Opper-Egypte?"
        },
        options: [
          { en: "Papyrus", es: "Papiro", de: "Papyrus", nl: "Papyrus" },
          { en: "Lotus", es: "Loto", de: "Lotus", nl: "Lotus" },
          { en: "Palm tree", es: "Palmera", de: "Palme", nl: "Palmboom" },
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" }
        ],
        correct: 1,
        explanation: {
          en: "The lotus flower symbolized Upper Egypt, while papyrus represented Lower Egypt in Egyptian art.",
          es: "La flor de loto simbolizaba el Alto Egipto, mientras que el papiro representaba el Bajo Egipto en el arte egipcio.",
          de: "Die Lotusblume symbolisierte Oberaegypten, waehrend Papyrus Unteraegypten in der aegyptischen Kunst darstellte.",
          nl: "De lotusbloem symboliseerde Opper-Egypte, terwijl papyrus Neder-Egypte vertegenwoordigde in Egyptische kunst."
        }
      },
      {
        question: {
          en: "What material was used to create colorful Egyptian jewelry?",
          es: "Que material se usaba para crear joyas egipcias coloridas?",
          de: "Welches Material wurde verwendet, um farbenfrohen aegyptischen Schmuck zu schaffen?",
          nl: "Welk materiaal werd gebruikt om kleurrijke Egyptische sieraden te maken?"
        },
        options: [
          { en: "Faience (glazed ceramic)", es: "Loza (ceramica vidriada)", de: "Fayence (glasierte Keramik)", nl: "Faience (geglazuurd keramiek)" },
          { en: "Plastic", es: "Plastico", de: "Plastik", nl: "Plastic" },
          { en: "Rubber", es: "Caucho", de: "Gummi", nl: "Rubber" },
          { en: "Glass fiber", es: "Fibra de vidrio", de: "Glasfaser", nl: "Glasvezel" }
        ],
        correct: 0,
        explanation: {
          en: "Faience, a glazed ceramic material, was widely used to create colorful jewelry and decorative objects in ancient Egypt.",
          es: "La loza, un material ceramico vidriado, se usaba ampliamente para crear joyas coloridas y objetos decorativos en el antiguo Egipto.",
          de: "Fayence, ein glasiertes keramisches Material, wurde im alten Aegypten weit verbreitet verwendet, um farbenfrohen Schmuck und dekorative Objekte zu schaffen.",
          nl: "Faience, een geglazuurd keramisch materiaal, werd veel gebruikt om kleurrijke sieraden en decoratieve objecten te maken in het oude Egypte."
        }
      },
      {
        question: {
          en: "What was the typical skin color used for men in Egyptian paintings?",
          es: "Cual era el color de piel tipico usado para los hombres en las pinturas egipcias?",
          de: "Welche Hautfarbe wurde typischerweise fuer Maenner in aegyptischen Gemaelden verwendet?",
          nl: "Wat was de typische huidskleur voor mannen in Egyptische schilderijen?"
        },
        options: [
          { en: "White", es: "Blanco", de: "Weiss", nl: "Wit" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" },
          { en: "Red-brown", es: "Rojo-marron", de: "Rotbraun", nl: "Roodbruin" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" }
        ],
        correct: 2,
        explanation: {
          en: "Men were typically painted with red-brown skin, while women were shown with lighter, yellowish skin tones.",
          es: "Los hombres se pintaban tipicamente con piel marron-rojiza, mientras que las mujeres se mostraban con tonos de piel mas claros y amarillentos.",
          de: "Maenner wurden typischerweise mit rotbrauner Haut gemalt, waehrend Frauen mit helleren, gelblichen Hauttoenen dargestellt wurden.",
          nl: "Mannen werden typisch geschilderd met roodbruine huid, terwijl vrouwen werden getoond met lichtere, gelige huidskleuren."
        }
      },
      {
        question: {
          en: "What was the purpose of ushabti figures in Egyptian tombs?",
          es: "Cual era el proposito de las figuras ushabti en las tumbas egipcias?",
          de: "Was war der Zweck von Uschebti-Figuren in aegyptischen Graebern?",
          nl: "Wat was het doel van ushabti-figuren in Egyptische graven?"
        },
        options: [
          { en: "Decoration", es: "Decoracion", de: "Dekoration", nl: "Decoratie" },
          { en: "To serve as workers in the afterlife", es: "Para servir como trabajadores en la otra vida", de: "Um als Arbeiter im Jenseits zu dienen", nl: "Om als arbeiders in het hiernamaals te dienen" },
          { en: "To scare away evil spirits", es: "Para ahuyentar espiritus malignos", de: "Um boese Geister abzuschrecken", nl: "Om kwade geesten weg te jagen" },
          { en: "To tell time", es: "Para marcar el tiempo", de: "Um die Zeit anzuzeigen", nl: "Om de tijd aan te geven" }
        ],
        correct: 1,
        explanation: {
          en: "Ushabti figures were servant statues placed in tombs to perform labor for the deceased in the afterlife.",
          es: "Las figuras ushabti eran estatuas de sirvientes colocadas en las tumbas para realizar trabajos para el difunto en la otra vida.",
          de: "Uschebti-Figuren waren Dienerfiguren, die in Graebern platziert wurden, um Arbeit fuer den Verstorbenen im Jenseits zu verrichten.",
          nl: "Ushabti-figuren waren beelden van dienaars die in graven werden geplaatst om arbeid te verrichten voor de overledene in het hiernamaals."
        }
      },
      {
        question: {
          en: "What poses were most Egyptian figures shown in?",
          es: "En que poses se mostraban la mayoria de las figuras egipcias?",
          de: "In welchen Posen wurden die meisten aegyptischen Figuren gezeigt?",
          nl: "In welke poses werden de meeste Egyptische figuren getoond?"
        },
        options: [
          { en: "Sitting cross-legged", es: "Sentados con las piernas cruzadas", de: "Sitzend mit gekreuzten Beinen", nl: "Zittend met gekruiste benen" },
          { en: "Standing with both feet together", es: "De pie con ambos pies juntos", de: "Stehend mit beiden Fuessen zusammen", nl: "Staand met beide voeten samen" },
          { en: "Walking with one foot forward", es: "Caminando con un pie hacia adelante", de: "Gehend mit einem Fuss nach vorne", nl: "Lopend met een voet naar voren" },
          { en: "Jumping in the air", es: "Saltando en el aire", de: "In der Luft springend", nl: "Springend in de lucht" }
        ],
        correct: 2,
        explanation: {
          en: "Egyptian figures were typically shown in a walking pose with one foot forward, a standard convention in their art.",
          es: "Las figuras egipcias se mostraban tipicamente en una pose de caminata con un pie hacia adelante, una convencion estandar en su arte.",
          de: "Aegyptische Figuren wurden typischerweise in einer Gehpose mit einem Fuss nach vorne gezeigt, eine Standardkonvention in ihrer Kunst.",
          nl: "Egyptische figuren werden typisch getoond in een lopende pose met een voet naar voren, een standaard conventie in hun kunst."
        }
      },
      {
        question: {
          en: "What symbol represented eternal life in Egyptian art?",
          es: "Que simbolo representaba la vida eterna en el arte egipcio?",
          de: "Welches Symbol stellte ewiges Leben in der aegyptischen Kunst dar?",
          nl: "Welk symbool vertegenwoordigde eeuwig leven in Egyptische kunst?"
        },
        options: [
          { en: "Cross", es: "Cruz", de: "Kreuz", nl: "Kruis" },
          { en: "Ankh", es: "Anj", de: "Ankh", nl: "Ankh" },
          { en: "Star", es: "Estrella", de: "Stern", nl: "Ster" },
          { en: "Circle", es: "Circulo", de: "Kreis", nl: "Cirkel" }
        ],
        correct: 1,
        explanation: {
          en: "The ankh symbol, resembling a cross with a loop at the top, represented eternal life and was frequently shown in Egyptian art.",
          es: "El simbolo anj, que se asemeja a una cruz con un bucle en la parte superior, representaba la vida eterna y se mostraba frecuentemente en el arte egipcio.",
          de: "Das Ankh-Symbol, das einem Kreuz mit einer Schlaufe oben aehnelt, stellte ewiges Leben dar und wurde haeufig in der aegyptischen Kunst gezeigt.",
          nl: "Het ankh-symbool, dat lijkt op een kruis met een lus aan de bovenkant, vertegenwoordigde eeuwig leven en werd vaak getoond in Egyptische kunst."
        }
      },
      {
        question: {
          en: "What material was used for the blue pigment in Egyptian art?",
          es: "Que material se usaba para el pigmento azul en el arte egipcio?",
          de: "Welches Material wurde fuer das blaue Pigment in der aegyptischen Kunst verwendet?",
          nl: "Welk materiaal werd gebruikt voor het blauwe pigment in Egyptische kunst?"
        },
        options: [
          { en: "Indigo plant", es: "Planta indigo", de: "Indigopflanze", nl: "Indigoplant" },
          { en: "Lapis lazuli", es: "Lapislazuli", de: "Lapislazuli", nl: "Lapis lazuli" },
          { en: "Blueberries", es: "Arandanos", de: "Blaubeeren", nl: "Bosbessen" },
          { en: "Ocean water", es: "Agua de mar", de: "Meerwasser", nl: "Oceaanwater" }
        ],
        correct: 1,
        explanation: {
          en: "Lapis lazuli, a semi-precious blue stone imported from Afghanistan, was ground to create the prized blue pigment.",
          es: "El lapislazuli, una piedra azul semipreciosa importada de Afganistan, se molia para crear el preciado pigmento azul.",
          de: "Lapislazuli, ein halbedelstein blauer Stein aus Afghanistan, wurde gemahlen, um das geschaetzte blaue Pigment zu erzeugen.",
          nl: "Lapis lazuli, een halfedelstenen blauwe steen geïmporteerd uit Afghanistan, werd gemalen om het gewaardeerde blauwe pigment te maken."
        }
      },
      {
        question: {
          en: "What was the Egyptian grid system used for?",
          es: "Para que se usaba el sistema de cuadricula egipcio?",
          de: "Wofuer wurde das aegyptische Rastersystem verwendet?",
          nl: "Waarvoor werd het Egyptische rastersysteem gebruikt?"
        },
        options: [
          { en: "Playing games", es: "Jugar juegos", de: "Spiele spielen", nl: "Spellen spelen" },
          { en: "Creating proportional figures", es: "Crear figuras proporcionales", de: "Proportionale Figuren erstellen", nl: "Proportionele figuren maken" },
          { en: "Measuring land", es: "Medir tierra", de: "Land vermessen", nl: "Land meten" },
          { en: "Writing letters", es: "Escribir cartas", de: "Briefe schreiben", nl: "Brieven schrijven" }
        ],
        correct: 1,
        explanation: {
          en: "The grid system helped Egyptian artists maintain proper proportions when drawing the human figure according to strict conventions.",
          es: "El sistema de cuadricula ayudaba a los artistas egipcios a mantener proporciones adecuadas al dibujar la figura humana segun convenciones estrictas.",
          de: "Das Rastersystem half aegyptischen Kuenstlern, die richtigen Proportionen beim Zeichnen der menschlichen Figur nach strengen Konventionen beizubehalten.",
          nl: "Het rastersysteem help Egyptische kunstenaars om juiste verhoudingen te behouden bij het tekenen van de menselijke figuur volgens strikte conventies."
        }
      },
      {
        question: {
          en: "What scenes were commonly painted on Egyptian tomb walls?",
          es: "Que escenas se pintaban comunmente en las paredes de las tumbas egipcias?",
          de: "Welche Szenen wurden haeufig auf aegyptischen Grabwaenden gemalt?",
          nl: "Welke scenes werden vaak geschilderd op Egyptische grafmuren?"
        },
        options: [
          { en: "War battles", es: "Batallas de guerra", de: "Kriegsschlachten", nl: "Oorlogsgevechten" },
          { en: "Daily life activities", es: "Actividades de la vida diaria", de: "Tägliche Lebensaktivitäten", nl: "Dagelijkse levensactiviteiten" },
          { en: "Foreign lands", es: "Tierras extranjeras", de: "Fremde Laender", nl: "Vreemde landen" },
          { en: "Abstract patterns", es: "Patrones abstractos", de: "Abstrakte Muster", nl: "Abstracte patronen" }
        ],
        correct: 1,
        explanation: {
          en: "Tomb walls showed daily life activities like farming, hunting, and feasting to provide these experiences in the afterlife.",
          es: "Las paredes de las tumbas mostraban actividades de la vida diaria como agricultura, caza y festines para proporcionar estas experiencias en la otra vida.",
          de: "Grabwaende zeigten taegliche Lebensaktivitaeten wie Landwirtschaft, Jagd und Feiern, um diese Erfahrungen im Jenseits bereitzustellen.",
          nl: "Grafmuren toonden dagelijkse levensactiviteiten zoals landbouw, jacht en feesten om deze ervaringen in het hiernamaals te bieden."
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
