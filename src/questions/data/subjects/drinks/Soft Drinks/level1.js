// Soft Drinks Quiz - Level 1
(function() {
  const level1 = {
    name: {
          "en": "Basic Soft Drinks Knowledge",
          "es": "Conocimientos Básicos de Refrescos",
          "de": "Grundwissen über Erfrischungsgetränke",
          "nl": "Basis Kennis van Frisdranken"
    },
    questions: [
      {
        question: {
                  "en": "What color is Coca-Cola?",
                  "es": "¿De qué color es la Coca-Cola?",
                  "de": "Welche Farbe hat Coca-Cola?",
                  "nl": "Welke kleur heeft Coca-Cola?"
        },
        options: [
        {
                  "en": "Green",
                  "es": "Verde",
                  "de": "Grün",
                  "nl": "Groen"
        },
        {
                  "en": "Red",
                  "es": "Rojo",
                  "de": "Rot",
                  "nl": "Rood"
        },
        {
                  "en": "Blue",
                  "es": "Azul",
                  "de": "Blau",
                  "nl": "Blauw"
        },
        {
                  "en": "Brown",
                  "es": "Marrón",
                  "de": "Braun",
                  "nl": "Bruin"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Coca-Cola has a dark brown color due to caramel coloring and other ingredients.",
                  "es": "La Coca-Cola tiene un color marrón oscuro debido al colorante de caramelo y otros ingredientes.",
                  "de": "Coca-Cola hat eine dunkelbraune Farbe aufgrund von Karamellfarbe und anderen Zutaten.",
                  "nl": "Coca-Cola heeft een donkerbruine kleur door karamelkleurstof en andere ingrediënten."
        }
      },
      {
        question: {
                  "en": "Which drink is famous for its orange flavor?",
                  "es": "¿Qué bebida es famosa por su sabor a naranja?",
                  "de": "Welches Getränk ist berühmt für seinen Orangengeschmack?",
                  "nl": "Welke drank is beroemd om zijn sinaasappelsmaak?"
        },
        options: [
        {
                  "en": "Root Beer",
                  "es": "Root Beer",
                  "de": "Root Beer",
                  "nl": "Root Beer"
        },
        {
                  "en": "Fanta",
                  "es": "Fanta",
                  "de": "Fanta",
                  "nl": "Fanta"
        },
        {
                  "en": "Sprite",
                  "es": "Sprite",
                  "de": "Sprite",
                  "nl": "Sprite"
        },
        {
                  "en": "Pepsi",
                  "es": "Pepsi",
                  "de": "Pepsi",
                  "nl": "Pepsi"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Fanta is the most famous orange-flavored soft drink worldwide.",
                  "es": "Fanta es el refresco con sabor a naranja más famoso del mundo.",
                  "de": "Fanta ist das berühmteste Erfrischungsgetränk mit Orangengeschmack weltweit.",
                  "nl": "Fanta is de meest bekende frisdrank met sinaasappelsmaak wereldwijd."
        }
      },
      {
        question: {
                  "en": "What makes soft drinks fizzy?",
                  "es": "¿Qué hace que los refrescos sean burbujeantes?",
                  "de": "Was macht Erfrischungsgetränke sprudelnd?",
                  "nl": "Wat maakt frisdranken bruisend?"
        },
        options: [
        {
                  "en": "Carbon dioxide",
                  "es": "Dióxido de carbono",
                  "de": "Kohlendioxid",
                  "nl": "Koolstofdioxide"
        },
        {
                  "en": "Ice",
                  "es": "Hielo",
                  "de": "Eis",
                  "nl": "Ijs"
        },
        {
                  "en": "Sugar",
                  "es": "Azúcar",
                  "de": "Zucker",
                  "nl": "Suiker"
        },
        {
                  "en": "Water",
                  "es": "Agua",
                  "de": "Wasser",
                  "nl": "Water"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Carbon dioxide gas is added to soft drinks to make them fizzy and bubbly.",
                  "es": "Se añade gas de dióxido de carbono a los refrescos para hacerlos burbujeantes.",
                  "de": "Kohlendioxidgas wird Erfrischungsgetränken zugesetzt, um sie sprudelnd zu machen.",
                  "nl": "Koolstofdioxide gas wordt toegevoegd aan frisdranken om ze bruisend te maken."
        }
      },
      {
        question: {
                  "en": "Which drink is clear and lemon-lime flavored?",
                  "es": "¿Qué bebida es transparente y con sabor a limón-lima?",
                  "de": "Welches Getränk ist klar und hat Zitronen-Limetten-Geschmack?",
                  "nl": "Welke drank is helder en heeft een citroen-limoen smaak?"
        },
        options: [
        {
                  "en": "Sprite",
                  "es": "Sprite",
                  "de": "Sprite",
                  "nl": "Sprite"
        },
        {
                  "en": "Cola",
                  "es": "Cola",
                  "de": "Cola",
                  "nl": "Cola"
        },
        {
                  "en": "Root beer",
                  "es": "Root beer",
                  "de": "Root Beer",
                  "nl": "Root beer"
        },
        {
                  "en": "Orange soda",
                  "es": "Refresco de naranja",
                  "de": "Orangenlimonade",
                  "nl": "Sinaasappelfrisdrank"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sprite is a clear, caffeine-free soft drink with a lemon-lime flavor.",
                  "es": "Sprite es un refresco transparente sin cafeína con sabor a limón-lima.",
                  "de": "Sprite ist ein klares, koffeinfreies Erfrischungsgetränk mit Zitronen-Limetten-Geschmack.",
                  "nl": "Sprite is een heldere, cafeïnevrije frisdrank met citroen-limoen smaak."
        }
      },
      {
        question: {
                  "en": "What is the main ingredient in all soft drinks?",
                  "es": "¿Cuál es el ingrediente principal de todos los refrescos?",
                  "de": "Was ist die Hauptzutat in allen Erfrischungsgetränken?",
                  "nl": "Wat is het hoofdingrediënt in alle frisdranken?"
        },
        options: [
        {
                  "en": "Color",
                  "es": "Color",
                  "de": "Farbe",
                  "nl": "Kleur"
        },
        {
                  "en": "Flavor",
                  "es": "Sabor",
                  "de": "Geschmack",
                  "nl": "Smaak"
        },
        {
                  "en": "Water",
                  "es": "Agua",
                  "de": "Wasser",
                  "nl": "Water"
        },
        {
                  "en": "Sugar",
                  "es": "Azúcar",
                  "de": "Zucker",
                  "nl": "Suiker"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Water is the main ingredient in all soft drinks, making up about 90% of the drink.",
                  "es": "El agua es el ingrediente principal de todos los refrescos, constituyendo aproximadamente el 90% de la bebida.",
                  "de": "Wasser ist die Hauptzutat in allen Erfrischungsgetränken und macht etwa 90% des Getränks aus.",
                  "nl": "Water is het hoofdingrediënt in alle frisdranken en vormt ongeveer 90% van de drank."
        }
      },
      {
        question: {
                  "en": "Which soft drink is known for its red color?",
                  "es": "¿Qué refresco es conocido por su color rojo?",
                  "de": "Welches Erfrischungsgetränk ist für seine rote Farbe bekannt?",
                  "nl": "Welke frisdrank staat bekend om zijn rode kleur?"
        },
        options: [
        {
                  "en": "Sprite",
                  "es": "Sprite",
                  "de": "Sprite",
                  "nl": "Sprite"
        },
        {
                  "en": "Ginger ale",
                  "es": "Ginger ale",
                  "de": "Ginger Ale",
                  "nl": "Ginger ale"
        },
        {
                  "en": "Cherry Coke",
                  "es": "Cherry Coke",
                  "de": "Cherry Coke",
                  "nl": "Cherry Coke"
        },
        {
                  "en": "Lemonade",
                  "es": "Limonada",
                  "de": "Limonade",
                  "nl": "Limonade"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cherry Coke has a distinctive red color from cherry flavoring and coloring.",
                  "es": "Cherry Coke tiene un color rojo distintivo del saborizante y colorante de cereza.",
                  "de": "Cherry Coke hat eine charakteristische rote Farbe von Kirsch-Aroma und -Farbstoff.",
                  "nl": "Cherry Coke heeft een kenmerkende rode kleur van kersenkleurstof en -aroma."
        }
      },
      {
        question: {
                  "en": "What should you do before opening a shaken soda bottle?",
                  "es": "¿Qué debes hacer antes de abrir una botella de refresco agitada?",
                  "de": "Was solltest du tun, bevor du eine geschüttelte Limonadenflasche öffnest?",
                  "nl": "Wat moet je doen voordat je een geschudde frisdrankfles opent?"
        },
        options: [
        {
                  "en": "Put it in freezer",
                  "es": "Ponerla en el congelador",
                  "de": "In den Gefrierschrank legen",
                  "nl": "In de vriezer zetten"
        },
        {
                  "en": "Open it immediately",
                  "es": "Abrirla inmediatamente",
                  "de": "Sofort öffnen",
                  "nl": "Meteen openen"
        },
        {
                  "en": "Wait for it to settle",
                  "es": "Esperar a que se asiente",
                  "de": "Warten bis es sich beruhigt",
                  "nl": "Wachten tot het rustig wordt"
        },
        {
                  "en": "Shake it more",
                  "es": "Agitarla más",
                  "de": "Mehr schütteln",
                  "nl": "Meer schudden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "You should wait for a shaken soda to settle before opening to prevent it from spraying everywhere.",
                  "es": "Debes esperar a que un refresco agitado se asiente antes de abrirlo para evitar que salpique por todas partes.",
                  "de": "Du solltest warten, bis sich eine geschüttelte Limonade beruhigt hat, bevor du sie öffnest, um zu verhindern, dass sie überall herumspritzt.",
                  "nl": "Je moet wachten tot een geschudde frisdrank rustig wordt voordat je hem opent om te voorkomen dat hij overal spuit."
        }
      },
      {
        question: {
                  "en": "Which temperature is best for drinking most soft drinks?",
                  "es": "¿Qué temperatura es mejor para beber la mayoría de los refrescos?",
                  "de": "Welche Temperatur ist am besten zum Trinken der meisten Erfrischungsgetränke?",
                  "nl": "Welke temperatuur is het beste voor het drinken van de meeste frisdranken?"
        },
        options: [
        {
                  "en": "Frozen",
                  "es": "Congelado",
                  "de": "Gefroren",
                  "nl": "Bevroren"
        },
        {
                  "en": "Hot",
                  "es": "Caliente",
                  "de": "Heiß",
                  "nl": "Heet"
        },
        {
                  "en": "Cold",
                  "es": "Frío",
                  "de": "Kalt",
                  "nl": "Koud"
        },
        {
                  "en": "Room temperature",
                  "es": "Temperatura ambiente",
                  "de": "Zimmertemperatur",
                  "nl": "Kamertemperatuur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Most soft drinks taste best when served cold, usually between 2-4°C (35-40°F).",
                  "es": "La mayoría de los refrescos saben mejor cuando se sirven fríos, generalmente entre 2-4°C.",
                  "de": "Die meisten Erfrischungsgetränke schmecken am besten, wenn sie kalt serviert werden, normalerweise zwischen 2-4°C.",
                  "nl": "De meeste frisdranken smaken het beste wanneer ze koud geserveerd worden, meestal tussen 2-4°C."
        }
      },
      {
        question: {
                  "en": "What is lemonade made from?",
                  "es": "¿De qué está hecha la limonada?",
                  "de": "Woraus wird Limonade gemacht?",
                  "nl": "Waar is limonade van gemaakt?"
        },
        options: [
        {
                  "en": "Grapes",
                  "es": "Uvas",
                  "de": "Trauben",
                  "nl": "Druiven"
        },
        {
                  "en": "Apples",
                  "es": "Manzanas",
                  "de": "Äpfel",
                  "nl": "Appels"
        },
        {
                  "en": "Oranges",
                  "es": "Naranjas",
                  "de": "Orangen",
                  "nl": "Sinaasappels"
        },
        {
                  "en": "Lemons",
                  "es": "Limones",
                  "de": "Zitronen",
                  "nl": "Citroenen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Lemonade is made from lemons, water, and sugar.",
                  "es": "La limonada se hace con limones, agua y azúcar.",
                  "de": "Limonade wird aus Zitronen, Wasser und Zucker hergestellt.",
                  "nl": "Limonade wordt gemaakt van citroenen, water en suiker."
        }
      },
      {
        question: {
                  "en": "Which soft drink is caffeine-free?",
                  "es": "¿Qué refresco no tiene cafeína?",
                  "de": "Welches Erfrischungsgetränk ist koffeinfrei?",
                  "nl": "Welke frisdrank is cafeïnevrij?"
        },
        options: [
        {
                  "en": "Mountain Dew",
                  "es": "Mountain Dew",
                  "de": "Mountain Dew",
                  "nl": "Mountain Dew"
        },
        {
                  "en": "Pepsi",
                  "es": "Pepsi",
                  "de": "Pepsi",
                  "nl": "Pepsi"
        },
        {
                  "en": "Coca-Cola",
                  "es": "Coca-Cola",
                  "de": "Coca-Cola",
                  "nl": "Coca-Cola"
        },
        {
                  "en": "Sprite",
                  "es": "Sprite",
                  "de": "Sprite",
                  "nl": "Sprite"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Sprite is a caffeine-free lemon-lime soft drink.",
                  "es": "Sprite es un refresco de limón-lima sin cafeína.",
                  "de": "Sprite ist ein koffeinfreies Zitronen-Limetten-Erfrischungsgetränk.",
                  "nl": "Sprite is een cafeïnevrije citroen-limoen frisdrank."
        }
      },
      {
        question: {
                  "en": "What gives cola drinks their brown color?",
                  "es": "¿Qué le da a las bebidas de cola su color marrón?",
                  "de": "Was verleiht Cola-Getränken ihre braune Farbe?",
                  "nl": "Wat geeft coladranken hun bruine kleur?"
        },
        options: [
        {
                  "en": "Brown sugar",
                  "es": "Azúcar moreno",
                  "de": "Brauner Zucker",
                  "nl": "Bruine suiker"
        },
        {
                  "en": "Chocolate",
                  "es": "Chocolate",
                  "de": "Schokolade",
                  "nl": "Chocolade"
        },
        {
                  "en": "Caramel coloring",
                  "es": "Colorante caramelo",
                  "de": "Karamellfarbe",
                  "nl": "Karamelkleuring"
        },
        {
                  "en": "Coffee",
                  "es": "Café",
                  "de": "Kaffee",
                  "nl": "Koffie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cola drinks get their characteristic brown color from caramel coloring, which is added during production.",
                  "es": "Las bebidas de cola obtienen su color marrón característico del colorante caramelo, que se añade durante la producción.",
                  "de": "Cola-Getränke erhalten ihre charakteristische braune Farbe durch Karamellfarbe, die während der Produktion hinzugefügt wird.",
                  "nl": "Coladranken krijgen hun karakteristieke bruine kleur van karamelkleuring, die tijdens de productie wordt toegevoegd."
        }
      },
      {
        question: {
                  "en": "What does 'carbonated' mean in soft drinks?",
                  "es": "¿Qué significa 'carbonatado' en los refrescos?",
                  "de": "Was bedeutet 'kohlensäurehaltig' bei Erfrischungsgetränken?",
                  "nl": "Wat betekent 'koolzuurhoudend' bij frisdranken?"
        },
        options: [
        {
                  "en": "Contains bubbles and fizz",
                  "es": "Contiene burbujas y efervescencia",
                  "de": "Enthält Blasen und Sprudel",
                  "nl": "Bevat bubbels en bruising"
        },
        {
                  "en": "Contains sugar",
                  "es": "Contiene azúcar",
                  "de": "Enthält Zucker",
                  "nl": "Bevat suiker"
        },
        {
                  "en": "Contains caffeine",
                  "es": "Contiene cafeína",
                  "de": "Enthält Koffein",
                  "nl": "Bevat cafeïne"
        },
        {
                  "en": "Contains ice",
                  "es": "Contiene hielo",
                  "de": "Enthält Eis",
                  "nl": "Bevat ijs"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Carbonated means the drink contains carbon dioxide gas, which creates bubbles and gives the fizzy sensation.",
                  "es": "Carbonatado significa que la bebida contiene gas dióxido de carbono, que crea burbujas y da la sensación efervescente.",
                  "de": "Kohlensäurehaltig bedeutet, dass das Getränk Kohlendioxidgas enthält, das Blasen erzeugt und für das prickelnde Gefühl sorgt.",
                  "nl": "Koolzuurhoudend betekent dat de drank kooldioxide gas bevat, dat bubbels creëert en het bruisende gevoel geeft."
        }
      },
      {
        question: {
                  "en": "Which fruit flavor is ginger ale made from?",
                  "es": "¿De qué sabor de fruta está hecha el ginger ale?",
                  "de": "Aus welchem Fruchtgeschmack wird Ginger Ale hergestellt?",
                  "nl": "Van welke fruitsmaak is ginger ale gemaakt?"
        },
        options: [
        {
                  "en": "Orange",
                  "es": "Naranja",
                  "de": "Orange",
                  "nl": "Sinaasappel"
        },
        {
                  "en": "Lemon",
                  "es": "Limón",
                  "de": "Zitrone",
                  "nl": "Citroen"
        },
        {
                  "en": "Ginger (not a fruit, it's a root)",
                  "es": "Jengibre (no es una fruta, es una raíz)",
                  "de": "Ingwer (keine Frucht, sondern eine Wurzel)",
                  "nl": "Gember (geen fruit, het is een wortel)"
        },
        {
                  "en": "Apple",
                  "es": "Manzana",
                  "de": "Apfel",
                  "nl": "Appel"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ginger ale is made from ginger, which is actually a root, not a fruit. It has a spicy, sweet flavor.",
                  "es": "El ginger ale está hecho de jengibre, que en realidad es una raíz, no una fruta. Tiene un sabor picante y dulce.",
                  "de": "Ginger Ale wird aus Ingwer hergestellt, der eigentlich eine Wurzel ist, keine Frucht. Es hat einen würzigen, süßen Geschmack.",
                  "nl": "Ginger ale is gemaakt van gember, wat eigenlijk een wortel is, geen fruit. Het heeft een kruidige, zoete smaak."
        }
      },
      {
        question: {
                  "en": "What is tonic water traditionally flavored with?",
                  "es": "¿Con qué se aromatiza tradicionalmente el agua tónica?",
                  "de": "Womit wird Tonic Water traditionell aromatisiert?",
                  "nl": "Waarmee wordt tonic water traditioneel op smaak gebracht?"
        },
        options: [
        {
                  "en": "Mint",
                  "es": "Menta",
                  "de": "Minze",
                  "nl": "Munt"
        },
        {
                  "en": "Vanilla",
                  "es": "Vainilla",
                  "de": "Vanille",
                  "nl": "Vanille"
        },
        {
                  "en": "Salt",
                  "es": "Sal",
                  "de": "Salz",
                  "nl": "Zout"
        },
        {
                  "en": "Quinine",
                  "es": "Quinina",
                  "de": "Chinin",
                  "nl": "Kinine"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Tonic water contains quinine, which gives it a slightly bitter taste. It was originally used to prevent malaria.",
                  "es": "El agua tónica contiene quinina, que le da un sabor ligeramente amargo. Originalmente se usaba para prevenir la malaria.",
                  "de": "Tonic Water enthält Chinin, das ihm einen leicht bitteren Geschmack verleiht. Es wurde ursprünglich zur Malaria-Prävention verwendet.",
                  "nl": "Tonic water bevat kinine, wat het een licht bittere smaak geeft. Het werd oorspronkelijk gebruikt om malaria te voorkomen."
        }
      },
      {
        question: {
                  "en": "Which soft drink brand has a name that means 'thirst' in another language?",
                  "es": "¿Qué marca de refresco tiene un nombre que significa 'sed' en otro idioma?",
                  "de": "Welche Erfrischungsgetränkemarke hat einen Namen, der in einer anderen Sprache 'Durst' bedeutet?",
                  "nl": "Welk frisdrankenmerk heeft een naam die 'dorst' betekent in een andere taal?"
        },
        options: [
        {
                  "en": "7UP",
                  "es": "7UP",
                  "de": "7UP",
                  "nl": "7UP"
        },
        {
                  "en": "Gatorade (from 'gator' + 'ade')",
                  "es": "Gatorade (de 'gator' + 'ade')",
                  "de": "Gatorade (von 'gator' + 'ade')",
                  "nl": "Gatorade (van 'gator' + 'ade')"
        },
        {
                  "en": "Sprite",
                  "es": "Sprite",
                  "de": "Sprite",
                  "nl": "Sprite"
        },
        {
                  "en": "Fanta",
                  "es": "Fanta",
                  "de": "Fanta",
                  "nl": "Fanta"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Fanta's name comes from the German word 'Fantasie' (fantasy), though it doesn't mean thirst. The drink was created in Germany during World War II.",
                  "es": "El nombre de Fanta proviene de la palabra alemana 'Fantasie' (fantasía), aunque no significa sed. La bebida fue creada en Alemania durante la Segunda Guerra Mundial.",
                  "de": "Fantas Name stammt vom deutschen Wort 'Fantasie', obwohl es nicht Durst bedeutet. Das Getränk wurde während des Zweiten Weltkriegs in Deutschland entwickelt.",
                  "nl": "Fanta's naam komt van het Duitse woord 'Fantasie', hoewel het niet dorst betekent. De drank werd gecreëerd in Duitsland tijdens de Tweede Wereldoorlog."
        }
      },
      {
        question: {
                  "en": "What temperature should soft drinks typically be served at?",
                  "es": "¿A qué temperatura se deben servir típicamente los refrescos?",
                  "de": "Bei welcher Temperatur sollten Erfrischungsgetränke typischerweise serviert werden?",
                  "nl": "Op welke temperatuur moeten frisdranken doorgaans geserveerd worden?"
        },
        options: [
        {
                  "en": "Frozen",
                  "es": "Congelado",
                  "de": "Gefroren",
                  "nl": "Bevroren"
        },
        {
                  "en": "Room temperature",
                  "es": "Temperatura ambiente",
                  "de": "Raumtemperatur",
                  "nl": "Kamertemperatuur"
        },
        {
                  "en": "Cold (refrigerated)",
                  "es": "Frío (refrigerado)",
                  "de": "Kalt (gekühlt)",
                  "nl": "Koud (gekoeld)"
        },
        {
                  "en": "Hot",
                  "es": "Caliente",
                  "de": "Heiß",
                  "nl": "Heet"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Soft drinks taste best when served cold, typically at refrigerator temperature (around 4°C or 40°F).",
                  "es": "Los refrescos saben mejor cuando se sirven fríos, típicamente a temperatura de refrigerador (alrededor de 4°C o 40°F).",
                  "de": "Erfrischungsgetränke schmecken am besten, wenn sie kalt serviert werden, typischerweise bei Kühlschranktemperatur (etwa 4°C).",
                  "nl": "Frisdranken smaken het best wanneer ze koud geserveerd worden, doorgaans op koelkasttemperatuur (ongeveer 4°C)."
        }
      },
      {
        question: {
                  "en": "What is root beer made from?",
                  "es": "¿De qué está hecha la root beer?",
                  "de": "Woraus wird Root Beer hergestellt?",
                  "nl": "Waar is root beer van gemaakt?"
        },
        options: [
        {
                  "en": "Tea leaves",
                  "es": "Hojas de té",
                  "de": "Teeblätter",
                  "nl": "Theebladeren"
        },
        {
                  "en": "Beer and roots",
                  "es": "Cerveza y raíces",
                  "de": "Bier und Wurzeln",
                  "nl": "Bier en wortels"
        },
        {
                  "en": "Coffee beans",
                  "es": "Granos de café",
                  "de": "Kaffeebohnen",
                  "nl": "Koffiebonen"
        },
        {
                  "en": "Sassafras root and other herbs",
                  "es": "Raíz de sasafrás y otras hierbas",
                  "de": "Sassafraswurzel und andere Kräuter",
                  "nl": "Sassafras wortel en andere kruiden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Root beer is traditionally made from sassafras root and other herbs and spices. Despite its name, it contains no alcohol.",
                  "es": "La root beer se hace tradicionalmente con raíz de sasafrás y otras hierbas y especias. A pesar de su nombre, no contiene alcohol.",
                  "de": "Root Beer wird traditionell aus Sassafraswurzel und anderen Kräutern und Gewürzen hergestellt. Trotz des Namens enthält es keinen Alkohol.",
                  "nl": "Root beer wordt traditioneel gemaakt van sassafras wortel en andere kruiden en specerijen. Ondanks de naam bevat het geen alcohol."
        }
      },
      {
        question: {
                  "en": "What color is orange soda?",
                  "es": "¿De qué color es la soda de naranja?",
                  "de": "Welche Farbe hat Orangenlimonade?",
                  "nl": "Welke kleur heeft sinaasappelfrisdrank?"
        },
        options: [
        {
                  "en": "Yellow",
                  "es": "Amarillo",
                  "de": "Gelb",
                  "nl": "Geel"
        },
        {
                  "en": "Green",
                  "es": "Verde",
                  "de": "Grün",
                  "nl": "Groen"
        },
        {
                  "en": "Red",
                  "es": "Rojo",
                  "de": "Rot",
                  "nl": "Rood"
        },
        {
                  "en": "Orange",
                  "es": "Naranja",
                  "de": "Orange",
                  "nl": "Oranje"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Orange soda is orange in color, matching the color of oranges.",
                  "es": "La soda de naranja es de color naranja, coincidiendo con el color de las naranjas.",
                  "de": "Orangenlimonade ist orange gefärbt, passend zur Farbe von Orangen.",
                  "nl": "Sinaasappelfrisdrank is oranje van kleur, passend bij de kleur van sinaasappels."
        }
      },
      {
        question: {
                  "en": "What does 'diet' mean on a soft drink label?",
                  "es": "¿Qué significa 'diet' en la etiqueta de un refresco?",
                  "de": "Was bedeutet 'diet' auf einem Erfrischungsgetränk-Etikett?",
                  "nl": "Wat betekent 'diet' op een frisdrankenetiket?"
        },
        options: [
        {
                  "en": "It contains vitamins",
                  "es": "Contiene vitaminas",
                  "de": "Es enthält Vitamine",
                  "nl": "Het bevat vitamines"
        },
        {
                  "en": "It has less or no sugar",
                  "es": "Tiene menos o no tiene azúcar",
                  "de": "Es hat weniger oder keinen Zucker",
                  "nl": "Het heeft minder of geen suiker"
        },
        {
                  "en": "It is made for athletes",
                  "es": "Está hecho para atletas",
                  "de": "Es ist für Sportler gemacht",
                  "nl": "Het is gemaakt voor atleten"
        },
        {
                  "en": "It has more sugar",
                  "es": "Tiene más azúcar",
                  "de": "Es hat mehr Zucker",
                  "nl": "Het heeft meer suiker"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Diet soft drinks contain little or no sugar and use artificial sweeteners instead to reduce calories.",
                  "es": "Los refrescos diet contienen poca o ninguna azúcar y usan edulcorantes artificiales en su lugar para reducir las calorías.",
                  "de": "Diät-Erfrischungsgetränke enthalten wenig oder keinen Zucker und verwenden stattdessen künstliche Süßstoffe, um Kalorien zu reduzieren.",
                  "nl": "Diet frisdranken bevatten weinig of geen suiker en gebruiken kunstmatige zoetstoffen om calorieën te verminderen."
        }
      },
      {
        question: {
                  "en": "Which soft drink is clear and lemon-lime flavored?",
                  "es": "¿Qué refresco es transparente y tiene sabor a limón-lima?",
                  "de": "Welches Erfrischungsgetränk ist klar und zitronen-limetten-aromatisiert?",
                  "nl": "Welke frisdrank is helder en citroen-limoen gearomatiseerd?"
        },
        options: [
        {
                  "en": "Cola",
                  "es": "Cola",
                  "de": "Cola",
                  "nl": "Cola"
        },
        {
                  "en": "Root beer",
                  "es": "Root beer",
                  "de": "Root Beer",
                  "nl": "Root beer"
        },
        {
                  "en": "Ginger ale",
                  "es": "Ginger ale",
                  "de": "Ginger Ale",
                  "nl": "Ginger ale"
        },
        {
                  "en": "Sprite or 7UP",
                  "es": "Sprite o 7UP",
                  "de": "Sprite oder 7UP",
                  "nl": "Sprite of 7UP"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Sprite and 7UP are clear, lemon-lime flavored soft drinks that are caffeine-free.",
                  "es": "Sprite y 7UP son refrescos transparentes con sabor a limón-lima que no contienen cafeína.",
                  "de": "Sprite und 7UP sind klare, zitronen-limetten-aromatisierte Erfrischungsgetränke, die koffeinfrei sind.",
                  "nl": "Sprite en 7UP zijn heldere, citroen-limoen gearomatiseerde frisdranken die cafeïnevrij zijn."
        }
      },
      {
        question: {
                  "en": "What is a soft drink?",
                  "es": "What is a soft drink?",
                  "de": "What is a soft drink?",
                  "nl": "What is a soft drink?"
        },
        options: [
        {
                  "en": "Juice",
                  "es": "Juice",
                  "de": "Juice",
                  "nl": "Juice"
        },
        {
                  "en": "Milk-based drink",
                  "es": "Milk-based drink",
                  "de": "Milk-based drink",
                  "nl": "Milk-based drink"
        },
        {
                  "en": "Alcoholic drink",
                  "es": "Alcoholic drink",
                  "de": "Alcoholic drink",
                  "nl": "Alcoholic drink"
        },
        {
                  "en": "Non-alcoholic carbonated beverage",
                  "es": "Non-alcoholic carbonated beverage",
                  "de": "Non-alcoholic carbonated beverage",
                  "nl": "Non-alcoholic carbonated beverage"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A soft drink is a non-alcoholic beverage, typically carbonated and sweetened.",
                  "es": "A soft drink is a non-alcoholic beverage, typically carbonated and sweetened.",
                  "de": "A soft drink is a non-alcoholic beverage, typically carbonated and sweetened.",
                  "nl": "A soft drink is a non-alcoholic beverage, typically carbonated and sweetened."
        }
      },
      {
        question: {
                  "en": "What company makes Coca-Cola?",
                  "es": "What company makes Coca-Cola?",
                  "de": "What company makes Coca-Cola?",
                  "nl": "What company makes Coca-Cola?"
        },
        options: [
        {
                  "en": "PepsiCo",
                  "es": "PepsiCo",
                  "de": "PepsiCo",
                  "nl": "PepsiCo"
        },
        {
                  "en": "Nestle",
                  "es": "Nestle",
                  "de": "Nestle",
                  "nl": "Nestle"
        },
        {
                  "en": "Dr Pepper Snapple",
                  "es": "Dr Pepper Snapple",
                  "de": "Dr Pepper Snapple",
                  "nl": "Dr Pepper Snapple"
        },
        {
                  "en": "The Coca-Cola Company",
                  "es": "The Coca-Cola Company",
                  "de": "The Coca-Cola Company",
                  "nl": "The Coca-Cola Company"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Coca-Cola is produced by The Coca-Cola Company, founded in 1886.",
                  "es": "Coca-Cola is produced by The Coca-Cola Company, founded in 1886.",
                  "de": "Coca-Cola is produced by The Coca-Cola Company, founded in 1886.",
                  "nl": "Coca-Cola is produced by The Coca-Cola Company, founded in 1886."
        }
      },
      {
        question: {
                  "en": "What flavor is Sprite?",
                  "es": "What flavor is Sprite?",
                  "de": "What flavor is Sprite?",
                  "nl": "What flavor is Sprite?"
        },
        options: [
        {
                  "en": "Lemon-lime",
                  "es": "Lemon-lime",
                  "de": "Lemon-lime",
                  "nl": "Lemon-lime"
        },
        {
                  "en": "Orange",
                  "es": "Orange",
                  "de": "Orange",
                  "nl": "Orange"
        },
        {
                  "en": "Grape",
                  "es": "Grape",
                  "de": "Grape",
                  "nl": "Grape"
        },
        {
                  "en": "Cola",
                  "es": "Cola",
                  "de": "Cola",
                  "nl": "Cola"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sprite is a lemon-lime flavored carbonated soft drink.",
                  "es": "Sprite is a lemon-lime flavored carbonated soft drink.",
                  "de": "Sprite is a lemon-lime flavored carbonated soft drink.",
                  "nl": "Sprite is a lemon-lime flavored carbonated soft drink."
        }
      },
      {
        question: {
                  "en": "What gives soda its fizz?",
                  "es": "What gives soda its fizz?",
                  "de": "What gives soda its fizz?",
                  "nl": "What gives soda its fizz?"
        },
        options: [
        {
                  "en": "Oxygen",
                  "es": "Oxygen",
                  "de": "Oxygen",
                  "nl": "Oxygen"
        },
        {
                  "en": "Hydrogen",
                  "es": "Hydrogen",
                  "de": "Hydrogen",
                  "nl": "Hydrogen"
        },
        {
                  "en": "Carbon dioxide",
                  "es": "Carbon dioxide",
                  "de": "Carbon dioxide",
                  "nl": "Carbon dioxide"
        },
        {
                  "en": "Nitrogen",
                  "es": "Nitrogen",
                  "de": "Nitrogen",
                  "nl": "Nitrogen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Carbon dioxide dissolved under pressure gives soda its characteristic fizz and bubbles.",
                  "es": "Carbon dioxide dissolved under pressure gives soda its characteristic fizz and bubbles.",
                  "de": "Carbon dioxide dissolved under pressure gives soda its characteristic fizz and bubbles.",
                  "nl": "Carbon dioxide dissolved under pressure gives soda its characteristic fizz and bubbles."
        }
      },
      {
        question: {
                  "en": "What company makes Pepsi?",
                  "es": "What company makes Pepsi?",
                  "de": "What company makes Pepsi?",
                  "nl": "What company makes Pepsi?"
        },
        options: [
        {
                  "en": "Nestle",
                  "es": "Nestle",
                  "de": "Nestle",
                  "nl": "Nestle"
        },
        {
                  "en": "Dr Pepper",
                  "es": "Dr Pepper",
                  "de": "Dr Pepper",
                  "nl": "Dr Pepper"
        },
        {
                  "en": "PepsiCo",
                  "es": "PepsiCo",
                  "de": "PepsiCo",
                  "nl": "PepsiCo"
        },
        {
                  "en": "Coca-Cola Company",
                  "es": "Coca-Cola Company",
                  "de": "Coca-Cola Company",
                  "nl": "Coca-Cola Company"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Pepsi is produced by PepsiCo, a major competitor to Coca-Cola.",
                  "es": "Pepsi is produced by PepsiCo, a major competitor to Coca-Cola.",
                  "de": "Pepsi is produced by PepsiCo, a major competitor to Coca-Cola.",
                  "nl": "Pepsi is produced by PepsiCo, a major competitor to Coca-Cola."
        }
      },
      {
        question: {
                  "en": "What is root beer?",
                  "es": "What is root beer?",
                  "de": "What is root beer?",
                  "nl": "What is root beer?"
        },
        options: [
        {
                  "en": "Sweet soft drink flavored with sassafras",
                  "es": "Sweet soft drink flavored with sassafras",
                  "de": "Sweet soft drink flavored with sassafras",
                  "nl": "Sweet soft drink flavored with sassafras"
        },
        {
                  "en": "Coffee-based drink",
                  "es": "Coffee-based drink",
                  "de": "Coffee-based drink",
                  "nl": "Coffee-based drink"
        },
        {
                  "en": "Cola variant",
                  "es": "Cola variant",
                  "de": "Cola variant",
                  "nl": "Cola variant"
        },
        {
                  "en": "Alcoholic beer",
                  "es": "Alcoholic beer",
                  "de": "Alcoholic beer",
                  "nl": "Alcoholic beer"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Root beer is a sweet North American soft drink traditionally flavored with sassafras root.",
                  "es": "Root beer is a sweet North American soft drink traditionally flavored with sassafras root.",
                  "de": "Root beer is a sweet North American soft drink traditionally flavored with sassafras root.",
                  "nl": "Root beer is a sweet North American soft drink traditionally flavored with sassafras root."
        }
      },
      {
        question: {
                  "en": "What is ginger ale?",
                  "es": "What is ginger ale?",
                  "de": "What is ginger ale?",
                  "nl": "What is ginger ale?"
        },
        options: [
        {
                  "en": "Alcoholic ginger beer",
                  "es": "Alcoholic ginger beer",
                  "de": "Alcoholic ginger beer",
                  "nl": "Alcoholic ginger beer"
        },
        {
                  "en": "Ale with ginger flavor",
                  "es": "Ale with ginger flavor",
                  "de": "Ale with ginger flavor",
                  "nl": "Ale with ginger flavor"
        },
        {
                  "en": "Beer made with ginger",
                  "es": "Beer made with ginger",
                  "de": "Beer made with ginger",
                  "nl": "Beer made with ginger"
        },
        {
                  "en": "Ginger-flavored carbonated drink",
                  "es": "Ginger-flavored carbonated drink",
                  "de": "Ginger-flavored carbonated drink",
                  "nl": "Ginger-flavored carbonated drink"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Ginger ale is a non-alcoholic carbonated soft drink flavored with ginger.",
                  "es": "Ginger ale is a non-alcoholic carbonated soft drink flavored with ginger.",
                  "de": "Ginger ale is a non-alcoholic carbonated soft drink flavored with ginger.",
                  "nl": "Ginger ale is a non-alcoholic carbonated soft drink flavored with ginger."
        }
      },
      {
        question: {
                  "en": "What soft drink is known for its 23 flavors?",
                  "es": "What soft drink is known for its 23 flavors?",
                  "de": "What soft drink is known for its 23 flavors?",
                  "nl": "What soft drink is known for its 23 flavors?"
        },
        options: [
        {
                  "en": "Coca-Cola",
                  "es": "Coca-Cola",
                  "de": "Coca-Cola",
                  "nl": "Coca-Cola"
        },
        {
                  "en": "Dr Pepper",
                  "es": "Dr Pepper",
                  "de": "Dr Pepper",
                  "nl": "Dr Pepper"
        },
        {
                  "en": "7-Up",
                  "es": "7-Up",
                  "de": "7-Up",
                  "nl": "7-Up"
        },
        {
                  "en": "Pepsi",
                  "es": "Pepsi",
                  "de": "Pepsi",
                  "nl": "Pepsi"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Dr Pepper is marketed as having a unique blend of 23 flavors.",
                  "es": "Dr Pepper is marketed as having a unique blend of 23 flavors.",
                  "de": "Dr Pepper is marketed as having a unique blend of 23 flavors.",
                  "nl": "Dr Pepper is marketed as having a unique blend of 23 flavors."
        }
      },
      {
        question: {
                  "en": "What is Mountain Dew?",
                  "es": "What is Mountain Dew?",
                  "de": "What is Mountain Dew?",
                  "nl": "What is Mountain Dew?"
        },
        options: [
        {
                  "en": "Citrus-flavored caffeinated soft drink",
                  "es": "Citrus-flavored caffeinated soft drink",
                  "de": "Citrus-flavored caffeinated soft drink",
                  "nl": "Citrus-flavored caffeinated soft drink"
        },
        {
                  "en": "Juice",
                  "es": "Juice",
                  "de": "Juice",
                  "nl": "Juice"
        },
        {
                  "en": "Energy drink",
                  "es": "Energy drink",
                  "de": "Energy drink",
                  "nl": "Energy drink"
        },
        {
                  "en": "Tea-based drink",
                  "es": "Tea-based drink",
                  "de": "Tea-based drink",
                  "nl": "Tea-based drink"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Mountain Dew is a citrus-flavored carbonated soft drink with caffeine.",
                  "es": "Mountain Dew is a citrus-flavored carbonated soft drink with caffeine.",
                  "de": "Mountain Dew is a citrus-flavored carbonated soft drink with caffeine.",
                  "nl": "Mountain Dew is a citrus-flavored carbonated soft drink with caffeine."
        }
      },
      {
        question: {
                  "en": "What is tonic water?",
                  "es": "What is tonic water?",
                  "de": "What is tonic water?",
                  "nl": "What is tonic water?"
        },
        options: [
        {
                  "en": "Carbonated water with quinine",
                  "es": "Carbonated water with quinine",
                  "de": "Carbonated water with quinine",
                  "nl": "Carbonated water with quinine"
        },
        {
                  "en": "Sweet soda",
                  "es": "Sweet soda",
                  "de": "Sweet soda",
                  "nl": "Sweet soda"
        },
        {
                  "en": "Flavored water",
                  "es": "Flavored water",
                  "de": "Flavored water",
                  "nl": "Flavored water"
        },
        {
                  "en": "Plain carbonated water",
                  "es": "Plain carbonated water",
                  "de": "Plain carbonated water",
                  "nl": "Plain carbonated water"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Tonic water is carbonated water flavored with quinine, originally used to prevent malaria.",
                  "es": "Tonic water is carbonated water flavored with quinine, originally used to prevent malaria.",
                  "de": "Tonic water is carbonated water flavored with quinine, originally used to prevent malaria.",
                  "nl": "Tonic water is carbonated water flavored with quinine, originally used to prevent malaria."
        }
      },
      {
        question: {
                  "en": "What is club soda?",
                  "es": "What is club soda?",
                  "de": "What is club soda?",
                  "nl": "What is club soda?"
        },
        options: [
        {
                  "en": "Sweet soda",
                  "es": "Sweet soda",
                  "de": "Sweet soda",
                  "nl": "Sweet soda"
        },
        {
                  "en": "Carbonated water with minerals",
                  "es": "Carbonated water with minerals",
                  "de": "Carbonated water with minerals",
                  "nl": "Carbonated water with minerals"
        },
        {
                  "en": "Fruit-flavored soda",
                  "es": "Fruit-flavored soda",
                  "de": "Fruit-flavored soda",
                  "nl": "Fruit-flavored soda"
        },
        {
                  "en": "Alcoholic soda",
                  "es": "Alcoholic soda",
                  "de": "Alcoholic soda",
                  "nl": "Alcoholic soda"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Club soda is carbonated water with added minerals like sodium bicarbonate or potassium sulfate.",
                  "es": "Club soda is carbonated water with added minerals like sodium bicarbonate or potassium sulfate.",
                  "de": "Club soda is carbonated water with added minerals like sodium bicarbonate or potassium sulfate.",
                  "nl": "Club soda is carbonated water with added minerals like sodium bicarbonate or potassium sulfate."
        }
      },
      {
        question: {
                  "en": "What color is original Coca-Cola?",
                  "es": "What color is original Coca-Cola?",
                  "de": "What color is original Coca-Cola?",
                  "nl": "What color is original Coca-Cola?"
        },
        options: [
        {
                  "en": "Black",
                  "es": "Black",
                  "de": "Black",
                  "nl": "Black"
        },
        {
                  "en": "Caramel brown",
                  "es": "Caramel brown",
                  "de": "Caramel brown",
                  "nl": "Caramel brown"
        },
        {
                  "en": "Clear",
                  "es": "Clear",
                  "de": "Clear",
                  "nl": "Clear"
        },
        {
                  "en": "Red",
                  "es": "Red",
                  "de": "Red",
                  "nl": "Red"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Coca-Cola has a distinctive caramel brown color from caramel coloring.",
                  "es": "Coca-Cola has a distinctive caramel brown color from caramel coloring.",
                  "de": "Coca-Cola has a distinctive caramel brown color from caramel coloring.",
                  "nl": "Coca-Cola has a distinctive caramel brown color from caramel coloring."
        }
      },
      {
        question: {
                  "en": "What is Fanta?",
                  "es": "What is Fanta?",
                  "de": "What is Fanta?",
                  "nl": "What is Fanta?"
        },
        options: [
        {
                  "en": "Lemon-lime soda",
                  "es": "Lemon-lime soda",
                  "de": "Lemon-lime soda",
                  "nl": "Lemon-lime soda"
        },
        {
                  "en": "Root beer",
                  "es": "Root beer",
                  "de": "Root beer",
                  "nl": "Root beer"
        },
        {
                  "en": "Orange-flavored soft drink",
                  "es": "Orange-flavored soft drink",
                  "de": "Orange-flavored soft drink",
                  "nl": "Orange-flavored soft drink"
        },
        {
                  "en": "Cola drink",
                  "es": "Cola drink",
                  "de": "Cola drink",
                  "nl": "Cola drink"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Fanta is a fruit-flavored carbonated soft drink, most commonly orange-flavored.",
                  "es": "Fanta is a fruit-flavored carbonated soft drink, most commonly orange-flavored.",
                  "de": "Fanta is a fruit-flavored carbonated soft drink, most commonly orange-flavored.",
                  "nl": "Fanta is a fruit-flavored carbonated soft drink, most commonly orange-flavored."
        }
      },
      {
        question: {
                  "en": "What does 'diet' or 'zero' soda mean?",
                  "es": "What does 'diet' or 'zero' soda mean?",
                  "de": "What does 'diet' or 'zero' soda mean?",
                  "nl": "What does 'diet' or 'zero' soda mean?"
        },
        options: [
        {
                  "en": "Sweetened with artificial sweeteners, no sugar",
                  "es": "Sweetened with artificial sweeteners, no sugar",
                  "de": "Sweetened with artificial sweeteners, no sugar",
                  "nl": "Sweetened with artificial sweeteners, no sugar"
        },
        {
                  "en": "Organic ingredients",
                  "es": "Organic ingredients",
                  "de": "Organic ingredients",
                  "nl": "Organic ingredients"
        },
        {
                  "en": "Less carbonation",
                  "es": "Less carbonation",
                  "de": "Less carbonation",
                  "nl": "Less carbonation"
        },
        {
                  "en": "No caffeine",
                  "es": "No caffeine",
                  "de": "No caffeine",
                  "nl": "No caffeine"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Diet or zero sodas use artificial sweeteners instead of sugar, reducing calories.",
                  "es": "Diet or zero sodas use artificial sweeteners instead of sugar, reducing calories.",
                  "de": "Diet or zero sodas use artificial sweeteners instead of sugar, reducing calories.",
                  "nl": "Diet or zero sodas use artificial sweeteners instead of sugar, reducing calories."
        }
      },
      {
        question: {
                  "en": "What is cream soda?",
                  "es": "What is cream soda?",
                  "de": "What is cream soda?",
                  "nl": "What is cream soda?"
        },
        options: [
        {
                  "en": "Coffee soda",
                  "es": "Coffee soda",
                  "de": "Coffee soda",
                  "nl": "Coffee soda"
        },
        {
                  "en": "Chocolate soda",
                  "es": "Chocolate soda",
                  "de": "Chocolate soda",
                  "nl": "Chocolate soda"
        },
        {
                  "en": "Vanilla-flavored carbonated drink",
                  "es": "Vanilla-flavored carbonated drink",
                  "de": "Vanilla-flavored carbonated drink",
                  "nl": "Vanilla-flavored carbonated drink"
        },
        {
                  "en": "Soda with cream",
                  "es": "Soda with cream",
                  "de": "Soda with cream",
                  "nl": "Soda with cream"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cream soda is a sweet carbonated beverage flavored with vanilla.",
                  "es": "Cream soda is a sweet carbonated beverage flavored with vanilla.",
                  "de": "Cream soda is a sweet carbonated beverage flavored with vanilla.",
                  "nl": "Cream soda is a sweet carbonated beverage flavored with vanilla."
        }
      },
      {
        question: {
                  "en": "What is energy drink classified as?",
                  "es": "What is energy drink classified as?",
                  "de": "What is energy drink classified as?",
                  "nl": "What is energy drink classified as?"
        },
        options: [
        {
                  "en": "Sports drink",
                  "es": "Sports drink",
                  "de": "Sports drink",
                  "nl": "Sports drink"
        },
        {
                  "en": "Tea",
                  "es": "Tea",
                  "de": "Tea",
                  "nl": "Tea"
        },
        {
                  "en": "Soft drink with added stimulants",
                  "es": "Soft drink with added stimulants",
                  "de": "Soft drink with added stimulants",
                  "nl": "Soft drink with added stimulants"
        },
        {
                  "en": "Juice",
                  "es": "Juice",
                  "de": "Juice",
                  "nl": "Juice"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Energy drinks are soft drinks containing caffeine and other stimulants like taurine.",
                  "es": "Energy drinks are soft drinks containing caffeine and other stimulants like taurine.",
                  "de": "Energy drinks are soft drinks containing caffeine and other stimulants like taurine.",
                  "nl": "Energy drinks are soft drinks containing caffeine and other stimulants like taurine."
        }
      },
      {
        question: {
                  "en": "What is 7-Up?",
                  "es": "What is 7-Up?",
                  "de": "What is 7-Up?",
                  "nl": "What is 7-Up?"
        },
        options: [
        {
                  "en": "Orange soda",
                  "es": "Orange soda",
                  "de": "Orange soda",
                  "nl": "Orange soda"
        },
        {
                  "en": "Root beer",
                  "es": "Root beer",
                  "de": "Root beer",
                  "nl": "Root beer"
        },
        {
                  "en": "Lemon-lime flavored soft drink",
                  "es": "Lemon-lime flavored soft drink",
                  "de": "Lemon-lime flavored soft drink",
                  "nl": "Lemon-lime flavored soft drink"
        },
        {
                  "en": "Cola",
                  "es": "Cola",
                  "de": "Cola",
                  "nl": "Cola"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "7-Up is a lemon-lime flavored non-caffeinated soft drink.",
                  "es": "7-Up is a lemon-lime flavored non-caffeinated soft drink.",
                  "de": "7-Up is a lemon-lime flavored non-caffeinated soft drink.",
                  "nl": "7-Up is a lemon-lime flavored non-caffeinated soft drink."
        }
      },
      {
        question: {
                  "en": "What is the sweetener in regular soda?",
                  "es": "What is the sweetener in regular soda?",
                  "de": "What is the sweetener in regular soda?",
                  "nl": "What is the sweetener in regular soda?"
        },
        options: [
        {
                  "en": "Artificial sweetener",
                  "es": "Artificial sweetener",
                  "de": "Artificial sweetener",
                  "nl": "Artificial sweetener"
        },
        {
                  "en": "Honey",
                  "es": "Honey",
                  "de": "Honey",
                  "nl": "Honey"
        },
        {
                  "en": "Fruit juice",
                  "es": "Fruit juice",
                  "de": "Fruit juice",
                  "nl": "Fruit juice"
        },
        {
                  "en": "Sugar or high-fructose corn syrup",
                  "es": "Sugar or high-fructose corn syrup",
                  "de": "Sugar or high-fructose corn syrup",
                  "nl": "Sugar or high-fructose corn syrup"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Regular sodas are typically sweetened with sugar or high-fructose corn syrup.",
                  "es": "Regular sodas are typically sweetened with sugar or high-fructose corn syrup.",
                  "de": "Regular sodas are typically sweetened with sugar or high-fructose corn syrup.",
                  "nl": "Regular sodas are typically sweetened with sugar or high-fructose corn syrup."
        }
      },
      {
        question: {
                  "en": "What is seltzer water?",
                  "es": "What is seltzer water?",
                  "de": "What is seltzer water?",
                  "nl": "What is seltzer water?"
        },
        options: [
        {
                  "en": "Tonic water",
                  "es": "Tonic water",
                  "de": "Tonic water",
                  "nl": "Tonic water"
        },
        {
                  "en": "Flavored soda",
                  "es": "Flavored soda",
                  "de": "Flavored soda",
                  "nl": "Flavored soda"
        },
        {
                  "en": "Plain carbonated water",
                  "es": "Plain carbonated water",
                  "de": "Plain carbonated water",
                  "nl": "Plain carbonated water"
        },
        {
                  "en": "Mineral water",
                  "es": "Mineral water",
                  "de": "Mineral water",
                  "nl": "Mineral water"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Seltzer water is simply water that has been carbonated, with no added minerals or flavoring.",
                  "es": "Seltzer water is simply water that has been carbonated, with no added minerals or flavoring.",
                  "de": "Seltzer water is simply water that has been carbonated, with no added minerals or flavoring.",
                  "nl": "Seltzer water is simply water that has been carbonated, with no added minerals or flavoring."
        }
      },
      {
        question: {
                  "en": "What soft drink was originally a mixer for whiskey?",
                  "es": "What soft drink was originally a mixer for whiskey?",
                  "de": "What soft drink was originally a mixer for whiskey?",
                  "nl": "What soft drink was originally a mixer for whiskey?"
        },
        options: [
        {
                  "en": "Coca-Cola",
                  "es": "Coca-Cola",
                  "de": "Coca-Cola",
                  "nl": "Coca-Cola"
        },
        {
                  "en": "Root beer",
                  "es": "Root beer",
                  "de": "Root beer",
                  "nl": "Root beer"
        },
        {
                  "en": "Sprite",
                  "es": "Sprite",
                  "de": "Sprite",
                  "nl": "Sprite"
        },
        {
                  "en": "Ginger ale",
                  "es": "Ginger ale",
                  "de": "Ginger ale",
                  "nl": "Ginger ale"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Ginger ale was originally created in the 1850s and often used as a mixer for whiskey.",
                  "es": "Ginger ale was originally created in the 1850s and often used as a mixer for whiskey.",
                  "de": "Ginger ale was originally created in the 1850s and often used as a mixer for whiskey.",
                  "nl": "Ginger ale was originally created in the 1850s and often used as a mixer for whiskey."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();