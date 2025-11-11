// T-Rex Family Quiz - Level 1: Basic T-Rex Knowledge
(function() {
  const level1 = {
    name: {
      en: "T-Rex Family Level 1",
      es: "Familia T-Rex Nivel 1",
      de: "T-Rex Familie Stufe 1",
      nl: "T-Rex Familie Level 1"
    },
    questions: [
      {
        question: {
          en: "What does 'Tyrannosaurus Rex' mean?",
          es: "Â¿QuÃ© significa 'Tyrannosaurus Rex'?",
          de: "Was bedeutet 'Tyrannosaurus Rex'?",
          nl: "Wat betekent 'Tyrannosaurus Rex'?"
        },
        options: [
          { en: "King Tyrant Lizard", es: "Rey Lagarto Tirano", de: "KÃ¶nig Tyrann Echse", nl: "Koning Tiran Hagedis" },
          { en: "Big Sharp Teeth", es: "Dientes Grandes y Afilados", de: "GroÃŸe Scharfe ZÃ¤hne", nl: "Grote Scherpe Tanden" },
          { en: "Fast Running Beast", es: "Bestia Corriendo RÃ¡pido", de: "Schnell Laufendes Tier", nl: "Snel Rennend Beest" },
          { en: "Ancient Giant Dragon", es: "DragÃ³n Gigante Antiguo", de: "Alter Riesendrache", nl: "Oude Reus Draak" }
        ],
        correct: 0,
        explanation: {
          en: "Tyrannosaurus Rex literally means 'King Tyrant Lizard' - describing it as the ruler among the fearsome predators of its time.",
          es: "Tyrannosaurus Rex literalmente significa 'Rey Lagarto Tirano' - describiÃ©ndolo como el gobernante entre los depredadores temibles de su Ã©poca.",
          de: "Tyrannosaurus Rex bedeutet wÃ¶rtlich 'KÃ¶nig Tyrann Echse' - beschreibt ihn als Herrscher unter den furchtbaren Raubtieren seiner Zeit.",
          nl: "Tyrannosaurus Rex betekent letterlijk 'Koning Tiran Hagedis' - beschrijft hem als heerser onder de vreeslijke roofdieren van zijn tijd."
        }
      },
      {
        question: {
          en: "How long was an adult T-Rex approximately?",
          es: "Â¿QuÃ© tan largo era aproximadamente un T-Rex adulto?",
          de: "Wie lang war ein erwachsener T-Rex ungefÃ¤hr?",
          nl: "Hoe lang was een volwassen T-Rex ongeveer?"
        },
        options: [
          { en: "12-13 meters (40-43 feet)", es: "12-13 metros (40-43 pies)", de: "12-13 Meter (40-43 FuÃŸ)", nl: "12-13 meter (40-43 voet)" },
          { en: "5-6 meters (16-20 feet)", es: "5-6 metros (16-20 pies)", de: "5-6 Meter (16-20 FuÃŸ)", nl: "5-6 meter (16-20 voet)" },
          { en: "20-25 meters (66-82 feet)", es: "20-25 metros (66-82 pies)", de: "20-25 Meter (66-82 FuÃŸ)", nl: "20-25 meter (66-82 voet)" },
          { en: "3-4 meters (10-13 feet)", es: "3-4 metros (10-13 pies)", de: "3-4 Meter (10-13 FuÃŸ)", nl: "3-4 meter (10-13 voet)" }
        ],
        correct: 0,
        explanation: {
          en: "Adult T-Rex measured about 12-13 meters long, making it one of the largest land predators that ever lived.",
          es: "El T-Rex adulto medÃ­a aproximadamente 12-13 metros de largo, convirtiÃ©ndolo en uno de los depredadores terrestres mÃ¡s grandes que jamÃ¡s hayan vivido.",
          de: "Ein erwachsener T-Rex war etwa 12-13 Meter lang und damit einer der grÃ¶ÃŸten LandrÃ¤uber, die je gelebt haben.",
          nl: "Een volwassen T-Rex was ongeveer 12-13 meter lang, waardoor het een van de grootste landroofdieren was die ooit hebben geleefd."
        }
      },
      {
        question: {
          en: "What were T-Rex's tiny arms likely used for?",
          es: "Â¿Para quÃ© se usaban probablemente los pequeÃ±os brazos del T-Rex?",
          de: "WofÃ¼r wurden die winzigen Arme des T-Rex wahrscheinlich verwendet?",
          nl: "Waarvoor werden de kleine armpjes van de T-Rex waarschijnlijk gebruikt?"
        },
        options: [
          { en: "Holding onto prey during feeding", es: "Sujetar presas durante la alimentaciÃ³n", de: "Beute beim Fressen festhalten", nl: "Prooi vasthouden tijdens het eten" },
          { en: "Flying like wings", es: "Volar como alas", de: "Fliegen wie FlÃ¼gel", nl: "Vliegen zoals vleugels" },
          { en: "Swimming in water", es: "Nadar en el agua", de: "Schwimmen im Wasser", nl: "Zwemmen in water" },
          { en: "Building nests", es: "Construir nidos", de: "Nester bauen", nl: "Nesten bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Despite being small, T-Rex arms were very muscular and strong, likely used to grip prey tightly while feeding.",
          es: "A pesar de ser pequeÃ±os, los brazos del T-Rex eran muy musculosos y fuertes, probablemente usados para agarrar fuertemente las presas mientras se alimentaba.",
          de: "Trotz ihrer geringen GrÃ¶ÃŸe waren die T-Rex-Arme sehr muskulÃ¶s und stark, wahrscheinlich zum festen Greifen von Beute beim Fressen verwendet.",
          nl: "Ondanks dat ze klein waren, waren T-Rex armen erg gespierd en sterk, waarschijnlijk gebruikt om prooi stevig vast te grijpen tijdens het eten."
        }
      },
      {
        question: {
          en: "When did T-Rex live?",
          es: "Â¿CuÃ¡ndo viviÃ³ el T-Rex?",
          de: "Wann lebte der T-Rex?",
          nl: "Wanneer leefde de T-Rex?"
        },
        options: [
          { en: "Late Cretaceous Period (68-66 million years ago)", es: "PerÃ­odo CretÃ¡cico TardÃ­o (68-66 millones de aÃ±os atrÃ¡s)", de: "SpÃ¤te Kreidezeit (vor 68-66 Millionen Jahren)", nl: "Laat Krijt Tijdperk (68-66 miljoen jaar geleden)" },
          { en: "Jurassic Period (200-145 million years ago)", es: "PerÃ­odo JurÃ¡sico (200-145 millones de aÃ±os atrÃ¡s)", de: "Jurazeit (vor 200-145 Millionen Jahren)", nl: "Jura Tijdperk (200-145 miljoen jaar geleden)" },
          { en: "Triassic Period (250-200 million years ago)", es: "PerÃ­odo TriÃ¡sico (250-200 millones de aÃ±os atrÃ¡s)", de: "Triaszeit (vor 250-200 Millionen Jahren)", nl: "Trias Tijdperk (250-200 miljoen jaar geleden)" },
          { en: "Ice Age (2.6 million years ago)", es: "Era de Hielo (2.6 millones de aÃ±os atrÃ¡s)", de: "Eiszeit (vor 2,6 Millionen Jahren)", nl: "IJstijd (2,6 miljoen jaar geleden)" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex lived during the very end of the Cretaceous Period, just before the mass extinction that ended the age of dinosaurs.",
          es: "El T-Rex viviÃ³ durante el final del PerÃ­odo CretÃ¡cico, justo antes de la extinciÃ³n masiva que terminÃ³ la era de los dinosaurios.",
          de: "T-Rex lebte am Ende der Kreidezeit, kurz vor dem Massenaussterben, das das Zeitalter der Dinosaurier beendete.",
          nl: "T-Rex leefde aan het einde van het Krijt Tijdperk, net voor de massa-extinctie die het tijdperk van de dinosaurussen beÃ«indigde."
        }
      },
      {
        question: {
          en: "How many teeth did a T-Rex have approximately?",
          es: "Â¿Aproximadamente cuÃ¡ntos dientes tenÃ­a un T-Rex?",
          de: "Wie viele ZÃ¤hne hatte ein T-Rex ungefÃ¤hr?",
          nl: "Hoeveel tanden had een T-Rex ongeveer?"
        },
        options: [
          { en: "50-60 teeth", es: "50-60 dientes", de: "50-60 ZÃ¤hne", nl: "50-60 tanden" },
          { en: "20-30 teeth", es: "20-30 dientes", de: "20-30 ZÃ¤hne", nl: "20-30 tanden" },
          { en: "100-150 teeth", es: "100-150 dientes", de: "100-150 ZÃ¤hne", nl: "100-150 tanden" },
          { en: "200-300 teeth", es: "200-300 dientes", de: "200-300 ZÃ¤hne", nl: "200-300 tanden" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex had about 50-60 massive teeth that could grow up to 8 inches long, perfect for crushing bone and tearing flesh.",
          es: "El T-Rex tenÃ­a aproximadamente 50-60 dientes masivos que podÃ­an crecer hasta 20 centÃ­metros de largo, perfectos para triturar hueso y desgarrar carne.",
          de: "T-Rex hatte etwa 50-60 massive ZÃ¤hne, die bis zu 20 cm lang werden konnten, perfekt zum Zermalmen von Knochen und ZerreiÃŸen von Fleisch.",
          nl: "T-Rex had ongeveer 50-60 massieve tanden die tot 20 cm lang konden worden, perfect voor het vermorzelen van botten en verscheuren van vlees."
        }
      },
      {
        question: {
          en: "Where have most T-Rex fossils been found?",
          es: "¿Dónde se han encontrado la mayoría de fósiles de T-Rex?",
          de: "Wo wurden die meisten T-Rex-Fossilien gefunden?",
          nl: "Waar zijn de meeste T-Rex fossielen gevonden?"
        },
        options: [
          { en: "Western North America", es: "Oeste de América del Norte", de: "Westliches Nordamerika", nl: "West-Noord-Amerika" },
          { en: "Eastern Europe", es: "Europa Oriental", de: "Osteuropa", nl: "Oost-Europa" },
          { en: "Central Africa", es: "África Central", de: "Zentralafrika", nl: "Centraal-Afrika" },
          { en: "Southern Australia", es: "Sur de Australia", de: "Südaustralien", nl: "Zuid-Australië" }
        ],
        correct: 0,
        explanation: {
          en: "Most T-Rex fossils have been discovered in the western United States and Canada, particularly in Montana, South Dakota, and Alberta.",
          es: "La mayoría de los fósiles de T-Rex se han descubierto en el oeste de Estados Unidos y Canadá, particularmente en Montana, Dakota del Sur y Alberta.",
          de: "Die meisten T-Rex-Fossilien wurden im Westen der USA und Kanadas entdeckt, insbesondere in Montana, South Dakota und Alberta.",
          nl: "De meeste T-Rex fossielen zijn ontdekt in het westen van de Verenigde Staten en Canada, vooral in Montana, South Dakota en Alberta."
        }
      },
      {
        question: {
          en: "How much did an adult T-Rex weigh approximately?",
          es: "¿Cuánto pesaba aproximadamente un T-Rex adulto?",
          de: "Wie viel wog ein erwachsener T-Rex ungefähr?",
          nl: "Hoeveel woog een volwassen T-Rex ongeveer?"
        },
        options: [
          { en: "7-9 tons", es: "7-9 toneladas", de: "7-9 Tonnen", nl: "7-9 ton" },
          { en: "2-3 tons", es: "2-3 toneladas", de: "2-3 Tonnen", nl: "2-3 ton" },
          { en: "15-20 tons", es: "15-20 toneladas", de: "15-20 Tonnen", nl: "15-20 ton" },
          { en: "30-40 tons", es: "30-40 toneladas", de: "30-40 Tonnen", nl: "30-40 ton" }
        ],
        correct: 0,
        explanation: {
          en: "Adult T-Rex weighed between 7-9 tons, making it incredibly heavy but still able to move with surprising agility for its size.",
          es: "El T-Rex adulto pesaba entre 7-9 toneladas, haciéndolo increíblemente pesado pero aún capaz de moverse con agilidad sorprendente para su tamaño.",
          de: "Ein erwachsener T-Rex wog zwischen 7-9 Tonnen, was ihn unglaublich schwer machte, aber trotzdem überraschend wendig für seine Größe.",
          nl: "Een volwassen T-Rex woog tussen 7-9 ton, waardoor hij ongelofelijk zwaar was maar toch verrassend behendig kon bewegen voor zijn grootte."
        }
      },
      {
        question: {
          en: "What was the bite force of a T-Rex?",
          es: "¿Cuál era la fuerza de mordida de un T-Rex?",
          de: "Wie stark war die Beißkraft eines T-Rex?",
          nl: "Wat was de bijtkracht van een T-Rex?"
        },
        options: [
          { en: "12,800 pounds per square inch", es: "12,800 libras por pulgada cuadrada", de: "12,800 Pfund pro Quadratzoll", nl: "12,800 pond per vierkante inch" },
          { en: "3,000 pounds per square inch", es: "3,000 libras por pulgada cuadrada", de: "3,000 Pfund pro Quadratzoll", nl: "3,000 pond per vierkante inch" },
          { en: "25,000 pounds per square inch", es: "25,000 libras por pulgada cuadrada", de: "25,000 Pfund pro Quadratzoll", nl: "25,000 pond per vierkante inch" },
          { en: "1,500 pounds per square inch", es: "1,500 libras por pulgada cuadrada", de: "1,500 Pfund pro Quadratzoll", nl: "1,500 pond per vierkante inch" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex had the strongest bite of any land animal ever, with a force of about 12,800 PSI - strong enough to crush a car!",
          es: "El T-Rex tenía la mordida más fuerte de cualquier animal terrestre jamás, con una fuerza de aproximadamente 12,800 PSI - ¡lo suficientemente fuerte como para aplastar un auto!",
          de: "T-Rex hatte den stärksten Biss aller Landtiere, mit einer Kraft von etwa 12,800 PSI - stark genug, um ein Auto zu zerquetschen!",
          nl: "T-Rex had de sterkste beet van alle landdieren ooit, met een kracht van ongeveer 12,800 PSI - sterk genoeg om een auto te verpletteren!"
        }
      },
      {
        question: {
          en: "How tall was a T-Rex at the hip?",
          es: "¿Qué tan alto era un T-Rex en la cadera?",
          de: "Wie hoch war ein T-Rex an der Hüfte?",
          nl: "Hoe hoog was een T-Rex bij de heup?"
        },
        options: [
          { en: "3.6-4 meters (12-13 feet)", es: "3.6-4 metros (12-13 pies)", de: "3.6-4 Meter (12-13 Fuß)", nl: "3.6-4 meter (12-13 voet)" },
          { en: "1-2 meters (3-6 feet)", es: "1-2 metros (3-6 pies)", de: "1-2 Meter (3-6 Fuß)", nl: "1-2 meter (3-6 voet)" },
          { en: "6-7 meters (20-23 feet)", es: "6-7 metros (20-23 pies)", de: "6-7 Meter (20-23 Fuß)", nl: "6-7 meter (20-23 voet)" },
          { en: "8-10 meters (26-33 feet)", es: "8-10 metros (26-33 pies)", de: "8-10 Meter (26-33 Fuß)", nl: "8-10 meter (26-33 voet)" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex stood about 3.6-4 meters tall at the hip, with its head reaching even higher when upright.",
          es: "El T-Rex medía aproximadamente 3.6-4 metros de altura en la cadera, con su cabeza alcanzando aún más altura cuando estaba erguido.",
          de: "T-Rex war etwa 3.6-4 Meter hoch an der Hüfte, wobei sein Kopf noch höher reichte, wenn er aufrecht stand.",
          nl: "T-Rex was ongeveer 3.6-4 meter hoog bij de heup, met zijn hoofd dat nog hoger reikte als hij rechtop stond."
        }
      },
      {
        question: {
          en: "What type of vision did T-Rex have?",
          es: "¿Qué tipo de visión tenía el T-Rex?",
          de: "Welche Art von Sehvermögen hatte T-Rex?",
          nl: "Wat voor soort zicht had T-Rex?"
        },
        options: [
          { en: "Excellent binocular vision", es: "Excelente visión binocular", de: "Ausgezeichnetes binokulares Sehen", nl: "Uitstekend binoculair zicht" },
          { en: "Poor eyesight", es: "Mala vista", de: "Schlechtes Sehvermögen", nl: "Slecht zicht" },
          { en: "Only black and white vision", es: "Solo visión en blanco y negro", de: "Nur Schwarz-Weiß-Sicht", nl: "Alleen zwart-wit zicht" },
          { en: "Eyes on sides of head", es: "Ojos a los lados de la cabeza", de: "Augen an den Seiten des Kopfes", nl: "Ogen aan de zijkanten van het hoofd" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex had forward-facing eyes that provided excellent binocular vision and depth perception, perfect for hunting prey.",
          es: "El T-Rex tenía ojos orientados hacia adelante que proporcionaban excelente visión binocular y percepción de profundidad, perfecta para cazar presas.",
          de: "T-Rex hatte nach vorn gerichtete Augen, die ausgezeichnetes binokulares Sehen und Tiefenwahrnehmung ermöglichten, perfekt für die Jagd.",
          nl: "T-Rex had naar voren gerichte ogen die uitstekend binoculair zicht en dieptewaarneming boden, perfect voor het jagen op prooi."
        }
      },
      {
        question: {
          en: "How fast could a T-Rex run?",
          es: "¿Qué tan rápido podía correr un T-Rex?",
          de: "Wie schnell konnte ein T-Rex laufen?",
          nl: "Hoe snel kon een T-Rex rennen?"
        },
        options: [
          { en: "20-25 km/h (12-16 mph)", es: "20-25 km/h (12-16 mph)", de: "20-25 km/h (12-16 mph)", nl: "20-25 km/h (12-16 mph)" },
          { en: "50-60 km/h (31-37 mph)", es: "50-60 km/h (31-37 mph)", de: "50-60 km/h (31-37 mph)", nl: "50-60 km/h (31-37 mph)" },
          { en: "5-10 km/h (3-6 mph)", es: "5-10 km/h (3-6 mph)", de: "5-10 km/h (3-6 mph)", nl: "5-10 km/h (3-6 mph)" },
          { en: "70-80 km/h (43-50 mph)", es: "70-80 km/h (43-50 mph)", de: "70-80 km/h (43-50 mph)", nl: "70-80 km/h (43-50 mph)" }
        ],
        correct: 0,
        explanation: {
          en: "Scientists estimate T-Rex could run at speeds of 20-25 km/h, which was fast enough to catch most prey but not as fast as once thought.",
          es: "Los científicos estiman que el T-Rex podía correr a velocidades de 20-25 km/h, lo suficientemente rápido para atrapar la mayoría de las presas pero no tan rápido como se pensaba antes.",
          de: "Wissenschaftler schätzen, dass T-Rex mit Geschwindigkeiten von 20-25 km/h laufen konnte, schnell genug, um die meiste Beute zu fangen, aber nicht so schnell wie früher gedacht.",
          nl: "Wetenschappers schatten dat T-Rex kon rennen met snelheden van 20-25 km/h, snel genoeg om de meeste prooi te vangen maar niet zo snel als vroeger gedacht."
        }
      },
      {
        question: {
          en: "What did baby T-Rex look like?",
          es: "¿Cómo se veía un bebé T-Rex?",
          de: "Wie sah ein Baby-T-Rex aus?",
          nl: "Hoe zag een baby T-Rex eruit?"
        },
        options: [
          { en: "Covered in fluffy feathers", es: "Cubierto de plumas esponjosas", de: "Mit flauschigen Federn bedeckt", nl: "Bedekt met pluizige veren" },
          { en: "Smooth scales like adults", es: "Escamas lisas como adultos", de: "Glatte Schuppen wie Erwachsene", nl: "Gladde schubben zoals volwassenen" },
          { en: "Completely hairless", es: "Completamente sin pelo", de: "Völlig haarlos", nl: "Helemaal kaal" },
          { en: "Thick fur coat", es: "Abrigo de piel gruesa", de: "Dickes Fell", nl: "Dikke vacht" }
        ],
        correct: 0,
        explanation: {
          en: "Baby T-Rex were likely covered in fluffy, downy feathers for warmth and insulation, which they would lose as they grew larger.",
          es: "Los bebés T-Rex probablemente estaban cubiertos de plumas esponjosas y suaves para calor y aislamiento, que perderían al crecer más grandes.",
          de: "Baby-T-Rex waren wahrscheinlich mit flauschigen, weichen Federn für Wärme und Isolation bedeckt, die sie beim Wachsen verlieren würden.",
          nl: "Baby T-Rex waren waarschijnlijk bedekt met pluizige, zachte veren voor warmte en isolatie, die ze zouden verliezen als ze groter werden."
        }
      },
      {
        question: {
          en: "What was T-Rex's scientific classification?",
          es: "¿Cuál era la clasificación científica del T-Rex?",
          de: "Was war die wissenschaftliche Klassifikation von T-Rex?",
          nl: "Wat was de wetenschappelijke classificatie van T-Rex?"
        },
        options: [
          { en: "Theropod dinosaur", es: "Dinosaurio terópodo", de: "Theropoden-Dinosaurier", nl: "Theropode dinosaurus" },
          { en: "Sauropod dinosaur", es: "Dinosaurio saurópodo", de: "Sauropoden-Dinosaurier", nl: "Sauropode dinosaurus" },
          { en: "Ornithopod dinosaur", es: "Dinosaurio ornitópodo", de: "Ornithopoden-Dinosaurier", nl: "Ornithopode dinosaurus" },
          { en: "Ceratopsian dinosaur", es: "Dinosaurio ceratópsido", de: "Ceratopsier-Dinosaurier", nl: "Ceratopsische dinosaurus" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex belonged to the theropod group of dinosaurs, which were bipedal carnivores with sharp teeth and claws.",
          es: "El T-Rex pertenecía al grupo de dinosaurios terópodos, que eran carnívoros bípedos con dientes y garras afilados.",
          de: "T-Rex gehörte zur Gruppe der Theropoden-Dinosaurier, die zweibeinige Fleischfresser mit scharfen Zähnen und Krallen waren.",
          nl: "T-Rex behoorde tot de groep theropode dinosaurussen, die tweevoetige vleeseters waren met scherpe tanden en klauwen."
        }
      },
      {
        question: {
          en: "How many fingers did T-Rex have on each hand?",
          es: "¿Cuántos dedos tenía el T-Rex en cada mano?",
          de: "Wie viele Finger hatte T-Rex an jeder Hand?",
          nl: "Hoeveel vingers had T-Rex aan elke hand?"
        },
        options: [
          { en: "2 fingers", es: "2 dedos", de: "2 Finger", nl: "2 vingers" },
          { en: "3 fingers", es: "3 dedos", de: "3 Finger", nl: "3 vingers" },
          { en: "4 fingers", es: "4 dedos", de: "4 Finger", nl: "4 vingers" },
          { en: "5 fingers", es: "5 dedos", de: "5 Finger", nl: "5 vingers" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex had only 2 functional fingers on each tiny arm, but these fingers were incredibly strong and had sharp claws.",
          es: "El T-Rex tenía solo 2 dedos funcionales en cada brazo pequeño, pero estos dedos eran increíblemente fuertes y tenían garras afiladas.",
          de: "T-Rex hatte nur 2 funktionsfähige Finger an jedem winzigen Arm, aber diese Finger waren unglaublich stark und hatten scharfe Krallen.",
          nl: "T-Rex had slechts 2 functionele vingers aan elke kleine arm, maar deze vingers waren ongelofelijk sterk en hadden scherpe klauwen."
        }
      },
      {
        question: {
          en: "What was the first T-Rex fossil discovered named?",
          es: "¿Cómo se llamó el primer fósil de T-Rex descubierto?",
          de: "Wie wurde das erste entdeckte T-Rex-Fossil genannt?",
          nl: "Hoe heette het eerste ontdekte T-Rex fossiel?"
        },
        options: [
          { en: "Sue", es: "Sue", de: "Sue", nl: "Sue" },
          { en: "Stan", es: "Stan", de: "Stan", nl: "Stan" },
          { en: "Jane", es: "Jane", de: "Jane", nl: "Jane" },
          { en: "Rex", es: "Rex", de: "Rex", nl: "Rex" }
        ],
        correct: 0,
        explanation: {
          en: "The most famous T-Rex fossil is 'Sue', named after paleontologist Sue Hendrickson who discovered it in 1990 in South Dakota.",
          es: "El fósil de T-Rex más famoso es 'Sue', nombrado en honor a la paleontóloga Sue Hendrickson que lo descubrió en 1990 en Dakota del Sur.",
          de: "Das berühmteste T-Rex-Fossil ist 'Sue', benannt nach der Paläontologin Sue Hendrickson, die es 1990 in South Dakota entdeckte.",
          nl: "Het beroemdste T-Rex fossiel is 'Sue', genoemd naar paleontoloog Sue Hendrickson die het in 1990 in South Dakota ontdekte."
        }
      },
      {
        question: {
          en: "What did T-Rex primarily eat?",
          es: "¿Qué comía principalmente el T-Rex?",
          de: "Was fraß T-Rex hauptsächlich?",
          nl: "Wat at T-Rex voornamelijk?"
        },
        options: [
          { en: "Large herbivorous dinosaurs", es: "Grandes dinosaurios herbívoros", de: "Große pflanzenfressende Dinosaurier", nl: "Grote plantenetende dinosaurussen" },
          { en: "Fish and marine animals", es: "Peces y animales marinos", de: "Fische und Meerestiere", nl: "Vissen en zeedieren" },
          { en: "Only plants and fruits", es: "Solo plantas y frutas", de: "Nur Pflanzen und Früchte", nl: "Alleen planten en vruchten" },
          { en: "Small insects and worms", es: "Pequeños insectos y gusanos", de: "Kleine Insekten und Würmer", nl: "Kleine insecten en wormen" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex was a apex predator that primarily hunted large herbivorous dinosaurs like Triceratops and Edmontosaurus.",
          es: "El T-Rex era un depredador ápice que cazaba principalmente grandes dinosaurios herbívoros como Triceratops y Edmontosaurus.",
          de: "T-Rex war ein Spitzenprädator, der hauptsächlich große pflanzenfressende Dinosaurier wie Triceratops und Edmontosaurus jagte.",
          nl: "T-Rex was een toproofdier dat voornamelijk op grote plantenetende dinosaurussen zoals Triceratops en Edmontosaurus jaagde."
        }
      },
      {
        question: {
          en: "How long were T-Rex's largest teeth?",
          es: "¿Cuánto medían los dientes más grandes del T-Rex?",
          de: "Wie lang waren die größten Zähne von T-Rex?",
          nl: "Hoe lang waren de grootste tanden van T-Rex?"
        },
        options: [
          { en: "20 cm (8 inches)", es: "20 cm (8 pulgadas)", de: "20 cm (8 Zoll)", nl: "20 cm (8 inch)" },
          { en: "10 cm (4 inches)", es: "10 cm (4 pulgadas)", de: "10 cm (4 Zoll)", nl: "10 cm (4 inch)" },
          { en: "30 cm (12 inches)", es: "30 cm (12 pulgadas)", de: "30 cm (12 Zoll)", nl: "30 cm (12 inch)" },
          { en: "5 cm (2 inches)", es: "5 cm (2 pulgadas)", de: "5 cm (2 Zoll)", nl: "5 cm (2 inch)" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex's largest teeth could grow up to 20 cm long including the root, making them some of the largest teeth of any land predator.",
          es: "Los dientes más grandes del T-Rex podían crecer hasta 20 cm de largo incluyendo la raíz, convirtiéndolos en algunos de los dientes más grandes de cualquier depredador terrestre.",
          de: "Die größten Zähne von T-Rex konnten bis zu 20 cm lang werden einschließlich der Wurzel, was sie zu einigen der größten Zähne aller Landräuber macht.",
          nl: "De grootste tanden van T-Rex konden tot 20 cm lang worden inclusief de wortel, waardoor ze enkele van de grootste tanden van alle landroofdieren waren."
        }
      },
      {
        question: {
          en: "What was unique about T-Rex's skull?",
          es: "¿Qué tenía de único el cráneo del T-Rex?",
          de: "Was war einzigartig am Schädel von T-Rex?",
          nl: "Wat was uniek aan de schedel van T-Rex?"
        },
        options: [
          { en: "Massive size with air-filled bones", es: "Tamaño masivo con huesos llenos de aire", de: "Massive Größe mit luftgefüllten Knochen", nl: "Massale grootte met luchtgevulde botten" },
          { en: "Completely solid bone", es: "Hueso completamente sólido", de: "Völlig massiver Knochen", nl: "Volledig massief bot" },
          { en: "Made of cartilage only", es: "Hecho solo de cartílago", de: "Nur aus Knorpel", nl: "Alleen van kraakbeen gemaakt" },
          { en: "Very small and lightweight", es: "Muy pequeño y ligero", de: "Sehr klein und leicht", nl: "Erg klein en licht" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex had a massive skull that was surprisingly lightweight due to air-filled chambers in the bones, reducing weight while maintaining strength.",
          es: "El T-Rex tenía un cráneo masivo que era sorprendentemente ligero debido a cámaras llenas de aire en los huesos, reduciendo el peso mientras mantenía la fuerza.",
          de: "T-Rex hatte einen massiven Schädel, der überraschend leicht war aufgrund luftgefüllter Kammern in den Knochen, was das Gewicht reduzierte bei gleichbleibender Stärke.",
          nl: "T-Rex had een massale schedel die verrassend licht was door luchtgevulde kamers in de botten, wat het gewicht verminderde terwijl de sterkte behouden bleef."
        }
      },
      {
        question: {
          en: "How did T-Rex walk?",
          es: "¿Cómo caminaba el T-Rex?",
          de: "Wie ging T-Rex?",
          nl: "Hoe liep T-Rex?"
        },
        options: [
          { en: "On two powerful hind legs", es: "Sobre dos poderosas patas traseras", de: "Auf zwei kräftigen Hinterbeinen", nl: "Op twee krachtige achterpoten" },
          { en: "On all four legs", es: "En las cuatro patas", de: "Auf allen vier Beinen", nl: "Op alle vier de poten" },
          { en: "By hopping like a kangaroo", es: "Saltando como un canguro", de: "Hüpfend wie ein Känguru", nl: "Springend als een kangoeroe" },
          { en: "By sliding on its belly", es: "Deslizándose sobre su vientre", de: "Auf dem Bauch rutschend", nl: "Glijdend op zijn buik" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex was bipedal, walking upright on two powerful hind legs, with its tail acting as a counterbalance to its massive head.",
          es: "El T-Rex era bípedo, caminando erguido sobre dos poderosas patas traseras, con su cola actuando como contrapeso de su cabeza masiva.",
          de: "T-Rex war zweibeinig, ging aufrecht auf zwei kräftigen Hinterbeinen, wobei sein Schwanz als Gegengewicht zu seinem massiven Kopf diente.",
          nl: "T-Rex was tweevoetig, liep rechtop op twee krachtige achterpoten, met zijn staart als tegenwicht voor zijn massale hoofd."
        }
      },
      {
        question: {
          en: "How long did a T-Rex typically live?",
          es: "¿Cuánto tiempo vivía típicamente un T-Rex?",
          de: "Wie lange lebte ein T-Rex normalerweise?",
          nl: "Hoe lang leefde een T-Rex gewoonlijk?"
        },
        options: [
          { en: "25-30 yrs", es: "25-30 años", de: "25-30 Jahre", nl: "25-30 jaar" },
          { en: "10-15 yrs", es: "10-15 años", de: "10-15 Jahre", nl: "10-15 jaar" },
          { en: "50-60 yrs", es: "50-60 años", de: "50-60 Jahre", nl: "50-60 jaar" },
          { en: "100+ yrs", es: "100+ años", de: "100+ Jahre", nl: "100+ jaar" }
        ],
        correct: 0,
        explanation: {
          en: "Scientists estimate that T-Rex lived for about 25-30 years, which was considered a long lifespan for large predatory dinosaurs of that era.",
          es: "Los científicos estiman que el T-Rex vivía aproximadamente 25-30 años, lo que se consideraba una vida larga para grandes dinosaurios depredadores de esa era.",
          de: "Wissenschaftler schätzen, dass T-Rex etwa 25-30 Jahre lebte, was als lange Lebensspanne für große Raubdinosaurier dieser Ära galt.",
          nl: "Wetenschappers schatten dat T-Rex ongeveer 25-30 jaar leefde, wat werd beschouwd als een lange levensduur voor grote roofdier-dinosaurussen van die tijd."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
