// Velociraptors Quiz - Level 3: Advanced Basics
(function() {
  const level3 = {
    name: {
      en: "Velociraptors Level 3",
      es: "Velociraptors Nivel 3",
      de: "Velociraptors Stufe 3",
      nl: "Velociraptors Level 3"
    },
    questions: [
      {
        question: {
          en: "What family of dinosaurs does Velociraptor belong to?",
          es: "¿A qué familia de dinosaurios pertenece el Velociraptor?",
          de: "Zu welcher Familie von Dinosauriern gehört der Velociraptor?",
          nl: "Tot welke familie van dinosauriërs behoort Velociraptor?"
        },
        options: [
          { en: "Dromaeosauridae", es: "Dromaeosauridae", de: "Dromaeosauridae", nl: "Dromaeosauridae" },
          { en: "Tyrannosauridae", es: "Tyrannosauridae", de: "Tyrannosauridae", nl: "Tyrannosauridae" },
          { en: "Troodontidae", es: "Troodontidae", de: "Troodontidae", nl: "Troodontidae" },
          { en: "Compsognathidae", es: "Compsognathidae", de: "Compsognathidae", nl: "Compsognathidae" }
        ],
        correct: 0,
        explanation: {
          en: "Velociraptor belongs to the family Dromaeosauridae, commonly known as 'raptors'. This family is characterized by their sickle-shaped claws and bird-like features.",
          es: "El Velociraptor pertenece a la familia Dromaeosauridae, comúnmente conocida como 'raptores'. Esta familia se caracteriza por sus garras en forma de hoz y características similares a las aves.",
          de: "Der Velociraptor gehört zur Familie Dromaeosauridae, die gemeinhin als 'Raptoren' bekannt ist. Diese Familie zeichnet sich durch ihre sichelförmigen Krallen und vogelähnlichen Merkmale aus.",
          nl: "Velociraptor behoort tot de familie Dromaeosauridae, algemeen bekend als 'raptors'. Deze familie wordt gekenmerkt door hun sikkelvormige klauwen en vogelachtige kenmerken."
        }
      },
      {
        question: {
          en: "What was the primary diet of Velociraptor based on fossil evidence?",
          es: "¿Cuál era la dieta principal del Velociraptor basada en evidencia fósil?",
          de: "Was war die Hauptnahrung des Velociraptors basierend auf fossilen Belegen?",
          nl: "Wat was het primaire dieet van Velociraptor gebaseerd op fossiel bewijs?"
        },
        options: [
          { en: "Carnivorous - meat and fish", es: "Carnívoro - carne y pescado", de: "Fleischfressend - Fleisch und Fisch", nl: "Carnivoor - vlees en vis" },
          { en: "Herbivorous - plants only", es: "Herbívoro - solo plantas", de: "Pflanzenfressend - nur Pflanzen", nl: "Herbivoor - alleen planten" },
          { en: "Omnivorous - mixed diet", es: "Omnívoro - dieta mixta", de: "Allesfressend - gemischte Nahrung", nl: "Omnivoor - gemengd dieet" },
          { en: "Insectivorous - insects only", es: "Insectívoro - solo insectos", de: "Insektenfressend - nur Insekten", nl: "Insectivoor - alleen insecten" }
        ],
        correct: 0,
        explanation: {
          en: "Velociraptor was a carnivore, feeding on meat and possibly fish. Its sharp, serrated teeth and powerful claws were perfectly adapted for hunting and processing animal prey.",
          es: "El Velociraptor era carnívoro, alimentándose de carne y posiblemente pescado. Sus dientes afilados y serrados y sus poderosas garras estaban perfectamente adaptados para cazar y procesar presas animales.",
          de: "Der Velociraptor war ein Fleischfresser, der sich von Fleisch und möglicherweise Fisch ernährte. Seine scharfen, gezackten Zähne und kräftigen Krallen waren perfekt an die Jagd und Verarbeitung von tierlicher Beute angepasst.",
          nl: "Velociraptor was een carnivoor, voedde zich met vlees en mogelijk vis. Zijn scherpe, gekartelde tanden en krachtige klauwen waren perfect aangepast voor het jagen en verwerken van dierlijke prooien."
        }
      },
      {
        question: {
          en: "In which geological period did Velociraptor live?",
          es: "¿En qué período geológico vivió el Velociraptor?",
          de: "In welcher geologischen Periode lebte der Velociraptor?",
          nl: "In welke geologische periode leefde Velociraptor?"
        },
        options: [
          { en: "Late Cretaceous", es: "Cretácico tardío", de: "Späte Kreidezeit", nl: "Laat Krijt" },
          { en: "Early Cretaceous", es: "Cretácico temprano", de: "Frühe Kreidezeit", nl: "Vroeg Krijt" },
          { en: "Late Jurassic", es: "Jurásico tardío", de: "Späte Jurazeit", nl: "Laat Jura" },
          { en: "Early Jurassic", es: "Jurásico temprano", de: "Frühe Jurazeit", nl: "Vroeg Jura" }
        ],
        correct: 0,
        explanation: {
          en: "Velociraptor lived during the Late Cretaceous period, approximately 75-71 million years ago. This was near the end of the age of dinosaurs, shortly before the mass extinction event.",
          es: "El Velociraptor vivió durante el período Cretácico tardío, aproximadamente hace 75-71 millones de años. Esto fue cerca del final de la era de los dinosaurios, poco antes del evento de extinción masiva.",
          de: "Der Velociraptor lebte während der späten Kreidezeit, vor etwa 75-71 Millionen Jahren. Dies war gegen Ende des Zeitalters der Dinosaurier, kurz vor dem Massenaussterben.",
          nl: "Velociraptor leefde tijdens het Laat Krijt, ongeveer 75-71 miljoen jaar geleden. Dit was tegen het einde van het tijdperk van de dinosauriërs, kort voor de massa-extinctie."
        }
      },
      {
        question: {
          en: "What was the brain size of Velociraptor relative to its body size?",
          es: "¿Cuál era el tamaño del cerebro del Velociraptor en relación con el tamaño de su cuerpo?",
          de: "Wie groß war das Gehirn des Velociraptors im Verhältnis zu seiner Körpergröße?",
          nl: "Hoe groot was de hersenen van Velociraptor ten opzichte van zijn lichaamsgrootte?"
        },
        options: [
          { en: "Large relative to body size, suggesting high intelligence", es: "Grande en relación al tamaño corporal, sugiriendo alta inteligencia", de: "Groß im Verhältnis zur Körpergröße, was auf hohe Intelligenz hindeutet", nl: "Groot ten opzichte van lichaamsgrootte, wat wijst op hoge intelligentie" },
          { en: "Small relative to body size, similar to modern reptiles", es: "Pequeño en relación al tamaño corporal, similar a reptiles modernos", de: "Klein im Verhältnis zur Körpergröße, ähnlich modernen Reptilien", nl: "Klein ten opzichte van lichaamsgrootte, vergelijkbaar met moderne reptielen" },
          { en: "Average size for theropod dinosaurs", es: "Tamaño promedio para dinosaurios terópodos", de: "Durchschnittliche Größe für Theropoden-Dinosaurier", nl: "Gemiddelde grootte voor theropode dinosauriërs" },
          { en: "Unknown due to lack of skull fossils", es: "Desconocido debido a la falta de fósiles de cráneo", de: "Unbekannt aufgrund fehlender Schädelfossilien", nl: "Onbekend vanwege gebrek aan schedelfossielen" }
        ],
        correct: 0,
        explanation: {
          en: "Velociraptor had a relatively large brain for its body size, with an estimated brain-to-body ratio similar to modern birds. This suggests they were highly intelligent predators capable of complex hunting behaviors.",
          es: "El Velociraptor tenía un cerebro relativamente grande para el tamaño de su cuerpo, con una proporción cerebro-cuerpo estimada similar a las aves modernas. Esto sugiere que eran depredadores altamente inteligentes capaces de comportamientos de caza complejos.",
          de: "Der Velociraptor hatte ein relativ großes Gehirn für seine Körpergröße, mit einem geschätzten Gehirn-Körper-Verhältnis ähnlich modernen Vögeln. Dies deutet darauf hin, dass sie hochintelligente Raubtiere waren, die zu komplexen Jagdverhalten fähig waren.",
          nl: "Velociraptor had relatief grote hersenen voor zijn lichaamsgrootte, met een geschatte hersenen-lichaam verhouding vergelijkbaar met moderne vogels. Dit suggereert dat het zeer intelligente roofdieren waren die in staat waren tot complex jachtgedrag."
        }
      },
      {
        question: {
          en: "What type of teeth did Velociraptor have?",
          es: "¿Qué tipo de dientes tenía el Velociraptor?",
          de: "Welche Art von Zähnen hatte der Velociraptor?",
          nl: "Wat voor soort tanden had Velociraptor?"
        },
        options: [
          { en: "Sharp, curved, serrated teeth for slicing meat", es: "Dientes afilados, curvados y serrados para cortar carne", de: "Scharfe, gebogene, gezackte Zähne zum Schneiden von Fleisch", nl: "Scherpe, gebogen, gekartelde tanden voor het snijden van vlees" },
          { en: "Flat, grinding teeth for plants", es: "Dientes planos y trituradores para plantas", de: "Flache, mahlende Zähne für Pflanzen", nl: "Platte, malende tanden voor planten" },
          { en: "Long, straight teeth for piercing", es: "Dientes largos y rectos para perforar", de: "Lange, gerade Zähne zum Durchbohren", nl: "Lange, rechte tanden voor doorboren" },
          { en: "Small, peg-like teeth for insects", es: "Dientes pequeños en forma de clavija para insectos", de: "Kleine, stiftartige Zähne für Insekten", nl: "Kleine, pegvormige tanden voor insecten" }
        ],
        correct: 0,
        explanation: {
          en: "Velociraptor had sharp, curved, serrated teeth that were perfectly designed for slicing through meat and holding onto struggling prey. The serrations worked like a steak knife to cut through flesh efficiently.",
          es: "El Velociraptor tenía dientes afilados, curvados y serrados que estaban perfectamente diseñados para cortar carne y agarrar presas que luchaban. Las serraciones funcionaban como un cuchillo de carne para cortar la carne de manera eficiente.",
          de: "Der Velociraptor hatte scharfe, gebogene, gezackte Zähne, die perfekt zum Schneiden von Fleisch und Festhalten kämpfender Beute geeignet waren. Die Zackungen wirkten wie ein Steakmesser, um Fleisch effizient zu schneiden.",
          nl: "Velociraptor had scherpe, gebogen, gekartelde tanden die perfect ontworpen waren voor het snijden van vlees en het vasthouden van worstelende prooi. De kartelingen werkten als een steakmes om vlees efficiënt door te snijden."
        }
      },
      {
        question: {
          en: "What evidence suggests that Velociraptor had feathers?",
          es: "¿Qué evidencia sugiere que el Velociraptor tenía plumas?",
          de: "Welche Beweise deuten darauf hin, dass der Velociraptor Federn hatte?",
          de: "Welche Beweise deuten darauf hin, dass der Velociraptor Federn hatte?",
          nl: "Welk bewijs suggereert dat Velociraptor veren had?"
        },
        options: [
          { en: "Quill knobs found on fossilized arm bones", es: "Perillas de plumas encontradas en huesos de brazo fosilizados", de: "Federkiele gefunden an fossilisierten Armknochen", nl: "Veerschachten gevonden op gefossiliseerde armbotten" },
          { en: "Direct fossil impressions of feathers", es: "Impresiones fósiles directas de plumas", de: "Direkte fossile Abdrücke von Federn", nl: "Directe fossiele afdrukken van veren" },
          { en: "DNA analysis of bone fragments", es: "Análisis de ADN de fragmentos de hueso", de: "DNA-Analyse von Knochenfragmenten", nl: "DNA-analyse van botfragmenten" },
          { en: "Comparison with modern birds only", es: "Comparación solo con aves modernas", de: "Vergleich nur mit modernen Vögeln", nl: "Vergelijking met alleen moderne vogels" }
        ],
        correct: 0,
        explanation: {
          en: "In 2007, scientists discovered quill knobs (small bumps where feathers attach) on a Velociraptor arm bone. These are the same attachment points found in modern birds, providing strong evidence that Velociraptor had feathers.",
          es: "En 2007, los científicos descubrieron perillas de plumas (pequeñas protuberancias donde se adhieren las plumas) en un hueso del brazo de Velociraptor. Estos son los mismos puntos de unión encontrados en aves modernas, proporcionando evidencia sólida de que el Velociraptor tenía plumas.",
          de: "2007 entdeckten Wissenschaftler Federkiele (kleine Erhebungen, wo sich Federn anheften) an einem Velociraptor-Armknochen. Dies sind dieselben Ansatzstellen, die bei modernen Vögeln gefunden werden, und liefern starke Beweise dafür, dass der Velociraptor Federn hatte.",
          nl: "In 2007 ontdekten wetenschappers veerschachten (kleine bulten waar veren vastzitten) op een Velociraptor armbot. Dit zijn dezelfde bevestigingspunten die bij moderne vogels worden gevonden, wat sterk bewijs levert dat Velociraptor veren had."
        }
      },
      {
        question: {
          en: "How did Velociraptor likely use its long, stiff tail?",
          es: "¿Cómo usaba probablemente el Velociraptor su cola larga y rígida?",
          de: "Wie benutzte der Velociraptor wahrscheinlich seinen langen, steifen Schwanz?",
          nl: "Hoe gebruikte Velociraptor waarschijnlijk zijn lange, stijve staart?"
        },
        options: [
          { en: "For balance and steering while running and turning", es: "Para equilibrio y dirección mientras corría y giraba", de: "Für Gleichgewicht und Steuerung beim Laufen und Wenden", nl: "Voor balans en sturen tijdens rennen en draaien" },
          { en: "As a weapon to strike prey", es: "Como arma para golpear presas", de: "Als Waffe zum Schlagen von Beute", nl: "Als wapen om prooien te slaan" },
          { en: "For swimming propulsion", es: "Para propulsión al nadar", de: "Für Schwimmantrieb", nl: "Voor voortstuwing bij zwemmen" },
          { en: "For display purposes only", es: "Solo para propósitos de exhibición", de: "Nur für Präsentationszwecke", nl: "Alleen voor tentoonstellingsdoeleinden" }
        ],
        correct: 0,
        explanation: {
          en: "Velociraptor's tail was stiffened by long, overlapping bony rods and served as a dynamic balancing organ, helping the dinosaur maintain stability while running at high speeds and making sharp turns during pursuit of prey.",
          es: "La cola del Velociraptor estaba endurecida por varillas óseas largas y superpuestas y servía como un órgano de equilibrio dinámico, ayudando al dinosaurio a mantener la estabilidad mientras corría a alta velocidad y hacía giros bruscos durante la persecución de presas.",
          de: "Der Schwanz des Velociraptors wurde durch lange, überlappende Knochenstäbe versteift und diente als dynamisches Gleichgewichtsorgan, das dem Dinosaurier half, die Stabilität bei hohen Geschwindigkeiten und scharfen Wendungen während der Beutejagd aufrechtzuerhalten.",
          nl: "Velociraptor's staart werd verstijfd door lange, overlappende botstaven en diende als een dynamisch balansorgaan, dat de dinosauriër hielp stabiliteit te behouden tijdens het rennen op hoge snelheden en het maken van scherpe bochten tijdens de achtervolging van prooien."
        }
      },
      {
        question: {
          en: "What was the approximate weight of an adult Velociraptor?",
          es: "¿Cuál era el peso aproximado de un Velociraptor adulto?",
          de: "Wie schwer war ein ausgewachsener Velociraptor ungefähr?",
          nl: "Wat was het geschatte gewicht van een volwassen Velociraptor?"
        },
        options: [
          { en: "15-20 kg (33-44 lbs)", es: "15-20 kg (33-44 libras)", de: "15-20 kg (33-44 Pfund)", nl: "15-20 kg (33-44 pond)" },
          { en: "50-80 kg (110-176 lbs)", es: "50-80 kg (110-176 libras)", de: "50-80 kg (110-176 Pfund)", nl: "50-80 kg (110-176 pond)" },
          { en: "5-8 kg (11-18 lbs)", es: "5-8 kg (11-18 libras)", de: "5-8 kg (11-18 Pfund)", nl: "5-8 kg (11-18 pond)" },
          { en: "100+ kg (220+ lbs)", es: "100+ kg (220+ libras)", de: "100+ kg (220+ Pfund)", nl: "100+ kg (220+ pond)" }
        ],
        correct: 0,
        explanation: {
          en: "Adult Velociraptor weighed approximately 15-20 kg (33-44 lbs), making them about the size of a large dog or small wolf. This was much lighter than the massive creatures depicted in popular media.",
          es: "El Velociraptor adulto pesaba aproximadamente 15-20 kg (33-44 libras), haciéndolos del tamaño de un perro grande o un lobo pequeño. Esto era mucho más ligero que las criaturas masivas representadas en los medios populares.",
          de: "Ein ausgewachsener Velociraptor wog etwa 15-20 kg (33-44 Pfund), was sie etwa so groß wie einen großen Hund oder kleinen Wolf machte. Das war viel leichter als die massiven Kreaturen, die in populären Medien dargestellt werden.",
          nl: "Volwassen Velociraptor woog ongeveer 15-20 kg (33-44 pond), waardoor ze ongeveer zo groot waren als een grote hond of kleine wolf. Dit was veel lichter dan de massieve wezens die in populaire media worden afgebeeld."
        }
      },
      {
        question: {
          en: "Where have most Velociraptor fossils been discovered?",
          es: "¿Dónde se han descubierto la mayoría de los fósiles de Velociraptor?",
          de: "Wo wurden die meisten Velociraptor-Fossilien entdeckt?",
          nl: "Waar zijn de meeste Velociraptor fossielen ontdekt?"
        },
        options: [
          { en: "Mongolia and northern China", es: "Mongolia y el norte de China", de: "Mongolei und Nordchina", nl: "Mongolië en Noord-China" },
          { en: "Western United States", es: "Oeste de Estados Unidos", de: "Westliche Vereinigte Staaten", nl: "West-Verenigde Staten" },
          { en: "Argentina and Brazil", es: "Argentina y Brasil", de: "Argentinien und Brasilien", nl: "Argentinië en Brazilië" },
          { en: "England and France", es: "Inglaterra y Francia", de: "England und Frankreich", nl: "Engeland en Frankrijk" }
        ],
        correct: 0,
        explanation: {
          en: "Most Velociraptor fossils have been found in the Gobi Desert regions of Mongolia and northern China. The dry desert conditions helped preserve these fossils for millions of years.",
          es: "La mayoría de los fósiles de Velociraptor se han encontrado en las regiones del desierto de Gobi en Mongolia y el norte de China. Las condiciones secas del desierto ayudaron a preservar estos fósiles durante millones de años.",
          de: "Die meisten Velociraptor-Fossilien wurden in den Gobi-Wüstenregionen der Mongolei und Nordchinas gefunden. Die trockenen Wüstenbedingungen halfen dabei, diese Fossilien über Millionen von Jahren zu erhalten.",
          nl: "De meeste Velociraptor fossielen zijn gevonden in de Gobi woestijngebieden van Mongolië en Noord-China. De droge woestijnomstandigheden hielpen deze fossielen miljoenen jaren te bewaren."
        }
      },
      {
        question: {
          en: "What was unique about Velociraptor's arm structure?",
          es: "¿Qué era único sobre la estructura del brazo del Velociraptor?",
          de: "Was war einzigartig an der Armstruktur des Velociraptors?",
          nl: "Wat was uniek aan Velociraptor's armstructuur?"
        },
        options: [
          { en: "Long arms with flexible wrists capable of bird-like folding", es: "Brazos largos con muñecas flexibles capaces de plegarse como aves", de: "Lange Arme mit flexiblen Handgelenken, die sich vogelartig falten können", nl: "Lange armen met flexibele polsen die vogelachtig konden vouwen" },
          { en: "Very short, vestigial arms like T. rex", es: "Brazos muy cortos y vestigiales como T. rex", de: "Sehr kurze, rudimentäre Arme wie T. rex", nl: "Zeer korte, rudimentaire armen zoals T. rex" },
          { en: "Four-fingered hands with opposable thumbs", es: "Manos de cuatro dedos con pulgares oponibles", de: "Vierfingrige Hände mit opponierbaren Daumen", nl: "Vier-vingered handen met opponeerbare duimen" },
          { en: "Arms that could rotate 360 degrees", es: "Brazos que podían rotar 360 grados", de: "Arme, die sich 360 Grad drehen konnten", nl: "Armen die 360 graden konden draaien" }
        ],
        correct: 0,
        explanation: {
          en: "Velociraptor had proportionally long arms with highly flexible wrists that could fold against the body in a bird-like manner. This flexibility, combined with their three-fingered hands ending in sharp claws, made them effective at grasping prey.",
          es: "El Velociraptor tenía brazos proporcionalmente largos con muñecas muy flexibles que podían plegarse contra el cuerpo de manera similar a las aves. Esta flexibilidad, combinada con sus manos de tres dedos que terminaban en garras afiladas, los hacía efectivos para agarrar presas.",
          de: "Der Velociraptor hatte proportional lange Arme mit hochflexiblen Handgelenken, die sich vogelartig gegen den Körper falten konnten. Diese Flexibilität, kombiniert mit ihren dreifingrigen Händen, die in scharfen Krallen endeten, machte sie effektiv beim Greifen von Beute.",
          nl: "Velociraptor had proportioneel lange armen met zeer flexibele polsen die vogelachtig tegen het lichaam konden vouwen. Deze flexibiliteit, gecombineerd met hun drie-vingered handen die eindigden in scherpe klauwen, maakte hen effectief in het grijpen van prooien."
        }
      },
      {
        question: {
          en: "How fast could Velociraptor run according to biomechanical studies?",
          es: "¿Qué tan rápido podía correr el Velociraptor según estudios biomecánicos?",
          de: "Wie schnell konnte der Velociraptor laut biomechanischen Studien laufen?",
          nl: "Hoe snel kon Velociraptor rennen volgens biomechanische studies?"
        },
        options: [
          { en: "About 40 km/h (25 mph)", es: "Cerca de 40 km/h (25 mph)", de: "Etwa 40 km/h (25 mph)", nl: "Ongeveer 40 km/u (25 mph)" },
          { en: "Over 70 km/h (43 mph)", es: "Más de 70 km/h (43 mph)", de: "Über 70 km/h (43 mph)", nl: "Meer dan 70 km/u (43 mph)" },
          { en: "About 20 km/h (12 mph)", es: "Cerca de 20 km/h (12 mph)", de: "Etwa 20 km/h (12 mph)", nl: "Ongeveer 20 km/u (12 mph)" },
          { en: "Same speed as a human", es: "La misma velocidad que un humano", de: "Gleiche Geschwindigkeit wie ein Mensch", nl: "Dezelfde snelheid als een mens" }
        ],
        correct: 0,
        explanation: {
          en: "Biomechanical analysis of Velociraptor leg bones and proportions suggests they could run at speeds up to 40 km/h (25 mph). While fast, this is slower than some popular depictions but still made them effective pursuit predators.",
          es: "El análisis biomecánico de los huesos y proporciones de las piernas del Velociraptor sugiere que podían correr a velocidades de hasta 40 km/h (25 mph). Aunque rápido, esto es más lento que algunas representaciones populares, pero aún los hacía depredadores de persecución efectivos.",
          de: "Die biomechanische Analyse der Beinknochen und Proportionen des Velociraptors deutet darauf hin, dass sie Geschwindigkeiten von bis zu 40 km/h (25 mph) erreichen konnten. Obwohl schnell, ist dies langsamer als einige populäre Darstellungen, machte sie aber dennoch zu effektiven Verfolgungsräubern.",
          nl: "Biomechanische analyse van Velociraptor beenbotten en proporties suggereert dat ze snelheden tot 40 km/u (25 mph) konden bereiken. Hoewel snel, is dit langzamer dan sommige populaire afbeeldingen, maar maakte hen nog steeds effectieve achtervolgende roofdieren."
        }
      },
      {
        question: {
          en: "What type of environment did Velociraptor inhabit?",
          es: "¿Qué tipo de ambiente habitaba el Velociraptor?",
          de: "Welche Art von Umgebung bewohnte der Velociraptor?",
          nl: "Wat voor soort omgeving bewoonde Velociraptor?"
        },
        options: [
          { en: "Semi-arid deserts and dry floodplains", es: "Desiertos semiáridos y llanuras de inundación secas", de: "Halbwüsten und trockene Überschwemmungsgebiete", nl: "Semi-aride woestijnen en droge overstromingsvlakten" },
          { en: "Dense tropical rainforests", es: "Selvas tropicales densas", de: "Dichte tropische Regenwälder", nl: "Dichte tropische regenwouden" },
          { en: "Snowy, cold mountain regions", es: "Regiones montañosas nevadas y frías", de: "Schneereiche, kalte Bergregionen", nl: "Besneeuwde, koude berggebieden" },
          { en: "Coastal swamps and marshes", es: "Pantanos y marismas costeras", de: "Küstensümpfe und Marschland", nl: "Kustmoerassen en veengebieden" }
        ],
        correct: 0,
        explanation: {
          en: "Velociraptor lived in semi-arid desert environments and dry floodplains, similar to modern-day Mongolia where their fossils are found. This was a harsh environment with seasonal rivers and sparse vegetation.",
          es: "El Velociraptor vivía en ambientes desérticos semiáridos y llanuras de inundación secas, similar a la Mongolia moderna donde se encuentran sus fósiles. Este era un ambiente duro con ríos estacionales y vegetación escasa.",
          de: "Der Velociraptor lebte in halbwüstenhaften Wüstenumgebungen und trockenen Überschwemmungsgebieten, ähnlich dem heutigen Mongolei, wo ihre Fossilien gefunden werden. Dies war eine harte Umgebung mit saisonalen Flüssen und spärlicher Vegetation.",
          nl: "Velociraptor leefde in semi-aride woestijnomgevingen en droge overstromingsvlakten, vergelijkbaar met het huidige Mongolië waar hun fossielen worden gevonden. Dit was een harde omgeving met seizoensgebonden rivieren en schaarse vegetatie."
        }
      },
      {
        question: {
          en: "What was the approximate length of Velociraptor's sickle claw?",
          es: "¿Cuál era la longitud aproximada de la garra en hoz del Velociraptor?",
          de: "Wie lang war die Sichelkralle des Velociraptors ungefähr?",
          nl: "Wat was de geschatte lengte van Velociraptor's sikkelklauw?"
        },
        options: [
          { en: "8-9 cm (3.5 inches)", es: "8-9 cm (3.5 pulgadas)", de: "8-9 cm (3,5 Zoll)", nl: "8-9 cm (3,5 inch)" },
          { en: "15-20 cm (6-8 inches)", es: "15-20 cm (6-8 pulgadas)", de: "15-20 cm (6-8 Zoll)", nl: "15-20 cm (6-8 inch)" },
          { en: "4-5 cm (2 inches)", es: "4-5 cm (2 pulgadas)", de: "4-5 cm (2 Zoll)", nl: "4-5 cm (2 inch)" },
          { en: "25+ cm (10+ inches)", es: "25+ cm (10+ pulgadas)", de: "25+ cm (10+ Zoll)", nl: "25+ cm (10+ inch)" }
        ],
        correct: 0,
        explanation: {
          en: "Velociraptor's famous sickle claw was approximately 8-9 cm (3.5 inches) long. While impressive, this was smaller than some other dromaeosaurids like Utahraptor, whose claws could reach over 20 cm in length.",
          es: "La famosa garra en hoz del Velociraptor medía aproximadamente 8-9 cm (3.5 pulgadas) de largo. Aunque impresionante, esto era más pequeño que algunos otros dromaeosáuridos como Utahraptor, cuyas garras podían alcanzar más de 20 cm de longitud.",
          de: "Die berühmte Sichelkralle des Velociraptors war etwa 8-9 cm (3,5 Zoll) lang. Obwohl beeindruckend, war dies kleiner als bei einigen anderen Dromaeosauriden wie Utahraptor, dessen Krallen über 20 cm lang werden konnten.",
          nl: "Velociraptor's beroemde sikkelklauw was ongeveer 8-9 cm (3,5 inch) lang. Hoewel indrukwekkend, was dit kleiner dan sommige andere dromaeosauriden zoals Utahraptor, wiens klauwen meer dan 20 cm lang konden worden."
        }
      },
      {
        question: {
          en: "What does the name 'Velociraptor' mean?",
          es: "¿Qué significa el nombre 'Velociraptor'?",
          de: "Was bedeutet der Name 'Velociraptor'?",
          nl: "Wat betekent de naam 'Velociraptor'?"
        },
        options: [
          { en: "Swift thief or speedy plunderer", es: "Ladrón veloz o saqueador rápido", de: "Schneller Dieb oder flinker Plünderer", nl: "Snelle dief of vlugge plunderaar" },
          { en: "Terrible lizard", es: "Lagarto terrible", de: "Schreckliche Echse", nl: "Verschrikkelijke hagedis" },
          { en: "Sharp-toothed hunter", es: "Cazador de dientes afilados", de: "Scharfzähniger Jäger", nl: "Scherp-getande jager" },
          { en: "Flying reptile", es: "Reptil volador", de: "Fliegendes Reptil", nl: "Vliegend reptiel" }
        ],
        correct: 0,
        explanation: {
          en: "Velociraptor means 'swift thief' or 'speedy plunderer' in Latin. The name was chosen by paleontologist Henry Fairfield Osborn in 1924 to reflect the dinosaur's presumed quick and predatory nature.",
          es: "Velociraptor significa 'ladrón veloz' o 'saqueador rápido' en latín. El nombre fue elegido por el paleontólogo Henry Fairfield Osborn en 1924 para reflejar la naturaleza rápida y depredadora presumida del dinosaurio.",
          de: "Velociraptor bedeutet 'schneller Dieb' oder 'flinker Plünderer' auf Lateinisch. Der Name wurde 1924 vom Paläontologen Henry Fairfield Osborn gewählt, um die vermutete schnelle und räuberische Natur des Dinosauriers zu reflektieren.",
          nl: "Velociraptor betekent 'snelle dief' of 'vlugge plunderaar' in het Latijn. De naam werd in 1924 gekozen door paleontoloog Henry Fairfield Osborn om de vermoede snelle en roofzuchtige aard van de dinosauriër te weerspiegelen."
        }
      },
      {
        question: {
          en: "How many fingers did Velociraptor have on each hand?",
          es: "¿Cuántos dedos tenía el Velociraptor en cada mano?",
          de: "Wie viele Finger hatte der Velociraptor an jeder Hand?",
          nl: "Hoeveel vingers had Velociraptor aan elke hand?"
        },
        options: [
          { en: "Three functional fingers with claws", es: "Tres dedos funcionales con garras", de: "Drei funktionelle Finger mit Krallen", nl: "Drie functionele vingers met klauwen" },
          { en: "Five fingers like humans", es: "Cinco dedos como los humanos", de: "Fünf Finger wie Menschen", nl: "Vijf vingers zoals mensen" },
          { en: "Two large fingers", es: "Dos dedos grandes", de: "Zwei große Finger", nl: "Twee grote vingers" },
          { en: "Four equally-sized fingers", es: "Cuatro dedos de igual tamaño", de: "Vier gleichgroße Finger", nl: "Vier even grote vingers" }
        ],
        correct: 0,
        explanation: {
          en: "Velociraptor had three functional fingers on each hand, each ending in a sharp, curved claw. These claws were used for grasping prey and potentially climbing. The hands were quite large relative to body size.",
          es: "El Velociraptor tenía tres dedos funcionales en cada mano, cada uno terminando en una garra afilada y curvada. Estas garras se usaban para agarrar presas y potencialmente trepar. Las manos eran bastante grandes en relación al tamaño corporal.",
          de: "Der Velociraptor hatte drei funktionelle Finger an jeder Hand, die jeweils in einer scharfen, gebogenen Kralle endeten. Diese Krallen wurden zum Greifen von Beute und möglicherweise zum Klettern verwendet. Die Hände waren ziemlich groß im Verhältnis zur Körpergröße.",
          nl: "Velociraptor had drie functionele vingers aan elke hand, elk eindigend in een scherpe, gebogen klauw. Deze klauwen werden gebruikt voor het grijpen van prooien en mogelijk klimmen. De handen waren vrij groot ten opzichte van de lichaamsgrootte."
        }
      },
      {
        question: {
          en: "What type of social behavior is suggested by Velociraptor fossil evidence?",
          es: "¿Qué tipo de comportamiento social sugiere la evidencia fósil del Velociraptor?",
          de: "Welche Art von Sozialverhalten wird durch die Velociraptor-Fossilienbefunde nahegelegt?",
          nl: "Wat voor soort sociaal gedrag wordt gesuggereerd door Velociraptor fossiel bewijs?"
        },
        options: [
          { en: "Possibly pack hunting with coordinated group behavior", es: "Posiblemente caza en manada con comportamiento grupal coordinado", de: "Möglicherweise Rudeljagd mit koordiniertem Gruppenverhalten", nl: "Mogelijk roedeljacht met gecoördineerd groepsgedrag" },
          { en: "Strictly solitary hunters", es: "Cazadores estrictamente solitarios", de: "Streng einzelgängerische Jäger", nl: "Strikt eenzame jagers" },
          { en: "Only social during mating season", es: "Solo social durante la época de apareamiento", de: "Nur während der Paarungszeit sozial", nl: "Alleen sociaal tijdens het paarseizoen" },
          { en: "No evidence of any social behavior", es: "Sin evidencia de comportamiento social", de: "Kein Beweis für Sozialverhalten", nl: "Geen bewijs van enig sociaal gedrag" }
        ],
        correct: 0,
        explanation: {
          en: "Some fossil sites show multiple Velociraptor individuals preserved together, suggesting they may have hunted in coordinated groups or packs. However, this behavior is still debated among paleontologists.",
          es: "Algunos sitios fósiles muestran múltiples individuos de Velociraptor preservados juntos, sugiriendo que pudieron haber cazado en grupos coordinados o manadas. Sin embargo, este comportamiento aún es debatido entre paleontólogos.",
          de: "Einige Fossilstätten zeigen mehrere Velociraptor-Individuen, die zusammen erhalten sind, was darauf hindeutet, dass sie möglicherweise in koordinierten Gruppen oder Rudeln gejagt haben. Dieses Verhalten wird jedoch noch unter Paläontologen diskutiert.",
          nl: "Sommige fossiellocaties tonen meerdere Velociraptor individuen die samen bewaard zijn gebleven, wat suggereert dat ze mogelijk hebben gejaagd in gecoördineerde groepen of roedels. Dit gedrag wordt echter nog steeds bediscussieerd onder paleontologen."
        }
      },
      {
        question: {
          en: "What was the climate like during Velociraptor's time period?",
          es: "¿Cómo era el clima durante el período de tiempo del Velociraptor?",
          de: "Wie war das Klima während der Zeit des Velociraptors?",
          nl: "Hoe was het klimaat tijdens Velociraptor's tijdperiode?"
        },
        options: [
          { en: "Hot and arid with seasonal rainfall", es: "Caliente y árido con lluvia estacional", de: "Heiß und trocken mit saisonalen Niederschlägen", nl: "Heet en droog met seizoensgebonden regenval" },
          { en: "Cold and icy like modern Arctic", es: "Frío y helado como el Ártico moderno", de: "Kalt und eisig wie die moderne Arktis", nl: "Koud en ijzig zoals de moderne Arctis" },
          { en: "Tropical and humid year-round", es: "Tropical y húmedo todo el año", de: "Tropisch und feucht das ganze Jahr", nl: "Tropisch en vochtig het hele jaar door" },
          { en: "Temperate with four distinct seasons", es: "Templado con cuatro estaciones distintas", de: "Gemäßigt mit vier deutlichen Jahreszeiten", nl: "Gematigd met vier verschillende seizoenen" }
        ],
        correct: 0,
        explanation: {
          en: "During the Late Cretaceous, Velociraptor's habitat in Central Asia was characterized by hot, arid conditions with seasonal rainfall. This created a challenging environment with periodic droughts and flash floods.",
          es: "Durante el Cretácico tardío, el hábitat del Velociraptor en Asia Central se caracterizaba por condiciones calientes y áridas con lluvia estacional. Esto creaba un ambiente desafiante con sequías periódicas e inundaciones repentinas.",
          de: "Während der späten Kreidezeit war der Lebensraum des Velociraptors in Zentralasien von heißen, trockenen Bedingungen mit saisonalen Niederschlägen geprägt. Dies schuf eine herausfordernde Umgebung mit periodischen Dürren und Sturzfluten.",
          nl: "Tijdens het Laat Krijt werd Velociraptor's habitat in Centraal-Azië gekenmerkt door hete, droge omstandigheden met seizoensgebonden regenval. Dit creëerde een uitdagende omgeving met periodieke droogtes en plotselinge overstromingen."
        }
      },
      {
        question: {
          en: "How did Velociraptor's bone structure compare to modern birds?",
          es: "¿Cómo se comparaba la estructura ósea del Velociraptor con las aves modernas?",
          de: "Wie verglich sich die Knochenstruktur des Velociraptors mit modernen Vögeln?",
          nl: "Hoe vergeleek Velociraptor's botstructuur met moderne vogels?"
        },
        options: [
          { en: "Hollow bones similar to birds for lightweight structure", es: "Huesos huecos similares a las aves para estructura ligera", de: "Hohle Knochen ähnlich Vögeln für leichte Struktur", nl: "Holle botten vergelijkbaar met vogels voor lichtgewicht structuur" },
          { en: "Dense, solid bones like modern reptiles", es: "Huesos densos y sólidos como reptiles modernos", de: "Dichte, solide Knochen wie moderne Reptilien", nl: "Dichte, solide botten zoals moderne reptielen" },
          { en: "Cartilage instead of bone like sharks", es: "Cartílago en lugar de hueso como tiburones", de: "Knorpel statt Knochen wie Haie", nl: "Kraakbeen in plaats van bot zoals haaien" },
          { en: "Completely unique bone structure unlike any living animal", es: "Estructura ósea completamente única diferente a cualquier animal vivo", de: "Völlig einzigartige Knochenstruktur anders als jedes lebende Tier", nl: "Volledig unieke botstructuur anders dan enig levend dier" }
        ],
        correct: 0,
        explanation: {
          en: "Like modern birds, Velociraptor had hollow, air-filled bones called pneumatic bones. This adaptation made their skeleton lighter while maintaining strength, allowing for more efficient movement and possibly supporting metabolically active lifestyles.",
          es: "Como las aves modernas, el Velociraptor tenía huesos huecos llenos de aire llamados huesos neumáticos. Esta adaptación hizo que su esqueleto fuera más ligero mientras mantenía la fuerza, permitiendo movimiento más eficiente y posiblemente apoyando estilos de vida metabólicamente activos.",
          de: "Wie moderne Vögel hatte der Velociraptor hohle, luftgefüllte Knochen, die pneumatische Knochen genannt werden. Diese Anpassung machte ihr Skelett leichter, während die Festigkeit erhalten blieb, was effizientere Bewegungen und möglicherweise metabolisch aktive Lebensweisen unterstützte.",
          nl: "Net als moderne vogels had Velociraptor holle, luchtgevulde botten genaamd pneumatische botten. Deze aanpassing maakte hun skelet lichter terwijl de sterkte behouden bleef, wat efficiëntere beweging mogelijk maakte en mogelijk metabolisch actieve levensstijlen ondersteunde."
        }
      },
      {
        question: {
          en: "What evidence suggests Velociraptor was warm-blooded rather than cold-blooded?",
          es: "¿Qué evidencia sugiere que el Velociraptor era de sangre caliente en lugar de sangre fría?",
          de: "Welche Beweise deuten darauf hin, dass der Velociraptor warmblütig statt kaltblütig war?",
          nl: "Welk bewijs suggereert dat Velociraptor warmbloedig was in plaats van koudbloedig?"
        },
        options: [
          { en: "Feathers, active lifestyle, and bone histology", es: "Plumas, estilo de vida activo e histología ósea", de: "Federn, aktiver Lebensstil und Knochenhistologie", nl: "Veren, actieve levensstijl en bothistologie" },
          { en: "They lived in cold climates only", es: "Solo vivían en climas fríos", de: "Sie lebten nur in kalten Klimazonen", nl: "Ze leefden alleen in koude klimaten" },
          { en: "Large size requiring internal heat regulation", es: "Gran tamaño requiriendo regulación interna del calor", de: "Große Größe, die interne Wärmeregulierung erfordert", nl: "Grote omvang die interne warmteregulatie vereist" },
          { en: "No evidence supports warm-bloodedness", es: "Ninguna evidencia apoya la sangre caliente", de: "Keine Beweise unterstützen Warmblütigkeit", nl: "Geen bewijs ondersteunt warmbloedigheid" }
        ],
        correct: 0,
        explanation: {
          en: "Multiple lines of evidence suggest Velociraptor was warm-blooded (endothermic): feathers for insulation, evidence of active predatory behavior, bone histology showing rapid growth rates, and close evolutionary relationship to birds.",
          es: "Múltiples líneas de evidencia sugieren que el Velociraptor era de sangre caliente (endotérmico): plumas para aislamiento, evidencia de comportamiento depredador activo, histología ósea mostrando tasas de crecimiento rápido, y estrecha relación evolutiva con las aves.",
          de: "Mehrere Beweislinien deuten darauf hin, dass der Velociraptor warmblütig (endotherm) war: Federn zur Isolation, Beweis für aktives Raubverhalten, Knochenhistologie mit schnellen Wachstumsraten und enge evolutionäre Verwandtschaft zu Vögeln.",
          nl: "Meerdere bewijslijnen suggereren dat Velociraptor warmbloedig (endotherm) was: veren voor isolatie, bewijs van actief roofgedrag, bothistologie die snelle groeisnelheden toont, en nauwe evolutionaire verwantschap met vogels."
        }
      },
      {
        question: {
          en: "What was the primary function of Velociraptor's wishbone (furcula)?",
          es: "¿Cuál era la función principal del hueso de la suerte del Velociraptor (furcula)?",
          de: "Was war die Hauptfunktion des Gabelbeins (Furcula) des Velociraptors?",
          nl: "Wat was de primaire functie van Velociraptor's wishbone (furcula)?"
        },
        options: [
          { en: "Structural support for powerful arm muscles during prey capture", es: "Soporte estructural para músculos poderosos del brazo durante la captura de presas", de: "Strukturelle Unterstützung für kraftvolle Armmuskeln bei der Beuteerfassung", nl: "Structurele ondersteuning voor krachtige armspieren tijdens prooivangst" },
          { en: "Sound production for communication", es: "Producción de sonido para comunicación", de: "Schallerzeugung zur Kommunikation", nl: "Geluidsproductie voor communicatie" },
          { en: "Storage of calcium for bone growth", es: "Almacenamiento de calcio para crecimiento óseo", de: "Calciumspeicherung für Knochenwachstum", nl: "Opslag van calcium voor botgroei" },
          { en: "Protection of vital organs", es: "Protección de órganos vitales", de: "Schutz lebenswichtiger Organe", nl: "Bescherming van vitale organen" }
        ],
        correct: 0,
        explanation: {
          en: "The furcula (wishbone) in Velociraptor served as a crucial anchor point for powerful pectoral muscles, providing the structural support needed for forceful arm movements during prey capture and manipulation.",
          es: "La furcula (hueso de la suerte) en el Velociraptor servía como punto de anclaje crucial para músculos pectorales poderosos, proporcionando el soporte estructural necesario para movimientos de brazo forzados durante la captura y manipulación de presas.",
          de: "Die Furcula (Gabelbein) beim Velociraptor diente als entscheidender Ankerpoint für kraftvolle Brustmuskeln und bot die strukturelle Unterstützung, die für kraftvolle Armbewegungen bei Beuteerfassung und -manipulation erforderlich war.",
          nl: "De furcula (wishbone) in Velociraptor diende als cruciale verankeringspunt voor krachtige borstspieren, wat de structurele ondersteuning bood die nodig was voor krachtige armbewegingen tijdens prooivangst en manipulatie."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();