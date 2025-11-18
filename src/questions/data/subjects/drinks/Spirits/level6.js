// Quiz - Level 6: Drinken - Sterke drank (Premium Geesten & Regio's)
(function() {
    "use strict";

    const level6 = {
        name: {
            en: "Premium Spirits & Regions",
            es: "Licores Premium y Regiones",
            de: "Premium-Spirituosen & Regionen",
            nl: "Premium Geesten & Regio's"
        },
        questions: [
            {
                question: {
                    en: "Which Scottish region is famous for producing the most peated single malt whiskies?",
                    es: "¿Qué región escocesa es famosa por producir los whiskies de malta más ahumados?",
                    de: "Welche schottische Region ist berühmt für die Produktion der torfigsten Single Malt Whiskys?",
                    nl: "Welke Schotse regio is beroemd om het produceren van de meest geturfde single malt whisky's?"
                },
                options: [
                    {
                        en: "Islay",
                        es: "Islay",
                        de: "Islay",
                        nl: "Islay"
                    },
                    {
                        en: "Speyside",
                        es: "Speyside",
                        de: "Speyside",
                        nl: "Speyside"
                    },
                    {
                        en: "Highlands",
                        es: "Highlands",
                        de: "Highlands",
                        nl: "Highlands"
                    },
                    {
                        en: "Lowlands",
                        es: "Lowlands",
                        de: "Lowlands",
                        nl: "Lowlands"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Islay is renowned for its heavily peated whiskies like Ardbeg, Lagavulin, and Laphroaig, which get their distinctive smoky flavor from peat used in the malting process.",
                    es: "Islay es famoso por sus whiskies fuertemente ahumados como Ardbeg, Lagavulin y Laphroaig, que obtienen su sabor ahumado distintivo de la turba usada en el proceso de malteado.",
                    de: "Islay ist berühmt für seine stark torfigen Whiskys wie Ardbeg, Lagavulin und Laphroaig, die ihren charakteristischen rauchigen Geschmack vom Torf erhalten, der beim Mälzen verwendet wird.",
                    nl: "Islay staat bekend om zijn zwaar geturfde whisky's zoals Ardbeg, Lagavulin en Laphroaig, die hun kenmerkende rokerige smaak krijgen van turf gebruikt in het moutproces."
                }
            },
            {
                question: {
                    en: "What is the minimum aging requirement for Cognac to be labeled as 'XO' (Extra Old)?",
                    es: "¿Cuál es el requisito mínimo de envejecimiento para que el Cognac sea etiquetado como 'XO' (Extra Viejo)?",
                    de: "Wie ist die Mindest-Alterungsanforderung für Cognac, um als 'XO' (Extra Old) bezeichnet zu werden?",
                    nl: "Wat is de minimale rijpingsvereiste voor Cognac om gelabeld te worden als 'XO' (Extra Oud)?"
                },
                options: [
                    {
                        en: "6 years",
                        es: "6 años",
                        de: "6 Jahre",
                        nl: "6 jaar"
                    },
                    {
                        en: "10 years",
                        es: "10 años",
                        de: "10 Jahre",
                        nl: "10 jaar"
                    },
                    {
                        en: "12 years",
                        es: "12 años",
                        de: "12 Jahre",
                        nl: "12 jaar"
                    },
                    {
                        en: "15 years",
                        es: "15 años",
                        de: "15 Jahre",
                        nl: "15 jaar"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Since 2018, Cognac XO must be aged for a minimum of 10 years, increased from the previous 6-year requirement to ensure higher quality standards.",
                    es: "Desde 2018, el Cognac XO debe envejecer por un mínimo de 10 años, aumentado del requisito previo de 6 años para asegurar estándares de calidad más altos.",
                    de: "Seit 2018 muss Cognac XO mindestens 10 Jahre gelagert werden, erhöht von der vorherigen 6-Jahres-Anforderung, um höhere Qualitätsstandards zu gewährleisten.",
                    nl: "Sinds 2018 moet Cognac XO minimaal 10 jaar gerijpt zijn, verhoogd van de vorige 6-jaars vereiste om hogere kwaliteitsnormen te waarborgen."
                }
            },
            {
                question: {
                    en: "Which Mexican spirit can only be produced in specific regions and must contain at least 51% blue agave?",
                    es: "¿Qué licor mexicano solo puede producirse en regiones específicas y debe contener al menos 51% de agave azul?",
                    de: "Welche mexikanische Spirituose kann nur in bestimmten Regionen produziert werden und muss mindestens 51% blaue Agave enthalten?",
                    nl: "Welke Mexicaanse sterke drank kan alleen in specifieke regio's geproduceerd worden en moet minstens 51% blauwe agave bevatten?"
                },
                options: [
                    {
                        en: "Mezcal",
                        es: "Mezcal",
                        de: "Mezcal",
                        nl: "Mezcal"
                    },
                    {
                        en: "Tequila",
                        es: "Tequila",
                        de: "Tequila",
                        nl: "Tequila"
                    },
                    {
                        en: "Sotol",
                        es: "Sotol",
                        de: "Sotol",
                        nl: "Sotol"
                    },
                    {
                        en: "Raicilla",
                        es: "Raicilla",
                        de: "Raicilla",
                        nl: "Raicilla"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Tequila has strict denomination of origin regulations and must be produced in specific Mexican states, containing at least 51% blue agave (Weber Azul).",
                    es: "El tequila tiene estrictas regulaciones de denominación de origen y debe producirse en estados mexicanos específicos, conteniendo al menos 51% de agave azul (Weber Azul).",
                    de: "Tequila hat strenge Herkunftsbezeichnungsvorschriften und muss in bestimmten mexikanischen Bundesstaaten produziert werden, mit mindestens 51% blauer Agave (Weber Azul).",
                    nl: "Tequila heeft strikte herkomstbenamingsregels en moet geproduceerd worden in specifieke Mexicaanse staten, met minstens 51% blauwe agave (Weber Azul)."
                }
            },
            {
                question: {
                    en: "What gives Japanese whisky its distinctive character compared to Scotch whisky?",
                    es: "¿Qué le da al whisky japonés su carácter distintivo comparado con el whisky escocés?",
                    de: "Was verleiht japanischem Whisky seinen charakteristischen Charakter im Vergleich zu schottischem Whisky?",
                    nl: "Wat geeft Japanse whisky zijn onderscheidende karakter vergeleken met Schotse whisky?"
                },
                options: [
                    {
                        en: "Use of Mizunara oak barrels and Japanese climate",
                        es: "Uso de barriles de roble Mizunara y clima japonés",
                        de: "Verwendung von Mizunara-Eichenfässern und japanischem Klima",
                        nl: "Gebruik van Mizunara eiken vaten en Japans klimaat"
                    },
                    {
                        en: "Higher alcohol content",
                        es: "Mayor contenido alcohólico",
                        de: "Höherer Alkoholgehalt",
                        nl: "Hoger alcoholgehalte"
                    },
                    {
                        en: "Different fermentation process",
                        es: "Proceso de fermentación diferente",
                        de: "Anderer Fermentationsprozess",
                        nl: "Anders fermentatieproces"
                    },
                    {
                        en: "Use of rice instead of barley",
                        es: "Uso de arroz en lugar de cebada",
                        de: "Verwendung von Reis anstatt Gerste",
                        nl: "Gebruik van rijst in plaats van gerst"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Japanese whisky uses unique Mizunara oak barrels which impart oriental spice notes, combined with Japan's distinct climate and humidity patterns that affect aging.",
                    es: "El whisky japonés usa barriles únicos de roble Mizunara que imparten notas de especias orientales, combinado con el clima distinto y patrones de humedad de Japón que afectan el envejecimiento.",
                    de: "Japanischer Whisky verwendet einzigartige Mizunara-Eichenfässer, die orientalische Gewürznoten verleihen, kombiniert mit Japans charakteristischem Klima und Feuchtigkeitsmustern, die die Reifung beeinflussen.",
                    nl: "Japanse whisky gebruikt unieke Mizunara eiken vaten die oosterse kruidennoten geven, gecombineerd met Japan's kenmerkende klimaat en vochtigheidspatronen die de rijping beïnvloeden."
                }
            },
            {
                question: {
                    en: "Which Caribbean rum style is known for being unaged and bottled directly from the still?",
                    es: "¿Qué estilo de ron caribeño es conocido por no estar envejecido y embotellado directamente del alambique?",
                    de: "Welcher karibische Rum-Stil ist bekannt dafür, ungereift und direkt aus der Brennblase abgefüllt zu werden?",
                    nl: "Welke Caribische rum stijl staat bekend om ongereijpt te zijn en direct uit de distilleerketel gebotteld?"
                },
                options: [
                    {
                        en: "White rum",
                        es: "Ron blanco",
                        de: "Weißer Rum",
                        nl: "Witte rum"
                    },
                    {
                        en: "Dark rum",
                        es: "Ron oscuro",
                        de: "Dunkler Rum",
                        nl: "Donkere rum"
                    },
                    {
                        en: "Spiced rum",
                        es: "Ron especiado",
                        de: "Gewürzrum",
                        nl: "Gekruide rum"
                    },
                    {
                        en: "Aged rum",
                        es: "Ron añejo",
                        de: "Gereifter Rum",
                        nl: "Gerijpte rum"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "White rum (also called light or silver rum) is typically unaged or briefly aged and then filtered to remove color, giving it a clean, neutral flavor profile.",
                    es: "El ron blanco (también llamado ron ligero o plateado) típicamente no está envejecido o brevemente envejecido y luego filtrado para quitar el color, dándole un perfil de sabor limpio y neutral.",
                    de: "Weißer Rum (auch heller oder silberner Rum genannt) ist typischerweise ungereift oder kurz gereift und dann gefiltert, um Farbe zu entfernen, was ihm ein sauberes, neutrales Geschmacksprofil verleiht.",
                    nl: "Witte rum (ook wel lichte of zilveren rum genoemd) is typisch ongereijpt of kort gerijpt en daarna gefilterd om kleur te verwijderen, wat een schoon, neutraal smaakprofiel geeft."
                }
            },
            {
                question: {
                    en: "What is the traditional base spirit used in making London Dry Gin?",
                    es: "¿Cuál es el licor base tradicional usado para hacer London Dry Gin?",
                    de: "Was ist die traditionelle Basis-Spirituose für die Herstellung von London Dry Gin?",
                    nl: "Wat is de traditionele basis sterke drank gebruikt voor het maken van London Dry Gin?"
                },
                options: [
                    {
                        en: "Neutral grain spirit",
                        es: "Licor neutro de grano",
                        de: "Neutraler Getreidealkohol",
                        nl: "Neutrale graanjenever"
                    },
                    {
                        en: "Potato vodka",
                        es: "Vodka de papa",
                        de: "Kartoffel-Wodka",
                        nl: "Aardappel vodka"
                    },
                    {
                        en: "Corn whiskey",
                        es: "Whiskey de maíz",
                        de: "Mais-Whiskey",
                        nl: "Maïs whiskey"
                    },
                    {
                        en: "Sugar cane rum",
                        es: "Ron de caña de azúcar",
                        de: "Zuckerrohr-Rum",
                        nl: "Suikerriet rum"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "London Dry Gin starts with a neutral grain spirit base, which is then redistilled with botanicals (primarily juniper berries) to create the distinctive gin flavor.",
                    es: "London Dry Gin comienza con una base de licor neutro de grano, que luego se redistila con botánicos (principalmente bayas de enebro) para crear el sabor distintivo del gin.",
                    de: "London Dry Gin beginnt mit einer neutralen Getreidealkohol-Basis, die dann mit Botanicals (hauptsächlich Wacholderbeeren) redistilliert wird, um den charakteristischen Gin-Geschmack zu erzeugen.",
                    nl: "London Dry Gin begint met een neutrale graanjenever basis, die dan opnieuw gedistilleerd wordt met botanicals (voornamelijk jeneverbesbessen) om de kenmerkende gin-smaak te creëren."
                }
            },
            {
                question: {
                    en: "Which American whiskey must be made from at least 51% corn and aged in new charred oak barrels?",
                    es: "¿Qué whiskey americano debe estar hecho de al menos 51% maíz y envejecido en barriles nuevos de roble carbonizado?",
                    de: "Welcher amerikanische Whiskey muss aus mindestens 51% Mais hergestellt und in neuen verkohlten Eichenfässern gereift werden?",
                    nl: "Welke Amerikaanse whiskey moet gemaakt zijn van minstens 51% maïs en gerijpt in nieuwe verkoold eiken vaten?"
                },
                options: [
                    {
                        en: "Rye whiskey",
                        es: "Whiskey de centeno",
                        de: "Roggen-Whiskey",
                        nl: "Rogge whiskey"
                    },
                    {
                        en: "Bourbon whiskey",
                        es: "Whiskey bourbon",
                        de: "Bourbon-Whiskey",
                        nl: "Bourbon whiskey"
                    },
                    {
                        en: "Corn whiskey",
                        es: "Whiskey de maíz",
                        de: "Mais-Whiskey",
                        nl: "Maïs whiskey"
                    },
                    {
                        en: "Tennessee whiskey",
                        es: "Whiskey de Tennessee",
                        de: "Tennessee-Whiskey",
                        nl: "Tennessee whiskey"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Bourbon whiskey must contain at least 51% corn in its mash bill and be aged in new charred oak barrels, giving it its characteristic sweet, vanilla-rich flavor.",
                    es: "El whiskey bourbon debe contener al menos 51% maíz en su mezcla de granos y ser envejecido en barriles nuevos de roble carbonizado, dándole su sabor característico dulce y rico en vainilla.",
                    de: "Bourbon-Whiskey muss mindestens 51% Mais in seiner Maischung enthalten und in neuen verkohlten Eichenfässern gereift werden, was ihm seinen charakteristischen süßen, vanillereichen Geschmack verleiht.",
                    nl: "Bourbon whiskey moet minstens 51% maïs bevatten in zijn maischbill en gerijpt worden in nieuwe verkoold eiken vaten, wat het zijn kenmerkende zoete, vanille-rijke smaak geeft."
                }
            },
            {
                question: {
                    en: "What is the key difference between Armagnac and Cognac brandy production?",
                    es: "¿Cuál es la diferencia clave entre la producción de brandy Armagnac y Cognac?",
                    de: "Was ist der Hauptunterschied zwischen der Armagnac- und Cognac-Brandy-Produktion?",
                    nl: "Wat is het belangrijkste verschil tussen Armagnac en Cognac brandy productie?"
                },
                options: [
                    {
                        en: "Armagnac uses column stills, Cognac uses pot stills",
                        es: "Armagnac usa alambiques de columna, Cognac usa alambiques de olla",
                        de: "Armagnac verwendet Säulenbrennapparate, Cognac verwendet Brennblasen",
                        nl: "Armagnac gebruikt kolomdistilleerketels, Cognac gebruikt pot stills"
                    },
                    {
                        en: "Armagnac is double-distilled, Cognac is single-distilled",
                        es: "Armagnac es doblemente destilado, Cognac es destilado simple",
                        de: "Armagnac ist doppelt destilliert, Cognac ist einfach destilliert",
                        nl: "Armagnac is dubbel gedistilleerd, Cognac is enkel gedistilleerd"
                    },
                    {
                        en: "Different grape varieties used",
                        es: "Se usan diferentes variedades de uva",
                        de: "Verschiedene Rebsorten werden verwendet",
                        nl: "Verschillende druivenrassen gebruikt"
                    },
                    {
                        en: "Different aging wood types",
                        es: "Diferentes tipos de madera para envejecimiento",
                        de: "Verschiedene Holzarten für die Reifung",
                        nl: "Verschillende houtsoorten voor rijping"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Armagnac traditionally uses column stills (continuous distillation) producing a more rustic spirit, while Cognac uses copper pot stills (double distillation) creating a more refined product.",
                    es: "Armagnac tradicionalmente usa alambiques de columna (destilación continua) produciendo un licor más rústico, mientras que Cognac usa alambiques de cobre (doble destilación) creando un producto más refinado.",
                    de: "Armagnac verwendet traditionell Säulenbrennapparate (kontinuierliche Destillation) und erzeugt eine rustikalere Spirituose, während Cognac Kupfer-Brennblasen (Doppeldestillation) verwendet und ein raffinierteres Produkt schafft.",
                    nl: "Armagnac gebruikt traditioneel kolomdistilleerketels (continue distillatie) wat een meer rustieke sterke drank produceert, terwijl Cognac koperen pot stills (dubbele distillatie) gebruikt wat een meer verfijnd product creëert."
                }
            },
            {
                question: {
                    en: "Which premium vodka production method involves filtering through diamond dust?",
                    es: "¿Qué método de producción de vodka premium involucra filtrar a través de polvo de diamante?",
                    de: "Welche Premium-Wodka-Produktionsmethode beinhaltet das Filtern durch Diamantstaub?",
                    nl: "Welke premium vodka productiemethode houdt filteren door diamantstof in?"
                },
                options: [
                    {
                        en: "Russian filtration technique",
                        es: "Técnica de filtración rusa",
                        de: "Russische Filtrationstechnik",
                        nl: "Russische filtratietechniek"
                    },
                    {
                        en: "Polish diamond filtering",
                        es: "Filtrado de diamante polaco",
                        de: "Polnisches Diamantfiltern",
                        nl: "Pools diamant filteren"
                    },
                    {
                        en: "Swedish premium process",
                        es: "Proceso premium sueco",
                        de: "Schwedisches Premium-Verfahren",
                        nl: "Zweeds premium proces"
                    },
                    {
                        en: "Ukrainian luxury method",
                        es: "Método de lujo ucraniano",
                        de: "Ukrainische Luxusmethode",
                        nl: "Oekraïense luxe methode"
                    }
                ],
                correct: 1,
                explanation: {
                    en: "Some Polish premium vodka brands use diamond dust filtration as an ultra-luxury refinement process, claiming it provides exceptional purity and smoothness.",
                    es: "Algunas marcas polacas de vodka premium usan filtración con polvo de diamante como un proceso de refinamiento ultra-lujo, afirmando que proporciona pureza y suavidad excepcionales.",
                    de: "Einige polnische Premium-Wodka-Marken verwenden Diamantstaub-Filtration als Ultra-Luxus-Verfeinerungsprozess und behaupten, dass es außergewöhnliche Reinheit und Geschmeidigkeit bietet.",
                    nl: "Sommige Poolse premium vodka merken gebruiken diamantstof filtratie als een ultra-luxe verfijningsproces, bewerend dat het uitzonderlijke zuiverheid en zachtheid biedt."
                }
            },
            {
                question: {
                    en: "What is the Angel's Share in spirit aging?",
                    es: "¿Qué es la 'Parte del Ángel' en el envejecimiento de licores?",
                    de: "Was ist der 'Anteil der Engel' bei der Spirituosen-Reifung?",
                    nl: "Wat is het Angel's Share bij het rijpen van sterke drank?"
                },
                options: [
                    {
                        en: "The amount of alcohol that evaporates during barrel aging",
                        es: "La cantidad de alcohol que se evapora durante el envejecimiento en barril",
                        de: "Die Menge Alkohol, die während der Fassreifung verdunstet",
                        nl: "De hoeveelheid alcohol die verdampt tijdens vatrijping"
                    },
                    {
                        en: "The first portion distilled from the still",
                        es: "La primera porción destilada del alambique",
                        de: "Der erste Anteil, der aus der Brennblase destilliert wird",
                        nl: "Het eerste deel gedistilleerd uit de distilleerketel"
                    },
                    {
                        en: "The premium bottles reserved for collectors",
                        es: "Las botellas premium reservadas para coleccionistas",
                        de: "Die Premium-Flaschen, die für Sammler reserviert sind",
                        nl: "De premium flessen gereserveerd voor verzamelaars"
                    },
                    {
                        en: "The wooden char inside barrels",
                        es: "El carbón de madera dentro de los barriles",
                        de: "Die Holzkohle im Inneren der Fässer",
                        nl: "De houtskool binnenin vaten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Angel's Share refers to the portion of alcohol that naturally evaporates through the barrel wood during aging, typically 2-4% per year depending on climate conditions.",
                    es: "La Parte del Ángel se refiere a la porción de alcohol que se evapora naturalmente a través de la madera del barril durante el envejecimiento, típicamente 2-4% por año dependiendo de las condiciones climáticas.",
                    de: "Der Anteil der Engel bezieht sich auf den Alkoholanteil, der während der Reifung natürlich durch das Fassholz verdunstet, typischerweise 2-4% pro Jahr je nach Klimabedingungen.",
                    nl: "Het Angel's Share verwijst naar het deel alcohol dat natuurlijk verdampt door het vathout tijdens het rijpen, typisch 2-4% per jaar afhankelijk van klimaatomstandigheden."
                }
            },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
