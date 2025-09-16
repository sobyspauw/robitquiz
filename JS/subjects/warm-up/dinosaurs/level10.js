(function() {
    const level10 = {
        name: {
            en: "Dinosaur Extinction",
            es: "Extinción de los Dinosaurios",
            de: "Dinosaurier-Aussterben",
            nl: "Dinosaurus Uitsterving"
        },
        questions: [
            {
                question: {
                    en: "When did the dinosaurs go extinct?",
                    es: "¿Cuándo se extinguieron los dinosaurios?",
                    de: "Wann starben die Dinosaurier aus?",
                    nl: "Wanneer stierven de dinosaurussen uit?"
                },
                options: [
                    { en: "About 66 million years ago", es: "Hace unos 66 millones de años", de: "Vor etwa 66 Millionen Jahren", nl: "Ongeveer 66 miljoen jaar geleden" },
                    { en: "About 1,000 years ago", es: "Hace unos 1,000 años", de: "Vor etwa 1.000 Jahren", nl: "Ongeveer 1.000 jaar geleden" },
                    { en: "About 10,000 years ago", es: "Hace unos 10,000 años", de: "Vor etwa 10.000 Jahren", nl: "Ongeveer 10.000 jaar geleden" },
                    { en: "They're not extinct", es: "No están extintos", de: "Sie sind nicht ausgestorben", nl: "Ze zijn niet uitgestorven" }
                ],
                correct: 0,
                explanation: {
                    en: "The great dinosaur extinction happened 66 million years ago at the end of the Cretaceous Period. This was long before humans existed - if Earth's history was a 24-hour day, dinosaurs would have disappeared just 18 minutes before midnight!",
                    es: "La gran extinción de los dinosaurios ocurrió hace 66 millones de años al final del Período Cretácico. Esto fue mucho antes de que existieran los humanos - ¡si la historia de la Tierra fuera un día de 24 horas, los dinosaurios habrían desaparecido solo 18 minutos antes de la medianoche!",
                    de: "Das große Dinosaurieraussterben geschah vor 66 Millionen Jahren am Ende der Kreidezeit. Das war lange bevor Menschen existierten - wenn die Erdgeschichte ein 24-Stunden-Tag wäre, wären Dinosaurier nur 18 Minuten vor Mitternacht verschwunden!",
                    nl: "De grote dinosaurus uitsterving gebeurde 66 miljoen jaar geleden aan het einde van de Krijttijd. Dit was lang voordat mensen bestonden - als de geschiedenis van de aarde een 24-uurs dag was, zouden dinosaurussen slechts 18 minuten voor middernacht zijn verdwenen!"
                }
            },
            {
                question: {
                    en: "What is the most widely accepted theory for dinosaur extinction?",
                    es: "¿Cuál es la teoría más aceptada para la extinción de los dinosaurios?",
                    de: "Was ist die am meisten akzeptierte Theorie für das Aussterben der Dinosaurier?",
                    nl: "Wat is de meest geaccepteerde theorie voor de uitsterving van dinosaurussen?"
                },
                options: [
                    { en: "A large asteroid hit Earth", es: "Un asteroide grande golpeó la Tierra", de: "Ein großer Asteroid traf die Erde", nl: "Een grote asteroïde raakte de aarde" },
                    { en: "They all got sick", es: "Todos se enfermaron", de: "Sie wurden alle krank", nl: "Ze werden allemaal ziek" },
                    { en: "They forgot how to find food", es: "Olvidaron cómo encontrar comida", de: "Sie vergaßen, wie man Futter findet", nl: "Ze vergaten hoe voedsel te vinden" },
                    { en: "They moved to another planet", es: "Se mudaron a otro planeta", de: "Sie zogen auf einen anderen Planeten", nl: "Ze verhuisden naar een andere planeet" }
                ],
                correct: 0,
                explanation: {
                    en: "Most scientists believe a massive asteroid (space rock) crashed into Earth near Mexico. This impact was so powerful it created a crater 150 miles wide and caused global changes that made it impossible for large dinosaurs to survive.",
                    es: "La mayoría de científicos creen que un asteroide masivo (roca espacial) se estrelló en la Tierra cerca de México. Este impacto fue tan poderoso que creó un cráter de 240 kilómetros de ancho y causó cambios globales que hicieron imposible que los dinosaurios grandes sobrevivieran.",
                    de: "Die meisten Wissenschaftler glauben, dass ein massiver Asteroid (Weltraumfelsen) nahe Mexiko auf die Erde krachte. Dieser Einschlag war so mächtig, dass er einen 240 km breiten Krater schuf und globale Veränderungen verursachte, die es großen Dinosauriern unmöglich machten zu überleben.",
                    nl: "De meeste wetenschappers geloven dat een massieve asteroïde (ruimterots) dichtbij Mexico op de aarde insloeg. Deze inslag was zo krachtig dat het een krater van 240 kilometer breed creëerde en wereldwijde veranderingen veroorzaakte die het onmogelijk maakten voor grote dinosaurussen om te overleven."
                }
            },
            {
                question: {
                    en: "How big was the asteroid that likely caused the dinosaur extinction?",
                    es: "¿Qué tan grande era el asteroide que probablemente causó la extinción de los dinosaurios?",
                    de: "Wie groß war der Asteroid, der wahrscheinlich das Aussterben der Dinosaurier verursachte?",
                    nl: "Hoe groot was de asteroïde die waarschijnlijk de uitsterving van dinosaurussen veroorzaakte?"
                },
                options: [
                    { en: "About 6 miles (10 kilometers) wide", es: "Unas 6 millas (10 kilómetros) de ancho", de: "Etwa 6 Meilen (10 Kilometer) breit", nl: "Ongeveer 6 mijl (10 kilometer) breed" },
                    { en: "As small as a pebble", es: "Tan pequeño como una piedrita", de: "So klein wie ein Kieselstein", nl: "Zo klein als een kiezelsteen" },
                    { en: "As big as the moon", es: "Tan grande como la luna", de: "So groß wie der Mond", nl: "Zo groot als de maan" },
                    { en: "As big as a house", es: "Tan grande como una casa", de: "So groß wie ein Haus", nl: "Zo groot als een huis" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Where did the asteroid that killed the dinosaurs hit Earth?",
                    es: "¿Dónde golpeó la Tierra el asteroide que mató a los dinosaurios?",
                    de: "Wo traf der Asteroid, der die Dinosaurier tötete, die Erde?",
                    nl: "Waar raakte de asteroïde die de dinosaurussen doodde de aarde?"
                },
                options: [
                    { en: "Near what is now Mexico", es: "Cerca de lo que ahora es México", de: "In der Nähe des heutigen Mexiko", nl: "Dichtbij het huidige Mexico" },
                    { en: "In the middle of the ocean", es: "En el medio del océano", de: "Mitten im Ozean", nl: "In het midden van de oceaan" },
                    { en: "At the North Pole", es: "En el Polo Norte", de: "Am Nordpol", nl: "Op de Noordpool" },
                    { en: "In Africa", es: "En África", de: "In Afrika", nl: "In Afrika" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happened immediately after the asteroid impact?",
                    es: "¿Qué pasó inmediatamente después del impacto del asteroide?",
                    de: "Was geschah unmittelbar nach dem Asteroideneinschlag?",
                    nl: "Wat gebeurde er onmiddellijk na de asteroïde inslag?"
                },
                options: [
                    { en: "Huge explosions and fires spread around the world", es: "Explosiones enormes e incendios se extendieron por el mundo", de: "Riesige Explosionen und Brände breiteten sich um die Welt aus", nl: "Enorme explosies en branden verspreidden zich rond de wereld" },
                    { en: "Everything became peaceful", es: "Todo se volvió pacífico", de: "Alles wurde friedlich", nl: "Alles werd vreedzaam" },
                    { en: "It started raining flowers", es: "Empezó a llover flores", de: "Es fing an, Blumen zu regnen", nl: "Het begon bloemen te regenen" },
                    { en: "Nothing happened", es: "No pasó nada", de: "Nichts passierte", nl: "Er gebeurde niets" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What blocked out the sun after the asteroid impact?",
                    es: "¿Qué bloqueó el sol después del impacto del asteroide?",
                    de: "Was blockierte die Sonne nach dem Asteroideneinschlag?",
                    nl: "Wat blokkeerde de zon na de asteroïde inslag?"
                },
                options: [
                    { en: "Dust and debris thrown into the atmosphere", es: "Polvo y escombros lanzados a la atmósfera", de: "Staub und Trümmer, die in die Atmosphäre geschleudert wurden", nl: "Stof en puin gegooid in de atmosfeer" },
                    { en: "Giant umbrellas", es: "Sombrillas gigantes", de: "Riesige Regenschirme", nl: "Reusachtige paraplu's" },
                    { en: "Clouds made by dinosaurs", es: "Nubes hechas por dinosaurios", de: "Wolken von Dinosauriern gemacht", nl: "Wolken gemaakt door dinosaurussen" },
                    { en: "The moon moved in front of the sun", es: "La luna se movió frente al sol", de: "Der Mond bewegte sich vor die Sonne", nl: "De maan bewoog voor de zon" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why did the blocked sun cause problems for life on Earth?",
                    es: "¿Por qué el sol bloqueado causó problemas para la vida en la Tierra?",
                    de: "Warum verursachte die blockierte Sonne Probleme für das Leben auf der Erde?",
                    nl: "Waarom veroorzaakte de geblokkeerde zon problemen voor het leven op aarde?"
                },
                options: [
                    { en: "Plants couldn't grow without sunlight", es: "Las plantas no podían crecer sin luz solar", de: "Pflanzen konnten nicht ohne Sonnenlicht wachsen", nl: "Planten konden niet groeien zonder zonlicht" },
                    { en: "It made everyone sleepy", es: "Hizo que todos tuvieran sueño", de: "Es machte alle schläfrig", nl: "Het maakte iedereen slaperig" },
                    { en: "Dinosaurs liked the darkness", es: "A los dinosaurios les gustaba la oscuridad", de: "Dinosaurier mochten die Dunkelheit", nl: "Dinosaurussen hielden van de duisternis" },
                    { en: "It didn't cause any problems", es: "No causó problemas", de: "Es verursachte keine Probleme", nl: "Het veroorzaakte geen problemen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happened to the temperature after the asteroid impact?",
                    es: "¿Qué pasó con la temperatura después del impacto del asteroide?",
                    de: "Was geschah mit der Temperatur nach dem Asteroideneinschlag?",
                    nl: "Wat gebeurde er met de temperatuur na de asteroïde inslag?"
                },
                options: [
                    { en: "It got very cold without the sun", es: "Se puso muy frío sin el sol", de: "Es wurde sehr kalt ohne die Sonne", nl: "Het werd heel koud zonder de zon" },
                    { en: "It got much hotter", es: "Se puso mucho más caliente", de: "Es wurde viel heißer", nl: "Het werd veel heter" },
                    { en: "It stayed exactly the same", es: "Se mantuvo exactamente igual", de: "Es blieb genau gleich", nl: "Het bleef precies hetzelfde" },
                    { en: "Temperature disappeared", es: "La temperatura desapareció", de: "Die Temperatur verschwand", nl: "Temperatuur verdween" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Did all dinosaurs die out at the same time?",
                    es: "¿Se extinguieron todos los dinosaurios al mismo tiempo?",
                    de: "Starben alle Dinosaurier zur gleichen Zeit aus?",
                    nl: "Stierven alle dinosaurussen tegelijkertijd uit?"
                },
                options: [
                    { en: "No, it took time and some lasted longer than others", es: "No, tomó tiempo y algunos duraron más que otros", de: "Nein, es dauerte Zeit und manche überlebten länger als andere", nl: "Nee, het duurde tijd en sommige hielden langer stand dan andere" },
                    { en: "Yes, all at exactly the same moment", es: "Sí, todos en exactamente el mismo momento", de: "Ja, alle im genau gleichen Moment", nl: "Ja, allemaal op precies hetzelfde moment" },
                    { en: "They died one by one over many years", es: "Murieron uno por uno durante muchos años", de: "Sie starben einer nach dem anderen über viele Jahre", nl: "Ze stierven een voor een gedurende vele jaren" },
                    { en: "None of them actually died", es: "Ninguno de ellos realmente murió", de: "Keiner von ihnen starb wirklich", nl: "Geen van hen stierf eigenlijk" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which animals survived the extinction event that killed the dinosaurs?",
                    es: "¿Qué animales sobrevivieron al evento de extinción que mató a los dinosaurios?",
                    de: "Welche Tiere überlebten das Aussterbeereignis, das die Dinosaurier tötete?",
                    nl: "Welke dieren overleefden het uitstervingsgebeuren dat de dinosaurussen doodde?"
                },
                options: [
                    { en: "Small mammals, birds, crocodiles, and turtles", es: "Mamíferos pequeños, aves, cocodrilos y tortugas", de: "Kleine Säugetiere, Vögel, Krokodile und Schildkröten", nl: "Kleine zoogdieren, vogels, krokodillen en schildpadden" },
                    { en: "Only insects", es: "Solo insectos", de: "Nur Insekten", nl: "Alleen insecten" },
                    { en: "Only plants", es: "Solo plantas", de: "Nur Pflanzen", nl: "Alleen planten" },
                    { en: "Nothing survived", es: "Nada sobrevivió", de: "Nichts überlebte", nl: "Niets overleefde" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why did small animals survive better than large dinosaurs?",
                    es: "¿Por qué los animales pequeños sobrevivieron mejor que los dinosaurios grandes?",
                    de: "Warum überlebten kleine Tiere besser als große Dinosaurier?",
                    nl: "Waarom overleefden kleine dieren beter dan grote dinosaurussen?"
                },
                options: [
                    { en: "They needed less food and could hide underground", es: "Necesitaban menos comida y podían esconderse bajo tierra", de: "Sie brauchten weniger Futter und konnten sich unterirdisch verstecken", nl: "Ze hadden minder voedsel nodig en konden zich ondergronds verstoppen" },
                    { en: "They were stronger fighters", es: "Eran luchadores más fuertes", de: "Sie waren stärkere Kämpfer", nl: "Ze waren sterkere vechters" },
                    { en: "They could fly away", es: "Podían volar lejos", de: "Sie konnten wegfliegen", nl: "Ze konden wegvliegen" },
                    { en: "They had magic protection", es: "Tenían protección mágica", de: "Sie hatten magischen Schutz", nl: "Ze hadden magische bescherming" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What other theory exists for dinosaur extinction besides the asteroid?",
                    es: "¿Qué otra teoría existe para la extinción de dinosaurios además del asteroide?",
                    de: "Welche andere Theorie gibt es für das Aussterben der Dinosaurier außer dem Asteroid?",
                    nl: "Welke andere theorie bestaat er voor de uitsterving van dinosaurussen naast de asteroïde?"
                },
                options: [
                    { en: "Massive volcanic eruptions", es: "Erupciones volcánicas masivas", de: "Massive Vulkanausbrüche", nl: "Massieve vulkanische uitbarstingen" },
                    { en: "They all moved to Mars", es: "Todos se mudaron a Marte", de: "Sie zogen alle zum Mars", nl: "Ze verhuisden allemaal naar Mars" },
                    { en: "They turned into rocks", es: "Se convirtieron en rocas", de: "Sie verwandelten sich in Steine", nl: "Ze veranderden in rotsen" },
                    { en: "They went on vacation", es: "Se fueron de vacaciones", de: "Sie gingen in den Urlaub", nl: "Ze gingen op vakantie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How long did the 'nuclear winter' effect last after the asteroid impact?",
                    es: "¿Cuánto duró el efecto de 'invierno nuclear' después del impacto del asteroide?",
                    de: "Wie lange dauerte der 'Nuklearwinter'-Effekt nach dem Asteroideneinschlag?",
                    nl: "Hoe lang duurde het 'nucleaire winter' effect na de asteroïde inslag?"
                },
                options: [
                    { en: "Several months to years", es: "Varios meses a años", de: "Mehrere Monate bis Jahre", nl: "Meerdere maanden tot jaren" },
                    { en: "Just one day", es: "Solo un día", de: "Nur einen Tag", nl: "Slechts één dag" },
                    { en: "Forever", es: "Para siempre", de: "Für immer", nl: "Voor altijd" },
                    { en: "One week", es: "Una semana", de: "Eine Woche", nl: "Een week" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What evidence do scientists have for the asteroid impact?",
                    es: "¿Qué evidencia tienen los científicos del impacto del asteroide?",
                    de: "Welche Beweise haben Wissenschaftler für den Asteroideneinschlag?",
                    nl: "Welk bewijs hebben wetenschappers voor de asteroïde inslag?"
                },
                options: [
                    { en: "A layer of special elements found all over the world", es: "Una capa de elementos especiales encontrada en todo el mundo", de: "Eine Schicht spezieller Elemente, die überall auf der Welt gefunden wurde", nl: "Een laag speciale elementen gevonden over de hele wereld" },
                    { en: "Photographs of the asteroid", es: "Fotografías del asteroide", de: "Fotos vom Asteroid", nl: "Foto's van de asteroïde" },
                    { en: "Dinosaur diaries describing the impact", es: "Diarios de dinosaurios describiendo el impacto", de: "Dinosaurier-Tagebücher, die den Einschlag beschreiben", nl: "Dinosaurusdagboeken die de inslag beschrijven" },
                    { en: "Videos from space", es: "Videos desde el espacio", de: "Videos aus dem Weltraum", nl: "Video's uit de ruimte" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happened to the ocean food chains during the extinction?",
                    es: "¿Qué pasó con las cadenas alimentarias del océano durante la extinción?",
                    de: "Was geschah mit den Ozean-Nahrungsketten während des Aussterbens?",
                    nl: "Wat gebeurde er met de oceaan voedselketens tijdens de uitsterving?"
                },
                options: [
                    { en: "They collapsed because tiny sea plants died", es: "Colapsaron porque murieron las plantas marinas pequeñas", de: "Sie brachen zusammen, weil winzige Meerespflanzen starben", nl: "Ze stortten in omdat kleine zeeplanten stierven" },
                    { en: "They got stronger", es: "Se volvieron más fuertes", de: "Sie wurden stärker", nl: "Ze werden sterker" },
                    { en: "Nothing changed in the oceans", es: "Nada cambió en los océanos", de: "Nichts änderte sich in den Ozeanen", nl: "Er veranderde niets in de oceanen" },
                    { en: "All sea creatures became vegetarians", es: "Todas las criaturas marinas se volvieron vegetarianas", de: "Alle Meereskreaturen wurden Vegetarier", nl: "Alle zeewezens werden vegetariërs" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Were there warning signs before the mass extinction?",
                    es: "¿Hubo señales de advertencia antes de la extinción masiva?",
                    de: "Gab es Warnzeichen vor dem Massenaussterben?",
                    nl: "Waren er waarschuwingssignalen voor de massa-uitsterving?"
                },
                options: [
                    { en: "Yes, some dinosaur species were already declining", es: "Sí, algunas especies de dinosaurios ya estaban declinando", de: "Ja, manche Dinosaurierarten gingen bereits zurück", nl: "Ja, sommige dinosaurussoorten waren al aan het afnemen" },
                    { en: "No, it happened completely suddenly", es: "No, pasó completamente de repente", de: "Nein, es passierte völlig plötzlich", nl: "Nee, het gebeurde volledig plotseling" },
                    { en: "Dinosaurs predicted it would happen", es: "Los dinosaurios predijeron que pasaría", de: "Dinosaurier sagten voraus, dass es passieren würde", nl: "Dinosaurussen voorspelden dat het zou gebeuren" },
                    { en: "The asteroid sent a message first", es: "El asteroide envió un mensaje primero", de: "Der Asteroid sandte zuerst eine Nachricht", nl: "De asteroïde stuurde eerst een bericht" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do we know birds are related to dinosaurs?",
                    es: "¿Cómo sabemos que las aves están relacionadas con los dinosaurios?",
                    de: "Wie wissen wir, dass Vögel mit Dinosauriern verwandt sind?",
                    nl: "Hoe weten we dat vogels verwant zijn aan dinosaurussen?"
                },
                options: [
                    { en: "Birds evolved from small feathered dinosaurs that survived", es: "Las aves evolucionaron de pequeños dinosaurios con plumas que sobrevivieron", de: "Vögel entwickelten sich aus kleinen gefiederten Dinosauriern, die überlebten", nl: "Vogels evolueerden uit kleine gevederde dinosaurussen die overleefden" },
                    { en: "Birds came from space after dinosaurs died", es: "Las aves vinieron del espacio después de que murieron los dinosaurios", de: "Vögel kamen aus dem Weltraum, nachdem Dinosaurier starben", nl: "Vogels kwamen uit de ruimte nadat dinosaurussen stierven" },
                    { en: "Birds and dinosaurs are not related", es: "Las aves y los dinosaurios no están relacionados", de: "Vögel und Dinosaurier sind nicht verwandt", nl: "Vogels en dinosaurussen zijn niet verwant" },
                    { en: "Birds taught dinosaurs how to fly", es: "Las aves enseñaron a los dinosaurios a volar", de: "Vögel lehrten Dinosauriern das Fliegen", nl: "Vogels leerden dinosaurussen vliegen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happened to the survivors after the extinction?",
                    es: "¿Qué pasó con los sobrevivientes después de la extinción?",
                    de: "Was geschah mit den Überlebenden nach dem Aussterben?",
                    nl: "Wat gebeurde er met de overlevenden na de uitsterving?"
                },
                options: [
                    { en: "They evolved into many new species over time", es: "Evolucionaron en muchas especies nuevas con el tiempo", de: "Sie entwickelten sich über Zeit in viele neue Arten", nl: "Ze evolueerden in de loop van de tijd tot vele nieuwe soorten" },
                    { en: "They stayed exactly the same forever", es: "Se quedaron exactamente iguales para siempre", de: "Sie blieben für immer genau gleich", nl: "Ze bleven voor altijd precies hetzelfde" },
                    { en: "They all died out later", es: "Todos se extinguieron después", de: "Sie starben alle später aus", nl: "Ze stierven allemaal later uit" },
                    { en: "They built cities", es: "Construyeron ciudades", de: "Sie bauten Städte", nl: "Ze bouwden steden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How long did it take for life to recover after the dinosaur extinction?",
                    es: "¿Cuánto tiempo tardó la vida en recuperarse después de la extinción de los dinosaurios?",
                    de: "Wie lange dauerte es, bis sich das Leben nach dem Dinosaurier-Aussterben erholte?",
                    nl: "Hoe lang duurde het voor het leven herstelde na de dinosaurus uitsterving?"
                },
                options: [
                    { en: "Millions of years", es: "Millones de años", de: "Millionen von Jahren", nl: "Miljoenen jaren" },
                    { en: "A few weeks", es: "Unas pocas semanas", de: "Ein paar Wochen", nl: "Een paar weken" },
                    { en: "One year", es: "Un año", de: "Ein Jahr", nl: "Een jaar" },
                    { en: "It never recovered", es: "Nunca se recuperó", de: "Es erholte sich nie", nl: "Het herstelde nooit" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the Chicxulub crater?",
                    es: "¿Qué era el cráter de Chicxulub?",
                    de: "Was war der Chicxulub-Krater?",
                    nl: "Wat was de Chicxulub krater?"
                },
                options: [
                    { en: "The giant hole left by the asteroid that killed the dinosaurs", es: "El hoyo gigante dejado por el asteroide que mató a los dinosaurios", de: "Das riesige Loch, das vom Asteroid hinterlassen wurde, der die Dinosaurier tötete", nl: "Het reusachtige gat achtergelaten door de asteroïde die de dinosaurussen doodde" },
                    { en: "A dinosaur nesting ground", es: "Un lugar de anidación de dinosaurios", de: "Ein Dinosaurier-Nistplatz", nl: "Een dinosaurus nestplaats" },
                    { en: "A large lake", es: "Un lago grande", de: "Ein großer See", nl: "Een groot meer" },
                    { en: "A mountain made by volcanoes", es: "Una montaña hecha por volcanes", de: "Ein Berg von Vulkanen gemacht", nl: "Een berg gemaakt door vulkanen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Did plant life survive the dinosaur extinction?",
                    es: "¿Sobrevivió la vida vegetal a la extinción de los dinosaurios?",
                    de: "Überlebte das Pflanzenleben das Dinosaurier-Aussterben?",
                    nl: "Overleefde het plantenleven de dinosaurus uitsterving?"
                },
                options: [
                    { en: "Some plants survived, especially those with seeds and roots", es: "Algunas plantas sobrevivieron, especialmente las con semillas y raíces", de: "Manche Pflanzen überlebten, besonders die mit Samen und Wurzeln", nl: "Sommige planten overleefden, vooral die met zaden en wortels" },
                    { en: "All plants died out completely", es: "Todas las plantas se extinguieron completamente", de: "Alle Pflanzen starben völlig aus", nl: "Alle planten stierven volledig uit" },
                    { en: "Only flowers survived", es: "Solo las flores sobrevivieron", de: "Nur Blumen überlebten", nl: "Alleen bloemen overleefden" },
                    { en: "Plants were not affected at all", es: "Las plantas no fueron afectadas en absoluto", de: "Pflanzen waren überhaupt nicht betroffen", nl: "Planten werden helemaal niet getroffen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What role did acid rain play in the extinction?",
                    es: "¿Qué papel jugó la lluvia ácida en la extinción?",
                    de: "Welche Rolle spielte saurer Regen beim Aussterben?",
                    nl: "Welke rol speelde zure regen bij de uitsterving?"
                },
                options: [
                    { en: "It poisoned plants and water sources", es: "Envenenó las plantas y fuentes de agua", de: "Es vergiftete Pflanzen und Wasserquellen", nl: "Het vergiftigde planten en waterbronnen" },
                    { en: "It helped plants grow better", es: "Ayudó a las plantas a crecer mejor", de: "Es half Pflanzen besser zu wachsen", nl: "Het hielp planten beter groeien" },
                    { en: "There was no acid rain", es: "No hubo lluvia ácida", de: "Es gab keinen sauren Regen", nl: "Er was geen zure regen" },
                    { en: "It only affected the oceans", es: "Solo afectó los océanos", de: "Es betraf nur die Ozeane", nl: "Het trof alleen de oceanen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do mass extinctions help evolution?",
                    es: "¿Cómo ayudan las extinciones masivas a la evolución?",
                    de: "Wie helfen Massenaussterben der Evolution?",
                    nl: "Hoe helpen massa-uitstervingen de evolutie?"
                },
                options: [
                    { en: "They create opportunities for survivors to evolve into new species", es: "Crean oportunidades para que los sobrevivientes evolucionen en nuevas especies", de: "Sie schaffen Möglichkeiten für Überlebende, sich zu neuen Arten zu entwickeln", nl: "Ze creëren mogelijkheden voor overlevenden om te evolueren tot nieuwe soorten" },
                    { en: "They stop evolution completely", es: "Detienen la evolución completamente", de: "Sie stoppen die Evolution völlig", nl: "Ze stoppen de evolutie volledig" },
                    { en: "They make all species the same", es: "Hacen que todas las especies sean iguales", de: "Sie machen alle Arten gleich", nl: "Ze maken alle soorten hetzelfde" },
                    { en: "They have no effect on evolution", es: "No tienen efecto en la evolución", de: "Sie haben keinen Effekt auf die Evolution", nl: "Ze hebben geen effect op evolutie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Were the dinosaurs the only group to go extinct 66 million years ago?",
                    es: "¿Fueron los dinosaurios el único grupo en extinguirse hace 66 millones de años?",
                    de: "Waren Dinosaurier die einzige Gruppe, die vor 66 Millionen Jahren ausstarb?",
                    nl: "Waren dinosaurussen de enige groep die 66 miljoen jaar geleden uitstierf?"
                },
                options: [
                    { en: "No, many marine reptiles and other species also died out", es: "No, muchos reptiles marinos y otras especies también se extinguieron", de: "Nein, viele Meeresreptilien und andere Arten starben auch aus", nl: "Nee, veel zeereptielen en andere soorten stierven ook uit" },
                    { en: "Yes, only dinosaurs went extinct", es: "Sí, solo los dinosaurios se extinguieron", de: "Ja, nur Dinosaurier starben aus", nl: "Ja, alleen dinosaurussen stierven uit" },
                    { en: "No species went extinct", es: "Ninguna especie se extinguió", de: "Keine Art starb aus", nl: "Geen soorten stierven uit" },
                    { en: "All species went extinct", es: "Todas las especies se extinguieron", de: "Alle Arten starben aus", nl: "Alle soorten stierven uit" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What can we learn from studying the dinosaur extinction?",
                    es: "¿Qué podemos aprender estudiando la extinción de los dinosaurios?",
                    de: "Was können wir vom Studium des Dinosaurier-Aussterbens lernen?",
                    nl: "Wat kunnen we leren van het bestuderen van de dinosaurus uitsterving?"
                },
                options: [
                    { en: "How sudden changes can affect all life on Earth", es: "Cómo los cambios repentinos pueden afectar toda la vida en la Tierra", de: "Wie plötzliche Veränderungen alles Leben auf der Erde beeinflussen können", nl: "Hoe plotselinge veranderingen al het leven op aarde kunnen beïnvloeden" },
                    { en: "How to bring dinosaurs back to life", es: "Cómo traer dinosaurios de vuelta a la vida", de: "Wie man Dinosaurier wieder zum Leben erweckt", nl: "Hoe dinosaurussen weer tot leven te wekken" },
                    { en: "That extinctions never happen", es: "Que las extinciones nunca pasan", de: "Dass Aussterben nie passiert", nl: "Dat uitstervingen nooit gebeuren" },
                    { en: "Nothing useful for today", es: "Nada útil para hoy", de: "Nichts Nützliches für heute", nl: "Niets nuttigs voor vandaag" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Have there been other mass extinctions in Earth's history?",
                    es: "¿Ha habido otras extinciones masivas en la historia de la Tierra?",
                    de: "Gab es andere Massenaussterben in der Geschichte der Erde?",
                    nl: "Zijn er andere massa-uitstervingen geweest in de geschiedenis van de aarde?"
                },
                options: [
                    { en: "Yes, several major extinction events have occurred", es: "Sí, varios eventos de extinción mayores han ocurrido", de: "Ja, mehrere große Aussterbeereignisse sind aufgetreten", nl: "Ja, verschillende grote uitstervingsgebeurtenissen hebben plaatsgevonden" },
                    { en: "No, this was the only one", es: "No, esta fue la única", de: "Nein, das war die einzige", nl: "Nee, dit was de enige" },
                    { en: "Only one other extinction happened", es: "Solo ocurrió una otra extinción", de: "Nur ein anderes Aussterben passierte", nl: "Slechts één andere uitsterving gebeurde" },
                    { en: "Mass extinctions happen every year", es: "Extinciones masivas pasan cada año", de: "Massenaussterben passieren jedes Jahr", nl: "Massa-uitstervingen gebeuren elk jaar" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Could another asteroid impact happen today?",
                    es: "¿Podría ocurrir otro impacto de asteroide hoy?",
                    de: "Könnte heute ein anderer Asteroideneinschlag passieren?",
                    nl: "Zou er vandaag een andere asteroïde inslag kunnen gebeuren?"
                },
                options: [
                    { en: "Yes, but scientists watch for dangerous asteroids", es: "Sí, pero los científicos vigilan asteroides peligrosos", de: "Ja, aber Wissenschaftler beobachten gefährliche Asteroiden", nl: "Ja, maar wetenschappers kijken uit naar gevaarlijke asteroïden" },
                    { en: "No, it could never happen again", es: "No, nunca podría pasar otra vez", de: "Nein, es könnte nie wieder passieren", nl: "Nee, het zou nooit meer kunnen gebeuren" },
                    { en: "Only if dinosaurs come back", es: "Solo si los dinosaurios regresan", de: "Nur wenn Dinosaurier zurückkommen", nl: "Alleen als dinosaurussen terugkomen" },
                    { en: "It happens every day", es: "Pasa todos los días", de: "Es passiert jeden Tag", nl: "Het gebeurt elke dag" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the most important factor in determining which species survived?",
                    es: "¿Cuál fue el factor más importante para determinar qué especies sobrevivieron?",
                    de: "Was war der wichtigste Faktor bei der Bestimmung, welche Arten überlebten?",
                    nl: "Wat was de belangrijkste factor bij het bepalen welke soorten overleefden?"
                },
                options: [
                    { en: "Being small and adaptable to changing conditions", es: "Ser pequeños y adaptables a condiciones cambiantes", de: "Klein und anpassungsfähig an veränderte Bedingungen zu sein", nl: "Klein en aanpasbaar zijn aan veranderende omstandigheden" },
                    { en: "Being the biggest and strongest", es: "Ser los más grandes y fuertes", de: "Die größten und stärksten zu sein", nl: "De grootste en sterkste zijn" },
                    { en: "Having the most colorful appearance", es: "Tener la apariencia más colorida", de: "Das bunteste Aussehen zu haben", nl: "Het meest kleurrijke uiterlijk hebben" },
                    { en: "Being the smartest", es: "Ser los más inteligentes", de: "Die klügsten zu sein", nl: "De slimste zijn" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did the extinction change the course of evolution?",
                    es: "¿Cómo cambió la extinción el curso de la evolución?",
                    de: "Wie veränderte das Aussterben den Verlauf der Evolution?",
                    nl: "Hoe veranderde de uitsterving de loop van de evolutie?"
                },
                options: [
                    { en: "It allowed mammals to become the dominant large animals", es: "Permitió a los mamíferos convertirse en los animales grandes dominantes", de: "Es ermöglichte Säugetieren, die dominanten großen Tiere zu werden", nl: "Het stelde zoogdieren in staat de dominante grote dieren te worden" },
                    { en: "Evolution stopped completely", es: "La evolución se detuvo completamente", de: "Evolution hörte völlig auf", nl: "Evolutie stopte volledig" },
                    { en: "All species became identical", es: "Todas las especies se volvieron idénticas", de: "Alle Arten wurden identisch", nl: "Alle soorten werden identiek" },
                    { en: "Nothing changed about evolution", es: "Nada cambió sobre la evolución", de: "Nichts änderte sich an der Evolution", nl: "Er veranderde niets aan evolutie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why is the dinosaur extinction important for understanding Earth's history?",
                    es: "¿Por qué es importante la extinción de los dinosaurios para entender la historia de la Tierra?",
                    de: "Warum ist das Dinosaurier-Aussterben wichtig für das Verstehen der Geschichte der Erde?",
                    nl: "Waarom is de dinosaurus uitsterving belangrijk voor het begrijpen van de geschiedenis van de aarde?"
                },
                options: [
                    { en: "It shows how life can change dramatically in a short time", es: "Muestra cómo la vida puede cambiar dramáticamente en poco tiempo", de: "Es zeigt, wie sich das Leben in kurzer Zeit dramatisch ändern kann", nl: "Het toont hoe het leven dramatisch kan veranderen in korte tijd" },
                    { en: "It proves the Earth never changes", es: "Prueba que la Tierra nunca cambia", de: "Es beweist, dass die Erde sich nie ändert", nl: "Het bewijst dat de aarde nooit verandert" },
                    { en: "It shows life is not important", es: "Muestra que la vida no es importante", de: "Es zeigt, dass Leben nicht wichtig ist", nl: "Het toont dat leven niet belangrijk is" },
                    { en: "It has no importance for understanding Earth", es: "No tiene importancia para entender la Tierra", de: "Es hat keine Bedeutung für das Verstehen der Erde", nl: "Het heeft geen belang voor het begrijpen van de aarde" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the most important lesson from the dinosaur extinction?",
                    es: "¿Cuál es la lección más importante de la extinción de los dinosaurios?",
                    de: "Was ist die wichtigste Lektion aus dem Dinosaurier-Aussterben?",
                    nl: "Wat is de belangrijkste les uit de dinosaurus uitsterving?"
                },
                options: [
                    { en: "Life is resilient but can change quickly when the environment changes", es: "La vida es resistente pero puede cambiar rápidamente cuando cambia el ambiente", de: "Leben ist widerstandsfähig, kann sich aber schnell ändern, wenn sich die Umwelt ändert", nl: "Het leven is veerkrachtig maar kan snel veranderen wanneer de omgeving verandert" },
                    { en: "Extinction means life never comes back", es: "Extinción significa que la vida nunca regresa", de: "Aussterben bedeutet, dass Leben nie zurückkommt", nl: "Uitsterving betekent dat leven nooit terugkomt" },
                    { en: "Only the biggest animals matter", es: "Solo los animales más grandes importan", de: "Nur die größten Tiere sind wichtig", nl: "Alleen de grootste dieren doen ertoe" },
                    { en: "Science cannot teach us about the past", es: "La ciencia no puede enseñarnos sobre el pasado", de: "Wissenschaft kann uns nichts über die Vergangenheit lehren", nl: "Wetenschap kan ons niets leren over het verleden" }
                ],
                correct: 0,
                explanation: {
                    en: "The most important lesson from dinosaur extinction is that life is incredibly resilient and adaptable, but can face dramatic changes when environmental conditions shift rapidly. This teaches us that even the most successful species need to adapt to survive, and shows us how important it is to protect our environment and be prepared for changes.",
                    es: "La lección más importante de la extinción de los dinosaurios es que la vida es increíblemente resistente y adaptable, pero puede enfrentar cambios dramáticos cuando las condiciones ambientales cambian rápidamente. Esto nos enseña que incluso las especies más exitosas necesitan adaptarse para sobrevivir, y nos muestra qué tan importante es proteger nuestro ambiente y estar preparados para cambios.",
                    de: "Die wichtigste Lektion aus dem Dinosaurier-Aussterben ist, dass Leben unglaublich widerstandsfähig und anpassungsfähig ist, aber dramatischen Veränderungen gegenüberstehen kann, wenn sich Umweltbedingungen schnell verschieben. Das lehrt uns, dass sogar die erfolgreichsten Arten sich anpassen müssen, um zu überleben, und zeigt uns, wie wichtig es ist, unsere Umwelt zu schützen und auf Veränderungen vorbereitet zu sein.",
                    nl: "De belangrijkste les uit de dinosaurus uitsterving is dat leven ongelooflijk veerkrachtig en aanpasbaar is, maar dramatische veranderingen kan ondergaan wanneer omgevingsomstandigheden snel verschuiven. Dit leert ons dat zelfs de meest succesvolle soorten zich moeten aanpassen om te overleven, en toont ons hoe belangrijk het is om ons milieu te beschermen en voorbereid te zijn op veranderingen."
                }
            },
            {
                question: {
                    en: "What happened to the small mammals during the dinosaur extinction?",
                    es: "¿Qué pasó con los mamíferos pequeños durante la extinción de los dinosaurios?",
                    de: "Was passierte mit den kleinen Säugetieren während der Dinosaurier-Extinction?",
                    nl: "Wat gebeurde er met de kleine zoogdieren tijdens de dinosaurus uitsterving?"
                },
                options: [
                    { en: "They survived and grew larger over time", es: "Sobrevivieron y crecieron más con el tiempo", de: "Sie überlebten und wurden mit der Zeit größer", nl: "Ze overleefden en werden groter met de tijd" },
                    { en: "They all became extinct too", es: "Todos se extinguieron también", de: "Sie starben alle auch aus", nl: "Ze stierven allemaal ook uit" },
                    { en: "They turned into dinosaurs", es: "Se convirtieron en dinosaurios", de: "Sie wurden zu Dinosauriern", nl: "Ze werden dinosaurussen" },
                    { en: "They flew away to other planets", es: "Volaron a otros planetas", de: "Sie flogen zu anderen Planeten", nl: "Ze vlogen weg naar andere planeten" }
                ],
                correct: 0,
                explanation: {
                    en: "Small mammals survived the extinction that killed the dinosaurs! They were able to survive because they were small, ate different foods, and could hide in burrows. After the dinosaurs disappeared, mammals gradually grew larger and evolved into many new species, eventually including elephants, whales, and even humans!",
                    es: "Los mamíferos pequeños sobrevivieron la extinción que mató a los dinosaurios. Pudieron sobrevivir porque eran pequeños, comían diferentes alimentos y podían esconderse en madrigueras. ¡Después de que los dinosaurios desaparecieron, los mamíferos gradualmente crecieron más y evolucionaron en muchas especies nuevas, eventualmente incluyendo elefantes, ballenas e incluso humanos!",
                    de: "Kleine Säugetiere überlebten die Extinction, die die Dinosaurier tötete! Sie konnten überleben, weil sie klein waren, verschiedene Nahrung aßen und sich in Höhlen verstecken konnten. Nachdem die Dinosaurier verschwanden, wurden Säugetiere allmählich größer und entwickelten sich zu vielen neuen Arten, schließlich einschließlich Elefanten, Walen und sogar Menschen!",
                    nl: "Kleine zoogdieren overleefden de uitsterving die de dinosaurussen doodde! Ze konden overleven omdat ze klein waren, verschillende voedsel aten en zich konden verstoppen in holen. Nadat de dinosaurussen verdwenen, werden zoogdieren geleidelijk groter en evolueerden tot veel nieuwe soorten, uiteindelijk inclusief olifanten, walvissen en zelfs mensen!"
                }
            },
            {
                question: {
                    en: "How long ago did the dinosaurs become extinct?",
                    es: "¿Hace cuánto tiempo se extinguieron los dinosaurios?",
                    de: "Wie lange ist es her, dass Dinosaurier ausstarben?",
                    nl: "Hoe lang geleden stierven de dinosaurussen uit?"
                },
                options: [
                    { en: "About 66 million years ago", es: "Hace unos 66 millones de años", de: "Vor etwa 66 Millionen Jahren", nl: "Ongeveer 66 miljoen jaar geleden" },
                    { en: "Last week", es: "La semana pasada", de: "Letzte Woche", nl: "Vorige week" },
                    { en: "100 years ago", es: "Hace 100 años", de: "Vor 100 Jahren", nl: "100 jaar geleden" },
                    { en: "They never became extinct", es: "Nunca se extinguieron", de: "Sie starben nie aus", nl: "Ze zijn nooit uitgestorven" }
                ],
                correct: 0,
                explanation: {
                    en: "Dinosaurs became extinct about 66 million years ago! That was long before humans existed - in fact, humans have only been on Earth for about 300,000 years. The time between when dinosaurs lived and when humans appeared is so long that if Earth's history was a 24-hour day, dinosaurs would have disappeared in the evening and humans wouldn't appear until the very last second!",
                    es: "Los dinosaurios se extinguieron hace unos 66 millones de años. Eso fue mucho antes de que existieran los humanos - de hecho, los humanos solo han estado en la Tierra por unos 300,000 años. El tiempo entre cuando vivieron los dinosaurios y cuando aparecieron los humanos es tan largo que si la historia de la Tierra fuera un día de 24 horas, los dinosaurios habrían desaparecido en la tarde y los humanos no aparecerían hasta el último segundo.",
                    de: "Dinosaurier starben vor etwa 66 Millionen Jahren aus! Das war lange bevor Menschen existierten - tatsächlich sind Menschen erst seit etwa 300.000 Jahren auf der Erde. Die Zeit zwischen dem Leben der Dinosaurier und dem Erscheinen der Menschen ist so lang, dass wenn Erdgeschichte ein 24-Stunden-Tag wäre, Dinosaurier am Abend verschwunden wären und Menschen erst in der allerletzten Sekunde erschienen wären!",
                    nl: "Dinosaurussen stierven ongeveer 66 miljoen jaar geleden uit! Dat was lang voordat mensen bestonden - eigenlijk zijn mensen pas ongeveer 300.000 jaar op aarde. De tijd tussen toen dinosaurussen leefden en toen mensen verschenen is zo lang dat als de geschiedenis van de aarde een 24-uurs dag was, dinosaurussen 's avonds zouden zijn verdwenen en mensen pas in de allerlaatste seconde zouden verschijnen!"
                }
            },
            {
                question: {
                    en: "What do scientists think caused the dinosaur extinction?",
                    es: "¿Qué piensan los científicos que causó la extinción de los dinosaurios?",
                    de: "Was denken Wissenschaftler, was die Dinosaurier-Extinction verursachte?",
                    nl: "Wat denken wetenschappers dat de dinosaurus uitsterving veroorzaakte?"
                },
                options: [
                    { en: "A giant asteroid hit Earth", es: "Un asteroide gigante golpeó la Tierra", de: "Ein riesiger Asteroid traf die Erde", nl: "Een gigantische asteroide raakte de aarde" },
                    { en: "They got too tired from running", es: "Se cansaron demasiado de correr", de: "Sie wurden zu müde vom Laufen", nl: "Ze werden te moe van het rennen" },
                    { en: "They forgot how to find food", es: "Olvidaron cómo encontrar comida", de: "Sie vergaßen, wie man Nahrung findet", nl: "Ze vergaten hoe ze voedsel moesten vinden" },
                    { en: "They moved to another planet", es: "Se mudaron a otro planeta", de: "Sie zogen auf einen anderen Planeten", nl: "Ze verhuisden naar een andere planeet" }
                ],
                correct: 0,
                explanation: {
                    en: "Scientists believe a giant asteroid about 6 miles wide crashed into Earth 66 million years ago! This impact created a huge explosion, threw dust and debris into the atmosphere, and blocked sunlight for months. Without sunlight, plants died, and without plants, the dinosaurs had no food. This catastrophic event changed Earth's climate and led to the extinction of most dinosaurs.",
                    es: "Los científicos creen que un asteroide gigante de unas 6 millas de ancho se estrelló contra la Tierra hace 66 millones de años. Este impacto creó una explosión enorme, lanzó polvo y escombros a la atmósfera y bloqueó la luz solar por meses. Sin luz solar, las plantas murieron, y sin plantas, los dinosaurios no tenían comida. Este evento catastrófico cambió el clima de la Tierra y llevó a la extinción de la mayoría de los dinosaurios.",
                    de: "Wissenschaftler glauben, dass ein riesiger Asteroid etwa 6 Meilen breit vor 66 Millionen Jahren auf die Erde stürzte! Dieser Einschlag schuf eine riesige Explosion, schleuderte Staub und Trümmer in die Atmosphäre und blockierte monatelang Sonnenlicht. Ohne Sonnenlicht starben Pflanzen, und ohne Pflanzen hatten Dinosaurier keine Nahrung. Dieses katastrophale Ereignis veränderte Erdes Klima und führte zum Aussterben der meisten Dinosaurier.",
                    nl: "Wetenschappers geloven dat een gigantische asteroide ongeveer 6 mijl breed 66 miljoen jaar geleden op aarde crashte! Deze inslag veroorzaakte een enorme explosie, gooide stof en puin in de atmosfeer en blokkeerde zonlicht voor maanden. Zonder zonlicht stierven planten, en zonder planten hadden dinosaurussen geen voedsel. Deze catastrofale gebeurtenis veranderde het klimaat van de aarde en leidde tot de uitsterving van de meeste dinosaurussen."
                }
            },
            {
                question: {
                    en: "What happened to Earth's climate after the asteroid impact?",
                    es: "¿Qué pasó con el clima de la Tierra después del impacto del asteroide?",
                    de: "Was passierte mit dem Erdklima nach dem Asteroideneinschlag?",
                    nl: "Wat gebeurde er met het klimaat van de aarde na de asteroide inslag?"
                },
                options: [
                    { en: "It became dark and cold for a long time", es: "Se volvió oscuro y frío por mucho tiempo", de: "Es wurde dunkel und kalt für lange Zeit", nl: "Het werd donker en koud voor lange tijd" },
                    { en: "It became sunny and warm forever", es: "Se volvió soleado y cálido para siempre", de: "Es wurde sonnig und warm für immer", nl: "Het werd zonnig en warm voor altijd" },
                    { en: "Nothing changed at all", es: "Nada cambió en absoluto", de: "Nichts änderte sich überhaupt", nl: "Er veranderde helemaal niets" },
                    { en: "It started raining candy", es: "Empezó a llover dulces", de: "Es begann Süßigkeiten zu regnen", nl: "Het begon snoepjes te regenen" }
                ],
                correct: 0,
                explanation: {
                    en: "After the asteroid hit Earth, dust and debris blocked out the sun for months or even years! This made Earth dark and cold, like a long winter. Plants couldn't grow without sunlight, and the food chain collapsed. This period is sometimes called 'nuclear winter' because it was similar to what scientists think would happen after a nuclear war.",
                    es: "Después de que el asteroide golpeó la Tierra, el polvo y los escombros bloquearon el sol por meses o incluso años. Esto hizo que la Tierra fuera oscura y fría, como un invierno largo. Las plantas no podían crecer sin luz solar, y la cadena alimentaria colapsó. Este período a veces se llama 'invierno nuclear' porque era similar a lo que los científicos piensan que pasaría después de una guerra nuclear.",
                    de: "Nachdem der Asteroid die Erde traf, blockierten Staub und Trümmer monatelang oder sogar jahrelang die Sonne! Das machte die Erde dunkel und kalt, wie ein langer Winter. Pflanzen konnten ohne Sonnenlicht nicht wachsen, und die Nahrungskette brach zusammen. Diese Periode wird manchmal 'nuklearer Winter' genannt, weil es ähnlich war wie das, was Wissenschaftler denken, würde nach einem Atomkrieg passieren.",
                    nl: "Nadat de asteroide de aarde raakte, blokkeerden stof en puin de zon maandenlang of zelfs jarenlang! Dit maakte de aarde donker en koud, zoals een lange winter. Planten konden niet groeien zonder zonlicht, en de voedselketen stortte in. Deze periode wordt soms 'nucleaire winter' genoemd omdat het vergelijkbaar was met wat wetenschappers denken dat er zou gebeuren na een nucleaire oorlog."
                }
            },
            {
                question: {
                    en: "Which animals survived the dinosaur extinction?",
                    es: "¿Qué animales sobrevivieron la extinción de los dinosaurios?",
                    de: "Welche Tiere überlebten die Dinosaurier-Extinction?",
                    nl: "Welke dieren overleefden de dinosaurus uitsterving?"
                },
                options: [
                    { en: "Small mammals, birds, fish, and insects", es: "Mamíferos pequeños, pájaros, peces e insectos", de: "Kleine Säugetiere, Vögel, Fische und Insekten", nl: "Kleine zoogdieren, vogels, vissen en insecten" },
                    { en: "Only the biggest dinosaurs", es: "Solo los dinosaurios más grandes", de: "Nur die größten Dinosaurier", nl: "Alleen de grootste dinosaurussen" },
                    { en: "Nothing survived", es: "Nada sobrevivió", de: "Nichts überlebte", nl: "Niets overleefde" },
                    { en: "Only plants survived", es: "Solo las plantas sobrevivieron", de: "Nur Pflanzen überlebten", nl: "Alleen planten overleefden" }
                ],
                correct: 0,
                explanation: {
                    en: "Many smaller animals survived the extinction! Small mammals that could burrow underground, birds (which are dinosaurs!), fish in the oceans, insects, and some plants all made it through. These survivors were generally smaller, needed less food, or could find shelter during the difficult time after the asteroid impact.",
                    es: "Muchos animales más pequeños sobrevivieron la extinción. Mamíferos pequeños que podían hacer madrigueras bajo tierra, pájaros (¡que son dinosaurios!), peces en los océanos, insectos y algunas plantas todos lo lograron. Estos sobrevivientes generalmente eran más pequeños, necesitaban menos comida, o podían encontrar refugio durante el tiempo difícil después del impacto del asteroide.",
                    de: "Viele kleinere Tiere überlebten die Extinction! Kleine Säugetiere, die unterirdisch graben konnten, Vögel (die Dinosaurier sind!), Fische in den Ozeanen, Insekten und einige Pflanzen schafften es alle. Diese Überlebenden waren allgemein kleiner, brauchten weniger Nahrung oder konnten während der schwierigen Zeit nach dem Asteroideneinschlag Schutz finden.",
                    nl: "Veel kleinere dieren overleefden de uitsterving! Kleine zoogdieren die ondergronds konden graven, vogels (die dinosaurussen zijn!), vissen in de oceanen, insecten en sommige planten haalden het allemaal. Deze overlevenden waren over het algemeen kleiner, hadden minder voedsel nodig, of konden beschutting vinden tijdens de moeilijke tijd na de asteroide inslag."
                }
            },
            {
                question: {
                    en: "Are birds really dinosaurs?",
                    es: "¿Son realmente los pájaros dinosaurios?",
                    de: "Sind Vögel wirklich Dinosaurier?",
                    nl: "Zijn vogels echt dinosaurussen?"
                },
                options: [
                    { en: "Yes, birds are living dinosaurs!", es: "Sí, los pájaros son dinosaurios vivientes", de: "Ja, Vögel sind lebende Dinosaurier!", nl: "Ja, vogels zijn levende dinosaurussen!" },
                    { en: "No, birds are completely different", es: "No, los pájaros son completamente diferentes", de: "Nein, Vögel sind völlig anders", nl: "Nee, vogels zijn compleet anders" },
                    { en: "Birds are baby dinosaurs", es: "Los pájaros son bebés dinosaurios", de: "Vögel sind Baby-Dinosaurier", nl: "Vogels zijn baby dinosaurussen" },
                    { en: "Birds are robot dinosaurs", es: "Los pájaros son dinosaurios robot", de: "Vögel sind Roboter-Dinosaurier", nl: "Vogels zijn robot dinosaurussen" }
                ],
                correct: 0,
                explanation: {
                    en: "Yes! Birds are actually living dinosaurs - they evolved from small, feathered dinosaurs millions of years ago! Scientists consider birds to be theropod dinosaurs. This means that when you see a chicken, eagle, or penguin, you're looking at a modern dinosaur. So dinosaurs never really went extinct - they just evolved into birds and are still with us today!",
                    es: "Sí! Los pájaros son realmente dinosaurios vivientes - evolucionaron de dinosaurios pequeños con plumas hace millones de años. Los científicos consideran a los pájaros como dinosaurios terópodos. Esto significa que cuando ves un pollo, águila o pingüino, estás viendo un dinosaurio moderno. ¡Así que los dinosaurios nunca realmente se extinguieron - solo evolucionaron en pájaros y todavía están con nosotros hoy!",
                    de: "Ja! Vögel sind tatsächlich lebende Dinosaurier - sie entwickelten sich vor Millionen von Jahren aus kleinen, gefiederten Dinosauriern! Wissenschaftler betrachten Vögel als Theropoden-Dinosaurier. Das bedeutet, dass wenn du ein Huhn, einen Adler oder einen Pinguin siehst, du einen modernen Dinosaurier anschaust. So starben Dinosaurier nie wirklich aus - sie entwickelten sich nur zu Vögeln und sind heute noch bei uns!",
                    nl: "Ja! Vogels zijn eigenlijk levende dinosaurussen - ze evolueerden miljoenen jaren geleden uit kleine, gevederde dinosaurussen! Wetenschappers beschouwen vogels als theropode dinosaurussen. Dit betekent dat wanneer je een kip, adelaar of pinguïn ziet, je naar een moderne dinosaurus kijkt. Dus dinosaurussen stierven nooit echt uit - ze evolueerden gewoon tot vogels en zijn vandaag nog steeds bij ons!"
                }
            },
            {
                question: {
                    en: "What did the world look like right after the dinosaur extinction?",
                    es: "¿Cómo se veía el mundo justo después de la extinción de los dinosaurios?",
                    de: "Wie sah die Welt direkt nach der Dinosaurier-Extinction aus?",
                    nl: "Hoe zag de wereld eruit direct na de dinosaurus uitsterving?"
                },
                options: [
                    { en: "Dark, empty, and mostly covered with plants that survived", es: "Oscuro, vacío y mayormente cubierto de plantas que sobrevivieron", de: "Dunkel, leer und größtenteils mit überlebenden Pflanzen bedeckt", nl: "Donker, leeg en grotendeels bedekt met planten die overleefden" },
                    { en: "Exactly the same as before", es: "Exactamente igual que antes", de: "Genau dasselbe wie zuvor", nl: "Precies hetzelfde als ervoor" },
                    { en: "Full of new giant dinosaurs", es: "Lleno de dinosaurios gigantes nuevos", de: "Voller neuer riesiger Dinosaurier", nl: "Vol met nieuwe gigantische dinosaurussen" },
                    { en: "Covered with ice and snow forever", es: "Cubierto de hielo y nieve para siempre", de: "Für immer mit Eis und Schnee bedeckt", nl: "Voor altijd bedekt met ijs en sneeuw" }
                ],
                correct: 0,
                explanation: {
                    en: "Right after the extinction, Earth was a very different place! The landscape was empty without the huge dinosaurs. Ferns and small plants that could survive in low light began to take over. Small mammals, birds, and other survivors slowly started to explore and fill the empty spaces left by the dinosaurs. It was like nature was starting over with a clean slate!",
                    es: "Justo después de la extinción, la Tierra era un lugar muy diferente. El paisaje estaba vacío sin los dinosaurios enormes. Helechos y plantas pequeñas que podían sobrevivir en poca luz comenzaron a tomar control. Mamíferos pequeños, pájaros y otros sobrevivientes lentamente comenzaron a explorar y llenar los espacios vacíos dejados por los dinosaurios. ¡Era como si la naturaleza estuviera empezando de nuevo con una pizarra limpia!",
                    de: "Direkt nach der Extinction war die Erde ein sehr anderer Ort! Die Landschaft war leer ohne die riesigen Dinosaurier. Farne und kleine Pflanzen, die bei schwachem Licht überleben konnten, begannen zu übernehmen. Kleine Säugetiere, Vögel und andere Überlebende begannen langsam zu erkunden und die leeren Räume zu füllen, die die Dinosaurier hinterlassen hatten. Es war, als würde die Natur mit einer sauberen Schiefertafel von neuem anfangen!",
                    nl: "Direct na de uitsterving was de aarde een heel andere plek! Het landschap was leeg zonder de enorme dinosaurussen. Varens en kleine planten die konden overleven in weinig licht begonnen over te nemen. Kleine zoogdieren, vogels en andere overlevenden begonnen langzaam te verkennen en de lege ruimtes te vullen die door de dinosaurussen waren achtergelaten. Het was alsof de natuur opnieuw begon met een schone lei!"
                }
            },
            {
                question: {
                    en: "How do we know so much about the dinosaur extinction?",
                    es: "¿Cómo sabemos tanto sobre la extinción de los dinosaurios?",
                    de: "Woher wissen wir so viel über die Dinosaurier-Extinction?",
                    nl: "Hoe weten we zoveel over de dinosaurus uitsterving?"
                },
                options: [
                    { en: "Scientists study fossils and rocks from that time", es: "Los científicos estudian fósiles y rocas de esa época", de: "Wissenschaftler studieren Fossilien und Gesteine aus jener Zeit", nl: "Wetenschappers bestuderen fossielen en rotsen uit die tijd" },
                    { en: "Dinosaurs left behind video recordings", es: "Los dinosaurios dejaron grabaciones de video", de: "Dinosaurier hinterließen Videoaufzeichnungen", nl: "Dinosaurussen lieten video-opnames achter" },
                    { en: "Time travelers went back to watch it happen", es: "Viajeros del tiempo regresaron para verlo suceder", de: "Zeitreisende gingen zurück, um es geschehen zu sehen", nl: "Tijdreizigers gingen terug om het te zien gebeuren" },
                    { en: "We don't actually know anything about it", es: "En realidad no sabemos nada al respecto", de: "Wir wissen eigentlich nichts darüber", nl: "We weten er eigenlijk niets over" }
                ],
                correct: 0,
                explanation: {
                    en: "Scientists are like detectives who study clues left behind in rocks and fossils! They found a special layer of rock around the world that contains lots of iridium (a metal rare on Earth but common in asteroids). They also found shocked quartz crystals and the crater in Mexico where the asteroid hit. Fossils show which creatures lived before and after the extinction.",
                    es: "Los científicos son como detectivos que estudian pistas dejadas en rocas y fósiles. Encontraron una capa especial de roca alrededor del mundo que contiene mucho iridio (un metal raro en la Tierra pero común en asteroides). También encontraron cristales de cuarzo impactado y el cráter en México donde el asteroide golpeó. Los fósiles muestran qué criaturas vivieron antes y después de la extinción.",
                    de: "Wissenschaftler sind wie Detektive, die Hinweise studieren, die in Gesteinen und Fossilien hinterlassen wurden! Sie fanden eine spezielle Gesteinsschicht auf der ganzen Welt, die viel Iridium enthält (ein Metall, das auf der Erde selten, aber in Asteroiden häufig ist). Sie fanden auch geschockte Quarzkristalle und den Krater in Mexiko, wo der Asteroid einschlug. Fossilien zeigen, welche Kreaturen vor und nach der Extinction lebten.",
                    nl: "Wetenschappers zijn zoals detective die aanwijzingen bestuderen die achtergelaten zijn in rotsen en fossielen! Ze vonden een speciale rotslaag over de hele wereld die veel iridium bevat (een metaal dat zeldzaam is op aarde maar veel voorkomt in asteroiden). Ze vonden ook geschokte kwartskristallen en de krater in Mexico waar de asteroide insloeg. Fossielen tonen welke wezens leefden voor en na de uitsterving."
                }
            },
            {
                question: {
                    en: "What can the dinosaur extinction teach us about protecting Earth today?",
                    es: "¿Qué nos puede enseñar la extinción de los dinosaurios sobre proteger la Tierra hoy?",
                    de: "Was kann uns die Dinosaurier-Extinction über den Schutz der Erde heute lehren?",
                    nl: "Wat kan de dinosaurus uitsterving ons leren over het beschermen van de aarde vandaag?"
                },
                options: [
                    { en: "That we need to watch for asteroids and protect our environment", es: "Que necesitamos vigilar asteroides y proteger nuestro medio ambiente", de: "Dass wir nach Asteroiden Ausschau halten und unsere Umwelt schützen müssen", nl: "Dat we moeten uitkijken naar asteroiden en ons milieu moeten beschermen" },
                    { en: "Nothing - extinctions only happened in the past", es: "Nada - las extinciones solo pasaron en el pasado", de: "Nichts - Aussterbeereignisse passierten nur in der Vergangenheit", nl: "Niets - uitstervingen gebeurden alleen in het verleden" },
                    { en: "That big animals are not important", es: "Que los animales grandes no son importantes", de: "Dass große Tiere nicht wichtig sind", nl: "Dat grote dieren niet belangrijk zijn" },
                    { en: "That we should stop studying science", es: "Que deberíamos dejar de estudiar ciencia", de: "Dass wir aufhören sollten, Wissenschaft zu studieren", nl: "Dat we moeten stoppen met het bestuderen van wetenschap" }
                ],
                correct: 0,
                explanation: {
                    en: "The dinosaur extinction teaches us important lessons about protecting our planet! Scientists now watch the sky for dangerous asteroids and work on plans to deflect them if needed. We also learn that sudden environmental changes can be very dangerous for life, so we need to take good care of our environment and all the amazing creatures that live on Earth with us.",
                    es: "La extinción de los dinosaurios nos enseña lecciones importantes sobre proteger nuestro planeta. Los científicos ahora vigilan el cielo en busca de asteroides peligrosos y trabajan en planes para desviarlos si es necesario. También aprendemos que cambios ambientales repentinos pueden ser muy peligrosos para la vida, así que necesitamos cuidar bien nuestro medio ambiente y todas las criaturas increíbles que viven en la Tierra con nosotros.",
                    de: "Die Dinosaurier-Extinction lehrt uns wichtige Lektionen über den Schutz unseres Planeten! Wissenschaftler beobachten jetzt den Himmel nach gefährlichen Asteroiden und arbeiten an Plänen, sie bei Bedarf abzulenken. Wir lernen auch, dass plötzliche Umweltveränderungen sehr gefährlich für das Leben sein können, also müssen wir gut auf unsere Umwelt und alle erstaunlichen Kreaturen aufpassen, die mit uns auf der Erde leben.",
                    nl: "De dinosaurus uitsterving leert ons belangrijke lessen over het beschermen van onze planeet! Wetenschappers kijken nu naar de hemel voor gevaarlijke asteroiden en werken aan plannen om ze af te buigen indien nodig. We leren ook dat plotselinge milieuveranderingen heel gevaarlijk kunnen zijn voor leven, dus moeten we goed zorgen voor ons milieu en alle verbazingwekkende wezens die op aarde met ons leven."
                }
            },
            {
                question: {
                    en: "How did life on Earth recover after the dinosaur extinction?",
                    es: "¿Cómo se recuperó la vida en la Tierra después de la extinción de los dinosaurios?",
                    de: "Wie erholte sich das Leben auf der Erde nach der Dinosaurier-Extinction?",
                    nl: "Hoe herstelde het leven op aarde na de dinosaurus uitsterving?"
                },
                options: [
                    { en: "Slowly, over millions of years with new species evolving", es: "Lentamente, durante millones de años con nuevas especies evolucionando", de: "Langsam, über Millionen von Jahren mit neuen Arten, die sich entwickelten", nl: "Langzaam, gedurende miljoenen jaren met nieuwe soorten die evolueerden" },
                    { en: "Everything went back to exactly how it was before", es: "Todo regresó exactamente a como era antes", de: "Alles kehrte genau zurück, wie es vorher war", nl: "Alles ging terug naar precies hoe het was ervoor" },
                    { en: "New dinosaurs immediately appeared", es: "Nuevos dinosaurios aparecieron inmediatamente", de: "Neue Dinosaurier erschienen sofort", nl: "Nieuwe dinosaurussen verschenen onmiddellijk" },
                    { en: "Life never recovered", es: "La vida nunca se recuperó", de: "Das Leben erholte sich nie", nl: "Het leven herstelde nooit" }
                ],
                correct: 0,
                explanation: {
                    en: "Life slowly recovered over millions of years after the extinction! The surviving animals and plants gradually evolved into new species to fill the empty spaces left by dinosaurs. Mammals grew larger and more diverse, birds flourished, and new types of plants appeared. This recovery process shows how resilient and creative life can be, even after catastrophic events.",
                    es: "La vida lentamente se recuperó durante millones de años después de la extinción. Los animales y plantas sobrevivientes gradualmente evolucionaron en nuevas especies para llenar los espacios vacíos dejados por los dinosaurios. Los mamíferos crecieron más y se volvieron más diversos, los pájaros florecieron, y aparecieron nuevos tipos de plantas. Este proceso de recuperación muestra qué tan resistente y creativa puede ser la vida, incluso después de eventos catastróficos.",
                    de: "Das Leben erholte sich langsam über Millionen von Jahren nach der Extinction! Die überlebenden Tiere und Pflanzen entwickelten sich allmählich zu neuen Arten, um die leeren Räume zu füllen, die die Dinosaurier hinterlassen hatten. Säugetiere wurden größer und vielfältiger, Vögel blühten auf, und neue Pflanzenarten erschienen. Dieser Erholungsprozess zeigt, wie widerstandsfähig und kreativ Leben sein kann, selbst nach katastrophalen Ereignissen.",
                    nl: "Het leven herstelde langzaam gedurende miljoenen jaren na de uitsterving! De overlevende dieren en planten evolueerden geleidelijk tot nieuwe soorten om de lege ruimtes te vullen die door dinosaurussen waren achtergelaten. Zoogdieren werden groter en diverser, vogels bloeiden op, en nieuwe soorten planten verschenen. Dit herstelproces toont hoe veerkrachtig en creatief leven kan zijn, zelfs na catastrofale gebeurtenissen."
                }
            },
            {
                question: {
                    en: "What makes studying dinosaur extinction so exciting for scientists?",
                    es: "¿Qué hace que estudiar la extinción de dinosaurios sea tan emocionante para los científicos?",
                    de: "Was macht das Studium der Dinosaurier-Extinction für Wissenschaftler so aufregend?",
                    nl: "Wat maakt het bestuderen van dinosaurus uitsterving zo spannend voor wetenschappers?"
                },
                options: [
                    { en: "It's like solving the greatest mystery in Earth's history", es: "Es como resolver el misterio más grande en la historia de la Tierra", de: "Es ist wie das größte Geheimnis der Erdgeschichte zu lösen", nl: "Het is zoals het oplossen van het grootste mysterie in de geschiedenis van de aarde" },
                    { en: "They want to bring dinosaurs back to life", es: "Quieren traer dinosaurios de vuelta a la vida", de: "Sie wollen Dinosaurier zum Leben erwecken", nl: "Ze willen dinosaurussen tot leven brengen" },
                    { en: "It's not exciting at all", es: "No es emocionante en absoluto", de: "Es ist überhaupt nicht aufregend", nl: "Het is helemaal niet spannend" },
                    { en: "They get paid lots of money for it", es: "Les pagan mucho dinero por eso", de: "Sie bekommen viel Geld dafür", nl: "Ze krijgen er veel geld voor" }
                ],
                correct: 0,
                explanation: {
                    en: "Studying dinosaur extinction is like being a detective solving the biggest mystery in Earth's history! Scientists get to piece together clues from 66 million years ago to understand what happened to these amazing creatures. Each new discovery helps us understand how life responds to major changes and teaches us about our own planet's future. It's exciting because there are still mysteries to solve!",
                    es: "Estudiar la extinción de dinosaurios es como ser un detective resolviendo el misterio más grande en la historia de la Tierra. Los científicos pueden juntar pistas de hace 66 millones de años para entender qué pasó con estas criaturas increíbles. Cada nuevo descubrimiento nos ayuda a entender cómo la vida responde a cambios importantes y nos enseña sobre el futuro de nuestro propio planeta. ¡Es emocionante porque todavía hay misterios por resolver!",
                    de: "Das Studium der Dinosaurier-Extinction ist wie ein Detektiv zu sein, der das größte Geheimnis der Erdgeschichte löst! Wissenschaftler können Hinweise von vor 66 Millionen Jahren zusammenfügen, um zu verstehen, was mit diesen erstaunlichen Kreaturen passierte. Jede neue Entdeckung hilft uns zu verstehen, wie Leben auf wichtige Veränderungen reagiert und lehrt uns über die Zukunft unseres eigenen Planeten. Es ist aufregend, weil es noch Geheimnisse zu lösen gibt!",
                    nl: "Het bestuderen van dinosaurus uitsterving is zoals een detective zijn die het grootste mysterie in de geschiedenis van de aarde oplost! Wetenschappers kunnen aanwijzingen van 66 miljoen jaar geleden samenvoegen om te begrijpen wat er gebeurde met deze verbazingwekkende wezens. Elke nieuwe ontdekking helpt ons begrijpen hoe leven reageert op grote veranderingen en leert ons over de toekomst van onze eigen planeet. Het is spannend omdat er nog steeds mysteries zijn om op te lossen!"
                }
            },
            {
                question: {
                    en: "What is the most important thing children can learn from the dinosaur extinction story?",
                    es: "¿Cuál es lo más importante que los niños pueden aprender de la historia de la extinción de dinosaurios?",
                    de: "Was ist das Wichtigste, was Kinder aus der Geschichte der Dinosaurier-Extinction lernen können?",
                    nl: "Wat is het belangrijkste dat kinderen kunnen leren van het dinosaurus uitsterving verhaal?"
                },
                options: [
                    { en: "That life is precious and we should take care of our planet and all its creatures", es: "Que la vida es preciosa y debemos cuidar nuestro planeta y todas sus criaturas", de: "Dass Leben kostbar ist und wir auf unseren Planeten und alle seine Kreaturen aufpassen sollten", nl: "Dat leven kostbaar is en dat we voor onze planeet en al zijn wezens moeten zorgen" },
                    { en: "That extinction is not important", es: "Que la extinción no es importante", de: "Dass Aussterben nicht wichtig ist", nl: "Dat uitsterving niet belangrijk is" },
                    { en: "That only big animals matter", es: "Que solo los animales grandes importan", de: "Dass nur große Tiere wichtig sind", nl: "Dat alleen grote dieren belangrijk zijn" },
                    { en: "That we should be afraid of asteroids", es: "Que deberíamos temer a los asteroides", de: "Dass wir Angst vor Asteroiden haben sollten", nl: "Dat we bang moeten zijn voor asteroiden" }
                ],
                correct: 0,
                explanation: {
                    en: "The dinosaur extinction story teaches us that every creature on Earth is special and important! It shows us that our planet and all its amazing animals and plants need our care and protection. Just like the small mammals that survived and grew into wonderful new species, every life form - no matter how small - can be important for Earth's future. This inspires us to be good caretakers of our beautiful planet!",
                    es: "La historia de la extinción de dinosaurios nos enseña que cada criatura en la Tierra es especial e importante. Nos muestra que nuestro planeta y todos sus animales y plantas increíbles necesitan nuestro cuidado y protección. Igual que los mamíferos pequeños que sobrevivieron y crecieron en especies nuevas maravillosas, cada forma de vida - sin importar qué tan pequeña - puede ser importante para el futuro de la Tierra. ¡Esto nos inspira a ser buenos cuidadores de nuestro hermoso planeta!",
                    de: "Die Geschichte der Dinosaurier-Extinction lehrt uns, dass jede Kreatur auf der Erde besonders und wichtig ist! Sie zeigt uns, dass unser Planet und alle seine erstaunlichen Tiere und Pflanzen unsere Fürsorge und unseren Schutz brauchen. Genau wie die kleinen Säugetiere, die überlebten und zu wunderbaren neuen Arten heranwuchsen, kann jede Lebensform - egal wie klein - wichtig für die Zukunft der Erde sein. Das inspiriert uns, gute Hüter unseres schönen Planeten zu sein!",
                    nl: "Het dinosaurus uitsterving verhaal leert ons dat elk wezen op aarde speciaal en belangrijk is! Het toont ons dat onze planeet en al zijn verbazingwekkende dieren en planten onze zorg en bescherming nodig hebben. Net zoals de kleine zoogdieren die overleefden en uitgroeiden tot prachtige nieuwe soorten, kan elke levensvorm - hoe klein ook - belangrijk zijn voor de toekomst van de aarde. Dit inspireert ons om goede verzorgers van onze mooie planeet te zijn!"
                }
            },
            {
                question: {
                    en: "Where can we see dinosaur bones today?",
                    es: "¿Dónde podemos ver huesos de dinosaurios hoy?",
                    de: "Wo können wir heute Dinosaurierknochen sehen?",
                    nl: "Waar kunnen we vandaag dinosaurusbotten zien?"
                },
                options: [
                    { en: "In museums around the world", es: "En museos alrededor del mundo", de: "In Museen auf der ganzen Welt", nl: "In musea over de hele wereld" },
                    { en: "Only in movies", es: "Solo en películas", de: "Nur in Filmen", nl: "Alleen in films" },
                    { en: "In grocery stores", es: "En tiendas de comestibles", de: "In Lebensmittelgeschäften", nl: "In supermarkten" },
                    { en: "Nowhere - they all disappeared", es: "En ningún lugar - todos desaparecieron", de: "Nirgendwo - sie sind alle verschwunden", nl: "Nergens - ze zijn allemaal verdwenen" }
                ],
                correct: 0,
                explanation: {
                    en: "We can see amazing dinosaur fossils and skeletons in museums all around the world! Museums have collected and displayed dinosaur bones so everyone can learn about these incredible creatures. Some famous dinosaur museums include the Natural History Museum in London, the Smithsonian in Washington D.C., and many others that help us discover the amazing world of dinosaurs!",
                    es: "Podemos ver fósiles y esqueletos increíbles de dinosaurios en museos de todo el mundo. Los museos han coleccionado y exhibido huesos de dinosaurios para que todos puedan aprender sobre estas criaturas increíbles. Algunos museos famosos de dinosaurios incluyen el Museo de Historia Natural de Londres, el Smithsonian en Washington D.C., y muchos otros que nos ayudan a descubrir el mundo increíble de los dinosaurios.",
                    de: "Wir können erstaunliche Dinosaurierfossilien und -skelette in Museen auf der ganzen Welt sehen! Museen haben Dinosaurierknochen gesammelt und ausgestellt, damit jeder über diese unglaublichen Kreaturen lernen kann. Einige berühmte Dinosauriermuseen sind das Natural History Museum in London, das Smithsonian in Washington D.C., und viele andere, die uns helfen, die erstaunliche Welt der Dinosaurier zu entdecken!",
                    nl: "We kunnen verbazingwekkende dinosaurusfossielen en skeletten zien in musea over de hele wereld! Musea hebben dinosaurusbotten verzameld en tentoongesteld zodat iedereen kan leren over deze ongelooflijke wezens. Enkele beroemde dinosaurusmusea zijn het Natural History Museum in Londen, het Smithsonian in Washington D.C., en vele anderen die ons helpen de verbazingwekkende wereld van dinosaurussen te ontdekken!"
                }
            },
            {
                question: {
                    en: "How do dinosaur fossils help us learn about ancient climates?",
                    es: "¿Cómo nos ayudan los fósiles de dinosaurios a aprender sobre climas antiguos?",
                    de: "Wie helfen uns Dinosaurierfossilien, etwas über alte Klimas zu lernen?",
                    nl: "Hoe helpen dinosaurusfossielen ons leren over oude klimaten?"
                },
                options: [
                    { en: "They show us what plants and environments existed long ago", es: "Nos muestran qué plantas y ambientes existían hace mucho tiempo", de: "Sie zeigen uns, welche Pflanzen und Umgebungen vor langer Zeit existierten", nl: "Ze laten ons zien welke planten en omgevingen lang geleden bestonden" },
                    { en: "Fossils contain ancient weather reports", es: "Los fósiles contienen reportes del clima antiguos", de: "Fossilien enthalten alte Wetterberichte", nl: "Fossielen bevatten oude weersvoorspellingen" },
                    { en: "They don't help us learn about climate", es: "No nos ayudan a aprender sobre el clima", de: "Sie helfen uns nicht beim Lernen über das Klima", nl: "Ze helpen ons niet leren over klimaat" },
                    { en: "Dinosaurs controlled the weather", es: "Los dinosaurios controlaban el clima", de: "Dinosaurier kontrollierten das Wetter", nl: "Dinosaurussen controleerden het weer" }
                ],
                correct: 0,
                explanation: {
                    en: "Dinosaur fossils are like climate detectives from the past! When scientists find dinosaur fossils, they also find fossils of ancient plants, pollen, and other clues that tell us what the environment was like millions of years ago. By studying these together, we can understand how warm or cold it was, what plants grew, and how the climate changed over time.",
                    es: "Los fósiles de dinosaurios son como detectives del clima del pasado. Cuando los científicos encuentran fósiles de dinosaurios, también encuentran fósiles de plantas antiguas, polen y otras pistas que nos dicen cómo era el ambiente hace millones de años. Al estudiar estos juntos, podemos entender qué tan cálido o frío era, qué plantas crecían, y cómo el clima cambió con el tiempo.",
                    de: "Dinosaurierfossilien sind wie Klimadetektive aus der Vergangenheit! Wenn Wissenschaftler Dinosaurierfossilien finden, finden sie auch Fossilien alter Pflanzen, Pollen und andere Hinweise, die uns sagen, wie die Umwelt vor Millionen von Jahren war. Durch das gemeinsame Studium können wir verstehen, wie warm oder kalt es war, welche Pflanzen wuchsen und wie sich das Klima über die Zeit änderte.",
                    nl: "Dinosaurusfossielen zijn zoals klimaatdetectives uit het verleden! Wanneer wetenschappers dinosaurusfossielen vinden, vinden ze ook fossielen van oude planten, stuifmeel en andere aanwijzingen die ons vertellen hoe het milieu er miljoenen jaren geleden uitzag. Door deze samen te bestuderen, kunnen we begrijpen hoe warm of koud het was, welke planten groeiden, en hoe het klimaat veranderde door de tijd."
                }
            },
            {
                question: {
                    en: "What happened to the crater where the extinction asteroid hit Earth?",
                    es: "¿Qué pasó con el cráter donde el asteroide de extinción golpeó la Tierra?",
                    de: "Was passierte mit dem Krater, wo der Extinktions-Asteroid die Erde traf?",
                    nl: "Wat gebeurde er met de krater waar de uitsterving-asteroide de aarde raakte?"
                },
                options: [
                    { en: "It's still there but mostly hidden under rocks and water", es: "Todavía está ahí pero mayormente oculto bajo rocas y agua", de: "Er ist noch da, aber größtenteils unter Gestein und Wasser versteckt", nl: "Het is er nog maar grotendeels verborgen onder rotsen en water" },
                    { en: "It completely disappeared", es: "Desapareció completamente", de: "Er verschwand völlig", nl: "Het verdween volledig" },
                    { en: "It turned into a volcano", es: "Se convirtió en un volcán", de: "Er wurde zu einem Vulkan", nl: "Het werd een vulkaan" },
                    { en: "It became a giant lake of ice cream", es: "Se convirtió en un lago gigante de helado", de: "Er wurde zu einem riesigen See aus Eis", nl: "Het werd een gigantisch meer van ijs" }
                ],
                correct: 0,
                explanation: {
                    en: "The asteroid impact crater is still there! It's called the Chicxulub crater and it's located in Mexico, partly under the ocean and partly on land. Over 66 million years, layers of rock and sediment have covered most of it, but scientists can still detect it using special instruments. The crater is about 150 miles wide - that's huge!",
                    es: "El cráter del impacto del asteroide todavía está ahí. Se llama cráter Chicxulub y está ubicado en México, parcialmente bajo el océano y parcialmente en tierra. Durante 66 millones de años, capas de roca y sedimento han cubierto la mayoría de él, pero los científicos todavía pueden detectarlo usando instrumentos especiales. ¡El cráter tiene unas 150 millas de ancho - eso es enorme!",
                    de: "Der Asteroideneinschlagskrater ist noch da! Er heißt Chicxulub-Krater und liegt in Mexiko, teilweise unter dem Ozean und teilweise an Land. Über 66 Millionen Jahre haben Gesteins- und Sedimentschichten das meiste davon bedeckt, aber Wissenschaftler können ihn immer noch mit speziellen Instrumenten entdecken. Der Krater ist etwa 150 Meilen breit - das ist riesig!",
                    nl: "De asteroide-inslagkrater is er nog! Het heet de Chicxulub-krater en ligt in Mexico, deels onder de oceaan en deels op het land. Gedurende 66 miljoen jaar hebben lagen rots en sediment het grootste deel ervan bedekt, maar wetenschappers kunnen het nog steeds detecteren met speciale instrumenten. De krater is ongeveer 150 mijl breed - dat is enorm!"
                }
            },
            {
                question: {
                    en: "How does studying dinosaur extinction help us understand modern animals?",
                    es: "¿Cómo nos ayuda estudiar la extinción de dinosaurios a entender los animales modernos?",
                    de: "Wie hilft uns das Studium der Dinosaurier-Extinction, moderne Tiere zu verstehen?",
                    nl: "Hoe helpt het bestuderen van dinosaurus uitsterving ons moderne dieren te begrijpen?"
                },
                options: [
                    { en: "It shows us how animals adapt and survive challenges", es: "Nos muestra cómo los animales se adaptan y sobreviven desafíos", de: "Es zeigt uns, wie Tiere sich anpassen und Herausforderungen überleben", nl: "Het toont ons hoe dieren zich aanpassen en uitdagingen overleven" },
                    { en: "Modern animals are exactly like dinosaurs", es: "Los animales modernos son exactamente como los dinosaurios", de: "Moderne Tiere sind genau wie Dinosaurier", nl: "Moderne dieren zijn precies zoals dinosaurussen" },
                    { en: "It doesn't help us understand modern animals", es: "No nos ayuda a entender los animales modernos", de: "Es hilft uns nicht, moderne Tiere zu verstehen", nl: "Het helpt ons niet moderne dieren te begrijpen" },
                    { en: "All animals today will become extinct soon", es: "Todos los animales de hoy se extinguirán pronto", de: "Alle Tiere heute werden bald aussterben", nl: "Alle dieren van vandaag zullen binnenkort uitsterven" }
                ],
                correct: 0,
                explanation: {
                    en: "Studying dinosaur extinction teaches us how animals respond to major environmental changes! We learn which traits help animals survive difficult times - like being small, eating different foods, or living in various habitats. This knowledge helps us understand why some modern animals are endangered and how we can help protect them from extinction.",
                    es: "Estudiar la extinción de dinosaurios nos enseña cómo los animales responden a cambios ambientales importantes. Aprendemos qué rasgos ayudan a los animales a sobrevivir tiempos difíciles - como ser pequeños, comer diferentes alimentos, o vivir en varios hábitats. Este conocimiento nos ayuda a entender por qué algunos animales modernos están en peligro y cómo podemos ayudar a protegerlos de la extinción.",
                    de: "Das Studium der Dinosaurier-Extinction lehrt uns, wie Tiere auf große Umweltveränderungen reagieren! Wir lernen, welche Eigenschaften Tieren helfen, schwierige Zeiten zu überleben - wie klein zu sein, verschiedene Nahrung zu essen oder in verschiedenen Lebensräumen zu leben. Dieses Wissen hilft uns zu verstehen, warum einige moderne Tiere bedroht sind und wie wir helfen können, sie vor dem Aussterben zu schützen.",
                    nl: "Het bestuderen van dinosaurus uitsterving leert ons hoe dieren reageren op grote milieuveranderingen! We leren welke eigenschappen dieren helpen moeilijke tijden te overleven - zoals klein zijn, verschillende voedsel eten, of in verschillende habitats leven. Deze kennis helpt ons begrijpen waarom sommige moderne dieren bedreigd zijn en hoe we kunnen helpen ze te beschermen tegen uitsterving."
                }
            },
            {
                question: {
                    en: "What would happen if another large asteroid hit Earth today?",
                    es: "¿Qué pasaría si otro asteroide grande golpeara la Tierra hoy?",
                    de: "Was würde passieren, wenn heute ein weiterer großer Asteroid die Erde träfe?",
                    nl: "Wat zou er gebeuren als een andere grote asteroide vandaag de aarde zou raken?"
                },
                options: [
                    { en: "Scientists are working on ways to protect Earth from asteroids", es: "Los científicos están trabajando en formas de proteger la Tierra de asteroides", de: "Wissenschaftler arbeiten an Wegen, die Erde vor Asteroiden zu schützen", nl: "Wetenschappers werken aan manieren om de aarde te beschermen tegen asteroiden" },
                    { en: "Nothing bad would happen", es: "Nada malo pasaría", de: "Nichts Schlimmes würde passieren", nl: "Er zou niets ergs gebeuren" },
                    { en: "We would all turn into dinosaurs", es: "Todos nos convertiríamos en dinosaurios", de: "Wir würden alle zu Dinosauriern", nl: "We zouden allemaal dinosaurussen worden" },
                    { en: "The asteroid would bounce off Earth", es: "El asteroide rebotaría de la Tierra", de: "Der Asteroid würde von der Erde abprallen", nl: "De asteroide zou van de aarde afketsen" }
                ],
                correct: 0,
                explanation: {
                    en: "Scientists today are working hard to protect Earth from dangerous asteroids! They use telescopes to watch the sky and track asteroids that might come close to Earth. They're also developing technology that could push a dangerous asteroid away from Earth if needed. Learning from the dinosaur extinction helps us be prepared and protect our planet!",
                    es: "Los científicos de hoy están trabajando duro para proteger la Tierra de asteroides peligrosos. Usan telescopios para observar el cielo y rastrear asteroides que podrían acercarse a la Tierra. También están desarrollando tecnología que podría alejar un asteroide peligroso de la Tierra si fuera necesario. ¡Aprender de la extinción de los dinosaurios nos ayuda a estar preparados y proteger nuestro planeta!",
                    de: "Wissenschaftler heute arbeiten hart daran, die Erde vor gefährlichen Asteroiden zu schützen! Sie verwenden Teleskope, um den Himmel zu beobachten und Asteroiden zu verfolgen, die der Erde nahekommen könnten. Sie entwickeln auch Technologie, die einen gefährlichen Asteroiden bei Bedarf von der Erde wegdrücken könnte. Das Lernen aus der Dinosaurier-Extinction hilft uns, vorbereitet zu sein und unseren Planeten zu schützen!",
                    nl: "Wetenschappers van vandaag werken hard om de aarde te beschermen tegen gevaarlijke asteroiden! Ze gebruiken telescopen om de hemel te observeren en asteroiden te volgen die dicht bij de aarde kunnen komen. Ze ontwikkelen ook technologie die een gevaarlijke asteroide van de aarde weg zou kunnen duwen indien nodig. Leren van de dinosaurus uitsterving helpt ons voorbereid te zijn en onze planeet te beschermen!"
                }
            },
            {
                question: {
                    en: "Why is the dinosaur extinction story one of the most important discoveries in science?",
                    es: "¿Por qué es la historia de la extinción de dinosaurios uno de los descubrimientos más importantes en la ciencia?",
                    de: "Warum ist die Geschichte der Dinosaurier-Extinction eine der wichtigsten Entdeckungen in der Wissenschaft?",
                    nl: "Waarom is het dinosaurus uitsterving verhaal een van de belangrijkste ontdekkingen in de wetenschap?"
                },
                options: [
                    { en: "It shows us that life can change dramatically and teaches us about our planet", es: "Nos muestra que la vida puede cambiar dramáticamente y nos enseña sobre nuestro planeta", de: "Es zeigt uns, dass sich das Leben dramatisch ändern kann und lehrt uns über unseren Planeten", nl: "Het laat ons zien dat leven dramatisch kan veranderen en leert ons over onze planeet" },
                    { en: "It proves dinosaurs were not real", es: "Prueba que los dinosaurios no eran reales", de: "Es beweist, dass Dinosaurier nicht real waren", nl: "Het bewijst dat dinosaurussen niet echt waren" },
                    { en: "It's not important to science", es: "No es importante para la ciencia", de: "Es ist nicht wichtig für die Wissenschaft", nl: "Het is niet belangrijk voor de wetenschap" },
                    { en: "It only matters to children", es: "Solo importa a los niños", de: "Es ist nur für Kinder wichtig", nl: "Het is alleen belangrijk voor kinderen" }
                ],
                correct: 0,
                explanation: {
                    en: "The dinosaur extinction story is one of the most important scientific discoveries because it reveals how life on Earth can change suddenly and dramatically! It teaches us about mass extinctions, climate change, evolution, and asteroid impacts. This knowledge helps us understand our planet's history and prepare for the future. It shows that science can solve amazing mysteries by studying evidence from millions of years ago!",
                    es: "La historia de la extinción de dinosaurios es uno de los descubrimientos científicos más importantes porque revela cómo la vida en la Tierra puede cambiar repentina y dramáticamente. Nos enseña sobre extinciones masivas, cambio climático, evolución e impactos de asteroides. Este conocimiento nos ayuda a entender la historia de nuestro planeta y prepararnos para el futuro. ¡Muestra que la ciencia puede resolver misterios increíbles estudiando evidencia de hace millones de años!",
                    de: "Die Geschichte der Dinosaurier-Extinction ist eine der wichtigsten wissenschaftlichen Entdeckungen, weil sie enthüllt, wie sich das Leben auf der Erde plötzlich und dramatisch ändern kann! Sie lehrt uns über Massenaussterben, Klimawandel, Evolution und Asteroideneinschläge. Dieses Wissen hilft uns, die Geschichte unseres Planeten zu verstehen und uns auf die Zukunft vorzubereiten. Es zeigt, dass Wissenschaft erstaunliche Geheimnisse lösen kann, indem sie Beweise von vor Millionen Jahren studiert!",
                    nl: "Het dinosaurus uitsterving verhaal is een van de belangrijkste wetenschappelijke ontdekkingen omdat het onthult hoe leven op aarde plotseling en dramatisch kan veranderen! Het leert ons over massa-uitstervingen, klimaatverandering, evolutie en asteroide-inslagen. Deze kennis helpt ons de geschiedenis van onze planeet te begrijpen en ons voor te bereiden op de toekomst. Het toont dat wetenschap verbazingwekkende mysteries kan oplossen door bewijs van miljoenen jaren geleden te bestuderen!"
                }
            },
            {
                question: {
                    en: "What makes the dinosaur extinction story so fascinating for people of all ages?",
                    es: "¿Qué hace la historia de la extinción de dinosaurios tan fascinante para personas de todas las edades?",
                    de: "Was macht die Geschichte der Dinosaurier-Extinction für Menschen aller Altersgruppen so faszinierend?",
                    nl: "Wat maakt het dinosaurus uitsterving verhaal zo fascinerend voor mensen van alle leeftijden?"
                },
                options: [
                    { en: "It combines mystery, adventure, and real science about amazing creatures", es: "Combina misterio, aventura y ciencia real sobre criaturas increíbles", de: "Es kombiniert Geheimnis, Abenteuer und echte Wissenschaft über erstaunliche Kreaturen", nl: "Het combineert mysterie, avontuur en echte wetenschap over verbazingwekkende wezens" },
                    { en: "It's only interesting to scientists", es: "Solo es interesante para los científicos", de: "Es ist nur für Wissenschaftler interessant", nl: "Het is alleen interessant voor wetenschappers" },
                    { en: "People don't find it fascinating", es: "La gente no lo encuentra fascinante", de: "Menschen finden es nicht faszinierend", nl: "Mensen vinden het niet fascinerend" },
                    { en: "It's too complicated for most people", es: "Es demasiado complicado para la mayoría de la gente", de: "Es ist zu kompliziert für die meisten Menschen", nl: "Het is te ingewikkeld voor de meeste mensen" }
                ],
                correct: 0,
                explanation: {
                    en: "The dinosaur extinction story captures everyone's imagination because it has everything: giant creatures, cosmic catastrophes, scientific detective work, and important lessons about life on Earth! It's like the ultimate adventure story that really happened. People love learning about these amazing animals and the dramatic events that changed our planet forever. It shows that science can be incredibly exciting and full of wonder!",
                    es: "La historia de la extinción de dinosaurios captura la imaginación de todos porque lo tiene todo: criaturas gigantes, catástrofes cósmicas, trabajo detectivesco científico y lecciones importantes sobre la vida en la Tierra. Es como la historia de aventura definitiva que realmente pasó. A la gente le encanta aprender sobre estos animales increíbles y los eventos dramáticos que cambiaron nuestro planeta para siempre. ¡Muestra que la ciencia puede ser increíblemente emocionante y llena de maravilla!",
                    de: "Die Geschichte der Dinosaurier-Extinction fesselt jedermanns Vorstellungskraft, weil sie alles hat: riesige Kreaturen, kosmische Katastrophen, wissenschaftliche Detektivarbeit und wichtige Lektionen über das Leben auf der Erde! Es ist wie die ultimative Abenteuergeschichte, die wirklich passierte. Menschen lieben es, über diese erstaunlichen Tiere und die dramatischen Ereignisse zu lernen, die unseren Planeten für immer veränderten. Es zeigt, dass Wissenschaft unglaublich aufregend und voller Wunder sein kann!",
                    nl: "Het dinosaurus uitsterving verhaal grijpt ieders verbeelding omdat het alles heeft: gigantische wezens, kosmische catastrofes, wetenschappelijk detectivewerk, en belangrijke lessen over leven op aarde! Het is zoals het ultieme avonturenverhaal dat echt gebeurde. Mensen houden ervan te leren over deze verbazingwekkende dieren en de dramatische gebeurtenissen die onze planeet voor altijd veranderden. Het toont dat wetenschap ongelooflijk spannend en vol wonder kan zijn!"
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/dinosaurs', level10);
    }
})();