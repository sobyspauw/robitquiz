// Quiz Template - Level 7: Drinken - Bier
(function() {
  const level7 = {
    name: {
      en: "Advanced Beer Styles and Regional Varieties",
      es: "Estilos Avanzados de Cerveza y Variedades Regionales",
      de: "Fortgeschrittene Bierstile und Regionale Sorten",
      nl: "Geavanceerde Bierstijlen en Regionale Variëteiten"
    },
    questions: [
      {
        question: {
          en: "What distinguishes a 'Gose' from other sour beer styles?",
          es: "¿Qué distingue una 'Gose' de otros estilos de cerveza agria?",
          de: "Was unterscheidet ein 'Gose' von anderen sauren Bierstilen?",
          nl: "Wat onderscheidt een 'Gose' van andere zure bierstijlen?"
        },
        options: [
          { en: "Addition of salt and coriander", es: "Adición de sal y cilantro", de: "Zugabe von Salz und Koriander", nl: "Toevoeging van zout en koriander" },
          { en: "Use of wild cherries", es: "Uso de cerezas silvestres", de: "Verwendung von Wildkirschen", nl: "Gebruik van wilde kersen" },
          { en: "Aged in wine barrels only", es: "Envejecido solo en barricas de vino", de: "Nur in Weinfässern gereift", nl: "Alleen gerijpt in wijnvaten" },
          { en: "Made with smoked malt", es: "Hecho con malta ahumada", de: "Hergestellt mit Rauchmalz", nl: "Gemaakt met gerookte mout" }
        ],
        correct: 0,
        explanation: {
          en: "Gose is a traditional German sour wheat beer that is distinguished by the addition of salt and coriander seeds, giving it a unique tart and slightly salty character.",
          es: "Gose es una cerveza agria tradicional alemana de trigo que se distingue por la adición de sal y semillas de cilantro, dándole un carácter ácido único y ligeramente salado.",
          de: "Gose ist ein traditionelles deutsches saures Weizenbier, das sich durch die Zugabe von Salz und Koriandersamen auszeichnet und einen einzigartigen säuerlichen und leicht salzigen Charakter verleiht.",
          nl: "Gose is een traditioneel Duits zuur tarwebier dat zich onderscheidt door de toevoeging van zout en korianderzaad, wat het een uniek zuur en licht zout karakter geeft."
        }
      },
      {
        question: {
          en: "Which beer style is traditionally brewed with smoked malt and originates from Bamberg, Germany?",
          es: "¿Qué estilo de cerveza se elabora tradicionalmente con malta ahumada y se origina en Bamberg, Alemania?",
          de: "Welcher Bierstil wird traditionell mit Rauchmalz gebraut und stammt aus Bamberg, Deutschland?",
          nl: "Welke bierstijl wordt traditioneel gebrouwen met gerookte mout en komt oorspronkelijk uit Bamberg, Duitsland?"
        },
        options: [
          { en: "Kölsch", es: "Kölsch", de: "Kölsch", nl: "Kölsch" },
          { en: "Rauchbier", es: "Rauchbier", de: "Rauchbier", nl: "Rauchbier" },
          { en: "Altbier", es: "Altbier", de: "Altbier", nl: "Altbier" },
          { en: "Märzen", es: "Märzen", de: "Märzen", nl: "Märzen" }
        ],
        correct: 1,
        explanation: {
          en: "Rauchbier (smoke beer) is a traditional German beer style from Bamberg that uses malt dried over beechwood fires, giving the beer its distinctive smoky flavor.",
          es: "Rauchbier (cerveza ahumada) es un estilo tradicional alemán de cerveza de Bamberg que usa malta secada sobre fuegos de haya, dando a la cerveza su sabor ahumado distintivo.",
          de: "Rauchbier ist ein traditioneller deutscher Bierstil aus Bamberg, der Malz verwendet, das über Buchenfeuern getrocknet wird, was dem Bier seinen charakteristischen rauchigen Geschmack verleiht.",
          nl: "Rauchbier (gerookt bier) is een traditionele Duitse bierstijl uit Bamberg die mout gebruikt die gedroogd is boven beukenhoutburen, wat het bier zijn onderscheidende rokerige smaak geeft."
        }
      },
      {
        question: {
          en: "What characterizes a 'Brett' beer in terms of flavor and aroma?",
          es: "¿Qué caracteriza una cerveza 'Brett' en términos de sabor y aroma?",
          de: "Was charakterisiert ein 'Brett'-Bier in Bezug auf Geschmack und Aroma?",
          nl: "Wat kenmerkt een 'Brett' bier qua smaak en aroma?"
        },
        options: [
          { en: "Hoppy and citrusy notes", es: "Notas lupuladas y cítricas", de: "Hopfige und zitrusartige Noten", nl: "Hopachtige en citrusachtige noten" },
          { en: "Barnyard, leather, and funky aromas", es: "Aromas de corral, cuero y funky", de: "Bauernhof-, Leder- und funky Aromen", nl: "Boerderij-, leer- en funky aroma's" },
          { en: "Sweet and malty character", es: "Carácter dulce y malteado", de: "Süßer und malziger Charakter", nl: "Zoet en moutig karakter" },
          { en: "Clean and crisp finish", es: "Final limpio y crujiente", de: "Sauberer und frischer Abgang", nl: "Schone en frisse afdronk" }
        ],
        correct: 1,
        explanation: {
          en: "Brett beers are fermented with Brettanomyces yeast, which produces characteristic 'funky' aromas often described as barnyard, leather, horse blanket, or earthy notes.",
          es: "Las cervezas Brett se fermentan con levadura Brettanomyces, que produce aromas característicos 'funky' a menudo descritos como corral, cuero, manta de caballo o notas terrosas.",
          de: "Brett-Biere werden mit Brettanomyces-Hefe fermentiert, die charakteristische 'funky' Aromen produziert, die oft als Bauernhof, Leder, Pferdedecke oder erdige Noten beschrieben werden.",
          nl: "Brett bieren worden gefermenteerd met Brettanomyces gist, die karakteristieke 'funky' aroma's produceert die vaak beschreven worden als boerderij, leer, paardendeken of aardse noten."
        }
      },
      {
        question: {
          en: "Which Belgian beer style is known for its complex spicing with herbs and orange peel?",
          es: "¿Qué estilo de cerveza belga es conocido por su especiado complejo con hierbas y cáscara de naranja?",
          de: "Welcher belgische Bierstil ist für seine komplexe Würzung mit Kräutern und Orangenschale bekannt?",
          nl: "Welke Belgische bierstijl staat bekend om zijn complexe kruidenmenging met kruiden en sinaasappelschil?"
        },
        options: [
          { en: "Dubbel", es: "Dubbel", de: "Dubbel", nl: "Dubbel" },
          { en: "Tripel", es: "Tripel", de: "Tripel", nl: "Tripel" },
          { en: "Witbier", es: "Witbier", de: "Witbier", nl: "Witbier" },
          { en: "Lambic", es: "Lambic", de: "Lambic", nl: "Lambic" }
        ],
        correct: 2,
        explanation: {
          en: "Belgian Witbier (white beer) is traditionally spiced with coriander seeds and dried orange peel, along with other herbs, creating its characteristic refreshing and aromatic profile.",
          es: "El Witbier belga (cerveza blanca) se especía tradicionalmente con semillas de cilantro y cáscara de naranja seca, junto con otras hierbas, creando su perfil característico refrescante y aromático.",
          de: "Belgisches Witbier (Weißbier) wird traditionell mit Koriandersamen und getrockneter Orangenschale sowie anderen Kräutern gewürzt, was sein charakteristisches erfrischendes und aromatisches Profil schafft.",
          nl: "Belgisch Witbier (wit bier) wordt traditioneel gekruid met korianderzaad en gedroogde sinaasappelschil, samen met andere kruiden, wat zijn karakteristieke verfrissende en aromatische profiel creëert."
        }
      },
      {
        question: {
          en: "What is the defining characteristic of 'Sahti', the traditional Finnish beer?",
          es: "¿Cuál es la característica definitoria del 'Sahti', la cerveza tradicional finlandesa?",
          de: "Was ist das definierende Merkmal von 'Sahti', dem traditionellen finnischen Bier?",
          nl: "Wat is het bepalende kenmerk van 'Sahti', het traditionele Finse bier?"
        },
        options: [
          { en: "Fermented with baker's yeast and flavored with juniper", es: "Fermentado con levadura de panadero y aromatizado con enebro", de: "Mit Bäckerhefe fermentiert und mit Wacholder aromatisiert", nl: "Gefermenteerd met bakkersgist en gearomatiseerd met jeneverbes" },
          { en: "Aged in oak barrels for 2 years", es: "Envejecido en barricas de roble durante 2 años", de: "2 Jahre in Eichenfässern gereift", nl: "2 jaar gerijpt in eiken vaten" },
          { en: "Made with 100% rye malt", es: "Hecho con 100% malta de centeno", de: "Hergestellt mit 100% Roggenmalz", nl: "Gemaakt met 100% roggemout" },
          { en: "Naturally carbonated with honey", es: "Naturalmente carbonatado con miel", de: "Natürlich mit Honig karbonisiert", nl: "Natuurlijk gekoolzuurd met honing" }
        ],
        correct: 0,
        explanation: {
          en: "Sahti is a traditional Finnish farmhouse beer that uses baker's yeast for fermentation and juniper branches for filtration and flavoring, giving it a unique resinous character.",
          es: "Sahti es una cerveza tradicional finlandesa de granja que usa levadura de panadero para fermentación y ramas de enebro para filtración y aromatización, dándole un carácter resinoso único.",
          de: "Sahti ist ein traditionelles finnisches Bauernhausbier, das Bäckerhefe für die Fermentation und Wacholderäste für Filterung und Aromatisierung verwendet, was ihm einen einzigartigen harzigen Charakter verleiht.",
          nl: "Sahti is een traditioneel Fins boerderijbier dat bakkersgist gebruikt voor fermentatie en jeneverbertakken voor filtratie en aromátisering, wat het een uniek harsachtig karakter geeft."
        }
      },
      {
        question: {
          en: "Which beer style represents the highest alcohol content category in Belgian Trappist brewing?",
          es: "¿Qué estilo de cerveza representa la categoría de mayor contenido alcohólico en la elaboración trapense belga?",
          de: "Welcher Bierstil repräsentiert die höchste Alkoholgehaltskategorie im belgischen Trappistenbrauen?",
          nl: "Welke bierstijl vertegenwoordigt de hoogste alcoholgehalte categorie in Belgisch Trappistenbier brouwen?"
        },
        options: [
          { en: "Tripel", es: "Tripel", de: "Tripel", nl: "Tripel" },
          { en: "Dubbel", es: "Dubbel", de: "Dubbel", nl: "Dubbel" },
          { en: "Quadrupel", es: "Quadrupel", de: "Quadrupel", nl: "Quadrupel" },
          { en: "Enkel", es: "Enkel", de: "Enkel", nl: "Enkel" }
        ],
        correct: 2,
        explanation: {
          en: "Quadrupel is the strongest category of Belgian Trappist beers, typically ranging from 10-12% ABV or higher, with rich, complex dark fruit and spice characteristics.",
          es: "Quadrupel es la categoría más fuerte de cervezas trapenses belgas, típicamente entre 10-12% ABV o más, con características ricas y complejas de frutas oscuras y especias.",
          de: "Quadrupel ist die stärkste Kategorie belgischer Trappistenbiere, typischerweise zwischen 10-12% ABV oder höher, mit reichen, komplexen dunklen Frucht- und Gewürzcharakteristika.",
          nl: "Quadrupel is de sterkste categorie van Belgische Trappistenbieren, typisch tussen 10-12% ABV of hoger, met rijke, complexe donkere vrucht- en kruidenkarakteristieken."
        }
      },
      {
        question: {
          en: "What distinguishes 'Gueuze' from other lambic styles?",
          es: "¿Qué distingue el 'Gueuze' de otros estilos lambic?",
          de: "Was unterscheidet 'Gueuze' von anderen Lambic-Stilen?",
          nl: "Wat onderscheidt 'Gueuze' van andere lambic stijlen?"
        },
        options: [
          { en: "It's aged with fresh fruit", es: "Se envejece con fruta fresca", de: "Es wird mit frischen Früchten gereift", nl: "Het wordt gerijpt met vers fruit" },
          { en: "It's a blend of young and old lambics", es: "Es una mezcla de lambics jóvenes y viejos", de: "Es ist eine Mischung aus jungen und alten Lambics", nl: "Het is een mengsel van jonge en oude lambics" },
          { en: "It uses only wheat malt", es: "Usa solo malta de trigo", de: "Es verwendet nur Weizenmalz", nl: "Het gebruikt alleen tarwemout" },
          { en: "It's filtered before bottling", es: "Se filtra antes del embotellado", de: "Es wird vor der Abfüllung gefiltert", nl: "Het wordt gefilterd voor het bottelen" }
        ],
        correct: 1,
        explanation: {
          en: "Gueuze is a traditional Belgian lambic beer made by blending young (1-year) and old (2-3 year) lambics, which are then bottle-conditioned to create natural carbonation.",
          es: "Gueuze es una cerveza lambic belga tradicional hecha mezclando lambics jóvenes (1 año) y viejos (2-3 años), que luego se acondicionan en botella para crear carbonatación natural.",
          de: "Gueuze ist ein traditionelles belgisches Lambic-Bier, das durch Mischen von jungen (1-jährigen) und alten (2-3-jährigen) Lambics hergestellt wird, die dann flaschenfermentiert werden, um natürliche Kohlensäure zu erzeugen.",
          nl: "Gueuze is een traditioneel Belgisch lambicbier gemaakt door het mengen van jonge (1-jarige) en oude (2-3-jarige) lambics, die vervolgens flesgerijpt worden om natuurlijke koolzuur te creëren."
        }
      },
      {
        question: {
          en: "Which American beer style is characterized by intense hop aroma and flavor with minimal malt sweetness?",
          es: "¿Qué estilo de cerveza americano se caracteriza por un intenso aroma y sabor de lúpulo con mínima dulzura de malta?",
          de: "Welcher amerikanische Bierstil ist durch intensives Hopfenaroma und -geschmack mit minimaler Malzsüße charakterisiert?",
          nl: "Welke Amerikaanse bierstijl wordt gekenmerkt door intens hoparoma en smaak met minimale moutzoetheid?"
        },
        options: [
          { en: "American Wheat Beer", es: "Cerveza de Trigo Americana", de: "Amerikanisches Weizenbier", nl: "Amerikaans Tarwebier" },
          { en: "West Coast IPA", es: "IPA de la Costa Oeste", de: "West Coast IPA", nl: "West Coast IPA" },
          { en: "American Brown Ale", es: "Brown Ale Americana", de: "Amerikanisches Brown Ale", nl: "Amerikaanse Brown Ale" },
          { en: "Cream Ale", es: "Cream Ale", de: "Cream Ale", nl: "Cream Ale" }
        ],
        correct: 1,
        explanation: {
          en: "West Coast IPA is characterized by aggressive hop character with citrusy, piney, and resinous flavors, dry finish, and prominent bitterness that showcases hop varieties.",
          es: "La IPA de la Costa Oeste se caracteriza por un carácter agresivo de lúpulo con sabores cítricos, de pino y resinosos, final seco y amargura prominente que destaca las variedades de lúpulo.",
          de: "West Coast IPA zeichnet sich durch aggressiven Hopfencharakter mit zitrusartigen, kiefernartigen und harzigen Aromen, trockenem Abgang und prominenter Bitterkeit aus, die Hopfensorten zur Geltung bringt.",
          nl: "West Coast IPA wordt gekenmerkt door agressief hopkarakter met citrusachtige, dennenhars- en harsachtige smaken, droge afdronk en prominente bitterheid die hopvariëteiten benadrukt."
        }
      },
      {
        question: {
          en: "What is the traditional serving temperature for English cask ales?",
          es: "¿Cuál es la temperatura de servicio tradicional para las ales inglesas de barril?",
          de: "Was ist die traditionelle Serviertemperatur für englische Fassbiere?",
          nl: "Wat is de traditionele serveertemperatuur voor Engelse vaatbieren?"
        },
        options: [
          { en: "32-38°F (0-3°C)", es: "32-38°F (0-3°C)", de: "32-38°F (0-3°C)", nl: "32-38°F (0-3°C)" },
          { en: "50-55°F (10-13°C)", es: "50-55°F (10-13°C)", de: "50-55°F (10-13°C)", nl: "50-55°F (10-13°C)" },
          { en: "60-65°F (15-18°C)", es: "60-65°F (15-18°C)", de: "60-65°F (15-18°C)", nl: "60-65°F (15-18°C)" },
          { en: "70-75°F (21-24°C)", es: "70-75°F (21-24°C)", de: "70-75°F (21-24°C)", nl: "70-75°F (21-24°C)" }
        ],
        correct: 1,
        explanation: {
          en: "English cask ales are traditionally served at cellar temperature, around 50-55°F (10-13°C), which allows the complex flavors and aromas to be fully appreciated.",
          es: "Las ales inglesas de barril se sirven tradicionalmente a temperatura de bodega, alrededor de 50-55°F (10-13°C), lo que permite que los sabores y aromas complejos sean completamente apreciados.",
          de: "Englische Fassbiere werden traditionell bei Kellertemperatur serviert, etwa 50-55°F (10-13°C), was es ermöglicht, die komplexen Aromen und Geschmäcker vollständig zu schätzen.",
          nl: "Engelse vaatbieren worden traditioneel geserveerd op keldertemperatuur, rond 50-55°F (10-13°C), wat het mogelijk maakt om de complexe smaken en aroma's volledig te waarderen."
        }
      },
      {
        question: {
          en: "Which beer style is considered the ancestor of modern Porter and Stout?",
          es: "¿Qué estilo de cerveza se considera el ancestro del Porter y Stout modernos?",
          de: "Welcher Bierstil gilt als Vorfahre des modernen Porter und Stout?",
          nl: "Welke bierstijl wordt beschouwd als de voorouder van moderne Porter en Stout?"
        },
        options: [
          { en: "Brown Ale", es: "Brown Ale", de: "Brown Ale", nl: "Brown Ale" },
          { en: "Mild Ale", es: "Mild Ale", de: "Mild Ale", nl: "Mild Ale" },
          { en: "October Beer", es: "October Beer", de: "October Beer", nl: "October Beer" },
          { en: "Three Threads", es: "Three Threads", de: "Three Threads", nl: "Three Threads" }
        ],
        correct: 3,
        explanation: {
          en: "Three Threads was an 18th-century London beer that mixed three different ales. Porter was developed as a single beer to replicate this blend, eventually evolving into Stout.",
          es: "Three Threads era una cerveza londinense del siglo XVIII que mezclaba tres ales diferentes. Porter se desarrolló como una sola cerveza para replicar esta mezcla, eventualmente evolucionando a Stout.",
          de: "Three Threads war ein Londoner Bier des 18. Jahrhunderts, das drei verschiedene Ales mischte. Porter wurde als einzelnes Bier entwickelt, um diese Mischung zu replizieren und entwickelte sich schließlich zu Stout.",
          nl: "Three Threads was een 18e-eeuws Londens bier dat drie verschillende ales mengde. Porter werd ontwikkeld als één bier om deze mix te repliceren, en evolueerde uiteindelijk tot Stout."
        }},
      {
        question: {
          en: "What is the role of water in beer production?",
          es: "¿Cuál es el papel del agua en la producción de cerveza?",
          de: "Welche Rolle spielt Wasser in der Bierproduktion?",
          nl: "Wat is de rol van water bij bierproductie?"
        },
        options: [
          { en: "It dilutes the beer", es: "Diluye la cerveza", de: "Es verdünnt das Bier", nl: "Het verdunt het bier" },
          { en: "It forms the majority of beer composition", es: "Forma la mayoría de la composición de la cerveza", de: "Es bildet den größten Teil der Bierzusammensetzung", nl: "Het vormt het grootste deel van de biersamenstelling" },
          { en: "It adds color", es: "Añade color", de: "Es fügt Farbe hinzu", nl: "Het voegt kleur toe" },
          { en: "It creates carbonation", es: "Crea carbonatación", de: "Es erzeugt Kohlensäure", nl: "Het creëert koolzuur" }
        ],
        correct: 1,
        explanation: {
          en: "Water makes up about 90-95% of beer and its mineral content significantly affects the final product taste and quality.",
          es: "El agua constituye aproximadamente el 90-95% de la cerveza y su contenido mineral afecta significativamente el sabor y la calidad del producto final.",
          de: "Wasser macht etwa 90-95% des Bieres aus und sein Mineralgehalt beeinflusst den Geschmack und die Qualität des Endprodukts erheblich.",
          nl: "Water vormt ongeveer 90-95% van bier en het mineraalgehalte beïnvloedt de smaak en kwaliteit van het eindproduct aanzienlijk."
        }
      },
      {
        question: {
          en: "What does IBU stand for in beer terminology?",
          es: "¿Qué significa IBU en la terminología cervecera?",
          de: "Wofür steht IBU in der Bierterminologie?",
          nl: "Waar staat IBU voor in biertermen?"
        },
        options: [
          { en: "International Beer Union", es: "Unión Internacional de Cerveza", de: "Internationale Bierunion", nl: "Internationale Bierunie" },
          { en: "International Bitterness Units", es: "Unidades Internacionales de Amargor", de: "Internationale Bitterkeitseinheiten", nl: "International Bitterness Units" },
          { en: "International Brewing Units", es: "Unidades Internacionales de Elaboración", de: "Internationale Braueinheiten", nl: "Internationale Brouwunits" },
          { en: "Independent Beer Union", es: "Unión de Cerveza Independiente", de: "Unabhängige Bierunion", nl: "Onafhankelijke Bierunie" }
        ],
        correct: 1,
        explanation: {
          en: "IBU stands for International Bitterness Units, a measurement scale for the bitterness of beer derived from hops.",
          es: "IBU significa Unidades Internacionales de Amargor, una escala de medición para el amargor de la cerveza derivada del lúpulo.",
          de: "IBU steht für Internationale Bitterkeitseinheiten, eine Messskala für die Bitterkeit von Bier, die vom Hopfen herrührt.",
          nl: "IBU staat voor International Bitterness Units, een meetschaal voor de bitterheid van bier afkomstig van hop."
        }
      },
      {
        question: {
          en: "What is the difference between ale and lager yeast fermentation temperatures?",
          es: "¿Cuál es la diferencia entre las temperaturas de fermentación de levadura ale y lager?",
          de: "Was ist der Unterschied zwischen Ale- und Lager-Hefe-Gärungstemperaturen?",
          nl: "Wat is het verschil tussen ale en lager gistfermentatietemperaturen?"
        },
        options: [
          { en: "Ales ferment warmer, lagers ferment cooler", es: "Las ales fermentan más cálido, las lagers más frío", de: "Ales gären wärmer, Lagers gären kühler", nl: "Ales fermenteren warmer, lagers fermenteren koeler" },
          { en: "Both ferment at the same temperature", es: "Ambas fermentan a la misma temperatura", de: "Beide gären bei derselben Temperatur", nl: "Beide fermenteren op dezelfde temperatuur" },
          { en: "Lagers ferment warmer, ales ferment cooler", es: "Las lagers fermentan más cálido, las ales más frío", de: "Lagers gären wärmer, Ales gären kühler", nl: "Lagers fermenteren warmer, ales fermenteren koeler" },
          { en: "Temperature does not matter", es: "La temperatura no importa", de: "Die Temperatur ist egal", nl: "Temperatuur maakt niet uit" }
        ],
        correct: 0,
        explanation: {
          en: "Ale yeast ferments at warmer temperatures (15-24°C), while lager yeast ferments at cooler temperatures (7-13°C), creating distinct flavor profiles.",
          es: "La levadura ale fermenta a temperaturas más cálidas (15-24°C), mientras que la levadura lager fermenta a temperaturas más frías (7-13°C), creando perfiles de sabor distintos.",
          de: "Ale-Hefe gärt bei wärmeren Temperaturen (15-24°C), während Lager-Hefe bei kühleren Temperaturen (7-13°C) gärt und unterschiedliche Geschmacksprofile erzeugt.",
          nl: "Ale-gist fermenteert bij warmere temperaturen (15-24°C), terwijl lager-gist fermenteert bij koelere temperaturen (7-13°C), wat onderscheidende smaakprofielen creëert."
        }
      },
      {
        question: {
          en: "What is the purpose of the boil in beer brewing?",
          es: "¿Cuál es el propósito del hervido en la elaboración de cerveza?",
          de: "Was ist der Zweck des Kochens beim Bierbrauen?",
          nl: "Wat is het doel van het koken bij bierbrouwen?"
        },
        options: [
          { en: "To add color only", es: "Solo para agregar color", de: "Nur um Farbe hinzuzufügen", nl: "Alleen om kleur toe te voegen" },
          { en: "To sterilize and extract hop compounds", es: "Para esterilizar y extraer compuestos del lúpulo", de: "Um zu sterilisieren und Hopfenverbindungen zu extrahieren", nl: "Om te steriliseren en hopverbindingen te extraheren" },
          { en: "To increase alcohol content", es: "Para aumentar el contenido de alcohol", de: "Um den Alkoholgehalt zu erhöhen", nl: "Om het alcoholgehalte te verhogen" },
          { en: "To add carbonation", es: "Para agregar carbonatación", de: "Um Kohlensäure hinzuzufügen", nl: "Om koolzuur toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "The boil sterilizes the wort, extracts bittering compounds from hops, concentrates the wort, and drives off unwanted volatiles.",
          es: "El hervido esteriliza el mosto, extrae compuestos amargos del lúpulo, concentra el mosto y elimina volátiles no deseados.",
          de: "Das Kochen sterilisiert die Würze, extrahiert Bitterstoffe aus dem Hopfen, konzentriert die Würze und vertreibt unerwünschte flüchtige Stoffe.",
          nl: "Het koken steriliseert de wort, extraheert bittere verbindingen uit hop, concentreert de wort en verdrijft ongewenste vluchtige stoffen."
        }
      },
      {
        question: {
          en: "What is meant by original gravity in brewing?",
          es: "¿Qué se entiende por gravedad original en la elaboración?",
          de: "Was bedeutet Stammwürze beim Brauen?",
          nl: "Wat wordt bedoeld met oorspronkelijk soortelijk gewicht bij brouwen?"
        },
        options: [
          { en: "The weight of the brewing equipment", es: "El peso del equipo de elaboración", de: "Das Gewicht der Brauausrüstung", nl: "Het gewicht van de brouwapparatuur" },
          { en: "The density of wort before fermentation", es: "La densidad del mosto antes de la fermentación", de: "Die Dichte der Würze vor der Gärung", nl: "De dichtheid van wort voor fermentatie" },
          { en: "The pH level of water", es: "El nivel de pH del agua", de: "Der pH-Wert des Wassers", nl: "Het pH-niveau van water" },
          { en: "The temperature of fermentation", es: "La temperatura de fermentación", de: "Die Gärungstemperatur", nl: "De fermentatietemperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "Original gravity measures the density of wort before fermentation, indicating the amount of fermentable sugars present that will determine alcohol content.",
          es: "La gravedad original mide la densidad del mosto antes de la fermentación, indicando la cantidad de azúcares fermentables presentes que determinarán el contenido de alcohol.",
          de: "Die Stammwürze misst die Dichte der Würze vor der Gärung und zeigt die Menge an fermentierbaren Zuckern an, die den Alkoholgehalt bestimmen werden.",
          nl: "Oorspronkelijk soortelijk gewicht meet de dichtheid van wort voor fermentatie, wat de hoeveelheid fermenteerbare suikers aangeeft die het alcoholgehalte zal bepalen."
        }
      },
      {
        question: {
          en: "What is krausening in beer production?",
          es: "¿Qué es el krausening en la producción de cerveza?",
          de: "Was ist Kräusening in der Bierproduktion?",
          nl: "Wat is krausening bij bierproductie?"
        },
        options: [
          { en: "Adding spices to beer", es: "Agregar especias a la cerveza", de: "Gewürze zum Bier hinzufügen", nl: "Specerijen aan bier toevoegen" },
          { en: "Adding actively fermenting wort for carbonation", es: "Agregar mosto en fermentación activa para carbonatación", de: "Aktiv gärende Würze für Kohlensäure hinzufügen", nl: "Actief fermenterende wort toevoegen voor koolzuur" },
          { en: "Filtering the beer", es: "Filtrar la cerveza", de: "Das Bier filtern", nl: "Het bier filteren" },
          { en: "Aging in wooden barrels", es: "Envejecer en barricas de madera", de: "Reifung in Holzfässern", nl: "Rijpen in houten vaten" }
        ],
        correct: 1,
        explanation: {
          en: "Krausening involves adding a small amount of actively fermenting wort to finished beer for natural carbonation and conditioning.",
          es: "El krausening implica agregar una pequeña cantidad de mosto en fermentación activa a la cerveza terminada para carbonatación y acondicionamiento natural.",
          de: "Kräusening beinhaltet das Hinzufügen einer kleinen Menge aktiv gärender Würze zum fertigen Bier für natürliche Kohlensäure und Konditionierung.",
          nl: "Krausening houdt in dat een kleine hoeveelheid actief fermenterende wort aan afgewerkt bier wordt toegevoegd voor natuurlijke koolzuur en conditionering."
        }
      },
      {
        question: {
          en: "What does ABV measure in beer?",
          es: "¿Qué mide el ABV en la cerveza?",
          de: "Was misst ABV im Bier?",
          nl: "Wat meet ABV in bier?"
        },
        options: [
          { en: "Aroma and Bitterness Value", es: "Valor de Aroma y Amargor", de: "Aroma- und Bitterkeitswert", nl: "Aroma en Bitterheidswaarde" },
          { en: "Alcohol By Volume", es: "Alcohol por Volumen", de: "Alkohol nach Volumen", nl: "Alcohol By Volume" },
          { en: "Average Beer Value", es: "Valor Promedio de Cerveza", de: "Durchschnittlicher Bierwert", nl: "Gemiddelde Bierwaarde" },
          { en: "Absolute Beer Volume", es: "Volumen Absoluto de Cerveza", de: "Absolutes Biervolumen", nl: "Absoluut Biervolume" }
        ],
        correct: 1,
        explanation: {
          en: "ABV stands for Alcohol By Volume, measuring the percentage of alcohol content in beer.",
          es: "ABV significa Alcohol por Volumen, midiendo el porcentaje de contenido de alcohol en la cerveza.",
          de: "ABV steht für Alkohol nach Volumen und misst den Prozentsatz des Alkoholgehalts im Bier.",
          nl: "ABV staat voor Alcohol By Volume, het meten van het percentage alcoholgehalte in bier."
        }
      },
      {
        question: {
          en: "What are adjuncts in brewing?",
          es: "¿Qué son los adjuntos en la elaboración?",
          de: "Was sind Zusatzstoffe beim Brauen?",
          nl: "Wat zijn adjuncten bij het brouwen?"
        },
        options: [
          { en: "Additional brewing equipment", es: "Equipo de elaboración adicional", de: "Zusätzliche Brauausrüstung", nl: "Extra brouwapparatuur" },
          { en: "Unmalted grains or fermentable sugars", es: "Granos no malteados o azúcares fermentables", de: "Ungemälzte Körner oder fermentierbare Zucker", nl: "Niet-gemout graan of fermenteerbare suikers" },
          { en: "Cleaning chemicals", es: "Químicos de limpieza", de: "Reinigungschemikalien", nl: "Schoonmaakchemicaliën" },
          { en: "Different yeast strains", es: "Diferentes cepas de levadura", de: "Verschiedene Hefestämme", nl: "Verschillende giststammen" }
        ],
        correct: 1,
        explanation: {
          en: "Adjuncts are unmalted grains or other fermentable sugars added to beer as supplements to malted barley, such as corn, rice, or sugar.",
          es: "Los adjuntos son granos no malteados u otros azúcares fermentables agregados a la cerveza como suplementos a la cebada malteada, como maíz, arroz o azúcar.",
          de: "Zusatzstoffe sind ungemälzte Körner oder andere fermentierbare Zucker, die dem Bier als Ergänzung zu gemälzter Gerste hinzugefügt werden, wie Mais, Reis oder Zucker.",
          nl: "Adjuncten zijn niet-gemout graan of andere fermenteerbare suikers die aan bier worden toegevoegd als aanvulling op gemout gerst, zoals mais, rijst of suiker."
        }
      },
      {
        question: {
          en: "What is the function of finings in beer production?",
          es: "¿Cuál es la función de los clarificantes en la producción de cerveza?",
          de: "Was ist die Funktion von Schönungsmitteln in der Bierproduktion?",
          nl: "Wat is de functie van klaringsmiddelen bij bierproductie?"
        },
        options: [
          { en: "To add flavor", es: "Para agregar sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" },
          { en: "To clarify beer by removing particles", es: "Para clarificar la cerveza eliminando partículas", de: "Um Bier durch Entfernen von Partikeln zu klären", nl: "Om bier te helderen door deeltjes te verwijderen" },
          { en: "To increase carbonation", es: "Para aumentar la carbonatación", de: "Um die Kohlensäure zu erhöhen", nl: "Om koolzuur te verhogen" },
          { en: "To preserve the beer", es: "Para conservar la cerveza", de: "Um das Bier zu konservieren", nl: "Om het bier te bewaren" }
        ],
        correct: 1,
        explanation: {
          en: "Finings are clarifying agents added to beer to help proteins and yeast cells clump together and settle out, producing clearer beer.",
          es: "Los clarificantes son agentes clarificadores agregados a la cerveza para ayudar a que las proteínas y células de levadura se aglomeren y se asienten, produciendo cerveza más clara.",
          de: "Schönungsmittel sind Klärmittel, die dem Bier zugesetzt werden, um Proteine und Hefezellen zusammenzuballen und abzusetzen, wodurch klareres Bier entsteht.",
          nl: "Klaringsmiddelen zijn helderingsmiddelen die aan bier worden toegevoegd om eiwitten en gistcellen te laten samenklonteren en bezinken, wat helderder bier produceert."
        }
      },
      {
        question: {
          en: "What is attenuation in brewing?",
          es: "¿Qué es la atenuación en la elaboración?",
          de: "Was ist Vergärungsgrad beim Brauen?",
          nl: "Wat is attenuatie bij brouwen?"
        },
        options: [
          { en: "The reduction of sugars during fermentation", es: "La reducción de azúcares durante la fermentación", de: "Die Reduzierung von Zuckern während der Gärung", nl: "De vermindering van suikers tijdens fermentatie" },
          { en: "The addition of hops", es: "La adición de lúpulo", de: "Die Zugabe von Hopfen", nl: "De toevoeging van hop" },
          { en: "The cooling of wort", es: "El enfriamiento del mosto", de: "Das Kühlen der Würze", nl: "Het afkoelen van wort" },
          { en: "The filtration process", es: "El proceso de filtración", de: "Der Filtrationsprozess", nl: "Het filterproces" }
        ],
        correct: 0,
        explanation: {
          en: "Attenuation refers to the degree to which yeast converts fermentable sugars into alcohol and CO2, measured as the difference between original and final gravity.",
          es: "La atenuación se refiere al grado en que la levadura convierte azúcares fermentables en alcohol y CO2, medido como la diferencia entre la gravedad original y final.",
          de: "Vergärungsgrad bezieht sich auf den Grad, zu dem Hefe fermentierbare Zucker in Alkohol und CO2 umwandelt, gemessen als Differenz zwischen Stammwürze und Endvergärung.",
          nl: "Attenuatie verwijst naar de mate waarin gist fermenteerbare suikers omzet in alcohol en CO2, gemeten als het verschil tussen oorspronkelijk en finaal soortelijk gewicht."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
