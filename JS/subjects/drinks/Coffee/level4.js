// Coffee Quiz - Level 4: Upper Intermediate Coffee Knowledge
(function() {
  const level4 = {
    name: {
      en: "Coffee Level 4",
      es: "Café Nivel 4",
      de: "Kaffee Stufe 4",
      nl: "Koffie Level 4"
    },
    questions: [
      {
        question: {
          en: "What is honey processing in coffee production?",
          es: "¿Qué es el procesamiento con miel en la producción de café?",
          de: "Was ist Honey-Processing bei der Kaffeeproduktion?",
          nl: "Wat is honey processing bij koffieproductie?"
        },
        options: [
          { en: "Leaving some fruit mucilage on beans during drying", es: "Dejar algo de mucílago de fruta en los granos durante el secado", de: "Etwas Fruchtschleim an den Bohnen während des Trocknens belassen", nl: "Wat fruchtmucilage op bonen laten tijdens het drogen" },
          { en: "Adding honey to the coffee", es: "Añadir miel al café", de: "Honig zum Kaffee hinzufügen", nl: "Honing toevoegen aan de koffie" },
          { en: "Growing coffee near beehives", es: "Cultivar café cerca de colmenas", de: "Kaffee in der Nähe von Bienenstöcken anbauen", nl: "Koffie kweken bij bijenkorven" },
          { en: "Sweetening beans with sugar syrup", es: "Endulzar granos con jarabe de azúcar", de: "Bohnen mit Zuckersirup süßen", nl: "Bonen zoeten met suikersiroop" }
        ],
        correct: 0,
        explanation: {
          en: "Honey processing (pulped natural) removes the skin but leaves varying amounts of sticky fruit mucilage on the bean during drying. This creates sweetness between washed and natural processing, with variations like white, yellow, red, and black honey based on mucilage amount.",
          es: "El procesamiento con miel (natural despulpado) remueve la piel pero deja cantidades variables de mucílago pegajoso de fruta en el grano durante el secado. Esto crea dulzura entre procesamiento lavado y natural, con variaciones como miel blanca, amarilla, roja y negra basadas en la cantidad de mucílago.",
          de: "Honey-Processing (entpulpt natürlich) entfernt die Haut, lässt aber unterschiedliche Mengen klebriger Fruchtschleim an der Bohne während des Trocknens. Dies erzeugt Süße zwischen gewaschener und natürlicher Verarbeitung, mit Variationen wie weißem, gelbem, rotem und schwarzem Honey basierend auf der Schleimmenge.",
          nl: "Honey processing (pulped natural) verwijdert de schil maar laat variërende hoeveelheden kleverige fruchtmucilage op de boon tijdens het drogen. Dit creëert zoetheid tussen gewassen en natuurlijke verwerking, met variaties zoals witte, gele, rode en zwarte honey gebaseerd op mucilage hoeveelheid."
        }
      },
      {
        question: {
          en: "What are coffee cultivars or varietals?",
          es: "¿Qué son los cultivares o variedades de café?",
          de: "Was sind Kaffee-Kultivare oder Varietäten?",
          nl: "Wat zijn koffie cultivars of variëteiten?"
        },
        options: [
          { en: "Distinct genetic varieties of coffee plants with unique characteristics", es: "Variedades genéticas distintas de plantas de café con características únicas", de: "Unterschiedliche genetische Varietäten von Kaffeepflanzen mit einzigartigen Eigenschaften", nl: "Verschillende genetische variëteiten van koffieplanten met unieke kenmerken" },
          { en: "Different roast levels", es: "Diferentes niveles de tueste", de: "Verschiedene Röstgrade", nl: "Verschillende brandniveaus" },
          { en: "Coffee brewing methods", es: "Métodos de preparación de café", de: "Kaffee-Brühmethoden", nl: "Koffiezet methoden" },
          { en: "Types of coffee drinks", es: "Tipos de bebidas de café", de: "Arten von Kaffeegetränken", nl: "Soorten koffiedrankjes" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee cultivars are genetically distinct varieties of coffee plants. Examples include Bourbon, Typica, Geisha, SL28, and Caturra. Each has unique flavor profiles, disease resistance, and growing requirements. Geisha, for instance, is prized for its tea-like, floral characteristics.",
          es: "Los cultivares de café son variedades genéticamente distintas de plantas de café. Ejemplos incluyen Bourbon, Typica, Geisha, SL28 y Caturra. Cada uno tiene perfiles de sabor únicos, resistencia a enfermedades y requisitos de cultivo. Geisha, por ejemplo, es valorado por sus características florales similares al té.",
          de: "Kaffee-Kultivare sind genetisch unterschiedliche Varietäten von Kaffeepflanzen. Beispiele sind Bourbon, Typica, Geisha, SL28 und Caturra. Jede hat einzigartige Geschmacksprofile, Krankheitsresistenz und Anbauanforderungen. Geisha zum Beispiel wird für seine teeähnlichen, blumigen Eigenschaften geschätzt.",
          nl: "Koffie cultivars zijn genetisch verschillende variëteiten van koffieplanten. Voorbeelden zijn Bourbon, Typica, Geisha, SL28 en Caturra. Elk heeft unieke smaakprofielen, ziekteresistentie en groeivereisten. Geisha bijvoorbeeld wordt gewaardeerd om zijn thee-achtige, bloemige kenmerken."
        }
      },
      {
        question: {
          en: "What is the difference between a burr grinder and a blade grinder?",
          es: "¿Cuál es la diferencia entre un molinillo de fresas y un molinillo de cuchillas?",
          de: "Was ist der Unterschied zwischen einer Mahlscheiben-Mühle und einer Klingen-Mühle?",
          nl: "Wat is het verschil tussen een maalschijvenmolen en een messenmolen?"
        },
        options: [
          { en: "Burr grinders crush beans uniformly between two surfaces, blade grinders chop inconsistently", es: "Molinillos de fresas trituran granos uniformemente entre dos superficies, molinillos de cuchillas cortan inconsistentemente", de: "Mahlscheiben-Mühlen zerkleinern Bohnen gleichmäßig zwischen zwei Flächen, Klingen-Mühlen hacken ungleichmäßig", nl: "Maalschijvenmolens vermalen bonen uniform tussen twee oppervlakken, messenmolens hakken inconsistent" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Burr grinders are for espresso only", es: "Molinillos de fresas son solo para espresso", de: "Mahlscheiben-Mühlen sind nur für Espresso", nl: "Maalschijvenmolens zijn alleen voor espresso" },
          { en: "Blade grinders are more expensive", es: "Molinillos de cuchillas son más caros", de: "Klingen-Mühlen sind teurer", nl: "Messenmolens zijn duurder" }
        ],
        correct: 0,
        explanation: {
          en: "Burr grinders crush beans between two revolving abrasive surfaces, producing uniform particle size crucial for even extraction. Blade grinders chop beans with spinning blades, creating inconsistent sizes from powder to chunks, leading to uneven extraction and inferior coffee.",
          es: "Los molinillos de fresas trituran granos entre dos superficies abrasivas giratorias, produciendo tamaño de partícula uniforme crucial para extracción uniforme. Los molinillos de cuchillas cortan granos con cuchillas giratorias, creando tamaños inconsistentes desde polvo hasta trozos, llevando a extracción desigual y café inferior.",
          de: "Mahlscheiben-Mühlen zerkleinern Bohnen zwischen zwei rotierenden abrasiven Flächen und produzieren gleichmäßige Partikelgröße, entscheidend für gleichmäßige Extraktion. Klingen-Mühlen hacken Bohnen mit rotierenden Klingen und erzeugen ungleichmäßige Größen von Pulver bis Brocken, was zu ungleichmäßiger Extraktion und minderwertigem Kaffee führt.",
          nl: "Maalschijvenmolens vermalen bonen tussen twee roterende schurende oppervlakken, wat uniforme deeltjesgrootte produceert cruciaal voor gelijkmatige extractie. Messenmolens hakken bonen met draaiende messen, wat inconsistente groottes creëert van poeder tot brokken, leidend tot ongelijkmatige extractie en inferieure koffie."
        }
      },
      {
        question: {
          en: "What is a pour-over technique called 'pulse pouring'?",
          es: "¿Qué es una técnica de vertido llamada 'vertido por pulsos'?",
          de: "Was ist eine Pour-Over-Technik namens 'Pulse Pouring'?",
          nl: "Wat is een pour-over techniek genaamd 'pulse pouring'?"
        },
        options: [
          { en: "Adding water in multiple small, timed pours rather than continuously", es: "Añadir agua en múltiples vertidos pequeños y cronometrados en lugar de continuamente", de: "Wasser in mehreren kleinen, getakteten Güssen statt kontinuierlich hinzufügen", nl: "Water toevoegen in meerdere kleine, getimede gietsels in plaats van continu" },
          { en: "Pouring very quickly", es: "Verter muy rápido", de: "Sehr schnell gießen", nl: "Heel snel gieten" },
          { en: "Using your pulse to measure timing", es: "Usar tu pulso para medir el tiempo", de: "Deinen Puls zum Zeitmessen verwenden", nl: "Je pols gebruiken om timing te meten" },
          { en: "Pouring in a circular motion only", es: "Verter solo en movimiento circular", de: "Nur in kreisenden Bewegungen gießen", nl: "Alleen in cirkelvormige beweging gieten" }
        ],
        correct: 0,
        explanation: {
          en: "Pulse pouring involves adding water in multiple small, controlled pours with brief pauses between each addition. This technique controls extraction rate, allows degassing between pours, and can highlight specific flavor characteristics by managing water contact time with the grounds.",
          es: "El vertido por pulsos implica añadir agua en múltiples vertidos pequeños y controlados con pausas breves entre cada adición. Esta técnica controla la tasa de extracción, permite desgasificación entre vertidos y puede resaltar características de sabor específicas al manejar el tiempo de contacto del agua con el café molido.",
          de: "Pulse Pouring beinhaltet das Hinzufügen von Wasser in mehreren kleinen, kontrollierten Güssen mit kurzen Pausen zwischen jeder Zugabe. Diese Technik kontrolliert die Extraktionsrate, ermöglicht Entgasung zwischen den Güssen und kann spezifische Geschmacksmerkmale hervorheben, indem die Wasserkontaktzeit mit dem Kaffeemehl gesteuert wird.",
          nl: "Pulse pouring houdt in water toevoegen in meerdere kleine, gecontroleerde gietsels met korte pauzes tussen elke toevoeging. Deze techniek controleert extractiesnelheid, maakt ontgassing mogelijk tussen gietsels, en kan specifieke smaakkenmerken benadrukken door contacttijd van water met het gemalen te beheren."
        }
      },
      {
        question: {
          en: "What is the Q Grader certification?",
          es: "¿Qué es la certificación Q Grader?",
          de: "Was ist die Q Grader-Zertifizierung?",
          nl: "Wat is de Q Grader certificering?"
        },
        options: [
          { en: "A professional certification for coffee quality assessment and cupping", es: "Una certificación profesional para evaluación de calidad de café y catación", de: "Eine professionelle Zertifizierung für Kaffeequalitätsbewertung und Cupping", nl: "Een professionele certificering voor koffiekwaliteitsbeoordeling en cupping" },
          { en: "A grade of coffee beans", es: "Un grado de granos de café", de: "Ein Grad von Kaffeebohnen", nl: "Een graad van koffiebonen" },
          { en: "A type of coffee machine", es: "Un tipo de máquina de café", de: "Eine Art Kaffeemaschine", nl: "Een soort koffiemachine" },
          { en: "A roasting certification", es: "Una certificación de tostado", de: "Eine Röst-Zertifizierung", nl: "Een brand certificering" }
        ],
        correct: 0,
        explanation: {
          en: "Q Grader is an internationally recognized certification program by the Coffee Quality Institute (CQI). Q Graders are trained to evaluate coffee quality using standardized protocols, including sensory analysis, green coffee grading, and roast evaluation. It's considered the gold standard for coffee quality assessment.",
          es: "Q Grader es un programa de certificación reconocido internacionalmente por el Coffee Quality Institute (CQI). Los Q Graders están capacitados para evaluar la calidad del café usando protocolos estandarizados, incluyendo análisis sensorial, clasificación de café verde y evaluación de tostado. Se considera el estándar de oro para evaluación de calidad de café.",
          de: "Q Grader ist ein international anerkanntes Zertifizierungsprogramm des Coffee Quality Institute (CQI). Q Graders sind geschult, Kaffeequalität anhand standardisierter Protokolle zu bewerten, einschließlich sensorischer Analyse, Rohkaffee-Grading und Röst-Evaluation. Es gilt als Goldstandard für Kaffeequalitätsbewertung.",
          nl: "Q Grader is een internationaal erkend certificeringsprogramma van het Coffee Quality Institute (CQI). Q Graders zijn getraind om koffiekwaliteit te evalueren met gestandaardiseerde protocollen, inclusief sensorische analyse, groene koffie beoordeling en brand evaluatie. Het wordt beschouwd als de gouden standaard voor koffiekwaliteitsbeoordeling."
        }
      },
      {
        question: {
          en: "What is anaerobic fermentation in coffee processing?",
          es: "¿Qué es la fermentación anaeróbica en el procesamiento de café?",
          de: "Was ist anaerobe Fermentation bei der Kaffeeverarbeitung?",
          nl: "Wat is anaerobe fermentatie bij koffieverwerking?"
        },
        options: [
          { en: "Fermenting coffee in sealed, oxygen-free environments to develop unique flavors", es: "Fermentar café en ambientes sellados sin oxígeno para desarrollar sabores únicos", de: "Kaffee in versiegelten, sauerstofffreien Umgebungen fermentieren, um einzigartige Aromen zu entwickeln", nl: "Koffie fermenteren in verzegelde, zuurstofvrije omgevingen om unieke smaken te ontwikkelen" },
          { en: "Washing coffee with special chemicals", es: "Lavar café con químicos especiales", de: "Kaffee mit speziellen Chemikalien waschen", nl: "Koffie wassen met speciale chemicaliën" },
          { en: "Roasting without oxygen", es: "Tostar sin oxígeno", de: "Rösten ohne Sauerstoff", nl: "Branden zonder zuurstof" },
          { en: "Grinding beans underwater", es: "Moler granos bajo el agua", de: "Bohnen unter Wasser mahlen", nl: "Bonen onder water malen" }
        ],
        correct: 0,
        explanation: {
          en: "Anaerobic fermentation processes coffee in sealed tanks without oxygen, allowing specific bacteria and yeasts to break down sugars. This creates distinctive, often fruit-forward flavors not achievable through traditional methods. It's an experimental technique gaining popularity in specialty coffee.",
          es: "La fermentación anaeróbica procesa café en tanques sellados sin oxígeno, permitiendo que bacterias y levaduras específicas descompongan azúcares. Esto crea sabores distintivos, a menudo frutales, no alcanzables mediante métodos tradicionales. Es una técnica experimental ganando popularidad en café especial.",
          de: "Anaerobe Fermentation verarbeitet Kaffee in versiegelten Tanks ohne Sauerstoff, wodurch spezifische Bakterien und Hefen Zucker abbauen können. Dies erzeugt unverwechselbare, oft fruchtige Aromen, die durch traditionelle Methoden nicht erreichbar sind. Es ist eine experimentelle Technik, die in Spezialitätenkaffee an Beliebtheit gewinnt.",
          nl: "Anaerobe fermentatie verwerkt koffie in verzegelde tanks zonder zuurstof, waardoor specifieke bacteriën en gisten suikers kunnen afbreken. Dit creëert onderscheidende, vaak fruitige smaken niet bereikbaar via traditionele methoden. Het is een experimentele techniek die populariteit wint in specialty koffie."
        }
      },
      {
        question: {
          en: "What is the 'first crack' during coffee roasting?",
          es: "¿Qué es el 'primer crack' durante el tostado de café?",
          de: "Was ist der 'erste Crack' beim Kaffeerösten?",
          nl: "Wat is de 'eerste crack' tijdens het koffiebranden?"
        },
        options: [
          { en: "An audible popping sound when beans expand and release moisture and CO2", es: "Un sonido audible de estallido cuando los granos se expanden y liberan humedad y CO2", de: "Ein hörbares Knallen, wenn Bohnen expandieren und Feuchtigkeit und CO2 freisetzen", nl: "Een hoorbaar knappend geluid wanneer bonen uitzetten en vocht en CO2 vrijgeven" },
          { en: "The first bean that breaks during roasting", es: "El primer grano que se rompe durante el tostado", de: "Die erste Bohne, die beim Rösten bricht", nl: "De eerste boon die breekt tijdens het branden" },
          { en: "When the roaster's door opens", es: "Cuando se abre la puerta del tostador", de: "Wenn sich die Röstertür öffnet", nl: "Wanneer de branderdeur opent" },
          { en: "A mistake in roasting", es: "Un error en el tostado", de: "Ein Fehler beim Rösten", nl: "Een fout in het branden" }
        ],
        correct: 0,
        explanation: {
          en: "First crack occurs around 196°C (385°F) when internal pressure causes beans to audibly pop and expand. This marks the beginning of light roast. Beans develop from green to light brown. Most specialty roasters stop shortly after first crack to preserve origin characteristics.",
          es: "El primer crack ocurre alrededor de 196°C (385°F) cuando la presión interna causa que los granos revienten audiblemente y se expandan. Esto marca el comienzo del tueste claro. Los granos se desarrollan de verde a marrón claro. La mayoría de tostadores especiales paran poco después del primer crack para preservar características de origen.",
          de: "Der erste Crack tritt bei etwa 196°C (385°F) auf, wenn interner Druck dazu führt, dass Bohnen hörbar knallen und expandieren. Dies markiert den Beginn der hellen Röstung. Bohnen entwickeln sich von grün zu hellbraun. Die meisten Spezialitätenröster stoppen kurz nach dem ersten Crack, um Ursprungsmerkmale zu bewahren.",
          nl: "Eerste crack vindt plaats rond 196°C (385°F) wanneer interne druk ervoor zorgt dat bonen hoorbaar knappen en uitzetten. Dit markeert het begin van lichte branding. Bonen ontwikkelen van groen naar lichtbruin. De meeste specialty branders stoppen kort na eerste crack om oorsprongskenmerken te behouden."
        }
      },
      {
        question: {
          en: "What is a refractometer used for in coffee?",
          es: "¿Para qué se usa un refractómetro en café?",
          de: "Wofür wird ein Refraktometer bei Kaffee verwendet?",
          nl: "Waarvoor wordt een refractometer gebruikt bij koffie?"
        },
        options: [
          { en: "Measuring Total Dissolved Solids (TDS) to determine brew strength", es: "Medir Sólidos Disueltos Totales (TDS) para determinar fuerza de preparación", de: "Messung der gelösten Feststoffe (TDS) zur Bestimmung der Brühstärke", nl: "Meten van Total Dissolved Solids (TDS) om zetsterkte te bepalen" },
          { en: "Measuring temperature", es: "Medir temperatura", de: "Temperatur messen", nl: "Temperatuur meten" },
          { en: "Grinding beans", es: "Moler granos", de: "Bohnen mahlen", nl: "Bonen malen" },
          { en: "Roasting coffee", es: "Tostar café", de: "Kaffee rösten", nl: "Koffie branden" }
        ],
        correct: 0,
        explanation: {
          en: "A coffee refractometer measures TDS (Total Dissolved Solids) percentage in brewed coffee, indicating extraction strength. Combined with brew ratio, it calculates extraction yield. Ideal TDS ranges are 1.2-1.5% for filter coffee and 8-12% for espresso, helping baristas achieve consistent, properly extracted coffee.",
          es: "Un refractómetro de café mide el porcentaje de TDS (Sólidos Disueltos Totales) en café preparado, indicando fuerza de extracción. Combinado con la proporción de preparación, calcula el rendimiento de extracción. Los rangos ideales de TDS son 1.2-1.5% para café de filtro y 8-12% para espresso, ayudando a baristas a lograr café consistente y correctamente extraído.",
          de: "Ein Kaffee-Refraktometer misst den TDS (Total Dissolved Solids)-Prozentsatz in gebrühtem Kaffee und zeigt die Extraktionsstärke an. Kombiniert mit dem Brühverhältnis berechnet es die Extraktionsausbeute. Ideale TDS-Bereiche sind 1,2-1,5% für Filterkaffee und 8-12% für Espresso, was Baristas hilft, konsistenten, richtig extrahierten Kaffee zu erzielen.",
          nl: "Een koffie refractometer meet TDS (Total Dissolved Solids) percentage in gezette koffie, wat extractiesterkte aangeeft. Gecombineerd met zetverhouding berekent het extractieopbrengst. Ideale TDS bereiken zijn 1,2-1,5% voor filterkoffie en 8-12% voor espresso, wat barista's helpt consistente, goed geëxtraheerde koffie te bereiken."
        }
      },
      {
        question: {
          en: "What is a Moka pot and how does it work?",
          es: "¿Qué es una cafetera Moka y cómo funciona?",
          de: "Was ist eine Moka-Kanne und wie funktioniert sie?",
          nl: "Wat is een Moka pot en hoe werkt het?"
        },
        options: [
          { en: "A stovetop brewer that uses steam pressure to push water through coffee", es: "Una cafetera de estufa que usa presión de vapor para empujar agua a través del café", de: "Ein Herdkocher, der Dampfdruck verwendet, um Wasser durch Kaffee zu drücken", nl: "Een kookplaat brouwer die stoomdruk gebruikt om water door koffie te duwen" },
          { en: "An espresso machine", es: "Una máquina de espresso", de: "Eine Espressomaschine", nl: "Een espressomachine" },
          { en: "A type of French press", es: "Un tipo de prensa francesa", de: "Eine Art French Press", nl: "Een soort French press" },
          { en: "A coffee cup from Italy", es: "Una taza de café de Italia", de: "Eine Kaffeetasse aus Italien", nl: "Een koffiekop uit Italië" }
        ],
        correct: 0,
        explanation: {
          en: "The Moka pot (invented by Alfonso Bialetti in 1933) is a stovetop brewer with three chambers. Water in the bottom chamber boils, creating steam pressure that forces water up through coffee grounds in the middle chamber, producing strong coffee that collects in the top chamber. It's popular in Italian homes.",
          es: "La cafetera Moka (inventada por Alfonso Bialetti en 1933) es una cafetera de estufa con tres cámaras. El agua en la cámara inferior hierve, creando presión de vapor que fuerza el agua hacia arriba a través del café molido en la cámara central, produciendo café fuerte que se recoge en la cámara superior. Es popular en hogares italianos.",
          de: "Die Moka-Kanne (1933 von Alfonso Bialetti erfunden) ist ein Herdkocher mit drei Kammern. Wasser in der unteren Kammer kocht und erzeugt Dampfdruck, der Wasser nach oben durch Kaffeemehl in der mittleren Kammer drückt und starken Kaffee produziert, der sich in der oberen Kammer sammelt. Sie ist in italienischen Haushalten beliebt.",
          nl: "De Moka pot (uitgevonden door Alfonso Bialetti in 1933) is een kookplaat brouwer met drie kamers. Water in de onderste kamer kookt, wat stoomdruk creëert die water omhoog duwt door koffiepoeder in de middelste kamer, wat sterke koffie produceert die verzamelt in de bovenste kamer. Het is populair in Italiaanse huizen."
        }
      },
      {
        question: {
          en: "What is the SCA flavor wheel?",
          es: "¿Qué es la rueda de sabores de la SCA?",
          de: "Was ist das SCA-Geschmacksrad?",
          nl: "Wat is het SCA smaakwiel?"
        },
        options: [
          { en: "A standardized tool for identifying and describing coffee flavors and aromas", es: "Una herramienta estandarizada para identificar y describir sabores y aromas de café", de: "Ein standardisiertes Werkzeug zur Identifizierung und Beschreibung von Kaffeearomen und -geschmäckern", nl: "Een gestandaardiseerd hulpmiddel voor het identificeren en beschrijven van koffiesmaken en aroma's" },
          { en: "A coffee roasting machine", es: "Una máquina de tostado de café", de: "Eine Kaffeeröstmaschine", nl: "Een koffiebrandmachine" },
          { en: "A type of coffee bean", es: "Un tipo de grano de café", de: "Eine Art Kaffeebohne", nl: "Een soort koffiebon" },
          { en: "A brewing timer", es: "Un temporizador de preparación", de: "Ein Brüh-Timer", nl: "Een zettimer" }
        ],
        correct: 0,
        explanation: {
          en: "The SCA (Specialty Coffee Association) Coffee Taster's Flavor Wheel is a comprehensive lexicon for describing coffee. Updated in 2016 using sensory science and World Coffee Research data, it organizes flavors from general (inner circle) to specific (outer circle), helping professionals and enthusiasts communicate about coffee characteristics precisely.",
          es: "La Rueda de Sabores del Catador de Café de la SCA (Asociación de Café Especial) es un léxico integral para describir café. Actualizada en 2016 usando ciencia sensorial y datos de World Coffee Research, organiza sabores de general (círculo interno) a específico (círculo externo), ayudando a profesionales y entusiastas a comunicar sobre características de café precisamente.",
          de: "Das SCA (Specialty Coffee Association) Coffee Taster's Flavor Wheel ist ein umfassendes Lexikon zur Kaffeebeschreibung. 2016 aktualisiert unter Verwendung von Sensorikwissenschaft und World Coffee Research-Daten, organisiert es Geschmacksrichtungen von allgemein (innerer Kreis) bis spezifisch (äußerer Kreis) und hilft Profis und Enthusiasten, präzise über Kaffeeeigenschaften zu kommunizieren.",
          nl: "Het SCA (Specialty Coffee Association) Coffee Taster's Flavor Wheel is een uitgebreid lexicon voor het beschrijven van koffie. Bijgewerkt in 2016 met sensorische wetenschap en World Coffee Research data, organiseert het smaken van algemeen (binnenste cirkel) tot specifiek (buitenste cirkel), wat professionals en enthousiastelingen helpt nauwkeurig te communiceren over koffiekenmerken."
        }
      },
      {
        question: {
          en: "What is pressure profiling in espresso extraction?",
          es: "¿Qué es el perfilado de presión en la extracción de espresso?",
          de: "Was ist Druckprofilierung bei der Espresso-Extraktion?",
          nl: "Wat is drukprofilering bij espresso extractie?"
        },
        options: [
          { en: "Varying pump pressure during extraction to control flow and flavor development", es: "Variar presión de bomba durante extracción para controlar flujo y desarrollo de sabor", de: "Pumpendruck während der Extraktion variieren, um Durchfluss und Geschmacksentwicklung zu steuern", nl: "Pompdruk variëren tijdens extractie om stroming en smaakontwikkeling te controleren" },
          { en: "Measuring the pressure in coffee beans", es: "Medir la presión en los granos de café", de: "Den Druck in Kaffeebohnen messen", nl: "De druk in koffiebonen meten" },
          { en: "Always using maximum pressure", es: "Siempre usar presión máxima", de: "Immer maximalen Druck verwenden", nl: "Altijd maximale druk gebruiken" },
          { en: "Profiling customers' taste preferences", es: "Perfilar preferencias de sabor de clientes", de: "Geschmackspräferenzen von Kunden profilieren", nl: "Smaakvoorkeuren van klanten profileren" }
        ],
        correct: 0,
        explanation: {
          en: "Pressure profiling manipulates pump pressure throughout extraction rather than using constant 9 bars. A typical profile might pre-infuse at low pressure (2-4 bar), ramp to peak pressure mid-shot, then decline. This controls extraction rate, manages channeling, and can emphasize sweetness or clarity depending on the curve.",
          es: "El perfilado de presión manipula la presión de bomba durante la extracción en lugar de usar constantes 9 bares. Un perfil típico podría preinfusionar a baja presión (2-4 bar), aumentar a presión máxima a mitad del shot, luego disminuir. Esto controla tasa de extracción, maneja canalización y puede enfatizar dulzura o claridad dependiendo de la curva.",
          de: "Druckprofilierung manipuliert den Pumpendruck während der gesamten Extraktion anstatt konstante 9 Bar zu verwenden. Ein typisches Profil könnte bei niedrigem Druck (2-4 Bar) vorinfundieren, zur Spitzendruckmitte des Shots hochfahren, dann abnehmen. Dies kontrolliert die Extraktionsrate, verwaltet Channeling und kann je nach Kurve Süße oder Klarheit betonen.",
          nl: "Drukprofilering manipuleert pompdruk gedurende extractie in plaats van constante 9 bar te gebruiken. Een typisch profiel zou kunnen pre-infuseren bij lage druk (2-4 bar), opbouwen naar piekdruk halverwege shot, dan afnemen. Dit controleert extractiesnelheid, beheert channeling en kan zoetheid of helderheid benadrukken afhankelijk van de curve."
        }
      },
      {
        question: {
          en: "What is carbonic maceration in coffee processing?",
          es: "¿Qué es la maceración carbónica en el procesamiento de café?",
          de: "Was ist Kohlensäuremaischung bei der Kaffeeverarbeitung?",
          nl: "Wat is koolzuurmaceratie bij koffieverwerking?"
        },
        options: [
          { en: "Fermenting whole cherries in CO2-rich, sealed environments borrowed from winemaking", es: "Fermentar cerezas enteras en ambientes sellados ricos en CO2 prestados de vinificación", de: "Ganze Kirschen in CO2-reichen, versiegelten Umgebungen fermentieren, übernommen aus der Weinherstellung", nl: "Hele kersen fermenteren in CO2-rijke, verzegelde omgevingen overgenomen van wijnbereiding" },
          { en: "Adding carbonated water to coffee", es: "Añadir agua carbonatada al café", de: "Kohlensäurehaltiges Wasser zum Kaffee hinzufügen", nl: "Koolzuurhoudend water toevoegen aan koffie" },
          { en: "Roasting with carbon dioxide", es: "Tostar con dióxido de carbono", de: "Mit Kohlendioxid rösten", nl: "Branden met kooldioxide" },
          { en: "Storing green beans in CO2", es: "Almacenar granos verdes en CO2", de: "Grüne Bohnen in CO2 lagern", nl: "Groene bonen opslaan in CO2" }
        ],
        correct: 0,
        explanation: {
          en: "Carbonic maceration, adapted from winemaking, ferments intact coffee cherries in sealed tanks filled with CO2. This creates intracellular fermentation where enzymes inside the cherry break down sugars without microbial action initially. The process creates highly distinctive, often intensely fruity profiles with complex acidity and unique flavor compounds.",
          es: "La maceración carbónica, adaptada de la vinificación, fermenta cerezas de café intactas en tanques sellados llenos de CO2. Esto crea fermentación intracelular donde enzimas dentro de la cereza descomponen azúcares sin acción microbiana inicialmente. El proceso crea perfiles altamente distintivos, a menudo intensamente frutales con acidez compleja y compuestos de sabor únicos.",
          de: "Kohlensäuremaischung, adaptiert aus der Weinherstellung, fermentiert intakte Kaffeekirschen in versiegelten Tanks gefüllt mit CO2. Dies erzeugt intrazelluläre Fermentation, bei der Enzyme innerhalb der Kirsche Zucker abbauen, ohne zunächst mikrobielle Wirkung. Der Prozess erzeugt hochdistinktive, oft intensiv fruchtige Profile mit komplexer Säure und einzigartigen Geschmacksverbindungen.",
          nl: "Koolzuurmaceratie, aangepast van wijnbereiding, fermenteert intacte koffiekersen in verzegelde tanks gevuld met CO2. Dit creëert intracellulaire fermentatie waarbij enzymen binnen de kers suikers afbreken zonder aanvankelijk microbiële actie. Het proces creëert zeer onderscheidende, vaak intens fruitige profielen met complexe zuurgraad en unieke smaakverbindingen."
        }
      },
      {
        question: {
          en: "What does 'cupping score' mean in specialty coffee?",
          es: "¿Qué significa 'puntuación de catación' en café especial?",
          de: "Was bedeutet 'Cupping-Score' in Spezialitätenkaffee?",
          nl: "Wat betekent 'cupping score' in specialty koffie?"
        },
        options: [
          { en: "A 100-point quality evaluation system assessing aroma, flavor, aftertaste, acidity, body, and more", es: "Un sistema de evaluación de calidad de 100 puntos evaluando aroma, sabor, regusto, acidez, cuerpo y más", de: "Ein 100-Punkte-Qualitätsbewertungssystem zur Bewertung von Aroma, Geschmack, Nachgeschmack, Säure, Körper und mehr", nl: "Een 100-punts kwaliteitsevaluatiesysteem dat aroma, smaak, nasmaak, zuurgraad, body en meer beoordeelt" },
          { en: "The number of cups used in tasting", es: "El número de tazas usadas en la degustación", de: "Die Anzahl der beim Verkosten verwendeten Tassen", nl: "Het aantal kopjes gebruikt bij proeven" },
          { en: "The cost per cup", es: "El costo por taza", de: "Die Kosten pro Tasse", nl: "De kosten per kopje" },
          { en: "Customer satisfaction rating", es: "Calificación de satisfacción del cliente", de: "Kundenzufriedenheitsbewertung", nl: "Klanttevredenheidsbeoordeling" }
        ],
        correct: 0,
        explanation: {
          en: "The cupping score uses the SCA protocol evaluating 10 aspects: fragrance/aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, and overall impression. Each category scores up to 10 points. Coffee scoring 80+ points qualifies as 'specialty grade,' with 90+ considered exceptional. Q Graders perform these evaluations.",
          es: "La puntuación de catación usa el protocolo SCA evaluando 10 aspectos: fragancia/aroma, sabor, regusto, acidez, cuerpo, balance, uniformidad, taza limpia, dulzura e impresión general. Cada categoría puntúa hasta 10 puntos. Café con 80+ puntos califica como 'grado especial,' con 90+ considerado excepcional. Los Q Graders realizan estas evaluaciones.",
          de: "Der Cupping-Score verwendet das SCA-Protokoll zur Bewertung von 10 Aspekten: Duft/Aroma, Geschmack, Nachgeschmack, Säure, Körper, Balance, Gleichmäßigkeit, saubere Tasse, Süße und Gesamteindruck. Jede Kategorie bewertet bis zu 10 Punkte. Kaffee mit 80+ Punkten qualifiziert sich als 'Spezialitätengrad,' mit 90+ als außergewöhnlich betrachtet. Q Graders führen diese Bewertungen durch.",
          nl: "De cupping score gebruikt het SCA protocol dat 10 aspecten evalueert: geur/aroma, smaak, nasmaak, zuurgraad, body, balans, uniformiteit, schone kop, zoetheid en algehele indruk. Elke categorie scoort tot 10 punten. Koffie met 80+ punten kwalificeert als 'specialty grade,' met 90+ beschouwd als uitzonderlijk. Q Graders voeren deze evaluaties uit."
        }
      },
      {
        question: {
          en: "What is water chemistry's role in coffee extraction?",
          es: "¿Cuál es el papel de la química del agua en la extracción de café?",
          de: "Welche Rolle spielt die Wasserchemie bei der Kaffeeextraktion?",
          nl: "Wat is de rol van waterchemie bij koffie extractie?"
        },
        options: [
          { en: "Mineral content affects extraction efficiency and flavor; calcium and magnesium extract different compounds", es: "Contenido mineral afecta eficiencia de extracción y sabor; calcio y magnesio extraen diferentes compuestos", de: "Mineralgehalt beeinflusst Extraktionseffizienz und Geschmack; Kalzium und Magnesium extrahieren verschiedene Verbindungen", nl: "Mineraalgehalte beïnvloedt extractie-efficiëntie en smaak; calcium en magnesium extraheren verschillende verbindingen" },
          { en: "Water chemistry has no impact on coffee", es: "La química del agua no tiene impacto en el café", de: "Wasserchemie hat keinen Einfluss auf Kaffee", nl: "Waterchemie heeft geen invloed op koffie" },
          { en: "Only water temperature matters", es: "Solo la temperatura del agua importa", de: "Nur die Wassertemperatur zählt", nl: "Alleen watertemperatuur is belangrijk" },
          { en: "pH is the only important factor", es: "El pH es el único factor importante", de: "pH ist der einzige wichtige Faktor", nl: "pH is de enige belangrijke factor" }
        ],
        correct: 0,
        explanation: {
          en: "Water composition critically affects coffee extraction. Magnesium ions bind to fruity/acidic compounds while calcium extracts creamy/full-bodied flavors. Total hardness (GH) and alkalinity (KH) impact extraction and buffering. Specialty coffee typically uses water with 50-175 ppm TDS, with specific mineral ratios. Some cafes use custom water recipes or RO systems with remineralization.",
          es: "La composición del agua afecta críticamente la extracción de café. Los iones de magnesio se unen a compuestos frutales/ácidos mientras el calcio extrae sabores cremosos/con cuerpo. La dureza total (GH) y alcalinidad (KH) impactan extracción y amortiguación. El café especial típicamente usa agua con 50-175 ppm TDS, con ratios minerales específicos. Algunos cafés usan recetas de agua personalizadas o sistemas RO con remineralización.",
          de: "Wasserzusammensetzung beeinflusst die Kaffeeextraktion kritisch. Magnesiumionen binden an fruchtige/saure Verbindungen, während Kalzium cremige/vollmundige Aromen extrahiert. Gesamthärte (GH) und Alkalität (KH) beeinflussen Extraktion und Pufferung. Spezialitätenkaffee verwendet typischerweise Wasser mit 50-175 ppm TDS, mit spezifischen Mineralverhältnissen. Einige Cafés verwenden maßgeschneiderte Wasserrezepte oder RO-Systeme mit Remineralisierung.",
          nl: "Watersamenstelling beïnvloedt koffie-extractie kritisch. Magnesiumionen binden aan fruitige/zure verbindingen terwijl calcium romige/volle smaken extraheert. Totale hardheid (GH) en alkaliteit (KH) beïnvloeden extractie en buffering. Specialty koffie gebruikt typisch water met 50-175 ppm TDS, met specifieke mineraalverhoudingen. Sommige cafés gebruiken aangepaste waterrecepten of RO systemen met remineralisatie."
        }
      },
      {
        question: {
          en: "What is the Geisha/Gesha coffee varietal known for?",
          es: "¿Por qué es conocida la variedad de café Geisha/Gesha?",
          de: "Wofür ist die Geisha/Gesha-Kaffeevarietät bekannt?",
          nl: "Waarvoor is de Geisha/Gesha koffievariëteit bekend?"
        },
        options: [
          { en: "Exceptional tea-like, floral, jasmine characteristics with high acidity and complexity", es: "Excepcionales características florales similares al té, jazmín con alta acidez y complejidad", de: "Außergewöhnliche teeähnliche, blumige Jasmin-Eigenschaften mit hoher Säure und Komplexität", nl: "Uitzonderlijke thee-achtige, bloemige jasmijnkenmerken met hoge zuurgraad en complexiteit" },
          { en: "Very bitter and strong flavor", es: "Sabor muy amargo y fuerte", de: "Sehr bitterer und starker Geschmack", nl: "Zeer bittere en sterke smaak" },
          { en: "Low price and common availability", es: "Bajo precio y disponibilidad común", de: "Niedriger Preis und allgemeine Verfügbarkeit", nl: "Lage prijs en algemene beschikbaarheid" },
          { en: "High caffeine content", es: "Alto contenido de cafeína", de: "Hoher Koffeingehalt", nl: "Hoog cafeïnegehalte" }
        ],
        correct: 0,
        explanation: {
          en: "Geisha (also spelled Gesha, from its Ethiopian origin) is one of the most prized coffee varieties. Particularly famous from Panama's Hacienda La Esmeralda, it exhibits distinctive jasmine, bergamot, tropical fruit, and tea-like qualities. Its unique flavor profile and limited production make it one of the world's most expensive coffees, often exceeding $100/lb at auction.",
          es: "Geisha (también escrito Gesha, de su origen etíope) es una de las variedades de café más preciadas. Particularmente famosa de Hacienda La Esmeralda de Panamá, exhibe cualidades distintivas de jazmín, bergamota, fruta tropical y similares al té. Su perfil de sabor único y producción limitada la hacen uno de los cafés más caros del mundo, a menudo superando $100/lb en subastas.",
          de: "Geisha (auch Gesha geschrieben, von seinem äthiopischen Ursprung) ist eine der wertvollsten Kaffeesorten. Besonders berühmt von Panamas Hacienda La Esmeralda, zeigt sie unverwechselbare Jasmin-, Bergamotte-, Tropenfrucht- und teeähnliche Qualitäten. Ihr einzigartiges Geschmacksprofil und begrenzte Produktion machen sie zu einem der teuersten Kaffees der Welt, oft über $100/lb bei Auktionen.",
          nl: "Geisha (ook gespeld als Gesha, van zijn Ethiopische oorsprong) is een van de meest gewaardeerde koffievariëteiten. Bijzonder beroemd van Panama's Hacienda La Esmeralda, vertoont het onderscheidende jasmijn, bergamot, tropisch fruit en thee-achtige kwaliteiten. Zijn unieke smaakprofiel en beperkte productie maken het een van 's werelds duurste koffies, vaak meer dan $100/lb bij veilingen."
        }
      },
      {
        question: {
          en: "What are coffee defects in green bean grading?",
          es: "¿Qué son los defectos del café en la clasificación de grano verde?",
          de: "Was sind Kaffeedefekte beim Rohbohnen-Grading?",
          nl: "Wat zijn koffiedefecten bij groene bonen beoordeling?"
        },
        options: [
          { en: "Flaws like black beans, sour beans, insect damage, and foreign matter that negatively affect quality", es: "Fallas como granos negros, granos agrios, daño de insectos y materia extraña que afectan negativamente la calidad", de: "Mängel wie schwarze Bohnen, saure Bohnen, Insektenschäden und Fremdkörper, die die Qualität negativ beeinflussen", nl: "Gebreken zoals zwarte bonen, zure bonen, insectenschade en vreemd materiaal dat de kwaliteit negatief beïnvloedt" },
          { en: "Different roast colors", es: "Diferentes colores de tueste", de: "Verschiedene Röstfarben", nl: "Verschillende brandkleuren" },
          { en: "Various bean sizes", es: "Varios tamaños de grano", de: "Verschiedene Bohnengrößen", nl: "Verschillende bonengroottes" },
          { en: "Different processing methods", es: "Diferentes métodos de procesamiento", de: "Verschiedene Verarbeitungsmethoden", nl: "Verschillende verwerkingsmethoden" }
        ],
        correct: 0,
        explanation: {
          en: "The SCA classifies defects as Primary (full defects: full black, full sour, dried cherry, large stones, sticks) and Secondary (partial defects: partial black, partial sour, parchment, floaters, broken beans, insect damage, hull/husk). Specialty grade coffee allows maximum 5 full defects per 350g sample. Even single severe defects can ruin an entire batch's flavor.",
          es: "La SCA clasifica defectos como Primarios (defectos completos: negro completo, agrio completo, cereza seca, piedras grandes, palos) y Secundarios (defectos parciales: negro parcial, agrio parcial, pergamino, flotadores, granos rotos, daño de insectos, cáscara). El café de grado especial permite máximo 5 defectos completos por muestra de 350g. Incluso defectos severos únicos pueden arruinar el sabor de todo un lote.",
          de: "Die SCA klassifiziert Defekte als Primär (vollständige Defekte: vollständig schwarz, vollständig sauer, getrocknete Kirsche, große Steine, Stöcke) und Sekundär (partielle Defekte: teilweise schwarz, teilweise sauer, Pergament, Schwimmer, gebrochene Bohnen, Insektenschäden, Schale/Hülse). Spezialitätenkaffee erlaubt maximal 5 vollständige Defekte pro 350g Probe. Selbst einzelne schwere Defekte können den Geschmack einer ganzen Charge ruinieren.",
          nl: "De SCA classificeert defecten als Primair (volledige defecten: volledig zwart, volledig zuur, gedroogde kers, grote stenen, stokken) en Secundair (gedeeltelijke defecten: gedeeltelijk zwart, gedeeltelijk zuur, perkament, drijvers, gebroken bonen, insectenschade, bolster/schil). Specialty grade koffie staat maximaal 5 volledige defecten per 350g monster toe. Zelfs enkele ernstige defecten kunnen de smaak van een hele batch ruïneren."
        }
      },
      {
        question: {
          en: "What is a flat white and how does it differ from a latte?",
          es: "¿Qué es un flat white y en qué se diferencia de un latte?",
          de: "Was ist ein Flat White und wie unterscheidet er sich von einem Latte?",
          nl: "Wat is een flat white en hoe verschilt het van een latte?"
        },
        options: [
          { en: "Smaller drink with higher espresso-to-milk ratio and microfoam texture throughout", es: "Bebida más pequeña con mayor proporción espresso-leche y textura de microespuma en todo", de: "Kleineres Getränk mit höherem Espresso-Milch-Verhältnis und Mikroschaumtextur durchgehend", nl: "Kleinere drank met hogere espresso-melk verhouding en microschuim textuur door heel" },
          { en: "Exactly the same as a latte", es: "Exactamente igual que un latte", de: "Genau das Gleiche wie ein Latte", nl: "Precies hetzelfde als een latte" },
          { en: "Coffee without any milk", es: "Café sin leche", de: "Kaffee ohne Milch", nl: "Koffie zonder melk" },
          { en: "Iced coffee drink", es: "Bebida de café helado", de: "Eiskaffeegetränk", nl: "IJskoffie drankje" }
        ],
        correct: 0,
        explanation: {
          en: "Originating from Australia/New Zealand, a flat white uses a double ristretto with less milk than a latte (typically 5-6oz total vs 8-12oz), creating a stronger coffee taste. The milk is steamed to create velvety microfoam (not stiff foam), integrated throughout rather than layered. It's all about the smooth, silky texture and pronounced espresso flavor.",
          es: "Originario de Australia/Nueva Zelanda, un flat white usa un ristretto doble con menos leche que un latte (típicamente 5-6oz total vs 8-12oz), creando un sabor de café más fuerte. La leche se vaporiza para crear microespuma aterciopelada (no espuma rígida), integrada en todo en lugar de en capas. Todo se trata de la textura suave y sedosa y el pronunciado sabor de espresso.",
          de: "Ein Flat White aus Australien/Neuseeland verwendet einen doppelten Ristretto mit weniger Milch als ein Latte (typischerweise 5-6oz gesamt vs 8-12oz), was einen stärkeren Kaffeegeschmack erzeugt. Die Milch wird gedämpft, um samtigen Mikroschaum (nicht steifer Schaum) zu erzeugen, durchgehend integriert statt geschichtet. Es geht um die glatte, seidige Textur und ausgeprägten Espressogeschmack.",
          nl: "Afkomstig uit Australië/Nieuw-Zeeland, gebruikt een flat white een dubbele ristretto met minder melk dan een latte (typisch 5-6oz totaal vs 8-12oz), wat een sterkere koffiesmaak creëert. De melk wordt gestoomd om fluweelachtig microschuim (niet stijf schuim) te creëren, geïntegreerd door heel in plaats van gelaagd. Het gaat allemaal om de gladde, zijdeachtige textuur en uitgesproken espressosmaak."
        }
      },
      {
        question: {
          en: "What is the 'development time' phase in coffee roasting?",
          es: "¿Qué es la fase de 'tiempo de desarrollo' en el tostado de café?",
          de: "Was ist die 'Entwicklungszeit'-Phase beim Kaffeerösten?",
          nl: "Wat is de 'ontwikkelingstijd' fase bij koffiebranden?"
        },
        options: [
          { en: "The time between first crack and end of roast where flavor compounds fully develop", es: "El tiempo entre el primer crack y el final del tostado donde los compuestos de sabor se desarrollan completamente", de: "Die Zeit zwischen dem ersten Crack und dem Ende der Röstung, in der sich Geschmacksverbindungen vollständig entwickeln", nl: "De tijd tussen eerste crack en einde van branding waar smaakverbindingen volledig ontwikkelen" },
          { en: "Total roasting time", es: "Tiempo total de tostado", de: "Gesamte Röstzeit", nl: "Totale brandtijd" },
          { en: "Cooling time after roasting", es: "Tiempo de enfriamiento después del tostado", de: "Abkühlzeit nach dem Rösten", nl: "Afkoeltijd na branden" },
          { en: "Time to develop the roaster", es: "Tiempo para desarrollar el tostador", de: "Zeit zur Entwicklung des Rösters", nl: "Tijd om de brander te ontwikkelen" }
        ],
        correct: 0,
        explanation: {
          en: "Development time is the critical phase from first crack to drop (end of roast). Typically 15-25% of total roast time, this phase determines final flavor profile. Shorter development emphasizes brightness and origin character; longer development brings out body, sweetness, and caramelization. Roasters carefully control this phase to achieve desired flavor balance.",
          es: "El tiempo de desarrollo es la fase crítica desde el primer crack hasta la descarga (fin del tostado). Típicamente 15-25% del tiempo total de tostado, esta fase determina el perfil de sabor final. Desarrollo más corto enfatiza brillo y carácter de origen; desarrollo más largo resalta cuerpo, dulzura y caramelización. Los tostadores controlan cuidadosamente esta fase para lograr el balance de sabor deseado.",
          de: "Entwicklungszeit ist die kritische Phase vom ersten Crack bis zum Drop (Ende der Röstung). Typischerweise 15-25% der gesamten Röstzeit bestimmt diese Phase das endgültige Geschmacksprofil. Kürzere Entwicklung betont Helligkeit und Ursprungscharakter; längere Entwicklung bringt Körper, Süße und Karamellisierung hervor. Röster kontrollieren diese Phase sorgfältig, um gewünschte Geschmacksbalance zu erreichen.",
          nl: "Ontwikkelingstijd is de kritieke fase van eerste crack tot drop (einde van branding). Typisch 15-25% van totale brandtijd, deze fase bepaalt uiteindelijk smaakprofiel. Kortere ontwikkeling benadrukt helderheid en oorsprongskarakter; langere ontwikkeling brengt body, zoetheid en karamellisatie naar voren. Branders controleren deze fase zorgvuldig om gewenste smaakbalans te bereiken."
        }
      },
      {
        question: {
          en: "What is the SL28 coffee varietal and where is it prominent?",
          es: "¿Qué es la variedad de café SL28 y dónde es prominente?",
          de: "Was ist die SL28-Kaffeevarietät und wo ist sie prominent?",
          nl: "Wat is de SL28 koffievariëteit en waar is het prominent?"
        },
        options: [
          { en: "A Kenyan cultivar known for complex fruit, wine-like acidity, and black currant notes", es: "Un cultivar keniano conocido por fruta compleja, acidez similar al vino y notas de grosella negra", de: "Eine kenianische Sorte bekannt für komplexe Früchte, weinähnliche Säure und schwarze Johannisbeernoten", nl: "Een Keniaanse cultivar bekend om complexe fruitsmaak, wijn-achtige zuurgraad en zwarte bessen noten" },
          { en: "A Brazilian variety with chocolate notes", es: "Una variedad brasileña con notas de chocolate", de: "Eine brasilianische Sorte mit Schokoladennoten", nl: "Een Braziliaanse variëteit met chocolade noten" },
          { en: "A Colombian hybrid for high yield", es: "Un híbrido colombiano para alto rendimiento", de: "Ein kolumbianischer Hybrid für hohen Ertrag", nl: "Een Colombiaanse hybride voor hoge opbrengst" },
          { en: "An Ethiopian wild variety", es: "Una variedad silvestre etíope", de: "Eine äthiopische Wildsorte", nl: "Een Ethiopische wilde variëteit" }
        ],
        correct: 0,
        explanation: {
          en: "SL28 was developed by Scott Laboratories in Kenya in the 1930s, selected from Tanganyika Drought Resistant variety. It's famous for producing Kenya's distinctive bright, complex cup with pronounced fruit-forward flavors, wine-like acidity, and characteristic black currant notes. Though lower yielding and drought-sensitive, it's prized for its exceptional quality and is grown throughout East Africa.",
          es: "SL28 fue desarrollada por Scott Laboratories en Kenia en los años 1930, seleccionada de la variedad Tanganyika Resistente a la Sequía. Es famosa por producir la distintiva taza brillante y compleja de Kenia con sabores frutales pronunciados, acidez similar al vino y notas características de grosella negra. Aunque de menor rendimiento y sensible a la sequía, es valorada por su calidad excepcional y se cultiva en toda África Oriental.",
          de: "SL28 wurde in den 1930er Jahren von Scott Laboratories in Kenia entwickelt, ausgewählt aus der Tanganyika Drought Resistant Sorte. Sie ist berühmt für Kenias unverwechselbar helle, komplexe Tasse mit ausgeprägten fruchtbetonten Aromen, weinähnlicher Säure und charakteristischen schwarzen Johannisbeernoten. Obwohl ertragsärmer und dürreempfindlich, wird sie für ihre außergewöhnliche Qualität geschätzt und in ganz Ostafrika angebaut.",
          nl: "SL28 werd ontwikkeld door Scott Laboratories in Kenia in de jaren 1930, geselecteerd uit Tanganyika Drought Resistant variëteit. Het is beroemd om het produceren van Kenia's onderscheidende heldere, complexe kop met uitgesproken fruit-voorwaartse smaken, wijn-achtige zuurgraad en karakteristieke zwarte bessen noten. Hoewel lager in opbrengst en droogte-gevoelig, wordt het gewaardeerd om zijn uitzonderlijke kwaliteit en wordt geteeld door heel Oost-Afrika."
        }
      },
      {
        question: {
          en: "What is flow-rate control or flow profiling in espresso?",
          es: "¿Qué es el control de flujo o perfilado de flujo en espresso?",
          de: "Was ist Durchflussregelung oder Durchflussprofil beim Espresso?",
          nl: "Wat is stroomsnelheid controle of stroming profilering bij espresso?"
        },
        options: [
          { en: "Manually controlling water flow rate through the puck independent of pressure", es: "Controlar manualmente la tasa de flujo de agua a través del disco independiente de la presión", de: "Manuelle Steuerung der Wasserdurchflussrate durch den Puck unabhängig vom Druck", nl: "Handmatig waterstroomsnelheid door de puck controleren onafhankelijk van druk" },
          { en: "Adjusting grind size only", es: "Ajustar solo el tamaño de molienda", de: "Nur Mahlgrad anpassen", nl: "Alleen maalgrootte aanpassen" },
          { en: "Temperature control during extraction", es: "Control de temperatura durante la extracción", de: "Temperaturkontrolle während der Extraktion", nl: "Temperatuurcontrole tijdens extractie" },
          { en: "Controlling milk flow when steaming", es: "Controlar flujo de leche al vaporizar", de: "Milchfluss beim Dämpfen kontrollieren", nl: "Melkstroom controleren bij stomen" }
        ],
        correct: 0,
        explanation: {
          en: "Flow profiling uses paddle-controlled or volumetric systems to directly manipulate water flow rate rather than just pressure. Baristas can slow flow for gentle pre-infusion, maintain steady extraction, or ramp flow for specific effects. This offers more control than pressure profiling alone, particularly useful for light roasts or challenging coffees, allowing extraction of desirable compounds while avoiding bitterness.",
          es: "El perfilado de flujo usa sistemas controlados por paleta o volumétricos para manipular directamente la tasa de flujo de agua en lugar de solo la presión. Los baristas pueden ralentizar el flujo para preinfusión suave, mantener extracción constante o aumentar flujo para efectos específicos. Esto ofrece más control que solo perfilado de presión, particularmente útil para tuestes claros o cafés desafiantes, permitiendo extracción de compuestos deseables evitando amargor.",
          de: "Durchflussprofil verwendet paddel-gesteuerte oder volumetrische Systeme zur direkten Manipulation der Wasserdurchflussrate anstatt nur des Drucks. Baristas können den Durchfluss für sanfte Vorinfusion verlangsamen, stetige Extraktion aufrechterhalten oder Durchfluss für bestimmte Effekte erhöhen. Dies bietet mehr Kontrolle als Druckprofilierung allein, besonders nützlich für helle Röstungen oder anspruchsvolle Kaffees, ermöglicht Extraktion wünschenswerter Verbindungen bei Vermeidung von Bitterkeit.",
          nl: "Stroming profilering gebruikt peddel-gecontroleerde of volumetrische systemen om waterstroomsnelheid direct te manipuleren in plaats van alleen druk. Barista's kunnen stroming vertragen voor zachte pre-infusie, gestage extractie handhaven of stroming opvoeren voor specifieke effecten. Dit biedt meer controle dan alleen drukprofilering, bijzonder nuttig voor lichte brandingen of uitdagende koffies, waardoor extractie van gewenste verbindingen mogelijk is terwijl bitterheid wordt vermeden."
        }
      },
      {
        question: {
          en: "What is coffee channeling and why is it problematic?",
          es: "¿Qué es la canalización del café y por qué es problemática?",
          de: "Was ist Kaffee-Channeling und warum ist es problematisch?",
          nl: "Wat is koffie channeling en waarom is het problematisch?"
        },
        options: [
          { en: "Water finding paths of least resistance through the puck, causing uneven extraction", es: "El agua encuentra caminos de menor resistencia a través del disco, causando extracción desigual", de: "Wasser findet Wege des geringsten Widerstands durch den Puck und verursacht ungleichmäßige Extraktion", nl: "Water vindt paden van minste weerstand door de puck, wat ongelijkmatige extractie veroorzaakt" },
          { en: "Coffee flowing through special channels", es: "Café fluyendo a través de canales especiales", de: "Kaffee fließt durch spezielle Kanäle", nl: "Koffie stroomt door speciale kanalen" },
          { en: "Broadcasting coffee preparation", es: "Transmitir preparación de café", de: "Kaffeezubereitung ausstrahlen", nl: "Koffiebereiding uitzenden" },
          { en: "Organizing coffee by type", es: "Organizar café por tipo", de: "Kaffee nach Typ organisieren", nl: "Koffie organiseren op type" }
        ],
        correct: 0,
        explanation: {
          en: "Channeling occurs when water creates preferential paths through coffee grounds rather than flowing evenly. Caused by uneven distribution, poor tamping, cracks in the puck, or inconsistent grind, it results in over-extraction in channels (bitter) and under-extraction elsewhere (sour, weak). Signs include fast shot times, thin crema, and sour-bitter taste. Proper distribution tools and technique prevent channeling.",
          es: "La canalización ocurre cuando el agua crea caminos preferenciales a través del café molido en lugar de fluir uniformemente. Causada por distribución desigual, apisonado pobre, grietas en el disco o molienda inconsistente, resulta en sobre-extracción en canales (amargo) y sub-extracción en otro lugar (agrio, débil). Las señales incluyen tiempos de shot rápidos, crema fina y sabor agrio-amargo. Herramientas de distribución y técnica adecuadas previenen la canalización.",
          de: "Channeling tritt auf, wenn Wasser bevorzugte Wege durch Kaffeemehl bildet, anstatt gleichmäßig zu fließen. Verursacht durch ungleichmäßige Verteilung, schlechtes Tampen, Risse im Puck oder inkonsistenten Mahlgrad, führt es zu Überextraktion in Kanälen (bitter) und Unterextraktion anderswo (sauer, schwach). Anzeichen sind schnelle Shot-Zeiten, dünne Crema und sauer-bitterer Geschmack. Richtige Verteilungswerkzeuge und Technik verhindern Channeling.",
          nl: "Channeling vindt plaats wanneer water voorkeursroutes creëert door koffiepoeder in plaats van gelijkmatig te stromen. Veroorzaakt door ongelijke verdeling, slecht aandrukken, scheuren in de puck of inconsistente maling, resulteert het in over-extractie in kanalen (bitter) en onder-extractie elders (zuur, zwak). Tekenen zijn snelle shot tijden, dunne crema en zuur-bittere smaak. Goede verdelingshulpmiddelen en techniek voorkomen channeling."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
