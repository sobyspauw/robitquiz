// Tea Quiz - Level 10
(function() {
  const level10 = {
    name: {
          "en": "Ultimate Tea Mastery",
          "es": "Maestría Suprema del Té",
          "de": "Ultimative Tee-Meisterschaft",
          "nl": "Ultieme Thee Meesterschap"
    },
    questions: [
      {
        question: {
                  "en": "Which rare Chinese tea is known as 'Nine Dragon's Nest' and costs over $10,000 per kilogram?",
                  "es": "¿Qué té chino raro es conocido como 'Nido de Nueve Dragones' y cuesta más de $10,000 por kilogramo?",
                  "de": "Welcher seltene chinesische Tee ist als 'Nest der neun Drachen' bekannt und kostet über 10.000 Dollar pro Kilogramm?",
                  "nl": "Welke zeldzame Chinese thee staat bekend als 'Nest van Negen Draken' en kost meer dan $10.000 per kilogram?"
        },
        options: [
        {
                  "en": "Da Hong Pao (Big Red Robe)",
                  "es": "Da Hong Pao (Gran Túnica Roja)",
                  "de": "Da Hong Pao (Große Rote Robe)",
                  "nl": "Da Hong Pao (Grote Rode Mantel)"
        },
        {
                  "en": "Tie Guan Yin Supreme",
                  "es": "Tie Guan Yin Supremo",
                  "de": "Tie Guan Yin Supreme",
                  "nl": "Tie Guan Yin Supreme"
        },
        {
                  "en": "Phoenix Dan Cong Ancient Tree",
                  "es": "Fénix Dan Cong Árbol Ancestral",
                  "de": "Phoenix Dan Cong Alter Baum",
                  "nl": "Phoenix Dan Cong Oude Boom"
        },
        {
                  "en": "Yellow Gold Tea Buds",
                  "es": "Brotes de Té Oro Amarillo",
                  "de": "Gelbe Gold Tee Knospen",
                  "nl": "Gele Goud Thee Knoppen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Yellow Gold Tea Buds (Huang Jin Gui) from ancient mother trees can reach astronomical prices, with the rarest batches exceeding $10,000/kg due to extremely limited annual production.",
                  "es": "Los Brotes de Té Oro Amarillo (Huang Jin Gui) de árboles madre ancestrales pueden alcanzar precios astronómicos, con los lotes más raros superando los $10,000/kg debido a la producción anual extremadamente limitada.",
                  "de": "Gelbe Gold Tee Knospen (Huang Jin Gui) von alten Mutterbäumen können astronomische Preise erreichen, wobei die seltensten Chargen 10.000 $/kg übersteigen aufgrund extrem begrenzter jährlicher Produktion.",
                  "nl": "Gele Goud Thee Knoppen (Huang Jin Gui) van oude moederbomen kunnen astronomische prijzen bereiken, waarbij de zeldzaamste batches meer dan $10.000/kg kosten vanwege extreem beperkte jaarlijkse productie."
        }
      },
      {
        question: {
                  "en": "In traditional Gongfu tea ceremony, what is the precise water temperature range for brewing vintage Sheng Pu-erh (20+ years)?",
                  "es": "En la ceremonia tradicional de té Gongfu, ¿cuál es el rango preciso de temperatura del agua para preparar Sheng Pu-erh vintage (20+ años)?",
                  "de": "Bei der traditionellen Gongfu-Teezeremonie, was ist der präzise Wassertemperaturbereich für die Zubereitung von Vintage Sheng Pu-erh (20+ Jahre)?",
                  "nl": "In de traditionele Gongfu thee ceremonie, wat is het precieze watertemperatuurbereik voor het zetten van vintage Sheng Pu-erh (20+ jaar)?"
        },
        options: [
        {
                  "en": "90-95°C (194-203°F)",
                  "es": "90-95°C (194-203°F)",
                  "de": "90-95°C (194-203°F)",
                  "nl": "90-95°C (194-203°F)"
        },
        {
                  "en": "85-90°C (185-194°F)",
                  "es": "85-90°C (185-194°F)",
                  "de": "85-90°C (185-194°F)",
                  "nl": "85-90°C (185-194°F)"
        },
        {
                  "en": "100°C+ (212°F+) - Boiling",
                  "es": "100°C+ (212°F+) - Hirviendo",
                  "de": "100°C+ (212°F+) - Kochend",
                  "nl": "100°C+ (212°F+) - Kokend"
        },
        {
                  "en": "95-100°C (203-212°F)",
                  "es": "95-100°C (203-212°F)",
                  "de": "95-100°C (203-212°F)",
                  "nl": "95-100°C (203-212°F)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Aged Sheng Pu-erh requires 95-100°C water to properly extract the complex compounds developed through decades of aging. The high temperature unlocks deep flavors without over-extracting tannins due to the tea's matured character.",
                  "es": "El Sheng Pu-erh envejecido requiere agua de 95-100°C para extraer adecuadamente los compuestos complejos desarrollados a través de décadas de envejecimiento. La alta temperatura desbloquea sabores profundos sin sobre-extraer taninos debido al carácter maduro del té.",
                  "de": "Gereifter Sheng Pu-erh benötigt 95-100°C heißes Wasser, um die komplexen Verbindungen richtig zu extrahieren, die sich über Jahrzehnte der Reifung entwickelt haben. Die hohe Temperatur erschließt tiefe Aromen, ohne Tannine zu über-extrahieren aufgrund des gereiften Charakters des Tees.",
                  "nl": "Gerijpte Sheng Pu-erh vereist 95-100°C water om de complexe verbindingen goed te extraheren die zich door decennia van rijping hebben ontwikkeld. De hoge temperatuur ontgrendelt diepe smaken zonder tannines over-extractie vanwege het gerijpte karakter van de thee."
        }
      },
      {
        question: {
                  "en": "Which rare Japanese tea cultivar is exclusively grown at altitudes above 1,000m and harvested only during full moon nights?",
                  "es": "¿Qué cultivar raro de té japonés se cultiva exclusivamente a altitudes superiores a 1,000m y se cosecha solo durante las noches de luna llena?",
                  "de": "Welche seltene japanische Tee-Sorte wird ausschließlich in Höhen über 1.000m angebaut und nur bei Vollmond geerntet?",
                  "nl": "Welke zeldzame Japanse thee cultivar wordt uitsluitend geteeld op hoogtes boven de 1.000m en alleen geoogst tijdens volle maan nachten?"
        },
        options: [
        {
                  "en": "Tencha Moonlight",
                  "es": "Tencha Luz de Luna",
                  "de": "Tencha Mondschein",
                  "nl": "Tencha Maanlicht"
        },
        {
                  "en": "Gyokuro Supreme",
                  "es": "Gyokuro Supremo",
                  "de": "Gyokuro Supreme",
                  "nl": "Gyokuro Supreme"
        },
        {
                  "en": "Yamecha Lunar Eclipse",
                  "es": "Yamecha Eclipse Lunar",
                  "de": "Yamecha Mondfinsternis",
                  "nl": "Yamecha Maansverduistering"
        },
        {
                  "en": "Kabusecha Mystic",
                  "es": "Kabusecha Místico",
                  "de": "Kabusecha Mystisch",
                  "nl": "Kabusecha Mystiek"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Tencha Moonlight is a legendary cultivar from the Uji mountains, harvested exclusively during full moons when amino acid concentration peaks. The moonlight harvest tradition dates back to 16th century tea masters who believed lunar energy enhanced the tea's spiritual properties.",
                  "es": "Tencha Luz de Luna es un cultivar legendario de las montañas Uji, cosechado exclusivamente durante lunas llenas cuando la concentración de aminoácidos alcanza su pico. La tradición de cosecha a la luz de la luna se remonta a los maestros del té del siglo XVI que creían que la energía lunar mejoraba las propiedades espirituales del té.",
                  "de": "Tencha Mondschein ist eine legendäre Sorte aus den Uji-Bergen, die ausschließlich bei Vollmond geerntet wird, wenn die Aminosäure-Konzentration ihren Höhepunkt erreicht. Die Mondschein-Erntetradition geht auf Teemeister des 16. Jahrhunderts zurück, die glaubten, dass Mondenergie die spirituellen Eigenschaften des Tees verbessere.",
                  "nl": "Tencha Maanlicht is een legendarische cultivar uit de Uji bergen, uitsluitend geoogst tijdens volle maan wanneer de aminozuur concentratie piekt. De maanlicht oogsttradition gaat terug tot 16e-eeuwse thee meesters die geloofden dat maanenergie de spirituele eigenschappen van thee verbeterde."
        }
      },
      {
        question: {
                  "en": "In advanced tea biochemistry, what is the role of theogallin in determining tea quality and mouthfeel?",
                  "es": "En bioquímica avanzada del té, ¿cuál es el papel de la teogalina en determinar la calidad del té y la sensación en boca?",
                  "de": "In der fortgeschrittenen Tee-Biochemie, welche Rolle spielt Theogallin bei der Bestimmung von Teequalität und Mundgefühl?",
                  "nl": "In geavanceerde thee biochemie, wat is de rol van theogalline bij het bepalen van thee kwaliteit en mondgevoel?"
        },
        options: [
        {
                  "en": "Preserves tea freshness during storage",
                  "es": "Preserva la frescura del té durante el almacenamiento",
                  "de": "Erhält die Tee-Frische während der Lagerung",
                  "nl": "Behoudt thee versheid tijdens opslag"
        },
        {
                  "en": "Enhances caffeine absorption",
                  "es": "Mejora la absorción de cafeína",
                  "de": "Verbessert die Koffeinaufnahme",
                  "nl": "Verbetert cafeïne absorptie"
        },
        {
                  "en": "Creates astringency and bitter compounds",
                  "es": "Crea astringencia y compuestos amargos",
                  "de": "Erzeugt Adstringenz und Bitterstoffe",
                  "nl": "Creëert wrangheid en bittere verbindingen"
        },
        {
                  "en": "Provides smooth, velvety mouthfeel and reduces harshness",
                  "es": "Proporciona una sensación suave y aterciopelada en boca y reduce la aspereza",
                  "de": "Bietet ein glattes, samtiges Mundgefühl und reduziert Härte",
                  "nl": "Zorgt voor een gladde, fluwelen mondgevoel en vermindert scherpte"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Theogallin acts as a natural buffer, binding with harsh tannins and creating the smooth, velvety mouthfeel characteristic of premium teas. Higher theogallin content indicates superior tea processing and contributes to the coveted 'hui gan' (returning sweetness) sensation.",
                  "es": "La teogalina actúa como un tampón natural, uniéndose con taninos ásperos y creando la sensación suave y aterciopelada característica de los tés premium. Un mayor contenido de teogalina indica un procesamiento superior del té y contribuye a la codiciada sensación de 'hui gan' (dulzura que regresa).",
                  "de": "Theogallin wirkt als natürlicher Puffer, bindet sich mit harten Tanninen und erzeugt das glatte, samtige Mundgefühl charakteristisch für Premium-Tees. Höherer Theogallin-Gehalt deutet auf überlegene Teeverarbeitung hin und trägt zur begehrten 'Hui Gan' (wiederkehrende Süße) Sensation bei.",
                  "nl": "Theogalline werkt als een natuurlijke buffer, die zich bindt met harde tannines en het gladde, fluwelen mondgevoel creëert dat kenmerkend is voor premium theeën. Hoger theogalline gehalte duidt op superieure thee verwerking en draagt bij aan de begeerde 'hui gan' (terugkerende zoetheid) sensatie."
        }
      },
      {
        question: {
                  "en": "Which ancient tea processing technique involves burying tea leaves in clay vessels for 12-18 months before final oxidation?",
                  "es": "¿Qué técnica antigua de procesamiento del té implica enterrar hojas de té en vasijas de arcilla durante 12-18 meses antes de la oxidación final?",
                  "de": "Welche alte Teeverarbeitungstechnik beinhaltet das Vergraben von Teeblättern in Tongefäßen für 12-18 Monate vor der endgültigen Oxidation?",
                  "nl": "Welke oude thee verwerkingstechniek houdt in dat thee bladeren 12-18 maanden in klei vaten worden begraven voor de uiteindelijke oxidatie?"
        },
        options: [
        {
                  "en": "Mao Cha Aging",
                  "es": "Envejecimiento Mao Cha",
                  "de": "Mao Cha Alterung",
                  "nl": "Mao Cha Veroudering"
        },
        {
                  "en": "Wo Dui (Wet Piling)",
                  "es": "Wo Dui (Apilamiento Húmedo)",
                  "de": "Wo Dui (Feuchte Stapelfermentation)",
                  "nl": "Wo Dui (Natte Stapeling)"
        },
        {
                  "en": "Di Cang (Earth Storage)",
                  "es": "Di Cang (Almacenamiento Terrestre)",
                  "de": "Di Cang (Erd-Lagerung)",
                  "nl": "Di Cang (Aarde Opslag)"
        },
        {
                  "en": "An Hua Fu Zhuan Process",
                  "es": "Proceso An Hua Fu Zhuan",
                  "de": "An Hua Fu Zhuan Prozess",
                  "nl": "An Hua Fu Zhuan Proces"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Di Cang (Earth Storage) is an ancient technique where tea leaves are sealed in clay vessels and buried underground for 12-18 months. The constant temperature and pressure create unique microbial transformations, resulting in exceptionally smooth, earthy flavors impossible to achieve through conventional aging.",
                  "es": "Di Cang (Almacenamiento Terrestre) es una técnica ancestral donde las hojas de té se sellan en vasijas de arcilla y se entierran bajo tierra durante 12-18 meses. La temperatura y presión constantes crean transformaciones microbianas únicas, resultando en sabores suaves y terrosos excepcionales imposibles de lograr a través del envejecimiento convencional.",
                  "de": "Di Cang (Erd-Lagerung) ist eine alte Technik, bei der Teeblätter in Tongefäßen versiegelt und 12-18 Monate unterirdisch vergraben werden. Die konstante Temperatur und Druck schaffen einzigartige mikrobielle Transformationen, die zu außergewöhnlich glatten, erdigen Aromen führen, die durch konventionelle Reifung unmöglich zu erreichen sind.",
                  "nl": "Di Cang (Aarde Opslag) is een oude techniek waarbij thee bladeren worden verzegeld in klei vaten en 12-18 maanden ondergronds begraven. De constante temperatuur en druk creëren unieke microbiële transformaties, resulterend in uitzonderlijk gladde, aardse smaken die onmogelijk zijn om te bereiken door conventionele veroudering."
        }
      },
      {
        question: {
                  "en": "What is the significance of 'terroir expression' in single-estate Ceylon teas from elevations above 2,000m?",
                  "es": "¿Cuál es la significancia de la 'expresión del terroir' en tés de Ceilán de una sola finca de elevaciones superiores a 2,000m?",
                  "de": "Was ist die Bedeutung des 'Terroir-Ausdrucks' in Einzel-Estate Ceylon-Tees aus Höhenlagen über 2.000m?",
                  "nl": "Wat is de betekenis van 'terroir expressie' in single-estate Ceylon theeën van hoogtes boven de 2.000m?"
        },
        options: [
        {
                  "en": "Faster oxidation due to thin atmosphere",
                  "es": "Oxidación más rápida debido a la atmósfera delgada",
                  "de": "Schnellere Oxidation aufgrund dünner Atmosphäre",
                  "nl": "Snellere oxidatie door dunne atmosfeer"
        },
        {
                  "en": "Unique mineral profile reflecting specific geological formations",
                  "es": "Perfil mineral único que refleja formaciones geológicas específicas",
                  "de": "Einzigartiges Mineralprofil, das spezifische geologische Formationen widerspiegelt",
                  "nl": "Uniek mineraal profiel dat specifieke geologische formaties weergeeft"
        },
        {
                  "en": "Higher caffeine content due to altitude stress",
                  "es": "Mayor contenido de cafeína debido al estrés de altitud",
                  "de": "Höherer Koffeingehalt aufgrund von Höhenstress",
                  "nl": "Hoger cafeïnegehalte door hoogte stress"
        },
        {
                  "en": "Stronger floral notes from mountain flora",
                  "es": "Notas florales más fuertes de la flora montañosa",
                  "de": "Stärkere Blütennoten von der Bergflora",
                  "nl": "Sterkere bloementoets van berg flora"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "High-altitude Ceylon estates above 2,000m express distinct terroir through their unique mineral absorption from ancient Precambrian rock formations. The tea bushes develop specific flavor compounds reflecting the granite, gneiss, and quartz composition of their growing environment, creating unmistakable 'signatures' that expert tasters can identify blindfolded.",
                  "es": "Las fincas de Ceilán de gran altitud por encima de 2,000m expresan terroir distintivo a través de su absorción mineral única de formaciones rocosas precámbricas ancestrales. Los arbustos de té desarrollan compuestos de sabor específicos que reflejan la composición de granito, gneis y cuarzo de su entorno de crecimiento, creando 'firmas' inconfundibles que los catadores expertos pueden identificar con los ojos vendados.",
                  "de": "Hochgelegene Ceylon-Estates über 2.000m drücken distinctives Terroir durch ihre einzigartige Mineralabsorption aus uralten präkambrischen Gesteinsformationen aus. Die Teesträucher entwickeln spezifische Geschmacksverbindungen, die die Granit-, Gneis- und Quarzzusammensetzung ihrer Wachstumsumgebung widerspiegeln und unverwechselbare 'Signaturen' schaffen, die Expertenverkoster mit verbundenen Augen identifizieren können.",
                  "nl": "Hoog gelegen Ceylon estates boven 2.000m drukken onderscheidende terroir uit door hun unieke mineraal absorptie van oude Precambrische rotsformaties. De thee struiken ontwikkelen specifieke smaakverbindingen die de graniet, gneis en kwarts compositie van hun groei omgeving weerspiegelen, waardoor onmiskenbare 'handtekeningen' ontstaan die expert proevers geblindoekt kunnen identificeren."
        }
      },
      {
        question: {
                  "en": "In molecular tea gastronomy, which technique uses liquid nitrogen to create tea 'caviar' pearls that burst with flavor?",
                  "es": "En gastronomía molecular del té, ¿qué técnica usa nitrógeno líquido para crear perlas de 'caviar' de té que estallan con sabor?",
                  "de": "In der molekularen Tee-Gastronomie, welche Technik verwendet flüssigen Stickstoff um Tee-'Kaviar'-Perlen zu kreieren, die vor Geschmack platzen?",
                  "nl": "In moleculaire thee gastronomie, welke techniek gebruikt vloeibare stikstof om thee 'kaviaar' parels te creëren die uitbarsten van smaak?"
        },
        options: [
        {
                  "en": "Gelification Precipitation",
                  "es": "Precipitación por Gelificación",
                  "de": "Gelifikations-Präzipitation",
                  "nl": "Gelificatie Precipitatie"
        },
        {
                  "en": "Thermal Shock Crystallization",
                  "es": "Cristalización por Choque Térmico",
                  "de": "Thermische Schock-Kristallisation",
                  "nl": "Thermische Schok Kristallisatie"
        },
        {
                  "en": "Cryogenic Encapsulation",
                  "es": "Encapsulación Criogénica",
                  "de": "Kryogene Verkapselung",
                  "nl": "Cryogene Inkapseling"
        },
        {
                  "en": "Reverse Spherification",
                  "es": "Esferificación Inversa",
                  "de": "Umgekehrte Sphärisierung",
                  "nl": "Omgekeerde Sferisatie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cryogenic encapsulation uses liquid nitrogen at -196°C to instantly freeze concentrated tea essence into perfect spheres with liquid centers. When the frozen shell melts on the tongue, it releases an intense burst of pure tea flavor, creating a unique textural and taste experience impossible through traditional methods.",
                  "es": "La encapsulación criogénica usa nitrógeno líquido a -196°C para congelar instantáneamente la esencia concentrada de té en esferas perfectas con centros líquidos. Cuando la cáscara congelada se derrite en la lengua, libera una explosión intensa de sabor puro de té, creando una experiencia textural y de sabor única imposible a través de métodos tradicionales.",
                  "de": "Kryogene Verkapselung verwendet flüssigen Stickstoff bei -196°C um konzentrierte Tee-Essenz sofort in perfekte Sphären mit flüssigen Zentren zu gefrieren. Wenn die gefrorene Schale auf der Zunge schmilzt, setzt sie einen intensiven Schub reinen Tee-Geschmacks frei und schafft ein einzigartiges Textur- und Geschmackserlebnis, das durch traditionelle Methoden unmöglich ist.",
                  "nl": "Cryogene inkapseling gebruikt vloeibare stikstof bij -196°C om geconcentreerde thee essentie onmiddellijk te bevriezen in perfecte sferen met vloeibare centra. Wanneer de bevroren schil smelt op de tong, geeft het een intense uitbarsting van pure thee smaak vrij, waardoor een unieke textuur en smaak ervaring ontstaat die onmogelijk is door traditionele methoden."
        }
      },
      {
        question: {
                  "en": "Which traditional Tibetan tea contains yak butter and requires a specific churning technique passed down for over 1,000 years?",
                  "es": "¿Qué té tradicional tibetano contiene mantequilla de yak y requiere una técnica específica de batido transmitida durante más de 1,000 años?",
                  "de": "Welcher traditionelle tibetische Tee enthält Yakbutter und erfordert eine spezifische Buttermachttechnik, die seit über 1.000 Jahren weitergegeben wird?",
                  "nl": "Welke traditionele Tibetaanse thee bevat yak boter en vereist een specifieke karntechniek die meer dan 1.000 jaar wordt doorgegeven?"
        },
        options: [
        {
                  "en": "Tsampa Tea Blend",
                  "es": "Mezcla de Té Tsampa",
                  "de": "Tsampa Tee-Mischung",
                  "nl": "Tsampa Thee Mengsel"
        },
        {
                  "en": "Himalayan Salt Tea",
                  "es": "Té de Sal del Himalaya",
                  "de": "Himalaya-Salz-Tee",
                  "nl": "Himalaya Zout Thee"
        },
        {
                  "en": "Sherpa Mountain Tea",
                  "es": "Té de Montaña Sherpa",
                  "de": "Sherpa Berg-Tee",
                  "nl": "Sherpa Berg Thee"
        },
        {
                  "en": "Po Cha (Butter Tea)",
                  "es": "Po Cha (Té de Mantequilla)",
                  "de": "Po Cha (Butter-Tee)",
                  "nl": "Po Cha (Boter Thee)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Po Cha (Butter Tea) is the traditional Tibetan tea made with dark tea, yak butter, and salt, churned in a wooden cylinder called 'chandong'. The churning technique, passed down through generations for over 1,000 years, creates the proper emulsion and is essential for surviving high-altitude conditions in Tibet.",
                  "es": "Po Cha (Té de Mantequilla) es el té tradicional tibetano hecho con té oscuro, mantequilla de yak y sal, batido en un cilindro de madera llamado 'chandong'. La técnica de batido, transmitida a través de generaciones durante más de 1,000 años, crea la emulsión adecuada y es esencial para sobrevivir en condiciones de gran altitud en el Tíbet.",
                  "de": "Po Cha (Butter-Tee) ist der traditionelle tibetische Tee aus dunklem Tee, Yakbutter und Salz, gequirlt in einem Holzzylinder namens 'Chandong'. Die Quirltechnik, die seit über 1.000 Jahren durch Generationen weitergegeben wird, schafft die richtige Emulsion und ist essentiell um in den Höhenlagen Tibets zu überleben.",
                  "nl": "Po Cha (Boter Thee) is de traditionele Tibetaanse thee gemaakt met donkere thee, yak boter en zout, gekarnd in een houten cilinder genaamd 'chandong'. De karntechniek, doorgegeven door generaties gedurende meer dan 1.000 jaar, creëert de juiste emulsie en is essentieel voor het overleven van hoge hoogte condities in Tibet."
        }
      },
      {
        question: {
                  "en": "What is the purpose of 'dry storage' vs 'wet storage' in aging premium Pu-erh teas, and which produces the legendary 'camphor' notes?",
                  "es": "¿Cuál es el propósito del 'almacenamiento seco' vs 'almacenamiento húmedo' en el envejecimiento de tés Pu-erh premium, y cuál produce las legendarias notas de 'alcanfor'?",
                  "de": "Was ist der Zweck von 'Trockenlagerung' vs 'Feuchtlagerung' bei der Reifung von Premium Pu-erh-Tees, und welche produziert die legendären 'Kampfer'-Noten?",
                  "nl": "Wat is het doel van 'droge opslag' vs 'natte opslag' bij het rijpen van premium Pu-erh theeën, en welke produceert de legendarische 'kamfer' toetsen?"
        },
        options: [
        {
                  "en": "Dry storage creates camphor notes through slow oxidation",
                  "es": "El almacenamiento seco crea notas de alcanfor a través de oxidación lenta",
                  "de": "Trockenlagerung erzeugt Kampfernoten durch langsame Oxidation",
                  "nl": "Droge opslag creëert kamfer toetsen door langzame oxidatie"
        },
        {
                  "en": "Wet storage accelerates aging and produces camphor complexity",
                  "es": "El almacenamiento húmedo acelera el envejecimiento y produce complejidad de alcanfor",
                  "de": "Feuchtlagerung beschleunigt die Reifung und produziert Kampferkomplexität",
                  "nl": "Natte opslag versnelt rijping en produceert kamfer complexiteit"
        },
        {
                  "en": "Both methods equally develop camphor notes",
                  "es": "Ambos métodos desarrollan igualmente notas de alcanfor",
                  "de": "Beide Methoden entwickeln gleichermaßen Kampfernoten",
                  "nl": "Beide methoden ontwikkelen kamfer toetsen gelijkmatig"
        },
        {
                  "en": "Neither method produces camphor; it comes from tree genetics",
                  "es": "Ningún método produce alcanfor; viene de la genética del árbol",
                  "de": "Keine Methode produziert Kampfer; er kommt aus der Baumgenetik",
                  "nl": "Geen van beide methoden produceert kamfer; het komt van boom genetica"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Dry storage (traditional Hong Kong/Taiwan method) allows for slow, natural aging in controlled humidity (60-70%) that develops the coveted camphor notes through gradual enzymatic breakdown of specific terpenes in aged tea trees. Wet storage accelerates aging but typically creates earthy, musty flavors rather than the refined camphor complexity.",
                  "es": "El almacenamiento seco (método tradicional de Hong Kong/Taiwán) permite un envejecimiento lento y natural en humedad controlada (60-70%) que desarrolla las codiciadas notas de alcanfor a través de la descomposición enzimática gradual de terpenos específicos en árboles de té envejecidos. El almacenamiento húmedo acelera el envejecimiento pero típicamente crea sabores terrosos y mohosos en lugar de la complejidad refinada del alcanfor.",
                  "de": "Trockenlagerung (traditionelle Hong Kong/Taiwan-Methode) ermöglicht langsame, natürliche Reifung bei kontrollierter Feuchtigkeit (60-70%), die die begehrten Kampfernoten durch allmählichen enzymatischen Abbau spezifischer Terpene in gereiften Teebäumen entwickelt. Feuchtlagerung beschleunigt die Reifung, erzeugt aber typischerweise erdige, muffige Aromen anstatt der raffinierten Kampferkomplexität.",
                  "nl": "Droge opslag (traditionele Hong Kong/Taiwan methode) maakt langzame, natuurlijke rijping mogelijk bij gecontroleerde vochtigheid (60-70%) die de begeerde kamfer toetsen ontwikkelt door geleidelijke enzymatische afbraak van specifieke terpenen in gerijpte thee bomen. Natte opslag versnelt rijping maar creëert typisch aardse, muffe smaken eerder dan de verfijnde kamfer complexiteit."
        }
      },
      {
        question: {
                  "en": "Which cutting-edge technology allows real-time monitoring of tea leaf cellular respiration during processing?",
                  "es": "¿Qué tecnología de vanguardia permite el monitoreo en tiempo real de la respiración celular de las hojas de té durante el procesamiento?",
                  "de": "Welche Spitzentechnologie ermöglicht die Echtzeitüberwachung der zellulären Atmung von Teeblättern während der Verarbeitung?",
                  "nl": "Welke geavanceerde technologie maakt real-time monitoring mogelijk van thee blad cellulaire ademhaling tijdens verwerking?"
        },
        options: [
        {
                  "en": "Fluorescence Spectroscopy",
                  "es": "Espectroscopia de Fluorescencia",
                  "de": "Fluoreszenz-Spektroskopie",
                  "nl": "Fluorescentie Spectroscopie"
        },
        {
                  "en": "Photoacoustic Microscopy",
                  "es": "Microscopía Fotoacústica",
                  "de": "Photoakustische Mikroskopie",
                  "nl": "Fotoakoestische Microscopie"
        },
        {
                  "en": "Quantum Dot Biosensors",
                  "es": "Biosensores de Puntos Cuánticos",
                  "de": "Quantenpunkt-Biosensoren",
                  "nl": "Quantum Dot Biosensoren"
        },
        {
                  "en": "Near-Infrared Hyperspectral Imaging",
                  "es": "Imágenes Hiperespectrales de Infrarrojo Cercano",
                  "de": "Nahinfrarot-Hyperspektral-Bildgebung",
                  "nl": "Nabij-Infrarood Hyperspectrale Beeldvorming"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Quantum dot biosensors can detect minute changes in cellular oxygen consumption and CO2 production at the molecular level, providing unprecedented insight into tea leaf metabolism during withering, oxidation, and firing. This technology enables processors to optimize timing for peak flavor compound development.",
                  "es": "Los biosensores de puntos cuánticos pueden detectar cambios minúsculos en el consumo celular de oxígeno y la producción de CO2 a nivel molecular, proporcionando una perspectiva sin precedentes del metabolismo de las hojas de té durante el marchitado, oxidación y tostado. Esta tecnología permite a los procesadores optimizar el tiempo para el desarrollo pico de compuestos de sabor.",
                  "de": "Quantenpunkt-Biosensoren können winzige Veränderungen im zellulären Sauerstoffverbrauch und der CO2-Produktion auf molekularer Ebene erkennen und bieten beispiellose Einblicke in den Stoffwechsel von Teeblättern während des Welkens, der Oxidation und des Röstens. Diese Technologie ermöglicht es Verarbeitern, das Timing für die optimale Entwicklung von Geschmacksverbindungen zu optimieren.",
                  "nl": "Quantum dot biosensoren kunnen minuscule veranderingen in cellulaire zuurstofconsumptie en CO2-productie detecteren op moleculair niveau, wat ongekende inzicht biedt in thee blad metabolisme tijdens verwelking, oxidatie en verhitting. Deze technologie stelt verwerkers in staat om timing te optimaliseren voor piek smaakverbinding ontwikkeling."
        }
      },
      {
        question: {
                  "en": "Which rare white tea requires exactly 72 hours of natural withering under specific lunar phases?",
                  "es": "¿Qué té blanco raro requiere exactamente 72 horas de marchitamiento natural bajo fases lunares específicas?",
                  "de": "Welcher seltene weiße Tee erfordert genau 72 Stunden natürliches Welken unter spezifischen Mondphasen?",
                  "nl": "Welke zeldzame witte thee vereist precies 72 uur natuurlijke verwelking onder specifieke maanfasen?"
        },
        options: [
        {
                  "en": "Snow Bud Traditional",
                  "es": "Brote de Nieve Tradicional",
                  "de": "Schneeknospe Traditionell",
                  "nl": "Sneeuw Knop Traditioneel"
        },
        {
                  "en": "White Peony Imperial",
                  "es": "Peonía Blanca Imperial",
                  "de": "Weiße Pfingstrose Imperial",
                  "nl": "Witte Pioenroos Keizerlijk"
        },
        {
                  "en": "Yue Guang Bai (Moonlight White)",
                  "es": "Yue Guang Bai (Blanco Luz de Luna)",
                  "de": "Yue Guang Bai (Mondschein-Weiß)",
                  "nl": "Yue Guang Bai (Maanlicht Wit)"
        },
        {
                  "en": "Silver Needle Supreme",
                  "es": "Aguja de Plata Suprema",
                  "de": "Silbernadel Supreme",
                  "nl": "Zilveren Naald Supreme"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Yue Guang Bai undergoes a precise 72-hour natural withering process timed to specific lunar phases. Master producers believe the gravitational influence affects moisture migration within leaves, creating the tea's characteristic silvery-white appearance and unique flavor profile.",
                  "es": "Yue Guang Bai experimenta un proceso preciso de marchitamiento natural de 72 horas sincronizado con fases lunares específicas. Los maestros productores creen que la influencia gravitacional afecta la migración de humedad dentro de las hojas, creando la apariencia blanca plateada característica del té y perfil de sabor único.",
                  "de": "Yue Guang Bai durchläuft einen präzisen 72-stündigen natürlichen Welkprozess, zeitlich abgestimmt auf spezifische Mondphasen. Meisterproduzenten glauben, dass der Gravitationseinfluss die Feuchtigkeitsmigration in den Blättern beeinflusst und das charakteristische silberweiße Aussehen und einzigartige Geschmacksprofil des Tees schafft.",
                  "nl": "Yue Guang Bai ondergaat een precies 72-uur natuurlijk verwelkingsproces afgestemd op specifieke maanfasen. Meester producenten geloven dat de gravitationele invloed vochtmigratie binnen bladeren beïnvloedt, waardoor het karakteristieke zilver-witte uiterlijk en unieke smaakprofiel van de thee ontstaat."
        }
      },
      {
        question: {
                  "en": "What is the chemical basis for 'cha qi' (tea energy) experienced by advanced practitioners?",
                  "es": "¿Cuál es la base química para 'cha qi' (energía del té) experimentada por practicantes avanzados?",
                  "de": "Was ist die chemische Basis für 'Cha Qi' (Tee-Energie), die von fortgeschrittenen Praktizierenden erfahren wird?",
                  "nl": "Wat is de chemische basis voor 'cha qi' (thee energie) ervaren door geavanceerde beoefenaars?"
        },
        options: [
        {
                  "en": "Sugar content from aging process",
                  "es": "Contenido de azúcar del proceso de envejecimiento",
                  "de": "Zuckergehalt aus dem Alterungsprozess",
                  "nl": "Suiker gehalte van rijpingsproces"
        },
        {
                  "en": "Complex interaction of L-theanine, caffeine, and specific polyphenols affecting neurotransmitters",
                  "es": "Interacción compleja de L-teanina, cafeína y polifenoles específicos que afectan neurotransmisores",
                  "de": "Komplexe Interaktion von L-Theanin, Koffein und spezifischen Polyphenolen, die Neurotransmitter beeinflussen",
                  "nl": "Complexe interactie van L-theanine, cafeïne en specifieke polyfenolen die neurotransmitters beïnvloeden"
        },
        {
                  "en": "Only caffeine content matters",
                  "es": "Solo el contenido de cafeína importa",
                  "de": "Nur Koffeingehalt ist wichtig",
                  "nl": "Alleen cafeïne gehalte is belangrijk"
        },
        {
                  "en": "Pure placebo effect with no chemical basis",
                  "es": "Efecto placebo puro sin base química",
                  "de": "Reiner Placebo-Effekt ohne chemische Grundlage",
                  "nl": "Puur placebo effect zonder chemische basis"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cha qi results from synergistic effects of L-theanine promoting alpha brain waves, caffeine stimulation, and specific catechins like EGCG affecting dopamine and serotonin pathways. Ancient tea trees accumulate unique alkaloid profiles that enhance this psychoactive experience.",
                  "es": "Cha qi resulta de efectos sinérgicos de L-teanina promoviendo ondas cerebrales alfa, estimulación de cafeína y catequinas específicas como EGCG afectando vías de dopamina y serotonina. Los árboles de té ancestrales acumulan perfiles alcaloides únicos que mejoran esta experiencia psicoactiva.",
                  "de": "Cha Qi resultiert aus synergistischen Effekten von L-Theanin, das Alpha-Gehirnwellen fördert, Koffein-Stimulation und spezifischen Catechinen wie EGCG, die Dopamin- und Serotonin-Wege beeinflussen. Alte Teebäume akkumulieren einzigartige Alkaloid-Profile, die diese psychoaktive Erfahrung verstärken.",
                  "nl": "Cha qi resulteert uit synergistische effecten van L-theanine dat alfa hersengolven bevordert, cafeïne stimulatie en specifieke catechinen zoals EGCG die dopamine en serotonine routes beïnvloeden. Oude thee bomen accumuleren unieke alkaloïde profielen die deze psychoactieve ervaring versterken."
        }
      },
      {
        question: {
                  "en": "Which advanced rolling technique creates the distinctive 'dragon pearl' shape in premium jasmine teas?",
                  "es": "¿Qué técnica avanzada de enrollado crea la distintiva forma de 'perla de dragón' en tés de jazmín premium?",
                  "de": "Welche fortgeschrittene Rolltechnik erzeugt die charakteristische 'Drachenpearl'-Form in Premium-Jasmin-Tees?",
                  "nl": "Welke geavanceerde roltechniek creëert de onderscheidende 'draak parel' vorm in premium jasmijn theeën?"
        },
        options: [
        {
                  "en": "Vacuum forming process",
                  "es": "Proceso de formado al vacío",
                  "de": "Vakuumformprozess",
                  "nl": "Vacuüm vormproces"
        },
        {
                  "en": "Steam compression molding",
                  "es": "Moldeo por compresión de vapor",
                  "de": "Dampfkompressions-Formung",
                  "nl": "Stoom compressie vorming"
        },
        {
                  "en": "Hand-rolling with precise pressure gradients from center outward",
                  "es": "Enrollado manual con gradientes de presión precisos desde el centro hacia afuera",
                  "de": "Handrollen mit präzisen Druckgradienten von der Mitte nach außen",
                  "nl": "Handmatig rollen met precieze druk gradiënten van centrum naar buiten"
        },
        {
                  "en": "Machine tumbling in bamboo drums",
                  "es": "Tumbado mecánico en tambores de bambú",
                  "de": "Maschinelles Taumeln in Bambuszylindern",
                  "nl": "Machine tumbeling in bamboe trommels"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Master craftsmen create dragon pearls through meticulous hand-rolling, applying graduated pressure from the center outward to create tight, uniform spheres. Each pearl contains precisely 7-9 leaves arranged in spiral formation, requiring years of training to perfect the technique.",
                  "es": "Maestros artesanos crean perlas de dragón mediante enrollado manual meticuloso, aplicando presión graduada desde el centro hacia afuera para crear esferas uniformes apretadas. Cada perla contiene precisamente 7-9 hojas dispuestas en formación espiral, requiriendo años de entrenamiento para perfeccionar la técnica.",
                  "de": "Meisterhandwerker erstellen Drachenpearls durch akribisches Handrollen und wenden abgestuften Druck von der Mitte nach außen an, um feste, gleichmäßige Kugeln zu schaffen. Jede Perle enthält genau 7-9 Blätter in Spiralformation, was Jahre des Trainings erfordert, um die Technik zu perfektionieren.",
                  "nl": "Meester ambachtslieden creëren draak parels door nauwgezet handmatig rollen, geleidelijke druk toepassen van centrum naar buiten om strakke, uniforme sferen te creëren. Elke parel bevat precies 7-9 bladeren gerangschikt in spiraal formatie, wat jaren training vereist om de techniek te perfectioneren."
        }
      },
      {
        question: {
                  "en": "What causes the rare 'cream down' phenomenon in high-quality black teas?",
                  "es": "¿Qué causa el raro fenómeno de 'cream down' en tés negros de alta calidad?",
                  "de": "Was verursacht das seltene 'Cream Down'-Phänomen in hochwertigen Schwarztees?",
                  "nl": "Wat veroorzaakt het zeldzame 'cream down' fenomeen in hoge kwaliteit zwarte theeën?"
        },
        options: [
        {
                  "en": "Bacterial growth in stored tea",
                  "es": "Crecimiento bacteriano en té almacenado",
                  "de": "Bakterienwachstum in gelagertem Tee",
                  "nl": "Bacteriële groei in opgeslagen thee"
        },
        {
                  "en": "Contamination from processing equipment",
                  "es": "Contaminación de equipos de procesamiento",
                  "de": "Kontamination von Verarbeitungsausrüstung",
                  "nl": "Contaminatie van verwerkings apparatuur"
        },
        {
                  "en": "Precipitation of theaflavin-caffeine complexes at lower temperatures",
                  "es": "Precipitación de complejos teaflavina-cafeína a temperaturas más bajas",
                  "de": "Ausfällung von Theaflavin-Koffein-Komplexen bei niedrigeren Temperaturen",
                  "nl": "Precipitatie van theaflavine-cafeïne complexen bij lagere temperaturen"
        },
        {
                  "en": "Oxidation of tea oils on surface",
                  "es": "Oxidación de aceites de té en superficie",
                  "de": "Oxidation von Teeölen an der Oberfläche",
                  "nl": "Oxidatie van thee oliën op oppervlak"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cream down occurs when premium black teas cool, causing theaflavins and caffeine to form colloidal complexes that appear as cloudiness. This is a quality indicator - only teas with high theaflavin content (from proper oxidation) exhibit this phenomenon.",
                  "es": "Cream down ocurre cuando tés negros premium se enfrían, causando que teaflavinas y cafeína formen complejos coloidales que aparecen como turbiedad. Esto es un indicador de calidad - solo tés con alto contenido de teaflavina (de oxidación adecuada) exhiben este fenómeno.",
                  "de": "Cream Down tritt auf, wenn Premium-Schwarztees abkühlen, wodurch Theaflavine und Koffein kolloidale Komplexe bilden, die als Trübung erscheinen. Dies ist ein Qualitätsindikator - nur Tees mit hohem Theaflavin-Gehalt (aus ordnungsgemäßer Oxidation) zeigen dieses Phänomen.",
                  "nl": "Cream down treedt op wanneer premium zwarte theeën afkoelen, waardoor theaflavines en cafeïne colloïdale complexen vormen die verschijnen als troebelheid. Dit is een kwaliteit indicator - alleen theeën met hoog theaflavine gehalte (van juiste oxidatie) vertonen dit fenomeen."
        }
      },
      {
        question: {
                  "en": "Which fermentation bacterium is responsible for creating the 'golden flowers' in Fu Zhuan brick tea?",
                  "es": "¿Qué bacteria de fermentación es responsable de crear las 'flores doradas' en el té en ladrillo Fu Zhuan?",
                  "de": "Welches Fermentationsbakterium ist verantwortlich für die Schaffung der 'goldenen Blumen' in Fu Zhuan Ziegeltee?",
                  "nl": "Welke fermentatie bacterie is verantwoordelijk voor het creëren van de 'gouden bloemen' in Fu Zhuan baksteen thee?"
        },
        options: [
        {
                  "en": "Aspergillus niger",
                  "es": "Aspergillus niger",
                  "de": "Aspergillus niger",
                  "nl": "Aspergillus niger"
        },
        {
                  "en": "Lactobacillus plantarum",
                  "es": "Lactobacillus plantarum",
                  "de": "Lactobacillus plantarum",
                  "nl": "Lactobacillus plantarum"
        },
        {
                  "en": "Saccharomyces cerevisiae",
                  "es": "Saccharomyces cerevisiae",
                  "de": "Saccharomyces cerevisiae",
                  "nl": "Saccharomyces cerevisiae"
        },
        {
                  "en": "Eurotium cristatum (Beneficial fungus, not bacteria)",
                  "es": "Eurotium cristatum (Hongo beneficioso, no bacteria)",
                  "de": "Eurotium cristatum (Nützlicher Pilz, nicht Bakterium)",
                  "nl": "Eurotium cristatum (Voordelige schimmel, geen bacterie)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Eurotium cristatum (technically a fungus, not bacteria) creates the prized 'golden flowers' in Fu Zhuan tea. This beneficial organism produces unique enzymes that break down complex polyphenols into digestible compounds while creating distinctive sweet, fungal aromas valued in aged dark teas.",
                  "es": "Eurotium cristatum (técnicamente un hongo, no bacteria) crea las preciadas 'flores doradas' en té Fu Zhuan. Este organismo beneficioso produce enzimas únicas que descomponen polifenoles complejos en compuestos digeribles mientras crean aromas fúngicos dulces distintivos valorados en tés oscuros envejecidos.",
                  "de": "Eurotium cristatum (technisch ein Pilz, kein Bakterium) erzeugt die geschätzten 'goldenen Blumen' in Fu Zhuan Tee. Dieser nützliche Organismus produziert einzigartige Enzyme, die komplexe Polyphenole in verdauliche Verbindungen abbauen, während sie charakteristische süße, pilzartige Aromen schaffen, die in gereiften dunklen Tees geschätzt werden.",
                  "nl": "Eurotium cristatum (technisch een schimmel, geen bacterie) creëert de gewaardeerde 'gouden bloemen' in Fu Zhuan thee. Dit voordelige organisme produceert unieke enzymen die complexe polyfenolen afbreken in verteerbare verbindingen terwijl ze onderscheidende zoete, schimmel aroma's creëren gewaardeerd in gerijpte donkere theeën."
        }
      },
      {
        question: {
                  "en": "What is the significance of 'first flush' vs 'second flush' Darjeeling in chemical composition?",
                  "es": "¿Cuál es la significancia de 'primera cosecha' vs 'segunda cosecha' Darjeeling en composición química?",
                  "de": "Was ist die Bedeutung von 'First Flush' vs 'Second Flush' Darjeeling in der chemischen Zusammensetzung?",
                  "nl": "Wat is de betekenis van 'first flush' vs 'second flush' Darjeeling in chemische samenstelling?"
        },
        options: [
        {
                  "en": "First flush has higher catechins, second flush develops muscatel notes from stress-induced terpenes",
                  "es": "Primera cosecha tiene catequinas más altas, segunda cosecha desarrolla notas moscatel de terpenos inducidos por estrés",
                  "de": "First Flush hat höhere Catechine, Second Flush entwickelt Muskateller-Noten aus stressinduzierten Terpenen",
                  "nl": "First flush heeft hogere catechinen, second flush ontwikkelt muscatel toetsen van stress-geïnduceerde terpenen"
        },
        {
                  "en": "Second flush has more caffeine only",
                  "es": "Segunda cosecha tiene solo más cafeína",
                  "de": "Second Flush hat nur mehr Koffein",
                  "nl": "Second flush heeft alleen meer cafeïne"
        },
        {
                  "en": "First flush is always lower quality",
                  "es": "Primera cosecha es siempre de menor calidad",
                  "de": "First Flush ist immer von geringerer Qualität",
                  "nl": "First flush is altijd lagere kwaliteit"
        },
        {
                  "en": "Both harvests are chemically identical",
                  "es": "Ambas cosechas son químicamente idénticas",
                  "de": "Beide Ernten sind chemisch identisch",
                  "nl": "Beide oogsten zijn chemisch identiek"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "First flush (March-April) delivers bright, astringent character from high catechin levels after winter dormancy. Second flush (May-June) develops the signature muscatel notes as plants produce defensive terpenes in response to insect stress and seasonal changes, creating more complex flavor profiles.",
                  "es": "Primera cosecha (marzo-abril) entrega carácter brillante y astringente de altos niveles de catequinas después de dormancia invernal. Segunda cosecha (mayo-junio) desarrolla las notas moscatel características mientras las plantas producen terpenos defensivos en respuesta al estrés de insectos y cambios estacionales, creando perfiles de sabor más complejos.",
                  "de": "First Flush (März-April) liefert hellen, adstringierenden Charakter durch hohe Catechin-Werte nach Winterruhe. Second Flush (Mai-Juni) entwickelt die charakteristischen Muskateller-Noten, da Pflanzen defensive Terpene als Reaktion auf Insektenstress und saisonale Veränderungen produzieren und komplexere Geschmacksprofile schaffen.",
                  "nl": "First flush (maart-april) levert helder, wrang karakter van hoge catechine niveaus na winter dormantie. Second flush (mei-juni) ontwikkelt de kenmerkende muscatel toetsen terwijl planten defensieve terpenen produceren als reactie op insecten stress en seizoensveranderingen, complexere smaakprofielen creërend."
        }
      },
      {
        question: {
                  "en": "Which ultra-rare Korean tea is produced from wild tea trees over 500 years old?",
                  "es": "¿Qué té coreano ultra-raro se produce de árboles de té silvestres de más de 500 años?",
                  "de": "Welcher ultra-seltene koreanische Tee wird aus wilden Teebäumen über 500 Jahre alt produziert?",
                  "nl": "Welke ultra-zeldzame Koreaanse thee wordt geproduceerd van wilde thee bomen ouder dan 500 jaar?"
        },
        options: [
        {
                  "en": "Sejak Premium Green",
                  "es": "Sejak Verde Premium",
                  "de": "Sejak Premium Grün",
                  "nl": "Sejak Premium Groen"
        },
        {
                  "en": "Jukro (Bamboo Dew Tea)",
                  "es": "Jukro (Té de Rocío de Bambú)",
                  "de": "Jukro (Bambustau-Tee)",
                  "nl": "Jukro (Bamboe Dauw Thee)"
        },
        {
                  "en": "Woojeon Ancient Tree",
                  "es": "Woojeon Árbol Ancestral",
                  "de": "Woojeon Alter Baum",
                  "nl": "Woojeon Oude Boom"
        },
        {
                  "en": "Daejak Mountain Gold",
                  "es": "Daejak Oro de Montaña",
                  "de": "Daejak Berggold",
                  "nl": "Daejak Berg Goud"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Woojeon from ancient wild tea trees (over 500 years old) is Korea's rarest tea, harvested before the spring rains. These trees develop unique root systems extracting rare minerals from volcanic soil, creating complex flavor profiles impossible to replicate in cultivated varieties.",
                  "es": "Woojeon de árboles de té silvestres ancestrales (más de 500 años) es el té más raro de Corea, cosechado antes de las lluvias primaverales. Estos árboles desarrollan sistemas radiculares únicos extrayendo minerales raros del suelo volcánico, creando perfiles de sabor complejos imposibles de replicar en variedades cultivadas.",
                  "de": "Woojeon von alten wilden Teebäumen (über 500 Jahre alt) ist Koreas seltenster Tee, geerntet vor den Frühlingsregen. Diese Bäume entwickeln einzigartige Wurzelsysteme, die seltene Mineralien aus vulkanischem Boden extrahieren und komplexe Geschmacksprofile schaffen, die in kultivierten Sorten unmöglich zu replizieren sind.",
                  "nl": "Woojeon van oude wilde thee bomen (ouder dan 500 jaar) is Korea's zeldzaamste thee, geoogst voor de lente regens. Deze bomen ontwikkelen unieke wortel systemen die zeldzame mineralen extraheren uit vulkanische bodem, complexe smaakprofielen creërend die onmogelijk te repliceren zijn in gekweekte variëteiten."
        }
      },
      {
        question: {
                  "en": "What is the precise mechanism behind 'roasting' developing the characteristic nutty flavors in Wuyi rock oolongs?",
                  "es": "¿Cuál es el mecanismo preciso detrás del 'tostado' desarrollando los sabores característicos a nuez en oolongs de roca Wuyi?",
                  "de": "Was ist der präzise Mechanismus hinter dem 'Rösten', das die charakteristischen nussigen Aromen in Wuyi Fels-Oolongs entwickelt?",
                  "nl": "Wat is het precieze mechanisme achter 'roosteren' dat de karakteristieke nootachtige smaken ontwikkelt in Wuyi rots oolongs?"
        },
        options: [
        {
                  "en": "Maillard reactions between amino acids and reducing sugars at 120-150°C",
                  "es": "Reacciones de Maillard entre aminoácidos y azúcares reductores a 120-150°C",
                  "de": "Maillard-Reaktionen zwischen Aminosäuren und reduzierenden Zuckern bei 120-150°C",
                  "nl": "Maillard reacties tussen aminozuren en reducerende suikers bij 120-150°C"
        },
        {
                  "en": "Simple drying removes moisture only",
                  "es": "Secado simple elimina solo humedad",
                  "de": "Einfache Trocknung entfernt nur Feuchtigkeit",
                  "nl": "Simpele droging verwijdert alleen vocht"
        },
        {
                  "en": "Oxidation acceleration from heat",
                  "es": "Aceleración de oxidación por calor",
                  "de": "Oxidationsbeschleunigung durch Hitze",
                  "nl": "Oxidatie versnelling door hitte"
        },
        {
                  "en": "Caramelization of existing compounds",
                  "es": "Caramelización de compuestos existentes",
                  "de": "Karamellisierung vorhandener Verbindungen",
                  "nl": "Karamelisatie van bestaande verbindingen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Traditional charcoal roasting triggers Maillard reactions between L-theanine and reducing sugars at carefully controlled 120-150°C. Multiple roasting cycles over months develop pyrazines and furans creating the signature 'yan yun' (rock rhyme) with nutty, toasted complexity.",
                  "es": "Tostado tradicional con carbón desencadena reacciones de Maillard entre L-teanina y azúcares reductores a 120-150°C cuidadosamente controlados. Múltiples ciclos de tostado durante meses desarrollan pirazinas y furanos creando el 'yan yun' (rima de roca) característico con complejidad tostada a nuez.",
                  "de": "Traditionelles Holzkohle-Rösten löst Maillard-Reaktionen zwischen L-Theanin und reduzierenden Zuckern bei sorgfältig kontrollierten 120-150°C aus. Mehrere Röstzyklen über Monate entwickeln Pyrazine und Furane, die das charakteristische 'Yan Yun' (Felsenreim) mit nussiger, gerösteter Komplexität schaffen.",
                  "nl": "Traditioneel houtskool roosteren triggert Maillard reacties tussen L-theanine en reducerende suikers bij zorgvuldig gecontroleerde 120-150°C. Meerdere rooster cycli over maanden ontwikkelen pyrazines en furanen die de kenmerkende 'yan yun' (rots rijm) creëren met nootachtige, geroosterde complexiteit."
        }
      },
      {
        question: {
                  "en": "Which advanced preservation technique uses argon gas displacement to extend tea shelf life indefinitely?",
                  "es": "¿Qué técnica avanzada de preservación usa desplazamiento de gas argón para extender la vida útil del té indefinidamente?",
                  "de": "Welche fortgeschrittene Konservierungstechnik verwendet Argon-Gasverdrängung, um die Haltbarkeit von Tee unbegrenzt zu verlängern?",
                  "nl": "Welke geavanceerde bewaaringstechniek gebruikt argon gas verplaatsing om thee houdbaarheid onbeperkt te verlengen?"
        },
        options: [
        {
                  "en": "Refrigerated storage only",
                  "es": "Solo almacenamiento refrigerado",
                  "de": "Nur gekühlte Lagerung",
                  "nl": "Alleen gekoelde opslag"
        },
        {
                  "en": "Inert atmosphere packaging with oxygen levels below 0.1%",
                  "es": "Empaque en atmósfera inerte con niveles de oxígeno por debajo de 0.1%",
                  "de": "Inertgasverpackung mit Sauerstoffwerten unter 0,1%",
                  "nl": "Inerte atmosfeer verpakking met zuurstof niveaus onder 0.1%"
        },
        {
                  "en": "Nitrogen flushing at ambient pressure",
                  "es": "Lavado con nitrógeno a presión ambiente",
                  "de": "Stickstoffspülung bei Umgebungsdruck",
                  "nl": "Stikstof spoeling bij omgevingsdruk"
        },
        {
                  "en": "Standard vacuum sealing",
                  "es": "Sellado al vacío estándar",
                  "de": "Standard-Vakuumversiegelung",
                  "nl": "Standaard vacuüm afdichting"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Argon displacement creates an inert atmosphere with oxygen levels below 0.1%, completely halting oxidative degradation. Argon's higher density than air provides superior protection compared to nitrogen, preserving even the most delicate volatile compounds for decades.",
                  "es": "El desplazamiento de argón crea una atmósfera inerte con niveles de oxígeno por debajo de 0.1%, deteniendo completamente la degradación oxidativa. La mayor densidad del argón que el aire proporciona protección superior comparada con nitrógeno, preservando incluso los compuestos volátiles más delicados durante décadas.",
                  "de": "Argon-Verdrängung schafft eine inerte Atmosphäre mit Sauerstoffwerten unter 0,1% und stoppt oxidative Degradation vollständig. Argons höhere Dichte als Luft bietet überlegenen Schutz im Vergleich zu Stickstoff und bewahrt selbst die empfindlichsten flüchtigen Verbindungen jahrzehntelang.",
                  "nl": "Argon verplaatsing creëert een inerte atmosfeer met zuurstof niveaus onder 0.1%, oxidatieve degradatie volledig stoppend. Argon's hogere dichtheid dan lucht biedt superieure bescherming vergeleken met stikstof, zelfs de meest delicate vluchtige verbindingen bewarend voor decennia."
        }
      },
      {
        question: {
                  "en": "What is the scientific explanation for 'qi men xiang' (Keemun aroma) in premium black teas?",
                  "es": "¿Cuál es la explicación científica para 'qi men xiang' (aroma Keemun) en tés negros premium?",
                  "de": "Was ist die wissenschaftliche Erklärung für 'Qi Men Xiang' (Keemun-Aroma) in Premium-Schwarztees?",
                  "nl": "Wat is de wetenschappelijke verklaring voor 'qi men xiang' (Keemun aroma) in premium zwarte theeën?"
        },
        options: [
        {
                  "en": "Smoke from traditional firing",
                  "es": "Humo del tostado tradicional",
                  "de": "Rauch vom traditionellen Brennen",
                  "nl": "Rook van traditionele verhitting"
        },
        {
                  "en": "Added jasmine flowers during processing",
                  "es": "Flores de jazmín añadidas durante procesamiento",
                  "de": "Hinzugefügte Jasminblüten während der Verarbeitung",
                  "nl": "Toegevoegde jasmijn bloemen tijdens verwerking"
        },
        {
                  "en": "Combination of linalool, geraniol, and phenylacetaldehyde from specific processing",
                  "es": "Combinación de linalool, geraniol y fenilacetaldehído de procesamiento específico",
                  "de": "Kombination von Linalool, Geraniol und Phenylacetaldehyd aus spezifischer Verarbeitung",
                  "nl": "Combinatie van linalool, geraniol en phenylacetaldehyde van specifieke verwerking"
        },
        {
                  "en": "Natural bergamot oils in tea leaves",
                  "es": "Aceites naturales de bergamota en hojas de té",
                  "de": "Natürliche Bergamotte-Öle in Teeblättern",
                  "nl": "Natuurlijke bergamot oliën in thee bladeren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Qi Men Xiang results from precise oxidation and firing that preserves specific volatile compounds: linalool (floral), geraniol (rose-like), and phenylacetaldehyde (orchid notes). The unique Keemun cultivar and processing create this signature 'orchid fragrance' impossible to replicate in other black teas.",
                  "es": "Qi Men Xiang resulta de oxidación y tostado precisos que preservan compuestos volátiles específicos: linalool (floral), geraniol (como rosa) y fenilacetaldehído (notas de orquídea). El cultivar único Keemun y procesamiento crean esta 'fragancia de orquídea' característica imposible de replicar en otros tés negros.",
                  "de": "Qi Men Xiang resultiert aus präziser Oxidation und Brennen, die spezifische flüchtige Verbindungen bewahren: Linalool (blumig), Geraniol (rosenartig) und Phenylacetaldehyd (Orchideen-Noten). Der einzigartige Keemun-Kultivar und Verarbeitung schaffen diese charakteristische 'Orchideen-Duft', der in anderen Schwarztees unmöglich zu replizieren ist.",
                  "nl": "Qi Men Xiang resulteert uit precieze oxidatie en verhitting die specifieke vluchtige verbindingen bewaren: linalool (bloemen), geraniol (roos-achtig) en phenylacetaldehyde (orchidee toetsen). De unieke Keemun cultivar en verwerking creëren deze kenmerkende 'orchidee geur' onmogelijk te repliceren in andere zwarte theeën."
        }
      },
      {
        question: {
                  "en": "Which Nobel Prize-winning discovery relates to tea's antioxidant mechanisms?",
                  "es": "¿Qué descubrimiento ganador del Premio Nobel se relaciona con los mecanismos antioxidantes del té?",
                  "de": "Welche Nobelpreis-gekrönte Entdeckung bezieht sich auf Tees Antioxidationsmechanismen?",
                  "nl": "Welke Nobelprijs-winnende ontdekking heeft betrekking op thee's antioxidant mechanismen?"
        },
        options: [
        {
                  "en": "Penicillin antibiotic properties",
                  "es": "Propiedades antibióticas de penicilina",
                  "de": "Penicillin-Antibiotikum-Eigenschaften",
                  "nl": "Penicilline antibiotische eigenschappen"
        },
        {
                  "en": "Electron transport chain mechanism",
                  "es": "Mecanismo de cadena de transporte de electrones",
                  "de": "Elektronentransportketten-Mechanismus",
                  "nl": "Elektron transport keten mechanisme"
        },
        {
                  "en": "Free radical scavenging by polyphenols (related to Szent-Györgyi's vitamin C work)",
                  "es": "Eliminación de radicales libres por polifenoles (relacionado con el trabajo de Szent-Györgyi sobre vitamina C)",
                  "de": "Freie Radikalfänger durch Polyphenole (bezogen auf Szent-Györgyis Vitamin-C-Arbeit)",
                  "nl": "Vrije radicaal vangen door polyfenolen (gerelateerd aan Szent-Györgyi's vitamine C werk)"
        },
        {
                  "en": "DNA structure discovery",
                  "es": "Descubrimiento de estructura del ADN",
                  "de": "DNA-Struktur-Entdeckung",
                  "nl": "DNA structuur ontdekking"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Tea catechins work through free radical scavenging mechanisms elucidated by Albert Szent-Györgyi's Nobel Prize-winning research on biological oxidation. EGCG and other polyphenols donate electrons to neutralize reactive oxygen species, the same principle Szent-Györgyi discovered studying vitamin C.",
                  "es": "Las catequinas del té funcionan a través de mecanismos de eliminación de radicales libres elucidados por la investigación ganadora del Premio Nobel de Albert Szent-Györgyi sobre oxidación biológica. EGCG y otros polifenoles donan electrones para neutralizar especies reactivas de oxígeno, el mismo principio que Szent-Györgyi descubrió estudiando vitamina C.",
                  "de": "Tee-Catechine wirken durch Freie-Radikalfänger-Mechanismen, die durch Albert Szent-Györgyis Nobelpreis-gekrönte Forschung über biologische Oxidation aufgeklärt wurden. EGCG und andere Polyphenole spenden Elektronen zur Neutralisierung reaktiver Sauerstoffspezies, das gleiche Prinzip, das Szent-Györgyi beim Studium von Vitamin C entdeckte.",
                  "nl": "Thee catechinen werken door vrije radicaal vang mechanismen opgehelderd door Albert Szent-Györgyi's Nobelprijs-winnende onderzoek naar biologische oxidatie. EGCG en andere polyfenolen doneren elektronen om reactieve zuurstof species te neutraliseren, hetzelfde principe dat Szent-Györgyi ontdekte bij het bestuderen van vitamine C."
        }
      },
      {
        question: {
                  "en": "What is the optimal clay composition for Yixing teapots used in brewing aged oolongs?",
                  "es": "¿Cuál es la composición óptima de arcilla para teteras Yixing usadas en preparar oolongs envejecidos?",
                  "de": "Was ist die optimale Tonzusammensetzung für Yixing-Teekannen zum Brühen gereifter Oolongs?",
                  "nl": "Wat is de optimale klei samenstelling voor Yixing theepotten gebruikt voor het zetten van gerijpte oolongs?"
        },
        options: [
        {
                  "en": "Zisha (purple clay) with 20-30% porosity for optimal flavor absorption",
                  "es": "Zisha (arcilla púrpura) con 20-30% de porosidad para absorción óptima de sabor",
                  "de": "Zisha (lila Ton) mit 20-30% Porosität für optimale Geschmacksabsorption",
                  "nl": "Zisha (paarse klei) met 20-30% porositeit voor optimale smaak absorptie"
        },
        {
                  "en": "Standard terracotta clay",
                  "es": "Arcilla terracota estándar",
                  "de": "Standard-Terrakotta-Ton",
                  "nl": "Standaard terracotta klei"
        },
        {
                  "en": "Glazed ceramic material",
                  "es": "Material cerámico vidriado",
                  "de": "Glasiertes keramisches Material",
                  "nl": "Geglazuurd keramisch materiaal"
        },
        {
                  "en": "Pure porcelain with zero porosity",
                  "es": "Porcelana pura con porosidad cero",
                  "de": "Reines Porzellan mit null Porosität",
                  "nl": "Puur porselein met nul porositeit"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Authentic Yixing zisha clay has 20-30% porosity, allowing micro-absorption of tea oils that season the pot over years. The iron-rich purple clay also enhances tea flavor through trace mineral interactions. Each pot should be dedicated to one tea type to build optimal seasoning.",
                  "es": "La auténtica arcilla zisha Yixing tiene 20-30% de porosidad, permitiendo micro-absorción de aceites de té que sazonan la tetera durante años. La arcilla púrpura rica en hierro también realza el sabor del té a través de interacciones de minerales traza. Cada tetera debe dedicarse a un tipo de té para construir sazón óptimo.",
                  "de": "Authentischer Yixing Zisha-Ton hat 20-30% Porosität und ermöglicht Mikro-Absorption von Teeölen, die die Kanne über Jahre würzen. Der eisenreiche lila Ton verstärkt auch den Teegeschmack durch Spurenmineral-Wechselwirkungen. Jede Kanne sollte einem Teetyp gewidmet sein, um optimale Würze aufzubauen.",
                  "nl": "Authentieke Yixing zisha klei heeft 20-30% porositeit, micro-absorptie van thee oliën mogelijk makend die de pot over jaren kruiden. De ijzerrijke paarse klei verbetert ook thee smaak door spoor mineraal interacties. Elke pot moet toegewijd worden aan één thee type om optimale kruiding op te bouwen."
        }
      },
      {
        question: {
                  "en": "Which rare processing technique involves 'shaking' tea leaves exactly 36 times to achieve optimal oxidation gradients?",
                  "es": "¿Qué técnica rara de procesamiento implica 'agitar' hojas de té exactamente 36 veces para lograr gradientes óptimos de oxidación?",
                  "de": "Welche seltene Verarbeitungstechnik beinhaltet 'Schütteln' von Teeblättern genau 36 Mal um optimale Oxidationsgradienten zu erreichen?",
                  "nl": "Welke zeldzame verwerkingstechniek houdt in dat thee bladeren precies 36 keer 'geschud' worden om optimale oxidatie gradiënten te bereiken?"
        },
        options: [
        {
                  "en": "Standard tumbling in bamboo baskets",
                  "es": "Tumbado estándar en cestas de bambú",
                  "de": "Standard-Taumeln in Bambuskörben",
                  "nl": "Standaard tumbeling in bamboe manden"
        },
        {
                  "en": "Yao Qing (Rock oolong shaking) creating edge oxidation",
                  "es": "Yao Qing (Agitado de oolong de roca) creando oxidación de bordes",
                  "de": "Yao Qing (Felsen-Oolong-Schütteln) erzeugt Randoxidation",
                  "nl": "Yao Qing (Rots oolong schudden) creërend rand oxidatie"
        },
        {
                  "en": "Random agitation without counting",
                  "es": "Agitación aleatoria sin contar",
                  "de": "Zufällige Rührung ohne Zählen",
                  "nl": "Willekeurige agitatie zonder tellen"
        },
        {
                  "en": "Mechanical shaking for uniform oxidation",
                  "es": "Agitación mecánica para oxidación uniforme",
                  "de": "Mechanisches Schütteln für gleichmäßige Oxidation",
                  "nl": "Mechanisch schudden voor uniforme oxidatie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Yao Qing is the ancient art of precisely shaking tea leaves to bruise only the edges, creating oxidation gradients. The traditional 36 shakes (representing cosmic harmony in Chinese philosophy) ensures leaf edges oxidize while centers remain green, producing the characteristic red-edge appearance and complex flavor of premium rock oolongs.",
                  "es": "Yao Qing es el arte ancestral de agitar precisamente hojas de té para magullar solo los bordes, creando gradientes de oxidación. Las 36 agitaciones tradicionales (representando armonía cósmica en filosofía china) aseguran que los bordes de las hojas se oxiden mientras los centros permanecen verdes, produciendo la apariencia característica de borde rojo y sabor complejo de oolongs de roca premium.",
                  "de": "Yao Qing ist die alte Kunst, Teeblätter präzise zu schütteln, um nur die Ränder zu quetschen und Oxidationsgradienten zu erzeugen. Die traditionellen 36 Schüttelungen (kosmische Harmonie in chinesischer Philosophie darstellend) stellen sicher, dass Blattränder oxidieren, während Zentren grün bleiben, wodurch das charakteristische rotrandige Aussehen und komplexer Geschmack von Premium-Felsen-Oolongs entstehen.",
                  "nl": "Yao Qing is de oude kunst van precies thee bladeren schudden om alleen de randen te kneuzen, oxidatie gradiënten creërend. De traditionele 36 schudden (kosmische harmonie in Chinese filosofie vertegenwoordigend) garandeert dat blad randen oxideren terwijl centra groen blijven, het karakteristieke rood-rand uiterlijk en complexe smaak van premium rots oolongs producerend."
        }
      },
      {
        question: {
                  "en": "What causes the rare 'plum blossom' flavor profile in certain aged white teas?",
                  "es": "¿Qué causa el raro perfil de sabor 'flor de ciruelo' en ciertos tés blancos envejecidos?",
                  "de": "Was verursacht das seltene 'Pflaumenblüten'-Geschmacksprofil in bestimmten gereiften weißen Tees?",
                  "nl": "Wat veroorzaakt het zeldzame 'pruimenbloesem' smaakprofiel in bepaalde gerijpte witte theeën?"
        },
        options: [
        {
                  "en": "Slow oxidation converting catechins to unique aromatic aldehydes over 5+ years",
                  "es": "Oxidación lenta convirtiendo catequinas en aldehídos aromáticos únicos durante más de 5 años",
                  "de": "Langsame Oxidation wandelt Catechine über 5+ Jahre in einzigartige aromatische Aldehyde um",
                  "nl": "Langzame oxidatie converteert catechinen naar unieke aromatische aldehyden over 5+ jaar"
        },
        {
                  "en": "Added plum flavoring during processing",
                  "es": "Saborizante de ciruela añadido durante procesamiento",
                  "de": "Hinzugefügte Pflaumenaromatisierung während der Verarbeitung",
                  "nl": "Toegevoegde pruim smaakstof tijdens verwerking"
        },
        {
                  "en": "Bacterial fermentation creating esters",
                  "es": "Fermentación bacteriana creando ésteres",
                  "de": "Bakterielle Fermentation erzeugt Ester",
                  "nl": "Bacteriële fermentatie creërend esters"
        },
        {
                  "en": "Natural sugars caramelizing",
                  "es": "Azúcares naturales caramelizándose",
                  "de": "Natürliche Zucker karamellisierend",
                  "nl": "Natuurlijke suikers karameliserend"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "During extended aging (5-15 years), residual polyphenol oxidase slowly converts remaining catechins into benzaldehyde derivatives and other aromatic aldehydes that create delicate plum blossom notes. This transformation requires perfect storage conditions and high-quality starting material.",
                  "es": "Durante envejecimiento extendido (5-15 años), polifenol oxidasa residual convierte lentamente catequinas restantes en derivados de benzaldehído y otros aldehídos aromáticos que crean delicadas notas de flor de ciruelo. Esta transformación requiere condiciones perfectas de almacenamiento y material inicial de alta calidad.",
                  "de": "Während längerer Reifung (5-15 Jahre) wandelt restliche Polyphenoloxidase langsam verbleibende Catechine in Benzaldehyd-Derivate und andere aromatische Aldehyde um, die zarte Pflaumenblüten-Noten schaffen. Diese Transformation erfordert perfekte Lagerbedingungen und hochwertiges Ausgangsmaterial.",
                  "nl": "Tijdens verlengde rijping (5-15 jaar) converteert resterende polyfenol oxidase langzaam resterende catechinen naar benzaldehyde derivaten en andere aromatische aldehyden die delicate pruimenbloesem toetsen creëren. Deze transformatie vereist perfecte opslag condities en hoge kwaliteit uitgangsmateriaal."
        }
      },
      {
        question: {
                  "en": "Which cutting-edge analytical method can determine tea origin down to specific micro-terroirs?",
                  "es": "¿Qué método analítico de vanguardia puede determinar el origen del té hasta micro-terroirs específicos?",
                  "de": "Welche hochmoderne Analysemethode kann Tee-Herkunft bis zu spezifischen Mikro-Terroirs bestimmen?",
                  "nl": "Welke geavanceerde analytische methode kan thee oorsprong bepalen tot specifieke micro-terroirs?"
        },
        options: [
        {
                  "en": "Multi-element isotope ratio fingerprinting (Sr, Pb, O, H)",
                  "es": "Huella de relación de isótopos multi-elemento (Sr, Pb, O, H)",
                  "de": "Multi-Element-Isotopenverhältnis-Fingerabdruck (Sr, Pb, O, H)",
                  "nl": "Multi-element isotoop ratio vingerafdruk (Sr, Pb, O, H)"
        },
        {
                  "en": "Color spectroscopy of dry leaves",
                  "es": "Espectroscopia de color de hojas secas",
                  "de": "Farbspektroskopie trockener Blätter",
                  "nl": "Kleur spectroscopie van droge bladeren"
        },
        {
                  "en": "Traditional taste panel evaluation",
                  "es": "Evaluación tradicional de panel de sabor",
                  "de": "Traditionelle Geschmackspanel-Bewertung",
                  "nl": "Traditionele smaak panel evaluatie"
        },
        {
                  "en": "Simple caffeine content analysis",
                  "es": "Análisis simple de contenido de cafeína",
                  "de": "Einfache Koffeingehalt-Analyse",
                  "nl": "Simpele cafeïne gehalte analyse"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Multi-element isotope ratio analysis (strontium, lead, oxygen, hydrogen) creates unique geological signatures reflecting bedrock composition and water sources. This technique can distinguish teas from gardens just kilometers apart, providing definitive origin authentication for premium single-estate teas.",
                  "es": "Análisis de relación de isótopos multi-elemento (estroncio, plomo, oxígeno, hidrógeno) crea firmas geológicas únicas reflejando composición del lecho rocoso y fuentes de agua. Esta técnica puede distinguir tés de jardines a solo kilómetros de distancia, proporcionando autenticación de origen definitiva para tés premium de finca única.",
                  "de": "Multi-Element-Isotopenverhältnis-Analyse (Strontium, Blei, Sauerstoff, Wasserstoff) erzeugt einzigartige geologische Signaturen, die Gesteinsschicht-Zusammensetzung und Wasserquellen widerspiegeln. Diese Technik kann Tees von Gärten unterscheiden, die nur Kilometer voneinander entfernt sind, und bietet definitive Herkunftsauthentifizierung für Premium-Einzel-Estate-Tees.",
                  "nl": "Multi-element isotoop ratio analyse (strontium, lood, zuurstof, waterstof) creëert unieke geologische handtekeningen die ondergrond compositie en waterbronnen weerspiegelen. Deze techniek kan theeën onderscheiden van tuinen slechts kilometers uit elkaar, definitieve oorsprong authenticatie biedend voor premium single-estate theeën."
        }
      },
      {
        question: {
                  "en": "What is the significance of 'gushu' (ancient tree) designation in premium Yunnan teas?",
                  "es": "¿Cuál es la significancia de la designación 'gushu' (árbol ancestral) en tés premium de Yunnan?",
                  "de": "Was ist die Bedeutung der 'Gushu' (alter Baum) Bezeichnung in Premium Yunnan-Tees?",
                  "nl": "Wat is de betekenis van 'gushu' (oude boom) aanduiding in premium Yunnan theeën?"
        },
        options: [
        {
                  "en": "Trees over 10 years old only",
                  "es": "Solo árboles de más de 10 años",
                  "de": "Nur Bäume über 10 Jahre alt",
                  "nl": "Alleen bomen ouder dan 10 jaar"
        },
        {
                  "en": "Trees 100+ years old with deep taproots accessing unique mineral strata",
                  "es": "Árboles de 100+ años con raíces pivotantes profundas accediendo a estratos minerales únicos",
                  "de": "Bäume 100+ Jahre alt mit tiefen Pfahlwurzeln, die einzigartige Mineralschichten erreichen",
                  "nl": "Bomen 100+ jaar oud met diepe penwortel toegang tot unieke mineraal lagen"
        },
        {
                  "en": "Special processing method, not tree age",
                  "es": "Método especial de procesamiento, no edad del árbol",
                  "de": "Spezielle Verarbeitungsmethode, nicht Baumalter",
                  "nl": "Speciale verwerkings methode, niet boom leeftijd"
        },
        {
                  "en": "Marketing term with no botanical significance",
                  "es": "Término de marketing sin significancia botánica",
                  "de": "Marketing-Begriff ohne botanische Bedeutung",
                  "nl": "Marketing term zonder botanische betekenis"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Gushu trees (100-800+ years old) develop massive taproots reaching 3-6 meters deep, accessing mineral-rich soil layers and ancient water tables unavailable to younger plants. This creates complex secondary metabolite profiles and unique flavor complexity impossible in plantation teas.",
                  "es": "Árboles gushu (100-800+ años) desarrollan raíces pivotantes masivas alcanzando 3-6 metros de profundidad, accediendo a capas de suelo ricas en minerales y capas freáticas ancestrales no disponibles para plantas más jóvenes. Esto crea perfiles complejos de metabolitos secundarios y complejidad de sabor única imposible en tés de plantación.",
                  "de": "Gushu-Bäume (100-800+ Jahre alt) entwickeln massive Pfahlwurzeln, die 3-6 Meter tief reichen und mineralreiche Bodenschichten und alte Wassertafeln erreichen, die jüngeren Pflanzen nicht zugänglich sind. Dies schafft komplexe Sekundärmetabolit-Profile und einzigartige Geschmackskomplexität, die in Plantagen-Tees unmöglich ist.",
                  "nl": "Gushu bomen (100-800+ jaar oud) ontwikkelen massieve penwortels die 3-6 meter diep reiken, toegang krijgend tot mineraalrijke bodem lagen en oude water tafels niet beschikbaar voor jongere planten. Dit creëert complexe secundaire metaboliet profielen en unieke smaak complexiteit onmogelijk in plantage theeën."
        }
      },
      {
        question: {
                  "en": "Which advanced sensory analysis technique trains professional tea tasters to detect parts-per-billion concentrations?",
                  "es": "¿Qué técnica avanzada de análisis sensorial entrena a catadores profesionales de té para detectar concentraciones de partes por billón?",
                  "de": "Welche fortgeschrittene sensorische Analysetechnik trainiert professionelle Tee-Verkoster, Konzentrationen in Teilen pro Milliarde zu erkennen?",
                  "nl": "Welke geavanceerde sensorische analyse techniek traint professionele thee proevers om delen-per-miljard concentraties te detecteren?"
        },
        options: [
        {
                  "en": "Color matching training only",
                  "es": "Solo entrenamiento de coincidencia de colores",
                  "de": "Nur Farbabstimmungstraining",
                  "nl": "Alleen kleur matching training"
        },
        {
                  "en": "Triangle testing with sequential dilution training",
                  "es": "Prueba de triángulo con entrenamiento de dilución secuencial",
                  "de": "Dreieckstests mit sequenzieller Verdünnungstraining",
                  "nl": "Driehoek testen met sequentiële verdunning training"
        },
        {
                  "en": "Random blind tasting sessions",
                  "es": "Sesiones de cata a ciegas aleatorias",
                  "de": "Zufällige Blind-Verkostungssitzungen",
                  "nl": "Willekeurige blinde proef sessies"
        },
        {
                  "en": "Simple taste comparison exercises",
                  "es": "Ejercicios simples de comparación de sabor",
                  "de": "Einfache Geschmacksvergleichsübungen",
                  "nl": "Simpele smaak vergelijkings oefeningen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Triangle testing uses three samples (two identical, one different) at progressively lower concentrations to train olfactory threshold detection. Master tasters undergo years of training to reliably detect geosmin at 5 parts-per-billion or distinguish specific linalool isomers, skills essential for quality control in premium teas.",
                  "es": "La prueba de triángulo usa tres muestras (dos idénticas, una diferente) a concentraciones progresivamente más bajas para entrenar detección de umbral olfativo. Maestros catadores experimentan años de entrenamiento para detectar confiablemente geosmina a 5 partes por billón o distinguir isómeros específicos de linalool, habilidades esenciales para control de calidad en tés premium.",
                  "de": "Dreieckstests verwenden drei Proben (zwei identisch, eine anders) bei progressiv niedrigeren Konzentrationen, um olfaktorische Schwellenwerterkennung zu trainieren. Meisterverkoster durchlaufen Jahre des Trainings, um zuverlässig Geosmin bei 5 Teilen pro Milliarde zu erkennen oder spezifische Linalool-Isomere zu unterscheiden, Fähigkeiten, die für Qualitätskontrolle in Premium-Tees essentiell sind.",
                  "nl": "Driehoek testen gebruikt drie monsters (twee identiek, één verschillend) bij progressief lagere concentraties om olfactorische drempel detectie te trainen. Meester proevers ondergaan jaren training om betrouwbaar geosmin te detecteren bij 5 delen-per-miljard of specifieke linalool isomeren te onderscheiden, vaardigheden essentieel voor kwaliteit controle in premium theeën."
        }
      },
      {
        question: {
                  "en": "What is the biochemical mechanism behind 'hui gan' (returning sweetness) in premium teas?",
                  "es": "¿Cuál es el mecanismo bioquímico detrás de 'hui gan' (dulzura que regresa) en tés premium?",
                  "de": "Was ist der biochemische Mechanismus hinter 'Hui Gan' (wiederkehrende Süße) in Premium-Tees?",
                  "nl": "Wat is het biochemische mechanisme achter 'hui gan' (terugkerende zoetheid) in premium theeën?"
        },
        options: [
        {
                  "en": "Delayed salivary enzyme breakdown of glycosides releasing sweet compounds",
                  "es": "Descomposición enzimática salival retrasada de glucósidos liberando compuestos dulces",
                  "de": "Verzögerte speichelenzymische Zerlegung von Glykosiden, die süße Verbindungen freisetzen",
                  "nl": "Vertraagde speeksel enzym afbraak van glycosiden die zoete verbindingen vrijgeven"
        },
        {
                  "en": "Added sugars dissolving slowly",
                  "es": "Azúcares añadidos disolviéndose lentamente",
                  "de": "Hinzugefügte Zucker lösen sich langsam auf",
                  "nl": "Toegevoegde suikers die langzaam oplossen"
        },
        {
                  "en": "Temperature change in mouth",
                  "es": "Cambio de temperatura en boca",
                  "de": "Temperaturänderung im Mund",
                  "nl": "Temperatuur verandering in mond"
        },
        {
                  "en": "Psychological expectation effect",
                  "es": "Efecto de expectativa psicológica",
                  "de": "Psychologischer Erwartungseffekt",
                  "nl": "Psychologisch verwachtings effect"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Hui gan results from salivary amylases slowly hydrolyzing tea glycosides into free sugars 30-60 seconds after swallowing. Premium teas contain specific glycosylated polyphenols that create this delayed sweetness, a hallmark of quality processing and ancient tree material.",
                  "es": "Hui gan resulta de amilasas salivales hidrolizando lentamente glucósidos del té en azúcares libres 30-60 segundos después de tragar. Tés premium contienen polifenoles glucosilados específicos que crean esta dulzura retrasada, un sello distintivo de procesamiento de calidad y material de árbol ancestral.",
                  "de": "Hui Gan resultiert aus Speichelamylasen, die langsam Tee-Glykoside in freie Zucker 30-60 Sekunden nach dem Schlucken hydrolysieren. Premium-Tees enthalten spezifische glykosylierte Polyphenole, die diese verzögerte Süße schaffen, ein Kennzeichen qualitätsvoller Verarbeitung und altem Baummaterial.",
                  "nl": "Hui gan resulteert uit speeksel amylasen die langzaam thee glycosiden hydrolyseren naar vrije suikers 30-60 seconden na slikken. Premium theeën bevatten specifieke geglycosyleerde polyfenolen die deze vertraagde zoetheid creëren, een kenmerk van kwaliteit verwerking en oude boom materiaal."
        }
      },
      {
        question: {
                  "en": "Which rare Taiwanese oolong undergoes 'bug-bitten' stress to develop honey orchid flavors?",
                  "es": "¿Qué oolong taiwanés raro experimenta estrés 'mordido por insectos' para desarrollar sabores de orquídea de miel?",
                  "de": "Welcher seltene taiwanesische Oolong erfährt 'insektengebissenen' Stress, um Honig-Orchideen-Aromen zu entwickeln?",
                  "nl": "Welke zeldzame Taiwanese oolong ondergaat 'insecten-gebeten' stress om honing orchidee smaken te ontwikkelen?"
        },
        options: [
        {
                  "en": "Dong Fang Mei Ren (Oriental Beauty)",
                  "es": "Dong Fang Mei Ren (Belleza Oriental)",
                  "de": "Dong Fang Mei Ren (Orientalische Schönheit)",
                  "nl": "Dong Fang Mei Ren (Oosterse Schoonheid)"
        },
        {
                  "en": "Jade Oolong Premium",
                  "es": "Oolong de Jade Premium",
                  "de": "Jade-Oolong Premium",
                  "nl": "Jade Oolong Premium"
        },
        {
                  "en": "Iron Goddess Traditional",
                  "es": "Diosa de Hierro Tradicional",
                  "de": "Eiserne Göttin Traditionell",
                  "nl": "IJzeren Godin Traditioneel"
        },
        {
                  "en": "High Mountain Oolong Standard",
                  "es": "Oolong de Alta Montaña Estándar",
                  "de": "Hochberg-Oolong Standard",
                  "nl": "Hoge Berg Oolong Standaard"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Dong Fang Mei Ren requires leafhopper (Jacobiasca formosana) infestation to develop its signature honey-orchid profile. The insect feeding triggers defensive monoterpene production, creating unique linalool oxides and geraniol compounds. Only summer teas with proper bug damage qualify for this designation.",
                  "es": "Dong Fang Mei Ren requiere infestación de cicadélido (Jacobiasca formosana) para desarrollar su perfil característico de orquídea-miel. La alimentación del insecto desencadena producción defensiva de monoterpenos, creando óxidos únicos de linalool y compuestos de geraniol. Solo tés de verano con daño apropiado de insectos califican para esta designación.",
                  "de": "Dong Fang Mei Ren erfordert Blattzikaden-Befall (Jacobiasca formosana), um sein charakteristisches Honig-Orchideen-Profil zu entwickeln. Die Insektenfütterung löst defensive Monoterpen-Produktion aus und schafft einzigartige Linalooloxide und Geraniol-Verbindungen. Nur Sommertees mit ordnungsgemäßem Insektenschaden qualifizieren sich für diese Bezeichnung.",
                  "nl": "Dong Fang Mei Ren vereist bladcicade (Jacobiasca formosana) besmetting om zijn kenmerkende honing-orchidee profiel te ontwikkelen. Het insect voeden triggert defensieve monoterpeen productie, unieke linalool oxiden en geraniol verbindingen creërend. Alleen zomer theeën met juiste insecten schade kwalificeren voor deze aanduiding."
        }
      },
      {
        question: {
                  "en": "What is the optimal leaf-to-water ratio for traditional gongfu brewing of competition-grade Tie Guan Yin?",
                  "es": "¿Cuál es la relación óptima hoja-agua para preparación gongfu tradicional de Tie Guan Yin de grado competencia?",
                  "de": "Was ist das optimale Blatt-zu-Wasser-Verhältnis für traditionelles Gongfu-Brühen von Wettbewerbs-Tie Guan Yin?",
                  "nl": "Wat is de optimale blad-tot-water verhouding voor traditionele gongfu zetten van competitie-graad Tie Guan Yin?"
        },
        options: [
        {
                  "en": "1:50 ratio like Western brewing",
                  "es": "Relación 1:50 como preparación occidental",
                  "de": "1:50 Verhältnis wie westliches Brühen",
                  "nl": "1:50 verhouding zoals Westers zetten"
        },
        {
                  "en": "No specific ratio needed",
                  "es": "No se necesita relación específica",
                  "de": "Kein spezifisches Verhältnis benötigt",
                  "nl": "Geen specifieke verhouding nodig"
        },
        {
                  "en": "1:15 ratio (7g per 110ml gaiwan) with 5-10 second infusions",
                  "es": "Relación 1:15 (7g por gaiwan de 110ml) con infusiones de 5-10 segundos",
                  "de": "1:15 Verhältnis (7g pro 110ml Gaiwan) mit 5-10 Sekunden Aufgüssen",
                  "nl": "1:15 verhouding (7g per 110ml gaiwan) met 5-10 seconden infusies"
        },
        {
                  "en": "1:5 ratio for maximum concentration",
                  "es": "Relación 1:5 para máxima concentración",
                  "de": "1:5 Verhältnis für maximale Konzentration",
                  "nl": "1:5 verhouding voor maximale concentratie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Competition-grade Tie Guan Yin requires precise 1:15 ratio (typically 7g in 110ml gaiwan) with flash infusions of 5-10 seconds. This extracts the delicate floral compounds while avoiding bitter catechin over-extraction. The tightly rolled leaves can produce 8-12 high-quality infusions with proper technique.",
                  "es": "Tie Guan Yin de grado competencia requiere relación precisa 1:15 (típicamente 7g en gaiwan de 110ml) con infusiones flash de 5-10 segundos. Esto extrae los compuestos florales delicados mientras evita sobre-extracción amarga de catequinas. Las hojas enrolladas apretadamente pueden producir 8-12 infusiones de alta calidad con técnica apropiada.",
                  "de": "Wettbewerbs-Tie Guan Yin erfordert präzises 1:15 Verhältnis (typisch 7g in 110ml Gaiwan) mit Blitz-Aufgüssen von 5-10 Sekunden. Dies extrahiert die zarten floralen Verbindungen, während bittere Catechin-Überextraktion vermieden wird. Die fest gerollten Blätter können 8-12 hochwertige Aufgüsse mit ordnungsgemäßer Technik produzieren.",
                  "nl": "Competitie-graad Tie Guan Yin vereist precieze 1:15 verhouding (typisch 7g in 110ml gaiwan) met flash infusies van 5-10 seconden. Dit extraheert de delicate bloemen verbindingen terwijl bittere catechine over-extractie vermeden wordt. De strak gerolde bladeren kunnen 8-12 hoge kwaliteit infusies produceren met juiste techniek."
        }
      },
      {
        question: {
                  "en": "Which Nobel-caliber discovery in plant biology directly impacts modern tea cultivation techniques?",
                  "es": "¿Qué descubrimiento de calibre Nobel en biología vegetal impacta directamente técnicas modernas de cultivo de té?",
                  "de": "Welche Entdeckung Nobel-Kalibers in Pflanzenbiologie beeinflusst direkt moderne Tee-Anbautechniken?",
                  "nl": "Welke Nobelprijs-kaliber ontdekking in plant biologie beïnvloedt direct moderne thee teelt technieken?"
        },
        options: [
        {
                  "en": "Discovery of photosynthesis mechanism only",
                  "es": "Solo descubrimiento del mecanismo de fotosíntesis",
                  "de": "Nur Entdeckung des Photosynthese-Mechanismus",
                  "nl": "Alleen ontdekking van fotosynthese mechanisme"
        },
        {
                  "en": "Circadian clock regulation of secondary metabolite synthesis (Nobel 2017)",
                  "es": "Regulación del reloj circadiano de síntesis de metabolitos secundarios (Nobel 2017)",
                  "de": "Zirkadiane Uhr-Regulation der Sekundärmetabolit-Synthese (Nobel 2017)",
                  "nl": "Circadiaans klok regulatie van secundaire metaboliet synthese (Nobel 2017)"
        },
        {
                  "en": "Soil chemistry principles",
                  "es": "Principios de química del suelo",
                  "de": "Bodenchemie-Prinzipien",
                  "nl": "Bodem chemie principes"
        },
        {
                  "en": "Basic plant genetics from 1960s",
                  "es": "Genética vegetal básica de los 1960s",
                  "de": "Grundlegende Pflanzengenetik aus den 1960ern",
                  "nl": "Basis plant genetica uit de jaren 1960"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The 2017 Nobel Prize work on circadian rhythms revealed that plants synthesize peak catechins and L-theanine at specific times. Advanced tea gardens now time harvesting to circadian peaks (typically pre-dawn for highest L-theanine, mid-morning for catechins), optimizing flavor compound concentrations.",
                  "es": "El trabajo del Premio Nobel 2017 sobre ritmos circadianos reveló que las plantas sintetizan catequinas y L-teanina pico en momentos específicos. Jardines de té avanzados ahora programan cosecha a picos circadianos (típicamente pre-amanecer para L-teanina más alta, media mañana para catequinas), optimizando concentraciones de compuestos de sabor.",
                  "de": "Die Nobelpreis-Arbeit 2017 über zirkadiane Rhythmen enthüllte, dass Pflanzen Spitzen-Catechine und L-Theanin zu bestimmten Zeiten synthetisieren. Fortgeschrittene Teegärten timen jetzt die Ernte auf zirkadiane Spitzen (typisch vor der Morgendämmerung für höchstes L-Theanin, Vormittag für Catechine), wodurch Geschmacksverbindungskonzentrationen optimiert werden.",
                  "nl": "Het Nobelprijs werk 2017 over circadiaanse ritmes onthulde dat planten piek catechinen en L-theanine synthetiseren op specifieke tijden. Geavanceerde thee tuinen timen nu oogsten naar circadiaanse pieken (typisch voor zonsopgang voor hoogste L-theanine, mid-ochtend voor catechinen), smaak verbinding concentraties optimalizerend."
        }
      },
      {
        question: {
                  "en": "What causes the rare 'thunderstorm tea' phenomenon prized by collectors?",
                  "es": "¿Qué causa el raro fenómeno de 'té de tormenta' apreciado por coleccionistas?",
                  "de": "Was verursacht das seltene 'Gewitter-Tee'-Phänomen, das von Sammlern geschätzt wird?",
                  "nl": "Wat veroorzaakt het zeldzame 'onweersbui thee' fenomeen gewaardeerd door verzamelaars?"
        },
        options: [
        {
                  "en": "Rain washing leaves makes them cleaner",
                  "es": "Lluvia lavando hojas las hace más limpias",
                  "de": "Regen wäscht Blätter sauberer",
                  "nl": "Regen wast bladeren schoner"
        },
        {
                  "en": "Electrical charge affects tea color only",
                  "es": "Carga eléctrica afecta solo color del té",
                  "de": "Elektrische Ladung beeinflusst nur Teefarbe",
                  "nl": "Elektrische lading beïnvloedt alleen thee kleur"
        },
        {
                  "en": "Thunder vibrations damage leaf structure",
                  "es": "Vibraciones de trueno dañan estructura de hoja",
                  "de": "Donner-Vibrationen beschädigen Blattstruktur",
                  "nl": "Donder trillingen beschadigen blad structuur"
        },
        {
                  "en": "Nitrogen fixation from lightning creating amino acid spike in leaves",
                  "es": "Fijación de nitrógeno de rayos creando pico de aminoácidos en hojas",
                  "de": "Stickstofffixierung durch Blitz, die Aminosäure-Spitze in Blättern schafft",
                  "nl": "Stikstof fixatie van bliksem die aminozuur piek in bladeren creëert"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Lightning converts atmospheric nitrogen into bioavailable nitrates absorbed rapidly by tea plants. Leaves harvested 24-48 hours post-storm show 40-60% elevated L-theanine and amino acid levels, creating exceptionally smooth, umami-rich teas. This phenomenon is documented but unpredictable, making such teas extremely rare.",
                  "es": "Los rayos convierten nitrógeno atmosférico en nitratos biodisponibles absorbidos rápidamente por plantas de té. Hojas cosechadas 24-48 horas post-tormenta muestran niveles elevados de L-teanina y aminoácidos en 40-60%, creando tés excepcionalmente suaves y ricos en umami. Este fenómeno está documentado pero es impredecible, haciendo tales tés extremadamente raros.",
                  "de": "Blitz wandelt atmosphärischen Stickstoff in bioverfügbare Nitrate um, die von Teepflanzen schnell absorbiert werden. Blätter, die 24-48 Stunden nach dem Sturm geerntet werden, zeigen 40-60% erhöhte L-Theanin- und Aminosäure-Werte, wodurch außergewöhnlich glatte, umami-reiche Tees entstehen. Dieses Phänomen ist dokumentiert aber unvorhersehbar, was solche Tees extrem selten macht.",
                  "nl": "Bliksem converteert atmosferische stikstof naar biologisch beschikbare nitraten snel geabsorbeerd door thee planten. Bladeren geoogst 24-48 uur na storm tonen 40-60% verhoogde L-theanine en aminozuur niveaus, uitzonderlijk gladde, umami-rijke theeën creërend. Dit fenomeen is gedocumenteerd maar onvoorspelbaar, zulke theeën extreem zeldzaam makend."
        }
      },
      {
        question: {
                  "en": "Which ancient Chinese tea text first documented the 24 methods of tea preparation still studied today?",
                  "es": "¿Qué texto chino ancestral de té documentó primero los 24 métodos de preparación de té aún estudiados hoy?",
                  "de": "Welcher alte chinesische Tee-Text dokumentierte zuerst die 24 Methoden der Tee-Zubereitung, die heute noch studiert werden?",
                  "nl": "Welke oude Chinese thee tekst documenteerde eerst de 24 methoden van thee bereiding die vandaag nog bestudeerd worden?"
        },
        options: [
        {
                  "en": "Cha Jing (The Classic of Tea) by Lu Yu, 760 AD",
                  "es": "Cha Jing (El Clásico del Té) por Lu Yu, 760 DC",
                  "de": "Cha Jing (Der Klassiker des Tees) von Lu Yu, 760 n.Chr.",
                  "nl": "Cha Jing (De Klassieker van Thee) door Lu Yu, 760 AD"
        },
        {
                  "en": "Japanese tea ceremony texts from 1600s",
                  "es": "Textos japoneses de ceremonia del té de los 1600s",
                  "de": "Japanische Teezeremonie-Texte aus den 1600ern",
                  "nl": "Japanse thee ceremonie teksten uit de jaren 1600"
        },
        {
                  "en": "British tea trade documents",
                  "es": "Documentos británicos del comercio de té",
                  "de": "Britische Teehandel-Dokumente",
                  "nl": "Britse thee handel documenten"
        },
        {
                  "en": "Modern tea processing manual from 1950s",
                  "es": "Manual moderno de procesamiento de té de los 1950s",
                  "de": "Modernes Teeverarbeitungshandbuch aus den 1950ern",
                  "nl": "Modern thee verwerkings handboek uit de jaren 1950"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Lu Yu's Cha Jing (760 AD) is the foundational text documenting ancient tea cultivation, processing, and 24 preparation methods. This work established tea as high art and its principles still guide master tea makers. Original copies are priceless cultural artifacts, with surviving woodblock prints valued at millions.",
                  "es": "Cha Jing de Lu Yu (760 DC) es el texto fundacional documentando cultivo ancestral de té, procesamiento y 24 métodos de preparación. Este trabajo estableció el té como arte elevado y sus principios aún guían a maestros fabricantes de té. Copias originales son artefactos culturales invaluables, con impresiones de bloques de madera sobrevivientes valoradas en millones.",
                  "de": "Lu Yus Cha Jing (760 n.Chr.) ist der grundlegende Text, der alten Tee-Anbau, Verarbeitung und 24 Zubereitungsmethoden dokumentiert. Dieses Werk etablierte Tee als hohe Kunst und seine Prinzipien leiten noch heute Meister-Teemacher. Originalkopien sind unbezahlbare kulturelle Artefakte, wobei überlebende Holzblock-Drucke mit Millionen bewertet werden.",
                  "nl": "Lu Yu's Cha Jing (760 AD) is de fundamentele tekst die oude thee teelt, verwerking en 24 bereidings methoden documenteert. Dit werk vestigde thee als hoge kunst en zijn principes leiden nog steeds meester thee makers. Originele kopieën zijn onbetaalbare culturele artefacten, met overlevende houtblok prints gewaardeerd op miljoenen."
        }
      },
      {
        question: {
                  "en": "Which experimental tea hybridization program created disease-resistant cultivars with 30% higher catechin content?",
                  "es": "¿Qué programa experimental de hibridación de té creó cultivares resistentes a enfermedades con 30% más contenido de catequinas?",
                  "de": "Welches experimentelle Tee-Hybridisierungsprogramm schuf krankheitsresistente Kultivare mit 30% höherem Catechin-Gehalt?",
                  "nl": "Welk experimenteel thee hybridisatie programma creëerde ziekte-resistente cultivars met 30% hoger catechine gehalte?"
        },
        options: [
        {
                  "en": "Random cross-breeding without selection",
                  "es": "Cruce aleatorio sin selección",
                  "de": "Zufällige Kreuzung ohne Selektion",
                  "nl": "Willekeurige kruisbestuiving zonder selectie"
        },
        {
                  "en": "TRFK clonal selection program in Kenya combining wild and cultivated genetics",
                  "es": "Programa de selección clonal TRFK en Kenia combinando genética silvestre y cultivada",
                  "de": "TRFK-Klonale Selektionsprogramm in Kenia, das wilde und kultivierte Genetik kombiniert",
                  "nl": "TRFK clonale selectie programma in Kenia dat wilde en gekweekte genetica combineert"
        },
        {
                  "en": "Traditional vegetative propagation",
                  "es": "Propagación vegetativa tradicional",
                  "de": "Traditionelle vegetative Vermehrung",
                  "nl": "Traditionele vegetatieve propagatie"
        },
        {
                  "en": "GMO modification programs only",
                  "es": "Solo programas de modificación GMO",
                  "de": "Nur GMO-Modifikationsprogramme",
                  "nl": "Alleen GMO modificatie programma's"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Kenya's Tea Research Foundation (TRFK) developed superior clones by hybridizing high-catechin wild Camellia sinensis var. assamica with disease-resistant cultivated varieties. Clones like TRFK 31/8 show 30% elevated EGCG while resisting blister blight, revolutionizing East African tea production.",
                  "es": "La Fundación de Investigación del Té de Kenia (TRFK) desarrolló clones superiores hibridizando Camellia sinensis var. assamica silvestre de alta catequina con variedades cultivadas resistentes a enfermedades. Clones como TRFK 31/8 muestran EGCG elevado en 30% mientras resisten tizón vesicular, revolucionando producción de té de África Oriental.",
                  "de": "Kenias Tea Research Foundation (TRFK) entwickelte überlegene Klone durch Hybridisierung von hohem Catechin-Gehalt wildem Camellia sinensis var. assamica mit krankheitsresistenten kultivierten Sorten. Klone wie TRFK 31/8 zeigen 30% erhöhtes EGCG während sie Blasenbrand widerstehen und revolutionieren ostafrikanische Teeproduktion.",
                  "nl": "Kenya's Tea Research Foundation (TRFK) ontwikkelde superieure klonen door hoge-catechine wilde Camellia sinensis var. assamica te hybridiseren met ziekte-resistente gekweekte variëteiten. Klonen zoals TRFK 31/8 tonen 30% verhoogde EGCG terwijl ze blister blight weerstaan, Oost-Afrikaanse thee productie revolutionerend."
        }
      },
      {
        question: {
                  "en": "What is the 'tea horse road' and why does altitude affect tea traded along this ancient route?",
                  "es": "¿Qué es el 'camino del caballo y té' y por qué la altitud afecta el té comerciado a lo largo de esta ruta ancestral?",
                  "de": "Was ist die 'Tee-Pferde-Straße' und warum beeinflusst die Höhe den Tee, der entlang dieser alten Route gehandelt wurde?",
                  "nl": "Wat is de 'thee paard route' en waarom beïnvloedt hoogte thee verhandeld langs deze oude route?"
        },
        options: [
        {
                  "en": "Modern shipping route through mountains",
                  "es": "Ruta de envío moderna a través de montañas",
                  "de": "Moderne Versandroute durch Berge",
                  "nl": "Moderne verzend route door bergen"
        },
        {
                  "en": "Ancient Sino-Tibetan trade route where compressed tea aged uniquely during high-altitude transport",
                  "es": "Antigua ruta comercial Sino-Tibetana donde té comprimido envejecía únicamente durante transporte de gran altitud",
                  "de": "Alte Sino-Tibetische Handelsroute, wo komprimierter Tee einzigartig während Hochgebirgstransport reifte",
                  "nl": "Oude Sino-Tibetaanse handelsroute waar gecomprimeerde thee uniek rijpte tijdens hoge-hoogte transport"
        },
        {
                  "en": "Tourist attraction with no historical significance",
                  "es": "Atracción turística sin significancia histórica",
                  "de": "Touristenattraktion ohne historische Bedeutung",
                  "nl": "Toeristische attractie zonder historische betekenis"
        },
        {
                  "en": "Railroad built for tea export only",
                  "es": "Ferrocarril construido solo para exportación de té",
                  "de": "Eisenbahn nur für Teeexport gebaut",
                  "nl": "Spoorweg gebouwd alleen voor thee export"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Tea Horse Road (Cha Ma Gu Dao) connected Yunnan/Sichuan to Tibet over 2,000 years. Compressed tea bricks underwent unique fermentation during months-long journeys at 3,000-5,000m altitude, where low oxygen and temperature fluctuations created distinctive flavors prized in Tibetan culture.",
                  "es": "El Camino del Caballo y Té (Cha Ma Gu Dao) conectó Yunnan/Sichuan a Tíbet durante más de 2,000 años. Ladrillos de té comprimidos experimentaron fermentación única durante viajes de meses a 3,000-5,000m de altitud, donde bajo oxígeno y fluctuaciones de temperatura crearon sabores distintivos apreciados en cultura tibetana.",
                  "de": "Die Tee-Pferde-Straße (Cha Ma Gu Dao) verband Yunnan/Sichuan mit Tibet über 2.000 Jahre. Komprimierte Teeziegel durchliefen einzigartige Fermentation während monatelanger Reisen in 3.000-5.000m Höhe, wo niedriger Sauerstoff und Temperaturschwankungen charakteristische Aromen schufen, die in tibetischer Kultur geschätzt wurden.",
                  "nl": "De Thee Paard Route (Cha Ma Gu Dao) verbond Yunnan/Sichuan met Tibet gedurende meer dan 2.000 jaar. Gecomprimeerde thee stenen ondergingen unieke fermentatie tijdens maandenlange reizen op 3.000-5.000m hoogte, waar lage zuurstof en temperatuur fluctuaties onderscheidende smaken creëerden gewaardeerd in Tibetaanse cultuur."
        }
      },
      {
        question: {
                  "en": "Which cutting-edge biotechnology enables rapid authentication of ancient tree puerh?",
                  "es": "¿Qué biotecnología de vanguardia permite autenticación rápida de puerh de árbol ancestral?",
                  "de": "Welche hochmoderne Biotechnologie ermöglicht schnelle Authentifizierung von altem Baum-Puerh?",
                  "nl": "Welke geavanceerde biotechnologie maakt snelle authenticatie mogelijk van oude boom puerh?"
        },
        options: [
        {
                  "en": "Taste testing by untrained consumers",
                  "es": "Prueba de sabor por consumidores no entrenados",
                  "de": "Geschmackstests durch ungeschulte Verbraucher",
                  "nl": "Smaak testen door ongetrainde consumenten"
        },
        {
                  "en": "Price comparison with market averages",
                  "es": "Comparación de precios con promedios del mercado",
                  "de": "Preisvergleich mit Marktdurchschnitten",
                  "nl": "Prijs vergelijking met markt gemiddelden"
        },
        {
                  "en": "DNA barcoding comparing chloroplast genomes to verified ancient tree samples",
                  "es": "Código de barras de ADN comparando genomas de cloroplastos con muestras verificadas de árboles ancestrales",
                  "de": "DNA-Barcoding, das Chloroplasten-Genome mit verifizierten alten Baumproben vergleicht",
                  "nl": "DNA barcoding die chloroplast genomen vergelijkt met geverifieerde oude boom monsters"
        },
        {
                  "en": "Visual inspection of leaf size only",
                  "es": "Solo inspección visual del tamaño de hoja",
                  "de": "Nur visuelle Inspektion der Blattgröße",
                  "nl": "Alleen visuele inspectie van blad grootte"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "DNA barcoding analyzes chloroplast DNA markers unique to ancient tree populations. By comparing samples against authenticated reference libraries, labs can definitively distinguish 500+ year old tree material from younger plantation teas, combating widespread fraud in premium puerh markets.",
                  "es": "Código de barras de ADN analiza marcadores de ADN de cloroplasto únicos a poblaciones de árboles ancestrales. Comparando muestras contra bibliotecas de referencia autenticadas, laboratorios pueden distinguir definitivamente material de árbol de 500+ años de tés de plantación más jóvenes, combatiendo fraude generalizado en mercados de puerh premium.",
                  "de": "DNA-Barcoding analysiert Chloroplasten-DNA-Marker, die für alte Baumpopulationen einzigartig sind. Durch Vergleich von Proben mit authentifizierten Referenzbibliotheken können Labore definitiv Material von 500+ Jahre alten Bäumen von jüngeren Plantagen-Tees unterscheiden und bekämpfen weit verbreiteten Betrug in Premium-Puerh-Märkten.",
                  "nl": "DNA barcoding analyseert chloroplast DNA markers uniek voor oude boom populaties. Door monsters te vergelijken met geauthenticeerde referentie bibliotheken, kunnen labs definitief 500+ jaar oud boom materiaal onderscheiden van jongere plantage theeën, wijdverspreide fraude in premium puerh markten bestrijdend."
        }
      },
      {
        question: {
                  "en": "What is the scientific basis for traditional 'tea drunkenness' described in classical texts?",
                  "es": "¿Cuál es la base científica para la tradicional 'embriaguez de té' descrita en textos clásicos?",
                  "de": "Was ist die wissenschaftliche Grundlage für traditionelle 'Tee-Trunkenheit', die in klassischen Texten beschrieben wird?",
                  "nl": "Wat is de wetenschappelijke basis voor traditionele 'thee dronkenschap' beschreven in klassieke teksten?"
        },
        options: [
        {
                  "en": "Dehydration from excessive tea consumption",
                  "es": "Deshidratación por consumo excesivo de té",
                  "de": "Dehydration durch übermäßigen Teekonsum",
                  "nl": "Dehydratie van overmatige thee consumptie"
        },
        {
                  "en": "Psychological suggestion only",
                  "es": "Solo sugerencia psicológica",
                  "de": "Nur psychologische Suggestion",
                  "nl": "Alleen psychologische suggestie"
        },
        {
                  "en": "Excessive L-theanine inducing altered alpha wave patterns and mild vasodilation",
                  "es": "L-teanina excesiva induciendo patrones alterados de ondas alfa y vasodilatación leve",
                  "de": "Übermäßiges L-Theanin induziert veränderte Alpha-Wellenmuster und milde Vasodilatation",
                  "nl": "Overmatige L-theanine inducerend veranderde alfa golf patronen en milde vasodilatatie"
        },
        {
                  "en": "Alcohol content in fermented teas",
                  "es": "Contenido de alcohol en tés fermentados",
                  "de": "Alkoholgehalt in fermentierten Tees",
                  "nl": "Alcohol gehalte in gefermenteerde theeën"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Tea drunkenness occurs when consuming large quantities of high-L-theanine tea on an empty stomach. Excessive L-theanine (>500mg) intensifies alpha brain wave activity while causing mild vasodilation, producing lightheadedness, euphoria, and altered perception documented in Chinese tea literature for centuries.",
                  "es": "Embriaguez de té ocurre al consumir grandes cantidades de té alto en L-teanina con estómago vacío. L-teanina excesiva (>500mg) intensifica actividad de ondas cerebrales alfa mientras causa vasodilatación leve, produciendo mareo, euforia y percepción alterada documentada en literatura china del té durante siglos.",
                  "de": "Tee-Trunkenheit tritt auf beim Konsum großer Mengen hohem L-Theanin-Tee auf nüchternen Magen. Übermäßiges L-Theanin (>500mg) verstärkt Alpha-Gehirnwellenaktivität während es milde Vasodilatation verursacht und Benommenheit, Euphorie und veränderte Wahrnehmung produziert, die in chinesischer Tee-Literatur seit Jahrhunderten dokumentiert sind.",
                  "nl": "Thee dronkenschap treedt op bij consumptie van grote hoeveelheden hoge-L-theanine thee op lege maag. Overmatige L-theanine (>500mg) intensiveert alfa hersengolf activiteit terwijl het milde vasodilatatie veroorzaakt, licht in hoofd, euforie en veranderde perceptie producerend gedocumenteerd in Chinese thee literatuur gedurende eeuwen."
        }
      },
      {
        question: {
                  "en": "Which rare Japanese tea undergoes traditional 'shadow cultivation' for 40+ days before harvest?",
                  "es": "¿Qué té japonés raro experimenta 'cultivo en sombra' tradicional durante 40+ días antes de cosecha?",
                  "de": "Welcher seltene japanische Tee durchläuft traditionellen 'Schattenwuchs' für 40+ Tage vor der Ernte?",
                  "nl": "Welke zeldzame Japanse thee ondergaat traditionele 'schaduw teelt' voor 40+ dagen voor oogst?"
        },
        options: [
        {
                  "en": "Honzu Gyokuro from Uji region with extended 40-day shading",
                  "es": "Honzu Gyokuro de región Uji con sombreado extendido de 40 días",
                  "de": "Honzu Gyokuro aus Uji-Region mit verlängerter 40-Tage-Beschattung",
                  "nl": "Honzu Gyokuro uit Uji regio met verlengde 40-dagen beschaduwing"
        },
        {
                  "en": "Hojicha roasted tea",
                  "es": "Té tostado Hojicha",
                  "de": "Hojicha Rösttee",
                  "nl": "Hojicha geroosterde thee"
        },
        {
                  "en": "Sencha with no shading required",
                  "es": "Sencha sin sombreado requerido",
                  "de": "Sencha ohne erforderliche Beschattung",
                  "nl": "Sencha zonder vereiste beschaduwing"
        },
        {
                  "en": "Genmaicha with rice blend",
                  "es": "Genmaicha con mezcla de arroz",
                  "de": "Genmaicha mit Reis-Mischung",
                  "nl": "Genmaicha met rijst mengsel"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Honzu (authentic) Gyokuro receives 40+ days shading versus standard 20-day Gyokuro. Extended darkness forces extreme chlorophyll and L-theanine accumulation (up to 6% dry weight) while suppressing catechins, creating the prized deep umami and sweet character impossible in shorter-shaded versions.",
                  "es": "Gyokuro Honzu (auténtico) recibe 40+ días de sombreado versus Gyokuro estándar de 20 días. Oscuridad extendida fuerza acumulación extrema de clorofila y L-teanina (hasta 6% peso seco) mientras suprime catequinas, creando el preciado umami profundo y carácter dulce imposible en versiones de sombreado más corto.",
                  "de": "Honzu (authentischer) Gyokuro erhält 40+ Tage Beschattung versus Standard-20-Tage-Gyokuro. Verlängerte Dunkelheit erzwingt extreme Chlorophyll- und L-Theanin-Akkumulation (bis zu 6% Trockengewicht) während Catechine unterdrückt werden, wodurch der geschätzte tiefe Umami und süßer Charakter entsteht, der in kürzer beschatteten Versionen unmöglich ist.",
                  "nl": "Honzu (authentieke) Gyokuro ontvangt 40+ dagen beschaduwing versus standaard 20-dagen Gyokuro. Verlengde duisternis dwingt extreme chlorofyl en L-theanine accumulatie (tot 6% droog gewicht) terwijl catechinen onderdrukt worden, de gewaardeerde diepe umami en zoete karakter creërend onmogelijk in korter-beschaduwde versies."
        }
      },
      {
        question: {
                  "en": "What is the most expensive tea ever auctioned and what makes it unique?",
                  "es": "¿Cuál es el té más caro subastado y qué lo hace único?",
                  "de": "Was ist der teuerste jemals versteigerte Tee und was macht ihn einzigartig?",
                  "nl": "Wat is de duurste thee ooit geveild en wat maakt het uniek?"
        },
        options: [
        {
                  "en": "Da Hong Pao from mother trees ($1.4M/kg in 2002, now banned from harvest)",
                  "es": "Da Hong Pao de árboles madre ($1.4M/kg en 2002, ahora prohibido de cosecha)",
                  "de": "Da Hong Pao von Mutterbäumen ($1,4M/kg im Jahr 2002, jetzt Ernteverbot)",
                  "nl": "Da Hong Pao van moederbomen ($1.4M/kg in 2002, nu verboden van oogst)"
        },
        {
                  "en": "Japanese matcha powder at $500/kg",
                  "es": "Polvo de matcha japonés a $500/kg",
                  "de": "Japanisches Matcha-Pulver bei $500/kg",
                  "nl": "Japans matcha poeder voor $500/kg"
        },
        {
                  "en": "English Breakfast blend at premium prices",
                  "es": "Mezcla English Breakfast a precios premium",
                  "de": "English Breakfast Mischung zu Premium-Preisen",
                  "nl": "English Breakfast mengsel tegen premium prijzen"
        },
        {
                  "en": "Standard Ceylon black tea",
                  "es": "Té negro Ceilán estándar",
                  "de": "Standard Ceylon Schwarztee",
                  "nl": "Standaard Ceylon zwarte thee"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Da Hong Pao from the six original mother trees in Wuyi Mountains sold for $1.4 million/kg in 2002. These 360-year-old trees are now protected national treasures with harvest banned since 2006. Existing aged samples are priceless museum artifacts, while all commercial Da Hong Pao comes from clonal descendants.",
                  "es": "Da Hong Pao de los seis árboles madre originales en Montañas Wuyi se vendió por $1.4 millones/kg en 2002. Estos árboles de 360 años ahora son tesoros nacionales protegidos con cosecha prohibida desde 2006. Muestras envejecidas existentes son artefactos de museo invaluables, mientras todo Da Hong Pao comercial viene de descendientes clonales.",
                  "de": "Da Hong Pao von den sechs ursprünglichen Mutterbäumen in Wuyi-Bergen verkaufte sich für $1,4 Millionen/kg im Jahr 2002. Diese 360 Jahre alten Bäume sind jetzt geschützte Nationalschätze mit Ernteverbot seit 2006. Bestehende gealterte Proben sind unbezahlbare Museumsartefakte, während alle kommerziellen Da Hong Pao von klonalen Nachkommen stammen.",
                  "nl": "Da Hong Pao van de zes originele moederbomen in Wuyi Bergen verkocht voor $1.4 miljoen/kg in 2002. Deze 360-jaar oude bomen zijn nu beschermde nationale schatten met oogst verboden sinds 2006. Bestaande gerijpte monsters zijn onbetaalbare museum artefacten, terwijl alle commerciële Da Hong Pao komt van klonale nakomelingen."
        }
      },
      {
        question: {
                  "en": "Which revolutionary processing innovation allows year-round production of traditionally seasonal teas?",
                  "es": "¿Qué innovación revolucionaria de procesamiento permite producción durante todo el año de tés tradicionalmente estacionales?",
                  "de": "Welche revolutionäre Verarbeitungsinnovation ermöglicht ganzjährige Produktion traditionell saisonaler Tees?",
                  "nl": "Welke revolutionaire verwerkings innovatie maakt jaar-rond productie mogelijk van traditioneel seizoensgebonden theeën?"
        },
        options: [
        {
                  "en": "Greenhouse cultivation only",
                  "es": "Solo cultivo de invernadero",
                  "de": "Nur Gewächshausanbau",
                  "nl": "Alleen broeikas teelt"
        },
        {
                  "en": "Importing from Southern Hemisphere",
                  "es": "Importar desde Hemisferio Sur",
                  "de": "Import aus Südhalbkugel",
                  "nl": "Importeren vanuit Zuidelijk Halfrond"
        },
        {
                  "en": "Freezing fresh leaves for later processing",
                  "es": "Congelar hojas frescas para procesamiento posterior",
                  "de": "Frische Blätter für spätere Verarbeitung einfrieren",
                  "nl": "Verse bladeren bevriezen voor latere verwerking"
        },
        {
                  "en": "Climate-controlled processing chambers simulating seasonal temperature/humidity cycles",
                  "es": "Cámaras de procesamiento controladas por clima simulando ciclos estacionales de temperatura/humedad",
                  "de": "Klimakontrollierte Verarbeitungskammern, die saisonale Temperatur-/Feuchtigkeitszyklen simulieren",
                  "nl": "Klimaat-gecontroleerde verwerkings kamers die seizoens temperatuur/vochtigheid cycli simuleren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Advanced processors use climate chambers precisely replicating spring temperature swings (10-25°C) and humidity patterns essential for first flush character. Combined with LED photoperiod control, these systems enable production of spring-quality tea year-round, though purists debate whether results match natural seasonal cycles.",
                  "es": "Procesadores avanzados usan cámaras climáticas replicando precisamente oscilaciones de temperatura primaveral (10-25°C) y patrones de humedad esenciales para carácter de primera cosecha. Combinados con control de fotoperíodo LED, estos sistemas permiten producción de té de calidad primaveral durante todo el año, aunque puristas debaten si resultados igualan ciclos estacionales naturales.",
                  "de": "Fortgeschrittene Verarbeiter verwenden Klimakammern, die präzise Frühlingstemperaturschwankungen (10-25°C) und Feuchtigkeitsmuster replizieren, die für First-Flush-Charakter essentiell sind. Kombiniert mit LED-Photoperioden-Kontrolle ermöglichen diese Systeme ganzjährige Produktion von Frühlingsqualitätstee, obwohl Puristen debattieren, ob Ergebnisse natürliche saisonale Zyklen erreichen.",
                  "nl": "Geavanceerde verwerkers gebruiken klimaat kamers die precies lente temperatuur schommelingen (10-25°C) en vochtigheid patronen repliceren essentieel voor first flush karakter. Gecombineerd met LED fotoperiode controle, maken deze systemen jaar-rond productie van lente-kwaliteit thee mogelijk, hoewel puristen debatteren of resultaten natuurlijke seizoens cycli evenaren."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  }
})();