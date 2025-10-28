(function() {
    const questions = [
        {
            question: {
                en: "How many beats per hour does the pendulum make?",
                es: "¿Cuántos latidos por hora hace el péndulo?",
                de: "Wie viele Schläge pro Stunde macht das Pendel?",
                nl: "Hoeveel slagen per uur maakt de slinger?"
            },
            options: {
                en: ["1,800 beats/hour", "3,600 beats/hour", "7,200 beats/hour", "10,800 beats/hour"],
                es: ["1,800 latidos/hora", "3,600 latidos/hora", "7,200 latidos/hora", "10,800 latidos/hora"],
                de: ["1.800 Schläge/Stunde", "3.600 Schläge/Stunde", "7.200 Schläge/Stunde", "10.800 Schläge/Stunde"],
                nl: ["1.800 slagen/uur", "3.600 slagen/uur", "7.200 slagen/uur", "10.800 slagen/uur"]
            },
            correct: 1,
            explanation: {
                en: "The pendulum beats exactly 3,600 times per hour, or once per second (1 Hz). This precise one-second beat is fundamental to the clock's accuracy, with each swing advancing the mechanism by one second.",
                es: "El péndulo late exactamente 3,600 veces por hora, o una vez por segundo (1 Hz). Este latido preciso de un segundo es fundamental para la precisión del reloj, con cada oscilación avanzando el mecanismo en un segundo.",
                de: "Das Pendel schlägt genau 3.600 Mal pro Stunde oder einmal pro Sekunde (1 Hz). Dieser präzise Sekundenschlag ist grundlegend für die Genauigkeit der Uhr, wobei jede Schwingung den Mechanismus um eine Sekunde vorantreibt.",
                nl: "De slinger slaat precies 3.600 keer per uur, of eenmaal per seconde (1 Hz). Deze precieze secondeslag is fundamenteel voor de nauwkeurigheid van de klok, waarbij elke zwaai het mechanisme met één seconde vooruit brengt."
            }
        },
        {
            question: {
                en: "What are the two separate train systems in the clock mechanism?",
                es: "¿Cuáles son los dos sistemas de tren separados en el mecanismo del reloj?",
                de: "Was sind die beiden getrennten Zugsysteme im Uhrmechanismus?",
                nl: "Wat zijn de twee afzonderlijke treinsystemen in het klokmechanisme?"
            },
            options: {
                en: ["Power train and display train", "Going train (timekeeping) and striking train (chiming)", "Main train and backup train", "Hour train and minute train"],
                es: ["Tren de potencia y tren de visualización", "Tren de marcha (cronometraje) y tren de golpeo (campanadas)", "Tren principal y tren de respaldo", "Tren de horas y tren de minutos"],
                de: ["Kraftwerk und Anzeigewerk", "Gangwerk (Zeitmessung) und Schlagwerk (Läuten)", "Hauptwerk und Reservewerk", "Stundenwerk und Minutenwerk"],
                nl: ["Krachttrein en weergavetrein", "Gaatrein (tijdmeting) en slagtrein (luiden)", "Hoofdtrein en back-uptrein", "Uurtrein en minuuttrein"]
            },
            correct: 1,
            explanation: {
                en: "The clock has two independent train systems: the going train controls timekeeping through the escapement and pendulum, while the striking train operates the bells for chiming. This separation prevents the heavy striking mechanism from affecting timekeeping accuracy.",
                es: "El reloj tiene dos sistemas de tren independientes: el tren de marcha controla el cronometraje a través del escape y el péndulo, mientras que el tren de golpeo opera las campanas para las campanadas. Esta separación evita que el pesado mecanismo de golpeo afecte la precisión del cronometraje.",
                de: "Die Uhr hat zwei unabhängige Werksysteme: Das Gangwerk steuert die Zeitmessung über die Hemmung und das Pendel, während das Schlagwerk die Glocken zum Läuten betätigt. Diese Trennung verhindert, dass der schwere Schlagmechanismus die Zeitgenauigkeit beeinflusst.",
                nl: "De klok heeft twee onafhankelijke treinsystemen: de gaattrein regelt de tijdmeting via de ontsnapping en slinger, terwijl de slagtrein de klokken voor het luiden bedient. Deze scheiding voorkomt dat het zware slagmechanisme de nauwkeurigheid van de tijdmeting beïnvloedt."
            }
        },
        {
            question: {
                en: "What is the fly governor mechanism used for?",
                es: "¿Para qué se utiliza el mecanismo del regulador de vuelo?",
                de: "Wofür wird der Fliehkraftregler verwendet?",
                nl: "Waarvoor wordt het vliegwielregelaarmechanisme gebruikt?"
            },
            options: {
                en: ["Controlling pendulum speed", "Controlling strike speed of the bells", "Winding the clock", "Illuminating the clock faces"],
                es: ["Controlar la velocidad del péndulo", "Controlar la velocidad de golpeo de las campanas", "Dar cuerda al reloj", "Iluminar las esferas del reloj"],
                de: ["Steuerung der Pendelgeschwindigkeit", "Steuerung der Schlaggeschwindigkeit der Glocken", "Aufziehen der Uhr", "Beleuchtung der Zifferblätter"],
                nl: ["Regeling van de slingersnelheid", "Regeling van de slagsnelheid van de klokken", "Opwinden van de klok", "Verlichten van de wijzerplaten"]
            },
            correct: 1,
            explanation: {
                en: "The fly governor is a mechanical regulator that controls the speed at which the bells strike. It uses air resistance from spinning vanes to prevent the striking mechanism from running too fast, ensuring each chime sounds clearly and at the proper tempo.",
                es: "El regulador de vuelo es un regulador mecánico que controla la velocidad a la que golpean las campanas. Utiliza la resistencia del aire de las paletas giratorias para evitar que el mecanismo de golpeo funcione demasiado rápido, asegurando que cada campanada suene claramente y al tempo adecuado.",
                de: "Der Fliehkraftregler ist ein mechanischer Regler, der die Geschwindigkeit steuert, mit der die Glocken schlagen. Er nutzt den Luftwiderstand rotierender Flügel, um zu verhindern, dass der Schlagmechanismus zu schnell läuft, wodurch jeder Glockenschlag klar und im richtigen Tempo erklingt.",
                nl: "De vliegwielregelaar is een mechanische regelaar die de snelheid regelt waarmee de klokken slaan. Het gebruikt luchtweerstand van draaiende schoepen om te voorkomen dat het slagmechanisme te snel loopt, waardoor elke klokslag helder klinkt en op het juiste tempo."
            }
        },
        {
            question: {
                en: "How many bells play the Westminster Quarters?",
                es: "¿Cuántas campanas tocan el Westminster Quarters?",
                de: "Wie viele Glocken spielen die Westminster Quarters?",
                nl: "Hoeveel klokken spelen de Westminster Quarters?"
            },
            options: {
                en: ["4 bells", "8 bells", "12 bells", "20 bells in a carillon"],
                es: ["4 campanas", "8 campanas", "12 campanas", "20 campanas en un carillón"],
                de: ["4 Glocken", "8 Glocken", "12 Glocken", "20 Glocken in einem Glockenspiel"],
                nl: ["4 klokken", "8 klokken", "12 klokken", "20 klokken in een beiaard"]
            },
            correct: 3,
            explanation: {
                en: "The Westminster Quarters melody is played by a 20-bell carillon. These bells work together to create the famous four-note melody that plays every quarter hour, separate from the main Big Ben bell that strikes the hours.",
                es: "La melodía Westminster Quarters es tocada por un carillón de 20 campanas. Estas campanas trabajan juntas para crear la famosa melodía de cuatro notas que suena cada cuarto de hora, separada de la campana principal Big Ben que marca las horas.",
                de: "Die Westminster Quarters-Melodie wird von einem 20-Glocken-Glockenspiel gespielt. Diese Glocken arbeiten zusammen, um die berühmte Vier-Noten-Melodie zu erzeugen, die jede Viertelstunde spielt, getrennt von der Hauptglocke Big Ben, die die Stunden schlägt.",
                nl: "De Westminster Quarters-melodie wordt gespeeld door een beiaard van 20 klokken. Deze klokken werken samen om de beroemde vier-noten melodie te creëren die elk kwartier speelt, gescheiden van de hoofd Big Ben klok die de uren slaat."
            }
        },
        {
            question: {
                en: "What are the weights of the four quarter bells?",
                es: "¿Cuáles son los pesos de las cuatro campanas de cuarto?",
                de: "Was sind die Gewichte der vier Viertelstundenglocken?",
                nl: "Wat zijn de gewichten van de vier kwartierklokken?"
            },
            options: {
                en: ["All equal at 3 tons each", "4 tons, 3 tons, 2.5 tons, 2 tons", "5 tons, 4 tons, 3 tons, 2 tons", "6 tons, 5 tons, 4 tons, 3 tons"],
                es: ["Todas iguales a 3 toneladas cada una", "4 toneladas, 3 toneladas, 2.5 toneladas, 2 toneladas", "5 toneladas, 4 toneladas, 3 toneladas, 2 toneladas", "6 toneladas, 5 toneladas, 4 toneladas, 3 toneladas"],
                de: ["Alle gleich bei 3 Tonnen", "4 Tonnen, 3 Tonnen, 2,5 Tonnen, 2 Tonnen", "5 Tonnen, 4 Tonnen, 3 Tonnen, 2 Tonnen", "6 Tonnen, 5 Tonnen, 4 Tonnen, 3 Tonnen"],
                nl: ["Allemaal gelijk op 3 ton elk", "4 ton, 3 ton, 2,5 ton, 2 ton", "5 ton, 4 ton, 3 ton, 2 ton", "6 ton, 5 ton, 4 ton, 3 ton"]
            },
            correct: 1,
            explanation: {
                en: "The four quarter bells that play the Westminster Quarters weigh 4 tons (1st), 3 tons (2nd), 2.5 tons (3rd), and 2 tons (4th). The different weights produce different musical notes, creating the famous melodic sequence.",
                es: "Las cuatro campanas de cuarto que tocan el Westminster Quarters pesan 4 toneladas (1ª), 3 toneladas (2ª), 2.5 toneladas (3ª) y 2 toneladas (4ª). Los diferentes pesos producen diferentes notas musicales, creando la famosa secuencia melódica.",
                de: "Die vier Viertelstundenglocken, die die Westminster Quarters spielen, wiegen 4 Tonnen (1.), 3 Tonnen (2.), 2,5 Tonnen (3.) und 2 Tonnen (4.). Die unterschiedlichen Gewichte erzeugen verschiedene Musiknoten und schaffen die berühmte melodische Sequenz.",
                nl: "De vier kwartierklokken die de Westminster Quarters spelen wegen 4 ton (1e), 3 ton (2e), 2,5 ton (3e) en 2 ton (4e). De verschillende gewichten produceren verschillende muzieknoten, waardoor de beroemde melodische reeks ontstaat."
            }
        },
        {
            question: {
                en: "What is the chime sequence timing pattern?",
                es: "¿Cuál es el patrón de tiempo de la secuencia de campanadas?",
                de: "Was ist das Zeitschema der Glockenschlagsequenz?",
                nl: "Wat is het tijdschema van de klokreeks?"
            },
            options: {
                en: ["Equal chimes every 15 minutes", "1st quarter (1 chime), 2nd (4 chimes), 3rd (8 chimes), 4th (12 chimes) + hour strike", "Simple hour strikes only", "Random pattern"],
                es: ["Campanadas iguales cada 15 minutos", "1er cuarto (1 campanada), 2º (4 campanadas), 3º (8 campanadas), 4º (12 campanadas) + toque de hora", "Solo toques de hora simples", "Patrón aleatorio"],
                de: ["Gleiche Glocken alle 15 Minuten", "1. Viertel (1 Schlag), 2. (4 Schläge), 3. (8 Schläge), 4. (12 Schläge) + Stundenschlag", "Nur einfache Stundenschläge", "Zufälliges Muster"],
                nl: ["Gelijke klokslagen elke 15 minuten", "1e kwartier (1 slag), 2e (4 slagen), 3e (8 slagen), 4e (12 slagen) + uurslag", "Alleen eenvoudige uurslagen", "Willekeurig patroon"]
            },
            correct: 1,
            explanation: {
                en: "The Westminster Quarters follow a cumulative pattern: 1st quarter (1 chime sequence), 2nd quarter (4 chime sequences), 3rd quarter (8 chime sequences), 4th quarter (12 chime sequences) followed by Big Ben striking the hour. This creates an increasing musical progression throughout each hour.",
                es: "El Westminster Quarters sigue un patrón acumulativo: 1er cuarto (1 secuencia de campanada), 2º cuarto (4 secuencias de campanadas), 3er cuarto (8 secuencias de campanadas), 4º cuarto (12 secuencias de campanadas) seguido de Big Ben marcando la hora. Esto crea una progresión musical creciente a lo largo de cada hora.",
                de: "Die Westminster Quarters folgen einem kumulativen Muster: 1. Viertel (1 Glockenschlagsequenz), 2. Viertel (4 Sequenzen), 3. Viertel (8 Sequenzen), 4. Viertel (12 Sequenzen), gefolgt von Big Ben, der die Stunde schlägt. Dies erzeugt eine zunehmende musikalische Progression während jeder Stunde.",
                nl: "De Westminster Quarters volgen een cumulatief patroon: 1e kwartier (1 klokreeks), 2e kwartier (4 klokreeksen), 3e kwartier (8 klokreeksen), 4e kwartier (12 klokreeksen) gevolgd door Big Ben die het uur slaat. Dit creëert een toenemende muzikale progressie gedurende elk uur."
            }
        },
        {
            question: {
                en: "What is the pendulum suspension system?",
                es: "¿Cuál es el sistema de suspensión del péndulo?",
                de: "Was ist das Pendelaufhängungssystem?",
                nl: "Wat is het slingerophangsysteem?"
            },
            options: {
                en: ["Rigid metal rod", "Flat spring allowing oscillation", "Wire cable", "Magnetic levitation"],
                es: ["Varilla metálica rígida", "Resorte plano que permite la oscilación", "Cable de alambre", "Levitación magnética"],
                de: ["Starre Metallstange", "Flache Feder, die Schwingung ermöglicht", "Drahtkabel", "Magnetische Levitation"],
                nl: ["Stijve metalen staaf", "Platte veer die oscillatie mogelijk maakt", "Draadkabel", "Magnetische levitatie"]
            },
            correct: 1,
            explanation: {
                en: "The pendulum is suspended by a flat spring suspension system. This flexible spring allows the pendulum to oscillate freely while maintaining precise vertical alignment. The spring's design is critical for accurate timekeeping and minimizes friction.",
                es: "El péndulo está suspendido por un sistema de suspensión de resorte plano. Este resorte flexible permite que el péndulo oscile libremente mientras mantiene una alineación vertical precisa. El diseño del resorte es crítico para un cronometraje preciso y minimiza la fricción.",
                de: "Das Pendel ist an einem flachen Federaufhängungssystem aufgehängt. Diese flexible Feder ermöglicht es dem Pendel, frei zu schwingen, während eine präzise vertikale Ausrichtung beibehalten wird. Das Design der Feder ist entscheidend für genaue Zeitmessung und minimiert Reibung.",
                nl: "De slinger is opgehangen aan een plat veerophangsysteem. Deze flexibele veer stelt de slinger in staat vrij te oscilleren terwijl een precieze verticale uitlijning behouden blijft. Het ontwerp van de veer is cruciaal voor nauwkeurige tijdmeting en minimaliseert wrijving."
            }
        },
        {
            question: {
                en: "What is the maintaining power mechanism?",
                es: "¿Qué es el mecanismo de mantenimiento de potencia?",
                de: "Was ist der Aufrechterhaltungsmechanismus?",
                nl: "Wat is het onderhoudsvermogensmechanisme?"
            },
            options: {
                en: ["Battery backup system", "Keeps clock running during winding", "Emergency power generator", "Solar power system"],
                es: ["Sistema de respaldo de batería", "Mantiene el reloj funcionando durante la cuerda", "Generador de energía de emergencia", "Sistema de energía solar"],
                de: ["Batterie-Backup-System", "Hält die Uhr während des Aufziehens am Laufen", "Notstromgenerator", "Solarenergiesystem"],
                nl: ["Batterij back-upsysteem", "Houdt klok draaiend tijdens opwinden", "Noodstroomgenerator", "Zonne-energiesysteem"]
            },
            correct: 1,
            explanation: {
                en: "The maintaining power mechanism is a clever device that keeps the clock running during the winding process. When the main driving weights are being raised, this auxiliary system temporarily powers the escapement, preventing the clock from stopping and losing accuracy.",
                es: "El mecanismo de mantenimiento de potencia es un dispositivo ingenioso que mantiene el reloj funcionando durante el proceso de cuerda. Cuando se están elevando las pesas de accionamiento principales, este sistema auxiliar alimenta temporalmente el escape, evitando que el reloj se detenga y pierda precisión.",
                de: "Der Aufrechterhaltungsmechanismus ist eine clevere Vorrichtung, die die Uhr während des Aufziehvorgangs am Laufen hält. Wenn die Hauptantriebsgewichte angehoben werden, treibt dieses Hilfssystem vorübergehend die Hemmung an und verhindert, dass die Uhr anhält und an Genauigkeit verliert.",
                nl: "Het onderhoudsvermogensmechanisme is een slim apparaat dat de klok draaiend houdt tijdens het opwindproces. Wanneer de hoofdaandrijvingsgewichten worden opgetrokken, voedt dit hulpsysteem tijdelijk de ontsnapping, waardoor wordt voorkomen dat de klok stopt en nauwkeurigheid verliest."
            }
        },
        {
            question: {
                en: "What is the maximum escapement error per week?",
                es: "¿Cuál es el error máximo de escape por semana?",
                de: "Was ist der maximale Hemmungsfehler pro Woche?",
                nl: "Wat is de maximale ontsnappingsfout per week?"
            },
            options: {
                en: ["±10 seconds", "±5 seconds", "±1 second", "±0.1 second"],
                es: ["±10 segundos", "±5 segundos", "±1 segundo", "±0.1 segundo"],
                de: ["±10 Sekunden", "±5 Sekunden", "±1 Sekunde", "±0,1 Sekunde"],
                nl: ["±10 seconden", "±5 seconden", "±1 seconde", "±0,1 seconde"]
            },
            correct: 2,
            explanation: {
                en: "Denison's gravity escapement design achieves a maximum error of only ±1 second per week. This exceptional accuracy for a mechanical turret clock was revolutionary in the 1850s and remains impressive today, especially given the external factors like wind and temperature changes.",
                es: "El diseño del escape de gravedad de Denison logra un error máximo de solo ±1 segundo por semana. Esta precisión excepcional para un reloj de torre mecánico fue revolucionaria en la década de 1850 y sigue siendo impresionante hoy, especialmente dados los factores externos como el viento y los cambios de temperatura.",
                de: "Denisons Schwerkrafthemmungsdesign erreicht einen maximalen Fehler von nur ±1 Sekunde pro Woche. Diese außergewöhnliche Genauigkeit für eine mechanische Turmuhr war in den 1850er Jahren revolutionär und bleibt heute beeindruckend, insbesondere angesichts äußerer Faktoren wie Wind und Temperaturänderungen.",
                nl: "Denisons zwaartekrachtontsnappingsontwerp behaalt een maximale fout van slechts ±1 seconde per week. Deze uitzonderlijke nauwkeurigheid voor een mechanische torenklok was revolutionair in de jaren 1850 en blijft vandaag indrukwekkend, vooral gezien externe factoren zoals wind en temperatuurveranderingen."
            }
        },
        {
            question: {
                en: "What role did Big Ben play in GMT timekeeping before atomic clocks?",
                es: "¿Qué papel jugó Big Ben en el cronometraje GMT antes de los relojes atómicos?",
                de: "Welche Rolle spielte Big Ben bei der GMT-Zeitmessung vor Atomuhren?",
                nl: "Welke rol speelde Big Ben bij GMT-tijdmeting vóór atoomklokken?"
            },
            options: {
                en: ["No role in official timekeeping", "Served as a reliable public timekeeper for London and broadcast time signals", "Was the official GMT timekeeper", "Only decorative purpose"],
                es: ["Sin papel en el cronometraje oficial", "Sirvió como guardián de tiempo público confiable para Londres y difundió señales de tiempo", "Fue el guardián oficial del GMT", "Solo propósito decorativo"],
                de: ["Keine Rolle in der offiziellen Zeitmessung", "Diente als zuverlässiger öffentlicher Zeitmesser für London und sendete Zeitsignale", "War der offizielle GMT-Zeitmesser", "Nur dekorativer Zweck"],
                nl: ["Geen rol in officiële tijdmeting", "Diende als betrouwbare publieke tijdhouder voor Londen en zond tijdsignalen uit", "Was de officiële GMT-tijdhouder", "Alleen decoratief doel"]
            },
            correct: 1,
            explanation: {
                en: "Before atomic clocks became standard, Big Ben served as a highly reliable public timekeeper for London. While Greenwich Observatory maintained official GMT, Big Ben's accuracy and BBC broadcasts of its chimes made it a practical time reference for millions, symbolizing British precision.",
                es: "Antes de que los relojes atómicos se convirtieran en estándar, Big Ben sirvió como un guardián de tiempo público altamente confiable para Londres. Mientras que el Observatorio de Greenwich mantenía el GMT oficial, la precisión de Big Ben y las transmisiones de la BBC de sus campanadas lo convirtieron en una referencia de tiempo práctica para millones, simbolizando la precisión británica.",
                de: "Bevor Atomuhren zum Standard wurden, diente Big Ben als äußerst zuverlässiger öffentlicher Zeitmesser für London. Während die Greenwich-Sternwarte die offizielle GMT aufrechterhielt, machten Big Bens Genauigkeit und BBC-Übertragungen seiner Glockenschläge ihn zu einer praktischen Zeitreferenz für Millionen und symbolisierten britische Präzision.",
                nl: "Voordat atoomklokken standaard werden, diende Big Ben als een zeer betrouwbare publieke tijdhouder voor Londen. Terwijl Greenwich Observatory de officiële GMT behield, maakten Big Bens nauwkeurigheid en BBC-uitzendingen van zijn klokslagen het een praktische tijdreferentie voor miljoenen, wat Britse precisie symboliseerde."
            }
        },
        {
            question: {
                en: "What conservation work was completed from 2017-2021 and at what cost?",
                es: "¿Qué trabajo de conservación se completó de 2017-2021 y a qué costo?",
                de: "Welche Konservierungsarbeiten wurden von 2017-2021 abgeschlossen und zu welchen Kosten?",
                nl: "Welke conserveringswerkzaamheden werden voltooid van 2017-2021 en tegen welke kosten?"
            },
            options: {
                en: ["Minor repairs, £10 million", "Major restoration including asbestos removal and repairs, £80 million", "Complete rebuild, £200 million", "Cleaning only, £5 million"],
                es: ["Reparaciones menores, £10 millones", "Restauración importante incluyendo eliminación de asbesto y reparaciones, £80 millones", "Reconstrucción completa, £200 millones", "Solo limpieza, £5 millones"],
                de: ["Kleinere Reparaturen, £10 Millionen", "Große Restaurierung einschließlich Asbestentfernung und Reparaturen, £80 Millionen", "Kompletter Wiederaufbau, £200 Millionen", "Nur Reinigung, £5 Millionen"],
                nl: ["Kleine reparaties, £10 miljoen", "Grote restauratie inclusief asbestverwijdering en reparaties, £80 miljoen", "Volledige herbouw, £200 miljoen", "Alleen schoonmaken, £5 miljoen"]
            },
            correct: 1,
            explanation: {
                en: "The 2017-2021 conservation project cost £80 million and included removing hazardous asbestos, repairing extensive ironwork corrosion, replacing broken glass in the clock faces, and comprehensively restoring the clock mechanism. This major work ensures Big Ben's preservation for future generations.",
                es: "El proyecto de conservación de 2017-2021 costó £80 millones e incluyó la eliminación de asbesto peligroso, la reparación de corrosión extensa de herrajes, el reemplazo de vidrios rotos en las esferas del reloj y la restauración integral del mecanismo del reloj. Este importante trabajo asegura la preservación de Big Ben para las generaciones futuras.",
                de: "Das Konservierungsprojekt 2017-2021 kostete £80 Millionen und umfasste die Entfernung von gefährlichem Asbest, die Reparatur umfangreicher Eisenwerkkorrosion, den Austausch von gebrochenem Glas in den Zifferblättern und die umfassende Restaurierung des Uhrmechanismus. Diese umfangreichen Arbeiten sichern Big Bens Erhaltung für zukünftige Generationen.",
                nl: "Het conserveringsproject van 2017-2021 kostte £80 miljoen en omvatte het verwijderen van gevaarlijk asbest, het repareren van uitgebreide ijzerwerkencorrosie, het vervangen van gebroken glas in de wijzerplaten en het uitgebreid restaureren van het klokmechanisme. Dit belangrijke werk zorgt voor het behoud van Big Ben voor toekomstige generaties."
            }
        },
        {
            question: {
                en: "When did Big Ben remain silent during the renovation?",
                es: "¿Cuándo permaneció Big Ben en silencio durante la renovación?",
                de: "Wann blieb Big Ben während der Renovierung stumm?",
                nl: "Wanneer bleef Big Ben stil tijdens de renovatie?"
            },
            options: {
                en: ["Never stopped", "Completely silent 2017-2021", "Silent except New Year's Eve and Remembrance Sunday", "Only silent during weekdays"],
                es: ["Nunca se detuvo", "Completamente silencioso 2017-2021", "Silencioso excepto Nochevieja y Domingo del Recuerdo", "Solo silencioso durante los días laborables"],
                de: ["Nie gestoppt", "Komplett stumm 2017-2021", "Stumm außer Silvester und Remembrance Sunday", "Nur wochentags stumm"],
                nl: ["Nooit gestopt", "Volledig stil 2017-2021", "Stil behalve oudejaarsavond en Remembrance Sunday", "Alleen stil tijdens weekdagen"]
            },
            correct: 2,
            explanation: {
                en: "During the 2017-2021 renovation, Big Ben was largely silent to protect workers and allow essential repairs. However, it continued to chime on significant occasions including New Year's Eve and Remembrance Sunday, maintaining important British traditions despite the conservation work.",
                es: "Durante la renovación de 2017-2021, Big Ben estuvo en gran parte en silencio para proteger a los trabajadores y permitir reparaciones esenciales. Sin embargo, continuó sonando en ocasiones significativas, incluida la Nochevieja y el Domingo del Recuerdo, manteniendo importantes tradiciones británicas a pesar del trabajo de conservación.",
                de: "Während der Renovierung 2017-2021 war Big Ben größtenteils stumm, um Arbeiter zu schützen und wesentliche Reparaturen zu ermöglichen. Es läutete jedoch weiterhin zu bedeutenden Anlässen wie Silvester und Remembrance Sunday und bewahrte wichtige britische Traditionen trotz der Konservierungsarbeiten.",
                nl: "Tijdens de renovatie van 2017-2021 was Big Ben grotendeels stil om arbeiders te beschermen en essentiële reparaties mogelijk te maken. Het bleef echter luiden bij belangrijke gelegenheden, waaronder oudejaarsavond en Remembrance Sunday, waarbij belangrijke Britse tradities behouden bleven ondanks de conserveringswerkzaamheden."
            }
        },
        {
            question: {
                en: "Are Denison's original clock mechanism drawings preserved?",
                es: "¿Se conservan los dibujos originales del mecanismo del reloj de Denison?",
                de: "Sind Denisons ursprüngliche Zeichnungen des Uhrmechanismus erhalten?",
                nl: "Zijn Denisons originele tekeningen van het klokmechanisme bewaard gebleven?"
            },
            options: {
                en: ["No, all lost", "Yes, preserved for historical and maintenance reference", "Only partial drawings exist", "Recreated from memory"],
                es: ["No, todos perdidos", "Sí, preservados para referencia histórica y de mantenimiento", "Solo existen dibujos parciales", "Recreados de memoria"],
                de: ["Nein, alle verloren", "Ja, für historische und Wartungsreferenz erhalten", "Nur Teilzeichnungen existieren", "Aus dem Gedächtnis nachgebildet"],
                nl: ["Nee, allemaal verloren", "Ja, bewaard voor historische en onderhoudsreferentie", "Alleen gedeeltelijke tekeningen bestaan", "Gerecreëerd uit geheugen"]
            },
            correct: 1,
            explanation: {
                en: "Edmund Beckett Denison's original technical drawings of the clock mechanism have been carefully preserved. These detailed plans are invaluable for understanding the innovative design, conducting repairs, and maintaining the historical integrity of this Victorian engineering masterpiece.",
                es: "Los dibujos técnicos originales de Edmund Beckett Denison del mecanismo del reloj se han conservado cuidadosamente. Estos planes detallados son invaluables para comprender el diseño innovador, realizar reparaciones y mantener la integridad histórica de esta obra maestra de la ingeniería victoriana.",
                de: "Edmund Beckett Denisons ursprüngliche technische Zeichnungen des Uhrmechanismus wurden sorgfältig bewahrt. Diese detaillierten Pläne sind von unschätzbarem Wert für das Verständnis des innovativen Designs, die Durchführung von Reparaturen und die Bewahrung der historischen Integrität dieses viktorianischen Meisterwerks der Ingenieurskunst.",
                nl: "Edmund Beckett Denisons originele technische tekeningen van het klokmechanisme zijn zorgvuldig bewaard gebleven. Deze gedetailleerde plannen zijn van onschatbare waarde voor het begrijpen van het innovatieve ontwerp, het uitvoeren van reparaties en het behouden van de historische integriteit van dit Victoriaanse technische meesterwerk."
            }
        },
        {
            question: {
                en: "What methods are used to verify clock accuracy?",
                es: "¿Qué métodos se utilizan para verificar la precisión del reloj?",
                de: "Welche Methoden werden verwendet, um die Genauigkeit der Uhr zu überprüfen?",
                nl: "Welke methoden worden gebruikt om de nauwkeurigheid van de klok te verifiëren?"
            },
            options: {
                en: ["Visual observation only", "Comparison with atomic time standards and precision monitoring", "No verification performed", "Monthly manual adjustments"],
                es: ["Solo observación visual", "Comparación con estándares de tiempo atómico y monitoreo de precisión", "No se realiza verificación", "Ajustes manuales mensuales"],
                de: ["Nur visuelle Beobachtung", "Vergleich mit atomaren Zeitstandards und Präzisionsüberwachung", "Keine Überprüfung durchgeführt", "Monatliche manuelle Anpassungen"],
                nl: ["Alleen visuele observatie", "Vergelijking met atomaire tijdstandaarden en precisiemonitoring", "Geen verificatie uitgevoerd", "Maandelijkse handmatige aanpassingen"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben's accuracy is verified by comparing it with modern atomic time standards. Clockkeepers monitor its performance continuously and make fine adjustments using the penny system when needed. This combination of Victorian engineering and modern verification ensures remarkable accuracy.",
                es: "La precisión de Big Ben se verifica comparándola con los estándares de tiempo atómico modernos. Los relojeros monitorean su rendimiento continuamente y hacen ajustes finos usando el sistema de peniques cuando es necesario. Esta combinación de ingeniería victoriana y verificación moderna asegura una precisión notable.",
                de: "Big Bens Genauigkeit wird durch Vergleich mit modernen atomaren Zeitstandards überprüft. Uhrmacher überwachen kontinuierlich die Leistung und nehmen bei Bedarf Feinabstimmungen mit dem Penny-System vor. Diese Kombination aus viktorianischer Ingenieurskunst und moderner Überprüfung gewährleistet bemerkenswerte Genauigkeit.",
                nl: "Big Bens nauwkeurigheid wordt geverifieerd door het te vergelijken met moderne atomaire tijdstandaarden. Klokbewaarders monitoren de prestaties continu en maken fijne aanpassingen met behulp van het pennysysteem wanneer dat nodig is. Deze combinatie van Victoriaanse techniek en moderne verificatie zorgt voor opmerkelijke nauwkeurigheid."
            }
        },
        {
            question: {
                en: "What lightning protection does the tower have?",
                es: "¿Qué protección contra rayos tiene la torre?",
                de: "Welchen Blitzschutz hat der Turm?",
                nl: "Welke bliksembescherming heeft de toren?"
            },
            options: {
                en: ["No protection", "Lightning protection system on tower", "Rubber insulation", "Magnetic deflection"],
                es: ["Sin protección", "Sistema de protección contra rayos en la torre", "Aislamiento de goma", "Deflexión magnética"],
                de: ["Kein Schutz", "Blitzschutzsystem am Turm", "Gummiisolierung", "Magnetische Ablenkung"],
                nl: ["Geen bescherming", "Bliksembeschermingssysteem op toren", "Rubber isolatie", "Magnetische afbuiging"]
            },
            correct: 1,
            explanation: {
                en: "The Elizabeth Tower is equipped with a lightning protection system to safeguard the structure, clock mechanism, and people inside. Given the tower's height and exposed position on the Thames, this protection is essential for preventing damage from lightning strikes.",
                es: "La Elizabeth Tower está equipada con un sistema de protección contra rayos para salvaguardar la estructura, el mecanismo del reloj y las personas dentro. Dada la altura de la torre y su posición expuesta en el Támesis, esta protección es esencial para prevenir daños por rayos.",
                de: "Der Elizabeth Tower ist mit einem Blitzschutzsystem ausgestattet, um die Struktur, den Uhrmechanismus und die Menschen im Inneren zu schützen. Angesichts der Höhe des Turms und seiner exponierten Position an der Themse ist dieser Schutz unerlässlich, um Schäden durch Blitzschlag zu verhindern.",
                nl: "De Elizabeth Tower is uitgerust met een bliksembeschermingssysteem om de structuur, het klokmechanisme en de mensen binnenin te beschermen. Gezien de hoogte van de toren en zijn blootgestelde positie aan de Theems, is deze bescherming essentieel voor het voorkomen van schade door blikseminslag."
            }
        },
        {
            question: {
                en: "What wind load calculations were necessary for tower stability?",
                es: "¿Qué cálculos de carga de viento fueron necesarios para la estabilidad de la torre?",
                de: "Welche Windlastberechnungen waren für die Turmstabilität erforderlich?",
                nl: "Welke windbelastingberekeningen waren noodzakelijk voor de stabiliteit van de toren?"
            },
            options: {
                en: ["None performed", "Extensive wind load calculations for the tall, exposed structure", "Only basic estimates", "Modern computer simulations only"],
                es: ["Ninguno realizado", "Cálculos extensos de carga de viento para la estructura alta y expuesta", "Solo estimaciones básicas", "Solo simulaciones por computadora modernas"],
                de: ["Keine durchgeführt", "Umfangreiche Windlastberechnungen für die hohe, exponierte Struktur", "Nur grundlegende Schätzungen", "Nur moderne Computersimulationen"],
                nl: ["Geen uitgevoerd", "Uitgebreide windbelastingberekeningen voor de hoge, blootgestelde structuur", "Alleen basisschattingen", "Alleen moderne computersimulaties"]
            },
            correct: 1,
            explanation: {
                en: "Victorian engineers performed extensive wind load calculations to ensure the 316-foot tower could withstand strong winds from all directions. The Gothic design's narrow profile and the Airy ventilated dials were partly designed to reduce wind resistance. These calculations were remarkably sophisticated for the 1840s-1850s.",
                es: "Los ingenieros victorianos realizaron extensos cálculos de carga de viento para asegurar que la torre de 316 pies pudiera resistir vientos fuertes de todas las direcciones. El perfil estrecho del diseño gótico y los diales ventilados Airy se diseñaron en parte para reducir la resistencia al viento. Estos cálculos fueron notablemente sofisticados para las décadas de 1840-1850.",
                de: "Viktorianische Ingenieure führten umfangreiche Windlastberechnungen durch, um sicherzustellen, dass der 316 Fuß hohe Turm starken Winden aus allen Richtungen standhalten kann. Das schmale Profil des gotischen Designs und die belüfteten Airy-Zifferblätter wurden teilweise entworfen, um den Windwiderstand zu reduzieren. Diese Berechnungen waren für die 1840er-1850er Jahre bemerkenswert ausgeklügelt.",
                nl: "Victoriaanse ingenieurs voerden uitgebreide windbelastingberekeningen uit om ervoor te zorgen dat de 316 voet hoge toren sterke winden uit alle richtingen kon weerstaan. Het smalle profiel van het gotische ontwerp en de geventileerde Airy-wijzerplaten werden deels ontworpen om de windweerstand te verminderen. Deze berekeningen waren opmerkelijk verfijnd voor de jaren 1840-1850."
            }
        },
        {
            question: {
                en: "How deep are the foundations and why is their depth significant?",
                es: "¿Qué profundidad tienen los cimientos y por qué es significativa su profundidad?",
                de: "Wie tief sind die Fundamente und warum ist ihre Tiefe bedeutsam?",
                nl: "Hoe diep zijn de fundamenten en waarom is hun diepte significant?"
            },
            options: {
                en: ["Shallow foundations, 10 feet", "Deep foundations necessary due to Thames proximity and soft ground", "Built on bedrock", "Floating foundations"],
                es: ["Cimientos poco profundos, 10 pies", "Cimientos profundos necesarios debido a la proximidad del Támesis y suelo blando", "Construido sobre roca madre", "Cimientos flotantes"],
                de: ["Flache Fundamente, 10 Fuß", "Tiefe Fundamente notwendig wegen Themse-Nähe und weichem Boden", "Auf Grundgestein gebaut", "Schwimmende Fundamente"],
                nl: ["Ondiepe fundamenten, 10 voet", "Diepe fundamenten noodzakelijk vanwege nabijheid van de Theems en zachte grond", "Gebouwd op rotsbedding", "Drijvende fundamenten"]
            },
            correct: 1,
            explanation: {
                en: "The tower required deep foundations due to its proximity to the River Thames and London's soft, waterlogged ground. Victorian engineers had to excavate deeply and use innovative foundation techniques to provide stable support for the 316-foot structure. This engineering challenge was critical to the tower's long-term stability.",
                es: "La torre requirió cimientos profundos debido a su proximidad al río Támesis y al suelo blando y saturado de agua de Londres. Los ingenieros victorianos tuvieron que excavar profundamente y usar técnicas de cimentación innovadoras para proporcionar un soporte estable para la estructura de 316 pies. Este desafío de ingeniería fue crítico para la estabilidad a largo plazo de la torre.",
                de: "Der Turm erforderte tiefe Fundamente aufgrund seiner Nähe zur Themse und Londons weichem, wassergesättigtem Boden. Viktorianische Ingenieure mussten tief graben und innovative Fundamenttechniken verwenden, um eine stabile Unterstützung für die 316 Fuß hohe Struktur zu bieten. Diese technische Herausforderung war entscheidend für die langfristige Stabilität des Turms.",
                nl: "De toren vereiste diepe fundamenten vanwege de nabijheid van de rivier de Theems en de zachte, doorweekte grond van Londen. Victoriaanse ingenieurs moesten diep graven en innovatieve funderingstechnieken gebruiken om stabiele ondersteuning te bieden voor de 316 voet hoge structuur. Deze technische uitdaging was cruciaal voor de langetermijnstabiliteit van de toren."
            }
        },
        {
            question: {
                en: "Does the Elizabeth Tower lean, and if so, by how much?",
                es: "¿Se inclina la Elizabeth Tower y, de ser así, cuánto?",
                de: "Neigt sich der Elizabeth Tower, und wenn ja, um wie viel?",
                nl: "Helt de Elizabeth Tower over, en zo ja, hoeveel?"
            },
            options: {
                en: ["Perfectly vertical", "Leans 0.26 degrees northwest (46cm lean)", "Leans 5 degrees like Pisa", "Leans 1 degree south"],
                es: ["Perfectamente vertical", "Se inclina 0.26 grados hacia el noroeste (inclinación de 46 cm)", "Se inclina 5 grados como Pisa", "Se inclina 1 grado hacia el sur"],
                de: ["Perfekt vertikal", "Neigt sich 0,26 Grad nach Nordwesten (46 cm Neigung)", "Neigt sich 5 Grad wie Pisa", "Neigt sich 1 Grad nach Süden"],
                nl: ["Perfect verticaal", "Helt 0,26 graden naar het noordwesten over (46 cm helling)", "Helt 5 graden over zoals Pisa", "Helt 1 graad naar het zuiden over"]
            },
            correct: 1,
            explanation: {
                en: "The Elizabeth Tower leans 0.26 degrees to the northwest, approximately 46 centimeters at its top. This slight lean has been carefully monitored and is considered safe. It's caused by ground conditions and tunnel construction nearby, but is much less severe than the Leaning Tower of Pisa.",
                es: "La Elizabeth Tower se inclina 0.26 grados hacia el noroeste, aproximadamente 46 centímetros en su parte superior. Esta ligera inclinación ha sido cuidadosamente monitoreada y se considera segura. Es causada por las condiciones del suelo y la construcción de túneles cercanos, pero es mucho menos grave que la Torre Inclinada de Pisa.",
                de: "Der Elizabeth Tower neigt sich 0,26 Grad nach Nordwesten, etwa 46 Zentimeter an seiner Spitze. Diese leichte Neigung wurde sorgfältig überwacht und gilt als sicher. Sie wird durch Bodenbedingungen und nahegelegene Tunnelbauten verursacht, ist aber viel weniger ausgeprägt als beim Schiefen Turm von Pisa.",
                nl: "De Elizabeth Tower helt 0,26 graden naar het noordwesten over, ongeveer 46 centimeter aan de top. Deze lichte helling is zorgvuldig gemonitord en wordt als veilig beschouwd. Het wordt veroorzaakt door grondcondities en nabijgelegen tunnelbouw, maar is veel minder ernstig dan de Scheve Toren van Pisa."
            }
        },
        {
            question: {
                en: "How does Big Ben's lean compare to the Leaning Tower of Pisa?",
                es: "¿Cómo se compara la inclinación de Big Ben con la Torre Inclinada de Pisa?",
                de: "Wie vergleicht sich Big Bens Neigung mit dem Schiefen Turm von Pisa?",
                nl: "Hoe verhoudt de helling van Big Ben zich tot de Scheve Toren van Pisa?"
            },
            options: {
                en: ["Equal lean", "Much less severe than Pisa (0.26° vs ~4°)", "More severe than Pisa", "Cannot be compared"],
                es: ["Inclinación igual", "Mucho menos grave que Pisa (0.26° vs ~4°)", "Más grave que Pisa", "No se puede comparar"],
                de: ["Gleiche Neigung", "Viel weniger ausgeprägt als Pisa (0,26° vs ~4°)", "Ausgeprägter als Pisa", "Kann nicht verglichen werden"],
                nl: ["Gelijke helling", "Veel minder ernstig dan Pisa (0,26° vs ~4°)", "Ernstiger dan Pisa", "Kan niet worden vergeleken"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben's 0.26-degree lean is much less severe than the Leaning Tower of Pisa's approximately 4-degree tilt. While Pisa's lean is famously visible and a defining characteristic, Big Ben's slight tilt is barely noticeable and poses no structural concern. Engineers continue to monitor it as a precaution.",
                es: "La inclinación de 0.26 grados de Big Ben es mucho menos grave que la inclinación de aproximadamente 4 grados de la Torre Inclinada de Pisa. Mientras que la inclinación de Pisa es famosamente visible y una característica definitoria, la ligera inclinación de Big Ben es apenas perceptible y no plantea ninguna preocupación estructural. Los ingenieros continúan monitoreándola como precaución.",
                de: "Big Bens Neigung von 0,26 Grad ist viel weniger ausgeprägt als die etwa 4-Grad-Neigung des Schiefen Turms von Pisa. Während Pisas Neigung berühmt sichtbar und ein charakteristisches Merkmal ist, ist Big Bens leichte Neigung kaum wahrnehmbar und stellt keine strukturellen Bedenken dar. Ingenieure überwachen sie weiterhin zur Vorsicht.",
                nl: "Big Bens helling van 0,26 graden is veel minder ernstig dan de helling van ongeveer 4 graden van de Scheve Toren van Pisa. Terwijl de helling van Pisa beroemd zichtbaar is en een bepalend kenmerk, is Big Bens lichte helling nauwelijks merkbaar en vormt geen structurele zorg. Ingenieurs blijven het monitoren als voorzorgsmaatregel."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else {
        window.bigBenLevel4Questions = questions;
    }
})();
