// Beer Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "Beer Types and Styles",
          "es": "Tipos y Estilos de Cerveza",
          "de": "Bierarten und Stile",
          "nl": "Biertypes en Stijlen"
    },
    questions: [
      {
        question: {
                  "en": "What is the main difference between ales and lagers?",
                  "es": "¿Cuál es la principal diferencia entre ales y lagers?",
                  "de": "Was ist der Hauptunterschied zwischen Ales und Lagern?",
                  "nl": "Wat is het hoofdverschil tussen ales en lagers?"
        },
        options: [
        {
                  "en": "The serving temperature",
                  "es": "La temperatura de servicio",
                  "de": "Die Serviertemperatur",
                  "nl": "De serveertemperatuur"
        },
        {
                  "en": "The type of yeast used",
                  "es": "El tipo de levadura utilizada",
                  "de": "Die Art der verwendeten Hefe",
                  "nl": "Het type gist dat wordt gebruikt"
        },
        {
                  "en": "The color of the beer",
                  "es": "El color de la cerveza",
                  "de": "Die Farbe des Bieres",
                  "nl": "De kleur van het bier"
        },
        {
                  "en": "The alcohol content",
                  "es": "El contenido de alcohol",
                  "de": "Der Alkoholgehalt",
                  "nl": "Het alcoholpercentage"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The main difference between ales and lagers is the type of yeast used. Ales use top-fermenting yeast that works at warmer temperatures, while lagers use bottom-fermenting yeast that works at cooler temperatures.",
                  "es": "La principal diferencia entre ales y lagers es el tipo de levadura utilizada. Las ales usan levadura de fermentación alta que funciona a temperaturas más cálidas, mientras que las lagers usan levadura de fermentación baja que funciona a temperaturas más frías.",
                  "de": "Der Hauptunterschied zwischen Ales und Lagern ist die Art der verwendeten Hefe. Ales verwenden obergärige Hefe, die bei wärmeren Temperaturen arbeitet, während Lager untergärige Hefe verwenden, die bei kühleren Temperaturen arbeitet.",
                  "nl": "Het hoofdverschil tussen ales en lagers is het type gist dat wordt gebruikt. Ales gebruiken bovengistende gist die werkt bij warmere temperaturen, terwijl lagers ondergistende gist gebruiken die werkt bij koelere temperaturen."
        }
      },
      {
        question: {
                  "en": "Which beer style is characterized by its dark color and roasted flavor?",
                  "es": "¿Qué estilo de cerveza se caracteriza por su color oscuro y sabor tostado?",
                  "de": "Welcher Bierstil zeichnet sich durch seine dunkle Farbe und den gerösteten Geschmack aus?",
                  "nl": "Welke bierstijl wordt gekenmerkt door zijn donkere kleur en geroosterde smaak?"
        },
        options: [
        {
                  "en": "Stout",
                  "es": "Stout",
                  "de": "Stout",
                  "nl": "Stout"
        },
        {
                  "en": "Pilsner",
                  "es": "Pilsner",
                  "de": "Pilsner",
                  "nl": "Pilsner"
        },
        {
                  "en": "IPA",
                  "es": "IPA",
                  "de": "IPA",
                  "nl": "IPA"
        },
        {
                  "en": "Wheat beer",
                  "es": "Cerveza de trigo",
                  "de": "Weißbier",
                  "nl": "Tarwebier"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Stout is characterized by its dark color and roasted flavor, which comes from roasted barley and malts. Famous examples include Guinness and Murphy's.",
                  "es": "La stout se caracteriza por su color oscuro y sabor tostado, que proviene de la cebada y maltas tostadas. Ejemplos famosos incluyen Guinness y Murphy's.",
                  "de": "Stout zeichnet sich durch seine dunkle Farbe und den gerösteten Geschmack aus, der von gerösteter Gerste und Malzen stammt. Berühmte Beispiele sind Guinness und Murphy's.",
                  "nl": "Stout wordt gekenmerkt door zijn donkere kleur en geroosterde smaak, die komt van geroosterde gerst en mout. Beroemde voorbeelden zijn Guinness en Murphy's."
        }
      },
      {
        question: {
                  "en": "What does 'IPA' stand for?",
                  "es": "¿Qué significa 'IPA'?",
                  "de": "Wofür steht 'IPA'?",
                  "nl": "Waar staat 'IPA' voor?"
        },
        options: [
        {
                  "en": "Imperial Pale Ale",
                  "es": "Pale Ale Imperial",
                  "de": "Imperial Pale Ale",
                  "nl": "Imperial Pale Ale"
        },
        {
                  "en": "Irish Pale Ale",
                  "es": "Pale Ale Irlandés",
                  "de": "Irisches Pale Ale",
                  "nl": "Iers Pale Ale"
        },
        {
                  "en": "India Pale Ale",
                  "es": "India Pale Ale",
                  "de": "India Pale Ale",
                  "nl": "India Pale Ale"
        },
        {
                  "en": "International Pale Ale",
                  "es": "Pale Ale Internacional",
                  "de": "Internationales Pale Ale",
                  "nl": "Internationale Pale Ale"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "IPA stands for 'India Pale Ale'. This style was originally brewed with extra hops to preserve the beer during long sea voyages to British troops in India.",
                  "es": "IPA significa 'India Pale Ale'. Este estilo se elaboró originalmente con lúpulo extra para preservar la cerveza durante los largos viajes marítimos a las tropas británicas en India.",
                  "de": "IPA steht für 'India Pale Ale'. Dieser Stil wurde ursprünglich mit extra Hopfen gebraut, um das Bier während langer Seereisen zu britischen Truppen in Indien zu konservieren.",
                  "nl": "IPA staat voor 'India Pale Ale'. Deze stijl werd oorspronkelijk gebrouwen met extra hop om het bier te bewaren tijdens lange zeereizen naar Britse troepen in India."
        }
      },
      {
        question: {
                  "en": "Which country is most associated with the Pilsner beer style?",
                  "es": "¿Qué país está más asociado con el estilo de cerveza Pilsner?",
                  "de": "Welches Land wird am meisten mit dem Pilsner-Bierstil in Verbindung gebracht?",
                  "nl": "Welk land wordt het meest geassocieerd met de Pilsner bierstijl?"
        },
        options: [
        {
                  "en": "Czech Republic",
                  "es": "República Checa",
                  "de": "Tschechische Republik",
                  "nl": "Tsjechië"
        },
        {
                  "en": "Ireland",
                  "es": "Irlanda",
                  "de": "Irland",
                  "nl": "Ierland"
        },
        {
                  "en": "Germany",
                  "es": "Alemania",
                  "de": "Deutschland",
                  "nl": "Duitsland"
        },
        {
                  "en": "Belgium",
                  "es": "Bélgica",
                  "de": "Belgien",
                  "nl": "België"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Czech Republic is most associated with Pilsner, as it was first brewed in the city of Plzen (Pilsen) in 1842. Pilsner Urquell is the original Pilsner beer.",
                  "es": "La República Checa está más asociada con Pilsner, ya que se elaboró por primera vez en la ciudad de Plzen (Pilsen) en 1842. Pilsner Urquell es la cerveza Pilsner original.",
                  "de": "Die Tschechische Republik wird am meisten mit Pilsner in Verbindung gebracht, da es erstmals 1842 in der Stadt Plzen (Pilsen) gebraut wurde. Pilsner Urquell ist das ursprüngliche Pilsner-Bier.",
                  "nl": "Tsjechië wordt het meest geassocieerd met Pilsner, omdat het voor het eerst werd gebrouwen in de stad Plzen (Pilsen) in 1842. Pilsner Urquell is het oorspronkelijke Pilsner bier."
        }
      },
      {
        question: {
                  "en": "What type of beer is traditionally served in a wheat beer glass?",
                  "es": "¿Qué tipo de cerveza se sirve tradicionalmente en un vaso de cerveza de trigo?",
                  "de": "Welche Art von Bier wird traditionell in einem Weißbierglas serviert?",
                  "nl": "Welk type bier wordt traditioneel geserveerd in een tarwebier glas?"
        },
        options: [
        {
                  "en": "Stout",
                  "es": "Stout",
                  "de": "Stout",
                  "nl": "Stout"
        },
        {
                  "en": "Porter",
                  "es": "Porter",
                  "de": "Porter",
                  "nl": "Porter"
        },
        {
                  "en": "Lager",
                  "es": "Lager",
                  "de": "Lager",
                  "nl": "Lager"
        },
        {
                  "en": "Hefeweizen",
                  "es": "Hefeweizen",
                  "de": "Hefeweizen",
                  "nl": "Hefeweizen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Hefeweizen (wheat beer) is traditionally served in a wheat beer glass, which is tall and curved to showcase the beer's cloudy appearance and hold the characteristic thick foam head.",
                  "es": "Hefeweizen (cerveza de trigo) se sirve tradicionalmente en un vaso de cerveza de trigo, que es alto y curvado para mostrar la apariencia turbia de la cerveza y sostener la característica espuma espesa.",
                  "de": "Hefeweizen (Weißbier) wird traditionell in einem Weißbierglas serviert, das hoch und gebogen ist, um das trübe Aussehen des Bieres zu zeigen und den charakteristischen dicken Schaum zu halten.",
                  "nl": "Hefeweizen (tarwebier) wordt traditioneel geserveerd in een tarwebier glas, dat hoog en gebogen is om het troebele uiterlijk van het bier te tonen en het karakteristieke dikke schuim vast te houden."
        }
      },
      {
        question: {
                  "en": "Which beer style originated in Belgium and is known for its fruity esters?",
                  "es": "¿Qué estilo de cerveza se originó en Bélgica y es conocido por sus ésteres frutales?",
                  "de": "Welcher Bierstil stammt aus Belgien und ist für seine fruchtigen Ester bekannt?",
                  "nl": "Welke bierstijl ontstond in België en staat bekend om zijn fruitige esters?"
        },
        options: [
        {
                  "en": "Belgian Tripel",
                  "es": "Tripel Belga",
                  "de": "Belgisches Tripel",
                  "nl": "Belgische Tripel"
        },
        {
                  "en": "American Lager",
                  "es": "Lager Americana",
                  "de": "Amerikanisches Lager",
                  "nl": "Amerikaanse Lager"
        },
        {
                  "en": "English Bitter",
                  "es": "Bitter Inglés",
                  "de": "Englisches Bitter",
                  "nl": "Engelse Bitter"
        },
        {
                  "en": "German Märzen",
                  "es": "Märzen Alemán",
                  "de": "Deutsches Märzen",
                  "nl": "Duitse Märzen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Belgian Tripel originated in Belgium and is known for its complex fruity esters produced by Belgian yeast strains. It's typically golden in color with high alcohol content.",
                  "es": "El Tripel Belga se originó en Bélgica y es conocido por sus ésteres frutales complejos producidos por cepas de levadura belga. Típicamente es de color dorado con alto contenido de alcohol.",
                  "de": "Belgisches Tripel stammt aus Belgien und ist für seine komplexen fruchtigen Ester bekannt, die von belgischen Hefestämmen produziert werden. Es ist typischerweise golden in der Farbe mit hohem Alkoholgehalt.",
                  "nl": "Belgische Tripel ontstond in België en staat bekend om zijn complexe fruitige esters geproduceerd door Belgische giststammen. Het is meestal goudkleurig met een hoog alcoholpercentage."
        }
      },
      {
        question: {
                  "en": "What is the characteristic feature of a 'sour beer'?",
                  "es": "¿Cuál es la característica distintiva de una 'cerveza ácida'?",
                  "de": "Was ist das charakteristische Merkmal eines 'Sauerbiers'?",
                  "nl": "Wat is het kenmerkende eigenschap van een 'zuur bier'?"
        },
        options: [
        {
                  "en": "Dark color",
                  "es": "Color oscuro",
                  "de": "Dunkle Farbe",
                  "nl": "Donkere kleur"
        },
        {
                  "en": "Hoppy bitterness",
                  "es": "Amargor del lúpulo",
                  "de": "Hopfige Bitterkeit",
                  "nl": "Hop bitterheid"
        },
        {
                  "en": "High alcohol content",
                  "es": "Alto contenido de alcohol",
                  "de": "Hoher Alkoholgehalt",
                  "nl": "Hoog alcoholpercentage"
        },
        {
                  "en": "Acidic taste",
                  "es": "Sabor ácido",
                  "de": "Saurer Geschmack",
                  "nl": "Zure smaak"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Sour beers are characterized by their acidic taste, which is created by wild yeasts and bacteria that produce lactic acid during fermentation. Examples include Lambics and Gose.",
                  "es": "Las cervezas ácidas se caracterizan por su sabor ácido, que es creado por levaduras silvestres y bacterias que producen ácido láctico durante la fermentación. Ejemplos incluyen Lambics y Gose.",
                  "de": "Sauerbiere zeichnen sich durch ihren sauren Geschmack aus, der durch wilde Hefen und Bakterien entsteht, die während der Gärung Milchsäure produzieren. Beispiele sind Lambics und Gose.",
                  "nl": "Zure bieren worden gekenmerkt door hun zure smaak, die wordt gecreëerd door wilde gisten en bacteriën die melkzuur produceren tijdens fermentatie. Voorbeelden zijn Lambics en Gose."
        }
      },
      {
        question: {
                  "en": "Which beer style is known for being 'session' beer?",
                  "es": "¿Qué estilo de cerveza es conocido por ser cerveza de 'sesión'?",
                  "de": "Welcher Bierstil ist als 'Session'-Bier bekannt?",
                  "nl": "Welke bierstijl staat bekend als 'sessie' bier?"
        },
        options: [
        {
                  "en": "English Mild",
                  "es": "Mild Inglés",
                  "de": "Englisches Mild",
                  "nl": "Engelse Mild"
        },
        {
                  "en": "Barleywine",
                  "es": "Barleywine",
                  "de": "Barleywine",
                  "nl": "Barleywine"
        },
        {
                  "en": "Imperial Stout",
                  "es": "Stout Imperial",
                  "de": "Imperial Stout",
                  "nl": "Imperial Stout"
        },
        {
                  "en": "Double IPA",
                  "es": "IPA Doble",
                  "de": "Doppel-IPA",
                  "nl": "Dubbele IPA"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "English Mild is known as a 'session' beer because of its low alcohol content (typically 2.8-4.5%), allowing drinkers to have multiple beers in one session without becoming overly intoxicated.",
                  "es": "El Mild Inglés es conocido como cerveza de 'sesión' debido a su bajo contenido de alcohol (típicamente 2.8-4.5%), permitiendo a los bebedores tomar múltiples cervezas en una sesión sin embriagarse excesivamente.",
                  "de": "Englisches Mild ist als 'Session'-Bier bekannt wegen seines niedrigen Alkoholgehalts (typischerweise 2,8-4,5%), was es Trinkern ermöglicht, mehrere Biere in einer Session zu haben, ohne übermäßig berauscht zu werden.",
                  "nl": "Engelse Mild staat bekend als 'sessie' bier vanwege zijn lage alcoholpercentage (meestal 2,8-4,5%), waardoor drinkers meerdere bieren in één sessie kunnen hebben zonder te dronken te worden."
        }
      },
      {
        question: {
                  "en": "What is the defining characteristic of a Porter beer?",
                  "es": "¿Cuál es la característica definitoria de una cerveza Porter?",
                  "de": "Was ist das definierende Merkmal eines Porter-Bieres?",
                  "nl": "Wat is het bepalende kenmerk van een Porter bier?"
        },
        options: [
        {
                  "en": "High hop content",
                  "es": "Alto contenido de lúpulo",
                  "de": "Hoher Hopfengehalt",
                  "nl": "Hoog hopgehalte"
        },
        {
                  "en": "Wheat-based recipe",
                  "es": "Receta basada en trigo",
                  "de": "Weizenbasiertes Rezept",
                  "nl": "Op tarwe gebaseerd recept"
        },
        {
                  "en": "Dark color and roasted malt flavors",
                  "es": "Color oscuro y sabores de malta tostada",
                  "de": "Dunkle Farbe und geröstete Malzaromen",
                  "nl": "Donkere kleur en geroosterde moutsmaken"
        },
        {
                  "en": "Light color and crisp taste",
                  "es": "Color claro y sabor fresco",
                  "de": "Helle Farbe und frischer Geschmack",
                  "nl": "Lichte kleur en frisse smaak"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Porter is defined by its dark color and roasted malt flavors. It was one of the first beer styles to be aged and was historically popular among London dock workers.",
                  "es": "Porter se define por su color oscuro y sabores de malta tostada. Fue uno de los primeros estilos de cerveza en ser envejecido y fue históricamente popular entre los trabajadores portuarios de Londres.",
                  "de": "Porter wird durch seine dunkle Farbe und geröstete Malzaromen definiert. Es war einer der ersten Bierstile, der gelagert wurde und war historisch bei Londoner Hafenarbeitern beliebt.",
                  "nl": "Porter wordt gedefinieerd door zijn donkere kleur en geroosterde moutsmaken. Het was een van de eerste bierstijlen die werd gerijpt en was historisch populair onder Londense havenarbeiders."
        }
      },
      {
        question: {
                  "en": "Which beer style is characterized by banana and clove flavors?",
                  "es": "¿Qué estilo de cerveza se caracteriza por sabores de plátano y clavo?",
                  "de": "Welcher Bierstil zeichnet sich durch Bananen- und Nelkenaromen aus?",
                  "nl": "Welke bierstijl wordt gekenmerkt door banaan en kruidnagel smaken?"
        },
        options: [
        {
                  "en": "Irish Stout",
                  "es": "Stout Irlandés",
                  "de": "Irisches Stout",
                  "nl": "Iers Stout"
        },
        {
                  "en": "German Hefeweizen",
                  "es": "Hefeweizen Alemán",
                  "de": "Deutsches Hefeweizen",
                  "nl": "Duitse Hefeweizen"
        },
        {
                  "en": "American Pale Ale",
                  "es": "Pale Ale Americana",
                  "de": "Amerikanisches Pale Ale",
                  "nl": "Amerikaanse Pale Ale"
        },
        {
                  "en": "Czech Pilsner",
                  "es": "Pilsner Checo",
                  "de": "Tschechisches Pilsner",
                  "nl": "Tsjechische Pilsner"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "German Hefeweizen is characterized by banana and clove flavors, which are produced by specific wheat beer yeast strains during fermentation. These flavors are considered traditional and desirable in this style.",
                  "es": "El Hefeweizen Alemán se caracteriza por sabores de plátano y clavo, que son producidos por cepas específicas de levadura de cerveza de trigo durante la fermentación. Estos sabores se consideran tradicionales y deseables en este estilo.",
                  "de": "Deutsches Hefeweizen zeichnet sich durch Bananen- und Nelkenaromen aus, die von spezifischen Weißbier-Hefestämmen während der Gärung produziert werden. Diese Aromen gelten als traditionell und erwünscht bei diesem Stil.",
                  "nl": "Duitse Hefeweizen wordt gekenmerkt door banaan en kruidnagel smaken, die geproduceerd worden door specifieke tarwebier giststammen tijdens fermentatie. Deze smaken worden beschouwd als traditioneel en gewenst in deze stijl."
        }
      },
      {
        question: {
                  "en": "What is a Saison beer?",
                  "es": "¿Qué es una cerveza Saison?",
                  "de": "Was ist ein Saison-Bier?",
                  "nl": "Wat is een Saison bier?"
        },
        options: [
        {
                  "en": "A Belgian farmhouse ale",
                  "es": "Una ale de granja belga",
                  "de": "Ein belgisches Bauernhofbier",
                  "nl": "Een Belgisch boerderij ale"
        },
        {
                  "en": "An American lager",
                  "es": "Una lager americana",
                  "de": "Ein amerikanisches Lager",
                  "nl": "Een Amerikaanse lager"
        },
        {
                  "en": "A British dark ale",
                  "es": "Una ale oscura británica",
                  "de": "Ein britisches dunkles Ale",
                  "nl": "Een Britse donkere ale"
        },
        {
                  "en": "A German wheat beer",
                  "es": "Una cerveza de trigo alemana",
                  "de": "Ein deutsches Weizenbier",
                  "nl": "Een Duits tarwebier"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Saison is a Belgian farmhouse ale, traditionally brewed in the winter to be consumed during summer harvest season. It's typically highly carbonated with fruity and spicy notes.",
                  "es": "Saison es una ale de granja belga, tradicionalmente elaborada en invierno para ser consumida durante la temporada de cosecha de verano. Típicamente es altamente carbonatada con notas frutales y especiadas.",
                  "de": "Saison ist ein belgisches Bauernhofbier, das traditionell im Winter gebraut wird, um während der Sommerernte konsumiert zu werden. Es ist typischerweise stark kohlensäurehaltig mit fruchtigen und würzigen Noten.",
                  "nl": "Saison is een Belgisch boerderij ale, traditioneel gebrouwen in de winter om geconsumeerd te worden tijdens het zomeroogstseizoen. Het is meestal sterk koolzuurhoudend met fruitige en kruidige noten."
        }
      },
      {
        question: {
                  "en": "What distinguishes a Bock beer?",
                  "es": "¿Qué distingue a una cerveza Bock?",
                  "de": "Was zeichnet ein Bockbier aus?",
                  "nl": "Wat onderscheidt een Bock bier?"
        },
        options: [
        {
                  "en": "Strong lager with malty sweetness",
                  "es": "Lager fuerte con dulzura maltosa",
                  "de": "Starkes Lager mit malziger Süße",
                  "nl": "Sterke lager met moutige zoetheid"
        },
        {
                  "en": "Sour beer with fruit",
                  "es": "Cerveza ácida con fruta",
                  "de": "Saures Bier mit Frucht",
                  "nl": "Zuur bier met fruit"
        },
        {
                  "en": "Light ale with citrus notes",
                  "es": "Ale ligera con notas cítricas",
                  "de": "Leichtes Ale mit Zitrusnoten",
                  "nl": "Lichte ale met citrusnoten"
        },
        {
                  "en": "Hoppy pale ale",
                  "es": "Pale ale lupulado",
                  "de": "Hopfiges Pale Ale",
                  "nl": "Hop pale ale"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Bock is a strong German lager characterized by malty sweetness, darker color, and higher alcohol content (typically 6-7% ABV). Traditional varieties include Maibock, Doppelbock, and Eisbock.",
                  "es": "Bock es una lager alemana fuerte caracterizada por dulzura maltosa, color más oscuro y mayor contenido de alcohol (típicamente 6-7% ABV). Variedades tradicionales incluyen Maibock, Doppelbock y Eisbock.",
                  "de": "Bock ist ein starkes deutsches Lager, das sich durch malzige Süße, dunklere Farbe und höheren Alkoholgehalt (typischerweise 6-7% Vol.) auszeichnet. Traditionelle Varianten sind Maibock, Doppelbock und Eisbock.",
                  "nl": "Bock is een sterke Duitse lager gekenmerkt door moutige zoetheid, donkerdere kleur en hoger alcoholpercentage (meestal 6-7% ABV). Traditionele variëteiten zijn Maibock, Doppelbock en Eisbock."
        }
      },
      {
        question: {
                  "en": "What is a Gose beer known for?",
                  "es": "¿Por qué es conocida una cerveza Gose?",
                  "de": "Wofür ist ein Gose-Bier bekannt?",
                  "nl": "Waarvoor staat een Gose bier bekend?"
        },
        options: [
        {
                  "en": "Chocolate taste",
                  "es": "Sabor a chocolate",
                  "de": "Schokoladengeschmack",
                  "nl": "Chocoladesmaak"
        },
        {
                  "en": "Salty and sour taste",
                  "es": "Sabor salado y ácido",
                  "de": "Salziger und saurer Geschmack",
                  "nl": "Zoute en zure smaak"
        },
        {
                  "en": "Coffee notes",
                  "es": "Notas de café",
                  "de": "Kaffeenoten",
                  "nl": "Koffienoten"
        },
        {
                  "en": "Smoky flavor",
                  "es": "Sabor ahumado",
                  "de": "Rauchiger Geschmack",
                  "nl": "Rokerige smaak"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Gose is a German sour wheat beer known for its salty and sour taste, traditionally brewed with coriander and salt. It originated in Goslar, Germany.",
                  "es": "Gose es una cerveza de trigo ácida alemana conocida por su sabor salado y ácido, tradicionalmente elaborada con cilantro y sal. Se originó en Goslar, Alemania.",
                  "de": "Gose ist ein deutsches Sauerweizenbier, bekannt für seinen salzigen und sauren Geschmack, traditionell mit Koriander und Salz gebraut. Es stammt aus Goslar, Deutschland.",
                  "nl": "Gose is een Duits zuur tarwebier bekend om zijn zoute en zure smaak, traditioneel gebrouwen met koriander en zout. Het komt oorspronkelijk uit Goslar, Duitsland."
        }
      },
      {
        question: {
                  "en": "What makes a Rauchbier unique?",
                  "es": "¿Qué hace único a un Rauchbier?",
                  "de": "Was macht ein Rauchbier einzigartig?",
                  "nl": "Wat maakt een Rauchbier uniek?"
        },
        options: [
        {
                  "en": "Honey sweetness",
                  "es": "Dulzura de miel",
                  "de": "Honigsüße",
                  "nl": "Honingzoetheid"
        },
        {
                  "en": "Smoked malt flavor",
                  "es": "Sabor a malta ahumada",
                  "de": "Rauchmalzgeschmack",
                  "nl": "Gerookte moutsmaak"
        },
        {
                  "en": "Extra hops",
                  "es": "Lúpulo extra",
                  "de": "Extra Hopfen",
                  "nl": "Extra hop"
        },
        {
                  "en": "Fruit additions",
                  "es": "Adiciones de fruta",
                  "de": "Fruchtzusätze",
                  "nl": "Fruittoevoegingen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Rauchbier ('smoke beer' in German) is unique for its smoked malt flavor, created by drying malt over an open flame. The style is traditional to Bamberg, Germany.",
                  "es": "Rauchbier ('cerveza de humo' en alemán) es único por su sabor a malta ahumada, creado al secar la malta sobre una llama abierta. El estilo es tradicional de Bamberg, Alemania.",
                  "de": "Rauchbier ist einzigartig durch seinen Rauchmalzgeschmack, der durch das Trocknen von Malz über offener Flamme entsteht. Der Stil ist traditionell in Bamberg, Deutschland.",
                  "nl": "Rauchbier ('rookbier' in het Duits) is uniek vanwege zijn gerookte moutsmaak, gecreëerd door mout te drogen boven een open vuur. De stijl is traditioneel in Bamberg, Duitsland."
        }
      },
      {
        question: {
                  "en": "What is a Witbier?",
                  "es": "¿Qué es una Witbier?",
                  "de": "Was ist ein Witbier?",
                  "nl": "Wat is een Witbier?"
        },
        options: [
        {
                  "en": "Belgian white wheat beer",
                  "es": "Cerveza de trigo blanca belga",
                  "de": "Belgisches Weißweizenbier",
                  "nl": "Belgisch wit tarwebier"
        },
        {
                  "en": "Strong English ale",
                  "es": "Ale inglés fuerte",
                  "de": "Starkes englisches Ale",
                  "nl": "Sterk Engels ale"
        },
        {
                  "en": "Dark German lager",
                  "es": "Lager alemana oscura",
                  "de": "Dunkles deutsches Lager",
                  "nl": "Donkere Duitse lager"
        },
        {
                  "en": "American amber beer",
                  "es": "Cerveza ámbar americana",
                  "de": "Amerikanisches Amber Bier",
                  "nl": "Amerikaans amber bier"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Witbier (white beer) is a Belgian wheat beer, traditionally brewed with coriander and orange peel. It has a cloudy appearance and refreshing citrusy taste. Hoegaarden is a famous example.",
                  "es": "Witbier (cerveza blanca) es una cerveza de trigo belga, tradicionalmente elaborada con cilantro y cáscara de naranja. Tiene apariencia turbia y sabor cítrico refrescante. Hoegaarden es un ejemplo famoso.",
                  "de": "Witbier (Weißbier) ist ein belgisches Weizenbier, traditionell mit Koriander und Orangenschale gebraut. Es hat ein trübes Aussehen und einen erfrischenden zitrusartigen Geschmack. Hoegaarden ist ein berühmtes Beispiel.",
                  "nl": "Witbier is een Belgisch tarwebier, traditioneel gebrouwen met koriander en sinaasappelschil. Het heeft een troebel uiterlijk en verfrissende citroensmaak. Hoegaarden is een beroemd voorbeeld."
        }
      },
      {
        question: {
                  "en": "What is the primary difference between a Brown Ale and a Pale Ale?",
                  "es": "¿Cuál es la diferencia principal entre una Brown Ale y una Pale Ale?",
                  "de": "Was ist der Hauptunterschied zwischen einem Brown Ale und einem Pale Ale?",
                  "nl": "Wat is het belangrijkste verschil tussen een Brown Ale en een Pale Ale?"
        },
        options: [
        {
                  "en": "Country of origin",
                  "es": "País de origen",
                  "de": "Herkunftsland",
                  "nl": "Land van herkomst"
        },
        {
                  "en": "Serving temperature",
                  "es": "Temperatura de servicio",
                  "de": "Serviertemperatur",
                  "nl": "Serveertemperatuur"
        },
        {
                  "en": "Malt roast level and color",
                  "es": "Nivel de tostado de malta y color",
                  "de": "Malzröstgrad und Farbe",
                  "nl": "Mout roostingsniveau en kleur"
        },
        {
                  "en": "Alcohol content",
                  "es": "Contenido de alcohol",
                  "de": "Alkoholgehalt",
                  "nl": "Alcoholpercentage"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The primary difference is the malt roast level - Brown Ale uses more roasted malts resulting in darker color and nuttier, sweeter flavors, while Pale Ale uses lighter malts giving a golden color and more hop-forward taste.",
                  "es": "La diferencia principal es el nivel de tostado de la malta - Brown Ale usa maltas más tostadas resultando en color más oscuro y sabores más anuezados y dulces, mientras que Pale Ale usa maltas más claras dando un color dorado y sabor más orientado al lúpulo.",
                  "de": "Der Hauptunterschied ist der Malzröstgrad - Brown Ale verwendet stärker geröstete Malze, was zu dunklerer Farbe und nussigeren, süßeren Aromen führt, während Pale Ale hellere Malze verwendet, was eine goldene Farbe und hopfenbetonteren Geschmack ergibt.",
                  "nl": "Het belangrijkste verschil is het mout roostingsniveau - Brown Ale gebruikt meer geroosterde mout wat resulteert in donkerdere kleur en notige, zoetere smaken, terwijl Pale Ale lichtere mout gebruikt wat een gouden kleur en meer hop-gerichte smaak geeft."
        }
      },
      {
        question: {
                  "en": "What is a Barleywine?",
                  "es": "¿Qué es un Barleywine?",
                  "de": "Was ist ein Barleywine?",
                  "nl": "Wat is een Barleywine?"
        },
        options: [
        {
                  "en": "Light summer beer",
                  "es": "Cerveza ligera de verano",
                  "de": "Leichtes Sommerbier",
                  "nl": "Licht zomerbier"
        },
        {
                  "en": "Low-alcohol session beer",
                  "es": "Cerveza de sesión baja en alcohol",
                  "de": "Alkoholarmes Session-Bier",
                  "nl": "Laag-alcohol sessie bier"
        },
        {
                  "en": "Wine made from barley",
                  "es": "Vino hecho de cebada",
                  "de": "Wein aus Gerste",
                  "nl": "Wijn gemaakt van gerst"
        },
        {
                  "en": "Strong ale with high alcohol content",
                  "es": "Ale fuerte con alto contenido de alcohol",
                  "de": "Starkes Ale mit hohem Alkoholgehalt",
                  "nl": "Sterke ale met hoog alcoholpercentage"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Barleywine is a very strong ale with high alcohol content (8-12% ABV or higher), rich malty sweetness, and complex flavors. Despite the name, it's a beer, not wine. It ages well and improves over time.",
                  "es": "Barleywine es una ale muy fuerte con alto contenido de alcohol (8-12% ABV o más), rica dulzura maltosa y sabores complejos. A pesar del nombre, es una cerveza, no vino. Envejece bien y mejora con el tiempo.",
                  "de": "Barleywine ist ein sehr starkes Ale mit hohem Alkoholgehalt (8-12% Vol. oder höher), reicher malziger Süße und komplexen Aromen. Trotz des Namens ist es ein Bier, kein Wein. Es reift gut und verbessert sich mit der Zeit.",
                  "nl": "Barleywine is een zeer sterke ale met hoog alcoholpercentage (8-12% ABV of hoger), rijke moutige zoetheid en complexe smaken. Ondanks de naam is het een bier, geen wijn. Het rijpt goed en verbetert in de loop van de tijd."
        }
      },
      {
        question: {
                  "en": "What is a Kölsch beer?",
                  "es": "¿Qué es una cerveza Kölsch?",
                  "de": "Was ist ein Kölsch-Bier?",
                  "nl": "Wat is een Kölsch bier?"
        },
        options: [
        {
                  "en": "Belgian dark beer",
                  "es": "Cerveza oscura belga",
                  "de": "Belgisches dunkles Bier",
                  "nl": "Belgisch donker bier"
        },
        {
                  "en": "Irish stout",
                  "es": "Stout irlandés",
                  "de": "Irisches Stout",
                  "nl": "Iers stout"
        },
        {
                  "en": "Czech pilsner",
                  "es": "Pilsner checa",
                  "de": "Tschechisches Pilsner",
                  "nl": "Tsjechische pilsner"
        },
        {
                  "en": "German ale from Cologne",
                  "es": "Ale alemana de Colonia",
                  "de": "Deutsches Ale aus Köln",
                  "nl": "Duitse ale uit Keulen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Kölsch is a light, crisp ale from Cologne (Köln), Germany. It's unique as it's brewed using ale yeast but served at lager temperatures. By law, true Kölsch can only be brewed in Cologne.",
                  "es": "Kölsch es una ale ligera y fresca de Colonia (Köln), Alemania. Es única ya que se elabora con levadura de ale pero se sirve a temperaturas de lager. Por ley, el verdadero Kölsch solo puede elaborarse en Colonia.",
                  "de": "Kölsch ist ein leichtes, frisches Ale aus Köln, Deutschland. Es ist einzigartig, da es mit Ale-Hefe gebraut, aber bei Lager-Temperaturen serviert wird. Per Gesetz darf echtes Kölsch nur in Köln gebraut werden.",
                  "nl": "Kölsch is een lichte, frisse ale uit Keulen (Köln), Duitsland. Het is uniek omdat het gebrouwen wordt met ale gist maar geserveerd wordt op lager temperaturen. Volgens de wet mag echte Kölsch alleen in Keulen gebrouwen worden."
        }
      },
      {
        question: {
                  "en": "What is the difference between a Single, Dubbel, and Tripel?",
                  "es": "¿Cuál es la diferencia entre Single, Dubbel y Tripel?",
                  "de": "Was ist der Unterschied zwischen Single, Dubbel und Tripel?",
                  "nl": "Wat is het verschil tussen Single, Dubbel en Tripel?"
        },
        options: [
        {
                  "en": "Serving temperature",
                  "es": "Temperatura de servicio",
                  "de": "Serviertemperatur",
                  "nl": "Serveertemperatuur"
        },
        {
                  "en": "Color only",
                  "es": "Solo color",
                  "de": "Nur Farbe",
                  "nl": "Alleen kleur"
        },
        {
                  "en": "Strength and malt content",
                  "es": "Fuerza y contenido de malta",
                  "de": "Stärke und Malzgehalt",
                  "nl": "Sterkte en moutgehalte"
        },
        {
                  "en": "Hop varieties used",
                  "es": "Variedades de lúpulo usadas",
                  "de": "Verwendete Hopfensorten",
                  "nl": "Gebruikte hopvariëteiten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Single, Dubbel, and Tripel are Belgian Trappist/Abbey beer styles that differ in strength and malt content. Single is lightest (~5% ABV), Dubbel is medium (~7% ABV, darker), and Tripel is strongest (~9% ABV, golden).",
                  "es": "Single, Dubbel y Tripel son estilos de cerveza trapense/abadía belga que difieren en fuerza y contenido de malta. Single es la más ligera (~5% ABV), Dubbel es media (~7% ABV, más oscura), y Tripel es la más fuerte (~9% ABV, dorada).",
                  "de": "Single, Dubbel und Tripel sind belgische Trappisten-/Abteibier-Stile, die sich in Stärke und Malzgehalt unterscheiden. Single ist am leichtesten (~5% Vol.), Dubbel ist mittel (~7% Vol., dunkler), und Tripel ist am stärksten (~9% Vol., golden).",
                  "nl": "Single, Dubbel en Tripel zijn Belgische Trappisten/Abdij bierstijlen die verschillen in sterkte en moutgehalte. Single is het lichtst (~5% ABV), Dubbel is gemiddeld (~7% ABV, donkerder), en Tripel is het sterkst (~9% ABV, goudkleurig)."
        }
      },
      {
        question: {
                  "en": "What is an Altbier?",
                  "es": "¿Qué es un Altbier?",
                  "de": "Was ist ein Altbier?",
                  "nl": "Wat is een Altbier?"
        },
        options: [
        {
                  "en": "Aged sour beer",
                  "es": "Cerveza ácida envejecida",
                  "de": "Gereiftes Sauerbier",
                  "nl": "Gerijpt zuur bier"
        },
        {
                  "en": "Alternative lager",
                  "es": "Lager alternativa",
                  "de": "Alternatives Lager",
                  "nl": "Alternatieve lager"
        },
        {
                  "en": "German 'old' style ale from Düsseldorf",
                  "es": "Ale de estilo 'antiguo' alemán de Düsseldorf",
                  "de": "Deutsches 'altes' Bierstil aus Düsseldorf",
                  "nl": "Duitse 'oude' stijl ale uit Düsseldorf"
        },
        {
                  "en": "High-altitude beer",
                  "es": "Cerveza de gran altitud",
                  "de": "Höhenlagenbier",
                  "nl": "Hooggelegen bier"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Altbier ('old beer' in German) is a traditional copper-colored ale from Düsseldorf, Germany. Despite being an ale, it's cold-conditioned like a lager, giving it a crisp, clean finish with malty character.",
                  "es": "Altbier ('cerveza vieja' en alemán) es una ale tradicional de color cobrizo de Düsseldorf, Alemania. A pesar de ser una ale, está acondicionada en frío como una lager, dándole un acabado fresco y limpio con carácter maltoso.",
                  "de": "Altbier ('altes Bier' auf Deutsch) ist ein traditionelles kupferfarbenes Ale aus Düsseldorf, Deutschland. Obwohl es ein Ale ist, wird es kalt konditioniert wie ein Lager, was ihm ein frisches, sauberes Finish mit malzigem Charakter verleiht.",
                  "nl": "Altbier ('oud bier' in het Duits) is een traditionele koperkleurige ale uit Düsseldorf, Duitsland. Ondanks dat het een ale is, wordt het koud geconditioneerd zoals een lager, wat het een frisse, schone afdronk geeft met moutig karakter."
        }
      },
      {
        question: {
                  "en": "What is a Schwarzbier?",
                  "es": "¿Qué es una Schwarzbier?",
                  "de": "Was ist ein Schwarzbier?",
                  "nl": "Wat is een Schwarzbier?"
        },
        options: [
        {
                  "en": "Belgian sour beer",
                  "es": "Cerveza ácida belga",
                  "de": "Belgisches Sauerbier",
                  "nl": "Belgisch zuur bier"
        },
        {
                  "en": "Strong English ale",
                  "es": "Ale inglés fuerte",
                  "de": "Starkes englisches Ale",
                  "nl": "Sterk Engels ale"
        },
        {
                  "en": "American IPA",
                  "es": "IPA Americana",
                  "de": "Amerikanisches IPA",
                  "nl": "Amerikaanse IPA"
        },
        {
                  "en": "German black lager",
                  "es": "Lager negra alemana",
                  "de": "Deutsches schwarzes Lager",
                  "nl": "Duitse zwarte lager"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Schwarzbier ('black beer' in German) is a dark German lager with roasted malt character but lighter body than stout, smooth and clean-tasting.",
                  "es": "Schwarzbier ('cerveza negra' en alemán) es una lager alemana oscura con carácter de malta tostada pero cuerpo más ligero que stout, suave y de sabor limpio.",
                  "de": "Schwarzbier ('Schwarzbier' auf Deutsch) ist ein dunkles deutsches Lager mit Röstmalzcharakter, aber leichterem Körper als Stout, geschmeidig und sauber schmeckend.",
                  "nl": "Schwarzbier ('zwart bier' in het Duits) is een donkere Duitse lager met geroosterd mout karakter maar lichter body dan stout, soepel en schoon van smaak."
        }
      },
      {
        question: {
                  "en": "What is a Märzen/Oktoberfest beer?",
                  "es": "¿Qué es una cerveza Märzen/Oktoberfest?",
                  "de": "Was ist ein Märzen/Oktoberfestbier?",
                  "nl": "Wat is een Märzen/Oktoberfest bier?"
        },
        options: [
        {
                  "en": "Dark Belgian ale",
                  "es": "Ale oscura belga",
                  "de": "Dunkles belgisches Ale",
                  "nl": "Donkere Belgische ale"
        },
        {
                  "en": "Strong winter porter",
                  "es": "Porter fuerte de invierno",
                  "de": "Starker Winter-Porter",
                  "nl": "Sterke winter porter"
        },
        {
                  "en": "Amber German lager brewed in March",
                  "es": "Lager ámbar alemana elaborada en marzo",
                  "de": "Bernsteinfarbenes deutsches Lager im März gebraut",
                  "nl": "Amber Duitse lager gebrouwen in maart"
        },
        {
                  "en": "Light summer wheat beer",
                  "es": "Cerveza de trigo ligera de verano",
                  "de": "Leichtes Sommer-Weizenbier",
                  "nl": "Licht zomer tarwebier"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Märzen is an amber lager traditionally brewed in March (März) and lagered through summer for Oktoberfest celebration. It has malty sweetness, medium body, and toasted bread character.",
                  "es": "Märzen es una lager ámbar tradicionalmente elaborada en marzo (März) y almacenada durante el verano para la celebración de Oktoberfest. Tiene dulzura maltosa, cuerpo medio y carácter de pan tostado.",
                  "de": "Märzen ist ein bernsteinfarbenes Lager, das traditionell im März gebraut und über den Sommer für das Oktoberfest gelagert wird. Es hat malzige Süße, mittleren Körper und Röstbrotcharakter.",
                  "nl": "Märzen is een amber lager traditioneel gebrouwen in maart (März) en opgeslagen gedurende de zomer voor Oktoberfest viering. Het heeft moutige zoetheid, medium body en geroosterd brood karakter."
        }
      },
      {
        question: {
                  "en": "What distinguishes a Double/Imperial IPA from a regular IPA?",
                  "es": "¿Qué distingue una Double/Imperial IPA de una IPA regular?",
                  "de": "Was unterscheidet ein Double/Imperial IPA von einem normalen IPA?",
                  "nl": "Wat onderscheidt een Double/Imperial IPA van een gewone IPA?"
        },
        options: [
        {
                  "en": "Higher alcohol content and more intense hop character",
                  "es": "Mayor contenido de alcohol y carácter de lúpulo más intenso",
                  "de": "Höherer Alkoholgehalt und intensiverer Hopfencharakter",
                  "nl": "Hoger alcoholpercentage en intensiever hop karakter"
        },
        {
                  "en": "Less bitterness",
                  "es": "Menos amargor",
                  "de": "Weniger Bitterkeit",
                  "nl": "Minder bitterheid"
        },
        {
                  "en": "Wheat addition",
                  "es": "Adición de trigo",
                  "de": "Weizenzusatz",
                  "nl": "Tarwe toevoeging"
        },
        {
                  "en": "Darker color only",
                  "es": "Solo color más oscuro",
                  "de": "Nur dunklere Farbe",
                  "nl": "Alleen donkerdere kleur"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Double or Imperial IPAs have significantly higher alcohol content (typically 7.5-10% ABV or more) and more intense hop bitterness, aroma, and flavor compared to regular IPAs (5-7% ABV).",
                  "es": "Las Double o Imperial IPAs tienen contenido de alcohol significativamente mayor (típicamente 7.5-10% ABV o más) y amargor, aroma y sabor de lúpulo más intensos comparadas con IPAs regulares (5-7% ABV).",
                  "de": "Double oder Imperial IPAs haben deutlich höheren Alkoholgehalt (typischerweise 7,5-10% Vol. oder mehr) und intensivere Hopfenbitterkeit, Aroma und Geschmack im Vergleich zu normalen IPAs (5-7% Vol.).",
                  "nl": "Double of Imperial IPAs hebben aanzienlijk hoger alcoholpercentage (meestal 7,5-10% ABV of meer) en intensievere hop bitterheid, aroma en smaak vergeleken met gewone IPAs (5-7% ABV)."
        }
      },
      {
        question: {
                  "en": "What is a Cream Ale?",
                  "es": "¿Qué es una Cream Ale?",
                  "de": "Was ist ein Cream Ale?",
                  "nl": "Wat is een Cream Ale?"
        },
        options: [
        {
                  "en": "Belgian wheat beer",
                  "es": "Cerveza de trigo belga",
                  "de": "Belgisches Weizenbier",
                  "nl": "Belgisch tarwebier"
        },
        {
                  "en": "Dark sweet stout",
                  "es": "Stout oscuro dulce",
                  "de": "Dunkles süßes Stout",
                  "nl": "Donkere zoete stout"
        },
        {
                  "en": "Smooth American ale, often with adjuncts",
                  "es": "Ale americana suave, a menudo con adjuntos",
                  "de": "Geschmeidiges amerikanisches Ale, oft mit Zusätzen",
                  "nl": "Soepele Amerikaanse ale, vaak met hulpstoffen"
        },
        {
                  "en": "Beer with dairy cream added",
                  "es": "Cerveza con crema láctea añadida",
                  "de": "Bier mit Milchcreme",
                  "nl": "Bier met zuivelroom toegevoegd"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cream Ale is an American beer style that's light, crisp, and smooth (hence 'cream'), often brewed with corn or rice adjuncts. Despite the name, it contains no dairy products.",
                  "es": "Cream Ale es un estilo de cerveza americana que es ligera, fresca y suave (de ahí 'cream'), a menudo elaborada con adjuntos de maíz o arroz. A pesar del nombre, no contiene productos lácteos.",
                  "de": "Cream Ale ist ein amerikanischer Bierstil, der leicht, frisch und geschmeidig ist (daher 'Cream'), oft mit Mais- oder Reiszusätzen gebraut. Trotz des Namens enthält es keine Milchprodukte.",
                  "nl": "Cream Ale is een Amerikaanse bierstijl die licht, fris en soepel is (vandaar 'cream'), vaak gebrouwen met maïs of rijst hulpstoffen. Ondanks de naam bevat het geen zuivelproducten."
        }
      },
      {
        question: {
                  "en": "What is a Dunkelweizen?",
                  "es": "¿Qué es una Dunkelweizen?",
                  "de": "Was ist ein Dunkelweizen?",
                  "nl": "Wat is een Dunkelweizen?"
        },
        options: [
        {
                  "en": "Dark German wheat beer",
                  "es": "Cerveza de trigo alemana oscura",
                  "de": "Dunkles deutsches Weizenbier",
                  "nl": "Donker Duits tarwebier"
        },
        {
                  "en": "Belgian sour ale",
                  "es": "Ale ácida belga",
                  "de": "Belgisches Sauerbier",
                  "nl": "Belgische zure ale"
        },
        {
                  "en": "American pale ale",
                  "es": "Pale ale americana",
                  "de": "Amerikanisches Pale Ale",
                  "nl": "Amerikaanse pale ale"
        },
        {
                  "en": "Light Czech lager",
                  "es": "Lager checa ligera",
                  "de": "Helles tschechisches Lager",
                  "nl": "Lichte Tsjechische lager"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Dunkelweizen ('dark wheat' in German) is a dark version of Hefeweizen with the same banana/clove yeast character but featuring darker malts that add bread, caramel, and subtle chocolate flavors.",
                  "es": "Dunkelweizen ('trigo oscuro' en alemán) es una versión oscura de Hefeweizen con el mismo carácter de levadura de plátano/clavo pero con maltas más oscuras que añaden sabores de pan, caramelo y sutil chocolate.",
                  "de": "Dunkelweizen ('dunkler Weizen' auf Deutsch) ist eine dunkle Version des Hefeweizens mit demselben Bananen-/Nelken-Hefecharakter, aber mit dunkleren Malzen, die Brot-, Karamell- und subtile Schokoladenaromen hinzufügen.",
                  "nl": "Dunkelweizen ('donkere tarwe' in het Duits) is een donkere versie van Hefeweizen met hetzelfde banaan/kruidnagel gist karakter maar met donkerdere mout die brood, karamel en subtiele chocolade smaken toevoegt."
        }
      },
      {
        question: {
                  "en": "What is a Berliner Weisse?",
                  "es": "¿Qué es una Berliner Weisse?",
                  "de": "Was ist eine Berliner Weisse?",
                  "nl": "Wat is een Berliner Weisse?"
        },
        options: [
        {
                  "en": "Tart, low-alcohol German wheat beer",
                  "es": "Cerveza de trigo alemana ácida de bajo alcohol",
                  "de": "Säuerliches, alkoholarmes deutsches Weizenbier",
                  "nl": "Scherp, laag-alcohol Duits tarwebier"
        },
        {
                  "en": "Sweet Belgian beer",
                  "es": "Cerveza belga dulce",
                  "de": "Süßes belgisches Bier",
                  "nl": "Zoet Belgisch bier"
        },
        {
                  "en": "Strong dark lager",
                  "es": "Lager oscura fuerte",
                  "de": "Starkes dunkles Lager",
                  "nl": "Sterke donkere lager"
        },
        {
                  "en": "Hoppy pale ale",
                  "es": "Pale ale lupulado",
                  "de": "Hopfiges Pale Ale",
                  "nl": "Hoppig pale ale"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Berliner Weisse is a cloudy, tart, low-alcohol (2.8-3.8% ABV) wheat beer from Berlin, Germany. It's brewed with lactic acid bacteria for sourness and traditionally served with woodruff or raspberry syrup.",
                  "es": "Berliner Weisse es una cerveza de trigo turbia, ácida, de bajo alcohol (2.8-3.8% ABV) de Berlín, Alemania. Se elabora con bacterias de ácido láctico para acidez y tradicionalmente se sirve con jarabe de aspérula o frambuesa.",
                  "de": "Berliner Weisse ist ein trübes, säuerliches, alkoholarmes (2,8-3,8% Vol.) Weizenbier aus Berlin, Deutschland. Es wird mit Milchsäurebakterien für Säure gebraut und traditionell mit Waldmeister- oder Himbeersirup serviert.",
                  "nl": "Berliner Weisse is een troebel, scherp, laag-alcohol (2,8-3,8% ABV) tarwebier uit Berlijn, Duitsland. Het wordt gebrouwen met melkzuurbacteriën voor zuurheid en traditioneel geserveerd met lievevrouwebedstro of frambozensiroop."
        }
      },
      {
        question: {
                  "en": "What is a California Common/Steam Beer?",
                  "es": "¿Qué es una California Common/Steam Beer?",
                  "de": "Was ist ein California Common/Steam Beer?",
                  "nl": "Wat is een California Common/Steam Beer?"
        },
        options: [
        {
                  "en": "Hot carbonated beer",
                  "es": "Cerveza carbonatada caliente",
                  "de": "Heißes kohlensäurehaltiges Bier",
                  "nl": "Heet koolzuurhoudend bier"
        },
        {
                  "en": "Beer brewed with steam power",
                  "es": "Cerveza elaborada con vapor",
                  "de": "Bier mit Dampfkraft gebraut",
                  "nl": "Bier gebrouwen met stoomkracht"
        },
        {
                  "en": "Non-alcoholic lager",
                  "es": "Lager sin alcohol",
                  "de": "Alkoholfreies Lager",
                  "nl": "Alcoholvrije lager"
        },
        {
                  "en": "Lager yeast fermented at ale temperatures",
                  "es": "Levadura lager fermentada a temperaturas de ale",
                  "de": "Lagerhefe bei Ale-Temperaturen fermentiert",
                  "nl": "Lager gist gefermenteerd op ale temperaturen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "California Common (also known as Steam Beer, trademarked by Anchor Brewing) uses lager yeast fermented at warmer ale temperatures due to California's climate, creating a unique hybrid character with lager crispness and ale fruitiness.",
                  "es": "California Common (también conocida como Steam Beer, marca registrada de Anchor Brewing) usa levadura lager fermentada a temperaturas más cálidas de ale debido al clima de California, creando un carácter híbrido único con frescura de lager y frutosidad de ale.",
                  "de": "California Common (auch als Steam Beer bekannt, Marke von Anchor Brewing) verwendet Lagerhefe, die bei wärmeren Ale-Temperaturen aufgrund des kalifornischen Klimas fermentiert wird, wodurch ein einzigartiger Hybridcharakter mit Lager-Frische und Ale-Fruchtigkeit entsteht.",
                  "nl": "California Common (ook bekend als Steam Beer, handelsmerk van Anchor Brewing) gebruikt lager gist gefermenteerd op warmere ale temperaturen door het klimaat van Californië, waardoor een uniek hybride karakter ontstaat met lager frisheid en ale fruitigheid."
        }
      },
      {
        question: {
                  "en": "What is a Flanders Red Ale?",
                  "es": "¿Qué es una Flanders Red Ale?",
                  "de": "Was ist ein Flanders Red Ale?",
                  "nl": "Wat is een Flanders Red Ale?"
        },
        options: [
        {
                  "en": "Sweet German lager",
                  "es": "Lager alemana dulce",
                  "de": "Süßes deutsches Lager",
                  "nl": "Zoete Duitse lager"
        },
        {
                  "en": "Light English bitter",
                  "es": "Bitter inglés ligero",
                  "de": "Leichtes englisches Bitter",
                  "nl": "Lichte Engelse bitter"
        },
        {
                  "en": "Sour Belgian oak-aged ale",
                  "es": "Ale belga ácida envejecida en roble",
                  "de": "Saures belgisches Eichenfass-gereiftes Ale",
                  "nl": "Zure Belgische eiken-gerijpte ale"
        },
        {
                  "en": "Hoppy American red ale",
                  "es": "Red ale americana lupulada",
                  "de": "Hopfiges amerikanisches Red Ale",
                  "nl": "Hoppig Amerikaans rood ale"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Flanders Red Ale is a sour Belgian ale aged in oak barrels with wild yeast and bacteria, creating complex fruity, wine-like, and acidic flavors with a reddish-brown color. Rodenbach is a famous example.",
                  "es": "Flanders Red Ale es una ale belga ácida envejecida en barriles de roble con levadura silvestre y bacterias, creando sabores complejos afrutados, similares al vino y ácidos con color marrón rojizo. Rodenbach es un ejemplo famoso.",
                  "de": "Flanders Red Ale ist ein saures belgisches Ale, das in Eichenfässern mit wilder Hefe und Bakterien gereift wird, wodurch komplexe fruchtige, weinähnliche und säuerliche Aromen mit rotbrauner Farbe entstehen. Rodenbach ist ein berühmtes Beispiel.",
                  "nl": "Flanders Red Ale is een zure Belgische ale gerijpt in eiken vaten met wilde gist en bacteriën, wat complexe fruitige, wijnachtige en zure smaken creëert met een roodbruine kleur. Rodenbach is een beroemd voorbeeld."
        }
      },
      {
        question: {
                  "en": "What is a Gueuze beer?",
                  "es": "¿Qué es una cerveza Gueuze?",
                  "de": "Was ist ein Gueuze-Bier?",
                  "nl": "Wat is een Gueuze bier?"
        },
        options: [
        {
                  "en": "German wheat beer",
                  "es": "Cerveza de trigo alemana",
                  "de": "Deutsches Weizenbier",
                  "nl": "Duits tarwebier"
        },
        {
                  "en": "Irish dry stout",
                  "es": "Stout seco irlandés",
                  "de": "Irisches trockenes Stout",
                  "nl": "Iers droog stout"
        },
        {
                  "en": "Blend of old and young lambics",
                  "es": "Mezcla de lambics viejos y jóvenes",
                  "de": "Mischung aus alten und jungen Lambics",
                  "nl": "Mengsel van oude en jonge lambics"
        },
        {
                  "en": "American pale lager",
                  "es": "Lager pálida americana",
                  "de": "Amerikanisches helles Lager",
                  "nl": "Amerikaanse bleke lager"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Gueuze is a blend of young (1-year) and old (2-3 year) spontaneously fermented lambic beers, refermented in the bottle creating champagne-like carbonation. It's highly complex, tart, and funky.",
                  "es": "Gueuze es una mezcla de cervezas lambic jóvenes (1 año) y viejas (2-3 años) fermentadas espontáneamente, refermentadas en la botella creando carbonatación tipo champagne. Es muy compleja, ácida y funky.",
                  "de": "Gueuze ist eine Mischung aus jungen (1 Jahr) und alten (2-3 Jahre) spontan fermentierten Lambic-Bieren, die in der Flasche nachgegoren werden und champagnerähnliche Kohlensäure erzeugen. Es ist hochkomplex, säuerlich und funky.",
                  "nl": "Gueuze is een mengsel van jonge (1 jaar) en oude (2-3 jaar) spontaan gefermenteerde lambic bieren, hergefermenteerd in de fles wat champagne-achtig koolzuur creëert. Het is zeer complex, scherp en funky."
        }
      },
      {
        question: {
                  "en": "What is a Helles lager?",
                  "es": "¿Qué es una lager Helles?",
                  "de": "Was ist ein Helles-Lager?",
                  "nl": "Wat is een Helles lager?"
        },
        options: [
        {
                  "en": "Dark Belgian ale",
                  "es": "Ale belga oscura",
                  "de": "Dunkles belgisches Ale",
                  "nl": "Donkere Belgische ale"
        },
        {
                  "en": "Hoppy American IPA",
                  "es": "IPA americana lupulada",
                  "de": "Hopfiges amerikanisches IPA",
                  "nl": "Hoppig Amerikaans IPA"
        },
        {
                  "en": "Pale German lager from Munich",
                  "es": "Lager pálida alemana de Múnich",
                  "de": "Helles deutsches Lager aus München",
                  "nl": "Bleke Duitse lager uit München"
        },
        {
                  "en": "Sour wheat beer",
                  "es": "Cerveza de trigo ácida",
                  "de": "Saures Weizenbier",
                  "nl": "Zuur tarwebier"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Helles ('bright' or 'pale' in German) is a pale German lager from Munich with malty sweetness, subtle hop bitterness, and clean finish. It was created to compete with Czech Pilsner.",
                  "es": "Helles ('brillante' o 'pálido' en alemán) es una lager pálida alemana de Múnich con dulzura maltosa, amargor sutil de lúpulo y final limpio. Fue creada para competir con Pilsner checo.",
                  "de": "Helles ('hell' oder 'blass' auf Deutsch) ist ein helles deutsches Lager aus München mit malziger Süße, subtiler Hopfenbitterkeit und sauberem Abgang. Es wurde geschaffen, um mit tschechischem Pilsner zu konkurrieren.",
                  "nl": "Helles ('helder' of 'bleek' in het Duits) is een bleke Duitse lager uit München met moutige zoetheid, subtiele hop bitterheid en schone afdronk. Het werd gecreëerd om te concurreren met Tsjechische Pilsner."
        }
      },
      {
        question: {
                  "en": "What is a New England IPA (NEIPA)?",
                  "es": "¿Qué es una New England IPA (NEIPA)?",
                  "de": "Was ist ein New England IPA (NEIPA)?",
                  "nl": "Wat is een New England IPA (NEIPA)?"
        },
        options: [
        {
                  "en": "Hazy, juicy IPA with low bitterness",
                  "es": "IPA turbia y jugosa con bajo amargor",
                  "de": "Trübes, saftiges IPA mit niedriger Bitterkeit",
                  "nl": "Troebel, sappig IPA met lage bitterheid"
        },
        {
                  "en": "Extra bitter clear IPA",
                  "es": "IPA clara extra amarga",
                  "de": "Extra bitteres klares IPA",
                  "nl": "Extra bitter helder IPA"
        },
        {
                  "en": "Dark malty IPA",
                  "es": "IPA oscura maltosa",
                  "de": "Dunkles malziges IPA",
                  "nl": "Donker moutig IPA"
        },
        {
                  "en": "Low-alcohol session IPA",
                  "es": "IPA de sesión bajo en alcohol",
                  "de": "Alkoholarmes Session-IPA",
                  "nl": "Laag-alcohol sessie IPA"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "New England IPA (also called Hazy IPA or Juicy IPA) is characterized by hazy appearance, intense tropical fruit flavors and aromas from dry-hopping, smooth mouthfeel, and lower perceived bitterness despite high hop content.",
                  "es": "New England IPA (también llamada Hazy IPA o Juicy IPA) se caracteriza por apariencia turbia, intensos sabores y aromas de frutas tropicales del dry-hopping, sensación en boca suave y amargor percibido menor a pesar del alto contenido de lúpulo.",
                  "de": "New England IPA (auch Hazy IPA oder Juicy IPA genannt) zeichnet sich durch trübes Aussehen, intensive tropische Fruchtaromen aus Dry-Hopping, geschmeidiges Mundgefühl und geringere wahrgenommene Bitterkeit trotz hohem Hopfengehalt aus.",
                  "nl": "New England IPA (ook wel Hazy IPA of Juicy IPA genoemd) wordt gekenmerkt door troebel uiterlijk, intense tropisch fruit smaken en aroma's van dry-hopping, soepel mondgevoel en lagere waargenomen bitterheid ondanks hoog hopgehalte."
        }
      },
      {
        question: {
                  "en": "What is a Quadrupel (Quad)?",
                  "es": "¿Qué es un Quadrupel (Quad)?",
                  "de": "Was ist ein Quadrupel (Quad)?",
                  "nl": "Wat is een Quadrupel (Quad)?"
        },
        options: [
        {
                  "en": "Quadruple-hopped IPA",
                  "es": "IPA con cuádruple lúpulo",
                  "de": "Vierfach gehopftes IPA",
                  "nl": "Viervoudig gehopt IPA"
        },
        {
                  "en": "Very strong Belgian dark ale",
                  "es": "Ale belga oscura muy fuerte",
                  "de": "Sehr starkes belgisches dunkles Ale",
                  "nl": "Zeer sterke Belgische donkere ale"
        },
        {
                  "en": "Four-grain lager",
                  "es": "Lager de cuatro granos",
                  "de": "Vier-Korn-Lager",
                  "nl": "Vier-granen lager"
        },
        {
                  "en": "Four-year aged beer",
                  "es": "Cerveza envejecida cuatro años",
                  "de": "Vier Jahre gereiftes Bier",
                  "nl": "Vier jaar gerijpt bier"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Quadrupel (Quad) is the strongest Belgian Trappist/Abbey beer style (10-13% ABV or higher) with deep dark color, rich malty complexity, dark fruit flavors (raisins, figs, plums), and warming alcohol character.",
                  "es": "Quadrupel (Quad) es el estilo de cerveza trapense/abadía belga más fuerte (10-13% ABV o más) con color oscuro profundo, rica complejidad maltosa, sabores de frutas oscuras (pasas, higos, ciruelas) y carácter de alcohol cálido.",
                  "de": "Quadrupel (Quad) ist der stärkste belgische Trappisten-/Abteibier-Stil (10-13% Vol. oder höher) mit tiefer dunkler Farbe, reicher malziger Komplexität, dunklen Fruchtaromen (Rosinen, Feigen, Pflaumen) und wärmendem Alkoholcharakter.",
                  "nl": "Quadrupel (Quad) is de sterkste Belgische Trappisten/Abdij bierstijl (10-13% ABV of hoger) met diepe donkere kleur, rijke moutige complexiteit, donkere fruitsmaken (rozijnen, vijgen, pruimen) en verwarmend alcohol karakter."
        }
      },
      {
        question: {
                  "en": "What is a Scotch Ale/Wee Heavy?",
                  "es": "¿Qué es una Scotch Ale/Wee Heavy?",
                  "de": "Was ist ein Scotch Ale/Wee Heavy?",
                  "nl": "Wat is een Scotch Ale/Wee Heavy?"
        },
        options: [
        {
                  "en": "Light Scottish lager",
                  "es": "Lager escocesa ligera",
                  "de": "Leichtes schottisches Lager",
                  "nl": "Lichte Schotse lager"
        },
        {
                  "en": "Peated smoke beer",
                  "es": "Cerveza ahumada con turba",
                  "de": "Getorftes Rauchbier",
                  "nl": "Geturfde rook bier"
        },
        {
                  "en": "Strong Scottish ale with caramel maltiness",
                  "es": "Ale escocesa fuerte con carácter maltoso de caramelo",
                  "de": "Starkes schottisches Ale mit Karamellmalzigkeit",
                  "nl": "Sterke Schotse ale met karamel moutigheid"
        },
        {
                  "en": "Whisky-flavored beer",
                  "es": "Cerveza con sabor a whisky",
                  "de": "Whisky-Bier",
                  "nl": "Whisky-bier"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Scotch Ale (also called Wee Heavy) is a strong Scottish ale (6.5-10% ABV) with rich malty sweetness, caramel and toffee flavors, full body, and low hop bitterness. The name 'Wee Heavy' refers to small measures of a strong beer.",
                  "es": "Scotch Ale (también llamada Wee Heavy) es una ale escocesa fuerte (6.5-10% ABV) con rica dulzura maltosa, sabores de caramelo y toffee, cuerpo completo y bajo amargor de lúpulo. El nombre 'Wee Heavy' se refiere a pequeñas medidas de una cerveza fuerte.",
                  "de": "Scotch Ale (auch Wee Heavy genannt) ist ein starkes schottisches Ale (6,5-10% Vol.) mit reicher malziger Süße, Karamell- und Toffee-Aromen, vollem Körper und niedriger Hopfenbitterkeit. Der Name 'Wee Heavy' bezieht sich auf kleine Mengen eines starken Bieres.",
                  "nl": "Scotch Ale (ook wel Wee Heavy genoemd) is een sterke Schotse ale (6,5-10% ABV) met rijke moutige zoetheid, karamel en toffee smaken, vol body en lage hop bitterheid. De naam 'Wee Heavy' verwijst naar kleine hoeveelheden van een sterk bier."
        }
      },
      {
        question: {
                  "en": "What is a Milk Stout/Sweet Stout?",
                  "es": "¿Qué es una Milk Stout/Sweet Stout?",
                  "de": "Was ist ein Milk Stout/Sweet Stout?",
                  "nl": "Wat is een Milk Stout/Sweet Stout?"
        },
        options: [
        {
                  "en": "Low-alcohol sweet beer",
                  "es": "Cerveza dulce baja en alcohol",
                  "de": "Süßes alkoholarmes Bier",
                  "nl": "Zoet laag-alcohol bier"
        },
        {
                  "en": "White-colored stout",
                  "es": "Stout de color blanco",
                  "de": "Weißes Stout",
                  "nl": "Wit gekleurde stout"
        },
        {
                  "en": "Stout brewed with lactose for sweetness",
                  "es": "Stout elaborada con lactosa para dulzura",
                  "de": "Stout mit Laktose für Süße gebraut",
                  "nl": "Stout gebrouwen met lactose voor zoetheid"
        },
        {
                  "en": "Stout with dairy milk added",
                  "es": "Stout con leche láctea añadida",
                  "de": "Stout mit Milch versetzt",
                  "nl": "Stout met zuivelmelk toegevoegd"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Milk Stout (Sweet Stout) is brewed with lactose (milk sugar) which is unfermentable by beer yeast, leaving residual sweetness that balances the roasted bitterness. Despite the name, it doesn't contain milk itself, only lactose.",
                  "es": "Milk Stout (Sweet Stout) se elabora con lactosa (azúcar de leche) que no es fermentable por la levadura de cerveza, dejando dulzura residual que equilibra el amargor tostado. A pesar del nombre, no contiene leche en sí, solo lactosa.",
                  "de": "Milk Stout (Sweet Stout) wird mit Laktose (Milchzucker) gebraut, die von Bierhefe nicht fermentierbar ist und Restsüße hinterlässt, die die geröstete Bitterkeit ausgleicht. Trotz des Namens enthält es keine Milch selbst, nur Laktose.",
                  "nl": "Milk Stout (Sweet Stout) wordt gebrouwen met lactose (melksuiker) die niet fermenteerbaar is door biergist, wat restzoetheid achterlaat die de geroosterde bitterheid balanceert. Ondanks de naam bevat het geen melk zelf, alleen lactose."
        }
      },
      {
        question: {
                  "en": "What is an Eisbock?",
                  "es": "¿Qué es un Eisbock?",
                  "de": "Was ist ein Eisbock?",
                  "nl": "Wat is een Eisbock?"
        },
        options: [
        {
                  "en": "Light summer bock",
                  "es": "Bock ligero de verano",
                  "de": "Leichtes Sommer-Bock",
                  "nl": "Lichte zomer bock"
        },
        {
                  "en": "Ice-cold served bock",
                  "es": "Bock servido helado",
                  "de": "Eiskalt serviertes Bock",
                  "nl": "IJskoud geserveerde bock"
        },
        {
                  "en": "Concentrated bock made by freeze distillation",
                  "es": "Bock concentrado hecho por destilación por congelación",
                  "de": "Konzentriertes Bock durch Gefrieren destilliert",
                  "nl": "Geconcentreerde bock gemaakt door vriesdestillatie"
        },
        {
                  "en": "Bock brewed in winter",
                  "es": "Bock elaborado en invierno",
                  "de": "Im Winter gebrautes Bock",
                  "nl": "Bock gebrouwen in de winter"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Eisbock ('ice bock') is made by partially freezing a doppelbock and removing the ice crystals, concentrating alcohol and flavors. This results in very strong (9-14% ABV) beer with intense malty richness and warming character.",
                  "es": "Eisbock ('bock de hielo') se hace congelando parcialmente un doppelbock y eliminando los cristales de hielo, concentrando alcohol y sabores. Esto resulta en cerveza muy fuerte (9-14% ABV) con rica intensidad maltosa y carácter cálido.",
                  "de": "Eisbock wird hergestellt, indem ein Doppelbock teilweise gefroren und die Eiskristalle entfernt werden, wodurch Alkohol und Aromen konzentriert werden. Dies ergibt sehr starkes (9-14% Vol.) Bier mit intensiver malziger Fülle und wärmendem Charakter.",
                  "nl": "Eisbock ('ijs bock') wordt gemaakt door een doppelbock gedeeltelijk te bevriezen en de ijskristallen te verwijderen, waardoor alcohol en smaken worden geconcentreerd. Dit resulteert in zeer sterk (9-14% ABV) bier met intense moutige rijkdom en verwarmend karakter."
        }
      },
      {
        question: {
                  "en": "What is a Baltic Porter?",
                  "es": "¿Qué es un Baltic Porter?",
                  "de": "Was ist ein Baltic Porter?",
                  "nl": "Wat is een Baltic Porter?"
        },
        options: [
        {
                  "en": "Light summer ale",
                  "es": "Ale ligera de verano",
                  "de": "Leichtes Sommer-Ale",
                  "nl": "Lichte zomer ale"
        },
        {
                  "en": "Strong lager-fermented dark beer from Baltic region",
                  "es": "Cerveza oscura fuerte fermentada con lager de la región báltica",
                  "de": "Starkes lager-fermentiertes dunkles Bier aus der Ostseeregion",
                  "nl": "Sterk lager-gefermenteerd donker bier uit de Baltische regio"
        },
        {
                  "en": "Hoppy pale lager",
                  "es": "Lager pálida lupulada",
                  "de": "Hopfiges helles Lager",
                  "nl": "Hoppig bleek lager"
        },
        {
                  "en": "Sour wheat beer",
                  "es": "Cerveza de trigo ácida",
                  "de": "Saures Weizenbier",
                  "nl": "Zuur tarwebier"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Baltic Porter is a strong (6.5-9.5% ABV) dark beer from countries around the Baltic Sea. Unlike British porters (ale-fermented), it's fermented with lager yeast, giving it smoother character with roasted malt, chocolate, and coffee notes.",
                  "es": "Baltic Porter es una cerveza oscura fuerte (6.5-9.5% ABV) de países alrededor del Mar Báltico. A diferencia de los porters británicos (fermentados con ale), se fermenta con levadura lager, dándole carácter más suave con notas de malta tostada, chocolate y café.",
                  "de": "Baltic Porter ist ein starkes (6,5-9,5% Vol.) dunkles Bier aus Ländern rund um die Ostsee. Im Gegensatz zu britischen Porters (ale-fermentiert) wird es mit Lagerhefe fermentiert, was ihm einen glatteren Charakter mit Röstmalz-, Schokoladen- und Kaffeenoten verleiht.",
                  "nl": "Baltic Porter is een sterk (6,5-9,5% ABV) donker bier uit landen rond de Oostzee. In tegenstelling tot Britse porters (ale-gefermenteerd) wordt het gefermenteerd met lager gist, wat het een gladder karakter geeft met geroosterde mout, chocolade en koffie noten."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();