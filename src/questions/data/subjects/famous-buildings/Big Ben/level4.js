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
        },
        {
            question: {
                en: "What cultural significance did Big Ben's chimes have during WWII?",
                es: "¿Qué importancia cultural tuvieron las campanadas de Big Ben durante la Segunda Guerra Mundial?",
                de: "Welche kulturelle Bedeutung hatten Big Bens Glockenschläge während des Zweiten Weltkriegs?",
                nl: "Welke culturele betekenis hadden Big Bens klokslagen tijdens WOII?"
            },
            options: {
                en: ["None - it was silent", "BBC broadcast them to occupied Europe as symbol of hope", "Used as air raid warning", "Played only on special occasions"],
                es: ["Ninguna - estaba en silencio", "La BBC las transmitió a Europa ocupada como símbolo de esperanza", "Usadas como advertencia de ataque aéreo", "Sonaban solo en ocasiones especiales"],
                de: ["Keine - er war stumm", "BBC sendete sie als Symbol der Hoffnung nach besetztem Europa", "Als Luftalarm verwendet", "Nur bei besonderen Anlässen gespielt"],
                nl: ["Geen - het was stil", "BBC zond ze uit naar bezet Europa als symbool van hoop", "Gebruikt als luchtaanvalsalarm", "Alleen bij speciale gelegenheden gespeeld"]
            },
            correct: 1,
            explanation: {
                en: "During WWII, the BBC broadcast Big Ben's chimes daily to occupied Europe as a symbol of British resistance and hope. The familiar sound became an important morale booster for those living under Nazi occupation.",
                es: "Durante la Segunda Guerra Mundial, la BBC transmitió diariamente las campanadas de Big Ben a Europa ocupada como símbolo de resistencia británica y esperanza. El sonido familiar se convirtió en un importante impulso moral para quienes vivían bajo ocupación nazi.",
                de: "Während des Zweiten Weltkriegs sendete die BBC Big Bens Glockenschläge täglich nach besetztem Europa als Symbol des britischen Widerstands und der Hoffnung. Der vertraute Klang wurde zu einem wichtigen Moralbooster für diejenigen, die unter Nazi-Besatzung lebten.",
                nl: "Tijdens WOII zond de BBC dagelijks Big Bens klokslagen uit naar bezet Europa als symbool van Brits verzet en hoop. Het vertrouwde geluid werd een belangrijke moraalverhoger voor degenen die onder Nazi-bezetting leefden."
            }
        },
        {
            question: {
                en: "When did Big Ben first appear on television?",
                es: "¿Cuándo apareció Big Ben por primera vez en televisión?",
                de: "Wann erschien Big Ben erstmals im Fernsehen?",
                nl: "Wanneer verscheen Big Ben voor het eerst op televisie?"
            },
            options: {
                en: ["1932 - first BBC broadcast", "1949 - post-war broadcasts", "1960 - color TV era", "1984 - satellite broadcasts"],
                es: ["1932 - primera transmisión de la BBC", "1949 - transmisiones de posguerra", "1960 - era de TV a color", "1984 - transmisiones satelitales"],
                de: ["1932 - erste BBC-Sendung", "1949 - Nachkriegssendungen", "1960 - Farbfernseh-Ära", "1984 - Satellitensendungen"],
                nl: ["1932 - eerste BBC-uitzending", "1949 - naoorlogse uitzendingen", "1960 - kleurentelevisie-tijdperk", "1984 - satellietuitzendingen"]
            },
            correct: 0,
            explanation: {
                en: "Big Ben first appeared on television in 1932 during early BBC experimental broadcasts. It became iconic as the opening image for BBC news broadcasts, a tradition that continues today.",
                es: "Big Ben apareció por primera vez en televisión en 1932 durante las primeras transmisiones experimentales de la BBC. Se volvió icónico como imagen de apertura para las transmisiones de noticias de la BBC, una tradición que continúa hoy.",
                de: "Big Ben erschien erstmals 1932 im Fernsehen während früher experimenteller BBC-Sendungen. Er wurde ikonisch als Eröffnungsbild für BBC-Nachrichtensendungen, eine Tradition, die bis heute anhält.",
                nl: "Big Ben verscheen voor het eerst op televisie in 1932 tijdens vroege experimentele BBC-uitzendingen. Het werd iconisch als openingsbeeld voor BBC-nieuwsuitzendingen, een traditie die vandaag de dag voortduurt."
            }
        },
        {
            question: {
                en: "What New Year's tradition involves Big Ben?",
                es: "¿Qué tradición de Año Nuevo involucra a Big Ben?",
                de: "Welche Neujahrstraktion betrifft Big Ben?",
                nl: "Welke nieuwjaarstraditie betreft Big Ben?"
            },
            options: {
                en: ["Special colored lights", "12 chimes broadcast nationally at midnight", "Fireworks from the tower", "Open public access"],
                es: ["Luces de colores especiales", "12 campanadas transmitidas nacionalmente a medianoche", "Fuegos artificiales desde la torre", "Acceso público abierto"],
                de: ["Spezielle farbige Lichter", "12 Glockenschläge um Mitternacht landesweit übertragen", "Feuerwerk vom Turm", "Öffentlicher Zugang geöffnet"],
                nl: ["Speciale gekleurde lichten", "12 klokslagen nationaal uitgezonden om middernacht", "Vuurwerk vanaf de toren", "Open publieke toegang"]
            },
            correct: 1,
            explanation: {
                en: "On New Year's Eve, Big Ben's 12 chimes at midnight are broadcast live across the UK and internationally. Millions gather to watch the associated fireworks display along the Thames while listening to the iconic chimes welcoming the new year.",
                es: "En Nochevieja, las 12 campanadas de Big Ben a medianoche se transmiten en vivo en todo el Reino Unido e internacionalmente. Millones se reúnen para ver el espectáculo de fuegos artificiales asociado a lo largo del Támesis mientras escuchan las icónicas campanadas dando la bienvenida al nuevo año.",
                de: "An Silvester werden Big Bens 12 Glockenschläge um Mitternacht live im gesamten Vereinigten Königreich und international übertragen. Millionen versammeln sich, um die zugehörige Feuerwerksshow entlang der Themse zu sehen, während sie den ikonischen Glockenschlägen lauschen, die das neue Jahr willkommen heißen.",
                nl: "Op oudejaarsavond worden Big Bens 12 klokslagen om middernacht live uitgezonden in heel het Verenigd Koninkrijk en internationaal. Miljoenen verzamelen zich om de bijbehorende vuurwerkshow langs de Theems te bekijken terwijl ze luisteren naar de iconische klokslagen die het nieuwe jaar verwelkomen."
            }
        },
        {
            question: {
                en: "How has Big Ben been featured in popular films?",
                es: "¿Cómo ha aparecido Big Ben en películas populares?",
                de: "Wie wurde Big Ben in populären Filmen gezeigt?",
                nl: "Hoe is Big Ben gebruikt in populaire films?"
            },
            options: {
                en: ["Rarely appears in films", "Iconic London landmark in numerous films including V for Vendetta and Mary Poppins", "Only in documentaries", "Banned from film appearances"],
                es: ["Aparece raramente en películas", "Icónico punto de Londres en numerosas películas como V de Vendetta y Mary Poppins", "Solo en documentales", "Prohibido en apariciones cinematográficas"],
                de: ["Erscheint selten in Filmen", "Ikonisches Londoner Wahrzeichen in zahlreichen Filmen wie V wie Vendetta und Mary Poppins", "Nur in Dokumentationen", "Verboten in Filmauftritten"],
                nl: ["Verschijnt zelden in films", "Iconisch Londens landmark in talrijke films waaronder V for Vendetta en Mary Poppins", "Alleen in documentaires", "Verboden in filmoptredens"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben appears in countless films as a symbol of London and Britain. Notable appearances include 'V for Vendetta' (dramatic explosion scene), 'Mary Poppins', 'Peter Pan', and many James Bond films, making it one of cinema's most recognizable landmarks.",
                es: "Big Ben aparece en innumerables películas como símbolo de Londres y Gran Bretaña. Apariciones notables incluyen 'V de Vendetta' (escena de explosión dramática), 'Mary Poppins', 'Peter Pan' y muchas películas de James Bond, convirtiéndolo en uno de los puntos de referencia más reconocibles del cine.",
                de: "Big Ben erscheint in zahllosen Filmen als Symbol von London und Großbritannien. Bemerkenswerte Auftritte sind 'V wie Vendetta' (dramatische Explosionsszene), 'Mary Poppins', 'Peter Pan' und viele James-Bond-Filme, was ihn zu einem der bekanntesten Wahrzeichen des Kinos macht.",
                nl: "Big Ben verschijnt in talloze films als symbool van Londen en Groot-Brittannië. Opvallende verschijningen zijn 'V for Vendetta' (dramatische explosie-scène), 'Mary Poppins', 'Peter Pan' en vele James Bond-films, waardoor het een van de meest herkenbare bezienswaardigheden van de cinema is."
            }
        },
        {
            question: {
                en: "What event in 1997 honored Princess Diana?",
                es: "¿Qué evento en 1997 honró a la Princesa Diana?",
                de: "Welches Ereignis im Jahr 1997 ehrte Prinzessin Diana?",
                nl: "Welke gebeurtenis in 1997 eerde prinses Diana?"
            },
            options: {
                en: ["Big Ben was painted pink", "Chimes were silenced for her funeral", "Special memorial plaque installed", "Nothing - protocol prevented changes"],
                es: ["Big Ben fue pintado de rosa", "Las campanadas fueron silenciadas para su funeral", "Placa conmemorativa especial instalada", "Nada - el protocolo impidió cambios"],
                de: ["Big Ben wurde rosa gestrichen", "Glockenschläge wurden für ihre Beerdigung zum Schweigen gebracht", "Spezielle Gedenktafel installiert", "Nichts - Protokoll verhinderte Änderungen"],
                nl: ["Big Ben werd roze geschilderd", "Klokslagen werden tot stilte gebracht voor haar begrafenis", "Speciale gedenkplaat geïnstalleerd", "Niets - protocol voorkwam veranderingen"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben's chimes were silenced on September 6, 1997, during Princess Diana's funeral as a mark of respect. This rare honor demonstrated the profound national mourning following her tragic death.",
                es: "Las campanadas de Big Ben fueron silenciadas el 6 de septiembre de 1997 durante el funeral de la Princesa Diana como muestra de respeto. Este raro honor demostró el profundo duelo nacional tras su trágica muerte.",
                de: "Big Bens Glockenschläge wurden am 6. September 1997 während Prinzessin Dianas Beerdigung als Zeichen des Respekts zum Schweigen gebracht. Diese seltene Ehre demonstrierte die tiefe nationale Trauer nach ihrem tragischen Tod.",
                nl: "Big Bens klokslagen werden op 6 september 1997 tot stilte gebracht tijdens prinses Diana's begrafenis als blijk van respect. Deze zeldzame eer toonde de diepe nationale rouw na haar tragische dood."
            }
        },
        {
            question: {
                en: "When did Big Ben chime for Winston Churchill's funeral?",
                es: "¿Cuándo sonó Big Ben para el funeral de Winston Churchill?",
                de: "Wann läutete Big Ben für Winston Churchills Beerdigung?",
                nl: "Wanneer luidde Big Ben voor Winston Churchills begrafenis?"
            },
            options: {
                en: ["1945", "1955", "1965", "1975"],
                es: ["1945", "1955", "1965", "1975"],
                de: ["1945", "1955", "1965", "1975"],
                nl: ["1945", "1955", "1965", "1975"]
            },
            correct: 2,
            explanation: {
                en: "Big Ben tolled every minute during Winston Churchill's state funeral on January 30, 1965. The solemn bells honored Britain's wartime Prime Minister, with the clock hands stopped at 9:45 am during the ceremony.",
                es: "Big Ben dobló cada minuto durante el funeral de estado de Winston Churchill el 30 de enero de 1965. Las campanas solemnes honraron al Primer Ministro británico en tiempos de guerra, con las manecillas del reloj detenidas a las 9:45 am durante la ceremonia.",
                de: "Big Ben läutete jede Minute während Winston Churchills Staatsbeerdigung am 30. Januar 1965. Die feierlichen Glocken ehrten Großbritanniens Kriegspremierminister, wobei die Uhrzeiger während der Zeremonie um 9:45 Uhr gestoppt wurden.",
                nl: "Big Ben luidde elke minuut tijdens Winston Churchills staatsbegrafenis op 30 januari 1965. De plechtige klokken eerden Groot-Brittannië's oorlogspremier, waarbij de wijzers van de klok om 9:45 uur tijdens de ceremonie stilstonden."
            }
        },
        {
            question: {
                en: "What commemorative event occurred on VE Day 1945?",
                es: "¿Qué evento conmemorativo ocurrió el Día de la Victoria en Europa 1945?",
                de: "Welches Gedenkerereignis fand am VE-Day 1945 statt?",
                nl: "Welke herdenkingsgebeurtenis vond plaats op VE-dag 1945?"
            },
            options: {
                en: ["Big Ben was destroyed", "Chimes rang out after wartime silence", "Tower was renamed", "Nothing - still at war with Japan"],
                es: ["Big Ben fue destruido", "Las campanadas sonaron después del silencio de guerra", "La torre fue renombrada", "Nada - aún en guerra con Japón"],
                de: ["Big Ben wurde zerstört", "Glockenschläge ertönten nach Kriegsstille", "Turm wurde umbenannt", "Nichts - noch im Krieg mit Japan"],
                nl: ["Big Ben werd vernietigd", "Klokslagen klonken na oorlogsstilte", "Toren werd hernoemd", "Niets - nog in oorlog met Japan"]
            },
            correct: 1,
            explanation: {
                en: "On VE Day (May 8, 1945), Big Ben's chimes rang out across London after years of wartime silence, celebrating victory in Europe. The joyous bells symbolized the end of Nazi tyranny and Britain's survival through the darkest days of WWII.",
                es: "El Día de la Victoria en Europa (8 de mayo de 1945), las campanadas de Big Ben resonaron en Londres después de años de silencio de guerra, celebrando la victoria en Europa. Las campanas alegres simbolizaron el fin de la tiranía nazi y la supervivencia de Gran Bretaña a través de los días más oscuros de la Segunda Guerra Mundial.",
                de: "Am VE-Day (8. Mai 1945) ertönten Big Bens Glockenschläge über London nach Jahren kriegsbedingter Stille und feierten den Sieg in Europa. Die freudigen Glocken symbolisierten das Ende der Nazi-Tyrannei und Großbritanniens Überleben durch die dunkelsten Tage des Zweiten Weltkriegs.",
                nl: "Op VE-dag (8 mei 1945) klonken Big Bens klokslagen over Londen na jaren oorlogsstilte, ter viering van de overwinning in Europa. De vreugdevolle klokken symboliseerden het einde van de nazi-tirannie en Groot-Brittannië's overleving door de donkerste dagen van WOII."
            }
        },
        {
            question: {
                en: "How has Big Ben appeared on British currency?",
                es: "¿Cómo ha aparecido Big Ben en la moneda británica?",
                de: "Wie erschien Big Ben auf britischer Währung?",
                nl: "Hoe is Big Ben verschenen op Britse valuta?"
            },
            options: {
                en: ["Never appeared", "Featured on stamps and commemorative coins", "Only on tourist postcards", "Replaced the Queen's image"],
                es: ["Nunca apareció", "Presentado en sellos y monedas conmemorativas", "Solo en postales turísticas", "Reemplazó la imagen de la Reina"],
                de: ["Nie erschienen", "Auf Briefmarken und Gedenkmünzen abgebildet", "Nur auf Touristenpostkarten", "Ersetzte das Bild der Königin"],
                nl: ["Nooit verschenen", "Afgebeeld op postzegels en herdenkingsmunten", "Alleen op toeristische ansichtkaarten", "Verving het beeld van de koningin"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben has appeared on numerous British stamps and commemorative coins as a symbol of the UK. It's one of the most reproduced British landmarks on currency, stamps, and official government materials, representing British heritage worldwide.",
                es: "Big Ben ha aparecido en numerosos sellos británicos y monedas conmemorativas como símbolo del Reino Unido. Es uno de los puntos de referencia británicos más reproducidos en moneda, sellos y materiales gubernamentales oficiales, representando el patrimonio británico en todo el mundo.",
                de: "Big Ben erschien auf zahlreichen britischen Briefmarken und Gedenkmünzen als Symbol des Vereinigten Königreichs. Es ist eines der am häufigsten reproduzierten britischen Wahrzeichen auf Währung, Briefmarken und offiziellen Regierungsmaterialien und repräsentiert britisches Erbe weltweit.",
                nl: "Big Ben is verschenen op talrijke Britse postzegels en herdenkingsmunten als symbool van het VK. Het is een van de meest gereproduceerde Britse bezienswaardigheden op valuta, postzegels en officiële overheidsmaterialen, wat Brits erfgoed wereldwijd vertegenwoordigt."
            }
        },
        {
            question: {
                en: "What Olympic event in 2012 involved Big Ben?",
                es: "¿Qué evento olímpico en 2012 involucró a Big Ben?",
                de: "Welches olympische Ereignis im Jahr 2012 betraf Big Ben?",
                nl: "Welk Olympisch evenement in 2012 betrof Big Ben?"
            },
            options: {
                en: ["Nothing - not part of Olympics", "Chimed to open the London Olympics", "Displayed Olympic rings", "Marathon finish line location"],
                es: ["Nada - no fue parte de las Olimpiadas", "Sonó para abrir las Olimpiadas de Londres", "Mostró los anillos olímpicos", "Ubicación de la línea de meta del maratón"],
                de: ["Nichts - nicht Teil der Olympischen Spiele", "Läutete zur Eröffnung der Olympischen Spiele in London", "Zeigte olympische Ringe", "Marathonziel-Standort"],
                nl: ["Niets - geen deel van Olympische Spelen", "Luidde om de Olympische Spelen van Londen te openen", "Toonde Olympische ringen", "Locatie van marathonfinishlijn"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben played a special role in the 2012 London Olympics opening ceremony, chiming at a precise moment during the spectacular show. The iconic tower was featured prominently in Olympic broadcasts, representing London and British culture to a global audience.",
                es: "Big Ben jugó un papel especial en la ceremonia de apertura de las Olimpiadas de Londres 2012, sonando en un momento preciso durante el espectáculo espectacular. La icónica torre se destacó prominentemente en las transmisiones olímpicas, representando a Londres y la cultura británica ante una audiencia global.",
                de: "Big Ben spielte eine besondere Rolle bei der Eröffnungszeremonie der Olympischen Spiele 2012 in London und läutete zu einem präzisen Zeitpunkt während der spektakulären Show. Der ikonische Turm wurde prominent in olympischen Übertragungen gezeigt und repräsentierte London und die britische Kultur vor einem globalen Publikum.",
                nl: "Big Ben speelde een speciale rol in de openingsceremonie van de Olympische Spelen van Londen 2012, luidend op een precies moment tijdens de spectaculaire show. De iconische toren werd prominent getoond in Olympische uitzendingen, wat Londen en de Britse cultuur vertegenwoordigde voor een wereldwijd publiek."
            }
        },
        {
            question: {
                en: "What milestone anniversary was celebrated in 2009?",
                es: "¿Qué aniversario importante se celebró en 2009?",
                de: "Welches Meilenstein-Jubiläum wurde 2009 gefeiert?",
                nl: "Welke mijlpaalverjaardag werd gevierd in 2009?"
            },
            options: {
                en: ["100th anniversary", "125th anniversary", "150th anniversary of first chime", "200th anniversary"],
                es: ["100º aniversario", "125º aniversario", "150º aniversario del primer toque", "200º aniversario"],
                de: ["100. Jubiläum", "125. Jubiläum", "150. Jubiläum des ersten Schlags", "200. Jubiläum"],
                nl: ["100e verjaardag", "125e verjaardag", "150e verjaardag van eerste klokslag", "200e verjaardag"]
            },
            correct: 2,
            explanation: {
                en: "In 2009, Big Ben celebrated 150 years since its first chime on May 31, 1859. Special events and ceremonies marked this sesquicentennial, honoring one of the world's most famous clocks and its continuous service to London.",
                es: "En 2009, Big Ben celebró 150 años desde su primer toque el 31 de mayo de 1859. Eventos especiales y ceremonias marcaron este sesquicentenario, honrando uno de los relojes más famosos del mundo y su servicio continuo a Londres.",
                de: "2009 feierte Big Ben 150 Jahre seit seinem ersten Glockenschlag am 31. Mai 1859. Besondere Veranstaltungen und Zeremonien markierten dieses Sesquicentennial und ehrten eine der berühmtesten Uhren der Welt und ihren kontinuierlichen Dienst an London.",
                nl: "In 2009 vierde Big Ben 150 jaar sinds zijn eerste klokslag op 31 mei 1859. Speciale evenementen en ceremonies markeerden dit sesquicentennial, ter ere van een van 's werelds beroemdste klokken en zijn voortdurende dienst aan Londen."
            }
        },
        {
            question: {
                en: "How has Big Ben symbolized British resilience?",
                es: "¿Cómo ha simbolizado Big Ben la resistencia británica?",
                de: "Wie hat Big Ben britische Widerstandsfähigkeit symbolisiert?",
                nl: "Hoe heeft Big Ben Britse veerkracht gesymboliseerd?"
            },
            options: {
                en: ["It hasn't - just a clock", "Survived Blitz bombings, continued chiming through wars", "Moved during wartime", "Rebuilt after each war"],
                es: ["No lo ha hecho - solo un reloj", "Sobrevivió bombardeos del Blitz, continuó sonando durante guerras", "Movido durante tiempos de guerra", "Reconstruido después de cada guerra"],
                de: ["Hat es nicht - nur eine Uhr", "Überlebte Blitz-Bombardierungen, läutete weiter durch Kriege", "Während des Krieges verlegt", "Nach jedem Krieg wiederaufgebaut"],
                nl: ["Heeft het niet - slechts een klok", "Overleefde Blitz-bombardementen, bleef luiden tijdens oorlogen", "Verplaatst tijdens oorlogstijd", "Herbouwd na elke oorlog"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben survived the WWII Blitz when nearby Parliament was bombed. Its continued chiming through wars, crises, and national challenges has made it a powerful symbol of British endurance, stability, and the nation's ability to persevere through adversity.",
                es: "Big Ben sobrevivió al Blitz de la Segunda Guerra Mundial cuando el Parlamento cercano fue bombardeado. Su continuo sonar a través de guerras, crisis y desafíos nacionales lo ha convertido en un poderoso símbolo de resistencia británica, estabilidad y la capacidad de la nación para perseverar a través de la adversidad.",
                de: "Big Ben überlebte den Blitz des Zweiten Weltkriegs, als das nahe gelegene Parlament bombardiert wurde. Sein kontinuierliches Läuten durch Kriege, Krisen und nationale Herausforderungen hat ihn zu einem mächtigen Symbol britischer Ausdauer, Stabilität und der Fähigkeit der Nation gemacht, Widrigkeiten zu überstehen.",
                nl: "Big Ben overleefde de WOII Blitz toen het nabijgelegen parlement werd gebombardeerd. Het voortdurende luiden door oorlogen, crises en nationale uitdagingen heeft het een krachtig symbool gemaakt van Britse volharding, stabiliteit en het vermogen van de natie om door tegenspoed heen te komen."
            }
        },
        {
            question: {
                en: "What architectural significance does the Elizabeth Tower have?",
                es: "¿Qué importancia arquitectónica tiene la Elizabeth Tower?",
                de: "Welche architektonische Bedeutung hat der Elizabeth Tower?",
                nl: "Welke architectonische betekenis heeft de Elizabeth Tower?"
            },
            options: {
                en: ["First clock tower ever built", "Finest example of Victorian Gothic Revival architecture", "Tallest structure in London", "First use of cast iron"],
                es: ["Primera torre de reloj jamás construida", "Mejor ejemplo de arquitectura gótica victoriana", "Estructura más alta de Londres", "Primer uso de hierro fundido"],
                de: ["Erster jemals gebauter Uhrenturm", "Bestes Beispiel viktorianischer neugotischer Architektur", "Höchstes Gebäude Londons", "Erste Verwendung von Gusseisen"],
                nl: ["Eerste ooit gebouwde klokkentoren", "Beste voorbeeld van Victoriaanse neogotische architectuur", "Hoogste structuur in Londen", "Eerste gebruik van gietijzer"]
            },
            correct: 1,
            explanation: {
                en: "The Elizabeth Tower is considered the finest example of Victorian Gothic Revival architecture. Designed by Augustus Pugin, it perfectly embodies the 19th-century movement to revive medieval Gothic style, combining ornate decoration with functional engineering.",
                es: "La Elizabeth Tower es considerada el mejor ejemplo de arquitectura gótica victoriana. Diseñada por Augustus Pugin, encarna perfectamente el movimiento del siglo XIX para revivir el estilo gótico medieval, combinando decoración ornamentada con ingeniería funcional.",
                de: "Der Elizabeth Tower gilt als das beste Beispiel viktorianischer neugotischer Architektur. Entworfen von Augustus Pugin, verkörpert er perfekt die Bewegung des 19. Jahrhunderts zur Wiederbelebung des mittelalterlichen gotischen Stils und kombiniert kunstvolle Dekoration mit funktionaler Ingenieurskunst.",
                nl: "De Elizabeth Tower wordt beschouwd als het beste voorbeeld van Victoriaanse neogotische architectuur. Ontworpen door Augustus Pugin, belichaamt het perfect de 19e-eeuwse beweging om de middeleeuwse gotische stijl te herleven, waarbij sierlijke decoratie wordt gecombineerd met functionele techniek."
            }
        },
        {
            question: {
                en: "How does Big Ben appear in British popular culture?",
                es: "¿Cómo aparece Big Ben en la cultura popular británica?",
                de: "Wie erscheint Big Ben in der britischen Populärkultur?",
                nl: "Hoe verschijnt Big Ben in de Britse populaire cultuur?"
            },
            options: {
                en: ["Rarely mentioned", "Universal symbol in music, literature, TV representing London/Britain", "Only in government materials", "Forbidden in commercial use"],
                es: ["Raramente mencionado", "Símbolo universal en música, literatura, TV representando Londres/Gran Bretaña", "Solo en materiales gubernamentales", "Prohibido en uso comercial"],
                de: ["Selten erwähnt", "Universelles Symbol in Musik, Literatur, TV, das London/Großbritannien repräsentiert", "Nur in Regierungsmaterialien", "In kommerzieller Nutzung verboten"],
                nl: ["Zelden genoemd", "Universeel symbool in muziek, literatuur, TV dat Londen/Groot-Brittannië vertegenwoordigt", "Alleen in overheidsmaterialen", "Verboden in commercieel gebruik"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben is ubiquitous in British popular culture, appearing in songs, novels, TV shows, and advertisements as the quintessential symbol of London and Britain. From The Beatles to Doctor Who, it represents British identity and heritage across all media.",
                es: "Big Ben es omnipresente en la cultura popular británica, apareciendo en canciones, novelas, programas de TV y anuncios como el símbolo por excelencia de Londres y Gran Bretaña. Desde The Beatles hasta Doctor Who, representa la identidad y el patrimonio británicos en todos los medios.",
                de: "Big Ben ist allgegenwärtig in der britischen Populärkultur und erscheint in Liedern, Romanen, TV-Shows und Werbung als das quintessenzielle Symbol von London und Großbritannien. Von den Beatles bis Doctor Who repräsentiert es britische Identität und Erbe in allen Medien.",
                nl: "Big Ben is alomtegenwoordig in de Britse populaire cultuur, verschijnend in liedjes, romans, tv-shows en advertenties als het ultieme symbool van Londen en Groot-Brittannië. Van The Beatles tot Doctor Who, het vertegenwoordigt Britse identiteit en erfgoed in alle media."
            }
        },
        {
            question: {
                en: "What role does Big Ben play in British national mourning?",
                es: "¿Qué papel juega Big Ben en el duelo nacional británico?",
                de: "Welche Rolle spielt Big Ben bei britischer nationaler Trauer?",
                nl: "Welke rol speelt Big Ben bij Britse nationale rouw?"
            },
            options: {
                en: ["No special role", "Chimes are silenced or clock stopped for state funerals and national tragedies", "Painted black", "Bells ring continuously"],
                es: ["Sin papel especial", "Las campanadas se silencian o el reloj se detiene para funerales de estado y tragedias nacionales", "Pintado de negro", "Las campanas suenan continuamente"],
                de: ["Keine besondere Rolle", "Glockenschläge werden zum Schweigen gebracht oder Uhr gestoppt für Staatsbegräbnisse und nationale Tragödien", "Schwarz gestrichen", "Glocken läuten kontinuierlich"],
                nl: ["Geen speciale rol", "Klokslagen worden tot stilte gebracht of klok gestopt voor staatsbegrafenissen en nationale tragedies", "Zwart geschilderd", "Klokken luiden continu"]
            },
            correct: 1,
            explanation: {
                en: "During state funerals and national mourning, Big Ben's chimes are often silenced or the clock hands stopped as a mark of profound respect. This rare honor has been reserved for monarchs, prime ministers like Churchill, and tragic events like Princess Diana's funeral.",
                es: "Durante funerales de estado y duelo nacional, las campanadas de Big Ben a menudo se silencian o las manecillas del reloj se detienen como muestra de profundo respeto. Este raro honor se ha reservado para monarcas, primeros ministros como Churchill y eventos trágicos como el funeral de la Princesa Diana.",
                de: "Während Staatsbegräbnissen und nationaler Trauer werden Big Bens Glockenschläge oft zum Schweigen gebracht oder die Uhrzeiger gestoppt als Zeichen tiefen Respekts. Diese seltene Ehre wurde für Monarchen, Premierminister wie Churchill und tragische Ereignisse wie Prinzessin Dianas Beerdigung reserviert.",
                nl: "Tijdens staatsbegrafenissen en nationale rouw worden Big Bens klokslagen vaak tot stilte gebracht of de wijzers van de klok gestopt als teken van diep respect. Deze zeldzame eer is gereserveerd voor vorsten, premiers zoals Churchill en tragische gebeurtenissen zoals prinses Diana's begrafenis."
            }
        },
        {
            question: {
                en: "What diplomatic significance does Big Ben have?",
                es: "¿Qué importancia diplomática tiene Big Ben?",
                de: "Welche diplomatische Bedeutung hat Big Ben?",
                nl: "Welke diplomatieke betekenis heeft Big Ben?"
            },
            options: {
                en: ["None - purely domestic", "Symbol of British democracy and parliamentary tradition globally", "Used for secret meetings", "Only recognized in UK"],
                es: ["Ninguna - puramente doméstico", "Símbolo de democracia británica y tradición parlamentaria globalmente", "Usado para reuniones secretas", "Solo reconocido en el Reino Unido"],
                de: ["Keine - rein inländisch", "Symbol britischer Demokratie und parlamentarischer Tradition weltweit", "Für geheime Treffen genutzt", "Nur im Vereinigten Königreich anerkannt"],
                nl: ["Geen - puur binnenlands", "Symbool van Britse democratie en parlementaire traditie wereldwijd", "Gebruikt voor geheime ontmoetingen", "Alleen erkend in het VK"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben symbolizes British parliamentary democracy and the rule of law worldwide. Foreign dignitaries visiting the UK often tour Parliament and Big Ben as a symbol of democratic governance. It represents the stability and continuity of British democratic institutions.",
                es: "Big Ben simboliza la democracia parlamentaria británica y el estado de derecho en todo el mundo. Los dignatarios extranjeros que visitan el Reino Unido a menudo visitan el Parlamento y Big Ben como símbolo de gobernanza democrática. Representa la estabilidad y continuidad de las instituciones democráticas británicas.",
                de: "Big Ben symbolisiert britische parlamentarische Demokratie und Rechtsstaatlichkeit weltweit. Ausländische Würdenträger, die das Vereinigte Königreich besuchen, besichtigen oft das Parlament und Big Ben als Symbol demokratischer Regierungsführung. Es repräsentiert die Stabilität und Kontinuität britischer demokratischer Institutionen.",
                nl: "Big Ben symboliseert Britse parlementaire democratie en de rechtsstaat wereldwijd. Buitenlandse hoogwaardigheidsbekleders die het VK bezoeken, bezoeken vaak het parlement en Big Ben als symbool van democratisch bestuur. Het vertegenwoordigt de stabiliteit en continuïteit van Britse democratische instellingen."
            }
        },
        {
            question: {
                en: "How has Big Ben influenced clock tower design worldwide?",
                es: "¿Cómo ha influenciado Big Ben el diseño de torres de reloj en todo el mundo?",
                de: "Wie hat Big Ben das Design von Uhrentürmen weltweit beeinflusst?",
                nl: "Hoe heeft Big Ben het ontwerp van klokketorens wereldwijd beïnvloed?"
            },
            options: {
                en: ["No influence - unique design", "Inspired countless replicas and clock towers globally", "Only influenced British buildings", "Design was copied from others"],
                es: ["Sin influencia - diseño único", "Inspiró innumerables réplicas y torres de reloj globalmente", "Solo influyó en edificios británicos", "El diseño fue copiado de otros"],
                de: ["Kein Einfluss - einzigartiges Design", "Inspirierte unzählige Nachbildungen und Uhrentürme weltweit", "Beeinflusste nur britische Gebäude", "Design wurde von anderen kopiert"],
                nl: ["Geen invloed - uniek ontwerp", "Inspireerde talloze replica's en klokketorens wereldwijd", "Beïnvloedde alleen Britse gebouwen", "Ontwerp werd gekopieerd van anderen"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben has inspired clock tower designs worldwide, from San Francisco's Ferry Building to Mumbai's Rajabai Tower. Its iconic Gothic Revival style and precision timekeeping set a global standard, making it one of history's most influential architectural landmarks.",
                es: "Big Ben ha inspirado diseños de torres de reloj en todo el mundo, desde el Ferry Building de San Francisco hasta la Rajabai Tower de Mumbai. Su icónico estilo gótico victoriano y cronometraje de precisión establecieron un estándar global, convirtiéndolo en uno de los puntos de referencia arquitectónicos más influyentes de la historia.",
                de: "Big Ben hat Uhrenturm-Designs weltweit inspiriert, vom Ferry Building in San Francisco bis zum Rajabai Tower in Mumbai. Sein ikonischer neugotischer Stil und präzise Zeitmessung setzten einen globalen Standard und machten ihn zu einem der einflussreichsten architektonischen Wahrzeichen der Geschichte.",
                nl: "Big Ben heeft klokketorenontwerpen wereldwijd geïnspireerd, van San Francisco's Ferry Building tot Mumbai's Rajabai Tower. Zijn iconische neogotische stijl en precieze tijdwaarneming stelden een mondiale standaard, waardoor het een van de meest invloedrijke architectonische bezienswaardigheden uit de geschiedenis werd."
            }
        },
        {
            question: {
                en: "What educational role does Big Ben serve?",
                es: "¿Qué papel educativo cumple Big Ben?",
                de: "Welche bildende Rolle erfüllt Big Ben?",
                nl: "Welke educatieve rol vervult Big Ben?"
            },
            options: {
                en: ["No educational role", "Teaching Victorian engineering, architecture, and British history", "Only clock maintenance training", "Prohibited for educational purposes"],
                es: ["Sin papel educativo", "Enseñanza de ingeniería victoriana, arquitectura e historia británica", "Solo entrenamiento en mantenimiento de relojes", "Prohibido para propósitos educativos"],
                de: ["Keine bildende Rolle", "Lehre viktorianischer Ingenieurskunst, Architektur und britischer Geschichte", "Nur Uhren-Wartungstraining", "Für Bildungszwecke verboten"],
                nl: ["Geen educatieve rol", "Onderwijs in Victoriaanse techniek, architectuur en Britse geschiedenis", "Alleen opleiding in klokunderhoud", "Verboden voor educatieve doeleinden"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben serves as a living classroom for Victorian engineering, Gothic architecture, and British history. School groups, engineering students, and historians study its mechanisms and design. It demonstrates precision engineering predating modern technology and represents industrial revolution achievements.",
                es: "Big Ben sirve como un aula viviente para la ingeniería victoriana, la arquitectura gótica y la historia británica. Grupos escolares, estudiantes de ingeniería e historiadores estudian sus mecanismos y diseño. Demuestra ingeniería de precisión anterior a la tecnología moderna y representa los logros de la revolución industrial.",
                de: "Big Ben dient als lebendiges Klassenzimmer für viktorianische Ingenieurskunst, gotische Architektur und britische Geschichte. Schulgruppen, Ingenieurstudenten und Historiker studieren seine Mechanismen und sein Design. Es demonstriert Präzisionstechnik vor moderner Technologie und repräsentiert Errungenschaften der industriellen Revolution.",
                nl: "Big Ben dient als een levend klaslokaal voor Victoriaanse techniek, gotische architectuur en Britse geschiedenis. Schoolgroepen, techniekstudenten en historici bestuderen zijn mechanismen en ontwerp. Het demonstreert precisietechniek van vóór moderne technologie en vertegenwoordigt prestaties van de industriële revolutie."
            }
        },
        {
            question: {
                en: "What tourism impact does Big Ben have on London?",
                es: "¿Qué impacto turístico tiene Big Ben en Londres?",
                de: "Welchen touristischen Einfluss hat Big Ben auf London?",
                nl: "Welke toeristische impact heeft Big Ben op Londen?"
            },
            options: {
                en: ["Minimal - off tourist routes", "One of most photographed landmarks, major tourist draw", "Only locals visit", "Tourism prohibited"],
                es: ["Mínimo - fuera de rutas turísticas", "Uno de los puntos de referencia más fotografiados, gran atracción turística", "Solo visitan locales", "Turismo prohibido"],
                de: ["Minimal - abseits der Touristenrouten", "Eines der meistfotografierten Wahrzeichen, großer Touristenmagnet", "Nur Einheimische besuchen", "Tourismus verboten"],
                nl: ["Minimaal - buiten toeristische routes", "Een van de meest gefotografeerde bezienswaardigheden, grote toeristische trekpleister", "Alleen lokale bewoners bezoeken", "Toerisme verboden"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben is one of London's most photographed landmarks and a major tourist attraction. Millions visit annually to photograph the tower, generating significant tourism revenue. It's consistently ranked among the world's most iconic structures, drawing visitors from every country.",
                es: "Big Ben es uno de los puntos de referencia más fotografiados de Londres y una atracción turística importante. Millones visitan anualmente para fotografiar la torre, generando ingresos turísticos significativos. Se clasifica consistentemente entre las estructuras más icónicas del mundo, atrayendo visitantes de todos los países.",
                de: "Big Ben ist eines der meistfotografierten Wahrzeichen Londons und eine wichtige Touristenattraktion. Millionen besuchen jährlich, um den Turm zu fotografieren, was erhebliche Tourismuseinnahmen generiert. Es wird konsequent zu den ikonischsten Strukturen der Welt gezählt und zieht Besucher aus jedem Land an.",
                nl: "Big Ben is een van Londen's meest gefotografeerde bezienswaardigheden en een belangrijke toeristische attractie. Miljoenen bezoeken jaarlijks om de toren te fotograferen, wat aanzienlijke toeristische inkomsten genereert. Het wordt consequent gerangschikt onder 's werelds meest iconische structuren, waardoor bezoekers uit elk land worden aangetrokken."
            }
        },
        {
            question: {
                en: "What happened during the Suffragette movement in 1913?",
                es: "¿Qué sucedió durante el movimiento sufragista en 1913?",
                de: "Was geschah während der Suffragetten-Bewegung im Jahr 1913?",
                nl: "Wat gebeurde er tijdens de Suffragette-beweging in 1913?"
            },
            options: {
                en: ["Nothing involving Big Ben", "Suffragettes chained themselves to the tower railings", "Tower was closed permanently", "Big Ben chimed for women's rights"],
                es: ["Nada que involucrara a Big Ben", "Las sufragistas se encadenaron a las barandillas de la torre", "La torre fue cerrada permanentemente", "Big Ben sonó por los derechos de las mujeres"],
                de: ["Nichts, was Big Ben betraf", "Suffragetten ketteten sich an die Turmgeländer", "Turm wurde dauerhaft geschlossen", "Big Ben läutete für Frauenrechte"],
                nl: ["Niets met betrekking tot Big Ben", "Suffragettes ketenden zich vast aan de torenbalustrades", "Toren werd permanent gesloten", "Big Ben luidde voor vrouwenrechten"]
            },
            correct: 1,
            explanation: {
                en: "In 1913, suffragettes protesting for women's voting rights chained themselves to the railings outside the tower, making Big Ben a site of political activism. This dramatic protest highlighted the struggle for women's suffrage and Big Ben's symbolic importance.",
                es: "En 1913, las sufragistas que protestaban por los derechos de voto de las mujeres se encadenaron a las barandillas fuera de la torre, convirtiendo a Big Ben en un sitio de activismo político. Esta protesta dramática destacó la lucha por el sufragio femenino y la importancia simbólica de Big Ben.",
                de: "1913 ketteten sich Suffragetten, die für das Frauenwahlrecht protestierten, an die Geländer außerhalb des Turms und machten Big Ben zu einem Ort politischen Aktivismus. Dieser dramatische Protest unterstrich den Kampf für das Frauenwahlrecht und Big Bens symbolische Bedeutung.",
                nl: "In 1913 ketenden suffragettes die protesteerden voor vrouwenkiesrecht zich vast aan de balustrades buiten de toren, waardoor Big Ben een plek van politiek activisme werd. Dit dramatische protest benadrukte de strijd voor vrouwenkiesrecht en Big Bens symbolische betekenis."
            }
        },
        {
            question: {
                en: "How did Big Ben mark Queen Elizabeth II's Diamond Jubilee in 2012?",
                es: "¿Cómo marcó Big Ben el Jubileo de Diamante de la Reina Isabel II en 2012?",
                de: "Wie markierte Big Ben das Diamantene Thronjubiläum von Königin Elizabeth II. im Jahr 2012?",
                nl: "Hoe markeerde Big Ben het Diamanten Jubileum van koningin Elizabeth II in 2012?"
            },
            options: {
                en: ["No special commemoration", "Tower renamed to Elizabeth Tower in her honor", "Clock painted gold", "Special 60 chimes"],
                es: ["Sin conmemoración especial", "Torre renombrada Elizabeth Tower en su honor", "Reloj pintado de oro", "60 campanadas especiales"],
                de: ["Keine besondere Gedenkfeier", "Turm zu Elizabeth Tower zu ihren Ehren umbenannt", "Uhr gold gestrichen", "Spezielle 60 Glockenschläge"],
                nl: ["Geen speciale herdenking", "Toren hernoemd tot Elizabeth Tower ter ere van haar", "Klok goud geschilderd", "Speciale 60 klokslagen"]
            },
            correct: 1,
            explanation: {
                en: "In June 2012, to honor Queen Elizabeth II's Diamond Jubilee (60 years of reign), the clock tower was officially renamed Elizabeth Tower. This rare honor recognized her long service, as the tower had simply been called 'Clock Tower' since 1859.",
                es: "En junio de 2012, para honrar el Jubileo de Diamante de la Reina Isabel II (60 años de reinado), la torre del reloj fue oficialmente renombrada Elizabeth Tower. Este raro honor reconoció su largo servicio, ya que la torre simplemente se había llamado 'Clock Tower' desde 1859.",
                de: "Im Juni 2012 wurde der Uhrenturm offiziell in Elizabeth Tower umbenannt, um das Diamantene Thronjubiläum von Königin Elizabeth II. (60 Jahre Herrschaft) zu ehren. Diese seltene Ehre anerkannte ihren langen Dienst, da der Turm seit 1859 einfach 'Clock Tower' genannt wurde.",
                nl: "In juni 2012 werd de klokkentoren officieel hernoemd tot Elizabeth Tower ter ere van koningin Elizabeth II's Diamanten Jubileum (60 jaar regeren). Deze zeldzame eer erkende haar lange dienst, aangezien de toren sinds 1859 simpelweg 'Clock Tower' werd genoemd."
            }
        },
        {
            question: {
                en: "What Brexit-related event occurred at Big Ben in 2020?",
                es: "¿Qué evento relacionado con el Brexit ocurrió en Big Ben en 2020?",
                de: "Welches Brexit-bezogene Ereignis fand 2020 bei Big Ben statt?",
                nl: "Welke Brexit-gerelateerde gebeurtenis vond plaats bij Big Ben in 2020?"
            },
            options: {
                en: ["Nothing special happened", "Big Ben chimed at 11pm marking UK's EU departure", "Tower was draped with EU flags", "Clock was stopped permanently"],
                es: ["Nada especial sucedió", "Big Ben sonó a las 11pm marcando la salida del Reino Unido de la UE", "La torre fue cubierta con banderas de la UE", "El reloj se detuvo permanentemente"],
                de: ["Nichts Besonderes geschah", "Big Ben läutete um 23 Uhr zum EU-Austritt des Vereinigten Königreichs", "Turm wurde mit EU-Flaggen verhüllt", "Uhr wurde dauerhaft gestoppt"],
                nl: ["Er gebeurde niets speciaals", "Big Ben luidde om 23.00 uur ter markering van het vertrek van het VK uit de EU", "Toren werd bedekt met EU-vlaggen", "Klok werd permanent gestopt"]
            },
            correct: 1,
            explanation: {
                en: "On January 31, 2020, Big Ben chimed at 11pm GMT to mark the UK's official departure from the European Union. This politically significant moment made Big Ben the timekeeper for Brexit, symbolizing a major turning point in British history.",
                es: "El 31 de enero de 2020, Big Ben sonó a las 11pm GMT para marcar la salida oficial del Reino Unido de la Unión Europea. Este momento políticamente significativo convirtió a Big Ben en el guardián del tiempo para el Brexit, simbolizando un punto de inflexión importante en la historia británica.",
                de: "Am 31. Januar 2020 läutete Big Ben um 23 Uhr GMT, um den offiziellen Austritt des Vereinigten Königreichs aus der Europäischen Union zu markieren. Dieser politisch bedeutsame Moment machte Big Ben zum Zeitmesser für den Brexit und symbolisierte einen wichtigen Wendepunkt in der britischen Geschichte.",
                nl: "Op 31 januari 2020 luidde Big Ben om 23.00 uur GMT om het officiële vertrek van het VK uit de Europese Unie te markeren. Dit politiek belangrijke moment maakte Big Ben de tijdhouder voor Brexit, wat een belangrijk keerpunt in de Britse geschiedenis symboliseerde."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else {
        window.bigBenLevel4Questions = questions;
    }
})();
