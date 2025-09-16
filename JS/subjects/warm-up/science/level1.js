(function() {
    const level1 = {
        name: {
            en: "Basic Science",
            es: "Ciencia Básica",
            de: "Grundlegende Wissenschaft",
            nl: "Basiswetenschap"
        },
        questions: [
            {
                question: {
                    en: "What do we need to breathe?",
                    es: "¿Qué necesitamos para respirar?",
                    de: "Was brauchen wir zum Atmen?",
                    nl: "Wat hebben we nodig om te ademen?"
                },
                options: [
                    { en: "Air", es: "Aire", de: "Luft", nl: "Lucht" },
                    { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
                    { en: "Food", es: "Comida", de: "Essen", nl: "Voedsel" },
                    { en: "Light", es: "Luz", de: "Licht", nl: "Licht" }
                ],
                correct: 0,
                explanation: {
                    en: "Air contains oxygen, which is essential for our bodies to function. When we breathe in air, our lungs take the oxygen and send it to our blood, which carries it to all parts of our body. Without oxygen, our cells cannot work properly!",
                    es: "El aire contiene oxígeno, que es esencial para que nuestros cuerpos funcionen. Cuando respiramos aire, nuestros pulmones toman el oxígeno y lo envían a nuestra sangre, que lo lleva a todas las partes de nuestro cuerpo. ¡Sin oxígeno, nuestras células no pueden funcionar correctamente!",
                    de: "Luft enthält Sauerstoff, der für das Funktionieren unseres Körpers unerlässlich ist. Wenn wir Luft einatmen, nehmen unsere Lungen den Sauerstoff auf und senden ihn in unser Blut, das ihn zu allen Teilen unseres Körpers transportiert. Ohne Sauerstoff können unsere Zellen nicht richtig arbeiten!",
                    nl: "Lucht bevat zuurstof, wat essentieel is voor het functioneren van ons lichaam. Wanneer we lucht inademen, nemen onze longen de zuurstof op en sturen deze naar ons bloed, dat het naar alle delen van ons lichaam brengt. Zonder zuurstof kunnen onze cellen niet goed werken!"
                }
            },
            {
                question: {
                    en: "What is water made of?",
                    es: "¿De qué está hecha el agua?",
                    de: "Woraus besteht Wasser?",
                    nl: "Waar bestaat water uit?"
                },
                options: [
                    { en: "Hydrogen and oxygen", es: "Hidrógeno y oxígeno", de: "Wasserstoff und Sauerstoff", nl: "Waterstof en zuurstof" },
                    { en: "Salt and sugar", es: "Sal y azúcar", de: "Salz und Zucker", nl: "Zout en suiker" },
                    { en: "Air and dirt", es: "Aire y tierra", de: "Luft und Schmutz", nl: "Lucht en vuil" },
                    { en: "Ice and steam", es: "Hielo y vapor", de: "Eis und Dampf", nl: "Ijs en stoom" }
                ],
                correct: 0,
                explanation: {
                    en: "Water is made of tiny particles called molecules. Each water molecule contains two hydrogen atoms and one oxygen atom (H2O). This is why we sometimes call water H2O! These invisible building blocks combine to make the water we drink, swim in, and use every day.",
                    es: "El agua está hecha de partículas diminutas llamadas moléculas. Cada molécula de agua contiene dos átomos de hidrógeno y un átomo de oxígeno (H2O). ¡Por eso a veces llamamos al agua H2O! Estos bloques de construcción invisibles se combinan para hacer el agua que bebemos, en la que nadamos y usamos todos los días.",
                    de: "Wasser besteht aus winzigen Teilchen, die Moleküle genannt werden. Jedes Wassermolekül enthält zwei Wasserstoffatome und ein Sauerstoffatom (H2O). Deshalb nennen wir Wasser manchmal H2O! Diese unsichtbaren Bausteine verbinden sich, um das Wasser zu bilden, das wir trinken, in dem wir schwimmen und das wir jeden Tag verwenden.",
                    nl: "Water bestaat uit piepkleine deeltjes die moleculen worden genoemd. Elk watermolecuul bevat twee waterstofatomen en één zuurstofatoom (H2O). Daarom noemen we water soms H2O! Deze onzichtbare bouwstenen combineren om het water te maken dat we drinken, waarin we zwemmen en dat we elke dag gebruiken."
                }
            },
            {
                question: {
                    en: "What happens when you heat water?",
                    es: "¿Qué pasa cuando calientas agua?",
                    de: "Was passiert, wenn du Wasser erhitzt?",
                    nl: "Wat gebeurt er als je water opwarmt?"
                },
                options: [
                    { en: "It turns into steam", es: "Se convierte en vapor", de: "Es wird zu Dampf", nl: "Het wordt stoom" },
                    { en: "It turns into ice", es: "Se convierte en hielo", de: "Es wird zu Eis", nl: "Het wordt ijs" },
                    { en: "It disappears", es: "Desaparece", de: "Es verschwindet", nl: "Het verdwijnt" },
                    { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" }
                ],
                correct: 0,
                explanation: {
                    en: "When water gets hot enough, it turns into steam (water vapor). This process is called evaporation. The heat gives water molecules more energy, making them move faster and faster until they become a gas that floats in the air. This is how clouds form in the sky!",
                    es: "Cuando el agua se calienta lo suficiente, se convierte en vapor (vapor de agua). Este proceso se llama evaporación. El calor da a las moléculas de agua más energía, haciéndolas moverse más y más rápido hasta que se convierten en un gas que flota en el aire. ¡Así es como se forman las nubes en el cielo!",
                    de: "Wenn Wasser heiß genug wird, verwandelt es sich in Dampf (Wasserdampf). Dieser Vorgang wird Verdunstung genannt. Die Hitze gibt den Wassermolekülen mehr Energie und lässt sie immer schneller bewegen, bis sie zu einem Gas werden, das in der Luft schwebt. So entstehen Wolken am Himmel!",
                    nl: "Wanneer water heet genoeg wordt, verandert het in stoom (waterdamp). Dit proces wordt verdamping genoemd. De hitte geeft watermoleculen meer energie, waardoor ze steeds sneller bewegen totdat ze een gas worden dat in de lucht zweeft. Zo ontstaan wolken in de lucht!"
                }
            },
            {
                question: {
                    en: "What happens when you cool water?",
                    es: "¿Qué pasa cuando enfrías agua?",
                    de: "Was passiert, wenn du Wasser abkühlst?",
                    nl: "Wat gebeurt er als je water afkoelt?"
                },
                options: [
                    { en: "It turns into ice", es: "Se convierte en hielo", de: "Es wird zu Eis", nl: "Het wordt ijs" },
                    { en: "It turns into steam", es: "Se convierte en vapor", de: "Es wird zu Dampf", nl: "Het wordt stoom" },
                    { en: "It gets heavier", es: "Se vuelve más pesado", de: "Es wird schwerer", nl: "Het wordt zwaarder" },
                    { en: "It changes taste", es: "Cambia de sabor", de: "Es ändert den Geschmack", nl: "Het verandert van smaak" }
                ],
                correct: 0,
                explanation: {
                    en: "When water gets very cold, it freezes and becomes ice. The cold slows down the water molecules so much that they stick together in a solid form. Fun fact: ice actually takes up more space than liquid water, which is why ice cubes float in your drink!",
                    es: "Cuando el agua se enfría mucho, se congela y se convierte en hielo. El frío ralentiza tanto las moléculas de agua que se pegan formando una forma sólida. Dato curioso: ¡el hielo en realidad ocupa más espacio que el agua líquida, por eso los cubitos de hielo flotan en tu bebida!",
                    de: "Wenn Wasser sehr kalt wird, gefriert es und wird zu Eis. Die Kälte verlangsamt die Wassermoleküle so sehr, dass sie in fester Form zusammenkleben. Interessanter Fakt: Eis nimmt tatsächlich mehr Platz ein als flüssiges Wasser, weshalb Eiswürfel in deinem Getränk schwimmen!",
                    nl: "Wanneer water heel koud wordt, bevriest het en wordt het ijs. De kou vertraagt de watermoleculen zo veel dat ze aan elkaar blijven plakken in een vaste vorm. Leuk feitje: ijs neemt eigenlijk meer ruimte in dan vloeibaar water, daarom drijven ijsblokjes in je drankje!"
                }
            },
            {
                question: {
                    en: "What makes plants green?",
                    es: "¿Qué hace que las plantas sean verdes?",
                    de: "Was macht Pflanzen grün?",
                    nl: "Wat maakt planten groen?"
                },
                options: [
                    { en: "Chlorophyll", es: "Clorofila", de: "Chlorophyll", nl: "Chlorofyl" },
                    { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
                    { en: "Sunlight", es: "Luz solar", de: "Sonnenlicht", nl: "Zonlicht" },
                    { en: "Air", es: "Aire", de: "Luft", nl: "Lucht" }
                ],
                correct: 0,
                explanation: {
                    en: "Chlorophyll is a special green substance in plant leaves that captures sunlight to make food through photosynthesis. It's like tiny solar panels in every leaf! Plants use chlorophyll to turn sunlight, water, and carbon dioxide into sugar that feeds the plant.",
                    es: "La clorofila es una sustancia verde especial en las hojas de las plantas que captura la luz solar para hacer comida a través de la fotosíntesis. ¡Es como pequeños paneles solares en cada hoja! Las plantas usan la clorofila para convertir la luz solar, el agua y el dióxido de carbono en azúcar que alimenta la planta.",
                    de: "Chlorophyll ist eine spezielle grüne Substanz in Pflanzenblättern, die Sonnenlicht einfängt, um durch Photosynthese Nahrung zu produzieren. Es ist wie winzige Solarpaneele in jedem Blatt! Pflanzen verwenden Chlorophyll, um Sonnenlicht, Wasser und Kohlendioxid in Zucker umzuwandeln, der die Pflanze nährt.",
                    nl: "Chlorofyl is een speciale groene stof in plantenbladeren die zonlicht opvangt om voedsel te maken door fotosynthese. Het zijn als kleine zonnepanelen in elk blad! Planten gebruiken chlorofyl om zonlicht, water en koolstofdioxide om te zetten in suiker die de plant voedt."
                }
            },
            {
                question: {
                    en: "What do plants need to grow?",
                    es: "¿Qué necesitan las plantas para crecer?",
                    de: "Was brauchen Pflanzen zum Wachsen?",
                    nl: "Wat hebben planten nodig om te groeien?"
                },
                options: [
                    { en: "Water, sunlight, and air", es: "Agua, luz solar y aire", de: "Wasser, Sonnenlicht und Luft", nl: "Water, zonlicht en lucht" },
                    { en: "Only water", es: "Solo agua", de: "Nur Wasser", nl: "Alleen water" },
                    { en: "Only sunlight", es: "Solo luz solar", de: "Nur Sonnenlicht", nl: "Alleen zonlicht" },
                    { en: "Only soil", es: "Solo tierra", de: "Nur Erde", nl: "Alleen aarde" }
                ],
                correct: 0,
                explanation: {
                    en: "Plants need three main things to grow: water (to drink and transport nutrients), sunlight (for energy through photosynthesis), and air (carbon dioxide to make food). They also need nutrients from soil. It's like how we need food, water, and air to live and grow!",
                    es: "Las plantas necesitan tres cosas principales para crecer: agua (para beber y transportar nutrientes), luz solar (para energía a través de la fotosíntesis), y aire (dióxido de carbono para hacer comida). También necesitan nutrientes del suelo. ¡Es como cómo nosotros necesitamos comida, agua y aire para vivir y crecer!",
                    de: "Pflanzen benötigen drei Hauptsachen zum Wachsen: Wasser (zum Trinken und Transport von Nährstoffen), Sonnenlicht (für Energie durch Photosynthese) und Luft (Kohlendioxid zur Nahrungsproduktion). Sie brauchen auch Nährstoffe aus dem Boden. Es ist wie bei uns Menschen - wir brauchen Nahrung, Wasser und Luft zum Leben und Wachsen!",
                    nl: "Planten hebben drie hoofdzaken nodig om te groeien: water (om te drinken en voedingsstoffen te transporteren), zonlicht (voor energie door fotosynthese), en lucht (koolstofdioxide om voedsel te maken). Ze hebben ook voedingsstoffen uit de grond nodig. Het is net zoals wij voedsel, water en lucht nodig hebben om te leven en te groeien!"
                }
            },
            {
                question: {
                    en: "How many senses do humans have?",
                    es: "¿Cuántos sentidos tienen los humanos?",
                    de: "Wie viele Sinne haben Menschen?",
                    nl: "Hoeveel zintuigen hebben mensen?"
                },
                options: [
                    { en: "Five", es: "Cinco", de: "Fünf", nl: "Vijf" },
                    { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
                    { en: "Four", es: "Cuatro", de: "Vier", nl: "Vier" },
                    { en: "Six", es: "Seis", de: "Sechs", nl: "Zes" }
                ],
                correct: 0,
                explanation: {
                    en: "Humans have five amazing senses that help us explore and understand the world around us! These senses are like special tools that collect information and send it to our brain. They help keep us safe and let us enjoy wonderful experiences.",
                    es: "Los humanos tenemos cinco sentidos increíbles que nos ayudan a explorar y entender el mundo que nos rodea! Estos sentidos son como herramientas especiales que recolectan información y la envían a nuestro cerebro. Nos ayudan a mantenernos seguros y nos permiten disfrutar experiencias maravillosas.",
                    de: "Menschen haben fünf erstaunliche Sinne, die uns helfen, die Welt um uns herum zu erkunden und zu verstehen! Diese Sinne sind wie spezielle Werkzeuge, die Informationen sammeln und an unser Gehirn weiterleiten. Sie helfen uns, sicher zu bleiben und wunderbare Erfahrungen zu genießen.",
                    nl: "Mensen hebben vijf geweldige zintuigen die ons helpen de wereld om ons heen te verkennen en te begrijpen! Deze zintuigen zijn als speciale hulpmiddelen die informatie verzamelen en naar onze hersenen sturen. Ze helpen ons veilig te blijven en laten ons van prachtige ervaringen genieten."
                }
            },
            {
                question: {
                    en: "What are the five senses?",
                    es: "¿Cuáles son los cinco sentidos?",
                    de: "Was sind die fünf Sinne?",
                    nl: "Wat zijn de vijf zintuigen?"
                },
                options: [
                    { en: "See, hear, smell, taste, touch", es: "Ver, oír, oler, saborear, tocar", de: "Sehen, hören, riechen, schmecken, fühlen", nl: "Zien, horen, ruiken, proeven, voelen" },
                    { en: "Walk, run, jump, sit, stand", es: "Caminar, correr, saltar, sentarse, pararse", de: "Gehen, rennen, springen, sitzen, stehen", nl: "Lopen, rennen, springen, zitten, staan" },
                    { en: "Read, write, count, sing, dance", es: "Leer, escribir, contar, cantar, bailar", de: "Lesen, schreiben, zählen, singen, tanzen", nl: "Lezen, schrijven, tellen, zingen, dansen" },
                    { en: "Eat, sleep, play, work, learn", es: "Comer, dormir, jugar, trabajar, aprender", de: "Essen, schlafen, spielen, arbeiten, lernen", nl: "Eten, slapen, spelen, werken, leren" }
                ],
                correct: 0,
                explanation: {
                    en: "The five senses are sight (seeing with our eyes), hearing (listening with our ears), smell (detecting scents with our nose), taste (experiencing flavors with our tongue), and touch (feeling with our skin). Each sense has special body parts that detect different things in our environment!",
                    es: "Los cinco sentidos son la vista (ver con nuestros ojos), el oído (escuchar con nuestros oídos), el olfato (detectar olores con nuestra nariz), el gusto (experimentar sabores con nuestra lengua), y el tacto (sentir con nuestra piel). ¡Cada sentido tiene partes especiales del cuerpo que detectan cosas diferentes en nuestro entorno!",
                    de: "Die fünf Sinne sind das Sehen (mit unseren Augen), das Hören (mit unseren Ohren), das Riechen (Gerüche mit unserer Nase wahrnehmen), das Schmecken (Geschmäcker mit unserer Zunge erleben) und das Fühlen (mit unserer Haut spüren). Jeder Sinn hat spezielle Körperteile, die verschiedene Dinge in unserer Umgebung erkennen!",
                    nl: "De vijf zintuigen zijn zicht (zien met onze ogen), gehoor (luisteren met onze oren), reuk (geuren waarnemen met onze neus), smaak (smaken ervaren met onze tong), en gevoel (voelen met onze huid). Elk zintuig heeft speciale lichaamsdelen die verschillende dingen in onze omgeving detecteren!"
                }
            },
            {
                question: {
                    en: "What organ helps us see?",
                    es: "¿Qué órgano nos ayuda a ver?",
                    de: "Welches Organ hilft uns zu sehen?",
                    nl: "Welk orgaan helpt ons te zien?"
                },
                options: [
                    { en: "Eyes", es: "Ojos", de: "Augen", nl: "Ogen" },
                    { en: "Ears", es: "Oídos", de: "Ohren", nl: "Oren" },
                    { en: "Nose", es: "Nariz", de: "Nase", nl: "Neus" },
                    { en: "Mouth", es: "Boca", de: "Mund", nl: "Mond" }
                ],
                correct: 0,
                explanation: {
                    en: "Our eyes are amazing cameras that capture light and send pictures to our brain! They have special parts like the pupil (the black circle) that controls how much light gets in, and the iris (the colored part) that makes each person's eyes unique. Your eyes can see millions of different colors!",
                    es: "¡Nuestros ojos son cámaras increíbles que capturan luz y envían imágenes a nuestro cerebro! Tienen partes especiales como la pupila (el círculo negro) que controla cuánta luz entra, y el iris (la parte coloreada) que hace que los ojos de cada persona sean únicos. ¡Tus ojos pueden ver millones de colores diferentes!",
                    de: "Unsere Augen sind erstaunliche Kameras, die Licht einfangen und Bilder an unser Gehirn senden! Sie haben besondere Teile wie die Pupille (der schwarze Kreis), die kontrolliert, wie viel Licht hineinkommt, und die Iris (der farbige Teil), die die Augen jeder Person einzigartig macht. Deine Augen können Millionen verschiedener Farben sehen!",
                    nl: "Onze ogen zijn geweldige camera's die licht vangen en plaatjes naar onze hersenen sturen! Ze hebben speciale onderdelen zoals de pupil (de zwarte cirkel) die controleert hoeveel licht er binnenkomt, en de iris (het gekleurde deel) dat de ogen van elke persoon uniek maakt. Je ogen kunnen miljoenen verschillende kleuren zien!"
                }
            },
            {
                question: {
                    en: "What organ helps us hear?",
                    es: "¿Qué órgano nos ayuda a oír?",
                    de: "Welches Organ hilft uns zu hören?",
                    nl: "Welk orgaan helpt ons te horen?"
                },
                options: [
                    { en: "Ears", es: "Oídos", de: "Ohren", nl: "Oren" },
                    { en: "Eyes", es: "Ojos", de: "Augen", nl: "Ogen" },
                    { en: "Nose", es: "Nariz", de: "Nase", nl: "Neus" },
                    { en: "Hands", es: "Manos", de: "Hände", nl: "Handen" }
                ],
                correct: 0,
                explanation: {
                    en: "Our ears are like natural microphones that catch sound waves from the air! The ear has three parts: the outer ear (what you can see), the middle ear (with tiny bones), and the inner ear (with liquid that helps with balance). Sound vibrations travel through all these parts to reach our brain!",
                    es: "¡Nuestros oídos son como micrófonos naturales que capturan ondas sonoras del aire! El oído tiene tres partes: el oído externo (lo que puedes ver), el oído medio (con huesos pequeñitos), y el oído interno (con líquido que ayuda con el equilibrio). ¡Las vibraciones sonoras viajan a través de todas estas partes para llegar a nuestro cerebro!",
                    de: "Unsere Ohren sind wie natürliche Mikrofone, die Schallwellen aus der Luft auffangen! Das Ohr hat drei Teile: das Außenohr (was du sehen kannst), das Mittelohr (mit winzigen Knochen) und das Innenohr (mit Flüssigkeit, die beim Gleichgewicht hilft). Schallschwingungen wandern durch alle diese Teile, um unser Gehirn zu erreichen!",
                    nl: "Onze oren zijn als natuurlijke microfoons die geluidsgolven uit de lucht opvangen! Het oor heeft drie delen: het buitenoor (wat je kunt zien), het middenoor (met kleine botjes), en het binnenoor (met vloeistof die helpt met evenwicht). Geluidstrillingen reizen door al deze delen om onze hersenen te bereiken!"
                }
            },
            {
                question: {
                    en: "What do we use our nose for?",
                    es: "¿Para qué usamos nuestra nariz?",
                    de: "Wofür benutzen wir unsere Nase?",
                    nl: "Waarvoor gebruiken we onze neus?"
                },
                options: [
                    { en: "To smell and breathe", es: "Para oler y respirar", de: "Zum Riechen und Atmen", nl: "Om te ruiken en ademen" },
                    { en: "To see", es: "Para ver", de: "Zum Sehen", nl: "Om te zien" },
                    { en: "To hear", es: "Para oír", de: "Zum Hören", nl: "Om te horen" },
                    { en: "To eat", es: "Para comer", de: "Zum Essen", nl: "Om te eten" }
                ],
                correct: 0,
                explanation: {
                    en: "Your nose has two important jobs! It helps you smell by detecting tiny particles in the air - you can smell cookies baking or flowers blooming. It also helps you breathe by filtering, warming, and cleaning the air before it goes to your lungs. Amazing!",
                    es: "¡Tu nariz tiene dos trabajos importantes! Te ayuda a oler detectando partículas diminutas en el aire - puedes oler galletas horneando o flores floreciendo. También te ayuda a respirar filtrando, calentando y limpiando el aire antes de que vaya a tus pulmones. ¡Increíble!",
                    de: "Deine Nase hat zwei wichtige Aufgaben! Sie hilft dir zu riechen, indem sie winzige Teilchen in der Luft erkennt - du kannst Kekse beim Backen oder blühende Blumen riechen. Sie hilft dir auch beim Atmen, indem sie die Luft filtert, erwärmt und reinigt, bevor sie in deine Lungen gelangt. Erstaunlich!",
                    nl: "Je neus heeft twee belangrijke taken! Het helpt je ruiken door piepkleine deeltjes in de lucht te detecteren - je kunt koekjes ruiken die bakken of bloemen die bloeien. Het helpt je ook ademen door de lucht te filteren, op te warmen en te reinigen voordat het naar je longen gaat. Geweldig!"
                }
            },
            {
                question: {
                    en: "Where do we taste food?",
                    es: "¿Dónde saboreamos la comida?",
                    de: "Wo schmecken wir Essen?",
                    nl: "Waar proeven we voedsel?"
                },
                options: [
                    { en: "On our tongue", es: "En nuestra lengua", de: "Auf unserer Zunge", nl: "Op onze tong" },
                    { en: "In our nose", es: "En nuestra nariz", de: "In unserer Nase", nl: "In onze neus" },
                    { en: "In our ears", es: "En nuestros oídos", de: "In unseren Ohren", nl: "In onze oren" },
                    { en: "In our hands", es: "En nuestras manos", de: "In unseren Händen", nl: "In onze handen" }
                ],
                correct: 0,
                explanation: {
                    en: "Your tongue has thousands of tiny taste buds that can detect five basic tastes: sweet, sour, salty, bitter, and umami (savory). These taste buds work with your sense of smell to create all the different flavors you experience when eating your favorite foods!",
                    es: "Tu lengua tiene miles de papilas gustativas diminutas que pueden detectar cinco sabores básicos: dulce, agrio, salado, amargo y umami (sabroso). ¡Estas papilas gustativas trabajan con tu sentido del olfato para crear todos los diferentes sabores que experimentas al comer tus comidas favoritas!",
                    de: "Deine Zunge hat Tausende von winzigen Geschmacksknospen, die fünf Grundgeschmäcker erkennen können: süß, sauer, salzig, bitter und umami (herzhaft). Diese Geschmacksknospen arbeiten mit deinem Geruchssinn zusammen, um all die verschiedenen Aromen zu erzeugen, die du beim Essen deiner Lieblingsspeisen erlebst!",
                    nl: "Je tong heeft duizenden piepkleine smaakpapillen die vijf basissmaken kunnen detecteren: zoet, zuur, zout, bitter en umami (hartig). Deze smaakpapillen werken samen met je reukzin om alle verschillende smaken te creëren die je ervaart bij het eten van je favoriete voedsel!"
                }
            },
            {
                question: {
                    en: "What do we use our hands to feel?",
                    es: "¿Qué usamos nuestras manos para sentir?",
                    de: "Was benutzen wir unsere Hände zu fühlen?",
                    nl: "Wat gebruiken we onze handen om te voelen?"
                },
                options: [
                    { en: "Texture and temperature", es: "Textura y temperatura", de: "Beschaffenheit und Temperatur", nl: "Textuur en temperatuur" },
                    { en: "Colors", es: "Colores", de: "Farben", nl: "Kleuren" },
                    { en: "Sounds", es: "Sonidos", de: "Geräusche", nl: "Geluiden" },
                    { en: "Smells", es: "Olores", de: "Gerüche", nl: "Geuren" }
                ],
                correct: 0,
                explanation: {
                    en: "Your hands and skin are covered in special nerve endings that can feel if something is rough or smooth, hot or cold, soft or hard. This sense of touch helps protect you from danger and lets you enjoy wonderful feelings like soft blankets or warm hugs!",
                    es: "Tus manos y piel están cubiertas de terminaciones nerviosas especiales que pueden sentir si algo es áspero o suave, caliente o frío, blando o duro. ¡Este sentido del tacto te ayuda a protegerte del peligro y te permite disfrutar sensaciones maravillosas como mantas suaves o abrazos cálidos!",
                    de: "Deine Hände und Haut sind mit besonderen Nervenenden bedeckt, die fühlen können, ob etwas rau oder glatt, heiß oder kalt, weich oder hart ist. Dieser Tastsinn hilft dir, dich vor Gefahren zu schützen und lässt dich wunderbare Gefühle wie weiche Decken oder warme Umarmungen genießen!",
                    nl: "Je handen en huid zijn bedekt met speciale zenuwuiteinden die kunnen voelen of iets ruw of glad is, heet of koud, zacht of hard. Dit tastzintuig helpt je beschermen tegen gevaar en laat je genieten van heerlijke gevoelens zoals zachte dekens of warme knuffels!"
                }
            },
            {
                question: {
                    en: "What is the biggest organ in our body?",
                    es: "¿Cuál es el órgano más grande de nuestro cuerpo?",
                    de: "Was ist das größte Organ in unserem Körper?",
                    nl: "Wat is het grootste orgaan in ons lichaam?"
                },
                options: [
                    { en: "Skin", es: "Piel", de: "Haut", nl: "Huid" },
                    { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
                    { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
                    { en: "Lungs", es: "Pulmones", de: "Lungen", nl: "Longen" }
                ],
                correct: 0,
                explanation: {
                    en: "Your skin is your body's largest organ! It covers your whole body like a protective suit, keeping germs out and helping control your body temperature. Skin also contains nerve endings for touch and heals itself when you get small cuts or scrapes.",
                    es: "¡Tu piel es el órgano más grande de tu cuerpo! Cubre todo tu cuerpo como un traje protector, manteniendo los gérmenes afuera y ayudando a controlar la temperatura de tu cuerpo. La piel también contiene terminaciones nerviosas para el tacto y se cura sola cuando tienes pequeños cortes o raspaduras.",
                    de: "Deine Haut ist das größte Organ deines Körpers! Sie bedeckt deinen ganzen Körper wie ein Schutzanzug, hält Keime fern und hilft, deine Körpertemperatur zu kontrollieren. Die Haut enthält auch Nervenenden für das Tasten und heilt sich selbst, wenn du kleine Schnitte oder Kratzer hast.",
                    nl: "Je huid is het grootste orgaan van je lichaam! Het bedekt je hele lichaam als een beschermend pak, houdt ziektekiemen buiten en helpt je lichaamstemperatuur te controleren. Huid bevat ook zenuwuiteinden voor aanraking en geneest zichzelf wanneer je kleine sneetjes of schaafwonden hebt."
                }
            },
            {
                question: {
                    en: "What does our heart do?",
                    es: "¿Qué hace nuestro corazón?",
                    de: "Was macht unser Herz?",
                    nl: "Wat doet ons hart?"
                },
                options: [
                    { en: "Pumps blood", es: "Bombea sangre", de: "Pumpt Blut", nl: "Pompt bloed" },
                    { en: "Helps us think", es: "Nos ayuda a pensar", de: "Hilft uns zu denken", nl: "Helpt ons denken" },
                    { en: "Helps us breathe", es: "Nos ayuda a respirar", de: "Hilft uns zu atmen", nl: "Helpt ons ademen" },
                    { en: "Helps us see", es: "Nos ayuda a ver", de: "Hilft uns zu sehen", nl: "Helpt ons zien" }
                ],
                correct: 0,
                explanation: {
                    en: "Your heart is like a super strong pump that works 24/7! It pumps blood through your body about 100,000 times per day, sending oxygen and nutrients to every part of you. Your heart beats faster when you exercise because your muscles need more oxygen!",
                    es: "¡Tu corazón es como una bomba súper fuerte que trabaja 24/7! Bombea sangre por tu cuerpo unas 100,000 veces por día, enviando oxígeno y nutrientes a cada parte de ti. ¡Tu corazón late más rápido cuando haces ejercicio porque tus músculos necesitan más oxígeno!",
                    de: "Dein Herz ist wie eine superstarke Pumpe, die 24/7 arbeitet! Es pumpt etwa 100.000 Mal pro Tag Blut durch deinen Körper und sendet Sauerstoff und Nährstoffe an jeden Teil von dir. Dein Herz schlägt schneller, wenn du Sport treibst, weil deine Muskeln mehr Sauerstoff brauchen!",
                    nl: "Je hart is als een supersterke pomp die 24/7 werkt! Het pompt ongeveer 100.000 keer per dag bloed door je lichaam en stuurt zuurstof en voedingsstoffen naar elk deel van je. Je hart klopt sneller wanneer je sport omdat je spieren meer zuurstof nodig hebben!"
                }
            },
            {
                question: {
                    en: "What do our lungs help us do?",
                    es: "¿Qué nos ayudan a hacer nuestros pulmones?",
                    de: "Was helfen uns unsere Lungen zu tun?",
                    nl: "Wat helpen onze longen ons te doen?"
                },
                options: [
                    { en: "Breathe", es: "Respirar", de: "Atmen", nl: "Ademen" },
                    { en: "Think", es: "Pensar", de: "Denken", nl: "Denken" },
                    { en: "Eat", es: "Comer", de: "Essen", nl: "Eten" },
                    { en: "Walk", es: "Caminar", de: "Gehen", nl: "Lopen" }
                ],
                correct: 0,
                explanation: {
                    en: "Your lungs are like two big balloons in your chest that help you breathe! When you breathe in, they fill with air and take out the oxygen your body needs. When you breathe out, they remove carbon dioxide waste. You breathe about 20,000 times each day!",
                    es: "¡Tus pulmones son como dos globos grandes en tu pecho que te ayudan a respirar! Cuando inhalas, se llenan de aire y sacan el oxígeno que tu cuerpo necesita. Cuando exhalas, eliminan el dióxido de carbono de desecho. ¡Respiras unas 20,000 veces cada día!",
                    de: "Deine Lungen sind wie zwei große Ballons in deiner Brust, die dir beim Atmen helfen! Wenn du einatmest, füllen sie sich mit Luft und nehmen den Sauerstoff heraus, den dein Körper braucht. Wenn du ausatmest, entfernen sie Kohlendioxid-Abfall. Du atmest etwa 20.000 Mal pro Tag!",
                    nl: "Je longen zijn als twee grote ballonnen in je borst die je helpen ademen! Wanneer je inademt, vullen ze zich met lucht en halen ze de zuurstof eruit die je lichaam nodig heeft. Wanneer je uitademt, verwijderen ze koolstofdioxide-afval. Je ademt ongeveer 20.000 keer per dag!"
                }
            },
            {
                question: {
                    en: "What organ helps us think?",
                    es: "¿Qué órgano nos ayuda a pensar?",
                    de: "Welches Organ hilft uns zu denken?",
                    nl: "Welk orgaan helpt ons denken?"
                },
                options: [
                    { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
                    { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
                    { en: "Stomach", es: "Estómago", de: "Magen", nl: "Maag" },
                    { en: "Hands", es: "Manos", de: "Hände", nl: "Handen" }
                ],
                correct: 0,
                explanation: {
                    en: "Your brain is like a super computer that controls everything you do! It helps you think, remember, learn new things, and controls all your body functions. Your brain has about 86 billion nerve cells called neurons that send messages faster than lightning!",
                    es: "¡Tu cerebro es como una super computadora que controla todo lo que haces! Te ayuda a pensar, recordar, aprender cosas nuevas y controla todas las funciones de tu cuerpo. ¡Tu cerebro tiene unos 86 mil millones de células nerviosas llamadas neuronas que envían mensajes más rápido que un rayo!",
                    de: "Dein Gehirn ist wie ein Supercomputer, der alles kontrolliert, was du tust! Es hilft dir zu denken, dich zu erinnern, neue Dinge zu lernen und kontrolliert alle deine Körperfunktionen. Dein Gehirn hat etwa 86 Milliarden Nervenzellen namens Neuronen, die Nachrichten schneller als Blitze senden!",
                    nl: "Je hersenen zijn als een supercomputer die alles controleert wat je doet! Het helpt je denken, onthouden, nieuwe dingen leren en controleert alle functies van je lichaam. Je hersenen hebben ongeveer 86 miljard zenuwcellen genaamd neuronen die berichten sneller dan de bliksem sturen!"
                }
            },
            {
                question: {
                    en: "How many bones do babies have when they are born?",
                    es: "¿Cuántos huesos tienen los bebés cuando nacen?",
                    de: "Wie viele Knochen haben Babys bei der Geburt?",
                    nl: "Hoeveel botten hebben baby's als ze geboren worden?"
                },
                options: [
                    { en: "About 300", es: "Alrededor de 300", de: "Etwa 300", nl: "Ongeveer 300" },
                    { en: "About 100", es: "Alrededor de 100", de: "Etwa 100", nl: "Ongeveer 100" },
                    { en: "About 200", es: "Alrededor de 200", de: "Etwa 200", nl: "Ongeveer 200" },
                    { en: "About 500", es: "Alrededor de 500", de: "Etwa 500", nl: "Ongeveer 500" }
                ],
                correct: 0,
                explanation: {
                    en: "Babies are born with about 300 bones, many of which are made of soft cartilage! As babies grow, some of these bones fuse (join together) and the cartilage becomes hard bone. This is why babies are so flexible and can curl up in the womb!",
                    es: "¡Los bebés nacen con unas 300 huesos, muchos de los cuales están hechos de cartílago blando! Mientras los bebés crecen, algunos de estos huesos se fusionan (se unen) y el cartílago se convierte en hueso duro. ¡Por eso los bebés son tan flexibles y pueden curvarse en el útero!",
                    de: "Babys werden mit etwa 300 Knochen geboren, von denen viele aus weichem Knorpel bestehen! Während Babys wachsen, verschmelzen einige dieser Knochen (fügen sich zusammen) und der Knorpel wird zu hartem Knochen. Deshalb sind Babys so flexibel und können sich im Mutterleib zusammenrollen!",
                    nl: "Baby's worden geboren met ongeveer 300 botten, waarvan er veel gemaakt zijn van zacht kraakbeen! Terwijl baby's groeien, smelten sommige van deze botten samen (voegen zich samen) en wordt het kraakbeen hard bot. Daarom zijn baby's zo flexibel en kunnen ze zich oprollen in de baarmoeder!"
                }
            },
            {
                question: {
                    en: "How many bones do adults have?",
                    es: "¿Cuántos huesos tienen los adultos?",
                    de: "Wie viele Knochen haben Erwachsene?",
                    nl: "Hoeveel botten hebben volwassenen?"
                },
                options: [
                    { en: "About 206", es: "Alrededor de 206", de: "Etwa 206", nl: "Ongeveer 206" },
                    { en: "About 300", es: "Alrededor de 300", de: "Etwa 300", nl: "Ongeveer 300" },
                    { en: "About 100", es: "Alrededor de 100", de: "Etwa 100", nl: "Ongeveer 100" },
                    { en: "About 400", es: "Alrededor de 400", de: "Etwa 400", nl: "Ongeveer 400" }
                ],
                correct: 0,
                explanation: {
                    en: "Adults have about 206 bones because many of the 300 baby bones have fused together as they grew up! These bones form your skeleton, which gives your body shape, protects your organs, and works with muscles to help you move. Your bones are alive and constantly growing and healing!",
                    es: "¡Los adultos tienen unas 206 huesos porque muchos de los 300 huesos de bebé se han fusionado mientras crecieron! Estos huesos forman tu esqueleto, que le da forma a tu cuerpo, protege tus órganos y trabaja con los músculos para ayudarte a moverte. ¡Tus huesos están vivos y constantemente creciendo y sanándose!",
                    de: "Erwachsene haben etwa 206 Knochen, weil viele der 300 Babyknochen während des Wachstums zusammengewachsen sind! Diese Knochen bilden dein Skelett, das deinem Körper Form gibt, deine Organe schützt und mit den Muskeln zusammenarbeitet, um dir bei der Bewegung zu helfen. Deine Knochen leben und wachsen und heilen ständig!",
                    nl: "Volwassenen hebben ongeveer 206 botten omdat veel van de 300 babybotten zijn samengesmolten terwijl ze opgroeiden! Deze botten vormen je skelet, dat je lichaam vorm geeft, je organen beschermt en samenwerkt met spieren om je te helpen bewegen. Je botten leven en groeien en genezen voortdurend!"
                }
            },
            {
                question: {
                    en: "What helps our bones stay strong?",
                    es: "¿Qué ayuda a nuestros huesos a mantenerse fuertes?",
                    de: "Was hilft unseren Knochen, stark zu bleiben?",
                    nl: "Wat helpt onze botten sterk te blijven?"
                },
                options: [
                    { en: "Calcium from milk", es: "Calcio de la leche", de: "Kalzium aus Milch", nl: "Calcium uit melk" },
                    { en: "Sugar from candy", es: "Azúcar de los dulces", de: "Zucker aus Süßigkeiten", nl: "Suiker uit snoep" },
                    { en: "Salt from chips", es: "Sal de las papas fritas", de: "Salz aus Chips", nl: "Zout uit chips" },
                    { en: "Oil from food", es: "Aceite de la comida", de: "Öl aus dem Essen", nl: "Olie uit voedsel" }
                ],
                correct: 0,
                explanation: {
                    en: "Calcium is like building blocks for your bones! You can get calcium from milk, cheese, yogurt, and green vegetables. Calcium makes your bones hard and strong so they can support your body weight and protect you when you play and exercise.",
                    es: "¡El calcio es como bloques de construcción para tus huesos! Puedes obtener calcio de la leche, queso, yogur y vegetales verdes. El calcio hace que tus huesos sean duros y fuertes para que puedan soportar el peso de tu cuerpo y protegerte cuando juegas y haces ejercicio.",
                    de: "Kalzium ist wie Bausteine für deine Knochen! Du kannst Kalzium aus Milch, Käse, Joghurt und grünem Gemüse bekommen. Kalzium macht deine Knochen hart und stark, damit sie dein Körpergewicht tragen und dich schützen können, wenn du spielst und Sport treibst.",
                    nl: "Calcium is als bouwstenen voor je botten! Je kunt calcium krijgen uit melk, kaas, yoghurt en groene groenten. Calcium maakt je botten hard en sterk zodat ze je lichaamsgewicht kunnen dragen en je kunnen beschermen wanneer je speelt en sport."
                }
            },
            {
                question: {
                    en: "What makes our muscles grow?",
                    es: "¿Qué hace que nuestros músculos crezcan?",
                    de: "Was lässt unsere Muskeln wachsen?",
                    nl: "Wat laat onze spieren groeien?"
                },
                options: [
                    { en: "Exercise and protein", es: "Ejercicio y proteína", de: "Übung und Protein", nl: "Oefening en eiwit" },
                    { en: "Sleeping all day", es: "Dormir todo el día", de: "Den ganzen Tag schlafen", nl: "De hele dag slapen" },
                    { en: "Eating candy", es: "Comer dulces", de: "Süßigkeiten essen", nl: "Snoep eten" },
                    { en: "Watching TV", es: "Ver televisión", de: "Fernsehen schauen", nl: "Tv kijken" }
                ],
                correct: 0,
                explanation: {
                    en: "Your muscles grow stronger when you exercise regularly and eat protein-rich foods like chicken, fish, beans, and nuts! Exercise creates tiny tears in muscles that heal back stronger. Rest is also important - muscles actually grow while you sleep!",
                    es: "¡Tus músculos se fortalecen cuando haces ejercicio regularmente y comes alimentos ricos en proteínas como pollo, pescado, frijoles y nueces! El ejercicio crea pequeños desgarros en los músculos que sanan más fuertes. El descanso también es importante: ¡los músculos realmente crecen mientras duermes!",
                    de: "Deine Muskeln werden stärker, wenn du regelmäßig trainierst und proteinreiche Lebensmittel wie Hühnchen, Fisch, Bohnen und Nüsse isst! Übung erzeugt winzige Risse in den Muskeln, die stärker wieder heilen. Ruhe ist auch wichtig - Muskeln wachsen tatsächlich, während du schläfst!",
                    nl: "Je spieren worden sterker wanneer je regelmatig sport en eiwitrijke voedingsmiddelen eet zoals kip, vis, bonen en noten! Oefening veroorzaakt kleine scheurtjes in spieren die sterker genezen. Rust is ook belangrijk - spieren groeien eigenlijk terwijl je slaapt!"
                }
            },
            {
                question: {
                    en: "What do magnets attract?",
                    es: "¿Qué atraen los imanes?",
                    de: "Was ziehen Magnete an?",
                    nl: "Wat trekken magneten aan?"
                },
                options: [
                    { en: "Metal objects", es: "Objetos de metal", de: "Metallobjekte", nl: "Metalen voorwerpen" },
                    { en: "Plastic objects", es: "Objetos de plástico", de: "Plastikobjekte", nl: "Plastic voorwerpen" },
                    { en: "Wooden objects", es: "Objetos de madera", de: "Holzobjekte", nl: "Houten voorwerpen" },
                    { en: "Paper objects", es: "Objetos de papel", de: "Papierobjekte", nl: "Papieren voorwerpen" }
                ],
                correct: 0,
                explanation: {
                    en: "Magnets have invisible magnetic forces that can pull certain metals like iron, nickel, and steel toward them! This happens because these metals have tiny particles that line up with the magnet's force. Magnets don't attract plastic, wood, or paper because these materials aren't magnetic.",
                    es: "¡Los imanes tienen fuerzas magnéticas invisibles que pueden atraer ciertos metales como hierro, níquel y acero hacia ellos! Esto sucede porque estos metales tienen partículas diminutas que se alinean con la fuerza del imán. Los imanes no atraen plástico, madera o papel porque estos materiales no son magnéticos.",
                    de: "Magnete haben unsichtbare magnetische Kräfte, die bestimmte Metalle wie Eisen, Nickel und Stahl zu sich ziehen können! Das passiert, weil diese Metalle winzige Teilchen haben, die sich mit der Kraft des Magneten ausrichten. Magnete ziehen kein Plastik, Holz oder Papier an, weil diese Materialien nicht magnetisch sind.",
                    nl: "Magneten hebben onzichtbare magnetische krachten die bepaalde metalen zoals ijzer, nikkel en staal naar zich toe kunnen trekken! Dit gebeurt omdat deze metalen piepkleine deeltjes hebben die zich uitlijnen met de kracht van de magneet. Magneten trekken geen plastic, hout of papier aan omdat deze materialen niet magnetisch zijn."
                }
            },
            {
                question: {
                    en: "What happens when you rub a balloon on your hair?",
                    es: "¿Qué pasa cuando frotas un globo en tu cabello?",
                    de: "Was passiert, wenn du einen Ballon an deinen Haaren reibst?",
                    nl: "Wat gebeurt er als je een ballon over je haar wrijft?"
                },
                options: [
                    { en: "It gets static electricity", es: "Obtiene electricidad estática", de: "Es bekommt statische Elektrizität", nl: "Het krijgt statische elektriciteit" },
                    { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" },
                    { en: "It gets heavier", es: "Se vuelve más pesado", de: "Es wird schwerer", nl: "Het wordt zwaarder" },
                    { en: "It melts", es: "Se derrite", de: "Es schmilzt", nl: "Het smelt" }
                ],
                correct: 0,
                explanation: {
                    en: "When you rub a balloon on your hair, you create static electricity! The rubbing transfers tiny electric charges between your hair and the balloon. Then the balloon can attract light objects like small pieces of paper, or even make your hair stand up and follow the balloon!",
                    es: "¡Cuando frotas un globo en tu cabello, creas electricidad estática! El frotamiento transfiere cargas eléctricas diminutas entre tu cabello y el globo. ¡Entonces el globo puede atraer objetos livianos como pedacitos de papel, o incluso hacer que tu cabello se pare y siga al globo!",
                    de: "Wenn du einen Ballon an deinen Haaren reibst, erzeugst du statische Elektrizität! Das Reiben überträgt winzige elektrische Ladungen zwischen deinen Haaren und dem Ballon. Dann kann der Ballon leichte Gegenstände wie kleine Papierstückchen anziehen oder sogar deine Haare aufstehen und dem Ballon folgen lassen!",
                    nl: "Wanneer je een ballon over je haar wrijft, creëer je statische elektriciteit! Het wrijven draagt piepkleine elektrische ladingen over tussen je haar en de ballon. Dan kan de ballon lichte voorwerpen zoals kleine stukjes papier aantrekken, of zelfs je haar omhoog laten staan en de ballon laten volgen!"
                }
            },
            {
                question: {
                    en: "What makes things fall down to Earth?",
                    es: "¿Qué hace que las cosas caigan a la Tierra?",
                    de: "Was lässt Dinge zur Erde fallen?",
                    nl: "Wat laat dingen naar de aarde vallen?"
                },
                options: [
                    { en: "Gravity", es: "Gravedad", de: "Schwerkraft", nl: "Zwaartekracht" },
                    { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" },
                    { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
                    { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" }
                ],
                correct: 0,
                explanation: {
                    en: "Gravity is an invisible force that pulls everything toward Earth! It's what keeps you on the ground when you walk and makes things fall down instead of floating away. Without gravity, you would float around like astronauts do in space!",
                    es: "¡La gravedad es una fuerza invisible que atrae todo hacia la Tierra! Es lo que te mantiene en el suelo cuando caminas y hace que las cosas caigan hacia abajo en lugar de flotar. ¡Sin gravedad, flotarías como los astronautas en el espacio!",
                    de: "Schwerkraft ist eine unsichtbare Kraft, die alles zur Erde zieht! Sie ist es, die dich am Boden hält, wenn du gehst, und lässt Dinge nach unten fallen, anstatt wegzuschweben. Ohne Schwerkraft würdest du herumschweben wie Astronauten im Weltraum!",
                    nl: "Zwaartekracht is een onzichtbare kracht die alles naar de aarde trekt! Het is wat je op de grond houdt wanneer je loopt en zorgt ervoor dat dingen naar beneden vallen in plaats van weg te zweven. Zonder zwaartekracht zou je rondzweven zoals astronauten in de ruimte!"
                }
            },
            {
                question: {
                    en: "What do we call animals that eat only plants?",
                    es: "¿Cómo llamamos a los animales que solo comen plantas?",
                    de: "Wie nennen wir Tiere, die nur Pflanzen fressen?",
                    nl: "Hoe noemen we dieren die alleen planten eten?"
                },
                options: [
                    { en: "Herbivores", es: "Herbívoros", de: "Pflanzenfresser", nl: "Planteneters" },
                    { en: "Carnivores", es: "Carnívoros", de: "Fleischfresser", nl: "Vleeseters" },
                    { en: "Omnivores", es: "Omnívoros", de: "Allesfresser", nl: "Alleseters" },
                    { en: "Predators", es: "Depredadores", de: "Raubtiere", nl: "Roofdieren" }
                ],
                correct: 0,
                explanation: {
                    en: "Herbivores are animals that only eat plants! Examples include cows, rabbits, elephants, and giraffes. They have special teeth for grinding plants and long digestive systems to break down tough plant fibers. Many herbivores help plants by spreading seeds!",
                    es: "¡Los herbívoros son animales que solo comen plantas! Los ejemplos incluyen vacas, conejos, elefantes y jirafas. Tienen dientes especiales para moler plantas y sistemas digestivos largos para descomponer las fibras vegetales duras. ¡Muchos herbívoros ayudan a las plantas esparciendo semillas!",
                    de: "Pflanzenfresser sind Tiere, die nur Pflanzen fressen! Beispiele sind Kühe, Kaninchen, Elefanten und Giraffen. Sie haben besondere Zähne zum Zerkleinern von Pflanzen und lange Verdauungssysteme, um zähe Pflanzenfasern abzubauen. Viele Pflanzenfresser helfen Pflanzen, indem sie Samen verbreiten!",
                    nl: "Planteneters zijn dieren die alleen planten eten! Voorbeelden zijn koeien, konijnen, olifanten en giraffen. Ze hebben speciale tanden om planten te vermalen en lange spijsverteringssystemen om taaie plantenvezels af te breken. Veel planteneters helpen planten door zaden te verspreiden!"
                }
            },
            {
                question: {
                    en: "What do we call animals that eat only meat?",
                    es: "¿Cómo llamamos a los animales que solo comen carne?",
                    de: "Wie nennen wir Tiere, die nur Fleisch fressen?",
                    nl: "Hoe noemen we dieren die alleen vlees eten?"
                },
                options: [
                    { en: "Carnivores", es: "Carnívoros", de: "Fleischfresser", nl: "Vleeseters" },
                    { en: "Herbivores", es: "Herbívoros", de: "Pflanzenfresser", nl: "Planteneters" },
                    { en: "Omnivores", es: "Omnívoros", de: "Allesfresser", nl: "Alleseters" },
                    { en: "Vegetarians", es: "Vegetarianos", de: "Vegetarier", nl: "Vegetariërs" }
                ],
                correct: 0,
                explanation: {
                    en: "Carnivores are animals that only eat meat from other animals! Examples include lions, tigers, sharks, and eagles. They have sharp teeth for tearing meat and strong jaws for catching prey. Carnivores are important because they help control animal populations in nature.",
                    es: "¡Los carnívoros son animales que solo comen carne de otros animales! Los ejemplos incluyen leones, tigres, tiburones y águilas. Tienen dientes afilados para desgarrar carne y mandíbulas fuertes para atrapar presas. Los carnívoros son importantes porque ayudan a controlar las poblaciones de animales en la naturaleza.",
                    de: "Fleischfresser sind Tiere, die nur Fleisch von anderen Tieren fressen! Beispiele sind Löwen, Tiger, Haie und Adler. Sie haben scharfe Zähne zum Zerreißen von Fleisch und starke Kiefer zum Fangen von Beute. Fleischfresser sind wichtig, weil sie helfen, Tierpopulationen in der Natur zu kontrollieren.",
                    nl: "Vleeseters zijn dieren die alleen vlees van andere dieren eten! Voorbeelden zijn leeuwen, tijgers, haaien en adelaars. Ze hebben scherpe tanden om vlees te scheuren en sterke kaken om prooi te vangen. Vleeseters zijn belangrijk omdat ze helpen dierpopulaties in de natuur te controleren."
                }
            },
            {
                question: {
                    en: "What do we call animals that eat both plants and meat?",
                    es: "¿Cómo llamamos a los animales que comen plantas y carne?",
                    de: "Wie nennen wir Tiere, die sowohl Pflanzen als auch Fleisch fressen?",
                    nl: "Hoe noemen we dieren die zowel planten als vlees eten?"
                },
                options: [
                    { en: "Omnivores", es: "Omnívoros", de: "Allesfresser", nl: "Alleseters" },
                    { en: "Herbivores", es: "Herbívoros", de: "Pflanzenfresser", nl: "Planteneters" },
                    { en: "Carnivores", es: "Carnívoros", de: "Fleischfresser", nl: "Vleeseters" },
                    { en: "Hunters", es: "Cazadores", de: "Jäger", nl: "Jagers" }
                ],
                correct: 0,
                explanation: {
                    en: "Omnivores are animals that eat both plants and meat! Examples include humans, bears, pigs, and raccoons. Being omnivorous gives these animals more food choices, which helps them survive in different environments. Their teeth are designed for both chewing plants and tearing meat.",
                    es: "¡Los omnívoros son animales que comen plantas y carne! Los ejemplos incluyen humanos, osos, cerdos y mapaches. Ser omnívoro les da a estos animales más opciones de comida, lo que los ayuda a sobrevivir en diferentes ambientes. Sus dientes están diseñados para masticar plantas y desgarrar carne.",
                    de: "Allesfresser sind Tiere, die sowohl Pflanzen als auch Fleisch fressen! Beispiele sind Menschen, Bären, Schweine und Waschbären. Allesfresser zu sein gibt diesen Tieren mehr Nahrungsmöglichkeiten, was ihnen hilft, in verschiedenen Umgebungen zu überleben. Ihre Zähne sind sowohl zum Kauen von Pflanzen als auch zum Zerreißen von Fleisch ausgelegt.",
                    nl: "Alleseters zijn dieren die zowel planten als vlees eten! Voorbeelden zijn mensen, beren, varkens en wasberen. Alleseter zijn geeft deze dieren meer voedselkeuzes, wat hen helpt overleven in verschillende omgevingen. Hun tanden zijn ontworpen voor zowel het kauwen van planten als het scheuren van vlees."
                }
            },
            {
                question: {
                    en: "What do we call the path planets take around the sun?",
                    es: "¿Cómo llamamos al camino que toman los planetas alrededor del sol?",
                    de: "Wie nennen wir den Weg, den Planeten um die Sonne nehmen?",
                    nl: "Hoe noemen we het pad dat planeten om de zon nemen?"
                },
                options: [
                    { en: "Orbit", es: "Órbita", de: "Umlaufbahn", nl: "Baan" },
                    { en: "Circle", es: "Círculo", de: "Kreis", nl: "Cirkel" },
                    { en: "Line", es: "Línea", de: "Linie", nl: "Lijn" },
                    { en: "Square", es: "Cuadrado", de: "Quadrat", nl: "Vierkant" }
                ],
                correct: 0,
                explanation: {
                    en: "An orbit is the curved path that planets follow as they travel around the sun! Think of it like a giant invisible race track in space. Each planet has its own orbit at different distances from the sun, which is why some planets are hotter and others are colder.",
                    es: "¡Una órbita es el camino curvado que siguen los planetas mientras viajan alrededor del sol! Piénsalo como una pista de carreras gigante e invisible en el espacio. Cada planeta tiene su propia órbita a diferentes distancias del sol, por eso algunos planetas son más calientes y otros más fríos.",
                    de: "Eine Umlaufbahn ist der gekrümmte Weg, dem Planeten folgen, während sie um die Sonne reisen! Stell es dir wie eine riesige unsichtbare Rennstrecke im Weltraum vor. Jeder Planet hat seine eigene Umlaufbahn in verschiedenen Entfernungen zur Sonne, weshalb manche Planeten heißer und andere kälter sind.",
                    nl: "Een baan is het gebogen pad dat planeten volgen terwijl ze rond de zon reizen! Zie het als een gigantische onzichtbare racebaan in de ruimte. Elke planeet heeft zijn eigen baan op verschillende afstanden van de zon, daarom zijn sommige planeten heter en andere kouder."
                }
            },
            {
                question: {
                    en: "How long does it take Earth to go around the sun?",
                    es: "¿Cuánto tiempo le toma a la Tierra dar la vuelta al sol?",
                    de: "Wie lange braucht die Erde, um die Sonne zu umkreisen?",
                    nl: "Hoe lang duurt het voordat de aarde om de zon gaat?"
                },
                options: [
                    { en: "One year", es: "Un año", de: "Ein Jahr", nl: "Een jaar" },
                    { en: "One day", es: "Un día", de: "Ein Tag", nl: "Een dag" },
                    { en: "One month", es: "Un mes", de: "Ein Monat", nl: "Een maand" },
                    { en: "One week", es: "Una semana", de: "Eine Woche", nl: "Een week" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth takes exactly 365 days (one year) to complete one full trip around the sun! This journey gives us our seasons - when Earth is tilted toward the sun we get summer, and when tilted away we get winter. This is why we celebrate birthdays once a year!",
                    es: "¡La Tierra toma exactamente 365 días (un año) para completar un viaje completo alrededor del sol! Este viaje nos da nuestras estaciones - cuando la Tierra está inclinada hacia el sol tenemos verano, y cuando está inclinada hacia el lado opuesto tenemos invierno. ¡Por eso celebramos cumpleaños una vez al año!",
                    de: "Die Erde braucht genau 365 Tage (ein Jahr), um eine vollständige Reise um die Sonne zu beenden! Diese Reise gibt uns unsere Jahreszeiten - wenn die Erde zur Sonne geneigt ist, haben wir Sommer, und wenn sie weg geneigt ist, haben wir Winter. Deshalb feiern wir einmal im Jahr Geburtstag!",
                    nl: "De aarde heeft precies 365 dagen (een jaar) nodig om één volledige reis rond de zon te voltooien! Deze reis geeft ons onze seizoenen - wanneer de aarde naar de zon helt hebben we zomer, en wanneer deze weggeheld is hebben we winter. Daarom vieren we eens per jaar onze verjaardag!"
                }
            },
            {
                question: {
                    en: "How long does it take Earth to spin around once?",
                    es: "¿Cuánto tiempo le toma a la Tierra girar una vez?",
                    de: "Wie lange braucht die Erde, um sich einmal zu drehen?",
                    nl: "Hoe lang duurt het voordat de aarde één keer ronddraait?"
                },
                options: [
                    { en: "One day", es: "Un día", de: "Ein Tag", nl: "Een dag" },
                    { en: "One year", es: "Un año", de: "Ein Jahr", nl: "Een jaar" },
                    { en: "One hour", es: "Una hora", de: "Eine Stunde", nl: "Een uur" },
                    { en: "One minute", es: "Un minuto", de: "Eine Minute", nl: "Een minuut" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth spins around like a giant top, completing one full rotation in 24 hours (one day)! As Earth spins, different parts face the sun at different times. When your part of Earth faces the sun, you see daylight. When it faces away, you see nighttime and stars!",
                    es: "¡La Tierra gira como un trompo gigante, completando una rotación completa en 24 horas (un día)! Mientras la Tierra gira, diferentes partes miran hacia el sol en diferentes momentos. Cuando tu parte de la Tierra mira hacia el sol, ves luz del día. Cuando mira hacia el lado opuesto, ves la noche y las estrellas!",
                    de: "Die Erde dreht sich wie ein riesiger Kreisel und vollendet eine vollständige Drehung in 24 Stunden (ein Tag)! Während sich die Erde dreht, schauen verschiedene Teile zu verschiedenen Zeiten zur Sonne. Wenn dein Teil der Erde zur Sonne schaut, siehst du Tageslicht. Wenn er wegschaut, siehst du Nacht und Sterne!",
                    nl: "De aarde draait als een gigantische tol en voltooit één volledige rotatie in 24 uur (een dag)! Terwijl de aarde draait, kijken verschillende delen op verschillende tijden naar de zon. Wanneer jouw deel van de aarde naar de zon kijkt, zie je daglicht. Wanneer het wegkijkt, zie je nacht en sterren!"
                }
            },
            {
                question: {
                    en: "What causes day and night?",
                    es: "¿Qué causa el día y la noche?",
                    de: "Was verursacht Tag und Nacht?",
                    nl: "Wat veroorzaakt dag en nacht?"
                },
                options: [
                    { en: "Earth spinning", es: "La Tierra girando", de: "Die Erde dreht sich", nl: "De aarde draait" },
                    { en: "The sun moving", es: "El sol moviéndose", de: "Die Sonne bewegt sich", nl: "De zon beweegt" },
                    { en: "Clouds covering the sun", es: "Nubes cubriendo el sol", de: "Wolken bedecken die Sonne", nl: "Wolken bedekken de zon" },
                    { en: "The moon blocking light", es: "La luna bloqueando la luz", de: "Der Mond blockiert das Licht", nl: "De maan blokkeert licht" }
                ],
                correct: 0,
                explanation: {
                    en: "Day and night happen because Earth is constantly spinning! The sun doesn't actually move around Earth - Earth rotates on its axis. When your side of Earth faces the sun, it's daytime. When Earth spins so your side faces away from the sun, it becomes nighttime. Cool!",
                    es: "¡El día y la noche ocurren porque la Tierra está girando constantemente! El sol realmente no se mueve alrededor de la Tierra - la Tierra rota en su eje. Cuando tu lado de la Tierra mira hacia el sol, es de día. Cuando la Tierra gira para que tu lado mire hacia el lado opuesto del sol, se vuelve de noche. ¡Genial!",
                    de: "Tag und Nacht entstehen, weil sich die Erde ständig dreht! Die Sonne bewegt sich eigentlich nicht um die Erde - die Erde rotiert um ihre Achse. Wenn deine Seite der Erde zur Sonne schaut, ist es Tag. Wenn sich die Erde so dreht, dass deine Seite von der Sonne wegschaut, wird es Nacht. Cool!",
                    nl: "Dag en nacht gebeuren omdat de aarde constant draait! De zon beweegt eigenlijk niet rond de aarde - de aarde roteert om zijn as. Wanneer jouw kant van de aarde naar de zon kijkt, is het dag. Wanneer de aarde draait zodat jouw kant van de zon wegkijkt, wordt het nacht. Gaaf!"
                }
            },
            {
                question: {
                    en: "What do clouds bring us?",
                    es: "¿Qué nos traen las nubes?",
                    de: "Was bringen uns Wolken?",
                    nl: "Wat brengen wolken ons?"
                },
                options: [
                    { en: "Rain", es: "Lluvia", de: "Regen", nl: "Regen" },
                    { en: "Food", es: "Comida", de: "Essen", nl: "Voedsel" },
                    { en: "Toys", es: "Juguetes", de: "Spielzeug", nl: "Speelgoed" },
                    { en: "Books", es: "Libros", de: "Bücher", nl: "Boeken" }
                ],
                correct: 0,
                explanation: {
                    en: "Clouds are like nature's water storage tanks in the sky! They form when water evaporates from oceans, lakes, and rivers, rises up, and condenses into tiny water droplets. When these droplets get heavy enough, they fall as rain to water plants and fill rivers.",
                    es: "¡Las nubes son como tanques de almacenamiento de agua de la naturaleza en el cielo! Se forman cuando el agua se evapora de océanos, lagos y ríos, sube y se condensa en gotitas de agua diminutas. Cuando estas gotitas se vuelven lo suficientemente pesadas, caen como lluvia para regar las plantas y llenar los ríos.",
                    de: "Wolken sind wie Wasserspeichertanks der Natur am Himmel! Sie entstehen, wenn Wasser aus Ozeanen, Seen und Flüssen verdunstet, aufsteigt und zu winzigen Wassertropfen kondensiert. Wenn diese Tropfen schwer genug werden, fallen sie als Regen, um Pflanzen zu bewässern und Flüsse zu füllen.",
                    nl: "Wolken zijn als de wateropslagtanks van de natuur in de lucht! Ze vormen zich wanneer water verdampt uit oceanen, meren en rivieren, opstijgt en condenseert tot piepkleine waterdruppeltjes. Wanneer deze druppeltjes zwaar genoeg worden, vallen ze als regen om planten water te geven en rivieren te vullen."
                }
            },
            {
                question: {
                    en: "What happens to water when it evaporates?",
                    es: "¿Qué pasa con el agua cuando se evapora?",
                    de: "Was passiert mit Wasser, wenn es verdunstet?",
                    nl: "Wat gebeurt er met water als het verdampt?"
                },
                options: [
                    { en: "It becomes invisible gas", es: "Se convierte en gas invisible", de: "Es wird zu unsichtbarem Gas", nl: "Het wordt onzichtbaar gas" },
                    { en: "It disappears forever", es: "Desaparece para siempre", de: "Es verschwindet für immer", nl: "Het verdwijnt voor altijd" },
                    { en: "It turns into ice", es: "Se convierte en hielo", de: "Es wird zu Eis", nl: "Het wordt ijs" },
                    { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" }
                ],
                correct: 0,
                explanation: {
                    en: "When water evaporates, it becomes water vapor - an invisible gas that mixes with the air! The water doesn't disappear; it just changes from liquid to gas. You can see this when puddles dry up after rain, or when you see steam from a hot cup of cocoa.",
                    es: "Cuando el agua se evapora, se convierte en vapor de agua: ¡un gas invisible que se mezcla con el aire! El agua no desaparece; solo cambia de líquido a gas. Puedes ver esto cuando los charcos se secan después de la lluvia, o cuando ves vapor de una taza caliente de cacao.",
                    de: "Wenn Wasser verdunstet, wird es zu Wasserdampf - einem unsichtbaren Gas, das sich mit der Luft vermischt! Das Wasser verschwindet nicht; es ändert sich nur von flüssig zu gasförmig. Du kannst das sehen, wenn Pfützen nach dem Regen trocknen oder wenn du Dampf von einer heißen Tasse Kakao siehst.",
                    nl: "Wanneer water verdampt, wordt het waterdamp - een onzichtbaar gas dat zich mengt met de lucht! Het water verdwijnt niet; het verandert alleen van vloeistof naar gas. Je kunt dit zien wanneer plassen opdrogen na regen, of wanneer je stoom ziet van een warme beker chocolademelk."
                }
            },
            {
                question: {
                    en: "What do we call baby cats?",
                    es: "¿Cómo llamamos a los gatos bebé?",
                    de: "Wie nennen wir Babykatzen?",
                    nl: "Hoe noemen we baby katten?"
                },
                options: [
                    { en: "Kittens", es: "Gatitos", de: "Kätzchen", nl: "Kittens" },
                    { en: "Puppies", es: "Cachorros", de: "Welpen", nl: "Puppy's" },
                    { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" },
                    { en: "Cubs", es: "Cachorros", de: "Junge", nl: "Welpen" }
                ],
                correct: 0,
                explanation: {
                    en: "Baby cats are called kittens! Kittens are born blind and deaf, and they depend on their mother's milk for the first few weeks of life. They learn important skills like hunting and social behavior by playing with their siblings. Kittens can start purring when they're just a few days old!",
                    es: "¡Los gatos bebé se llaman gatitos! Los gatitos nacen ciegos y sordos, y dependen de la leche de su madre durante las primeras semanas de vida. Aprenden habilidades importantes como cazar y comportamiento social jugando con sus hermanos. ¡Los gatitos pueden empezar a ronronear cuando tienen solo unos días de edad!",
                    de: "Babykatzen heißen Kätzchen! Kätzchen werden blind und taub geboren und sind in den ersten Lebenswochen auf die Muttermilch angewiesen. Sie lernen wichtige Fähigkeiten wie Jagen und Sozialverhalten durch das Spielen mit ihren Geschwistern. Kätzchen können schon mit wenigen Tagen schnurren!",
                    nl: "Babykatten worden kittens genoemd! Kittens worden blind en doof geboren en zijn de eerste weken van hun leven afhankelijk van hun moeder's melk. Ze leren belangrijke vaardigheden zoals jagen en sociaal gedrag door te spelen met hun broertjes en zusjes. Kittens kunnen al gaan spinnen wanneer ze slechts een paar dagen oud zijn!"
                }
            },
            {
                question: {
                    en: "What do we call baby dogs?",
                    es: "¿Cómo llamamos a los perros bebé?",
                    de: "Wie nennen wir Babyhunde?",
                    nl: "Hoe noemen we baby honden?"
                },
                options: [
                    { en: "Puppies", es: "Cachorros", de: "Welpen", nl: "Puppy's" },
                    { en: "Kittens", es: "Gatitos", de: "Kätzchen", nl: "Kittens" },
                    { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" },
                    { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" }
                ],
                correct: 0,
                explanation: {
                    en: "Baby dogs are called puppies! Puppies are born after about 2 months in their mother's womb. Like human babies, they can't see or hear when they're first born, but they develop these senses quickly. Puppies learn by playing and exploring, and they love to chew on things!",
                    es: "¡Los perros bebé se llaman cachorros! Los cachorros nacen después de unos 2 meses en el vientre de su madre. Como los bebés humanos, no pueden ver ni oír cuando nacen, pero desarrollan estos sentidos rápidamente. ¡Los cachorros aprenden jugando y explorando, y les encanta masticar cosas!",
                    de: "Babyhunde heißen Welpen! Welpen werden nach etwa 2 Monaten im Mutterleib geboren. Wie Menschenbabys können sie bei der Geburt nicht sehen oder hören, aber sie entwickeln diese Sinne schnell. Welpen lernen durch Spielen und Erkunden, und sie kauen gerne auf Sachen herum!",
                    nl: "Babyhonden worden puppy's genoemd! Puppy's worden geboren na ongeveer 2 maanden in hun moeder's buik. Net als mensenbaby's kunnen ze niet zien of horen wanneer ze net geboren zijn, maar ze ontwikkelen deze zintuigen snel. Puppy's leren door te spelen en te verkennen, en ze houden ervan om op dingen te kauwen!"
                }
            },
            {
                question: {
                    en: "What do we call baby chickens?",
                    es: "¿Cómo llamamos a los pollos bebé?",
                    de: "Wie nennen wir Babyhühner?",
                    nl: "Hoe noemen we baby kippen?"
                },
                options: [
                    { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" },
                    { en: "Puppies", es: "Cachorros", de: "Welpen", nl: "Puppy's" },
                    { en: "Kittens", es: "Gatitos", de: "Kätzchen", nl: "Kittens" },
                    { en: "Ducklings", es: "Patitos", de: "Entenküken", nl: "Eendjes" }
                ],
                correct: 0,
                explanation: {
                    en: "Baby chickens are called chicks! Chicks hatch from eggs after about 21 days. They're covered in soft, fluffy feathers called down that keeps them warm. Chicks can walk and find food just hours after hatching - they're much more independent than baby mammals!",
                    es: "¡Los pollos bebé se llaman pollitos! Los pollitos salen del cascarón después de unos 21 días. Están cubiertos de plumas suaves y esponjosas llamadas plumón que los mantiene calientes. ¡Los pollitos pueden caminar y encontrar comida solo horas después de nacer - son mucho más independientes que los bebés mamíferos!",
                    de: "Babyhühner heißen Küken! Küken schlüpfen nach etwa 21 Tagen aus Eiern. Sie sind mit weichen, flauschigen Federn bedeckt, die Daunen genannt werden und sie warm halten. Küken können nur Stunden nach dem Schlüpfen laufen und Futter finden - sie sind viel unabhängiger als Säugetierbabys!",
                    nl: "Babykippen worden kuikens genoemd! Kuikens komen uit eieren na ongeveer 21 dagen. Ze zijn bedekt met zachte, pluizige veren genaamd dons die hen warm houdt. Kuikens kunnen lopen en voedsel vinden slechts uren na het uitkomen - ze zijn veel onafhankelijker dan baby zoogdieren!"
                }
            },
            {
                question: {
                    en: "What do bees make?",
                    es: "¿Qué hacen las abejas?",
                    de: "Was machen Bienen?",
                    nl: "Wat maken bijen?"
                },
                options: [
                    { en: "Honey", es: "Miel", de: "Honig", nl: "Honing" },
                    { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
                    { en: "Eggs", es: "Huevos", de: "Eier", nl: "Eieren" },
                    { en: "Bread", es: "Pan", de: "Brot", nl: "Brood" }
                ],
                correct: 0,
                explanation: {
                    en: "Bees make honey by collecting nectar from flowers! They store the nectar in their special honey stomach, then bring it back to the hive. Inside the hive, bees work together to turn the nectar into honey by removing water and adding enzymes. One bee makes only about 1/12 of a teaspoon of honey in her whole life!",
                    es: "¡Las abejas hacen miel recolectando néctar de las flores! Almacenan el néctar en su estómago especial de miel, luego lo llevan de vuelta a la colmena. Dentro de la colmena, las abejas trabajan juntas para convertir el néctar en miel quitando agua y añadiendo enzimas. ¡Una abeja hace solo alrededor de 1/12 de cucharadita de miel en toda su vida!",
                    de: "Bienen machen Honig, indem sie Nektar von Blumen sammeln! Sie speichern den Nektar in ihrem speziellen Honigmagen und bringen ihn dann zurück zum Bienenstock. Im Bienenstock arbeiten Bienen zusammen, um den Nektar in Honig zu verwandeln, indem sie Wasser entfernen und Enzyme hinzufügen. Eine Biene macht nur etwa 1/12 Teelöffel Honig in ihrem ganzen Leben!",
                    nl: "Bijen maken honing door nectar van bloemen te verzamelen! Ze slaan de nectar op in hun speciale honingmaag en brengen het dan terug naar de korf. Binnen de korf werken bijen samen om de nectar in honing te veranderen door water te verwijderen en enzymen toe te voegen. Eén bij maakt slechts ongeveer 1/12 van een theelepel honing in haar hele leven!"
                }
            },
            {
                question: {
                    en: "What do we need to make a shadow?",
                    es: "¿Qué necesitamos para hacer una sombra?",
                    de: "Was brauchen wir, um einen Schatten zu machen?",
                    nl: "Wat hebben we nodig om een schaduw te maken?"
                },
                options: [
                    { en: "Light and an object", es: "Luz y un objeto", de: "Licht und einen Gegenstand", nl: "Licht en een voorwerp" },
                    { en: "Only light", es: "Solo luz", de: "Nur Licht", nl: "Alleen licht" },
                    { en: "Only darkness", es: "Solo oscuridad", de: "Nur Dunkelheit", nl: "Alleen duisternis" },
                    { en: "Water and air", es: "Agua y aire", de: "Wasser und Luft", nl: "Water en lucht" }
                ],
                correct: 0,
                explanation: {
                    en: "To make a shadow, you need a light source (like the sun or a lamp) and an object to block the light! When light hits an object that it can't pass through, it creates a dark area behind the object called a shadow. You can make fun shadow puppets with your hands!",
                    es: "Para hacer una sombra, necesitas una fuente de luz (como el sol o una lámpara) y un objeto que bloquee la luz! Cuando la luz golpea un objeto por el que no puede pasar, crea un área oscura detrás del objeto llamada sombra. ¡Puedes hacer títeres de sombras divertidos con tus manos!",
                    de: "Um einen Schatten zu machen, brauchst du eine Lichtquelle (wie die Sonne oder eine Lampe) und einen Gegenstand, der das Licht blockiert! Wenn Licht auf einen Gegenstand trifft, durch den es nicht hindurchgehen kann, entsteht dahinter ein dunkler Bereich, der Schatten genannt wird. Du kannst lustige Schattenpuppen mit deinen Händen machen!",
                    nl: "Om een schaduw te maken, heb je een lichtbron nodig (zoals de zon of een lamp) en een voorwerp om het licht te blokkeren! Wanneer licht een voorwerp raakt waar het niet doorheen kan, creëert het een donker gebied achter het voorwerp dat een schaduw wordt genoemd. Je kunt leuke schaduwpoppen maken met je handen!"
                }
            },
            {
                question: {
                    en: "What color do you get when you mix red and blue?",
                    es: "¿Qué color obtienes cuando mezclas rojo y azul?",
                    de: "Welche Farbe bekommst du, wenn du Rot und Blau mischst?",
                    nl: "Welke kleur krijg je als je rood en blauw mengt?"
                },
                options: [
                    { en: "Purple", es: "Púrpura", de: "Lila", nl: "Paars" },
                    { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
                    { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" },
                    { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" }
                ],
                correct: 0,
                explanation: {
                    en: "When you mix red and blue, you get purple! This is because red and blue are primary colors, and when they combine, they create a secondary color. Purple has been considered a royal color throughout history because purple dye was once very expensive to make!",
                    es: "Cuando mezclas rojo y azul, obtienes púrpura! Esto es porque rojo y azul son colores primarios, y cuando se combinan, crean un color secundario. ¡El púrpura ha sido considerado un color real a lo largo de la historia porque el tinte púrpura una vez fue muy caro de hacer!",
                    de: "Wenn du Rot und Blau mischst, bekommst du Lila! Das liegt daran, dass Rot und Blau Primärfarben sind, und wenn sie sich verbinden, entsteht eine Sekundärfarbe. Lila galt in der Geschichte als königliche Farbe, weil lila Farbstoff einst sehr teuer herzustellen war!",
                    nl: "Wanneer je rood en blauw mengt, krijg je paars! Dit komt omdat rood en blauw primaire kleuren zijn, en wanneer ze combineren, creëren ze een secundaire kleur. Paars werd door de geschiedenis heen beschouwd als een koninklijke kleur omdat paarse verf ooit erg duur was om te maken!"
                }
            },
            {
                question: {
                    en: "What color do you get when you mix yellow and blue?",
                    es: "¿Qué color obtienes cuando mezclas amarillo y azul?",
                    de: "Welche Farbe bekommst du, wenn du Gelb und Blau mischst?",
                    nl: "Welke kleur krijg je als je geel en blauw mengt?"
                },
                options: [
                    { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
                    { en: "Purple", es: "Púrpura", de: "Lila", nl: "Paars" },
                    { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
                    { en: "Pink", es: "Rosa", de: "Rosa", nl: "Roze" }
                ],
                correct: 0,
                explanation: {
                    en: "When you mix yellow and blue, you get green! Green is everywhere in nature - it's the color of grass, leaves, and many plants. This happens because plants have chlorophyll, which reflects green light to our eyes while absorbing other colors for photosynthesis.",
                    es: "Cuando mezclas amarillo y azul, obtienes verde! El verde está en todas partes en la naturaleza: es el color del pasto, las hojas y muchas plantas. Esto sucede porque las plantas tienen clorofila, que refleja luz verde a nuestros ojos mientras absorbe otros colores para la fotosíntesis.",
                    de: "Wenn du Gelb und Blau mischst, bekommst du Grün! Grün ist überall in der Natur - es ist die Farbe von Gras, Blättern und vielen Pflanzen. Das passiert, weil Pflanzen Chlorophyll haben, das grünes Licht zu unseren Augen reflektiert, während es andere Farben für die Photosynthese absorbiert.",
                    nl: "Wanneer je geel en blauw mengt, krijg je groen! Groen is overal in de natuur - het is de kleur van gras, bladeren en veel planten. Dit gebeurt omdat planten chlorofyl hebben, dat groen licht weerkaatst naar onze ogen terwijl het andere kleuren absorbeert voor fotosynthese."
                }
            },
            {
                question: {
                    en: "What color do you get when you mix red and yellow?",
                    es: "¿Qué color obtienes cuando mezclas rojo y amarillo?",
                    de: "Welche Farbe bekommst du, wenn du Rot und Gelb mischst?",
                    nl: "Welke kleur krijg je als je rood en geel mengt?"
                },
                options: [
                    { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
                    { en: "Purple", es: "Púrpura", de: "Lila", nl: "Paars" },
                    { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
                    { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" }
                ],
                correct: 0,
                explanation: {
                    en: "When you mix red and yellow, you get orange! Orange is a warm, energetic color that we see in sunsets, autumn leaves, carrots, and oranges (the fruit that gave the color its name!). Orange makes people feel happy and excited because it reminds us of sunshine and warmth.",
                    es: "Cuando mezclas rojo y amarillo, obtienes naranja! El naranja es un color cálido y energético que vemos en atardeceres, hojas de otoño, zanahorias y naranjas (¡la fruta que le dio su nombre al color!). El naranja hace que las personas se sientan felices y emocionadas porque nos recuerda el sol y el calor.",
                    de: "Wenn du Rot und Gelb mischst, bekommst du Orange! Orange ist eine warme, energetische Farbe, die wir in Sonnenuntergängen, Herbstblättern, Karotten und Orangen sehen (die Frucht, die der Farbe ihren Namen gab!). Orange macht Menschen glücklich und aufgeregt, weil es uns an Sonnenschein und Wärme erinnert.",
                    nl: "Wanneer je rood en geel mengt, krijg je oranje! Oranje is een warme, energieke kleur die we zien in zonsondergangen, herfstbladeren, wortels en sinaasappels (de vrucht die de kleur zijn naam gaf!). Oranje maakt mensen blij en opgewonden omdat het ons doet denken aan zonneschijn en warmte."
                }
            },
            {
                question: {
                    en: "What do we call the process when a caterpillar becomes a butterfly?",
                    es: "¿Cómo llamamos al proceso cuando una oruga se convierte en mariposa?",
                    de: "Wie nennen wir den Prozess, wenn eine Raupe zum Schmetterling wird?",
                    nl: "Hoe noemen we het proces waarbij een rups een vlinder wordt?"
                },
                options: [
                    { en: "Metamorphosis", es: "Metamorfosis", de: "Metamorphose", nl: "Metamorfose" },
                    { en: "Evolution", es: "Evolución", de: "Evolution", nl: "Evolutie" },
                    { en: "Growing", es: "Crecimiento", de: "Wachstum", nl: "Groeien" },
                    { en: "Changing", es: "Cambio", de: "Veränderung", nl: "Veranderen" }
                ],
                correct: 0,
                explanation: {
                    en: "Metamorphosis is the amazing process where a caterpillar completely transforms into a butterfly! The caterpillar forms a chrysalis (like a protective shell), and inside its body completely changes. This incredible transformation takes about 10-15 days. Many insects go through metamorphosis!",
                    es: "¡La metamorfosis es el proceso increíble donde una oruga se transforma completamente en una mariposa! La oruga forma una crisálida (como una cáscara protectora), y adentro su cuerpo cambia completamente. Esta transformación increíble toma unos 10-15 días. ¡Muchos insectos pasan por metamorfosis!",
                    de: "Metamorphose ist der erstaunliche Prozess, bei dem sich eine Raupe vollständig in einen Schmetterling verwandelt! Die Raupe bildet eine Puppe (wie eine Schutzhülle), und darin verändert sich ihr Körper vollständig. Diese unglaubliche Verwandlung dauert etwa 10-15 Tage. Viele Insekten durchlaufen eine Metamorphose!",
                    nl: "Metamorfose is het geweldige proces waarbij een rups compleet verandert in een vlinder! De rups vormt een pop (als een beschermende schaal), en binnenin verandert zijn lichaam volledig. Deze ongelooflijke transformatie duurt ongeveer 10-15 dagen. Veel insecten ondergaan metamorfose!"
                }
            },
            {
                question: {
                    en: "What is the hardest natural substance?",
                    es: "¿Cuál es la sustancia natural más dura?",
                    de: "Was ist die härteste natürliche Substanz?",
                    nl: "Wat is de hardste natuurlijke stof?"
                },
                options: [
                    { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
                    { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" },
                    { en: "Silver", es: "Plata", de: "Silber", nl: "Zilver" },
                    { en: "Iron", es: "Hierro", de: "Eisen", nl: "IJzer" }
                ],
                correct: 0,
                explanation: {
                    en: "Diamond is the hardest natural substance on Earth! It's made of carbon atoms arranged in a special crystal structure deep underground under extreme pressure and heat. Diamonds are so hard they can only be cut by other diamonds. They're used in jewelry and also in tools for cutting and drilling!",
                    es: "¡El diamante es la sustancia natural más dura de la Tierra! Está hecho de átomos de carbono organizados en una estructura cristalina especial en las profundidades bajo presión y calor extremos. Los diamantes son tan duros que solo pueden ser cortados por otros diamantes. ¡Se usan en joyería y también en herramientas para cortar y perforar!",
                    de: "Diamant ist die härteste natürliche Substanz auf der Erde! Er besteht aus Kohlenstoffatomen, die in einer speziellen Kristallstruktur tief unter der Erde unter extremem Druck und Hitze angeordnet sind. Diamanten sind so hart, dass sie nur von anderen Diamanten geschnitten werden können. Sie werden in Schmuck und auch in Werkzeugen zum Schneiden und Bohren verwendet!",
                    nl: "Diamant is de hardste natuurlijke stof op aarde! Het is gemaakt van koolstofatomen die zijn gerangschikt in een speciale kristalstructuur diep ondergronds onder extreme druk en hitte. Diamanten zijn zo hard dat ze alleen door andere diamanten gesneden kunnen worden. Ze worden gebruikt in sieraden en ook in gereedschap voor snijden en boren!"
                }
            },
            {
                question: {
                    en: "What gas do plants give off that we breathe?",
                    es: "¿Qué gas desprenden las plantas que respiramos?",
                    de: "Welches Gas geben Pflanzen ab, das wir atmen?",
                    nl: "Welk gas geven planten af dat we inademen?"
                },
                options: [
                    { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
                    { en: "Carbon dioxide", es: "Dióxido de carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
                    { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
                    { en: "Hydrogen", es: "Hidrógeno", de: "Wasserstoff", nl: "Waterstof" }
                ],
                correct: 0,
                explanation: {
                    en: "Plants give off oxygen, which is the gas we need to breathe! During photosynthesis, plants take in carbon dioxide and sunlight to make their food, and oxygen is released as a bonus. This is why forests are called the 'lungs of the Earth' - they help keep our air fresh and breathable!",
                    es: "¡Las plantas liberan oxígeno, que es el gas que necesitamos para respirar! Durante la fotosíntesis, las plantas absorben dióxido de carbono y luz solar para hacer su comida, y el oxígeno se libera como un extra. Por eso los bosques se llaman los 'pulmones de la Tierra': ¡ayudan a mantener nuestro aire fresco y respirable!",
                    de: "Pflanzen geben Sauerstoff ab, das Gas, das wir zum Atmen brauchen! Während der Photosynthese nehmen Pflanzen Kohlendioxid und Sonnenlicht auf, um ihre Nahrung zu produzieren, und Sauerstoff wird als Bonus freigesetzt. Deshalb werden Wälder die 'Lungen der Erde' genannt - sie helfen, unsere Luft frisch und atembar zu halten!",
                    nl: "Planten geven zuurstof af, het gas dat we nodig hebben om te ademen! Tijdens fotosynthese nemen planten koolstofdioxide en zonlicht op om hun voedsel te maken, en zuurstof wordt vrijgegeven als bonus. Daarom worden bossen de 'longen van de aarde' genoemd - ze helpen onze lucht fris en adembaar te houden!"
                }
            },
            {
                question: {
                    en: "What makes sound travel?",
                    es: "¿Qué hace que el sonido viaje?",
                    de: "Was lässt Schall reisen?",
                    nl: "Wat laat geluid reizen?"
                },
                options: [
                    { en: "Vibrations in the air", es: "Vibraciones en el aire", de: "Schwingungen in der Luft", nl: "Trillingen in de lucht" },
                    { en: "Light waves", es: "Ondas de luz", de: "Lichtwellen", nl: "Lichtgolven" },
                    { en: "Heat waves", es: "Ondas de calor", de: "Hitzewellen", nl: "Hittegolven" },
                    { en: "Electric currents", es: "Corrientes eléctricas", de: "Elektrische Ströme", nl: "Elektrische stromen" }
                ],
                correct: 0,
                explanation: {
                    en: "Sound travels through vibrations in the air! When something makes a sound, it causes tiny air molecules to vibrate back and forth. These vibrations travel through the air like invisible waves until they reach your ears. Sound can also travel through water and solid objects!",
                    es: "¡El sonido viaja a través de vibraciones en el aire! Cuando algo hace un sonido, causa que las moléculas de aire diminutas vibren hacia adelante y hacia atrás. Estas vibraciones viajan por el aire como ondas invisibles hasta que llegan a tus oídos. ¡El sonido también puede viajar a través del agua y objetos sólidos!",
                    de: "Schall reist durch Schwingungen in der Luft! Wenn etwas einen Ton macht, bringt es winzige Luftmoleküle dazu, hin und her zu schwingen. Diese Schwingungen reisen durch die Luft wie unsichtbare Wellen, bis sie deine Ohren erreichen. Schall kann auch durch Wasser und feste Gegenstände reisen!",
                    nl: "Geluid reist door trillingen in de lucht! Wanneer iets een geluid maakt, veroorzaakt het dat piepkleine luchtmoleculen heen en weer trillen. Deze trillingen reizen door de lucht als onzichtbare golven totdat ze je oren bereiken. Geluid kan ook reizen door water en vaste voorwerpen!"
                }
            },
            {
                question: {
                    en: "What do we call scientists who study rocks?",
                    es: "¿Cómo llamamos a los científicos que estudian rocas?",
                    de: "Wie nennen wir Wissenschaftler, die Gesteine studieren?",
                    nl: "Hoe noemen we wetenschappers die rotsen bestuderen?"
                },
                options: [
                    { en: "Geologists", es: "Geólogos", de: "Geologen", nl: "Geologen" },
                    { en: "Biologists", es: "Biólogos", de: "Biologen", nl: "Biologen" },
                    { en: "Chemists", es: "Químicos", de: "Chemiker", nl: "Scheikundigen" },
                    { en: "Astronomers", es: "Astrónomos", de: "Astronomen", nl: "Astronomen" }
                ],
                correct: 0,
                explanation: {
                    en: "Geologists are scientists who study rocks, minerals, and the Earth's layers! They learn about how mountains formed, when volcanoes erupted, and what the Earth was like millions of years ago. Geologists help us find valuable minerals and understand earthquakes and other Earth processes.",
                    es: "¡Los geólogos son científicos que estudian rocas, minerales y las capas de la Tierra! Aprenden sobre cómo se formaron las montañas, cuándo hicieron erupción los volcanes, y cómo era la Tierra hace millones de años. Los geólogos nos ayudan a encontrar minerales valiosos y entender terremotos y otros procesos de la Tierra.",
                    de: "Geologen sind Wissenschaftler, die Gesteine, Mineralien und die Erdschichten studieren! Sie lernen darüber, wie Berge entstanden sind, wann Vulkane ausbrachen und wie die Erde vor Millionen von Jahren aussah. Geologen helfen uns, wertvolle Mineralien zu finden und Erdbeben und andere Erdprozesse zu verstehen.",
                    nl: "Geologen zijn wetenschappers die rotsen, mineralen en de lagen van de aarde bestuderen! Ze leren over hoe bergen zich vormden, wanneer vulkanen uitbarstingen hadden, en hoe de aarde er miljoenen jaren geleden uitzag. Geologen helpen ons waardevolle mineralen te vinden en aardbevingen en andere aardprocessen te begrijpen."
                }
            },
            {
                question: {
                    en: "What do we call the study of living things?",
                    es: "¿Cómo llamamos al estudio de los seres vivos?",
                    de: "Wie nennen wir das Studium lebender Dinge?",
                    nl: "Hoe noemen we de studie van levende dingen?"
                },
                options: [
                    { en: "Biology", es: "Biología", de: "Biologie", nl: "Biologie" },
                    { en: "Chemistry", es: "Química", de: "Chemie", nl: "Scheikunde" },
                    { en: "Physics", es: "Física", de: "Physik", nl: "Natuurkunde" },
                    { en: "Geography", es: "Geografía", de: "Geographie", nl: "Aardrijkskunde" }
                ],
                correct: 0,
                explanation: {
                    en: "Biology is the study of living things! Biologists learn about plants, animals, bacteria, and all other living creatures. They study how living things grow, how they get their energy, how they reproduce, and how they interact with each other. Biology helps us understand life on Earth and how to take better care of all living things.",
                    es: "¡La biología es el estudio de los seres vivos! Los biólogos aprenden sobre plantas, animales, bacterias y todas las otras criaturas vivientes. Estudian cómo crecen los seres vivos, cómo obtienen su energía, cómo se reproducen y cómo interactúan entre sí. La biología nos ayuda a entender la vida en la Tierra y cómo cuidar mejor a todos los seres vivos.",
                    de: "Biologie ist das Studium lebender Dinge! Biologen lernen über Pflanzen, Tiere, Bakterien und alle anderen lebenden Kreaturen. Sie studieren, wie lebende Dinge wachsen, wie sie ihre Energie bekommen, wie sie sich fortpflanzen und wie sie miteinander interagieren. Biologie hilft uns, das Leben auf der Erde zu verstehen und besser für alle lebenden Dinge zu sorgen.",
                    nl: "Biologie is de studie van levende dingen! Biologen leren over planten, dieren, bacteriën en alle andere levende wezens. Ze bestuderen hoe levende dingen groeien, hoe ze hun energie krijgen, hoe ze zich voortplanten en hoe ze met elkaar omgaan. Biologie helpt ons het leven op aarde te begrijpen en beter voor alle levende dingen te zorgen."
                }
            },
            {
                question: {
                    en: "What happens when you mix red and yellow paint?",
                    es: "¿Qué pasa cuando mezclas pintura roja y amarilla?",
                    de: "Was passiert, wenn du rote und gelbe Farbe mischst?",
                    nl: "Wat gebeurt er als je rode en gele verf mengt?"
                },
                options: [
                    { en: "You get orange", es: "Obtienes naranja", de: "Du bekommst Orange", nl: "Je krijgt oranje" },
                    { en: "You get purple", es: "Obtienes morado", de: "Du bekommst Lila", nl: "Je krijgt paars" },
                    { en: "You get green", es: "Obtienes verde", de: "Du bekommst Grün", nl: "Je krijgt groen" },
                    { en: "You get brown", es: "Obtienes café", de: "Du bekommst Braun", nl: "Je krijgt bruin" }
                ],
                correct: 0,
                explanation: {
                    en: "When you mix red and yellow paint, you get orange! This is because colors can combine to make new colors. Red, yellow, and blue are called primary colors because you can't make them by mixing other colors. When you mix primary colors together, you get secondary colors like orange, green, and purple. Color mixing is both science and art!",
                    es: "¡Cuando mezclas pintura roja y amarilla, obtienes naranja! Esto es porque los colores pueden combinarse para hacer colores nuevos. Rojo, amarillo y azul se llaman colores primarios porque no puedes hacerlos mezclando otros colores. Cuando mezclas colores primarios juntos, obtienes colores secundarios como naranja, verde y morado. ¡Mezclar colores es tanto ciencia como arte!",
                    de: "Wenn du rote und gelbe Farbe mischst, bekommst du Orange! Das ist, weil sich Farben kombinieren können, um neue Farben zu machen. Rot, Gelb und Blau werden Grundfarben genannt, weil du sie nicht durch Mischen anderer Farben machen kannst. Wenn du Grundfarben zusammen mischst, bekommst du Sekundärfarben wie Orange, Grün und Lila. Farbenmischen ist sowohl Wissenschaft als auch Kunst!",
                    nl: "Als je rode en gele verf mengt, krijg je oranje! Dit is omdat kleuren kunnen combineren om nieuwe kleuren te maken. Rood, geel en blauw worden primaire kleuren genoemd omdat je ze niet kunt maken door andere kleuren te mengen. Wanneer je primaire kleuren samen mengt, krijg je secundaire kleuren zoals oranje, groen en paars. Kleuren mengen is zowel wetenschap als kunst!"
                }
            },
            {
                question: {
                    en: "Why is science important?",
                    es: "¿Por qué es importante la ciencia?",
                    de: "Warum ist Wissenschaft wichtig?",
                    nl: "Waarom is wetenschap belangrijk?"
                },
                options: [
                    { en: "It helps us understand the world", es: "Nos ayuda a entender el mundo", de: "Es hilft uns, die Welt zu verstehen", nl: "Het helpt ons de wereld te begrijpen" },
                    { en: "It's boring", es: "Es aburrido", de: "Es ist langweilig", nl: "Het is saai" },
                    { en: "It's too hard", es: "Es muy difícil", de: "Es ist zu schwer", nl: "Het is te moeilijk" },
                    { en: "It's only for adults", es: "Es solo para adultos", de: "Es ist nur für Erwachsene", nl: "Het is alleen voor volwassenen" }
                ],
                correct: 0,
                explanation: {
                    en: "Science is important because it helps us understand how everything in the world works! From why the sky is blue to how our bodies heal, science gives us answers. Science also helps us create medicines, build safer buildings, protect the environment, and explore space. Every day, science makes life better!",
                    es: "¡La ciencia es importante porque nos ayuda a entender cómo funciona todo en el mundo! Desde por qué el cielo es azul hasta cómo sanan nuestros cuerpos, la ciencia nos da respuestas. La ciencia también nos ayuda a crear medicinas, construir edificios más seguros, proteger el medio ambiente y explorar el espacio. ¡Todos los días, la ciencia hace la vida mejor!",
                    de: "Wissenschaft ist wichtig, weil sie uns hilft zu verstehen, wie alles in der Welt funktioniert! Von dem, warum der Himmel blau ist, bis hin dazu, wie unsere Körper heilen, gibt uns die Wissenschaft Antworten. Wissenschaft hilft uns auch, Medikamente zu entwickeln, sicherere Gebäude zu bauen, die Umwelt zu schützen und den Weltraum zu erforschen. Jeden Tag macht Wissenschaft das Leben besser!",
                    nl: "Wetenschap is belangrijk omdat het ons helpt begrijpen hoe alles in de wereld werkt! Van waarom de lucht blauw is tot hoe onze lichamen genezen, wetenschap geeft ons antwoorden. Wetenschap helpt ons ook medicijnen maken, veiligere gebouwen bouwen, het milieu beschermen en de ruimte verkennen. Elke dag maakt wetenschap het leven beter!"
                }
            },
            {
                question: {
                    en: "What do we call the tool scientists use to see things that are too small for our eyes?",
                    es: "¿Cómo llamamos a la herramienta que usan los científicos para ver cosas que son muy pequeñas para nuestros ojos?",
                    de: "Wie nennen wir das Werkzeug, das Wissenschaftler verwenden, um Dinge zu sehen, die zu klein für unsere Augen sind?",
                    nl: "Hoe noemen we het gereedschap dat wetenschappers gebruiken om dingen te zien die te klein zijn voor onze ogen?"
                },
                options: [
                    { en: "Microscope", es: "Microscopio", de: "Mikroskop", nl: "Microscoop" },
                    { en: "Telescope", es: "Telescopio", de: "Teleskop", nl: "Telescoop" },
                    { en: "Magnifying glass", es: "Lupa", de: "Lupe", nl: "Vergrootglas" },
                    { en: "Camera", es: "Cámara", de: "Kamera", nl: "Camera" }
                ],
                correct: 0,
                explanation: {
                    en: "A microscope is a special tool that makes tiny things look much bigger so we can see them clearly! Scientists use microscopes to study bacteria, plant cells, and other microscopic life. Some microscopes are so powerful they can show us things thousands of times smaller than what our eyes can see!",
                    es: "¡Un microscopio es una herramienta especial que hace que las cosas diminutas se vean mucho más grandes para que podamos verlas claramente! Los científicos usan microscopios para estudiar bacterias, células de plantas y otra vida microscópica. ¡Algunos microscopios son tan poderosos que pueden mostrarnos cosas miles de veces más pequeñas de lo que nuestros ojos pueden ver!",
                    de: "Ein Mikroskop ist ein spezielles Werkzeug, das winzige Dinge viel größer aussehen lässt, damit wir sie deutlich sehen können! Wissenschaftler verwenden Mikroskope, um Bakterien, Pflanzenzellen und anderes mikroskopisches Leben zu studieren. Einige Mikroskope sind so mächtig, dass sie uns Dinge zeigen können, die tausende Male kleiner sind, als unsere Augen sehen können!",
                    nl: "Een microscoop is een speciaal gereedschap dat kleine dingen veel groter laat lijken zodat we ze duidelijk kunnen zien! Wetenschappers gebruiken microscopen om bacteriën, plantencellen en ander microscopisch leven te bestuderen. Sommige microscopen zijn zo krachtig dat ze ons duizenden keren kleinere dingen kunnen laten zien dan wat onze ogen kunnen zien!"
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/science', level1);
    }
})();