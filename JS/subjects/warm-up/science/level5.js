(function() {
    const level5 = {
        name: {
            en: "Weather and Climate",
            es: "Clima y Tiempo",
            de: "Wetter und Klima",
            nl: "Weer en Klimaat"
        },
        questions: [
            {
                question: {
                    en: "What causes rain?",
                    es: "¿Qué causa la lluvia?",
                    de: "Was verursacht Regen?",
                    nl: "Wat veroorzaakt regen?"
                },
                options: [
                    { en: "Water evaporates, forms clouds, then falls", es: "El agua se evapora, forma nubes, luego cae", de: "Wasser verdunstet, bildet Wolken, dann fällt es", nl: "Water verdampt, vormt wolken, dan valt het" },
                    { en: "The sun makes water fall", es: "El sol hace caer agua", de: "Die Sonne lässt Wasser fallen", nl: "De zon laat water vallen" },
                    { en: "Wind pushes water down", es: "El viento empuja el agua hacia abajo", de: "Wind drückt Wasser nach unten", nl: "Wind duwt water naar beneden" },
                    { en: "Trees create water", es: "Los árboles crean agua", de: "Bäume erzeugen Wasser", nl: "Bomen maken water" }
                ],
                correct: 0,
                explanation: {
                    en: "Rain forms through the water cycle when water evaporates, rises into the sky, condenses into clouds, and then falls back to Earth.",
                    es: "La lluvia se forma a través del ciclo del agua cuando el agua se evapora, sube al cielo, se condensa en nubes y luego cae de vuelta a la Tierra.",
                    de: "Regen entsteht durch den Wasserkreislauf, wenn Wasser verdunstet, in den Himmel steigt, sich zu Wolken kondensiert und dann zur Erde zurückfällt.",
                    nl: "Regen ontstaat door de waterkringloop wanneer water verdampt, opstijgt naar de lucht, condenseert tot wolken en dan terug naar de aarde valt."
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
                    { en: "How water moves between Earth and sky", es: "Cómo se mueve el agua entre la Tierra y el cielo", de: "Wie sich Wasser zwischen Erde und Himmel bewegt", nl: "Hoe water beweegt tussen aarde en lucht" },
                    { en: "How fish swim in circles", es: "Cómo nadan los peces en círculos", de: "Wie Fische im Kreis schwimmen", nl: "Hoe vissen in cirkels zwemmen" },
                    { en: "How plants drink water", es: "Cómo beben agua las plantas", de: "Wie Pflanzen Wasser trinken", nl: "Hoe planten water drinken" },
                    { en: "How rivers flow to the sea", es: "Cómo fluyen los ríos al mar", de: "Wie Flüsse zum Meer fließen", nl: "Hoe rivieren naar zee stromen" }
                ],
                correct: 0,
                explanation: {
                    en: "The water cycle is the continuous movement of water between Earth's surface and the atmosphere through evaporation, condensation, and precipitation.",
                    es: "El ciclo del agua es el movimiento continuo del agua entre la superficie de la Tierra y la atmósfera a través de la evaporación, condensación y precipitación.",
                    de: "Der Wasserkreislauf ist die kontinuierliche Bewegung von Wasser zwischen der Erdoberfläche und der Atmosphäre durch Verdunstung, Kondensation und Niederschlag.",
                    nl: "De waterkringloop is de continue beweging van water tussen het aardoppervlak en de atmosfeer door verdamping, condensatie en neerslag."
                }
            },
            {
                question: {
                    en: "What happens when water vapor cools down?",
                    es: "¿Qué pasa cuando el vapor de agua se enfría?",
                    de: "Was passiert, wenn Wasserdampf abkühlt?",
                    nl: "Wat gebeurt er als waterdamp afkoelt?"
                },
                options: [
                    { en: "It condenses into tiny water droplets", es: "Se condensa en pequeñas gotas de agua", de: "Es kondensiert zu winzigen Wassertröpfchen", nl: "Het condenseert tot kleine waterdruppeltjes" },
                    { en: "It disappears completely", es: "Desaparece completamente", de: "Es verschwindet völlig", nl: "Het verdwijnt helemaal" },
                    { en: "It turns into ice immediately", es: "Se convierte en hielo inmediatamente", de: "Es wird sofort zu Eis", nl: "Het wordt meteen ijs" },
                    { en: "It gets hotter", es: "Se calienta más", de: "Es wird heißer", nl: "Het wordt heter" }
                ],
                correct: 0,
                explanation: {
                    en: "Condensation occurs when water vapor cools and changes back into liquid water droplets, which is how clouds and dew form.",
                    es: "La condensación ocurre cuando el vapor de agua se enfría y cambia de vuelta a gotas de agua líquida, así es como se forman las nubes y el rocío.",
                    de: "Kondensation tritt auf, wenn Wasserdampf abkühlt und sich wieder in flüssige Wassertröpfchen verwandelt, so entstehen Wolken und Tau.",
                    nl: "Condensatie treedt op wanneer waterdamp afkoelt en weer verandert in vloeibare waterdruppeltjes, zo ontstaan wolken en dauw."
                }
            },
            {
                question: {
                    en: "What are clouds made of?",
                    es: "¿De qué están hechas las nubes?",
                    de: "Woraus bestehen Wolken?",
                    nl: "Waar bestaan wolken uit?"
                },
                options: [
                    { en: "Tiny water droplets or ice crystals", es: "Pequeñas gotas de agua o cristales de hielo", de: "Winzige Wassertröpfchen oder Eiskristalle", nl: "Kleine waterdruppeltjes of ijskristallen" },
                    { en: "Cotton balls", es: "Bolas de algodón", de: "Wattebäusche", nl: "Wattenbolletjes" },
                    { en: "Smoke from factories", es: "Humo de fábricas", de: "Rauch aus Fabriken", nl: "Rook van fabrieken" },
                    { en: "Dust particles", es: "Partículas de polvo", de: "Staubpartikel", nl: "Stofdeeltjes" }
                ],
                correct: 0,
                explanation: {
                    en: "Clouds are composed of millions of tiny water droplets or ice crystals that have condensed around particles in the atmosphere.",
                    es: "Las nubes están compuestas por millones de pequeñas gotas de agua o cristales de hielo que se han condensado alrededor de partículas en la atmósfera.",
                    de: "Wolken bestehen aus Millionen winziger Wassertröpfchen oder Eiskristalle, die sich um Partikel in der Atmosphäre kondensiert haben.",
                    nl: "Wolken bestaan uit miljoenen kleine waterdruppeltjes of ijskristallen die gecondenseerd zijn rond deeltjes in de atmosfeer."
                }
            },
            {
                question: {
                    en: "What type of cloud usually brings rain?",
                    es: "¿Qué tipo de nube usualmente trae lluvia?",
                    de: "Welche Art von Wolke bringt normalerweise Regen?",
                    nl: "Welke soort wolk brengt meestal regen?"
                },
                options: [
                    { en: "Dark, thick clouds", es: "Nubes oscuras y gruesas", de: "Dunkle, dicke Wolken", nl: "Donkere, dikke wolken" },
                    { en: "White, fluffy clouds", es: "Nubes blancas y esponjosas", de: "Weiße, flauschige Wolken", nl: "Witte, pluizige wolken" },
                    { en: "Thin, wispy clouds", es: "Nubes delgadas y tenues", de: "Dünne, wispige Wolken", nl: "Dunne, sluierwolken" },
                    { en: "Red clouds", es: "Nubes rojas", de: "Rote Wolken", nl: "Rode wolken" }
                ],
                correct: 0,
                explanation: {
                    en: "Dark, thick clouds called cumulonimbus or nimbus clouds contain more water droplets and are heavy enough to produce precipitation like rain.",
                    es: "Las nubes oscuras y gruesas llamadas cumulonimbos o nimbos contienen más gotas de agua y son lo suficientemente pesadas para producir precipitación como lluvia.",
                    de: "Dunkle, dicke Wolken namens Cumulonimbus oder Nimbus enthalten mehr Wassertröpfchen und sind schwer genug, um Niederschlag wie Regen zu erzeugen.",
                    nl: "Donkere, dikke wolken genaamd cumulonimbus of nimbus bevatten meer waterdruppeltjes en zijn zwaar genoeg om neerslag zoals regen te produceren."
                }
            },
            {
                question: {
                    en: "What makes wind?",
                    es: "¿Qué hace el viento?",
                    de: "Was macht Wind?",
                    nl: "Wat maakt wind?"
                },
                options: [
                    { en: "Air moving from high to low pressure", es: "Aire moviéndose de alta a baja presión", de: "Luft, die sich von hohem zu niedrigem Druck bewegt", nl: "Lucht die beweegt van hoge naar lage druk" },
                    { en: "Trees waving their branches", es: "Árboles moviendo sus ramas", de: "Bäume, die ihre Äste bewegen", nl: "Bomen die hun takken zwaaien" },
                    { en: "Birds flapping their wings", es: "Pájaros batiendo sus alas", de: "Vögel, die mit ihren Flügeln schlagen", nl: "Vogels die met hun vleugels klapperen" },
                    { en: "The Earth spinning", es: "La Tierra girando", de: "Die Erde, die sich dreht", nl: "De aarde die draait" }
                ],
                correct: 0,
                explanation: {
                    en: "Wind is created when air moves from areas of high atmospheric pressure to areas of low pressure, trying to balance the pressure differences.",
                    es: "El viento se crea cuando el aire se mueve de áreas de alta presión atmosférica a áreas de baja presión, tratando de equilibrar las diferencias de presión.",
                    de: "Wind entsteht, wenn sich Luft von Gebieten hohen Luftdrucks zu Gebieten niedrigen Drucks bewegt und versucht, die Druckunterschiede auszugleichen.",
                    nl: "Wind ontstaat wanneer lucht beweegt van gebieden met hoge atmosferische druk naar gebieden met lage druk, om de drukverschillen in evenwicht te brengen."
                }
            },
            {
                question: {
                    en: "What season comes after winter?",
                    es: "¿Qué estación viene después del invierno?",
                    de: "Welche Jahreszeit kommt nach dem Winter?",
                    nl: "Welk seizoen komt na de winter?"
                },
                options: [
                    { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
                    { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
                    { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" },
                    { en: "Winter again", es: "Invierno otra vez", de: "Wieder Winter", nl: "Weer winter" }
                ],
                correct: 0,
                explanation: {
                    en: "The four seasons follow a cycle: winter, spring, summer, fall, and back to winter, determined by Earth's tilt and orbit around the sun.",
                    es: "Las cuatro estaciones siguen un ciclo: invierno, primavera, verano, otoño, y de vuelta al invierno, determinado por la inclinación y órbita de la Tierra alrededor del sol.",
                    de: "Die vier Jahreszeiten folgen einem Zyklus: Winter, Frühling, Sommer, Herbst und zurück zum Winter, bestimmt durch die Neigung und Umlaufbahn der Erde um die Sonne.",
                    nl: "De vier seizoenen volgen een cyclus: winter, lente, zomer, herfst, en terug naar winter, bepaald door de kanteling en baan van de aarde rond de zon."
                }
            },
            {
                question: {
                    en: "What causes the seasons to change?",
                    es: "¿Qué causa que las estaciones cambien?",
                    de: "Was verursacht den Wechsel der Jahreszeiten?",
                    nl: "Wat veroorzaakt dat de seizoenen veranderen?"
                },
                options: [
                    { en: "Earth tilting as it orbits the sun", es: "La Tierra inclinándose mientras orbita el sol", de: "Die Erde neigt sich, während sie die Sonne umkreist", nl: "De aarde kantelt terwijl hij om de zon draait" },
                    { en: "The sun getting bigger and smaller", es: "El sol haciéndose más grande y más pequeño", de: "Die Sonne wird größer und kleiner", nl: "De zon wordt groter en kleiner" },
                    { en: "Clouds blocking the sun", es: "Nubes bloqueando el sol", de: "Wolken blockieren die Sonne", nl: "Wolken blokkeren de zon" },
                    { en: "Animals changing the weather", es: "Animales cambiando el clima", de: "Tiere ändern das Wetter", nl: "Dieren veranderen het weer" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth's axial tilt of 23.5 degrees causes different parts of the planet to receive varying amounts of sunlight throughout the year, creating seasons.",
                    es: "La inclinación axial de la Tierra de 23.5 grados hace que diferentes partes del planeta reciban cantidades variables de luz solar durante el año, creando estaciones.",
                    de: "Die Achsenneigung der Erde von 23,5 Grad bewirkt, dass verschiedene Teile des Planeten das ganze Jahr über unterschiedliche Mengen an Sonnenlicht erhalten und so Jahreszeiten entstehen.",
                    nl: "De axiale kanteling van de aarde van 23,5 graden zorgt ervoor dat verschillende delen van de planeet gedurende het jaar verschillende hoeveelheden zonlicht ontvangen, waardoor seizoenen ontstaan."
                }
            },
            {
                question: {
                    en: "What happens to plants in spring?",
                    es: "¿Qué les pasa a las plantas en primavera?",
                    de: "Was passiert mit Pflanzen im Frühling?",
                    nl: "Wat gebeurt er met planten in de lente?"
                },
                options: [
                    { en: "They start growing new leaves and flowers", es: "Empiezan a crecer hojas y flores nuevas", de: "Sie beginnen neue Blätter und Blüten zu wachsen", nl: "Ze beginnen nieuwe bladeren en bloemen te groeien" },
                    { en: "They all die", es: "Todas mueren", de: "Sie sterben alle", nl: "Ze gaan allemaal dood" },
                    { en: "They turn brown", es: "Se vuelven marrones", de: "Sie werden braun", nl: "Ze worden bruin" },
                    { en: "They sleep all season", es: "Duermen toda la temporada", de: "Sie schlafen die ganze Saison", nl: "Ze slapen het hele seizoen" }
                ],
                correct: 0,
                explanation: {
                    en: "Spring brings warmer temperatures and longer daylight, triggering plants to emerge from dormancy and begin their growth cycle with new leaves and flowers.",
                    es: "La primavera trae temperaturas más cálidas y días más largos, provocando que las plantas salgan de la dormancia y comiencen su ciclo de crecimiento con nuevas hojas y flores.",
                    de: "Der Frühling bringt wärmere Temperaturen und längeres Tageslicht, was Pflanzen dazu veranlasst, aus der Ruhephase zu erwachen und ihren Wachstumszyklus mit neuen Blättern und Blüten zu beginnen.",
                    nl: "De lente brengt warmere temperaturen en langer daglicht, waardoor planten uit hun winterslaap komen en hun groeicyclus beginnen met nieuwe bladeren en bloemen."
                }
            },
            {
                question: {
                    en: "What do animals do in winter to stay warm?",
                    es: "¿Qué hacen los animales en invierno para mantenerse calientes?",
                    de: "Was machen Tiere im Winter, um warm zu bleiben?",
                    nl: "Wat doen dieren in de winter om warm te blijven?"
                },
                options: [
                    { en: "Grow thicker fur or hibernate", es: "Crecen pelaje más grueso o hibernan", de: "Wachsen dickeres Fell oder halten Winterschlaf", nl: "Groeien dikkere vacht of gaan in winterslaap" },
                    { en: "Move to outer space", es: "Se mudan al espacio exterior", de: "Ziehen ins Weltall", nl: "Verhuizen naar de ruimte" },
                    { en: "Stop eating completely", es: "Dejan de comer completamente", de: "Hören völlig auf zu fressen", nl: "Stoppen helemaal met eten" },
                    { en: "Change into different animals", es: "Se convierten en animales diferentes", de: "Verwandeln sich in andere Tiere", nl: "Veranderen in andere dieren" }
                ],
                correct: 0,
                explanation: {
                    en: "Animals have evolved various winter survival strategies including growing thicker fur for insulation, hibernating to conserve energy, or migrating to warmer areas.",
                    es: "Los animales han desarrollado varias estrategias de supervivencia invernal incluyendo el crecimiento de pelaje más grueso para aislamiento, hibernación para conservar energía, o migración a áreas más cálidas.",
                    de: "Tiere haben verschiedene Winterüberlebensstrategien entwickelt, einschließlich des Wachstums dickeren Fells zur Isolierung, Winterschlaf zur Energieeinsparung oder Migration in wärmere Gebiete.",
                    nl: "Dieren hebben verschillende overlevingsstrategieën voor de winter ontwikkeld, waaronder het groeien van dikker bont voor isolatie, winterslaap om energie te besparen, of migratie naar warmere gebieden."
                }
            },
            {
                question: {
                    en: "How is snow formed?",
                    es: "¿Cómo se forma la nieve?",
                    de: "Wie entsteht Schnee?",
                    nl: "Hoe ontstaat sneeuw?"
                },
                options: [
                    { en: "Water vapor freezes into ice crystals", es: "El vapor de agua se congela en cristales de hielo", de: "Wasserdampf gefriert zu Eiskristallen", nl: "Waterdamp bevriest tot ijskristallen" },
                    { en: "Rain gets very cold", es: "La lluvia se vuelve muy fría", de: "Regen wird sehr kalt", nl: "Regen wordt heel koud" },
                    { en: "Clouds shake ice cubes", es: "Las nubes agitan cubos de hielo", de: "Wolken schütteln Eiswürfel", nl: "Wolken schudden ijsblokjes" },
                    { en: "The sun makes white rain", es: "El sol hace lluvia blanca", de: "Die Sonne macht weißen Regen", nl: "De zon maakt witte regen" }
                ],
                correct: 0,
                explanation: {
                    en: "Snow forms when water vapor in clouds freezes directly into ice crystals at temperatures below 32°F (0°C), creating beautiful six-sided snowflakes.",
                    es: "La nieve se forma cuando el vapor de agua en las nubes se congela directamente en cristales de hielo a temperaturas por debajo de 32°F (0°C), creando hermosos copos de nieve de seis lados.",
                    de: "Schnee entsteht, wenn Wasserdampf in Wolken bei Temperaturen unter 0°C direkt zu Eiskristallen gefriert und schöne sechsseitige Schneeflocken bildet.",
                    nl: "Sneeuw ontstaat wanneer waterdamp in wolken direct bevriest tot ijskristallen bij temperaturen onder 0°C, waardoor prachtige zeszijdige sneeuwvlokken ontstaan."
                }
            },
            {
                question: {
                    en: "What is thunder?",
                    es: "¿Qué es el trueno?",
                    de: "Was ist Donner?",
                    nl: "Wat is donder?"
                },
                options: [
                    { en: "The sound that lightning makes", es: "El sonido que hace el rayo", de: "Das Geräusch, das der Blitz macht", nl: "Het geluid dat bliksem maakt" },
                    { en: "Clouds bumping into each other", es: "Nubes chocando entre sí", de: "Wolken, die aneinander stoßen", nl: "Wolken die tegen elkaar botsen" },
                    { en: "Giants bowling in the sky", es: "Gigantes jugando bolos en el cielo", de: "Riesen beim Bowling im Himmel", nl: "Reuzen die bowlen in de lucht" },
                    { en: "The Earth shaking", es: "La Tierra temblando", de: "Die Erde bebt", nl: "De aarde die beeft" }
                ],
                correct: 0,
                explanation: {
                    en: "Thunder is the sound produced by lightning as it rapidly heats the air, causing it to expand explosively and create a shock wave we hear as thunder.",
                    es: "El trueno es el sonido producido por el rayo al calentar rápidamente el aire, causando que se expanda explosivamente y cree una onda de choque que escuchamos como trueno.",
                    de: "Donner ist das Geräusch, das durch Blitze erzeugt wird, wenn sie die Luft schnell erhitzen, wodurch sie explosionsartig expandiert und eine Schockwelle erzeugt, die wir als Donner hören.",
                    nl: "Donder is het geluid dat wordt geproduceerd door bliksem wanneer het de lucht snel verhit, waardoor deze explosief uitzet en een schokgolf creëert die we horen als donder."
                }
            },
            {
                question: {
                    en: "What is lightning?",
                    es: "¿Qué es el rayo?",
                    de: "Was ist ein Blitz?",
                    nl: "Wat is bliksem?"
                },
                options: [
                    { en: "A giant electric spark in the sky", es: "Una chispa eléctrica gigante en el cielo", de: "Ein riesiger elektrischer Funke am Himmel", nl: "Een gigantische elektrische vonk in de lucht" },
                    { en: "The sun coming through clouds", es: "El sol atravesando las nubes", de: "Die Sonne kommt durch Wolken", nl: "De zon die door wolken komt" },
                    { en: "Flashlights in the clouds", es: "Linternas en las nubes", de: "Taschenlampen in den Wolken", nl: "Zaklantaarns in de wolken" },
                    { en: "Stars falling down", es: "Estrellas cayendo", de: "Sterne, die herunterfallen", nl: "Sterren die vallen" }
                ],
                correct: 0,
                explanation: {
                    en: "Lightning is a massive electrical discharge that occurs when electrical charges build up in storm clouds and jump between clouds or from clouds to the ground.",
                    es: "El rayo es una descarga eléctrica masiva que ocurre cuando las cargas eléctricas se acumulan en las nubes de tormenta y saltan entre nubes o de las nubes al suelo.",
                    de: "Blitz ist eine massive elektrische Entladung, die auftritt, wenn sich elektrische Ladungen in Gewitterwolken aufbauen und zwischen Wolken oder von Wolken zum Boden springen.",
                    nl: "Bliksem is een enorme elektrische ontlading die optreedt wanneer elektrische ladingen zich ophopen in onweerswolken en springen tussen wolken of van wolken naar de grond."
                }
            },
            {
                question: {
                    en: "When do you usually see rainbows?",
                    es: "¿Cuándo sueles ver arcoíris?",
                    de: "Wann sieht man normalerweise Regenbogen?",
                    nl: "Wanneer zie je meestal regenbogen?"
                },
                options: [
                    { en: "After rain when the sun comes out", es: "Después de la lluvia cuando sale el sol", de: "Nach dem Regen, wenn die Sonne herauskommt", nl: "Na regen als de zon tevoorschijn komt" },
                    { en: "Only at night", es: "Solo en la noche", de: "Nur nachts", nl: "Alleen 's nachts" },
                    { en: "During snowstorms", es: "Durante tormentas de nieve", de: "Während Schneestürmen", nl: "Tijdens sneeuwstormen" },
                    { en: "When it's very hot", es: "Cuando hace mucho calor", de: "Wenn es sehr heiß ist", nl: "Als het heel heet is" }
                ],
                correct: 0,
                explanation: {
                    en: "Rainbows appear when sunlight and rain occur at the same time, as sunlight refracts (bends) through water droplets, separating white light into colors.",
                    es: "Los arcoíris aparecen cuando la luz solar y la lluvia ocurren al mismo tiempo, ya que la luz solar se refracta (dobla) a través de las gotas de agua, separando la luz blanca en colores.",
                    de: "Regenbogen erscheinen, wenn Sonnenlicht und Regen gleichzeitig auftreten, da das Sonnenlicht durch Wassertröpfchen bricht und weißes Licht in Farben trennt.",
                    nl: "Regenbogen verschijnen wanneer zonlicht en regen tegelijkertijd optreden, omdat zonlicht breekt (buigt) door waterdruppeltjes, waardoor wit licht wordt gescheiden in kleuren."
                }
            },
            {
                question: {
                    en: "How many colors are in a rainbow?",
                    es: "¿Cuántos colores hay en un arcoíris?",
                    de: "Wie viele Farben hat ein Regenbogen?",
                    nl: "Hoeveel kleuren zitten er in een regenboog?"
                },
                options: [
                    { en: "Seven", es: "Siete", de: "Sieben", nl: "Zeven" },
                    { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
                    { en: "Five", es: "Cinco", de: "Fünf", nl: "Vijf" },
                    { en: "Ten", es: "Diez", de: "Zehn", nl: "Tien" }
                ],
                correct: 0,
                explanation: {
                    en: "A rainbow contains seven main colors that can be remembered by the acronym ROYGBIV: Red, Orange, Yellow, Green, Blue, Indigo, and Violet.",
                    es: "Un arcoíris contiene siete colores principales que se pueden recordar con el acrónimo ROYGBIV: Rojo, Naranja, Amarillo, Verde, Azul, Índigo y Violeta.",
                    de: "Ein Regenbogen enthält sieben Hauptfarben, die man sich mit dem Akronym ROYGBIV merken kann: Rot, Orange, Gelb, Grün, Blau, Indigo und Violett.",
                    nl: "Een regenboog bevat zeven hoofdkleuren die kunnen worden onthouden door het acroniem ROYGBIV: Rood, Oranje, Geel, Groen, Blauw, Indigo en Violet."
                }
            },
            {
                question: {
                    en: "What tool measures how much rain has fallen?",
                    es: "¿Qué herramienta mide cuánta lluvia ha caído?",
                    de: "Welches Werkzeug misst, wie viel Regen gefallen ist?",
                    nl: "Welke tool meet hoeveel regen er is gevallen?"
                },
                options: [
                    { en: "Rain gauge", es: "Pluviómetro", de: "Regenmesser", nl: "Regenmeter" },
                    { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" },
                    { en: "Compass", es: "Brújula", de: "Kompass", nl: "Kompas" },
                    { en: "Clock", es: "Reloj", de: "Uhr", nl: "Klok" }
                ],
                correct: 0,
                explanation: {
                    en: "A rain gauge is a meteorological instrument that collects and measures the amount of precipitation (rainfall) that falls over a specific time period.",
                    es: "Un pluviómetro es un instrumento meteorológico que recolecta y mide la cantidad de precipitación (lluvia) que cae durante un período específico de tiempo.",
                    de: "Ein Regenmesser ist ein meteorologisches Instrument, das die Menge an Niederschlag (Regen) sammelt und misst, die über einen bestimmten Zeitraum fällt.",
                    nl: "Een regenmeter is een meteorologisch instrument dat de hoeveelheid neerslag (regen) verzamelt en meet die over een specifieke tijdsperiode valt."
                }
            },
            {
                question: {
                    en: "What tool measures temperature?",
                    es: "¿Qué herramienta mide la temperatura?",
                    de: "Welches Werkzeug misst die Temperatur?",
                    nl: "Welke tool meet temperatuur?"
                },
                options: [
                    { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" },
                    { en: "Barometer", es: "Barómetro", de: "Barometer", nl: "Barometer" },
                    { en: "Ruler", es: "Regla", de: "Lineal", nl: "Liniaal" },
                    { en: "Scale", es: "Balanza", de: "Waage", nl: "Weegschaal" }
                ],
                correct: 0,
                explanation: {
                    en: "A thermometer measures temperature by using materials that expand or contract with heat, like mercury or alcohol, or electronic sensors that detect thermal changes.",
                    es: "Un termómetro mide la temperatura usando materiales que se expanden o contraen con el calor, como mercurio o alcohol, o sensores electrónicos que detectan cambios térmicos.",
                    de: "Ein Thermometer misst die Temperatur mithilfe von Materialien, die sich bei Wärme ausdehnen oder zusammenziehen, wie Quecksilber oder Alkohol, oder elektronischen Sensoren, die Wärmeänderungen erkennen.",
                    nl: "Een thermometer meet temperatuur door gebruik van materialen die uitzetten of samentrekken bij warmte, zoals kwik of alcohol, of elektronische sensoren die thermische veranderingen detecteren."
                }
            },
            {
                question: {
                    en: "What shows wind direction?",
                    es: "¿Qué muestra la dirección del viento?",
                    de: "Was zeigt die Windrichtung?",
                    nl: "Wat toont windrichting?"
                },
                options: [
                    { en: "Weather vane", es: "Veleta", de: "Wetterfahne", nl: "Windwijzer" },
                    { en: "Umbrella", es: "Paraguas", de: "Regenschirm", nl: "Paraplu" },
                    { en: "Flashlight", es: "Linterna", de: "Taschenlampe", nl: "Zaklantaarn" },
                    { en: "Mirror", es: "Espejo", de: "Spiegel", nl: "Spiegel" }
                ],
                correct: 0,
                explanation: {
                    en: "A weather vane is a rotating instrument that points in the direction the wind is blowing from, helping meteorologists track wind patterns.",
                    es: "Una veleta es un instrumento giratorio que apunta en la dirección de donde sopla el viento, ayudando a los meteorólogos a rastrear patrones de viento.",
                    de: "Eine Wetterfahne ist ein rotierendes Instrument, das in die Richtung zeigt, aus der der Wind weht, und hilft Meteorologen, Windmuster zu verfolgen.",
                    nl: "Een windwijzer is een roterend instrument dat wijst in de richting waar de wind vandaan komt, waardoor meteorologen windpatronen kunnen volgen."
                }
            },
            {
                question: {
                    en: "What happens to water when it gets very cold?",
                    es: "¿Qué le pasa al agua cuando se vuelve muy fría?",
                    de: "Was passiert mit Wasser, wenn es sehr kalt wird?",
                    nl: "Wat gebeurt er met water als het heel koud wordt?"
                },
                options: [
                    { en: "It freezes into ice", es: "Se congela en hielo", de: "Es gefriert zu Eis", nl: "Het bevriest tot ijs" },
                    { en: "It disappears", es: "Desaparece", de: "Es verschwindet", nl: "Het verdwijnt" },
                    { en: "It turns into steam", es: "Se convierte en vapor", de: "Es wird zu Dampf", nl: "Het wordt stoom" },
                    { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" }
                ],
                correct: 0,
                explanation: {
                    en: "Water freezes into ice at 32°F (0°C) because the molecules slow down and form a solid crystalline structure, expanding as they freeze.",
                    es: "El agua se congela en hielo a 32°F (0°C) porque las moléculas se ralentizan y forman una estructura cristalina sólida, expandéndose al congelarse.",
                    de: "Wasser gefriert bei 0°C zu Eis, weil sich die Moleküle verlangsamen und eine feste kristalline Struktur bilden, die sich beim Gefrieren ausdehnt.",
                    nl: "Water bevriest tot ijs bij 0°C omdat de moleculen vertragen en een vaste kristallijne structuur vormen, die uitzet tijdens het bevriezen."
                }
            },
            {
                question: {
                    en: "What do we call a violent spinning storm?",
                    es: "¿Cómo llamamos a una tormenta violenta que gira?",
                    de: "Wie nennen wir einen heftigen wirbelnden Sturm?",
                    nl: "Hoe noemen we een gewelddadige draaiende storm?"
                },
                options: [
                    { en: "Tornado", es: "Tornado", de: "Tornado", nl: "Tornado" },
                    { en: "Rainbow", es: "Arcoíris", de: "Regenbogen", nl: "Regenboog" },
                    { en: "Fog", es: "Niebla", de: "Nebel", nl: "Mist" },
                    { en: "Dewdrop", es: "Gota de rocío", de: "Tautropfen", nl: "Dauwdruppel" }
                ],
                correct: 0,
                explanation: {
                    en: "A tornado is a violently rotating column of air that extends from a thunderstorm to the ground, capable of causing massive destruction with winds over 200 mph.",
                    es: "Un tornado es una columna de aire que gira violentamente y se extiende desde una tormenta hasta el suelo, capaz de causar destrucción masiva con vientos de más de 200 mph.",
                    de: "Ein Tornado ist eine heftig rotierende Luftsäule, die sich von einem Gewitter bis zum Boden erstreckt und mit Winden über 320 km/h massive Zerstörung verursachen kann.",
                    nl: "Een tornado is een heftig roterende luchtkolom die zich uitstrekt van een onweersbui tot de grond, in staat tot massale vernietiging met winden van meer dan 320 km/u."
                }
            },
            {
                question: {
                    en: "What is fog?",
                    es: "¿Qué es la niebla?",
                    de: "Was ist Nebel?",
                    nl: "Wat is mist?"
                },
                options: [
                    { en: "A cloud that touches the ground", es: "Una nube que toca el suelo", de: "Eine Wolke, die den Boden berührt", nl: "Een wolk die de grond raakt" },
                    { en: "Smoke from fires", es: "Humo de incendios", de: "Rauch von Feuern", nl: "Rook van branden" },
                    { en: "Dust in the air", es: "Polvo en el aire", de: "Staub in der Luft", nl: "Stof in de lucht" },
                    { en: "White paint in the sky", es: "Pintura blanca en el cielo", de: "Weiße Farbe am Himmel", nl: "Witte verf in de lucht" }
                ],
                correct: 0,
                explanation: {
                    en: "Fog is essentially a cloud that has formed at ground level when water vapor condenses in cool, humid air near the Earth's surface.",
                    es: "La niebla es esencialmente una nube que se ha formado a nivel del suelo cuando el vapor de agua se condensa en aire frío y húmedo cerca de la superficie de la Tierra.",
                    de: "Nebel ist im Wesentlichen eine Wolke, die sich auf Bodenniveau gebildet hat, wenn Wasserdampf in kühler, feuchter Luft nahe der Erdoberfläche kondensiert.",
                    nl: "Mist is in wezen een wolk die zich op grondniveau heeft gevormd wanneer waterdamp condenseert in koele, vochtige lucht nabij het aardoppervlak."
                }
            },
            {
                question: {
                    en: "What causes ocean waves?",
                    es: "¿Qué causa las olas del océano?",
                    de: "Was verursacht Meereswellen?",
                    nl: "Wat veroorzaakt oceaangolven?"
                },
                options: [
                    { en: "Wind blowing over water", es: "Viento soplando sobre el agua", de: "Wind, der über Wasser weht", nl: "Wind die over water blaast" },
                    { en: "Fish swimming fast", es: "Peces nadando rápido", de: "Fische schwimmen schnell", nl: "Vissen zwemmen snel" },
                    { en: "The moon dancing", es: "La luna bailando", de: "Der Mond tanzt", nl: "De maan danst" },
                    { en: "Boats moving", es: "Barcos moviéndose", de: "Boote bewegen sich", nl: "Boten bewegen" }
                ],
                correct: 0,
                explanation: {
                    en: "Ocean waves are primarily created by wind blowing across the water surface, transferring energy that creates the up-and-down motion we see as waves.",
                    es: "Las olas del océano se crean principalmente por el viento que sopla a través de la superficie del agua, transfiriendo energía que crea el movimiento hacia arriba y hacia abajo que vemos como olas.",
                    de: "Meereswellen entstehen hauptsächlich durch Wind, der über die Wasseroberfläche weht und Energie überträgt, die die Auf- und Abbewegung erzeugt, die wir als Wellen sehen.",
                    nl: "Oceaangolven worden voornamelijk veroorzaakt door wind die over het wateroppervlak blaast, energie overdraagt die de op-en-neer beweging creëert die we zien als golven."
                }
            },
            {
                question: {
                    en: "What is humidity?",
                    es: "¿Qué es la humedad?",
                    de: "Was ist Luftfeuchtigkeit?",
                    nl: "Wat is luchtvochtigheid?"
                },
                options: [
                    { en: "How much water is in the air", es: "Cuánta agua hay en el aire", de: "Wie viel Wasser in der Luft ist", nl: "Hoeveel water er in de lucht zit" },
                    { en: "How fast wind blows", es: "Qué tan rápido sopla el viento", de: "Wie schnell Wind weht", nl: "Hoe snel wind waait" },
                    { en: "How hot the sun is", es: "Qué tan caliente está el sol", de: "Wie heiß die Sonne ist", nl: "Hoe heet de zon is" },
                    { en: "How many clouds there are", es: "Cuántas nubes hay", de: "Wie viele Wolken es gibt", nl: "Hoeveel wolken er zijn" }
                ],
                correct: 0,
                explanation: {
                    en: "Humidity measures the amount of water vapor present in the air, expressed as a percentage of the maximum amount the air can hold at that temperature.",
                    es: "La humedad mide la cantidad de vapor de agua presente en el aire, expresada como un porcentaje de la cantidad máxima que el aire puede contener a esa temperatura.",
                    de: "Luftfeuchtigkeit misst die Menge an Wasserdampf in der Luft, ausgedrückt als Prozentsatz der maximalen Menge, die die Luft bei dieser Temperatur halten kann.",
                    nl: "Luchtvochtigheid meet de hoeveelheid waterdamp aanwezig in de lucht, uitgedrukt als percentage van de maximale hoeveelheid die de lucht bij die temperatuur kan bevatten."
                }
            },
            {
                question: {
                    en: "When does dew form on grass?",
                    es: "¿Cuándo se forma rocío en el césped?",
                    de: "Wann bildet sich Tau auf Gras?",
                    nl: "Wanneer vormt zich dauw op gras?"
                },
                options: [
                    { en: "At night when it's cool", es: "En la noche cuando está fresco", de: "Nachts, wenn es kühl ist", nl: "'s Nachts als het koel is" },
                    { en: "During hot afternoons", es: "Durante tardes calurosas", de: "Während heißer Nachmittage", nl: "Tijdens hete middagen" },
                    { en: "Only during storms", es: "Solo durante tormentas", de: "Nur während Stürmen", nl: "Alleen tijdens stormen" },
                    { en: "When it rains", es: "Cuando llueve", de: "Wenn es regnet", nl: "Als het regent" }
                ],
                correct: 0,
                explanation: {
                    en: "Dew forms when cool nighttime temperatures cause water vapor in the air to condense on cool surfaces like grass, flowers, and cars.",
                    es: "El rocío se forma cuando las temperaturas frescas nocturnas hacen que el vapor de agua en el aire se condense en superficies frías como césped, flores y carros.",
                    de: "Tau bildet sich, wenn kühle nächtliche Temperaturen dazu führen, dass Wasserdampf in der Luft auf kühlen Oberflächen wie Gras, Blumen und Autos kondensiert.",
                    nl: "Dauw vormt zich wanneer koele nachttemperaturen ervoor zorgen dat waterdamp in de lucht condenseert op koele oppervlakken zoals gras, bloemen en auto's."
                }
            },
            {
                question: {
                    en: "What makes some places warmer than others?",
                    es: "¿Qué hace que algunos lugares sean más cálidos que otros?",
                    de: "Was macht manche Orte wärmer als andere?",
                    nl: "Wat maakt sommige plaatsen warmer dan andere?"
                },
                options: [
                    { en: "How close they are to the equator", es: "Qué tan cerca están del ecuador", de: "Wie nah sie am Äquator sind", nl: "Hoe dicht ze bij de evenaar zijn" },
                    { en: "How many people live there", es: "Cuánta gente vive allí", de: "Wie viele Menschen dort leben", nl: "Hoeveel mensen er wonen" },
                    { en: "The color of the soil", es: "El color del suelo", de: "Die Farbe des Bodens", nl: "De kleur van de grond" },
                    { en: "How many trees there are", es: "Cuántos árboles hay", de: "Wie viele Bäume es gibt", nl: "Hoeveel bomen er zijn" }
                ],
                correct: 0,
                explanation: {
                    en: "Proximity to the equator determines temperature because places closer to the equator receive more direct sunlight year-round than polar regions.",
                    es: "La proximidad al ecuador determina la temperatura porque los lugares más cercanos al ecuador reciben luz solar más directa durante todo el año que las regiones polares.",
                    de: "Die Nähe zum Äquator bestimmt die Temperatur, weil Orte näher am Äquator das ganze Jahr über direkteres Sonnenlicht erhalten als polare Regionen.",
                    nl: "Nabijheid van de evenaar bepaalt de temperatuur omdat plaatsen dichter bij de evenaar het hele jaar door meer direct zonlicht ontvangen dan poolgebieden."
                }
            },
            {
                question: {
                    en: "What do we call the long, dry season in some places?",
                    es: "¿Cómo llamamos a la temporada larga y seca en algunos lugares?",
                    de: "Wie nennen wir die lange, trockene Jahreszeit an manchen Orten?",
                    nl: "Hoe noemen we het lange, droge seizoen op sommige plaatsen?"
                },
                options: [
                    { en: "Drought", es: "Sequía", de: "Dürre", nl: "Droogte" },
                    { en: "Monsoon", es: "Monzón", de: "Monsun", nl: "Moesson" },
                    { en: "Hurricane", es: "Huracán", de: "Hurrikan", nl: "Orkaan" },
                    { en: "Blizzard", es: "Ventisca", de: "Schneesturm", nl: "Sneeuwstorm" }
                ],
                correct: 0,
                explanation: {
                    en: "A drought is an extended period of unusually low rainfall that can last months or years, causing water shortages and affecting agriculture.",
                    es: "Una sequía es un período extendido de lluvia inusualmente baja que puede durar meses o años, causando escasez de agua y afectando la agricultura.",
                    de: "Eine Dürre ist eine ausgedehnte Periode ungewöhnlich geringen Niederschlags, die Monate oder Jahre dauern kann und Wassermangel verursacht und die Landwirtschaft beeinträchtigt.",
                    nl: "Een droogte is een langdurige periode van ongewoon weinig regenval die maanden of jaren kan duren, waardoor watertekorten ontstaan en de landbouw wordt beïnvloed."
                }
            },
            {
                question: {
                    en: "What kind of weather do deserts have?",
                    es: "¿Qué tipo de clima tienen los desiertos?",
                    de: "Was für Wetter haben Wüsten?",
                    nl: "Wat voor weer hebben woestijnen?"
                },
                options: [
                    { en: "Very hot and dry", es: "Muy caliente y seco", de: "Sehr heiß und trocken", nl: "Heel heet en droog" },
                    { en: "Cold and snowy", es: "Frío y nevado", de: "Kalt und schneereich", nl: "Koud en sneeuwrijk" },
                    { en: "Rainy all the time", es: "Lluvioso todo el tiempo", de: "Die ganze Zeit regnerisch", nl: "De hele tijd regenachtig" },
                    { en: "Windy but cool", es: "Ventoso pero fresco", de: "Windig aber kühl", nl: "Winderig maar koel" }
                ],
                correct: 0,
                explanation: {
                    en: "Deserts are characterized by very low rainfall (less than 10 inches per year), extreme temperature variations, and limited vegetation adapted to dry conditions.",
                    es: "Los desiertos se caracterizan por muy poca lluvia (menos de 10 pulgadas por año), variaciones extremas de temperatura y vegetación limitada adaptada a condiciones secas.",
                    de: "Wüsten sind durch sehr geringen Niederschlag (weniger als 25 cm pro Jahr), extreme Temperaturschwankungen und begrenzte Vegetation gekennzeichnet, die an trockene Bedingungen angepasst ist.",
                    nl: "Woestijnen worden gekenmerkt door zeer weinig regenval (minder dan 25 cm per jaar), extreme temperatuurschommelingen en beperkte vegetatie aangepast aan droge omstandigheden."
                }
            },
            {
                question: {
                    en: "What happens to ice when it gets warm?",
                    es: "¿Qué le pasa al hielo cuando se calienta?",
                    de: "Was passiert mit Eis, wenn es warm wird?",
                    nl: "Wat gebeurt er met ijs als het warm wordt?"
                },
                options: [
                    { en: "It melts into water", es: "Se derrite en agua", de: "Es schmilzt zu Wasser", nl: "Het smelt tot water" },
                    { en: "It gets harder", es: "Se vuelve más duro", de: "Es wird härter", nl: "Het wordt harder" },
                    { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" },
                    { en: "It grows bigger", es: "Crece más grande", de: "Es wird größer", nl: "Het wordt groter" }
                ],
                correct: 0,
                explanation: {
                    en: "Ice melts into liquid water when heated above its freezing point (32°F/0°C) because the molecular structure changes from solid to liquid state.",
                    es: "El hielo se derrite en agua líquida cuando se calienta por encima de su punto de congelación (32°F/0°C) porque la estructura molecular cambia de estado sólido a líquido.",
                    de: "Eis schmilzt zu flüssigem Wasser, wenn es über seinen Gefrierpunkt (0°C) erhitzt wird, weil sich die Molekülstruktur vom festen in den flüssigen Zustand ändert.",
                    nl: "Ijs smelt tot vloeibaar water wanneer het wordt verwarmd boven het vriespunt (0°C) omdat de moleculaire structuur verandert van vaste naar vloeibare toestand."
                }
            },
            {
                question: {
                    en: "What do we call a big storm with lots of snow?",
                    es: "¿Cómo llamamos a una gran tormenta con mucha nieve?",
                    de: "Wie nennen wir einen großen Sturm mit viel Schnee?",
                    nl: "Hoe noemen we een grote storm met veel sneeuw?"
                },
                options: [
                    { en: "Blizzard", es: "Ventisca", de: "Schneesturm", nl: "Sneeuwstorm" },
                    { en: "Hurricane", es: "Huracán", de: "Hurrikan", nl: "Orkaan" },
                    { en: "Tornado", es: "Tornado", de: "Tornado", nl: "Tornado" },
                    { en: "Thunderstorm", es: "Tormenta eléctrica", de: "Gewitter", nl: "Onweersbui" }
                ],
                correct: 0,
                explanation: {
                    en: "A blizzard is a severe snowstorm with strong winds (over 35 mph), heavy snowfall, and low visibility that can create dangerous conditions.",
                    es: "Una ventisca es una tormenta de nieve severa con vientos fuertes (más de 35 mph), nevada intensa y baja visibilidad que puede crear condiciones peligrosas.",
                    de: "Ein Schneesturm ist ein schwerer Schneesturm mit starken Winden (über 56 km/h), starkem Schneefall und geringer Sichtweite, der gefährliche Bedingungen schaffen kann.",
                    nl: "Een sneeuwstorm is een zware sneeuwbui met sterke winden (meer dan 56 km/u), zware sneeuwval en slecht zicht die gevaarlijke omstandigheden kan creëren."
                }
            },
            {
                question: {
                    en: "How do meteorologists predict the weather?",
                    es: "¿Cómo predicen el clima los meteorólogos?",
                    de: "Wie sagen Meteorologen das Wetter voraus?",
                    nl: "Hoe voorspellen meteorologen het weer?"
                },
                options: [
                    { en: "By using weather instruments and computers", es: "Usando instrumentos meteorológicos y computadoras", de: "Durch Wetterinstrumente und Computer", nl: "Door weerinstrumenten en computers te gebruiken" },
                    { en: "By looking at tea leaves", es: "Mirando hojas de té", de: "Durch Betrachten von Teeblättern", nl: "Door naar theebladeren te kijken" },
                    { en: "By asking animals", es: "Preguntando a los animales", de: "Durch Fragen der Tiere", nl: "Door het aan dieren te vragen" },
                    { en: "By guessing randomly", es: "Adivinando al azar", de: "Durch zufälliges Raten", nl: "Door willekeurig te gokken" }
                ],
                correct: 0,
                explanation: {
                    en: "Meteorologists use weather stations, satellites, radar, computer models, and atmospheric data to analyze patterns and make accurate weather forecasts.",
                    es: "Los meteorólogos usan estaciones meteorológicas, satélites, radar, modelos de computadora y datos atmosféricos para analizar patrones y hacer pronósticos precisos del tiempo.",
                    de: "Meteorologen verwenden Wetterstationen, Satelliten, Radar, Computermodelle und atmosphärische Daten, um Muster zu analysieren und genaue Wettervorhersagen zu machen.",
                    nl: "Meteorologen gebruiken weerstations, satellieten, radar, computermodellen en atmosferische data om patronen te analyseren en nauwkeurige weersvoorspellingen te maken."
                }
            },
            {
                question: {
                    en: "What is the hottest layer of Earth's atmosphere?",
                    es: "¿Cuál es la capa más caliente de la atmósfera terrestre?",
                    de: "Was ist die heißeste Schicht der Erdatmosphäre?",
                    nl: "Wat is de heetste laag van de atmosfeer van de aarde?"
                },
                options: [
                    { en: "Thermosphere", es: "Termósfera", de: "Thermosphäre", nl: "Thermosfeer" },
                    { en: "Troposphere", es: "Tropósfera", de: "Troposphäre", nl: "Troposfeer" },
                    { en: "Stratosphere", es: "Estratósfera", de: "Stratosphäre", nl: "Stratosfeer" },
                    { en: "Mesosphere", es: "Mesósfera", de: "Mesosphäre", nl: "Mesosfeer" }
                ],
                correct: 0,
                explanation: {
                    en: "The thermosphere is the hottest atmospheric layer, reaching temperatures up to 4,500°F (2,500°C) due to absorption of high-energy solar radiation.",
                    es: "La termósfera es la capa atmosférica más caliente, alcanzando temperaturas de hasta 4,500°F (2,500°C) debido a la absorción de radiación solar de alta energía.",
                    de: "Die Thermosphäre ist die heißeste atmosphärische Schicht und erreicht Temperaturen von bis zu 2.500°C aufgrund der Absorption hochenergetischer Sonnenstrahlung.",
                    nl: "De thermosfeer is de heetste atmosferische laag, die temperaturen bereikt tot 2.500°C vanwege absorptie van hoogenergetische zonnestraling."
                }
            },
            {
                question: {
                    en: "What protects us from harmful sun rays?",
                    es: "¿Qué nos protege de los rayos solares dañinos?",
                    de: "Was schützt uns vor schädlichen Sonnenstrahlen?",
                    nl: "Wat beschermt ons tegen schadelijke zonnestralen?"
                },
                options: [
                    { en: "The ozone layer", es: "La capa de ozono", de: "Die Ozonschicht", nl: "De ozonlaag" },
                    { en: "Clouds only", es: "Solo las nubes", de: "Nur Wolken", nl: "Alleen wolken" },
                    { en: "The moon", es: "La luna", de: "Der Mond", nl: "De maan" },
                    { en: "Mountain ranges", es: "Cordilleras", de: "Gebirgsketten", nl: "Bergketens" }
                ],
                correct: 0,
                explanation: {
                    en: "The ozone layer in the stratosphere absorbs most of the sun's harmful ultraviolet (UV) radiation, protecting life on Earth from dangerous UV rays.",
                    es: "La capa de ozono en la estratosfera absorbe la mayoría de la radiación ultravioleta (UV) dañina del sol, protegiendo la vida en la Tierra de los rayos UV peligrosos.",
                    de: "Die Ozonschicht in der Stratosphäre absorbiert den größten Teil der schädlichen Ultraviolettstrahlung (UV) der Sonne und schützt das Leben auf der Erde vor gefährlichen UV-Strahlen.",
                    nl: "De ozonlaag in de stratosfeer absorbeert het meeste van de schadelijke ultraviolette (UV) straling van de zon, waardoor het leven op aarde wordt beschermd tegen gevaarlijke UV-stralen."
                }
            },
            {
                question: {
                    en: "What happens to puddles on a sunny day?",
                    es: "¿Qué pasa con los charcos en un día soleado?",
                    de: "Was passiert mit Pfützen an einem sonnigen Tag?",
                    nl: "Wat gebeurt er met plassen op een zonnige dag?"
                },
                options: [
                    { en: "They evaporate and disappear", es: "Se evaporan y desaparecen", de: "Sie verdunsten und verschwinden", nl: "Ze verdampen en verdwijnen" },
                    { en: "They get bigger", es: "Se vuelven más grandes", de: "Sie werden größer", nl: "Ze worden groter" },
                    { en: "They turn into ice", es: "Se convierten en hielo", de: "Sie werden zu Eis", nl: "Ze worden ijs" },
                    { en: "They change color", es: "Cambian de color", de: "Sie ändern die Farbe", nl: "Ze veranderen van kleur" }
                ],
                correct: 0,
                explanation: {
                    en: "Puddles evaporate on sunny days as heat energy from the sun causes water molecules to change from liquid to water vapor and rise into the atmosphere.",
                    es: "Los charcos se evaporan en días soleados ya que la energía calórica del sol hace que las moléculas de agua cambien de líquido a vapor de agua y suban a la atmósfera.",
                    de: "Pfützen verdunsten an sonnigen Tagen, da Wärmeenergie von der Sonne bewirkt, dass Wassermoleküle von flüssig zu Wasserdampf wechseln und in die Atmosphäre aufsteigen.",
                    nl: "Plassen verdampen op zonnige dagen omdat warmte-energie van de zon ervoor zorgt dat watermoleculen veranderen van vloeistof naar waterdamp en opstijgen naar de atmosfeer."
                }
            },
            {
                question: {
                    en: "What type of precipitation is hail?",
                    es: "¿Qué tipo de precipitación es el granizo?",
                    de: "Was für eine Niederschlagsart ist Hagel?",
                    nl: "Wat voor soort neerslag is hagel?"
                },
                options: [
                    { en: "Ice balls that fall from clouds", es: "Bolas de hielo que caen de las nubes", de: "Eiskugeln, die aus Wolken fallen", nl: "IJsballen die uit wolken vallen" },
                    { en: "Very cold rain", es: "Lluvia muy fría", de: "Sehr kalter Regen", nl: "Heel koude regen" },
                    { en: "Frozen leaves", es: "Hojas congeladas", de: "Gefrorene Blätter", nl: "Bevroren bladeren" },
                    { en: "Melted snow", es: "Nieve derretida", de: "Geschmolzener Schnee", nl: "Gesmolten sneeuw" }
                ],
                correct: 0,
                explanation: {
                    en: "Hail forms when raindrops are carried upward by strong thunderstorm winds, freeze into ice, and grow larger as they bounce up and down in the storm before falling.",
                    es: "El granizo se forma cuando las gotas de lluvia son llevadas hacia arriba por fuertes vientos de tormenta, se congelan en hielo y crecen más grandes mientras rebotan arriba y abajo en la tormenta antes de caer.",
                    de: "Hagel entsteht, wenn Regentropfen von starken Gewitterwinden nach oben getragen werden, zu Eis gefrieren und größer werden, während sie im Sturm auf und ab prallen, bevor sie fallen.",
                    nl: "Hagel vormt zich wanneer regendruppels door sterke onweerswinden omhoog worden gedragen, bevriezen tot ijs en groter worden terwijl ze op en neer stuiteren in de storm voordat ze vallen."
                }
            },
            {
                question: {
                    en: "Why is it cooler at higher altitudes?",
                    es: "¿Por qué hace más frío a mayor altitud?",
                    de: "Warum ist es in höheren Lagen kühler?",
                    nl: "Waarom is het koeler op grotere hoogtes?"
                },
                options: [
                    { en: "Air gets thinner and holds less heat", es: "El aire se vuelve más delgado y retiene menos calor", de: "Luft wird dünner und hält weniger Wärme", nl: "Lucht wordt dunner en houdt minder warmte vast" },
                    { en: "Mountains block the sun", es: "Las montañas bloquean el sol", de: "Berge blockieren die Sonne", nl: "Bergen blokkeren de zon" },
                    { en: "There are more clouds", es: "Hay más nubes", de: "Es gibt mehr Wolken", nl: "Er zijn meer wolken" },
                    { en: "Wind is stronger", es: "El viento es más fuerte", de: "Wind ist stärker", nl: "Wind is sterker" }
                ],
                correct: 0,
                explanation: {
                    en: "Air becomes thinner at higher altitudes, containing fewer molecules to hold heat, and temperatures decrease by about 3.5°F for every 1,000 feet of elevation.",
                    es: "El aire se vuelve más delgado a mayor altitud, conteniendo menos moléculas para retener calor, y las temperaturas disminuyen aproximadamente 3.5°F por cada 1,000 pies de elevación.",
                    de: "Die Luft wird in größeren Höhen dünner, enthält weniger Moleküle zum Halten von Wärme, und die Temperaturen sinken um etwa 2°C pro 300 Meter Höhe.",
                    nl: "Lucht wordt dunner op grotere hoogtes, bevat minder moleculen om warmte vast te houden, en temperaturen dalen ongeveer 2°C voor elke 300 meter hoogte."
                }
            },
            {
                question: {
                    en: "What makes lightning dangerous?",
                    es: "¿Qué hace que el rayo sea peligroso?",
                    de: "Was macht Blitze gefährlich?",
                    nl: "Wat maakt bliksem gevaarlijk?"
                },
                options: [
                    { en: "It carries powerful electricity", es: "Lleva electricidad poderosa", de: "Es trägt starke Elektrizität", nl: "Het draagt krachtige elektriciteit" },
                    { en: "It's very bright", es: "Es muy brillante", de: "Es ist sehr hell", nl: "Het is heel fel" },
                    { en: "It makes loud sounds", es: "Hace sonidos fuertes", de: "Es macht laute Geräusche", nl: "Het maakt luide geluiden" },
                    { en: "It moves very fast", es: "Se mueve muy rápido", de: "Es bewegt sich sehr schnell", nl: "Het beweegt heel snel" }
                ],
                correct: 0,
                explanation: {
                    en: "Lightning is dangerous because it carries millions of volts of electricity that can cause severe burns, cardiac arrest, and neurological damage.",
                    es: "El rayo es peligroso porque lleva millones de voltios de electricidad que pueden causar quemaduras severas, paro cardíaco y daño neurológico.",
                    de: "Blitze sind gefährlich, weil sie Millionen von Volt Elektrizität tragen, die schwere Verbrennungen, Herzstillstand und neurologische Schäden verursachen können.",
                    nl: "Bliksem is gevaarlijk omdat het miljoenen volts elektriciteit draagt die ernstige brandwonden, hartstilstand en neurologische schade kan veroorzaken."
                }
            },
            {
                question: {
                    en: "What should you do during a thunderstorm?",
                    es: "¿Qué deberías hacer durante una tormenta eléctrica?",
                    de: "Was solltest du während eines Gewitters tun?",
                    nl: "Wat moet je doen tijdens een onweersbui?"
                },
                options: [
                    { en: "Stay indoors and away from windows", es: "Quedarse adentro y lejos de las ventanas", de: "Drinnen bleiben und weg von Fenstern", nl: "Binnen blijven en weg van ramen" },
                    { en: "Go outside to watch", es: "Salir afuera a mirar", de: "Rausgehen zum Zuschauen", nl: "Naar buiten gaan om te kijken" },
                    { en: "Stand under tall trees", es: "Pararse bajo árboles altos", de: "Unter hohen Bäumen stehen", nl: "Onder hoge bomen staan" },
                    { en: "Play in the rain", es: "Jugar en la lluvia", de: "Im Regen spielen", nl: "In de regen spelen" }
                ],
                correct: 0,
                explanation: {
                    en: "During thunderstorms, stay indoors away from windows, avoid water and metal objects, and never stand under tall trees or in open areas.",
                    es: "Durante tormentas eléctricas, quédate adentro lejos de ventanas, evita agua y objetos metálicos, y nunca te pares bajo árboles altos o en áreas abiertas.",
                    de: "Während Gewittern bleiben Sie drinnen, weg von Fenstern, vermeiden Sie Wasser und Metallgegenstände und stehen Sie niemals unter hohen Bäumen oder in offenen Bereichen.",
                    nl: "Tijdens onweersbuien blijf binnen weg van ramen, vermijd water en metalen voorwerpen, en sta nooit onder hoge bomen of in open gebieden."
                }
            },
            {
                question: {
                    en: "How do weather patterns affect plants and animals?",
                    es: "¿Cómo afectan los patrones climáticos a plantas y animales?",
                    de: "Wie beeinflussen Wettermuster Pflanzen und Tiere?",
                    nl: "Hoe beïnvloeden weerpatronen planten en dieren?"
                },
                options: [
                    { en: "They determine when to grow, sleep, or migrate", es: "Determinan cuándo crecer, dormir o migrar", de: "Sie bestimmen wann zu wachsen, schlafen oder wandern", nl: "Ze bepalen wanneer te groeien, slapen of migreren" },
                    { en: "They don't affect them at all", es: "No los afectan en absoluto", de: "Sie beeinflussen sie überhaupt nicht", nl: "Ze beïnvloeden hen helemaal niet" },
                    { en: "They only change their colors", es: "Solo cambian sus colores", de: "Sie ändern nur ihre Farben", nl: "Ze veranderen alleen hun kleuren" },
                    { en: "They make them grow faster", es: "Los hacen crecer más rápido", de: "Sie lassen sie schneller wachsen", nl: "Ze laten hen sneller groeien" }
                ],
                correct: 0,
                explanation: {
                    en: "Weather patterns act as natural signals that tell plants when to bloom, animals when to migrate, and both when to prepare for seasonal changes.",
                    es: "Los patrones climáticos actúan como señales naturales que dicen a las plantas cuándo florecer, a los animales cuándo migrar, y a ambos cuándo prepararse para cambios estacionales.",
                    de: "Wettermuster fungieren als natürliche Signale, die Pflanzen sagen, wann sie blühen sollen, Tieren, wann sie wandern sollen, und beiden, wann sie sich auf saisonale Veränderungen vorbereiten sollen.",
                    nl: "Weerpatronen fungeren als natuurlijke signalen die planten vertellen wanneer te bloeien, dieren wanneer te migreren, en beide wanneer zich voor te bereiden op seizoensveranderingen."
                }
            },
            {
                question: {
                    en: "What can people do to stay safe in extreme weather?",
                    es: "¿Qué pueden hacer las personas para mantenerse seguras en clima extremo?",
                    de: "Was können Menschen tun, um bei extremem Wetter sicher zu bleiben?",
                    nl: "Wat kunnen mensen doen om veilig te blijven bij extreem weer?"
                },
                options: [
                    { en: "Listen to weather warnings and prepare ahead", es: "Escuchar advertencias meteorológicas y prepararse con anticipación", de: "Wetterwarnungen hören und sich vorbereiten", nl: "Luister naar weerwaarschuwingen en bereid je voor" },
                    { en: "Ignore all weather reports", es: "Ignorar todos los reportes del tiempo", de: "Alle Wetterberichte ignorieren", nl: "Alle weerberichten negeren" },
                    { en: "Go outside during storms", es: "Salir durante tormentas", de: "Während Stürmen rausgehen", nl: "Naar buiten gaan tijdens stormen" },
                    { en: "Never check the weather", es: "Nunca revisar el clima", de: "Nie das Wetter überprüfen", nl: "Nooit het weer checken" }
                ],
                correct: 0,
                explanation: {
                    en: "People can stay safe by monitoring weather forecasts, having emergency supplies ready, following evacuation orders, and taking appropriate shelter during severe weather events.",
                    es: "Las personas pueden mantenerse seguras monitoreando pronósticos del tiempo, teniendo suministros de emergencia listos, siguiendo órdenes de evacuación y refugiándose apropiadamente durante eventos climáticos severos.",
                    de: "Menschen können sicher bleiben, indem sie Wettervorhersagen überwachen, Notvorräte bereithalten, Evakuierungsbefehlen folgen und bei schweren Wetterereignissen angemessenen Schutz suchen.",
                    nl: "Mensen kunnen veilig blijven door weersvoorspellingen te volgen, noodvoorraden klaar te hebben, evacuatiebevelen op te volgen en gepaste beschutting te zoeken tijdens zware weersomstandigheden."
                }
            },
            {
                question: {
                    en: "Why is studying weather important?",
                    es: "¿Por qué es importante estudiar el clima?",
                    de: "Warum ist es wichtig, das Wetter zu studieren?",
                    nl: "Waarom is het belangrijk om het weer te bestuderen?"
                },
                options: [
                    { en: "It helps us prepare and stay safe", es: "Nos ayuda a prepararnos y mantenernos seguros", de: "Es hilft uns, uns vorzubereiten und sicher zu bleiben", nl: "Het helpt ons voorbereiden en veilig blijven" },
                    { en: "Weather never changes", es: "El clima nunca cambia", de: "Das Wetter ändert sich nie", nl: "Het weer verandert nooit" },
                    { en: "It's just for fun", es: "Es solo por diversión", de: "Es ist nur zum Spaß", nl: "Het is alleen voor de lol" },
                    { en: "Weather doesn't affect people", es: "El clima no afecta a las personas", de: "Wetter beeinflusst Menschen nicht", nl: "Weer beïnvloedt mensen niet" }
                ],
                correct: 0,
                explanation: {
                    en: "Studying weather helps us prepare for dangerous storms, plan agricultural activities, make informed decisions, and protect lives and property from weather-related hazards.",
                    es: "Estudiar el clima nos ayuda a prepararnos para tormentas peligrosas, planificar actividades agrícolas, tomar decisiones informadas y proteger vidas y propiedades de peligros relacionados con el clima.",
                    de: "Das Studium des Wetters hilft uns, uns auf gefährliche Stürme vorzubereiten, landwirtschaftliche Aktivitäten zu planen, informierte Entscheidungen zu treffen und Leben und Eigentum vor wetterbedingten Gefahren zu schützen.",
                    nl: "Het bestuderen van weer helpt ons voorbereiden op gevaarlijke stormen, landbouwactiviteiten plannen, geïnformeerde beslissingen nemen en levens en eigendom beschermen tegen weergerelateerde gevaren."
                }
            },
            {
                question: {
                    en: "What instrument measures air temperature?",
                    es: "¿Qué instrumento mide la temperatura del aire?",
                    de: "Welches Instrument misst die Lufttemperatur?",
                    nl: "Welk instrument meet de luchttemperatuur?"
                },
                options: [
                    { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" },
                    { en: "Barometer", es: "Barómetro", de: "Barometer", nl: "Barometer" },
                    { en: "Anemometer", es: "Anemómetro", de: "Anemometer", nl: "Anemometer" },
                    { en: "Hygrometer", es: "Higrómetro", de: "Hygrometer", nl: "Hygrometer" }
                ],
                correct: 0,
                explanation: {
                    en: "A thermometer is a device that measures temperature! It works by using materials that expand or contract when heated or cooled. Weather stations use thermometers to tell us how hot or cold it is outside. Some thermometers use mercury or alcohol, while digital ones use electronic sensors!",
                    es: "¡Un termómetro es un dispositivo que mide la temperatura! Funciona usando materiales que se expanden o contraen cuando se calientan o enfrían. Las estaciones meteorológicas usan termómetros para decirnos qué tan caliente o frío está afuera. ¡Algunos termómetros usan mercurio o alcohol, mientras que los digitales usan sensores electrónicos!",
                    de: "Ein Thermometer ist ein Gerät, das die Temperatur misst! Es funktioniert, indem es Materialien verwendet, die sich ausdehnen oder zusammenziehen, wenn sie erhitzt oder abgekühlt werden. Wetterstationen verwenden Thermometer, um uns zu sagen, wie heiß oder kalt es draußen ist. Einige Thermometer verwenden Quecksilber oder Alkohol, während digitale elektronische Sensoren verwenden!",
                    nl: "Een thermometer is een apparaat dat temperatuur meet! Het werkt door materialen te gebruiken die uitzetten of samentrekken wanneer ze verhit of afgekoeld worden. Weerstations gebruiken thermometers om ons te vertellen hoe warm of koud het buiten is. Sommige thermometers gebruiken kwik of alcohol, terwijl digitale elektronische sensoren gebruiken!"
                }
            },
            {
                question: {
                    en: "What type of cloud is thin, wispy, and high in the sky?",
                    es: "¿Qué tipo de nube es delgada, vaporosa y alta en el cielo?",
                    de: "Welche Art von Wolke ist dünn, wispig und hoch am Himmel?",
                    nl: "Welk type wolk is dun, ijl en hoog aan de hemel?"
                },
                options: [
                    { en: "Cirrus", es: "Cirros", de: "Cirrus", nl: "Cirrus" },
                    { en: "Cumulus", es: "Cúmulos", de: "Cumulus", nl: "Cumulus" },
                    { en: "Stratus", es: "Estratos", de: "Stratus", nl: "Stratus" },
                    { en: "Nimbus", es: "Nimbos", de: "Nimbus", nl: "Nimbus" }
                ],
                correct: 0,
                explanation: {
                    en: "Cirrus clouds are like nature's paintbrush strokes across the sky! They're made of ice crystals and found very high up in the atmosphere, about 6 miles above ground. They look thin and wispy, like hair or feathers, and often indicate that weather changes are coming in the next day or two!",
                    es: "¡Las nubes cirros son como las pinceladas de la naturaleza a través del cielo! Están hechas de cristales de hielo y se encuentran muy alto en la atmósfera, cerca de 10 kilómetros sobre el suelo. Se ven delgadas y vaporosas, como cabello o plumas, ¡y a menudo indican que cambios climáticos vendrán en los próximos uno o dos días!",
                    de: "Cirruswolken sind wie die Pinselstriche der Natur über den Himmel! Sie bestehen aus Eiskristallen und befinden sich sehr hoch in der Atmosphäre, etwa 10 Kilometer über dem Boden. Sie sehen dünn und wispig aus, wie Haare oder Federn, und zeigen oft an, dass sich das Wetter in den nächsten ein oder zwei Tagen ändern wird!",
                    nl: "Cirruswolken zijn als de penseelstreken van de natuur over de hemel! Ze bestaan uit ijskristallen en bevinden zich heel hoog in de atmosfeer, ongeveer 10 kilometer boven de grond. Ze zien er dun en ijl uit, zoals haar of veren, en geven vaak aan dat er weersveranderingen komen in de volgende dag of twee!"
                }
            },
            {
                question: {
                    en: "What causes lightning?",
                    es: "¿Qué causa los rayos?",
                    de: "Was verursacht Blitze?",
                    nl: "Wat veroorzaakt bliksem?"
                },
                options: [
                    { en: "Electrical charge buildup in clouds", es: "Acumulación de carga eléctrica en las nubes", de: "Elektrische Ladungsansammlung in Wolken", nl: "Elektrische lading opbouw in wolken" },
                    { en: "Hot air rising too fast", es: "Aire caliente subiendo demasiado rápido", de: "Heiße Luft steigt zu schnell auf", nl: "Warme lucht die te snel opstijgt" },
                    { en: "Rain falling too hard", es: "Lluvia cayendo demasiado fuerte", de: "Regen fällt zu stark", nl: "Regen die te hard valt" },
                    { en: "Wind moving too quickly", es: "Viento moviéndose demasiado rápido", de: "Wind bewegt sich zu schnell", nl: "Wind die te snel beweegt" }
                ],
                correct: 0,
                explanation: {
                    en: "Lightning is nature's giant spark! Inside storm clouds, ice particles bump into each other and create electrical charges. Positive charges build up at the top of the cloud while negative charges gather at the bottom. When the difference becomes too great, a massive spark jumps between them - that's lightning! It can reach temperatures hotter than the sun's surface!",
                    es: "¡Los rayos son la chispa gigante de la naturaleza! Dentro de las nubes de tormenta, las partículas de hielo chocan entre sí y crean cargas eléctricas. Las cargas positivas se acumulan en la parte superior de la nube mientras las cargas negativas se juntan en la parte inferior. Cuando la diferencia se vuelve demasiado grande, una chispa masiva salta entre ellas - ¡ese es el rayo! ¡Puede alcanzar temperaturas más calientes que la superficie del sol!",
                    de: "Blitze sind die riesigen Funken der Natur! In Gewitterwolken stoßen Eisteilchen zusammen und erzeugen elektrische Ladungen. Positive Ladungen sammeln sich oben in der Wolke, während negative Ladungen sich unten sammeln. Wenn der Unterschied zu groß wird, springt ein massiver Funke zwischen ihnen - das ist ein Blitz! Er kann Temperaturen erreichen, die heißer sind als die Sonnenoberfläche!",
                    nl: "Bliksem is de gigantische vonk van de natuur! In onweerswolken botsen ijsdeeltjes tegen elkaar en creëren elektrische ladingen. Positieve ladingen bouwen zich op aan de bovenkant van de wolk terwijl negatieve ladingen zich verzamelen aan de onderkant. Wanneer het verschil te groot wordt, springt een massieve vonk ertussen - dat is bliksem! Het kan temperaturen bereiken die heter zijn dan het oppervlak van de zon!"
                }
            },
            {
                question: {
                    en: "Why do we hear thunder after seeing lightning?",
                    es: "¿Por qué escuchamos el trueno después de ver el rayo?",
                    de: "Warum hören wir Donner nach dem Blitz?",
                    nl: "Waarom horen we donder na het zien van bliksem?"
                },
                options: [
                    { en: "Light travels faster than sound", es: "La luz viaja más rápido que el sonido", de: "Licht reist schneller als Schall", nl: "Licht reist sneller dan geluid" },
                    { en: "Lightning is silent", es: "Los rayos son silenciosos", de: "Blitze sind lautlos", nl: "Bliksem is stil" },
                    { en: "Thunder happens later", es: "El trueno sucede después", de: "Donner passiert später", nl: "Donder gebeurt later" },
                    { en: "Our eyes are faster than our ears", es: "Nuestros ojos son más rápidos que nuestros oídos", de: "Unsere Augen sind schneller als unsere Ohren", nl: "Onze ogen zijn sneller dan onze oren" }
                ],
                correct: 0,
                explanation: {
                    en: "Light travels much faster than sound! Lightning and thunder happen at exactly the same time, but light travels at about 186,000 miles per second while sound only travels about 1,100 feet per second. So we see the lightning flash instantly, but it takes time for the thunder sound to reach us. You can estimate how far away lightning is by counting seconds between flash and thunder, then dividing by 5!",
                    es: "¡La luz viaja mucho más rápido que el sonido! Los rayos y truenos suceden exactamente al mismo tiempo, pero la luz viaja a cerca de 300,000 kilómetros por segundo mientras el sonido solo viaja cerca de 340 metros por segundo. Así que vemos el destello del rayo instantáneamente, pero toma tiempo para que el sonido del trueno nos alcance. ¡Puedes estimar qué tan lejos está el rayo contando los segundos entre el destello y el trueno, luego dividiendo por 5!",
                    de: "Licht reist viel schneller als Schall! Blitz und Donner passieren zur exakt gleichen Zeit, aber Licht reist mit etwa 300,000 Kilometern pro Sekunde, während Schall nur etwa 340 Meter pro Sekunde reist. Also sehen wir den Blitzblitz sofort, aber es dauert Zeit, bis der Donnerschall uns erreicht. Du kannst schätzen, wie weit ein Blitz entfernt ist, indem du die Sekunden zwischen Blitz und Donner zählst und dann durch 5 teilst!",
                    nl: "Licht reist veel sneller dan geluid! Bliksem en donder gebeuren op precies hetzelfde moment, maar licht reist met ongeveer 300,000 kilometer per seconde terwijl geluid maar ongeveer 340 meter per seconde reist. Dus we zien de bliksemflits meteen, maar het duurt tijd voordat het dondergeluid ons bereikt. Je kunt schatten hoe ver bliksem weg is door de seconden te tellen tussen flits en donder, en dan te delen door 5!"
                }
            },
            {
                question: {
                    en: "What happens during a drought?",
                    es: "¿Qué sucede durante una sequía?",
                    de: "Was passiert während einer Dürre?",
                    nl: "Wat gebeurt er tijdens een droogte?"
                },
                options: [
                    { en: "There's much less rain than normal for a long time", es: "Hay mucha menos lluvia de lo normal por mucho tiempo", de: "Es gibt viel weniger Regen als normal für lange Zeit", nl: "Er valt veel minder regen dan normaal voor lange tijd" },
                    { en: "It rains too much", es: "Llueve demasiado", de: "Es regnet zu viel", nl: "Het regent te veel" },
                    { en: "The temperature gets very cold", es: "La temperatura se vuelve muy fría", de: "Die Temperatur wird sehr kalt", nl: "De temperatuur wordt heel koud" },
                    { en: "Strong winds blow constantly", es: "Vientos fuertes soplan constantemente", de: "Starke Winde wehen ständig", nl: "Sterke winden waaien constant" }
                ],
                correct: 0,
                explanation: {
                    en: "A drought happens when an area gets much less precipitation (rain or snow) than usual for many months or even years! This causes water shortages, makes it hard to grow crops, dries up rivers and lakes, and can lead to wildfires. Plants and animals suffer because they can't find enough water to survive.",
                    es: "¡Una sequía sucede cuando un área recibe mucha menos precipitación (lluvia o nieve) de lo usual por muchos meses o incluso años! Esto causa escasez de agua, hace difícil cultivar cosechas, seca ríos y lagos, y puede llevar a incendios forestales. Las plantas y animales sufren porque no pueden encontrar suficiente agua para sobrevivir.",
                    de: "Eine Dürre passiert, wenn ein Gebiet viel weniger Niederschlag (Regen oder Schnee) als üblich für viele Monate oder sogar Jahre bekommt! Das verursacht Wasserknappheit, macht es schwer, Pflanzen anzubauen, trocknet Flüsse und Seen aus und kann zu Waldbränden führen. Pflanzen und Tiere leiden, weil sie nicht genug Wasser finden können, um zu überleben.",
                    nl: "Een droogte gebeurt wanneer een gebied veel minder neerslag (regen of sneeuw) krijgt dan gewoonlijk voor vele maanden of zelfs jaren! Dit veroorzaakt watertekorten, maakt het moeilijk om gewassen te verbouwen, droogt rivieren en meren uit, en kan leiden tot bosbranden. Planten en dieren lijden omdat ze niet genoeg water kunnen vinden om te overleven."
                }
            },
            {
                question: {
                    en: "What is humidity?",
                    es: "¿Qué es la humedad?",
                    de: "Was ist Luftfeuchtigkeit?",
                    nl: "Wat is luchtvochtigheid?"
                },
                options: [
                    { en: "The amount of water vapor in the air", es: "La cantidad de vapor de agua en el aire", de: "Die Menge an Wasserdampf in der Luft", nl: "De hoeveelheid waterdamp in de lucht" },
                    { en: "How hot the air is", es: "Qué tan caliente está el aire", de: "Wie heiß die Luft ist", nl: "Hoe warm de lucht is" },
                    { en: "The speed of the wind", es: "La velocidad del viento", de: "Die Geschwindigkeit des Windes", nl: "De snelheid van de wind" },
                    { en: "How much it will rain", es: "Cuánto va a llover", de: "Wie viel es regnen wird", nl: "Hoeveel het gaat regenen" }
                ],
                correct: 0,
                explanation: {
                    en: "Humidity is the amount of invisible water vapor floating in the air! When humidity is high, the air feels sticky and muggy because there's lots of water vapor. When humidity is low, the air feels dry. High humidity makes us feel hotter because our sweat doesn't evaporate as easily, while low humidity can make our skin and lips feel dry!",
                    es: "¡La humedad es la cantidad de vapor de agua invisible flotando en el aire! Cuando la humedad es alta, el aire se siente pegajoso y bochornoso porque hay mucho vapor de agua. Cuando la humedad es baja, el aire se siente seco. ¡La humedad alta nos hace sentir más calor porque nuestro sudor no se evapora tan fácilmente, mientras que la humedad baja puede hacer que nuestra piel y labios se sientan secos!",
                    de: "Luftfeuchtigkeit ist die Menge an unsichtbarem Wasserdampf, der in der Luft schwebt! Wenn die Luftfeuchtigkeit hoch ist, fühlt sich die Luft klebrig und schwül an, weil viel Wasserdampf da ist. Wenn die Luftfeuchtigkeit niedrig ist, fühlt sich die Luft trocken an. Hohe Luftfeuchtigkeit lässt uns heißer fühlen, weil unser Schweiß nicht so leicht verdunstet, während niedrige Luftfeuchtigkeit unsere Haut und Lippen trocken fühlen lassen kann!",
                    nl: "Luchtvochtigheid is de hoeveelheid onzichtbare waterdamp die in de lucht zweeft! Wanneer de luchtvochtigheid hoog is, voelt de lucht plakkerig en broeierig aan omdat er veel waterdamp is. Wanneer de luchtvochtigheid laag is, voelt de lucht droog aan. Hoge luchtvochtigheid laat ons warmer voelen omdat ons zweet niet zo gemakkelijk verdampt, terwijl lage luchtvochtigheid onze huid en lippen droog kan laten voelen!"
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
                    { en: "Water moving between oceans, air, and land", es: "Agua moviéndose entre océanos, aire y tierra", de: "Wasser bewegt sich zwischen Ozeanen, Luft und Land", nl: "Water dat beweegt tussen oceanen, lucht en land" },
                    { en: "Water only staying in oceans", es: "Agua solo quedándose en océanos", de: "Wasser bleibt nur in Ozeanen", nl: "Water dat alleen in oceanen blijft" },
                    { en: "Water disappearing forever", es: "Agua desapareciendo para siempre", de: "Wasser verschwindet für immer", nl: "Water dat voor altijd verdwijnt" },
                    { en: "Water being created new each day", es: "Agua siendo creada nueva cada día", de: "Wasser wird jeden Tag neu geschaffen", nl: "Water dat elke dag nieuw wordt gemaakt" }
                ],
                correct: 0,
                explanation: {
                    en: "The water cycle is like nature's recycling system! Water evaporates from oceans, lakes, and rivers into the air. It forms clouds, then falls as rain or snow. This water flows back to rivers and oceans, or seeps into the ground. The same water keeps moving around and around in this endless cycle - the water you drink today might have once fallen as rain on dinosaurs!",
                    es: "¡El ciclo del agua es como el sistema de reciclaje de la naturaleza! El agua se evapora de océanos, lagos y ríos hacia el aire. Forma nubes, luego cae como lluvia o nieve. Esta agua fluye de vuelta a ríos y océanos, o se filtra en el suelo. La misma agua sigue moviéndose una y otra vez en este ciclo sin fin - ¡el agua que bebes hoy podría haber caído una vez como lluvia sobre dinosaurios!",
                    de: "Der Wasserkreislauf ist wie das Recycling-System der Natur! Wasser verdunstet aus Ozeanen, Seen und Flüssen in die Luft. Es bildet Wolken, dann fällt es als Regen oder Schnee. Dieses Wasser fließt zurück zu Flüssen und Ozeanen oder sickert in den Boden. Dasselbe Wasser bewegt sich immer wieder in diesem endlosen Kreislauf - das Wasser, das du heute trinkst, könnte einst als Regen auf Dinosaurier gefallen sein!",
                    nl: "De waterkringloop is als het recyclingsysteem van de natuur! Water verdampt uit oceanen, meren en rivieren naar de lucht. Het vormt wolken, dan valt het als regen of sneeuw. Dit water stroomt terug naar rivieren en oceanen, of sijpelt in de grond. Hetzelfde water blijft bewegen rond en rond in deze eindeloze cyclus - het water dat je vandaag drinkt heeft misschien ooit als regen op dinosaurussen gevallen!"
                }
            },
            {
                question: {
                    en: "What causes different seasons?",
                    es: "¿Qué causa las diferentes estaciones?",
                    de: "Was verursacht verschiedene Jahreszeiten?",
                    nl: "Wat veroorzaakt verschillende seizoenen?"
                },
                options: [
                    { en: "Earth tilts as it orbits the sun", es: "La Tierra se inclina mientras orbita el sol", de: "Die Erde neigt sich, während sie die Sonne umkreist", nl: "De aarde kantelt terwijl ze om de zon draait" },
                    { en: "Earth gets closer and farther from the sun", es: "La Tierra se acerca y aleja del sol", de: "Die Erde kommt der Sonne näher und entfernt sich von ihr", nl: "De aarde komt dichter bij en verder van de zon" },
                    { en: "The sun gets hotter and cooler", es: "El sol se vuelve más caliente y más frío", de: "Die Sonne wird heißer und kühler", nl: "De zon wordt warmer en koeler" },
                    { en: "Clouds block the sun differently", es: "Las nubes bloquean el sol de manera diferente", de: "Wolken blockieren die Sonne unterschiedlich", nl: "Wolken blokkeren de zon anders" }
                ],
                correct: 0,
                explanation: {
                    en: "Seasons happen because Earth tilts on its axis like a spinning top that's slightly tipped over! As Earth orbits the sun, sometimes the northern part tilts toward the sun (summer in the north), and sometimes it tilts away (winter in the north). This tilt affects how directly the sun's rays hit different parts of Earth throughout the year, creating our seasons!",
                    es: "¡Las estaciones suceden porque la Tierra se inclina en su eje como un trompo que está ligeramente inclinado! Mientras la Tierra orbita el sol, a veces la parte norte se inclina hacia el sol (verano en el norte), y a veces se inclina lejos (invierno en el norte). ¡Esta inclinación afecta qué tan directamente los rayos del sol golpean diferentes partes de la Tierra durante el año, creando nuestras estaciones!",
                    de: "Jahreszeiten entstehen, weil die Erde auf ihrer Achse geneigt ist wie ein Kreisel, der leicht geneigt ist! Während die Erde die Sonne umkreist, neigt sich manchmal der nördliche Teil zur Sonne (Sommer im Norden), und manchmal neigt er sich weg (Winter im Norden). Diese Neigung beeinflusst, wie direkt die Sonnenstrahlen verschiedene Teile der Erde das ganze Jahr über treffen und erschafft unsere Jahreszeiten!",
                    nl: "Seizoenen gebeuren omdat de aarde kantelt op zijn as als een tol die een beetje schuin staat! Terwijl de aarde om de zon draait, kantelt soms het noordelijke deel naar de zon (zomer in het noorden), en soms kantelt het weg (winter in het noorden). Deze kanteling beïnvloedt hoe direct de zonnestralen verschillende delen van de aarde raken gedurende het jaar, wat onze seizoenen creëert!"
                }
            },
            {
                question: {
                    en: "What is climate change?",
                    es: "¿Qué es el cambio climático?",
                    de: "Was ist Klimawandel?",
                    nl: "Wat is klimaatverandering?"
                },
                options: [
                    { en: "Long-term changes in Earth's average weather patterns", es: "Cambios a largo plazo en los patrones climáticos promedio de la Tierra", de: "Langfristige Veränderungen in den durchschnittlichen Wettermustern der Erde", nl: "Langetermijn veranderingen in de gemiddelde weerpatronen van de aarde" },
                    { en: "Daily weather changes", es: "Cambios climáticos diarios", de: "Tägliche Wetteränderungen", nl: "Dagelijkse weersveranderingen" },
                    { en: "Only temperature getting warmer", es: "Solo la temperatura volviéndose más caliente", de: "Nur die Temperatur wird wärmer", nl: "Alleen temperatuur die warmer wordt" },
                    { en: "Weather that changes every season", es: "Clima que cambia cada estación", de: "Wetter, das sich jede Jahreszeit ändert", nl: "Weer dat elk seizoen verandert" }
                ],
                correct: 0,
                explanation: {
                    en: "Climate change refers to long-term shifts in global or regional climate patterns, especially the warming that has occurred since the mid-20th century due to increased greenhouse gases in the atmosphere. It affects weather patterns, sea levels, ice caps, and ecosystems worldwide. Unlike daily weather changes, climate change happens over decades or centuries!",
                    es: "El cambio climático se refiere a cambios a largo plazo en patrones climáticos globales o regionales, especialmente el calentamiento que ha ocurrido desde mediados del siglo XX debido al aumento de gases de efecto invernadero en la atmósfera. Afecta patrones climáticos, niveles del mar, casquetes de hielo y ecosistemas mundialmente. ¡A diferencia de cambios climáticos diarios, el cambio climático sucede durante décadas o siglos!",
                    de: "Klimawandel bezieht sich auf langfristige Veränderungen in globalen oder regionalen Klimamustern, besonders die Erwärmung, die seit Mitte des 20. Jahrhunderts aufgrund erhöhter Treibhausgase in der Atmosphäre aufgetreten ist. Es beeinflusst Wettermuster, Meeresspiegel, Eiskappen und Ökosysteme weltweit. Anders als tägliche Wetteränderungen passiert Klimawandel über Jahrzehnte oder Jahrhunderte!",
                    nl: "Klimaatverandering verwijst naar langetermijn verschuivingen in mondiale of regionale klimaatpatronen, vooral de opwarming die heeft plaatsgevonden sinds het midden van de 20e eeuw door toegenomen broeikasgassen in de atmosfeer. Het beïnvloedt weerpatronen, zeespiegels, ijskappen en ecosystemen wereldwijd. In tegenstelling tot dagelijkse weersveranderingen, gebeurt klimaatverandering over decennia of eeuwen!"
                }
            },
            {
                question: {
                    en: "What tool helps predict the weather?",
                    es: "¿Qué herramienta ayuda a predecir el tiempo?",
                    de: "Welches Werkzeug hilft bei der Wettervorhersage?",
                    nl: "Welke tool helpt het weer voorspellen?"
                },
                options: [
                    { en: "Weather satellites and computers", es: "Satélites meteorológicos y computadoras", de: "Wettersatelliten und Computer", nl: "Weersatellieten en computers" },
                    { en: "Only looking at the sky", es: "Solo mirando el cielo", de: "Nur in den Himmel schauen", nl: "Alleen naar de lucht kijken" },
                    { en: "Asking animals", es: "Preguntando a animales", de: "Tiere fragen", nl: "Dieren vragen" },
                    { en: "Reading old newspapers", es: "Leyendo periódicos viejos", de: "Alte Zeitungen lesen", nl: "Oude kranten lezen" }
                ],
                correct: 0,
                explanation: {
                    en: "Modern weather forecasting uses amazing technology! Weather satellites in space take pictures of Earth and track cloud movements, while weather stations on the ground measure temperature, humidity, wind, and pressure. Powerful computers process all this data using complex mathematical models to predict what the weather will be like in the coming days. This helps meteorologists give us accurate forecasts!",
                    es: "¡La predicción meteorológica moderna usa tecnología increíble! Los satélites meteorológicos en el espacio toman fotos de la Tierra y rastrean movimientos de nubes, mientras las estaciones meteorológicas en tierra miden temperatura, humedad, viento y presión. Computadoras poderosas procesan todos estos datos usando modelos matemáticos complejos para predecir cómo será el tiempo en los próximos días. ¡Esto ayuda a los meteorólogos darnos pronósticos precisos!",
                    de: "Moderne Wettervorhersage verwendet erstaunliche Technologie! Wettersatelliten im Weltraum machen Fotos der Erde und verfolgen Wolkenbewegungen, während Wetterstationen am Boden Temperatur, Luftfeuchtigkeit, Wind und Druck messen. Mächtige Computer verarbeiten all diese Daten mit komplexen mathematischen Modellen, um vorherzusagen, wie das Wetter in den kommenden Tagen sein wird. Das hilft Meteorologen, uns genaue Vorhersagen zu geben!",
                    nl: "Moderne weersvoorspelling gebruikt geweldige technologie! Weersatellieten in de ruimte maken foto's van de aarde en volgen wolkenbewegingen, terwijl weerstations op de grond temperatuur, luchtvochtigheid, wind en druk meten. Krachtige computers verwerken al deze data met complexe wiskundige modellen om te voorspellen hoe het weer zal zijn in de komende dagen. Dit helpt meteorologen ons nauwkeurige voorspellingen te geven!"
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/science', level5);
    }
})();