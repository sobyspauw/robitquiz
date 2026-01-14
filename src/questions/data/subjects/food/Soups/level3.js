// Soups Quiz - Level 3
(function() {
  const level3 = {
    name: {
      en: "Soups Level 3",
      es: "Soups Nivel 3",
      de: "Soups Stufe 3",
      nl: "Soups Level 3"
    },
    questions: [
      {
        question: {
          en: "What is the main liquid component in most soups?",
          es: "¿Cuál es el componente líquido principal en la mayoría de las sopas?",
          de: "Was ist die wichtigste flüssige Komponente in den meisten Suppen?",
          nl: "Wat is de belangrijkste vloeistofcomponent in de meeste soepen?"
        },
        options: [
          { en: "Water or stock", es: "Agua o caldo", de: "Wasser oder Brühe", nl: "Water of bouillon" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Wine", es: "Vino", de: "Wein", nl: "Wijn" },
          { en: "Oil", es: "Aceite", de: "Öl", nl: "Olie" }
        ],
        correct: 0,
        explanation: {
          en: "Water or stock forms the base of most soups, providing the liquid foundation for other ingredients.",
          es: "El agua o caldo forma la base de la mayoría de las sopas, proporcionando la base líquida para otros ingredientes.",
          de: "Wasser oder Brühe bildet die Basis der meisten Suppen und stellt die flüssige Grundlage für andere Zutaten dar.",
          nl: "Water of bouillon vormt de basis van de meeste soepen en biedt de vloeibare basis voor andere ingrediënten."
        }
      },
      {
        question: {
          en: "Which vegetable is commonly used as a base for many soup recipes?",
          es: "¿Qué verdura se usa comúnmente como base para muchas recetas de sopa?",
          de: "Welches Gemüse wird häufig als Basis für viele Suppenrezepte verwendet?",
          nl: "Welke groente wordt vaak gebruikt als basis voor veel soeprecepten?"
        },
        options: [
          { en: "Carrot", es: "Zanahoria", de: "Karotte", nl: "Wortel" },
          { en: "Onion", es: "Cebolla", de: "Zwiebel", nl: "Ui" },
          { en: "Potato", es: "Papa", de: "Kartoffel", nl: "Aardappel" },
          { en: "Lettuce", es: "Lechuga", de: "Salat", nl: "Sla" }
        ],
        correct: 1,
        explanation: {
          en: "Onions are fundamental in soup-making as they provide a sweet, aromatic base when sautéed, forming the foundation of flavor.",
          es: "Las cebollas son fundamentales en la preparación de sopas ya que proporcionan una base dulce y aromática cuando se saltean, formando la base del sabor.",
          de: "Zwiebeln sind grundlegend für die Suppenherstellung, da sie beim Anbraten eine süße, aromatische Basis bilden und das Geschmacksfundament schaffen.",
          nl: "Uien zijn fundamenteel bij het maken van soepen omdat ze een zoete, aromatische basis vormen wanneer ze worden gesauteerd, waardoor de smaakbasis wordt gevormd."
        }
      },
      {
        question: {
          en: "What temperature should soup typically be served at?",
          es: "¿A qué temperatura se debe servir típicamente la sopa?",
          de: "Bei welcher Temperatur sollte Suppe normalerweise serviert werden?",
          nl: "Op welke temperatuur moet soep doorgaans worden geserveerd?"
        },
        options: [
          { en: "Cold", es: "Fría", de: "Kalt", nl: "Koud" },
          { en: "Room temperature", es: "Temperatura ambiente", de: "Zimmertemperatur", nl: "Kamertemperatuur" },
          { en: "Hot", es: "Caliente", de: "Heiß", nl: "Heet" },
          { en: "Frozen", es: "Congelada", de: "Gefroren", nl: "Bevroren" }
        ],
        correct: 2,
        explanation: {
          en: "Most soups are served hot to enhance flavors and provide comfort, though some soups like gazpacho are meant to be served cold.",
          es: "La mayoría de las sopas se sirven calientes para realzar los sabores y brindar comodidad, aunque algunas sopas como el gazpacho están destinadas a servirse frías.",
          de: "Die meisten Suppen werden heiß serviert, um die Aromen zu verstärken und Komfort zu bieten, obwohl einige Suppen wie Gazpacho kalt serviert werden sollen.",
          nl: "De meeste soepen worden heet geserveerd om smaken te versterken en comfort te bieden, hoewel sommige soepen zoals gazpacho bedoeld zijn om koud te worden geserveerd."
        }
      },
      {
        question: {
          en: "Which kitchen tool is essential for making smooth, creamy soups?",
          es: "¿Qué herramienta de cocina es esencial para hacer sopas suaves y cremosas?",
          de: "Welches Küchengerät ist für die Herstellung glatter, cremiger Suppen unerlässlich?",
          nl: "Welk keukengerei is essentieel voor het maken van gladde, romige soepen?"
        },
        options: [
          { en: "Whisk", es: "Batidor", de: "Schneebesen", nl: "Garde" },
          { en: "Blender", es: "Licuadora", de: "Mixer", nl: "Blender" },
          { en: "Grater", es: "Rallador", de: "Reibe", nl: "Rasp" },
          { en: "Sieve", es: "Colador", de: "Sieb", nl: "Zeef" }
        ],
        correct: 1,
        explanation: {
          en: "A blender is essential for pureeing vegetables and creating smooth, creamy soup textures by breaking down ingredients completely.",
          es: "Una licuadora es esencial para hacer puré de verduras y crear texturas de sopa suaves y cremosas al descomponer completamente los ingredientes.",
          de: "Ein Mixer ist unerlässlich, um Gemüse zu pürieren und glatte, cremige Suppentexturen zu schaffen, indem die Zutaten vollständig zerkleinert werden.",
          nl: "Een blender is essentieel voor het pureren van groenten en het creëren van gladde, romige soeptexturen door ingrediënten volledig te verwerken."
        }
      },
      {
        question: {
          en: "What is chicken noodle soup traditionally used for?",
          es: "¿Para qué se usa tradicionalmente la sopa de pollo con fideos?",
          de: "Wofür wird Hühnernudelsuppe traditionell verwendet?",
          nl: "Waarvoor wordt kippennoedelsoep traditioneel gebruikt?"
        },
        options: [
          { en: "Celebration meals", es: "Comidas de celebración", de: "Festmahlzeiten", nl: "Feestmaaltijden" },
          { en: "Summer refreshment", es: "Refresco de verano", de: "Sommererfrischung", nl: "Zomerverfrissing" },
          { en: "Comfort food when sick", es: "Comida reconfortante cuando se está enfermo", de: "Komfortessen bei Krankheit", nl: "Troostvoedsel bij ziekte" },
          { en: "Diet food", es: "Comida dietética", de: "Diätnahrung", nl: "Dieetvoedsel" }
        ],
        correct: 2,
        explanation: {
          en: "Chicken noodle soup is traditionally considered comfort food, especially for people who are ill, as it's easy to digest and provides warmth and nutrients.",
          es: "La sopa de pollo con fideos se considera tradicionalmente comida reconfortante, especialmente para personas enfermas, ya que es fácil de digerir y proporciona calor y nutrientes.",
          de: "Hühnernudelsuppe gilt traditionell als Komfortessen, besonders für kranke Menschen, da sie leicht verdaulich ist und Wärme sowie Nährstoffe bietet.",
          nl: "Kippennoedelsoep wordt traditioneel beschouwd als troostvoedsel, vooral voor zieke mensen, omdat het gemakkelijk verteerbaar is en warmte en voedingsstoffen biedt."
        }
      },
      {
        question: {
          en: "What is the French term for a clear soup made from meat or vegetables?",
          es: "¿Cuál es el término francés para una sopa clara hecha de carne o verduras?",
          de: "Wie lautet der französische Begriff für eine klare Suppe aus Fleisch oder Gemüse?",
          nl: "Wat is de Franse term voor een heldere soep gemaakt van vlees of groenten?"
        },
        options: [
          { en: "Bisque", es: "Bisque", de: "Bisque", nl: "Bisque" },
          { en: "Consommé", es: "Consommé", de: "Consommé", nl: "Consommé" },
          { en: "Potage", es: "Potage", de: "Potage", nl: "Potage" },
          { en: "Velouté", es: "Velouté", de: "Velouté", nl: "Velouté" }
        ],
        correct: 1,
        explanation: {
          en: "Consommé is a clear soup made by clarifying a rich stock, resulting in a transparent, flavorful broth free of particles.",
          es: "El consommé es una sopa clara hecha clarificando un caldo rico, resultando en un caldo transparente y sabroso libre de partículas.",
          de: "Consommé ist eine klare Suppe, die durch Klärung einer reichhaltigen Brühe hergestellt wird, was zu einer transparenten, geschmackvollen Brühe ohne Partikel führt.",
          nl: "Consommé is een heldere soep gemaakt door het zuiveren van een rijke bouillon, wat resulteert in een transparante, smaakvolle bouillon zonder deeltjes."
        }
      },
      {
        question: {
          en: "Which herb is commonly added to tomato soup?",
          es: "¿Qué hierba se agrega comúnmente a la sopa de tomate?",
          de: "Welches Kraut wird häufig zu Tomatensuppe hinzugefügt?",
          nl: "Welk kruid wordt vaak toegevoegd aan tomatensoep?"
        },
        options: [
          { en: "Mint", es: "Menta", de: "Minze", nl: "Munt" },
          { en: "Basil", es: "Albahaca", de: "Basilikum", nl: "Basilicum" },
          { en: "Sage", es: "Salvia", de: "Salbei", nl: "Salie" },
          { en: "Rosemary", es: "Romero", de: "Rosmarin", nl: "Rozemarijn" }
        ],
        correct: 1,
        explanation: {
          en: "Basil is commonly paired with tomatoes as it complements the fruit's flavor perfectly, creating a classic combination in tomato soup.",
          es: "La albahaca se combina comúnmente con tomates ya que complementa perfectamente el sabor de la fruta, creando una combinación clásica en la sopa de tomate.",
          de: "Basilikum wird häufig mit Tomaten kombiniert, da es den Geschmack der Frucht perfekt ergänzt und eine klassische Kombination in Tomatensuppe schafft.",
          nl: "Basilicum wordt vaak gecombineerd met tomaten omdat het de smaak van de vrucht perfect aanvult en een klassieke combinatie vormt in tomatensoep."
        }
      },
      {
        question: {
          en: "What is the main ingredient in minestrone soup?",
          es: "¿Cuál es el ingrediente principal en la sopa minestrone?",
          de: "Was ist die Hauptzutat in Minestrone-Suppe?",
          nl: "Wat is het hoofdingrediënt in minestrone soep?"
        },
        options: [
          { en: "Meat", es: "Carne", de: "Fleisch", nl: "Vlees" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Vegetables", es: "Verduras", de: "Gemüse", nl: "Groenten" },
          { en: "Dairy", es: "Lácteos", de: "Milchprodukte", nl: "Zuivel" }
        ],
        correct: 2,
        explanation: {
          en: "Minestrone is an Italian vegetable soup that typically contains a variety of seasonal vegetables, beans, and sometimes pasta or rice.",
          es: "El minestrone es una sopa italiana de verduras que típicamente contiene una variedad de verduras de temporada, frijoles y a veces pasta o arroz.",
          de: "Minestrone ist eine italienische Gemüsesuppe, die typischerweise eine Vielzahl von saisonalem Gemüse, Bohnen und manchmal Nudeln oder Reis enthält.",
          nl: "Minestrone is een Italiaanse groentesoep die doorgaans een verscheidenheid aan seizoensgroenten, bonen en soms pasta of rijst bevat."
        }
      },
      {
        question: {
          en: "How long should you typically simmer chicken stock?",
          es: "¿Cuánto tiempo debes cocinar a fuego lento típicamente el caldo de pollo?",
          de: "Wie lange sollte man Hühnerbrühe normalerweise köcheln lassen?",
          nl: "Hoe lang moet je kippenbouillon doorgaans laten sudderen?"
        },
        options: [
          { en: "30 min", es: "30 minutos", de: "30 Minuten", nl: "30 minuten" },
          { en: "1 hour", es: "1 hora", de: "1 Stunde", nl: "1 uur" },
          { en: "2-3 hours", es: "2-3 horas", de: "2-3 Stunden", nl: "2-3 uur" },
          { en: "6-8 hours", es: "6-8 horas", de: "6-8 Stunden", nl: "6-8 uur" }
        ],
        correct: 2,
        explanation: {
          en: "Chicken stock should simmer for 2-3 hours to extract maximum flavor and nutrients from the bones and meat while developing a rich taste.",
          es: "El caldo de pollo debe cocinarse a fuego lento durante 2-3 horas para extraer el máximo sabor y nutrientes de los huesos y la carne mientras desarrolla un sabor rico.",
          de: "Hühnerbrühe sollte 2-3 Stunden köcheln, um maximalen Geschmack und Nährstoffe aus den Knochen und dem Fleisch zu extrahieren und einen reichen Geschmack zu entwickeln.",
          nl: "Kippenbouillon moet 2-3 uur sudderen om maximale smaak en voedingsstoffen uit de botten en het vlees te halen en een rijke smaak te ontwikkelen."
        }
      },
      {
        question: {
          en: "What makes a soup 'cream-based'?",
          es: "¿Qué hace que una sopa sea 'a base de crema'?",
          de: "Was macht eine Suppe 'sahnebasiert'?",
          nl: "Wat maakt een soep 'op basis van room'?"
        },
        options: [
          { en: "Addition of heavy cream or milk", es: "Adición de crema espesa o leche", de: "Zugabe von Sahne oder Milch", nl: "Toevoeging van slagroom of melk" },
          { en: "White colored ingredients", es: "Ingredientes de color blanco", de: "Weiße Zutaten", nl: "Witte ingrediënten" },
          { en: "Smooth texture only", es: "Solo textura suave", de: "Nur glatte Textur", nl: "Alleen gladde textuur" },
          { en: "Cold temperature", es: "Temperatura fría", de: "Kalte Temperatur", nl: "Koude temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Cream-based soups get their characteristic richness and texture from the addition of dairy products like heavy cream, milk, or butter.",
          es: "Las sopas a base de crema obtienen su riqueza y textura características de la adición de productos lácteos como crema espesa, leche o mantequilla.",
          de: "Sahnebasierte Suppen erhalten ihre charakteristische Reichhaltigkeit und Textur durch die Zugabe von Milchprodukten wie Sahne, Milch oder Butter.",
          nl: "Op room gebaseerde soepen krijgen hun karakteristieke rijkdom en textuur door de toevoeging van zuivelproducten zoals slagroom, melk of boter."
        }
      },
      {
        question: {
          en: "Which soup is traditionally served cold?",
          es: "¿Qué sopa se sirve tradicionalmente fría?",
          de: "Welche Suppe wird traditionell kalt serviert?",
          nl: "Welke soep wordt traditioneel koud geserveerd?"
        },
        options: [
          { en: "Chicken noodle", es: "Pollo con fideos", de: "Hühnernudel", nl: "Kippennoedel" },
          { en: "Gazpacho", es: "Gazpacho", de: "Gazpacho", nl: "Gazpacho" },
          { en: "Mushroom", es: "Champiñones", de: "Pilz", nl: "Paddenstoel" },
          { en: "Onion", es: "Cebolla", de: "Zwiebel", nl: "Ui" }
        ],
        correct: 1,
        explanation: {
          en: "Gazpacho is a Spanish cold soup made primarily from tomatoes and vegetables, traditionally served chilled especially during hot weather.",
          es: "El gazpacho es una sopa fría española hecha principalmente de tomates y verduras, tradicionalmente servida fría especialmente durante el clima caluroso.",
          de: "Gazpacho ist eine spanische kalte Suppe, die hauptsächlich aus Tomaten und Gemüse besteht und traditionell gekühlt serviert wird, besonders bei heißem Wetter.",
          nl: "Gazpacho is een Spaanse koude soep gemaakt voornamelijk van tomaten en groenten, traditioneel gekoeld geserveerd, vooral bij warm weer."
        }
      },
      {
        question: {
          en: "What is the purpose of adding salt to soup?",
          es: "¿Cuál es el propósito de agregar sal a la sopa?",
          de: "Was ist der Zweck, Salz zur Suppe hinzuzufügen?",
          nl: "Wat is het doel van het toevoegen van zout aan soep?"
        },
        options: [
          { en: "To make it thicker", es: "Para hacerla más espesa", de: "Um sie dicker zu machen", nl: "Om het dikker te maken" },
          { en: "To enhance flavors", es: "Para realzar sabores", de: "Um Aromen zu verstärken", nl: "Om smaken te versterken" },
          { en: "To change color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om kleur te veranderen" },
          { en: "To preserve it longer", es: "Para conservarla más tiempo", de: "Um sie länger haltbar zu machen", nl: "Om het langer te bewaren" }
        ],
        correct: 1,
        explanation: {
          en: "Salt enhances and balances the natural flavors of ingredients in soup, making all the other tastes more pronounced and enjoyable.",
          es: "La sal realza y equilibra los sabores naturales de los ingredientes en la sopa, haciendo que todos los otros sabores sean más pronunciados y agradables.",
          de: "Salz verstärkt und balanciert die natürlichen Aromen der Zutaten in der Suppe und macht alle anderen Geschmäcker ausgeprägter und angenehmer.",
          nl: "Zout versterkt en balanceert de natuurlijke smaken van ingrediënten in soep, waardoor alle andere smaken meer uitgesproken en aangenaam worden."
        }
      },
      {
        question: {
          en: "What is the difference between soup and stew?",
          es: "¿Cuál es la diferencia entre sopa y guiso?",
          de: "Was ist der Unterschied zwischen Suppe und Eintopf?",
          nl: "Wat is het verschil tussen soep en stoofschotel?"
        },
        options: [
          { en: "Soup has more liquid, stew is thicker", es: "La sopa tiene más líquido, el guiso es más espeso", de: "Suppe hat mehr Flüssigkeit, Eintopf ist dicker", nl: "Soep heeft meer vloeistof, stoofschotel is dikker" },
          { en: "Soup is hot, stew is cold", es: "La sopa está caliente, el guiso está frío", de: "Suppe ist heiß, Eintopf ist kalt", nl: "Soep is heet, stoofschotel is koud" },
          { en: "Soup has meat, stew has vegetables", es: "La sopa tiene carne, el guiso tiene verduras", de: "Suppe hat Fleisch, Eintopf hat Gemüse", nl: "Soep heeft vlees, stoofschotel heeft groenten" },
          { en: "No difference", es: "No hay diferencia", de: "Kein Unterschied", nl: "Geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "The main difference is consistency: soup has more liquid and is generally thinner, while stew has less liquid and a thicker, more substantial consistency.",
          es: "La principal diferencia es la consistencia: la sopa tiene más líquido y generalmente es más delgada, mientras que el guiso tiene menos líquido y una consistencia más espesa y sustancial.",
          de: "Der Hauptunterschied ist die Konsistenz: Suppe hat mehr Flüssigkeit und ist generell dünner, während Eintopf weniger Flüssigkeit und eine dickere, substantiellere Konsistenz hat.",
          nl: "Het hoofdverschil is de consistentie: soep heeft meer vloeistof en is over het algemeen dunner, terwijl stoofschotel minder vloeistof heeft en een dikkere, meer substantiële consistentie."
        }
      },
      {
        question: {
          en: "Which utensil is best for eating soup?",
          es: "¿Qué utensilio es mejor para comer sopa?",
          de: "Welches Besteck ist am besten zum Suppenessen geeignet?",
          nl: "Welk bestek is het beste voor het eten van soep?"
        },
        options: [
          { en: "Fork", es: "Tenedor", de: "Gabel", nl: "Vork" },
          { en: "Spoon", es: "Cuchara", de: "Löffel", nl: "Lepel" },
          { en: "Knife", es: "Cuchillo", de: "Messer", nl: "Mes" },
          { en: "Chopsticks", es: "Palillos", de: "Essstäbchen", nl: "Eetstokjes" }
        ],
        correct: 1,
        explanation: {
          en: "A spoon is the ideal utensil for eating soup as it can hold liquid and allows you to consume both the broth and solid ingredients comfortably.",
          es: "Una cuchara es el utensilio ideal para comer sopa ya que puede contener líquido y te permite consumir tanto el caldo como los ingredientes sólidos cómodamente.",
          de: "Ein Löffel ist das ideale Besteck zum Suppenessen, da er Flüssigkeit halten kann und es ermöglicht, sowohl die Brühe als auch feste Zutaten bequem zu konsumieren.",
          nl: "Een lepel is het ideale bestek voor het eten van soep omdat het vloeistof kan vasthouden en je in staat stelt zowel de bouillon als vaste ingrediënten comfortabel te consumeren."
        }
      },
      {
        question: {
          en: "What is bouillon?",
          es: "¿Qué es el bouillon?",
          de: "Was ist Bouillon?",
          nl: "Wat is bouillon?"
        },
        options: [
          { en: "Pasta type", es: "Un tipo de pasta", de: "Eine Art Nudeln", nl: "Een soort pasta" },
          { en: "A cooking method", es: "Un método de cocción", de: "Eine Kochmethode", nl: "Een kookmethode" },
          { en: "A clear broth or stock", es: "Un caldo claro", de: "Eine klare Brühe", nl: "Een heldere bouillon" },
          { en: "A soup bowl", es: "Un tazón de sopa", de: "Eine Suppenschüssel", nl: "Een soepkom" }
        ],
        correct: 2,
        explanation: {
          en: "Bouillon is a clear, seasoned broth made by simmering meat, bones, or vegetables in water, often used as a base for soups and sauces.",
          es: "El bouillon es un caldo claro y sazonado hecho cocinando a fuego lento carne, huesos o verduras en agua, a menudo usado como base para sopas y salsas.",
          de: "Bouillon ist eine klare, gewürzte Brühe, die durch Köcheln von Fleisch, Knochen oder Gemüse in Wasser hergestellt wird und oft als Basis für Suppen und Saucen verwendet wird.",
          nl: "Bouillon is een heldere, gekruide bouillon gemaakt door vlees, botten of groenten in water te laten sudderen, vaak gebruikt als basis voor soepen en sauzen."
        }
      },
      {
        question: {
          en: "Which vegetable is often used to add sweetness to soup?",
          es: "¿Qué verdura se usa a menudo para agregar dulzura a la sopa?",
          de: "Welches Gemüse wird oft verwendet, um Suppe Süße zu verleihen?",
          nl: "Welke groente wordt vaak gebruikt om zoetheid aan soep toe te voegen?"
        },
        options: [
          { en: "Spinach", es: "Espinaca", de: "Spinat", nl: "Spinazie" },
          { en: "Carrot", es: "Zanahoria", de: "Karotte", nl: "Wortel" },
          { en: "Broccoli", es: "Brócoli", de: "Brokkoli", nl: "Broccoli" },
          { en: "Cabbage", es: "Repollo", de: "Kohl", nl: "Kool" }
        ],
        correct: 1,
        explanation: {
          en: "Carrots add natural sweetness to soups and also provide a beautiful color and additional nutrients like beta-carotene.",
          es: "Las zanahorias agregan dulzura natural a las sopas y también proporcionan un hermoso color y nutrientes adicionales como el betacaroteno.",
          de: "Karotten verleihen Suppen natürliche Süße und bieten auch eine schöne Farbe und zusätzliche Nährstoffe wie Beta-Carotin.",
          nl: "Wortels voegen natuurlijke zoetheid toe aan soepen en zorgen ook voor een mooie kleur en extra voedingsstoffen zoals bètacaroteen."
        }
      },
      {
        question: {
          en: "What should you do before adding dairy to hot soup?",
          es: "¿Qué debes hacer antes de agregar lácteos a la sopa caliente?",
          de: "Was sollten Sie tun, bevor Sie Milchprodukte zu heißer Suppe hinzufügen?",
          nl: "Wat moet je doen voordat je zuivel toevoegt aan hete soep?"
        },
        options: [
          { en: "Add it immediately while very hot", es: "Agregarlo inmediatamente mientras está muy caliente", de: "Es sofort hinzufügen, während es sehr heiß ist", nl: "Het onmiddellijk toevoegen terwijl het zeer heet is" },
          { en: "Lower the temperature first", es: "Bajar la temperatura primero", de: "Zuerst die Temperatur senken", nl: "Eerst de temperatuur verlagen" },
          { en: "Freeze the dairy first", es: "Congelar primero los lácteos", de: "Zuerst die Milchprodukte einfrieren", nl: "Eerst de zuivel bevriezen" },
          { en: "Add salt first", es: "Agregar sal primero", de: "Zuerst Salz hinzufügen", nl: "Eerst zout toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "You should lower the temperature before adding dairy to prevent curdling. High heat can cause milk and cream to separate and form clumps.",
          es: "Debes bajar la temperatura antes de agregar lácteos para prevenir que se corte. El calor alto puede causar que la leche y la crema se separen y formen grumos.",
          de: "Sie sollten die Temperatur senken, bevor Sie Milchprodukte hinzufügen, um Gerinnung zu verhindern. Hohe Hitze kann dazu führen, dass Milch und Sahne sich trennen und Klumpen bilden.",
          nl: "Je moet de temperatuur verlagen voordat je zuivel toevoegt om klonteren te voorkomen. Hoge hitte kan ervoor zorgen dat melk en room scheiden en klontjes vormen."
        }
      },
      {
        question: {
          en: "Which type of soup is pho?",
          es: "¿Qué tipo de sopa es el pho?",
          de: "Welche Art von Suppe ist Pho?",
          nl: "Wat voor soort soep is pho?"
        },
        options: [
          { en: "Italian pasta soup", es: "Sopa italiana de pasta", de: "Italienische Nudelsuppe", nl: "Italiaanse pastasoep" },
          { en: "French onion soup", es: "Sopa francesa de cebolla", de: "Französische Zwiebelsuppe", nl: "Franse uiensoep" },
          { en: "Vietnamese noodle soup", es: "Sopa vietnamita de fideos", de: "Vietnamesische Nudelsuppe", nl: "Vietnamese noedelsoep" },
          { en: "Mexican bean soup", es: "Sopa mexicana de frijoles", de: "Mexikanische Bohnensuppe", nl: "Mexicaanse bonensoep" }
        ],
        correct: 2,
        explanation: {
          en: "Pho is a traditional Vietnamese noodle soup consisting of broth, rice noodles, herbs, and meat, usually beef or chicken.",
          es: "El pho es una sopa tradicional vietnamita de fideos que consiste en caldo, fideos de arroz, hierbas y carne, generalmente res o pollo.",
          de: "Pho ist eine traditionelle vietnamesische Nudelsuppe bestehend aus Brühe, Reisnudeln, Kräutern und Fleisch, normalerweise Rind oder Huhn.",
          nl: "Pho is een traditionele Vietnamese noedelsoep bestaande uit bouillon, rijstnoedels, kruiden en vlees, meestal rundvlees of kip."
        }
      },
      {
        question: {
          en: "What gives miso soup its distinctive flavor?",
          es: "¿Qué le da a la sopa de miso su sabor distintivo?",
          de: "Was verleiht der Miso-Suppe ihren charakteristischen Geschmack?",
          nl: "Wat geeft misosoep zijn kenmerkende smaak?"
        },
        options: [
          { en: "Fermented soybean paste", es: "Pasta de soja fermentada", de: "Fermentierte Sojabohnenpaste", nl: "Gefermenteerde sojabonenpasta" },
          { en: "Fish sauce", es: "Salsa de pescado", de: "Fischsauce", nl: "Vissaus" },
          { en: "Tomato paste", es: "Pasta de tomate", de: "Tomatenpaste", nl: "Tomatenpasta" },
          { en: "Coconut milk", es: "Leche de coco", de: "Kokosmilch", nl: "Kokosmelk" }
        ],
        correct: 0,
        explanation: {
          en: "Miso soup gets its distinctive umami flavor from miso paste, which is made from fermented soybeans and provides a rich, salty, complex taste.",
          es: "La sopa de miso obtiene su sabor umami distintivo de la pasta de miso, que está hecha de soja fermentada y proporciona un sabor rico, salado y complejo.",
          de: "Miso-Suppe erhält ihren charakteristischen Umami-Geschmack von Miso-Paste, die aus fermentierten Sojabohnen hergestellt wird und einen reichen, salzigen, komplexen Geschmack bietet.",
          nl: "Misosoep krijgt zijn kenmerkende umami-smaak van misopasta, die gemaakt is van gefermenteerde sojabonen en een rijke, zoute, complexe smaak biedt."
        }
      },
      {
        question: {
          en: "How should you properly taste soup while cooking?",
          es: "¿Cómo debes probar adecuadamente la sopa mientras cocinas?",
          de: "Wie sollten Sie die Suppe beim Kochen richtig probieren?",
          nl: "Hoe moet je soep goed proeven tijdens het koken?"
        },
        options: [
          { en: "Drink directly from the pot", es: "Beber directamente de la olla", de: "Direkt aus dem Topf trinken", nl: "Direct uit de pan drinken" },
          { en: "Use a clean spoon each time", es: "Usar una cuchara limpia cada vez", de: "Jedes Mal einen sauberen Löffel verwenden", nl: "Elke keer een schone lepel gebruiken" },
          { en: "Use your finger", es: "Usar tu dedo", de: "Den Finger verwenden", nl: "Je vinger gebruiken" },
          { en: "Wait until completely finished", es: "Esperar hasta que esté completamente terminada", de: "Warten bis es vollständig fertig ist", nl: "Wachten tot het helemaal klaar is" }
        ],
        correct: 1,
        explanation: {
          en: "Always use a clean spoon to taste soup while cooking to maintain hygiene and prevent contamination. Never put a used spoon back into the pot.",
          es: "Siempre usa una cuchara limpia para probar la sopa mientras cocinas para mantener la higiene y prevenir la contaminación. Nunca pongas una cuchara usada de vuelta en la olla.",
          de: "Verwenden Sie immer einen sauberen Löffel, um die Suppe beim Kochen zu probieren, um die Hygiene zu wahren und Kontamination zu verhindern. Stecken Sie niemals einen benutzten Löffel zurück in den Topf.",
          nl: "Gebruik altijd een schone lepel om soep te proeven tijdens het koken om hygiëne te behouden en besmetting te voorkomen. Stop nooit een gebruikte lepel terug in de pan."
        }
      },
      {
        question: {
          en: "What type of pot is best for making soup?",
          es: "¿Qué tipo de olla es mejor para hacer sopa?",
          de: "Welcher Topf ist am besten zum Suppenkochen geeignet?",
          nl: "Welke pan is het beste voor het maken van soep?"
        },
        options: [
          { en: "Frying pan", es: "Sartén", de: "Bratpfanne", nl: "Koekenpan" },
          { en: "Large pot", es: "Olla grande", de: "Großer Topf", nl: "Grote pan" },
          { en: "Baking dish", es: "Fuente para hornear", de: "Backform", nl: "Ovenschaal" },
          { en: "Small saucepan", es: "Cacerola pequeña", de: "Kleiner Kochtopf", nl: "Kleine steelpan" }
        ],
        correct: 1,
        explanation: {
          en: "A large pot provides ample space for ingredients to simmer together, allowing flavors to blend properly while preventing spillage.",
          es: "Una olla grande proporciona amplio espacio para que los ingredientes se cocinen juntos, permitiendo que los sabores se mezclen adecuadamente mientras previene derrames.",
          de: "Ein großer Topf bietet ausreichend Platz für die Zutaten zum gemeinsamen Köcheln und ermöglicht eine ordnungsgemäße Geschmacksentwicklung.",
          nl: "Een grote pan biedt voldoende ruimte voor ingrediënten om samen te sudderen, waardoor smaken goed kunnen mengen en morsen wordt voorkomen."
        }
      },
      {
        question: {
          en: "Which soup contains pasta and beans?",
          es: "¿Qué sopa contiene pasta y frijoles?",
          de: "Welche Suppe enthält Nudeln und Bohnen?",
          nl: "Welke soep bevat pasta en bonen?"
        },
        options: [
          { en: "Ramen", es: "Ramen", de: "Ramen", nl: "Ramen" },
          { en: "Pasta e fagioli", es: "Pasta e fagioli", de: "Pasta e fagioli", nl: "Pasta e fagioli" },
          { en: "Wonton soup", es: "Sopa wonton", de: "Wonton-Suppe", nl: "Wonton soep" },
          { en: "Borscht", es: "Borscht", de: "Borschtsch", nl: "Borsjt" }
        ],
        correct: 1,
        explanation: {
          en: "Pasta e fagioli is a traditional Italian soup whose name literally means 'pasta and beans,' combining these two ingredients with vegetables and broth.",
          es: "Pasta e fagioli es una sopa italiana tradicional cuyo nombre significa literalmente 'pasta y frijoles', combinando estos dos ingredientes con verduras y caldo.",
          de: "Pasta e fagioli ist eine traditionelle italienische Suppe, deren Name wörtlich 'Nudeln und Bohnen' bedeutet und diese beiden Zutaten mit Gemüse und Brühe kombiniert.",
          nl: "Pasta e fagioli is een traditionele Italiaanse soep waarvan de naam letterlijk 'pasta en bonen' betekent, waarbij deze twee ingrediënten worden gecombineerd met groenten en bouillon."
        }
      },
      {
        question: {
          en: "What is a common garnish for soup?",
          es: "¿Cuál es una guarnición común para la sopa?",
          de: "Was ist eine übliche Garnitur für Suppe?",
          nl: "Wat is een veelgebruikte garnering voor soep?"
        },
        options: [
          { en: "Fresh herbs", es: "Hierbas frescas", de: "Frische Kräuter", nl: "Verse kruiden" },
          { en: "Raw meat", es: "Carne cruda", de: "Rohes Fleisch", nl: "Rauw vlees" },
          { en: "Chocolate chips", es: "Chispas de chocolate", de: "Schokoladenstückchen", nl: "Chocoladestukjes" },
          { en: "Ice cubes", es: "Cubitos de hielo", de: "Eiswürfel", nl: "Ijsblokjes" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh herbs like parsley, cilantro, or chives are commonly used to garnish soup, adding color, freshness, and complementary flavors.",
          es: "Hierbas frescas como perejil, cilantro o cebollino se usan comúnmente para decorar la sopa, agregando color, frescura y sabores complementarios.",
          de: "Frische Kräuter wie Petersilie, Koriander oder Schnittlauch werden häufig zur Garnitur von Suppen verwendet und verleihen Farbe, Frische und ergänzende Aromen.",
          nl: "Verse kruiden zoals peterselie, koriander of bieslook worden vaak gebruikt om soep te garneren, wat kleur, frisheid en complementaire smaken toevoegt."
        }
      },
      {
        question: {
          en: "What is French onion soup topped with?",
          es: "¿Con qué se cubre la sopa de cebolla francesa?",
          de: "Womit wird französische Zwiebelsuppe belegt?",
          nl: "Waar wordt Franse uiensoep mee afgedekt?"
        },
        options: [
          { en: "Whipped cream", es: "Crema batida", de: "Schlagsahne", nl: "Slagroom" },
          { en: "Cheese and bread", es: "Queso y pan", de: "Käse und Brot", nl: "Kaas en brood" },
          { en: "Bacon bits", es: "Trozos de tocino", de: "Speckwürfel", nl: "Spekjes" },
          { en: "Croutons only", es: "Solo crutones", de: "Nur Croutons", nl: "Alleen croutons" }
        ],
        correct: 1,
        explanation: {
          en: "French onion soup is traditionally topped with toasted bread and melted cheese, usually Gruyère, which forms a golden, bubbly crust.",
          es: "La sopa de cebolla francesa se cubre tradicionalmente con pan tostado y queso derretido, generalmente Gruyère, que forma una costra dorada y burbujeante.",
          de: "Französische Zwiebelsuppe wird traditionell mit geröstetem Brot und geschmolzenem Käse, meist Gruyère, belegt, der eine goldene, sprudelnde Kruste bildet.",
          nl: "Franse uiensoep wordt traditioneel afgedekt met geroosterd brood en gesmolten kaas, meestal Gruyère, die een gouden, borrelende korst vormt."
        }
      },
      {
        question: {
          en: "What color is tomato soup?",
          es: "¿De qué color es la sopa de tomate?",
          de: "Welche Farbe hat Tomatensuppe?",
          nl: "Welke kleur heeft tomatensoep?"
        },
        options: [
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" }
        ],
        correct: 1,
        explanation: {
          en: "Tomato soup is red due to the natural color of tomatoes, which comes from the antioxidant lycopene that gives them their characteristic hue.",
          es: "La sopa de tomate es roja debido al color natural de los tomates, que proviene del antioxidante licopeno que les da su tono característico.",
          de: "Tomatensuppe ist rot aufgrund der natürlichen Farbe von Tomaten, die vom Antioxidans Lycopin stammt, das ihnen ihren charakteristischen Farbton verleiht.",
          nl: "Tomatensoep is rood vanwege de natuurlijke kleur van tomaten, die afkomstig is van het antioxidant lycopeen dat hen hun karakteristieke tint geeft."
        }
      },
      {
        question: {
          en: "What is the main ingredient in pea soup?",
          es: "¿Cuál es el ingrediente principal en la sopa de guisantes?",
          de: "Was ist die Hauptzutat in Erbsensuppe?",
          nl: "Wat is het hoofdingrediënt in erwtensoep?"
        },
        options: [
          { en: "Corn", es: "Maíz", de: "Mais", nl: "Mais" },
          { en: "Peas", es: "Guisantes", de: "Erbsen", nl: "Erwten" },
          { en: "Beans", es: "Frijoles", de: "Bohnen", nl: "Bonen" },
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" }
        ],
        correct: 1,
        explanation: {
          en: "Pea soup is made primarily from peas, either fresh or dried split peas, which are cooked until soft and often pureed for a smooth texture.",
          es: "La sopa de guisantes se hace principalmente con guisantes, ya sean frescos o guisantes secos partidos, que se cocinan hasta que estén blandos y a menudo se hacen puré.",
          de: "Erbsensuppe wird hauptsächlich aus Erbsen hergestellt, entweder frischen oder getrockneten Spalterbsen, die weich gekocht und oft püriert werden.",
          nl: "Erwtensoep wordt voornamelijk gemaakt van erwten, verse of gedroogde spliterwten, die gaar worden gekookt en vaak gepureerd voor een gladde textuur."
        }
      },
      {
        question: {
          en: "What kitchen appliance can be used to keep soup warm?",
          es: "¿Qué electrodoméstico de cocina se puede usar para mantener la sopa caliente?",
          de: "Welches Küchengerät kann verwendet werden, um Suppe warm zu halten?",
          nl: "Welk keukenapparaat kan worden gebruikt om soep warm te houden?"
        },
        options: [
          { en: "Refrigerator", es: "Refrigerador", de: "Kühlschrank", nl: "Koelkast" },
          { en: "Slow cooker", es: "Olla de cocción lenta", de: "Schongarer", nl: "Slowcooker" },
          { en: "Blender", es: "Licuadora", de: "Mixer", nl: "Blender" },
          { en: "Toaster", es: "Tostadora", de: "Toaster", nl: "Broodrooster" }
        ],
        correct: 1,
        explanation: {
          en: "A slow cooker has a 'warm' setting that maintains soup at a safe, serving temperature without continuing to cook it, perfect for serving over time.",
          es: "Una olla de cocción lenta tiene una configuración 'caliente' que mantiene la sopa a una temperatura segura de servir sin seguir cocinándola.",
          de: "Ein Schongarer hat eine 'Warmhalte'-Einstellung, die Suppe auf sicherer Serviertemperatur hält, ohne sie weiterzukochen, ideal zum zeitversetzten Servieren.",
          nl: "Een slowcooker heeft een 'warm'-stand die soep op een veilige serveertemperatuur houdt zonder verder te koken, perfect voor serveren gedurende langere tijd."
        }
      },
      {
        question: {
          en: "What food is commonly served with soup?",
          es: "¿Qué comida se sirve comúnmente con sopa?",
          de: "Welches Essen wird üblicherweise mit Suppe serviert?",
          nl: "Welk voedsel wordt vaak met soep geserveerd?"
        },
        options: [
          { en: "Bread", es: "Pan", de: "Brot", nl: "Brood" },
          { en: "Ice cream", es: "Helado", de: "Eiscreme", nl: "IJsje" },
          { en: "Cookies", es: "Galletas", de: "Kekse", nl: "Koekjes" },
          { en: "Candy", es: "Dulces", de: "Süßigkeiten", nl: "Snoep" }
        ],
        correct: 0,
        explanation: {
          en: "Bread is a classic accompaniment to soup, perfect for dipping and soaking up the flavorful broth while adding substance to the meal.",
          es: "El pan es un acompañamiento clásico de la sopa, perfecto para mojar y absorber el sabroso caldo mientras añade sustancia a la comida.",
          de: "Brot ist eine klassische Beilage zu Suppe, perfekt zum Eintauchen und Aufsaugen der schmackhaften Brühe, während es der Mahlzeit Substanz verleiht.",
          nl: "Brood is een klassieke begeleiding bij soep, perfect om te dippen en de smaakvolle bouillon op te nemen terwijl het substantie aan de maaltijd toevoegt."
        }
      },
      {
        question: {
          en: "Which soup is made from beetroot?",
          es: "¿Qué sopa se hace con remolacha?",
          de: "Welche Suppe wird aus Roter Bete hergestellt?",
          nl: "Welke soep wordt gemaakt van bieten?"
        },
        options: [
          { en: "Borscht", es: "Borscht", de: "Borschtsch", nl: "Borsjt" },
          { en: "Clam chowder", es: "Sopa de almejas", de: "Muschelsuppe", nl: "Mosselsoep" },
          { en: "Chicken soup", es: "Sopa de pollo", de: "Hühnersuppe", nl: "Kippensoep" },
          { en: "Mushroom soup", es: "Sopa de champiñones", de: "Pilzsuppe", nl: "Paddenstoelensoep" }
        ],
        correct: 0,
        explanation: {
          en: "Borscht is a traditional Eastern European soup made primarily from beetroot, giving it a distinctive deep red color and earthy-sweet flavor.",
          es: "El borscht es una sopa tradicional de Europa del Este hecha principalmente de remolacha, lo que le da un color rojo intenso distintivo y un sabor dulce terroso.",
          de: "Borschtsch ist eine traditionelle osteuropäische Suppe, die hauptsächlich aus Roter Bete hergestellt wird und eine charakteristische tiefrote Farbe hat.",
          nl: "Borsjt is een traditionele Oost-Europese soep gemaakt voornamelijk van bieten, wat het een kenmerkende dieprode kleur en aards-zoete smaak geeft."
        }
      },
      {
        question: {
          en: "What ingredient makes soup thicker?",
          es: "¿Qué ingrediente hace la sopa más espesa?",
          de: "Welche Zutat macht Suppe dicker?",
          nl: "Welk ingrediënt maakt soep dikker?"
        },
        options: [
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Ice", es: "Hielo", de: "Eis", nl: "IJs" },
          { en: "Flour or cornstarch", es: "Harina o maicena", de: "Mehl oder Maisstärke", nl: "Meel of maïzena" },
          { en: "Vinegar", es: "Vinagre", de: "Essig", nl: "Azijn" }
        ],
        correct: 2,
        explanation: {
          en: "Flour or cornstarch acts as a thickening agent when added to soup, creating a roux or slurry that increases viscosity and creates a heartier texture.",
          es: "La harina o maicena actúa como espesante cuando se agrega a la sopa, creando un roux o mezcla que aumenta la viscosidad y crea una textura más sustanciosa.",
          de: "Mehl oder Maisstärke wirkt als Verdickungsmittel, wenn es der Suppe hinzugefügt wird, und schafft eine Roux oder Aufschlämmung, die die Viskosität erhöht.",
          nl: "Meel of maïzena werkt als verdikkingsmiddel wanneer het aan soep wordt toegevoegd, waardoor een roux of mengsel ontstaat dat de viscositeit verhoogt."
        }
      },
      {
        question: {
          en: "What meal is soup most commonly served at?",
          es: "¿En qué comida se sirve más comúnmente la sopa?",
          de: "Zu welcher Mahlzeit wird Suppe am häufigsten serviert?",
          nl: "Bij welke maaltijd wordt soep het meest geserveerd?"
        },
        options: [
          { en: "Breakfast", es: "Desayuno", de: "Frühstück", nl: "Ontbijt" },
          { en: "Lunch or dinner", es: "Almuerzo o cena", de: "Mittagessen oder Abendessen", nl: "Lunch of diner" },
          { en: "Dessert", es: "Postre", de: "Nachtisch", nl: "Dessert" },
          { en: "Snack", es: "Merienda", de: "Snack", nl: "Tussendoortje" }
        ],
        correct: 1,
        explanation: {
          en: "Soup is most commonly served at lunch or dinner, either as a starter to warm up the appetite or as a main course for a complete meal.",
          es: "La sopa se sirve más comúnmente en el almuerzo o la cena, ya sea como entrada para abrir el apetito o como plato principal para una comida completa.",
          de: "Suppe wird am häufigsten zum Mittagessen oder Abendessen serviert, entweder als Vorspeise zum Anregen des Appetits oder als Hauptgericht.",
          nl: "Soep wordt het meest geserveerd bij lunch of diner, als voorgerecht om de eetlust op te wekken of als hoofdgerecht voor een complete maaltijd."
        }
      },
      {
        question: {
          en: "Which ingredient is NOT typically found in vegetable soup?",
          es: "¿Qué ingrediente NO se encuentra típicamente en la sopa de verduras?",
          de: "Welche Zutat findet man NICHT typischerweise in Gemüsesuppe?",
          nl: "Welk ingrediënt wordt NIET typisch in groentesoep gevonden?"
        },
        options: [
          { en: "Celery", es: "Apio", de: "Sellerie", nl: "Selderij" },
          { en: "Zucchini", es: "Calabacín", de: "Zucchini", nl: "Courgette" },
          { en: "Candy bars", es: "Barras de caramelo", de: "Schokoriegel", nl: "Chocoladerepen" },
          { en: "Tomatoes", es: "Tomates", de: "Tomaten", nl: "Tomaten" }
        ],
        correct: 2,
        explanation: {
          en: "Candy bars are dessert items and would never be an ingredient in vegetable soup, which focuses on savory vegetables, herbs, and broth.",
          es: "Las barras de caramelo son artículos de postre y nunca serían un ingrediente en la sopa de verduras, que se centra en verduras saladas, hierbas y caldo.",
          de: "Schokoriegel sind Dessertartikel und würden niemals eine Zutat in Gemüsesuppe sein, die sich auf herzhafte Gemüse, Kräuter und Brühe konzentriert.",
          nl: "Chocoladerepen zijn dessertitems en zouden nooit een ingrediënt zijn in groentesoep, die zich richt op hartige groenten, kruiden en bouillon."
        }
      },
      {
        question: {
          en: "What is ramen?",
          es: "¿Qué es el ramen?",
          de: "Was ist Ramen?",
          nl: "Wat is ramen?"
        },
        options: [
          { en: "Chinese dumpling soup", es: "Sopa china de dumplings", de: "Chinesische Teigtaschensuppe", nl: "Chinese dumplingsoep" },
          { en: "Japanese noodle soup", es: "Sopa japonesa de fideos", de: "Japanische Nudelsuppe", nl: "Japanse noedelsoep" },
          { en: "Korean rice soup", es: "Sopa coreana de arroz", de: "Koreanische Reissuppe", nl: "Koreaanse rijstsoep" },
          { en: "Thai coconut soup", es: "Sopa tailandesa de coco", de: "Thailändische Kokossuppe", nl: "Thaise kokossoep" }
        ],
        correct: 1,
        explanation: {
          en: "Ramen is a Japanese noodle soup featuring wheat noodles in a flavorful broth, typically topped with meat, vegetables, and eggs.",
          es: "Ramen es una sopa japonesa de fideos con fideos de trigo en un caldo sabroso, típicamente cubierta con carne, verduras y huevos.",
          de: "Ramen ist eine japanische Nudelsuppe mit Weizennudeln in einer schmackhaften Brühe, typischerweise garniert mit Fleisch, Gemüse und Eiern.",
          nl: "Ramen is een Japanse noedelsoep met tarwenoedels in een smaakvolle bouillon, meestal gegarneerd met vlees, groenten en eieren."
        }
      },
      {
        question: {
          en: "Which soup is typically orange in color?",
          es: "¿Qué sopa es típicamente de color naranja?",
          de: "Welche Suppe ist typischerweise orange?",
          nl: "Welke soep is doorgaans oranje van kleur?"
        },
        options: [
          { en: "Spinach soup", es: "Sopa de espinacas", de: "Spinatsuppe", nl: "Spinaziesoep" },
          { en: "Pumpkin soup", es: "Sopa de calabaza", de: "Kürbissuppe", nl: "Pompoensoep" },
          { en: "Broccoli soup", es: "Sopa de brócoli", de: "Brokkolisuppe", nl: "Broccolisoep" },
          { en: "Mushroom soup", es: "Sopa de champiñones", de: "Pilzsuppe", nl: "Paddenstoelensoep" }
        ],
        correct: 1,
        explanation: {
          en: "Pumpkin soup has a distinctive orange color from the natural pigment of pumpkins and is often served in autumn.",
          es: "La sopa de calabaza tiene un color naranja distintivo del pigmento natural de las calabazas y a menudo se sirve en otoño.",
          de: "Kürbissuppe hat eine charakteristische orange Farbe vom natürlichen Pigment des Kürbisses und wird oft im Herbst serviert.",
          nl: "Pompoensoep heeft een kenmerkende oranje kleur van het natuurlijke pigment van pompoenen en wordt vaak in de herfst geserveerd."
        }
      },
      {
        question: {
          en: "What is clam chowder?",
          es: "¿Qué es el clam chowder?",
          de: "Was ist Clam Chowder?",
          nl: "Wat is clam chowder?"
        },
        options: [
          { en: "A vegetable soup", es: "Una sopa de verduras", de: "Eine Gemüsesuppe", nl: "Een groentesoep" },
          { en: "A seafood soup with clams", es: "Una sopa de mariscos con almejas", de: "Eine Meeresfrüchtesuppe mit Muscheln", nl: "Een zeevruchtensoep met mosselen" },
          { en: "A beef soup", es: "Una sopa de carne", de: "Eine Rindfleischsuppe", nl: "Een rundvleessoep" },
          { en: "A chicken soup", es: "Una sopa de pollo", de: "Eine Hühnersuppe", nl: "Een kippensoep" }
        ],
        correct: 1,
        explanation: {
          en: "Clam chowder is a creamy seafood soup made with clams, potatoes, and often bacon, popular in New England cuisine.",
          es: "El clam chowder es una sopa cremosa de mariscos hecha con almejas, papas y a menudo tocino, popular en la cocina de Nueva Inglaterra.",
          de: "Clam Chowder ist eine cremige Meeresfrüchtesuppe aus Muscheln, Kartoffeln und oft Speck, beliebt in der Neuengland-Küche.",
          nl: "Clam chowder is een romige zeevruchtensoep gemaakt met mosselen, aardappelen en vaak spek, populair in de New England-keuken."
        }
      },
      {
        question: {
          en: "What does stirring soup help to do?",
          es: "¿Qué ayuda a hacer remover la sopa?",
          de: "Was hilft das Umrühren der Suppe zu tun?",
          nl: "Wat helpt het roeren van soep om te doen?"
        },
        options: [
          { en: "Make it colder", es: "Hacerla más fría", de: "Sie kälter machen", nl: "Het kouder maken" },
          { en: "Prevent sticking and distribute heat", es: "Prevenir que se pegue y distribuir el calor", de: "Ankleben verhindern und Hitze verteilen", nl: "Aanbakken voorkomen en warmte verdelen" },
          { en: "Remove all flavor", es: "Eliminar todo el sabor", de: "Allen Geschmack entfernen", nl: "Alle smaak verwijderen" },
          { en: "Add more salt", es: "Agregar más sal", de: "Mehr Salz hinzufügen", nl: "Meer zout toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Stirring soup prevents ingredients from sticking to the bottom of the pot and ensures even heat distribution throughout.",
          es: "Remover la sopa previene que los ingredientes se peguen al fondo de la olla y asegura una distribución uniforme del calor.",
          de: "Das Umrühren der Suppe verhindert, dass Zutaten am Boden des Topfes kleben bleiben und sorgt für eine gleichmäßige Wärmeverteilung.",
          nl: "Het roeren van soep voorkomt dat ingrediënten aan de bodem van de pan blijven plakken en zorgt voor een gelijkmatige warmteverdeling."
        }
      },
      {
        question: {
          en: "What is wonton soup?",
          es: "¿Qué es la sopa wonton?",
          de: "Was ist Wonton-Suppe?",
          nl: "Wat is wonton soep?"
        },
        options: [
          { en: "Mexican tortilla soup", es: "Sopa mexicana de tortilla", de: "Mexikanische Tortillasuppe", nl: "Mexicaanse tortillasoep" },
          { en: "Italian pasta soup", es: "Sopa italiana de pasta", de: "Italienische Nudelsuppe", nl: "Italiaanse pastasoep" },
          { en: "Chinese dumpling soup", es: "Sopa china de dumplings", de: "Chinesische Teigtaschensuppe", nl: "Chinese dumplingsoep" },
          { en: "French vegetable soup", es: "Sopa francesa de verduras", de: "Französische Gemüsesuppe", nl: "Franse groentesoep" }
        ],
        correct: 2,
        explanation: {
          en: "Wonton soup is a Chinese soup featuring small dumplings (wontons) filled with meat or seafood in a clear broth.",
          es: "La sopa wonton es una sopa china con pequeños dumplings (wontons) rellenos de carne o mariscos en un caldo claro.",
          de: "Wonton-Suppe ist eine chinesische Suppe mit kleinen Teigtaschen (Wontons) gefüllt mit Fleisch oder Meeresfrüchten in einer klaren Brühe.",
          nl: "Wonton soep is een Chinese soep met kleine dumplings (wontons) gevuld met vlees of zeevruchten in een heldere bouillon."
        }
      },
      {
        question: {
          en: "Can soup be stored in the refrigerator?",
          es: "¿Se puede almacenar la sopa en el refrigerador?",
          de: "Kann Suppe im Kühlschrank aufbewahrt werden?",
          nl: "Kan soep in de koelkast worden bewaard?"
        },
        options: [
          { en: "No, never", es: "No, nunca", de: "Nein, niemals", nl: "Nee, nooit" },
          { en: "Yes, for 3-4 days", es: "Sí, durante 3-4 días", de: "Ja, für 3-4 Tage", nl: "Ja, voor 3-4 dagen" },
          { en: "Only for 1 hour", es: "Solo por 1 hora", de: "Nur für 1 Stunde", nl: "Alleen voor 1 uur" },
          { en: "Yes, forever", es: "Sí, para siempre", de: "Ja, für immer", nl: "Ja, voor altijd" }
        ],
        correct: 1,
        explanation: {
          en: "Soup can be safely stored in the refrigerator for 3-4 days in an airtight container after cooling to room temperature.",
          es: "La sopa se puede almacenar de forma segura en el refrigerador durante 3-4 días en un recipiente hermético después de enfriarse a temperatura ambiente.",
          de: "Suppe kann sicher für 3-4 Tage im Kühlschrank in einem luftdichten Behälter aufbewahrt werden, nachdem sie auf Raumtemperatur abgekühlt ist.",
          nl: "Soep kan veilig 3-4 dagen in de koelkast worden bewaard in een luchtdichte container nadat het is afgekoeld tot kamertemperatuur."
        }
      },
      {
        question: {
          en: "What is chicken broth?",
          es: "¿Qué es el caldo de pollo?",
          de: "Was ist Hühnerbrühe?",
          nl: "Wat is kippenbouillon?"
        },
        options: [
          { en: "Solid chicken meat", es: "Carne de pollo sólida", de: "Festes Hühnerfleisch", nl: "Vast kippenvlees" },
          { en: "Liquid from cooking chicken", es: "Líquido de cocinar pollo", de: "Flüssigkeit vom Hühnchenkochen", nl: "Vloeistof van het koken van kip" },
          { en: "Chicken seasoning powder", es: "Polvo de condimento de pollo", de: "Hühnerwürzpulver", nl: "Kippenkruidenpoeder" },
          { en: "Raw chicken", es: "Pollo crudo", de: "Rohes Huhn", nl: "Rauwe kip" }
        ],
        correct: 1,
        explanation: {
          en: "Chicken broth is the flavorful liquid produced by simmering chicken bones and meat in water, used as a soup base.",
          es: "El caldo de pollo es el líquido sabroso producido al cocinar a fuego lento huesos y carne de pollo en agua, usado como base para sopas.",
          de: "Hühnerbrühe ist die schmackhafte Flüssigkeit, die durch Köcheln von Hühnerknochen und Fleisch in Wasser entsteht und als Suppenbasis verwendet wird.",
          nl: "Kippenbouillon is de smaakvolle vloeistof die ontstaat door kippenbotten en vlees in water te laten sudderen, gebruikt als soepbasis."
        }
      },
      {
        question: {
          en: "Which bowl type is best for serving hot soup?",
          es: "¿Qué tipo de tazón es mejor para servir sopa caliente?",
          de: "Welcher Schüsseltyp eignet sich am besten zum Servieren heißer Suppe?",
          nl: "Welk type kom is het beste voor het serveren van hete soep?"
        },
        options: [
          { en: "Plastic bowl", es: "Tazón de plástico", de: "Plastikschüssel", nl: "Plastic kom" },
          { en: "Paper bowl", es: "Tazón de papel", de: "Papierschüssel", nl: "Papieren kom" },
          { en: "Ceramic or porcelain bowl", es: "Tazón de cerámica o porcelana", de: "Keramik- oder Porzellanschüssel", nl: "Keramische of porseleinen kom" },
          { en: "Cardboard bowl", es: "Tazón de cartón", de: "Kartonschüssel", nl: "Kartonnen kom" }
        ],
        correct: 2,
        explanation: {
          en: "Ceramic or porcelain bowls are ideal for hot soup as they retain heat well, are durable, and won't melt or release harmful chemicals.",
          es: "Los tazones de cerámica o porcelana son ideales para sopa caliente ya que retienen bien el calor, son duraderos y no se derriten ni liberan químicos dañinos.",
          de: "Keramik- oder Porzellanschüsseln sind ideal für heiße Suppe, da sie Wärme gut speichern, haltbar sind und nicht schmelzen oder schädliche Chemikalien freisetzen.",
          nl: "Keramische of porseleinen kommen zijn ideaal voor hete soep omdat ze warmte goed vasthouden, duurzaam zijn en niet smelten of schadelijke chemicaliën vrijgeven."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
