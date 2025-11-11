// Quiz Level 4: Drinken - Cocktails (International Cocktails and Culture)
(function() {
  const level4 = {
    name: {
      en: "International Cocktails and Culture",
      es: "Cócteles Internacionales y Cultura",
      de: "Internationale Cocktails und Kultur",
      nl: "Internationale Cocktails en Cultuur"
    },
    questions: [
      {
        question: {
          en: "Which cocktail is considered the national drink of Brazil?",
          es: "¿Qué cóctel se considera la bebida nacional de Brasil?",
          de: "Welcher Cocktail gilt als Nationalgetränk von Brasilien?",
          nl: "Welke cocktail wordt beschouwd als de nationale drank van Brazilië?"
        },
        options: [
          { en: "Caipirinha", es: "Caipirinha", de: "Caipirinha", nl: "Caipirinha" },
          { en: "Batida", es: "Batida", de: "Batida", nl: "Batida" },
          { en: "Caipirosca", es: "Caipirosca", de: "Caipirosca", nl: "Caipirosca" },
          { en: "Rabo de Galo", es: "Rabo de Galo", de: "Rabo de Galo", nl: "Rabo de Galo" }
        ],
        correct: 0,
        explanation: {
          en: "Caipirinha, made with cachaça, sugar, and lime, is Brazil's national cocktail and most popular drink.",
          es: "Caipirinha, hecha con cachaça, azúcar y lima, es el cóctel nacional de Brasil y su bebida más popular.",
          de: "Caipirinha, aus Cachaça, Zucker und Limette, ist Brasiliens Nationalcocktail und beliebtestes Getränk.",
          nl: "Caipirinha, gemaakt met cachaça, suiker en limoen, is Brazilië's nationale cocktail en populairste drank."
        }
      },
      {
        question: {
          en: "What is the traditional Mexican cocktail made with tequila and grapefruit soda?",
          es: "¿Cuál es el cóctel mexicano tradicional hecho con tequila y refresco de toronja?",
          de: "Was ist der traditionelle mexikanische Cocktail aus Tequila und Grapefruit-Limonade?",
          nl: "Wat is de traditionele Mexicaanse cocktail gemaakt met tequila en grapefruitsoda?"
        },
        options: [
          { en: "Margarita", es: "Margarita", de: "Margarita", nl: "Margarita" },
          { en: "Paloma", es: "Paloma", de: "Paloma", nl: "Paloma" },
          { en: "Tequila Sunrise", es: "Tequila Sunrise", de: "Tequila Sunrise", nl: "Tequila Sunrise" },
          { en: "El Diablo", es: "El Diablo", de: "El Diablo", nl: "El Diablo" }
        ],
        correct: 1,
        explanation: {
          en: "The Paloma is Mexico's most popular tequila cocktail, made with tequila, lime juice, and grapefruit soda.",
          es: "La Paloma es el cóctel de tequila más popular de México, hecho con tequila, jugo de lima y refresco de toronja.",
          de: "Die Paloma ist Mexikos beliebtester Tequila-Cocktail, aus Tequila, Limettensaft und Grapefruit-Limonade.",
          nl: "De Paloma is Mexico's populairste tequila cocktail, gemaakt met tequila, limoensap en grapefruitsoda."
        }
      },
      {
        question: {
          en: "Which Italian aperitif cocktail is made with Prosecco, Aperol, and soda water?",
          es: "¿Qué cóctel aperitivo italiano se hace con Prosecco, Aperol y agua con gas?",
          de: "Welcher italienische Aperitif-Cocktail wird mit Prosecco, Aperol und Sodawasser zubereitet?",
          nl: "Welke Italiaanse aperitief cocktail wordt gemaakt met Prosecco, Aperol en sodawater?"
        },
        options: [
          { en: "Negroni", es: "Negroni", de: "Negroni", nl: "Negroni" },
          { en: "Aperol Spritz", es: "Aperol Spritz", de: "Aperol Spritz", nl: "Aperol Spritz" },
          { en: "Americano", es: "Americano", de: "Americano", nl: "Americano" },
          { en: "Bellini", es: "Bellini", de: "Bellini", nl: "Bellini" }
        ],
        correct: 1,
        explanation: {
          en: "The Aperol Spritz is a popular Italian aperitif made with 3 parts Prosecco, 2 parts Aperol, and 1 part soda water.",
          es: "El Aperol Spritz es un aperitivo italiano popular hecho con 3 partes de Prosecco, 2 partes de Aperol y 1 parte de agua con gas.",
          de: "Der Aperol Spritz ist ein beliebter italienischer Aperitif aus 3 Teilen Prosecco, 2 Teilen Aperol und 1 Teil Sodawasser.",
          nl: "De Aperol Spritz is een populaire Italiaanse aperitief gemaakt met 3 delen Prosecco, 2 delen Aperol en 1 deel sodawater."
        }
      },
      {
        question: {
          en: "What is the traditional French cocktail made with cognac and orange liqueur?",
          es: "¿Cuál es el cóctel francés tradicional hecho con coñac y licor de naranja?",
          de: "Was ist der traditionelle französische Cocktail aus Cognac und Orangenlikör?",
          nl: "Wat is de traditionele Franse cocktail gemaakt met cognac en sinaasappellikeur?"
        },
        options: [
          { en: "French 75", es: "French 75", de: "French 75", nl: "French 75" },
          { en: "Sidecar", es: "Sidecar", de: "Sidecar", nl: "Sidecar" },
          { en: "Vieux Carré", es: "Vieux Carré", de: "Vieux Carré", nl: "Vieux Carré" },
          { en: "Brandy Alexander", es: "Brandy Alexander", de: "Brandy Alexander", nl: "Brandy Alexander" }
        ],
        correct: 1,
        explanation: {
          en: "The Sidecar is a classic French cocktail made with cognac, orange liqueur (Cointreau), and lemon juice.",
          es: "El Sidecar es un cóctel francés clásico hecho con coñac, licor de naranja (Cointreau) y jugo de limón.",
          de: "Der Sidecar ist ein klassischer französischer Cocktail aus Cognac, Orangenlikör (Cointreau) und Zitronensaft.",
          nl: "De Sidecar is een klassieke Franse cocktail gemaakt met cognac, sinaasappellikeur (Cointreau) en citroensap."
        }
      },
      {
        question: {
          en: "Which Japanese cocktail ingredient is used in a Sake Bomb?",
          es: "¿Qué ingrediente de cóctel japonés se usa en un Sake Bomb?",
          de: "Welche japanische Cocktailzutat wird in einer Sake Bomb verwendet?",
          nl: "Welk Japans cocktail ingrediënt wordt gebruikt in een Sake Bomb?"
        },
        options: [
          { en: "Shochu", es: "Shochu", de: "Shochu", nl: "Shochu" },
          { en: "Sake", es: "Sake", de: "Sake", nl: "Sake" },
          { en: "Umeshu", es: "Umeshu", de: "Umeshu", nl: "Umeshu" },
          { en: "Awamori", es: "Awamori", de: "Awamori", nl: "Awamori" }
        ],
        correct: 1,
        explanation: {
          en: "A Sake Bomb combines sake (rice wine) dropped into beer, popular in Japanese-American drinking culture.",
          es: "Un Sake Bomb combina sake (vino de arroz) que se deja caer en cerveza, popular en la cultura de bebida japonesa-americana.",
          de: "Eine Sake Bomb kombiniert Sake (Reiswein), der in Bier getropft wird, beliebt in der japanisch-amerikanischen Trinkkultur.",
          nl: "Een Sake Bomb combineert sake (rijstwijn) die in bier wordt laten vallen, populair in de Japans-Amerikaanse drinkcultuur."
        }
      },
      {
        question: {
          en: "What is the national cocktail of Peru?",
          es: "¿Cuál es el cóctel nacional de Perú?",
          de: "Was ist der Nationalcocktail von Peru?",
          nl: "Wat is de nationale cocktail van Peru?"
        },
        options: [
          { en: "Pisco Sour", es: "Pisco Sour", de: "Pisco Sour", nl: "Pisco Sour" },
          { en: "Chilcano", es: "Chilcano", de: "Chilcano", nl: "Chilcano" },
          { en: "Inca Kola Cocktail", es: "Cóctel Inca Kola", de: "Inca Kola Cocktail", nl: "Inca Kola Cocktail" },
          { en: "Machu Picchu", es: "Machu Picchu", de: "Machu Picchu", nl: "Machu Picchu" }
        ],
        correct: 0,
        explanation: {
          en: "The Pisco Sour, made with pisco brandy, lime juice, simple syrup, egg white, and bitters, is Peru's national cocktail.",
          es: "El Pisco Sour, hecho con brandy pisco, jugo de lima, jarabe simple, clara de huevo y amargos, es el cóctel nacional de Perú.",
          de: "Der Pisco Sour, aus Pisco-Brandy, Limettensaft, einfachem Sirup, Eiweiß und Bittern, ist Perus Nationalcocktail.",
          nl: "De Pisco Sour, gemaakt met pisco brandy, limoensap, eenvoudige siroop, eiwit en bitters, is Peru's nationale cocktail."
        }
      },
      {
        question: {
          en: "Which Caribbean cocktail is traditionally made with dark rum and ginger beer?",
          es: "¿Qué cóctel caribeño se hace tradicionalmente con ron oscuro y cerveza de jengibre?",
          de: "Welcher karibische Cocktail wird traditionell mit dunklem Rum und Ginger Beer zubereitet?",
          nl: "Welke Caribische cocktail wordt traditioneel gemaakt met donkere rum en gemberbier?"
        },
        options: [
          { en: "Rum Punch", es: "Rum Punch", de: "Rum Punch", nl: "Rum Punch" },
          { en: "Dark 'n' Stormy", es: "Dark 'n' Stormy", de: "Dark 'n' Stormy", nl: "Dark 'n' Stormy" },
          { en: "Hurricane", es: "Hurricane", de: "Hurricane", nl: "Hurricane" },
          { en: "Painkiller", es: "Painkiller", de: "Painkiller", nl: "Painkiller" }
        ],
        correct: 1,
        explanation: {
          en: "The Dark 'n' Stormy, made with dark rum and ginger beer, originated in Bermuda and is a Caribbean classic.",
          es: "El Dark 'n' Stormy, hecho con ron oscuro y cerveza de jengibre, se originó en Bermudas y es un clásico caribeño.",
          de: "Der Dark 'n' Stormy, aus dunklem Rum und Ginger Beer, entstand auf Bermuda und ist ein karibischer Klassiker.",
          nl: "De Dark 'n' Stormy, gemaakt met donkere rum en gemberbier, ontstond in Bermuda en is een Caribische klassieker."
        }
      },
      {
        question: {
          en: "What is the traditional Russian cocktail made with vodka and caviar?",
          es: "¿Cuál es el cóctel ruso tradicional hecho con vodka y caviar?",
          de: "Was ist der traditionelle russische Cocktail aus Wodka und Kaviar?",
          nl: "Wat is de traditionele Russische cocktail gemaakt met vodka en kaviaar?"
        },
        options: [
          { en: "Moscow Mule", es: "Moscow Mule", de: "Moscow Mule", nl: "Moscow Mule" },
          { en: "White Russian", es: "White Russian", de: "White Russian", nl: "White Russian" },
          { en: "Black Russian", es: "Black Russian", de: "Black Russian", nl: "Black Russian" },
          { en: "Caviar Martini", es: "Caviar Martini", de: "Kaviar Martini", nl: "Kaviaar Martini" }
        ],
        correct: 3,
        explanation: {
          en: "A Caviar Martini is a luxury Russian-inspired cocktail featuring premium vodka garnished with caviar.",
          es: "Un Caviar Martini es un cóctel de lujo inspirado en Rusia que presenta vodka premium adornado con caviar.",
          de: "Ein Kaviar Martini ist ein luxuriöser, russisch inspirierter Cocktail mit Premium-Wodka, garniert mit Kaviar.",
          nl: "Een Kaviaar Martini is een luxe Russisch-geïnspireerde cocktail met premium vodka gegarneerd met kaviaar."
        }
      },
      {
        question: {
          en: "Which Spanish cocktail is made with red wine and fruit?",
          es: "¿Qué cóctel español se hace con vino tinto y fruta?",
          de: "Welcher spanische Cocktail wird mit Rotwein und Früchten zubereitet?",
          nl: "Welke Spaanse cocktail wordt gemaakt met rode wijn en fruit?"
        },
        options: [
          { en: "Tinto de Verano", es: "Tinto de Verano", de: "Tinto de Verano", nl: "Tinto de Verano" },
          { en: "Sangria", es: "Sangría", de: "Sangria", nl: "Sangria" },
          { en: "Kalimotxo", es: "Kalimotxo", de: "Kalimotxo", nl: "Kalimotxo" },
          { en: "Rebujito", es: "Rebujito", de: "Rebujito", nl: "Rebujito" }
        ],
        correct: 1,
        explanation: {
          en: "Sangria is Spain's most famous wine cocktail, traditionally made with red wine, fruit, and sweeteners.",
          es: "La Sangría es el cóctel de vino más famoso de España, tradicionalmente hecho con vino tinto, fruta y endulzantes.",
          de: "Sangria ist Spaniens berühmtester Wein-Cocktail, traditionell aus Rotwein, Früchten und Süßungsmitteln.",
          nl: "Sangria is Spanje's beroemdste wijncocktail, traditioneel gemaakt met rode wijn, fruit en zoetstoffen."
        }
      },
      {
        question: {
          en: "What is the traditional Greek cocktail made with ouzo?",
          es: "¿Cuál es el cóctel griego tradicional hecho con ouzo?",
          de: "Was ist der traditionelle griechische Cocktail aus Ouzo?",
          nl: "Wat is de traditionele Griekse cocktail gemaakt met ouzo?"
        },
        options: [
          { en: "Ouzo Frappé", es: "Ouzo Frappé", de: "Ouzo Frappé", nl: "Ouzo Frappé" },
          { en: "Greek Coffee Cocktail", es: "Cóctel de Café Griego", de: "Griechischer Kaffee-Cocktail", nl: "Griekse Koffie Cocktail" },
          { en: "Metaxa Sour", es: "Metaxa Sour", de: "Metaxa Sour", nl: "Metaxa Sour" },
          { en: "Zeus Lightning", es: "Rayo de Zeus", de: "Zeus Blitz", nl: "Zeus Bliksem" }
        ],
        correct: 0,
        explanation: {
          en: "Ouzo Frappé is a traditional Greek cocktail made with ouzo, water, and ice, creating a refreshing anise-flavored drink.",
          es: "Ouzo Frappé es un cóctel griego tradicional hecho con ouzo, agua y hielo, creando una bebida refrescante con sabor a anís.",
          de: "Ouzo Frappé ist ein traditioneller griechischer Cocktail aus Ouzo, Wasser und Eis, was ein erfrischendes Anis-Getränk ergibt.",
          nl: "Ouzo Frappé is een traditionele Griekse cocktail gemaakt met ouzo, water en ijs, wat een verfrissende anijs-smaak drank creëert."
        }
      },
      {
        question: {
          en: "What makes a 'Perfect' cocktail different from a standard version?",
          es: "¿Qué hace que un cóctel 'Perfect' sea diferente de una versión estándar?",
          de: "Was macht einen 'Perfect'-Cocktail anders als eine Standardversion?",
          nl: "Wat maakt een 'Perfect' cocktail anders dan een standaardversie?"
        },
        options: [
          { en: "Uses premium spirits only", es: "Usa solo licores premium", de: "Verwendet nur Premium-Spirituosen", nl: "Gebruikt alleen premium spirits" },
          { en: "Equal parts sweet and dry vermouth", es: "Partes iguales de vermut dulce y seco", de: "Gleiche Teile süßer und trockener Wermut", nl: "Gelijke delen zoete en droge vermouth" },
          { en: "Served at perfect temperature", es: "Servido a temperatura perfecta", de: "Bei perfekter Temperatur serviert", nl: "Geserveerd op perfecte temperatuur" },
          { en: "Made by expert bartender", es: "Hecho por barman experto", de: "Von Experten-Barkeeper gemacht", nl: "Gemaakt door expert bartender" }
        ],
        correct: 1,
        explanation: {
          en: "A 'Perfect' cocktail uses equal parts sweet and dry vermouth instead of just one type. Examples include Perfect Manhattan and Perfect Martinez.",
          es: "Un cóctel 'Perfect' usa partes iguales de vermut dulce y seco en lugar de solo un tipo. Los ejemplos incluyen Perfect Manhattan y Perfect Martinez.",
          de: "Ein 'Perfect'-Cocktail verwendet gleiche Teile süßen und trockenen Wermut statt nur einer Sorte. Beispiele sind Perfect Manhattan und Perfect Martinez.",
          nl: "Een 'Perfect' cocktail gebruikt gelijke delen zoete en droge vermouth in plaats van slechts één type. Voorbeelden zijn Perfect Manhattan en Perfect Martinez."
        }
      },
      {
        question: {
          en: "What is the key ingredient in a Singapore Sling?",
          es: "¿Cuál es el ingrediente clave en un Singapore Sling?",
          de: "Was ist die Hauptzutat in einem Singapore Sling?",
          nl: "Wat is het belangrijkste ingrediënt in een Singapore Sling?"
        },
        options: [
          { en: "Vodka", es: "Vodka", de: "Wodka", nl: "Vodka" },
          { en: "Gin and Cherry Heering", es: "Ginebra y Cherry Heering", de: "Gin und Cherry Heering", nl: "Gin en Cherry Heering" },
          { en: "Rum", es: "Ron", de: "Rum", nl: "Rum" },
          { en: "Tequila", es: "Tequila", de: "Tequila", nl: "Tequila" }
        ],
        correct: 1,
        explanation: {
          en: "Singapore Sling, created at Raffles Hotel, combines gin, Cherry Heering liqueur, Bénédictine, pineapple juice, and lime juice for a complex tropical cocktail.",
          es: "El Singapore Sling, creado en el Hotel Raffles, combina ginebra, licor Cherry Heering, Bénédictine, jugo de piña y jugo de lima para un cóctel tropical complejo.",
          de: "Der Singapore Sling, im Raffles Hotel kreiert, kombiniert Gin, Cherry Heering Likör, Bénédictine, Ananassaft und Limettensaft zu einem komplexen tropischen Cocktail.",
          nl: "Singapore Sling, gecreëerd in Raffles Hotel, combineert gin, Cherry Heering likeur, Bénédictine, ananassap en limoensap voor een complexe tropische cocktail."
        }
      },
      {
        question: {
          en: "What is an 'up' cocktail?",
          es: "¿Qué es un cóctel 'up'?",
          de: "Was ist ein 'up'-Cocktail?",
          nl: "Wat is een 'up' cocktail?"
        },
        options: [
          { en: "Served in tall glass", es: "Servido en vaso alto", de: "Im hohen Glas serviert", nl: "Geserveerd in hoog glas" },
          { en: "Shaken with ice, strained into stemmed glass without ice", es: "Agitado con hielo, colado en copa sin hielo", de: "Mit Eis geschüttelt, in Stielglas ohne Eis abgeseiht", nl: "Geschud met ijs, gezeefd in gesteeld glas zonder ijs" },
          { en: "With extra alcohol", es: "Con alcohol extra", de: "Mit extra Alkohol", nl: "Met extra alcohol" },
          { en: "Layered drink", es: "Bebida en capas", de: "Geschichtetes Getränk", nl: "Gelaagd drankje" }
        ],
        correct: 1,
        explanation: {
          en: "'Up' or 'straight up' means the cocktail is shaken or stirred with ice, then strained into a chilled stemmed glass and served without ice, like a Martini.",
          es: "'Up' o 'straight up' significa que el cóctel se agita o revuelve con hielo, luego se cuela en una copa fría y se sirve sin hielo, como un Martini.",
          de: "'Up' oder 'straight up' bedeutet, dass der Cocktail mit Eis geschüttelt oder gerührt, dann in ein gekühltes Stielglas abgeseiht und ohne Eis serviert wird, wie ein Martini.",
          nl: "'Up' of 'straight up' betekent dat de cocktail met ijs wordt geschud of geroerd, vervolgens gezeefd in een gekoeld gesteeld glas en zonder ijs geserveerd, zoals een Martini."
        }
      },
      {
        question: {
          en: "What cocktail uses three types of rum?",
          es: "¿Qué cóctel usa tres tipos de ron?",
          de: "Welcher Cocktail verwendet drei Rumarten?",
          nl: "Welke cocktail gebruikt drie soorten rum?"
        },
        options: [
          { en: "Mai Tai", es: "Mai Tai", de: "Mai Tai", nl: "Mai Tai" },
          { en: "Zombie", es: "Zombie", de: "Zombie", nl: "Zombie" },
          { en: "Piña Colada", es: "Piña Colada", de: "Piña Colada", nl: "Piña Colada" },
          { en: "Mojito", es: "Mojito", de: "Mojito", nl: "Mojito" }
        ],
        correct: 1,
        explanation: {
          en: "The Zombie, created by Donn Beach, uses three types of rum (white, gold, and dark), fruit juices, and liqueurs, creating an extremely potent tiki classic.",
          es: "El Zombie, creado por Donn Beach, usa tres tipos de ron (blanco, dorado y oscuro), jugos de frutas y licores, creando un clásico tiki extremadamente potente.",
          de: "Der Zombie, von Donn Beach kreiert, verwendet drei Rumarten (weiß, gold und dunkel), Fruchtsäfte und Liköre und erzeugt einen extrem starken Tiki-Klassiker.",
          nl: "De Zombie, gecreëerd door Donn Beach, gebruikt drie soorten rum (wit, goud en donker), vruchtensappen en likeuren, wat een extreem krachtige tiki klassieker creëert."
        }
      },
      {
        question: {
          en: "What distinguishes a Sidecar?",
          es: "¿Qué distingue a un Sidecar?",
          de: "Was unterscheidet einen Sidecar?",
          nl: "Wat onderscheidt een Sidecar?"
        },
        options: [
          { en: "Made with whiskey", es: "Hecho con whisky", de: "Mit Whiskey gemacht", nl: "Gemaakt met whiskey" },
          { en: "Made with cognac, Cointreau, and lemon juice", es: "Hecho con coñac, Cointreau y jugo de limón", de: "Mit Cognac, Cointreau und Zitronensaft gemacht", nl: "Gemaakt met cognac, Cointreau en citroensap" },
          { en: "Served hot", es: "Servido caliente", de: "Heiß serviert", nl: "Warm geserveerd" },
          { en: "Contains egg white", es: "Contiene clara de huevo", de: "Enthält Eiweiß", nl: "Bevat eiwit" }
        ],
        correct: 1,
        explanation: {
          en: "The Sidecar is a Prohibition-era cocktail combining cognac (or brandy), orange liqueur (Cointreau), and lemon juice, often served with a sugar rim.",
          es: "El Sidecar es un cóctel de la era de la Prohibición que combina coñac (o brandy), licor de naranja (Cointreau) y jugo de limón, a menudo servido con un borde de azúcar.",
          de: "Der Sidecar ist ein Cocktail aus der Prohibitionszeit, der Cognac (oder Brandy), Orangenlikör (Cointreau) und Zitronensaft kombiniert, oft mit Zuckerrand serviert.",
          nl: "De Sidecar is een cocktail uit het Droogleggingstijdperk die cognac (of brandy), sinaasappellikeur (Cointreau) en citroensap combineert, vaak geserveerd met een suikerrand."
        }
      },
      {
        question: {
          en: "What is a Daisy cocktail?",
          es: "¿Qué es un cóctel Daisy?",
          de: "Was ist ein Daisy-Cocktail?",
          nl: "Wat is een Daisy cocktail?"
        },
        options: [
          { en: "Daisy uses grenadine or fruit syrup", es: "Daisy usa granadina o jarabe de frutas", de: "Daisy verwendet Grenadine oder Fruchtsirup", nl: "Daisy gebruikt granaatappelsiroop of fruitsiroop" },
          { en: "Daisy is always frozen", es: "Daisy siempre está congelado", de: "Daisy ist immer gefroren", nl: "Daisy is altijd bevroren" },
          { en: "Daisy has no citrus", es: "Daisy no tiene cítricos", de: "Daisy hat keine Zitrusfrüchte", nl: "Daisy heeft geen citrus" },
          { en: "Daisy uses vodka only", es: "Daisy usa solo vodka", de: "Daisy verwendet nur Wodka", nl: "Daisy gebruikt alleen vodka" }
        ],
        correct: 0,
        explanation: {
          en: "A Daisy is a sour with added grenadine or fruit syrup and often served with soda water. The Margarita is actually a Tequila Daisy variation.",
          es: "Un Daisy es un sour con granadina o jarabe de frutas agregado y a menudo servido con agua de soda. La Margarita es en realidad una variación de Tequila Daisy.",
          de: "Ein Daisy ist ein Sour mit zusätzlicher Grenadine oder Fruchtsirup und wird oft mit Sodawasser serviert. Die Margarita ist eigentlich eine Tequila-Daisy-Variation.",
          nl: "Een Daisy is een sour met toegevoegde granaatappelsiroop of fruitsiroop en vaak geserveerd met sodawater. De Margarita is eigenlijk een Tequila Daisy variatie."
        }
      },
      {
        question: {
          en: "What is 'throwing' a cocktail?",
          es: "¿Qué es 'lanzar' un cóctel?",
          de: "Was ist 'Werfen' eines Cocktails?",
          nl: "Wat is 'gooien' van een cocktail?"
        },
        options: [
          { en: "Discarding bad ingredients", es: "Descartar ingredientes malos", de: "Schlechte Zutaten wegwerfen", nl: "Slechte ingrediënten weggooien" },
          { en: "Pouring between two mixing vessels from height", es: "Verter entre dos recipientes desde altura", de: "Von Höhe zwischen zwei Mischgefäßen gießen", nl: "Gieten tussen twee mengvaten vanaf hoogte" },
          { en: "Tossing garnish", es: "Lanzar guarnición", de: "Garnitur werfen", nl: "Garnering gooien" },
          { en: "Shaking very hard", es: "Agitar muy fuerte", de: "Sehr hart schütteln", nl: "Heel hard schudden" }
        ],
        correct: 1,
        explanation: {
          en: "'Throwing' or 'rolling' aerates the cocktail by pouring it between two mixing tins from a height, creating texture without overdilution. Used for Bloody Mary.",
          es: "'Lanzar' o 'rodar' airea el cóctel vertiéndolo entre dos latas de mezcla desde altura, creando textura sin sobredilución. Usado para Bloody Mary.",
          de: "'Werfen' oder 'Rollen' belüftet den Cocktail, indem man ihn aus der Höhe zwischen zwei Mischbechern gießt, wodurch Textur ohne Überverdünnung entsteht. Für Bloody Mary verwendet.",
          nl: "'Gooien' of 'rollen' belucht de cocktail door het vanuit hoogte tussen twee mengbekers te gieten, wat textuur creëert zonder overdilutie. Gebruikt voor Bloody Mary."
        }
      },
      {
        question: {
          en: "What makes a Paloma different from a Margarita?",
          es: "¿Qué hace que una Paloma sea diferente de una Margarita?",
          de: "Was macht eine Paloma anders als eine Margarita?",
          nl: "Wat maakt een Paloma anders dan een Margarita?"
        },
        options: [
          { en: "Uses mezcal instead of tequila", es: "Usa mezcal en lugar de tequila", de: "Verwendet Mezcal statt Tequila", nl: "Gebruikt mezcal in plaats van tequila" },
          { en: "Uses grapefruit soda instead of lime and triple sec", es: "Usa refresco de toronja en lugar de lima y triple sec", de: "Verwendet Grapefruit-Limonade statt Limette und Triple Sec", nl: "Gebruikt grapefruitsoda in plaats van limoen en triple sec" },
          { en: "Served hot", es: "Servido caliente", de: "Heiß serviert", nl: "Warm geserveerd" },
          { en: "No alcohol", es: "Sin alcohol", de: "Kein Alkohol", nl: "Geen alcohol" }
        ],
        correct: 1,
        explanation: {
          en: "Paloma, Mexico's most popular cocktail, uses tequila with grapefruit soda (or fresh grapefruit juice and soda), lime, and salt—simpler and more refreshing than a Margarita.",
          es: "La Paloma, el cóctel más popular de México, usa tequila con refresco de toronja (o jugo fresco de toronja y soda), lima y sal—más simple y refrescante que una Margarita.",
          de: "Paloma, Mexikos beliebtester Cocktail, verwendet Tequila mit Grapefruit-Limonade (oder frischem Grapefruitsaft und Soda), Limette und Salz—einfacher und erfrischender als eine Margarita.",
          nl: "Paloma, Mexico's populairste cocktail, gebruikt tequila met grapefruitsoda (of verse grapefruitsap en soda), limoen en zout—eenvoudiger en verfrissender dan een Margarita."
        }
      },
      {
        question: {
          en: "What is a 'Bramble' cocktail?",
          es: "¿Qué es un cóctel 'Bramble'?",
          de: "Was ist ein 'Bramble'-Cocktail?",
          nl: "Wat is een 'Bramble' cocktail?"
        },
        options: [
          { en: "Gin with blackberry liqueur and lemon", es: "Ginebra con licor de mora y limón", de: "Gin mit Brombeerlikör und Zitrone", nl: "Gin met braambessenlokeur en citroen" },
          { en: "Vodka with cranberry", es: "Vodka con arándano", de: "Wodka mit Preiselbeere", nl: "Vodka met cranberry" },
          { en: "Rum with berries", es: "Ron con bayas", de: "Rum mit Beeren", nl: "Rum met bessen" },
          { en: "Whiskey with maple", es: "Whisky con arce", de: "Whiskey mit Ahorn", nl: "Whiskey met esdoorn" }
        ],
        correct: 0,
        explanation: {
          en: "The Bramble, created by Dick Bradsell in 1980s London, combines gin, lemon juice, sugar syrup, and crème de mûre (blackberry liqueur) drizzled over crushed ice.",
          es: "El Bramble, creado por Dick Bradsell en Londres en los 1980s, combina ginebra, jugo de limón, jarabe de azúcar y crème de mûre (licor de mora) rociado sobre hielo picado.",
          de: "Der Bramble, von Dick Bradsell im London der 1980er kreiert, kombiniert Gin, Zitronensaft, Zuckersirup und Crème de Mûre (Brombeerlikör) über Crushed Ice geträufelt.",
          nl: "De Bramble, gecreëerd door Dick Bradsell in 1980s Londen, combineert gin, citroensap, suikersiroop en crème de mûre (braambessenlokeur) gedruppeld over crushed ijs."
        }
      },
      {
        question: {
          en: "What is the traditional way to serve Absinthe?",
          es: "¿Cuál es la forma tradicional de servir Absenta?",
          de: "Was ist die traditionelle Art, Absinth zu servieren?",
          nl: "Wat is de traditionele manier om Absint te serveren?"
        },
        options: [
          { en: "Shaken with ice", es: "Agitado con hielo", de: "Mit Eis geschüttelt", nl: "Geschud met ijs" },
          { en: "Dripping cold water over sugar cube into absinthe", es: "Gotear agua fría sobre terrón de azúcar en absenta", de: "Kaltes Wasser über Zuckerwürfel in Absinth tropfen", nl: "Druppelen van koud water over suikerklontje in absint" },
          { en: "Hot with coffee", es: "Caliente con café", de: "Heiß mit Kaffee", nl: "Warm met koffie" },
          { en: "Straight, no dilution", es: "Solo, sin dilución", de: "Pur, ohne Verdünnung", nl: "Puur, geen verdunning" }
        ],
        correct: 1,
        explanation: {
          en: "The traditional absinthe ritual involves placing a sugar cube on a slotted spoon over the glass and slowly dripping ice-cold water through it to louche (cloud) the absinthe.",
          es: "El ritual tradicional de absenta implica colocar un terrón de azúcar en una cuchara ranurada sobre el vaso y gotear lentamente agua helada a través de él para enturbiar la absenta.",
          de: "Das traditionelle Absinth-Ritual beinhaltet das Platzieren eines Zuckerwürfels auf einem Löffelsieb über dem Glas und langsames Tropfen von eiskaltem Wasser durch ihn, um den Absinth zu louchen (trüben).",
          nl: "Het traditionele absint ritueel omvat het plaatsen van een suikerklontje op een gegleufde lepel boven het glas en langzaam ijskoud water er doorheen druppelen om de absint te louchen (troebel maken)."
        }
      }]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
