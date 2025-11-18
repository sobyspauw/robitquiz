// Quiz Template - Level 2: Drinken - Bier
(function() {
  const level2 = {
    name: {
      en: "Beer Types and Styles",
      es: "Tipos y Estilos de Cerveza",
      de: "Bierarten und Stile",
      nl: "Biertypes en Stijlen"
    },
    questions: [
      {
        question: {
          en: "What is the main difference between ales and lagers?",
          es: "¿Cuál es la principal diferencia entre ales y lagers?",
          de: "Was ist der Hauptunterschied zwischen Ales und Lagern?",
          nl: "Wat is het hoofdverschil tussen ales en lagers?"
        },
        options: [
          { en: "The type of yeast used", es: "El tipo de levadura utilizada", de: "Die Art der verwendeten Hefe", nl: "Het type gist dat wordt gebruikt" },
          { en: "The alcohol content", es: "El contenido de alcohol", de: "Der Alkoholgehalt", nl: "Het alcoholpercentage" },
          { en: "The color of the beer", es: "El color de la cerveza", de: "Die Farbe des Bieres", nl: "De kleur van het bier" },
          { en: "The serving temperature", es: "La temperatura de servicio", de: "Die Serviertemperatur", nl: "De serveertemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "The main difference between ales and lagers is the type of yeast used. Ales use top-fermenting yeast that works at warmer temperatures, while lagers use bottom-fermenting yeast that works at cooler temperatures.",
          es: "La principal diferencia entre ales y lagers es el tipo de levadura utilizada. Las ales usan levadura de fermentación alta que funciona a temperaturas más cálidas, mientras que las lagers usan levadura de fermentación baja que funciona a temperaturas más frías.",
          de: "Der Hauptunterschied zwischen Ales und Lagern ist die Art der verwendeten Hefe. Ales verwenden obergärige Hefe, die bei wärmeren Temperaturen arbeitet, während Lager untergärige Hefe verwenden, die bei kühleren Temperaturen arbeitet.",
          nl: "Het hoofdverschil tussen ales en lagers is het type gist dat wordt gebruikt. Ales gebruiken bovengistende gist die werkt bij warmere temperaturen, terwijl lagers ondergistende gist gebruiken die werkt bij koelere temperaturen."
        }
      },
      {
        question: {
          en: "Which beer style is characterized by its dark color and roasted flavor?",
          es: "¿Qué estilo de cerveza se caracteriza por su color oscuro y sabor tostado?",
          de: "Welcher Bierstil zeichnet sich durch seine dunkle Farbe und den gerösteten Geschmack aus?",
          nl: "Welke bierstijl wordt gekenmerkt door zijn donkere kleur en geroosterde smaak?"
        },
        options: [
          { en: "Pilsner", es: "Pilsner", de: "Pilsner", nl: "Pilsner" },
          { en: "Wheat beer", es: "Cerveza de trigo", de: "Weißbier", nl: "Tarwebier" },
          { en: "Stout", es: "Stout", de: "Stout", nl: "Stout" },
          { en: "IPA", es: "IPA", de: "IPA", nl: "IPA" }
        ],
        correct: 2,
        explanation: {
          en: "Stout is characterized by its dark color and roasted flavor, which comes from roasted barley and malts. Famous examples include Guinness and Murphy's.",
          es: "La stout se caracteriza por su color oscuro y sabor tostado, que proviene de la cebada y maltas tostadas. Ejemplos famosos incluyen Guinness y Murphy's.",
          de: "Stout zeichnet sich durch seine dunkle Farbe und den gerösteten Geschmack aus, der von gerösteter Gerste und Malzen stammt. Berühmte Beispiele sind Guinness und Murphy's.",
          nl: "Stout wordt gekenmerkt door zijn donkere kleur en geroosterde smaak, die komt van geroosterde gerst en mout. Beroemde voorbeelden zijn Guinness en Murphy's."
        }
      },
      {
        question: {
          en: "What does 'IPA' stand for?",
          es: "¿Qué significa 'IPA'?",
          de: "Wofür steht 'IPA'?",
          nl: "Waar staat 'IPA' voor?"
        },
        options: [
          { en: "International Pale Ale", es: "Pale Ale Internacional", de: "Internationales Pale Ale", nl: "Internationale Pale Ale" },
          { en: "India Pale Ale", es: "India Pale Ale", de: "India Pale Ale", nl: "India Pale Ale" },
          { en: "Imperial Pale Ale", es: "Pale Ale Imperial", de: "Imperial Pale Ale", nl: "Imperial Pale Ale" },
          { en: "Irish Pale Ale", es: "Pale Ale Irlandés", de: "Irisches Pale Ale", nl: "Iers Pale Ale" }
        ],
        correct: 1,
        explanation: {
          en: "IPA stands for 'India Pale Ale'. This style was originally brewed with extra hops to preserve the beer during long sea voyages to British troops in India.",
          es: "IPA significa 'India Pale Ale'. Este estilo se elaboró originalmente con lúpulo extra para preservar la cerveza durante los largos viajes marítimos a las tropas británicas en India.",
          de: "IPA steht für 'India Pale Ale'. Dieser Stil wurde ursprünglich mit extra Hopfen gebraut, um das Bier während langer Seereisen zu britischen Truppen in Indien zu konservieren.",
          nl: "IPA staat voor 'India Pale Ale'. Deze stijl werd oorspronkelijk gebrouwen met extra hop om het bier te bewaren tijdens lange zeereizen naar Britse troepen in India."
        }
      },
      {
        question: {
          en: "Which country is most associated with the Pilsner beer style?",
          es: "¿Qué país está más asociado con el estilo de cerveza Pilsner?",
          de: "Welches Land wird am meisten mit dem Pilsner-Bierstil in Verbindung gebracht?",
          nl: "Welk land wordt het meest geassocieerd met de Pilsner bierstijl?"
        },
        options: [
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
          { en: "Czech Republic", es: "República Checa", de: "Tschechische Republik", nl: "Tsjechië" },
          { en: "Belgium", es: "Bélgica", de: "Belgien", nl: "België" },
          { en: "Ireland", es: "Irlanda", de: "Irland", nl: "Ierland" }
        ],
        correct: 1,
        explanation: {
          en: "The Czech Republic is most associated with Pilsner, as it was first brewed in the city of Plzen (Pilsen) in 1842. Pilsner Urquell is the original Pilsner beer.",
          es: "La República Checa está más asociada con Pilsner, ya que se elaboró por primera vez en la ciudad de Plzen (Pilsen) en 1842. Pilsner Urquell es la cerveza Pilsner original.",
          de: "Die Tschechische Republik wird am meisten mit Pilsner in Verbindung gebracht, da es erstmals 1842 in der Stadt Plzen (Pilsen) gebraut wurde. Pilsner Urquell ist das ursprüngliche Pilsner-Bier.",
          nl: "Tsjechië wordt het meest geassocieerd met Pilsner, omdat het voor het eerst werd gebrouwen in de stad Plzen (Pilsen) in 1842. Pilsner Urquell is het oorspronkelijke Pilsner bier."
        }
      },
      {
        question: {
          en: "What type of beer is traditionally served in a wheat beer glass?",
          es: "¿Qué tipo de cerveza se sirve tradicionalmente en un vaso de cerveza de trigo?",
          de: "Welche Art von Bier wird traditionell in einem Weißbierglas serviert?",
          nl: "Welk type bier wordt traditioneel geserveerd in een tarwebier glas?"
        },
        options: [
          { en: "Stout", es: "Stout", de: "Stout", nl: "Stout" },
          { en: "Hefeweizen", es: "Hefeweizen", de: "Hefeweizen", nl: "Hefeweizen" },
          { en: "Porter", es: "Porter", de: "Porter", nl: "Porter" },
          { en: "Lager", es: "Lager", de: "Lager", nl: "Lager" }
        ],
        correct: 1,
        explanation: {
          en: "Hefeweizen (wheat beer) is traditionally served in a wheat beer glass, which is tall and curved to showcase the beer's cloudy appearance and hold the characteristic thick foam head.",
          es: "Hefeweizen (cerveza de trigo) se sirve tradicionalmente en un vaso de cerveza de trigo, que es alto y curvado para mostrar la apariencia turbia de la cerveza y sostener la característica espuma espesa.",
          de: "Hefeweizen (Weißbier) wird traditionell in einem Weißbierglas serviert, das hoch und gebogen ist, um das trübe Aussehen des Bieres zu zeigen und den charakteristischen dicken Schaum zu halten.",
          nl: "Hefeweizen (tarwebier) wordt traditioneel geserveerd in een tarwebier glas, dat hoog en gebogen is om het troebele uiterlijk van het bier te tonen en het karakteristieke dikke schuim vast te houden."
        }
      },
      {
        question: {
          en: "Which beer style originated in Belgium and is known for its fruity esters?",
          es: "¿Qué estilo de cerveza se originó en Bélgica y es conocido por sus ésteres frutales?",
          de: "Welcher Bierstil stammt aus Belgien und ist für seine fruchtigen Ester bekannt?",
          nl: "Welke bierstijl ontstond in België en staat bekend om zijn fruitige esters?"
        },
        options: [
          { en: "Belgian Tripel", es: "Tripel Belga", de: "Belgisches Tripel", nl: "Belgische Tripel" },
          { en: "American Lager", es: "Lager Americana", de: "Amerikanisches Lager", nl: "Amerikaanse Lager" },
          { en: "English Bitter", es: "Bitter Inglés", de: "Englisches Bitter", nl: "Engelse Bitter" },
          { en: "German Märzen", es: "Märzen Alemán", de: "Deutsches Märzen", nl: "Duitse Märzen" }
        ],
        correct: 0,
        explanation: {
          en: "Belgian Tripel originated in Belgium and is known for its complex fruity esters produced by Belgian yeast strains. It's typically golden in color with high alcohol content.",
          es: "El Tripel Belga se originó en Bélgica y es conocido por sus ésteres frutales complejos producidos por cepas de levadura belga. Típicamente es de color dorado con alto contenido de alcohol.",
          de: "Belgisches Tripel stammt aus Belgien und ist für seine komplexen fruchtigen Ester bekannt, die von belgischen Hefestämmen produziert werden. Es ist typischerweise golden in der Farbe mit hohem Alkoholgehalt.",
          nl: "Belgische Tripel ontstond in België en staat bekend om zijn complexe fruitige esters geproduceerd door Belgische giststammen. Het is meestal goudkleurig met een hoog alcoholpercentage."
        }
      },
      {
        question: {
          en: "What is the characteristic feature of a 'sour beer'?",
          es: "¿Cuál es la característica distintiva de una 'cerveza ácida'?",
          de: "Was ist das charakteristische Merkmal eines 'Sauerbiers'?",
          nl: "Wat is het kenmerkende eigenschap van een 'zuur bier'?"
        },
        options: [
          { en: "High alcohol content", es: "Alto contenido de alcohol", de: "Hoher Alkoholgehalt", nl: "Hoog alcoholpercentage" },
          { en: "Acidic taste", es: "Sabor ácido", de: "Saurer Geschmack", nl: "Zure smaak" },
          { en: "Dark color", es: "Color oscuro", de: "Dunkle Farbe", nl: "Donkere kleur" },
          { en: "Hoppy bitterness", es: "Amargor del lúpulo", de: "Hopfige Bitterkeit", nl: "Hop bitterheid" }
        ],
        correct: 1,
        explanation: {
          en: "Sour beers are characterized by their acidic taste, which is created by wild yeasts and bacteria that produce lactic acid during fermentation. Examples include Lambics and Gose.",
          es: "Las cervezas ácidas se caracterizan por su sabor ácido, que es creado por levaduras silvestres y bacterias que producen ácido láctico durante la fermentación. Ejemplos incluyen Lambics y Gose.",
          de: "Sauerbiere zeichnen sich durch ihren sauren Geschmack aus, der durch wilde Hefen und Bakterien entsteht, die während der Gärung Milchsäure produzieren. Beispiele sind Lambics und Gose.",
          nl: "Zure bieren worden gekenmerkt door hun zure smaak, die wordt gecreëerd door wilde gisten en bacteriën die melkzuur produceren tijdens fermentatie. Voorbeelden zijn Lambics en Gose."
        }
      },
      {
        question: {
          en: "Which beer style is known for being 'session' beer?",
          es: "¿Qué estilo de cerveza es conocido por ser cerveza de 'sesión'?",
          de: "Welcher Bierstil ist als 'Session'-Bier bekannt?",
          nl: "Welke bierstijl staat bekend als 'sessie' bier?"
        },
        options: [
          { en: "Imperial Stout", es: "Stout Imperial", de: "Imperial Stout", nl: "Imperial Stout" },
          { en: "Barleywine", es: "Barleywine", de: "Barleywine", nl: "Barleywine" },
          { en: "English Mild", es: "Mild Inglés", de: "Englisches Mild", nl: "Engelse Mild" },
          { en: "Double IPA", es: "IPA Doble", de: "Doppel-IPA", nl: "Dubbele IPA" }
        ],
        correct: 2,
        explanation: {
          en: "English Mild is known as a 'session' beer because of its low alcohol content (typically 2.8-4.5%), allowing drinkers to have multiple beers in one session without becoming overly intoxicated.",
          es: "El Mild Inglés es conocido como cerveza de 'sesión' debido a su bajo contenido de alcohol (típicamente 2.8-4.5%), permitiendo a los bebedores tomar múltiples cervezas en una sesión sin embriagarse excesivamente.",
          de: "Englisches Mild ist als 'Session'-Bier bekannt wegen seines niedrigen Alkoholgehalts (typischerweise 2,8-4,5%), was es Trinkern ermöglicht, mehrere Biere in einer Session zu haben, ohne übermäßig berauscht zu werden.",
          nl: "Engelse Mild staat bekend als 'sessie' bier vanwege zijn lage alcoholpercentage (meestal 2,8-4,5%), waardoor drinkers meerdere bieren in één sessie kunnen hebben zonder te dronken te worden."
        }
      },
      {
        question: {
          en: "What is the defining characteristic of a Porter beer?",
          es: "¿Cuál es la característica definitoria de una cerveza Porter?",
          de: "Was ist das definierende Merkmal eines Porter-Bieres?",
          nl: "Wat is het bepalende kenmerk van een Porter bier?"
        },
        options: [
          { en: "Light color and crisp taste", es: "Color claro y sabor fresco", de: "Helle Farbe und frischer Geschmack", nl: "Lichte kleur en frisse smaak" },
          { en: "High hop content", es: "Alto contenido de lúpulo", de: "Hoher Hopfengehalt", nl: "Hoog hopgehalte" },
          { en: "Dark color and roasted malt flavors", es: "Color oscuro y sabores de malta tostada", de: "Dunkle Farbe und geröstete Malzaromen", nl: "Donkere kleur en geroosterde moutsmaken" },
          { en: "Wheat-based recipe", es: "Receta basada en trigo", de: "Weizenbasiertes Rezept", nl: "Op tarwe gebaseerd recept" }
        ],
        correct: 2,
        explanation: {
          en: "Porter is defined by its dark color and roasted malt flavors. It was one of the first beer styles to be aged and was historically popular among London dock workers.",
          es: "Porter se define por su color oscuro y sabores de malta tostada. Fue uno de los primeros estilos de cerveza en ser envejecido y fue históricamente popular entre los trabajadores portuarios de Londres.",
          de: "Porter wird durch seine dunkle Farbe und geröstete Malzaromen definiert. Es war einer der ersten Bierstile, der gelagert wurde und war historisch bei Londoner Hafenarbeitern beliebt.",
          nl: "Porter wordt gedefinieerd door zijn donkere kleur en geroosterde moutsmaken. Het was een van de eerste bierstijlen die werd gerijpt en was historisch populair onder Londense havenarbeiders."
        }
      },
      {
        question: {
          en: "Which beer style is characterized by banana and clove flavors?",
          es: "¿Qué estilo de cerveza se caracteriza por sabores de plátano y clavo?",
          de: "Welcher Bierstil zeichnet sich durch Bananen- und Nelkenaromen aus?",
          nl: "Welke bierstijl wordt gekenmerkt door banaan en kruidnagel smaken?"
        },
        options: [
          { en: "German Hefeweizen", es: "Hefeweizen Alemán", de: "Deutsches Hefeweizen", nl: "Duitse Hefeweizen" },
          { en: "American Pale Ale", es: "Pale Ale Americana", de: "Amerikanisches Pale Ale", nl: "Amerikaanse Pale Ale" },
          { en: "Irish Stout", es: "Stout Irlandés", de: "Irisches Stout", nl: "Iers Stout" },
          { en: "Czech Pilsner", es: "Pilsner Checo", de: "Tschechisches Pilsner", nl: "Tsjechische Pilsner" }
        ],
        correct: 0,
        explanation: {
          en: "German Hefeweizen is characterized by banana and clove flavors, which are produced by specific wheat beer yeast strains during fermentation. These flavors are considered traditional and desirable in this style.",
          es: "El Hefeweizen Alemán se caracteriza por sabores de plátano y clavo, que son producidos por cepas específicas de levadura de cerveza de trigo durante la fermentación. Estos sabores se consideran tradicionales y deseables en este estilo.",
          de: "Deutsches Hefeweizen zeichnet sich durch Bananen- und Nelkenaromen aus, die von spezifischen Weißbier-Hefestämmen während der Gärung produziert werden. Diese Aromen gelten als traditionell und erwünscht bei diesem Stil.",
          nl: "Duitse Hefeweizen wordt gekenmerkt door banaan en kruidnagel smaken, die geproduceerd worden door specifieke tarwebier giststammen tijdens fermentatie. Deze smaken worden beschouwd als traditioneel en gewenst in deze stijl."
        }
      },
      {
        question: {
          en: "What is a Saison beer?",
          es: "¿Qué es una cerveza Saison?",
          de: "Was ist ein Saison-Bier?",
          nl: "Wat is een Saison bier?"
        },
        options: [
          { en: "A Belgian farmhouse ale", es: "Una ale de granja belga", de: "Ein belgisches Bauernhofbier", nl: "Een Belgisch boerderij ale" },
          { en: "A German wheat beer", es: "Una cerveza de trigo alemana", de: "Ein deutsches Weizenbier", nl: "Een Duits tarwebier" },
          { en: "A British dark ale", es: "Una ale oscura británica", de: "Ein britisches dunkles Ale", nl: "Een Britse donkere ale" },
          { en: "An American lager", es: "Una lager americana", de: "Ein amerikanisches Lager", nl: "Een Amerikaanse lager" }
        ],
        correct: 0,
        explanation: {
          en: "Saison is a Belgian farmhouse ale, traditionally brewed in the winter to be consumed during summer harvest season. It's typically highly carbonated with fruity and spicy notes.",
          es: "Saison es una ale de granja belga, tradicionalmente elaborada en invierno para ser consumida durante la temporada de cosecha de verano. Típicamente es altamente carbonatada con notas frutales y especiadas.",
          de: "Saison ist ein belgisches Bauernhofbier, das traditionell im Winter gebraut wird, um während der Sommerernte konsumiert zu werden. Es ist typischerweise stark kohlensäurehaltig mit fruchtigen und würzigen Noten.",
          nl: "Saison is een Belgisch boerderij ale, traditioneel gebrouwen in de winter om geconsumeerd te worden tijdens het zomeroogstseizoen. Het is meestal sterk koolzuurhoudend met fruitige en kruidige noten."
        }
      },
      {
        question: {
          en: "What distinguishes a Bock beer?",
          es: "¿Qué distingue a una cerveza Bock?",
          de: "Was zeichnet ein Bockbier aus?",
          nl: "Wat onderscheidt een Bock bier?"
        },
        options: [
          { en: "Strong lager with malty sweetness", es: "Lager fuerte con dulzura maltosa", de: "Starkes Lager mit malziger Süße", nl: "Sterke lager met moutige zoetheid" },
          { en: "Light ale with citrus notes", es: "Ale ligera con notas cítricas", de: "Leichtes Ale mit Zitrusnoten", nl: "Lichte ale met citrusnoten" },
          { en: "Sour beer with fruit", es: "Cerveza ácida con fruta", de: "Saures Bier mit Frucht", nl: "Zuur bier met fruit" },
          { en: "Hoppy pale ale", es: "Pale ale lupulado", de: "Hopfiges Pale Ale", nl: "Hop pale ale" }
        ],
        correct: 0,
        explanation: {
          en: "Bock is a strong German lager characterized by malty sweetness, darker color, and higher alcohol content (typically 6-7% ABV). Traditional varieties include Maibock, Doppelbock, and Eisbock.",
          es: "Bock es una lager alemana fuerte caracterizada por dulzura maltosa, color más oscuro y mayor contenido de alcohol (típicamente 6-7% ABV). Variedades tradicionales incluyen Maibock, Doppelbock y Eisbock.",
          de: "Bock ist ein starkes deutsches Lager, das sich durch malzige Süße, dunklere Farbe und höheren Alkoholgehalt (typischerweise 6-7% Vol.) auszeichnet. Traditionelle Varianten sind Maibock, Doppelbock und Eisbock.",
          nl: "Bock is een sterke Duitse lager gekenmerkt door moutige zoetheid, donkerdere kleur en hoger alcoholpercentage (meestal 6-7% ABV). Traditionele variëteiten zijn Maibock, Doppelbock en Eisbock."
        }
      },
      {
        question: {
          en: "What is a Gose beer known for?",
          es: "¿Por qué es conocida una cerveza Gose?",
          de: "Wofür ist ein Gose-Bier bekannt?",
          nl: "Waarvoor staat een Gose bier bekend?"
        },
        options: [
          { en: "Salty and sour taste", es: "Sabor salado y ácido", de: "Salziger und saurer Geschmack", nl: "Zoute en zure smaak" },
          { en: "Smoky flavor", es: "Sabor ahumado", de: "Rauchiger Geschmack", nl: "Rokerige smaak" },
          { en: "Coffee notes", es: "Notas de café", de: "Kaffeenoten", nl: "Koffienoten" },
          { en: "Chocolate taste", es: "Sabor a chocolate", de: "Schokoladengeschmack", nl: "Chocoladesmaak" }
        ],
        correct: 0,
        explanation: {
          en: "Gose is a German sour wheat beer known for its salty and sour taste, traditionally brewed with coriander and salt. It originated in Goslar, Germany.",
          es: "Gose es una cerveza de trigo ácida alemana conocida por su sabor salado y ácido, tradicionalmente elaborada con cilantro y sal. Se originó en Goslar, Alemania.",
          de: "Gose ist ein deutsches Sauerweizenbier, bekannt für seinen salzigen und sauren Geschmack, traditionell mit Koriander und Salz gebraut. Es stammt aus Goslar, Deutschland.",
          nl: "Gose is een Duits zuur tarwebier bekend om zijn zoute en zure smaak, traditioneel gebrouwen met koriander en zout. Het komt oorspronkelijk uit Goslar, Duitsland."
        }
      },
      {
        question: {
          en: "What makes a Rauchbier unique?",
          es: "¿Qué hace único a un Rauchbier?",
          de: "Was macht ein Rauchbier einzigartig?",
          nl: "Wat maakt een Rauchbier uniek?"
        },
        options: [
          { en: "Smoked malt flavor", es: "Sabor a malta ahumada", de: "Rauchmalzgeschmack", nl: "Gerookte moutsmaak" },
          { en: "Extra hops", es: "Lúpulo extra", de: "Extra Hopfen", nl: "Extra hop" },
          { en: "Fruit additions", es: "Adiciones de fruta", de: "Fruchtzusätze", nl: "Fruittoevoegingen" },
          { en: "Honey sweetness", es: "Dulzura de miel", de: "Honigsüße", nl: "Honingzoetheid" }
        ],
        correct: 0,
        explanation: {
          en: "Rauchbier ('smoke beer' in German) is unique for its smoked malt flavor, created by drying malt over an open flame. The style is traditional to Bamberg, Germany.",
          es: "Rauchbier ('cerveza de humo' en alemán) es único por su sabor a malta ahumada, creado al secar la malta sobre una llama abierta. El estilo es tradicional de Bamberg, Alemania.",
          de: "Rauchbier ist einzigartig durch seinen Rauchmalzgeschmack, der durch das Trocknen von Malz über offener Flamme entsteht. Der Stil ist traditionell in Bamberg, Deutschland.",
          nl: "Rauchbier ('rookbier' in het Duits) is uniek vanwege zijn gerookte moutsmaak, gecreëerd door mout te drogen boven een open vuur. De stijl is traditioneel in Bamberg, Duitsland."
        }
      },
      {
        question: {
          en: "What is a Witbier?",
          es: "¿Qué es una Witbier?",
          de: "Was ist ein Witbier?",
          nl: "Wat is een Witbier?"
        },
        options: [
          { en: "Belgian white wheat beer", es: "Cerveza de trigo blanca belga", de: "Belgisches Weißweizenbier", nl: "Belgisch wit tarwebier" },
          { en: "Dark German lager", es: "Lager alemana oscura", de: "Dunkles deutsches Lager", nl: "Donkere Duitse lager" },
          { en: "Strong English ale", es: "Ale inglés fuerte", de: "Starkes englisches Ale", nl: "Sterk Engels ale" },
          { en: "American amber beer", es: "Cerveza ámbar americana", de: "Amerikanisches Amber Bier", nl: "Amerikaans amber bier" }
        ],
        correct: 0,
        explanation: {
          en: "Witbier (white beer) is a Belgian wheat beer, traditionally brewed with coriander and orange peel. It has a cloudy appearance and refreshing citrusy taste. Hoegaarden is a famous example.",
          es: "Witbier (cerveza blanca) es una cerveza de trigo belga, tradicionalmente elaborada con cilantro y cáscara de naranja. Tiene apariencia turbia y sabor cítrico refrescante. Hoegaarden es un ejemplo famoso.",
          de: "Witbier (Weißbier) ist ein belgisches Weizenbier, traditionell mit Koriander und Orangenschale gebraut. Es hat ein trübes Aussehen und einen erfrischenden zitrusartigen Geschmack. Hoegaarden ist ein berühmtes Beispiel.",
          nl: "Witbier is een Belgisch tarwebier, traditioneel gebrouwen met koriander en sinaasappelschil. Het heeft een troebel uiterlijk en verfrissende citroensmaak. Hoegaarden is een beroemd voorbeeld."
        }
      },
      {
        question: {
          en: "What is the primary difference between a Brown Ale and a Pale Ale?",
          es: "¿Cuál es la diferencia principal entre una Brown Ale y una Pale Ale?",
          de: "Was ist der Hauptunterschied zwischen einem Brown Ale und einem Pale Ale?",
          nl: "Wat is het belangrijkste verschil tussen een Brown Ale en een Pale Ale?"
        },
        options: [
          { en: "Malt roast level and color", es: "Nivel de tostado de malta y color", de: "Malzröstgrad und Farbe", nl: "Mout roostingsniveau en kleur" },
          { en: "Alcohol content", es: "Contenido de alcohol", de: "Alkoholgehalt", nl: "Alcoholpercentage" },
          { en: "Serving temperature", es: "Temperatura de servicio", de: "Serviertemperatur", nl: "Serveertemperatuur" },
          { en: "Country of origin", es: "País de origen", de: "Herkunftsland", nl: "Land van herkomst" }
        ],
        correct: 0,
        explanation: {
          en: "The primary difference is the malt roast level - Brown Ale uses more roasted malts resulting in darker color and nuttier, sweeter flavors, while Pale Ale uses lighter malts giving a golden color and more hop-forward taste.",
          es: "La diferencia principal es el nivel de tostado de la malta - Brown Ale usa maltas más tostadas resultando en color más oscuro y sabores más anuezados y dulces, mientras que Pale Ale usa maltas más claras dando un color dorado y sabor más orientado al lúpulo.",
          de: "Der Hauptunterschied ist der Malzröstgrad - Brown Ale verwendet stärker geröstete Malze, was zu dunklerer Farbe und nussigeren, süßeren Aromen führt, während Pale Ale hellere Malze verwendet, was eine goldene Farbe und hopfenbetonteren Geschmack ergibt.",
          nl: "Het belangrijkste verschil is het mout roostingsniveau - Brown Ale gebruikt meer geroosterde mout wat resulteert in donkerdere kleur en notige, zoetere smaken, terwijl Pale Ale lichtere mout gebruikt wat een gouden kleur en meer hop-gerichte smaak geeft."
        }
      },
      {
        question: {
          en: "What is a Barleywine?",
          es: "¿Qué es un Barleywine?",
          de: "Was ist ein Barleywine?",
          nl: "Wat is een Barleywine?"
        },
        options: [
          { en: "Strong ale with high alcohol content", es: "Ale fuerte con alto contenido de alcohol", de: "Starkes Ale mit hohem Alkoholgehalt", nl: "Sterke ale met hoog alcoholpercentage" },
          { en: "Wine made from barley", es: "Vino hecho de cebada", de: "Wein aus Gerste", nl: "Wijn gemaakt van gerst" },
          { en: "Light summer beer", es: "Cerveza ligera de verano", de: "Leichtes Sommerbier", nl: "Licht zomerbier" },
          { en: "Low-alcohol session beer", es: "Cerveza de sesión baja en alcohol", de: "Alkoholarmes Session-Bier", nl: "Laag-alcohol sessie bier" }
        ],
        correct: 0,
        explanation: {
          en: "Barleywine is a very strong ale with high alcohol content (8-12% ABV or higher), rich malty sweetness, and complex flavors. Despite the name, it's a beer, not wine. It ages well and improves over time.",
          es: "Barleywine es una ale muy fuerte con alto contenido de alcohol (8-12% ABV o más), rica dulzura maltosa y sabores complejos. A pesar del nombre, es una cerveza, no vino. Envejece bien y mejora con el tiempo.",
          de: "Barleywine ist ein sehr starkes Ale mit hohem Alkoholgehalt (8-12% Vol. oder höher), reicher malziger Süße und komplexen Aromen. Trotz des Namens ist es ein Bier, kein Wein. Es reift gut und verbessert sich mit der Zeit.",
          nl: "Barleywine is een zeer sterke ale met hoog alcoholpercentage (8-12% ABV of hoger), rijke moutige zoetheid en complexe smaken. Ondanks de naam is het een bier, geen wijn. Het rijpt goed en verbetert in de loop van de tijd."
        }
      },
      {
        question: {
          en: "What is a Kölsch beer?",
          es: "¿Qué es una cerveza Kölsch?",
          de: "Was ist ein Kölsch-Bier?",
          nl: "Wat is een Kölsch bier?"
        },
        options: [
          { en: "German ale from Cologne", es: "Ale alemana de Colonia", de: "Deutsches Ale aus Köln", nl: "Duitse ale uit Keulen" },
          { en: "Belgian dark beer", es: "Cerveza oscura belga", de: "Belgisches dunkles Bier", nl: "Belgisch donker bier" },
          { en: "Czech pilsner", es: "Pilsner checa", de: "Tschechisches Pilsner", nl: "Tsjechische pilsner" },
          { en: "Irish stout", es: "Stout irlandés", de: "Irisches Stout", nl: "Iers stout" }
        ],
        correct: 0,
        explanation: {
          en: "Kölsch is a light, crisp ale from Cologne (Köln), Germany. It's unique as it's brewed using ale yeast but served at lager temperatures. By law, true Kölsch can only be brewed in Cologne.",
          es: "Kölsch es una ale ligera y fresca de Colonia (Köln), Alemania. Es única ya que se elabora con levadura de ale pero se sirve a temperaturas de lager. Por ley, el verdadero Kölsch solo puede elaborarse en Colonia.",
          de: "Kölsch ist ein leichtes, frisches Ale aus Köln, Deutschland. Es ist einzigartig, da es mit Ale-Hefe gebraut, aber bei Lager-Temperaturen serviert wird. Per Gesetz darf echtes Kölsch nur in Köln gebraut werden.",
          nl: "Kölsch is een lichte, frisse ale uit Keulen (Köln), Duitsland. Het is uniek omdat het gebrouwen wordt met ale gist maar geserveerd wordt op lager temperaturen. Volgens de wet mag echte Kölsch alleen in Keulen gebrouwen worden."
        }
      },
      {
        question: {
          en: "What is the difference between a Single, Dubbel, and Tripel?",
          es: "¿Cuál es la diferencia entre Single, Dubbel y Tripel?",
          de: "Was ist der Unterschied zwischen Single, Dubbel und Tripel?",
          nl: "Wat is het verschil tussen Single, Dubbel en Tripel?"
        },
        options: [
          { en: "Strength and malt content", es: "Fuerza y contenido de malta", de: "Stärke und Malzgehalt", nl: "Sterkte en moutgehalte" },
          { en: "Color only", es: "Solo color", de: "Nur Farbe", nl: "Alleen kleur" },
          { en: "Hop varieties used", es: "Variedades de lúpulo usadas", de: "Verwendete Hopfensorten", nl: "Gebruikte hopvariëteiten" },
          { en: "Serving temperature", es: "Temperatura de servicio", de: "Serviertemperatur", nl: "Serveertemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Single, Dubbel, and Tripel are Belgian Trappist/Abbey beer styles that differ in strength and malt content. Single is lightest (~5% ABV), Dubbel is medium (~7% ABV, darker), and Tripel is strongest (~9% ABV, golden).",
          es: "Single, Dubbel y Tripel son estilos de cerveza trapense/abadía belga que difieren en fuerza y contenido de malta. Single es la más ligera (~5% ABV), Dubbel es media (~7% ABV, más oscura), y Tripel es la más fuerte (~9% ABV, dorada).",
          de: "Single, Dubbel und Tripel sind belgische Trappisten-/Abteibier-Stile, die sich in Stärke und Malzgehalt unterscheiden. Single ist am leichtesten (~5% Vol.), Dubbel ist mittel (~7% Vol., dunkler), und Tripel ist am stärksten (~9% Vol., golden).",
          nl: "Single, Dubbel en Tripel zijn Belgische Trappisten/Abdij bierstijlen die verschillen in sterkte en moutgehalte. Single is het lichtst (~5% ABV), Dubbel is gemiddeld (~7% ABV, donkerder), en Tripel is het sterkst (~9% ABV, goudkleurig)."
        }
      },
      {
        question: {
          en: "What is an Altbier?",
          es: "¿Qué es un Altbier?",
          de: "Was ist ein Altbier?",
          nl: "Wat is een Altbier?"
        },
        options: [
          { en: "German 'old' style ale from Düsseldorf", es: "Ale de estilo 'antiguo' alemán de Düsseldorf", de: "Deutsches 'altes' Bierstil aus Düsseldorf", nl: "Duitse 'oude' stijl ale uit Düsseldorf" },
          { en: "Aged sour beer", es: "Cerveza ácida envejecida", de: "Gereiftes Sauerbier", nl: "Gerijpt zuur bier" },
          { en: "Alternative lager", es: "Lager alternativa", de: "Alternatives Lager", nl: "Alternatieve lager" },
          { en: "High-altitude beer", es: "Cerveza de gran altitud", de: "Höhenlagenbier", nl: "Hooggelegen bier" }
        ],
        correct: 0,
        explanation: {
          en: "Altbier ('old beer' in German) is a traditional copper-colored ale from Düsseldorf, Germany. Despite being an ale, it's cold-conditioned like a lager, giving it a crisp, clean finish with malty character.",
          es: "Altbier ('cerveza vieja' en alemán) es una ale tradicional de color cobrizo de Düsseldorf, Alemania. A pesar de ser una ale, está acondicionada en frío como una lager, dándole un acabado fresco y limpio con carácter maltoso.",
          de: "Altbier ('altes Bier' auf Deutsch) ist ein traditionelles kupferfarbenes Ale aus Düsseldorf, Deutschland. Obwohl es ein Ale ist, wird es kalt konditioniert wie ein Lager, was ihm ein frisches, sauberes Finish mit malzigem Charakter verleiht.",
          nl: "Altbier ('oud bier' in het Duits) is een traditionele koperkleurige ale uit Düsseldorf, Duitsland. Ondanks dat het een ale is, wordt het koud geconditioneerd zoals een lager, wat het een frisse, schone afdronk geeft met moutig karakter."
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
