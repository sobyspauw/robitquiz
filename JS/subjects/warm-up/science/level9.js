(function() {
    const level9 = {
        name: {
            en: "Energy and Light",
            es: "Energía y Luz",
            de: "Energie und Licht",
            nl: "Energie en Licht"
        },
        questions: [
            {
                question: {
                    en: "What do we need energy for?",
                    es: "¿Para qué necesitamos energía?",
                    de: "Wofür brauchen wir Energie?",
                    nl: "Waarvoor hebben we energie nodig?"
                },
                options: [
                    { en: "To move, grow, and stay alive", es: "Para movernos, crecer y mantenernos vivos", de: "Um uns zu bewegen, zu wachsen und am Leben zu bleiben", nl: "Om te bewegen, groeien en leven" },
                    { en: "Only for computers", es: "Solo para computadoras", de: "Nur für Computer", nl: "Alleen voor computers" },
                    { en: "Only for cars", es: "Solo para carros", de: "Nur für Autos", nl: "Alleen voor auto's" },
                    { en: "Only for lights", es: "Solo para luces", de: "Nur für Lichter", nl: "Alleen voor lampen" }
                ],
                correct: 0,
                explanation: {
                    en: "Energy is essential for all life processes including movement, growth, thinking, breathing, and maintaining body temperature.",
                    es: "La energía es esencial para todos los procesos vitales incluyendo movimiento, crecimiento, pensar, respirar y mantener la temperatura corporal.",
                    de: "Energie ist wesentlich für alle Lebensprozesse einschließlich Bewegung, Wachstum, Denken, Atmen und Aufrechterhaltung der Körpertemperatur.",
                    nl: "Energie is essentieel voor alle levensprocessen inclusief beweging, groei, denken, ademhalen en het handhaven van lichaamstemperatuur."
                }
            },
            {
                question: {
                    en: "Where does our body get energy from?",
                    es: "¿De dónde obtiene energía nuestro cuerpo?",
                    de: "Woher bekommt unser Körper Energie?",
                    nl: "Waar haalt ons lichaam energie vandaan?"
                },
                options: [
                    { en: "Food", es: "Comida", de: "Essen", nl: "Voedsel" },
                    { en: "Sunlight", es: "Luz solar", de: "Sonnenlicht", nl: "Zonlicht" },
                    { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
                    { en: "Air", es: "Aire", de: "Luft", nl: "Lucht" }
                ],
                correct: 0,
                explanation: {
                    en: "Our bodies convert the chemical energy stored in food into usable energy through digestion and cellular processes like metabolism.",
                    es: "Nuestros cuerpos convierten la energía química almacenada en la comida en energía utilizable a través de la digestión y procesos celulares como el metabolismo.",
                    de: "Unsere Körper wandeln die in Nahrung gespeicherte chemische Energie durch Verdauung und zelluläre Prozesse wie Stoffwechsel in nutzbare Energie um.",
                    nl: "Onze lichamen zetten de chemische energie opgeslagen in voedsel om in bruikbare energie door vertering en cellulaire processen zoals metabolisme."
                }
            },
            {
                question: {
                    en: "What is the biggest source of energy on Earth?",
                    es: "¿Cuál es la mayor fuente de energía en la Tierra?",
                    de: "Was ist die größte Energiequelle auf der Erde?",
                    nl: "Wat is de grootste energiebron op aarde?"
                },
                options: [
                    { en: "The Sun", es: "El Sol", de: "Die Sonne", nl: "De Zon" },
                    { en: "The Moon", es: "La Luna", de: "Der Mond", nl: "De Maan" },
                    { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" },
                    { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }
                ],
                correct: 0,
                explanation: {
                    en: "The Sun provides energy that powers weather, plant growth, fossil fuels, and almost all energy sources we use on Earth.",
                    es: "El Sol proporciona energía que impulsa el clima, el crecimiento de plantas, combustibles fósiles y casi todas las fuentes de energía que usamos en la Tierra.",
                    de: "Die Sonne liefert Energie, die Wetter, Pflanzenwachstum, fossile Brennstoffe und fast alle Energiequellen antreibt, die wir auf der Erde nutzen.",
                    nl: "De Zon levert energie die weer, plantengroei, fossiele brandstoffen en bijna alle energiebronnen die we op aarde gebruiken aandrijft."
                }
            },
            {
                question: {
                    en: "What type of energy does a moving car have?",
                    es: "¿Qué tipo de energía tiene un carro en movimiento?",
                    de: "Was für eine Art von Energie hat ein fahrendes Auto?",
                    nl: "Wat voor soort energie heeft een rijdende auto?"
                },
                options: [
                    { en: "Kinetic energy", es: "Energía cinética", de: "Kinetische Energie", nl: "Kinetische energie" },
                    { en: "Light energy", es: "Energía lumínica", de: "Lichtenergie", nl: "Lichtenergie" },
                    { en: "Sound energy", es: "Energía sonora", de: "Schallenergie", nl: "Geluidenergie" },
                    { en: "Heat energy", es: "Energía térmica", de: "Wärmeenergie", nl: "Warmte-energie" }
                ],
                correct: 0,
                explanation: {
                    en: "Kinetic energy is the energy of motion - any object that is moving has kinetic energy that depends on its mass and speed.",
                    es: "La energía cinética es la energía del movimiento - cualquier objeto que se mueve tiene energía cinética que depende de su masa y velocidad.",
                    de: "Kinetische Energie ist die Energie der Bewegung - jedes sich bewegende Objekt hat kinetische Energie, die von seiner Masse und Geschwindigkeit abhängt.",
                    nl: "Kinetische energie is de energie van beweging - elk voorwerp dat beweegt heeft kinetische energie die afhangt van zijn massa en snelheid."
                }
            },
            {
                question: {
                    en: "What type of energy does a ball have when it's sitting on a shelf?",
                    es: "¿Qué tipo de energía tiene una pelota cuando está en un estante?",
                    de: "Was für eine Art von Energie hat ein Ball, wenn er auf einem Regal liegt?",
                    nl: "Wat voor soort energie heeft een bal die op een plank ligt?"
                },
                options: [
                    { en: "Potential energy", es: "Energía potencial", de: "Potentielle Energie", nl: "Potentiële energie" },
                    { en: "Kinetic energy", es: "Energía cinética", de: "Kinetische Energie", nl: "Kinetische energie" },
                    { en: "Light energy", es: "Energía lumínica", de: "Lichtenergie", nl: "Lichtenergie" },
                    { en: "Sound energy", es: "Energía sonora", de: "Schallenergie", nl: "Geluidenergie" }
                ],
                correct: 0,
                explanation: {
                    en: "Potential energy is stored energy due to position or condition - the ball has gravitational potential energy because of its height above the ground.",
                    es: "La energía potencial es energía almacenada debido a la posición o condición - la pelota tiene energía potencial gravitacional debido a su altura sobre el suelo.",
                    de: "Potentielle Energie ist gespeicherte Energie aufgrund von Position oder Zustand - der Ball hat gravitationelle potentielle Energie wegen seiner Höhe über dem Boden.",
                    nl: "Potentiële energie is opgeslagen energie door positie of toestand - de bal heeft gravitationele potentiële energie vanwege zijn hoogte boven de grond."
                }
            },
            {
                question: {
                    en: "What happens when you rub your hands together quickly?",
                    es: "¿Qué pasa cuando frotas tus manos rápidamente?",
                    de: "Was passiert, wenn du deine Hände schnell aneinander reibst?",
                    nl: "Wat gebeurt er als je je handen snel tegen elkaar wrijft?"
                },
                options: [
                    { en: "They get warm", es: "Se calientan", de: "Sie werden warm", nl: "Ze worden warm" },
                    { en: "They get cold", es: "Se enfrían", de: "Sie werden kalt", nl: "Ze worden koud" },
                    { en: "They change color", es: "Cambian de color", de: "Sie ändern die Farbe", nl: "Ze veranderen van kleur" },
                    { en: "They get smaller", es: "Se vuelven más pequeñas", de: "Sie werden kleiner", nl: "Ze worden kleiner" }
                ],
                correct: 0,
                explanation: {
                    en: "Friction between your hands converts mechanical energy into thermal energy, generating heat that warms your skin.",
                    es: "La fricción entre tus manos convierte energía mecánica en energía térmica, generando calor que calienta tu piel.",
                    de: "Reibung zwischen deinen Händen wandelt mechanische Energie in thermische Energie um und erzeugt Wärme, die deine Haut erwärmt.",
                    nl: "Wrijving tussen je handen zet mechanische energie om in thermische energie, genereert warmte die je huid opwarmt."
                }
            },
            {
                question: {
                    en: "What can light travel through?",
                    es: "¿A través de qué puede viajar la luz?",
                    de: "Wodurch kann Licht reisen?",
                    nl: "Waardoor kan licht reizen?"
                },
                options: [
                    { en: "Air, water, and glass", es: "Aire, agua y vidrio", de: "Luft, Wasser und Glas", nl: "Lucht, water en glas" },
                    { en: "Only air", es: "Solo aire", de: "Nur Luft", nl: "Alleen lucht" },
                    { en: "Only water", es: "Solo agua", de: "Nur Wasser", nl: "Alleen water" },
                    { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" }
                ],
                correct: 0,
                explanation: {
                    en: "Light travels through transparent materials because their molecular structure allows light waves to pass through without being absorbed or scattered.",
                    es: "La luz viaja a través de materiales transparentes porque su estructura molecular permite que las ondas de luz pasen sin ser absorbidas o dispersadas.",
                    de: "Licht reist durch transparente Materialien, weil ihre molekulare Struktur es Lichtwellen ermöglicht, hindurchzugehen ohne absorbiert oder gestreut zu werden.",
                    nl: "Licht reist door transparante materialen omdat hun moleculaire structuur lichgolven toestaat erdoor te gaan zonder geabsorbeerd of verstrooid te worden."
                }
            },
            {
                question: {
                    en: "What can light NOT travel through?",
                    es: "¿A través de qué NO puede viajar la luz?",
                    de: "Wodurch kann Licht NICHT reisen?",
                    nl: "Waardoor kan licht NIET reizen?"
                },
                options: [
                    { en: "Solid walls", es: "Paredes sólidas", de: "Feste Wände", nl: "Dikke muren" },
                    { en: "Air", es: "Aire", de: "Luft", nl: "Lucht" },
                    { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
                    { en: "Glass", es: "Vidrio", de: "Glas", nl: "Glas" }
                ],
                correct: 0,
                explanation: {
                    en: "Opaque materials block light because their dense molecular structure absorbs or reflects light waves, preventing them from passing through.",
                    es: "Los materiales opacos bloquean la luz porque su estructura molecular densa absorbe o refleja las ondas de luz, evitando que pasen a través.",
                    de: "Undurchsichtige Materialien blockieren Licht, weil ihre dichte molekulare Struktur Lichtwellen absorbiert oder reflektiert und verhindert, dass sie hindurchgehen.",
                    nl: "Ondoorzichtige materialen blokkeren licht omdat hun dichte moleculaire structuur lichgolven absorbeert of weerkaatst, waardoor ze er niet doorheen kunnen."
                }
            },
            {
                question: {
                    en: "How fast does light travel?",
                    es: "¿Qué tan rápido viaja la luz?",
                    de: "Wie schnell reist Licht?",
                    nl: "Hoe snel reist licht?"
                },
                options: [
                    { en: "Very, very fast", es: "Muy, muy rápido", de: "Sehr, sehr schnell", nl: "Heel, heel snel" },
                    { en: "Slowly", es: "Lentamente", de: "Langsam", nl: "Langzaam" },
                    { en: "Same speed as sound", es: "Misma velocidad que el sonido", de: "Gleiche Geschwindigkeit wie Schall", nl: "Dezelfde snelheid als geluid" },
                    { en: "Same speed as cars", es: "Misma velocidad que los carros", de: "Gleiche Geschwindigkeit wie Autos", nl: "Dezelfde snelheid als auto's" }
                ],
                correct: 0,
                explanation: {
                    en: "Light travels at approximately 300,000 kilometers per second, making it the fastest thing in the universe that we know of.",
                    es: "La luz viaja a aproximadamente 300,000 kilómetros por segundo, haciéndola la cosa más rápida en el universo que conocemos.",
                    de: "Licht reist mit etwa 300.000 Kilometern pro Sekunde, was es zum schnellsten Ding im Universum macht, das wir kennen.",
                    nl: "Licht reist met ongeveer 300.000 kilometer per seconde, waardoor het het snelste ding in het universum is dat we kennen."
                }
            },
            {
                question: {
                    en: "What happens when light hits a mirror?",
                    es: "¿Qué pasa cuando la luz toca un espejo?",
                    de: "Was passiert, wenn Licht auf einen Spiegel trifft?",
                    nl: "Wat gebeurt er als licht een spiegel raakt?"
                },
                options: [
                    { en: "It bounces back", es: "Rebota", de: "Es prallt zurück", nl: "Het kaatst terug" },
                    { en: "It disappears", es: "Desaparece", de: "Es verschwindet", nl: "Het verdwijnt" },
                    { en: "It gets brighter", es: "Se vuelve más brillante", de: "Es wird heller", nl: "Het wordt helderder" },
                    { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" }
                ],
                correct: 0,
                explanation: {
                    en: "Mirrors have smooth, shiny surfaces that reflect light rays at predictable angles, allowing us to see our image clearly.",
                    es: "Los espejos tienen superficies lisas y brillantes que reflejan los rayos de luz en ángulos predecibles, permitiéndonos ver nuestra imagen claramente.",
                    de: "Spiegel haben glatte, glänzende Oberflächen, die Lichtstrahlen in vorhersagbaren Winkeln reflektieren und uns erlauben, unser Bild klar zu sehen.",
                    nl: "Spiegels hebben gladde, glanzende oppervlakken die lichtstralen onder voorspelbare hoeken weerkaatsen, waardoor we ons beeld duidelijk kunnen zien."
                }
            },
            {
                question: {
                    en: "What do we call the bending of light when it goes through water?",
                    es: "¿Cómo llamamos al doblado de la luz cuando pasa por el agua?",
                    de: "Wie nennen wir die Biegung des Lichts, wenn es durch Wasser geht?",
                    nl: "Hoe noemen we het buigen van licht als het door water gaat?"
                },
                options: [
                    { en: "Refraction", es: "Refracción", de: "Brechung", nl: "Breking" },
                    { en: "Reflection", es: "Reflexión", de: "Reflexion", nl: "Weerkaatsing" },
                    { en: "Absorption", es: "Absorción", de: "Absorption", nl: "Absorptie" },
                    { en: "Transmission", es: "Transmisión", de: "Übertragung", nl: "Doorlating" }
                ],
                correct: 0,
                explanation: {
                    en: "Refraction occurs because light slows down when it enters water, causing the light rays to bend and change direction.",
                    es: "La refracción ocurre porque la luz se ralentiza cuando entra al agua, causando que los rayos de luz se doblen y cambien de dirección.",
                    de: "Brechung tritt auf, weil Licht verlangsamt, wenn es in Wasser eintritt, wodurch sich die Lichtstrahlen biegen und die Richtung ändern.",
                    nl: "Breking treedt op omdat licht vertraagt wanneer het water binnengaat, waardoor lichtstralen buigen en van richting veranderen."
                }
            },
            {
                question: {
                    en: "What colors make up white light?",
                    es: "¿Qué colores componen la luz blanca?",
                    de: "Welche Farben bilden weißes Licht?",
                    nl: "Welke kleuren vormen wit licht?"
                },
                options: [
                    { en: "All colors of the rainbow", es: "Todos los colores del arcoíris", de: "Alle Farben des Regenbogens", nl: "Alle kleuren van de regenboog" },
                    { en: "Only red and blue", es: "Solo rojo y azul", de: "Nur Rot und Blau", nl: "Alleen rood en blauw" },
                    { en: "Only black and white", es: "Solo negro y blanco", de: "Nur Schwarz und Weiß", nl: "Alleen zwart en wit" },
                    { en: "Only yellow and green", es: "Solo amarillo y verde", de: "Nur Gelb und Grün", nl: "Alleen geel en groen" }
                ],
                correct: 0,
                explanation: {
                    en: "White light contains all visible colors mixed together - when separated, we can see red, orange, yellow, green, blue, indigo, and violet.",
                    es: "La luz blanca contiene todos los colores visibles mezclados - cuando se separan, podemos ver rojo, naranja, amarillo, verde, azul, índigo y violeta.",
                    de: "Weißes Licht enthält alle sichtbaren Farben gemischt - wenn getrennt, können wir Rot, Orange, Gelb, Grün, Blau, Indigo und Violett sehen.",
                    nl: "Wit licht bevat alle zichtbare kleuren gemengd - wanneer gescheiden, kunnen we rood, oranje, geel, groen, blauw, indigo en violet zien."
                }
            },
            {
                question: {
                    en: "When do we see a rainbow?",
                    es: "¿Cuándo vemos un arcoíris?",
                    de: "Wann sehen wir einen Regenbogen?",
                    nl: "Wanneer zien we een regenboog?"
                },
                options: [
                    { en: "When sunlight shines through water drops", es: "Cuando la luz del sol brilla a través de gotas de agua", de: "Wenn Sonnenlicht durch Wassertropfen scheint", nl: "Als zonlicht door waterdruppels schijnt" },
                    { en: "Only at night", es: "Solo de noche", de: "Nur nachts", nl: "Alleen 's nachts" },
                    { en: "Only in winter", es: "Solo en invierno", de: "Nur im Winter", nl: "Alleen in de winter" },
                    { en: "Only when it's hot", es: "Solo cuando hace calor", de: "Nur wenn es heiß ist", nl: "Alleen als het warm is" }
                ],
                correct: 0,
                explanation: {
                    en: "Rainbows form when sunlight is refracted and reflected inside water droplets, separating white light into its component colors.",
                    es: "Los arcoiris se forman cuando la luz solar se refracta y refleja dentro de gotas de agua, separando la luz blanca en sus colores componentes.",
                    de: "Regenbögen bilden sich, wenn Sonnenlicht in Wassertropfen gebrochen und reflektiert wird und weißes Licht in seine Komponentenfarben trennt.",
                    nl: "Regenbogen vormen wanneer zonlicht wordt gebroken en gereflecteerd in waterdruppels, waardoor wit licht wordt gescheiden in zijn componentkleuren."
                }
            },
            {
                question: {
                    en: "What makes sound?",
                    es: "¿Qué produce sonido?",
                    de: "Was macht Schall?",
                    nl: "Wat maakt geluid?"
                },
                options: [
                    { en: "Vibrations", es: "Vibraciones", de: "Schwingungen", nl: "Trillingen" },
                    { en: "Light", es: "Luz", de: "Licht", nl: "Licht" },
                    { en: "Heat", es: "Calor", de: "Hitze", nl: "Warmte" },
                    { en: "Cold", es: "Frío", de: "Kälte", nl: "Kou" }
                ],
                correct: 0,
                explanation: {
                    en: "Sound is created when objects vibrate rapidly, causing air molecules around them to move back and forth in waves.",
                    es: "El sonido se crea cuando los objetos vibran rápidamente, causando que las moléculas de aire alrededor se muevan hacia adelante y atrás en ondas.",
                    de: "Schall entsteht, wenn Objekte schnell vibrieren und dadurch Luftmoleküle um sie herum veranlassen, sich in Wellen hin und her zu bewegen.",
                    nl: "Geluid ontstaat wanneer voorwerpen snel trillen, waardoor luchtmoleculen om hen heen heen en weer bewegen in golven."
                }
            },
            {
                question: {
                    en: "How does sound travel from a drum to your ears?",
                    es: "¿Cómo viaja el sonido de un tambor a tus oídos?",
                    de: "Wie reist Schall von einer Trommel zu deinen Ohren?",
                    nl: "Hoe reist geluid van een trommel naar je oren?"
                },
                options: [
                    { en: "Through the air", es: "A través del aire", de: "Durch die Luft", nl: "Door de lucht" },
                    { en: "Through light", es: "A través de la luz", de: "Durch Licht", nl: "Door licht" },
                    { en: "Through electricity", es: "A través de electricidad", de: "Durch Elektrizität", nl: "Door elektriciteit" },
                    { en: "It doesn't travel", es: "No viaja", de: "Es reist nicht", nl: "Het reist niet" }
                ],
                correct: 0,
                explanation: {
                    en: "Sound waves travel through air by causing molecules to vibrate and bump into each other, carrying the energy from source to ear.",
                    es: "Las ondas sonoras viajan por el aire causando que las moléculas vibren y choquen entre sí, llevando la energía desde la fuente al oído.",
                    de: "Schallwellen reisen durch Luft, indem sie Moleküle zum Vibrieren bringen und aneinander stoßen lassen, wodurch Energie von der Quelle zum Ohr übertragen wird.",
                    nl: "Geluidsgolven reizen door lucht door moleculen te laten trillen en tegen elkaar te botsen, waardoor energie van bron naar oor wordt overgedragen."
                }
            },
            {
                question: {
                    en: "What travels faster, light or sound?",
                    es: "¿Qué viaja más rápido, la luz o el sonido?",
                    de: "Was reist schneller, Licht oder Schall?",
                    nl: "Wat reist sneller, licht of geluid?"
                },
                options: [
                    { en: "Light", es: "Luz", de: "Licht", nl: "Licht" },
                    { en: "Sound", es: "Sonido", de: "Schall", nl: "Geluid" },
                    { en: "They travel the same speed", es: "Viajan a la misma velocidad", de: "Sie reisen mit derselben Geschwindigkeit", nl: "Ze reizen even snel" },
                    { en: "Neither travels", es: "Ninguno viaja", de: "Beide reisen nicht", nl: "Geen van beide reist" }
                ],
                correct: 0,
                explanation: {
                    en: "Light travels much faster than sound - light is almost instantaneous while sound takes time to reach us.",
                    es: "La luz viaja mucho más rápido que el sonido - la luz es casi instantánea mientras el sonido toma tiempo en llegarnos.",
                    de: "Licht reist viel schneller als Schall - Licht ist fast augenblicklich, während Schall Zeit braucht, um uns zu erreichen.",
                    nl: "Licht reist veel sneller dan geluid - licht is bijna onmiddellijk terwijl geluid tijd nodig heeft om ons te bereiken."
                }
            },
            {
                question: {
                    en: "Why do you see lightning before you hear thunder?",
                    es: "¿Por qué ves el relámpago antes de oír el trueno?",
                    de: "Warum siehst du Blitze, bevor du Donner hörst?",
                    nl: "Waarom zie je bliksem voordat je donder hoort?"
                },
                options: [
                    { en: "Light travels faster than sound", es: "La luz viaja más rápido que el sonido", de: "Licht reist schneller als Schall", nl: "Licht reist sneller dan geluid" },
                    { en: "Sound travels faster than light", es: "El sonido viaja más rápido que la luz", de: "Schall reist schneller als Licht", nl: "Geluid reist sneller dan licht" },
                    { en: "Lightning comes first", es: "El relámpago viene primero", de: "Blitze kommen zuerst", nl: "Bliksem komt eerst" },
                    { en: "Thunder comes later", es: "El trueno viene después", de: "Donner kommt später", nl: "Donder komt later" }
                ],
                correct: 0,
                explanation: {
                    en: "Since light travels much faster than sound, the visual flash of lightning reaches our eyes long before the sound of thunder reaches our ears.",
                    es: "Como la luz viaja mucho más rápido que el sonido, el destello visual del relámpago llega a nuestros ojos mucho antes que el sonido del trueno llegue a nuestros oídos.",
                    de: "Da Licht viel schneller reist als Schall, erreicht der visuelle Blitz des Blitzes unsere Augen lange bevor der Schall des Donners unsere Ohren erreicht.",
                    nl: "Omdat licht veel sneller reist dan geluid, bereikt de visuele flits van bliksem onze ogen lang voordat het geluid van donder onze oren bereikt."
                }
            },
            {
                question: {
                    en: "What type of energy makes music from a guitar?",
                    es: "¿Qué tipo de energía hace música de una guitarra?",
                    de: "Was für eine Art von Energie macht Musik von einer Gitarre?",
                    nl: "Wat voor soort energie maakt muziek van een gitaar?"
                },
                options: [
                    { en: "Sound energy", es: "Energía sonora", de: "Schallenergie", nl: "Geluidenergie" },
                    { en: "Light energy", es: "Energía lumínica", de: "Lichtenergie", nl: "Lichtenergie" },
                    { en: "Heat energy", es: "Energía térmica", de: "Wärmeenergie", nl: "Warmte-energie" },
                    { en: "Electric energy", es: "Energía eléctrica", de: "Elektrische Energie", nl: "Elektrische energie" }
                ],
                correct: 0,
                explanation: {
                    en: "Guitar strings vibrate when plucked, creating sound energy that travels through air as waves to create the music we hear.",
                    es: "Las cuerdas de guitarra vibran cuando se puntean, creando energía sonora que viaja por el aire como ondas para crear la música que escuchamos.",
                    de: "Gitarrensaiten vibrieren beim Zupfen und erzeugen Schallenergie, die als Wellen durch die Luft reist, um die Musik zu erzeugen, die wir hören.",
                    nl: "Gitaarsnaren trillen wanneer getokeld, creëren geluidenergie die door lucht reist als golven om de muziek te maken die we horen."
                }
            },
            {
                question: {
                    en: "What happens to sound in space?",
                    es: "¿Qué pasa con el sonido en el espacio?",
                    de: "Was passiert mit Schall im Weltraum?",
                    nl: "Wat gebeurt er met geluid in de ruimte?"
                },
                options: [
                    { en: "There is no sound", es: "No hay sonido", de: "Es gibt keinen Schall", nl: "Er is geen geluid" },
                    { en: "Sound is louder", es: "El sonido es más fuerte", de: "Schall ist lauter", nl: "Geluid is luider" },
                    { en: "Sound is quieter", es: "El sonido es más silencioso", de: "Schall ist leiser", nl: "Geluid is zachter" },
                    { en: "Sound travels faster", es: "El sonido viaja más rápido", de: "Schall reist schneller", nl: "Geluid reist sneller" }
                ],
                correct: 0,
                explanation: {
                    en: "Space is a vacuum with no air molecules, so sound waves cannot travel because there's nothing to vibrate and carry the sound.",
                    es: "El espacio es un vacío sin moléculas de aire, así que las ondas sonoras no pueden viajar porque no hay nada que vibre y lleve el sonido.",
                    de: "Der Weltraum ist ein Vakuum ohne Luftmoleküle, so dass Schallwellen nicht reisen können, weil es nichts gibt, was vibrieren und den Schall tragen könnte.",
                    nl: "De ruimte is een vacuüm zonder luchtmoleculen, dus geluidsgolven kunnen niet reizen omdat er niets is om te trillen en het geluid te dragen."
                }
            },
            {
                question: {
                    en: "What makes things hot?",
                    es: "¿Qué hace que las cosas se calienten?",
                    de: "Was macht Dinge heiß?",
                    nl: "Wat maakt dingen heet?"
                },
                options: [
                    { en: "Heat energy", es: "Energía térmica", de: "Wärmeenergie", nl: "Warmte-energie" },
                    { en: "Sound energy", es: "Energía sonora", de: "Schallenergie", nl: "Geluidenergie" },
                    { en: "Light energy", es: "Energía lumínica", de: "Lichtenergie", nl: "Lichtenergie" },
                    { en: "Cold energy", es: "Energía fría", de: "Kalte Energie", nl: "Koude energie" }
                ],
                correct: 0,
                explanation: {
                    en: "Heat energy causes molecules to move faster and vibrate more, which we feel as increased temperature or warmth.",
                    es: "La energía térmica causa que las moléculas se muevan más rápido y vibren más, lo que sentimos como aumento de temperatura o calor.",
                    de: "Wärmeenergie veranlasst Moleküle, sich schneller zu bewegen und mehr zu vibrieren, was wir als erhöhte Temperatur oder Wärme empfinden.",
                    nl: "Warmte-energie zorgt ervoor dat moleculen sneller bewegen en meer trillen, wat we voelen als verhoogde temperatuur of warmte."
                }
            },
            {
                question: {
                    en: "How does heat travel from a fire to your hands?",
                    es: "¿Cómo viaja el calor de un fuego a tus manos?",
                    de: "Wie reist Wärme von einem Feuer zu deinen Händen?",
                    nl: "Hoe reist warmte van een vuur naar je handen?"
                },
                options: [
                    { en: "Through the air", es: "A través del aire", de: "Durch die Luft", nl: "Door de lucht" },
                    { en: "Through light only", es: "Solo a través de la luz", de: "Nur durch Licht", nl: "Alleen door licht" },
                    { en: "It doesn't travel", es: "No viaja", de: "Es reist nicht", nl: "Het reist niet" },
                    { en: "Through electricity", es: "A través de electricidad", de: "Durch Elektrizität", nl: "Door elektriciteit" }
                ],
                correct: 0,
                explanation: {
                    en: "Heat travels through radiation - infrared waves that carry thermal energy through air from the fire to your skin.",
                    es: "El calor viaja a través de radiación - ondas infrarrojas que llevan energía térmica a través del aire desde el fuego a tu piel.",
                    de: "Wärme reist durch Strahlung - Infrarotwellen, die thermische Energie durch Luft vom Feuer zu deiner Haut tragen.",
                    nl: "Warmte reist door straling - infraroodgolven die thermische energie door lucht van het vuur naar je huid dragen."
                }
            },
            {
                question: {
                    en: "What type of energy do batteries store?",
                    es: "¿Qué tipo de energía almacenan las baterías?",
                    de: "Was für eine Art von Energie speichern Batterien?",
                    nl: "Wat voor soort energie slaan batterijen op?"
                },
                options: [
                    { en: "Chemical energy", es: "Energía química", de: "Chemische Energie", nl: "Chemische energie" },
                    { en: "Light energy", es: "Energía lumínica", de: "Lichtenergie", nl: "Lichtenergie" },
                    { en: "Sound energy", es: "Energía sonora", de: "Schallenergie", nl: "Geluidenergie" },
                    { en: "Heat energy", es: "Energía térmica", de: "Wärmeenergie", nl: "Warmte-energie" }
                ],
                correct: 0,
                explanation: {
                    en: "Batteries store chemical energy in the form of chemical compounds that can release electrons to create electrical current.",
                    es: "Las baterías almacenan energía química en forma de compuestos químicos que pueden liberar electrones para crear corriente eléctrica.",
                    de: "Batterien speichern chemische Energie in Form von chemischen Verbindungen, die Elektronen freisetzen können, um elektrischen Strom zu erzeugen.",
                    nl: "Batterijen slaan chemische energie op in de vorm van chemische verbindingen die elektronen kunnen vrijgeven om elektrische stroom te creëren."
                }
            },
            {
                question: {
                    en: "What happens when you turn on a flashlight?",
                    es: "¿Qué pasa cuando enciendes una linterna?",
                    de: "Was passiert, wenn du eine Taschenlampe einschaltest?",
                    nl: "Wat gebeurt er als je een zaklamp aanzet?"
                },
                options: [
                    { en: "Chemical energy becomes light energy", es: "La energía química se convierte en energía lumínica", de: "Chemische Energie wird zu Lichtenergie", nl: "Chemische energie wordt lichtenergie" },
                    { en: "Light creates energy", es: "La luz crea energía", de: "Licht erzeugt Energie", nl: "Licht creëert energie" },
                    { en: "Sound becomes light", es: "El sonido se convierte en luz", de: "Schall wird zu Licht", nl: "Geluid wordt licht" },
                    { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
                ],
                correct: 0,
                explanation: {
                    en: "Chemical energy from the battery is converted to electrical energy, which then becomes light energy in the bulb or LED.",
                    es: "La energía química de la batería se convierte en energía eléctrica, que luego se convierte en energía lumineosa en la bombilla o LED.",
                    de: "Chemische Energie aus der Batterie wird in elektrische Energie umgewandelt, die dann in der Glühbirne oder LED zu Lichtenergie wird.",
                    nl: "Chemische energie van de batterij wordt omgezet in elektrische energie, die dan lichtenergie wordt in de gloeilamp of LED."
                }
            },
            {
                question: {
                    en: "Why can you see yourself in water?",
                    es: "¿Por qué puedes verte en el agua?",
                    de: "Warum kannst du dich im Wasser sehen?",
                    nl: "Waarom kun je jezelf in water zien?"
                },
                options: [
                    { en: "Water reflects light", es: "El agua refleja la luz", de: "Wasser reflektiert Licht", nl: "Water weerkaatst licht" },
                    { en: "Water makes light", es: "El agua hace luz", de: "Wasser macht Licht", nl: "Water maakt licht" },
                    { en: "Water absorbs light", es: "El agua absorbe la luz", de: "Wasser absorbiert Licht", nl: "Water absorbeert licht" },
                    { en: "Water breaks light", es: "El agua rompe la luz", de: "Wasser bricht Licht", nl: "Water breekt licht" }
                ],
                correct: 0,
                explanation: {
                    en: "Water's surface acts like a mirror, reflecting light rays from your body back to your eyes so you can see your reflection.",
                    es: "La superficie del agua actúa como un espejo, reflejando rayos de luz de tu cuerpo de vuelta a tus ojos para que puedas ver tu reflejo.",
                    de: "Die Wasseroberfläche wirkt wie ein Spiegel und reflektiert Lichtstrahlen von deinem Körper zurück zu deinen Augen, damit du dein Spiegelbild sehen kannst.",
                    nl: "Het wateroppervlak werkt als een spiegel, weerkaatst lichtstralen van je lichaam terug naar je ogen zodat je je reflectie kunt zien."
                }
            },
            {
                question: {
                    en: "What makes solar panels work?",
                    es: "¿Qué hace que funcionen los paneles solares?",
                    de: "Was lässt Solarpanels funktionieren?",
                    nl: "Wat zorgt ervoor dat zonnepanelen werken?"
                },
                options: [
                    { en: "Light energy from the sun", es: "Energía lumínica del sol", de: "Lichtenergie von der Sonne", nl: "Lichtenergie van de zon" },
                    { en: "Sound energy", es: "Energía sonora", de: "Schallenergie", nl: "Geluidenergie" },
                    { en: "Heat energy only", es: "Solo energía térmica", de: "Nur Wärmeenergie", nl: "Alleen warmte-energie" },
                    { en: "Wind energy", es: "Energía eólica", de: "Windenergie", nl: "Windenergie" }
                ],
                correct: 0,
                explanation: {
                    en: "Solar panels convert light energy from the sun directly into electrical energy using special materials called photovoltaic cells.",
                    es: "Los paneles solares convierten energía lumineosa del sol directamente en energía eléctrica usando materiales especiales llamados células fotovoltaicas.",
                    de: "Solarpanels wandeln Lichtenergie von der Sonne direkt in elektrische Energie um, indem sie spezielle Materialien namens Photovoltaikzellen verwenden.",
                    nl: "Zonnepanelen zetten lichtenergie van de zon direct om in elektrische energie met behulp van speciale materialen genaamd fotovoltaïsche cellen."
                }
            },
            {
                question: {
                    en: "What happens to the energy when you eat food?",
                    es: "¿Qué pasa con la energía cuando comes comida?",
                    de: "Was passiert mit der Energie, wenn du Essen isst?",
                    nl: "Wat gebeurt er met de energie als je voedsel eet?"
                },
                options: [
                    { en: "Your body uses it to move and grow", es: "Tu cuerpo la usa para moverse y crecer", de: "Dein Körper benutzt sie um sich zu bewegen und zu wachsen", nl: "Je lichaam gebruikt het om te bewegen en groeien" },
                    { en: "It disappears", es: "Desaparece", de: "Sie verschwindet", nl: "Het verdwijnt" },
                    { en: "It turns into light", es: "Se convierte en luz", de: "Sie wird zu Licht", nl: "Het wordt licht" },
                    { en: "It makes sound", es: "Hace sonido", de: "Es macht Schall", nl: "Het maakt geluid" }
                ],
                correct: 0,
                explanation: {
                    en: "Your digestive system breaks down food and converts its chemical energy into forms your body can use for all its functions and activities.",
                    es: "Tu sistema digestivo descompone la comida y convierte su energía química en formas que tu cuerpo puede usar para todas sus funciones y actividades.",
                    de: "Dein Verdauungssystem zerlegt Nahrung und wandelt ihre chemische Energie in Formen um, die dein Körper für alle seine Funktionen und Aktivitäten nutzen kann.",
                    nl: "Je spijsverteringssysteem breekt voedsel af en zet zijn chemische energie om in vormen die je lichaam kan gebruiken voor al zijn functies en activiteiten."
                }
            },
            {
                question: {
                    en: "Why do we need light to see?",
                    es: "¿Por qué necesitamos luz para ver?",
                    de: "Warum brauchen wir Licht zum Sehen?",
                    nl: "Waarom hebben we licht nodig om te zien?"
                },
                options: [
                    { en: "Light reflects off objects into our eyes", es: "La luz se refleja de los objetos hacia nuestros ojos", de: "Licht reflektiert von Objekten in unsere Augen", nl: "Licht weerkaatst van voorwerpen naar onze ogen" },
                    { en: "Our eyes make their own light", es: "Nuestros ojos hacen su propia luz", de: "Unsere Augen machen ihr eigenes Licht", nl: "Onze ogen maken hun eigen licht" },
                    { en: "Objects glow in the dark", es: "Los objetos brillan en la oscuridad", de: "Objekte leuchten im Dunkeln", nl: "Voorwerpen gloeien in het donker" },
                    { en: "We don't need light", es: "No necesitamos luz", de: "Wir brauchen kein Licht", nl: "We hebben geen licht nodig" }
                ],
                correct: 0,
                explanation: {
                    en: "We see objects when light bounces off them and enters our eyes - without light, there are no reflections for our eyes to detect.",
                    es: "Vemos objetos cuando la luz rebota en ellos y entra en nuestros ojos - sin luz, no hay reflejos para que nuestros ojos detecten.",
                    de: "Wir sehen Objekte, wenn Licht von ihnen abprallt und in unsere Augen gelangt - ohne Licht gibt es keine Reflexionen, die unsere Augen erkennen können.",
                    nl: "We zien voorwerpen wanneer licht van hen afkaatst en onze ogen binnenkomt - zonder licht zijn er geen reflecties voor onze ogen om te detecteren."
                }
            },
            {
                question: {
                    en: "What makes an echo?",
                    es: "¿Qué produce un eco?",
                    de: "Was macht ein Echo?",
                    nl: "Wat maakt een echo?"
                },
                options: [
                    { en: "Sound bouncing back from surfaces", es: "Sonido rebotando de superficies", de: "Schall prallt von Oberflächen zurück", nl: "Geluid dat terugkaatst van oppervlakken" },
                    { en: "Light bouncing back", es: "Luz rebotando", de: "Licht prallt zurück", nl: "Licht dat terugkaatst" },
                    { en: "Heat bouncing back", es: "Calor rebotando", de: "Wärme prallt zurück", nl: "Warmte die terugkaatst" },
                    { en: "Magic", es: "Magia", de: "Magie", nl: "Magie" }
                ],
                correct: 0,
                explanation: {
                    en: "Echoes occur when sound waves hit a hard surface and bounce back to your ears, creating a delayed repetition of the original sound.",
                    es: "Los ecos ocurren cuando las ondas sonoras golpean una superficie dura y rebotan de vuelta a tus oídos, creando una repetición retrasada del sonido original.",
                    de: "Echos entstehen, wenn Schallwellen auf eine harte Oberfläche treffen und zu deinen Ohren zurükprallen, wodurch eine verzögerte Wiederholung des ursprünglichen Schalls entsteht.",
                    nl: "Echo's ontstaan wanneer geluidsgolven een hard oppervlak raken en terugkaatsen naar je oren, waardoor een vertraagde herhaling van het oorspronkelijke geluid ontstaat."
                }
            },
            {
                question: {
                    en: "What type of energy does a wind turbine capture?",
                    es: "¿Qué tipo de energía captura una turbina eólica?",
                    de: "Was für eine Art von Energie fängt eine Windturbine ein?",
                    nl: "Wat voor soort energie vangt een windturbine op?"
                },
                options: [
                    { en: "Kinetic energy from moving air", es: "Energía cinética del aire en movimiento", de: "Kinetische Energie von bewegter Luft", nl: "Kinetische energie van bewegende lucht" },
                    { en: "Light energy", es: "Energía lumínica", de: "Lichtenergie", nl: "Lichtenergie" },
                    { en: "Sound energy", es: "Energía sonora", de: "Schallenergie", nl: "Geluidenergie" },
                    { en: "Heat energy", es: "Energía térmica", de: "Wärmeenergie", nl: "Warmte-energie" }
                ],
                correct: 0,
                explanation: {
                    en: "Wind turbines capture the kinetic energy of moving air and convert it into rotational motion, which then generates electrical energy.",
                    es: "Las turbinas eólicas capturan la energía cinética del aire en movimiento y la convierten en movimiento rotacional, que luego genera energía eléctrica.",
                    de: "Windturbinen erfassen die kinetische Energie bewegter Luft und wandeln sie in Rotationsbewegung um, die dann elektrische Energie erzeugt.",
                    nl: "Windturbines vangen de kinetische energie van bewegende lucht op en zetten het om in roterende beweging, wat vervolgens elektrische energie opwekt."
                }
            },
            {
                question: {
                    en: "What happens to light when it hits a black surface?",
                    es: "¿Qué pasa con la luz cuando toca una superficie negra?",
                    de: "Was passiert mit Licht, wenn es auf eine schwarze Oberfläche trifft?",
                    nl: "Wat gebeurt er met licht als het een zwart oppervlak raakt?"
                },
                options: [
                    { en: "Most of it is absorbed", es: "La mayoría es absorbida", de: "Das meiste wird absorbiert", nl: "Het meeste wordt geabsorbeerd" },
                    { en: "All of it reflects", es: "Todo se refleja", de: "Alles reflektiert", nl: "Alles weerkaatst" },
                    { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" },
                    { en: "It gets brighter", es: "Se vuelve más brillante", de: "Es wird heller", nl: "Het wordt helderder" }
                ],
                correct: 0,
                explanation: {
                    en: "Black surfaces absorb most light wavelengths, converting the light energy into heat energy rather than reflecting it back.",
                    es: "Las superficies negras absorben la mayoría de las longitudes de onda de luz, convirtiendo la energía lumínosa en energía térmica en lugar de reflejarla de vuelta.",
                    de: "Schwarze Oberflächen absorbieren die meisten Lichtwellenlängen und wandeln die Lichtenergie in Wärmeenergie um, anstatt sie zurückzureflektieren.",
                    nl: "Zwarte oppervlakken absorberen de meeste lichtgolflengtes, zetten de lichtenergie om in warmte-energie in plaats van het terug te weerkaatsen."
                }
            },
            {
                question: {
                    en: "What happens to light when it hits a white surface?",
                    es: "¿Qué pasa con la luz cuando toca una superficie blanca?",
                    de: "Was passiert mit Licht, wenn es auf eine weiße Oberfläche trifft?",
                    nl: "Wat gebeurt er met licht als het een wit oppervlak raakt?"
                },
                options: [
                    { en: "Most of it reflects", es: "La mayoría se refleja", de: "Das meiste reflektiert", nl: "Het meeste weerkaatst" },
                    { en: "All of it is absorbed", es: "Todo es absorbido", de: "Alles wird absorbiert", nl: "Alles wordt geabsorbeerd" },
                    { en: "It disappears", es: "Desaparece", de: "Es verschwindet", nl: "Het verdwijnt" },
                    { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" }
                ],
                correct: 0,
                explanation: {
                    en: "White surfaces reflect most light wavelengths back to our eyes, which is why they appear bright and don't heat up as much as dark surfaces.",
                    es: "Las superficies blancas reflejan la mayoría de las longitudes de onda de luz de vuelta a nuestros ojos, por eso aparecen brillantes y no se calientan tanto como las superficies oscuras.",
                    de: "Weiße Oberflächen reflektieren die meisten Lichtwellenlängen zurück zu unseren Augen, weshalb sie hell erscheinen und sich nicht so stark erhitzen wie dunkle Oberflächen.",
                    nl: "Witte oppervlakken weerkaatsen de meeste lichtgolflengtes terug naar onze ogen, daarom lijken ze helder en worden ze niet zo warm als donkere oppervlakken."
                }
            },
            {
                question: {
                    en: "Why do things look bigger under a magnifying glass?",
                    es: "¿Por qué las cosas se ven más grandes bajo una lupa?",
                    de: "Warum sehen Dinge unter einer Lupe größer aus?",
                    nl: "Waarom zien dingen er groter uit onder een vergrootglas?"
                },
                options: [
                    { en: "The glass bends light rays", es: "El vidrio dobla los rayos de luz", de: "Das Glas biegt Lichtstrahlen", nl: "Het glas buigt lichtstralen" },
                    { en: "The glass makes more light", es: "El vidrio hace más luz", de: "Das Glas macht mehr Licht", nl: "Het glas maakt meer licht" },
                    { en: "Things actually grow bigger", es: "Las cosas realmente crecen más", de: "Dinge werden wirklich größer", nl: "Dingen worden echt groter" },
                    { en: "Your eyes get stronger", es: "Tus ojos se vuelven más fuertes", de: "Deine Augen werden stärker", nl: "Je ogen worden sterker" }
                ],
                correct: 0,
                explanation: {
                    en: "Magnifying glasses are curved lenses that bend light rays to focus them, making objects appear larger than they actually are.",
                    es: "Las lupas son lentes curvados que doblan los rayos de luz para enfocarlos, haciendo que los objetos aparezcan más grandes de lo que realmente son.",
                    de: "Vergrößerungsgläser sind gewölbte Linsen, die Lichtstrahlen biegen, um sie zu fokussieren und Objekte größer erscheinen zu lassen, als sie tatsächlich sind.",
                    nl: "Vergrootglazen zijn gebogen lenzen die lichtstralen buigen om ze te focussen, waardoor voorwerpen groter lijken dan ze werkelijk zijn."
                }
            },
            {
                question: {
                    en: "What type of energy makes a campfire bright?",
                    es: "¿Qué tipo de energía hace brillante una fogata?",
                    de: "Was für eine Art von Energie macht ein Lagerfeuer hell?",
                    nl: "Wat voor soort energie maakt een kampvuur helder?"
                },
                options: [
                    { en: "Chemical energy turning into light and heat", es: "Energía química convirtiéndose en luz y calor", de: "Chemische Energie wird zu Licht und Wärme", nl: "Chemische energie wordt licht en warmte" },
                    { en: "Electric energy", es: "Energía eléctrica", de: "Elektrische Energie", nl: "Elektrische energie" },
                    { en: "Sound energy", es: "Energía sonora", de: "Schallenergie", nl: "Geluidenergie" },
                    { en: "Wind energy", es: "Energía eólica", de: "Windenergie", nl: "Windenergie" }
                ],
                correct: 0,
                explanation: {
                    en: "Chemical energy in wood is released through combustion, creating both light energy (flame) and heat energy (warmth) simultaneously.",
                    es: "La energía química en la madera se libera a través de la combustión, creando tanto energía lumineosa (llama) como energía térmica (calor) simultáneamente.",
                    de: "Chemische Energie im Holz wird durch Verbrennung freigesetzt und erzeugt gleichzeitig sowohl Lichtenergie (Flamme) als auch Wärmeenergie (Wärme).",
                    nl: "Chemische energie in hout wordt vrijgegeven door verbranding, creëert tegelijkertijd zowel lichtenergie (vlam) als warmte-energie (warmte)."
                }
            },
            {
                question: {
                    en: "How do our eyes detect light?",
                    es: "¿Cómo detectan nuestros ojos la luz?",
                    de: "Wie erkennen unsere Augen Licht?",
                    nl: "Hoe detecteren onze ogen licht?"
                },
                options: [
                    { en: "Special cells in the eye", es: "Células especiales en el ojo", de: "Spezielle Zellen im Auge", nl: "Speciale cellen in het oog" },
                    { en: "The eye makes its own light", es: "El ojo hace su propia luz", de: "Das Auge macht sein eigenes Licht", nl: "Het oog maakt zijn eigen licht" },
                    { en: "Light sticks to the eye", es: "La luz se pega al ojo", de: "Licht klebt am Auge", nl: "Licht plakt aan het oog" },
                    { en: "Eyes glow in the dark", es: "Los ojos brillan en la oscuridad", de: "Augen leuchten im Dunkeln", nl: "Ogen gloeien in het donker" }
                ],
                correct: 0,
                explanation: {
                    en: "Our eyes contain light-sensitive cells called rods and cones that detect light and convert it into electrical signals sent to the brain.",
                    es: "Nuestros ojos contienen células sensibles a la luz llamadas bastones y conos que detectan la luz y la convierten en señales eléctricas enviadas al cerebro.",
                    de: "Unsere Augen enthalten lichtempfindliche Zellen namens Stäbchen und Zapfen, die Licht erkennen und in elektrische Signale umwandeln, die an das Gehirn gesendet werden.",
                    nl: "Onze ogen bevatten lichtgevoelige cellen genaamd staafjes en kegeltjes die licht detecteren en omzetten in elektrische signalen die naar de hersenen worden gestuurd."
                }
            },
            {
                question: {
                    en: "What makes a prism split white light into colors?",
                    es: "¿Qué hace que un prisma divida la luz blanca en colores?",
                    de: "Was lässt ein Prisma weißes Licht in Farben aufteilen?",
                    nl: "Wat zorgt ervoor dat een prisma wit licht in kleuren splitst?"
                },
                options: [
                    { en: "Different colors bend differently", es: "Diferentes colores se doblan diferente", de: "Verschiedene Farben biegen sich unterschiedlich", nl: "Verschillende kleuren buigen anders" },
                    { en: "The prism adds colors", es: "El prisma añade colores", de: "Das Prisma fügt Farben hinzu", nl: "Het prisma voegt kleuren toe" },
                    { en: "Light creates new colors", es: "La luz crea nuevos colores", de: "Licht erzeugt neue Farben", nl: "Licht creëert nieuwe kleuren" },
                    { en: "Magic happens", es: "Ocurre magia", de: "Magie passiert", nl: "Er gebeurt magie" }
                ],
                correct: 0,
                explanation: {
                    en: "Prisms bend different colors of light by different amounts because each color has a different wavelength and travels at different speeds through glass.",
                    es: "Los prismas doblan diferentes colores de luz en diferentes cantidades porque cada color tiene una longitud de onda diferente y viaja a diferentes velocidades a través del vidrio.",
                    de: "Prismen biegen verschiedene Lichtfarben um verschiedene Beträge, weil jede Farbe eine andere Wellenlänge hat und mit verschiedenen Geschwindigkeiten durch Glas reist.",
                    nl: "Prisma's buigen verschillende kleuren licht met verschillende hoeveelheden omdat elke kleur een andere golflengte heeft en met verschillende snelheden door glas reist."
                }
            },
            {
                question: {
                    en: "What do we call materials that let light through?",
                    es: "¿Cómo llamamos a los materiales que dejan pasar la luz?",
                    de: "Wie nennen wir Materialien, die Licht durchlassen?",
                    nl: "Hoe noemen we materialen die licht doorlaten?"
                },
                options: [
                    { en: "Transparent", es: "Transparente", de: "Durchsichtig", nl: "Transparant" },
                    { en: "Opaque", es: "Opaco", de: "Undurchsichtig", nl: "Ondoorzichtig" },
                    { en: "Solid", es: "Sólido", de: "Fest", nl: "Vast" },
                    { en: "Heavy", es: "Pesado", de: "Schwer", nl: "Zwaar" }
                ],
                correct: 0,
                explanation: {
                    en: "Transparent materials have molecular structures that allow light waves to pass through with minimal absorption or scattering.",
                    es: "Los materiales transparentes tienen estructuras moleculares que permiten que las ondas de luz pasen a través con mínima absorción o dispersión.",
                    de: "Transparente Materialien haben molekulare Strukturen, die es Lichtwellen ermöglichen, mit minimaler Absorption oder Streuung hindurchzugehen.",
                    nl: "Transparante materialen hebben moleculaire structuren die lichgolven toestaan erdoor te gaan met minimale absorptie of verstrooiing."
                }
            },
            {
                question: {
                    en: "What do we call materials that don't let light through?",
                    es: "¿Cómo llamamos a los materiales que no dejan pasar la luz?",
                    de: "Wie nennen wir Materialien, die kein Licht durchlassen?",
                    nl: "Hoe noemen we materialen die geen licht doorlaten?"
                },
                options: [
                    { en: "Opaque", es: "Opaco", de: "Undurchsichtig", nl: "Ondoorzichtig" },
                    { en: "Transparent", es: "Transparente", de: "Durchsichtig", nl: "Transparant" },
                    { en: "Light", es: "Ligero", de: "Leicht", nl: "Licht" },
                    { en: "Soft", es: "Suave", de: "Weich", nl: "Zacht" }
                ],
                correct: 0,
                explanation: {
                    en: "Opaque materials have dense molecular structures that absorb or reflect light waves, preventing them from passing through to the other side.",
                    es: "Los materiales opacos tienen estructuras moleculares densas que absorben o reflejan ondas de luz, evitando que pasen al otro lado.",
                    de: "Undurchsichtige Materialien haben dichte molekulare Strukturen, die Lichtwellen absorbieren oder reflektieren und verhindern, dass sie zur anderen Seite durchgehen.",
                    nl: "Ondoorzichtige materialen hebben dichte moleculaire structuren die lichgolven absorberen of weerkaatsen, waardoor ze er niet doorheen naar de andere kant kunnen."
                }
            },
            {
                question: {
                    en: "How do we hear sounds that are far away?",
                    es: "¿Cómo oímos sonidos que están lejos?",
                    de: "Wie hören wir Geräusche, die weit weg sind?",
                    nl: "Hoe horen we geluiden die ver weg zijn?"
                },
                options: [
                    { en: "Sound waves travel through the air to us", es: "Las ondas sonoras viajan por el aire hacia nosotros", de: "Schallwellen reisen durch die Luft zu uns", nl: "Geluidsgolven reizen door de lucht naar ons" },
                    { en: "Our ears get bigger", es: "Nuestros oídos se vuelven más grandes", de: "Unsere Ohren werden größer", nl: "Onze oren worden groter" },
                    { en: "We move closer", es: "Nos acercamos", de: "Wir bewegen uns näher", nl: "We bewegen dichterij" },
                    { en: "The sounds get louder by themselves", es: "Los sonidos se vuelven más fuertes por sí solos", de: "Die Geräusche werden von selbst lauter", nl: "De geluiden worden vanzelf luider" }
                ],
                correct: 0,
                explanation: {
                    en: "Sound waves travel through air molecules, carrying energy from the distant source to our ears, though they become weaker over distance.",
                    es: "Las ondas sonoras viajan a través de moléculas de aire, llevando energía desde la fuente distante a nuestros oídos, aunque se debilitan con la distancia.",
                    de: "Schallwellen reisen durch Luftmoleküle und tragen Energie von der entfernten Quelle zu unseren Ohren, obwohl sie über die Entfernung schwächer werden.",
                    nl: "Geluidsgolven reizen door luchtmoleculen, dragen energie van de verre bron naar onze oren, hoewel ze zwakker worden over afstand."
                }
            },
            {
                question: {
                    en: "What happens when different types of energy change into each other?",
                    es: "¿Qué pasa cuando diferentes tipos de energía se convierten entre sí?",
                    de: "Was passiert, wenn verschiedene Energiearten sich ineinander verwandeln?",
                    nl: "Wat gebeurt er als verschillende soorten energie in elkaar veranderen?"
                },
                options: [
                    { en: "Energy is conserved, never created or destroyed", es: "La energía se conserva, nunca se crea o destruye", de: "Energie wird erhalten, nie geschaffen oder zerstört", nl: "Energie wordt bewaard, nooit gecreëerd of vernietigd" },
                    { en: "Energy disappears", es: "La energía desaparece", de: "Energie verschwindet", nl: "Energie verdwijnt" },
                    { en: "More energy is created", es: "Se crea más energía", de: "Mehr Energie wird erzeugt", nl: "Meer energie wordt gecreëeerd" },
                    { en: "Energy changes color", es: "La energía cambia de color", de: "Energie ändert die Farbe", nl: "Energie verandert van kleur" }
                ],
                correct: 0,
                explanation: {
                    en: "Energy conservation means energy can change forms but the total amount remains constant - energy is never created or destroyed, only transformed.",
                    es: "La conservación de energía significa que la energía puede cambiar de forma pero la cantidad total permanece constante - la energía nunca se crea o destruye, solo se transforma.",
                    de: "Energieerhaltung bedeutet, dass Energie die Form wechseln kann, aber die Gesamtmenge konstant bleibt - Energie wird nie geschaffen oder zerstört, nur umgewandelt.",
                    nl: "Energiebehoud betekent dat energie van vorm kan veranderen maar de totale hoeveelheid constant blijft - energie wordt nooit gecreëerd of vernietigd, alleen getransformeerd."
                }
            },
            {
                question: {
                    en: "Why is energy important for life on Earth?",
                    es: "¿Por qué es importante la energía para la vida en la Tierra?",
                    de: "Warum ist Energie wichtig für das Leben auf der Erde?",
                    nl: "Waarom is energie belangrijk voor het leven op aarde?"
                },
                options: [
                    { en: "Everything that lives needs energy to function", es: "Todo lo que vive necesita energía para funcionar", de: "Alles was lebt braucht Energie um zu funktionieren", nl: "Alles wat leeft heeft energie nodig om te functioneren" },
                    { en: "Energy makes things look pretty", es: "La energía hace que las cosas se vean bonitas", de: "Energie lässt Dinge hübsch aussehen", nl: "Energie laat dingen er mooi uitzien" },
                    { en: "Energy is only for machines", es: "La energía es solo para máquinas", de: "Energie ist nur für Maschinen", nl: "Energie is alleen voor machines" },
                    { en: "We don't really need energy", es: "Realmente no necesitamos energía", de: "Wir brauchen wirklich keine Energie", nl: "We hebben niet echt energie nodig" }
                ],
                correct: 0,
                explanation: {
                    en: "Energy drives all biological processes - from photosynthesis in plants to cellular metabolism in animals - making it the foundation of all life on Earth.",
                    es: "La energía impulsa todos los procesos biológicos - desde la fotosíntesis en plantas hasta el metabolismo celular en animales - haciéndola la base de toda la vida en la Tierra.",
                    de: "Energie treibt alle biologischen Prozesse an - von der Photosynthese in Pflanzen bis zum zellulären Stoffwechsel in Tieren - und macht sie zur Grundlage allen Lebens auf der Erde.",
                    nl: "Energie drijft alle biologische processen aan - van fotosynthese in planten tot cellulair metabolisme in dieren - waardoor het de basis is van al het leven op aarde."
                }
            },
            {
                question: {
                    en: "What is wavelength?",
                    es: "¿Qué es la longitud de onda?",
                    de: "Was ist Wellenlänge?",
                    nl: "Wat is golflengte?"
                },
                options: [
                    { en: "The distance between two wave peaks", es: "La distancia entre dos picos de onda", de: "Der Abstand zwischen zwei Wellenbergen", nl: "De afstand tussen twee golftoppen" },
                    { en: "How loud a wave is", es: "Qué tan fuerte es una onda", de: "Wie laut eine Welle ist", nl: "Hoe luid een golf is" },
                    { en: "How fast a wave moves", es: "Qué tan rápido se mueve una onda", de: "Wie schnell eine Welle sich bewegt", nl: "Hoe snel een golf beweegt" },
                    { en: "The height of a wave", es: "La altura de una onda", de: "Die Höhe einer Welle", nl: "De hoogte van een golf" }
                ],
                correct: 0,
                explanation: {
                    en: "Wavelength is the distance from one peak of a wave to the next peak, determining the wave's color in light or pitch in sound.",
                    es: "La longitud de onda es la distancia desde un pico de onda hasta el siguiente pico, determinando el color de la onda en luz o el tono en sonido.",
                    de: "Wellenlänge ist der Abstand von einem Wellenberg zum nächsten Berg und bestimmt die Farbe der Welle im Licht oder die Tonhöhe im Schall.",
                    nl: "Golflengte is de afstand van een golftop naar de volgende top, bepaalt de kleur van de golf in licht of toonhoogte in geluid."
                }
            },
            {
                question: {
                    en: "What is amplitude in waves?",
                    es: "¿Qué es la amplitud en las ondas?",
                    de: "Was ist Amplitude bei Wellen?",
                    nl: "Wat is amplitude in golven?"
                },
                options: [
                    { en: "The height of the wave from center to peak", es: "La altura de la onda desde el centro hasta el pico", de: "Die Höhe der Welle von der Mitte zum Gipfel", nl: "De hoogte van de golf van midden naar top" },
                    { en: "The speed of the wave", es: "La velocidad de la onda", de: "Die Geschwindigkeit der Welle", nl: "De snelheid van de golf" },
                    { en: "The color of the wave", es: "El color de la onda", de: "Die Farbe der Welle", nl: "De kleur van de golf" },
                    { en: "The length of the wave", es: "La longitud de la onda", de: "Die Länge der Welle", nl: "De lengte van de golf" }
                ],
                correct: 0,
                explanation: {
                    en: "Amplitude determines the intensity of a wave - in light it affects brightness, in sound it determines volume or loudness.",
                    es: "La amplitud determina la intensidad de una onda - en luz afecta el brillo, en sonido determina el volumen o intensidad.",
                    de: "Amplitude bestimmt die Intensität einer Welle - bei Licht beeinflusst sie die Helligkeit, bei Schall bestimmt sie die Lautstärke.",
                    nl: "Amplitude bepaalt de intensiteit van een golf - in licht beïnvloedt het helderheid, in geluid bepaalt het volume of luidheid."
                }
            },
            {
                question: {
                    en: "What is frequency in waves?",
                    es: "¿Qué es la frecuencia en las ondas?",
                    de: "Was ist Frequenz bei Wellen?",
                    nl: "Wat is frequentie in golven?"
                },
                options: [
                    { en: "How many waves pass a point per second", es: "Cuántas ondas pasan por un punto por segundo", de: "Wie viele Wellen pro Sekunde einen Punkt passieren", nl: "Hoeveel golven per seconde een punt passeren" },
                    { en: "How tall the waves are", es: "Qué tan altas son las ondas", de: "Wie hoch die Wellen sind", nl: "Hoe hoog de golven zijn" },
                    { en: "The distance between waves", es: "La distancia entre ondas", de: "Der Abstand zwischen Wellen", nl: "De afstand tussen golven" },
                    { en: "The color of the waves", es: "El color de las ondas", de: "Die Farbe der Wellen", nl: "De kleur van de golven" }
                ],
                correct: 0,
                explanation: {
                    en: "Frequency is the number of wave cycles that pass a point in one second, measured in hertz (Hz) and determines pitch in sound or color in light.",
                    es: "La frecuencia es el número de ciclos de onda que pasan por un punto en un segundo, se mide en hertz (Hz) y determina el tono en sonido o color en luz.",
                    de: "Frequenz ist die Anzahl der Wellenzyklen, die einen Punkt in einer Sekunde passieren, gemessen in Hertz (Hz) und bestimmt die Tonhöhe im Schall oder Farbe im Licht.",
                    nl: "Frequentie is het aantal golfcycli dat een punt in een seconde passeert, gemeten in hertz (Hz) en bepaalt toonhoogte in geluid of kleur in licht."
                }
            },
            {
                question: {
                    en: "What happens when light waves interfere with each other?",
                    es: "¿Qué pasa cuando las ondas de luz interfieren entre sí?",
                    de: "Was passiert, wenn Lichtwellen miteinander interferieren?",
                    nl: "Wat gebeurt er als lichtgolven met elkaar interfereren?"
                },
                options: [
                    { en: "They can make bright and dark patterns", es: "Pueden hacer patrones brillantes y oscuros", de: "Sie können helle und dunkle Muster erzeugen", nl: "Ze kunnen heldere en donkere patronen maken" },
                    { en: "They always cancel each other out", es: "Siempre se cancelan mutuamente", de: "Sie heben sich immer gegenseitig auf", nl: "Ze heffen elkaar altijd op" },
                    { en: "They change color permanently", es: "Cambian de color permanentemente", de: "Sie ändern permanent die Farbe", nl: "Ze veranderen permanent van kleur" },
                    { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
                ],
                correct: 0,
                explanation: {
                    en: "Wave interference occurs when light waves meet - they can add together (constructive) to make bright spots or subtract (destructive) to make dark spots.",
                    es: "La interferencia de ondas ocurre cuando las ondas de luz se encuentran - pueden sumarse (constructiva) para hacer puntos brillantes o restarse (destructiva) para hacer puntos oscuros.",
                    de: "Welleninterferenz tritt auf, wenn Lichtwellen aufeinandertreffen - sie können sich addieren (konstruktiv) für helle Stellen oder subtrahieren (destruktiv) für dunkle Stellen.",
                    nl: "Golfinterferentie treedt op wanneer lichtgolven elkaar ontmoeten - ze kunnen optellen (constructief) voor heldere plekken of aftrekken (destructief) voor donkere plekken."
                }
            },
            {
                question: {
                    en: "What is the electromagnetic spectrum?",
                    es: "¿Qué es el espectro electromagnético?",
                    de: "Was ist das elektromagnetische Spektrum?",
                    nl: "Wat is het elektromagnetische spectrum?"
                },
                options: [
                    { en: "All types of light waves from radio to gamma rays", es: "Todos los tipos de ondas de luz desde radio hasta rayos gamma", de: "Alle Arten von Lichtwellen von Radio bis Gammastrahlen", nl: "Alle soorten lichtgolven van radio tot gammastralen" },
                    { en: "Only visible light colors", es: "Solo colores de luz visible", de: "Nur sichtbare Lichtfarben", nl: "Alleen zichtbare lichtkleuren" },
                    { en: "Sound waves only", es: "Solo ondas sonoras", de: "Nur Schallwellen", nl: "Alleen geluidsgolven" },
                    { en: "Heat waves only", es: "Solo ondas de calor", de: "Nur Wärmewellen", nl: "Alleen warmtegolven" }
                ],
                correct: 0,
                explanation: {
                    en: "The electromagnetic spectrum includes all forms of electromagnetic radiation: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays.",
                    es: "El espectro electromagnético incluye todas las formas de radiación electromagnética: ondas de radio, microondas, infrarrojo, luz visible, ultravioleta, rayos X y rayos gamma.",
                    de: "Das elektromagnetische Spektrum umfasst alle Formen elektromagnetischer Strahlung: Radiowellen, Mikrowellen, Infrarot, sichtbares Licht, Ultraviolett, Röntgenstrahlen und Gammastrahlen.",
                    nl: "Het elektromagnetische spectrum omvat alle vormen van elektromagnetische straling: radiogolven, microgolven, infrarood, zichtbaar licht, ultraviolet, röntgenstralen en gammastralen."
                }
            },
            {
                question: {
                    en: "What makes some sounds high-pitched and others low-pitched?",
                    es: "¿Qué hace que algunos sonidos sean agudos y otros graves?",
                    de: "Was macht manche Geräusche hoch und andere tief?",
                    nl: "Wat maakt sommige geluiden hoog en andere laag?"
                },
                options: [
                    { en: "The frequency of sound waves", es: "La frecuencia de las ondas sonoras", de: "Die Frequenz der Schallwellen", nl: "De frequentie van geluidsgolven" },
                    { en: "How loud the sound is", es: "Qué tan fuerte es el sonido", de: "Wie laut das Geräusch ist", nl: "Hoe luid het geluid is" },
                    { en: "The color of the sound", es: "El color del sonido", de: "Die Farbe des Geräusches", nl: "De kleur van het geluid" },
                    { en: "The temperature of the air", es: "La temperatura del aire", de: "Die Temperatur der Luft", nl: "De temperatuur van de lucht" }
                ],
                correct: 0,
                explanation: {
                    en: "Pitch depends on frequency - high-pitched sounds have high frequency (many vibrations per second) while low-pitched sounds have low frequency (few vibrations per second).",
                    es: "El tono depende de la frecuencia - sonidos agudos tienen alta frecuencia (muchas vibraciones por segundo) mientras sonidos graves tienen baja frecuencia (pocas vibraciones por segundo).",
                    de: "Die Tonhöhe hängt von der Frequenz ab - hohe Töne haben hohe Frequenz (viele Schwingungen pro Sekunde), während tiefe Töne niedrige Frequenz haben (wenige Schwingungen pro Sekunde).",
                    nl: "Toonhoogte hangt af van frequentie - hoge tonen hebben hoge frequentie (veel trillingen per seconde) terwijl lage tonen lage frequentie hebben (weinig trillingen per seconde)."
                }
            },
            {
                question: {
                    en: "What is resonance?",
                    es: "¿Qué es la resonancia?",
                    de: "Was ist Resonanz?",
                    nl: "Wat is resonantie?"
                },
                options: [
                    { en: "When objects vibrate at their natural frequency", es: "Cuando los objetos vibran a su frecuencia natural", de: "Wenn Objekte mit ihrer natürlichen Frequenz schwingen", nl: "Wanneer voorwerpen trillen op hun natuurlijke frequentie" },
                    { en: "When sounds get quieter", es: "Cuando los sonidos se vuelven más silenciosos", de: "Wenn Geräusche leiser werden", nl: "Wanneer geluiden zachter worden" },
                    { en: "When light changes color", es: "Cuando la luz cambia de color", de: "Wenn Licht die Farbe ändert", nl: "Wanneer licht van kleur verandert" },
                    { en: "When energy disappears", es: "Cuando la energía desaparece", de: "Wenn Energie verschwindet", nl: "Wanneer energie verdwijnt" }
                ],
                correct: 0,
                explanation: {
                    en: "Resonance occurs when an external force matches an object's natural vibrating frequency, causing it to vibrate with maximum amplitude.",
                    es: "La resonancia ocurre cuando una fuerza externa coincide con la frecuencia natural de vibración de un objeto, causando que vibre con amplitud máxima.",
                    de: "Resonanz tritt auf, wenn eine äußere Kraft mit der natürlichen Schwingungsfrequenz eines Objekts übereinstimmt und es mit maximaler Amplitude schwingen lässt.",
                    nl: "Resonantie treedt op wanneer een externe kracht overeenkomt met de natuurlijke trillingsfrequentie van een voorwerp, waardoor het trilt met maximale amplitude."
                }
            },
            {
                question: {
                    en: "What is the Doppler effect?",
                    es: "¿Qué es el efecto Doppler?",
                    de: "Was ist der Doppler-Effekt?",
                    nl: "Wat is het Doppler-effect?"
                },
                options: [
                    { en: "Sound pitch changes when the source moves", es: "El tono del sonido cambia cuando la fuente se mueve", de: "Die Tonhöhe ändert sich wenn sich die Quelle bewegt", nl: "Geluidstoon verandert wanneer de bron beweegt" },
                    { en: "Sounds get louder over time", es: "Los sonidos se vuelven más fuertes con el tiempo", de: "Geräusche werden mit der Zeit lauter", nl: "Geluiden worden luider over tijd" },
                    { en: "Light always travels in circles", es: "La luz siempre viaja en círculos", de: "Licht reist immer in Kreisen", nl: "Licht reist altijd in cirkels" },
                    { en: "Colors change randomly", es: "Los colores cambian aleatoriamente", de: "Farben ändern sich zufällig", nl: "Kleuren veranderen willekeurig" }
                ],
                correct: 0,
                explanation: {
                    en: "The Doppler effect causes sound to be higher-pitched when approaching and lower-pitched when moving away, like an ambulance siren passing by.",
                    es: "El efecto Doppler causa que el sonido sea más agudo cuando se acerca y más grave cuando se aleja, como una sirena de ambulancia pasando.",
                    de: "Der Doppler-Effekt bewirkt, dass Schall höher wird wenn er sich nähert und tiefer wenn er sich entfernt, wie eine Krankenwagensirene die vorbeifährt.",
                    nl: "Het Doppler-effect zorgt ervoor dat geluid hoger wordt bij nadering en lager bij wegbewegen, zoals een ambulancesirene die voorbijgaat."
                }
            },
            {
                question: {
                    en: "What is polarization in light?",
                    es: "¿Qué es la polarización en la luz?",
                    de: "Was ist Polarisation im Licht?",
                    nl: "Wat is polarisatie in licht?"
                },
                options: [
                    { en: "Light waves vibrating in one direction only", es: "Ondas de luz vibrando solo en una dirección", de: "Lichtwellen schwingen nur in eine Richtung", nl: "Lichtgolven trillen slechts in één richting" },
                    { en: "Light waves getting brighter", es: "Ondas de luz volviéndose más brillantes", de: "Lichtwellen werden heller", nl: "Lichtgolven worden helderder" },
                    { en: "Light waves changing color", es: "Ondas de luz cambiando de color", de: "Lichtwellen ändern die Farbe", nl: "Lichtgolven veranderen van kleur" },
                    { en: "Light waves moving faster", es: "Ondas de luz moviéndose más rápido", de: "Lichtwellen bewegen sich schneller", nl: "Lichtgolven bewegen sneller" }
                ],
                correct: 0,
                explanation: {
                    en: "Polarized light has waves that vibrate in only one plane, unlike normal light which vibrates in all directions - this is how polarized sunglasses work.",
                    es: "La luz polarizada tiene ondas que vibran solo en un plano, a diferencia de la luz normal que vibra en todas las direcciones - así es como funcionan los lentes de sol polarizados.",
                    de: "Polarisiertes Licht hat Wellen, die nur in einer Ebene schwingen, im Gegensatz zu normalem Licht, das in alle Richtungen schwingt - so funktionieren polarisierte Sonnenbrillen.",
                    nl: "Gepolariseerd licht heeft golven die slechts in één vlak trillen, in tegenstelling tot normaal licht dat in alle richtingen trilt - zo werken gepolariseerde zonnebrillen."
                }
            },
            {
                question: {
                    en: "What makes laser light different from regular light?",
                    es: "¿Qué hace diferente la luz láser de la luz regular?",
                    de: "Was macht Laserlicht anders als reguläres Licht?",
                    nl: "Wat maakt laserlicht anders dan gewoon licht?"
                },
                options: [
                    { en: "All the light waves are synchronized and focused", es: "Todas las ondas de luz están sincronizadas y enfocadas", de: "Alle Lichtwellen sind synchronisiert und fokussiert", nl: "Alle lichtgolven zijn gesynchroniseerd en gefocust" },
                    { en: "It's always red colored", es: "Siempre es de color rojo", de: "Es ist immer rot gefärbt", nl: "Het is altijd rood gekleurd" },
                    { en: "It travels slower than normal light", es: "Viaja más lento que la luz normal", de: "Es reist langsamer als normales Licht", nl: "Het reist langzamer dan normaal licht" },
                    { en: "It's much dimmer than regular light", es: "Es mucho más tenue que la luz regular", de: "Es ist viel dunkler als reguläres Licht", nl: "Het is veel zwakker dan gewoon licht" }
                ],
                correct: 0,
                explanation: {
                    en: "Laser light is coherent - all the light waves have the same wavelength, phase, and direction, making it very focused and powerful for specific applications.",
                    es: "La luz láser es coherente - todas las ondas de luz tienen la misma longitud de onda, fase y dirección, haciéndola muy enfocada y poderosa para aplicaciones específicas.",
                    de: "Laserlicht ist kohärent - alle Lichtwellen haben dieselbe Wellenlänge, Phase und Richtung, wodurch es sehr fokussiert und kraftvoll für spezielle Anwendungen ist.",
                    nl: "Laserlicht is coherent - alle lichtgolven hebben dezelfde golflengte, fase en richting, waardoor het zeer gefocust en krachtig is voor specifieke toepassingen."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/science', level9);
    }
})();