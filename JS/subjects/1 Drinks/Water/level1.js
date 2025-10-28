// Quiz - Level 1: Drinken - Water (Basis waterkennis)
(function() {
  const level1 = {
    name: {
      en: "Water Basics",
      es: "Conceptos Básicos del Agua",
      de: "Wasser Grundlagen",
      nl: "Water Basiskennis"
    },
    questions: [
      {
        question: {
          en: "What is the chemical formula for water?",
          es: "¿Cuál es la fórmula química del agua?",
          de: "Was ist die chemische Formel für Wasser?",
          nl: "Wat is de chemische formule voor water?"
        },
        options: [
          { en: "H2O", es: "H2O", de: "H2O", nl: "H2O" },
          { en: "CO2", es: "CO2", de: "CO2", nl: "CO2" },
          { en: "O2", es: "O2", de: "O2", nl: "O2" },
          { en: "H2", es: "H2", de: "H2", nl: "H2" }
        ],
        correct: 0,
        explanation: {
          en: "Water has the chemical formula H2O, meaning it consists of two hydrogen atoms and one oxygen atom.",
          es: "El agua tiene la fórmula química H2O, lo que significa que consta de dos átomos de hidrógeno y un átomo de oxígeno.",
          de: "Wasser hat die chemische Formel H2O, was bedeutet, dass es aus zwei Wasserstoffatomen und einem Sauerstoffatom besteht.",
          nl: "Water heeft de chemische formule H2O, wat betekent dat het bestaat uit twee waterstofatomen en één zuurstofatoom."
        }
      },
      {
        question: {
          en: "What percentage of the human body is water?",
          es: "¿Qué porcentaje del cuerpo humano es agua?",
          de: "Wie viel Prozent des menschlichen Körpers besteht aus Wasser?",
          nl: "Hoeveel procent van het menselijk lichaam bestaat uit water?"
        },
        options: [
          { en: "30%", es: "30%", de: "30%", nl: "30%" },
          { en: "50%", es: "50%", de: "50%", nl: "50%" },
          { en: "60%", es: "60%", de: "60%", nl: "60%" },
          { en: "90%", es: "90%", de: "90%", nl: "90%" }
        ],
        correct: 2,
        explanation: {
          en: "The human body is approximately 60% water. This percentage varies with age, gender, and body composition.",
          es: "El cuerpo humano es aproximadamente 60% agua. Este porcentaje varía con la edad, el género y la composición corporal.",
          de: "Der menschliche Körper besteht zu etwa 60% aus Wasser. Dieser Prozentsatz variiert mit Alter, Geschlecht und Körperzusammensetzung.",
          nl: "Het menselijk lichaam bestaat voor ongeveer 60% uit water. Dit percentage varieert met leeftijd, geslacht en lichaamssamenstelling."
        }
      },
      {
        question: {
          en: "At what temperature does water freeze?",
          es: "¿A qué temperatura se congela el agua?",
          de: "Bei welcher Temperatur gefriert Wasser?",
          nl: "Bij welke temperatuur bevriest water?"
        },
        options: [
          { en: "0°C (32°F)", es: "0°C (32°F)", de: "0°C (32°F)", nl: "0°C (32°F)" },
          { en: "10°C (50°F)", es: "10°C (50°F)", de: "10°C (50°F)", nl: "10°C (50°F)" },
          { en: "-10°C (14°F)", es: "-10°C (14°F)", de: "-10°C (14°F)", nl: "-10°C (14°F)" },
          { en: "100°C (212°F)", es: "100°C (212°F)", de: "100°C (212°F)", nl: "100°C (212°F)" }
        ],
        correct: 0,
        explanation: {
          en: "Water freezes at 0°C (32°F) under normal atmospheric pressure. This is the point where water changes from liquid to solid (ice).",
          es: "El agua se congela a 0°C (32°F) bajo presión atmosférica normal. Este es el punto donde el agua cambia de líquido a sólido (hielo).",
          de: "Wasser gefriert bei 0°C (32°F) unter normalem atmosphärischen Druck. Dies ist der Punkt, an dem Wasser von flüssig zu fest (Eis) wechselt.",
          nl: "Water bevriest bij 0°C (32°F) onder normale atmosferische druk. Dit is het punt waarop water verandert van vloeibaar naar vast (ijs)."
        }
      },
      {
        question: {
          en: "At what temperature does water boil at sea level?",
          es: "¿A qué temperatura hierve el agua al nivel del mar?",
          de: "Bei welcher Temperatur kocht Wasser auf Meereshöhe?",
          nl: "Bij welke temperatuur kookt water op zeeniveau?"
        },
        options: [
          { en: "50°C (122°F)", es: "50°C (122°F)", de: "50°C (122°F)", nl: "50°C (122°F)" },
          { en: "75°C (167°F)", es: "75°C (167°F)", de: "75°C (167°F)", nl: "75°C (167°F)" },
          { en: "100°C (212°F)", es: "100°C (212°F)", de: "100°C (212°F)", nl: "100°C (212°F)" },
          { en: "150°C (302°F)", es: "150°C (302°F)", de: "150°C (302°F)", nl: "150°C (302°F)" }
        ],
        correct: 2,
        explanation: {
          en: "Water boils at 100°C (212°F) at sea level. This temperature decreases at higher altitudes due to lower atmospheric pressure.",
          es: "El agua hierve a 100°C (212°F) al nivel del mar. Esta temperatura disminuye en altitudes más altas debido a la menor presión atmosférica.",
          de: "Wasser kocht bei 100°C (212°F) auf Meereshöhe. Diese Temperatur sinkt in höheren Lagen aufgrund des niedrigeren atmosphärischen Drucks.",
          nl: "Water kookt bij 100°C (212°F) op zeeniveau. Deze temperatuur daalt op grotere hoogtes door de lagere atmosferische druk."
        }
      },
      {
        question: {
          en: "How much water should an average adult drink per day?",
          es: "¿Cuánta agua debe beber un adulto promedio por día?",
          de: "Wie viel Wasser sollte ein durchschnittlicher Erwachsener pro Tag trinken?",
          nl: "Hoeveel water moet een gemiddelde volwassene per dag drinken?"
        },
        options: [
          { en: "0.5 liters", es: "0.5 litros", de: "0,5 Liter", nl: "0,5 liter" },
          { en: "1 liter", es: "1 litro", de: "1 Liter", nl: "1 liter" },
          { en: "2 liters", es: "2 litros", de: "2 Liter", nl: "2 liter" },
          { en: "5 liters", es: "5 litros", de: "5 Liter", nl: "5 liter" }
        ],
        correct: 2,
        explanation: {
          en: "Health experts commonly recommend around 2 liters (8 glasses) of water per day for an average adult, though needs vary based on activity level, climate, and individual factors.",
          es: "Los expertos en salud comúnmente recomiendan alrededor de 2 litros (8 vasos) de agua por día para un adulto promedio, aunque las necesidades varían según el nivel de actividad, el clima y los factores individuales.",
          de: "Gesundheitsexperten empfehlen üblicherweise etwa 2 Liter (8 Gläser) Wasser pro Tag für einen durchschnittlichen Erwachsenen, obwohl der Bedarf je nach Aktivitätsniveau, Klima und individuellen Faktoren variiert.",
          nl: "Gezondheidsexperts raden gewoonlijk ongeveer 2 liter (8 glazen) water per dag aan voor een gemiddelde volwassene, hoewel de behoefte varieert op basis van activiteitsniveau, klimaat en individuele factoren."
        }
      },
      {
        question: {
          en: "What is the most common substance on Earth's surface?",
          es: "¿Cuál es la sustancia más común en la superficie de la Tierra?",
          de: "Was ist die häufigste Substanz auf der Erdoberfläche?",
          nl: "Wat is de meest voorkomende stof op het aardoppervlak?"
        },
        options: [
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Rock", es: "Roca", de: "Gestein", nl: "Steen" },
          { en: "Soil", es: "Suelo", de: "Boden", nl: "Grond" }
        ],
        correct: 1,
        explanation: {
          en: "Water covers about 71% of Earth's surface, making it the most common substance on our planet's surface, mostly in oceans, seas, and lakes.",
          es: "El agua cubre aproximadamente el 71% de la superficie de la Tierra, lo que la convierte en la sustancia más común en la superficie de nuestro planeta, principalmente en océanos, mares y lagos.",
          de: "Wasser bedeckt etwa 71% der Erdoberfläche und ist damit die häufigste Substanz auf der Oberfläche unseres Planeten, hauptsächlich in Ozeanen, Meeren und Seen.",
          nl: "Water bedekt ongeveer 71% van het aardoppervlak, waardoor het de meest voorkomende stof op het oppervlak van onze planeet is, voornamelijk in oceanen, zeeën en meren."
        }
      },
      {
        question: {
          en: "What happens to water when it freezes?",
          es: "¿Qué le sucede al agua cuando se congela?",
          de: "Was passiert mit Wasser, wenn es gefriert?",
          nl: "Wat gebeurt er met water als het bevriest?"
        },
        options: [
          { en: "It shrinks", es: "Se encoge", de: "Es schrumpft", nl: "Het krimpt" },
          { en: "It expands", es: "Se expande", de: "Es dehnt sich aus", nl: "Het zet uit" },
          { en: "It stays the same size", es: "Mantiene el mismo tamaño", de: "Es bleibt gleich groß", nl: "Het blijft even groot" },
          { en: "It evaporates", es: "Se evapora", de: "Es verdampft", nl: "Het verdampt" }
        ],
        correct: 1,
        explanation: {
          en: "Water expands when it freezes, increasing in volume by about 9%. This is why ice floats on water and why pipes can burst in freezing weather.",
          es: "El agua se expande cuando se congela, aumentando su volumen en aproximadamente un 9%. Por eso el hielo flota en el agua y las tuberías pueden reventar en clima helado.",
          de: "Wasser dehnt sich beim Gefrieren aus und vergrößert sein Volumen um etwa 9%. Deshalb schwimmt Eis auf Wasser und Rohre können bei Frost platzen.",
          nl: "Water zet uit wanneer het bevriest en neemt in volume toe met ongeveer 9%. Daarom drijft ijs op water en kunnen leidingen barsten bij vriesweer."
        }
      },
      {
        question: {
          en: "What are the three states of water?",
          es: "¿Cuáles son los tres estados del agua?",
          de: "Was sind die drei Zustände von Wasser?",
          nl: "Wat zijn de drie toestanden van water?"
        },
        options: [
          { en: "Hot, cold, warm", es: "Caliente, frío, tibio", de: "Heiß, kalt, warm", nl: "Heet, koud, warm" },
          { en: "Solid, liquid, gas", es: "Sólido, líquido, gas", de: "Fest, flüssig, gasförmig", nl: "Vast, vloeibaar, gas" },
          { en: "Fresh, salt, brackish", es: "Dulce, salada, salobre", de: "Süß, salzig, brackig", nl: "Zoet, zout, brak" },
          { en: "Clean, dirty, pure", es: "Limpia, sucia, pura", de: "Sauber, schmutzig, rein", nl: "Schoon, vuil, puur" }
        ],
        correct: 1,
        explanation: {
          en: "The three states of water are solid (ice), liquid (water), and gas (water vapor or steam). Water can change between these states through freezing, melting, evaporation, and condensation.",
          es: "Los tres estados del agua son sólido (hielo), líquido (agua) y gas (vapor de agua). El agua puede cambiar entre estos estados mediante congelación, fusión, evaporación y condensación.",
          de: "Die drei Zustände von Wasser sind fest (Eis), flüssig (Wasser) und gasförmig (Wasserdampf). Wasser kann durch Gefrieren, Schmelzen, Verdampfen und Kondensieren zwischen diesen Zuständen wechseln.",
          nl: "De drie toestanden van water zijn vast (ijs), vloeibaar (water) en gas (waterdamp of stoom). Water kan tussen deze toestanden veranderen door bevriezing, smelten, verdamping en condensatie."
        }
      },
      {
        question: {
          en: "What is water vapor?",
          es: "¿Qué es el vapor de agua?",
          de: "Was ist Wasserdampf?",
          nl: "Wat is waterdamp?"
        },
        options: [
          { en: "Water in its solid state", es: "Agua en estado sólido", de: "Wasser im festen Zustand", nl: "Water in vaste toestand" },
          { en: "Water mixed with air", es: "Agua mezclada con aire", de: "Mit Luft vermischtes Wasser", nl: "Water gemengd met lucht" },
          { en: "Water in its gas state", es: "Agua en estado gaseoso", de: "Wasser im gasförmigen Zustand", nl: "Water in gasvormige toestand" },
          { en: "Dirty water", es: "Agua sucia", de: "Schmutziges Wasser", nl: "Vuil water" }
        ],
        correct: 2,
        explanation: {
          en: "Water vapor is water in its gaseous state. It's invisible and forms when liquid water evaporates or ice sublimes directly into gas.",
          es: "El vapor de agua es agua en su estado gaseoso. Es invisible y se forma cuando el agua líquida se evapora o el hielo se sublima directamente en gas.",
          de: "Wasserdampf ist Wasser in seinem gasförmigen Zustand. Er ist unsichtbar und entsteht, wenn flüssiges Wasser verdunstet oder Eis direkt in Gas sublimiert.",
          nl: "Waterdamp is water in gasvormige toestand. Het is onzichtbaar en ontstaat wanneer vloeibaar water verdampt of ijs direct sublimeert tot gas."
        }
      },
      {
        question: {
          en: "What is the main source of fresh water on Earth?",
          es: "¿Cuál es la principal fuente de agua dulce en la Tierra?",
          de: "Was ist die Hauptquelle für Süßwasser auf der Erde?",
          nl: "Wat is de belangrijkste bron van zoet water op aarde?"
        },
        options: [
          { en: "Rivers", es: "Ríos", de: "Flüsse", nl: "Rivieren" },
          { en: "Lakes", es: "Lagos", de: "Seen", nl: "Meren" },
          { en: "Ice caps and glaciers", es: "Casquetes polares y glaciares", de: "Eiskappen und Gletscher", nl: "IJskappen en gletsjers" },
          { en: "Underground water", es: "Agua subterránea", de: "Grundwasser", nl: "Grondwater" }
        ],
        correct: 2,
        explanation: {
          en: "Ice caps and glaciers contain about 68.7% of Earth's fresh water. Most of this is locked in Antarctica and Greenland's ice sheets.",
          es: "Los casquetes polares y glaciares contienen aproximadamente el 68.7% del agua dulce de la Tierra. La mayor parte está encerrada en las capas de hielo de la Antártida y Groenlandia.",
          de: "Eiskappen und Gletscher enthalten etwa 68,7% des Süßwassers der Erde. Der größte Teil davon ist in den Eisschilden der Antarktis und Grönlands eingeschlossen.",
          nl: "IJskappen en gletsjers bevatten ongeveer 68,7% van het zoete water op aarde. Het grootste deel hiervan zit opgesloten in de ijskappen van Antarctica en Groenland."
        }
      },
      {
        question: {
          en: "What is the taste of pure water?",
          es: "¿Cuál es el sabor del agua pura?",
          de: "Wie schmeckt reines Wasser?",
          nl: "Wat is de smaak van puur water?"
        },
        options: [
          { en: "Sweet", es: "Dulce", de: "Süß", nl: "Zoet" },
          { en: "Sour", es: "Agrio", de: "Sauer", nl: "Zuur" },
          { en: "Tasteless", es: "Insípido", de: "Geschmacklos", nl: "Smaakloos" },
          { en: "Bitter", es: "Amargo", de: "Bitter", nl: "Bitter" }
        ],
        correct: 2,
        explanation: {
          en: "Pure water is tasteless, colorless, and odorless. Any taste in water typically comes from dissolved minerals, gases, or other substances.",
          es: "El agua pura es insípida, incolora e inodora. Cualquier sabor en el agua generalmente proviene de minerales disueltos, gases u otras sustancias.",
          de: "Reines Wasser ist geschmacklos, farblos und geruchlos. Jeder Geschmack im Wasser stammt typischerweise von gelösten Mineralien, Gasen oder anderen Substanzen.",
          nl: "Puur water is smaakloos, kleurloos en geurloos. Elke smaak in water komt meestal van opgeloste mineralen, gassen of andere stoffen."
        }
      },
      {
        question: {
          en: "What is the pH of pure water?",
          es: "¿Cuál es el pH del agua pura?",
          de: "Was ist der pH-Wert von reinem Wasser?",
          nl: "Wat is de pH van puur water?"
        },
        options: [
          { en: "pH 1 (very acidic)", es: "pH 1 (muy ácido)", de: "pH 1 (sehr sauer)", nl: "pH 1 (zeer zuur)" },
          { en: "pH 7 (neutral)", es: "pH 7 (neutral)", de: "pH 7 (neutral)", nl: "pH 7 (neutraal)" },
          { en: "pH 10 (alkaline)", es: "pH 10 (alcalino)", de: "pH 10 (alkalisch)", nl: "pH 10 (alkalisch)" },
          { en: "pH 14 (very alkaline)", es: "pH 14 (muy alcalino)", de: "pH 14 (sehr alkalisch)", nl: "pH 14 (zeer alkalisch)" }
        ],
        correct: 1,
        explanation: {
          en: "Pure water has a pH of 7, which is considered neutral on the pH scale. A pH below 7 is acidic, and above 7 is alkaline.",
          es: "El agua pura tiene un pH de 7, que se considera neutral en la escala de pH. Un pH inferior a 7 es ácido, y superior a 7 es alcalino.",
          de: "Reines Wasser hat einen pH-Wert von 7, der auf der pH-Skala als neutral gilt. Ein pH-Wert unter 7 ist sauer, über 7 ist alkalisch.",
          nl: "Puur water heeft een pH van 7, wat als neutraal wordt beschouwd op de pH-schaal. Een pH onder 7 is zuur, en boven 7 is alkalisch."
        }
      },
      {
        question: {
          en: "What is the water cycle?",
          es: "¿Qué es el ciclo del agua?",
          de: "Was ist der Wasserkreislauf?",
          nl: "Wat is de waterkringloop?"
        },
        options: [
          { en: "The process where water circulates between Earth's oceans, atmosphere, and land", es: "El proceso donde el agua circula entre los océanos, la atmósfera y la tierra", de: "Der Prozess, bei dem Wasser zwischen Ozeanen, Atmosphäre und Land zirkuliert", nl: "Het proces waarbij water circuleert tussen oceanen, atmosfeer en land" },
          { en: "The process of cleaning water", es: "El proceso de limpiar agua", de: "Der Prozess der Wasserreinigung", nl: "Het proces van waterreiniging" },
          { en: "The process of bottling water", es: "El proceso de embotellar agua", de: "Der Prozess der Wasserabfüllung", nl: "Het proces van water bottelen" },
          { en: "The process of freezing water", es: "El proceso de congelar agua", de: "Der Prozess des Wassergefrierens", nl: "Het proces van water bevriezen" }
        ],
        correct: 0,
        explanation: {
          en: "The water cycle is the continuous movement of water through evaporation, condensation, precipitation, and collection. Water evaporates from oceans, condenses into clouds, falls as rain, and returns to oceans.",
          es: "El ciclo del agua es el movimiento continuo del agua a través de la evaporación, condensación, precipitación y recolección. El agua se evapora de los océanos, se condensa en nubes, cae como lluvia y regresa a los océanos.",
          de: "Der Wasserkreislauf ist die kontinuierliche Bewegung von Wasser durch Verdunstung, Kondensation, Niederschlag und Sammlung. Wasser verdunstet aus Ozeanen, kondensiert zu Wolken, fällt als Regen und kehrt zu Ozeanen zurück.",
          nl: "De waterkringloop is de voortdurende beweging van water door verdamping, condensatie, neerslag en verzameling. Water verdampt uit oceanen, condenseert tot wolken, valt als regen en keert terug naar oceanen."
        }
      },
      {
        question: {
          en: "Is water renewable?",
          es: "¿Es el agua renovable?",
          de: "Ist Wasser erneuerbar?",
          nl: "Is water hernieuwbaar?"
        },
        options: [
          { en: "Yes, through the water cycle", es: "Sí, a través del ciclo del agua", de: "Ja, durch den Wasserkreislauf", nl: "Ja, door de waterkringloop" },
          { en: "No, it's a finite resource", es: "No, es un recurso finito", de: "Nein, es ist eine endliche Ressource", nl: "Nee, het is een eindige bron" },
          { en: "Only ocean water is renewable", es: "Solo el agua del océano es renovable", de: "Nur Meerwasser ist erneuerbar", nl: "Alleen zeewater is hernieuwbaar" },
          { en: "Only rain water is renewable", es: "Solo el agua de lluvia es renovable", de: "Nur Regenwasser ist erneuerbar", nl: "Alleen regenwater is hernieuwbaar" }
        ],
        correct: 0,
        explanation: {
          en: "Water is renewable through the water cycle. The same water has been cycling on Earth for billions of years through evaporation, precipitation, and condensation.",
          es: "El agua es renovable a través del ciclo del agua. La misma agua ha estado circulando en la Tierra durante miles de millones de años a través de la evaporación, precipitación y condensación.",
          de: "Wasser ist durch den Wasserkreislauf erneuerbar. Dasselbe Wasser zirkuliert seit Milliarden von Jahren auf der Erde durch Verdunstung, Niederschlag und Kondensation.",
          nl: "Water is hernieuwbaar door de waterkringloop. Hetzelfde water circuleert al miljarden jaren op aarde door verdamping, neerslag en condensatie."
        }
      },
      {
        question: {
          en: "What is hard water?",
          es: "¿Qué es agua dura?",
          de: "Was ist hartes Wasser?",
          nl: "Wat is hard water?"
        },
        options: [
          { en: "Frozen water (ice)", es: "Agua congelada (hielo)", de: "Gefrorenes Wasser (Eis)", nl: "Bevroren water (ijs)" },
          { en: "Water with high mineral content", es: "Agua con alto contenido mineral", de: "Wasser mit hohem Mineralgehalt", nl: "Water met hoog mineraalgehalte" },
          { en: "Water under high pressure", es: "Agua bajo alta presión", de: "Wasser unter hohem Druck", nl: "Water onder hoge druk" },
          { en: "Very cold water", es: "Agua muy fría", de: "Sehr kaltes Wasser", nl: "Zeer koud water" }
        ],
        correct: 1,
        explanation: {
          en: "Hard water contains high concentrations of dissolved minerals, particularly calcium and magnesium. It can leave deposits and affect soap's ability to lather.",
          es: "El agua dura contiene altas concentraciones de minerales disueltos, particularmente calcio y magnesio. Puede dejar depósitos y afectar la capacidad del jabón para hacer espuma.",
          de: "Hartes Wasser enthält hohe Konzentrationen gelöster Mineralien, insbesondere Kalzium und Magnesium. Es kann Ablagerungen hinterlassen und die Schaumbildung von Seife beeinträchtigen.",
          nl: "Hard water bevat hoge concentraties opgeloste mineralen, met name calcium en magnesium. Het kan afzettingen achterlaten en het schuimvermogen van zeep beïnvloeden."
        }
      },
      {
        question: {
          en: "What percentage of Earth's water is fresh water?",
          es: "¿Qué porcentaje del agua de la Tierra es agua dulce?",
          de: "Wie viel Prozent des Wassers auf der Erde ist Süßwasser?",
          nl: "Welk percentage van het water op aarde is zoet water?"
        },
        options: [
          { en: "1%", es: "1%", de: "1%", nl: "1%" },
          { en: "2.5%", es: "2.5%", de: "2,5%", nl: "2,5%" },
          { en: "10%", es: "10%", de: "10%", nl: "10%" },
          { en: "25%", es: "25%", de: "25%", nl: "25%" }
        ],
        correct: 1,
        explanation: {
          en: "Only about 2.5% of Earth's water is fresh water. The rest is salt water in oceans. Of that 2.5%, most is frozen in ice caps and glaciers.",
          es: "Solo alrededor del 2.5% del agua de la Tierra es agua dulce. El resto es agua salada en los océanos. De ese 2.5%, la mayoría está congelada en casquetes polares y glaciares.",
          de: "Nur etwa 2,5% des Wassers auf der Erde ist Süßwasser. Der Rest ist Salzwasser in den Ozeanen. Von diesen 2,5% ist das meiste in Eiskappen und Gletschern gefroren.",
          nl: "Slechts ongeveer 2,5% van het water op aarde is zoet water. De rest is zout water in oceanen. Van die 2,5% is het meeste bevroren in ijskappen en gletsjers."
        }
      },
      {
        question: {
          en: "Why is water essential for life?",
          es: "¿Por qué el agua es esencial para la vida?",
          de: "Warum ist Wasser für das Leben unerlässlich?",
          nl: "Waarom is water essentieel voor het leven?"
        },
        options: [
          { en: "It makes things wet", es: "Hace que las cosas estén mojadas", de: "Es macht Dinge nass", nl: "Het maakt dingen nat" },
          { en: "It's used in all biological processes and chemical reactions in living organisms", es: "Se usa en todos los procesos biológicos y reacciones químicas en organismos vivos", de: "Es wird in allen biologischen Prozessen und chemischen Reaktionen in lebenden Organismen verwendet", nl: "Het wordt gebruikt in alle biologische processen en chemische reacties in levende organismen" },
          { en: "It tastes good", es: "Sabe bien", de: "Es schmeckt gut", nl: "Het smaakt goed" },
          { en: "It's available everywhere", es: "Está disponible en todas partes", de: "Es ist überall verfügbar", nl: "Het is overal beschikbaar" }
        ],
        correct: 1,
        explanation: {
          en: "Water is essential because it's involved in virtually all biological processes. It transports nutrients, regulates body temperature, enables chemical reactions, and is the medium for cellular processes.",
          es: "El agua es esencial porque participa en prácticamente todos los procesos biológicos. Transporta nutrientes, regula la temperatura corporal, permite reacciones químicas y es el medio para los procesos celulares.",
          de: "Wasser ist essentiell, weil es an praktisch allen biologischen Prozessen beteiligt ist. Es transportiert Nährstoffe, reguliert die Körpertemperatur, ermöglicht chemische Reaktionen und ist das Medium für zelluläre Prozesse.",
          nl: "Water is essentieel omdat het betrokken is bij vrijwel alle biologische processen. Het transporteert voedingsstoffen, reguleert lichaamstemperatuur, maakt chemische reacties mogelijk en is het medium voor cellulaire processen."
        }
      },
      {
        question: {
          en: "What is condensation?",
          es: "¿Qué es la condensación?",
          de: "Was ist Kondensation?",
          nl: "Wat is condensatie?"
        },
        options: [
          { en: "Water turning from gas to liquid", es: "Agua convirtiéndose de gas a líquido", de: "Wasser wird von Gas zu Flüssigkeit", nl: "Water verandert van gas naar vloeistof" },
          { en: "Water turning from liquid to gas", es: "Agua convirtiéndose de líquido a gas", de: "Wasser wird von Flüssigkeit zu Gas", nl: "Water verandert van vloeistof naar gas" },
          { en: "Water turning from liquid to solid", es: "Agua convirtiéndose de líquido a sólido", de: "Wasser wird von Flüssigkeit zu Feststoff", nl: "Water verandert van vloeistof naar vast" },
          { en: "Water turning from solid to liquid", es: "Agua convirtiéndose de sólido a líquido", de: "Wasser wird von Feststoff zu Flüssigkeit", nl: "Water verandert van vast naar vloeistof" }
        ],
        correct: 0,
        explanation: {
          en: "Condensation is the process where water vapor (gas) cools and turns into liquid water. This happens when warm, moist air touches a cold surface, like dew forming on grass or water droplets on a cold glass.",
          es: "La condensación es el proceso donde el vapor de agua (gas) se enfría y se convierte en agua líquida. Esto sucede cuando el aire cálido y húmedo toca una superficie fría, como el rocío en la hierba o las gotas de agua en un vaso frío.",
          de: "Kondensation ist der Prozess, bei dem Wasserdampf (Gas) abkühlt und sich in flüssiges Wasser verwandelt. Dies geschieht, wenn warme, feuchte Luft eine kalte Oberfläche berührt, wie Tau auf Gras oder Wassertropfen auf einem kalten Glas.",
          nl: "Condensatie is het proces waarbij waterdamp (gas) afkoelt en verandert in vloeibaar water. Dit gebeurt wanneer warme, vochtige lucht een koud oppervlak raakt, zoals dauw op gras of waterdruppels op een koud glas."
        }
      },
      {
        question: {
          en: "What is evaporation?",
          es: "¿Qué es la evaporación?",
          de: "Was ist Verdunstung?",
          nl: "Wat is verdamping?"
        },
        options: [
          { en: "Water turning from liquid to gas", es: "Agua convirtiéndose de líquido a gas", de: "Wasser wird von Flüssigkeit zu Gas", nl: "Water verandert van vloeistof naar gas" },
          { en: "Water turning from gas to liquid", es: "Agua convirtiéndose de gas a líquido", de: "Wasser wird von Gas zu Flüssigkeit", nl: "Water verandert van gas naar vloeistof" },
          { en: "Water turning from solid to liquid", es: "Agua convirtiéndose de sólido a líquido", de: "Wasser wird von Feststoff zu Flüssigkeit", nl: "Water verandert van vast naar vloeistof" },
          { en: "Water dissolving minerals", es: "Agua disolviendo minerales", de: "Wasser löst Mineralien auf", nl: "Water lost mineralen op" }
        ],
        correct: 0,
        explanation: {
          en: "Evaporation is the process where liquid water turns into water vapor (gas). This happens when water molecules gain enough energy to escape from the liquid surface into the air. Sun's heat drives most evaporation on Earth.",
          es: "La evaporación es el proceso donde el agua líquida se convierte en vapor de agua (gas). Esto sucede cuando las moléculas de agua ganan suficiente energía para escapar de la superficie líquida hacia el aire. El calor del sol impulsa la mayor parte de la evaporación en la Tierra.",
          de: "Verdunstung ist der Prozess, bei dem flüssiges Wasser zu Wasserdampf (Gas) wird. Dies geschieht, wenn Wassermoleküle genug Energie gewinnen, um von der Flüssigkeitsoberfläche in die Luft zu entweichen. Die Sonnenwärme treibt die meiste Verdunstung auf der Erde an.",
          nl: "Verdamping is het proces waarbij vloeibaar water verandert in waterdamp (gas). Dit gebeurt wanneer watermoleculen voldoende energie krijgen om van het vloeistofoppervlak in de lucht te ontsnappen. Zonwarmte drijft de meeste verdamping op aarde aan."
        }
      },
      {
        question: {
          en: "What is the main difference between tap water and bottled water?",
          es: "¿Cuál es la principal diferencia entre el agua del grifo y el agua embotellada?",
          de: "Was ist der Hauptunterschied zwischen Leitungswasser und Flaschenwasser?",
          nl: "Wat is het belangrijkste verschil tussen kraanwater en gebotteld water?"
        },
        options: [
          { en: "Source and treatment process", es: "Fuente y proceso de tratamiento", de: "Quelle und Behandlungsprozess", nl: "Bron en behandelingsproces" },
          { en: "Temperature only", es: "Solo la temperatura", de: "Nur die Temperatur", nl: "Alleen de temperatuur" },
          { en: "Color", es: "Color", de: "Farbe", nl: "Kleur" },
          { en: "Chemical formula", es: "Fórmula química", de: "Chemische Formel", nl: "Chemische formule" }
        ],
        correct: 0,
        explanation: {
          en: "Tap water comes from municipal sources and is treated at water treatment plants, while bottled water comes from various sources (springs, wells, or purified municipal water) and is packaged for sale. Both must meet safety standards, but treatment processes differ.",
          es: "El agua del grifo proviene de fuentes municipales y se trata en plantas de tratamiento de agua, mientras que el agua embotellada proviene de varias fuentes (manantiales, pozos o agua municipal purificada) y se envasa para la venta. Ambas deben cumplir estándares de seguridad, pero los procesos de tratamiento difieren.",
          de: "Leitungswasser stammt aus kommunalen Quellen und wird in Wasseraufbereitungsanlagen behandelt, während Flaschenwasser aus verschiedenen Quellen (Quellen, Brunnen oder gereinigtes kommunales Wasser) stammt und zum Verkauf verpackt wird. Beide müssen Sicherheitsstandards erfüllen, aber die Behandlungsprozesse unterscheiden sich.",
          nl: "Kraanwater komt van gemeentelijke bronnen en wordt behandeld in waterzuiveringsinstallaties, terwijl gebotteld water afkomstig is van verschillende bronnen (bronnen, putten of gezuiverd gemeentelijk water) en verpakt wordt voor verkoop. Beide moeten voldoen aan veiligheidsnormen, maar behandelingsprocessen verschillen."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
