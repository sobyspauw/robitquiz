(function() {
    const level6 = {
        name: {
            en: "Earth and Space",
            es: "Tierra y Espacio",
            de: "Erde und Weltraum",
            nl: "Aarde en Ruimte"
        },
        questions: [
            {
                question: {
                    en: "What percent of Earth's surface is covered by water?",
                    es: "¿Qué porcentaje de la superficie de la Tierra está cubierta por agua?",
                    de: "Wie viel Prozent der Erdoberfläche ist von Wasser bedeckt?",
                    nl: "Hoeveel procent van het aardoppervlak is bedekt met water?"
                },
                options: [
                    { en: "About 71%", es: "Aproximadamente 71%", de: "Etwa 71%", nl: "Ongeveer 71%" },
                    { en: "About 50%", es: "Aproximadamente 50%", de: "Etwa 50%", nl: "Ongeveer 50%" },
                    { en: "About 85%", es: "Aproximadamente 85%", de: "Etwa 85%", nl: "Ongeveer 85%" },
                    { en: "About 30%", es: "Aproximadamente 30%", de: "Etwa 30%", nl: "Ongeveer 30%" }
                ],
                correct: 0,
                explanation: {
                    en: "About 71% of Earth's surface is covered by oceans and seas. This makes Earth the 'Blue Planet' and is essential for supporting life as we know it.",
                    es: "Aproximadamente el 71% de la superficie de la Tierra está cubierta por océanos y mares. Esto hace que la Tierra sea el 'Planeta Azul' y es esencial para sostener la vida tal como la conocemos.",
                    de: "Etwa 71% der Erdoberfläche sind von Ozeanen und Meeren bedeckt. Das macht die Erde zum 'Blauen Planeten' und ist wesentlich für die Unterstützung des Lebens, wie wir es kennen.",
                    nl: "Ongeveer 71% van het aardoppervlak is bedekt door oceanen en zeeën. Dit maakt de aarde de 'Blauwe Planeet' en is essentieel voor het ondersteunen van leven zoals wij dat kennen."
                }
            },
            {
                question: {
                    en: "Which gas makes up most of Earth's atmosphere?",
                    es: "¿Qué gas compone la mayor parte de la atmósfera de la Tierra?",
                    de: "Welches Gas macht den größten Teil der Erdatmosphäre aus?",
                    nl: "Welk gas vormt het grootste deel van de atmosfeer van de aarde?"
                },
                options: [
                    { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
                    { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
                    { en: "Carbon dioxide", es: "Dióxido de carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
                    { en: "Hydrogen", es: "Hidrógeno", de: "Wasserstoff", nl: "Waterstof" }
                ],
                correct: 0,
                explanation: {
                    en: "Nitrogen makes up about 78% of Earth's atmosphere, while oxygen makes up about 21%. The remaining 1% consists of other gases like carbon dioxide and argon.",
                    es: "El nitrógeno constituye aproximadamente el 78% de la atmósfera terrestre, mientras que el oxígeno constituye aproximadamente el 21%. El 1% restante consiste en otros gases como dióxido de carbono y argón.",
                    de: "Stickstoff macht etwa 78% der Erdatmosphäre aus, während Sauerstoff etwa 21% ausmacht. Die verbleibenden 1% bestehen aus anderen Gasen wie Kohlendioxid und Argon.",
                    nl: "Stikstof vormt ongeveer 78% van de atmosfeer van de aarde, terwijl zuurstof ongeveer 21% vormt. De resterende 1% bestaat uit andere gassen zoals koolstofdioxide en argon."
                }
            },
            {
                question: {
                    en: "Which planet is the hottest in our solar system?",
                    es: "¿Cuál es el planeta más caliente de nuestro sistema solar?",
                    de: "Welcher ist der heißeste Planet in unserem Sonnensystem?",
                    nl: "Welke planeet is de heetste in ons zonnestelsel?"
                },
                options: [
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
                    { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" }
                ],
                correct: 0,
                explanation: {
                    en: "Venus is the hottest planet in our solar system with surface temperatures around 900°F (462°C) due to its thick atmosphere that traps heat, making it even hotter than Mercury despite being farther from the Sun.",
                    es: "Venus es el planeta más caliente de nuestro sistema solar con temperaturas superficiales de alrededor de 462°C debido a su atmósfera densa que atrapa el calor, haciéndolo incluso más caliente que Mercurio a pesar de estar más lejos del Sol.",
                    de: "Venus ist der heißeste Planet in unserem Sonnensystem mit Oberflächentemperaturen von etwa 462°C aufgrund seiner dichten Atmosphäre, die Wärme einfängt und ihn sogar heißer macht als Merkur, obwohl er weiter von der Sonne entfernt ist.",
                    nl: "Venus is de heetste planeet in ons zonnestelsel met oppervlaktetemperaturen van ongeveer 462°C door zijn dikke atmosfeer die warmte vasthoudt, waardoor het nog heter is dan Mercurius ondanks dat het verder van de zon staat."
                }
            },
            {
                question: {
                    en: "What do we call the layer of gases surrounding Earth?",
                    es: "¿Cómo llamamos a la capa de gases que rodea la Tierra?",
                    de: "Wie nennen wir die Schicht von Gasen, die die Erde umgibt?",
                    nl: "Hoe noemen we de laag gassen die de aarde omringt?"
                },
                options: [
                    { en: "Atmosphere", es: "Atmósfera", de: "Atmosphäre", nl: "Atmosfeer" },
                    { en: "Stratosphere", es: "Estratosfera", de: "Stratosphäre", nl: "Stratosfeer" },
                    { en: "Biosphere", es: "Biosfera", de: "Biosphäre", nl: "Biosfeer" },
                    { en: "Hydrosphere", es: "Hidrosfera", de: "Hydrosphäre", nl: "Hydrosfeer" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth's atmosphere is the layer of gases surrounding our planet. It protects us from harmful radiation, helps regulate temperature, and provides the air we breathe.",
                    es: "La atmósfera de la Tierra es la capa de gases que rodea nuestro planeta. Nos protege de la radiación dañina, ayuda a regular la temperatura y proporciona el aire que respiramos.",
                    de: "Die Atmosphäre der Erde ist die Gasschicht, die unseren Planeten umgibt. Sie schützt uns vor schädlicher Strahlung, hilft bei der Temperaturregulierung und liefert die Luft, die wir atmen.",
                    nl: "De atmosfeer van de aarde is de laag gassen die onze planeet omringt. Het beschermt ons tegen schadelijke straling, helpt de temperatuur te reguleren en levert de lucht die we inademen."
                }
            },
            {
                question: {
                    en: "What is our galaxy called?",
                    es: "¿Cómo se llama nuestra galaxia?",
                    de: "Wie heißt unsere Galaxie?",
                    nl: "Hoe heet onze melkweg?"
                },
                options: [
                    { en: "The Milky Way", es: "La Vía Láctea", de: "Die Milchstraße", nl: "De Melkweg" },
                    { en: "Andromeda", es: "Andrómeda", de: "Andromeda", nl: "Andromeda" },
                    { en: "The Solar System", es: "El Sistema Solar", de: "Das Sonnensystem", nl: "Het Zonnestelsel" },
                    { en: "The Big Dipper", es: "La Osa Mayor", de: "Der Große Wagen", nl: "De Grote Beer" }
                ],
                correct: 0,
                explanation: {
                    en: "The Milky Way is our home galaxy, a spiral galaxy containing over 100 billion stars, and our solar system is located in one of its spiral arms.",
                    es: "La Vía Láctea es nuestra galaxia hogar, una galaxia espiral que contiene más de 100 mil millones de estrellas, y nuestro sistema solar está ubicado en uno de sus brazos espirales.",
                    de: "Die Milchstraße ist unsere Heimatgalaxie, eine Spiralgalaxie mit über 100 Milliarden Sternen, und unser Sonnensystem befindet sich in einem ihrer Spiralarme.",
                    nl: "De Melkweg is onze thuismelkweg, een spiraalstelsel met meer dan 100 miljard sterren, en ons zonnestelsel bevindt zich in een van zijn spiraalarms."
                }
            },
            {
                question: {
                    en: "What causes tides in the ocean?",
                    es: "¿Qué causa las mareas en el océano?",
                    de: "Was verursacht die Gezeiten im Ozean?",
                    nl: "Wat veroorzaakt getijden in de oceaan?"
                },
                options: [
                    { en: "The moon's gravity pulling on Earth's water", es: "La gravedad de la luna tirando del agua de la Tierra", de: "Die Schwerkraft des Mondes zieht an der Erde", nl: "De zwaartekracht van de maan trekt aan het water van de aarde" },
                    { en: "Fish swimming in groups", es: "Peces nadando en grupos", de: "Fische schwimmen in Gruppen", nl: "Vissen zwemmen in groepen" },
                    { en: "Wind blowing hard", es: "Viento soplando fuerte", de: "Wind weht stark", nl: "Wind die hard blaast" },
                    { en: "The sun heating the water", es: "El sol calentando el agua", de: "Die Sonne erwärmt das Wasser", nl: "De zon die het water opwarmt" }
                ],
                correct: 0,
                explanation: {
                    en: "Ocean tides are caused by the gravitational pull of the moon and sun on Earth's water, with the moon having the stronger effect due to its closer proximity.",
                    es: "Las mareas oceánicas son causadas por la atracción gravitacional de la luna y el sol sobre el agua de la Tierra, con la luna teniendo el efecto más fuerte debido a su mayor proximidad.",
                    de: "Meeresgezeiten werden durch die Gravitationsanziehung von Mond und Sonne auf das Wasser der Erde verursacht, wobei der Mond aufgrund seiner näheren Nähe den stärkeren Effekt hat.",
                    nl: "Oceaangetijden worden veroorzaakt door de zwaartekrachtaantrekking van de maan en zon op het water van de aarde, waarbij de maan het sterkste effect heeft vanwege zijn dichtere nabijheid."
                }
            },
            {
                question: {
                    en: "How many phases does the moon have?",
                    es: "¿Cuántas fases tiene la luna?",
                    de: "Wie viele Phasen hat der Mond?",
                    nl: "Hoeveel fasen heeft de maan?"
                },
                options: [
                    { en: "Eight main phases", es: "Ocho fases principales", de: "Acht Hauptphasen", nl: "Acht hoofdfasen" },
                    { en: "Four phases", es: "Cuatro fases", de: "Vier Phasen", nl: "Vier fasen" },
                    { en: "Twelve phases", es: "Doce fases", de: "Zwölf Phasen", nl: "Twaalf fasen" },
                    { en: "Two phases", es: "Dos fases", de: "Zwei Phasen", nl: "Twee fasen" }
                ],
                correct: 0,
                explanation: {
                    en: "The moon has eight main phases as it orbits Earth: new moon, waxing crescent, first quarter, waxing gibbous, full moon, waning gibbous, third quarter, and waning crescent.",
                    es: "La luna tiene ocho fases principales mientras orbita la Tierra: luna nueva, creciente, cuarto creciente, gibosa creciente, luna llena, gibosa menguante, cuarto menguante y menguante.",
                    de: "Der Mond hat acht Hauptphasen, während er die Erde umkreist: Neumond, zunehmende Sichel, erstes Viertel, zunehmender Mond, Vollmond, abnehmender Mond, letztes Viertel und abnehmende Sichel.",
                    nl: "De maan heeft acht hoofdfasen terwijl hij om de aarde draait: nieuwe maan, wassende sikkel, eerste kwartier, wassende maan, volle maan, afnemende maan, laatste kwartier en afnemende sikkel."
                }
            },
            {
                question: {
                    en: "What do we call it when the moon looks completely round?",
                    es: "¿Cómo llamamos cuando la luna se ve completamente redonda?",
                    de: "Wie nennen wir es, wenn der Mond völlig rund aussieht?",
                    nl: "Hoe noemen we het als de maan er helemaal rond uitziet?"
                },
                options: [
                    { en: "Full moon", es: "Luna llena", de: "Vollmond", nl: "Volle maan" },
                    { en: "New moon", es: "Luna nueva", de: "Neumond", nl: "Nieuwe maan" },
                    { en: "Half moon", es: "Media luna", de: "Halbmond", nl: "Halve maan" },
                    { en: "Crescent moon", es: "Luna creciente", de: "Mondsichel", nl: "Wassende maan" }
                ],
                correct: 0,
                explanation: {
                    en: "A full moon occurs when Earth is between the sun and moon, so the entire face of the moon visible from Earth is illuminated by sunlight.",
                    es: "Una luna llena ocurre cuando la Tierra está entre el sol y la luna, por lo que toda la cara de la luna visible desde la Tierra está iluminada por la luz solar.",
                    de: "Ein Vollmond tritt auf, wenn die Erde zwischen Sonne und Mond steht, so dass die gesamte von der Erde sichtbare Mondfläche von Sonnenlicht beleuchtet wird.",
                    nl: "Een volle maan treedt op wanneer de aarde tussen de zon en maan staat, zodat het hele gezicht van de maan zichtbaar vanaf de aarde wordt verlicht door zonlicht."
                }
            },
            {
                question: {
                    en: "What do we call it when we can't see the moon?",
                    es: "¿Cómo llamamos cuando no podemos ver la luna?",
                    de: "Wie nennen wir es, wenn wir den Mond nicht sehen können?",
                    nl: "Hoe noemen we het als we de maan niet kunnen zien?"
                },
                options: [
                    { en: "New moon", es: "Luna nueva", de: "Neumond", nl: "Nieuwe maan" },
                    { en: "Full moon", es: "Luna llena", de: "Vollmond", nl: "Volle maan" },
                    { en: "Quarter moon", es: "Cuarto de luna", de: "Viertelmond", nl: "Kwart maan" },
                    { en: "Gibbous moon", es: "Luna gibosa", de: "Zunehmender Mond", nl: "Bobbelige maan" }
                ],
                correct: 0,
                explanation: {
                    en: "A new moon occurs when the moon is between Earth and the sun, so the side facing Earth is not illuminated and appears invisible to us.",
                    es: "Una luna nueva ocurre cuando la luna está entre la Tierra y el sol, por lo que el lado que mira hacia la Tierra no está iluminado y nos parece invisible.",
                    de: "Ein Neumond tritt auf, wenn der Mond zwischen Erde und Sonne steht, so dass die der Erde zugewandte Seite nicht beleuchtet ist und für uns unsichtbar erscheint.",
                    nl: "Een nieuwe maan treedt op wanneer de maan tussen de aarde en zon staat, zodat de kant die naar de aarde kijkt niet wordt verlicht en voor ons onzichtbaar lijkt."
                }
            },
            {
                question: {
                    en: "What are the three main layers of Earth?",
                    es: "¿Cuáles son las tres capas principales de la Tierra?",
                    de: "Was sind die drei Hauptschichten der Erde?",
                    nl: "Wat zijn de drie hoofdlagen van de aarde?"
                },
                options: [
                    { en: "Crust, mantle, and core", es: "Corteza, manto y núcleo", de: "Kruste, Mantel und Kern", nl: "Korst, mantel en kern" },
                    { en: "Land, water, and air", es: "Tierra, agua y aire", de: "Land, Wasser und Luft", nl: "Land, water en lucht" },
                    { en: "North, south, and middle", es: "Norte, sur y medio", de: "Nord, Süd und Mitte", nl: "Noord, zuid en midden" },
                    { en: "Hot, warm, and cold", es: "Caliente, tibio y frío", de: "Heiß, warm und kalt", nl: "Heet, warm en koud" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth has three main layers: the thin outer crust where we live, the hot rocky mantle in the middle, and the extremely hot metal core at the center.",
                    es: "La Tierra tiene tres capas principales: la delgada corteza exterior donde vivimos, el manto rocoso caliente en el medio, y el núcleo metálico extremadamente caliente en el centro.",
                    de: "Die Erde hat drei Hauptschichten: die dünne äußere Kruste, wo wir leben, den heißen felsigen Mantel in der Mitte und den extrem heißen Metallkern im Zentrum.",
                    nl: "De aarde heeft drie hoofdlagen: de dunne buitenste korst waar we leven, de hete rotsachtige mantel in het midden, en de extreem hete metalen kern in het centrum."
                }
            },
            {
                question: {
                    en: "What is the outer layer of Earth called?",
                    es: "¿Cómo se llama la capa exterior de la Tierra?",
                    de: "Wie heißt die äußere Schicht der Erde?",
                    nl: "Hoe heet de buitenste laag van de aarde?"
                },
                options: [
                    { en: "The crust", es: "La corteza", de: "Die Kruste", nl: "De korst" },
                    { en: "The mantle", es: "El manto", de: "Der Mantel", nl: "De mantel" },
                    { en: "The core", es: "El núcleo", de: "Der Kern", nl: "De kern" },
                    { en: "The surface", es: "La superficie", de: "Die Oberfläche", nl: "Het oppervlak" }
                ],
                correct: 0,
                explanation: {
                    en: "The Earth's crust is the thin, solid outermost layer that forms the continents and ocean floors, ranging from 5-70 kilometers thick.",
                    es: "La corteza terrestre es la capa exterior delgada y sólida que forma los continentes y fondos oceánicos, con un grosor de 5-70 kilómetros.",
                    de: "Die Erdkruste ist die dünne, feste äußerste Schicht, die die Kontinente und Meeresboden bildet und 5-70 Kilometer dick ist.",
                    nl: "De aardkorst is de dunne, vaste buitenste laag die de continenten en oceaanbodems vormt, variërend van 5-70 kilometer dik."
                }
            },
            {
                question: {
                    en: "What is at the very center of Earth?",
                    es: "¿Qué está en el centro mismo de la Tierra?",
                    de: "Was ist ganz im Zentrum der Erde?",
                    nl: "Wat zit er in het midden van de aarde?"
                },
                options: [
                    { en: "A hot metal core", es: "Un núcleo de metal caliente", de: "Ein heißer Metallkern", nl: "Een hete metalen kern" },
                    { en: "Cold water", es: "Agua fría", de: "Kaltes Wasser", nl: "Koud water" },
                    { en: "Empty space", es: "Espacio vacío", de: "Leerer Raum", nl: "Lege ruimte" },
                    { en: "Solid rock", es: "Roca sólida", de: "Fester Stein", nl: "Vaste steen" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth's core is made of iron and nickel, with temperatures reaching over 5,000°C (9,000°F), hotter than the surface of the sun.",
                    es: "El núcleo de la Tierra está hecho de hierro y níquel, con temperaturas que alcanzan más de 5,000°C, más caliente que la superficie del sol.",
                    de: "Der Erdkern besteht aus Eisen und Nickel, mit Temperaturen von über 5.000°C, heißer als die Oberfläche der Sonne.",
                    nl: "De kern van de aarde bestaat uit ijzer en nikkel, met temperaturen die meer dan 5.000°C bereiken, heter dan het oppervlak van de zon."
                }
            },
            {
                question: {
                    en: "What causes earthquakes?",
                    es: "¿Qué causa los terremotos?",
                    de: "Was verursacht Erdbeben?",
                    nl: "Wat veroorzaakt aardbevingen?"
                },
                options: [
                    { en: "Moving pieces of Earth's crust", es: "Piezas móviles de la corteza terrestre", de: "Sich bewegende Teile der Erdkruste", nl: "Bewegende stukken van de aardkorst" },
                    { en: "Too much rain", es: "Demasiada lluvia", de: "Zu viel Regen", nl: "Te veel regen" },
                    { en: "Animals jumping together", es: "Animales saltando juntos", de: "Tiere springen zusammen", nl: "Dieren die samen springen" },
                    { en: "Strong winds", es: "Vientos fuertes", de: "Starke Winde", nl: "Sterke wind" }
                ],
                correct: 0,
                explanation: {
                    en: "Earthquakes occur when tectonic plates (large pieces of Earth's crust) move and shift, releasing energy that shakes the ground.",
                    es: "Los terremotos ocurren cuando las placas tectónicas (grandes piezas de la corteza terrestre) se mueven y cambian, liberando energía que sacude el suelo.",
                    de: "Erdbeben treten auf, wenn tektonische Platten (große Stücke der Erdkruste) sich bewegen und verschieben und Energie freisetzen, die den Boden erschüttert.",
                    nl: "Aardbevingen treden op wanneer tektonische platen (grote stukken van de aardkorst) bewegen en verschuiven, energie vrijgeven die de grond doet schudden."
                }
            },
            {
                question: {
                    en: "What is a volcano?",
                    es: "¿Qué es un volcán?",
                    de: "Was ist ein Vulkan?",
                    nl: "Wat is een vulkaan?"
                },
                options: [
                    { en: "A mountain where hot rock comes out", es: "Una montaña donde sale roca caliente", de: "Ein Berg, aus dem heißes Gestein herauskommt", nl: "Een berg waar hete steen uit komt" },
                    { en: "A very tall tree", es: "Un árbol muy alto", de: "Ein sehr hoher Baum", nl: "Een heel hoge boom" },
                    { en: "A deep lake", es: "Un lago profundo", de: "Ein tiefer See", nl: "Een diep meer" },
                    { en: "A type of cloud", es: "Un tipo de nube", de: "Eine Art Wolke", nl: "Een soort wolk" }
                ],
                correct: 0,
                explanation: {
                    en: "A volcano is an opening in Earth's crust where molten rock (magma) from deep underground can erupt to the surface, often forming cone-shaped mountains.",
                    es: "Un volcán es una abertura en la corteza terrestre donde la roca derretida (magma) de las profundidades puede erupcionar hacia la superficie, a menudo formando montañas en forma de cono.",
                    de: "Ein Vulkan ist eine Öffnung in der Erdkruste, wo geschmolzenes Gestein (Magma) aus der Tiefe an die Oberfläche ausbrechen kann und oft kegelförmige Berge bildet.",
                    nl: "Een vulkaan is een opening in de aardkorst waar gesmolten steen (magma) van diep ondergronds kan uitbarsten naar het oppervlak, vaak kegelvormige bergen vormend."
                }
            },
            {
                question: {
                    en: "What do we call the hot melted rock that comes from volcanoes?",
                    es: "¿Cómo llamamos a la roca caliente derretida que sale de los volcanes?",
                    de: "Wie nennen wir das heiße geschmolzene Gestein aus Vulkanen?",
                    nl: "Hoe noemen we de hete gesmolten steen die uit vulkanen komt?"
                },
                options: [
                    { en: "Lava", es: "Lava", de: "Lava", nl: "Lava" },
                    { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
                    { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" },
                    { en: "Ice", es: "Hielo", de: "Eis", nl: "IJs" }
                ],
                correct: 0,
                explanation: {
                    en: "Lava is molten rock that has erupted from a volcano onto Earth's surface, cooling and hardening to form new rock layers.",
                    es: "La lava es roca derretida que ha erupcionado desde un volcán hacia la superficie terrestre, enfriándose y endureciéndose para formar nuevas capas de roca.",
                    de: "Lava ist geschmolzenes Gestein, das aus einem Vulkan an die Erdoberfläche ausgebrochen ist und abkühlt und erhärtet, um neue Gesteinsschichten zu bilden.",
                    nl: "Lava is gesmolten steen die uit een vulkaan naar het aardoppervlak is uitgebarsten, afkoelt en hard wordt om nieuwe steenlagen te vormen."
                }
            },
            {
                question: {
                    en: "What are continents?",
                    es: "¿Qué son los continentes?",
                    de: "Was sind Kontinente?",
                    nl: "Wat zijn continenten?"
                },
                options: [
                    { en: "Large areas of land on Earth", es: "Grandes áreas de tierra en la Tierra", de: "Große Landgebiete auf der Erde", nl: "Grote landgebieden op aarde" },
                    { en: "Types of oceans", es: "Tipos de océanos", de: "Arten von Ozeanen", nl: "Soorten oceanen" },
                    { en: "Clouds in the sky", es: "Nubes en el cielo", de: "Wolken am Himmel", nl: "Wolken in de lucht" },
                    { en: "Mountains only", es: "Solo montañas", de: "Nur Berge", nl: "Alleen bergen" }
                ],
                correct: 0,
                explanation: {
                    en: "Continents are large, continuous landmasses on Earth's surface, separated by oceans and distinguished by their unique geography, cultures, and ecosystems.",
                    es: "Los continentes son grandes masas terrestres continuas en la superficie de la Tierra, separados por océanos y distinguidos por su geografía, culturas y ecosistemas únicos.",
                    de: "Kontinente sind große, zusammenhängende Landmassen auf der Erdoberfläche, die durch Ozeane getrennt und durch ihre einzigartige Geografie, Kulturen und Ökosysteme unterschieden werden.",
                    nl: "Continenten zijn grote, continue landmassa's op het aardoppervlak, gescheiden door oceanen en onderscheiden door hun unieke geografie, culturen en ecosystemen."
                }
            },
            {
                question: {
                    en: "What are the main layers of Earth from the outside in?",
                    es: "¿Cuáles son las capas principales de la Tierra desde afuera hacia adentro?",
                    de: "Was sind die Hauptschichten der Erde von außen nach innen?",
                    nl: "Wat zijn de hoofdlagen van de aarde van buiten naar binnen?"
                },
                options: [
                    { en: "Crust, Mantle, Core", es: "Corteza, Manto, Núcleo", de: "Kruste, Mantel, Kern", nl: "Korst, Mantel, Kern" },
                    { en: "Core, Mantle, Crust", es: "Núcleo, Manto, Corteza", de: "Kern, Mantel, Kruste", nl: "Kern, Mantel, Korst" },
                    { en: "Atmosphere, Crust, Mantle", es: "Atmósfera, Corteza, Manto", de: "Atmosphäre, Kruste, Mantel", nl: "Atmosfeer, Korst, Mantel" },
                    { en: "Surface, Middle, Center", es: "Superficie, Medio, Centro", de: "Oberfläche, Mitte, Zentrum", nl: "Oppervlak, Midden, Centrum" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth has three main layers: the thin outer crust where we live, the thick hot mantle made of rock, and the dense core made mostly of iron and nickel.",
                    es: "La Tierra tiene tres capas principales: la delgada corteza exterior donde vivimos, el grueso manto caliente hecho de roca, y el núcleo denso hecho principalmente de hierro y níquel.",
                    de: "Die Erde hat drei Hauptschichten: die dünne äußere Kruste, auf der wir leben, den dicken heißen Mantel aus Gestein und den dichten Kern aus hauptsächlich Eisen und Nickel.",
                    nl: "De aarde heeft drie hoofdlagen: de dunne buitenkorst waar we wonen, de dikke hete mantel van gesteente, en de dichte kern die voornamelijk uit ijzer en nikkel bestaat."
                }
            },
            {
                question: {
                    en: "What covers most of Earth's surface?",
                    es: "¿Qué cubre la mayor parte de la superficie terrestre?",
                    de: "Was bedeckt den größten Teil der Erdoberfläche?",
                    nl: "Wat bedekt het grootste deel van het aardoppervlak?"
                },
                options: [
                    { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
                    { en: "Land", es: "Tierra", de: "Land", nl: "Land" },
                    { en: "Ice", es: "Hielo", de: "Eis", nl: "IJs" },
                    { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" }
                ],
                correct: 0,
                explanation: {
                    en: "Water covers about 71% of Earth's surface, with oceans, seas, lakes, and rivers making our planet appear blue from space.",
                    es: "El agua cubre aproximadamente el 71% de la superficie terrestre, con océanos, mares, lagos y ríos haciendo que nuestro planeta parezca azul desde el espacio.",
                    de: "Wasser bedeckt etwa 71% der Erdoberfläche, mit Ozeanen, Meeren, Seen und Flüssen, die unseren Planeten aus dem Weltall blau erscheinen lassen.",
                    nl: "Water bedekt ongeveer 71% van het aardoppervlak, met oceanen, zeeën, meren en rivieren die onze planeet blauw doen lijken vanuit de ruimte."
                }
            },
            {
                question: {
                    en: "What is the biggest ocean on Earth?",
                    es: "¿Cuál es el océano más grande de la Tierra?",
                    de: "Welcher ist der größte Ozean auf der Erde?",
                    nl: "Wat is de grootste oceaan op aarde?"
                },
                options: [
                    { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Stille Oceaan" },
                    { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
                    { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
                    { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
                ],
                correct: 0,
                explanation: {
                    en: "The Pacific Ocean is the largest and deepest ocean, covering about one-third of Earth's surface and containing more than half of the world's free water.",
                    es: "El Océano Pacífico es el océano más grande y profundo, cubriendo aproximadamente un tercio de la superficie terrestre y conteniendo más de la mitad del agua libre del mundo.",
                    de: "Der Pazifische Ozean ist der größte und tiefste Ozean, bedeckt etwa ein Drittel der Erdoberfläche und enthält mehr als die Hälfte des freien Wassers der Welt.",
                    nl: "De Stille Oceaan is de grootste en diepste oceaan, bedekt ongeveer een derde van het aardoppervlak en bevat meer dan de helft van het vrije water van de wereld."
                }
            },
            {
                question: {
                    en: "What do we call a scientist who studies space?",
                    es: "¿Cómo llamamos a un científico que estudia el espacio?",
                    de: "Wie nennen wir einen Wissenschaftler, der das Weltall erforscht?",
                    nl: "Hoe noemen we een wetenschapper die de ruimte bestudeert?"
                },
                options: [
                    { en: "Astronomer", es: "Astrónomo", de: "Astronom", nl: "Astronoom" },
                    { en: "Geologist", es: "Geólogo", de: "Geologe", nl: "Geoloog" },
                    { en: "Biologist", es: "Biólogo", de: "Biologe", nl: "Bioloog" },
                    { en: "Meteorologist", es: "Meteorólogo", de: "Meteorologe", nl: "Meteoroloog" }
                ],
                correct: 0,
                explanation: {
                    en: "An astronomer is a scientist who studies celestial objects like stars, planets, galaxies, and other phenomena in the universe using telescopes and mathematics.",
                    es: "Un astrónomo es un científico que estudia objetos celestiales como estrellas, planetas, galaxias y otros fenómenos del universo usando telescopios y matemáticas.",
                    de: "Ein Astronom ist ein Wissenschaftler, der Himmelskörper wie Sterne, Planeten, Galaxien und andere Phänomene im Universum mit Teleskopen und Mathematik erforscht.",
                    nl: "Een astronoom is een wetenschapper die hemellichamen zoals sterren, planeten, sterrenstelsels en andere verschijnselen in het universum bestudeert met telescopen en wiskunde."
                }
            },
            {
                question: {
                    en: "What is the sun?",
                    es: "¿Qué es el sol?",
                    de: "Was ist die Sonne?",
                    nl: "Wat is de zon?"
                },
                options: [
                    { en: "A giant star", es: "Una estrella gigante", de: "Ein riesiger Stern", nl: "Een reuzenster" },
                    { en: "A planet", es: "Un planeta", de: "Ein Planet", nl: "Een planeet" },
                    { en: "A moon", es: "Una luna", de: "Ein Mond", nl: "Een maan" },
                    { en: "A comet", es: "Un cometa", de: "Ein Komet", nl: "Een komeet" }
                ],
                correct: 0,
                explanation: {
                    en: "The sun is a massive ball of hot gas (plasma) that produces light and heat through nuclear fusion, converting hydrogen into helium in its core.",
                    es: "El sol es una bola masiva de gas caliente (plasma) que produce luz y calor a través de la fusión nuclear, convirtiendo hidrógeno en helio en su núcleo.",
                    de: "Die Sonne ist eine massive Kugel aus heißem Gas (Plasma), die durch Kernfusion Licht und Wärme erzeugt und Wasserstoff in ihrem Kern zu Helium umwandelt.",
                    nl: "De zon is een enorme bal van heet gas (plasma) die licht en warmte produceert door kernfusie, waarbij waterstof wordt omgezet in helium in zijn kern."
                }
            },
            {
                question: {
                    en: "Why does the sun look bigger than other stars?",
                    es: "¿Por qué el sol se ve más grande que otras estrellas?",
                    de: "Warum sieht die Sonne größer aus als andere Sterne?",
                    nl: "Waarom ziet de zon er groter uit dan andere sterren?"
                },
                options: [
                    { en: "Because it's much closer to Earth", es: "Porque está mucho más cerca de la Tierra", de: "Weil sie viel näher zur Erde ist", nl: "Omdat hij veel dichterbij de aarde is" },
                    { en: "Because it's actually the biggest star", es: "Porque en realidad es la estrella más grande", de: "Weil sie tatsächlich der größte Stern ist", nl: "Omdat het eigenlijk de grootste ster is" },
                    { en: "Because it's made of different materials", es: "Porque está hecha de materiales diferentes", de: "Weil sie aus anderen Materialien besteht", nl: "Omdat hij van andere materialen is gemaakt" },
                    { en: "Because it moves faster", es: "Porque se mueve más rápido", de: "Weil sie sich schneller bewegt", nl: "Omdat hij sneller beweegt" }
                ],
                correct: 0,
                explanation: {
                    en: "The sun appears larger than other stars because it's much closer to Earth - about 93 million miles away, while the next nearest star is over 4 light-years away.",
                    es: "El sol parece más grande que otras estrellas porque está mucho más cerca de la Tierra - a unos 150 millones de kilómetros, mientras que la siguiente estrella más cercana está a más de 4 años luz.",
                    de: "Die Sonne erscheint größer als andere Sterne, weil sie der Erde viel näher ist - etwa 150 Millionen Kilometer entfernt, während der nächste Stern über 4 Lichtjahre entfernt ist.",
                    nl: "De zon lijkt groter dan andere sterren omdat hij veel dichterbij de aarde staat - ongeveer 150 miljoen kilometer weg, terwijl de dichtstbijzijnde ster meer dan 4 lichtjaren weg is."
                }
            },
            {
                question: {
                    en: "What is a shooting star?",
                    es: "¿Qué es una estrella fugaz?",
                    de: "Was ist eine Sternschnuppe?",
                    nl: "Wat is een vallende ster?"
                },
                options: [
                    { en: "A small rock burning up in Earth's atmosphere", es: "Una pequeña roca quemándose en la atmósfera terrestre", de: "Ein kleiner Stein, der in der Erdatmosphäre verbrennt", nl: "Een kleine steen die opbrandt in de atmosfeer van de aarde" },
                    { en: "A star that moves very fast", es: "Una estrella que se mueve muy rápido", de: "Ein Stern, der sich sehr schnell bewegt", nl: "Een ster die heel snel beweegt" },
                    { en: "A star that falls to Earth", es: "Una estrella que cae a la Tierra", de: "Ein Stern, der zur Erde fällt", nl: "Een ster die naar de aarde valt" },
                    { en: "A planet moving", es: "Un planeta moviéndose", de: "Ein Planet, der sich bewegt", nl: "Een planeet die beweegt" }
                ],
                correct: 0,
                explanation: {
                    en: "A shooting star is actually a meteor - a small piece of space rock or debris that burns up in Earth's atmosphere, creating a bright streak of light.",
                    es: "Una estrella fugaz es en realidad un meteoro - un pequeño pedazo de roca espacial o escombros que se quema en la atmósfera terrestre, creando una raya brillante de luz.",
                    de: "Eine Sternschnuppe ist eigentlich ein Meteor - ein kleines Stück Weltraumgestein oder Trümmer, das in der Erdatmosphäre verbrennt und einen hellen Lichtstreifen erzeugt.",
                    nl: "Een vallende ster is eigenlijk een meteoor - een klein stukje ruimtesteen of puin dat opbrandt in de atmosfeer van de aarde, waardoor een heldere lichtstreep ontstaat."
                }
            },
            {
                question: {
                    en: "What is the North Star used for?",
                    es: "¿Para qué se usa la Estrella del Norte?",
                    de: "Wofür wird der Polarstern verwendet?",
                    nl: "Waarvoor wordt de Poolster gebruikt?"
                },
                options: [
                    { en: "To find direction", es: "Para encontrar la dirección", de: "Um die Richtung zu finden", nl: "Om richting te vinden" },
                    { en: "To tell time", es: "Para decir la hora", de: "Um die Zeit zu sagen", nl: "Om de tijd te vertellen" },
                    { en: "To predict weather", es: "Para predecir el clima", de: "Um das Wetter vorherzusagen", nl: "Om het weer te voorspellen" },
                    { en: "To measure temperature", es: "Para medir la temperatura", de: "Um die Temperatur zu messen", nl: "Om temperatuur te meten" }
                ],
                correct: 0,
                explanation: {
                    en: "The North Star (Polaris) points almost directly to Earth's North Pole, making it useful for navigation to find which direction is north.",
                    es: "La Estrella del Norte (Polaris) apunta casi directamente al Polo Norte de la Tierra, haciéndola útil para la navegación para encontrar qué dirección es el norte.",
                    de: "Der Polarstern (Polaris) zeigt fast direkt zum Nordpol der Erde, was ihn für die Navigation nützlich macht, um herauszufinden, welche Richtung Norden ist.",
                    nl: "De Poolster (Polaris) wijst bijna direct naar de Noordpool van de aarde, waardoor hij nuttig is voor navigatie om te vinden welke richting het noorden is."
                }
            },
            {
                question: {
                    en: "What do we call a group of stars that makes a pattern?",
                    es: "¿Cómo llamamos a un grupo de estrellas que forma un patrón?",
                    de: "Wie nennen wir eine Gruppe von Sternen, die ein Muster bilden?",
                    nl: "Hoe noemen we een groep sterren die een patroon vormt?"
                },
                options: [
                    { en: "A constellation", es: "Una constelación", de: "Ein Sternbild", nl: "Een sterrenbeeld" },
                    { en: "A galaxy", es: "Una galaxia", de: "Eine Galaxie", nl: "Een melkweg" },
                    { en: "A nebula", es: "Una nebulosa", de: "Ein Nebel", nl: "Een nevel" },
                    { en: "A cluster", es: "Un cúmulo", de: "Ein Haufen", nl: "Een cluster" }
                ],
                correct: 0,
                explanation: {
                    en: "A constellation is a group of stars that appears to form a recognizable pattern or picture in the night sky, like the Big Dipper or Orion.",
                    es: "Una constelación es un grupo de estrellas que parece formar un patrón o imagen reconocible en el cielo nocturno, como la Osa Mayor u Orión.",
                    de: "Ein Sternbild ist eine Gruppe von Sternen, die ein erkennbares Muster oder Bild am Nachthimmel zu bilden scheint, wie der Große Wagen oder Orion.",
                    nl: "Een sterrenbeeld is een groep sterren die een herkenbaar patroon of beeld lijkt te vormen aan de nachtelijke hemel, zoals de Grote Beer of Orion."
                }
            },
            {
                question: {
                    en: "What happens during a solar eclipse?",
                    es: "¿Qué pasa durante un eclipse solar?",
                    de: "Was passiert während einer Sonnenfinsternis?",
                    nl: "Wat gebeurt er tijdens een zonsverduistering?"
                },
                options: [
                    { en: "The moon blocks the sun from Earth", es: "La luna bloquea el sol desde la Tierra", de: "Der Mond blockiert die Sonne von der Erde aus", nl: "De maan blokkeert de zon vanuit de aarde" },
                    { en: "The Earth blocks the sun", es: "La Tierra bloquea el sol", de: "Die Erde blockiert die Sonne", nl: "De aarde blokkeert de zon" },
                    { en: "The sun disappears", es: "El sol desaparece", de: "Die Sonne verschwindet", nl: "De zon verdwijnt" },
                    { en: "Clouds cover the sun", es: "Las nubes cubren el sol", de: "Wolken bedecken die Sonne", nl: "Wolken bedekken de zon" }
                ],
                correct: 0,
                explanation: {
                    en: "A solar eclipse occurs when the moon passes between Earth and the sun, temporarily blocking the sun's light and casting a shadow on Earth.",
                    es: "Un eclipse solar ocurre cuando la luna pasa entre la Tierra y el sol, bloqueando temporalmente la luz del sol y proyectando una sombra sobre la Tierra.",
                    de: "Eine Sonnenfinsternis tritt auf, wenn der Mond zwischen Erde und Sonne hindurchgeht, vorübergehend das Sonnenlicht blockiert und einen Schatten auf die Erde wirft.",
                    nl: "Een zonsverduistering treedt op wanneer de maan tussen de aarde en zon passeert, tijdelijk het zonlicht blokkeert en een schaduw op de aarde werpt."
                }
            },
            {
                question: {
                    en: "What is the asteroid belt?",
                    es: "¿Qué es el cinturón de asteroides?",
                    de: "Was ist der Asteroidengürtel?",
                    nl: "Wat is de asteroïdengordel?"
                },
                options: [
                    { en: "A region with many rocky objects between Mars and Jupiter", es: "Una región con muchos objetos rocosos entre Marte y Júpiter", de: "Eine Region mit vielen felsigen Objekten zwischen Mars und Jupiter", nl: "Een gebied met veel rotsachtige objecten tussen Mars en Jupiter" },
                    { en: "A ring around Earth", es: "Un anillo alrededor de la Tierra", de: "Ein Ring um die Erde", nl: "Een ring rond de aarde" },
                    { en: "A belt that astronauts wear", es: "Un cinturón que usan los astronautas", de: "Ein Gürtel, den Astronauten tragen", nl: "Een riem die astronauten dragen" },
                    { en: "The rings of Saturn", es: "Los anillos de Saturno", de: "Die Ringe des Saturn", nl: "De ringen van Saturnus" }
                ],
                correct: 0,
                explanation: {
                    en: "The asteroid belt is a region of space between Mars and Jupiter containing thousands of rocky objects called asteroids, leftover from the solar system's formation.",
                    es: "El cinturón de asteroides es una región del espacio entre Marte y Júpiter que contiene miles de objetos rocosos llamados asteroides, restos de la formación del sistema solar.",
                    de: "Der Asteroidengürtel ist eine Raumregion zwischen Mars und Jupiter, die Tausende von felsigen Objekten namens Asteroiden enthält, Überreste der Entstehung des Sonnensystems.",
                    nl: "De asteroïdengordel is een ruimtegebied tussen Mars en Jupiter dat duizenden rotsachtige objecten bevat die asteroïden worden genoemd, overblijfselen van de vorming van het zonnestelsel."
                }
            },
            {
                question: {
                    en: "What makes Saturn special?",
                    es: "¿Qué hace especial a Saturno?",
                    de: "Was macht Saturn besonders?",
                    nl: "Wat maakt Saturnus speciaal?"
                },
                options: [
                    { en: "It has beautiful rings around it", es: "Tiene hermosos anillos a su alrededor", de: "Es hat schöne Ringe um sich", nl: "Het heeft prachtige ringen eromheen" },
                    { en: "It's the smallest planet", es: "Es el planeta más pequeño", de: "Es ist der kleinste Planet", nl: "Het is de kleinste planeet" },
                    { en: "It's closest to Earth", es: "Está más cerca de la Tierra", de: "Es ist der Erde am nächsten", nl: "Het is het dichtst bij de aarde" },
                    { en: "It has no moons", es: "No tiene lunas", de: "Es hat keine Monde", nl: "Het heeft geen manen" }
                ],
                correct: 0,
                explanation: {
                    en: "Saturn is famous for its spectacular ring system made of ice and rock particles, making it one of the most beautiful planets to observe through telescopes.",
                    es: "Saturno es famoso por su espectacular sistema de anillos hecho de partículas de hielo y roca, haciéndolo uno de los planetas más hermosos para observar a través de telescopios.",
                    de: "Saturn ist berühmt für sein spektakuläres Ringsystem aus Eis- und Gesteinspartikeln, was ihn zu einem der schönsten Planeten macht, die man durch Teleskope beobachten kann.",
                    nl: "Saturnus is beroemd om zijn spectaculaire ringensysteem gemaakt van ijs- en steendeeltjes, waardoor het een van de mooiste planeten is om door telescopen te observeren."
                }
            },
            {
                question: {
                    en: "What is Mars sometimes called?",
                    es: "¿Cómo se llama a veces a Marte?",
                    de: "Wie wird Mars manchmal genannt?",
                    nl: "Hoe wordt Mars soms genoemd?"
                },
                options: [
                    { en: "The Red Planet", es: "El Planeta Rojo", de: "Der Rote Planet", nl: "De Rode Planeet" },
                    { en: "The Blue Planet", es: "El Planeta Azul", de: "Der Blaue Planet", nl: "De Blauwe Planeet" },
                    { en: "The Green Planet", es: "El Planeta Verde", de: "Der Grüne Planet", nl: "De Groene Planeet" },
                    { en: "The White Planet", es: "El Planeta Blanco", de: "Der Weiße Planet", nl: "De Witte Planeet" }
                ],
                correct: 0,
                explanation: {
                    en: "Mars is called the Red Planet because of its reddish appearance, caused by iron oxide (rust) on its surface giving it a distinctive rusty color.",
                    es: "Marte es llamado el Planeta Rojo debido a su apariencia rojiza, causada por el óxido de hierro (herrumbre) en su superficie que le da un color oxidado distintivo.",
                    de: "Mars wird der Rote Planet genannt wegen seines rötlichen Aussehens, verursacht durch Eisenoxid (Rost) auf seiner Oberfläche, was ihm eine charakteristische rostige Farbe verleiht.",
                    nl: "Mars wordt de Rode Planeet genoemd vanwege zijn roodachtige verschijning, veroorzaakt door ijzeroxide (roest) op zijn oppervlak dat hem een kenmerkende roestige kleur geeft."
                }
            },
            {
                question: {
                    en: "What do comets have that makes them special?",
                    es: "¿Qué tienen los cometas que los hace especiales?",
                    de: "Was haben Kometen, was sie besonders macht?",
                    nl: "Wat hebben kometen dat hen speciaal maakt?"
                },
                options: [
                    { en: "A glowing tail when near the sun", es: "Una cola brillante cuando están cerca del sol", de: "Einen leuchtenden Schweif in Sonnennähe", nl: "Een gloeiende staart als ze dicht bij de zon zijn" },
                    { en: "They make loud noises", es: "Hacen ruidos fuertes", de: "Sie machen laute Geräusche", nl: "Ze maken luide geluiden" },
                    { en: "They change colors rapidly", es: "Cambian colores rápidamente", de: "Sie ändern schnell ihre Farben", nl: "Ze veranderen snel van kleur" },
                    { en: "They stop moving", es: "Dejan de moverse", de: "Sie hören auf sich zu bewegen", nl: "Ze stoppen met bewegen" }
                ],
                correct: 0,
                explanation: {
                    en: "Comets develop a glowing tail when they approach the sun because the solar heat vaporizes ice in the comet, creating a spectacular trail of gas and dust.",
                    es: "Los cometas desarrollan una cola brillante cuando se acercan al sol porque el calor solar vaporiza el hielo en el cometa, creando un rastro espectacular de gas y polvo.",
                    de: "Kometen entwickeln einen leuchtenden Schweif, wenn sie sich der Sonne nähern, weil die Sonnenwärme das Eis im Kometen verdampft und eine spektakuläre Spur aus Gas und Staub erzeugt.",
                    nl: "Kometen ontwikkelen een gloeiende staart wanneer ze de zon naderen omdat de zonnewarmte het ijs in de komeet verdampt, waardoor een spectaculair spoor van gas en stof ontstaat."
                }
            },
            {
                question: {
                    en: "What do we call people who travel to space?",
                    es: "¿Cómo llamamos a las personas que viajan al espacio?",
                    de: "Wie nennen wir Menschen, die ins Weltall reisen?",
                    nl: "Hoe noemen we mensen die naar de ruimte reizen?"
                },
                options: [
                    { en: "Astronauts", es: "Astronautas", de: "Astronauten", nl: "Astronauten" },
                    { en: "Pilots", es: "Pilotos", de: "Piloten", nl: "Piloten" },
                    { en: "Sailors", es: "Marineros", de: "Seeleute", nl: "Zeelieden" },
                    { en: "Drivers", es: "Conductores", de: "Fahrer", nl: "Bestuurders" }
                ],
                correct: 0,
                explanation: {
                    en: "Astronauts are specially trained people who travel to space in spacecraft to conduct scientific research, maintain space stations, and explore beyond Earth.",
                    es: "Los astronautas son personas especialmente entrenadas que viajan al espacio en naves espaciales para realizar investigación científica, mantener estaciones espaciales y explorar más allá de la Tierra.",
                    de: "Astronauten sind speziell ausgebildete Menschen, die in Raumfahrzeugen ins Weltall reisen, um wissenschaftliche Forschung zu betreiben, Raumstationen zu warten und jenseits der Erde zu erforschen.",
                    nl: "Astronauten zijn speciaal getrainde mensen die naar de ruimte reizen in ruimtevaartuigen om wetenschappelijk onderzoek te doen, ruimtestations te onderhouden en te verkennen voorbij de aarde."
                }
            },
            {
                question: {
                    en: "What was the first animal to go to space?",
                    es: "¿Cuál fue el primer animal en ir al espacio?",
                    de: "Was war das erste Tier, das ins Weltall ging?",
                    nl: "Wat was het eerste dier dat naar de ruimte ging?"
                },
                options: [
                    { en: "A dog named Laika", es: "Un perro llamado Laika", de: "Ein Hund namens Laika", nl: "Een hond genaamd Laika" },
                    { en: "A monkey", es: "Un mono", de: "Ein Affe", nl: "Een aap" },
                    { en: "A cat", es: "Un gato", de: "Eine Katze", nl: "Een kat" },
                    { en: "A bird", es: "Un pájaro", de: "Ein Vogel", nl: "Een vogel" }
                ],
                correct: 0,
                explanation: {
                    en: "Laika, a Soviet space dog, was the first animal to orbit Earth in 1957, helping scientists understand if living things could survive in space.",
                    es: "Laika, un perro espacial soviético, fue el primer animal en orbitar la Tierra en 1957, ayudando a los científicos a entender si los seres vivos podían sobrevivir en el espacio.",
                    de: "Laika, ein sowjetischer Weltraumhund, war das erste Tier, das 1957 die Erde umkreiste und Wissenschaftlern half zu verstehen, ob Lebewesen im Weltall überleben können.",
                    nl: "Laika, een Sovjet ruimtehond, was het eerste dier dat in 1957 om de aarde cirkelde, wat wetenschappers hielp begrijpen of levende wezens konden overleven in de ruimte."
                }
            },
            {
                question: {
                    en: "What do scientists use to study space?",
                    es: "¿Qué usan los científicos para estudiar el espacio?",
                    de: "Was benutzen Wissenschaftler, um das Weltall zu erforschen?",
                    nl: "Wat gebruiken wetenschappers om de ruimte te bestuderen?"
                },
                options: [
                    { en: "Telescopes", es: "Telescopios", de: "Teleskope", nl: "Telescopen" },
                    { en: "Microscopes", es: "Microscopios", de: "Mikroskope", nl: "Microscopen" },
                    { en: "Magnifying glasses", es: "Lupas", de: "Lupen", nl: "Vergrootglazen" },
                    { en: "Binoculars", es: "Binoculares", de: "Ferngläser", nl: "Verrekijkers" }
                ],
                correct: 0,
                explanation: {
                    en: "Telescopes collect and magnify light from distant objects in space, allowing astronomers to study stars, planets, and galaxies that are too far to see with the naked eye.",
                    es: "Los telescopios recolectan y magnifican la luz de objetos distantes en el espacio, permitiendo a los astrónomos estudiar estrellas, planetas y galaxias que están demasiado lejos para ver a simple vista.",
                    de: "Teleskope sammeln und vergrößern Licht von entfernten Objekten im Weltall, was Astronomen ermöglicht, Sterne, Planeten und Galaxien zu studieren, die zu weit entfernt sind, um sie mit bloßem Auge zu sehen.",
                    nl: "Telescopen verzamelen en vergroten licht van verre objecten in de ruimte, waardoor astronomen sterren, planeten en sterrenstelsels kunnen bestuderen die te ver weg zijn om met het blote oog te zien."
                }
            },
            {
                question: {
                    en: "What is the International Space Station?",
                    es: "¿Qué es la Estación Espacial Internacional?",
                    de: "Was ist die Internationale Raumstation?",
                    nl: "Wat is het Internationaal Ruimtestation?"
                },
                options: [
                    { en: "A laboratory in space where people live and work", es: "Un laboratorio en el espacio donde la gente vive y trabaja", de: "Ein Labor im Weltall, wo Menschen leben und arbeiten", nl: "Een laboratorium in de ruimte waar mensen leven en werken" },
                    { en: "A type of rocket", es: "Un tipo de cohete", de: "Eine Art Rakete", nl: "Een soort raket" },
                    { en: "A planet", es: "Un planeta", de: "Ein Planet", nl: "Een planeet" },
                    { en: "A satellite", es: "Un satélite", de: "Ein Satellit", nl: "Een satelliet" }
                ],
                correct: 0,
                explanation: {
                    en: "The ISS is a large spacecraft where astronauts from different countries live and work together, conducting experiments in the unique environment of space.",
                    es: "La EEI es una gran nave espacial donde astronautas de diferentes países viven y trabajan juntos, realizando experimentos en el ambiente único del espacio.",
                    de: "Die ISS ist ein großes Raumfahrzeug, wo Astronauten aus verschiedenen Ländern zusammenleben und arbeiten und Experimente in der einzigartigen Umgebung des Weltalls durchführen.",
                    nl: "Het ISS is een groot ruimtevaartuig waar astronauten uit verschillende landen samen leven en werken, experimenten uitvoeren in de unieke omgeving van de ruimte."
                }
            },
            {
                question: {
                    en: "How long does it take for light from the sun to reach Earth?",
                    es: "¿Cuánto tiempo tarda la luz del sol en llegar a la Tierra?",
                    de: "Wie lange braucht das Licht der Sonne, um die Erde zu erreichen?",
                    nl: "Hoe lang duurt het voordat licht van de zon de aarde bereikt?"
                },
                options: [
                    { en: "About 8 minutes", es: "Aproximadamente 8 minutos", de: "Etwa 8 Minuten", nl: "Ongeveer 8 minuten" },
                    { en: "1 second", es: "1 segundo", de: "1 Sekunde", nl: "1 seconde" },
                    { en: "1 hour", es: "1 hora", de: "1 Stunde", nl: "1 uur" },
                    { en: "1 day", es: "1 día", de: "1 Tag", nl: "1 dag" }
                ],
                correct: 0,
                explanation: {
                    en: "Light travels at 186,000 miles per second, so it takes about 8 minutes and 20 seconds for sunlight to travel the 93 million miles from the sun to Earth.",
                    es: "La luz viaja a 300,000 kilómetros por segundo, por lo que toma aproximadamente 8 minutos y 20 segundos para que la luz solar viaje los 150 millones de kilómetros del sol a la Tierra.",
                    de: "Licht reist mit 300.000 Kilometern pro Sekunde, daher dauert es etwa 8 Minuten und 20 Sekunden, bis Sonnenlicht die 150 Millionen Kilometer von der Sonne zur Erde zurücklegt.",
                    nl: "Licht reist met 300.000 kilometer per seconde, dus het duurt ongeveer 8 minuten en 20 seconden voordat zonlicht de 150 miljoen kilometer van de zon naar de aarde aflegt."
                }
            },
            {
                question: {
                    en: "What causes the Northern Lights (Aurora)?",
                    es: "¿Qué causa la Aurora Boreal?",
                    de: "Was verursacht die Nordlichter (Aurora)?",
                    nl: "Wat veroorzaakt het Noorderlicht (Aurora)?"
                },
                options: [
                    { en: "Solar particles hitting Earth's magnetic field", es: "Partículas solares golpeando el campo magnético terrestre", de: "Solare Teilchen treffen auf das Magnetfeld der Erde", nl: "Zonnedeeltjes die het magnetische veld van de aarde raken" },
                    { en: "Clouds reflecting sunlight", es: "Nubes reflejando la luz solar", de: "Wolken reflektieren Sonnenlicht", nl: "Wolken die zonlicht reflecteren" },
                    { en: "Lightning in the sky", es: "Rayos en el cielo", de: "Blitze am Himmel", nl: "Bliksem in de lucht" },
                    { en: "Moon beams", es: "Rayos de luna", de: "Mondstrahlen", nl: "Maanstralen" }
                ],
                correct: 0,
                explanation: {
                    en: "Aurora (Northern/Southern Lights) occur when charged particles from the sun interact with Earth's magnetic field and atmosphere, creating beautiful dancing lights in the sky.",
                    es: "La aurora (luces del norte/sur) ocurre cuando partículas cargadas del sol interactúan con el campo magnético y la atmósfera de la Tierra, creando hermosas luces danzantes en el cielo.",
                    de: "Aurora (Nord-/Südlichter) entstehen, wenn geladene Teilchen von der Sonne mit dem Magnetfeld und der Atmosphäre der Erde interagieren und schöne tanzende Lichter am Himmel erzeugen.",
                    nl: "Aurora (Noorderlicht/Zuiderlicht) ontstaat wanneer geladen deeltjes van de zon interageren met het magnetische veld en atmosfeer van de aarde, waardoor prachtige dansende lichten in de lucht ontstaan."
                }
            },
            {
                question: {
                    en: "Why is it important to protect our planet Earth?",
                    es: "¿Por qué es importante proteger nuestro planeta Tierra?",
                    de: "Warum ist es wichtig, unseren Planeten Erde zu schützen?",
                    nl: "Waarom is het belangrijk om onze planeet aarde te beschermen?"
                },
                options: [
                    { en: "It's the only place we know where life exists", es: "Es el único lugar que conocemos donde existe la vida", de: "Es ist der einzige Ort, den wir kennen, wo Leben existiert", nl: "Het is de enige plek die we kennen waar leven bestaat" },
                    { en: "It's the biggest planet", es: "Es el planeta más grande", de: "Es ist der größte Planet", nl: "Het is de grootste planeet" },
                    { en: "It's the prettiest planet", es: "Es el planeta más bonito", de: "Es ist der schönste Planet", nl: "Het is de mooiste planeet" },
                    { en: "It has the most moons", es: "Tiene más lunas", de: "Es hat die meisten Monde", nl: "Het heeft de meeste manen" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth is the only known planet with life, providing the perfect conditions for all living things including humans, plants, and animals to survive and thrive.",
                    es: "La Tierra es el único planeta conocido con vida, proporcionando las condiciones perfectas para que todos los seres vivos incluyendo humanos, plantas y animales sobrevivan y prosperen.",
                    de: "Die Erde ist der einzige bekannte Planet mit Leben und bietet die perfekten Bedingungen für alle Lebewesen einschließlich Menschen, Pflanzen und Tiere zum Überleben und Gedeihen.",
                    nl: "De aarde is de enige bekende planeet met leven, die de perfecte omstandigheden biedt voor alle levende wezens inclusief mensen, planten en dieren om te overleven en te gedijen."
                }
            },
            {
                question: {
                    en: "What do we call the study of Earth's rocks and structure?",
                    es: "¿Cómo llamamos al estudio de las rocas y estructura de la Tierra?",
                    de: "Wie nennen wir das Studium der Gesteine und Struktur der Erde?",
                    nl: "Hoe noemen we de studie van de rotsen en structuur van de aarde?"
                },
                options: [
                    { en: "Geology", es: "Geología", de: "Geologie", nl: "Geologie" },
                    { en: "Astronomy", es: "Astronomía", de: "Astronomie", nl: "Astronomie" },
                    { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
                    { en: "Chemistry", es: "Química", de: "Chemie", nl: "Scheikunde" }
                ],
                correct: 0,
                explanation: {
                    en: "Geology is the science that studies Earth's physical structure, rocks, minerals, and the processes that shape our planet over millions of years.",
                    es: "La geología es la ciencia que estudia la estructura física de la Tierra, rocas, minerales y los procesos que dan forma a nuestro planeta durante millones de años.",
                    de: "Geologie ist die Wissenschaft, die die physische Struktur der Erde, Gesteine, Mineralien und die Prozesse erforscht, die unseren Planeten über Millionen von Jahren formen.",
                    nl: "Geologie is de wetenschap die de fysieke structuur van de aarde, rotsen, mineralen en de processen bestudeert die onze planeet gedurende miljoenen jaren vormen."
                }
            },
            {
                question: {
                    en: "What amazing facts do we learn from studying Earth and space?",
                    es: "¿Qué hechos asombrosos aprendemos al estudiar la Tierra y el espacio?",
                    de: "Welche erstaunlichen Fakten lernen wir durch das Studium von Erde und Weltall?",
                    nl: "Welke geweldige feiten leren we door de aarde en ruimte te bestuderen?"
                },
                options: [
                    { en: "How everything is connected and works together", es: "Cómo todo está conectado y funciona junto", de: "Wie alles miteinander verbunden ist und zusammenarbeitet", nl: "Hoe alles met elkaar verbonden is en samenwerkt" },
                    { en: "That nothing ever changes", es: "Que nada cambia nunca", de: "Dass sich nie etwas ändert", nl: "Dat niets ooit verandert" },
                    { en: "That Earth is the center of everything", es: "Que la Tierra es el centro de todo", de: "Dass die Erde das Zentrum von allem ist", nl: "Dat de aarde het centrum van alles is" },
                    { en: "That space is empty", es: "Que el espacio está vacío", de: "Dass das Weltall leer ist", nl: "Dat de ruimte leeg is" }
                ],
                correct: 0,
                explanation: {
                    en: "Studying Earth and space teaches us how everything in the universe is interconnected, from tiny atoms to massive galaxies, and how natural processes work together to create and sustain life.",
                    es: "Estudiar la Tierra y el espacio nos enseña cómo todo en el universo está interconectado, desde átomos pequeños hasta galaxias masivas, y cómo los procesos naturales trabajan juntos para crear y sostener la vida.",
                    de: "Das Studium von Erde und Weltall lehrt uns, wie alles im Universum miteinander verbunden ist, von winzigen Atomen bis zu riesigen Galaxien, und wie natürliche Prozesse zusammenarbeiten, um Leben zu schaffen und zu erhalten.",
                    nl: "Het bestuderen van aarde en ruimte leert ons hoe alles in het universum met elkaar verbonden is, van kleine atomen tot enorme sterrenstelsels, en hoe natuurlijke processen samenwerken om leven te creëren en in stand te houden."
                }
            },
            {
                question: {
                    en: "How many planets are in our solar system?",
                    es: "¿Cuántos planetas hay en nuestro sistema solar?",
                    de: "Wie viele Planeten gibt es in unserem Sonnensystem?",
                    nl: "Hoeveel planeten zijn er in ons zonnestelsel?"
                },
                options: [
                    { en: "Eight planets", es: "Ocho planetas", de: "Acht Planeten", nl: "Acht planeten" },
                    { en: "Nine planets", es: "Nueve planetas", de: "Neun Planeten", nl: "Negen planeten" },
                    { en: "Seven planets", es: "Siete planetas", de: "Sieben Planeten", nl: "Zeven planeten" },
                    { en: "Ten planets", es: "Diez planetas", de: "Zehn Planeten", nl: "Tien planeten" }
                ],
                correct: 0,
                explanation: {
                    en: "Our solar system has eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto was reclassified as a dwarf planet in 2006.",
                    es: "Nuestro sistema solar tiene ocho planetas: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno. Plutón fue reclasificado como planeta enano en 2006.",
                    de: "Unser Sonnensystem hat acht Planeten: Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus und Neptun. Pluto wurde 2006 als Zwergplanet reklassifiziert.",
                    nl: "Ons zonnestelsel heeft acht planeten: Mercurius, Venus, Aarde, Mars, Jupiter, Saturnus, Uranus en Neptunus. Pluto werd in 2006 herklasseerd als dwergplaneet."
                }
            },
            {
                question: {
                    en: "Which is the largest planet in our solar system?",
                    es: "¿Cuál es el planeta más grande de nuestro sistema solar?",
                    de: "Welcher ist der größte Planet in unserem Sonnensystem?",
                    nl: "Welke is de grootste planeet in ons zonnestelsel?"
                },
                options: [
                    { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
                    { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
                    { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
                    { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" }
                ],
                correct: 0,
                explanation: {
                    en: "Jupiter is the largest planet in our solar system, with a mass greater than all the other planets combined and more than 1,300 times the volume of Earth.",
                    es: "Júpiter es el planeta más grande de nuestro sistema solar, con una masa mayor que todos los otros planetas combinados y más de 1,300 veces el volumen de la Tierra.",
                    de: "Jupiter ist der größte Planet in unserem Sonnensystem, mit einer Masse größer als alle anderen Planeten zusammen und mehr als 1.300 Mal dem Volumen der Erde.",
                    nl: "Jupiter is de grootste planeet in ons zonnestelsel, met een massa groter dan alle andere planeten samen en meer dan 1.300 keer het volume van de aarde."
                }
            },
            {
                question: {
                    en: "What protects Earth from dangerous space radiation?",
                    es: "¿Qué protege a la Tierra de la radiación espacial peligrosa?",
                    de: "Was schützt die Erde vor gefährlicher Weltraumstrahlung?",
                    nl: "Wat beschermt de aarde tegen gevaarlijke ruimtestraling?"
                },
                options: [
                    { en: "Earth's magnetic field", es: "El campo magnético de la Tierra", de: "Das Magnetfeld der Erde", nl: "Het magnetische veld van de aarde" },
                    { en: "The clouds", es: "Las nubes", de: "Die Wolken", nl: "De wolken" },
                    { en: "The ocean water", es: "El agua del océano", de: "Das Meerwasser", nl: "Het oceaanwater" },
                    { en: "The mountains", es: "Las montañas", de: "Die Berge", nl: "De bergen" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth's magnetic field acts like an invisible shield, deflecting harmful charged particles from space and protecting life on our planet.",
                    es: "El campo magnético de la Tierra actúa como un escudo invisible, desviando partículas cargadas dañinas del espacio y protegiendo la vida en nuestro planeta.",
                    de: "Das Magnetfeld der Erde wirkt wie ein unsichtbarer Schild, lenkt schädliche geladene Teilchen aus dem Weltall ab und schützt das Leben auf unserem Planeten.",
                    nl: "Het magnetische veld van de aarde werkt als een onzichtbaar schild, dat schadelijke geladen deeltjes uit de ruimte afweet en het leven op onze planeet beschermt."
                }
            },
            {
                question: {
                    en: "What is the center of our solar system?",
                    es: "¿Qué está en el centro de nuestro sistema solar?",
                    de: "Was ist das Zentrum unseres Sonnensystems?",
                    nl: "Wat is het centrum van ons zonnestelsel?"
                },
                options: [
                    { en: "The sun", es: "El sol", de: "Die Sonne", nl: "De zon" },
                    { en: "Earth", es: "La Tierra", de: "Die Erde", nl: "De aarde" },
                    { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
                    { en: "The moon", es: "La luna", de: "Der Mond", nl: "De maan" }
                ],
                correct: 0,
                explanation: {
                    en: "The sun is at the center of our solar system, and all planets, including Earth, orbit around it due to its massive gravitational pull.",
                    es: "El sol está en el centro de nuestro sistema solar, y todos los planetas, incluyendo la Tierra, orbitan a su alrededor debido a su masiva atracción gravitacional.",
                    de: "Die Sonne ist im Zentrum unseres Sonnensystems, und alle Planeten, einschließlich der Erde, umkreisen sie aufgrund ihrer massiven Gravitationsanziehung.",
                    nl: "De zon staat in het centrum van ons zonnestelsel, en alle planeten, inclusief de aarde, draaien eromheen vanwege zijn enorme zwaartekracht."
                }
            },
            {
                question: {
                    en: "Why do we have seasons on Earth?",
                    es: "¿Por qué tenemos estaciones en la Tierra?",
                    de: "Warum haben wir Jahreszeiten auf der Erde?",
                    nl: "Waarom hebben we seizoenen op aarde?"
                },
                options: [
                    { en: "Earth is tilted as it orbits the sun", es: "La Tierra está inclinada mientras orbita el sol", de: "Die Erde ist geneigt, während sie die Sonne umkreist", nl: "De aarde staat schuin terwijl hij om de zon draait" },
                    { en: "Earth moves closer and farther from the sun", es: "La Tierra se acerca y aleja del sol", de: "Die Erde bewegt sich näher und weiter von der Sonne", nl: "De aarde beweegt dichter bij en verder van de zon" },
                    { en: "The sun gets hotter and cooler", es: "El sol se calienta y enfría", de: "Die Sonne wird heißer und kühler", nl: "De zon wordt warmer en koeler" },
                    { en: "The moon blocks sunlight", es: "La luna bloquea la luz solar", de: "Der Mond blockiert das Sonnenlicht", nl: "De maan blokkeert zonlicht" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth's tilt of 23.5 degrees causes different parts of our planet to receive varying amounts of sunlight throughout the year, creating the four seasons.",
                    es: "La inclinación de la Tierra de 23.5 grados causa que diferentes partes de nuestro planeta reciban cantidades variables de luz solar durante el año, creando las cuatro estaciones.",
                    de: "Die Neigung der Erde von 23,5 Grad führt dazu, dass verschiedene Teile unseres Planeten das ganze Jahr über unterschiedliche Mengen Sonnenlicht erhalten und die vier Jahreszeiten entstehen.",
                    nl: "De kanteling van de aarde van 23,5 graden zorgt ervoor dat verschillende delen van onze planeet gedurende het jaar verschillende hoeveelheden zonlicht ontvangen, waardoor de vier seizoenen ontstaan."
                }
            },
            {
                question: {
                    en: "What is gravity?",
                    es: "¿Qué es la gravedad?",
                    de: "Was ist die Schwerkraft?",
                    nl: "Wat is zwaartekracht?"
                },
                options: [
                    { en: "A force that pulls things toward Earth", es: "Una fuerza que atrae las cosas hacia la Tierra", de: "Eine Kraft, die Dinge zur Erde zieht", nl: "Een kracht die dingen naar de aarde trekt" },
                    { en: "Hot air rising up", es: "Aire caliente subiendo", de: "Heiße Luft steigt auf", nl: "Warme lucht die omhoog stijgt" },
                    { en: "Wind blowing downward", es: "Viento soplando hacia abajo", de: "Wind bläst nach unten", nl: "Wind die naar beneden waait" },
                    { en: "Magnetism from metals", es: "Magnetismo de los metales", de: "Magnetismus von Metallen", nl: "Magnetisme van metalen" }
                ],
                correct: 0,
                explanation: {
                    en: "Gravity is a fundamental force that attracts objects with mass toward each other, keeping us on Earth's surface and holding the solar system together.",
                    es: "La gravedad es una fuerza fundamental que atrae objetos con masa el uno hacia el otro, manteniéndonos en la superficie de la Tierra y manteniendo unido el sistema solar.",
                    de: "Die Schwerkraft ist eine Grundkraft, die Objekte mit Masse zueinander zieht, uns auf der Erdoberfläche hält und das Sonnensystem zusammenhält.",
                    nl: "Zwaartekracht is een fundamentele kracht die objecten met massa naar elkaar toe trekt, ons op het aardoppervlak houdt en het zonnestelsel bij elkaar houdt."
                }
            },
            {
                question: {
                    en: "Which planet is closest to the sun?",
                    es: "¿Qué planeta está más cerca del sol?",
                    de: "Welcher Planet ist der Sonne am nächsten?",
                    nl: "Welke planeet is het dichtst bij de zon?"
                },
                options: [
                    { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
                    { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" }
                ],
                correct: 0,
                explanation: {
                    en: "Mercury is the closest planet to the sun, orbiting at an average distance of about 36 million miles, with extreme temperature variations from day to night.",
                    es: "Mercurio es el planeta más cercano al sol, orbitando a una distancia promedio de aproximadamente 58 millones de kilómetros, con variaciones extremas de temperatura del día a la noche.",
                    de: "Merkur ist der sonnennächste Planet und umkreist die Sonne in einer durchschnittlichen Entfernung von etwa 58 Millionen Kilometern mit extremen Temperaturschwankungen zwischen Tag und Nacht.",
                    nl: "Mercurius is de planeet die het dichtst bij de zon staat, draait om op een gemiddelde afstand van ongeveer 58 miljoen kilometer, met extreme temperatuurverschillen van dag tot nacht."
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
                    { en: "The distance light travels in one year", es: "La distancia que la luz viaja en un año", de: "Die Entfernung, die Licht in einem Jahr zurücklegt", nl: "De afstand die licht in een jaar aflegt" },
                    { en: "How long it takes Earth to orbit the sun", es: "Cuánto tarda la Tierra en orbitar el sol", de: "Wie lange die Erde braucht, um die Sonne zu umkreisen", nl: "Hoe lang het duurt voordat de aarde om de zon draait" },
                    { en: "The age of the oldest star", es: "La edad de la estrella más vieja", de: "Das Alter des ältesten Sterns", nl: "De leeftijd van de oudste ster" },
                    { en: "The time the sun shines each day", es: "El tiempo que el sol brilla cada día", de: "Die Zeit, die die Sonne jeden Tag scheint", nl: "De tijd dat de zon elke dag schijnt" }
                ],
                correct: 0,
                explanation: {
                    en: "A light-year is the distance that light travels in one year, approximately 6 trillion miles, used to measure vast distances in space between stars and galaxies.",
                    es: "Un año luz es la distancia que la luz viaja en un año, aproximadamente 9.5 billones de kilómetros, usado para medir vastas distancias en el espacio entre estrellas y galaxias.",
                    de: "Ein Lichtjahr ist die Entfernung, die Licht in einem Jahr zurücklegt, etwa 9,5 Billionen Kilometer, und wird verwendet, um riesige Entfernungen im Weltraum zwischen Sternen und Galaxien zu messen.",
                    nl: "Een lichtjaar is de afstand die licht in een jaar aflegt, ongeveer 9,5 biljoen kilometer, gebruikt om enorme afstanden in de ruimte tussen sterren en sterrenstelsels te meten."
                }
            },
            {
                question: {
                    en: "What is the Great Red Spot on Jupiter?",
                    es: "¿Qué es la Gran Mancha Roja en Júpiter?",
                    de: "Was ist der Große Rote Fleck auf Jupiter?",
                    nl: "Wat is de Grote Rode Vlek op Jupiter?"
                },
                options: [
                    { en: "A giant storm that has been raging for centuries", es: "Una tormenta gigante que ha estado ocurriendo por siglos", de: "Ein riesiger Sturm, der seit Jahrhunderten tobt", nl: "Een gigantische storm die al eeuwen woedt" },
                    { en: "A large mountain", es: "Una montaña grande", de: "Ein großer Berg", nl: "Een grote berg" },
                    { en: "A crater from an asteroid", es: "Un cráter de un asteroide", de: "Ein Krater von einem Asteroiden", nl: "Een krater van een asteroïde" },
                    { en: "A frozen lake", es: "Un lago congelado", de: "Ein gefrorener See", nl: "Een bevroren meer" }
                ],
                correct: 0,
                explanation: {
                    en: "Jupiter's Great Red Spot is a massive storm larger than Earth that has been continuously swirling in Jupiter's atmosphere for at least 400 years.",
                    es: "La Gran Mancha Roja de Júpiter es una tormenta masiva más grande que la Tierra que ha estado girando continuamente en la atmósfera de Júpiter por al menos 400 años.",
                    de: "Jupiters Großer Roter Fleck ist ein massiver Sturm größer als die Erde, der seit mindestens 400 Jahren kontinuierlich in Jupiters Atmosphäre wirbelt.",
                    nl: "De Grote Rode Vlek van Jupiter is een enorme storm groter dan de aarde die al minstens 400 jaar continu in de atmosfeer van Jupiter wervelt."
                }
            },
            {
                question: {
                    en: "What keeps the moon orbiting around Earth?",
                    es: "¿Qué mantiene a la luna orbitando alrededor de la Tierra?",
                    de: "Was hält den Mond auf seiner Umlaufbahn um die Erde?",
                    nl: "Wat houdt de maan in een baan rond de aarde?"
                },
                options: [
                    { en: "Earth's gravity", es: "La gravedad de la Tierra", de: "Die Schwerkraft der Erde", nl: "De zwaartekracht van de aarde" },
                    { en: "Magnetic force", es: "Fuerza magnética", de: "Magnetische Kraft", nl: "Magnetische kracht" },
                    { en: "Solar wind", es: "Viento solar", de: "Sonnenwind", nl: "Zonnewind" },
                    { en: "String connecting them", es: "Una cuerda que los conecta", de: "Ein Seil, das sie verbindet", nl: "Een touw dat ze verbindt" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth's gravitational force pulls the moon toward our planet, while the moon's forward motion creates a stable orbit that takes about 27 days to complete.",
                    es: "La fuerza gravitacional de la Tierra atrae a la luna hacia nuestro planeta, mientras que el movimiento hacia adelante de la luna crea una órbita estable que toma aproximadamente 27 días en completarse.",
                    de: "Die Gravitationskraft der Erde zieht den Mond zu unserem Planeten, während die Vorwärtsbewegung des Mondes eine stabile Umlaufbahn schafft, die etwa 27 Tage dauert.",
                    nl: "De zwaartekracht van de aarde trekt de maan naar onze planeet, terwijl de voorwaartse beweging van de maan een stabiele baan creëert die ongeveer 27 dagen duurt om te voltooien."
                }
            },
            {
                question: {
                    en: "What happens to rock when it gets very hot deep inside Earth?",
                    es: "¿Qué le pasa a la roca cuando se calienta mucho en las profundidades de la Tierra?",
                    de: "Was passiert mit Gestein, wenn es tief in der Erde sehr heiß wird?",
                    nl: "Wat gebeurt er met steen als het heel heet wordt diep in de aarde?"
                },
                options: [
                    { en: "It melts and becomes magma", es: "Se derrite y se convierte en magma", de: "Es schmilzt und wird zu Magma", nl: "Het smelt en wordt magma" },
                    { en: "It turns into water", es: "Se convierte en agua", de: "Es wird zu Wasser", nl: "Het wordt water" },
                    { en: "It becomes lighter than air", es: "Se vuelve más ligero que el aire", de: "Es wird leichter als Luft", nl: "Het wordt lichter dan lucht" },
                    { en: "It freezes solid", es: "Se congela sólidamente", de: "Es friert fest ein", nl: "Het bevriest stevig" }
                ],
                correct: 0,
                explanation: {
                    en: "When rock gets extremely hot (around 2,000°F) deep inside Earth, it melts and becomes magma, which can eventually rise to the surface through volcanoes as lava.",
                    es: "Cuando la roca se calienta extremadamente (alrededor de 1,100°C) en las profundidades de la Tierra, se derrite y se convierte en magma, que eventualmente puede subir a la superficie a través de volcanes como lava.",
                    de: "Wenn Gestein extrem heiß wird (um 1.100°C) tief in der Erde, schmilzt es und wird zu Magma, das schließlich durch Vulkane als Lava an die Oberfläche steigen kann.",
                    nl: "Wanneer steen extreem heet wordt (rond 1.100°C) diep in de aarde, smelt het en wordt magma, dat uiteindelijk door vulkanen als lava naar het oppervlak kan stijgen."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/science', level6);
    }
})();