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
        },
        {
            question: {
                en: "What is the gear ratio between the pendulum and the minute hand?",
                es: "¿Cuál es la relación de transmisión entre el péndulo y la manecilla de minutos?",
                de: "Wie ist das Übersetzungsverhältnis zwischen Pendel und Minutenzeiger?",
                nl: "Wat is de tandwielverhouding tussen de slinger en de minutenwijzer?"
            },
            options: {
                en: ["60:1", "120:1", "300:1", "600:1"],
                es: ["60:1", "120:1", "300:1", "600:1"],
                de: ["60:1", "120:1", "300:1", "600:1"],
                nl: ["60:1", "120:1", "300:1", "600:1"]
            },
            correct: 2,
            explanation: {
                en: "The gear train has a 300:1 ratio, meaning the pendulum beats 300 times for every rotation of the minute hand. With the pendulum beating once per second, this creates a precise one-minute rotation of the minute hand through 6 degrees.",
                es: "El tren de engranajes tiene una relación de 300:1, lo que significa que el péndulo late 300 veces por cada rotación de la manecilla de minutos. Con el péndulo latiendo una vez por segundo, esto crea una rotación precisa de un minuto de la manecilla de minutos a través de 6 grados.",
                de: "Das Zahnradgetriebe hat ein Verhältnis von 300:1, was bedeutet, dass das Pendel 300 Mal schlägt für jede Umdrehung des Minutenzeigers. Mit dem Pendel, das einmal pro Sekunde schlägt, erzeugt dies eine präzise einminütige Drehung des Minutenzeigers durch 6 Grad.",
                nl: "De tandwieltrein heeft een verhouding van 300:1, wat betekent dat de slinger 300 keer slaat voor elke rotatie van de minutenwijzer. Met de slinger die eenmaal per seconde slaat, creëert dit een precieze rotatie van één minuut van de minutenwijzer door 6 graden."
            }
        },
        {
            question: {
                en: "How many teeth does the great wheel (largest gear) have?",
                es: "¿Cuántos dientes tiene la rueda grande (engranaje más grande)?",
                de: "Wie viele Zähne hat das große Rad (größtes Zahnrad)?",
                nl: "Hoeveel tanden heeft het grote wiel (grootste tandwiel)?"
            },
            options: {
                en: ["180 teeth", "240 teeth", "360 teeth", "480 teeth"],
                es: ["180 dientes", "240 dientes", "360 dientes", "480 dientes"],
                de: ["180 Zähne", "240 Zähne", "360 Zähne", "480 Zähne"],
                nl: ["180 tanden", "240 tanden", "360 tanden", "480 tanden"]
            },
            correct: 2,
            explanation: {
                en: "The great wheel, which is the largest gear in the clock mechanism, has 360 teeth. This wheel is driven by the falling weight and provides the initial power to the entire gear train that drives both the hands and the escapement.",
                es: "La rueda grande, que es el engranaje más grande en el mecanismo del reloj, tiene 360 dientes. Esta rueda es impulsada por el peso que cae y proporciona la potencia inicial a todo el tren de engranajes que impulsa tanto las manecillas como el escape.",
                de: "Das große Rad, das das größte Zahnrad im Uhrmechanismus ist, hat 360 Zähne. Dieses Rad wird vom fallenden Gewicht angetrieben und liefert die anfängliche Kraft an das gesamte Zahnradgetriebe, das sowohl die Zeiger als auch die Hemmung antreibt.",
                nl: "Het grote wiel, dat het grootste tandwiel in het klokmechanisme is, heeft 360 tanden. Dit wiel wordt aangedreven door het vallende gewicht en levert de initiële kracht aan de hele tandwieltrein die zowel de wijzers als de ontsnapping aandrijft."
            }
        },
        {
            question: {
                en: "What material are the bearings made from?",
                es: "¿De qué material están hechos los cojinetes?",
                de: "Aus welchem Material bestehen die Lager?",
                nl: "Uit welk materiaal zijn de lagers gemaakt?"
            },
            options: {
                en: ["Steel", "Bronze", "Iron", "Copper alloy"],
                es: ["Acero", "Bronce", "Hierro", "Aleación de cobre"],
                de: ["Stahl", "Bronze", "Eisen", "Kupferlegierung"],
                nl: ["Staal", "Brons", "IJzer", "Koperlegering"]
            },
            correct: 1,
            explanation: {
                en: "The bearings are made from bronze, which provides excellent low-friction properties and durability. Bronze bearings were the standard for precision clockwork in the Victorian era and continue to perform reliably after more than 160 years of operation.",
                es: "Los cojinetes están hechos de bronce, que proporciona excelentes propiedades de baja fricción y durabilidad. Los cojinetes de bronce eran el estándar para la relojería de precisión en la era victoriana y continúan funcionando de manera confiable después de más de 160 años de operación.",
                de: "Die Lager bestehen aus Bronze, die hervorragende reibungsarme Eigenschaften und Haltbarkeit bietet. Bronzelager waren der Standard für Präzisionsuhrwerke in der viktorianischen Ära und funktionieren auch nach mehr als 160 Jahren Betrieb zuverlässig.",
                nl: "De lagers zijn gemaakt van brons, dat uitstekende eigenschappen met lage wrijving en duurzaamheid biedt. Bronzen lagers waren de standaard voor precisie uurwerken in het Victoriaanse tijdperk en blijven betrouwbaar functioneren na meer dan 160 jaar werking."
            }
        },
        {
            question: {
                en: "How is the chiming mechanism powered?",
                es: "¿Cómo se alimenta el mecanismo de campanadas?",
                de: "Wie wird der Läutmechanismus angetrieben?",
                nl: "Hoe wordt het luimechanisme aangedreven?"
            },
            options: {
                en: ["Electric motor", "Separate weight system from timekeeping", "Same weight as timekeeping", "Spring mechanism"],
                es: ["Motor eléctrico", "Sistema de pesas separado del cronometraje", "Mismo peso que el cronometraje", "Mecanismo de resorte"],
                de: ["Elektromotor", "Separates Gewichtssystem von der Zeitmessung", "Gleiches Gewicht wie Zeitmessung", "Federmechanismus"],
                nl: ["Elektromotor", "Gescheiden gewichtssysteem van tijdmeting", "Zelfde gewicht als tijdmeting", "Veermechanisme"]
            },
            correct: 1,
            explanation: {
                en: "The chiming mechanism is powered by a completely separate weight system from the timekeeping mechanism. This dual-weight design means the clock can keep time even if the chiming mechanism fails, and vice versa, providing redundancy.",
                es: "El mecanismo de campanadas está alimentado por un sistema de pesas completamente separado del mecanismo de cronometraje. Este diseño de peso dual significa que el reloj puede mantener el tiempo incluso si el mecanismo de campanadas falla, y viceversa, proporcionando redundancia.",
                de: "Der Läutmechanismus wird von einem völlig separaten Gewichtssystem vom Zeitmessmechanismus angetrieben. Dieses Doppelgewichtsdesign bedeutet, dass die Uhr die Zeit halten kann, auch wenn der Läutmechanismus versagt, und umgekehrt, was Redundanz bietet.",
                nl: "Het luimechanisme wordt aangedreven door een volledig gescheiden gewichtssysteem van het tijdmetingsmechanisme. Dit dubbele gewichtsontwerp betekent dat de klok de tijd kan bijhouden, zelfs als het luimechanisme faalt, en omgekeerd, wat redundantie biedt."
            }
        },
        {
            question: {
                en: "What Victorian safety feature prevents overwinding?",
                es: "¿Qué característica de seguridad victoriana previene el sobreenrollado?",
                de: "Welche viktorianische Sicherheitsfunktion verhindert Überaufziehen?",
                nl: "Welke Victoriaanse veiligheidsfunctie voorkomt overopwinden?"
            },
            options: {
                en: ["Automatic shutoff", "Ratchet pawl system", "Weight limiter", "Spring clutch"],
                es: ["Apagado automático", "Sistema de trinquete", "Limitador de peso", "Embrague de resorte"],
                de: ["Automatische Abschaltung", "Sperrklinken-System", "Gewichtsbegrenzer", "Federkupplung"],
                nl: ["Automatische uitschakeling", "Ratel pawl systeem", "Gewichtbegrenzer", "Veerkoppeling"]
            },
            correct: 1,
            explanation: {
                en: "A sophisticated ratchet pawl system prevents overwinding by allowing the weights to be raised only to their maximum safe height. Once reached, the pawls engage to prevent further winding, protecting the mechanism from damage that would occur if the weights were raised too high.",
                es: "Un sofisticado sistema de trinquete previene el sobreenrollado al permitir que las pesas se eleven solo hasta su altura máxima segura. Una vez alcanzada, los trinquetes se enganchan para prevenir más enrollado, protegiendo el mecanismo de daños que ocurrirían si las pesas se elevaran demasiado alto.",
                de: "Ein ausgeklügeltes Sperrklinken-System verhindert Überaufziehen, indem es ermöglicht, dass die Gewichte nur bis zu ihrer maximalen sicheren Höhe angehoben werden. Sobald dies erreicht ist, greifen die Sperrklinken ein, um weiteres Aufziehen zu verhindern und den Mechanismus vor Schäden zu schützen, die auftreten würden, wenn die Gewichte zu hoch angehoben würden.",
                nl: "Een geavanceerd ratel pawl systeem voorkomt overopwinden door de gewichten alleen tot hun maximale veilige hoogte te laten optrekken. Eenmaal bereikt, grijpen de pawls in om verder opwinden te voorkomen, waardoor het mechanisme wordt beschermd tegen schade die zou optreden als de gewichten te hoog werden opgetrokken."
            }
        },
        {
            question: {
                en: "How accurate is Big Ben typically maintained?",
                es: "¿Qué tan preciso se mantiene típicamente Big Ben?",
                de: "Wie genau wird Big Ben normalerweise gehalten?",
                nl: "Hoe nauwkeurig wordt Big Ben doorgaans onderhouden?"
            },
            options: {
                en: ["Within 1 minute per day", "Within 1 second per day", "Within 2 seconds per week", "Within 1 second per week"],
                es: ["Dentro de 1 minuto por día", "Dentro de 1 segundo por día", "Dentro de 2 segundos por semana", "Dentro de 1 segundo por semana"],
                de: ["Innerhalb 1 Minute pro Tag", "Innerhalb 1 Sekunde pro Tag", "Innerhalb 2 Sekunden pro Woche", "Innerhalb 1 Sekunde pro Woche"],
                nl: ["Binnen 1 minuut per dag", "Binnen 1 seconde per dag", "Binnen 2 seconden per week", "Binnen 1 seconde per week"]
            },
            correct: 2,
            explanation: {
                en: "Big Ben is maintained to an accuracy of within 2 seconds per week. This remarkable precision is achieved through careful regulation using the penny-adjustment system and the Denison gravity escapement, making it one of the most accurate large mechanical clocks in the world.",
                es: "Big Ben se mantiene con una precisión de dentro de 2 segundos por semana. Esta notable precisión se logra a través de una regulación cuidadosa utilizando el sistema de ajuste de peniques y el escape de gravedad Denison, convirtiéndolo en uno de los relojes mecánicos grandes más precisos del mundo.",
                de: "Big Ben wird auf eine Genauigkeit von innerhalb 2 Sekunden pro Woche gehalten. Diese bemerkenswerte Präzision wird durch sorgfältige Regulierung unter Verwendung des Penny-Anpassungssystems und der Denison-Schwerkrafthemmung erreicht, was ihn zu einer der genauesten großen mechanischen Uhren der Welt macht.",
                nl: "Big Ben wordt onderhouden op een nauwkeurigheid van binnen 2 seconden per week. Deze opmerkelijke precisie wordt bereikt door zorgvuldige regulatie met behulp van het penny-aanpassingssysteem en de Denison zwaartekrachtontsnapping, waardoor het een van de meest nauwkeurige grote mechanische klokken ter wereld is."
            }
        },
        {
            question: {
                en: "What causes the clock to lose or gain time during storms?",
                es: "¿Qué hace que el reloj pierda o gane tiempo durante las tormentas?",
                de: "Was führt dazu, dass die Uhr während Stürmen Zeit verliert oder gewinnt?",
                nl: "Wat zorgt ervoor dat de klok tijd verliest of wint tijdens stormen?"
            },
            options: {
                en: ["Lightning interference", "Wind pressure on clock hands and faces", "Atmospheric pressure changes", "Rain affecting the mechanism"],
                es: ["Interferencia de rayos", "Presión del viento en manecillas y esferas", "Cambios de presión atmosférica", "Lluvia afectando el mecanismo"],
                de: ["Blitzstörungen", "Winddruck auf Uhrzeiger und Zifferblätter", "Atmosphärische Druckänderungen", "Regen, der den Mechanismus beeinflusst"],
                nl: ["Blikseminterferentie", "Winddruk op klokwijzers en wijzerplaten", "Atmosferische drukveranderingen", "Regen die het mechanisme beïnvloedt"]
            },
            correct: 1,
            explanation: {
                en: "Strong winds during storms create pressure on the massive clock hands and faces, adding resistance to their movement. This increased resistance can slow the clock slightly, requiring adjustment after severe weather. The Airy ventilated dials help minimize this effect.",
                es: "Los vientos fuertes durante las tormentas crean presión en las masivas manecillas y esferas del reloj, agregando resistencia a su movimiento. Esta resistencia aumentada puede ralentizar ligeramente el reloj, requiriendo ajuste después del clima severo. Los diales ventilados Airy ayudan a minimizar este efecto.",
                de: "Starke Winde während Stürmen erzeugen Druck auf die massiven Uhrzeiger und Zifferblätter und erhöhen den Widerstand ihrer Bewegung. Dieser erhöhte Widerstand kann die Uhr leicht verlangsamen und erfordert nach schwerem Wetter eine Anpassung. Die Airy-belüfteten Zifferblätter helfen, diesen Effekt zu minimieren.",
                nl: "Sterke wind tijdens stormen creëert druk op de massieve klokwijzers en wijzerplaten, wat weerstand toevoegt aan hun beweging. Deze verhoogde weerstand kan de klok enigszins vertragen, wat aanpassing vereist na zwaar weer. De Airy geventileerde wijzerplaten helpen dit effect te minimaliseren."
            }
        },
        {
            question: {
                en: "How does snow accumulation affect timekeeping?",
                es: "¿Cómo afecta la acumulación de nieve al cronometraje?",
                de: "Wie beeinflusst Schneeanhäufung die Zeitmessung?",
                nl: "Hoe beïnvloedt sneeuwophoping de tijdmeting?"
            },
            options: {
                en: ["No effect", "Adds weight to hands, slowing the clock", "Freezes the mechanism", "Blocks the chimes"],
                es: ["Sin efecto", "Agrega peso a las manecillas, ralentizando el reloj", "Congela el mecanismo", "Bloquea las campanadas"],
                de: ["Keine Wirkung", "Fügt Gewicht zu den Zeigern hinzu und verlangsamt die Uhr", "Friert den Mechanismus ein", "Blockiert die Glocken"],
                nl: ["Geen effect", "Voegt gewicht toe aan wijzers, vertraagt de klok", "Bevriest het mechanisme", "Blokkeert de klokslagen"]
            },
            correct: 1,
            explanation: {
                en: "Snow accumulating on the minute hands adds extra weight, creating additional resistance that slows the clock. The clockkeepers must monitor weather conditions and make adjustments to compensate for this effect, particularly during heavy snowfall in winter.",
                es: "La nieve que se acumula en las manecillas de minutos agrega peso extra, creando resistencia adicional que ralentiza el reloj. Los relojeros deben monitorear las condiciones climáticas y hacer ajustes para compensar este efecto, particularmente durante fuertes nevadas en invierno.",
                de: "Schnee, der sich auf den Minutenzeigern ansammelt, fügt zusätzliches Gewicht hinzu und erzeugt zusätzlichen Widerstand, der die Uhr verlangsamt. Die Uhrmacher müssen die Wetterbedingungen überwachen und Anpassungen vornehmen, um diesen Effekt auszugleichen, insbesondere bei starkem Schneefall im Winter.",
                nl: "Sneeuw die zich ophoopt op de minutenwijzers voegt extra gewicht toe, wat extra weerstand creëert die de klok vertraagt. De klokbeheerders moeten weersomstandigheden monitoren en aanpassingen maken om dit effect te compenseren, vooral tijdens hevige sneeuwval in de winter."
            }
        },
        {
            question: {
                en: "What is the function of the fly governor in the striking mechanism?",
                es: "¿Cuál es la función del regulador de volante en el mecanismo de golpeo?",
                de: "Was ist die Funktion des Fliehkraftreglers im Schlagwerk?",
                nl: "Wat is de functie van de vliegregulator in het slagmechanisme?"
            },
            options: {
                en: ["Controls bell volume", "Regulates striking speed to prevent runaway", "Counts the strikes", "Triggers the chimes"],
                es: ["Controla el volumen de la campana", "Regula la velocidad de golpeo para prevenir desbocamiento", "Cuenta los golpes", "Activa las campanadas"],
                de: ["Steuert Glockenlautstärke", "Reguliert Schlaggeschwindigkeit zur Verhinderung von Durchgehen", "Zählt die Schläge", "Löst die Glocken aus"],
                nl: ["Regelt klokvolume", "Reguleert slagsnelheid om wegrennen te voorkomen", "Telt de slagen", "Activeert de klokslagen"]
            },
            correct: 1,
            explanation: {
                en: "The fly governor is a critical safety device that regulates the speed of the striking mechanism. It uses air resistance on rotating vanes to prevent the heavy striking weights from falling too quickly, which would cause the hammer to strike the bell dangerously fast and potentially damage both bell and mechanism.",
                es: "El regulador de volante es un dispositivo de seguridad crítico que regula la velocidad del mecanismo de golpeo. Utiliza la resistencia del aire en paletas giratorias para evitar que las pesadas pesas de golpeo caigan demasiado rápido, lo que haría que el martillo golpee la campana peligrosamente rápido y potencialmente dañe tanto la campana como el mecanismo.",
                de: "Der Fliehkraftregler ist ein kritisches Sicherheitsgerät, das die Geschwindigkeit des Schlagwerks reguliert. Er nutzt Luftwiderstand an rotierenden Flügeln, um zu verhindern, dass die schweren Schlaggewichte zu schnell fallen, was dazu führen würde, dass der Hammer gefährlich schnell auf die Glocke schlägt und möglicherweise sowohl Glocke als auch Mechanismus beschädigt.",
                nl: "De vliegregulator is een kritisch veiligheidsapparaat dat de snelheid van het slagmechanisme regelt. Het gebruikt luchtweerstand op roterende schoepen om te voorkomen dat de zware slaggewichten te snel vallen, wat zou zorgen dat de hamer gevaarlijk snel op de klok slaat en mogelijk zowel klok als mechanisme beschadigt."
            }
        },
        {
            question: {
                en: "How many pinions (small gears) are in the going train?",
                es: "¿Cuántos piñones (engranajes pequeños) hay en el tren de marcha?",
                de: "Wie viele Ritzel (kleine Zahnräder) gibt es im Gangwerk?",
                nl: "Hoeveel pignons (kleine tandwielen) zitten er in de gaande trein?"
            },
            options: {
                en: ["3 pinions", "4 pinions", "5 pinions", "6 pinions"],
                es: ["3 piñones", "4 piñones", "5 piñones", "6 piñones"],
                de: ["3 Ritzel", "4 Ritzel", "5 Ritzel", "6 Ritzel"],
                nl: ["3 pignons", "4 pignons", "5 pignons", "6 pignons"]
            },
            correct: 2,
            explanation: {
                en: "The going train (timekeeping mechanism) contains 5 pinions that work in conjunction with 5 wheels to create the precise gear ratios needed. This five-stage reduction transfers power from the falling weight through to the escapement and pendulum while achieving the correct speed for the minute and hour hands.",
                es: "El tren de marcha (mecanismo de cronometraje) contiene 5 piñones que trabajan en conjunto con 5 ruedas para crear las relaciones de engranaje precisas necesarias. Esta reducción de cinco etapas transfiere potencia desde el peso que cae hasta el escape y el péndulo mientras logra la velocidad correcta para las manecillas de minutos y horas.",
                de: "Das Gangwerk (Zeitmessmechanismus) enthält 5 Ritzel, die zusammen mit 5 Rädern arbeiten, um die erforderlichen präzisen Übersetzungsverhältnisse zu schaffen. Diese fünfstufige Reduktion überträgt Kraft vom fallenden Gewicht durch zur Hemmung und zum Pendel, während die richtige Geschwindigkeit für die Minuten- und Stundenzeiger erreicht wird.",
                nl: "De gaande trein (tijdmetingsmechanisme) bevat 5 pignons die samenwerken met 5 wielen om de benodigde precieze tandwielratio's te creëren. Deze vijf-fase reductie draagt kracht over van het vallende gewicht door naar de ontsnapping en slinger terwijl de juiste snelheid voor de minuten- en uurwijzers wordt bereikt."
            }
        },
        {
            question: {
                en: "What metal alloy is used for the clock hands?",
                es: "¿Qué aleación de metal se usa para las manecillas del reloj?",
                de: "Welche Metalllegierung wird für die Uhrzeiger verwendet?",
                nl: "Welke metaallegering wordt gebruikt voor de klokwijzers?"
            },
            options: {
                en: ["Steel", "Aluminum", "Copper", "Cast iron"],
                es: ["Acero", "Aluminio", "Cobre", "Hierro fundido"],
                de: ["Stahl", "Aluminium", "Kupfer", "Gusseisen"],
                nl: ["Staal", "Aluminium", "Koper", "Gietijzer"]
            },
            correct: 2,
            explanation: {
                en: "The clock hands are made from copper, which is strong enough to maintain rigidity at their enormous size (14 feet for minute hands) while being light enough not to overburden the clock mechanism. The copper is gilded with gold for visibility and weather protection.",
                es: "Las manecillas del reloj están hechas de cobre, que es lo suficientemente fuerte para mantener rigidez en su enorme tamaño (14 pies para las manecillas de minutos) mientras es lo suficientemente ligero para no sobrecargar el mecanismo del reloj. El cobre está dorado con oro para visibilidad y protección contra el clima.",
                de: "Die Uhrzeiger bestehen aus Kupfer, das stark genug ist, um bei ihrer enormen Größe (14 Fuß für Minutenzeiger) Steifigkeit zu bewahren, während es leicht genug ist, um den Uhrmechanismus nicht zu überlasten. Das Kupfer ist mit Gold vergoldet für Sichtbarkeit und Wetterschutz.",
                nl: "De klokwijzers zijn gemaakt van koper, dat sterk genoeg is om rigiditeit te behouden bij hun enorme grootte (14 voet voor minutenwijzers) terwijl het licht genoeg is om het klokmechanisme niet te overbelasten. Het koper is verguld met goud voor zichtbaarheid en weerbescherming."
            }
        },
        {
            question: {
                en: "How deep are the foundations of the Clock Tower?",
                es: "¿Qué tan profundos son los cimientos de la Torre del Reloj?",
                de: "Wie tief sind die Fundamente des Uhrenturms?",
                nl: "Hoe diep zijn de fundamenten van de Kloktoren?"
            },
            options: {
                en: ["3 meters (10 feet)", "7 meters (23 feet)", "10 meters (33 feet)", "13 meters (43 feet)"],
                es: ["3 metros (10 pies)", "7 metros (23 pies)", "10 metros (33 pies)", "13 metros (43 pies)"],
                de: ["3 Meter (10 Fuß)", "7 Meter (23 Fuß)", "10 Meter (33 Fuß)", "13 Meter (43 Fuß)"],
                nl: ["3 meter (10 voet)", "7 meter (23 voet)", "10 meter (33 voet)", "13 meter (43 voet)"]
            },
            correct: 1,
            explanation: {
                en: "The foundations extend 7 meters (23 feet) deep into the London clay. This depth was necessary to support the tower's 8,600-ton weight on the soft riverbank soil near the Thames. The foundations use a concrete raft design to distribute the massive load.",
                es: "Los cimientos se extienden 7 metros (23 pies) de profundidad en la arcilla de Londres. Esta profundidad fue necesaria para soportar el peso de 8,600 toneladas de la torre en el suelo blando de la ribera cerca del Támesis. Los cimientos usan un diseño de balsa de hormigón para distribuir la carga masiva.",
                de: "Die Fundamente reichen 7 Meter (23 Fuß) tief in den Londoner Ton. Diese Tiefe war notwendig, um das 8.600-Tonnen-Gewicht des Turms auf dem weichen Uferboden in der Nähe der Themse zu tragen. Die Fundamente verwenden ein Betonflößdesign, um die massive Last zu verteilen.",
                nl: "De fundamenten strekken zich 7 meter (23 voet) diep uit in de Londense klei. Deze diepte was nodig om het gewicht van 8.600 ton van de toren te ondersteunen op de zachte oevergrond nabij de Theems. De fundamenten gebruiken een betonplaat ontwerp om de massieve last te verdelen."
            }
        },
        {
            question: {
                en: "What causes the tower's famous tilt of 0.26 degrees?",
                es: "¿Qué causa la famosa inclinación de 0.26 grados de la torre?",
                de: "Was verursacht die berühmte Neigung des Turms von 0,26 Grad?",
                nl: "Wat veroorzaakt de beroemde helling van 0,26 graden van de toren?"
            },
            options: {
                en: ["Design flaw", "Bomb damage from WWII", "Underground railway construction", "Wind erosion"],
                es: ["Falla de diseño", "Daño de bombardeo de la Segunda Guerra Mundial", "Construcción de ferrocarril subterráneo", "Erosión por viento"],
                de: ["Konstruktionsfehler", "Bombenschaden aus dem Zweiten Weltkrieg", "U-Bahn-Bau", "Winderosion"],
                nl: ["Ontwerpfout", "Bomschade uit WO II", "Aanleg ondergrondse spoorweg", "Winderosie"]
            },
            correct: 2,
            explanation: {
                en: "The tower's northwest tilt of 0.26 degrees (43 centimeters at the top) was primarily caused by underground railway construction in the 1990s. The Jubilee Line extension tunneling affected the ground beneath the tower, causing differential settlement in the soft Thames clay. Engineers stabilized it but couldn't fully correct the tilt.",
                es: "La inclinación noroeste de la torre de 0.26 grados (43 centímetros en la parte superior) fue causada principalmente por la construcción del ferrocarril subterráneo en la década de 1990. La excavación de túneles de la extensión de la Línea Jubilee afectó el suelo debajo de la torre, causando asentamiento diferencial en la arcilla blanda del Támesis. Los ingenieros la estabilizaron pero no pudieron corregir completamente la inclinación.",
                de: "Die nordwestliche Neigung des Turms von 0,26 Grad (43 Zentimeter oben) wurde hauptsächlich durch den U-Bahn-Bau in den 1990er Jahren verursacht. Der Tunnelbau der Jubilee-Line-Erweiterung beeinflusste den Boden unter dem Turm und verursachte unterschiedliche Setzungen im weichen Ton der Themse. Ingenieure stabilisierten ihn, konnten die Neigung aber nicht vollständig korrigieren.",
                nl: "De noordwestelijke helling van de toren van 0,26 graden (43 centimeter aan de top) werd voornamelijk veroorzaakt door de aanleg van de ondergrondse spoorweg in de jaren 1990. De tunnelbouw van de Jubilee Line-uitbreiding beïnvloedde de grond onder de toren, wat differentiële zetting veroorzaakte in de zachte Theems-klei. Ingenieurs stabiliseerden het maar konden de helling niet volledig corrigeren."
            }
        },
        {
            question: {
                en: "How many stairs lead to the belfry where the bells are housed?",
                es: "¿Cuántas escaleras conducen al campanario donde se alojan las campanas?",
                de: "Wie viele Stufen führen zum Glockenturm, wo die Glocken untergebracht sind?",
                nl: "Hoeveel trappen leiden naar de klokkentoren waar de klokken gehuisvest zijn?"
            },
            options: {
                en: ["234 steps", "296 steps", "334 steps", "399 steps"],
                es: ["234 escalones", "296 escalones", "334 escalones", "399 escalones"],
                de: ["234 Stufen", "296 Stufen", "334 Stufen", "399 Stufen"],
                nl: ["234 trappen", "296 trappen", "334 trappen", "399 trappen"]
            },
            correct: 2,
            explanation: {
                en: "There are 334 steps in the spiral staircase leading to the belfry. This climb was particularly demanding for the original clockkeepers who had to make it three times weekly to wind the clock. There is no elevator, making it a challenging ascent even today for maintenance staff.",
                es: "Hay 334 escalones en la escalera de caracol que conduce al campanario. Esta subida era particularmente exigente para los relojeros originales que tenían que hacerla tres veces por semana para dar cuerda al reloj. No hay ascensor, lo que la convierte en un ascenso desafiante incluso hoy para el personal de mantenimiento.",
                de: "Es gibt 334 Stufen in der Wendeltreppe, die zum Glockenturm führt. Dieser Aufstieg war besonders anspruchsvoll für die ursprünglichen Uhrmacher, die ihn dreimal wöchentlich machen mussten, um die Uhr aufzuziehen. Es gibt keinen Aufzug, was ihn auch heute noch zu einem herausfordernden Aufstieg für Wartungspersonal macht.",
                nl: "Er zijn 334 trappen in de wenteltrap die naar de klokkentoren leidt. Deze klim was bijzonder veeleisend voor de oorspronkelijke klokbeheerders die het drie keer per week moesten maken om de klok op te winden. Er is geen lift, wat het zelfs vandaag nog een uitdagende beklimming maakt voor onderhoudspersoneel."
            }
        },
        {
            question: {
                en: "What unique feature does the strike counting mechanism have?",
                es: "¿Qué característica única tiene el mecanismo de conteo de golpes?",
                de: "Welches einzigartige Merkmal hat der Schlagzählmechanismus?",
                nl: "Welke unieke functie heeft het slag telmechanisme?"
            },
            options: {
                en: ["Digital counter", "Self-correcting rack and snail system", "Manual setting required", "Electronic sensor"],
                es: ["Contador digital", "Sistema de cremallera y caracol autocorrector", "Ajuste manual requerido", "Sensor electrónico"],
                de: ["Digitaler Zähler", "Selbstkorrigierendes Zahnstangen- und Schneckensystem", "Manuelle Einstellung erforderlich", "Elektronischer Sensor"],
                nl: ["Digitale teller", "Zelfcorrigerend tandheugel en slak systeem", "Handmatige instelling vereist", "Elektronische sensor"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben uses a sophisticated self-correcting rack and snail system for counting strikes. The snail cam follows the hour hand position, and the rack drops onto it to determine how many times to strike. This mechanical system is remarkably reliable and self-correcting if the hands are moved, unlike simpler count-wheel systems.",
                es: "Big Ben utiliza un sofisticado sistema de cremallera y caracol autocorrector para contar golpes. La leva de caracol sigue la posición de la manecilla de las horas, y la cremallera cae sobre ella para determinar cuántas veces golpear. Este sistema mecánico es notablemente confiable y autocorrector si las manecillas se mueven, a diferencia de sistemas de rueda contadora más simples.",
                de: "Big Ben verwendet ein ausgeklügeltes selbstkorrigierendes Zahnstangen- und Schneckensystem zum Zählen von Schlägen. Die Schneckennocke folgt der Position des Stundenzeigers, und die Zahnstange fällt darauf, um zu bestimmen, wie oft geschlagen werden soll. Dieses mechanische System ist bemerkenswert zuverlässig und selbstkorrigierend, wenn die Zeiger bewegt werden, im Gegensatz zu einfacheren Zählrad-Systemen.",
                nl: "Big Ben gebruikt een geavanceerd zelfcorrigerend tandheugel en slak systeem voor het tellen van slagen. De slaknocken volgt de positie van de uurwijzer, en de tandheugel valt erop om te bepalen hoe vaak geslagen moet worden. Dit mechanische systeem is opmerkelijk betrouwbaar en zelfcorrigerend als de wijzers worden verplaatst, in tegenstelling tot eenvoudigere telwielsystemen."
            }
        },
        {
            question: {
                en: "What Latin inscription appears on the clock faces beneath the dial?",
                es: "¿Qué inscripción latina aparece en las esferas del reloj debajo del dial?",
                de: "Welche lateinische Inschrift erscheint auf den Zifferblättern unter dem Zifferblatt?",
                nl: "Welke Latijnse inscriptie verschijnt op de wijzerplaten onder de wijzerplaat?"
            },
            options: {
                en: ["TEMPUS FUGIT (Time Flies)", "DOMINE SALVAM FAC REGINAM NOSTRAM VICTORIAM PRIMAM (O Lord, keep safe our Queen Victoria the First)", "IN OMNIA PARATUS (Prepared for all things)", "VERITAS VOS LIBERABIT (Truth shall set you free)"],
                es: ["TEMPUS FUGIT (El tiempo vuela)", "DOMINE SALVAM FAC REGINAM NOSTRAM VICTORIAM PRIMAM (Oh Señor, mantén a salvo a nuestra Reina Victoria la Primera)", "IN OMNIA PARATUS (Preparado para todas las cosas)", "VERITAS VOS LIBERABIT (La verdad os hará libres)"],
                de: ["TEMPUS FUGIT (Die Zeit fliegt)", "DOMINE SALVAM FAC REGINAM NOSTRAM VICTORIAM PRIMAM (O Herr, halte unsere Königin Victoria die Erste sicher)", "IN OMNIA PARATUS (Auf alles vorbereitet)", "VERITAS VOS LIBERABIT (Wahrheit wird euch befreien)"],
                nl: ["TEMPUS FUGIT (Tijd vliegt)", "DOMINE SALVAM FAC REGINAM NOSTRAM VICTORIAM PRIMAM (O Heer, bewaar onze Koningin Victoria de Eerste)", "IN OMNIA PARATUS (Voorbereid op alle dingen)", "VERITAS VOS LIBERABIT (Waarheid zal je bevrijden)"]
            },
            correct: 1,
            explanation: {
                en: "Each clock face bears the Latin inscription 'DOMINE SALVAM FAC REGINAM NOSTRAM VICTORIAM PRIMAM' which translates to 'O Lord, keep safe our Queen Victoria the First.' This dedication honors Queen Victoria, during whose reign the tower was built, and reflects the Victorian era's blend of engineering achievement and religious faith.",
                es: "Cada esfera del reloj lleva la inscripción latina 'DOMINE SALVAM FAC REGINAM NOSTRAM VICTORIAM PRIMAM' que se traduce como 'Oh Señor, mantén a salvo a nuestra Reina Victoria la Primera.' Esta dedicación honra a la Reina Victoria, durante cuyo reinado se construyó la torre, y refleja la mezcla de la era victoriana de logro ingenieril y fe religiosa.",
                de: "Jedes Zifferblatt trägt die lateinische Inschrift 'DOMINE SALVAM FAC REGINAM NOSTRAM VICTORIAM PRIMAM', was übersetzt 'O Herr, halte unsere Königin Victoria die Erste sicher' bedeutet. Diese Widmung ehrt Königin Victoria, während deren Herrschaft der Turm gebaut wurde, und spiegelt die Mischung der viktorianischen Ära aus ingenieurtechnischer Leistung und religiösem Glauben wider.",
                nl: "Elke wijzerplaat draagt de Latijnse inscriptie 'DOMINE SALVAM FAC REGINAM NOSTRAM VICTORIAM PRIMAM' wat vertaalt naar 'O Heer, bewaar onze Koningin Victoria de Eerste.' Deze opdracht eert Koningin Victoria, tijdens wiens bewind de toren werd gebouwd, en weerspiegelt de mix van het Victoriaanse tijdperk van technische prestaties en religieus geloof."
            }
        },
        {
            question: {
                en: "How often must the clock mechanism be oiled?",
                es: "¿Con qué frecuencia debe lubricarse el mecanismo del reloj?",
                de: "Wie oft muss der Uhrmechanismus geölt werden?",
                nl: "Hoe vaak moet het klokmechanisme worden gesmeerd?"
            },
            options: {
                en: ["Weekly", "Monthly", "Every 6 months", "Every 2 years"],
                es: ["Semanalmente", "Mensualmente", "Cada 6 meses", "Cada 2 años"],
                de: ["Wöchentlich", "Monatlich", "Alle 6 Monate", "Alle 2 Jahre"],
                nl: ["Wekelijks", "Maandelijks", "Elke 6 maanden", "Elke 2 jaar"]
            },
            correct: 2,
            explanation: {
                en: "The clock mechanism requires oiling every 6 months. This regular lubrication schedule maintains the bronze bearings and reduces friction in the gear train. The clockkeepers use special clock oil that doesn't gum up or freeze in London's variable temperatures, ensuring smooth operation year-round.",
                es: "El mecanismo del reloj requiere lubricación cada 6 meses. Este calendario regular de lubricación mantiene los cojinetes de bronce y reduce la fricción en el tren de engranajes. Los relojeros usan aceite especial para relojes que no se pega ni se congela en las temperaturas variables de Londres, asegurando una operación suave durante todo el año.",
                de: "Der Uhrmechanismus muss alle 6 Monate geölt werden. Dieser regelmäßige Schmierplan erhält die Bronzelager und reduziert die Reibung im Zahnradgetriebe. Die Uhrmacher verwenden spezielles Uhrenöl, das bei Londons wechselnden Temperaturen nicht verklebt oder einfriert und das ganze Jahr über einen reibungslosen Betrieb gewährleistet.",
                nl: "Het klokmechanisme vereist smering elke 6 maanden. Dit regelmatige smeerschema onderhoudt de bronzen lagers en vermindert wrijving in de tandwieltrein. De klokbeheerders gebruiken speciale klokolie die niet kleverig wordt of bevriest bij de wisselende temperaturen van Londen, wat het hele jaar door soepele werking garandeert."
            }
        },
        {
            question: {
                en: "What role did Sir Benjamin Hall play in Big Ben's history?",
                es: "¿Qué papel jugó Sir Benjamin Hall en la historia de Big Ben?",
                de: "Welche Rolle spielte Sir Benjamin Hall in Big Bens Geschichte?",
                nl: "Welke rol speelde Sir Benjamin Hall in de geschiedenis van Big Ben?"
            },
            options: {
                en: ["Designed the clock", "Chief Commissioner of Works who oversaw construction", "Bell founder", "Architect"],
                es: ["Diseñó el reloj", "Comisionado Jefe de Obras que supervisó la construcción", "Fundidor de campanas", "Arquitecto"],
                de: ["Entwarf die Uhr", "Oberkommissar für Arbeiten, der den Bau überwachte", "Glockengießer", "Architekt"],
                nl: ["Ontwierp de klok", "Hoofd Commissaris van Werken die het bouwtoezicht had", "Klokgieter", "Architect"]
            },
            correct: 1,
            explanation: {
                en: "Sir Benjamin Hall served as Chief Commissioner of Works during the tower's construction and supervised the installation of the great bell in 1858. Standing over 6 feet tall, he was a large man, and many believe the bell was nicknamed 'Big Ben' after him, though some attribute the name to heavyweight boxer Ben Caunt.",
                es: "Sir Benjamin Hall sirvió como Comisionado Jefe de Obras durante la construcción de la torre y supervisó la instalación de la gran campana en 1858. Con una altura de más de 6 pies, era un hombre grande, y muchos creen que la campana recibió el apodo de 'Big Ben' en su honor, aunque algunos atribuyen el nombre al boxeador de peso pesado Ben Caunt.",
                de: "Sir Benjamin Hall diente während des Turmbaus als Oberkommissar für Arbeiten und überwachte 1858 die Installation der großen Glocke. Mit über 6 Fuß Körpergröße war er ein großer Mann, und viele glauben, dass die Glocke nach ihm 'Big Ben' genannt wurde, obwohl einige den Namen dem Schwergewichtsboxer Ben Caunt zuschreiben.",
                nl: "Sir Benjamin Hall diende als Hoofd Commissaris van Werken tijdens de bouw van de toren en hield toezicht op de installatie van de grote klok in 1858. Met een lengte van meer dan 6 voet was hij een grote man, en velen geloven dat de klok naar hem werd vernoemd als 'Big Ben', hoewel sommigen de naam toeschrijven aan zwaargewicht bokser Ben Caunt."
            }
        },
        {
            question: {
                en: "What backup system exists if the main clock mechanism fails?",
                es: "¿Qué sistema de respaldo existe si el mecanismo principal del reloj falla?",
                de: "Welches Backup-System existiert, wenn der Hauptuhrmechanismus ausfällt?",
                nl: "Welk back-upsysteem bestaat er als het hoofdklokmechanisme faalt?"
            },
            options: {
                en: ["Electronic backup clock", "Secondary mechanical clock", "Manual operation only", "No backup system"],
                es: ["Reloj de respaldo electrónico", "Reloj mecánico secundario", "Solo operación manual", "Sin sistema de respaldo"],
                de: ["Elektronische Backup-Uhr", "Sekundäre mechanische Uhr", "Nur manueller Betrieb", "Kein Backup-System"],
                nl: ["Elektronische back-upklok", "Secundaire mechanische klok", "Alleen handmatige bediening", "Geen back-upsysteem"]
            },
            correct: 0,
            explanation: {
                en: "Modern additions include an electronic backup clock that can drive the hands if the Victorian mechanism fails. This was added during the 20th century to ensure continuous timekeeping during maintenance or mechanical failure. However, preference is always given to operating the original 1859 mechanism whenever possible.",
                es: "Las adiciones modernas incluyen un reloj de respaldo electrónico que puede impulsar las manecillas si el mecanismo victoriano falla. Esto se agregó durante el siglo XX para asegurar el cronometraje continuo durante el mantenimiento o fallo mecánico. Sin embargo, siempre se da preferencia a operar el mecanismo original de 1859 cuando sea posible.",
                de: "Moderne Ergänzungen umfassen eine elektronische Backup-Uhr, die die Zeiger antreiben kann, wenn der viktorianische Mechanismus ausfällt. Dies wurde im 20. Jahrhundert hinzugefügt, um kontinuierliche Zeitmessung während Wartung oder mechanischem Versagen zu gewährleisten. Die Präferenz gilt jedoch immer dem Betrieb des ursprünglichen Mechanismus von 1859, wann immer möglich.",
                nl: "Moderne toevoegingen omvatten een elektronische back-upklok die de wijzers kan aandrijven als het Victoriaanse mechanisme faalt. Dit werd toegevoegd tijdens de 20e eeuw om continue tijdmeting te waarborgen tijdens onderhoud of mechanisch falen. De voorkeur gaat echter altijd uit naar het bedienen van het originele mechanisme van 1859 wanneer mogelijk."
            }
        },
        {
            question: {
                en: "How is the Ayrton Light used as a communication signal?",
                es: "¿Cómo se usa la Luz Ayrton como señal de comunicación?",
                de: "Wie wird das Ayrton-Licht als Kommunikationssignal verwendet?",
                nl: "Hoe wordt het Ayrton-licht gebruikt als communicatiesignaal?"
            },
            options: {
                en: ["Time signal", "Parliament is sitting when lit", "Emergency warning", "Clock malfunction indicator"],
                es: ["Señal horaria", "El Parlamento está en sesión cuando está encendida", "Advertencia de emergencia", "Indicador de mal funcionamiento del reloj"],
                de: ["Zeitsignal", "Parlament tagt, wenn beleuchtet", "Notfallwarnung", "Uhrenfehlanzeige"],
                nl: ["Tijdsignaal", "Parlement is in zitting wanneer verlicht", "Noodwaarschuwing", "Klok storingsindicator"]
            },
            correct: 1,
            explanation: {
                en: "The Ayrton Light, located above the belfry, is illuminated whenever the House of Commons is sitting after dark. This beacon, named after Acton Smee Ayrton who commissioned it in 1873, allows Londoners to see at a glance whether Parliament is in session during evening hours.",
                es: "La Luz Ayrton, ubicada sobre el campanario, se ilumina cuando la Cámara de los Comunes está en sesión después del anochecer. Este faro, nombrado en honor a Acton Smee Ayrton quien lo encargó en 1873, permite a los londinenses ver de un vistazo si el Parlamento está en sesión durante las horas de la tarde.",
                de: "Das Ayrton-Licht, das sich über dem Glockenturm befindet, wird beleuchtet, wenn das House of Commons nach Einbruch der Dunkelheit tagt. Dieses Leuchtfeuer, benannt nach Acton Smee Ayrton, der es 1873 in Auftrag gab, ermöglicht es Londonern, auf einen Blick zu sehen, ob das Parlament während der Abendstunden tagt.",
                nl: "Het Ayrton-licht, gelegen boven de klokkentoren, wordt verlicht wanneer het Lagerhuis na het donker in zitting is. Dit baken, genoemd naar Acton Smee Ayrton die het in 1873 opdroeg, stelt Londenaren in staat om in één oogopslag te zien of het Parlement tijdens de avonduren in zitting is."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else {
        window.bigBenLevel3Questions = questions;
    }
})();
