// Jurassic Dinosaurs Quiz - Level 4
(function() {
  const level4 = {
    name: {
          "en": "Jurassic Dinosaurs Level 4",
          "es": "Dinosaurios Jurásicos Nivel 4",
          "de": "Jura Dinosaurier Stufe 4",
          "nl": "Jura Dino's Level 4"
    },
    questions: [
      {
        question: {
                  "en": "What is the stratigraphic sequence of the Jurassic period from oldest to youngest?",
                  "es": "¿Cuál es la secuencia estratigráfica del período Jurásico de más viejo a más joven?",
                  "de": "Was ist die stratigraphische Abfolge der Jurazeit von ältesten zum jüngsten?",
                  "nl": "Wat is de stratigrafische volgorde van het Jura-tijdperk van oudst naar jongst?"
        },
        options: [
        {
                  "en": "Pre, Proto, Neo Jurassic",
                  "es": "Pre, Proto, Neo Jurásico",
                  "de": "Prä, Proto, Neo Jura",
                  "nl": "Pre, Proto, Neo Jura"
        },
        {
                  "en": "Late, Middle, Early Jurassic",
                  "es": "Jurásico Tardío, Medio, Temprano",
                  "de": "Später, Mittlerer, Früher Jura",
                  "nl": "Laat, Midden, Vroeg Jura"
        },
        {
                  "en": "Lower, Upper, Middle Jurassic",
                  "es": "Jurásico Inferior, Superior, Medio",
                  "de": "Unterer, Oberer, Mittlerer Jura",
                  "nl": "Onder, Boven, Midden Jura"
        },
        {
                  "en": "Early, Middle, Late Jurassic",
                  "es": "Jurásico Temprano, Medio, Tardío",
                  "de": "Früher, Mittlerer, Später Jura",
                  "nl": "Vroeg, Midden, Laat Jura"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Jurassic period is divided into Early (201-174 Ma), Middle (174-163 Ma), and Late (163-145 Ma) epochs.",
                  "es": "El período Jurásico se divide en épocas Temprana (201-174 Ma), Media (174-163 Ma) y Tardía (163-145 Ma).",
                  "de": "Die Jurazeit ist in Frühjura (201-174 Ma), Mitteljura (174-163 Ma) und Spätjura (163-145 Ma) unterteilt.",
                  "nl": "Het Jura-tijdperk is verdeeld in Vroeg (201-174 Ma), Midden (174-163 Ma) en Laat (163-145 Ma) tijdvakken."
        }
      },
      {
        question: {
                  "en": "What was the cranial capacity relationship between Allosaurus and modern big cats?",
                  "es": "¿Cuál era la relación de capacidad craneal entre Allosaurus y los grandes felinos modernos?",
                  "de": "Wie war das Verhältnis der Schädelkapazität zwischen Allosaurus und modernen Großkatzen?",
                  "nl": "Wat was de schedelholteverhouding tussen Allosaurus en moderne grote katten?"
        },
        options: [
        {
                  "en": "No brain cavity at all",
                  "es": "Sin cavidad cerebral en absoluto",
                  "de": "Gar keine Gehirnhöhle",
                  "nl": "Helemaal geen hersenholte"
        },
        {
                  "en": "Similar brain-to-body ratio to crocodiles",
                  "es": "Proporción cerebro-cuerpo similar a los cocodrilos",
                  "de": "Ähnliches Gehirn-Körper-Verhältnis wie Krokodile",
                  "nl": "Vergelijkbare hersenlichaamverhouding als krokodillen"
        },
        {
                  "en": "Much larger brain than expected",
                  "es": "Cerebro mucho más grande de lo esperado",
                  "de": "Viel größeres Gehirn als erwartet",
                  "nl": "Veel groter brein dan verwacht"
        },
        {
                  "en": "Same size brain as humans",
                  "es": "Cerebro del mismo tamaño que los humanos",
                  "de": "Gleich große Gehirn wie Menschen",
                  "nl": "Even groot brein als mensen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Allosaurus had a brain-to-body ratio similar to modern crocodilians, indicating moderate intelligence for a large predatory dinosaur.",
                  "es": "Allosaurus tenía una proporción cerebro-cuerpo similar a los cocodrilos modernos, indicando inteligencia moderada para un gran dinosaurio depredador.",
                  "de": "Allosaurus hatte ein Gehirn-Körper-Verhältnis ähnlich modernen Krokodilen, was moderate Intelligenz für einen großen Raubdinosaurier anzeigt.",
                  "nl": "Allosaurus had een hersenlichaamverhouding vergelijkbaar met moderne krokodilachtigen, wat duidt op gematigde intelligentie voor een grote roofdierdinosaurus."
        }
      },
      {
        question: {
                  "en": "Which biomechanical advantage did Diplodocus gain from its hollow vertebrae?",
                  "es": "¿Qué ventaja biomecánica obtuvo Diplodocus de sus vértebras huecas?",
                  "de": "Welchen biomechanischen Vorteil erhielt Diplodocus durch seine hohlen Wirbel?",
                  "nl": "Welk biomechanisch voordeel behaalde Diplodocus uit zijn holle wervels?"
        },
        options: [
        {
                  "en": "Reduced weight without sacrificing strength",
                  "es": "Peso reducido sin sacrificar resistencia",
                  "de": "Reduziertes Gewicht ohne Stärkeverlust",
                  "nl": "Verminderd gewicht zonder krachtverlies"
        },
        {
                  "en": "Better swimming ability",
                  "es": "Mejor capacidad de natación",
                  "de": "Bessere Schwimmfähigkeit",
                  "nl": "Beter zwemvermogen"
        },
        {
                  "en": "Enhanced hearing capabilities",
                  "es": "Capacidades auditivas mejoradas",
                  "de": "Verbesserte Hörfähigkeiten",
                  "nl": "Verbeterde hoorcapaciteiten"
        },
        {
                  "en": "Temperature regulation only",
                  "es": "Solo regulación de temperatura",
                  "de": "Nur Temperaturregulierung",
                  "nl": "Alleen temperatuurregulatie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Pneumatic (hollow) vertebrae reduced skeletal weight by up to 15% while maintaining structural integrity, crucial for such massive animals.",
                  "es": "Las vértebras neumáticas (huecas) redujeron el peso esquelético hasta un 15% mientras mantenían la integridad estructural, crucial para animales tan masivos.",
                  "de": "Pneumatische (hohle) Wirbel reduzierten das Skelettgewicht um bis zu 15% bei Erhaltung der strukturellen Integrität, entscheidend für so massive Tiere.",
                  "nl": "Pneumatische (holle) wervels verminderden het skeletgewicht met tot 15% terwijl de structurele integriteit behouden bleef, cruciaal voor zulke massieve dieren."
        }
      },
      {
        question: {
                  "en": "What is the estimated bite force of Allosaurus compared to modern predators?",
                  "es": "¿Cuál es la fuerza de mordida estimada de Allosaurus comparada con depredadores modernos?",
                  "de": "Wie ist die geschätzte Beißkraft von Allosaurus im Vergleich zu modernen Raubtieren?",
                  "nl": "Wat is de geschatte bijtkracht van Allosaurus vergeleken met moderne roofdieren?"
        },
        options: [
        {
                  "en": "10,000 N (like great white sharks)",
                  "es": "10,000 N (como tiburones blancos)",
                  "de": "10,000 N (wie Weiße Haie)",
                  "nl": "10,000 N (zoals witte haaien)"
        },
        {
                  "en": "100 N (like house cats)",
                  "es": "100 N (como gatos domésticos)",
                  "de": "100 N (wie Hauskatzen)",
                  "nl": "100 N (zoals huiskatten)"
        },
        {
                  "en": "1,500-3,000 N (similar to large crocodiles)",
                  "es": "1,500-3,000 N (similar a grandes cocodrilos)",
                  "de": "1,500-3,000 N (ähnlich großen Krokodilen)",
                  "nl": "1,500-3,000 N (vergelijkbaar met grote krokodillen)"
        },
        {
                  "en": "50,000 N (like T. rex)",
                  "es": "50,000 N (como T. rex)",
                  "de": "50,000 N (wie T. rex)",
                  "nl": "50,000 N (zoals T. rex)"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Allosaurus had a bite force of approximately 1,500-3,000 Newtons, comparable to large modern crocodiles but much less than T. rex.",
                  "es": "Allosaurus tenía una fuerza de mordida de aproximadamente 1,500-3,000 Newtons, comparable a grandes cocodrilos modernos pero mucho menos que T. rex.",
                  "de": "Allosaurus hatte eine Beißkraft von etwa 1,500-3,000 Newton, vergleichbar mit großen modernen Krokodilen aber viel weniger als T. rex.",
                  "nl": "Allosaurus had een bijtkracht van ongeveer 1,500-3,000 Newton, vergelijkbaar met grote moderne krokodillen maar veel minder dan T. rex."
        }
      },
      {
        question: {
                  "en": "What sedimentological evidence indicates the Jurassic climate in the Morrison Formation?",
                  "es": "¿Qué evidencia sedimentológica indica el clima jurásico en la Formación Morrison?",
                  "de": "Welche sedimentologischen Beweise zeigen das Jura-Klima in der Morrison-Formation?",
                  "nl": "Welk sedimentologisch bewijs wijst op het Jura-klimaat in de Morrison Formatie?"
        },
        options: [
        {
                  "en": "Paleosols and mudstone deposits indicating seasonal wet-dry cycles",
                  "es": "Paleosuelos y depósitos de lutita indicando ciclos estacionales húmedo-seco",
                  "de": "Paläoböden und Schlammstein-Ablagerungen zeigen saisonale Nass-Trocken-Zyklen",
                  "nl": "Paleosolen en moddersteen afzettingen die seizoensgebonden nat-droog cycli aangeven"
        },
        {
                  "en": "Volcanic ash layers exclusively",
                  "es": "Exclusivamente capas de ceniza volcánica",
                  "de": "Ausschließlich vulkanische Ascheschichten",
                  "nl": "Uitsluitend vulkanische aslagen"
        },
        {
                  "en": "Glacial deposits and ice sheets",
                  "es": "Depósitos glaciales y capas de hielo",
                  "de": "Glaziale Ablagerungen und Eisschichten",
                  "nl": "Glaciale afzettingen en ijskappen"
        },
        {
                  "en": "Deep marine limestone only",
                  "es": "Solo caliza marina profunda",
                  "de": "Nur tiefmarine Kalksteine",
                  "nl": "Alleen diepzeelimesteen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Morrison Formation shows paleosols and mudstone indicating alternating wet and dry seasons in a semi-arid climate with seasonal monsoons.",
                  "es": "La Formación Morrison muestra paleosuelos y lutitas indicando estaciones húmedas y secas alternantes en un clima semiárido con monzones estacionales.",
                  "de": "Die Morrison-Formation zeigt Paläoböden und Schlammstein, die abwechselnde Nass- und Trockenzeiten in einem semiariden Klima mit saisonalen Monsunen anzeigen.",
                  "nl": "De Morrison Formatie toont paleosolen en moddersteen die alternerende natte en droge seizoenen aangeven in een semi-aride klimaat met seizoensgebonden moessons."
        }
      },
      {
        question: {
                  "en": "What is the phylogenetic relationship between Ceratosaurus and Allosaurus?",
                  "es": "¿Cuál es la relación filogenética entre Ceratosaurus y Allosaurus?",
                  "de": "Was ist die phylogenetische Beziehung zwischen Ceratosaurus und Allosaurus?",
                  "nl": "Wat is de fylogenetische relatie tussen Ceratosaurus en Allosaurus?"
        },
        options: [
        {
                  "en": "Same genus, different species",
                  "es": "Mismo género, especies diferentes",
                  "de": "Gleiche Gattung, verschiedene Arten",
                  "nl": "Hetzelfde geslacht, verschillende soorten"
        },
        {
                  "en": "Different theropod families (Ceratosauridae vs Allosauridae)",
                  "es": "Diferentes familias de terópodos (Ceratosauridae vs Allosauridae)",
                  "de": "Verschiedene Theropoden-Familien (Ceratosauridae vs Allosauridae)",
                  "nl": "Verschillende theropode families (Ceratosauridae vs Allosauridae)"
        },
        {
                  "en": "Same species, different sexes",
                  "es": "Misma especie, sexos diferentes",
                  "de": "Gleiche Art, verschiedene Geschlechter",
                  "nl": "Zelfde soort, verschillende geslachten"
        },
        {
                  "en": "Parent-offspring relationship",
                  "es": "Relación padre-descendiente",
                  "de": "Eltern-Nachkommen-Beziehung",
                  "nl": "Ouder-nakomelingenrelatie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Ceratosaurus belongs to Ceratosauridae while Allosaurus belongs to Allosauridae, representing different evolutionary lineages within Theropoda.",
                  "es": "Ceratosaurus pertenece a Ceratosauridae mientras que Allosaurus pertenece a Allosauridae, representando diferentes linajes evolutivos dentro de Theropoda.",
                  "de": "Ceratosaurus gehört zu den Ceratosauridae, während Allosaurus zu den Allosauridae gehört, was verschiedene evolutionäre Linien innerhalb der Theropoda darstellt.",
                  "nl": "Ceratosaurus behoort tot Ceratosauridae terwijl Allosaurus behoort tot Allosauridae, wat verschillende evolutionaire lijnen binnen Theropoda vertegenwoordigt."
        }
      },
      {
        question: {
                  "en": "What was the metabolic strategy of large sauropods like Brachiosaurus?",
                  "es": "¿Cuál era la estrategia metabólica de grandes saurópodos como Brachiosaurus?",
                  "de": "Was war die Stoffwechselstrategie großer Sauropoden wie Brachiosaurus?",
                  "nl": "Wat was de metabolische strategie van grote sauropoden zoals Brachiosaurus?"
        },
        options: [
        {
                  "en": "Mesothermic (intermediate between warm and cold-blooded)",
                  "es": "Mesotérmico (intermedio entre sangre caliente y fría)",
                  "de": "Mesotherm (zwischen warm- und kaltblütig)",
                  "nl": "Mesotherm (tussen warm- en koudbloedig)"
        },
        {
                  "en": "Fully endothermic like modern mammals",
                  "es": "Completamente endotérmico como mamíferos modernos",
                  "de": "Vollständig endotherm wie moderne Säugetiere",
                  "nl": "Volledig endotherm zoals moderne zoogdieren"
        },
        {
                  "en": "Fully ectothermic like modern reptiles",
                  "es": "Completamente ectotérmico como reptiles modernos",
                  "de": "Vollständig ektotherm wie moderne Reptilien",
                  "nl": "Volledig ectotherm zoals moderne reptielen"
        },
        {
                  "en": "No metabolic regulation",
                  "es": "Sin regulación metabólica",
                  "de": "Keine Stoffwechselregulierung",
                  "nl": "Geen metabolische regulatie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Large sauropods likely had mesothermic metabolism, maintaining stable body temperature through mass homeothermy and behavioral thermoregulation.",
                  "es": "Los grandes saurópodos probablemente tenían metabolismo mesotérmico, manteniendo temperatura corporal estable através de homeotermia de masa y termorregulación conductual.",
                  "de": "Große Sauropoden hatten wahrscheinlich mesothermen Stoffwechsel und hielten stabile Körpertemperatur durch Massenhomeothermie und Verhaltensthermoregulation.",
                  "nl": "Grote sauropoden hadden waarschijnlijk mesotherm metabolisme, waarbij ze stabiele lichaamstemperatuur behielden door massa-homeothermie en gedragsthermoregulatie."
        }
      },
      {
        question: {
                  "en": "What anatomical feature distinguishes Kentrosaurus from other stegosaurids?",
                  "es": "¿Qué característica anatómica distingue a Kentrosaurus de otros estegosáuridos?",
                  "de": "Welches anatomische Merkmal unterscheidet Kentrosaurus von anderen Stegosauriden?",
                  "nl": "Welk anatomisch kenmerk onderscheidt Kentrosaurus van andere stegosauriden?"
        },
        options: [
        {
                  "en": "Much larger size than other stegosaurs",
                  "es": "Tamaño mucho más grande que otros estegosaurios",
                  "de": "Viel größere Größe als andere Stegosaurier",
                  "nl": "Veel grotere grootte dan andere stegosaurussen"
        },
        {
                  "en": "Complete absence of plates",
                  "es": "Ausencia completa de placas",
                  "de": "Völlige Abwesenheit von Platten",
                  "nl": "Volledige afwezigheid van platen"
        },
        {
                  "en": "Transition from plates to spines along the back",
                  "es": "Transición de placas a espinas a lo largo de la espalda",
                  "de": "Übergang von Platten zu Stacheln entlang des Rückens",
                  "nl": "Overgang van platen naar stekels langs de rug"
        },
        {
                  "en": "Bipedal locomotion",
                  "es": "Locomoción bípeda",
                  "de": "Zweibeinige Fortbewegung",
                  "nl": "Bipede voortbeweging"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Kentrosaurus uniquely shows a gradual transition from plates on the neck and front back to spines on the rear back and tail.",
                  "es": "Kentrosaurus muestra únicamente una transición gradual de placas en el cuello y espalda frontal a espinas en la espalda posterior y cola.",
                  "de": "Kentrosaurus zeigt einzigartig einen graduellen Übergang von Platten am Hals und vorderen Rücken zu Stacheln am hinteren Rücken und Schwanz.",
                  "nl": "Kentrosaurus toont uniek een geleidelijke overgang van platen op de nek en voorrug naar stekels op de achterrug en staart."
        }
      },
      {
        question: {
                  "en": "What was the estimated daily food intake of an adult Diplodocus?",
                  "es": "¿Cuál era la ingesta diaria estimada de alimento de un Diplodocus adulto?",
                  "de": "Was war die geschätzte tägliche Nahrungsaufnahme eines erwachsenen Diplodocus?",
                  "nl": "Wat was de geschatte dagelijkse voedselinname van een volwassen Diplodocus?"
        },
        options: [
        {
                  "en": "10-20 kg (22-44 lbs)",
                  "es": "10-20 kg (22-44 lbs)",
                  "de": "10-20 kg (22-44 lbs)",
                  "nl": "10-20 kg (22-44 lbs)"
        },
        {
                  "en": "50-100 kg (110-220 lbs)",
                  "es": "50-100 kg (110-220 lbs)",
                  "de": "50-100 kg (110-220 lbs)",
                  "nl": "50-100 kg (110-220 lbs)"
        },
        {
                  "en": "400-500 kg (880-1100 lbs) of plant matter",
                  "es": "400-500 kg (880-1100 lbs) de materia vegetal",
                  "de": "400-500 kg (880-1100 lbs) Pflanzenmaterial",
                  "nl": "400-500 kg (880-1100 lbs) plantenmateriaal"
        },
        {
                  "en": "1000-2000 kg (2200-4400 lbs)",
                  "es": "1000-2000 kg (2200-4400 lbs)",
                  "de": "1000-2000 kg (2200-4400 lbs)",
                  "nl": "1000-2000 kg (2200-4400 lbs)"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Adult Diplodocus required approximately 400-500 kg of plant matter daily, similar to the food needs of several modern elephants combined.",
                  "es": "Diplodocus adulto requería aproximadamente 400-500 kg de materia vegetal diariamente, similar a las necesidades alimentarias de varios elefantes modernos combinados.",
                  "de": "Erwachsener Diplodocus benötigte etwa 400-500 kg Pflanzenmaterial täglich, ähnlich dem Nahrungsbedarf mehrerer moderner Elefanten zusammen.",
                  "nl": "Volwassen Diplodocus had ongeveer 400-500 kg plantenmateriaal per dag nodig, vergelijkbaar met de voedselbehoeften van meerdere moderne olifanten samen."
        }
      },
      {
        question: {
                  "en": "What taphonomic processes affected Jurassic dinosaur fossil preservation?",
                  "es": "¿Qué procesos tafonómicos afectaron la preservación de fósiles de dinosaurios jurásicos?",
                  "de": "Welche taphonomischen Prozesse beeinflussten die Erhaltung von Jura-Dinosaurier-Fossilien?",
                  "nl": "Welke tafonomische processen beïnvloedden de bewaring van Jura-dinosaurusfossielen?"
        },
        options: [
        {
                  "en": "Volcanic ash preservation only",
                  "es": "Solo preservación por ceniza volcánica",
                  "de": "Nur Konservierung durch Vulkanasche",
                  "nl": "Alleen bewaring door vulkanische as"
        },
        {
                  "en": "Permafrost freezing",
                  "es": "Congelación de permafrost",
                  "de": "Permafrost-Einfrierung",
                  "nl": "Permafrost bevriezing"
        },
        {
                  "en": "Marine limestone entombment",
                  "es": "Enterramiento en caliza marina",
                  "de": "Marine Kalkstein-Einbettung",
                  "nl": "Zeelimesteen insluiting"
        },
        {
                  "en": "Rapid burial in floodplain sediments",
                  "es": "Enterramiento rápido en sedimentos de llanura de inundación",
                  "de": "Schnelle Begrabung in Überschwemmungsgebiet-Sedimenten",
                  "nl": "Snelle begraving in rivierdalafzettingen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Most Jurassic dinosaur fossils were preserved through rapid burial in floodplain sediments during seasonal floods and river channel migrations.",
                  "es": "La mayoría de los fósiles de dinosaurios jurásicos se preservaron através de enterramiento rápido en sedimentos de llanura de inundación durante inundaciones estacionales y migraciones de canales de río.",
                  "de": "Die meisten Jura-Dinosaurier-Fossilien wurden durch schnelle Begrabung in Überschwemmungsgebiet-Sedimenten während saisonaler Fluten und Flussbett-Wanderungen konserviert.",
                  "nl": "De meeste Jura-dinosaurusfossielen werden bewaard door snelle begraving in rivierdalafzettingen tijdens seizoensgebonden overstromingen en rivierkanaalmigraties."
        }
      },
      {
        question: {
                  "en": "What was the estimated top speed of Compsognathus during pursuit hunting?",
                  "es": "¿Cuál era la velocidad máxima estimada de Compsognathus durante la caza de persecución?",
                  "de": "Was war die geschätzte Höchstgeschwindigkeit von Compsognathus während der Verfolgungsjagd?",
                  "nl": "Wat was de geschatte topsnelheid van Compsognathus tijdens achtervolgingsjacht?"
        },
        options: [
        {
                  "en": "40-50 km/h (25-31 mph)",
                  "es": "40-50 km/h (25-31 mph)",
                  "de": "40-50 km/h (25-31 mph)",
                  "nl": "40-50 km/h (25-31 mph)"
        },
        {
                  "en": "5-10 km/h (3-6 mph)",
                  "es": "5-10 km/h (3-6 mph)",
                  "de": "5-10 km/h (3-6 mph)",
                  "nl": "5-10 km/h (3-6 mph)"
        },
        {
                  "en": "80-100 km/h (50-62 mph)",
                  "es": "80-100 km/h (50-62 mph)",
                  "de": "80-100 km/h (50-62 mph)",
                  "nl": "80-100 km/h (50-62 mph)"
        },
        {
                  "en": "15-20 km/h (9-12 mph)",
                  "es": "15-20 km/h (9-12 mph)",
                  "de": "15-20 km/h (9-12 mph)",
                  "nl": "15-20 km/h (9-12 mph)"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Biomechanical analysis suggests Compsognathus could reach speeds of 40-50 km/h, making it one of the fastest small dinosaurs.",
                  "es": "El análisis biomecánico sugiere que Compsognathus podía alcanzar velocidades de 40-50 km/h, convirtiéndolo en uno de los pequeños dinosaurios más rápidos.",
                  "de": "Biomechanische Analysen deuten darauf hin, dass Compsognathus Geschwindigkeiten von 40-50 km/h erreichen konnte, was ihn zu einem der schnellsten kleinen Dinosaurier machte.",
                  "nl": "Biomechanische analyse suggereert dat Compsognathus snelheden van 40-50 km/h kon bereiken, waardoor het een van de snelste kleine dinosaurussen was."
        }
      },
      {
        question: {
                  "en": "What was the functional morphology of Stegosaurus tail spikes?",
                  "es": "¿Cuál era la morfología funcional de las púas de la cola de Stegosaurus?",
                  "de": "Was war die funktionelle Morphologie der Stegosaurus-Schwanzstacheln?",
                  "nl": "Wat was de functionele morfologie van Stegosaurus staartstekels?"
        },
        options: [
        {
                  "en": "Sound production organs",
                  "es": "Órganos de producción de sonido",
                  "de": "Schallerzeugungsorgane",
                  "nl": "Geluidsproductie organen"
        },
        {
                  "en": "Lateral weapon delivery system with flexible tail base",
                  "es": "Sistema de entrega de armas laterales con base de cola flexible",
                  "de": "Seitliches Waffenabgabesystem mit flexiblem Schwanzansatz",
                  "nl": "Lateraal wapenafgiftesysteem met flexibele staartbasis"
        },
        {
                  "en": "Vertical display structures only",
                  "es": "Solo estructuras de exhibición vertical",
                  "de": "Nur vertikale Anzeigestrukturen",
                  "nl": "Alleen verticale vertoningsstructuren"
        },
        {
                  "en": "Heat regulation fins",
                  "es": "Aletas de regulación de calor",
                  "de": "Wärmeregulierungsflossen",
                  "nl": "Warmteregulatie vinnen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The thagomizer functioned as a lateral weapon system, with the flexible tail base allowing powerful sideways strikes against predators.",
                  "es": "El thagomizer funcionaba como un sistema de armas laterales, con la base flexible de la cola permitiendo golpes laterales poderosos contra depredadores.",
                  "de": "Der Thagomizer funktionierte als seitliches Waffensystem, wobei der flexible Schwanzansatz kraftvolle seitliche Schläge gegen Raubtiere ermöglichte.",
                  "nl": "De thagomizer functioneerde als een lateraal wapensysteem, waarbij de flexibele staartbasis krachtige zijwaartse slagen tegen roofdieren mogelijk maakte."
        }
      },
      {
        question: {
                  "en": "What was the estimated lung capacity of Brachiosaurus?",
                  "es": "¿Cuál era la capacidad pulmonar estimada de Brachiosaurus?",
                  "de": "Was war die geschätzte Lungenkapazität von Brachiosaurus?",
                  "nl": "Wat was de geschatte longcapaciteit van Brachiosaurus?"
        },
        options: [
        {
                  "en": "10,000+ liters",
                  "es": "10,000+ litros",
                  "de": "10,000+ Liter",
                  "nl": "10,000+ liter"
        },
        {
                  "en": "100-200 liters like modern mammals",
                  "es": "100-200 litros como mamíferos modernos",
                  "de": "100-200 Liter wie moderne Säugetiere",
                  "nl": "100-200 liter zoals moderne zoogdieren"
        },
        {
                  "en": "No functional lungs",
                  "es": "Sin pulmones funcionales",
                  "de": "Keine funktionellen Lungen",
                  "nl": "Geen functionele longen"
        },
        {
                  "en": "3,000-4,000 liters with efficient air sac system",
                  "es": "3,000-4,000 litros con sistema eficiente de sacos aéreos",
                  "de": "3,000-4,000 Liter mit effizientem Luftsacksystem",
                  "nl": "3,000-4,000 liter met efficiënt luchtzaksysteem"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Brachiosaurus likely had massive lungs (3,000-4,000L) with an avian-like air sac system for efficient oxygen extraction at great heights.",
                  "es": "Brachiosaurus probablemente tenía pulmones masivos (3,000-4,000L) con un sistema de sacos aéreos similar a las aves para extracción eficiente de oxígeno a grandes alturas.",
                  "de": "Brachiosaurus hatte wahrscheinlich massive Lungen (3,000-4,000L) mit einem vogelähnlichen Luftsacksystem für effiziente Sauerstoffgewinnung in großen Höhen.",
                  "nl": "Brachiosaurus had waarschijnlijk massieve longen (3,000-4,000L) met een vogelachtig luchtzaksysteem voor efficiënte zuurstofextractie op grote hoogten."
        }
      },
      {
        question: {
                  "en": "What was the paleolatitudinal distribution of Morrison Formation deposits?",
                  "es": "¿Cuál era la distribución paleolatitudinal de los depósitos de la Formación Morrison?",
                  "de": "Was war die paläogeographische Verteilung der Morrison-Formation-Ablagerungen?",
                  "nl": "Wat was de paleolatitudinale verspreiding van Morrison Formatie afzettingen?"
        },
        options: [
        {
                  "en": "30-40°N paleolatitude in subtropical zone",
                  "es": "30-40°N paleolatitud en zona subtropical",
                  "de": "30-40°N Paläobreite in subtropischer Zone",
                  "nl": "30-40°N paleobreedte in subtropische zone"
        },
        {
                  "en": "High latitude 60-70°N",
                  "es": "Alta latitud 60-70°N",
                  "de": "Hohe Breite 60-70°N",
                  "nl": "Hoge breedte 60-70°N"
        },
        {
                  "en": "Equatorial 0-10°N",
                  "es": "Ecuatorial 0-10°N",
                  "de": "Äquatorial 0-10°N",
                  "nl": "Equatoriaal 0-10°N"
        },
        {
                  "en": "Southern hemisphere 30-40°S",
                  "es": "Hemisferio sur 30-40°S",
                  "de": "Südhalbkugel 30-40°S",
                  "nl": "Zuidelijk halfrond 30-40°S"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Morrison Formation was deposited at 30-40°N paleolatitude, placing it in a subtropical climate zone during the Late Jurassic.",
                  "es": "La Formación Morrison se depositó a 30-40°N paleolatitud, ubicándola en una zona climática subtropical durante el Jurásico Tardío.",
                  "de": "Die Morrison-Formation wurde bei 30-40°N Paläobreite abgelagert, was sie während des Späten Jura in eine subtropische Klimazone einordnet.",
                  "nl": "De Morrison Formatie werd afgezet op 30-40°N paleobreedte, waardoor het zich in een subtropische klimaatzone bevond tijdens het Laat-Jura."
        }
      },
      {
        question: {
                  "en": "What isotopic evidence supports Jurassic sauropod migration patterns?",
                  "es": "¿Qué evidencia isotópica apoya los patrones de migración de saurópodos jurásicos?",
                  "de": "Welche Isotopen-Beweise stützen Jura-Sauropoden-Wanderungsmuster?",
                  "nl": "Welk isotopisch bewijs ondersteunt Jura-sauropode migratiepatronen?"
        },
        options: [
        {
                  "en": "Oxygen isotope ratios in tooth enamel indicating seasonal movement",
                  "es": "Proporciones de isótopos de oxígeno en el esmalte dental indicando movimiento estacional",
                  "de": "Sauerstoff-Isotopenverhältnisse im Zahnschmelz zeigen saisonale Bewegung",
                  "nl": "Zuurstofisotopenverhoudingen in tandglazuur die seizoensgebonden beweging aangeven"
        },
        {
                  "en": "DNA sequence analysis",
                  "es": "Análisis de secuencia de ADN",
                  "de": "DNA-Sequenzanalyse",
                  "nl": "DNA-sequentieanalyse"
        },
        {
                  "en": "Radioactive decay measurements",
                  "es": "Mediciones de desintegración radioactiva",
                  "de": "Radioaktive Zerfallsmessungen",
                  "nl": "Radioactieve vervalmetingen"
        },
        {
                  "en": "Carbon dating of bone collagen",
                  "es": "Datación por carbono del colágeno óseo",
                  "de": "Kohlenstoffdatierung von Knochenkollagen",
                  "nl": "Koolstofdatering van botcollageen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Oxygen isotope analysis of sauropod tooth enamel reveals seasonal variations consistent with migration between different climate zones.",
                  "es": "El análisis de isótopos de oxígeno del esmalte dental de saurópodos revela variaciones estacionales consistentes con migración entre diferentes zonas climáticas.",
                  "de": "Sauerstoff-Isotopen-Analyse von Sauropoden-Zahnschmelz enthüllt saisonale Variationen, die mit Migration zwischen verschiedenen Klimazonen übereinstimmen.",
                  "nl": "Zuurstofisotopenanalyse van sauropode tandglazuur onthult seizoensgebonden variaties die consistent zijn met migratie tussen verschillende klimaatzones."
        }
      },
      {
        question: {
                  "en": "What was the taxonomic diversity of Jurassic theropods in terms of body size distribution?",
                  "es": "¿Cuál era la diversidad taxonómica de terópodos jurásicos en términos de distribución de tamaño corporal?",
                  "de": "Was war die taxonomische Vielfalt der Jura-Theropoden hinsichtlich der Körpergrößenverteilung?",
                  "nl": "Wat was de taxonomische diversiteit van Jura-theropoden in termen van lichaamsgrootteverdeling?"
        },
        options: [
        {
                  "en": "Only large predators existed",
                  "es": "Solo existían depredadores grandes",
                  "de": "Nur große Raubtiere existierten",
                  "nl": "Alleen grote roofdieren bestonden"
        },
        {
                  "en": "Bimodal distribution: small (1-50kg) and large (500-2000kg) forms",
                  "es": "Distribución bimodal: formas pequeñas (1-50kg) y grandes (500-2000kg)",
                  "de": "Bimodale Verteilung: kleine (1-50kg) und große (500-2000kg) Formen",
                  "nl": "Bimodale verdeling: kleine (1-50kg) en grote (500-2000kg) vormen"
        },
        {
                  "en": "Uniform size distribution",
                  "es": "Distribución de tamaño uniforme",
                  "de": "Gleichmäßige Größenverteilung",
                  "nl": "Uniforme grootteverdeling"
        },
        {
                  "en": "Normal bell curve distribution",
                  "es": "Distribución normal de curva de campana",
                  "de": "Normale Glockenkurven-Verteilung",
                  "nl": "Normale klokvormige verdeling"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Jurassic theropods show a bimodal size distribution with a gap in medium-sized forms, possibly due to ecological niche partitioning.",
                  "es": "Los terópodos jurásicos muestran una distribución de tamaño bimodal con una brecha en formas de tamaño medio, posiblemente debido a la partición de nichos ecológicos.",
                  "de": "Jura-Theropoden zeigen eine bimodale Größenverteilung mit einer Lücke bei mittelgroßen Formen, möglicherweise aufgrund ökologischer Nischenteilung.",
                  "nl": "Jura-theropoden tonen een bimodale grootteverdeling met een hiaat in middelgrote vormen, mogelijk door ecologische niche-verdeling."
        }
      },
      {
        question: {
                  "en": "What was the estimated population density of large sauropods in Jurassic ecosystems?",
                  "es": "¿Cuál era la densidad poblacional estimada de grandes saurópodos en ecosistemas jurásicos?",
                  "de": "Was war die geschätzte Populationsdichte großer Sauropoden in Jura-Ökosystemen?",
                  "nl": "Wat was de geschatte populatiedichtheid van grote sauropoden in Jura-ecosystemen?"
        },
        options: [
        {
                  "en": "50-100 individuals per km²",
                  "es": "50-100 individuos por km²",
                  "de": "50-100 Individuen pro km²",
                  "nl": "50-100 individuen per km²"
        },
        {
                  "en": "1000+ individuals per km²",
                  "es": "1000+ individuos por km²",
                  "de": "1000+ Individuen pro km²",
                  "nl": "1000+ individuen per km²"
        },
        {
                  "en": "Only 1 individual per 1000 km²",
                  "es": "Solo 1 individuo por 1000 km²",
                  "de": "Nur 1 Individuum pro 1000 km²",
                  "nl": "Slechts 1 individu per 1000 km²"
        },
        {
                  "en": "0.1-0.5 individuals per km² (similar to large African herbivores)",
                  "es": "0.1-0.5 individuos por km² (similar a grandes herbívoros africanos)",
                  "de": "0.1-0.5 Individuen pro km² (ähnlich großen afrikanischen Pflanzenfressern)",
                  "nl": "0.1-0.5 individuen per km² (vergelijkbaar met grote Afrikaanse herbivoren)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Large sauropod population densities were likely similar to modern megaherbivores, around 0.1-0.5 individuals per km², constrained by food availability.",
                  "es": "Las densidades poblacionales de grandes saurópodos probablemente eran similares a los megaherbívoros modernos, alrededor de 0.1-0.5 individuos por km², limitadas por la disponibilidad de alimento.",
                  "de": "Große Sauropoden-Populationsdichten waren wahrscheinlich ähnlich modernen Megaherbivoren, etwa 0.1-0.5 Individuen pro km², begrenzt durch Nahrungsverfügbarkeit.",
                  "nl": "Grote sauropode populatiedichtheden waren waarschijnlijk vergelijkbaar met moderne megaherbivoren, rond 0.1-0.5 individuen per km², beperkt door voedselbeschikbaarheid."
        }
      },
      {
        question: {
                  "en": "What biomechanical constraint limited maximum sauropod neck length?",
                  "es": "¿Qué restricción biomecánica limitaba la longitud máxima del cuello de los saurópodos?",
                  "de": "Welche biomechanische Einschränkung begrenzte die maximale Sauropoden-Halslänge?",
                  "nl": "Welke biomechanische beperking limiteerde de maximale sauropode neklengte?"
        },
        options: [
        {
                  "en": "Weight of the skull only",
                  "es": "Solo el peso del cráneo",
                  "de": "Nur das Gewicht des Schädels",
                  "nl": "Alleen het gewicht van de schedel"
        },
        {
                  "en": "Predator avoidance",
                  "es": "Evitación de depredadores",
                  "de": "Räubervermeidung",
                  "nl": "Roofdierpreventie"
        },
        {
                  "en": "Blood pressure requirements for brain perfusion",
                  "es": "Requisitos de presión arterial para perfusión cerebral",
                  "de": "Blutdruckanforderungen für Gehirnperfusion",
                  "nl": "Bloeddrukbehoeften voor hersenperfusie"
        },
        {
                  "en": "Dietary limitations",
                  "es": "Limitaciones dietéticas",
                  "de": "Ernährungsbeschränkungen",
                  "nl": "Voedingsbeperkingen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Maximum neck length was constrained by the cardiovascular system's ability to pump blood against gravity to maintain brain function.",
                  "es": "La longitud máxima del cuello estaba restringida por la capacidad del sistema cardiovascular de bombear sangre contra la gravedad para mantener la función cerebral.",
                  "de": "Die maximale Halslänge war durch die Fähigkeit des Herz-Kreislauf-Systems begrenzt, Blut gegen die Schwerkraft zu pumpen, um die Gehirnfunktion aufrechtzuerhalten.",
                  "nl": "Maximale neklengte werd beperkt door het vermogen van het cardiovasculaire systeem om bloed tegen de zwaartekracht in te pompen om de hersenfunctie te behouden."
        }
      },
      {
        question: {
                  "en": "What was the significance of the Jurassic-Cretaceous boundary for dinosaur evolution?",
                  "es": "¿Cuál era la significancia del límite Jurásico-Cretácico para la evolución de dinosaurios?",
                  "de": "Was war die Bedeutung der Jura-Kreide-Grenze für die Dinosaurier-Evolution?",
                  "nl": "Wat was de betekenis van de Jura-Krijt grens voor dinosaurus evolutie?"
        },
        options: [
        {
                  "en": "First appearance of dinosaurs",
                  "es": "Primera aparición de dinosaurios",
                  "de": "Erstes Auftreten von Dinosauriern",
                  "nl": "Eerste verschijning van dinosaurussen"
        },
        {
                  "en": "No significant changes occurred",
                  "es": "No ocurrieron cambios significativos",
                  "de": "Keine bedeutenden Veränderungen traten auf",
                  "nl": "Er traden geen significante veranderingen op"
        },
        {
                  "en": "Major faunal turnover with extinction of many sauropod lineages",
                  "es": "Gran recambio faunístico con extinción de muchos linajes de saurópodos",
                  "de": "Großer Faunenwandel mit Aussterben vieler Sauropoden-Linien",
                  "nl": "Grote faunale omzet met uitsterven van vele sauropode lijnen"
        },
        {
                  "en": "All dinosaurs went extinct",
                  "es": "Todos los dinosaurios se extinguieron",
                  "de": "Alle Dinosaurier starben aus",
                  "nl": "Alle dinosaurussen stierven uit"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Jurassic-Cretaceous boundary marked a significant extinction event that eliminated many classic Jurassic dinosaur lineages, particularly among sauropods, leading to major ecological reorganization.",
                  "es": "El límite Jurásico-Cretácico marcó un evento de extinción significativo que eliminó muchos linajes clásicos de dinosaurios jurásicos, particularmente entre saurópodos, llevando a una reorganización ecológica importante.",
                  "de": "Die Jura-Kreide-Grenze markierte ein bedeutendes Aussterbeereignis, das viele klassische Jura-Dinosaurier-Linien eliminierte, besonders unter Sauropoden, was zu großer ökologischer Reorganisation führte.",
                  "nl": "De Jura-Krijt grens markeerde een significante extinctie gebeurtenis die veel klassieke Jura dinosaurus lijnen elimineerde, vooral onder sauropoden, leidend tot grote ecologische reorganisatie."
        }
      },
      {
        question: {
                  "en": "What role did Jurassic climate oscillations play in driving evolutionary adaptations?",
                  "es": "¿Qué papel jugaron las oscilaciones climáticas jurásicas en impulsar adaptaciones evolutivas?",
                  "de": "Welche Rolle spielten Jura-Klimaschwankungen beim Antrieb evolutionärer Anpassungen?",
                  "nl": "Welke rol speelden Jura klimaatoscillaties bij het aandrijven van evolutionaire aanpassingen?"
        },
        options: [
        {
                  "en": "Only affected plant evolution",
                  "es": "Solo afectó evolución de plantas",
                  "de": "Beeinflusste nur Pflanzenevolution",
                  "nl": "Beïnvloedde alleen plantenevolutie"
        },
        {
                  "en": "Caused immediate extinction",
                  "es": "Causó extinción inmediata",
                  "de": "Verursachte sofortiges Aussterben",
                  "nl": "Veroorzaakte onmiddellijke extinctie"
        },
        {
                  "en": "Alternating humid-arid cycles promoted physiological and behavioral flexibility",
                  "es": "Ciclos alternantes húmedo-áridos promovieron flexibilidad fisiológica y conductual",
                  "de": "Wechselnde feucht-trockene Zyklen förderten physiologische und Verhaltensflexibilität",
                  "nl": "Alternerende vochtig-droge cycli bevorderden fysiologische en gedragsflexibiliteit"
        },
        {
                  "en": "Stable climate prevented evolution",
                  "es": "Clima estable previno evolución",
                  "de": "Stabiles Klima verhinderte Evolution",
                  "nl": "Stabiel klimaat voorkwam evolutie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Jurassic climate fluctuations between greenhouse and icehouse conditions created selective pressures that favored dinosaurs with enhanced thermoregulatory abilities, water conservation, and dietary flexibility.",
                  "es": "Las fluctuaciones climáticas jurásicas entre condiciones de invernadero y casa de hielo crearon presiones selectivas que favorecieron dinosaurios con habilidades termorregulatorias mejoradas, conservación de agua y flexibilidad dietética.",
                  "de": "Jura-Klimaschwankungen zwischen Treibhaus- und Eishausbedingungen schufen Selektionsdrücke, die Dinosaurier mit verbesserten thermoregulatorischen Fähigkeiten, Wassersparen und Ernährungsflexibilität begünstigten.",
                  "nl": "Jura klimaatfluctuaties tussen broeikas en ijshuis omstandigheden creëerden selectiedruk die dinosaurussen met verbeterde thermoregulatoire vaardigheden, waterbesparing en voedingsflexibiliteit bevoordeelden."
        }
      },
      {
        question: {
                  "en": "What period did Jurassic dinosaurs live in?",
                  "es": "What period did Jurassic dinosaurs live in?",
                  "de": "What period did Jurassic dinosaurs live in?",
                  "nl": "What period did Jurassic dinosaurs live in?"
        },
        options: [
        {
                  "en": "Jurassic Period",
                  "es": "Jurassic Period",
                  "de": "Jurassic Period",
                  "nl": "Jurassic Period"
        },
        {
                  "en": "Permian Period",
                  "es": "Permian Period",
                  "de": "Permian Period",
                  "nl": "Permian Period"
        },
        {
                  "en": "Cretaceous Period",
                  "es": "Cretaceous Period",
                  "de": "Cretaceous Period",
                  "nl": "Cretaceous Period"
        },
        {
                  "en": "Triassic Period",
                  "es": "Triassic Period",
                  "de": "Triassic Period",
                  "nl": "Triassic Period"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Jurassic dinosaurs lived during the Jurassic Period, from about 201 to 145 million years ago.",
                  "es": "Jurassic dinosaurs lived during the Jurassic Period, from about 201 to 145 million years ago.",
                  "de": "Jurassic dinosaurs lived during the Jurassic Period, from about 201 to 145 million years ago.",
                  "nl": "Jurassic dinosaurs lived during the Jurassic Period, from about 201 to 145 million years ago."
        }
      },
      {
        question: {
                  "en": "What famous dinosaur is from the Jurassic?",
                  "es": "What famous dinosaur is from the Jurassic?",
                  "de": "What famous dinosaur is from the Jurassic?",
                  "nl": "What famous dinosaur is from the Jurassic?"
        },
        options: [
        {
                  "en": "Tyrannosaurus Rex",
                  "es": "Tyrannosaurus Rex",
                  "de": "Tyrannosaurus Rex",
                  "nl": "Tyrannosaurus Rex"
        },
        {
                  "en": "Velociraptor",
                  "es": "Velociraptor",
                  "de": "Velociraptor",
                  "nl": "Velociraptor"
        },
        {
                  "en": "Stegosaurus",
                  "es": "Stegosaurus",
                  "de": "Stegosaurus",
                  "nl": "Stegosaurus"
        },
        {
                  "en": "Triceratops",
                  "es": "Triceratops",
                  "de": "Triceratops",
                  "nl": "Triceratops"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Stegosaurus is one of the most iconic Jurassic dinosaurs, with distinctive plates on its back.",
                  "es": "Stegosaurus is one of the most iconic Jurassic dinosaurs, with distinctive plates on its back.",
                  "de": "Stegosaurus is one of the most iconic Jurassic dinosaurs, with distinctive plates on its back.",
                  "nl": "Stegosaurus is one of the most iconic Jurassic dinosaurs, with distinctive plates on its back."
        }
      },
      {
        question: {
                  "en": "What was the climate like in the Jurassic?",
                  "es": "What was the climate like in the Jurassic?",
                  "de": "What was the climate like in the Jurassic?",
                  "nl": "What was the climate like in the Jurassic?"
        },
        options: [
        {
                  "en": "Desert-like",
                  "es": "Desert-like",
                  "de": "Desert-like",
                  "nl": "Desert-like"
        },
        {
                  "en": "Warm and humid",
                  "es": "Warm and humid",
                  "de": "Warm and humid",
                  "nl": "Warm and humid"
        },
        {
                  "en": "Frozen",
                  "es": "Frozen",
                  "de": "Frozen",
                  "nl": "Frozen"
        },
        {
                  "en": "Cold and dry",
                  "es": "Cold and dry",
                  "de": "Cold and dry",
                  "nl": "Cold and dry"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Jurassic Period had a warm, humid climate with lush vegetation.",
                  "es": "The Jurassic Period had a warm, humid climate with lush vegetation.",
                  "de": "The Jurassic Period had a warm, humid climate with lush vegetation.",
                  "nl": "The Jurassic Period had a warm, humid climate with lush vegetation."
        }
      },
      {
        question: {
                  "en": "Which giant sauropod lived in the Jurassic?",
                  "es": "Which giant sauropod lived in the Jurassic?",
                  "de": "Which giant sauropod lived in the Jurassic?",
                  "nl": "Which giant sauropod lived in the Jurassic?"
        },
        options: [
        {
                  "en": "Brachiosaurus",
                  "es": "Brachiosaurus",
                  "de": "Brachiosaurus",
                  "nl": "Brachiosaurus"
        },
        {
                  "en": "Tyrannosaurus",
                  "es": "Tyrannosaurus",
                  "de": "Tyrannosaurus",
                  "nl": "Tyrannosaurus"
        },
        {
                  "en": "Triceratops",
                  "es": "Triceratops",
                  "de": "Triceratops",
                  "nl": "Triceratops"
        },
        {
                  "en": "Velociraptor",
                  "es": "Velociraptor",
                  "de": "Velociraptor",
                  "nl": "Velociraptor"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Brachiosaurus was a massive Jurassic sauropod with a long neck and front legs longer than rear legs.",
                  "es": "Brachiosaurus was a massive Jurassic sauropod with a long neck and front legs longer than rear legs.",
                  "de": "Brachiosaurus was a massive Jurassic sauropod with a long neck and front legs longer than rear legs.",
                  "nl": "Brachiosaurus was a massive Jurassic sauropod with a long neck and front legs longer than rear legs."
        }
      },
      {
        question: {
                  "en": "What is Allosaurus?",
                  "es": "What is Allosaurus?",
                  "de": "What is Allosaurus?",
                  "nl": "What is Allosaurus?"
        },
        options: [
        {
                  "en": "Large Jurassic predator",
                  "es": "Large Jurassic predator",
                  "de": "Large Jurassic predator",
                  "nl": "Large Jurassic predator"
        },
        {
                  "en": "Flying reptile",
                  "es": "Flying reptile",
                  "de": "Flying reptile",
                  "nl": "Flying reptile"
        },
        {
                  "en": "Marine reptile",
                  "es": "Marine reptile",
                  "de": "Marine reptile",
                  "nl": "Marine reptile"
        },
        {
                  "en": "Herbivore",
                  "es": "Herbivore",
                  "de": "Herbivore",
                  "nl": "Herbivore"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Allosaurus was the apex predator of the Late Jurassic, up to 28 feet long.",
                  "es": "Allosaurus was the apex predator of the Late Jurassic, up to 28 feet long.",
                  "de": "Allosaurus was the apex predator of the Late Jurassic, up to 28 feet long.",
                  "nl": "Allosaurus was the apex predator of the Late Jurassic, up to 28 feet long."
        }
      },
      {
        question: {
                  "en": "What supercontinent was breaking apart in the Jurassic?",
                  "es": "What supercontinent was breaking apart in the Jurassic?",
                  "de": "What supercontinent was breaking apart in the Jurassic?",
                  "nl": "What supercontinent was breaking apart in the Jurassic?"
        },
        options: [
        {
                  "en": "Gondwana only",
                  "es": "Gondwana only",
                  "de": "Gondwana only",
                  "nl": "Gondwana only"
        },
        {
                  "en": "None",
                  "es": "None",
                  "de": "None",
                  "nl": "None"
        },
        {
                  "en": "Rodinia",
                  "es": "Rodinia",
                  "de": "Rodinia",
                  "nl": "Rodinia"
        },
        {
                  "en": "Pangaea",
                  "es": "Pangaea",
                  "de": "Pangaea",
                  "nl": "Pangaea"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The supercontinent Pangaea began breaking apart during the Jurassic Period.",
                  "es": "The supercontinent Pangaea began breaking apart during the Jurassic Period.",
                  "de": "The supercontinent Pangaea began breaking apart during the Jurassic Period.",
                  "nl": "The supercontinent Pangaea began breaking apart during the Jurassic Period."
        }
      },
      {
        question: {
                  "en": "What is the Morrison Formation?",
                  "es": "What is the Morrison Formation?",
                  "de": "What is the Morrison Formation?",
                  "nl": "What is the Morrison Formation?"
        },
        options: [
        {
                  "en": "Mountain range",
                  "es": "Mountain range",
                  "de": "Mountain range",
                  "nl": "Mountain range"
        },
        {
                  "en": "Desert",
                  "es": "Desert",
                  "de": "Desert",
                  "nl": "Desert"
        },
        {
                  "en": "Ocean",
                  "es": "Ocean",
                  "de": "Ocean",
                  "nl": "Ocean"
        },
        {
                  "en": "Rock layer rich in Jurassic fossils",
                  "es": "Rock layer rich in Jurassic fossils",
                  "de": "Rock layer rich in Jurassic fossils",
                  "nl": "Rock layer rich in Jurassic fossils"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Morrison Formation is a Late Jurassic rock layer in western North America famous for abundant dinosaur fossils.",
                  "es": "The Morrison Formation is a Late Jurassic rock layer in western North America famous for abundant dinosaur fossils.",
                  "de": "The Morrison Formation is a Late Jurassic rock layer in western North America famous for abundant dinosaur fossils.",
                  "nl": "The Morrison Formation is a Late Jurassic rock layer in western North America famous for abundant dinosaur fossils."
        }
      },
      {
        question: {
                  "en": "What dinosaur had plates on its back?",
                  "es": "What dinosaur had plates on its back?",
                  "de": "What dinosaur had plates on its back?",
                  "nl": "What dinosaur had plates on its back?"
        },
        options: [
        {
                  "en": "Allosaurus",
                  "es": "Allosaurus",
                  "de": "Allosaurus",
                  "nl": "Allosaurus"
        },
        {
                  "en": "Stegosaurus",
                  "es": "Stegosaurus",
                  "de": "Stegosaurus",
                  "nl": "Stegosaurus"
        },
        {
                  "en": "Brachiosaurus",
                  "es": "Brachiosaurus",
                  "de": "Brachiosaurus",
                  "nl": "Brachiosaurus"
        },
        {
                  "en": "Diplodocus",
                  "es": "Diplodocus",
                  "de": "Diplodocus",
                  "nl": "Diplodocus"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Stegosaurus had two rows of large bony plates running down its back.",
                  "es": "Stegosaurus had two rows of large bony plates running down its back.",
                  "de": "Stegosaurus had two rows of large bony plates running down its back.",
                  "nl": "Stegosaurus had two rows of large bony plates running down its back."
        }
      },
      {
        question: {
                  "en": "What is Diplodocus known for?",
                  "es": "What is Diplodocus known for?",
                  "de": "What is Diplodocus known for?",
                  "nl": "What is Diplodocus known for?"
        },
        options: [
        {
                  "en": "Extremely long whip-like tail",
                  "es": "Extremely long whip-like tail",
                  "de": "Extremely long whip-like tail",
                  "nl": "Extremely long whip-like tail"
        },
        {
                  "en": "Sharp teeth",
                  "es": "Sharp teeth",
                  "de": "Sharp teeth",
                  "nl": "Sharp teeth"
        },
        {
                  "en": "Flying ability",
                  "es": "Flying ability",
                  "de": "Flying ability",
                  "nl": "Flying ability"
        },
        {
                  "en": "Large plates",
                  "es": "Large plates",
                  "de": "Large plates",
                  "nl": "Large plates"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Diplodocus had one of the longest tails of any dinosaur, used possibly as a whip for defense.",
                  "es": "Diplodocus had one of the longest tails of any dinosaur, used possibly as a whip for defense.",
                  "de": "Diplodocus had one of the longest tails of any dinosaur, used possibly as a whip for defense.",
                  "nl": "Diplodocus had one of the longest tails of any dinosaur, used possibly as a whip for defense."
        }
      },
      {
        question: {
                  "en": "What was the dominant predator of the Jurassic?",
                  "es": "What was the dominant predator of the Jurassic?",
                  "de": "What was the dominant predator of the Jurassic?",
                  "nl": "What was the dominant predator of the Jurassic?"
        },
        options: [
        {
                  "en": "Velociraptor",
                  "es": "Velociraptor",
                  "de": "Velociraptor",
                  "nl": "Velociraptor"
        },
        {
                  "en": "Allosaurus",
                  "es": "Allosaurus",
                  "de": "Allosaurus",
                  "nl": "Allosaurus"
        },
        {
                  "en": "T-Rex",
                  "es": "T-Rex",
                  "de": "T-Rex",
                  "nl": "T-Rex"
        },
        {
                  "en": "Spinosaurus",
                  "es": "Spinosaurus",
                  "de": "Spinosaurus",
                  "nl": "Spinosaurus"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Allosaurus was the dominant large predator during the Late Jurassic Period.",
                  "es": "Allosaurus was the dominant large predator during the Late Jurassic Period.",
                  "de": "Allosaurus was the dominant large predator during the Late Jurassic Period.",
                  "nl": "Allosaurus was the dominant large predator during the Late Jurassic Period."
        }
      },
      {
        question: {
                  "en": "What is Archaeopteryx?",
                  "es": "What is Archaeopteryx?",
                  "de": "What is Archaeopteryx?",
                  "nl": "What is Archaeopteryx?"
        },
        options: [
        {
                  "en": "Earliest known bird from Late Jurassic",
                  "es": "Earliest known bird from Late Jurassic",
                  "de": "Earliest known bird from Late Jurassic",
                  "nl": "Earliest known bird from Late Jurassic"
        },
        {
                  "en": "Flying dinosaur",
                  "es": "Flying dinosaur",
                  "de": "Flying dinosaur",
                  "nl": "Flying dinosaur"
        },
        {
                  "en": "Marine reptile",
                  "es": "Marine reptile",
                  "de": "Marine reptile",
                  "nl": "Marine reptile"
        },
        {
                  "en": "Mammal",
                  "es": "Mammal",
                  "de": "Mammal",
                  "nl": "Mammal"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Archaeopteryx is considered the earliest known bird, showing both bird and dinosaur features.",
                  "es": "Archaeopteryx is considered the earliest known bird, showing both bird and dinosaur features.",
                  "de": "Archaeopteryx is considered the earliest known bird, showing both bird and dinosaur features.",
                  "nl": "Archaeopteryx is considered the earliest known bird, showing both bird and dinosaur features."
        }
      },
      {
        question: {
                  "en": "How long was the Jurassic Period?",
                  "es": "How long was the Jurassic Period?",
                  "de": "How long was the Jurassic Period?",
                  "nl": "How long was the Jurassic Period?"
        },
        options: [
        {
                  "en": "About 100 million years",
                  "es": "About 100 million years",
                  "de": "About 100 million years",
                  "nl": "About 100 million years"
        },
        {
                  "en": "About 56 million years",
                  "es": "About 56 million years",
                  "de": "About 56 million years",
                  "nl": "About 56 million years"
        },
        {
                  "en": "About 30 million years",
                  "es": "About 30 million years",
                  "de": "About 30 million years",
                  "nl": "About 30 million years"
        },
        {
                  "en": "About 80 million years",
                  "es": "About 80 million years",
                  "de": "About 80 million years",
                  "nl": "About 80 million years"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Jurassic Period lasted approximately 56 million years, from 201 to 145 million years ago.",
                  "es": "The Jurassic Period lasted approximately 56 million years, from 201 to 145 million years ago.",
                  "de": "The Jurassic Period lasted approximately 56 million years, from 201 to 145 million years ago.",
                  "nl": "The Jurassic Period lasted approximately 56 million years, from 201 to 145 million years ago."
        }
      },
      {
        question: {
                  "en": "What ocean was forming during the Jurassic?",
                  "es": "What ocean was forming during the Jurassic?",
                  "de": "What ocean was forming during the Jurassic?",
                  "nl": "What ocean was forming during the Jurassic?"
        },
        options: [
        {
                  "en": "Pacific Ocean",
                  "es": "Pacific Ocean",
                  "de": "Pacific Ocean",
                  "nl": "Pacific Ocean"
        },
        {
                  "en": "Arctic Ocean",
                  "es": "Arctic Ocean",
                  "de": "Arctic Ocean",
                  "nl": "Arctic Ocean"
        },
        {
                  "en": "Indian Ocean",
                  "es": "Indian Ocean",
                  "de": "Indian Ocean",
                  "nl": "Indian Ocean"
        },
        {
                  "en": "Atlantic Ocean",
                  "es": "Atlantic Ocean",
                  "de": "Atlantic Ocean",
                  "nl": "Atlantic Ocean"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Atlantic Ocean began forming as Pangaea split apart during the Jurassic.",
                  "es": "The Atlantic Ocean began forming as Pangaea split apart during the Jurassic.",
                  "de": "The Atlantic Ocean began forming as Pangaea split apart during the Jurassic.",
                  "nl": "The Atlantic Ocean began forming as Pangaea split apart during the Jurassic."
        }
      },
      {
        question: {
                  "en": "What is Compsognathus?",
                  "es": "What is Compsognathus?",
                  "de": "What is Compsognathus?",
                  "nl": "What is Compsognathus?"
        },
        options: [
        {
                  "en": "Large predator",
                  "es": "Large predator",
                  "de": "Large predator",
                  "nl": "Large predator"
        },
        {
                  "en": "Small chicken-sized carnivore",
                  "es": "Small chicken-sized carnivore",
                  "de": "Small chicken-sized carnivore",
                  "nl": "Small chicken-sized carnivore"
        },
        {
                  "en": "Giant herbivore",
                  "es": "Giant herbivore",
                  "de": "Giant herbivore",
                  "nl": "Giant herbivore"
        },
        {
                  "en": "Flying dinosaur",
                  "es": "Flying dinosaur",
                  "de": "Flying dinosaur",
                  "nl": "Flying dinosaur"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Compsognathus was one of the smallest known dinosaurs, about the size of a chicken.",
                  "es": "Compsognathus was one of the smallest known dinosaurs, about the size of a chicken.",
                  "de": "Compsognathus was one of the smallest known dinosaurs, about the size of a chicken.",
                  "nl": "Compsognathus was one of the smallest known dinosaurs, about the size of a chicken."
        }
      },
      {
        question: {
                  "en": "What pterosaur lived in the Jurassic?",
                  "es": "What pterosaur lived in the Jurassic?",
                  "de": "What pterosaur lived in the Jurassic?",
                  "nl": "What pterosaur lived in the Jurassic?"
        },
        options: [
        {
                  "en": "None",
                  "es": "None",
                  "de": "None",
                  "nl": "None"
        },
        {
                  "en": "Quetzalcoatlus",
                  "es": "Quetzalcoatlus",
                  "de": "Quetzalcoatlus",
                  "nl": "Quetzalcoatlus"
        },
        {
                  "en": "Pterodactylus",
                  "es": "Pterodactylus",
                  "de": "Pterodactylus",
                  "nl": "Pterodactylus"
        },
        {
                  "en": "Pteranodon",
                  "es": "Pteranodon",
                  "de": "Pteranodon",
                  "nl": "Pteranodon"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Pterodactylus was a small pterosaur from the Late Jurassic.",
                  "es": "Pterodactylus was a small pterosaur from the Late Jurassic.",
                  "de": "Pterodactylus was a small pterosaur from the Late Jurassic.",
                  "nl": "Pterodactylus was a small pterosaur from the Late Jurassic."
        }
      },
      {
        question: {
                  "en": "What is the function of Stegosaurus plates?",
                  "es": "What is the function of Stegosaurus plates?",
                  "de": "What is the function of Stegosaurus plates?",
                  "nl": "What is the function of Stegosaurus plates?"
        },
        options: [
        {
                  "en": "Temperature regulation and display",
                  "es": "Temperature regulation and display",
                  "de": "Temperature regulation and display",
                  "nl": "Temperature regulation and display"
        },
        {
                  "en": "Flying",
                  "es": "Flying",
                  "de": "Flying",
                  "nl": "Flying"
        },
        {
                  "en": "Defense only",
                  "es": "Defense only",
                  "de": "Defense only",
                  "nl": "Defense only"
        },
        {
                  "en": "Swimming",
                  "es": "Swimming",
                  "de": "Swimming",
                  "nl": "Swimming"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Stegosaurus plates likely helped with temperature regulation and visual display.",
                  "es": "Stegosaurus plates likely helped with temperature regulation and visual display.",
                  "de": "Stegosaurus plates likely helped with temperature regulation and visual display.",
                  "nl": "Stegosaurus plates likely helped with temperature regulation and visual display."
        }
      },
      {
        question: {
                  "en": "What is Ceratosaurus?",
                  "es": "What is Ceratosaurus?",
                  "de": "What is Ceratosaurus?",
                  "nl": "What is Ceratosaurus?"
        },
        options: [
        {
                  "en": "Long-necked dinosaur",
                  "es": "Long-necked dinosaur",
                  "de": "Long-necked dinosaur",
                  "nl": "Long-necked dinosaur"
        },
        {
                  "en": "Flying reptile",
                  "es": "Flying reptile",
                  "de": "Flying reptile",
                  "nl": "Flying reptile"
        },
        {
                  "en": "Horned Jurassic predator",
                  "es": "Horned Jurassic predator",
                  "de": "Horned Jurassic predator",
                  "nl": "Horned Jurassic predator"
        },
        {
                  "en": "Horned herbivore",
                  "es": "Horned herbivore",
                  "de": "Horned herbivore",
                  "nl": "Horned herbivore"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ceratosaurus was a Jurassic predator with a prominent horn on its nose.",
                  "es": "Ceratosaurus was a Jurassic predator with a prominent horn on its nose.",
                  "de": "Ceratosaurus was a Jurassic predator with a prominent horn on its nose.",
                  "nl": "Ceratosaurus was a Jurassic predator with a prominent horn on its nose."
        }
      },
      {
        question: {
                  "en": "What sea reptile dominated Jurassic oceans?",
                  "es": "What sea reptile dominated Jurassic oceans?",
                  "de": "What sea reptile dominated Jurassic oceans?",
                  "nl": "What sea reptile dominated Jurassic oceans?"
        },
        options: [
        {
                  "en": "Plesiosaurs and ichthyosaurs",
                  "es": "Plesiosaurs and ichthyosaurs",
                  "de": "Plesiosaurs and ichthyosaurs",
                  "nl": "Plesiosaurs and ichthyosaurs"
        },
        {
                  "en": "Mosasaurs",
                  "es": "Mosasaurs",
                  "de": "Mosasaurs",
                  "nl": "Mosasaurs"
        },
        {
                  "en": "Dinosaurs",
                  "es": "Dinosaurs",
                  "de": "Dinosaurs",
                  "nl": "Dinosaurs"
        },
        {
                  "en": "Sharks",
                  "es": "Sharks",
                  "de": "Sharks",
                  "nl": "Sharks"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Plesiosaurs and ichthyosaurs were the dominant marine reptiles in Jurassic seas.",
                  "es": "Plesiosaurs and ichthyosaurs were the dominant marine reptiles in Jurassic seas.",
                  "de": "Plesiosaurs and ichthyosaurs were the dominant marine reptiles in Jurassic seas.",
                  "nl": "Plesiosaurs and ichthyosaurs were the dominant marine reptiles in Jurassic seas."
        }
      },
      {
        question: {
                  "en": "What is Apatosaurus?",
                  "es": "What is Apatosaurus?",
                  "de": "What is Apatosaurus?",
                  "nl": "What is Apatosaurus?"
        },
        options: [
        {
                  "en": "Small predator",
                  "es": "Small predator",
                  "de": "Small predator",
                  "nl": "Small predator"
        },
        {
                  "en": "Large Jurassic sauropod",
                  "es": "Large Jurassic sauropod",
                  "de": "Large Jurassic sauropod",
                  "nl": "Large Jurassic sauropod"
        },
        {
                  "en": "Horned dinosaur",
                  "es": "Horned dinosaur",
                  "de": "Horned dinosaur",
                  "nl": "Horned dinosaur"
        },
        {
                  "en": "Flying reptile",
                  "es": "Flying reptile",
                  "de": "Flying reptile",
                  "nl": "Flying reptile"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Apatosaurus (formerly called Brontosaurus) was a large Jurassic sauropod up to 75 feet long.",
                  "es": "Apatosaurus (formerly called Brontosaurus) was a large Jurassic sauropod up to 75 feet long.",
                  "de": "Apatosaurus (formerly called Brontosaurus) was a large Jurassic sauropod up to 75 feet long.",
                  "nl": "Apatosaurus (formerly called Brontosaurus) was a large Jurassic sauropod up to 75 feet long."
        }
      },
      {
        question: {
                  "en": "What plants dominated the Jurassic?",
                  "es": "What plants dominated the Jurassic?",
                  "de": "What plants dominated the Jurassic?",
                  "nl": "What plants dominated the Jurassic?"
        },
        options: [
        {
                  "en": "Grasses",
                  "es": "Grasses",
                  "de": "Grasses",
                  "nl": "Grasses"
        },
        {
                  "en": "Mosses only",
                  "es": "Mosses only",
                  "de": "Mosses only",
                  "nl": "Mosses only"
        },
        {
                  "en": "Flowering plants",
                  "es": "Flowering plants",
                  "de": "Flowering plants",
                  "nl": "Flowering plants"
        },
        {
                  "en": "Conifers and ferns",
                  "es": "Conifers and ferns",
                  "de": "Conifers and ferns",
                  "nl": "Conifers and ferns"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Conifers, ferns, and cycads dominated Jurassic vegetation; flowering plants hadn't evolved yet.",
                  "es": "Conifers, ferns, and cycads dominated Jurassic vegetation; flowering plants hadn't evolved yet.",
                  "de": "Conifers, ferns, and cycads dominated Jurassic vegetation; flowering plants hadn't evolved yet.",
                  "nl": "Conifers, ferns, and cycads dominated Jurassic vegetation; flowering plants hadn't evolved yet."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  }
})();