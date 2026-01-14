// Quiz Level 2: Drinken - Frisdranken (Elementary Soft Drinks & Brands)
(function() {
  const level2 = {
    name: {
      en: "Elementary Soft Drinks & Brands",
      es: "Refrescos Elementales y Marcas",
      de: "Elementare Erfrischungsgetränke & Marken",
      nl: "Elementaire Frisdranken & Merken"
    },
    questions: [
      {
        question: {
          en: "Which company makes Pepsi?",
          es: "¿Qué empresa hace Pepsi?",
          de: "Welches Unternehmen stellt Pepsi her?",
          nl: "Welk bedrijf maakt Pepsi?"
        },
        options: [
          { en: "PepsiCo", es: "PepsiCo", de: "PepsiCo", nl: "PepsiCo" },
          { en: "Coca-Cola Company", es: "Empresa Coca-Cola", de: "Coca-Cola Unternehmen", nl: "Coca-Cola Bedrijf" },
          { en: "Dr Pepper", es: "Dr Pepper", de: "Dr Pepper", nl: "Dr Pepper" },
          { en: "Sprite Inc", es: "Sprite Inc", de: "Sprite Inc", nl: "Sprite Inc" }
        ],
        correct: 0,
        explanation: {
          en: "PepsiCo is the company that manufactures Pepsi and many other soft drink brands.",
          es: "PepsiCo es la empresa que fabrica Pepsi y muchas otras marcas de refrescos.",
          de: "PepsiCo ist das Unternehmen, das Pepsi und viele andere Erfrischungsgetränkemarken herstellt.",
          nl: "PepsiCo is het bedrijf dat Pepsi en vele andere frisdrankmerken maakt."
        }
      },
      {
        question: {
          en: "What is the most popular cola flavor besides original?",
          es: "¿Cuál es el sabor de cola más popular además del original?",
          de: "Was ist der beliebteste Cola-Geschmack außer dem Original?",
          nl: "Wat is de populairste cola-smaak naast de originele?"
        },
        options: [
          { en: "Lemon Cola", es: "Cola de limón", de: "Zitronen-Cola", nl: "Citroen Cola" },
          { en: "Cherry Cola", es: "Cola de cereza", de: "Kirsch-Cola", nl: "Kerzen Cola" },
          { en: "Orange Cola", es: "Cola de naranja", de: "Orangen-Cola", nl: "Sinaasappel Cola" },
          { en: "Apple Cola", es: "Cola de manzana", de: "Apfel-Cola", nl: "Appel Cola" }
        ],
        correct: 1,
        explanation: {
          en: "Cherry Cola is the most popular flavored variation of cola drinks worldwide.",
          es: "Cherry Cola es la variación saborizada de colas más popular mundialmente.",
          de: "Cherry Cola ist die beliebteste Geschmacksvariation von Cola-Getränken weltweit.",
          nl: "Cherry Cola is de populairste gearomatiseerde variatie van cola-dranken wereldwijd."
        }
      },
      {
        question: {
          en: "How much sugar is typically in a regular 355ml can of soda?",
          es: "¿Cuánta azúcar hay típicamente en una lata regular de 355ml de refresco?",
          de: "Wie viel Zucker ist normalerweise in einer regulären 355ml-Dose Limonade?",
          nl: "Hoeveel suiker zit er typisch in een gewone 355ml blikje frisdrank?"
        },
        options: [
          { en: "10-15 grams", es: "10-15 gramos", de: "10-15 Gramm", nl: "10-15 gram" },
          { en: "25-30 grams", es: "25-30 gramos", de: "25-30 Gramm", nl: "25-30 gram" },
          { en: "35-40 grams", es: "35-40 gramos", de: "35-40 Gramm", nl: "35-40 gram" },
          { en: "50-55 grams", es: "50-55 gramos", de: "50-55 Gramm", nl: "50-55 gram" }
        ],
        correct: 2,
        explanation: {
          en: "A typical 355ml can of regular soda contains about 35-40 grams of sugar, which is quite a lot.",
          es: "Una lata típica de 355ml de refresco regular contiene aproximadamente 35-40 gramos de azúcar, lo cual es bastante.",
          de: "Eine typische 355ml-Dose normaler Limonade enthält etwa 35-40 Gramm Zucker, was ziemlich viel ist.",
          nl: "Een typisch 355ml blikje gewone frisdrank bevat ongeveer 35-40 gram suiker, wat behoorlijk veel is."
        }
      },
      {
        question: {
          en: "Which soft drink is known for its unique bottle shape?",
          es: "¿Qué refresco es conocido por la forma única de su botella?",
          de: "Welches Erfrischungsgetränk ist für seine einzigartige Flaschenform bekannt?",
          nl: "Welke frisdrank staat bekend om zijn unieke flesvorm?"
        },
        options: [
          { en: "Pepsi", es: "Pepsi", de: "Pepsi", nl: "Pepsi" },
          { en: "Coca-Cola", es: "Coca-Cola", de: "Coca-Cola", nl: "Coca-Cola" },
          { en: "Sprite", es: "Sprite", de: "Sprite", nl: "Sprite" },
          { en: "Fanta", es: "Fanta", de: "Fanta", nl: "Fanta" }
        ],
        correct: 1,
        explanation: {
          en: "Coca-Cola is famous for its distinctive curved 'contour' bottle shape that has been used since 1916.",
          es: "Coca-Cola es famosa por su distintiva forma de botella curva 'contour' que se ha usado desde 1916.",
          de: "Coca-Cola ist berühmt für seine charakteristische geschwungene 'Contour'-Flaschenform, die seit 1916 verwendet wird.",
          nl: "Coca-Cola is beroemd om zijn kenmerkende gebogen 'contour' flesvorm die sinds 1916 wordt gebruikt."
        }
      },
      {
        question: {
          en: "What does 'diet' mean in diet sodas?",
          es: "¿Qué significa 'diet' en los refrescos dietéticos?",
          de: "Was bedeutet 'Diet' in Diät-Limonaden?",
          nl: "Wat betekent 'light' in light frisdranken?"
        },
        options: [
          { en: "Less carbonation", es: "Menos carbonatación", de: "Weniger Kohlensäure", nl: "Minder koolzuur" },
          { en: "No sugar added", es: "Sin azúcar añadido", de: "Kein Zucker hinzugefügt", nl: "Geen toegevoegde suiker" },
          { en: "Smaller bottle size", es: "Tamaño de botella más pequeño", de: "Kleinere Flaschengröße", nl: "Kleinere flesgrootte" },
          { en: "Less flavor", es: "Menos sabor", de: "Weniger Geschmack", nl: "Minder smaak" }
        ],
        correct: 1,
        explanation: {
          en: "Diet sodas have no sugar added and use artificial sweeteners instead to reduce calories.",
          es: "Los refrescos dietéticos no tienen azúcar añadido y usan edulcorantes artificiales en su lugar para reducir calorías.",
          de: "Diät-Limonaden haben keinen Zucker hinzugefügt und verwenden stattdessen künstliche Süßstoffe, um Kalorien zu reduzieren.",
          nl: "Light frisdranken hebben geen toegevoegde suiker en gebruiken kunstmatige zoetstoffen om calorieën te verminderen."
        }
      },
      {
        question: {
          en: "Which ingredient gives Mountain Dew its bright green color?",
          es: "¿Qué ingrediente le da a Mountain Dew su color verde brillante?",
          de: "Welche Zutat verleiht Mountain Dew seine hellgrüne Farbe?",
          nl: "Welk ingrediënt geeft Mountain Dew zijn felgroene kleur?"
        },
        options: [
          { en: "Lime juice", es: "Jugo de lima", de: "Limettensaft", nl: "Limoensap" },
          { en: "Green food coloring", es: "Colorante verde para alimentos", de: "Grüne Lebensmittelfarbe", nl: "Groene voedselkleurstof" },
          { en: "Spinach extract", es: "Extracto de espinaca", de: "Spinat-Extrakt", nl: "Spinazie extract" },
          { en: "Green tea", es: "Té verde", de: "Grüner Tee", nl: "Groene thee" }
        ],
        correct: 1,
        explanation: {
          en: "Mountain Dew gets its characteristic bright green color from artificial green food coloring.",
          es: "Mountain Dew obtiene su característico color verde brillante del colorante verde artificial para alimentos.",
          de: "Mountain Dew erhält seine charakteristische hellgrüne Farbe von künstlicher grüner Lebensmittelfarbe.",
          nl: "Mountain Dew krijgt zijn karakteristieke felgroene kleur van kunstmatige groene voedselkleurstof."
        }
      },
      {
        question: {
          en: "What happens to carbonation when a soda gets warm?",
          es: "¿Qué pasa con la carbonatación cuando un refresco se calienta?",
          de: "Was passiert mit der Kohlensäure, wenn eine Limonade warm wird?",
          nl: "Wat gebeurt er met de koolzuur wanneer frisdrank warm wordt?"
        },
        options: [
          { en: "It stays the same", es: "Se mantiene igual", de: "Es bleibt gleich", nl: "Het blijft hetzelfde" },
          { en: "It increases", es: "Aumenta", de: "Es nimmt zu", nl: "Het neemt toe" },
          { en: "It decreases", es: "Disminuye", de: "Es nimmt ab", nl: "Het neemt af" },
          { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" }
        ],
        correct: 2,
        explanation: {
          en: "Warm sodas lose carbonation faster because gas dissolves less in warm liquids than in cold ones.",
          es: "Los refrescos calientes pierden carbonatación más rápido porque el gas se disuelve menos en líquidos calientes que en fríos.",
          de: "Warme Limonaden verlieren Kohlensäure schneller, weil sich Gas weniger in warmen Flüssigkeiten als in kalten auflöst.",
          nl: "Warme frisdranken verliezen sneller koolzuur omdat gas minder oplost in warme vloeistoffen dan in koude."
        }
      },
      {
        question: {
          en: "Which soft drink was originally created as a medicine?",
          es: "¿Qué refresco fue originalmente creado como medicina?",
          de: "Welches Erfrischungsgetränk wurde ursprünglich als Medizin entwickelt?",
          nl: "Welke frisdrank werd oorspronkelijk als medicijn bedacht?"
        },
        options: [
          { en: "Sprite", es: "Sprite", de: "Sprite", nl: "Sprite" },
          { en: "Fanta", es: "Fanta", de: "Fanta", nl: "Fanta" },
          { en: "Dr Pepper", es: "Dr Pepper", de: "Dr Pepper", nl: "Dr Pepper" },
          { en: "Orange Crush", es: "Orange Crush", de: "Orange Crush", nl: "Orange Crush" }
        ],
        correct: 2,
        explanation: {
          en: "Dr Pepper was originally created in 1885 by pharmacist Charles Alderton as a medicinal drink.",
          es: "Dr Pepper fue originalmente creado en 1885 por el farmacéutico Charles Alderton como una bebida medicinal.",
          de: "Dr Pepper wurde ursprünglich 1885 vom Apotheker Charles Alderton als medizinisches Getränk entwickelt.",
          nl: "Dr Pepper werd oorspronkelijk in 1885 door apotheker Charles Alderton als medicinale drank bedacht."
        }
      },
      {
        question: {
          en: "How many flavors are claimed to be in Dr Pepper?",
          es: "¿Cuántos sabores se dice que tiene Dr Pepper?",
          de: "Wie viele Geschmacksrichtungen soll Dr Pepper haben?",
          nl: "Hoeveel smaken zitten er naar verluidt in Dr Pepper?"
        },
        options: [
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "23", es: "23", de: "23", nl: "23" },
          { en: "31", es: "31", de: "31", nl: "31" }
        ],
        correct: 2,
        explanation: {
          en: "Dr Pepper is famous for claiming to be a blend of 23 different flavors, which is part of their marketing.",
          es: "Dr Pepper es famoso por afirmar ser una mezcla de 23 sabores diferentes, lo cual es parte de su marketing.",
          de: "Dr Pepper ist berühmt dafür, eine Mischung aus 23 verschiedenen Geschmacksrichtungen zu sein, was Teil ihres Marketings ist.",
          nl: "Dr Pepper is beroemd omdat het beweert een mengsel van 23 verschillende smaken te zijn, wat deel uitmaakt van hun marketing."
        }
      },
      {
        question: {
          en: "What does the term 'flat' mean when describing a soda?",
          es: "¿Qué significa el término 'sin gas' al describir un refresco?",
          de: "Was bedeutet der Begriff 'schal', wenn man eine Limonade beschreibt?",
          nl: "Wat betekent de term 'slap' bij het beschrijven van frisdrank?"
        },
        options: [
          { en: "It's very cold", es: "Está muy frío", de: "Es ist sehr kalt", nl: "Het is zeer koud" },
          { en: "It has no bubbles", es: "No tiene burbujas", de: "Es hat keine Blasen", nl: "Het heeft geen bubbels" },
          { en: "It's very sweet", es: "Está muy dulce", de: "Es ist sehr süß", nl: "Het is zeer zoet" },
          { en: "It's colorless", es: "No tiene color", de: "Es ist farblos", nl: "Het is kleurloos" }
        ],
        correct: 1,
        explanation: {
          en: "A 'flat' soda has lost its carbonation and no longer has bubbles or fizz.",
          es: "Un refresco 'sin gas' ha perdido su carbonatación y ya no tiene burbujas o efervescencia.",
          de: "Eine 'schale' Limonade hat ihre Kohlensäure verloren und hat keine Blasen oder Sprudel mehr.",
          nl: "Een 'slappe' frisdrank heeft zijn koolzuur verloren en heeft geen bubbels of bruising meer."
        }
      },
      {
        question: {
          en: "What is the main acid used in most carbonated soft drinks?",
          es: "¿Cuál es el ácido principal usado en la mayoría de los refrescos carbonatados?",
          de: "Was ist die Hauptsäure in den meisten kohlensäurehaltigen Erfrischungsgetränken?",
          nl: "Wat is het belangrijkste zuur dat wordt gebruikt in de meeste koolzuurhoudende frisdranken?"
        },
        options: [
          { en: "Citric acid", es: "Ácido cítrico", de: "Zitronensäure", nl: "Citroenzuur" },
          { en: "Vinegar", es: "Vinagre", de: "Essig", nl: "Azijn" },
          { en: "Lactic acid", es: "Ácido láctico", de: "Milchsäure", nl: "Melkzuur" },
          { en: "Sulfuric acid", es: "Ácido sulfúrico", de: "Schwefelsäure", nl: "Zwavelzuur" }
        ],
        correct: 0,
        explanation: {
          en: "Citric acid is commonly used in soft drinks to provide tartness and enhance flavor. It also acts as a preservative.",
          es: "El ácido cítrico se usa comúnmente en los refrescos para proporcionar acidez y realzar el sabor. También actúa como conservante.",
          de: "Zitronensäure wird häufig in Erfrischungsgetränken verwendet, um Säure zu verleihen und den Geschmack zu verstärken. Sie wirkt auch als Konservierungsmittel.",
          nl: "Citroenzuur wordt vaak gebruikt in frisdranken om zuurheid te geven en de smaak te versterken. Het werkt ook als conserveermiddel."
        }
      },
      {
        question: {
          en: "What artificial sweetener is commonly used in diet sodas?",
          es: "¿Qué edulcorante artificial se usa comúnmente en las sodas dietéticas?",
          de: "Welcher künstliche Süßstoff wird häufig in Diät-Limonaden verwendet?",
          nl: "Welke kunstmatige zoetstof wordt vaak gebruikt in dieetfrisdranken?"
        },
        options: [
          { en: "Aspartame", es: "Aspartamo", de: "Aspartam", nl: "Aspartaam" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Flour", es: "Harina", de: "Mehl", nl: "Meel" },
          { en: "Butter", es: "Mantequilla", de: "Butter", nl: "Boter" }
        ],
        correct: 0,
        explanation: {
          en: "Aspartame is a common artificial sweetener used in diet sodas. Other sweeteners include sucralose and stevia.",
          es: "El aspartamo es un edulcorante artificial común usado en sodas dietéticas. Otros edulcorantes incluyen sucralosa y stevia.",
          de: "Aspartam ist ein häufiger künstlicher Süßstoff in Diät-Limonaden. Andere Süßstoffe sind Sucralose und Stevia.",
          nl: "Aspartaam is een veel voorkomende kunstmatige zoetstof die wordt gebruikt in dieetfrisdranken. Andere zoetstoffen zijn sucralose en stevia."
        }
      },
      {
        question: {
          en: "What is the approximate pH level of most cola drinks?",
          es: "¿Cuál es el nivel aproximado de pH de la mayoría de las bebidas de cola?",
          de: "Was ist der ungefähre pH-Wert der meisten Cola-Getränke?",
          nl: "Wat is het geschatte pH-niveau van de meeste coladranken?"
        },
        options: [
          { en: "Around 2.5 (acidic)", es: "Alrededor de 2.5 (ácido)", de: "Etwa 2.5 (sauer)", nl: "Ongeveer 2.5 (zuur)" },
          { en: "Around 7 (neutral)", es: "Alrededor de 7 (neutro)", de: "Etwa 7 (neutral)", nl: "Ongeveer 7 (neutraal)" },
          { en: "Around 9 (alkaline)", es: "Alrededor de 9 (alcalino)", de: "Etwa 9 (alkalisch)", nl: "Ongeveer 9 (alkalisch)" },
          { en: "Around 12 (very alkaline)", es: "Alrededor de 12 (muy alcalino)", de: "Etwa 12 (sehr alkalisch)", nl: "Ongeveer 12 (zeer alkalisch)" }
        ],
        correct: 0,
        explanation: {
          en: "Most cola drinks have a pH around 2.5, making them quite acidic. This acidity comes from phosphoric acid and carbonic acid.",
          es: "La mayoría de las bebidas de cola tienen un pH alrededor de 2.5, haciéndolas bastante ácidas. Esta acidez proviene del ácido fosfórico y ácido carbónico.",
          de: "Die meisten Cola-Getränke haben einen pH-Wert von etwa 2.5, was sie ziemlich sauer macht. Diese Säure kommt von Phosphorsäure und Kohlensäure.",
          nl: "De meeste coladranken hebben een pH van ongeveer 2.5, waardoor ze vrij zuur zijn. Deze zuurgraad komt van fosforzuur en koolzuur."
        }
      },
      {
        question: {
          en: "What year was Coca-Cola invented?",
          es: "¿En qué año se inventó Coca-Cola?",
          de: "In welchem Jahr wurde Coca-Cola erfunden?",
          nl: "In welk jaar werd Coca-Cola uitgevonden?"
        },
        options: [
          { en: "1776", es: "1776", de: "1776", nl: "1776" },
          { en: "1886", es: "1886", de: "1886", nl: "1886" },
          { en: "1920", es: "1920", de: "1920", nl: "1920" },
          { en: "1955", es: "1955", de: "1955", nl: "1955" }
        ],
        correct: 1,
        explanation: {
          en: "Coca-Cola was invented in 1886 by pharmacist John Pemberton in Atlanta, Georgia.",
          es: "Coca-Cola fue inventada en 1886 por el farmacéutico John Pemberton en Atlanta, Georgia.",
          de: "Coca-Cola wurde 1886 vom Apotheker John Pemberton in Atlanta, Georgia erfunden.",
          nl: "Coca-Cola werd in 1886 uitgevonden door apotheker John Pemberton in Atlanta, Georgia."
        }
      },
      {
        question: {
          en: "What is the purpose of phosphoric acid in cola drinks?",
          es: "¿Cuál es el propósito del ácido fosfórico en las bebidas de cola?",
          de: "Was ist der Zweck von Phosphorsäure in Cola-Getränken?",
          nl: "Wat is het doel van fosforzuur in coladranken?"
        },
        options: [
          { en: "Provides tartness and preserves flavor", es: "Proporciona acidez y preserva el sabor", de: "Verleiht Säure und bewahrt den Geschmack", nl: "Geeft zuurheid en behoudt smaak" },
          { en: "Makes the drink sweet", es: "Hace que la bebida sea dulce", de: "Macht das Getränk süß", nl: "Maakt de drank zoet" },
          { en: "Adds carbonation", es: "Añade carbonatación", de: "Fügt Kohlensäure hinzu", nl: "Voegt koolzuur toe" },
          { en: "Changes the color", es: "Cambia el color", de: "Ändert die Farbe", nl: "Verandert de kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Phosphoric acid provides the tangy, sharp taste in colas and helps preserve the drink. It also adds to the overall acidity.",
          es: "El ácido fosfórico proporciona el sabor ácido y penetrante en las colas y ayuda a preservar la bebida. También añade a la acidez general.",
          de: "Phosphorsäure verleiht Colas den würzigen, scharfen Geschmack und hilft, das Getränk zu konservieren. Sie trägt auch zur Gesamtsäure bei.",
          nl: "Fosforzuur geeft de pittige, scherpe smaak in cola's en helpt de drank te bewaren. Het draagt ook bij aan de algemene zuurgraad."
        }
      },
      {
        question: {
          en: "How is carbonation typically added to soft drinks?",
          es: "¿Cómo se añade típicamente la carbonatación a los refrescos?",
          de: "Wie wird Kohlensäure typischerweise zu Erfrischungsgetränken hinzugefügt?",
          de: "Hoe wordt koolzuur doorgaans toegevoegd aan frisdranken?"
        },
        options: [
          { en: "By shaking the bottle", es: "Agitando la botella", de: "Durch Schütteln der Flasche", nl: "Door de fles te schudden" },
          { en: "By adding carbon dioxide under pressure", es: "Añadiendo dióxido de carbono bajo presión", de: "Durch Hinzufügen von Kohlendioxid unter Druck", nl: "Door kooldioxide onder druk toe te voegen" },
          { en: "By heating the liquid", es: "Calentando el líquido", de: "Durch Erhitzen der Flüssigkeit", nl: "Door de vloeistof te verwarmen" },
          { en: "By freezing it", es: "Congelándola", de: "Durch Einfrieren", nl: "Door het te bevriezen" }
        ],
        correct: 1,
        explanation: {
          en: "Carbonation is added by dissolving carbon dioxide gas into the liquid under high pressure. When the bottle is opened, the pressure is released and bubbles form.",
          es: "La carbonatación se añade disolviendo gas dióxido de carbono en el líquido bajo alta presión. Cuando se abre la botella, se libera la presión y se forman burbujas.",
          de: "Kohlensäure wird durch Auflösen von Kohlendioxidgas in der Flüssigkeit unter hohem Druck hinzugefügt. Wenn die Flasche geöffnet wird, wird der Druck freigesetzt und Blasen bilden sich.",
          nl: "Koolzuur wordt toegevoegd door kooldioxide gas op te lossen in de vloeistof onder hoge druk. Wanneer de fles wordt geopend, wordt de druk vrijgegeven en vormen zich bubbels."
        }
      },
      {
        question: {
          en: "What does HFCS stand for in the context of soft drinks?",
          es: "¿Qué significa HFCS en el contexto de los refrescos?",
          de: "Wofür steht HFCS im Zusammenhang mit Erfrischungsgetränken?",
          nl: "Wat betekent HFCS in de context van frisdranken?"
        },
        options: [
          { en: "High Fructose Corn Syrup", es: "Jarabe de maíz de alta fructosa", de: "Maissirup mit hohem Fruktosegehalt", nl: "Maïsstroop met hoge fructose" },
          { en: "Healthy Food Choice System", es: "Sistema de elección de alimentos saludables", de: "Gesundes Lebensmittelwahlsystem", nl: "Gezond voedsel keuze systeem" },
          { en: "Hybrid Flavoring Chemical Solution", es: "Solución química aromatizante híbrida", de: "Hybrid-Aromatisierungschemikalienlösung", nl: "Hybride smaakchemische oplossing" },
          { en: "High Freeze Cold Storage", es: "Almacenamiento frío de alta congelación", de: "Hochgefrier-Kühllagerung", nl: "Hoge vries koude opslag" }
        ],
        correct: 0,
        explanation: {
          en: "HFCS stands for High Fructose Corn Syrup, a common sweetener used in many soft drinks, especially in the United States.",
          es: "HFCS significa Jarabe de Maíz de Alta Fructosa, un edulcorante común usado en muchos refrescos, especialmente en Estados Unidos.",
          de: "HFCS steht für Maissirup mit hohem Fruktosegehalt, ein gängiger Süßstoff in vielen Erfrischungsgetränken, besonders in den USA.",
          nl: "HFCS staat voor Maïsstroop met Hoge Fructose, een veel voorkomende zoetstof die wordt gebruikt in veel frisdranken, vooral in de Verenigde Staten."
        }
      },
      {
        question: {
          en: "What is the shelf life of an unopened can of soda?",
          es: "¿Cuál es la vida útil de una lata de refresco sin abrir?",
          de: "Was ist die Haltbarkeit einer ungeöffneten Limonadendose?",
          nl: "Wat is de houdbaarheid van een ongeopend blikje frisdrank?"
        },
        options: [
          { en: "1 week", es: "1 semana", de: "1 Woche", nl: "1 week" },
          { en: "1 month", es: "1 mes", de: "1 Monat", nl: "1 maand" },
          { en: "6-9 months", es: "6-9 meses", de: "6-9 Monate", nl: "6-9 maanden" },
          { en: "Several yrs", es: "Varios años", de: "Mehrere Jahre", nl: "Meerdere jaren" }
        ],
        correct: 2,
        explanation: {
          en: "An unopened can of soda typically has a shelf life of 6-9 months for best quality, though it may remain safe to drink longer.",
          es: "Una lata de refresco sin abrir típicamente tiene una vida útil de 6-9 meses para mejor calidad, aunque puede permanecer segura para beber más tiempo.",
          de: "Eine ungeöffnete Limonadendose hat typischerweise eine Haltbarkeit von 6-9 Monaten für beste Qualität, obwohl sie länger sicher zu trinken sein kann.",
          nl: "Een ongeopend blikje frisdrank heeft doorgaans een houdbaarheid van 6-9 maanden voor de beste kwaliteit, hoewel het langer veilig kan zijn om te drinken."
        }
      },
      {
        question: {
          en: "What company produces Pepsi?",
          es: "¿Qué empresa produce Pepsi?",
          de: "Welche Firma produziert Pepsi?",
          nl: "Welk bedrijf produceert Pepsi?"
        },
        options: [
          { en: "The Coca-Cola Company", es: "The Coca-Cola Company", de: "The Coca-Cola Company", nl: "The Coca-Cola Company" },
          { en: "PepsiCo", es: "PepsiCo", de: "PepsiCo", nl: "PepsiCo" },
          { en: "Dr Pepper Snapple Group", es: "Dr Pepper Snapple Group", de: "Dr Pepper Snapple Group", nl: "Dr Pepper Snapple Group" },
          { en: "Nestle", es: "Nestlé", de: "Nestlé", nl: "Nestlé" }
        ],
        correct: 1,
        explanation: {
          en: "PepsiCo is the company that produces Pepsi and many other beverages and snack foods.",
          es: "PepsiCo es la empresa que produce Pepsi y muchas otras bebidas y snacks.",
          de: "PepsiCo ist das Unternehmen, das Pepsi und viele andere Getränke und Snacks produziert.",
          nl: "PepsiCo is het bedrijf dat Pepsi en vele andere dranken en snacks produceert."
        }
      },
      {
        question: {
          en: "What is the difference between club soda and tonic water?",
          es: "¿Cuál es la diferencia entre club soda y agua tónica?",
          de: "Was ist der Unterschied zwischen Club Soda und Tonic Water?",
          nl: "Wat is het verschil tussen club soda en tonic water?"
        },
        options: [
          { en: "Club soda has minerals, tonic has quinine and sugar", es: "Club soda tiene minerales, tónica tiene quinina y azúcar", de: "Club Soda hat Mineralien, Tonic hat Chinin und Zucker", nl: "Club soda heeft mineralen, tonic heeft kinine en suiker" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Tonic is flat, club soda is carbonated", es: "Tónica es plana, club soda es carbonatada", de: "Tonic ist ohne Kohlensäure, Club Soda ist kohlensäurehaltig", nl: "Tonic is slap, club soda is koolzuurhoudend" },
          { en: "Club soda contains alcohol", es: "Club soda contiene alcohol", de: "Club Soda enthält Alkohol", nl: "Club soda bevat alcohol" }
        ],
        correct: 0,
        explanation: {
          en: "Club soda is carbonated water with added minerals for taste. Tonic water contains quinine (giving it a bitter taste) and usually sugar, making it sweeter than club soda.",
          es: "Club soda es agua carbonatada con minerales añadidos para el sabor. El agua tónica contiene quinina (dándole un sabor amargo) y generalmente azúcar, haciéndola más dulce que club soda.",
          de: "Club Soda ist kohlensäurehaltiges Wasser mit zugesetzten Mineralien für den Geschmack. Tonic Water enthält Chinin (was ihm einen bitteren Geschmack verleiht) und normalerweise Zucker, was es süßer als Club Soda macht.",
          nl: "Club soda is koolzuurhoudend water met toegevoegde mineralen voor smaak. Tonic water bevat kinine (wat het een bittere smaak geeft) en meestal suiker, waardoor het zoeter is dan club soda."
        }
      },
      {
        question: {
          en: "What is 'cream soda' flavored with?",
          es: "¿Con qué está aromatizada la 'cream soda'?",
          de: "Womit ist 'Cream Soda' aromatisiert?",
          nl: "Waarmee is 'cream soda' gearomatiseerd?"
        },
        options: [
          { en: "Vanilla", es: "Vainilla", de: "Vanille", nl: "Vanille" },
          { en: "Cream cheese", es: "Queso crema", de: "Frischkäse", nl: "Roomkaas" },
          { en: "Whipped cream", es: "Crema batida", de: "Schlagsahne", nl: "Slagroom" },
          { en: "Butter", es: "Mantequilla", de: "Butter", nl: "Boter" }
        ],
        correct: 0,
        explanation: {
          en: "Cream soda is typically flavored with vanilla, giving it a sweet, creamy taste. Despite the name, it doesn't contain actual cream.",
          es: "La cream soda típicamente está aromatizada con vainilla, dándole un sabor dulce y cremoso. A pesar del nombre, no contiene crema real.",
          de: "Cream Soda ist typischerweise mit Vanille aromatisiert, was ihr einen süßen, cremigen Geschmack verleiht. Trotz des Namens enthält sie keine echte Sahne.",
          nl: "Cream soda is doorgaans gearomatiseerd met vanille, wat het een zoete, romige smaak geeft. Ondanks de naam bevat het geen echte room."
        }    },
    {
      question: {
        en: "What is a soft drink?",
        es: "What is a soft drink?",
        de: "What is a soft drink?",
        nl: "What is a soft drink?"
      },
      options: [
        { en: "Non-alcoholic carbonated beverage", es: "Non-alcoholic carbonated beverage", de: "Non-alcoholic carbonated beverage", nl: "Non-alcoholic carbonated beverage" },
        { en: "Alcoholic drink", es: "Alcoholic drink", de: "Alcoholic drink", nl: "Alcoholic drink" },
        { en: "Juice", es: "Juice", de: "Juice", nl: "Juice" },
        { en: "Milk-based drink", es: "Milk-based drink", de: "Milk-based drink", nl: "Milk-based drink" }
      ],
      correct: 0,
      explanation: {
        en: "A soft drink is a non-alcoholic beverage, typically carbonated and sweetened.",
        es: "A soft drink is a non-alcoholic beverage, typically carbonated and sweetened.",
        de: "A soft drink is a non-alcoholic beverage, typically carbonated and sweetened.",
        nl: "A soft drink is a non-alcoholic beverage, typically carbonated and sweetened."
      }
    },
    {
      question: {
        en: "What company makes Coca-Cola?",
        es: "What company makes Coca-Cola?",
        de: "What company makes Coca-Cola?",
        nl: "What company makes Coca-Cola?"
      },
      options: [
        { en: "The Coca-Cola Company", es: "The Coca-Cola Company", de: "The Coca-Cola Company", nl: "The Coca-Cola Company" },
        { en: "PepsiCo", es: "PepsiCo", de: "PepsiCo", nl: "PepsiCo" },
        { en: "Dr Pepper Snapple", es: "Dr Pepper Snapple", de: "Dr Pepper Snapple", nl: "Dr Pepper Snapple" },
        { en: "Nestle", es: "Nestle", de: "Nestle", nl: "Nestle" }
      ],
      correct: 0,
      explanation: {
        en: "Coca-Cola is produced by The Coca-Cola Company, founded in 1886.",
        es: "Coca-Cola is produced by The Coca-Cola Company, founded in 1886.",
        de: "Coca-Cola is produced by The Coca-Cola Company, founded in 1886.",
        nl: "Coca-Cola is produced by The Coca-Cola Company, founded in 1886."
      }
    },
    {
      question: {
        en: "What flavor is Sprite?",
        es: "What flavor is Sprite?",
        de: "What flavor is Sprite?",
        nl: "What flavor is Sprite?"
      },
      options: [
        { en: "Lemon-lime", es: "Lemon-lime", de: "Lemon-lime", nl: "Lemon-lime" },
        { en: "Orange", es: "Orange", de: "Orange", nl: "Orange" },
        { en: "Cola", es: "Cola", de: "Cola", nl: "Cola" },
        { en: "Grape", es: "Grape", de: "Grape", nl: "Grape" }
      ],
      correct: 0,
      explanation: {
        en: "Sprite is a lemon-lime flavored carbonated soft drink.",
        es: "Sprite is a lemon-lime flavored carbonated soft drink.",
        de: "Sprite is a lemon-lime flavored carbonated soft drink.",
        nl: "Sprite is a lemon-lime flavored carbonated soft drink."
      }
    },
    {
      question: {
        en: "What gives soda its fizz?",
        es: "What gives soda its fizz?",
        de: "What gives soda its fizz?",
        nl: "What gives soda its fizz?"
      },
      options: [
        { en: "Carbon dioxide", es: "Carbon dioxide", de: "Carbon dioxide", nl: "Carbon dioxide" },
        { en: "Oxygen", es: "Oxygen", de: "Oxygen", nl: "Oxygen" },
        { en: "Nitrogen", es: "Nitrogen", de: "Nitrogen", nl: "Nitrogen" },
        { en: "Hydrogen", es: "Hydrogen", de: "Hydrogen", nl: "Hydrogen" }
      ],
      correct: 0,
      explanation: {
        en: "Carbon dioxide dissolved under pressure gives soda its characteristic fizz and bubbles.",
        es: "Carbon dioxide dissolved under pressure gives soda its characteristic fizz and bubbles.",
        de: "Carbon dioxide dissolved under pressure gives soda its characteristic fizz and bubbles.",
        nl: "Carbon dioxide dissolved under pressure gives soda its characteristic fizz and bubbles."
      }
    },
    {
      question: {
        en: "What company makes Pepsi?",
        es: "What company makes Pepsi?",
        de: "What company makes Pepsi?",
        nl: "What company makes Pepsi?"
      },
      options: [
        { en: "PepsiCo", es: "PepsiCo", de: "PepsiCo", nl: "PepsiCo" },
        { en: "Coca-Cola Company", es: "Coca-Cola Company", de: "Coca-Cola Company", nl: "Coca-Cola Company" },
        { en: "Dr Pepper", es: "Dr Pepper", de: "Dr Pepper", nl: "Dr Pepper" },
        { en: "Nestle", es: "Nestle", de: "Nestle", nl: "Nestle" }
      ],
      correct: 0,
      explanation: {
        en: "Pepsi is produced by PepsiCo, a major competitor to Coca-Cola.",
        es: "Pepsi is produced by PepsiCo, a major competitor to Coca-Cola.",
        de: "Pepsi is produced by PepsiCo, a major competitor to Coca-Cola.",
        nl: "Pepsi is produced by PepsiCo, a major competitor to Coca-Cola."
      }
    },
    {
      question: {
        en: "What is root beer?",
        es: "What is root beer?",
        de: "What is root beer?",
        nl: "What is root beer?"
      },
      options: [
        { en: "Sweet soft drink flavored with sassafras", es: "Sweet soft drink flavored with sassafras", de: "Sweet soft drink flavored with sassafras", nl: "Sweet soft drink flavored with sassafras" },
        { en: "Alcoholic beer", es: "Alcoholic beer", de: "Alcoholic beer", nl: "Alcoholic beer" },
        { en: "Cola variant", es: "Cola variant", de: "Cola variant", nl: "Cola variant" },
        { en: "Coffee-based drink", es: "Coffee-based drink", de: "Coffee-based drink", nl: "Coffee-based drink" }
      ],
      correct: 0,
      explanation: {
        en: "Root beer is a sweet North American soft drink traditionally flavored with sassafras root.",
        es: "Root beer is a sweet North American soft drink traditionally flavored with sassafras root.",
        de: "Root beer is a sweet North American soft drink traditionally flavored with sassafras root.",
        nl: "Root beer is a sweet North American soft drink traditionally flavored with sassafras root."
      }
    },
    {
      question: {
        en: "What is ginger ale?",
        es: "What is ginger ale?",
        de: "What is ginger ale?",
        nl: "What is ginger ale?"
      },
      options: [
        { en: "Ginger-flavored carbonated drink", es: "Ginger-flavored carbonated drink", de: "Ginger-flavored carbonated drink", nl: "Ginger-flavored carbonated drink" },
        { en: "Alcoholic ginger beer", es: "Alcoholic ginger beer", de: "Alcoholic ginger beer", nl: "Alcoholic ginger beer" },
        { en: "Beer made with ginger", es: "Beer made with ginger", de: "Beer made with ginger", nl: "Beer made with ginger" },
        { en: "Ale with ginger flavor", es: "Ale with ginger flavor", de: "Ale with ginger flavor", nl: "Ale with ginger flavor" }
      ],
      correct: 0,
      explanation: {
        en: "Ginger ale is a non-alcoholic carbonated soft drink flavored with ginger.",
        es: "Ginger ale is a non-alcoholic carbonated soft drink flavored with ginger.",
        de: "Ginger ale is a non-alcoholic carbonated soft drink flavored with ginger.",
        nl: "Ginger ale is a non-alcoholic carbonated soft drink flavored with ginger."
      }
    },
    {
      question: {
        en: "What soft drink is known for its 23 flavors?",
        es: "What soft drink is known for its 23 flavors?",
        de: "What soft drink is known for its 23 flavors?",
        nl: "What soft drink is known for its 23 flavors?"
      },
      options: [
        { en: "Dr Pepper", es: "Dr Pepper", de: "Dr Pepper", nl: "Dr Pepper" },
        { en: "Coca-Cola", es: "Coca-Cola", de: "Coca-Cola", nl: "Coca-Cola" },
        { en: "Pepsi", es: "Pepsi", de: "Pepsi", nl: "Pepsi" },
        { en: "7-Up", es: "7-Up", de: "7-Up", nl: "7-Up" }
      ],
      correct: 0,
      explanation: {
        en: "Dr Pepper is marketed as having a unique blend of 23 flavors.",
        es: "Dr Pepper is marketed as having a unique blend of 23 flavors.",
        de: "Dr Pepper is marketed as having a unique blend of 23 flavors.",
        nl: "Dr Pepper is marketed as having a unique blend of 23 flavors."
      }
    },
    {
      question: {
        en: "What is Mountain Dew?",
        es: "What is Mountain Dew?",
        de: "What is Mountain Dew?",
        nl: "What is Mountain Dew?"
      },
      options: [
        { en: "Citrus-flavored caffeinated soft drink", es: "Citrus-flavored caffeinated soft drink", de: "Citrus-flavored caffeinated soft drink", nl: "Citrus-flavored caffeinated soft drink" },
        { en: "Energy drink", es: "Energy drink", de: "Energy drink", nl: "Energy drink" },
        { en: "Juice", es: "Juice", de: "Juice", nl: "Juice" },
        { en: "Tea-based drink", es: "Tea-based drink", de: "Tea-based drink", nl: "Tea-based drink" }
      ],
      correct: 0,
      explanation: {
        en: "Mountain Dew is a citrus-flavored carbonated soft drink with caffeine.",
        es: "Mountain Dew is a citrus-flavored carbonated soft drink with caffeine.",
        de: "Mountain Dew is a citrus-flavored carbonated soft drink with caffeine.",
        nl: "Mountain Dew is a citrus-flavored carbonated soft drink with caffeine."
      }
    },
    {
      question: {
        en: "What is tonic water?",
        es: "What is tonic water?",
        de: "What is tonic water?",
        nl: "What is tonic water?"
      },
      options: [
        { en: "Carbonated water with quinine", es: "Carbonated water with quinine", de: "Carbonated water with quinine", nl: "Carbonated water with quinine" },
        { en: "Plain carbonated water", es: "Plain carbonated water", de: "Plain carbonated water", nl: "Plain carbonated water" },
        { en: "Sweet soda", es: "Sweet soda", de: "Sweet soda", nl: "Sweet soda" },
        { en: "Flavored water", es: "Flavored water", de: "Flavored water", nl: "Flavored water" }
      ],
      correct: 0,
      explanation: {
        en: "Tonic water is carbonated water flavored with quinine, originally used to prevent malaria.",
        es: "Tonic water is carbonated water flavored with quinine, originally used to prevent malaria.",
        de: "Tonic water is carbonated water flavored with quinine, originally used to prevent malaria.",
        nl: "Tonic water is carbonated water flavored with quinine, originally used to prevent malaria."
      }
    },
    {
      question: {
        en: "What is club soda?",
        es: "What is club soda?",
        de: "What is club soda?",
        nl: "What is club soda?"
      },
      options: [
        { en: "Carbonated water with minerals", es: "Carbonated water with minerals", de: "Carbonated water with minerals", nl: "Carbonated water with minerals" },
        { en: "Alcoholic soda", es: "Alcoholic soda", de: "Alcoholic soda", nl: "Alcoholic soda" },
        { en: "Sweet soda", es: "Sweet soda", de: "Sweet soda", nl: "Sweet soda" },
        { en: "Fruit-flavored soda", es: "Fruit-flavored soda", de: "Fruit-flavored soda", nl: "Fruit-flavored soda" }
      ],
      correct: 0,
      explanation: {
        en: "Club soda is carbonated water with added minerals like sodium bicarbonate or potassium sulfate.",
        es: "Club soda is carbonated water with added minerals like sodium bicarbonate or potassium sulfate.",
        de: "Club soda is carbonated water with added minerals like sodium bicarbonate or potassium sulfate.",
        nl: "Club soda is carbonated water with added minerals like sodium bicarbonate or potassium sulfate."
      }
    },
    {
      question: {
        en: "What color is original Coca-Cola?",
        es: "What color is original Coca-Cola?",
        de: "What color is original Coca-Cola?",
        nl: "What color is original Coca-Cola?"
      },
      options: [
        { en: "Caramel brown", es: "Caramel brown", de: "Caramel brown", nl: "Caramel brown" },
        { en: "Clear", es: "Clear", de: "Clear", nl: "Clear" },
        { en: "Red", es: "Red", de: "Red", nl: "Red" },
        { en: "Black", es: "Black", de: "Black", nl: "Black" }
      ],
      correct: 0,
      explanation: {
        en: "Coca-Cola has a distinctive caramel brown color from caramel coloring.",
        es: "Coca-Cola has a distinctive caramel brown color from caramel coloring.",
        de: "Coca-Cola has a distinctive caramel brown color from caramel coloring.",
        nl: "Coca-Cola has a distinctive caramel brown color from caramel coloring."
      }
    },
    {
      question: {
        en: "What is Fanta?",
        es: "What is Fanta?",
        de: "What is Fanta?",
        nl: "What is Fanta?"
      },
      options: [
        { en: "Orange-flavored soft drink", es: "Orange-flavored soft drink", de: "Orange-flavored soft drink", nl: "Orange-flavored soft drink" },
        { en: "Cola drink", es: "Cola drink", de: "Cola drink", nl: "Cola drink" },
        { en: "Lemon-lime soda", es: "Lemon-lime soda", de: "Lemon-lime soda", nl: "Lemon-lime soda" },
        { en: "Root beer", es: "Root beer", de: "Root beer", nl: "Root beer" }
      ],
      correct: 0,
      explanation: {
        en: "Fanta is a fruit-flavored carbonated soft drink, most commonly orange-flavored.",
        es: "Fanta is a fruit-flavored carbonated soft drink, most commonly orange-flavored.",
        de: "Fanta is a fruit-flavored carbonated soft drink, most commonly orange-flavored.",
        nl: "Fanta is a fruit-flavored carbonated soft drink, most commonly orange-flavored."
      }
    },
    {
      question: {
        en: "What does 'diet' or 'zero' soda mean?",
        es: "What does 'diet' or 'zero' soda mean?",
        de: "What does 'diet' or 'zero' soda mean?",
        nl: "What does 'diet' or 'zero' soda mean?"
      },
      options: [
        { en: "Sweetened with artificial sweeteners, no sugar", es: "Sweetened with artificial sweeteners, no sugar", de: "Sweetened with artificial sweeteners, no sugar", nl: "Sweetened with artificial sweeteners, no sugar" },
        { en: "Less carbonation", es: "Less carbonation", de: "Less carbonation", nl: "Less carbonation" },
        { en: "No caffeine", es: "No caffeine", de: "No caffeine", nl: "No caffeine" },
        { en: "Organic ingredients", es: "Organic ingredients", de: "Organic ingredients", nl: "Organic ingredients" }
      ],
      correct: 0,
      explanation: {
        en: "Diet or zero sodas use artificial sweeteners instead of sugar, reducing calories.",
        es: "Diet or zero sodas use artificial sweeteners instead of sugar, reducing calories.",
        de: "Diet or zero sodas use artificial sweeteners instead of sugar, reducing calories.",
        nl: "Diet or zero sodas use artificial sweeteners instead of sugar, reducing calories."
      }
    },
    {
      question: {
        en: "What is cream soda?",
        es: "What is cream soda?",
        de: "What is cream soda?",
        nl: "What is cream soda?"
      },
      options: [
        { en: "Vanilla-flavored carbonated drink", es: "Vanilla-flavored carbonated drink", de: "Vanilla-flavored carbonated drink", nl: "Vanilla-flavored carbonated drink" },
        { en: "Soda with cream", es: "Soda with cream", de: "Soda with cream", nl: "Soda with cream" },
        { en: "Chocolate soda", es: "Chocolate soda", de: "Chocolate soda", nl: "Chocolate soda" },
        { en: "Coffee soda", es: "Coffee soda", de: "Coffee soda", nl: "Coffee soda" }
      ],
      correct: 0,
      explanation: {
        en: "Cream soda is a sweet carbonated beverage flavored with vanilla.",
        es: "Cream soda is a sweet carbonated beverage flavored with vanilla.",
        de: "Cream soda is a sweet carbonated beverage flavored with vanilla.",
        nl: "Cream soda is a sweet carbonated beverage flavored with vanilla."
      }
    },
    {
      question: {
        en: "What is energy drink classified as?",
        es: "What is energy drink classified as?",
        de: "What is energy drink classified as?",
        nl: "What is energy drink classified as?"
      },
      options: [
        { en: "Soft drink with added stimulants", es: "Soft drink with added stimulants", de: "Soft drink with added stimulants", nl: "Soft drink with added stimulants" },
        { en: "Sports drink", es: "Sports drink", de: "Sports drink", nl: "Sports drink" },
        { en: "Juice", es: "Juice", de: "Juice", nl: "Juice" },
        { en: "Tea", es: "Tea", de: "Tea", nl: "Tea" }
      ],
      correct: 0,
      explanation: {
        en: "Energy drinks are soft drinks containing caffeine and other stimulants like taurine.",
        es: "Energy drinks are soft drinks containing caffeine and other stimulants like taurine.",
        de: "Energy drinks are soft drinks containing caffeine and other stimulants like taurine.",
        nl: "Energy drinks are soft drinks containing caffeine and other stimulants like taurine."
      }
    },
    {
      question: {
        en: "What is 7-Up?",
        es: "What is 7-Up?",
        de: "What is 7-Up?",
        nl: "What is 7-Up?"
      },
      options: [
        { en: "Lemon-lime flavored soft drink", es: "Lemon-lime flavored soft drink", de: "Lemon-lime flavored soft drink", nl: "Lemon-lime flavored soft drink" },
        { en: "Cola", es: "Cola", de: "Cola", nl: "Cola" },
        { en: "Orange soda", es: "Orange soda", de: "Orange soda", nl: "Orange soda" },
        { en: "Root beer", es: "Root beer", de: "Root beer", nl: "Root beer" }
      ],
      correct: 0,
      explanation: {
        en: "7-Up is a lemon-lime flavored non-caffeinated soft drink.",
        es: "7-Up is a lemon-lime flavored non-caffeinated soft drink.",
        de: "7-Up is a lemon-lime flavored non-caffeinated soft drink.",
        nl: "7-Up is a lemon-lime flavored non-caffeinated soft drink."
      }
    },
    {
      question: {
        en: "What is the sweetener in regular soda?",
        es: "What is the sweetener in regular soda?",
        de: "What is the sweetener in regular soda?",
        nl: "What is the sweetener in regular soda?"
      },
      options: [
        { en: "Sugar or high-fructose corn syrup", es: "Sugar or high-fructose corn syrup", de: "Sugar or high-fructose corn syrup", nl: "Sugar or high-fructose corn syrup" },
        { en: "Honey", es: "Honey", de: "Honey", nl: "Honey" },
        { en: "Artificial sweetener", es: "Artificial sweetener", de: "Artificial sweetener", nl: "Artificial sweetener" },
        { en: "Fruit juice", es: "Fruit juice", de: "Fruit juice", nl: "Fruit juice" }
      ],
      correct: 0,
      explanation: {
        en: "Regular sodas are typically sweetened with sugar or high-fructose corn syrup.",
        es: "Regular sodas are typically sweetened with sugar or high-fructose corn syrup.",
        de: "Regular sodas are typically sweetened with sugar or high-fructose corn syrup.",
        nl: "Regular sodas are typically sweetened with sugar or high-fructose corn syrup."
      }
    },
    {
      question: {
        en: "What is seltzer water?",
        es: "What is seltzer water?",
        de: "What is seltzer water?",
        nl: "What is seltzer water?"
      },
      options: [
        { en: "Plain carbonated water", es: "Plain carbonated water", de: "Plain carbonated water", nl: "Plain carbonated water" },
        { en: "Flavored soda", es: "Flavored soda", de: "Flavored soda", nl: "Flavored soda" },
        { en: "Mineral water", es: "Mineral water", de: "Mineral water", nl: "Mineral water" },
        { en: "Tonic water", es: "Tonic water", de: "Tonic water", nl: "Tonic water" }
      ],
      correct: 0,
      explanation: {
        en: "Seltzer water is simply water that has been carbonated, with no added minerals or flavoring.",
        es: "Seltzer water is simply water that has been carbonated, with no added minerals or flavoring.",
        de: "Seltzer water is simply water that has been carbonated, with no added minerals or flavoring.",
        nl: "Seltzer water is simply water that has been carbonated, with no added minerals or flavoring."
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
