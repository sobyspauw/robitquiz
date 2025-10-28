(function() {
  const level5 = {
    name: {
      en: "Coffee",
      es: "Café",
      de: "Kaffee",
      nl: "Koffie"
    },
    questions: [
      {
        question: {
          en: "What is 'terroir' in coffee cultivation?",
          es: "¿Qué es el 'terroir' en el cultivo de café?",
          de: "Was ist 'Terroir' im Kaffeeanbau?",
          nl: "Wat is 'terroir' in koffieteelt?"
        },
        options: [
          { en: "The unique environmental factors that affect coffee flavor", es: "Los factores ambientales únicos que afectan el sabor del café", de: "Die einzigartigen Umweltfaktoren, die den Kaffeegeschmack beeinflussen", nl: "De unieke omgevingsfactoren die koffiesmaak beïnvloeden" },
          { en: "A method of roasting coffee", es: "Un método de tostar café", de: "Eine Methode zum Rösten von Kaffee", nl: "Een methode om koffie te branden" },
          { en: "A type of coffee plant disease", es: "Un tipo de enfermedad de la planta de café", de: "Eine Art Kaffeepflanzenkrankheit", nl: "Een type koffieplantziekte" },
          { en: "The process of drying coffee beans", es: "El proceso de secar los granos de café", de: "Der Prozess des Trocknens von Kaffeebohnen", nl: "Het proces van het drogen van koffiebonen" }
        ],
        correct: 0,
        explanation: {
          en: "Terroir refers to the complete natural environment in which coffee is produced—including soil composition, climate, altitude, and surrounding flora. These factors combine to create distinctive flavor characteristics unique to each growing region, much like in wine production.",
          es: "Terroir se refiere al entorno natural completo en el que se produce el café, incluyendo la composición del suelo, el clima, la altitud y la flora circundante. Estos factores se combinan para crear características de sabor distintivas únicas de cada región de cultivo, similar a la producción de vino.",
          de: "Terroir bezieht sich auf die gesamte natürliche Umgebung, in der Kaffee produziert wird—einschließlich Bodenzusammensetzung, Klima, Höhenlage und umgebender Flora. Diese Faktoren kombinieren sich zu charakteristischen Geschmackseigenschaften, die für jede Anbauregion einzigartig sind, ähnlich wie bei der Weinproduktion.",
          nl: "Terroir verwijst naar de complete natuurlijke omgeving waarin koffie wordt geproduceerd—inclusief bodemsamenstelling, klimaat, hoogte en omringende flora. Deze factoren combineren om onderscheidende smaakkenmerken te creëren die uniek zijn voor elke teeltregio, net als bij wijnproductie."
        }
      },
      {
        question: {
          en: "What is the 'coffee rust' disease scientifically known as?",
          es: "¿Cómo se conoce científicamente la enfermedad de la 'roya del café'?",
          de: "Wie wird die 'Kaffeerost'-Krankheit wissenschaftlich genannt?",
          nl: "Hoe wordt de 'koffieroest'-ziekte wetenschappelijk genoemd?"
        },
        options: [
          { en: "Coffea arabica", es: "Coffea arabica", de: "Coffea arabica", nl: "Coffea arabica" },
          { en: "Hemileia vastatrix", es: "Hemileia vastatrix", de: "Hemileia vastatrix", nl: "Hemileia vastatrix" },
          { en: "Colletotrichum kahawae", es: "Colletotrichum kahawae", de: "Colletotrichum kahawae", nl: "Colletotrichum kahawae" },
          { en: "Fusarium xylarioides", es: "Fusarium xylarioides", de: "Fusarium xylarioides", nl: "Fusarium xylarioides" }
        ],
        correct: 1,
        explanation: {
          en: "Hemileia vastatrix is the fungus that causes coffee leaf rust, one of the most devastating diseases in coffee cultivation. It first appeared in Sri Lanka in the 1860s and has since affected coffee-growing regions worldwide, causing significant crop losses and requiring resistant varietals.",
          es: "Hemileia vastatrix es el hongo que causa la roya del café, una de las enfermedades más devastadoras en el cultivo de café. Apareció por primera vez en Sri Lanka en la década de 1860 y desde entonces ha afectado a las regiones cafetaleras de todo el mundo, causando pérdidas significativas de cultivos y requiriendo variedades resistentes.",
          de: "Hemileia vastatrix ist der Pilz, der Kaffeerost verursacht, eine der verheerendsten Krankheiten im Kaffeeanbau. Er trat erstmals in den 1860er Jahren in Sri Lanka auf und hat seitdem Kaffeeanbaugebiete weltweit befallen, was zu erheblichen Ernteverlusten führte und resistente Sorten erfordert.",
          nl: "Hemileia vastatrix is de schimmel die koffiebladroest veroorzaakt, een van de meest verwoestende ziekten in de koffieteelt. Het verscheen voor het eerst in Sri Lanka in de jaren 1860 en heeft sindsdien koffieteeltregio's wereldwijd aangetast, wat aanzienlijke oogstverliezen veroorzaakte en resistente variëteiten vereist."
        }
      },
      {
        question: {
          en: "What is the ideal extraction time for a properly pulled espresso shot?",
          es: "¿Cuál es el tiempo de extracción ideal para un espresso correctamente extraído?",
          de: "Was ist die ideale Extraktionszeit für einen korrekt gezogenen Espresso?",
          nl: "Wat is de ideale extractietijd voor een correct getrokken espresso?"
        },
        options: [
          { en: "15-20 seconds", es: "15-20 segundos", de: "15-20 Sekunden", nl: "15-20 seconden" },
          { en: "25-30 seconds", es: "25-30 segundos", de: "25-30 Sekunden", nl: "25-30 seconden" },
          { en: "35-40 seconds", es: "35-40 segundos", de: "35-40 Sekunden", nl: "35-40 seconden" },
          { en: "45-50 seconds", es: "45-50 segundos", de: "45-50 Sekunden", nl: "45-50 seconden" }
        ],
        correct: 1,
        explanation: {
          en: "The ideal extraction time for espresso is 25-30 seconds, producing about 25-30ml of liquid. This timing allows for proper extraction of the coffee's soluble compounds—shorter results in under-extraction (sour, weak), while longer leads to over-extraction (bitter, astringent).",
          es: "El tiempo de extracción ideal para el espresso es de 25-30 segundos, produciendo aproximadamente 25-30ml de líquido. Este tiempo permite la extracción adecuada de los compuestos solubles del café: menos tiempo resulta en subextracción (ácido, débil), mientras que más tiempo conduce a sobreextracción (amargo, astringente).",
          de: "Die ideale Extraktionszeit für Espresso beträgt 25-30 Sekunden und produziert etwa 25-30ml Flüssigkeit. Diese Zeit ermöglicht die richtige Extraktion der löslichen Verbindungen des Kaffees—kürzere Zeit führt zu Unterextraktion (sauer, schwach), während längere zu Überextraktion führt (bitter, adstringierend).",
          nl: "De ideale extractietijd voor espresso is 25-30 seconden, wat ongeveer 25-30ml vloeistof produceert. Deze timing zorgt voor de juiste extractie van de oplosbare verbindingen van de koffie—korter resulteert in onderextractie (zuur, zwak), terwijl langer leidt tot overextractie (bitter, wrang)."
        }
      },
      {
        question: {
          en: "What is 'dry processing' or 'natural processing' in coffee production?",
          es: "¿Qué es el 'procesamiento seco' o 'procesamiento natural' en la producción de café?",
          de: "Was ist 'Trockenverarbeitung' oder 'natürliche Verarbeitung' in der Kaffeeproduktion?",
          nl: "Wat is 'droge verwerking' of 'natuurlijke verwerking' in koffieproductie?"
        },
        options: [
          { en: "Drying coffee beans in an oven", es: "Secar los granos de café en un horno", de: "Trocknen von Kaffeebohnen im Ofen", nl: "Koffiebonen drogen in een oven" },
          { en: "Drying whole coffee cherries in the sun before removing the bean", es: "Secar cerezas de café enteras al sol antes de quitar el grano", de: "Trocknen ganzer Kaffeekirschen in der Sonne, bevor die Bohne entfernt wird", nl: "Hele koffiebessen in de zon drogen voordat de boon wordt verwijderd" },
          { en: "Removing all moisture from coffee beans using a vacuum", es: "Eliminar toda la humedad de los granos de café usando vacío", de: "Entfernen aller Feuchtigkeit aus Kaffeebohnen mittels Vakuum", nl: "Alle vocht uit koffiebonen verwijderen met een vacuüm" },
          { en: "Processing coffee without water", es: "Procesar café sin agua", de: "Kaffee ohne Wasser verarbeiten", nl: "Koffie verwerken zonder water" }
        ],
        correct: 1,
        explanation: {
          en: "Natural or dry processing involves drying the entire coffee cherry in the sun for several weeks before mechanically removing the dried fruit layers. This method, the oldest processing technique, allows the bean to absorb sugars from the cherry, resulting in sweeter, fruitier flavors with more body but less acidity compared to washed coffees.",
          es: "El procesamiento natural o seco implica secar la cereza de café entera al sol durante varias semanas antes de eliminar mecánicamente las capas de fruta seca. Este método, la técnica de procesamiento más antigua, permite que el grano absorba azúcares de la cereza, resultando en sabores más dulces y afrutados con más cuerpo pero menos acidez en comparación con los cafés lavados.",
          de: "Natürliche oder Trockenverarbeitung beinhaltet das Trocknen der gesamten Kaffeekirsche in der Sonne über mehrere Wochen, bevor die getrockneten Fruchtschichten mechanisch entfernt werden. Diese Methode, die älteste Verarbeitungstechnik, ermöglicht der Bohne, Zucker aus der Kirsche aufzunehmen, was zu süßeren, fruchtigeren Aromen mit mehr Körper, aber weniger Säure im Vergleich zu gewaschenen Kaffees führt.",
          nl: "Natuurlijke of droge verwerking houdt in dat de hele koffiebes enkele weken in de zon wordt gedroogd voordat de gedroogde vruchtenlagen mechanisch worden verwijderd. Deze methode, de oudste verwerkingstechniek, stelt de boon in staat om suikers uit de bes op te nemen, wat resulteert in zoetere, fruitigere smaken met meer body maar minder zuurgraad vergeleken met gewassen koffies."
        }
      },
      {
        question: {
          en: "What is the purpose of 'tamping' in espresso preparation?",
          es: "¿Cuál es el propósito de 'apisonar' en la preparación del espresso?",
          de: "Was ist der Zweck des 'Tamperns' bei der Espresso-Zubereitung?",
          nl: "Wat is het doel van 'aandrukken' bij espressobereiding?"
        },
        options: [
          { en: "To remove excess coffee grounds", es: "Para eliminar el exceso de café molido", de: "Um überschüssiges Kaffeemehl zu entfernen", nl: "Om overtollig koffiedik te verwijderen" },
          { en: "To create even density and resistance for water flow", es: "Para crear densidad uniforme y resistencia al flujo de agua", de: "Um gleichmäßige Dichte und Widerstand für den Wasserfluss zu schaffen", nl: "Om gelijke dichtheid en weerstand voor waterstroom te creëren" },
          { en: "To cool down the coffee grounds", es: "Para enfriar el café molido", de: "Um das Kaffeemehl abzukühlen", nl: "Om het koffiedik af te koelen" },
          { en: "To mix different types of coffee", es: "Para mezclar diferentes tipos de café", de: "Um verschiedene Kaffeesorten zu mischen", nl: "Om verschillende soorten koffie te mengen" }
        ],
        correct: 1,
        explanation: {
          en: "Tamping compresses and levels the coffee grounds in the portafilter basket, creating uniform density throughout the puck. This ensures even water distribution and consistent extraction across all the coffee, preventing channeling where water finds easy paths through the grounds, which would result in under-extraction in some areas and over-extraction in others.",
          es: "El apisonado comprime y nivela el café molido en la canasta del portafiltro, creando densidad uniforme en todo el disco. Esto asegura una distribución uniforme del agua y una extracción consistente en todo el café, previniendo canales donde el agua encuentra caminos fáciles a través del molido, lo que resultaría en subextracción en algunas áreas y sobreextracción en otras.",
          de: "Das Tampern komprimiert und nivelliert das Kaffeemehl im Siebträgerkorb und schafft eine gleichmäßige Dichte im gesamten Puck. Dies gewährleistet eine gleichmäßige Wasserverteilung und konsistente Extraktion über den gesamten Kaffee, verhindert Channeling, bei dem Wasser leichte Wege durch das Mehl findet, was zu Unterextraktion in einigen Bereichen und Überextraktion in anderen führen würde.",
          nl: "Aandrukken comprimeert en niveleert het koffiedik in het filterdrager mandje, wat uniforme dichtheid door de hele puck creëert. Dit zorgt voor gelijkmatige waterverdeling en consistente extractie over alle koffie, voorkomt channeling waarbij water gemakkelijke paden door het dik vindt, wat zou resulteren in onderextractie in sommige gebieden en overextractie in andere."
        }
      },
      {
        question: {
          en: "Which coffee varietal is known for its naturally occurring mutation resulting in large beans?",
          es: "¿Qué variedad de café es conocida por su mutación natural que resulta en granos grandes?",
          de: "Welche Kaffeesorte ist für ihre natürlich auftretende Mutation bekannt, die zu großen Bohnen führt?",
          nl: "Welke koffievariëteit staat bekend om zijn natuurlijk voorkomende mutatie die resulteert in grote bonen?"
        },
        options: [
          { en: "Geisha", es: "Geisha", de: "Geisha", nl: "Geisha" },
          { en: "Maragogype", es: "Maragogype", de: "Maragogype", nl: "Maragogype" },
          { en: "Bourbon", es: "Bourbon", de: "Bourbon", nl: "Bourbon" },
          { en: "Caturra", es: "Caturra", de: "Caturra", nl: "Caturra" }
        ],
        correct: 1,
        explanation: {
          en: "Maragogype (also called 'elephant bean') is a natural mutation of Typica coffee discovered in Brazil in 1870. These beans can be up to 40% larger than typical Arabica beans. While they produce lower yields, they're prized for their mild, smooth flavor profile and low acidity. The variety is now grown in various countries including Mexico, Nicaragua, and Guatemala.",
          es: "Maragogype (también llamado 'grano elefante') es una mutación natural del café Typica descubierta en Brasil en 1870. Estos granos pueden ser hasta un 40% más grandes que los granos típicos de Arabica. Aunque producen rendimientos más bajos, son apreciados por su perfil de sabor suave y su baja acidez. La variedad ahora se cultiva en varios países, incluidos México, Nicaragua y Guatemala.",
          de: "Maragogype (auch 'Elefantenbohne' genannt) ist eine natürliche Mutation von Typica-Kaffee, die 1870 in Brasilien entdeckt wurde. Diese Bohnen können bis zu 40% größer sein als typische Arabica-Bohnen. Obwohl sie geringere Erträge produzieren, werden sie für ihr mildes, geschmeidiges Geschmacksprofil und ihre niedrige Säure geschätzt. Die Sorte wird jetzt in verschiedenen Ländern angebaut, darunter Mexiko, Nicaragua und Guatemala.",
          nl: "Maragogype (ook wel 'olifantenboon' genoemd) is een natuurlijke mutatie van Typica-koffie die in 1870 in Brazilië werd ontdekt. Deze bonen kunnen tot 40% groter zijn dan typische Arabica-bonen. Hoewel ze lagere opbrengsten produceren, worden ze gewaardeerd om hun milde, zachte smaakprofiel en lage zuurgraad. De variëteit wordt nu in verschillende landen geteeld, waaronder Mexico, Nicaragua en Guatemala."
        }
      },
      {
        question: {
          en: "What does TDS (Total Dissolved Solids) measure in coffee?",
          es: "¿Qué mide el TDS (Sólidos Disueltos Totales) en el café?",
          de: "Was misst TDS (Total Dissolved Solids) im Kaffee?",
          nl: "Wat meet TDS (Total Dissolved Solids) in koffie?"
        },
        options: [
          { en: "The temperature of the brewed coffee", es: "La temperatura del café preparado", de: "Die Temperatur des gebrühten Kaffees", nl: "De temperatuur van de gebrouwen koffie" },
          { en: "The concentration of dissolved coffee compounds in the liquid", es: "La concentración de compuestos de café disueltos en el líquido", de: "Die Konzentration gelöster Kaffeeverbindungen in der Flüssigkeit", nl: "De concentratie van opgeloste koffieverbindingen in de vloeistof" },
          { en: "The acidity level of the coffee", es: "El nivel de acidez del café", de: "Der Säuregehalt des Kaffees", nl: "Het zuurgradieniveau van de koffie" },
          { en: "The caffeine content", es: "El contenido de cafeína", de: "Der Koffeingehalt", nl: "Het cafeïnegehalte" }
        ],
        correct: 1,
        explanation: {
          en: "TDS measures the percentage of dissolved coffee solids in the brewed liquid, typically measured using a refractometer. For drip coffee, ideal TDS ranges from 1.15% to 1.35%, while espresso ranges from 8% to 12%. Combined with brew ratio data, TDS helps calculate extraction yield, allowing baristas to objectively assess whether coffee is under-extracted, well-extracted, or over-extracted.",
          es: "TDS mide el porcentaje de sólidos de café disueltos en el líquido preparado, típicamente medido usando un refractómetro. Para café de filtro, el TDS ideal oscila entre 1.15% y 1.35%, mientras que el espresso oscila entre 8% y 12%. Combinado con datos de proporción de preparación, TDS ayuda a calcular el rendimiento de extracción, permitiendo a los baristas evaluar objetivamente si el café está subextraído, bien extraído o sobreextraído.",
          de: "TDS misst den Prozentsatz gelöster Kaffeefststoffe in der gebrühten Flüssigkeit, typischerweise mit einem Refraktometer gemessen. Für Filterkaffee liegt der ideale TDS-Bereich zwischen 1,15% und 1,35%, während Espresso zwischen 8% und 12% liegt. In Kombination mit Brühverhältnisdaten hilft TDS, die Extraktionsausbeute zu berechnen, wodurch Baristas objektiv beurteilen können, ob Kaffee unterextrahiert, gut extrahiert oder überextrahiert ist.",
          nl: "TDS meet het percentage opgeloste koffievaste stoffen in de gebrouwen vloeistof, typisch gemeten met een refractometer. Voor filterkoffie ligt de ideale TDS tussen 1,15% en 1,35%, terwijl espresso tussen 8% en 12% ligt. Gecombineerd met brouwverhoudingsgegevens helpt TDS om extractie-opbrengst te berekenen, waardoor barista's objectief kunnen beoordelen of koffie ondergeëxtraheerd, goed geëxtraheerd of overgeëxtraheerd is."
        }
      },
      {
        question: {
          en: "What is the 'first crack' during coffee roasting?",
          es: "¿Qué es el 'primer crack' durante el tostado del café?",
          de: "Was ist der 'First Crack' beim Kaffeerösten?",
          nl: "Wat is de 'eerste crack' tijdens het koffiebranden?"
        },
        options: [
          { en: "When the roasting machine malfunctions", es: "Cuando la máquina de tostar falla", de: "Wenn die Röstmaschine eine Fehlfunktion hat", nl: "Wanneer de brandmachine defect raakt" },
          { en: "An audible popping sound when beans expand and crack due to internal pressure", es: "Un sonido audible de estallido cuando los granos se expanden y se rompen debido a la presión interna", de: "Ein hörbares Knallgeräusch, wenn die Bohnen sich ausdehnen und aufgrund inneren Drucks aufplatzen", nl: "Een hoorbaar ploppend geluid wanneer bonen uitzetten en barsten door interne druk" },
          { en: "The first defect found in roasted beans", es: "El primer defecto encontrado en los granos tostados", de: "Der erste Defekt, der in gerösteten Bohnen gefunden wird", nl: "Het eerste defect gevonden in gebrande bonen" },
          { en: "When beans start to burn", es: "Cuando los granos comienzan a quemarse", de: "Wenn die Bohnen anfangen zu verbrennen", nl: "Wanneer bonen beginnen te verbranden" }
        ],
        correct: 1,
        explanation: {
          en: "First crack is a crucial milestone in coffee roasting, occurring around 196°C (385°F) when the beans have absorbed enough heat energy to cause rapid expansion. The internal pressure causes the bean structure to fracture, producing an audible popping sound similar to popcorn. This marks the minimum development level for drinkable coffee. Light roasts are typically finished shortly after first crack, while darker roasts continue well beyond it toward second crack.",
          es: "El primer crack es un hito crucial en el tostado del café, que ocurre alrededor de 196°C (385°F) cuando los granos han absorbido suficiente energía térmica para causar una rápida expansión. La presión interna hace que la estructura del grano se fracture, produciendo un sonido audible de estallido similar al de las palomitas de maíz. Esto marca el nivel mínimo de desarrollo para café bebible. Los tuestes claros suelen terminarse poco después del primer crack, mientras que los tuestes más oscuros continúan mucho más allá hacia el segundo crack.",
          de: "First Crack ist ein entscheidender Meilenstein beim Kaffeerösten, der bei etwa 196°C (385°F) auftritt, wenn die Bohnen genug Wärmeenergie aufgenommen haben, um eine schnelle Ausdehnung zu verursachen. Der innere Druck lässt die Bohnenstruktur brechen und erzeugt ein hörbares Knallgeräusch ähnlich wie bei Popcorn. Dies markiert den minimalen Entwicklungsgrad für trinkbaren Kaffee. Helle Röstungen werden typischerweise kurz nach dem First Crack beendet, während dunklere Röstungen weit darüber hinaus bis zum Second Crack fortgesetzt werden.",
          nl: "De eerste crack is een cruciale mijlpaal in het koffiebranden, die optreedt rond 196°C (385°F) wanneer de bonen genoeg warmte-energie hebben opgenomen om snelle expansie te veroorzaken. De interne druk zorgt ervoor dat de bonenstructuur breekt, wat een hoorbaar ploppend geluid produceert vergelijkbaar met popcorn. Dit markeert het minimale ontwikkelingsniveau voor drinkbare koffie. Lichte brandingen worden meestal kort na de eerste crack beëindigd, terwijl donkere brandingen ver daarna doorgaan richting de tweede crack."
        }
      },
      {
        question: {
          en: "What is the optimal water temperature range for brewing filter coffee?",
          es: "¿Cuál es el rango de temperatura óptimo del agua para preparar café de filtro?",
          de: "Was ist der optimale Wassertemperaturbereich für die Zubereitung von Filterkaffee?",
          nl: "Wat is het optimale watertemperatuurbereik voor het zetten van filterkoffie?"
        },
        options: [
          { en: "70-80°C (158-176°F)", es: "70-80°C (158-176°F)", de: "70-80°C (158-176°F)", nl: "70-80°C (158-176°F)" },
          { en: "90-96°C (195-205°F)", es: "90-96°C (195-205°F)", de: "90-96°C (195-205°F)", nl: "90-96°C (195-205°F)" },
          { en: "100°C (212°F)", es: "100°C (212°F)", de: "100°C (212°F)", nl: "100°C (212°F)" },
          { en: "80-85°C (176-185°F)", es: "80-85°C (176-185°F)", de: "80-85°C (176-185°F)", nl: "80-85°C (176-185°F)" }
        ],
        correct: 1,
        explanation: {
          en: "The optimal brewing temperature for filter coffee is 90-96°C (195-205°F). This range allows for efficient extraction of desirable flavor compounds while avoiding over-extraction of bitter elements. Water below 90°C results in under-extraction (sour, weak coffee), while water at or near boiling can over-extract, producing bitter, harsh flavors. The SCA (Specialty Coffee Association) specifically recommends this temperature range for optimal brewing.",
          es: "La temperatura óptima de preparación para café de filtro es 90-96°C (195-205°F). Este rango permite una extracción eficiente de compuestos de sabor deseables mientras se evita la sobreextracción de elementos amargos. El agua por debajo de 90°C resulta en subextracción (café ácido y débil), mientras que el agua en o cerca del punto de ebullición puede sobreextraer, produciendo sabores amargos y ásperos. La SCA (Specialty Coffee Association) recomienda específicamente este rango de temperatura para una preparación óptima.",
          de: "Die optimale Brühtemperatur für Filterkaffee liegt bei 90-96°C (195-205°F). Dieser Bereich ermöglicht eine effiziente Extraktion gewünschter Geschmacksverbindungen, während eine Überextraktion bitterer Elemente vermieden wird. Wasser unter 90°C führt zu Unterextraktion (saurer, schwacher Kaffee), während Wasser am oder nahe dem Siedepunkt überextrahieren kann und bittere, harsche Aromen erzeugt. Die SCA (Specialty Coffee Association) empfiehlt speziell diesen Temperaturbereich für optimales Brühen.",
          nl: "De optimale brouwtemperatuur voor filterkoffie is 90-96°C (195-205°F). Dit bereik zorgt voor efficiënte extractie van gewenste smaakverbindingen terwijl overextractie van bittere elementen wordt vermeden. Water onder 90°C resulteert in onderextractie (zure, zwakke koffie), terwijl water op of nabij het kookpunt kan overextraheren, wat bittere, harde smaken produceert. De SCA (Specialty Coffee Association) beveelt specifiek dit temperatuurbereik aan voor optimaal zetten."
        }
      },
      {
        question: {
          en: "What is 'cupping' in the coffee industry?",
          es: "¿Qué es el 'cupping' en la industria del café?",
          de: "Was ist 'Cupping' in der Kaffeeindustrie?",
          nl: "Wat is 'cupping' in de koffie-industrie?"
        },
        options: [
          { en: "A standardized method for tasting and evaluating coffee quality", es: "Un método estandarizado para degustar y evaluar la calidad del café", de: "Eine standardisierte Methode zum Verkosten und Bewerten von Kaffeequalität", nl: "Een gestandaardiseerde methode voor het proeven en evalueren van koffiekwaliteit" },
          { en: "The process of packaging coffee in cups", es: "El proceso de empaquetar café en tazas", de: "Der Prozess des Verpackens von Kaffee in Tassen", nl: "Het proces van koffie verpakken in bekers" },
          { en: "Measuring the volume of espresso shots", es: "Medir el volumen de shots de espresso", de: "Messen des Volumens von Espresso-Shots", nl: "Het meten van het volume van espresso shots" },
          { en: "Creating foam art on cappuccinos", es: "Crear arte de espuma en capuchinos", de: "Schaum-Kunst auf Cappuccinos erstellen", nl: "Schuimkunst maken op cappuccino's" }
        ],
        correct: 0,
        explanation: {
          en: "Cupping is the coffee industry's standardized methodology for evaluating coffee quality and characteristics. Coffee is coarsely ground, steeped in hot water, and tasted using a specific protocol involving slurping to spray the coffee across the palate. Professional cuppers assess attributes like aroma, flavor, acidity, body, balance, aftertaste, sweetness, and defects. The SCA has established precise cupping protocols used worldwide for quality control, purchasing decisions, and competitions.",
          es: "El cupping es la metodología estandarizada de la industria del café para evaluar la calidad y características del café. El café se muele groseramente, se infunde en agua caliente y se degusta usando un protocolo específico que involucra sorber para rociar el café por todo el paladar. Los catadores profesionales evalúan atributos como aroma, sabor, acidez, cuerpo, balance, retrogusto, dulzura y defectos. La SCA ha establecido protocolos de cupping precisos utilizados en todo el mundo para control de calidad, decisiones de compra y competiciones.",
          de: "Cupping ist die standardisierte Methodik der Kaffeeindustrie zur Bewertung von Kaffeequalität und -eigenschaften. Kaffee wird grob gemahlen, in heißem Wasser eingeweicht und nach einem spezifischen Protokoll verkostet, bei dem geschlürft wird, um den Kaffee über den Gaumen zu sprühen. Professionelle Cupper bewerten Attribute wie Aroma, Geschmack, Säure, Körper, Balance, Nachgeschmack, Süße und Defekte. Die SCA hat präzise Cupping-Protokolle etabliert, die weltweit für Qualitätskontrolle, Kaufentscheidungen und Wettbewerbe verwendet werden.",
          nl: "Cupping is de gestandaardiseerde methodologie van de koffie-industrie voor het evalueren van koffiekwaliteit en -kenmerken. Koffie wordt grof gemalen, getrokken in heet water en geproefd met een specifiek protocol waarbij wordt geslurpt om de koffie over het gehemelte te sproeien. Professionele cuppers beoordelen attributen zoals aroma, smaak, zuurgraad, body, balans, nasmaak, zoetheid en defecten. De SCA heeft precieze cupping-protocollen vastgesteld die wereldwijd worden gebruikt voor kwaliteitscontrole, aankoopbeslissingen en competities."
        }
      },
      {
        question: {
          en: "What is the 'Aeropress' and what makes it unique?",
          es: "¿Qué es el 'Aeropress' y qué lo hace único?",
          de: "Was ist die 'Aeropress' und was macht sie einzigartig?",
          nl: "Wat is de 'Aeropress' en wat maakt het uniek?"
        },
        options: [
          { en: "A manual brewing device using air pressure to force water through coffee", es: "Un dispositivo de preparación manual que usa presión de aire para forzar agua a través del café", de: "Ein manuelles Brühgerät, das Luftdruck verwendet, um Wasser durch Kaffee zu drücken", nl: "Een handmatig zetapparaat dat luchtdruk gebruikt om water door koffie te duwen" },
          { en: "An automatic espresso machine", es: "Una máquina de espresso automática", de: "Eine automatische Espressomaschine", nl: "Een automatisch espressoapparaat" },
          { en: "A type of French press", es: "Un tipo de prensa francesa", de: "Eine Art French Press", nl: "Een soort French press" },
          { en: "An electric coffee grinder", es: "Un molinillo de café eléctrico", de: "Eine elektrische Kaffeemühle", nl: "Een elektrische koffiemolen" }
        ],
        correct: 0,
        explanation: {
          en: "The Aeropress, invented by Alan Adler in 2005, is a manual brewing device that uses air pressure to push water through coffee grounds into a cup. It's portable, inexpensive, and versatile, allowing various brew methods (standard, inverted). The pressure brewing produces coffee with rich flavor, low bitterness, and clean taste. It has gained cult following and even has dedicated world championships.",
          es: "El Aeropress, inventado por Alan Adler en 2005, es un dispositivo de preparación manual que usa presión de aire para empujar agua a través del café molido hacia una taza. Es portátil, económico y versátil, permitiendo varios métodos de preparación (estándar, invertido). La preparación a presión produce café con sabor rico, bajo amargor y sabor limpio. Ha ganado seguidores de culto e incluso tiene campeonatos mundiales dedicados.",
          de: "Die Aeropress, 2005 von Alan Adler erfunden, ist ein manuelles Brühgerät, das Luftdruck verwendet, um Wasser durch Kaffeemehl in eine Tasse zu drücken. Sie ist tragbar, preiswert und vielseitig und ermöglicht verschiedene Brühmethoden (Standard, invertiert). Das Druckbrühen produziert Kaffee mit reichem Geschmack, geringer Bitterkeit und sauberem Geschmack. Sie hat eine Kultanhängerschaft gewonnen und hat sogar eigene Weltmeisterschaften.",
          nl: "De Aeropress, uitgevonden door Alan Adler in 2005, is een handmatig zetapparaat dat luchtdruk gebruikt om water door koffiedik in een kopje te duwen. Het is draagbaar, goedkoop en veelzijdig, en maakt verschillende zetmethoden mogelijk (standaard, omgekeerd). Het drukzetten produceert koffie met rijke smaak, lage bitterheid en schone smaak. Het heeft een cultstatus gekregen en heeft zelfs toegewijde wereldkampioenschappen."
        }
      },
      {
        question: {
          en: "What is 'washed' or 'wet' processing in coffee production?",
          es: "¿Qué es el procesamiento 'lavado' o 'húmedo' en la producción de café?",
          de: "Was ist 'gewaschene' oder 'nasse' Verarbeitung in der Kaffeeproduktion?",
          nl: "Wat is 'gewassen' of 'natte' verwerking in koffieproductie?"
        },
        options: [
          { en: "Removing fruit flesh with water and fermenting before drying the beans", es: "Eliminar la pulpa de fruta con agua y fermentar antes de secar los granos", de: "Entfernen von Fruchtfleisch mit Wasser und Fermentieren vor dem Trocknen der Bohnen", nl: "Vruchtenvlees verwijderen met water en fermenteren voor het drogen van de bonen" },
          { en: "Washing roasted beans with water", es: "Lavar granos tostados con agua", de: "Geröstete Bohnen mit Wasser waschen", nl: "Gebrande bonen wassen met water" },
          { en: "Brewing coffee with extra water", es: "Preparar café con agua extra", de: "Kaffee mit extra Wasser brühen", nl: "Koffie zetten met extra water" },
          { en: "Growing coffee in rainy climates", es: "Cultivar café en climas lluviosos", de: "Kaffee in regnerischen Klimazonen anbauen", nl: "Koffie telen in regenklimaaten" }
        ],
        correct: 0,
        explanation: {
          en: "Washed processing removes the coffee cherry's outer fruit layer immediately after harvest using water and mechanical depulpers. The beans, still covered in mucilage, are then fermented in water tanks for 12-48 hours to break down remaining fruit material. After fermentation, beans are washed clean and dried. This method produces bright, clean, acidic flavor profiles with clarity, allowing origin characteristics to shine. It requires significant water resources.",
          es: "El procesamiento lavado elimina la capa externa de fruta de la cereza de café inmediatamente después de la cosecha usando agua y despulpadores mecánicos. Los granos, aún cubiertos de mucílago, se fermentan luego en tanques de agua durante 12-48 horas para descomponer el material de fruta restante. Después de la fermentación, los granos se lavan limpios y se secan. Este método produce perfiles de sabor brillantes, limpios y ácidos con claridad, permitiendo que las características de origen brillen. Requiere recursos hídricos significativos.",
          de: "Gewaschene Verarbeitung entfernt die äußere Fruchtschicht der Kaffeekirsche unmittelbar nach der Ernte mit Wasser und mechanischen Entpulpern. Die Bohnen, noch mit Schleim bedeckt, werden dann 12-48 Stunden in Wassertanks fermentiert, um verbleibendes Fruchtmaterial abzubauen. Nach der Fermentation werden die Bohnen sauber gewaschen und getrocknet. Diese Methode produziert helle, saubere, saure Geschmacksprofile mit Klarheit, die Ursprungseigenschaften hervortreten lassen. Sie erfordert erhebliche Wasserressourcen.",
          nl: "Gewassen verwerking verwijdert de buitenste vruchtenlaag van de koffiebes onmiddellijk na de oogst met water en mechanische ontvelders. De bonen, nog bedekt met mucilage, worden vervolgens 12-48 uur in watertanks gefermenteerd om het resterende vruchtmateriaal af te breken. Na fermentatie worden de bonen schoongewassen en gedroogd. Deze methode produceert heldere, schone, zure smaakprofielen met helderheid, waardoor oorsprongskenmerken kunnen schitteren. Het vereist aanzienlijke waterbronnen."
        }
      },
      {
        question: {
          en: "What is the purpose of 'degassing' after coffee roasting?",
          es: "¿Cuál es el propósito del 'desgasificación' después del tostado del café?",
          de: "Was ist der Zweck des 'Entgasens' nach dem Kaffeerösten?",
          nl: "Wat is het doel van 'ontgassen' na het koffiebranden?"
        },
        options: [
          { en: "Allowing CO2 buildup during roasting to escape for optimal flavor and brewing", es: "Permitir que el CO2 acumulado durante el tostado escape para sabor y preparación óptimos", de: "Ermöglichen, dass während des Röstens aufgebautes CO2 entweicht für optimalen Geschmack und Brühen", nl: "Laten van CO2 opbouw tijdens branden ontsnappen voor optimale smaak en zetten" },
          { en: "Removing oxygen from packaging", es: "Eliminar oxígeno del empaque", de: "Sauerstoff aus der Verpackung entfernen", nl: "Zuurstof uit verpakking verwijderen" },
          { en: "Cooling the beans quickly", es: "Enfriar los granos rápidamente", de: "Die Bohnen schnell abkühlen", nl: "De bonen snel afkoelen" },
          { en: "Adding gas to preserve freshness", es: "Añadir gas para preservar frescura", de: "Gas hinzufügen, um Frische zu bewahren", nl: "Gas toevoegen om versheid te behouden" }
        ],
        correct: 0,
        explanation: {
          en: "During roasting, coffee beans develop significant CO2 gas trapped within their cellular structure. After roasting, beans continue to release this gas for days or weeks—a process called degassing. Brewing immediately after roasting can produce uneven extraction as CO2 interferes with water contact. Coffee typically rests 12-72 hours for espresso or 3-7 days for filter coffee before reaching optimal flavor. Specialty roasters use one-way valve bags to allow gas escape while preventing oxygen entry.",
          es: "Durante el tostado, los granos de café desarrollan gas CO2 significativo atrapado dentro de su estructura celular. Después del tostado, los granos continúan liberando este gas durante días o semanas—un proceso llamado desgasificación. Preparar inmediatamente después del tostado puede producir extracción desigual ya que el CO2 interfiere con el contacto del agua. El café típicamente reposa 12-72 horas para espresso o 3-7 días para café de filtro antes de alcanzar sabor óptimo. Los tostadores especializados usan bolsas con válvula unidireccional para permitir escape de gas mientras previenen entrada de oxígeno.",
          de: "Während des Röstens entwickeln Kaffeebohnen erhebliches CO2-Gas, das in ihrer Zellstruktur eingeschlossen ist. Nach dem Rösten setzen Bohnen dieses Gas tagelang oder wochenlang frei—ein Prozess namens Entgasen. Unmittelbares Brühen nach dem Rösten kann ungleichmäßige Extraktion erzeugen, da CO2 den Wasserkontakt stört. Kaffee ruht typischerweise 12-72 Stunden für Espresso oder 3-7 Tage für Filterkaffee, bevor er optimalen Geschmack erreicht. Spezialitätenröster verwenden Einwegventilbeutel, um Gasentweichen zu ermöglichen, während Sauerstoffeintritt verhindert wird.",
          nl: "Tijdens het branden ontwikkelen koffiebonen aanzienlijk CO2-gas dat vastzit in hun cellulaire structuur. Na branden blijven bonen dit gas dagen of weken vrijgeven—een proces genaamd ontgassing. Onmiddellijk zetten na branden kan ongelijkmatige extractie produceren omdat CO2 interfereert met watercontact. Koffie rust typisch 12-72 uur voor espresso of 3-7 dagen voor filterkoffie voordat optimale smaak wordt bereikt. Specialty branders gebruiken eenrichtingsklepzakken om gasontsnapping toe te staan terwijl zuurstofbinnenkomst wordt voorkomen."
        }
      },
      {
        question: {
          en: "What altitude range is considered ideal for high-quality Arabica coffee cultivation?",
          es: "¿Qué rango de altitud se considera ideal para el cultivo de café Arábica de alta calidad?",
          de: "Welcher Höhenbereich gilt als ideal für den Anbau von hochwertigem Arabica-Kaffee?",
          nl: "Welk hoogtebereik wordt als ideaal beschouwd voor hoogwaardige Arabica-koffieteelt?"
        },
        options: [
          { en: "0-500 meters (0-1,640 feet)", es: "0-500 metros (0-1,640 pies)", de: "0-500 Meter (0-1,640 Fuß)", nl: "0-500 meter (0-1,640 voet)" },
          { en: "600-900 meters (1,970-2,950 feet)", es: "600-900 metros (1,970-2,950 pies)", de: "600-900 Meter (1,970-2,950 Fuß)", nl: "600-900 meter (1,970-2,950 voet)" },
          { en: "1,200-2,200 meters (3,940-7,220 feet)", es: "1,200-2,200 metros (3,940-7,220 pies)", de: "1,200-2,200 Meter (3,940-7,220 Fuß)", nl: "1,200-2,200 meter (3,940-7,220 voet)" },
          { en: "2,500-3,000 meters (8,200-9,840 feet)", es: "2,500-3,000 metros (8,200-9,840 pies)", de: "2,500-3,000 Meter (8,200-9,840 Fuß)", nl: "2,500-3,000 meter (8,200-9,840 voet)" }
        ],
        correct: 2,
        explanation: {
          en: "High-quality Arabica coffee thrives at 1,200-2,200 meters (roughly 4,000-7,000 feet) elevation. Higher altitudes provide cooler temperatures, causing cherries to mature more slowly. This extended maturation period allows more complex sugars and flavors to develop within the bean. High-altitude coffees typically exhibit brighter acidity, more complex flavor profiles, and denser beans. Coffee grown above 1,500m is often labeled 'strictly high grown' (SHG) or 'strictly hard bean' (SHB), indicating premium quality.",
          es: "El café Arábica de alta calidad prospera a una elevación de 1,200-2,200 metros (aproximadamente 4,000-7,000 pies). Las altitudes más altas proporcionan temperaturas más frescas, causando que las cerezas maduren más lentamente. Este período de maduración extendido permite que se desarrollen azúcares y sabores más complejos dentro del grano. Los cafés de alta altitud típicamente exhiben acidez más brillante, perfiles de sabor más complejos y granos más densos. El café cultivado por encima de 1,500m a menudo se etiqueta como 'estrictamente de altura' (SHG) o 'estrictamente grano duro' (SHB), indicando calidad premium.",
          de: "Hochwertiger Arabica-Kaffee gedeiht in 1,200-2,200 Metern (ungefähr 4,000-7,000 Fuß) Höhe. Höhere Lagen bieten kühlere Temperaturen, wodurch Kirschen langsamer reifen. Diese verlängerte Reifezeit ermöglicht die Entwicklung komplexerer Zucker und Aromen in der Bohne. Hochland-Kaffees zeigen typischerweise hellere Säure, komplexere Geschmacksprofile und dichtere Bohnen. Kaffee, der über 1,500m angebaut wird, wird oft als 'strictly high grown' (SHG) oder 'strictly hard bean' (SHB) bezeichnet, was Premium-Qualität anzeigt.",
          nl: "Hoogwaardige Arabica-koffie gedijt op 1,200-2,200 meter (ongeveer 4,000-7,000 voet) hoogte. Hogere hoogten bieden koelere temperaturen, waardoor kersen langzamer rijpen. Deze verlengde rijpingsperiode zorgt ervoor dat complexere suikers en smaken zich in de boon ontwikkelen. Hooglanddkoffies vertonen typisch helderder zuur, complexere smaakprofielen en dichtere bonen. Koffie geteeld boven 1,500m wordt vaak gelabeld als 'strictly high grown' (SHG) of 'strictly hard bean' (SHB), wat premiumkwaliteit aangeeft."
        }
      },
      {
        question: {
          en: "What is the 'coffee belt' or 'bean belt'?",
          es: "¿Qué es el 'cinturón del café' o 'cinturón del grano'?",
          de: "Was ist der 'Kaffeegürtel' oder 'Bohnengürtel'?",
          nl: "Wat is de 'koffiegordel' of 'bonengordel'?"
        },
        options: [
          { en: "The geographic region between the Tropics of Cancer and Capricorn where coffee grows", es: "La región geográfica entre los Trópicos de Cáncer y Capricornio donde crece el café", de: "Die geografische Region zwischen den Wendekreisen von Krebs und Steinbock, wo Kaffee wächst", nl: "De geografische regio tussen de Kreeftskeerkring en Steenbokskeerkring waar koffie groeit" },
          { en: "A type of coffee packaging", es: "Un tipo de empaque de café", de: "Eine Art Kaffeeverpackung", nl: "Een soort koffieverpakking" },
          { en: "A coffee farming tool", es: "Una herramienta de cultivo de café", de: "Ein Kaffeeanbau-Werkzeug", nl: "Een koffieteeltgereedschap" },
          { en: "The roasting temperature range", es: "El rango de temperatura de tostado", de: "Der Rösttemperaturbereich", nl: "Het brandtemperatuurbereik" }
        ],
        correct: 0,
        explanation: {
          en: "The coffee belt refers to the equatorial region between the Tropics of Cancer (23.5°N) and Capricorn (23.5°S) where coffee cultivation is viable. This zone provides the ideal conditions coffee plants require: consistent temperatures (15-24°C), adequate rainfall, proper altitude, and distinct wet/dry seasons. Over 70 countries within this belt produce coffee, including major producers like Brazil, Colombia, Ethiopia, Vietnam, and Indonesia. Coffee cannot be commercially grown outside this zone due to temperature requirements.",
          es: "El cinturón del café se refiere a la región ecuatorial entre los Trópicos de Cáncer (23.5°N) y Capricornio (23.5°S) donde el cultivo de café es viable. Esta zona proporciona las condiciones ideales que requieren las plantas de café: temperaturas consistentes (15-24°C), lluvia adecuada, altitud apropiada y estaciones húmedas/secas distintas. Más de 70 países dentro de este cinturón producen café, incluidos productores importantes como Brasil, Colombia, Etiopía, Vietnam e Indonesia. El café no puede cultivarse comercialmente fuera de esta zona debido a los requisitos de temperatura.",
          de: "Der Kaffeegürtel bezieht sich auf die äquatoriale Region zwischen den Wendekreisen von Krebs (23,5°N) und Steinbock (23,5°S), wo Kaffeeanbau möglich ist. Diese Zone bietet die idealen Bedingungen, die Kaffeepflanzen benötigen: konstante Temperaturen (15-24°C), ausreichende Niederschläge, richtige Höhenlage und unterschiedliche Regen-/Trockenzeiten. Über 70 Länder in diesem Gürtel produzieren Kaffee, darunter große Produzenten wie Brasilien, Kolumbien, Äthiopien, Vietnam und Indonesien. Kaffee kann aufgrund der Temperaturanforderungen nicht kommerziell außerhalb dieser Zone angebaut werden.",
          nl: "De koffiegordel verwijst naar de equatoriale regio tussen de Kreeftskeerkring (23,5°N) en Steenbokskeerkring (23,5°S) waar koffieteelt levensvatbaar is. Deze zone biedt de ideale omstandigheden die koffieplanten nodig hebben: consistente temperaturen (15-24°C), voldoende regenval, juiste hoogte en verschillende natte/droge seizoenen. Meer dan 70 landen binnen deze gordel produceren koffie, inclusief grote producenten zoals Brazilië, Colombia, Ethiopië, Vietnam en Indonesië. Koffie kan niet commercieel buiten deze zone worden geteeld vanwege temperatuurvereisten."
        }
      },
      {
        question: {
          en: "What distinguishes a 'ristretto' from a regular espresso?",
          es: "¿Qué distingue un 'ristretto' de un espresso regular?",
          de: "Was unterscheidet einen 'Ristretto' von einem normalen Espresso?",
          nl: "Wat onderscheidt een 'ristretto' van een gewone espresso?"
        },
        options: [
          { en: "Shorter extraction time and less water, producing a sweeter, more concentrated shot", es: "Tiempo de extracción más corto y menos agua, produciendo un shot más dulce y concentrado", de: "Kürzere Extraktionszeit und weniger Wasser, was einen süßeren, konzentrierteren Shot produziert", nl: "Kortere extractietijd en minder water, wat een zoetere, meer geconcentreerde shot produceert" },
          { en: "Longer extraction with more water", es: "Extracción más larga con más agua", de: "Längere Extraktion mit mehr Wasser", nl: "Langere extractie met meer water" },
          { en: "Using decaffeinated beans", es: "Usar granos descafeinados", de: "Verwendung von entkoffeinierten Bohnen", nl: "Gebruik van cafeïnevrije bonen" },
          { en: "Made with cold water", es: "Hecho con agua fría", de: "Mit kaltem Wasser gemacht", nl: "Gemaakt met koud water" }
        ],
        correct: 0,
        explanation: {
          en: "Ristretto (Italian for 'restricted') uses the same amount of ground coffee as espresso but extracts with roughly half the water (15-20ml vs 25-30ml) in a shorter time (15-20 seconds). This restricts extraction to the sweetest, most desirable compounds that dissolve first, while leaving behind bitter components that extract later. The result is intensely flavorful, syrupy, sweet shot with less bitterness and caffeine than regular espresso. It's popular in milk drinks like flat whites.",
          es: "Ristretto (italiano para 'restringido') usa la misma cantidad de café molido que el espresso pero extrae con aproximadamente la mitad del agua (15-20ml vs 25-30ml) en un tiempo más corto (15-20 segundos). Esto restringe la extracción a los compuestos más dulces y deseables que se disuelven primero, mientras deja atrás componentes amargos que se extraen después. El resultado es un shot intensamente sabroso, con textura de jarabe, dulce con menos amargor y cafeína que el espresso regular. Es popular en bebidas con leche como los flat whites.",
          de: "Ristretto (Italienisch für 'eingeschränkt') verwendet die gleiche Menge gemahlenen Kaffee wie Espresso, extrahiert aber mit etwa der Hälfte des Wassers (15-20ml vs 25-30ml) in kürzerer Zeit (15-20 Sekunden). Dies beschränkt die Extraktion auf die süßesten, wünschenswertesten Verbindungen, die sich zuerst auflösen, während bittere Komponenten, die später extrahiert werden, zurückbleiben. Das Ergebnis ist ein intensiv aromatischer, sirupiger, süßer Shot mit weniger Bitterkeit und Koffein als normaler Espresso. Er ist beliebt in Milchgetränken wie Flat Whites.",
          nl: "Ristretto (Italiaans voor 'beperkt') gebruikt dezelfde hoeveelheid gemalen koffie als espresso maar extraheert met ongeveer de helft van het water (15-20ml vs 25-30ml) in kortere tijd (15-20 seconden). Dit beperkt extractie tot de zoetste, meest wenselijke verbindingen die eerst oplossen, terwijl bittere componenten die later extraheren achterblijven. Het resultaat is een intens smaakvolle, stroperige, zoete shot met minder bitterheid en cafeïne dan gewone espresso. Het is populair in melkdranken zoals flat whites."
        }
      },
      {
        question: {
          en: "What is the difference between a 'direct trade' and 'fair trade' coffee?",
          es: "¿Cuál es la diferencia entre un café de 'comercio directo' y 'comercio justo'?",
          de: "Was ist der Unterschied zwischen 'Direct Trade' und 'Fair Trade' Kaffee?",
          nl: "Wat is het verschil tussen 'direct trade' en 'fair trade' koffie?"
        },
        options: [
          { en: "Direct trade involves roasters buying directly from farmers; fair trade is a certified program with minimum prices", es: "Comercio directo involucra tostadores comprando directamente a agricultores; comercio justo es un programa certificado con precios mínimos", de: "Direct Trade beinhaltet Röster, die direkt von Bauern kaufen; Fair Trade ist ein zertifiziertes Programm mit Mindestpreisen", nl: "Direct trade houdt in dat branders direct bij boeren kopen; fair trade is een gecertificeerd programma met minimumprijzen" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Direct trade is cheaper for consumers", es: "Comercio directo es más barato para consumidores", de: "Direct Trade ist billiger für Verbraucher", nl: "Direct trade is goedkoper voor consumenten" },
          { en: "Fair trade only applies to organic coffee", es: "Comercio justo solo aplica a café orgánico", de: "Fair Trade gilt nur für Bio-Kaffee", nl: "Fair trade geldt alleen voor biologische koffie" }
        ],
        correct: 0,
        explanation: {
          en: "Fair Trade is a formal certification system with set standards, guaranteed minimum prices, and premium payments to cooperatives, verified by third parties. Direct Trade is an informal relationship where roasters purchase directly from farmers or mills, often paying above fair trade prices, building long-term partnerships, and emphasizing quality and transparency. Direct trade offers potentially higher farmer payments and quality focus, but lacks standardized oversight. Both aim to improve farmer livelihoods but use different approaches.",
          es: "Comercio Justo es un sistema de certificación formal con estándares establecidos, precios mínimos garantizados y pagos de prima a cooperativas, verificados por terceros. Comercio Directo es una relación informal donde los tostadores compran directamente de agricultores o molinos, a menudo pagando por encima de precios de comercio justo, construyendo asociaciones a largo plazo y enfatizando calidad y transparencia. El comercio directo ofrece pagos potencialmente más altos a agricultores y enfoque en calidad, pero carece de supervisión estandarizada. Ambos buscan mejorar los medios de vida de los agricultores pero usan enfoques diferentes.",
          de: "Fair Trade ist ein formelles Zertifizierungssystem mit festgelegten Standards, garantierten Mindestpreisen und Prämienzahlungen an Kooperativen, verifiziert von Dritten. Direct Trade ist eine informelle Beziehung, bei der Röster direkt von Bauern oder Mühlen kaufen, oft über Fair-Trade-Preisen zahlen, langfristige Partnerschaften aufbauen und Qualität und Transparenz betonen. Direct Trade bietet potenziell höhere Zahlungen an Bauern und Qualitätsfokus, aber fehlt standardisierte Aufsicht. Beide zielen darauf ab, die Lebensgrundlagen der Bauern zu verbessern, verwenden aber unterschiedliche Ansätze.",
          nl: "Fair Trade is een formeel certificeringssysteem met vastgestelde normen, gegarandeerde minimumprijzen en premiebetalingen aan coöperaties, geverifieerd door derden. Direct Trade is een informele relatie waarbij branders rechtstreeks bij boeren of molens kopen, vaak meer betalen dan fair trade prijzen, langetermijnpartnerschappen opbouwen en kwaliteit en transparantie benadrukken. Direct trade biedt potentieel hogere betalingen aan boeren en kwaliteitsfocus, maar mist gestandaardiseerd toezicht. Beide beogen het verbeteren van het levensonderhoud van boeren maar gebruiken verschillende benaderingen."
        }
      },
      {
        question: {
          en: "What is 'second crack' in coffee roasting?",
          es: "¿Qué es el 'segundo crack' en el tostado de café?",
          de: "Was ist der 'zweite Crack' beim Kaffeerösten?",
          nl: "Wat is de 'tweede crack' bij koffiebranden?"
        },
        options: [
          { en: "A quieter popping sound occurring around 225°C when bean structure breaks down further", es: "Un sonido de estallido más silencioso que ocurre alrededor de 225°C cuando la estructura del grano se descompone más", de: "Ein leiseres Knallgeräusch, das bei etwa 225°C auftritt, wenn die Bohnenstruktur weiter zerfällt", nl: "Een stiller knappend geluid dat optreedt rond 225°C wanneer de bonenstructuur verder afbreekt" },
          { en: "When the roaster malfunctions twice", es: "Cuando el tostador falla dos veces", de: "Wenn der Röster zweimal versagt", nl: "Wanneer de brander tweemaal defect raakt" },
          { en: "The second batch of coffee roasted", es: "El segundo lote de café tostado", de: "Die zweite Röstcharge Kaffee", nl: "De tweede batch koffie gebrand" },
          { en: "A defect in beans", es: "Un defecto en los granos", de: "Ein Defekt in Bohnen", nl: "Een defect in bonen" }
        ],
        correct: 0,
        explanation: {
          en: "Second crack occurs around 225°C (437°F), after first crack, when bean cellular structure begins breaking down more dramatically. It produces a quieter, faster snapping sound compared to first crack's loud pops. At this stage, oils migrate to the bean surface, caramelization intensifies, and origin characteristics diminish as roast flavors dominate. Medium-dark to dark roasts are typically finished in or just past second crack. Going too far past second crack risks producing burnt, carbonized flavors.",
          es: "El segundo crack ocurre alrededor de 225°C (437°F), después del primer crack, cuando la estructura celular del grano comienza a descomponerse más dramáticamente. Produce un sonido de chasquido más silencioso y rápido en comparación con los fuertes estallidos del primer crack. En esta etapa, los aceites migran a la superficie del grano, la caramelización se intensifica y las características de origen disminuyen mientras los sabores de tostado dominan. Los tuestes medio-oscuros a oscuros típicamente se finalizan en o justo después del segundo crack. Ir demasiado lejos después del segundo crack arriesga producir sabores quemados y carbonizados.",
          de: "Der zweite Crack tritt bei etwa 225°C (437°F) auf, nach dem ersten Crack, wenn die zelluläre Struktur der Bohne dramatischer zerfällt. Er produziert ein leiseres, schnelleres Knackgeräusch im Vergleich zu den lauten Knallen des ersten Cracks. In diesem Stadium wandern Öle an die Bohnenoberfläche, die Karamellisierung intensiviert sich, und Ursprungseigenschaften nehmen ab, während Röstaromen dominieren. Mittel-dunkle bis dunkle Röstungen werden typischerweise im oder kurz nach dem zweiten Crack beendet. Zu weit über den zweiten Crack hinaus zu gehen, riskiert verbrannte, verkokste Aromen zu produzieren.",
          nl: "Tweede crack vindt plaats rond 225°C (437°F), na eerste crack, wanneer de cellulaire structuur van de boon dramatischer begint af te breken. Het produceert een stiller, sneller knappend geluid vergeleken met de luide knallen van eerste crack. In dit stadium migreren oliën naar het bonenoppervlak, karamellisatie intensiveert, en oorsprongskenmerken verminderen terwijl brandsmaak domineert. Middel-donker tot donkere brandingen worden typisch beëindigd in of net na tweede crack. Te ver voorbij tweede crack gaan riskeert verbrande, verkoolde smaken te produceren."
        }
      },
      {
        question: {
          en: "What is a 'lungo' and how does it differ from espresso?",
          es: "¿Qué es un 'lungo' y en qué se diferencia del espresso?",
          de: "Was ist ein 'Lungo' und wie unterscheidet er sich von Espresso?",
          nl: "Wat is een 'lungo' en hoe verschilt het van espresso?"
        },
        options: [
          { en: "A longer extraction with more water (50-60ml), producing a more bitter, diluted shot", es: "Una extracción más larga con más agua (50-60ml), produciendo un shot más amargo y diluido", de: "Eine längere Extraktion mit mehr Wasser (50-60ml), die einen bitteren, verdünnten Shot produziert", nl: "Een langere extractie met meer water (50-60ml), wat een bitterder, verdunde shot produceert" },
          { en: "A shorter, sweeter shot", es: "Un shot más corto y dulce", de: "Ein kürzerer, süßerer Shot", nl: "Een kortere, zoetere shot" },
          { en: "Espresso with milk", es: "Espresso con leche", de: "Espresso mit Milch", nl: "Espresso met melk" },
          { en: "Cold espresso", es: "Espresso frío", de: "Kalter Espresso", nl: "Koude espresso" }
        ],
        correct: 0,
        explanation: {
          en: "Lungo (Italian for 'long') uses the same amount of ground coffee as espresso but extracts with roughly double the water (50-60ml vs 25-30ml) over 45-60 seconds. This extended extraction pulls out more compounds, including bitter ones that normally remain in the puck. The result is a larger, more diluted, more bitter drink than espresso, with less crema. Unlike an Americano (espresso + hot water), a lungo's water passes through the grounds, extracting different flavor compounds.",
          es: "Lungo (italiano para 'largo') usa la misma cantidad de café molido que el espresso pero extrae con aproximadamente el doble de agua (50-60ml vs 25-30ml) durante 45-60 segundos. Esta extracción extendida extrae más compuestos, incluidos los amargos que normalmente permanecen en el disco. El resultado es una bebida más grande, más diluida y más amarga que el espresso, con menos crema. A diferencia de un Americano (espresso + agua caliente), el agua de un lungo pasa a través del molido, extrayendo diferentes compuestos de sabor.",
          de: "Lungo (Italienisch für 'lang') verwendet die gleiche Menge gemahlenen Kaffee wie Espresso, extrahiert aber mit etwa doppelt so viel Wasser (50-60ml vs 25-30ml) über 45-60 Sekunden. Diese verlängerte Extraktion zieht mehr Verbindungen heraus, einschließlich bitterer, die normalerweise im Puck verbleiben. Das Ergebnis ist ein größeres, verdünnteres, bittereres Getränk als Espresso, mit weniger Crema. Im Gegensatz zu einem Americano (Espresso + heißes Wasser) fließt beim Lungo das Wasser durch das Mehl und extrahiert verschiedene Geschmacksverbindungen.",
          nl: "Lungo (Italiaans voor 'lang') gebruikt dezelfde hoeveelheid gemalen koffie als espresso maar extraheert met ongeveer het dubbele water (50-60ml vs 25-30ml) over 45-60 seconden. Deze verlengde extractie trekt meer verbindingen eruit, inclusief bittere die normaal in de puck blijven. Het resultaat is een grotere, meer verdunde, bitterder drank dan espresso, met minder crema. In tegenstelling tot een Americano (espresso + heet water) gaat bij een lungo het water door het gemalen, wat verschillende smaakverbindingen extraheert."
        }
      },
      {
        question: {
          en: "What is the Pacamara coffee varietal?",
          es: "¿Qué es la variedad de café Pacamara?",
          de: "Was ist die Pacamara-Kaffeevarietät?",
          nl: "Wat is de Pacamara koffievariëteit?"
        },
        options: [
          { en: "A hybrid of Pacas and Maragogype with large beans and complex fruity flavors", es: "Un híbrido de Pacas y Maragogype con granos grandes y sabores frutales complejos", de: "Ein Hybrid aus Pacas und Maragogype mit großen Bohnen und komplexen fruchtigen Aromen", nl: "Een hybride van Pacas en Maragogype met grote bonen en complexe fruitige smaken" },
          { en: "A wild Ethiopian variety", es: "Una variedad silvestre etíope", de: "Eine wilde äthiopische Sorte", nl: "Een wilde Ethiopische variëteit" },
          { en: "A disease-resistant Brazilian cultivar", es: "Un cultivar brasileño resistente a enfermedades", de: "Eine krankheitsresistente brasilianische Sorte", nl: "Een ziekteresistente Braziliaanse cultivar" },
          { en: "A low-altitude robusta variety", es: "Una variedad robusta de baja altitud", de: "Eine Tiefland-Robusta-Sorte", nl: "Een laagte robusta variëteit" }
        ],
        correct: 0,
        explanation: {
          en: "Pacamara was developed in El Salvador in 1958 by crossing compact Pacas with giant-beaned Maragogype. It combines large bean size (from Maragogype) with good productivity (from Pacas). When grown at high altitudes, Pacamara produces exceptional cup quality with complex fruit flavors, bright acidity, and distinctive floral notes. It's particularly prized in El Salvador, Guatemala, and Nicaragua. The variety has won numerous Cup of Excellence competitions, establishing it as a premium specialty coffee.",
          es: "Pacamara fue desarrollada en El Salvador en 1958 cruzando Pacas compacto con Maragogype de granos gigantes. Combina tamaño de grano grande (de Maragogype) con buena productividad (de Pacas). Cuando se cultiva a grandes altitudes, Pacamara produce calidad de taza excepcional con sabores frutales complejos, acidez brillante y notas florales distintivas. Es particularmente apreciada en El Salvador, Guatemala y Nicaragua. La variedad ha ganado numerosas competiciones Cup of Excellence, estableciéndola como un café especial premium.",
          de: "Pacamara wurde 1958 in El Salvador durch Kreuzung von kompaktem Pacas mit riesenbohnigem Maragogype entwickelt. Sie kombiniert große Bohnengröße (von Maragogype) mit guter Produktivität (von Pacas). In großen Höhen angebaut, produziert Pacamara außergewöhnliche Tassenqualität mit komplexen Fruchtaromen, heller Säure und unverwechselbaren floralen Noten. Sie wird besonders in El Salvador, Guatemala und Nicaragua geschätzt. Die Sorte hat zahlreiche Cup of Excellence Wettbewerbe gewonnen und sich als Premium-Spezialitätenkaffee etabliert.",
          nl: "Pacamara werd in 1958 in El Salvador ontwikkeld door compacte Pacas te kruisen met reuzen-bonenMaragogype. Het combineert grote bonengrootte (van Maragogype) met goede productiviteit (van Pacas). Wanneer geteeld op grote hoogte, produceert Pacamara uitzonderlijke kopkwaliteit met complexe fruitsmaken, heldere zuurgraad en onderscheidende bloemige noten. Het is bijzonder gewaardeerd in El Salvador, Guatemala en Nicaragua. De variëteit heeft talloze Cup of Excellence competities gewonnen, waardoor het zich heeft gevestigd als premium specialty koffie."
        }
      },
      {
        question: {
          en: "What is the purpose of a 'distribution tool' or 'leveler' in espresso preparation?",
          es: "¿Cuál es el propósito de una 'herramienta de distribución' o 'nivelador' en la preparación de espresso?",
          de: "Was ist der Zweck eines 'Verteilungswerkzeugs' oder 'Nivelliergeräts' bei der Espresso-Zubereitung?",
          nl: "Wat is het doel van een 'verdelingsgereedschap' of 'nivelleerder' bij espressobereiding?"
        },
        options: [
          { en: "Evenly distributing coffee grounds in the portafilter before tamping to prevent channeling", es: "Distribuir uniformemente el café molido en el portafiltro antes de apisonar para prevenir canalización", de: "Gleichmäßiges Verteilen von Kaffeemehl im Siebträger vor dem Tampern zur Verhinderung von Channeling", nl: "Gelijkmatig verdelen van koffiedik in de filterdrager voor het aandrukken om channeling te voorkomen" },
          { en: "Measuring the coffee dose", es: "Medir la dosis de café", de: "Die Kaffeemenge messen", nl: "De koffiedosis meten" },
          { en: "Cleaning the portafilter", es: "Limpiar el portafiltro", de: "Den Siebträger reinigen", nl: "De filterdrager schoonmaken" },
          { en: "Heating the espresso machine", es: "Calentar la máquina de espresso", de: "Die Espressomaschine heizen", nl: "Het espressoapparaat verwarmen" }
        ],
        correct: 0,
        explanation: {
          en: "Distribution tools (WDT tools, levelers, or spinners) ensure even coffee distribution in the portafilter basket before tamping. Uneven distribution creates density variations that cause channeling—where water finds paths of least resistance. Common distribution methods include the Weiss Distribution Technique (WDT) using thin needles to break clumps and distribute grounds, or spinning levelers that redistribute coffee horizontally. Proper distribution combined with even tamping produces uniform extraction and prevents sour-bitter imbalances caused by simultaneous under- and over-extraction.",
          es: "Las herramientas de distribución (herramientas WDT, niveladores o giradores) aseguran distribución uniforme de café en la canasta del portafiltro antes de apisonar. La distribución desigual crea variaciones de densidad que causan canalización—donde el agua encuentra caminos de menor resistencia. Los métodos de distribución comunes incluyen la Técnica de Distribución Weiss (WDT) usando agujas finas para romper grumos y distribuir molido, o niveladores giratorios que redistribuyen café horizontalmente. La distribución adecuada combinada con apisonado uniforme produce extracción uniforme y previene desequilibrios agrio-amargos causados por sub y sobreextracción simultáneas.",
          de: "Verteilungswerkzeuge (WDT-Tools, Nivellierer oder Spinner) gewährleisten gleichmäßige Kaffeeverteilung im Siebträgerkorb vor dem Tampern. Ungleichmäßige Verteilung erzeugt Dichtevariationen, die Channeling verursachen—wobei Wasser Wege des geringsten Widerstands findet. Gängige Verteilungsmethoden umfassen die Weiss Distribution Technique (WDT) mit dünnen Nadeln zum Aufbrechen von Klumpen und Verteilen des Mehls, oder rotierende Nivellierer, die Kaffee horizontal umverteilen. Richtige Verteilung kombiniert mit gleichmäßigem Tampern produziert gleichmäßige Extraktion und verhindert sauer-bittere Ungleichgewichte durch gleichzeitige Unter- und Überextraktion.",
          nl: "Verdelingsgereedschappen (WDT-tools, nivelleerders of draaitoestellen) zorgen voor gelijkmatige koffieverdeling in het filterdrager mandje voor het aandrukken. Ongelijke verdeling creëert dichtheidsvariaties die channeling veroorzaken—waar water paden van minste weerstand vindt. Gebruikelijke verdelingsmethoden omvatten de Weiss Distribution Technique (WDT) met dunne naalden om klonten te breken en poeder te verdelen, of draaiende nivelleerders die koffie horizontaal herverdelen. Goede verdeling gecombineerd met gelijkmatig aandrukken produceert uniforme extractie en voorkomt zuur-bitter onevenwichtigheden veroorzaakt door gelijktijdige onder- en overextractie."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
