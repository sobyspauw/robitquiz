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
      },
      {
        question: {
          en: "Which grape is primarily used to make Sauternes?",
          es: "¿Qué uva se utiliza principalmente para hacer Sauternes?",
          de: "Welche Traube wird hauptsächlich zur Herstellung von Sauternes verwendet?",
          nl: "Welke druif wordt voornamelijk gebruikt om Sauternes te maken?"
        },
        options: [
          { en: "Sémillon", es: "Sémillon", de: "Sémillon", nl: "Sémillon" },
          { en: "Riesling", es: "Riesling", de: "Riesling", nl: "Riesling" },
          { en: "Chenin Blanc", es: "Chenin Blanc", de: "Chenin Blanc", nl: "Chenin Blanc" },
          { en: "Muscadelle", es: "Muscadelle", de: "Muscadelle", nl: "Muscadelle" }
        ],
        correct: 0,
        explanation: {
          en: "Sauternes is primarily made from Sémillon grapes affected by noble rot, producing sweet, honeyed wines.",
          es: "Sauternes se hace principalmente de uvas Sémillon afectadas por podredumbre noble, produciendo vinos dulces y con miel.",
          de: "Sauternes wird hauptsächlich aus Sémillon-Trauben hergestellt, die von Edelfäule befallen sind und süße, honigähnliche Weine produzieren.",
          nl: "Sauternes wordt voornamelijk gemaakt van Sémillon druiven aangetast door edelrot, die zoete, honingachtige wijnen produceren."
        }
      },
      {
        question: {
          en: "Which grape variety is Gewürztraminer most associated with?",
          es: "¿Con qué región está más asociada la uva Gewürztraminer?",
          de: "Mit welcher Region wird Gewürztraminer am meisten in Verbindung gebracht?",
          nl: "Met welke regio wordt Gewürztraminer het meest geassocieerd?"
        },
        options: [
          { en: "Alsace, France", es: "Alsacia, Francia", de: "Elsass, Frankreich", nl: "Elzas, Frankrijk" },
          { en: "Tuscany, Italy", es: "Toscana, Italia", de: "Toskana, Italien", nl: "Toscane, Italië" },
          { en: "Rioja, Spain", es: "Rioja, España", de: "Rioja, Spanien", nl: "Rioja, Spanje" },
          { en: "Napa Valley, USA", es: "Napa Valley, EE.UU.", de: "Napa Valley, USA", nl: "Napa Valley, VS" }
        ],
        correct: 0,
        explanation: {
          en: "Gewürztraminer is most famous in Alsace, France, where it produces aromatic, spicy white wines.",
          es: "Gewürztraminer es más famoso en Alsacia, Francia, donde produce vinos blancos aromáticos y especiados.",
          de: "Gewürztraminer ist am bekanntesten im Elsass, Frankreich, wo er aromatische, würzige Weißweine produziert.",
          nl: "Gewürztraminer is het meest beroemd in de Elzas, Frankrijk, waar het aromatische, kruidige witte wijnen produceert."
        }
      },
      {
        question: {
          en: "What is Grüner Veltliner?",
          es: "¿Qué es Grüner Veltliner?",
          de: "Was ist Grüner Veltliner?",
          nl: "Wat is Grüner Veltliner?"
        },
        options: [
          { en: "Austrian white grape variety", es: "Variedad de uva blanca austríaca", de: "Österreichische weiße Rebsorte", nl: "Oostenrijkse witte druivensoort" },
          { en: "German red grape", es: "Uva tinta alemana", de: "Deutsche rote Traube", nl: "Duitse rode druif" },
          { en: "Swiss white wine", es: "Vino blanco suizo", de: "Schweizer Weißwein", nl: "Zwitserse witte wijn" },
          { en: "French sparkling wine", es: "Vino espumoso francés", de: "Französischer Schaumwein", nl: "Franse mousserende wijn" }
        ],
        correct: 0,
        explanation: {
          en: "Grüner Veltliner is Austria's signature white grape variety, producing fresh, peppery wines.",
          es: "Grüner Veltliner es la variedad de uva blanca emblemática de Austria, produciendo vinos frescos y picantes.",
          de: "Grüner Veltliner ist Österreichs charakteristische weiße Rebsorte und produziert frische, pfeffrige Weine.",
          nl: "Grüner Veltliner is Oostenrijk's kenmerkende witte druivensoort, die frisse, peperige wijnen produceert."
        }
      },
      {
        question: {
          en: "Which grape is used to make Vinho Verde?",
          es: "¿Qué uva se utiliza para hacer Vinho Verde?",
          de: "Welche Traube wird zur Herstellung von Vinho Verde verwendet?",
          nl: "Welke druif wordt gebruikt om Vinho Verde te maken?"
        },
        options: [
          { en: "Alvarinho (Albariño)", es: "Alvarinho (Albariño)", de: "Alvarinho (Albariño)", nl: "Alvarinho (Albariño)" },
          { en: "Verdejo", es: "Verdejo", de: "Verdejo", nl: "Verdejo" },
          { en: "Godello", es: "Godello", de: "Godello", nl: "Godello" },
          { en: "Treixadura", es: "Treixadura", de: "Treixadura", nl: "Treixadura" }
        ],
        correct: 0,
        explanation: {
          en: "Vinho Verde often features Alvarinho (Albariño), producing light, slightly sparkling Portuguese white wines.",
          es: "Vinho Verde a menudo presenta Alvarinho (Albariño), produciendo vinos blancos portugueses ligeros y ligeramente espumosos.",
          de: "Vinho Verde enthält oft Alvarinho (Albariño) und produziert leichte, leicht prickelnde portugiesische Weißweine.",
          nl: "Vinho Verde bevat vaak Alvarinho (Albariño), die lichte, enigszins mousserende Portugese witte wijnen produceert."
        }
      },
      {
        question: {
          en: "What is the main grape in Valpolicella wines?",
          es: "¿Cuál es la uva principal en los vinos de Valpolicella?",
          de: "Was ist die Haupttraube in Valpolicella-Weinen?",
          nl: "Wat is de hoofddruif in Valpolicella wijnen?"
        },
        options: [
          { en: "Corvina", es: "Corvina", de: "Corvina", nl: "Corvina" },
          { en: "Sangiovese", es: "Sangiovese", de: "Sangiovese", nl: "Sangiovese" },
          { en: "Barbera", es: "Barbera", de: "Barbera", nl: "Barbera" },
          { en: "Nebbiolo", es: "Nebbiolo", de: "Nebbiolo", nl: "Nebbiolo" }
        ],
        correct: 0,
        explanation: {
          en: "Corvina is the primary grape in Valpolicella, creating light to medium-bodied red wines from Veneto.",
          es: "Corvina es la uva principal en Valpolicella, creando vinos tintos de ligeros a medianos del Veneto.",
          de: "Corvina ist die Haupttraube in Valpolicella und erzeugt leichte bis mittelschwere Rotweine aus Venetien.",
          nl: "Corvina is de hoofddruif in Valpolicella, die lichte tot middel-bodied rode wijnen uit Veneto creëert."
        }
      },
      {
        question: {
          en: "Which white grape is dominant in Pouilly-Fumé?",
          es: "¿Qué uva blanca es dominante en Pouilly-Fumé?",
          de: "Welche weiße Traube dominiert in Pouilly-Fumé?",
          nl: "Welke witte druif is dominant in Pouilly-Fumé?"
        },
        options: [
          { en: "Sauvignon Blanc", es: "Sauvignon Blanc", de: "Sauvignon Blanc", nl: "Sauvignon Blanc" },
          { en: "Chardonnay", es: "Chardonnay", de: "Chardonnay", nl: "Chardonnay" },
          { en: "Viognier", es: "Viognier", de: "Viognier", nl: "Viognier" },
          { en: "Chenin Blanc", es: "Chenin Blanc", de: "Chenin Blanc", nl: "Chenin Blanc" }
        ],
        correct: 0,
        explanation: {
          en: "Pouilly-Fumé is made exclusively from Sauvignon Blanc, producing crisp, flinty Loire Valley whites.",
          es: "Pouilly-Fumé se hace exclusivamente de Sauvignon Blanc, produciendo blancos frescos y pedregosos del Valle del Loira.",
          de: "Pouilly-Fumé wird ausschließlich aus Sauvignon Blanc hergestellt und produziert frische, flintige Loire-Weißweine.",
          nl: "Pouilly-Fumé wordt uitsluitend gemaakt van Sauvignon Blanc, die frisse, vuursteenachtige Loire-vallei wijnen produceert."
        }
      },
      {
        question: {
          en: "What is Carménère most associated with?",
          es: "¿Con qué país está más asociada la Carménère?",
          de: "Mit welchem Land wird Carménère am meisten in Verbindung gebracht?",
          nl: "Met welk land wordt Carménère het meest geassocieerd?"
        },
        options: [
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" }
        ],
        correct: 0,
        explanation: {
          en: "Carménère has become Chile's signature grape after being rediscovered there in the 1990s.",
          es: "Carménère se ha convertido en la uva emblemática de Chile después de ser redescubierta allí en los años 90.",
          de: "Carménère ist Chiles charakteristische Traube geworden, nachdem sie dort in den 1990er Jahren wiederentdeckt wurde.",
          nl: "Carménère is Chili's kenmerkende druif geworden nadat deze daar in de jaren 90 werd herontdekt."
        }
      },
      {
        question: {
          en: "Which grape is used in Australian Grange wine?",
          es: "¿Qué uva se utiliza en el vino australiano Grange?",
          de: "Welche Traube wird im australischen Grange-Wein verwendet?",
          nl: "Welke druif wordt gebruikt in Australische Grange wijn?"
        },
        options: [
          { en: "Shiraz", es: "Shiraz", de: "Shiraz", nl: "Shiraz" },
          { en: "Cabernet Sauvignon", es: "Cabernet Sauvignon", de: "Cabernet Sauvignon", nl: "Cabernet Sauvignon" },
          { en: "Grenache", es: "Grenache", de: "Grenache", nl: "Grenache" },
          { en: "Merlot", es: "Merlot", de: "Merlot", nl: "Merlot" }
        ],
        correct: 0,
        explanation: {
          en: "Penfolds Grange is made predominantly from Shiraz, Australia's iconic premium red wine.",
          es: "Penfolds Grange se hace predominantemente de Shiraz, el vino tinto premium icónico de Australia.",
          de: "Penfolds Grange wird überwiegend aus Shiraz hergestellt, Australiens ikonischem Premium-Rotwein.",
          nl: "Penfolds Grange wordt voornamelijk gemaakt van Shiraz, Australië's iconische premium rode wijn."
        }
      },
      {
        question: {
          en: "What is Torrontés?",
          es: "¿Qué es Torrontés?",
          de: "Was ist Torrontés?",
          nl: "Wat is Torrontés?"
        },
        options: [
          { en: "Argentine white grape variety", es: "Variedad de uva blanca argentina", de: "Argentinische weiße Rebsorte", nl: "Argentijnse witte druivensoort" },
          { en: "Spanish red wine", es: "Vino tinto español", de: "Spanischer Rotwein", nl: "Spaanse rode wijn" },
          { en: "Portuguese dessert wine", es: "Vino de postre portugués", de: "Portugiesischer Dessertwein", nl: "Portugese dessertwijn" },
          { en: "Chilean sparkling wine", es: "Vino espumoso chileno", de: "Chilenischer Schaumwein", nl: "Chileense mousserende wijn" }
        ],
        correct: 0,
        explanation: {
          en: "Torrontés is Argentina's signature white grape variety, producing aromatic, floral white wines.",
          es: "Torrontés es la variedad de uva blanca emblemática de Argentina, produciendo vinos blancos aromáticos y florales.",
          de: "Torrontés ist Argentiniens charakteristische weiße Rebsorte und produziert aromatische, blumige Weißweine.",
          nl: "Torrontés is Argentinië's kenmerkende witte druivensoort, die aromatische, bloemige witte wijnen produceert."
        }
      },
      {
        question: {
          en: "Which grape variety is dominant in Côte-Rôtie?",
          es: "¿Qué variedad de uva es dominante en Côte-Rôtie?",
          de: "Welche Rebsorte dominiert in Côte-Rôtie?",
          nl: "Welke druivensoort is dominant in Côte-Rôtie?"
        },
        options: [
          { en: "Syrah", es: "Syrah", de: "Syrah", nl: "Syrah" },
          { en: "Grenache", es: "Grenache", de: "Grenache", nl: "Grenache" },
          { en: "Mourvèdre", es: "Mourvèdre", de: "Mourvèdre", nl: "Mourvèdre" },
          { en: "Carignan", es: "Carignan", de: "Carignan", nl: "Carignan" }
        ],
        correct: 0,
        explanation: {
          en: "Côte-Rôtie is made predominantly from Syrah, sometimes with a small amount of Viognier blended in.",
          es: "Côte-Rôtie se hace predominantemente de Syrah, a veces con una pequeña cantidad de Viognier mezclado.",
          de: "Côte-Rôtie wird überwiegend aus Syrah hergestellt, manchmal mit einer kleinen Menge Viognier vermischt.",
          nl: "Côte-Rôtie wordt voornamelijk gemaakt van Syrah, soms met een kleine hoeveelheid Viognier gemengd."
        }
      },
      {
        question: {
          en: "What is Verdicchio?",
          es: "¿Qué es Verdicchio?",
          de: "Was ist Verdicchio?",
          nl: "Wat is Verdicchio?"
        },
        options: [
          { en: "Italian white grape variety", es: "Variedad de uva blanca italiana", de: "Italienische weiße Rebsorte", nl: "Italiaanse witte druivensoort" },
          { en: "Spanish red wine", es: "Vino tinto español", de: "Spanischer Rotwein", nl: "Spaanse rode wijn" },
          { en: "French rosé style", es: "Estilo rosado francés", de: "Französischer Roséstil", nl: "Franse roséstijl" },
          { en: "Greek dessert wine", es: "Vino de postre griego", de: "Griechischer Dessertwein", nl: "Griekse dessertwijn" }
        ],
        correct: 0,
        explanation: {
          en: "Verdicchio is an Italian white grape from Marche, producing crisp, mineral-driven wines.",
          es: "Verdicchio es una uva blanca italiana de Marche, produciendo vinos frescos y minerales.",
          de: "Verdicchio ist eine italienische weiße Traube aus den Marken und produziert frische, mineralische Weine.",
          nl: "Verdicchio is een Italiaanse witte druif uit Marche, die frisse, minerale wijnen produceert."
        }
      },
      {
        question: {
          en: "Which grape is used to make Brunello di Montalcino?",
          es: "¿Qué uva se utiliza para hacer Brunello di Montalcino?",
          de: "Welche Traube wird zur Herstellung von Brunello di Montalcino verwendet?",
          nl: "Welke druif wordt gebruikt om Brunello di Montalcino te maken?"
        },
        options: [
          { en: "Sangiovese", es: "Sangiovese", de: "Sangiovese", nl: "Sangiovese" },
          { en: "Nebbiolo", es: "Nebbiolo", de: "Nebbiolo", nl: "Nebbiolo" },
          { en: "Barbera", es: "Barbera", de: "Barbera", nl: "Barbera" },
          { en: "Montepulciano", es: "Montepulciano", de: "Montepulciano", nl: "Montepulciano" }
        ],
        correct: 0,
        explanation: {
          en: "Brunello di Montalcino is made from 100% Sangiovese (locally called Brunello), aged for extended periods.",
          es: "Brunello di Montalcino se hace de 100% Sangiovese (llamado localmente Brunello), envejecido por períodos extendidos.",
          de: "Brunello di Montalcino wird aus 100% Sangiovese (lokal Brunello genannt) hergestellt und über längere Zeiträume gereift.",
          nl: "Brunello di Montalcino wordt gemaakt van 100% Sangiovese (lokaal Brunello genoemd), langdurig gerijpt."
        }
      },
      {
        question: {
          en: "What is Mourvèdre called in Spain?",
          es: "¿Cómo se llama Mourvèdre en España?",
          de: "Wie heißt Mourvèdre in Spanien?",
          nl: "Hoe heet Mourvèdre in Spanje?"
        },
        options: [
          { en: "Monastrell", es: "Monastrell", de: "Monastrell", nl: "Monastrell" },
          { en: "Garnacha", es: "Garnacha", de: "Garnacha", nl: "Garnacha" },
          { en: "Tempranillo", es: "Tempranillo", de: "Tempranillo", nl: "Tempranillo" },
          { en: "Mencía", es: "Mencía", de: "Mencía", nl: "Mencía" }
        ],
        correct: 0,
        explanation: {
          en: "Mourvèdre is known as Monastrell in Spain, producing robust, tannic red wines.",
          es: "Mourvèdre se conoce como Monastrell en España, produciendo vinos tintos robustos y tánicos.",
          de: "Mourvèdre ist in Spanien als Monastrell bekannt und produziert robuste, tanninreiche Rotweine.",
          nl: "Mourvèdre staat in Spanje bekend als Monastrell, die robuuste, tanninerijke rode wijnen produceert."
        }
      },
      {
        question: {
          en: "Which grape variety produces Amarone della Valpolicella?",
          es: "¿Qué variedad de uva produce Amarone della Valpolicella?",
          de: "Welche Rebsorte produziert Amarone della Valpolicella?",
          nl: "Welke druivensoort produceert Amarone della Valpolicella?"
        },
        options: [
          { en: "Corvina blend", es: "Mezcla de Corvina", de: "Corvina-Mischung", nl: "Corvina blend" },
          { en: "Sangiovese", es: "Sangiovese", de: "Sangiovese", nl: "Sangiovese" },
          { en: "Nebbiolo", es: "Nebbiolo", de: "Nebbiolo", nl: "Nebbiolo" },
          { en: "Barbera", es: "Barbera", de: "Barbera", nl: "Barbera" }
        ],
        correct: 0,
        explanation: {
          en: "Amarone is made from dried Corvina grapes (with Rondinella and Molinara), creating rich, concentrated wines.",
          es: "Amarone se hace de uvas Corvina secas (con Rondinella y Molinara), creando vinos ricos y concentrados.",
          de: "Amarone wird aus getrockneten Corvina-Trauben (mit Rondinella und Molinara) hergestellt und erzeugt reiche, konzentrierte Weine.",
          nl: "Amarone wordt gemaakt van gedroogde Corvina druiven (met Rondinella en Molinara), die rijke, geconcentreerde wijnen creëren."
        }
      },
      {
        question: {
          en: "What is Viognier known for producing?",
          es: "¿Por qué es conocida la Viognier?",
          de: "Wofür ist Viognier bekannt?",
          nl: "Waarvoor staat Viognier bekend?"
        },
        options: [
          { en: "Aromatic white wines", es: "Vinos blancos aromáticos", de: "Aromatische Weißweine", nl: "Aromatische witte wijnen" },
          { en: "Light red wines", es: "Vinos tintos ligeros", de: "Leichte Rotweine", nl: "Lichte rode wijnen" },
          { en: "Sparkling wines", es: "Vinos espumosos", de: "Schaumweine", nl: "Mousserende wijnen" },
          { en: "Fortified wines", es: "Vinos fortificados", de: "Likörweine", nl: "Versterkte wijnen" }
        ],
        correct: 0,
        explanation: {
          en: "Viognier produces highly aromatic white wines with floral and stone fruit notes, particularly from Condrieu.",
          es: "Viognier produce vinos blancos muy aromáticos con notas florales y de frutas de hueso, particularmente de Condrieu.",
          de: "Viognier produziert hocharomatische Weißweine mit blumigen und Steinfruchtnoten, besonders aus Condrieu.",
          nl: "Viognier produceert zeer aromatische witte wijnen met bloemige en steenvruchttonen, vooral uit Condrieu."
        }
      },
      {
        question: {
          en: "Which grape is Nero d'Avola?",
          es: "¿Qué es Nero d'Avola?",
          de: "Was ist Nero d'Avola?",
          nl: "Wat is Nero d'Avola?"
        },
        options: [
          { en: "Sicilian red grape variety", es: "Variedad de uva tinta siciliana", de: "Sizilianische rote Rebsorte", nl: "Siciliaanse rode druivensoort" },
          { en: "Tuscan white grape", es: "Uva blanca toscana", de: "Toskanische weiße Traube", nl: "Toscaanse witte druif" },
          { en: "Piedmont sparkling wine", es: "Vino espumoso de Piamonte", de: "Piemonteser Schaumwein", nl: "Piemontese mousserende wijn" },
          { en: "Venetian rosé style", es: "Estilo rosado veneciano", de: "Venezianischer Roséstil", nl: "Venetiaanse roséstijl" }
        ],
        correct: 0,
        explanation: {
          en: "Nero d'Avola is Sicily's most important red grape variety, producing full-bodied, fruity wines.",
          es: "Nero d'Avola es la variedad de uva tinta más importante de Sicilia, produciendo vinos con cuerpo y afrutados.",
          de: "Nero d'Avola ist Siziliens wichtigste rote Rebsorte und produziert vollmundige, fruchtige Weine.",
          nl: "Nero d'Avola is Sicilië's belangrijkste rode druivensoort, die volle, fruitige wijnen produceert."
        }
      },
      {
        question: {
          en: "What is Petit Verdot typically used for?",
          es: "¿Para qué se utiliza típicamente Petit Verdot?",
          de: "Wofür wird Petit Verdot typischerweise verwendet?",
          nl: "Waarvoor wordt Petit Verdot typisch gebruikt?"
        },
        options: [
          { en: "Blending component in Bordeaux", es: "Componente de mezcla en Burdeos", de: "Mischkomponente in Bordeaux", nl: "Blendcomponent in Bordeaux" },
          { en: "Single varietal Burgundy", es: "Borgoña de variedad única", de: "Burgundischer Einzelsorte", nl: "Enkele variëteit Bourgogne" },
          { en: "Sparkling wine base", es: "Base de vino espumoso", de: "Schaumweinbasis", nl: "Mousserende wijnbasis" },
          { en: "Dessert wine production", es: "Producción de vino de postre", de: "Dessertw einproduktion", nl: "Dessertwijnproductie" }
        ],
        correct: 0,
        explanation: {
          en: "Petit Verdot is typically used as a blending grape in Bordeaux, adding color, tannin, and structure.",
          es: "Petit Verdot se utiliza típicamente como uva de mezcla en Burdeos, añadiendo color, tanino y estructura.",
          de: "Petit Verdot wird typischerweise als Mischtraube in Bordeaux verwendet und fügt Farbe, Tannin und Struktur hinzu.",
          nl: "Petit Verdot wordt typisch gebruikt als blendingdruif in Bordeaux, die kleur, tannine en structuur toevoegt."
        }
      },
      {
        question: {
          en: "Which grape variety is Grignolino?",
          es: "¿Qué variedad de uva es Grignolino?",
          de: "Welche Rebsorte ist Grignolino?",
          nl: "Welke druivensoort is Grignolino?"
        },
        options: [
          { en: "Piedmont red grape", es: "Uva tinta de Piamonte", de: "Piemonteser rote Traube", nl: "Piemontese rode druif" },
          { en: "Tuscan white grape", es: "Uva blanca toscana", de: "Toskanische weiße Traube", nl: "Toscaanse witte druif" },
          { en: "Sicilian rosé grape", es: "Uva rosada siciliana", de: "Sizilianische Rosétraube", nl: "Siciliaanse roséruif" },
          { en: "Veneto sparkling base", es: "Base espumoso de Véneto", de: "Veneto-Schaumweinbasis", nl: "Veneto mousserende basis" }
        ],
        correct: 0,
        explanation: {
          en: "Grignolino is a Piedmont red grape producing light-colored, tannic wines with high acidity.",
          es: "Grignolino es una uva tinta de Piamonte que produce vinos de color claro, tánicos con alta acidez.",
          de: "Grignolino ist eine Piemonteser rote Traube, die hellfarbige, tanninreiche Weine mit hoher Säure produziert.",
          nl: "Grignolino is een Piemontese rode druif die lichtgekleurde, tanninerijke wijnen met hoge zuurgraad produceert."
        }
      },
      {
        question: {
          en: "What is Mencía associated with?",
          es: "¿Con qué está asociada la Mencía?",
          de: "Womit wird Mencía in Verbindung gebracht?",
          nl: "Waarmee wordt Mencía geassocieerd?"
        },
        options: [
          { en: "Bierzo, Spain", es: "Bierzo, España", de: "Bierzo, Spanien", nl: "Bierzo, Spanje" },
          { en: "Tuscany, Italy", es: "Toscana, Italia", de: "Toskana, Italien", nl: "Toscane, Italië" },
          { en: "Bordeaux, France", es: "Burdeos, Francia", de: "Bordeaux, Frankreich", nl: "Bordeaux, Frankrijk" },
          { en: "Douro, Portugal", es: "Duero, Portugal", de: "Douro, Portugal", nl: "Douro, Portugal" }
        ],
        correct: 0,
        explanation: {
          en: "Mencía is associated with Bierzo, Spain, producing elegant, aromatic red wines similar to Pinot Noir.",
          es: "Mencía está asociada con Bierzo, España, produciendo vinos tintos elegantes y aromáticos similares a Pinot Noir.",
          de: "Mencía wird mit Bierzo, Spanien, in Verbindung gebracht und produziert elegante, aromatische Rotweine ähnlich wie Pinot Noir.",
          nl: "Mencía wordt geassocieerd met Bierzo, Spanje, die elegante, aromatische rode wijnen produceert vergelijkbaar met Pinot Noir."
        }
      },
      {
        question: {
          en: "Which grape produces Asti Spumante?",
          es: "¿Qué uva produce Asti Spumante?",
          de: "Welche Traube produziert Asti Spumante?",
          nl: "Welke druif produceert Asti Spumante?"
        },
        options: [
          { en: "Moscato Bianco", es: "Moscato Bianco", de: "Moscato Bianco", nl: "Moscato Bianco" },
          { en: "Glera", es: "Glera", de: "Glera", nl: "Glera" },
          { en: "Chardonnay", es: "Chardonnay", de: "Chardonnay", nl: "Chardonnay" },
          { en: "Pinot Grigio", es: "Pinot Grigio", de: "Pinot Grigio", nl: "Pinot Grigio" }
        ],
        correct: 0,
        explanation: {
          en: "Asti Spumante is made from Moscato Bianco grapes, producing sweet, aromatic sparkling wines.",
          es: "Asti Spumante se hace de uvas Moscato Bianco, produciendo vinos espumosos dulces y aromáticos.",
          de: "Asti Spumante wird aus Moscato Bianco-Trauben hergestellt und produziert süße, aromatische Schaumweine.",
          nl: "Asti Spumante wordt gemaakt van Moscato Bianco druiven, die zoete, aromatische mousserende wijnen produceren."
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
