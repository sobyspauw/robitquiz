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
      {
        question: {
          en: "What are the three states of water?",
          es: "¿Cuáles son los tres estados del agua?",
          de: "Was sind die drei Aggregatzustände von Wasser?",
          nl: "Wat zijn de drie toestanden van water?"
        },
        options: [
          { en: "Solid, liquid, gas", es: "Sólido, líquido, gas", de: "Fest, flüssig, gasförmig", nl: "Vast, vloeibaar, gas" },
          { en: "Hot, cold, warm", es: "Caliente, frío, tibio", de: "Heiß, kalt, warm", nl: "Heet, koud, warm" },
          { en: "Clean, dirty, pure", es: "Limpio, sucio, puro", de: "Sauber, schmutzig, rein", nl: "Schoon, vuil, zuiver" },
          { en: "Fresh, salt, mineral", es: "Dulce, salado, mineral", de: "Süß, salzig, mineralisch", nl: "Zoet, zout, mineraal" }
        ],
        correct: 0,
        explanation: {
          en: "Water exists in three states: solid (ice), liquid (water), and gas (water vapor/steam). Temperature and pressure determine which state water is in.",
          es: "El agua existe en tres estados: sólido (hielo), líquido (agua) y gas (vapor de agua). La temperatura y la presión determinan en qué estado se encuentra el agua.",
          de: "Wasser existiert in drei Aggregatzuständen: fest (Eis), flüssig (Wasser) und gasförmig (Wasserdampf). Temperatur und Druck bestimmen, in welchem Zustand sich Wasser befindet.",
          nl: "Water bestaat in drie toestanden: vast (ijs), vloeibaar (water) en gas (waterdamp/stoom). Temperatuur en druk bepalen in welke toestand water zich bevindt."
        }
      },
      {
        question: {
          en: "What is the water cycle?",
          es: "¿Qué es el ciclo del agua?",
          de: "Was ist der Wasserkreislauf?",
          nl: "Wat is de watercyclus?"
        },
        options: [
          { en: "The continuous movement of water on Earth", es: "El movimiento continuo del agua en la Tierra", de: "Die kontinuierliche Bewegung von Wasser auf der Erde", nl: "De continue beweging van water op aarde" },
          { en: "Water flowing in pipes", es: "Agua fluyendo en tuberías", de: "Wasser fließt in Rohren", nl: "Water stroomt in leidingen" },
          { en: "The time water takes to freeze", es: "El tiempo que tarda el agua en congelarse", de: "Die Zeit, die Wasser zum Gefrieren benötigt", nl: "De tijd die water nodig heeft om te bevriezen" },
          { en: "Drinking 8 glasses per day", es: "Beber 8 vasos por día", de: "8 Gläser pro Tag trinken", nl: "8 glazen per dag drinken" }
        ],
        correct: 0,
        explanation: {
          en: "The water cycle is the continuous circulation of water through evaporation, condensation, precipitation, and collection. Water moves between oceans, atmosphere, and land in this endless cycle.",
          es: "El ciclo del agua es la circulación continua del agua a través de la evaporación, condensación, precipitación y recolección. El agua se mueve entre océanos, atmósfera y tierra en este ciclo interminable.",
          de: "Der Wasserkreislauf ist die kontinuierliche Zirkulation von Wasser durch Verdunstung, Kondensation, Niederschlag und Sammlung. Wasser bewegt sich in diesem endlosen Kreislauf zwischen Ozeanen, Atmosphäre und Land.",
          nl: "De watercyclus is de continue circulatie van water door verdamping, condensatie, neerslag en verzameling. Water beweegt tussen oceanen, atmosfeer en land in deze eindeloze cyclus."
        }
      },
      {
        question: {
          en: "What is fresh water?",
          es: "¿Qué es el agua dulce?",
          de: "Was ist Süßwasser?",
          nl: "Wat is zoet water?"
        },
        options: [
          { en: "Water with low salt content", es: "Agua con bajo contenido de sal", de: "Wasser mit niedrigem Salzgehalt", nl: "Water met laag zoutgehalte" },
          { en: "Newly made water", es: "Agua recién hecha", de: "Neu hergestelltes Wasser", nl: "Nieuw gemaakt water" },
          { en: "Cold water only", es: "Solo agua fría", de: "Nur kaltes Wasser", nl: "Alleen koud water" },
          { en: "Water from bottles", es: "Agua de botellas", de: "Wasser aus Flaschen", nl: "Water uit flessen" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh water contains very little dissolved salt, typically less than 1%. It's found in rivers, lakes, and groundwater. Only about 3% of Earth's water is fresh water.",
          es: "El agua dulce contiene muy poca sal disuelta, típicamente menos del 1%. Se encuentra en ríos, lagos y aguas subterráneas. Solo alrededor del 3% del agua de la Tierra es agua dulce.",
          de: "Süßwasser enthält sehr wenig gelöstes Salz, typischerweise weniger als 1%. Es kommt in Flüssen, Seen und Grundwasser vor. Nur etwa 3% des Wassers der Erde ist Süßwasser.",
          nl: "Zoet water bevat zeer weinig opgelost zout, meestal minder dan 1%. Het wordt gevonden in rivieren, meren en grondwater. Slechts ongeveer 3% van het water op aarde is zoet water."
        }
      },
      {
        question: {
          en: "Why is water important for life?",
          es: "¿Por qué es importante el agua para la vida?",
          de: "Warum ist Wasser wichtig für das Leben?",
          nl: "Waarom is water belangrijk voor leven?"
        },
        options: [
          { en: "All living things need water to survive", es: "Todos los seres vivos necesitan agua para sobrevivir", de: "Alle Lebewesen brauchen Wasser zum Überleben", nl: "Alle levende wezens hebben water nodig om te overleven" },
          { en: "Only for drinking", es: "Solo para beber", de: "Nur zum Trinken", nl: "Alleen om te drinken" },
          { en: "Just for plants", es: "Solo para plantas", de: "Nur für Pflanzen", nl: "Alleen voor planten" },
          { en: "To make ice cubes", es: "Para hacer cubitos de hielo", de: "Um Eiswürfel zu machen", nl: "Om ijsblokjes te maken" }
        ],
        correct: 0,
        explanation: {
          en: "Water is essential for all life. It helps cells function, regulates body temperature, transports nutrients, removes waste, and is needed for photosynthesis in plants.",
          es: "El agua es esencial para toda la vida. Ayuda a las células a funcionar, regula la temperatura corporal, transporta nutrientes, elimina desechos y es necesaria para la fotosíntesis en las plantas.",
          de: "Wasser ist für alles Leben essentiell. Es hilft Zellen zu funktionieren, reguliert die Körpertemperatur, transportiert Nährstoffe, entfernt Abfall und wird für die Photosynthese in Pflanzen benötigt.",
          nl: "Water is essentieel voor al het leven. Het helpt cellen functioneren, reguleert lichaamstemperatuur, transporteert voedingsstoffen, verwijdert afval en is nodig voor fotosynthese in planten."
        }
      },
      {
        question: {
          en: "What is salt water?",
          es: "¿Qué es el agua salada?",
          de: "Was ist Salzwasser?",
          nl: "Wat is zout water?"
        },
        options: [
          { en: "Water with high salt content", es: "Agua con alto contenido de sal", de: "Wasser mit hohem Salzgehalt", nl: "Water met hoog zoutgehalte" },
          { en: "Water that tastes salty from minerals", es: "Agua que sabe salada por minerales", de: "Wasser, das durch Mineralien salzig schmeckt", nl: "Water dat zout smaakt door mineralen" },
          { en: "Water with added table salt", es: "Agua con sal de mesa añadida", de: "Wasser mit zugesetztem Speisesalz", nl: "Water met toegevoegd keukenzout" },
          { en: "Water from salt factories", es: "Agua de fábricas de sal", de: "Wasser aus Salzfabriken", nl: "Water uit zoutfabrieken" }
        ],
        correct: 0,
        explanation: {
          en: "Salt water, found in oceans and seas, contains about 3.5% dissolved salt. About 97% of Earth's water is salt water, making it undrinkable without desalination.",
          es: "El agua salada, que se encuentra en océanos y mares, contiene aproximadamente 3.5% de sal disuelta. Alrededor del 97% del agua de la Tierra es agua salada, lo que la hace no potable sin desalinización.",
          de: "Salzwasser, das in Ozeanen und Meeren vorkommt, enthält etwa 3,5% gelöstes Salz. Etwa 97% des Wassers der Erde ist Salzwasser, das ohne Entsalzung nicht trinkbar ist.",
          nl: "Zout water, gevonden in oceanen en zeeën, bevat ongeveer 3,5% opgelost zout. Ongeveer 97% van het water op aarde is zout water, waardoor het zonder ontzilting ondrinkbaar is."
        }
      },
      {
        question: {
          en: "What is precipitation?",
          es: "¿Qué es la precipitación?",
          de: "Was ist Niederschlag?",
          nl: "Wat is neerslag?"
        },
        options: [
          { en: "Water falling from the sky", es: "Agua cayendo del cielo", de: "Wasser, das vom Himmel fällt", nl: "Water dat uit de lucht valt" },
          { en: "Water evaporating", es: "Agua evaporándose", de: "Wasser verdunstet", nl: "Water verdampt" },
          { en: "Water freezing solid", es: "Agua congelándose", de: "Wasser gefriert fest", nl: "Water bevriest vast" },
          { en: "Water purification", es: "Purificación de agua", de: "Wasserreinigung", nl: "Waterzuivering" }
        ],
        correct: 0,
        explanation: {
          en: "Precipitation is water falling from clouds to Earth's surface. It includes rain, snow, sleet, and hail. This is a key part of the water cycle.",
          es: "La precipitación es agua que cae de las nubes a la superficie de la Tierra. Incluye lluvia, nieve, aguanieve y granizo. Esta es una parte clave del ciclo del agua.",
          de: "Niederschlag ist Wasser, das von Wolken auf die Erdoberfläche fällt. Es umfasst Regen, Schnee, Graupel und Hagel. Dies ist ein wichtiger Teil des Wasserkreislaufs.",
          nl: "Neerslag is water dat van wolken naar het aardoppervlak valt. Het omvat regen, sneeuw, ijzel en hagel. Dit is een belangrijk onderdeel van de watercyclus."
        }
      },
      {
        question: {
          en: "What is a cloud made of?",
          es: "¿De qué está hecha una nube?",
          de: "Woraus besteht eine Wolke?",
          nl: "Waar bestaat een wolk uit?"
        },
        options: [
          { en: "Tiny water droplets or ice crystals", es: "Pequeñas gotas de agua o cristales de hielo", de: "Winzige Wassertröpfchen oder Eiskristalle", nl: "Kleine waterdruppels of ijskristallen" },
          { en: "Cotton-like material", es: "Material similar al algodón", de: "Baumwollähnliches Material", nl: "Katoenachtig materiaal" },
          { en: "Smoke from factories", es: "Humo de fábricas", de: "Rauch aus Fabriken", nl: "Rook van fabrieken" },
          { en: "Dust particles only", es: "Solo partículas de polvo", de: "Nur Staubpartikel", nl: "Alleen stofdeeltjes" }
        ],
        correct: 0,
        explanation: {
          en: "Clouds are made of millions of tiny water droplets or ice crystals floating in the air. They form when water vapor cools and condenses around dust particles.",
          es: "Las nubes están hechas de millones de pequeñas gotas de agua o cristales de hielo flotando en el aire. Se forman cuando el vapor de agua se enfría y condensa alrededor de partículas de polvo.",
          de: "Wolken bestehen aus Millionen winziger Wassertröpfchen oder Eiskristalle, die in der Luft schweben. Sie bilden sich, wenn Wasserdampf abkühlt und um Staubpartikel kondensiert.",
          nl: "Wolken bestaan uit miljoenen kleine waterdruppels of ijskristallen die in de lucht zweven. Ze vormen zich wanneer waterdamp afkoelt en condenseert rond stofdeeltjes."
        }
      },
      {
        question: {
          en: "What is ice?",
          es: "¿Qué es el hielo?",
          de: "Was ist Eis?",
          nl: "Wat is ijs?"
        },
        options: [
          { en: "Frozen water", es: "Agua congelada", de: "Gefrorenes Wasser", nl: "Bevroren water" },
          { en: "Very cold liquid", es: "Líquido muy frío", de: "Sehr kalte Flüssigkeit", nl: "Zeer koude vloeistof" },
          { en: "A different chemical", es: "Un químico diferente", de: "Eine andere Chemikalie", nl: "Een andere chemische stof" },
          { en: "Compressed water", es: "Agua comprimida", de: "Komprimiertes Wasser", nl: "Samengeperst water" }
        ],
        correct: 0,
        explanation: {
          en: "Ice is the solid form of water. When water freezes at 0°C (32°F), water molecules slow down and lock into a crystalline structure, becoming solid ice.",
          es: "El hielo es la forma sólida del agua. Cuando el agua se congela a 0°C (32°F), las moléculas de agua se ralentizan y se bloquean en una estructura cristalina, convirtiéndose en hielo sólido.",
          de: "Eis ist die feste Form von Wasser. Wenn Wasser bei 0°C (32°F) gefriert, verlangsamen sich die Wassermoleküle und verriegeln sich in einer kristallinen Struktur, wodurch festes Eis entsteht.",
          nl: "Ijs is de vaste vorm van water. Wanneer water bevriest bij 0°C (32°F), vertragen watermoleculen en sluiten zich in een kristallijne structuur, waardoor vast ijs ontstaat."
        }
      },
      {
        question: {
          en: "What is steam?",
          es: "¿Qué es el vapor?",
          de: "Was ist Dampf?",
          nl: "Wat is stoom?"
        },
        options: [
          { en: "Water in gas form", es: "Agua en forma de gas", de: "Wasser in Gasform", nl: "Water in gasvorm" },
          { en: "Hot liquid water", es: "Agua líquida caliente", de: "Heißes flüssiges Wasser", nl: "Heet vloeibaar water" },
          { en: "Smoke from fire", es: "Humo del fuego", de: "Rauch vom Feuer", nl: "Rook van vuur" },
          { en: "Melted ice", es: "Hielo derretido", de: "Geschmolzenes Eis", nl: "Gesmolten ijs" }
        ],
        correct: 0,
        explanation: {
          en: "Steam is water in its gaseous state. When water boils, it turns into steam (water vapor). You can see steam rising from a boiling kettle or pot.",
          es: "El vapor es agua en su estado gaseoso. Cuando el agua hierve, se convierte en vapor. Puedes ver vapor subiendo de una tetera o una olla hirviendo.",
          de: "Dampf ist Wasser in seinem gasförmigen Zustand. Wenn Wasser kocht, verwandelt es sich in Dampf (Wasserdampf). Man kann Dampf von einem kochenden Wasserkocher oder Topf aufsteigen sehen.",
          nl: "Stoom is water in zijn gasvormige toestand. Wanneer water kookt, verandert het in stoom (waterdamp). Je kunt stoom zien opstijgen uit een kokende ketel of pan."
        }
      },
      {
        question: {
          en: "Where is most of Earth's fresh water located?",
          es: "¿Dónde se encuentra la mayor parte del agua dulce de la Tierra?",
          de: "Wo befindet sich das meiste Süßwasser der Erde?",
          nl: "Waar bevindt zich het meeste zoet water op aarde?"
        },
        options: [
          { en: "In ice caps and glaciers", es: "En capas de hielo y glaciares", de: "In Eiskappen und Gletschern", nl: "In ijskappen en gletsjers" },
          { en: "In rivers", es: "En ríos", de: "In Flüssen", nl: "In rivieren" },
          { en: "In lakes", es: "En lagos", de: "In Seen", nl: "In meren" },
          { en: "In the atmosphere", es: "En la atmósfera", de: "In der Atmosphäre", nl: "In de atmosfeer" }
        ],
        correct: 0,
        explanation: {
          en: "About 69% of Earth's fresh water is frozen in ice caps, glaciers, and permanent snow. Antarctica and Greenland contain most of this frozen water.",
          es: "Aproximadamente el 69% del agua dulce de la Tierra está congelada en capas de hielo, glaciares y nieve permanente. La Antártida y Groenlandia contienen la mayor parte de esta agua congelada.",
          de: "Etwa 69% des Süßwassers der Erde ist in Eiskappen, Gletschern und permanentem Schnee eingefroren. Die Antarktis und Grönland enthalten den größten Teil dieses gefrorenen Wassers.",
          nl: "Ongeveer 69% van het zoete water op aarde is bevroren in ijskappen, gletsjers en permanente sneeuw. Antarctica en Groenland bevatten het grootste deel van dit bevroren water."
        }
      },
      {
        question: {
          en: "What is groundwater?",
          es: "¿Qué es el agua subterránea?",
          de: "Was ist Grundwasser?",
          nl: "Wat is grondwater?"
        },
        options: [
          { en: "Water stored underground in soil and rocks", es: "Agua almacenada bajo tierra en suelo y rocas", de: "Wasser, das unterirdisch in Boden und Gestein gespeichert ist", nl: "Water opgeslagen ondergronds in bodem en rotsen" },
          { en: "Water on the ground surface", es: "Agua en la superficie del suelo", de: "Wasser auf der Bodenoberfläche", nl: "Water op het grondoppervlak" },
          { en: "Water in underground pipes", es: "Agua en tuberías subterráneas", de: "Wasser in unterirdischen Rohren", nl: "Water in ondergrondse leidingen" },
          { en: "Dirty water", es: "Agua sucia", de: "Schmutziges Wasser", nl: "Vuil water" }
        ],
        correct: 0,
        explanation: {
          en: "Groundwater is water that fills spaces in soil and rock underground. It comes from rain and melted snow soaking into the ground. Wells tap into this groundwater.",
          es: "El agua subterránea es agua que llena espacios en el suelo y las rocas bajo tierra. Proviene de la lluvia y la nieve derretida que se filtra en el suelo. Los pozos aprovechan esta agua subterránea.",
          de: "Grundwasser ist Wasser, das Räume im Boden und Gestein unter der Erde füllt. Es stammt von Regen und geschmolzenem Schnee, der in den Boden sickert. Brunnen zapfen dieses Grundwasser an.",
          nl: "Grondwater is water dat ruimtes in de bodem en rotsen ondergronds vult. Het komt van regen en gesmolten sneeuw die in de grond sijpelt. Putten maken gebruik van dit grondwater."
        }
      },
      {
        question: {
          en: "What is a glacier?",
          es: "¿Qué es un glaciar?",
          de: "Was ist ein Gletscher?",
          nl: "Wat is een gletsjer?"
        },
        options: [
          { en: "A large mass of moving ice", es: "Una gran masa de hielo en movimiento", de: "Eine große Masse aus sich bewegendem Eis", nl: "Een grote massa bewegend ijs" },
          { en: "A frozen lake", es: "Un lago congelado", de: "Ein gefrorener See", nl: "Een bevroren meer" },
          { en: "An iceberg floating in water", es: "Un iceberg flotando en el agua", de: "Ein Eisberg, der im Wasser treibt", nl: "Een ijsberg drijvend in water" },
          { en: "Snow on a mountain", es: "Nieve en una montaña", de: "Schnee auf einem Berg", nl: "Sneeuw op een berg" }
        ],
        correct: 0,
        explanation: {
          en: "A glacier is a massive, slow-moving river of ice formed from compressed snow over many years. Glaciers slowly flow downhill under their own weight.",
          es: "Un glaciar es un río masivo de hielo que se mueve lentamente, formado por nieve comprimida durante muchos años. Los glaciares fluyen lentamente cuesta abajo bajo su propio peso.",
          de: "Ein Gletscher ist ein massiver, sich langsam bewegender Fluss aus Eis, der über viele Jahre aus komprimiertem Schnee entsteht. Gletscher fließen langsam bergab unter ihrem eigenen Gewicht.",
          nl: "Een gletsjer is een massieve, langzaam bewegende rivier van ijs gevormd uit samengeperste sneeuw over vele jaren. Gletsjers stromen langzaam bergafwaarts onder hun eigen gewicht."
        }
      },
      {
        question: {
          en: "What is distilled water?",
          es: "¿Qué es el agua destilada?",
          de: "Was ist destilliertes Wasser?",
          nl: "Wat is gedestilleerd water?"
        },
        options: [
          { en: "Water that has been boiled and condensed", es: "Agua que ha sido hervida y condensada", de: "Wasser, das gekocht und kondensiert wurde", nl: "Water dat is gekookt en gecondenseerd" },
          { en: "Water from a still pond", es: "Agua de un estanque quieto", de: "Wasser aus einem stillen Teich", nl: "Water uit een stille vijver" },
          { en: "Water with minerals added", es: "Agua con minerales añadidos", de: "Wasser mit zugesetzten Mineralien", nl: "Water met toegevoegde mineralen" },
          { en: "Very cold water", es: "Agua muy fría", de: "Sehr kaltes Wasser", nl: "Zeer koud water" }
        ],
        correct: 0,
        explanation: {
          en: "Distilled water is purified by boiling water and collecting the steam, which then condenses back to liquid. This removes minerals, salts, and impurities, making it very pure.",
          es: "El agua destilada se purifica hirviendo agua y recolectando el vapor, que luego se condensa de nuevo a líquido. Esto elimina minerales, sales e impurezas, haciéndola muy pura.",
          de: "Destilliertes Wasser wird durch Kochen von Wasser und Sammeln des Dampfes gereinigt, der dann wieder zu Flüssigkeit kondensiert. Dies entfernt Mineralien, Salze und Verunreinigungen und macht es sehr rein.",
          nl: "Gedestilleerd water wordt gezuiverd door water te koken en de stoom te verzamelen, die dan weer condenseert tot vloeistof. Dit verwijdert mineralen, zouten en onzuiverheden, waardoor het zeer zuiver wordt."
        }
      },
      {
        question: {
          en: "What is mineral water?",
          es: "¿Qué es el agua mineral?",
          de: "Was ist Mineralwasser?",
          nl: "Wat is mineraalwater?"
        },
        options: [
          { en: "Water with natural minerals from underground", es: "Agua con minerales naturales del subsuelo", de: "Wasser mit natürlichen Mineralien aus dem Untergrund", nl: "Water met natuurlijke mineralen uit de ondergrond" },
          { en: "Water with artificial minerals added", es: "Agua con minerales artificiales añadidos", de: "Wasser mit zugesetzten künstlichen Mineralien", nl: "Water met toegevoegde kunstmatige mineralen" },
          { en: "Water used in mining", es: "Agua utilizada en minería", de: "Wasser, das im Bergbau verwendet wird", nl: "Water gebruikt in de mijnbouw" },
          { en: "Water from minerals melting", es: "Agua del derretimiento de minerales", de: "Wasser aus schmelzenden Mineralien", nl: "Water van smeltende mineralen" }
        ],
        correct: 0,
        explanation: {
          en: "Mineral water comes from underground springs and contains natural minerals like calcium, magnesium, and potassium absorbed from rocks. These minerals give it a distinct taste.",
          es: "El agua mineral proviene de manantiales subterráneos y contiene minerales naturales como calcio, magnesio y potasio absorbidos de las rocas. Estos minerales le dan un sabor distintivo.",
          de: "Mineralwasser stammt aus unterirdischen Quellen und enthält natürliche Mineralien wie Kalzium, Magnesium und Kalium, die aus Gestein aufgenommen werden. Diese Mineralien geben ihm einen charakteristischen Geschmack.",
          nl: "Mineraalwater komt van ondergrondse bronnen en bevat natuurlijke mineralen zoals calcium, magnesium en kalium geabsorbeerd uit rotsen. Deze mineralen geven het een karakteristieke smaak."
        }
      },
      {
        question: {
          en: "What happens to water when it freezes?",
          es: "¿Qué le pasa al agua cuando se congela?",
          de: "Was passiert mit Wasser, wenn es gefriert?",
          nl: "Wat gebeurt er met water als het bevriest?"
        },
        options: [
          { en: "It expands and becomes less dense", es: "Se expande y se vuelve menos densa", de: "Es dehnt sich aus und wird weniger dicht", nl: "Het zet uit en wordt minder dicht" },
          { en: "It shrinks and becomes denser", es: "Se encoge y se vuelve más densa", de: "Es schrumpft und wird dichter", nl: "Het krimpt en wordt dichter" },
          { en: "It stays the same size", es: "Permanece del mismo tamaño", de: "Es bleibt gleich groß", nl: "Het blijft even groot" },
          { en: "It disappears", es: "Desaparece", de: "Es verschwindet", nl: "Het verdwijnt" }
        ],
        correct: 0,
        explanation: {
          en: "When water freezes, it expands by about 9% and becomes less dense. This is why ice floats on water and why frozen pipes can burst.",
          es: "Cuando el agua se congela, se expande aproximadamente un 9% y se vuelve menos densa. Por eso el hielo flota en el agua y por qué las tuberías congeladas pueden estallar.",
          de: "Wenn Wasser gefriert, dehnt es sich um etwa 9% aus und wird weniger dicht. Deshalb schwimmt Eis auf Wasser und warum gefrorene Rohre platzen können.",
          nl: "Wanneer water bevriest, zet het met ongeveer 9% uit en wordt het minder dicht. Daarom drijft ijs op water en waarom bevroren leidingen kunnen barsten."
        }
      },
      {
        question: {
          en: "Why does ice float on water?",
          es: "¿Por qué flota el hielo en el agua?",
          de: "Warum schwimmt Eis auf Wasser?",
          nl: "Waarom drijft ijs op water?"
        },
        options: [
          { en: "Ice is less dense than liquid water", es: "El hielo es menos denso que el agua líquida", de: "Eis ist weniger dicht als flüssiges Wasser", nl: "Ijs is minder dicht dan vloeibaar water" },
          { en: "Ice is lighter in weight", es: "El hielo es más ligero en peso", de: "Eis ist leichter im Gewicht", nl: "Ijs is lichter van gewicht" },
          { en: "Ice contains air bubbles", es: "El hielo contiene burbujas de aire", de: "Eis enthält Luftblasen", nl: "Ijs bevat luchtbellen" },
          { en: "Water pushes ice upward", es: "El agua empuja el hielo hacia arriba", de: "Wasser drückt Eis nach oben", nl: "Water duwt ijs omhoog" }
        ],
        correct: 0,
        explanation: {
          en: "Ice floats because it's less dense than liquid water. When water freezes, molecules arrange in a crystalline structure with more space between them, making ice lighter than the same volume of water.",
          es: "El hielo flota porque es menos denso que el agua líquida. Cuando el agua se congela, las moléculas se organizan en una estructura cristalina con más espacio entre ellas, haciendo que el hielo sea más ligero que el mismo volumen de agua.",
          de: "Eis schwimmt, weil es weniger dicht ist als flüssiges Wasser. Wenn Wasser gefriert, ordnen sich die Moleküle in einer kristallinen Struktur mit mehr Raum dazwischen, wodurch Eis leichter wird als dasselbe Volumen Wasser.",
          nl: "Ijs drijft omdat het minder dicht is dan vloeibaar water. Wanneer water bevriest, rangschikken moleculen zich in een kristallijne structuur met meer ruimte ertussen, waardoor ijs lichter is dan hetzelfde volume water."
        }
      },
      {
        question: {
          en: "What is a water molecule?",
          es: "¿Qué es una molécula de agua?",
          de: "Was ist ein Wassermolekül?",
          nl: "Wat is een watermolecuul?"
        },
        options: [
          { en: "Two hydrogen atoms bonded to one oxygen atom", es: "Dos átomos de hidrógeno unidos a un átomo de oxígeno", de: "Zwei Wasserstoffatome, die an ein Sauerstoffatom gebunden sind", nl: "Twee waterstofatomen gebonden aan één zuurstofatoom" },
          { en: "One hydrogen atom and two oxygen atoms", es: "Un átomo de hidrógeno y dos átomos de oxígeno", de: "Ein Wasserstoffatom und zwei Sauerstoffatome", nl: "Één waterstofatoom en twee zuurstofatomen" },
          { en: "Three hydrogen atoms", es: "Tres átomos de hidrógeno", de: "Drei Wasserstoffatome", nl: "Drie waterstofatomen" },
          { en: "One oxygen atom only", es: "Solo un átomo de oxígeno", de: "Nur ein Sauerstoffatom", nl: "Alleen één zuurstofatoom" }
        ],
        correct: 0,
        explanation: {
          en: "A water molecule consists of two hydrogen atoms chemically bonded to one oxygen atom (H2O). This simple structure gives water its unique properties essential for life.",
          es: "Una molécula de agua consta de dos átomos de hidrógeno unidos químicamente a un átomo de oxígeno (H2O). Esta estructura simple da al agua sus propiedades únicas esenciales para la vida.",
          de: "Ein Wassermolekül besteht aus zwei chemisch an ein Sauerstoffatom gebundenen Wasserstoffatomen (H2O). Diese einfache Struktur verleiht Wasser seine einzigartigen, für das Leben essentiellen Eigenschaften.",
          nl: "Een watermolecuul bestaat uit twee waterstofatomen chemisch gebonden aan één zuurstofatoom (H2O). Deze eenvoudige structuur geeft water zijn unieke eigenschappen die essentieel zijn voor het leven."
        }
      },
      {
        question: {
          en: "What is the main source of water on Earth?",
          es: "¿Cuál es la principal fuente de agua en la Tierra?",
          de: "Was ist die Hauptquelle von Wasser auf der Erde?",
          nl: "Wat is de belangrijkste waterbron op aarde?"
        },
        options: [
          { en: "Oceans", es: "Océanos", de: "Ozeane", nl: "Oceanen" },
          { en: "Rivers", es: "Ríos", de: "Flüsse", nl: "Rivieren" },
          { en: "Lakes", es: "Lagos", de: "Seen", nl: "Meren" },
          { en: "Rain", es: "Lluvia", de: "Regen", nl: "Regen" }
        ],
        correct: 0,
        explanation: {
          en: "Oceans contain about 97% of all water on Earth. They cover approximately 71% of the planet's surface and play a crucial role in the water cycle and climate.",
          es: "Los océanos contienen aproximadamente el 97% de toda el agua en la Tierra. Cubren aproximadamente el 71% de la superficie del planeta y juegan un papel crucial en el ciclo del agua y el clima.",
          de: "Ozeane enthalten etwa 97% allen Wassers auf der Erde. Sie bedecken etwa 71% der Planetenoberfläche und spielen eine entscheidende Rolle im Wasserkreislauf und Klima.",
          nl: "Oceanen bevatten ongeveer 97% van al het water op aarde. Ze bedekken ongeveer 71% van het planetaire oppervlak en spelen een cruciale rol in de watercyclus en het klimaat."
        }
      },
      {
        question: {
          en: "What is a watershed?",
          es: "¿Qué es una cuenca hidrográfica?",
          de: "Was ist ein Wassereinzugsgebiet?",
          nl: "Wat is een stroomgebied?"
        },
        options: [
          { en: "An area where water drains into a river or lake", es: "Un área donde el agua drena hacia un río o lago", de: "Ein Gebiet, in dem Wasser in einen Fluss oder See abfließt", nl: "Een gebied waar water afstroomt naar een rivier of meer" },
          { en: "A building where water is stored", es: "Un edificio donde se almacena agua", de: "Ein Gebäude, in dem Wasser gespeichert wird", nl: "Een gebouw waar water wordt opgeslagen" },
          { en: "A place where water is cleaned", es: "Un lugar donde se limpia el agua", de: "Ein Ort, an dem Wasser gereinigt wird", nl: "Een plaats waar water wordt gereinigd" },
          { en: "A dam for controlling water", es: "Una presa para controlar el agua", de: "Ein Damm zur Wasserkontrolle", nl: "Een dam om water te reguleren" }
        ],
        correct: 0,
        explanation: {
          en: "A watershed (or drainage basin) is an area of land where all rain and melted snow drains to a common outlet, such as a river, lake, or ocean. Mountains and hills often form watershed boundaries.",
          es: "Una cuenca hidrográfica es un área de tierra donde toda la lluvia y la nieve derretida drena hacia una salida común, como un río, lago u océano. Las montañas y colinas a menudo forman límites de cuencas hidrográficas.",
          de: "Ein Wassereinzugsgebiet ist ein Landgebiet, in dem aller Regen und geschmolzener Schnee zu einem gemeinsamen Auslass wie einem Fluss, See oder Ozean abfließt. Berge und Hügel bilden oft Wassereinzugsgebietsgrenzen.",
          nl: "Een stroomgebied is een landgebied waar alle regen en gesmolten sneeuw afstroomt naar een gemeenschappelijke uitlaat, zoals een rivier, meer of oceaan. Bergen en heuvels vormen vaak stroomgebiedsgrenzen."
        }
      },
      {
        question: {
          en: "What does 'potable water' mean?",
          es: "¿Qué significa 'agua potable'?",
          de: "Was bedeutet 'Trinkwasser'?",
          nl: "Wat betekent 'drinkwater'?"
        },
        options: [
          { en: "Water safe to drink", es: "Agua segura para beber", de: "Sicheres Trinkwasser", nl: "Water veilig om te drinken" },
          { en: "Water in a pot", es: "Agua en una olla", de: "Wasser in einem Topf", nl: "Water in een pot" },
          { en: "Portable water container", es: "Contenedor de agua portátil", de: "Tragbarer Wasserbehälter", nl: "Draagbare watercontainer" },
          { en: "Boiling water", es: "Agua hirviendo", de: "Kochendes Wasser", nl: "Kokend water" }
        ],
        correct: 0,
        explanation: {
          en: "Potable water means water that is safe for human consumption. It has been treated or is naturally clean enough to drink without causing illness.",
          es: "Agua potable significa agua que es segura para el consumo humano. Ha sido tratada o es naturalmente lo suficientemente limpia para beber sin causar enfermedades.",
          de: "Trinkwasser bedeutet Wasser, das für den menschlichen Verzehr sicher ist. Es wurde behandelt oder ist natürlich sauber genug, um ohne Krankheitsrisiko getrunken zu werden.",
          nl: "Drinkwater betekent water dat veilig is voor menselijke consumptie. Het is behandeld of is van nature schoon genoeg om te drinken zonder ziekte te veroorzaken."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
