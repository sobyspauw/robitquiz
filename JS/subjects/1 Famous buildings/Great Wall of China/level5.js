(function() {
    const level5 = {
    name: {
      en: "Cultural Impact",
      es: "Impacto Cultural",
      de: "Kultureller Einfluss",
      nl: "Culturele Impact"
},
    questions: [
        {
            question: {
                en: "What was the primary military function of the Great Wall?",
                es: "¿Cuál era la función militar principal de la Gran Muralla?",
                de: "Was war die primäre militärische Funktion der Chinesischen Mauer?",
                nl: "Wat was de primaire militaire functie van de Chinese Muur?"
            },
            options: [
                {
                    en: "Offensive staging ground for attacks",
                    es: "Base de lanzamiento ofensiva para ataques",
                    de: "Offensiver Aufmarschplatz für Angriffe",
                    nl: "Offensieve uitvalsbasis voor aanvallen"
                },
                {
                    en: "Early warning system and defensive barrier",
                    es: "Sistema de alerta temprana y barrera defensiva",
                    de: "Frühwarnsystem und Verteidigungsbarriere",
                    nl: "Vroegwaarschuwingssysteem en defensieve barrière"
                },
                {
                    en: "Navy port",
                    es: "Puerto naval",
                    de: "Marinehafen",
                    nl: "Marinehaven"
                },
                {
                    en: "Training facility only",
                    es: "Solo instalación de entrenamiento",
                    de: "Nur Trainingseinrichtung",
                    nl: "Alleen trainingsfaciliteit"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall served primarily as an early warning system through beacon towers and as a defensive barrier to slow down invading forces, allowing time for Chinese armies to mobilize.",
                es: "La Gran Muralla servía principalmente como un sistema de alerta temprana a través de torres de señales y como una barrera defensiva para ralentizar las fuerzas invasoras, permitiendo tiempo para que los ejércitos chinos se movilizaran.",
                de: "Die Chinesische Mauer diente in erster Linie als Frühwarnsystem durch Leuchtfeuertürme und als Verteidigungsbarriere, um eindringende Streitkräfte zu verlangsamen und chinesischen Armeen Zeit zur Mobilisierung zu geben.",
                nl: "De Chinese Muur diende voornamelijk als een vroegwaarschuwingssysteem via bakentorens en als een defensieve barrière om invasietroepen te vertragen, waardoor Chinese legers tijd kregen om te mobiliseren."
            }
        },
        {
            question: {
                en: "How did the beacon tower signaling system communicate the size of enemy forces?",
                es: "¿Cómo comunicaba el sistema de señalización de torres de señales el tamaño de las fuerzas enemigas?",
                de: "Wie kommunizierte das Leuchtturm-Signalsystem die Größe der feindlichen Streitkräfte?",
                nl: "Hoe communiceerde het bakentorensignaalsysteem de omvang van vijandelijke troepen?"
            },
            options: [
                {
                    en: "Through written messages",
                    es: "A través de mensajes escritos",
                    de: "Durch geschriebene Nachrichten",
                    nl: "Via geschreven berichten"
                },
                {
                    en: "By varying the number of smoke plumes or fires",
                    es: "Variando el número de columnas de humo o fuegos",
                    de: "Durch Variation der Anzahl der Rauchsäulen oder Feuer",
                    nl: "Door het aantal rookpluimen of vuren te variëren"
                },
                {
                    en: "Through drum beats",
                    es: "A través de golpes de tambor",
                    de: "Durch Trommelschläge",
                    nl: "Via trommelgeroffel"
                },
                {
                    en: "Using colored flags",
                    es: "Usando banderas de colores",
                    de: "Mit farbigen Flaggen",
                    nl: "Met gekleurde vlaggen"
                }
            ],
            correct: 1,
            explanation: {
                en: "The beacon system used different numbers of smoke columns during the day and fires at night to indicate the size of approaching enemy forces: one signal for 100 enemies, two for 500, and so on.",
                es: "El sistema de señales usaba diferentes números de columnas de humo durante el día y fuegos por la noche para indicar el tamaño de las fuerzas enemigas que se aproximaban: una señal para 100 enemigos, dos para 500, y así sucesivamente.",
                de: "Das Leuchtfeuersystem verwendete unterschiedliche Anzahlen von Rauchsäulen tagsüber und Feuern nachts, um die Größe herannahender feindlicher Streitkräfte anzuzeigen: ein Signal für 100 Feinde, zwei für 500, und so weiter.",
                nl: "Het bakensysteem gebruikte verschillende aantallen rookkolommen overdag en vuren 's nachts om de omvang van naderende vijandelijke troepen aan te geven: één signaal voor 100 vijanden, twee voor 500, enzovoort."
            }
        },
        {
            question: {
                en: "What tactical advantage did the Great Wall provide to defending forces?",
                es: "¿Qué ventaja táctica proporcionaba la Gran Muralla a las fuerzas defensoras?",
                de: "Welchen taktischen Vorteil bot die Chinesische Mauer den Verteidigern?",
                nl: "Welk tactisch voordeel bood de Chinese Muur aan verdedigende troepen?"
            },
            options: [
                {
                    en: "Higher ground and protected troop movement",
                    es: "Terreno elevado y movimiento protegido de tropas",
                    de: "Höheres Gelände und geschützte Truppenbewegung",
                    nl: "Hoger terrein en beschermde troepenbeweging"
                },
                {
                    en: "Air support capabilities",
                    es: "Capacidades de apoyo aéreo",
                    de: "Luftunterstützungsfähigkeiten",
                    nl: "Luchtondersteuningscapaciteiten"
                },
                {
                    en: "Naval superiority",
                    es: "Superioridad naval",
                    de: "Marineüberlegenheit",
                    nl: "Maritieme superioriteit"
                },
                {
                    en: "Cavalry advantages",
                    es: "Ventajas de caballería",
                    de: "Kavallerievorteile",
                    nl: "Cavalerievoordelen"
                }
            ],
            correct: 0,
            explanation: {
                en: "The wall provided defenders with the tactical advantage of higher ground for archery and observation, while allowing rapid protected movement of troops and supplies along its length.",
                es: "El muro proporcionaba a los defensores la ventaja táctica de terreno elevado para arquería y observación, mientras permitía el movimiento rápido y protegido de tropas y suministros a lo largo de su longitud.",
                de: "Die Mauer bot den Verteidigern den taktischen Vorteil höheren Geländes für Bogenschießen und Beobachtung, während sie schnelle geschützte Bewegung von Truppen und Vorräten entlang ihrer Länge ermöglichte.",
                nl: "De muur bood verdedigers het tactische voordeel van hoger terrein voor boogschieten en observatie, terwijl snelle beschermde beweging van troepen en voorraden langs de lengte mogelijk was."
            }
        },
        {
            question: {
                en: "What was the maximum response time for beacon signals to travel the entire length of the wall?",
                es: "¿Cuál era el tiempo máximo de respuesta para que las señales de las torres viajaran toda la longitud del muro?",
                de: "Was war die maximale Reaktionszeit für Leuchtfeuersignale, um die gesamte Mauerlänge zu durchlaufen?",
                nl: "Wat was de maximale reactietijd voor bakensignalen om de hele lengte van de muur af te leggen?"
            },
            options: [
                {
                    en: "Several days",
                    es: "Varios días",
                    de: "Mehrere Tage",
                    nl: "Meerdere dagen"
                },
                {
                    en: "A few hours",
                    es: "Unas pocas horas",
                    de: "Einige Stunden",
                    nl: "Een paar uur"
                },
                {
                    en: "One week",
                    es: "Una semana",
                    de: "Eine Woche",
                    nl: "Een week"
                },
                {
                    en: "One month",
                    es: "Un mes",
                    de: "Einen Monat",
                    nl: "Een maand"
                }
            ],
            correct: 1,
            explanation: {
                en: "The beacon tower system was remarkably efficient, capable of transmitting warnings across thousands of kilometers within a few hours through the chain of intervisible towers.",
                es: "El sistema de torres de señales era notablemente eficiente, capaz de transmitir advertencias a través de miles de kilómetros en unas pocas horas a través de la cadena de torres intervisibles.",
                de: "Das Leuchtturmsystem war bemerkenswert effizient und konnte Warnungen über Tausende von Kilometern innerhalb weniger Stunden durch die Kette sichtverbundener Türme übertragen.",
                nl: "Het bakentorensysteem was opmerkelijk efficiënt en kon waarschuwingen over duizenden kilometers binnen enkele uren doorgeven via de keten van onderling zichtbare torens."
            }
        },
        {
            question: {
                en: "What secondary purpose did the Great Wall serve besides military defense?",
                es: "¿Qué propósito secundario servía la Gran Muralla además de la defensa militar?",
                de: "Welchen sekundären Zweck erfüllte die Chinesische Mauer neben der militärischen Verteidigung?",
                nl: "Welk secundair doel diende de Chinese Muur naast militaire verdediging?"
            },
            options: [
                {
                    en: "Entertainment venue",
                    es: "Lugar de entretenimiento",
                    de: "Veranstaltungsort für Unterhaltung",
                    nl: "Entertainmentlocatie"
                },
                {
                    en: "Border control and regulation of trade",
                    es: "Control fronterizo y regulación del comercio",
                    de: "Grenzkontrolle und Handelsregulierung",
                    nl: "Grenscontrole en regulering van handel"
                },
                {
                    en: "Religious pilgrimages",
                    es: "Peregrinaciones religiosas",
                    de: "Religiöse Wallfahrten",
                    nl: "Religieuze bedevaarten"
                },
                {
                    en: "Sports arena",
                    es: "Arena deportiva",
                    de: "Sportarena",
                    nl: "Sportarena"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall served important economic functions as a border control system, regulating trade, collecting customs duties, and controlling the movement of people and goods along the Silk Road.",
                es: "La Gran Muralla servía importantes funciones económicas como un sistema de control fronterizo, regulando el comercio, recaudando derechos de aduana y controlando el movimiento de personas y mercancías a lo largo de la Ruta de la Seda.",
                de: "Die Chinesische Mauer erfüllte wichtige wirtschaftliche Funktionen als Grenzkontrollsystem, regulierte den Handel, erhob Zölle und kontrollierte die Bewegung von Menschen und Gütern entlang der Seidenstraße.",
                nl: "De Chinese Muur diende belangrijke economische functies als een grenscontrolesysteem, waarbij handel werd gereguleerd, douanerechten werden geïnd en de beweging van mensen en goederen langs de Zijderoute werd gecontroleerd."
            }
        },
        {
            question: {
                en: "How did the wall help control the movement of nomadic cavalry?",
                es: "¿Cómo ayudaba el muro a controlar el movimiento de la caballería nómada?",
                de: "Wie half die Mauer, die Bewegung der nomadischen Kavallerie zu kontrollieren?",
                nl: "Hoe hielp de muur bij het controleren van de beweging van nomadische cavalerie?"
            },
            options: [
                {
                    en: "By providing them with stables",
                    es: "Proporcionándoles establos",
                    de: "Indem sie ihnen Ställe bereitstellte",
                    nl: "Door hen stallen te bieden"
                },
                {
                    en: "By creating barriers horses couldn't easily cross",
                    es: "Creando barreras que los caballos no podían cruzar fácilmente",
                    de: "Durch Schaffen von Barrieren, die Pferde nicht leicht überqueren konnten",
                    nl: "Door barrières te creëren die paarden niet gemakkelijk konden oversteken"
                },
                {
                    en: "By offering them food",
                    es: "Ofreciéndoles comida",
                    de: "Indem sie ihnen Nahrung anbot",
                    nl: "Door hen voedsel aan te bieden"
                },
                {
                    en: "By training their horses",
                    es: "Entrenando sus caballos",
                    de: "Indem sie ihre Pferde trainierte",
                    nl: "Door hun paarden te trainen"
                }
            ],
            correct: 1,
            explanation: {
                en: "The wall's height and structure made it extremely difficult for cavalry to cross, negating the primary advantage of nomadic raiders who relied on swift mounted attacks and quick retreats.",
                es: "La altura y estructura del muro hacían extremadamente difícil que la caballería cruzara, negando la ventaja principal de los asaltantes nómadas que dependían de rápidos ataques montados y retiradas rápidas.",
                de: "Die Höhe und Struktur der Mauer machten es für die Kavallerie äußerst schwierig zu überqueren, wodurch der Hauptvorteil nomadischer Angreifer zunichte gemacht wurde, die auf schnelle berittene Angriffe und schnelle Rückzüge angewiesen waren.",
                nl: "De hoogte en structuur van de muur maakten het extreem moeilijk voor cavalerie om over te steken, waardoor het primaire voordeel van nomadische aanvallers die vertrouwden op snelle bereden aanvallen en snelle terugtochten teniet werd gedaan."
            }
        },
        {
            question: {
                en: "What role did garrison troops play on the Great Wall?",
                es: "¿Qué papel jugaban las tropas de guarnición en la Gran Muralla?",
                de: "Welche Rolle spielten Garnisonstruppen an der Chinesischen Mauer?",
                nl: "Welke rol speelden garnizoenstroepen op de Chinese Muur?"
            },
            options: [
                {
                    en: "Tourism guides only",
                    es: "Solo guías turísticos",
                    de: "Nur Touristenführer",
                    nl: "Alleen toeristische gidsen"
                },
                {
                    en: "Permanent defense, maintenance, and farming",
                    es: "Defensa permanente, mantenimiento y agricultura",
                    de: "Dauerhafte Verteidigung, Wartung und Landwirtschaft",
                    nl: "Permanente verdediging, onderhoud en landbouw"
                },
                {
                    en: "Building new sections only",
                    es: "Solo construir nuevas secciones",
                    de: "Nur neue Abschnitte bauen",
                    nl: "Alleen nieuwe secties bouwen"
                },
                {
                    en: "Entertainment performers",
                    es: "Artistas de entretenimiento",
                    de: "Unterhaltungskünstler",
                    nl: "Entertainment artiesten"
                }
            ],
            correct: 1,
            explanation: {
                en: "Garrison troops stationed along the wall performed multiple roles: defending against attacks, maintaining the structure, operating signal systems, and farming nearby land to sustain themselves.",
                es: "Las tropas de guarnición estacionadas a lo largo del muro desempeñaban múltiples roles: defenderse contra ataques, mantener la estructura, operar sistemas de señales y cultivar tierras cercanas para sustentarse.",
                de: "Entlang der Mauer stationierte Garnisonstruppen erfüllten mehrere Aufgaben: Verteidigung gegen Angriffe, Erhaltung der Struktur, Betrieb von Signalsystemen und Bewirtschaftung nahegelegener Ländereien zur Selbstversorgung.",
                nl: "Garnizoenstroepen gestationeerd langs de muur vervulden meerdere rollen: verdediging tegen aanvallen, onderhoud van de structuur, bedienen van signaalsystemen en landbouw op nabijgelegen land om zichzelf te onderhouden."
            }
        },
        {
            question: {
                en: "How many soldiers were typically stationed along the Ming Great Wall?",
                es: "¿Cuántos soldados estaban típicamente estacionados a lo largo de la Gran Muralla Ming?",
                de: "Wie viele Soldaten waren typischerweise entlang der Ming-Chinesischen Mauer stationiert?",
                nl: "Hoeveel soldaten waren typisch gestationeerd langs de Ming-Chinese Muur?"
            },
            options: [
                {
                    en: "Around 10,000",
                    es: "Alrededor de 10.000",
                    de: "Etwa 10.000",
                    nl: "Ongeveer 10.000"
                },
                {
                    en: "Around 100,000",
                    es: "Alrededor de 100.000",
                    de: "Etwa 100.000",
                    nl: "Ongeveer 100.000"
                },
                {
                    en: "Around one million",
                    es: "Alrededor de un millón",
                    de: "Etwa eine Million",
                    nl: "Ongeveer een miljoen"
                },
                {
                    en: "Around 5 million",
                    es: "Alrededor de 5 millones",
                    de: "Etwa 5 Millionen",
                    nl: "Ongeveer 5 miljoen"
                }
            ],
            correct: 2,
            explanation: {
                en: "During the Ming Dynasty, approximately one million soldiers were stationed along the Great Wall in various garrisons, making it one of the largest standing military deployments in history.",
                es: "Durante la Dinastía Ming, aproximadamente un millón de soldados estaban estacionados a lo largo de la Gran Muralla en varias guarniciones, convirtiéndola en uno de los despliegues militares permanentes más grandes de la historia.",
                de: "Während der Ming-Dynastie waren etwa eine Million Soldaten entlang der Chinesischen Mauer in verschiedenen Garnisonen stationiert, was sie zu einer der größten stehenden militärischen Einsätze der Geschichte machte.",
                nl: "Tijdens de Ming-dynastie waren ongeveer een miljoen soldaten gestationeerd langs de Chinese Muur in verschillende garnizoenen, waardoor het een van de grootste staande militaire inzetten in de geschiedenis was."
            }
        },
        {
            question: {
                en: "What was the 'Three-Line Defense' system of the Ming Great Wall?",
                es: "¿Qué era el sistema de 'Defensa de Tres Líneas' de la Gran Muralla Ming?",
                de: "Was war das 'Drei-Linien-Verteidigungs'-System der Ming-Chinesischen Mauer?",
                nl: "Wat was het 'Drie-Lijns Verdedigings'-systeem van de Ming-Chinese Muur?"
            },
            options: [
                {
                    en: "Three parallel walls",
                    es: "Tres muros paralelos",
                    de: "Drei parallele Mauern",
                    nl: "Drie parallelle muren"
                },
                {
                    en: "Outer, inner, and interior defensive lines",
                    es: "Líneas defensivas exteriores, interiores e internas",
                    de: "Äußere, innere und Innenverteidigungslinien",
                    nl: "Buitenste, binnenste en binnenste verdedigingslinies"
                },
                {
                    en: "Three types of soldiers",
                    es: "Tres tipos de soldados",
                    de: "Drei Arten von Soldaten",
                    nl: "Drie soorten soldaten"
                },
                {
                    en: "Three shifts of guards",
                    es: "Tres turnos de guardias",
                    de: "Drei Wachschichten",
                    nl: "Drie wachtdiensten"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Ming Dynasty implemented a three-line defense: the outer line along the border, the inner line further south, and the interior line protecting Beijing, creating a layered defensive system.",
                es: "La Dinastía Ming implementó una defensa de tres líneas: la línea exterior a lo largo de la frontera, la línea interior más al sur y la línea interior protegiendo Beijing, creando un sistema defensivo en capas.",
                de: "Die Ming-Dynastie implementierte eine Drei-Linien-Verteidigung: die äußere Linie entlang der Grenze, die innere Linie weiter südlich und die Innenlinie zum Schutz Pekings, wodurch ein geschichtetes Verteidigungssystem entstand.",
                nl: "De Ming-dynastie implementeerde een drie-lijns verdediging: de buitenste lijn langs de grens, de binnenste lijn verder naar het zuiden en de binnenste lijn ter bescherming van Beijing, waardoor een gelaagd verdedigingssysteem ontstond."
            }
        },
        {
            question: {
                en: "What psychological effect did the Great Wall have on potential invaders?",
                es: "¿Qué efecto psicológico tenía la Gran Muralla en los invasores potenciales?",
                de: "Welchen psychologischen Effekt hatte die Chinesische Mauer auf potenzielle Eindringlinge?",
                nl: "Welk psychologisch effect had de Chinese Muur op potentiële indringers?"
            },
            options: [
                {
                    en: "It encouraged them to attack",
                    es: "Los animaba a atacar",
                    de: "Es ermutigte sie zum Angriff",
                    nl: "Het moedigde hen aan om aan te vallen"
                },
                {
                    en: "It demonstrated power and deterred attacks",
                    es: "Demostraba poder y disuadía ataques",
                    de: "Es demonstrierte Macht und schreckte Angriffe ab",
                    nl: "Het toonde macht en ontmoedigde aanvallen"
                },
                {
                    en: "It had no psychological effect",
                    es: "No tenía efecto psicológico",
                    de: "Es hatte keinen psychologischen Effekt",
                    nl: "Het had geen psychologisch effect"
                },
                {
                    en: "It made them feel welcome",
                    es: "Les hacía sentir bienvenidos",
                    de: "Es ließ sie willkommen fühlen",
                    nl: "Het deed hen welkom voelen"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall's massive scale and imposing presence served as a powerful psychological deterrent, demonstrating Chinese imperial power and the difficulty of invasion, often discouraging attacks before they began.",
                es: "La escala masiva y presencia imponente de la Gran Muralla servía como un poderoso elemento disuasorio psicológico, demostrando el poder imperial chino y la dificultad de invasión, a menudo desalentando ataques antes de que comenzaran.",
                de: "Das massive Ausmaß und die imposante Präsenz der Chinesischen Mauer dienten als starke psychologische Abschreckung, demonstrierten die chinesische imperiale Macht und die Schwierigkeit einer Invasion, oft Angriffe abschreckend, bevor sie begannen.",
                nl: "De massale schaal en imposante aanwezigheid van de Chinese Muur dienden als een krachtig psychologisch afschrikmiddel, waarbij Chinese keizerlijke macht en de moeilijkheid van invasie werden gedemonstreerd, vaak aanvallen ontmoedigend voordat ze begonnen."
            }
        },
        {
            question: {
                en: "What weapons were commonly stored in watchtowers?",
                es: "¿Qué armas se almacenaban comúnmente en las torres de vigilancia?",
                de: "Welche Waffen wurden üblicherweise in Wachtürmen gelagert?",
                nl: "Welke wapens werden gewoonlijk opgeslagen in wachttorens?"
            },
            options: [
                {
                    en: "Rifles and cannons",
                    es: "Rifles y cañones",
                    de: "Gewehre und Kanonen",
                    nl: "Geweren en kanonnen"
                },
                {
                    en: "Bows, arrows, spears, and stones",
                    es: "Arcos, flechas, lanzas y piedras",
                    de: "Bögen, Pfeile, Speere und Steine",
                    nl: "Bogen, pijlen, speren en stenen"
                },
                {
                    en: "Nuclear weapons",
                    es: "Armas nucleares",
                    de: "Nuklearwaffen",
                    nl: "Nucleaire wapens"
                },
                {
                    en: "Laser guns",
                    es: "Pistolas láser",
                    de: "Laserwaffen",
                    nl: "Laserwapens"
                }
            ],
            correct: 1,
            explanation: {
                en: "Watchtowers stored traditional weapons of the era including bows and arrows, crossbows, spears, swords, and stones for dropping on attackers. Later periods added primitive firearms and small cannons.",
                es: "Las torres de vigilancia almacenaban armas tradicionales de la época incluyendo arcos y flechas, ballestas, lanzas, espadas y piedras para arrojar sobre los atacantes. Períodos posteriores agregaron armas de fuego primitivas y pequeños cañones.",
                de: "Wachtürme lagerten traditionelle Waffen der Ära einschließlich Bögen und Pfeilen, Armbrüsten, Speeren, Schwertern und Steinen zum Herabwerfen auf Angreifer. Spätere Perioden fügten primitive Feuerwaffen und kleine Kanonen hinzu.",
                nl: "Wachttorens bewaarden traditionele wapens van het tijdperk inclusief bogen en pijlen, kruisbogen, speren, zwaarden en stenen om op aanvallers te gooien. Latere perioden voegden primitieve vuurwapens en kleine kanonnen toe."
            }
        },
        {
            question: {
                en: "How did the Great Wall assist in controlling immigration and emigration?",
                es: "¿Cómo ayudaba la Gran Muralla a controlar la inmigración y emigración?",
                de: "Wie half die Chinesische Mauer bei der Kontrolle von Einwanderung und Auswanderung?",
                nl: "Hoe hielp de Chinese Muur bij het controleren van immigratie en emigratie?"
            },
            options: [
                {
                    en: "It didn't control population movement",
                    es: "No controlaba el movimiento de población",
                    de: "Sie kontrollierte keine Bevölkerungsbewegung",
                    nl: "Het controleerde geen bevolkingsbeweging"
                },
                {
                    en: "Through checkpoints at passes with travel documentation",
                    es: "A través de puntos de control en pasos con documentación de viaje",
                    de: "Durch Kontrollpunkte an Pässen mit Reisedokumentation",
                    nl: "Via checkpoints bij passen met reisdocumentatie"
                },
                {
                    en: "By using facial recognition",
                    es: "Usando reconocimiento facial",
                    de: "Durch Gesichtserkennung",
                    nl: "Door gezichtsherkenning te gebruiken"
                },
                {
                    en: "Through DNA testing",
                    es: "A través de pruebas de ADN",
                    de: "Durch DNA-Tests",
                    nl: "Via DNA-testen"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall's fortified passes served as checkpoints where officials could control and document the movement of people, requiring travel permits and collecting tolls, effectively managing both immigration and emigration.",
                es: "Los pasos fortificados de la Gran Muralla servían como puntos de control donde los funcionarios podían controlar y documentar el movimiento de personas, requiriendo permisos de viaje y recaudando peajes, gestionando efectivamente tanto la inmigración como la emigración.",
                de: "Die befestigten Pässe der Chinesischen Mauer dienten als Kontrollpunkte, an denen Beamte die Bewegung von Menschen kontrollieren und dokumentieren konnten, Reisegenehmigungen verlangten und Mautgebühren erhoben, wodurch sowohl Einwanderung als auch Auswanderung effektiv verwaltet wurden.",
                nl: "De versterkte passen van de Chinese Muur dienden als checkpoints waar functionarissen de beweging van mensen konden controleren en documenteren, waarbij reisvergunningen vereist waren en tolgelden werden geïnd, waardoor zowel immigratie als emigratie effectief werden beheerd."
            }
        },
        {
            question: {
                en: "What was the strategic importance of the Juyongguan Pass?",
                es: "¿Cuál era la importancia estratégica del Paso de Juyongguan?",
                de: "Was war die strategische Bedeutung des Juyongguan-Passes?",
                nl: "Wat was het strategische belang van de Juyongguan-pas?"
            },
            options: [
                {
                    en: "It protected the approach to Beijing",
                    es: "Protegía el acceso a Beijing",
                    de: "Es schützte den Zugang nach Peking",
                    nl: "Het beschermde de toegang tot Beijing"
                },
                {
                    en: "It was a trading post only",
                    es: "Era solo un puesto comercial",
                    de: "Es war nur ein Handelsposten",
                    nl: "Het was alleen een handelspost"
                },
                {
                    en: "It had no military value",
                    es: "No tenía valor militar",
                    de: "Es hatte keinen militärischen Wert",
                    nl: "Het had geen militaire waarde"
                },
                {
                    en: "It was purely ceremonial",
                    es: "Era puramente ceremonial",
                    de: "Es war rein zeremoniell",
                    nl: "Het was puur ceremonieel"
                }
            ],
            correct: 0,
            explanation: {
                en: "Juyongguan Pass was one of the most strategically important positions, located only 50 km from Beijing. It controlled the main northern approach to the capital and was heavily fortified.",
                es: "El Paso de Juyongguan era una de las posiciones más estratégicamente importantes, ubicado a solo 50 km de Beijing. Controlaba el principal acceso norte a la capital y estaba fuertemente fortificado.",
                de: "Der Juyongguan-Pass war eine der strategisch wichtigsten Positionen, nur 50 km von Peking entfernt. Er kontrollierte den nördlichen Hauptzugang zur Hauptstadt und war stark befestigt.",
                nl: "De Juyongguan-pas was een van de strategisch belangrijkste posities, gelegen op slechts 50 km van Beijing. Het controleerde de belangrijkste noordelijke toegang tot de hoofdstad en was zwaar versterkt."
            }
        },
        {
            question: {
                en: "How did the Great Wall impact the Silk Road trade?",
                es: "¿Cómo impactó la Gran Muralla en el comercio de la Ruta de la Seda?",
                de: "Wie beeinflusste die Chinesische Mauer den Seidenstraßenhandel?",
                nl: "Hoe beïnvloedde de Chinese Muur de Zijderoute handel?"
            },
            options: [
                {
                    en: "It completely blocked trade",
                    es: "Bloqueó completamente el comercio",
                    de: "Sie blockierte den Handel vollständig",
                    nl: "Het blokkeerde de handel volledig"
                },
                {
                    en: "It protected and regulated trade routes",
                    es: "Protegió y reguló las rutas comerciales",
                    de: "Sie schützte und regulierte Handelsrouten",
                    nl: "Het beschermde en reguleerde handelsroutes"
                },
                {
                    en: "It had no effect on trade",
                    es: "No tuvo efecto en el comercio",
                    de: "Sie hatte keine Auswirkung auf den Handel",
                    nl: "Het had geen effect op de handel"
                },
                {
                    en: "It only allowed military traffic",
                    es: "Solo permitía tráfico militar",
                    de: "Sie erlaubte nur militärischen Verkehr",
                    nl: "Het stond alleen militair verkeer toe"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall protected Silk Road caravans from raiders, while passes served as customs points where trade was regulated and taxes collected, facilitating controlled commercial exchange between China and the West.",
                es: "La Gran Muralla protegía las caravanas de la Ruta de la Seda de los asaltantes, mientras que los pasos servían como puntos de aduana donde se regulaba el comercio y se recaudaban impuestos, facilitando el intercambio comercial controlado entre China y Occidente.",
                de: "Die Chinesische Mauer schützte Seidenstraßen-Karawanen vor Plünderern, während die Pässe als Zollstellen dienten, an denen der Handel reguliert und Steuern erhoben wurden, wodurch kontrollierter Handelsaustausch zwischen China und dem Westen erleichtert wurde.",
                nl: "De Chinese Muur beschermde Zijderoute karavanen tegen plunderaars, terwijl passen dienden als douanepunten waar handel werd gereguleerd en belastingen werden geïnd, waardoor gecontroleerde commerciële uitwisseling tussen China en het Westen werd gefaciliteerd."
            }
        },
        {
            question: {
                en: "What defensive tactic involved using the wall's height advantage?",
                es: "¿Qué táctica defensiva involucraba usar la ventaja de altura del muro?",
                de: "Welche Verteidigungstaktik nutzte den Höhenvorteil der Mauer?",
                nl: "Welke defensieve tactiek maakte gebruik van het hoogtevoordeel van de muur?"
            },
            options: [
                {
                    en: "Hand-to-hand combat",
                    es: "Combate cuerpo a cuerpo",
                    de: "Nahkampf",
                    nl: "Man-tegen-man gevecht"
                },
                {
                    en: "Raining arrows and dropping stones on attackers",
                    es: "Lluvia de flechas y caída de piedras sobre atacantes",
                    de: "Pfeilregen und Steine auf Angreifer werfen",
                    nl: "Pijlenregen en stenen laten vallen op aanvallers"
                },
                {
                    en: "Negotiations",
                    es: "Negociaciones",
                    de: "Verhandlungen",
                    nl: "Onderhandelingen"
                },
                {
                    en: "Retreating",
                    es: "Retirada",
                    de: "Rückzug",
                    nl: "Terugtrekken"
                }
            ],
            correct: 1,
            explanation: {
                en: "Defenders used the wall's height advantage to rain arrows down on attackers from loopholes and battlements, drop stones and boiling oil, and maintain superior firing positions while remaining protected.",
                es: "Los defensores usaban la ventaja de altura del muro para llover flechas sobre los atacantes desde aspilleras y almenas, arrojar piedras y aceite hirviendo, y mantener posiciones de tiro superiores mientras permanecían protegidos.",
                de: "Verteidiger nutzten den Höhenvorteil der Mauer, um Pfeile von Schießscharten und Zinnen auf Angreifer herabregnen zu lassen, Steine und kochendes Öl zu werfen und überlegene Schießpositionen zu halten, während sie geschützt blieben.",
                nl: "Verdedigers gebruikten het hoogtevoordeel van de muur om pijlen neer te laten regenen op aanvallers vanuit schietgaten en kantelen, stenen en kokende olie te laten vallen, en superieure schietposities te behouden terwijl ze beschermd bleven."
            }
        },
        {
            question: {
                en: "What was the military significance of the wall's continuous structure?",
                es: "¿Cuál era la importancia militar de la estructura continua del muro?",
                de: "Was war die militärische Bedeutung der durchgehenden Struktur der Mauer?",
                nl: "Wat was de militaire betekenis van de continue structuur van de muur?"
            },
            options: [
                {
                    en: "Aesthetic beauty",
                    es: "Belleza estética",
                    de: "Ästhetische Schönheit",
                    nl: "Esthetische schoonheid"
                },
                {
                    en: "Prevented flanking maneuvers and encirclement",
                    es: "Prevenía maniobras de flanqueo y cerco",
                    de: "Verhinderte Umgehungsmanöver und Einkreisung",
                    nl: "Voorkwam flankeerbewegingen en omsingeling"
                },
                {
                    en: "Made it easier to paint",
                    es: "Facilitó la pintura",
                    de: "Erleichterte das Streichen",
                    nl: "Maakte schilderen gemakkelijker"
                },
                {
                    en: "Created shade",
                    es: "Creó sombra",
                    de: "Schuf Schatten",
                    nl: "Creëerde schaduw"
                }
            ],
            correct: 1,
            explanation: {
                en: "The wall's continuous structure prevented invaders from using flanking maneuvers or encirclement tactics, forcing them to either breach the wall directly or travel long distances around it.",
                es: "La estructura continua del muro prevenía que los invasores usaran maniobras de flanqueo o tácticas de cerco, forzándolos a romper el muro directamente o viajar largas distancias alrededor de él.",
                de: "Die durchgehende Struktur der Mauer verhinderte, dass Eindringlinge Umgehungsmanöver oder Einkreisungstaktiken anwenden konnten, und zwang sie entweder, die Mauer direkt zu durchbrechen oder lange Strecken um sie herum zu reisen.",
                nl: "De continue structuur van de muur voorkwam dat indringers flankeerbewegingen of omsingelingstactieken konden gebruiken, waardoor ze gedwongen waren ofwel de muur direct te doorbreken of lange afstanden eromheen te reizen."
            }
        },
        {
            question: {
                en: "What role did military colonies play along the Great Wall?",
                es: "¿Qué papel jugaban las colonias militares a lo largo de la Gran Muralla?",
                de: "Welche Rolle spielten Militärkolonien entlang der Chinesischen Mauer?",
                nl: "Welke rol speelden militaire kolonies langs de Chinese Muur?"
            },
            options: [
                {
                    en: "They provided entertainment",
                    es: "Proporcionaban entretenimiento",
                    de: "Sie boten Unterhaltung",
                    nl: "Ze boden entertainment"
                },
                {
                    en: "They supplied food and supported garrisons",
                    es: "Suministraban alimentos y apoyaban guarniciones",
                    de: "Sie versorgten mit Nahrung und unterstützten Garnisonen",
                    nl: "Ze leverden voedsel en ondersteunden garnizoenen"
                },
                {
                    en: "They had no military function",
                    es: "No tenían función militar",
                    de: "Sie hatten keine militärische Funktion",
                    nl: "Ze hadden geen militaire functie"
                },
                {
                    en: "They opposed the wall",
                    es: "Se oponían al muro",
                    de: "Sie opponierten gegen die Mauer",
                    nl: "Ze waren tegen de muur"
                }
            ],
            correct: 1,
            explanation: {
                en: "Military colonies (tuntian) established near the wall practiced agriculture to produce food for garrison troops, ensuring self-sufficiency and reducing the logistical burden of supplying remote frontier positions.",
                es: "Las colonias militares (tuntian) establecidas cerca del muro practicaban agricultura para producir alimentos para las tropas de guarnición, asegurando autosuficiencia y reduciendo la carga logística de abastecer posiciones fronterizas remotas.",
                de: "Militärkolonien (Tuntian), die in der Nähe der Mauer gegründet wurden, betrieben Landwirtschaft, um Nahrung für Garnisonstruppen zu produzieren, wodurch Selbstversorgung gewährleistet und die logistische Belastung der Versorgung entlegener Grenzpositionen reduziert wurde.",
                nl: "Militaire kolonies (tuntian) opgericht nabij de muur beoefenden landbouw om voedsel te produceren voor garnizoenstroepen, waardoor zelfvoorziening werd gegarandeerd en de logistieke last van het bevoorraden van afgelegen grensposities werd verminderd."
            }
        },
        {
            question: {
                en: "How did the Great Wall function as an intelligence network?",
                es: "¿Cómo funcionaba la Gran Muralla como red de inteligencia?",
                de: "Wie funktionierte die Chinesische Mauer als Geheimdienstnetzwerk?",
                nl: "Hoe functioneerde de Chinese Muur als inlichtingennetwerk?"
            },
            options: [
                {
                    en: "Through carrier pigeons only",
                    es: "Solo a través de palomas mensajeras",
                    de: "Nur durch Brieftauben",
                    nl: "Alleen via postduiven"
                },
                {
                    en: "Via observation posts and rapid signal communication",
                    es: "A través de puestos de observación y comunicación de señales rápida",
                    de: "Über Beobachtungsposten und schnelle Signalkommunikation",
                    nl: "Via observatieposten en snelle signaalkommunicatie"
                },
                {
                    en: "It didn't gather intelligence",
                    es: "No reunía inteligencia",
                    de: "Sie sammelte keine Informationen",
                    nl: "Het verzamelde geen inlichtingen"
                },
                {
                    en: "Through satellite surveillance",
                    es: "A través de vigilancia satelital",
                    de: "Durch Satellitenüberwachung",
                    nl: "Via satellietbewaking"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall's network of watchtowers served as an intelligence system, with observers monitoring enemy movements and rapidly transmitting information via beacon signals, providing early warning of threats across vast distances.",
                es: "La red de torres de vigilancia de la Gran Muralla servía como sistema de inteligencia, con observadores monitoreando movimientos enemigos y transmitiendo rápidamente información a través de señales de faro, proporcionando alerta temprana de amenazas a través de vastas distancias.",
                de: "Das Netzwerk von Wachtürmen der Chinesischen Mauer diente als Geheimdienstsystem, wobei Beobachter feindliche Bewegungen überwachten und schnell Informationen über Leuchtfeuersignale übermittelten, wodurch Frühwarnung vor Bedrohungen über weite Entfernungen bereitgestellt wurde.",
                nl: "Het netwerk van wachttorens van de Chinese Muur diende als een inlichtingensysteem, waarbij waarnemers vijandelijke bewegingen monitorden en snel informatie doorgaven via bakensignalen, waardoor vroege waarschuwing van bedreigingen over grote afstanden werd gegeven."
            }
        },
        {
            question: {
                en: "What made the Great Wall less effective against the Mongols in the 13th century?",
                es: "¿Qué hizo la Gran Muralla menos efectiva contra los mongoles en el siglo XIII?",
                de: "Was machte die Chinesische Mauer im 13. Jahrhundert weniger effektiv gegen die Mongolen?",
                nl: "Wat maakte de Chinese Muur in de 13e eeuw minder effectief tegen de Mongolen?"
            },
            options: [
                {
                    en: "The wall was too short",
                    es: "El muro era demasiado corto",
                    de: "Die Mauer war zu kurz",
                    nl: "De muur was te kort"
                },
                {
                    en: "Political divisions and betrayals allowed them to bypass defenses",
                    es: "Divisiones políticas y traiciones les permitieron eludir las defensas",
                    de: "Politische Spaltungen und Verrat ermöglichten es ihnen, Verteidigungen zu umgehen",
                    nl: "Politieke verdeeldheid en verraad stelden hen in staat verdedigingen te omzeilen"
                },
                {
                    en: "The Mongols had airplanes",
                    es: "Los mongoles tenían aviones",
                    de: "Die Mongolen hatten Flugzeuge",
                    nl: "De Mongolen hadden vliegtuigen"
                },
                {
                    en: "The wall was made of paper",
                    es: "El muro era de papel",
                    de: "Die Mauer war aus Papier",
                    nl: "De muur was van papier"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Mongols succeeded not by breaching the wall directly, but through political manipulation, alliances with Chinese defectors, and finding weakly defended passes during periods of internal Chinese political instability.",
                es: "Los mongoles tuvieron éxito no por romper el muro directamente, sino a través de manipulación política, alianzas con desertores chinos y encontrando pasos débilmente defendidos durante períodos de inestabilidad política interna china.",
                de: "Die Mongolen hatten Erfolg nicht durch direktes Durchbrechen der Mauer, sondern durch politische Manipulation, Bündnisse mit chinesischen Überläufern und das Finden schwach verteidigter Pässe während Perioden innerer chinesischer politischer Instabilität.",
                nl: "De Mongolen slaagden erin niet door de muur direct te doorbreken, maar door politieke manipulatie, allianties met Chinese overlopers en het vinden van zwak verdedigde passen tijdens perioden van interne Chinese politieke instabiliteit."
            }
        },
        {
            question: {
                en: "What role did the Great Wall play during the Qing Dynasty?",
                es: "¿Qué papel jugó la Gran Muralla durante la dinastía Qing?",
                de: "Welche Rolle spielte die Chinesische Mauer während der Qing-Dynastie?",
                nl: "Welke rol speelde de Chinese Muur tijdens de Qing-dynastie?"
            },
            options: [
                {
                    en: "Primary military defense",
                    es: "Defensa militar primaria",
                    de: "Primäre militärische Verteidigung",
                    nl: "Primaire militaire verdediging"
                },
                {
                    en: "Mostly symbolic, as Qing rulers were originally from beyond the wall",
                    es: "Principalmente simbólica, ya que los gobernantes Qing eran originalmente de más allá del muro",
                    de: "Meist symbolisch, da Qing-Herrscher ursprünglich von jenseits der Mauer stammten",
                    nl: "Voornamelijk symbolisch, omdat Qing-heersers oorspronkelijk van voorbij de muur kwamen"
                },
                {
                    en: "Trade center",
                    es: "Centro comercial",
                    de: "Handelszentrum",
                    nl: "Handelscentrum"
                },
                {
                    en: "Religious temple",
                    es: "Templo religioso",
                    de: "Religiöser Tempel",
                    nl: "Religieuze tempel"
                }
            ],
            correct: 1,
            explanation: {
                en: "Under the Qing Dynasty (1644-1912), established by the Manchu people from beyond the wall, the Great Wall lost its defensive function and became largely symbolic, as the rulers themselves originated from the territories the wall was meant to protect against.",
                es: "Bajo la dinastía Qing (1644-1912), establecida por el pueblo manchú de más allá del muro, la Gran Muralla perdió su función defensiva y se volvió en gran medida simbólica, ya que los propios gobernantes se originaron en los territorios contra los que el muro debía proteger.",
                de: "Unter der Qing-Dynastie (1644-1912), gegründet von den Mandschu-Völkern von jenseits der Mauer, verlor die Chinesische Mauer ihre Verteidigungsfunktion und wurde weitgehend symbolisch, da die Herrscher selbst aus den Gebieten stammten, gegen die die Mauer schützen sollte.",
                nl: "Onder de Qing-dynastie (1644-1912), gesticht door het Manchu-volk van voorbij de muur, verloor de Chinese Muur zijn defensieve functie en werd grotendeels symbolisch, omdat de heersers zelf afkomstig waren uit de gebieden waartegen de muur moest beschermen."
            }
        }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  }
  if (typeof window !== 'undefined') {
    window.level5Data = level5;
  }
  return level5;
})();
