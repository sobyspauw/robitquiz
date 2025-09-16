(function() {
    const level2 = {
        name: {
            en: "Stars and Constellations",
            es: "Estrellas y Constelaciones",
            de: "Sterne und Sternbilder",
            nl: "Sterren en Sterrenbeelden"
        },
        questions: [
            {
                question: {
                    en: "What is a star?",
                    es: "¿Qué es una estrella?",
                    de: "Was ist ein Stern?",
                    nl: "Wat is een ster?"
                },
                options: [
                    { en: "A ball of hot gas that makes its own light", es: "Una bola de gas caliente que produce su propia luz", de: "Ein Ball aus heißem Gas, der sein eigenes Licht macht", nl: "Een bal van heet gas die zijn eigen licht maakt" },
                    { en: "A cold rock in space", es: "Una roca fría en el espacio", de: "Ein kalter Felsen im Weltraum", nl: "Een koude rots in de ruimte" },
                    { en: "A planet that glows", es: "Un planeta que brilla", de: "Ein Planet, der leuchtet", nl: "Een planeet die gloeit" },
                    { en: "A moon", es: "Una luna", de: "Ein Mond", nl: "Een maan" }
                ],
                correct: 0,
                explanation: {
                    en: "A star is a massive ball of hot gas that produces its own light and heat through nuclear fusion reactions.",
                    es: "Una estrella es una bola masiva de gas caliente que produce su propia luz y calor a través de reacciones de fusión nuclear.",
                    de: "Ein Stern ist ein massiver Ball aus heißem Gas, der durch Kernfusionsreaktionen sein eigenes Licht und seine eigene Wärme erzeugt.",
                    nl: "Een ster is een massieve bal van heet gas die zijn eigen licht en warmte produceert door kernfusiereacties."
                }
            },
            {
                question: {
                    en: "What is the closest star to Earth?",
                    es: "¿Cuál es la estrella más cercana a la Tierra?",
                    de: "Was ist der nächste Stern zur Erde?",
                    nl: "Wat is de dichtstbijzijnde ster bij de Aarde?"
                },
                options: [
                    { en: "The Sun", es: "El Sol", de: "Die Sonne", nl: "De Zon" },
                    { en: "Polaris", es: "Polaris", de: "Polaris", nl: "Polaris" },
                    { en: "Sirius", es: "Sirius", de: "Sirius", nl: "Sirius" },
                    { en: "Vega", es: "Vega", de: "Wega", nl: "Vega" }
                ],
                correct: 0,
                explanation: {
                    en: "The Sun is the closest star to Earth and the only star in our solar system.",
                    es: "El Sol es la estrella más cercana a la Tierra y la única estrella en nuestro sistema solar.",
                    de: "Die Sonne ist der erdnächste Stern und der einzige Stern in unserem Sonnensystem.",
                    nl: "De Zon is de dichtstbijzijnde ster bij de Aarde en de enige ster in ons zonnestelsel."
                }
            },
            {
                question: {
                    en: "What is a constellation?",
                    es: "¿Qué es una constelación?",
                    de: "Was ist ein Sternbild?",
                    nl: "Wat is een sterrenbeeld?"
                },
                options: [
                    { en: "A pattern of stars in the sky", es: "Un patrón de estrellas en el cielo", de: "Ein Muster von Sternen am Himmel", nl: "Een patroon van sterren aan de hemel" },
                    { en: "A group of planets", es: "Un grupo de planetas", de: "Eine Gruppe von Planeten", nl: "Een groep planeten" },
                    { en: "A single bright star", es: "Una sola estrella brillante", de: "Ein einzelner heller Stern", nl: "Een enkele heldere ster" },
                    { en: "A type of galaxy", es: "Un tipo de galaxia", de: "Eine Art Galaxie", nl: "Een soort sterrenstelsel" }
                ],
                correct: 0,
                explanation: {
                    en: "A constellation is a group of stars that appear to form a pattern or picture when viewed from Earth.",
                    es: "Una constelación es un grupo de estrellas que parecen formar un patrón o imagen cuando se ve desde la Tierra.",
                    de: "Ein Sternbild ist eine Gruppe von Sternen, die von der Erde aus betrachtet ein Muster oder Bild zu bilden scheinen.",
                    nl: "Een sterrenbeeld is een groep sterren die een patroon of afbeelding lijken te vormen wanneer ze vanaf de Aarde bekeken worden."
                }
            },
            {
                question: {
                    en: "Which constellation is known as the Big Dipper or Great Bear?",
                    es: "¿Qué constelación es conocida como el Gran Carro o la Osa Mayor?",
                    de: "Welches Sternbild ist als Großer Wagen oder Großer Bär bekannt?",
                    nl: "Welk sterrenbeeld staat bekend als de Grote Beer?"
                },
                options: [
                    { en: "Ursa Major", es: "Osa Mayor", de: "Großer Bär", nl: "Grote Beer" },
                    { en: "Orion", es: "Orión", de: "Orion", nl: "Orion" },
                    { en: "Leo", es: "Leo", de: "Löwe", nl: "Leeuw" },
                    { en: "Cassiopeia", es: "Casiopea", de: "Kassiopeia", nl: "Cassiopeia" }
                ],
                correct: 0,
                explanation: {
                    en: "Ursa Major (the Great Bear) contains the famous Big Dipper asterism, which is easily recognizable in the northern sky.",
                    es: "Osa Mayor (la Gran Osa) contiene el famoso asterismo del Gran Carro, que es fácilmente reconocible en el cielo del norte.",
                    de: "Der Große Bär enthält den berühmten Großen Wagen, der am nördlichen Himmel leicht zu erkennen ist.",
                    nl: "Grote Beer bevat het beroemde asterisme van de Grote Beer, dat gemakkelijk herkenbaar is aan de noordelijke hemel."
                }
            },
            {
                question: {
                    en: "Which star is known as the North Star?",
                    es: "¿Qué estrella es conocida como la Estrella del Norte?",
                    de: "Welcher Stern ist als Polarstern bekannt?",
                    nl: "Welke ster staat bekend als de Poolster?"
                },
                options: [
                    { en: "Polaris", es: "Polaris", de: "Polaris", nl: "Polaris" },
                    { en: "Sirius", es: "Sirius", de: "Sirius", nl: "Sirius" },
                    { en: "Betelgeuse", es: "Betelgeuse", de: "Beteigeuze", nl: "Betelgeuze" },
                    { en: "Vega", es: "Vega", de: "Wega", nl: "Vega" }
                ],
                correct: 0,
                explanation: {
                    en: "Polaris is the North Star and stays in the same position in the sky, making it useful for navigation.",
                    es: "Polaris es la Estrella del Norte y permanece en la misma posición en el cielo, haciéndola útil para la navegación.",
                    de: "Polaris ist der Polarstern und bleibt an derselben Position am Himmel, was ihn für die Navigation nützlich macht.",
                    nl: "Polaris is de Poolster en blijft op dezelfde positie aan de hemel, waardoor hij nuttig is voor navigatie."
                }
            },
            {
                question: {
                    en: "What color are the hottest stars?",
                    es: "¿De qué color son las estrellas más calientes?",
                    de: "Welche Farbe haben die heißesten Sterne?",
                    nl: "Welke kleur hebben de heetste sterren?"
                },
                options: [
                    { en: "Blue or white", es: "Azul o blanco", de: "Blau oder weiß", nl: "Blauw of wit" },
                    { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
                    { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" },
                    { en: "Green", es: "Verde", de: "Grün", nl: "Groen" }
                ],
                correct: 0,
                explanation: {
                    en: "The hottest stars appear blue or white because they burn at extremely high temperatures.",
                    es: "Las estrellas más calientes aparecen azules o blancas porque arden a temperaturas extremadamente altas.",
                    de: "Die heißesten Sterne erscheinen blau oder weiß, weil sie bei extrem hohen Temperaturen brennen.",
                    nl: "De heetste sterren lijken blauw of wit omdat ze bij extreem hoge temperaturen branden."
                }
            },
            {
                question: {
                    en: "What color are the coolest stars?",
                    es: "¿De qué color son las estrellas más frías?",
                    de: "Welche Farbe haben die kühlsten Sterne?",
                    nl: "Welke kleur hebben de koelste sterren?"
                },
                options: [
                    { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
                    { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
                    { en: "White", es: "Blanco", de: "Weiß", nl: "Wit" },
                    { en: "Purple", es: "Púrpura", de: "Lila", nl: "Paars" }
                ],
                correct: 0,
                explanation: {
                    en: "The coolest stars appear red because they burn at lower temperatures than other stars.",
                    es: "Las estrellas más frías aparecen rojas porque arden a temperaturas más bajas que otras estrellas.",
                    de: "Die kühlsten Sterne erscheinen rot, weil sie bei niedrigeren Temperaturen brennen als andere Sterne.",
                    nl: "De koelste sterren lijken rood omdat ze bij lagere temperaturen branden dan andere sterren."
                }
            },
            {
                question: {
                    en: "Which constellation contains the star Betelgeuse?",
                    es: "¿Qué constelación contiene la estrella Betelgeuse?",
                    de: "Welches Sternbild enthält den Stern Beteigeuze?",
                    nl: "Welk sterrenbeeld bevat de ster Betelgeuze?"
                },
                options: [
                    { en: "Orion", es: "Orión", de: "Orion", nl: "Orion" },
                    { en: "Ursa Major", es: "Osa Mayor", de: "Großer Bär", nl: "Grote Beer" },
                    { en: "Leo", es: "Leo", de: "Löwe", nl: "Leeuw" },
                    { en: "Draco", es: "Draco", de: "Drache", nl: "Draak" }
                ],
                correct: 0,
                explanation: {
                    en: "Betelgeuse is a famous red giant star located in the constellation Orion, visible as Orion's shoulder.",
                    es: "Betelgeuse es una famosa estrella gigante roja ubicada en la constelación de Orión, visible como el hombro de Orión.",
                    de: "Beteigeuze ist ein berühmter roter Riesenstern im Sternbild Orion, sichtbar als Orions Schulter.",
                    nl: "Betelgeuze is een beroemde rode reuzenster in het sterrenbeeld Orion, zichtbaar als Orion's schouder."
                }
            },
            {
                question: {
                    en: "How many stars can you typically see with your eyes on a clear night?",
                    es: "¿Cuántas estrellas puedes ver típicamente con tus ojos en una noche clara?",
                    de: "Wie viele Sterne kann man normalerweise mit bloßen Augen in einer klaren Nacht sehen?",
                    nl: "Hoeveel sterren kun je gewoonlijk met je ogen zien op een heldere nacht?"
                },
                options: [
                    { en: "About 2,000-3,000", es: "Aproximadamente 2,000-3,000", de: "Etwa 2.000-3.000", nl: "Ongeveer 2.000-3.000" },
                    { en: "About 50", es: "Aproximadamente 50", de: "Etwa 50", nl: "Ongeveer 50" },
                    { en: "About 1 million", es: "Aproximadamente 1 millón", de: "Etwa 1 Million", nl: "Ongeveer 1 miljoen" },
                    { en: "About 100", es: "Aproximadamente 100", de: "Etwa 100", nl: "Ongeveer 100" }
                ],
                correct: 0,
                explanation: {
                    en: "On a clear, dark night away from city lights, you can see about 2,000-3,000 stars with your naked eyes.",
                    es: "En una noche clara y oscura lejos de las luces de la ciudad, puedes ver aproximadamente 2,000-3,000 estrellas a simple vista.",
                    de: "In einer klaren, dunklen Nacht abseits von Stadtlichtern kann man etwa 2.000-3.000 Sterne mit bloßen Augen sehen.",
                    nl: "Op een heldere, donkere nacht weg van stadslichten kun je ongeveer 2.000-3.000 sterren zien met het blote oog."
                }
            },
            {
                question: {
                    en: "What is the brightest star in our night sky?",
                    es: "¿Cuál es la estrella más brillante en nuestro cielo nocturno?",
                    de: "Was ist der hellste Stern in unserem Nachthimmel?",
                    nl: "Wat is de helderste ster aan onze nachtelijke hemel?"
                },
                options: [
                    { en: "Sirius", es: "Sirius", de: "Sirius", nl: "Sirius" },
                    { en: "Polaris", es: "Polaris", de: "Polaris", nl: "Polaris" },
                    { en: "Vega", es: "Vega", de: "Wega", nl: "Vega" },
                    { en: "Rigel", es: "Rigel", de: "Rigel", nl: "Rigel" }
                ],
                correct: 0,
                explanation: {
                    en: "Sirius is the brightest star in our night sky and can be seen from most places on Earth.",
                    es: "Sirius es la estrella más brillante en nuestro cielo nocturno y se puede ver desde la mayoría de lugares en la Tierra.",
                    de: "Sirius ist der hellste Stern an unserem Nachthimmel und kann von den meisten Orten auf der Erde gesehen werden.",
                    nl: "Sirius is de helderste ster aan onze nachtelijke hemel en kan vanaf de meeste plaatsen op Aarde gezien worden."
                }
            },
            {
                question: {
                    en: "Why do stars twinkle?",
                    es: "¿Por qué titilan las estrellas?",
                    de: "Warum funkeln Sterne?",
                    nl: "Waarom fonkelen sterren?"
                },
                options: [
                    { en: "Earth's atmosphere moves their light around", es: "La atmósfera de la Tierra mueve su luz", de: "Die Erdatmosphäre bewegt ihr Licht herum", nl: "De atmosfeer van de Aarde beweegt hun licht" },
                    { en: "They turn on and off", es: "Se encienden y se apagan", de: "Sie gehen an und aus", nl: "Ze gaan aan en uit" },
                    { en: "They are moving very fast", es: "Se mueven muy rápido", de: "Sie bewegen sich sehr schnell", nl: "Ze bewegen heel snel" },
                    { en: "They are very small", es: "Son muy pequeñas", de: "Sie sind sehr klein", nl: "Ze zijn heel klein" }
                ],
                correct: 0,
                explanation: {
                    en: "Stars twinkle because Earth's atmosphere is constantly moving, which bends and shifts the starlight reaching our eyes.",
                    es: "Las estrellas titilan porque la atmósfera de la Tierra se mueve constantemente, lo que dobla y desvía la luz estelar que llega a nuestros ojos.",
                    de: "Sterne funkeln, weil sich die Erdatmosphäre ständig bewegt, wodurch das Sternenlicht, das unsere Augen erreicht, gebeugt und verschoben wird.",
                    nl: "Sterren fonkelen omdat de atmosfeer van de Aarde constant beweegt, waardoor het sterrenlicht dat onze ogen bereikt wordt gebogen en verschoven."
                }
            },
            {
                question: {
                    en: "What is a red giant star?",
                    es: "¿Qué es una estrella gigante roja?",
                    de: "Was ist ein roter Riesenstern?",
                    nl: "Wat is een rode reus ster?"
                },
                options: [
                    { en: "A large, cool, red star", es: "Una estrella grande, fría y roja", de: "Ein großer, kühler, roter Stern", nl: "Een grote, koele, rode ster" },
                    { en: "A small, hot star", es: "Una estrella pequeña y caliente", de: "Ein kleiner, heißer Stern", nl: "Een kleine, hete ster" },
                    { en: "A planet that looks red", es: "Un planeta que se ve rojo", de: "Ein Planet, der rot aussieht", nl: "Een planeet die er rood uitziet" },
                    { en: "A type of galaxy", es: "Un tipo de galaxia", de: "Eine Art Galaxie", nl: "Een soort sterrenstelsel" }
                ],
                correct: 0,
                explanation: {
                    en: "A red giant is a large, cool star in a later stage of its life, appearing red due to its lower surface temperature.",
                    es: "Una gigante roja es una estrella grande y fría en una etapa posterior de su vida, que aparece roja debido a su menor temperatura superficial.",
                    de: "Ein roter Riese ist ein großer, kühler Stern in einem späteren Stadium seines Lebens, der aufgrund seiner niedrigeren Oberflächentemperatur rot erscheint.",
                    nl: "Een rode reus is een grote, koele ster in een latere fase van zijn leven, die rood lijkt vanwege zijn lagere oppervlaktetemperatuur."
                }
            },
            {
                question: {
                    en: "What constellation looks like a hunter with a belt?",
                    es: "¿Qué constelación parece un cazador con cinturón?",
                    de: "Welches Sternbild sieht aus wie ein Jäger mit einem Gürtel?",
                    nl: "Welk sterrenbeeld lijkt op een jager met een riem?"
                },
                options: [
                    { en: "Orion", es: "Orión", de: "Orion", nl: "Orion" },
                    { en: "Ursa Major", es: "Osa Mayor", de: "Großer Bär", nl: "Grote Beer" },
                    { en: "Leo", es: "Leo", de: "Löwe", nl: "Leeuw" },
                    { en: "Gemini", es: "Géminis", de: "Zwillinge", nl: "Tweelingen" }
                ],
                correct: 0,
                explanation: {
                    en: "Orion is a famous constellation that looks like a hunter, with three bright stars forming his distinctive belt.",
                    es: "Orión es una constelación famosa que parece un cazador, con tres estrellas brillantes formando su cinturón distintivo.",
                    de: "Orion ist ein berühmtes Sternbild, das wie ein Jäger aussieht, mit drei hellen Sternen, die seinen charakteristischen Gürtel bilden.",
                    nl: "Orion is een beroemd sterrenbeeld dat eruitziet als een jager, met drie heldere sterren die zijn kenmerkende riem vormen."
                }
            },
            {
                question: {
                    en: "How are stars born?",
                    es: "¿Cómo nacen las estrellas?",
                    de: "Wie werden Sterne geboren?",
                    nl: "Hoe worden sterren geboren?"
                },
                options: [
                    { en: "From clouds of gas and dust that collapse", es: "De nubes de gas y polvo que colapsan", de: "Aus Gas- und Staubwolken, die kollabieren", nl: "Uit gas- en stofwolken die instorten" },
                    { en: "They split from the Sun", es: "Se dividen del Sol", de: "Sie spalten sich von der Sonne ab", nl: "Ze splitsen af van de Zon" },
                    { en: "Planets turn into stars", es: "Los planetas se convierten en estrellas", de: "Planeten werden zu Sternen", nl: "Planeten veranderen in sterren" },
                    { en: "They appear from nothing", es: "Aparecen de la nada", de: "Sie erscheinen aus dem Nichts", nl: "Ze verschijnen uit het niets" }
                ],
                correct: 0,
                explanation: {
                    en: "Stars are born when huge clouds of gas and dust in space collapse under their own gravity and become hot enough for nuclear fusion to begin.",
                    es: "Las estrellas nacen cuando enormes nubes de gas y polvo en el espacio colapsan bajo su propia gravedad y se vuelven lo suficientemente calientes para que comience la fusión nuclear.",
                    de: "Sterne entstehen, wenn riesige Gas- und Staubwolken im Weltraum unter ihrer eigenen Schwerkraft kollabieren und heiß genug werden, damit die Kernfusion beginnt.",
                    nl: "Sterren worden geboren wanneer enorme gas- en stofwolken in de ruimte instorten onder hun eigen zwaartekracht en heet genoeg worden voor kernfusie om te beginnen."
                }
            },
            {
                question: {
                    en: "What happens when a massive star dies?",
                    es: "¿Qué pasa cuando una estrella masiva muere?",
                    de: "Was passiert, wenn ein massereicher Stern stirbt?",
                    nl: "Wat gebeurt er wanneer een massieve ster sterft?"
                },
                options: [
                    { en: "It explodes in a supernova", es: "Explota en una supernova", de: "Es explodiert in einer Supernova", nl: "Het explodeert in een supernova" },
                    { en: "It turns into a planet", es: "Se convierte en un planeta", de: "Es wird zu einem Planeten", nl: "Het verandert in een planeet" },
                    { en: "It just disappears", es: "Simplemente desaparece", de: "Es verschwindet einfach", nl: "Het verdwijnt gewoon" },
                    { en: "It becomes the Sun", es: "Se convierte en el Sol", de: "Es wird zur Sonne", nl: "Het wordt de Zon" }
                ],
                correct: 0,
                explanation: {
                    en: "When a massive star dies, it explodes in a spectacular supernova, one of the brightest events in the universe.",
                    es: "Cuando una estrella masiva muere, explota en una supernova espectacular, uno de los eventos más brillantes del universo.",
                    de: "Wenn ein massereicher Stern stirbt, explodiert er in einer spektakulären Supernova, einem der hellsten Ereignisse im Universum.",
                    nl: "Wanneer een massieve ster sterft, explodeert hij in een spectaculaire supernova, een van de helderste gebeurtenissen in het universum."
                }
            },
            {
                question: {
                    en: "What is the Southern Cross?",
                    es: "¿Qué es la Cruz del Sur?",
                    de: "Was ist das Kreuz des Südens?",
                    nl: "Wat is het Zuiderkruis?"
                },
                options: [
                    { en: "A constellation visible in the southern sky", es: "Una constelación visible en el cielo del sur", de: "Ein Sternbild, das am südlichen Himmel sichtbar ist", nl: "Een sterrenbeeld zichtbaar aan de zuidelijke hemel" },
                    { en: "A type of star", es: "Un tipo de estrella", de: "Eine Art Stern", nl: "Een soort ster" },
                    { en: "A planet", es: "Un planeta", de: "Ein Planet", nl: "Een planeet" },
                    { en: "A galaxy", es: "Una galaxia", de: "Eine Galaxie", nl: "Een sterrenstelsel" }
                ],
                correct: 0,
                explanation: {
                    en: "The Southern Cross is a small but distinctive constellation visible from the Southern Hemisphere, used for navigation.",
                    es: "La Cruz del Sur es una constelación pequeña pero distintiva visible desde el Hemisferio Sur, usada para la navegación.",
                    de: "Das Kreuz des Südens ist ein kleines, aber markantes Sternbild, das von der Südhalbkugel aus sichtbar ist und zur Navigation verwendet wird.",
                    nl: "Het Zuiderkruis is een klein maar onderscheidend sterrenbeeld zichtbaar vanaf het zuidelijk halfrond, gebruikt voor navigatie."
                }
            },
            {
                question: {
                    en: "What is the Milky Way band we see in the night sky?",
                    es: "¿Qué es la banda de la Vía Láctea que vemos en el cielo nocturno?",
                    de: "Was ist das Milchstraßenband, das wir am Nachthimmel sehen?",
                    nl: "Wat is de Melkwegband die we aan de nachtelijke hemel zien?"
                },
                options: [
                    { en: "Millions of stars in our galaxy seen edge-on", es: "Millones de estrellas en nuestra galaxia vistas de lado", de: "Millionen von Sternen in unserer Galaxie von der Seite gesehen", nl: "Miljoenen sterren in ons sterrenstelsel van de zijkant gezien" },
                    { en: "A single very bright star", es: "Una sola estrella muy brillante", de: "Ein einzelner sehr heller Stern", nl: "Een enkele zeer heldere ster" },
                    { en: "Clouds in space", es: "Nubes en el espacio", de: "Wolken im Weltraum", nl: "Wolken in de ruimte" },
                    { en: "The Moon's light", es: "La luz de la Luna", de: "Das Licht des Mondes", nl: "Het licht van de Maan" }
                ],
                correct: 0,
                explanation: {
                    en: "The Milky Way band is our view of our own galaxy from the inside, showing millions of distant stars concentrated along the galactic plane.",
                    es: "La banda de la Vía Láctea es nuestra vista de nuestra propia galaxia desde adentro, mostrando millones de estrellas distantes concentradas a lo largo del plano galáctico.",
                    de: "Das Milchstraßenband ist unsere Sicht auf unsere eigene Galaxie von innen, die Millionen entfernter Sterne zeigt, die entlang der galaktischen Ebene konzentriert sind.",
                    nl: "De Melkwegband is ons zicht op ons eigen sterrenstelsel van binnenuit, die miljoenen verre sterren toont geconcentreerd langs het galactische vlak."
                }
            },
            {
                question: {
                    en: "Which constellation contains the Little Dipper?",
                    es: "¿Qué constelación contiene el Carro Menor?",
                    de: "Welches Sternbild enthält den Kleinen Wagen?",
                    nl: "Welk sterrenbeeld bevat de Kleine Beer?"
                },
                options: [
                    { en: "Ursa Minor", es: "Osa Menor", de: "Kleiner Bär", nl: "Kleine Beer" },
                    { en: "Ursa Major", es: "Osa Mayor", de: "Großer Bär", nl: "Grote Beer" },
                    { en: "Draco", es: "Draco", de: "Drache", nl: "Draak" },
                    { en: "Cassiopeia", es: "Casiopea", de: "Kassiopeia", nl: "Cassiopeia" }
                ],
                correct: 0,
                explanation: {
                    en: "Ursa Minor (the Little Bear) contains the Little Dipper asterism, with Polaris at the end of its handle.",
                    es: "Osa Menor (la Pequeña Osa) contiene el asterismo del Carro Menor, con Polaris al final de su mango.",
                    de: "Der Kleine Bär enthält den Kleinen Wagen, mit Polaris am Ende seines Griffs.",
                    nl: "Kleine Beer bevat het asterisme van de Kleine Beer, met Polaris aan het einde van zijn steel."
                }
            },
            {
                question: {
                    en: "What are binary stars?",
                    es: "¿Qué son las estrellas binarias?",
                    de: "Was sind Doppelsterne?",
                    nl: "Wat zijn dubbelsterren?"
                },
                options: [
                    { en: "Two stars that orbit around each other", es: "Dos estrellas que orbitan una alrededor de la otra", de: "Zwei Sterne, die umeinander kreisen", nl: "Twee sterren die om elkaar heen draaien" },
                    { en: "Stars that are exactly the same", es: "Estrellas que son exactamente iguales", de: "Sterne, die genau gleich sind", nl: "Sterren die precies hetzelfde zijn" },
                    { en: "Stars made of two different gases", es: "Estrellas hechas de dos gases diferentes", de: "Sterne aus zwei verschiedenen Gasen", nl: "Sterren gemaakt van twee verschillende gassen" },
                    { en: "Stars that change color", es: "Estrellas que cambian de color", de: "Sterne, die ihre Farbe ändern", nl: "Sterren die van kleur veranderen" }
                ],
                correct: 0,
                explanation: {
                    en: "Binary stars are two stars that orbit around each other, held together by their mutual gravitational attraction.",
                    es: "Las estrellas binarias son dos estrellas que orbitan una alrededor de la otra, mantenidas juntas por su atracción gravitacional mutua.",
                    de: "Doppelsterne sind zwei Sterne, die umeinander kreisen und durch ihre gegenseitige Gravitationsanziehung zusammengehalten werden.",
                    nl: "Dubbelsterren zijn twee sterren die om elkaar heen draaien, bij elkaar gehouden door hun wederzijdse zwaartekrachtaantrekking."
                }
            },
            {
                question: {
                    en: "What is a white dwarf star?",
                    es: "¿Qué es una estrella enana blanca?",
                    de: "Was ist ein weißer Zwergstern?",
                    nl: "Wat is een witte dwergster?"
                },
                options: [
                    { en: "The hot, dense core left after a star dies", es: "El núcleo caliente y denso que queda después de que muere una estrella", de: "Der heiße, dichte Kern, der nach dem Tod eines Sterns übrig bleibt", nl: "De hete, dichte kern die overblijft nadat een ster sterft" },
                    { en: "A very small star", es: "Una estrella muy pequeña", de: "Ein sehr kleiner Stern", nl: "Een heel kleine ster" },
                    { en: "A star that is white colored", es: "Una estrella que es de color blanco", de: "Ein Stern, der weiß gefärbt ist", nl: "Een ster die wit gekleurd is" },
                    { en: "A planet", es: "Un planeta", de: "Ein Planet", nl: "Een planeet" }
                ],
                correct: 0,
                explanation: {
                    en: "A white dwarf is the small, hot, dense remnant left behind when a medium-sized star like our Sun dies.",
                    es: "Una enana blanca es el remanente pequeño, caliente y denso que queda cuando una estrella de tamaño mediano como nuestro Sol muere.",
                    de: "Ein weißer Zwerg ist der kleine, heiße, dichte Überrest, der zurückbleibt, wenn ein mittelgroßer Stern wie unsere Sonne stirbt.",
                    nl: "Een witte dwerg is het kleine, hete, dichte overblijfsel dat achterblijft wanneer een middelgrote ster zoals onze Zon sterft."
                }
            },
            {
                question: {
                    en: "Which star is at the end of the Little Dipper's handle?",
                    es: "¿Qué estrella está al final del mango del Carro Menor?",
                    de: "Welcher Stern ist am Ende des Griffs des Kleinen Wagens?",
                    nl: "Welke ster staat aan het einde van de steel van de Kleine Beer?"
                },
                options: [
                    { en: "Polaris", es: "Polaris", de: "Polaris", nl: "Polaris" },
                    { en: "Sirius", es: "Sirius", de: "Sirius", nl: "Sirius" },
                    { en: "Vega", es: "Vega", de: "Wega", nl: "Vega" },
                    { en: "Betelgeuse", es: "Betelgeuse", de: "Beteigeuze", nl: "Betelgeuze" }
                ],
                correct: 0,
                explanation: {
                    en: "Polaris, the North Star, is located at the end of the Little Dipper's handle and marks the direction of north.",
                    es: "Polaris, la Estrella del Norte, está ubicada al final del mango del Carro Menor y marca la dirección del norte.",
                    de: "Polaris, der Polarstern, befindet sich am Ende des Griffs des Kleinen Wagens und zeigt die Richtung Norden an.",
                    nl: "Polaris, de Poolster, bevindt zich aan het einde van de steel van de Kleine Beer en wijst de richting van het noorden aan."
                }
            },
            {
                question: {
                    en: "What makes our Sun different from other stars?",
                    es: "¿Qué hace diferente a nuestro Sol de otras estrellas?",
                    de: "Was macht unsere Sonne anders als andere Sterne?",
                    nl: "Wat maakt onze Zon anders dan andere sterren?"
                },
                options: [
                    { en: "It's much closer to us", es: "Está mucho más cerca de nosotros", de: "Es ist uns viel näher", nl: "Het staat veel dichter bij ons" },
                    { en: "It's much larger", es: "Es mucho más grande", de: "Es ist viel größer", nl: "Het is veel groter" },
                    { en: "It's a different color", es: "Es de un color diferente", de: "Es hat eine andere Farbe", nl: "Het heeft een andere kleur" },
                    { en: "It's made of different materials", es: "Está hecho de diferentes materiales", de: "Es besteht aus anderen Materialien", nl: "Het is gemaakt van andere materialen" }
                ],
                correct: 0,
                explanation: {
                    en: "Our Sun is a very ordinary star, but it appears different because it's much closer to us than any other star.",
                    es: "Nuestro Sol es una estrella muy ordinaria, pero parece diferente porque está mucho más cerca de nosotros que cualquier otra estrella.",
                    de: "Unsere Sonne ist ein sehr gewöhnlicher Stern, aber sie erscheint anders, weil sie uns viel näher ist als jeder andere Stern.",
                    nl: "Onze Zon is een heel gewone ster, maar lijkt anders omdat hij veel dichter bij ons staat dan welke andere ster ook."
                }
            },
            {
                question: {
                    en: "What is a neutron star?",
                    es: "¿Qué es una estrella de neutrones?",
                    de: "Was ist ein Neutronenstern?",
                    nl: "Wat is een neutronenster?"
                },
                options: [
                    { en: "An extremely dense star made of neutrons", es: "Una estrella extremadamente densa hecha de neutrones", de: "Ein extrem dichter Stern aus Neutronen", nl: "Een extreem dichte ster gemaakt van neutronen" },
                    { en: "A star with no charge", es: "Una estrella sin carga", de: "Ein Stern ohne Ladung", nl: "Een ster zonder lading" },
                    { en: "A star that doesn't shine", es: "Una estrella que no brilla", de: "Ein Stern, der nicht leuchtet", nl: "Een ster die niet schijnt" },
                    { en: "A very new star", es: "Una estrella muy nueva", de: "Ein sehr neuer Stern", nl: "Een heel nieuwe ster" }
                ],
                correct: 0,
                explanation: {
                    en: "A neutron star is incredibly dense, formed when a massive star collapses and its matter gets squeezed into neutrons.",
                    es: "Una estrella de neutrones es increíblemente densa, formada cuando una estrella masiva colapsa y su materia se comprime en neutrones.",
                    de: "Ein Neutronenstern ist unglaublich dicht, entstanden wenn ein massereicher Stern kollabiert und seine Materie zu Neutronen zusammengepresst wird.",
                    nl: "Een neutronenster is ongelooflijk dicht, gevormd wanneer een massieve ster instort en zijn materie wordt samengeperst tot neutronen."
                }
            },
            {
                question: {
                    en: "How long does light from the Sun take to reach Earth?",
                    es: "¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?",
                    de: "Wie lange braucht das Licht der Sonne, um die Erde zu erreichen?",
                    nl: "Hoe lang duurt het voordat licht van de Zon de Aarde bereikt?"
                },
                options: [
                    { en: "About 8 minutes", es: "Aproximadamente 8 minutos", de: "Etwa 8 Minuten", nl: "Ongeveer 8 minuten" },
                    { en: "1 second", es: "1 segundo", de: "1 Sekunde", nl: "1 seconde" },
                    { en: "1 hour", es: "1 hora", de: "1 Stunde", nl: "1 uur" },
                    { en: "1 day", es: "1 día", de: "1 Tag", nl: "1 dag" }
                ],
                correct: 0,
                explanation: {
                    en: "Light from the Sun travels at the speed of light and takes about 8 minutes to cover the 93 million miles to Earth.",
                    es: "La luz del Sol viaja a la velocidad de la luz y tarda aproximadamente 8 minutos en recorrer los 150 millones de kilómetros hasta la Tierra.",
                    de: "Das Licht der Sonne reist mit Lichtgeschwindigkeit und braucht etwa 8 Minuten, um die 150 Millionen Kilometer zur Erde zu überbrücken.",
                    nl: "Licht van de Zon reist met de lichtsnelheid en doet er ongeveer 8 minuten over om de 150 miljoen kilometer naar de Aarde af te leggen."
                }
            },
            {
                question: {
                    en: "What constellation looks like a lion?",
                    es: "¿Qué constelación parece un león?",
                    de: "Welches Sternbild sieht aus wie ein Löwe?",
                    nl: "Welk sterrenbeeld lijkt op een leeuw?"
                },
                options: [
                    { en: "Leo", es: "Leo", de: "Löwe", nl: "Leeuw" },
                    { en: "Orion", es: "Orión", de: "Orion", nl: "Orion" },
                    { en: "Ursa Major", es: "Osa Mayor", de: "Großer Bär", nl: "Grote Beer" },
                    { en: "Cassiopeia", es: "Casiopea", de: "Kassiopeia", nl: "Cassiopeia" }
                ],
                correct: 0,
                explanation: {
                    en: "Leo the Lion is a zodiac constellation that really does look like a lion with a distinctive mane and body shape.",
                    es: "Leo el León es una constelación del zodíaco que realmente parece un león con una melena distintiva y forma corporal.",
                    de: "Löwe ist ein Tierkreis-Sternbild, das wirklich wie ein Löwe mit einer markanten Mähne und Körperform aussieht.",
                    nl: "Leeuw is een sterrenbeeld van de dierenriem dat er echt uitziet als een leeuw met een kenmerkende manen en lichaamsvorm."
                }
            },
            {
                question: {
                    en: "What constellation is shaped like a 'W'?",
                    es: "¿Qué constelación tiene forma de 'W'?",
                    de: "Welches Sternbild hat die Form eines 'W'?",
                    nl: "Welk sterrenbeeld heeft de vorm van een 'W'?"
                },
                options: [
                    { en: "Cassiopeia", es: "Casiopea", de: "Kassiopeia", nl: "Cassiopeia" },
                    { en: "Orion", es: "Orión", de: "Orion", nl: "Orion" },
                    { en: "Ursa Major", es: "Osa Mayor", de: "Großer Bär", nl: "Grote Beer" },
                    { en: "Leo", es: "Leo", de: "Löwe", nl: "Leeuw" }
                ],
                correct: 0,
                explanation: {
                    en: "Cassiopeia looks like the letter 'W' or 'M' depending on how it's oriented in the sky at different times.",
                    es: "Casiopea parece la letra 'W' o 'M' dependiendo de cómo esté orientada en el cielo en diferentes momentos.",
                    de: "Kassiopeia sieht aus wie der Buchstabe 'W' oder 'M', je nachdem, wie sie zu verschiedenen Zeiten am Himmel orientiert ist.",
                    nl: "Cassiopeia lijkt op de letter 'W' of 'M' afhankelijk van hoe het op verschillende tijden aan de hemel georiënteerd is."
                }
            },
            {
                question: {
                    en: "Why can't we see stars during the day?",
                    es: "¿Por qué no podemos ver estrellas durante el día?",
                    de: "Warum können wir tagsüber keine Sterne sehen?",
                    nl: "Waarom kunnen we overdag geen sterren zien?"
                },
                options: [
                    { en: "The Sun's light is too bright", es: "La luz del Sol es demasiado brillante", de: "Das Licht der Sonne ist zu hell", nl: "Het licht van de Zon is te helder" },
                    { en: "Stars turn off during the day", es: "Las estrellas se apagan durante el día", de: "Sterne gehen tagsüber aus", nl: "Sterren gaan overdag uit" },
                    { en: "Stars hide behind the Moon", es: "Las estrellas se esconden detrás de la Luna", de: "Sterne verstecken sich hinter dem Mond", nl: "Sterren verstoppen zich achter de Maan" },
                    { en: "Stars move away during the day", es: "Las estrellas se alejan durante el día", de: "Sterne bewegen sich tagsüber weg", nl: "Sterren bewegen weg overdag" }
                ],
                correct: 0,
                explanation: {
                    en: "The Sun's light is so bright that it overwhelms the much fainter light from distant stars, making them invisible during daytime.",
                    es: "La luz del Sol es tan brillante que supera la luz mucho más tenue de las estrellas distantes, haciéndolas invisibles durante el día.",
                    de: "Das Sonnenlicht ist so hell, dass es das viel schwächere Licht entfernter Sterne überwältigt und sie tagsüber unsichtbar macht.",
                    nl: "Het zonlicht is zo helder dat het het veel zwakkere licht van verre sterren overschaduwt, waardoor ze overdag onzichtbaar worden."
                }
            },
            {
                question: {
                    en: "What are the three stars in Orion's belt called?",
                    es: "¿Cómo se llaman las tres estrellas en el cinturón de Orión?",
                    de: "Wie heißen die drei Sterne in Orions Gürtel?",
                    nl: "Hoe heten de drie sterren in Orions gordel?"
                },
                options: [
                    { en: "Alnitak, Alnilam, and Mintaka", es: "Alnitak, Alnilam y Mintaka", de: "Alnitak, Alnilam und Mintaka", nl: "Alnitak, Alnilam en Mintaka" },
                    { en: "Alpha, Beta, and Gamma", es: "Alfa, Beta y Gamma", de: "Alpha, Beta und Gamma", nl: "Alpha, Beta en Gamma" },
                    { en: "Tom, Dick, and Harry", es: "Tom, Dick y Harry", de: "Tom, Dick und Harry", nl: "Tom, Dick en Harry" },
                    { en: "Red, Blue, and Green", es: "Rojo, Azul y Verde", de: "Rot, Blau und Grün", nl: "Rood, Blauw en Groen" }
                ],
                correct: 0,
                explanation: {
                    en: "These are the traditional Arabic names for the three bright stars that form Orion's distinctive belt in the night sky.",
                    es: "Estos son los nombres árabes tradicionales de las tres estrellas brillantes que forman el cinturón distintivo de Orión en el cielo nocturno.",
                    de: "Dies sind die traditionellen arabischen Namen für die drei hellen Sterne, die Orions markanten Gürtel am Nachthimmel bilden.",
                    nl: "Dit zijn de traditionele Arabische namen voor de drie heldere sterren die Orions kenmerkende gordel aan de nachtelijke hemel vormen."
                }
            },
            {
                question: {
                    en: "What is stellar magnitude?",
                    es: "¿Qué es la magnitud estelar?",
                    de: "Was ist die Sternenhelligkeit?",
                    nl: "Wat is stellaire magnitude?"
                },
                options: [
                    { en: "A measure of how bright a star appears", es: "Una medida de qué tan brillante parece una estrella", de: "Ein Maß dafür, wie hell ein Stern erscheint", nl: "Een maat voor hoe helder een ster lijkt" },
                    { en: "The size of a star", es: "El tamaño de una estrella", de: "Die Größe eines Sterns", nl: "De grootte van een ster" },
                    { en: "The age of a star", es: "La edad de una estrella", de: "Das Alter eines Sterns", nl: "De leeftijd van een ster" },
                    { en: "The distance to a star", es: "La distancia a una estrella", de: "Die Entfernung zu einem Stern", nl: "De afstand tot een ster" }
                ],
                correct: 0,
                explanation: {
                    en: "Stellar magnitude is the astronomical scale used to measure how bright stars appear from Earth, with lower numbers being brighter.",
                    es: "La magnitud estelar es la escala astronómica usada para medir qué tan brillantes parecen las estrellas desde la Tierra, con números más bajos siendo más brillantes.",
                    de: "Die Sternenhelligkeit ist die astronomische Skala zur Messung der scheinbaren Helligkeit von Sternen von der Erde aus, wobei niedrigere Zahlen heller sind.",
                    nl: "Stellaire magnitude is de astronomische schaal die wordt gebruikt om te meten hoe helder sterren vanaf de Aarde lijken, waarbij lagere getallen helderder zijn."
                }
            },
            {
                question: {
                    en: "Which constellation contains the star Vega?",
                    es: "¿Qué constelación contiene la estrella Vega?",
                    de: "Welches Sternbild enthält den Stern Wega?",
                    nl: "Welk sterrenbeeld bevat de ster Vega?"
                },
                options: [
                    { en: "Lyra", es: "Lyra", de: "Leier", nl: "Lier" },
                    { en: "Orion", es: "Orión", de: "Orion", nl: "Orion" },
                    { en: "Ursa Major", es: "Osa Mayor", de: "Großer Bär", nl: "Grote Beer" },
                    { en: "Leo", es: "Leo", de: "Löwe", nl: "Leeuw" }
                ],
                correct: 0,
                explanation: {
                    en: "Vega is one of the brightest stars in the northern sky and sits in the small constellation Lyra, the Harp.",
                    es: "Vega es una de las estrellas más brillantes en el cielo del norte y se encuentra en la pequeña constelación Lyra, el Arpa.",
                    de: "Wega ist einer der hellsten Sterne am nördlichen Himmel und befindet sich im kleinen Sternbild Leier.",
                    nl: "Vega is een van de helderste sterren aan de noordelijke hemel en bevindt zich in het kleine sterrenbeeld Lier."
                }
            },
            {
                question: {
                    en: "What is a supernova?",
                    es: "¿Qué es una supernova?",
                    de: "Was ist eine Supernova?",
                    nl: "Wat is een supernova?"
                },
                options: [
                    { en: "The explosive death of a massive star", es: "La muerte explosiva de una estrella masiva", de: "Der explosive Tod eines massereichen Sterns", nl: "De explosieve dood van een massieve ster" },
                    { en: "A very bright new star", es: "Una estrella nueva muy brillante", de: "Ein sehr heller neuer Stern", nl: "Een zeer heldere nieuwe ster" },
                    { en: "A star that moves very fast", es: "Una estrella que se mueve muy rápido", de: "Ein Stern, der sich sehr schnell bewegt", nl: "Een ster die heel snel beweegt" },
                    { en: "A star larger than the Sun", es: "Una estrella más grande que el Sol", de: "Ein Stern größer als die Sonne", nl: "Een ster groter dan de Zon" }
                ],
                correct: 0,
                explanation: {
                    en: "A supernova is one of the most powerful explosions in the universe, marking the dramatic end of a massive star's life.",
                    es: "Una supernova es una de las explosiones más poderosas en el universo, marcando el final dramático de la vida de una estrella masiva.",
                    de: "Eine Supernova ist eine der mächtigsten Explosionen im Universum und markiert das dramatische Ende des Lebens eines massereichen Sterns.",
                    nl: "Een supernova is een van de krachtigste explosies in het heelal, die het dramatische einde van het leven van een massieve ster markeert."
                }
            },
            {
                question: {
                    en: "How do astronomers measure distances to nearby stars?",
                    es: "¿Cómo miden los astrónomos las distancias a las estrellas cercanas?",
                    de: "Wie messen Astronomen Entfernungen zu nahegelegenen Sternen?",
                    nl: "Hoe meten astronomen afstanden tot nabije sterren?"
                },
                options: [
                    { en: "Using parallax - how stars appear to move as Earth orbits", es: "Usando paralaje - cómo las estrellas parecen moverse mientras la Tierra orbita", de: "Mit Parallaxe - wie Sterne sich zu bewegen scheinen, während die Erde umkreist", nl: "Door parallax te gebruiken - hoe sterren lijken te bewegen terwijl de Aarde om de Zon draait" },
                    { en: "By flying to them", es: "Volando hacia ellas", de: "Indem man zu ihnen fliegt", nl: "Door er naartoe te vliegen" },
                    { en: "By measuring their brightness only", es: "Midiendo solo su brillo", de: "Nur durch Messung ihrer Helligkeit", nl: "Door alleen hun helderheid te meten" },
                    { en: "By counting how many there are", es: "Contando cuántas hay", de: "Indem man zählt, wie viele es gibt", nl: "Door te tellen hoeveel er zijn" }
                ],
                correct: 0,
                explanation: {
                    en: "Parallax uses Earth's orbit around the Sun to measure how stars appear to shift position, allowing distance calculations.",
                    es: "El paralaje usa la órbita de la Tierra alrededor del Sol para medir cómo las estrellas parecen cambiar de posición, permitiendo cálculos de distancia.",
                    de: "Parallaxe nutzt die Erdumlaufbahn um die Sonne, um zu messen, wie Sterne ihre Position zu verschieben scheinen, was Entfernungsberechnungen ermöglicht.",
                    nl: "Parallax gebruikt de baan van de Aarde rond de Zon om te meten hoe sterren van positie lijken te verschuiven, wat afstandsberekeningen mogelijk maakt."
                }
            },
            {
                question: {
                    en: "What will eventually happen to our Sun?",
                    es: "¿Qué pasará eventualmente con nuestro Sol?",
                    de: "Was wird schließlich mit unserer Sonne geschehen?",
                    nl: "Wat zal er uiteindelijk met onze Zon gebeuren?"
                },
                options: [
                    { en: "It will become a red giant, then a white dwarf", es: "Se convertirá en una gigante roja, luego en una enana blanca", de: "Es wird ein roter Riese, dann ein weißer Zwerg", nl: "Het zal een rode reus worden, dan een witte dwerg" },
                    { en: "It will explode immediately", es: "Explotará inmediatamente", de: "Es wird sofort explodieren", nl: "Het zal onmiddellijk exploderen" },
                    { en: "It will turn into a planet", es: "Se convertirá en un planeta", de: "Es wird zu einem Planeten", nl: "Het zal veranderen in een planeet" },
                    { en: "It will stay exactly the same forever", es: "Permanecerá exactamente igual para siempre", de: "Es wird für immer genau gleich bleiben", nl: "Het zal voor altijd precies hetzelfde blijven" }
                ],
                correct: 0,
                explanation: {
                    en: "Our Sun is a medium-sized star that will expand into a red giant in about 5 billion years, then shrink to a white dwarf.",
                    es: "Nuestro Sol es una estrella de tamaño mediano que se expandirá a una gigante roja en aproximadamente 5 mil millones de años, luego se encogerá a una enana blanca.",
                    de: "Unsere Sonne ist ein mittelgroßer Stern, der sich in etwa 5 Milliarden Jahren zu einem roten Riesen ausdehnen und dann zu einem weißen Zwerg schrumpfen wird.",
                    nl: "Onze Zon is een middelgrote ster die zich over ongeveer 5 miljard jaar zal uitbreiden tot een rode reus en dan zal krimpen tot een witte dwerg."
                }
            },
            {
                question: {
                    en: "What is the Summer Triangle?",
                    es: "¿Qué es el Triángulo de Verano?",
                    de: "Was ist das Sommerdreieck?",
                    nl: "Wat is de Zomerdriehoek?"
                },
                options: [
                    { en: "A pattern formed by three bright stars: Vega, Altair, and Deneb", es: "Un patrón formado por tres estrellas brillantes: Vega, Altair y Deneb", de: "Ein Muster aus drei hellen Sternen: Wega, Altair und Deneb", nl: "Een patroon gevormd door drie heldere sterren: Vega, Altair en Deneb" },
                    { en: "A constellation only visible in summer", es: "Una constelación solo visible en verano", de: "Ein Sternbild, das nur im Sommer sichtbar ist", nl: "Een sterrenbeeld dat alleen in de zomer zichtbaar is" },
                    { en: "Three planets in a triangle", es: "Tres planetas en triángulo", de: "Drei Planeten in einem Dreieck", nl: "Drie planeten in een driehoek" },
                    { en: "A type of star", es: "Un tipo de estrella", de: "Eine Art Stern", nl: "Een soort ster" }
                ],
                correct: 0,
                explanation: {
                    en: "The Summer Triangle is a prominent asterism formed by three bright stars from different constellations, visible in summer.",
                    es: "El Triángulo de Verano es un asterismo prominente formado por tres estrellas brillantes de diferentes constelaciones, visible en verano.",
                    de: "Das Sommerdreieck ist ein markanter Asterismus, der von drei hellen Sternen aus verschiedenen Sternbildern gebildet wird und im Sommer sichtbar ist.",
                    nl: "De Zomerdriehoek is een prominent asterisme gevormd door drie heldere sterren uit verschillende sterrenbeelden, zichtbaar in de zomer."
                }
            },
            {
                question: {
                    en: "Which star is known as the 'Dog Star'?",
                    es: "¿Qué estrella es conocida como la 'Estrella del Perro'?",
                    de: "Welcher Stern ist als 'Hundsstern' bekannt?",
                    nl: "Welke ster staat bekend als de 'Hondenster'?"
                },
                options: [
                    { en: "Sirius", es: "Sirius", de: "Sirius", nl: "Sirius" },
                    { en: "Polaris", es: "Polaris", de: "Polaris", nl: "Polaris" },
                    { en: "Vega", es: "Vega", de: "Wega", nl: "Vega" },
                    { en: "Betelgeuse", es: "Betelgeuse", de: "Beteigeuze", nl: "Betelgeuze" }
                ],
                correct: 0,
                explanation: {
                    en: "Sirius is called the Dog Star because it's the brightest star in the constellation Canis Major, the Great Dog.",
                    es: "Sirius se llama la Estrella del Perro porque es la estrella más brillante en la constelación Canis Major, el Gran Perro.",
                    de: "Sirius wird Hundsstern genannt, weil er der hellste Stern im Sternbild Canis Major, dem Großen Hund, ist.",
                    nl: "Sirius wordt de Hondenster genoemd omdat het de helderste ster is in het sterrenbeeld Canis Major, de Grote Hond."
                }
            },
            {
                question: {
                    en: "What makes stars shine?",
                    es: "¿Qué hace que las estrellas brillen?",
                    de: "Was bringt Sterne zum Leuchten?",
                    nl: "Wat zorgt ervoor dat sterren schijnen?"
                },
                options: [
                    { en: "Nuclear fusion in their cores", es: "Fusión nuclear en sus núcleos", de: "Kernfusion in ihren Kernen", nl: "Kernfusie in hun kernen" },
                    { en: "They reflect sunlight", es: "Reflejan la luz solar", de: "Sie reflektieren Sonnenlicht", nl: "Ze reflecteren zonlicht" },
                    { en: "They burn like fire", es: "Arden como fuego", de: "Sie brennen wie Feuer", nl: "Ze branden als vuur" },
                    { en: "Electric lights inside them", es: "Luces eléctricas dentro de ellas", de: "Elektrische Lichter in ihnen", nl: "Elektrische lichten in hen" }
                ],
                correct: 0,
                explanation: {
                    en: "Nuclear fusion in stellar cores converts hydrogen into helium, releasing enormous amounts of energy that makes stars shine.",
                    es: "La fusión nuclear en los núcleos estelares convierte hidrógeno en helio, liberando enormes cantidades de energía que hace brillar a las estrellas.",
                    de: "Kernfusion in Sternkernen wandelt Wasserstoff in Helium um und setzt enorme Energiemengen frei, die Sterne zum Leuchten bringen.",
                    nl: "Kernfusie in stellaire kernen zet waterstof om in helium en geeft enorme hoeveelheden energie vrij die sterren doet schijnen."
                }
            },
            {
                question: {
                    en: "What is the zodiac?",
                    es: "¿Qué es el zodíaco?",
                    de: "Was ist der Tierkreis?",
                    nl: "Wat is de dierenriem?"
                },
                options: [
                    { en: "Twelve constellations the Sun appears to move through", es: "Doce constelaciones por las que parece moverse el Sol", de: "Zwölf Sternbilder, durch die sich die Sonne zu bewegen scheint", nl: "Twaalf sterrenbeelden waar de Zon doorheen lijkt te bewegen" },
                    { en: "A group of planets", es: "Un grupo de planetas", de: "Eine Gruppe von Planeten", nl: "Een groep planeten" },
                    { en: "Twelve different types of stars", es: "Doce tipos diferentes de estrellas", de: "Zwölf verschiedene Arten von Sternen", nl: "Twaalf verschillende soorten sterren" },
                    { en: "Animals living in space", es: "Animales que viven en el espacio", de: "Tiere, die im Weltraum leben", nl: "Dieren die in de ruimte leven" }
                ],
                correct: 0,
                explanation: {
                    en: "The zodiac is a band of constellations along the Sun's apparent path through the sky, used in astronomy and astrology.",
                    es: "El zodíaco es una banda de constelaciones a lo largo del camino aparente del Sol a través del cielo, usado en astronomía y astrología.",
                    de: "Der Tierkreis ist ein Band von Sternbildern entlang des scheinbaren Weges der Sonne durch den Himmel, verwendet in Astronomie und Astrologie.",
                    nl: "De dierenriem is een band van sterrenbeelden langs het schijnbare pad van de Zon door de hemel, gebruikt in astronomie en astrologie."
                }
            },
            {
                question: {
                    en: "How far away is the nearest star other than the Sun?",
                    es: "¿Qué tan lejos está la estrella más cercana además del Sol?",
                    de: "Wie weit entfernt ist der nächste Stern außer der Sonne?",
                    nl: "Hoe ver weg is de dichtstbijzijnde ster behalve de Zon?"
                },
                options: [
                    { en: "About 4.3 light-years (Proxima Centauri)", es: "Aproximadamente 4.3 años luz (Próxima Centauri)", de: "Etwa 4,3 Lichtjahre (Proxima Centauri)", nl: "Ongeveer 4,3 lichtjaren (Proxima Centauri)" },
                    { en: "100 light-years", es: "100 años luz", de: "100 Lichtjahre", nl: "100 lichtjaren" },
                    { en: "1 light-year", es: "1 año luz", de: "1 Lichtjahr", nl: "1 lichtjaar" },
                    { en: "1,000 light-years", es: "1,000 años luz", de: "1.000 Lichtjahre", nl: "1.000 lichtjaren" }
                ],
                correct: 0,
                explanation: {
                    en: "Proxima Centauri is the closest star to our solar system, located in the Alpha Centauri star system.",
                    es: "Próxima Centauri es la estrella más cercana a nuestro sistema solar, ubicada en el sistema estelar Alpha Centauri.",
                    de: "Proxima Centauri ist der nächste Stern zu unserem Sonnensystem, gelegen im Alpha Centauri Sternsystem.",
                    nl: "Proxima Centauri is de dichtstbijzijnde ster bij ons zonnestelsel, gelegen in het Alpha Centauri sterrenststeem."
                }
            },
            {
                question: {
                    en: "What causes different seasons of star visibility?",
                    es: "¿Qué causa las diferentes estaciones de visibilidad de estrellas?",
                    de: "Was verursacht verschiedene Jahreszeiten der Sternsichtbarkeit?",
                    nl: "Wat veroorzaakt verschillende seizoenen van sterzichtbaarheid?"
                },
                options: [
                    { en: "Earth's orbit around the Sun changes our night sky view", es: "La órbita de la Tierra alrededor del Sol cambia nuestra vista del cielo nocturno", de: "Die Erdumlaufbahn um die Sonne ändert unsere Nachthimmelansicht", nl: "De baan van de Aarde rond de Zon verandert ons uitzicht op de nachtelijke hemel" },
                    { en: "Stars move to different places", es: "Las estrellas se mueven a diferentes lugares", de: "Sterne bewegen sich an verschiedene Orte", nl: "Sterren bewegen naar verschillende plaatsen" },
                    { en: "Stars are brighter in winter", es: "Las estrellas son más brillantes en invierno", de: "Sterne sind im Winter heller", nl: "Sterren zijn helderder in de winter" },
                    { en: "The atmosphere changes", es: "La atmósfera cambia", de: "Die Atmosphäre ändert sich", nl: "De atmosfeer verandert" }
                ],
                correct: 0,
                explanation: {
                    en: "As Earth orbits the Sun, different parts of the night sky become visible, giving us seasonal constellations.",
                    es: "Mientras la Tierra orbita el Sol, diferentes partes del cielo nocturno se vuelven visibles, dándonos constelaciones estacionales.",
                    de: "Während die Erde die Sonne umkreist, werden verschiedene Teile des Nachthimmels sichtbar, was uns saisonale Sternbilder gibt.",
                    nl: "Terwijl de Aarde om de Zon draait, worden verschillende delen van de nachtelijke hemel zichtbaar, wat ons seizoensgebonden sterrenbeelden geeft."
                }
            },
            {
                question: {
                    en: "What is a light-year?",
                    es: "¿Qué es un año luz?",
                    de: "Was ist ein Lichtjahr?",
                    nl: "Wat is een lichtjaar?"
                },
                options: [
                    { en: "The distance light travels in one year", es: "La distancia que viaja la luz en un año", de: "Die Entfernung, die das Licht in einem Jahr zurücklegt", nl: "De afstand die licht aflegt in een jaar" },
                    { en: "One year on a planet", es: "Un año en un planeta", de: "Ein Jahr auf einem Planeten", nl: "Een jaar op een planeet" },
                    { en: "How long stars live", es: "Cuánto tiempo viven las estrellas", de: "Wie lange Sterne leben", nl: "Hoe lang sterren leven" },
                    { en: "The age of light", es: "La edad de la luz", de: "Das Alter des Lichts", nl: "De leeftijd van licht" }
                ],
                correct: 0,
                explanation: {
                    en: "A light-year measures distance, not time - it's how far light travels in one year, about 6 trillion miles.",
                    es: "Un año luz mide distancia, no tiempo - es qué tan lejos viaja la luz en un año, aproximadamente 9.5 billones de kilómetros.",
                    de: "Ein Lichtjahr misst Entfernung, nicht Zeit - es ist, wie weit Licht in einem Jahr reist, etwa 9,5 Billionen Kilometer.",
                    nl: "Een lichtjaar meet afstand, niet tijd - het is hoe ver licht reist in een jaar, ongeveer 9,5 biljoen kilometer."
                }
            },
            {
                question: {
                    en: "Why do constellations look different from other planets?",
                    es: "¿Por qué las constelaciones se ven diferentes desde otros planetas?",
                    de: "Warum sehen Sternbilder von anderen Planeten anders aus?",
                    nl: "Waarom zien sterrenbeelden er anders uit vanaf andere planeten?"
                },
                options: [
                    { en: "Because you're viewing the stars from a different position", es: "Porque estás viendo las estrellas desde una posición diferente", de: "Weil man die Sterne von einer anderen Position aus betrachtet", nl: "Omdat je de sterren vanuit een andere positie bekijkt" },
                    { en: "Stars change when viewed from space", es: "Las estrellas cambian cuando se ven desde el espacio", de: "Sterne ändern sich, wenn sie aus dem Weltraum betrachtet werden", nl: "Sterren veranderen wanneer ze vanuit de ruimte bekeken worden" },
                    { en: "Other planets have different eyes", es: "Otros planetas tienen ojos diferentes", de: "Andere Planeten haben andere Augen", nl: "Andere planeten hebben andere ogen" },
                    { en: "Constellations only exist on Earth", es: "Las constelaciones solo existen en la Tierra", de: "Sternbilder existieren nur auf der Erde", nl: "Sterrenbeelden bestaan alleen op Aarde" }
                ],
                correct: 0,
                explanation: {
                    en: "Constellations are patterns we see from Earth's specific location - from other planets, the stars would appear in different arrangements.",
                    es: "Las constelaciones son patrones que vemos desde la ubicación específica de la Tierra - desde otros planetas, las estrellas aparecerían en diferentes arreglos.",
                    de: "Sternbilder sind Muster, die wir von der spezifischen Position der Erde aus sehen - von anderen Planeten würden die Sterne in anderen Anordnungen erscheinen.",
                    nl: "Sterrenbeelden zijn patronen die we zien vanaf de specifieke locatie van de Aarde - vanaf andere planeten zouden de sterren in andere arrangementen verschijnen."
                }
            },
            {
                question: {
                    en: "What is the significance of the North Star for navigation?",
                    es: "¿Cuál es la importancia de la Estrella del Norte para la navegación?",
                    de: "Was ist die Bedeutung des Polarsterns für die Navigation?",
                    nl: "Wat is het belang van de Poolster voor navigatie?"
                },
                options: [
                    { en: "It stays in the same position and points north", es: "Permanece en la misma posición y apunta al norte", de: "Es bleibt an der gleichen Position und zeigt nach Norden", nl: "Het blijft op dezelfde positie en wijst naar het noorden" },
                    { en: "It's the brightest star", es: "Es la estrella más brillante", de: "Es ist der hellste Stern", nl: "Het is de helderste ster" },
                    { en: "It changes colors", es: "Cambia de colores", de: "Es ändert Farben", nl: "Het verandert van kleur" },
                    { en: "It moves in circles", es: "Se mueve en círculos", de: "Es bewegt sich in Kreisen", nl: "Het beweegt in cirkels" }
                ],
                correct: 0,
                explanation: {
                    en: "Polaris appears stationary in the northern sky, always pointing north, making it extremely useful for finding direction.",
                    es: "Polaris parece estacionaria en el cielo del norte, siempre apuntando al norte, haciéndola extremadamente útil para encontrar dirección.",
                    de: "Polaris erscheint stationär am nördlichen Himmel und zeigt immer nach Norden, was sie extrem nützlich für die Richtungsfindung macht.",
                    nl: "Polaris lijkt stilstaand aan de noordelijke hemel, altijd naar het noorden wijzend, wat hem extreem nuttig maakt voor het vinden van richting."
                }
            },
            {
                question: {
                    en: "What happens to the hydrogen in stars?",
                    es: "¿Qué pasa con el hidrógeno en las estrellas?",
                    de: "Was passiert mit dem Wasserstoff in Sternen?",
                    nl: "Wat gebeurt er met de waterstof in sterren?"
                },
                options: [
                    { en: "It fuses into helium, creating energy", es: "Se fusiona en helio, creando energía", de: "Es verschmilzt zu Helium und erzeugt Energie", nl: "Het fuseert tot helium en creëert energie" },
                    { en: "It turns into water", es: "Se convierte en agua", de: "Es wird zu Wasser", nl: "Het verandert in water" },
                    { en: "It disappears completely", es: "Desaparece completamente", de: "Es verschwindet vollständig", nl: "Het verdwijnt volledig" },
                    { en: "It becomes solid", es: "Se vuelve sólido", de: "Es wird fest", nl: "Het wordt vast" }
                ],
                correct: 0,
                explanation: {
                    en: "In stellar cores, hydrogen nuclei fuse together to form helium, releasing the energy that powers stars.",
                    es: "En los núcleos estelares, los núcleos de hidrógeno se fusionan para formar helio, liberando la energía que alimenta las estrellas.",
                    de: "In Sternkernen verschmelzen Wasserstoffkerne zu Helium und setzen die Energie frei, die Sterne antreibt.",
                    nl: "In stellaire kernen versmelten waterstofkernen om helium te vormen, waarbij de energie vrijkomt die sterren voedt."
                }
            },
            {
                question: {
                    en: "Which constellation represents twins?",
                    es: "¿Qué constelación representa gemelos?",
                    de: "Welches Sternbild stellt Zwillinge dar?",
                    nl: "Welk sterrenbeeld stelt tweelingen voor?"
                },
                options: [
                    { en: "Gemini", es: "Géminis", de: "Zwillinge", nl: "Tweelingen" },
                    { en: "Leo", es: "Leo", de: "Löwe", nl: "Leeuw" },
                    { en: "Orion", es: "Orión", de: "Orion", nl: "Orion" },
                    { en: "Virgo", es: "Virgo", de: "Jungfrau", nl: "Maagd" }
                ],
                correct: 0,
                explanation: {
                    en: "Gemini represents the mythological twins Castor and Pollux, who are also the names of the constellation's two brightest stars.",
                    es: "Géminis representa a los gemelos mitológicos Cástor y Pólux, que también son los nombres de las dos estrellas más brillantes de la constelación.",
                    de: "Zwillinge repräsentiert die mythologischen Zwillinge Castor und Pollux, die auch die Namen der beiden hellsten Sterne des Sternbilds sind.",
                    nl: "Tweelingen vertegenwoordigt de mythologische tweelingen Castor en Pollux, die ook de namen zijn van de twee helderste sterren van het sterrenbeeld."
                }
            },
            {
                question: {
                    en: "Why do stars appear to move across the sky at night?",
                    es: "¿Por qué las estrellas parecen moverse por el cielo durante la noche?",
                    de: "Warum scheinen sich Sterne nachts über den Himmel zu bewegen?",
                    nl: "Waarom lijken sterren 's nachts over de hemel te bewegen?"
                },
                options: [
                    { en: "Earth rotates on its axis", es: "La Tierra rota sobre su eje", de: "Die Erde rotiert um ihre Achse", nl: "De Aarde draait om zijn as" },
                    { en: "Stars actually move very fast", es: "Las estrellas realmente se mueven muy rápido", de: "Sterne bewegen sich tatsächlich sehr schnell", nl: "Sterren bewegen zich werkelijk heel snel" },
                    { en: "The atmosphere pushes them", es: "La atmósfera las empuja", de: "Die Atmosphäre schiebt sie", nl: "De atmosfeer duwt ze" },
                    { en: "Gravity pulls them around", es: "La gravedad las atrae", de: "Die Schwerkraft zieht sie herum", nl: "Zwaartekracht trekt ze rond" }
                ],
                correct: 0,
                explanation: {
                    en: "The stars aren't actually moving - Earth's rotation makes them appear to move across the sky from east to west.",
                    es: "Las estrellas no se están moviendo realmente - la rotación de la Tierra hace que parezcan moverse por el cielo de este a oeste.",
                    de: "Die Sterne bewegen sich nicht wirklich - die Erdrotation lässt sie sich von Ost nach West über den Himmel bewegen.",
                    nl: "De sterren bewegen niet werkelijk - de rotatie van de Aarde laat ze van oost naar west over de hemel lijken te bewegen."
                }
            },
            {
                question: {
                    en: "What do we call the path Earth takes around the Sun?",
                    es: "¿Cómo llamamos al camino que la Tierra toma alrededor del Sol?",
                    de: "Wie nennen wir den Weg, den die Erde um die Sonne nimmt?",
                    nl: "Hoe noemen we het pad dat de Aarde neemt rond de Zon?"
                },
                options: [
                    { en: "Orbit", es: "Órbita", de: "Umlaufbahn", nl: "Baan" },
                    { en: "Circle", es: "Círculo", de: "Kreis", nl: "Cirkel" },
                    { en: "Line", es: "Línea", de: "Linie", nl: "Lijn" },
                    { en: "Square", es: "Cuadrado", de: "Quadrat", nl: "Vierkant" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the closest star to Earth?",
                    es: "¿Cuál es la estrella más cercana a la Tierra?",
                    de: "Was ist der nächstgelegene Stern zur Erde?",
                    nl: "Wat is de dichtstbijzijnde ster bij de Aarde?"
                },
                options: [
                    { en: "The Sun", es: "El Sol", de: "Die Sonne", nl: "De Zon" },
                    { en: "The Moon", es: "La Luna", de: "Der Mond", nl: "De Maan" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How long does it take for light from the Sun to reach Earth?",
                    es: "¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?",
                    de: "Wie lange braucht das Licht der Sonne, um die Erde zu erreichen?",
                    nl: "Hoe lang duurt het voordat licht van de Zon de Aarde bereikt?"
                },
                options: [
                    { en: "About 8 minutes", es: "Aproximadamente 8 minutos", de: "Etwa 8 Minuten", nl: "Ongeveer 8 minuten" },
                    { en: "1 second", es: "1 segundo", de: "1 Sekunde", nl: "1 seconde" },
                    { en: "1 hour", es: "1 hora", de: "1 Stunde", nl: "1 uur" },
                    { en: "1 day", es: "1 día", de: "1 Tag", nl: "1 dag" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call a piece of rock that falls from space to Earth?",
                    es: "¿Cómo llamamos a un pedazo de roca que cae del espacio a la Tierra?",
                    de: "Wie nennen wir ein Stück Gestein, das aus dem Weltraum zur Erde fällt?",
                    nl: "Hoe noemen we een stuk steen dat uit de ruimte naar de Aarde valt?"
                },
                options: [
                    { en: "Meteorite", es: "Meteorito", de: "Meteorit", nl: "Meteoriet" },
                    { en: "Comet", es: "Cometa", de: "Komet", nl: "Komeet" },
                    { en: "Asteroid", es: "Asteroide", de: "Asteroid", nl: "Asteroïde" },
                    { en: "Satellite", es: "Satélite", de: "Satellit", nl: "Satelliet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which planet is known for having beautiful rings around it?",
                    es: "¿Qué planeta es conocido por tener hermosos anillos a su alrededor?",
                    de: "Welcher Planet ist bekannt für seine schönen Ringe um ihn herum?",
                    nl: "Welke planeet staat bekend om de prachtige ringen eromheen?"
                },
                options: [
                    { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
                    { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" }
                ],
                correct: 0
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/space-astronomy', level2);
    }
})();