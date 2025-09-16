(function() {
    const level5 = {
        name: {
            en: "Astronauts and Space Travel",
            es: "Astronautas y Viajes Espaciales",
            de: "Astronauten und Raumfahrt",
            nl: "Astronauten en Ruimtereizen"
        },
        questions: [
            {
                question: {
                    en: "What is an astronaut?",
                    es: "¿Qué es un astronauta?",
                    de: "Was ist ein Astronaut?",
                    nl: "Wat is een astronaut?"
                },
                options: [
                    { en: "A person trained to travel and work in space", es: "Una persona entrenada para viajar y trabajar en el espacio", de: "Eine Person, die ausgebildet ist, um im Weltraum zu reisen und zu arbeiten", nl: "Een persoon die getraind is om te reizen en werken in de ruimte" },
                    { en: "A person who studies stars", es: "Una persona que estudia estrellas", de: "Eine Person, die Sterne studiert", nl: "Een persoon die sterren bestudeert" },
                    { en: "A pilot of airplanes", es: "Un piloto de aviones", de: "Ein Pilot von Flugzeugen", nl: "Een piloot van vliegtuigen" },
                    { en: "A scientist who works on Earth", es: "Un científico que trabaja en la Tierra", de: "Ein Wissenschaftler, der auf der Erde arbeitet", nl: "Een wetenschapper die op Aarde werkt" }
                ],
                correct: 0,
                explanation: {
                    en: "An astronaut is a specially trained person who travels beyond Earth's atmosphere to conduct space missions and scientific research.",
                    es: "Un astronauta es una persona especialmente entrenada que viaja más allá de la atmósfera de la Tierra para realizar misiones espaciales e investigación científica.",
                    de: "Ein Astronaut ist eine speziell ausgebildete Person, die über die Erdatmosphäre hinaus reist, um Weltraummissionen und wissenschaftliche Forschung durchzuführen.",
                    nl: "Een astronaut is een speciaal getraind persoon die voorbij de atmosfeer van de Aarde reist om ruimtemissies en wetenschappelijk onderzoek uit te voeren."
                }
            },
            {
                question: {
                    en: "What do astronauts wear in space?",
                    es: "¿Qué usan los astronautas en el espacio?",
                    de: "Was tragen Astronauten im Weltraum?",
                    nl: "Wat dragen astronauten in de ruimte?"
                },
                options: [
                    { en: "Space suits that protect them and provide air", es: "Trajes espaciales que los protegen y proveen aire", de: "Raumanzüge, die sie schützen und Luft liefern", nl: "Ruimtepakken die hen beschermen en lucht leveren" },
                    { en: "Regular clothes", es: "Ropa normal", de: "Normale Kleidung", nl: "Gewone kleren" },
                    { en: "Swimming suits", es: "Trajes de baño", de: "Badeanzüge", nl: "Zwemkleding" },
                    { en: "Winter coats", es: "Abrigos de invierno", de: "Wintermäntel", nl: "Winterjassen" }
                ],
                correct: 0,
                explanation: {
                    en: "Space suits are essential for survival, providing air to breathe, protection from radiation, and temperature control in the harsh environment of space.",
                    es: "Los trajes espaciales son esenciales para la supervivencia, proporcionando aire para respirar, protección de la radiación y control de temperatura en el ambiente hostil del espacio.",
                    de: "Raumanzüge sind überlebenswichtig und bieten Atemluft, Schutz vor Strahlung und Temperaturkontrolle in der rauen Umgebung des Weltraums.",
                    nl: "Ruimtepakken zijn essentieel voor overleving, en bieden lucht om te ademen, bescherming tegen straling en temperatuurcontrole in de harde omgeving van de ruimte."
                }
            },
            {
                question: {
                    en: "How do astronauts eat in space?",
                    es: "¿Cómo comen los astronautas en el espacio?",
                    de: "Wie essen Astronauten im Weltraum?",
                    nl: "Hoe eten astronauten in de ruimte?"
                },
                options: [
                    { en: "They use special packaged foods and straws because there's no gravity", es: "Usan alimentos empacados especiales y pajillas porque no hay gravedad", de: "Sie verwenden spezielle verpackte Lebensmittel und Strohhalme, weil es keine Schwerkraft gibt", nl: "Ze gebruiken speciaal verpakt voedsel en rietjes omdat er geen zwaartekracht is" },
                    { en: "The same way as on Earth", es: "De la misma manera que en la Tierra", de: "Genauso wie auf der Erde", nl: "Op dezelfde manier als op Aarde" },
                    { en: "They don't need to eat in space", es: "No necesitan comer en el espacio", de: "Sie müssen im Weltraum nicht essen", nl: "Ze hoeven niet te eten in de ruimte" },
                    { en: "They only drink liquids", es: "Solo beben líquidos", de: "Sie trinken nur Flüssigkeiten", nl: "Ze drinken alleen vloeistoffen" }
                ],
                correct: 0,
                explanation: {
                    en: "In zero gravity, food and liquids float away, so astronauts use special packaging and techniques to eat safely.",
                    es: "En gravedad cero, la comida y los líquidos flotan, por lo que los astronautas usan empaquetado especial y técnicas para comer de manera segura.",
                    de: "Bei null Schwerkraft schweben Essen und Flüssigkeiten weg, daher verwenden Astronauten spezielle Verpackungen und Techniken zum sicheren Essen.",
                    nl: "Bij nul zwaartekracht drijven voedsel en vloeistoffen weg, dus astronauten gebruiken speciale verpakkingen en technieken om veilig te eten."
                }
            },
            {
                question: {
                    en: "How do astronauts sleep in space?",
                    es: "¿Cómo duermen los astronautas en el espacio?",
                    de: "Wie schlafen Astronauten im Weltraum?",
                    nl: "Hoe slapen astronauten in de ruimte?"
                },
                options: [
                    { en: "They float in sleeping bags attached to walls", es: "Flotan en bolsas de dormir adheridas a las paredes", de: "Sie schweben in Schlafsäcken, die an Wänden befestigt sind", nl: "Ze drijven in slaapzakken die aan wanden zijn bevestigd" },
                    { en: "In regular beds", es: "En camas normales", de: "In normalen Betten", nl: "In gewone bedden" },
                    { en: "Standing up", es: "De pie", de: "Im Stehen", nl: "Staand" },
                    { en: "They don't sleep in space", es: "No duermen en el espacio", de: "Sie schlafen nicht im Weltraum", nl: "Ze slapen niet in de ruimte" }
                ],
                correct: 0,
                explanation: {
                    en: "Without gravity to hold them down, astronauts must secure themselves to walls or furniture to sleep comfortably.",
                    es: "Sin gravedad que los sostenga, los astronautas deben asegurarse a las paredes o muebles para dormir cómodamente.",
                    de: "Ohne Schwerkraft, die sie hält, müssen sich Astronauten an Wänden oder Möbeln befestigen, um bequem zu schlafen.",
                    nl: "Zonder zwaartekracht om hen vast te houden, moeten astronauten zichzelf vastmaken aan wanden of meubilair om comfortabel te slapen."
                }
            },
            {
                question: {
                    en: "What happens to astronauts' bodies in zero gravity?",
                    es: "¿Qué les pasa a los cuerpos de los astronautas en gravedad cero?",
                    de: "Was passiert mit den Körpern der Astronauten bei null Schwerkraft?",
                    nl: "Wat gebeurt er met de lichamen van astronauten bij nul zwaartekracht?"
                },
                options: [
                    { en: "Their muscles and bones become weaker", es: "Sus músculos y huesos se debilitan", de: "Ihre Muskeln und Knochen werden schwächer", nl: "Hun spieren en botten worden zwakker" },
                    { en: "They become stronger", es: "Se vuelven más fuertes", de: "Sie werden stärker", nl: "Ze worden sterker" },
                    { en: "Nothing happens", es: "No pasa nada", de: "Es passiert nichts", nl: "Er gebeurt niets" },
                    { en: "They grow taller permanently", es: "Crecen más alto permanentemente", de: "Sie werden dauerhaft größer", nl: "Ze worden permanent langer" }
                ],
                correct: 0,
                explanation: {
                    en: "Without gravity constantly working against them, astronauts' bones and muscles don't need to work as hard and begin to weaken.",
                    es: "Sin la gravedad trabajando constantemente contra ellos, los huesos y músculos de los astronautas no necesitan trabajar tan duro y comienzan a debilitarse.",
                    de: "Ohne dass die Schwerkraft ständig gegen sie arbeitet, müssen die Knochen und Muskeln der Astronauten nicht so hart arbeiten und beginnen zu schwächen.",
                    nl: "Zonder zwaartekracht die constant tegen hen werkt, hoeven de botten en spieren van astronauten niet zo hard te werken en beginnen ze te verzwakken."
                }
            },
            {
                question: {
                    en: "How long does it take to travel from Earth to the Moon?",
                    es: "¿Cuánto tiempo toma viajar de la Tierra a la Luna?",
                    de: "Wie lange dauert die Reise von der Erde zum Mond?",
                    nl: "Hoe lang duurt het om van de Aarde naar de Maan te reizen?"
                },
                options: [
                    { en: "About 3 days", es: "Aproximadamente 3 días", de: "Etwa 3 Tage", nl: "Ongeveer 3 dagen" },
                    { en: "1 hour", es: "1 hora", de: "1 Stunde", nl: "1 uur" },
                    { en: "1 year", es: "1 año", de: "1 Jahr", nl: "1 jaar" },
                    { en: "1 week", es: "1 semana", de: "1 Woche", nl: "1 week" }
                ],
                correct: 0,
                explanation: {
                    en: "Using current rocket technology, the journey to the Moon takes about three days to cover the 240,000 miles.",
                    es: "Usando la tecnología actual de cohetes, el viaje a la Luna toma aproximadamente tres días para cubrir las 384,000 kilómetros.",
                    de: "Mit der aktuellen Raketentechnik dauert die Reise zum Mond etwa drei Tage, um die 384.000 Kilometer zu überwinden.",
                    nl: "Met de huidige rakettechnologie duurt de reis naar de Maan ongeveer drie dagen om de 384.000 kilometer af te leggen."
                }
            },
            {
                question: {
                    en: "What do astronauts do during a spacewalk?",
                    es: "¿Qué hacen los astronautas durante una caminata espacial?",
                    de: "Was machen Astronauten während eines Weltraumspaziergangs?",
                    nl: "Wat doen astronauten tijdens een ruimtewandeling?"
                },
                options: [
                    { en: "Work outside their spacecraft to repair or build things", es: "Trabajan fuera de su nave espacial para reparar o construir cosas", de: "Arbeiten außerhalb ihres Raumschiffs, um Dinge zu reparieren oder zu bauen", nl: "Werken buiten hun ruimteschip om dingen te repareren of bouwen" },
                    { en: "Take a walk on planets", es: "Dan un paseo en planetas", de: "Machen einen Spaziergang auf Planeten", nl: "Wandelen op planeten" },
                    { en: "Exercise in space", es: "Hacer ejercicio en el espacio", de: "Trainieren im Weltraum", nl: "Sporten in de ruimte" },
                    { en: "Look for aliens", es: "Buscar extraterrestres", de: "Nach Außerirdischen suchen", nl: "Zoeken naar buitenaardse wezens" }
                ],
                correct: 0,
                explanation: {
                    en: "Spacewalks allow astronauts to perform maintenance, install equipment, and conduct experiments outside their spacecraft.",
                    es: "Las caminatas espaciales permiten a los astronautas realizar mantenimiento, instalar equipos y realizar experimentos fuera de su nave espacial.",
                    de: "Weltraumspaziergänge ermöglichen es Astronauten, Wartung durchzuführen, Ausrüstung zu installieren und Experimente außerhalb ihres Raumschiffs durchzuführen.",
                    nl: "Ruimtewandelingen stellen astronauten in staat om onderhoud uit te voeren, apparatuur te installeren en experimenten buiten hun ruimteschip uit te voeren."
                }
            },
            {
                question: {
                    en: "How do astronauts communicate with Earth?",
                    es: "¿Cómo se comunican los astronautas con la Tierra?",
                    de: "Wie kommunizieren Astronauten mit der Erde?",
                    nl: "Hoe communiceren astronauten met de Aarde?"
                },
                options: [
                    { en: "Using radio waves and satellites", es: "Usando ondas de radio y satélites", de: "Mit Radiowellen und Satelliten", nl: "Met radiogolven en satellieten" },
                    { en: "Shouting very loudly", es: "Gritando muy fuerte", de: "Sehr laut schreien", nl: "Heel hard schreeuwen" },
                    { en: "Sending letters", es: "Enviando cartas", de: "Briefe senden", nl: "Brieven sturen" },
                    { en: "Using cell phones", es: "Usando teléfonos celulares", de: "Mit Handys", nl: "Met mobiele telefoons" }
                ],
                correct: 0,
                explanation: {
                    en: "Radio waves can travel through the vacuum of space, allowing real-time communication between astronauts and Earth.",
                    es: "Las ondas de radio pueden viajar a través del vacío del espacio, permitiendo comunicación en tiempo real entre astronautas y la Tierra.",
                    de: "Radiowellen können durch das Vakuum des Weltraums reisen und ermöglichen Echtzeitkommunikation zwischen Astronauten und der Erde.",
                    nl: "Radiogolven kunnen door het vacuüm van de ruimte reizen, waardoor real-time communicatie tussen astronauten en de Aarde mogelijk is."
                }
            },
            {
                question: {
                    en: "What is Mission Control?",
                    es: "¿Qué es Control de Misión?",
                    de: "Was ist die Missionskontrolle?",
                    nl: "Wat is Missiecontrole?"
                },
                options: [
                    { en: "The team on Earth that helps astronauts during their mission", es: "El equipo en la Tierra que ayuda a los astronautas durante su misión", de: "Das Team auf der Erde, das Astronauten während ihrer Mission hilft", nl: "Het team op Aarde dat astronauten helpt tijdens hun missie" },
                    { en: "The astronauts in charge", es: "Los astronautas a cargo", de: "Die verantwortlichen Astronauten", nl: "De astronauten die de leiding hebben" },
                    { en: "A computer in space", es: "Una computadora en el espacio", de: "Ein Computer im Weltraum", nl: "Een computer in de ruimte" },
                    { en: "The rocket's engine", es: "El motor del cohete", de: "Der Motor der Rakete", nl: "De motor van de raket" }
                ],
                correct: 0,
                explanation: {
                    en: "Mission Control is a team of specialists on Earth who monitor and support astronauts throughout their entire mission.",
                    es: "Control de Misión es un equipo de especialistas en la Tierra que monitorean y apoyan a los astronautas durante toda su misión.",
                    de: "Die Missionskontrolle ist ein Team von Spezialisten auf der Erde, die Astronauten während ihrer gesamten Mission überwachen und unterstützen.",
                    nl: "Missiecontrole is een team van specialisten op Aarde die astronauten gedurende hun hele missie monitoren en ondersteunen."
                }
            },
            {
                question: {
                    en: "How do astronauts train for space missions?",
                    es: "¿Cómo se entrenan los astronautas para las misiones espaciales?",
                    de: "Wie trainieren Astronauten für Weltraummissionen?",
                    nl: "Hoe trainen astronauten voor ruimtemissies?"
                },
                options: [
                    { en: "Years of physical training, studying, and practicing in simulators", es: "Años de entrenamiento físico, estudio y práctica en simuladores", de: "Jahre körperlichen Trainings, Studiums und Übens in Simulatoren", nl: "Jaren van fysieke training, studie en oefenen in simulators" },
                    { en: "Just reading books about space", es: "Solo leyendo libros sobre el espacio", de: "Nur Bücher über den Weltraum lesen", nl: "Alleen boeken over de ruimte lezen" },
                    { en: "Playing video games", es: "Jugando videojuegos", de: "Videospiele spielen", nl: "Videospelletjes spelen" },
                    { en: "No training needed", es: "No se necesita entrenamiento", de: "Kein Training nötig", nl: "Geen training nodig" }
                ],
                correct: 0,
                explanation: {
                    en: "Astronaut training is extensive and includes physical conditioning, technical studies, survival training, and countless hours in simulators.",
                    es: "El entrenamiento de astronautas es extenso e incluye acondicionamiento físico, estudios técnicos, entrenamiento de supervivencia y incontables horas en simuladores.",
                    de: "Astronautentraining ist umfangreich und umfasst körperliche Konditionierung, technische Studien, Überlebenstraining und unzählige Stunden in Simulatoren.",
                    nl: "Astronautentraining is uitgebreid en omvat fysieke conditioning, technische studies, overlevingstraining en talloze uren in simulators."
                }
            },
            {
                question: {
                    en: "What is weightlessness?",
                    es: "¿Qué es la ingravidez?",
                    de: "Was ist Schwerelosigkeit?",
                    nl: "Wat is gewichtloosheid?"
                },
                options: [
                    { en: "The feeling of floating because you're falling around Earth", es: "La sensación de flotar porque estás cayendo alrededor de la Tierra", de: "Das Gefühl des Schwebens, weil man um die Erde fällt", nl: "Het gevoel van zweven omdat je rond de Aarde valt" },
                    { en: "Having no weight at all", es: "No tener peso en absoluto", de: "Überhaupt kein Gewicht haben", nl: "Helemaal geen gewicht hebben" },
                    { en: "Being very light", es: "Ser muy ligero", de: "Sehr leicht sein", nl: "Heel licht zijn" },
                    { en: "Not eating enough food", es: "No comer suficiente comida", de: "Nicht genug Nahrung essen", nl: "Niet genoeg voedsel eten" }
                ],
                correct: 0,
                explanation: {
                    en: "Weightlessness occurs because astronauts are in constant free fall around Earth, creating the sensation of floating.",
                    es: "La ingravidez ocurre porque los astronautas están en caída libre constante alrededor de la Tierra, creando la sensación de flotar.",
                    de: "Schwerelosigkeit tritt auf, weil Astronauten in ständigem freiem Fall um die Erde sind, was das Gefühl des Schwebens erzeugt.",
                    nl: "Gewichtloosheid treedt op omdat astronauten in constante vrije val rond de Aarde zijn, wat het gevoel van zweven creëert."
                }
            },
            {
                question: {
                    en: "What happens to water in zero gravity?",
                    es: "¿Qué le pasa al agua en gravedad cero?",
                    de: "Was passiert mit Wasser bei null Schwerkraft?",
                    nl: "Wat gebeurt er met water bij nul zwaartekracht?"
                },
                options: [
                    { en: "It forms floating spheres or bubbles", es: "Forma esferas o burbujas flotantes", de: "Es bildet schwebende Kugeln oder Blasen", nl: "Het vormt zwevende bollen of bellen" },
                    { en: "It disappears", es: "Desaparece", de: "Es verschwindet", nl: "Het verdwijnt" },
                    { en: "It flows normally", es: "Fluye normalmente", de: "Es fließt normal", nl: "Het stroomt normaal" },
                    { en: "It turns into ice", es: "Se convierte en hielo", de: "Es wird zu Eis", nl: "Het verandert in ijs" }
                ],
                correct: 0,
                explanation: {
                    en: "Without gravity to pull it down, water forms perfect spheres due to surface tension in the weightless environment of space.",
                    es: "Sin gravedad que la tire hacia abajo, el agua forma esferas perfectas debido a la tensión superficial en el ambiente ingrávido del espacio.",
                    de: "Ohne Schwerkraft, die es nach unten zieht, bildet Wasser aufgrund der Oberflächenspannung in der schwerelose Umgebung des Weltraums perfekte Kugeln.",
                    nl: "Zonder zwaartekracht om het naar beneden te trekken, vormt water perfecte bollen door oppervlaktespanning in de gewichtloze omgeving van de ruimte."
                }
            },
            {
                question: {
                    en: "How do rockets work?",
                    es: "¿Cómo funcionan los cohetes?",
                    de: "Wie funktionieren Raketen?",
                    nl: "Hoe werken raketten?"
                },
                options: [
                    { en: "They push gas out one end, which pushes the rocket the other way", es: "Empujan gas por un extremo, lo que empuja el cohete hacia el otro lado", de: "Sie stoßen Gas an einem Ende aus, was die Rakete in die andere Richtung schiebt", nl: "Ze duwen gas uit het ene uiteinde, wat de raket de andere kant op duwt" },
                    { en: "They use wings to fly", es: "Usan alas para volar", de: "Sie verwenden Flügel zum Fliegen", nl: "Ze gebruiken vleugels om te vliegen" },
                    { en: "They are pulled by magnets", es: "Son tirados por imanes", de: "Sie werden von Magneten gezogen", nl: "Ze worden getrokken door magneten" },
                    { en: "They use propellers", es: "Usan hélices", de: "Sie verwenden Propeller", nl: "Ze gebruiken propellers" }
                ],
                correct: 0,
                explanation: {
                    en: "Rockets work by Newton's third law - for every action there's an equal and opposite reaction, pushing the rocket forward as gas is expelled.",
                    es: "Los cohetes funcionan por la tercera ley de Newton - por cada acción hay una reacción igual y opuesta, empujando el cohete hacia adelante mientras se expulsa gas.",
                    de: "Raketen funktionieren nach Newtons drittem Gesetz - für jede Aktion gibt es eine gleiche und entgegengesetzte Reaktion, die die Rakete vorwärts schiebt, wenn Gas ausgestoßen wird.",
                    nl: "Raketten werken volgens Newtons derde wet - voor elke actie is er een gelijke en tegenovergestelde reactie, die de raket voorwaarts duwt terwijl gas wordt uitgestoten."
                }
            },
            {
                question: {
                    en: "What is the International Space Station (ISS)?",
                    es: "¿Qué es la Estación Espacial Internacional (EEI)?",
                    de: "Was ist die Internationale Raumstation (ISS)?",
                    nl: "Wat is het Internationale Ruimtestation (ISS)?"
                },
                options: [
                    { en: "A laboratory in space where astronauts live and work", es: "Un laboratorio en el espacio donde los astronautas viven y trabajan", de: "Ein Labor im Weltraum, wo Astronauten leben und arbeiten", nl: "Een laboratorium in de ruimte waar astronauten leven en werken" },
                    { en: "A hotel for space tourists", es: "Un hotel para turistas espaciales", de: "Ein Hotel für Weltraumtouristen", nl: "Een hotel voor ruimtetoeristen" },
                    { en: "A gas station for rockets", es: "Una gasolinera para cohetes", de: "Eine Tankstelle für Raketen", nl: "Een tankstation voor raketten" },
                    { en: "A restaurant in space", es: "Un restaurante en el espacio", de: "Ein Restaurant im Weltraum", nl: "Een restaurant in de ruimte" }
                ],
                correct: 0,
                explanation: {
                    en: "The ISS serves as a research laboratory where astronauts conduct experiments in the unique environment of microgravity.",
                    es: "La EEI sirve como laboratorio de investigación donde los astronautas realizan experimentos en el ambiente único de microgravedad.",
                    de: "Die ISS dient als Forschungslabor, wo Astronauten Experimente in der einzigartigen Umgebung der Mikrogravitation durchführen.",
                    nl: "Het ISS dient als onderzoekslaboratorium waar astronauten experimenten uitvoeren in de unieke omgeving van microzwaartekracht."
                }
            },
            {
                question: {
                    en: "How fast does the ISS orbit Earth?",
                    es: "¿Qué tan rápido orbita la EEI alrededor de la Tierra?",
                    de: "Wie schnell umkreist die ISS die Erde?",
                    nl: "Hoe snel omcirkelt het ISS de Aarde?"
                },
                options: [
                    { en: "About 28,000 kilometers per hour", es: "Aproximadamente 28,000 kilómetros por hora", de: "Etwa 28.000 Kilometer pro Stunde", nl: "Ongeveer 28.000 kilometer per uur" },
                    { en: "100 kilometers per hour", es: "100 kilómetros por hora", de: "100 Kilometer pro Stunde", nl: "100 kilometer per uur" },
                    { en: "1,000 kilometers per hour", es: "1,000 kilómetros por hora", de: "1.000 Kilometer pro Stunde", nl: "1.000 kilometer per uur" },
                    { en: "100,000 kilometers per hour", es: "100,000 kilómetros por hora", de: "100.000 Kilometer pro Stunde", nl: "100.000 kilometer per uur" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How often does the ISS orbit Earth?",
                    es: "¿Con qué frecuencia orbita la EEI alrededor de la Tierra?",
                    de: "Wie oft umkreist die ISS die Erde?",
                    nl: "Hoe vaak omcirkelt het ISS de Aarde?"
                },
                options: [
                    { en: "About once every 90 minutes", es: "Aproximadamente una vez cada 90 minutos", de: "Etwa einmal alle 90 Minuten", nl: "Ongeveer eens per 90 minuten" },
                    { en: "Once per day", es: "Una vez al día", de: "Einmal am Tag", nl: "Eens per dag" },
                    { en: "Once per hour", es: "Una vez por hora", de: "Einmal pro Stunde", nl: "Eens per uur" },
                    { en: "Once per week", es: "Una vez por semana", de: "Einmal pro Woche", nl: "Eens per week" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do astronauts need to survive in space?",
                    es: "¿Qué necesitan los astronautas para sobrevivir en el espacio?",
                    de: "Was brauchen Astronauten, um im Weltraum zu überleben?",
                    nl: "Wat hebben astronauten nodig om te overleven in de ruimte?"
                },
                options: [
                    { en: "Air to breathe, protection from radiation, and temperature control", es: "Aire para respirar, protección de la radiación y control de temperatura", de: "Luft zum Atmen, Schutz vor Strahlung und Temperaturkontrolle", nl: "Lucht om te ademen, bescherming tegen straling en temperatuurcontrole" },
                    { en: "Just warm clothes", es: "Solo ropa abrigada", de: "Nur warme Kleidung", nl: "Alleen warme kleren" },
                    { en: "Only food and water", es: "Solo comida y agua", de: "Nur Nahrung und Wasser", nl: "Alleen voedsel en water" },
                    { en: "Nothing special", es: "Nada especial", de: "Nichts Besonderes", nl: "Niets bijzonders" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why do astronauts need to exercise in space?",
                    es: "¿Por qué los astronautas necesitan hacer ejercicio en el espacio?",
                    de: "Warum müssen Astronauten im Weltraum trainieren?",
                    nl: "Waarom moeten astronauten sporten in de ruimte?"
                },
                options: [
                    { en: "To keep their muscles and bones strong without gravity", es: "Para mantener sus músculos y huesos fuertes sin gravedad", de: "Um ihre Muskeln und Knochen ohne Schwerkraft stark zu halten", nl: "Om hun spieren en botten sterk te houden zonder zwaartekracht" },
                    { en: "Because they get bored", es: "Porque se aburren", de: "Weil sie sich langweilen", nl: "Omdat ze zich vervelen" },
                    { en: "To lose weight", es: "Para perder peso", de: "Um Gewicht zu verlieren", nl: "Om af te vallen" },
                    { en: "To sleep better", es: "Para dormir mejor", de: "Um besser zu schlafen", nl: "Om beter te slapen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is space sickness?",
                    es: "¿Qué es el mareo espacial?",
                    de: "Was ist Weltraumkrankheit?",
                    nl: "Wat is ruimteziekte?"
                },
                options: [
                    { en: "Feeling dizzy and sick when first experiencing weightlessness", es: "Sentirse mareado y enfermo al experimentar ingravidez por primera vez", de: "Sich schwindelig und krank fühlen, wenn man zum ersten Mal Schwerelosigkeit erlebt", nl: "Duizelig en misselijk voelen bij het eerst ervaren van gewichtloosheid" },
                    { en: "Getting sick from aliens", es: "Enfermarse por extraterrestres", de: "Krank werden durch Außerirdische", nl: "Ziek worden van buitenaardse wezens" },
                    { en: "Not having enough food", es: "No tener suficiente comida", de: "Nicht genug Nahrung haben", nl: "Niet genoeg voedsel hebben" },
                    { en: "Being too cold", es: "Tener mucho frío", de: "Zu kalt sein", nl: "Te koud hebben" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do astronauts go to the bathroom in space?",
                    es: "¿Cómo van al baño los astronautas en el espacio?",
                    de: "Wie gehen Astronauten im Weltraum zur Toilette?",
                    nl: "Hoe gaan astronauten naar het toilet in de ruimte?"
                },
                options: [
                    { en: "They use special toilets with suction systems", es: "Usan baños especiales con sistemas de succión", de: "Sie verwenden spezielle Toiletten mit Saugsystemen", nl: "Ze gebruiken speciale toiletten met zuigsystemen" },
                    { en: "They hold it until they return to Earth", es: "Se aguantan hasta regresar a la Tierra", de: "Sie halten es, bis sie zur Erde zurückkehren", nl: "Ze houden het op tot ze terugkeren naar de Aarde" },
                    { en: "They use regular toilets", es: "Usan baños normales", de: "Sie verwenden normale Toiletten", nl: "Ze gebruiken gewone toiletten" },
                    { en: "They go outside the spacecraft", es: "Van afuera de la nave espacial", de: "Sie gehen außerhalb des Raumschiffs", nl: "Ze gaan buiten het ruimteschip" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a spacewalk tether?",
                    es: "¿Qué es una correa de caminata espacial?",
                    de: "Was ist eine Weltraumspaziergang-Leine?",
                    nl: "Wat is een ruimtewandeling-lijn?"
                },
                options: [
                    { en: "A safety cable that connects astronauts to their spacecraft", es: "Un cable de seguridad que conecta a los astronautas con su nave espacial", de: "Ein Sicherheitskabel, das Astronauten mit ihrem Raumschiff verbindet", nl: "Een veiligheidskabel die astronauten verbindt met hun ruimteschip" },
                    { en: "A rope for climbing", es: "Una cuerda para escalar", de: "Ein Seil zum Klettern", nl: "Een touw voor klimmen" },
                    { en: "A tool for fixing things", es: "Una herramienta para arreglar cosas", de: "Ein Werkzeug zum Reparieren", nl: "Een gereedschap om dingen te repareren" },
                    { en: "A communication device", es: "Un dispositivo de comunicación", de: "Ein Kommunikationsgerät", nl: "Een communicatieapparaat" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How long do astronauts typically stay on the ISS?",
                    es: "¿Cuánto tiempo suelen permanecer los astronautas en la EEI?",
                    de: "Wie lange bleiben Astronauten normalerweise auf der ISS?",
                    nl: "Hoe lang blijven astronauten meestal op het ISS?"
                },
                options: [
                    { en: "About 6 months", es: "Aproximadamente 6 meses", de: "Etwa 6 Monate", nl: "Ongeveer 6 maanden" },
                    { en: "1 week", es: "1 semana", de: "1 Woche", nl: "1 week" },
                    { en: "5 years", es: "5 años", de: "5 Jahre", nl: "5 jaar" },
                    { en: "1 month", es: "1 mes", de: "1 Monat", nl: "1 maand" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is launch escape system?",
                    es: "¿Qué es el sistema de escape de lanzamiento?",
                    de: "Was ist ein Startflucht-System?",
                    nl: "Wat is een lancering-ontsnapsingssysteem?"
                },
                options: [
                    { en: "A safety system that can pull astronauts away from a failing rocket", es: "Un sistema de seguridad que puede alejar a los astronautas de un cohete que falla", de: "Ein Sicherheitssystem, das Astronauten von einer versagenden Rakete wegziehen kann", nl: "Een veiligheidssysteem dat astronauten weg kan trekken van een falende raket" },
                    { en: "A way to get out of the spacecraft quickly", es: "Una manera de salir rápidamente de la nave espacial", de: "Ein Weg, um schnell aus dem Raumschiff zu kommen", nl: "Een manier om snel uit het ruimteschip te komen" },
                    { en: "A method to launch rockets faster", es: "Un método para lanzar cohetes más rápido", de: "Eine Methode, um Raketen schneller zu starten", nl: "Een methode om raketten sneller te lanceren" },
                    { en: "A training exercise", es: "Un ejercicio de entrenamiento", de: "Eine Trainingsübung", nl: "Een trainingsoefening" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is re-entry?",
                    es: "¿Qué es la reentrada?",
                    de: "Was ist der Wiedereintritt?",
                    nl: "Wat is terugkeer?"
                },
                options: [
                    { en: "When a spacecraft returns through Earth's atmosphere", es: "Cuando una nave espacial regresa a través de la atmósfera de la Tierra", de: "Wenn ein Raumschiff durch die Erdatmosphäre zurückkehrt", nl: "Wanneer een ruimteschip terugkeert door de atmosfeer van de Aarde" },
                    { en: "Entering a building again", es: "Entrar a un edificio de nuevo", de: "Ein Gebäude wieder betreten", nl: "Een gebouw weer binnengaan" },
                    { en: "Starting a mission over", es: "Comenzar una misión de nuevo", de: "Eine Mission neu beginnen", nl: "Een missie opnieuw beginnen" },
                    { en: "Launching a rocket twice", es: "Lanzar un cohete dos veces", de: "Eine Rakete zweimal starten", nl: "Een raket twee keer lanceren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why does a spacecraft get hot during re-entry?",
                    es: "¿Por qué se calienta una nave espacial durante la reentrada?",
                    de: "Warum wird ein Raumschiff beim Wiedereintritt heiß?",
                    nl: "Waarom wordt een ruimteschip heet tijdens terugkeer?"
                },
                options: [
                    { en: "Friction with air molecules creates heat", es: "La fricción con las moléculas de aire crea calor", de: "Reibung mit Luftmolekülen erzeugt Wärme", nl: "Wrijving met luchtmoleculen creëert warmte" },
                    { en: "The Sun heats it up", es: "El Sol lo calienta", de: "Die Sonne heizt es auf", nl: "De Zon verwarmt het" },
                    { en: "The engines are running", es: "Los motores están funcionando", de: "Die Motoren laufen", nl: "De motoren draaien" },
                    { en: "It gets close to Earth's core", es: "Se acerca al núcleo de la Tierra", de: "Es kommt dem Erdkern nahe", nl: "Het komt dicht bij de kern van de Aarde" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a heat shield?",
                    es: "¿Qué es un escudo térmico?",
                    de: "Was ist ein Hitzeschild?",
                    nl: "Wat is een hitteschild?"
                },
                options: [
                    { en: "Protection that keeps spacecraft from burning up during re-entry", es: "Protección que evita que las naves espaciales se quemen durante la reentrada", de: "Schutz, der Raumschiffe vor dem Verbrennen beim Wiedereintritt bewahrt", nl: "Bescherming die ruimteschepen ervan weerhoudt te verbranden tijdens terugkeer" },
                    { en: "A shield that blocks sunlight", es: "Un escudo que bloquea la luz solar", de: "Ein Schild, der Sonnenlicht blockiert", nl: "Een schild dat zonlicht blokkeert" },
                    { en: "Protection from cold temperatures", es: "Protección de temperaturas frías", de: "Schutz vor kalten Temperaturen", nl: "Bescherming tegen koude temperaturen" },
                    { en: "A tool used by astronauts", es: "Una herramienta usada por astronautas", de: "Ein Werkzeug von Astronauten verwendet", nl: "Een gereedschap gebruikt door astronauten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is mission duration?",
                    es: "¿Qué es la duración de la misión?",
                    de: "Was ist die Missionsdauer?",
                    nl: "Wat is missieduur?"
                },
                options: [
                    { en: "How long a space mission lasts", es: "Cuánto dura una misión espacial", de: "Wie lange eine Weltraummission dauert", nl: "Hoe lang een ruimtemissie duurt" },
                    { en: "How far astronauts travel", es: "Qué tan lejos viajan los astronautas", de: "Wie weit Astronauten reisen", nl: "Hoe ver astronauten reizen" },
                    { en: "How many astronauts go", es: "Cuántos astronautas van", de: "Wie viele Astronauten gehen", nl: "Hoeveel astronauten gaan" },
                    { en: "The cost of the mission", es: "El costo de la misión", de: "Die Kosten der Mission", nl: "De kosten van de missie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are the different phases of a space mission?",
                    es: "¿Cuáles son las diferentes fases de una misión espacial?",
                    de: "Was sind die verschiedenen Phasen einer Weltraummission?",
                    nl: "Wat zijn de verschillende fasen van een ruimtemissie?"
                },
                options: [
                    { en: "Launch, orbit/travel, mission activities, and return", es: "Lanzamiento, órbita/viaje, actividades de misión y regreso", de: "Start, Umlaufbahn/Reise, Missionsaktivitäten und Rückkehr", nl: "Lancering, baan/reis, missie-activiteiten en terugkeer" },
                    { en: "Only launch and landing", es: "Solo lanzamiento y aterrizaje", de: "Nur Start und Landung", nl: "Alleen lancering en landing" },
                    { en: "Planning, flying, and celebrating", es: "Planificación, vuelo y celebración", de: "Planung, Fliegen und Feiern", nl: "Plannen, vliegen en vieren" },
                    { en: "Training, mission, and vacation", es: "Entrenamiento, misión y vacaciones", de: "Training, Mission und Urlaub", nl: "Training, missie en vakantie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is orbital velocity?",
                    es: "¿Qué es la velocidad orbital?",
                    de: "Was ist die Umlaufgeschwindigkeit?",
                    nl: "Wat is baansnelheid?"
                },
                options: [
                    { en: "The speed needed to orbit Earth without falling back down", es: "La velocidad necesaria para orbitar la Tierra sin caer de vuelta", de: "Die Geschwindigkeit, die benötigt wird, um die Erde zu umkreisen, ohne zurückzufallen", nl: "De snelheid die nodig is om de Aarde te omcirkelen zonder terug te vallen" },
                    { en: "How fast astronauts walk", es: "Qué tan rápido caminan los astronautas", de: "Wie schnell Astronauten gehen", nl: "Hoe snel astronauten lopen" },
                    { en: "The speed of light", es: "La velocidad de la luz", de: "Die Lichtgeschwindigkeit", nl: "De lichtsnelheid" },
                    { en: "How fast rockets are built", es: "Qué tan rápido se construyen los cohetes", de: "Wie schnell Raketen gebaut werden", nl: "Hoe snel raketten worden gebouwd" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a space capsule?",
                    es: "¿Qué es una cápsula espacial?",
                    de: "Was ist eine Raumkapsel?",
                    nl: "Wat is een ruimtecapsule?"
                },
                options: [
                    { en: "The part of spacecraft where astronauts sit during launch and return", es: "La parte de la nave espacial donde se sientan los astronautas durante el lanzamiento y el regreso", de: "Der Teil des Raumschiffs, wo Astronauten während Start und Rückkehr sitzen", nl: "Het deel van het ruimteschip waar astronauten zitten tijdens lancering en terugkeer" },
                    { en: "A pill astronauts take", es: "Una píldora que toman los astronautas", de: "Eine Pille, die Astronauten nehmen", nl: "Een pil die astronauten nemen" },
                    { en: "A container for food", es: "Un contenedor para comida", de: "Ein Behälter für Nahrung", nl: "Een container voor voedsel" },
                    { en: "A small planet", es: "Un planeta pequeño", de: "Ein kleiner Planet", nl: "Een kleine planeet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why is teamwork important for astronauts?",
                    es: "¿Por qué es importante el trabajo en equipo para los astronautas?",
                    de: "Warum ist Teamwork für Astronauten wichtig?",
                    nl: "Waarom is teamwerk belangrijk voor astronauten?"
                },
                options: [
                    { en: "They must depend on each other for safety and mission success", es: "Deben depender unos de otros para la seguridad y el éxito de la misión", de: "Sie müssen voneinander abhängig sein für Sicherheit und Missionserfolg", nl: "Ze moeten op elkaar vertrouwen voor veiligheid en missiesucces" },
                    { en: "It makes the trip more fun", es: "Hace el viaje más divertido", de: "Es macht die Reise lustiger", nl: "Het maakt de reis leuker" },
                    { en: "To share the food equally", es: "Para compartir la comida por igual", de: "Um das Essen gleichmäßig zu teilen", nl: "Om het voedsel gelijk te verdelen" },
                    { en: "To take turns sleeping", es: "Para turnarse para dormir", de: "Um sich beim Schlafen abzuwechseln", nl: "Om beurten te slapen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happens to flames in zero gravity?",
                    es: "¿Qué pasa con las llamas en gravedad cero?",
                    de: "Was passiert mit Flammen bei null Schwerkraft?",
                    nl: "Wat gebeurt er met vlammen bij nul zwaartekracht?"
                },
                options: [
                    { en: "They burn in perfect spheres because hot air doesn't rise", es: "Arden en esferas perfectas porque el aire caliente no sube", de: "Sie brennen in perfekten Kugeln, weil heiße Luft nicht aufsteigt", nl: "Ze branden in perfecte bollen omdat warme lucht niet opstijgt" },
                    { en: "They burn normally", es: "Arden normalmente", de: "Sie brennen normal", nl: "Ze branden normaal" },
                    { en: "They can't burn at all", es: "No pueden arder en absoluto", de: "Sie können überhaupt nicht brennen", nl: "Ze kunnen helemaal niet branden" },
                    { en: "They burn upside down", es: "Arden al revés", de: "Sie brennen verkehrt herum", nl: "Ze branden ondersteboven" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is space debris?",
                    es: "¿Qué son los desechos espaciales?",
                    de: "Was ist Weltraummüll?",
                    nl: "Wat is ruimteafval?"
                },
                options: [
                    { en: "Old satellites and rocket parts floating in space", es: "Satélites viejos y partes de cohetes flotando en el espacio", de: "Alte Satelliten und Raketenteile, die im Weltraum schweben", nl: "Oude satellieten en raketonderdelen die in de ruimte zweven" },
                    { en: "Garbage from the ISS", es: "Basura de la EEI", de: "Müll von der ISS", nl: "Afval van het ISS" },
                    { en: "Natural space rocks", es: "Rocas espaciales naturales", de: "Natürliche Weltraumfelsen", nl: "Natuurlijke ruimterotsen" },
                    { en: "Food waste from astronauts", es: "Desperdicios de comida de los astronautas", de: "Essensreste von Astronauten", nl: "Voedselafval van astronauten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What makes someone qualified to become an astronaut?",
                    es: "¿Qué hace que alguien esté calificado para convertirse en astronauta?",
                    de: "Was macht jemanden qualifiziert, Astronaut zu werden?",
                    nl: "Wat maakt iemand gekwalificeerd om astronaut te worden?"
                },
                options: [
                    { en: "Advanced education, physical fitness, and psychological stability", es: "Educación avanzada, condición física y estabilidad psicológica", de: "Fortgeschrittene Ausbildung, körperliche Fitness und psychische Stabilität", nl: "Gevorderde opleiding, fysieke fitheid en psychologische stabiliteit" },
                    { en: "Just being brave", es: "Solo ser valiente", de: "Nur mutig sein", nl: "Alleen dapper zijn" },
                    { en: "Knowing how to fly planes", es: "Saber volar aviones", de: "Wissen, wie man Flugzeuge fliegt", nl: "Weten hoe je vliegtuigen vliegt" },
                    { en: "Being tall and strong", es: "Ser alto y fuerte", de: "Groß und stark sein", nl: "Lang en sterk zijn" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the most dangerous part of space travel?",
                    es: "¿Cuál es la parte más peligrosa de los viajes espaciales?",
                    de: "Was ist der gefährlichste Teil der Raumfahrt?",
                    nl: "Wat is het gevaarlijkste deel van ruimtereizen?"
                },
                options: [
                    { en: "Launch and re-entry because of high speeds and forces", es: "Lanzamiento y reentrada debido a las altas velocidades y fuerzas", de: "Start und Wiedereintritt wegen hoher Geschwindigkeiten und Kräfte", nl: "Lancering en terugkeer vanwege hoge snelheden en krachten" },
                    { en: "Getting lost in space", es: "Perderse en el espacio", de: "Sich im Weltraum verirren", nl: "Verdwalen in de ruimte" },
                    { en: "Running out of entertainment", es: "Quedarse sin entretenimiento", de: "Keine Unterhaltung mehr haben", nl: "Zonder entertainment zitten" },
                    { en: "Meeting aliens", es: "Encontrar extraterrestres", de: "Außerirdische treffen", nl: "Buitenaardse wezens ontmoeten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do astronauts prepare psychologically for long missions?",
                    es: "¿Cómo se preparan psicológicamente los astronautas para misiones largas?",
                    de: "Wie bereiten sich Astronauten psychologisch auf lange Missionen vor?",
                    nl: "Hoe bereiden astronauten zich psychologisch voor op lange missies?"
                },
                options: [
                    { en: "Mental training, stress management, and team building exercises", es: "Entrenamiento mental, manejo del estrés y ejercicios de construcción de equipo", de: "Mentales Training, Stressmanagement und Teambildungsübungen", nl: "Mentale training, stressbeheersing en teambuilding oefeningen" },
                    { en: "By watching movies", es: "Viendo películas", de: "Indem sie Filme schauen", nl: "Door films te kijken" },
                    { en: "By sleeping a lot", es: "Durmiendo mucho", de: "Indem sie viel schlafen", nl: "Door veel te slapen" },
                    { en: "They don't need preparation", es: "No necesitan preparación", de: "Sie brauchen keine Vorbereitung", nl: "Ze hebben geen voorbereiding nodig" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What scientific experiments do astronauts conduct in space?",
                    es: "¿Qué experimentos científicos realizan los astronautas en el espacio?",
                    de: "Welche wissenschaftlichen Experimente führen Astronauten im Weltraum durch?",
                    nl: "Welke wetenschappelijke experimenten voeren astronauten uit in de ruimte?"
                },
                options: [
                    { en: "Studies on how zero gravity affects plants, animals, and materials", es: "Estudios sobre cómo la gravedad cero afecta plantas, animales y materiales", de: "Studien darüber, wie sich null Schwerkraft auf Pflanzen, Tiere und Materialien auswirkt", nl: "Studies over hoe nul zwaartekracht planten, dieren en materialen beïnvloedt" },
                    { en: "Only taking pictures", es: "Solo tomar fotos", de: "Nur Fotos machen", nl: "Alleen foto's maken" },
                    { en: "Testing new foods", es: "Probando nuevas comidas", de: "Neue Nahrungsmittel testen", nl: "Nieuw voedsel testen" },
                    { en: "Playing games", es: "Jugando juegos", de: "Spiele spielen", nl: "Spelletjes spelen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How has space travel changed over the years?",
                    es: "¿Cómo han cambiado los viajes espaciales a lo largo de los años?",
                    de: "Wie hat sich die Raumfahrt über die Jahre verändert?",
                    nl: "Hoe zijn ruimtereizen door de jaren heen veranderd?"
                },
                options: [
                    { en: "Spacecraft became safer, reusable, and missions became longer", es: "Las naves espaciales se volvieron más seguras, reutilizables y las misiones más largas", de: "Raumschiffe wurden sicherer, wiederverwendbar und Missionen länger", nl: "Ruimteschepen werden veiliger, herbruikbaar en missies langer" },
                    { en: "Nothing has changed", es: "Nada ha cambiado", de: "Nichts hat sich geändert", nl: "Er is niets veranderd" },
                    { en: "They became more dangerous", es: "Se volvieron más peligrosas", de: "Sie wurden gefährlicher", nl: "Ze werden gevaarlijker" },
                    { en: "Only the colors changed", es: "Solo cambiaron los colores", de: "Nur die Farben änderten sich", nl: "Alleen de kleuren veranderden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the future of human space exploration?",
                    es: "¿Cuál es el futuro de la exploración espacial humana?",
                    de: "Was ist die Zukunft der menschlichen Weltraumforschung?",
                    nl: "Wat is de toekomst van menselijke ruimteverkenning?"
                },
                options: [
                    { en: "Missions to Mars, Moon bases, and deeper space exploration", es: "Misiones a Marte, bases lunares y exploración del espacio profundo", de: "Missionen zum Mars, Mondbasen und tiefere Weltraumforschung", nl: "Missies naar Mars, maanbases en diepere ruimteverkenning" },
                    { en: "Only staying near Earth", es: "Solo quedarse cerca de la Tierra", de: "Nur in der Nähe der Erde bleiben", nl: "Alleen bij de Aarde blijven" },
                    { en: "Ending all space missions", es: "Terminar todas las misiones espaciales", de: "Alle Weltraummissionen beenden", nl: "Alle ruimtemissies beëindigen" },
                    { en: "Building space hotels only", es: "Solo construir hoteles espaciales", de: "Nur Weltraumhotels bauen", nl: "Alleen ruimtehotels bouwen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a space suit's life support system?",
                    es: "¿Qué es el sistema de soporte vital de un traje espacial?",
                    de: "Was ist das Lebenserhaltungssystem eines Raumanzugs?",
                    nl: "Wat is het levensondersteunend systeem van een ruimtepak?"
                },
                options: [
                    { en: "Equipment that provides air, removes carbon dioxide, and regulates temperature", es: "Equipo que proporciona aire, elimina dióxido de carbono y regula la temperatura", de: "Ausrüstung, die Luft liefert, Kohlendioxid entfernt und die Temperatur reguliert", nl: "Apparatuur die lucht levert, koolstofdioxide verwijdert en temperatuur regelt" },
                    { en: "A computer that controls the suit", es: "Una computadora que controla el traje", de: "Ein Computer, der den Anzug steuert", nl: "Een computer die het pak bestuurt" },
                    { en: "A backup radio system", es: "Un sistema de radio de respaldo", de: "Ein Backup-Funksystem", nl: "Een backup-radiosysteem" },
                    { en: "Extra batteries for lights", es: "Baterías extra para luces", de: "Extra Batterien für Lichter", nl: "Extra batterijen voor lichten" }
                ],
                correct: 0,
                explanation: {
                    en: "The life support system is crucial for astronaut survival, maintaining breathable air and comfortable conditions inside the suit.",
                    es: "El sistema de soporte vital es crucial para la supervivencia del astronauta, manteniendo aire respirable y condiciones cómodas dentro del traje.",
                    de: "Das Lebenserhaltungssystem ist entscheidend für das Überleben der Astronauten und hält atembare Luft und angenehme Bedingungen im Anzug aufrecht.",
                    nl: "Het levensondersteunend systeem is cruciaal voor de overleving van astronauten, en houdt adembare lucht en comfortabele omstandigheden in het pak in stand."
                }
            },
            {
                question: {
                    en: "What is G-force and how does it affect astronauts?",
                    es: "¿Qué es la fuerza G y cómo afecta a los astronautas?",
                    de: "Was ist G-Kraft und wie wirkt sie sich auf Astronauten aus?",
                    nl: "Wat is G-kracht en hoe beïnvloedt het astronauten?"
                },
                options: [
                    { en: "The force of acceleration that pushes astronauts into their seats during launch", es: "La fuerza de aceleración que empuja a los astronautas hacia sus asientos durante el lanzamiento", de: "Die Beschleunigungskraft, die Astronauten während des Starts in ihre Sitze drückt", nl: "De versnellingskracht die astronauten in hun stoelen drukt tijdens de lancering" },
                    { en: "The force of Earth's gravity", es: "La fuerza de la gravedad de la Tierra", de: "Die Kraft der Erdanziehung", nl: "De kracht van de zwaartekracht van de Aarde" },
                    { en: "A type of space fuel", es: "Un tipo de combustible espacial", de: "Eine Art Weltraumtreibstoff", nl: "Een soort ruimtebrandstof" },
                    { en: "The force that keeps spacecraft in orbit", es: "La fuerza que mantiene las naves espaciales en órbita", de: "Die Kraft, die Raumschiffe in der Umlaufbahn hält", nl: "De kracht die ruimteschepen in een baan houdt" }
                ],
                correct: 0,
                explanation: {
                    en: "During launch, astronauts experience multiple times Earth's gravity, feeling like they weigh several times their normal weight.",
                    es: "Durante el lanzamiento, los astronautas experimentan múltiples veces la gravedad de la Tierra, sintiendo como si pesaran varias veces su peso normal.",
                    de: "Während des Starts erleben Astronauten ein Vielfaches der Erdanziehung und fühlen sich, als würden sie mehrmals ihr normales Gewicht wiegen.",
                    nl: "Tijdens de lancering ervaren astronauten meerdere malen de zwaartekracht van de Aarde, en voelen alsof ze meerdere malen hun normale gewicht wegen."
                }
            },
            {
                question: {
                    en: "What is space adaptation syndrome?",
                    es: "¿Qué es el síndrome de adaptación espacial?",
                    de: "Was ist das Weltraumanpassungssyndrom?",
                    nl: "Wat is het ruimteaanpassingssyndroom?"
                },
                options: [
                    { en: "The temporary sickness astronauts feel when adjusting to weightlessness", es: "La enfermedad temporal que sienten los astronautas al adaptarse a la ingravidez", de: "Die vorübergehende Krankheit, die Astronauten beim Anpassen an die Schwerelosigkeit empfinden", nl: "De tijdelijke ziekte die astronauten voelen bij het aanpassen aan gewichtloosheid" },
                    { en: "Learning to use space tools", es: "Aprender a usar herramientas espaciales", de: "Lernen, Weltraum-Werkzeuge zu verwenden", nl: "Leren ruimtegereedschap te gebruiken" },
                    { en: "Getting used to space food", es: "Acostumbrarse a la comida espacial", de: "Sich an Weltraumnahrung gewöhnen", nl: "Wennen aan ruimtevoedsel" },
                    { en: "Adjusting to the space schedule", es: "Adaptarse al horario espacial", de: "Sich an den Weltraumzeitplan anpassen", nl: "Aanpassen aan het ruimteschema" }
                ],
                correct: 0,
                explanation: {
                    en: "Most astronauts experience nausea, disorientation, and headaches for the first few days as their bodies adapt to microgravity.",
                    es: "La mayoría de los astronautas experimentan náuseas, desorientación y dolores de cabeza durante los primeros días mientras sus cuerpos se adaptan a la microgravedad.",
                    de: "Die meisten Astronauten erleben Übelkeit, Desorientierung und Kopfschmerzen in den ersten Tagen, während sich ihre Körper an die Mikrogravitation anpassen.",
                    nl: "De meeste astronauten ervaren misselijkheid, desoriëntatie en hoofdpijn gedurende de eerste paar dagen terwijl hun lichamen zich aanpassen aan microzwaartekracht."
                }
            },
            {
                question: {
                    en: "What is a docking mechanism?",
                    es: "¿Qué es un mecanismo de acoplamiento?",
                    de: "Was ist ein Andockmechanismus?",
                    nl: "Wat is een dockingmechanisme?"
                },
                options: [
                    { en: "A system that allows spacecraft to connect together in space", es: "Un sistema que permite que las naves espaciales se conecten en el espacio", de: "Ein System, das es Raumschiffen ermöglicht, sich im Weltraum zu verbinden", nl: "Een systeem dat ruimteschepen toelaat om samen te verbinden in de ruimte" },
                    { en: "A way to land on planets", es: "Una manera de aterrizar en planetas", de: "Eine Art, auf Planeten zu landen", nl: "Een manier om op planeten te landen" },
                    { en: "A tool for space repairs", es: "Una herramienta para reparaciones espaciales", de: "Ein Werkzeug für Weltraumreparaturen", nl: "Een gereedschap voor ruimtereparaties" },
                    { en: "A navigation system", es: "Un sistema de navegación", de: "Ein Navigationssystem", nl: "Een navigatiesysteem" }
                ],
                correct: 0,
                explanation: {
                    en: "Docking allows spacecraft to join with space stations or other vessels, enabling crew transfers and cargo delivery.",
                    es: "El acoplamiento permite que las naves espaciales se unan con estaciones espaciales u otras naves, permitiendo transferencias de tripulación y entrega de carga.",
                    de: "Das Andocken ermöglicht es Raumschiffen, sich mit Raumstationen oder anderen Schiffen zu verbinden und Besatzungstransfers und Frachtzustellung zu ermöglichen.",
                    nl: "Docking stelt ruimteschepen in staat om te verbinden met ruimtestations of andere vaartuigen, waardoor bemanningsoverdrachten en vrachttransport mogelijk worden."
                }
            },
            {
                question: {
                    en: "What is zero-g training?",
                    es: "¿Qué es el entrenamiento de gravedad cero?",
                    de: "Was ist Null-G-Training?",
                    nl: "Wat is nul-g training?"
                },
                options: [
                    { en: "Practice in aircraft that simulate weightlessness through free fall", es: "Práctica en aeronaves que simulan ingravidez a través de caída libre", de: "Übung in Flugzeugen, die Schwerelosigkeit durch freien Fall simulieren", nl: "Oefenen in vliegtuigen die gewichtloosheid simuleren door vrije val" },
                    { en: "Working out with no equipment", es: "Hacer ejercicio sin equipos", de: "Training ohne Ausrüstung", nl: "Trainen zonder apparatuur" },
                    { en: "Swimming underwater", es: "Nadar bajo el agua", de: "Unter Wasser schwimmen", nl: "Zwemmen onder water" },
                    { en: "Training on the ground", es: "Entrenar en el suelo", de: "Training am Boden", nl: "Trainen op de grond" }
                ],
                correct: 0,
                explanation: {
                    en: "The 'Vomit Comet' aircraft flies in parabolic arcs, creating brief periods of weightlessness for astronaut training.",
                    es: "El avión 'Cometa del Vómito' vuela en arcos parabólicos, creando períodos breves de ingravidez para el entrenamiento de astronautas.",
                    de: "Das 'Erbrech-Komet'-Flugzeug fliegt in parabolischen Bögen und schafft kurze Perioden der Schwerelosigkeit für das Astronautentraining.",
                    nl: "Het 'Braak-Komeet' vliegtuig vliegt in parabolische bogen, wat korte perioden van gewichtloosheid creëert voor astronautentraining."
                }
            },
            {
                question: {
                    en: "What is an airlock?",
                    es: "¿Qué es una esclusa de aire?",
                    de: "Was ist eine Luftschleuse?",
                    nl: "Wat is een luchtsluis?"
                },
                options: [
                    { en: "A chamber that allows astronauts to go outside without letting air escape", es: "Una cámara que permite a los astronautas salir sin dejar escapar el aire", de: "Eine Kammer, die es Astronauten ermöglicht, nach draußen zu gehen, ohne Luft entweichen zu lassen", nl: "Een kamer die astronauten toestaat naar buiten te gaan zonder lucht te laten ontsnappen" },
                    { en: "A door that keeps air inside", es: "Una puerta que mantiene el aire adentro", de: "Eine Tür, die Luft drinnen hält", nl: "Een deur die lucht binnen houdt" },
                    { en: "A window in spacecraft", es: "Una ventana en la nave espacial", de: "Ein Fenster im Raumschiff", nl: "Een raam in het ruimteschip" },
                    { en: "A storage room for tools", es: "Un cuarto de almacenamiento para herramientas", de: "Ein Lagerraum für Werkzeuge", nl: "Een opslagruimte voor gereedschap" }
                ],
                correct: 0,
                explanation: {
                    en: "Airlocks have two doors that prevent the spacecraft's atmosphere from escaping when astronauts exit for spacewalks.",
                    es: "Las esclusas de aire tienen dos puertas que evitan que la atmósfera de la nave escape cuando los astronautas salen para caminatas espaciales.",
                    de: "Luftschleusen haben zwei Türen, die verhindern, dass die Atmosphäre des Raumschiffs entweicht, wenn Astronauten für Weltraumspaziergänge aussteigen.",
                    nl: "Luchtsluizen hebben twee deuren die voorkomen dat de atmosfeer van het ruimteschip ontsnapt wanneer astronauten naar buiten gaan voor ruimtewandelingen."
                }
            },
            {
                question: {
                    en: "What is orbital mechanics?",
                    es: "¿Qué es la mecánica orbital?",
                    de: "Was ist Orbitalmechanik?",
                    nl: "Wat is baanmechanica?"
                },
                options: [
                    { en: "The science of how objects move in space under gravity's influence", es: "La ciencia de cómo se mueven los objetos en el espacio bajo la influencia de la gravedad", de: "Die Wissenschaft, wie sich Objekte im Weltraum unter dem Einfluss der Schwerkraft bewegen", nl: "De wetenschap van hoe objecten in de ruimte bewegen onder invloed van zwaartekracht" },
                    { en: "Fixing broken spacecraft", es: "Reparar naves espaciales rotas", de: "Kaputte Raumschiffe reparieren", nl: "Kapotte ruimteschepen repareren" },
                    { en: "The study of rocket engines", es: "El estudio de los motores de cohetes", de: "Das Studium von Raketentriebwerken", nl: "De studie van raketmotoren" },
                    { en: "How to build space stations", es: "Cómo construir estaciones espaciales", de: "Wie man Raumstationen baut", nl: "Hoe ruimtestations te bouwen" }
                ],
                correct: 0,
                explanation: {
                    en: "Understanding orbital mechanics is essential for planning spacecraft trajectories, rendezvous maneuvers, and mission timing.",
                    es: "Entender la mecánica orbital es esencial para planificar trayectorias de naves espaciales, maniobras de encuentro y tiempo de misión.",
                    de: "Das Verständnis der Orbitalmechanik ist wesentlich für die Planung von Raumschiff-Trajektorien, Rendezvous-Manövern und Missionstiming.",
                    nl: "Het begrijpen van baanmechanica is essentieel voor het plannen van ruimteschipbanen, rendez-vous manoeuvres en missietiming."
                }
            },
            {
                question: {
                    en: "What is a mission patch?",
                    es: "¿Qué es un parche de misión?",
                    de: "Was ist ein Missionsabzeichen?",
                    nl: "Wat is een missiepatch?"
                },
                options: [
                    { en: "An embroidered badge that represents a specific space mission", es: "Una insignia bordada que representa una misión espacial específica", de: "Ein gesticktes Abzeichen, das eine spezifische Weltraummission darstellt", nl: "Een geborduurde badge die een specifieke ruimtemissie vertegenwoordigt" },
                    { en: "A repair kit for spacecraft", es: "Un kit de reparación para naves espaciales", de: "Ein Reparaturset für Raumschiffe", nl: "Een reparatieset voor ruimteschepen" },
                    { en: "A piece of equipment", es: "Una pieza de equipo", de: "Ein Ausrüstungsstück", nl: "Een stuk uitrusting" },
                    { en: "A type of space food", es: "Un tipo de comida espacial", de: "Eine Art Weltraumnahrung", nl: "Een soort ruimtevoedsel" }
                ],
                correct: 0,
                explanation: {
                    en: "Mission patches are designed by crew members and contain symbols representing their mission goals and achievements.",
                    es: "Los parches de misión son diseñados por los miembros de la tripulación y contienen símbolos que representan sus objetivos y logros de misión.",
                    de: "Missionsabzeichen werden von Besatzungsmitgliedern entworfen und enthalten Symbole, die ihre Missionsziele und -erfolge darstellen.",
                    nl: "Missiepatches worden ontworpen door bemanningsleden en bevatten symbolen die hun missiedoelen en prestaties vertegenwoordigen."
                }
            },
            {
                question: {
                    en: "What is attitude control in spacecraft?",
                    es: "¿Qué es el control de actitud en naves espaciales?",
                    de: "Was ist Lagekontrolle in Raumschiffen?",
                    nl: "Wat is houdingcontrole in ruimteschepen?"
                },
                options: [
                    { en: "The system that controls which direction the spacecraft points", es: "El sistema que controla hacia qué dirección apunta la nave espacial", de: "Das System, das kontrolliert, in welche Richtung das Raumschiff zeigt", nl: "Het systeem dat controleert welke richting het ruimteschip wijst" },
                    { en: "Managing astronaut behavior", es: "Gestionar el comportamiento de los astronautas", de: "Das Verhalten der Astronauten verwalten", nl: "Het gedrag van astronauten beheren" },
                    { en: "Controlling spacecraft speed", es: "Controlar la velocidad de la nave espacial", de: "Die Geschwindigkeit des Raumschiffs kontrollieren", nl: "De snelheid van het ruimteschip controleren" },
                    { en: "Setting mission goals", es: "Establecer objetivos de misión", de: "Missionsziele setzen", nl: "Missiedoelen stellen" }
                ],
                correct: 0,
                explanation: {
                    en: "Attitude control systems use thrusters and gyroscopes to precisely orient spacecraft for communications, observations, and maneuvers.",
                    es: "Los sistemas de control de actitud usan propulsores y giroscopios para orientar precisamente las naves espaciales para comunicaciones, observaciones y maniobras.",
                    de: "Lagekontrollsysteme verwenden Triebwerke und Gyroskope, um Raumschiffe präzise für Kommunikation, Beobachtungen und Manöver auszurichten.",
                    nl: "Houdingcontrolesystemen gebruiken stuwraketten en gyroscopen om ruimteschepen precies te oriënteren voor communicatie, observaties en manoeuvres."
                }
            },
            {
                question: {
                    en: "What is rendezvous and docking?",
                    es: "¿Qué es encuentro y acoplamiento?",
                    de: "Was ist Rendezvous und Andocken?",
                    nl: "Wat is rendez-vous en docking?"
                },
                options: [
                    { en: "The complex process of two spacecraft meeting and connecting in orbit", es: "El proceso complejo de dos naves espaciales encontrándose y conectándose en órbita", de: "Der komplexe Prozess zweier Raumschiffe, die sich in der Umlaufbahn treffen und verbinden", nl: "Het complexe proces van twee ruimteschepen die elkaar ontmoeten en verbinden in een baan" },
                    { en: "Landing on a planet surface", es: "Aterrizar en la superficie de un planeta", de: "Auf einer Planetenoberfläche landen", nl: "Landen op een planeetoppervlak" },
                    { en: "Launching multiple rockets", es: "Lanzar múltiples cohetes", de: "Mehrere Raketen starten", nl: "Meerdere raketten lanceren" },
                    { en: "Training exercises on Earth", es: "Ejercicios de entrenamiento en la Tierra", de: "Trainingsübungen auf der Erde", nl: "Trainingsoefeningen op Aarde" }
                ],
                correct: 0,
                explanation: {
                    en: "This precise operation requires careful timing and navigation to bring spacecraft together safely for crew transfers or cargo delivery.",
                    es: "Esta operación precisa requiere tiempo y navegación cuidadosos para unir naves espaciales de manera segura para transferencias de tripulación o entrega de carga.",
                    de: "Diese präzise Operation erfordert sorgfältiges Timing und Navigation, um Raumschiffe sicher für Besatzungstransfers oder Frachtlieferung zusammenzubringen.",
                    nl: "Deze precieze operatie vereist zorgvuldige timing en navigatie om ruimteschepen veilig samen te brengen voor bemanningsoverdrachten of vrachtlevering."
                }
            },
            {
                question: {
                    en: "What role does psychology play in astronaut selection?",
                    es: "¿Qué papel juega la psicología en la selección de astronautas?",
                    de: "Welche Rolle spielt Psychologie bei der Astronautenauswahl?",
                    nl: "Welke rol speelt psychologie bij astronautenselectie?"
                },
                options: [
                    { en: "Ensuring astronauts can handle isolation, stress, and work well in teams", es: "Asegurar que los astronautas puedan manejar el aislamiento, estrés y trabajar bien en equipos", de: "Sicherstellen, dass Astronauten Isolation, Stress bewältigen und gut im Team arbeiten können", nl: "Ervoor zorgen dat astronauten isolatie, stress aankunnen en goed in teams kunnen werken" },
                    { en: "Testing their intelligence only", es: "Probar solo su inteligencia", de: "Nur ihre Intelligenz testen", nl: "Alleen hun intelligentie testen" },
                    { en: "Checking if they like space", es: "Verificar si les gusta el espacio", de: "Prüfen, ob sie den Weltraum mögen", nl: "Controleren of ze van de ruimte houden" },
                    { en: "Making sure they're brave", es: "Asegurar que sean valientes", de: "Sicherstellen, dass sie mutig sind", nl: "Ervoor zorgen dat ze dapper zijn" }
                ],
                correct: 0,
                explanation: {
                    en: "Psychological fitness is crucial because astronauts face unique mental challenges including confinement, danger, and separation from family.",
                    es: "La condición psicológica es crucial porque los astronautas enfrentan desafíos mentales únicos incluyendo confinamiento, peligro y separación de la familia.",
                    de: "Psychische Fitness ist entscheidend, weil Astronauten einzigartige mentale Herausforderungen bewältigen müssen, einschließlich Eingeschlossenheit, Gefahr und Trennung von der Familie.",
                    nl: "Psychologische fitheid is cruciaal omdat astronauten unieke mentale uitdagingen het hoofd moeten bieden, waaronder opsluiting, gevaar en scheiding van familie."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/space-astronomy', level5);
    }
})();