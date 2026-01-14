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
      {
        question: {
          en: "What distinguishes a 'Berliner Weisse' from other sour beer styles?",
          es: "¿Qué distingue una 'Berliner Weisse' de otros estilos de cerveza agria?",
          de: "Was unterscheidet eine 'Berliner Weisse' von anderen sauren Bierstilen?",
          nl: "Wat onderscheidt een 'Berliner Weisse' van andere zure bierstijlen?"
        },
        options: [
          { en: "Low alcohol (2.5-3.5% ABV), tart wheat beer, traditionally served with fruit syrups", es: "Bajo alcohol (2.5-3.5% ABV), cerveza de trigo ácida, tradicionalmente servida con jarabes de frutas", de: "Niedriger Alkohol (2.5-3.5% ABV), säuerliches Weizenbier, traditionell mit Fruchtsirupen serviert", nl: "Laag alcohol (2.5-3.5% ABV), zuur tarwebier, traditioneel geserveerd met fruitsiropen" },
          { en: "High alcohol dark beer with chocolate notes", es: "Cerveza oscura de alto alcohol con notas de chocolate", de: "Hochalkoholisches dunkles Bier mit Schokoladennoten", nl: "Hoog alcohol donker bier met chocoladenoten" },
          { en: "Hoppy IPA with citrus flavors", es: "IPA lupulada con sabores cítricos", de: "Hopfiges IPA mit Zitrusaromen", nl: "Hopachtig IPA met citrussmaken" },
          { en: "Barrel-aged strong ale", es: "Ale fuerte envejecida en barrica", de: "Fassgereifte starke Ale", nl: "Vatgerijpt sterk ale" }
        ],
        correct: 0,
        explanation: {
          en: "Berliner Weisse is a low-alcohol, tart, highly carbonated wheat beer from Berlin, traditionally served with woodruff or raspberry syrup to balance its sharp acidity. It's kettle-soured with Lactobacillus before fermentation.",
          es: "Berliner Weisse es una cerveza de trigo ácida, altamente carbonatada y de bajo alcohol de Berlín, tradicionalmente servida con jarabe de aspérula o frambuesa para equilibrar su acidez aguda. Se acidifica en caldera con Lactobacillus antes de la fermentación.",
          de: "Berliner Weisse ist ein säuerliches, stark kohlensäurehaltiges Weizenbier mit niedrigem Alkoholgehalt aus Berlin, traditionell mit Waldmeister- oder Himbeersirup serviert, um seine scharfe Säure auszugleichen. Es wird vor der Gärung im Kessel mit Lactobacillus gesäuert.",
          nl: "Berliner Weisse is een laag-alcohol, zuur, sterk koolzuurhoudend tarwebier uit Berlijn, traditioneel geserveerd met lievevrouwebedstro of frambozensiroop om zijn scherpe zuurheid te balanceren. Het wordt ketel-verzuurd met Lactobacillus voor fermentatie."
        }
      },
      {
        question: {
          en: "What is a 'Hazy IPA' or 'New England IPA' and how does it differ from West Coast IPA?",
          es: "¿Qué es una 'Hazy IPA' o 'New England IPA' y en qué se diferencia de la West Coast IPA?",
          de: "Was ist ein 'Hazy IPA' oder 'New England IPA' und wie unterscheidet es sich von West Coast IPA?",
          nl: "Wat is een 'Hazy IPA' of 'New England IPA' en hoe verschilt het van West Coast IPA?"
        },
        options: [
          { en: "Turbid, juicy, fruit-forward with low bitterness and soft mouthfeel from oats/wheat; less dry than West Coast IPA", es: "Turbia, jugosa, orientada a frutas con baja amargura y sensación en boca suave de avena/trigo; menos seca que West Coast IPA", de: "Trüb, saftig, fruchtbetont mit niedriger Bitterkeit und weichem Mundgefühl durch Hafer/Weizen; weniger trocken als West Coast IPA", nl: "Troebel, sappig, fruit-vooruit met lage bitterheid en zacht mondgevoel van haver/tarwe; minder droog dan West Coast IPA" },
          { en: "Clear, bitter, malt-forward traditional English style", es: "Estilo inglés tradicional claro, amargo, orientado a malta", de: "Klarer, bitterer, malzbetonter traditioneller englischer Stil", nl: "Helder, bitter, mout-vooruit traditionele Engelse stijl" },
          { en: "Dark, roasted, coffee-like imperial stout", es: "Imperial stout oscura, tostada, similar al café", de: "Dunkles, geröstetes, kaffeeähnliches Imperial Stout", nl: "Donker, geroosterd, koffie-achtig imperial stout" },
          { en: "Belgian witbier with spices", es: "Witbier belga con especias", de: "Belgisches Witbier mit Gewürzen", nl: "Belgisch witbier met kruiden" }
        ],
        correct: 0,
        explanation: {
          en: "Hazy/New England IPA emphasizes hop aroma and flavor (tropical fruit, citrus) over bitterness, using late hopping and dry-hopping techniques. Haze comes from suspended yeast/hop particles and proteins from wheat/oats. West Coast IPA is clear, dry, and more bitter with resinous hop character.",
          es: "Hazy/New England IPA enfatiza aroma y sabor de lúpulo (fruta tropical, cítricos) sobre amargura, usando técnicas de lupulado tardío y dry-hopping. La turbidez proviene de partículas suspendidas de levadura/lúpulo y proteínas de trigo/avena. West Coast IPA es clara, seca y más amarga con carácter resinoso de lúpulo.",
          de: "Hazy/New England IPA betont Hopfenaroma und -geschmack (tropische Früchte, Zitrus) über Bitterkeit, unter Verwendung von Späthopfungs- und Trockenhopfungstechniken. Trübung stammt von schwebenden Hefe-/Hopfenpartikeln und Proteinen aus Weizen/Hafer. West Coast IPA ist klar, trocken und bitterer mit harzigem Hopfencharakter.",
          nl: "Hazy/New England IPA benadrukt hoparoma en smaak (tropisch fruit, citrus) boven bitterheid, gebruikmakend van late hoppen en droog-hoppen technieken. Troebeling komt van zwevende gist/hop deeltjes en eiwitten van tarwe/haver. West Coast IPA is helder, droog en bitterder met harsachtig hopkarakter."
        }
      },
      {
        question: {
          en: "What is 'Kveik' yeast and what makes it unique in brewing?",
          es: "¿Qué es la levadura 'Kveik' y qué la hace única en la elaboración?",
          de: "Was ist 'Kveik'-Hefe und was macht sie beim Brauen einzigartig?",
          nl: "Wat is 'Kveik' gist en wat maakt het uniek bij brouwen?"
        },
        options: [
          { en: "Norwegian farmhouse yeast that ferments rapidly at high temperatures (30-40°C) with fruity esters", es: "Levadura noruega de granja que fermenta rápidamente a altas temperaturas (30-40°C) con ésteres afrutados", de: "Norwegische Bauernhofhefe, die schnell bei hohen Temperaturen (30-40°C) mit fruchtigen Estern fermentiert", nl: "Noorse boerderij gist die snel fermenteert bij hoge temperaturen (30-40°C) met fruitige esters" },
          { en: "German lager yeast requiring cold temperatures", es: "Levadura lager alemana que requiere temperaturas frías", de: "Deutsche Lagerhefe, die kalte Temperaturen benötigt", nl: "Duitse lager gist die koude temperaturen vereist" },
          { en: "Belgian wild yeast blend for sour beers", es: "Mezcla de levadura silvestre belga para cervezas agrias", de: "Belgische Wildhefe-Mischung für saure Biere", nl: "Belgisch wilde gist mengsel voor zure bieren" },
          { en: "English ale yeast for traditional bitters", es: "Levadura ale inglesa para bitters tradicionales", de: "Englische Ale-Hefe für traditionelle Bitters", nl: "Engelse ale gist voor traditionele bitters" }
        ],
        correct: 0,
        explanation: {
          en: "Kveik is a traditional Norwegian farmhouse yeast strain that ferments very quickly (24-48 hours) at unusually high temperatures (85-105°F/30-40°C), producing fruity, tropical esters without off-flavors. It's highly alcohol-tolerant and flocculates well, revolutionizing modern brewing practices.",
          es: "Kveik es una cepa tradicional noruega de levadura de granja que fermenta muy rápidamente (24-48 horas) a temperaturas inusualmente altas (85-105°F/30-40°C), produciendo ésteres afrutados y tropicales sin sabores desagradables. Es altamente tolerante al alcohol y flocula bien, revolucionando las prácticas modernas de elaboración.",
          de: "Kveik ist ein traditioneller norwegischer Bauernhof-Hefestamm, der sehr schnell (24-48 Stunden) bei ungewöhnlich hohen Temperaturen (85-105°F/30-40°C) fermentiert und fruchtige, tropische Ester ohne Fehlgeschmäcker produziert. Sie ist hochgradig alkoholtolerant und flockiert gut, revolutioniert moderne Braupraktiken.",
          nl: "Kveik is een traditionele Noorse boerderij giststam die zeer snel (24-48 uur) fermenteert bij ongewoon hoge temperaturen (85-105°F/30-40°C), produceert fruitige, tropische esters zonder bijsmaken. Het is zeer alcoholtolerant en floculeert goed, revolutioneert moderne brouwpraktijken."
        }
      },
      {
        question: {
          en: "What defines a 'Saison' or farmhouse ale?",
          es: "¿Qué define una 'Saison' o ale de granja?",
          de: "Was definiert ein 'Saison' oder Farmhouse Ale?",
          nl: "Wat definieert een 'Saison' of boerderij ale?"
        },
        options: [
          { en: "Highly carbonated, dry, spicy/fruity Belgian farmhouse ale with peppery yeast character, originally brewed seasonally", es: "Ale belga de granja altamente carbonatada, seca, especiada/afrutada con carácter de levadura picante, originalmente elaborada estacionalmente", de: "Stark kohlensäurehaltiges, trockenes, würziges/fruchtiges belgisches Farmhouse Ale mit pfeffrigem Hefecharakter, ursprünglich saisonal gebraut", nl: "Sterk koolzuurhoudend, droog, kruidig/fruitig Belgisch boerderij ale met peperig gistkarakter, oorspronkelijk seizoensgebonden gebrouwen" },
          { en: "German dark lager with roasted malt", es: "Lager oscura alemana con malta tostada", de: "Deutsches dunkles Lager mit Röstmalz", nl: "Duitse donkere lager met geroosterde mout" },
          { en: "English brown ale with caramel sweetness", es: "Brown ale inglesa con dulzura de caramelo", de: "Englisches Brown Ale mit Karamellsüße", nl: "Engels brown ale met karamelzoetheid" },
          { en: "American wheat beer with citrus hops", es: "Cerveza de trigo americana con lúpulos cítricos", de: "Amerikanisches Weizenbier mit Zitrushopfen", nl: "Amerikaans tarwebier met citrushop" }
        ],
        correct: 0,
        explanation: {
          en: "Saison is a Belgian farmhouse ale traditionally brewed in winter for summer consumption by farmworkers. It's characterized by high carbonation, dry finish, fruity/spicy esters and phenols from Saison yeast, often with peppery, earthy notes. Modern versions range from 5-7% ABV with complex, refreshing character.",
          es: "Saison es un ale belga de granja tradicionalmente elaborado en invierno para consumo de verano por trabajadores agrícolas. Se caracteriza por alta carbonatación, final seco, ésteres y fenoles afrutados/especiados de levadura Saison, a menudo con notas picantes y terrosas. Las versiones modernas varían de 5-7% ABV con carácter complejo y refrescante.",
          de: "Saison ist ein belgisches Farmhouse Ale, das traditionell im Winter für den Sommerkonsum durch Landarbeiter gebraut wurde. Es zeichnet sich durch hohe Kohlensäure, trockenen Abgang, fruchtige/würzige Ester und Phenole von Saison-Hefe aus, oft mit pfeffrigen, erdigen Noten. Moderne Versionen reichen von 5-7% ABV mit komplexem, erfrischendem Charakter.",
          nl: "Saison is een Belgisch boerderij ale traditioneel gebrouwen in winter voor zomerconsumptie door boerderijarbeiders. Het wordt gekenmerkt door hoge koolzuur, droge afdronk, fruitige/kruidige esters en fenolen van Saison gist, vaak met peperige, aardse noten. Moderne versies variëren van 5-7% ABV met complex, verfrissend karakter."
        }
      },
      {
        question: {
          en: "What is 'Eisbock' and how is it made?",
          es: "¿Qué es 'Eisbock' y cómo se hace?",
          de: "Was ist 'Eisbock' und wie wird es hergestellt?",
          nl: "Wat is 'Eisbock' en hoe wordt het gemaakt?"
        },
        options: [
          { en: "Strong German bock made by freeze-concentrating traditional bock, removing ice to increase alcohol and flavor intensity", es: "Bock alemán fuerte hecho concentrando por congelación bock tradicional, removiendo hielo para aumentar alcohol e intensidad de sabor", de: "Starkes deutsches Bock durch Gefrierkonzentrierung von traditionellem Bock hergestellt, Eis entfernen um Alkohol und Geschmacksintensität zu erhöhen", nl: "Sterk Duits bock gemaakt door vries-concentreren van traditioneel bock, ijs verwijderen om alcohol en smaakintensiteit te verhogen" },
          { en: "Light summer wheat beer with ice cubes", es: "Cerveza de trigo ligera de verano con cubitos de hielo", de: "Leichtes Sommer-Weizenbier mit Eiswürfeln", nl: "Licht zomer tarwebier met ijsblokjes" },
          { en: "Sour beer aged in frozen barrels", es: "Cerveza agria envejecida en barriles congelados", de: "Saures Bier in gefrorenen Fässern gereift", nl: "Zuur bier gerijpt in bevroren vaten" },
          { en: "Belgian tripel served at freezing temperature", es: "Tripel belga servida a temperatura de congelación", de: "Belgisches Tripel bei Gefriertemperatur serviert", nl: "Belgische tripel geserveerd bij vriestemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Eisbock is made by partially freezing traditional Bock or Doppelbock beer and removing ice crystals. Since water freezes before alcohol, this concentrates alcohol (9-14% ABV), malt flavors, and body, creating an intensely rich, smooth strong lager with caramel, toffee, and dark fruit notes.",
          es: "Eisbock se hace congelando parcialmente cerveza Bock o Doppelbock tradicional y removiendo cristales de hielo. Dado que el agua se congela antes que el alcohol, esto concentra alcohol (9-14% ABV), sabores de malta y cuerpo, creando un lager fuerte intensamente rico y suave con notas de caramelo, toffee y frutas oscuras.",
          de: "Eisbock wird hergestellt, indem traditionelles Bock oder Doppelbock teilweise eingefroren und Eiskristalle entfernt werden. Da Wasser vor Alkohol gefriert, konzentriert dies Alkohol (9-14% ABV), Malzaromen und Körper, wodurch ein intensiv reiches, geschmeidiges starkes Lager mit Karamell-, Toffee- und dunklen Fruchtnoten entsteht.",
          nl: "Eisbock wordt gemaakt door traditioneel Bock of Doppelbock gedeeltelijk te bevriezen en ijskristallen te verwijderen. Omdat water voor alcohol bevriest, concentreert dit alcohol (9-14% ABV), moutsm aken en body, creërend een intens rijk, glad sterk lager met karamel, toffee en donkere vrucht noten."
        }
      },
      {
        question: {
          en: "What is a 'Dunkelweizen' and how does it differ from Hefeweizen?",
          es: "¿Qué es una 'Dunkelweizen' y en qué se diferencia de Hefeweizen?",
          de: "Was ist ein 'Dunkelweizen' und wie unterscheidet es sich von Hefeweizen?",
          nl: "Wat is een 'Dunkelweizen' en hoe verschilt het van Hefeweizen?"
        },
        options: [
          { en: "Dark wheat beer with Munich/Vienna malts adding caramel, bread crust notes while maintaining banana/clove yeast character", es: "Cerveza de trigo oscura con maltas Munich/Vienna añadiendo caramelo, notas de corteza de pan mientras mantiene carácter de levadura de plátano/clavo", de: "Dunkles Weizenbier mit Munich/Vienna-Malzen, die Karamell-, Brotkrustennoten hinzufügen, während Bananen-/Nelken-Hefecharakter beibehalten wird", nl: "Donker tarwebier met Munich/Vienna mouten toevoegend karamel, broodkorst noten terwijl banaan/kruidnagel gistkarakter behouden blijft" },
          { en: "Pale wheat beer without yeast character", es: "Cerveza de trigo pálida sin carácter de levadura", de: "Helles Weizenbier ohne Hefecharakter", nl: "Bleek tarwebier zonder gistkarakter" },
          { en: "Filtered dark lager from Bavaria", es: "Lager oscura filtrada de Bavaria", de: "Gefiltertes dunkles Lager aus Bayern", nl: "Gefilterde donkere lager uit Beieren" },
          { en: "Smoked wheat beer from Bamberg", es: "Cerveza de trigo ahumada de Bamberg", de: "Geräuchertes Weizenbier aus Bamberg", nl: "Gerookt tarwebier uit Bamberg" }
        ],
        correct: 0,
        explanation: {
          en: "Dunkelweizen is a dark German wheat beer using darker Munich and/or Vienna malts alongside wheat malt, adding bread, caramel, and toasty notes to the classic banana and clove phenolic character of Hefeweizen yeast. It maintains the cloudy appearance and high carbonation of traditional Hefeweizen but with richer malt complexity.",
          es: "Dunkelweizen es una cerveza de trigo alemana oscura que usa maltas Munich y/o Vienna más oscuras junto con malta de trigo, agregando pan, caramelo y notas tostadas al carácter fenólico clásico de plátano y clavo de la levadura Hefeweizen. Mantiene la apariencia turbia y alta carbonatación del Hefeweizen tradicional pero con mayor complejidad de malta.",
          de: "Dunkelweizen ist ein dunkles deutsches Weizenbier, das dunklere Munich- und/oder Vienna-Malze neben Weizenmalz verwendet und Brot-, Karamell- und Röstnoten zum klassischen Bananen- und Nelken-Phenolcharakter der Hefeweizen-Hefe hinzufügt. Es behält das trübe Aussehen und die hohe Kohlensäure des traditionellen Hefeweizen bei, aber mit reicherer Malzkomplexität.",
          nl: "Dunkelweizen is een donker Duits tarwebier dat donkerdere Munich en/of Vienna mouten gebruikt naast tarwemout, toevoegend brood, karamel en geroosterde noten aan het klassieke banaan en kruidnagel fenolisch karakter van Hefeweizen gist. Het behoudt het troebele uiterlijk en hoge koolzuur van traditioneel Hefeweizen maar met rijkere mout complexiteit."
        }
      },
      {
        question: {
          en: "What is a 'Barleywine' and what are its characteristics?",
          es: "¿Qué es un 'Barleywine' y cuáles son sus características?",
          de: "Was ist ein 'Barleywine' und was sind seine Eigenschaften?",
          nl: "Wat is een 'Barleywine' en wat zijn de kenmerken?"
        },
        options: [
          { en: "Very strong ale (8-12% ABV) with rich malt, toffee, dried fruit, complex aging potential, can be English or American style", es: "Ale muy fuerte (8-12% ABV) con malta rica, toffee, fruta seca, potencial de envejecimiento complejo, puede ser estilo inglés o americano", de: "Sehr starkes Ale (8-12% ABV) mit reichem Malz, Toffee, Trockenfrüchten, komplexem Alterungspotenzial, kann englischer oder amerikanischer Stil sein", nl: "Zeer sterk ale (8-12% ABV) met rijke mout, toffee, gedroogd fruit, complex verouderingspotentieel, kan Engelse of Amerikaanse stijl zijn" },
          { en: "Light wheat beer with citrus flavors", es: "Cerveza de trigo ligera con sabores cítricos", de: "Leichtes Weizenbier mit Zitrusaromen", nl: "Licht tarwebier met citrussmaken" },
          { en: "German pilsner with barley only", es: "Pilsner alemana solo con cebada", de: "Deutsche Pilsner nur mit Gerste", nl: "Duitse pilsner alleen met gerst" },
          { en: "Belgian sour ale with wild yeast", es: "Ale agria belga con levadura silvestre", de: "Belgisches saures Ale mit Wildhefe", nl: "Belgisch zuur ale met wilde gist" }
        ],
        correct: 0,
        explanation: {
          en: "Barleywine is one of the strongest ale styles (8-12%+ ABV), richly malty with toffee, caramel, dried fruit flavors. English versions emphasize malt with moderate hops; American versions feature bold hop bitterness and citrus/pine notes. Both age beautifully, developing sherry-like oxidative complexity over years. The name reflects its wine-like strength.",
          es: "Barleywine es uno de los estilos de ale más fuertes (8-12%+ ABV), ricamente malteado con sabores de toffee, caramelo, frutas secas. Las versiones inglesas enfatizan malta con lúpulos moderados; las versiones americanas presentan amargor audaz de lúpulo y notas cítricas/de pino. Ambas envejecen hermosamente, desarrollando complejidad oxidativa similar al jerez con los años. El nombre refleja su fuerza similar al vino.",
          de: "Barleywine ist einer der stärksten Ale-Stile (8-12%+ ABV), reichhaltig malzig mit Toffee-, Karamell-, Trockenfrüchte-Aromen. Englische Versionen betonen Malz mit mäßigem Hopfen; amerikanische Versionen bieten kräftige Hopfenbitterkeit und Zitrus-/Kiefernnoten. Beide altern wunderschön und entwickeln sherryähnliche oxidative Komplexität über Jahre. Der Name spiegelt seine weinähnliche Stärke wider.",
          nl: "Barleywine is een van de sterkste ale stijlen (8-12%+ ABV), rijk moutig met toffee, karamel, gedroogd fruit smaken. Engelse versies benadrukken mout met gematigde hop; Amerikaanse versies hebben gedurfde hopbitterheid en citrus/dennenhars noten. Beide verouderen prachtig, ontwikkelen sherry-achtige oxidatieve complexiteit over jaren. De naam weerspiegelt zijn wijn-achtige sterkte."
        }
      },
      {
        question: {
          en: "What is a 'Flanders Red Ale' and what creates its distinctive character?",
          es: "¿Qué es una 'Flanders Red Ale' y qué crea su carácter distintivo?",
          de: "Was ist ein 'Flanders Red Ale' und was erzeugt seinen charakteristischen Charakter?",
          nl: "Wat is een 'Flanders Red Ale' en wat creëert zijn onderscheidend karakter?"
        },
        options: [
          { en: "Belgian sour red-brown ale aged in oak with Lactobacillus/Acetobacter creating tart, fruity, wine-like complexity", es: "Ale agria belga rojo-marrón envejecida en roble con Lactobacillus/Acetobacter creando complejidad ácida, afrutada, similar al vino", de: "Belgisches saures rotbraunes Ale in Eiche gereift mit Lactobacillus/Acetobacter, erzeugt säuerliche, fruchtige, weinähnliche Komplexität", nl: "Belgisch zuur rood-bruin ale gerijpt in eiken met Lactobacillus/Acetobacter creërend zure, fruitige, wijn-achtige complexiteit" },
          { en: "American red IPA with cascade hops", es: "IPA roja americana con lúpulos cascade", de: "Amerikanisches rotes IPA mit Cascade-Hopfen", nl: "Amerikaans rood IPA met cascade hop" },
          { en: "German amber lager with toasted malt", es: "Lager ámbar alemana con malta tostada", de: "Deutsches Amber Lager mit geröstetem Malz", nl: "Duitse amber lager met geroosterde mout" },
          { en: "English bitter with red coloring", es: "Bitter inglesa con coloración roja", de: "Englisches Bitter mit roter Färbung", nl: "Engelse bitter met rode kleuring" }
        ],
        correct: 0,
        explanation: {
          en: "Flanders Red Ale is a Belgian sour ale aged in oak barrels (often 18-24 months) where Lactobacillus bacteria and Acetobacter create complex tartness. The result is reddish-brown with fruity (cherry, plum), vinous, oaky character balanced by malt sweetness. Young and old batches are often blended for consistency.",
          es: "Flanders Red Ale es un ale agria belga envejecida en barricas de roble (a menudo 18-24 meses) donde bacterias Lactobacillus y Acetobacter crean acidez compleja. El resultado es rojo-marrón con carácter afrutado (cereza, ciruela), vinoso, de roble equilibrado por dulzura de malta. Los lotes jóvenes y viejos a menudo se mezclan para consistencia.",
          de: "Flanders Red Ale ist ein belgisches saures Ale, das in Eichenfässern (oft 18-24 Monate) gereift wird, wo Lactobacillus-Bakterien und Acetobacter komplexe Säure erzeugen. Das Ergebnis ist rotbraun mit fruchtigem (Kirsche, Pflaume), weinigem, eichigem Charakter, ausgeglichen durch Malzsüße. Junge und alte Chargen werden oft für Konsistenz gemischt.",
          nl: "Flanders Red Ale is een Belgisch zuur ale gerijpt in eiken vaten (vaak 18-24 maanden) waar Lactobacillus bacteriën en Acetobacter complexe zuurheid creëren. Het resultaat is roodbruin met fruitig (kers, pruim), wijnachtig, eiken karakter gebalanceerd door moutzoetheid. Jonge en oude batches worden vaak gemengd voor consistentie."
        }
      },
      {
        question: {
          en: "What is 'Doppelbock' and what distinguishes it from regular Bock?",
          es: "¿Qué es 'Doppelbock' y qué lo distingue del Bock regular?",
          de: "Was ist 'Doppelbock' und was unterscheidet es von normalem Bock?",
          nl: "Wat is 'Doppelbock' en wat onderscheidt het van gewoon Bock?"
        },
        options: [
          { en: "Stronger Bavarian lager (7-10% ABV) with intense malty sweetness, traditionally ending in '-ator', darker and richer than Bock", es: "Lager bávara más fuerte (7-10% ABV) con intensa dulzura malteada, tradicionalmente terminando en '-ator', más oscura y rica que Bock", de: "Stärkeres bayrisches Lager (7-10% ABV) mit intensiver Malzsüße, traditionell endend auf '-ator', dunkler und reicher als Bock", nl: "Sterker Beierse lager (7-10% ABV) met intense moutige zoetheid, traditioneel eindigend op '-ator', donkerder en rijker dan Bock" },
          { en: "Two bocks blended together", es: "Dos bocks mezclados juntos", de: "Zwei Bocks zusammengemischt", nl: "Twee bocks gemengd samen" },
          { en: "Belgian double IPA", es: "IPA doble belga", de: "Belgisches Doppel-IPA", nl: "Belgisch dubbel IPA" },
          { en: "English porter brewed twice", es: "Porter inglés elaborado dos veces", de: "Englisches Porter zweimal gebraut", nl: "Engels porter twee keer gebrouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Doppelbock ('double bock') is a stronger, richer version of traditional Bock, ranging 7-10% ABV. Developed by Paulaner monks in Munich, names traditionally end in '-ator' (Celebrator, Salvator). It features deep maltiness with bread, caramel, toffee, dark fruit notes, minimal hop bitterness, and smooth warming alcohol.",
          es: "Doppelbock ('bock doble') es una versión más fuerte y rica del Bock tradicional, variando de 7-10% ABV. Desarrollado por monjes Paulaner en Múnich, los nombres tradicionalmente terminan en '-ator' (Celebrator, Salvator). Presenta profunda malta con pan, caramelo, toffee, notas de frutas oscuras, mínimo amargor de lúpulo y alcohol cálido suave.",
          de: "Doppelbock ('Doppel-Bock') ist eine stärkere, reichere Version des traditionellen Bocks, 7-10% ABV. Von Paulaner-Mönchen in München entwickelt, enden Namen traditionell auf '-ator' (Celebrator, Salvator). Es bietet tiefe Malzigkeit mit Brot, Karamell, Toffee, dunklen Fruchtnoten, minimaler Hopfenbitterkeit und geschmeidigem wärmendem Alkohol.",
          nl: "Doppelbock ('dubbel bock') is een sterkere, rijkere versie van traditioneel Bock, variërend 7-10% ABV. Ontwikkeld door Paulaner monniken in München, namen eindigen traditioneel op '-ator' (Celebrator, Salvator). Het heeft diepe moutigheid met brood, karamel, toffee, donkere vrucht noten, minimale hopbitterheid en gladde verwarmende alcohol."
        }
      },
      {
        question: {
          en: "What is a 'Märzen' or Oktoberfest beer?",
          es: "¿Qué es una cerveza 'Märzen' u Oktoberfest?",
          de: "Was ist ein 'Märzen' oder Oktoberfestbier?",
          nl: "Wat is een 'Märzen' of Oktoberfest bier?"
        },
        options: [
          { en: "Amber German lager brewed in March, lagered through summer, served at Oktoberfest with toasty, malty character", es: "Lager alemana ámbar elaborada en marzo, lagerada durante el verano, servida en Oktoberfest con carácter tostado y malteado", de: "Bernsteinfarbenes deutsches Lager im März gebraut, über Sommer gelagert, beim Oktoberfest serviert mit röstigem, malzigem Charakter", nl: "Amber Duitse lager gebrouwen in maart, gelagerd door zomer, geserveerd op Oktoberfest met geroosterd, moutig karakter" },
          { en: "Belgian wheat beer with spices", es: "Cerveza de trigo belga con especias", de: "Belgisches Weizenbier mit Gewürzen", nl: "Belgisch tarwebier met kruiden" },
          { en: "American IPA brewed in fall", es: "IPA americana elaborada en otoño", de: "Amerikanisches IPA im Herbst gebraut", nl: "Amerikaans IPA gebrouwen in herfst" },
          { en: "English porter for winter festivals", es: "Porter inglés para festivales de invierno", de: "Englisches Porter für Winterfeste", nl: "Engels porter voor winterfestivals" }
        ],
        correct: 0,
        explanation: {
          en: "Märzen (March beer) is a traditional Bavarian lager brewed in March before summer heat made brewing risky, then lagered in cool caves through summer for October consumption. It's amber-colored (Vienna/Munich malts) with rich, toasty, bread-like maltiness, medium body, clean finish, and 5.5-6% ABV. Modern Oktoberfest beers follow this style.",
          es: "Märzen (cerveza de marzo) es un lager bávaro tradicional elaborado en marzo antes de que el calor del verano hiciera arriesgado elaborar, luego lagerado en cuevas frescas durante el verano para consumo de octubre. Es de color ámbar (maltas Vienna/Munich) con rica malta tostada similar al pan, cuerpo medio, final limpio y 5.5-6% ABV. Las cervezas modernas de Oktoberfest siguen este estilo.",
          de: "Märzen (Märzenbier) ist ein traditionelles bayrisches Lager, das im März vor der Sommerhitze gebraut wurde, die das Brauen riskant machte, dann über Sommer in kühlen Höhlen für den Oktoberkonsum gelagert. Es ist bernsteinfarben (Vienna/Munich-Malze) mit reicher, röstiger, brotartiger Malzigkeit, mittlerem Körper, sauberem Abgang und 5.5-6% ABV. Moderne Oktoberfestbiere folgen diesem Stil.",
          nl: "Märzen (maart bier) is een traditioneel Beierse lager gebrouwen in maart voordat zomerhitte brouwen risicovol maakte, dan gelagerd in koele grotten door zomer voor oktober consumptie. Het is amber-gekleurd (Vienna/Munich mouten) met rijke, geroosterde, broodachtige moutigheid, medium body, schone afdronk en 5.5-6% ABV. Moderne Oktoberfest bieren volgen deze stijl."
        }
      },
      {
        question: {
          en: "What is 'Altbier' and where does it originate?",
          es: "¿Qué es 'Altbier' y de dónde se origina?",
          de: "Was ist 'Altbier' und wo kommt es her?",
          nl: "Wat is 'Altbier' en waar komt het vandaan?"
        },
        options: [
          { en: "German 'old beer' top-fermented ale from Düsseldorf, copper-colored with balanced malt and noble hop bitterness, lagered cold", es: "Ale alemana de fermentación alta 'cerveza vieja' de Düsseldorf, color cobre con malta equilibrada y amargor de lúpulo noble, lagerada en frío", de: "'Altes Bier' obergäriges Ale aus Düsseldorf, kupferfarben mit ausgewogenem Malz und Edelhopfenbitterkeit, kalt gelagert", nl: "Duits 'oud bier' bovengegist ale uit Düsseldorf, koperkleurig met gebalanceerde mout en edele hop bitterheid, koud gelagerd" },
          { en: "Aged Belgian lambic over 5 years old", es: "Lambic belga envejecida de más de 5 años", de: "Gereiftes belgisches Lambic über 5 Jahre alt", nl: "Gerijpt Belgisch lambic ouder dan 5 jaar" },
          { en: "English old ale brewed in medieval times", es: "Old ale inglés elaborado en tiempos medievales", de: "Englisches Old Ale aus mittelalterlichen Zeiten gebraut", nl: "Engels old ale gebrouwen in middeleeuwen" },
          { en: "American barrel-aged vintage beer", es: "Cerveza vintage americana envejecida en barrica", de: "Amerikanisches fassgereiftes Vintage-Bier", nl: "Amerikaans vatgerijpt vintage bier" }
        ],
        correct: 0,
        explanation: {
          en: "Altbier ('old beer') from Düsseldorf represents the 'old' style of top-fermented brewing before bottom-fermented lagers dominated Germany. It's a copper-brown ale fermented warm like ales but then cold-conditioned like lagers, creating a clean, balanced beer with moderate maltiness, noble hop bitterness, and smooth finish (4.5-5.5% ABV).",
          es: "Altbier ('cerveza vieja') de Düsseldorf representa el estilo 'viejo' de elaboración de fermentación alta antes de que las lagers de fermentación baja dominaran Alemania. Es un ale marrón cobrizo fermentado cálido como ales pero luego acondicionado en frío como lagers, creando una cerveza limpia y equilibrada con malta moderada, amargor de lúpulo noble y final suave (4.5-5.5% ABV).",
          de: "Altbier ('altes Bier') aus Düsseldorf repräsentiert den 'alten' Stil des obergärigen Brauens, bevor untergärige Lager Deutschland dominierten. Es ist ein kupferbraunes Ale, warm wie Ales fermentiert, aber dann kalt konditioniert wie Lager, erzeugt ein sauberes, ausgewogenes Bier mit mäßiger Malzigkeit, Edelhopfenbitterkeit und geschmeidigem Abgang (4.5-5.5% ABV).",
          nl: "Altbier ('oud bier') uit Düsseldorf vertegenwoordigt de 'oude' stijl van bovengegist brouwen voordat ondergegiste lagers Duitsland domineerden. Het is een koperbruin ale gefermenteerd warm zoals ales maar dan koud geconditioneerd zoals lagers, creërend een schoon, gebalanceerd bier met gematigde moutigheid, edele hop bitterheid en gladde afdronk (4.5-5.5% ABV)."
        }
      },
      {
        question: {
          en: "What is a 'Schwarzbier' (black beer)?",
          es: "¿Qué es una 'Schwarzbier' (cerveza negra)?",
          de: "Was ist ein 'Schwarzbier'?",
          nl: "Wat is een 'Schwarzbier' (zwart bier)?"
        },
        options: [
          { en: "German dark lager with roasted malt color but clean, smooth flavor without heavy roastiness, contrary to its dark appearance", es: "Lager oscura alemana con color de malta tostada pero sabor limpio y suave sin tostado pesado, contrario a su apariencia oscura", de: "Deutsches dunkles Lager mit Röstmalzfarbe aber sauberem, geschmeidigem Geschmack ohne schwere Röstigkeit, entgegen seinem dunklen Aussehen", nl: "Duits donker lager met geroosterde moutkleur maar schone, gladde smaak zonder zware geroostheid, tegengesteld aan zijn donkere uiterlijk" },
          { en: "Belgian stout with chocolate flavors", es: "Stout belga con sabores de chocolate", de: "Belgisches Stout mit Schokoladenaromen", nl: "Belgisch stout met chocoladesmaken" },
          { en: "American black IPA with heavy hops", es: "IPA negra americana con lúpulos pesados", de: "Amerikanisches schwarzes IPA mit schwerem Hopfen", nl: "Amerikaans zwart IPA met zware hop" },
          { en: "English porter with coffee notes", es: "Porter inglés con notas de café", de: "Englisches Porter mit Kaffeenoten", nl: "Engels porter met koffie noten" }
        ],
        correct: 0,
        explanation: {
          en: "Schwarzbier is a traditional German dark lager (4.5-5.5% ABV) that despite its opaque black color from dehusked roasted malts, has a surprisingly clean, smooth, and drinkable character without heavy roastiness or bitterness. It features subtle chocolate, coffee, or bread notes with a dry finish, showcasing German lager brewing precision.",
          es: "Schwarzbier es un lager oscuro alemán tradicional (4.5-5.5% ABV) que a pesar de su color negro opaco de maltas tostadas sin cáscara, tiene un carácter sorprendentemente limpio, suave y bebible sin tostado pesado o amargor. Presenta notas sutiles de chocolate, café o pan con final seco, mostrando precisión de elaboración de lager alemana.",
          de: "Schwarzbier ist ein traditionelles deutsches dunkles Lager (4.5-5.5% ABV), das trotz seiner opak schwarzen Farbe von enthülsten Röstmalzen einen überraschend sauberen, geschmeidigen und trinkbaren Charakter ohne schwere Röstigkeit oder Bitterkeit hat. Es bietet subtile Schokoladen-, Kaffee- oder Brotnoten mit trockenem Abgang, zeigt deutsche Lagerbrau-Präzision.",
          nl: "Schwarzbier is een traditioneel Duits donker lager (4.5-5.5% ABV) dat ondanks zijn ondoorzichtige zwarte kleur van gedopte geroosterde mouten, een verrassend schoon, glad en drinkbaar karakter heeft zonder zware geroostheid of bitterheid. Het heeft subtiele chocolade, koffie of brood noten met droge afdronk, toont Duitse lager brouw precisie."
        }
      },
      {
        question: {
          en: "What is a 'Kölsch' beer and what are its defining characteristics?",
          es: "¿Qué es una cerveza 'Kölsch' y cuáles son sus características definitorias?",
          de: "Was ist ein 'Kölsch'-Bier und was sind seine definierenden Eigenschaften?",
          nl: "Wat is een 'Kölsch' bier en wat zijn de bepalende kenmerken?"
        },
        options: [
          { en: "Protected designation German pale ale from Cologne, top-fermented but cold-conditioned, delicate, crisp, subtly fruity", es: "Designación protegida ale pálida alemana de Colonia, fermentación alta pero acondicionada en frío, delicada, crujiente, sutilmente afrutada", de: "Geschützte Bezeichnung deutsches Pale Ale aus Köln, obergärig aber kalt konditioniert, zart, knackig, subtil fruchtig", nl: "Beschermde aanduiding Duits bleek ale uit Keulen, bovengegist maar koud geconditioneerd, delicaat, knapperig, subtiel fruitig" },
          { en: "Belgian witbier with coriander spicing", es: "Witbier belga con especiado de cilantro", de: "Belgisches Witbier mit Korianderwürzung", nl: "Belgisch witbier met koriander kruiden" },
          { en: "Dark German bock from Munich", es: "Bock oscuro alemán de Múnich", de: "Dunkles deutsches Bock aus München", nl: "Donker Duits bock uit München" },
          { en: "American wheat beer with citrus hops", es: "Cerveza de trigo americana con lúpulos cítricos", de: "Amerikanisches Weizenbier mit Zitrushopfen", nl: "Amerikaans tarwebier met citrushop" }
        },
        correct: 0,
        explanation: {
          en: "Kölsch is a protected geographical indication beer style from Cologne, Germany. It's a hybrid: top-fermented like ales but cold-conditioned like lagers, resulting in a delicate, crisp, clean pale beer (4.5-5% ABV) with subtle fruitiness, light hop bitterness, and exceptional drinkability. Traditionally served in 200ml cylindrical glasses (Stangen).",
          es: "Kölsch es un estilo de cerveza de indicación geográfica protegida de Colonia, Alemania. Es un híbrido: fermentación alta como ales pero acondicionado en frío como lagers, resultando en una cerveza pálida delicada, crujiente y limpia (4.5-5% ABV) con frutosidad sutil, amargor ligero de lúpulo y excepcional bebibilidad. Tradicionalmente servida en vasos cilíndricos de 200ml (Stangen).",
          de: "Kölsch ist ein geschützter geografischer Herkunftsbezeichnung Bierstil aus Köln, Deutschland. Es ist ein Hybrid: obergärig wie Ales aber kalt konditioniert wie Lager, resultiert in einem zarten, knackigen, sauberen hellen Bier (4.5-5% ABV) mit subtiler Fruchtigkeit, leichter Hopfenbitterkeit und außergewöhnlicher Trinkbarkeit. Traditionell in 200ml zylindrischen Gläsern (Stangen) serviert.",
          nl: "Kölsch is een beschermde geografische aanduiding bierstijl uit Keulen, Duitsland. Het is een hybride: bovengegist zoals ales maar koud geconditioneerd zoals lagers, resulterend in een delicaat, knapperig, schoon bleek bier (4.5-5% ABV) met subtiele fruitigheid, lichte hopbitterheid en uitzonderlijke drinkbaarheid. Traditioneel geserveerd in 200ml cilindrische glazen (Stangen)."
        }
      },
      {
        question: {
          en: "What is a 'Milk Stout' or 'Sweet Stout' and what ingredient creates its character?",
          es: "¿Qué es una 'Milk Stout' o 'Sweet Stout' y qué ingrediente crea su carácter?",
          de: "Was ist ein 'Milk Stout' oder 'Sweet Stout' und welche Zutat erzeugt seinen Charakter?",
          nl: "Wat is een 'Milk Stout' of 'Sweet Stout' en welk ingrediënt creëert zijn karakter?"
        },
        options: [
          { en: "Stout brewed with lactose (milk sugar) that yeast can't ferment, adding body and residual sweetness", es: "Stout elaborada con lactosa (azúcar de leche) que la levadura no puede fermentar, agregando cuerpo y dulzura residual", de: "Stout mit Laktose (Milchzucker) gebraut, die Hefe nicht fermentieren kann, fügt Körper und Restsüße hinzu", nl: "Stout gebrouwen met lactose (melksuiker) die gist niet kan fermenteren, toevoegt body en resterende zoetheid" },
          { en: "Stout mixed with actual milk before serving", es: "Stout mezclada con leche real antes de servir", de: "Stout vor dem Servieren mit echter Milch gemischt", nl: "Stout gemengd met echte melk voor serveren" },
          { en: "White-colored stout made from milk proteins", es: "Stout de color blanco hecha de proteínas de leche", de: "Weißfarbenes Stout aus Milchproteinen hergestellt", nl: "Wit-gekleurde stout gemaakt van melkeiwitten" },
          { en: "Stout fermented with dairy-based yeast", es: "Stout fermentada con levadura de lácteos", de: "Stout mit milchbasierter Hefe fermentiert", nl: "Stout gefermenteerd met zuivel-gebaseerde gist" }
        },
        correct: 0,
        explanation: {
          en: "Milk Stout contains lactose (milk sugar), which brewing yeast cannot ferment. This unfermentable sugar adds body, creaminess, and residual sweetness that balances the roasted malt bitterness. The result is a smooth, slightly sweet dark beer (4-6% ABV) with coffee, chocolate notes and a silky mouthfeel. Despite the name, it contains no actual milk.",
          es: "Milk Stout contiene lactosa (azúcar de leche), que la levadura cervecera no puede fermentar. Este azúcar no fermentable agrega cuerpo, cremosidad y dulzura residual que equilibra el amargor de malta tostada. El resultado es una cerveza oscura suave y ligeramente dulce (4-6% ABV) con notas de café, chocolate y sensación sedosa en boca. A pesar del nombre, no contiene leche real.",
          de: "Milk Stout enthält Laktose (Milchzucker), die Brauhefe nicht fermentieren kann. Dieser nicht fermentierbare Zucker fügt Körper, Cremigkeit und Restsüße hinzu, die die Röstmalzbitterkeit ausgleicht. Das Ergebnis ist ein geschmeidiges, leicht süßes dunkles Bier (4-6% ABV) mit Kaffee-, Schokoladennoten und seidigem Mundgefühl. Trotz des Namens enthält es keine echte Milch.",
          nl: "Milk Stout bevat lactose (melksuiker), die brouwgist niet kan fermenteren. Deze niet-fermenteerbare suiker voegt body, romigheid en resterende zoetheid toe die de geroosterde moutbitterheid balanceert. Het resultaat is een glad, licht zoet donker bier (4-6% ABV) met koffie, chocolade noten en zijdeachtig mondgevoel. Ondanks de naam bevat het geen echte melk."
        }
      },
      {
        question: {
          en: "What is an 'Imperial' or 'Double' beer style designation?",
          es: "¿Qué es una designación de estilo de cerveza 'Imperial' o 'Doble'?",
          de: "Was ist eine 'Imperial'- oder 'Doppel'-Bierstilbezeichnung?",
          nl: "Wat is een 'Imperial' of 'Dubbel' bierstijl aanduiding?"
        },
        options: [
          { en: "Stronger, more intense version of a base style (e.g., Imperial Stout, Double IPA) with higher alcohol and amplified characteristics", es: "Versión más fuerte e intensa de un estilo base (p.ej., Imperial Stout, Double IPA) con mayor alcohol y características amplificadas", de: "Stärkere, intensivere Version eines Basisstils (z.B. Imperial Stout, Double IPA) mit höherem Alkohol und verstärkten Eigenschaften", nl: "Sterkere, meer intense versie van een basisstijl (bijv. Imperial Stout, Double IPA) met hoger alcohol en versterkte kenmerken" },
          { en: "Beer brewed for royal families only", es: "Cerveza elaborada solo para familias reales", de: "Bier nur für Königsfamilien gebraut", nl: "Bier alleen gebrouwen voor koninklijke families" },
          { en: "Two different beers blended together", es: "Dos cervezas diferentes mezcladas juntas", de: "Zwei verschiedene Biere zusammengemischt", nl: "Twee verschillende bieren gemengd samen" },
          { en: "Beer served in imperial measurement units", es: "Cerveza servida en unidades de medida imperiales", de: "Bier in imperialen Maßeinheiten serviert", nl: "Bier geserveerd in imperiale meeteenheden" }
        },
        correct: 0,
        explanation: {
          en: "'Imperial' or 'Double' indicates a stronger, more intense version of a base style. Imperial Stout (8-12% ABV) is richer than regular stout; Double/Imperial IPA (7.5-10%+ ABV) has more hops and alcohol than standard IPA. The term originated with Imperial Stout brewed extra-strong for Russian Imperial court in the 18th century.",
          es: "'Imperial' o 'Doble' indica una versión más fuerte e intensa de un estilo base. Imperial Stout (8-12% ABV) es más rica que stout regular; Double/Imperial IPA (7.5-10%+ ABV) tiene más lúpulos y alcohol que IPA estándar. El término se originó con Imperial Stout elaborada extra fuerte para la corte imperial rusa en el siglo XVIII.",
          de: "'Imperial' oder 'Doppel' zeigt eine stärkere, intensivere Version eines Basisstils an. Imperial Stout (8-12% ABV) ist reicher als normales Stout; Double/Imperial IPA (7.5-10%+ ABV) hat mehr Hopfen und Alkohol als Standard-IPA. Der Begriff entstand mit Imperial Stout, das im 18. Jahrhundert extra stark für den russischen Kaiserhof gebraut wurde.",
          nl: "'Imperial' of 'Dubbel' geeft een sterkere, meer intense versie van een basisstijl aan. Imperial Stout (8-12% ABV) is rijker dan gewoon stout; Double/Imperial IPA (7.5-10%+ ABV) heeft meer hop en alcohol dan standaard IPA. De term ontstond met Imperial Stout gebrouwen extra sterk voor Russisch keizerlijk hof in 18e eeuw."
        }
      },
      {
        question: {
          en: "What is a 'Gruit' or 'Grut' beer?",
          es: "¿Qué es una cerveza 'Gruit' o 'Grut'?",
          de: "Was ist ein 'Gruit' oder 'Grut'-Bier?",
          nl: "Wat is een 'Gruit' of 'Grut' bier?"
        },
        options: [
          { en: "Medieval beer bittered/flavored with herbs (yarrow, bog myrtle, heather) instead of hops, predating hop usage", es: "Cerveza medieval amargada/aromatizada con hierbas (milenrama, mirto de pantano, brezo) en lugar de lúpulo, anterior al uso de lúpulo", de: "Mittelalterliches Bier mit Kräutern (Schafgarbe, Gagelstrauch, Heide) statt Hopfen gebittert/aromatisiert, vor Hopfenverwendung", nl: "Middeleeuws bier gebitterd/gearomatiseerd met kruiden (duizendblad, gagel, heide) in plaats van hop, vóór hop gebruik" },
          { en: "German wheat beer with grape must", es: "Cerveza de trigo alemana con mosto de uva", de: "Deutsches Weizenbier mit Traubenmost", nl: "Duits tarwebier met druivenmost" },
          { en: "Belgian sour ale with fruit additions", es: "Ale agria belga con adiciones de frutas", de: "Belgisches saures Ale mit Fruchtzusätzen", nl: "Belgisch zuur ale met fruit toevoegingen" },
          { en: "English bitter with crystal malts", es: "Bitter inglesa con maltas cristal", de: "Englisches Bitter mit Kristallmalzen", nl: "Engelse bitter met kristalmouten" }
        ],
        correct: 0,
        explanation: {
          en: "Gruit (or Grut) is a historical beer style from medieval Europe (before 1500s) that used a mixture of herbs and spices ('gruit') instead of hops for bittering and preservation. Common ingredients included yarrow, bog myrtle (sweet gale), wild rosemary, and heather. Modern craft brewers occasionally recreate this ancient style for historical interest.",
          es: "Gruit (o Grut) es un estilo histórico de cerveza de la Europa medieval (antes de 1500) que usaba una mezcla de hierbas y especias ('gruit') en lugar de lúpulo para amargar y preservar. Los ingredientes comunes incluían milenrama, mirto de pantano (mirto dulce), romero silvestre y brezo. Los cerveceros artesanales modernos ocasionalmente recrean este estilo antiguo por interés histórico.",
          de: "Gruit (oder Grut) ist ein historischer Bierstil aus dem mittelalterlichen Europa (vor 1500), der eine Mischung aus Kräutern und Gewürzen ('Gruit') statt Hopfen zum Bittern und Konservieren verwendete. Übliche Zutaten waren Schafgarbe, Gagelstrauch (Sumpfporst), wilder Rosmarin und Heide. Moderne Craft-Brauer kreieren gelegentlich diesen antiken Stil aus historischem Interesse neu.",
          nl: "Gruit (of Grut) is een historische bierstijl uit middeleeuws Europa (voor 1500) die een mengsel van kruiden en specerijen ('gruit') gebruikte in plaats van hop voor bitteren en conserveren. Veelvoorkomende ingrediënten waren duizendblad, gagel (zoete gale), wilde rozemarijn en heide. Moderne craft brouwers recreëren af en toe deze oude stijl voor historische interesse."
        }
      },
      {
        question: {
          en: "What is a 'Baltic Porter' and how does it differ from English Porter?",
          es: "¿Qué es una 'Baltic Porter' y en qué se diferencia de la Porter inglesa?",
          de: "Was ist ein 'Baltic Porter' und wie unterscheidet es sich von englischem Porter?",
          nl: "Wat is een 'Baltic Porter' en hoe verschilt het van Engelse Porter?"
        },
        options: [
          { en: "Strong dark lager (7-9% ABV) from Baltic region, bottom-fermented unlike English ale-based Porter, smooth with complex malt", es: "Lager oscura fuerte (7-9% ABV) de región báltica, fermentación baja a diferencia de Porter inglesa basada en ale, suave con malta compleja", de: "Starkes dunkles Lager (7-9% ABV) aus baltischer Region, untergärig im Gegensatz zu englischem Ale-basiertem Porter, geschmeidig mit komplexem Malz", nl: "Sterk donker lager (7-9% ABV) uit Baltische regio, ondergegist in tegenstelling tot Engelse ale-gebaseerde Porter, glad met complexe mout" },
          { en: "Sour wheat beer from Baltic Sea region", es: "Cerveza de trigo agria de la región del Mar Báltico", de: "Saures Weizenbier aus der Ostseeregion", nl: "Zuur tarwebier uit Baltische Zee regio" },
          { en: "Hoppy pale ale from Estonia", es: "Pale ale lupulada de Estonia", de: "Hopfiges Pale Ale aus Estland", nl: "Hopachtig pale ale uit Estland" },
          { en: "Light pilsner from Latvia", es: "Pilsner ligera de Letonia", de: "Helles Pilsner aus Lettland", nl: "Lichte pilsner uit Letland" }
        ],
        correct: 0,
        explanation: {
          en: "Baltic Porter is a strong dark lager (not ale) style from Baltic/Scandinavian countries, inspired by English Porter but adapted to local lager brewing traditions. It's bottom-fermented, higher alcohol (7-9.5% ABV), and features rich chocolate, coffee, dark fruit, licorice notes with smooth, warming character and less roast bitterness than English Porter.",
          es: "Baltic Porter es un estilo de lager oscura fuerte (no ale) de países bálticos/escandinavos, inspirado en Porter inglesa pero adaptado a tradiciones locales de elaboración de lager. Es de fermentación baja, mayor alcohol (7-9.5% ABV) y presenta notas ricas de chocolate, café, fruta oscura, regaliz con carácter suave y cálido y menos amargor tostado que Porter inglesa.",
          de: "Baltic Porter ist ein starker dunkler Lagerstil (kein Ale) aus baltischen/skandinavischen Ländern, inspiriert vom englischen Porter, aber an lokale Lagerbrautraditionen angepasst. Es ist untergärig, höherer Alkohol (7-9.5% ABV) und bietet reiche Schokoladen-, Kaffee-, Dunkelfrucht-, Lakritznoten mit geschmeidigem, wärmendem Charakter und weniger Röstbitterkeit als englisches Porter.",
          nl: "Baltic Porter is een sterke donkere lager (geen ale) stijl uit Baltische/Scandinavische landen, geïnspireerd door Engelse Porter maar aangepast aan lokale lager brouwtraditites. Het is ondergegist, hoger alcohol (7-9.5% ABV) en heeft rijke chocolade, koffie, donkere vrucht, drop noten met glad, verwarmend karakter en minder geroosterde bitterheid dan Engelse Porter."
        }
      },
      {
        question: {
          en: "What is a 'Kellerbier' or 'Zwickelbier'?",
          es: "¿Qué es una 'Kellerbier' o 'Zwickelbier'?",
          de: "Was ist ein 'Kellerbier' oder 'Zwickelbier'?",
          nl: "Wat is een 'Kellerbier' of 'Zwickelbier'?"
        },
        options: [
          { en: "Unfiltered, unpasteurized German lager served young from the cellar, cloudy with fresh, yeasty character", es: "Lager alemana sin filtrar, sin pasteurizar servida joven de la bodega, turbia con carácter fresco y de levadura", de: "Ungefiltertes, unpasteurisiertes deutsches Lager jung aus dem Keller serviert, trüb mit frischem, hefigem Charakter", nl: "Ongefilterd, ongepasteuriseerd Duits lager jong geserveerd uit de kelder, troebel met fris, gistig karakter" },
          { en: "Barrel-aged sour beer from breweries", es: "Cerveza agria envejecida en barrica de cervecerías", de: "Fassgereiftes saures Bier aus Brauereien", nl: "Vatgerijpt zuur bier uit brouwerijen" },
          { en: "Wheat beer served with fruit syrups", es: "Cerveza de trigo servida con jarabes de frutas", de: "Weizenbier mit Fruchtsirupen serviert", nl: "Tarwebier geserveerd met fruitsiropen" },
          { en: "Dark bock aged in caves", es: "Bock oscuro envejecido en cuevas", de: "Dunkles Bock in Höhlen gereift", nl: "Donker bock gerijpt in grotten" }
        ],
        correct: 0,
        explanation: {
          en: "Kellerbier ('cellar beer') or Zwickelbier is unfiltered, unpasteurized German lager tapped directly from lagering tanks or casks. It's cloudy with yeast, has fresh bread/grain character, moderate hop bitterness, and lower carbonation than typical filtered lagers. This traditional Franconian style showcases beer in its most natural, rustic form.",
          es: "Kellerbier ('cerveza de bodega') o Zwickelbier es lager alemana sin filtrar, sin pasteurizar extraída directamente de tanques o barriles de lagerado. Es turbia con levadura, tiene carácter fresco de pan/grano, amargor moderado de lúpulo y menor carbonatación que lagers filtradas típicas. Este estilo tradicional de Franconia muestra cerveza en su forma más natural y rústica.",
          de: "Kellerbier ('Kellerbier') oder Zwickelbier ist ungefiltertes, unpasteurisiertes deutsches Lager direkt aus Lagertanks oder Fässern gezapft. Es ist trüb mit Hefe, hat frischen Brot-/Getreidecharakter, mäßige Hopfenbitterkeit und niedrigere Kohlensäure als typische gefilterte Lager. Dieser traditionelle fränkische Stil zeigt Bier in seiner natürlichsten, rustikalsten Form.",
          nl: "Kellerbier ('kelder bier') of Zwickelbier is ongefilterd, ongepasteuriseerd Duits lager getapt direct uit lagering tanks of vaten. Het is troebel met gist, heeft fris brood/graan karakter, gematigde hopbitterheid en lagere koolzuur dan typische gefilterde lagers. Deze traditionele Franconische stijl toont bier in zijn meest natuurlijke, rustieke vorm."
        }
      },
      {
        question: {
          en: "What is a 'Cream Ale' in American brewing?",
          es: "¿Qué es una 'Cream Ale' en la elaboración americana?",
          de: "Was ist ein 'Cream Ale' im amerikanischen Brauen?",
          nl: "Wat is een 'Cream Ale' in Amerikaans brouwen?"
        },
        options: [
          { en: "Light, smooth American ale (sometimes hybrid-fermented) with corn/rice adjuncts, crisp and mild like lager but ale character", es: "Ale americana ligera y suave (a veces fermentación híbrida) con adjuntos de maíz/arroz, crujiente y suave como lager pero carácter de ale", de: "Leichtes, geschmeidiges amerikanisches Ale (manchmal Hybrid-fermentiert) mit Mais-/Reis-Zusätzen, knackig und mild wie Lager aber Ale-Charakter", nl: "Licht, glad Amerikaans ale (soms hybride-gefermenteerd) met mais/rijst adjuncten, knapperig en mild zoals lager maar ale karakter" },
          { en: "Belgian cream liqueur mixed with beer", es: "Licor de crema belga mezclado con cerveza", de: "Belgischer Sahnelikör mit Bier gemischt", nl: "Belgische room likeur gemengd met bier" },
          { en: "Milk stout with heavy lactose", es: "Milk stout con lactosa pesada", de: "Milk Stout mit schwerer Laktose", nl: "Milk stout met zware lactose" },
          { en: "English bitter with cream added", es: "Bitter inglesa con crema agregada", de: "Englisches Bitter mit Sahne hinzugefügt", nl: "Engelse bitter met room toegevoegd" }
        ],
        correct: 0,
        explanation: {
          en: "Cream Ale is a mild, light-bodied American style (4.5-5.5% ABV) using adjuncts like corn or rice for a crisp, clean finish. Despite being ale, it's often fermented cool or blended with lager for smoothness, creating a lager-like drinkability. 'Cream' refers to its smooth texture, not actual cream. It's refreshing with subtle malt sweetness and minimal hop character.",
          es: "Cream Ale es un estilo americano suave y de cuerpo ligero (4.5-5.5% ABV) usando adjuntos como maíz o arroz para un final crujiente y limpio. A pesar de ser ale, a menudo se fermenta frío o se mezcla con lager para suavidad, creando bebibilidad similar a lager. 'Cream' se refiere a su textura suave, no crema real. Es refrescante con sutil dulzura de malta y carácter mínimo de lúpulo.",
          de: "Cream Ale ist ein milder, leichtgewichtiger amerikanischer Stil (4.5-5.5% ABV), der Zusätze wie Mais oder Reis für einen knackigen, sauberen Abgang verwendet. Obwohl Ale, wird es oft kühl fermentiert oder mit Lager gemischt für Geschmeidigkeit, erzeugt lagerartige Trinkbarkeit. 'Cream' bezieht sich auf seine geschmeidige Textur, nicht echte Sahne. Es ist erfrischend mit subtiler Malzsüße und minimalem Hopfencharakter.",
          nl: "Cream Ale is een milde, licht-bodied Amerikaanse stijl (4.5-5.5% ABV) die adjuncten zoals mais of rijst gebruikt voor een knapperige, schone afdronk. Ondanks ale te zijn, wordt het vaak koel gefermenteerd of gemengd met lager voor gladheid, creëert lager-achtige drinkbaarheid. 'Cream' verwijst naar zijn gladde textuur, niet echte room. Het is verfrissend met subtiele moutzoetheid en minimaal hopkarakter."
        }
      },
      {
        question: {
          en: "What is a 'Oud Bruin' (Old Brown) beer?",
          es: "¿Qué es una cerveza 'Oud Bruin' (Marrón Viejo)?",
          de: "Was ist ein 'Oud Bruin' (Alt Braun)-Bier?",
          nl: "Wat is een 'Oud Bruin' bier?"
        },
        options: [
          { en: "Flemish sour brown ale aged in oak, malt-forward with dark fruit, caramel, light acidity, sweeter than Flanders Red", es: "Ale marrón agria flamenca envejecida en roble, orientada a malta con fruta oscura, caramelo, acidez ligera, más dulce que Flanders Red", de: "Flämisches saures braunes Ale in Eiche gereift, malzbetont mit dunklen Früchten, Karamell, leichter Säure, süßer als Flanders Red", nl: "Vlaams zuur bruin ale gerijpt in eiken, mout-vooruit met donker fruit, karamel, lichte zuurheid, zoeter dan Flanders Red" },
          { en: "English old ale from Burton", es: "Old ale inglesa de Burton", de: "Englisches Old Ale aus Burton", nl: "Engels old ale uit Burton" },
          { en: "German dunkel lager aged 2 years", es: "Lager dunkel alemana envejecida 2 años", de: "Deutsches Dunkel-Lager 2 Jahre gereift", nl: "Duits dunkel lager 2 jaar gerijpt" },
          { en: "American brown ale with hops", es: "Brown ale americana con lúpulos", de: "Amerikanisches Brown Ale mit Hopfen", nl: "Amerikaans brown ale met hop" }
        ],
        correct: 0,
        explanation: {
          en: "Oud Bruin is a Flemish sour brown ale from East Flanders, Belgium, aged in oak barrels with Lactobacillus creating gentle sourness. It's malt-forward with raisins, figs, plums, caramel, chocolate notes and lower acidity than Flanders Red Ale. Sweet and sour balance with complex aging character (5-8% ABV). Often young and old batches are blended.",
          es: "Oud Bruin es un ale marrón agria flamenca de Flandes Oriental, Bélgica, envejecida en barricas de roble con Lactobacillus creando acidez suave. Está orientada a malta con pasas, higos, ciruelas, notas de caramelo, chocolate y menor acidez que Flanders Red Ale. Balance dulce y agrio con carácter complejo de envejecimiento (5-8% ABV). A menudo lotes jóvenes y viejos se mezclan.",
          de: "Oud Bruin ist ein flämisches saures braunes Ale aus Ostflandern, Belgien, in Eichenfässern mit Lactobacillus gereift, erzeugt sanfte Säure. Es ist malzbetont mit Rosinen, Feigen, Pflaumen, Karamell-, Schokoladennoten und niedrigerer Säure als Flanders Red Ale. Süß-saure Balance mit komplexem Alterungscharakter (5-8% ABV). Oft werden junge und alte Chargen gemischt.",
          nl: "Oud Bruin is een Vlaams zuur bruin ale uit Oost-Vlaanderen, België, gerijpt in eiken vaten met Lactobacillus creërend zachte zuurheid. Het is mout-vooruit met rozijnen, vijgen, pruimen, karamel, chocolade noten en lagere zuurheid dan Flanders Red Ale. Zoet en zuur balans met complex verouderingskarakter (5-8% ABV). Vaak worden jonge en oude batches gemengd."
        }
      },
      {
        question: {
          en: "What is a 'Bière de Garde' and what are its characteristics?",
          es: "¿Qué es una 'Bière de Garde' y cuáles son sus características?",
          de: "Was ist ein 'Bière de Garde' und was sind seine Eigenschaften?",
          nl: "Wat is een 'Bière de Garde' en wat zijn de kenmerken?"
        },
        options: [
          { en: "French farmhouse ale (blonde/amber/brown), malt-focused, cellar-aged, moderate strength, earthy/toasty, traditionally corked", es: "Ale francesa de granja (rubia/ámbar/marrón), enfocada en malta, envejecida en bodega, fuerza moderada, terrosa/tostada, tradicionalmente con corcho", de: "Französisches Farmhouse Ale (blond/bernstein/braun), malzfokussiert, kellergereift, mäßige Stärke, erdig/röstig, traditionell verkorkt", nl: "Frans boerderij ale (blond/amber/bruin), mout-gericht, kelder-gerijpt, gematigde sterkte, aards/geroosterd, traditioneel gekurkt" },
          { en: "Belgian gueuze with long aging", es: "Gueuze belga con largo envejecimiento", de: "Belgisches Gueuze mit langer Reifung", nl: "Belgische gueuze met lange rijping" },
          { en: "German kellerbier served unfiltered", es: "Kellerbier alemana servida sin filtrar", de: "Deutsches Kellerbier ungefiltert serviert", nl: "Duits kellerbier ongefilterd geserveerd" },
          { en: "American barrel-aged sour", es: "Agria americana envejecida en barrica", de: "Amerikanisches fassgereiftes Sauerbier", nl: "Amerikaans vatgerijpt zuur" }
        ],
        correct: 0,
        explanation: {
          en: "Bière de Garde ('beer for keeping') is a traditional French farmhouse ale from Nord-Pas-de-Calais, brewed in winter/spring and cellared for summer. It comes in blonde, amber, or brown versions (6-8.5% ABV), emphasizing malt with toasty, bready, caramel notes, earthy/herbal hops, smooth alcohol warmth. Traditionally bottle-conditioned and corked like wine.",
          es: "Bière de Garde ('cerveza para guardar') es un ale tradicional francés de granja de Nord-Pas-de-Calais, elaborado en invierno/primavera y almacenado en bodega para verano. Viene en versiones rubia, ámbar o marrón (6-8.5% ABV), enfatizando malta con notas tostadas, de pan, caramelo, lúpulos terrosos/herbales, calidez suave de alcohol. Tradicionalmente acondicionada en botella y con corcho como vino.",
          de: "Bière de Garde ('Bier zum Aufbewahren') ist ein traditionelles französisches Farmhouse Ale aus Nord-Pas-de-Calais, im Winter/Frühling gebraut und für Sommer gekellert. Es kommt in blonden, bernstein- oder braunen Versionen (6-8.5% ABV), betont Malz mit röstigen, brotigen, Karamellnoten, erdigen/kräuterigen Hopfen, geschmeidiger Alkoholwärme. Traditionell flaschenfermentiert und wie Wein verkorkt.",
          nl: "Bière de Garde ('bier om te bewaren') is een traditioneel Frans boerderij ale uit Nord-Pas-de-Calais, gebrouwen in winter/lente en gerijpt in kelder voor zomer. Het komt in blonde, amber of bruine versies (6-8.5% ABV), benadrukt mout met geroosterde, broodachtige, karamel noten, aardse/kruidige hop, gladde alcoholwarmte. Traditioneel flesgerijpt en gekurkt zoals wijn."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
