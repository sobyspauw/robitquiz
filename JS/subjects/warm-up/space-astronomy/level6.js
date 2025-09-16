(function() {
    const level6 = {
        name: {
            en: "Telescopes and Observation",
            es: "Telescopios y Observación",
            de: "Teleskope und Beobachtung",
            nl: "Telescopen en Waarneming"
        },
        questions: [
            {
                question: {
                    en: "What is a telescope?",
                    es: "¿Qué es un telescopio?",
                    de: "Was ist ein Teleskop?",
                    nl: "Wat is een telescoop?"
                },
                options: [
                    { en: "An instrument that makes distant objects appear larger and clearer", es: "Un instrumento que hace que los objetos distantes parezcan más grandes y claros", de: "Ein Instrument, das entfernte Objekte größer und klarer erscheinen lässt", nl: "Een instrument dat verre objecten groter en helderder laat lijken" },
                    { en: "A type of camera", es: "Un tipo de cámara", de: "Eine Art Kamera", nl: "Een soort camera" },
                    { en: "A magnifying glass", es: "Una lupa", de: "Eine Lupe", nl: "Een vergrootglas" },
                    { en: "A microscope for space", es: "Un microscopio para el espacio", de: "Ein Mikroskop für den Weltraum", nl: "Een microscoop voor de ruimte" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Who invented the first telescope?",
                    es: "¿Quién inventó el primer telescopio?",
                    de: "Wer erfand das erste Teleskop?",
                    nl: "Wie heeft de eerste telescoop uitgevonden?"
                },
                options: [
                    { en: "Hans Lippershey (though Galileo improved it)", es: "Hans Lippershey (aunque Galileo lo mejoró)", de: "Hans Lippershey (obwohl Galileo es verbesserte)", nl: "Hans Lippershey (hoewel Galileo het verbeterde)" },
                    { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
                    { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" },
                    { en: "Edwin Hubble", es: "Edwin Hubble", de: "Edwin Hubble", nl: "Edwin Hubble" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are the two main types of optical telescopes?",
                    es: "¿Cuáles son los dos tipos principales de telescopios ópticos?",
                    de: "Was sind die zwei Haupttypen optischer Teleskope?",
                    nl: "Wat zijn de twee hoofdtypen optische telescopen?"
                },
                options: [
                    { en: "Refractors (using lenses) and reflectors (using mirrors)", es: "Refractores (que usan lentes) y reflectores (que usan espejos)", de: "Refraktoren (mit Linsen) und Reflektoren (mit Spiegeln)", nl: "Refractors (met lenzen) en reflectors (met spiegels)" },
                    { en: "Big and small", es: "Grandes y pequeños", de: "Große und kleine", nl: "Grote en kleine" },
                    { en: "Digital and analog", es: "Digitales y analógicos", de: "Digitale und analoge", nl: "Digitale en analoge" },
                    { en: "Professional and amateur", es: "Profesionales y aficionados", de: "Professionelle und Amateur", nl: "Professionele en amateur" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the Hubble Space Telescope?",
                    es: "¿Qué es el Telescopio Espacial Hubble?",
                    de: "Was ist das Hubble-Weltraumteleskop?",
                    nl: "Wat is de Hubble Ruimtetelescoop?"
                },
                options: [
                    { en: "A powerful telescope orbiting Earth in space", es: "Un telescopio poderoso que orbita la Tierra en el espacio", de: "Ein mächtiges Teleskop, das die Erde im Weltraum umkreist", nl: "Een krachtige telescoop die de Aarde in de ruimte omcirkelt" },
                    { en: "The largest telescope on Earth", es: "El telescopio más grande en la Tierra", de: "Das größte Teleskop auf der Erde", nl: "De grootste telescoop op Aarde" },
                    { en: "A telescope on the Moon", es: "Un telescopio en la Luna", de: "Ein Teleskop auf dem Mond", nl: "Een telescoop op de Maan" },
                    { en: "A radio telescope", es: "Un radiotelescopio", de: "Ein Radioteleskop", nl: "Een radiotelescoop" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why do astronomers put telescopes in space?",
                    es: "¿Por qué los astrónomos ponen telescopios en el espacio?",
                    de: "Warum stellen Astronomen Teleskope ins Weltall?",
                    nl: "Waarom plaatsen astronomen telescopen in de ruimte?"
                },
                options: [
                    { en: "To avoid Earth's atmosphere that blurs and blocks light", es: "Para evitar la atmósfera de la Tierra que difumina y bloquea la luz", de: "Um die Erdatmosphäre zu vermeiden, die Licht verwischt und blockiert", nl: "Om de atmosfeer van de Aarde te vermijden die licht vertroebelt en blokkeert" },
                    { en: "To get closer to the stars", es: "Para acercarse a las estrellas", de: "Um den Sternen näher zu kommen", nl: "Om dichter bij de sterren te komen" },
                    { en: "Because space is quieter", es: "Porque el espacio es más silencioso", de: "Weil der Weltraum ruhiger ist", nl: "Omdat de ruimte stiller is" },
                    { en: "To avoid light pollution", es: "Para evitar la contaminación lumínica", de: "Um Lichtverschmutzung zu vermeiden", nl: "Om lichtvervuiling te vermijden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is light pollution?",
                    es: "¿Qué es la contaminación lumínica?",
                    de: "Was ist Lichtverschmutzung?",
                    nl: "Wat is lichtvervuiling?"
                },
                options: [
                    { en: "Artificial light from cities that makes it hard to see stars", es: "Luz artificial de las ciudades que hace difícil ver las estrellas", de: "Künstliches Licht von Städten, das es schwer macht, Sterne zu sehen", nl: "Kunstmatig licht van steden dat het moeilijk maakt om sterren te zien" },
                    { en: "Dirty light from the Sun", es: "Luz sucia del Sol", de: "Schmutziges Licht von der Sonne", nl: "Vuil licht van de Zon" },
                    { en: "Light that is too bright", es: "Luz que es demasiado brillante", de: "Licht, das zu hell ist", nl: "Licht dat te helder is" },
                    { en: "Bad weather blocking light", es: "Mal tiempo bloqueando la luz", de: "Schlechtes Wetter blockiert Licht", nl: "Slecht weer dat licht blokkeert" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a radio telescope?",
                    es: "¿Qué es un radiotelescopio?",
                    de: "Was ist ein Radioteleskop?",
                    nl: "Wat is een radiotelescoop?"
                },
                options: [
                    { en: "A telescope that detects radio waves from space objects", es: "Un telescopio que detecta ondas de radio de objetos espaciales", de: "Ein Teleskop, das Radiowellen von Weltraumobjekten erkennt", nl: "Een telescoop die radiogolven van ruimteobjecten detecteert" },
                    { en: "A telescope with a radio inside", es: "Un telescopio con una radio adentro", de: "Ein Teleskop mit einem Radio darin", nl: "Een telescoop met een radio erin" },
                    { en: "A telescope that plays music", es: "Un telescopio que toca música", de: "Ein Teleskop, das Musik spielt", nl: "Een telescoop die muziek speelt" },
                    { en: "A telescope for listening to astronauts", es: "Un telescopio para escuchar a los astronautas", de: "Ein Teleskop zum Zuhören von Astronauten", nl: "Een telescoop om naar astronauten te luisteren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What did Galileo discover when he first used a telescope to look at space?",
                    es: "¿Qué descubrió Galileo cuando usó por primera vez un telescopio para mirar al espacio?",
                    de: "Was entdeckte Galileo, als er zum ersten Mal ein Teleskop benutzte, um in den Weltraum zu schauen?",
                    nl: "Wat ontdekte Galileo toen hij voor het eerst een telescoop gebruikte om naar de ruimte te kijken?"
                },
                options: [
                    { en: "Moons around Jupiter and craters on our Moon", es: "Lunas alrededor de Júpiter y cráteres en nuestra Luna", de: "Monde um Jupiter und Krater auf unserem Mond", nl: "Manen rond Jupiter en kraters op onze Maan" },
                    { en: "Black holes", es: "Agujeros negros", de: "Schwarze Löcher", nl: "Zwarte gaten" },
                    { en: "Other galaxies", es: "Otras galaxias", de: "Andere Galaxien", nl: "Andere sterrenstelsels" },
                    { en: "Aliens", es: "Extraterrestres", de: "Außerirdische", nl: "Buitenaardse wezens" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is magnification in telescopes?",
                    es: "¿Qué es la magnificación en los telescopios?",
                    de: "Was ist Vergrößerung bei Teleskopen?",
                    nl: "Wat is vergroting bij telescopen?"
                },
                options: [
                    { en: "How many times larger an object appears compared to your naked eye", es: "Cuántas veces más grande aparece un objeto comparado con tu ojo desnudo", de: "Wie viele Male größer ein Objekt im Vergleich zu deinem bloßen Auge erscheint", nl: "Hoeveel keer groter een object lijkt vergeleken met je blote oog" },
                    { en: "How bright things look", es: "Qué tan brillantes se ven las cosas", de: "Wie hell Dinge aussehen", nl: "Hoe helder dingen eruitzien" },
                    { en: "How far you can see", es: "Qué tan lejos puedes ver", de: "Wie weit du sehen kannst", nl: "Hoe ver je kunt zien" },
                    { en: "How clear the image is", es: "Qué tan clara es la imagen", de: "Wie klar das Bild ist", nl: "Hoe helder het beeld is" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is aperture in a telescope?",
                    es: "¿Qué es la apertura en un telescopio?",
                    de: "Was ist die Öffnung bei einem Teleskop?",
                    nl: "Wat is opening bij een telescoop?"
                },
                options: [
                    { en: "The diameter of the main lens or mirror that gathers light", es: "El diámetro de la lente o espejo principal que recolecta luz", de: "Der Durchmesser der Hauptlinse oder des Hauptspiegels, der Licht sammelt", nl: "De diameter van de hoofdlens of spiegel die licht verzamelt" },
                    { en: "The length of the telescope", es: "La longitud del telescopio", de: "Die Länge des Teleskops", nl: "De lengte van de telescoop" },
                    { en: "The eyepiece you look through", es: "El ocular por el que miras", de: "Das Okular, durch das du schaust", nl: "Het oculair waar je doorheen kijkt" },
                    { en: "The stand that holds the telescope", es: "El soporte que sostiene el telescopio", de: "Der Ständer, der das Teleskop hält", nl: "De standaard die de telescoop houdt" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why do larger telescopes see fainter objects?",
                    es: "¿Por qué los telescopios más grandes ven objetos más tenues?",
                    de: "Warum sehen größere Teleskope schwächere Objekte?",
                    nl: "Waarom zien grotere telescopen zwakkere objecten?"
                },
                options: [
                    { en: "They collect more light with their bigger mirrors or lenses", es: "Recolectan más luz con sus espejos o lentes más grandes", de: "Sie sammeln mehr Licht mit ihren größeren Spiegeln oder Linsen", nl: "Ze verzamelen meer licht met hun grotere spiegels of lenzen" },
                    { en: "They are closer to space", es: "Están más cerca del espacio", de: "Sie sind näher zum Weltraum", nl: "Ze staan dichter bij de ruimte" },
                    { en: "They have better eyepieces", es: "Tienen mejores oculares", de: "Sie haben bessere Okulare", nl: "Ze hebben betere oculairs" },
                    { en: "They cost more money", es: "Cuestan más dinero", de: "Sie kosten mehr Geld", nl: "Ze kosten meer geld" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is an observatory?",
                    es: "¿Qué es un observatorio?",
                    de: "Was ist ein Observatorium?",
                    nl: "Wat is een observatorium?"
                },
                options: [
                    { en: "A building designed to house telescopes for astronomical observation", es: "Un edificio diseñado para albergar telescopios para observación astronómica", de: "Ein Gebäude, das entworfen wurde, um Teleskope für astronomische Beobachtungen zu beherbergen", nl: "Een gebouw ontworpen om telescopen te huisvesten voor astronomische waarneming" },
                    { en: "A type of telescope", es: "Un tipo de telescopio", de: "Eine Art Teleskop", nl: "Een soort telescoop" },
                    { en: "A person who studies space", es: "Una persona que estudia el espacio", de: "Eine Person, die den Weltraum studiert", nl: "Een persoon die de ruimte bestudeert" },
                    { en: "A planet watching station", es: "Una estación de observación de planetas", de: "Eine Planetenbeobachtungsstation", nl: "Een planeet waarnemingsstation" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the difference between looking through a telescope and taking a photograph with it?",
                    es: "¿Cuál es la diferencia entre mirar a través de un telescopio y tomar una fotografía con él?",
                    de: "Was ist der Unterschied zwischen dem Durchschauen eines Teleskops und dem Fotografieren damit?",
                    nl: "Wat is het verschil tussen door een telescoop kijken en er een foto mee maken?"
                },
                options: [
                    { en: "Photographs can collect light over time to show fainter objects", es: "Las fotografías pueden recolectar luz con el tiempo para mostrar objetos más tenues", de: "Fotografien können über Zeit Licht sammeln, um schwächere Objekte zu zeigen", nl: "Foto's kunnen licht verzamelen over tijd om zwakkere objecten te tonen" },
                    { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" },
                    { en: "Photographs are always blurry", es: "Las fotografías siempre están borrosas", de: "Fotografien sind immer unscharf", nl: "Foto's zijn altijd wazig" },
                    { en: "You can only see planets with photographs", es: "Solo puedes ver planetas con fotografías", de: "Du kannst nur Planeten mit Fotografien sehen", nl: "Je kunt alleen planeten zien met foto's" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What does 'seeing' mean in astronomy?",
                    es: "¿Qué significa 'seeing' en astronomía?",
                    de: "Was bedeutet 'Seeing' in der Astronomie?",
                    nl: "Wat betekent 'seeing' in de astronomie?"
                },
                options: [
                    { en: "How steady the atmosphere is - less turbulence means better seeing", es: "Qué tan estable está la atmósfera - menos turbulencia significa mejor visión", de: "Wie stabil die Atmosphäre ist - weniger Turbulenz bedeutet besseres Seeing", nl: "Hoe stabiel de atmosfeer is - minder turbulentie betekent beter zien" },
                    { en: "How good your eyesight is", es: "Qué tan buena es tu vista", de: "Wie gut deine Sehkraft ist", nl: "Hoe goed je gezichtsvermogen is" },
                    { en: "How many things you can see", es: "Cuántas cosas puedes ver", de: "Wie viele Dinge du sehen kannst", nl: "Hoeveel dingen je kunt zien" },
                    { en: "How bright the stars are", es: "Qué tan brillantes son las estrellas", de: "Wie hell die Sterne sind", nl: "Hoe helder de sterren zijn" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a refracting telescope?",
                    es: "¿Qué es un telescopio refractor?",
                    de: "Was ist ein Refraktor-Teleskop?",
                    nl: "Wat is een refractor telescoop?"
                },
                options: [
                    { en: "A telescope that uses lenses to bend light and form an image", es: "Un telescopio que usa lentes para doblar la luz y formar una imagen", de: "Ein Teleskop, das Linsen verwendet, um Licht zu biegen und ein Bild zu formen", nl: "Een telescoop die lenzen gebruikt om licht te buigen en een beeld te vormen" },
                    { en: "A telescope that uses mirrors", es: "Un telescopio que usa espejos", de: "Ein Teleskop, das Spiegel verwendet", nl: "Een telescoop die spiegels gebruikt" },
                    { en: "A telescope that breaks light apart", es: "Un telescopio que separa la luz", de: "Ein Teleskop, das Licht auseinanderbricht", nl: "Een telescoop die licht uit elkaar breekt" },
                    { en: "A telescope that refuses to work", es: "Un telescopio que se niega a funcionar", de: "Ein Teleskop, das sich weigert zu funktionieren", nl: "Een telescoop die weigert te werken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a reflecting telescope?",
                    es: "¿Qué es un telescopio reflector?",
                    de: "Was ist ein Reflektor-Teleskop?",
                    nl: "Wat is een reflector telescoop?"
                },
                options: [
                    { en: "A telescope that uses mirrors to collect and focus light", es: "Un telescopio que usa espejos para recolectar y enfocar la luz", de: "Ein Teleskop, das Spiegel verwendet, um Licht zu sammeln und zu fokussieren", nl: "Een telescoop die spiegels gebruikt om licht te verzamelen en te focussen" },
                    { en: "A telescope that uses lenses", es: "Un telescopio que usa lentes", de: "Ein Teleskop, das Linsen verwendet", nl: "Een telescoop die lenzen gebruikt" },
                    { en: "A telescope that reflects sunlight", es: "Un telescopio que refleja la luz solar", de: "Ein Teleskop, das Sonnenlicht reflektiert", nl: "Een telescoop die zonlicht reflecteert" },
                    { en: "A telescope that thinks about things", es: "Un telescopio que piensa en las cosas", de: "Ein Teleskop, das über Dinge nachdenkt", nl: "Een telescoop die over dingen nadenkt" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Where are the best locations on Earth to build large telescopes?",
                    es: "¿Dónde están las mejores ubicaciones en la Tierra para construir telescopios grandes?",
                    de: "Wo sind die besten Orte auf der Erde, um große Teleskope zu bauen?",
                    nl: "Waar zijn de beste locaties op Aarde om grote telescopen te bouwen?"
                },
                options: [
                    { en: "High mountains with dry, stable air and little light pollution", es: "Montañas altas con aire seco, estable y poca contaminación lumínica", de: "Hohe Berge mit trockener, stabiler Luft und wenig Lichtverschmutzung", nl: "Hoge bergen met droge, stabiele lucht en weinig lichtvervuiling" },
                    { en: "Near big cities for convenience", es: "Cerca de grandes ciudades por conveniencia", de: "In der Nähe großer Städte aus Bequemlichkeit", nl: "Dicht bij grote steden voor gemak" },
                    { en: "At sea level", es: "A nivel del mar", de: "Auf Meereshöhe", nl: "Op zeeniveau" },
                    { en: "In valleys between hills", es: "En valles entre colinas", de: "In Tälern zwischen Hügeln", nl: "In valleien tussen heuvels" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the James Webb Space Telescope?",
                    es: "¿Qué es el Telescopio Espacial James Webb?",
                    de: "Was ist das James Webb Weltraumteleskop?",
                    nl: "Wat is de James Webb Ruimtetelescoop?"
                },
                options: [
                    { en: "A new, larger space telescope that observes in infrared light", es: "Un telescopio espacial nuevo y más grande que observa en luz infrarroja", de: "Ein neues, größeres Weltraumteleskop, das in Infrarotlicht beobachtet", nl: "Een nieuwe, grotere ruimtetelescoop die in infrarood licht observeert" },
                    { en: "A replacement for all Earth-based telescopes", es: "Un reemplazo para todos los telescopios terrestres", de: "Ein Ersatz für alle erdbasierten Teleskope", nl: "Een vervanging voor alle aardgebaseerde telescopen" },
                    { en: "The same as Hubble but with a different name", es: "Lo mismo que Hubble pero con un nombre diferente", de: "Dasselbe wie Hubble, aber mit einem anderen Namen", nl: "Hetzelfde als Hubble maar met een andere naam" },
                    { en: "A telescope on Mars", es: "Un telescopio en Marte", de: "Ein Teleskop auf dem Mars", nl: "Een telescoop op Mars" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What can infrared telescopes see that visible light telescopes cannot?",
                    es: "¿Qué pueden ver los telescopios infrarrojos que los telescopios de luz visible no pueden?",
                    de: "Was können Infrarot-Teleskope sehen, was sichtbare Lichtteleskope nicht können?",
                    nl: "Wat kunnen infraroodtelescopen zien dat zichtbare licht telescopen niet kunnen?"
                },
                options: [
                    { en: "Heat from cool objects and light from very distant, old galaxies", es: "Calor de objetos fríos y luz de galaxias muy distantes y antiguas", de: "Wärme von kühlen Objekten und Licht von sehr entfernten, alten Galaxien", nl: "Warmte van koele objecten en licht van zeer verre, oude sterrenstelsels" },
                    { en: "Only planets", es: "Solo planetas", de: "Nur Planeten", nl: "Alleen planeten" },
                    { en: "The same things but in different colors", es: "Las mismas cosas pero en diferentes colores", de: "Die gleichen Dinge, aber in verschiedenen Farben", nl: "Dezelfde dingen maar in verschillende kleuren" },
                    { en: "Nothing different", es: "Nada diferente", de: "Nichts anderes", nl: "Niets anders" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is an eyepiece in a telescope?",
                    es: "¿Qué es un ocular en un telescopio?",
                    de: "Was ist ein Okular bei einem Teleskop?",
                    nl: "Wat is een oculair bij een telescoop?"
                },
                options: [
                    { en: "The lens you look through to see the magnified image", es: "La lente a través de la cual miras para ver la imagen magnificada", de: "Die Linse, durch die du schaust, um das vergrößerte Bild zu sehen", nl: "De lens waar je doorheen kijkt om het vergrote beeld te zien" },
                    { en: "The main mirror of the telescope", es: "El espejo principal del telescopio", de: "Der Hauptspiegel des Teleskops", nl: "De hoofdspiegel van de telescoop" },
                    { en: "A protective cover", es: "Una cubierta protectora", de: "Eine Schutzabdeckung", nl: "Een beschermende afdekking" },
                    { en: "The telescope's computer", es: "La computadora del telescopio", de: "Der Computer des Teleskops", nl: "De computer van de telescoop" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a finder scope?",
                    es: "¿Qué es un buscador?",
                    de: "Was ist ein Sucherfernrohr?",
                    nl: "Wat is een zoeker?"
                },
                options: [
                    { en: "A small telescope attached to the main one to help locate objects", es: "Un telescopio pequeño adjunto al principal para ayudar a localizar objetos", de: "Ein kleines Teleskop, das am Hauptteleskop befestigt ist, um Objekte zu finden", nl: "Een kleine telescoop bevestigd aan de hoofdtelescoop om objecten te vinden" },
                    { en: "A person who finds things", es: "Una persona que encuentra cosas", de: "Eine Person, die Dinge findet", nl: "Een persoon die dingen vindt" },
                    { en: "A tool for cleaning telescopes", es: "Una herramienta para limpiar telescopios", de: "Ein Werkzeug zum Reinigen von Teleskopen", nl: "Een gereedschap voor het schoonmaken van telescopen" },
                    { en: "The main lens", es: "La lente principal", de: "Die Hauptlinse", nl: "De hoofdlens" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a mount in telescope terms?",
                    es: "¿Qué es una montura en términos de telescopio?",
                    de: "Was ist eine Montierung in Teleskop-Begriffen?",
                    nl: "Wat is een montuur in telescooptermen?"
                },
                options: [
                    { en: "The stand that holds and moves the telescope smoothly", es: "El soporte que sostiene y mueve el telescopio suavemente", de: "Der Ständer, der das Teleskop hält und sanft bewegt", nl: "De standaard die de telescoop houdt en soepel beweegt" },
                    { en: "A mountain where telescopes are built", es: "Una montaña donde se construyen telescopios", de: "Ein Berg, auf dem Teleskope gebaut werden", nl: "Een berg waar telescopen worden gebouwd" },
                    { en: "The top part of the telescope", es: "La parte superior del telescopio", de: "Der obere Teil des Teleskops", nl: "Het bovenste deel van de telescoop" },
                    { en: "A type of lens", es: "Un tipo de lente", de: "Eine Art Linse", nl: "Een soort lens" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What does 'light-gathering power' mean?",
                    es: "¿Qué significa 'poder de recolección de luz'?",
                    de: "Was bedeutet 'Lichtsammelkraft'?",
                    nl: "Wat betekent 'lichtverzamelende kracht'?"
                },
                options: [
                    { en: "How much light a telescope can collect compared to your eye", es: "Cuánta luz puede recolectar un telescopio comparado con tu ojo", de: "Wie viel Licht ein Teleskop im Vergleich zu deinem Auge sammeln kann", nl: "Hoeveel licht een telescoop kan verzamelen vergeleken met je oog" },
                    { en: "How bright the telescope makes things look", es: "Qué tan brillantes hace ver las cosas el telescopio", de: "Wie hell das Teleskop Dinge aussehen lässt", nl: "Hoe helder de telescoop dingen doet lijken" },
                    { en: "The telescope's electrical power", es: "La energía eléctrica del telescopio", de: "Die elektrische Leistung des Teleskops", nl: "De elektrische kracht van de telescoop" },
                    { en: "How fast the telescope can move", es: "Qué tan rápido se puede mover el telescopio", de: "Wie schnell sich das Teleskop bewegen kann", nl: "Hoe snel de telescoop kan bewegen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why do stars look like points even in large telescopes?",
                    es: "¿Por qué las estrellas se ven como puntos incluso en telescopios grandes?",
                    de: "Warum sehen Sterne auch in großen Teleskopen wie Punkte aus?",
                    nl: "Waarom zien sterren eruit als punten, zelfs in grote telescopen?"
                },
                options: [
                    { en: "They are so far away that they appear as tiny points of light", es: "Están tan lejos que aparecen como pequeños puntos de luz", de: "Sie sind so weit entfernt, dass sie als winzige Lichtpunkte erscheinen", nl: "Ze zijn zo ver weg dat ze lijken als kleine lichtpuntjes" },
                    { en: "Telescopes are not powerful enough", es: "Los telescopios no son lo suficientemente potentes", de: "Teleskope sind nicht kraftvoll genug", nl: "Telescopen zijn niet krachtig genoeg" },
                    { en: "Stars are actually very small", es: "Las estrellas son realmente muy pequeñas", de: "Sterne sind tatsächlich sehr klein", nl: "Sterren zijn eigenlijk heel klein" },
                    { en: "The atmosphere blurs them", es: "La atmósfera las difumina", de: "Die Atmosphäre verwischt sie", nl: "De atmosfeer vertroebelt ze" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is adaptive optics?",
                    es: "¿Qué es la óptica adaptativa?",
                    de: "Was ist adaptive Optik?",
                    nl: "Wat is adaptieve optica?"
                },
                options: [
                    { en: "Technology that corrects for atmospheric distortion in real-time", es: "Tecnología que corrige la distorsión atmosférica en tiempo real", de: "Technologie, die atmosphärische Verzerrung in Echtzeit korrigiert", nl: "Technologie die atmosferische vervorming in realtime corrigeert" },
                    { en: "Lenses that can change shape", es: "Lentes que pueden cambiar de forma", de: "Linsen, die ihre Form ändern können", nl: "Lenzen die van vorm kunnen veranderen" },
                    { en: "Telescopes that can adapt to different objects", es: "Telescopios que se pueden adaptar a diferentes objetos", de: "Teleskope, die sich an verschiedene Objekte anpassen können", nl: "Telescopen die zich kunnen aanpassen aan verschillende objecten" },
                    { en: "Smart telescopes that work by themselves", es: "Telescopios inteligentes que trabajan solos", de: "Intelligente Teleskope, die von selbst arbeiten", nl: "Slimme telescopen die zelf werken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a CCD camera in astronomy?",
                    es: "¿Qué es una cámara CCD en astronomía?",
                    de: "Was ist eine CCD-Kamera in der Astronomie?",
                    nl: "Wat is een CCD-camera in de astronomie?"
                },
                options: [
                    { en: "A sensitive electronic detector that captures light much better than film", es: "Un detector electrónico sensible que captura luz mucho mejor que la película", de: "Ein empfindlicher elektronischer Detektor, der Licht viel besser einfängt als Film", nl: "Een gevoelige elektronische detector die licht veel beter vastlegt dan film" },
                    { en: "A regular digital camera", es: "Una cámara digital normal", de: "Eine normale Digitalkamera", nl: "Een gewone digitale camera" },
                    { en: "A camera for taking pictures of astronauts", es: "Una cámara para tomar fotos de astronautas", de: "Eine Kamera zum Fotografieren von Astronauten", nl: "Een camera voor het maken van foto's van astronauten" },
                    { en: "A video camera", es: "Una cámara de video", de: "Eine Videokamera", nl: "Een videocamera" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is spectroscopy in astronomy?",
                    es: "¿Qué es la espectroscopia en astronomía?",
                    de: "Was ist Spektroskopie in der Astronomie?",
                    nl: "Wat is spectroscopie in de astronomie?"
                },
                options: [
                    { en: "Splitting light into its colors to learn about the object's composition", es: "Dividir la luz en sus colores para aprender sobre la composición del objeto", de: "Licht in seine Farben aufteilen, um über die Zusammensetzung des Objekts zu lernen", nl: "Licht opdelen in zijn kleuren om te leren over de samenstelling van het object" },
                    { en: "Looking at objects with special glasses", es: "Mirar objetos con anteojos especiales", de: "Objekte mit speziellen Brillen betrachten", nl: "Objecten bekijken met speciale brillen" },
                    { en: "Using telescopes to see specters", es: "Usar telescopios para ver espectros", de: "Teleskope verwenden, um Gespenster zu sehen", nl: "Telescopen gebruiken om geesten te zien" },
                    { en: "Taking pictures of the spectrum", es: "Tomar fotos del espectro", de: "Fotos vom Spektrum machen", nl: "Foto's maken van het spectrum" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What causes the twinkling of stars that we see with our eyes?",
                    es: "¿Qué causa el centelleo de las estrellas que vemos con nuestros ojos?",
                    de: "Was verursacht das Funkeln der Sterne, das wir mit unseren Augen sehen?",
                    nl: "Wat veroorzaakt het fonkelen van sterren dat we zien met onze ogen?"
                },
                options: [
                    { en: "Moving air in Earth's atmosphere bends the starlight", es: "El aire en movimiento en la atmósfera de la Tierra dobla la luz estelar", de: "Bewegende Luft in der Erdatmosphäre beugt das Sternenlicht", nl: "Bewegende lucht in de atmosfeer van de Aarde buigt het sterrenlicht" },
                    { en: "Stars actually flicker on and off", es: "Las estrellas realmente parpadean y se apagan", de: "Sterne flackern tatsächlich an und aus", nl: "Sterren flikkeren werkelijk aan en uit" },
                    { en: "Our eyes are not steady", es: "Nuestros ojos no son estables", de: "Unsere Augen sind nicht stabil", nl: "Onze ogen zijn niet stabiel" },
                    { en: "Clouds pass in front of stars", es: "Las nubes pasan frente a las estrellas", de: "Wolken ziehen vor den Sternen vorbei", nl: "Wolken bewegen voor sterren langs" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the limiting magnitude?",
                    es: "¿Qué es la magnitud límite?",
                    de: "Was ist die Grenzgröße?",
                    nl: "Wat is de begrenzende magnitude?"
                },
                options: [
                    { en: "The faintest star you can see with a telescope or your naked eye", es: "La estrella más tenue que puedes ver con un telescopio o a simple vista", de: "Der schwächste Stern, den du mit einem Teleskop oder bloßen Augen sehen kannst", nl: "De zwakste ster die je kunt zien met een telescoop of het blote oog" },
                    { en: "The brightest star you can see", es: "La estrella más brillante que puedes ver", de: "Der hellste Stern, den du sehen kannst", nl: "De helderste ster die je kunt zien" },
                    { en: "How many stars are in the sky", es: "Cuántas estrellas hay en el cielo", de: "Wie viele Sterne am Himmel sind", nl: "Hoeveel sterren er aan de hemel staan" },
                    { en: "The size of the biggest star", es: "El tamaño de la estrella más grande", de: "Die Größe des größten Sterns", nl: "De grootte van de grootste ster" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do astronomers measure the brightness of stars?",
                    es: "¿Cómo miden los astrónomos el brillo de las estrellas?",
                    de: "Wie messen Astronomen die Helligkeit von Sternen?",
                    nl: "Hoe meten astronomen de helderheid van sterren?"
                },
                options: [
                    { en: "Using a magnitude scale where smaller numbers mean brighter stars", es: "Usando una escala de magnitud donde números menores significan estrellas más brillantes", de: "Mit einer Größenskala, bei der kleinere Zahlen hellere Sterne bedeuten", nl: "Met een magnitude schaal waar kleinere getallen helderder sterren betekenen" },
                    { en: "Counting how many photons they emit", es: "Contando cuántos fotones emiten", de: "Zählen, wie viele Photonen sie emittieren", nl: "Tellen hoeveel fotonen ze uitstralen" },
                    { en: "Measuring their temperature", es: "Midiendo su temperatura", de: "Ihre Temperatur messen", nl: "Hun temperatuur meten" },
                    { en: "Using a light meter", es: "Usando un fotómetro", de: "Mit einem Lichtmesser", nl: "Met een lichtmeter" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are some challenges astronomers face when observing from Earth?",
                    es: "¿Cuáles son algunos desafíos que enfrentan los astrónomos al observar desde la Tierra?",
                    de: "Welche Herausforderungen haben Astronomen bei Beobachtungen von der Erde aus?",
                    nl: "Wat zijn enkele uitdagingen waarmee astronomen te maken krijgen bij waarnemingen vanaf de Aarde?"
                },
                options: [
                    { en: "Atmospheric turbulence, light pollution, weather, and absorption", es: "Turbulencia atmosférica, contaminación lumínica, clima y absorción", de: "Atmosphärische Turbulenz, Lichtverschmutzung, Wetter und Absorption", nl: "Atmosferische turbulentie, lichtvervuiling, weer en absorptie" },
                    { en: "Only cloudy skies", es: "Solo cielos nublados", de: "Nur bewölkte Himmel", nl: "Alleen bewolkte luchten" },
                    { en: "Just the cost of telescopes", es: "Solo el costo de los telescopios", de: "Nur die Kosten von Teleskopen", nl: "Alleen de kosten van telescopen" },
                    { en: "Finding a place to put telescopes", es: "Encontrar un lugar para poner telescopios", de: "Einen Platz für Teleskope finden", nl: "Een plaats vinden om telescopen te plaatsen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a solar filter?",
                    es: "¿Qué es un filtro solar?",
                    de: "Was ist ein Sonnenfilter?",
                    nl: "Wat is een zonnefilter?"
                },
                options: [
                    { en: "Special protection needed to safely look at the Sun through a telescope", es: "Protección especial necesaria para mirar el Sol de manera segura a través de un telescopio", de: "Spezieller Schutz, der benötigt wird, um sicher durch ein Teleskop in die Sonne zu schauen", nl: "Speciale bescherming die nodig is om veilig naar de Zon te kijken door een telescoop" },
                    { en: "A filter that blocks all light", es: "Un filtro que bloquea toda la luz", de: "Ein Filter, der alles Licht blockiert", nl: "Een filter die al het licht blokkeert" },
                    { en: "A regular sunglasses lens", es: "Un lente de anteojos de sol normal", de: "Eine normale Sonnenbrillenlinse", nl: "Een gewone zonnebril lens" },
                    { en: "Something to make the Sun look bigger", es: "Algo para hacer que el Sol se vea más grande", de: "Etwas, um die Sonne größer aussehen zu lassen", nl: "Iets om de Zon er groter uit te laten zien" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What can you see with a small backyard telescope?",
                    es: "¿Qué puedes ver con un telescopio pequeño de patio?",
                    de: "Was kann man mit einem kleinen Hinterhof-Teleskop sehen?",
                    nl: "Wat kun je zien met een kleine achtertuin telescoop?"
                },
                options: [
                    { en: "Moon craters, Jupiter's moons, Saturn's rings, and bright nebulae", es: "Cráteres lunares, lunas de Júpiter, anillos de Saturno y nebulosas brillantes", de: "Mondkrater, Jupiters Monde, Saturns Ringe und helle Nebel", nl: "Maankraters, manen van Jupiter, ringen van Saturnus en heldere nevels" },
                    { en: "Only the Moon", es: "Solo la Luna", de: "Nur den Mond", nl: "Alleen de Maan" },
                    { en: "Everything the Hubble telescope can see", es: "Todo lo que puede ver el telescopio Hubble", de: "Alles, was das Hubble-Teleskop sehen kann", nl: "Alles wat de Hubbletelescoop kan zien" },
                    { en: "Aliens on other planets", es: "Extraterrestres en otros planetas", de: "Außerirdische auf anderen Planeten", nl: "Buitenaardse wezens op andere planeten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why are radio telescopes shaped like large dishes?",
                    es: "¿Por qué los radiotelescopios tienen forma de platos grandes?",
                    de: "Warum sind Radioteleskope wie große Schüsseln geformt?",
                    nl: "Waarom hebben radiotelescopen de vorm van grote schotels?"
                },
                options: [
                    { en: "The dish shape collects and focuses radio waves to a central receiver", es: "La forma de plato recolecta y enfoca ondas de radio hacia un receptor central", de: "Die Schüsselform sammelt und fokussiert Radiowellen zu einem zentralen Empfänger", nl: "De schotelvorm verzamelt en focusseert radiogolven naar een centrale ontvanger" },
                    { en: "They are designed to look like satellite TV dishes", es: "Están diseñados para parecerse a antparabólicas de TV", de: "Sie sind entworfen, um wie Satelliten-TV-Schüsseln auszusehen", nl: "Ze zijn ontworpen om op satelliet-tv schotels te lijken" },
                    { en: "The shape doesn't matter", es: "La forma no importa", de: "Die Form spielt keine Rolle", nl: "De vorm maakt niet uit" },
                    { en: "To catch rainwater", es: "Para recoger agua de lluvia", de: "Um Regenwasser aufzufangen", nl: "Om regenwater op te vangen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the advantage of interferometry in radio astronomy?",
                    es: "¿Cuál es la ventaja de la interferometría en radioastronomía?",
                    de: "Was ist der Vorteil der Interferometrie in der Radioastronomie?",
                    nl: "Wat is het voordeel van interferometrie in radioastronomie?"
                },
                options: [
                    { en: "Combining signals from multiple telescopes to get better resolution", es: "Combinar señales de múltiples telescopios para obtener mejor resolución", de: "Signale von mehreren Teleskopen kombinieren, um bessere Auflösung zu bekommen", nl: "Signalen van meerdere telescopen combineren voor betere resolutie" },
                    { en: "Making telescopes cheaper to build", es: "Hacer que los telescopios sean más baratos de construir", de: "Teleskope billiger zu bauen machen", nl: "Telescopen goedkoper maken om te bouwen" },
                    { en: "Protecting telescopes from interference", es: "Proteger telescopios de la interferencia", de: "Teleskope vor Interferenzen schützen", nl: "Telescopen beschermen tegen interferentie" },
                    { en: "Making observations faster", es: "Hacer observaciones más rápidas", de: "Beobachtungen schneller machen", nl: "Waarnemingen sneller maken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How has computer technology changed astronomy?",
                    es: "¿Cómo ha cambiado la tecnología informática la astronomía?",
                    de: "Wie hat die Computertechnologie die Astronomie verändert?",
                    nl: "Hoe heeft computertechnologie de astronomie veranderd?"
                },
                options: [
                    { en: "Automated telescope control, digital imaging, and data analysis", es: "Control automatizado de telescopios, imagen digital y análisis de datos", de: "Automatisierte Teleskopsteuerung, digitale Bildgebung und Datenanalyse", nl: "Geautomatiseerde telescoopbesturing, digitale beeldvorming en data-analyse" },
                    { en: "Only making calculations faster", es: "Solo hacer cálculos más rápidos", de: "Nur Berechnungen schneller machen", nl: "Alleen berekeningen sneller maken" },
                    { en: "Just storing more pictures", es: "Solo almacenar más imágenes", de: "Nur mehr Bilder speichern", nl: "Alleen meer foto's opslaan" },
                    { en: "Nothing has changed", es: "Nada ha cambiado", de: "Es hat sich nichts geändert", nl: "Er is niets veranderd" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What makes professional telescopes different from amateur ones?",
                    es: "¿Qué hace diferentes a los telescopios profesionales de los aficionados?",
                    de: "Was macht professionelle Teleskope anders als Amateur-Teleskope?",
                    nl: "Wat maakt professionele telescopen anders dan amateur telescopen?"
                },
                options: [
                    { en: "Size, precision, specialized instruments, and computer control", es: "Tamaño, precisión, instrumentos especializados y control por computadora", de: "Größe, Präzision, spezialisierte Instrumente und Computersteuerung", nl: "Grootte, precisie, gespecialiseerde instrumenten en computerbesturing" },
                    { en: "Only the cost", es: "Solo el costo", de: "Nur die Kosten", nl: "Alleen de kosten" },
                    { en: "They are painted differently", es: "Están pintados diferente", de: "Sie sind anders gestrichen", nl: "Ze zijn anders geverfd" },
                    { en: "Professional ones are always in space", es: "Los profesionales siempre están en el espacio", de: "Professionelle sind immer im Weltraum", nl: "Professionele zijn altijd in de ruimte" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the future of telescope technology?",
                    es: "¿Cuál es el futuro de la tecnología de telescopios?",
                    de: "Was ist die Zukunft der Teleskoptechnologie?",
                    nl: "Wat is de toekomst van telescooptechnologie?"
                },
                options: [
                    { en: "Larger mirrors, better adaptive optics, space-based arrays, and AI assistance", es: "Espejos más grandes, mejor óptica adaptativa, matrices espaciales y asistencia de IA", de: "Größere Spiegel, bessere adaptive Optik, weltraumbasierte Arrays und KI-Unterstützung", nl: "Grotere spiegels, betere adaptieve optica, ruimte-gebaseerde arrays en AI-assistentie" },
                    { en: "Everything will stay the same", es: "Todo seguirá igual", de: "Alles wird gleich bleiben", nl: "Alles zal hetzelfde blijven" },
                    { en: "Only smaller telescopes", es: "Solo telescopios más pequeños", de: "Nur kleinere Teleskope", nl: "Alleen kleinere telescopen" },
                    { en: "Telescopes will be replaced by computers", es: "Los telescopios serán reemplazados por computadoras", de: "Teleskope werden durch Computer ersetzt", nl: "Telescopen zullen worden vervangen door computers" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is focal length in a telescope?",
                    es: "¿Qué es la distancia focal en un telescopio?",
                    de: "Was ist Brennweite bei einem Teleskop?",
                    nl: "Wat is brandpuntsafstand bij een telescoop?"
                },
                options: [
                    { en: "The distance from the main mirror or lens to where light comes to focus", es: "La distancia desde el espejo o lente principal hasta donde la luz llega a enfocar", de: "Die Entfernung vom Hauptspiegel oder der Hauptlinse bis dort, wo das Licht fokussiert wird", nl: "De afstand van de hoofdspiegel of lens tot waar het licht in focus komt" },
                    { en: "The length of the telescope tube", es: "La longitud del tubo del telescopio", de: "Die Länge des Teleskoprohrs", nl: "De lengte van de telescoopbuis" },
                    { en: "How long it takes to focus", es: "Cuánto tiempo toma enfocar", de: "Wie lange es dauert zu fokussieren", nl: "Hoe lang het duurt om te focusseren" },
                    { en: "The distance to the nearest star", es: "La distancia a la estrella más cercana", de: "Die Entfernung zum nächsten Stern", nl: "De afstand tot de dichtstbijzijnde ster" }
                ],
                correct: 0,
                explanation: {
                    en: "Focal length determines the magnification and field of view characteristics of the telescope when combined with different eyepieces.",
                    es: "La distancia focal determina las características de magnificación y campo de visión del telescopio cuando se combina con diferentes oculares.",
                    de: "Die Brennweite bestimmt die Vergrößerungs- und Gesichtsfeldcharakteristiken des Teleskops in Kombination mit verschiedenen Okularen.",
                    nl: "Brandpuntsafstand bepaalt de vergroting en gezichtsveld karakteristieken van de telescoop wanneer gecombineerd met verschillende oculairs."
                }
            },
            {
                question: {
                    en: "What is chromatic aberration in telescopes?",
                    es: "¿Qué es la aberración cromática en los telescopios?",
                    de: "Was ist chromatische Aberration bei Teleskopen?",
                    nl: "Wat is chromatische aberratie bij telescopen?"
                },
                options: [
                    { en: "When lenses bend different colors of light by different amounts, creating color fringes", es: "Cuando las lentes doblan diferentes colores de luz en diferentes cantidades, creando bordes de color", de: "Wenn Linsen verschiedene Farben des Lichts um unterschiedliche Beträge beugen und Farbsäume erzeugen", nl: "Wanneer lenzen verschillende kleuren licht met verschillende hoeveelheden buigen, waardoor kleurzomen ontstaan" },
                    { en: "When the telescope changes colors", es: "Cuando el telescopio cambia de colores", de: "Wenn das Teleskop die Farben ändert", nl: "Wanneer de telescoop van kleur verandert" },
                    { en: "A disease that affects telescope mirrors", es: "Una enfermedad que afecta los espejos de telescopio", de: "Eine Krankheit, die Teleskopspiegel betrifft", nl: "Een ziekte die telescoopspiegels beïnvloedt" },
                    { en: "When stars appear in wrong colors", es: "Cuando las estrellas aparecen en colores incorrectos", de: "Wenn Sterne in falschen Farben erscheinen", nl: "Wanneer sterren in verkeerde kleuren verschijnen" }
                ],
                correct: 0,
                explanation: {
                    en: "This optical problem is more common in refractor telescopes and can be reduced with special multi-element lens designs.",
                    es: "Este problema óptico es más común en telescopios refractores y puede reducirse con diseños especiales de lentes de múltiples elementos.",
                    de: "Dieses optische Problem ist häufiger bei Refraktor-Teleskopen und kann mit speziellen mehrelementigen Linsendesigns reduziert werden.",
                    nl: "Dit optische probleem komt vaker voor bij refractor telescopen en kan worden verminderd met speciale multi-element lens ontwerpen."
                }
            },
            {
                question: {
                    en: "What is a Dobsonian telescope?",
                    es: "¿Qué es un telescopio Dobsoniano?",
                    de: "Was ist ein Dobson-Teleskop?",
                    nl: "Wat is een Dobsoniaanse telescoop?"
                },
                options: [
                    { en: "A simple, affordable reflecting telescope with an easy-to-use mount", es: "Un telescopio reflector simple y accesible con una montura fácil de usar", de: "Ein einfaches, erschwingliches Spiegelteleskop mit einer einfach zu bedienenden Montierung", nl: "Een eenvoudige, betaalbare spiegeltelescoop met een gemakkelijk te gebruiken montuur" },
                    { en: "A telescope invented by Mr. Dobson for looking at the Sun", es: "Un telescopio inventado por el Sr. Dobson para mirar el Sol", de: "Ein Teleskop, das von Herrn Dobson erfunden wurde, um die Sonne zu betrachten", nl: "Een telescoop uitgevonden door meneer Dobson om naar de Zon te kijken" },
                    { en: "A very expensive professional telescope", es: "Un telescopio profesional muy caro", de: "Ein sehr teures professionelles Teleskop", nl: "Een zeer dure professionele telescoop" },
                    { en: "A telescope that only works underwater", es: "Un telescopio que solo funciona bajo el agua", de: "Ein Teleskop, das nur unter Wasser funktioniert", nl: "Een telescoop die alleen onder water werkt" }
                ],
                correct: 0,
                explanation: {
                    en: "Named after John Dobson, these telescopes revolutionized amateur astronomy by making large aperture telescopes affordable and portable.",
                    es: "Nombrado por John Dobson, estos telescopios revolucionaron la astronomía amateur haciendo que los telescopios de gran apertura fueran accesibles y portátiles.",
                    de: "Nach John Dobson benannt, revolutionierten diese Teleskope die Amateurastronomiе, indem sie große Öffnungsteleskope erschwinglich und tragbar machten.",
                    nl: "Vernoemd naar John Dobson, revolutioneerden deze telescopen de amateur astronomie door grote opening telescopen betaalbaar en draagbaar te maken."
                }
            },
            {
                question: {
                    en: "What is a goto mount in telescopes?",
                    es: "¿Qué es una montura goto en telescopios?",
                    de: "Was ist eine GoTo-Montierung bei Teleskopen?",
                    nl: "Wat is een goto montuur bij telescopen?"
                },
                options: [
                    { en: "A computerized mount that automatically points the telescope to celestial objects", es: "Una montura computarizada que automáticamente apunta el telescopio a objetos celestes", de: "Eine computergesteuerte Montierung, die das Teleskop automatisch auf Himmelsobjekte ausrichtet", nl: "Een gecomputeriseerd montuur dat de telescoop automatisch richt op hemellichamen" },
                    { en: "A mount you have to go to the store to buy", es: "Una montura que tienes que ir a la tienda a comprar", de: "Eine Montierung, die man im Geschäft kaufen gehen muss", nl: "Een montuur dat je naar de winkel moet gaan om te kopen" },
                    { en: "A mount that goes to different locations", es: "Una montura que va a diferentes ubicaciones", de: "Eine Montierung, die zu verschiedenen Orten geht", nl: "Een montuur dat naar verschillende locaties gaat" },
                    { en: "A broken mount that needs repair", es: "Una montura rota que necesita reparación", de: "Eine kaputte Montierung, die Reparatur benötigt", nl: "Een kapot montuur dat reparatie nodig heeft" }
                ],
                correct: 0,
                explanation: {
                    en: "GoTo mounts contain databases of thousands of celestial objects and can automatically track them as they move across the sky.",
                    es: "Las monturas GoTo contienen bases de datos de miles de objetos celestes y pueden rastrearlos automáticamente mientras se mueven a través del cielo.",
                    de: "GoTo-Montierungen enthalten Datenbanken mit Tausenden von Himmelsobjekten und können diese automatisch verfolgen, während sie sich über den Himmel bewegen.",
                    nl: "Goto monturen bevatten databases van duizenden hemellichamen en kunnen deze automatisch volgen terwijl ze over de hemel bewegen."
                }
            },
            {
                question: {
                    en: "What is the resolution of a telescope?",
                    es: "¿Qué es la resolución de un telescopio?",
                    de: "Was ist die Auflösung eines Teleskops?",
                    nl: "Wat is de resolutie van een telescoop?"
                },
                options: [
                    { en: "The smallest detail or closest objects it can distinguish as separate", es: "El detalle más pequeño u objetos más cercanos que puede distinguir como separados", de: "Das kleinste Detail oder die nächstgelegenen Objekte, die es als getrennt unterscheiden kann", nl: "Het kleinste detail of dichtste objecten die het kan onderscheiden als apart" },
                    { en: "How many pixels the telescope camera has", es: "Cuántos píxeles tiene la cámara del telescopio", de: "Wie viele Pixel die Teleskopkamera hat", nl: "Hoeveel pixels de telescoopcamera heeft" },
                    { en: "The telescope's New Year's promise to work better", es: "La promesa de Año Nuevo del telescopio de funcionar mejor", de: "Das Neujahrsvorsatz des Teleskops, besser zu funktionieren", nl: "Het Nieuwjaarsvoornemen van de telescoop om beter te werken" },
                    { en: "How fast it can focus", es: "Qué tan rápido puede enfocar", de: "Wie schnell es fokussieren kann", nl: "Hoe snel het kan focusseren" }
                ],
                correct: 0,
                explanation: {
                    en: "Resolution is limited by the telescope's aperture size and atmospheric conditions, determining how much fine detail can be seen.",
                    es: "La resolución está limitada por el tamaño de la apertura del telescopio y las condiciones atmosféricas, determinando cuánto detalle fino se puede ver.",
                    de: "Die Auflösung ist durch die Öffnungsgröße des Teleskops und atmosphärische Bedingungen begrenzt und bestimmt, wie viel feines Detail gesehen werden kann.",
                    nl: "Resolutie wordt beperkt door de opening grootte van de telescoop en atmosferische omstandigheden, wat bepaalt hoeveel fijn detail kan worden gezien."
                }
            },
            {
                question: {
                    en: "What are photomultiplier tubes used for in astronomy?",
                    es: "¿Para qué se usan los tubos fotomultiplicadores en astronomía?",
                    de: "Wofür werden Photomultiplierröhren in der Astronomie verwendet?",
                    nl: "Waarvoor worden fotomultiplicator buizen gebruikt in de astronomie?"
                },
                options: [
                    { en: "Detecting extremely faint light by amplifying individual photons", es: "Detectar luz extremadamente tenue amplificando fotones individuales", de: "Extrem schwaches Licht durch Verstärkung einzelner Photonen erkennen", nl: "Het detecteren van extreem zwak licht door individuele fotonen te versterken" },
                    { en: "Making telescopes bigger", es: "Hacer telescopios más grandes", de: "Teleskope größer machen", nl: "Telescopen groter maken" },
                    { en: "Printing astronomical photographs", es: "Imprimir fotografías astronómicas", de: "Astronomische Fotografien drucken", nl: "Astronomische foto's afdrukken" },
                    { en: "Cleaning telescope mirrors", es: "Limpiar espejos de telescopio", de: "Teleskopspiegel reinigen", nl: "Telescoopspiegels schoonmaken" }
                ],
                correct: 0,
                explanation: {
                    en: "These sensitive detectors can amplify single photons millions of times, making it possible to study very faint astronomical objects.",
                    es: "Estos detectores sensibles pueden amplificar fotones individuales millones de veces, haciendo posible estudiar objetos astronómicos muy tenues.",
                    de: "Diese empfindlichen Detektoren können einzelne Photonen millionenfach verstärken und ermöglichen so das Studium sehr schwacher astronomischer Objekte.",
                    nl: "Deze gevoelige detectoren kunnen individuele fotonen miljoenen keren versterken, waardoor het mogelijk wordt zeer zwakke astronomische objecten te bestuderen."
                }
            },
            {
                question: {
                    en: "What is the advantage of using multiple small telescopes instead of one large one?",
                    es: "¿Cuál es la ventaja de usar múltiples telescopios pequeños en lugar de uno grande?",
                    de: "Was ist der Vorteil mehrerer kleiner Teleskope anstelle eines großen?",
                    nl: "Wat is het voordeel van het gebruik van meerdere kleine telescopen in plaats van één grote?"
                },
                options: [
                    { en: "Lower cost, easier maintenance, and redundancy if one breaks", es: "Menor costo, mantenimiento más fácil y redundancia si uno se rompe", de: "Niedrigere Kosten, einfachere Wartung und Redundanz, falls eines kaputt geht", nl: "Lagere kosten, gemakkelijker onderhoud en redundantie als er één kapot gaat" },
                    { en: "They look better in photographs", es: "Se ven mejor en las fotografías", de: "Sie sehen in Fotografien besser aus", nl: "Ze zien er beter uit op foto's" },
                    { en: "They take up more space", es: "Ocupan más espacio", de: "Sie nehmen mehr Platz ein", nl: "Ze nemen meer ruimte in" },
                    { en: "Each one can look at a different planet", es: "Cada uno puede mirar un planeta diferente", de: "Jedes kann einen anderen Planeten betrachten", nl: "Elk kan naar een andere planeet kijken" }
                ],
                correct: 0,
                explanation: {
                    en: "Arrays of smaller telescopes can also be linked together for interferometry, effectively creating a telescope with the resolution of a much larger instrument.",
                    es: "Los conjuntos de telescopios más pequeños también pueden conectarse para interferometría, creando efectivamente un telescopio con la resolución de un instrumento much más grande.",
                    de: "Arrays kleinerer Teleskope können auch für Interferometrie verknüpft werden, wodurch effektiv ein Teleskop mit der Auflösung eines viel größeren Instruments entsteht.",
                    nl: "Arrays van kleinere telescopen kunnen ook gekoppeld worden voor interferometrie, waardoor effectief een telescoop ontstaat met de resolutie van een veel groter instrument."
                }
            },
            {
                question: {
                    en: "What is a coronagraph?",
                    es: "¿Qué es un coronógrafo?",
                    de: "Was ist ein Koronograph?",
                    nl: "Wat is een coronagraaf?"
                },
                options: [
                    { en: "An instrument that blocks the Sun's bright disk to observe its corona", es: "Un instrumento que bloquea el disco brillante del Sol para observar su corona", de: "Ein Instrument, das die helle Sonnenscheibe blockiert, um ihre Korona zu beobachten", nl: "Een instrument dat de heldere schijf van de Zon blokkeert om zijn corona waar te nemen" },
                    { en: "A telescope for looking at crowns", es: "Un telescopio para mirar coronas", de: "Ein Teleskop zum Betrachten von Kronen", nl: "Een telescoop om naar kronen te kijken" },
                    { en: "An instrument that measures coronavirus", es: "Un instrumento que mide coronavirus", de: "Ein Instrument, das Coronavirus misst", nl: "Een instrument dat coronavirus meet" },
                    { en: "A special camera for taking pictures during eclipses", es: "Una cámara especial para tomar fotos durante eclipses", de: "Eine spezielle Kamera zum Fotografieren während Finsternissen", nl: "Een speciale camera voor het maken van foto's tijdens verduisteringen" }
                ],
                correct: 0,
                explanation: {
                    en: "Coronagraphs create an artificial eclipse by blocking the Sun's bright surface, allowing astronomers to study the much fainter solar corona and solar wind.",
                    es: "Los coronógrafos crean un eclipse artificial bloqueando la superficie brillante del Sol, permitiendo a los astrónomos estudiar la corona solar mucho más tenue y el viento solar.",
                    de: "Koronographen erzeugen eine künstliche Finsternis, indem sie die helle Sonnenoberfläche blockieren, wodurch Astronomen die viel schwächere Sonnenkorona und den Sonnenwind studieren können.",
                    nl: "Coronagrafen creëren een kunstmatige verduistering door het heldere oppervlak van de Zon te blokkeren, waardoor astronomen de veel zwakkere zonnecoronan en zonnewind kunnen bestuderen."
                }
            },
            {
                question: {
                    en: "What is the purpose of a field flattener in telescope optics?",
                    es: "¿Cuál es el propósito de un aplanador de campo en la óptica de telescopios?",
                    de: "Was ist der Zweck eines Feldebners in der Teleskopopik?",
                    nl: "Wat is het doel van een veldvlakker in telescoopoptica?"
                },
                options: [
                    { en: "To correct the curved focal plane and make stars sharp across the entire field", es: "Para corregir el plano focal curvo y hacer que las estrellas sean nítidas en todo el campo", de: "Um die gekrümmte Fokalebene zu korrigieren und Sterne im gesamten Feld scharf zu machen", nl: "Om het gebogen brandpuntsvlak te corrigeren en sterren scherp te maken over het hele veld" },
                    { en: "To make the telescope tube flat", es: "Para hacer plano el tubo del telescopio", de: "Um das Teleskoprohr flach zu machen", nl: "Om de telescoopbuis plat te maken" },
                    { en: "To flatten mountains where telescopes are built", es: "Para aplanar montañas donde se construyen telescopios", de: "Um Berge zu ebnen, wo Teleskope gebaut werden", nl: "Om bergen plat te maken waar telescopen worden gebouwd" },
                    { en: "To make images less three-dimensional", es: "Para hacer las imágenes menos tridimensionales", de: "Um Bilder weniger dreidimensional zu machen", nl: "Om beelden minder driedimensionaal te maken" }
                ],
                correct: 0,
                explanation: {
                    en: "Without field flattening, stars at the edges of photographs would appear elongated or blurred, especially in wide-field imaging.",
                    es: "Sin aplanamiento de campo, las estrellas en los bordes de las fotografías aparecerían alargadas o borrosas, especialmente en imágenes de campo amplio.",
                    de: "Ohne Feldebnung würden Sterne an den Rändern von Fotografien verlängert oder unscharf erscheinen, besonders bei Weitfeld-Aufnahmen.",
                    nl: "Zonder veldvlakking zouden sterren aan de randen van foto's verlengd of wazig lijken, vooral bij breedveld beeldvorming."
                }
            },
            {
                question: {
                    en: "What is lucky imaging in astronomy?",
                    es: "¿Qué es la imagen afortunada en astronomía?",
                    de: "Was ist Lucky Imaging in der Astronomie?",
                    nl: "Wat is lucky imaging in de astronomie?"
                },
                options: [
                    { en: "Taking many short exposures and selecting only the sharpest ones", es: "Tomar muchas exposiciones cortas y seleccionar solo las más nítidas", de: "Viele kurze Belichtungen machen und nur die schärfsten auswählen", nl: "Het maken van veel korte belichtingen en alleen de scherpste selecteren" },
                    { en: "Taking pictures when you feel lucky", es: "Tomar fotos cuando te sientes afortunado", de: "Fotos machen, wenn man sich glücklich fühlt", nl: "Foto's maken wanneer je je gelukkig voelt" },
                    { en: "Using a four-leaf clover on your telescope", es: "Usar un trébol de cuatro hojas en tu telescopio", de: "Ein vierblättriges Kleeblatt am Teleskop verwenden", nl: "Een klavertje vier gebruiken op je telescoop" },
                    { en: "Taking random pictures and hoping for the best", es: "Tomar fotos aleatorias y esperar lo mejor", de: "Zufällige Fotos machen und das Beste hoffen", nl: "Willekeurige foto's maken en hopen op het beste" }
                ],
                correct: 0,
                explanation: {
                    en: "This technique takes advantage of brief moments when atmospheric turbulence is minimal, producing much sharper ground-based images.",
                    es: "Esta técnica aprovecha los momentos breves cuando la turbulencia atmosférica es mínima, produciendo imágenes terrestres mucho más nítidas.",
                    de: "Diese Technik nutzt kurze Momente aus, wenn atmosphärische Turbulenz minimal ist, und erzeugt viel schärfere bodenbasierte Bilder.",
                    nl: "Deze techniek maakt gebruik van korte momenten wanneer atmosferische turbulentie minimaal is, waardoor veel scherpere aardgebaseerde beelden ontstaan."
                }
            },
            {
                question: {
                    en: "What is the Extremely Large Telescope (ELT)?",
                    es: "¿Qué es el Telescopio Extremadamente Grande (ELT)?",
                    de: "Was ist das Extremely Large Telescope (ELT)?",
                    nl: "Wat is de Extremely Large Telescope (ELT)?"
                },
                options: [
                    { en: "A planned ground-based telescope with a 39-meter mirror", es: "Un telescopio terrestre planificado con un espejo de 39 metros", de: "Ein geplantes bodenbasiertes Teleskop mit einem 39-Meter-Spiegel", nl: "Een geplande aardgebaseerde telescoop met een 39-meter spiegel" },
                    { en: "The largest telescope ever built in space", es: "El telescopio más grande jamás construido en el espacio", de: "Das größte jemals im Weltraum gebaute Teleskop", nl: "De grootste telescoop ooit gebouwd in de ruimte" },
                    { en: "A telescope that is just very tall", es: "Un telescopio que es simplemente muy alto", de: "Ein Teleskop, das einfach sehr hoch ist", nl: "Een telescoop die gewoon heel hoog is" },
                    { en: "Any telescope larger than 10 meters", es: "Cualquier telescopio mayor de 10 metros", de: "Jedes Teleskop größer als 10 Meter", nl: "Elke telescoop groter dan 10 meter" }
                ],
                correct: 0,
                explanation: {
                    en: "When completed, the ELT will be the world's largest optical telescope, capable of directly imaging exoplanets and studying the early universe.",
                    es: "Cuando se complete, el ELT será el telescopio óptico más grande del mundo, capaz de hacer imágenes directas de exoplanetas y estudiar el universo temprano.",
                    de: "Nach Fertigstellung wird das ELT das weltgrößte optische Teleskop sein, das Exoplaneten direkt abbilden und das frühe Universum studieren kann.",
                    nl: "Wanneer voltooid, zal de ELT 's werelds grootste optische telescoop zijn, in staat tot directe beeldvorming van exoplaneten en het bestuderen van het vroege heelal."
                }
            },
            {
                question: {
                    en: "What challenges do astronomers face when observing from Antarctica?",
                    es: "¿Qué desafíos enfrentan los astrónomos al observar desde la Antártida?",
                    de: "Welche Herausforderungen haben Astronomen bei Beobachtungen von der Antarktis aus?",
                    nl: "Welke uitdagingen hebben astronomen bij het waarnemen vanuit Antarctica?"
                },
                options: [
                    { en: "Extreme cold, months of sunlight, limited access, and equipment maintenance", es: "Frío extremo, meses de luz solar, acceso limitado y mantenimiento de equipos", de: "Extreme Kälte, Monate des Sonnenlichts, begrenzter Zugang und Gerätewartung", nl: "Extreme kou, maanden van zonlicht, beperkte toegang en apparatuuronderhoud" },
                    { en: "Only the cold weather", es: "Solo el clima frío", de: "Nur das kalte Wetter", nl: "Alleen het koude weer" },
                    { en: "Too many penguins interfering", es: "Demasiados pingüinos interfiriendo", de: "Zu viele Pinguine, die stören", nl: "Te veel pinguïns die interfereren" },
                    { en: "The ice is too slippery for telescopes", es: "El hielo es demasiado resbaladizo para telescopios", de: "Das Eis ist zu rutschig für Teleskope", nl: "Het ijs is te glad voor telescopen" }
                ],
                correct: 0,
                explanation: {
                    en: "Despite these challenges, Antarctica offers advantages like extremely dry air, stable atmosphere, and continuous darkness during winter months.",
                    es: "A pesar de estos desafíos, la Antártida ofrece ventajas como aire extremadamente seco, atmósfera estable y oscuridad continua durante los meses de invierno.",
                    de: "Trotz dieser Herausforderungen bietet die Antarktis Vorteile wie extrem trockene Luft, stabile Atmosphäre und kontinuierliche Dunkelheit während der Wintermonate.",
                    nl: "Ondanks deze uitdagingen biedt Antarctica voordelen zoals extreem droge lucht, stabiele atmosfeer en continue duisternis tijdens de wintermaanden."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/space-astronomy', level6);
    }
})();