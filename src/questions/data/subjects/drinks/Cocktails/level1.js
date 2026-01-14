// Quiz Level 1: Drinken - Cocktails (Basic Cocktail Knowledge)
(function() {
  const level1 = {
    name: {
      en: "Basic Cocktail Knowledge",
      es: "Conocimiento Básico de Cócteles",
      de: "Grundlagen der Cocktailkunde",
      nl: "Basis Cocktailkennis"
    },
    questions: [
      {
        question: {
          en: "What is the main spirit in a Mojito?",
          es: "¿Cuál es el licor principal en un Mojito?",
          de: "Was ist der Hauptspirituose in einem Mojito?",
          nl: "Wat is de hoofdspirituose in een Mojito?"
        },
        options: [
          { en: "Rum", es: "Ron", de: "Rum", nl: "Rum" },
          { en: "Vodka", es: "Vodka", de: "Wodka", nl: "Vodka" },
          { en: "Gin", es: "Ginebra", de: "Gin", nl: "Gin" },
          { en: "Tequila", es: "Tequila", de: "Tequila", nl: "Tequila" }
        ],
        correct: 0,
        explanation: {
          en: "A Mojito is made with white rum, sugar, lime juice, soda water, and mint.",
          es: "Un Mojito se hace con ron blanco, azúcar, jugo de lima, agua con gas y menta.",
          de: "Ein Mojito wird mit weißem Rum, Zucker, Limettensaft, Sodawasser und Minze zubereitet.",
          nl: "Een Mojito wordt gemaakt met witte rum, suiker, limoensap, sodawater en munt."
        }
      },
      {
        question: {
          en: "Which cocktail is traditionally served with an olive or lemon twist?",
          es: "¿Qué cóctel se sirve tradicionalmente con una aceituna o cáscara de limón?",
          de: "Welcher Cocktail wird traditionell mit einer Olive oder Zitronenzeste serviert?",
          nl: "Welke cocktail wordt traditioneel geserveerd met een olijf of citroenschil?"
        },
        options: [
          { en: "Manhattan", es: "Manhattan", de: "Manhattan", nl: "Manhattan" },
          { en: "Martini", es: "Martini", de: "Martini", nl: "Martini" },
          { en: "Old Fashioned", es: "Old Fashioned", de: "Old Fashioned", nl: "Old Fashioned" },
          { en: "Whiskey Sour", es: "Whiskey Sour", de: "Whiskey Sour", nl: "Whiskey Sour" }
        ],
        correct: 1,
        explanation: {
          en: "A classic Martini is traditionally garnished with either an olive or a lemon twist.",
          es: "Un Martini clásico se adorna tradicionalmente con una aceituna o una cáscara de limón.",
          de: "Ein klassischer Martini wird traditionell mit einer Olive oder einer Zitronenzeste garniert.",
          nl: "Een klassieke Martini wordt traditioneel gegarneerd met een olijf of een citroenschil."
        }
      },
      {
        question: {
          en: "What type of glass is typically used for serving a Margarita?",
          es: "¿Qué tipo de copa se usa típicamente para servir una Margarita?",
          de: "Welche Art von Glas wird typischerweise für einen Margarita verwendet?",
          nl: "Welk type glas wordt typisch gebruikt voor het serveren van een Margarita?"
        },
        options: [
          { en: "Martini glass", es: "Copa de martini", de: "Martiniglas", nl: "Martiniglas" },
          { en: "Highball glass", es: "Vaso highball", de: "Highball-Glas", nl: "Highball glas" },
          { en: "Margarita glass", es: "Copa de margarita", de: "Margarita-Glas", nl: "Margarita glas" },
          { en: "Old Fashioned glass", es: "Vaso Old Fashioned", de: "Old Fashioned-Glas", nl: "Old Fashioned glas" }
        ],
        correct: 2,
        explanation: {
          en: "A Margarita is served in a wide-rimmed glass called a Margarita glass, often with a salted rim.",
          es: "Una Margarita se sirve en una copa de borde ancho llamada copa de margarita, a menudo con sal en el borde.",
          de: "Ein Margarita wird in einem breitrandigen Glas namens Margarita-Glas serviert, oft mit gesalzenem Rand.",
          nl: "Een Margarita wordt geserveerd in een glas met brede rand genaamd een Margarita glas, vaak met een gezouten rand."
        }
      },
      {
        question: {
          en: "Which ingredient is essential for making a Piña Colada?",
          es: "¿Qué ingrediente es esencial para hacer una Piña Colada?",
          de: "Welche Zutat ist für die Herstellung einer Piña Colada unerlässlich?",
          nl: "Welk ingrediënt is essentieel voor het maken van een Piña Colada?"
        },
        options: [
          { en: "Coconut cream", es: "Crema de coco", de: "Kokosnusscreme", nl: "Kokoscrème" },
          { en: "Orange juice", es: "Jugo de naranja", de: "Orangensaft", nl: "Sinaasappelsap" },
          { en: "Cranberry juice", es: "Jugo de arándano", de: "Cranberrysaft", nl: "Cranberrysap" },
          { en: "Grenadine", es: "Granadina", de: "Grenadine", nl: "Grenadine" }
        ],
        correct: 0,
        explanation: {
          en: "Piña Colada is made with rum, coconut cream, and pineapple juice, blended with ice.",
          es: "La Piña Colada se hace con ron, crema de coco y jugo de piña, mezclado con hielo.",
          de: "Piña Colada wird mit Rum, Kokosnusscreme und Ananassaft, mit Eis gemixt, zubereitet.",
          nl: "Piña Colada wordt gemaakt met rum, kokoscrème en ananassap, gemixt met ijs."
        }
      },
      {
        question: {
          en: "What is the primary base spirit in a Bloody Mary?",
          es: "¿Cuál es el licor base principal en un Bloody Mary?",
          de: "Was ist die primäre Basisspirituose in einem Bloody Mary?",
          nl: "Wat is de primaire basisspirituose in een Bloody Mary?"
        },
        options: [
          { en: "Gin", es: "Ginebra", de: "Gin", nl: "Gin" },
          { en: "Vodka", es: "Vodka", de: "Wodka", nl: "Vodka" },
          { en: "Rum", es: "Ron", de: "Rum", nl: "Rum" },
          { en: "Whiskey", es: "Whisky", de: "Whiskey", nl: "Whisky" }
        ],
        correct: 1,
        explanation: {
          en: "A Bloody Mary is made with vodka, tomato juice, and various spices and flavorings.",
          es: "Un Bloody Mary se hace con vodka, jugo de tomate y varias especias y saborizantes.",
          de: "Ein Bloody Mary wird mit Wodka, Tomatensaft und verschiedenen Gewürzen und Aromen zubereitet.",
          nl: "Een Bloody Mary wordt gemaakt met vodka, tomatensap en verschillende kruiden en smaakstoffen."
        }
      },
      {
        question: {
          en: "Which citrus fruit is commonly used in a Daiquiri?",
          es: "¿Qué fruto cítrico se usa comúnmente en un Daiquiri?",
          de: "Welche Zitrusfrucht wird häufig in einem Daiquiri verwendet?",
          nl: "Welke citrusvrucht wordt veel gebruikt in een Daiquiri?"
        },
        options: [
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Sinaasappel" },
          { en: "Lemon", es: "Limón", de: "Zitrone", nl: "Citroen" },
          { en: "Lime", es: "Lima", de: "Limette", nl: "Limoen" },
          { en: "Grapefruit", es: "Pomelo", de: "Grapefruit", nl: "Grapefruit" }
        ],
        correct: 2,
        explanation: {
          en: "A classic Daiquiri contains rum, lime juice, and simple syrup.",
          es: "Un Daiquiri clásico contiene ron, jugo de lima y jarabe simple.",
          de: "Ein klassischer Daiquiri enthält Rum, Limettensaft und einfachen Sirup.",
          nl: "Een klassieke Daiquiri bevat rum, limoensap en eenvoudige siroop."
        }
      },
      {
        question: {
          en: "What makes a cocktail 'on the rocks'?",
          es: "¿Qué hace que un cóctel sea 'on the rocks'?",
          de: "Was macht einen Cocktail 'on the rocks'?",
          nl: "Wat maakt een cocktail 'on the rocks'?"
        },
        options: [
          { en: "Served hot", es: "Servido caliente", de: "Heiß serviert", nl: "Heet geserveerd" },
          { en: "Served over ice", es: "Servido sobre hielo", de: "Über Eis serviert", nl: "Geserveerd over ijs" },
          { en: "Served with salt", es: "Servido con sal", de: "Mit Salz serviert", nl: "Geserveerd met zout" },
          { en: "Served in a frozen glass", es: "Servido en copa helada", de: "In gefrorenem Glas serviert", nl: "Geserveerd in een bevroren glas" }
        ],
        correct: 1,
        explanation: {
          en: "'On the rocks' means the cocktail is served over ice cubes in a glass.",
          es: "'On the rocks' significa que el cóctel se sirve sobre cubitos de hielo en un vaso.",
          de: "'On the rocks' bedeutet, dass der Cocktail über Eiswürfeln in einem Glas serviert wird.",
          nl: "'On the rocks' betekent dat de cocktail over ijsblokjes in een glas wordt geserveerd."
        }
      },
      {
        question: {
          en: "Which herb is essential for a traditional Mojito?",
          es: "¿Qué hierba es esencial para un Mojito tradicional?",
          de: "Welches Kraut ist für einen traditionellen Mojito unverzichtbar?",
          nl: "Welk kruid is essentieel voor een traditionele Mojito?"
        },
        options: [
          { en: "Basil", es: "Albahaca", de: "Basilikum", nl: "Basilicum" },
          { en: "Mint", es: "Menta", de: "Minze", nl: "Munt" },
          { en: "Rosemary", es: "Romero", de: "Rosmarin", nl: "Rozemarijn" },
          { en: "Thyme", es: "Tomillo", de: "Thymian", nl: "Tijm" }
        ],
        correct: 1,
        explanation: {
          en: "Fresh mint leaves are muddled in a Mojito to release their essential oils and flavor.",
          es: "Las hojas de menta fresca se machacan en un Mojito para liberar sus aceites esenciales y sabor.",
          de: "Frische Minzblätter werden in einem Mojito gemudelt, um ihre ätherischen Öle und Geschmack freizusetzen.",
          nl: "Verse muntblaadjes worden in een Mojito gemudled om hun essentiële oliën en smaak vrij te maken."
        }
      },
      {
        question: {
          en: "What is the main difference between a Cosmopolitan and a regular Martini?",
          es: "¿Cuál es la principal diferencia entre un Cosmopolitan y un Martini regular?",
          de: "Was ist der Hauptunterschied zwischen einem Cosmopolitan und einem normalen Martini?",
          nl: "Wat is het belangrijkste verschil tussen een Cosmopolitan en een gewone Martini?"
        },
        options: [
          { en: "Cosmopolitan uses cranberry juice", es: "Cosmopolitan usa jugo de arándano", de: "Cosmopolitan verwendet Cranberrysaft", nl: "Cosmopolitan gebruikt cranberrysap" },
          { en: "Cosmopolitan uses whiskey", es: "Cosmopolitan usa whisky", de: "Cosmopolitan verwendet Whiskey", nl: "Cosmopolitan gebruikt whisky" },
          { en: "Cosmopolitan is served hot", es: "Cosmopolitan se sirve caliente", de: "Cosmopolitan wird heiß serviert", nl: "Cosmopolitan wordt heet geserveerd" },
          { en: "Cosmopolitan has no alcohol", es: "Cosmopolitan no tiene alcohol", de: "Cosmopolitan hat keinen Alkohol", nl: "Cosmopolitan heeft geen alcohol" }
        ],
        correct: 0,
        explanation: {
          en: "A Cosmopolitan contains vodka, cranberry juice, lime juice, and orange liqueur, giving it a pink color.",
          es: "Un Cosmopolitan contiene vodka, jugo de arándano, jugo de lima y licor de naranja, dándole un color rosado.",
          de: "Ein Cosmopolitan enthält Wodka, Cranberrysaft, Limettensaft und Orangenlikör, was ihm eine rosa Farbe verleiht.",
          nl: "Een Cosmopolitan bevat vodka, cranberrysap, limoensap en sinaasappellikeur, wat het een roze kleur geeft."
        }
      },
      {
        question: {
          en: "Which cocktail is known as the 'King of Cocktails'?",
          es: "¿Qué cóctel es conocido como el 'Rey de los Cócteles'?",
          de: "Welcher Cocktail ist als 'König der Cocktails' bekannt?",
          nl: "Welke cocktail staat bekend als de 'Koning van de Cocktails'?"
        },
        options: [
          { en: "Manhattan", es: "Manhattan", de: "Manhattan", nl: "Manhattan" },
          { en: "Martini", es: "Martini", de: "Martini", nl: "Martini" },
          { en: "Old Fashioned", es: "Old Fashioned", de: "Old Fashioned", nl: "Old Fashioned" },
          { en: "Negroni", es: "Negroni", de: "Negroni", nl: "Negroni" }
        ],
        correct: 1,
        explanation: {
          en: "The Martini is often called the 'King of Cocktails' due to its elegance and iconic status.",
          es: "El Martini es a menudo llamado el 'Rey de los Cócteles' debido a su elegancia y estatus icónico.",
          de: "Der Martini wird oft als 'König der Cocktails' bezeichnet aufgrund seiner Eleganz und ikonischen Status.",
          nl: "De Martini wordt vaak de 'Koning van de Cocktails' genoemd vanwege zijn elegantie en iconische status."
        }
      },
      {
        question: {
          en: "What does 'straight up' mean when ordering a cocktail?",
          es: "¿Qué significa 'straight up' al pedir un cóctel?",
          de: "Was bedeutet 'straight up' beim Bestellen eines Cocktails?",
          nl: "Wat betekent 'straight up' bij het bestellen van een cocktail?"
        },
        options: [
          { en: "Served without ice", es: "Servido sin hielo", de: "Ohne Eis serviert", nl: "Geserveerd zonder ijs" },
          { en: "Served with extra alcohol", es: "Servido con alcohol extra", de: "Mit extra Alkohol serviert", nl: "Geserveerd met extra alcohol" },
          { en: "Shaken with ice, then strained", es: "Agitado con hielo, luego colado", de: "Mit Eis geschüttelt, dann abgeseiht", nl: "Geschud met ijs, dan gefilterd" },
          { en: "Served in a tall glass", es: "Servido en vaso alto", de: "In einem hohen Glas serviert", nl: "Geserveerd in een hoog glas" }
        ],
        correct: 2,
        explanation: {
          en: "Straight up means the cocktail is chilled with ice (shaken or stirred), then strained into a glass without ice.",
          es: "Straight up significa que el cóctel se enfría con hielo (agitado o revuelto), luego se cuela en un vaso sin hielo.",
          de: "Straight up bedeutet, dass der Cocktail mit Eis gekühlt wird (geschüttelt oder gerührt), dann ohne Eis in ein Glas abgeseiht wird.",
          nl: "Straight up betekent dat de cocktail met ijs wordt gekoeld (geschud of geroerd), dan zonder ijs in een glas wordt gefilterd."
        }
      },
      {
        question: {
          en: "Which spirit is the base of a Tom Collins?",
          es: "¿Qué licor es la base de un Tom Collins?",
          de: "Welche Spirituose ist die Basis eines Tom Collins?",
          nl: "Welke spirituose is de basis van een Tom Collins?"
        },
        options: [
          { en: "Vodka", es: "Vodka", de: "Wodka", nl: "Vodka" },
          { en: "Gin", es: "Ginebra", de: "Gin", nl: "Gin" },
          { en: "Rum", es: "Ron", de: "Rum", nl: "Rum" },
          { en: "Whiskey", es: "Whisky", de: "Whiskey", nl: "Whisky" }
        ],
        correct: 1,
        explanation: {
          en: "A Tom Collins is made with gin, lemon juice, sugar, and carbonated water, served in a tall glass with ice.",
          es: "Un Tom Collins se hace con ginebra, jugo de limón, azúcar y agua carbonatada, servido en un vaso alto con hielo.",
          de: "Ein Tom Collins wird mit Gin, Zitronensaft, Zucker und kohlensäurehaltigem Wasser zubereitet und in einem hohen Glas mit Eis serviert.",
          nl: "Een Tom Collins wordt gemaakt met gin, citroensap, suiker en koolzuurhoudend water, geserveerd in een hoog glas met ijs."
        }
      },
      {
        question: {
          en: "What is a 'virgin' cocktail?",
          es: "¿Qué es un cóctel 'virgen'?",
          de: "Was ist ein 'virgin' Cocktail?",
          nl: "Wat is een 'virgin' cocktail?"
        },
        options: [
          { en: "A cocktail with double alcohol", es: "Un cóctel con doble alcohol", de: "Ein Cocktail mit doppeltem Alkohol", nl: "Een cocktail met dubbele alcohol" },
          { en: "A cocktail without alcohol", es: "Un cóctel sin alcohol", de: "Ein Cocktail ohne Alkohol", nl: "Een cocktail zonder alcohol" },
          { en: "A cocktail with only one ingredient", es: "Un cóctel con un solo ingrediente", de: "Ein Cocktail mit nur einer Zutat", nl: "Een cocktail met slechts één ingrediënt" },
          { en: "A new cocktail recipe", es: "Una receta de cóctel nueva", de: "Ein neues Cocktail-Rezept", nl: "Een nieuw cocktailrecept" }
        ],
        correct: 1,
        explanation: {
          en: "A virgin cocktail is a non-alcoholic version of a regular cocktail, also called a 'mocktail'.",
          es: "Un cóctel virgen es una versión sin alcohol de un cóctel regular, también llamado 'mocktail'.",
          de: "Ein virgin Cocktail ist eine alkoholfreie Version eines normalen Cocktails, auch 'Mocktail' genannt.",
          nl: "Een virgin cocktail is een alcoholvrije versie van een gewone cocktail, ook wel 'mocktail' genoemd."
        }
      },
      {
        question: {
          en: "What is the main ingredient in a Caipirinha?",
          es: "¿Cuál es el ingrediente principal en una Caipirinha?",
          de: "Was ist die Hauptzutat in einer Caipirinha?",
          nl: "Wat is het hoofdingrediënt in een Caipirinha?"
        },
        options: [
          { en: "Tequila", es: "Tequila", de: "Tequila", nl: "Tequila" },
          { en: "Rum", es: "Ron", de: "Rum", nl: "Rum" },
          { en: "Cachaça", es: "Cachaça", de: "Cachaça", nl: "Cachaça" },
          { en: "Vodka", es: "Vodka", de: "Wodka", nl: "Vodka" }
        ],
        correct: 2,
        explanation: {
          en: "A Caipirinha is Brazil's national cocktail, made with cachaça (Brazilian sugarcane spirit), lime, and sugar.",
          es: "Una Caipirinha es el cóctel nacional de Brasil, hecho con cachaça (aguardiente brasileño de caña de azúcar), lima y azúcar.",
          de: "Eine Caipirinha ist Brasiliens Nationalcocktail, hergestellt mit Cachaça (brasilianischer Zuckerrohrschnaps), Limette und Zucker.",
          nl: "Een Caipirinha is Brazilië's nationale cocktail, gemaakt met cachaça (Braziliaanse suikerrietdrank), limoen en suiker."
        }
      },
      {
        question: {
          en: "Which liqueur is essential for a White Russian?",
          es: "¿Qué licor es esencial para un Ruso Blanco?",
          de: "Welcher Likör ist für einen White Russian unverzichtbar?",
          nl: "Welke likeur is essentieel voor een White Russian?"
        },
        options: [
          { en: "Amaretto", es: "Amaretto", de: "Amaretto", nl: "Amaretto" },
          { en: "Kahlúa", es: "Kahlúa", de: "Kahlúa", nl: "Kahlúa" },
          { en: "Baileys", es: "Baileys", de: "Baileys", nl: "Baileys" },
          { en: "Frangelico", es: "Frangelico", de: "Frangelico", nl: "Frangelico" }
        ],
        correct: 1,
        explanation: {
          en: "A White Russian contains vodka, Kahlúa (coffee liqueur), and cream, served over ice.",
          es: "Un Ruso Blanco contiene vodka, Kahlúa (licor de café) y crema, servido sobre hielo.",
          de: "Ein White Russian enthält Wodka, Kahlúa (Kaffeelikör) und Sahne, serviert über Eis.",
          nl: "Een White Russian bevat vodka, Kahlúa (koffielikeur) en room, geserveerd over ijs."
        }
      },
      {
        question: {
          en: "What type of drink is an Aperol Spritz?",
          es: "¿Qué tipo de bebida es un Aperol Spritz?",
          de: "Was für ein Getränk ist ein Aperol Spritz?",
          nl: "Wat voor soort drankje is een Aperol Spritz?"
        },
        options: [
          { en: "A shot", es: "Un shot", de: "Ein Shot", nl: "Een shot" },
          { en: "A sparkling cocktail", es: "Un cóctel espumoso", de: "Ein spritziger Cocktail", nl: "Een mousserende cocktail" },
          { en: "A hot drink", es: "Una bebida caliente", de: "Ein heißes Getränk", nl: "Een warme drank" },
          { en: "A frozen drink", es: "Una bebida congelada", de: "Ein gefrorenes Getränk", nl: "Een bevroren drankje" }
        ],
        correct: 1,
        explanation: {
          en: "An Aperol Spritz is a sparkling cocktail made with Aperol, prosecco, and soda water, popular as an aperitif.",
          es: "Un Aperol Spritz es un cóctel espumoso hecho con Aperol, prosecco y agua con gas, popular como aperitivo.",
          de: "Ein Aperol Spritz ist ein spritziger Cocktail aus Aperol, Prosecco und Sodawasser, beliebt als Aperitif.",
          nl: "Een Aperol Spritz is een mousserende cocktail gemaakt met Aperol, prosecco en sodawater, populair als aperitief."
        }
      },
      {
        question: {
          en: "What distinguishes a Long Island Iced Tea from most cocktails?",
          es: "¿Qué distingue a un Long Island Iced Tea de la mayoría de los cócteles?",
          de: "Was unterscheidet einen Long Island Iced Tea von den meisten Cocktails?",
          nl: "Wat onderscheidt een Long Island Iced Tea van de meeste cocktails?"
        },
        options: [
          { en: "It contains no alcohol", es: "No contiene alcohol", de: "Er enthält keinen Alkohol", nl: "Het bevat geen alcohol" },
          { en: "It contains multiple spirits", es: "Contiene múltiples licores", de: "Er enthält mehrere Spirituosen", nl: "Het bevat meerdere spirituosen" },
          { en: "It's served hot", es: "Se sirve caliente", de: "Er wird heiß serviert", nl: "Het wordt warm geserveerd" },
          { en: "It contains real tea", es: "Contiene té real", de: "Er enthält echten Tee", nl: "Het bevat echte thee" }
        ],
        correct: 1,
        explanation: {
          en: "A Long Island Iced Tea contains vodka, rum, gin, tequila, and triple sec, making it unusually strong with multiple spirits.",
          es: "Un Long Island Iced Tea contiene vodka, ron, ginebra, tequila y triple sec, haciéndolo inusualmente fuerte con múltiples licores.",
          de: "Ein Long Island Iced Tea enthält Wodka, Rum, Gin, Tequila und Triple Sec, was ihn mit mehreren Spirituosen ungewöhnlich stark macht.",
          nl: "Een Long Island Iced Tea bevat vodka, rum, gin, tequila en triple sec, wat het ongewoon sterk maakt met meerdere spirituosen."
        }
      },
      {
        question: {
          en: "Which famous cocktail is traditionally served in a copper mug?",
          es: "¿Qué famoso cóctel se sirve tradicionalmente en una taza de cobre?",
          de: "Welcher berühmte Cocktail wird traditionell in einem Kupferbecher serviert?",
          nl: "Welke beroemde cocktail wordt traditioneel geserveerd in een koperen mok?"
        },
        options: [
          { en: "Moscow Mule", es: "Moscow Mule", de: "Moscow Mule", nl: "Moscow Mule" },
          { en: "Mint Julep", es: "Mint Julep", de: "Mint Julep", nl: "Mint Julep" },
          { en: "Irish Coffee", es: "Irish Coffee", de: "Irish Coffee", nl: "Irish Coffee" },
          { en: "Hot Toddy", es: "Hot Toddy", de: "Hot Toddy", nl: "Hot Toddy" }
        ],
        correct: 0,
        explanation: {
          en: "A Moscow Mule is traditionally served in a copper mug and contains vodka, ginger beer, and lime juice.",
          es: "Un Moscow Mule se sirve tradicionalmente en una taza de cobre y contiene vodka, cerveza de jengibre y jugo de lima.",
          de: "Ein Moscow Mule wird traditionell in einem Kupferbecher serviert und enthält Wodka, Ginger Beer und Limettensaft.",
          nl: "Een Moscow Mule wordt traditioneel geserveerd in een koperen mok en bevat vodka, gemberbier en limoensap."
        }
      },
      {
        question: {
          en: "What color is a classic Mai Tai?",
          es: "¿De qué color es un Mai Tai clásico?",
          de: "Welche Farbe hat ein klassischer Mai Tai?",
          nl: "Welke kleur heeft een klassieke Mai Tai?"
        },
        options: [
          { en: "Clear", es: "Transparente", de: "Klar", nl: "Helder" },
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Amber/orange", es: "Ámbar/naranja", de: "Bernstein/orange", nl: "Amber/oranje" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" }
        ],
        correct: 2,
        explanation: {
          en: "A classic Mai Tai has an amber to orange color from the rum and orgeat syrup, garnished with mint and lime.",
          es: "Un Mai Tai clásico tiene un color ámbar a naranja del ron y jarabe de orgeat, adornado con menta y lima.",
          de: "Ein klassischer Mai Tai hat eine bernstein- bis orangefarbene Farbe vom Rum und Orgeat-Sirup, garniert mit Minze und Limette.",
          nl: "Een klassieke Mai Tai heeft een amber tot oranje kleur van de rum en orgeat siroop, gegarneerd met munt en limoen."
        }
      },
      {
        question: {
          en: "What creates the sunrise effect in a Tequila Sunrise?",
          es: "¿Qué crea el efecto amanecer en un Tequila Sunrise?",
          de: "Was erzeugt den Sonnenaufgang-Effekt in einem Tequila Sunrise?",
          nl: "Wat creëert het zonsopgang-effect in een Tequila Sunrise?"
        },
        options: [
          { en: "Layering grenadine", es: "Capa de granadina", de: "Schichtung von Grenadine", nl: "Gelaagde grenadine" },
          { en: "Adding food coloring", es: "Añadiendo colorante alimentario", de: "Lebensmittelfarbe hinzufügen", nl: "Voedselkleurstof toevoegen" },
          { en: "Using red wine", es: "Usando vino tinto", de: "Rotwein verwenden", nl: "Rode wijn gebruiken" },
          { en: "Mixing strawberries", es: "Mezclando fresas", de: "Erdbeeren mischen", nl: "Aardbeien mengen" }
        ],
        correct: 0,
        explanation: {
          en: "A Tequila Sunrise is made with tequila and orange juice, with grenadine poured slowly to create a gradient sunrise effect.",
          es: "Un Tequila Sunrise se hace con tequila y jugo de naranja, con granadina vertida lentamente para crear un efecto degradado de amanecer.",
          de: "Ein Tequila Sunrise wird mit Tequila und Orangensaft zubereitet, wobei Grenadine langsam eingegossen wird, um einen Sonnenaufgang-Farbverlauf zu erzeugen.",
          nl: "Een Tequila Sunrise wordt gemaakt met tequila en sinaasappelsap, met grenadine langzaam gegoten om een verloop zonsopgang-effect te creëren."
        }    },
    {
      question: {
        en: "What is a cocktail?",
        es: "What is a cocktail?",
        de: "What is a cocktail?",
        nl: "What is a cocktail?"
      },
      options: [
        { en: "Mixed drink with alcohol", es: "Mixed drink with alcohol", de: "Mixed drink with alcohol", nl: "Mixed drink with alcohol" },
        { en: "Non-alcoholic drink", es: "Non-alcoholic drink", de: "Non-alcoholic drink", nl: "Non-alcoholic drink" },
        { en: "Hot beverage", es: "Hot beverage", de: "Hot beverage", nl: "Hot beverage" },
        { en: "Beer-based drink", es: "Beer-based drink", de: "Beer-based drink", nl: "Beer-based drink" }
      ],
      correct: 0,
      explanation: {
        en: "A cocktail is a mixed drink typically containing one or more types of alcohol mixed with other ingredients.",
        es: "A cocktail is a mixed drink typically containing one or more types of alcohol mixed with other ingredients.",
        de: "A cocktail is a mixed drink typically containing one or more types of alcohol mixed with other ingredients.",
        nl: "A cocktail is a mixed drink typically containing one or more types of alcohol mixed with other ingredients."
      }
    },
    {
      question: {
        en: "What is a martini made with?",
        es: "What is a martini made with?",
        de: "What is a martini made with?",
        nl: "What is a martini made with?"
      },
      options: [
        { en: "Gin and vermouth", es: "Gin and vermouth", de: "Gin and vermouth", nl: "Gin and vermouth" },
        { en: "Vodka and cranberry", es: "Vodka and cranberry", de: "Vodka and cranberry", nl: "Vodka and cranberry" },
        { en: "Rum and cola", es: "Rum and cola", de: "Rum and cola", nl: "Rum and cola" },
        { en: "Whiskey and soda", es: "Whiskey and soda", de: "Whiskey and soda", nl: "Whiskey and soda" }
      ],
      correct: 0,
      explanation: {
        en: "A classic martini is made with gin and dry vermouth, garnished with an olive or lemon twist.",
        es: "A classic martini is made with gin and dry vermouth, garnished with an olive or lemon twist.",
        de: "A classic martini is made with gin and dry vermouth, garnished with an olive or lemon twist.",
        nl: "A classic martini is made with gin and dry vermouth, garnished with an olive or lemon twist."
      }
    },
    {
      question: {
        en: "What is a mojito?",
        es: "What is a mojito?",
        de: "What is a mojito?",
        nl: "What is a mojito?"
      },
      options: [
        { en: "Rum, mint, lime, sugar, soda water", es: "Rum, mint, lime, sugar, soda water", de: "Rum, mint, lime, sugar, soda water", nl: "Rum, mint, lime, sugar, soda water" },
        { en: "Tequila and lime", es: "Tequila and lime", de: "Tequila and lime", nl: "Tequila and lime" },
        { en: "Vodka and orange juice", es: "Vodka and orange juice", de: "Vodka and orange juice", nl: "Vodka and orange juice" },
        { en: "Gin and tonic", es: "Gin and tonic", de: "Gin and tonic", nl: "Gin and tonic" }
      ],
      correct: 0,
      explanation: {
        en: "A mojito is a Cuban cocktail made with white rum, mint, lime juice, sugar, and soda water.",
        es: "A mojito is a Cuban cocktail made with white rum, mint, lime juice, sugar, and soda water.",
        de: "A mojito is a Cuban cocktail made with white rum, mint, lime juice, sugar, and soda water.",
        nl: "A mojito is a Cuban cocktail made with white rum, mint, lime juice, sugar, and soda water."
      }
    },
    {
      question: {
        en: "What spirit is in a margarita?",
        es: "What spirit is in a margarita?",
        de: "What spirit is in a margarita?",
        nl: "What spirit is in a margarita?"
      },
      options: [
        { en: "Tequila", es: "Tequila", de: "Tequila", nl: "Tequila" },
        { en: "Vodka", es: "Vodka", de: "Vodka", nl: "Vodka" },
        { en: "Rum", es: "Rum", de: "Rum", nl: "Rum" },
        { en: "Gin", es: "Gin", de: "Gin", nl: "Gin" }
      ],
      correct: 0,
      explanation: {
        en: "A margarita is made with tequila, lime juice, and orange liqueur (like Cointreau or Triple Sec).",
        es: "A margarita is made with tequila, lime juice, and orange liqueur (like Cointreau or Triple Sec).",
        de: "A margarita is made with tequila, lime juice, and orange liqueur (like Cointreau or Triple Sec).",
        nl: "A margarita is made with tequila, lime juice, and orange liqueur (like Cointreau or Triple Sec)."
      }
    },
    {
      question: {
        en: "What is a cosmopolitan?",
        es: "What is a cosmopolitan?",
        de: "What is a cosmopolitan?",
        nl: "What is a cosmopolitan?"
      },
      options: [
        { en: "Vodka, cranberry, lime, triple sec", es: "Vodka, cranberry, lime, triple sec", de: "Vodka, cranberry, lime, triple sec", nl: "Vodka, cranberry, lime, triple sec" },
        { en: "Gin and vermouth", es: "Gin and vermouth", de: "Gin and vermouth", nl: "Gin and vermouth" },
        { en: "Rum and cola", es: "Rum and cola", de: "Rum and cola", nl: "Rum and cola" },
        { en: "Whiskey sour", es: "Whiskey sour", de: "Whiskey sour", nl: "Whiskey sour" }
      ],
      correct: 0,
      explanation: {
        en: "A cosmopolitan is made with vodka, cranberry juice, lime juice, and triple sec.",
        es: "A cosmopolitan is made with vodka, cranberry juice, lime juice, and triple sec.",
        de: "A cosmopolitan is made with vodka, cranberry juice, lime juice, and triple sec.",
        nl: "A cosmopolitan is made with vodka, cranberry juice, lime juice, and triple sec."
      }
    },
    {
      question: {
        en: "What is a bartender's tool for mixing called?",
        es: "What is a bartender's tool for mixing called?",
        de: "What is a bartender's tool for mixing called?",
        nl: "What is a bartender's tool for mixing called?"
      },
      options: [
        { en: "Cocktail shaker", es: "Cocktail shaker", de: "Cocktail shaker", nl: "Cocktail shaker" },
        { en: "Muddler", es: "Muddler", de: "Muddler", nl: "Muddler" },
        { en: "Jigger", es: "Jigger", de: "Jigger", nl: "Jigger" },
        { en: "Strainer", es: "Strainer", de: "Strainer", nl: "Strainer" }
      ],
      correct: 0,
      explanation: {
        en: "A cocktail shaker is used to mix ingredients by shaking with ice.",
        es: "A cocktail shaker is used to mix ingredients by shaking with ice.",
        de: "A cocktail shaker is used to mix ingredients by shaking with ice.",
        nl: "A cocktail shaker is used to mix ingredients by shaking with ice."
      }
    },
    {
      question: {
        en: "What is a daiquiri made with?",
        es: "What is a daiquiri made with?",
        de: "What is a daiquiri made with?",
        nl: "What is a daiquiri made with?"
      },
      options: [
        { en: "Rum, lime juice, simple syrup", es: "Rum, lime juice, simple syrup", de: "Rum, lime juice, simple syrup", nl: "Rum, lime juice, simple syrup" },
        { en: "Vodka and strawberry", es: "Vodka and strawberry", de: "Vodka and strawberry", nl: "Vodka and strawberry" },
        { en: "Tequila and lime", es: "Tequila and lime", de: "Tequila and lime", nl: "Tequila and lime" },
        { en: "Gin and tonic", es: "Gin and tonic", de: "Gin and tonic", nl: "Gin and tonic" }
      ],
      correct: 0,
      explanation: {
        en: "A classic daiquiri is made with white rum, lime juice, and simple syrup.",
        es: "A classic daiquiri is made with white rum, lime juice, and simple syrup.",
        de: "A classic daiquiri is made with white rum, lime juice, and simple syrup.",
        nl: "A classic daiquiri is made with white rum, lime juice, and simple syrup."
      }
    },
    {
      question: {
        en: "What is a Manhattan cocktail?",
        es: "What is a Manhattan cocktail?",
        de: "What is a Manhattan cocktail?",
        nl: "What is a Manhattan cocktail?"
      },
      options: [
        { en: "Whiskey, sweet vermouth, bitters", es: "Whiskey, sweet vermouth, bitters", de: "Whiskey, sweet vermouth, bitters", nl: "Whiskey, sweet vermouth, bitters" },
        { en: "Vodka and cranberry", es: "Vodka and cranberry", de: "Vodka and cranberry", nl: "Vodka and cranberry" },
        { en: "Gin and dry vermouth", es: "Gin and dry vermouth", de: "Gin and dry vermouth", nl: "Gin and dry vermouth" },
        { en: "Rum and cola", es: "Rum and cola", de: "Rum and cola", nl: "Rum and cola" }
      ],
      correct: 0,
      explanation: {
        en: "A Manhattan is made with whiskey, sweet vermouth, and aromatic bitters.",
        es: "A Manhattan is made with whiskey, sweet vermouth, and aromatic bitters.",
        de: "A Manhattan is made with whiskey, sweet vermouth, and aromatic bitters.",
        nl: "A Manhattan is made with whiskey, sweet vermouth, and aromatic bitters."
      }
    },
    {
      question: {
        en: "What garnish is traditional for a martini?",
        es: "What garnish is traditional for a martini?",
        de: "What garnish is traditional for a martini?",
        nl: "What garnish is traditional for a martini?"
      },
      options: [
        { en: "Olive or lemon twist", es: "Olive or lemon twist", de: "Olive or lemon twist", nl: "Olive or lemon twist" },
        { en: "Cherry", es: "Cherry", de: "Cherry", nl: "Cherry" },
        { en: "Orange slice", es: "Orange slice", de: "Orange slice", nl: "Orange slice" },
        { en: "Mint", es: "Mint", de: "Mint", nl: "Mint" }
      ],
      correct: 0,
      explanation: {
        en: "A classic martini is garnished with either an olive or a lemon twist.",
        es: "A classic martini is garnished with either an olive or a lemon twist.",
        de: "A classic martini is garnished with either an olive or a lemon twist.",
        nl: "A classic martini is garnished with either an olive or a lemon twist."
      }
    },
    {
      question: {
        en: "What is muddling in cocktail making?",
        es: "What is muddling in cocktail making?",
        de: "What is muddling in cocktail making?",
        nl: "What is muddling in cocktail making?"
      },
      options: [
        { en: "Crushing ingredients to release flavors", es: "Crushing ingredients to release flavors", de: "Crushing ingredients to release flavors", nl: "Crushing ingredients to release flavors" },
        { en: "Mixing with ice", es: "Mixing with ice", de: "Mixing with ice", nl: "Mixing with ice" },
        { en: "Shaking vigorously", es: "Shaking vigorously", de: "Shaking vigorously", nl: "Shaking vigorously" },
        { en: "Straining liquid", es: "Straining liquid", de: "Straining liquid", nl: "Straining liquid" }
      ],
      correct: 0,
      explanation: {
        en: "Muddling involves pressing and crushing ingredients like mint or fruit to release their flavors.",
        es: "Muddling involves pressing and crushing ingredients like mint or fruit to release their flavors.",
        de: "Muddling involves pressing and crushing ingredients like mint or fruit to release their flavors.",
        nl: "Muddling involves pressing and crushing ingredients like mint or fruit to release their flavors."
      }
    },
    {
      question: {
        en: "What is a piña colada made with?",
        es: "What is a piña colada made with?",
        de: "What is a piña colada made with?",
        nl: "What is a piña colada made with?"
      },
      options: [
        { en: "Rum, coconut cream, pineapple", es: "Rum, coconut cream, pineapple", de: "Rum, coconut cream, pineapple", nl: "Rum, coconut cream, pineapple" },
        { en: "Vodka and orange juice", es: "Vodka and orange juice", de: "Vodka and orange juice", nl: "Vodka and orange juice" },
        { en: "Tequila and lime", es: "Tequila and lime", de: "Tequila and lime", nl: "Tequila and lime" },
        { en: "Gin and tonic", es: "Gin and tonic", de: "Gin and tonic", nl: "Gin and tonic" }
      ],
      correct: 0,
      explanation: {
        en: "A piña colada is made with rum, coconut cream, and pineapple juice, often blended with ice.",
        es: "A piña colada is made with rum, coconut cream, and pineapple juice, often blended with ice.",
        de: "A piña colada is made with rum, coconut cream, and pineapple juice, often blended with ice.",
        nl: "A piña colada is made with rum, coconut cream, and pineapple juice, often blended with ice."
      }
    },
    {
      question: {
        en: "What is the base spirit in an Old Fashioned?",
        es: "What is the base spirit in an Old Fashioned?",
        de: "What is the base spirit in an Old Fashioned?",
        nl: "What is the base spirit in an Old Fashioned?"
      },
      options: [
        { en: "Whiskey", es: "Whiskey", de: "Whiskey", nl: "Whiskey" },
        { en: "Vodka", es: "Vodka", de: "Vodka", nl: "Vodka" },
        { en: "Gin", es: "Gin", de: "Gin", nl: "Gin" },
        { en: "Rum", es: "Rum", de: "Rum", nl: "Rum" }
      ],
      correct: 0,
      explanation: {
        en: "An Old Fashioned is made with whiskey, sugar, bitters, and a twist of citrus.",
        es: "An Old Fashioned is made with whiskey, sugar, bitters, and a twist of citrus.",
        de: "An Old Fashioned is made with whiskey, sugar, bitters, and a twist of citrus.",
        nl: "An Old Fashioned is made with whiskey, sugar, bitters, and a twist of citrus."
      }
    },
    {
      question: {
        en: "What is a jigger?",
        es: "What is a jigger?",
        de: "What is a jigger?",
        nl: "What is a jigger?"
      },
      options: [
        { en: "Measuring tool for cocktails", es: "Measuring tool for cocktails", de: "Measuring tool for cocktails", nl: "Measuring tool for cocktails" },
        { en: "Type of cocktail", es: "Type of cocktail", de: "Type of cocktail", nl: "Type of cocktail" },
        { en: "Mixing spoon", es: "Mixing spoon", de: "Mixing spoon", nl: "Mixing spoon" },
        { en: "Ice crusher", es: "Ice crusher", de: "Ice crusher", nl: "Ice crusher" }
      ],
      correct: 0,
      explanation: {
        en: "A jigger is a measuring device used to ensure accurate proportions in cocktail mixing.",
        es: "A jigger is a measuring device used to ensure accurate proportions in cocktail mixing.",
        de: "A jigger is a measuring device used to ensure accurate proportions in cocktail mixing.",
        nl: "A jigger is a measuring device used to ensure accurate proportions in cocktail mixing."
      }
    },
    {
      question: {
        en: "What makes a cocktail 'on the rocks'?",
        es: "What makes a cocktail 'on the rocks'?",
        de: "What makes a cocktail 'on the rocks'?",
        nl: "What makes a cocktail 'on the rocks'?"
      },
      options: [
        { en: "Served over ice", es: "Served over ice", de: "Served over ice", nl: "Served over ice" },
        { en: "Blended with ice", es: "Blended with ice", de: "Blended with ice", nl: "Blended with ice" },
        { en: "No ice", es: "No ice", de: "No ice", nl: "No ice" },
        { en: "Shaken with ice then strained", es: "Shaken with ice then strained", de: "Shaken with ice then strained", nl: "Shaken with ice then strained" }
      ],
      correct: 0,
      explanation: {
        en: "A drink served 'on the rocks' is poured over ice cubes in the glass.",
        es: "A drink served 'on the rocks' is poured over ice cubes in the glass.",
        de: "A drink served 'on the rocks' is poured over ice cubes in the glass.",
        nl: "A drink served 'on the rocks' is poured over ice cubes in the glass."
      }
    },
    {
      question: {
        en: "What is a Bloody Mary made with?",
        es: "What is a Bloody Mary made with?",
        de: "What is a Bloody Mary made with?",
        nl: "What is a Bloody Mary made with?"
      },
      options: [
        { en: "Vodka and tomato juice", es: "Vodka and tomato juice", de: "Vodka and tomato juice", nl: "Vodka and tomato juice" },
        { en: "Rum and cola", es: "Rum and cola", de: "Rum and cola", nl: "Rum and cola" },
        { en: "Gin and tonic", es: "Gin and tonic", de: "Gin and tonic", nl: "Gin and tonic" },
        { en: "Tequila and orange juice", es: "Tequila and orange juice", de: "Tequila and orange juice", nl: "Tequila and orange juice" }
      ],
      correct: 0,
      explanation: {
        en: "A Bloody Mary is made with vodka, tomato juice, and various spices and flavorings.",
        es: "A Bloody Mary is made with vodka, tomato juice, and various spices and flavorings.",
        de: "A Bloody Mary is made with vodka, tomato juice, and various spices and flavorings.",
        nl: "A Bloody Mary is made with vodka, tomato juice, and various spices and flavorings."
      }
    },
    {
      question: {
        en: "What is simple syrup?",
        es: "What is simple syrup?",
        de: "What is simple syrup?",
        nl: "What is simple syrup?"
      },
      options: [
        { en: "Sugar dissolved in water", es: "Sugar dissolved in water", de: "Sugar dissolved in water", nl: "Sugar dissolved in water" },
        { en: "Lemon juice", es: "Lemon juice", de: "Lemon juice", nl: "Lemon juice" },
        { en: "Fruit syrup", es: "Fruit syrup", de: "Fruit syrup", nl: "Fruit syrup" },
        { en: "Alcohol mixture", es: "Alcohol mixture", de: "Alcohol mixture", nl: "Alcohol mixture" }
      ],
      correct: 0,
      explanation: {
        en: "Simple syrup is equal parts sugar and water, heated until sugar dissolves, used to sweeten cocktails.",
        es: "Simple syrup is equal parts sugar and water, heated until sugar dissolves, used to sweeten cocktails.",
        de: "Simple syrup is equal parts sugar and water, heated until sugar dissolves, used to sweeten cocktails.",
        nl: "Simple syrup is equal parts sugar and water, heated until sugar dissolves, used to sweeten cocktails."
      }
    },
    {
      question: {
        en: "What is a Tom Collins?",
        es: "What is a Tom Collins?",
        de: "What is a Tom Collins?",
        nl: "What is a Tom Collins?"
      },
      options: [
        { en: "Gin, lemon, sugar, soda water", es: "Gin, lemon, sugar, soda water", de: "Gin, lemon, sugar, soda water", nl: "Gin, lemon, sugar, soda water" },
        { en: "Vodka and cranberry", es: "Vodka and cranberry", de: "Vodka and cranberry", nl: "Vodka and cranberry" },
        { en: "Rum and cola", es: "Rum and cola", de: "Rum and cola", nl: "Rum and cola" },
        { en: "Whiskey sour", es: "Whiskey sour", de: "Whiskey sour", nl: "Whiskey sour" }
      ],
      correct: 0,
      explanation: {
        en: "A Tom Collins is made with gin, lemon juice, simple syrup, and soda water.",
        es: "A Tom Collins is made with gin, lemon juice, simple syrup, and soda water.",
        de: "A Tom Collins is made with gin, lemon juice, simple syrup, and soda water.",
        nl: "A Tom Collins is made with gin, lemon juice, simple syrup, and soda water."
      }
    },
    {
      question: {
        en: "What does 'neat' mean for serving spirits?",
        es: "What does 'neat' mean for serving spirits?",
        de: "What does 'neat' mean for serving spirits?",
        nl: "What does 'neat' mean for serving spirits?"
      },
      options: [
        { en: "Straight, no ice or mixers", es: "Straight, no ice or mixers", de: "Straight, no ice or mixers", nl: "Straight, no ice or mixers" },
        { en: "Over ice", es: "Over ice", de: "Over ice", nl: "Over ice" },
        { en: "With water", es: "With water", de: "With water", nl: "With water" },
        { en: "Mixed with soda", es: "Mixed with soda", de: "Mixed with soda", nl: "Mixed with soda" }
      ],
      correct: 0,
      explanation: {
        en: "A spirit served 'neat' is poured straight from the bottle with no ice or mixers.",
        es: "A spirit served 'neat' is poured straight from the bottle with no ice or mixers.",
        de: "A spirit served 'neat' is poured straight from the bottle with no ice or mixers.",
        nl: "A spirit served 'neat' is poured straight from the bottle with no ice or mixers."
      }
    },
    {
      question: {
        en: "What is a mai tai made with?",
        es: "What is a mai tai made with?",
        de: "What is a mai tai made with?",
        nl: "What is a mai tai made with?"
      },
      options: [
        { en: "Rum, lime, orgeat, orange liqueur", es: "Rum, lime, orgeat, orange liqueur", de: "Rum, lime, orgeat, orange liqueur", nl: "Rum, lime, orgeat, orange liqueur" },
        { en: "Vodka and pineapple", es: "Vodka and pineapple", de: "Vodka and pineapple", nl: "Vodka and pineapple" },
        { en: "Tequila and lime", es: "Tequila and lime", de: "Tequila and lime", nl: "Tequila and lime" },
        { en: "Gin and tonic", es: "Gin and tonic", de: "Gin and tonic", nl: "Gin and tonic" }
      ],
      correct: 0,
      explanation: {
        en: "A mai tai is made with rum, lime juice, orgeat syrup, and orange liqueur.",
        es: "A mai tai is made with rum, lime juice, orgeat syrup, and orange liqueur.",
        de: "A mai tai is made with rum, lime juice, orgeat syrup, and orange liqueur.",
        nl: "A mai tai is made with rum, lime juice, orgeat syrup, and orange liqueur."
      }
    },
    {
      question: {
        en: "What is the difference between shaken and stirred?",
        es: "What is the difference between shaken and stirred?",
        de: "What is the difference between shaken and stirred?",
        nl: "What is the difference between shaken and stirred?"
      },
      options: [
        { en: "Shaken is more vigorous; stirred is gentle", es: "Shaken is more vigorous; stirred is gentle", de: "Shaken is more vigorous; stirred is gentle", nl: "Shaken is more vigorous; stirred is gentle" },
        { en: "No difference", es: "No difference", de: "No difference", nl: "No difference" },
        { en: "Shaken uses ice; stirred doesn't", es: "Shaken uses ice; stirred doesn't", de: "Shaken uses ice; stirred doesn't", nl: "Shaken uses ice; stirred doesn't" },
        { en: "Stirred is faster", es: "Stirred is faster", de: "Stirred is faster", nl: "Stirred is faster" }
      ],
      correct: 0,
      explanation: {
        en: "Shaken cocktails are vigorously shaken with ice for dilution and aeration; stirred cocktails are gently mixed.",
        es: "Shaken cocktails are vigorously shaken with ice for dilution and aeration; stirred cocktails are gently mixed.",
        de: "Shaken cocktails are vigorously shaken with ice for dilution and aeration; stirred cocktails are gently mixed.",
        nl: "Shaken cocktails are vigorously shaken with ice for dilution and aeration; stirred cocktails are gently mixed."
      }

      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
