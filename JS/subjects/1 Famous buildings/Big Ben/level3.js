(function() {
    const questions = [
        {
            question: {
                en: "What is the precise weight of the pendulum?",
                es: "¿Cuál es el peso preciso del péndulo?",
                de: "Was ist das genaue Gewicht des Pendels?",
                nl: "Wat is het precieze gewicht van de slinger?"
            },
            options: {
                en: ["200 kg (440 pounds)", "300 kg (660 pounds)", "400 kg (880 pounds)", "500 kg (1100 pounds)"],
                es: ["200 kg (440 libras)", "300 kg (660 libras)", "400 kg (880 libras)", "500 kg (1100 libras)"],
                de: ["200 kg (440 Pfund)", "300 kg (660 Pfund)", "400 kg (880 Pfund)", "500 kg (1100 Pfund)"],
                nl: ["200 kg (440 pond)", "300 kg (660 pond)", "400 kg (880 pond)", "500 kg (1100 pond)"]
            },
            correct: 1,
            explanation: {
                en: "The pendulum weighs precisely 300 kg (660 pounds). This exact weight, combined with its 13-foot length, gives it a precise one-second swing period that regulates the entire clock mechanism.",
                es: "El péndulo pesa precisamente 300 kg (660 libras). Este peso exacto, combinado con su longitud de 13 pies, le da un período de oscilación preciso de un segundo que regula todo el mecanismo del reloj.",
                de: "Das Pendel wiegt genau 300 kg (660 Pfund). Dieses exakte Gewicht, kombiniert mit seiner 13-Fuß-Länge, gibt ihm eine präzise einsekündige Schwingungsperiode, die den gesamten Uhrmechanismus reguliert.",
                nl: "De slinger weegt precies 300 kg (660 pond). Dit exacte gewicht, gecombineerd met zijn lengte van 13 voet, geeft het een precieze slingerperiode van één seconde die het hele klokmechanisme reguleert."
            }
        },
        {
            question: {
                en: "What innovative escapement mechanism did Denison design for Big Ben?",
                es: "¿Qué mecanismo de escape innovador diseñó Denison para Big Ben?",
                de: "Welchen innovativen Hemmungsmechanismus entwarf Denison für Big Ben?",
                nl: "Welk innovatief ontsnappingsmechanisme ontwierp Denison voor Big Ben?"
            },
            options: {
                en: ["Single-stage gravity escapement", "Double two-legged gravity escapement", "Double three-legged gravity escapement", "Quadruple escapement"],
                es: ["Escape de gravedad de una etapa", "Escape de gravedad doble de dos patas", "Escape de gravedad doble de tres patas", "Escape cuádruple"],
                de: ["Einstufige Schwerkrafthemmung", "Doppelte zweibeinige Schwerkrafthemmung", "Doppelte dreibeinige Schwerkrafthemmung", "Vierfachhemmung"],
                nl: ["Eenfasige zwaartekrachtontsnapping", "Dubbele tweepotensontsnapping", "Dubbele driepotensontsnapping", "Viervoudige ontsnapping"]
            },
            correct: 2,
            explanation: {
                en: "Denison designed a revolutionary double three-legged gravity escapement for Big Ben. This three-stage mechanism was the first of its kind for large turret clocks and provides exceptional accuracy by isolating the pendulum from external forces.",
                es: "Denison diseñó un revolucionario escape de gravedad doble de tres patas para Big Ben. Este mecanismo de tres etapas fue el primero de su tipo para grandes relojes de torre y proporciona una precisión excepcional al aislar el péndulo de fuerzas externas.",
                de: "Denison entwarf eine revolutionäre doppelte dreibeinige Schwerkrafthemmung für Big Ben. Dieser dreistufige Mechanismus war der erste seiner Art für große Turmuhren und bietet außergewöhnliche Genauigkeit, indem er das Pendel von äußeren Kräften isoliert.",
                nl: "Denison ontwierp een revolutionair dubbel driepotig zwaartekrachtontsnappingsmechanisme voor Big Ben. Dit driefasenmechanisme was het eerste in zijn soort voor grote torenklokken en biedt uitzonderlijke nauwkeurigheid door de slinger te isoleren van externe krachten."
            }
        },
        {
            question: {
                en: "What is the speed of the minute hand?",
                es: "¿Cuál es la velocidad de la manecilla de los minutos?",
                de: "Wie schnell bewegt sich der Minutenzeiger?",
                nl: "Wat is de snelheid van de minutenwijzer?"
            },
            options: {
                en: ["3 degrees per minute", "6 degrees per minute", "9 degrees per minute", "12 degrees per minute"],
                es: ["3 grados por minuto", "6 grados por minuto", "9 grados por minuto", "12 grados por minuto"],
                de: ["3 Grad pro Minute", "6 Grad pro Minute", "9 Grad pro Minute", "12 Grad pro Minute"],
                nl: ["3 graden per minuut", "6 graden per minuut", "9 graden per minuut", "12 graden per minuut"]
            },
            correct: 1,
            explanation: {
                en: "The minute hand moves at 6 degrees per minute (0.1 degrees per second). This constant, precise movement is driven by the clock mechanism and regulated by the pendulum's one-second beat.",
                es: "La manecilla de los minutos se mueve a 6 grados por minuto (0.1 grados por segundo). Este movimiento constante y preciso es impulsado por el mecanismo del reloj y regulado por el latido de un segundo del péndulo.",
                de: "Der Minutenzeiger bewegt sich mit 6 Grad pro Minute (0,1 Grad pro Sekunde). Diese konstante, präzise Bewegung wird vom Uhrmechanismus angetrieben und durch den Sekundenschlag des Pendels reguliert.",
                nl: "De minutenwijzer beweegt met 6 graden per minuut (0,1 graden per seconde). Deze constante, precieze beweging wordt aangedreven door het klokmechanisme en gereguleerd door de secondeslag van de slinger."
            }
        },
        {
            question: {
                en: "What is the total weight of the clock mechanism?",
                es: "¿Cuál es el peso total del mecanismo del reloj?",
                de: "Wie viel wiegt der gesamte Uhrmechanismus?",
                nl: "Wat is het totale gewicht van het klokmechanisme?"
            },
            options: {
                en: ["2 tons", "5 tons", "8 tons", "10 tons"],
                es: ["2 toneladas", "5 toneladas", "8 toneladas", "10 toneladas"],
                de: ["2 Tonnen", "5 Tonnen", "8 Tonnen", "10 Tonnen"],
                nl: ["2 ton", "5 ton", "8 ton", "10 ton"]
            },
            correct: 1,
            explanation: {
                en: "The entire clock mechanism weighs 5 tons. This includes the going train (timekeeping), striking train (chiming), gears, weights, and the escapement system, but not the bells or pendulum.",
                es: "Todo el mecanismo del reloj pesa 5 toneladas. Esto incluye el tren de marcha (cronometraje), tren de golpeo (campanadas), engranajes, pesas y el sistema de escape, pero no las campanas ni el péndulo.",
                de: "Der gesamte Uhrmechanismus wiegt 5 Tonnen. Dies umfasst das Gangwerk (Zeitmessung), Schlagwerk (Läuten), Zahnräder, Gewichte und das Hemmungssystem, aber nicht die Glocken oder das Pendel.",
                nl: "Het hele klokmechanisme weegt 5 ton. Dit omvat de tijdtreintafel (tijdmeting), slagtreintafel (luiden), tandwielen, gewichten en het ontsnappingssysteem, maar niet de klokken of slinger."
            }
        },
        {
            question: {
                en: "How often is the clock wound?",
                es: "¿Con qué frecuencia se da cuerda al reloj?",
                de: "Wie oft wird die Uhr aufgezogen?",
                nl: "Hoe vaak wordt de klok opgewonden?"
            },
            options: {
                en: ["Daily", "Three times per week (Monday, Wednesday, Friday)", "Once per week", "Every two weeks"],
                es: ["Diariamente", "Tres veces por semana (lunes, miércoles, viernes)", "Una vez por semana", "Cada dos semanas"],
                de: ["Täglich", "Dreimal pro Woche (Montag, Mittwoch, Freitag)", "Einmal pro Woche", "Alle zwei Wochen"],
                nl: ["Dagelijks", "Drie keer per week (maandag, woensdag, vrijdag)", "Eenmaal per week", "Elke twee weken"]
            },
            correct: 1,
            explanation: {
                en: "The clock is wound three times per week on Monday, Wednesday, and Friday. This regular schedule ensures the weights are raised before they run down, keeping the clock running continuously.",
                es: "Al reloj se le da cuerda tres veces por semana los lunes, miércoles y viernes. Este horario regular asegura que las pesas se eleven antes de que se agoten, manteniendo el reloj funcionando continuamente.",
                de: "Die Uhr wird dreimal pro Woche am Montag, Mittwoch und Freitag aufgezogen. Dieser regelmäßige Zeitplan stellt sicher, dass die Gewichte angehoben werden, bevor sie ablaufen, und hält die Uhr kontinuierlich am Laufen.",
                nl: "De klok wordt drie keer per week opgewonden op maandag, woensdag en vrijdag. Dit regelmatige schema zorgt ervoor dat de gewichten worden opgetrokken voordat ze opraken, waardoor de klok continu blijft lopen."
            }
        },
        {
            question: {
                en: "How long does the winding process take?",
                es: "¿Cuánto tiempo tarda el proceso de dar cuerda?",
                de: "Wie lange dauert der Aufziehvorgang?",
                nl: "Hoe lang duurt het opwindproces?"
            },
            options: {
                en: ["30 minutes", "1 hour", "1.5 hours", "2 hours"],
                es: ["30 minutos", "1 hora", "1.5 horas", "2 horas"],
                de: ["30 Minuten", "1 Stunde", "1,5 Stunden", "2 Stunden"],
                nl: ["30 minuten", "1 uur", "1,5 uur", "2 uur"]
            },
            correct: 2,
            explanation: {
                en: "The winding process takes approximately 1.5 hours using an electric motor. Originally, the clock was wound by hand, which was extremely labor-intensive given the massive weights that needed to be raised.",
                es: "El proceso de dar cuerda tarda aproximadamente 1.5 horas usando un motor eléctrico. Originalmente, el reloj se daba cuerda a mano, lo cual era extremadamente laborioso dadas las masivas pesas que necesitaban elevarse.",
                de: "Der Aufziehvorgang dauert etwa 1,5 Stunden mit einem Elektromotor. Ursprünglich wurde die Uhr von Hand aufgezogen, was angesichts der massiven Gewichte, die angehoben werden mussten, äußerst arbeitsintensiv war.",
                nl: "Het opwindproces duurt ongeveer 1,5 uur met een elektromotor. Oorspronkelijk werd de klok handmatig opgewonden, wat extreem arbeidsintensief was gezien de massieve gewichten die moesten worden opgetrokken."
            }
        },
        {
            question: {
                en: "What temperature compensation feature does the pendulum have?",
                es: "¿Qué característica de compensación de temperatura tiene el péndulo?",
                de: "Welche Temperaturkompensationsfunktion hat das Pendel?",
                nl: "Welke temperatuurcompensatiefunctie heeft de slinger?"
            },
            options: {
                en: ["Water cooling system", "Zinc and steel rod thermal expansion compensation", "Electronic temperature control", "No compensation"],
                es: ["Sistema de enfriamiento por agua", "Compensación de expansión térmica de varilla de zinc y acero", "Control de temperatura electrónico", "Sin compensación"],
                de: ["Wasserkühlungssystem", "Zink- und Stahlstab-Wärmeausdehnungskompensation", "Elektronische Temperaturregelung", "Keine Kompensation"],
                nl: ["Waterkoelsysteem", "Zink en staal staaf thermische uitzettingscompensatie", "Elektronische temperatuurregeling", "Geen compensatie"]
            },
            correct: 1,
            explanation: {
                en: "The pendulum rod uses a zinc and steel thermal expansion compensation system. As temperature changes, the different expansion rates of zinc and steel offset each other, maintaining the pendulum's effective length and keeping accurate time.",
                es: "La varilla del péndulo utiliza un sistema de compensación de expansión térmica de zinc y acero. A medida que cambia la temperatura, las diferentes tasas de expansión del zinc y el acero se compensan entre sí, manteniendo la longitud efectiva del péndulo y manteniendo la hora precisa.",
                de: "Die Pendelstange verwendet ein Zink- und Stahl-Wärmeausdehnungskompensationssystem. Bei Temperaturänderungen gleichen die unterschiedlichen Ausdehnungsraten von Zink und Stahl einander aus, wodurch die effektive Länge des Pendels erhalten bleibt und die genaue Zeit gehalten wird.",
                nl: "De slingerstang gebruikt een zink en staal thermische uitzettingscompensatiesysteem. Naarmate de temperatuur verandert, compenseren de verschillende uitzettingspercentages van zink en staal elkaar, waardoor de effectieve lengte van de slinger behouden blijft en nauwkeurige tijd wordt gehouden."
            }
        },
        {
            question: {
                en: "What are the Airy dials?",
                es: "¿Qué son los diales Airy?",
                de: "Was sind die Airy-Zifferblätter?",
                nl: "Wat zijn de Airy-wijzerplaten?"
            },
            options: {
                en: ["Illuminated clock faces", "Ventilated clock faces to reduce wind pressure", "Digital displays", "Backup time displays"],
                es: ["Esferas de reloj iluminadas", "Esferas de reloj ventiladas para reducir la presión del viento", "Pantallas digitales", "Pantallas de tiempo de respaldo"],
                de: ["Beleuchtete Zifferblätter", "Belüftete Zifferblätter zur Reduzierung des Winddrucks", "Digitale Anzeigen", "Backup-Zeitanzeigen"],
                nl: ["Verlichte wijzerplaten", "Geventileerde wijzerplaten om winddruk te verminderen", "Digitale displays", "Back-up tijdweergaven"]
            },
            correct: 1,
            explanation: {
                en: "The Airy dials are ventilated clock faces designed by Astronomer Royal George Biddell Airy. The ventilation holes reduce wind pressure on the massive clock hands, preventing the wind from affecting the clock's timekeeping accuracy.",
                es: "Los diales Airy son esferas de reloj ventiladas diseñadas por el Astrónomo Real George Biddell Airy. Los orificios de ventilación reducen la presión del viento en las masivas manecillas del reloj, evitando que el viento afecte la precisión del cronometraje del reloj.",
                de: "Die Airy-Zifferblätter sind belüftete Zifferblätter, die vom königlichen Astronomen George Biddell Airy entworfen wurden. Die Belüftungslöcher reduzieren den Winddruck auf die massiven Uhrzeiger und verhindern, dass der Wind die Zeitgenauigkeit der Uhr beeinflusst.",
                nl: "De Airy-wijzerplaten zijn geventileerde wijzerplaten ontworpen door Astronoom Royal George Biddell Airy. De ventilatieopeningen verminderen de winddruk op de massieve klokwijzers, waardoor wordt voorkomen dat de wind de nauwkeurigheid van de klok beïnvloedt."
            }
        },
        {
            question: {
                en: "How many pieces of opal glass are in each clock face?",
                es: "¿Cuántas piezas de vidrio opalino hay en cada esfera del reloj?",
                de: "Wie viele Stücke Opalglas gibt es in jedem Zifferblatt?",
                nl: "Hoeveel stukken opaal glas zitten er in elke wijzerplaat?"
            },
            options: {
                en: ["156 pieces", "234 pieces", "312 pieces", "400 pieces"],
                es: ["156 piezas", "234 piezas", "312 piezas", "400 piezas"],
                de: ["156 Stücke", "234 Stücke", "312 Stücke", "400 Stücke"],
                nl: ["156 stukken", "234 stukken", "312 stukken", "400 stukken"]
            },
            correct: 2,
            explanation: {
                en: "Each clock face is composed of 312 individual pieces of opal glass. This translucent material allows the clock faces to be illuminated from behind at night while remaining visible during the day.",
                es: "Cada esfera del reloj está compuesta por 312 piezas individuales de vidrio opalino. Este material translúcido permite que las esferas del reloj se iluminen desde atrás por la noche mientras permanecen visibles durante el día.",
                de: "Jedes Zifferblatt besteht aus 312 einzelnen Stücken Opalglas. Dieses durchscheinende Material ermöglicht es, dass die Zifferblätter nachts von hinten beleuchtet werden, während sie tagsüber sichtbar bleiben.",
                nl: "Elke wijzerplaat bestaat uit 312 afzonderlijke stukken opaal glas. Dit doorschijnende materiaal maakt het mogelijk dat de wijzerplaten 's nachts van achteren worden verlicht terwijl ze overdag zichtbaar blijven."
            }
        },
        {
            question: {
                en: "What decorative treatment do the numerals and hands receive?",
                es: "¿Qué tratamiento decorativo reciben los números y las manecillas?",
                de: "Welche dekorative Behandlung erhalten die Ziffern und Zeiger?",
                nl: "Welke decoratieve behandeling krijgen de cijfers en wijzers?"
            },
            options: {
                en: ["Chrome plating", "Gilding (gold coating)", "Black paint", "Silver leaf"],
                es: ["Cromado", "Dorado (revestimiento de oro)", "Pintura negra", "Hoja de plata"],
                de: ["Verchromung", "Vergoldung (Goldbeschichtung)", "Schwarze Farbe", "Silberblatt"],
                nl: ["Verchroming", "Vergulding (gouden coating)", "Zwarte verf", "Zilverblad"]
            },
            correct: 1,
            explanation: {
                en: "The numerals and hands are gilded with gold, giving them a bright, reflective appearance that makes them easily visible from a distance. The gilding has been maintained through regular restoration work.",
                es: "Los números y las manecillas están dorados con oro, dándoles una apariencia brillante y reflectante que los hace fácilmente visibles desde la distancia. El dorado se ha mantenido a través de trabajos de restauración regulares.",
                de: "Die Ziffern und Zeiger sind mit Gold vergoldet, was ihnen ein helles, reflektierendes Aussehen verleiht, das sie aus der Ferne gut sichtbar macht. Die Vergoldung wurde durch regelmäßige Restaurierungsarbeiten erhalten.",
                nl: "De cijfers en wijzers zijn verguld met goud, waardoor ze een helder, reflecterend uiterlijk krijgen dat ze gemakkelijk zichtbaar maakt van een afstand. De vergulding is behouden gebleven door regelmatige restauratiewerkzaamheden."
            }
        },
        {
            question: {
                en: "How many light bulbs illuminate each clock face?",
                es: "¿Cuántas bombillas iluminan cada esfera del reloj?",
                de: "Wie viele Glühbirnen beleuchten jedes Zifferblatt?",
                nl: "Hoeveel gloeilampen verlichten elke wijzerplaat?"
            },
            options: {
                en: ["14 bulbs of 85 watts each", "28 bulbs of 85 watts each", "42 bulbs of 60 watts each", "56 bulbs of 40 watts each"],
                es: ["14 bombillas de 85 vatios cada una", "28 bombillas de 85 vatios cada una", "42 bombillas de 60 vatios cada una", "56 bombillas de 40 vatios cada una"],
                de: ["14 Glühbirnen à 85 Watt", "28 Glühbirnen à 85 Watt", "42 Glühbirnen à 60 Watt", "56 Glühbirnen à 40 Watt"],
                nl: ["14 lampen van 85 watt elk", "28 lampen van 85 watt elk", "42 lampen van 60 watt elk", "56 lampen van 40 watt elk"]
            },
            correct: 1,
            explanation: {
                en: "Each clock face is illuminated by 28 85-watt bulbs positioned behind the opal glass. This provides sufficient illumination to make the clock faces clearly visible at night from across London.",
                es: "Cada esfera del reloj está iluminada por 28 bombillas de 85 vatios colocadas detrás del vidrio opalino. Esto proporciona suficiente iluminación para que las esferas del reloj sean claramente visibles por la noche desde Londres.",
                de: "Jedes Zifferblatt wird von 28 85-Watt-Glühbirnen beleuchtet, die hinter dem Opalglas positioniert sind. Dies bietet ausreichend Beleuchtung, um die Zifferblätter nachts von ganz London aus deutlich sichtbar zu machen.",
                nl: "Elke wijzerplaat wordt verlicht door 28 lampen van 85 watt die achter het opaal glas zijn geplaatst. Dit biedt voldoende verlichting om de wijzerplaten 's nachts duidelijk zichtbaar te maken vanuit heel Londen."
            }
        },
        {
            question: {
                en: "Where is the 1859 crack located on the bell?",
                es: "¿Dónde se encuentra la grieta de 1859 en la campana?",
                de: "Wo befindet sich der Riss von 1859 an der Glocke?",
                nl: "Waar bevindt de scheur van 1859 zich op de klok?"
            },
            options: {
                en: ["At the top", "At 90 degrees from the hammer", "At the bottom", "At 180 degrees from the hammer"],
                es: ["En la parte superior", "A 90 grados del martillo", "En la parte inferior", "A 180 grados del martillo"],
                de: ["Oben", "Bei 90 Grad vom Hammer", "Unten", "Bei 180 Grad vom Hammer"],
                nl: ["Aan de bovenkant", "Op 90 graden van de hamer", "Aan de onderkant", "Op 180 graden van de hamer"]
            },
            correct: 1,
            explanation: {
                en: "The famous 1859 crack is located at 90 degrees from where the hammer strikes. After the crack appeared, the bell was rotated a quarter turn so the hammer strikes a different, undamaged section of the bell.",
                es: "La famosa grieta de 1859 se encuentra a 90 grados de donde golpea el martillo. Después de que apareció la grieta, la campana se giró un cuarto de vuelta para que el martillo golpee una sección diferente y sin daños de la campana.",
                de: "Der berühmte Riss von 1859 befindet sich bei 90 Grad von der Stelle, an der der Hammer schlägt. Nachdem der Riss auftrat, wurde die Glocke um eine Vierteldrehung gedreht, sodass der Hammer einen anderen, unbeschädigten Abschnitt der Glocke trifft.",
                nl: "De beroemde scheur van 1859 bevindt zich op 90 graden van waar de hamer slaat. Nadat de scheur verscheen, werd de klok een kwartslag gedraaid zodat de hamer een ander, onbeschadigd deel van de klok raakt."
            }
        },
        {
            question: {
                en: "What were the original and reduced hammer weights?",
                es: "¿Cuáles eran los pesos originales y reducidos del martillo?",
                de: "Was waren die ursprünglichen und reduzierten Hammergewichte?",
                nl: "Wat waren de oorspronkelijke en verminderde hamergewichten?"
            },
            options: {
                en: ["500 pounds reduced to 350 pounds", "661 pounds reduced to 441 pounds", "800 pounds reduced to 600 pounds", "1000 pounds reduced to 750 pounds"],
                es: ["500 libras reducidas a 350 libras", "661 libras reducidas a 441 libras", "800 libras reducidas a 600 libras", "1000 libras reducidas a 750 libras"],
                de: ["500 Pfund reduziert auf 350 Pfund", "661 Pfund reduziert auf 441 Pfund", "800 Pfund reduziert auf 600 Pfund", "1000 Pfund reduziert auf 750 Pfund"],
                nl: ["500 pond verminderd tot 350 pond", "661 pond verminderd tot 441 pond", "800 pond verminderd tot 600 pond", "1000 pond verminderd tot 750 pond"]
            },
            correct: 1,
            explanation: {
                en: "The original hammer weighed 661 pounds. After the bell cracked in 1859, the hammer was reduced to 441 pounds to strike with less force. Combined with rotating the bell, this prevented further damage.",
                es: "El martillo original pesaba 661 libras. Después de que la campana se agrietara en 1859, el martillo se redujo a 441 libras para golpear con menos fuerza. Combinado con girar la campana, esto previno más daños.",
                de: "Der ursprüngliche Hammer wog 661 Pfund. Nachdem die Glocke 1859 riss, wurde der Hammer auf 441 Pfund reduziert, um mit weniger Kraft zu schlagen. In Kombination mit der Drehung der Glocke verhinderte dies weitere Schäden.",
                nl: "De oorspronkelijke hamer woog 661 pond. Nadat de klok in 1859 scheurde, werd de hamer verminderd tot 441 pond om met minder kracht te slaan. Gecombineerd met het draaien van de klok, voorkwam dit verdere schade."
            }
        },
        {
            question: {
                en: "When was the scaffold removed from the tower?",
                es: "¿Cuándo se retiró el andamio de la torre?",
                de: "Wann wurde das Gerüst vom Turm entfernt?",
                nl: "Wanneer werd de steiger van de toren verwijderd?"
            },
            options: {
                en: ["1856", "1858", "1859, when the clock first struck", "1860"],
                es: ["1856", "1858", "1859, cuando el reloj sonó por primera vez", "1860"],
                de: ["1856", "1858", "1859, als die Uhr zum ersten Mal schlug", "1860"],
                nl: ["1856", "1858", "1859, toen de klok voor het eerst sloeg", "1860"]
            },
            correct: 2,
            explanation: {
                en: "The construction scaffold was removed in 1859 when the clock first struck, marking the official completion of the tower. This was a momentous occasion celebrated by Londoners who had watched the tower's construction for 16 years.",
                es: "El andamio de construcción se retiró en 1859 cuando el reloj sonó por primera vez, marcando la finalización oficial de la torre. Esta fue una ocasión trascendental celebrada por los londinenses que habían observado la construcción de la torre durante 16 años.",
                de: "Das Baugerüst wurde 1859 entfernt, als die Uhr zum ersten Mal schlug, was die offizielle Fertigstellung des Turms markierte. Dies war ein bedeutsames Ereignis, das von Londonern gefeiert wurde, die 16 Jahre lang den Bau des Turms beobachtet hatten.",
                nl: "De bouwsteiger werd in 1859 verwijderd toen de klok voor het eerst sloeg, wat de officiële voltooiing van de toren markeerde. Dit was een gedenkwaardige gebeurtenis die werd gevierd door Londenaren die 16 jaar lang de bouw van de toren hadden gevolgd."
            }
        },
        {
            question: {
                en: "Were test chimes conducted before the official opening?",
                es: "¿Se realizaron campanadas de prueba antes de la apertura oficial?",
                de: "Wurden Testglocken vor der offiziellen Eröffnung durchgeführt?",
                nl: "Werden er testklokslagen uitgevoerd voor de officiële opening?"
            },
            options: {
                en: ["No, it started immediately", "Yes, test chimes were conducted before official opening", "Only silent tests were performed", "Tests failed repeatedly"],
                es: ["No, comenzó inmediatamente", "Sí, se realizaron campanadas de prueba antes de la apertura oficial", "Solo se realizaron pruebas silenciosas", "Las pruebas fallaron repetidamente"],
                de: ["Nein, es begann sofort", "Ja, Testglocken wurden vor der offiziellen Eröffnung durchgeführt", "Nur stille Tests wurden durchgeführt", "Tests schlugen wiederholt fehl"],
                nl: ["Nee, het begon onmiddellijk", "Ja, er werden testklokslagen uitgevoerd voor de officiële opening", "Alleen stille tests werden uitgevoerd", "Tests mislukten herhaaldelijk"]
            },
            correct: 1,
            explanation: {
                en: "Yes, test chimes were conducted before the official opening to ensure the mechanism worked properly and the sound carried across London as intended. These tests allowed engineers to fine-tune the system.",
                es: "Sí, se realizaron campanadas de prueba antes de la apertura oficial para asegurar que el mecanismo funcionara correctamente y que el sonido se propagara por Londres como se pretendía. Estas pruebas permitieron a los ingenieros afinar el sistema.",
                de: "Ja, Testglocken wurden vor der offiziellen Eröffnung durchgeführt, um sicherzustellen, dass der Mechanismus ordnungsgemäß funktionierte und der Klang wie beabsichtigt über London hinweggetragen wurde. Diese Tests ermöglichten es Ingenieuren, das System feinzustimmen.",
                nl: "Ja, er werden testklokslagen uitgevoerd voor de officiële opening om ervoor te zorgen dat het mechanisme goed werkte en dat het geluid zoals bedoeld over Londen droeg. Deze tests stelden ingenieurs in staat om het systeem af te stellen."
            }
        },
        {
            question: {
                en: "What materials make up the tower's masonry?",
                es: "¿Qué materiales componen la mampostería de la torre?",
                de: "Aus welchen Materialien besteht das Mauerwerk des Turms?",
                nl: "Uit welke materialen bestaat het metselwerk van de toren?"
            },
            options: {
                en: ["Solid stone throughout", "Brick with Anston stone cladding", "Concrete with marble facing", "Granite blocks"],
                es: ["Piedra sólida en toda la estructura", "Ladrillo con revestimiento de piedra Anston", "Hormigón con revestimiento de mármol", "Bloques de granito"],
                de: ["Durchgehend massiver Stein", "Ziegel mit Anston-Steinverkleidung", "Beton mit Marmorverblendung", "Granitblöcke"],
                nl: ["Massieve steen door de hele toren", "Baksteen met Anston-steenbekleding", "Beton met marmeren afwerking", "Granieten blokken"]
            },
            correct: 1,
            explanation: {
                en: "The tower's structural core is brick, with a decorative cladding of Anston stone from Yorkshire. This combination provided both structural strength and the desired Gothic Revival aesthetic with its honey-colored limestone exterior.",
                es: "El núcleo estructural de la torre es de ladrillo, con un revestimiento decorativo de piedra Anston de Yorkshire. Esta combinación proporcionó tanto resistencia estructural como la estética deseada del Renacimiento Gótico con su exterior de piedra caliza color miel.",
                de: "Der strukturelle Kern des Turms besteht aus Ziegeln mit einer dekorativen Verkleidung aus Anston-Stein aus Yorkshire. Diese Kombination bot sowohl strukturelle Festigkeit als auch die gewünschte neugotische Ästhetik mit seiner honigfarbenen Kalksteinfassade.",
                nl: "De structurele kern van de toren is van baksteen, met een decoratieve bekleding van Anston-steen uit Yorkshire. Deze combinatie bood zowel structurele sterkte als de gewenste neogotische esthetiek met zijn honingkleurige kalkstenen buitenkant."
            }
        },
        {
            question: {
                en: "How does temperature affect the pendulum's timekeeping?",
                es: "¿Cómo afecta la temperatura al cronometraje del péndulo?",
                de: "Wie beeinflusst die Temperatur die Zeitmessung des Pendels?",
                nl: "Hoe beïnvloedt temperatuur de tijdmeting van de slinger?"
            },
            options: {
                en: ["No effect", "Compensated by zinc and steel expansion", "Manually adjusted daily", "Electronic compensation"],
                es: ["Sin efecto", "Compensado por la expansión de zinc y acero", "Ajustado manualmente diariamente", "Compensación electrónica"],
                de: ["Keine Auswirkung", "Kompensiert durch Zink- und Stahlausdehnung", "Täglich manuell angepasst", "Elektronische Kompensation"],
                nl: ["Geen effect", "Gecompenseerd door zink en staal uitzetting", "Handmatig dagelijks aangepast", "Elektronische compensatie"]
            },
            correct: 1,
            explanation: {
                en: "Temperature changes are automatically compensated by the pendulum's zinc and steel rod construction. As one metal expands with heat, the other contracts proportionally, maintaining the pendulum's effective length and keeping accurate time across temperature variations.",
                es: "Los cambios de temperatura se compensan automáticamente mediante la construcción de varilla de zinc y acero del péndulo. A medida que un metal se expande con el calor, el otro se contrae proporcionalmente, manteniendo la longitud efectiva del péndulo y manteniendo el tiempo preciso a través de las variaciones de temperatura.",
                de: "Temperaturänderungen werden automatisch durch die Zink- und Stahlstangenkonstruktion des Pendels kompensiert. Wenn sich ein Metall mit der Wärme ausdehnt, zieht sich das andere proportional zusammen, wodurch die effektive Länge des Pendels erhalten bleibt und über Temperaturschwankungen hinweg genaue Zeit gehalten wird.",
                nl: "Temperatuurveranderingen worden automatisch gecompenseerd door de zink en staal staafconstructie van de slinger. Naarmate het ene metaal uitzet met warmte, krimpt het andere proportioneel, waardoor de effectieve lengte van de slinger behouden blijft en nauwkeurige tijd wordt gehouden over temperatuurvariaties."
            }
        },
        {
            question: {
                en: "What restoration work occurred from 2017-2021?",
                es: "¿Qué trabajo de restauración ocurrió de 2017-2021?",
                de: "Welche Restaurierungsarbeiten fanden von 2017-2021 statt?",
                nl: "Welke restauratiewerkzaamheden vonden plaats van 2017-2021?"
            },
            options: {
                en: ["Minor cleaning only", "4-year £80 million conservation project", "Complete tower demolition and rebuild", "Clock mechanism replacement"],
                es: ["Solo limpieza menor", "Proyecto de conservación de 4 años de £80 millones", "Demolición y reconstrucción completa de la torre", "Reemplazo del mecanismo del reloj"],
                de: ["Nur kleinere Reinigung", "4-jähriges £80 Millionen Konservierungsprojekt", "Kompletter Abriss und Wiederaufbau des Turms", "Austausch des Uhrmechanismus"],
                nl: ["Alleen kleine schoonmaak", "4-jarig £80 miljoen conserveringsproject", "Volledige sloop en herbouw van de toren", "Vervanging van het klokmechanisme"]
            },
            correct: 1,
            explanation: {
                en: "From 2017-2021, Big Ben underwent a comprehensive 4-year conservation project costing £80 million. This included removing asbestos, repairing ironwork, replacing broken glass, and restoring the clock mechanism to ensure its preservation for future generations.",
                es: "De 2017-2021, Big Ben se sometió a un proyecto de conservación integral de 4 años que costó £80 millones. Esto incluyó la eliminación de asbesto, la reparación de herrajes, el reemplazo de vidrios rotos y la restauración del mecanismo del reloj para garantizar su preservación para las generaciones futuras.",
                de: "Von 2017-2021 wurde Big Ben einem umfassenden 4-jährigen Konservierungsprojekt unterzogen, das £80 Millionen kostete. Dies umfasste die Entfernung von Asbest, die Reparatur von Eisenwerk, den Austausch von gebrochenem Glas und die Restaurierung des Uhrmechanismus, um seine Erhaltung für zukünftige Generationen zu gewährleisten.",
                nl: "Van 2017-2021 onderging Big Ben een uitgebreid 4-jarig conserveringsproject van £80 miljoen. Dit omvatte het verwijderen van asbest, het repareren van ijzerwerk, het vervangen van gebroken glas en het restaureren van het klokmechanisme om de bewaring voor toekomstige generaties te waarborgen."
            }
        },
        {
            question: {
                en: "What specific repairs were included in the 2017-2021 renovation?",
                es: "¿Qué reparaciones específicas se incluyeron en la renovación de 2017-2021?",
                de: "Welche spezifischen Reparaturen waren in der Renovierung 2017-2021 enthalten?",
                nl: "Welke specifieke reparaties waren inbegrepen in de renovatie van 2017-2021?"
            },
            options: {
                en: ["Painting only", "Removed asbestos, repaired ironwork, replaced broken glass", "Added modern technology", "Structural reinforcement only"],
                es: ["Solo pintura", "Eliminación de asbesto, reparación de herrajes, reemplazo de vidrios rotos", "Agregó tecnología moderna", "Solo refuerzo estructural"],
                de: ["Nur Malerei", "Asbestentfernung, Reparatur von Eisenwerk, Austausch von gebrochenem Glas", "Moderne Technologie hinzugefügt", "Nur strukturelle Verstärkung"],
                nl: ["Alleen schilderwerk", "Asbest verwijderd, ijzerwerk gerepareerd, gebroken glas vervangen", "Moderne technologie toegevoegd", "Alleen structurele versterking"]
            },
            correct: 1,
            explanation: {
                en: "The major renovation included removing dangerous asbestos from the tower, repairing corroded ironwork throughout the structure, and replacing broken pieces of opal glass in the clock faces. These essential repairs ensured the tower's safety and functionality.",
                es: "La renovación importante incluyó la eliminación de asbesto peligroso de la torre, la reparación de herrajes corroídos en toda la estructura y el reemplazo de piezas rotas de vidrio opalino en las esferas del reloj. Estas reparaciones esenciales aseguraron la seguridad y funcionalidad de la torre.",
                de: "Die umfassende Renovierung umfasste die Entfernung von gefährlichem Asbest aus dem Turm, die Reparatur von korrodiertem Eisenwerk im gesamten Bauwerk und den Austausch von gebrochenem Opalglas in den Zifferblättern. Diese wesentlichen Reparaturen gewährleisteten die Sicherheit und Funktionalität des Turms.",
                nl: "De grote renovatie omvatte het verwijderen van gevaarlijk asbest uit de toren, het repareren van gecorrodeerd ijzerwerk door de hele structuur en het vervangen van gebroken stukken opaal glas in de wijzerplaten. Deze essentiële reparaties zorgden voor de veiligheid en functionaliteit van de toren."
            }
        },
        {
            question: {
                en: "During the 2017-2021 renovation, when did Big Ben remain silent?",
                es: "Durante la renovación de 2017-2021, ¿cuándo permaneció Big Ben en silencio?",
                de: "Während der Renovierung 2017-2021, wann blieb Big Ben stumm?",
                nl: "Tijdens de renovatie van 2017-2021, wanneer bleef Big Ben stil?"
            },
            options: {
                en: ["Throughout the entire period", "Silent except for New Year's Eve and Remembrance Sunday", "Only during working hours", "Never stopped chiming"],
                es: ["Durante todo el período", "Silenciosa excepto en Nochevieja y Domingo del Recuerdo", "Solo durante horas laborales", "Nunca dejó de sonar"],
                de: ["Während der gesamten Periode", "Stumm außer zu Silvester und Remembrance Sunday", "Nur während der Arbeitszeit", "Hörte nie auf zu läuten"],
                nl: ["Gedurende de hele periode", "Stil behalve op oudejaarsavond en Remembrance Sunday", "Alleen tijdens werkuren", "Nooit gestopt met luiden"]
            },
            correct: 1,
            explanation: {
                en: "During the renovation, Big Ben was silent for most of the period but continued to chime on important occasions like New Year's Eve and Remembrance Sunday. This balance allowed essential work while maintaining tradition on significant dates.",
                es: "Durante la renovación, Big Ben estuvo en silencio durante la mayor parte del período, pero continuó sonando en ocasiones importantes como Nochevieja y el Domingo del Recuerdo. Este equilibrio permitió trabajos esenciales mientras se mantenía la tradición en fechas significativas.",
                de: "Während der Renovierung war Big Ben die meiste Zeit stumm, läutete aber weiterhin zu wichtigen Anlässen wie Silvester und Remembrance Sunday. Dieses Gleichgewicht ermöglichte wesentliche Arbeiten bei gleichzeitiger Aufrechterhaltung der Tradition an bedeutenden Daten.",
                nl: "Tijdens de renovatie was Big Ben de meeste tijd stil, maar bleef het luiden bij belangrijke gelegenheden zoals oudejaarsavond en Remembrance Sunday. Deze balans maakte essentieel werk mogelijk terwijl de traditie op belangrijke data behouden bleef."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else {
        window.bigBenLevel3Questions = questions;
    }
})();
