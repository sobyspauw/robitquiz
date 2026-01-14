// Beer Quiz - Level 6
(function() {
  const level6 = {
    name: {
          "en": "Beer Tasting and Characteristics",
          "es": "Cata y Características de Cerveza",
          "de": "Bierdegustation und Eigenschaften",
          "nl": "Bierproeverij en Kenmerken"
    },
    questions: [
      {
        question: {
                  "en": "What is the primary cause of 'diacetyl' off-flavor in beer?",
                  "es": "¿Cuál es la causa principal del sabor desagradable 'diacetilo' en la cerveza?",
                  "de": "Was ist die Hauptursache für den 'Diacetyl'-Fehlgeschmack im Bier?",
                  "nl": "Wat is de hoofdoorzaak van 'diacetyl' bijsmaak in bier?"
        },
        options: [
        {
                  "en": "Bacterial contamination",
                  "es": "Contaminación bacteriana",
                  "de": "Bakterielle Kontamination",
                  "nl": "Bacteriële besmetting"
        },
        {
                  "en": "Over-hopping",
                  "es": "Exceso de lúpulo",
                  "de": "Übermäßiger Hopfeneinsatz",
                  "nl": "Te veel hop"
        },
        {
                  "en": "Incomplete yeast fermentation",
                  "es": "Fermentación incompleta de levadura",
                  "de": "Unvollständige Hefegärung",
                  "nl": "Onvolledige gistfermentatie"
        },
        {
                  "en": "High water pH",
                  "es": "pH alto del agua",
                  "de": "Hoher Wasser-pH",
                  "nl": "Hoge water pH"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Diacetyl gives beer a buttery or butterscotch flavor and is primarily caused by incomplete yeast fermentation or yeast stress. Proper fermentation management prevents this off-flavor.",
                  "es": "El diacetilo da a la cerveza un sabor mantecoso o de caramelo de mantequilla y es causado principalmente por fermentación incompleta de levadura o estrés de levadura. Una gestión adecuada de la fermentación previene este sabor desagradable.",
                  "de": "Diacetyl verleiht Bier einen buttrigen oder Butterscotch-Geschmack und wird hauptsächlich durch unvollständige Hefegärung oder Hefestress verursacht. Ordnungsgemäße Gärungsführung verhindert diesen Fehlgeschmack.",
                  "nl": "Diacetyl geeft bier een boterachtige of butterscotch smaak en wordt voornamelijk veroorzaakt door onvolledige gistfermentatie of giststress. Juist fermentatiebeheer voorkomt deze bijsmaak."
        }
      },
      {
        question: {
                  "en": "Which aroma compound is responsible for the citrusy smell in many American hop varieties?",
                  "es": "¿Qué compuesto aromático es responsable del olor cítrico en muchas variedades de lúpulo americanas?",
                  "de": "Welche Aromaverbindung ist für den zitrusartigen Geruch in vielen amerikanischen Hopfensorten verantwortlich?",
                  "nl": "Welke aromaverbinding is verantwoordelijk voor de citrusachtige geur in veel Amerikaanse hopvariëteiten?"
        },
        options: [
        {
                  "en": "Pinene",
                  "es": "Pineno",
                  "de": "Pinen",
                  "nl": "Pineen"
        },
        {
                  "en": "Myrcene",
                  "es": "Mirceno",
                  "de": "Myrcen",
                  "nl": "Myrceen"
        },
        {
                  "en": "Limonene",
                  "es": "Limoneno",
                  "de": "Limonen",
                  "nl": "Limoneen"
        },
        {
                  "en": "Linalool",
                  "es": "Linalol",
                  "de": "Linalool",
                  "nl": "Linalool"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Limonene is the terpene compound that provides citrusy aromas, particularly lemon and orange notes. It's abundant in American hop varieties like Cascade and Centennial.",
                  "es": "El limoneno es el compuesto terpénico que proporciona aromas cítricos, particularmente notas de limón y naranja. Es abundante en variedades de lúpulo americanas como Cascade y Centennial.",
                  "de": "Limonen ist die Terpenverbindung, die zitrusartige Aromen liefert, insbesondere Zitronen- und Orangennoten. Es ist reichlich in amerikanischen Hopfensorten wie Cascade und Centennial vorhanden.",
                  "nl": "Limoneen is de terpeenverbinding die citrusachtige aroma's levert, met name citroen- en sinaasappelnoten. Het is overvloedig aanwezig in Amerikaanse hopvariëteiten zoals Cascade en Centennial."
        }
      },
      {
        question: {
                  "en": "What characteristic distinguishes 'astringency' from 'bitterness' in beer tasting?",
                  "es": "¿Qué característica distingue la 'astringencia' de la 'amargura' en la cata de cerveza?",
                  "de": "Was unterscheidet 'Adstringenz' von 'Bitterkeit' bei der Bierdegustation?",
                  "nl": "Wat onderscheidt 'wrangheid' van 'bitterheid' bij bierproeven?"
        },
        options: [
        {
                  "en": "Astringency affects smell, bitterness affects taste",
                  "es": "La astringencia afecta el olfato, la amargura afecta el gusto",
                  "de": "Adstringenz beeinflusst den Geruch, Bitterkeit den Geschmack",
                  "nl": "Wrangheid beïnvloedt de geur, bitterheid de smaak"
        },
        {
                  "en": "Astringency is sweet, bitterness is sour",
                  "es": "La astringencia es dulce, la amargura es agria",
                  "de": "Adstringenz ist süß, Bitterkeit ist sauer",
                  "nl": "Wrangheid is zoet, bitterheid is zuur"
        },
        {
                  "en": "They are the same sensation",
                  "es": "Son la misma sensación",
                  "de": "Sie sind dieselbe Empfindung",
                  "nl": "Het zijn dezelfde sensaties"
        },
        {
                  "en": "Astringency is a mouthfeel sensation, bitterness is a taste",
                  "es": "La astringencia es una sensación en boca, la amargura es un sabor",
                  "de": "Adstringenz ist ein Mundgefühl, Bitterkeit ist ein Geschmack",
                  "nl": "Wrangheid is een mondgevoel, bitterheid is een smaak"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Astringency is a tactile mouthfeel sensation causing dryness and puckering, often from tannins. Bitterness is one of the five basic tastes detected by taste buds.",
                  "es": "La astringencia es una sensación táctil en boca que causa sequedad y fruncimiento, a menudo por taninos. La amargura es uno de los cinco sabores básicos detectados por las papilas gustativas.",
                  "de": "Adstringenz ist eine taktile Mundgefühlsempfindung, die Trockenheit und Zusammenziehen verursacht, oft durch Tannine. Bitterkeit ist einer der fünf Grundgeschmäcker, die von Geschmacksknospen erkannt werden.",
                  "nl": "Wrangheid is een tactiel mondgevoel dat droogheid en samentrekking veroorzaakt, vaak door tannines. Bitterheid is een van de vijf basissmaak die door smaakpapillen wordt gedetecteerd."
        }
      },
      {
        question: {
                  "en": "Which compound is primarily responsible for the 'wet cardboard' off-flavor in oxidized beer?",
                  "es": "¿Qué compuesto es principalmente responsable del sabor desagradable de 'cartón mojado' en la cerveza oxidada?",
                  "de": "Welche Verbindung ist hauptsächlich für den 'nasser Karton'-Fehlgeschmack in oxidiertem Bier verantwortlich?",
                  "nl": "Welke verbinding is voornamelijk verantwoordelijk voor de 'nat karton' bijsmaak in geoxideerd bier?"
        },
        options: [
        {
                  "en": "Trans-2-nonenal",
                  "es": "Trans-2-nonenal",
                  "de": "Trans-2-nonenal",
                  "nl": "Trans-2-nonenal"
        },
        {
                  "en": "Isoamyl acetate",
                  "es": "Acetato de isoamilo",
                  "de": "Isoamylacetat",
                  "nl": "Isoamylacetaat"
        },
        {
                  "en": "Acetaldehyde",
                  "es": "Acetaldehído",
                  "de": "Acetaldehyd",
                  "nl": "Acetaldehyde"
        },
        {
                  "en": "Hydrogen sulfide",
                  "es": "Sulfuro de hidrógeno",
                  "de": "Schwefelwasserstoff",
                  "nl": "Waterstofsulfide"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Trans-2-nonenal is formed during beer oxidation and produces the characteristic wet cardboard or papery off-flavor. It has an extremely low taste threshold, making it easily detectable.",
                  "es": "El trans-2-nonenal se forma durante la oxidación de la cerveza y produce el característico sabor desagradable de cartón mojado o papel. Tiene un umbral de sabor extremadamente bajo, haciéndolo fácilmente detectable.",
                  "de": "Trans-2-nonenal entsteht während der Bieroxidation und erzeugt den charakteristischen nassen Karton- oder Papier-Fehlgeschmack. Es hat eine extrem niedrige Geschmacksschwelle, wodurch es leicht erkennbar ist.",
                  "nl": "Trans-2-nonenal wordt gevormd tijdens bieroxidatie en produceert de karakteristieke nat karton of papierachtige bijsmaak. Het heeft een extreem lage smaakdrempel, waardoor het gemakkelijk te detecteren is."
        }
      },
      {
        question: {
                  "en": "What is the ideal serving temperature range for most lagers?",
                  "es": "¿Cuál es el rango de temperatura de servicio ideal para la mayoría de cervezas lager?",
                  "de": "Was ist der ideale Serviertemperaturbereich für die meisten Lagerbiere?",
                  "nl": "Wat is het ideale serveertemperatuurbereik voor de meeste lagers?"
        },
        options: [
        {
                  "en": "50-55°F (10-13°C)",
                  "es": "50-55°F (10-13°C)",
                  "de": "50-55°F (10-13°C)",
                  "nl": "50-55°F (10-13°C)"
        },
        {
                  "en": "32-35°F (0-2°C)",
                  "es": "32-35°F (0-2°C)",
                  "de": "32-35°F (0-2°C)",
                  "nl": "32-35°F (0-2°C)"
        },
        {
                  "en": "60-65°F (15-18°C)",
                  "es": "60-65°F (15-18°C)",
                  "de": "60-65°F (15-18°C)",
                  "nl": "60-65°F (15-18°C)"
        },
        {
                  "en": "38-45°F (3-7°C)",
                  "es": "38-45°F (3-7°C)",
                  "de": "38-45°F (3-7°C)",
                  "nl": "38-45°F (3-7°C)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Lagers are best served at 38-45°F (3-7°C). This temperature range allows the clean, crisp flavors to be appreciated while maintaining proper carbonation and mouthfeel.",
                  "es": "Las lagers se sirven mejor a 38-45°F (3-7°C). Este rango de temperatura permite apreciar los sabores limpios y crujientes mientras mantiene la carbonatación y sensación en boca adecuadas.",
                  "de": "Lagerbiere werden am besten bei 38-45°F (3-7°C) serviert. Dieser Temperaturbereich ermöglicht es, die sauberen, frischen Aromen zu schätzen, während die richtige Kohlensäure und das Mundgefühl erhalten bleiben.",
                  "nl": "Lagers worden het beste geserveerd bij 38-45°F (3-7°C). Dit temperatuurbereik maakt het mogelijk om de schone, frisse smaken te waarderen terwijl de juiste koolzuur en mondgevoel behouden blijven."
        }
      },
      {
        question: {
                  "en": "Which tasting glass shape is specifically designed to concentrate hop aromas?",
                  "es": "¿Qué forma de copa de cata está específicamente diseñada para concentrar los aromas del lúpulo?",
                  "de": "Welche Verkostungsglasform ist speziell dafür entwickelt, Hopfenaromen zu konzentrieren?",
                  "nl": "Welke proefglasvorm is specifiek ontworpen om hoparoma's te concentreren?"
        },
        options: [
        {
                  "en": "Weizen glass",
                  "es": "Copa weizen",
                  "de": "Weizenglas",
                  "nl": "Weizenglas"
        },
        {
                  "en": "Pilsner glass",
                  "es": "Copa pilsner",
                  "de": "Pilsnerglas",
                  "nl": "Pilsnerglas"
        },
        {
                  "en": "Tulip glass",
                  "es": "Copa tulipán",
                  "de": "Tulpenglas",
                  "nl": "Tulpglas"
        },
        {
                  "en": "IPA glass",
                  "es": "Copa IPA",
                  "de": "IPA-Glas",
                  "nl": "IPA-glas"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The IPA glass has a unique shape with ridges at the bottom that help release hop aromas and a wide rim that concentrates them. It was specifically designed for hop-forward beers.",
                  "es": "La copa IPA tiene una forma única con crestas en el fondo que ayudan a liberar los aromas del lúpulo y un borde ancho que los concentra. Fue específicamente diseñada para cervezas con mucho lúpulo.",
                  "de": "Das IPA-Glas hat eine einzigartige Form mit Rillen am Boden, die helfen, Hopfenaromen freizusetzen, und einen breiten Rand, der sie konzentriert. Es wurde speziell für hopfenbetonte Biere entwickelt.",
                  "nl": "Het IPA-glas heeft een unieke vorm met ribbels aan de onderkant die helpen hoparoma's vrij te maken en een brede rand die ze concentreert. Het werd specifiek ontworpen voor hop-gerichte bieren."
        }
      },
      {
        question: {
                  "en": "What is the primary cause of 'lightstruck' or 'skunky' flavor in beer?",
                  "es": "¿Cuál es la causa principal del sabor 'golpeado por la luz' o 'mofeta' en la cerveza?",
                  "de": "Was ist die Hauptursache für den 'lichtgeschädigten' oder 'stinktierhaften' Geschmack im Bier?",
                  "nl": "Wat is de hoofdoorzaak van 'lichtgetroffen' of 'stinkdierachtige' smaak in bier?"
        },
        options: [
        {
                  "en": "Bacterial infection",
                  "es": "Infección bacteriana",
                  "de": "Bakterielle Infektion",
                  "nl": "Bacteriële infectie"
        },
        {
                  "en": "Over-carbonation",
                  "es": "Exceso de carbonatación",
                  "de": "Überkohlensäure",
                  "nl": "Te veel koolzuur"
        },
        {
                  "en": "UV light breaking down hop compounds",
                  "es": "Luz UV descomponiendo compuestos del lúpulo",
                  "de": "UV-Licht, das Hopfenverbindungen abbaut",
                  "nl": "UV-licht dat hopverbindingen afbreekt"
        },
        {
                  "en": "High alcohol content",
                  "es": "Alto contenido de alcohol",
                  "de": "Hoher Alkoholgehalt",
                  "nl": "Hoog alcoholgehalte"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "UV light breaks down iso-alpha acids from hops, creating 3-methyl-2-butene-1-thiol, which has a skunky aroma. This is why beer bottles are often brown or green to filter UV light.",
                  "es": "La luz UV descompone los ácidos iso-alfa del lúpulo, creando 3-metil-2-buteno-1-tiol, que tiene un aroma de mofeta. Por eso las botellas de cerveza suelen ser marrones o verdes para filtrar la luz UV.",
                  "de": "UV-Licht baut Iso-Alpha-Säuren aus Hopfen ab und erzeugt 3-Methyl-2-buten-1-thiol, das ein stinktierhaften Aroma hat. Deshalb sind Bierflaschen oft braun oder grün, um UV-Licht zu filtern.",
                  "nl": "UV-licht breekt iso-alfazuren van hop af, waardoor 3-methyl-2-buteen-1-thiol ontstaat, dat een stinkdierachtig aroma heeft. Daarom zijn bierflesjes vaak bruin of groen om UV-licht te filteren."
        }
      },
      {
        question: {
                  "en": "Which mouthfeel characteristic is primarily influenced by protein content in beer?",
                  "es": "¿Qué característica de sensación en boca está principalmente influenciada por el contenido de proteínas en la cerveza?",
                  "de": "Welche Mundgefühlseigenschaft wird hauptsächlich durch den Proteingehalt im Bier beeinflusst?",
                  "nl": "Welke mondgevoel eigenschap wordt voornamelijk beïnvloed door het eiwitgehalte in bier?"
        },
        options: [
        {
                  "en": "Hop bitterness",
                  "es": "Amargura del lúpulo",
                  "de": "Hopfenbitterkeit",
                  "nl": "Hopbitterheid"
        },
        {
                  "en": "Carbonation level",
                  "es": "Nivel de carbonatación",
                  "de": "Kohlensäuregehalt",
                  "nl": "Koolzuurniveau"
        },
        {
                  "en": "Body and fullness",
                  "es": "Cuerpo y plenitud",
                  "de": "Körper und Fülle",
                  "nl": "Body en volheid"
        },
        {
                  "en": "Alcohol warmth",
                  "es": "Calidez del alcohol",
                  "de": "Alkoholwärme",
                  "nl": "Alcoholwarmte"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Proteins, particularly medium-weight proteins, contribute significantly to beer body and mouthfeel fullness. They create viscosity and a richer texture in the finished beer.",
                  "es": "Las proteínas, particularmente las proteínas de peso medio, contribuyen significativamente al cuerpo de la cerveza y la plenitud de sensación en boca. Crean viscosidad y una textura más rica en la cerveza terminada.",
                  "de": "Proteine, insbesondere mittelgewichtige Proteine, tragen erheblich zum Bierkörper und zur Mundgefühlsfülle bei. Sie erzeugen Viskosität und eine reichere Textur im fertigen Bier.",
                  "nl": "Eiwitten, vooral middelzware eiwitten, dragen aanzienlijk bij aan bierbody en mondgevoelvolheid. Ze creëren viscositeit en een rijkere textuur in het afgewerkte bier."
        }
      },
      {
        question: {
                  "en": "What sensory defect is characterized by a vinegar-like smell and taste?",
                  "es": "¿Qué defecto sensorial se caracteriza por un olor y sabor parecido al vinagre?",
                  "de": "Welcher sensorische Defekt ist durch einen essigähnlichen Geruch und Geschmack gekennzeichnet?",
                  "nl": "Welk zintuiglijk defect wordt gekenmerkt door een azijnachtige geur en smaak?"
        },
        options: [
        {
                  "en": "Acetic acid infection",
                  "es": "Infección por ácido acético",
                  "de": "Essigsäure-Infektion",
                  "nl": "Azijnzuur infectie"
        },
        {
                  "en": "Metallic contamination",
                  "es": "Contaminación metálica",
                  "de": "Metallische Kontamination",
                  "nl": "Metalen besmetting"
        },
        {
                  "en": "Phenolic off-flavor",
                  "es": "Sabor desagradable fenólico",
                  "de": "Phenolischer Fehlgeschmack",
                  "nl": "Fenolische bijsmaak"
        },
        {
                  "en": "Diacetyl contamination",
                  "es": "Contaminación por diacetilo",
                  "de": "Diacetyl-Kontamination",
                  "nl": "Diacetyl besmetting"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Acetic acid infection, typically from Acetobacter bacteria, produces a sharp vinegar-like aroma and taste. This occurs when beer is exposed to oxygen in the presence of these bacteria.",
                  "es": "La infección por ácido acético, típicamente de bacterias Acetobacter, produce un aroma y sabor agudo parecido al vinagre. Esto ocurre cuando la cerveza se expone al oxígeno en presencia de estas bacterias.",
                  "de": "Essigsäure-Infektion, typischerweise von Acetobacter-Bakterien, erzeugt ein scharfes essigähnliches Aroma und Geschmack. Dies tritt auf, wenn Bier in Gegenwart dieser Bakterien Sauerstoff ausgesetzt wird.",
                  "nl": "Azijnzuur infectie, doorgaans van Acetobacter bacteriën, produceert een scherp azijnachtig aroma en smaak. Dit treedt op wanneer bier wordt blootgesteld aan zuurstof in aanwezigheid van deze bacteriën."
        }
      },
      {
        question: {
                  "en": "Which hop-derived compound is responsible for the 'catty' or 'blackcurrant' aroma in some IPAs?",
                  "es": "¿Qué compuesto derivado del lúpulo es responsable del aroma 'gatuno' o de 'grosella negra' en algunas IPAs?",
                  "de": "Welche hopfenabgeleitete Verbindung ist für das 'katzige' oder 'schwarze Johannisbeeren'-Aroma in einigen IPAs verantwortlich?",
                  "nl": "Welke hop-afgeleide verbinding is verantwoordelijk voor het 'kattachtige' of 'zwarte bes' aroma in sommige IPA's?"
        },
        options: [
        {
                  "en": "Geraniol",
                  "es": "Geraniol",
                  "de": "Geraniol",
                  "nl": "Geraniol"
        },
        {
                  "en": "Caryophyllene",
                  "es": "Cariofileno",
                  "de": "Caryophyllen",
                  "nl": "Caryofylleen"
        },
        {
                  "en": "Farnesene",
                  "es": "Farneseno",
                  "de": "Farnesen",
                  "nl": "Farneseen"
        },
        {
                  "en": "4-mercapto-4-methylpentan-2-one (4MMP)",
                  "es": "4-mercapto-4-metilpentan-2-ona (4MMP)",
                  "de": "4-Mercapto-4-methylpentan-2-on (4MMP)",
                  "nl": "4-mercapto-4-methylpentan-2-on (4MMP)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "4-mercapto-4-methylpentan-2-one (4MMP) is a sulfur-containing compound that creates distinctive catty or blackcurrant aromas, particularly prominent in certain hop varieties and IPAs.",
                  "es": "4-mercapto-4-metilpentan-2-ona (4MMP) es un compuesto que contiene azufre que crea aromas distintivos gatunos o de grosella negra, particularmente prominente en ciertas variedades de lúpulo e IPAs.",
                  "de": "4-Mercapto-4-methylpentan-2-on (4MMP) ist eine schwefelhaltige Verbindung, die charakteristische katzige oder schwarze Johannisbeeren-Aromen erzeugt, besonders ausgeprägt in bestimmten Hopfensorten und IPAs.",
                  "nl": "4-mercapto-4-methylpentan-2-on (4MMP) is een zwavelverbinding die onderscheidende kattachtige of zwarte bes aroma's creëert, bijzonder prominent in bepaalde hopvariëteiten en IPA's."
        }
      },
      {
        question: {
                  "en": "What is the role of water in beer production?",
                  "es": "¿Cuál es el papel del agua en la producción de cerveza?",
                  "de": "Welche Rolle spielt Wasser in der Bierproduktion?",
                  "nl": "Wat is de rol van water bij bierproductie?"
        },
        options: [
        {
                  "en": "It creates carbonation",
                  "es": "Crea carbonatación",
                  "de": "Es erzeugt Kohlensäure",
                  "nl": "Het creëert koolzuur"
        },
        {
                  "en": "It dilutes the beer",
                  "es": "Diluye la cerveza",
                  "de": "Es verdünnt das Bier",
                  "nl": "Het verdunt het bier"
        },
        {
                  "en": "It adds color",
                  "es": "Añade color",
                  "de": "Es fügt Farbe hinzu",
                  "nl": "Het voegt kleur toe"
        },
        {
                  "en": "It forms the majority of beer composition",
                  "es": "Forma la mayoría de la composición de la cerveza",
                  "de": "Es bildet den größten Teil der Bierzusammensetzung",
                  "nl": "Het vormt het grootste deel van de biersamenstelling"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Water makes up about 90-95% of beer and its mineral content significantly affects the final product taste and quality.",
                  "es": "El agua constituye aproximadamente el 90-95% de la cerveza y su contenido mineral afecta significativamente el sabor y la calidad del producto final.",
                  "de": "Wasser macht etwa 90-95% des Bieres aus und sein Mineralgehalt beeinflusst den Geschmack und die Qualität des Endprodukts erheblich.",
                  "nl": "Water vormt ongeveer 90-95% van bier en het mineraalgehalte beïnvloedt de smaak en kwaliteit van het eindproduct aanzienlijk."
        }
      },
      {
        question: {
                  "en": "What does IBU stand for in beer terminology?",
                  "es": "¿Qué significa IBU en la terminología cervecera?",
                  "de": "Wofür steht IBU in der Bierterminologie?",
                  "nl": "Waar staat IBU voor in biertermen?"
        },
        options: [
        {
                  "en": "International Brewing Units",
                  "es": "Unidades Internacionales de Elaboración",
                  "de": "Internationale Braueinheiten",
                  "nl": "Internationale Brouwunits"
        },
        {
                  "en": "Independent Beer Union",
                  "es": "Unión de Cerveza Independiente",
                  "de": "Unabhängige Bierunion",
                  "nl": "Onafhankelijke Bierunie"
        },
        {
                  "en": "International Beer Union",
                  "es": "Unión Internacional de Cerveza",
                  "de": "Internationale Bierunion",
                  "nl": "Internationale Bierunie"
        },
        {
                  "en": "International Bitterness Units",
                  "es": "Unidades Internacionales de Amargor",
                  "de": "Internationale Bitterkeitseinheiten",
                  "nl": "International Bitterness Units"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "IBU stands for International Bitterness Units, a measurement scale for the bitterness of beer derived from hops.",
                  "es": "IBU significa Unidades Internacionales de Amargor, una escala de medición para el amargor de la cerveza derivada del lúpulo.",
                  "de": "IBU steht für Internationale Bitterkeitseinheiten, eine Messskala für die Bitterkeit von Bier, die vom Hopfen herrührt.",
                  "nl": "IBU staat voor International Bitterness Units, een meetschaal voor de bitterheid van bier afkomstig van hop."
        }
      },
      {
        question: {
                  "en": "What is the difference between ale and lager yeast fermentation temperatures?",
                  "es": "¿Cuál es la diferencia entre las temperaturas de fermentación de levadura ale y lager?",
                  "de": "Was ist der Unterschied zwischen Ale- und Lager-Hefe-Gärungstemperaturen?",
                  "nl": "Wat is het verschil tussen ale en lager gistfermentatietemperaturen?"
        },
        options: [
        {
                  "en": "Lagers ferment warmer, ales ferment cooler",
                  "es": "Las lagers fermentan más cálido, las ales más frío",
                  "de": "Lagers gären wärmer, Ales gären kühler",
                  "nl": "Lagers fermenteren warmer, ales fermenteren koeler"
        },
        {
                  "en": "Both ferment at the same temperature",
                  "es": "Ambas fermentan a la misma temperatura",
                  "de": "Beide gären bei derselben Temperatur",
                  "nl": "Beide fermenteren op dezelfde temperatuur"
        },
        {
                  "en": "Ales ferment warmer, lagers ferment cooler",
                  "es": "Las ales fermentan más cálido, las lagers más frío",
                  "de": "Ales gären wärmer, Lagers gären kühler",
                  "nl": "Ales fermenteren warmer, lagers fermenteren koeler"
        },
        {
                  "en": "Temperature does not matter",
                  "es": "La temperatura no importa",
                  "de": "Die Temperatur ist egal",
                  "nl": "Temperatuur maakt niet uit"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ale yeast ferments at warmer temperatures (15-24°C), while lager yeast ferments at cooler temperatures (7-13°C), creating distinct flavor profiles.",
                  "es": "La levadura ale fermenta a temperaturas más cálidas (15-24°C), mientras que la levadura lager fermenta a temperaturas más frías (7-13°C), creando perfiles de sabor distintos.",
                  "de": "Ale-Hefe gärt bei wärmeren Temperaturen (15-24°C), während Lager-Hefe bei kühleren Temperaturen (7-13°C) gärt und unterschiedliche Geschmacksprofile erzeugt.",
                  "nl": "Ale-gist fermenteert bij warmere temperaturen (15-24°C), terwijl lager-gist fermenteert bij koelere temperaturen (7-13°C), wat onderscheidende smaakprofielen creëert."
        }
      },
      {
        question: {
                  "en": "What is the purpose of the boil in beer brewing?",
                  "es": "¿Cuál es el propósito del hervido en la elaboración de cerveza?",
                  "de": "Was ist der Zweck des Kochens beim Bierbrauen?",
                  "nl": "Wat is het doel van het koken bij bierbrouwen?"
        },
        options: [
        {
                  "en": "To increase alcohol content",
                  "es": "Para aumentar el contenido de alcohol",
                  "de": "Um den Alkoholgehalt zu erhöhen",
                  "nl": "Om het alcoholgehalte te verhogen"
        },
        {
                  "en": "To add color only",
                  "es": "Solo para agregar color",
                  "de": "Nur um Farbe hinzuzufügen",
                  "nl": "Alleen om kleur toe te voegen"
        },
        {
                  "en": "To add carbonation",
                  "es": "Para agregar carbonatación",
                  "de": "Um Kohlensäure hinzuzufügen",
                  "nl": "Om koolzuur toe te voegen"
        },
        {
                  "en": "To sterilize and extract hop compounds",
                  "es": "Para esterilizar y extraer compuestos del lúpulo",
                  "de": "Um zu sterilisieren und Hopfenverbindungen zu extrahieren",
                  "nl": "Om te steriliseren en hopverbindingen te extraheren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The boil sterilizes the wort, extracts bittering compounds from hops, concentrates the wort, and drives off unwanted volatiles.",
                  "es": "El hervido esteriliza el mosto, extrae compuestos amargos del lúpulo, concentra el mosto y elimina volátiles no deseados.",
                  "de": "Das Kochen sterilisiert die Würze, extrahiert Bitterstoffe aus dem Hopfen, konzentriert die Würze und vertreibt unerwünschte flüchtige Stoffe.",
                  "nl": "Het koken steriliseert de wort, extraheert bittere verbindingen uit hop, concentreert de wort en verdrijft ongewenste vluchtige stoffen."
        }
      },
      {
        question: {
                  "en": "What is meant by original gravity in brewing?",
                  "es": "¿Qué se entiende por gravedad original en la elaboración?",
                  "de": "Was bedeutet Stammwürze beim Brauen?",
                  "nl": "Wat wordt bedoeld met oorspronkelijk soortelijk gewicht bij brouwen?"
        },
        options: [
        {
                  "en": "The pH level of water",
                  "es": "El nivel de pH del agua",
                  "de": "Der pH-Wert des Wassers",
                  "nl": "Het pH-niveau van water"
        },
        {
                  "en": "The density of wort before fermentation",
                  "es": "La densidad del mosto antes de la fermentación",
                  "de": "Die Dichte der Würze vor der Gärung",
                  "nl": "De dichtheid van wort voor fermentatie"
        },
        {
                  "en": "The temperature of fermentation",
                  "es": "La temperatura de fermentación",
                  "de": "Die Gärungstemperatur",
                  "nl": "De fermentatietemperatuur"
        },
        {
                  "en": "The weight of the brewing equipment",
                  "es": "El peso del equipo de elaboración",
                  "de": "Das Gewicht der Brauausrüstung",
                  "nl": "Het gewicht van de brouwapparatuur"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Original gravity measures the density of wort before fermentation, indicating the amount of fermentable sugars present that will determine alcohol content.",
                  "es": "La gravedad original mide la densidad del mosto antes de la fermentación, indicando la cantidad de azúcares fermentables presentes que determinarán el contenido de alcohol.",
                  "de": "Die Stammwürze misst die Dichte der Würze vor der Gärung und zeigt die Menge an fermentierbaren Zuckern an, die den Alkoholgehalt bestimmen werden.",
                  "nl": "Oorspronkelijk soortelijk gewicht meet de dichtheid van wort voor fermentatie, wat de hoeveelheid fermenteerbare suikers aangeeft die het alcoholgehalte zal bepalen."
        }
      },
      {
        question: {
                  "en": "What is krausening in beer production?",
                  "es": "¿Qué es el krausening en la producción de cerveza?",
                  "de": "Was ist Kräusening in der Bierproduktion?",
                  "nl": "Wat is krausening bij bierproductie?"
        },
        options: [
        {
                  "en": "Adding spices to beer",
                  "es": "Agregar especias a la cerveza",
                  "de": "Gewürze zum Bier hinzufügen",
                  "nl": "Specerijen aan bier toevoegen"
        },
        {
                  "en": "Filtering the beer",
                  "es": "Filtrar la cerveza",
                  "de": "Das Bier filtern",
                  "nl": "Het bier filteren"
        },
        {
                  "en": "Adding actively fermenting wort for carbonation",
                  "es": "Agregar mosto en fermentación activa para carbonatación",
                  "de": "Aktiv gärende Würze für Kohlensäure hinzufügen",
                  "nl": "Actief fermenterende wort toevoegen voor koolzuur"
        },
        {
                  "en": "Aging in wooden barrels",
                  "es": "Envejecer en barricas de madera",
                  "de": "Reifung in Holzfässern",
                  "nl": "Rijpen in houten vaten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Krausening involves adding a small amount of actively fermenting wort to finished beer for natural carbonation and conditioning.",
                  "es": "El krausening implica agregar una pequeña cantidad de mosto en fermentación activa a la cerveza terminada para carbonatación y acondicionamiento natural.",
                  "de": "Kräusening beinhaltet das Hinzufügen einer kleinen Menge aktiv gärender Würze zum fertigen Bier für natürliche Kohlensäure und Konditionierung.",
                  "nl": "Krausening houdt in dat een kleine hoeveelheid actief fermenterende wort aan afgewerkt bier wordt toegevoegd voor natuurlijke koolzuur en conditionering."
        }
      },
      {
        question: {
                  "en": "What does ABV measure in beer?",
                  "es": "¿Qué mide el ABV en la cerveza?",
                  "de": "Was misst ABV im Bier?",
                  "nl": "Wat meet ABV in bier?"
        },
        options: [
        {
                  "en": "Alcohol By Volume",
                  "es": "Alcohol por Volumen",
                  "de": "Alkohol nach Volumen",
                  "nl": "Alcohol By Volume"
        },
        {
                  "en": "Absolute Beer Volume",
                  "es": "Volumen Absoluto de Cerveza",
                  "de": "Absolutes Biervolumen",
                  "nl": "Absoluut Biervolume"
        },
        {
                  "en": "Average Beer Value",
                  "es": "Valor Promedio de Cerveza",
                  "de": "Durchschnittlicher Bierwert",
                  "nl": "Gemiddelde Bierwaarde"
        },
        {
                  "en": "Aroma and Bitterness Value",
                  "es": "Valor de Aroma y Amargor",
                  "de": "Aroma- und Bitterkeitswert",
                  "nl": "Aroma en Bitterheidswaarde"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "ABV stands for Alcohol By Volume, measuring the percentage of alcohol content in beer.",
                  "es": "ABV significa Alcohol por Volumen, midiendo el porcentaje de contenido de alcohol en la cerveza.",
                  "de": "ABV steht für Alkohol nach Volumen und misst den Prozentsatz des Alkoholgehalts im Bier.",
                  "nl": "ABV staat voor Alcohol By Volume, het meten van het percentage alcoholgehalte in bier."
        }
      },
      {
        question: {
                  "en": "What are adjuncts in brewing?",
                  "es": "¿Qué son los adjuntos en la elaboración?",
                  "de": "Was sind Zusatzstoffe beim Brauen?",
                  "nl": "Wat zijn adjuncten bij het brouwen?"
        },
        options: [
        {
                  "en": "Cleaning chemicals",
                  "es": "Químicos de limpieza",
                  "de": "Reinigungschemikalien",
                  "nl": "Schoonmaakchemicaliën"
        },
        {
                  "en": "Different yeast strains",
                  "es": "Diferentes cepas de levadura",
                  "de": "Verschiedene Hefestämme",
                  "nl": "Verschillende giststammen"
        },
        {
                  "en": "Unmalted grains or fermentable sugars",
                  "es": "Granos no malteados o azúcares fermentables",
                  "de": "Ungemälzte Körner oder fermentierbare Zucker",
                  "nl": "Niet-gemout graan of fermenteerbare suikers"
        },
        {
                  "en": "Additional brewing equipment",
                  "es": "Equipo de elaboración adicional",
                  "de": "Zusätzliche Brauausrüstung",
                  "nl": "Extra brouwapparatuur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Adjuncts are unmalted grains or other fermentable sugars added to beer as supplements to malted barley, such as corn, rice, or sugar.",
                  "es": "Los adjuntos son granos no malteados u otros azúcares fermentables agregados a la cerveza como suplementos a la cebada malteada, como maíz, arroz o azúcar.",
                  "de": "Zusatzstoffe sind ungemälzte Körner oder andere fermentierbare Zucker, die dem Bier als Ergänzung zu gemälzter Gerste hinzugefügt werden, wie Mais, Reis oder Zucker.",
                  "nl": "Adjuncten zijn niet-gemout graan of andere fermenteerbare suikers die aan bier worden toegevoegd als aanvulling op gemout gerst, zoals mais, rijst of suiker."
        }
      },
      {
        question: {
                  "en": "What is the function of finings in beer production?",
                  "es": "¿Cuál es la función de los clarificantes en la producción de cerveza?",
                  "de": "Was ist die Funktion von Schönungsmitteln in der Bierproduktion?",
                  "nl": "Wat is de functie van klaringsmiddelen bij bierproductie?"
        },
        options: [
        {
                  "en": "To increase carbonation",
                  "es": "Para aumentar la carbonatación",
                  "de": "Um die Kohlensäure zu erhöhen",
                  "nl": "Om koolzuur te verhogen"
        },
        {
                  "en": "To clarify beer by removing particles",
                  "es": "Para clarificar la cerveza eliminando partículas",
                  "de": "Um Bier durch Entfernen von Partikeln zu klären",
                  "nl": "Om bier te helderen door deeltjes te verwijderen"
        },
        {
                  "en": "To add flavor",
                  "es": "Para agregar sabor",
                  "de": "Um Geschmack hinzuzufügen",
                  "nl": "Om smaak toe te voegen"
        },
        {
                  "en": "To preserve the beer",
                  "es": "Para conservar la cerveza",
                  "de": "Um das Bier zu konservieren",
                  "nl": "Om het bier te bewaren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Finings are clarifying agents added to beer to help proteins and yeast cells clump together and settle out, producing clearer beer.",
                  "es": "Los clarificantes son agentes clarificadores agregados a la cerveza para ayudar a que las proteínas y células de levadura se aglomeren y se asienten, produciendo cerveza más clara.",
                  "de": "Schönungsmittel sind Klärmittel, die dem Bier zugesetzt werden, um Proteine und Hefezellen zusammenzuballen und abzusetzen, wodurch klareres Bier entsteht.",
                  "nl": "Klaringsmiddelen zijn helderingsmiddelen die aan bier worden toegevoegd om eiwitten en gistcellen te laten samenklonteren en bezinken, wat helderder bier produceert."
        }
      },
      {
        question: {
                  "en": "What is attenuation in brewing?",
                  "es": "¿Qué es la atenuación en la elaboración?",
                  "de": "Was ist Vergärungsgrad beim Brauen?",
                  "nl": "Wat is attenuatie bij brouwen?"
        },
        options: [
        {
                  "en": "The addition of hops",
                  "es": "La adición de lúpulo",
                  "de": "Die Zugabe von Hopfen",
                  "nl": "De toevoeging van hop"
        },
        {
                  "en": "The filtration process",
                  "es": "El proceso de filtración",
                  "de": "Der Filtrationsprozess",
                  "nl": "Het filterproces"
        },
        {
                  "en": "The cooling of wort",
                  "es": "El enfriamiento del mosto",
                  "de": "Das Kühlen der Würze",
                  "nl": "Het afkoelen van wort"
        },
        {
                  "en": "The reduction of sugars during fermentation",
                  "es": "La reducción de azúcares durante la fermentación",
                  "de": "Die Reduzierung von Zuckern während der Gärung",
                  "nl": "De vermindering van suikers tijdens fermentatie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Attenuation refers to the degree to which yeast converts fermentable sugars into alcohol and CO2, measured as the difference between original and final gravity.",
                  "es": "La atenuación se refiere al grado en que la levadura convierte azúcares fermentables en alcohol y CO2, medido como la diferencia entre la gravedad original y final.",
                  "de": "Vergärungsgrad bezieht sich auf den Grad, zu dem Hefe fermentierbare Zucker in Alkohol und CO2 umwandelt, gemessen als Differenz zwischen Stammwürze und Endvergärung.",
                  "nl": "Attenuatie verwijst naar de mate waarin gist fermenteerbare suikers omzet in alcohol en CO2, gemeten als het verschil tussen oorspronkelijk en finaal soortelijk gewicht."
        }
      },
      {
        question: {
                  "en": "What is the primary difference between top-fermenting and bottom-fermenting yeast?",
                  "es": "¿Cuál es la diferencia principal entre levadura de fermentación alta y fermentación baja?",
                  "de": "Was ist der Hauptunterschied zwischen obergäriger und untergäriger Hefe?",
                  "nl": "Wat is het belangrijkste verschil tussen bovengistende en ondergistende gist?"
        },
        options: [
        {
                  "en": "They are the same type of yeast",
                  "es": "Son el mismo tipo de levadura",
                  "de": "Sie sind die gleiche Art von Hefe",
                  "nl": "Het zijn hetzelfde soort gist"
        },
        {
                  "en": "Top-fermenting yeast rises to the surface, bottom-fermenting settles at the bottom during fermentation",
                  "es": "La levadura de fermentación alta sube a la superficie, la de fermentación baja se asienta en el fondo durante la fermentación",
                  "de": "Obergärige Hefe steigt an die Oberfläche, untergärige setzt sich während der Gärung am Boden ab",
                  "nl": "Bovengistende gist stijgt naar het oppervlak, ondergistende zakt naar de bodem tijdens fermentatie"
        },
        {
                  "en": "Bottom-fermenting produces fruit flavors",
                  "es": "La fermentación baja produce sabores afrutados",
                  "de": "Untergärig produziert fruchtige Aromen",
                  "nl": "Ondergisting produceert fruit smaken"
        },
        {
                  "en": "Top-fermenting requires colder temperatures",
                  "es": "La fermentación alta requiere temperaturas más frías",
                  "de": "Obergärig benötigt kältere Temperaturen",
                  "nl": "Bovengisting vereist koudere temperaturen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Top-fermenting yeast (Saccharomyces cerevisiae) rises to the top during fermentation at warmer temperatures, producing ales. Bottom-fermenting yeast (Saccharomyces pastorianus) settles at the bottom at cooler temperatures, producing lagers.",
                  "es": "La levadura de fermentación alta (Saccharomyces cerevisiae) sube a la superficie durante la fermentación a temperaturas más cálidas, produciendo ales. La levadura de fermentación baja (Saccharomyces pastorianus) se asienta en el fondo a temperaturas más frías, produciendo lagers.",
                  "de": "Obergärige Hefe (Saccharomyces cerevisiae) steigt während der Gärung bei wärmeren Temperaturen an die Oberfläche und produziert Ales. Untergärige Hefe (Saccharomyces pastorianus) setzt sich bei kühleren Temperaturen am Boden ab und produziert Lagers.",
                  "nl": "Bovengistende gist (Saccharomyces cerevisiae) stijgt naar de top tijdens fermentatie bij warmere temperaturen, produceert ales. Ondergistende gist (Saccharomyces pastorianus) zakt naar de bodem bij koelere temperaturen, produceert lagers."
        }
      },
      {
        question: {
                  "en": "What causes 'head retention' in beer?",
                  "es": "¿Qué causa la 'retención de espuma' en la cerveza?",
                  "de": "Was verursacht 'Schaumhaltbarkeit' im Bier?",
                  "nl": "Wat veroorzaakt 'schuimbehoud' in bier?"
        },
        options: [
        {
                  "en": "Adding gelatin to beer",
                  "es": "Agregar gelatina a la cerveza",
                  "de": "Gelatine zum Bier hinzufügen",
                  "nl": "Gelatine aan bier toevoegen"
        },
        {
                  "en": "Cold storage temperatures",
                  "es": "Temperaturas de almacenamiento frío",
                  "de": "Kalte Lagertemperaturen",
                  "nl": "Koude opslagtemperaturen"
        },
        {
                  "en": "Proteins and hop compounds creating surface tension",
                  "es": "Proteínas y compuestos del lúpulo creando tensión superficial",
                  "de": "Proteine und Hopfenverbindungen, die Oberflächenspannung erzeugen",
                  "nl": "Eiwitten en hopverbindingen die oppervlaktespanning creëren"
        },
        {
                  "en": "High alcohol content only",
                  "es": "Solo alto contenido de alcohol",
                  "de": "Nur hoher Alkoholgehalt",
                  "nl": "Alleen hoog alcoholgehalte"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Head retention is primarily caused by proteins from malt and iso-alpha acids from hops, which create stable foam by forming a protective layer around CO2 bubbles and increasing surface tension.",
                  "es": "La retención de espuma es causada principalmente por proteínas de la malta y ácidos iso-alfa del lúpulo, que crean espuma estable formando una capa protectora alrededor de las burbujas de CO2 y aumentando la tensión superficial.",
                  "de": "Schaumhaltbarkeit wird hauptsächlich durch Proteine aus Malz und Iso-Alpha-Säuren aus Hopfen verursacht, die stabilen Schaum bilden, indem sie eine Schutzschicht um CO2-Blasen bilden und die Oberflächenspannung erhöhen.",
                  "nl": "Schuimbehoud wordt voornamelijk veroorzaakt door eiwitten uit mout en iso-alfazuren uit hop, die stabiel schuim creëren door een beschermende laag rond CO2-bellen te vormen en oppervlaktespanning te verhogen."
        }
      },
      {
        question: {
                  "en": "What is the Reinheitsgebot (German Beer Purity Law)?",
                  "es": "¿Qué es el Reinheitsgebot (Ley de Pureza de la Cerveza Alemana)?",
                  "de": "Was ist das Reinheitsgebot (Deutsches Bierreinheitsgesetz)?",
                  "nl": "Wat is het Reinheitsgebot (Duitse Bierzuiverheidswet)?"
        },
        options: [
        {
                  "en": "A law requiring beer to contain only water, barley, and hops (yeast added later)",
                  "es": "Una ley que requiere que la cerveza contenga solo agua, cebada y lúpulo (levadura agregada después)",
                  "de": "Ein Gesetz, das vorschreibt, dass Bier nur Wasser, Gerste und Hopfen enthält (Hefe später hinzugefügt)",
                  "nl": "Een wet die vereist dat bier alleen water, gerst en hop bevat (gist later toegevoegd)"
        },
        {
                  "en": "A beer tasting certification",
                  "es": "Una certificación de cata de cerveza",
                  "de": "Eine Bierdegustationszertifizierung",
                  "nl": "Een bierproevencertificaat"
        },
        {
                  "en": "A brewing temperature guideline",
                  "es": "Una guía de temperatura de elaboración",
                  "de": "Eine Brautemperatur-Richtlinie",
                  "nl": "Een brouwtemperatuurrichtlijn"
        },
        {
                  "en": "A beer glass design standard",
                  "es": "Un estándar de diseño de copa de cerveza",
                  "de": "Ein Bierglasdesign-Standard",
                  "nl": "Een bierglasontwerp standaard"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Reinheitsgebot, enacted in 1516, is one of the oldest food quality regulations still in use. It originally limited beer ingredients to water, barley, and hops. Yeast was unknown at the time and later recognized as the fourth ingredient.",
                  "es": "El Reinheitsgebot, promulgado en 1516, es una de las regulaciones de calidad alimentaria más antiguas aún en uso. Originalmente limitaba los ingredientes de la cerveza a agua, cebada y lúpulo. La levadura era desconocida en ese momento y más tarde se reconoció como el cuarto ingrediente.",
                  "de": "Das Reinheitsgebot, erlassen 1516, ist eine der ältesten noch in Gebrauch befindlichen Lebensmittelqualitätsverordnungen. Es begrenzte ursprünglich Bierzutaten auf Wasser, Gerste und Hopfen. Hefe war zu dieser Zeit unbekannt und wurde später als vierte Zutat anerkannt.",
                  "nl": "Het Reinheitsgebot, uitgevaardigd in 1516, is een van de oudste nog gebruikte voedselkwaliteitsregels. Het beperkte oorspronkelijk bieringrediënten tot water, gerst en hop. Gist was toen onbekend en werd later erkend als het vierde ingrediënt."
        }
      },
      {
        question: {
                  "en": "What is the difference between dry hopping and kettle hopping?",
                  "es": "¿Cuál es la diferencia entre dry hopping y kettle hopping?",
                  "de": "Was ist der Unterschied zwischen Trockenhopfung und Kesselhopfung?",
                  "nl": "Wat is het verschil tussen droog hoppen en ketel hoppen?"
        },
        options: [
        {
                  "en": "Dry hopping adds hops during/after fermentation for aroma; kettle hopping adds hops during boil for bitterness",
                  "es": "Dry hopping agrega lúpulo durante/después de la fermentación para aroma; kettle hopping agrega lúpulo durante el hervido para amargor",
                  "de": "Trockenhopfung fügt Hopfen während/nach der Gärung für Aroma hinzu; Kesselhopfung fügt Hopfen während des Kochens für Bitterkeit hinzu",
                  "nl": "Droog hoppen voegt hop toe tijdens/na fermentatie voor aroma; ketel hoppen voegt hop toe tijdens koken voor bitterheid"
        },
        {
                  "en": "They are the same process",
                  "es": "Son el mismo proceso",
                  "de": "Sie sind der gleiche Prozess",
                  "nl": "Het zijn hetzelfde proces"
        },
        {
                  "en": "Dry hopping uses pellets, kettle hopping uses whole hops",
                  "es": "Dry hopping usa pellets, kettle hopping usa lúpulo entero",
                  "de": "Trockenhopfung verwendet Pellets, Kesselhopfung verwendet ganzen Hopfen",
                  "nl": "Droog hoppen gebruikt pellets, ketel hoppen gebruikt hele hop"
        },
        {
                  "en": "Kettle hopping is only for ales",
                  "es": "Kettle hopping es solo para ales",
                  "de": "Kesselhopfung ist nur für Ales",
                  "nl": "Ketel hoppen is alleen voor ales"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Kettle hopping involves adding hops during the wort boil, extracting bitterness and some aroma. Dry hopping adds hops during or after fermentation at lower temperatures, preserving volatile aroma compounds without adding much bitterness.",
                  "es": "Kettle hopping implica agregar lúpulo durante el hervido del mosto, extrayendo amargor y algo de aroma. Dry hopping agrega lúpulo durante o después de la fermentación a temperaturas más bajas, preservando compuestos aromáticos volátiles sin agregar mucho amargor.",
                  "de": "Kesselhopfung beinhaltet das Hinzufügen von Hopfen während des Würzekochens, wodurch Bitterkeit und etwas Aroma extrahiert werden. Trockenhopfung fügt Hopfen während oder nach der Gärung bei niedrigeren Temperaturen hinzu, wodurch flüchtige Aromaverbindungen erhalten bleiben, ohne viel Bitterkeit hinzuzufügen.",
                  "nl": "Ketel hoppen houdt in dat hop wordt toegevoegd tijdens het koken van de wort, waarbij bitterheid en wat aroma wordt geëxtraheerd. Droog hoppen voegt hop toe tijdens of na fermentatie bij lagere temperaturen, waarbij vluchtige aromaverbindingen behouden blijven zonder veel bitterheid toe te voegen."
        }
      },
      {
        question: {
                  "en": "What is 'wort'?",
                  "es": "¿Qué es el 'mosto'?",
                  "de": "Was ist 'Würze'?",
                  "nl": "Wat is 'wort'?"
        },
        options: [
        {
                  "en": "The liquid extracted from mashing grain, before fermentation",
                  "es": "El líquido extraído del macerado de granos, antes de la fermentación",
                  "de": "Die aus dem Maischen von Getreide gewonnene Flüssigkeit vor der Gärung",
                  "nl": "De vloeistof geëxtraheerd uit het maischen van graan, voor fermentatie"
        },
        {
                  "en": "The foam on top of beer",
                  "es": "La espuma en la parte superior de la cerveza",
                  "de": "Der Schaum oben auf dem Bier",
                  "nl": "Het schuim bovenop bier"
        },
        {
                  "en": "A type of hop variety",
                  "es": "Un tipo de variedad de lúpulo",
                  "de": "Eine Hopfensorte",
                  "nl": "Een soort hopvariëteit"
        },
        {
                  "en": "Finished beer before bottling",
                  "es": "Cerveza terminada antes del embotellado",
                  "de": "Fertiges Bier vor dem Abfüllen",
                  "nl": "Afgewerkt bier voor botteling"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Wort is the sweet liquid extracted from the mashing process, containing dissolved sugars from malted grains. After boiling with hops and cooling, it's fermented by yeast to produce beer.",
                  "es": "El mosto es el líquido dulce extraído del proceso de macerado, que contiene azúcares disueltos de granos malteados. Después de hervir con lúpulo y enfriar, es fermentado por levadura para producir cerveza.",
                  "de": "Würze ist die süße Flüssigkeit, die aus dem Maischprozess gewonnen wird und gelöste Zucker aus gemälzten Körnern enthält. Nach dem Kochen mit Hopfen und Abkühlen wird sie durch Hefe fermentiert, um Bier zu produzieren.",
                  "nl": "Wort is de zoete vloeistof geëxtraheerd uit het maischproces, bevattend opgeloste suikers van gemout graan. Na koken met hop en afkoelen, wordt het gefermenteerd door gist om bier te produceren."
        }
      },
      {
        question: {
                  "en": "What is the purpose of lagering?",
                  "es": "¿Cuál es el propósito del lagering?",
                  "de": "Was ist der Zweck des Lagerns?",
                  "nl": "Wat is het doel van lagering?"
        },
        options: [
        {
                  "en": "Cold conditioning beer to improve flavor clarity and smoothness",
                  "es": "Acondicionamiento en frío de la cerveza para mejorar la claridad y suavidad del sabor",
                  "de": "Kaltkonditionierung von Bier zur Verbesserung von Geschmacksklarheit und Geschmeidigkeit",
                  "nl": "Koude conditionering van bier om smaak helderheid en gladheid te verbeteren"
        },
        {
                  "en": "Adding extra hops for aroma",
                  "es": "Agregar lúpulo extra para aroma",
                  "de": "Extra Hopfen für Aroma hinzufügen",
                  "nl": "Extra hop toevoegen voor aroma"
        },
        {
                  "en": "Heating beer to kill bacteria",
                  "es": "Calentar cerveza para matar bacterias",
                  "de": "Bier erhitzen um Bakterien zu töten",
                  "nl": "Bier verwarmen om bacteriën te doden"
        },
        {
                  "en": "Increasing alcohol content",
                  "es": "Aumentar el contenido de alcohol",
                  "de": "Alkoholgehalt erhöhen",
                  "nl": "Alcoholgehalte verhogen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Lagering is a cold storage period (typically 32-50°F or 0-10°C) lasting weeks to months, during which beer clarifies as yeast and proteins settle, flavors mellow and mature, and off-flavors reduce, resulting in a clean, smooth beer.",
                  "es": "El lagering es un período de almacenamiento en frío (típicamente 32-50°F o 0-10°C) que dura semanas a meses, durante el cual la cerveza se clarifica a medida que la levadura y las proteínas se asientan, los sabores se suavizan y maduran, y los sabores desagradables se reducen, resultando en una cerveza limpia y suave.",
                  "de": "Lagern ist eine Kaltspeicherperiode (typischerweise 32-50°F oder 0-10°C) von Wochen bis Monaten, während der sich Bier klärt, wenn Hefe und Proteine sich setzen, Aromen reifen und unerwünschte Aromen reduziert werden, was zu einem sauberen, geschmeidigen Bier führt.",
                  "nl": "Lagering is een koude opslagperiode (typisch 32-50°F of 0-10°C) van weken tot maanden, waarin bier helder wordt naarmate gist en eiwitten bezinken, smaken verzachten en rijpen, en bijsmaken verminderen, resulterend in een schoon, glad bier."
        }
      },
      {
        question: {
                  "en": "What is the Lovibond scale used for in brewing?",
                  "es": "¿Para qué se usa la escala Lovibond en la elaboración?",
                  "de": "Wofür wird die Lovibond-Skala beim Brauen verwendet?",
                  "nl": "Waarvoor wordt de Lovibond schaal gebruikt bij brouwen?"
        },
        options: [
        {
                  "en": "Measuring hop bitterness",
                  "es": "Medir el amargor del lúpulo",
                  "de": "Messen der Hopfenbitterkeit",
                  "nl": "Hopbitterheid meten"
        },
        {
                  "en": "Measuring water pH",
                  "es": "Medir el pH del agua",
                  "de": "Messen des Wasser-pH",
                  "nl": "Water pH meten"
        },
        {
                  "en": "Measuring beer color",
                  "es": "Medir el color de la cerveza",
                  "de": "Messen der Bierfarbe",
                  "nl": "Bierkleur meten"
        },
        {
                  "en": "Measuring alcohol content",
                  "es": "Medir el contenido de alcohol",
                  "de": "Messen des Alkoholgehalts",
                  "nl": "Alcoholgehalte meten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Lovibond scale (or SRM - Standard Reference Method in the US) measures beer color from pale straw (2°L) to black (40+°L). It's determined by the types and amounts of malts used in brewing.",
                  "es": "La escala Lovibond (o SRM - Método de Referencia Estándar en EE.UU.) mide el color de la cerveza desde paja pálida (2°L) hasta negro (40+°L). Se determina por los tipos y cantidades de maltas utilizadas en la elaboración.",
                  "de": "Die Lovibond-Skala (oder SRM - Standard Reference Method in den USA) misst Bierfarbe von blassem Stroh (2°L) bis schwarz (40+°L). Sie wird durch Arten und Mengen der beim Brauen verwendeten Malze bestimmt.",
                  "nl": "De Lovibond schaal (of SRM - Standard Reference Method in de VS) meet bierkleur van bleek stro (2°L) tot zwart (40+°L). Het wordt bepaald door de soorten en hoeveelheden mout gebruikt bij brouwen."
        }
      },
      {
        question: {
                  "en": "What causes beer to become 'light-struck' or develop a skunky aroma when exposed to light?",
                  "es": "¿Qué causa que la cerveza se vuelva 'golpeada por la luz' o desarrolle un aroma a mofeta cuando se expone a la luz?",
                  "de": "Was verursacht, dass Bier 'lichtgeschädigt' wird oder ein stinktierhaftes Aroma entwickelt, wenn es Licht ausgesetzt wird?",
                  "nl": "Wat veroorzaakt dat bier 'lichtgetroffen' wordt of een stinkdierachtig aroma ontwikkelt wanneer blootgesteld aan licht?"
        },
        options: [
        {
                  "en": "Water evaporating from the beer",
                  "es": "Agua evaporándose de la cerveza",
                  "de": "Wasser verdunstet aus dem Bier",
                  "nl": "Water verdampt uit het bier"
        },
        {
                  "en": "Alcohol oxidizing in sunlight",
                  "es": "Alcohol oxidándose bajo la luz del sol",
                  "de": "Alkohol oxidiert im Sonnenlicht",
                  "nl": "Alcohol oxideert in zonlicht"
        },
        {
                  "en": "Yeast dying from UV exposure",
                  "es": "Levadura muriendo por exposición UV",
                  "de": "Hefe stirbt durch UV-Belichtung",
                  "nl": "Gist sterft door UV-blootstelling"
        },
        {
                  "en": "Photochemical reaction breaking down hop compounds into sulfur compounds",
                  "es": "Reacción fotoquímica que descompone compuestos del lúpulo en compuestos de azufre",
                  "de": "Photochemische Reaktion, die Hopfenverbindungen in Schwefelverbindungen abbaut",
                  "nl": "Fotochemische reactie die hopverbindingen afbreekt tot zwavelverbindingen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Light (especially UV and blue wavelengths) causes a photochemical reaction with iso-alpha acids from hops, producing 3-methyl-2-butene-1-thiol (MBT), a sulfur compound identical to skunk spray. Brown bottles filter ~98% of damaging light, green ~20%, clear bottles offer no protection.",
                  "es": "La luz (especialmente UV y longitudes de onda azules) causa una reacción fotoquímica con ácidos iso-alfa del lúpulo, produciendo 3-metil-2-buteno-1-tiol (MBT), un compuesto de azufre idéntico al spray de mofeta. Las botellas marrones filtran ~98% de luz dañina, verdes ~20%, botellas transparentes no ofrecen protección.",
                  "de": "Licht (besonders UV und blaue Wellenlängen) verursacht eine photochemische Reaktion mit Iso-Alpha-Säuren aus Hopfen, die 3-Methyl-2-buten-1-thiol (MBT) produziert, eine Schwefelverbindung identisch mit Stinktier-Spray. Braune Flaschen filtern ~98% des schädlichen Lichts, grüne ~20%, klare Flaschen bieten keinen Schutz.",
                  "nl": "Licht (vooral UV en blauwe golflengten) veroorzaakt een fotochemische reactie met iso-alfazuren van hop, produceert 3-methyl-2-buteen-1-thiol (MBT), een zwavelverbinding identiek aan stinkdierspray. Bruine flessen filteren ~98% van schadelijk licht, groene ~20%, heldere flessen bieden geen bescherming."
        }
      },
      {
        question: {
                  "en": "What is 'chill haze' in beer?",
                  "es": "¿Qué es la 'turbidez por frío' en la cerveza?",
                  "de": "Was ist 'Kühltrübung' im Bier?",
                  "nl": "Wat is 'koude troebeling' in bier?"
        },
        options: [
        {
                  "en": "Ice crystals forming in frozen beer",
                  "es": "Cristales de hielo formándose en cerveza congelada",
                  "de": "Eiskristalle bilden sich in gefrorenem Bier",
                  "nl": "IJskristallen vormen zich in bevroren bier"
        },
        {
                  "en": "Hop particles suspended in cold beer",
                  "es": "Partículas de lúpulo suspendidas en cerveza fría",
                  "de": "Hopfenpartikel schweben in kaltem Bier",
                  "nl": "Hopdeeltjes zwevend in koud bier"
        },
        {
                  "en": "Yeast settling at cold temperatures",
                  "es": "Levadura asentándose a temperaturas frías",
                  "de": "Hefe setzt sich bei kalten Temperaturen ab",
                  "nl": "Gist bezinkt bij koude temperaturen"
        },
        {
                  "en": "Cloudiness that appears when beer is cold, caused by protein-polyphenol complexes",
                  "es": "Turbidez que aparece cuando la cerveza está fría, causada por complejos proteína-polifenol",
                  "de": "Trübung, die auftritt, wenn Bier kalt ist, verursacht durch Protein-Polyphenol-Komplexe",
                  "nl": "Troebeling die verschijnt wanneer bier koud is, veroorzaakt door eiwit-polyfenol complexen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Chill haze occurs when proteins from malt bind with polyphenols (tannins) from hops and malt at cold temperatures, forming visible complexes. The haze disappears when beer warms up. It's a cosmetic issue, not affecting flavor, but brewers often use finings or filtration to prevent it.",
                  "es": "La turbidez por frío ocurre cuando las proteínas de la malta se unen con polifenoles (taninos) del lúpulo y malta a temperaturas frías, formando complejos visibles. La turbidez desaparece cuando la cerveza se calienta. Es un problema cosmético, que no afecta el sabor, pero los cerveceros a menudo usan clarificantes o filtración para prevenirlo.",
                  "de": "Kühltrübung tritt auf, wenn Proteine aus Malz sich mit Polyphenolen (Tanninen) aus Hopfen und Malz bei kalten Temperaturen verbinden und sichtbare Komplexe bilden. Die Trübung verschwindet, wenn Bier sich erwärmt. Es ist ein kosmetisches Problem, das den Geschmack nicht beeinflusst, aber Brauer verwenden oft Schönungsmittel oder Filtration, um es zu verhindern.",
                  "nl": "Koude troebeling treedt op wanneer eiwitten van mout binden met polyfenolen (tannines) van hop en mout bij koude temperaturen, vormend zichtbare complexen. De troebeling verdwijnt wanneer bier opwarmt. Het is een cosmetisch probleem, beïnvloedt smaak niet, maar brouwers gebruiken vaak klaringsmiddelen of filtratie om het te voorkomen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of mashing in beer production?",
                  "es": "¿Cuál es el propósito del macerado en la producción de cerveza?",
                  "de": "Was ist der Zweck des Maischens in der Bierproduktion?",
                  "nl": "Wat is het doel van maischen bij bierproductie?"
        },
        options: [
        {
                  "en": "Filtering finished beer",
                  "es": "Filtrar cerveza terminada",
                  "de": "Fertiges Bier filtern",
                  "nl": "Afgewerkt bier filteren"
        },
        {
                  "en": "Fermenting beer with yeast",
                  "es": "Fermentar cerveza con levadura",
                  "de": "Bier mit Hefe fermentieren",
                  "nl": "Bier fermenteren met gist"
        },
        {
                  "en": "Converting starches in grain to fermentable sugars using enzymes",
                  "es": "Convertir almidones en granos a azúcares fermentables usando enzimas",
                  "de": "Umwandlung von Stärken in Getreide zu fermentierbaren Zuckern mit Enzymen",
                  "nl": "Zetmeel in graan omzetten naar fermenteerbare suikers met enzymen"
        },
        {
                  "en": "Boiling hops to extract bitterness",
                  "es": "Hervir lúpulo para extraer amargor",
                  "de": "Hopfen kochen um Bitterkeit zu extrahieren",
                  "nl": "Hop koken om bitterheid te extraheren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Mashing is the process of mixing crushed malted grains with hot water (typically 145-158°F/63-70°C) to activate enzymes (primarily alpha and beta amylase) that break down complex starches into fermentable sugars. The resulting liquid is wort, which is then boiled with hops and fermented.",
                  "es": "El macerado es el proceso de mezclar granos malteados triturados con agua caliente (típicamente 145-158°F/63-70°C) para activar enzimas (principalmente alfa y beta amilasa) que descomponen almidones complejos en azúcares fermentables. El líquido resultante es mosto, que luego se hierve con lúpulo y se fermenta.",
                  "de": "Maischen ist der Prozess des Mischens von zerkleinerten gemälzten Körnern mit heißem Wasser (typischerweise 145-158°F/63-70°C), um Enzyme (hauptsächlich Alpha- und Beta-Amylase) zu aktivieren, die komplexe Stärken in fermentierbare Zucker abbauen. Die resultierende Flüssigkeit ist Würze, die dann mit Hopfen gekocht und fermentiert wird.",
                  "nl": "Maischen is het proces van het mengen van gemalen gemout graan met heet water (typisch 145-158°F/63-70°C) om enzymen (voornamelijk alfa en bèta amylase) te activeren die complexe zetmeel afbreken tot fermenteerbare suikers. De resulterende vloeistof is wort, die vervolgens gekookt wordt met hop en gefermenteerd."
        }
      },
      {
        question: {
                  "en": "What is the difference between a session beer and a regular beer?",
                  "es": "¿Cuál es la diferencia entre una cerveza session y una cerveza regular?",
                  "de": "Was ist der Unterschied zwischen einem Session-Bier und einem normalen Bier?",
                  "nl": "Wat is het verschil tussen een session bier en een normaal bier?"
        },
        options: [
        {
                  "en": "Session beers are always dark colored",
                  "es": "Las cervezas session son siempre de color oscuro",
                  "de": "Session-Biere sind immer dunkel gefärbt",
                  "nl": "Session bieren zijn altijd donker gekleurd"
        },
        {
                  "en": "Session beers are only served in winter",
                  "es": "Las cervezas session solo se sirven en invierno",
                  "de": "Session-Biere werden nur im Winter serviert",
                  "nl": "Session bieren worden alleen in de winter geserveerd"
        },
        {
                  "en": "Session beers have more carbonation",
                  "es": "Las cervezas session tienen más carbonatación",
                  "de": "Session-Biere haben mehr Kohlensäure",
                  "nl": "Session bieren hebben meer koolzuur"
        },
        {
                  "en": "Session beers have lower alcohol content (typically <5% ABV) for extended drinking",
                  "es": "Las cervezas session tienen menor contenido de alcohol (típicamente <5% ABV) para beber prolongado",
                  "de": "Session-Biere haben niedrigeren Alkoholgehalt (typischerweise <5% ABV) für längeres Trinken",
                  "nl": "Session bieren hebben lager alcoholgehalte (typisch <5% ABV) voor langdurig drinken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Session beers are characterized by lower alcohol content (generally 3-5% ABV), allowing for multiple servings ('a session') without excessive intoxication. They typically maintain full flavor despite lower alcohol, achieved through careful malt and hop selection, and are highly drinkable and refreshing.",
                  "es": "Las cervezas session se caracterizan por menor contenido de alcohol (generalmente 3-5% ABV), permitiendo múltiples porciones ('una sesión') sin intoxicación excesiva. Típicamente mantienen sabor completo a pesar del menor alcohol, logrado mediante selección cuidadosa de malta y lúpulo, y son altamente bebibles y refrescantes.",
                  "de": "Session-Biere zeichnen sich durch niedrigeren Alkoholgehalt (allgemein 3-5% ABV) aus, was mehrere Portionen ('eine Session') ohne übermäßige Trunkenheit ermöglicht. Sie behalten typischerweise vollen Geschmack trotz niedrigerem Alkohol, erreicht durch sorgfältige Malz- und Hopfenauswahl, und sind hochgradig trinkbar und erfrischend.",
                  "nl": "Session bieren worden gekenmerkt door lager alcoholgehalte (algemeen 3-5% ABV), wat meerdere porties ('een sessie') mogelijk maakt zonder overmatige dronkenschap. Ze behouden typisch volle smaak ondanks lager alcohol, bereikt door zorgvuldige mout en hop selectie, en zijn zeer drinkbaar en verfrissend."
        }
      },
      {
        question: {
                  "en": "What is 'noble hop' and what distinguishes it from other hop varieties?",
                  "es": "¿Qué es el 'lúpulo noble' y qué lo distingue de otras variedades de lúpulo?",
                  "de": "Was ist 'Edelhopfen' und was unterscheidet ihn von anderen Hopfensorten?",
                  "nl": "Wat is 'edele hop' en wat onderscheidt het van andere hopvariëteiten?"
        },
        options: [
        {
                  "en": "Hops grown only in England",
                  "es": "Lúpulo cultivado solo en Inglaterra",
                  "de": "Hopfen nur in England angebaut",
                  "nl": "Hop alleen geteeld in Engeland"
        },
        {
                  "en": "High alpha acid hops from America",
                  "es": "Lúpulos de alto ácido alfa de América",
                  "de": "Hoch-Alpha-Säure-Hopfen aus Amerika",
                  "nl": "Hoge alfa zuur hop uit Amerika"
        },
        {
                  "en": "Genetically modified hop varieties",
                  "es": "Variedades de lúpulo genéticamente modificadas",
                  "de": "Genetisch veränderte Hopfensorten",
                  "nl": "Genetisch gemodificeerde hopvariëteiten"
        },
        {
                  "en": "Traditional European hops (Hallertau, Saaz, Tettnang, Spalt) with low bitterness, refined aroma, used in classic lagers and pilsners",
                  "es": "Lúpulos europeos tradicionales (Hallertau, Saaz, Tettnang, Spalt) con bajo amargor, aroma refinado, usados en lagers y pilsners clásicos",
                  "de": "Traditionelle europäische Hopfen (Hallertau, Saaz, Tettnang, Spalt) mit niedriger Bitterkeit, raffiniertem Aroma, verwendet in klassischen Lagers und Pilsnern",
                  "nl": "Traditionele Europese hop (Hallertau, Saaz, Tettnang, Spalt) met lage bitterheid, verfijnd aroma, gebruikt in klassieke lagers en pilsners"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Noble hops refer to four traditional European varieties: Hallertauer Mittelfrüh (Germany), Saaz (Czech Republic), Tettnanger (Germany), and Spalt (Germany). They're characterized by low alpha acid content (3-5%), delicate floral/spicy/earthy aromas, and mild bitterness, making them ideal for classic European lagers and pilsners.",
                  "es": "Los lúpulos nobles se refieren a cuatro variedades europeas tradicionales: Hallertauer Mittelfrüh (Alemania), Saaz (República Checa), Tettnanger (Alemania) y Spalt (Alemania). Se caracterizan por bajo contenido de ácido alfa (3-5%), aromas delicados florales/especiados/terrosos y amargor suave, haciéndolos ideales para lagers y pilsners europeos clásicos.",
                  "de": "Edelhopfen bezieht sich auf vier traditionelle europäische Sorten: Hallertauer Mittelfrüh (Deutschland), Saaz (Tschechische Republik), Tettnanger (Deutschland) und Spalt (Deutschland). Sie zeichnen sich durch niedrigen Alpha-Säure-Gehalt (3-5%), zarte blumige/würzige/erdige Aromen und milde Bitterkeit aus, was sie ideal für klassische europäische Lagers und Pilsner macht.",
                  "nl": "Edele hop verwijst naar vier traditionele Europese variëteiten: Hallertauer Mittelfrüh (Duitsland), Saaz (Tsjechië), Tettnanger (Duitsland) en Spalt (Duitsland). Ze worden gekenmerkt door laag alfa zuurgehalte (3-5%), delicate bloemige/kruidige/aardse aroma's en milde bitterheid, wat ze ideaal maakt voor klassieke Europese lagers en pilsners."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a 'whirlpool' or 'hop stand' in brewing?",
                  "es": "¿Cuál es el propósito de un 'whirlpool' o 'hop stand' en la elaboración?",
                  "de": "Was ist der Zweck eines 'Whirlpools' oder 'Hop Stands' beim Brauen?",
                  "nl": "Wat is het doel van een 'whirlpool' of 'hop stand' bij brouwen?"
        },
        options: [
        {
                  "en": "Spinning wort to remove hop particles only",
                  "es": "Girar mosto para eliminar solo partículas de lúpulo",
                  "de": "Würze drehen um nur Hopfenpartikel zu entfernen",
                  "nl": "Wort draaien om alleen hopdeeltjes te verwijderen"
        },
        {
                  "en": "Steeping hops in hot wort after boil to extract aromatic oils while minimizing bitterness",
                  "es": "Remojar lúpulo en mosto caliente después del hervido para extraer aceites aromáticos mientras se minimiza el amargor",
                  "de": "Hopfen in heißer Würze nach dem Kochen einweichen, um aromatische Öle zu extrahieren und Bitterkeit zu minimieren",
                  "nl": "Hop weken in hete wort na koken om aromatische oliën te extraheren terwijl bitterheid wordt geminimaliseerd"
        },
        {
                  "en": "Adding yeast to fermentation",
                  "es": "Agregar levadura para fermentación",
                  "de": "Hefe zur Gärung hinzufügen",
                  "nl": "Gist toevoegen voor fermentatie"
        },
        {
                  "en": "Cooling wort rapidly",
                  "es": "Enfriar mosto rápidamente",
                  "de": "Würze schnell kühlen",
                  "nl": "Wort snel afkoelen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A whirlpool or hop stand involves adding hops to wort at temperatures below boiling (typically 170-190°F/77-88°C) and letting them steep for 15-60 minutes. This extracts volatile aromatic oils and flavor compounds while isomerizing fewer alpha acids, resulting in intense hop aroma with less bitterness than boil additions.",
                  "es": "Un whirlpool o hop stand implica agregar lúpulo al mosto a temperaturas por debajo del punto de ebullición (típicamente 170-190°F/77-88°C) y dejarlos remojar durante 15-60 minutos. Esto extrae aceites aromáticos volátiles y compuestos de sabor mientras isomeriza menos ácidos alfa, resultando en intenso aroma de lúpulo con menos amargor que adiciones de hervido.",
                  "de": "Ein Whirlpool oder Hop Stand beinhaltet das Hinzufügen von Hopfen zu Würze bei Temperaturen unter dem Siedepunkt (typischerweise 170-190°F/77-88°C) und 15-60 Minuten einweichen lassen. Dies extrahiert flüchtige aromatische Öle und Geschmacksverbindungen, während weniger Alpha-Säuren isomerisiert werden, was intensives Hopfenaroma mit weniger Bitterkeit als Kochzugaben ergibt.",
                  "nl": "Een whirlpool of hop stand houdt in dat hop wordt toegevoegd aan wort bij temperaturen onder kookpunt (typisch 170-190°F/77-88°C) en 15-60 minuten laten weken. Dit extraheert vluchtige aromatische oliën en smaakverbindingen terwijl minder alfa zuren isomeriseren, resulterend in intens hoparoma met minder bitterheid dan kook toevoegingen."
        }
      },
      {
        question: {
                  "en": "What is 'bottle conditioning' in beer production?",
                  "es": "¿Qué es el 'acondicionamiento en botella' en la producción de cerveza?",
                  "de": "Was ist 'Flaschengärung' in der Bierproduktion?",
                  "nl": "Wat is 'fles conditionering' bij bierproductie?"
        },
        options: [
        {
                  "en": "Force carbonating with CO2 tanks",
                  "es": "Carbonatación forzada con tanques de CO2",
                  "de": "Zwangskarbonisierung mit CO2-Tanks",
                  "nl": "Geforceerde koolzuur met CO2 tanks"
        },
        {
                  "en": "Storing beer at room temperature",
                  "es": "Almacenar cerveza a temperatura ambiente",
                  "de": "Bier bei Raumtemperatur lagern",
                  "nl": "Bier opslaan bij kamertemperatuur"
        },
        {
                  "en": "Cleaning bottles before filling",
                  "es": "Limpiar botellas antes de llenar",
                  "de": "Flaschen vor dem Befüllen reinigen",
                  "nl": "Flessen schoonmaken voor vullen"
        },
        {
                  "en": "Adding priming sugar and yeast to bottles for natural carbonation through secondary fermentation",
                  "es": "Agregar azúcar de cebado y levadura a botellas para carbonatación natural mediante fermentación secundaria",
                  "de": "Zucker und Hefe zu Flaschen hinzufügen für natürliche Kohlensäure durch Nachgärung",
                  "nl": "Toevoegen van priming suiker en gist aan flessen voor natuurlijke koolzuur door secundaire fermentatie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Bottle conditioning is the process of adding a small amount of fermentable sugar (priming sugar) to beer just before bottling. Residual yeast in the bottle ferments this sugar, producing CO2 that naturally carbonates the beer and creating additional flavor complexity as the beer continues to mature in the bottle.",
                  "es": "El acondicionamiento en botella es el proceso de agregar una pequeña cantidad de azúcar fermentable (azúcar de cebado) a la cerveza justo antes del embotellado. La levadura residual en la botella fermenta este azúcar, produciendo CO2 que carbonata naturalmente la cerveza y creando complejidad de sabor adicional a medida que la cerveza continúa madurando en la botella.",
                  "de": "Flaschengärung ist der Prozess, bei dem kurz vor dem Abfüllen eine kleine Menge fermentierbaren Zuckers (Speisezucker) zum Bier hinzugefügt wird. Resthefe in der Flasche fermentiert diesen Zucker, produziert CO2, das das Bier natürlich karbonisiert, und erzeugt zusätzliche Geschmackskomplexität, während das Bier in der Flasche weiter reift.",
                  "nl": "Fles conditionering is het proces van het toevoegen van een kleine hoeveelheid fermenteerbare suiker (priming suiker) aan bier net voor botteling. Resterende gist in de fles fermenteert deze suiker, produceert CO2 dat het bier natuurlijk koolzuur geeft en creëert extra smaak complexiteit naarmate het bier blijft rijpen in de fles."
        }
      },
      {
        question: {
                  "en": "What is 'alpha acid' in hops and why is it important?",
                  "es": "¿Qué es el 'ácido alfa' en el lúpulo y por qué es importante?",
                  "de": "Was ist 'Alpha-Säure' in Hopfen und warum ist sie wichtig?",
                  "nl": "Wat is 'alfa zuur' in hop en waarom is het belangrijk?"
        },
        options: [
        {
                  "en": "The sugar content of hops",
                  "es": "El contenido de azúcar del lúpulo",
                  "de": "Der Zuckergehalt von Hopfen",
                  "nl": "Het suikergehalte van hop"
        },
        {
                  "en": "A preservative added to beer",
                  "es": "Un conservante agregado a la cerveza",
                  "de": "Ein Konservierungsmittel, das Bier hinzugefügt wird",
                  "nl": "Een conserveermiddel toegevoegd aan bier"
        },
        {
                  "en": "A type of yeast nutrient",
                  "es": "Un tipo de nutriente de levadura",
                  "de": "Eine Art Hefenährstoff",
                  "nl": "Een soort gistvoedsel"
        },
        {
                  "en": "The primary bittering compound in hops that isomerizes during boiling to create beer bitterness",
                  "es": "El compuesto amargante principal en el lúpulo que se isomeriza durante el hervido para crear amargor en la cerveza",
                  "de": "Die primäre Bitterverbindung in Hopfen, die während des Kochens isomerisiert, um Bierbitterkeit zu erzeugen",
                  "nl": "De primaire bittere verbinding in hop die isomeriseert tijdens koken om bierbitterheid te creëren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Alpha acids (humulones) are the primary bittering compounds in hops, measured as a percentage of hop weight. During boiling, alpha acids undergo isomerization, converting to iso-alpha acids which provide beer's characteristic bitterness. High-alpha hops (10-15%+) are used for bittering, while low-alpha noble hops (3-6%) are used for aroma.",
                  "es": "Los ácidos alfa (humulonas) son los compuestos amargantes principales en el lúpulo, medidos como porcentaje del peso del lúpulo. Durante el hervido, los ácidos alfa sufren isomerización, convirtiéndose en ácidos iso-alfa que proporcionan el amargor característico de la cerveza. Los lúpulos de alto alfa (10-15%+) se usan para amargar, mientras que los lúpulos nobles de bajo alfa (3-6%) se usan para aroma.",
                  "de": "Alpha-Säuren (Humulone) sind die primären Bitterverbindungen in Hopfen, gemessen als Prozentsatz des Hopfengewichts. Während des Kochens durchlaufen Alpha-Säuren Isomerisierung und wandeln sich in Iso-Alpha-Säuren um, die die charakteristische Bitterkeit des Bieres liefern. Hoch-Alpha-Hopfen (10-15%+) werden zum Bittern verwendet, während niedrig-Alpha-Edelhopfen (3-6%) für Aroma verwendet werden.",
                  "nl": "Alfa zuren (humulonen) zijn de primaire bittere verbindingen in hop, gemeten als percentage van hopgewicht. Tijdens koken ondergaan alfa zuren isomerisatie, converterend naar iso-alfa zuren die karakteristieke bitterheid van bier leveren. Hoge-alfa hop (10-15%+) wordt gebruikt voor bitteren, terwijl lage-alfa edele hop (3-6%) wordt gebruikt voor aroma."
        }
      },
      {
        question: {
                  "en": "What is the difference between forced carbonation and natural carbonation?",
                  "es": "¿Cuál es la diferencia entre carbonatación forzada y carbonatación natural?",
                  "de": "Was ist der Unterschied zwischen Zwangskarbonisierung und natürlicher Karbonisierung?",
                  "nl": "Wat is het verschil tussen geforceerde koolzuur en natuurlijke koolzuur?"
        },
        options: [
        {
                  "en": "Natural carbonation uses chemicals",
                  "es": "La carbonatación natural usa químicos",
                  "de": "Natürliche Karbonisierung verwendet Chemikalien",
                  "nl": "Natuurlijke koolzuur gebruikt chemicaliën"
        },
        {
                  "en": "Forced carbonation takes longer",
                  "es": "La carbonatación forzada toma más tiempo",
                  "de": "Zwangskarbonisierung dauert länger",
                  "nl": "Geforceerde koolzuur duurt langer"
        },
        {
                  "en": "Both methods are identical",
                  "es": "Ambos métodos son idénticos",
                  "de": "Beide Methoden sind identisch",
                  "nl": "Beide methoden zijn identiek"
        },
        {
                  "en": "Forced uses external CO2 under pressure; natural uses yeast fermentation to produce CO2",
                  "es": "Forzada usa CO2 externo bajo presión; natural usa fermentación de levadura para producir CO2",
                  "de": "Zwangs verwendet externes CO2 unter Druck; natürlich verwendet Hefegärung zur CO2-Produktion",
                  "nl": "Geforceerd gebruikt extern CO2 onder druk; natuurlijk gebruikt gistfermentatie om CO2 te produceren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Forced carbonation involves injecting CO2 gas into beer under pressure (typically in kegs), achieving desired carbonation in hours to days. Natural carbonation uses residual yeast fermenting priming sugar in sealed containers (bottle/cask conditioning), producing CO2 over 1-3 weeks. Natural carbonation often creates finer, more persistent bubbles and develops additional flavors.",
                  "es": "La carbonatación forzada implica inyectar gas CO2 en cerveza bajo presión (típicamente en barriles), logrando carbonatación deseada en horas a días. La carbonatación natural usa levadura residual fermentando azúcar de cebado en contenedores sellados (acondicionamiento en botella/barril), produciendo CO2 durante 1-3 semanas. La carbonatación natural a menudo crea burbujas más finas y persistentes y desarrolla sabores adicionales.",
                  "de": "Zwangskarbonisierung beinhaltet das Einspritzen von CO2-Gas in Bier unter Druck (typischerweise in Fässern), erreicht gewünschte Karbonisierung in Stunden bis Tagen. Natürliche Karbonisierung verwendet Resthefe, die Speisezucker in versiegelten Behältern (Flaschen-/Fassgärung) fermentiert und CO2 über 1-3 Wochen produziert. Natürliche Karbonisierung erzeugt oft feinere, beständigere Blasen und entwickelt zusätzliche Aromen.",
                  "nl": "Geforceerde koolzuur houdt in dat CO2 gas wordt geïnjecteerd in bier onder druk (typisch in vaten), bereikt gewenste koolzuur in uren tot dagen. Natuurlijke koolzuur gebruikt resterende gist die priming suiker fermenteert in verzegelde containers (fles/vat conditionering), produceert CO2 gedurende 1-3 weken. Natuurlijke koolzuur creëert vaak fijnere, persistentere bellen en ontwikkelt extra smaken."
        }
      },
      {
        question: {
                  "en": "What is 'malt extract' and when is it used in brewing?",
                  "es": "¿Qué es el 'extracto de malta' y cuándo se usa en la elaboración?",
                  "de": "Was ist 'Malzextrakt' und wann wird es beim Brauen verwendet?",
                  "nl": "Wat is 'moutextract' en wanneer wordt het gebruikt bij brouwen?"
        },
        options: [
        {
                  "en": "Yeast nutrient supplement",
                  "es": "Suplemento nutricional de levadura",
                  "de": "Hefenährstoffergänzung",
                  "nl": "Gistvoedsel supplement"
        },
        {
                  "en": "A type of hop product",
                  "es": "Un tipo de producto de lúpulo",
                  "de": "Eine Art Hopfenprodukt",
                  "nl": "Een soort hopproduct"
        },
        {
                  "en": "Concentrated sugars from mashed grain, used by extract brewers to skip the mashing process",
                  "es": "Azúcares concentrados de granos macerados, usados por cerveceros de extracto para omitir el proceso de macerado",
                  "de": "Konzentrierte Zucker aus gemaischt Getreide, verwendet von Extraktbrauern um den Maischprozess zu überspringen",
                  "nl": "Geconcentreerde suikers van gemaischt graan, gebruikt door extract brouwers om het maischproces over te slaan"
        },
        {
                  "en": "Bottling sugar only",
                  "es": "Solo azúcar de embotellado",
                  "de": "Nur Abfüllzucker",
                  "nl": "Alleen botteling suiker"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Malt extract is concentrated wort produced by mashing malted grains, then evaporating water to create syrup (liquid malt extract - LME) or powder (dried malt extract - DME). Extract brewing allows brewers to skip the mashing step, making brewing simpler and faster while still producing quality beer, though with less control over the grain bill.",
                  "es": "El extracto de malta es mosto concentrado producido al macerar granos malteados, luego evaporar agua para crear jarabe (extracto de malta líquido - LME) o polvo (extracto de malta seco - DME). La elaboración con extracto permite a los cerveceros omitir el paso de macerado, haciendo la elaboración más simple y rápida mientras sigue produciendo cerveza de calidad, aunque con menos control sobre la receta de granos.",
                  "de": "Malzextrakt ist konzentrierte Würze, die durch Maischen gemälzter Körner produziert wird, dann Wasser verdampfen um Sirup (flüssiger Malzextrakt - LME) oder Pulver (getrockneter Malzextrakt - DME) zu erzeugen. Extraktbrauen ermöglicht Brauern, den Maischeschritt zu überspringen, macht Brauen einfacher und schneller, während immer noch Qualitätsbier produziert wird, obwohl mit weniger Kontrolle über die Schüttung.",
                  "nl": "Moutextract is geconcentreerde wort geproduceerd door gemalen gemout graan te maischen, dan water te verdampen om siroop (vloeibaar moutextract - LME) of poeder (gedroogd moutextract - DME) te creëren. Extract brouwen stelt brouwers in staat om de maischstap over te slaan, maakt brouwen eenvoudiger en sneller terwijl nog steeds kwaliteitsbier wordt geproduceerd, hoewel met minder controle over het graan recept."
        }
      },
      {
        question: {
                  "en": "What causes 'ester' flavors in beer?",
                  "es": "¿Qué causa sabores de 'éster' en la cerveza?",
                  "de": "Was verursacht 'Ester'-Aromen im Bier?",
                  "nl": "Wat veroorzaakt 'ester' smaken in bier?"
        },
        options: [
        {
                  "en": "Yeast metabolism during fermentation producing fruity compounds",
                  "es": "Metabolismo de levadura durante fermentación produciendo compuestos afrutados",
                  "de": "Hefestoffwechsel während Gärung produziert fruchtige Verbindungen",
                  "nl": "Gist metabolisme tijdens fermentatie produceert fruitige verbindingen"
        },
        {
                  "en": "Adding fruit to beer",
                  "es": "Agregar fruta a la cerveza",
                  "de": "Frucht zum Bier hinzufügen",
                  "nl": "Fruit toevoegen aan bier"
        },
        {
                  "en": "Hop oils exclusively",
                  "es": "Aceites de lúpulo exclusivamente",
                  "de": "Hopfenöle ausschließlich",
                  "nl": "Hopoliën uitsluitend"
        },
        {
                  "en": "Water mineral content",
                  "es": "Contenido mineral del agua",
                  "de": "Wasserineraliengehalt",
                  "nl": "Water mineraal inhoud"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Esters are aromatic compounds produced by yeast during fermentation when alcohol molecules combine with organic acids. They create fruity and floral flavors (banana, apple, pear, strawberry). Ester production is influenced by fermentation temperature (warmer = more esters), yeast strain, wort composition, and oxygen levels. Ales typically have more pronounced ester character than lagers.",
                  "es": "Los ésteres son compuestos aromáticos producidos por levadura durante fermentación cuando moléculas de alcohol se combinan con ácidos orgánicos. Crean sabores afrutados y florales (plátano, manzana, pera, fresa). La producción de ésteres está influenciada por temperatura de fermentación (más cálido = más ésteres), cepa de levadura, composición del mosto y niveles de oxígeno. Las ales típicamente tienen carácter de éster más pronunciado que las lagers.",
                  "de": "Ester sind aromatische Verbindungen, die von Hefe während Gärung produziert werden, wenn Alkoholmoleküle sich mit organischen Säuren verbinden. Sie erzeugen fruchtige und blumige Aromen (Banane, Apfel, Birne, Erdbeere). Esterproduktion wird beeinflusst durch Gärungstemperatur (wärmer = mehr Ester), Hefestamm, Würzezusammensetzung und Sauerstoffniveaus. Ales haben typischerweise ausgeprägtere Estercharakter als Lagers.",
                  "nl": "Esters zijn aromatische verbindingen geproduceerd door gist tijdens fermentatie wanneer alcoholmoleculen combineren met organische zuren. Ze creëren fruitige en bloemen smaken (banaan, appel, peer, aardbei). Ester productie wordt beïnvloed door fermentatie temperatuur (warmer = meer esters), giststam, wort samenstelling en zuurstof niveaus. Ales hebben typisch meer uitgesproken ester karakter dan lagers."
        }
      },
      {
        question: {
                  "en": "What is 'flocculation' in brewing?",
                  "es": "¿Qué es la 'floculación' en la elaboración?",
                  "de": "Was ist 'Flockung' beim Brauen?",
                  "nl": "Wat is 'flocculatie' bij brouwen?"
        },
        options: [
        {
                  "en": "Adding hops to boiling wort",
                  "es": "Agregar lúpulo al mosto hirviendo",
                  "de": "Hopfen zu kochender Würze hinzufügen",
                  "nl": "Hop toevoegen aan kokende wort"
        },
        {
                  "en": "The tendency of yeast cells to clump together and settle out of suspension after fermentation",
                  "es": "La tendencia de las células de levadura a agruparse y asentarse fuera de suspensión después de la fermentación",
                  "de": "Die Tendenz von Hefezellen, sich zusammenzuballen und nach der Gärung aus der Suspension abzusetzen",
                  "nl": "De neiging van gistcellen om samen te klonteren en uit suspensie te bezinken na fermentatie"
        },
        {
                  "en": "Foam formation on beer",
                  "es": "Formación de espuma en la cerveza",
                  "de": "Schaumbildung auf Bier",
                  "nl": "Schuimvorming op bier"
        },
        {
                  "en": "Protein coagulation during boil",
                  "es": "Coagulación de proteínas durante el hervido",
                  "de": "Proteinkoagulation während des Kochens",
                  "nl": "Eiwit coagulatie tijdens koken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Flocculation is the process where yeast cells aggregate and settle to the bottom (or rise to the top) after fermentation completes. High-flocculating yeasts (English ales) settle quickly, creating clear beer. Low-flocculating yeasts (hefeweizen, Belgian) remain in suspension longer, creating hazy beer. Medium flocculation is common in American ale strains.",
                  "es": "La floculación es el proceso donde las células de levadura se agregan y se asientan en el fondo (o suben a la superficie) después de que la fermentación se completa. Las levaduras de alta floculación (ales inglesas) se asientan rápidamente, creando cerveza clara. Las levaduras de baja floculación (hefeweizen, belga) permanecen en suspensión más tiempo, creando cerveza turbia. La floculación media es común en cepas de ale americanas.",
                  "de": "Flockung ist der Prozess, bei dem Hefezellen sich aggregieren und nach Abschluss der Gärung absetzen (oder aufsteigen). Hoch-flockende Hefen (englische Ales) setzen sich schnell ab und erzeugen klares Bier. Niedrig-flockende Hefen (Hefeweizen, Belgisch) bleiben länger in Suspension und erzeugen trübes Bier. Mittlere Flockung ist bei amerikanischen Ale-Stämmen üblich.",
                  "nl": "Flocculatie is het proces waarbij gistcellen aggregeren en bezinken naar de bodem (of stijgen naar de top) nadat fermentatie voltooid is. Hoog-flocculerende gisten (Engelse ales) bezinken snel, creërend helder bier. Laag-flocculerende gisten (hefeweizen, Belgisch) blijven langer in suspensie, creërend troebel bier. Gemiddelde flocculatie is gebruikelijk bij Amerikaanse ale stammen."
        }
      },
      {
        question: {
                  "en": "What is the difference between 'ale malt' and 'lager malt'?",
                  "es": "¿Cuál es la diferencia entre 'malta ale' y 'malta lager'?",
                  "de": "Was ist der Unterschied zwischen 'Ale-Malz' und 'Lager-Malz'?",
                  "nl": "Wat is het verschil tussen 'ale mout' en 'lager mout'?"
        },
        options: [
        {
                  "en": "Lager malt is kilned at lower temperatures for lighter color and cleaner flavor; ale malt at higher temperatures for more color and flavor",
                  "es": "La malta lager se tuesta a temperaturas más bajas para color más claro y sabor más limpio; malta ale a temperaturas más altas para más color y sabor",
                  "de": "Lager-Malz wird bei niedrigeren Temperaturen gedarrt für hellere Farbe und saubereren Geschmack; Ale-Malz bei höheren Temperaturen für mehr Farbe und Geschmack",
                  "nl": "Lager mout wordt gedroogd bij lagere temperaturen voor lichtere kleur en schonere smaak; ale mout bij hogere temperaturen voor meer kleur en smaak"
        },
        {
                  "en": "They are identical malts",
                  "es": "Son maltas idénticas",
                  "de": "Sie sind identische Malze",
                  "nl": "Het zijn identieke mouten"
        },
        {
                  "en": "Lager malt contains more hops",
                  "es": "Malta lager contiene más lúpulo",
                  "de": "Lager-Malz enthält mehr Hopfen",
                  "nl": "Lager mout bevat meer hop"
        },
        {
                  "en": "Ale malt is darker roasted only",
                  "es": "Malta ale solo está más tostada",
                  "de": "Ale-Malz ist nur dunkler geröstet",
                  "nl": "Ale mout is alleen donkerder geroosterd"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The primary difference is kilning temperature: Lager (Pilsner) malt is kilned at lower temperatures (around 176-185°F/80-85°C), producing very pale color (1.5-2°L) and neutral, clean flavor ideal for crisp lagers. Ale (Pale) malt is kilned at slightly higher temperatures (around 185-194°F/85-90°C), creating slightly more color (2.5-3.5°L) and richer, maltier flavor suitable for ales.",
                  "es": "La diferencia principal es la temperatura de tostado: La malta lager (Pilsner) se tuesta a temperaturas más bajas (alrededor de 176-185°F/80-85°C), produciendo color muy pálido (1.5-2°L) y sabor neutral y limpio ideal para lagers crujientes. La malta ale (Pale) se tuesta a temperaturas ligeramente más altas (alrededor de 185-194°F/85-90°C), creando un poco más de color (2.5-3.5°L) y sabor más rico y malteado adecuado para ales.",
                  "de": "Der Hauptunterschied ist die Darrtemperatur: Lager (Pilsner) Malz wird bei niedrigeren Temperaturen (etwa 176-185°F/80-85°C) gedarrt und produziert sehr helle Farbe (1.5-2°L) und neutralen, sauberen Geschmack, ideal für knackige Lagers. Ale (Pale) Malz wird bei etwas höheren Temperaturen (etwa 185-194°F/85-90°C) gedarrt und erzeugt etwas mehr Farbe (2.5-3.5°L) und reicheren, malzigeren Geschmack, geeignet für Ales.",
                  "nl": "Het primaire verschil is droging temperatuur: Lager (Pilsner) mout wordt gedroogd bij lagere temperaturen (rond 176-185°F/80-85°C), produceert zeer bleke kleur (1.5-2°L) en neutrale, schone smaak ideaal voor knapperige lagers. Ale (Pale) mout wordt gedroogd bij iets hogere temperaturen (rond 185-194°F/85-90°C), creëert iets meer kleur (2.5-3.5°L) en rijkere, mouterige smaak geschikt voor ales."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  }
})();