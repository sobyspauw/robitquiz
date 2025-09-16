// Arts & Culture - Level 1: Art Tools & Materials
(function() {
  const level1 = {
    name: {
      en: "Art Tools & Materials",
      es: "Herramientas y Materiales de Arte",
      de: "Kunstwerkzeuge & Materialien",
      nl: "Kunstgereedschap & Materialen"
    },
    questions: [
      {
        question: {
          en: "What do you use to paint pictures?",
          es: "¿Qué usas para pintar cuadros?",
          de: "Womit malst du Bilder?",
          nl: "Waarmee schilder je plaatjes?"
        },
        options: [
          { en: "Paintbrush", es: "Pincel", de: "Pinsel", nl: "Kwast" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" },
          { en: "Hammer", es: "Martillo", de: "Hammer", nl: "Hamer" },
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" }
        ],
        correct: 0,
        explanation: {
          en: "A paintbrush is the essential tool for applying paint to surfaces. Artists use different brush sizes and shapes for various techniques - flat brushes for broad strokes, round brushes for details, and fan brushes for textures.",
          es: "Un pincel es la herramienta esencial para aplicar pintura a superficies. Los artistas usan diferentes tamaños y formas de pinceles para varias técnicas: pinceles planos para trazos amplios, redondos para detalles y en abanico para texturas.",
          de: "Ein Pinsel ist das wichtigste Werkzeug zum Auftragen von Farbe auf Oberflächen. Künstler verwenden verschiedene Pinselgrößen und -formen für verschiedene Techniken - flache Pinsel für breite Striche, runde für Details und Fächerpinsel für Texturen.",
          nl: "Een kwast is het essentiële gereedschap voor het aanbrengen van verf op oppervlakken. Kunstenaars gebruiken verschillende kwastmaten en -vormen voor verschillende technieken - platte kwasten voor brede streken, ronde voor details en waaierborstels voor texturen."
        }
      },
      {
        question: {
          en: "What do artists use to draw lines?",
          es: "¿Qué usan los artistas para dibujar líneas?",
          de: "Was benutzen Künstler zum Linien zeichnen?",
          nl: "Wat gebruiken kunstenaars om lijnen te tekenen?"
        },
        options: [
          { en: "Pencil", es: "Lápiz", de: "Bleistift", nl: "Potlood" },
          { en: "Fork", es: "Tenedor", de: "Gabel", nl: "Vork" },
          { en: "Ruler", es: "Regla", de: "Lineal", nl: "Liniaal" },
          { en: "Eraser", es: "Goma", de: "Radiergummi", nl: "Gum" }
        ],
        correct: 0,
        explanation: {
          en: "A pencil is the fundamental drawing tool used by artists for sketching, outlining, and detailed work. Different pencil grades (H for hard, B for soft) create varying line weights and tones.",
          es: "Un lápiz es la herramienta fundamental de dibujo usada por artistas para bocetos, contornos y trabajo detallado. Diferentes grados de lápiz (H para duro, B para suave) crean varios pesos de línea y tonos.",
          de: "Ein Bleistift ist das grundlegende Zeichenwerkzeug, das von Künstlern für Skizzen, Umrisse und Detailarbeit verwendet wird. Verschiedene Bleistiftgrade (H für hart, B für weich) erzeugen unterschiedliche Linienstärken und Töne.",
          nl: "Een potlood is het fundamentele tekengereedschap dat door kunstenaars wordt gebruikt voor schetsen, omlijning en gedetailleerd werk. Verschillende potloodgraden (H voor hard, B voor zacht) creëren verschillende lijngewichten en tonen."
        }
      },
      {
        question: {
          en: "What surface do artists usually paint on?",
          es: "¿En qué superficie suelen pintar los artistas?",
          de: "Auf welche Oberfläche malen Künstler normalerweise?",
          nl: "Op welk oppervlak schilderen kunstenaars meestal?"
        },
        options: [
          { en: "Canvas", es: "Lienzo", de: "Leinwand", nl: "Canvas" },
          { en: "Floor", es: "Suelo", de: "Boden", nl: "Vloer" },
          { en: "Window", es: "Ventana", de: "Fenster", nl: "Raam" },
          { en: "Table", es: "Mesa", de: "Tisch", nl: "Tafel" }
        ],
        correct: 0,
        explanation: {
          en: "Canvas is the traditional painting surface made from cotton or linen fabric stretched over a wooden frame. It provides the perfect texture for oil and acrylic paints to adhere properly.",
          es: "El lienzo es la superficie tradicional de pintura hecha de algodón o lino estirado sobre un marco de madera. Proporciona la textura perfecta para que las pinturas al óleo y acrílicas se adhieran correctamente.",
          de: "Leinwand ist die traditionelle Maloberfläche aus Baumwoll- oder Leinenstoff, der über einen Holzrahmen gespannt ist. Sie bietet die perfekte Textur für Öl- und Acrylfarben, um richtig zu haften.",
          nl: "Canvas is het traditionele schilderoppervlak gemaakt van katoen of linnen stof gespannen over een houten frame. Het biedt de perfecte textuur voor olie- en acrylverven om goed te hechten."
        }
      },
      {
        question: {
          en: "What holds the canvas up while painting?",
          es: "¿Qué sostiene el lienzo mientras pintas?",
          de: "Was hält die Leinwand beim Malen hoch?",
          nl: "Wat houdt het canvas omhoog tijdens het schilderen?"
        },
        options: [
          { en: "Easel", es: "Caballete", de: "Staffelei", nl: "Schildersezel" },
          { en: "Chair", es: "Silla", de: "Stuhl", nl: "Stoel" },
          { en: "Wall", es: "Pared", de: "Wand", nl: "Muur" },
          { en: "Shelf", es: "Estante", de: "Regal", nl: "Plank" }
        ],
        correct: 0,
        explanation: {
          en: "An easel is an adjustable stand that holds a canvas or drawing board at the perfect angle for painting. It allows artists to work upright and step back to view their work from different distances.",
          es: "Un caballete es un soporte ajustable que sostiene un lienzo o tablero de dibujo en el ángulo perfecto para pintar. Permite a los artistas trabajar de pie y retroceder para ver su trabajo desde diferentes distancias.",
          de: "Eine Staffelei ist ein verstellbarer Ständer, der eine Leinwand oder ein Zeichenbrett im perfekten Winkel zum Malen hält. Sie ermöglicht es Künstlern, aufrecht zu arbeiten und zurückzutreten, um ihr Werk aus verschiedenen Entfernungen zu betrachten.",
          nl: "Een schildersezel is een verstelbare standaard die een canvas of tekenplank in de perfecte hoek houdt voor het schilderen. Het stelt kunstenaars in staat rechtop te werken en achteruit te stappen om hun werk vanaf verschillende afstanden te bekijken."
        }
      },
      {
        question: {
          en: "What do you mix different colors on?",
          es: "¿En qué mezclas diferentes colores?",
          de: "Worauf mischst du verschiedene Farben?",
          nl: "Waarop meng je verschillende kleuren?"
        },
        options: [
          { en: "Palette", es: "Paleta", de: "Palette", nl: "Palet" },
          { en: "Plate", es: "Plato", de: "Teller", nl: "Bord" },
          { en: "Cup", es: "Taza", de: "Tasse", nl: "Kopje" },
          { en: "Bowl", es: "Cuenco", de: "Schüssel", nl: "Kom" }
        ],
        correct: 0,
        explanation: {
          en: "A palette is a flat surface where artists mix colors and hold paint while working. Traditional wooden palettes are still popular, while disposable paper palettes offer convenience for quick cleanup.",
          es: "Una paleta es una superficie plana donde los artistas mezclan colores y sostienen pintura mientras trabajan. Las paletas tradicionales de madera siguen siendo populares, mientras que las paletas de papel desechables ofrecen conveniencia para limpieza rápida.",
          de: "Eine Palette ist eine flache Oberfläche, auf der Künstler Farben mischen und Farbe halten, während sie arbeiten. Traditionelle Holzpaletten sind immer noch beliebt, während Einweg-Papierpaletten Bequemlichkeit für schnelle Reinigung bieten.",
          nl: "Een palet is een plat oppervlak waar kunstenaars kleuren mengen en verf vasthouden tijdens het werken. Traditionele houten paletten zijn nog steeds populair, terwijl wegwerp papieren paletten gemak bieden voor snelle opruiming."
        }
      },
      {
        question: {
          en: "What tool removes pencil marks?",
          es: "¿Qué herramienta quita las marcas de lápiz?",
          de: "Welches Werkzeug entfernt Bleistiftmarkierungen?",
          nl: "Welk gereedschap verwijdert potloodstrepen?"
        },
        options: [
          { en: "Eraser", es: "Goma de borrar", de: "Radiergummi", nl: "Gum" },
          { en: "Brush", es: "Pincel", de: "Pinsel", nl: "Kwast" },
          { en: "Crayon", es: "Crayón", de: "Wachsmalstift", nl: "Krijt" },
          { en: "Marker", es: "Marcador", de: "Marker", nl: "Stift" }
        ],
        correct: 0,
        explanation: {
          en: "An eraser removes pencil marks by lifting graphite particles from paper. Kneaded erasers can be shaped for precision work, while vinyl erasers are perfect for completely removing marks.",
          es: "Una goma de borrar quita las marcas de lápiz levantando partículas de grafito del papel. Las gomas amasables pueden moldearse para trabajo de precisión, mientras que las gomas de vinilo son perfectas para quitar completamente las marcas.",
          de: "Ein Radiergummi entfernt Bleistiftmarkierungen, indem er Graphitpartikel vom Papier abhebt. Knetbare Radiergummis können für Präzisionsarbeit geformt werden, während Vinylradiergummis perfekt sind, um Markierungen vollständig zu entfernen.",
          nl: "Een gum verwijdert potloodstrepen door grafietdeeltjes van papier op te tillen. Kneedgummen kunnen gevormd worden voor precisiewerk, terwijl vinylgummen perfect zijn voor het volledig verwijderen van strepen."
        }
      },
      {
        question: {
          en: "What colorful sticks do children use to draw?",
          es: "¿Qué palitos coloridos usan los niños para dibujar?",
          de: "Welche bunten Stifte benutzen Kinder zum Zeichnen?",
          nl: "Welke kleurrijke stokjes gebruiken kinderen om te tekenen?"
        },
        options: [
          { en: "Crayons", es: "Crayones", de: "Wachsmalstifte", nl: "Kleurkrijtjes" },
          { en: "Sticks", es: "Palos", de: "Stöcke", nl: "Stokjes" },
          { en: "Straws", es: "Pajitas", de: "Strohhalme", nl: "Rietjes" },
          { en: "Toothpicks", es: "Palillos", de: "Zahnstocher", nl: "Tandenstokers" }
        ],
        correct: 0,
        explanation: {
          en: "Crayons are wax-based coloring sticks that are perfect for children's art. They're easy to grip, safe to use, and create vibrant colors on paper without the mess of liquid paints.",
          es: "Los crayones son palitos de colorear a base de cera que son perfectos para el arte infantil. Son fáciles de agarrar, seguros de usar y crean colores vibrantes en papel sin el desorden de las pinturas líquidas.",
          de: "Wachsmalstifte sind wachsbasierte Farbstifte, die perfekt für Kinderkunst sind. Sie sind leicht zu greifen, sicher zu verwenden und erzeugen lebendige Farben auf Papier ohne das Durcheinander von flüssigen Farben.",
          nl: "Kleurkrijtjes zijn wasgebaseerde kleurstokjes die perfect zijn voor kinderkunst. Ze zijn gemakkelijk vast te pakken, veilig te gebruiken en creëren levendige kleuren op papier zonder de rommel van vloeibare verven."
        }
      },
      {
        question: {
          en: "What do you put paint in?",
          es: "¿En qué pones la pintura?",
          de: "Worin machst du Farbe?",
          nl: "Waar doe je verf in?"
        },
        options: [
          { en: "Paint pots", es: "Botes de pintura", de: "Farbtöpfe", nl: "Verfpotjes" },
          { en: "Shoes", es: "Zapatos", de: "Schuhe", nl: "Schoenen" },
          { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" },
          { en: "Pockets", es: "Bolsillos", de: "Taschen", nl: "Zakken" }
        ],
        correct: 0,
        explanation: {
          en: "Paint pots are small containers that hold different colors of paint. They keep paints fresh and prevent them from drying out while allowing easy access during artwork creation.",
          es: "Los botes de pintura son pequeños recipientes que contienen diferentes colores de pintura. Mantienen las pinturas frescas y evitan que se sequen mientras permiten fácil acceso durante la creación de obras de arte.",
          de: "Farbtöpfe sind kleine Behälter, die verschiedene Farben enthalten. Sie halten Farben frisch und verhindern das Austrocknen, während sie einfachen Zugang während der Kunstwerkerstellung ermöglichen.",
          nl: "Verfpotjes zijn kleine containers die verschillende kleuren verf bevatten. Ze houden verven vers en voorkomen dat ze uitdrogen terwijl ze gemakkelijke toegang mogelijk maken tijdens het maken van kunstwerken."
        }
      },
      {
        question: {
          en: "What do you use to cut paper for art?",
          es: "¿Qué usas para cortar papel para arte?",
          de: "Womit schneidest du Papier für Kunst?",
          nl: "Waarmee knip je papier voor kunst?"
        },
        options: [
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" },
          { en: "Brush", es: "Pincel", de: "Pinsel", nl: "Kwast" },
          { en: "Ruler", es: "Regla", de: "Lineal", nl: "Liniaal" }
        ],
        correct: 0,
        explanation: {
          en: "Scissors are essential for cutting paper, fabric, and other materials in art projects. Art scissors often have special blades for decorative cuts or precision work.",
          es: "Las tijeras son esenciales para cortar papel, tela y otros materiales en proyectos de arte. Las tijeras de arte a menudo tienen hojas especiales para cortes decorativos o trabajo de precisión.",
          de: "Scheren sind unverzichtbar zum Schneiden von Papier, Stoff und anderen Materialien in Kunstprojekten. Kunstscheren haben oft spezielle Klingen für dekorative Schnitte oder Präzisionsarbeit.",
          nl: "Scharen zijn essentieel voor het knippen van papier, stof en andere materialen in kunstprojecten. Kunstscharen hebben vaak speciale mesjes voor decoratieve knipsels of precisiewerk."
        }
      },
      {
        question: {
          en: "What makes things stick together in art?",
          es: "¿Qué hace que las cosas se peguen en el arte?",
          de: "Was lässt Dinge in der Kunst zusammenkleben?",
          nl: "Wat laat dingen aan elkaar plakken in kunst?"
        },
        options: [
          { en: "Glue", es: "Pegamento", de: "Kleber", nl: "Lijm" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" }
        ],
        correct: 0,
        explanation: {
          en: "Glue is the adhesive that bonds different materials together in art projects. From paper collages to mixed media art, glue sticks, liquid glue, or glue guns help create lasting connections.",
          es: "El pegamento es el adhesivo que une diferentes materiales en proyectos de arte. Desde collages de papel hasta arte de medios mixtos, las barras de pegamento, pegamento líquido o pistolas de pegamento ayudan a crear conexiones duraderas.",
          de: "Kleber ist der Klebstoff, der verschiedene Materialien in Kunstprojekten miteinander verbindet. Von Papiercollages bis hin zu Mixed-Media-Kunst helfen Klebestifte, flüssiger Kleber oder Heißklebepistolen dabei, dauerhafte Verbindungen zu schaffen.",
          nl: "Lijm is de kleefstof die verschillende materialen in kunstprojecten aan elkaar verbindt. Van papieren collages tot mixed media kunst, lijmsticks, vloeibare lijm of lijmpistolen helpen blijvende verbindingen te creëren."
        }
      },
      {
        question: {
          en: "What do you draw or write on?",
          es: "¿En qué dibujas o escribes?",
          de: "Worauf zeichnest oder schreibst du?",
          nl: "Waarop teken of schrijf je?"
        },
        options: [
          { en: "Paper", es: "Papel", de: "Papier", nl: "Papier" },
          { en: "Rock", es: "Roca", de: "Stein", nl: "Steen" },
          { en: "Tree", es: "Árbol", de: "Baum", nl: "Boom" },
          { en: "Grass", es: "Hierba", de: "Gras", nl: "Gras" }
        ],
        correct: 0,
        explanation: {
          en: "Paper is the most common drawing and writing surface. Different paper types serve different purposes - smooth paper for detailed work, textured paper for pastels, and watercolor paper for paint absorption.",
          es: "El papel es la superficie más común para dibujar y escribir. Diferentes tipos de papel sirven diferentes propósitos: papel liso para trabajo detallado, papel texturizado para pasteles, y papel de acuarela para absorción de pintura.",
          de: "Papier ist die häufigste Zeichen- und Schreiboberfläche. Verschiedene Papiertypen dienen verschiedenen Zwecken - glattes Papier für Detailarbeit, strukturiertes Papier für Pastelle und Aquarellpapier für Farbabsorption.",
          nl: "Papier is het meest gebruikelijke teken- en schrijfoppervlak. Verschillende papiertypes dienen verschillende doeleinden - glad papier voor gedetailleerd werk, getextureerd papier voor pastels, en aquarelpapier voor verfabsorptie."
        }
      },
      {
        question: {
          en: "What tool helps you draw straight lines?",
          es: "¿Qué herramienta te ayuda a dibujar líneas rectas?",
          de: "Welches Werkzeug hilft dir gerade Linien zu zeichnen?",
          nl: "Welk gereedschap helpt je rechte lijnen tekenen?"
        },
        options: [
          { en: "Ruler", es: "Regla", de: "Lineal", nl: "Liniaal" },
          { en: "Eraser", es: "Goma", de: "Radiergummi", nl: "Gum" },
          { en: "Paint", es: "Pintura", de: "Farbe", nl: "Verf" },
          { en: "Canvas", es: "Lienzo", de: "Leinwand", nl: "Canvas" }
        ],
        correct: 0,
        explanation: {
          en: "A ruler is a straight edge tool used to draw perfectly straight lines and measure distances. Artists use rulers for geometric designs, perspective drawing, and creating precise compositions.",
          es: "Una regla es una herramienta de borde recto usada para dibujar líneas perfectamente rectas y medir distancias. Los artistas usan reglas para diseños geométricos, dibujo en perspectiva y crear composiciones precisas.",
          de: "Ein Lineal ist ein geradkantiges Werkzeug, das verwendet wird, um perfekt gerade Linien zu zeichnen und Entfernungen zu messen. Künstler verwenden Lineale für geometrische Designs, Perspektivzeichnungen und präzise Kompositionen.",
          nl: "Een liniaal is een rechtrandgereedschap dat wordt gebruikt om perfect rechte lijnen te tekenen en afstanden te meten. Kunstenaars gebruiken linialen voor geometrische ontwerpen, perspectieftekening en het creëren van precieze composities."
        }
      },
      {
        question: {
          en: "What do you use to make perfect circles?",
          es: "¿Qué usas para hacer círculos perfectos?",
          de: "Womit machst du perfekte Kreise?",
          nl: "Waarmee maak je perfecte cirkels?"
        },
        options: [
          { en: "Compass", es: "Compás", de: "Zirkel", nl: "Passer" },
          { en: "Square", es: "Cuadrado", de: "Quadrat", nl: "Vierkant" },
          { en: "Triangle", es: "Triángulo", de: "Dreieck", nl: "Driehoek" },
          { en: "Rectangle", es: "Rectángulo", de: "Rechteck", nl: "Rechthoek" }
        ],
        correct: 0,
        explanation: {
          en: "A compass is a tool with two arms - one with a point and one with a pencil - used to draw perfect circles and arcs. It's essential for geometric art, mandala designs, and technical drawings.",
          es: "Un compás es una herramienta con dos brazos - uno con una punta y uno con un lápiz - usado para dibujar círculos y arcos perfectos. Es esencial para arte geométrico, diseños de mandala y dibujos técnicos.",
          de: "Ein Zirkel ist ein Werkzeug mit zwei Armen - einer mit einer Spitze und einer mit einem Bleistift - das verwendet wird, um perfekte Kreise und Bögen zu zeichnen. Es ist unentbehrlich für geometrische Kunst, Mandala-Designs und technische Zeichnungen.",
          nl: "Een passer is een gereedschap met twee armen - een met een punt en een met een potlood - gebruikt om perfecte cirkels en bogen te tekenen. Het is essentieel voor geometrische kunst, mandala-ontwerpen en technische tekeningen."
        }
      },
      {
        question: {
          en: "What do sculptors use to shape clay?",
          es: "¿Qué usan los escultores para dar forma a la arcilla?",
          de: "Was benutzen Bildhauer zum Formen von Ton?",
          nl: "Wat gebruiken beeldhouwers om klei te vormen?"
        },
        options: [
          { en: "Sculpting tools", es: "Herramientas de escultura", de: "Bildhauerwerkzeuge", nl: "Beeldhouwgereedschap" },
          { en: "Cooking spoons", es: "Cucharas de cocinar", de: "Kochlöffel", nl: "Kooklepels" },
          { en: "Garden tools", es: "Herramientas de jardín", de: "Gartenwerkzeuge", nl: "Tuingereedschap" },
          { en: "Cleaning brushes", es: "Cepillos de limpieza", de: "Putzbürsten", nl: "Schoonmaakborstels" }
        ],
        correct: 0,
        explanation: {
          en: "Sculpting tools are specialized instruments designed to shape, carve, and detail clay and other sculptural materials. They include loop tools, ribbon tools, and modeling tools for creating texture and form.",
          es: "Las herramientas de escultura son instrumentos especializados diseñados para dar forma, tallar y detallar arcilla y otros materiales escultóricos. Incluyen herramientas de bucle, herramientas de cinta y herramientas de modelado para crear textura y forma.",
          de: "Bildhauerwerkzeuge sind spezialisierte Instrumente, die zum Formen, Schnitzen und Detaillieren von Ton und anderen Bildhauermaterialien entwickelt wurden. Sie umfassen Schlaufenwerkzeuge, Bandwerkzeuge und Modellierwerkzeuge für die Erstellung von Textur und Form.",
          nl: "Beeldhouwgereedschap zijn gespecialiseerde instrumenten ontworpen om klei en andere beeldhouwmaterialen te vormen, te snijden en te detailleren. Ze omvatten lusgereedschap, lintgereedschap en modelleringsgereedschap voor het creëren van textuur en vorm."
        }
      },
      {
        question: {
          en: "What material do potters work with?",
          es: "¿Con qué material trabajan los alfareros?",
          de: "Mit welchem Material arbeiten Töpfer?",
          nl: "Met welk materiaal werken pottenbakkers?"
        },
        options: [
          { en: "Clay", es: "Arcilla", de: "Ton", nl: "Klei" },
          { en: "Metal", es: "Metal", de: "Metall", nl: "Metaal" },
          { en: "Glass", es: "Vidrio", de: "Glas", nl: "Glas" },
          { en: "Plastic", es: "Plástico", de: "Plastik", nl: "Plastic" }
        ],
        correct: 0,
        explanation: {
          en: "Clay is a natural earth material that becomes moldable when wet and hardens when dried or fired. Potters use clay to create functional pottery, decorative ceramics, and artistic sculptures.",
          es: "La arcilla es un material natural de la tierra que se vuelve moldeable cuando está húmeda y se endurece cuando se seca o se cuece. Los alfareros usan arcilla para crear cerámica funcional, cerámicas decorativas y esculturas artísticas.",
          de: "Ton ist ein natürliches Erdmaterial, das formbar wird, wenn es nass ist, und hart wird, wenn es getrocknet oder gebrannt wird. Töpfer verwenden Ton, um funktionale Töpferwaren, dekorative Keramik und künstlerische Skulpturen zu schaffen.",
          nl: "Klei is een natuurlijk aardemateriaal dat kneedbaar wordt als het nat is en hard wordt als het gedroogd of gebakken wordt. Pottenbakkers gebruiken klei om functioneel aardewerk, decoratieve keramiek en artistieke sculpturen te maken."
        }
      },
      {
        question: {
          en: "What do you use to color inside drawings?",
          es: "¿Qué usas para colorear dentro de los dibujos?",
          de: "Womit malst du Zeichnungen aus?",
          nl: "Waarmee kleur je tekeningen in?"
        },
        options: [
          { en: "Colored pencils", es: "Lápices de colores", de: "Buntstifte", nl: "Kleurpotloden" },
          { en: "Regular pencils", es: "Lápices normales", de: "Normale Bleistifte", nl: "Gewone potloden" },
          { en: "Erasers", es: "Gomas", de: "Radiergummis", nl: "Gummen" },
          { en: "Rulers", es: "Reglas", de: "Lineale", nl: "Linialen" }
        ],
        correct: 0,
        explanation: {
          en: "Colored pencils are pencils with pigmented cores that create vibrant colors when applied to paper. They're perfect for detailed coloring, blending techniques, and creating realistic artwork.",
          es: "Los lápices de colores son lápices con núcleos pigmentados que crean colores vibrantes cuando se aplican al papel. Son perfectos para colorear detallado, técnicas de mezcla y crear arte realista.",
          de: "Buntstifte sind Bleistifte mit pigmentierten Kernen, die lebendige Farben erzeugen, wenn sie auf Papier aufgetragen werden. Sie sind perfekt für detailliertes Ausmalen, Mischtechniken und die Erstellung realistischer Kunstwerke.",
          nl: "Kleurpotloden zijn potloden met gepigmenteerde kernen die levendige kleuren creëren wanneer ze op papier worden toegepast. Ze zijn perfect voor gedetailleerd inkleuren, mengtechnieken en het maken van realistische kunstwerken."
        }
      },
      {
        question: {
          en: "What liquid do you use to thin paint?",
          es: "¿Qué líquido usas para diluir la pintura?",
          de: "Welche Flüssigkeit benutzt du um Farbe zu verdünnen?",
          nl: "Welke vloeistof gebruik je om verf te verdunnen?"
        },
        options: [
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Juice", es: "Zumo", de: "Saft", nl: "Sap" },
          { en: "Oil", es: "Aceite", de: "Öl", nl: "Olie" }
        ],
        correct: 0,
        explanation: {
          en: "Water is used to thin watercolor paints and acrylic paints, making them more transparent and easier to blend. It's also essential for cleaning brushes and keeping paints workable.",
          es: "El agua se usa para diluir pinturas de acuarela y acrílicas, haciéndolas más transparentes y fáciles de mezclar. También es esencial para limpiar pinceles y mantener las pinturas trabajables.",
          de: "Wasser wird verwendet, um Aquarell- und Acrylfarben zu verdünnen, wodurch sie transparenter und leichter zu mischen werden. Es ist auch unerlässlich für die Reinigung von Pinseln und um Farben bearbeitbar zu halten.",
          nl: "Water wordt gebruikt om aquarel- en acrylverven te verdunnen, waardoor ze transparanter en gemakkelijker te mengen worden. Het is ook essentieel voor het schoonmaken van kwasten en het houden van verven werkbaar."
        }
      },
      {
        question: {
          en: "What do you use to make prints on paper?",
          es: "¿Qué usas para hacer impresiones en papel?",
          de: "Womit machst du Drucke auf Papier?",
          nl: "Waarmee maak je afdrukken op papier?"
        },
        options: [
          { en: "Stamps", es: "Sellos", de: "Stempel", nl: "Stempels" },
          { en: "Magnets", es: "Imanes", de: "Magnete", nl: "Magneten" },
          { en: "Coins", es: "Monedas", de: "Münzen", nl: "Munten" },
          { en: "Buttons", es: "Botones", de: "Knöpfe", nl: "Knopen" }
        ],
        correct: 0,
        explanation: {
          en: "Stamps are carved or molded designs that transfer patterns onto paper when pressed with ink or paint. They're used for printmaking, decorative borders, and repeated pattern creation.",
          es: "Los sellos son diseños tallados o moldeados que transfieren patrones al papel cuando se presionan con tinta o pintura. Se usan para grabado, bordes decorativos y creación de patrones repetidos.",
          de: "Stempel sind geschnitzte oder geformte Designs, die Muster auf Papier übertragen, wenn sie mit Tinte oder Farbe gedrückt werden. Sie werden für Druckgrafik, dekorative Rahmen und wiederholte Mustererstellung verwendet.",
          nl: "Stempels zijn gesneden of gevormde ontwerpen die patronen op papier overbrengen wanneer ze met inkt of verf worden gedrukt. Ze worden gebruikt voor grafiek, decoratieve randen en het maken van herhaalde patronen."
        }
      },
      {
        question: {
          en: "What creates different shades in drawings?",
          es: "¿Qué crea diferentes tonos en los dibujos?",
          de: "Was erzeugt verschiedene Schattierungen in Zeichnungen?",
          nl: "Wat creëert verschillende tinten in tekeningen?"
        },
        options: [
          { en: "Shading", es: "Sombreado", de: "Schattierung", nl: "Arcering" },
          { en: "Cutting", es: "Cortar", de: "Schneiden", nl: "Knippen" },
          { en: "Folding", es: "Doblar", de: "Falten", nl: "Vouwen" },
          { en: "Tearing", es: "Rasgar", de: "Reißen", nl: "Scheuren" }
        ],
        correct: 0,
        explanation: {
          en: "Shading is the technique of adding different tones and values to create depth, dimension, and form in drawings. It uses light and shadow to make flat drawings appear three-dimensional.",
          es: "El sombreado es la técnica de añadir diferentes tonos y valores para crear profundidad, dimensión y forma en dibujos. Usa luz y sombra para hacer que los dibujos planos parezcan tridimensionales.",
          de: "Schattierung ist die Technik, verschiedene Töne und Werte hinzuzufügen, um Tiefe, Dimension und Form in Zeichnungen zu schaffen. Sie verwendet Licht und Schatten, um flache Zeichnungen dreidimensional erscheinen zu lassen.",
          nl: "Arcering is de techniek van het toevoegen van verschillende tonen en waarden om diepte, dimensie en vorm in tekeningen te creëren. Het gebruikt licht en schaduw om platte tekeningen driedimensionaal te laten lijken."
        }
      },
      {
        question: {
          en: "What do you put around artwork to display it?",
          es: "¿Qué pones alrededor de la obra de arte para exhibirla?",
          de: "Was machst du um Kunstwerke zur Ausstellung?",
          nl: "Wat doe je rond kunstwerk om het te tonen?"
        },
        options: [
          { en: "Frame", es: "Marco", de: "Rahmen", nl: "Lijst" },
          { en: "Box", es: "Caja", de: "Kiste", nl: "Doos" },
          { en: "Bag", es: "Bolsa", de: "Tasche", nl: "Tas" },
          { en: "Cloth", es: "Tela", de: "Stoff", nl: "Doek" }
        ],
        correct: 0,
        explanation: {
          en: "A frame surrounds and protects artwork while enhancing its presentation. Frames can be decorative or simple, and they help artwork look professional and finished for display.",
          es: "Un marco rodea y protege las obras de arte mientras mejora su presentación. Los marcos pueden ser decorativos o simples, y ayudan a que las obras de arte se vean profesionales y terminadas para exhibición.",
          de: "Ein Rahmen umgibt und schützt Kunstwerke, während er ihre Präsentation verbessert. Rahmen können dekorativ oder einfach sein und helfen Kunstwerken, professionell und fertig für die Ausstellung auszusehen.",
          nl: "Een lijst omringt en beschermt kunstwerk terwijl het de presentatie verbetert. Lijsten kunnen decoratief of eenvoudig zijn, en ze helpen kunstwerk er professioneel en afgewerkt uit te laten zien voor tentoonstelling."
        }
      },
      {
        question: {
          en: "What do you use to blend colors smoothly?",
          es: "¿Qué usas para mezclar colores suavemente?",
          de: "Womit mischst du Farben glatt?",
          nl: "Waarmee meng je kleuren glad?"
        },
        options: [
          { en: "Blending stump", es: "Difumino", de: "Wischer", nl: "Wrijfstok" },
          { en: "Fork", es: "Tenedor", de: "Gabel", nl: "Vork" },
          { en: "Knife", es: "Cuchillo", de: "Messer", nl: "Mes" },
          { en: "Comb", es: "Peine", de: "Kamm", nl: "Kam" }
        ],
        correct: 0,
        explanation: {
          en: "A blending stump is a paper tool used to smooth and blend charcoal, pencil, or pastel marks. It creates soft, gradual transitions between tones and helps achieve realistic shading effects.",
          es: "Un difumino es una herramienta de papel usada para suavizar y mezclar marcas de carbón, lápiz o pastel. Crea transiciones suaves y graduales entre tonos y ayuda a lograr efectos de sombreado realistas.",
          de: "Ein Wischer ist ein Papierwerkzeug, das verwendet wird, um Kohle-, Bleistift- oder Pastellstriche zu glätten und zu mischen. Er erzeugt weiche, allmähliche Übergänge zwischen Tönen und hilft realistische Schattierungseffekte zu erzielen.",
          nl: "Een wrijfstok is een papieren gereedschap dat wordt gebruikt om houtskool-, potlood- of pastelstrepen glad te maken en te mengen. Het creëert zachte, geleidelijke overgangen tussen tonen en helpt realistische schaduweffecten te bereiken."
        }
      },
      {
        question: {
          en: "What protects your clothes while painting?",
          es: "¿Qué protege tu ropa mientras pintas?",
          de: "Was schützt deine Kleidung beim Malen?",
          nl: "Wat beschermt je kleding tijdens het schilderen?"
        },
        options: [
          { en: "Apron", es: "Delantal", de: "Schürze", nl: "Schort" },
          { en: "Hat", es: "Sombrero", de: "Hut", nl: "Hoed" },
          { en: "Socks", es: "Calcetines", de: "Socken", nl: "Sokken" },
          { en: "Gloves", es: "Guantes", de: "Handschuhe", nl: "Handschoenen" }
        ],
        correct: 0,
        explanation: {
          en: "An apron protects clothing from paint splatters, glue, and other art materials. It allows artists to work freely without worrying about damaging their clothes during messy creative projects.",
          es: "Un delantal protege la ropa de salpicaduras de pintura, pegamento y otros materiales de arte. Permite a los artistas trabajar libremente sin preocuparse por dañar su ropa durante proyectos creativos desordenados.",
          de: "Eine Schürze schützt Kleidung vor Farbspritzern, Kleber und anderen Kunstmaterialien. Sie ermöglicht es Künstlern, frei zu arbeiten, ohne sich Sorgen zu machen, ihre Kleidung bei unordentlichen kreativen Projekten zu beschädigen.",
          nl: "Een schort beschermt kleding tegen verfspatten, lijm en andere kunstmaterialen. Het stelt kunstenaars in staat vrij te werken zonder zich zorgen te maken over het beschadigen van hun kleding tijdens rommelige creatieve projecten."
        }
      },
      {
        question: {
          en: "What creates texture in paintings?",
          es: "¿Qué crea textura en las pinturas?",
          de: "Was erzeugt Textur in Gemälden?",
          nl: "Wat creëert textuur in schilderijen?"
        },
        options: [
          { en: "Thick paint", es: "Pintura espesa", de: "Dicke Farbe", nl: "Dikke verf" },
          { en: "Thin paper", es: "Papel fino", de: "Dünnes Papier", nl: "Dun papier" },
          { en: "Small brushes", es: "Pinceles pequeños", de: "Kleine Pinsel", nl: "Kleine kwasten" },
          { en: "Long pencils", es: "Lápices largos", de: "Lange Bleistifte", nl: "Lange potloden" }
        ],
        correct: 0,
        explanation: {
          en: "Thick paint, applied heavily, creates texture and dimension in paintings. This technique, called impasto, adds physical depth to the artwork and catches light differently across the surface.",
          es: "La pintura espesa, aplicada densamente, crea textura y dimensión en las pinturas. Esta técnica, llamada impasto, añade profundidad física a la obra de arte y captura la luz de manera diferente en la superficie.",
          de: "Dicke Farbe, schwer aufgetragen, erzeugt Textur und Dimension in Gemälden. Diese Technik, Impasto genannt, fügt der Kunstwerk physische Tiefe hinzu und fängt Licht unterschiedlich über die Oberfläche.",
          nl: "Dikke verf, zwaar aangebracht, creëert textuur en dimensie in schilderijen. Deze techniek, impasto genoemd, voegt fysieke diepte toe aan het kunstwerk en vangt licht anders op over het oppervlak."
        }
      },
      {
        question: {
          en: "What do you use to create patterns with paint?",
          es: "¿Qué usas para crear patrones con pintura?",
          de: "Womit erzeugst du Muster mit Farbe?",
          nl: "Waarmee creëer je patronen met verf?"
        },
        options: [
          { en: "Sponges", es: "Esponjas", de: "Schwämme", nl: "Sponsjes" },
          { en: "Plates", es: "Platos", de: "Teller", nl: "Borden" },
          { en: "Cups", es: "Tazas", de: "Tassen", nl: "Kopjes" },
          { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" }
        ],
        correct: 0,
        explanation: {
          en: "Sponges create interesting patterns and textures when used with paint. They can dab, stipple, and create organic textures that brushes cannot achieve, perfect for clouds, foliage, and abstract effects.",
          es: "Las esponjas crean patrones y texturas interesantes cuando se usan con pintura. Pueden dar toques, puntear y crear texturas orgánicas que los pinceles no pueden lograr, perfectas para nubes, follaje y efectos abstractos.",
          de: "Schwämme erzeugen interessante Muster und Texturen, wenn sie mit Farbe verwendet werden. Sie können tupfen, punktieren und organische Texturen schaffen, die Pinsel nicht erreichen können, perfekt für Wolken, Laub und abstrakte Effekte.",
          nl: "Sponsjes creëren interessante patronen en texturen wanneer ze met verf worden gebruikt. Ze kunnen deppen, stippen en organische texturen maken die kwasten niet kunnen bereiken, perfect voor wolken, gebladerte en abstracte effecten."
        }
      },
      {
        question: {
          en: "What tool makes dots of paint?",
          es: "¿Qué herramienta hace puntos de pintura?",
          de: "Welches Werkzeug macht Farbpunkte?",
          nl: "Welk gereedschap maakt verfpuntjes?"
        },
        options: [
          { en: "Dotting tool", es: "Herramienta de puntos", de: "Punktierwerkzeug", nl: "Stippelgereedschap" },
          { en: "Hammer", es: "Martillo", de: "Hammer", nl: "Hamer" },
          { en: "Saw", es: "Sierra", de: "Säge", nl: "Zaag" },
          { en: "Drill", es: "Taladro", de: "Bohrer", nl: "Boor" }
        ],
        correct: 0,
        explanation: {
          en: "A dotting tool creates perfect small circles and dots in artwork. It's essential for pointillism technique, Aboriginal dot paintings, and decorative patterns requiring precise, uniform dots.",
          es: "Una herramienta de puntos crea círculos pequeños y puntos perfectos en obras de arte. Es esencial para la técnica del puntillismo, pinturas de puntos aborígenes y patrones decorativos que requieren puntos precisos y uniformes.",
          de: "Ein Punktierwerkzeug erzeugt perfekte kleine Kreise und Punkte in Kunstwerken. Es ist unerlässlich für die Pointillismus-Technik, Aborigine-Punktmalereien und dekorative Muster, die präzise, gleichmäßige Punkte benötigen.",
          nl: "Een stippelgereedschap creëert perfecte kleine cirkels en punten in kunstwerk. Het is essentieel voor pointillisme techniek, Aboriginal stippenschilderijen en decoratieve patronen die precieze, uniforme punten vereisen."
        }
      },
      {
        question: {
          en: "What makes drawings look three-dimensional?",
          es: "¿Qué hace que los dibujos se vean tridimensionales?",
          de: "Was lässt Zeichnungen dreidimensional aussehen?",
          nl: "Wat laat tekeningen driedimensionaal lijken?"
        },
        options: [
          { en: "Shadows", es: "Sombras", de: "Schatten", nl: "Schaduwen" },
          { en: "Colors", es: "Colores", de: "Farben", nl: "Kleuren" },
          { en: "Lines", es: "Líneas", de: "Linien", nl: "Lijnen" },
          { en: "Dots", es: "Puntos", de: "Punkte", nl: "Punten" }
        ],
        correct: 0,
        explanation: {
          en: "Shadows create the illusion of three-dimensional form by showing where light hits objects and where it doesn't. This fundamental art technique gives depth and realism to flat drawings.",
          es: "Las sombras crean la ilusión de forma tridimensional mostrando dónde la luz golpea los objetos y dónde no. Esta técnica fundamental del arte da profundidad y realismo a dibujos planos.",
          de: "Schatten erzeugen die Illusion dreidimensionaler Form, indem sie zeigen, wo Licht auf Objekte trifft und wo nicht. Diese grundlegende Kunsttechnik verleiht flachen Zeichnungen Tiefe und Realismus.",
          nl: "Schaduwen creëren de illusie van driedimensionale vorm door te tonen waar licht objecten raakt en waar niet. Deze fundamentele kunsttechniek geeft diepte en realisme aan platte tekeningen."
        }
      },
      {
        question: {
          en: "What do you use to spray paint evenly?",
          es: "¿Qué usas para rociar pintura uniformemente?",
          de: "Womit sprühst du Farbe gleichmäßig?",
          nl: "Waarmee spuit je verf gelijkmatig?"
        },
        options: [
          { en: "Spray bottle", es: "Botella rociadora", de: "Sprühflasche", nl: "Spuitfles" },
          { en: "Glass", es: "Vaso", de: "Glas", nl: "Glas" },
          { en: "Plate", es: "Plato", de: "Teller", nl: "Bord" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" }
        ],
        correct: 0,
        explanation: {
          en: "A spray bottle allows artists to apply paint evenly over large areas or create special effects like gradients, mists, and atmospheric backgrounds. It's commonly used in watercolor and mixed media art.",
          es: "Una botella rociadora permite a los artistas aplicar pintura uniformemente sobre áreas grandes o crear efectos especiales como gradientes, nieblas y fondos atmosféricos. Se usa comúnmente en acuarela y arte de medios mixtos.",
          de: "Eine Sprühflasche ermöglicht es Künstlern, Farbe gleichmäßig über große Bereiche aufzutragen oder spezielle Effekte wie Farbverläufe, Nebel und atmosphärische Hintergründe zu schaffen. Sie wird häufig in Aquarell- und Mixed-Media-Kunst verwendet.",
          nl: "Een spuitfles stelt kunstenaars in staat verf gelijkmatig over grote gebieden aan te brengen of speciale effecten te creëren zoals overgangen, nevel en atmosferische achtergronden. Het wordt vaak gebruikt in aquarel en mixed media kunst."
        }
      },
      {
        question: {
          en: "What helps you see fine details in artwork?",
          es: "¿Qué te ayuda a ver detalles finos en las obras de arte?",
          de: "Was hilft dir feine Details in Kunstwerken zu sehen?",
          nl: "Wat helpt je fijne details in kunstwerk te zien?"
        },
        options: [
          { en: "Magnifying glass", es: "Lupa", de: "Lupe", nl: "Vergrootglas" },
          { en: "Mirror", es: "Espejo", de: "Spiegel", nl: "Spiegel" },
          { en: "Window", es: "Ventana", de: "Fenster", nl: "Raam" },
          { en: "Flashlight", es: "Linterna", de: "Taschenlampe", nl: "Zaklamp" }
        ],
        correct: 0,
        explanation: {
          en: "A magnifying glass enlarges small details, allowing artists to see fine textures, intricate patterns, and tiny elements in their artwork or reference materials more clearly for precise work.",
          es: "Una lupa agranda pequeños detalles, permitiendo a los artistas ver texturas finas, patrones intrincados y elementos diminutos en sus obras de arte o materiales de referencia más claramente para trabajo preciso.",
          de: "Eine Lupe vergrößert kleine Details und ermöglicht es Künstlern, feine Texturen, komplizierte Muster und winzige Elemente in ihren Kunstwerken oder Referenzmaterialien für präzise Arbeit deutlicher zu sehen.",
          nl: "Een vergrootglas vergroot kleine details, waardoor kunstenaars fijne texturen, ingewikkelde patronen en kleine elementen in hun kunstwerk of referentiematerialen duidelijker kunnen zien voor precisiewerk."
        }
      },
      {
        question: {
          en: "What keeps your workspace organized?",
          es: "¿Qué mantiene tu espacio de trabajo organizado?",
          de: "Was hält deinen Arbeitsplatz organisiert?",
          nl: "Wat houdt je werkruimte georganiseerd?"
        },
        options: [
          { en: "Art caddy", es: "Organizador de arte", de: "Kunstorganizer", nl: "Kunstorganizer" },
          { en: "Food tray", es: "Bandeja de comida", de: "Essensbrett", nl: "Eetblad" },
          { en: "Shoe box", es: "Caja de zapatos", de: "Schuhkarton", nl: "Schoenendoos" },
          { en: "Plant pot", es: "Maceta", de: "Blumentopf", nl: "Bloempot" }
        ],
        correct: 0,
        explanation: {
          en: "An art caddy is an organized container with compartments for storing and transporting art supplies. It keeps brushes, pencils, paints, and tools neatly organized and easily accessible during creative work.",
          es: "Un organizador de arte es un contenedor organizado con compartimentos para almacenar y transportar suministros de arte. Mantiene pinceles, lápices, pinturas y herramientas ordenados y fácilmente accesibles durante el trabajo creativo.",
          de: "Ein Kunstorganizer ist ein organisierter Behälter mit Fächern zur Aufbewahrung und zum Transport von Kunstbedarf. Er hält Pinsel, Bleistifte, Farben und Werkzeuge ordentlich organisiert und während der kreativen Arbeit leicht zugänglich.",
          nl: "Een kunstorganizer is een georganiseerde container met vakjes voor het opbergen en vervoeren van kunstbenodigdheden. Het houdt kwasten, potloden, verven en gereedschap netjes georganiseerd en gemakkelijk toegankelijk tijdens creatief werk."
        }
      },
      {
        question: {
          en: "What surface is best for messy art projects?",
          es: "¿Qué superficie es mejor para proyectos de arte desordenados?",
          de: "Welche Oberfläche ist am besten für unordentliche Kunstprojekte?",
          nl: "Welk oppervlak is het beste voor rommelige kunstprojecten?"
        },
        options: [
          { en: "Newspaper", es: "Periódico", de: "Zeitung", nl: "Krant" },
          { en: "Carpet", es: "Alfombra", de: "Teppich", nl: "Tapijt" },
          { en: "Bed", es: "Cama", de: "Bett", nl: "Bed" },
          { en: "Couch", es: "Sofá", de: "Sofa", nl: "Bank" }
        ],
        correct: 0,
        explanation: {
          en: "Newspaper provides an excellent protective surface for messy art projects. It's absorbent, disposable, and covers large areas to protect tables and floors from paint, glue, and other art materials.",
          es: "El periódico proporciona una excelente superficie protectora para proyectos de arte desordenados. Es absorbente, desechable y cubre grandes áreas para proteger mesas y pisos de pintura, pegamento y otros materiales de arte.",
          de: "Zeitung bietet eine ausgezeichnete Schutzoberfläche für unordentliche Kunstprojekte. Sie ist saugfähig, wegwerfbar und bedeckt große Bereiche, um Tische und Böden vor Farbe, Kleber und anderen Kunstmaterialien zu schützen.",
          nl: "Krant biedt een uitstekend beschermend oppervlak voor rommelige kunstprojecten. Het is absorberend, wegwerpbaar en bedekt grote gebieden om tafels en vloeren te beschermen tegen verf, lijm en andere kunstmaterialen."
        }
      },
      {
        question: {
          en: "What do you use to clean brushes?",
          es: "¿Qué usas para limpiar pinceles?",
          de: "Womit reinigst du Pinsel?",
          nl: "Waarmee maak je kwasten schoon?"
        },
        options: [
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Glue", es: "Pegamento", de: "Kleber", nl: "Lijm" },
          { en: "Paint", es: "Pintura", de: "Farbe", nl: "Verf" },
          { en: "Clay", es: "Arcilla", de: "Ton", nl: "Klei" }
        ],
        correct: 0,
        explanation: {
          en: "Water is the universal cleaner for art brushes, especially for water-based paints like watercolors and acrylics. Clean brushes last longer and prevent color contamination between different paints.",
          es: "El agua es el limpiador universal para pinceles de arte, especialmente para pinturas a base de agua como acuarelas y acrílicos. Los pinceles limpios duran más y previenen la contaminación de color entre diferentes pinturas.",
          de: "Wasser ist der universelle Reiniger für Kunstpinsel, besonders für wasserbasierte Farben wie Aquarelle und Acryl. Saubere Pinsel halten länger und verhindern Farbverunreinigungen zwischen verschiedenen Farben.",
          nl: "Water is de universele reiniger voor kunstkwasten, vooral voor watergebaseerde verven zoals aquarel en acryl. Schone kwasten gaan langer mee en voorkomen kleurverontreiniging tussen verschillende verven."
        }
      },
      {
        question: {
          en: "What makes art supplies portable?",
          es: "¿Qué hace que los suministros de arte sean portátiles?",
          de: "Was macht Kunstmaterialien tragbar?",
          nl: "Wat maakt kunstbenodigdheden draagbaar?"
        },
        options: [
          { en: "Art box", es: "Caja de arte", de: "Kunstkiste", nl: "Kunstdoos" },
          { en: "Refrigerator", es: "Refrigerador", de: "Kühlschrank", nl: "Koelkast" },
          { en: "Washing machine", es: "Lavadora", de: "Waschmaschine", nl: "Wasmachine" },
          { en: "Oven", es: "Horno", de: "Ofen", nl: "Oven" }
        ],
        correct: 0,
        explanation: {
          en: "An art box is a portable container designed to organize and transport art supplies. It typically has compartments for different tools and makes it easy to create art anywhere, whether at home, school, or outdoors.",
          es: "Una caja de arte es un contenedor portátil diseñado para organizar y transportar suministros de arte. Típicamente tiene compartimentos para diferentes herramientas y hace fácil crear arte en cualquier lugar, ya sea en casa, escuela o al aire libre.",
          de: "Eine Kunstkiste ist ein tragbarer Behälter, der zum Organisieren und Transportieren von Kunstbedarf entwickelt wurde. Sie hat typischerweise Fächer für verschiedene Werkzeuge und macht es einfach, überall Kunst zu schaffen, ob zu Hause, in der Schule oder im Freien.",
          nl: "Een kunstdoos is een draagbare container ontworpen om kunstbenodigdheden te organiseren en te vervoeren. Het heeft typisch vakjes voor verschillende gereedschappen en maakt het gemakkelijk om overal kunst te maken, of het nu thuis, op school of buiten is."
        }
      },
      {
        question: {
          en: "What creates smooth color transitions?",
          es: "¿Qué crea transiciones de color suaves?",
          de: "Was erzeugt glatte Farbübergänge?",
          nl: "Wat creëert vloeiende kleurovergangen?"
        },
        options: [
          { en: "Blending", es: "Mezclar", de: "Vermischen", nl: "Mengen" },
          { en: "Cutting", es: "Cortar", de: "Schneiden", nl: "Knippen" },
          { en: "Folding", es: "Doblar", de: "Falten", nl: "Vouwen" },
          { en: "Stapling", es: "Grapar", de: "Heften", nl: "Nieten" }
        ],
        correct: 0,
        explanation: {
          en: "Blending is the technique of smoothly transitioning between colors or tones to create gradual changes without harsh lines. It's essential for realistic artwork and creating atmospheric effects.",
          es: "Mezclar es la técnica de transicionar suavemente entre colores o tonos para crear cambios graduales sin líneas duras. Es esencial para arte realista y crear efectos atmosféricos.",
          de: "Vermischen ist die Technik des glatten Übergangs zwischen Farben oder Tönen, um allmähliche Veränderungen ohne harte Linien zu schaffen. Es ist wesentlich für realistische Kunstwerke und die Schaffung atmosphärischer Effekte.",
          nl: "Mengen is de techniek van het glad overgaan tussen kleuren of tonen om geleidelijke veranderingen te creëren zonder harde lijnen. Het is essentieel voor realistische kunstwerken en het creëren van atmosferische effecten."
        }
      },
      {
        question: {
          en: "What do you press onto paper to create designs?",
          es: "¿Qué presionas sobre el papel para crear diseños?",
          de: "Was drückst du auf Papier um Designs zu erstellen?",
          nl: "Wat druk je op papier om ontwerpen te maken?"
        },
        options: [
          { en: "Stencils", es: "Plantillas", de: "Schablonen", nl: "Sjablonen" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
          { en: "Feathers", es: "Plumas", de: "Federn", nl: "Veren" }
        ],
        correct: 0,
        explanation: {
          en: "Stencils are templates with cut-out designs that create consistent patterns when paint or ink is applied over them. They're perfect for repeating designs, lettering, and decorative borders.",
          es: "Las plantillas son moldes con diseños recortados que crean patrones consistentes cuando se aplica pintura o tinta sobre ellos. Son perfectas para diseños repetidos, letras y bordes decorativos.",
          de: "Schablonen sind Vorlagen mit ausgeschnittenen Designs, die konsistente Muster erzeugen, wenn Farbe oder Tinte darüber aufgetragen wird. Sie sind perfekt für wiederholende Designs, Beschriftung und dekorative Ränder.",
          nl: "Sjablonen zijn sjablonen met uitgesneden ontwerpen die consistente patronen creëren wanneer verf of inkt eroverheen wordt aangebracht. Ze zijn perfect voor herhalende ontwerpen, letters en decoratieve randen."
        }
      },
      {
        question: {
          en: "What allows you to remove and reposition artwork?",
          es: "¿Qué te permite quitar y reposicionar obras de arte?",
          de: "Was erlaubt es dir Kunstwerke zu entfernen und neu zu positionieren?",
          nl: "Wat laat je kunstwerk verwijderen en herplaatsen?"
        },
        options: [
          { en: "Removable tape", es: "Cinta removible", de: "Ablösbares Klebeband", nl: "Verwijderbare tape" },
          { en: "Super glue", es: "Pegamento súper", de: "Sekundenkleber", nl: "Secondelijm" },
          { en: "Cement", es: "Cemento", de: "Zement", nl: "Cement" },
          { en: "Nails", es: "Clavos", de: "Nägel", nl: "Spijkers" }
        ],
        correct: 0,
        explanation: {
          en: "Removable tape allows artists to temporarily attach artwork without permanent damage. It's perfect for positioning pieces before final mounting and can be removed cleanly without leaving residue.",
          es: "La cinta removible permite a los artistas adherir temporalmente obras de arte sin daño permanente. Es perfecta para posicionar piezas antes del montaje final y puede ser removida limpiamente sin dejar residuos.",
          de: "Ablösbares Klebeband ermöglicht es Künstlern, Kunstwerke temporär zu befestigen, ohne permanente Schäden zu verursachen. Es ist perfekt zum Positionieren von Stücken vor der endgültigen Montage und kann sauber entfernt werden, ohne Rückstände zu hinterlassen.",
          nl: "Verwijderbare tape stelt kunstenaars in staat kunstwerk tijdelijk te bevestigen zonder permanente schade. Het is perfect voor het positioneren van stukken vóór de definitieve montage en kan schoon worden verwijderd zonder residu achter te laten."
        }
      },
      {
        question: {
          en: "What gives the best light for detailed artwork?",
          es: "¿Qué da la mejor luz para obras de arte detalladas?",
          de: "Was gibt das beste Licht für detaillierte Kunstwerke?",
          nl: "Wat geeft het beste licht voor gedetailleerd kunstwerk?"
        },
        options: [
          { en: "Daylight lamp", es: "Lámpara de luz natural", de: "Tageslichtlampe", nl: "Daglichtlamp" },
          { en: "Candle", es: "Vela", de: "Kerze", nl: "Kaars" },
          { en: "Flashlight", es: "Linterna", de: "Taschenlampe", nl: "Zaklamp" },
          { en: "Phone light", es: "Luz del teléfono", de: "Handylicht", nl: "Telefoonlicht" }
        ],
        correct: 0,
        explanation: {
          en: "A daylight lamp provides full-spectrum lighting that mimics natural sunlight, allowing artists to see true colors and fine details. This is crucial for color accuracy and detailed artwork creation.",
          es: "Una lámpara de luz natural proporciona iluminación de espectro completo que imita la luz solar natural, permitiendo a los artistas ver colores verdaderos y detalles finos. Esto es crucial para la precisión del color y la creación de arte detallado.",
          de: "Eine Tageslichtlampe bietet Vollspektrumlicht, das natürliches Sonnenlicht nachahmt und es Künstlern ermöglicht, echte Farben und feine Details zu sehen. Dies ist entscheidend für Farbgenauigkeit und detaillierte Kunstwerkerstellung.",
          nl: "Een daglichtlamp biedt volledig spectrum verlichting die natuurlijk zonlicht nabootst, waardoor kunstenaars echte kleuren en fijne details kunnen zien. Dit is cruciaal voor kleurnauwkeurigheid en het maken van gedetailleerd kunstwerk."
        }
      },
      {
        question: {
          en: "What helps you plan your artwork before starting?",
          es: "¿Qué te ayuda a planificar tu obra de arte antes de empezar?",
          de: "Was hilft dir dein Kunstwerk vor dem Start zu planen?",
          nl: "Wat helpt je je kunstwerk te plannen voordat je begint?"
        },
        options: [
          { en: "Sketch pad", es: "Bloc de dibujo", de: "Skizzenblock", nl: "Schetsboek" },
          { en: "Calculator", es: "Calculadora", de: "Taschenrechner", nl: "Rekenmachine" },
          { en: "Calendar", es: "Calendario", de: "Kalender", nl: "Kalender" },
          { en: "Dictionary", es: "Diccionario", de: "Wörterbuch", nl: "Woordenboek" }
        ],
        correct: 0,
        explanation: {
          en: "A sketch pad provides practice space for planning artwork before creating the final piece. It allows artists to experiment with compositions, try different ideas, and work out problems before committing to expensive materials.",
          es: "Un bloc de dibujo proporciona espacio de práctica para planificar obras de arte antes de crear la pieza final. Permite a los artistas experimentar con composiciones, probar diferentes ideas y resolver problemas antes de comprometerse con materiales costosos.",
          de: "Ein Skizzenblock bietet Übungsraum für die Planung von Kunstwerken vor der Erstellung des finalen Stücks. Er ermöglicht es Künstlern, mit Kompositionen zu experimentieren, verschiedene Ideen auszuprobieren und Probleme zu lösen, bevor sie sich für teure Materialien entscheiden.",
          nl: "Een schetsboek biedt oefenruimte voor het plannen van kunstwerk voordat het eindstuk wordt gemaakt. Het stelt kunstenaars in staat te experimenteren met composities, verschillende ideeën uit te proberen en problemen op te lossen voordat ze zich vastleggen op dure materialen."
        }
      },
      {
        question: {
          en: "What creates raised lines in artwork?",
          es: "¿Qué crea líneas elevadas en las obras de arte?",
          de: "Was erzeugt erhabene Linien in Kunstwerken?",
          nl: "Wat creëert verhoogde lijnen in kunstwerk?"
        },
        options: [
          { en: "Embossing", es: "Repujado", de: "Prägung", nl: "Reliëf" },
          { en: "Erasing", es: "Borrar", de: "Löschen", nl: "Wissen" },
          { en: "Washing", es: "Lavar", de: "Waschen", nl: "Wassen" },
          { en: "Sleeping", es: "Dormir", de: "Schlafen", nl: "Slapen" }
        ],
        correct: 0,
        explanation: {
          en: "Embossing creates raised lines and textures by pressing designs into paper or other materials. This technique adds tactile dimension to artwork and is popular in card making and decorative arts.",
          es: "El repujado crea líneas elevadas y texturas presionando diseños en papel u otros materiales. Esta técnica añade dimensión táctil a las obras de arte y es popular en la fabricación de tarjetas y artes decorativas.",
          de: "Prägung erzeugt erhabene Linien und Texturen, indem Designs in Papier oder andere Materialien gedrückt werden. Diese Technik fügt Kunstwerken taktile Dimension hinzu und ist bei der Kartenherstellung und dekorativen Künsten beliebt.",
          nl: "Reliëf creëert verhoogde lijnen en texturen door ontwerpen in papier of andere materialen te drukken. Deze techniek voegt tactiele dimensie toe aan kunstwerk en is populair bij kaarten maken en decoratieve kunsten."
        }
      },
      {
        question: {
          en: "What connects different art pieces together?",
          es: "¿Qué conecta diferentes piezas de arte juntas?",
          de: "Was verbindet verschiedene Kunstwerke miteinander?",
          nl: "Wat verbindt verschillende kunststukken samen?"
        },
        options: [
          { en: "Mounting board", es: "Tabla de montaje", de: "Montageplatte", nl: "Montageplaat" },
          { en: "Cutting board", es: "Tabla de cortar", de: "Schneidebrett", nl: "Snijplank" },
          { en: "Ironing board", es: "Tabla de planchar", de: "Bügelbrett", nl: "Strijkplank" },
          { en: "Diving board", es: "Trampolín", de: "Sprungbrett", nl: "Duikplank" }
        ],
        correct: 0,
        explanation: {
          en: "A mounting board provides a sturdy backing for artwork, connecting different pieces together or supporting a single piece for display. It protects art from bending and provides professional presentation.",
          es: "Una tabla de montaje proporciona un respaldo sólido para obras de arte, conectando diferentes piezas juntas o apoyando una sola pieza para exhibición. Protege el arte de doblarse y proporciona presentación profesional.",
          de: "Eine Montageplatte bietet eine stabile Rückwand für Kunstwerke, verbindet verschiedene Stücke miteinander oder stützt ein einzelnes Stück für die Ausstellung. Sie schützt Kunst vor dem Biegen und bietet professionelle Präsentation.",
          nl: "Een montageplaat biedt stevige ondersteuning voor kunstwerk, verbindt verschillende stukken samen of ondersteunt een enkel stuk voor tentoonstelling. Het beschermt kunst tegen buigen en biedt professionele presentatie."
        }
      },
      {
        question: {
          en: "What creates the shiniest finish on artwork?",
          es: "¿Qué crea el acabado más brillante en las obras de arte?",
          de: "Was erzeugt das glänzendste Finish auf Kunstwerken?",
          nl: "Wat creëert de glanzendste afwerking op kunstwerk?"
        },
        options: [
          { en: "Glossy varnish", es: "Barniz brillante", de: "Glänzender Firnis", nl: "Glanzende vernis" },
          { en: "Matte paint", es: "Pintura mate", de: "Matte Farbe", nl: "Matte verf" },
          { en: "Rough paper", es: "Papel rugoso", de: "Raues Papier", nl: "Ruw papier" },
          { en: "Soft fabric", es: "Tela suave", de: "Weicher Stoff", nl: "Zachte stof" }
        ],
        correct: 0,
        explanation: {
          en: "Glossy varnish creates the shiniest, most reflective finish on artwork. It enhances colors, provides protection from moisture and UV damage, and gives paintings a professional, gallery-ready appearance.",
          es: "El barniz brillante crea el acabado más brillante y reflectante en las obras de arte. Realza los colores, proporciona protección contra la humedad y el daño UV, y da a las pinturas una apariencia profesional lista para galería.",
          de: "Glänzender Firnis erzeugt das glänzendste, reflektierendste Finish auf Kunstwerken. Er verstärkt Farben, bietet Schutz vor Feuchtigkeit und UV-Schäden und verleiht Gemälden ein professionelles, galeriegeeignetes Aussehen.",
          nl: "Glanzende vernis creëert de glanzendste, meest reflecterende afwerking op kunstwerk. Het versterkt kleuren, biedt bescherming tegen vocht en UV-schade, en geeft schilderijen een professionele, galeriewaardige uitstraling."
        }
      },
      {
        question: {
          en: "What tool removes small mistakes in detailed work?",
          es: "¿Qué herramienta quita pequeños errores en trabajos detallados?",
          de: "Welches Werkzeug entfernt kleine Fehler in detaillierter Arbeit?",
          nl: "Welk gereedschap verwijdert kleine fouten in gedetailleerd werk?"
        },
        options: [
          { en: "Fine eraser", es: "Goma fina", de: "Feiner Radiergummi", nl: "Fijne gum" },
          { en: "Big brush", es: "Pincel grande", de: "Großer Pinsel", nl: "Grote kwast" },
          { en: "Thick marker", es: "Marcador grueso", de: "Dicker Marker", nl: "Dikke stift" },
          { en: "Heavy paint", es: "Pintura pesada", de: "Schwere Farbe", nl: "Zware verf" }
        ],
        correct: 0,
        explanation: {
          en: "A fine eraser is designed for precision work, allowing artists to remove small mistakes and create highlights in detailed drawings without damaging surrounding areas.",
          es: "Una goma fina está diseñada para trabajo de precisión, permitiendo a los artistas quitar pequeños errores y crear luces en dibujos detallados sin dañar las áreas circundantes.",
          de: "Ein feiner Radiergummi ist für Präzisionsarbeit konzipiert und ermöglicht es Künstlern, kleine Fehler zu entfernen und Highlights in detaillierten Zeichnungen zu schaffen, ohne umliegende Bereiche zu beschädigen.",
          nl: "Een fijne gum is ontworpen voor precisiewerk, waardoor kunstenaars kleine fouten kunnen verwijderen en hoogtepunten in gedetailleerde tekeningen kunnen creëren zonder omliggende gebieden te beschadigen."
        }
      },
      {
        question: {
          en: "What shows you how your artwork will look when complete?",
          es: "¿Qué te muestra cómo se verá tu obra de arte cuando esté completa?",
          de: "Was zeigt dir wie dein Kunstwerk aussehen wird wenn es fertig ist?",
          nl: "Wat laat je zien hoe je kunstwerk eruit zal zien als het af is?"
        },
        options: [
          { en: "Preview sketch", es: "Boceto de vista previa", de: "Vorschau-Skizze", nl: "Voorbeeldschets" },
          { en: "Shopping list", es: "Lista de compras", de: "Einkaufsliste", nl: "Boodschappenlijst" },
          { en: "Phone book", es: "Guía telefónica", de: "Telefonbuch", nl: "Telefoonboek" },
          { en: "Recipe book", es: "Libro de recetas", de: "Rezeptbuch", nl: "Receptenboek" }
        ],
        correct: 0,
        explanation: {
          en: "A preview sketch shows artists how their final artwork will look before they invest time in the complete piece. It helps plan composition, test ideas, and make adjustments early in the creative process.",
          es: "Un boceto de vista previa muestra a los artistas cómo se verá su obra de arte final antes de invertir tiempo en la pieza completa. Ayuda a planificar la composición, probar ideas y hacer ajustes temprano en el proceso creativo.",
          de: "Eine Vorschau-Skizze zeigt Künstlern, wie ihr finales Kunstwerk aussehen wird, bevor sie Zeit in das vollständige Stück investieren. Sie hilft bei der Planung der Komposition, beim Testen von Ideen und beim frühen Vornehmen von Anpassungen im kreativen Prozess.",
          nl: "Een voorbeeldschets toont kunstenaars hoe hun eindkunstwerk eruit zal zien voordat ze tijd investeren in het complete stuk. Het helpt bij het plannen van compositie, het testen van ideeën en het vroeg maken van aanpassingen in het creatieve proces."
        }
      },
      {
        question: {
          en: "What protects artwork from getting damaged?",
          es: "¿Qué protege las obras de arte de dañarse?",
          de: "Was schützt Kunstwerke vor Beschädigung?",
          nl: "Wat beschermt kunstwerk tegen beschadiging?"
        },
        options: [
          { en: "Protective sleeve", es: "Funda protectora", de: "Schutzhülle", nl: "Beschermhoes" },
          { en: "Cooking pot", es: "Olla de cocinar", de: "Kochtopf", nl: "Kookpan" },
          { en: "Garden hose", es: "Manguera de jardín", de: "Gartenschlauch", nl: "Tuinslang" },
          { en: "Vacuum cleaner", es: "Aspiradora", de: "Staubsauger", nl: "Stofzuiger" }
        ],
        correct: 0,
        explanation: {
          en: "A protective sleeve shields finished artwork from dust, moisture, scratches, and other damage during storage or transport. It preserves the quality and longevity of valuable art pieces.",
          es: "Una funda protectora protege las obras de arte terminadas del polvo, humedad, arañazos y otros daños durante el almacenamiento o transporte. Preserva la calidad y longevidad de piezas de arte valiosas.",
          de: "Eine Schutzhülle schützt fertige Kunstwerke vor Staub, Feuchtigkeit, Kratzern und anderen Schäden während der Lagerung oder des Transports. Sie bewahrt die Qualität und Langlebigkeit wertvoller Kunststücke.",
          nl: "Een beschermhoes beschermt afgewerkt kunstwerk tegen stof, vocht, krassen en andere schade tijdens opslag of transport. Het behoudt de kwaliteit en levensduur van waardevolle kunststukken."
        }
      },
      {
        question: {
          en: "What is the primary color that, when mixed with yellow, creates green?",
          es: "¿Cuál es el color primario que, al mezclarse con amarillo, crea verde?",
          de: "Welche Grundfarbe ergibt mit Gelb gemischt Grün?",
          nl: "Wat is de primaire kleur die, gemengd met geel, groen creëert?"
        },
        options: [
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" }
        ],
        correct: 0,
        explanation: {
          en: "Blue is one of the three primary colors. When blue and yellow are mixed together, they create green, which is a secondary color.",
          es: "El azul es uno de los tres colores primarios. Cuando el azul y el amarillo se mezclan, crean verde, que es un color secundario.",
          de: "Blau ist eine der drei Grundfarben. Wenn Blau und Gelb gemischt werden, entsteht Grün, eine Sekundärfarbe.",
          nl: "Blauw is een van de drie primaire kleuren. Wanneer blauw en geel worden gemengd, ontstaat groen, wat een secundaire kleur is."
        }
      },
      {
        question: {
          en: "Which famous artist painted the ceiling of the Sistine Chapel?",
          es: "¿Qué famoso artista pintó el techo de la Capilla Sixtina?",
          de: "Welcher berühmte Künstler malte die Decke der Sixtinischen Kapelle?",
          nl: "Welke beroemde kunstenaar schilderde het plafond van de Sixtijnse Kapel?"
        },
        options: [
          { en: "Michelangelo", es: "Miguel Ángel", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" },
          { en: "Raphael", es: "Rafael", de: "Raffael", nl: "Raphaël" },
          { en: "Donatello", es: "Donatello", de: "Donatello", nl: "Donatello" }
        ],
        correct: 0,
        explanation: {
          en: "Michelangelo painted the famous ceiling frescoes of the Sistine Chapel between 1508 and 1512, depicting scenes from the Book of Genesis.",
          es: "Miguel Ángel pintó los famosos frescos del techo de la Capilla Sixtina entre 1508 y 1512, representando escenas del Libro del Génesis.",
          de: "Michelangelo malte die berühmten Deckenfresken der Sixtinischen Kapelle zwischen 1508 und 1512 mit Szenen aus dem Buch Genesis.",
          nl: "Michelangelo schilderde de beroemde plafondfresco's van de Sixtijnse Kapel tussen 1508 en 1512, met scènes uit het boek Genesis."
        }
      },
      {
        question: {
          en: "What type of performance combines singing, acting, and dancing?",
          es: "¿Qué tipo de actuación combina canto, actuación y baile?",
          de: "Welche Art von Aufführung kombiniert Gesang, Schauspiel und Tanz?",
          nl: "Welk type optreden combineert zang, acteren en dansen?"
        },
        options: [
          { en: "Musical theater", es: "Teatro musical", de: "Musiktheater", nl: "Muziektheater" },
          { en: "Opera", es: "Ópera", de: "Oper", nl: "Opera" },
          { en: "Ballet", es: "Ballet", de: "Ballett", nl: "Ballet" },
          { en: "Concert", es: "Concierto", de: "Konzert", nl: "Concert" }
        ],
        correct: 0,
        explanation: {
          en: "Musical theater is a form of performance that integrates singing, acting, and dancing to tell a story through music and lyrics.",
          es: "El teatro musical es una forma de actuación que integra canto, actuación y baile para contar una historia a través de música y letras.",
          de: "Musiktheater ist eine Aufführungsform, die Gesang, Schauspiel und Tanz integriert, um eine Geschichte durch Musik und Text zu erzählen.",
          nl: "Muziektheater is een vorm van opvoering die zang, acteren en dansen integreert om een verhaal te vertellen door middel van muziek en teksten."
        }
      },
      {
        question: {
          en: "Which instrument has 88 keys?",
          es: "¿Qué instrumento tiene 88 teclas?",
          de: "Welches Instrument hat 88 Tasten?",
          nl: "Welk instrument heeft 88 toetsen?"
        },
        options: [
          { en: "Piano", es: "Piano", de: "Klavier", nl: "Piano" },
          { en: "Organ", es: "Órgano", de: "Orgel", nl: "Orgel" },
          { en: "Accordion", es: "Acordeón", de: "Akkordeon", nl: "Accordeon" },
          { en: "Harpsichord", es: "Clavecín", de: "Cembalo", nl: "Klavecimbel" }
        ],
        correct: 0,
        explanation: {
          en: "A standard piano keyboard has 88 keys: 52 white keys and 36 black keys, spanning over 7 octaves from A0 to C8.",
          es: "Un teclado de piano estándar tiene 88 teclas: 52 teclas blancas y 36 teclas negras, abarcando más de 7 octavas desde A0 hasta C8.",
          de: "Eine Standard-Klaviertastatur hat 88 Tasten: 52 weiße und 36 schwarze Tasten, die über 7 Oktaven von A0 bis C8 reichen.",
          nl: "Een standaard pianotoetsenbord heeft 88 toetsen: 52 witte toetsen en 36 zwarte toetsen, die meer dan 7 octaven beslaan van A0 tot C8."
        }
      },
      {
        question: {
          en: "What is the art of beautiful handwriting called?",
          es: "¿Cómo se llama el arte de la escritura hermosa?",
          de: "Wie nennt man die Kunst der schönen Handschrift?",
          nl: "Hoe wordt de kunst van mooi handschrift genoemd?"
        },
        options: [
          { en: "Calligraphy", es: "Caligrafía", de: "Kalligrafie", nl: "Kalligrafie" },
          { en: "Typography", es: "Tipografía", de: "Typografie", nl: "Typografie" },
          { en: "Penmanship", es: "Caligrafía", de: "Schreibkunst", nl: "Schrijfkunst" },
          { en: "Manuscript", es: "Manuscrito", de: "Manuskript", nl: "Manuscript" }
        ],
        correct: 0,
        explanation: {
          en: "Calligraphy is the artistic practice of beautiful handwriting, often using special pens, brushes, and techniques to create decorative lettering.",
          es: "La caligrafía es la práctica artística de la escritura hermosa, a menudo usando plumas especiales, pinceles y técnicas para crear letras decorativas.",
          de: "Kalligrafie ist die künstlerische Praxis der schönen Handschrift, oft unter Verwendung spezieller Federn, Pinsel und Techniken zur Erstellung dekorativer Buchstaben.",
          nl: "Kalligrafie is de artistieke praktijk van mooi handschrift, vaak met behulp van speciale pennen, penselen en technieken om decoratieve letters te creëren."
        }
      },
      {
        question: {
          en: "Which famous museum is home to the Mona Lisa?",
          es: "¿Qué museo famoso alberga la Mona Lisa?",
          de: "Welches berühmte Museum beherbergt die Mona Lisa?",
          nl: "Welk beroemd museum herbergt de Mona Lisa?"
        },
        options: [
          { en: "The Louvre", es: "El Louvre", de: "Der Louvre", nl: "Het Louvre" },
          { en: "The Met", es: "El Met", de: "Das Met", nl: "Het Met" },
          { en: "The Tate Modern", es: "El Tate Modern", de: "Die Tate Modern", nl: "De Tate Modern" },
          { en: "The Uffizi", es: "Los Uffizi", de: "Die Uffizien", nl: "De Uffizi" }
        ],
        correct: 0,
        explanation: {
          en: "The Mona Lisa by Leonardo da Vinci is housed in the Louvre Museum in Paris, France, where it has been on permanent display since 1797.",
          es: "La Mona Lisa de Leonardo da Vinci se encuentra en el Museo del Louvre en París, Francia, donde ha estado en exhibición permanente desde 1797.",
          de: "Die Mona Lisa von Leonardo da Vinci befindet sich im Louvre-Museum in Paris, Frankreich, wo sie seit 1797 dauerhaft ausgestellt ist.",
          nl: "De Mona Lisa van Leonardo da Vinci bevindt zich in het Louvre Museum in Parijs, Frankrijk, waar het sinds 1797 permanent tentoongesteld wordt."
        }
      },
      {
        question: {
          en: "What do you call a group of musicians who play together?",
          es: "¿Cómo se llama un grupo de músicos que tocan juntos?",
          de: "Wie nennt man eine Gruppe von Musikern, die zusammen spielen?",
          nl: "Hoe noem je een groep muzikanten die samen spelen?"
        },
        options: [
          { en: "Ensemble", es: "Conjunto", de: "Ensemble", nl: "Ensemble" },
          { en: "Gallery", es: "Galería", de: "Galerie", nl: "Galerij" },
          { en: "Studio", es: "Estudio", de: "Studio", nl: "Studio" },
          { en: "Workshop", es: "Taller", de: "Werkstatt", nl: "Workshop" }
        ],
        correct: 0,
        explanation: {
          en: "An ensemble is a group of musicians who perform together. The term can refer to various sizes and types of musical groups, from duos to large orchestras.",
          es: "Un conjunto es un grupo de músicos que actúan juntos. El término puede referirse a varios tamaños y tipos de grupos musicales, desde dúos hasta grandes orquestas.",
          de: "Ein Ensemble ist eine Gruppe von Musikern, die zusammen auftreten. Der Begriff kann sich auf verschiedene Größen und Arten von Musikgruppen beziehen, von Duos bis zu großen Orchestern.",
          nl: "Een ensemble is een groep muzikanten die samen optreden. De term kan verwijzen naar verschillende groottes en types muziekgroepen, van duo's tot grote orkesten."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/arts-culture', level1);
  }
})();