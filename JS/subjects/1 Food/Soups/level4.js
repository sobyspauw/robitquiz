// Soups Quiz - Level 4
(function() {
  const level4 = {
    name: {
      en: "Soups Level 4",
      es: "Soups Nivel 4",
      de: "Soups Stufe 4",
      nl: "Soups Level 4"
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
          { en: "30 minutes", es: "30 minutos", de: "30 Minuten", nl: "30 minuten" },
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
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
