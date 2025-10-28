// Dinosaur Fossils Quiz - Level 2: Knowledge about Dinosaur Fossils
(function() {
  const level2 = {
    name: {
      en: "Dinosaur Fossils Level 2",
      es: "Fosiles de Dinosaurios Nivel 2",
      de: "Dinosaurier Fossilien Stufe 2",
      nl: "Dino Fossielen Level 2"
    },
    questions: [
      {
        question: {
          en: "What is the process called when minerals replace the original bone material in a fossil?",
          es: "¿Cómo se llama el proceso cuando los minerales reemplazan el material óseo original en un fósil?",
          de: "Wie nennt man den Prozess, wenn Mineralien das ursprüngliche Knochenmaterial in einem Fossil ersetzen?",
          nl: "Hoe heet het proces waarbij mineralen het oorspronkelijke botmateriaal in een fossiel vervangen?"
        },
        options: [
          { en: "Permineralization", es: "Permineralización", de: "Permineralisation", nl: "Permineralisatie" },
          { en: "Crystallization", es: "Cristalización", de: "Kristallisation", nl: "Kristallisatie" },
          { en: "Evaporation", es: "Evaporación", de: "Verdampfung", nl: "Verdamping" },
          { en: "Oxidation", es: "Oxidación", de: "Oxidation", nl: "Oxidatie" }
        ],
        correct: 0,
        explanation: {
          en: "Permineralization is the process where minerals fill the pores and spaces in bones, gradually replacing the organic material while preserving the structure.",
          es: "La permineralización es el proceso donde los minerales llenan los poros y espacios en los huesos, reemplazando gradualmente el material orgánico mientras preservan la estructura.",
          de: "Permineralisation ist der Prozess, bei dem Mineralien die Poren und Räume in Knochen füllen und dabei das organische Material allmählich ersetzen, während die Struktur erhalten bleibt.",
          nl: "Permineralisatie is het proces waarbij mineralen de poriën en ruimtes in botten vullen, waarbij het organische materiaal geleidelijk wordt vervangen terwijl de structuur behouden blijft."
        }
      },
      {
        question: {
          en: "Which geological time period is known as the 'Age of Dinosaurs'?",
          es: "¿Qué período geológico se conoce como la 'Era de los Dinosaurios'?",
          de: "Welche geologische Zeitperiode wird als 'Zeitalter der Dinosaurier' bezeichnet?",
          nl: "Welke geologische tijdperiode staat bekend als het 'Tijdperk van de Dinosaurussen'?"
        },
        options: [
          { en: "Mesozoic Era", es: "Era Mesozoica", de: "Mesozoikum", nl: "Mesozoïcum" },
          { en: "Paleozoic Era", es: "Era Paleozoica", de: "Paläozoikum", nl: "Paleozoïcum" },
          { en: "Cenozoic Era", es: "Era Cenozoica", de: "Känozoikum", nl: "Cenozoïcum" },
          { en: "Precambrian Era", es: "Era Precámbrica", de: "Präkambrium", nl: "Precambrium" }
        ],
        correct: 0,
        explanation: {
          en: "The Mesozoic Era (252-66 million years ago) is called the 'Age of Dinosaurs' because dinosaurs dominated terrestrial ecosystems during this time.",
          es: "La Era Mesozoica (252-66 millones de años atrás) se llama la 'Era de los Dinosaurios' porque los dinosaurios dominaron los ecosistemas terrestres durante este tiempo.",
          de: "Das Mesozoikum (252-66 Millionen Jahre her) wird als 'Zeitalter der Dinosaurier' bezeichnet, weil Dinosaurier während dieser Zeit die terrestrischen Ökosysteme dominierten.",
          nl: "Het Mesozoïcum (252-66 miljoen jaar geleden) wordt het 'Tijdperk van de Dinosaurussen' genoemd omdat dinosaurussen gedurende deze tijd de terrestrische ecosystemen domineerden."
        }
      },
      {
        question: {
          en: "What type of fossil preserves the actual shape or outline of an organism?",
          es: "¿Qué tipo de fósil preserva la forma real o el contorno de un organismo?",
          de: "Welche Art von Fossil bewahrt die tatsächliche Form oder den Umriss eines Organismus?",
          nl: "Welk type fossiel bewaart de werkelijke vorm of omtrek van een organisme?"
        },
        options: [
          { en: "Mold fossil", es: "Fósil molde", de: "Abdruck-Fossil", nl: "Afdrukfossiel" },
          { en: "Trace fossil", es: "Fósil traza", de: "Spurenfossil", nl: "Sporenfossiel" },
          { en: "Body fossil", es: "Fósil corporal", de: "Körperfossil", nl: "Lichaamsfossiel" },
          { en: "Chemical fossil", es: "Fósil químico", de: "Chemisches Fossil", nl: "Chemisch fossiel" }
        ],
        correct: 0,
        explanation: {
          en: "A mold fossil forms when an organism dissolves away, leaving behind a hollow impression that preserves its exact shape and surface details.",
          es: "Un fósil molde se forma cuando un organismo se disuelve, dejando atrás una impresión hueca que preserva su forma exacta y detalles de superficie.",
          de: "Ein Abdruck-Fossil entsteht, wenn sich ein Organismus auflöst und eine hohle Impression hinterlässt, die seine exakte Form und Oberflächendetails bewahrt.",
          nl: "Een afdrukfossiel ontstaat wanneer een organisme oplost en een holle indruk achterlaat die zijn exacte vorm en oppervlaktedetails bewaart."
        }
      },
      {
        question: {
          en: "Which part of a dinosaur fossil can tell us about its diet?",
          es: "¿Qué parte de un fósil de dinosaurio puede decirnos sobre su dieta?",
          de: "Welcher Teil eines Dinosaurier-Fossils kann uns etwas über seine Ernährung verraten?",
          nl: "Welk deel van een dinosaurusfossiel kan ons vertellen over zijn dieet?"
        },
        options: [
          { en: "Teeth", es: "Dientes", de: "Zähne", nl: "Tanden" },
          { en: "Tail bones", es: "Huesos de la cola", de: "Schwanzknochen", nl: "Staartbotten" },
          { en: "Leg bones", es: "Huesos de las patas", de: "Beinknochen", nl: "Pootbotten" },
          { en: "Ribs", es: "Costillas", de: "Rippen", nl: "Ribben" }
        ],
        correct: 0,
        explanation: {
          en: "Dinosaur teeth reveal their diet - sharp, pointed teeth indicate carnivores, while flat, grinding teeth suggest herbivores.",
          es: "Los dientes de dinosaurio revelan su dieta - dientes afilados y puntiagudos indican carnívoros, mientras que dientes planos y trituradores sugieren herbívoros.",
          de: "Dinosaurier-Zähne verraten ihre Ernährung - scharfe, spitze Zähne deuten auf Fleischfresser hin, während flache, mahlende Zähne auf Pflanzenfresser hinweisen.",
          nl: "Dinosaurustanden onthullen hun dieet - scherpe, puntige tanden duiden op carnivoren, terwijl platte, malende tanden herbivoren suggereren."
        }
      },
      {
        question: {
          en: "What is a coprolite?",
          es: "¿Qué es un coprolito?",
          de: "Was ist ein Koprolith?",
          nl: "Wat is een coproliet?"
        },
        options: [
          { en: "Fossilized dinosaur droppings", es: "Excrementos de dinosaurio fosilizados", de: "Fossiler Dinosaurier-Kot", nl: "Gefossiliseerde dinosaurusuitwerpselen" },
          { en: "Dinosaur eggs", es: "Huevos de dinosaurio", de: "Dinosaurier-Eier", nl: "Dinosauruseieren" },
          { en: "Dinosaur scales", es: "Escamas de dinosaurio", de: "Dinosaurier-Schuppen", nl: "Dinosaurusschubben" },
          { en: "Dinosaur feathers", es: "Plumas de dinosaurio", de: "Dinosaurier-Federn", nl: "Dinosaurusveren" }
        ],
        correct: 0,
        explanation: {
          en: "Coprolites are fossilized feces that provide valuable information about what dinosaurs ate and their digestive systems.",
          es: "Los coprolitos son heces fosilizadas que proporcionan información valiosa sobre lo que comían los dinosaurios y sus sistemas digestivos.",
          de: "Koprolithe sind fossile Fäkalien, die wertvolle Informationen darüber liefern, was Dinosaurier fraßen und über ihre Verdauungssysteme.",
          nl: "Coprolithen zijn gefossiliseerde ontlasting die waardevolle informatie verschaffen over wat dinosaurussen aten en hun spijsverteringssystemen."
        }
      },
      {
        question: {
          en: "What does the term 'articulated' mean when describing dinosaur fossils?",
          es: "¿Qué significa el término 'articulado' al describir fósiles de dinosaurios?",
          de: "Was bedeutet der Begriff 'artikuliert' bei der Beschreibung von Dinosaurier-Fossilien?",
          nl: "Wat betekent de term 'gearticuleerd' bij het beschrijven van dinosaurusfossielen?"
        },
        options: [
          { en: "Bones found connected in their natural positions", es: "Huesos encontrados conectados en sus posiciones naturales", de: "Knochen, die in ihrer natürlichen Position verbunden gefunden wurden", nl: "Botten die verbonden gevonden zijn in hun natuurlijke posities" },
          { en: "Broken into many pieces", es: "Rotos en muchas piezas", de: "In viele Teile zerbrochen", nl: "Gebroken in vele stukken" },
          { en: "Very old fossils", es: "Fósiles muy antiguos", de: "Sehr alte Fossilien", nl: "Zeer oude fossielen" },
          { en: "Fossils found in museums", es: "Fósiles encontrados en museos", de: "In Museen gefundene Fossilien", nl: "Fossielen gevonden in musea" }
        ],
        correct: 0,
        explanation: {
          en: "An articulated skeleton has bones that remain connected as they were in life, providing better understanding of the dinosaur's anatomy and posture.",
          es: "Un esqueleto articulado tiene huesos que permanecen conectados como estaban en vida, proporcionando mejor comprensión de la anatomía y postura del dinosaurio.",
          de: "Ein artikuliertes Skelett hat Knochen, die so verbunden bleiben, wie sie im Leben waren, und ermöglicht ein besseres Verständnis der Anatomie und Haltung des Dinosauriers.",
          nl: "Een gearticuleerd skelet heeft botten die verbonden blijven zoals ze in het leven waren, wat een beter begrip geeft van de anatomie en houding van de dinosaurus."
        }
      },
      {
        question: {
          en: "Why are dinosaur fossils rarely found complete?",
          es: "¿Por qué los fósiles de dinosaurios rara vez se encuentran completos?",
          de: "Warum werden Dinosaurier-Fossilien selten vollständig gefunden?",
          nl: "Waarom worden dinosaurusfossielen zelden compleet gevonden?"
        },
        options: [
          { en: "Scavengers scattered the bones before burial", es: "Los carroñeros dispersaron los huesos antes del entierro", de: "Aasfresser verstreuten die Knochen vor der Begrabung", nl: "Aaseters verspreidden de botten voor de begraving" },
          { en: "Dinosaurs lost their bones when alive", es: "Los dinosaurios perdían sus huesos cuando estaban vivos", de: "Dinosaurier verloren ihre Knochen, als sie lebten", nl: "Dinosaurussen verloren hun botten toen ze leefden" },
          { en: "Bones dissolve quickly in air", es: "Los huesos se disuelven rápidamente en el aire", de: "Knochen lösen sich schnell in der Luft auf", nl: "Botten lossen snel op in de lucht" },
          { en: "Dinosaurs buried their own bones", es: "Los dinosaurios enterraron sus propios huesos", de: "Dinosaurier begruben ihre eigenen Knochen", nl: "Dinosaurussen begroeven hun eigen botten" }
        ],
        correct: 0,
        explanation: {
          en: "After death, scavengers often scattered dinosaur remains, and natural processes like erosion separated bones before they could be buried and fossilized together.",
          es: "Después de la muerte, los carroñeros a menudo dispersaron los restos de dinosaurios, y procesos naturales como la erosión separaron los huesos antes de que pudieran ser enterrados y fosilizados juntos.",
          de: "Nach dem Tod zerstreuten Aasfresser oft Dinosaurier-Überreste, und natürliche Prozesse wie Erosion trennten Knochen, bevor sie zusammen begraben und fossiliert werden konnten.",
          nl: "Na de dood verspreidden aaseters vaak dinosaurusresten, en natuurlijke processen zoals erosie scheidden botten voordat ze samen begraven en gefossiliseerd konden worden."
        }
      },
      {
        question: {
          en: "What can gastroliths tell us about dinosaurs?",
          es: "¿Qué pueden decirnos los gastrolitos sobre los dinosaurios?",
          de: "Was können uns Gastrolithe über Dinosaurier verraten?",
          nl: "Wat kunnen gastrolieten ons vertellen over dinosaurussen?"
        },
        options: [
          { en: "How they digested plant food", es: "Cómo digerían la comida vegetal", de: "Wie sie Pflanzenkost verdauten", nl: "Hoe ze plantenvoedsel verteerden" },
          { en: "How fast they could run", es: "Qué tan rápido podían correr", de: "Wie schnell sie laufen konnten", nl: "Hoe snel ze konden rennen" },
          { en: "What color they were", es: "De qué color eran", de: "Welche Farbe sie hatten", nl: "Welke kleur ze hadden" },
          { en: "How they communicated", es: "Cómo se comunicaban", de: "Wie sie kommunizierten", nl: "Hoe ze communiceerden" }
        ],
        correct: 0,
        explanation: {
          en: "Gastroliths are stomach stones that some dinosaurs swallowed to help grind up tough plant material in their stomachs, similar to modern birds.",
          es: "Los gastrolitos son piedras estomacales que algunos dinosaurios tragaban para ayudar a moler material vegetal duro en sus estómagos, similar a las aves modernas.",
          de: "Gastrolithe sind Magensteine, die einige Dinosaurier schluckten, um hartes Pflanzenmaterial in ihren Mägen zu zerkleinern, ähnlich wie moderne Vögel.",
          nl: "Gastrolieten zijn maagstenen die sommige dinosaurussen inslikten om taai plantenmateriaal in hun magen te vermalen, vergelijkbaar met moderne vogels."
        }
      },
      {
        question: {
          en: "Which type of environment is best for fossil preservation?",
          es: "¿Qué tipo de ambiente es mejor para la preservación de fósiles?",
          de: "Welche Art von Umgebung ist am besten für die Fossilerhaltung?",
          nl: "Welk type omgeving is het beste voor fossielpreservatie?"
        },
        options: [
          { en: "Low oxygen, rapid burial conditions", es: "Condiciones de poco oxígeno y entierro rápido", de: "Sauerstoffarme, schnelle Begrabungsbedingungen", nl: "Zuurstofarme, snelle begraafomstandigheden" },
          { en: "High oxygen, slow burial", es: "Alto oxígeno, entierro lento", de: "Hoher Sauerstoff, langsame Begrabung", nl: "Hoge zuurstof, langzame begraving" },
          { en: "Desert conditions", es: "Condiciones desérticas", de: "Wüstenbedingungen", nl: "Woestijnomstandigheden" },
          { en: "Mountain peaks", es: "Picos de montañas", de: "Berggipfel", nl: "Bergtoppen" }
        ],
        correct: 0,
        explanation: {
          en: "Low oxygen environments prevent decay, and rapid burial protects remains from scavengers and weathering, creating ideal conditions for fossilization.",
          es: "Los ambientes con poco oxígeno previenen la descomposición, y el entierro rápido protege los restos de carroñeros y meteorización, creando condiciones ideales para la fosilización.",
          de: "Sauerstoffarme Umgebungen verhindern Verfall, und schnelle Begrabung schützt Überreste vor Aasfressern und Verwitterung, wodurch ideale Bedingungen für die Fossilisation entstehen.",
          nl: "Zuurstofarme omgevingen voorkomen verval, en snelle begraving beschermt resten tegen aaseters en verwering, wat ideale omstandigheden creëert voor fossilisatie."
        }
      },
      {
        question: {
          en: "What is the difference between a fossil cast and a fossil mold?",
          es: "¿Cuál es la diferencia entre un molde fósil y una copia fósil?",
          de: "Was ist der Unterschied zwischen einem fossilen Abdruck und einem fossilen Ausguss?",
          nl: "Wat is het verschil tussen een fossiele afdruk en een fossiele afgieting?"
        },
        options: [
          { en: "A mold is hollow, a cast is solid", es: "Un molde es hueco, una copia es sólida", de: "Ein Abdruck ist hohl, ein Ausguss ist fest", nl: "Een afdruk is hol, een afgieting is massief" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" },
          { en: "A cast is older than a mold", es: "Una copia es más vieja que un molde", de: "Ein Ausguss ist älter als ein Abdruck", nl: "Een afgieting is ouder dan een afdruk" },
          { en: "Only molds preserve details", es: "Solo los moldes preservan detalles", de: "Nur Abdrücke bewahren Details", nl: "Alleen afdrukken bewaren details" }
        ],
        correct: 0,
        explanation: {
          en: "A mold is the hollow impression left by an organism, while a cast forms when minerals fill that hollow space, creating a solid replica.",
          es: "Un molde es la impresión hueca dejada por un organismo, mientras que una copia se forma cuando los minerales llenan ese espacio hueco, creando una réplica sólida.",
          de: "Ein Abdruck ist die hohle Impression, die von einem Organismus hinterlassen wurde, während ein Ausguss entsteht, wenn Mineralien diesen hohlen Raum füllen und eine feste Nachbildung entstehen lassen.",
          nl: "Een afdruk is de holle indruk die door een organisme is achtergelaten, terwijl een afgieting ontstaat wanneer mineralen die holle ruimte vullen, waardoor een massieve replica wordt gecreëerd."
        }
      },
      {
        question: {
          en: "How do scientists determine the age of dinosaur fossils?",
          es: "¿Cómo determinan los científicos la edad de los fósiles de dinosaurios?",
          de: "Wie bestimmen Wissenschaftler das Alter von Dinosaurier-Fossilien?",
          nl: "Hoe bepalen wetenschappers de leeftijd van dinosaurusfossielen?"
        },
        options: [
          { en: "By dating the rock layers they're found in", es: "Fechando las capas de roca donde se encuentran", de: "Durch Datierung der Gesteinsschichten, in denen sie gefunden werden", nl: "Door de gesteentelagen waarin ze gevonden zijn te dateren" },
          { en: "By counting the bones", es: "Contando los huesos", de: "Durch Zählen der Knochen", nl: "Door de botten te tellen" },
          { en: "By their color", es: "Por su color", de: "An ihrer Farbe", nl: "Aan hun kleur" },
          { en: "By their size", es: "Por su tamaño", de: "An ihrer Größe", nl: "Aan hun grootte" }
        ],
        correct: 0,
        explanation: {
          en: "Scientists use radiometric dating and stratigraphic methods to date the rock layers containing fossils, which tells them when the dinosaur lived.",
          es: "Los científicos usan datación radiométrica y métodos estratigráficos para fechar las capas de roca que contienen fósiles, lo que les dice cuándo vivió el dinosaurio.",
          de: "Wissenschaftler verwenden radiometrische Datierung und stratigraphische Methoden, um die fossilienhaltigen Gesteinsschichten zu datieren, was ihnen sagt, wann der Dinosaurier lebte.",
          nl: "Wetenschappers gebruiken radiometrische datering en stratigrafische methoden om de gesteentelagen met fossielen te dateren, wat hen vertelt wanneer de dinosaurus leefde."
        }
      },
      {
        question: {
          en: "What is taphonomy?",
          es: "¿Qué es la tafonomía?",
          de: "Was ist Taphonomie?",
          nl: "Wat is tafonomie?"
        },
        options: [
          { en: "The study of how organisms become fossils", es: "El estudio de cómo los organismos se convierten en fósiles", de: "Die Studie darüber, wie Organismen zu Fossilien werden", nl: "De studie van hoe organismen fossielen worden" },
          { en: "The study of dinosaur behavior", es: "El estudio del comportamiento de los dinosaurios", de: "Die Studie des Dinosaurier-Verhaltens", nl: "De studie van dinosaurusgedrag" },
          { en: "The study of rock types", es: "El estudio de tipos de rocas", de: "Die Studie von Gesteinsarten", nl: "De studie van gesteentetypen" },
          { en: "The study of fossil colors", es: "El estudio de colores de fósiles", de: "Die Studie von Fossilfarben", nl: "De studie van fossielkleuren" }
        ],
        correct: 0,
        explanation: {
          en: "Taphonomy studies the processes that affect organisms from death to discovery as fossils, including decay, transport, and burial conditions.",
          es: "La tafonomía estudia los procesos que afectan a los organismos desde la muerte hasta el descubrimiento como fósiles, incluyendo descomposición, transporte y condiciones de entierro.",
          de: "Taphonomie studiert die Prozesse, die Organismen vom Tod bis zur Entdeckung als Fossilien beeinflussen, einschließlich Verfall, Transport und Begrabungsbedingungen.",
          nl: "Tafonomie bestudeert de processen die organismen beïnvloeden van de dood tot de ontdekking als fossielen, inclusief verval, transport en begrafenisomstandigheden."
        }
      },
      {
        question: {
          en: "Why do some dinosaur fossils show evidence of bite marks?",
          es: "¿Por qué algunos fósiles de dinosaurios muestran evidencia de marcas de mordeduras?",
          de: "Warum zeigen manche Dinosaurier-Fossilien Spuren von Bissspuren?",
          nl: "Waarom tonen sommige dinosaurusfossielen bewijs van bijtwonden?"
        },
        options: [
          { en: "They were attacked by predators or scavengers", es: "Fueron atacados por depredadores o carroñeros", de: "Sie wurden von Raubtieren oder Aasfressern angegriffen", nl: "Ze werden aangevallen door roofdieren of aaseters" },
          { en: "They bit themselves", es: "Se mordieron a sí mismos", de: "Sie bissen sich selbst", nl: "Ze beten zichzelf" },
          { en: "The marks formed during fossilization", es: "Las marcas se formaron durante la fosilización", de: "Die Spuren entstanden während der Fossilisation", nl: "De markeringen ontstonden tijdens fossilisatie" },
          { en: "Scientists made the marks while digging", es: "Los científicos hicieron las marcas mientras excavaban", de: "Wissenschaftler machten die Spuren beim Graben", nl: "Wetenschappers maakten de markeringen tijdens het graven" }
        ],
        correct: 0,
        explanation: {
          en: "Bite marks on dinosaur fossils provide evidence of predation, scavenging behavior, and interactions between different dinosaur species.",
          es: "Las marcas de mordeduras en los fósiles de dinosaurios proporcionan evidencia de depredación, comportamiento carroñero e interacciones entre diferentes especies de dinosaurios.",
          de: "Bissspuren an Dinosaurier-Fossilien liefern Beweise für Raubtierverhalten, Aasfressen und Interaktionen zwischen verschiedenen Dinosaurier-Arten.",
          nl: "Bijtwonden op dinosaurusfossielen leveren bewijs voor predatie, aasgedrag en interacties tussen verschillende dinosaurussoorten."
        }
      },
      {
        question: {
          en: "What is the most common type of dinosaur fossil preservation?",
          es: "¿Cuál es el tipo más común de preservación de fósiles de dinosaurios?",
          de: "Was ist die häufigste Art der Dinosaurier-Fossil-Erhaltung?",
          nl: "Wat is het meest voorkomende type dinosaurusfossielpreservatie?"
        },
        options: [
          { en: "Hard parts like bones and teeth", es: "Partes duras como huesos y dientes", de: "Harte Teile wie Knochen und Zähne", nl: "Harde delen zoals botten en tanden" },
          { en: "Soft tissues like skin and organs", es: "Tejidos blandos como piel y órganos", de: "Weichteile wie Haut und Organe", nl: "Zachte weefsels zoals huid en organen" },
          { en: "Complete whole dinosaurs", es: "Dinosaurios completos enteros", de: "Vollständige ganze Dinosaurier", nl: "Complete hele dinosaurussen" },
          { en: "Dinosaur DNA", es: "ADN de dinosaurio", de: "Dinosaurier-DNA", nl: "Dinosaurus-DNA" }
        ],
        correct: 0,
        explanation: {
          en: "Hard parts like bones, teeth, and claws fossilize most easily because they contain minerals that resist decay, while soft tissues rarely preserve.",
          es: "Las partes duras como huesos, dientes y garras se fosilizan más fácilmente porque contienen minerales que resisten la descomposición, mientras que los tejidos blandos rara vez se preservan.",
          de: "Harte Teile wie Knochen, Zähne und Krallen fossilieren am leichtesten, weil sie Mineralien enthalten, die dem Verfall widerstehen, während Weichteile selten erhalten bleiben.",
          nl: "Harde delen zoals botten, tanden en klauwen fossiliseren het gemakkelijkst omdat ze mineralen bevatten die verval weerstaan, terwijl zachte weefsels zelden bewaard blijven."
        }
      },
      {
        question: {
          en: "What does it mean when a dinosaur fossil is described as 'disarticulated'?",
          es: "¿Qué significa cuando un fósil de dinosaurio se describe como 'desarticulado'?",
          de: "Was bedeutet es, wenn ein Dinosaurier-Fossil als 'disartikuliert' beschrieben wird?",
          nl: "Wat betekent het wanneer een dinosaurusfossiel wordt beschreven als 'gedesarticuleerd'?"
        },
        options: [
          { en: "The bones are scattered and not connected", es: "Los huesos están dispersos y no conectados", de: "Die Knochen sind verstreut und nicht verbunden", nl: "De botten zijn verspreid en niet verbonden" },
          { en: "The fossil is very old", es: "El fósil es muy antiguo", de: "Das Fossil ist sehr alt", nl: "Het fossiel is erg oud" },
          { en: "The fossil is perfectly preserved", es: "El fósil está perfectamente preservado", de: "Das Fossil ist perfekt erhalten", nl: "Het fossiel is perfect bewaard" },
          { en: "The fossil is made of different materials", es: "El fósil está hecho de diferentes materiales", de: "Das Fossil besteht aus verschiedenen Materialien", nl: "Het fossiel is gemaakt van verschillende materialen" }
        ],
        correct: 0,
        explanation: {
          en: "Disarticulated fossils have bones that have been separated from their original anatomical positions, often by water currents, scavengers, or decay processes.",
          es: "Los fósiles desarticulados tienen huesos que han sido separados de sus posiciones anatómicas originales, a menudo por corrientes de agua, carroñeros o procesos de descomposición.",
          de: "Disartikulierte Fossilien haben Knochen, die von ihren ursprünglichen anatomischen Positionen getrennt wurden, oft durch Wasserströmungen, Aasfresser oder Zerfallsprozesse.",
          nl: "Gedesarticuleerde fossielen hebben botten die zijn gescheiden van hun oorspronkelijke anatomische posities, vaak door waterstromingen, aaseters of vervalprocessen."
        }
      },
      {
        question: {
          en: "Which geological process can expose dinosaur fossils at the Earth's surface?",
          es: "¿Qué proceso geológico puede exponer fósiles de dinosaurios en la superficie de la Tierra?",
          de: "Welcher geologische Prozess kann Dinosaurier-Fossilien an der Erdoberfläche freilegen?",
          nl: "Welk geologisch proces kan dinosaurusfossielen aan het aardoppervlak blootleggen?"
        },
        options: [
          { en: "Erosion", es: "Erosión", de: "Erosion", nl: "Erosie" },
          { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" },
          { en: "Respiration", es: "Respiración", de: "Atmung", nl: "Ademhaling" },
          { en: "Combustion", es: "Combustión", de: "Verbrennung", nl: "Verbranding" }
        ],
        correct: 0,
        explanation: {
          en: "Erosion by wind, water, and weather gradually wears away rock layers, eventually exposing fossils that were buried millions of years ago.",
          es: "La erosión por viento, agua y clima gradualmente desgasta las capas de roca, eventualmente exponiendo fósiles que fueron enterrados hace millones de años.",
          de: "Erosion durch Wind, Wasser und Wetter trägt allmählich Gesteinsschichten ab und legt schließlich Fossilien frei, die vor Millionen von Jahren begraben wurden.",
          nl: "Erosie door wind, water en weer draagt geleidelijk gesteentelagen weg, waardoor uiteindelijk fossielen worden blootgelegd die miljoenen jaren geleden werden begraven."
        }
      },
      {
        question: {
          en: "What information can dinosaur egg fossils provide?",
          es: "¿Qué información pueden proporcionar los fósiles de huevos de dinosaurio?",
          de: "Welche Informationen können Dinosaurier-Ei-Fossilien liefern?",
          nl: "Welke informatie kunnen dinosauruseifossielen verschaffen?"
        },
        options: [
          { en: "Nesting behavior and reproduction", es: "Comportamiento de anidación y reproducción", de: "Nestverhalten und Fortpflanzung", nl: "Nestgedrag en voortplanting" },
          { en: "How fast dinosaurs could fly", es: "Qué tan rápido podían volar los dinosaurios", de: "Wie schnell Dinosaurier fliegen konnten", nl: "Hoe snel dinosaurussen konden vliegen" },
          { en: "What dinosaurs sounded like", es: "Cómo sonaban los dinosaurios", de: "Wie Dinosaurier klangen", nl: "Hoe dinosaurussen klonken" },
          { en: "The weather during the Mesozoic", es: "El clima durante el Mesozoico", de: "Das Wetter während des Mesozoikums", nl: "Het weer tijdens het Mesozoïcum" }
        ],
        correct: 0,
        explanation: {
          en: "Fossilized dinosaur eggs and nests reveal information about reproductive strategies, parental care, colony nesting, and even embryonic development.",
          es: "Los huevos y nidos fosilizados de dinosaurios revelan información sobre estrategias reproductivas, cuidado parental, anidación colonial e incluso desarrollo embrionario.",
          de: "Fossile Dinosaurier-Eier und Nester enthüllen Informationen über Fortpflanzungsstrategien, elterliche Fürsorge, Kolonienestung und sogar embryonale Entwicklung.",
          nl: "Gefossiliseerde dinosauruseieren en nesten onthullen informatie over voortplantingsstrategieën, ouderlijke zorg, kolonienesteling en zelfs embryonale ontwikkeling."
        }
      },
      {
        question: {
          en: "Why are complete dinosaur skeletons relatively rare finds?",
          es: "¿Por qué los esqueletos completos de dinosaurios son hallazgos relativamente raros?",
          de: "Warum sind vollständige Dinosaurier-Skelette relativ seltene Funde?",
          nl: "Waarom zijn complete dinosaurusskeletten relatief zeldzame vondsten?"
        },
        options: [
          { en: "Perfect preservation conditions are uncommon", es: "Las condiciones de preservación perfectas son poco comunes", de: "Perfekte Erhaltungsbedingungen sind ungewöhnlich", nl: "Perfecte preservatieomstandigheden zijn ongewoon" },
          { en: "Dinosaurs had very few bones", es: "Los dinosaurios tenían muy pocos huesos", de: "Dinosaurier hatten sehr wenige Knochen", nl: "Dinosaurussen hadden heel weinig botten" },
          { en: "Complete skeletons are too heavy to dig up", es: "Los esqueletos completos son demasiado pesados para excavar", de: "Vollständige Skelette sind zu schwer zum Ausgraben", nl: "Complete skeletten zijn te zwaar om op te graven" },
          { en: "Dinosaurs buried their own bones", es: "Los dinosaurios enterraron sus propios huesos", de: "Dinosaurier begruben ihre eigenen Knochen", nl: "Dinosaurussen begroeven hun eigen botten" }
        ],
        correct: 0,
        explanation: {
          en: "Complete skeletons require rapid burial in ideal conditions with minimal disturbance - a rare combination of circumstances in nature.",
          es: "Los esqueletos completos requieren entierro rápido en condiciones ideales con mínima perturbación - una combinación rara de circunstancias en la naturaleza.",
          de: "Vollständige Skelette erfordern schnelle Begrabung unter idealen Bedingungen mit minimaler Störung - eine seltene Kombination von Umständen in der Natur.",
          nl: "Complete skeletten vereisen snelle begraving onder ideale omstandigheden met minimale verstoring - een zeldzame combinatie van omstandigheden in de natuur."
        }
      },
      {
        question: {
          en: "What can the study of dinosaur footprint fossils (ichnites) tell us?",
          es: "¿Qué puede decirnos el estudio de fósiles de huellas de dinosaurios (icnitas)?",
          de: "Was kann uns die Studie von Dinosaurier-Fußspur-Fossilien (Ichniten) sagen?",
          nl: "Wat kan de studie van dinosaurusvoetstapfossielen (ichnieten) ons vertellen?"
        },
        options: [
          { en: "Speed, gait, and social behavior", es: "Velocidad, marcha y comportamiento social", de: "Geschwindigkeit, Gangart und Sozialverhalten", nl: "Snelheid, loop en sociaal gedrag" },
          { en: "What color dinosaurs were", es: "De qué color eran los dinosaurios", de: "Welche Farbe Dinosaurier hatten", nl: "Welke kleur dinosaurussen hadden" },
          { en: "How long dinosaurs lived", es: "Cuánto tiempo vivieron los dinosaurios", de: "Wie lange Dinosaurier lebten", nl: "Hoe lang dinosaurussen leefden" },
          { en: "What dinosaurs ate", es: "Qué comían los dinosaurios", de: "Was Dinosaurier fraßen", nl: "Wat dinosaurussen aten" }
        ],
        correct: 0,
        explanation: {
          en: "Trackways preserve evidence of dinosaur locomotion, including walking speed, stride length, whether they moved in herds, and their social interactions.",
          es: "Las pistas preservan evidencia de la locomoción de los dinosaurios, incluyendo velocidad de caminar, longitud de zancada, si se movían en manadas y sus interacciones sociales.",
          de: "Fährten bewahren Beweise für Dinosaurier-Fortbewegung, einschließlich Gehgeschwindigkeit, Schrittlänge, ob sie in Herden zogen und ihre sozialen Interaktionen.",
          nl: "Sporenreeksen bewaren bewijs van dinosauruslocomotie, inclusief loopsnelheid, staplengte, of ze in kuddes bewogen en hun sociale interacties."
        }
      },
      {
        question: {
          en: "What is the main method scientists use to determine the age of dinosaur fossils?",
          es: "¿Cuál es el método principal que los científicos usan para determinar la edad de los fósiles de dinosaurios?",
          de: "Was ist die Hauptmethode, die Wissenschaftler verwenden, um das Alter von Dinosaurier-Fossilien zu bestimmen?",
          nl: "Wat is de hoofdmethode die wetenschappers gebruiken om de leeftijd van dinosaurusfossielen te bepalen?"
        },
        options: [
          { en: "Relative dating using rock layers", es: "Datación relativa usando capas de roca", de: "Relative Datierung mit Gesteinsschichten", nl: "Relatieve datering met behulp van gesteentelagen" },
          { en: "Counting the rings in the bones", es: "Contando los anillos en los huesos", de: "Zählen der Ringe in den Knochen", nl: "Ringen in de botten tellen" },
          { en: "Measuring the fossil's weight", es: "Midiendo el peso del fósil", de: "Messung des Fossilgewichts", nl: "Het gewicht van het fossiel meten" },
          { en: "Checking the fossil's color", es: "Verificando el color del fósil", de: "Überprüfung der Fossilfarbe", nl: "De kleur van het fossiel controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Scientists use relative dating by studying the rock layers (strata) where fossils are found. Older layers are usually deeper than newer ones.",
          es: "Los científicos usan datación relativa estudiando las capas de roca (estratos) donde se encuentran los fósiles. Las capas más antiguas suelen estar más profundas que las nuevas.",
          de: "Wissenschaftler verwenden relative Datierung, indem sie die Gesteinsschichten (Strata) studieren, in denen Fossilien gefunden werden. Ältere Schichten sind normalerweise tiefer als neuere.",
          nl: "Wetenschappers gebruiken relatieve datering door de gesteentelagen (strata) te bestuderen waar fossielen worden gevonden. Oudere lagen liggen meestal dieper dan nieuwere."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
