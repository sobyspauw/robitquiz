(function() {
    const level8 = {
        name: {
            en: "Forces and Motion",
            es: "Fuerzas y Movimiento",
            de: "Kräfte und Bewegung",
            nl: "Krachten en Beweging"
        },
        questions: [
            {
                question: {
                    en: "What force pulls things down to Earth?",
                    es: "¿Qué fuerza atrae las cosas hacia la Tierra?",
                    de: "Welche Kraft zieht Dinge zur Erde hinunter?",
                    nl: "Welke kracht trekt dingen naar de aarde toe?"
                },
                options: [
                    { en: "Gravity", es: "Gravedad", de: "Schwerkraft", nl: "Zwaartekracht" },
                    { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
                    { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" },
                    { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" }
                ],
                correct: 0,
                explanation: {
                    en: "Gravity is the force that pulls all objects with mass toward each other, keeping us on Earth's surface and making things fall down.",
                    es: "La gravedad es la fuerza que atrae todos los objetos con masa uno hacia el otro, manteniéndonos en la superficie de la Tierra y haciendo que las cosas caigan.",
                    de: "Schwerkraft ist die Kraft, die alle Objekte mit Masse zueinander zieht, uns auf der Erdoberfläche hält und Dinge nach unten fallen lässt.",
                    nl: "Zwaartekracht is de kracht die alle voorwerpen met massa naar elkaar toe trekt, ons op het aardoppervlak houdt en dingen naar beneden laat vallen."
                }
            },
            {
                question: {
                    en: "What happens when you push a ball?",
                    es: "¿Qué pasa cuando empujas una pelota?",
                    de: "Was passiert, wenn du einen Ball stößt?",
                    nl: "Wat gebeurt er als je een bal duwt?"
                },
                options: [
                    { en: "It moves", es: "Se mueve", de: "Er bewegt sich", nl: "Hij beweegt" },
                    { en: "It changes color", es: "Cambia de color", de: "Er ändert die Farbe", nl: "Hij verandert van kleur" },
                    { en: "It gets bigger", es: "Se hace más grande", de: "Er wird größer", nl: "Hij wordt groter" },
                    { en: "It disappears", es: "Desaparece", de: "Er verschwindet", nl: "Hij verdwijnt" }
                ],
                correct: 0,
                explanation: {
                    en: "Pushing applies force to the ball, causing it to accelerate and move in the direction of the applied force.",
                    es: "Empujar aplica fuerza a la pelota, causando que acelere y se mueva en la dirección de la fuerza aplicada.",
                    de: "Stoßen wendet Kraft auf den Ball an, wodurch er beschleunigt und sich in Richtung der angewandten Kraft bewegt.",
                    nl: "Duwen past kracht toe op de bal, waardoor hij versnelt en beweegt in de richting van de toegepaste kracht."
                }
            },
            {
                question: {
                    en: "What makes it harder to slide a heavy box than a light one?",
                    es: "¿Qué hace que sea más difícil deslizar una caja pesada que una liviana?",
                    de: "Was macht es schwerer, eine schwere Kiste zu schieben als eine leichte?",
                    nl: "Wat maakt het moeilijker om een zware doos te schuiven dan een lichte?"
                },
                options: [
                    { en: "Friction", es: "Fricción", de: "Reibung", nl: "Wrijving" },
                    { en: "Color", es: "Color", de: "Farbe", nl: "Kleur" },
                    { en: "Shape", es: "Forma", de: "Form", nl: "Vorm" },
                    { en: "Temperature", es: "Temperatura", de: "Temperatur", nl: "Temperatuur" }
                ],
                correct: 0,
                explanation: {
                    en: "Heavier objects create more friction because they press down harder on the surface, increasing the resistance to sliding motion.",
                    es: "Los objetos más pesados crean más fricción porque presionan más fuerte sobre la superficie, aumentando la resistencia al movimiento deslizante.",
                    de: "Schwerere Objekte erzeugen mehr Reibung, weil sie stärker auf die Oberfläche drücken und den Widerstand gegen Gleitbewegung erhöhen.",
                    nl: "Zwaardere voorwerpen creëren meer wrijving omdat ze harder op het oppervlak drukken, waardoor de weerstand tegen glijdende beweging toeneemt."
                }
            },
            {
                question: {
                    en: "What simple machine is a seesaw?",
                    es: "¿Qué máquina simple es un balancín?",
                    de: "Was für eine einfache Maschine ist eine Wippe?",
                    nl: "Wat voor eenvoudige machine is een wip?"
                },
                options: [
                    { en: "Lever", es: "Palanca", de: "Hebel", nl: "Hefboom" },
                    { en: "Pulley", es: "Polea", de: "Flaschenzug", nl: "Katrol" },
                    { en: "Wheel", es: "Rueda", de: "Rad", nl: "Wiel" },
                    { en: "Screw", es: "Tornillo", de: "Schraube", nl: "Schroef" }
                ],
                correct: 0,
                explanation: {
                    en: "A seesaw is a lever that uses a fulcrum to balance forces, allowing people to lift each other by applying force at different distances.",
                    es: "Un ballancín es una palanca que usa un fulcro para equilibrar fuerzas, permitiendo que las personas se levanten mutuamente aplicando fuerza a diferentes distancias.",
                    de: "Eine Wippe ist ein Hebel, der einen Drehpunkt verwendet, um Kräfte auszugleichen und Menschen erlaubt, sich gegenseitig durch Kraftanwendung in verschiedenen Entfernungen zu heben.",
                    nl: "Een wip is een hefboom die een draaipunt gebruikt om krachten in evenwicht te brengen, waardoor mensen elkaar kunnen optillen door kracht toe te passen op verschillende afstanden."
                }
            },
            {
                question: {
                    en: "What simple machine helps you lift heavy things with a rope?",
                    es: "¿Qué máquina simple te ayuda a levantar cosas pesadas con una cuerda?",
                    de: "Welche einfache Maschine hilft dir, schwere Dinge mit einem Seil zu heben?",
                    nl: "Welke eenvoudige machine helpt je zware dingen op te tillen met een touw?"
                },
                options: [
                    { en: "Pulley", es: "Polea", de: "Flaschenzug", nl: "Katrol" },
                    { en: "Lever", es: "Palanca", de: "Hebel", nl: "Hefboom" },
                    { en: "Wedge", es: "Cuña", de: "Keil", nl: "Wig" },
                    { en: "Screw", es: "Tornillo", de: "Schraube", nl: "Schroef" }
                ],
                correct: 0,
                explanation: {
                    en: "A pulley redirects the direction of force and can provide mechanical advantage, making it easier to lift heavy objects with less effort.",
                    es: "Una polea redirige la dirección de la fuerza y puede proporcionar ventaja mecánica, haciendo más fácil levantar objetos pesados con menos esfuerzo.",
                    de: "Ein Flaschenzug lenkt die Kraftrichtung um und kann mechanischen Vorteil bieten, wodurch das Heben schwerer Objekte mit weniger Aufwand leichter wird.",
                    nl: "Een katrol leidt de richting van kracht om en kan mechanisch voordeel bieden, waardoor het makkelijker wordt om zware voorwerpen met minder inspanning op te tillen."
                }
            },
            {
                question: {
                    en: "What simple machine is a ramp?",
                    es: "¿Qué máquina simple es una rampa?",
                    de: "Was für eine einfache Maschine ist eine Rampe?",
                    nl: "Wat voor eenvoudige machine is een helling?"
                },
                options: [
                    { en: "Inclined plane", es: "Plano inclinado", de: "Schiefe Ebene", nl: "Hellend vlak" },
                    { en: "Lever", es: "Palanca", de: "Hebel", nl: "Hefboom" },
                    { en: "Pulley", es: "Polea", de: "Flaschenzug", nl: "Katrol" },
                    { en: "Wheel", es: "Rueda", de: "Rad", nl: "Wiel" }
                ],
                correct: 0,
                explanation: {
                    en: "An inclined plane reduces the force needed to move objects to a higher level by spreading the work over a longer distance.",
                    es: "Un plano inclinado reduce la fuerza necesaria para mover objetos a un nivel más alto distribuyendo el trabajo sobre una distancia más larga.",
                    de: "Eine schiefe Ebene reduziert die benötigte Kraft, um Objekte auf eine höhere Ebene zu bewegen, indem die Arbeit über eine längere Strecke verteilt wird.",
                    nl: "Een hellend vlak vermindert de benodigde kracht om voorwerpen naar een hoger niveau te bewegen door het werk over een langere afstand te verspreiden."
                }
            },
            {
                question: {
                    en: "What makes a ball bounce back up after you drop it?",
                    es: "¿Qué hace que una pelota rebote después de que la dejas caer?",
                    de: "Was lässt einen Ball zurückspringen, nachdem du ihn fallen lässt?",
                    nl: "Wat zorgt ervoor dat een bal terugstuitert nadat je hem laat vallen?"
                },
                options: [
                    { en: "Elasticity", es: "Elasticidad", de: "Elastizität", nl: "Elasticiteit" },
                    { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
                    { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" },
                    { en: "Heat", es: "Calor", de: "Hitze", nl: "Warmte" }
                ],
                correct: 0,
                explanation: {
                    en: "Elastic materials store energy when compressed and release it when the compression stops, pushing the ball back up against gravity.",
                    es: "Los materiales elásticos almacenan energía cuando se comprimen y la liberan cuando la compresión se detiene, empujando la pelota de vuelta hacia arriba contra la gravedad.",
                    de: "Elastische Materialien speichern Energie beim Zusammendrücken und geben sie frei, wenn die Kompression aufhört, wodurch der Ball gegen die Schwerkraft zurückgedrückt wird.",
                    nl: "Elastische materialen slaan energie op bij samendrukking en geven het vrij wanneer de compressie stopt, waardoor de bal terug omhoog wordt geduwd tegen de zwaartekracht in."
                }
            },
            {
                question: {
                    en: "What happens to objects in motion if no force stops them?",
                    es: "¿Qué pasa con los objetos en movimiento si ninguna fuerza los detiene?",
                    de: "Was passiert mit Objekten in Bewegung, wenn keine Kraft sie stoppt?",
                    nl: "Wat gebeurt er met bewegende voorwerpen als geen kracht ze stopt?"
                },
                options: [
                    { en: "They keep moving", es: "Siguen moviéndose", de: "Sie bewegen sich weiter", nl: "Ze blijven bewegen" },
                    { en: "They stop immediately", es: "Se detienen inmediatamente", de: "Sie stoppen sofort", nl: "Ze stoppen meteen" },
                    { en: "They change color", es: "Cambian de color", de: "Sie ändern die Farbe", nl: "Ze veranderen van kleur" },
                    { en: "They get heavier", es: "Se vuelven más pesados", de: "Sie werden schwerer", nl: "Ze worden zwaarder" }
                ],
                correct: 0,
                explanation: {
                    en: "This is Newton's first law of motion - objects in motion tend to stay in motion unless acted upon by an external force.",
                    es: "Esta es la primera ley del movimiento de Newton - los objetos en movimiento tienden a permanecer en movimiento a menos que actúe sobre ellos una fuerza externa.",
                    de: "Dies ist Newtons erstes Bewegungsgesetz - Objekte in Bewegung neigen dazu, in Bewegung zu bleiben, es sei denn, eine äußere Kraft wirkt auf sie ein.",
                    nl: "Dit is Newton's eerste bewegingswet - voorwerpen in beweging hebben de neiging in beweging te blijven tenzij een externe kracht op hen inwerkt."
                }
            },
            {
                question: {
                    en: "What force slows down a bicycle when you use the brakes?",
                    es: "¿Qué fuerza ralentiza una bicicleta cuando usas los frenos?",
                    de: "Welche Kraft verlangsamt ein Fahrrad, wenn du die Bremsen benutzt?",
                    nl: "Welke kracht vertraagt een fiets als je de remmen gebruikt?"
                },
                options: [
                    { en: "Friction", es: "Fricción", de: "Reibung", nl: "Wrijving" },
                    { en: "Gravity", es: "Gravedad", de: "Schwerkraft", nl: "Zwaartekracht" },
                    { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
                    { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" }
                ],
                correct: 0,
                explanation: {
                    en: "Bicycle brakes create friction between brake pads and wheels, converting the bike's kinetic energy into heat and slowing it down.",
                    es: "Los frenos de bicicleta crean fricción entre las pastillas de freno y las ruedas, convirtiendo la energía cinética de la bici en calor y ralentizándola.",
                    de: "Fahrradbremsen erzeugen Reibung zwischen Bremsbelägen und Rädern, wandeln die kinetische Energie des Fahrrads in Wärme um und verlangsamen es.",
                    nl: "Fietsremmen creëren wrijving tussen remblokken en wielen, zetten de kinetische energie van de fiets om in warmte en vertragen hem."
                }
            },
            {
                question: {
                    en: "What makes it easier to move things on wheels?",
                    es: "¿Qué hace que sea más fácil mover cosas con ruedas?",
                    de: "Was macht es einfacher, Dinge auf Rädern zu bewegen?",
                    nl: "Wat maakt het makkelijker om dingen op wielen te bewegen?"
                },
                options: [
                    { en: "Less friction", es: "Menos fricción", de: "Weniger Reibung", nl: "Minder wrijving" },
                    { en: "More weight", es: "Más peso", de: "Mehr Gewicht", nl: "Meer gewicht" },
                    { en: "Different color", es: "Color diferente", de: "Andere Farbe", nl: "Andere kleur" },
                    { en: "More air", es: "Más aire", de: "Mehr Luft", nl: "Meer lucht" }
                ],
                correct: 0,
                explanation: {
                    en: "Wheels reduce friction by rolling instead of sliding, converting sliding friction into much smaller rolling friction, making movement easier.",
                    es: "Las ruedas reducen la fricción rodando en lugar de deslizarse, convirtiendo la fricción deslizante en fricción rodante mucho menor, facilitando el movimiento.",
                    de: "Räder reduzieren Reibung durch Rollen statt Gleiten, wandeln Gleitreibung in viel kleinere Rollreibung um und machen Bewegung einfacher.",
                    nl: "Wielen verminderen wrijving door te rollen in plaats van te glijden, zetten glijdende wrijving om in veel kleinere rollende wrijving, waardoor beweging makkelijker wordt."
                }
            },
            {
                question: {
                    en: "If you push two identical balls with the same force, what happens?",
                    es: "Si empujas dos pelotas idénticas con la misma fuerza, ¿qué pasa?",
                    de: "Wenn du zwei identische Bälle mit derselben Kraft stößt, was passiert?",
                    nl: "Als je twee identieke ballen met dezelfde kracht duwt, wat gebeurt er dan?"
                },
                options: [
                    { en: "They move the same distance", es: "Se mueven la misma distancia", de: "Sie bewegen sich die gleiche Strecke", nl: "Ze bewegen dezelfde afstand" },
                    { en: "One moves further", es: "Una se mueve más lejos", de: "Einer bewegt sich weiter", nl: "Eentje beweegt verder" },
                    { en: "They don't move", es: "No se mueven", de: "Sie bewegen sich nicht", nl: "Ze bewegen niet" },
                    { en: "They change shape", es: "Cambian de forma", de: "Sie ändern ihre Form", nl: "Ze veranderen van vorm" }
                ],
                correct: 0,
                explanation: {
                    en: "Newton's second law states that force equals mass times acceleration, so identical objects with equal force will have equal acceleration and travel the same distance.",
                    es: "La segunda ley de Newton dice que fuerza es igual a masa por aceleración, así objetos idénticos con fuerza igual tendrán aceleración igual y viajarán la misma distancia.",
                    de: "Newtons zweites Gesetz besagt, dass Kraft gleich Masse mal Beschleunigung ist, so dass identische Objekte mit gleicher Kraft gleiche Beschleunigung haben und dieselbe Strecke zurücklegen.",
                    nl: "Newton's tweede wet stelt dat kracht gelijk is aan massa maal versnelling, dus identieke voorwerpen met gelijke kracht zullen gelijke versnelling hebben en dezelfde afstand afleggen."
                }
            },
            {
                question: {
                    en: "What happens when you stretch a rubber band and let go?",
                    es: "¿Qué pasa cuando estiras una banda elástica y la sueltas?",
                    de: "Was passiert, wenn du ein Gummiband dehnst und loslässt?",
                    nl: "Wat gebeurt er als je een elastiekje uitrekt en loslaat?"
                },
                options: [
                    { en: "It snaps back", es: "Se contrae de vuelta", de: "Es schnappt zurück", nl: "Het schiet terug" },
                    { en: "It stays stretched", es: "Se queda estirado", de: "Es bleibt gedehnt", nl: "Het blijft uitgerekt" },
                    { en: "It breaks", es: "Se rompe", de: "Es bricht", nl: "Het breekt" },
                    { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" }
                ],
                correct: 0,
                explanation: {
                    en: "The stored elastic potential energy in the stretched rubber band is quickly released, causing it to snap back to its original length.",
                    es: "La energía potencial elástica almacenada en la banda elástica estirada se libera rápidamente, causando que regrese rápidamente a su longitud original.",
                    de: "Die gespeicherte elastische potentielle Energie im gedehnten Gummiband wird schnell freigesetzt, wodurch es zu seiner ursprünglichen Länge zurückschnappt.",
                    nl: "De opgeslagen elastische potentiële energie in het uitgerekte elastiekje wordt snel vrijgegeven, waardoor het terugschiet naar zijn oorspronkelijke lengte."
                }
            },
            {
                question: {
                    en: "What type of simple machine is a knife?",
                    es: "¿Qué tipo de máquina simple es un cuchillo?",
                    de: "Was für eine einfache Maschine ist ein Messer?",
                    nl: "Wat voor eenvoudige machine is een mes?"
                },
                options: [
                    { en: "Wedge", es: "Cuña", de: "Keil", nl: "Wig" },
                    { en: "Lever", es: "Palanca", de: "Hebel", nl: "Hefboom" },
                    { en: "Pulley", es: "Polea", de: "Flaschenzug", nl: "Katrol" },
                    { en: "Wheel", es: "Rueda", de: "Rad", nl: "Wiel" }
                ],
                correct: 0,
                explanation: {
                    en: "A knife is a wedge that concentrates force along its sharp edge, making it easier to cut through materials by splitting them apart.",
                    es: "Un cuchillo es una cuña que concentra la fuerza a lo largo de su filo afilado, haciendo más fácil cortar materiales dividiéndolos.",
                    de: "Ein Messer ist ein Keil, der Kraft entlang seiner scharfen Schneide konzentriert und das Schneiden von Materialien durch Spalten erleichtert.",
                    nl: "Een mes is een wig die kracht concentreert langs zijn scherpe rand, waardoor het makkelijker wordt om materialen door te snijden door ze uit elkaar te splitsen."
                }
            },
            {
                question: {
                    en: "What makes a swing go back and forth?",
                    es: "¿Qué hace que un columpio vaya de un lado a otro?",
                    de: "Was lässt eine Schaukel hin und her gehen?",
                    nl: "Wat zorgt ervoor dat een schommel heen en weer gaat?"
                },
                options: [
                    { en: "Gravity and momentum", es: "Gravedad y momento", de: "Schwerkraft und Schwung", nl: "Zwaartekracht en beweging" },
                    { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
                    { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" },
                    { en: "Heat", es: "Calor", de: "Hitze", nl: "Warmte" }
                ],
                correct: 0,
                explanation: {
                    en: "Gravity pulls the swing down while momentum carries it past the bottom, creating a pendulum motion that repeats back and forth.",
                    es: "La gravedad jala el columpio hacia abajo mientras el momento lo lleva más allá del fondo, creando un movimiento de péndulo que se repite de un lado a otro.",
                    de: "Schwerkraft zieht die Schaukel nach unten, während der Schwung sie über den Tiefpunkt hinausträgt und eine Pendelbewegung erzeugt, die sich hin und her wiederholt.",
                    nl: "Zwaartekracht trekt de schommel naar beneden terwijl momentum hem voorbij de bodem draagt, waardoor een slingerbeweging ontstaat die heen en weer herhaalt."
                }
            },
            {
                question: {
                    en: "What force makes it hard to walk on ice?",
                    es: "¿Qué fuerza hace que sea difícil caminar sobre hielo?",
                    de: "Welche Kraft macht es schwer, auf Eis zu gehen?",
                    nl: "Welke kracht maakt het moeilijk om op ijs te lopen?"
                },
                options: [
                    { en: "Low friction", es: "Poca fricción", de: "Geringe Reibung", nl: "Weinig wrijving" },
                    { en: "Too much friction", es: "Demasiada fricción", de: "Zu viel Reibung", nl: "Te veel wrijving" },
                    { en: "Gravity", es: "Gravedad", de: "Schwerkraft", nl: "Zwaartekracht" },
                    { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" }
                ],
                correct: 0,
                explanation: {
                    en: "Ice has very low friction, so there's not enough grip between your feet and the surface to provide the traction needed for stable walking.",
                    es: "El hielo tiene muy poca fricción, así que no hay suficiente agarre entre tus pies y la superficie para proporcionar la tracción necesaria para caminar establemente.",
                    de: "Eis hat sehr geringe Reibung, so dass nicht genug Halt zwischen deinen Füßen und der Oberfläche vorhanden ist, um die für stabiles Gehen benötigte Traktion zu bieten.",
                    nl: "Ijs heeft zeer weinig wrijving, dus er is niet genoeg grip tussen je voeten en het oppervlak om de tractie te bieden die nodig is voor stabiel lopen."
                }
            },
            {
                question: {
                    en: "What happens to the speed of a rolling ball on a flat surface?",
                    es: "¿Qué pasa con la velocidad de una pelota rodando en una superficie plana?",
                    de: "Was passiert mit der Geschwindigkeit eines rollenden Balls auf einer flachen Oberfläche?",
                    nl: "Wat gebeurt er met de snelheid van een rollende bal op een vlak oppervlak?"
                },
                options: [
                    { en: "It gradually slows down", es: "Gradualmente se ralentiza", de: "Sie wird allmählich langsamer", nl: "Het wordt geleidelijk langzamer" },
                    { en: "It speeds up", es: "Se acelera", de: "Sie wird schneller", nl: "Het wordt sneller" },
                    { en: "It stays the same", es: "Se mantiene igual", de: "Sie bleibt gleich", nl: "Het blijft hetzelfde" },
                    { en: "It stops immediately", es: "Se detiene inmediatamente", de: "Sie stoppt sofort", nl: "Het stopt meteen" }
                ],
                correct: 0,
                explanation: {
                    en: "Friction gradually slows the ball down as it converts the ball's kinetic energy into heat through contact with the surface.",
                    es: "La fricción gradualmente ralentiza la pelota mientras convierte la energía cinética de la pelota en calor a través del contacto con la superficie.",
                    de: "Reibung verlangsamt den Ball allmählich, während sie die kinetische Energie des Balls durch Kontakt mit der Oberfläche in Wärme umwandelt.",
                    nl: "Wrijving vertraagt de bal geleidelijk terwijl het de kinetische energie van de bal omzet in warmte door contact met het oppervlak."
                }
            },
            {
                question: {
                    en: "What simple machine is a bottle opener?",
                    es: "¿Qué máquina simple es un abrelatas?",
                    de: "Was für eine einfache Maschine ist ein Flaschenöffner?",
                    nl: "Wat voor eenvoudige machine is een flesopener?"
                },
                options: [
                    { en: "Lever", es: "Palanca", de: "Hebel", nl: "Hefboom" },
                    { en: "Wedge", es: "Cuña", de: "Keil", nl: "Wig" },
                    { en: "Pulley", es: "Polea", de: "Flaschenzug", nl: "Katrol" },
                    { en: "Screw", es: "Tornillo", de: "Schraube", nl: "Schroef" }
                ],
                correct: 0,
                explanation: {
                    en: "A bottle opener is a lever that uses mechanical advantage to multiply the force you apply, making it easier to remove bottle caps.",
                    es: "Un abrebotellas es una palanca que usa ventaja mecánica para multiplicar la fuerza que aplicas, haciendo más fácil quitar las tapas de botellas.",
                    de: "Ein Flaschenöffner ist ein Hebel, der mechanischen Vorteil nutzt, um die Kraft zu vervielfachen, die du anwendest, wodurch das Entfernen von Flaschenverschlüssen einfacher wird.",
                    nl: "Een flesopener is een hefboom die mechanisch voordeel gebruikt om de kracht die je toepast te vermenigvuldigen, waardoor het makkelijker wordt om flessendoppen te verwijderen."
                }
            },
            {
                question: {
                    en: "What happens when equal and opposite forces act on an object?",
                    es: "¿Qué pasa cuando fuerzas iguales y opuestas actúan sobre un objeto?",
                    de: "Was passiert, wenn gleiche und entgegengesetzte Kräfte auf ein Objekt einwirken?",
                    nl: "Wat gebeurt er als gelijke en tegengestelde krachten op een voorwerp inwerken?"
                },
                options: [
                    { en: "The object doesn't move", es: "El objeto no se mueve", de: "Das Objekt bewegt sich nicht", nl: "Het voorwerp beweegt niet" },
                    { en: "The object moves faster", es: "El objeto se mueve más rápido", de: "Das Objekt bewegt sich schneller", nl: "Het voorwerp beweegt sneller" },
                    { en: "The object breaks", es: "El objeto se rompe", de: "Das Objekt bricht", nl: "Het voorwerp breekt" },
                    { en: "The object changes color", es: "El objeto cambia de color", de: "Das Objekt ändert die Farbe", nl: "Het voorwerp verandert van kleur" }
                ],
                correct: 0,
                explanation: {
                    en: "When forces are balanced, they cancel each other out, resulting in no net force and no change in the object's motion.",
                    es: "Cuando las fuerzas están equilibradas, se cancelan mutuamente, resultando en ninguna fuerza neta y ningún cambio en el movimiento del objeto.",
                    de: "Wenn Kräfte ausgeglichen sind, heben sie sich gegenseitig auf, was zu keiner Nettokraft und keiner Änderung der Objektbewegung führt.",
                    nl: "Wanneer krachten in evenwicht zijn, heffen ze elkaar op, wat resulteert in geen nettokracht en geen verandering in de beweging van het voorwerp."
                }
            },
            {
                question: {
                    en: "What makes a top spin for a long time?",
                    es: "¿Qué hace que un trompo gire por mucho tiempo?",
                    de: "Was lässt einen Kreisel lange drehen?",
                    nl: "Wat zorgt ervoor dat een tol lang ronddraait?"
                },
                options: [
                    { en: "Angular momentum", es: "Momento angular", de: "Drehimpuls", nl: "Draaiimpuls" },
                    { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
                    { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" },
                    { en: "Heat", es: "Calor", de: "Hitze", nl: "Warmte" }
                ],
                correct: 0,
                explanation: {
                    en: "A spinning top has angular momentum, which tends to keep it spinning and upright until friction gradually slows it down.",
                    es: "Un trompo girando tiene momento angular, que tiende a mantenerlo girando y derecho hasta que la fricción gradualmente lo ralentiza.",
                    de: "Ein sich drehender Kreisel hat Drehimpuls, der ihn dazu neigt, sich zu drehen und aufrecht zu bleiben, bis Reibung ihn allmählich verlangsamt.",
                    nl: "Een draaiende tol heeft draaiimpuls, wat hem geneigd maakt te blijven draaien en rechtop totdat wrijving hem geleidelijk vertraagt."
                }
            },
            {
                question: {
                    en: "Why do heavier objects fall at the same rate as lighter ones?",
                    es: "¿Por qué los objetos más pesados caen a la misma velocidad que los más ligeros?",
                    de: "Warum fallen schwerere Objekte genauso schnell wie leichtere?",
                    nl: "Waarom vallen zwaardere voorwerpen even snel als lichtere?"
                },
                options: [
                    { en: "Gravity affects all objects equally", es: "La gravedad afecta a todos los objetos por igual", de: "Schwerkraft wirkt auf alle Objekte gleich", nl: "Zwaartekracht beïnvloedt alle voorwerpen gelijk" },
                    { en: "Heavy objects are stronger", es: "Los objetos pesados son más fuertes", de: "Schwere Objekte sind stärker", nl: "Zware voorwerpen zijn sterker" },
                    { en: "Light objects are weaker", es: "Los objetos ligeros son más débiles", de: "Leichte Objekte sind schwächer", nl: "Lichte voorwerpen zijn zwakker" },
                    { en: "Air makes them equal", es: "El aire los hace iguales", de: "Luft macht sie gleich", nl: "Lucht maakt ze gelijk" }
                ],
                correct: 0,
                explanation: {
                    en: "Gravity accelerates all objects equally regardless of mass, so in a vacuum, all objects fall at the same rate.",
                    es: "La gravedad acelera todos los objetos igualmente sin importar la masa, así que en un vacío, todos los objetos caen a la misma velocidad.",
                    de: "Schwerkraft beschleunigt alle Objekte gleich unabhängig von der Masse, so dass im Vakuum alle Objekte mit derselben Rate fallen.",
                    nl: "Zwaartekracht versnelt alle voorwerpen gelijk ongeacht de massa, dus in een vacuüm vallen alle voorwerpen met dezelfde snelheid."
                }
            },
            {
                question: {
                    en: "What force keeps the moon orbiting around Earth?",
                    es: "¿Qué fuerza mantiene a la luna orbitando alrededor de la Tierra?",
                    de: "Welche Kraft hält den Mond in der Umlaufbahn um die Erde?",
                    nl: "Welke kracht houdt de maan in een baan rond de aarde?"
                },
                options: [
                    { en: "Gravity", es: "Gravedad", de: "Schwerkraft", nl: "Zwaartekracht" },
                    { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
                    { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" },
                    { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth's gravitational force constantly pulls the moon toward Earth, but the moon's forward motion creates a stable circular orbit.",
                    es: "La fuerza gravitacional de la Tierra constantemente atrae la luna hacia la Tierra, pero el movimiento hacia adelante de la luna crea una órbita circular estable.",
                    de: "Die Gravitationskraft der Erde zieht den Mond ständig zur Erde, aber die Vorwärtsbewegung des Mondes erzeugt eine stabile Kreisbahn.",
                    nl: "De zwaartekracht van de aarde trekt de maan constant naar de aarde, maar de voorwaartse beweging van de maan creëert een stabiele cirkelvormige baan."
                }
            },
            {
                question: {
                    en: "What happens when you pedal a bicycle?",
                    es: "¿Qué pasa cuando pedaleas una bicicleta?",
                    de: "Was passiert, wenn du bei einem Fahrrad in die Pedale trittst?",
                    nl: "Wat gebeurt er als je op een fiets trapt?"
                },
                options: [
                    { en: "You apply force to make it move", es: "Aplicas fuerza para que se mueva", de: "Du wendest Kraft an, damit es sich bewegt", nl: "Je past kracht toe om het te laten bewegen" },
                    { en: "The bike moves by itself", es: "La bici se mueve sola", de: "Das Fahrrad bewegt sich von selbst", nl: "De fiets beweegt vanzelf" },
                    { en: "Magic makes it work", es: "La magia hace que funcione", de: "Magie lässt es funktionieren", nl: "Magie laat het werken" },
                    { en: "Wind pushes it", es: "El viento la empuja", de: "Wind schiebt es", nl: "Wind duwt het" }
                ],
                correct: 0,
                explanation: {
                    en: "Pedaling applies rotational force to the wheels through a chain and gear system, converting your leg power into forward motion.",
                    es: "Pedalear aplica fuerza rotacional a las ruedas a través de un sistema de cadena y engranajes, convirtiendo la potencia de tus piernas en movimiento hacia adelante.",
                    de: "Treten wendet Rotationskraft auf die Räder durch ein Ketten- und Zahnradsystem an und wandelt deine Beinkraft in Vorwärtsbewegung um.",
                    nl: "Trappen past rotatiekracht toe op de wielen via een ketting- en tandwielsysteem, zet je beenkracht om in voorwaartse beweging."
                }
            },
            {
                question: {
                    en: "What simple machine is a screw?",
                    es: "¿Qué máquina simple es un tornillo?",
                    de: "Was für eine einfache Maschine ist eine Schraube?",
                    nl: "Wat voor eenvoudige machine is een schroef?"
                },
                options: [
                    { en: "Inclined plane wrapped around a cylinder", es: "Plano inclinado enrollado alrededor de un cilindro", de: "Schiefe Ebene um einen Zylinder gewickelt", nl: "Hellend vlak gewikkeld rond een cilinder" },
                    { en: "A type of lever", es: "Un tipo de palanca", de: "Eine Art Hebel", nl: "Een soort hefboom" },
                    { en: "A small pulley", es: "Una polea pequeña", de: "Ein kleiner Flaschenzug", nl: "Een kleine katrol" },
                    { en: "A tiny wheel", es: "Una rueda pequeña", de: "Ein kleines Rad", nl: "Een klein wieltje" }
                ],
                correct: 0,
                explanation: {
                    en: "A screw is an inclined plane wrapped around a cylinder, converting rotational motion into linear motion and providing mechanical advantage.",
                    es: "Un tornillo es un plano inclinado envuelto alrededor de un cilindro, convirtiendo movimiento rotacional en movimiento lineal y proporcionando ventaja mecánica.",
                    de: "Eine Schraube ist eine schiefe Ebene, die um einen Zylinder gewickelt ist, wandelt Rotationsbewegung in lineare Bewegung um und bietet mechanischen Vorteil.",
                    nl: "Een schroef is een hellend vlak gewikkeld rond een cilinder, zet rotatiebeweging om in lineaire beweging en biedt mechanisch voordeel."
                }
            },
            {
                question: {
                    en: "What happens to a moving object when friction increases?",
                    es: "¿Qué pasa a un objeto en movimiento cuando la fricción aumenta?",
                    de: "Was passiert mit einem bewegten Objekt, wenn die Reibung zunimmt?",
                    nl: "Wat gebeurt er met een bewegend voorwerp als de wrijving toeneemt?"
                },
                options: [
                    { en: "It slows down more quickly", es: "Se ralentiza más rápidamente", de: "Es wird schneller langsamer", nl: "Het vertraagt sneller" },
                    { en: "It speeds up", es: "Se acelera", de: "Es wird schneller", nl: "Het versnelt" },
                    { en: "It stays the same speed", es: "Mantiene la misma velocidad", de: "Es behält dieselbe Geschwindigkeit", nl: "Het behoudt dezelfde snelheid" },
                    { en: "It changes direction", es: "Cambia de dirección", de: "Es ändert die Richtung", nl: "Het verandert van richting" }
                ],
                correct: 0,
                explanation: {
                    en: "Increased friction creates more resistance to motion, causing the object to decelerate and slow down more rapidly.",
                    es: "El aumento de fricción crea más resistencia al movimiento, causando que el objeto desacelere y se ralentice más rápidamente.",
                    de: "Erhöhte Reibung erzeugt mehr Widerstand gegen Bewegung, wodurch das Objekt verzögert und schneller langsamer wird.",
                    nl: "Toegenomen wrijving creëert meer weerstand tegen beweging, waardoor het voorwerp vertraagt en sneller langzamer wordt."
                }
            },
            {
                question: {
                    en: "What makes a car need more force to start moving than to keep moving?",
                    es: "¿Qué hace que un carro necesite más fuerza para empezar a moverse que para seguir moviéndose?",
                    de: "Was macht, dass ein Auto mehr Kraft braucht, um anzufahren als um in Bewegung zu bleiben?",
                    nl: "Wat zorgt ervoor dat een auto meer kracht nodig heeft om te gaan rijden dan om te blijven rijden?"
                },
                options: [
                    { en: "Static friction is stronger than rolling friction", es: "La fricción estática es más fuerte que la fricción rodante", de: "Haftreibung ist stärker als Rollreibung", nl: "Statische wrijving is sterker dan rollende wrijving" },
                    { en: "The car gets heavier when stopped", es: "El carro se vuelve más pesado cuando está parado", de: "Das Auto wird schwerer wenn es steht", nl: "De auto wordt zwaarder als hij stil staat" },
                    { en: "Gravity works differently", es: "La gravedad funciona diferente", de: "Schwerkraft wirkt anders", nl: "Zwaartekracht werkt anders" },
                    { en: "The engine gets tired", es: "El motor se cansa", de: "Der Motor wird müde", nl: "De motor wordt moe" }
                ],
                correct: 0,
                explanation: {
                    en: "Static friction (when not moving) is greater than kinetic friction (when moving), so more force is needed to overcome initial resistance.",
                    es: "La fricción estática (cuando no se mueve) es mayor que la fricción cinética (cuando se mueve), así que se necesita más fuerza para superar la resistencia inicial.",
                    de: "Haftreibung (wenn nicht bewegt) ist größer als kinetische Reibung (wenn bewegt), so dass mehr Kraft benötigt wird, um den anfänglichen Widerstand zu überwinden.",
                    nl: "Statische wrijving (wanneer niet bewegend) is groter dan kinetische wrijving (wanneer bewegend), dus meer kracht is nodig om de aanvankelijke weerstand te overwinnen."
                }
            },
            {
                question: {
                    en: "What happens when you throw a ball straight up in the air?",
                    es: "¿Qué pasa cuando lanzas una pelota directamente hacia arriba?",
                    de: "Was passiert, wenn du einen Ball gerade nach oben wirfst?",
                    nl: "Wat gebeurt er als je een bal recht omhoog gooit?"
                },
                options: [
                    { en: "It slows down, stops, then falls back down", es: "Se ralentiza, se detiene, luego cae de vuelta", de: "Er wird langsamer, stoppt, dann fällt er zurück", nl: "Hij vertraagt, stopt, en valt dan terug" },
                    { en: "It keeps going up forever", es: "Sigue subiendo para siempre", de: "Er steigt für immer weiter", nl: "Hij blijft voor altijd omhoog gaan" },
                    { en: "It immediately falls down", es: "Inmediatamente cae", de: "Er fällt sofort runter", nl: "Hij valt meteen naar beneden" },
                    { en: "It floats in the air", es: "Flota en el aire", de: "Er schwebt in der Luft", nl: "Hij zweeft in de lucht" }
                ],
                correct: 0,
                explanation: {
                    en: "Gravity constantly pulls the ball downward, gradually slowing its upward motion until it stops, then accelerating it back down.",
                    es: "La gravedad constantemente jala la pelota hacia abajo, gradualmente ralentizando su movimiento hacia arriba hasta que se detiene, luego acelerándola de vuelta hacia abajo.",
                    de: "Schwerkraft zieht den Ball ständig nach unten, verlangsamt allmählich seine Aufwärtsbewegung bis er stoppt, dann beschleunigt ihn zurück nach unten.",
                    nl: "Zwaartekracht trekt de bal constant naar beneden, vertraagt geleidelijk zijn opwaartse beweging totdat hij stopt, dan versnelt hem terug naar beneden."
                }
            },
            {
                question: {
                    en: "What type of simple machine is a spiral staircase?",
                    es: "¿Qué tipo de máquina simple es una escalera de caracol?",
                    de: "Was für eine einfache Maschine ist eine Wendeltreppe?",
                    nl: "Wat voor eenvoudige machine is een wenteltrap?"
                },
                options: [
                    { en: "Screw", es: "Tornillo", de: "Schraube", nl: "Schroef" },
                    { en: "Lever", es: "Palanca", de: "Hebel", nl: "Hefboom" },
                    { en: "Pulley", es: "Polea", de: "Flaschenzug", nl: "Katrol" },
                    { en: "Wedge", es: "Cuña", de: "Keil", nl: "Wig" }
                ],
                correct: 0,
                explanation: {
                    en: "A spiral staircase is like a screw - an inclined plane wound around a central axis, making it easier to climb to greater heights.",
                    es: "Una escalera de caracol es como un tornillo - un plano inclinado enrollado alrededor de un eje central, haciendo más fácil subir a mayores alturas.",
                    de: "Eine Wendeltreppe ist wie eine Schraube - eine schiefe Ebene um eine zentrale Achse gewickelt, wodurch das Klettern zu größeren Höhen einfacher wird.",
                    nl: "Een wenteltrap is als een schroef - een hellend vlak gewikkeld rond een centrale as, waardoor het makkelijker wordt om naar grotere hoogtes te klimmen."
                }
            },
            {
                question: {
                    en: "Why do you lean forward when a bus stops suddenly?",
                    es: "¿Por qué te inclinas hacia adelante cuando un autobús se detiene de repente?",
                    de: "Warum lehnst du dich nach vorne, wenn ein Bus plötzlich anhält?",
                    nl: "Waarom leun je voorover als een bus plotseling stopt?"
                },
                options: [
                    { en: "Your body wants to keep moving forward", es: "Tu cuerpo quiere seguir moviéndose hacia adelante", de: "Dein Körper will sich weiter nach vorne bewegen", nl: "Je lichaam wil vooruit blijven bewegen" },
                    { en: "The bus pushes you forward", es: "El autobús te empuja hacia adelante", de: "Der Bus schiebt dich nach vorne", nl: "De bus duwt je naar voren" },
                    { en: "Gravity pulls you forward", es: "La gravedad te atrae hacia adelante", de: "Schwerkraft zieht dich nach vorne", nl: "Zwaartekracht trekt je naar voren" },
                    { en: "The seat pushes you", es: "El asiento te empuja", de: "Der Sitz schiebt dich", nl: "De stoel duwt je" }
                ],
                correct: 0,
                explanation: {
                    en: "Inertia causes your body to continue moving forward when the bus stops, because objects in motion tend to stay in motion.",
                    es: "La inercia causa que tu cuerpo continúe moviéndose hacia adelante cuando el autobús se detiene, porque los objetos en movimiento tienden a permanecer en movimiento.",
                    de: "Trägheit bewirkt, dass sich dein Körper weiter nach vorne bewegt, wenn der Bus anhält, weil Objekte in Bewegung dazu neigen, in Bewegung zu bleiben.",
                    nl: "Traagheid zorgt ervoor dat je lichaam vooruit blijft bewegen wanneer de bus stopt, omdat voorwerpen in beweging geneigd zijn in beweging te blijven."
                }
            },
            {
                question: {
                    en: "What makes a pendulum swing back and forth?",
                    es: "¿Qué hace que un péndulo se balancee de un lado a otro?",
                    de: "Was lässt ein Pendel hin und her schwingen?",
                    nl: "Wat zorgt ervoor dat een slinger heen en weer zwaait?"
                },
                options: [
                    { en: "Gravity and momentum", es: "Gravedad y momento", de: "Schwerkraft und Schwung", nl: "Zwaartekracht en beweging" },
                    { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
                    { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" },
                    { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" }
                ],
                correct: 0,
                explanation: {
                    en: "Gravity pulls the pendulum down while its momentum carries it past the bottom, creating continuous back-and-forth motion.",
                    es: "La gravedad jala el péndulo hacia abajo mientras su momento lo lleva más allá del fondo, creando movimiento continuo de un lado a otro.",
                    de: "Schwerkraft zieht das Pendel nach unten, während sein Schwung es über den Tiefpunkt hinausträgt und kontinuierliche Hin- und Herbewegung erzeugt.",
                    nl: "Zwaartekracht trekt de slinger naar beneden terwijl zijn momentum hem voorbij de bodem draagt, waardoor continue heen-en-weer beweging ontstaat."
                }
            },
            {
                question: {
                    en: "What happens when you compress a spring and then release it?",
                    es: "¿Qué pasa cuando comprimes un resorte y luego lo sueltas?",
                    de: "Was passiert, wenn du eine Feder zusammendrückst und dann loslässt?",
                    nl: "Wat gebeurt er als je een veer indrukt en dan loslaat?"
                },
                options: [
                    { en: "It pushes back with stored energy", es: "Empuja de vuelta con energía almacenada", de: "Sie drückt mit gespeicherter Energie zurück", nl: "Het duwt terug met opgeslagen energie" },
                    { en: "It stays compressed", es: "Se queda comprimido", de: "Sie bleibt zusammengedrückt", nl: "Het blijft ingedrukt" },
                    { en: "It breaks", es: "Se rompe", de: "Sie bricht", nl: "Het breekt" },
                    { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
                ],
                correct: 0,
                explanation: {
                    en: "The compressed spring stores elastic potential energy and releases it rapidly when let go, pushing objects away with significant force.",
                    es: "El resorte comprimido almacena energía potencial elástica y la libera rápidamente cuando se suelta, empujando objetos con fuerza significativa.",
                    de: "Die zusammengedrückte Feder speichert elastische potentielle Energie und gibt sie schnell frei, wenn sie losgelassen wird, und stößt Objekte mit erheblicher Kraft weg.",
                    nl: "De samengedrukte veer slaat elastische potentiële energie op en geeft het snel vrij wanneer losgelaten, duwt voorwerpen weg met aanzienlijke kracht."
                }
            },
            {
                question: {
                    en: "What simple machine would help you lift a heavy rock using a long stick?",
                    es: "¿Qué máquina simple te ayudaría a levantar una roca pesada usando un palo largo?",
                    de: "Welche einfache Maschine würde dir helfen, einen schweren Stein mit einem langen Stock zu heben?",
                    nl: "Welke eenvoudige machine zou je helpen een zware steen op te tillen met een lange stok?"
                },
                options: [
                    { en: "Lever", es: "Palanca", de: "Hebel", nl: "Hefboom" },
                    { en: "Pulley", es: "Polea", de: "Flaschenzug", nl: "Katrol" },
                    { en: "Screw", es: "Tornillo", de: "Schraube", nl: "Schroef" },
                    { en: "Wedge", es: "Cuña", de: "Keil", nl: "Wig" }
                ],
                correct: 0,
                explanation: {
                    en: "A lever uses a fulcrum to multiply force, allowing you to lift heavy objects with less effort by applying force over a longer distance.",
                    es: "Una palanca usa un fulcro para multiplicar la fuerza, permitiéndote levantar objetos pesados con menos esfuerzo aplicando fuerza sobre una distancia más larga.",
                    de: "Ein Hebel verwendet einen Drehpunkt, um Kraft zu vervielfachen und ermöglicht es, schwere Objekte mit weniger Aufwand zu heben, indem Kraft über eine längere Distanz angewendet wird.",
                    nl: "Een hefboom gebruikt een draaipunt om kracht te vermenigvuldigen, waardoor je zware voorwerpen met minder inspanning kunt optillen door kracht over een langere afstand toe te passen."
                }
            },
            {
                question: {
                    en: "Why do ice skaters spin faster when they pull their arms in?",
                    es: "¿Por qué los patinadores sobre hielo giran más rápido cuando recogen sus brazos?",
                    de: "Warum drehen sich Eisläufer schneller, wenn sie ihre Arme anziehen?",
                    nl: "Waarom draaien schaatsers sneller als ze hun armen naar binnen trekken?"
                },
                options: [
                    { en: "They conserve angular momentum", es: "Conservan el momento angular", de: "Sie erhalten den Drehimpuls", nl: "Ze behouden draaiimpuls" },
                    { en: "They become lighter", es: "Se vuelven más ligeros", de: "Sie werden leichter", nl: "Ze worden lichter" },
                    { en: "Wind helps them", es: "El viento les ayuda", de: "Wind hilft ihnen", nl: "Wind helpt hen" },
                    { en: "The ice gets smoother", es: "El hielo se vuelve más liso", de: "Das Eis wird glatter", nl: "Het ijs wordt gladder" }
                ],
                correct: 0,
                explanation: {
                    en: "Conservation of angular momentum means as the skater's mass gets closer to the rotation axis, their spin rate must increase to maintain constant momentum.",
                    es: "La conservación del momento angular significa que cuando la masa del patinador se acerca al eje de rotación, su velocidad de giro debe aumentar para mantener momento constante.",
                    de: "Erhaltung des Drehimpulses bedeutet, dass wenn sich die Masse des Schlittschuhläufers der Rotationsachse nähert, sich ihre Drehgeschwindigkeit erhöhen muss, um konstanten Impuls zu erhalten.",
                    nl: "Behoud van draaiimpuls betekent dat wanneer de massa van de schaatser dichter bij de rotatie-as komt, hun draaisnelheid moet toenemen om constant momentum te behouden."
                }
            },
            {
                question: {
                    en: "What force acts on objects moving through air or water?",
                    es: "¿Qué fuerza actúa sobre objetos que se mueven a través del aire o agua?",
                    de: "Welche Kraft wirkt auf Objekte, die sich durch Luft oder Wasser bewegen?",
                    nl: "Welke kracht werkt op voorwerpen die door lucht of water bewegen?"
                },
                options: [
                    { en: "Drag", es: "Resistencia", de: "Luftwiderstand", nl: "Luchtweerstand" },
                    { en: "Gravity", es: "Gravedad", de: "Schwerkraft", nl: "Zwaartekracht" },
                    { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
                    { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" }
                ],
                correct: 0,
                explanation: {
                    en: "Drag is the resistance force that opposes motion through fluids, caused by the object pushing against and displacing air or water molecules.",
                    es: "La resistencia es la fuerza de resistencia que se opone al movimiento a través de fluidos, causada por el objeto empujando contra y desplazando moléculas de aire o agua.",
                    de: "Luftwiderstand ist die Widerstandskraft, die der Bewegung durch Flüssigkeiten entgegenwirkt, verursacht durch das Objekt, das gegen Luft- oder Wassermoleküle drückt und sie verdraengt.",
                    nl: "Luchtweerstand is de weerstandskracht die beweging door vloeistoffen tegenwerkt, veroorzaakt door het voorwerp dat tegen lucht- of watermoleculen duwt en ze verdringt."
                }
            },
            {
                question: {
                    en: "What happens when you slide down a slide?",
                    es: "¿Qué pasa cuando te deslizas por un tobogán?",
                    de: "Was passiert, wenn du eine Rutsche hinunterrutschst?",
                    nl: "Wat gebeurt er als je van een glijbaan afglijdt?"
                },
                options: [
                    { en: "Gravity pulls you down the inclined plane", es: "La gravedad te atrae por el plano inclinado", de: "Schwerkraft zieht dich die schiefe Ebene hinunter", nl: "Zwaartekracht trekt je het hellende vlak af" },
                    { en: "The slide pushes you down", es: "El tobogán te empuja hacia abajo", de: "Die Rutsche schiebt dich hinunter", nl: "De glijbaan duwt je naar beneden" },
                    { en: "Wind blows you down", es: "El viento te sopla hacia abajo", de: "Wind bläst dich hinunter", nl: "Wind blaast je naar beneden" },
                    { en: "Magnetism pulls you down", es: "El magnetismo te atrae hacia abajo", de: "Magnetismus zieht dich hinunter", nl: "Magnetisme trekt je naar beneden" }
                ],
                correct: 0,
                explanation: {
                    en: "Gravity provides the force to accelerate you down the inclined plane of the slide, while friction and your weight determine how fast you go.",
                    es: "La gravedad proporciona la fuerza para acelerarte por el plano inclinado del tobogán, mientras la fricción y tu peso determinan qué tan rápido vas.",
                    de: "Schwerkraft liefert die Kraft, um dich die schiefe Ebene der Rutsche hinunterzubeschleunigen, während Reibung und dein Gewicht bestimmen, wie schnell du gehst.",
                    nl: "Zwaartekracht levert de kracht om je te versnellen het hellende vlak van de glijbaan af, terwijl wrijving en je gewicht bepalen hoe snel je gaat."
                }
            },
            {
                question: {
                    en: "What makes a yo-yo come back up to your hand?",
                    es: "¿Qué hace que un yo-yo regrese a tu mano?",
                    de: "Was lässt ein Jo-Jo zu deiner Hand zurückkommen?",
                    nl: "Wat zorgt ervoor dat een jojo terugkomt naar je hand?"
                },
                options: [
                    { en: "The spinning motion and string tension", es: "El movimiento giratorio y la tensión de la cuerda", de: "Die Drehbewegung und Seilspannung", nl: "De draaibeweging en touwtje spanning" },
                    { en: "Gravity", es: "Gravedad", de: "Schwerkraft", nl: "Zwaartekracht" },
                    { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
                    { en: "Magic", es: "Magia", de: "Magie", nl: "Magie" }
                ],
                correct: 0,
                explanation: {
                    en: "The yo-yo's spinning motion and string tension create a gyroscopic effect that allows it to climb back up the string when it reaches the bottom.",
                    es: "El movimiento giratorio del yo-yo y la tensión de la cuerda crean un efecto giroscópico que le permite subir de vuelta por la cuerda cuando llega al fondo.",
                    de: "Die Drehbewegung des Jo-Jos und die Seilspannung erzeugen einen gyroskopischen Effekt, der es ihm erlaubt, das Seil wieder hochzuklettern, wenn es den Boden erreicht.",
                    nl: "De draaibeweging van de jojo en touwtjespanning creëren een gyroscopisch effect dat hem toestaat het touw weer op te klimmen wanneer hij de bodem bereikt."
                }
            },
            {
                question: {
                    en: "What happens when forces are balanced on an object?",
                    es: "¿Qué pasa cuando las fuerzas están equilibradas en un objeto?",
                    de: "Was passiert, wenn Kräfte an einem Objekt ausgeglichen sind?",
                    nl: "Wat gebeurt er als krachten in evenwicht zijn op een voorwerp?"
                },
                options: [
                    { en: "The object stays at rest or moves at constant speed", es: "El objeto se queda en reposo o se mueve a velocidad constante", de: "Das Objekt bleibt in Ruhe oder bewegt sich mit konstanter Geschwindigkeit", nl: "Het voorwerp blijft stil of beweegt met constante snelheid" },
                    { en: "The object accelerates", es: "El objeto acelera", de: "Das Objekt beschleunigt", nl: "Het voorwerp versnelt" },
                    { en: "The object breaks apart", es: "El objeto se rompe", de: "Das Objekt bricht auseinander", nl: "Het voorwerp valt uiteen" },
                    { en: "The object changes color", es: "El objeto cambia de color", de: "Das Objekt ändert die Farbe", nl: "Het voorwerp verandert van kleur" }
                ],
                correct: 0,
                explanation: {
                    en: "Balanced forces result in equilibrium - the object remains at rest if it was at rest, or continues moving at constant velocity if it was moving.",
                    es: "Las fuerzas equilibradas resultan en equilibrio - el objeto permanece en reposo si estaba en reposo, o continúa moviéndose a velocidad constante si se estaba moviendo.",
                    de: "Ausgeglichene Kräfte führen zu Gleichgewicht - das Objekt bleibt in Ruhe, wenn es in Ruhe war, oder bewegt sich weiter mit konstanter Geschwindigkeit, wenn es sich bewegte.",
                    nl: "Gebalanceerde krachten resulteren in evenwicht - het voorwerp blijft in rust als het in rust was, of blijft bewegen met constante snelheid als het bewoog."
                }
            },
            {
                question: {
                    en: "What simple machine helps you open a can of paint?",
                    es: "¿Qué máquina simple te ayuda a abrir una lata de pintura?",
                    de: "Welche einfache Maschine hilft dir, eine Farbdose zu öffnen?",
                    nl: "Welke eenvoudige machine helpt je een verfblik te openen?"
                },
                options: [
                    { en: "Lever", es: "Palanca", de: "Hebel", nl: "Hefboom" },
                    { en: "Pulley", es: "Polea", de: "Flaschenzug", nl: "Katrol" },
                    { en: "Screw", es: "Tornillo", de: "Schraube", nl: "Schroef" },
                    { en: "Wedge", es: "Cuña", de: "Keil", nl: "Wig" }
                ],
                correct: 0,
                explanation: {
                    en: "A lever multiplies the force you apply, making it easier to pry open the tight-fitting lid by concentrating force at the edge.",
                    es: "Una palanca multiplica la fuerza que aplicas, haciendo más fácil abrir la tapa bien ajustada concentrando fuerza en el borde.",
                    de: "Ein Hebel vervielfacht die Kraft, die du anwendest, und macht es einfacher, den fest sitzenden Deckel durch Kraftkonzentration am Rand aufzuhebeln.",
                    nl: "Een hefboom vermenigvuldigt de kracht die je toepast, waardoor het makkelijker wordt om het strakke deksel open te wrikken door kracht te concentreren aan de rand."
                }
            },
            {
                question: {
                    en: "Why do we need to push harder to move something up a hill?",
                    es: "¿Por qué necesitamos empujar más fuerte para mover algo cuesta arriba?",
                    de: "Warum müssen wir stärker drücken, um etwas einen Hügel hinaufzubewegen?",
                    nl: "Waarom moeten we harder duwen om iets een heuvel op te bewegen?"
                },
                options: [
                    { en: "We're working against gravity", es: "Estamos trabajando contra la gravedad", de: "Wir arbeiten gegen die Schwerkraft", nl: "We werken tegen de zwaartekracht" },
                    { en: "Hills are made of different material", es: "Las colinas están hechas de diferente material", de: "Hügel bestehen aus anderem Material", nl: "Heuvels zijn van ander materiaal gemaakt" },
                    { en: "Objects get heavier on hills", es: "Los objetos se vuelven más pesados en las colinas", de: "Objekte werden auf Hügeln schwerer", nl: "Voorwerpen worden zwaarder op heuvels" },
                    { en: "The air is thinner", es: "El aire es más fino", de: "Die Luft ist dünner", nl: "De lucht is dunner" }
                ],
                correct: 0,
                explanation: {
                    en: "Moving uphill means working against gravity's downward pull, requiring additional force to overcome both gravity and any friction present.",
                    es: "Moverse cuesta arriba significa trabajar contra la atracción hacia abajo de la gravedad, requiriendo fuerza adicional para superar tanto la gravedad como cualquier fricción presente.",
                    de: "Bergauf zu gehen bedeutet gegen die Abwärtskraft der Schwerkraft zu arbeiten und zusätzliche Kraft zu benötigen, um sowohl die Schwerkraft als auch jede vorhandene Reibung zu überwinden.",
                    nl: "Bergopwaarts bewegen betekent werken tegen de neerwaartse trek van de zwaartekracht, wat extra kracht vereist om zowel zwaartekracht als eventuele wrijving te overwinnen."
                }
            },
            {
                question: {
                    en: "What do we call the point where a lever balances?",
                    es: "¿Cómo llamamos al punto donde una palanca se equilibra?",
                    de: "Wie nennen wir den Punkt, wo sich ein Hebel ausbalanciert?",
                    nl: "Hoe noemen we het punt waar een hefboom in evenwicht is?"
                },
                options: [
                    { en: "Fulcrum", es: "Fulcro", de: "Drehpunkt", nl: "Draaipunt" },
                    { en: "Center", es: "Centro", de: "Zentrum", nl: "Centrum" },
                    { en: "Middle", es: "Medio", de: "Mitte", nl: "Midden" },
                    { en: "Balance point", es: "Punto de equilibrio", de: "Gleichgewichtspunkt", nl: "Evenwichtspunt" }
                ],
                correct: 0,
                explanation: {
                    en: "The fulcrum is the pivot point that allows a lever to balance and multiply force, determining where the lever will tip or balance.",
                    es: "El fulcro es el punto de apoyo que permite a una palanca equilibrarse y multiplicar fuerza, determinando dónde la palanca se inclinará o equilibrará.",
                    de: "Der Drehpunkt ist der Angelpunkt, der es einem Hebel ermöglicht, sich auszugleichen und Kraft zu vervielfachen, und bestimmt, wo der Hebel kippen oder balancieren wird.",
                    nl: "Het draaipunt is het spilpunt dat een hefboom toestaat te balanceren en kracht te vermenigvuldigen, bepaalt waar de hefboom zal kantelen of balanceren."
                }
            },
            {
                question: {
                    en: "What scientific law explains why we need seatbelts in cars?",
                    es: "¿Qué ley científica explica por qué necesitamos cinturones de seguridad en los carros?",
                    de: "Welches wissenschaftliche Gesetz erklärt, warum wir Sicherheitsgurte in Autos brauchen?",
                    nl: "Welke wetenschappelijke wet verklaart waarom we veiligheidsgordels in auto's nodig hebben?"
                },
                options: [
                    { en: "Objects in motion tend to stay in motion", es: "Los objetos en movimiento tienden a permanecer en movimiento", de: "Objekte in Bewegung neigen dazu, in Bewegung zu bleiben", nl: "Voorwerpen in beweging hebben de neiging in beweging te blijven" },
                    { en: "Heavy objects fall faster", es: "Los objetos pesados caen más rápido", de: "Schwere Objekte fallen schneller", nl: "Zware voorwerpen vallen sneller" },
                    { en: "Hot air rises", es: "El aire caliente sube", de: "Warme Luft steigt auf", nl: "Warme lucht stijgt" },
                    { en: "Like charges repel", es: "Las cargas iguales se repelen", de: "Gleiche Ladungen stoßen sich ab", nl: "Gelijke ladingen stoten elkaar af" }
                ],
                correct: 0,
                explanation: {
                    en: "Newton's first law of inertia explains that our bodies continue moving forward when the car stops suddenly, making seatbelts essential for safety.",
                    es: "La primera ley de inercia de Newton explica que nuestros cuerpos continúan moviéndose hacia adelante cuando el carro se detiene de repente, haciendo los cinturones esenciales para la seguridad.",
                    de: "Newtons erstes Trägheitsgesetz erklärt, dass unsere Körper sich weiter nach vorne bewegen, wenn das Auto plötzlich anhält, wodurch Sicherheitsgurte für die Sicherheit wesentlich sind.",
                    nl: "Newton's eerste traagheidsgrens verklaart dat onze lichamen vooruit blijven bewegen wanneer de auto plotseling stopt, waardoor veiligheidsgordels essentieel zijn voor veiligheid."
                }
            },
            {
                question: {
                    en: "How do simple machines help us in everyday life?",
                    es: "¿Cómo nos ayudan las máquinas simples en la vida cotidiana?",
                    de: "Wie helfen uns einfache Maschinen im Alltag?",
                    nl: "Hoe helpen eenvoudige machines ons in het dagelijks leven?"
                },
                options: [
                    { en: "They make work easier by changing force or direction", es: "Hacen el trabajo más fácil cambiando la fuerza o dirección", de: "Sie machen Arbeit einfacher durch Änderung von Kraft oder Richtung", nl: "Ze maken werk makkelijker door kracht of richting te veranderen" },
                    { en: "They do all the work for us", es: "Hacen todo el trabajo por nosotros", de: "Sie machen die ganze Arbeit für uns", nl: "Ze doen al het werk voor ons" },
                    { en: "They make us stronger", es: "Nos hacen más fuertes", de: "Sie machen uns stärker", nl: "Ze maken ons sterker" },
                    { en: "They create energy", es: "Crean energía", de: "Sie erzeugen Energie", nl: "Ze creëren energie" }
                ],
                correct: 0,
                explanation: {
                    en: "Simple machines reduce the effort needed to do work by changing the direction or magnitude of force, making difficult tasks more manageable.",
                    es: "Las máquinas simples reducen el esfuerzo necesario para hacer trabajo cambiando la dirección o magnitud de la fuerza, haciendo las tareas difíciles más manejables.",
                    de: "Einfache Maschinen reduzieren den Aufwand für Arbeit, indem sie die Richtung oder Größe der Kraft ändern und schwierige Aufgaben handhabbarer machen.",
                    nl: "Eenvoudige machines verminderen de inspanning die nodig is om werk te doen door de richting of grootte van kracht te veranderen, waardoor moeilijke taken beter beheersbaar worden."
                }
            },
            {
                question: {
                    en: "What is acceleration?",
                    es: "¿Qué es la aceleración?",
                    de: "Was ist Beschleunigung?",
                    nl: "Wat is versnelling?"
                },
                options: [
                    { en: "The rate of change in velocity", es: "La tasa de cambio en la velocidad", de: "Die Änderungsrate der Geschwindigkeit", nl: "De snelheid van verandering in snelheid" },
                    { en: "How fast something is moving", es: "Qué tan rápido se mueve algo", de: "Wie schnell sich etwas bewegt", nl: "Hoe snel iets beweegt" },
                    { en: "The distance traveled", es: "La distancia recorrida", de: "Die zurückgelegte Strecke", nl: "De afgelegde afstand" },
                    { en: "The force applied to an object", es: "La fuerza aplicada a un objeto", de: "Die auf ein Objekt angewandte Kraft", nl: "De kracht toegepast op een voorwerp" }
                ],
                correct: 0,
                explanation: {
                    en: "Acceleration is the rate at which an object's velocity changes over time, whether speeding up, slowing down, or changing direction.",
                    es: "La aceleración es la tasa a la cual la velocidad de un objeto cambia con el tiempo, ya sea acelerando, desacelerando o cambiando de dirección.",
                    de: "Beschleunigung ist die Rate, mit der sich die Geschwindigkeit eines Objekts über die Zeit ändert, sei es beim Beschleunigen, Verlangsamen oder Richtungsändern.",
                    nl: "Versnelling is de snelheid waarmee de snelheid van een voorwerp verandert over tijd, of het nu versnelt, vertraagt of van richting verandert."
                }
            },
            {
                question: {
                    en: "What is velocity?",
                    es: "¿Qué es la velocidad?",
                    de: "Was ist Geschwindigkeit?",
                    nl: "Wat is snelheid?"
                },
                options: [
                    { en: "Speed with direction", es: "Rapidez con dirección", de: "Geschwindigkeit mit Richtung", nl: "Snelheid met richting" },
                    { en: "Only how fast something moves", es: "Solo qué tan rápido se mueve algo", de: "Nur wie schnell sich etwas bewegt", nl: "Alleen hoe snel iets beweegt" },
                    { en: "The force on an object", es: "La fuerza sobre un objeto", de: "Die Kraft auf ein Objekt", nl: "De kracht op een voorwerp" },
                    { en: "How heavy something is", es: "Qué tan pesado es algo", de: "Wie schwer etwas ist", nl: "Hoe zwaar iets is" }
                ],
                correct: 0,
                explanation: {
                    en: "Velocity is speed with direction - it tells us both how fast an object is moving and which way it's going.",
                    es: "La velocidad es rapidez con dirección - nos dice tanto qué tan rápido se mueve un objeto como hacia dónde va.",
                    de: "Geschwindigkeit ist Schnelligkeit mit Richtung - sie sagt uns sowohl wie schnell sich ein Objekt bewegt als auch in welche Richtung es geht.",
                    nl: "Snelheid is tempo met richting - het vertelt ons zowel hoe snel een voorwerp beweegt als welke kant het opgaat."
                }
            },
            {
                question: {
                    en: "What happens when you hit a ball with a bat?",
                    es: "¿Qué pasa cuando golpeas una pelota con un bate?",
                    de: "Was passiert, wenn du einen Ball mit einem Schläger triffst?",
                    nl: "Wat gebeurt er als je een bal raakt met een knuppel?"
                },
                options: [
                    { en: "You transfer momentum to the ball", es: "Transfieres momento a la pelota", de: "Du überträgst Impuls auf den Ball", nl: "Je draagt momentum over aan de bal" },
                    { en: "The ball changes color", es: "La pelota cambia de color", de: "Der Ball ändert die Farbe", nl: "De bal verandert van kleur" },
                    { en: "The bat gets heavier", es: "El bate se vuelve más pesado", de: "Der Schläger wird schwerer", nl: "De knuppel wordt zwaarder" },
                    { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
                ],
                correct: 0,
                explanation: {
                    en: "When you hit a ball, momentum transfers from the moving bat to the ball, causing the ball to move in the direction of the bat's motion.",
                    es: "Cuando golpeas una pelota, el momento se transfiere del bate en movimiento a la pelota, causando que la pelota se mueva en la dirección del movimiento del bate.",
                    de: "Wenn du einen Ball triffst, überträgt sich der Impuls vom sich bewegenden Schläger auf den Ball, wodurch sich der Ball in Richtung der Schlägerbewegung bewegt.",
                    nl: "Wanneer je een bal raakt, draagt momentum over van de bewegende knuppel naar de bal, waardoor de bal beweegt in de richting van de beweging van de knuppel."
                }
            },
            {
                question: {
                    en: "What is centripetal force?",
                    es: "¿Qué es la fuerza centrípeta?",
                    de: "Was ist Zentripetalkraft?",
                    nl: "Wat is middelpuntzoekende kracht?"
                },
                options: [
                    { en: "The force that keeps objects moving in a circle", es: "La fuerza que mantiene los objetos moviéndose en círculo", de: "Die Kraft, die Objekte in einem Kreis bewegen lässt", nl: "De kracht die voorwerpen in een cirkel laat bewegen" },
                    { en: "The force that pushes objects away", es: "La fuerza que empuja objetos lejos", de: "Die Kraft, die Objekte wegdrückt", nl: "De kracht die voorwerpen wegduwt" },
                    { en: "The force of gravity only", es: "Solo la fuerza de gravedad", de: "Nur die Schwerkraft", nl: "Alleen de zwaartekracht" },
                    { en: "The force that makes things hot", es: "La fuerza que hace las cosas calientes", de: "Die Kraft, die Dinge heiß macht", nl: "De kracht die dingen heet maakt" }
                ],
                correct: 0,
                explanation: {
                    en: "Centripetal force constantly pulls an object toward the center of a circular path, keeping it moving in a curved trajectory instead of straight.",
                    es: "La fuerza centrípeta constantemente atrae un objeto hacia el centro de un camino circular, manteniéndolo moviéndose en una trayectoria curvada en lugar de recta.",
                    de: "Zentripetalkraft zieht ein Objekt ständig zum Mittelpunkt einer kreisförmigen Bahn und hält es auf einer gebogenen statt geraden Flugbahn.",
                    nl: "Middelpuntzoekende kracht trekt een voorwerp constant naar het centrum van een cirkelvormig pad, houdt het bewegend in een gebogen traject in plaats van recht."
                }
            },
            {
                question: {
                    en: "What is the difference between mass and weight?",
                    es: "¿Cuál es la diferencia entre masa y peso?",
                    de: "Was ist der Unterschied zwischen Masse und Gewicht?",
                    nl: "Wat is het verschil tussen massa en gewicht?"
                },
                options: [
                    { en: "Mass is matter amount, weight is gravity's pull on mass", es: "Masa es la cantidad de materia, peso es la atracción de gravedad sobre la masa", de: "Masse ist die Materenmenge, Gewicht ist die Anziehung der Schwerkraft auf die Masse", nl: "Massa is de hoeveelheid materie, gewicht is de aantrekking van zwaartekracht op massa" },
                    { en: "They are exactly the same thing", es: "Son exactamente la misma cosa", de: "Sie sind genau dasselbe", nl: "Ze zijn precies hetzelfde" },
                    { en: "Weight is bigger than mass", es: "El peso es mayor que la masa", de: "Gewicht ist größer als Masse", nl: "Gewicht is groter dan massa" },
                    { en: "Mass only exists on Earth", es: "La masa solo existe en la Tierra", de: "Masse existiert nur auf der Erde", nl: "Massa bestaat alleen op aarde" }
                ],
                correct: 0,
                explanation: {
                    en: "Mass is the amount of matter in an object and stays constant everywhere, while weight is the force of gravity acting on that mass and changes with gravity.",
                    es: "La masa es la cantidad de materia en un objeto y se mantiene constante en todas partes, mientras el peso es la fuerza de gravedad actuando sobre esa masa y cambia con la gravedad.",
                    de: "Masse ist die Menge an Materie in einem Objekt und bleibt überall konstant, während Gewicht die Kraft der Schwerkraft auf diese Masse ist und sich mit der Schwerkraft ändert.",
                    nl: "Massa is de hoeveelheid materie in een voorwerp en blijft overal constant, terwijl gewicht de kracht van zwaartekracht is die op die massa inwerkt en verandert met zwaartekracht."
                }
            },
            {
                question: {
                    en: "What makes a ball curve when you throw it with spin?",
                    es: "¿Qué hace que una pelota se curve cuando la lanzas con giro?",
                    de: "Was lässt einen Ball sich krümmen, wenn du ihn mit Spin wirfst?",
                    nl: "Wat zorgt ervoor dat een bal kromtrekt als je hem met draai gooit?"
                },
                options: [
                    { en: "Air pressure differences created by spin", es: "Diferencias de presión de aire creadas por el giro", de: "Luftdruckunterschiede durch Spin erzeugt", nl: "Luchtdrukverschillen veroorzaakt door draai" },
                    { en: "The ball gets lighter", es: "La pelota se vuelve más liviana", de: "Der Ball wird leichter", nl: "De bal wordt lichter" },
                    { en: "Magic forces", es: "Fuerzas mágicas", de: "Magische Kräfte", nl: "Magische krachten" },
                    { en: "The ball changes shape", es: "La pelota cambia de forma", de: "Der Ball ändert die Form", nl: "De bal verandert van vorm" }
                ],
                correct: 0,
                explanation: {
                    en: "Spin creates different air pressures on opposite sides of the ball, causing it to curve toward the lower pressure side as it flies through the air.",
                    es: "El giro crea diferentes presiones de aire en lados opuestos de la pelota, causando que se curve hacia el lado de menor presión mientras vuela por el aire.",
                    de: "Spin erzeugt unterschiedliche Luftdrücke auf gegensätzlichen Seiten des Balls, wodurch er sich zur Seite mit niedrigerem Druck krümmt, während er durch die Luft fliegt.",
                    nl: "Draai creëert verschillende luchtdrukken aan tegenovergestelde kanten van de bal, waardoor hij naar de kant met lagere druk kromtrekt terwijl hij door de lucht vliegt."
                }
            },
            {
                question: {
                    en: "What is torque?",
                    es: "¿Qué es el torque?",
                    de: "Was ist Drehmoment?",
                    nl: "Wat is koppel?"
                },
                options: [
                    { en: "Rotational force around a pivot point", es: "Fuerza rotacional alrededor de un punto de apoyo", de: "Rotationskraft um einen Drehpunkt", nl: "Rotatiekracht rond een draaipunt" },
                    { en: "Straight-line pushing force", es: "Fuerza de empuje en línea recta", de: "Geradlinige Schubkraft", nl: "Rechtlijnige duwkracht" },
                    { en: "The weight of an object", es: "El peso de un objeto", de: "Das Gewicht eines Objekts", nl: "Het gewicht van een voorwerp" },
                    { en: "The speed something moves", es: "La velocidad a la que algo se mueve", de: "Die Geschwindigkeit, mit der sich etwas bewegt", nl: "De snelheid waarmee iets beweegt" }
                ],
                correct: 0,
                explanation: {
                    en: "Torque is the rotational equivalent of force - it's what causes objects to spin or rotate around an axis or pivot point.",
                    es: "El torque es el equivalente rotacional de la fuerza - es lo que causa que los objetos giren o roten alrededor de un eje o punto de apoyo.",
                    de: "Drehmoment ist das rotationsäquivalent der Kraft - es bewirkt, dass Objekte sich um eine Achse oder einen Drehpunkt drehen oder rotieren.",
                    nl: "Koppel is het rotatie-equivalent van kracht - het zorgt ervoor dat voorwerpen draaien of roteren rond een as of draaipunt."
                }
            },
            {
                question: {
                    en: "What determines how far a projectile travels?",
                    es: "¿Qué determina qué tan lejos viaja un proyectil?",
                    de: "Was bestimmt, wie weit ein Projektil reist?",
                    nl: "Wat bepaalt hoe ver een projectiel reist?"
                },
                options: [
                    { en: "Launch angle and initial velocity", es: "Ángulo de lanzamiento y velocidad inicial", de: "Abschusswinkel und Anfangsgeschwindigkeit", nl: "Lanceerhoek en begin snelheid" },
                    { en: "Only the color of the object", es: "Solo el color del objeto", de: "Nur die Farbe des Objekts", nl: "Alleen de kleur van het voorwerp" },
                    { en: "The day of the week", es: "El día de la semana", de: "Der Wochentag", nl: "De dag van de week" },
                    { en: "How loud you throw it", es: "Qué tan fuerte lo lances", de: "Wie laut du es wirfst", nl: "Hoe hard je het gooit" }
                ],
                correct: 0,
                explanation: {
                    en: "A projectile's range depends on its launch angle (45 degrees is optimal) and initial velocity - faster launch and proper angle achieve maximum distance.",
                    es: "El alcance de un proyectil depende de su ángulo de lanzamiento (45 grados es óptimo) y velocidad inicial - lanzamiento más rápido y ángulo apropiado logran distancia máxima.",
                    de: "Die Reichweite eines Projektils hängt von seinem Abschusswinkel (45 Grad ist optimal) und der Anfangsgeschwindigkeit ab - schnellerer Abschuss und richtiger Winkel erreichen maximale Entfernung.",
                    nl: "Het bereik van een projectiel hangt af van zijn lanceerhoek (45 graden is optimaal) en begin snelheid - snellere lancering en juiste hoek bereiken maximale afstand."
                }
            },
            {
                question: {
                    en: "What force opposes motion in all mechanical systems?",
                    es: "¿Qué fuerza se opone al movimiento en todos los sistemas mecánicos?",
                    de: "Welche Kraft widersteht der Bewegung in allen mechanischen Systemen?",
                    nl: "Welke kracht weerstaat beweging in alle mechanische systemen?"
                },
                options: [
                    { en: "Friction", es: "Fricción", de: "Reibung", nl: "Wrijving" },
                    { en: "Gravity", es: "Gravedad", de: "Schwerkraft", nl: "Zwaartekracht" },
                    { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
                    { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" }
                ],
                correct: 0,
                explanation: {
                    en: "Friction is present in all mechanical systems where surfaces contact each other, always opposing relative motion and converting kinetic energy to heat.",
                    es: "La fricción está presente en todos los sistemas mecánicos donde las superficies se contactan, siempre oponiéndose al movimiento relativo y convirtiendo energía cinética en calor.",
                    de: "Reibung ist in allen mechanischen Systemen vorhanden, wo sich Oberflächen berühren, widersteht immer der relativen Bewegung und wandelt kinetische Energie in Wärme um.",
                    nl: "Wrijving is aanwezig in alle mechanische systemen waar oppervlakken elkaar raken, weerstaat altijd relatieve beweging en zet kinetische energie om in warmte."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/science', level8);
    }
})();