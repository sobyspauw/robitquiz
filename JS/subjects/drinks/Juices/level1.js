// Quiz Level 1: Drinken - Sappen (Basic Juice Knowledge)
(function() {
  const level1 = {
    name: {
      en: "Basic Juice Knowledge",
      es: "Conocimientos Básicos de Jugos",
      de: "Grundwissen über Säfte",
      nl: "Basis Kennis van Sappen"
    },
    questions: [
      {
        question: {
          en: "What color is orange juice?",
          es: "¿De qué color es el jugo de naranja?",
          de: "Welche Farbe hat Orangensaft?",
          nl: "Welke kleur heeft sinaasappelsap?"
        },
        options: [
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" }
        ],
        correct: 0,
        explanation: {
          en: "Orange juice is orange in color, just like the fruit it comes from.",
          es: "El jugo de naranja es de color naranja, igual que la fruta de la que proviene.",
          de: "Orangensaft ist orange, genau wie die Frucht, aus der er stammt.",
          nl: "Sinaasappelsap is oranje van kleur, net als de vrucht waar het van komt."
        }
      },
      {
        question: {
          en: "Which fruit makes apple juice?",
          es: "¿Qué fruta hace el jugo de manzana?",
          de: "Welche Frucht macht Apfelsaft?",
          nl: "Welke vrucht maakt appelsap?"
        },
        options: [
          { en: "Banana", es: "Plátano", de: "Banane", nl: "Banaan" },
          { en: "Apple", es: "Manzana", de: "Apfel", nl: "Appel" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Sinaasappel" },
          { en: "Grape", es: "Uva", de: "Traube", nl: "Druif" }
        ],
        correct: 1,
        explanation: {
          en: "Apple juice is made from apples by squeezing out their liquid.",
          es: "El jugo de manzana se hace de las manzanas exprimiendo su líquido.",
          de: "Apfelsaft wird aus Äpfeln hergestellt, indem ihre Flüssigkeit ausgepresst wird.",
          nl: "Appelsap wordt gemaakt van appels door hun sap eruit te persen."
        }
      },
      {
        question: {
          en: "What makes juice healthy?",
          es: "¿Qué hace que el jugo sea saludable?",
          de: "Was macht Saft gesund?",
          nl: "Wat maakt sap gezond?"
        },
        options: [
          { en: "Vitamins", es: "Vitaminas", de: "Vitamine", nl: "Vitamines" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Oil", es: "Aceite", de: "Öl", nl: "Olie" },
          { en: "Pepper", es: "Pimienta", de: "Pfeffer", nl: "Peper" }
        ],
        correct: 0,
        explanation: {
          en: "Juice is healthy because it contains vitamins from fruits that are good for our body.",
          es: "El jugo es saludable porque contiene vitaminas de las frutas que son buenas para nuestro cuerpo.",
          de: "Saft ist gesund, weil er Vitamine aus Früchten enthält, die gut für unseren Körper sind.",
          nl: "Sap is gezond omdat het vitamines van vruchten bevat die goed zijn voor ons lichaam."
        }
      },
      {
        question: {
          en: "Which juice is red?",
          es: "¿Qué jugo es rojo?",
          de: "Welcher Saft ist rot?",
          nl: "Welk sap is rood?"
        },
        options: [
          { en: "Orange juice", es: "Jugo de naranja", de: "Orangensaft", nl: "Sinaasappelsap" },
          { en: "Apple juice", es: "Jugo de manzana", de: "Apfelsaft", nl: "Appelsap" },
          { en: "Tomato juice", es: "Jugo de tomate", de: "Tomatensaft", nl: "Tomatensap" },
          { en: "Lemon juice", es: "Jugo de limón", de: "Zitronensaft", nl: "Citroensap" }
        ],
        correct: 2,
        explanation: {
          en: "Tomato juice is red because tomatoes are red fruits (though botanically they're vegetables).",
          es: "El jugo de tomate es rojo porque los tomates son frutas rojas (aunque botánicamente son vegetales).",
          de: "Tomatensaft ist rot, weil Tomaten rote Früchte sind (obwohl sie botanisch Gemüse sind).",
          nl: "Tomatensap is rood omdat tomaten rode vruchten zijn (hoewel ze botanisch groenten zijn)."
        }
      },
      {
        question: {
          en: "Where do we get juice from?",
          es: "¿De dónde obtenemos el jugo?",
          de: "Woher bekommen wir Saft?",
          nl: "Waar krijgen we sap vandaan?"
        },
        options: [
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" },
          { en: "Fruits and vegetables", es: "Frutas y verduras", de: "Obst und Gemüse", nl: "Fruit en groenten" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" }
        ],
        correct: 1,
        explanation: {
          en: "We get juice by squeezing or pressing fruits and vegetables to extract their liquid.",
          es: "Obtenemos jugo exprimiendo o prensando frutas y verduras para extraer su líquido.",
          de: "Wir erhalten Saft, indem wir Obst und Gemüse auspressen, um ihre Flüssigkeit zu extrahieren.",
          nl: "We krijgen sap door fruit en groenten uit te persen om hun vloeistof eruit te halen."
        }
      },
      {
        question: {
          en: "What color is grape juice?",
          es: "¿De qué color es el jugo de uva?",
          de: "Welche Farbe hat Traubensaft?",
          nl: "Welke kleur heeft druivensap?"
        },
        options: [
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" },
          { en: "Pink", es: "Rosa", de: "Rosa", nl: "Roze" },
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" }
        ],
        correct: 0,
        explanation: {
          en: "Grape juice is usually purple because it's made from dark purple grapes.",
          es: "El jugo de uva suele ser morado porque se hace de uvas moradas oscuras.",
          de: "Traubensaft ist normalerweise lila, weil er aus dunkelvioletten Trauben hergestellt wird.",
          nl: "Druivensap is meestal paars omdat het gemaakt wordt van donkerpaarse druiven."
        }
      },
      {
        question: {
          en: "When should you drink juice?",
          es: "¿Cuándo debes beber jugo?",
          de: "Wann solltest du Saft trinken?",
          nl: "Wanneer moet je sap drinken?"
        },
        options: [
          { en: "Only at night", es: "Solo por la noche", de: "Nur nachts", nl: "Alleen 's nachts" },
          { en: "Any time of day", es: "Cualquier momento del día", de: "Jederzeit", nl: "Op elk moment van de dag" },
          { en: "Only in winter", es: "Solo en invierno", de: "Nur im Winter", nl: "Alleen in de winter" },
          { en: "Never", es: "Nunca", de: "Niemals", nl: "Nooit" }
        ],
        correct: 1,
        explanation: {
          en: "You can drink juice any time of day as part of a healthy diet, but remember to drink it in moderation.",
          es: "Puedes beber jugo en cualquier momento del día como parte de una dieta saludable, pero recuerda beberlo con moderación.",
          de: "Du kannst Saft zu jeder Tageszeit als Teil einer gesunden Ernährung trinken, aber denk daran, ihn in Maßen zu trinken.",
          nl: "Je kunt sap op elk moment van de dag drinken als onderdeel van een gezonde voeding, maar vergeet niet het met mate te drinken."
        }
      },
      {
        question: {
          en: "What makes lemon juice sour?",
          es: "¿Qué hace que el jugo de limón sea agrio?",
          de: "Was macht Zitronensaft sauer?",
          nl: "Wat maakt citroensap zuur?"
        },
        options: [
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Salt", es: "Sal", de: "Salz", nl: "Zout" },
          { en: "Acid", es: "Ácido", de: "Säure", nl: "Zuur" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }
        ],
        correct: 2,
        explanation: {
          en: "Lemon juice is sour because lemons contain natural acids that give them their tart taste.",
          es: "El jugo de limón es agrio porque los limones contienen ácidos naturales que les dan su sabor ácido.",
          de: "Zitronensaft ist sauer, weil Zitronen natürliche Säuren enthalten, die ihnen ihren sauren Geschmack verleihen.",
          nl: "Citroensap is zuur omdat citroenen natuurlijke zuren bevatten die hen hun zure smaak geven."
        }
      },
      {
        question: {
          en: "Which juice is sweet?",
          es: "¿Qué jugo es dulce?",
          de: "Welcher Saft ist süß?",
          nl: "Welk sap is zoet?"
        },
        options: [
          { en: "Lemon juice", es: "Jugo de limón", de: "Zitronensaft", nl: "Citroensap" },
          { en: "Orange juice", es: "Jugo de naranja", de: "Orangensaft", nl: "Sinaasappelsap" },
          { en: "Lime juice", es: "Jugo de lima", de: "Limettensaft", nl: "Limoensap" },
          { en: "Grapefruit juice", es: "Jugo de toronja", de: "Grapefruitsaft", nl: "Grapefruitsap" }
        ],
        correct: 1,
        explanation: {
          en: "Orange juice is naturally sweet because oranges contain natural sugars.",
          es: "El jugo de naranja es naturalmente dulce porque las naranjas contienen azúcares naturales.",
          de: "Orangensaft ist natürlich süß, weil Orangen natürliche Zucker enthalten.",
          nl: "Sinaasappelsap is van nature zoet omdat sinaasappels natuurlijke suikers bevatten."
        }
      },
      {
        question: {
          en: "What do you use to squeeze juice from an orange?",
          es: "¿Qué usas para exprimir jugo de una naranja?",
          de: "Was verwendest du, um Saft aus einer Orange zu pressen?",
          nl: "Wat gebruik je om sap uit een sinaasappel te persen?"
        },
        options: [
          { en: "Hammer", es: "Martillo", de: "Hammer", nl: "Hamer" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" },
          { en: "Juicer", es: "Exprimidor", de: "Entsafter", nl: "Sapcentrifuge" },
          { en: "Fork", es: "Tenedor", de: "Gabel", nl: "Vork" }
        ],
        correct: 2,
        explanation: {
          en: "A juicer is a special tool designed to squeeze juice from fruits like oranges.",
          es: "Un exprimidor es una herramienta especial diseñada para exprimir jugo de frutas como las naranjas.",
          de: "Ein Entsafter ist ein spezielles Werkzeug, das dazu entwickelt wurde, Saft aus Früchten wie Orangen zu pressen.",
          nl: "Een sapcentrifuge is een speciaal gereedschap ontworpen om sap uit vruchten zoals sinaasappels te persen."
        }
      },
      {
        "question": {
          "en": "What fruit makes pineapple juice?",
          "es": "¿Qué fruta hace el jugo de piña?",
          "de": "Welche Frucht macht Ananassaft?",
          "nl": "Welke vrucht maakt ananassap?"
        },
        "options": [
          {
            "en": "Pineapple",
            "es": "Piña",
            "de": "Ananas",
            "nl": "Ananas"
          },
          {
            "en": "Orange",
            "es": "Naranja",
            "de": "Orange",
            "nl": "Sinaasappel"
          },
          {
            "en": "Mango",
            "es": "Mango",
            "de": "Mango",
            "nl": "Mango"
          },
          {
            "en": "Papaya",
            "es": "Papaya",
            "de": "Papaya",
            "nl": "Papaya"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "Pineapple juice is made from pineapples, a tropical fruit with sweet and tangy flavor.",
          "es": "El jugo de piña se hace de piñas, una fruta tropical con sabor dulce y ácido.",
          "de": "Ananassaft wird aus Ananas hergestellt, einer tropischen Frucht mit süß-säuerlichem Geschmack.",
          "nl": "Ananassap wordt gemaakt van ananas, een tropische vrucht met zoete en pittige smaak."
        }
      },
      {
        "question": {
          "en": "Is carrot juice made from a fruit or vegetable?",
          "es": "¿El jugo de zanahoria se hace de una fruta o un vegetal?",
          "de": "Wird Karottensaft aus einer Frucht oder einem Gemüse hergestellt?",
          "nl": "Wordt wortelsap gemaakt van een vrucht of groente?"
        },
        "options": [
          {
            "en": "Vegetable",
            "es": "Vegetal",
            "de": "Gemüse",
            "nl": "Groente"
          },
          {
            "en": "Fruit",
            "es": "Fruta",
            "de": "Frucht",
            "nl": "Vrucht"
          },
          {
            "en": "Grain",
            "es": "Grano",
            "de": "Getreide",
            "nl": "Graan"
          },
          {
            "en": "Nut",
            "es": "Nuez",
            "de": "Nuss",
            "nl": "Noot"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "Carrots are vegetables that grow underground. Carrot juice is a healthy vegetable juice.",
          "es": "Las zanahorias son vegetales que crecen bajo tierra. El jugo de zanahoria es un jugo de vegetales saludable.",
          "de": "Karotten sind Gemüse, das unter der Erde wächst. Karottensaft ist ein gesunder Gemüsesaft.",
          "nl": "Wortels zijn groenten die ondergronds groeien. Wortelsap is een gezond groentensap."
        }
      },
      {
        "question": {
          "en": "What should you do with juice after opening?",
          "es": "¿Qué debes hacer con el jugo después de abrirlo?",
          "de": "Was solltest du mit Saft nach dem Öffnen machen?",
          "nl": "Wat moet je met sap doen na het openen?"
        },
        "options": [
          {
            "en": "Put it in the refrigerator",
            "es": "Ponerlo en el refrigerador",
            "de": "In den Kühlschrank stellen",
            "nl": "In de koelkast zetten"
          },
          {
            "en": "Leave it in the sun",
            "es": "Dejarlo al sol",
            "de": "In der Sonne stehen lassen",
            "nl": "In de zon laten staan"
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
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "After opening, juice should be stored in the refrigerator to keep it fresh and prevent spoilage.",
          "es": "Después de abrir, el jugo debe almacenarse en el refrigerador para mantenerlo fresco y prevenir deterioro.",
          "de": "Nach dem Öffnen sollte Saft im Kühlschrank aufbewahrt werden, um ihn frisch zu halten und Verderb zu verhindern.",
          "nl": "Na het openen moet sap in de koelkast worden bewaard om het vers te houden en bederf te voorkomen."
        }
      },
      {
        "question": {
          "en": "Which juice comes from red berries?",
          "es": "¿Qué jugo proviene de bayas rojas?",
          "de": "Welcher Saft kommt von roten Beeren?",
          "nl": "Welk sap komt van rode bessen?"
        },
        "options": [
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
          },
          {
            "en": "Cucumber juice",
            "es": "Jugo de pepino",
            "de": "Gurkensaft",
            "nl": "Komkommersap"
          },
          {
            "en": "Coconut juice",
            "es": "Jugo de coco",
            "de": "Kokosnusssaft",
            "nl": "Kokossap"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "Strawberry juice is made from strawberries, which are red berries that are sweet and delicious.",
          "es": "El jugo de fresa se hace de fresas, que son bayas rojas dulces y deliciosas.",
          "de": "Erdbeersaft wird aus Erdbeeren hergestellt, die rote Beeren sind und süß und köstlich schmecken.",
          "nl": "Aardbeiensap wordt gemaakt van aardbeien, die rode bessen zijn die zoet en heerlijk zijn."
        }
      },
      {
        "question": {
          "en": "What makes juice different from soda?",
          "es": "¿Qué hace que el jugo sea diferente del refresco?",
          "de": "Was macht Saft anders als Limonade?",
          "nl": "Wat maakt sap anders dan frisdrank?"
        },
        "options": [
          {
            "en": "Juice comes from real fruits or vegetables",
            "es": "El jugo proviene de frutas o vegetales reales",
            "de": "Saft kommt von echten Früchten oder Gemüse",
            "nl": "Sap komt van echte vruchten of groenten"
          },
          {
            "en": "Juice has more bubbles",
            "es": "El jugo tiene más burbujas",
            "de": "Saft hat mehr Blasen",
            "nl": "Sap heeft meer bubbels"
          },
          {
            "en": "Juice is always cold",
            "es": "El jugo siempre está frío",
            "de": "Saft ist immer kalt",
            "nl": "Sap is altijd koud"
          },
          {
            "en": "They are the same thing",
            "es": "Son lo mismo",
            "de": "Sie sind dasselbe",
            "nl": "Ze zijn hetzelfde"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "Juice is made from real fruits or vegetables, while soda is usually artificially flavored and has added bubbles.",
          "es": "El jugo se hace de frutas o vegetales reales, mientras que el refresco generalmente tiene sabor artificial y burbujas añadidas.",
          "de": "Saft wird aus echten Früchten oder Gemüse hergestellt, während Limonade normalerweise künstlich aromatisiert ist und zugesetzte Blasen hat.",
          "nl": "Sap wordt gemaakt van echte vruchten of groenten, terwijl frisdrank meestal kunstmatig gearomatiseerd is en toegevoegde bubbels heeft."
        }
      },
      {
        "question": {
          "en": "What color is cranberry juice?",
          "es": "¿De qué color es el jugo de arándano?",
          "de": "Welche Farbe hat Cranberrysaft?",
          "nl": "Welke kleur heeft veenbessensap?"
        },
        "options": [
          {
            "en": "Dark red",
            "es": "Rojo oscuro",
            "de": "Dunkelrot",
            "nl": "Donkerrood"
          },
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
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "Cranberry juice is dark red because cranberries are deep red berries.",
          "es": "El jugo de arándano es rojo oscuro porque los arándanos son bayas de color rojo profundo.",
          "de": "Cranberrysaft ist dunkelrot, weil Cranberries tiefrote Beeren sind.",
          "nl": "Veenbessensap is donkerrood omdat veenbessen dieprode bessen zijn."
        }
      },
      {
        "question": {
          "en": "Can you make juice from bananas?",
          "es": "¿Puedes hacer jugo de plátanos?",
          "de": "Kann man Saft aus Bananen machen?",
          "nl": "Kun je sap maken van bananen?"
        },
        "options": [
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
            "en": "Only if you freeze them first",
            "es": "Solo si los congelas primero",
            "de": "Nur wenn man sie zuerst einfriert",
            "nl": "Alleen als je ze eerst bevriest"
          },
          {
            "en": "Only green bananas",
            "es": "Solo plátanos verdes",
            "de": "Nur grüne Bananen",
            "nl": "Alleen groene bananen"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "Bananas can be blended into drinks, but because they're thick, the result is usually called a smoothie rather than juice.",
          "es": "Los plátanos se pueden mezclar en bebidas, pero como son espesos, el resultado generalmente se llama batido en lugar de jugo.",
          "de": "Bananen können zu Getränken gemixt werden, aber weil sie dick sind, wird das Ergebnis normalerweise Smoothie statt Saft genannt.",
          "nl": "Bananen kunnen worden gemixt tot drankjes, maar omdat ze dik zijn, wordt het resultaat meestal een smoothie genoemd in plaats van sap."
        }
      },
      {
        "question": {
          "en": "Why is orange juice good for breakfast?",
          "es": "¿Por qué es bueno el jugo de naranja para el desayuno?",
          "de": "Warum ist Orangensaft gut zum Frühstück?",
          "nl": "Waarom is sinaasappelsap goed voor het ontbijt?"
        },
        "options": [
          {
            "en": "It gives you vitamins and energy to start the day",
            "es": "Te da vitaminas y energía para comenzar el día",
            "de": "Es gibt dir Vitamine und Energie für den Tag",
            "nl": "Het geeft je vitamines en energie om de dag te beginnen"
          },
          {
            "en": "It's only good at night",
            "es": "Solo es bueno por la noche",
            "de": "Es ist nur nachts gut",
            "nl": "Het is alleen 's avonds goed"
          },
          {
            "en": "It makes you sleepy",
            "es": "Te hace tener sueño",
            "de": "Es macht dich schläfrig",
            "nl": "Het maakt je slaperig"
          },
          {
            "en": "It replaces water",
            "es": "Reemplaza el agua",
            "de": "Es ersetzt Wasser",
            "nl": "Het vervangt water"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "Orange juice is a great breakfast drink because it provides vitamins, especially vitamin C, and natural sugars that give you energy to start your day.",
          "es": "El jugo de naranja es una gran bebida para el desayuno porque proporciona vitaminas, especialmente vitamina C, y azúcares naturales que te dan energía para comenzar el día.",
          "de": "Orangensaft ist ein großartiges Frühstücksgetränk, weil er Vitamine, besonders Vitamin C, und natürliche Zucker liefert, die dir Energie für den Tag geben.",
          "nl": "Sinaasappelsap is een geweldige ontbijtdrank omdat het vitamines, vooral vitamine C, en natuurlijke suikers biedt die je energie geven om de dag te beginnen."
        }
      },
      {
        "question": {
          "en": "What tool helps you make juice at home?",
          "es": "¿Qué herramienta te ayuda a hacer jugo en casa?",
          "de": "Welches Werkzeug hilft dir, zu Hause Saft zu machen?",
          "nl": "Welk gereedschap helpt je thuis sap te maken?"
        },
        "options": [
          {
            "en": "A blender or juicer",
            "es": "Una licuadora o exprimidor",
            "de": "Ein Mixer oder Entsafter",
            "nl": "Een blender of sapcentrifuge"
          },
          {
            "en": "A broom",
            "es": "Una escoba",
            "de": "Ein Besen",
            "nl": "Een bezem"
          },
          {
            "en": "A pencil",
            "es": "Un lápiz",
            "de": "Ein Bleistift",
            "nl": "Een potlood"
          },
          {
            "en": "A pillow",
            "es": "Una almohada",
            "de": "Ein Kissen",
            "nl": "Een kussen"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "A blender or juicer is a machine that helps you extract juice from fruits and vegetables at home.",
          "es": "Una licuadora o exprimidor es una máquina que te ayuda a extraer jugo de frutas y vegetales en casa.",
          "de": "Ein Mixer oder Entsafter ist eine Maschine, die dir hilft, zu Hause Saft aus Früchten und Gemüse zu extrahieren.",
          "nl": "Een blender of sapcentrifuge is een machine die je helpt thuis sap uit vruchten en groenten te halen."
        }
      },
      {
        "question": {
          "en": "Which juice is yellow and sour?",
          "es": "¿Qué jugo es amarillo y agrio?",
          "de": "Welcher Saft ist gelb und sauer?",
          "nl": "Welk sap is geel en zuur?"
        },
        "options": [
          {
            "en": "Lemon juice",
            "es": "Jugo de limón",
            "de": "Zitronensaft",
            "nl": "Citroensap"
          },
          {
            "en": "Milk",
            "es": "Leche",
            "de": "Milch",
            "nl": "Melk"
          },
          {
            "en": "Chocolate",
            "es": "Chocolate",
            "de": "Schokolade",
            "nl": "Chocolade"
          },
          {
            "en": "Coffee",
            "es": "Café",
            "de": "Kaffee",
            "nl": "Koffie"
          }
        ],
        "correct": 0,
        "explanation": {
          "en": "Lemon juice is yellow and has a sour taste because lemons contain natural acids.",
          "es": "El jugo de limón es amarillo y tiene un sabor agrio porque los limones contienen ácidos naturales.",
          "de": "Zitronensaft ist gelb und hat einen sauren Geschmack, weil Zitronen natürliche Säuren enthalten.",
          "nl": "Citroensap is geel en heeft een zure smaak omdat citroenen natuurlijke zuren bevatten."
        }
      },
      {
        question: {
          en: "What fruit makes watermelon juice?",
          es: "¿Qué fruta hace el jugo de sandía?",
          de: "Welche Frucht macht Wassermelonensaft?",
          nl: "Welke vrucht maakt watermeloensap?"
        },
        options: [
          { en: "Watermelon", es: "Sandía", de: "Wassermelone", nl: "Watermeloen" },
          { en: "Apple", es: "Manzana", de: "Apfel", nl: "Appel" },
          { en: "Peach", es: "Durazno", de: "Pfirsich", nl: "Perzik" },
          { en: "Plum", es: "Ciruela", de: "Pflaume", nl: "Pruim" }
        ],
        correct: 0,
        explanation: {
          en: "Watermelon juice is made from watermelons, a large juicy fruit that is mostly red inside.",
          es: "El jugo de sandía se hace de sandías, una fruta grande y jugosa que es principalmente roja por dentro.",
          de: "Wassermelonensaft wird aus Wassermelonen hergestellt, einer großen saftigen Frucht, die innen hauptsächlich rot ist.",
          nl: "Watermeloensap wordt gemaakt van watermeloenen, een grote sappige vrucht die voornamelijk rood van binnen is."
        }
      },
      {
        question: {
          en: "What color is lime juice?",
          es: "¿De qué color es el jugo de lima?",
          de: "Welche Farbe hat Limettensaft?",
          nl: "Welke kleur heeft limoensap?"
        },
        options: [
          { en: "Light green", es: "Verde claro", de: "Hellgrün", nl: "Lichtgroen" },
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Black", es: "Negro", de: "Schwarz", nl: "Zwart" },
          { en: "White", es: "Blanco", de: "Weiß", nl: "Wit" }
        ],
        correct: 0,
        explanation: {
          en: "Lime juice is light green because limes are green citrus fruits.",
          es: "El jugo de lima es verde claro porque las limas son frutas cítricas verdes.",
          de: "Limettensaft ist hellgrün, weil Limetten grüne Zitrusfrüchte sind.",
          nl: "Limoensap is lichtgroen omdat limoenen groene citrusvruchten zijn."
        }
      },
      {
        question: {
          en: "Which juice can you make from berries?",
          es: "¿Qué jugo puedes hacer de bayas?",
          de: "Welchen Saft kann man aus Beeren machen?",
          nl: "Welk sap kun je van bessen maken?"
        },
        options: [
          { en: "Blueberry juice", es: "Jugo de arándano azul", de: "Blaubeersaft", nl: "Bosbessensap" },
          { en: "Onion juice", es: "Jugo de cebolla", de: "Zwiebelsaft", nl: "Uiensap" },
          { en: "Potato juice", es: "Jugo de papa", de: "Kartoffelsaft", nl: "Aardappelsap" },
          { en: "Lettuce juice", es: "Jugo de lechuga", de: "Salatsaft", nl: "Slasap" }
        ],
        correct: 0,
        explanation: {
          en: "Blueberry juice is made from blueberries, which are small blue berries.",
          es: "El jugo de arándano azul se hace de arándanos azules, que son pequeñas bayas azules.",
          de: "Blaubeersaft wird aus Blaubeeren hergestellt, die kleine blaue Beeren sind.",
          nl: "Bosbessensap wordt gemaakt van bosbessen, die kleine blauwe bessen zijn."
        }
      },
      {
        question: {
          en: "Is juice a liquid or solid?",
          es: "¿Es el jugo un líquido o sólido?",
          de: "Ist Saft eine Flüssigkeit oder fest?",
          nl: "Is sap een vloeistof of vast?"
        },
        options: [
          { en: "Liquid", es: "Líquido", de: "Flüssigkeit", nl: "Vloeistof" },
          { en: "Solid", es: "Sólido", de: "Fest", nl: "Vast" },
          { en: "Gas", es: "Gas", de: "Gas", nl: "Gas" },
          { en: "Powder", es: "Polvo", de: "Pulver", nl: "Poeder" }
        ],
        correct: 0,
        explanation: {
          en: "Juice is a liquid that you can pour and drink.",
          es: "El jugo es un líquido que puedes verter y beber.",
          de: "Saft ist eine Flüssigkeit, die man gießen und trinken kann.",
          nl: "Sap is een vloeistof die je kunt gieten en drinken."
        }
      },
      {
        question: {
          en: "What makes mango juice yellow?",
          es: "¿Qué hace que el jugo de mango sea amarillo?",
          de: "Was macht Mangosaft gelb?",
          nl: "Wat maakt mangosap geel?"
        },
        options: [
          { en: "The color of the mango fruit", es: "El color de la fruta de mango", de: "Die Farbe der Mangofrucht", nl: "De kleur van de mangovrucht" },
          { en: "Added food coloring", es: "Colorante alimentario añadido", de: "Zugesetzte Lebensmittelfarbe", nl: "Toegevoegde voedselkleurstof" },
          { en: "Sunlight", es: "Luz solar", de: "Sonnenlicht", nl: "Zonlicht" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" }
        ],
        correct: 0,
        explanation: {
          en: "Mango juice is yellow because mangoes are yellow or orange fruits inside.",
          es: "El jugo de mango es amarillo porque los mangos son frutas amarillas o naranjas por dentro.",
          de: "Mangosaft ist gelb, weil Mangos innen gelbe oder orangefarbene Früchte sind.",
          nl: "Mangosap is geel omdat mango's van binnen gele of oranje vruchten zijn."
        }
      },
      {
        question: {
          en: "Why should you wash fruits before making juice?",
          es: "¿Por qué debes lavar las frutas antes de hacer jugo?",
          de: "Warum solltest du Früchte vor dem Saftmachen waschen?",
          nl: "Waarom moet je fruit wassen voor het maken van sap?"
        },
        options: [
          { en: "To remove dirt and germs", es: "Para quitar suciedad y gérmenes", de: "Um Schmutz und Keime zu entfernen", nl: "Om vuil en kiemen te verwijderen" },
          { en: "To make them bigger", es: "Para hacerlas más grandes", de: "Um sie größer zu machen", nl: "Om ze groter te maken" },
          { en: "To change their color", es: "Para cambiar su color", de: "Um ihre Farbe zu ändern", nl: "Om hun kleur te veranderen" },
          { en: "To make them sweeter", es: "Para hacerlas más dulces", de: "Um sie süßer zu machen", nl: "Om ze zoeter te maken" }
        ],
        correct: 0,
        explanation: {
          en: "We wash fruits before making juice to remove dirt, germs, and chemicals so the juice is clean and safe to drink.",
          es: "Lavamos las frutas antes de hacer jugo para quitar suciedad, gérmenes y químicos para que el jugo sea limpio y seguro de beber.",
          de: "Wir waschen Früchte vor dem Saftmachen, um Schmutz, Keime und Chemikalien zu entfernen, damit der Saft sauber und sicher zu trinken ist.",
          nl: "We wassen fruit voor het maken van sap om vuil, kiemen en chemicaliën te verwijderen zodat het sap schoon en veilig is om te drinken."
        }
      },
      {
        question: {
          en: "Which juice comes from a tropical fruit with spiky skin?",
          es: "¿Qué jugo proviene de una fruta tropical con piel espinosa?",
          de: "Welcher Saft kommt von einer tropischen Frucht mit stacheliger Haut?",
          nl: "Welk sap komt van een tropische vrucht met stekelige schil?"
        },
        options: [
          { en: "Pineapple juice", es: "Jugo de piña", de: "Ananassaft", nl: "Ananassap" },
          { en: "Apple juice", es: "Jugo de manzana", de: "Apfelsaft", nl: "Appelsap" },
          { en: "Carrot juice", es: "Jugo de zanahoria", de: "Karottensaft", nl: "Wortelsap" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" }
        ],
        correct: 0,
        explanation: {
          en: "Pineapple juice comes from pineapples, which have rough, spiky skin on the outside.",
          es: "El jugo de piña proviene de las piñas, que tienen piel áspera y espinosa por fuera.",
          de: "Ananassaft kommt von Ananas, die außen eine raue, stachelige Haut haben.",
          nl: "Ananassap komt van ananassen, die een ruwe, stekelige schil aan de buitenkant hebben."
        }
      },
      {
        question: {
          en: "What should juice taste like?",
          es: "¿A qué debe saber el jugo?",
          de: "Wie sollte Saft schmecken?",
          nl: "Hoe moet sap smaken?"
        },
        options: [
          { en: "Like the fruit or vegetable it's made from", es: "Como la fruta o vegetal del que está hecho", de: "Wie die Frucht oder das Gemüse, aus dem er gemacht ist", nl: "Zoals de vrucht of groente waarvan het gemaakt is" },
          { en: "Like soap", es: "Como jabón", de: "Wie Seife", nl: "Zoals zeep" },
          { en: "Like paper", es: "Como papel", de: "Wie Papier", nl: "Zoals papier" },
          { en: "Like plastic", es: "Como plástico", de: "Wie Plastik", nl: "Zoals plastic" }
        ],
        correct: 0,
        explanation: {
          en: "Good juice should taste like the fruits or vegetables it's made from, fresh and natural.",
          es: "El buen jugo debe saber como las frutas o vegetales de los que está hecho, fresco y natural.",
          de: "Guter Saft sollte wie die Früchte oder das Gemüse schmecken, aus dem er gemacht ist, frisch und natürlich.",
          nl: "Goed sap moet smaken naar de vruchten of groenten waarvan het gemaakt is, vers en natuurlijk."
        }
      },
      {
        question: {
          en: "Which juice is good for your eyes?",
          es: "¿Qué jugo es bueno para tus ojos?",
          de: "Welcher Saft ist gut für deine Augen?",
          nl: "Welk sap is goed voor je ogen?"
        },
        options: [
          { en: "Carrot juice", es: "Jugo de zanahoria", de: "Karottensaft", nl: "Wortelsap" },
          { en: "Coffee", es: "Café", de: "Kaffee", nl: "Koffie" },
          { en: "Soda", es: "Refresco", de: "Limonade", nl: "Frisdrank" },
          { en: "Salt water", es: "Agua salada", de: "Salzwasser", nl: "Zout water" }
        ],
        correct: 0,
        explanation: {
          en: "Carrot juice is good for your eyes because carrots contain vitamin A, which helps you see better.",
          es: "El jugo de zanahoria es bueno para tus ojos porque las zanahorias contienen vitamina A, que te ayuda a ver mejor.",
          de: "Karottensaft ist gut für deine Augen, weil Karotten Vitamin A enthalten, das dir hilft, besser zu sehen.",
          nl: "Wortelsap is goed voor je ogen omdat wortels vitamine A bevatten, wat je helpt beter te zien."
        }
      },
      {
        question: {
          en: "What happens if you leave juice out of the refrigerator too long?",
          es: "¿Qué pasa si dejas el jugo fuera del refrigerador demasiado tiempo?",
          de: "Was passiert, wenn du Saft zu lange außerhalb des Kühlschranks lässt?",
          nl: "Wat gebeurt er als je sap te lang buiten de koelkast laat?"
        },
        options: [
          { en: "It can spoil and taste bad", es: "Puede estropearse y saber mal", de: "Er kann verderben und schlecht schmecken", nl: "Het kan bederven en vies smaken" },
          { en: "It turns into ice cream", es: "Se convierte en helado", de: "Er wird zu Eiscreme", nl: "Het wordt ijs" },
          { en: "It becomes healthier", es: "Se vuelve más saludable", de: "Er wird gesünder", nl: "Het wordt gezonder" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
        ],
        correct: 0,
        explanation: {
          en: "If juice is left out of the refrigerator for too long, it can spoil, grow bacteria, and taste bad or make you sick.",
          es: "Si el jugo se deja fuera del refrigerador demasiado tiempo, puede estropearse, cultivar bacterias y saber mal o enfermarte.",
          de: "Wenn Saft zu lange außerhalb des Kühlschranks bleibt, kann er verderben, Bakterien entwickeln und schlecht schmecken oder dich krank machen.",
          nl: "Als sap te lang buiten de koelkast wordt gelaten, kan het bederven, bacteriën kweken en vies smaken of je ziek maken."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
