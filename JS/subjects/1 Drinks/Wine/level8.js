// Quiz - Level 8: Drinken - Wijn (Premiumwijnen)

(function() {
  const level8 = {
    name: {
      en: "Premium Wines",
      es: "Vinos Premium",
      de: "Premium-Weine",
      nl: "Premiumwijnen"
    },
    questions: [
      {
        question: {
          en: "Which Bordeaux château is known as the 'Jewel of Graves'?",
          es: "¿Qué château de Burdeos es conocido como la 'Joya de Graves'?",
          de: "Welches Bordeaux-Château ist als 'Juwel von Graves' bekannt?",
          nl: "Welk Bordeaux-château staat bekend als het 'Juweel van Graves'?"
        },
        options: [
          {
            en: "Château Haut-Brion",
            es: "Château Haut-Brion",
            de: "Château Haut-Brion",
            nl: "Château Haut-Brion"
          },
          {
            en: "Château Lafite Rothschild",
            es: "Château Lafite Rothschild",
            de: "Château Lafite Rothschild",
            nl: "Château Lafite Rothschild"
          },
          {
            en: "Château Margaux",
            es: "Château Margaux",
            de: "Château Margaux",
            nl: "Château Margaux"
          },
          {
            en: "Château Latour",
            es: "Château Latour",
            de: "Château Latour",
            nl: "Château Latour"
          }
        ],
        correct: 0,
        explanation: {
          en: "Château Haut-Brion is known as the 'Jewel of Graves' and was the only non-Médoc wine included in the 1855 Classification.",
          es: "Château Haut-Brion es conocido como la 'Joya de Graves' y fue el único vino no-Médoc incluido en la Clasificación de 1855.",
          de: "Château Haut-Brion ist als 'Juwel von Graves' bekannt und war der einzige Nicht-Médoc-Wein in der Klassifikation von 1855.",
          nl: "Château Haut-Brion staat bekend als het 'Juweel van Graves' en was de enige niet-Médoc wijn in de 1855 Classificatie."
        }
      },
      {
        question: {
          en: "What is the most expensive wine region in Burgundy?",
          es: "¿Cuál es la región vinícola más cara de Borgoña?",
          de: "Welche ist die teuerste Weinregion in Burgund?",
          nl: "Wat is de duurste wijnstreek in Bourgogne?"
        },
        options: [
          {
            en: "Romanée-Conti",
            es: "Romanée-Conti",
            de: "Romanée-Conti",
            nl: "Romanée-Conti"
          },
          {
            en: "Chambertin",
            es: "Chambertin",
            de: "Chambertin",
            nl: "Chambertin"
          },
          {
            en: "Montrachet",
            es: "Montrachet",
            de: "Montrachet",
            nl: "Montrachet"
          },
          {
            en: "Clos de Vougeot",
            es: "Clos de Vougeot",
            de: "Clos de Vougeot",
            nl: "Clos de Vougeot"
          }
        ],
        correct: 0,
        explanation: {
          en: "Romanée-Conti is considered the most expensive and prestigious vineyard in Burgundy, producing some of the world's most costly wines.",
          es: "Romanée-Conti es considerado el viñedo más caro y prestigioso de Borgoña, produciendo algunos de los vinos más costosos del mundo.",
          de: "Romanée-Conti gilt als der teuerste und prestigeträchtigste Weinberg in Burgund und produziert einige der teuersten Weine der Welt.",
          nl: "Romanée-Conti wordt beschouwd als de duurste en meest prestigieuze wijngaard in Bourgogne, die enkele van 's werelds duurste wijnen produceert."
        }
      },
      {
        question: {
          en: "Which German wine region produces the most expensive Rieslings?",
          es: "¿Qué región vinícola alemana produce los Rieslings más caros?",
          de: "Welche deutsche Weinregion produziert die teuersten Rieslinge?",
          nl: "Welke Duitse wijnstreek produceert de duurste Rieslings?"
        },
        options: [
          {
            en: "Pfalz",
            es: "Pfalz",
            de: "Pfalz",
            nl: "Pfalz"
          },
          {
            en: "Mosel",
            es: "Mosel",
            de: "Mosel",
            nl: "Mosel"
          },
          {
            en: "Rheingau",
            es: "Rheingau",
            de: "Rheingau",
            nl: "Rheingau"
          },
          {
            en: "Baden",
            es: "Baden",
            de: "Baden",
            nl: "Baden"
          }
        ],
        correct: 2,
        explanation: {
          en: "The Rheingau region produces some of Germany's most prestigious and expensive Rieslings, with estates like Schloss Johannisberg commanding premium prices.",
          es: "La región de Rheingau produce algunos de los Rieslings más prestigiosos y caros de Alemania, con propiedades como Schloss Johannisberg que alcanzan precios premium.",
          de: "Die Rheingau-Region produziert einige der prestigeträchtigsten und teuersten Rieslinge Deutschlands, wobei Weingüter wie Schloss Johannisberg Spitzenpreise erzielen.",
          nl: "De Rheingau-streek produceert enkele van Duitslands meest prestigieuze en duurste Rieslings, met landgoederen zoals Schloss Johannisberg die premium prijzen vragen."
        }
      },
      {
        question: {
          en: "What makes Château d'Yquem so expensive?",
          es: "¿Qué hace que Château d'Yquem sea tan caro?",
          de: "Was macht Château d'Yquem so teuer?",
          nl: "Wat maakt Château d'Yquem zo duur?"
        },
        options: [
          {
            en: "It's the oldest winery in France",
            es: "Es la bodega más antigua de Francia",
            de: "Es ist das älteste Weingut in Frankreich",
            nl: "Het is de oudste wijnmakerij van Frankrijk"
          },
          {
            en: "Noble rot and extremely low yields",
            es: "Podredumbre noble y rendimientos extremadamente bajos",
            de: "Edelfäule und extrem niedrige Erträge",
            nl: "Edele rot en extreem lage opbrengsten"
          },
          {
            en: "It uses rare grape varieties",
            es: "Usa variedades de uva raras",
            de: "Es verwendet seltene Rebsorten",
            nl: "Het gebruikt zeldzame druivenrassen"
          },
          {
            en: "It's aged for 50 years",
            es: "Se envejece durante 50 años",
            de: "Es wird 50 Jahre lang gereift",
            nl: "Het wordt 50 jaar gerijpt"
          }
        ],
        correct: 1,
        explanation: {
          en: "Château d'Yquem's high prices are due to noble rot (Botrytis cinerea) concentration and extremely low yields - one vine produces only one glass of wine.",
          es: "Los altos precios de Château d'Yquem se deben a la concentración de podredumbre noble (Botrytis cinerea) y rendimientos extremadamente bajos: una vid produce solo una copa de vino.",
          de: "Die hohen Preise von Château d'Yquem sind auf die Konzentration der Edelfäule (Botrytis cinerea) und extrem niedrige Erträge zurückzuführen - ein Rebstock produziert nur ein Glas Wein.",
          nl: "De hoge prijzen van Château d'Yquem zijn te wijten aan edele rot (Botrytis cinerea) concentratie en extreem lage opbrengsten - één wijnstok produceert slechts één glas wijn."
        }
      },
      {
        question: {
          en: "Which Italian wine is often called 'The King of Wines'?",
          es: "¿Qué vino italiano se llama a menudo 'El Rey de los Vinos'?",
          de: "Welcher italienische Wein wird oft 'König der Weine' genannt?",
          nl: "Welke Italiaanse wijn wordt vaak 'De Koning van de Wijnen' genoemd?"
        },
        options: [
          {
            en: "Chianti Classico",
            es: "Chianti Classico",
            de: "Chianti Classico",
            nl: "Chianti Classico"
          },
          {
            en: "Amarone",
            es: "Amarone",
            de: "Amarone",
            nl: "Amarone"
          },
          {
            en: "Barolo",
            es: "Barolo",
            de: "Barolo",
            nl: "Barolo"
          },
          {
            en: "Brunello di Montalcino",
            es: "Brunello di Montalcino",
            de: "Brunello di Montalcino",
            nl: "Brunello di Montalcino"
          }
        ],
        correct: 2,
        explanation: {
          en: "Barolo, made from Nebbiolo grapes in Piedmont, is traditionally called 'The King of Wines and Wine of Kings' due to its power and prestige.",
          es: "Barolo, hecho de uvas Nebbiolo en Piamonte, se llama tradicionalmente 'El Rey de los Vinos y Vino de Reyes' debido a su potencia y prestigio.",
          de: "Barolo, hergestellt aus Nebbiolo-Trauben im Piemont, wird traditionell 'König der Weine und Wein der Könige' genannt aufgrund seiner Kraft und seines Prestiges.",
          nl: "Barolo, gemaakt van Nebbiolo-druiven in Piemonte, wordt traditioneel 'De Koning van de Wijnen en Wijn van Koningen' genoemd vanwege zijn kracht en prestige."
        }
      },
      {
        question: {
          en: "What is the minimum aging requirement for vintage Port?",
          es: "¿Cuál es el requisito mínimo de envejecimiento para el Oporto vintage?",
          de: "Was ist die Mindestlagerungsanforderung für Vintage-Port?",
          nl: "Wat is de minimale rijpingsvereiste voor vintage Port?"
        },
        options: [
          {
            en: "10 years",
            es: "10 años",
            de: "10 Jahre",
            nl: "10 jaar"
          },
          {
            en: "15 years",
            es: "15 años",
            de: "15 Jahre",
            nl: "15 jaar"
          },
          {
            en: "20 years",
            es: "20 años",
            de: "20 Jahre",
            nl: "20 jaar"
          },
          {
            en: "25 years",
            es: "25 años",
            de: "25 Jahre",
            nl: "25 jaar"
          }
        ],
        correct: 2,
        explanation: {
          en: "Vintage Port must be aged for a minimum of 20 years before release, making it one of the longest-aged wines in the world.",
          es: "El Oporto vintage debe envejecerse durante un mínimo de 20 años antes de su lanzamiento, lo que lo convierte en uno de los vinos más envejecidos del mundo.",
          de: "Vintage-Port muss mindestens 20 Jahre lang gereift werden, bevor er freigegeben wird, was ihn zu einem der am längsten gelagerten Weine der Welt macht.",
          nl: "Vintage Port moet minimaal 20 jaar gerijpt worden voordat het wordt uitgebracht, waardoor het een van de langst gerijpte wijnen ter wereld is."
        }
      },
      {
        question: {
          en: "Which Champagne house is known for producing the most expensive bottle in the world?",
          es: "¿Qué casa de Champagne es conocida por producir la botella más cara del mundo?",
          de: "Welches Champagner-Haus ist dafür bekannt, die teuerste Flasche der Welt zu produzieren?",
          nl: "Welk Champagne-huis staat bekend om het produceren van de duurste fles ter wereld?"
        },
        options: [
          {
            en: "Dom Pérignon",
            es: "Dom Pérignon",
            de: "Dom Pérignon",
            nl: "Dom Pérignon"
          },
          {
            en: "Krug",
            es: "Krug",
            de: "Krug",
            nl: "Krug"
          },
          {
            en: "Armand de Brignac",
            es: "Armand de Brignac",
            de: "Armand de Brignac",
            nl: "Armand de Brignac"
          },
          {
            en: "Louis Roederer",
            es: "Louis Roederer",
            de: "Louis Roederer",
            nl: "Louis Roederer"
          }
        ],
        correct: 2,
        explanation: {
          en: "Armand de Brignac (Ace of Spades) has produced some of the world's most expensive Champagne bottles, including limited editions costing over $100,000.",
          es: "Armand de Brignac (As de Espadas) ha producido algunas de las botellas de Champagne más caras del mundo, incluyendo ediciones limitadas que cuestan más de $100,000.",
          de: "Armand de Brignac (Pik-As) hat einige der teuersten Champagner-Flaschen der Welt produziert, einschließlich limitierter Auflagen, die über 100.000 $ kosten.",
          nl: "Armand de Brignac (Schoppen Aas) heeft enkele van 's werelds duurste Champagne-flessen geproduceerd, inclusief gelimiteerde edities die meer dan $100.000 kosten."
        }
      },
      {
        question: {
          en: "What is the most prestigious Grand Cru vineyard in Chablis?",
          es: "¿Cuál es el viñedo Grand Cru más prestigioso en Chablis?",
          de: "Welcher ist der prestigeträchtigste Grand Cru Weinberg in Chablis?",
          nl: "Wat is de meest prestigieuze Grand Cru wijngaard in Chablis?"
        },
        options: [
          {
            en: "Les Clos",
            es: "Les Clos",
            de: "Les Clos",
            nl: "Les Clos"
          },
          {
            en: "Valmur",
            es: "Valmur",
            de: "Valmur",
            nl: "Valmur"
          },
          {
            en: "Grenouilles",
            es: "Grenouilles",
            de: "Grenouilles",
            nl: "Grenouilles"
          },
          {
            en: "Vaudésir",
            es: "Vaudésir",
            de: "Vaudésir",
            nl: "Vaudésir"
          }
        ],
        correct: 0,
        explanation: {
          en: "Les Clos is the largest and most prestigious of Chablis' seven Grand Cru vineyards, producing the most sought-after and expensive Chablis wines.",
          es: "Les Clos es el más grande y prestigioso de los siete viñedos Grand Cru de Chablis, produciendo los vinos de Chablis más buscados y caros.",
          de: "Les Clos ist der größte und prestigeträchtigste der sieben Grand Cru Weinberge von Chablis und produziert die begehrtesten und teuersten Chablis-Weine.",
          nl: "Les Clos is de grootste en meest prestigieuze van de zeven Grand Cru wijngaarden van Chablis, die de meest gewilde en duurste Chablis-wijnen produceert."
        }
      },
      {
        question: {
          en: "Which Australian wine region produces the most expensive Shiraz?",
          es: "¿Qué región vinícola australiana produce el Shiraz más caro?",
          de: "Welche australische Weinregion produziert den teuersten Shiraz?",
          nl: "Welke Australische wijnstreek produceert de duurste Shiraz?"
        },
        options: [
          {
            en: "Hunter Valley",
            es: "Hunter Valley",
            de: "Hunter Valley",
            nl: "Hunter Valley"
          },
          {
            en: "Barossa Valley",
            es: "Barossa Valley",
            de: "Barossa Valley",
            nl: "Barossa Valley"
          },
          {
            en: "Adelaide Hills",
            es: "Adelaide Hills",
            de: "Adelaide Hills",
            nl: "Adelaide Hills"
          },
          {
            en: "McLaren Vale",
            es: "McLaren Vale",
            de: "McLaren Vale",
            nl: "McLaren Vale"
          }
        ],
        correct: 1,
        explanation: {
          en: "Barossa Valley produces Australia's most expensive Shiraz wines, with old vine vineyards producing premium bottles that can cost thousands of dollars.",
          es: "Barossa Valley produce los vinos Shiraz más caros de Australia, con viñedos de vides viejas que producen botellas premium que pueden costar miles de dólares.",
          de: "Das Barossa Valley produziert Australiens teuerste Shiraz-Weine, wobei alte Rebstöcke Premium-Flaschen produzieren, die Tausende von Dollar kosten können.",
          nl: "Barossa Valley produceert Australië's duurste Shiraz-wijnen, met oude wijnstokken die premium flessen produceren die duizenden dollars kunnen kosten."
        }
      },
      {
        question: {
          en: "What is the most expensive wine ever sold at auction?",
          es: "¿Cuál es el vino más caro jamás vendido en subasta?",
          de: "Was ist der teuerste Wein, der jemals bei einer Auktion verkauft wurde?",
          nl: "Wat is de duurste wijn die ooit op een veiling is verkocht?"
        },
        options: [
          {
            en: "1945 Romanée-Conti",
            es: "1945 Romanée-Conti",
            de: "1945 Romanée-Conti",
            nl: "1945 Romanée-Conti"
          },
          {
            en: "1787 Château Lafite Rothschild",
            es: "1787 Château Lafite Rothschild",
            de: "1787 Château Lafite Rothschild",
            nl: "1787 Château Lafite Rothschild"
          },
          {
            en: "1947 Cheval Blanc",
            es: "1947 Cheval Blanc",
            de: "1947 Cheval Blanc",
            nl: "1947 Cheval Blanc"
          },
          {
            en: "1961 Pétrus",
            es: "1961 Pétrus",
            de: "1961 Pétrus",
            nl: "1961 Pétrus"
          }
        ],
        correct: 0,
        explanation: {
          en: "The 1945 Romanée-Conti sold for $558,229 in 2018, making it the most expensive wine ever sold at auction. It was the last vintage before the vineyard was replanted.",
          es: "El 1945 Romanée-Conti se vendió por $558,229 en 2018, convirtiéndolo en el vino más caro jamás vendido en subasta. Fue la última cosecha antes de replantar el viñedo.",
          de: "Der 1945 Romanée-Conti wurde 2018 für 558.229 $ verkauft und ist damit der teuerste Wein, der jemals bei einer Auktion verkauft wurde. Es war der letzte Jahrgang vor der Neubepflanzung des Weinbergs.",
          nl: "De 1945 Romanée-Conti werd in 2018 verkocht voor $558.229, waarmee het de duurste wijn werd die ooit op een veiling is verkocht. Het was de laatste oogst voordat de wijngaard werd herplant."
        }
      },
      {
        question: {
          en: "Which Super Tuscan wine was the first to gain international acclaim?",
          es: "¿Qué vino Super Toscano fue el primero en ganar reconocimiento internacional?",
          de: "Welcher Super Toskana Wein erlangte als erster internationale Anerkennung?",
          nl: "Welke Super Toscaanse wijn verwierf als eerste internationale erkenning?"
        },
        options: [
          {
            en: "Ornellaia",
            es: "Ornellaia",
            de: "Ornellaia",
            nl: "Ornellaia"
          },
          {
            en: "Sassicaia",
            es: "Sassicaia",
            de: "Sassicaia",
            nl: "Sassicaia"
          },
          {
            en: "Tignanello",
            es: "Tignanello",
            de: "Tignanello",
            nl: "Tignanello"
          },
          {
            en: "Solaia",
            es: "Solaia",
            de: "Solaia",
            nl: "Solaia"
          }
        ],
        correct: 1,
        explanation: {
          en: "Sassicaia was the first Super Tuscan to gain international recognition in the 1970s, revolutionizing Italian winemaking by using Bordeaux varieties outside traditional DOC rules.",
          es: "Sassicaia fue el primer Super Toscano en ganar reconocimiento internacional en la década de 1970, revolucionando la vinificación italiana al usar variedades de Burdeos fuera de las reglas tradicionales DOC.",
          de: "Sassicaia war der erste Super Toskana, der in den 1970er Jahren internationale Anerkennung erlangte und die italienische Weinherstellung revolutionierte, indem er Bordeaux-Sorten außerhalb der traditionellen DOC-Regeln verwendete.",
          nl: "Sassicaia was de eerste Super Toscaanse wijn die in de jaren 1970 internationale erkenning verwierf, en een revolutie teweegbracht in de Italiaanse wijnbouw door Bordeaux-druiven te gebruiken buiten de traditionele DOC-regels."
        }
      },
      {
        question: {
          en: "What is the traditional bottle size for Château Pétrus' standard release?",
          es: "¿Cuál es el tamaño de botella tradicional para el lanzamiento estándar de Château Pétrus?",
          de: "Was ist die traditionelle Flaschengröße für die Standardveröffentlichung von Château Pétrus?",
          nl: "Wat is de traditionele flesgrootte voor de standaard uitgave van Château Pétrus?"
        },
        options: [
          {
            en: "750ml only",
            es: "Solo 750ml",
            de: "Nur 750ml",
            nl: "Alleen 750ml"
          },
          {
            en: "750ml and magnums",
            es: "750ml y magnums",
            de: "750ml und Magnums",
            nl: "750ml en magnums"
          },
          {
            en: "All standard sizes",
            es: "Todos los tamaños estándar",
            de: "Alle Standardgrößen",
            nl: "Alle standaard maten"
          },
          {
            en: "Custom sizes only",
            es: "Solo tamaños personalizados",
            de: "Nur maßgeschneiderte Größen",
            nl: "Alleen op maat gemaakte maten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Château Pétrus traditionally releases wine only in 750ml bottles, making it unique among top Bordeaux estates and adding to its exclusivity and collectibility.",
          es: "Château Pétrus tradicionalmente lanza vino solo en botellas de 750ml, lo que lo hace único entre las principales propiedades de Burdeos y aumenta su exclusividad y coleccionabilidad.",
          de: "Château Pétrus veröffentlicht traditionell Wein nur in 750ml-Flaschen, was es unter den Top-Bordeaux-Weingütern einzigartig macht und zu seiner Exklusivität und Sammelbarkeit beiträgt.",
          nl: "Château Pétrus brengt traditioneel alleen wijn uit in 750ml flessen, wat het uniek maakt onder top Bordeaux-landgoederen en bijdraagt aan zijn exclusiviteit en verzamelbaarheid."
        }
      },
      {
        question: {
          en: "Which Napa Valley winery is known as one of the 'Cult Cabernets'?",
          es: "¿Qué bodega del Valle de Napa es conocida como uno de los 'Cabernets de Culto'?",
          de: "Welches Weingut im Napa Valley ist als einer der 'Kult-Cabernets' bekannt?",
          nl: "Welke Napa Valley wijnmakerij staat bekend als een van de 'Cultus Cabernets'?"
        },
        options: [
          {
            en: "Robert Mondavi",
            es: "Robert Mondavi",
            de: "Robert Mondavi",
            nl: "Robert Mondavi"
          },
          {
            en: "Screaming Eagle",
            es: "Screaming Eagle",
            de: "Screaming Eagle",
            nl: "Screaming Eagle"
          },
          {
            en: "Beringer",
            es: "Beringer",
            de: "Beringer",
            nl: "Beringer"
          },
          {
            en: "Stag's Leap",
            es: "Stag's Leap",
            de: "Stag's Leap",
            nl: "Stag's Leap"
          }
        ],
        correct: 1,
        explanation: {
          en: "Screaming Eagle is one of Napa's most famous 'Cult Cabernets,' with extremely limited production and bottles selling for thousands of dollars with years-long waiting lists.",
          es: "Screaming Eagle es uno de los 'Cabernets de Culto' más famosos de Napa, con producción extremadamente limitada y botellas que se venden por miles de dólares con listas de espera de años.",
          de: "Screaming Eagle ist einer der berühmtesten 'Kult-Cabernets' von Napa, mit extrem begrenzter Produktion und Flaschen, die für Tausende von Dollar verkauft werden, mit jahrelangen Wartelisten.",
          nl: "Screaming Eagle is een van Napa's meest beroemde 'Cultus Cabernets', met extreem beperkte productie en flessen die voor duizenden dollars worden verkocht met jarenlange wachtlijsten."
        }
      },
      {
        question: {
          en: "What makes Egon Müller's Scharzhofberger Riesling so valuable?",
          es: "¿Qué hace que el Scharzhofberger Riesling de Egon Müller sea tan valioso?",
          de: "Was macht den Scharzhofberger Riesling von Egon Müller so wertvoll?",
          nl: "Wat maakt de Scharzhofberger Riesling van Egon Müller zo waardevol?"
        },
        options: [
          {
            en: "Oldest vineyard in Germany",
            es: "Viñedo más antiguo de Alemania",
            de: "Ältester Weinberg in Deutschland",
            nl: "Oudste wijngaard van Duitsland"
          },
          {
            en: "Single monopole vineyard with exceptional terroir",
            es: "Viñedo monopolio único con terroir excepcional",
            de: "Einzelmonopol-Weinberg mit außergewöhnlichem Terroir",
            nl: "Enkele monopole wijngaard met uitzonderlijk terroir"
          },
          {
            en: "Uses rare yeast strains",
            es: "Usa cepas de levadura raras",
            de: "Verwendet seltene Hefestämme",
            nl: "Gebruikt zeldzame gistsoorten"
          },
          {
            en: "Aged underwater",
            es: "Envejecido bajo el agua",
            de: "Unter Wasser gereift",
            nl: "Onder water gerijpt"
          }
        ],
        correct: 1,
        explanation: {
          en: "Egon Müller's Scharzhofberger vineyard is a monopole (single-owner) site with exceptional slate terroir, producing Germany's most sought-after and expensive Rieslings, especially the Trockenbeerenauslese.",
          es: "El viñedo Scharzhofberger de Egon Müller es un sitio monopolio (un solo propietario) con terroir de pizarra excepcional, produciendo los Rieslings más buscados y caros de Alemania, especialmente el Trockenbeerenauslese.",
          de: "Egon Müllers Scharzhofberger Weinberg ist ein Monopol-Standort mit außergewöhnlichem Schieferterroir und produziert Deutschlands begehrteste und teuerste Rieslinge, insbesondere die Trockenbeerenauslese.",
          nl: "Egon Müllers Scharzhofberger wijngaard is een monopole (enkele eigenaar) locatie met uitzonderlijk leisteen terroir, die Duitslands meest gewilde en duurste Rieslings produceert, vooral de Trockenbeerenauslese."
        }
      },
      {
        question: {
          en: "Which Spanish wine region produces Vega Sicilia Único?",
          es: "¿Qué región vinícola española produce Vega Sicilia Único?",
          de: "Welche spanische Weinregion produziert Vega Sicilia Único?",
          nl: "Welke Spaanse wijnstreek produceert Vega Sicilia Único?"
        },
        options: [
          {
            en: "Rioja",
            es: "Rioja",
            de: "Rioja",
            nl: "Rioja"
          },
          {
            en: "Priorat",
            es: "Priorat",
            de: "Priorat",
            nl: "Priorat"
          },
          {
            en: "Ribera del Duero",
            es: "Ribera del Duero",
            de: "Ribera del Duero",
            nl: "Ribera del Duero"
          },
          {
            en: "Toro",
            es: "Toro",
            de: "Toro",
            nl: "Toro"
          }
        ],
        correct: 2,
        explanation: {
          en: "Vega Sicilia Único is produced in Ribera del Duero and is Spain's most iconic and expensive wine, with extended aging of up to 10 years before release.",
          es: "Vega Sicilia Único se produce en Ribera del Duero y es el vino más icónico y caro de España, con un envejecimiento prolongado de hasta 10 años antes de su lanzamiento.",
          de: "Vega Sicilia Único wird in Ribera del Duero produziert und ist Spaniens ikonischster und teuerster Wein, mit verlängerter Reifung von bis zu 10 Jahren vor der Freigabe.",
          nl: "Vega Sicilia Único wordt geproduceerd in Ribera del Duero en is Spanje's meest iconische en duurste wijn, met een langdurige rijping van tot 10 jaar voor de uitgifte."
        }
      },
      {
        question: {
          en: "What is unique about the 1811 Château d'Yquem vintage?",
          es: "¿Qué es único sobre la cosecha de 1811 de Château d'Yquem?",
          de: "Was ist einzigartig an der 1811er Château d'Yquem Jahrgangswein?",
          nl: "Wat is uniek aan de 1811 Château d'Yquem jaargang?"
        },
        options: [
          {
            en: "First vintage ever produced",
            es: "Primera cosecha producida",
            de: "Erster produzierter Jahrgang",
            nl: "Eerste ooit geproduceerde jaargang"
          },
          {
            en: "Known as 'Comet Wine' from a historic comet year",
            es: "Conocido como 'Vino del Cometa' de un año histórico de cometa",
            de: "Bekannt als 'Kometenwein' aus einem historischen Kometenjahr",
            nl: "Bekend als 'Komeetwijn' van een historisch komeetjaar"
          },
          {
            en: "Only vintage made from red grapes",
            es: "Única cosecha hecha de uvas tintas",
            de: "Einziger Jahrgang aus roten Trauben",
            nl: "Enige jaargang gemaakt van rode druiven"
          },
          {
            en: "Aged for 100 years in barrel",
            es: "Envejecido durante 100 años en barrica",
            de: "100 Jahre im Fass gereift",
            nl: "100 jaar gerijpt in vat"
          }
        ],
        correct: 1,
        explanation: {
          en: "The 1811 Château d'Yquem is famous as a 'Comet Wine,' produced during the year of a great comet's appearance, which was believed to produce exceptional vintages. Bottles have sold for over $100,000.",
          es: "El 1811 Château d'Yquem es famoso como 'Vino del Cometa', producido durante el año de la aparición de un gran cometa, que se creía que producía cosechas excepcionales. Las botellas se han vendido por más de $100,000.",
          de: "Der 1811er Château d'Yquem ist berühmt als 'Kometenwein', produziert während des Jahres der Erscheinung eines großen Kometen, von dem man glaubte, dass er außergewöhnliche Jahrgänge hervorbringt. Flaschen wurden für über 100.000 $ verkauft.",
          nl: "De 1811 Château d'Yquem is beroemd als een 'Komeetwijn', geproduceerd tijdens het jaar van de verschijning van een grote komeet, waarvan men geloofde dat het uitzonderlijke jaargangen opleverde. Flessen zijn verkocht voor meer dan $100.000."
        }
      },
      {
        question: {
          en: "Which Burgundy producer is known as 'The Pope of Burgundy'?",
          es: "¿Qué productor de Borgoña es conocido como 'El Papa de Borgoña'?",
          de: "Welcher Burgund-Produzent ist als 'Der Papst von Burgund' bekannt?",
          nl: "Welke Bourgogne-producent staat bekend als 'De Paus van Bourgogne'?"
        },
        options: [
          {
            en: "Henri Jayer",
            es: "Henri Jayer",
            de: "Henri Jayer",
            nl: "Henri Jayer"
          },
          {
            en: "Aubert de Villaine",
            es: "Aubert de Villaine",
            de: "Aubert de Villaine",
            nl: "Aubert de Villaine"
          },
          {
            en: "Lalou Bize-Leroy",
            es: "Lalou Bize-Leroy",
            de: "Lalou Bize-Leroy",
            nl: "Lalou Bize-Leroy"
          },
          {
            en: "Étienne Grivot",
            es: "Étienne Grivot",
            de: "Étienne Grivot",
            nl: "Étienne Grivot"
          }
        ],
        correct: 0,
        explanation: {
          en: "Henri Jayer was known as 'The Pope of Burgundy' and revolutionized Burgundian winemaking. His wines, especially from Cros Parantoux, are among the most expensive and collectible in the world.",
          es: "Henri Jayer era conocido como 'El Papa de Borgoña' y revolucionó la vinificación borgoñona. Sus vinos, especialmente de Cros Parantoux, están entre los más caros y coleccionables del mundo.",
          de: "Henri Jayer war als 'Der Papst von Burgund' bekannt und revolutionierte die burgundische Weinherstellung. Seine Weine, insbesondere von Cros Parantoux, gehören zu den teuersten und sammelwürdigsten der Welt.",
          nl: "Henri Jayer stond bekend als 'De Paus van Bourgogne' en bracht een revolutie teweeg in de Bourgondische wijnbouw. Zijn wijnen, vooral van Cros Parantoux, behoren tot de duurste en meest verzamelbare ter wereld."
        }
      },
      {
        question: {
          en: "What is the significance of the 1947 vintage in Bordeaux?",
          es: "¿Cuál es la importancia de la cosecha de 1947 en Burdeos?",
          de: "Was ist die Bedeutung des Jahrgangs 1947 in Bordeaux?",
          nl: "Wat is de betekenis van de 1947 jaargang in Bordeaux?"
        },
        options: [
          {
            en: "First vintage after World War II",
            es: "Primera cosecha después de la Segunda Guerra Mundial",
            de: "Erster Jahrgang nach dem Zweiten Weltkrieg",
            nl: "Eerste jaargang na de Tweede Wereldoorlog"
          },
          {
            en: "Century's greatest vintage with exceptional heat",
            es: "La mejor cosecha del siglo con calor excepcional",
            de: "Bester Jahrgang des Jahrhunderts mit außergewöhnlicher Hitze",
            nl: "Beste jaargang van de eeuw met uitzonderlijke hitte"
          },
          {
            en: "Year phylloxera was eliminated",
            es: "Año en que se eliminó la filoxera",
            de: "Jahr, in dem die Reblaus beseitigt wurde",
            nl: "Jaar waarin phylloxera werd geëlimineerd"
          },
          {
            en: "Introduction of stainless steel tanks",
            es: "Introducción de tanques de acero inoxidable",
            de: "Einführung von Edelstahltanks",
            nl: "Introductie van roestvrijstalen tanks"
          }
        ],
        correct: 1,
        explanation: {
          en: "The 1947 vintage is legendary as potentially the century's greatest, produced during exceptional heat and drought. Wines like 1947 Cheval Blanc and Pétrus are among the most valuable ever made.",
          es: "La cosecha de 1947 es legendaria como potencialmente la mejor del siglo, producida durante calor y sequía excepcionales. Vinos como 1947 Cheval Blanc y Pétrus están entre los más valiosos jamás hechos.",
          de: "Der 1947er Jahrgang ist legendär als potenziell der beste des Jahrhunderts, produziert während außergewöhnlicher Hitze und Dürre. Weine wie 1947 Cheval Blanc und Pétrus gehören zu den wertvollsten, die jemals hergestellt wurden.",
          nl: "De 1947 jaargang is legendarisch als mogelijk de beste van de eeuw, geproduceerd tijdens uitzonderlijke hitte en droogte. Wijnen zoals 1947 Cheval Blanc en Pétrus behoren tot de meest waardevolle ooit gemaakt."
        }
      },
      {
        question: {
          en: "Which wine investment index tracks fine wine performance?",
          es: "¿Qué índice de inversión en vinos rastrea el rendimiento de los vinos finos?",
          de: "Welcher Weininvestitionsindex verfolgt die Leistung von Spitzenweinen?",
          nl: "Welke wijnbeleggingsindex volgt de prestaties van fijne wijnen?"
        },
        options: [
          {
            en: "Dow Jones Wine Index",
            es: "Índice de Vinos Dow Jones",
            de: "Dow Jones Weinindex",
            nl: "Dow Jones Wijnindex"
          },
          {
            en: "Liv-ex Fine Wine Index",
            es: "Índice de Vinos Finos Liv-ex",
            de: "Liv-ex Feinweinindex",
            nl: "Liv-ex Fijne Wijnindex"
          },
          {
            en: "S&P Wine 500",
            es: "S&P Vino 500",
            de: "S&P Wein 500",
            nl: "S&P Wijn 500"
          },
          {
            en: "FTSE Wine Portfolio",
            es: "Cartera de Vinos FTSE",
            de: "FTSE Weinportfolio",
            nl: "FTSE Wijnportefeuille"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Liv-ex Fine Wine Index is the global benchmark for fine wine investment, tracking prices of the most collectible wines from Bordeaux, Burgundy, and other prestigious regions.",
          es: "El Índice de Vinos Finos Liv-ex es el punto de referencia global para la inversión en vinos finos, rastreando precios de los vinos más coleccionables de Burdeos, Borgoña y otras regiones prestigiosas.",
          de: "Der Liv-ex Feinweinindex ist der globale Maßstab für Feinweininvestitionen und verfolgt die Preise der sammelwürdigsten Weine aus Bordeaux, Burgund und anderen prestigeträchtigen Regionen.",
          nl: "De Liv-ex Fijne Wijnindex is de wereldwijde maatstaf voor fijne wijnbeleggingen, die de prijzen volgt van de meest verzamelbare wijnen uit Bordeaux, Bourgogne en andere prestigieuze regio's."
        }
      },
      {
        question: {
          en: "What is the classification of Château Mouton Rothschild unique for?",
          es: "¿Por qué es única la clasificación de Château Mouton Rothschild?",
          de: "Wofür ist die Klassifizierung von Château Mouton Rothschild einzigartig?",
          nl: "Waarvoor is de classificatie van Château Mouton Rothschild uniek?"
        },
        options: [
          {
            en: "Only château to be promoted from Second to First Growth",
            es: "Único château promovido de Second a First Growth",
            de: "Einziges Château, das vom Deuxième zum Premier Cru aufgestiegen ist",
            nl: "Enige château dat gepromoveerd werd van Second naar First Growth"
          },
          {
            en: "First organic First Growth",
            es: "Primer First Growth orgánico",
            de: "Erstes biologisches Premier Cru",
            nl: "Eerste biologische First Growth"
          },
          {
            en: "Largest First Growth estate",
            es: "Mayor propiedad First Growth",
            de: "Größtes Premier Cru Anwesen",
            nl: "Grootste First Growth landgoed"
          },
          {
            en: "Only female-owned First Growth",
            es: "Único First Growth de propiedad femenina",
            de: "Einziges Premier Cru in weiblichem Besitz",
            nl: "Enige First Growth in vrouwelijk bezit"
          }
        ],
        correct: 0,
        explanation: {
          en: "Château Mouton Rothschild is unique as the only château to be promoted from Second Growth to First Growth status in 1973, the only change to the 1855 Classification.",
          es: "Château Mouton Rothschild es único como el único château promovido de Second Growth a First Growth en 1973, el único cambio a la Clasificación de 1855.",
          de: "Château Mouton Rothschild ist einzigartig als das einzige Château, das 1973 vom Deuxième zum Premier Cru aufgestiegen ist, die einzige Änderung der Klassifikation von 1855.",
          nl: "Château Mouton Rothschild is uniek als het enige château dat in 1973 werd gepromoveerd van Second Growth naar First Growth status, de enige wijziging aan de 1855 Classificatie."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
