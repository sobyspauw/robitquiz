// Quiz Level 2: Drinken - Cocktails (Classic Cocktails and Ingredients)
(function() {
  const level2 = {
    name: {
      en: "Classic Cocktails and Ingredients",
      es: "Cócteles Clásicos e Ingredientes",
      de: "Klassische Cocktails und Zutaten",
      nl: "Klassieke Cocktails en Ingrediënten"
    },
    questions: [
      {
        question: {
          en: "What are the three main ingredients in a Manhattan cocktail?",
          es: "¿Cuáles son los tres ingredientes principales en un cóctel Manhattan?",
          de: "Was sind die drei Hauptzutaten in einem Manhattan-Cocktail?",
          nl: "Wat zijn de drie hoofdingrediënten in een Manhattan cocktail?"
        },
        options: [
          { en: "Whiskey, sweet vermouth, bitters", es: "Whisky, vermut dulce, amargos", de: "Whiskey, süßer Wermut, Bitter", nl: "Whisky, zoete vermouth, bitters" },
          { en: "Gin, dry vermouth, olives", es: "Ginebra, vermut seco, aceitunas", de: "Gin, trockener Wermut, Oliven", nl: "Gin, droge vermouth, olijven" },
          { en: "Vodka, cranberry juice, lime", es: "Vodka, jugo de arándano, lima", de: "Wodka, Cranberrysaft, Limette", nl: "Vodka, cranberrysap, limoen" },
          { en: "Rum, sugar, mint", es: "Ron, azúcar, menta", de: "Rum, Zucker, Minze", nl: "Rum, suiker, munt" }
        ],
        correct: 0,
        explanation: {
          en: "A Manhattan is made with whiskey (usually rye or bourbon), sweet vermouth, and aromatic bitters, garnished with a cherry.",
          es: "Un Manhattan se hace con whisky (generalmente centeno o bourbon), vermut dulce y amargos aromáticos, adornado con una cereza.",
          de: "Ein Manhattan wird mit Whiskey (meist Rye oder Bourbon), süßem Wermut und aromatischen Bittern zubereitet, garniert mit einer Kirsche.",
          nl: "Een Manhattan wordt gemaakt met whisky (meestal rye of bourbon), zoete vermouth en aromatische bitters, gegarneerd met een kers."
        }
      },
      {
        question: {
          en: "What is the key ingredient that distinguishes a Negroni from other cocktails?",
          es: "¿Cuál es el ingrediente clave que distingue un Negroni de otros cócteles?",
          de: "Was ist die Schlüsselzutat, die einen Negroni von anderen Cocktails unterscheidet?",
          nl: "Wat is het belangrijkste ingrediënt dat een Negroni onderscheidt van andere cocktails?"
        },
        options: [
          { en: "Aperol", es: "Aperol", de: "Aperol", nl: "Aperol" },
          { en: "Campari", es: "Campari", de: "Campari", nl: "Campari" },
          { en: "Cynar", es: "Cynar", de: "Cynar", nl: "Cynar" },
          { en: "Fernet", es: "Fernet", de: "Fernet", nl: "Fernet" }
        ],
        correct: 1,
        explanation: {
          en: "A Negroni contains equal parts gin, Campari, and sweet vermouth. Campari's distinctive bitter flavor is what gives the Negroni its characteristic taste.",
          es: "Un Negroni contiene partes iguales de ginebra, Campari y vermut dulce. El sabor amargo distintivo del Campari es lo que le da al Negroni su sabor característico.",
          de: "Ein Negroni enthält gleiche Teile Gin, Campari und süßen Wermut. Camparis charakteristischer bitterer Geschmack verleiht dem Negroni seinen typischen Geschmack.",
          nl: "Een Negroni bevat gelijke delen gin, Campari en zoete vermouth. Campari's kenmerkende bittere smaak geeft de Negroni zijn karakteristieke smaak."
        }
      },
      {
        question: {
          en: "Which vermouth is traditionally used in a classic Dry Martini?",
          es: "¿Qué vermut se usa tradicionalmente en un Martini Seco clásico?",
          de: "Welcher Wermut wird traditionell in einem klassischen Dry Martini verwendet?",
          nl: "Welke vermouth wordt traditioneel gebruikt in een klassieke Dry Martini?"
        },
        options: [
          { en: "Sweet vermouth", es: "Vermut dulce", de: "Süßer Wermut", nl: "Zoete vermouth" },
          { en: "Dry vermouth", es: "Vermut seco", de: "Trockener Wermut", nl: "Droge vermouth" },
          { en: "Blanc vermouth", es: "Vermut blanco", de: "Weißer Wermut", nl: "Witte vermouth" },
          { en: "Rosé vermouth", es: "Vermut rosado", de: "Rosé Wermut", nl: "Rosé vermouth" }
        ],
        correct: 1,
        explanation: {
          en: "A classic Dry Martini uses dry vermouth, which is less sweet and more herbaceous than sweet vermouth.",
          es: "Un Martini Seco clásico usa vermut seco, que es menos dulce y más herbáceo que el vermut dulce.",
          de: "Ein klassischer Dry Martini verwendet trockenen Wermut, der weniger süß und krautiger ist als süßer Wermut.",
          nl: "Een klassieke Dry Martini gebruikt droge vermouth, die minder zoet en meer kruidig is dan zoete vermouth."
        }
      },
      {
        question: {
          en: "What type of sugar is traditionally used in an Old Fashioned?",
          es: "¿Qué tipo de azúcar se usa tradicionalmente en un Old Fashioned?",
          de: "Welche Art von Zucker wird traditionell in einem Old Fashioned verwendet?",
          nl: "Welk type suiker wordt traditioneel gebruikt in een Old Fashioned?"
        },
        options: [
          { en: "White granulated sugar", es: "Azúcar blanca granulada", de: "Weißer Kristallzucker", nl: "Witte kristalsuiker" },
          { en: "Brown sugar", es: "Azúcar morena", de: "Brauner Zucker", nl: "Bruine suiker" },
          { en: "Sugar cube", es: "Terrón de azúcar", de: "Zuckerwürfel", nl: "Suikerklontje" },
          { en: "Powdered sugar", es: "Azúcar en polvo", de: "Puderzucker", nl: "Poedersuiker" }
        ],
        correct: 2,
        explanation: {
          en: "A traditional Old Fashioned uses a sugar cube, which is muddled with bitters and a splash of water or soda.",
          es: "Un Old Fashioned tradicional usa un terrón de azúcar, que se machaca con amargos y un chorrito de agua o soda.",
          de: "Ein traditioneller Old Fashioned verwendet einen Zuckerwürfel, der mit Bittern und einem Spritzer Wasser oder Soda gemudelt wird.",
          nl: "Een traditionele Old Fashioned gebruikt een suikerklontje, dat wordt gemudled met bitters en een scheut water of soda."
        }
      },
      {
        question: {
          en: "What is the main difference between a Whiskey Sour and a Whiskey Smash?",
          es: "¿Cuál es la principal diferencia entre un Whiskey Sour y un Whiskey Smash?",
          de: "Was ist der Hauptunterschied zwischen einem Whiskey Sour und einem Whiskey Smash?",
          nl: "Wat is het belangrijkste verschil tussen een Whiskey Sour en een Whiskey Smash?"
        },
        options: [
          { en: "Whiskey Smash contains muddled mint", es: "Whiskey Smash contiene menta machacada", de: "Whiskey Smash enthält gemudelte Minze", nl: "Whiskey Smash bevat gemudelde munt" },
          { en: "Whiskey Smash uses bourbon only", es: "Whiskey Smash usa solo bourbon", de: "Whiskey Smash verwendet nur Bourbon", nl: "Whiskey Smash gebruikt alleen bourbon" },
          { en: "Whiskey Smash is served hot", es: "Whiskey Smash se sirve caliente", de: "Whiskey Smash wird heiß serviert", nl: "Whiskey Smash wordt heet geserveerd" },
          { en: "Whiskey Smash has no citrus", es: "Whiskey Smash no tiene cítricos", de: "Whiskey Smash hat keine Zitrusfrüchte", nl: "Whiskey Smash heeft geen citrus" }
        ],
        correct: 0,
        explanation: {
          en: "A Whiskey Smash is essentially a Whiskey Sour with muddled fresh mint leaves, adding a refreshing herbal element.",
          es: "Un Whiskey Smash es esencialmente un Whiskey Sour con hojas de menta fresca machacadas, añadiendo un elemento herbal refrescante.",
          de: "Ein Whiskey Smash ist im Wesentlichen ein Whiskey Sour mit gemudelten frischen Minzblättern, was ein erfrischendes Kräuterelement hinzufügt.",
          nl: "Een Whiskey Smash is in wezen een Whiskey Sour met gemudelde verse muntblaadjes, wat een verfrissend kruidenelement toevoegt."
        }
      },
      {
        question: {
          en: "Which orange liqueur is considered the premium choice for cocktails?",
          es: "¿Qué licor de naranja se considera la opción premium para cócteles?",
          de: "Welcher Orangenlikör gilt als die Premium-Wahl für Cocktails?",
          nl: "Welke sinaasappellikeur wordt beschouwd als de premium keuze voor cocktails?"
        },
        options: [
          { en: "Triple Sec", es: "Triple Sec", de: "Triple Sec", nl: "Triple Sec" },
          { en: "Cointreau", es: "Cointreau", de: "Cointreau", nl: "Cointreau" },
          { en: "Grand Marnier", es: "Grand Marnier", de: "Grand Marnier", nl: "Grand Marnier" },
          { en: "Blue Curaçao", es: "Curaçao Azul", de: "Blaues Curaçao", nl: "Blauwe Curaçao" }
        ],
        correct: 1,
        explanation: {
          en: "Cointreau is considered the premium orange liqueur, made from sweet and bitter orange peels. It's crystal clear and has a pure, intense orange flavor.",
          es: "Cointreau se considera el licor de naranja premium, hecho de cáscaras de naranja dulce y amarga. Es cristalino y tiene un sabor de naranja puro e intenso.",
          de: "Cointreau gilt als der Premium-Orangenlikör, hergestellt aus süßen und bitteren Orangenschalen. Er ist kristallklar und hat einen reinen, intensiven Orangengeschmack.",
          nl: "Cointreau wordt beschouwd als de premium sinaasappellikeur, gemaakt van zoete en bittere sinaasappelschillen. Het is kristalhelder en heeft een pure, intense sinaasappelsmaak."
        }
      },
      {
        question: {
          en: "What makes a 'Perfect' Manhattan different from a regular Manhattan?",
          es: "¿Qué hace que un Manhattan 'Perfecto' sea diferente de un Manhattan regular?",
          de: "Was macht einen 'Perfect' Manhattan anders als einen normalen Manhattan?",
          nl: "Wat maakt een 'Perfect' Manhattan anders dan een gewone Manhattan?"
        },
        options: [
          { en: "It uses premium whiskey", es: "Usa whisky premium", de: "Er verwendet Premium-Whiskey", nl: "Het gebruikt premium whisky" },
          { en: "It uses both sweet and dry vermouth", es: "Usa vermut dulce y seco", de: "Er verwendet süßen und trockenen Wermut", nl: "Het gebruikt zowel zoete als droge vermouth" },
          { en: "It's served in a chilled glass", es: "Se sirve en copa helada", de: "Er wird in einem gekühlten Glas serviert", nl: "Het wordt geserveerd in een gekoeld glas" },
          { en: "It has two cherries", es: "Tiene dos cerezas", de: "Er hat zwei Kirschen", nl: "Het heeft twee kersen" }
        ],
        correct: 1,
        explanation: {
          en: "A 'Perfect' Manhattan uses equal parts sweet and dry vermouth instead of just sweet vermouth, creating a more balanced flavor profile.",
          es: "Un Manhattan 'Perfecto' usa partes iguales de vermut dulce y seco en lugar de solo vermut dulce, creando un perfil de sabor más equilibrado.",
          de: "Ein 'Perfect' Manhattan verwendet gleiche Teile süßen und trockenen Wermut anstatt nur süßen Wermut, was ein ausgewogeneres Geschmacksprofil schafft.",
          nl: "Een 'Perfect' Manhattan gebruikt gelijke delen zoete en droge vermouth in plaats van alleen zoete vermouth, wat een meer gebalanceerd smaakprofiel creëert."
        }
      },
      {
        question: {
          en: "Which type of rum is traditionally used in a Dark 'n' Stormy?",
          es: "¿Qué tipo de ron se usa tradicionalmente en un Dark 'n' Stormy?",
          de: "Welche Art von Rum wird traditionell in einem Dark 'n' Stormy verwendet?",
          nl: "Welk type rum wordt traditioneel gebruikt in een Dark 'n' Stormy?"
        },
        options: [
          { en: "White rum", es: "Ron blanco", de: "Weißer Rum", nl: "Witte rum" },
          { en: "Gold rum", es: "Ron dorado", de: "Goldener Rum", nl: "Gouden rum" },
          { en: "Dark rum", es: "Ron oscuro", de: "Dunkler Rum", nl: "Donkere rum" },
          { en: "Spiced rum", es: "Ron especiado", de: "Gewürzter Rum", nl: "Gekruide rum" }
        ],
        correct: 2,
        explanation: {
          en: "A Dark 'n' Stormy traditionally uses dark rum (specifically Gosling's Black Seal Rum) with ginger beer and lime juice.",
          es: "Un Dark 'n' Stormy tradicionalmente usa ron oscuro (específicamente Gosling's Black Seal Rum) con cerveza de jengibre y jugo de lima.",
          de: "Ein Dark 'n' Stormy verwendet traditionell dunklen Rum (speziell Gosling's Black Seal Rum) mit Ginger Beer und Limettensaft.",
          nl: "Een Dark 'n' Stormy gebruikt traditioneel donkere rum (specifiek Gosling's Black Seal Rum) met gemberbier en limoensap."
        }
      },
      {
        question: {
          en: "What is the traditional bitters used in a Sazerac cocktail?",
          es: "¿Cuáles son los amargos tradicionales usados en un cóctel Sazerac?",
          de: "Was sind die traditionellen Bitter, die in einem Sazerac-Cocktail verwendet werden?",
          nl: "Wat zijn de traditionele bitters die gebruikt worden in een Sazerac cocktail?"
        },
        options: [
          { en: "Angostura bitters", es: "Amargos Angostura", de: "Angostura-Bitter", nl: "Angostura bitters" },
          { en: "Orange bitters", es: "Amargos de naranja", de: "Orangen-Bitter", nl: "Sinaasappel bitters" },
          { en: "Peychaud's bitters", es: "Amargos Peychaud's", de: "Peychaud's Bitter", nl: "Peychaud's bitters" },
          { en: "Walnut bitters", es: "Amargos de nuez", de: "Walnuss-Bitter", nl: "Walnoot bitters" }
        ],
        correct: 2,
        explanation: {
          en: "A traditional Sazerac uses Peychaud's bitters, which were originally created in New Orleans and have a distinctly different flavor from Angostura bitters.",
          es: "Un Sazerac tradicional usa amargos Peychaud's, que fueron originalmente creados en Nueva Orleans y tienen un sabor distintivamente diferente de los amargos Angostura.",
          de: "Ein traditioneller Sazerac verwendet Peychaud's Bitter, die ursprünglich in New Orleans kreiert wurden und einen deutlich anderen Geschmack als Angostura-Bitter haben.",
          nl: "Een traditionele Sazerac gebruikt Peychaud's bitters, die oorspronkelijk in New Orleans werden gecreëerd en een duidelijk andere smaak hebben dan Angostura bitters."
        }
      },
      {
        question: {
          en: "Which ingredient gives a Blue Hawaii its distinctive blue color?",
          es: "¿Qué ingrediente le da a un Blue Hawaii su distintivo color azul?",
          de: "Welche Zutat verleiht einem Blue Hawaii seine charakteristische blaue Farbe?",
          nl: "Welk ingrediënt geeft een Blue Hawaii zijn kenmerkende blauwe kleur?"
        },
        options: [
          { en: "Blue food coloring", es: "Colorante alimentario azul", de: "Blaue Lebensmittelfarbe", nl: "Blauwe voedingskleurstof" },
          { en: "Blue Curaçao", es: "Curaçao Azul", de: "Blaues Curaçao", nl: "Blauwe Curaçao" },
          { en: "Butterfly pea flower", es: "Flor de guisante mariposa", de: "Schmetterlingserbsenblüte", nl: "Vlindererwt bloem" },
          { en: "Blue spirulina", es: "Espirulina azul", de: "Blaue Spirulina", nl: "Blauwe spirulina" }
        ],
        correct: 1,
        explanation: {
          en: "Blue Curaçao is an orange-flavored liqueur that has been artificially colored blue, giving the Blue Hawaii its signature color.",
          es: "El Curaçao Azul es un licor con sabor a naranja que ha sido coloreado artificialmente de azul, dándole al Blue Hawaii su color característico.",
          de: "Blaues Curaçao ist ein orangenartiger Likör, der künstlich blau gefärbt wurde und dem Blue Hawaii seine charakteristische Farbe verleiht.",
          nl: "Blauwe Curaçao is een sinaasappel-gearomatiseerde likeur die kunstmatig blauw gekleurd is, wat de Blue Hawaii zijn kenmerkende kleur geeft."
        }
      },
      {
        question: {
          en: "What is the main spirit in a classic Daiquiri?",
          es: "¿Cuál es el licor principal en un Daiquiri clásico?",
          de: "Was ist die Hauptspirituose in einem klassischen Daiquiri?",
          nl: "Wat is de hoofdspirit in een klassieke Daiquiri?"
        },
        options: [
          { en: "Vodka", es: "Vodka", de: "Wodka", nl: "Vodka" },
          { en: "Gin", es: "Ginebra", de: "Gin", nl: "Gin" },
          { en: "White rum", es: "Ron blanco", de: "Weißer Rum", nl: "Witte rum" },
          { en: "Tequila", es: "Tequila", de: "Tequila", nl: "Tequila" }
        ],
        correct: 2,
        explanation: {
          en: "A classic Daiquiri is made with white rum, fresh lime juice, and simple syrup. It originated in Cuba and is one of the most iconic rum cocktails.",
          es: "Un Daiquiri clásico se hace con ron blanco, jugo de lima fresca y jarabe simple. Se originó en Cuba y es uno de los cócteles de ron más icónicos.",
          de: "Ein klassischer Daiquiri wird mit weißem Rum, frischem Limettensaft und einfachem Sirup zubereitet. Er stammt aus Kuba und ist einer der berühmtesten Rum-Cocktails.",
          nl: "Een klassieke Daiquiri wordt gemaakt met witte rum, vers limoensap en eenvoudige siroop. Het ontstond in Cuba en is een van de meest iconische rumcocktails."
        }
      },
      {
        question: {
          en: "Which cocktail is known as the 'King of Cocktails'?",
          es: "¿Qué cóctel se conoce como el 'Rey de los Cócteles'?",
          de: "Welcher Cocktail ist als 'König der Cocktails' bekannt?",
          nl: "Welke cocktail staat bekend als de 'Koning van Cocktails'?"
        },
        options: [
          { en: "Manhattan", es: "Manhattan", de: "Manhattan", nl: "Manhattan" },
          { en: "Martini", es: "Martini", de: "Martini", nl: "Martini" },
          { en: "Old Fashioned", es: "Old Fashioned", de: "Old Fashioned", nl: "Old Fashioned" },
          { en: "Margarita", es: "Margarita", de: "Margarita", nl: "Margarita" }
        ],
        correct: 1,
        explanation: {
          en: "The Martini is often referred to as the 'King of Cocktails' due to its elegance, simplicity, and iconic status in cocktail culture.",
          es: "El Martini a menudo se conoce como el 'Rey de los Cócteles' debido a su elegancia, simplicidad y estatus icónico en la cultura de cócteles.",
          de: "Der Martini wird oft als 'König der Cocktails' bezeichnet aufgrund seiner Eleganz, Einfachheit und ikonischen Status in der Cocktailkultur.",
          nl: "De Martini wordt vaak de 'Koning van Cocktails' genoemd vanwege zijn elegantie, eenvoud en iconische status in de cocktailcultuur."
        }
      },
      {
        question: {
          en: "What type of glass is traditionally used for serving a Margarita?",
          es: "¿Qué tipo de copa se usa tradicionalmente para servir una Margarita?",
          de: "Welche Art von Glas wird traditionell zum Servieren einer Margarita verwendet?",
          nl: "Welk type glas wordt traditioneel gebruikt voor het serveren van een Margarita?"
        },
        options: [
          { en: "Highball glass", es: "Copa highball", de: "Highball-Glas", nl: "Highball glas" },
          { en: "Margarita glass", es: "Copa margarita", de: "Margarita-Glas", nl: "Margarita glas" },
          { en: "Martini glass", es: "Copa martini", de: "Martini-Glas", nl: "Martini glas" },
          { en: "Old Fashioned glass", es: "Copa Old Fashioned", de: "Old Fashioned-Glas", nl: "Old Fashioned glas" }
        ],
        correct: 1,
        explanation: {
          en: "A Margarita is traditionally served in a margarita glass (also called a coupette), which has a distinctive wide rim perfect for salt and a broad bowl to showcase the drink.",
          es: "Una Margarita se sirve tradicionalmente en una copa margarita (también llamada coupette), que tiene un borde ancho distintivo perfecto para sal y un cuenco amplio para mostrar la bebida.",
          de: "Eine Margarita wird traditionell in einem Margarita-Glas (auch Coupette genannt) serviert, das einen charakteristischen breiten Rand für Salz und eine breite Schale hat, um das Getränk zu präsentieren.",
          nl: "Een Margarita wordt traditioneel geserveerd in een margarita glas (ook wel coupette genoemd), die een kenmerkende brede rand heeft die perfect is voor zout en een brede kom om de drank te tonen."
        }
      },
      {
        question: {
          en: "Which fruit juice is the main ingredient in a classic Tequila Sunrise?",
          es: "¿Qué jugo de fruta es el ingrediente principal en un Tequila Sunrise clásico?",
          de: "Welcher Fruchtsaft ist die Hauptzutat in einem klassischen Tequila Sunrise?",
          nl: "Welk vruchtensap is het hoofdingrediënt in een klassieke Tequila Sunrise?"
        },
        options: [
          { en: "Grapefruit juice", es: "Jugo de toronja", de: "Grapefruitsaft", nl: "Grapefruitsap" },
          { en: "Pineapple juice", es: "Jugo de piña", de: "Ananassaft", nl: "Ananassap" },
          { en: "Orange juice", es: "Jugo de naranja", de: "Orangensaft", nl: "Sinaasappelsap" },
          { en: "Cranberry juice", es: "Jugo de arándano", de: "Cranberrysaft", nl: "Cranberrysap" }
        ],
        correct: 2,
        explanation: {
          en: "A Tequila Sunrise is made with tequila, orange juice, and grenadine syrup. The grenadine creates the sunrise effect as it settles at the bottom of the glass.",
          es: "Un Tequila Sunrise se hace con tequila, jugo de naranja y jarabe de granadina. La granadina crea el efecto de amanecer al depositarse en el fondo del vaso.",
          de: "Ein Tequila Sunrise wird mit Tequila, Orangensaft und Grenadine-Sirup zubereitet. Die Grenadine erzeugt den Sonnenaufgangseffekt, während sie sich am Boden des Glases absetzt.",
          nl: "Een Tequila Sunrise wordt gemaakt met tequila, sinaasappelsap en granaatappelsiroop. De granaatappelsiroop creëert het zonsopgangeffect terwijl het op de bodem van het glas bezinkt."
        }
      },
      {
        question: {
          en: "What herb is the key ingredient in a Mojito?",
          es: "¿Qué hierba es el ingrediente clave en un Mojito?",
          de: "Welches Kraut ist die Schlüsselzutat in einem Mojito?",
          nl: "Welk kruid is het belangrijkste ingrediënt in een Mojito?"
        },
        options: [
          { en: "Basil", es: "Albahaca", de: "Basilikum", nl: "Basilicum" },
          { en: "Mint", es: "Menta", de: "Minze", nl: "Munt" },
          { en: "Cilantro", es: "Cilantro", de: "Koriander", nl: "Koriander" },
          { en: "Thyme", es: "Tomillo", de: "Thymian", nl: "Tijm" }
        ],
        correct: 1,
        explanation: {
          en: "Fresh mint is the essential herb in a Mojito. It's muddled with sugar and lime juice, then mixed with white rum and soda water for a refreshing Cuban cocktail.",
          es: "La menta fresca es la hierba esencial en un Mojito. Se machaca con azúcar y jugo de lima, luego se mezcla con ron blanco y agua con gas para un refrescante cóctel cubano.",
          de: "Frische Minze ist das wesentliche Kraut in einem Mojito. Sie wird mit Zucker und Limettensaft gemudelt, dann mit weißem Rum und Sodawasser für einen erfrischenden kubanischen Cocktail gemischt.",
          nl: "Verse munt is het essentiële kruid in een Mojito. Het wordt gemud met suiker en limoensap, dan gemengd met witte rum en sodawater voor een verfrissende Cubaanse cocktail."
        }
      },
      {
        question: {
          en: "What is the base spirit in a Tom Collins?",
          es: "¿Cuál es el licor base en un Tom Collins?",
          de: "Was ist die Basisspirituose in einem Tom Collins?",
          nl: "Wat is de basis spirit in een Tom Collins?"
        },
        options: [
          { en: "Vodka", es: "Vodka", de: "Wodka", nl: "Vodka" },
          { en: "Gin", es: "Ginebra", de: "Gin", nl: "Gin" },
          { en: "Rum", es: "Ron", de: "Rum", nl: "Rum" },
          { en: "Whiskey", es: "Whisky", de: "Whiskey", nl: "Whisky" }
        ],
        correct: 1,
        explanation: {
          en: "A Tom Collins is made with gin, lemon juice, simple syrup, and soda water. It's a refreshing, citrusy highball cocktail served in a Collins glass.",
          es: "Un Tom Collins se hace con ginebra, jugo de limón, jarabe simple y agua con gas. Es un cóctel highball refrescante y cítrico servido en una copa Collins.",
          de: "Ein Tom Collins wird mit Gin, Zitronensaft, einfachem Sirup und Sodawasser zubereitet. Es ist ein erfrischender, zitrusartiger Highball-Cocktail, der in einem Collins-Glas serviert wird.",
          nl: "Een Tom Collins wordt gemaakt met gin, citroensap, eenvoudige siroop en sodawater. Het is een verfrissende, citrusachtige highball cocktail geserveerd in een Collins glas."
        }
      },
      {
        question: {
          en: "Which cocktail consists of vodka, coffee liqueur, and cream?",
          es: "¿Qué cóctel consiste en vodka, licor de café y crema?",
          de: "Welcher Cocktail besteht aus Wodka, Kaffeelikör und Sahne?",
          nl: "Welke cocktail bestaat uit vodka, koffielikeur en room?"
        },
        options: [
          { en: "Espresso Martini", es: "Espresso Martini", de: "Espresso Martini", nl: "Espresso Martini" },
          { en: "White Russian", es: "White Russian", de: "White Russian", nl: "White Russian" },
          { en: "Black Russian", es: "Black Russian", de: "Black Russian", nl: "Black Russian" },
          { en: "Mudslide", es: "Mudslide", de: "Mudslide", nl: "Mudslide" }
        ],
        correct: 1,
        explanation: {
          en: "A White Russian is made with vodka, coffee liqueur (typically Kahlúa), and cream or milk. It became famous through the movie 'The Big Lebowski'.",
          es: "Un White Russian se hace con vodka, licor de café (típicamente Kahlúa) y crema o leche. Se hizo famoso a través de la película 'The Big Lebowski'.",
          de: "Ein White Russian wird mit Wodka, Kaffeelikör (typischerweise Kahlúa) und Sahne oder Milch zubereitet. Er wurde durch den Film 'The Big Lebowski' berühmt.",
          nl: "Een White Russian wordt gemaakt met vodka, koffielikeur (meestal Kahlúa) en room of melk. Het werd beroemd door de film 'The Big Lebowski'."
        }
      },
      {
        question: {
          en: "What gives an Amaretto Sour its distinctive almond flavor?",
          es: "¿Qué le da a un Amaretto Sour su distintivo sabor a almendra?",
          de: "Was verleiht einem Amaretto Sour seinen charakteristischen Mandelgeschmack?",
          nl: "Wat geeft een Amaretto Sour zijn kenmerkende amandelsmaak?"
        },
        options: [
          { en: "Almond extract", es: "Extracto de almendra", de: "Mandelextrakt", nl: "Amandel extract" },
          { en: "Amaretto liqueur", es: "Licor Amaretto", de: "Amaretto-Likör", nl: "Amaretto likeur" },
          { en: "Almond milk", es: "Leche de almendras", de: "Mandelmilch", nl: "Amandelmelk" },
          { en: "Marzipan syrup", es: "Jarabe de mazapán", de: "Marzipan-Sirup", nl: "Marsepein siroop" }
        ],
        correct: 1,
        explanation: {
          en: "Amaretto liqueur, made from almonds or apricot pits, provides the distinctive almond flavor in an Amaretto Sour, which is mixed with lemon juice and optionally egg white.",
          es: "El licor Amaretto, hecho de almendras o huesos de albaricoque, proporciona el sabor distintivo a almendra en un Amaretto Sour, que se mezcla con jugo de limón y opcionalmente clara de huevo.",
          de: "Amaretto-Likör, aus Mandeln oder Aprikosenkernen hergestellt, verleiht dem Amaretto Sour seinen charakteristischen Mandelgeschmack, der mit Zitronensaft und optional Eiweiß gemischt wird.",
          nl: "Amaretto likeur, gemaakt van amandelen of abrikozenpitten, zorgt voor de kenmerkende amandelsmaak in een Amaretto Sour, die wordt gemengd met citroensap en optioneel eiwit."
        }
      },
      {
        question: {
          en: "Which liqueur is the primary ingredient in a Cosmopolitan?",
          es: "¿Qué licor es el ingrediente principal en un Cosmopolitan?",
          de: "Welcher Likör ist die Hauptzutat in einem Cosmopolitan?",
          nl: "Welke likeur is het primaire ingrediënt in een Cosmopolitan?"
        },
        options: [
          { en: "Vodka and triple sec", es: "Vodka y triple sec", de: "Wodka und Triple Sec", nl: "Vodka en triple sec" },
          { en: "Gin and Campari", es: "Ginebra y Campari", de: "Gin und Campari", nl: "Gin en Campari" },
          { en: "Rum and Cointreau", es: "Ron y Cointreau", de: "Rum und Cointreau", nl: "Rum en Cointreau" },
          { en: "Tequila and Grand Marnier", es: "Tequila y Grand Marnier", de: "Tequila und Grand Marnier", nl: "Tequila en Grand Marnier" }
        ],
        correct: 0,
        explanation: {
          en: "A Cosmopolitan is made with vodka, triple sec (or Cointreau), cranberry juice, and fresh lime juice. It became iconic in the 1990s through the TV show 'Sex and the City'.",
          es: "Un Cosmopolitan se hace con vodka, triple sec (o Cointreau), jugo de arándano y jugo de lima fresca. Se volvió icónico en los años 90 a través del programa de TV 'Sex and the City'.",
          de: "Ein Cosmopolitan wird mit Wodka, Triple Sec (oder Cointreau), Cranberrysaft und frischem Limettensaft zubereitet. Er wurde in den 1990er Jahren durch die TV-Show 'Sex and the City' ikonisch.",
          nl: "Een Cosmopolitan wordt gemaakt met vodka, triple sec (of Cointreau), cranberrysap en vers limoensap. Het werd iconisch in de jaren '90 door de TV-show 'Sex and the City'."
        }
      },
      {
        question: {
          en: "What is the traditional garnish for a Gibson cocktail?",
          es: "¿Cuál es la guarnición tradicional para un cóctel Gibson?",
          de: "Was ist die traditionelle Garnitur für einen Gibson-Cocktail?",
          nl: "Wat is de traditionele garnering voor een Gibson cocktail?"
        },
        options: [
          { en: "Olive", es: "Aceituna", de: "Olive", nl: "Olijf" },
          { en: "Lemon twist", es: "Torcido de limón", de: "Zitronenzeste", nl: "Citroentwist" },
          { en: "Cocktail onion", es: "Cebolla de cóctel", de: "Cocktailzwiebel", nl: "Cocktailuitje" },
          { en: "Cherry", es: "Cereza", de: "Kirsche", nl: "Kers" }
        ],
        correct: 2,
        explanation: {
          en: "A Gibson is essentially a Martini garnished with a cocktail onion instead of an olive or lemon twist. The onion adds a subtle savory note to the drink.",
          es: "Un Gibson es esencialmente un Martini adornado con una cebolla de cóctel en lugar de una aceituna o torcido de limón. La cebolla añade una nota salada sutil a la bebida.",
          de: "Ein Gibson ist im Wesentlichen ein Martini, der mit einer Cocktailzwiebel anstatt einer Olive oder Zitronenzeste garniert wird. Die Zwiebel fügt dem Getränk eine subtile herzhafte Note hinzu.",
          nl: "Een Gibson is in wezen een Martini gegarneerd met een cocktailuitje in plaats van een olijf of citroentwist. Het uitje voegt een subtiele hartige noot toe aan de drank."
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
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
