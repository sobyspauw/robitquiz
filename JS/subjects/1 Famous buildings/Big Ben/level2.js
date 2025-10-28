(function() {
    const questions = [
        {
            question: {
                en: "Which foundry cast the Big Ben bell?",
                es: "¿Qué fundición fundió la campana Big Ben?",
                de: "Welche Gießerei goss die Big Ben Glocke?",
                nl: "Welke gieterij goot de Big Ben klok?"
            },
            options: {
                en: ["Liverpool Bell Foundry", "Whitechapel Bell Foundry", "Oxford Bell Works", "Westminster Foundry"],
                es: ["Liverpool Bell Foundry", "Whitechapel Bell Foundry", "Oxford Bell Works", "Westminster Foundry"],
                de: ["Liverpool Bell Foundry", "Whitechapel Bell Foundry", "Oxford Bell Works", "Westminster Foundry"],
                nl: ["Liverpool Bell Foundry", "Whitechapel Bell Foundry", "Oxford Bell Works", "Westminster Foundry"]
            },
            correct: 1,
            explanation: {
                en: "The Whitechapel Bell Foundry cast the Big Ben bell in 1858. This historic foundry, established in 1570, also cast the Liberty Bell in Philadelphia.",
                es: "La Whitechapel Bell Foundry fundió la campana Big Ben en 1858. Esta histórica fundición, establecida en 1570, también fundió la Campana de la Libertad en Filadelfia.",
                de: "Die Whitechapel Bell Foundry goss die Big Ben Glocke im Jahr 1858. Diese historische Gießerei, gegründet 1570, goss auch die Liberty Bell in Philadelphia.",
                nl: "De Whitechapel Bell Foundry goot de Big Ben klok in 1858. Deze historische gieterij, opgericht in 1570, goot ook de Liberty Bell in Philadelphia."
            }
        },
        {
            question: {
                en: "What happened to the first Big Ben bell in 1856?",
                es: "¿Qué le pasó a la primera campana Big Ben en 1856?",
                de: "Was geschah 1856 mit der ersten Big Ben Glocke?",
                nl: "Wat gebeurde er met de eerste Big Ben klok in 1856?"
            },
            options: {
                en: ["It was stolen", "It cracked during testing", "It was too small", "It fell during installation"],
                es: ["Fue robada", "Se agrietó durante las pruebas", "Era demasiado pequeña", "Cayó durante la instalación"],
                de: ["Sie wurde gestohlen", "Sie bekam einen Riss beim Testen", "Sie war zu klein", "Sie fiel während der Installation"],
                nl: ["Het werd gestolen", "Het scheurde tijdens het testen", "Het was te klein", "Het viel tijdens de installatie"]
            },
            correct: 1,
            explanation: {
                en: "The first Big Ben bell, cast in 1856, cracked during testing at the Palace Yard. It was recast by the Whitechapel Bell Foundry in 1858, creating the current bell.",
                es: "La primera campana Big Ben, fundida en 1856, se agrietó durante las pruebas en Palace Yard. Fue refundida por Whitechapel Bell Foundry en 1858, creando la campana actual.",
                de: "Die erste Big Ben Glocke, 1856 gegossen, bekam während der Tests im Palace Yard einen Riss. Sie wurde 1858 von der Whitechapel Bell Foundry neu gegossen und schuf die heutige Glocke.",
                nl: "De eerste Big Ben klok, gegoten in 1856, scheurde tijdens het testen in de Palace Yard. Het werd in 1858 opnieuw gegoten door de Whitechapel Bell Foundry, waardoor de huidige klok werd gecreëerd."
            }
        },
        {
            question: {
                en: "When did the current Big Ben bell crack?",
                es: "¿Cuándo se agrietó la campana Big Ben actual?",
                de: "Wann bekam die aktuelle Big Ben Glocke einen Riss?",
                nl: "Wanneer scheurde de huidige Big Ben klok?"
            },
            options: {
                en: ["1856", "1858", "1859", "1863"],
                es: ["1856", "1858", "1859", "1863"],
                de: ["1856", "1858", "1859", "1863"],
                nl: ["1856", "1858", "1859", "1863"]
            },
            correct: 2,
            explanation: {
                en: "The current Big Ben bell cracked in September 1859, just two months after it began chiming. The crack remains to this day and gives Big Ben its distinctive tone.",
                es: "La campana Big Ben actual se agrietó en septiembre de 1859, solo dos meses después de comenzar a sonar. La grieta permanece hasta el día de hoy y le da a Big Ben su tono distintivo.",
                de: "Die aktuelle Big Ben Glocke bekam im September 1859 einen Riss, nur zwei Monate nachdem sie zu läuten begann. Der Riss besteht bis heute und verleiht Big Ben seinen charakteristischen Klang.",
                nl: "De huidige Big Ben klok scheurde in september 1859, slechts twee maanden nadat het begon te luiden. De scheur bestaat tot op de dag van vandaag en geeft Big Ben zijn kenmerkende toon."
            }
        },
        {
            question: {
                en: "How was the cracked bell repaired in 1859?",
                es: "¿Cómo se reparó la campana agrietada en 1859?",
                de: "Wie wurde die gerissene Glocke 1859 repariert?",
                nl: "Hoe werd de gescheurde klok in 1859 gerepareerd?"
            },
            options: {
                en: ["It was completely recast", "The bell was turned 1/4 turn and a lighter hammer was used", "The crack was welded shut", "A new bell was ordered"],
                es: ["Fue completamente refundida", "La campana se giró 1/4 de vuelta y se usó un martillo más ligero", "La grieta fue soldada", "Se ordenó una nueva campana"],
                de: ["Sie wurde komplett neu gegossen", "Die Glocke wurde um 1/4 gedreht und ein leichterer Hammer verwendet", "Der Riss wurde zugeschweißt", "Eine neue Glocke wurde bestellt"],
                nl: ["Het werd volledig opnieuw gegoten", "De klok werd 1/4 gedraaid en er werd een lichtere hamer gebruikt", "De scheur werd dichtgelast", "Er werd een nieuwe klok besteld"]
            },
            correct: 1,
            explanation: {
                en: "To repair the cracked bell, it was turned a quarter turn so the hammer strikes a different spot, and a lighter hammer was installed. This solution has worked for over 160 years.",
                es: "Para reparar la campana agrietada, se giró un cuarto de vuelta para que el martillo golpee un lugar diferente, y se instaló un martillo más ligero. Esta solución ha funcionado durante más de 160 años.",
                de: "Um die gerissene Glocke zu reparieren, wurde sie um eine Vierteldrehung gedreht, damit der Hammer eine andere Stelle trifft, und ein leichterer Hammer wurde installiert. Diese Lösung funktioniert seit über 160 Jahren.",
                nl: "Om de gescheurde klok te repareren, werd deze een kwartslag gedraaid zodat de hamer een andere plek raakt, en er werd een lichtere hamer geïnstalleerd. Deze oplossing werkt al meer dan 160 jaar."
            }
        },
        {
            question: {
                en: "During which era was Big Ben constructed?",
                es: "¿Durante qué era se construyó Big Ben?",
                de: "In welcher Ära wurde Big Ben gebaut?",
                nl: "Tijdens welk tijdperk werd Big Ben gebouwd?"
            },
            options: {
                en: ["Georgian era", "Victorian era", "Edwardian era", "Tudor era"],
                es: ["Era georgiana", "Era victoriana", "Era eduardiana", "Era Tudor"],
                de: ["Georgianische Ära", "Viktorianische Ära", "Edwardianische Ära", "Tudor-Ära"],
                nl: ["Georgische tijdperk", "Victoriaanse tijdperk", "Edwardiaanse tijdperk", "Tudor tijdperk"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben was constructed during the Victorian era (1840s-1850s) under the reign of Queen Victoria. It represents the peak of Victorian Gothic Revival architecture and engineering.",
                es: "Big Ben se construyó durante la era victoriana (1840-1850) bajo el reinado de la Reina Victoria. Representa la cúspide de la arquitectura e ingeniería del Renacimiento Gótico Victoriano.",
                de: "Big Ben wurde während der viktorianischen Ära (1840er-1850er) unter der Herrschaft von Königin Victoria erbaut. Es repräsentiert den Höhepunkt der viktorianischen neugotischen Architektur und Ingenieurskunst.",
                nl: "Big Ben werd gebouwd tijdens het Victoriaanse tijdperk (1840-1850) onder het bewind van koningin Victoria. Het vertegenwoordigt het hoogtepunt van Victoriaanse neogotische architectuur en techniek."
            }
        },
        {
            question: {
                en: "Who was the architect of the Palace of Westminster after the 1834 fire?",
                es: "¿Quién fue el arquitecto del Palacio de Westminster después del incendio de 1834?",
                de: "Wer war der Architekt des Palace of Westminster nach dem Brand von 1834?",
                nl: "Wie was de architect van het Palace of Westminster na de brand van 1834?"
            },
            options: {
                en: ["Augustus Pugin", "Charles Barry", "John Nash", "Christopher Wren"],
                es: ["Augustus Pugin", "Charles Barry", "John Nash", "Christopher Wren"],
                de: ["Augustus Pugin", "Charles Barry", "John Nash", "Christopher Wren"],
                nl: ["Augustus Pugin", "Charles Barry", "John Nash", "Christopher Wren"]
            },
            correct: 1,
            explanation: {
                en: "Charles Barry was the chief architect of the Palace of Westminster reconstruction after the devastating 1834 fire. Augustus Pugin assisted with Gothic design details including the clock tower.",
                es: "Charles Barry fue el arquitecto principal de la reconstrucción del Palacio de Westminster después del devastador incendio de 1834. Augustus Pugin ayudó con los detalles de diseño gótico, incluida la torre del reloj.",
                de: "Charles Barry war der Hauptarchitekt des Wiederaufbaus des Palace of Westminster nach dem verheerenden Brand von 1834. Augustus Pugin half bei den gotischen Designdetails einschließlich des Glockenturms.",
                nl: "Charles Barry was de hoofdarchitect van de wederopbouw van het Palace of Westminster na de verwoestende brand van 1834. Augustus Pugin hielp met gotische ontwerpdetails, waaronder de klokkentoren."
            }
        },
        {
            question: {
                en: "How long did the clock tower construction take?",
                es: "¿Cuánto tiempo tomó la construcción de la torre del reloj?",
                de: "Wie lange dauerte der Bau des Glockenturms?",
                nl: "Hoe lang duurde de bouw van de klokkentoren?"
            },
            options: {
                en: ["8 years (1851-1859)", "16 years (1843-1859)", "20 years (1839-1859)", "12 years (1847-1859)"],
                es: ["8 años (1851-1859)", "16 años (1843-1859)", "20 años (1839-1859)", "12 años (1847-1859)"],
                de: ["8 Jahre (1851-1859)", "16 Jahre (1843-1859)", "20 Jahre (1839-1859)", "12 Jahre (1847-1859)"],
                nl: ["8 jaar (1851-1859)", "16 jaar (1843-1859)", "20 jaar (1839-1859)", "12 jaar (1847-1859)"]
            },
            correct: 1,
            explanation: {
                en: "The clock tower construction took 16 years, from 1843 to 1859. The long construction period was due to the tower's complex Gothic design and the precision required for the clock mechanism.",
                es: "La construcción de la torre del reloj tomó 16 años, desde 1843 hasta 1859. El largo período de construcción se debió al complejo diseño gótico de la torre y la precisión requerida para el mecanismo del reloj.",
                de: "Der Bau des Glockenturms dauerte 16 Jahre, von 1843 bis 1859. Die lange Bauzeit war auf das komplexe gotische Design des Turms und die für den Uhrmechanismus erforderliche Präzision zurückzuführen.",
                nl: "De bouw van de klokkentoren duurde 16 jaar, van 1843 tot 1859. De lange bouwperiode was te wijten aan het complexe gotische ontwerp van de toren en de precisie die vereist was voor het klokmechanisme."
            }
        },
        {
            question: {
                en: "What color was the tower originally, and what happened during renovations?",
                es: "¿De qué color era la torre originalmente y qué pasó durante las renovaciones?",
                de: "Welche Farbe hatte der Turm ursprünglich und was geschah während der Renovierungen?",
                nl: "Welke kleur had de toren oorspronkelijk en wat gebeurde er tijdens renovaties?"
            },
            options: {
                en: ["White, painted gold", "Honey/brown color, painted black during cleaning", "Red brick, painted white", "Gray stone, no paint"],
                es: ["Blanco, pintado de oro", "Color miel/marrón, pintado de negro durante la limpieza", "Ladrillo rojo, pintado de blanco", "Piedra gris, sin pintura"],
                de: ["Weiß, gold gestrichen", "Honig-/Braunton, während der Reinigung schwarz gestrichen", "Roter Backstein, weiß gestrichen", "Grauer Stein, keine Farbe"],
                nl: ["Wit, goud geverfd", "Honing/bruine kleur, zwart geverfd tijdens schoonmaak", "Rode baksteen, wit geverfd", "Grijze steen, geen verf"]
            },
            correct: 1,
            explanation: {
                en: "The tower was originally a honey or light brown color from its Anston stone. During cleaning and restoration work, parts were temporarily painted black to protect them, leading many to incorrectly believe the tower was always meant to be black.",
                es: "La torre era originalmente de color miel o marrón claro de su piedra Anston. Durante los trabajos de limpieza y restauración, las partes se pintaron temporalmente de negro para protegerlas, lo que llevó a muchos a creer incorrectamente que la torre siempre debía ser negra.",
                de: "Der Turm hatte ursprünglich eine honig- oder hellbraune Farbe aus seinem Anston-Stein. Während der Reinigungs- und Restaurierungsarbeiten wurden Teile vorübergehend schwarz gestrichen, um sie zu schützen, was viele fälschlicherweise glauben ließ, der Turm sollte schon immer schwarz sein.",
                nl: "De toren had oorspronkelijk een honing- of lichtbruine kleur van zijn Anston-steen. Tijdens schoonmaak- en restauratiewerkzaamheden werden delen tijdelijk zwart geverfd om ze te beschermen, waardoor velen ten onrechte geloofden dat de toren altijd zwart zou moeten zijn."
            }
        },
        {
            question: {
                en: "What type of escapement does the clock mechanism use?",
                es: "¿Qué tipo de escape usa el mecanismo del reloj?",
                de: "Welche Art von Hemmung verwendet der Uhrmechanismus?",
                nl: "Welk type ontsnapping gebruikt het klokmechanisme?"
            },
            options: {
                en: ["Anchor escapement", "Gravity escapement", "Lever escapement", "Deadbeat escapement"],
                es: ["Escape de áncora", "Escape de gravedad", "Escape de palanca", "Escape de ritmo muerto"],
                de: ["Ankerhemmung", "Schwerkrafthemmung", "Hebelhemmung", "Deadbeat-Hemmung"],
                nl: ["Ankerontsnapping", "Zwaartekrachtontsnapping", "Hefboomontsnapping", "Deadbeat-ontsnapping"]
            },
            correct: 1,
            explanation: {
                en: "Edmund Beckett Denison designed a revolutionary gravity escapement for Big Ben. This mechanism uses gravity to provide impulses to the pendulum, making it highly accurate and resistant to external disturbances like wind.",
                es: "Edmund Beckett Denison diseñó un escape de gravedad revolucionario para Big Ben. Este mecanismo utiliza la gravedad para proporcionar impulsos al péndulo, haciéndolo muy preciso y resistente a perturbaciones externas como el viento.",
                de: "Edmund Beckett Denison entwarf eine revolutionäre Schwerkrafthemmung für Big Ben. Dieser Mechanismus nutzt die Schwerkraft, um dem Pendel Impulse zu geben, wodurch es sehr genau und resistent gegen äußere Störungen wie Wind ist.",
                nl: "Edmund Beckett Denison ontwierp een revolutionair zwaartekrachtontsnappingsmechanisme voor Big Ben. Dit mechanisme gebruikt zwaartekracht om impulsen aan de slinger te geven, waardoor het zeer nauwkeurig en bestand is tegen externe verstoringen zoals wind."
            }
        },
        {
            question: {
                en: "What is the pendulum length and weight?",
                es: "¿Cuál es la longitud y el peso del péndulo?",
                de: "Wie lang und schwer ist das Pendel?",
                nl: "Wat is de lengte en het gewicht van de slinger?"
            },
            options: {
                en: ["10 feet, 400 pounds", "13 feet, 660 pounds", "15 feet, 800 pounds", "18 feet, 1000 pounds"],
                es: ["10 pies, 400 libras", "13 pies, 660 libras", "15 pies, 800 libras", "18 pies, 1000 libras"],
                de: ["10 Fuß, 400 Pfund", "13 Fuß, 660 Pfund", "15 Fuß, 800 Pfund", "18 Fuß, 1000 Pfund"],
                nl: ["10 voet, 400 pond", "13 voet, 660 pond", "15 voet, 800 pond", "18 voet, 1000 pond"]
            },
            correct: 1,
            explanation: {
                en: "The pendulum is 13 feet long and weighs 660 pounds (300 kg). Its length and weight are precisely calibrated to swing once per second, regulating the entire clock mechanism.",
                es: "El péndulo tiene 13 pies de largo y pesa 660 libras (300 kg). Su longitud y peso están calibrados con precisión para oscilar una vez por segundo, regulando todo el mecanismo del reloj.",
                de: "Das Pendel ist 13 Fuß lang und wiegt 660 Pfund (300 kg). Seine Länge und sein Gewicht sind präzise kalibriert, um einmal pro Sekunde zu schwingen und den gesamten Uhrmechanismus zu regulieren.",
                nl: "De slinger is 13 voet lang en weegt 660 pond (300 kg). De lengte en het gewicht zijn nauwkeurig gekalibreerd om eenmaal per seconde te slingeren en het hele klokmechanisme te reguleren."
            }
        },
        {
            question: {
                en: "How are old pennies used to adjust Big Ben's timekeeping?",
                es: "¿Cómo se usan los peniques viejos para ajustar el cronometraje de Big Ben?",
                de: "Wie werden alte Pennys verwendet, um die Zeitmessung von Big Ben anzupassen?",
                nl: "Hoe worden oude penny's gebruikt om de tijdmeting van Big Ben aan te passen?"
            },
            options: {
                en: ["They are dropped in the bell for resonance", "Added to or removed from the pendulum to adjust speed", "Used as counterweights in the mechanism", "They have no function"],
                es: ["Se dejan caer en la campana para resonancia", "Se agregan o quitan del péndulo para ajustar la velocidad", "Se usan como contrapesos en el mecanismo", "No tienen función"],
                de: ["Sie werden in die Glocke geworfen für Resonanz", "Dem Pendel hinzugefügt oder entfernt, um die Geschwindigkeit anzupassen", "Als Gegengewichte im Mechanismus verwendet", "Sie haben keine Funktion"],
                nl: ["Ze worden in de klok gegooid voor resonantie", "Toegevoegd aan of verwijderd van de slinger om de snelheid aan te passen", "Gebruikt als contragewichten in het mechanisme", "Ze hebben geen functie"]
            },
            correct: 1,
            explanation: {
                en: "Old pre-decimal pennies are placed on or removed from the pendulum to fine-tune timekeeping. Adding one penny speeds the clock by 2/5 of a second per day. This simple yet effective method has been used for over a century.",
                es: "Los peniques antiguos pre-decimales se colocan o quitan del péndulo para ajustar el cronometraje. Agregar un penique acelera el reloj en 2/5 de segundo por día. Este método simple pero efectivo se ha utilizado durante más de un siglo.",
                de: "Alte vordezimale Pennys werden auf das Pendel gelegt oder entfernt, um die Zeitmessung feinzustellen. Das Hinzufügen eines Pennys beschleunigt die Uhr um 2/5 Sekunde pro Tag. Diese einfache, aber effektive Methode wird seit über einem Jahrhundert verwendet.",
                nl: "Oude pre-decimale penny's worden op de slinger geplaatst of verwijderd om de tijdmeting bij te stellen. Het toevoegen van één penny versnelt de klok met 2/5 seconde per dag. Deze eenvoudige maar effectieve methode wordt al meer dan een eeuw gebruikt."
            }
        },
        {
            question: {
                en: "What is the Ayrton Light?",
                es: "¿Qué es la Luz Ayrton?",
                de: "Was ist das Ayrton Light?",
                nl: "Wat is het Ayrton Light?"
            },
            options: {
                en: ["The clock illumination system", "A light at the top lit when Parliament is in session after dark", "The bell's interior light", "The tower's lightning rod"],
                es: ["El sistema de iluminación del reloj", "Una luz en la parte superior encendida cuando el Parlamento está en sesión después del anochecer", "La luz interior de la campana", "El pararrayos de la torre"],
                de: ["Das Beleuchtungssystem der Uhr", "Ein Licht oben, das leuchtet, wenn das Parlament nach Einbruch der Dunkelheit tagt", "Die Innenbeleuchtung der Glocke", "Der Blitzableiter des Turms"],
                nl: ["Het verlichtingssysteem van de klok", "Een licht bovenaan dat brandt wanneer het parlement na het donker in zitting is", "De binnenverlichting van de klok", "De bliksemafleider van de toren"]
            },
            correct: 1,
            explanation: {
                en: "The Ayrton Light is a lantern at the top of the Elizabeth Tower that is illuminated when either House of Parliament is sitting after dark. It was installed in 1885 and named after Acton Smee Ayrton.",
                es: "La Luz Ayrton es una linterna en la parte superior de la Elizabeth Tower que se ilumina cuando cualquiera de las Cámaras del Parlamento está en sesión después del anochecer. Se instaló en 1885 y lleva el nombre de Acton Smee Ayrton.",
                de: "Das Ayrton Light ist eine Laterne an der Spitze des Elizabeth Tower, die beleuchtet wird, wenn eines der beiden Parlamentshäuser nach Einbruch der Dunkelheit tagt. Es wurde 1885 installiert und nach Acton Smee Ayrton benannt.",
                nl: "Het Ayrton Light is een lantaarn bovenop de Elizabeth Tower die wordt verlicht wanneer een van beide kamers van het parlement na het donker vergadert. Het werd geïnstalleerd in 1885 en vernoemd naar Acton Smee Ayrton."
            }
        },
        {
            question: {
                en: "How often does the clock stop for maintenance?",
                es: "¿Con qué frecuencia se detiene el reloj para mantenimiento?",
                de: "Wie oft stoppt die Uhr für Wartungsarbeiten?",
                nl: "Hoe vaak stopt de klok voor onderhoud?"
            },
            options: {
                en: ["Every month", "Rarely, only for major repairs and maintenance", "Every week", "Never"],
                es: ["Cada mes", "Raramente, solo para reparaciones y mantenimiento importantes", "Cada semana", "Nunca"],
                de: ["Jeden Monat", "Selten, nur für größere Reparaturen und Wartung", "Jede Woche", "Nie"],
                nl: ["Elke maand", "Zelden, alleen voor grote reparaties en onderhoud", "Elke week", "Nooit"]
            },
            correct: 1,
            explanation: {
                en: "The clock rarely stops and only does so for major maintenance, repairs, or conservation work. It has a remarkable record of continuous operation, running through most of its 160+ year history with only occasional pauses.",
                es: "El reloj rara vez se detiene y solo lo hace para mantenimiento importante, reparaciones o trabajos de conservación. Tiene un récord notable de operación continua, funcionando durante la mayor parte de sus más de 160 años de historia con solo pausas ocasionales.",
                de: "Die Uhr stoppt selten und tut dies nur für größere Wartungsarbeiten, Reparaturen oder Konservierungsarbeiten. Sie hat eine bemerkenswerte Bilanz kontinuierlichen Betriebs und läuft während des größten Teils ihrer über 160-jährigen Geschichte mit nur gelegentlichen Pausen.",
                nl: "De klok stopt zelden en doet dit alleen voor groot onderhoud, reparaties of conserveringswerkzaamheden. Het heeft een opmerkelijke staat van dienst van continue werking, draaiend gedurende het grootste deel van zijn 160+ jaar geschiedenis met slechts incidentele pauzes."
            }
        },
        {
            question: {
                en: "What damage did Big Ben suffer during World War II?",
                es: "¿Qué daño sufrió Big Ben durante la Segunda Guerra Mundial?",
                de: "Welchen Schaden erlitt Big Ben während des Zweiten Weltkriegs?",
                nl: "Welke schade leed Big Ben tijdens de Tweede Wereldoorlog?"
            },
            options: {
                en: ["The bell was destroyed", "German bombs damaged a clock face, but it kept running", "The tower collapsed", "No damage occurred"],
                es: ["La campana fue destruida", "Las bombas alemanas dañaron una esfera del reloj, pero siguió funcionando", "La torre se derrumbó", "No ocurrió ningún daño"],
                de: ["Die Glocke wurde zerstört", "Deutsche Bomben beschädigten ein Zifferblatt, aber sie lief weiter", "Der Turm stürzte ein", "Es gab keinen Schaden"],
                nl: ["De klok werd vernietigd", "Duitse bommen beschadigden een wijzerplaat, maar het bleef lopen", "De toren stortte in", "Er was geen schade"]
            },
            correct: 1,
            explanation: {
                en: "During World War II, German bombs damaged one of the clock faces and destroyed the Commons chamber. Remarkably, Big Ben continued to chime throughout the Blitz, becoming a symbol of British resilience.",
                es: "Durante la Segunda Guerra Mundial, las bombas alemanas dañaron una de las esferas del reloj y destruyeron la cámara de los Comunes. Notablemente, Big Ben continuó sonando durante el Blitz, convirtiéndose en un símbolo de la resistencia británica.",
                de: "Während des Zweiten Weltkriegs beschädigten deutsche Bomben eines der Zifferblätter und zerstörten die Unterhausskammer. Bemerkenswerterweise läutete Big Ben während des Blitz weiter und wurde zu einem Symbol britischer Widerstandsfähigkeit.",
                nl: "Tijdens de Tweede Wereldoorlog beschadigden Duitse bommen een van de wijzerplaten en vernietigden de Lagerhuis-kamer. Opmerkelijk genoeg bleef Big Ben tijdens de Blitz luiden en werd het een symbool van Britse veerkracht."
            }
        },
        {
            question: {
                en: "Since when has the BBC broadcast Big Ben's chimes on New Year's Eve?",
                es: "¿Desde cuándo la BBC transmite las campanadas de Big Ben en Nochevieja?",
                de: "Seit wann überträgt die BBC Big Bens Glockenschläge zu Silvester?",
                nl: "Sinds wanneer zendt de BBC de klokslagen van Big Ben uit op oudejaarsavond?"
            },
            options: {
                en: ["1900", "1923", "1945", "1952"],
                es: ["1900", "1923", "1945", "1952"],
                de: ["1900", "1923", "1945", "1952"],
                nl: ["1900", "1923", "1945", "1952"]
            },
            correct: 1,
            explanation: {
                en: "The BBC has broadcast Big Ben's chimes on New Year's Eve since 1923, making it a cherished British tradition for over a century. The midnight chimes mark the transition to the new year for millions of listeners and viewers.",
                es: "La BBC ha transmitido las campanadas de Big Ben en Nochevieja desde 1923, convirtiéndolo en una tradición británica apreciada durante más de un siglo. Las campanadas de medianoche marcan la transición al nuevo año para millones de oyentes y espectadores.",
                de: "Die BBC überträgt Big Bens Glockenschläge zu Silvester seit 1923, was es zu einer geschätzten britischen Tradition seit über einem Jahrhundert macht. Die Mitternachtsschläge markieren den Übergang ins neue Jahr für Millionen von Zuhörern und Zuschauern.",
                nl: "De BBC zendt de klokslagen van Big Ben op oudejaarsavond uit sinds 1923, waardoor het een gekoesterde Britse traditie is voor meer dan een eeuw. De middernachtelijke klokslagen markeren de overgang naar het nieuwe jaar voor miljoenen luisteraars en kijkers."
            }
        },
        {
            question: {
                en: "What is the Westminster Quarters melody based on?",
                es: "¿En qué se basa la melodía Westminster Quarters?",
                de: "Worauf basiert die Westminster Quarters-Melodie?",
                nl: "Waarop is de Westminster Quarters-melodie gebaseerd?"
            },
            options: {
                en: ["Bach's Toccata", "Handel's Messiah", "Mozart's Requiem", "Beethoven's Symphony"],
                es: ["Toccata de Bach", "Mesías de Handel", "Réquiem de Mozart", "Sinfonía de Beethoven"],
                de: ["Bachs Toccata", "Händels Messias", "Mozarts Requiem", "Beethovens Symphonie"],
                nl: ["Bachs Toccata", "Handels Messias", "Mozarts Requiem", "Beethovens Symfonie"]
            },
            correct: 1,
            explanation: {
                en: "The Westminster Quarters melody is based on a phrase from Handel's Messiah: 'I know that my Redeemer liveth'. This famous melody plays every 15 minutes and is now associated with Big Ben worldwide.",
                es: "La melodía Westminster Quarters se basa en una frase del Mesías de Handel: 'Yo sé que mi Redentor vive'. Esta famosa melodía suena cada 15 minutos y ahora se asocia con Big Ben en todo el mundo.",
                de: "Die Westminster Quarters-Melodie basiert auf einer Phrase aus Händels Messias: 'Ich weiß, dass mein Erlöser lebt'. Diese berühmte Melodie spielt alle 15 Minuten und wird weltweit mit Big Ben assoziiert.",
                nl: "De Westminster Quarters-melodie is gebaseerd op een frase uit Handels Messias: 'Ik weet dat mijn Verlosser leeft'. Deze beroemde melodie speelt elke 15 minuten en wordt nu wereldwijd geassocieerd met Big Ben."
            }
        },
        {
            question: {
                en: "What ventilation feature does the tower have?",
                es: "¿Qué característica de ventilación tiene la torre?",
                de: "Welches Belüftungsmerkmal hat der Turm?",
                nl: "Welke ventilatiekenmerk heeft de toren?"
            },
            options: {
                en: ["Air conditioning", "A ventilation system throughout the tower", "Windows only", "No ventilation"],
                es: ["Aire acondicionado", "Un sistema de ventilación en toda la torre", "Solo ventanas", "Sin ventilación"],
                de: ["Klimaanlage", "Ein Belüftungssystem im gesamten Turm", "Nur Fenster", "Keine Belüftung"],
                nl: ["Airconditioning", "Een ventilatiesysteem door de hele toren", "Alleen ramen", "Geen ventilatie"]
            },
            correct: 1,
            explanation: {
                en: "The tower has an ingenious ventilation system designed to allow air circulation throughout the structure. This was essential in the Victorian era to maintain comfort for the clockkeepers and to prevent moisture damage to the mechanism.",
                es: "La torre tiene un ingenioso sistema de ventilación diseñado para permitir la circulación de aire en toda la estructura. Esto era esencial en la era victoriana para mantener la comodidad de los relojeros y prevenir el daño por humedad en el mecanismo.",
                de: "Der Turm verfügt über ein geniales Belüftungssystem, das die Luftzirkulation im gesamten Bauwerk ermöglicht. Dies war in der viktorianischen Ära wesentlich, um den Komfort für die Uhrmacher zu gewährleisten und Feuchtigkeitsschäden am Mechanismus zu verhindern.",
                nl: "De toren heeft een ingenieus ventilatiesysteem dat is ontworpen om luchtcirculatie door de hele structuur mogelijk te maken. Dit was essentieel in het Victoriaanse tijdperk om comfort te behouden voor de klokbewaarders en om vochtschade aan het mechanisme te voorkomen."
            }
        },
        {
            question: {
                en: "What Latin inscription appears on the tower?",
                es: "¿Qué inscripción latina aparece en la torre?",
                de: "Welche lateinische Inschrift erscheint am Turm?",
                nl: "Welk Latijns opschrift verschijnt op de toren?"
            },
            options: {
                en: ["Tempus Fugit (Time Flies)", "Domine Salvam Fac Reginam Nostram Victoriam Primam", "Carpe Diem (Seize the Day)", "In Hoc Signo Vinces"],
                es: ["Tempus Fugit (El tiempo vuela)", "Domine Salvam Fac Reginam Nostram Victoriam Primam", "Carpe Diem (Aprovecha el día)", "In Hoc Signo Vinces"],
                de: ["Tempus Fugit (Die Zeit fliegt)", "Domine Salvam Fac Reginam Nostram Victoriam Primam", "Carpe Diem (Nutze den Tag)", "In Hoc Signo Vinces"],
                nl: ["Tempus Fugit (De tijd vliegt)", "Domine Salvam Fac Reginam Nostram Victoriam Primam", "Carpe Diem (Pluk de dag)", "In Hoc Signo Vinces"]
            },
            correct: 1,
            explanation: {
                en: "The Latin inscription 'Domine Salvam Fac Reginam Nostram Victoriam Primam' appears on the tower, meaning 'O Lord, keep safe our Queen Victoria the First'. This honors Queen Victoria, who reigned when Big Ben was built.",
                es: "La inscripción latina 'Domine Salvam Fac Reginam Nostram Victoriam Primam' aparece en la torre, que significa 'Oh Señor, mantén a salvo a nuestra Reina Victoria la Primera'. Esto honra a la Reina Victoria, quien reinó cuando se construyó Big Ben.",
                de: "Die lateinische Inschrift 'Domine Salvam Fac Reginam Nostram Victoriam Primam' erscheint am Turm und bedeutet 'O Herr, bewahre unsere Königin Victoria die Erste'. Dies ehrt Königin Victoria, die regierte, als Big Ben gebaut wurde.",
                nl: "Het Latijnse opschrift 'Domine Salvam Fac Reginam Nostram Victoriam Primam' verschijnt op de toren, wat betekent 'O Heer, houd onze koningin Victoria de Eerste veilig'. Dit eert koningin Victoria, die regeerde toen Big Ben werd gebouwd."
            }
        },
        {
            question: {
                en: "What is the bell's composition?",
                es: "¿Cuál es la composición de la campana?",
                de: "Aus welchem Material besteht die Glocke?",
                nl: "Wat is de samenstelling van de klok?"
            },
            options: {
                en: ["Pure iron", "Bronze (copper and tin alloy)", "Steel", "Brass"],
                es: ["Hierro puro", "Bronce (aleación de cobre y estaño)", "Acero", "Latón"],
                de: ["Reines Eisen", "Bronze (Kupfer- und Zinnlegierung)", "Stahl", "Messing"],
                nl: ["Puur ijzer", "Brons (koper en tin legering)", "Staal", "Messing"]
            },
            correct: 1,
            explanation: {
                en: "The Big Ben bell is made of bell metal, an alloy of copper and tin (bronze). This composition gives the bell its distinctive, resonant tone that carries across London. The exact proportions are carefully calibrated for optimal sound quality.",
                es: "La campana Big Ben está hecha de metal de campana, una aleación de cobre y estaño (bronce). Esta composición le da a la campana su tono distintivo y resonante que se extiende por Londres. Las proporciones exactas están cuidadosamente calibradas para una calidad de sonido óptima.",
                de: "Die Big Ben Glocke besteht aus Glockenmetall, einer Legierung aus Kupfer und Zinn (Bronze). Diese Zusammensetzung verleiht der Glocke ihren charakteristischen, resonanten Ton, der sich über London ausbreitet. Die genauen Proportionen sind sorgfältig kalibriert für optimale Klangqualität.",
                nl: "De Big Ben klok is gemaakt van klokkenmetaal, een legering van koper en tin (brons). Deze samenstelling geeft de klok zijn kenmerkende, resonerende toon die over Londen draagt. De exacte verhoudingen zijn zorgvuldig gekalibreerd voor optimale geluidskwaliteit."
            }
        },
        {
            question: {
                en: "What architectural materials were used for the tower's exterior?",
                es: "¿Qué materiales arquitectónicos se usaron para el exterior de la torre?",
                de: "Welche architektonischen Materialien wurden für das Äußere des Turms verwendet?",
                nl: "Welke architectonische materialen werden gebruikt voor de buitenkant van de toren?"
            },
            options: {
                en: ["Granite throughout", "Brick with Anston stone cladding", "Marble and limestone", "Sandstone blocks"],
                es: ["Granito en toda la estructura", "Ladrillo con revestimiento de piedra Anston", "Mármol y piedra caliza", "Bloques de arenisca"],
                de: ["Durchgehend Granit", "Ziegel mit Anston-Steinverkleidung", "Marmor und Kalkstein", "Sandsteinblöcke"],
                nl: ["Graniet door de hele toren", "Baksteen met Anston-steenbekleding", "Marmer en kalksteen", "Zandsteenblokken"]
            },
            correct: 1,
            explanation: {
                en: "The tower is constructed of brick with a cladding of Anston stone from Yorkshire. The honey-colored Anston limestone gives the tower its distinctive appearance and was chosen for its durability and aesthetic qualities in the Gothic Revival style.",
                es: "La torre está construida de ladrillo con un revestimiento de piedra Anston de Yorkshire. La piedra caliza Anston de color miel le da a la torre su apariencia distintiva y fue elegida por su durabilidad y cualidades estéticas en el estilo neogótico.",
                de: "Der Turm ist aus Ziegeln mit einer Verkleidung aus Anston-Stein aus Yorkshire gebaut. Der honigfarbene Anston-Kalkstein verleiht dem Turm sein charakteristisches Aussehen und wurde wegen seiner Haltbarkeit und ästhetischen Qualitäten im neugotischen Stil ausgewählt.",
                nl: "De toren is gebouwd van baksteen met een bekleding van Anston-steen uit Yorkshire. De honingkleurige Anston-kalksteen geeft de toren zijn kenmerkende uiterlijk en werd gekozen vanwege zijn duurzaamheid en esthetische kwaliteiten in de neogotische stijl."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else {
        window.bigBenLevel2Questions = questions;
    }
})();
