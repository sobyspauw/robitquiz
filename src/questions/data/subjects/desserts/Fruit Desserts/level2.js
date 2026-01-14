// Fruit Desserts Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "Fruit Desserts - Level 2",
          "es": "Postres de Fruta - Nivel 2",
          "de": "Fruchtdesserts - Level 2",
          "nl": "Fruitdesserts - Level 2"
    },
    questions: [
      {
        question: {
                  "en": "What enzyme is responsible for the browning of cut apples and how can it be inhibited?",
                  "es": "¿Qué enzima es responsable del pardeamiento de las manzanas cortadas y cómo se puede inhibir?",
                  "de": "Welches Enzym ist für die Bräunung geschnittener Äpfel verantwortlich und wie kann es gehemmt werden?",
                  "nl": "Welk enzym is verantwoordelijk voor het bruin worden van gesneden appels en hoe kan het worden geremd?"
        },
        options: [
        {
                  "en": "Amylase; inhibited by heat treatment",
                  "es": "Amilasa; inhibida por tratamiento térmico",
                  "de": "Amylase; gehemmt durch Wärmebehandlung",
                  "nl": "Amylase; geremd door warmtebehandeling"
        },
        {
                  "en": "Pectinase; inhibited by sugar",
                  "es": "Pectinasa; inhibida por azúcar",
                  "de": "Pektinase; gehemmt durch Zucker",
                  "nl": "Pectinase; geremd door suiker"
        },
        {
                  "en": "Polyphenol oxidase; inhibited by acid or antioxidants",
                  "es": "Polifenol oxidasa; inhibida por ácido o antioxidantes",
                  "de": "Polyphenoloxidase; gehemmt durch Säure oder Antioxidantien",
                  "nl": "Polyfenoloxidase; geremd door zuur of antioxidanten"
        },
        {
                  "en": "Catalase; inhibited by salt",
                  "es": "Catalasa; inhibida por sal",
                  "de": "Katalase; gehemmt durch Salz",
                  "nl": "Catalase; geremd door zout"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Polyphenol oxidase causes enzymatic browning in fruits. It can be inhibited by acidic conditions (lemon juice) or antioxidants like ascorbic acid (vitamin C).",
                  "es": "La polifenol oxidasa causa pardeamiento enzimático en frutas. Puede ser inhibida por condiciones ácidas (jugo de limón) o antioxidantes como ácido ascórbico (vitamina C).",
                  "de": "Polyphenoloxidase verursacht enzymatische Bräunung in Früchten. Sie kann durch saure Bedingungen (Zitronensaft) oder Antioxidantien wie Ascorbinsäure (Vitamin C) gehemmt werden.",
                  "nl": "Polyfenoloxidase veroorzaakt enzymatische bruining in fruit. Het kan worden geremd door zure omstandigheden (citroensap) of antioxidanten zoals ascorbinezuur (vitamine C)."
        }
      },
      {
        question: {
                  "en": "What is the optimal sugar concentration for making fruit preserves that will gel properly?",
                  "es": "¿Cuál es la concentración óptima de azúcar para hacer conservas de fruta que gelificarán adecuadamente?",
                  "de": "Was ist die optimale Zuckerkonzentration für die Herstellung von Fruchtkonserven, die richtig gelieren?",
                  "nl": "Wat is de optimale suikerconcentratie voor het maken van fruitconserven die goed geleren?"
        },
        options: [
        {
                  "en": "60-65%",
                  "es": "60-65%",
                  "de": "60-65%",
                  "nl": "60-65%"
        },
        {
                  "en": "45-50%",
                  "es": "45-50%",
                  "de": "45-50%",
                  "nl": "45-50%"
        },
        {
                  "en": "85-90%",
                  "es": "85-90%",
                  "de": "85-90%",
                  "nl": "85-90%"
        },
        {
                  "en": "75-80%",
                  "es": "75-80%",
                  "de": "75-80%",
                  "nl": "75-80%"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "60-65% sugar concentration is optimal for proper gel formation with pectin. This level provides the right balance for pectin network formation while preserving the fruit.",
                  "es": "La concentración de azúcar del 60-65% es óptima para la formación adecuada de gel con pectina. Este nivel proporciona el equilibrio correcto para la formación de red de pectina mientras preserva la fruta.",
                  "de": "60-65% Zuckerkonzentration ist optimal für richtige Gelbildung mit Pektin. Dieses Niveau bietet das richtige Gleichgewicht für Pektinnetzwerkbildung bei gleichzeitiger Fruchthaltung.",
                  "nl": "60-65% suikerconcentratie is optimaal voor goede gelvorming met pectine. Dit niveau biedt de juiste balans voor pectinenetwerkvorming terwijl het fruit geconserveerd wordt."
        }
      },
      {
        question: {
                  "en": "Which chemical process occurs when making caramelized fruit desserts at high temperatures?",
                  "es": "¿Qué proceso químico ocurre al hacer postres de fruta caramelizada a altas temperaturas?",
                  "de": "Welcher chemische Prozess tritt beim Herstellen von karamellisierten Fruchtdesserts bei hohen Temperaturen auf?",
                  "nl": "Welk chemisch proces vindt plaats bij het maken van gekarameliseerde fruitdesserts op hoge temperaturen?"
        },
        options: [
        {
                  "en": "Protein denaturation",
                  "es": "Desnaturalización de proteínas",
                  "de": "Proteindenaturierung",
                  "nl": "Eiwitdenaturatie"
        },
        {
                  "en": "Maillard reaction and sugar caramelization",
                  "es": "Reacción de Maillard y caramelización del azúcar",
                  "de": "Maillard-Reaktion und Zuckerkaramelisierung",
                  "nl": "Maillard reactie en suikerkaramelisatie"
        },
        {
                  "en": "Hydrolysis of cellulose",
                  "es": "Hidrólisis de celulosa",
                  "de": "Hydrolyse von Zellulose",
                  "nl": "Hydrolyse van cellulose"
        },
        {
                  "en": "Lipid oxidation",
                  "es": "Oxidación de lípidos",
                  "de": "Lipidoxidation",
                  "nl": "Lipideoxidatie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "High-temperature cooking of fruits causes Maillard reactions between sugars and amino acids, plus direct sugar caramelization, creating complex flavors and golden-brown colors.",
                  "es": "La cocción a alta temperatura de frutas causa reacciones de Maillard entre azúcares y aminoácidos, además de caramelización directa del azúcar, creando sabores complejos y colores dorado-marrón.",
                  "de": "Hochtemperaturkochen von Früchten verursacht Maillard-Reaktionen zwischen Zuckern und Aminosäuren plus direkte Zuckerkaramelisierung, was komplexe Aromen und goldbraune Farben erzeugt.",
                  "nl": "Koken op hoge temperatuur van fruit veroorzaakt Maillard reacties tussen suikers en aminozuren, plus directe suikerkaramelisatie, wat complexe smaken en goudbruine kleuren creëert."
        }
      },
      {
        question: {
                  "en": "What role does pectin play in fruit dessert texture, and how is it activated?",
                  "es": "¿Qué papel juega la pectina en la textura de los postres de fruta, y cómo se activa?",
                  "de": "Welche Rolle spielt Pektin in der Textur von Fruchtdesserts und wie wird es aktiviert?",
                  "nl": "Welke rol speelt pectine in de textuur van fruitdesserts, en hoe wordt het geactiveerd?"
        },
        options: [
        {
                  "en": "Creates gel structure; activated by alkaline conditions",
                  "es": "Crea estructura de gel; activada por condiciones alcalinas",
                  "de": "Erzeugt Gelstruktur; aktiviert durch alkalische Bedingungen",
                  "nl": "Creëert gelstructuur; geactiveerd door alkalische omstandigheden"
        },
        {
                  "en": "Adds sweetness; activated by cold temperatures",
                  "es": "Agrega dulzura; activada por temperaturas frías",
                  "de": "Fügt Süße hinzu; aktiviert durch kalte Temperaturen",
                  "nl": "Voegt zoetheid toe; geactiveerd door koude temperaturen"
        },
        {
                  "en": "Prevents browning; activated by salt",
                  "es": "Previene pardeamiento; activada por sal",
                  "de": "Verhindert Bräunung; aktiviert durch Salz",
                  "nl": "Voorkomt bruining; geactiveerd door zout"
        },
        {
                  "en": "Creates gel structure; activated by acid, sugar, and heat",
                  "es": "Crea estructura de gel; activada por ácido, azúcar y calor",
                  "de": "Erzeugt Gelstruktur; aktiviert durch Säure, Zucker und Hitze",
                  "nl": "Creëert gelstructuur; geactiveerd door zuur, suiker en warmte"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pectin forms gel networks that give jams and preserves their characteristic texture. It requires acid (low pH), sufficient sugar concentration, and heat to form proper gel structure.",
                  "es": "La pectina forma redes de gel que dan a las mermeladas y conservas su textura característica. Requiere ácido (pH bajo), concentración suficiente de azúcar y calor para formar estructura de gel adecuada.",
                  "de": "Pektin bildet Gelnetzwerke, die Marmeladen und Konserven ihre charakteristische Textur verleihen. Es benötigt Säure (niedrigen pH), ausreichende Zuckerkonzentration und Hitze für richtige Gelstruktur.",
                  "nl": "Pectine vormt gelnetwerken die jam en conserven hun karakteristieke textuur geven. Het vereist zuur (lage pH), voldoende suikerconcentratie en warmte om een goede gelstructuur te vormen."
        }
      },
      {
        question: {
                  "en": "How does the ripeness of fruit affect its suitability for different dessert preparations?",
                  "es": "¿Cómo afecta la madurez de la fruta su idoneidad para diferentes preparaciones de postres?",
                  "de": "Wie beeinflusst die Reife von Früchten ihre Eignung für verschiedene Dessertvorbereitungen?",
                  "nl": "Hoe beïnvloedt de rijpheid van fruit de geschiktheid voor verschillende dessertbereidingen?"
        },
        options: [
        {
                  "en": "Ripeness has no impact on dessert quality",
                  "es": "La madurez no tiene impacto en la calidad del postre",
                  "de": "Reife hat keinen Einfluss auf die Dessertqualität",
                  "nl": "Rijpheid heeft geen impact op de dessertkwaliteit"
        },
        {
                  "en": "Underripe fruit has higher pectin for gelling; overripe fruit is better for purees",
                  "es": "Fruta inmadura tiene mayor pectina para gelificar; fruta sobremadura es mejor para purés",
                  "de": "Unreife Früchte haben höheres Pektin zum Gelieren; überreife Früchte sind besser für Pürees",
                  "nl": "Onrijp fruit heeft hogere pectine voor geleren; overrijp fruit is beter voor purées"
        },
        {
                  "en": "Ripeness only affects flavor, not texture",
                  "es": "La madurez solo afecta el sabor, no la textura",
                  "de": "Reife beeinflusst nur den Geschmack, nicht die Textur",
                  "nl": "Rijpheid beïnvloedt alleen smaak, niet textuur"
        },
        {
                  "en": "Only fully ripe fruit should be used for desserts",
                  "es": "Solo fruta completamente madura debe usarse para postres",
                  "de": "Nur vollreife Früchte sollten für Desserts verwendet werden",
                  "nl": "Alleen volledig rijp fruit moet worden gebruikt voor desserts"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Underripe fruit contains more pectin and acid, making it ideal for jams and jellies. Overripe fruit has broken-down cell structure, making it perfect for smooth purees and sauces.",
                  "es": "La fruta inmadura contiene más pectina y ácido, haciéndola ideal para mermeladas y jaleas. La fruta sobremadura tiene estructura celular descompuesta, haciéndola perfecta para purés y salsas suaves.",
                  "de": "Unreife Früchte enthalten mehr Pektin und Säure, was sie ideal für Marmeladen und Gelees macht. Überreife Früchte haben aufgebrochene Zellstruktur, was sie perfekt für glatte Pürees und Saucen macht.",
                  "nl": "Onrijp fruit bevat meer pectine en zuur, wat het ideaal maakt voor jam en gelei. Overrijp fruit heeft een afgebroken celstructuur, wat het perfect maakt voor gladde purées en sauzen."
        }
      },
      {
        question: {
                  "en": "What is the scientific principle behind fruit soufflé rising and maintaining structure?",
                  "es": "¿Cuál es el principio científico detrás del levantamiento del soufflé de fruta y mantenimiento de estructura?",
                  "de": "Was ist das wissenschaftliche Prinzip hinter dem Aufgehen und der Strukturerhaltung von Fruchtsoufflé?",
                  "nl": "Wat is het wetenschappelijke principe achter het rijzen en behouden van structuur van fruitsoufflé?"
        },
        options: [
        {
                  "en": "Sugar crystallization providing structure",
                  "es": "Cristalización del azúcar proporcionando estructura",
                  "de": "Zuckerkristallisation, die Struktur bietet",
                  "nl": "Suikerkristallisatie die structuur biedt"
        },
        {
                  "en": "Chemical leavening agents",
                  "es": "Agentes leudantes químicos",
                  "de": "Chemische Triebmittel",
                  "nl": "Chemische rijsmiddelen"
        },
        {
                  "en": "Yeast fermentation producing gas",
                  "es": "Fermentación de levadura produciendo gas",
                  "de": "Hefefermentation, die Gas produziert",
                  "nl": "Gistfermentatie die gas produceert"
        },
        {
                  "en": "Steam expansion in trapped air bubbles from whipped whites",
                  "es": "Expansión de vapor en burbujas de aire atrapadas de claras batidas",
                  "de": "Dampfausdehnung in eingeschlossenen Luftblasen aus geschlagenen Eiweiß",
                  "nl": "Stoomexpansie in ingesloten luchtbellen van geklopte eiwitten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Soufflés rise because steam from heating expands the air bubbles trapped in whipped egg whites. The protein network from coagulated eggs provides structure to maintain the rise.",
                  "es": "Los soufflés se levantan porque el vapor del calentamiento expande las burbujas de aire atrapadas en claras batidas. La red de proteínas de huevos coagulados proporciona estructura para mantener el levantamiento.",
                  "de": "Soufflés gehen auf, weil Dampf beim Erhitzen die in geschlagenen Eiweiß eingeschlossenen Luftblasen ausdehnt. Das Proteinnetzwerk aus koagulierten Eiern bietet Struktur, um das Aufgehen zu erhalten.",
                  "nl": "Soufflés rijzen omdat stoom van verhitting de luchtbellen uitbreidt die gevangen zitten in geklopte eiwitten. Het eiwitnetwerk van gecoaguleerde eieren biedt structuur om de rijzing te behouden."
        }
      },
      {
        question: {
                  "en": "Which technique helps preserve the color and nutritional value of fruit in desserts?",
                  "es": "¿Qué técnica ayuda a preservar el color y valor nutricional de la fruta en postres?",
                  "de": "Welche Technik hilft dabei, die Farbe und den Nährwert von Früchten in Desserts zu erhalten?",
                  "nl": "Welke techniek helpt de kleur en voedingswaarde van fruit in desserts te behouden?"
        },
        options: [
        {
                  "en": "Quick cooking at moderate temperatures or minimal processing",
                  "es": "Cocción rápida a temperaturas moderadas o procesamiento mínimo",
                  "de": "Schnelles Kochen bei moderaten Temperaturen oder minimale Verarbeitung",
                  "nl": "Snel koken op gematigde temperaturen of minimale verwerking"
        },
        {
                  "en": "Multiple freezing and thawing cycles",
                  "es": "Múltiples ciclos de congelación y descongelación",
                  "de": "Mehrere Einfrier- und Auftauzyklen",
                  "nl": "Meerdere vries- en ontdooicycli"
        },
        {
                  "en": "Extended exposure to air and light",
                  "es": "Exposición prolongada al aire y luz",
                  "de": "Verlängerte Exposition gegenüber Luft und Licht",
                  "nl": "Langdurige blootstelling aan lucht en licht"
        },
        {
                  "en": "Long, slow cooking at high temperatures",
                  "es": "Cocción larga y lenta a altas temperaturas",
                  "de": "Langes, langsames Kochen bei hohen Temperaturen",
                  "nl": "Lang, langzaam koken op hoge temperaturen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Quick cooking preserves heat-sensitive vitamins and natural colors. Minimal processing prevents nutrient loss and maintains the fruit's natural appearance and flavor.",
                  "es": "La cocción rápida preserva vitaminas sensibles al calor y colores naturales. El procesamiento mínimo previene pérdida de nutrientes y mantiene la apariencia y sabor natural de la fruta.",
                  "de": "Schnelles Kochen erhält hitzeempfindliche Vitamine und natürliche Farben. Minimale Verarbeitung verhindert Nährstoffverlust und erhält das natürliche Aussehen und den Geschmack der Frucht.",
                  "nl": "Snel koken behoudt hittegevoelige vitamines en natuurlijke kleuren. Minimale verwerking voorkomt nutriëntenverlies en behoudt het natuurlijke uiterlijk en de smaak van het fruit."
        }
      },
      {
        question: {
                  "en": "What causes fruit compotes to have different textures depending on the cooking method?",
                  "es": "¿Qué causa que las compotas de fruta tengan diferentes texturas dependiendo del método de cocción?",
                  "de": "Was verursacht, dass Fruchtkompotte je nach Kochmethode unterschiedliche Texturen haben?",
                  "nl": "Wat veroorzaakt dat fruitcompotes verschillende texturen hebben afhankelijk van de kookmethode?"
        },
        options: [
        {
                  "en": "Water content differences",
                  "es": "Diferencias en contenido de agua",
                  "de": "Wassergehalt-Unterschiede",
                  "nl": "Watergehalte verschillen"
        },
        {
                  "en": "Cell wall breakdown and pectin release rates",
                  "es": "Descomposición de paredes celulares y tasas de liberación de pectina",
                  "de": "Zellwandabbau und Pektinfreisetzungsraten",
                  "nl": "Celwandafbraak en pectine vrijgavesnelheden"
        },
        {
                  "en": "Different sugar types used",
                  "es": "Diferentes tipos de azúcar utilizados",
                  "de": "Verschiedene verwendete Zuckerarten",
                  "nl": "Verschillende gebruikte suikertypes"
        },
        {
                  "en": "Vitamin C content variations",
                  "es": "Variaciones en contenido de vitamina C",
                  "de": "Vitamin-C-Gehalt-Variationen",
                  "nl": "Vitamine C gehalte variaties"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Gentle cooking preserves cell structure for chunky texture, while aggressive cooking breaks down cell walls and releases more pectin, creating smoother, more unified textures.",
                  "es": "La cocción suave preserva la estructura celular para textura en trozos, mientras que la cocción agresiva descompone paredes celulares y libera más pectina, creando texturas más suaves y unificadas.",
                  "de": "Sanftes Kochen erhält die Zellstruktur für stückige Textur, während aggressives Kochen Zellwände abbaut und mehr Pektin freisetzt, was glattere, einheitlichere Texturen erzeugt.",
                  "nl": "Zacht koken behoudt celstructuur voor stukkerige textuur, terwijl agressief koken celwanden afbreekt en meer pectine vrijgeeft, wat gladdere, meer uniforme texturen creëert."
        }
      },
      {
        question: {
                  "en": "How does the pH level affect fruit dessert preparation and final taste?",
                  "es": "¿Cómo afecta el nivel de pH la preparación de postres de fruta y el sabor final?",
                  "de": "Wie beeinflusst der pH-Wert die Fruchtdessert-Zubereitung und den Endgeschmack?",
                  "nl": "Hoe beïnvloedt het pH-niveau de bereiding van fruitdesserts en de uiteindelijke smaak?"
        },
        options: [
        {
                  "en": "High pH is always preferred for fruit desserts",
                  "es": "pH alto siempre se prefiere para postres de fruta",
                  "de": "Hoher pH wird immer für Fruchtdesserts bevorzugt",
                  "nl": "Hoge pH wordt altijd verkozen voor fruitdesserts"
        },
        {
                  "en": "pH only affects color, not taste or texture",
                  "es": "El pH solo afecta el color, no el sabor o textura",
                  "de": "pH beeinflusst nur die Farbe, nicht Geschmack oder Textur",
                  "nl": "pH beïnvloedt alleen kleur, niet smaak of textuur"
        },
        {
                  "en": "Low pH enhances pectin gelling, preserves color, and balances sweetness",
                  "es": "pH bajo mejora gelificación de pectina, preserva color y equilibra dulzura",
                  "de": "Niedriger pH verbessert Pektingelung, erhält Farbe und balanciert Süße",
                  "nl": "Lage pH verbetert pectine gelering, behoudt kleur en balanceert zoetheid"
        },
        {
                  "en": "pH has no significant impact on dessert quality",
                  "es": "El pH no tiene impacto significativo en la calidad del postre",
                  "de": "pH hat keinen signifikanten Einfluss auf die Dessertqualität",
                  "nl": "pH heeft geen significante impact op de dessertkwaliteit"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Low pH (acidic conditions) helps pectin gel formation, preserves natural fruit colors, prevents browning, and provides tartness that balances sweetness in fruit desserts.",
                  "es": "El pH bajo (condiciones ácidas) ayuda a la formación de gel de pectina, preserva colores naturales de fruta, previene pardeamiento y proporciona acidez que equilibra la dulzura en postres de fruta.",
                  "de": "Niedriger pH (saure Bedingungen) hilft bei der Pektingelbildung, erhält natürliche Fruchtfarben, verhindert Bräunung und bietet Säure, die Süße in Fruchtdesserts ausbalanciert.",
                  "nl": "Lage pH (zure omstandigheden) helpt pectinegelvorming, behoudt natuurlijke fruitkleuren, voorkomt bruining en biedt zuurheid die zoetheid in fruitdesserts balanceert."
        }
      },
      {
        question: {
                  "en": "What happens to fruit cellular structure during the poaching process?",
                  "es": "¿Qué pasa con la estructura celular de la fruta durante el proceso de escalfado?",
                  "de": "Was passiert mit der Zellstruktur von Früchten während des Pochierens?",
                  "nl": "Wat gebeurt er met de cellulaire structuur van fruit tijdens het pocheren?"
        },
        options: [
        {
                  "en": "Gentle heat softens cell walls while maintaining fruit shape",
                  "es": "El calor suave ablanda paredes celulares mientras mantiene forma de fruta",
                  "de": "Sanfte Hitze erweicht Zellwände bei Erhaltung der Fruchtform",
                  "nl": "Zachte warmte verzacht celwanden terwijl fruitvorm behouden blijft"
        },
        {
                  "en": "Cells remain completely unchanged",
                  "es": "Las células permanecen completamente sin cambios",
                  "de": "Zellen bleiben völlig unverändert",
                  "nl": "Cellen blijven volledig onveranderd"
        },
        {
                  "en": "Cells become more rigid and tough",
                  "es": "Las células se vuelven más rígidas y duras",
                  "de": "Zellen werden starrer und zäher",
                  "nl": "Cellen worden stijver en taaier"
        },
        {
                  "en": "Cells completely disintegrate immediately",
                  "es": "Las células se desintegran completamente inmediatamente",
                  "de": "Zellen zerfallen sofort vollständig",
                  "nl": "Cellen desintegreren volledig onmiddellijk"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Gentle poaching heat gradually softens pectin-rich cell walls, making fruit tender while preserving its shape. This controlled breakdown creates the desired texture without complete disintegration.",
                  "es": "El calor suave del escalfado ablanda gradualmente las paredes celulares ricas en pectina, haciendo la fruta tierna mientras preserva su forma. Esta descomposición controlada crea la textura deseada sin desintegración completa.",
                  "de": "Sanfte Pochierhitze erweicht allmählich pektinreiche Zellwände, macht Früchte zart bei Erhaltung ihrer Form. Dieser kontrollierte Abbau erzeugt die gewünschte Textur ohne vollständige Zersetzung.",
                  "nl": "Zachte pocheerwarmt verzacht geleidelijk pectinerijke celwanden, maakt fruit mals terwijl de vorm behouden blijft. Deze gecontroleerde afbraak creëert de gewenste textuur zonder volledige desintegratie."
        }
      },
      {
        question: {
                  "en": "Which factor is most critical when selecting fruits for tarte tatin or upside-down desserts?",
                  "es": "¿Qué factor es más crítico al seleccionar frutas para tarte tatin o postres invertidos?",
                  "de": "Welcher Faktor ist am kritischsten bei der Auswahl von Früchten für Tarte Tatin oder umgedrehte Desserts?",
                  "nl": "Welke factor is het meest kritiek bij het selecteren van fruit voor tarte tatin of omgekeerde desserts?"
        },
        options: [
        {
                  "en": "Fruit must be extremely soft",
                  "es": "La fruta debe estar extremadamente blanda",
                  "de": "Früchte müssen extrem weich sein",
                  "nl": "Fruit moet extreem zacht zijn"
        },
        {
                  "en": "Structural integrity to hold shape during caramelization",
                  "es": "Integridad estructural para mantener forma durante caramelización",
                  "de": "Strukturelle Integrität, um Form während Karamelisierung zu halten",
                  "nl": "Structurele integriteit om vorm te behouden tijdens karamelisatie"
        },
        {
                  "en": "Only sweetness level matters",
                  "es": "Solo importa el nivel de dulzura",
                  "de": "Nur der Süßegrad ist wichtig",
                  "nl": "Alleen zoetheidsgraad telt"
        },
        {
                  "en": "Color is the only important consideration",
                  "es": "El color es la única consideración importante",
                  "de": "Farbe ist die einzige wichtige Überlegung",
                  "nl": "Kleur is de enige belangrijke overweging"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Fruits for upside-down desserts must maintain structural integrity during high-heat caramelization. They need to hold their shape while becoming tender, creating attractive presentation when inverted.",
                  "es": "Las frutas para postres invertidos deben mantener integridad estructural durante caramelización a alta temperatura. Necesitan mantener su forma mientras se vuelven tiernas, creando presentación atractiva cuando se invierten.",
                  "de": "Früchte für umgedrehte Desserts müssen strukturelle Integrität während Hochtemperatur-Karamelisierung beibehalten. Sie müssen ihre Form behalten und dabei zart werden, um beim Umdrehen attraktive Präsentation zu schaffen.",
                  "nl": "Fruit voor omgekeerde desserts moet structurele integriteit behouden tijdens karamelisatie op hoge temperatuur. Ze moeten hun vorm behouden terwijl ze mals worden, wat aantrekkelijke presentatie creëert wanneer omgekeerd."
        }
      },
      {
        question: {
                  "en": "How does the gelatin concentration affect the texture of fruit-based molded desserts?",
                  "es": "¿Cómo afecta la concentración de gelatina la textura de postres moldeados a base de fruta?",
                  "de": "Wie beeinflusst die Gelatinekonzentration die Textur von fruchtbasierten geformten Desserts?",
                  "nl": "Hoe beïnvloedt de gelatineconcentratie de textuur van op fruit gebaseerde gevormde desserts?"
        },
        options: [
        {
                  "en": "Optimal concentration creates tender set that melts pleasantly; too much creates rubbery texture",
                  "es": "Concentración óptima crea cuajado tierno que se derrite agradablemente; demasiado crea textura gomosa",
                  "de": "Optimale Konzentration erzeugt zarte Festigkeit, die angenehm schmilzt; zu viel erzeugt gummiartige Textur",
                  "nl": "Optimale concentratie creëert tendre zetting die aangenaam smelt; te veel creëert rubberachtige textuur"
        },
        {
                  "en": "Higher concentration always creates better texture",
                  "es": "Mayor concentración siempre crea mejor textura",
                  "de": "Höhere Konzentration erzeugt immer bessere Textur",
                  "nl": "Hogere concentratie creëert altijd betere textuur"
        },
        {
                  "en": "Lower concentration is always preferred",
                  "es": "Menor concentración siempre se prefiere",
                  "de": "Niedrigere Konzentration wird immer bevorzugt",
                  "nl": "Lagere concentratie wordt altijd verkozen"
        },
        {
                  "en": "Concentration doesn't affect texture",
                  "es": "La concentración no afecta la textura",
                  "de": "Konzentration beeinflusst Textur nicht",
                  "nl": "Concentratie beïnvloedt textuur niet"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Optimal gelatin concentration (typically 1-2%) creates a tender set that melts at mouth temperature. Too much gelatin creates unpleasant rubbery texture, while too little won't set properly.",
                  "es": "La concentración óptima de gelatina (típicamente 1-2%) crea un cuajado tierno que se derrite a temperatura bucal. Demasiada gelatina crea textura gomosa desagradable, mientras que muy poca no cuajará adecuadamente.",
                  "de": "Optimale Gelatinekonzentration (typisch 1-2%) erzeugt eine zarte Festigkeit, die bei Mundtemperatur schmilzt. Zu viel Gelatine erzeugt unangenehme gummiartige Textur, während zu wenig nicht richtig fest wird.",
                  "nl": "Optimale gelatineconcentratie (typisch 1-2%) creëert een tendre zetting die smelt bij mondtemperatuur. Te veel gelatine creëert onaangename rubberachtige textuur, terwijl te weinig niet goed zet."
        }
      },
      {
        question: {
                  "en": "What technique prevents crystallization in fruit-based sugar syrups and glazes?",
                  "es": "¿Qué técnica previene la cristalización en jarabes de azúcar y glaseados a base de fruta?",
                  "de": "Welche Technik verhindert Kristallisation in fruchtbasierten Zuckersirups und Glasuren?",
                  "nl": "Welke techniek voorkomt kristallisatie in op fruit gebaseerde suikersiropen en glazuren?"
        },
        options: [
        {
                  "en": "Adding invert sugar or glucose to interfere with crystal formation",
                  "es": "Agregar azúcar invertido o glucosa para interferir con formación de cristales",
                  "de": "Hinzufügung von Invertzucker oder Glukose zur Störung der Kristallbildung",
                  "nl": "Toevoegen van invertsuiker of glucose om kristalvorming te verstoren"
        },
        {
                  "en": "Using only granulated sugar",
                  "es": "Usar solo azúcar granulada",
                  "de": "Nur Kristallzucker verwenden",
                  "nl": "Alleen kristalsuiker gebruiken"
        },
        {
                  "en": "Adding more water to the syrup",
                  "es": "Agregar más agua al jarabe",
                  "de": "Mehr Wasser zum Sirup hinzufügen",
                  "nl": "Meer water aan de siroop toevoegen"
        },
        {
                  "en": "Stirring constantly during cooking",
                  "es": "Revolver constantemente durante la cocción",
                  "de": "Konstantes Rühren während des Kochens",
                  "nl": "Constant roeren tijdens koken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Invert sugar (sucrose broken into glucose and fructose) or added glucose interferes with crystal formation, creating smooth, glossy syrups and glazes without grittiness.",
                  "es": "El azúcar invertido (sacarosa descompuesta en glucosa y fructosa) o glucosa agregada interfiere con la formación de cristales, creando jarabes y glaseados suaves y brillantes sin aspereza.",
                  "de": "Invertzucker (Saccharose aufgebrochen in Glukose und Fruktose) oder zugesetzte Glukose stört die Kristallbildung und erzeugt glatte, glänzende Sirups und Glasuren ohne Körnigkeit.",
                  "nl": "Invertsuiker (sucrose opgebroken in glucose en fructose) of toegevoegde glucose verstoort kristalvorming, wat gladde, glanzende siropen en glazuren creëert zonder koreligheid."
        }
      },
      {
        question: {
                  "en": "Why do some fruits like pineapple require special treatment in gelatin-based desserts?",
                  "es": "¿Por qué algunas frutas como la piña requieren tratamiento especial en postres a base de gelatina?",
                  "de": "Warum benötigen einige Früchte wie Ananas spezielle Behandlung in gelatinebasierten Desserts?",
                  "nl": "Waarom hebben sommige fruchten zoals ananas speciale behandeling nodig in op gelatine gebaseerde desserts?"
        },
        options: [
        {
                  "en": "They are too acidic",
                  "es": "Son demasiado ácidas",
                  "de": "Sie sind zu sauer",
                  "nl": "Ze zijn te zuur"
        },
        {
                  "en": "They contain too much water",
                  "es": "Contienen demasiada agua",
                  "de": "Sie enthalten zu viel Wasser",
                  "nl": "Ze bevatten te veel water"
        },
        {
                  "en": "They contain proteolytic enzymes that break down gelatin",
                  "es": "Contienen enzimas proteolíticas que descomponen la gelatina",
                  "de": "Sie enthalten proteolytische Enzyme, die Gelatine abbauen",
                  "nl": "Ze bevatten proteolytische enzymen die gelatine afbreken"
        },
        {
                  "en": "They have too much natural sugar",
                  "es": "Tienen demasiada azúcar natural",
                  "de": "Sie haben zu viel natürlichen Zucker",
                  "nl": "Ze hebben te veel natuurlijke suiker"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Pineapple contains bromelain, a proteolytic enzyme that breaks down gelatin proteins, preventing proper setting. Heating the fruit denatures the enzyme, making it safe for gelatin desserts.",
                  "es": "La piña contiene bromelina, una enzima proteolítica que descompone las proteínas de gelatina, previniendo cuajado adecuado. Calentar la fruta desnaturaliza la enzima, haciéndola segura para postres de gelatina.",
                  "de": "Ananas enthält Bromelain, ein proteolytisches Enzym, das Gelatineproteine abbaut und richtiges Festwerden verhindert. Erhitzen der Frucht denaturiert das Enzym, macht sie sicher für Gelatinedesserts.",
                  "nl": "Ananas bevat bromelaïne, een proteolytisch enzym dat gelatineeiwitten afbreekt, wat goede zetting voorkomt. Verhitten van het fruit denatureert het enzym, waardoor het veilig wordt voor gelatinedesserts."
        }
      },
      {
        question: {
                  "en": "What is the ideal serving temperature range for optimizing fruit dessert flavors?",
                  "es": "¿Cuál es el rango de temperatura de servicio ideal para optimizar sabores de postres de fruta?",
                  "de": "Was ist der ideale Serviertemperaturbereich zur Optimierung von Fruchtdessert-Aromen?",
                  "nl": "Wat is het ideale serveertemperatuurbereik voor het optimaliseren van fruitdessertsmaken?"
        },
        options: [
        {
                  "en": "Temperature doesn't affect flavor perception",
                  "es": "La temperatura no afecta la percepción del sabor",
                  "de": "Temperatur beeinflusst Geschmackswahrnehmung nicht",
                  "nl": "Temperatuur beïnvloedt smaakperceptie niet"
        },
        {
                  "en": "Room temperature (18-25°C) enhances flavor perception; chilled for some textures",
                  "es": "Temperatura ambiente (18-25°C) mejora percepción de sabor; frío para algunas texturas",
                  "de": "Raumtemperatur (18-25°C) verbessert Geschmackswahrnehmung; gekühlt für einige Texturen",
                  "nl": "Kamertemperatuur (18-25°C) verbetert smaakperceptie; gekoeld voor sommige texturen"
        },
        {
                  "en": "Ice cold (0-5°C) for all fruit desserts",
                  "es": "Helado (0-5°C) para todos los postres de fruta",
                  "de": "Eiskalt (0-5°C) für alle Fruchtdesserts",
                  "nl": "IJskoud (0-5°C) voor alle fruitdesserts"
        },
        {
                  "en": "Always serve hot (above 60°C)",
                  "es": "Siempre servir caliente (arriba de 60°C)",
                  "de": "Immer heiß servieren (über 60°C)",
                  "nl": "Altijd heet serveren (boven 60°C)"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Room temperature enhances volatile compound release and flavor perception. However, some desserts like gelatin-based ones need chilling for proper texture while balancing flavor intensity.",
                  "es": "La temperatura ambiente mejora la liberación de compuestos volátiles y percepción del sabor. Sin embargo, algunos postres como los basados en gelatina necesitan enfriamiento para textura adecuada mientras balancean intensidad del sabor.",
                  "de": "Raumtemperatur verbessert die Freisetzung flüchtiger Verbindungen und Geschmackswahrnehmung. Jedoch benötigen einige Desserts wie gelatinebasierte Kühlung für richtige Textur bei gleichzeitiger Geschmacksintensitätsbalance.",
                  "nl": "Kamertemperatuur verbetert vluchtige stofafgifte en smaakperceptie. Echter, sommige desserts zoals op gelatine gebaseerde hebben koeling nodig voor goede textuur terwijl smaakintensiteit gebalanceerd wordt."
        }
      },
      {
        question: {
                  "en": "How does the fiber content of different fruits affect dessert preparation techniques?",
                  "es": "¿Cómo afecta el contenido de fibra de diferentes frutas las técnicas de preparación de postres?",
                  "de": "Wie beeinflusst der Fasergehalt verschiedener Früchte die Dessert-Zubereitungstechniken?",
                  "nl": "Hoe beïnvloedt het vezelgehalte van verschillende vruchten de dessertbereidingstechnieken?"
        },
        options: [
        {
                  "en": "All fruits have identical fiber content",
                  "es": "Todas las frutas tienen contenido de fibra idéntico",
                  "de": "Alle Früchte haben identischen Fasergehalt",
                  "nl": "Alle vruchten hebben identiek vezelgehalte"
        },
        {
                  "en": "Fiber content has no impact on preparation",
                  "es": "El contenido de fibra no tiene impacto en la preparación",
                  "de": "Fasergehalt hat keinen Einfluss auf die Zubereitung",
                  "nl": "Vezelgehalte heeft geen impact op bereiding"
        },
        {
                  "en": "High-fiber fruits may need longer cooking or straining for smooth textures",
                  "es": "Frutas altas en fibra pueden necesitar cocción más larga o colado para texturas suaves",
                  "de": "Faserreiche Früchte benötigen möglicherweise längeres Kochen oder Sieben für glatte Texturen",
                  "nl": "Vezelrijke vruchten hebben mogelijk langer koken of zeven nodig voor gladde texturen"
        },
        {
                  "en": "Only low-fiber fruits can be used in desserts",
                  "es": "Solo frutas bajas en fibra pueden usarse en postres",
                  "de": "Nur faserarme Früchte können in Desserts verwendet werden",
                  "nl": "Alleen vezelarme vruchten kunnen worden gebruikt in desserts"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "High-fiber fruits like berries may require longer cooking to break down cellulose fibers, or straining/pureeing for smooth textures. Understanding fiber content helps choose appropriate preparation methods.",
                  "es": "Frutas altas en fibra como bayas pueden requerir cocción más larga para descomponer fibras de celulosa, o colado/purés para texturas suaves. Entender el contenido de fibra ayuda a elegir métodos de preparación apropiados.",
                  "de": "Faserreiche Früchte wie Beeren benötigen möglicherweise längeres Kochen zum Aufbrechen von Zellulosefasern oder Sieben/Pürieren für glatte Texturen. Fasergehalt verstehen hilft bei der Wahl geeigneter Zubereitungsmethoden.",
                  "nl": "Vezelrijke vruchten zoals bessen hebben mogelijk langer koken nodig om cellulosevezels af te breken, of zeven/pureren voor gladde texturen. Vezelgehalte begrijpen helpt bij het kiezen van geschikte bereidingsmethoden."
        }
      },
      {
        question: {
                  "en": "What role do tannins play in fruit dessert preparation, particularly with unripe fruits?",
                  "es": "¿Qué papel juegan los taninos en la preparación de postres de fruta, particularmente con frutas inmaduras?",
                  "de": "Welche Rolle spielen Tannine bei der Fruchtdessert-Zubereitung, besonders mit unreifen Früchten?",
                  "nl": "Welke rol spelen tannines bij de bereiding van fruitdesserts, vooral met onrijpe vruchten?"
        },
        options: [
        {
                  "en": "Tannins create astringent, bitter flavors that require balancing with sugar or cooking",
                  "es": "Los taninos crean sabores astringentes y amargos que requieren equilibrio con azúcar o cocción",
                  "de": "Tannine erzeugen adstringierende, bittere Aromen, die Ausgleich mit Zucker oder Kochen benötigen",
                  "nl": "Tannines creëren samentrekkende, bittere smaken die balancering met suiker of koken vereisen"
        },
        {
                  "en": "Tannins only affect color",
                  "es": "Los taninos solo afectan el color",
                  "de": "Tannine beeinflussen nur die Farbe",
                  "nl": "Tannines beïnvloeden alleen kleur"
        },
        {
                  "en": "Tannins have no effect on fruit desserts",
                  "es": "Los taninos no tienen efecto en postres de fruta",
                  "de": "Tannine haben keinen Einfluss auf Fruchtdesserts",
                  "nl": "Tannines hebben geen effect op fruitdesserts"
        },
        {
                  "en": "Tannins improve dessert texture",
                  "es": "Los taninos mejoran la textura del postre",
                  "de": "Tannine verbessern die Dessert-Textur",
                  "nl": "Tannines verbeteren de desserttextuur"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Tannins in unripe fruits create astringent, bitter flavors that can be unpleasant. Cooking helps break down tannins, while sugar balances the bitterness, making the dessert more palatable.",
                  "es": "Los taninos en frutas inmaduras crean sabores astringentes y amargos que pueden ser desagradables. La cocción ayuda a descomponer taninos, mientras que el azúcar equilibra la amargura, haciendo el postre más apetecible.",
                  "de": "Tannine in unreifen Früchten erzeugen adstringierende, bittere Aromen, die unangenehm sein können. Kochen hilft beim Abbau von Tanninen, während Zucker die Bitterkeit ausgleicht und das Dessert schmackhafter macht.",
                  "nl": "Tannines in onrijpe vruchten creëren samentrekkende, bittere smaken die onaangenaam kunnen zijn. Koken helpt tannines af te breken, terwijl suiker de bitterheid balanceert, waardoor het dessert smakelijker wordt."
        }
      },
      {
        question: {
                  "en": "Which preservation method best maintains the cellular structure of fruits for use in desserts?",
                  "es": "¿Qué método de conservación mantiene mejor la estructura celular de las frutas para uso en postres?",
                  "de": "Welche Konservierungsmethode erhält am besten die Zellstruktur von Früchten für den Einsatz in Desserts?",
                  "nl": "Welke conserveringsmethode behoudt het beste de cellulaire structuur van vruchten voor gebruik in desserts?"
        },
        options: [
        {
                  "en": "Slow air drying at room temperature",
                  "es": "Secado lento al aire a temperatura ambiente",
                  "de": "Langsame Lufttrocknung bei Raumtemperatur",
                  "nl": "Langzaam luchtdrogen op kamertemperatuur"
        },
        {
                  "en": "Multiple freeze-thaw cycles",
                  "es": "Múltiples ciclos de congelación-descongelación",
                  "de": "Mehrere Einfrier-Auftau-Zyklen",
                  "nl": "Meerdere vries-ontdooi cycli"
        },
        {
                  "en": "Rapid freezing with controlled thawing",
                  "es": "Congelación rápida con descongelación controlada",
                  "de": "Schnelles Einfrieren mit kontrolliertem Auftauen",
                  "nl": "Snel invriezen met gecontroleerd ontdooien"
        },
        {
                  "en": "Extended cooking at high temperatures",
                  "es": "Cocción extendida a altas temperaturas",
                  "de": "Verlängertes Kochen bei hohen Temperaturen",
                  "nl": "Verlengd koken op hoge temperaturen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Rapid freezing minimizes ice crystal formation that damages cell walls. Controlled thawing prevents excessive cellular breakdown, preserving fruit structure better than other preservation methods.",
                  "es": "La congelación rápida minimiza la formación de cristales de hielo que dañan paredes celulares. La descongelación controlada previene descomposición celular excesiva, preservando estructura de fruta mejor que otros métodos de conservación.",
                  "de": "Schnelles Einfrieren minimiert Eiskristallbildung, die Zellwände schädigt. Kontrolliertes Auftauen verhindert übermäßigen Zellabbau und erhält Fruchtstruktur besser als andere Konservierungsmethoden.",
                  "nl": "Snel invriezen minimaliseert ijskristalvorming die celwanden beschadigt. Gecontroleerd ontdooien voorkomt excessieve cellulaire afbraak, wat fruitstructuur beter behoudt dan andere conserveringsmethoden."
        }
      },
      {
        question: {
                  "en": "What is the Maillard reaction's role in fruit dessert preparation?",
                  "es": "¿Cuál es el papel de la reacción de Maillard en la preparación de postres de fruta?",
                  "de": "Welche Rolle spielt die Maillard-Reaktion bei der Zubereitung von Fruchtdesserts?",
                  "nl": "Wat is de rol van de Maillard-reactie bij de bereiding van fruitdesserts?"
        },
        options: [
        {
                  "en": "Only affects fruit color, not taste",
                  "es": "Solo afecta el color de la fruta, no el sabor",
                  "de": "Beeinflusst nur die Fruchtfarbe, nicht den Geschmack",
                  "nl": "Beïnvloedt alleen fruitkleur, niet smaak"
        },
        {
                  "en": "Has no effect on fruit desserts",
                  "es": "No tiene efecto en postres de fruta",
                  "de": "Hat keinen Einfluss auf Fruchtdesserts",
                  "nl": "Heeft geen effect op fruitdesserts"
        },
        {
                  "en": "Prevents fruit from cooking properly",
                  "es": "Evita que la fruta se cocine adecuadamente",
                  "de": "Verhindert, dass Obst richtig kocht",
                  "nl": "Voorkomt dat fruit goed kookt"
        },
        {
                  "en": "Creates browning and complex flavors when sugars and amino acids heat together",
                  "es": "Crea dorado y sabores complejos cuando azúcares y aminoácidos se calientan juntos",
                  "de": "Erzeugt Bräunung und komplexe Aromen, wenn Zucker und Aminosäuren zusammen erhitzt werden",
                  "nl": "Creëert verbruining en complexe smaken wanneer suikers en aminozuren samen verhit worden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Maillard reaction occurs when reducing sugars and amino acids in fruits react under heat, creating brown pigments and developing complex, nutty flavors that enhance caramelized fruit desserts like tarte tatin.",
                  "es": "La reacción de Maillard ocurre cuando azúcares reductores y aminoácidos en frutas reaccionan bajo calor, creando pigmentos marrones y desarrollando sabores complejos y de nuez que realzan postres de fruta caramelizada como tarte tatin.",
                  "de": "Die Maillard-Reaktion tritt auf, wenn reduzierende Zucker und Aminosäuren in Früchten unter Hitze reagieren, braune Pigmente erzeugen und komplexe, nussige Aromen entwickeln, die karamelisierte Fruchtdesserts wie Tarte Tatin verbessern.",
                  "nl": "De Maillard-reactie treedt op wanneer reducerende suikers en aminozuren in vruchten onder hitte reageren, bruine pigmenten creëren en complexe, nootachtige smaken ontwikkelen die gekarameliseerde fruitdesserts zoals tarte tatin verbeteren."
        }
      },
      {
        question: {
                  "en": "How do anthocyanins affect the color stability of berry desserts during processing?",
                  "es": "¿Cómo afectan las antocianinas la estabilidad del color de postres de bayas durante el procesamiento?",
                  "de": "Wie beeinflussen Anthocyane die Farbstabilität von Beerendesserts während der Verarbeitung?",
                  "nl": "Hoe beïnvloeden anthocyanines de kleurstabiliteit van bessendesserts tijdens verwerking?"
        },
        options: [
        {
                  "en": "They only provide nutritional benefits",
                  "es": "Solo proporcionan beneficios nutricionales",
                  "de": "Sie bieten nur ernährungsphysiologische Vorteile",
                  "nl": "Ze bieden alleen voedingsvoordelen"
        },
        {
                  "en": "They prevent any color changes",
                  "es": "Evitan cualquier cambio de color",
                  "de": "Sie verhindern jegliche Farbveränderungen",
                  "nl": "Ze voorkomen elke kleurverandering"
        },
        {
                  "en": "They create pH-sensitive pigments that can shift from red to blue in alkaline conditions",
                  "es": "Crean pigmentos sensibles al pH que pueden cambiar de rojo a azul en condiciones alcalinas",
                  "de": "Sie erzeugen pH-empfindliche Pigmente, die sich von rot zu blau in alkalischen Bedingungen verschieben können",
                  "nl": "Ze creëren pH-gevoelige pigmenten die kunnen verschuiven van rood naar blauw onder alkalische omstandigheden"
        },
        {
                  "en": "They only affect flavor, not color",
                  "es": "Solo afectan el sabor, no el color",
                  "de": "Sie beeinflussen nur den Geschmack, nicht die Farbe",
                  "nl": "Ze beïnvloeden alleen smaak, niet kleur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Anthocyanins are pH-sensitive pigments responsible for red, purple, and blue colors in berries. In acidic conditions they appear red, but can shift to blue or green in alkaline conditions, affecting dessert appearance during baking with alkaline ingredients like baking soda.",
                  "es": "Las antocianinas son pigmentos sensibles al pH responsables de colores rojos, morados y azules en bayas. En condiciones ácidas aparecen rojas, pero pueden cambiar a azul o verde en condiciones alcalinas, afectando apariencia del postre durante horneado con ingredientes alcalinos como bicarbonato.",
                  "de": "Anthocyane sind pH-empfindliche Pigmente, die für rote, violette und blaue Farben in Beeren verantwortlich sind. Unter sauren Bedingungen erscheinen sie rot, können aber unter alkalischen Bedingungen zu blau oder grün wechseln, was das Dessert-Aussehen beim Backen mit alkalischen Zutaten wie Backpulver beeinflusst.",
                  "nl": "Anthocyanines zijn pH-gevoelige pigmenten verantwoordelijk voor rode, paarse en blauwe kleuren in bessen. Onder zure omstandigheden verschijnen ze rood, maar kunnen verschuiven naar blauw of groen onder alkalische omstandigheden, wat het dessert uiterlijk beïnvloedt tijdens bakken met alkalische ingrediënten zoals baking soda."
        }
      },
      {
        question: {
                  "en": "What is a cobbler?",
                  "es": "What is a cobbler?",
                  "de": "What is a cobbler?",
                  "nl": "What is a cobbler?"
        },
        options: [
        {
                  "en": "Fruit with biscuit-like topping",
                  "es": "Fruit with biscuit-like topping",
                  "de": "Fruit with biscuit-like topping",
                  "nl": "Fruit with biscuit-like topping"
        },
        {
                  "en": "Fruit with ice cream",
                  "es": "Fruit with ice cream",
                  "de": "Fruit with ice cream",
                  "nl": "Fruit with ice cream"
        },
        {
                  "en": "Layered fruit dessert",
                  "es": "Layered fruit dessert",
                  "de": "Layered fruit dessert",
                  "nl": "Layered fruit dessert"
        },
        {
                  "en": "Fruit pie with two crusts",
                  "es": "Fruit pie with two crusts",
                  "de": "Fruit pie with two crusts",
                  "nl": "Fruit pie with two crusts"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Cobbler consists of fruit topped with a biscuit-like dough that resembles a cobblestone street when baked.",
                  "es": "Cobbler consists of fruit topped with a biscuit-like dough that resembles a cobblestone street when baked.",
                  "de": "Cobbler consists of fruit topped with a biscuit-like dough that resembles a cobblestone street when baked.",
                  "nl": "Cobbler consists of fruit topped with a biscuit-like dough that resembles a cobblestone street when baked."
        }
      },
      {
        question: {
                  "en": "What is a crisp (or crumble)?",
                  "es": "What is a crisp (or crumble)?",
                  "de": "What is a crisp (or crumble)?",
                  "nl": "What is a crisp (or crumble)?"
        },
        options: [
        {
                  "en": "Fruit with cake",
                  "es": "Fruit with cake",
                  "de": "Fruit with cake",
                  "nl": "Fruit with cake"
        },
        {
                  "en": "Fruit with pastry crust",
                  "es": "Fruit with pastry crust",
                  "de": "Fruit with pastry crust",
                  "nl": "Fruit with pastry crust"
        },
        {
                  "en": "Fruit with streusel topping",
                  "es": "Fruit with streusel topping",
                  "de": "Fruit with streusel topping",
                  "nl": "Fruit with streusel topping"
        },
        {
                  "en": "Fruit with meringue",
                  "es": "Fruit with meringue",
                  "de": "Fruit with meringue",
                  "nl": "Fruit with meringue"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A crisp or crumble features fruit topped with a streusel-like mixture of butter, sugar, flour, and sometimes oats.",
                  "es": "A crisp or crumble features fruit topped with a streusel-like mixture of butter, sugar, flour, and sometimes oats.",
                  "de": "A crisp or crumble features fruit topped with a streusel-like mixture of butter, sugar, flour, and sometimes oats.",
                  "nl": "A crisp or crumble features fruit topped with a streusel-like mixture of butter, sugar, flour, and sometimes oats."
        }
      },
      {
        question: {
                  "en": "What is a fruit fool?",
                  "es": "What is a fruit fool?",
                  "de": "What is a fruit fool?",
                  "nl": "What is a fruit fool?"
        },
        options: [
        {
                  "en": "Pureed fruit mixed with whipped cream",
                  "es": "Pureed fruit mixed with whipped cream",
                  "de": "Pureed fruit mixed with whipped cream",
                  "nl": "Pureed fruit mixed with whipped cream"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A fruit fool is a traditional British dessert of pureed or stewed fruit folded into whipped cream.",
                  "es": "A fruit fool is a traditional British dessert of pureed or stewed fruit folded into whipped cream.",
                  "de": "A fruit fool is a traditional British dessert of pureed or stewed fruit folded into whipped cream.",
                  "nl": "A fruit fool is a traditional British dessert of pureed or stewed fruit folded into whipped cream."
        }
      },
      {
        question: {
                  "en": "What is poached fruit?",
                  "es": "What is poached fruit?",
                  "de": "What is poached fruit?",
                  "nl": "What is poached fruit?"
        },
        options: [
        {
                  "en": "Grilled fruit",
                  "es": "Grilled fruit",
                  "de": "Grilled fruit",
                  "nl": "Grilled fruit"
        },
        {
                  "en": "Baked fruit",
                  "es": "Baked fruit",
                  "de": "Baked fruit",
                  "nl": "Baked fruit"
        },
        {
                  "en": "Raw fruit",
                  "es": "Raw fruit",
                  "de": "Raw fruit",
                  "nl": "Raw fruit"
        },
        {
                  "en": "Fruit gently simmered in liquid",
                  "es": "Fruit gently simmered in liquid",
                  "de": "Fruit gently simmered in liquid",
                  "nl": "Fruit gently simmered in liquid"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Poached fruit is gently cooked by simmering in liquid such as wine, syrup, or juice until tender.",
                  "es": "Poached fruit is gently cooked by simmering in liquid such as wine, syrup, or juice until tender.",
                  "de": "Poached fruit is gently cooked by simmering in liquid such as wine, syrup, or juice until tender.",
                  "nl": "Poached fruit is gently cooked by simmering in liquid such as wine, syrup, or juice until tender."
        }
      },
      {
        question: {
                  "en": "What is a clafoutis?",
                  "es": "What is a clafoutis?",
                  "de": "What is a clafoutis?",
                  "nl": "What is a clafoutis?"
        },
        options: [
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "French baked fruit dessert with custard",
                  "es": "French baked fruit dessert with custard",
                  "de": "French baked fruit dessert with custard",
                  "nl": "French baked fruit dessert with custard"
        },
        {
                  "en": "Fruit compote",
                  "es": "Fruit compote",
                  "de": "Fruit compote",
                  "nl": "Fruit compote"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Clafoutis is a French dessert with fruit (traditionally cherries) covered with a thick custard-like batter and baked.",
                  "es": "Clafoutis is a French dessert with fruit (traditionally cherries) covered with a thick custard-like batter and baked.",
                  "de": "Clafoutis is a French dessert with fruit (traditionally cherries) covered with a thick custard-like batter and baked.",
                  "nl": "Clafoutis is a French dessert with fruit (traditionally cherries) covered with a thick custard-like batter and baked."
        }
      },
      {
        question: {
                  "en": "What is a fruit compote?",
                  "es": "What is a fruit compote?",
                  "de": "What is a fruit compote?",
                  "nl": "What is a fruit compote?"
        },
        options: [
        {
                  "en": "Dried fruit",
                  "es": "Dried fruit",
                  "de": "Dried fruit",
                  "nl": "Dried fruit"
        },
        {
                  "en": "Raw fruit salad",
                  "es": "Raw fruit salad",
                  "de": "Raw fruit salad",
                  "nl": "Raw fruit salad"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit stewed in sugar syrup",
                  "es": "Fruit stewed in sugar syrup",
                  "de": "Fruit stewed in sugar syrup",
                  "nl": "Fruit stewed in sugar syrup"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Compote is fruit slowly cooked in sugar syrup, creating a chunky, syrupy fruit mixture.",
                  "es": "Compote is fruit slowly cooked in sugar syrup, creating a chunky, syrupy fruit mixture.",
                  "de": "Compote is fruit slowly cooked in sugar syrup, creating a chunky, syrupy fruit mixture.",
                  "nl": "Compote is fruit slowly cooked in sugar syrup, creating a chunky, syrupy fruit mixture."
        }
      },
      {
        question: {
                  "en": "What is Pavlova?",
                  "es": "What is Pavlova?",
                  "de": "What is Pavlova?",
                  "nl": "What is Pavlova?"
        },
        options: [
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        },
        {
                  "en": "Fruit ice cream",
                  "es": "Fruit ice cream",
                  "de": "Fruit ice cream",
                  "nl": "Fruit ice cream"
        },
        {
                  "en": "Meringue dessert topped with fruit and cream",
                  "es": "Meringue dessert topped with fruit and cream",
                  "de": "Meringue dessert topped with fruit and cream",
                  "nl": "Meringue dessert topped with fruit and cream"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pavlova is a meringue-based dessert with a crisp crust and soft inside, topped with whipped cream and fresh fruit.",
                  "es": "Pavlova is a meringue-based dessert with a crisp crust and soft inside, topped with whipped cream and fresh fruit.",
                  "de": "Pavlova is a meringue-based dessert with a crisp crust and soft inside, topped with whipped cream and fresh fruit.",
                  "nl": "Pavlova is a meringue-based dessert with a crisp crust and soft inside, topped with whipped cream and fresh fruit."
        }
      },
      {
        question: {
                  "en": "What is a fruit tart?",
                  "es": "What is a fruit tart?",
                  "de": "What is a fruit tart?",
                  "nl": "What is a fruit tart?"
        },
        options: [
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        },
        {
                  "en": "Fruit pudding",
                  "es": "Fruit pudding",
                  "de": "Fruit pudding",
                  "nl": "Fruit pudding"
        },
        {
                  "en": "Pastry shell filled with custard and fruit",
                  "es": "Pastry shell filled with custard and fruit",
                  "de": "Pastry shell filled with custard and fruit",
                  "nl": "Pastry shell filled with custard and fruit"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A fruit tart has a pastry shell filled with pastry cream or custard and topped with fresh fruit, often glazed.",
                  "es": "A fruit tart has a pastry shell filled with pastry cream or custard and topped with fresh fruit, often glazed.",
                  "de": "A fruit tart has a pastry shell filled with pastry cream or custard and topped with fresh fruit, often glazed.",
                  "nl": "A fruit tart has a pastry shell filled with pastry cream or custard and topped with fresh fruit, often glazed."
        }
      },
      {
        question: {
                  "en": "What is bananas Foster?",
                  "es": "What is bananas Foster?",
                  "de": "What is bananas Foster?",
                  "nl": "What is bananas Foster?"
        },
        options: [
        {
                  "en": "Banana bread",
                  "es": "Banana bread",
                  "de": "Banana bread",
                  "nl": "Banana bread"
        },
        {
                  "en": "Bananas in caramel rum sauce, often flambéed",
                  "es": "Bananas in caramel rum sauce, often flambéed",
                  "de": "Bananas in caramel rum sauce, often flambéed",
                  "nl": "Bananas in caramel rum sauce, often flambéed"
        },
        {
                  "en": "Banana split",
                  "es": "Banana split",
                  "de": "Banana split",
                  "nl": "Banana split"
        },
        {
                  "en": "Banana cream pie",
                  "es": "Banana cream pie",
                  "de": "Banana cream pie",
                  "nl": "Banana cream pie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Bananas Foster features bananas cooked in butter, brown sugar, cinnamon, and rum sauce, often flambéed tableside.",
                  "es": "Bananas Foster features bananas cooked in butter, brown sugar, cinnamon, and rum sauce, often flambéed tableside.",
                  "de": "Bananas Foster features bananas cooked in butter, brown sugar, cinnamon, and rum sauce, often flambéed tableside.",
                  "nl": "Bananas Foster features bananas cooked in butter, brown sugar, cinnamon, and rum sauce, often flambéed tableside."
        }
      },
      {
        question: {
                  "en": "What is a buckle?",
                  "es": "What is a buckle?",
                  "de": "What is a buckle?",
                  "nl": "What is a buckle?"
        },
        options: [
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Cake with fruit mixed in, streusel topping",
                  "es": "Cake with fruit mixed in, streusel topping",
                  "de": "Cake with fruit mixed in, streusel topping",
                  "nl": "Cake with fruit mixed in, streusel topping"
        },
        {
                  "en": "Fruit cobbler",
                  "es": "Fruit cobbler",
                  "de": "Fruit cobbler",
                  "nl": "Fruit cobbler"
        },
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A buckle is a cake with fruit mixed into the batter and a streusel topping that 'buckles' as it bakes.",
                  "es": "A buckle is a cake with fruit mixed into the batter and a streusel topping that 'buckles' as it bakes.",
                  "de": "A buckle is a cake with fruit mixed into the batter and a streusel topping that 'buckles' as it bakes.",
                  "nl": "A buckle is a cake with fruit mixed into the batter and a streusel topping that 'buckles' as it bakes."
        }
      },
      {
        question: {
                  "en": "What is a grunt or slump?",
                  "es": "What is a grunt or slump?",
                  "de": "What is a grunt or slump?",
                  "nl": "What is a grunt or slump?"
        },
        options: [
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit stewed with dumpling topping",
                  "es": "Fruit stewed with dumpling topping",
                  "de": "Fruit stewed with dumpling topping",
                  "nl": "Fruit stewed with dumpling topping"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A grunt (or slump) is fruit stewed on the stovetop with biscuit-like dumplings steamed on top.",
                  "es": "A grunt (or slump) is fruit stewed on the stovetop with biscuit-like dumplings steamed on top.",
                  "de": "A grunt (or slump) is fruit stewed on the stovetop with biscuit-like dumplings steamed on top.",
                  "nl": "A grunt (or slump) is fruit stewed on the stovetop with biscuit-like dumplings steamed on top."
        }
      },
      {
        question: {
                  "en": "What is Eton mess?",
                  "es": "What is Eton mess?",
                  "de": "What is Eton mess?",
                  "nl": "What is Eton mess?"
        },
        options: [
        {
                  "en": "Meringue, cream, and berries mixed together",
                  "es": "Meringue, cream, and berries mixed together",
                  "de": "Meringue, cream, and berries mixed together",
                  "nl": "Meringue, cream, and berries mixed together"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        },
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Eton mess is a British dessert of crushed meringue, whipped cream, and strawberries mixed together.",
                  "es": "Eton mess is a British dessert of crushed meringue, whipped cream, and strawberries mixed together.",
                  "de": "Eton mess is a British dessert of crushed meringue, whipped cream, and strawberries mixed together.",
                  "nl": "Eton mess is a British dessert of crushed meringue, whipped cream, and strawberries mixed together."
        }
      },
      {
        question: {
                  "en": "What is a fruit galette?",
                  "es": "What is a fruit galette?",
                  "de": "What is a fruit galette?",
                  "nl": "What is a fruit galette?"
        },
        options: [
        {
                  "en": "Fruit pudding",
                  "es": "Fruit pudding",
                  "de": "Fruit pudding",
                  "nl": "Fruit pudding"
        },
        {
                  "en": "Free-form rustic fruit tart",
                  "es": "Free-form rustic fruit tart",
                  "de": "Free-form rustic fruit tart",
                  "nl": "Free-form rustic fruit tart"
        },
        {
                  "en": "Layered fruit cake",
                  "es": "Layered fruit cake",
                  "de": "Layered fruit cake",
                  "nl": "Layered fruit cake"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A galette is a free-form tart with fruit in the center and pastry edges folded over, more rustic than a traditional tart.",
                  "es": "A galette is a free-form tart with fruit in the center and pastry edges folded over, more rustic than a traditional tart.",
                  "de": "A galette is a free-form tart with fruit in the center and pastry edges folded over, more rustic than a traditional tart.",
                  "nl": "A galette is a free-form tart with fruit in the center and pastry edges folded over, more rustic than a traditional tart."
        }
      },
      {
        question: {
                  "en": "What is flambé?",
                  "es": "What is flambé?",
                  "de": "What is flambé?",
                  "nl": "What is flambé?"
        },
        options: [
        {
                  "en": "Grilling fruit",
                  "es": "Grilling fruit",
                  "de": "Grilling fruit",
                  "nl": "Grilling fruit"
        },
        {
                  "en": "Setting alcohol-soaked dessert on fire",
                  "es": "Setting alcohol-soaked dessert on fire",
                  "de": "Setting alcohol-soaked dessert on fire",
                  "nl": "Setting alcohol-soaked dessert on fire"
        },
        {
                  "en": "Caramelizing sugar",
                  "es": "Caramelizing sugar",
                  "de": "Caramelizing sugar",
                  "nl": "Caramelizing sugar"
        },
        {
                  "en": "Freezing dessert",
                  "es": "Freezing dessert",
                  "de": "Freezing dessert",
                  "nl": "Freezing dessert"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Flambé involves pouring liquor over a dessert and igniting it, creating dramatic flames and enhancing flavor.",
                  "es": "Flambé involves pouring liquor over a dessert and igniting it, creating dramatic flames and enhancing flavor.",
                  "de": "Flambé involves pouring liquor over a dessert and igniting it, creating dramatic flames and enhancing flavor.",
                  "nl": "Flambé involves pouring liquor over a dessert and igniting it, creating dramatic flames and enhancing flavor."
        }
      },
      {
        question: {
                  "en": "What is a brown Betty?",
                  "es": "What is a brown Betty?",
                  "de": "What is a brown Betty?",
                  "nl": "What is a brown Betty?"
        },
        options: [
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit dessert with buttered breadcrumb layers",
                  "es": "Fruit dessert with buttered breadcrumb layers",
                  "de": "Fruit dessert with buttered breadcrumb layers",
                  "nl": "Fruit dessert with buttered breadcrumb layers"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Brown Betty is a fruit dessert made with layers of spiced fruit and buttered breadcrumbs.",
                  "es": "Brown Betty is a fruit dessert made with layers of spiced fruit and buttered breadcrumbs.",
                  "de": "Brown Betty is a fruit dessert made with layers of spiced fruit and buttered breadcrumbs.",
                  "nl": "Brown Betty is a fruit dessert made with layers of spiced fruit and buttered breadcrumbs."
        }
      },
      {
        question: {
                  "en": "What is macerated fruit?",
                  "es": "What is macerated fruit?",
                  "de": "What is macerated fruit?",
                  "nl": "What is macerated fruit?"
        },
        options: [
        {
                  "en": "Grilled fruit",
                  "es": "Grilled fruit",
                  "de": "Grilled fruit",
                  "nl": "Grilled fruit"
        },
        {
                  "en": "Dried fruit",
                  "es": "Dried fruit",
                  "de": "Dried fruit",
                  "nl": "Dried fruit"
        },
        {
                  "en": "Fruit soaked in liquid and sugar",
                  "es": "Fruit soaked in liquid and sugar",
                  "de": "Fruit soaked in liquid and sugar",
                  "nl": "Fruit soaked in liquid and sugar"
        },
        {
                  "en": "Pureed fruit",
                  "es": "Pureed fruit",
                  "de": "Pureed fruit",
                  "nl": "Pureed fruit"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Macerated fruit is soaked in liquid (wine, liqueur, juice) with sugar, which draws out juices and creates a syrup.",
                  "es": "Macerated fruit is soaked in liquid (wine, liqueur, juice) with sugar, which draws out juices and creates a syrup.",
                  "de": "Macerated fruit is soaked in liquid (wine, liqueur, juice) with sugar, which draws out juices and creates a syrup.",
                  "nl": "Macerated fruit is soaked in liquid (wine, liqueur, juice) with sugar, which draws out juices and creates a syrup."
        }
      },
      {
        question: {
                  "en": "What is the best way to prevent fruit pies from becoming soggy?",
                  "es": "What is the best way to prevent fruit pies from becoming soggy?",
                  "de": "What is the best way to prevent fruit pies from becoming soggy?",
                  "nl": "What is the best way to prevent fruit pies from becoming soggy?"
        },
        options: [
        {
                  "en": "Bake at low temperature",
                  "es": "Bake at low temperature",
                  "de": "Bake at low temperature",
                  "nl": "Bake at low temperature"
        },
        {
                  "en": "Add extra sugar",
                  "es": "Add extra sugar",
                  "de": "Add extra sugar",
                  "nl": "Add extra sugar"
        },
        {
                  "en": "Blind bake crust and use thickener",
                  "es": "Blind bake crust and use thickener",
                  "de": "Blind bake crust and use thickener",
                  "nl": "Blind bake crust and use thickener"
        },
        {
                  "en": "Use less fruit",
                  "es": "Use less fruit",
                  "de": "Use less fruit",
                  "nl": "Use less fruit"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Blind baking the bottom crust and using proper thickener (cornstarch, tapioca) prevents soggy fruit pie bottoms.",
                  "es": "Blind baking the bottom crust and using proper thickener (cornstarch, tapioca) prevents soggy fruit pie bottoms.",
                  "de": "Blind baking the bottom crust and using proper thickener (cornstarch, tapioca) prevents soggy fruit pie bottoms.",
                  "nl": "Blind baking the bottom crust and using proper thickener (cornstarch, tapioca) prevents soggy fruit pie bottoms."
        }
      },
      {
        question: {
                  "en": "What is a summer pudding?",
                  "es": "What is a summer pudding?",
                  "de": "What is a summer pudding?",
                  "nl": "What is a summer pudding?"
        },
        options: [
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit ice cream",
                  "es": "Fruit ice cream",
                  "de": "Fruit ice cream",
                  "nl": "Fruit ice cream"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        },
        {
                  "en": "Bread-lined mold filled with stewed berries",
                  "es": "Bread-lined mold filled with stewed berries",
                  "de": "Bread-lined mold filled with stewed berries",
                  "nl": "Bread-lined mold filled with stewed berries"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Summer pudding is a British dessert of bread slices lining a mold, filled with stewed summer berries, then weighted and chilled.",
                  "es": "Summer pudding is a British dessert of bread slices lining a mold, filled with stewed summer berries, then weighted and chilled.",
                  "de": "Summer pudding is a British dessert of bread slices lining a mold, filled with stewed summer berries, then weighted and chilled.",
                  "nl": "Summer pudding is a British dessert of bread slices lining a mold, filled with stewed summer berries, then weighted and chilled."
        }
      },
      {
        question: {
                  "en": "What is a fruit charlotte?",
                  "es": "What is a fruit charlotte?",
                  "de": "What is a fruit charlotte?",
                  "nl": "What is a fruit charlotte?"
        },
        options: [
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        },
        {
                  "en": "Dessert with bread/ladyfingers lining mold, filled with fruit",
                  "es": "Dessert with bread/ladyfingers lining mold, filled with fruit",
                  "de": "Dessert with bread/ladyfingers lining mold, filled with fruit",
                  "nl": "Dessert with bread/ladyfingers lining mold, filled with fruit"
        },
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A charlotte features bread slices or ladyfingers lining a mold, filled with fruit and custard or mousse.",
                  "es": "A charlotte features bread slices or ladyfingers lining a mold, filled with fruit and custard or mousse.",
                  "de": "A charlotte features bread slices or ladyfingers lining a mold, filled with fruit and custard or mousse.",
                  "nl": "A charlotte features bread slices or ladyfingers lining a mold, filled with fruit and custard or mousse."
        }
      },
      {
        question: {
                  "en": "What is ambrosia?",
                  "es": "What is ambrosia?",
                  "de": "What is ambrosia?",
                  "nl": "What is ambrosia?"
        },
        options: [
        {
                  "en": "Fruit tart",
                  "es": "Fruit tart",
                  "de": "Fruit tart",
                  "nl": "Fruit tart"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        },
        {
                  "en": "Fruit salad with coconut and marshmallows",
                  "es": "Fruit salad with coconut and marshmallows",
                  "de": "Fruit salad with coconut and marshmallows",
                  "nl": "Fruit salad with coconut and marshmallows"
        },
        {
                  "en": "Fruit pie",
                  "es": "Fruit pie",
                  "de": "Fruit pie",
                  "nl": "Fruit pie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ambrosia is an American fruit salad typically made with oranges, pineapple, coconut, marshmallows, and sometimes whipped cream.",
                  "es": "Ambrosia is an American fruit salad typically made with oranges, pineapple, coconut, marshmallows, and sometimes whipped cream.",
                  "de": "Ambrosia is an American fruit salad typically made with oranges, pineapple, coconut, marshmallows, and sometimes whipped cream.",
                  "nl": "Ambrosia is an American fruit salad typically made with oranges, pineapple, coconut, marshmallows, and sometimes whipped cream."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();