// Tea Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "Tea Types & Origins",
          "es": "Tipos y Orígenes del Té",
          "de": "Teetypen und Ursprünge",
          "nl": "Theetypes & Oorsprong"
    },
    questions: [
      {
        question: {
                  "en": "What is the difference between orange pekoe and pekoe tea grades?",
                  "es": "¿Cuál es la diferencia entre los grados de té orange pekoe y pekoe?",
                  "de": "Was ist der Unterschied zwischen Orange Pekoe und Pekoe Teequalitäten?",
                  "nl": "Wat is het verschil tussen orange pekoe en pekoe theegraden?"
        },
        options: [
        {
                  "en": "Orange pekoe has longer leaves",
                  "es": "Orange pekoe tiene hojas más largas",
                  "de": "Orange Pekoe hat längere Blätter",
                  "nl": "Orange pekoe heeft langere bladeren"
        },
        {
                  "en": "Orange pekoe is a color grade",
                  "es": "Orange pekoe es un grado de color",
                  "de": "Orange Pekoe ist eine Farbqualität",
                  "nl": "Orange pekoe is een kleurgraad"
        },
        {
                  "en": "No difference, same grade",
                  "es": "Sin diferencia, mismo grado",
                  "de": "Kein Unterschied, gleiche Qualität",
                  "nl": "Geen verschil, zelfde graad"
        },
        {
                  "en": "Orange pekoe has orange flavoring",
                  "es": "Orange pekoe tiene sabor a naranja",
                  "de": "Orange Pekoe hat Orangengeschmack",
                  "nl": "Orange pekoe heeft sinaasappelsmaak"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Orange Pekoe (OP) has longer leaf grades than Pekoe (P), indicating higher quality and larger leaf pieces.",
                  "es": "Orange Pekoe (OP) tiene grados de hojas más largos que Pekoe (P), indicando mayor calidad y piezas de hojas más grandes.",
                  "de": "Orange Pekoe (OP) hat längere Blattgrade als Pekoe (P), was höhere Qualität und größere Blattstücke anzeigt.",
                  "nl": "Orange Pekoe (OP) heeft langere bladgraden dan Pekoe (P), wat hogere kwaliteit en grotere bladstukken aangeeft."
        }
      },
      {
        question: {
                  "en": "Which region is famous for Darjeeling tea?",
                  "es": "¿Qué región es famosa por el té Darjeeling?",
                  "de": "Welche Region ist berühmt für Darjeeling-Tee?",
                  "nl": "Welke regio staat bekend om Darjeeling thee?"
        },
        options: [
        {
                  "en": "India",
                  "es": "India",
                  "de": "Indien",
                  "nl": "India"
        },
        {
                  "en": "China",
                  "es": "China",
                  "de": "China",
                  "nl": "China"
        },
        {
                  "en": "Japan",
                  "es": "Japón",
                  "de": "Japan",
                  "nl": "Japan"
        },
        {
                  "en": "Sri Lanka",
                  "es": "Sri Lanka",
                  "de": "Sri Lanka",
                  "nl": "Sri Lanka"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Darjeeling tea comes from the Darjeeling district in West Bengal, India, known for its distinctive muscatel flavor.",
                  "es": "El té Darjeeling proviene del distrito de Darjeeling en Bengala Occidental, India, conocido por su distintivo sabor moscatel.",
                  "de": "Darjeeling-Tee stammt aus dem Darjeeling-Distrikt in Westbengalen, Indien, bekannt für seinen charakteristischen Muskateller-Geschmack.",
                  "nl": "Darjeeling thee komt uit het Darjeeling district in West-Bengalen, India, bekend om zijn kenmerkende muskaat smaak."
        }
      },
      {
        question: {
                  "en": "What makes oolong tea unique among tea types?",
                  "es": "¿Qué hace único al té oolong entre los tipos de té?",
                  "de": "Was macht Oolong-Tee unter den Teetypen einzigartig?",
                  "nl": "Wat maakt oolong thee uniek onder de theetypes?"
        },
        options: [
        {
                  "en": "It's fully fermented",
                  "es": "Está completamente fermentado",
                  "de": "Es ist vollständig fermentiert",
                  "nl": "Het is volledig gefermenteerd"
        },
        {
                  "en": "It's partially oxidized",
                  "es": "Está parcialmente oxidado",
                  "de": "Es ist teilweise oxidiert",
                  "nl": "Het is gedeeltelijk geoxideerd"
        },
        {
                  "en": "It's smoked",
                  "es": "Está ahumado",
                  "de": "Es ist geräuchert",
                  "nl": "Het is gerookt"
        },
        {
                  "en": "It's never oxidized",
                  "es": "Nunca se oxida",
                  "de": "Es wird nie oxidiert",
                  "nl": "Het wordt nooit geoxideerd"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Oolong tea is partially oxidized (20-80%), making it between green and black tea in processing and flavor.",
                  "es": "El té oolong está parcialmente oxidado (20-80%), ubicándose entre el té verde y negro en procesamiento y sabor.",
                  "de": "Oolong-Tee ist teilweise oxidiert (20-80%), was ihn in Verarbeitung und Geschmack zwischen grünem und schwarzem Tee einordnet.",
                  "nl": "Oolong thee is gedeeltelijk geoxideerd (20-80%), waardoor het tussen groene en zwarte thee ligt in verwerking en smaak."
        }
      },
      {
        question: {
                  "en": "What does 'SFTGFOP' indicate on tea packaging?",
                  "es": "¿Qué indica 'SFTGFOP' en el empaque del té?",
                  "de": "Was bedeutet 'SFTGFOP' auf Teeverpackungen?",
                  "nl": "Wat geeft 'SFTGFOP' aan op theeverpakkingen?"
        },
        options: [
        {
                  "en": "A leaf grade classification",
                  "es": "Una clasificación de grado de hoja",
                  "de": "Eine Blattgrad-Klassifizierung",
                  "nl": "Een bladgraad classificatie"
        },
        {
                  "en": "An expiration code",
                  "es": "Un código de caducidad",
                  "de": "Ein Verfallscode",
                  "nl": "Een vervaldatum code"
        },
        {
                  "en": "A brewing instruction",
                  "es": "Una instrucción de preparación",
                  "de": "Eine Brühanweisung",
                  "nl": "Een zetinstructie"
        },
        {
                  "en": "A flavor profile",
                  "es": "Un perfil de sabor",
                  "de": "Ein Geschmacksprofil",
                  "nl": "Een smaakprofiel"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "SFTGFOP stands for 'Super Fine Tippy Golden Flowery Orange Pekoe', indicating the highest grade of whole leaf tea.",
                  "es": "SFTGFOP significa 'Super Fine Tippy Golden Flowery Orange Pekoe', indicando el grado más alto de té de hoja entera.",
                  "de": "SFTGFOP steht für 'Super Fine Tippy Golden Flowery Orange Pekoe', was die höchste Qualität von ganzen Blatt-Tee anzeigt.",
                  "nl": "SFTGFOP staat voor 'Super Fine Tippy Golden Flowery Orange Pekoe', wat de hoogste graad van hele bladthee aangeeft."
        }
      },
      {
        question: {
                  "en": "Which tea is known as the 'champagne of teas'?",
                  "es": "¿Qué té es conocido como el 'champán de los tés'?",
                  "de": "Welcher Tee ist als 'Champagner der Tees' bekannt?",
                  "nl": "Welke thee staat bekend als de 'champagne van de theeën'?"
        },
        options: [
        {
                  "en": "Ceylon Pekoe",
                  "es": "Ceylon Pekoe",
                  "de": "Ceylon Pekoe",
                  "nl": "Ceylon Pekoe"
        },
        {
                  "en": "Darjeeling first flush",
                  "es": "Darjeeling primera cosecha",
                  "de": "Darjeeling First Flush",
                  "nl": "Darjeeling eerste oogst"
        },
        {
                  "en": "Assam FTGFOP",
                  "es": "Assam FTGFOP",
                  "de": "Assam FTGFOP",
                  "nl": "Assam FTGFOP"
        },
        {
                  "en": "Earl Grey",
                  "es": "Earl Grey",
                  "de": "Earl Grey",
                  "nl": "Earl Grey"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Darjeeling first flush is called the 'champagne of teas' due to its delicate, light, and complex flavor profile.",
                  "es": "El Darjeeling primera cosecha se llama el 'champán de los tés' debido a su perfil de sabor delicado, ligero y complejo.",
                  "de": "Darjeeling First Flush wird 'Champagner der Tees' genannt wegen seines delikaten, leichten und komplexen Geschmacksprofils.",
                  "nl": "Darjeeling eerste oogst wordt de 'champagne van de theeën' genoemd vanwege zijn delicate, lichte en complexe smaakprofiel."
        }
      },
      {
        question: {
                  "en": "What country is the largest producer of tea in the world?",
                  "es": "¿Qué país es el mayor productor de té del mundo?",
                  "de": "Welches Land ist der größte Teeproduzent der Welt?",
                  "nl": "Welk land is de grootste theeproducent ter wereld?"
        },
        options: [
        {
                  "en": "India",
                  "es": "India",
                  "de": "Indien",
                  "nl": "India"
        },
        {
                  "en": "Sri Lanka",
                  "es": "Sri Lanka",
                  "de": "Sri Lanka",
                  "nl": "Sri Lanka"
        },
        {
                  "en": "China",
                  "es": "China",
                  "de": "China",
                  "nl": "China"
        },
        {
                  "en": "Kenya",
                  "es": "Kenia",
                  "de": "Kenia",
                  "nl": "Kenia"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "China is the world's largest tea producer, producing over 2.4 million tons annually and home to numerous tea varieties.",
                  "es": "China es el mayor productor de té del mundo, produciendo más de 2.4 millones de toneladas anuales y hogar de numerosas variedades de té.",
                  "de": "China ist der weltgrößte Teeproduzent mit über 2,4 Millionen Tonnen jährlich und Heimat zahlreicher Teesorten.",
                  "nl": "China is 's werelds grootste theeproducent en produceert jaarlijks meer dan 2,4 miljoen ton en heeft talloze theesoorten."
        }
      },
      {
        question: {
                  "en": "What type of tea is Lapsang Souchong?",
                  "es": "¿Qué tipo de té es Lapsang Souchong?",
                  "de": "Welche Art Tee ist Lapsang Souchong?",
                  "nl": "Wat voor soort thee is Lapsang Souchong?"
        },
        options: [
        {
                  "en": "Pu-erh tea",
                  "es": "Té Pu-erh",
                  "de": "Pu-erh Tee",
                  "nl": "Pu-erh thee"
        },
        {
                  "en": "Green tea",
                  "es": "Té verde",
                  "de": "Grüner Tee",
                  "nl": "Groene thee"
        },
        {
                  "en": "White tea",
                  "es": "Té blanco",
                  "de": "Weißer Tee",
                  "nl": "Witte thee"
        },
        {
                  "en": "Smoked black tea",
                  "es": "Té negro ahumado",
                  "de": "Geräucherter schwarzer Tee",
                  "nl": "Gerookte zwarte thee"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Lapsang Souchong is a smoked black tea from China's Fujian province, dried over pinewood fires giving it a distinctive smoky flavor.",
                  "es": "Lapsang Souchong es un té negro ahumado de la provincia Fujian de China, secado sobre fuegos de pino que le dan un sabor ahumado distintivo.",
                  "de": "Lapsang Souchong ist ein geräucherter schwarzer Tee aus Chinas Fujian-Provinz, über Pinienholzfeuern getrocknet mit charakteristischem Rauchgeschmack.",
                  "nl": "Lapsang Souchong is een gerookte zwarte thee uit de Chinese provincie Fujian, gedroogd boven dennenhout vuren wat een kenmerkende rokerige smaak geeft."
        }
      },
      {
        question: {
                  "en": "What is the primary difference between Ceylon and Assam tea?",
                  "es": "¿Cuál es la diferencia principal entre el té Ceylon y Assam?",
                  "de": "Was ist der Hauptunterschied zwischen Ceylon- und Assam-Tee?",
                  "nl": "Wat is het belangrijkste verschil tussen Ceylon en Assam thee?"
        },
        options: [
        {
                  "en": "No difference, same origin",
                  "es": "Sin diferencia, mismo origen",
                  "de": "Kein Unterschied, gleiche Herkunft",
                  "nl": "Geen verschil, zelfde oorsprong"
        },
        {
                  "en": "Ceylon is green, Assam is black",
                  "es": "Ceylon es verde, Assam es negro",
                  "de": "Ceylon ist grün, Assam ist schwarz",
                  "nl": "Ceylon is groen, Assam is zwart"
        },
        {
                  "en": "Ceylon is lighter and brighter, Assam is malty and robust",
                  "es": "Ceylon es más ligero y brillante, Assam es malteado y robusto",
                  "de": "Ceylon ist leichter und heller, Assam ist malzig und kräftig",
                  "nl": "Ceylon is lichter en helderder, Assam is moutig en robuust"
        },
        {
                  "en": "Ceylon is fermented, Assam is not",
                  "es": "Ceylon está fermentado, Assam no",
                  "de": "Ceylon ist fermentiert, Assam nicht",
                  "nl": "Ceylon is gefermenteerd, Assam niet"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ceylon tea from Sri Lanka is known for its bright, crisp flavor, while Assam tea from India is malty, robust, and often used in breakfast blends.",
                  "es": "El té Ceylon de Sri Lanka es conocido por su sabor brillante y fresco, mientras que el té Assam de India es malteado, robusto y a menudo usado en mezclas de desayuno.",
                  "de": "Ceylon-Tee aus Sri Lanka ist bekannt für seinen hellen, frischen Geschmack, während Assam-Tee aus Indien malzig, kräftig ist und oft in Frühstücksmischungen verwendet wird.",
                  "nl": "Ceylon thee uit Sri Lanka staat bekend om zijn heldere, frisse smaak, terwijl Assam thee uit India moutig en robuust is en vaak in ontbijtmengsels wordt gebruikt."
        }
      },
      {
        question: {
                  "en": "What makes white tea different from other tea types?",
                  "es": "¿Qué hace diferente al té blanco de otros tipos de té?",
                  "de": "Was macht weißen Tee anders als andere Teetypen?",
                  "nl": "Wat maakt witte thee anders dan andere theetypes?"
        },
        options: [
        {
                  "en": "It's bleached white",
                  "es": "Está blanqueado",
                  "de": "Es ist weiß gebleicht",
                  "nl": "Het is wit gebleekt"
        },
        {
                  "en": "It's mixed with milk",
                  "es": "Está mezclado con leche",
                  "de": "Es ist mit Milch gemischt",
                  "nl": "Het is gemengd met melk"
        },
        {
                  "en": "It's heavily oxidized",
                  "es": "Está muy oxidado",
                  "de": "Es ist stark oxidiert",
                  "nl": "Het is sterk geoxideerd"
        },
        {
                  "en": "It uses only young buds and minimal processing",
                  "es": "Usa solo brotes jóvenes y procesamiento mínimo",
                  "de": "Es verwendet nur junge Knospen und minimale Verarbeitung",
                  "nl": "Het gebruikt alleen jonge knoppen en minimale verwerking"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "White tea is the least processed tea, made from young buds and leaves that are simply withered and dried, preserving delicate flavors.",
                  "es": "El té blanco es el té menos procesado, hecho de brotes y hojas jóvenes que simplemente se marchitan y secan, preservando sabores delicados.",
                  "de": "Weißer Tee ist der am wenigsten verarbeitete Tee, aus jungen Knospen und Blättern gemacht, die einfach welken und trocknen, wodurch delikate Aromen erhalten bleiben.",
                  "nl": "Witte thee is de minst verwerkte thee, gemaakt van jonge knoppen en bladeren die simpelweg verwelkt en gedroogd worden, waardoor delicate smaken behouden blijven."
        }
      },
      {
        question: {
                  "en": "Which Japanese tea is traditionally used in tea ceremonies?",
                  "es": "¿Qué té japonés se usa tradicionalmente en ceremonias de té?",
                  "de": "Welcher japanische Tee wird traditionell in Teezeremonien verwendet?",
                  "nl": "Welke Japanse thee wordt traditioneel gebruikt in theeceremoniën?"
        },
        options: [
        {
                  "en": "Sencha",
                  "es": "Sencha",
                  "de": "Sencha",
                  "nl": "Sencha"
        },
        {
                  "en": "Matcha",
                  "es": "Matcha",
                  "de": "Matcha",
                  "nl": "Matcha"
        },
        {
                  "en": "Hojicha",
                  "es": "Hojicha",
                  "de": "Hojicha",
                  "nl": "Hojicha"
        },
        {
                  "en": "Genmaicha",
                  "es": "Genmaicha",
                  "de": "Genmaicha",
                  "nl": "Genmaicha"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Matcha, a powdered green tea, is the traditional tea used in Japanese tea ceremonies (chanoyu), whisked with hot water to create a frothy beverage.",
                  "es": "Matcha, un té verde en polvo, es el té tradicional usado en ceremonias de té japonesas (chanoyu), batido con agua caliente para crear una bebida espumosa.",
                  "de": "Matcha, ein pulverisierter grüner Tee, ist der traditionelle Tee in japanischen Teezeremonien (chanoyu), mit heißem Wasser aufgeschlagen zu einem schaumigen Getränk.",
                  "nl": "Matcha, een gepoederde groene thee, is de traditionele thee in Japanse theeceremoniën (chanoyu), geklopt met heet water tot een schuimig drankje."
        }
      },
      {
        question: {
                  "en": "What plant does tea come from?",
                  "es": "What plant does tea come from?",
                  "de": "What plant does tea come from?",
                  "nl": "What plant does tea come from?"
        },
        options: [
        {
                  "en": "Mint plant",
                  "es": "Mint plant",
                  "de": "Mint plant",
                  "nl": "Mint plant"
        },
        {
                  "en": "Camellia sinensis",
                  "es": "Camellia sinensis",
                  "de": "Camellia sinensis",
                  "nl": "Camellia sinensis"
        },
        {
                  "en": "Jasmine plant",
                  "es": "Jasmine plant",
                  "de": "Jasmine plant",
                  "nl": "Jasmine plant"
        },
        {
                  "en": "Tea tree",
                  "es": "Tea tree",
                  "de": "Tea tree",
                  "nl": "Tea tree"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "All true tea comes from the Camellia sinensis plant.",
                  "es": "All true tea comes from the Camellia sinensis plant.",
                  "de": "All true tea comes from the Camellia sinensis plant.",
                  "nl": "All true tea comes from the Camellia sinensis plant."
        }
      },
      {
        question: {
                  "en": "What are the main types of tea?",
                  "es": "What are the main types of tea?",
                  "de": "What are the main types of tea?",
                  "nl": "What are the main types of tea?"
        },
        options: [
        {
                  "en": "Black, green, white, oolong, pu-erh",
                  "es": "Black, green, white, oolong, pu-erh",
                  "de": "Black, green, white, oolong, pu-erh",
                  "nl": "Black, green, white, oolong, pu-erh"
        },
        {
                  "en": "Hot and iced",
                  "es": "Hot and iced",
                  "de": "Hot and iced",
                  "nl": "Hot and iced"
        },
        {
                  "en": "Herbal, fruit, spice",
                  "es": "Herbal, fruit, spice",
                  "de": "Herbal, fruit, spice",
                  "nl": "Herbal, fruit, spice"
        },
        {
                  "en": "Chinese and Indian",
                  "es": "Chinese and Indian",
                  "de": "Chinese and Indian",
                  "nl": "Chinese and Indian"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The main types of true tea are black, green, white, oolong, and pu-erh, all from the same plant.",
                  "es": "The main types of true tea are black, green, white, oolong, and pu-erh, all from the same plant.",
                  "de": "The main types of true tea are black, green, white, oolong, and pu-erh, all from the same plant.",
                  "nl": "The main types of true tea are black, green, white, oolong, and pu-erh, all from the same plant."
        }
      },
      {
        question: {
                  "en": "What is the difference between black and green tea?",
                  "es": "What is the difference between black and green tea?",
                  "de": "What is the difference between black and green tea?",
                  "nl": "What is the difference between black and green tea?"
        },
        options: [
        {
                  "en": "Growing region",
                  "es": "Growing region",
                  "de": "Growing region",
                  "nl": "Growing region"
        },
        {
                  "en": "Level of oxidation",
                  "es": "Level of oxidation",
                  "de": "Level of oxidation",
                  "nl": "Level of oxidation"
        },
        {
                  "en": "Caffeine content",
                  "es": "Caffeine content",
                  "de": "Caffeine content",
                  "nl": "Caffeine content"
        },
        {
                  "en": "Different plants",
                  "es": "Different plants",
                  "de": "Different plants",
                  "nl": "Different plants"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The difference is oxidation: black tea is fully oxidized, green tea is minimally oxidized.",
                  "es": "The difference is oxidation: black tea is fully oxidized, green tea is minimally oxidized.",
                  "de": "The difference is oxidation: black tea is fully oxidized, green tea is minimally oxidized.",
                  "nl": "The difference is oxidation: black tea is fully oxidized, green tea is minimally oxidized."
        }
      },
      {
        question: {
                  "en": "What country produces the most tea?",
                  "es": "What country produces the most tea?",
                  "de": "What country produces the most tea?",
                  "nl": "What country produces the most tea?"
        },
        options: [
        {
                  "en": "Sri Lanka",
                  "es": "Sri Lanka",
                  "de": "Sri Lanka",
                  "nl": "Sri Lanka"
        },
        {
                  "en": "Japan",
                  "es": "Japan",
                  "de": "Japan",
                  "nl": "Japan"
        },
        {
                  "en": "India",
                  "es": "India",
                  "de": "India",
                  "nl": "India"
        },
        {
                  "en": "China",
                  "es": "China",
                  "de": "China",
                  "nl": "China"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "China is the world's largest tea producer.",
                  "es": "China is the world's largest tea producer.",
                  "de": "China is the world's largest tea producer.",
                  "nl": "China is the world's largest tea producer."
        }
      },
      {
        question: {
                  "en": "What is Earl Grey tea?",
                  "es": "What is Earl Grey tea?",
                  "de": "What is Earl Grey tea?",
                  "nl": "What is Earl Grey tea?"
        },
        options: [
        {
                  "en": "Green tea",
                  "es": "Green tea",
                  "de": "Green tea",
                  "nl": "Green tea"
        },
        {
                  "en": "Herbal tea",
                  "es": "Herbal tea",
                  "de": "Herbal tea",
                  "nl": "Herbal tea"
        },
        {
                  "en": "Black tea flavored with bergamot",
                  "es": "Black tea flavored with bergamot",
                  "de": "Black tea flavored with bergamot",
                  "nl": "Black tea flavored with bergamot"
        },
        {
                  "en": "White tea",
                  "es": "White tea",
                  "de": "White tea",
                  "nl": "White tea"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Earl Grey is black tea flavored with oil from the bergamot orange.",
                  "es": "Earl Grey is black tea flavored with oil from the bergamot orange.",
                  "de": "Earl Grey is black tea flavored with oil from the bergamot orange.",
                  "nl": "Earl Grey is black tea flavored with oil from the bergamot orange."
        }
      },
      {
        question: {
                  "en": "What is matcha?",
                  "es": "What is matcha?",
                  "de": "What is matcha?",
                  "nl": "What is matcha?"
        },
        options: [
        {
                  "en": "Fermented tea",
                  "es": "Fermented tea",
                  "de": "Fermented tea",
                  "nl": "Fermented tea"
        },
        {
                  "en": "Black tea",
                  "es": "Black tea",
                  "de": "Black tea",
                  "nl": "Black tea"
        },
        {
                  "en": "Herbal tea",
                  "es": "Herbal tea",
                  "de": "Herbal tea",
                  "nl": "Herbal tea"
        },
        {
                  "en": "Powdered green tea",
                  "es": "Powdered green tea",
                  "de": "Powdered green tea",
                  "nl": "Powdered green tea"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Matcha is a fine powder made from specially grown and processed green tea leaves.",
                  "es": "Matcha is a fine powder made from specially grown and processed green tea leaves.",
                  "de": "Matcha is a fine powder made from specially grown and processed green tea leaves.",
                  "nl": "Matcha is a fine powder made from specially grown and processed green tea leaves."
        }
      },
      {
        question: {
                  "en": "What is oolong tea?",
                  "es": "What is oolong tea?",
                  "de": "What is oolong tea?",
                  "nl": "What is oolong tea?"
        },
        options: [
        {
                  "en": "Herbal tea",
                  "es": "Herbal tea",
                  "de": "Herbal tea",
                  "nl": "Herbal tea"
        },
        {
                  "en": "Unoxidized tea",
                  "es": "Unoxidized tea",
                  "de": "Unoxidized tea",
                  "nl": "Unoxidized tea"
        },
        {
                  "en": "Partially oxidized tea",
                  "es": "Partially oxidized tea",
                  "de": "Partially oxidized tea",
                  "nl": "Partially oxidized tea"
        },
        {
                  "en": "Fully oxidized tea",
                  "es": "Fully oxidized tea",
                  "de": "Fully oxidized tea",
                  "nl": "Fully oxidized tea"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Oolong tea is partially oxidized, falling between green and black tea in processing.",
                  "es": "Oolong tea is partially oxidized, falling between green and black tea in processing.",
                  "de": "Oolong tea is partially oxidized, falling between green and black tea in processing.",
                  "nl": "Oolong tea is partially oxidized, falling between green and black tea in processing."
        }
      },
      {
        question: {
                  "en": "What is herbal tea technically called?",
                  "es": "What is herbal tea technically called?",
                  "de": "What is herbal tea technically called?",
                  "nl": "What is herbal tea technically called?"
        },
        options: [
        {
                  "en": "False tea",
                  "es": "False tea",
                  "de": "False tea",
                  "nl": "False tea"
        },
        {
                  "en": "Tisane or herbal infusion",
                  "es": "Tisane or herbal infusion",
                  "de": "Tisane or herbal infusion",
                  "nl": "Tisane or herbal infusion"
        },
        {
                  "en": "Herbal blend",
                  "es": "Herbal blend",
                  "de": "Herbal blend",
                  "nl": "Herbal blend"
        },
        {
                  "en": "Plant tea",
                  "es": "Plant tea",
                  "de": "Plant tea",
                  "nl": "Plant tea"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Herbal 'tea' is technically called a tisane, as it doesn't come from the tea plant.",
                  "es": "Herbal 'tea' is technically called a tisane, as it doesn't come from the tea plant.",
                  "de": "Herbal 'tea' is technically called a tisane, as it doesn't come from the tea plant.",
                  "nl": "Herbal 'tea' is technically called a tisane, as it doesn't come from the tea plant."
        }
      },
      {
        question: {
                  "en": "What is white tea?",
                  "es": "What is white tea?",
                  "de": "What is white tea?",
                  "nl": "What is white tea?"
        },
        options: [
        {
                  "en": "Tea with milk",
                  "es": "Tea with milk",
                  "de": "Tea with milk",
                  "nl": "Tea with milk"
        },
        {
                  "en": "Bleached tea",
                  "es": "Bleached tea",
                  "de": "Bleached tea",
                  "nl": "Bleached tea"
        },
        {
                  "en": "Minimally processed tea from young leaves",
                  "es": "Minimally processed tea from young leaves",
                  "de": "Minimally processed tea from young leaves",
                  "nl": "Minimally processed tea from young leaves"
        },
        {
                  "en": "Caffeine-free tea",
                  "es": "Caffeine-free tea",
                  "de": "Caffeine-free tea",
                  "nl": "Caffeine-free tea"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "White tea is made from young leaves and buds with minimal processing and oxidation.",
                  "es": "White tea is made from young leaves and buds with minimal processing and oxidation.",
                  "de": "White tea is made from young leaves and buds with minimal processing and oxidation.",
                  "nl": "White tea is made from young leaves and buds with minimal processing and oxidation."
        }
      },
      {
        question: {
                  "en": "What is chai?",
                  "es": "What is chai?",
                  "de": "What is chai?",
                  "nl": "What is chai?"
        },
        options: [
        {
                  "en": "Iced tea",
                  "es": "Iced tea",
                  "de": "Iced tea",
                  "nl": "Iced tea"
        },
        {
                  "en": "Spiced tea, often with milk",
                  "es": "Spiced tea, often with milk",
                  "de": "Spiced tea, often with milk",
                  "nl": "Spiced tea, often with milk"
        },
        {
                  "en": "Green tea",
                  "es": "Green tea",
                  "de": "Green tea",
                  "nl": "Green tea"
        },
        {
                  "en": "Chinese tea",
                  "es": "Chinese tea",
                  "de": "Chinese tea",
                  "nl": "Chinese tea"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Chai (or masala chai) is black tea brewed with spices and usually milk and sweetener.",
                  "es": "Chai (or masala chai) is black tea brewed with spices and usually milk and sweetener.",
                  "de": "Chai (or masala chai) is black tea brewed with spices and usually milk and sweetener.",
                  "nl": "Chai (or masala chai) is black tea brewed with spices and usually milk and sweetener."
        }
      },
      {
        question: {
                  "en": "What temperature should green tea be brewed at?",
                  "es": "What temperature should green tea be brewed at?",
                  "de": "What temperature should green tea be brewed at?",
                  "nl": "What temperature should green tea be brewed at?"
        },
        options: [
        {
                  "en": "Boiling (212°F/100°C)",
                  "es": "Boiling (212°F/100°C)",
                  "de": "Boiling (212°F/100°C)",
                  "nl": "Boiling (212°F/100°C)"
        },
        {
                  "en": "140°F (60°C)",
                  "es": "140°F (60°C)",
                  "de": "140°F (60°C)",
                  "nl": "140°F (60°C)"
        },
        {
                  "en": "Room temperature",
                  "es": "Room temperature",
                  "de": "Room temperature",
                  "nl": "Room temperature"
        },
        {
                  "en": "160-180°F (70-80°C)",
                  "es": "160-180°F (70-80°C)",
                  "de": "160-180°F (70-80°C)",
                  "nl": "160-180°F (70-80°C)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Green tea should be brewed at cooler temperatures than black tea to avoid bitterness.",
                  "es": "Green tea should be brewed at cooler temperatures than black tea to avoid bitterness.",
                  "de": "Green tea should be brewed at cooler temperatures than black tea to avoid bitterness.",
                  "nl": "Green tea should be brewed at cooler temperatures than black tea to avoid bitterness."
        }
      },
      {
        question: {
                  "en": "What is Darjeeling tea?",
                  "es": "What is Darjeeling tea?",
                  "de": "What is Darjeeling tea?",
                  "nl": "What is Darjeeling tea?"
        },
        options: [
        {
                  "en": "Green tea",
                  "es": "Green tea",
                  "de": "Green tea",
                  "nl": "Green tea"
        },
        {
                  "en": "Herbal tea",
                  "es": "Herbal tea",
                  "de": "Herbal tea",
                  "nl": "Herbal tea"
        },
        {
                  "en": "Chinese tea",
                  "es": "Chinese tea",
                  "de": "Chinese tea",
                  "nl": "Chinese tea"
        },
        {
                  "en": "Black tea from Darjeeling, India",
                  "es": "Black tea from Darjeeling, India",
                  "de": "Black tea from Darjeeling, India",
                  "nl": "Black tea from Darjeeling, India"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Darjeeling is a premium black tea grown in the Darjeeling region of India.",
                  "es": "Darjeeling is a premium black tea grown in the Darjeeling region of India.",
                  "de": "Darjeeling is a premium black tea grown in the Darjeeling region of India.",
                  "nl": "Darjeeling is a premium black tea grown in the Darjeeling region of India."
        }
      },
      {
        question: {
                  "en": "What is pu-erh tea?",
                  "es": "What is pu-erh tea?",
                  "de": "What is pu-erh tea?",
                  "nl": "What is pu-erh tea?"
        },
        options: [
        {
                  "en": "Fermented and aged tea",
                  "es": "Fermented and aged tea",
                  "de": "Fermented and aged tea",
                  "nl": "Fermented and aged tea"
        },
        {
                  "en": "Iced tea",
                  "es": "Iced tea",
                  "de": "Iced tea",
                  "nl": "Iced tea"
        },
        {
                  "en": "Instant tea",
                  "es": "Instant tea",
                  "de": "Instant tea",
                  "nl": "Instant tea"
        },
        {
                  "en": "Fresh green tea",
                  "es": "Fresh green tea",
                  "de": "Fresh green tea",
                  "nl": "Fresh green tea"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Pu-erh is a fermented tea that can be aged for years, from Yunnan, China.",
                  "es": "Pu-erh is a fermented tea that can be aged for years, from Yunnan, China.",
                  "de": "Pu-erh is a fermented tea that can be aged for years, from Yunnan, China.",
                  "nl": "Pu-erh is a fermented tea that can be aged for years, from Yunnan, China."
        }
      },
      {
        question: {
                  "en": "What is rooibos?",
                  "es": "What is rooibos?",
                  "de": "What is rooibos?",
                  "nl": "What is rooibos?"
        },
        options: [
        {
                  "en": "South African herbal tea (not true tea)",
                  "es": "South African herbal tea (not true tea)",
                  "de": "South African herbal tea (not true tea)",
                  "nl": "South African herbal tea (not true tea)"
        },
        {
                  "en": "Black tea",
                  "es": "Black tea",
                  "de": "Black tea",
                  "nl": "Black tea"
        },
        {
                  "en": "Green tea",
                  "es": "Green tea",
                  "de": "Green tea",
                  "nl": "Green tea"
        },
        {
                  "en": "White tea",
                  "es": "White tea",
                  "de": "White tea",
                  "nl": "White tea"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Rooibos is an herbal infusion from South Africa, not from the tea plant.",
                  "es": "Rooibos is an herbal infusion from South Africa, not from the tea plant.",
                  "de": "Rooibos is an herbal infusion from South Africa, not from the tea plant.",
                  "nl": "Rooibos is an herbal infusion from South Africa, not from the tea plant."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a tea infuser?",
                  "es": "What is the purpose of a tea infuser?",
                  "de": "What is the purpose of a tea infuser?",
                  "nl": "What is the purpose of a tea infuser?"
        },
        options: [
        {
                  "en": "Cool tea",
                  "es": "Cool tea",
                  "de": "Cool tea",
                  "nl": "Cool tea"
        },
        {
                  "en": "Hold loose tea leaves while brewing",
                  "es": "Hold loose tea leaves while brewing",
                  "de": "Hold loose tea leaves while brewing",
                  "nl": "Hold loose tea leaves while brewing"
        },
        {
                  "en": "Filter water",
                  "es": "Filter water",
                  "de": "Filter water",
                  "nl": "Filter water"
        },
        {
                  "en": "Sweeten tea",
                  "es": "Sweeten tea",
                  "de": "Sweeten tea",
                  "nl": "Sweeten tea"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A tea infuser holds loose tea leaves while they steep, keeping them contained for easy removal.",
                  "es": "A tea infuser holds loose tea leaves while they steep, keeping them contained for easy removal.",
                  "de": "A tea infuser holds loose tea leaves while they steep, keeping them contained for easy removal.",
                  "nl": "A tea infuser holds loose tea leaves while they steep, keeping them contained for easy removal."
        }
      },
      {
        question: {
                  "en": "What is bubble tea?",
                  "es": "What is bubble tea?",
                  "de": "What is bubble tea?",
                  "nl": "What is bubble tea?"
        },
        options: [
        {
                  "en": "Foamy tea",
                  "es": "Foamy tea",
                  "de": "Foamy tea",
                  "nl": "Foamy tea"
        },
        {
                  "en": "Sparkling tea",
                  "es": "Sparkling tea",
                  "de": "Sparkling tea",
                  "nl": "Sparkling tea"
        },
        {
                  "en": "Carbonated tea",
                  "es": "Carbonated tea",
                  "de": "Carbonated tea",
                  "nl": "Carbonated tea"
        },
        {
                  "en": "Tea with tapioca pearls",
                  "es": "Tea with tapioca pearls",
                  "de": "Tea with tapioca pearls",
                  "nl": "Tea with tapioca pearls"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Bubble tea (boba tea) is tea mixed with milk or fruit and chewy tapioca pearls.",
                  "es": "Bubble tea (boba tea) is tea mixed with milk or fruit and chewy tapioca pearls.",
                  "de": "Bubble tea (boba tea) is tea mixed with milk or fruit and chewy tapioca pearls.",
                  "nl": "Bubble tea (boba tea) is tea mixed with milk or fruit and chewy tapioca pearls."
        }
      },
      {
        question: {
                  "en": "What is the caffeine content of tea vs coffee?",
                  "es": "What is the caffeine content of tea vs coffee?",
                  "de": "What is the caffeine content of tea vs coffee?",
                  "nl": "What is the caffeine content of tea vs coffee?"
        },
        options: [
        {
                  "en": "Tea typically has less caffeine than coffee",
                  "es": "Tea typically has less caffeine than coffee",
                  "de": "Tea typically has less caffeine than coffee",
                  "nl": "Tea typically has less caffeine than coffee"
        },
        {
                  "en": "Tea has no caffeine",
                  "es": "Tea has no caffeine",
                  "de": "Tea has no caffeine",
                  "nl": "Tea has no caffeine"
        },
        {
                  "en": "Tea has more caffeine",
                  "es": "Tea has more caffeine",
                  "de": "Tea has more caffeine",
                  "nl": "Tea has more caffeine"
        },
        {
                  "en": "Same amount",
                  "es": "Same amount",
                  "de": "Same amount",
                  "nl": "Same amount"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Tea generally contains less caffeine than coffee, though amounts vary by type and brewing.",
                  "es": "Tea generally contains less caffeine than coffee, though amounts vary by type and brewing.",
                  "de": "Tea generally contains less caffeine than coffee, though amounts vary by type and brewing.",
                  "nl": "Tea generally contains less caffeine than coffee, though amounts vary by type and brewing."
        }
      },
      {
        question: {
                  "en": "What is jasmine tea?",
                  "es": "What is jasmine tea?",
                  "de": "What is jasmine tea?",
                  "nl": "What is jasmine tea?"
        },
        options: [
        {
                  "en": "Tea from jasmine plant",
                  "es": "Tea from jasmine plant",
                  "de": "Tea from jasmine plant",
                  "nl": "Tea from jasmine plant"
        },
        {
                  "en": "Sweet tea",
                  "es": "Sweet tea",
                  "de": "Sweet tea",
                  "nl": "Sweet tea"
        },
        {
                  "en": "Tea scented with jasmine flowers",
                  "es": "Tea scented with jasmine flowers",
                  "de": "Tea scented with jasmine flowers",
                  "nl": "Tea scented with jasmine flowers"
        },
        {
                  "en": "Herbal tea",
                  "es": "Herbal tea",
                  "de": "Herbal tea",
                  "nl": "Herbal tea"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Jasmine tea is typically green tea scented with jasmine flowers.",
                  "es": "Jasmine tea is typically green tea scented with jasmine flowers.",
                  "de": "Jasmine tea is typically green tea scented with jasmine flowers.",
                  "nl": "Jasmine tea is typically green tea scented with jasmine flowers."
        }
      },
      {
        question: {
                  "en": "What is English Breakfast tea?",
                  "es": "What is English Breakfast tea?",
                  "de": "What is English Breakfast tea?",
                  "nl": "What is English Breakfast tea?"
        },
        options: [
        {
                  "en": "Tea served at breakfast only",
                  "es": "Tea served at breakfast only",
                  "de": "Tea served at breakfast only",
                  "nl": "Tea served at breakfast only"
        },
        {
                  "en": "Blend of black teas",
                  "es": "Blend of black teas",
                  "de": "Blend of black teas",
                  "nl": "Blend of black teas"
        },
        {
                  "en": "Herbal tea",
                  "es": "Herbal tea",
                  "de": "Herbal tea",
                  "nl": "Herbal tea"
        },
        {
                  "en": "White tea",
                  "es": "White tea",
                  "de": "White tea",
                  "nl": "White tea"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "English Breakfast is a traditional blend of black teas, typically served with milk.",
                  "es": "English Breakfast is a traditional blend of black teas, typically served with milk.",
                  "de": "English Breakfast is a traditional blend of black teas, typically served with milk.",
                  "nl": "English Breakfast is a traditional blend of black teas, typically served with milk."
        }
      },
      {
        question: {
                  "en": "What are tea bags made of?",
                  "es": "What are tea bags made of?",
                  "de": "What are tea bags made of?",
                  "nl": "What are tea bags made of?"
        },
        options: [
        {
                  "en": "Cotton",
                  "es": "Cotton",
                  "de": "Cotton",
                  "nl": "Cotton"
        },
        {
                  "en": "Plastic",
                  "es": "Plastic",
                  "de": "Plastic",
                  "nl": "Plastic"
        },
        {
                  "en": "Metal mesh",
                  "es": "Metal mesh",
                  "de": "Metal mesh",
                  "nl": "Metal mesh"
        },
        {
                  "en": "Filter paper or silk with tea inside",
                  "es": "Filter paper or silk with tea inside",
                  "de": "Filter paper or silk with tea inside",
                  "nl": "Filter paper or silk with tea inside"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Tea bags are typically made of filter paper, silk, or other porous material filled with tea leaves.",
                  "es": "Tea bags are typically made of filter paper, silk, or other porous material filled with tea leaves.",
                  "de": "Tea bags are typically made of filter paper, silk, or other porous material filled with tea leaves.",
                  "nl": "Tea bags are typically made of filter paper, silk, or other porous material filled with tea leaves."
        }
      },
      {
        question: {
                  "en": "What plant does tea come from?",
                  "es": "What plant does tea come from?",
                  "de": "What plant does tea come from?",
                  "nl": "What plant does tea come from?"
        },
        options: [
        {
                  "en": "Mint plant",
                  "es": "Mint plant",
                  "de": "Mint plant",
                  "nl": "Mint plant"
        },
        {
                  "en": "Camellia sinensis",
                  "es": "Camellia sinensis",
                  "de": "Camellia sinensis",
                  "nl": "Camellia sinensis"
        },
        {
                  "en": "Jasmine plant",
                  "es": "Jasmine plant",
                  "de": "Jasmine plant",
                  "nl": "Jasmine plant"
        },
        {
                  "en": "Tea tree",
                  "es": "Tea tree",
                  "de": "Tea tree",
                  "nl": "Tea tree"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "All true tea comes from the Camellia sinensis plant.",
                  "es": "All true tea comes from the Camellia sinensis plant.",
                  "de": "All true tea comes from the Camellia sinensis plant.",
                  "nl": "All true tea comes from the Camellia sinensis plant."
        }
      },
      {
        question: {
                  "en": "What are the main types of tea?",
                  "es": "What are the main types of tea?",
                  "de": "What are the main types of tea?",
                  "nl": "What are the main types of tea?"
        },
        options: [
        {
                  "en": "Chinese and Indian",
                  "es": "Chinese and Indian",
                  "de": "Chinese and Indian",
                  "nl": "Chinese and Indian"
        },
        {
                  "en": "Black, green, white, oolong, pu-erh",
                  "es": "Black, green, white, oolong, pu-erh",
                  "de": "Black, green, white, oolong, pu-erh",
                  "nl": "Black, green, white, oolong, pu-erh"
        },
        {
                  "en": "Herbal, fruit, spice",
                  "es": "Herbal, fruit, spice",
                  "de": "Herbal, fruit, spice",
                  "nl": "Herbal, fruit, spice"
        },
        {
                  "en": "Hot and iced",
                  "es": "Hot and iced",
                  "de": "Hot and iced",
                  "nl": "Hot and iced"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The main types of true tea are black, green, white, oolong, and pu-erh, all from the same plant.",
                  "es": "The main types of true tea are black, green, white, oolong, and pu-erh, all from the same plant.",
                  "de": "The main types of true tea are black, green, white, oolong, and pu-erh, all from the same plant.",
                  "nl": "The main types of true tea are black, green, white, oolong, and pu-erh, all from the same plant."
        }
      },
      {
        question: {
                  "en": "What is the difference between black and green tea?",
                  "es": "What is the difference between black and green tea?",
                  "de": "What is the difference between black and green tea?",
                  "nl": "What is the difference between black and green tea?"
        },
        options: [
        {
                  "en": "Different plants",
                  "es": "Different plants",
                  "de": "Different plants",
                  "nl": "Different plants"
        },
        {
                  "en": "Level of oxidation",
                  "es": "Level of oxidation",
                  "de": "Level of oxidation",
                  "nl": "Level of oxidation"
        },
        {
                  "en": "Caffeine content",
                  "es": "Caffeine content",
                  "de": "Caffeine content",
                  "nl": "Caffeine content"
        },
        {
                  "en": "Growing region",
                  "es": "Growing region",
                  "de": "Growing region",
                  "nl": "Growing region"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The difference is oxidation: black tea is fully oxidized, green tea is minimally oxidized.",
                  "es": "The difference is oxidation: black tea is fully oxidized, green tea is minimally oxidized.",
                  "de": "The difference is oxidation: black tea is fully oxidized, green tea is minimally oxidized.",
                  "nl": "The difference is oxidation: black tea is fully oxidized, green tea is minimally oxidized."
        }
      },
      {
        question: {
                  "en": "What country produces the most tea?",
                  "es": "What country produces the most tea?",
                  "de": "What country produces the most tea?",
                  "nl": "What country produces the most tea?"
        },
        options: [
        {
                  "en": "Japan",
                  "es": "Japan",
                  "de": "Japan",
                  "nl": "Japan"
        },
        {
                  "en": "China",
                  "es": "China",
                  "de": "China",
                  "nl": "China"
        },
        {
                  "en": "India",
                  "es": "India",
                  "de": "India",
                  "nl": "India"
        },
        {
                  "en": "Sri Lanka",
                  "es": "Sri Lanka",
                  "de": "Sri Lanka",
                  "nl": "Sri Lanka"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "China is the world's largest tea producer.",
                  "es": "China is the world's largest tea producer.",
                  "de": "China is the world's largest tea producer.",
                  "nl": "China is the world's largest tea producer."
        }
      },
      {
        question: {
                  "en": "What is Earl Grey tea?",
                  "es": "What is Earl Grey tea?",
                  "de": "What is Earl Grey tea?",
                  "nl": "What is Earl Grey tea?"
        },
        options: [
        {
                  "en": "Green tea",
                  "es": "Green tea",
                  "de": "Green tea",
                  "nl": "Green tea"
        },
        {
                  "en": "White tea",
                  "es": "White tea",
                  "de": "White tea",
                  "nl": "White tea"
        },
        {
                  "en": "Black tea flavored with bergamot",
                  "es": "Black tea flavored with bergamot",
                  "de": "Black tea flavored with bergamot",
                  "nl": "Black tea flavored with bergamot"
        },
        {
                  "en": "Herbal tea",
                  "es": "Herbal tea",
                  "de": "Herbal tea",
                  "nl": "Herbal tea"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Earl Grey is black tea flavored with oil from the bergamot orange.",
                  "es": "Earl Grey is black tea flavored with oil from the bergamot orange.",
                  "de": "Earl Grey is black tea flavored with oil from the bergamot orange.",
                  "nl": "Earl Grey is black tea flavored with oil from the bergamot orange."
        }
      },
      {
        question: {
                  "en": "What is matcha?",
                  "es": "What is matcha?",
                  "de": "What is matcha?",
                  "nl": "What is matcha?"
        },
        options: [
        {
                  "en": "Herbal tea",
                  "es": "Herbal tea",
                  "de": "Herbal tea",
                  "nl": "Herbal tea"
        },
        {
                  "en": "Powdered green tea",
                  "es": "Powdered green tea",
                  "de": "Powdered green tea",
                  "nl": "Powdered green tea"
        },
        {
                  "en": "Black tea",
                  "es": "Black tea",
                  "de": "Black tea",
                  "nl": "Black tea"
        },
        {
                  "en": "Fermented tea",
                  "es": "Fermented tea",
                  "de": "Fermented tea",
                  "nl": "Fermented tea"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Matcha is a fine powder made from specially grown and processed green tea leaves.",
                  "es": "Matcha is a fine powder made from specially grown and processed green tea leaves.",
                  "de": "Matcha is a fine powder made from specially grown and processed green tea leaves.",
                  "nl": "Matcha is a fine powder made from specially grown and processed green tea leaves."
        }
      },
      {
        question: {
                  "en": "What is oolong tea?",
                  "es": "What is oolong tea?",
                  "de": "What is oolong tea?",
                  "nl": "What is oolong tea?"
        },
        options: [
        {
                  "en": "Unoxidized tea",
                  "es": "Unoxidized tea",
                  "de": "Unoxidized tea",
                  "nl": "Unoxidized tea"
        },
        {
                  "en": "Partially oxidized tea",
                  "es": "Partially oxidized tea",
                  "de": "Partially oxidized tea",
                  "nl": "Partially oxidized tea"
        },
        {
                  "en": "Herbal tea",
                  "es": "Herbal tea",
                  "de": "Herbal tea",
                  "nl": "Herbal tea"
        },
        {
                  "en": "Fully oxidized tea",
                  "es": "Fully oxidized tea",
                  "de": "Fully oxidized tea",
                  "nl": "Fully oxidized tea"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Oolong tea is partially oxidized, falling between green and black tea in processing.",
                  "es": "Oolong tea is partially oxidized, falling between green and black tea in processing.",
                  "de": "Oolong tea is partially oxidized, falling between green and black tea in processing.",
                  "nl": "Oolong tea is partially oxidized, falling between green and black tea in processing."
        }
      },
      {
        question: {
                  "en": "What is herbal tea technically called?",
                  "es": "What is herbal tea technically called?",
                  "de": "What is herbal tea technically called?",
                  "nl": "What is herbal tea technically called?"
        },
        options: [
        {
                  "en": "Tisane or herbal infusion",
                  "es": "Tisane or herbal infusion",
                  "de": "Tisane or herbal infusion",
                  "nl": "Tisane or herbal infusion"
        },
        {
                  "en": "Plant tea",
                  "es": "Plant tea",
                  "de": "Plant tea",
                  "nl": "Plant tea"
        },
        {
                  "en": "False tea",
                  "es": "False tea",
                  "de": "False tea",
                  "nl": "False tea"
        },
        {
                  "en": "Herbal blend",
                  "es": "Herbal blend",
                  "de": "Herbal blend",
                  "nl": "Herbal blend"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Herbal 'tea' is technically called a tisane, as it doesn't come from the tea plant.",
                  "es": "Herbal 'tea' is technically called a tisane, as it doesn't come from the tea plant.",
                  "de": "Herbal 'tea' is technically called a tisane, as it doesn't come from the tea plant.",
                  "nl": "Herbal 'tea' is technically called a tisane, as it doesn't come from the tea plant."
        }
      },
      {
        question: {
                  "en": "What is white tea?",
                  "es": "What is white tea?",
                  "de": "What is white tea?",
                  "nl": "What is white tea?"
        },
        options: [
        {
                  "en": "Bleached tea",
                  "es": "Bleached tea",
                  "de": "Bleached tea",
                  "nl": "Bleached tea"
        },
        {
                  "en": "Tea with milk",
                  "es": "Tea with milk",
                  "de": "Tea with milk",
                  "nl": "Tea with milk"
        },
        {
                  "en": "Minimally processed tea from young leaves",
                  "es": "Minimally processed tea from young leaves",
                  "de": "Minimally processed tea from young leaves",
                  "nl": "Minimally processed tea from young leaves"
        },
        {
                  "en": "Caffeine-free tea",
                  "es": "Caffeine-free tea",
                  "de": "Caffeine-free tea",
                  "nl": "Caffeine-free tea"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "White tea is made from young leaves and buds with minimal processing and oxidation.",
                  "es": "White tea is made from young leaves and buds with minimal processing and oxidation.",
                  "de": "White tea is made from young leaves and buds with minimal processing and oxidation.",
                  "nl": "White tea is made from young leaves and buds with minimal processing and oxidation."
        }
      },
      {
        question: {
                  "en": "What is chai?",
                  "es": "What is chai?",
                  "de": "What is chai?",
                  "nl": "What is chai?"
        },
        options: [
        {
                  "en": "Spiced tea, often with milk",
                  "es": "Spiced tea, often with milk",
                  "de": "Spiced tea, often with milk",
                  "nl": "Spiced tea, often with milk"
        },
        {
                  "en": "Green tea",
                  "es": "Green tea",
                  "de": "Green tea",
                  "nl": "Green tea"
        },
        {
                  "en": "Chinese tea",
                  "es": "Chinese tea",
                  "de": "Chinese tea",
                  "nl": "Chinese tea"
        },
        {
                  "en": "Iced tea",
                  "es": "Iced tea",
                  "de": "Iced tea",
                  "nl": "Iced tea"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Chai (or masala chai) is black tea brewed with spices and usually milk and sweetener.",
                  "es": "Chai (or masala chai) is black tea brewed with spices and usually milk and sweetener.",
                  "de": "Chai (or masala chai) is black tea brewed with spices and usually milk and sweetener.",
                  "nl": "Chai (or masala chai) is black tea brewed with spices and usually milk and sweetener."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();