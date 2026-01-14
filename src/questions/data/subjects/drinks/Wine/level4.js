// Quiz - Level 4: Drinken - Wijn (Wijnproductie)
(function() {
  const level4 = {
    name: {
      en: "Wine Production",
      es: "Producción de Vino",
      de: "Weinproduktion",
      nl: "Wijnproductie"
    },
    questions: [
      {
        question: {
          en: "What is malolactic fermentation?",
          es: "¿Qué es la fermentación maloláctica?",
          de: "Was ist die malolaktische Gärung?",
          nl: "Wat is malolactische fermentatie?"
        },
        options: [
          { en: "Primary alcohol fermentation", es: "Fermentación alcohólica primaria", de: "Primäre Alkoholgärung", nl: "Primaire alcoholfermentatie" },
          { en: "Conversion of malic acid to lactic acid", es: "Conversión de ácido málico a ácido láctico", de: "Umwandlung von Apfelsäure in Milchsäure", nl: "Omzetting van appelzuur naar melkzuur" },
          { en: "Adding sugar to wine", es: "Añadir azúcar al vino", de: "Zucker zum Wein hinzufügen", nl: "Suiker toevoegen aan wijn" },
          { en: "Removing sediment", es: "Eliminar sedimentos", de: "Sediment entfernen", nl: "Sediment verwijderen" }
        ],
        correct: 1,
        explanation: {
          en: "Malolactic fermentation converts sharp malic acid to softer lactic acid, creating a creamier, rounder wine texture.",
          es: "La fermentación maloláctica convierte el ácido málico agudo en ácido láctico más suave, creando una textura de vino más cremosa y redonda.",
          de: "Die malolaktische Gärung wandelt scharfe Apfelsäure in weichere Milchsäure um und erzeugt eine cremigere, rundere Weintextur.",
          nl: "Malolactische fermentatie zet scherp appelzuur om in zachter melkzuur, wat een romiger, rondere wijntextuur creëert."
        }
      },
      {
        question: {
          en: "What is the méthode champenoise?",
          es: "¿Qué es el método champenoise?",
          de: "Was ist die Méthode Champenoise?",
          nl: "Wat is de méthode champenoise?"
        },
        options: [
          { en: "Adding CO2 to wine", es: "Añadir CO2 al vino", de: "CO2 zum Wein hinzufügen", nl: "CO2 toevoegen aan wijn" },
          { en: "Traditional method of making sparkling wine", es: "Método tradicional de hacer vino espumoso", de: "Traditionelle Methode zur Herstellung von Schaumwein", nl: "Traditionele methode voor mousserende wijn" },
          { en: "Oak barrel aging", es: "Envejecimiento en barrica de roble", de: "Reifung im Eichenfass", nl: "Eiken vat rijping" },
          { en: "Blending different vintages", es: "Mezclar diferentes añadas", de: "Mischen verschiedener Jahrgänge", nl: "Verschillende jaargangen blenden" }
        ],
        correct: 1,
        explanation: {
          en: "Méthode champenoise is the traditional method where secondary fermentation occurs in the bottle, creating natural bubbles.",
          es: "El método champenoise es el método tradicional donde la fermentación secundaria ocurre en la botella, creando burbujas naturales.",
          de: "Méthode Champenoise ist die traditionelle Methode, bei der die zweite Gärung in der Flasche stattfindet und natürliche Blasen entstehen.",
          nl: "Méthode champenoise is de traditionele methode waarbij secundaire fermentatie in de fles plaatsvindt, wat natuurlijke bubbels creëert."
        }
      },
      {
        question: {
          en: "What is riddling (remuage) in Champagne production?",
          es: "¿Qué es el removido (remuage) en la producción de Champagne?",
          de: "Was ist Rütteln (Remuage) in der Champagnerproduktion?",
          nl: "Wat is remuage bij Champagneproductie?"
        },
        options: [
          { en: "Harvesting grapes", es: "Cosechar uvas", de: "Trauben ernten", nl: "Druiven oogsten" },
          { en: "Rotating bottles to collect sediment", es: "Rotar botellas para recoger sedimento", de: "Flaschen drehen, um Sediment zu sammeln", nl: "Flessen draaien om sediment te verzamelen" },
          { en: "Adding sugar", es: "Añadir azúcar", de: "Zucker hinzufügen", nl: "Suiker toevoegen" },
          { en: "Filtering wine", es: "Filtrar vino", de: "Wein filtern", nl: "Wijn filteren" }
        ],
        correct: 1,
        explanation: {
          en: "Riddling involves gradually rotating and tilting bottles to move sediment into the neck for removal.",
          es: "El removido implica rotar y inclinar gradualmente las botellas para mover el sedimento hacia el cuello para su eliminación.",
          de: "Rütteln bedeutet, Flaschen schrittweise zu drehen und zu neigen, um Sediment in den Hals zur Entfernung zu bewegen.",
          nl: "Remuage houdt in dat flessen geleidelijk worden gedraaid en gekanteld om sediment naar de hals te verplaatsen voor verwijdering."
        }
      },
      {
        question: {
          en: "What is carbonic maceration?",
          es: "¿Qué es la maceración carbónica?",
          de: "Was ist die Kohlensäuremaischung?",
          nl: "Wat is carbonische maceratie?"
        },
        options: [
          { en: "Adding carbonation to wine", es: "Añadir carbonatación al vino", de: "Kohlensäure zum Wein hinzufügen", nl: "Koolzuur toevoegen aan wijn" },
          { en: "Whole grape fermentation in CO2", es: "Fermentación de uva entera en CO2", de: "Ganztraubengärung in CO2", nl: "Hele druif fermentatie in CO2" },
          { en: "Removing CO2 from wine", es: "Eliminar CO2 del vino", de: "CO2 aus Wein entfernen", nl: "CO2 uit wijn verwijderen" },
          { en: "Carbon filtering", es: "Filtrado de carbón", de: "Kohlefiltration", nl: "Koolstoffiltratie" }
        ],
        correct: 1,
        explanation: {
          en: "Carbonic maceration ferments whole grapes in a CO2-rich environment, creating fruity, low-tannin wines like Beaujolais Nouveau.",
          es: "La maceración carbónica fermenta uvas enteras en un ambiente rico en CO2, creando vinos afrutados y bajos en taninos como Beaujolais Nouveau.",
          de: "Kohlensäuremaischung fermentiert ganze Trauben in einer CO2-reichen Umgebung und erzeugt fruchtige, tanninearme Weine wie Beaujolais Nouveau.",
          nl: "Carbonische maceratie fermenteert hele druiven in een CO2-rijke omgeving, wat fruitige, tannine-arme wijnen zoals Beaujolais Nouveau creëert."
        }
      },
      {
        question: {
          en: "What is chaptalization?",
          es: "¿Qué es la chaptalización?",
          de: "Was ist Chaptalisierung?",
          nl: "Wat is chaptalisatie?"
        },
        options: [
          { en: "Adding sugar before fermentation", es: "Añadir azúcar antes de la fermentación", de: "Zucker vor der Gärung hinzufügen", nl: "Suiker toevoegen voor fermentatie" },
          { en: "Removing sugar from wine", es: "Eliminar azúcar del vino", de: "Zucker aus Wein entfernen", nl: "Suiker uit wijn verwijderen" },
          { en: "Adding acid to wine", es: "Añadir ácido al vino", de: "Säure zum Wein hinzufügen", nl: "Zuur toevoegen aan wijn" },
          { en: "Blending wines", es: "Mezclar vinos", de: "Weine mischen", nl: "Wijnen blenden" }
        ],
        correct: 0,
        explanation: {
          en: "Chaptalization is adding sugar to grape must before fermentation to increase alcohol content, common in cooler regions.",
          es: "La chaptalización es añadir azúcar al mosto antes de la fermentación para aumentar el contenido de alcohol, común en regiones más frías.",
          de: "Chaptalisierung ist das Hinzufügen von Zucker zum Most vor der Gärung zur Erhöhung des Alkoholgehalts, üblich in kühleren Regionen.",
          nl: "Chaptalisatie is het toevoegen van suiker aan most voor fermentatie om het alcoholgehalte te verhogen, gebruikelijk in koelere regio's."
        }
      },
      {
        question: {
          en: "What is sur lie aging?",
          es: "¿Qué es el envejecimiento sur lie?",
          de: "Was ist Sur-Lie-Reifung?",
          nl: "Wat is sur lie rijping?"
        },
        options: [
          { en: "Aging on dead yeast cells", es: "Envejecimiento sobre células de levadura muertas", de: "Reifung auf toten Hefezellen", nl: "Rijping op dode gistcellen" },
          { en: "Aging in new oak", es: "Envejecimiento en roble nuevo", de: "Reifung in neuer Eiche", nl: "Rijping in nieuw eiken" },
          { en: "Underground aging", es: "Envejecimiento subterráneo", de: "Unterirdische Reifung", nl: "Ondergrondse rijping" },
          { en: "Aging without oxygen", es: "Envejecimiento sin oxígeno", de: "Reifung ohne Sauerstoff", nl: "Rijping zonder zuurstof" }
        ],
        correct: 0,
        explanation: {
          en: "Sur lie ('on the lees') aging keeps wine in contact with dead yeast cells, adding complexity, texture, and bread-like flavors.",
          es: "El envejecimiento sur lie ('sobre las lías') mantiene el vino en contacto con células de levadura muertas, añadiendo complejidad, textura y sabores a pan.",
          de: "Sur-Lie-Reifung ('auf der Hefe') hält Wein in Kontakt mit toten Hefezellen und fügt Komplexität, Textur und brotartige Aromen hinzu.",
          nl: "Sur lie ('op de droesem') rijping houdt wijn in contact met dode gistcellen, wat complexiteit, textuur en broodachtige smaken toevoegt."
        }
      },
      {
        question: {
          en: "What temperature is ideal for red wine fermentation?",
          es: "¿Qué temperatura es ideal para la fermentación del vino tinto?",
          de: "Welche Temperatur ist ideal für die Rotweinfermentation?",
          nl: "Welke temperatuur is ideaal voor rode wijn fermentatie?"
        },
        options: [
          { en: "10-15°C", es: "10-15°C", de: "10-15°C", nl: "10-15°C" },
          { en: "15-20°C", es: "15-20°C", de: "15-20°C", nl: "15-20°C" },
          { en: "25-30°C", es: "25-30°C", de: "25-30°C", nl: "25-30°C" },
          { en: "35-40°C", es: "35-40°C", de: "35-40°C", nl: "35-40°C" }
        ],
        correct: 2,
        explanation: {
          en: "Red wine fermentation typically occurs at 25-30°C to extract color, tannins, and flavor from the skins.",
          es: "La fermentación del vino tinto típicamente ocurre a 25-30°C para extraer color, taninos y sabor de las pieles.",
          de: "Rotweinfermentation findet typischerweise bei 25-30°C statt, um Farbe, Tannine und Geschmack aus den Schalen zu extrahieren.",
          nl: "Rode wijn fermentatie vindt typisch plaats bij 25-30°C om kleur, tannines en smaak uit de schillen te extraheren."
        }
      },
      {
        question: {
          en: "What is cold stabilization in winemaking?",
          es: "¿Qué es la estabilización en frío en la vinificación?",
          de: "Was ist Kältestabilisierung in der Weinherstellung?",
          nl: "Wat is koude stabilisatie bij wijnmaken?"
        },
        options: [
          { en: "Freezing grapes before harvest", es: "Congelar uvas antes de la cosecha", de: "Trauben vor der Ernte einfrieren", nl: "Druiven bevriezen voor de oogst" },
          { en: "Chilling wine to remove tartrate crystals", es: "Enfriar vino para eliminar cristales de tartrato", de: "Wein kühlen, um Weinsteinkristalle zu entfernen", nl: "Wijn koelen om wijnsteenkristallen te verwijderen" },
          { en: "Cold fermentation", es: "Fermentación en frío", de: "Kalte Gärung", nl: "Koude fermentatie" },
          { en: "Storing wine in cold cellars", es: "Almacenar vino en bodegas frías", de: "Wein in kalten Kellern lagern", nl: "Wijn opslaan in koude kelders" }
        ],
        correct: 1,
        explanation: {
          en: "Cold stabilization chills wine to near freezing to precipitate tartrate crystals before bottling, preventing crystal formation later.",
          es: "La estabilización en frío enfría el vino casi hasta congelarlo para precipitar cristales de tartrato antes del embotellado, previniendo la formación de cristales después.",
          de: "Kältestabilisierung kühlt Wein fast bis zum Gefrierpunkt, um Weinsteinkristalle vor der Abfüllung auszufällen und spätere Kristallbildung zu verhindern.",
          nl: "Koude stabilisatie koelt wijn tot bijna het vriespunt om wijnsteenkristallen te precipiteren voor botteling, wat latere kristalvorming voorkomt."
        }
      },
      {
        question: {
          en: "What is micro-oxygenation?",
          es: "¿Qué es la micro-oxigenación?",
          de: "Was ist Mikro-Oxygenierung?",
          nl: "Wat is micro-oxygenatie?"
        },
        options: [
          { en: "Removing oxygen from wine", es: "Eliminar oxígeno del vino", de: "Sauerstoff aus Wein entfernen", nl: "Zuurstof uit wijn verwijderen" },
          { en: "Controlled oxygen exposure during aging", es: "Exposición controlada al oxígeno durante el envejecimiento", de: "Kontrollierte Sauerstoffzufuhr während der Reifung", nl: "Gecontroleerde zuurstofblootstelling tijdens rijping" },
          { en: "Preventing oxidation", es: "Prevenir la oxidación", de: "Oxidation verhindern", nl: "Oxidatie voorkomen" },
          { en: "Adding bubbles to wine", es: "Añadir burbujas al vino", de: "Blasen zum Wein hinzufügen", nl: "Bubbels toevoegen aan wijn" }
        ],
        correct: 1,
        explanation: {
          en: "Micro-oxygenation introduces controlled amounts of oxygen to soften tannins and stabilize color, mimicking barrel aging.",
          es: "La micro-oxigenación introduce cantidades controladas de oxígeno para suavizar taninos y estabilizar el color, imitando el envejecimiento en barrica.",
          de: "Mikro-Oxygenierung führt kontrollierte Sauerstoffmengen zu, um Tannine zu mildern und Farbe zu stabilisieren, ähnlich der Fassreifung.",
          nl: "Micro-oxygenatie introduceert gecontroleerde hoeveelheden zuurstof om tannines te verzachten en kleur te stabiliseren, wat vatrijping nabootst."
        }
      },
      {
        question: {
          en: "What is the solera system?",
          es: "¿Qué es el sistema de soleras?",
          de: "Was ist das Solera-System?",
          nl: "Wat is het solera systeem?"
        },
        options: [
          { en: "Solar-powered winemaking", es: "Vinificación con energía solar", de: "Solar-betriebene Weinherstellung", nl: "Wijnmaken op zonne-energie" },
          { en: "Fractional blending system for Sherry", es: "Sistema de mezcla fraccionada para Jerez", de: "Fraktioniertes Verschnittsystem für Sherry", nl: "Fractioneel blendsysteem voor Sherry" },
          { en: "Underground wine storage", es: "Almacenamiento subterráneo de vino", de: "Unterirdische Weinlagerung", nl: "Ondergrondse wijnopslag" },
          { en: "Temperature control system", es: "Sistema de control de temperatura", de: "Temperaturkontrollsystem", nl: "Temperatuurcontrolesysteem" }
        ],
        correct: 1,
        explanation: {
          en: "The solera system is a fractional blending method used for Sherry, where younger wines are progressively blended with older ones.",
          es: "El sistema de soleras es un método de mezcla fraccionada usado para el Jerez, donde vinos más jóvenes se mezclan progresivamente con los más viejos.",
          de: "Das Solera-System ist eine fraktionierte Verschnittmethode für Sherry, bei der jüngere Weine schrittweise mit älteren verschnitten werden.",
          nl: "Het solera systeem is een fractionele blendmethode voor Sherry, waarbij jongere wijnen progressief worden gemengd met oudere."
        }
      },
            {
            "question": {
                  "en": "Which French region is famous for Champagne?",
                  "es": "¿Qué región francesa es famosa por el Champagne?",
                  "de": "Welche französische Region ist berühmt für Champagner?",
                  "nl": "Welke Franse regio staat bekend om Champagne?"
            },
            "options": [
                  {
                        "en": "Champagne",
                        "es": "Champagne",
                        "de": "Champagne",
                        "nl": "Champagne"
                  },
                  {
                        "en": "Bordeaux",
                        "es": "Burdeos",
                        "de": "Bordeaux",
                        "nl": "Bordeaux"
                  },
                  {
                        "en": "Burgundy",
                        "es": "Borgoña",
                        "de": "Burgund",
                        "nl": "Bourgogne"
                  },
                  {
                        "en": "Loire Valley",
                        "es": "Valle del Loira",
                        "de": "Loiretal",
                        "nl": "Loiredal"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Champagne is a sparkling wine that can only be called 'Champagne' if it comes from the Champagne region of France.",
                  "es": "El Champagne es un vino espumoso que solo puede llamarse 'Champagne' si proviene de la región de Champagne en Francia.",
                  "de": "Champagner ist ein Schaumwein, der nur 'Champagner' genannt werden darf, wenn er aus der Champagne-Region in Frankreich stammt.",
                  "nl": "Champagne is een mousserende wijn die alleen 'Champagne' genoemd mag worden als het uit de Champagne regio in Frankrijk komt."
            }
      },
            {
            "question": {
                  "en": "What does 'terroir' mean in winemaking?",
                  "es": "¿Qué significa 'terroir' en la vinificación?",
                  "de": "Was bedeutet 'Terroir' im Weinbau?",
                  "nl": "Wat betekent 'terroir' in de wijnbouw?"
            },
            "options": [
                  {
                        "en": "The unique environmental conditions of a vineyard",
                        "es": "Las condiciones ambientales únicas de un viñedo",
                        "de": "Die einzigartigen Umweltbedingungen eines Weinbergs",
                        "nl": "De unieke omgevingsomstandigheden van een wijngaard"
                  },
                  {
                        "en": "The type of grape used",
                        "es": "El tipo de uva utilizada",
                        "de": "Die verwendete Rebsorte",
                        "nl": "Het type druif dat wordt gebruikt"
                  },
                  {
                        "en": "The aging process",
                        "es": "El proceso de envejecimiento",
                        "de": "Der Alterungsprozess",
                        "nl": "Het rijpingsproces"
                  },
                  {
                        "en": "The wine bottle shape",
                        "es": "La forma de la botella de vino",
                        "de": "Die Form der Weinflasche",
                        "nl": "De vorm van de wijnfles"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Terroir refers to the complete natural environment in which wine is produced, including soil, climate, and terrain. It's believed to give wine its unique character.",
                  "es": "Terroir se refiere al entorno natural completo en el que se produce el vino, incluido el suelo, el clima y el terreno. Se cree que le da al vino su carácter único.",
                  "de": "Terroir bezieht sich auf die gesamte natürliche Umgebung, in der Wein hergestellt wird, einschließlich Boden, Klima und Gelände. Es wird angenommen, dass es dem Wein seinen einzigartigen Charakter verleiht.",
                  "nl": "Terroir verwijst naar de complete natuurlijke omgeving waarin wijn wordt geproduceerd, inclusief bodem, klimaat en terrein. Men gelooft dat het wijn zijn unieke karakter geeft."
            }
      },
            {
            "question": {
                  "en": "What is a wine's 'body'?",
                  "es": "¿Qué es el 'cuerpo' de un vino?",
                  "de": "Was ist der 'Körper' eines Weins?",
                  "nl": "Wat is het 'body' van een wijn?"
            },
            "options": [
                  {
                        "en": "The weight and texture felt in the mouth",
                        "es": "El peso y la textura que se siente en la boca",
                        "de": "Das Gewicht und die Textur im Mund",
                        "nl": "Het gewicht en de textuur die in de mond wordt gevoeld"
                  },
                  {
                        "en": "The bottle shape",
                        "es": "La forma de la botella",
                        "de": "Die Flaschenform",
                        "nl": "De flesvorm"
                  },
                  {
                        "en": "The alcohol percentage",
                        "es": "El porcentaje de alcohol",
                        "de": "Der Alkoholprozentsatz",
                        "nl": "Het alcoholpercentage"
                  },
                  {
                        "en": "The wine color",
                        "es": "El color del vino",
                        "de": "Die Weinfarbe",
                        "nl": "De wijnkleur"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "A wine's body refers to how it feels in your mouth - its weight and texture. Wines can be light-bodied, medium-bodied, or full-bodied.",
                  "es": "El cuerpo de un vino se refiere a cómo se siente en la boca: su peso y textura. Los vinos pueden ser de cuerpo ligero, medio o completo.",
                  "de": "Der Körper eines Weins bezieht sich darauf, wie er sich im Mund anfühlt - sein Gewicht und seine Textur. Weine können leicht, mittel oder vollmundig sein.",
                  "nl": "Het body van een wijn verwijst naar hoe het aanvoelt in je mond - zijn gewicht en textuur. Wijnen kunnen licht, medium of vol van body zijn."
            }
      },
            {
            "question": {
                  "en": "Which grape is Chianti primarily made from?",
                  "es": "¿De qué uva se hace principalmente el Chianti?",
                  "de": "Aus welcher Traube wird Chianti hauptsächlich hergestellt?",
                  "nl": "Van welke druif wordt Chianti voornamelijk gemaakt?"
            },
            "options": [
                  {
                        "en": "Sangiovese",
                        "es": "Sangiovese",
                        "de": "Sangiovese",
                        "nl": "Sangiovese"
                  },
                  {
                        "en": "Cabernet Sauvignon",
                        "es": "Cabernet Sauvignon",
                        "de": "Cabernet Sauvignon",
                        "nl": "Cabernet Sauvignon"
                  },
                  {
                        "en": "Merlot",
                        "es": "Merlot",
                        "de": "Merlot",
                        "nl": "Merlot"
                  },
                  {
                        "en": "Pinot Noir",
                        "es": "Pinot Noir",
                        "de": "Pinot Noir",
                        "nl": "Pinot Noir"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Chianti, a famous Italian red wine from Tuscany, is made primarily from Sangiovese grapes. It typically has bright cherry flavors and good acidity.",
                  "es": "Chianti, un famoso vino tinto italiano de la Toscana, se hace principalmente con uvas Sangiovese. Típicamente tiene sabores brillantes de cereza y buena acidez.",
                  "de": "Chianti, ein berühmter italienischer Rotwein aus der Toskana, wird hauptsächlich aus Sangiovese-Trauben hergestellt. Es hat typischerweise helle Kirscharomen und eine gute Säure.",
                  "nl": "Chianti, een beroemde Italiaanse rode wijn uit Toscane, wordt voornamelijk gemaakt van Sangiovese druiven. Het heeft meestal heldere kersensmaken en goede zuurgraad."
            }
      },
            {
            "question": {
                  "en": "What does 'tannin' refer to in wine?",
                  "es": "¿A qué se refiere 'tanino' en el vino?",
                  "de": "Was bedeutet 'Tannin' im Wein?",
                  "nl": "Waar verwijst 'tannine' naar in wijn?"
            },
            "options": [
                  {
                        "en": "Compounds that create a dry, puckering sensation",
                        "es": "Compuestos que crean una sensación seca y astringente",
                        "de": "Verbindungen die ein trockenes, zusammenziehendes Gefühl erzeugen",
                        "nl": "Verbindingen die een droog, samentrekkend gevoel creëren"
                  },
                  {
                        "en": "The wine's sweetness level",
                        "es": "El nivel de dulzura del vino",
                        "de": "Der Süßegrad des Weins",
                        "nl": "Het zoetheid niveau van de wijn"
                  },
                  {
                        "en": "The wine's color intensity",
                        "es": "La intensidad del color del vino",
                        "de": "Die Farbintensität des Weins",
                        "nl": "De kleurintensiteit van de wijn"
                  },
                  {
                        "en": "The aging time",
                        "es": "El tiempo de envejecimiento",
                        "de": "Die Reifezeit",
                        "nl": "De rijpingstijd"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Tannins are natural compounds found in grape skins, seeds, and stems that create a dry, sometimes bitter or astringent sensation. They're more prominent in red wines.",
                  "es": "Los taninos son compuestos naturales que se encuentran en las pieles, semillas y tallos de las uvas que crean una sensación seca, a veces amarga o astringente. Son más prominentes en los vinos tintos.",
                  "de": "Tannine sind natürliche Verbindungen in Traubenschalen, Kernen und Stielen, die ein trockenes, manchmal bitteres oder adstringierendes Gefühl erzeugen. Sie sind in Rotweinen stärker ausgeprägt.",
                  "nl": "Tannines zijn natuurlijke verbindingen gevonden in druivenschillen, pitten en stelen die een droog, soms bitter of samentrekkend gevoel creëren. Ze zijn meer prominent in rode wijnen."
            }
      },
            {
            "question": {
                  "en": "What temperature should red wine ideally be served at?",
                  "es": "¿A qué temperatura debe servirse idealmente el vino tinto?",
                  "de": "Bei welcher Temperatur sollte Rotwein idealerweise serviert werden?",
                  "nl": "Op welke temperatuur moet rode wijn idealiter geserveerd worden?"
            },
            "options": [
                  {
                        "en": "15-18°C (59-64°F)",
                        "es": "15-18°C (59-64°F)",
                        "de": "15-18°C (59-64°F)",
                        "nl": "15-18°C (59-64°F)"
                  },
                  {
                        "en": "4-7°C (39-45°F)",
                        "es": "4-7°C (39-45°F)",
                        "de": "4-7°C (39-45°F)",
                        "nl": "4-7°C (39-45°F)"
                  },
                  {
                        "en": "20-25°C (68-77°F)",
                        "es": "20-25°C (68-77°F)",
                        "de": "20-25°C (68-77°F)",
                        "nl": "20-25°C (68-77°F)"
                  },
                  {
                        "en": "0-3°C (32-37°F)",
                        "es": "0-3°C (32-37°F)",
                        "de": "0-3°C (32-37°F)",
                        "nl": "0-3°C (32-37°F)"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Red wine is best served slightly below room temperature at 15-18°C (59-64°F). This temperature allows the flavors and aromas to be fully expressed.",
                  "es": "El vino tinto se sirve mejor ligeramente por debajo de la temperatura ambiente a 15-18°C (59-64°F). Esta temperatura permite que los sabores y aromas se expresen completamente.",
                  "de": "Rotwein wird am besten leicht unter Raumtemperatur bei 15-18°C (59-64°F) serviert. Diese Temperatur ermöglicht es, dass sich Aromen und Geschmacksstoffe voll entfalten.",
                  "nl": "Rode wijn wordt het best geserveerd net onder kamertemperatuur op 15-18°C (59-64°F). Deze temperatuur zorgt ervoor dat de smaken en aroma's volledig tot uiting komen."
            }
      },
            {
            "question": {
                  "en": "What is the purpose of decanting wine?",
                  "es": "¿Cuál es el propósito de decantar el vino?",
                  "de": "Was ist der Zweck des Dekantierens von Wein?",
                  "nl": "Wat is het doel van het decanteren van wijn?"
            },
            "options": [
                  {
                        "en": "To aerate it and separate sediment",
                        "es": "Para airearlo y separar el sedimento",
                        "de": "Um ihn zu belüften und Sediment zu trennen",
                        "nl": "Om het te beluchten en sediment te scheiden"
                  },
                  {
                        "en": "To chill it faster",
                        "es": "Para enfriarlo más rápido",
                        "de": "Um ihn schneller zu kühlen",
                        "nl": "Om het sneller te koelen"
                  },
                  {
                        "en": "To make it look fancy",
                        "es": "Para que se vea elegante",
                        "de": "Um es schick aussehen zu lassen",
                        "nl": "Om het er chic uit te laten zien"
                  },
                  {
                        "en": "To reduce alcohol content",
                        "es": "Para reducir el contenido de alcohol",
                        "de": "Um den Alkoholgehalt zu reduzieren",
                        "nl": "Om het alcoholgehalte te verminderen"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Decanting serves two purposes: it aerates the wine, allowing it to 'breathe' and develop its flavors, and it separates the wine from any sediment that may have formed.",
                  "es": "Decantar tiene dos propósitos: airea el vino, permitiendo que 'respire' y desarrolle sus sabores, y separa el vino de cualquier sedimento que pueda haberse formado.",
                  "de": "Dekantieren dient zwei Zwecken: Es belüftet den Wein, sodass er 'atmen' und seine Aromen entwickeln kann, und es trennt den Wein von eventuell gebildetem Sediment.",
                  "nl": "Decanteren heeft twee doelen: het belucht de wijn, waardoor het kan 'ademen' en zijn smaken kan ontwikkelen, en het scheidt de wijn van sediment dat zich mogelijk heeft gevormd."
            }
      },
            {
            "question": {
                  "en": "What is Port wine fortified with?",
                  "es": "¿Con qué se fortifica el vino de Oporto?",
                  "de": "Womit wird Portwein aufgespritzt?",
                  "nl": "Waarmee wordt Port wijn versterkt?"
            },
            "options": [
                  {
                        "en": "Brandy",
                        "es": "Brandy",
                        "de": "Weinbrand",
                        "nl": "Brandy"
                  },
                  {
                        "en": "Vodka",
                        "es": "Vodka",
                        "de": "Wodka",
                        "nl": "Vodka"
                  },
                  {
                        "en": "Rum",
                        "es": "Ron",
                        "de": "Rum",
                        "nl": "Rum"
                  },
                  {
                        "en": "Sugar syrup",
                        "es": "Jarabe de azúcar",
                        "de": "Zuckersirup",
                        "nl": "Suikersiroop"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Port wine is fortified with brandy (grape spirit) during fermentation, which stops fermentation and leaves residual sugar, making it sweet and higher in alcohol.",
                  "es": "El vino de Oporto se fortifica con brandy (aguardiente de uva) durante la fermentación, lo que detiene la fermentación y deja azúcar residual, haciéndolo dulce y con mayor contenido de alcohol.",
                  "de": "Portwein wird während der Gärung mit Weinbrand (Traubenschnaps) aufgespritzt, was die Gärung stoppt und Restzucker hinterlässt, wodurch er süß und alkoholhaltiger wird.",
                  "nl": "Port wijn wordt versterkt met brandy (druivenspirit) tijdens de fermentatie, wat de fermentatie stopt en restsuiker achterlaat, waardoor het zoet en hoger in alcohol wordt."
            }
      },
            {
            "question": {
                  "en": "Which country produces Rioja wine?",
                  "es": "¿Qué país produce el vino Rioja?",
                  "de": "Welches Land produziert Rioja-Wein?",
                  "nl": "Welk land produceert Rioja wijn?"
            },
            "options": [
                  {
                        "en": "Spain",
                        "es": "España",
                        "de": "Spanien",
                        "nl": "Spanje"
                  },
                  {
                        "en": "Italy",
                        "es": "Italia",
                        "de": "Italien",
                        "nl": "Italië"
                  },
                  {
                        "en": "Portugal",
                        "es": "Portugal",
                        "de": "Portugal",
                        "nl": "Portugal"
                  },
                  {
                        "en": "France",
                        "es": "Francia",
                        "de": "Frankreich",
                        "nl": "Frankrijk"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Rioja is a famous wine region in Spain, primarily known for its red wines made from Tempranillo grapes. Rioja wines are classified by aging time.",
                  "es": "Rioja es una región vinícola famosa en España, conocida principalmente por sus vinos tintos hechos de uvas Tempranillo. Los vinos de Rioja se clasifican por tiempo de envejecimiento.",
                  "de": "Rioja ist eine berühmte Weinregion in Spanien, hauptsächlich bekannt für ihre Rotweine aus Tempranillo-Trauben. Rioja-Weine werden nach Reifezeit klassifiziert.",
                  "nl": "Rioja is een beroemde wijnstreek in Spanje, voornamelijk bekend om zijn rode wijnen gemaakt van Tempranillo druiven. Rioja wijnen worden geklassificeerd op rijpingstijd."
            }
      },
            {
            "question": {
                  "en": "What does 'sur lie' aging mean?",
                  "es": "¿Qué significa el envejecimiento 'sur lie'?",
                  "de": "Was bedeutet 'sur lie' Alterung?",
                  "nl": "Wat betekent 'sur lie' rijping?"
            },
            "options": [
                  {
                        "en": "Aging wine on its yeast sediment",
                        "es": "Envejecer el vino sobre su sedimento de levadura",
                        "de": "Wein auf seiner Hefesediment altern lassen",
                        "nl": "Wijn laten rijpen op zijn gistsediment"
                  },
                  {
                        "en": "Aging in oak barrels",
                        "es": "Envejecimiento en barricas de roble",
                        "de": "Alterung in Eichenfässern",
                        "nl": "Rijping in eiken vaten"
                  },
                  {
                        "en": "Aging in bottles lying down",
                        "es": "Envejecimiento en botellas acostadas",
                        "de": "Alterung in liegenden Flaschen",
                        "nl": "Rijping in liggende flessen"
                  },
                  {
                        "en": "Aging at cold temperatures",
                        "es": "Envejecimiento a temperaturas frías",
                        "de": "Alterung bei kalten Temperaturen",
                        "nl": "Rijping bij koude temperaturen"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "'Sur lie' (French for 'on the lees') means aging wine in contact with dead yeast cells. This technique adds complexity, creaminess, and sometimes a subtle yeasty character to the wine.",
                  "es": "'Sur lie' (francés para 'sobre las lías') significa envejecer el vino en contacto con células muertas de levadura. Esta técnica agrega complejidad, cremosidad y a veces un carácter sutil de levadura al vino.",
                  "de": "'Sur lie' (französisch für 'auf der Hefe') bedeutet, Wein im Kontakt mit toten Hefezellen zu altern. Diese Technik verleiht dem Wein Komplexität, Cremigkeit und manchmal einen subtilen Hefecharakter.",
                  "nl": "'Sur lie' (Frans voor 'op de droesem') betekent wijn rijpen in contact met dode gistcellen. Deze techniek voegt complexiteit, romigheid en soms een subtiel gistkarakter toe aan de wijn."
            }
      },
            {
            "question": {
                  "en": "What is 'sur lie' aging in winemaking?",
                  "es": "¿Qué es el envejecimiento 'sur lie' en la vinificación?",
                  "de": "Was ist 'sur lie'-Alterung im Weinbau?",
                  "nl": "Wat is 'sur lie' rijping in de wijnbouw?"
            },
            "options": [
                  {
                        "en": "Aging wine in oak barrels",
                        "es": "Envejecer vino en barricas de roble",
                        "de": "Wein in Eichenfässern altern",
                        "nl": "Wijn rijpen in eiken vaten"
                  },
                  {
                        "en": "Aging wine on dead yeast cells",
                        "es": "Envejecer vino sobre células de levadura muertas",
                        "de": "Wein auf toten Hefezellen altern",
                        "nl": "Wijn rijpen op dode gistcellen"
                  },
                  {
                        "en": "Aging in stainless steel",
                        "es": "Envejecer en acero inoxidable",
                        "de": "Alterung in Edelstahl",
                        "nl": "Rijpen in roestvrij staal"
                  },
                  {
                        "en": "Aging underground",
                        "es": "Envejecer bajo tierra",
                        "de": "Unterirdische Alterung",
                        "nl": "Ondergronds rijpen"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "'Sur lie' means aging wine on its lees (dead yeast cells), which adds complexity, creaminess, and subtle flavors to the wine, commonly used in Muscadet and Champagne.",
                  "es": "'Sur lie' significa envejecer el vino sobre sus lías (células de levadura muertas), lo que agrega complejidad, cremosidad y sabores sutiles al vino, comúnmente usado en Muscadet y Champagne.",
                  "de": "'Sur lie' bedeutet, Wein auf seiner Hefe (toten Hefezellen) zu altern, was dem Wein Komplexität, Cremigkeit und subtile Aromen verleiht, häufig bei Muscadet und Champagner verwendet.",
                  "nl": "'Sur lie' betekent wijn rijpen op zijn droesem (dode gistcellen), wat complexiteit, romigheid en subtiele smaken aan de wijn toevoegt, vaak gebruikt bij Muscadet en Champagne."
            }
      },
            {
            "question": {
                  "en": "What is 'bâtonnage' in winemaking?",
                  "es": "¿Qué es el 'bâtonnage' en la vinificación?",
                  "de": "Was ist 'bâtonnage' im Weinbau?",
                  "nl": "Wat is 'bâtonnage' in de wijnbouw?"
            },
            "options": [
                  {
                        "en": "Stirring the lees during aging",
                        "es": "Remover las lías durante el envejecimiento",
                        "de": "Umrühren der Hefe während der Alterung",
                        "nl": "Roeren van de droesem tijdens rijping"
                  },
                  {
                        "en": "Pressing grapes gently",
                        "es": "Prensar uvas suavemente",
                        "de": "Trauben sanft pressen",
                        "nl": "Druiven zacht persen"
                  },
                  {
                        "en": "Filtering the wine",
                        "es": "Filtrar el vino",
                        "de": "Den Wein filtern",
                        "nl": "De wijn filteren"
                  },
                  {
                        "en": "Adding sulfites",
                        "es": "Agregar sulfitos",
                        "de": "Sulfite hinzufügen",
                        "nl": "Sulfieten toevoegen"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Bâtonnage is the practice of stirring wine lees to increase contact with dead yeast cells, enhancing richness, texture, and complexity, particularly in white wines like Chardonnay.",
                  "es": "El bâtonnage es la práctica de remover las lías del vino para aumentar el contacto con células de levadura muertas, mejorando la riqueza, textura y complejidad, particularmente en vinos blancos como Chardonnay.",
                  "de": "Bâtonnage ist die Praxis, Weinhefe umzurühren, um den Kontakt mit toten Hefezellen zu erhöhen und Reichhaltigkeit, Textur und Komplexität zu verbessern, besonders bei Weißweinen wie Chardonnay.",
                  "nl": "Bâtonnage is de praktijk van het roeren van wijndroesem om contact met dode gistcellen te verhogen, wat rijkdom, textuur en complexiteit versterkt, vooral bij witte wijnen zoals Chardonnay."
            }
      },
            {
            "question": {
                  "en": "What is 'cold maceration' or 'cold soak' in red winemaking?",
                  "es": "¿Qué es la 'maceración en frío' o 'remojo en frío' en la vinificación de vino tinto?",
                  "de": "Was ist 'Kaltmazeration' oder 'kaltes Einweichen' bei der Rotweinerzeugung?",
                  "nl": "Wat is 'koude maceratie' of 'koud weken' bij rode wijnproductie?"
            },
            "options": [
                  {
                        "en": "Chilling wine before bottling",
                        "es": "Enfriar el vino antes de embotellar",
                        "de": "Wein vor dem Abfüllen kühlen",
                        "nl": "Wijn koelen voor bottelen"
                  },
                  {
                        "en": "Pre-fermentation extraction at low temperature",
                        "es": "Extracción previa a la fermentación a baja temperatura",
                        "de": "Vorfermentationsextraktion bei niedriger Temperatur",
                        "nl": "Pre-fermentatie extractie bij lage temperatuur"
                  },
                  {
                        "en": "Freezing grapes",
                        "es": "Congelar uvas",
                        "de": "Trauben einfrieren",
                        "nl": "Druiven bevriezen"
                  },
                  {
                        "en": "Storing wine in cold cellars",
                        "es": "Almacenar vino en bodegas frías",
                        "de": "Wein in kalten Kellern lagern",
                        "nl": "Wijn opslaan in koude kelders"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Cold maceration involves soaking crushed grapes at low temperature (10-15°C) before fermentation to extract color, flavor, and aromatics without harsh tannins.",
                  "es": "La maceración en frío implica remojar las uvas trituradas a baja temperatura (10-15°C) antes de la fermentación para extraer color, sabor y aromáticos sin taninos ásperos.",
                  "de": "Kaltmazeration beinhaltet das Einweichen von zerdrückten Trauben bei niedriger Temperatur (10-15°C) vor der Gärung, um Farbe, Geschmack und Aromastoffe ohne harte Tannine zu extrahieren.",
                  "nl": "Koude maceratie houdt in dat geperste druiven bij lage temperatuur (10-15°C) voor fermentatie worden geweekt om kleur, smaak en aroma's te extraheren zonder harde tannines."
            }
      },
            {
            "question": {
                  "en": "What is 'pigeage' (punching down) in red winemaking?",
                  "es": "¿Qué es el 'pigeage' (pisado) en la vinificación de vino tinto?",
                  "de": "Was ist 'Pigeage' (Unterstoßen) bei der Rotweinerzeugung?",
                  "nl": "Wat is 'pigeage' (onderstampen) bij rode wijnproductie?"
            },
            "options": [
                  {
                        "en": "Pressing grapes with feet",
                        "es": "Prensar uvas con los pies",
                        "de": "Trauben mit den Füßen pressen",
                        "nl": "Druiven met voeten persen"
                  },
                  {
                        "en": "Pushing the grape cap down during fermentation",
                        "es": "Empujar el sombrero de uva hacia abajo durante la fermentación",
                        "de": "Die Tresterhut während der Gärung nach unten drücken",
                        "nl": "De druivenkap naar beneden duwen tijdens fermentatie"
                  },
                  {
                        "en": "Filtering sediment",
                        "es": "Filtrar sedimentos",
                        "de": "Sediment filtern",
                        "nl": "Sediment filteren"
                  },
                  {
                        "en": "Aerating the wine",
                        "es": "Airear el vino",
                        "de": "Den Wein belüften",
                        "nl": "De wijn beluchten"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Pigeage is pushing the grape cap (skins and solids that float) back into the fermenting juice to extract color, tannins, and flavors during red wine fermentation.",
                  "es": "El pigeage es empujar el sombrero de uva (pieles y sólidos que flotan) de vuelta al jugo en fermentación para extraer color, taninos y sabores durante la fermentación del vino tinto.",
                  "de": "Pigeage ist das Zurückdrücken des Tresterhuts (Schalen und Feststoffe, die schwimmen) in den gärenden Saft, um Farbe, Tannine und Aromen während der Rotweingärung zu extrahieren.",
                  "nl": "Pigeage is het terugduwen van de druivenkap (schillen en vaste stoffen die drijven) in het gistende sap om kleur, tannines en smaken te extraheren tijdens rode wijnfermentatie."
            }
      },
            {
            "question": {
                  "en": "What is 'carbonic maceration' used primarily for?",
                  "es": "¿Para qué se utiliza principalmente la 'maceración carbónica'?",
                  "de": "Wofür wird hauptsächlich 'Kohlensäuremaischung' verwendet?",
                  "nl": "Waarvoor wordt 'koolzuurmaceratie' voornamelijk gebruikt?"
            },
            "options": [
                  {
                        "en": "Making sparkling wine",
                        "es": "Hacer vino espumoso",
                        "de": "Schaumwein herstellen",
                        "nl": "Mousserende wijn maken"
                  },
                  {
                        "en": "Making fruity, low-tannin red wines",
                        "es": "Hacer vinos tintos afrutados y bajos en taninos",
                        "de": "Fruchtige, tanninlichte Rotweine herstellen",
                        "nl": "Fruitige, tannine-arme rode wijnen maken"
                  },
                  {
                        "en": "Making dessert wine",
                        "es": "Hacer vino de postre",
                        "de": "Dessertwein herstellen",
                        "nl": "Dessertwijn maken"
                  },
                  {
                        "en": "Making fortified wine",
                        "es": "Hacer vino fortificado",
                        "de": "Verstärkten Wein herstellen",
                        "nl": "Versterkte wijn maken"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Carbonic maceration ferments whole grapes in CO2, creating fruity, aromatic, low-tannin wines. It's famously used for Beaujolais Nouveau and other easy-drinking reds.",
                  "es": "La maceración carbónica fermenta uvas enteras en CO2, creando vinos afrutados, aromáticos y bajos en taninos. Se usa famosamente para Beaujolais Nouveau y otros tintos fáciles de beber.",
                  "de": "Kohlensäuremaischung vergärt ganze Trauben in CO2 und erzeugt fruchtige, aromatische, tanninlichte Weine. Berühmt für Beaujolais Nouveau und andere leicht trinkbare Rotweine.",
                  "nl": "Koolzuurmaceratie fermenteert hele druiven in CO2, wat fruitige, aromatische, tannine-arme wijnen creëert. Beroemd gebruikt voor Beaujolais Nouveau en andere makkelijk drinkbare rode wijnen."
            }
      },
            {
            "question": {
                  "en": "What is 'débourbage' in white winemaking?",
                  "es": "¿Qué es el 'débourbage' en la vinificación de vino blanco?",
                  "de": "Was ist 'Débourbage' bei der Weißweinerzeugung?",
                  "nl": "Wat is 'débourbage' bij witte wijnproductie?"
            },
            "options": [
                  {
                        "en": "Adding oak chips",
                        "es": "Agregar virutas de roble",
                        "de": "Eichenchips hinzufügen",
                        "nl": "Eiken chips toevoegen"
                  },
                  {
                        "en": "Settling juice before fermentation to remove solids",
                        "es": "Dejar reposar el jugo antes de la fermentación para eliminar sólidos",
                        "de": "Saft vor der Gärung absetzen lassen, um Feststoffe zu entfernen",
                        "nl": "Sap voor fermentatie laten bezinken om vaste stoffen te verwijderen"
                  },
                  {
                        "en": "Pressing grapes harder",
                        "es": "Prensar uvas más fuerte",
                        "de": "Trauben härter pressen",
                        "nl": "Druiven harder persen"
                  },
                  {
                        "en": "Final clarification",
                        "es": "Clarificación final",
                        "de": "Endgültige Klärung",
                        "nl": "Definitieve klaring"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Débourbage is settling white grape juice for 12-24 hours before fermentation to remove large particles and solids, resulting in cleaner, more refined wines.",
                  "es": "El débourbage es dejar reposar el jugo de uva blanca durante 12-24 horas antes de la fermentación para eliminar partículas grandes y sólidos, resultando en vinos más limpios y refinados.",
                  "de": "Débourbage ist das Absetzen von weißem Traubensaft für 12-24 Stunden vor der Gärung, um große Partikel und Feststoffe zu entfernen, was zu saubereren, raffinierteren Weinen führt.",
                  "nl": "Débourbage is het bezinken van witte druivensap gedurende 12-24 uur voor fermentatie om grote deeltjes en vaste stoffen te verwijderen, wat resulteert in schonere, meer verfijnde wijnen."
            }
      },
            {
            "question": {
                  "en": "What is 'saignée' method in rosé production?",
                  "es": "¿Qué es el método 'saignée' en la producción de rosado?",
                  "de": "Was ist die 'Saignée'-Methode bei der Roséproduktion?",
                  "nl": "Wat is de 'saignée' methode bij rosé productie?"
            },
            "options": [
                  {
                        "en": "Mixing red and white wine",
                        "es": "Mezclar vino tinto y blanco",
                        "de": "Rot- und Weißwein mischen",
                        "nl": "Rode en witte wijn mengen"
                  },
                  {
                        "en": "Bleeding off juice from red wine fermentation",
                        "es": "Sangrar jugo de la fermentación de vino tinto",
                        "de": "Saft aus der Rotweingärung abziehen",
                        "nl": "Sap aftappen van rode wijnfermentatie"
                  },
                  {
                        "en": "Using pink-skinned grapes",
                        "es": "Usar uvas de piel rosada",
                        "de": "Rosafarbene Trauben verwenden",
                        "nl": "Roze geschilde druiven gebruiken"
                  },
                  {
                        "en": "Short fermentation",
                        "es": "Fermentación corta",
                        "de": "Kurze Gärung",
                        "nl": "Korte fermentatie"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Saignée ('bleeding') involves draining juice from red grape must after brief skin contact, creating rosé while concentrating the remaining red wine. This produces fuller-bodied rosés.",
                  "es": "Saignée ('sangrado') implica drenar jugo del mosto de uva tinta después de un breve contacto con la piel, creando rosado mientras concentra el vino tinto restante. Esto produce rosados con más cuerpo.",
                  "de": "Saignée ('Bluten') bedeutet, Saft nach kurzem Schalenkontakt von der roten Traubenmaische abzulassen, wodurch Rosé entsteht und der verbleibende Rotwein konzentriert wird. Dies produziert vollmundigere Rosés.",
                  "nl": "Saignée ('bloeden') houdt in dat sap wordt afgetapt van rode druivenmost na kort contact met schillen, wat rosé creëert terwijl de resterende rode wijn wordt geconcentreerd. Dit produceert vollediger rosés."
            }
      },
            {
            "question": {
                  "en": "What is 'whole cluster' or 'whole bunch' fermentation?",
                  "es": "¿Qué es la fermentación de 'racimo entero' o 'manojo completo'?",
                  "de": "Was ist 'ganze Traube' oder 'ganzer Büschel'-Gärung?",
                  "nl": "Wat is 'hele tros' of 'hele bos' fermentatie?"
            },
            "options": [
                  {
                        "en": "Fermenting grapes with stems attached",
                        "es": "Fermentar uvas con tallos adjuntos",
                        "de": "Trauben mit Stielen vergären",
                        "nl": "Druiven met stelen fermenteren"
                  },
                  {
                        "en": "Fermenting without pressing",
                        "es": "Fermentar sin prensar",
                        "de": "Gären ohne Pressen",
                        "nl": "Fermenteren zonder persen"
                  },
                  {
                        "en": "Fermenting in large vessels",
                        "es": "Fermentar en recipientes grandes",
                        "de": "In großen Gefäßen gären",
                        "nl": "Fermenteren in grote vaten"
                  },
                  {
                        "en": "Long fermentation time",
                        "es": "Tiempo de fermentación largo",
                        "de": "Lange Gärzeit",
                        "nl": "Lange fermentatietijd"
                  }
            ],
            "correct": 0,
            "explanation": {
                  "en": "Whole cluster fermentation includes grape stems during fermentation, adding structure, spice notes, and complexity. Used in Burgundy Pinot Noir and some premium wines.",
                  "es": "La fermentación de racimo entero incluye los tallos de las uvas durante la fermentación, añadiendo estructura, notas especiadas y complejidad. Usado en Pinot Noir de Borgoña y algunos vinos premium.",
                  "de": "Ganze Trauben-Gärung schließt Traubenstiele während der Gärung ein, was Struktur, würzige Noten und Komplexität hinzufügt. Verwendet bei Burgunder Pinot Noir und einigen Premium-Weinen.",
                  "nl": "Hele tros fermentatie omvat druivenstelen tijdens fermentatie, wat structuur, kruidige tonen en complexiteit toevoegt. Gebruikt bij Bourgogne Pinot Noir en sommige premium wijnen."
            }
      },
            {
            "question": {
                  "en": "What is 'micro-oxygenation' in winemaking?",
                  "es": "¿Qué es la 'micro-oxigenación' en la vinificación?",
                  "de": "Was ist 'Mikro-Oxygenierung' im Weinbau?",
                  "nl": "Wat is 'micro-oxygenatie' in de wijnbouw?"
            },
            "options": [
                  {
                        "en": "Exposing wine to large amounts of air",
                        "es": "Exponer el vino a grandes cantidades de aire",
                        "de": "Wein großen Luftmengen aussetzen",
                        "nl": "Wijn blootstellen aan grote hoeveelheden lucht"
                  },
                  {
                        "en": "Controlled addition of tiny oxygen amounts",
                        "es": "Adición controlada de pequeñas cantidades de oxígeno",
                        "de": "Kontrollierte Zugabe winziger Sauerstoffmengen",
                        "nl": "Gecontroleerde toevoeging van kleine zuurstofhoeveelheden"
                  },
                  {
                        "en": "Removing all oxygen",
                        "es": "Eliminar todo el oxígeno",
                        "de": "Allen Sauerstoff entfernen",
                        "nl": "Alle zuurstof verwijderen"
                  },
                  {
                        "en": "Fermenting at high altitude",
                        "es": "Fermentar a gran altitud",
                        "de": "In großer Höhe gären",
                        "nl": "Fermenteren op grote hoogte"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Micro-oxygenation introduces controlled tiny oxygen amounts during aging to soften tannins, stabilize color, and improve wine structure without oxidation.",
                  "es": "La micro-oxigenación introduce pequeñas cantidades controladas de oxígeno durante el envejecimiento para suavizar taninos, estabilizar el color y mejorar la estructura del vino sin oxidación.",
                  "de": "Mikro-Oxygenierung führt während der Alterung kontrolliert winzige Sauerstoffmengen ein, um Tannine zu mildern, Farbe zu stabilisieren und die Weinstruktur ohne Oxidation zu verbessern.",
                  "nl": "Micro-oxygenatie introduceert gecontroleerd kleine zuurstofhoeveelheden tijdens rijping om tannines te verzachten, kleur te stabiliseren en wijnstructuur te verbeteren zonder oxidatie."
            }
      },
            {
            "question": {
                  "en": "What is 'racking' in wine production?",
                  "es": "¿Qué es el 'trasiego' en la producción de vino?",
                  "de": "Was ist 'Abziehen' bei der Weinproduktion?",
                  "nl": "Wat is 'aftappen' bij wijnproductie?"
            },
            "options": [
                  {
                        "en": "Storing wine on racks",
                        "es": "Almacenar vino en estantes",
                        "de": "Wein auf Regalen lagern",
                        "nl": "Wijn op rekken opslaan"
                  },
                  {
                        "en": "Transferring wine off sediment to another vessel",
                        "es": "Transferir vino de sedimentos a otro recipiente",
                        "de": "Wein von Sediment in ein anderes Gefäß umfüllen",
                        "nl": "Wijn van sediment naar een ander vat overgieten"
                  },
                  {
                        "en": "Adding racks of oak",
                        "es": "Agregar estantes de roble",
                        "de": "Eichenregale hinzufügen",
                        "nl": "Rekken van eiken toevoegen"
                  },
                  {
                        "en": "Shaking the wine",
                        "es": "Agitar el vino",
                        "de": "Den Wein schütteln",
                        "nl": "De wijn schudden"
                  }
            ],
            "correct": 1,
            "explanation": {
                  "en": "Racking is transferring wine from one container to another, leaving sediment behind. This clarifies wine and can introduce controlled oxygen exposure for development.",
                  "es": "El trasiego es transferir vino de un recipiente a otro, dejando atrás sedimentos. Esto aclara el vino y puede introducir exposición controlada al oxígeno para el desarrollo.",
                  "de": "Abziehen ist das Umfüllen von Wein von einem Behälter in einen anderen unter Zurücklassung von Sediment. Dies klärt den Wein und kann kontrollierte Sauerstoffexposition für die Entwicklung einführen.",
                  "nl": "Aftappen is het overgieten van wijn van de ene container naar een andere, waarbij sediment achterblijft. Dit klaart wijn en kan gecontroleerde zuurstofblootstelling voor ontwikkeling introduceren."
            }    },
    {
      question: {
        en: "What is the difference between French and American oak barrels?",
        es: "¿Cuál es la diferencia entre barricas de roble francés y americano?",
        de: "Was ist der Unterschied zwischen französischen und amerikanischen Eichenfässern?",
        nl: "Wat is het verschil tussen Franse en Amerikaanse eiken vaten?"
      },
      options: [
        { en: "French oak is tighter-grained and more subtle", es: "El roble francés tiene grano más apretado y es más sutil", de: "Französische Eiche ist feinkörniger und subtiler", nl: "Frans eiken is fijner van nerf en subtieler" },
        { en: "American oak is more expensive", es: "El roble americano es más caro", de: "Amerikanische Eiche ist teurer", nl: "Amerikaans eiken is duurder" },
        { en: "French oak comes in smaller barrels", es: "El roble francés viene en barricas más pequeñas", de: "Französische Eiche kommt in kleineren Fässern", nl: "Frans eiken komt in kleinere vaten" },
        { en: "There is no significant difference", es: "No hay diferencia significativa", de: "Es gibt keinen signifikanten Unterschied", nl: "Er is geen significant verschil" }
      ],
      correct: 0,
      explanation: {
        en: "French oak has tighter grain and imparts more subtle flavors (vanilla, spice), while American oak is more porous with bolder flavors (coconut, dill).",
        es: "El roble francés tiene un grano más apretado e imparte sabores más sutiles (vainilla, especias), mientras que el roble americano es más poroso con sabores más audaces (coco, eneldo).",
        de: "Französische Eiche hat feineres Korn und verleiht subtilere Aromen (Vanille, Gewürze), während amerikanische Eiche poröser ist mit kräftigeren Aromen (Kokosnuss, Dill).",
        nl: "Frans eiken heeft fijnere nerf en geeft subtielere smaken (vanille, kruiden), terwijl Amerikaans eiken poreuzer is met krachtigere smaken (kokos, dille)."
      }
    },
    {
      question: {
        en: "What is barrel toasting in wine production?",
        es: "¿Qué es el tostado de barricas en la producción de vino?",
        de: "Was ist Fassröstung in der Weinproduktion?",
        nl: "Wat is vat roosteren bij wijnproductie?"
      },
      options: [
        { en: "Heating barrel staves over fire", es: "Calentar duelas de barrica sobre fuego", de: "Fassdauben über Feuer erhitzen", nl: "Vatduigen boven vuur verhitten" },
        { en: "Toasting bread with wine", es: "Tostar pan con vino", de: "Brot mit Wein rösten", nl: "Brood roosteren met wijn" },
        { en: "Aging wine in hot climates", es: "Envejecer vino en climas cálidos", de: "Wein in heißen Klimazonen altern", nl: "Wijn rijpen in warme klimaten" },
        { en: "Baking barrels to dry them", es: "Hornear barricas para secarlas", de: "Fässer zum Trocknen backen", nl: "Vaten bakken om ze te drogen" }
      ],
      correct: 0,
      explanation: {
        en: "Barrel toasting chars the inside of barrels over fire, creating different flavor compounds. Light, medium, and heavy toast levels produce vanilla, caramel, or smoky notes.",
        es: "El tostado de barricas carboniza el interior de las barricas sobre fuego, creando diferentes compuestos de sabor. Los niveles de tostado ligero, medio y pesado producen notas de vainilla, caramelo o ahumadas.",
        de: "Fassröstung verkohlt das Innere von Fässern über Feuer und erzeugt verschiedene Geschmacksverbindungen. Leichte, mittlere und starke Röstgrade erzeugen Vanille-, Karamell- oder Rauchnoten.",
        nl: "Vat roosteren verkoolt de binnenkant van vaten boven vuur, wat verschillende smaakverbindingen creëert. Licht, medium en zwaar geroosterde niveaus produceren vanille-, karamel- of rokerige tonen."
      }
    },
    {
      question: {
        en: "What is extended maceration in red winemaking?",
        es: "¿Qué es la maceración extendida en la vinificación de vino tinto?",
        de: "Was ist verlängerte Mazeration bei der Rotweinerzeugung?",
        nl: "Wat is verlengde maceratie bij rode wijnproductie?"
      },
      options: [
        { en: "Long skin contact after fermentation", es: "Contacto prolongado con la piel después de la fermentación", de: "Langer Schalenkontakt nach der Gärung", nl: "Lang schilcontact na fermentatie" },
        { en: "Fermenting for many months", es: "Fermentar durante muchos meses", de: "Viele Monate lang gären", nl: "Maandenlang fermenteren" },
        { en: "Soaking grapes before pressing", es: "Remojar uvas antes de prensar", de: "Trauben vor dem Pressen einweichen", nl: "Druiven weken voor persen" },
        { en: "Extended barrel aging", es: "Envejecimiento prolongado en barrica", de: "Verlängerte Fassreifung", nl: "Verlengde vatrijping" }
      ],
      correct: 0,
      explanation: {
        en: "Extended maceration keeps wine in contact with skins for weeks or months after fermentation finishes, extracting softer tannins and deeper flavors without harshness.",
        es: "La maceración extendida mantiene el vino en contacto con las pieles durante semanas o meses después de que termina la fermentación, extrayendo taninos más suaves y sabores más profundos sin aspereza.",
        de: "Verlängerte Mazeration hält Wein wochen- oder monatelang nach Ende der Gärung in Kontakt mit Schalen und extrahiert weichere Tannine und tiefere Aromen ohne Härte.",
        nl: "Verlengde maceratie houdt wijn weken of maanden in contact met schillen nadat fermentatie is afgelopen, wat zachtere tannines en diepere smaken extraheert zonder hardheid."
      }
    },
    {
      question: {
        en: "What are concrete eggs used for in winemaking?",
        es: "¿Para qué se utilizan los huevos de hormigón en la vinificación?",
        de: "Wofür werden Betoneier in der Weinherstellung verwendet?",
        nl: "Waarvoor worden betonnen eieren gebruikt bij wijnmaken?"
      },
      options: [
        { en: "Fermentation and aging vessels", es: "Recipientes de fermentación y envejecimiento", de: "Gär- und Reifebehälter", nl: "Fermentatie- en rijpingsvaten" },
        { en: "Egg white fining agents", es: "Agentes clarificantes de clara de huevo", de: "Eiweiß-Schönungsmittel", nl: "Eiwit zuiveringsmiddelen" },
        { en: "Decorative cellar items", es: "Artículos decorativos de bodega", de: "Dekorative Kellerartikel", nl: "Decoratieve kelderobjecten" },
        { en: "Temperature control devices", es: "Dispositivos de control de temperatura", de: "Temperaturkontrollgeräte", nl: "Temperatuurcontrole apparaten" }
      ],
      correct: 0,
      explanation: {
        en: "Concrete eggs are egg-shaped fermentation vessels that create natural convection currents, keeping lees suspended and adding texture without oak flavors.",
        es: "Los huevos de hormigón son recipientes de fermentación en forma de huevo que crean corrientes de convección naturales, manteniendo las lías en suspensión y añadiendo textura sin sabores de roble.",
        de: "Betoneier sind eiförmige Gärbehälter, die natürliche Konvektionsströmungen erzeugen, die Hefe in der Schwebe halten und Textur ohne Eichenaromen hinzufügen.",
        nl: "Betonnen eieren zijn eivormige fermentatievaten die natuurlijke convectiestromen creëren, die droesem in suspensie houden en textuur toevoegen zonder eikensmaak."
      }
    },
    {
      question: {
        en: "What is cross-flow filtration?",
        es: "¿Qué es la filtración de flujo cruzado?",
        de: "Was ist Querstromfiltration?",
        nl: "Wat is crossflow filtratie?"
      },
      options: [
        { en: "Advanced tangential filtration technique", es: "Técnica avanzada de filtración tangencial", de: "Fortschrittliche Tangentialfiltrationstechnik", nl: "Geavanceerde tangentiële filtratietechniek" },
        { en: "Filtering wine across vineyard rows", es: "Filtrar vino a través de hileras de viñedos", de: "Wein über Weinbergreihen filtern", nl: "Wijn filteren over wijngaardrijen" },
        { en: "Using crossed filter papers", es: "Usar papeles de filtro cruzados", de: "Verwendung von gekreuzten Filterpapieren", nl: "Gebruik van gekruiste filterpapers" },
        { en: "Traditional barrel filtration", es: "Filtración tradicional de barrica", de: "Traditionelle Fassfiltration", nl: "Traditionele vatfiltratie" }
      ],
      correct: 0,
      explanation: {
        en: "Cross-flow filtration pumps wine parallel to filter membranes, preventing clogging and removing particles while preserving wine quality better than traditional methods.",
        es: "La filtración de flujo cruzado bombea vino paralelo a las membranas del filtro, evitando obstrucciones y eliminando partículas mientras preserva mejor la calidad del vino que los métodos tradicionales.",
        de: "Querstromfiltration pumpt Wein parallel zu Filtermembranen, verhindert Verstopfung und entfernt Partikel, während die Weinqualität besser erhalten bleibt als bei traditionellen Methoden.",
        nl: "Crossflow filtratie pompt wijn parallel aan filtermembranen, voorkomt verstopping en verwijdert deeltjes terwijl wijnkwaliteit beter behouden blijft dan traditionele methoden."
      }
    },
    {
      question: {
        en: "What are amphoras in winemaking?",
        es: "¿Qué son las ánforas en la vinificación?",
        de: "Was sind Amphoren in der Weinherstellung?",
        nl: "Wat zijn amfora's bij wijnmaken?"
      },
      options: [
        { en: "Ancient clay fermentation vessels", es: "Recipientes antiguos de fermentación de arcilla", de: "Antike Tongefäße zur Gärung", nl: "Oude kleien fermentatievaten" },
        { en: "Modern steel tanks", es: "Tanques modernos de acero", de: "Moderne Stahltanks", nl: "Moderne stalen tanks" },
        { en: "French oak barrels", es: "Barricas de roble francés", de: "Französische Eichenfässer", nl: "Franse eiken vaten" },
        { en: "Grape pressing machines", es: "Máquinas de prensar uvas", de: "Traubenpressen", nl: "Druivenpersers" }
      ],
      correct: 0,
      explanation: {
        en: "Amphoras are egg-shaped terracotta vessels used for 8,000 years, now revived in natural winemaking. They allow micro-oxygenation without oak influence.",
        es: "Las ánforas son recipientes de terracota en forma de huevo utilizados durante 8,000 años, ahora revividos en la vinificación natural. Permiten micro-oxigenación sin influencia de roble.",
        de: "Amphoren sind eiförmige Terrakottagefäße, die seit 8.000 Jahren verwendet werden und jetzt in der natürlichen Weinherstellung wiederbelebt wurden. Sie ermöglichen Mikro-Oxygenierung ohne Eicheneinfluss.",
        nl: "Amfora's zijn eivormige terracotta vaten die 8.000 jaar zijn gebruikt, nu herleefd in natuurlijke wijnmakerij. Ze maken micro-oxygenatie mogelijk zonder eiken invloed."
      }
    },
    {
      question: {
        en: "What is the purpose of adding sulfites (SO2) to wine?",
        es: "¿Cuál es el propósito de agregar sulfitos (SO2) al vino?",
        de: "Was ist der Zweck der Zugabe von Sulfiten (SO2) zum Wein?",
        nl: "Wat is het doel van het toevoegen van sulfieten (SO2) aan wijn?"
      },
      options: [
        { en: "Preservation and antioxidant protection", es: "Preservación y protección antioxidante", de: "Konservierung und antioxidativer Schutz", nl: "Conservering en antioxidant bescherming" },
        { en: "Adding sweetness", es: "Añadir dulzura", de: "Süße hinzufügen", nl: "Zoetheid toevoegen" },
        { en: "Increasing alcohol content", es: "Aumentar el contenido de alcohol", de: "Alkoholgehalt erhöhen", nl: "Alcoholgehalte verhogen" },
        { en: "Clarifying wine", es: "Clarificar el vino", de: "Wein klären", nl: "Wijn klaren" }
      ],
      correct: 0,
      explanation: {
        en: "Sulfites prevent oxidation and microbial spoilage. Even 'no added sulfite' wines contain natural sulfites from fermentation. Used since Roman times.",
        es: "Los sulfitos previenen la oxidación y el deterioro microbiano. Incluso los vinos 'sin sulfitos añadidos' contienen sulfitos naturales de la fermentación. Usado desde tiempos romanos.",
        de: "Sulfite verhindern Oxidation und mikrobiellen Verderb. Selbst 'ohne zugesetzte Sulfite'-Weine enthalten natürliche Sulfite aus der Gärung. Seit römischer Zeit verwendet.",
        nl: "Sulfieten voorkomen oxidatie en microbieel bederf. Zelfs 'geen toegevoegde sulfiet' wijnen bevatten natuurlijke sulfieten van fermentatie. Gebruikt sinds Romeinse tijden."
      }
    },
    {
      question: {
        en: "What is bentonite used for in winemaking?",
        es: "¿Para qué se utiliza la bentonita en la vinificación?",
        de: "Wofür wird Bentonit in der Weinherstellung verwendet?",
        nl: "Waarvoor wordt bentoniet gebruikt bij wijnmaken?"
      },
      options: [
        { en: "Fining agent to remove proteins", es: "Agente clarificante para eliminar proteínas", de: "Schönungsmittel zum Entfernen von Proteinen", nl: "Zuiveringsmiddel om eiwitten te verwijderen" },
        { en: "Adding minerals to wine", es: "Añadir minerales al vino", de: "Mineralien zum Wein hinzufügen", nl: "Mineralen toevoegen aan wijn" },
        { en: "Preventing fermentation", es: "Prevenir la fermentación", de: "Gärung verhindern", nl: "Fermentatie voorkomen" },
        { en: "Adjusting acidity", es: "Ajustar la acidez", de: "Säure anpassen", nl: "Zuurgraad aanpassen" }
      ],
      correct: 0,
      explanation: {
        en: "Bentonite is a clay-based fining agent that removes unstable proteins from white wines, preventing haziness. It binds to proteins and settles out.",
        es: "La bentonita es un agente clarificante a base de arcilla que elimina proteínas inestables de los vinos blancos, previniendo la turbidez. Se une a las proteínas y se asienta.",
        de: "Bentonit ist ein tonbasiertes Schönungsmittel, das instabile Proteine aus Weißweinen entfernt und Trübung verhindert. Es bindet an Proteine und setzt sich ab.",
        nl: "Bentoniet is een klei-gebaseerd zuiveringsmiddel dat instabiele eiwitten uit witte wijnen verwijdert, waardoor troebeling wordt voorkomen. Het bindt aan eiwitten en bezinkt."
      }
    },
    {
      question: {
        en: "What is a rotary fermenter?",
        es: "¿Qué es un fermentador rotativo?",
        de: "Was ist ein Rotationsgärbehälter?",
        nl: "Wat is een roterende fermenter?"
      },
      options: [
        { en: "Horizontal rotating tank for extraction", es: "Tanque giratorio horizontal para extracción", de: "Horizontal rotierender Tank zur Extraktion", nl: "Horizontale roterende tank voor extractie" },
        { en: "Traditional wooden barrel", es: "Barrica tradicional de madera", de: "Traditionelles Holzfass", nl: "Traditioneel houten vat" },
        { en: "Spinning filter device", es: "Dispositivo de filtro giratorio", de: "Drehendes Filtergerät", nl: "Draaiend filterapparaat" },
        { en: "Automated stirring mechanism", es: "Mecanismo de agitación automático", de: "Automatischer Rührmechanismus", nl: "Geautomatiseerd roermechanisme" }
      ],
      correct: 0,
      explanation: {
        en: "Rotary fermenters are horizontal tanks that rotate during fermentation, gently extracting color and tannins without harsh pumping over or punching down.",
        es: "Los fermentadores rotativos son tanques horizontales que rotan durante la fermentación, extrayendo suavemente color y taninos sin bombeo duro o pisado.",
        de: "Rotationsgärbehälter sind horizontale Tanks, die während der Gärung rotieren und sanft Farbe und Tannine extrahieren ohne hartes Überpumpen oder Unterstoßen.",
        nl: "Roterende fermenters zijn horizontale tanks die tijdens fermentatie roteren, wat zachtjes kleur en tannines extraheert zonder hard overpompen of onderstampen."
      }
    },
    {
      question: {
        en: "What is flash détente?",
        es: "¿Qué es la flash détente?",
        de: "Was ist Flash Détente?",
        nl: "Wat is flash détente?"
      },
      options: [
        { en: "Rapid heating and cooling for extraction", es: "Calentamiento y enfriamiento rápido para extracción", de: "Schnelles Erhitzen und Kühlen zur Extraktion", nl: "Snel verwarmen en koelen voor extractie" },
        { en: "Quick fermentation method", es: "Método de fermentación rápida", de: "Schnelle Gärungsmethode", nl: "Snelle fermentatiemethode" },
        { en: "Fast filtration technique", es: "Técnica de filtración rápida", de: "Schnelle Filtrationstechnik", nl: "Snelle filtratietechniek" },
        { en: "Instant barrel aging", es: "Envejecimiento instantáneo en barrica", de: "Sofortige Fassreifung", nl: "Directe vatrijping" }
      ],
      correct: 0,
      explanation: {
        en: "Flash détente heats crushed grapes to 85°C then rapidly cools under vacuum, bursting cells to extract intense color and flavor, used in value wines and challenging vintages.",
        es: "Flash détente calienta uvas trituradas a 85°C y luego enfría rápidamente al vacío, rompiendo células para extraer color y sabor intensos, usado en vinos de valor y cosechas desafiantes.",
        de: "Flash Détente erhitzt zerdrückte Trauben auf 85°C und kühlt dann schnell unter Vakuum, wodurch Zellen platzen, um intensive Farbe und Geschmack zu extrahieren, verwendet bei Wertweinen und schwierigen Jahrgängen.",
        nl: "Flash détente verwarmt geperste druiven tot 85°C en koelt dan snel onder vacuüm, waarbij cellen barsten om intense kleur en smaak te extraheren, gebruikt bij waardevolle wijnen en uitdagende oogsten."
      }
    },
    {
      question: {
        en: "What does 'vegan wine' mean?",
        es: "¿Qué significa 'vino vegano'?",
        de: "Was bedeutet 'veganer Wein'?",
        nl: "Wat betekent 'veganistische wijn'?"
      },
      options: [
        { en: "No animal-derived fining agents used", es: "No se utilizan agentes clarificantes derivados de animales", de: "Keine tierischen Schönungsmittel verwendet", nl: "Geen dierlijke zuiveringsmiddelen gebruikt" },
        { en: "Made from vegan grapes", es: "Hecho de uvas veganas", de: "Aus veganen Trauben hergestellt", nl: "Gemaakt van veganistische druiven" },
        { en: "Organic wine only", es: "Solo vino orgánico", de: "Nur Bio-Wein", nl: "Alleen biologische wijn" },
        { en: "No alcohol content", es: "Sin contenido de alcohol", de: "Kein Alkoholgehalt", nl: "Geen alcoholgehalte" }
      ],
      correct: 0,
      explanation: {
        en: "Vegan wines avoid animal-derived fining agents like egg whites, gelatin, or isinglass (fish bladder). They use bentonite clay or mechanical filtration instead.",
        es: "Los vinos veganos evitan agentes clarificantes derivados de animales como claras de huevo, gelatina o cola de pescado. Usan arcilla bentonita o filtración mecánica en su lugar.",
        de: "Vegane Weine vermeiden tierische Schönungsmittel wie Eiweiß, Gelatine oder Hausenblase. Sie verwenden stattdessen Bentonit-Ton oder mechanische Filtration.",
        nl: "Veganistische wijnen vermijden dierlijke zuiveringsmiddelen zoals eiwitten, gelatine of vislijm. Ze gebruiken in plaats daarvan bentonietklei of mechanische filtratie."
      }
    },
    {
      question: {
        en: "What is the Charmat method for sparkling wine?",
        es: "¿Qué es el método Charmat para vino espumoso?",
        de: "Was ist die Charmat-Methode für Schaumwein?",
        nl: "Wat is de Charmat methode voor mousserende wijn?"
      },
      options: [
        { en: "Second fermentation in pressurized tanks", es: "Segunda fermentación en tanques presurizados", de: "Zweite Gärung in Drucktanks", nl: "Tweede fermentatie in druktanks" },
        { en: "Hand-riddling bottles", es: "Removido manual de botellas", de: "Handgerütteltes Flaschen", nl: "Handmatig flessen remu

eren" },
        { en: "Aging on lees for years", es: "Envejecimiento sobre lías durante años", de: "Jahrelanges Reifen auf Hefe", nl: "Jarenlang rijpen op droesem" },
        { en: "Adding CO2 directly", es: "Añadir CO2 directamente", de: "CO2 direkt hinzufügen", nl: "CO2 direct toevoegen" }
      ],
      correct: 0,
      explanation: {
        en: "The Charmat method conducts secondary fermentation in large pressurized tanks instead of bottles, making fresher, fruitier sparklings like Prosecco faster and cheaper.",
        es: "El método Charmat realiza la fermentación secundaria en grandes tanques presurizados en lugar de botellas, haciendo espumosos más frescos y afrutados como Prosecco más rápido y barato.",
        de: "Die Charmat-Methode führt die zweite Gärung in großen Drucktanks statt in Flaschen durch und erzeugt frischere, fruchtigere Schaumweine wie Prosecco schneller und günstiger.",
        nl: "De Charmat methode voert secundaire fermentatie uit in grote druktanks in plaats van flessen, wat frisser, fruitigere mousserende wijnen zoals Prosecco sneller en goedkoper maakt."
      }
    },
    {
      question: {
        en: "What is skin contact in white winemaking?",
        es: "¿Qué es el contacto con la piel en la vinificación de vino blanco?",
        de: "Was ist Schalenkontakt bei der Weißweinerzeugung?",
        nl: "Wat is schilcontact bij witte wijnproductie?"
      },
      options: [
        { en: "Leaving juice with skins before fermentation", es: "Dejar el jugo con las pieles antes de la fermentación", de: "Saft vor der Gärung mit Schalen lassen", nl: "Sap met schillen laten voor fermentatie" },
        { en: "Touching grapes by hand", es: "Tocar uvas con la mano", de: "Trauben mit der Hand berühren", nl: "Druiven met de hand aanraken" },
        { en: "Removing all grape skins", es: "Eliminar todas las pieles de uva", de: "Alle Traubenschalen entfernen", nl: "Alle druivenschillen verwijderen" },
        { en: "Aging in skin-like containers", es: "Envejecer en recipientes similares a la piel", de: "Reifung in hautähnlichen Behältern", nl: "Rijpen in huidachtige containers" }
      ],
      correct: 0,
      explanation: {
        en: "Skin contact (maceration) for white wines extracts aromatics, phenolics, and texture from grape skins, creating more complex, fuller-bodied wines. Extended contact makes orange wines.",
        es: "El contacto con la piel (maceración) para vinos blancos extrae aromáticos, fenólicos y textura de las pieles de uva, creando vinos más complejos y con cuerpo. El contacto extendido hace vinos naranjas.",
        de: "Schalenkontakt (Mazeration) bei Weißweinen extrahiert Aromastoffe, Phenole und Textur aus Traubenschalen und erzeugt komplexere, vollmundigere Weine. Verlängerter Kontakt macht Orange-Weine.",
        nl: "Schilcontact (maceratie) voor witte wijnen extraheert aroma's, fenolen en textuur uit druivenschillen, wat complexere, vollere wijnen creëert. Verlengd contact maakt oranje wijnen."
      }
    },
    {
      question: {
        en: "What is reverse osmosis in winemaking?",
        es: "¿Qué es la ósmosis inversa en la vinificación?",
        de: "Was ist Umkehrosmose in der Weinherstellung?",
        nl: "Wat is omgekeerde osmose bij wijnmaken?"
      },
      options: [
        { en: "Membrane filtration to adjust alcohol/water", es: "Filtración por membrana para ajustar alcohol/agua", de: "Membranfiltration zur Anpassung von Alkohol/Wasser", nl: "Membraanfiltratie om alcohol/water aan te passen" },
        { en: "Backwards fermentation process", es: "Proceso de fermentación inverso", de: "Rückwärtiger Gärungsprozess", nl: "Achterwaarts fermentatieproces" },
        { en: "Osmotic pressure aging", es: "Envejecimiento por presión osmótica", de: "Osmotischer Druckalterung", nl: "Osmotische druk rijping" },
        { en: "Reversing wine oxidation", es: "Revertir la oxidación del vino", de: "Weinoxidation umkehren", nl: "Wijnoxidatie omkeren" }
      ],
      correct: 0,
      explanation: {
        en: "Reverse osmosis uses semi-permeable membranes to remove water (concentrating wine) or alcohol (reducing ABV). Controversial but useful for adjusting wine in challenging vintages.",
        es: "La ósmosis inversa usa membranas semipermeables para eliminar agua (concentrando vino) o alcohol (reduciendo ABV). Controvertido pero útil para ajustar vino en cosechas desafiantes.",
        de: "Umkehrosmose verwendet halbdurchlässige Membranen, um Wasser (Wein konzentrieren) oder Alkohol (ABV reduzieren) zu entfernen. Umstritten aber nützlich zur Anpassung von Wein in schwierigen Jahrgängen.",
        nl: "Omgekeerde osmose gebruikt semi-permeabele membranen om water (wijn concentreren) of alcohol (ABV verlagen) te verwijderen. Controversieel maar nuttig voor aanpassing van wijn in uitdagende oogsten."
      }
    },
    {
      question: {
        en: "What is whole-bunch pressing in sparkling wine production?",
        es: "¿Qué es el prensado de racimo entero en la producción de vino espumoso?",
        de: "Was ist Ganztraubenpressung in der Schaumweinproduktion?",
        nl: "Wat is hele-tros persen bij mousserende wijnproductie?"
      },
      options: [
        { en: "Pressing uncrushed grape clusters gently", es: "Prensar racimos de uva sin triturar suavemente", de: "Ungequetschte Traubenbüschel sanft pressen", nl: "Ongeperste druiventrossen zachtjes persen" },
        { en: "Crushing all grapes together", es: "Triturar todas las uvas juntas", de: "Alle Trauben zusammen quetschen", nl: "Alle druiven samen pletten" },
        { en: "Machine harvesting grapes", es: "Cosecha mecánica de uvas", de: "Maschinelle Traubenernte", nl: "Machinaal druiven oogsten" },
        { en: "Foot-treading grapes", es: "Pisar uvas con los pies", de: "Trauben mit den Füßen treten", nl: "Druiven met voeten trappen" }
      ],
      correct: 0,
      explanation: {
        en: "Whole-bunch pressing gently presses intact grape clusters without crushing, extracting cleaner juice with less phenolics for delicate sparkling wines like Champagne.",
        es: "El prensado de racimo entero prensa suavemente racimos de uva intactos sin triturar, extrayendo jugo más limpio con menos fenólicos para vinos espumosos delicados como Champagne.",
        de: "Ganztraubenpressung presst sanft intakte Traubenbüschel ohne Quetschen und extrahiert saubereren Saft mit weniger Phenolen für delikate Schaumweine wie Champagner.",
        nl: "Hele-tros persen perst zachtjes intacte druiventrossen zonder pletten, wat schoner sap extraheert met minder fenolen voor delicate mousserende wijnen zoals Champagne."
      }
    },
    {
      question: {
        en: "What is indigenous or wild yeast fermentation?",
        es: "¿Qué es la fermentación con levaduras indígenas o silvestres?",
        de: "Was ist indigene oder wilde Hefefermentation?",
        nl: "Wat is inheemse of wilde gistfermentatie?"
      },
      options: [
        { en: "Fermentation with natural vineyard yeasts", es: "Fermentación con levaduras naturales del viñedo", de: "Gärung mit natürlichen Weinberghefen", nl: "Fermentatie met natuurlijke wijngaardgisten" },
        { en: "Using laboratory-cultured yeasts", es: "Usar levaduras cultivadas en laboratorio", de: "Verwendung von im Labor kultivierten Hefen", nl: "Gebruik van laboratorium gekweekte gisten" },
        { en: "Fermenting without any yeast", es: "Fermentar sin levadura", de: "Gären ohne Hefe", nl: "Fermenteren zonder gist" },
        { en: "Importing yeasts from other countries", es: "Importar levaduras de otros países", de: "Hefen aus anderen Ländern importieren", nl: "Gisten importeren uit andere landen" }
      ],
      correct: 0,
      explanation: {
        en: "Indigenous fermentation relies on native yeasts from vineyard and winery, creating more complex, terroir-driven wines but with higher risk of stuck fermentation or off-flavors.",
        es: "La fermentación indígena se basa en levaduras nativas del viñedo y la bodega, creando vinos más complejos impulsados por el terroir pero con mayor riesgo de fermentación atascada o sabores desagradables.",
        de: "Indigene Gärung verlässt sich auf einheimische Hefen vom Weinberg und Weingut und erzeugt komplexere, terroir-getriebene Weine, aber mit höherem Risiko für stockende Gärung oder Fehlaromen.",
        nl: "Inheemse fermentatie vertrouwt op inheemse gisten van wijngaard en wijnmakerij, wat complexere, terroir-gedreven wijnen creëert maar met hoger risico op vastgelopen fermentatie of ongewenste smaken."
      }
    },
    {
      question: {
        en: "What is disgorgement in sparkling wine production?",
        es: "¿Qué es el degüelle en la producción de vino espumoso?",
        de: "Was ist Degorgieren in der Schaumweinproduktion?",
        nl: "Wat is degorgeren bij mousserende wijnproductie?"
      },
      options: [
        { en: "Removing sediment from bottle neck", es: "Eliminar sedimento del cuello de la botella", de: "Sediment aus dem Flaschenhals entfernen", nl: "Sediment uit de flessenhals verwijderen" },
        { en: "Adding sugar dosage", es: "Añadir dosificación de azúcar", de: "Zuckerdosierung hinzufügen", nl: "Suikerdosering toevoegen" },
        { en: "Riddling bottles", es: "Removido de botellas", de: "Flaschen rütteln", nl: "Flessen remueren" },
        { en: "Second fermentation", es: "Segunda fermentación", de: "Zweite Gärung", nl: "Tweede fermentatie" }
      ],
      correct: 0,
      explanation: {
        en: "Disgorgement freezes the bottle neck, pops out the frozen sediment plug, then adds dosage (sugar and wine) before final corking in méthode champenoise.",
        es: "El degüelle congela el cuello de la botella, expulsa el tapón de sedimento congelado, luego añade dosificación (azúcar y vino) antes del corcho final en el método champenoise.",
        de: "Degorgieren friert den Flaschenhals ein, stößt den gefrorenen Sedimentpfropfen aus, fügt dann Dosage (Zucker und Wein) vor dem endgültigen Verkorken in der Méthode Champenoise hinzu.",
        nl: "Degorgeren bevriest de flessenhals, laat de bevroren sedimentplug eruit springen, voegt dan dosage (suiker en wijn) toe voor definitieve kurken in méthode champenoise."
      }
    },
    {
      question: {
        en: "What is the dosage in Champagne production?",
        es: "¿Qué es la dosificación en la producción de Champagne?",
        de: "Was ist die Dosage in der Champagnerproduktion?",
        nl: "Wat is de dosage bij Champagneproductie?"
      },
      options: [
        { en: "Sugar and wine mixture added before corking", es: "Mezcla de azúcar y vino añadida antes del corcho", de: "Zucker-Wein-Mischung vor dem Verkorken hinzugefügt", nl: "Suiker-wijn mengsel toegevoegd voor kurken" },
        { en: "Amount of yeast added", es: "Cantidad de levadura añadida", de: "Menge der hinzugefügten Hefe", nl: "Hoeveelheid toegevoegde gist" },
        { en: "Alcohol percentage", es: "Porcentaje de alcohol", de: "Alkoholprozentsatz", nl: "Alcoholpercentage" },
        { en: "Aging time in cellar", es: "Tiempo de envejecimiento en bodega", de: "Reifezeit im Keller", nl: "Rijpingstijd in kelder" }
      ],
      correct: 0,
      explanation: {
        en: "Dosage (liqueur d'expédition) is a mixture of wine and sugar added after disgorgement to adjust sweetness level, from Brut Nature (0g/L) to Doux (50+g/L).",
        es: "La dosificación (licor de expedición) es una mezcla de vino y azúcar añadida después del degüelle para ajustar el nivel de dulzura, desde Brut Nature (0g/L) hasta Doux (50+g/L).",
        de: "Dosage (Versandlikör) ist eine Mischung aus Wein und Zucker, die nach dem Degorgieren hinzugefügt wird, um den Süßegrad anzupassen, von Brut Nature (0g/L) bis Doux (50+g/L).",
        nl: "Dosage (liqueur d'expédition) is een mengsel van wijn en suiker toegevoegd na degorgeren om het zoetheid niveau aan te passen, van Brut Nature (0g/L) tot Doux (50+g/L)."
      }
    },
    {
      question: {
        en: "What is remontage (pumping over) in red winemaking?",
        es: "¿Qué es el remontage (bombeo) en la vinificación de vino tinto?",
        de: "Was ist Remontage (Überpumpen) bei der Rotweinerzeugung?",
        nl: "Wat is remontage (overpompen) bij rode wijnproductie?"
      },
      options: [
        { en: "Pumping juice over the grape cap", es: "Bombear jugo sobre el sombrero de uva", de: "Saft über den Tresterhut pumpen", nl: "Sap over de druivenkap pompen" },
        { en: "Transferring wine between barrels", es: "Transferir vino entre barricas", de: "Wein zwischen Fässern umfüllen", nl: "Wijn tussen vaten overpompen" },
        { en: "Pumping wine for aeration", es: "Bombear vino para aireación", de: "Wein zur Belüftung pumpen", nl: "Wijn pompen voor beluchting" },
        { en: "Removing sediment", es: "Eliminar sedimento", de: "Sediment entfernen", nl: "Sediment verwijderen" }
      ],
      correct: 0,
      explanation: {
        en: "Remontage pumps fermenting juice from the bottom of the tank over the floating grape cap to extract color, tannins, and flavors during red wine fermentation.",
        es: "El remontage bombea jugo en fermentación desde el fondo del tanque sobre el sombrero de uva flotante para extraer color, taninos y sabores durante la fermentación del vino tinto.",
        de: "Remontage pumpt gärenden Saft vom Boden des Tanks über den schwimmenden Tresterhut, um Farbe, Tannine und Aromen während der Rotweingärung zu extrahieren.",
        nl: "Remontage pompt gistend sap vanaf de bodem van de tank over de drijvende druivenkap om kleur, tannines en smaken te extraheren tijdens rode wijnfermentatie."
      }
    },
    {
      question: {
        en: "What is the delestage technique?",
        es: "¿Qué es la técnica de delestage?",
        de: "Was ist die Delestage-Technik?",
        nl: "Wat is de delestage techniek?"
      },
      options: [
        { en: "Rack and return method during fermentation", es: "Método de trasiego y retorno durante la fermentación", de: "Abzieh- und Rückführmethode während der Gärung", nl: "Aftap- en terugkeermethode tijdens fermentatie" },
        { en: "Foot-treading grapes", es: "Pisar uvas con los pies", de: "Trauben mit den Füßen treten", nl: "Druiven met voeten trappen" },
        { en: "Cold soaking technique", es: "Técnica de remojo en frío", de: "Kaltmazeration Technik", nl: "Koud weken techniek" },
        { en: "Filtering through layers", es: "Filtrar a través de capas", de: "Durch Schichten filtern", nl: "Filteren door lagen" }
      ],
      correct: 0,
      explanation: {
        en: "Delestage drains fermenting wine from the tank, aerating it, while the dry cap breaks apart. Wine is then pumped back, providing gentle extraction and oxygen exposure.",
        es: "El delestage drena vino en fermentación del tanque, aireándolo, mientras el sombrero seco se rompe. Luego se bombea el vino de regreso, proporcionando extracción suave y exposición al oxígeno.",
        de: "Delestage lässt gärenden Wein aus dem Tank ab und belüftet ihn, während sich der trockene Hut auflöst. Wein wird dann zurückgepumpt, was sanfte Extraktion und Sauerstoffzufuhr ermöglicht.",
        nl: "Delestage tapt gistende wijn af uit de tank, waarbij het wordt belucht, terwijl de droge kap uit elkaar valt. Wijn wordt dan teruggepompt, wat zachte extractie en zuurstofblootstelling biedt."
      }
    }
  ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
