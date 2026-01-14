// Juices Quiz - Level 1
(function() {
  const level1 = {
    name: {
          "en": "Basic Juice Knowledge",
          "es": "Conocimientos Básicos de Jugos",
          "de": "Grundwissen über Säfte",
          "nl": "Basis Kennis van Sappen"
    },
    questions: [
      {
        question: {
                  "en": "What color is orange juice?",
                  "es": "¿De qué color es el jugo de naranja?",
                  "de": "Welche Farbe hat Orangensaft?",
                  "nl": "Welke kleur heeft sinaasappelsap?"
        },
        options: [
        {
                  "en": "Green",
                  "es": "Verde",
                  "de": "Grün",
                  "nl": "Groen"
        },
        {
                  "en": "Blue",
                  "es": "Azul",
                  "de": "Blau",
                  "nl": "Blauw"
        },
        {
                  "en": "Orange",
                  "es": "Naranja",
                  "de": "Orange",
                  "nl": "Oranje"
        },
        {
                  "en": "Red",
                  "es": "Rojo",
                  "de": "Rot",
                  "nl": "Rood"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Orange juice is orange in color, just like the fruit it comes from.",
                  "es": "El jugo de naranja es de color naranja, igual que la fruta de la que proviene.",
                  "de": "Orangensaft ist orange, genau wie die Frucht, aus der er stammt.",
                  "nl": "Sinaasappelsap is oranje van kleur, net als de vrucht waar het van komt."
        }
      },
      {
        question: {
                  "en": "Which fruit makes apple juice?",
                  "es": "¿Qué fruta hace el jugo de manzana?",
                  "de": "Welche Frucht macht Apfelsaft?",
                  "nl": "Welke vrucht maakt appelsap?"
        },
        options: [
        {
                  "en": "Apple",
                  "es": "Manzana",
                  "de": "Apfel",
                  "nl": "Appel"
        },
        {
                  "en": "Orange",
                  "es": "Naranja",
                  "de": "Orange",
                  "nl": "Sinaasappel"
        },
        {
                  "en": "Grape",
                  "es": "Uva",
                  "de": "Traube",
                  "nl": "Druif"
        },
        {
                  "en": "Banana",
                  "es": "Plátano",
                  "de": "Banane",
                  "nl": "Banaan"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Apple juice is made from apples by squeezing out their liquid.",
                  "es": "El jugo de manzana se hace de las manzanas exprimiendo su líquido.",
                  "de": "Apfelsaft wird aus Äpfeln hergestellt, indem ihre Flüssigkeit ausgepresst wird.",
                  "nl": "Appelsap wordt gemaakt van appels door hun sap eruit te persen."
        }
      },
      {
        question: {
                  "en": "What makes juice healthy?",
                  "es": "¿Qué hace que el jugo sea saludable?",
                  "de": "Was macht Saft gesund?",
                  "nl": "Wat maakt sap gezond?"
        },
        options: [
        {
                  "en": "Vitamins",
                  "es": "Vitaminas",
                  "de": "Vitamine",
                  "nl": "Vitamines"
        },
        {
                  "en": "Oil",
                  "es": "Aceite",
                  "de": "Öl",
                  "nl": "Olie"
        },
        {
                  "en": "Pepper",
                  "es": "Pimienta",
                  "de": "Pfeffer",
                  "nl": "Peper"
        },
        {
                  "en": "Salt",
                  "es": "Sal",
                  "de": "Salz",
                  "nl": "Zout"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Juice is healthy because it contains vitamins from fruits that are good for our body.",
                  "es": "El jugo es saludable porque contiene vitaminas de las frutas que son buenas para nuestro cuerpo.",
                  "de": "Saft ist gesund, weil er Vitamine aus Früchten enthält, die gut für unseren Körper sind.",
                  "nl": "Sap is gezond omdat het vitamines van vruchten bevat die goed zijn voor ons lichaam."
        }
      },
      {
        question: {
                  "en": "Which juice is red?",
                  "es": "¿Qué jugo es rojo?",
                  "de": "Welcher Saft ist rot?",
                  "nl": "Welk sap is rood?"
        },
        options: [
        {
                  "en": "Apple juice",
                  "es": "Jugo de manzana",
                  "de": "Apfelsaft",
                  "nl": "Appelsap"
        },
        {
                  "en": "Lemon juice",
                  "es": "Jugo de limón",
                  "de": "Zitronensaft",
                  "nl": "Citroensap"
        },
        {
                  "en": "Tomato juice",
                  "es": "Jugo de tomate",
                  "de": "Tomatensaft",
                  "nl": "Tomatensap"
        },
        {
                  "en": "Orange juice",
                  "es": "Jugo de naranja",
                  "de": "Orangensaft",
                  "nl": "Sinaasappelsap"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Tomato juice is red because tomatoes are red fruits (though botanically they're vegetables).",
                  "es": "El jugo de tomate es rojo porque los tomates son frutas rojas (aunque botánicamente son vegetales).",
                  "de": "Tomatensaft ist rot, weil Tomaten rote Früchte sind (obwohl sie botanisch Gemüse sind).",
                  "nl": "Tomatensap is rood omdat tomaten rode vruchten zijn (hoewel ze botanisch groenten zijn)."
        }
      },
      {
        question: {
                  "en": "Where do we get juice from?",
                  "es": "¿De dónde obtenemos el jugo?",
                  "de": "Woher bekommen wir Saft?",
                  "nl": "Waar krijgen we sap vandaan?"
        },
        options: [
        {
                  "en": "Milk",
                  "es": "Leche",
                  "de": "Milch",
                  "nl": "Melk"
        },
        {
                  "en": "Rocks",
                  "es": "Rocas",
                  "de": "Steine",
                  "nl": "Stenen"
        },
        {
                  "en": "Water",
                  "es": "Agua",
                  "de": "Wasser",
                  "nl": "Water"
        },
        {
                  "en": "Fruits and vegetables",
                  "es": "Frutas y verduras",
                  "de": "Obst und Gemüse",
                  "nl": "Fruit en groenten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "We get juice by squeezing or pressing fruits and vegetables to extract their liquid.",
                  "es": "Obtenemos jugo exprimiendo o prensando frutas y verduras para extraer su líquido.",
                  "de": "Wir erhalten Saft, indem wir Obst und Gemüse auspressen, um ihre Flüssigkeit zu extrahieren.",
                  "nl": "We krijgen sap door fruit en groenten uit te persen om hun vloeistof eruit te halen."
        }
      },
      {
        question: {
                  "en": "What color is grape juice?",
                  "es": "¿De qué color es el jugo de uva?",
                  "de": "Welche Farbe hat Traubensaft?",
                  "nl": "Welke kleur heeft druivensap?"
        },
        options: [
        {
                  "en": "Pink",
                  "es": "Rosa",
                  "de": "Rosa",
                  "nl": "Roze"
        },
        {
                  "en": "Purple",
                  "es": "Morado",
                  "de": "Lila",
                  "nl": "Paars"
        },
        {
                  "en": "Brown",
                  "es": "Marrón",
                  "de": "Braun",
                  "nl": "Bruin"
        },
        {
                  "en": "Yellow",
                  "es": "Amarillo",
                  "de": "Gelb",
                  "nl": "Geel"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Grape juice is usually purple because it's made from dark purple grapes.",
                  "es": "El jugo de uva suele ser morado porque se hace de uvas moradas oscuras.",
                  "de": "Traubensaft ist normalerweise lila, weil er aus dunkelvioletten Trauben hergestellt wird.",
                  "nl": "Druivensap is meestal paars omdat het gemaakt wordt van donkerpaarse druiven."
        }
      },
      {
        question: {
                  "en": "When should you drink juice?",
                  "es": "¿Cuándo debes beber jugo?",
                  "de": "Wann solltest du Saft trinken?",
                  "nl": "Wanneer moet je sap drinken?"
        },
        options: [
        {
                  "en": "Never",
                  "es": "Nunca",
                  "de": "Niemals",
                  "nl": "Nooit"
        },
        {
                  "en": "Only in winter",
                  "es": "Solo en invierno",
                  "de": "Nur im Winter",
                  "nl": "Alleen in de winter"
        },
        {
                  "en": "Only at night",
                  "es": "Solo por la noche",
                  "de": "Nur nachts",
                  "nl": "Alleen 's nachts"
        },
        {
                  "en": "Any time of day",
                  "es": "Cualquier momento del día",
                  "de": "Jederzeit",
                  "nl": "Op elk moment van de dag"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "You can drink juice any time of day as part of a healthy diet, but remember to drink it in moderation.",
                  "es": "Puedes beber jugo en cualquier momento del día como parte de una dieta saludable, pero recuerda beberlo con moderación.",
                  "de": "Du kannst Saft zu jeder Tageszeit als Teil einer gesunden Ernährung trinken, aber denk daran, ihn in Maßen zu trinken.",
                  "nl": "Je kunt sap op elk moment van de dag drinken als onderdeel van een gezonde voeding, maar vergeet niet het met mate te drinken."
        }
      },
      {
        question: {
                  "en": "What makes lemon juice sour?",
                  "es": "¿Qué hace que el jugo de limón sea agrio?",
                  "de": "Was macht Zitronensaft sauer?",
                  "nl": "Wat maakt citroensap zuur?"
        },
        options: [
        {
                  "en": "Sugar",
                  "es": "Azúcar",
                  "de": "Zucker",
                  "nl": "Suiker"
        },
        {
                  "en": "Acid",
                  "es": "Ácido",
                  "de": "Säure",
                  "nl": "Zuur"
        },
        {
                  "en": "Salt",
                  "es": "Sal",
                  "de": "Salz",
                  "nl": "Zout"
        },
        {
                  "en": "Water",
                  "es": "Agua",
                  "de": "Wasser",
                  "nl": "Water"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Lemon juice is sour because lemons contain natural acids that give them their tart taste.",
                  "es": "El jugo de limón es agrio porque los limones contienen ácidos naturales que les dan su sabor ácido.",
                  "de": "Zitronensaft ist sauer, weil Zitronen natürliche Säuren enthalten, die ihnen ihren sauren Geschmack verleihen.",
                  "nl": "Citroensap is zuur omdat citroenen natuurlijke zuren bevatten die hen hun zure smaak geven."
        }
      },
      {
        question: {
                  "en": "Which juice is sweet?",
                  "es": "¿Qué jugo es dulce?",
                  "de": "Welcher Saft ist süß?",
                  "nl": "Welk sap is zoet?"
        },
        options: [
        {
                  "en": "Orange juice",
                  "es": "Jugo de naranja",
                  "de": "Orangensaft",
                  "nl": "Sinaasappelsap"
        },
        {
                  "en": "Grapefruit juice",
                  "es": "Jugo de toronja",
                  "de": "Grapefruitsaft",
                  "nl": "Grapefruitsap"
        },
        {
                  "en": "Lemon juice",
                  "es": "Jugo de limón",
                  "de": "Zitronensaft",
                  "nl": "Citroensap"
        },
        {
                  "en": "Lime juice",
                  "es": "Jugo de lima",
                  "de": "Limettensaft",
                  "nl": "Limoensap"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Orange juice is naturally sweet because oranges contain natural sugars.",
                  "es": "El jugo de naranja es naturalmente dulce porque las naranjas contienen azúcares naturales.",
                  "de": "Orangensaft ist natürlich süß, weil Orangen natürliche Zucker enthalten.",
                  "nl": "Sinaasappelsap is van nature zoet omdat sinaasappels natuurlijke suikers bevatten."
        }
      },
      {
        question: {
                  "en": "What do you use to squeeze juice from an orange?",
                  "es": "¿Qué usas para exprimir jugo de una naranja?",
                  "de": "Was verwendest du, um Saft aus einer Orange zu pressen?",
                  "nl": "Wat gebruik je om sap uit een sinaasappel te persen?"
        },
        options: [
        {
                  "en": "Hammer",
                  "es": "Martillo",
                  "de": "Hammer",
                  "nl": "Hamer"
        },
        {
                  "en": "Fork",
                  "es": "Tenedor",
                  "de": "Gabel",
                  "nl": "Vork"
        },
        {
                  "en": "Spoon",
                  "es": "Cuchara",
                  "de": "Löffel",
                  "nl": "Lepel"
        },
        {
                  "en": "Juicer",
                  "es": "Exprimidor",
                  "de": "Entsafter",
                  "nl": "Sapcentrifuge"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A juicer is a special tool designed to squeeze juice from fruits like oranges.",
                  "es": "Un exprimidor es una herramienta especial diseñada para exprimir jugo de frutas como las naranjas.",
                  "de": "Ein Entsafter ist ein spezielles Werkzeug, das dazu entwickelt wurde, Saft aus Früchten wie Orangen zu pressen.",
                  "nl": "Een sapcentrifuge is een speciaal gereedschap ontworpen om sap uit vruchten zoals sinaasappels te persen."
        }
      },
      {
        question: {
                  "en": "What fruit makes pineapple juice?",
                  "es": "¿Qué fruta hace el jugo de piña?",
                  "de": "Welche Frucht macht Ananassaft?",
                  "nl": "Welke vrucht maakt ananassap?"
        },
        options: [
        {
                  "en": "Papaya",
                  "es": "Papaya",
                  "de": "Papaya",
                  "nl": "Papaya"
        },
        {
                  "en": "Mango",
                  "es": "Mango",
                  "de": "Mango",
                  "nl": "Mango"
        },
        {
                  "en": "Orange",
                  "es": "Naranja",
                  "de": "Orange",
                  "nl": "Sinaasappel"
        },
        {
                  "en": "Pineapple",
                  "es": "Piña",
                  "de": "Ananas",
                  "nl": "Ananas"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pineapple juice is made from pineapples, a tropical fruit with sweet and tangy flavor.",
                  "es": "El jugo de piña se hace de piñas, una fruta tropical con sabor dulce y ácido.",
                  "de": "Ananassaft wird aus Ananas hergestellt, einer tropischen Frucht mit süß-säuerlichem Geschmack.",
                  "nl": "Ananassap wordt gemaakt van ananas, een tropische vrucht met zoete en pittige smaak."
        }
      },
      {
        question: {
                  "en": "Is carrot juice made from a fruit or vegetable?",
                  "es": "¿El jugo de zanahoria se hace de una fruta o un vegetal?",
                  "de": "Wird Karottensaft aus einer Frucht oder einem Gemüse hergestellt?",
                  "nl": "Wordt wortelsap gemaakt van een vrucht of groente?"
        },
        options: [
        {
                  "en": "Vegetable",
                  "es": "Vegetal",
                  "de": "Gemüse",
                  "nl": "Groente"
        },
        {
                  "en": "Grain",
                  "es": "Grano",
                  "de": "Getreide",
                  "nl": "Graan"
        },
        {
                  "en": "Fruit",
                  "es": "Fruta",
                  "de": "Frucht",
                  "nl": "Vrucht"
        },
        {
                  "en": "Nut",
                  "es": "Nuez",
                  "de": "Nuss",
                  "nl": "Noot"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Carrots are vegetables that grow underground. Carrot juice is a healthy vegetable juice.",
                  "es": "Las zanahorias son vegetales que crecen bajo tierra. El jugo de zanahoria es un jugo de vegetales saludable.",
                  "de": "Karotten sind Gemüse, das unter der Erde wächst. Karottensaft ist ein gesunder Gemüsesaft.",
                  "nl": "Wortels zijn groenten die ondergronds groeien. Wortelsap is een gezond groentensap."
        }
      },
      {
        question: {
                  "en": "What should you do with juice after opening?",
                  "es": "¿Qué debes hacer con el jugo después de abrirlo?",
                  "de": "Was solltest du mit Saft nach dem Öffnen machen?",
                  "nl": "Wat moet je met sap doen na het openen?"
        },
        options: [
        {
                  "en": "Put it in the refrigerator",
                  "es": "Ponerlo en el refrigerador",
                  "de": "In den Kühlschrank stellen",
                  "nl": "In de koelkast zetten"
        },
        {
                  "en": "Freeze it immediately",
                  "es": "Congelarlo inmediatamente",
                  "de": "Sofort einfrieren",
                  "nl": "Onmiddellijk bevriezen"
        },
        {
                  "en": "Keep it on the counter",
                  "es": "Mantenerlo en el mostrador",
                  "de": "Auf der Theke aufbewahren",
                  "nl": "Op het aanrecht houden"
        },
        {
                  "en": "Leave it in the sun",
                  "es": "Dejarlo al sol",
                  "de": "In der Sonne stehen lassen",
                  "nl": "In de zon laten staan"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "After opening, juice should be stored in the refrigerator to keep it fresh and prevent spoilage.",
                  "es": "Después de abrir, el jugo debe almacenarse en el refrigerador para mantenerlo fresco y prevenir deterioro.",
                  "de": "Nach dem Öffnen sollte Saft im Kühlschrank aufbewahrt werden, um ihn frisch zu halten und Verderb zu verhindern.",
                  "nl": "Na het openen moet sap in de koelkast worden bewaard om het vers te houden en bederf te voorkomen."
        }
      },
      {
        question: {
                  "en": "Which juice comes from red berries?",
                  "es": "¿Qué jugo proviene de bayas rojas?",
                  "de": "Welcher Saft kommt von roten Beeren?",
                  "nl": "Welk sap komt van rode bessen?"
        },
        options: [
        {
                  "en": "Coconut juice",
                  "es": "Jugo de coco",
                  "de": "Kokosnusssaft",
                  "nl": "Kokossap"
        },
        {
                  "en": "Cucumber juice",
                  "es": "Jugo de pepino",
                  "de": "Gurkensaft",
                  "nl": "Komkommersap"
        },
        {
                  "en": "Strawberry juice",
                  "es": "Jugo de fresa",
                  "de": "Erdbeersaft",
                  "nl": "Aardbeiensap"
        },
        {
                  "en": "Lemon juice",
                  "es": "Jugo de limón",
                  "de": "Zitronensaft",
                  "nl": "Citroensap"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Strawberry juice is made from strawberries, which are red berries that are sweet and delicious.",
                  "es": "El jugo de fresa se hace de fresas, que son bayas rojas dulces y deliciosas.",
                  "de": "Erdbeersaft wird aus Erdbeeren hergestellt, die rote Beeren sind und süß und köstlich schmecken.",
                  "nl": "Aardbeiensap wordt gemaakt van aardbeien, die rode bessen zijn die zoet en heerlijk zijn."
        }
      },
      {
        question: {
                  "en": "What makes juice different from soda?",
                  "es": "¿Qué hace que el jugo sea diferente del refresco?",
                  "de": "Was macht Saft anders als Limonade?",
                  "nl": "Wat maakt sap anders dan frisdrank?"
        },
        options: [
        {
                  "en": "Juice has more bubbles",
                  "es": "El jugo tiene más burbujas",
                  "de": "Saft hat mehr Blasen",
                  "nl": "Sap heeft meer bubbels"
        },
        {
                  "en": "Juice comes from real fruits or vegetables",
                  "es": "El jugo proviene de frutas o vegetales reales",
                  "de": "Saft kommt von echten Früchten oder Gemüse",
                  "nl": "Sap komt van echte vruchten of groenten"
        },
        {
                  "en": "They are the same thing",
                  "es": "Son lo mismo",
                  "de": "Sie sind dasselbe",
                  "nl": "Ze zijn hetzelfde"
        },
        {
                  "en": "Juice is always cold",
                  "es": "El jugo siempre está frío",
                  "de": "Saft ist immer kalt",
                  "nl": "Sap is altijd koud"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Juice is made from real fruits or vegetables, while soda is usually artificially flavored and has added bubbles.",
                  "es": "El jugo se hace de frutas o vegetales reales, mientras que el refresco generalmente tiene sabor artificial y burbujas añadidas.",
                  "de": "Saft wird aus echten Früchten oder Gemüse hergestellt, während Limonade normalerweise künstlich aromatisiert ist und zugesetzte Blasen hat.",
                  "nl": "Sap wordt gemaakt van echte vruchten of groenten, terwijl frisdrank meestal kunstmatig gearomatiseerd is en toegevoegde bubbels heeft."
        }
      },
      {
        question: {
                  "en": "What color is cranberry juice?",
                  "es": "¿De qué color es el jugo de arándano?",
                  "de": "Welche Farbe hat Cranberrysaft?",
                  "nl": "Welke kleur heeft veenbessensap?"
        },
        options: [
        {
                  "en": "White",
                  "es": "Blanco",
                  "de": "Weiß",
                  "nl": "Wit"
        },
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
                  "en": "Dark red",
                  "es": "Rojo oscuro",
                  "de": "Dunkelrot",
                  "nl": "Donkerrood"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Cranberry juice is dark red because cranberries are deep red berries.",
                  "es": "El jugo de arándano es rojo oscuro porque los arándanos son bayas de color rojo profundo.",
                  "de": "Cranberrysaft ist dunkelrot, weil Cranberries tiefrote Beeren sind.",
                  "nl": "Veenbessensap is donkerrood omdat veenbessen dieprode bessen zijn."
        }
      },
      {
        question: {
                  "en": "Can you make juice from bananas?",
                  "es": "¿Puedes hacer jugo de plátanos?",
                  "de": "Kann man Saft aus Bananen machen?",
                  "nl": "Kun je sap maken van bananen?"
        },
        options: [
        {
                  "en": "Yes, but it's usually called a smoothie",
                  "es": "Sí, pero generalmente se llama batido",
                  "de": "Ja, aber es wird normalerweise Smoothie genannt",
                  "nl": "Ja, maar het wordt meestal een smoothie genoemd"
        },
        {
                  "en": "No, never",
                  "es": "No, nunca",
                  "de": "Nein, niemals",
                  "nl": "Nee, nooit"
        },
        {
                  "en": "Only green bananas",
                  "es": "Solo plátanos verdes",
                  "de": "Nur grüne Bananen",
                  "nl": "Alleen groene bananen"
        },
        {
                  "en": "Only if you freeze them first",
                  "es": "Solo si los congelas primero",
                  "de": "Nur wenn man sie zuerst einfriert",
                  "nl": "Alleen als je ze eerst bevriest"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Bananas can be blended into drinks, but because they're thick, the result is usually called a smoothie rather than juice.",
                  "es": "Los plátanos se pueden mezclar en bebidas, pero como son espesos, el resultado generalmente se llama batido en lugar de jugo.",
                  "de": "Bananen können zu Getränken gemixt werden, aber weil sie dick sind, wird das Ergebnis normalerweise Smoothie statt Saft genannt.",
                  "nl": "Bananen kunnen worden gemixt tot drankjes, maar omdat ze dik zijn, wordt het resultaat meestal een smoothie genoemd in plaats van sap."
        }
      },
      {
        question: {
                  "en": "Why is orange juice good for breakfast?",
                  "es": "¿Por qué es bueno el jugo de naranja para el desayuno?",
                  "de": "Warum ist Orangensaft gut zum Frühstück?",
                  "nl": "Waarom is sinaasappelsap goed voor het ontbijt?"
        },
        options: [
        {
                  "en": "It gives you vitamins and energy to start the day",
                  "es": "Te da vitaminas y energía para comenzar el día",
                  "de": "Es gibt dir Vitamine und Energie für den Tag",
                  "nl": "Het geeft je vitamines en energie om de dag te beginnen"
        },
        {
                  "en": "It replaces water",
                  "es": "Reemplaza el agua",
                  "de": "Es ersetzt Wasser",
                  "nl": "Het vervangt water"
        },
        {
                  "en": "It makes you sleepy",
                  "es": "Te hace tener sueño",
                  "de": "Es macht dich schläfrig",
                  "nl": "Het maakt je slaperig"
        },
        {
                  "en": "It's only good at night",
                  "es": "Solo es bueno por la noche",
                  "de": "Es ist nur nachts gut",
                  "nl": "Het is alleen 's avonds goed"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Orange juice is a great breakfast drink because it provides vitamins, especially vitamin C, and natural sugars that give you energy to start your day.",
                  "es": "El jugo de naranja es una gran bebida para el desayuno porque proporciona vitaminas, especialmente vitamina C, y azúcares naturales que te dan energía para comenzar el día.",
                  "de": "Orangensaft ist ein großartiges Frühstücksgetränk, weil er Vitamine, besonders Vitamin C, und natürliche Zucker liefert, die dir Energie für den Tag geben.",
                  "nl": "Sinaasappelsap is een geweldige ontbijtdrank omdat het vitamines, vooral vitamine C, en natuurlijke suikers biedt die je energie geven om de dag te beginnen."
        }
      },
      {
        question: {
                  "en": "What tool helps you make juice at home?",
                  "es": "¿Qué herramienta te ayuda a hacer jugo en casa?",
                  "de": "Welches Werkzeug hilft dir, zu Hause Saft zu machen?",
                  "nl": "Welk gereedschap helpt je thuis sap te maken?"
        },
        options: [
        {
                  "en": "A blender or juicer",
                  "es": "Una licuadora o exprimidor",
                  "de": "Ein Mixer oder Entsafter",
                  "nl": "Een blender of sapcentrifuge"
        },
        {
                  "en": "A pencil",
                  "es": "Un lápiz",
                  "de": "Ein Bleistift",
                  "nl": "Een potlood"
        },
        {
                  "en": "A broom",
                  "es": "Una escoba",
                  "de": "Ein Besen",
                  "nl": "Een bezem"
        },
        {
                  "en": "A pillow",
                  "es": "Una almohada",
                  "de": "Ein Kissen",
                  "nl": "Een kussen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A blender or juicer is a machine that helps you extract juice from fruits and vegetables at home.",
                  "es": "Una licuadora o exprimidor es una máquina que te ayuda a extraer jugo de frutas y vegetales en casa.",
                  "de": "Ein Mixer oder Entsafter ist eine Maschine, die dir hilft, zu Hause Saft aus Früchten und Gemüse zu extrahieren.",
                  "nl": "Een blender of sapcentrifuge is een machine die je helpt thuis sap uit vruchten en groenten te halen."
        }
      },
      {
        question: {
                  "en": "Which juice is yellow and sour?",
                  "es": "¿Qué jugo es amarillo y agrio?",
                  "de": "Welcher Saft ist gelb und sauer?",
                  "nl": "Welk sap is geel en zuur?"
        },
        options: [
        {
                  "en": "Chocolate",
                  "es": "Chocolate",
                  "de": "Schokolade",
                  "nl": "Chocolade"
        },
        {
                  "en": "Lemon juice",
                  "es": "Jugo de limón",
                  "de": "Zitronensaft",
                  "nl": "Citroensap"
        },
        {
                  "en": "Coffee",
                  "es": "Café",
                  "de": "Kaffee",
                  "nl": "Koffie"
        },
        {
                  "en": "Milk",
                  "es": "Leche",
                  "de": "Milch",
                  "nl": "Melk"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Lemon juice is yellow and has a sour taste because lemons contain natural acids.",
                  "es": "El jugo de limón es amarillo y tiene un sabor agrio porque los limones contienen ácidos naturales.",
                  "de": "Zitronensaft ist gelb und hat einen sauren Geschmack, weil Zitronen natürliche Säuren enthalten.",
                  "nl": "Citroensap is geel en heeft een zure smaak omdat citroenen natuurlijke zuren bevatten."
        }
      },
      {
        question: {
                  "en": "What fruit makes watermelon juice?",
                  "es": "¿Qué fruta hace el jugo de sandía?",
                  "de": "Welche Frucht macht Wassermelonensaft?",
                  "nl": "Welke vrucht maakt watermeloensap?"
        },
        options: [
        {
                  "en": "Watermelon",
                  "es": "Sandía",
                  "de": "Wassermelone",
                  "nl": "Watermeloen"
        },
        {
                  "en": "Plum",
                  "es": "Ciruela",
                  "de": "Pflaume",
                  "nl": "Pruim"
        },
        {
                  "en": "Apple",
                  "es": "Manzana",
                  "de": "Apfel",
                  "nl": "Appel"
        },
        {
                  "en": "Peach",
                  "es": "Durazno",
                  "de": "Pfirsich",
                  "nl": "Perzik"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Watermelon juice is made from watermelons, a large juicy fruit that is mostly red inside.",
                  "es": "El jugo de sandía se hace de sandías, una fruta grande y jugosa que es principalmente roja por dentro.",
                  "de": "Wassermelonensaft wird aus Wassermelonen hergestellt, einer großen saftigen Frucht, die innen hauptsächlich rot ist.",
                  "nl": "Watermeloensap wordt gemaakt van watermeloenen, een grote sappige vrucht die voornamelijk rood van binnen is."
        }
      },
      {
        question: {
                  "en": "What color is lime juice?",
                  "es": "¿De qué color es el jugo de lima?",
                  "de": "Welche Farbe hat Limettensaft?",
                  "nl": "Welke kleur heeft limoensap?"
        },
        options: [
        {
                  "en": "Black",
                  "es": "Negro",
                  "de": "Schwarz",
                  "nl": "Zwart"
        },
        {
                  "en": "Light green",
                  "es": "Verde claro",
                  "de": "Hellgrün",
                  "nl": "Lichtgroen"
        },
        {
                  "en": "Red",
                  "es": "Rojo",
                  "de": "Rot",
                  "nl": "Rood"
        },
        {
                  "en": "White",
                  "es": "Blanco",
                  "de": "Weiß",
                  "nl": "Wit"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Lime juice is light green because limes are green citrus fruits.",
                  "es": "El jugo de lima es verde claro porque las limas son frutas cítricas verdes.",
                  "de": "Limettensaft ist hellgrün, weil Limetten grüne Zitrusfrüchte sind.",
                  "nl": "Limoensap is lichtgroen omdat limoenen groene citrusvruchten zijn."
        }
      },
      {
        question: {
                  "en": "Which juice can you make from berries?",
                  "es": "¿Qué jugo puedes hacer de bayas?",
                  "de": "Welchen Saft kann man aus Beeren machen?",
                  "nl": "Welk sap kun je van bessen maken?"
        },
        options: [
        {
                  "en": "Lettuce juice",
                  "es": "Jugo de lechuga",
                  "de": "Salatsaft",
                  "nl": "Slasap"
        },
        {
                  "en": "Onion juice",
                  "es": "Jugo de cebolla",
                  "de": "Zwiebelsaft",
                  "nl": "Uiensap"
        },
        {
                  "en": "Blueberry juice",
                  "es": "Jugo de arándano azul",
                  "de": "Blaubeersaft",
                  "nl": "Bosbessensap"
        },
        {
                  "en": "Potato juice",
                  "es": "Jugo de papa",
                  "de": "Kartoffelsaft",
                  "nl": "Aardappelsap"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Blueberry juice is made from blueberries, which are small blue berries.",
                  "es": "El jugo de arándano azul se hace de arándanos azules, que son pequeñas bayas azules.",
                  "de": "Blaubeersaft wird aus Blaubeeren hergestellt, die kleine blaue Beeren sind.",
                  "nl": "Bosbessensap wordt gemaakt van bosbessen, die kleine blauwe bessen zijn."
        }
      },
      {
        question: {
                  "en": "Is juice a liquid or solid?",
                  "es": "¿Es el jugo un líquido o sólido?",
                  "de": "Ist Saft eine Flüssigkeit oder fest?",
                  "nl": "Is sap een vloeistof of vast?"
        },
        options: [
        {
                  "en": "Liquid",
                  "es": "Líquido",
                  "de": "Flüssigkeit",
                  "nl": "Vloeistof"
        },
        {
                  "en": "Solid",
                  "es": "Sólido",
                  "de": "Fest",
                  "nl": "Vast"
        },
        {
                  "en": "Gas",
                  "es": "Gas",
                  "de": "Gas",
                  "nl": "Gas"
        },
        {
                  "en": "Powder",
                  "es": "Polvo",
                  "de": "Pulver",
                  "nl": "Poeder"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Juice is a liquid that you can pour and drink.",
                  "es": "El jugo es un líquido que puedes verter y beber.",
                  "de": "Saft ist eine Flüssigkeit, die man gießen und trinken kann.",
                  "nl": "Sap is een vloeistof die je kunt gieten en drinken."
        }
      },
      {
        question: {
                  "en": "What makes mango juice yellow?",
                  "es": "¿Qué hace que el jugo de mango sea amarillo?",
                  "de": "Was macht Mangosaft gelb?",
                  "nl": "Wat maakt mangosap geel?"
        },
        options: [
        {
                  "en": "The color of the mango fruit",
                  "es": "El color de la fruta de mango",
                  "de": "Die Farbe der Mangofrucht",
                  "nl": "De kleur van de mangovrucht"
        },
        {
                  "en": "Sunlight",
                  "es": "Luz solar",
                  "de": "Sonnenlicht",
                  "nl": "Zonlicht"
        },
        {
                  "en": "Added food coloring",
                  "es": "Colorante alimentario añadido",
                  "de": "Zugesetzte Lebensmittelfarbe",
                  "nl": "Toegevoegde voedselkleurstof"
        },
        {
                  "en": "Sugar",
                  "es": "Azúcar",
                  "de": "Zucker",
                  "nl": "Suiker"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Mango juice is yellow because mangoes are yellow or orange fruits inside.",
                  "es": "El jugo de mango es amarillo porque los mangos son frutas amarillas o naranjas por dentro.",
                  "de": "Mangosaft ist gelb, weil Mangos innen gelbe oder orangefarbene Früchte sind.",
                  "nl": "Mangosap is geel omdat mango's van binnen gele of oranje vruchten zijn."
        }
      },
      {
        question: {
                  "en": "Why should you wash fruits before making juice?",
                  "es": "¿Por qué debes lavar las frutas antes de hacer jugo?",
                  "de": "Warum solltest du Früchte vor dem Saftmachen waschen?",
                  "nl": "Waarom moet je fruit wassen voor het maken van sap?"
        },
        options: [
        {
                  "en": "To remove dirt and germs",
                  "es": "Para quitar suciedad y gérmenes",
                  "de": "Um Schmutz und Keime zu entfernen",
                  "nl": "Om vuil en kiemen te verwijderen"
        },
        {
                  "en": "To make them bigger",
                  "es": "Para hacerlas más grandes",
                  "de": "Um sie größer zu machen",
                  "nl": "Om ze groter te maken"
        },
        {
                  "en": "To make them sweeter",
                  "es": "Para hacerlas más dulces",
                  "de": "Um sie süßer zu machen",
                  "nl": "Om ze zoeter te maken"
        },
        {
                  "en": "To change their color",
                  "es": "Para cambiar su color",
                  "de": "Um ihre Farbe zu ändern",
                  "nl": "Om hun kleur te veranderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "We wash fruits before making juice to remove dirt, germs, and chemicals so the juice is clean and safe to drink.",
                  "es": "Lavamos las frutas antes de hacer jugo para quitar suciedad, gérmenes y químicos para que el jugo sea limpio y seguro de beber.",
                  "de": "Wir waschen Früchte vor dem Saftmachen, um Schmutz, Keime und Chemikalien zu entfernen, damit der Saft sauber und sicher zu trinken ist.",
                  "nl": "We wassen fruit voor het maken van sap om vuil, kiemen en chemicaliën te verwijderen zodat het sap schoon en veilig is om te drinken."
        }
      },
      {
        question: {
                  "en": "Which juice comes from a tropical fruit with spiky skin?",
                  "es": "¿Qué jugo proviene de una fruta tropical con piel espinosa?",
                  "de": "Welcher Saft kommt von einer tropischen Frucht mit stacheliger Haut?",
                  "nl": "Welk sap komt van een tropische vrucht met stekelige schil?"
        },
        options: [
        {
                  "en": "Milk",
                  "es": "Leche",
                  "de": "Milch",
                  "nl": "Melk"
        },
        {
                  "en": "Carrot juice",
                  "es": "Jugo de zanahoria",
                  "de": "Karottensaft",
                  "nl": "Wortelsap"
        },
        {
                  "en": "Pineapple juice",
                  "es": "Jugo de piña",
                  "de": "Ananassaft",
                  "nl": "Ananassap"
        },
        {
                  "en": "Apple juice",
                  "es": "Jugo de manzana",
                  "de": "Apfelsaft",
                  "nl": "Appelsap"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Pineapple juice comes from pineapples, which have rough, spiky skin on the outside.",
                  "es": "El jugo de piña proviene de las piñas, que tienen piel áspera y espinosa por fuera.",
                  "de": "Ananassaft kommt von Ananas, die außen eine raue, stachelige Haut haben.",
                  "nl": "Ananassap komt van ananassen, die een ruwe, stekelige schil aan de buitenkant hebben."
        }
      },
      {
        question: {
                  "en": "What should juice taste like?",
                  "es": "¿A qué debe saber el jugo?",
                  "de": "Wie sollte Saft schmecken?",
                  "nl": "Hoe moet sap smaken?"
        },
        options: [
        {
                  "en": "Like paper",
                  "es": "Como papel",
                  "de": "Wie Papier",
                  "nl": "Zoals papier"
        },
        {
                  "en": "Like the fruit or vegetable it's made from",
                  "es": "Como la fruta o vegetal del que está hecho",
                  "de": "Wie die Frucht oder das Gemüse, aus dem er gemacht ist",
                  "nl": "Zoals de vrucht of groente waarvan het gemaakt is"
        },
        {
                  "en": "Like soap",
                  "es": "Como jabón",
                  "de": "Wie Seife",
                  "nl": "Zoals zeep"
        },
        {
                  "en": "Like plastic",
                  "es": "Como plástico",
                  "de": "Wie Plastik",
                  "nl": "Zoals plastic"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Good juice should taste like the fruits or vegetables it's made from, fresh and natural.",
                  "es": "El buen jugo debe saber como las frutas o vegetales de los que está hecho, fresco y natural.",
                  "de": "Guter Saft sollte wie die Früchte oder das Gemüse schmecken, aus dem er gemacht ist, frisch und natürlich.",
                  "nl": "Goed sap moet smaken naar de vruchten of groenten waarvan het gemaakt is, vers en natuurlijk."
        }
      },
      {
        question: {
                  "en": "Which juice is good for your eyes?",
                  "es": "¿Qué jugo es bueno para tus ojos?",
                  "de": "Welcher Saft ist gut für deine Augen?",
                  "nl": "Welk sap is goed voor je ogen?"
        },
        options: [
        {
                  "en": "Carrot juice",
                  "es": "Jugo de zanahoria",
                  "de": "Karottensaft",
                  "nl": "Wortelsap"
        },
        {
                  "en": "Coffee",
                  "es": "Café",
                  "de": "Kaffee",
                  "nl": "Koffie"
        },
        {
                  "en": "Soda",
                  "es": "Refresco",
                  "de": "Limonade",
                  "nl": "Frisdrank"
        },
        {
                  "en": "Salt water",
                  "es": "Agua salada",
                  "de": "Salzwasser",
                  "nl": "Zout water"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Carrot juice is good for your eyes because carrots contain vitamin A, which helps you see better.",
                  "es": "El jugo de zanahoria es bueno para tus ojos porque las zanahorias contienen vitamina A, que te ayuda a ver mejor.",
                  "de": "Karottensaft ist gut für deine Augen, weil Karotten Vitamin A enthalten, das dir hilft, besser zu sehen.",
                  "nl": "Wortelsap is goed voor je ogen omdat wortels vitamine A bevatten, wat je helpt beter te zien."
        }
      },
      {
        question: {
                  "en": "What happens if you leave juice out of the refrigerator too long?",
                  "es": "¿Qué pasa si dejas el jugo fuera del refrigerador demasiado tiempo?",
                  "de": "Was passiert, wenn du Saft zu lange außerhalb des Kühlschranks lässt?",
                  "nl": "Wat gebeurt er als je sap te lang buiten de koelkast laat?"
        },
        options: [
        {
                  "en": "It turns into ice cream",
                  "es": "Se convierte en helado",
                  "de": "Er wird zu Eiscreme",
                  "nl": "Het wordt ijs"
        },
        {
                  "en": "It can spoil and taste bad",
                  "es": "Puede estropearse y saber mal",
                  "de": "Er kann verderben und schlecht schmecken",
                  "nl": "Het kan bederven en vies smaken"
        },
        {
                  "en": "It becomes healthier",
                  "es": "Se vuelve más saludable",
                  "de": "Er wird gesünder",
                  "nl": "Het wordt gezonder"
        },
        {
                  "en": "Nothing happens",
                  "es": "No pasa nada",
                  "de": "Nichts passiert",
                  "nl": "Er gebeurt niets"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "If juice is left out of the refrigerator for too long, it can spoil, grow bacteria, and taste bad or make you sick.",
                  "es": "Si el jugo se deja fuera del refrigerador demasiado tiempo, puede estropearse, cultivar bacterias y saber mal o enfermarte.",
                  "de": "Wenn Saft zu lange außerhalb des Kühlschranks bleibt, kann er verderben, Bakterien entwickeln und schlecht schmecken oder dich krank machen.",
                  "nl": "Als sap te lang buiten de koelkast wordt gelaten, kan het bederven, bacteriën kweken en vies smaken of je ziek maken."
        }
      },
      {
        question: {
                  "en": "What fruit makes peach juice?",
                  "es": "¿Qué fruta hace el jugo de durazno?",
                  "de": "Welche Frucht macht Pfirsichsaft?",
                  "nl": "Welke vrucht maakt perziksap?"
        },
        options: [
        {
                  "en": "Cucumber",
                  "es": "Pepino",
                  "de": "Gurke",
                  "nl": "Komkommer"
        },
        {
                  "en": "Lemon",
                  "es": "Limón",
                  "de": "Zitrone",
                  "nl": "Citroen"
        },
        {
                  "en": "Peach",
                  "es": "Durazno",
                  "de": "Pfirsich",
                  "nl": "Perzik"
        },
        {
                  "en": "Tomato",
                  "es": "Tomate",
                  "de": "Tomate",
                  "nl": "Tomaat"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Peach juice is made from peaches, which are soft, fuzzy fruits with sweet flavor.",
                  "es": "El jugo de durazno se hace de duraznos, que son frutas suaves y peludas con sabor dulce.",
                  "de": "Pfirsichsaft wird aus Pfirsichen hergestellt, weichen, flaumigen Früchten mit süßem Geschmack.",
                  "nl": "Perziksap wordt gemaakt van perziken, die zachte, harige vruchten zijn met zoete smaak."
        }
      },
      {
        question: {
                  "en": "Which vegetable makes green juice?",
                  "es": "¿Qué vegetal hace jugo verde?",
                  "de": "Welches Gemüse macht grünen Saft?",
                  "nl": "Welke groente maakt groen sap?"
        },
        options: [
        {
                  "en": "Beet",
                  "es": "Remolacha",
                  "de": "Rübe",
                  "nl": "Biet"
        },
        {
                  "en": "Spinach or cucumber",
                  "es": "Espinaca o pepino",
                  "de": "Spinat oder Gurke",
                  "nl": "Spinazie of komkommer"
        },
        {
                  "en": "Corn",
                  "es": "Maíz",
                  "de": "Mais",
                  "nl": "Maïs"
        },
        {
                  "en": "Potato",
                  "es": "Papa",
                  "de": "Kartoffel",
                  "nl": "Aardappel"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Green vegetables like spinach and cucumber make green juice that is very healthy.",
                  "es": "Vegetales verdes como espinaca y pepino hacen jugo verde que es muy saludable.",
                  "de": "Grünes Gemüse wie Spinat und Gurke macht grünen Saft, der sehr gesund ist.",
                  "nl": "Groene groenten zoals spinazie en komkommer maken groen sap dat zeer gezond is."
        }
      },
      {
        question: {
                  "en": "Can juice be frozen into popsicles?",
                  "es": "¿Se puede congelar el jugo en paletas?",
                  "de": "Kann man Saft zu Eis am Stiel einfrieren?",
                  "nl": "Kan sap worden bevroren tot ijslollys?"
        },
        options: [
        {
                  "en": "Freezing ruins juice",
                  "es": "Congelar arruina el jugo",
                  "de": "Einfrieren verdirbt Saft",
                  "nl": "Bevriezen bederft sap"
        },
        {
                  "en": "Yes, juice makes delicious frozen treats",
                  "es": "Sí, el jugo hace deliciosas golosinas congeladas",
                  "de": "Ja, Saft macht köstliche gefrorene Leckereien",
                  "nl": "Ja, sap maakt heerlijke bevroren lekkernijen"
        },
        {
                  "en": "No, juice never freezes",
                  "es": "No, el jugo nunca se congela",
                  "de": "Nein, Saft friert nie ein",
                  "nl": "Nee, sap bevriest nooit"
        },
        {
                  "en": "Only milk can be frozen",
                  "es": "Solo la leche se puede congelar",
                  "de": "Nur Milch kann eingefroren werden",
                  "nl": "Alleen melk kan worden bevroren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Juice can be frozen into popsicles or ice cubes for a refreshing frozen treat.",
                  "es": "El jugo se puede congelar en paletas o cubitos de hielo para un refrigerio congelado refrescante.",
                  "de": "Saft kann zu Eis am Stiel oder Eiswürfeln eingefroren werden für eine erfrischende gefrorene Leckerei.",
                  "nl": "Sap kan worden bevroren tot ijslollys of ijsblokjes voor een verfrissende bevroren lekkernij."
        }
      },
      {
        question: {
                  "en": "What makes pomegranate juice red?",
                  "es": "¿Qué hace que el jugo de granada sea rojo?",
                  "de": "Was macht Granatapfelsaft rot?",
                  "nl": "Wat maakt granaatappelsap rood?"
        },
        options: [
        {
                  "en": "Beets",
                  "es": "Remolachas",
                  "de": "Rüben",
                  "nl": "Bieten"
        },
        {
                  "en": "The red seeds inside the pomegranate",
                  "es": "Las semillas rojas dentro de la granada",
                  "de": "Die roten Samen im Granatapfel",
                  "nl": "De rode zaadjes in de granaatappel"
        },
        {
                  "en": "Red flowers",
                  "es": "Flores rojas",
                  "de": "Rote Blumen",
                  "nl": "Rode bloemen"
        },
        {
                  "en": "Food coloring",
                  "es": "Colorante alimentario",
                  "de": "Lebensmittelfarbe",
                  "nl": "Voedselkleurstof"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pomegranate juice is red because it comes from the red seeds (arils) inside the pomegranate fruit.",
                  "es": "El jugo de granada es rojo porque proviene de las semillas rojas (arilos) dentro de la fruta de granada.",
                  "de": "Granatapfelsaft ist rot, weil er aus den roten Samen (Arilli) im Inneren der Granatapfelfrucht kommt.",
                  "nl": "Granaatappelsap is rood omdat het komt van de rode zaadjes (pitjes) in de granaatappelvrucht."
        }
      },
      {
        question: {
                  "en": "Is freshly squeezed juice better than juice from a bottle?",
                  "es": "¿Es mejor el jugo recién exprimido que el jugo de una botella?",
                  "de": "Ist frisch gepresster Saft besser als Saft aus der Flasche?",
                  "nl": "Is vers geperst sap beter dan sap uit een fles?"
        },
        options: [
        {
                  "en": "Bottled juice is always better",
                  "es": "El jugo embotellado siempre es mejor",
                  "de": "Flaschensaft ist immer besser",
                  "nl": "Flessensap is altijd beter"
        },
        {
                  "en": "They are exactly the same",
                  "es": "Son exactamente lo mismo",
                  "de": "Sie sind genau gleich",
                  "nl": "Ze zijn precies hetzelfde"
        },
        {
                  "en": "Fresh juice has no vitamins",
                  "es": "El jugo fresco no tiene vitaminas",
                  "de": "Frischer Saft hat keine Vitamine",
                  "nl": "Vers sap heeft geen vitamines"
        },
        {
                  "en": "Fresh juice usually has more vitamins",
                  "es": "El jugo fresco generalmente tiene más vitaminas",
                  "de": "Frischer Saft hat normalerweise mehr Vitamine",
                  "nl": "Vers sap heeft meestal meer vitamines"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Freshly squeezed juice usually has more vitamins because it hasn't been stored for a long time.",
                  "es": "El jugo recién exprimido generalmente tiene más vitaminas porque no ha sido almacenado por mucho tiempo.",
                  "de": "Frisch gepresster Saft hat normalerweise mehr Vitamine, weil er nicht lange gelagert wurde.",
                  "nl": "Vers geperst sap heeft meestal meer vitamines omdat het niet lang is opgeslagen."
        }
      },
      {
        question: {
                  "en": "What fruit makes kiwi juice green?",
                  "es": "¿Qué fruta hace que el jugo de kiwi sea verde?",
                  "de": "Welche Frucht macht Kiwisaft grün?",
                  "nl": "Welke vrucht maakt kiwisap groen?"
        },
        options: [
        {
                  "en": "Kiwi fruit, which is green inside",
                  "es": "Fruta de kiwi, que es verde por dentro",
                  "de": "Kiwifrucht, die innen grün ist",
                  "nl": "Kiwivrucht, die van binnen groen is"
        },
        {
                  "en": "Green paint",
                  "es": "Pintura verde",
                  "de": "Grüne Farbe",
                  "nl": "Groene verf"
        },
        {
                  "en": "Green apples",
                  "es": "Manzanas verdes",
                  "de": "Grüne Äpfel",
                  "nl": "Groene appels"
        },
        {
                  "en": "Limes",
                  "es": "Limas",
                  "de": "Limetten",
                  "nl": "Limoenen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Kiwi juice is green because kiwi fruit has bright green flesh inside with tiny black seeds.",
                  "es": "El jugo de kiwi es verde porque la fruta de kiwi tiene pulpa verde brillante por dentro con pequeñas semillas negras.",
                  "de": "Kiwisaft ist grün, weil Kiwifrucht innen hellgrünes Fruchtfleisch mit winzigen schwarzen Samen hat.",
                  "nl": "Kiwisap is groen omdat kiwivrucht helder groen vruchtvlees heeft van binnen met kleine zwarte zaadjes."
        }
      },
      {
        question: {
                  "en": "How much juice should you drink each day?",
                  "es": "¿Cuánto jugo debes beber cada día?",
                  "de": "Wie viel Saft solltest du jeden Tag trinken?",
                  "nl": "Hoeveel sap moet je elke dag drinken?"
        },
        options: [
        {
                  "en": "10 glasses a day",
                  "es": "10 vasos al día",
                  "de": "10 Gläser am Tag",
                  "nl": "10 glazen per dag"
        },
        {
                  "en": "A small glass is enough",
                  "es": "Un vaso pequeño es suficiente",
                  "de": "Ein kleines Glas ist genug",
                  "nl": "Een klein glas is genoeg"
        },
        {
                  "en": "As much as you want",
                  "es": "Todo lo que quieras",
                  "de": "So viel du willst",
                  "nl": "Zoveel als je wilt"
        },
        {
                  "en": "You should never drink juice",
                  "es": "Nunca debes beber jugo",
                  "de": "Du solltest niemals Saft trinken",
                  "nl": "Je moet nooit sap drinken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A small glass of juice each day is enough because juice has sugar, and too much sugar isn't healthy.",
                  "es": "Un vaso pequeño de jugo cada día es suficiente porque el jugo tiene azúcar, y demasiada azúcar no es saludable.",
                  "de": "Ein kleines Glas Saft pro Tag ist genug, weil Saft Zucker enthält, und zu viel Zucker ist nicht gesund.",
                  "nl": "Een klein glas sap per dag is genoeg omdat sap suiker bevat, en te veel suiker is niet gezond."
        }
      },
      {
        question: {
                  "en": "What makes beet juice purple-red?",
                  "es": "¿Qué hace que el jugo de remolacha sea rojo-morado?",
                  "de": "Was macht Rübensaft lila-rot?",
                  "nl": "Wat maakt bietensap paars-rood?"
        },
        options: [
        {
                  "en": "The color of beets",
                  "es": "El color de las remolachas",
                  "de": "Die Farbe der Rüben",
                  "nl": "De kleur van bieten"
        },
        {
                  "en": "Wine",
                  "es": "Vino",
                  "de": "Wein",
                  "nl": "Wijn"
        },
        {
                  "en": "Purple carrots",
                  "es": "Zanahorias moradas",
                  "de": "Lila Karotten",
                  "nl": "Paarse wortels"
        },
        {
                  "en": "Added berries",
                  "es": "Bayas añadidas",
                  "de": "Zugesetzte Beeren",
                  "nl": "Toegevoegde bessen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Beet juice is purple-red because beets are naturally deep purple-red vegetables.",
                  "es": "El jugo de remolacha es rojo-morado porque las remolachas son naturalmente vegetales de color rojo-morado profundo.",
                  "de": "Rübensaft ist lila-rot, weil Rüben natürlich tiefviolett-rotes Gemüse sind.",
                  "nl": "Bietensap is paars-rood omdat bieten van nature diep paars-rode groenten zijn."
        }
      },
      {
        question: {
                  "en": "Which juice has tiny seeds in it?",
                  "es": "¿Qué jugo tiene semillas pequeñas?",
                  "de": "Welcher Saft hat winzige Samen drin?",
                  "nl": "Welk sap heeft kleine zaadjes erin?"
        },
        options: [
        {
                  "en": "Water",
                  "es": "Agua",
                  "de": "Wasser",
                  "nl": "Water"
        },
        {
                  "en": "Strawberry or raspberry juice",
                  "es": "Jugo de fresa o frambuesa",
                  "de": "Erdbeer- oder Himbeersaft",
                  "nl": "Aardbei- of framboossap"
        },
        {
                  "en": "Milk",
                  "es": "Leche",
                  "de": "Milch",
                  "nl": "Melk"
        },
        {
                  "en": "Soda",
                  "es": "Refresco",
                  "de": "Limonade",
                  "nl": "Frisdrank"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Strawberry and raspberry juice often have tiny seeds because these fruits have small seeds on the outside.",
                  "es": "El jugo de fresa y frambuesa a menudo tiene semillas pequeñas porque estas frutas tienen semillas pequeñas en el exterior.",
                  "de": "Erdbeer- und Himbeersaft haben oft winzige Samen, weil diese Früchte kleine Samen außen haben.",
                  "nl": "Aardbei- en framboossap hebben vaak kleine zaadjes omdat deze vruchten kleine zaadjes aan de buitenkant hebben."
        }
      },
      {
        question: {
                  "en": "What does 'pulp' mean in orange juice?",
                  "es": "¿Qué significa 'pulpa' en el jugo de naranja?",
                  "de": "Was bedeutet 'Fruchtfleisch' bei Orangensaft?",
                  "nl": "Wat betekent 'vruchtvlees' in sinaasappelsap?"
        },
        options: [
        {
                  "en": "The bottle it comes in",
                  "es": "La botella en la que viene",
                  "de": "Die Flasche, in der es kommt",
                  "nl": "De fles waarin het zit"
        },
        {
                  "en": "Sugar added to juice",
                  "es": "Azúcar añadida al jugo",
                  "de": "Zucker zum Saft hinzugefügt",
                  "nl": "Suiker toegevoegd aan sap"
        },
        {
                  "en": "Small pieces of the fruit",
                  "es": "Pequeños pedazos de la fruta",
                  "de": "Kleine Stücke der Frucht",
                  "nl": "Kleine stukjes van de vrucht"
        },
        {
                  "en": "Ice cubes",
                  "es": "Cubitos de hielo",
                  "de": "Eiswürfel",
                  "nl": "IJsblokjes"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Pulp in orange juice means small pieces of the fruit that give the juice texture.",
                  "es": "La pulpa en el jugo de naranja significa pequeños pedazos de la fruta que le dan textura al jugo.",
                  "de": "Fruchtfleisch in Orangensaft bedeutet kleine Fruchtstücke, die dem Saft Textur geben.",
                  "nl": "Vruchtvlees in sinaasappelsap betekent kleine stukjes van de vrucht die het sap textuur geven."
        }
      },
      {
        question: {
                  "en": "Which juice comes from a fruit that grows on a vine?",
                  "es": "¿Qué jugo proviene de una fruta que crece en una vid?",
                  "de": "Welcher Saft kommt von einer Frucht, die an einer Rebe wächst?",
                  "nl": "Welk sap komt van een vrucht die aan een wijnstok groeit?"
        },
        options: [
        {
                  "en": "Orange juice",
                  "es": "Jugo de naranja",
                  "de": "Orangensaft",
                  "nl": "Sinaasappelsap"
        },
        {
                  "en": "Banana juice",
                  "es": "Jugo de plátano",
                  "de": "Bananensaft",
                  "nl": "Bananensap"
        },
        {
                  "en": "Coconut juice",
                  "es": "Jugo de coco",
                  "de": "Kokosnusssaft",
                  "nl": "Kokossap"
        },
        {
                  "en": "Grape juice",
                  "es": "Jugo de uva",
                  "de": "Traubensaft",
                  "nl": "Druivensap"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Grape juice comes from grapes, which grow in bunches on vines.",
                  "es": "El jugo de uva proviene de las uvas, que crecen en racimos en las vides.",
                  "de": "Traubensaft kommt von Trauben, die in Trauben an Reben wachsen.",
                  "nl": "Druivensap komt van druiven, die in trossen aan wijnstokken groeien."
        }
      },
      {
        question: {
                  "en": "What makes apple juice different colors (clear or cloudy)?",
                  "es": "¿Qué hace que el jugo de manzana tenga diferentes colores (claro o turbio)?",
                  "de": "Was macht Apfelsaft unterschiedlich farbig (klar oder trüb)?",
                  "nl": "Wat maakt appelsap verschillende kleuren (helder of troebel)?"
        },
        options: [
        {
                  "en": "The color of the bottle",
                  "es": "El color de la botella",
                  "de": "Die Farbe der Flasche",
                  "nl": "De kleur van de fles"
        },
        {
                  "en": "Different types of sugar",
                  "es": "Diferentes tipos de azúcar",
                  "de": "Verschiedene Zuckerarten",
                  "nl": "Verschillende soorten suiker"
        },
        {
                  "en": "Whether the pulp is filtered out or left in",
                  "es": "Si la pulpa es filtrada o dejada",
                  "de": "Ob das Fruchtfleisch herausgefiltert oder dringelassen wird",
                  "nl": "Of het vruchtvlees eruit gefilterd wordt of erin blijft"
        },
        {
                  "en": "The time of day it's made",
                  "es": "La hora del día en que se hace",
                  "de": "Die Tageszeit, zu der es gemacht wird",
                  "nl": "Het tijdstip van de dag waarop het gemaakt wordt"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Apple juice can be clear if the pulp is filtered out, or cloudy if some pulp is left in the juice.",
                  "es": "El jugo de manzana puede ser claro si la pulpa es filtrada, o turbio si algo de pulpa queda en el jugo.",
                  "de": "Apfelsaft kann klar sein, wenn das Fruchtfleisch herausgefiltert wird, oder trüb, wenn etwas Fruchtfleisch im Saft bleibt.",
                  "nl": "Appelsap kan helder zijn als het vruchtvlees eruit gefilterd wordt, of troebel als wat vruchtvlees in het sap blijft."
        }
      },
      {
        question: {
                  "en": "Why do some juices have added sugar?",
                  "es": "¿Por qué algunos jugos tienen azúcar añadida?",
                  "de": "Warum haben manche Säfte zugesetzten Zucker?",
                  "nl": "Waarom hebben sommige sappen toegevoegde suiker?"
        },
        options: [
        {
                  "en": "To change the color",
                  "es": "Para cambiar el color",
                  "de": "Um die Farbe zu ändern",
                  "nl": "Om de kleur te veranderen"
        },
        {
                  "en": "To make juice freeze better",
                  "es": "Para que el jugo se congele mejor",
                  "de": "Damit Saft besser gefriert",
                  "nl": "Om sap beter te laten bevriezen"
        },
        {
                  "en": "To make sour fruits taste sweeter",
                  "es": "Para hacer que las frutas agrias sepan más dulces",
                  "de": "Um saure Früchte süßer zu machen",
                  "nl": "Om zure vruchten zoeter te laten smaken"
        },
        {
                  "en": "To make juice healthier",
                  "es": "Para hacer el jugo más saludable",
                  "de": "Um Saft gesünder zu machen",
                  "nl": "Om sap gezonder te maken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Some juices have added sugar to make sour fruits like cranberries or grapefruit taste sweeter, but natural juice without added sugar is healthier.",
                  "es": "Algunos jugos tienen azúcar añadida para hacer que frutas agrias como arándanos o toronja sepan más dulces, pero el jugo natural sin azúcar añadida es más saludable.",
                  "de": "Manche Säfte haben zugesetzten Zucker, um saure Früchte wie Cranberries oder Grapefruits süßer zu machen, aber natürlicher Saft ohne zugesetzten Zucker ist gesünder.",
                  "nl": "Sommige sappen hebben toegevoegde suiker om zure vruchten zoals veenbessen of grapefruit zoeter te laten smaken, maar natuurlijk sap zonder toegevoegde suiker is gezonder."
        }
      },
      {
        question: {
                  "en": "Can you drink too much juice?",
                  "es": "¿Puedes beber demasiado jugo?",
                  "de": "Kannst du zu viel Saft trinken?",
                  "nl": "Kun je te veel sap drinken?"
        },
        options: [
        {
                  "en": "Only adults can drink too much",
                  "es": "Solo los adultos pueden beber demasiado",
                  "de": "Nur Erwachsene können zu viel trinken",
                  "nl": "Alleen volwassenen kunnen te veel drinken"
        },
        {
                  "en": "Yes, too much juice can give you too much sugar",
                  "es": "Sí, demasiado jugo puede darte demasiada azúcar",
                  "de": "Ja, zu viel Saft kann zu viel Zucker geben",
                  "nl": "Ja, te veel sap kan te veel suiker geven"
        },
        {
                  "en": "No, you can never have too much juice",
                  "es": "No, nunca puedes tener demasiado jugo",
                  "de": "Nein, man kann nie zu viel Saft haben",
                  "nl": "Nee, je kunt nooit te veel sap hebben"
        },
        {
                  "en": "Juice has no sugar",
                  "es": "El jugo no tiene azúcar",
                  "de": "Saft hat keinen Zucker",
                  "nl": "Sap heeft geen suiker"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Yes, drinking too much juice can give you too much sugar, which isn't healthy. It's better to also eat whole fruits and drink water.",
                  "es": "Sí, beber demasiado jugo puede darte demasiada azúcar, lo cual no es saludable. Es mejor también comer frutas enteras y beber agua.",
                  "de": "Ja, zu viel Saft trinken kann zu viel Zucker geben, was nicht gesund ist. Es ist besser, auch ganze Früchte zu essen und Wasser zu trinken.",
                  "nl": "Ja, te veel sap drinken kan te veel suiker geven, wat niet gezond is. Het is beter om ook hele vruchten te eten en water te drinken."
        }
      },
      {
        question: {
                  "en": "Which juice is made from a citrus fruit?",
                  "es": "¿Qué jugo se hace de una fruta cítrica?",
                  "de": "Welcher Saft wird aus einer Zitrusfrucht gemacht?",
                  "nl": "Welk sap wordt gemaakt van een citrusvrucht?"
        },
        options: [
        {
                  "en": "Grape juice",
                  "es": "Jugo de uva",
                  "de": "Traubensaft",
                  "nl": "Druivensap"
        },
        {
                  "en": "Apple juice",
                  "es": "Jugo de manzana",
                  "de": "Apfelsaft",
                  "nl": "Appelsap"
        },
        {
                  "en": "Orange, lemon, or lime juice",
                  "es": "Jugo de naranja, limón o lima",
                  "de": "Orangen-, Zitronen- oder Limettensaft",
                  "nl": "Sinaasappel-, citroen- of limoensap"
        },
        {
                  "en": "Carrot juice",
                  "es": "Jugo de zanahoria",
                  "de": "Karottensaft",
                  "nl": "Wortelsap"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Citrus fruits include oranges, lemons, limes, and grapefruits. They all make tangy, vitamin-rich juices.",
                  "es": "Las frutas cítricas incluyen naranjas, limones, limas y toronjas. Todas hacen jugos ácidos ricos en vitaminas.",
                  "de": "Zitrusfrüchte umfassen Orangen, Zitronen, Limetten und Grapefruits. Sie alle machen würzige, vitaminreiche Säfte.",
                  "nl": "Citrusvruchten zijn sinaasappels, citroenen, limoenen en grapefruits. Ze maken allemaal pittig, vitamine-rijk sap."
        }
      },
      {
        question: {
                  "en": "What is concentrate juice?",
                  "es": "¿Qué es el jugo concentrado?",
                  "de": "Was ist Konzentrat-Saft?",
                  "nl": "Wat is geconcentreerd sap?"
        },
        options: [
        {
                  "en": "Juice made from concentrate oranges",
                  "es": "Jugo hecho de naranjas concentradas",
                  "de": "Saft aus konzentrierten Orangen",
                  "nl": "Sap gemaakt van geconcentreerde sinaasappels"
        },
        {
                  "en": "Very thick juice you can't drink",
                  "es": "Jugo muy espeso que no puedes beber",
                  "de": "Sehr dicker Saft, den man nicht trinken kann",
                  "nl": "Zeer dik sap dat je niet kunt drinken"
        },
        {
                  "en": "Juice that makes you concentrate better",
                  "es": "Jugo que te hace concentrarte mejor",
                  "de": "Saft, der dich besser konzentrieren lässt",
                  "nl": "Sap dat je beter laat concentreren"
        },
        {
                  "en": "Juice with water removed, that you add water to later",
                  "es": "Jugo con agua eliminada, al que agregas agua después",
                  "de": "Saft, dem Wasser entzogen wurde, dem man später Wasser hinzufügt",
                  "nl": "Sap waar water uit is gehaald, waar je later water aan toevoegt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Concentrate juice has most of the water removed to make it smaller for shipping. You add water back to drink it.",
                  "es": "El jugo concentrado tiene la mayor parte del agua eliminada para hacerlo más pequeño para el envío. Agregas agua de vuelta para beberlo.",
                  "de": "Konzentrat-Saft hat das meiste Wasser entfernt, um ihn für den Versand kleiner zu machen. Man fügt Wasser hinzu, um ihn zu trinken.",
                  "nl": "Geconcentreerd sap heeft het meeste water verwijderd om het kleiner te maken voor verzending. Je voegt water toe om het te drinken."
        }
      },
      {
        question: {
                  "en": "Why is it good to drink water along with juice?",
                  "es": "¿Por qué es bueno beber agua junto con el jugo?",
                  "de": "Warum ist es gut, Wasser zusammen mit Saft zu trinken?",
                  "nl": "Waarom is het goed om water samen met sap te drinken?"
        },
        options: [
        {
                  "en": "Water tastes better than juice",
                  "es": "El agua sabe mejor que el jugo",
                  "de": "Wasser schmeckt besser als Saft",
                  "nl": "Water smaakt beter dan sap"
        },
        {
                  "en": "Water helps your body and has no sugar",
                  "es": "El agua ayuda a tu cuerpo y no tiene azúcar",
                  "de": "Wasser hilft deinem Körper und hat keinen Zucker",
                  "nl": "Water helpt je lichaam en heeft geen suiker"
        },
        {
                  "en": "Water makes juice taste better",
                  "es": "El agua hace que el jugo sepa mejor",
                  "de": "Wasser lässt Saft besser schmecken",
                  "nl": "Water laat sap beter smaken"
        },
        {
                  "en": "You don't need water if you drink juice",
                  "es": "No necesitas agua si bebes jugo",
                  "de": "Du brauchst kein Wasser, wenn du Saft trinkst",
                  "nl": "Je hebt geen water nodig als je sap drinkt"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Water is important for your body and has no sugar, while juice has natural sugar. Drinking both is a good balance.",
                  "es": "El agua es importante para tu cuerpo y no tiene azúcar, mientras que el jugo tiene azúcar natural. Beber ambos es un buen equilibrio.",
                  "de": "Wasser ist wichtig für deinen Körper und hat keinen Zucker, während Saft natürlichen Zucker hat. Beides zu trinken ist eine gute Balance.",
                  "nl": "Water is belangrijk voor je lichaam en heeft geen suiker, terwijl sap natuurlijke suiker heeft. Beide drinken is een goede balans."
        }
      },
      {
        question: {
                  "en": "What makes cherry juice dark red?",
                  "es": "¿Qué hace que el jugo de cereza sea rojo oscuro?",
                  "de": "Was macht Kirschsaft dunkelrot?",
                  "nl": "Wat maakt kersensap donkerrood?"
        },
        options: [
        {
                  "en": "Beet juice mixed in",
                  "es": "Jugo de remolacha mezclado",
                  "de": "Rübensaft gemischt",
                  "nl": "Bietensap gemengd"
        },
        {
                  "en": "Red food coloring",
                  "es": "Colorante rojo",
                  "de": "Rote Lebensmittelfarbe",
                  "nl": "Rode voedselkleurstof"
        },
        {
                  "en": "The deep red color of cherries",
                  "es": "El color rojo profundo de las cerezas",
                  "de": "Die tiefrote Farbe der Kirschen",
                  "nl": "De dieprode kleur van kersen"
        },
        {
                  "en": "Tomato juice added",
                  "es": "Jugo de tomate agregado",
                  "de": "Tomatensaft hinzugefügt",
                  "nl": "Tomatensap toegevoegd"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cherry juice is dark red because cherries are naturally deep red fruits.",
                  "es": "El jugo de cereza es rojo oscuro porque las cerezas son naturalmente frutas de color rojo profundo.",
                  "de": "Kirschsaft ist dunkelrot, weil Kirschen natürlich tiefrote Früchte sind.",
                  "nl": "Kersensap is donkerrood omdat kersen van nature dieprode vruchten zijn."
        }
      },
      {
        question: {
                  "en": "Which juice helps you when you have a cold?",
                  "es": "¿Qué jugo te ayuda cuando tienes un resfriado?",
                  "de": "Welcher Saft hilft dir bei einer Erkältung?",
                  "nl": "Welk sap helpt je als je verkouden bent?"
        },
        options: [
        {
                  "en": "Soda",
                  "es": "Refresco",
                  "de": "Limonade",
                  "nl": "Frisdrank"
        },
        {
                  "en": "Orange juice with vitamin C",
                  "es": "Jugo de naranja con vitamina C",
                  "de": "Orangensaft mit Vitamin C",
                  "nl": "Sinaasappelsap met vitamine C"
        },
        {
                  "en": "Coffee",
                  "es": "Café",
                  "de": "Kaffee",
                  "nl": "Koffie"
        },
        {
                  "en": "Salt water",
                  "es": "Agua salada",
                  "de": "Salzwasser",
                  "nl": "Zout water"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Orange juice has vitamin C, which can help your body fight a cold and feel better.",
                  "es": "El jugo de naranja tiene vitamina C, que puede ayudar a tu cuerpo a combatir un resfriado y sentirte mejor.",
                  "de": "Orangensaft hat Vitamin C, das deinem Körper helfen kann, eine Erkältung zu bekämpfen und sich besser zu fühlen.",
                  "nl": "Sinaasappelsap heeft vitamine C, wat je lichaam kan helpen een verkoudheid te bestrijden en je beter te voelen."
        }
      },
      {
        question: {
                  "en": "What makes coconut water different from coconut milk?",
                  "es": "¿Qué hace que el agua de coco sea diferente de la leche de coco?",
                  "de": "Was macht Kokoswasser anders als Kokosmilch?",
                  "nl": "Wat maakt kokoswater anders dan kokosmelk?"
        },
        options: [
        {
                  "en": "They are exactly the same thing",
                  "es": "Son exactamente lo mismo",
                  "de": "Sie sind genau dasselbe",
                  "nl": "Ze zijn precies hetzelfde"
        },
        {
                  "en": "Coconut water is the liquid inside the coconut, coconut milk is made from the coconut meat",
                  "es": "El agua de coco es el líquido dentro del coco, la leche de coco se hace de la carne del coco",
                  "de": "Kokoswasser ist die Flüssigkeit im Inneren der Kokosnuss, Kokosmilch wird aus dem Kokosfleisch hergestellt",
                  "nl": "Kokoswater is de vloeistof in de kokosnoot, kokosmelk wordt gemaakt van het kokosvruchtvlees"
        },
        {
                  "en": "Coconut milk comes from cows",
                  "es": "La leche de coco viene de las vacas",
                  "de": "Kokosmilch kommt von Kühen",
                  "nl": "Kokosmelk komt van koeien"
        },
        {
                  "en": "Coconut water is just milk with water added",
                  "es": "El agua de coco es solo leche con agua agregada",
                  "de": "Kokoswasser ist nur Milch mit Wasser",
                  "nl": "Kokoswater is gewoon melk met water toegevoegd"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Coconut water is the clear liquid naturally found inside young coconuts, while coconut milk is made by blending coconut meat with water.",
                  "es": "El agua de coco es el líquido claro que se encuentra naturalmente dentro de los cocos jóvenes, mientras que la leche de coco se hace mezclando carne de coco con agua.",
                  "de": "Kokoswasser ist die klare Flüssigkeit, die natürlich in jungen Kokosnüssen vorkommt, während Kokosmilch durch Mischen von Kokosfleisch mit Wasser hergestellt wird.",
                  "nl": "Kokoswater is de heldere vloeistof die van nature in jonge kokosnoten voorkomt, terwijl kokosmelk wordt gemaakt door kokosvruchtvlees met water te mengen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();