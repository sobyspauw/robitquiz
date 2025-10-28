// Quiz - Level 2: Drinken - Wijn (Wijnsoorten)
(function() {
  const level2 = {
    name: {
      en: "Wine Varieties",
      es: "Variedades de Vino",
      de: "Weinsorten",
      nl: "Wijnsoorten"
    },
    questions: [
      {
        question: {
          en: "Which grape variety is known as 'the king of red wine grapes'?",
          es: "¿Qué variedad de uva es conocida como 'el rey de las uvas tintas'?",
          de: "Welche Rebsorte ist als 'König der Rotweintrauben' bekannt?",
          nl: "Welke druivensoort staat bekend als 'de koning van de rode wijndruiven'?"
        },
        options: [
          { en: "Merlot", es: "Merlot", de: "Merlot", nl: "Merlot" },
          { en: "Cabernet Sauvignon", es: "Cabernet Sauvignon", de: "Cabernet Sauvignon", nl: "Cabernet Sauvignon" },
          { en: "Pinot Noir", es: "Pinot Noir", de: "Pinot Noir", nl: "Pinot Noir" },
          { en: "Syrah", es: "Syrah", de: "Syrah", nl: "Syrah" }
        ],
        correct: 1,
        explanation: {
          en: "Cabernet Sauvignon is often called 'the king of red wine grapes' due to its widespread cultivation and ability to produce age-worthy wines.",
          es: "Cabernet Sauvignon es a menudo llamado 'el rey de las uvas tintas' debido a su cultivo generalizado y capacidad para producir vinos de guarda.",
          de: "Cabernet Sauvignon wird oft als 'König der Rotweintrauben' bezeichnet aufgrund seines weit verbreiteten Anbaus und seiner Fähigkeit, lagerfähige Weine zu produzieren.",
          nl: "Cabernet Sauvignon wordt vaak 'de koning van de rode wijndruiven' genoemd vanwege zijn wijdverspreide teelt en vermogen om bewaarwijnen te produceren."
        }
      },
      {
        question: {
          en: "What is the primary grape in Burgundy red wines?",
          es: "¿Cuál es la uva principal en los vinos tintos de Borgoña?",
          de: "Was ist die Haupttraube in roten Burgunderweinen?",
          nl: "Wat is de hoofddruif in rode Bourgogne wijnen?"
        },
        options: [
          { en: "Pinot Noir", es: "Pinot Noir", de: "Pinot Noir", nl: "Pinot Noir" },
          { en: "Gamay", es: "Gamay", de: "Gamay", nl: "Gamay" },
          { en: "Cabernet Franc", es: "Cabernet Franc", de: "Cabernet Franc", nl: "Cabernet Franc" },
          { en: "Grenache", es: "Grenache", de: "Grenache", nl: "Grenache" }
        ],
        correct: 0,
        explanation: {
          en: "Pinot Noir is the exclusive red grape variety used in red Burgundy wines, creating elegant and complex wines.",
          es: "Pinot Noir es la variedad de uva tinta exclusiva utilizada en los vinos tintos de Borgoña, creando vinos elegantes y complejos.",
          de: "Pinot Noir ist die exklusive rote Rebsorte, die in roten Burgunderweinen verwendet wird und elegante und komplexe Weine erzeugt.",
          nl: "Pinot Noir is de exclusieve rode druivensoort gebruikt in rode Bourgogne wijnen, die elegante en complexe wijnen creëert."
        }
      },
      {
        question: {
          en: "Which white grape is most associated with Chablis?",
          es: "¿Qué uva blanca está más asociada con Chablis?",
          de: "Welche weiße Traube ist am meisten mit Chablis verbunden?",
          nl: "Welke witte druif wordt het meest geassocieerd met Chablis?"
        },
        options: [
          { en: "Sauvignon Blanc", es: "Sauvignon Blanc", de: "Sauvignon Blanc", nl: "Sauvignon Blanc" },
          { en: "Chardonnay", es: "Chardonnay", de: "Chardonnay", nl: "Chardonnay" },
          { en: "Chenin Blanc", es: "Chenin Blanc", de: "Chenin Blanc", nl: "Chenin Blanc" },
          { en: "Albariño", es: "Albariño", de: "Albariño", nl: "Albariño" }
        ],
        correct: 1,
        explanation: {
          en: "Chablis is made exclusively from Chardonnay grapes, producing crisp, mineral-driven white wines.",
          es: "Chablis se hace exclusivamente de uvas Chardonnay, produciendo vinos blancos frescos y minerales.",
          de: "Chablis wird ausschließlich aus Chardonnay-Trauben hergestellt und produziert frische, mineralische Weißweine.",
          nl: "Chablis wordt uitsluitend gemaakt van Chardonnay druiven, die frisse, minerale witte wijnen produceren."
        }
      },
      {
        question: {
          en: "What grape variety is Chianti primarily made from?",
          es: "¿De qué variedad de uva está hecho principalmente el Chianti?",
          de: "Aus welcher Rebsorte wird Chianti hauptsächlich hergestellt?",
          nl: "Van welke druivensoort wordt Chianti voornamelijk gemaakt?"
        },
        options: [
          { en: "Nebbiolo", es: "Nebbiolo", de: "Nebbiolo", nl: "Nebbiolo" },
          { en: "Sangiovese", es: "Sangiovese", de: "Sangiovese", nl: "Sangiovese" },
          { en: "Barbera", es: "Barbera", de: "Barbera", nl: "Barbera" },
          { en: "Montepulciano", es: "Montepulciano", de: "Montepulciano", nl: "Montepulciano" }
        ],
        correct: 1,
        explanation: {
          en: "Chianti must contain at least 80% Sangiovese grapes, the signature variety of Tuscany.",
          es: "El Chianti debe contener al menos 80% de uvas Sangiovese, la variedad emblemática de Toscana.",
          de: "Chianti muss mindestens 80% Sangiovese-Trauben enthalten, die charakteristische Sorte der Toskana.",
          nl: "Chianti moet minimaal 80% Sangiovese druiven bevatten, de kenmerkende variëteit van Toscane."
        }
      },
      {
        question: {
          en: "Which grape variety produces the German wines from Mosel?",
          es: "¿Qué variedad de uva produce los vinos alemanes del Mosela?",
          de: "Welche Rebsorte produziert die deutschen Weine von der Mosel?",
          nl: "Welke druivensoort produceert de Duitse wijnen uit de Moezel?"
        },
        options: [
          { en: "Riesling", es: "Riesling", de: "Riesling", nl: "Riesling" },
          { en: "Gewürztraminer", es: "Gewürztraminer", de: "Gewürztraminer", nl: "Gewürztraminer" },
          { en: "Müller-Thurgau", es: "Müller-Thurgau", de: "Müller-Thurgau", nl: "Müller-Thurgau" },
          { en: "Silvaner", es: "Silvaner", de: "Silvaner", nl: "Silvaner" }
        ],
        correct: 0,
        explanation: {
          en: "Riesling is the predominant grape variety in Mosel, producing elegant wines with high acidity and mineral notes.",
          es: "Riesling es la variedad de uva predominante en Mosela, produciendo vinos elegantes con alta acidez y notas minerales.",
          de: "Riesling ist die vorherrschende Rebsorte an der Mosel und produziert elegante Weine mit hoher Säure und mineralischen Noten.",
          nl: "Riesling is de overheersende druivensoort in de Moezel, die elegante wijnen produceert met hoge zuurgraad en minerale tonen."
        }
      },
      {
        question: {
          en: "What is the Spanish name for Tempranillo in Ribera del Duero?",
          es: "¿Cuál es el nombre español para Tempranillo en Ribera del Duero?",
          de: "Wie heißt Tempranillo auf Spanisch in Ribera del Duero?",
          nl: "Wat is de Spaanse naam voor Tempranillo in Ribera del Duero?"
        },
        options: [
          { en: "Garnacha", es: "Garnacha", de: "Garnacha", nl: "Garnacha" },
          { en: "Tinto Fino", es: "Tinto Fino", de: "Tinto Fino", nl: "Tinto Fino" },
          { en: "Monastrell", es: "Monastrell", de: "Monastrell", nl: "Monastrell" },
          { en: "Mencía", es: "Mencía", de: "Mencía", nl: "Mencía" }
        ],
        correct: 1,
        explanation: {
          en: "In Ribera del Duero, Tempranillo is called Tinto Fino or Tinta del País, producing powerful and structured wines.",
          es: "En Ribera del Duero, el Tempranillo se llama Tinto Fino o Tinta del País, produciendo vinos potentes y estructurados.",
          de: "In Ribera del Duero wird Tempranillo Tinto Fino oder Tinta del País genannt und produziert kraftvolle und strukturierte Weine.",
          nl: "In Ribera del Duero wordt Tempranillo Tinto Fino of Tinta del País genoemd, die krachtige en gestructureerde wijnen produceert."
        }
      },
      {
        question: {
          en: "Which grape variety is known for producing Beaujolais wines?",
          es: "¿Qué variedad de uva es conocida por producir vinos de Beaujolais?",
          de: "Welche Rebsorte ist bekannt für die Herstellung von Beaujolais-Weinen?",
          nl: "Welke druivensoort staat bekend om het produceren van Beaujolais wijnen?"
        },
        options: [
          { en: "Gamay", es: "Gamay", de: "Gamay", nl: "Gamay" },
          { en: "Grenache", es: "Grenache", de: "Grenache", nl: "Grenache" },
          { en: "Mourvèdre", es: "Mourvèdre", de: "Mourvèdre", nl: "Mourvèdre" },
          { en: "Cinsault", es: "Cinsault", de: "Cinsault", nl: "Cinsault" }
        ],
        correct: 0,
        explanation: {
          en: "Gamay is the exclusive grape variety used in Beaujolais, producing light, fruity red wines.",
          es: "Gamay es la variedad de uva exclusiva utilizada en Beaujolais, produciendo vinos tintos ligeros y afrutados.",
          de: "Gamay ist die exklusive Rebsorte, die in Beaujolais verwendet wird und leichte, fruchtige Rotweine produziert.",
          nl: "Gamay is de exclusieve druivensoort gebruikt in Beaujolais, die lichte, fruitige rode wijnen produceert."
        }
      },
      {
        question: {
          en: "What is the main grape variety in Sancerre white wines?",
          es: "¿Cuál es la variedad de uva principal en los vinos blancos de Sancerre?",
          de: "Was ist die Hauptrebsorte in weißen Sancerre-Weinen?",
          nl: "Wat is de hoofddruivensoort in witte Sancerre wijnen?"
        },
        options: [
          { en: "Chenin Blanc", es: "Chenin Blanc", de: "Chenin Blanc", nl: "Chenin Blanc" },
          { en: "Sauvignon Blanc", es: "Sauvignon Blanc", de: "Sauvignon Blanc", nl: "Sauvignon Blanc" },
          { en: "Muscadet", es: "Muscadet", de: "Muscadet", nl: "Muscadet" },
          { en: "Viognier", es: "Viognier", de: "Viognier", nl: "Viognier" }
        ],
        correct: 1,
        explanation: {
          en: "Sancerre white wines are made exclusively from Sauvignon Blanc, producing crisp, citrusy wines with herbaceous notes.",
          es: "Los vinos blancos de Sancerre se hacen exclusivamente de Sauvignon Blanc, produciendo vinos frescos y cítricos con notas herbáceas.",
          de: "Weiße Sancerre-Weine werden ausschließlich aus Sauvignon Blanc hergestellt und produzieren frische, zitrusartige Weine mit kräuterigen Noten.",
          nl: "Witte Sancerre wijnen worden uitsluitend gemaakt van Sauvignon Blanc, die frisse, citrusachtige wijnen produceren met kruidachtige tonen."
        }
      },
      {
        question: {
          en: "Which grape is known as Syrah in France but has a different name in Australia?",
          es: "¿Qué uva se conoce como Syrah en Francia pero tiene un nombre diferente en Australia?",
          de: "Welche Traube ist in Frankreich als Syrah bekannt, hat aber in Australien einen anderen Namen?",
          nl: "Welke druif staat bekend als Syrah in Frankrijk maar heeft een andere naam in Australië?"
        },
        options: [
          { en: "Shiraz", es: "Shiraz", de: "Shiraz", nl: "Shiraz" },
          { en: "Durif", es: "Durif", de: "Durif", nl: "Durif" },
          { en: "Mataro", es: "Mataro", de: "Mataro", nl: "Mataro" },
          { en: "Hermitage", es: "Hermitage", de: "Hermitage", nl: "Hermitage" }
        ],
        correct: 0,
        explanation: {
          en: "Syrah is called Shiraz in Australia, though it's the same grape variety producing bold, spicy red wines.",
          es: "Syrah se llama Shiraz en Australia, aunque es la misma variedad de uva que produce vinos tintos audaces y especiados.",
          de: "Syrah wird in Australien Shiraz genannt, obwohl es dieselbe Rebsorte ist, die kräftige, würzige Rotweine produziert.",
          nl: "Syrah wordt Shiraz genoemd in Australië, hoewel het dezelfde druivensoort is die krachtige, kruidige rode wijnen produceert."
        }
      },
      {
        question: {
          en: "What grape variety is Barolo made from?",
          es: "¿De qué variedad de uva está hecho el Barolo?",
          de: "Aus welcher Rebsorte wird Barolo hergestellt?",
          nl: "Van welke druivensoort wordt Barolo gemaakt?"
        },
        options: [
          { en: "Barbera", es: "Barbera", de: "Barbera", nl: "Barbera" },
          { en: "Nebbiolo", es: "Nebbiolo", de: "Nebbiolo", nl: "Nebbiolo" },
          { en: "Dolcetto", es: "Dolcetto", de: "Dolcetto", nl: "Dolcetto" },
          { en: "Corvina", es: "Corvina", de: "Corvina", nl: "Corvina" }
        ],
        correct: 1,
        explanation: {
          en: "Barolo is made exclusively from Nebbiolo grapes, producing powerful, tannic wines that age exceptionally well.",
          es: "El Barolo se hace exclusivamente de uvas Nebbiolo, produciendo vinos potentes y tánicos que envejecen excepcionalmente bien.",
          de: "Barolo wird ausschließlich aus Nebbiolo-Trauben hergestellt und produziert kraftvolle, tanninreiche Weine, die außergewöhnlich gut altern.",
          nl: "Barolo wordt uitsluitend gemaakt van Nebbiolo druiven, die krachtige, tanninerijke wijnen produceren die uitzonderlijk goed verouderen."
        }
      },
      {
        question: {
          en: "Which white grape variety is used to make Prosecco?",
          es: "¿Qué variedad de uva blanca se utiliza para hacer Prosecco?",
          de: "Welche weiße Rebsorte wird zur Herstellung von Prosecco verwendet?",
          nl: "Welke witte druivensoort wordt gebruikt om Prosecco te maken?"
        },
        options: [
          { en: "Chardonnay", es: "Chardonnay", de: "Chardonnay", nl: "Chardonnay" },
          { en: "Glera", es: "Glera", de: "Glera", nl: "Glera" },
          { en: "Pinot Grigio", es: "Pinot Grigio", de: "Pinot Grigio", nl: "Pinot Grigio" },
          { en: "Trebbiano", es: "Trebbiano", de: "Trebbiano", nl: "Trebbiano" }
        ],
        correct: 1,
        explanation: {
          en: "Prosecco is made primarily from Glera grapes (formerly known as Prosecco), producing light, fruity sparkling wines.",
          es: "El Prosecco se hace principalmente de uvas Glera (anteriormente conocidas como Prosecco), produciendo vinos espumosos ligeros y afrutados.",
          de: "Prosecco wird hauptsächlich aus Glera-Trauben (früher als Prosecco bekannt) hergestellt und produziert leichte, fruchtige Schaumweine.",
          nl: "Prosecco wordt voornamelijk gemaakt van Glera druiven (voorheen bekend als Prosecco), die lichte, fruitige mousserende wijnen produceren."
        }
      },
      {
        question: {
          en: "What is the main grape variety used in Rioja red wines?",
          es: "¿Cuál es la variedad de uva principal utilizada en los vinos tintos de Rioja?",
          de: "Was ist die Hauptrebsorte in roten Rioja-Weinen?",
          nl: "Wat is de hoofddruivensoort gebruikt in rode Rioja wijnen?"
        },
        options: [
          { en: "Tempranillo", es: "Tempranillo", de: "Tempranillo", nl: "Tempranillo" },
          { en: "Garnacha", es: "Garnacha", de: "Garnacha", nl: "Garnacha" },
          { en: "Monastrell", es: "Monastrell", de: "Monastrell", nl: "Monastrell" },
          { en: "Bobal", es: "Bobal", de: "Bobal", nl: "Bobal" }
        ],
        correct: 0,
        explanation: {
          en: "Tempranillo is the dominant grape in Rioja, producing elegant red wines with notes of cherry, leather, and vanilla.",
          es: "Tempranillo es la uva dominante en Rioja, produciendo vinos tintos elegantes con notas de cereza, cuero y vainilla.",
          de: "Tempranillo ist die vorherrschende Traube in Rioja und produziert elegante Rotweine mit Noten von Kirsche, Leder und Vanille.",
          nl: "Tempranillo is de dominante druif in Rioja, die elegante rode wijnen produceert met tonen van kers, leer en vanille."
        }
      },
      {
        question: {
          en: "Which grape variety is Malbec most associated with?",
          es: "¿Con qué país está más asociada la uva Malbec?",
          de: "Mit welchem Land wird die Rebsorte Malbec am meisten in Verbindung gebracht?",
          nl: "Met welk land wordt de druivensoort Malbec het meest geassocieerd?"
        },
        options: [
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" }
        ],
        correct: 1,
        explanation: {
          en: "While originally from France, Malbec has become Argentina's signature grape variety, producing rich, full-bodied red wines.",
          es: "Aunque originalmente de Francia, Malbec se ha convertido en la variedad de uva emblemática de Argentina, produciendo vinos tintos ricos y con cuerpo.",
          de: "Obwohl ursprünglich aus Frankreich, ist Malbec zu Argentiniens charakteristischer Rebsorte geworden und produziert reichhaltige, vollmundige Rotweine.",
          nl: "Hoewel oorspronkelijk uit Frankrijk, is Malbec de kenmerkende druivensoort van Argentinië geworden, die rijke, volle rode wijnen produceert."
        }
      },
      {
        question: {
          en: "What type of wine is Albariño typically known for producing?",
          es: "¿Por qué tipo de vino es conocido típicamente el Albariño?",
          de: "Für welche Art von Wein ist Albariño typischerweise bekannt?",
          nl: "Voor welk type wijn staat Albariño typisch bekend?"
        },
        options: [
          { en: "Dry white wine", es: "Vino blanco seco", de: "Trockener Weißwein", nl: "Droge witte wijn" },
          { en: "Sweet white wine", es: "Vino blanco dulce", de: "Süßer Weißwein", nl: "Zoete witte wijn" },
          { en: "Red wine", es: "Vino tinto", de: "Rotwein", nl: "Rode wijn" },
          { en: "Rosé wine", es: "Vino rosado", de: "Roséwein", nl: "Rosé wijn" }
        ],
        correct: 0,
        explanation: {
          en: "Albariño produces crisp, aromatic dry white wines, particularly famous in Spain's Rías Baixas region.",
          es: "Albariño produce vinos blancos secos, frescos y aromáticos, particularmente famosos en la región de Rías Baixas en España.",
          de: "Albariño produziert frische, aromatische trockene Weißweine, besonders berühmt in der spanischen Region Rías Baixas.",
          nl: "Albariño produceert frisse, aromatische droge witte wijnen, bijzonder beroemd in de Spaanse regio Rías Baixas."
        }
      },
      {
        question: {
          en: "Which grape variety is dominant in Châteauneuf-du-Pape wines?",
          es: "¿Qué variedad de uva es dominante en los vinos de Châteauneuf-du-Pape?",
          de: "Welche Rebsorte dominiert in Châteauneuf-du-Pape-Weinen?",
          nl: "Welke druivensoort is dominant in Châteauneuf-du-Pape wijnen?"
        },
        options: [
          { en: "Syrah", es: "Syrah", de: "Syrah", nl: "Syrah" },
          { en: "Grenache", es: "Grenache", de: "Grenache", nl: "Grenache" },
          { en: "Carignan", es: "Carignan", de: "Carignan", nl: "Carignan" },
          { en: "Merlot", es: "Merlot", de: "Merlot", nl: "Merlot" }
        ],
        correct: 1,
        explanation: {
          en: "Grenache is the dominant grape in Châteauneuf-du-Pape, often blended with up to 13 other grape varieties.",
          es: "Grenache es la uva dominante en Châteauneuf-du-Pape, a menudo mezclada con hasta 13 otras variedades de uva.",
          de: "Grenache ist die vorherrschende Traube in Châteauneuf-du-Pape, oft vermischt mit bis zu 13 anderen Rebsorten.",
          nl: "Grenache is de dominante druif in Châteauneuf-du-Pape, vaak gemengd met maximaal 13 andere druivensoorten."
        }
      },
      {
        question: {
          en: "What grape variety is Pinotage a cross between?",
          es: "¿De qué variedades de uva es un cruce el Pinotage?",
          de: "Aus welchen Rebsorten ist Pinotage eine Kreuzung?",
          nl: "Tussen welke druivensoorten is Pinotage een kruising?"
        },
        options: [
          { en: "Pinot Noir and Cinsault", es: "Pinot Noir y Cinsault", de: "Pinot Noir und Cinsault", nl: "Pinot Noir en Cinsault" },
          { en: "Pinot Noir and Merlot", es: "Pinot Noir y Merlot", de: "Pinot Noir und Merlot", nl: "Pinot Noir en Merlot" },
          { en: "Cabernet and Syrah", es: "Cabernet y Syrah", de: "Cabernet und Syrah", nl: "Cabernet en Syrah" },
          { en: "Grenache and Mourvèdre", es: "Grenache y Mourvèdre", de: "Grenache und Mourvèdre", nl: "Grenache en Mourvèdre" }
        ],
        correct: 0,
        explanation: {
          en: "Pinotage is a South African cross between Pinot Noir and Cinsault (formerly called Hermitage), created in 1925.",
          es: "Pinotage es un cruce sudafricano entre Pinot Noir y Cinsault (anteriormente llamado Hermitage), creado en 1925.",
          de: "Pinotage ist eine südafrikanische Kreuzung zwischen Pinot Noir und Cinsault (früher Hermitage genannt), die 1925 geschaffen wurde.",
          nl: "Pinotage is een Zuid-Afrikaanse kruising tussen Pinot Noir en Cinsault (voorheen Hermitage genoemd), gecreëerd in 1925."
        }
      },
      {
        question: {
          en: "Which grape variety is used to make Amarone della Valpolicella?",
          es: "¿Qué variedad de uva se utiliza para hacer Amarone della Valpolicella?",
          de: "Welche Rebsorte wird zur Herstellung von Amarone della Valpolicella verwendet?",
          nl: "Welke druivensoort wordt gebruikt om Amarone della Valpolicella te maken?"
        },
        options: [
          { en: "Corvina", es: "Corvina", de: "Corvina", nl: "Corvina" },
          { en: "Sangiovese", es: "Sangiovese", de: "Sangiovese", nl: "Sangiovese" },
          { en: "Nebbiolo", es: "Nebbiolo", de: "Nebbiolo", nl: "Nebbiolo" },
          { en: "Montepulciano", es: "Montepulciano", de: "Montepulciano", nl: "Montepulciano" }
        ],
        correct: 0,
        explanation: {
          en: "Amarone is made primarily from Corvina grapes, along with Rondinella and Molinara, using dried grapes for concentrated flavors.",
          es: "Amarone se hace principalmente de uvas Corvina, junto con Rondinella y Molinara, usando uvas secas para sabores concentrados.",
          de: "Amarone wird hauptsächlich aus Corvina-Trauben hergestellt, zusammen mit Rondinella und Molinara, wobei getrocknete Trauben für konzentrierte Aromen verwendet werden.",
          nl: "Amarone wordt voornamelijk gemaakt van Corvina druiven, samen met Rondinella en Molinara, waarbij gedroogde druiven worden gebruikt voor geconcentreerde smaken."
        }
      },
      {
        question: {
          en: "What is Zinfandel called in Southern Italy?",
          es: "¿Cómo se llama Zinfandel en el sur de Italia?",
          de: "Wie heißt Zinfandel in Süditalien?",
          nl: "Hoe heet Zinfandel in Zuid-Italië?"
        },
        options: [
          { en: "Nero d'Avola", es: "Nero d'Avola", de: "Nero d'Avola", nl: "Nero d'Avola" },
          { en: "Primitivo", es: "Primitivo", de: "Primitivo", nl: "Primitivo" },
          { en: "Aglianico", es: "Aglianico", de: "Aglianico", nl: "Aglianico" },
          { en: "Negroamaro", es: "Negroamaro", de: "Negroamaro", nl: "Negroamaro" }
        ],
        correct: 1,
        explanation: {
          en: "Zinfandel and Primitivo are the same grape variety, with Primitivo being the Italian name used in Puglia.",
          es: "Zinfandel y Primitivo son la misma variedad de uva, siendo Primitivo el nombre italiano utilizado en Puglia.",
          de: "Zinfandel und Primitivo sind dieselbe Rebsorte, wobei Primitivo der italienische Name ist, der in Apulien verwendet wird.",
          nl: "Zinfandel en Primitivo zijn dezelfde druivensoort, waarbij Primitivo de Italiaanse naam is die in Puglia wordt gebruikt."
        }
      },
      {
        question: {
          en: "Which grape variety is the primary component of White Bordeaux wines?",
          es: "¿Qué variedad de uva es el componente principal de los vinos blancos de Burdeos?",
          de: "Welche Rebsorte ist die Hauptkomponente weißer Bordeaux-Weine?",
          nl: "Welke druivensoort is het hoofdbestanddeel van witte Bordeaux wijnen?"
        },
        options: [
          { en: "Chardonnay", es: "Chardonnay", de: "Chardonnay", nl: "Chardonnay" },
          { en: "Sauvignon Blanc", es: "Sauvignon Blanc", de: "Sauvignon Blanc", nl: "Sauvignon Blanc" },
          { en: "Riesling", es: "Riesling", de: "Riesling", nl: "Riesling" },
          { en: "Chenin Blanc", es: "Chenin Blanc", de: "Chenin Blanc", nl: "Chenin Blanc" }
        ],
        correct: 1,
        explanation: {
          en: "White Bordeaux wines are primarily made from Sauvignon Blanc, often blended with Sémillon and Muscadelle.",
          es: "Los vinos blancos de Burdeos se hacen principalmente de Sauvignon Blanc, a menudo mezclado con Sémillon y Muscadelle.",
          de: "Weiße Bordeaux-Weine werden hauptsächlich aus Sauvignon Blanc hergestellt, oft vermischt mit Sémillon und Muscadelle.",
          nl: "Witte Bordeaux wijnen worden voornamelijk gemaakt van Sauvignon Blanc, vaak gemengd met Sémillon en Muscadelle."
        }
      },
      {
        question: {
          en: "Which grape variety is used to make the sweet wine Tokaji?",
          es: "¿Qué variedad de uva se utiliza para hacer el vino dulce Tokaji?",
          de: "Welche Rebsorte wird zur Herstellung des süßen Weins Tokaji verwendet?",
          nl: "Welke druivensoort wordt gebruikt om de zoete wijn Tokaji te maken?"
        },
        options: [
          { en: "Riesling", es: "Riesling", de: "Riesling", nl: "Riesling" },
          { en: "Gewürztraminer", es: "Gewürztraminer", de: "Gewürztraminer", nl: "Gewürztraminer" },
          { en: "Furmint", es: "Furmint", de: "Furmint", nl: "Furmint" },
          { en: "Moscato", es: "Moscato", de: "Moscato", nl: "Moscato" }
        ],
        correct: 2,
        explanation: {
          en: "Tokaji is made primarily from Furmint grapes affected by noble rot, producing sweet, complex wines from Hungary.",
          es: "Tokaji se hace principalmente de uvas Furmint afectadas por podredumbre noble, produciendo vinos dulces y complejos de Hungría.",
          de: "Tokaji wird hauptsächlich aus Furmint-Trauben hergestellt, die von Edelfäule befallen sind, und produziert süße, komplexe Weine aus Ungarn.",
          nl: "Tokaji wordt voornamelijk gemaakt van Furmint druiven aangetast door edelrot, die zoete, complexe wijnen uit Hongarije produceren."
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
