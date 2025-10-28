// Quiz Level 1: Drinken - Frisdranken (Basic Soft Drinks Knowledge)
(function() {
  const level1 = {
    name: {
      en: "Basic Soft Drinks Knowledge",
      es: "Conocimientos Básicos de Refrescos",
      de: "Grundwissen über Erfrischungsgetränke",
      nl: "Basis Kennis van Frisdranken"
    },
    questions: [
      {
        question: {
          en: "What color is Coca-Cola?",
          es: "¿De qué color es la Coca-Cola?",
          de: "Welche Farbe hat Coca-Cola?",
          nl: "Welke kleur heeft Coca-Cola?"
        },
        options: [
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" },
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" }
        ],
        correct: 0,
        explanation: {
          en: "Coca-Cola has a dark brown color due to caramel coloring and other ingredients.",
          es: "La Coca-Cola tiene un color marrón oscuro debido al colorante de caramelo y otros ingredientes.",
          de: "Coca-Cola hat eine dunkelbraune Farbe aufgrund von Karamellfarbe und anderen Zutaten.",
          nl: "Coca-Cola heeft een donkerbruine kleur door karamelkleurstof en andere ingrediënten."
        }
      },
      {
        question: {
          en: "Which drink is famous for its orange flavor?",
          es: "¿Qué bebida es famosa por su sabor a naranja?",
          de: "Welches Getränk ist berühmt für seinen Orangengeschmack?",
          nl: "Welke drank is beroemd om zijn sinaasappelsmaak?"
        },
        options: [
          { en: "Sprite", es: "Sprite", de: "Sprite", nl: "Sprite" },
          { en: "Fanta", es: "Fanta", de: "Fanta", nl: "Fanta" },
          { en: "Pepsi", es: "Pepsi", de: "Pepsi", nl: "Pepsi" },
          { en: "Root Beer", es: "Root Beer", de: "Root Beer", nl: "Root Beer" }
        ],
        correct: 1,
        explanation: {
          en: "Fanta is the most famous orange-flavored soft drink worldwide.",
          es: "Fanta es el refresco con sabor a naranja más famoso del mundo.",
          de: "Fanta ist das berühmteste Erfrischungsgetränk mit Orangengeschmack weltweit.",
          nl: "Fanta is de meest bekende frisdrank met sinaasappelsmaak wereldwijd."
        }
      },
      {
        question: {
          en: "What makes soft drinks fizzy?",
          es: "¿Qué hace que los refrescos sean burbujeantes?",
          de: "Was macht Erfrischungsgetränke sprudelnd?",
          nl: "Wat maakt frisdranken bruisend?"
        },
        options: [
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Carbon dioxide", es: "Dióxido de carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Ice", es: "Hielo", de: "Eis", nl: "Ijs" }
        ],
        correct: 1,
        explanation: {
          en: "Carbon dioxide gas is added to soft drinks to make them fizzy and bubbly.",
          es: "Se añade gas de dióxido de carbono a los refrescos para hacerlos burbujeantes.",
          de: "Kohlendioxidgas wird Erfrischungsgetränken zugesetzt, um sie sprudelnd zu machen.",
          nl: "Koolstofdioxide gas wordt toegevoegd aan frisdranken om ze bruisend te maken."
        }
      },
      {
        question: {
          en: "Which drink is clear and lemon-lime flavored?",
          es: "¿Qué bebida es transparente y con sabor a limón-lima?",
          de: "Welches Getränk ist klar und hat Zitronen-Limetten-Geschmack?",
          nl: "Welke drank is helder en heeft een citroen-limoen smaak?"
        },
        options: [
          { en: "Cola", es: "Cola", de: "Cola", nl: "Cola" },
          { en: "Orange soda", es: "Refresco de naranja", de: "Orangenlimonade", nl: "Sinaasappelfrisdrank" },
          { en: "Sprite", es: "Sprite", de: "Sprite", nl: "Sprite" },
          { en: "Root beer", es: "Root beer", de: "Root Beer", nl: "Root beer" }
        ],
        correct: 2,
        explanation: {
          en: "Sprite is a clear, caffeine-free soft drink with a lemon-lime flavor.",
          es: "Sprite es un refresco transparente sin cafeína con sabor a limón-lima.",
          de: "Sprite ist ein klares, koffeinfreies Erfrischungsgetränk mit Zitronen-Limetten-Geschmack.",
          nl: "Sprite is een heldere, cafeïnevrije frisdrank met citroen-limoen smaak."
        }
      },
      {
        question: {
          en: "What is the main ingredient in all soft drinks?",
          es: "¿Cuál es el ingrediente principal de todos los refrescos?",
          de: "Was ist die Hauptzutat in allen Erfrischungsgetränken?",
          nl: "Wat is het hoofdingrediënt in alle frisdranken?"
        },
        options: [
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Flavor", es: "Sabor", de: "Geschmack", nl: "Smaak" },
          { en: "Color", es: "Color", de: "Farbe", nl: "Kleur" }
        ],
        correct: 1,
        explanation: {
          en: "Water is the main ingredient in all soft drinks, making up about 90% of the drink.",
          es: "El agua es el ingrediente principal de todos los refrescos, constituyendo aproximadamente el 90% de la bebida.",
          de: "Wasser ist die Hauptzutat in allen Erfrischungsgetränken und macht etwa 90% des Getränks aus.",
          nl: "Water is het hoofdingrediënt in alle frisdranken en vormt ongeveer 90% van de drank."
        }
      },
      {
        question: {
          en: "Which soft drink is known for its red color?",
          es: "¿Qué refresco es conocido por su color rojo?",
          de: "Welches Erfrischungsgetränk ist für seine rote Farbe bekannt?",
          nl: "Welke frisdrank staat bekend om zijn rode kleur?"
        },
        options: [
          { en: "Sprite", es: "Sprite", de: "Sprite", nl: "Sprite" },
          { en: "Lemonade", es: "Limonada", de: "Limonade", nl: "Limonade" },
          { en: "Cherry Coke", es: "Cherry Coke", de: "Cherry Coke", nl: "Cherry Coke" },
          { en: "Ginger ale", es: "Ginger ale", de: "Ginger Ale", nl: "Ginger ale" }
        ],
        correct: 2,
        explanation: {
          en: "Cherry Coke has a distinctive red color from cherry flavoring and coloring.",
          es: "Cherry Coke tiene un color rojo distintivo del saborizante y colorante de cereza.",
          de: "Cherry Coke hat eine charakteristische rote Farbe von Kirsch-Aroma und -Farbstoff.",
          nl: "Cherry Coke heeft een kenmerkende rode kleur van kersenkleurstof en -aroma."
        }
      },
      {
        question: {
          en: "What should you do before opening a shaken soda bottle?",
          es: "¿Qué debes hacer antes de abrir una botella de refresco agitada?",
          de: "Was solltest du tun, bevor du eine geschüttelte Limonadenflasche öffnest?",
          nl: "Wat moet je doen voordat je een geschudde frisdrankfles opent?"
        },
        options: [
          { en: "Open it immediately", es: "Abrirla inmediatamente", de: "Sofort öffnen", nl: "Meteen openen" },
          { en: "Wait for it to settle", es: "Esperar a que se asiente", de: "Warten bis es sich beruhigt", nl: "Wachten tot het rustig wordt" },
          { en: "Shake it more", es: "Agitarla más", de: "Mehr schütteln", nl: "Meer schudden" },
          { en: "Put it in freezer", es: "Ponerla en el congelador", de: "In den Gefrierschrank legen", nl: "In de vriezer zetten" }
        ],
        correct: 1,
        explanation: {
          en: "You should wait for a shaken soda to settle before opening to prevent it from spraying everywhere.",
          es: "Debes esperar a que un refresco agitado se asiente antes de abrirlo para evitar que salpique por todas partes.",
          de: "Du solltest warten, bis sich eine geschüttelte Limonade beruhigt hat, bevor du sie öffnest, um zu verhindern, dass sie überall herumspritzt.",
          nl: "Je moet wachten tot een geschudde frisdrank rustig wordt voordat je hem opent om te voorkomen dat hij overal spuit."
        }
      },
      {
        question: {
          en: "Which temperature is best for drinking most soft drinks?",
          es: "¿Qué temperatura es mejor para beber la mayoría de los refrescos?",
          de: "Welche Temperatur ist am besten zum Trinken der meisten Erfrischungsgetränke?",
          nl: "Welke temperatuur is het beste voor het drinken van de meeste frisdranken?"
        },
        options: [
          { en: "Hot", es: "Caliente", de: "Heiß", nl: "Heet" },
          { en: "Room temperature", es: "Temperatura ambiente", de: "Zimmertemperatur", nl: "Kamertemperatuur" },
          { en: "Cold", es: "Frío", de: "Kalt", nl: "Koud" },
          { en: "Frozen", es: "Congelado", de: "Gefroren", nl: "Bevroren" }
        ],
        correct: 2,
        explanation: {
          en: "Most soft drinks taste best when served cold, usually between 2-4°C (35-40°F).",
          es: "La mayoría de los refrescos saben mejor cuando se sirven fríos, generalmente entre 2-4°C.",
          de: "Die meisten Erfrischungsgetränke schmecken am besten, wenn sie kalt serviert werden, normalerweise zwischen 2-4°C.",
          nl: "De meeste frisdranken smaken het beste wanneer ze koud geserveerd worden, meestal tussen 2-4°C."
        }
      },
      {
        question: {
          en: "What is lemonade made from?",
          es: "¿De qué está hecha la limonada?",
          de: "Woraus wird Limonade gemacht?",
          nl: "Waar is limonade van gemaakt?"
        },
        options: [
          { en: "Oranges", es: "Naranjas", de: "Orangen", nl: "Sinaasappels" },
          { en: "Lemons", es: "Limones", de: "Zitronen", nl: "Citroenen" },
          { en: "Apples", es: "Manzanas", de: "Äpfel", nl: "Appels" },
          { en: "Grapes", es: "Uvas", de: "Trauben", nl: "Druiven" }
        ],
        correct: 1,
        explanation: {
          en: "Lemonade is made from lemons, water, and sugar.",
          es: "La limonada se hace con limones, agua y azúcar.",
          de: "Limonade wird aus Zitronen, Wasser und Zucker hergestellt.",
          nl: "Limonade wordt gemaakt van citroenen, water en suiker."
        }
      },
      {
        question: {
          en: "Which soft drink is caffeine-free?",
          es: "¿Qué refresco no tiene cafeína?",
          de: "Welches Erfrischungsgetränk ist koffeinfrei?",
          nl: "Welke frisdrank is cafeïnevrij?"
        },
        options: [
          { en: "Coca-Cola", es: "Coca-Cola", de: "Coca-Cola", nl: "Coca-Cola" },
          { en: "Pepsi", es: "Pepsi", de: "Pepsi", nl: "Pepsi" },
          { en: "Sprite", es: "Sprite", de: "Sprite", nl: "Sprite" },
          { en: "Mountain Dew", es: "Mountain Dew", de: "Mountain Dew", nl: "Mountain Dew" }
        ],
        correct: 2,
        explanation: {
          en: "Sprite is a caffeine-free lemon-lime soft drink.",
          es: "Sprite es un refresco de limón-lima sin cafeína.",
          de: "Sprite ist ein koffeinfreies Zitronen-Limetten-Erfrischungsgetränk.",
          nl: "Sprite is een cafeïnevrije citroen-limoen frisdrank."
        }
      },
      {
        question: {
          en: "What gives cola drinks their brown color?",
          es: "¿Qué le da a las bebidas de cola su color marrón?",
          de: "Was verleiht Cola-Getränken ihre braune Farbe?",
          nl: "Wat geeft coladranken hun bruine kleur?"
        },
        options: [
          { en: "Caramel coloring", es: "Colorante caramelo", de: "Karamellfarbe", nl: "Karamelkleuring" },
          { en: "Chocolate", es: "Chocolate", de: "Schokolade", nl: "Chocolade" },
          { en: "Coffee", es: "Café", de: "Kaffee", nl: "Koffie" },
          { en: "Brown sugar", es: "Azúcar moreno", de: "Brauner Zucker", nl: "Bruine suiker" }
        ],
        correct: 0,
        explanation: {
          en: "Cola drinks get their characteristic brown color from caramel coloring, which is added during production.",
          es: "Las bebidas de cola obtienen su color marrón característico del colorante caramelo, que se añade durante la producción.",
          de: "Cola-Getränke erhalten ihre charakteristische braune Farbe durch Karamellfarbe, die während der Produktion hinzugefügt wird.",
          nl: "Coladranken krijgen hun karakteristieke bruine kleur van karamelkleuring, die tijdens de productie wordt toegevoegd."
        }
      },
      {
        question: {
          en: "What does 'carbonated' mean in soft drinks?",
          es: "¿Qué significa 'carbonatado' en los refrescos?",
          de: "Was bedeutet 'kohlensäurehaltig' bei Erfrischungsgetränken?",
          nl: "Wat betekent 'koolzuurhoudend' bij frisdranken?"
        },
        options: [
          { en: "Contains bubbles and fizz", es: "Contiene burbujas y efervescencia", de: "Enthält Blasen und Sprudel", nl: "Bevat bubbels en bruising" },
          { en: "Contains sugar", es: "Contiene azúcar", de: "Enthält Zucker", nl: "Bevat suiker" },
          { en: "Contains caffeine", es: "Contiene cafeína", de: "Enthält Koffein", nl: "Bevat cafeïne" },
          { en: "Contains ice", es: "Contiene hielo", de: "Enthält Eis", nl: "Bevat ijs" }
        ],
        correct: 0,
        explanation: {
          en: "Carbonated means the drink contains carbon dioxide gas, which creates bubbles and gives the fizzy sensation.",
          es: "Carbonatado significa que la bebida contiene gas dióxido de carbono, que crea burbujas y da la sensación efervescente.",
          de: "Kohlensäurehaltig bedeutet, dass das Getränk Kohlendioxidgas enthält, das Blasen erzeugt und für das prickelnde Gefühl sorgt.",
          nl: "Koolzuurhoudend betekent dat de drank kooldioxide gas bevat, dat bubbels creëert en het bruisende gevoel geeft."
        }
      },
      {
        question: {
          en: "Which fruit flavor is ginger ale made from?",
          es: "¿De qué sabor de fruta está hecha el ginger ale?",
          de: "Aus welchem Fruchtgeschmack wird Ginger Ale hergestellt?",
          nl: "Van welke fruitsmaak is ginger ale gemaakt?"
        },
        options: [
          { en: "Apple", es: "Manzana", de: "Apfel", nl: "Appel" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Sinaasappel" },
          { en: "Ginger (not a fruit, it's a root)", es: "Jengibre (no es una fruta, es una raíz)", de: "Ingwer (keine Frucht, sondern eine Wurzel)", nl: "Gember (geen fruit, het is een wortel)" },
          { en: "Lemon", es: "Limón", de: "Zitrone", nl: "Citroen" }
        ],
        correct: 2,
        explanation: {
          en: "Ginger ale is made from ginger, which is actually a root, not a fruit. It has a spicy, sweet flavor.",
          es: "El ginger ale está hecho de jengibre, que en realidad es una raíz, no una fruta. Tiene un sabor picante y dulce.",
          de: "Ginger Ale wird aus Ingwer hergestellt, der eigentlich eine Wurzel ist, keine Frucht. Es hat einen würzigen, süßen Geschmack.",
          nl: "Ginger ale is gemaakt van gember, wat eigenlijk een wortel is, geen fruit. Het heeft een kruidige, zoete smaak."
        }
      },
      {
        question: {
          en: "What is tonic water traditionally flavored with?",
          es: "¿Con qué se aromatiza tradicionalmente el agua tónica?",
          de: "Womit wird Tonic Water traditionell aromatisiert?",
          nl: "Waarmee wordt tonic water traditioneel op smaak gebracht?"
        },
        options: [
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Quinine", es: "Quinina", de: "Chinin", nl: "Kinine" },
          { en: "Vanilla", es: "Vainilla", de: "Vanille", nl: "Vanille" },
          { en: "Mint", es: "Menta", de: "Minze", nl: "Munt" }
        ],
        correct: 1,
        explanation: {
          en: "Tonic water contains quinine, which gives it a slightly bitter taste. It was originally used to prevent malaria.",
          es: "El agua tónica contiene quinina, que le da un sabor ligeramente amargo. Originalmente se usaba para prevenir la malaria.",
          de: "Tonic Water enthält Chinin, das ihm einen leicht bitteren Geschmack verleiht. Es wurde ursprünglich zur Malaria-Prävention verwendet.",
          nl: "Tonic water bevat kinine, wat het een licht bittere smaak geeft. Het werd oorspronkelijk gebruikt om malaria te voorkomen."
        }
      },
      {
        question: {
          en: "Which soft drink brand has a name that means 'thirst' in another language?",
          es: "¿Qué marca de refresco tiene un nombre que significa 'sed' en otro idioma?",
          de: "Welche Erfrischungsgetränkemarke hat einen Namen, der in einer anderen Sprache 'Durst' bedeutet?",
          nl: "Welk frisdrankenmerk heeft een naam die 'dorst' betekent in een andere taal?"
        },
        options: [
          { en: "Sprite", es: "Sprite", de: "Sprite", nl: "Sprite" },
          { en: "7UP", es: "7UP", de: "7UP", nl: "7UP" },
          { en: "Fanta", es: "Fanta", de: "Fanta", nl: "Fanta" },
          { en: "Gatorade (from 'gator' + 'ade')", es: "Gatorade (de 'gator' + 'ade')", de: "Gatorade (von 'gator' + 'ade')", nl: "Gatorade (van 'gator' + 'ade')" }
        ],
        correct: 2,
        explanation: {
          en: "Fanta's name comes from the German word 'Fantasie' (fantasy), though it doesn't mean thirst. The drink was created in Germany during World War II.",
          es: "El nombre de Fanta proviene de la palabra alemana 'Fantasie' (fantasía), aunque no significa sed. La bebida fue creada en Alemania durante la Segunda Guerra Mundial.",
          de: "Fantas Name stammt vom deutschen Wort 'Fantasie', obwohl es nicht Durst bedeutet. Das Getränk wurde während des Zweiten Weltkriegs in Deutschland entwickelt.",
          nl: "Fanta's naam komt van het Duitse woord 'Fantasie', hoewel het niet dorst betekent. De drank werd gecreëerd in Duitsland tijdens de Tweede Wereldoorlog."
        }
      },
      {
        question: {
          en: "What temperature should soft drinks typically be served at?",
          es: "¿A qué temperatura se deben servir típicamente los refrescos?",
          de: "Bei welcher Temperatur sollten Erfrischungsgetränke typischerweise serviert werden?",
          nl: "Op welke temperatuur moeten frisdranken doorgaans geserveerd worden?"
        },
        options: [
          { en: "Room temperature", es: "Temperatura ambiente", de: "Raumtemperatur", nl: "Kamertemperatuur" },
          { en: "Cold (refrigerated)", es: "Frío (refrigerado)", de: "Kalt (gekühlt)", nl: "Koud (gekoeld)" },
          { en: "Hot", es: "Caliente", de: "Heiß", nl: "Heet" },
          { en: "Frozen", es: "Congelado", de: "Gefroren", nl: "Bevroren" }
        ],
        correct: 1,
        explanation: {
          en: "Soft drinks taste best when served cold, typically at refrigerator temperature (around 4°C or 40°F).",
          es: "Los refrescos saben mejor cuando se sirven fríos, típicamente a temperatura de refrigerador (alrededor de 4°C o 40°F).",
          de: "Erfrischungsgetränke schmecken am besten, wenn sie kalt serviert werden, typischerweise bei Kühlschranktemperatur (etwa 4°C).",
          nl: "Frisdranken smaken het best wanneer ze koud geserveerd worden, doorgaans op koelkasttemperatuur (ongeveer 4°C)."
        }
      },
      {
        question: {
          en: "What is root beer made from?",
          es: "¿De qué está hecha la root beer?",
          de: "Woraus wird Root Beer hergestellt?",
          nl: "Waar is root beer van gemaakt?"
        },
        options: [
          { en: "Beer and roots", es: "Cerveza y raíces", de: "Bier und Wurzeln", nl: "Bier en wortels" },
          { en: "Sassafras root and other herbs", es: "Raíz de sasafrás y otras hierbas", de: "Sassafraswurzel und andere Kräuter", nl: "Sassafras wortel en andere kruiden" },
          { en: "Coffee beans", es: "Granos de café", de: "Kaffeebohnen", nl: "Koffiebonen" },
          { en: "Tea leaves", es: "Hojas de té", de: "Teeblätter", nl: "Theebladeren" }
        ],
        correct: 1,
        explanation: {
          en: "Root beer is traditionally made from sassafras root and other herbs and spices. Despite its name, it contains no alcohol.",
          es: "La root beer se hace tradicionalmente con raíz de sasafrás y otras hierbas y especias. A pesar de su nombre, no contiene alcohol.",
          de: "Root Beer wird traditionell aus Sassafraswurzel und anderen Kräutern und Gewürzen hergestellt. Trotz des Namens enthält es keinen Alkohol.",
          nl: "Root beer wordt traditioneel gemaakt van sassafras wortel en andere kruiden en specerijen. Ondanks de naam bevat het geen alcohol."
        }
      },
      {
        question: {
          en: "What color is orange soda?",
          es: "¿De qué color es la soda de naranja?",
          de: "Welche Farbe hat Orangenlimonade?",
          nl: "Welke kleur heeft sinaasappelfrisdrank?"
        },
        options: [
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" }
        ],
        correct: 1,
        explanation: {
          en: "Orange soda is orange in color, matching the color of oranges.",
          es: "La soda de naranja es de color naranja, coincidiendo con el color de las naranjas.",
          de: "Orangenlimonade ist orange gefärbt, passend zur Farbe von Orangen.",
          nl: "Sinaasappelfrisdrank is oranje van kleur, passend bij de kleur van sinaasappels."
        }
      },
      {
        question: {
          en: "What does 'diet' mean on a soft drink label?",
          es: "¿Qué significa 'diet' en la etiqueta de un refresco?",
          de: "Was bedeutet 'diet' auf einem Erfrischungsgetränk-Etikett?",
          nl: "Wat betekent 'diet' op een frisdrankenetiket?"
        },
        options: [
          { en: "It has more sugar", es: "Tiene más azúcar", de: "Es hat mehr Zucker", nl: "Het heeft meer suiker" },
          { en: "It has less or no sugar", es: "Tiene menos o no tiene azúcar", de: "Es hat weniger oder keinen Zucker", nl: "Het heeft minder of geen suiker" },
          { en: "It is made for athletes", es: "Está hecho para atletas", de: "Es ist für Sportler gemacht", nl: "Het is gemaakt voor atleten" },
          { en: "It contains vitamins", es: "Contiene vitaminas", de: "Es enthält Vitamine", nl: "Het bevat vitamines" }
        ],
        correct: 1,
        explanation: {
          en: "Diet soft drinks contain little or no sugar and use artificial sweeteners instead to reduce calories.",
          es: "Los refrescos diet contienen poca o ninguna azúcar y usan edulcorantes artificiales en su lugar para reducir las calorías.",
          de: "Diät-Erfrischungsgetränke enthalten wenig oder keinen Zucker und verwenden stattdessen künstliche Süßstoffe, um Kalorien zu reduzieren.",
          nl: "Diet frisdranken bevatten weinig of geen suiker en gebruiken kunstmatige zoetstoffen om calorieën te verminderen."
        }
      },
      {
        question: {
          en: "Which soft drink is clear and lemon-lime flavored?",
          es: "¿Qué refresco es transparente y tiene sabor a limón-lima?",
          de: "Welches Erfrischungsgetränk ist klar und zitronen-limetten-aromatisiert?",
          nl: "Welke frisdrank is helder en citroen-limoen gearomatiseerd?"
        },
        options: [
          { en: "Cola", es: "Cola", de: "Cola", nl: "Cola" },
          { en: "Sprite or 7UP", es: "Sprite o 7UP", de: "Sprite oder 7UP", nl: "Sprite of 7UP" },
          { en: "Root beer", es: "Root beer", de: "Root Beer", nl: "Root beer" },
          { en: "Ginger ale", es: "Ginger ale", de: "Ginger Ale", nl: "Ginger ale" }
        ],
        correct: 1,
        explanation: {
          en: "Sprite and 7UP are clear, lemon-lime flavored soft drinks that are caffeine-free.",
          es: "Sprite y 7UP son refrescos transparentes con sabor a limón-lima que no contienen cafeína.",
          de: "Sprite und 7UP sind klare, zitronen-limetten-aromatisierte Erfrischungsgetränke, die koffeinfrei sind.",
          nl: "Sprite en 7UP zijn heldere, citroen-limoen gearomatiseerde frisdranken die cafeïnevrij zijn."
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
