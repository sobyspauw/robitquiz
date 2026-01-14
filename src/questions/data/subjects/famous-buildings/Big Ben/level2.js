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
        },
        {
            question: {
                en: "What caused the need to rebuild the Palace of Westminster?",
                es: "¿Qué causó la necesidad de reconstruir el Palacio de Westminster?",
                de: "Was verursachte die Notwendigkeit, den Palace of Westminster wieder aufzubauen?",
                nl: "Wat veroorzaakte de noodzaak om het Palace of Westminster te herbouwen?"
            },
            options: {
                en: ["Earthquake", "Fire in 1834", "War damage", "Structural collapse"],
                es: ["Terremoto", "Incendio en 1834", "Daño de guerra", "Colapso estructural"],
                de: ["Erdbeben", "Brand im Jahr 1834", "Kriegsschäden", "Struktureller Einsturz"],
                nl: ["Aardbeving", "Brand in 1834", "Oorlogsschade", "Structurele instorting"]
            },
            correct: 1,
            explanation: {
                en: "A devastating fire in 1834 destroyed most of the old Palace of Westminster. This fire led to the decision to rebuild the palace and construct the new clock tower that would become home to Big Ben.",
                es: "Un incendio devastador en 1834 destruyó la mayor parte del antiguo Palacio de Westminster. Este incendio llevó a la decisión de reconstruir el palacio y construir la nueva torre del reloj que se convertiría en el hogar de Big Ben.",
                de: "Ein verheerender Brand im Jahr 1834 zerstörte den größten Teil des alten Palace of Westminster. Dieser Brand führte zur Entscheidung, den Palast wieder aufzubauen und den neuen Glockenturm zu errichten, der zum Zuhause von Big Ben werden sollte.",
                nl: "Een verwoestende brand in 1834 verwoestte het grootste deel van het oude Palace of Westminster. Deze brand leidde tot de beslissing om het paleis te herbouwen en de nieuwe klokkentoren te bouwen die de thuisbasis van Big Ben zou worden."
            }
        },
        {
            question: {
                en: "How many bells are in the entire tower, including Big Ben?",
                es: "¿Cuántas campanas hay en toda la torre, incluyendo Big Ben?",
                de: "Wie viele Glocken gibt es im gesamten Turm, einschließlich Big Ben?",
                nl: "Hoeveel klokken zijn er in de hele toren, inclusief Big Ben?"
            },
            options: {
                en: ["1 bell (just Big Ben)", "5 bells (Big Ben plus 4 quarter bells)", "10 bells", "20 bells"],
                es: ["1 campana (solo Big Ben)", "5 campanas (Big Ben más 4 campanas de cuarto)", "10 campanas", "20 campanas"],
                de: ["1 Glocke (nur Big Ben)", "5 Glocken (Big Ben plus 4 Viertelstundenglocken)", "10 Glocken", "20 Glocken"],
                nl: ["1 klok (alleen Big Ben)", "5 klokken (Big Ben plus 4 kwartierklokken)", "10 klokken", "20 klokken"]
            },
            correct: 1,
            explanation: {
                en: "The tower contains 5 bells total: Big Ben itself (the hour bell) and 4 smaller quarter bells that play the Westminster Quarters melody every 15 minutes.",
                es: "La torre contiene 5 campanas en total: Big Ben en sí (la campana de las horas) y 4 campanas de cuarto más pequeñas que tocan la melodía Westminster Quarters cada 15 minutos.",
                de: "Der Turm enthält insgesamt 5 Glocken: Big Ben selbst (die Stundenglocke) und 4 kleinere Viertelstundenglocken, die alle 15 Minuten die Westminster Quarters-Melodie spielen.",
                nl: "De toren bevat in totaal 5 klokken: Big Ben zelf (de uurklok) en 4 kleinere kwartierklokken die elke 15 minuten de Westminster Quarters-melodie spelen."
            }
        },
        {
            question: {
                en: "What is the musical note that Big Ben chimes?",
                es: "¿Cuál es la nota musical que suena Big Ben?",
                de: "Welche Musiknote läutet Big Ben?",
                nl: "Welke muzieknoot luidt Big Ben?"
            },
            options: {
                en: ["C", "E", "G", "A"],
                es: ["Do", "Mi", "Sol", "La"],
                de: ["C", "E", "G", "A"],
                nl: ["C", "E", "G", "A"]
            },
            correct: 1,
            explanation: {
                en: "Big Ben strikes the note E, creating its distinctive deep, resonant tone. This note has become one of the most recognizable sounds in the world.",
                es: "Big Ben toca la nota Mi, creando su tono profundo y resonante distintivo. Esta nota se ha convertido en uno de los sonidos más reconocibles del mundo.",
                de: "Big Ben schlägt die Note E und erzeugt seinen charakteristischen tiefen, resonanten Ton. Diese Note ist zu einem der bekanntesten Klänge der Welt geworden.",
                nl: "Big Ben slaat de noot E aan, waardoor zijn kenmerkende diepe, resonerende toon ontstaat. Deze noot is een van de meest herkenbare geluiden ter wereld geworden."
            }
        },
        {
            question: {
                en: "What inscription appears below the clock faces?",
                es: "¿Qué inscripción aparece debajo de las esferas del reloj?",
                de: "Welche Inschrift erscheint unter den Zifferblättern?",
                nl: "Welk opschrift verschijnt onder de wijzerplaten?"
            },
            options: {
                en: ["God Save the Queen", "Domine Salvam Fac Reginam Nostram Victoriam Primam", "Tempus Fugit", "E Pluribus Unum"],
                es: ["God Save the Queen", "Domine Salvam Fac Reginam Nostram Victoriam Primam", "Tempus Fugit", "E Pluribus Unum"],
                de: ["God Save the Queen", "Domine Salvam Fac Reginam Nostram Victoriam Primam", "Tempus Fugit", "E Pluribus Unum"],
                nl: ["God Save the Queen", "Domine Salvam Fac Reginam Nostram Victoriam Primam", "Tempus Fugit", "E Pluribus Unum"]
            },
            correct: 1,
            explanation: {
                en: "The Latin inscription 'Domine Salvam Fac Reginam Nostram Victoriam Primam' means 'O Lord, keep safe our Queen Victoria the First,' honoring the reigning monarch when Big Ben was built.",
                es: "La inscripción latina 'Domine Salvam Fac Reginam Nostram Victoriam Primam' significa 'Oh Señor, mantén a salvo a nuestra Reina Victoria la Primera', honrando a la monarca reinante cuando se construyó Big Ben.",
                de: "Die lateinische Inschrift 'Domine Salvam Fac Reginam Nostram Victoriam Primam' bedeutet 'O Herr, bewahre unsere Königin Victoria die Erste', zu Ehren der regierenden Monarchin, als Big Ben gebaut wurde.",
                nl: "Het Latijnse opschrift 'Domine Salvam Fac Reginam Nostram Victoriam Primam' betekent 'O Heer, houd onze koningin Victoria de Eerste veilig', ter ere van de regerende monarch toen Big Ben werd gebouwd."
            }
        },
        {
            question: {
                en: "Who was the clockmaker who built the mechanism with Denison?",
                es: "¿Quién fue el relojero que construyó el mecanismo con Denison?",
                de: "Wer war der Uhrmacher, der den Mechanismus mit Denison baute?",
                nl: "Wie was de klokkenmaker die het mechanisme samen met Denison bouwde?"
            },
            options: {
                en: ["John Harrison", "Edward John Dent", "Thomas Tompion", "George Graham"],
                es: ["John Harrison", "Edward John Dent", "Thomas Tompion", "George Graham"],
                de: ["John Harrison", "Edward John Dent", "Thomas Tompion", "George Graham"],
                nl: ["John Harrison", "Edward John Dent", "Thomas Tompion", "George Graham"]
            },
            correct: 1,
            explanation: {
                en: "Edward John Dent was the clockmaker who constructed the mechanism according to Edmund Denison's revolutionary design. After Dent's death, his stepson Frederick Dent completed the work.",
                es: "Edward John Dent fue el relojero que construyó el mecanismo según el diseño revolucionario de Edmund Denison. Después de la muerte de Dent, su hijastro Frederick Dent completó el trabajo.",
                de: "Edward John Dent war der Uhrmacher, der den Mechanismus nach Edmund Denisons revolutionärem Design konstruierte. Nach Dents Tod vollendete sein Stiefsohn Frederick Dent die Arbeit.",
                nl: "Edward John Dent was de klokkenmaker die het mechanisme construeerde volgens Edmund Denisons revolutionaire ontwerp. Na Dents dood voltooide zijn stiefzoon Frederick Dent het werk."
            }
        },
        {
            question: {
                en: "How much does the clock mechanism's largest gear weigh?",
                es: "¿Cuánto pesa el engranaje más grande del mecanismo del reloj?",
                de: "Wie viel wiegt das größte Zahnrad des Uhrmechanismus?",
                nl: "Hoeveel weegt het grootste tandwiel van het klokmechanisme?"
            },
            options: {
                en: ["250 kg", "500 kg", "1,250 kg", "2,000 kg"],
                es: ["250 kg", "500 kg", "1.250 kg", "2.000 kg"],
                de: ["250 kg", "500 kg", "1.250 kg", "2.000 kg"],
                nl: ["250 kg", "500 kg", "1.250 kg", "2.000 kg"]
            },
            correct: 2,
            explanation: {
                en: "The largest gear in the clock mechanism weighs approximately 1,250 kg. This massive component is part of the intricate system that drives the four clock faces with remarkable precision.",
                es: "El engranaje más grande del mecanismo del reloj pesa aproximadamente 1.250 kg. Este componente masivo es parte del intrincado sistema que impulsa las cuatro esferas del reloj con notable precisión.",
                de: "Das größte Zahnrad im Uhrmechanismus wiegt etwa 1.250 kg. Dieses massive Bauteil ist Teil des komplexen Systems, das die vier Zifferblätter mit bemerkenswerter Präzision antreibt.",
                nl: "Het grootste tandwiel in het klokmechanisme weegt ongeveer 1.250 kg. Dit massieve onderdeel maakt deel uit van het ingewikkelde systeem dat de vier wijzerplaten met opmerkelijke precisie aandrijft."
            }
        },
        {
            question: {
                en: "When did BBC Radio first broadcast Big Ben's chimes?",
                es: "¿Cuándo transmitió BBC Radio por primera vez las campanadas de Big Ben?",
                de: "Wann übertrug BBC Radio zum ersten Mal Big Bens Glockenschläge?",
                nl: "Wanneer zond BBC Radio voor het eerst de klokslagen van Big Ben uit?"
            },
            options: {
                en: ["1900", "1923", "1945", "1959"],
                es: ["1900", "1923", "1945", "1959"],
                de: ["1900", "1923", "1945", "1959"],
                nl: ["1900", "1923", "1945", "1959"]
            },
            correct: 1,
            explanation: {
                en: "The BBC first broadcast Big Ben's chimes on New Year's Eve 1923. This began a tradition that continues today, making the chimes familiar to millions of people worldwide through radio and television.",
                es: "La BBC transmitió por primera vez las campanadas de Big Ben en Nochevieja de 1923. Esto comenzó una tradición que continúa hoy, haciendo que las campanadas sean familiares para millones de personas en todo el mundo a través de la radio y la televisión.",
                de: "Die BBC übertrug Big Bens Glockenschläge zum ersten Mal an Silvester 1923. Dies begann eine Tradition, die bis heute fortbesteht und die Glockenschläge Millionen von Menschen weltweit über Radio und Fernsehen vertraut macht.",
                nl: "De BBC zond de klokslagen van Big Ben voor het eerst uit op oudejaarsavond 1923. Dit begon een traditie die vandaag de dag nog steeds voortduurt, waardoor de klokslagen bekend zijn bij miljoenen mensen wereldwijd via radio en televisie."
            }
        },
        {
            question: {
                en: "What happens to the clock during a leap second adjustment?",
                es: "¿Qué sucede con el reloj durante un ajuste de segundo intercalar?",
                de: "Was geschieht mit der Uhr während einer Schaltsekunden-Anpassung?",
                nl: "Wat gebeurt er met de klok tijdens een schrikkelseconde aanpassing?"
            },
            options: {
                en: ["It stops automatically", "Clockkeepers manually stop and adjust it", "It adjusts itself", "Nothing, it continues normally"],
                es: ["Se detiene automáticamente", "Los relojeros lo detienen y ajustan manualmente", "Se ajusta solo", "Nada, continúa normalmente"],
                de: ["Es stoppt automatisch", "Uhrmacher stoppen und justieren es manuell", "Es passt sich selbst an", "Nichts, es läuft normal weiter"],
                nl: ["Het stopt automatisch", "Klokbewaarders stoppen en passen het handmatig aan", "Het past zich automatisch aan", "Niets, het gaat normaal door"]
            },
            correct: 1,
            explanation: {
                en: "During leap second adjustments, clockkeepers manually stop the pendulum for one second to keep Big Ben synchronized with atomic time. This rare adjustment ensures the clock remains accurate with modern timekeeping standards.",
                es: "Durante los ajustes de segundo intercalar, los relojeros detienen manualmente el péndulo durante un segundo para mantener Big Ben sincronizado con el tiempo atómico. Este raro ajuste asegura que el reloj permanezca preciso con los estándares modernos de cronometraje.",
                de: "Während Schaltsekunden-Anpassungen stoppen Uhrmacher das Pendel manuell für eine Sekunde, um Big Ben mit der Atomzeit synchronisiert zu halten. Diese seltene Anpassung stellt sicher, dass die Uhr mit modernen Zeitstandards genau bleibt.",
                nl: "Tijdens schrikkelseconde-aanpassingen stoppen klokbewaarders de slinger handmatig gedurende één seconde om Big Ben gesynchroniseerd te houden met atoomtijd. Deze zeldzame aanpassing zorgt ervoor dat de klok nauwkeurig blijft met moderne tijdmetingsstandaarden."
            }
        },
        {
            question: {
                en: "What metal are the clock hands made from?",
                es: "¿De qué metal están hechas las manecillas del reloj?",
                de: "Aus welchem Metall bestehen die Uhrzeiger?",
                nl: "Van welk metaal zijn de klokwijzers gemaakt?"
            },
            options: {
                en: ["Steel", "Copper", "Bronze", "Aluminum"],
                es: ["Acero", "Cobre", "Bronce", "Aluminio"],
                de: ["Stahl", "Kupfer", "Bronze", "Aluminium"],
                nl: ["Staal", "Koper", "Brons", "Aluminium"]
            },
            correct: 1,
            explanation: {
                en: "The clock hands are made from hollow copper to keep them lightweight while maintaining their impressive size. The copper is gilded with gold leaf to create the distinctive golden appearance.",
                es: "Las manecillas del reloj están hechas de cobre hueco para mantenerlas ligeras mientras mantienen su impresionante tamaño. El cobre está dorado con pan de oro para crear la apariencia dorada distintiva.",
                de: "Die Uhrzeiger bestehen aus hohlem Kupfer, um sie leicht zu halten und gleichzeitig ihre beeindruckende Größe beizubehalten. Das Kupfer ist mit Blattgold vergoldet, um das charakteristische goldene Aussehen zu erzeugen.",
                nl: "De klokwijzers zijn gemaakt van hol koper om ze licht te houden terwijl ze hun indrukwekkende grootte behouden. Het koper is verguld met bladgoud om het kenmerkende gouden uiterlijk te creëren."
            }
        },
        {
            question: {
                en: "How far away can Big Ben's chimes be heard?",
                es: "¿Desde qué distancia se pueden escuchar las campanadas de Big Ben?",
                de: "Wie weit entfernt können Big Bens Glockenschläge gehört werden?",
                nl: "Hoe ver weg kunnen de klokslagen van Big Ben worden gehoord?"
            },
            options: {
                en: ["Up to 1 mile", "Up to 5 miles", "Up to 10 miles", "Up to 20 miles"],
                es: ["Hasta 1 milla", "Hasta 5 millas", "Hasta 10 millas", "Hasta 20 millas"],
                de: ["Bis zu 1 Meile", "Bis zu 5 Meilen", "Bis zu 10 Meilen", "Bis zu 20 Meilen"],
                nl: ["Tot 1 mijl", "Tot 5 mijl", "Tot 10 mijl", "Tot 20 mijl"]
            },
            correct: 1,
            explanation: {
                en: "On a clear day with favorable wind conditions, Big Ben's chimes can be heard up to 5 miles away. The deep tone of the 13.7-ton bell carries well across London's urban landscape.",
                es: "En un día claro con condiciones de viento favorables, las campanadas de Big Ben se pueden escuchar hasta 5 millas de distancia. El tono profundo de la campana de 13.7 toneladas se propaga bien a través del paisaje urbano de Londres.",
                de: "An einem klaren Tag mit günstigen Windverhältnissen können Big Bens Glockenschläge bis zu 5 Meilen weit gehört werden. Der tiefe Ton der 13,7-Tonnen-Glocke trägt gut durch Londons städtische Landschaft.",
                nl: "Op een heldere dag met gunstige windomstandigheden kunnen de klokslagen van Big Ben tot 5 mijl ver worden gehoord. De diepe toon van de 13,7 ton zware klok draagt goed over het stedelijke landschap van Londen."
            }
        },
        {
            question: {
                en: "What is the largest face of any clock in the UK?",
                es: "¿Cuál es la esfera más grande de cualquier reloj en el Reino Unido?",
                de: "Was ist das größte Zifferblatt einer Uhr im Vereinigten Königreich?",
                nl: "Wat is de grootste wijzerplaat van een klok in het VK?"
            },
            options: {
                en: ["Big Ben", "Royal Liver Building clock", "Cumnock Town Hall clock", "St. Paul's Cathedral clock"],
                es: ["Big Ben", "Reloj del Royal Liver Building", "Reloj del Ayuntamiento de Cumnock", "Reloj de la Catedral de San Pablo"],
                de: ["Big Ben", "Royal Liver Building Uhr", "Cumnock Town Hall Uhr", "St. Paul's Cathedral Uhr"],
                nl: ["Big Ben", "Royal Liver Building klok", "Cumnock Town Hall klok", "St. Paul's Cathedral klok"]
            },
            correct: 2,
            explanation: {
                en: "While Big Ben is the most famous, Cumnock Town Hall in Scotland actually has the largest clock faces in the UK at 7.6 meters diameter. Big Ben's faces are 7 meters, making it the second largest.",
                es: "Aunque Big Ben es el más famoso, el Ayuntamiento de Cumnock en Escocia tiene las esferas de reloj más grandes del Reino Unido con 7.6 metros de diámetro. Las esferas de Big Ben miden 7 metros, lo que lo convierte en el segundo más grande.",
                de: "Während Big Ben am berühmtesten ist, hat das Cumnock Town Hall in Schottland tatsächlich die größten Zifferblätter im Vereinigten Königreich mit 7,6 Metern Durchmesser. Big Bens Zifferblätter sind 7 Meter groß und damit die zweitgrößten.",
                nl: "Hoewel Big Ben het beroemdste is, heeft Cumnock Town Hall in Schotland feitelijk de grootste wijzerplaten in het VK met een diameter van 7,6 meter. Big Ben's wijzerplaten zijn 7 meter, waardoor het de op één na grootste is."
            }
        },
        {
            question: {
                en: "How many bricks were used in the tower's construction?",
                es: "¿Cuántos ladrillos se usaron en la construcción de la torre?",
                de: "Wie viele Ziegel wurden beim Bau des Turms verwendet?",
                nl: "Hoeveel bakstenen werden gebruikt bij de bouw van de toren?"
            },
            options: {
                en: ["500,000 bricks", "2.5 million bricks", "5 million bricks", "10 million bricks"],
                es: ["500.000 ladrillos", "2.5 millones de ladrillos", "5 millones de ladrillos", "10 millones de ladrillos"],
                de: ["500.000 Ziegel", "2,5 Millionen Ziegel", "5 Millionen Ziegel", "10 Millionen Ziegel"],
                nl: ["500.000 bakstenen", "2,5 miljoen bakstenen", "5 miljoen bakstenen", "10 miljoen bakstenen"]
            },
            correct: 1,
            explanation: {
                en: "Approximately 2.5 million bricks form the internal structure of the Elizabeth Tower. These bricks are hidden beneath the Anston stone cladding that gives the tower its distinctive honey-colored appearance.",
                es: "Aproximadamente 2.5 millones de ladrillos forman la estructura interna de la Elizabeth Tower. Estos ladrillos están ocultos debajo del revestimiento de piedra Anston que le da a la torre su distintiva apariencia color miel.",
                de: "Etwa 2,5 Millionen Ziegel bilden die innere Struktur des Elizabeth Tower. Diese Ziegel sind unter der Anston-Steinverkleidung verborgen, die dem Turm sein charakteristisches honigfarbenes Aussehen verleiht.",
                nl: "Ongeveer 2,5 miljoen bakstenen vormen de interne structuur van de Elizabeth Tower. Deze bakstenen zijn verborgen onder de Anston-steenbekleding die de toren zijn kenmerkende honingkleurige uiterlijk geeft."
            }
        },
        {
            question: {
                en: "What special feature prevents ice from forming on the clock faces?",
                es: "¿Qué característica especial evita que se forme hielo en las esferas del reloj?",
                de: "Welches besondere Merkmal verhindert die Eisbildung auf den Zifferblättern?",
                nl: "Welke speciale functie voorkomt ijsvorming op de wijzerplaten?"
            },
            options: {
                en: ["Electric heating elements", "Special coating", "Moving air from inside", "No special feature"],
                es: ["Elementos de calefacción eléctrica", "Revestimiento especial", "Aire en movimiento desde el interior", "Sin característica especial"],
                de: ["Elektrische Heizelemente", "Spezielle Beschichtung", "Bewegte Luft von innen", "Kein besonderes Merkmal"],
                nl: ["Elektrische verwarmingselementen", "Speciale coating", "Bewegende lucht van binnenuit", "Geen speciale functie"]
            },
            correct: 0,
            explanation: {
                en: "Electric heating elements are installed behind the opal glass clock faces to prevent ice formation in winter. This ensures the clock remains visible and functional even in freezing weather conditions.",
                es: "Se instalan elementos de calefacción eléctrica detrás de las esferas del reloj de vidrio opalino para evitar la formación de hielo en invierno. Esto asegura que el reloj permanezca visible y funcional incluso en condiciones de clima helado.",
                de: "Elektrische Heizelemente sind hinter den Opalglas-Zifferblättern installiert, um Eisbildung im Winter zu verhindern. Dies stellt sicher, dass die Uhr auch bei frostigen Wetterbedingungen sichtbar und funktionsfähig bleibt.",
                nl: "Elektrische verwarmingselementen zijn geïnstalleerd achter de opaalglazen wijzerplaten om ijsvorming in de winter te voorkomen. Dit zorgt ervoor dat de klok zichtbaar en functioneel blijft, zelfs bij vriezende weersomstandigheden."
            }
        },
        {
            question: {
                en: "What was the original estimate for completing the clock tower?",
                es: "¿Cuál fue la estimación original para completar la torre del reloj?",
                de: "Was war die ursprüngliche Schätzung für die Fertigstellung des Glockenturms?",
                nl: "Wat was de oorspronkelijke schatting voor het voltooien van de klokkentoren?"
            },
            options: {
                en: ["3 years", "5 years", "10 years", "16 years"],
                es: ["3 años", "5 años", "10 años", "16 años"],
                de: ["3 Jahre", "5 Jahre", "10 Jahre", "16 Jahre"],
                nl: ["3 jaar", "5 jaar", "10 jaar", "16 jaar"]
            },
            correct: 1,
            explanation: {
                en: "The tower was originally estimated to take 5 years to complete, but construction actually took 16 years (1843-1859). Delays were caused by design complexities, the innovative clock mechanism, and bell casting problems.",
                es: "Originalmente se estimó que la torre tardaría 5 años en completarse, pero la construcción realmente tomó 16 años (1843-1859). Los retrasos fueron causados por complejidades de diseño, el innovador mecanismo del reloj y problemas de fundición de campanas.",
                de: "Der Turm sollte ursprünglich 5 Jahre bis zur Fertigstellung dauern, aber der Bau dauerte tatsächlich 16 Jahre (1843-1859). Verzögerungen wurden durch Designkomplexitäten, den innovativen Uhrmechanismus und Glockengussprobleme verursacht.",
                nl: "De toren zou oorspronkelijk 5 jaar in beslag nemen, maar de bouw duurde eigenlijk 16 jaar (1843-1859). Vertragingen werden veroorzaakt door ontwerpcomplexiteiten, het innovatieve klokmechanisme en problemen met het gieten van klokken."
            }
        },
        {
            question: {
                en: "What is inscribed on the walls of the belfry?",
                es: "¿Qué está inscrito en las paredes del campanario?",
                de: "Was ist an den Wänden des Glockenstuhl eingraviert?",
                nl: "Wat staat er gegraveerd op de muren van de klokkenkamer?"
            },
            options: {
                en: ["Biblical verses", "Names of builders and workers", "Latin prayers", "Royal proclamations"],
                es: ["Versículos bíblicos", "Nombres de constructores y trabajadores", "Oraciones latinas", "Proclamaciones reales"],
                de: ["Bibelverse", "Namen von Baumeistern und Arbeitern", "Lateinische Gebete", "Königliche Proklamationen"],
                nl: ["Bijbelse verzen", "Namen van bouwers en arbeiders", "Latijnse gebeden", "Koninklijke proclamaties"]
            },
            correct: 1,
            explanation: {
                en: "The names of builders and workers who constructed the tower in the 1850s are inscribed on the belfry walls. This Victorian graffiti was discovered during recent restoration work and provides a personal connection to the tower's history.",
                es: "Los nombres de los constructores y trabajadores que construyeron la torre en la década de 1850 están inscritos en las paredes del campanario. Este grafiti victoriano fue descubierto durante trabajos de restauración recientes y proporciona una conexión personal con la historia de la torre.",
                de: "Die Namen von Baumeistern und Arbeitern, die den Turm in den 1850er Jahren bauten, sind an den Wänden des Glockenstuhls eingraviert. Diese viktorianischen Graffiti wurden während jüngster Restaurierungsarbeiten entdeckt und bieten eine persönliche Verbindung zur Geschichte des Turms.",
                nl: "De namen van bouwers en arbeiders die de toren in de jaren 1850 bouwden, zijn gegraveerd op de muren van de klokkenkamer. Deze Victoriaanse graffiti werd ontdekt tijdens recente restauratiewerkzaamheden en biedt een persoonlijke connectie met de geschiedenis van de toren."
            }
        },
        {
            question: {
                en: "How does wind affect Big Ben's timekeeping?",
                es: "¿Cómo afecta el viento al cronometraje de Big Ben?",
                de: "Wie beeinflusst Wind Big Bens Zeitmessung?",
                nl: "Hoe beïnvloedt wind de tijdmeting van Big Ben?"
            },
            options: {
                en: ["No effect at all", "Can slow the clock by pushing against the hands", "Can speed it up", "Automatically compensated"],
                es: ["Sin efecto alguno", "Puede ralentizar el reloj al empujar contra las manecillas", "Puede acelerarlo", "Compensado automáticamente"],
                de: ["Keine Auswirkung", "Kann die Uhr verlangsamen, indem er gegen die Zeiger drückt", "Kann sie beschleunigen", "Automatisch kompensiert"],
                nl: ["Geen effect", "Kan de klok vertragen door tegen de wijzers te duwen", "Kan het versnellen", "Automatisch gecompenseerd"]
            },
            correct: 1,
            explanation: {
                en: "Strong winds pushing against the large clock hands can slow Big Ben by a few seconds. The Airy dials with ventilation holes were designed to reduce this wind resistance, but strong gusts can still affect timekeeping slightly.",
                es: "Los vientos fuertes que empujan contra las grandes manecillas del reloj pueden ralentizar Big Ben unos segundos. Los diales Airy con orificios de ventilación fueron diseñados para reducir esta resistencia al viento, pero las ráfagas fuertes aún pueden afectar ligeramente el cronometraje.",
                de: "Starke Winde, die gegen die großen Uhrzeiger drücken, können Big Ben um einige Sekunden verlangsamen. Die Airy-Zifferblätter mit Belüftungslöchern wurden entworfen, um diesen Windwiderstand zu reduzieren, aber starke Böen können die Zeitmessung immer noch leicht beeinflussen.",
                nl: "Sterke wind die tegen de grote klokwijzers duwt, kan Big Ben een paar seconden vertragen. De Airy-wijzerplaten met ventilatieopeningen werden ontworpen om deze windweerstand te verminderen, maar sterke windstoten kunnen de tijdmeting nog steeds licht beïnvloeden."
            }
        },
        {
            question: {
                en: "What is the total weight of the striking mechanism?",
                es: "¿Cuál es el peso total del mecanismo de golpeo?",
                de: "Was ist das Gesamtgewicht des Schlagmechanismus?",
                nl: "Wat is het totale gewicht van het slagmechanisme?"
            },
            options: {
                en: ["1 ton", "2.5 tons", "4 tons", "7 tons"],
                es: ["1 tonelada", "2.5 toneladas", "4 toneladas", "7 toneladas"],
                de: ["1 Tonne", "2,5 Tonnen", "4 Tonnen", "7 Tonnen"],
                nl: ["1 ton", "2,5 ton", "4 ton", "7 ton"]
            },
            correct: 2,
            explanation: {
                en: "The striking mechanism that operates the bells weighs approximately 4 tons. This separate system from the timekeeping mechanism ensures the heavy bells don't interfere with the clock's precision.",
                es: "El mecanismo de golpeo que opera las campanas pesa aproximadamente 4 toneladas. Este sistema separado del mecanismo de cronometraje asegura que las pesadas campanas no interfieran con la precisión del reloj.",
                de: "Der Schlagmechanismus, der die Glocken betätigt, wiegt etwa 4 Tonnen. Dieses vom Zeitmessungsmechanismus getrennte System stellt sicher, dass die schweren Glocken die Präzision der Uhr nicht beeinträchtigen.",
                nl: "Het slagmechanisme dat de klokken bedient, weegt ongeveer 4 ton. Dit gescheiden systeem van het tijdmetingsmechanisme zorgt ervoor dat de zware klokken niet interfereren met de precisie van de klok."
            }
        },
        {
            question: {
                en: "How many times per year is Big Ben wound?",
                es: "¿Cuántas veces al año se da cuerda a Big Ben?",
                de: "Wie oft pro Jahr wird Big Ben aufgezogen?",
                nl: "Hoeveel keer per jaar wordt Big Ben opgewonden?"
            },
            options: {
                en: ["52 times (weekly)", "104 times (twice weekly)", "156 times (three times weekly)", "365 times (daily)"],
                es: ["52 veces (semanalmente)", "104 veces (dos veces por semana)", "156 veces (tres veces por semana)", "365 veces (diariamente)"],
                de: ["52 Mal (wöchentlich)", "104 Mal (zweimal wöchentlich)", "156 Mal (dreimal wöchentlich)", "365 Mal (täglich)"],
                nl: ["52 keer (wekelijks)", "104 keer (twee keer per week)", "156 keer (drie keer per week)", "365 keer (dagelijks)"]
            },
            correct: 2,
            explanation: {
                en: "Big Ben is wound 156 times per year (three times per week on Monday, Wednesday, and Friday). Each winding session takes about 1.5 hours using an electric motor to raise the heavy driving weights.",
                es: "A Big Ben se le da cuerda 156 veces al año (tres veces por semana los lunes, miércoles y viernes). Cada sesión de cuerda toma alrededor de 1.5 horas usando un motor eléctrico para elevar las pesadas pesas de accionamiento.",
                de: "Big Ben wird 156 Mal pro Jahr aufgezogen (dreimal pro Woche am Montag, Mittwoch und Freitag). Jeder Aufziehvorgang dauert etwa 1,5 Stunden mit einem Elektromotor, um die schweren Antriebsgewichte anzuheben.",
                nl: "Big Ben wordt 156 keer per jaar opgewonden (drie keer per week op maandag, woensdag en vrijdag). Elke opwindsessie duurt ongeveer 1,5 uur met behulp van een elektromotor om de zware aandrijvingsgewichten op te hijsen."
            }
        },
        {
            question: {
                en: "What significant event occurred in 1949 regarding Big Ben?",
                es: "¿Qué evento significativo ocurrió en 1949 con respecto a Big Ben?",
                de: "Welches bedeutende Ereignis ereignete sich 1949 in Bezug auf Big Ben?",
                nl: "Welke significante gebeurtenis vond plaats in 1949 met betrekking tot Big Ben?"
            },
            options: {
                en: ["The bell cracked again", "A flock of starlings slowed the clock", "Major restoration began", "The tower was struck by lightning"],
                es: ["La campana se agrietó nuevamente", "Una bandada de estorninos ralentizó el reloj", "Comenzó una restauración importante", "La torre fue alcanzada por un rayo"],
                de: ["Die Glocke riss erneut", "Ein Starenschwarm verlangsamte die Uhr", "Große Restaurierung begann", "Der Turm wurde vom Blitz getroffen"],
                nl: ["De klok scheurde opnieuw", "Een zwerm spreeuwen vertraagde de klok", "Grote restauratie begon", "De toren werd getroffen door bliksem"]
            },
            correct: 1,
            explanation: {
                en: "In 1949, a flock of starlings perched on the minute hand of Big Ben, causing the clock to slow by 4.5 minutes. This unusual incident demonstrates how even the massive clock can be affected by unexpected factors.",
                es: "En 1949, una bandada de estorninos se posó en la manecilla de los minutos de Big Ben, causando que el reloj se ralentizara 4.5 minutos. Este incidente inusual demuestra cómo incluso el reloj masivo puede verse afectado por factores inesperados.",
                de: "1949 ließ sich ein Starenschwarm auf dem Minutenzeiger von Big Ben nieder, was dazu führte, dass die Uhr um 4,5 Minuten langsamer lief. Dieser ungewöhnliche Vorfall zeigt, wie selbst die massive Uhr von unerwarteten Faktoren beeinflusst werden kann.",
                nl: "In 1949 ging een zwerm spreeuwen op de minutenwijzer van Big Ben zitten, waardoor de klok 4,5 minuten vertraagde. Dit ongebruikelijke incident toont aan hoe zelfs de massieve klok kan worden beïnvloed door onverwachte factoren."
            }
        },
        {
            question: {
                en: "What is the volume level inside the belfry when Big Ben strikes?",
                es: "¿Cuál es el nivel de volumen dentro del campanario cuando Big Ben suena?",
                de: "Wie laut ist es im Glockenstuhl, wenn Big Ben schlägt?",
                nl: "Wat is het volumeniveau binnen de klokkenkamer wanneer Big Ben slaat?"
            },
            options: {
                en: ["80 decibels", "100 decibels", "118 decibels", "140 decibels"],
                es: ["80 decibelios", "100 decibelios", "118 decibelios", "140 decibelios"],
                de: ["80 Dezibel", "100 Dezibel", "118 Dezibel", "140 Dezibel"],
                nl: ["80 decibel", "100 decibel", "118 decibel", "140 decibel"]
            },
            correct: 2,
            explanation: {
                en: "Inside the belfry, the sound reaches 118 decibels when Big Ben strikes - loud enough to cause hearing damage. This is why visitors (when tours were available) were warned to cover their ears during chiming.",
                es: "Dentro del campanario, el sonido alcanza 118 decibelios cuando Big Ben suena, lo suficientemente fuerte como para causar daño auditivo. Esta es la razón por la cual se advirtió a los visitantes (cuando había tours disponibles) que se cubrieran los oídos durante el repique.",
                de: "Im Glockenstuhl erreicht der Klang 118 Dezibel, wenn Big Ben schlägt - laut genug, um Gehörschäden zu verursachen. Deshalb wurden Besucher (als Führungen verfügbar waren) gewarnt, ihre Ohren während des Läutens zu bedecken.",
                nl: "Binnen de klokkenkamer bereikt het geluid 118 decibel wanneer Big Ben slaat - luid genoeg om gehoorschade te veroorzaken. Dit is waarom bezoekers (toen rondleidingen beschikbaar waren) werden gewaarschuwd hun oren te bedekken tijdens het luiden."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questions;
    } else {
        window.bigBenLevel2Questions = questions;
    }
})();
