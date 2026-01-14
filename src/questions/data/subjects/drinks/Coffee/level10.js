// Coffee Quiz - Level 10
(function() {
  const level10 = {
    name: {
          "en": "Coffee Expert Level",
          "es": "Nivel Experto en Café",
          "de": "Kaffee-Experten Stufe",
          "nl": "Koffie Expert Level"
    },
    questions: [
      {
        question: {
                  "en": "What is the origin and significance of the Cup of Excellence competition in specialty coffee?",
                  "es": "¿Cuál es el origen y la importancia de la competencia Cup of Excellence en café de especialidad?",
                  "de": "Was ist der Ursprung und die Bedeutung des Cup of Excellence Wettbewerbs im Specialty Coffee?",
                  "nl": "Wat is de oorsprong en betekenis van de Cup of Excellence competitie in specialty koffie?"
        },
        options: [
        {
                  "en": "An American coffee brewing competition from the 1980s",
                  "es": "Una competencia americana de preparación de café de los años 80",
                  "de": "Ein amerikanischer Kaffeebrüh-Wettbewerb aus den 1980ern",
                  "nl": "Een Amerikaanse koffiezet competitie uit de jaren 80"
        },
        {
                  "en": "A European coffee cupping championship established in 1995",
                  "es": "Un campeonato europeo de catación de café establecido en 1995",
                  "de": "Eine europäische Kaffee-Cupping-Meisterschaft, die 1995 etabliert wurde",
                  "nl": "Een Europees koffiecupping kampioenschap opgericht in 1995"
        },
        {
                  "en": "A competition started in Brazil in 1999 to identify and auction the highest quality coffee lots",
                  "es": "Una competencia iniciada en Brasil en 1999 para identificar y subastar los lotes de café de mayor calidad",
                  "de": "Ein in Brasilien 1999 gestarteter Wettbewerb zur Identifizierung und Versteigerung der höchsten Kaffeequalitäten",
                  "nl": "Een competitie gestart in Brazilië in 1999 om de hoogste kwaliteit koffie loten te identificeren en veilen"
        },
        {
                  "en": "A global barista championship started by Starbucks",
                  "es": "Un campeonato mundial de baristas iniciado por Starbucks",
                  "de": "Eine globale Barista-Meisterschaft, die von Starbucks gestartet wurde",
                  "nl": "Een wereldwijd barista kampioenschap gestart door Starbucks"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Cup of Excellence was launched in Brazil in 1999 as the first international competition designed to identify the very best coffees from a country and auction them to the highest bidders. Scoring above 87 points earns Cup of Excellence status. This program revolutionized specialty coffee by providing premium prices directly to quality-focused farmers, creating incentives for excellence, and establishing traceability from farm to cup. It has since expanded to many coffee-producing countries and serves as a model for quality-based pricing in the coffee industry.",
                  "es": "La Cup of Excellence fue lanzada en Brasil en 1999 como la primera competencia internacional diseñada para identificar los mejores cafés de un país y subastarlos al mejor postor. Obtener más de 87 puntos otorga el estatus Cup of Excellence. Este programa revolucionó el café de especialidad al proporcionar precios premium directamente a los agricultores enfocados en calidad, creando incentivos para la excelencia y estableciendo trazabilidad de la finca a la taza. Desde entonces se ha expandido a muchos países productores de café y sirve como modelo para la fijación de precios basada en calidad en la industria del café.",
                  "de": "Der Cup of Excellence wurde 1999 in Brasilien als erste internationale Konkurrenz ins Leben gerufen, um die allerbesten Kaffees eines Landes zu identifizieren und an Höchstbietende zu versteigern. Punktzahlen über 87 erhalten Cup of Excellence Status. Dieses Programm revolutionierte Specialty Coffee durch die direkte Bereitstellung von Premium-Preisen an qualitätsfokussierte Bauern, schuf Anreize für Exzellenz und etablierte Rückverfolgbarkeit von der Farm zur Tasse. Es hat sich seitdem auf viele Kaffee-produzierende Länder ausgeweitet und dient als Modell für qualitätsbasierte Preisgestaltung in der Kaffeeindustrie.",
                  "nl": "De Cup of Excellence werd gelanceerd in Brazilië in 1999 als de eerste internationale competitie ontworpen om de allerbeste koffies van een land te identificeren en te veilen aan de hoogste bieders. Scoren boven 87 punten verdient Cup of Excellence status. Dit programma revolutioneerde specialty koffie door premium prijzen direct aan kwaliteitsgerichte boeren te bieden, prikkels voor excellentie te creëren en traceerbaarheid van boerderij tot kop te vestigen. Het is sindsdien uitgebreid naar vele koffieproducerende landen en dient als model voor kwaliteitsgebaseerde prijsstelling in de koffie-industrie."
        }
      },
      {
        question: {
                  "en": "What is anaerobic fermentation in coffee processing and how does it affect flavor?",
                  "es": "¿Qué es la fermentación anaeróbica en el procesamiento del café y cómo afecta el sabor?",
                  "de": "Was ist anaerobe Fermentation bei der Kaffeeverarbeitung und wie beeinflusst sie den Geschmack?",
                  "nl": "Wat is anaerobe fermentatie bij koffieverwerking en hoe beïnvloedt het de smaak?"
        },
        options: [
        {
                  "en": "Fermentation without oxygen, creating unique fruity and wine-like flavors",
                  "es": "Fermentación sin oxígeno, creando sabores únicos afrutados y similares al vino",
                  "de": "Fermentation ohne Sauerstoff, erzeugt einzigartige fruchtige und weinähnliche Aromen",
                  "nl": "Fermentatie zonder zuurstof, wat unieke fruitige en wijnachtige smaken creëert"
        },
        {
                  "en": "Cold fermentation below 10°C",
                  "es": "Fermentación fría por debajo de 10°C",
                  "de": "Kalte Fermentation unter 10°C",
                  "nl": "Koude fermentatie onder 10°C"
        },
        {
                  "en": "Fermentation using only natural yeasts",
                  "es": "Fermentación usando solo levaduras naturales",
                  "de": "Fermentation nur mit natürlichen Hefen",
                  "nl": "Fermentatie met alleen natuurlijke gisten"
        },
        {
                  "en": "Fermentation with added bacteria cultures",
                  "es": "Fermentación con cultivos de bacterias añadidos",
                  "de": "Fermentation mit zugesetzten Bakterienkulturen",
                  "nl": "Fermentatie met toegevoegde bacterieculturen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Anaerobic fermentation involves sealing coffee in tanks or containers without oxygen, forcing fermentation to occur in an oxygen-free environment. This creates different metabolic pathways, producing unique flavor compounds like esters and alcohols that result in intense fruity, wine-like, or even funky flavors. The process can last 24-200 hours and requires careful monitoring of pH, temperature, and time. While controversial for purists, it has become popular for creating distinctive, experimental coffee profiles that stand out in the specialty market.",
                  "es": "La fermentación anaeróbica implica sellar el café en tanques o contenedores sin oxígeno, forzando que la fermentación ocurra en un ambiente libre de oxígeno. Esto crea diferentes vías metabólicas, produciendo compuestos de sabor únicos como ésteres y alcoholes que resultan en sabores intensos afrutados, similares al vino o incluso funky. El proceso puede durar 24-200 horas y requiere monitoreo cuidadoso del pH, temperatura y tiempo. Aunque controvertido para los puristas, se ha vuelto popular para crear perfiles de café distintivos y experimentales que se destacan en el mercado specialty.",
                  "de": "Anaerobe Fermentation beinhaltet das Versiegeln von Kaffee in Tanks oder Behältern ohne Sauerstoff, wodurch die Fermentation in einer sauerstofffreien Umgebung stattfindet. Dies erzeugt verschiedene Stoffwechselwege und produziert einzigartige Geschmacksverbindungen wie Ester und Alkohole, die zu intensiven fruchtigen, weinähnlichen oder sogar funkigen Aromen führen. Der Prozess kann 24-200 Stunden dauern und erfordert sorgfältige Überwachung von pH-Wert, Temperatur und Zeit. Obwohl für Puristen umstritten, ist es populär geworden, um charakteristische, experimentelle Kaffeeprofile zu schaffen, die sich im Specialty-Markt abheben.",
                  "nl": "Anaerobe fermentatie houdt in dat koffie wordt afgesloten in tanks of containers zonder zuurstof, waardoor fermentatie plaatsvindt in een zuurstofvrije omgeving. Dit creëert verschillende metabole routes, produceert unieke smaakverbindingen zoals esters en alcoholen die resulteren in intense fruitige, wijnachtige of zelfs funky smaken. Het proces kan 24-200 uur duren en vereist zorgvuldige monitoring van pH, temperatuur en tijd. Hoewel controversieel voor puristen, is het populair geworden voor het creëren van onderscheidende, experimentele koffieprofielen die opvallen in de specialty markt."
        }
      },
      {
        question: {
                  "en": "What is the Geisha/Gesha coffee varietal and why is it so highly prized?",
                  "es": "¿Qué es la variedad de café Geisha/Gesha y por qué es tan valorada?",
                  "de": "Was ist die Geisha/Gesha Kaffeesorte und warum ist sie so hoch geschätzt?",
                  "nl": "Wat is de Geisha/Gesha koffievariëteit en waarom wordt deze zo hoog gewaardeerd?"
        },
        options: [
        {
                  "en": "A disease-resistant varietal perfect for mass production",
                  "es": "Una variedad resistente a enfermedades perfecta para producción masiva",
                  "de": "Eine krankheitsresistente Varietät perfekt für Massenproduktion",
                  "nl": "Een ziekteresistente variëteit perfect voor massaproductie"
        },
        {
                  "en": "A low-altitude growing varietal with chocolate notes",
                  "es": "Una variedad de cultivo en baja altitud con notas de chocolate",
                  "de": "Eine Niedrig-Höhenlagen-Varietät mit Schokoladennoten",
                  "nl": "Een lage hoogte groeiende variëteit met chocoladenoten"
        },
        {
                  "en": "A Japanese-developed hybrid known for high caffeine content",
                  "es": "Un híbrido desarrollado en Japón conocido por su alto contenido de cafeína",
                  "de": "Eine in Japan entwickelte Hybride, bekannt für hohen Koffeingehalt",
                  "nl": "Een in Japan ontwikkelde hybride bekend om hoog cafeïnegehalte"
        },
        {
                  "en": "A rare varietal from Ethiopia with exceptional tea-like, floral characteristics that commands record prices",
                  "es": "Una variedad rara de Etiopía con características excepcionales similares al té y florales que alcanza precios récord",
                  "de": "Eine seltene Varietät aus Äthiopien mit außergewöhnlichen teeähnlichen, blumigen Eigenschaften, die Rekordpreise erzielt",
                  "nl": "Een zeldzame variëteit uit Ethiopië met uitzonderlijke thee-achtige, bloemige kenmerken die recordprijzen behaalt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Geisha (also spelled Gesha) originated in the Gesha village of Ethiopia but gained fame through Panama's Hacienda La Esmeralda farm in the early 2000s. This varietal is prized for its unique cup profile featuring tea-like body, pronounced floral aromatics (jasmine, bergamot), bright acidity, and complex fruit notes. Geisha requires specific high-altitude growing conditions and produces low yields, making it rare and expensive. Auction prices have reached over $1,000 per pound, with the varietal consistently scoring 90+ points in competitions. Its distinctive elongated bean shape and exceptional flavor clarity have made it the most sought-after coffee varietal globally.",
                  "es": "Geisha (también escrito Gesha) se originó en el pueblo Gesha de Etiopía pero ganó fama a través de la finca Hacienda La Esmeralda de Panamá a principios de los 2000. Esta variedad es valorada por su perfil de taza único que presenta cuerpo similar al té, aromáticos florales pronunciados (jazmín, bergamota), acidez brillante y notas de frutas complejas. Geisha requiere condiciones específicas de cultivo en gran altitud y produce bajos rendimientos, haciéndola rara y costosa. Los precios de subasta han alcanzado más de $1,000 por libra, con la variedad consistentemente puntuando 90+ puntos en competencias. Su forma distintiva de grano alargado y claridad de sabor excepcional la han hecho la variedad de café más buscada globalmente.",
                  "de": "Geisha (auch Gesha geschrieben) stammt aus dem Gesha-Dorf in Äthiopien, wurde aber durch Panamas Hacienda La Esmeralda Farm in den frühen 2000ern berühmt. Diese Varietät wird für ihr einzigartiges Tassenprofil geschätzt, das teeähnlichen Körper, ausgeprägte blumige Aromatik (Jasmin, Bergamotte), helle Säure und komplexe Fruchtnoten aufweist. Geisha benötigt spezifische Hochlagen-Anbaubedingungen und produziert geringe Erträge, was sie selten und teuer macht. Auktionspreise haben über $1.000 pro Pfund erreicht, wobei die Varietät konstant 90+ Punkte in Wettbewerben erzielt. Ihre charakteristische längliche Bohnenform und außergewöhnliche Geschmacksklarheit haben sie zur weltweit begehrtesten Kaffeevarietät gemacht.",
                  "nl": "Geisha (ook gespeld als Gesha) kwam oorspronkelijk uit het Gesha dorp in Ethiopië maar werd beroemd via Panama's Hacienda La Esmeralda boerderij in de vroege jaren 2000. Deze variëteit wordt gewaardeerd om zijn unieke kopprofiel met thee-achtige body, uitgesproken bloemige aromatieken (jasmijn, bergamot), heldere zuurgraad en complexe fruitnoten. Geisha vereist specifieke hoge hoogte groeiomstandigheden en produceert lage opbrengsten, waardoor het zeldzaam en duur is. Veilingprijzen hebben meer dan $1.000 per pond bereikt, waarbij de variëteit consistent 90+ punten scoort in competities. Zijn onderscheidende langwerpige boonvorm en uitzonderlijke smaakhelderheid hebben het de meest gewilde koffievariëteit wereldwijd gemaakt."
        }
      },
      {
        question: {
                  "en": "What is carbonic maceration in coffee processing and how does it differ from traditional methods?",
                  "es": "¿Qué es la maceración carbónica en el procesamiento del café y cómo difiere de los métodos tradicionales?",
                  "de": "Was ist Kohlensäure-Maischung bei der Kaffeeverarbeitung und wie unterscheidet sie sich von traditionellen Methoden?",
                  "nl": "Wat is koolzuurmaceratie bij koffieverwerking en hoe verschilt het van traditionele methoden?"
        },
        options: [
        {
                  "en": "Whole cherries ferment in CO2-rich environment, creating unique flavor compounds before pulping",
                  "es": "Cerezas enteras fermentan en ambiente rico en CO2, creando compuestos de sabor únicos antes del despulpado",
                  "de": "Ganze Kirschen fermentieren in CO2-reicher Umgebung und erzeugen einzigartige Geschmacksverbindungen vor dem Entpulpen",
                  "nl": "Hele kersen fermenteren in CO2-rijke omgeving, wat unieke smaakverbindingen creëert voor het pulpen"
        },
        {
                  "en": "Adding carbonated water during the washing process",
                  "es": "Agregar agua carbonatada durante el proceso de lavado",
                  "de": "Zugabe von kohlensäurehaltigem Wasser während des Waschprozesses",
                  "nl": "Koolzuurhoudend water toevoegen tijdens het wasproces"
        },
        {
                  "en": "Roasting coffee beans in a carbon dioxide atmosphere",
                  "es": "Tostar granos de café en una atmósfera de dióxido de carbono",
                  "de": "Rösten von Kaffeebohnen in einer Kohlendioxid-Atmosphäre",
                  "nl": "Koffiebonen branden in een koolstofdioxide atmosfeer"
        },
        {
                  "en": "Using dry ice to freeze-dry coffee beans",
                  "es": "Usar hielo seco para liofilizar granos de café",
                  "de": "Verwendung von Trockeneis zum Gefriertrocknen von Kaffeebohnen",
                  "nl": "Droogijs gebruiken om koffiebonen vriesdroog te maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Carbonic maceration, borrowed from winemaking, involves placing whole coffee cherries in sealed tanks filled with CO2, forcing intracellular fermentation within the fruit before traditional processing begins. This creates unique flavor compounds as enzymes work inside the cherry without oxygen, producing distinct fruity, wine-like characteristics often described as 'jammy' or 'bubble-gum-like.' The process typically lasts 18-100 hours before cherries are removed and processed normally. This technique has gained popularity among progressive coffee producers seeking to create distinctive flavor profiles that command premium prices in the specialty market.",
                  "es": "La maceración carbónica, tomada de la vinicultura, implica colocar cerezas de café enteras en tanques sellados llenos de CO2, forzando la fermentación intracelular dentro de la fruta antes de que comience el procesamiento tradicional. Esto crea compuestos de sabor únicos ya que las enzimas trabajan dentro de la cereza sin oxígeno, produciendo características distintivas afrutadas y similares al vino a menudo descritas como 'mermelada' o 'chicle'. El proceso típicamente dura 18-100 horas antes de que las cerezas sean removidas y procesadas normalmente. Esta técnica ha ganado popularidad entre productores progresivos de café que buscan crear perfiles de sabor distintivos que demanden precios premium en el mercado specialty.",
                  "de": "Kohlensäure-Maischung, aus der Weinherstellung entlehnt, beinhaltet das Platzieren ganzer Kaffeekirschen in versiegelten, mit CO2 gefüllten Tanks, wodurch intrazelluläre Fermentation innerhalb der Frucht vor Beginn der traditionellen Verarbeitung erzwungen wird. Dies erzeugt einzigartige Geschmacksverbindungen, da Enzyme ohne Sauerstoff in der Kirsche arbeiten und charakteristische fruchtige, weinähnliche Eigenschaften produzieren, oft als 'marmeladig' oder 'kaugummi-ähnlich' beschrieben. Der Prozess dauert typischerweise 18-100 Stunden, bevor Kirschen entfernt und normal verarbeitet werden. Diese Technik hat an Popularität unter progressiven Kaffeeproduzenten gewonnen, die charakteristische Geschmacksprofile schaffen wollen, die Premium-Preise im Specialty-Markt erzielen.",
                  "nl": "Koolzuurmaceratie, overgenomen uit de wijnbereiding, houdt in dat hele koffiebessen in afgesloten tanks gevuld met CO2 worden geplaatst, wat intracellulaire fermentatie binnen de vrucht forceert voordat traditionele verwerking begint. Dit creëert unieke smaakverbindingen omdat enzymen binnen de kers werken zonder zuurstof, wat onderscheidende fruitige, wijnachtige kenmerken produceert die vaak worden beschreven als 'jammerig' of 'kauwgom-achtig.' Het proces duurt meestal 18-100 uur voordat kersen worden weggenomen en normaal verwerkt. Deze techniek heeft populariteit gewonnen onder progressieve koffieproducenten die onderscheidende smaakprofielen willen creëren die premiumprijzen in de specialty markt kunnen vragen."
        }
      },
      {
        question: {
                  "en": "What is the significance of 'coffee terroir' and how does it manifest in the cup?",
                  "es": "¿Cuál es la importancia del 'terroir del café' y cómo se manifiesta en la taza?",
                  "de": "Was ist die Bedeutung von 'Kaffee-Terroir' und wie manifestiert es sich in der Tasse?",
                  "nl": "Wat is de betekenis van 'koffie terroir' en hoe manifesteert het zich in de kop?"
        },
        options: [
        {
                  "en": "The roasting profile applied to coffee beans",
                  "es": "El perfil de tostado aplicado a los granos de café",
                  "de": "Das Röstprofil, das auf Kaffeebohnen angewendet wird",
                  "nl": "Het brandprofiel toegepast op koffiebonen"
        },
        {
                  "en": "The complete environmental expression including soil, climate, altitude, and processing that creates unique flavor characteristics",
                  "es": "La expresión ambiental completa incluyendo suelo, clima, altitud y procesamiento que crea características de sabor únicas",
                  "de": "Der vollständige Umweltausdruck einschließlich Boden, Klima, Höhenlage und Verarbeitung, der einzigartige Geschmackseigenschaften schafft",
                  "nl": "De complete omgevingsexpressie inclusief bodem, klimaat, hoogte en verwerking die unieke smaakkenmerken creëert"
        },
        {
                  "en": "The brewing method used to prepare coffee",
                  "es": "El método de preparación usado para preparar café",
                  "de": "Die Brühmethode, die zur Kaffeezubereitung verwendet wird",
                  "nl": "De zetmethode gebruikt om koffie te bereiden"
        },
        {
                  "en": "Only the soil composition where coffee is grown",
                  "es": "Solo la composición del suelo donde se cultiva el café",
                  "de": "Nur die Bodenzusammensetzung, wo Kaffee angebaut wird",
                  "nl": "Alleen de bodemsamenstelling waar koffie wordt geteeld"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Coffee terroir encompasses the complete environmental factors that influence flavor development: soil mineral content (volcanic, limestone, etc.), microclimate, altitude, rainfall patterns, temperature variations, and even processing traditions. These factors interact with the coffee plant's genetics to create distinctive regional characteristics. For example, Kenyan coffees often display wine-like acidity from high altitude and specific soil conditions, while Hawaiian Kona shows smooth, low-acid profiles from volcanic soil. Terroir also includes human factors like processing methods passed down through generations, making each coffee region's expression unique and traceable to its specific place of origin.",
                  "es": "El terroir del café abarca los factores ambientales completos que influencian el desarrollo del sabor: contenido mineral del suelo (volcánico, caliza, etc.), microclima, altitud, patrones de lluvia, variaciones de temperatura e incluso tradiciones de procesamiento. Estos factores interactúan con la genética de la planta de café para crear características regionales distintivas. Por ejemplo, los cafés kenianos a menudo muestran acidez similar al vino por la gran altitud y condiciones específicas del suelo, mientras que el Kona hawaiano muestra perfiles suaves y de baja acidez por el suelo volcánico. El terroir también incluye factores humanos como métodos de procesamiento transmitidos a través de generaciones, haciendo que la expresión de cada región cafetera sea única y rastreable a su lugar específico de origen.",
                  "de": "Kaffee-Terroir umfasst die vollständigen Umweltfaktoren, die die Geschmacksentwicklung beeinflussen: Bodenmineral-Gehalt (vulkanisch, Kalkstein usw.), Mikroklima, Höhenlage, Niederschlagsmuster, Temperaturschwankungen und sogar Verarbeitungstraditionen. Diese Faktoren interagieren mit der Genetik der Kaffeepflanze, um charakteristische regionale Eigenschaften zu schaffen. Zum Beispiel zeigen kenianische Kaffees oft weinähnliche Säure durch große Höhe und spezifische Bodenbedingungen, während hawaiianischer Kona glatte, säurearme Profile durch vulkanischen Boden zeigt. Terroir umfasst auch menschliche Faktoren wie über Generationen weitergegebene Verarbeitungsmethoden, was den Ausdruck jeder Kaffeeregion einzigartig und zu ihrem spezifischen Ursprungsort nachverfolgbar macht.",
                  "nl": "Koffie terroir omvat de complete omgevingsfactoren die smaakontwikkeling beïnvloeden: bodem mineraalgehalte (vulkanisch, kalksteen, enz.), microklimaat, hoogte, regenvalpatronen, temperatuurvariaties en zelfs verwerkingstradities. Deze factoren interageren met de genetica van de koffieplant om onderscheidende regionale kenmerken te creëren. Bijvoorbeeld, Keniaanse koffies tonen vaak wijnachtige zuurgraad door grote hoogte en specifieke bodemcondities, terwijl Hawaiiaanse Kona gladde, lage-zuur profielen toont door vulkanische bodem. Terroir omvat ook menselijke factoren zoals verwerkingsmethoden doorgegeven door generaties, wat elke koffieregio's expressie uniek en traceerbaar naar zijn specifieke oorsprong maakt."
        }
      },
      {
        question: {
                  "en": "What is the SCA (Specialty Coffee Association) Coffee Taster's Flavor Wheel and how is it used?",
                  "es": "¿Qué es la Rueda de Sabores del Catador de Café de la SCA y cómo se usa?",
                  "de": "Was ist das SCA Kaffee-Verkoster Aromerad und wie wird es verwendet?",
                  "nl": "Wat is het SCA Koffieproever Smaakwiel en hoe wordt het gebruikt?"
        },
        options: [
        {
                  "en": "A certification program for coffee tasters",
                  "es": "Un programa de certificación para catadores de café",
                  "de": "Ein Zertifizierungsprogramm für Kaffee-Verkoster",
                  "nl": "Een certificeringsprogramma voor koffieproevers"
        },
        {
                  "en": "A physical wheel used to spin coffee beans for even roasting",
                  "es": "Una rueda física usada para girar granos de café para tostado uniforme",
                  "de": "Ein physisches Rad zum Drehen von Kaffeebohnen für gleichmäßiges Rösten",
                  "nl": "Een fysiek wiel gebruikt om koffiebonen te draaien voor gelijkmatig branden"
        },
        {
                  "en": "A traditional Ethiopian coffee ceremony tool",
                  "es": "Una herramienta tradicional de ceremonia de café etíope",
                  "de": "Ein traditionelles äthiopisches Kaffeezeremonie-Werkzeug",
                  "nl": "Een traditioneel Ethiopisch koffieceremonie gereedschap"
        },
        {
                  "en": "A standardized tool for identifying and communicating coffee flavors, organized from general to specific descriptors",
                  "es": "Una herramienta estandarizada para identificar y comunicar sabores del café, organizada de descriptores generales a específicos",
                  "de": "Ein standardisiertes Werkzeug zur Identifizierung und Kommunikation von Kaffeearomen, organisiert von allgemeinen zu spezifischen Deskriptoren",
                  "nl": "Een gestandaardiseerd gereedschap voor het identificeren en communiceren van koffiesmaken, georganiseerd van algemene naar specifieke beschrijvers"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The SCA Coffee Taster's Flavor Wheel, developed through scientific research and sensory analysis, provides a standardized vocabulary for describing coffee flavors. It's organized in concentric circles from general categories (fruity, floral, sweet) in the center to specific descriptors (blueberry, jasmine, honey) on the outer edge. The wheel helps cuppers, baristas, and consumers communicate flavors consistently and accurately. Based on the World Coffee Research Sensory Lexicon, it includes positive flavor attributes only, helping professionals identify and appreciate the diverse range of flavors possible in specialty coffee. The wheel is used in cupping protocols, quality assessment, and coffee education worldwide.",
                  "es": "La Rueda de Sabores del Catador de Café de la SCA, desarrollada a través de investigación científica y análisis sensorial, proporciona un vocabulario estandarizado para describir sabores del café. Está organizada en círculos concéntricos desde categorías generales (afrutado, floral, dulce) en el centro hasta descriptores específicos (arándano, jazmín, miel) en el borde exterior. La rueda ayuda a catadores, baristas y consumidores a comunicar sabores de manera consistente y precisa. Basada en el Léxico Sensorial de World Coffee Research, incluye solo atributos de sabor positivos, ayudando a profesionales a identificar y apreciar la diversa gama de sabores posibles en café specialty. La rueda se usa en protocolos de cupping, evaluación de calidad y educación cafetera mundialmente.",
                  "de": "Das SCA Kaffee-Verkoster Aromerad, durch wissenschaftliche Forschung und sensorische Analyse entwickelt, bietet ein standardisiertes Vokabular zur Beschreibung von Kaffeearomen. Es ist in konzentrischen Kreisen organisiert von allgemeinen Kategorien (fruchtig, blumig, süß) in der Mitte zu spezifischen Deskriptoren (Heidelbeere, Jasmin, Honig) am äußeren Rand. Das Rad hilft Cuppern, Baristas und Verbrauchern, Aromen konsistent und genau zu kommunizieren. Basierend auf dem World Coffee Research Sensory Lexicon umfasst es nur positive Geschmacksattribute und hilft Fachleuten, die vielfältige Palette von Aromen in Specialty Coffee zu identifizieren und zu schätzen. Das Rad wird in Cupping-Protokollen, Qualitätsbewertung und Kaffeebildung weltweit verwendet.",
                  "nl": "Het SCA Koffieproever Smaakwiel, ontwikkeld door wetenschappelijk onderzoek en sensorische analyse, biedt een gestandaardiseerd vocabulaire voor het beschrijven van koffiesmaken. Het is georganiseerd in concentrische cirkels van algemene categorieën (fruitig, bloemig, zoet) in het centrum naar specifieke beschrijvers (bosbes, jasmijn, honing) aan de buitenrand. Het wiel helpt cuppers, barista's en consumenten om smaken consistent en accuraat te communiceren. Gebaseerd op het World Coffee Research Sensory Lexicon omvat het alleen positieve smaakattributen, wat professionals helpt de diverse reeks smaken mogelijk in specialty koffie te identificeren en waarderen. Het wiel wordt gebruikt in cupping protocollen, kwaliteitsbeoordeling en koffie-educatie wereldwijd."
        }
      },
      {
        question: {
                  "en": "What is 'coffee cherry tea' (cascara) and how is it processed?",
                  "es": "¿Qué es el 'té de cereza de café' (cascara) y cómo se procesa?",
                  "de": "Was ist 'Kaffeekirschen-Tee' (Cascara) und wie wird er verarbeitet?",
                  "nl": "Wat is 'koffiekers thee' (cascara) en hoe wordt het verwerkt?"
        },
        options: [
        {
                  "en": "A type of green tea grown alongside coffee plants",
                  "es": "Un tipo de té verde cultivado junto a plantas de café",
                  "de": "Eine Art grüner Tee, der neben Kaffeepflanzen angebaut wird",
                  "nl": "Een type groene thee geteeld naast koffieplanten"
        },
        {
                  "en": "A medicinal tea made from coffee plant leaves",
                  "es": "Un té medicinal hecho de hojas de planta de café",
                  "de": "Ein medizinischer Tee aus Kaffeepflanzenblättern",
                  "nl": "Een medicinale thee gemaakt van koffieplantbladeren"
        },
        {
                  "en": "Fermented coffee beans brewed as tea",
                  "es": "Granos de café fermentados preparados como té",
                  "de": "Fermentierte Kaffeebohnen als Tee aufgebrüht",
                  "nl": "Gefermenteerde koffiebonen als thee gezet"
        },
        {
                  "en": "Dried coffee cherry husks steeped like tea, offering fruity, sweet flavors and mild caffeine",
                  "es": "Cáscaras de cereza de café secas preparadas como té, ofreciendo sabores afrutados, dulces y cafeína suave",
                  "de": "Getrocknete Kaffeekirschen-Hülsen wie Tee aufgebrüht, bieten fruchtige, süße Aromen und mildes Koffein",
                  "nl": "Gedroogde koffiekers hulzen getrokken als thee, biedend fruitige, zoete smaken en milde cafeïne"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Cascara (Spanish for 'husk') is the dried fruit of the coffee cherry after the bean has been removed. Traditionally consumed in Yemen and Ethiopia, it's gaining popularity as a sustainable byproduct that reduces waste. Processing involves carefully drying the cherry husks immediately after pulping to prevent mold, then storing them properly. When steeped in hot water, cascara produces a sweet, fruity beverage with notes of cherry, brown sugar, and honey, containing about 25% of coffee's caffeine content. It's rich in antioxidants and represents an additional revenue stream for coffee farmers while promoting circular economy principles in coffee production.",
                  "es": "Cascara (español para 'cáscara') es la fruta seca de la cereza de café después de que el grano ha sido removido. Tradicionalmente consumida en Yemen y Etiopía, está ganando popularidad como un subproducto sostenible que reduce el desperdicio. El procesamiento implica secar cuidadosamente las cáscaras de cereza inmediatamente después del despulpado para prevenir moho, luego almacenarlas apropiadamente. Cuando se prepara en agua caliente, cascara produce una bebida dulce y afrutada con notas de cereza, azúcar morena y miel, conteniendo aproximadamente 25% del contenido de cafeína del café. Es rica en antioxidantes y representa un flujo de ingresos adicional para los agricultores de café mientras promueve principios de economía circular en la producción cafetera.",
                  "de": "Cascara (Spanisch für 'Hülse') ist die getrocknete Frucht der Kaffeekirsche, nachdem die Bohne entfernt wurde. Traditionell in Jemen und Äthiopien konsumiert, gewinnt es als nachhaltiges Nebenprodukt, das Abfall reduziert, an Popularität. Die Verarbeitung beinhaltet sorgfältiges Trocknen der Kirschenhülsen unmittelbar nach dem Entpulpen, um Schimmel zu verhindern, dann ordnungsgemäße Lagerung. Wenn in heißem Wasser aufgebrüht, produziert Cascara ein süßes, fruchtiges Getränk mit Noten von Kirsche, braunem Zucker und Honig, enthält etwa 25% des Koffeingehalts von Kaffee. Es ist reich an Antioxidantien und stellt eine zusätzliche Einnahmequelle für Kaffeebauern dar, während es Kreislaufwirtschaftsprinzipien in der Kaffeeproduktion fördert.",
                  "nl": "Cascara (Spaans voor 'schil') is de gedroogde vrucht van de koffiekers nadat de boon is weggenomen. Traditioneel geconsumeerd in Jemen en Ethiopië, wint het populariteit als duurzaam bijproduct dat afval vermindert. Verwerking houdt in dat de kershulzen zorgvuldig worden gedroogd onmiddellijk na het pulpen om schimmel te voorkomen, dan goed opslaan. Wanneer getrokken in heet water, produceert cascara een zoete, fruitige drank met noten van kers, bruine suiker en honing, bevattend ongeveer 25% van koffie's cafeïnegehalte. Het is rijk aan antioxidanten en vertegenwoordigt een extra inkomstenstroom voor koffieboeren terwijl het circulaire economie principes in koffieproductie bevordert."
        }
      },
      {
        question: {
                  "en": "What is the 'coffee belt' and what makes this region ideal for coffee cultivation?",
                  "es": "¿Qué es el 'cinturón del café' y qué hace que esta región sea ideal para el cultivo de café?",
                  "de": "Was ist der 'Kaffeegürtel' und was macht diese Region ideal für den Kaffeeanbau?",
                  "nl": "Wat is de 'koffiegordel' en wat maakt deze regio ideaal voor koffieteelt?"
        },
        options: [
        {
                  "en": "A mechanical device used to sort coffee beans by size",
                  "es": "Un dispositivo mecánico usado para clasificar granos de café por tamaño",
                  "de": "Eine mechanische Vorrichtung zum Sortieren von Kaffeebohnen nach Größe",
                  "nl": "Een mechanisch apparaat gebruikt om koffiebonen op grootte te sorteren"
        },
        {
                  "en": "The equatorial region where only robusta coffee grows",
                  "es": "La región ecuatorial donde solo crece café robusta",
                  "de": "Die Äquatorregion, wo nur Robusta-Kaffee wächst",
                  "nl": "De equatoriale regio waar alleen robusta koffie groeit"
        },
        {
                  "en": "High-altitude mountain ranges above 3000 meters",
                  "es": "Cordilleras de gran altitud por encima de 3000 metros",
                  "de": "Hochgebirge über 3000 Meter",
                  "nl": "Hoge bergketens boven 3000 meter"
        },
        {
                  "en": "The tropical zone between 25°N and 30°S latitude with ideal climate conditions for coffee growing",
                  "es": "La zona tropical entre 25°N y 30°S de latitud con condiciones climáticas ideales para el cultivo de café",
                  "de": "Die tropische Zone zwischen 25°N und 30°S Breite mit idealen Klimabedingungen für den Kaffeeanbau",
                  "nl": "De tropische zone tussen 25°N en 30°Z breedtegraad met ideale klimaatcondities voor koffieteelt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The coffee belt encompasses the tropical and subtropical regions between approximately 25°N and 30°S latitude, where the majority of the world's coffee is grown. This zone provides the ideal combination of factors coffee plants need: consistent temperatures (60-70°F/15-24°C), distinct wet and dry seasons, rich volcanic or well-draining soils, adequate rainfall (40-70 inches annually), and protection from extreme weather. The belt includes countries across Central and South America, Africa, Asia, and the Pacific Islands. Within this belt, altitude plays a crucial role—higher elevations (1000-2000+ meters) typically produce higher quality arabica with more complex flavors due to slower cherry maturation.",
                  "es": "El cinturón del café abarca las regiones tropicales y subtropicales entre aproximadamente 25°N y 30°S de latitud, donde se cultiva la mayoría del café del mundo. Esta zona proporciona la combinación ideal de factores que las plantas de café necesitan: temperaturas consistentes (60-70°F/15-24°C), estaciones húmedas y secas distintas, suelos volcánicos ricos o con buen drenaje, precipitación adecuada (40-70 pulgadas anuales) y protección del clima extremo. El cinturón incluye países de América Central y del Sur, África, Asia y las Islas del Pacífico. Dentro de este cinturón, la altitud juega un papel crucial: elevaciones más altas (1000-2000+ metros) típicamente producen arábica de mayor calidad con sabores más complejos debido a la maduración más lenta de la cereza.",
                  "de": "Der Kaffeegürtel umfasst die tropischen und subtropischen Regionen zwischen etwa 25°N und 30°S Breite, wo der Großteil des weltweiten Kaffees angebaut wird. Diese Zone bietet die ideale Kombination von Faktoren, die Kaffeepflanzen benötigen: konstante Temperaturen (60-70°F/15-24°C), ausgeprägte Regen- und Trockenzeiten, reiche vulkanische oder gut drainierende Böden, ausreichende Niederschläge (40-70 Zoll jährlich) und Schutz vor extremem Wetter. Der Gürtel umfasst Länder in Mittel- und Südamerika, Afrika, Asien und den Pazifikinseln. Innerhalb dieses Gürtels spielt die Höhenlage eine entscheidende Rolle—höhere Lagen (1000-2000+ Meter) produzieren typischerweise höherwertige Arabica mit komplexeren Aromen aufgrund langsamerer Kirschenreifung.",
                  "nl": "De koffiegordel omvat de tropische en subtropische regio's tussen ongeveer 25°N en 30°Z breedtegraad, waar het grootste deel van 's werelds koffie wordt geteeld. Deze zone biedt de ideale combinatie van factoren die koffieplanten nodig hebben: consistente temperaturen (60-70°F/15-24°C), duidelijke natte en droge seizoenen, rijke vulkanische of goed drainerende bodems, adequate regenval (40-70 inch jaarlijks) en bescherming tegen extreem weer. De gordel omvat landen in Midden- en Zuid-Amerika, Afrika, Azië en de Stille Oceaan eilanden. Binnen deze gordel speelt hoogte een cruciale rol—hogere elevaties (1000-2000+ meter) produceren typisch arabica van hogere kwaliteit met complexere smaken door langzamere kers rijping."
        }
      },
      {
        question: {
                  "en": "What is the difference between 'direct trade' and 'fair trade' in coffee sourcing?",
                  "es": "¿Cuál es la diferencia entre 'comercio directo' y 'comercio justo' en el abastecimiento de café?",
                  "de": "Was ist der Unterschied zwischen 'Direct Trade' und 'Fair Trade' bei der Kaffeebeschaffung?",
                  "nl": "Wat is het verschil tussen 'directe handel' en 'eerlijke handel' bij koffie inkoop?"
        },
        options: [
        {
                  "en": "Fair trade only applies to organic coffee",
                  "es": "El comercio justo solo se aplica al café orgánico",
                  "de": "Fair Trade gilt nur für Bio-Kaffee",
                  "nl": "Eerlijke handel geldt alleen voor biologische koffie"
        },
        {
                  "en": "There is no difference between the two systems",
                  "es": "No hay diferencia entre los dos sistemas",
                  "de": "Es gibt keinen Unterschied zwischen den beiden Systemen",
                  "nl": "Er is geen verschil tussen de twee systemen"
        },
        {
                  "en": "Direct trade involves roasters buying directly from farmers with personal relationships, while fair trade is a certified system with minimum price guarantees",
                  "es": "El comercio directo implica que los tostadores compren directamente a los agricultores con relaciones personales, mientras que el comercio justo es un sistema certificado con garantías de precio mínimo",
                  "de": "Direct Trade beinhaltet, dass Röster direkt von Bauern mit persönlichen Beziehungen kaufen, während Fair Trade ein zertifiziertes System mit Mindestpreisgarantien ist",
                  "nl": "Directe handel houdt in dat branders direct van boeren kopen met persoonlijke relaties, terwijl eerlijke handel een gecertificeerd systeem is met minimumprijsgaranties"
        },
        {
                  "en": "Direct trade is cheaper than fair trade for consumers",
                  "es": "El comercio directo es más barato que el comercio justo para los consumidores",
                  "de": "Direct Trade ist günstiger als Fair Trade für Verbraucher",
                  "nl": "Directe handel is goedkoper dan eerlijke handel voor consumenten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Direct trade is an informal approach where roasters establish direct relationships with farmers, often paying premium prices above fair trade minimums and visiting farms personally. It emphasizes quality, transparency, and long-term partnerships but lacks formal certification. Fair trade is a certified system with specific standards including minimum price floors ($1.40-$1.70/lb for arabica), social premiums for community projects, and prohibitions on child labor. While fair trade provides structure and guarantees, direct trade offers more flexibility and potentially higher farmer payments. Many progressive roasters use direct trade to build relationships while some farmers prefer fair trade's stability and certification premiums.",
                  "es": "El comercio directo es un enfoque informal donde los tostadores establecen relaciones directas con agricultores, a menudo pagando precios premium por encima de los mínimos del comercio justo y visitando fincas personalmente. Enfatiza calidad, transparencia y asociaciones a largo plazo pero carece de certificación formal. El comercio justo es un sistema certificado con estándares específicos incluyendo precios mínimos ($1.40-$1.70/lb para arábica), premios sociales para proyectos comunitarios y prohibiciones del trabajo infantil. Mientras el comercio justo proporciona estructura y garantías, el comercio directo ofrece más flexibilidad y potencialmente pagos más altos a agricultores. Muchos tostadores progresivos usan comercio directo para construir relaciones mientras algunos agricultores prefieren la estabilidad del comercio justo y premios de certificación.",
                  "de": "Direct Trade ist ein informeller Ansatz, bei dem Röster direkte Beziehungen zu Bauern aufbauen, oft Premium-Preise über Fair Trade Mindestpreisen zahlen und Farmen persönlich besuchen. Es betont Qualität, Transparenz und langfristige Partnerschaften, aber fehlt formale Zertifizierung. Fair Trade ist ein zertifiziertes System mit spezifischen Standards einschließlich Mindestpreise ($1.40-$1.70/lb für Arabica), Sozialprämien für Gemeindeprojekte und Verbote von Kinderarbeit. Während Fair Trade Struktur und Garantien bietet, offeriert Direct Trade mehr Flexibilität und potentiell höhere Bauernzahlungen. Viele progressive Röster verwenden Direct Trade zum Aufbau von Beziehungen, während einige Bauern Fair Trade's Stabilität und Zertifizierungsprämien bevorzugen.",
                  "nl": "Directe handel is een informele benadering waarbij branders directe relaties met boeren opbouwen, vaak premium prijzen boven eerlijke handel minimums betalen en boerderijen persoonlijk bezoeken. Het benadrukt kwaliteit, transparantie en langetermijnpartnerschappen maar mist formele certificering. Eerlijke handel is een gecertificeerd systeem met specifieke standaarden inclusief minimumprijzen ($1.40-$1.70/lb voor arabica), sociale premies voor gemeenschapsprojecten en verboden op kinderarbeid. Terwijl eerlijke handel structuur en garanties biedt, biedt directe handel meer flexibiliteit en potentieel hogere boerbetalingen. Veel progressieve branders gebruiken directe handel om relaties op te bouwen terwijl sommige boeren eerlijke handel's stabiliteit en certificeringspremies verkiezen."
        }
      },
      {
        question: {
                  "en": "What is the 'honey process' classification system (white, yellow, red, black honey)?",
                  "es": "¿Qué es el sistema de clasificación del 'proceso miel' (miel blanca, amarilla, roja, negra)?",
                  "de": "Was ist das Klassifizierungssystem für 'Honey-Processing' (weißer, gelber, roter, schwarzer Honey)?",
                  "nl": "Wat is het 'honey process' classificatiesysteem (witte, gele, rode, zwarte honey)?"
        },
        options: [
        {
                  "en": "Fermentation time durations for each process",
                  "es": "Duraciones de tiempo de fermentación para cada proceso",
                  "de": "Fermentationszeit-Dauern für jeden Prozess",
                  "nl": "Fermentatietijd duren voor elk proces"
        },
        {
                  "en": "Color variations in coffee cherry skins",
                  "es": "Variaciones de color en las pieles de cereza de café",
                  "de": "Farbvariationen in Kaffeekirschenhäuten",
                  "nl": "Kleurvariaties in koffiekesvellen"
        },
        {
                  "en": "Different types of honey added to coffee during processing",
                  "es": "Diferentes tipos de miel añadidos al café durante el procesamiento",
                  "de": "Verschiedene Honigsorten, die während der Verarbeitung zum Kaffee hinzugefügt werden",
                  "nl": "Verschillende soorten honing toegevoegd aan koffie tijdens verwerking"
        },
        {
                  "en": "Classifications based on percentage of mucilage left on beans during drying",
                  "es": "Clasificaciones basadas en el porcentaje de mucílago dejado en los granos durante el secado",
                  "de": "Klassifizierungen basierend auf dem Prozentsatz des auf den Bohnen belassenen Schleims während des Trocknens",
                  "nl": "Classificaties gebaseerd op percentage mucilage achtergelaten op bonen tijdens drogen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The honey process classification indicates how much sticky fruit mucilage remains on the bean during drying. White honey removes ~80-90% of mucilage, creating lighter, cleaner flavors similar to washed coffee. Yellow honey removes ~50-75% mucilage, developing moderate sweetness and body. Red honey removes ~25-50% mucilage, producing pronounced sweetness and fruit character. Black honey leaves most mucilage intact (0-25% removed), creating intense sweetness, body, and complex fruit flavors but requiring careful drying to prevent defects. The color refers to the dried parchment appearance, not actual honey colors. This processing innovation allows producers to control sweetness levels and create unique flavor profiles between washed and natural extremes.",
                  "es": "La clasificación del proceso miel indica cuánto mucílago pegajoso de fruta permanece en el grano durante el secado. Miel blanca remueve ~80-90% del mucílago, creando sabores más ligeros y limpios similares al café lavado. Miel amarilla remueve ~50-75% mucílago, desarrollando dulzura moderada y cuerpo. Miel roja remueve ~25-50% mucílago, produciendo dulzura pronunciada y carácter frutal. Miel negra deja la mayoría del mucílago intacto (0-25% removido), creando dulzura intensa, cuerpo y sabores frutales complejos pero requiere secado cuidadoso para prevenir defectos. El color se refiere a la apariencia del pergamino seco, no colores de miel reales. Esta innovación de procesamiento permite a productores controlar niveles de dulzura y crear perfiles de sabor únicos entre extremos lavados y naturales.",
                  "de": "Die Honey-Process-Klassifizierung zeigt an, wie viel klebriger Fruchtschleim während des Trocknens an der Bohne verbleibt. Weißer Honey entfernt ~80-90% des Schleims und erzeugt hellere, sauberere Aromen ähnlich gewaschenen Kaffee. Gelber Honey entfernt ~50-75% Schleim und entwickelt moderate Süße und Körper. Roter Honey entfernt ~25-50% Schleim und produziert ausgeprägte Süße und Fruchtcharakter. Schwarzer Honey lässt den meisten Schleim intakt (0-25% entfernt) und erzeugt intensive Süße, Körper und komplexe Fruchtaromen, erfordert aber sorgfältiges Trocknen zur Defektverhinderung. Die Farbe bezieht sich auf das getrocknete Pergament-Aussehen, nicht auf echte Honigfarben. Diese Processing-Innovation ermöglicht Produzenten, Süßegrade zu kontrollieren und einzigartige Geschmacksprofile zwischen gewaschenen und natürlichen Extremen zu schaffen.",
                  "nl": "De honey process classificatie geeft aan hoeveel kleverige fruchtmucilage op de boon blijft tijdens drogen. Witte honey verwijdert ~80-90% van mucilage, creërend lichtere, schonere smaken vergelijkbaar met gewassen koffie. Gele honey verwijdert ~50-75% mucilage, ontwikkelt matige zoetheid en body. Rode honey verwijdert ~25-50% mucilage, produceert uitgesproken zoetheid en fruitkarakter. Zwarte honey laat meeste mucilage intact (0-25% verwijderd), creërend intense zoetheid, body en complexe fruitsmaken maar vereist zorgvuldig drogen om defecten te voorkomen. De kleur verwijst naar het gedroogde perkament uiterlijk, niet echte honingkleuren. Deze processing innovatie stelt producenten in staat zoetheidsgraden te controleren en unieke smaakprofielen te creëren tussen gewassen en natuurlijke extremen."
        }
      },
      {
        question: {
                  "en": "What is 'coffee Q-grading' and who performs it?",
                  "es": "¿Qué es la 'clasificación Q de café' y quién la realiza?",
                  "de": "Was ist 'Kaffee Q-Grading' und wer führt es durch?",
                  "nl": "Wat is 'koffie Q-grading' en wie voert het uit?"
        },
        options: [
        {
                  "en": "Grading coffee beans by physical size only",
                  "es": "Clasificar granos de café solo por tamaño físico",
                  "de": "Einstufung von Kaffeebohnen nur nach physischer Größe",
                  "nl": "Beoordelen van koffiebonen alleen op fysieke grootte"
        },
        {
                  "en": "Standardized cupping protocol performed by licensed Q-graders to assess specialty coffee quality and assign scores",
                  "es": "Protocolo de catación estandarizado realizado por Q-graders licenciados para evaluar la calidad del café specialty y asignar puntuaciones",
                  "de": "Standardisiertes Cupping-Protokoll durchgeführt von lizenzierten Q-Gradern zur Bewertung von Specialty Coffee Qualität und Punktevergabe",
                  "nl": "Gestandaardiseerd cupping protocol uitgevoerd door gelicentieerde Q-graders om specialty koffiekwaliteit te beoordelen en scores toe te kennen"
        },
        {
                  "en": "Testing water quality for brewing",
                  "es": "Probar la calidad del agua para la preparación",
                  "de": "Testen der Wasserqualität zum Brühen",
                  "nl": "Testen van waterkwaliteit voor zetten"
        },
        {
                  "en": "Measuring caffeine content in coffee beans",
                  "es": "Medir el contenido de cafeína en granos de café",
                  "de": "Messung des Koffeingehalts in Kaffeebohnen",
                  "nl": "Meten van cafeïnegehalte in koffiebonen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Q-grading is the coffee industry's standardized quality assessment system, developed by the Coffee Quality Institute (CQI). Licensed Q-graders (arabica) or R-graders (robusta) undergo rigorous training and testing to evaluate coffee using the SCA cupping protocol. They assess attributes like aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, and overall quality. Coffees scoring 80+ points (out of 100) qualify as 'specialty grade.' Q-graders must recalibrate annually to maintain certification. This system provides objective quality benchmarks, enabling transparent trade, premium pricing for quality, and consistent global standards for specialty coffee evaluation.",
                  "es": "La clasificación Q es el sistema estandarizado de evaluación de calidad de la industria del café, desarrollado por el Coffee Quality Institute (CQI). Los Q-graders licenciados (arábica) o R-graders (robusta) se someten a entrenamiento riguroso y pruebas para evaluar café usando el protocolo de catación SCA. Evalúan atributos como aroma, sabor, regusto, acidez, cuerpo, balance, uniformidad, taza limpia, dulzura y calidad general. Cafés con puntuación de 80+ puntos (de 100) califican como 'grado specialty'. Los Q-graders deben recalibrarse anualmente para mantener certificación. Este sistema proporciona puntos de referencia de calidad objetivos, permitiendo comercio transparente, precios premium por calidad y estándares globales consistentes para evaluación de café specialty.",
                  "de": "Q-Grading ist das standardisierte Qualitätsbewertungssystem der Kaffeeindustrie, entwickelt vom Coffee Quality Institute (CQI). Lizenzierte Q-Grader (Arabica) oder R-Grader (Robusta) durchlaufen rigorose Schulung und Tests zur Kaffeebewertung mittels SCA-Cupping-Protokoll. Sie bewerten Attribute wie Aroma, Geschmack, Nachgeschmack, Säure, Körper, Balance, Gleichmäßigkeit, saubere Tasse, Süße und Gesamtqualität. Kaffees mit 80+ Punkten (von 100) qualifizieren als 'Specialty Grade'. Q-Grader müssen sich jährlich neu kalibrieren zur Erhaltung der Zertifizierung. Dieses System bietet objektive Qualitäts-Benchmarks, ermöglicht transparenten Handel, Premium-Preise für Qualität und konsistente globale Standards für Specialty Coffee Bewertung.",
                  "nl": "Q-grading is het gestandaardiseerde kwaliteitsbeoordelingssysteem van de koffie-industrie, ontwikkeld door het Coffee Quality Institute (CQI). Gelicentieerde Q-graders (arabica) of R-graders (robusta) ondergaan rigoureuze training en testen om koffie te evalueren met het SCA cupping protocol. Ze beoordelen attributen zoals aroma, smaak, nasmaak, zuurgraad, body, balans, uniformiteit, schone kop, zoetheid en algemene kwaliteit. Koffies met 80+ punten (van 100) kwalificeren als 'specialty grade'. Q-graders moeten jaarlijks herkalibreren om certificering te behouden. Dit systeem biedt objectieve kwaliteitsbenchmarks, mogelijk makend transparante handel, premium prijzen voor kwaliteit en consistente globale standaarden voor specialty koffie evaluatie."
        }
      },
      {
        question: {
                  "en": "What is coffee 'crema' in espresso and what determines its quality?",
                  "es": "¿Qué es la 'crema' del café en espresso y qué determina su calidad?",
                  "de": "Was ist Kaffee-'Crema' im Espresso und was bestimmt ihre Qualität?",
                  "nl": "Wat is koffie 'crema' in espresso en wat bepaalt de kwaliteit?"
        },
        options: [
        {
                  "en": "Foam layer created by CO2 and oils under pressure; quality indicated by color, texture, persistence, and even distribution",
                  "es": "Capa de espuma creada por CO2 y aceites bajo presión; calidad indicada por color, textura, persistencia y distribución uniforme",
                  "de": "Schaumschicht erzeugt durch CO2 und Öle unter Druck; Qualität angezeigt durch Farbe, Textur, Beständigkeit und gleichmäßige Verteilung",
                  "nl": "Schuimlaag gecreëerd door CO2 en oliën onder druk; kwaliteit aangegeven door kleur, textuur, persistentie en gelijkmatige verdeling"
        },
        {
                  "en": "Artificial cream added to espresso drinks",
                  "es": "Crema artificial añadida a bebidas de espresso",
                  "de": "Künstliche Sahne, die Espresso-Getränken hinzugefügt wird",
                  "nl": "Kunstmatige room toegevoegd aan espressodranken"
        },
        {
                  "en": "The sediment at the bottom of espresso cups",
                  "es": "El sedimento en el fondo de las tazas de espresso",
                  "de": "Das Sediment am Boden von Espressotassen",
                  "nl": "Het sediment op de bodem van espressokopjes"
        },
        {
                  "en": "Milk foam used in cappuccino",
                  "es": "Espuma de leche usada en cappuccino",
                  "de": "Milchschaum im Cappuccino verwendet",
                  "nl": "Melkschuim gebruikt in cappuccino"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Crema is the golden-brown foam layer that forms on top of properly extracted espresso, created when high-pressure extraction (9 bars) emulsifies coffee oils and forces dissolved CO2 to form microbubbles. Quality crema characteristics include: reddish-brown color with golden highlights (not pale or dark), smooth, velvety texture (not bubbly or thin), persistence lasting 2+ minutes, and even coverage without large holes. Crema indicates freshness (fresh roasted coffee produces better crema), proper extraction pressure and temperature, appropriate grind size, and quality arabica beans. However, crema alone doesn't guarantee good taste—robusta creates more crema but arabica tastes better.",
                  "es": "La crema es la capa de espuma dorada-marrón que se forma en la parte superior del espresso extraído apropiadamente, creada cuando la extracción de alta presión (9 bares) emulsifica aceites de café y fuerza al CO2 disuelto a formar microburbujas. Las características de crema de calidad incluyen: color marrón rojizo con reflejos dorados (no pálido ni oscuro), textura suave y aterciopelada (no burbujeante ni delgada), persistencia duradera de 2+ minutos y cobertura uniforme sin agujeros grandes. La crema indica frescura (café recién tostado produce mejor crema), presión y temperatura de extracción apropiadas, tamaño de molienda apropiado y granos arábica de calidad. Sin embargo, la crema sola no garantiza buen sabor—robusta crea más crema pero arábica sabe mejor.",
                  "de": "Crema ist die golden-braune Schaumschicht, die sich auf richtig extrahiertem Espresso bildet, erzeugt wenn Hochdruck-Extraktion (9 Bar) Kaffeeöle emulgiert und gelöstes CO2 zur Bildung von Mikroblasen zwingt. Qualitäts-Crema-Merkmale umfassen: rötlich-braune Farbe mit goldenen Highlights (nicht blass oder dunkel), glatte, samtige Textur (nicht blasig oder dünn), Beständigkeit von 2+ Minuten und gleichmäßige Abdeckung ohne große Löcher. Crema zeigt Frische (frisch gerösteter Kaffee produziert bessere Crema), richtigen Extraktionsdruck und -temperatur, angemessene Mahlgröße und qualitative Arabica-Bohnen an. Jedoch garantiert Crema allein keinen guten Geschmack—Robusta erzeugt mehr Crema, aber Arabica schmeckt besser.",
                  "nl": "Crema is de goudbruine schuimlaag die vormt op goed geëxtraheerde espresso, gecreëerd wanneer hoge-druk extractie (9 bar) koffieoliën emulgeert en opgelost CO2 dwingt om microbellen te vormen. Kwaliteit crema kenmerken omvatten: roodbruin kleur met gouden highlights (niet bleek of donker), gladde, fluweelachtige textuur (niet borrelig of dun), persistentie van 2+ minuten en gelijkmatige bedekking zonder grote gaten. Crema geeft versheid aan (vers gebrande koffie produceert betere crema), juiste extractiedruk en temperatuur, geschikte maalgrootte en kwaliteit arabica bonen. Echter, crema alleen garandeert geen goede smaak—robusta creëert meer crema maar arabica smaakt beter."
        }
      },
      {
        question: {
                  "en": "What is 'channeling' in espresso extraction and how can it be prevented?",
                  "es": "¿Qué es la 'canalización' en la extracción de espresso y cómo se puede prevenir?",
                  "de": "Was ist 'Channeling' bei der Espresso-Extraktion und wie kann es verhindert werden?",
                  "nl": "Wat is 'channeling' bij espresso extractie en hoe kan het worden voorkomen?"
        },
        options: [
        {
                  "en": "Installing water filters in espresso machines",
                  "es": "Instalar filtros de agua en máquinas de espresso",
                  "de": "Installation von Wasserfiltern in Espressomaschinen",
                  "nl": "Waterfilters installeren in espressomachines"
        },
        {
                  "en": "The process of directing steam through milk",
                  "es": "El proceso de dirigir vapor a través de leche",
                  "de": "Der Prozess, Dampf durch Milch zu leiten",
                  "nl": "Het proces van stoom door melk leiden"
        },
        {
                  "en": "Creating latte art patterns",
                  "es": "Crear patrones de latte art",
                  "de": "Latte-Art-Muster erstellen",
                  "nl": "Latte art patronen creëren"
        },
        {
                  "en": "Water finding paths of least resistance through coffee puck, causing uneven extraction; prevented by proper tamping, distribution, and grind consistency",
                  "es": "Agua encontrando caminos de menor resistencia a través del disco de café, causando extracción desigual; prevenido por apisonado adecuado, distribución y consistencia de molienda",
                  "de": "Wasser findet Wege des geringsten Widerstands durch Kaffeepuck, verursacht ungleichmäßige Extraktion; verhindert durch richtiges Tampern, Verteilung und Mahlkonsistenz",
                  "nl": "Water vindt paden van minste weerstand door koffiepuck, veroorzaakt ongelijkmatige extractie; voorkomen door juist tampen, distributie en maalconsistentie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Channeling occurs when pressurized water finds weak spots or gaps in the coffee puck, rushing through these paths and extracting unevenly. This simultaneously causes under-extraction in bypassed areas (sour) and over-extraction in channels (bitter). Signs include fast extraction times, weak crema, and spraying or uneven flow from portafilter. Prevention strategies: use WDT (Weiss Distribution Technique) to break up clumps, level grounds before tamping, tamp evenly with consistent pressure (30 lbs), ensure fresh coffee with proper grind consistency, avoid tapping portafilter sides after tamping, and maintain clean basket screens. Proper distribution is critical—even slight density variations create channels.",
                  "es": "La canalización ocurre cuando agua presurizada encuentra puntos débiles o huecos en el disco de café, precipitándose por estos caminos y extrayendo de manera desigual. Esto causa simultáneamente bajo-extracción en áreas evitadas (ácido) y sobre-extracción en canales (amargo). Señales incluyen tiempos de extracción rápidos, crema débil y rociado o flujo desigual del portafiltro. Estrategias de prevención: usar WDT (Técnica de Distribución Weiss) para romper grumos, nivelar café antes de apisonar, apisonar uniformemente con presión consistente (30 lbs), asegurar café fresco con consistencia de molienda apropiada, evitar golpear los lados del portafiltro después de apisonar y mantener pantallas de cesta limpias. La distribución apropiada es crítica—incluso ligeras variaciones de densidad crean canales.",
                  "de": "Channeling tritt auf, wenn unter Druck stehendes Wasser schwache Stellen oder Lücken im Kaffeepuck findet, durch diese Wege strömt und ungleichmäßig extrahiert. Dies verursacht gleichzeitig Unterextraktion in umgangenen Bereichen (sauer) und Überextraktion in Kanälen (bitter). Anzeichen umfassen schnelle Extraktionszeiten, schwache Crema und Spritzen oder ungleichmäßigen Fluss aus Siebträger. Präventionsstrategien: WDT (Weiss Distribution Technique) verwenden um Klumpen aufzubrechen, Kaffee vor Tampern nivellieren, gleichmäßig mit konsistentem Druck tampern (30 lbs), frischen Kaffee mit richtiger Mahlkonsistenz sicherstellen, Siebträgerseitenschlagen nach Tampern vermeiden und saubere Korbsiebe warten. Richtige Verteilung ist kritisch—selbst leichte Dichte-Variationen erzeugen Kanäle.",
                  "nl": "Channeling treedt op wanneer water onder druk zwakke plekken of gaten in de koffiepuck vindt, door deze paden stroomt en ongelijk extraheert. Dit veroorzaakt gelijktijdig onder-extractie in omzeilde gebieden (zuur) en over-extractie in kanalen (bitter). Tekenen omvatten snelle extractietijden, zwakke crema en spatten of ongelijke stroom uit portafilter. Preventiestrategieën: gebruik WDT (Weiss Distribution Technique) om klonten te breken, niveau gronden voor tampen, tamp gelijkmatig met consistente druk (30 lbs), zorg voor verse koffie met juiste maalconsistentie, vermijd tikken op portafilter zijkanten na tampen en houd schone mandje schermen. Juiste distributie is kritiek—zelfs lichte dichtheidsvariaties creëren kanalen."
        }
      },
      {
        question: {
                  "en": "What is the 'first crack' and 'second crack' in coffee roasting?",
                  "es": "¿Qué es el 'primer crack' y el 'segundo crack' en el tostado de café?",
                  "de": "Was ist der 'First Crack' und 'Second Crack' beim Kaffeerösten?",
                  "nl": "Wat is de 'first crack' en 'second crack' bij het roosteren van koffie?"
        },
        options: [
        {
                  "en": "Breaking the seal on coffee packaging",
                  "es": "Romper el sello del empaque de café",
                  "de": "Brechen des Siegels an Kaffeeverpackungen",
                  "nl": "Breken van de verzegeling op koffieverpakkingen"
        },
        {
                  "en": "Physical damage to coffee beans during transport",
                  "es": "Daño físico a granos de café durante el transporte",
                  "de": "Physische Schäden an Kaffeebohnen während des Transports",
                  "nl": "Fysieke schade aan koffiebonen tijdens transport"
        },
        {
                  "en": "Quality defects in green coffee beans",
                  "es": "Defectos de calidad en granos de café verde",
                  "de": "Qualitätsmängel in grünen Kaffeebohnen",
                  "nl": "Kwaliteitsdefecten in groene koffiebonen"
        },
        {
                  "en": "Audible popping sounds during roasting indicating chemical transformations; first crack (~196°C) marks light roast, second crack (~224°C) marks dark roast",
                  "es": "Sonidos de estallido audibles durante el tostado indicando transformaciones químicas; primer crack (~196°C) marca tueste claro, segundo crack (~224°C) marca tueste oscuro",
                  "de": "Hörbare Knackgeräusche während des Röstens, die chemische Transformationen anzeigen; First Crack (~196°C) markiert helle Röstung, Second Crack (~224°C) markiert dunkle Röstung",
                  "nl": "Hoorbare knapgeluiden tijdens roosteren die chemische transformaties aangeven; first crack (~196°C) markeert lichte branding, second crack (~224°C) markeert donkere branding"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "First crack occurs around 196°C (385°F) when moisture inside the bean turns to steam, causing cells to rupture with an audible popping sound similar to popcorn. This marks the beginning of 'light roast' territory and the development of recognizable coffee flavors through Maillard reactions and caramelization. Second crack happens around 224°C (435°F) when the bean structure breaks down further, oils migrate to surface, and a quieter, faster crackling occurs (like Rice Krispies). This marks 'dark roast' development. Between first and second crack is the 'development phase' where roasters control flavor profiles. Stopping before second crack preserves origin characteristics; roasting past second crack emphasizes roast flavors over origin.",
                  "es": "El primer crack ocurre alrededor de 196°C (385°F) cuando la humedad dentro del grano se convierte en vapor, causando que las células se rompan con un sonido de estallido audible similar a palomitas. Esto marca el comienzo del territorio de 'tueste claro' y el desarrollo de sabores de café reconocibles a través de reacciones de Maillard y caramelización. El segundo crack ocurre alrededor de 224°C (435°F) cuando la estructura del grano se descompone aún más, aceites migran a la superficie y ocurre un crepitar más silencioso y rápido (como Rice Krispies). Esto marca el desarrollo de 'tueste oscuro'. Entre el primer y segundo crack está la 'fase de desarrollo' donde los tostadores controlan perfiles de sabor. Detener antes del segundo crack preserva características de origen; tostar pasado el segundo crack enfatiza sabores de tueste sobre origen.",
                  "de": "First Crack tritt bei etwa 196°C (385°F) auf, wenn Feuchtigkeit in der Bohne zu Dampf wird, was Zellen zum Platzen bringt mit hörbarem Knacken ähnlich Popcorn. Dies markiert den Beginn des 'helle Röstung' Territoriums und die Entwicklung erkennbarer Kaffeearomen durch Maillard-Reaktionen und Karamellisierung. Second Crack passiert bei etwa 224°C (435°F), wenn die Bohnenstruktur weiter zerfällt, Öle zur Oberfläche wandern und ein leiseres, schnelleres Knistern auftritt (wie Rice Krispies). Dies markiert 'dunkle Röstung' Entwicklung. Zwischen First und Second Crack ist die 'Entwicklungsphase', wo Röster Geschmacksprofile kontrollieren. Stoppen vor Second Crack bewahrt Ursprungseigenschaften; Rösten über Second Crack hinaus betont Röstaromen über Ursprung.",
                  "nl": "First crack vindt plaats rond 196°C (385°F) wanneer vocht in de boon in stoom verandert, waardoor cellen barsten met een hoorbaar knappend geluid vergelijkbaar met popcorn. Dit markeert het begin van 'lichte branding' territorium en de ontwikkeling van herkenbare koffiesmaken door Maillard reacties en karamelisatie. Second crack gebeurt rond 224°C (435°F) wanneer de boonstructuur verder afbreekt, oliën naar oppervlak migreren en een stiller, sneller knetteren optreedt (zoals Rice Krispies). Dit markeert 'donkere branding' ontwikkeling. Tussen first en second crack is de 'ontwikkelingsfase' waar branders smaakprofielen controleren. Stoppen voor second crack behoudt oorsprongskenmerken; branden voorbij second crack benadrukt brandsmaken boven oorsprong."
        }
      },
      {
        question: {
                  "en": "What is coffee 'cupping' and what is its standardized protocol?",
                  "es": "¿Qué es el 'cupping' de café y cuál es su protocolo estandarizado?",
                  "de": "Was ist Kaffee-'Cupping' und was ist sein standardisiertes Protokoll?",
                  "nl": "Wat is koffie 'cupping' en wat is het gestandaardiseerde protocol?"
        },
        options: [
        {
                  "en": "Brewing coffee in traditional cups only",
                  "es": "Preparar café solo en tazas tradicionales",
                  "de": "Kaffee nur in traditionellen Tassen brauen",
                  "nl": "Koffie alleen in traditionele kopjes zetten"
        },
        {
                  "en": "Collecting coffee samples from farms",
                  "es": "Recolectar muestras de café de fincas",
                  "de": "Sammeln von Kaffeeproben von Farmen",
                  "nl": "Verzamelen van koffiemonsters van boerderijen"
        },
        {
                  "en": "Measuring cup sizes for serving coffee",
                  "es": "Medir tamaños de taza para servir café",
                  "de": "Messung von Tassengrößen zum Servieren von Kaffee",
                  "nl": "Meten van kopmaten voor het serveren van koffie"
        },
        {
                  "en": "Standardized tasting method using 8.25g coffee per 150ml water at 93°C, evaluating aroma, flavor, aftertaste, acidity, body, balance, and defects",
                  "es": "Método de cata estandarizado usando 8.25g de café por 150ml de agua a 93°C, evaluando aroma, sabor, regusto, acidez, cuerpo, balance y defectos",
                  "de": "Standardisierte Verkostungsmethode mit 8,25g Kaffee pro 150ml Wasser bei 93°C, Bewertung von Aroma, Geschmack, Nachgeschmack, Säure, Körper, Balance und Defekten",
                  "nl": "Gestandaardiseerde proefmethode met 8,25g koffie per 150ml water bij 93°C, evaluerend aroma, smaak, nasmaak, zuurgraad, body, balans en defecten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Coffee cupping is the industry-standard sensory evaluation method developed by the SCA. Protocol: grind 8.25g coffee per 150ml capacity cup (medium-coarse), pour water heated to 93°C (200°F) directly onto grounds, steep 4 minutes, then 'break the crust' by pushing floating grounds aside while sniffing released aromatics. After breaking, skim off foam, wait until temperature drops to 70°C, then slurp coffee from a spoon to aerosolize it across the palate. Evaluate: fragrance (dry), aroma (wet), flavor, aftertaste, acidity, body, balance, uniformity, clean cup (no defects), sweetness, and overall impression. Score out of 100 points; 80+ qualifies as specialty grade. This standardized method enables consistent quality assessment globally.",
                  "es": "El cupping de café es el método estandarizado de evaluación sensorial de la industria desarrollado por la SCA. Protocolo: moler 8.25g de café por taza de capacidad de 150ml (medio-grueso), verter agua calentada a 93°C (200°F) directamente sobre el café molido, reposar 4 minutos, luego 'romper la costra' empujando café flotante a un lado mientras se huele la aromática liberada. Después de romper, quitar espuma, esperar hasta que temperatura baje a 70°C, luego sorber café de una cuchara para aerosolizarlo a través del paladar. Evaluar: fragancia (seca), aroma (húmedo), sabor, regusto, acidez, cuerpo, balance, uniformidad, taza limpia (sin defectos), dulzura e impresión general. Puntuar de 100 puntos; 80+ califica como grado specialty. Este método estandarizado permite evaluación de calidad consistente globalmente.",
                  "de": "Kaffee-Cupping ist die industrie-standardisierte sensorische Bewertungsmethode entwickelt von der SCA. Protokoll: 8,25g Kaffee pro 150ml Kapazitätstasse mahlen (mittel-grob), Wasser auf 93°C (200°F) erhitzt direkt auf Kaffeemehl gießen, 4 Minuten ziehen lassen, dann 'Kruste brechen' durch Wegschieben schwimmenden Kaffeemehls während Schnüffeln freigesetzter Aromatik. Nach Brechen Schaum abschöpfen, warten bis Temperatur auf 70°C fällt, dann Kaffee von Löffel schlürfen um ihn über Gaumen zu aerosolisieren. Bewerten: Duft (trocken), Aroma (nass), Geschmack, Nachgeschmack, Säure, Körper, Balance, Gleichmäßigkeit, saubere Tasse (keine Defekte), Süße und Gesamteindruck. Punktzahl von 100; 80+ qualifiziert als Specialty Grade. Diese standardisierte Methode ermöglicht konsistente Qualitätsbewertung global.",
                  "nl": "Koffie cupping is de industrie-standaard sensorische evaluatiemethode ontwikkeld door de SCA. Protocol: maal 8,25g koffie per 150ml capaciteit kop (medium-grof), giet water verwarmd tot 93°C (200°F) direct op gemalen koffie, laat 4 minuten trekken, dan 'breek de korst' door drijvende gemalen koffie opzij te duwen terwijl ruikend aan vrijgekomen aromaten. Na breken schuim afscheppen, wachten tot temperatuur daalt tot 70°C, dan koffie van lepel slurpen om het over gehemelte te aerosoliseren. Evalueer: geur (droog), aroma (nat), smaak, nasmaak, zuurgraad, body, balans, uniformiteit, schone kop (geen defecten), zoetheid en algehele indruk. Score van 100 punten; 80+ kwalificeert als specialty grade. Deze gestandaardiseerde methode maakt consistente kwaliteitsbeoordeling wereldwijd mogelijk."
        }
      },
      {
        question: {
                  "en": "What is the significance of 'single-origin' coffee vs 'blends'?",
                  "es": "¿Cuál es la importancia del café de 'origen único' vs 'mezclas'?",
                  "de": "Was ist die Bedeutung von 'Single-Origin' Kaffee vs 'Blends'?",
                  "nl": "Wat is de betekenis van 'single-origin' koffie vs 'blends'?"
        },
        options: [
        {
                  "en": "Blends are only used for instant coffee",
                  "es": "Las mezclas solo se usan para café instantáneo",
                  "de": "Blends werden nur für Instantkaffee verwendet",
                  "nl": "Blends worden alleen gebruikt voor instantkoffie"
        },
        {
                  "en": "There is no taste difference between them",
                  "es": "No hay diferencia de sabor entre ellos",
                  "de": "Es gibt keinen Geschmacksunterschied zwischen ihnen",
                  "nl": "Er is geen smaakverschil tussen hen"
        },
        {
                  "en": "Single-origin is always better quality than blends",
                  "es": "Origen único siempre es mejor calidad que mezclas",
                  "de": "Single-Origin ist immer bessere Qualität als Blends",
                  "nl": "Single-origin is altijd betere kwaliteit dan blends"
        },
        {
                  "en": "Single-origin showcases distinct regional terroir and flavor characteristics; blends balance flavors, consistency, and complexity across multiple origins",
                  "es": "Origen único muestra terroir regional distinto y características de sabor; mezclas equilibran sabores, consistencia y complejidad a través de múltiples orígenes",
                  "de": "Single-Origin zeigt charakteristisches regionales Terroir und Geschmackseigenschaften; Blends balancieren Aromen, Konsistenz und Komplexität über mehrere Ursprünge",
                  "nl": "Single-origin toont onderscheidend regionaal terroir en smaakkenmerken; blends balanceren smaken, consistentie en complexiteit over meerdere oorsprongen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Single-origin coffee comes from one geographic location (country, region, or specific farm/estate), showcasing unique terroir-driven characteristics like Ethiopian floral notes or Colombian caramel sweetness. It's prized for traceability, distinct flavor profiles, and seasonality but can vary batch-to-batch. Blends combine coffees from multiple origins to achieve specific goals: balance complementary flavors (bright acidity + chocolate body), maintain year-round consistency despite seasonal variations, create complexity impossible from single origins, or achieve specific roast profiles (espresso blends). Neither is inherently superior—single-origins celebrate uniqueness while blends demonstrate roaster skill in creating harmonious, consistent, complex flavors. Specialty coffee embraces both approaches depending on desired outcome.",
                  "es": "El café de origen único proviene de una ubicación geográfica (país, región o finca/finca específica), mostrando características únicas impulsadas por terroir como notas florales etíopes o dulzura de caramelo colombiano. Es valorado por trazabilidad, perfiles de sabor distintos y estacionalidad pero puede variar lote por lote. Las mezclas combinan cafés de múltiples orígenes para lograr objetivos específicos: equilibrar sabores complementarios (acidez brillante + cuerpo de chocolate), mantener consistencia durante todo el año a pesar de variaciones estacionales, crear complejidad imposible de orígenes únicos o lograr perfiles de tueste específicos (mezclas de espresso). Ninguno es inherentemente superior—orígenes únicos celebran singularidad mientras mezclas demuestran habilidad del tostador en crear sabores armoniosos, consistentes y complejos. El café specialty abraza ambos enfoques dependiendo del resultado deseado.",
                  "de": "Single-Origin Kaffee stammt aus einer geografischen Location (Land, Region oder spezifische Farm/Estate), zeigt einzigartige Terroir-getriebene Eigenschaften wie äthiopische Blumennoten oder kolumbianische Karamellsüße. Er wird für Rückverfolgbarkeit, charakteristische Geschmacksprofile und Saisonalität geschätzt, kann aber von Charge zu Charge variieren. Blends kombinieren Kaffees aus mehreren Ursprüngen um spezifische Ziele zu erreichen: komplementäre Aromen balancieren (helle Säure + Schokoladenkörper), ganzjährige Konsistenz trotz saisonaler Variationen wahren, Komplexität schaffen unmöglich aus Single-Origins, oder spezifische Röstprofile erreichen (Espresso-Blends). Keiner ist inhärent überlegen—Single-Origins feiern Einzigartigkeit während Blends Röster-Können demonstrieren in Schaffung harmonischer, konsistenter, komplexer Aromen. Specialty Coffee umarmt beide Ansätze je nach gewünschtem Ergebnis.",
                  "nl": "Single-origin koffie komt van één geografische locatie (land, regio of specifieke boerderij/landgoed), tonend unieke terroir-gedreven kenmerken zoals Ethiopische bloemige noten of Colombiaanse karamelzoetheid. Het wordt gewaardeerd om traceerbaarheid, onderscheidende smaakprofielen en seizoensgebondenheid maar kan variëren per batch. Blends combineren koffies van meerdere oorsprongen om specifieke doelen te bereiken: complementaire smaken balanceren (heldere zuurgraad + chocolade body), jaarronde consistentie handhaven ondanks seizoensvariaties, complexiteit creëren onmogelijk van single origins, of specifieke brandprofielen bereiken (espresso blends). Geen is inherent superieur—single-origins vieren uniciteit terwijl blends brander vaardigheid demonstreren in creëren van harmonieuze, consistente, complexe smaken. Specialty koffie omarmt beide benaderingen afhankelijk van gewenst resultaat."
        }
      },
      {
        question: {
                  "en": "What is 'coffee rust' (Hemileia vastatrix) and why is it significant?",
                  "es": "¿Qué es la 'roya del café' (Hemileia vastatrix) y por qué es significativa?",
                  "de": "Was ist 'Kaffeerost' (Hemileia vastatrix) und warum ist er bedeutsam?",
                  "nl": "Wat is 'koffieroest' (Hemileia vastatrix) en waarom is het significant?"
        },
        options: [
        {
                  "en": "Oxidation process that makes roasted coffee taste stale",
                  "es": "Proceso de oxidación que hace que el café tostado sepa rancio",
                  "de": "Oxidationsprozess, der gerösteten Kaffee alt schmecken lässt",
                  "nl": "Oxidatieproces dat geroosterde koffie oud doet smaken"
        },
        {
                  "en": "Corrosion found on old espresso machines",
                  "es": "Corrosión encontrada en máquinas de espresso antiguas",
                  "de": "Korrosion an alten Espressomaschinen",
                  "nl": "Corrosie gevonden op oude espressomachines"
        },
        {
                  "en": "Devastating fungal disease affecting coffee plants, responsible for major crop losses and reshaping global coffee production geography",
                  "es": "Enfermedad fúngica devastadora que afecta plantas de café, responsable de grandes pérdidas de cultivos y remodelación de la geografía de producción mundial de café",
                  "de": "Verheerende Pilzkrankheit, die Kaffeepflanzen befällt, verantwortlich für große Ernteverluste und Umgestaltung der globalen Kaffeeproduktionsgeographie",
                  "nl": "Verwoestende schimmelziekte die koffieplanten aantast, verantwoordelijk voor grote oogstverliezen en hervorming van wereldwijde koffieproductie geografie"
        },
        {
                  "en": "Natural mineral coating on green coffee beans",
                  "es": "Recubrimiento mineral natural en granos de café verde",
                  "de": "Natürliche Mineralbeschichtung auf grünen Kaffeebohnen",
                  "nl": "Natuurlijke minerale coating op groene koffiebonen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Coffee rust (la roya) is a fungal disease that attacks coffee leaves with orange-yellow powdery spores, reducing photosynthesis capacity and eventually killing plants. Historically, it devastated Ceylon's (Sri Lanka) coffee industry in the 1870s, shifting it to tea production. In 2012-2013, a major outbreak across Central America caused $3+ billion in losses and displaced thousands of coffee workers. The disease spreads rapidly in warm, humid conditions and primarily affects Arabica. Control strategies include resistant varietals (Timor Hybrid, Catimor, Ruiru 11), fungicides, proper shade management, and F1 hybrids combining resistance with quality. Climate change is expanding rust's geographic range, making it an increasing threat to global coffee security.",
                  "es": "La roya del café es una enfermedad fúngica que ataca hojas de café con esporas polvorientas naranja-amarillas, reduciendo capacidad de fotosíntesis y eventualmente matando plantas. Históricamente, devastó la industria cafetera de Ceilán (Sri Lanka) en los 1870s, cambiándola a producción de té. En 2012-2013, un brote importante en América Central causó pérdidas de $3+ mil millones y desplazó miles de trabajadores del café. La enfermedad se propaga rápidamente en condiciones cálidas y húmedas y afecta principalmente a Arábica. Estrategias de control incluyen variedades resistentes (Híbrido de Timor, Catimor, Ruiru 11), fungicidas, manejo adecuado de sombra e híbridos F1 combinando resistencia con calidad. El cambio climático está expandiendo el rango geográfico de la roya, haciéndola una amenaza creciente para la seguridad mundial del café.",
                  "de": "Kaffeerost (la roya) ist eine Pilzkrankheit, die Kaffeeblätter mit orange-gelben pulvrigen Sporen angreift, Photosynthese-Kapazität reduziert und schließlich Pflanzen tötet. Historisch verwüstete es Ceylons (Sri Lanka) Kaffeeindustrie in den 1870ern, verlagerte sie zur Teeproduktion. 2012-2013 verursachte ein großer Ausbruch in Mittelamerika Verluste von $3+ Milliarden und vertrieb Tausende Kaffeearbeiter. Die Krankheit breitet sich schnell in warmen, feuchten Bedingungen aus und betrifft hauptsächlich Arabica. Kontrollstrategien umfassen resistente Varietäten (Timor-Hybrid, Catimor, Ruiru 11), Fungizide, richtiges Schattenmanagement und F1-Hybride, die Resistenz mit Qualität kombinieren. Klimawandel erweitert Rost's geografisches Verbreitungsgebiet, macht es zu wachsender Bedrohung für globale Kaffeesicherheit.",
                  "nl": "Koffieroest (la roya) is een schimmelziekte die koffiebladeren aanvalt met oranje-gele poederachtige sporen, fotosynthese capaciteit verminderend en uiteindelijk planten dodend. Historisch verwoestte het Ceylon's (Sri Lanka) koffie-industrie in de jaren 1870, verschuivend naar theeproductie. In 2012-2013 veroorzaakte een grote uitbraak in Midden-Amerika verliezen van $3+ miljard en ontheemde duizenden koffiewerkers. De ziekte verspreidt zich snel in warme, vochtige omstandigheden en treft voornamelijk Arabica. Controlestrategieën omvatten resistente variëteiten (Timor Hybrid, Catimor, Ruiru 11), fungiciden, juist schaduwbeheer en F1 hybriden die resistentie met kwaliteit combineren. Klimaatverandering breidt roest's geografisch bereik uit, makend het een toenemende bedreiging voor wereldwijde koffiezekerheid."
        }
      },
      {
        question: {
                  "en": "What is 'microfoam' in milk steaming and how is it achieved?",
                  "es": "¿Qué es la 'microespuma' en el vaporizado de leche y cómo se logra?",
                  "de": "Was ist 'Mikroschäumen' beim Milchaufschäumen und wie wird es erreicht?",
                  "nl": "Wat is 'microschuim' bij melk stomen en hoe wordt het bereikt?"
        },
        options: [
        {
                  "en": "Large bubbles on top of steamed milk",
                  "es": "Burbujas grandes encima de leche vaporizada",
                  "de": "Große Blasen auf aufgeschäumter Milch",
                  "nl": "Grote bellen bovenop gestoomde melk"
        },
        {
                  "en": "Adding foam powder to cold milk",
                  "es": "Agregar polvo de espuma a leche fría",
                  "de": "Schaumpulver zu kalter Milch hinzufügen",
                  "nl": "Schuimpoeder toevoegen aan koude melk"
        },
        {
                  "en": "Silky, velvety milk texture with tiny uniform bubbles created by proper aeration and temperature control (60-65°C), essential for latte art",
                  "es": "Textura de leche sedosa y aterciopelada con burbujas diminutas uniformes creadas por aireación adecuada y control de temperatura (60-65°C), esencial para latte art",
                  "de": "Seidige, samtige Milchtextur mit winzigen gleichmäßigen Bläschen erzeugt durch richtige Belüftung und Temperaturkontrolle (60-65°C), wesentlich für Latte Art",
                  "nl": "Zijdezachte, fluweelachtige melktextuur met kleine uniforme belletjes gecreëerd door juiste beluchting en temperatuurcontrole (60-65°C), essentieel voor latte art"
        },
        {
                  "en": "Using only skim milk for steaming",
                  "es": "Usar solo leche descremada para vaporizar",
                  "de": "Nur Magermilch zum Aufschäumen verwenden",
                  "nl": "Alleen magere melk gebruiken voor stomen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Microfoam is the ideal milk texture for espresso drinks, characterized by glossy, paint-like consistency with microscopic bubbles (0.1-0.3mm) invisible to the naked eye. Achieving microfoam: 1) Start with cold milk (4°C) in cold pitcher, 2) Position steam wand just below surface at angle, 3) Introduce air during 'stretching phase' (0-5 seconds) creating gentle 'chirping' sound, 4) Submerge wand to 'texturing phase', creating vortex to break large bubbles into microbubbles, 5) Stop at 60-65°C (140-150°F)—proteins denature and lactose caramelizes, 6) Tap pitcher to remove any remaining bubbles, swirl to polish. Proper microfoam is sweet-tasting, creates latte art, and integrates seamlessly with espresso.",
                  "es": "La microespuma es la textura de leche ideal para bebidas de espresso, caracterizada por consistencia brillante, similar a pintura con burbujas microscópicas (0.1-0.3mm) invisibles a simple vista. Lograr microespuma: 1) Comenzar con leche fría (4°C) en jarra fría, 2) Posicionar varilla de vapor justo debajo de la superficie en ángulo, 3) Introducir aire durante 'fase de estiramiento' (0-5 segundos) creando sonido suave de 'chirrido', 4) Sumergir varilla a 'fase de texturizado', creando vórtice para romper burbujas grandes en microburbujas, 5) Detener a 60-65°C (140-150°F)—proteínas desnaturalizan y lactosa carameliza, 6) Golpear jarra para remover burbujas restantes, girar para pulir. La microespuma apropiada tiene sabor dulce, crea latte art e integra perfectamente con espresso.",
                  "de": "Mikroschäumen ist die ideale Milchtextur für Espresso-Getränke, charakterisiert durch glänzende, farbenähnliche Konsistenz mit mikroskopischen Bläschen (0,1-0,3mm) unsichtbar für das bloße Auge. Mikroschäumen erreichen: 1) Mit kalter Milch (4°C) in kaltem Kännchen beginnen, 2) Dampflanze knapp unter Oberfläche im Winkel positionieren, 3) Luft während 'Stretchphase' (0-5 Sekunden) einführen, sanftes 'Zirpen' erzeugend, 4) Lanze zur 'Texturierungsphase' eintauchen, Wirbel erzeugen um große Blasen in Mikroblasen zu brechen, 5) Bei 60-65°C (140-150°F) stoppen—Proteine denaturieren und Laktose karamellisiert, 6) Kännchen klopfen um restliche Blasen zu entfernen, schwenken zum Polieren. Richtiger Mikroschäumen schmeckt süß, erzeugt Latte Art und integriert sich nahtlos mit Espresso.",
                  "nl": "Microschuim is de ideale melktextuur voor espressodranken, gekenmerkt door glanzende, verfachtige consistentie met microscopische belletjes (0,1-0,3mm) onzichtbaar voor het blote oog. Microschuim bereiken: 1) Begin met koude melk (4°C) in koude kan, 2) Positioneer stoomstaaf net onder oppervlak in hoek, 3) Introduceer lucht tijdens 'stretch fase' (0-5 seconden) creërend zacht 'tjirpend' geluid, 4) Dompel staaf onder naar 'textuur fase', creërend vortex om grote bellen in microbellen te breken, 5) Stop bij 60-65°C (140-150°F)—eiwitten denatureren en lactose karameliseert, 6) Tik kan om resterende bellen te verwijderen, draai om te polijsten. Juist microschuim smaakt zoet, creëert latte art en integreert naadloos met espresso."
        }
      },
      {
        question: {
                  "en": "What is the World Barista Championship and what does it evaluate?",
                  "es": "¿Qué es el Campeonato Mundial de Baristas y qué evalúa?",
                  "de": "Was ist die World Barista Championship und was bewertet sie?",
                  "nl": "Wat is het World Barista Championship en wat evalueert het?"
        },
        options: [
        {
                  "en": "Latte art design competition only",
                  "es": "Solo competencia de diseño de latte art",
                  "de": "Nur Latte-Art-Design-Wettbewerb",
                  "nl": "Alleen latte art ontwerp competitie"
        },
        {
                  "en": "Speed competition for making the most drinks",
                  "es": "Competencia de velocidad para hacer la mayor cantidad de bebidas",
                  "de": "Geschwindigkeitswettbewerb für die meisten Getränke",
                  "nl": "Snelheidscompetitie voor het maken van de meeste drankjes"
        },
        {
                  "en": "Coffee machine maintenance certification",
                  "es": "Certificación de mantenimiento de máquinas de café",
                  "de": "Kaffeemaschinen-Wartungszertifizierung",
                  "nl": "Koffiemachine onderhouds certificering"
        },
        {
                  "en": "Annual competition evaluating technical skills, creativity, presentation, and sensory experience through espresso, milk beverage, and signature drink routines",
                  "es": "Competencia anual evaluando habilidades técnicas, creatividad, presentación y experiencia sensorial a través de rutinas de espresso, bebida con leche y bebida de firma",
                  "de": "Jährlicher Wettbewerb zur Bewertung technischer Fähigkeiten, Kreativität, Präsentation und sensorisches Erlebnis durch Espresso-, Milchgetränk- und Signature-Drink-Routinen",
                  "nl": "Jaarlijkse competitie die technische vaardigheden, creativiteit, presentatie en sensorische ervaring evalueert via espresso, melkdrank en signature drink routines"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The WBC, organized by World Coffee Events, is the premier barista competition held annually since 2000, showcasing coffee excellence and innovation. Competitors have 15 minutes to prepare 4 espressos, 4 milk-based drinks (cappuccinos), and 4 signature beverages for sensory judges, plus 1 of each for technical judges. Evaluation criteria include: espresso taste balance and extraction quality, milk beverage texture and temperature, signature drink creativity and taste, technical skill and workflow efficiency, cleanliness and professionalism, presentation and communication, and overall experience delivery. National champions compete at the world level, with winners becoming global coffee ambassadors. The competition drives industry innovation in techniques, equipment, and coffee quality standards.",
                  "es": "El WBC, organizado por World Coffee Events, es la competencia principal de baristas celebrada anualmente desde 2000, mostrando excelencia e innovación del café. Los competidores tienen 15 minutos para preparar 4 espressos, 4 bebidas a base de leche (cappuccinos) y 4 bebidas de firma para jueces sensoriales, más 1 de cada uno para jueces técnicos. Criterios de evaluación incluyen: balance de sabor del espresso y calidad de extracción, textura y temperatura de bebida con leche, creatividad y sabor de bebida de firma, habilidad técnica y eficiencia de flujo de trabajo, limpieza y profesionalismo, presentación y comunicación y entrega de experiencia general. Campeones nacionales compiten a nivel mundial, con ganadores convirtiéndose en embajadores mundiales del café. La competencia impulsa innovación de la industria en técnicas, equipo y estándares de calidad del café.",
                  "de": "Die WBC, organisiert von World Coffee Events, ist der führende Barista-Wettbewerb, der seit 2000 jährlich stattfindet und Kaffee-Exzellenz und Innovation präsentiert. Teilnehmer haben 15 Minuten Zeit, 4 Espresso, 4 Milchgetränke (Cappuccinos) und 4 Signature-Getränke für sensorische Richter sowie je 1 für technische Richter zuzubereiten. Bewertungskriterien umfassen: Espresso-Geschmacksbalance und Extraktionsqualität, Milchgetränk-Textur und -Temperatur, Signature-Drink-Kreativität und -Geschmack, technisches Können und Workflow-Effizienz, Sauberkeit und Professionalität, Präsentation und Kommunikation sowie Gesamterlebnis-Bereitstellung. Nationale Champions konkurrieren auf Weltebene, Gewinner werden zu globalen Kaffee-Botschaftern. Der Wettbewerb treibt Brancheninnovation in Techniken, Ausrüstung und Kaffeequalitätsstandards voran.",
                  "nl": "Het WBC, georganiseerd door World Coffee Events, is de toonaangevende barista competitie jaarlijks gehouden sinds 2000, tonend koffie excellentie en innovatie. Deelnemers hebben 15 minuten om 4 espresso's, 4 melkgebaseerde dranken (cappuccino's) en 4 signature dranken voor sensorische juryleden te bereiden, plus 1 van elk voor technische juryleden. Evaluatiecriteria omvatten: espresso smaakbalans en extractiekwaliteit, melkdrank textuur en temperatuur, signature drink creativiteit en smaak, technische vaardigheid en workflow efficiëntie, netheid en professionaliteit, presentatie en communicatie en algehele ervaring levering. Nationale kampioenen wedijveren op wereldniveau, met winnaars die mondiale koffie ambassadeurs worden. De competitie drijft industrie-innovatie in technieken, apparatuur en koffiekwaliteitsstandaarden."
        }
      },
      {
        question: {
                  "en": "What is the difference between 'washed' and 'natural' coffee processing methods?",
                  "es": "¿Cuál es la diferencia entre los métodos de procesamiento 'lavado' y 'natural' del café?",
                  "de": "Was ist der Unterschied zwischen 'gewaschenen' und 'natürlichen' Kaffeeverarbeitungsmethoden?",
                  "nl": "Wat is het verschil tussen 'gewassen' en 'natuurlijke' koffieverwerkingsmethoden?"
        },
        options: [
        {
                  "en": "They are the same process with different names",
                  "es": "Son el mismo proceso con diferentes nombres",
                  "de": "Sie sind der gleiche Prozess mit verschiedenen Namen",
                  "nl": "Ze zijn hetzelfde proces met verschillende namen"
        },
        {
                  "en": "Natural is always higher quality than washed",
                  "es": "Natural siempre es de mayor calidad que lavado",
                  "de": "Natürlich ist immer höhere Qualität als gewaschen",
                  "nl": "Natuurlijk is altijd hogere kwaliteit dan gewassen"
        },
        {
                  "en": "Washed removes fruit before drying (clean, bright flavors); natural dries whole cherries (fruity, complex, sweet flavors)",
                  "es": "Lavado remueve fruta antes del secado (sabores limpios, brillantes); natural seca cerezas enteras (sabores afrutados, complejos, dulces)",
                  "de": "Gewaschen entfernt Frucht vor Trocknung (saubere, helle Aromen); Natürlich trocknet ganze Kirschen (fruchtige, komplexe, süße Aromen)",
                  "nl": "Gewassen verwijdert vrucht voor drogen (schone, heldere smaken); natuurlijk droogt hele kersen (fruitige, complexe, zoete smaken)"
        },
        {
                  "en": "Washed uses chemicals; natural uses only water",
                  "es": "Lavado usa químicos; natural usa solo agua",
                  "de": "Gewaschen verwendet Chemikalien; Natürlich nur Wasser",
                  "nl": "Gewassen gebruikt chemicaliën; natuurlijk alleen water"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Washed (wet) processing: cherries are depulped within 24 hours, fermented 12-48 hours to remove mucilage, washed clean, then dried to 11-12% moisture. This produces clean, bright, consistent flavors emphasizing acidity and origin terroir. Natural (dry) processing: whole cherries sun-dry 3-4 weeks on raised beds or patios until reaching 11-12% moisture, then hulled. This produces fruity, complex, sweet, wine-like flavors with heavier body but risks defects without careful management. Washed requires more water and infrastructure but offers quality control; natural is traditional, water-efficient, and creates distinctive profiles now prized in specialty coffee. Each method profoundly influences final cup character.",
                  "es": "Procesamiento lavado (húmedo): cerezas se despulpan dentro de 24 horas, fermentan 12-48 horas para remover mucílago, lavan limpio, luego secan a 11-12% humedad. Esto produce sabores limpios, brillantes, consistentes enfatizando acidez y terroir de origen. Procesamiento natural (seco): cerezas enteras se secan al sol 3-4 semanas en camas elevadas o patios hasta alcanzar 11-12% humedad, luego descascaran. Esto produce sabores afrutados, complejos, dulces, similares al vino con cuerpo más pesado pero arriesga defectos sin manejo cuidadoso. Lavado requiere más agua e infraestructura pero ofrece control de calidad; natural es tradicional, eficiente en agua y crea perfiles distintivos ahora valorados en café specialty. Cada método influencia profundamente el carácter de taza final.",
                  "de": "Gewaschene (nasse) Verarbeitung: Kirschen werden innerhalb 24 Stunden entpulpt, 12-48 Stunden fermentiert um Schleim zu entfernen, sauber gewaschen, dann auf 11-12% Feuchtigkeit getrocknet. Dies produziert saubere, helle, konsistente Aromen, die Säure und Ursprungs-Terroir betonen. Natürliche (trockene) Verarbeitung: ganze Kirschen sonnentrocknen 3-4 Wochen auf erhöhten Betten oder Patios bis Erreichen von 11-12% Feuchtigkeit, dann geschält. Dies produziert fruchtige, komplexe, süße, weinähnliche Aromen mit schwererem Körper, birgt aber Risiken für Defekte ohne sorgfältiges Management. Gewaschen benötigt mehr Wasser und Infrastruktur, bietet aber Qualitätskontrolle; Natürlich ist traditionell, wassereffizient und erzeugt charakteristische Profile, jetzt geschätzt in Specialty Coffee. Jede Methode beeinflusst endgültigen Tassencharakter tiefgreifend.",
                  "nl": "Gewassen (natte) verwerking: kersen worden binnen 24 uur gepulpt, 12-48 uur gefermenteerd om mucilage te verwijderen, schoon gewassen, dan gedroogd tot 11-12% vocht. Dit produceert schone, heldere, consistente smaken die zuurgraad en oorsprongs terroir benadrukken. Natuurlijke (droge) verwerking: hele kersen zongedrogod 3-4 weken op verhoogde bedden of patio's tot bereiken 11-12% vocht, dan gepeld. Dit produceert fruitige, complexe, zoete, wijnachtige smaken met zwaardere body maar risiceert defecten zonder zorgvuldig beheer. Gewassen vereist meer water en infrastructuur maar biedt kwaliteitscontrole; natuurlijk is traditioneel, waterefficiënt en creëert onderscheidende profielen nu gewaardeerd in specialty koffie. Elke methode beïnvloedt finaal kopkarakter diepgaand."
        }
      },
      {
        question: {
                  "en": "What is 'pressure profiling' in modern espresso machines and why is it used?",
                  "es": "¿Qué es el 'perfilado de presión' en máquinas de espresso modernas y por qué se usa?",
                  "de": "Was ist 'Druckprofilierung' in modernen Espressomaschinen und warum wird es verwendet?",
                  "nl": "Wat is 'drukprofilering' in moderne espressomachines en waarom wordt het gebruikt?"
        },
        options: [
        {
                  "en": "Measuring portafilter pressure with gauges",
                  "es": "Medir presión del portafiltro con manómetros",
                  "de": "Messung des Siebträgerdrucks mit Manometern",
                  "nl": "Meten van portafilter druk met meters"
        },
        {
                  "en": "Maintaining constant 9 bar pressure throughout extraction",
                  "es": "Mantener presión constante de 9 bares durante toda la extracción",
                  "de": "Aufrechterhaltung konstanten 9-Bar-Drucks während gesamter Extraktion",
                  "nl": "Handhaven van constante 9 bar druk gedurende extractie"
        },
        {
                  "en": "Calibrating pressure relief valves",
                  "es": "Calibrar válvulas de alivio de presión",
                  "de": "Kalibrierung von Druckentlastungsventilen",
                  "nl": "Kalibreren van drukveiligheidsafsluiters"
        },
        {
                  "en": "Dynamically adjusting pump pressure during extraction (pre-infusion, ramp-up, decline) to control flow rate and optimize flavor extraction",
                  "es": "Ajustar dinámicamente presión de bomba durante extracción (pre-infusión, rampa, declive) para controlar tasa de flujo y optimizar extracción de sabor",
                  "de": "Dynamische Anpassung des Pumpendrucks während Extraktion (Vorinfusion, Hochlauf, Abfall) zur Kontrolle der Fließrate und Optimierung der Geschmacksextraktion",
                  "nl": "Dynamisch aanpassen van pompdruk tijdens extractie (pre-infusie, oploop, daling) om stroomsnelheid te controleren en smaakextractie te optimaliseren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pressure profiling allows baristas to vary pump pressure throughout the extraction shot rather than maintaining constant 9 bars. Common profiles: 1) Pre-infusion (2-4 bars, 5-10s) gently saturates grounds, preventing channeling; 2) Ramp to full pressure (6-9 bars) for main extraction; 3) Declining pressure toward end (4-6 bars) reduces bitterness and extends sweetness. Benefits include: better extraction control for different roast levels/origins, reduced channeling through gentler pre-infusion, enhanced sweetness and reduced astringency, and ability to extract challenging coffees (very light/dark roasts). Machines like La Marzocco GS3 MP, Decent Espresso, and Slayer offer pressure profiling capabilities, representing cutting-edge espresso technology.",
                  "es": "El perfilado de presión permite a baristas variar presión de bomba durante el shot de extracción en lugar de mantener 9 bares constantes. Perfiles comunes: 1) Pre-infusión (2-4 bares, 5-10s) satura suavemente café molido, previniendo canalización; 2) Rampa a presión completa (6-9 bares) para extracción principal; 3) Presión decreciente hacia el final (4-6 bares) reduce amargor y extiende dulzura. Beneficios incluyen: mejor control de extracción para diferentes niveles de tueste/orígenes, canalización reducida mediante pre-infusión más suave, dulzura mejorada y astringencia reducida, y capacidad de extraer cafés desafiantes (tuestes muy claros/oscuros). Máquinas como La Marzocco GS3 MP, Decent Espresso y Slayer ofrecen capacidades de perfilado de presión, representando tecnología de espresso de vanguardia.",
                  "de": "Druckprofilierung ermöglicht Baristas, Pumpendruck während des Extraktions-Shots zu variieren statt konstante 9 Bar beizubehalten. Übliche Profile: 1) Vorinfusion (2-4 Bar, 5-10s) sättigt Kaffeemehl sanft, verhindert Channeling; 2) Hochlauf auf vollen Druck (6-9 Bar) für Hauptextraktion; 3) Abfallender Druck zum Ende (4-6 Bar) reduziert Bitterkeit und verlängert Süße. Vorteile umfassen: bessere Extraktionskontrolle für verschiedene Röstgrade/Ursprünge, reduziertes Channeling durch sanftere Vorinfusion, erhöhte Süße und reduzierte Adstringenz, sowie Fähigkeit, herausfordernde Kaffees zu extrahieren (sehr helle/dunkle Röstungen). Maschinen wie La Marzocco GS3 MP, Decent Espresso und Slayer bieten Druckprofilierungsfähigkeiten, repräsentieren modernste Espresso-Technologie.",
                  "nl": "Drukprofilering stelt barista's in staat pompdruk te variëren gedurende het extractie shot in plaats van constante 9 bar te handhaven. Gebruikelijke profielen: 1) Pre-infusie (2-4 bar, 5-10s) verzadigt gemalen koffie zachtjes, voorkomt channeling; 2) Oploop naar volle druk (6-9 bar) voor hoofdextractie; 3) Dalende druk naar einde (4-6 bar) vermindert bitterheid en verlengt zoetheid. Voordelen omvatten: betere extractiecontrole voor verschillende brandniveaus/oorsprongen, verminderd channeling door zachtere pre-infusie, verhoogde zoetheid en verminderde samentrekking, en vermogen om uitdagende koffies te extraheren (zeer lichte/donkere brandingen). Machines zoals La Marzocco GS3 MP, Decent Espresso en Slayer bieden drukprofileringsmogelijkheden, vertegenwoordigend geavanceerde espresso technologie."
        }
      },
      {
        question: {
                  "en": "What is 'solvent-free' or 'Swiss Water' decaffeination and how does it preserve flavor?",
                  "es": "¿Qué es la descafeinación 'sin solvente' o 'Swiss Water' y cómo preserva el sabor?",
                  "de": "Was ist 'lösungsmittelfreie' oder 'Swiss Water' Entkoffeinierung und wie bewahrt sie den Geschmack?",
                  "nl": "Wat is 'oplosmiddelvrije' of 'Swiss Water' decafeïnering en hoe behoudt het de smaak?"
        },
        options: [
        {
                  "en": "Chemical solvents extract only caffeine molecules selectively",
                  "es": "Solventes químicos extraen solo moléculas de cafeína selectivamente",
                  "de": "Chemische Lösungsmittel extrahieren nur Koffeinmoleküle selektiv",
                  "nl": "Chemische oplosmiddelen extraheren alleen cafeïnemoleculen selectief"
        },
        {
                  "en": "Freezing beans removes caffeine crystals mechanically",
                  "es": "Congelar granos elimina cristales de cafeína mecánicamente",
                  "de": "Gefrieren von Bohnen entfernt Koffein-Kristalle mechanisch",
                  "nl": "Bevriezen van bonen verwijdert cafeïnekristallen mechanisch"
        },
        {
                  "en": "Uses water and carbon filters to remove caffeine while retaining flavor compounds through osmosis and diffusion equilibrium",
                  "es": "Usa agua y filtros de carbón para eliminar cafeína mientras retiene compuestos de sabor mediante ósmosis y equilibrio de difusión",
                  "de": "Verwendet Wasser und Kohlefilter zur Koffeinentfernung bei Erhalt der Geschmacksverbindungen durch Osmose und Diffusionsgleichgewicht",
                  "nl": "Gebruikt water en koolstoffilters om cafeïne te verwijderen terwijl smaakverbindingen behouden blijven door osmose en diffusie-evenwicht"
        },
        {
                  "en": "Supercritical alcohol extraction under high heat",
                  "es": "Extracción supercrítica con alcohol bajo alto calor",
                  "de": "Überkritische Alkoholextraktion unter hoher Hitze",
                  "nl": "Superkritische alcohol extractie onder hoge hitte"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Swiss Water Process uses only water, temperature, and time to remove 99.9% of caffeine. Green beans soak in hot water (Green Coffee Extract/GCE), which is saturated with all flavor compounds except caffeine. As beans release caffeine, the equilibrium prevents flavor loss—caffeine exits while flavors stay. Carbon filters remove caffeine from the GCE, which is reused. This chemical-free method produces the highest quality decaf, preserving origin characteristics better than methylene chloride or ethyl acetate processes. It's the preferred method for specialty coffee decaffeination.",
                  "es": "El Proceso Swiss Water usa solo agua, temperatura y tiempo para eliminar 99.9% de cafeína. Granos verdes se remojan en agua caliente (Extracto de Café Verde/GCE), saturado con todos los compuestos de sabor excepto cafeína. Cuando los granos liberan cafeína, el equilibrio previene pérdida de sabor—cafeína sale mientras sabores permanecen. Filtros de carbón eliminan cafeína del GCE, que se reutiliza. Este método libre de químicos produce descaf de más alta calidad, preservando características de origen mejor que procesos de cloruro de metileno o acetato de etilo. Es el método preferido para descafeinación de café especial.",
                  "de": "Der Swiss Water Prozess verwendet nur Wasser, Temperatur und Zeit zur Entfernung von 99,9% Koffein. Grüne Bohnen ziehen in heißem Wasser (Grüner Kaffee Extrakt/GCE), der mit allen Geschmacksverbindungen außer Koffein gesättigt ist. Wenn Bohnen Koffein freisetzen, verhindert das Gleichgewicht Geschmacksverlust—Koffein geht raus, Geschmack bleibt. Kohlefilter entfernen Koffein aus GCE, das wiederverwendet wird. Diese chemiefreie Methode produziert höchste Decaf-Qualität, bewahrt Ursprungscharakteristika besser als Methylenchlorid- oder Ethylacetat-Prozesse. Es ist die bevorzugte Methode für Specialty-Kaffee-Entkoffeinierung.",
                  "nl": "Het Swiss Water Proces gebruikt alleen water, temperatuur en tijd om 99,9% cafeïne te verwijderen. Groene bonen weken in heet water (Groene Koffie Extract/GCE), verzadigd met alle smaakverbindingen behalve cafeïne. Als bonen cafeïne vrijgeven, voorkomt het evenwicht smaakverlies—cafeïne gaat eruit terwijl smaken blijven. Koolstoffilters verwijderen cafeïne uit GCE, dat hergebruikt wordt. Deze chemievrije methode produceert hoogste kwaliteit decaf, behoudt oorsprongkenmerken beter dan methyleenchloride of ethylacetaat processen. Het is de voorkeursmethode voor specialty koffie decafeïnering."
        }
      },
      {
        question: {
                  "en": "What is the 'honey process' (pulped natural) and how does it affect coffee flavor compared to washed processing?",
                  "es": "¿Qué es el 'proceso honey' (natural despulpado) y cómo afecta el sabor del café comparado con el procesamiento lavado?",
                  "de": "Was ist der 'Honey-Prozess' (entpulpt natürlich) und wie beeinflusst er den Kaffeegeschmack im Vergleich zur gewaschenen Verarbeitung?",
                  "nl": "Wat is het 'honey proces' (pulped natural) en hoe beïnvloedt het de koffiesmaak vergeleken met gewassen verwerking?"
        },
        options: [
        {
                  "en": "Fermentation in honey-water solutions for sweetness",
                  "es": "Fermentación en soluciones de miel-agua para dulzura",
                  "de": "Fermentation in Honig-Wasser-Lösungen für Süße",
                  "nl": "Fermentatie in honing-water oplossingen voor zoetheid"
        },
        {
                  "en": "Coffee processed by bees in the drying phase",
                  "es": "Café procesado por abejas en la fase de secado",
                  "de": "Kaffee von Bienen in der Trocknungsphase verarbeitet",
                  "nl": "Koffie verwerkt door bijen in de droogfase"
        },
        {
                  "en": "Adds honey syrup to beans during fermentation",
                  "es": "Añade jarabe de miel a granos durante fermentación",
                  "de": "Fügt Honigsirup zu Bohnen während Fermentation hinzu",
                  "nl": "Voegt honingstroop toe aan bonen tijdens fermentatie"
        },
        {
                  "en": "Removes skin but leaves varying amounts of sticky mucilage during drying, creating sweetness between washed clarity and natural fruitiness",
                  "es": "Elimina piel pero deja cantidades variables de mucílago pegajoso durante secado, creando dulzura entre claridad lavada y afrutado natural",
                  "de": "Entfernt Haut aber lässt variierende Mengen klebriger Mucilage während Trocknung, erzeugt Süße zwischen gewaschener Klarheit und natürlicher Fruchtigkeit",
                  "nl": "Verwijdert schil maar laat variërende hoeveelheden kleverig mucilage tijdens drogen, creëert zoetheid tussen gewassen helderheid en natuurlijke fruitigheid"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Honey processing removes the cherry skin but leaves varying amounts of mucilage (the sticky, honey-like layer) on the bean during drying. Classifications: White honey (90% mucilage removed), Yellow (75%), Red (50%), Black (25%). More mucilage = longer drying + more fermentation = greater sweetness and body. This method bridges washed (clean, acidic) and natural (fruity, heavy body) profiles, offering enhanced sweetness, balanced acidity, and medium body. Popular in Costa Rica, it requires careful drying management to prevent mold while developing complex sugary, caramel, and fruit notes.",
                  "es": "El procesamiento honey elimina la piel de la cereza pero deja cantidades variables de mucílago (la capa pegajosa similar a miel) en el grano durante el secado. Clasificaciones: Honey blanco (90% mucílago eliminado), Amarillo (75%), Rojo (50%), Negro (25%). Más mucílago = secado más largo + más fermentación = mayor dulzura y cuerpo. Este método une perfiles lavado (limpio, ácido) y natural (afrutado, cuerpo pesado), ofreciendo dulzura mejorada, acidez equilibrada y cuerpo medio. Popular en Costa Rica, requiere gestión cuidadosa de secado para prevenir moho mientras desarrolla notas complejas azucaradas, caramelo y frutas.",
                  "de": "Honey-Verarbeitung entfernt Kirschenhaut, lässt aber variierende Mengen Mucilage (klebrige, honigartige Schicht) auf Bohne während Trocknung. Klassifikationen: Weißer Honey (90% Mucilage entfernt), Gelb (75%), Rot (50%), Schwarz (25%). Mehr Mucilage = längere Trocknung + mehr Fermentation = größere Süße und Körper. Diese Methode verbindet gewaschene (sauber, säuerlich) und natürliche (fruchtig, schwerer Körper) Profile, bietet erhöhte Süße, ausgewogene Säure und mittleren Körper. Beliebt in Costa Rica, erfordert sorgfältiges Trocknungsmanagement zur Schimmelvermeidung bei Entwicklung komplexer zuckriger, Karamell- und Fruchtnoten.",
                  "nl": "Honey verwerking verwijdert kersenschil maar laat variërende hoeveelheden mucilage (de kleverige, honingachtige laag) op de boon tijdens drogen. Classificaties: Witte honey (90% mucilage verwijderd), Geel (75%), Rood (50%), Zwart (25%). Meer mucilage = langer drogen + meer fermentatie = grotere zoetheid en body. Deze methode verbindt gewassen (schoon, zuur) en natuurlijke (fruitig, zware body) profielen, biedt verhoogde zoetheid, gebalanceerde zuurgraad en medium body. Populair in Costa Rica, vereist zorgvuldig droogbeheer om schimmel te voorkomen terwijl complexe suikerachtige, karamel en fruitnoten ontwikkelen."
        }
      },
      {
        question: {
                  "en": "What is Q Grading and what does it signify in the specialty coffee industry?",
                  "es": "¿Qué es el Q Grading y qué significa en la industria del café de especialidad?",
                  "de": "Was ist Q Grading und was bedeutet es in der Specialty-Kaffee-Industrie?",
                  "nl": "Wat is Q Grading en wat betekent het in de specialty koffie-industrie?"
        },
        options: [
        {
                  "en": "A standardized certification system evaluating coffee quality on 100-point scale, with 80+ qualifying as specialty grade",
                  "es": "Un sistema de certificación estandarizado que evalúa calidad del café en escala de 100 puntos, con 80+ calificando como grado especial",
                  "de": "Ein standardisiertes Zertifizierungssystem zur Bewertung der Kaffeequalität auf 100-Punkte-Skala, wobei 80+ als Specialty-Grad qualifiziert",
                  "nl": "Een gestandaardiseerd certificeringssysteem dat koffiekwaliteit evalueert op 100-punten schaal, waarbij 80+ kwalificeert als specialty grade"
        },
        {
                  "en": "A quick quality check for defects only",
                  "es": "Una verificación rápida de calidad solo para defectos",
                  "de": "Eine schnelle Qualitätsprüfung nur für Defekte",
                  "nl": "Een snelle kwaliteitscontrole alleen voor defecten"
        },
        {
                  "en": "Organic certification for sustainable farming",
                  "es": "Certificación orgánica para agricultura sostenible",
                  "de": "Bio-Zertifizierung für nachhaltige Landwirtschaft",
                  "nl": "Biologische certificering voor duurzame landbouw"
        },
        {
                  "en": "Caffeine content measurement standard",
                  "es": "Estándar de medición de contenido de cafeína",
                  "de": "Standard für Koffeingehaltsmessung",
                  "nl": "Cafeïnegehalte meetstandaard"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Q Grading is the global standard for evaluating coffee quality, administered by the Coffee Quality Institute (CQI). Licensed Q Graders use standardized cupping protocols to score coffee across 10 attributes: fragrance/aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, and overall impression. Scoring: 90-100 (Outstanding), 85-89.99 (Excellent), 80-84.99 (Very Good/Specialty), below 80 (not specialty). This system ensures objective quality assessment, supports fair pricing based on merit, and provides transparency throughout the supply chain. Q Grader certification requires rigorous training and testing, with recertification every three years.",
                  "es": "Q Grading es el estándar global para evaluar calidad del café, administrado por el Coffee Quality Institute (CQI). Q Graders licenciados usan protocolos de catación estandarizados para calificar café en 10 atributos: fragancia/aroma, sabor, retrogusto, acidez, cuerpo, balance, uniformidad, taza limpia, dulzura e impresión general. Puntuación: 90-100 (Sobresaliente), 85-89.99 (Excelente), 80-84.99 (Muy Bueno/Especial), debajo de 80 (no especial). Este sistema asegura evaluación objetiva de calidad, apoya precios justos basados en mérito y proporciona transparencia en toda la cadena de suministro. La certificación Q Grader requiere entrenamiento y pruebas rigurosas, con recertificación cada tres años.",
                  "de": "Q Grading ist der globale Standard zur Bewertung der Kaffeequalität, verwaltet vom Coffee Quality Institute (CQI). Lizenzierte Q Grader verwenden standardisierte Cupping-Protokolle zur Bewertung von Kaffee über 10 Attribute: Duft/Aroma, Geschmack, Nachgeschmack, Säure, Körper, Balance, Einheitlichkeit, saubere Tasse, Süße und Gesamteindruck. Bewertung: 90-100 (Herausragend), 85-89,99 (Exzellent), 80-84,99 (Sehr Gut/Specialty), unter 80 (kein Specialty). Dieses System gewährleistet objektive Qualitätsbewertung, unterstützt faire Preisgestaltung nach Verdienst und bietet Transparenz in der gesamten Lieferkette. Q Grader Zertifizierung erfordert rigoroses Training und Testen, mit Rezertifizierung alle drei Jahre.",
                  "nl": "Q Grading is de wereldwijde standaard voor het evalueren van koffiekwaliteit, beheerd door het Coffee Quality Institute (CQI). Gelicenseerde Q Graders gebruiken gestandaardiseerde cupping protocollen om koffie te scoren op 10 attributen: geur/aroma, smaak, nasmaak, zuurgraad, body, balans, uniformiteit, schone kop, zoetheid en algemene indruk. Scoring: 90-100 (Uitstekend), 85-89,99 (Excellent), 80-84,99 (Zeer Goed/Specialty), onder 80 (niet specialty). Dit systeem verzekert objectieve kwaliteitsbeoordeling, ondersteunt eerlijke prijzen gebaseerd op verdienste en biedt transparantie door de hele toeleveringsketen. Q Grader certificering vereist rigoureuze training en testen, met hercertificering elke drie jaar."
        }
      },
      {
        question: {
                  "en": "What is the science behind 'bloom time' in pour-over coffee and what does it indicate?",
                  "es": "¿Cuál es la ciencia detrás del 'tiempo de bloom' en café por vertido y qué indica?",
                  "de": "Was ist die Wissenschaft hinter 'Bloom-Zeit' beim Pour-Over-Kaffee und was zeigt sie an?",
                  "nl": "Wat is de wetenschap achter 'bloom tijd' bij pour-over koffie en wat geeft het aan?"
        },
        options: [
        {
                  "en": "CO2 degassing rate indicating roast freshness—longer vigorous bloom means fresher coffee with more trapped gases",
                  "es": "Tasa de desgasificación de CO2 indicando frescura del tueste—bloom vigoroso más largo significa café más fresco con más gases atrapados",
                  "de": "CO2-Entgasungsrate zeigt Röstfrische an—längerer kräftiger Bloom bedeutet frischeren Kaffee mit mehr eingeschlossenen Gasen",
                  "nl": "CO2 ontgassingssnelheid die roost frisheid aangeeft—langere krachtige bloom betekent versere koffie met meer gevangen gassen"
        },
        {
                  "en": "Surface tension breaking indicating water quality",
                  "es": "Ruptura de tensión superficial indicando calidad del agua",
                  "de": "Oberflächenspannungsbruch zeigt Wasserqualität an",
                  "nl": "Oppervlaktespanning breken geeft waterkwaliteit aan"
        },
        {
                  "en": "Flavor compound activation requiring precise timing",
                  "es": "Activación de compuestos de sabor que requiere tiempo preciso",
                  "de": "Geschmacksverbindungsaktivierung erfordert präzises Timing",
                  "nl": "Smaakverbinding activatie vereist precieze timing"
        },
        {
                  "en": "Temperature stabilization phase for optimal extraction",
                  "es": "Fase de estabilización de temperatura para extracción óptima",
                  "de": "Temperaturstabilisierungsphase für optimale Extraktion",
                  "nl": "Temperatuur stabilisatie fase voor optimale extractie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "When hot water first contacts fresh coffee, trapped CO2 (produced during roasting and stored in bean cellular structure) rapidly escapes, causing the coffee bed to bubble and expand—the 'bloom.' Vigorous blooming (30-45 seconds, using 2-3× coffee weight in water) indicates: 1) Fresh roast (1-30 days off-roast optimal); 2) Proper degassing allowing even extraction; 3) Sufficient porosity for water penetration. Minimal bloom suggests stale coffee (CO2 escaped) or very light roasts (less CO2 produced). The bloom phase is crucial—it prevents channeling by allowing controlled degassing before main pour, ensuring uniform bed saturation and even extraction.",
                  "es": "Cuando el agua caliente contacta primero el café fresco, CO2 atrapado (producido durante tostado y almacenado en estructura celular del grano) escapa rápidamente, causando que el lecho de café burbujee y se expanda—el 'bloom'. Bloom vigoroso (30-45 segundos, usando 2-3× peso del café en agua) indica: 1) Tueste fresco (1-30 días post-tueste óptimo); 2) Desgasificación apropiada permitiendo extracción uniforme; 3) Porosidad suficiente para penetración de agua. Bloom mínimo sugiere café rancio (CO2 escapó) o tuestes muy claros (menos CO2 producido). La fase bloom es crucial—previene canalización permitiendo desgasificación controlada antes del vertido principal, asegurando saturación uniforme del lecho y extracción uniforme.",
                  "de": "Wenn heißes Wasser frischen Kaffee berührt, entweicht eingeschlossenes CO2 (während Rösten produziert und in Bohnen-Zellstruktur gespeichert) schnell, verursacht Sprudeln und Ausdehnung des Kaffeebetts—der 'Bloom'. Kräftiger Bloom (30-45 Sekunden, 2-3× Kaffeegewicht in Wasser) zeigt an: 1) Frische Röstung (1-30 Tage nach Röstung optimal); 2) Richtige Entgasung ermöglicht gleichmäßige Extraktion; 3) Ausreichende Porosität für Wasserpenetration. Minimaler Bloom deutet auf alten Kaffee (CO2 entwichen) oder sehr helle Röstungen (weniger CO2 produziert). Bloom-Phase ist entscheidend—verhindert Kanalbildung durch kontrollierte Entgasung vor Hauptguss, gewährleistet gleichmäßige Bettsättigung und gleichmäßige Extraktion.",
                  "nl": "Wanneer heet water vers koffie raakt, ontsnapt gevangen CO2 (geproduceerd tijdens roosteren en opgeslagen in boon cellulaire structuur) snel, veroorzaakt borrelen en uitzetten van koffiebed—de 'bloom'. Krachtige blooming (30-45 seconden, gebruikmakend van 2-3× koffiegewicht in water) geeft aan: 1) Verse roost (1-30 dagen na roosteren optimaal); 2) Juiste ontgassing waardoor gelijkmatige extractie; 3) Voldoende porositeit voor waterpenetratie. Minimale bloom suggereert oude koffie (CO2 ontsnapt) of zeer lichte roosts (minder CO2 geproduceerd). Bloom fase is cruciaal—voorkomt channeling door gecontroleerde ontgassing voor hoofd giet, verzekert uniforme bed saturatie en gelijkmatige extractie."
        }
      },
      {
        question: {
                  "en": "What is TDS (Total Dissolved Solids) measurement and how is it used to optimize coffee brewing?",
                  "es": "¿Qué es la medición de TDS (Sólidos Disueltos Totales) y cómo se usa para optimizar la preparación de café?",
                  "de": "Was ist TDS (Total Dissolved Solids) Messung und wie wird sie zur Optimierung des Kaffeebrühens verwendet?",
                  "nl": "Wat is TDS (Total Dissolved Solids) meting en hoe wordt het gebruikt om koffie zetten te optimaliseren?"
        },
        options: [
        {
                  "en": "Measures percentage of coffee compounds in beverage, enabling calculation of extraction yield to diagnose under/over-extraction",
                  "es": "Mide porcentaje de compuestos de café en bebida, permitiendo cálculo de rendimiento de extracción para diagnosticar sub/sobre-extracción",
                  "de": "Misst Prozentsatz der Kaffeeverbindungen in Getränk, ermöglicht Berechnung der Extraktionsausbeute zur Diagnose von Unter-/Überextraktion",
                  "nl": "Meet percentage van koffieverbindingen in drank, maakt berekening van extractieopbrengst mogelijk om onder/over-extractie te diagnosticeren"
        },
        {
                  "en": "Temperature difference sensor for brewing precision",
                  "es": "Sensor de diferencia de temperatura para precisión de preparación",
                  "de": "Temperaturdifferenzsensor für Brühpräzision",
                  "nl": "Temperatuur verschil sensor voor zetprecisie"
        },
        {
                  "en": "Timing device for shot duration monitoring",
                  "es": "Dispositivo de tiempo para monitoreo de duración de shot",
                  "de": "Zeitgerät für Shot-Dauerüberwachung",
                  "nl": "Timing apparaat voor shot duur monitoring"
        },
        {
                  "en": "Pressure differential gauge in espresso systems",
                  "es": "Medidor de presión diferencial en sistemas de espresso",
                  "de": "Druckdifferenzmesser in Espresso-Systemen",
                  "nl": "Druk differentiaal meter in espresso systemen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "TDS measures concentration of dissolved coffee solids in brewed beverage, expressed as percentage (typically 1.15-1.55% for drip, 8-12% for espresso). Using TDS and beverage weight, extraction yield is calculated: Yield = (TDS × Beverage Weight) / Coffee Dose × 100. This determines if extraction falls within optimal range (18-22% for most methods). Coffee Brewing Control Chart plots TDS vs. Extraction Yield, diagnosing problems: Under-extracted/Weak (grind finer, raise temp), Over-extracted/Strong (coarsen grind, lower temp), etc. Refractometers measure TDS digitally, enabling data-driven brewing optimization and consistency. This scientific approach revolutionized specialty coffee quality control.",
                  "es": "TDS mide concentración de sólidos de café disueltos en bebida preparada, expresado como porcentaje (típicamente 1,15-1,55% para goteo, 8-12% para espresso). Usando TDS y peso de bebida, se calcula rendimiento de extracción: Rendimiento = (TDS × Peso Bebida) / Dosis Café × 100. Esto determina si extracción cae dentro rango óptimo (18-22% para mayoría métodos). Coffee Brewing Control Chart traza TDS vs. Rendimiento Extracción, diagnosticando problemas: Sub-extraído/Débil (moler más fino, subir temp), Sobre-extraído/Fuerte (moler más grueso, bajar temp), etc. Refractómetros miden TDS digitalmente, permitiendo optimización de preparación basada en datos y consistencia. Este enfoque científico revolucionó control de calidad de café especial.",
                  "de": "TDS misst Konzentration gelöster Kaffeefeststoffe in gebrühtem Getränk, ausgedrückt als Prozentsatz (typisch 1,15-1,55% für Tropf, 8-12% für Espresso). Mit TDS und Getränkegewicht wird Extraktionsausbeute berechnet: Ausbeute = (TDS × Getränkegewicht) / Kaffeemenge × 100. Dies bestimmt, ob Extraktion in optimalem Bereich liegt (18-22% für meiste Methoden). Coffee Brewing Control Chart stellt TDS vs. Extraktionsausbeute dar, diagnostiziert Probleme: Unterextrahiert/Schwach (feiner mahlen, Temp erhöhen), Überextrahiert/Stark (gröber mahlen, Temp senken), etc. Refraktometer messen TDS digital, ermöglichen datengesteuerte Brühoptimierung und Konsistenz. Dieser wissenschaftliche Ansatz revolutionierte Specialty-Kaffee-Qualitätskontrolle.",
                  "nl": "TDS meet concentratie van opgeloste koffievaste stoffen in gezette drank, uitgedrukt als percentage (meestal 1,15-1,55% voor drip, 8-12% voor espresso). Met TDS en drankgewicht wordt extractieopbrengst berekend: Opbrengst = (TDS × Drankgewicht) / Koffie Dosis × 100. Dit bepaalt of extractie binnen optimaal bereik valt (18-22% voor meeste methoden). Coffee Brewing Control Chart plot TDS vs. Extractie Opbrengst, diagnoseert problemen: Onder-geëxtraheerd/Zwak (fijner malen, temp verhogen), Over-geëxtraheerd/Sterk (grover malen, temp verlagen), etc. Refractometers meten TDS digitaal, maken datagestuurde zetoptimalisatie en consistentie mogelijk. Deze wetenschappelijke aanpak revolutioneerde specialty koffie kwaliteitscontrole."
        }
      },
      {
        question: {
                  "en": "What is 'channeling' in espresso extraction and what techniques prevent it?",
                  "es": "¿Qué es la 'canalización' en la extracción de espresso y qué técnicas la previenen?",
                  "de": "Was ist 'Channeling' bei der Espresso-Extraktion und welche Techniken verhindern es?",
                  "nl": "Wat is 'channeling' bij espresso extractie en welke technieken voorkomen het?"
        },
        options: [
        {
                  "en": "Water finding paths of least resistance through puck, causing simultaneous under and over-extraction; prevented by WDT, leveling, and consistent tamping",
                  "es": "Agua encontrando caminos de menor resistencia a través del disco, causando sub y sobre-extracción simultáneas; prevenido por WDT, nivelación y apisonado consistente",
                  "de": "Wasser findet Wege geringsten Widerstands durch Puck, verursacht gleichzeitige Unter- und Überextraktion; verhindert durch WDT, Nivellierung und konsistentes Tampen",
                  "nl": "Water vindt paden van minste weerstand door puck, veroorzaakt gelijktijdige onder en over-extractie; voorkomen door WDT, nivelleren en consistente tamping"
        },
        {
                  "en": "Directing flow through specific portafilter sections",
                  "es": "Dirigir flujo a través de secciones específicas del portafiltro",
                  "de": "Fluss durch spezifische Siebträger-Abschnitte lenken",
                  "nl": "Stroom leiden door specifieke portafilter secties"
        },
        {
                  "en": "Creating decorative patterns in crema surface",
                  "es": "Crear patrones decorativos en superficie de crema",
                  "de": "Dekorative Muster in Crema-Oberfläche erzeugen",
                  "nl": "Decoratieve patronen creëren in crema oppervlak"
        },
        {
                  "en": "Temperature variations across the coffee puck",
                  "es": "Variaciones de temperatura a través del disco de café",
                  "de": "Temperaturvariationen über den Kaffee-Puck",
                  "nl": "Temperatuurvariaties over de koffie puck"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Channeling occurs when water flows preferentially through areas of lower density in the espresso puck, creating fast-flowing channels. These zones become over-extracted (bitter), while surrounding denser areas remain under-extracted (sour)—simultaneously in one shot. Prevention techniques: 1) WDT (Weiss Distribution Technique)—using needle tool to break clumps and distribute grounds evenly; 2) Proper dosing for basket size; 3) Leveling/distribution before tamping; 4) Consistent tamp pressure creating uniform density; 5) Pre-infusion at low pressure to saturate puck evenly. Signs of channeling: thin/fast flow, blonde spots in crema, sour-bitter flavor simultaneously. Proper puck preparation is critical for even extraction.",
                  "es": "La canalización ocurre cuando el agua fluye preferentemente a través de áreas de menor densidad en el disco de espresso, creando canales de flujo rápido. Estas zonas se sobre-extraen (amargas), mientras áreas circundantes más densas permanecen sub-extraídas (ácidas)—simultáneamente en un shot. Técnicas de prevención: 1) WDT (Técnica de Distribución Weiss)—usando herramienta de agujas para romper grumos y distribuir café molido uniformemente; 2) Dosificación apropiada para tamaño de cesta; 3) Nivelación/distribución antes de apisonar; 4) Presión de apisonado consistente creando densidad uniforme; 5) Pre-infusión a baja presión para saturar disco uniformemente. Señales de canalización: flujo fino/rápido, manchas rubias en crema, sabor ácido-amargo simultáneamente. Preparación apropiada del disco es crítica para extracción uniforme.",
                  "de": "Channeling tritt auf, wenn Wasser bevorzugt durch Bereiche geringerer Dichte im Espresso-Puck fließt, schnell fließende Kanäle erzeugt. Diese Zonen werden überextrahiert (bitter), während umgebende dichtere Bereiche unterextrahiert bleiben (sauer)—gleichzeitig in einem Shot. Präventions-Techniken: 1) WDT (Weiss Distribution Technique)—Verwendung Nadelwerkzeug zum Aufbrechen von Klumpen und gleichmäßiger Verteilung; 2) Richtige Dosierung für Korbgröße; 3) Nivellierung/Verteilung vor Tampen; 4) Konsistenter Tamperdruck erzeugt gleichmäßige Dichte; 5) Vorinfusion bei niedrigem Druck zur gleichmäßigen Puck-Sättigung. Anzeichen von Channeling: dünner/schneller Fluss, blonde Flecken in Crema, sauer-bitterer Geschmack gleichzeitig. Richtige Puck-Vorbereitung ist kritisch für gleichmäßige Extraktion.",
                  "nl": "Channeling treedt op wanneer water bij voorkeur door gebieden van lagere dichtheid in de espresso puck stroomt, snelstromende kanalen creëert. Deze zones worden over-geëxtraheerd (bitter), terwijl omringende dichtere gebieden onder-geëxtraheerd blijven (zuur)—gelijktijdig in één shot. Preventie technieken: 1) WDT (Weiss Distribution Technique)—gebruik van naald gereedschap om klonten te breken en gemalen koffie gelijkmatig te verdelen; 2) Juiste dosering voor mandje grootte; 3) Nivelleren/verdelen voor tampen; 4) Consistente tamp druk creëert uniforme dichtheid; 5) Pre-infusie bij lage druk om puck gelijkmatig te verzadigen. Tekenen van channeling: dunne/snelle stroom, blonde vlekken in crema, zuur-bittere smaak gelijktijdig. Juiste puck voorbereiding is cruciaal voor gelijkmatige extractie."
        }
      },
      {
        question: {
                  "en": "What is the SCA (Specialty Coffee Association) Golden Cup Standard and what parameters does it specify?",
                  "es": "¿Qué es el Estándar Golden Cup de la SCA (Asociación de Café de Especialidad) y qué parámetros especifica?",
                  "de": "Was ist der SCA (Specialty Coffee Association) Golden Cup Standard und welche Parameter spezifiziert er?",
                  "nl": "Wat is de SCA (Specialty Coffee Association) Golden Cup Standard en welke parameters specificeert het?"
        },
        options: [
        {
                  "en": "Certification for gold-colored coffee cups",
                  "es": "Certificación para tazas de café de color dorado",
                  "de": "Zertifizierung für goldfarbene Kaffeetassen",
                  "nl": "Certificering voor goudkleurige koffiekopjes"
        },
        {
                  "en": "Award for best-tasting coffee each year",
                  "es": "Premio al café de mejor sabor cada año",
                  "de": "Auszeichnung für bestschmeckenden Kaffee jedes Jahr",
                  "nl": "Prijs voor lekkerste koffie elk jaar"
        },
        {
                  "en": "Optimal brewing parameters: 1.15-1.35% TDS (strength), 18-22% extraction yield, 92-96°C water, 10g coffee per 180ml",
                  "es": "Parámetros óptimos de preparación: 1,15-1,35% TDS (fuerza), 18-22% rendimiento extracción, agua 92-96°C, 10g café por 180ml",
                  "de": "Optimale Brühparameter: 1,15-1,35% TDS (Stärke), 18-22% Extraktionsausbeute, 92-96°C Wasser, 10g Kaffee pro 180ml",
                  "nl": "Optimale zetparameters: 1,15-1,35% TDS (sterkte), 18-22% extractie opbrengst, 92-96°C water, 10g koffie per 180ml"
        },
        {
                  "en": "Only cup design specifications for competition use",
                  "es": "Solo especificaciones de diseño de taza para uso en competencia",
                  "de": "Nur Tassendesign-Spezifikationen für Wettkampfzwecke",
                  "nl": "Alleen kop ontwerp specificaties voor competitie gebruik"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The SCA Golden Cup Standard defines optimal brewing parameters for consistent, quality coffee: 1) TDS: 1.15-1.35% (strength/concentration); 2) Extraction Yield: 18-22% of coffee mass dissolved; 3) Water Temperature: 92-96°C (197-205°F) at brew time; 4) Brew Ratio: 55g coffee per liter (±10%), or ~10g per 180ml cup; 5) Water Quality: 150ppm total hardness, 40ppm alkalinity, pH 7.0, chlorine-free. These parameters represent the 'sweet spot' avoiding under-extraction (sour, grassy) and over-extraction (bitter, astringent). The Standard provides objective benchmarks for quality, enables reproducibility, and serves as foundation for barista training and coffee shop quality control programs worldwide.",
                  "es": "El Estándar Golden Cup de SCA define parámetros óptimos de preparación para café consistente y de calidad: 1) TDS: 1,15-1,35% (fuerza/concentración); 2) Rendimiento Extracción: 18-22% masa de café disuelta; 3) Temperatura Agua: 92-96°C (197-205°F) en momento de preparación; 4) Proporción Preparación: 55g café por litro (±10%), o ~10g por taza 180ml; 5) Calidad Agua: 150ppm dureza total, 40ppm alcalinidad, pH 7,0, libre de cloro. Estos parámetros representan el 'punto dulce' evitando sub-extracción (ácido, herboso) y sobre-extracción (amargo, astringente). El Estándar proporciona puntos de referencia objetivos para calidad, permite reproducibilidad y sirve como fundamento para entrenamiento de barista y programas control de calidad de cafeterías mundialmente.",
                  "de": "Der SCA Golden Cup Standard definiert optimale Brühparameter für konsistenten, hochwertigen Kaffee: 1) TDS: 1,15-1,35% (Stärke/Konzentration); 2) Extraktionsausbeute: 18-22% der Kaffeemasse gelöst; 3) Wassertemperatur: 92-96°C (197-205°F) zur Brühzeit; 4) Brühverhältnis: 55g Kaffee pro Liter (±10%), oder ~10g pro 180ml Tasse; 5) Wasserqualität: 150ppm Gesamthärte, 40ppm Alkalinität, pH 7,0, chlorfrei. Diese Parameter repräsentieren den 'Sweet Spot', der Unterextraktion (sauer, grasig) und Überextraktion (bitter, adstringierend) vermeidet. Der Standard bietet objektive Benchmarks für Qualität, ermöglicht Reproduzierbarkeit und dient als Grundlage für Barista-Training und Qualitätskontrollprogramme in Cafés weltweit.",
                  "nl": "De SCA Golden Cup Standard definieert optimale zetparameters voor consistente, kwalitatieve koffie: 1) TDS: 1,15-1,35% (sterkte/concentratie); 2) Extractie Opbrengst: 18-22% van koffie massa opgelost; 3) Water Temperatuur: 92-96°C (197-205°F) bij zettijd; 4) Zet Verhouding: 55g koffie per liter (±10%), of ~10g per 180ml kop; 5) Water Kwaliteit: 150ppm totale hardheid, 40ppm alkaliniteit, pH 7,0, chloorvrij. Deze parameters vertegenwoordigen de 'sweet spot' die onder-extractie (zuur, grasachtig) en over-extractie (bitter, samentrekkend) vermijdt. De Standard biedt objectieve benchmarks voor kwaliteit, maakt reproduceerbaarheid mogelijk en dient als fundering voor barista training en kwaliteitscontrole programma's van coffee shops wereldwijd."
        }
      },
      {
        question: {
                  "en": "What is the difference between 'single origin' and 'blend' coffee from a flavor and sourcing perspective?",
                  "es": "¿Cuál es la diferencia entre café 'de origen único' y 'mezcla' desde una perspectiva de sabor y abastecimiento?",
                  "de": "Was ist der Unterschied zwischen 'Single Origin' und 'Blend' Kaffee aus Geschmacks- und Bezugsperspektive?",
                  "nl": "Wat is het verschil tussen 'single origin' en 'blend' koffie vanuit een smaak en inkoop perspectief?"
        },
        options: [
        {
                  "en": "Single origin is always better quality than blends",
                  "es": "Origen único siempre es mejor calidad que mezclas",
                  "de": "Single Origin ist immer bessere Qualität als Blends",
                  "nl": "Single origin is altijd betere kwaliteit dan blends"
        },
        {
                  "en": "Blends are only for instant coffee production",
                  "es": "Mezclas son solo para producción de café instantáneo",
                  "de": "Blends sind nur für Instantkaffee-Produktion",
                  "nl": "Blends zijn alleen voor oploskoffie productie"
        },
        {
                  "en": "No difference—both terms mean the same thing",
                  "es": "Sin diferencia—ambos términos significan lo mismo",
                  "de": "Kein Unterschied—beide Begriffe bedeuten dasselbe",
                  "nl": "Geen verschil—beide termen betekenen hetzelfde"
        },
        {
                  "en": "Single origin showcases unique terroir characteristics from one location; blends combine beans for balanced, consistent flavor profiles year-round",
                  "es": "Origen único muestra características únicas de terroir de una ubicación; mezclas combinan granos para perfiles de sabor equilibrados y consistentes todo el año",
                  "de": "Single Origin zeigt einzigartige Terroir-Eigenschaften von einem Standort; Blends kombinieren Bohnen für ausgewogene, konsistente Geschmacksprofile ganzjährig",
                  "nl": "Single origin toont unieke terroir kenmerken van één locatie; blends combineren bonen voor gebalanceerde, consistente smaakprofielen het hele jaar door"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Single origin coffee comes from one geographic region (country, estate, or even specific lot), expressing unique terroir—soil, climate, altitude, processing—resulting in distinctive flavor profiles that change seasonally. Advantages: transparency, traceability, unique characteristics. Challenges: seasonal availability, flavor variability between harvests. Blends combine beans from multiple origins to achieve: 1) Balanced complexity (e.g., Ethiopian brightness + Colombian sweetness + Brazilian body); 2) Year-round consistency despite seasonal variations; 3) Cost optimization. Neither is inherently superior—single origins suit those seeking terroir expression and variety, while blends excel in espresso (balanced under pressure) and consistent cafe programs. Specialty coffee celebrates both approaches when executed with quality beans.",
                  "es": "Café de origen único proviene de una región geográfica (país, finca o incluso lote específico), expresando terroir único—suelo, clima, altitud, procesamiento—resultando en perfiles de sabor distintivos que cambian estacionalmente. Ventajas: transparencia, trazabilidad, características únicas. Desafíos: disponibilidad estacional, variabilidad de sabor entre cosechas. Mezclas combinan granos de múltiples orígenes para lograr: 1) Complejidad equilibrada (ej. brillo etíope + dulzura colombiana + cuerpo brasileño); 2) Consistencia todo el año a pesar de variaciones estacionales; 3) Optimización de costos. Ninguno es inherentemente superior—orígenes únicos se adaptan a quienes buscan expresión de terroir y variedad, mientras mezclas sobresalen en espresso (equilibrado bajo presión) y programas consistentes de cafeterías. Café especial celebra ambos enfoques cuando se ejecutan con granos de calidad.",
                  "de": "Single Origin Kaffee kommt aus einer geografischen Region (Land, Gut oder sogar spezifische Parzelle), drückt einzigartiges Terroir aus—Boden, Klima, Höhe, Verarbeitung—resultiert in charakteristischen Geschmacksprofilen, die sich saisonal ändern. Vorteile: Transparenz, Rückverfolgbarkeit, einzigartige Eigenschaften. Herausforderungen: saisonale Verfügbarkeit, Geschmacksvariabilität zwischen Ernten. Blends kombinieren Bohnen aus mehreren Ursprüngen um zu erreichen: 1) Ausgewogene Komplexität (z.B. äthiopische Helligkeit + kolumbianische Süße + brasilianischer Körper); 2) Ganzjährige Konsistenz trotz saisonaler Schwankungen; 3) Kostenoptimierung. Keiner ist inhärent überlegen—Single Origins eignen sich für Terroir-Ausdruck und Vielfalt, während Blends in Espresso (ausgewogen unter Druck) und konsistenten Café-Programmen hervorragen. Specialty Coffee feiert beide Ansätze bei Ausführung mit Qualitätsbohnen.",
                  "nl": "Single origin koffie komt van één geografische regio (land, landgoed of zelfs specifiek perceel), drukt uniek terroir uit—bodem, klimaat, hoogte, verwerking—resulterend in onderscheidende smaakprofielen die seizoensgebonden veranderen. Voordelen: transparantie, traceerbaarheid, unieke kenmerken. Uitdagingen: seizoensgebonden beschikbaarheid, smaakvariabiliteit tussen oogsten. Blends combineren bonen uit meerdere oorsprongen om te bereiken: 1) Gebalanceerde complexiteit (bijv. Ethiopische helderheid + Colombiaanse zoetheid + Braziliaanse body); 2) Jaarronde consistentie ondanks seizoensvariaties; 3) Kostenoptimalisatie. Geen is inherent superieur—single origins passen bij degenen die terroir expressie en variëteit zoeken, terwijl blends uitblinken in espresso (gebalanceerd onder druk) en consistente café programma's. Specialty koffie viert beide benaderingen wanneer uitgevoerd met kwaliteitsbonen."
        }
      },
      {
        question: {
                  "en": "What is 'first crack' and 'second crack' in coffee roasting and what do they signify?",
                  "es": "¿Qué es el 'primer crack' y 'segundo crack' en el tostado de café y qué significan?",
                  "de": "Was ist 'First Crack' und 'Second Crack' beim Kaffeerösten und was bedeuten sie?",
                  "nl": "Wat is 'first crack' en 'second crack' bij koffie roosteren en wat betekenen ze?"
        },
        options: [
        {
                  "en": "Mechanical issues with roasting equipment requiring repair",
                  "es": "Problemas mecánicos con equipo de tostado requiriendo reparación",
                  "de": "Mechanische Probleme mit Röstausrüstung erfordern Reparatur",
                  "nl": "Mechanische problemen met rooster apparatuur die reparatie vereisen"
        },
        {
                  "en": "Bean variety classifications for sorting purposes",
                  "es": "Clasificaciones de variedades de granos para fines de clasificación",
                  "de": "Bohnensorten-Klassifikationen für Sortierzwecke",
                  "nl": "Boon variëteit classificaties voor sorteerdoeleinden"
        },
        {
                  "en": "Audible popping sounds at specific temperatures indicating roast development stages: first crack (~196°C) = light roast, second crack (~224°C) = dark roast",
                  "es": "Sonidos de estallido audibles a temperaturas específicas indicando etapas de desarrollo del tueste: primer crack (~196°C) = tueste claro, segundo crack (~224°C) = tueste oscuro",
                  "de": "Hörbare Knackgeräusche bei spezifischen Temperaturen zeigen Röstentwicklungsstadien an: First Crack (~196°C) = helle Röstung, Second Crack (~224°C) = dunkle Röstung",
                  "nl": "Hoorbare krakende geluiden bij specifieke temperaturen die roost ontwikkelingsfasen aangeven: first crack (~196°C) = lichte roost, second crack (~224°C) = donkere roost"
        },
        {
                  "en": "Quality defects appearing during improper roasting",
                  "es": "Defectos de calidad apareciendo durante tostado inadecuado",
                  "de": "Qualitätsfehler, die bei unsachgemäßem Rösten auftreten",
                  "nl": "Kwaliteitsgebreken die verschijnen tijdens onjuist roosteren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "During roasting, beans undergo two distinct crackling phases: FIRST CRACK (~196-205°C): Water vaporization and CO2 expansion cause bean structure to rupture with popping sounds like popcorn. Marks transition to light roast—beans are drinkable but still developing. Chemical changes: Maillard reactions accelerate, acids form, sugars caramelize. Stopping here preserves origin characteristics, brightness, and acidity. SECOND CRACK (~224-226°C): Cell wall breakdown causes sharper, faster cracking. Oils migrate to surface, sugars carbonize, origin flavors diminish. Stopping here creates dark roasts (French, Italian) with roast-forward, bittersweet, smoky characteristics. Roasters use these audible cues to precisely control roast level and flavor development.",
                  "es": "Durante el tostado, los granos sufren dos fases de crujido distintas: PRIMER CRACK (~196-205°C): Vaporización de agua y expansión de CO2 causan que estructura del grano se rompa con sonidos de estallido como palomitas. Marca transición a tueste claro—granos son bebibles pero aún desarrollándose. Cambios químicos: reacciones Maillard se aceleran, ácidos se forman, azúcares se carameliza n. Detener aquí preserva características de origen, brillo y acidez. SEGUNDO CRACK (~224-226°C): Descomposición de pared celular causa crujido más agudo y rápido. Aceites migran a superficie, azúcares se carbonizan, sabores de origen disminuyen. Detener aquí crea tuestes oscuros (Francés, Italiano) con características de tueste al frente, agridulces y ahumadas. Tostadores usan estas señales audibles para controlar precisamente nivel de tueste y desarrollo de sabor.",
                  "de": "Während Rösten durchlaufen Bohnen zwei verschiedene Knackphasen: FIRST CRACK (~196-205°C): Wasserverdampfung und CO2-Ausdehnung verursachen Bohnenstrukturbruch mit Knackgeräuschen wie Popcorn. Markiert Übergang zu heller Röstung—Bohnen sind trinkbar, entwickeln sich aber noch. Chemische Veränderungen: Maillard-Reaktionen beschleunigen, Säuren bilden sich, Zucker karamellisiert. Hier stoppen bewahrt Ursprungscharakteristika, Helligkeit und Säure. SECOND CRACK (~224-226°C): Zellwandabbau verursacht schärferes, schnelleres Knacken. Öle wandern zur Oberfläche, Zucker verkohlt, Ursprungsaromen nehmen ab. Hier stoppen erzeugt dunkle Röstungen (Französisch, Italienisch) mit röstbetonten, bittersüßen, rauchigen Eigenschaften. Röster nutzen diese hörbaren Signale zur präzisen Kontrolle von Röstgrad und Geschmacksentwicklung.",
                  "nl": "Tijdens roosteren ondergaan bonen twee verschillende kraak fasen: FIRST CRACK (~196-205°C): Waterverdamping en CO2 uitzetting veroorzaken boon structuur breuk met krakende geluiden zoals popcorn. Markeert overgang naar lichte roost—bonen zijn drinkbaar maar nog in ontwikkeling. Chemische veranderingen: Maillard reacties versnellen, zuren vormen, suikers karameliseren. Hier stoppen behoudt oorsprong kenmerken, helderheid en zuurgraad. SECOND CRACK (~224-226°C): Celwand afbraak veroorzaakt scherper, sneller kraken. Oliën migreren naar oppervlak, suikers verkolen, oorsprong smaken verminderen. Hier stoppen creëert donkere roosts (Frans, Italiaans) met roost-voorwaartse, bitterzoete, rokerige kenmerken. Roosters gebruiken deze hoorbare signalen om roost niveau en smaak ontwikkeling precies te controleren."
        }
      },
      {
        question: {
                  "en": "What is 'latte art' technically and what physical properties make it possible?",
                  "es": "¿Qué es técnicamente el 'arte latte' y qué propiedades físicas lo hacen posible?",
                  "de": "Was ist 'Latte Art' technisch und welche physikalischen Eigenschaften machen es möglich?",
                  "nl": "Wat is 'latte art' technisch en welke fysische eigenschappen maken het mogelijk?"
        },
        options: [
        {
                  "en": "Contrast between white microfoam and brown espresso crema, enabled by proper milk texture (velvety microfoam), appropriate foam/liquid ratio, and controlled pouring technique",
                  "es": "Contraste entre microespuma blanca y crema de espresso marrón, habilitado por textura apropiada de leche (microespuma aterciopelada), proporción espuma/líquido apropiada y técnica de vertido controlada",
                  "de": "Kontrast zwischen weißem Mikroschaum und brauner Espresso-Crema, ermöglicht durch richtige Milchtextur (samtiger Mikroschaum), angemessenes Schaum/Flüssigkeits-Verhältnis und kontrollierte Gießtechnik",
                  "nl": "Contrast tussen wit microschuim en bruine espresso crema, mogelijk gemaakt door juiste melk textuur (fluweelachtig microschuim), geschikte schuim/vloeistof verhouding en gecontroleerde giet techniek"
        },
        {
                  "en": "Digital projection onto white foam background",
                  "es": "Proyección digital en fondo de espuma blanca",
                  "de": "Digitale Projektion auf weißen Schaumhintergrund",
                  "nl": "Digitale projectie op wit schuim achtergrond"
        },
        {
                  "en": "Using stencils and cocoa powder on foam surface",
                  "es": "Usar plantillas y cacao en polvo en superficie de espuma",
                  "de": "Verwendung von Schablonen und Kakaopulver auf Schaumoberfläche",
                  "nl": "Gebruik van sjablonen en cacaopoeder op schuimoppervlak"
        },
        {
                  "en": "Food coloring added to milk for decorative patterns",
                  "es": "Colorante alimentario añadido a leche para patrones decorativos",
                  "de": "Lebensmittelfarbe zur Milch für dekorative Muster hinzugefügt",
                  "nl": "Voedselkleuring toegevoegd aan melk voor decoratieve patronen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Latte art relies on physics of fluid dynamics and emulsion stability. Key requirements: 1) MICROFOAM: Properly steamed milk with tiny air bubbles (0.1-0.2mm) creating velvety texture—glossy, paint-like consistency that holds shapes; 2) CREMA: Fresh espresso with stable, thick crema providing brown canvas; 3) DENSITY DIFFERENTIAL: Microfoam (lighter) floats on espresso (denser), creating white-on-brown contrast; 4) POURING TECHNIQUE: Controlled flow, height, and cup tilting direct where white foam appears, creating patterns (heart, rosetta, tulip). Science: Surface tension maintains pattern separation, while proper milk protein denaturation from steaming creates stable foam structure. Mastery requires understanding milk chemistry, thermodynamics, and precision motor control.",
                  "es": "El arte latte depende de física de dinámica de fluidos y estabilidad de emulsión. Requisitos clave: 1) MICROESPUMA: Leche al vapor apropiadamente con burbujas de aire pequeñas (0,1-0,2mm) creando textura aterciopelada—consistencia brillante, similar a pintura que mantiene formas; 2) CREMA: Espresso fresco con crema estable y gruesa proporcionando lienzo marrón; 3) DIFERENCIAL DE DENSIDAD: Microespuma (más ligera) flota en espresso (más denso), creando contraste blanco sobre marrón; 4) TÉCNICA DE VERTIDO: Flujo controlado, altura e inclinación de taza dirigen dónde aparece espuma blanca, creando patrones (corazón, roseta, tulipán). Ciencia: Tensión superficial mantiene separación de patrón, mientras desnaturalización apropiada de proteína de leche del vaporizado crea estructura de espuma estable. Dominio requiere comprender química de leche, termodinámica y control motor de precisión.",
                  "de": "Latte Art basiert auf Physik der Fluiddynamik und Emulsionsstabilität. Hauptanforderungen: 1) MIKROSCHAUM: Richtig aufgeschäumte Milch mit winzigen Luftblasen (0,1-0,2mm), erzeugt samtige Textur—glänzende, farbähnliche Konsistenz, die Formen hält; 2) CREMA: Frischer Espresso mit stabiler, dicker Crema bietet braune Leinwand; 3) DICHTEDIFFERENZ: Mikroschaum (leichter) schwimmt auf Espresso (dichter), erzeugt Weiß-auf-Braun-Kontrast; 4) GIESSTECHNIK: Kontrollierter Fluss, Höhe und Tassenneigung lenken, wo weißer Schaum erscheint, erzeugen Muster (Herz, Rosetta, Tulpe). Wissenschaft: Oberflächenspannung erhält Mustertrennung, während richtige Milchproteindenaturierung durch Aufschäumen stabile Schaumstruktur erzeugt. Meisterschaft erfordert Verständnis von Milchchemie, Thermodynamik und Präzisionsmotorkontrolle.",
                  "nl": "Latte art berust op fysica van vloeistofdynamica en emulsie stabiliteit. Sleutelvereisten: 1) MICROSCHUIM: Correct gestoomde melk met minuscule luchtbellen (0,1-0,2mm) creërend fluweelachtige textuur—glanzende, verfachtige consistentie die vormen vasthoudt; 2) CREMA: Verse espresso met stabiele, dikke crema die bruin canvas biedt; 3) DICHTHEID DIFFERENTIAAL: Microschuim (lichter) drijft op espresso (dichter), creëert wit-op-bruin contrast; 4) GIET TECHNIEK: Gecontroleerde stroom, hoogte en kop kanteling sturen waar wit schuim verschijnt, creëren patronen (hart, rosetta, tulp). Wetenschap: Oppervlaktespanning behoudt patroon scheiding, terwijl juiste melk eiwit denaturatie van stomen stabiele schuimstructuur creëert. Meesterschap vereist begrip van melkchemie, thermodynamica en precisie motorcontrole."
        }
      },
      {
        question: {
                  "en": "What is the purpose and technique of 'cupping' in professional coffee evaluation?",
                  "es": "¿Cuál es el propósito y la técnica de la 'catación' en la evaluación profesional del café?",
                  "de": "Was ist Zweck und Technik des 'Cuppings' bei der professionellen Kaffeebewertung?",
                  "nl": "Wat is het doel en de techniek van 'cupping' bij professionele koffie evaluatie?"
        },
        options: [
        {
                  "en": "Temperature testing of brewed coffee for safety",
                  "es": "Prueba de temperatura de café preparado para seguridad",
                  "de": "Temperaturprüfung von gebrühtem Kaffee für Sicherheit",
                  "nl": "Temperatuur testen van gezette koffie voor veiligheid"
        },
        {
                  "en": "Standardized tasting protocol using consistent brew method (1:18.18 ratio, 4min steep, break crust, evaluate aroma/flavor/body/acidity) for objective quality assessment",
                  "es": "Protocolo de cata estandarizado usando método de preparación consistente (proporción 1:18,18, empape 4min, romper costra, evaluar aroma/sabor/cuerpo/acidez) para evaluación objetiva de calidad",
                  "de": "Standardisiertes Verkostungsprotokoll mit konsistenter Brühmethode (1:18,18 Verhältnis, 4min Ziehen, Kruste brechen, Aroma/Geschmack/Körper/Säure bewerten) für objektive Qualitätsbewertung",
                  "nl": "Gestandaardiseerd proef protocol met consistente zetmethode (1:18,18 verhouding, 4min trekken, korst breken, aroma/smaak/body/zuurgraad evalueren) voor objectieve kwaliteitsbeoordeling"
        },
        {
                  "en": "Measuring cup volume accuracy for brewing precision",
                  "es": "Medir precisión de volumen de taza para precisión de preparación",
                  "de": "Messung der Tassenvolumen-Genauigkeit für Brühpräzision",
                  "nl": "Kop volume nauwkeurigheid meten voor zetprecisie"
        },
        {
                  "en": "Drinking coffee from special cups to enhance flavor",
                  "es": "Beber café de tazas especiales para mejorar sabor",
                  "de": "Kaffee aus speziellen Tassen trinken zur Geschmacksverbesserung",
                  "nl": "Koffie drinken uit speciale kopjes om smaak te verbeteren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cupping is the standardized method for professional coffee evaluation, ensuring consistency across samplers and locations. SCA Protocol: 1) GRIND: 8.25g coffee, medium-coarse, within 15min of cupping; 2) BREW: Add 150ml water at 93°C, steep 3-5 minutes forming a 'crust'; 3) BREAK: At 3-4 minutes, break crust with spoon, evaluate aroma ('break fragrance' and 'wet aroma'); 4) TASTE: At 8-10 minutes (cooling to ~70°C), loudly slurp from spoon to aerosolize coffee across palate; 5) EVALUATE: Score fragrance/aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, defects, overall (0-10 scale, 100 point total). Cupping eliminates brewing variables (pressure, technique), isolating coffee quality itself. Used for quality control, lot selection, roast evaluation, and competitions.",
                  "es": "La catación es el método estandarizado para evaluación profesional de café, asegurando consistencia entre catadores y ubicaciones. Protocolo SCA: 1) MOLER: 8,25g café, medio-grueso, dentro de 15min de catación; 2) PREPARAR: Añadir 150ml agua a 93°C, empapar 3-5 minutos formando 'costra'; 3) ROMPER: A 3-4 minutos, romper costra con cuchara, evaluar aroma ('fragancia de ruptura' y 'aroma húmedo'); 4) PROBAR: A 8-10 minutos (enfriando a ~70°C), sorber ruidosamente de cuchara para aerosolizar café a través del paladar; 5) EVALUAR: Puntuar fragancia/aroma, sabor, retrogusto, acidez, cuerpo, balance, uniformidad, taza limpia, dulzura, defectos, general (escala 0-10, 100 puntos total). Catación elimina variables de preparación (presión, técnica), aislando calidad del café en sí. Usado para control de calidad, selección de lotes, evaluación de tueste y competencias.",
                  "de": "Cupping ist die standardisierte Methode für professionelle Kaffeebewertung, gewährleistet Konsistenz über Verkoster und Standorte hinweg. SCA-Protokoll: 1) MAHLEN: 8,25g Kaffee, mittel-grob, innerhalb 15min des Cuppings; 2) BRÜHEN: 150ml Wasser bei 93°C hinzufügen, 3-5 Minuten ziehen lassen, bildet 'Kruste'; 3) BRECHEN: Bei 3-4 Minuten Kruste mit Löffel brechen, Aroma bewerten ('Break Duft' und 'nasses Aroma'); 4) SCHMECKEN: Bei 8-10 Minuten (Abkühlung auf ~70°C) laut vom Löffel schlürfen, um Kaffee über Gaumen zu versprühen; 5) BEWERTEN: Duft/Aroma, Geschmack, Nachgeschmack, Säure, Körper, Balance, Einheitlichkeit, saubere Tasse, Süße, Defekte, Gesamt bewerten (0-10 Skala, 100 Punkte total). Cupping eliminiert Brühvariablen (Druck, Technik), isoliert Kaffeequalität selbst. Verwendet für Qualitätskontrolle, Losauswahl, Röstbewertung und Wettbewerbe.",
                  "nl": "Cupping is de gestandaardiseerde methode voor professionele koffie evaluatie, verzekert consistentie over proevers en locaties. SCA Protocol: 1) MALEN: 8,25g koffie, medium-grof, binnen 15min van cupping; 2) ZETTEN: 150ml water bij 93°C toevoegen, 3-5 minuten trekken vormend 'korst'; 3) BREKEN: Bij 3-4 minuten korst breken met lepel, aroma evalueren ('break geur' en 'nat aroma'); 4) PROEVEN: Bij 8-10 minuten (afkoelend tot ~70°C) luid slurpen van lepel om koffie over verhemelte te verstuiven; 5) EVALUEREN: Geur/aroma, smaak, nasmaak, zuurgraad, body, balans, uniformiteit, schone kop, zoetheid, defecten, algemeen scoren (0-10 schaal, 100 punten totaal). Cupping elimineert zetvariaablen (druk, techniek), isoleert koffiekwaliteit zelf. Gebruikt voor kwaliteitscontrole, lot selectie, roost evaluatie en competities."
        }
      },
      {
        question: {
                  "en": "What is 'water chemistry' and why is it critical for coffee extraction?",
                  "es": "¿Qué es la 'química del agua' y por qué es crítica para la extracción de café?",
                  "de": "Was ist 'Wasserchemie' und warum ist sie kritisch für Kaffeeextraktion?",
                  "nl": "Wat is 'water chemie' en waarom is het cruciaal voor koffie extractie?"
        },
        options: [
        {
                  "en": "Mineral content (hardness, alkalinity, pH) affects extraction efficiency and flavor: calcium/magnesium extract flavor compounds, while bicarbonates buffer acidity",
                  "es": "Contenido mineral (dureza, alcalinidad, pH) afecta eficiencia de extracción y sabor: calcio/magnesio extraen compuestos de sabor, mientras bicarbonatos amortiguan acidez",
                  "de": "Mineralgehalt (Härte, Alkalinität, pH) beeinflusst Extraktionseffizienz und Geschmack: Kalzium/Magnesium extrahieren Geschmacksverbindungen, während Bikarbonate Säure puffern",
                  "nl": "Mineraal gehalte (hardheid, alkaliniteit, pH) beïnvloedt extractie efficiëntie en smaak: calcium/magnesium extraheren smaakverbindingen, terwijl bicarbonaten zuurgraad bufferen"
        },
        {
                  "en": "Pure distilled water is always best for coffee",
                  "es": "Agua destilada pura es siempre mejor para café",
                  "de": "Reines destilliertes Wasser ist immer am besten für Kaffee",
                  "nl": "Zuiver gedestilleerd water is altijd het beste voor koffie"
        },
        {
                  "en": "Water chemistry only affects espresso machines mechanically",
                  "es": "Química del agua solo afecta máquinas de espresso mecánicamente",
                  "de": "Wasserchemie beeinflusst nur Espressomaschinen mechanisch",
                  "nl": "Water chemie beïnvloedt alleen espressomachines mechanisch"
        },
        {
                  "en": "Only water temperature matters for extraction",
                  "es": "Solo la temperatura del agua importa para extracción",
                  "de": "Nur Wassertemperatur ist wichtig für Extraktion",
                  "nl": "Alleen water temperatuur is belangrijk voor extractie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Water comprises 98-99% of brewed coffee, making its chemistry crucial. Key parameters: 1) HARDNESS (Calcium/Magnesium, 50-175ppm total): These ions bind to coffee's flavor compounds, extracting them efficiently. Too low = weak extraction, too high = over-extraction + scale buildup. 2) ALKALINITY (Bicarbonate, 40-70ppm): Buffers coffee's acids, controlling perceived brightness. Too low = overly acidic/sour, too high = flat/chalky. 3) pH (6.5-7.5): Affects extraction kinetics and enzyme activity. SCA recommends: 150ppm total hardness, 40ppm alkalinity, pH 7.0, 0ppm chlorine, 10ppm sodium. Pure distilled water (0 minerals) extracts poorly—minerals are essential for flavor extraction. Specialty shops use RO filtration + remineralization systems to achieve ideal chemistry.",
                  "es": "El agua comprende 98-99% del café preparado, haciendo su química crucial. Parámetros clave: 1) DUREZA (Calcio/Magnesio, 50-175ppm total): Estos iones se unen a compuestos de sabor del café, extrayéndolos eficientemente. Muy bajo = extracción débil, muy alto = sobre-extracción + acumulación de sarro. 2) ALCALINIDAD (Bicarbonato, 40-70ppm): Amortigua ácidos del café, controlando brillo percibido. Muy bajo = demasiado ácido/agrio, muy alto = plano/calcáreo. 3) pH (6,5-7,5): Afecta cinética de extracción y actividad enzimática. SCA recomienda: 150ppm dureza total, 40ppm alcalinidad, pH 7,0, 0ppm cloro, 10ppm sodio. Agua destilada pura (0 minerales) extrae pobremente—minerales son esenciales para extracción de sabor. Tiendas especiales usan sistemas de filtración RO + remineralización para lograr química ideal.",
                  "de": "Wasser macht 98-99% des gebrühten Kaffees aus, macht seine Chemie entscheidend. Schlüsselparameter: 1) HÄRTE (Kalzium/Magnesium, 50-175ppm gesamt): Diese Ionen binden an Geschmacksverbindungen des Kaffees, extrahieren sie effizient. Zu niedrig = schwache Extraktion, zu hoch = Überextraktion + Kalkablagerung. 2) ALKALINITÄT (Bikarbonat, 40-70ppm): Puffert Kaffeesäuren, kontrolliert wahrgenommene Helligkeit. Zu niedrig = übermäßig säuerlich/sauer, zu hoch = flach/kalkig. 3) pH (6,5-7,5): Beeinflusst Extraktionskinetik und Enzymaktivität. SCA empfiehlt: 150ppm Gesamthärte, 40ppm Alkalinität, pH 7,0, 0ppm Chlor, 10ppm Natrium. Reines destilliertes Wasser (0 Mineralien) extrahiert schlecht—Mineralien sind essentiell für Geschmacksextraktion. Specialty-Shops verwenden RO-Filtration + Remineralisierungssysteme für ideale Chemie.",
                  "nl": "Water omvat 98-99% van gezette koffie, maakt chemie cruciaal. Sleutelparameters: 1) HARDHEID (Calcium/Magnesium, 50-175ppm totaal): Deze ionen binden aan smaakverbindingen van koffie, extraheren ze efficiënt. Te laag = zwakke extractie, te hoog = over-extractie + kalkaanslag. 2) ALKALINITEIT (Bicarbonaat, 40-70ppm): Buffert koffiezuren, controleert waargenomen helderheid. Te laag = overdreven zuur/zuur, te hoog = vlak/kalkachtig. 3) pH (6,5-7,5): Beïnvloedt extractie kinetiek en enzym activiteit. SCA beveelt aan: 150ppm totale hardheid, 40ppm alkaliniteit, pH 7,0, 0ppm chloor, 10ppm natrium. Zuiver gedestilleerd water (0 mineralen) extraheert slecht—mineralen zijn essentieel voor smaakextractie. Specialty winkels gebruiken RO filtratie + remineralisatie systemen om ideale chemie te bereiken."
        }
      },
      {
        question: {
                  "en": "What is the 'coffee compass' or 'espresso compass' troubleshooting method?",
                  "es": "¿Qué es el método de solución de problemas 'brújula del café' o 'brújula de espresso'?",
                  "de": "Was ist die 'Kaffeekompass' oder 'Espresso-Kompass' Fehlerbehebungsmethode?",
                  "nl": "Wat is de 'koffie kompas' of 'espresso kompas' probleemoplossings methode?"
        },
        options: [
        {
                  "en": "Flavor wheel showing coffee taste profiles only",
                  "es": "Rueda de sabor mostrando solo perfiles de sabor de café",
                  "de": "Geschmacksrad zeigt nur Kaffee-Geschmacksprofile",
                  "nl": "Smaakwiel dat alleen koffie smaakprofielen toont"
        },
        {
                  "en": "Navigation tool for locating coffee plantations",
                  "es": "Herramienta de navegación para localizar plantaciones de café",
                  "de": "Navigationswerkzeug zum Auffinden von Kaffeeplantagen",
                  "nl": "Navigatie instrument voor het lokaliseren van koffieplantages"
        },
        {
                  "en": "Diagnostic tool mapping taste defects (sour, bitter, weak, strong) to extraction problems with specific adjustment recommendations",
                  "es": "Herramienta de diagnóstico mapeando defectos de sabor (ácido, amargo, débil, fuerte) a problemas de extracción con recomendaciones de ajuste específicas",
                  "de": "Diagnosewerkzeug, das Geschmacksfehler (sauer, bitter, schwach, stark) auf Extraktionsprobleme mit spezifischen Anpassungsempfehlungen abbildet",
                  "nl": "Diagnostisch instrument dat smaakgebreken (zuur, bitter, zwak, sterk) koppelt aan extractie problemen met specifieke aanpassingsaanbevelingen"
        },
        {
                  "en": "Directional pour pattern for latte art creation",
                  "es": "Patrón de vertido direccional para creación de arte latte",
                  "de": "Richtungs-Gießmuster für Latte-Art-Erstellung",
                  "nl": "Richtings giet patroon voor latte art creatie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Coffee/Espresso Compass is a diagnostic framework mapping taste to extraction problems: FOUR QUADRANTS: 1) SOUR/WEAK (under-extracted, weak): Grind finer, increase dose, raise temperature; 2) SOUR/STRONG (under-extracted, concentrated): Increase yield (longer shot), raise temperature; 3) BITTER/STRONG (over-extracted, concentrated): Decrease yield, lower temperature, coarsen grind; 4) BITTER/WEAK (over-extracted, weak): Coarsen grind, decrease dose, lower temperature. This tool systematically identifies whether the issue is EXTRACTION (sour↔bitter spectrum) or STRENGTH (weak↔strong spectrum), enabling targeted adjustments rather than random changes. Created by Barista Hustle, it's become standard for professional troubleshooting, teaching, and dialing-in espresso.",
                  "es": "La Brújula de Café/Espresso es un marco de diagnóstico mapeando sabor a problemas de extracción: CUATRO CUADRANTES: 1) ÁCIDO/DÉBIL (sub-extraído, débil): Moler más fino, aumentar dosis, subir temperatura; 2) ÁCIDO/FUERTE (sub-extraído, concentrado): Aumentar rendimiento (shot más largo), subir temperatura; 3) AMARGO/FUERTE (sobre-extraído, concentrado): Disminuir rendimiento, bajar temperatura, moler más grueso; 4) AMARGO/DÉBIL (sobre-extraído, débil): Moler más grueso, disminuir dosis, bajar temperatura. Esta herramienta identifica sistemáticamente si el problema es EXTRACCIÓN (espectro ácido↔amargo) o FUERZA (espectro débil↔fuerte), permitiendo ajustes dirigidos en lugar de cambios aleatorios. Creado por Barista Hustle, se ha convertido en estándar para solución profesional de problemas, enseñanza y ajuste de espresso.",
                  "de": "Der Kaffee/Espresso-Kompass ist ein diagnostisches Framework, das Geschmack auf Extraktionsprobleme abbildet: VIER QUADRANTEN: 1) SAUER/SCHWACH (unterextrahiert, schwach): Feiner mahlen, Dosis erhöhen, Temperatur steigern; 2) SAUER/STARK (unterextrahiert, konzentriert): Ausbeute erhöhen (längerer Shot), Temperatur steigern; 3) BITTER/STARK (überextrahiert, konzentriert): Ausbeute verringern, Temperatur senken, gröber mahlen; 4) BITTER/SCHWACH (überextrahiert, schwach): Gröber mahlen, Dosis verringern, Temperatur senken. Dieses Tool identifiziert systematisch, ob das Problem EXTRAKTION (sauer↔bitter Spektrum) oder STÄRKE (schwach↔stark Spektrum) ist, ermöglicht gezielte Anpassungen statt zufälliger Änderungen. Von Barista Hustle erstellt, ist es Standard für professionelle Fehlerbehebung, Lehre und Espresso-Einstellung geworden.",
                  "nl": "Het Koffie/Espresso Kompas is een diagnostisch raamwerk dat smaak koppelt aan extractie problemen: VIER KWADRANTEN: 1) ZUUR/ZWAK (onder-geëxtraheerd, zwak): Fijner malen, dosis verhogen, temperatuur verhogen; 2) ZUUR/STERK (onder-geëxtraheerd, geconcentreerd): Opbrengst verhogen (langere shot), temperatuur verhogen; 3) BITTER/STERK (over-geëxtraheerd, geconcentreerd): Opbrengst verlagen, temperatuur verlagen, grover malen; 4) BITTER/ZWAK (over-geëxtraheerd, zwak): Grover malen, dosis verlagen, temperatuur verlagen. Dit instrument identificeert systematisch of het probleem EXTRACTIE (zuur↔bitter spectrum) of STERKTE (zwak↔sterk spectrum) is, maakt gerichte aanpassingen mogelijk in plaats van willekeurige veranderingen. Gecreëerd door Barista Hustle, is het standaard geworden voor professionele probleemoplossing, onderwijs en espresso instelling."
        }
      },
      {
        question: {
                  "en": "What is 'resting' or 'degassing' coffee after roasting and what is the optimal timeframe?",
                  "es": "¿Qué es 'reposar' o 'desgasificar' café después del tostado y cuál es el marco de tiempo óptimo?",
                  "de": "Was ist 'Ruhen' oder 'Entgasen' von Kaffee nach dem Rösten und was ist der optimale Zeitrahmen?",
                  "nl": "Wat is 'rusten' of 'ontgassen' van koffie na roosteren en wat is het optimale tijdkader?"
        },
        options: [
        {
                  "en": "Cooling roasted beans to room temperature immediately",
                  "es": "Enfriar granos tostados a temperatura ambiente inmediatamente",
                  "de": "Geröstete Bohnen sofort auf Raumtemperatur abkühlen",
                  "nl": "Geroosterde bonen onmiddellijk afkoelen tot kamertemperatuur"
        },
        {
                  "en": "Allowing CO2 to escape post-roast before brewing; optimal 3-14 days for filter, 7-21 days for espresso to balance freshness and degassing",
                  "es": "Permitir que CO2 escape post-tueste antes de preparar; óptimo 3-14 días para filtro, 7-21 días para espresso para equilibrar frescura y desgasificación",
                  "de": "Ermöglichen des CO2-Austritts nach Röstung vor Brühen; optimal 3-14 Tage für Filter, 7-21 Tage für Espresso zum Ausgleich von Frische und Entgasung",
                  "nl": "CO2 laten ontsnappen na roosteren voor zetten; optimaal 3-14 dagen voor filter, 7-21 dagen voor espresso om frisheid en ontgassing te balanceren"
        },
        {
                  "en": "Storing beans for years to improve flavor like wine",
                  "es": "Almacenar granos durante años para mejorar sabor como vino",
                  "de": "Bohnen jahrelang lagern, um Geschmack wie Wein zu verbessern",
                  "nl": "Bonen jarenlang opslaan om smaak te verbeteren zoals wijn"
        },
        {
                  "en": "Letting beans sit in hopper before grinding",
                  "es": "Dejar granos sentarse en tolva antes de moler",
                  "de": "Bohnen im Trichter sitzen lassen vor dem Mahlen",
                  "nl": "Bonen in trechter laten zitten voor malen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "During roasting, chemical reactions produce significant CO2 trapped in bean cellular structure. Immediately post-roast, beans actively degas—too much CO2 interferes with extraction by repelling water and creating turbulence. RESTING GUIDELINES: Filter coffee: 3-14 days (less CO2 interference, bloom handles excess); Espresso: 7-21 days (high pressure exacerbates CO2 problems, causing unstable crema, channeling, sour notes). TOO FRESH: Excessive CO2 causes uneven extraction, sour/grassy flavors, poor crema stability. TOO OLD: Beyond peak (30+ days), aromatics fade, oxidation increases, flavors become flat/stale. Packaging in one-way valve bags allows degassing while preventing oxygen entry. Peak flavor window: 7-30 days for most coffees, balancing freshness and stability.",
                  "es": "Durante el tostado, reacciones químicas producen CO2 significativo atrapado en estructura celular del grano. Inmediatamente post-tueste, granos desgasifican activamente—demasiado CO2 interfiere con extracción repeliendo agua y creando turbulencia. GUÍAS DE REPOSO: Café de filtro: 3-14 días (menos interferencia de CO2, bloom maneja exceso); Espresso: 7-21 días (alta presión exacerba problemas de CO2, causando crema inestable, canalización, notas ácidas). DEMASIADO FRESCO: CO2 excesivo causa extracción irregular, sabores ácidos/herbosos, pobre estabilidad de crema. DEMASIADO VIEJO: Más allá del pico (30+ días), aromáticos se desvanecen, oxidación aumenta, sabores se vuelven planos/rancios. Empaque en bolsas de válvula unidireccional permite desgasificación mientras previene entrada de oxígeno. Ventana de sabor pico: 7-30 días para mayoría de cafés, equilibrando frescura y estabilidad.",
                  "de": "Während Rösten produzieren chemische Reaktionen signifikantes CO2, das in Bohnen-Zellstruktur eingeschlossen ist. Unmittelbar nach Röstung gasen Bohnen aktiv aus—zu viel CO2 stört Extraktion durch Wasserabstoßung und Turbulenz-Erzeugung. RUHE-RICHTLINIEN: Filterkaffee: 3-14 Tage (weniger CO2-Interferenz, Bloom handhabt Überschuss); Espresso: 7-21 Tage (hoher Druck verschärft CO2-Probleme, verursacht instabile Crema, Channeling, saure Noten). ZU FRISCH: Übermäßiges CO2 verursacht ungleichmäßige Extraktion, saure/grasige Aromen, schlechte Crema-Stabilität. ZU ALT: Jenseits Peak (30+ Tage) verblassen Aromen, Oxidation steigt, Geschmäcker werden flach/alt. Verpackung in Einweg-Ventilbeuteln ermöglicht Entgasung bei Sauerstoffvermeidung. Peak-Geschmacksfenster: 7-30 Tage für meiste Kaffees, Ausgleich von Frische und Stabilität.",
                  "nl": "Tijdens roosteren produceren chemische reacties significant CO2 gevangen in boon cellulaire structuur. Onmiddellijk na roosteren ontgassen bonen actief—te veel CO2 interfereert met extractie door water af te stoten en turbulentie te creëren. RUST RICHTLIJNEN: Filter koffie: 3-14 dagen (minder CO2 interferentie, bloom handelt overmaat af); Espresso: 7-21 dagen (hoge druk verergert CO2 problemen, veroorzaakt instabiele crema, channeling, zure noten). TE VERS: Excessief CO2 veroorzaakt ongelijkmatige extractie, zure/grasachtige smaken, slechte crema stabiliteit. TE OUD: Voorbij piek (30+ dagen) vervagen aromatieken, oxidatie neemt toe, smaken worden vlak/oud. Verpakking in eenrichtingsventiel zakken staat ontgassing toe terwijl zuurstof binnenkomst voorkomt. Piek smaak venster: 7-30 dagen voor meeste koffies, balanceert frisheid en stabiliteit."
        }
      },
      {
        question: {
                  "en": "What is the World Barista Championship (WBC) and what are its competition requirements?",
                  "es": "¿Qué es el Campeonato Mundial de Baristas (WBC) y cuáles son sus requisitos de competencia?",
                  "de": "Was ist die Barista-Weltmeisterschaft (WBC) und was sind ihre Wettkampfanforderungen?",
                  "nl": "Wat is het Wereld Barista Kampioenschap (WBC) en wat zijn de competitie vereisten?"
        },
        options: [
        {
                  "en": "Coffee brewing speed competition only",
                  "es": "Solo competencia de velocidad de preparación de café",
                  "de": "Nur Kaffeebrüh-Geschwindigkeitswettbewerb",
                  "nl": "Alleen koffie zet snelheidscompetitie"
        },
        {
                  "en": "Cupping and tasting competition without preparation",
                  "es": "Competencia de catación y degustación sin preparación",
                  "de": "Cupping- und Verkostungswettbewerb ohne Zubereitung",
                  "nl": "Cupping en proef competitie zonder voorbereiding"
        },
        {
                  "en": "Premier global competition where baristas perform 15-minute routines preparing 4 espressos, 4 milk drinks, 4 signatures for sensory judges, scored on technical skill and taste",
                  "es": "Competencia global premier donde baristas realizan rutinas de 15 minutos preparando 4 espressos, 4 bebidas de leche, 4 firmas para jueces sensoriales, puntuados en habilidad técnica y sabor",
                  "de": "Premier globaler Wettbewerb, bei dem Baristas 15-Minuten-Routinen durchführen, 4 Espressos, 4 Milchgetränke, 4 Signaturen für sensorische Richter zubereiten, bewertet nach technischen Fähigkeiten und Geschmack",
                  "nl": "Premier wereldwijde competitie waar barista's 15-minuten routines uitvoeren waarbij 4 espresso's, 4 melkdrankjes, 4 signatures worden bereid voor sensorische juryleden, gescoord op technische vaardigheid en smaak"
        },
        {
                  "en": "Latte art championship exclusively",
                  "es": "Campeonato de arte latte exclusivamente",
                  "de": "Ausschließlich Latte-Art-Meisterschaft",
                  "nl": "Uitsluitend latte art kampioenschap"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The WBC, established in 2000, is coffee's most prestigious barista competition, held annually with national champions competing globally. COMPETITION FORMAT (15 minutes): 1) ESPRESSO COURSE: 4 identical espressos for judges, evaluated on taste, balance, tactile sensation; 2) MILK BEVERAGE COURSE: 4 identical milk-based drinks, judged on milk texture, temperature, taste, presentation; 3) SIGNATURE BEVERAGE COURSE: 4 identical creative drinks (espresso-based), showcasing innovation and flavor design. JUDGING: Technical judges score workflow, cleanliness, proficiency; Sensory judges (blind tasting) score taste, balance, tactile qualities on each drink. Competitors present their coffee story, preparation methodology, and flavor intentions. WBC drives innovation, elevates standards, and celebrates coffee as craft and science. Winners become industry influencers.",
                  "es": "El WBC, establecido en 2000, es la competencia de baristas más prestigiosa del café, celebrada anualmente con campeones nacionales compitiendo globalmente. FORMATO DE COMPETENCIA (15 minutos): 1) CURSO ESPRESSO: 4 espressos idénticos para jueces, evaluados en sabor, balance, sensación táctil; 2) CURSO BEBIDA DE LECHE: 4 bebidas idénticas a base de leche, juzgadas en textura de leche, temperatura, sabor, presentación; 3) CURSO BEBIDA FIRMA: 4 bebidas creativas idénticas (basadas en espresso), mostrando innovación y diseño de sabor. JUICIO: Jueces técnicos puntúan flujo de trabajo, limpieza, competencia; Jueces sensoriales (cata ciega) puntúan sabor, balance, cualidades táctiles en cada bebida. Competidores presentan su historia de café, metodología de preparación e intenciones de sabor. WBC impulsa innovación, eleva estándares y celebra café como artesanía y ciencia. Ganadores se convierten en influenciadores de industria.",
                  "de": "Die WBC, 2000 gegründet, ist Kaffees prestigeträchtigster Barista-Wettbewerb, jährlich mit nationalen Champions, die global konkurrieren. WETTBEWERBSFORMAT (15 Minuten): 1) ESPRESSO-KURS: 4 identische Espressos für Richter, bewertet nach Geschmack, Balance, taktiler Empfindung; 2) MILCHGETRÄNK-KURS: 4 identische Milch-basierte Getränke, beurteilt nach Milchtextur, Temperatur, Geschmack, Präsentation; 3) SIGNATUR-GETRÄNK-KURS: 4 identische kreative Getränke (Espresso-basiert), zeigen Innovation und Geschmacksdesign. BEWERTUNG: Technische Richter bewerten Arbeitsablauf, Sauberkeit, Können; Sensorische Richter (Blindverkostung) bewerten Geschmack, Balance, taktile Qualitäten jedes Getränks. Teilnehmer präsentieren Kaffee-Geschichte, Zubereitungsmethodik und Geschmacksabsichten. WBC treibt Innovation, hebt Standards und feiert Kaffee als Handwerk und Wissenschaft. Gewinner werden Industrie-Influencer.",
                  "nl": "Het WBC, opgericht in 2000, is koffies meest prestigieuze barista competitie, jaarlijks gehouden met nationale kampioenen die wereldwijd concurreren. COMPETITIE FORMAAT (15 minuten): 1) ESPRESSO CURSUS: 4 identieke espresso's voor juryleden, geëvalueerd op smaak, balans, tactiele sensatie; 2) MELKDRANK CURSUS: 4 identieke melk-gebaseerde drankjes, beoordeeld op melk textuur, temperatuur, smaak, presentatie; 3) SIGNATURE DRANK CURSUS: 4 identieke creatieve drankjes (espresso-gebaseerd), tonen innovatie en smaakontwerp. JURERING: Technische juryleden scoren werkstroom, netheid, bekwaamheid; Sensorische juryleden (blinde proeverij) scoren smaak, balans, tactiele kwaliteiten op elk drankje. Deelnemers presenteren hun koffieverhaal, bereidingsmethodologie en smaakintentie s. WBC drijft innovatie, verhoogt standaarden en viert koffie als ambacht en wetenschap. Winnaars worden industrie beïnvloeders."
        }
      },
      {
        question: {
                  "en": "What is 'direct trade' coffee and how does it differ from Fair Trade certification?",
                  "es": "¿Qué es el café de 'comercio directo' y cómo difiere de la certificación de Comercio Justo?",
                  "de": "Was ist 'Direct Trade' Kaffee und wie unterscheidet er sich von Fair Trade Zertifizierung?",
                  "nl": "Wat is 'direct trade' koffie en hoe verschilt het van Fair Trade certificering?"
        },
        options: [
        {
                  "en": "Government-regulated trade program for coffee exports",
                  "es": "Programa comercial regulado por gobierno para exportaciones de café",
                  "de": "Regierungsgesteuertes Handelsprogramm für Kaffeeexporte",
                  "nl": "Door overheid gereguleerd handelsprogramma voor koffie export"
        },
        {
                  "en": "Identical to Fair Trade with different name",
                  "es": "Idéntico a Comercio Justo con nombre diferente",
                  "de": "Identisch mit Fair Trade mit anderem Namen",
                  "nl": "Identiek aan Fair Trade met andere naam"
        },
        {
                  "en": "Only coffee sold directly to consumers at markets",
                  "es": "Solo café vendido directamente a consumidores en mercados",
                  "de": "Nur Kaffee direkt an Verbraucher auf Märkten verkauft",
                  "nl": "Alleen koffie direct verkocht aan consumenten op markten"
        },
        {
                  "en": "Direct relationships between roasters and farmers with premium pricing but no third-party certification; emphasizes quality, sustainability, and transparency over standardized requirements",
                  "es": "Relaciones directas entre tostadores y agricultores con precios premium pero sin certificación de terceros; enfatiza calidad, sostenibilidad y transparencia sobre requisitos estandarizados",
                  "de": "Direkte Beziehungen zwischen Röstern und Bauern mit Premium-Preisen aber ohne Drittzertifizierung; betont Qualität, Nachhaltigkeit und Transparenz über standardisierte Anforderungen",
                  "nl": "Directe relaties tussen roosters en boeren met premiumprijzen maar zonder certificering door derden; benadrukt kwaliteit, duurzaamheid en transparantie boven gestandaardiseerde vereisten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Direct Trade represents a relationship-based sourcing model where specialty roasters work directly with farmers/cooperatives, bypassing traditional commodity markets. KEY DIFFERENCES FROM FAIR TRADE: 1) NO CERTIFICATION: No third-party audits or standardized minimums—each relationship is unique; 2) QUALITY FOCUS: Prices based on cup quality (often 2-5× Fair Trade minimums) rather than cost-of-production floors; 3) TRANSPARENCY: Direct communication, often including farm visits, processing input, and multi-year contracts; 4) FLEXIBILITY: Tailored agreements addressing specific farm needs vs. one-size-fits-all standards. Criticism: Lack of oversight, potential for greenwashing without verification. Benefits: Higher farmer premiums for quality, innovation incentives, direct feedback loops. Pioneered by companies like Intelligentsia and Counter Culture, it represents specialty coffee's pursuit of ethical sourcing through relationships rather than certification.",
                  "es": "Comercio Directo representa un modelo de abastecimiento basado en relaciones donde tostadores especiales trabajan directamente con agricultores/cooperativas, evitando mercados de commodities tradicionales. DIFERENCIAS CLAVE DEL COMERCIO JUSTO: 1) SIN CERTIFICACIÓN: Sin auditorías de terceros o mínimos estandarizados—cada relación es única; 2) ENFOQUE EN CALIDAD: Precios basados en calidad de taza (a menudo 2-5× mínimos Comercio Justo) en lugar de pisos de costo de producción; 3) TRANSPARENCIA: Comunicación directa, a menudo incluyendo visitas a finca, aporte de procesamiento y contratos multi-año; 4) FLEXIBILIDAD: Acuerdos a medida abordando necesidades específicas de finca vs. estándares únicos. Crítica: Falta de supervisión, potencial de greenwashing sin verificación. Beneficios: Primas más altas para agricultores por calidad, incentivos de innovación, ciclos de retroalimentación directos. Pionero por compañías como Intelligentsia y Counter Culture, representa búsqueda de café especial de abastecimiento ético mediante relaciones en lugar de certificación.",
                  "de": "Direct Trade repräsentiert ein beziehungsbasiertes Beschaffungsmodell, bei dem Specialty-Röster direkt mit Bauern/Kooperativen arbeiten und traditionelle Rohstoffmärkte umgehen. HAUPTUNTERSCHIEDE ZU FAIR TRADE: 1) KEINE ZERTIFIZIERUNG: Keine Drittaudits oder standardisierte Minima—jede Beziehung ist einzigartig; 2) QUALITÄTSFOKUS: Preise basierend auf Tassenqualität (oft 2-5× Fair Trade Minima) statt Produktionskosten-Untergrenzen; 3) TRANSPARENZ: Direkte Kommunikation, oft einschließlich Farmbesuchen, Verarbeitungsinput und mehrjährigen Verträgen; 4) FLEXIBILITÄT: Maßgeschneiderte Vereinbarungen für spezifische Farmbedürfnisse vs. Einheitsstandards. Kritik: Mangel an Aufsicht, Potenzial für Greenwashing ohne Verifizierung. Vorteile: Höhere Bauernprämien für Qualität, Innovationsanreize, direkte Feedback-Schleifen. Pioniert von Firmen wie Intelligentsia und Counter Culture, repräsentiert es Specialty-Kaffees Streben nach ethischer Beschaffung durch Beziehungen statt Zertifizierung.",
                  "nl": "Direct Trade vertegenwoordigt een relatie-gebaseerd inkoop model waarbij specialty roosters direct werken met boeren/coöperaties, traditionele grondstoffenmarkten omzeilend. SLEUTELVERSCHILLEN VAN FAIR TRADE: 1) GEEN CERTIFICERING: Geen audits door derden of gestandaardiseerde minima—elke relatie is uniek; 2) KWALITEITSFOCUS: Prijzen gebaseerd op kopkwaliteit (vaak 2-5× Fair Trade minima) in plaats van productiekosten vloeren; 3) TRANSPARANTIE: Directe communicatie, vaak inclusief boerderijbezoeken, verwerkingsinput en meerjarige contracten; 4) FLEXIBILITEIT: Op maat gemaakte overeenkomsten voor specifieke boerderij behoeften vs. one-size-fits-all standaarden. Kritiek: Gebrek aan toezicht, potentieel voor greenwashing zonder verificatie. Voordelen: Hogere boeren premies voor kwaliteit, innovatie prikkels, directe feedback loops. Gepionierd door bedrijven zoals Intelligentsia en Counter Culture, vertegenwoordigt het specialty koffies streven naar ethische inkoop door relaties in plaats van certificering."
        }
      },
      {
        question: {
                  "en": "What is the significance of 'altitude' (elevation) in coffee growing and how does it affect flavor?",
                  "es": "¿Cuál es la importancia de la 'altitud' (elevación) en el cultivo de café y cómo afecta el sabor?",
                  "de": "Was ist die Bedeutung von 'Höhe' (Elevation) beim Kaffeeanbau und wie beeinflusst sie den Geschmack?",
                  "nl": "Wat is de betekenis van 'hoogte' (elevatie) bij koffie teelt en hoe beïnvloedt het de smaak?"
        },
        options: [
        {
                  "en": "Lower altitudes always produce better quality beans",
                  "es": "Altitudes más bajas siempre producen granos de mejor calidad",
                  "de": "Niedrigere Lagen produzieren immer bessere Qualitätsbohnen",
                  "nl": "Lagere hoogtes produceren altijd betere kwaliteitsbonen"
        },
        {
                  "en": "Higher altitudes (1200-2200m) slow cherry maturation, increasing sugar/acid development and density, creating brighter, more complex flavors",
                  "es": "Mayores altitudes (1200-2200m) ralentizan maduración de cereza, aumentando desarrollo de azúcar/ácido y densidad, creando sabores más brillantes y complejos",
                  "de": "Höhere Lagen (1200-2200m) verlangsamen Kirschenreifung, erhöhen Zucker-/Säureentwicklung und Dichte, erzeugen hellere, komplexere Aromen",
                  "nl": "Hogere hoogtes (1200-2200m) vertragen bes rijping, verhogen suiker/zuur ontwikkeling en dichtheid, creëren helderdere, complexere smaken"
        },
        {
                  "en": "Altitude has no effect on coffee flavor",
                  "es": "Altitud no tiene efecto en sabor del café",
                  "de": "Höhe hat keinen Effekt auf Kaffeegeschmack",
                  "nl": "Hoogte heeft geen effect op koffiesmaak"
        },
        {
                  "en": "Only affects caffeine content, not taste",
                  "es": "Solo afecta contenido de cafeína, no sabor",
                  "de": "Beeinflusst nur Koffeingehalt, nicht Geschmack",
                  "nl": "Beïnvloedt alleen cafeïnegehalte, niet smaak"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Altitude profoundly affects coffee quality through temperature and maturation dynamics: HIGH ALTITUDE (1200-2200m/4000-7200ft): Cooler temperatures slow cherry ripening (8-11 months vs. 6-8 at low elevations), allowing beans to develop: 1) Higher density (harder beans); 2) More complex sugars; 3) Greater acidity (malic, citric acids); 4) Enhanced aromatic compounds. Result: Bright, crisp acidity, floral/fruity notes, complex flavor. Classifications: Strictly High Grown (SHG) >1350m, High Grown (HG) 1050-1350m. LOW ALTITUDE (<900m): Faster maturation, lower density, less acidity, simpler flavors—often earthy, nutty profiles. However, processing and varietal also matter—exceptional low-altitude coffees exist (e.g., some Brazils). Altitude generally correlates with quality in Arabica, making high-grown beans command premium prices.",
                  "es": "Altitud afecta profundamente calidad del café mediante temperatura y dinámica de maduración: ALTA ALTITUD (1200-2200m/4000-7200ft): Temperaturas más frías ralentizan maduración de cereza (8-11 meses vs. 6-8 en elevaciones bajas), permitiendo a granos desarrollar: 1) Mayor densidad (granos más duros); 2) Azúcares más complejos; 3) Mayor acidez (ácidos málico, cítrico); 4) Compuestos aromáticos mejorados. Resultado: Acidez brillante y nítida, notas florales/afrutadas, sabor complejo. Clasificaciones: Strictly High Grown (SHG) >1350m, High Grown (HG) 1050-1350m. BAJA ALTITUD (<900m): Maduración más rápida, menor densidad, menos acidez, sabores más simples—a menudo perfiles terrosos, de nuez. Sin embargo, procesamiento y variedad también importan—cafés excepcionales de baja altitud existen (ej. algunos Brasileños). Altitud generalmente correlaciona con calidad en Arábica, haciendo que granos de alta altitud demanden precios premium.",
                  "de": "Höhe beeinflusst Kaffeequalität tiefgreifend durch Temperatur- und Reifungsdynamik: HOHE HÖHENLAGE (1200-2200m/4000-7200ft): Kühlere Temperaturen verlangsamen Kirschenreifung (8-11 Monate vs. 6-8 in niedrigen Lagen), ermöglichen Bohnenentwicklung: 1) Höhere Dichte (härtere Bohnen); 2) Komplexere Zucker; 3) Größere Säure (Apfel-, Zitronensäure); 4) Verbesserte aromatische Verbindungen. Ergebnis: Helle, knackige Säure, blumige/fruchtige Noten, komplexer Geschmack. Klassifikationen: Strictly High Grown (SHG) >1350m, High Grown (HG) 1050-1350m. NIEDRIGE HÖHENLAGE (<900m): Schnellere Reifung, niedrigere Dichte, weniger Säure, einfachere Aromen—oft erdige, nussige Profile. Jedoch sind Verarbeitung und Varietät auch wichtig—außergewöhnliche Niedriglagen-Kaffees existieren (z.B. einige Brasilianer). Höhe korreliert generell mit Qualität bei Arabica, lässt hochgewachsene Bohnen Premium-Preise erzielen.",
                  "nl": "Hoogte beïnvloedt koffiekwaliteit diepgaand door temperatuur en rijpingsdynamiek: HOGE HOOGTE (1200-2200m/4000-7200ft): Koelere temperaturen vertragen bes rijping (8-11 maanden vs. 6-8 op lage hoogtes), stellen bonen in staat te ontwikkelen: 1) Hogere dichtheid (hardere bonen); 2) Complexere suikers; 3) Grotere zuurgraad (appelzuur, citroenzuur); 4) Verbeterde aromatische verbindingen. Resultaat: Heldere, knapperige zuurgraad, bloemige/fruitige noten, complexe smaak. Classificaties: Strictly High Grown (SHG) >1350m, High Grown (HG) 1050-1350m. LAGE HOOGTE (<900m): Snellere rijping, lagere dichtheid, minder zuurgraad, eenvoudigere smaken—vaak aardse, nootachtige profielen. Echter, verwerking en variëteit zijn ook belangrijk—uitzonderlijke lage-hoogte koffies bestaan (bijv. sommige Braziliaanse). Hoogte correleert over het algemeen met kwaliteit bij Arabica, laat hoog-gegroeide bonen premiumprijzen vragen."
        }
      },
      {
        question: {
                  "en": "What is 'microfoam' (or 'silky milk') and what technique creates it for espresso beverages?",
                  "es": "¿Qué es 'microespuma' (o 'leche sedosa') y qué técnica la crea para bebidas de espresso?",
                  "de": "Was ist 'Mikroschaum' (oder 'seidige Milch') und welche Technik erzeugt ihn für Espresso-Getränke?",
                  "nl": "Wat is 'microschuim' (of 'zijdeachtige melk') en welke techniek creëert het voor espresso drankjes?"
        },
        options: [
        {
                  "en": "Foam created only in cappuccinos, not lattes",
                  "es": "Espuma creada solo en cappuccinos, no lattes",
                  "de": "Schaum nur in Cappuccinos erzeugt, nicht Lattes",
                  "nl": "Schuim alleen gecreëerd in cappuccino's, niet latte's"
        },
        {
                  "en": "Adding powdered milk to create foam texture",
                  "es": "Añadir leche en polvo para crear textura de espuma",
                  "de": "Milchpulver hinzufügen um Schaumtextur zu erzeugen",
                  "nl": "Melkpoeder toevoegen om schuim textuur te creëren"
        },
        {
                  "en": "Large, stiff foam bubbles from over-aeration",
                  "es": "Burbujas grandes y rígidas de espuma por sobre-aireación",
                  "de": "Große, steife Schaumblasen durch Über-Belüftung",
                  "nl": "Grote, stijve schuim bellen door overmatige aeratie"
        },
        {
                  "en": "Uniformly textured foam with tiny bubbles (0.1-0.2mm) created by proper steaming technique: aeration phase then texturing phase, achieving glossy, paint-like consistency",
                  "es": "Espuma de textura uniforme con burbujas diminutas (0,1-0,2mm) creada por técnica de vaporización apropiada: fase de aireación luego fase de texturización, logrando consistencia brillante similar a pintura",
                  "de": "Gleichmäßig texturierter Schaum mit winzigen Blasen (0,1-0,2mm) durch richtige Aufschäumtechnik erzeugt: Belüftungsphase dann Texturierungsphase, erreicht glänzende, farbähnliche Konsistenz",
                  "nl": "Uniform getextureerd schuim met minuscule bellen (0,1-0,2mm) gecreëerd door juiste stoom techniek: aeratie fase dan texturering fase, bereikt glanzende, verfachtige consistentie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Microfoam is velvety, glossy-textured milk with microscopic air bubbles uniformly distributed, creating 'wet paint' consistency essential for latte art and quality milk beverages. STEAMING TECHNIQUE: 1) AERATION PHASE (0-5 seconds): Steam wand tip just below surface introducing air—creates 'chirping' sound. Stretch milk volume 20-50% depending on beverage (cappuccino more, flat white/latte less); 2) TEXTURING PHASE (remainder): Submerge wand deeper, creating vortex that incorporates air bubbles into liquid, breaking large bubbles into microfoam; 3) FINISH: Steam to 55-65°C (131-149°F)—proteins denature, sugars taste sweeter, foam stabilizes. RESULT: No visible bubbles, glossy surface, 'pours like syrup.' Contrast with MACROFOAM: Large bubbles, dry/stiff texture from over-aeration. Milk chemistry: Fat provides body, proteins (whey, casein) stabilize bubbles through denaturation when heated.",
                  "es": "Microespuma es leche de textura aterciopelada y brillante con burbujas de aire microscópicas uniformemente distribuidas, creando consistencia de 'pintura húmeda' esencial para arte latte y bebidas de leche de calidad. TÉCNICA DE VAPORIZACIÓN: 1) FASE DE AIREACIÓN (0-5 segundos): Punta de varilla de vapor justo debajo de superficie introduciendo aire—crea sonido de 'gorjeo'. Estirar volumen de leche 20-50% dependiendo de bebida (cappuccino más, flat white/latte menos); 2) FASE DE TEXTURIZACIÓN (resto): Sumergir varilla más profundo, creando vórtice que incorpora burbujas de aire en líquido, rompiendo burbujas grandes en microespuma; 3) FINALIZAR: Vaporizar a 55-65°C (131-149°F)—proteínas se desnaturalizan, azúcares saben más dulces, espuma se estabiliza. RESULTADO: Sin burbujas visibles, superficie brillante, 'vierte como jarabe'. Contraste con MACROESPUMA: Burbujas grandes, textura seca/rígida por sobre-aireación. Química de leche: Grasa proporciona cuerpo, proteínas (suero, caseína) estabilizan burbujas mediante desnaturalización cuando se calienta.",
                  "de": "Mikroschaum ist samtig, glänzend-texturierte Milch mit mikroskopischen Luftblasen gleichmäßig verteilt, erzeugt 'Nassfarben'-Konsistenz essentiell für Latte Art und Qualitätsmilchgetränke. AUFSCHÄUMTECHNIK: 1) BELÜFTUNGSPHASE (0-5 Sekunden): Dampflanzespitze knapp unter Oberfläche führt Luft ein—erzeugt 'Zirpen'-Geräusch. Milchvolumen 20-50% strecken je nach Getränk (Cappuccino mehr, Flat White/Latte weniger); 2) TEXTURIERUNGSPHASE (Rest): Lanze tiefer eintauchen, Wirbel erzeugen der Luftblasen in Flüssigkeit einarbeitet, große Blasen in Mikroschaum zerbricht; 3) ABSCHLUSS: Bis 55-65°C (131-149°F) aufschäumen—Proteine denaturieren, Zucker schmecken süßer, Schaum stabilisiert. ERGEBNIS: Keine sichtbaren Blasen, glänzende Oberfläche, 'gießt wie Sirup'. Kontrast zu MAKROSCHAUM: Große Blasen, trockene/steife Textur durch Über-Belüftung. Milchchemie: Fett liefert Körper, Proteine (Molke, Kasein) stabilisieren Blasen durch Denaturierung beim Erhitzen.",
                  "nl": "Microschuim is fluweelachtig, glanzend getextureerde melk met microscopische luchtbellen uniform verdeeld, creëert 'natte verf' consistentie essentieel voor latte art en kwaliteit melkdrankjes. STOOM TECHNIEK: 1) AERATIE FASE (0-5 seconden): Stoomstaaf tip net onder oppervlak introducerend lucht—creëert 'tjilpen' geluid. Rek melk volume 20-50% afhankelijk van drankje (cappuccino meer, flat white/latte minder); 2) TEXTURERING FASE (restant): Staaf dieper onderdompelen, vortex creërend die luchtbellen in vloeistof incorporeert, grote bellen breekt in microschuim; 3) AFWERKEN: Stomen tot 55-65°C (131-149°F)—eiwitten denatureren, suikers smaken zoeter, schuim stabiliseert. RESULTAAT: Geen zichtbare bellen, glanzend oppervlak, 'giet als siroop.' Contrast met MACROSCHUIM: Grote bellen, droge/stijve textuur door overmatige aeratie. Melkchemie: Vet levert body, eiwitten (wei, caseïne) stabiliseren bellen door denaturatie bij verwarming."
        }
      },
      {
        question: {
                  "en": "What is the 'barista hustle pressure profiling method' and how does adaptive flow profiling optimize espresso extraction across different coffees?",
                  "es": "¿Qué es el 'método de perfilado de presión barista hustle' y cómo optimiza el perfilado de flujo adaptativo la extracción de espresso en diferentes cafés?",
                  "de": "Was ist die 'Barista Hustle Druckprofilierungs-Methode' und wie optimiert adaptive Durchflussprofilierung die Espresso-Extraktion bei verschiedenen Kaffees?",
                  "nl": "Wat is de 'barista hustle druk profilering methode' en hoe optimaliseert adaptieve stroom profilering espresso extractie bij verschillende koffies?"
        },
        options: [
        {
                  "en": "Simply using maximum pressure throughout the entire shot",
                  "es": "Simplemente usar presión máxima durante todo el disparo",
                  "de": "Einfach maximalen Druck während des gesamten Bezugs verwenden",
                  "nl": "Simpelweg maximale druk gebruiken tijdens de hele shot"
        },
        {
                  "en": "Pressure profiling has no scientific basis",
                  "es": "El perfilado de presión no tiene base científica",
                  "de": "Druckprofilierung hat keine wissenschaftliche Grundlage",
                  "nl": "Druk profilering heeft geen wetenschappelijke basis"
        },
        {
                  "en": "Flow profiling varies pump pressure throughout extraction (e.g., blooming profile, declining pressure, adaptive ramps) to manipulate extraction kinetics, customized to coffee's roast level, density, and desired flavor profile",
                  "es": "El perfilado de flujo varía la presión de la bomba durante la extracción (p. ej., perfil de floración, presión decreciente, rampas adaptativas) para manipular la cinética de extracción, personalizado al nivel de tostado del café, densidad y perfil de sabor deseado",
                  "de": "Durchflussprofilierung variiert Pumpendruck während Extraktion (z.B. Blühprofil, abnehmender Druck, adaptive Rampen) um Extraktionskinetik zu manipulieren, angepasst an Röstgrad, Dichte und gewünschtes Geschmacksprofil des Kaffees",
                  "nl": "Stroom profilering varieert pompdruk tijdens extractie (bijv. bloei profiel, afnemende druk, adaptieve hellingen) om extractie kinetiek te manipuleren, aangepast aan koffie roostergraad, dichtheid en gewenst smaak profiel"
        },
        {
                  "en": "Only applicable to dark roasts, not light roasts",
                  "es": "Solo aplicable a tuestes oscuros, no a tuestes claros",
                  "de": "Nur anwendbar auf dunkle Röstungen, nicht helle Röstungen",
                  "nl": "Alleen toepasbaar op donkere roosteringen, niet lichte roosteringen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Advanced pressure/flow profiling techniques (popularized by Barista Hustle, Scott Rao, and others) use programmable espresso machines to dynamically adjust pressure throughout extraction. PRINCIPLES: Different extraction phases benefit from different pressures. PRE-INFUSION (low pressure 1-4 bar): Gently wets grounds, releases CO2, prevents channeling. RAMP-UP: Gradual pressure increase optimizes particle bed saturation. PEAK EXTRACTION (6-9 bar): Efficient solvent extraction. DECLINING PHASE: Dropping pressure toward end prevents over-extraction and bitterness. CUSTOMIZATION: Light roasts (dense, less soluble) may benefit from higher pressure and longer pre-infusion; dark roasts (porous, highly soluble) from gentler profiles. Flow profiling measures flow rate (ml/s) rather than pressure, allowing precise control over extraction kinetics. Result: Enhanced sweetness, clarity, reduced astringency, customized to each coffee's unique characteristics.",
                  "es": "Las técnicas avanzadas de perfilado de presión/flujo (popularizadas por Barista Hustle, Scott Rao y otros) usan máquinas de espresso programables para ajustar dinámicamente la presión durante la extracción. PRINCIPIOS: Diferentes fases de extracción se benefician de diferentes presiones. PRE-INFUSIÓN (presión baja 1-4 bar): Humedece suavemente los granos, libera CO2, previene canalización. RAMPA ASCENDENTE: Aumento gradual de presión optimiza saturación del lecho de partículas. EXTRACCIÓN PICO (6-9 bar): Extracción eficiente de solvente. FASE DECRECIENTE: Bajar presión hacia el final previene sobre-extracción y amargor. PERSONALIZACIÓN: Tuestes claros (densos, menos solubles) pueden beneficiarse de mayor presión y pre-infusión más larga; tuestes oscuros (porosos, altamente solubles) de perfiles más suaves. El perfilado de flujo mide tasa de flujo (ml/s) en lugar de presión, permitiendo control preciso sobre cinética de extracción. Resultado: Dulzura mejorada, claridad, astringencia reducida, personalizado a las características únicas de cada café.",
                  "de": "Fortgeschrittene Druck-/Durchflussprofilierungstechniken (popularisiert von Barista Hustle, Scott Rao und anderen) verwenden programmierbare Espressomaschinen zur dynamischen Druckanpassung während Extraktion. PRINZIPIEN: Verschiedene Extraktionsphasen profitieren von unterschiedlichen Drücken. VORINFUSION (niedriger Druck 1-4 bar): Befeuchtet Kaffeemehl sanft, setzt CO2 frei, verhindert Kanalbildung. HOCHLAUF: Gradueller Druckanstieg optimiert Partikelbettsättigung. SPITZENEXTRAKTION (6-9 bar): Effiziente Lösungsmittelextraktion. ABFALLENDE PHASE: Druckabfall zum Ende verhindert Überextraktion und Bitterkeit. ANPASSUNG: Helle Röstungen (dicht, weniger löslich) profitieren möglicherweise von höherem Druck und längerer Vorinfusion; dunkle Röstungen (porös, hochlöslich) von sanfteren Profilen. Durchflussprofilierung misst Durchflussrate (ml/s) statt Druck, ermöglicht präzise Kontrolle der Extraktionskinetik. Ergebnis: Verbesserte Süße, Klarheit, reduzierte Adstringenz, angepasst an einzigartige Eigenschaften jedes Kaffees.",
                  "nl": "Geavanceerde druk/stroom profilering technieken (gepopulariseerd door Barista Hustle, Scott Rao en anderen) gebruiken programmeerbare espresso machines om druk dynamisch aan te passen tijdens extractie. PRINCIPES: Verschillende extractie fasen profiteren van verschillende drukken. PRE-INFUSIE (lage druk 1-4 bar): Bevochtigt gemalen koffie zachtjes, geeft CO2 vrij, voorkomt channeling. OPLOOP: Geleidelijke druk toename optimaliseert deeltjesbed verzadiging. PIEK EXTRACTIE (6-9 bar): Efficiënte oplosmiddel extractie. DALENDE FASE: Druk laten vallen naar einde voorkomt over-extractie en bitterheid. AANPASSING: Lichte roosteringen (dicht, minder oplosbaar) kunnen profiteren van hogere druk en langere pre-infusie; donkere roosteringen (poreus, zeer oplosbaar) van zachtere profielen. Stroom profilering meet stroomsnelheid (ml/s) in plaats van druk, maakt precieze controle over extractie kinetiek mogelijk. Resultaat: Verbeterde zoetheid, helderheid, verminderde samentrekkendheid, aangepast aan unieke kenmerken van elke koffie."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  }
})();