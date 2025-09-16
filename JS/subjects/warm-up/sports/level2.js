(function() {
    const level2 = {
        name: {
            en: "Olympic Sports and Games",
            es: "Deportes y Juegos Olímpicos",
            de: "Olympische Sportarten und Spiele",
            nl: "Olympische Sporten en Spelen"
        },
        questions: [
            {
                question: {
                    en: "How often are the Summer Olympics held?",
                    es: "¿Con qué frecuencia se celebran los Juegos Olímpicos de Verano?",
                    de: "Wie oft finden die Sommerspiele statt?",
                    nl: "Hoe vaak worden de Zomerspelen gehouden?"
                },
                options: [
                    { en: "Every 2 years", es: "Cada 2 años", de: "Alle 2 Jahre", nl: "Elke 2 jaar" },
                    { en: "Every 3 years", es: "Cada 3 años", de: "Alle 3 Jahre", nl: "Elke 3 jaar" },
                    { en: "Every 4 years", es: "Cada 4 años", de: "Alle 4 Jahre", nl: "Elke 4 jaar" },
                    { en: "Every 5 years", es: "Cada 5 años", de: "Alle 5 Jahre", nl: "Elke 5 jaar" }
                ],
                correct: 2,
                explanation: {
                    en: "The Summer Olympics are held every 4 years, alternating with the Winter Olympics which also occur every 4 years but offset by 2 years.",
                    es: "Los Juegos Olímpicos de Verano se celebran cada 4 años, alternando con los Juegos Olímpicos de Invierno que también ocurren cada 4 años pero desfasados por 2 años.",
                    de: "Die Sommerspiele finden alle 4 Jahre statt, alternierend mit den Winterspielen, die auch alle 4 Jahre stattfinden, aber um 2 Jahre versetzt.",
                    nl: "De Zomerspelen worden elke 4 jaar gehouden, afwisselend met de Winterspelen die ook elke 4 jaar plaatsvinden maar 2 jaar verschoven."
                }
            },
            {
                question: {
                    en: "Where were the first modern Olympics held in 1896?",
                    es: "¿Dónde se celebraron los primeros Juegos Olímpicos modernos en 1896?",
                    de: "Wo fanden die ersten modernen Olympischen Spiele 1896 statt?",
                    nl: "Waar werden de eerste moderne Olympische Spelen in 1896 gehouden?"
                },
                options: [
                    { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
                    { en: "Athens", es: "Atenas", de: "Athen", nl: "Athene" },
                    { en: "Paris", es: "París", de: "Paris", nl: "Parijs" },
                    { en: "London", es: "Londres", de: "London", nl: "Londen" }
                ],
                correct: 1,
                explanation: {
                    en: "The first modern Olympics were held in Athens, Greece in 1896, returning to the birthplace of the ancient Olympic Games as a tribute to their origins.",
                    es: "Los primeros Juegos Olímpicos modernos se celebraron en Atenas, Grecia en 1896, regresando al lugar de nacimiento de los antiguos Juegos Olímpicos como tributo a sus orígenes.",
                    de: "Die ersten modernen Olympischen Spiele fanden 1896 in Athen, Griechenland statt und kehrten damit zum Geburtsort der antiken Olympischen Spiele zurück, als Hommage an ihre Ursprünge.",
                    nl: "De eerste moderne Olympische Spelen werden in 1896 gehouden in Athene, Griekenland, terugkerend naar de geboorteplaats van de oude Olympische Spelen als eerbetoon aan hun oorsprong."
                }
            },
            {
                question: {
                    en: "Which athlete has won the most Olympic gold medals?",
                    es: "¿Qué atleta ha ganado más medallas de oro olímpicas?",
                    de: "Welcher Athlet hat die meisten olympischen Goldmedaillen gewonnen?",
                    nl: "Welke atleet heeft de meeste Olympische gouden medailles gewonnen?"
                },
                options: [
                    { en: "Usain Bolt", es: "Usain Bolt", de: "Usain Bolt", nl: "Usain Bolt" },
                    { en: "Michael Phelps", es: "Michael Phelps", de: "Michael Phelps", nl: "Michael Phelps" },
                    { en: "Mark Spitz", es: "Mark Spitz", de: "Mark Spitz", nl: "Mark Spitz" },
                    { en: "Carl Lewis", es: "Carl Lewis", de: "Carl Lewis", nl: "Carl Lewis" }
                ],
                correct: 1,
                explanation: {
                    en: "Michael Phelps holds the record with 23 Olympic gold medals, all in swimming. He competed in four Olympics (2004-2016) and dominated multiple swimming events.",
                    es: "Michael Phelps tiene el récord con 23 medallas de oro olímpicas, todas en natación. Compitió en cuatro Juegos Olímpicos (2004-2016) y dominó múltiples eventos de natación.",
                    de: "Michael Phelps hält den Rekord mit 23 olympischen Goldmedaillen, alle im Schwimmen. Er nahm an vier Olympischen Spielen teil (2004-2016) und dominierte mehrere Schwimmdisziplinen.",
                    nl: "Michael Phelps heeft het record met 23 Olympische gouden medailles, allemaal in het zwemmen. Hij deed mee aan vier Olympische Spelen (2004-2016) en domineerde meerdere zwemevenementen."
                }
            },
            {
                question: {
                    en: "What do the five Olympic rings represent?",
                    es: "¿Qué representan los cinco anillos olímpicos?",
                    de: "Was repräsentieren die fünf olympischen Ringe?",
                    nl: "Wat vertegenwoordigen de vijf Olympische ringen?"
                },
                options: [
                    { en: "Five sports", es: "Cinco deportes", de: "Fünf Sportarten", nl: "Vijf sporten" },
                    { en: "Five continents", es: "Cinco continentes", de: "Fünf Kontinente", nl: "Vijf continenten" },
                    { en: "Five countries", es: "Cinco países", de: "Fünf Länder", nl: "Vijf landen" },
                    { en: "Five medals", es: "Cinco medallas", de: "Fünf Medaillen", nl: "Vijf medailles" }
                ],
                correct: 1,
                explanation: {
                    en: "The five Olympic rings represent the five inhabited continents: Africa, Asia, Europe, Oceania, and the Americas, symbolizing global unity in sport.",
                    es: "Los cinco anillos olímpicos representan los cinco continentes habitados: África, Asia, Europa, Oceanía y las Américas, simbolizando la unidad global en el deporte.",
                    de: "Die fünf olympischen Ringe repräsentieren die fünf bewohnten Kontinente: Afrika, Asien, Europa, Ozeanien und Amerika und symbolisieren die globale Einheit im Sport.",
                    nl: "De vijf Olympische ringen vertegenwoordigen de vijf bewoonde continenten: Afrika, Azië, Europa, Oceanië en Amerika, en symboliseren mondiale eenheid in sport."
                }
            },
            {
                question: {
                    en: "In which year were the Winter Olympics first held?",
                    es: "¿En qué año se celebraron por primera vez los Juegos Olímpicos de Invierno?",
                    de: "In welchem Jahr fanden die ersten Winterspiele statt?",
                    nl: "In welk jaar werden de eerste Winterspelen gehouden?"
                },
                options: [
                    { en: "1920", es: "1920", de: "1920", nl: "1920" },
                    { en: "1924", es: "1924", de: "1924", nl: "1924" },
                    { en: "1928", es: "1928", de: "1928", nl: "1928" },
                    { en: "1932", es: "1932", de: "1932", nl: "1932" }
                ],
                correct: 1,
                explanation: {
                    en: "The first Winter Olympics were held in 1924 in Chamonix, France, featuring winter sports like skiing, skating, and ice hockey.",
                    es: "Los primeros Juegos Olímpicos de Invierno se celebraron en 1924 en Chamonix, Francia, con deportes de invierno como esquí, patinaje y hockey sobre hielo.",
                    de: "Die ersten Winterspiele fanden 1924 in Chamonix, Frankreich statt und umfassten Wintersportarten wie Skifahren, Eislaufen und Eishockey.",
                    nl: "De eerste Winterspelen werden in 1924 gehouden in Chamonix, Frankrijk, met wintersporten zoals skiën, schaatsen en ijshockey."
                }
            },
            {
                question: {
                    en: "Which sport was removed from the Olympics after 1936?",
                    es: "¿Qué deporte se eliminó de los Juegos Olímpicos después de 1936?",
                    de: "Welche Sportart wurde nach 1936 von den Olympischen Spielen gestrichen?",
                    nl: "Welke sport werd na 1936 uit de Olympische Spelen verwijderd?"
                },
                options: [
                    { en: "Polo", es: "Polo", de: "Polo", nl: "Polo" },
                    { en: "Cricket", es: "Cricket", de: "Cricket", nl: "Cricket" },
                    { en: "Rugby", es: "Rugby", de: "Rugby", nl: "Rugby" },
                    { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" }
                ],
                correct: 0,
                explanation: {
                    en: "Polo was removed from the Olympics after 1936. It was included in five Olympics but was discontinued due to the expense and logistical challenges of the sport.",
                    es: "El polo se eliminó de los Juegos Olímpicos después de 1936. Se incluyó en cinco Juegos Olímpicos pero se descontinuo debido al costo y los desafíos logísticos del deporte.",
                    de: "Polo wurde nach 1936 von den Olympischen Spielen gestrichen. Es war in fünf Olympischen Spielen enthalten, wurde aber aufgrund der Kosten und logistischen Herausforderungen des Sports eingestellt.",
                    nl: "Polo werd na 1936 uit de Olympische Spelen verwijderd. Het was opgenomen in vijf Olympische Spelen maar werd stopgezet vanwege de kosten en logistieke uitdagingen van de sport."
                }
            },
            {
                question: {
                    en: "What is the Olympic motto?",
                    es: "¿Cuál es el lema olímpico?",
                    de: "Was ist das olympische Motto?",
                    nl: "Wat is het Olympische motto?"
                },
                options: [
                    { en: "Faster, Higher, Stronger", es: "Más rápido, más alto, más fuerte", de: "Schneller, höher, stärker", nl: "Sneller, hoger, sterker" },
                    { en: "Unity, Peace, Victory", es: "Unidad, paz, victoria", de: "Einheit, Frieden, Sieg", nl: "Eenheid, vrede, overwinning" },
                    { en: "Excellence, Respect, Friendship", es: "Excelencia, respeto, amistad", de: "Exzellenz, Respekt, Freundschaft", nl: "Uitmuntendheid, respect, vriendschap" },
                    { en: "Courage, Determination, Honor", es: "Coraje, determinación, honor", de: "Mut, Entschlossenheit, Ehre", nl: "Moed, vastberadenheid, eer" }
                ],
                correct: 0,
                explanation: {
                    en: "The Olympic motto is 'Citius, Altius, Fortius' - Latin for 'Faster, Higher, Stronger', representing the pursuit of athletic excellence.",
                    es: "El lema olímpico es 'Citius, Altius, Fortius' - latín para 'Más rápido, más alto, más fuerte', representando la búsqueda de la excelencia atlética.",
                    de: "Das olympische Motto ist 'Citius, Altius, Fortius' - Latein für 'Schneller, höher, stärker', was das Streben nach sportlicher Exzellenz repräsentiert.",
                    nl: "Het Olympische motto is 'Citius, Altius, Fortius' - Latijn voor 'Sneller, hoger, sterker', wat het streven naar atletieke excellentie vertegenwoordigt."
                }
            },
            {
                question: {
                    en: "Which city has hosted the Summer Olympics three times?",
                    es: "¿Qué ciudad ha sido sede de los Juegos Olímpicos de Verano tres veces?",
                    de: "Welche Stadt war dreimal Gastgeber der Sommerspiele?",
                    nl: "Welke stad heeft drie keer de Zomerspelen georganiseerd?"
                },
                options: [
                    { en: "Paris", es: "París", de: "Paris", nl: "Parijs" },
                    { en: "London", es: "Londres", de: "London", nl: "Londen" },
                    { en: "Los Angeles", es: "Los Ángeles", de: "Los Angeles", nl: "Los Angeles" },
                    { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" }
                ],
                correct: 1,
                explanation: {
                    en: "London has hosted the Summer Olympics three times: 1908, 1948, and 2012, making it the only city to achieve this distinction.",
                    es: "Londres ha sido sede de los Juegos Olímpicos de Verano tres veces: 1908, 1948 y 2012, siendo la única ciudad en lograr esta distinción.",
                    de: "London war dreimal Gastgeber der Sommerspiele: 1908, 1948 und 2012 und ist damit die einzige Stadt mit dieser Auszeichnung.",
                    nl: "Londen heeft drie keer de Zomerspelen georganiseerd: 1908, 1948 en 2012, waarmee het de enige stad is die deze onderscheiding heeft behaald."
                }
            },
            {
                question: {
                    en: "In gymnastics, how many events are in women's artistic gymnastics?",
                    es: "En gimnasia, ¿cuántas pruebas hay en gimnasia artística femenina?",
                    de: "Im Turnen, wie viele Disziplinen gibt es im Kunstturnen der Frauen?",
                    nl: "In gymnastiek, hoeveel onderdelen zijn er in artistieke gymnastiek voor vrouwen?"
                },
                options: [
                    { en: "3", es: "3", de: "3", nl: "3" },
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "5", es: "5", de: "5", nl: "5" },
                    { en: "6", es: "6", de: "6", nl: "6" }
                ],
                correct: 1,
                explanation: {
                    en: "Women's artistic gymnastics has 4 events: vault, uneven bars, balance beam, and floor exercise. Each tests different skills and abilities.",
                    es: "La gimnasia artística femenina tiene 4 eventos: salto, barras asimétricas, viga de equilibrio y ejercicio de piso. Cada uno prueba diferentes habilidades y capacidades.",
                    de: "Das Kunstturnen der Frauen hat 4 Disziplinen: Sprung, Stufenbarren, Schwebebalken und Bodenübung. Jede testet verschiedene Fähigkeiten und Fähigkeiten.",
                    nl: "Artistieke gymnastiek voor vrouwen heeft 4 onderdelen: sprong, ongelijke liggers, balk en vloeroefening. Elk test verschillende vaardigheden en bekwaamheden."
                }
            },
            {
                question: {
                    en: "Which Olympic sport uses a foil, épée, and sabre?",
                    es: "¿Qué deporte olímpico usa florete, espada y sable?",
                    de: "Welche olympische Sportart verwendet Florett, Degen und Säbel?",
                    nl: "Welke Olympische sport gebruikt floret, degen en sabel?"
                },
                options: [
                    { en: "Archery", es: "Tiro con arco", de: "Bogenschießen", nl: "Boogschieten" },
                    { en: "Fencing", es: "Esgrima", de: "Fechten", nl: "Schermen" },
                    { en: "Modern Pentathlon", es: "Pentatlón moderno", de: "Moderner Fünfkampf", nl: "Moderne vijfkamp" },
                    { en: "Shooting", es: "Tiro", de: "Schießen", nl: "Schieten" }
                ],
                correct: 1,
                explanation: {
                    en: "Fencing uses three different weapons: foil (thrusting only), épée (thrusting, heavier), and sabre (thrusting and cutting, targeting upper body).",
                    es: "La esgrima usa tres armas diferentes: florete (solo estocada), espada (estocada, más pesada), y sable (estocada y corte, apuntando al torso superior).",
                    de: "Fechten verwendet drei verschiedene Waffen: Florett (nur Stoß), Degen (Stoß, schwerer) und Säbel (Stoß und Hieb, Oberkörper als Ziel).",
                    nl: "Schermen gebruikt drie verschillende wapens: floret (alleen steken), degen (steken, zwaarder), en sabel (steken en houwen, gericht op bovenlichaam)."
                }
            },
            {
                question: {
                    en: "What is the standard distance for Olympic marathon?",
                    es: "¿Cuál es la distancia estándar para el maratón olímpico?",
                    de: "Was ist die Standarddistanz für den olympischen Marathon?",
                    nl: "Wat is de standaardafstand voor de Olympische marathon?"
                },
                options: [
                    { en: "40 km", es: "40 km", de: "40 km", nl: "40 km" },
                    { en: "42.195 km", es: "42,195 km", de: "42,195 km", nl: "42,195 km" },
                    { en: "45 km", es: "45 km", de: "45 km", nl: "45 km" },
                    { en: "50 km", es: "50 km", de: "50 km", nl: "50 km" }
                ],
                correct: 1,
                explanation: {
                    en: "The Olympic marathon distance is 42.195 km (26.2 miles), standardized after the 1908 London Olympics to fit the course from Windsor Castle to the stadium.",
                    es: "La distancia del maratón olímpico es 42,195 km (26,2 millas), estandarizada después de los Juegos Olímpicos de Londres de 1908 para ajustarse al recorrido desde el Castillo de Windsor hasta el estadio.",
                    de: "Die olympische Marathondistanz beträgt 42,195 km (26,2 Meilen), standardisiert nach den Olympischen Spielen 1908 in London, um zur Strecke vom Windsor Castle zum Stadion zu passen.",
                    nl: "De Olympische marathonafstand is 42,195 km (26,2 mijl), gestandaardiseerd na de Olympische Spelen van 1908 in Londen om te passen bij de route van Windsor Castle naar het stadion."
                }
            },
            {
                question: {
                    en: "Which swimming stroke was the last to be added to the Olympics?",
                    es: "¿Qué estilo de natación fue el último en añadirse a los Juegos Olímpicos?",
                    de: "Welcher Schwimmstil wurde zuletzt zu den Olympischen Spielen hinzugefügt?",
                    nl: "Welke zwemslag werd als laatste toegevoegd aan de Olympische Spelen?"
                },
                options: [
                    { en: "Freestyle", es: "Estilo libre", de: "Freistil", nl: "Vrije slag" },
                    { en: "Backstroke", es: "Espalda", de: "Rückenschwimmen", nl: "Rugslag" },
                    { en: "Breaststroke", es: "Braza", de: "Brustschwimmen", nl: "Schoolslag" },
                    { en: "Butterfly", es: "Mariposa", de: "Schmetterling", nl: "Vlinderslag" }
                ],
                correct: 3,
                explanation: {
                    en: "Butterfly stroke was the last to be added to Olympic swimming in 1956. It evolved from breaststroke and is known for its distinctive dolphin-like movement.",
                    es: "El estilo mariposa fue el último en añadirse a la natación olímpica en 1956. Evolucionó de la braza y es conocido por su movimiento distintivo similar al delfín.",
                    de: "Der Schmetterlingsstil wurde 1956 als letzter dem olympischen Schwimmen hinzugefügt. Er entwickelte sich aus dem Brustschwimmen und ist für seine charakteristische delphinähnliche Bewegung bekannt.",
                    nl: "Vlinderslag werd in 1956 als laatste toegevoegd aan het Olympische zwemmen. Het evolueerde uit schoolslag en staat bekend om zijn kenmerkende dolfijnachtige beweging."
                }
            },
            {
                question: {
                    en: "In track and field, what is the shortest sprint distance?",
                    es: "En atletismo, ¿cuál es la distancia de sprint más corta?",
                    de: "In der Leichtathletik, was ist die kürzeste Sprintdistanz?",
                    nl: "In atletiek, wat is de kortste sprintafstand?"
                },
                options: [
                    { en: "50m", es: "50m", de: "50m", nl: "50m" },
                    { en: "60m", es: "60m", de: "60m", nl: "60m" },
                    { en: "100m", es: "100m", de: "100m", nl: "100m" },
                    { en: "200m", es: "200m", de: "200m", nl: "200m" }
                ],
                correct: 2,
                explanation: {
                    en: "The 100m is the shortest sprint distance in Olympic track and field, known as the premier sprinting event and often called 'the fastest man/woman on Earth'.",
                    es: "Los 100m es la distancia de sprint más corta en el atletismo olímpico, conocida como el evento principal de velocidad y a menudo llamado 'el hombre/mujer más rápido de la Tierra'.",
                    de: "Die 100m ist die kürzeste Sprintdistanz in der olympischen Leichtathletik, bekannt als die wichtigste Sprintdisziplin und oft 'der schnellste Mann/die schnellste Frau der Welt' genannt.",
                    nl: "De 100m is de kortste sprintafstand in de Olympische atletiek, bekend als het belangrijkste sprintevenement en vaak 'de snelste man/vrouw op aarde' genoemd."
                }
            },
            {
                question: {
                    en: "Which country has won the most Olympic medals overall?",
                    es: "¿Qué país ha ganado más medallas olímpicas en total?",
                    de: "Welches Land hat insgesamt die meisten olympischen Medaillen gewonnen?",
                    nl: "Welk land heeft de meeste Olympische medailles gewonnen?"
                },
                options: [
                    { en: "Soviet Union", es: "Unión Soviética", de: "Sowjetunion", nl: "Sovjet-Unie" },
                    { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
                    { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
                    { en: "Great Britain", es: "Gran Bretaña", de: "Großbritannien", nl: "Groot-Brittannië" }
                ],
                correct: 2,
                explanation: {
                    en: "The United States has won the most Olympic medals overall, with over 2,600 medals across Summer and Winter Games since the modern Olympics began.",
                    es: "Estados Unidos ha ganado más medallas olímpicas en total, con más de 2,600 medallas en Juegos de Verano e Invierno desde que comenzaron los Juegos Olímpicos modernos.",
                    de: "Die Vereinigten Staaten haben insgesamt die meisten olympischen Medaillen gewonnen, mit über 2.600 Medaillen bei Sommer- und Winterspielen seit Beginn der modernen Olympischen Spiele.",
                    nl: "De Verenigde Staten hebben de meeste Olympische medailles gewonnen in totaal, met meer dan 2.600 medailles bij Zomer- en Winterspelen sinds het begin van de moderne Olympische Spelen."
                }
            },
            {
                question: {
                    en: "What is the Olympic flame traditionally lit with?",
                    es: "¿Con qué se enciende tradicionalmente la llama olímpica?",
                    de: "Womit wird die olympische Flamme traditionell entzündet?",
                    nl: "Waarmee wordt de Olympische vlam traditioneel aangestoken?"
                },
                options: [
                    { en: "Matches", es: "Cerillas", de: "Streichhölzer", nl: "Lucifers" },
                    { en: "Torch from previous games", es: "Antorcha de juegos anteriores", de: "Fackel von vorherigen Spielen", nl: "Toorts van vorige spelen" },
                    { en: "Sunlight focused by mirrors", es: "Luz solar enfocada por espejos", de: "Durch Spiegel fokussiertes Sonnenlicht", nl: "Zonlicht gefocust door spiegels" },
                    { en: "Electric lighter", es: "Encendedor eléctrico", de: "Elektrisches Feuerzeug", nl: "Elektrische aansteker" }
                ],
                correct: 2,
                explanation: {
                    en: "The Olympic flame is traditionally lit using sunlight focused by curved mirrors at Olympia, Greece, maintaining the connection to ancient Greek traditions.",
                    es: "La llama olímpica se enciende tradicionalmente usando luz solar enfocada por espejos curvos en Olimpia, Grecia, manteniendo la conexión con las tradiciones griegas antiguas.",
                    de: "Die olympische Flamme wird traditionell mit Sonnenlicht entzündet, das durch gewölbte Spiegel in Olympia, Griechenland fokussiert wird, um die Verbindung zu den antiken griechischen Traditionen aufrechtzuerhalten.",
                    nl: "De Olympische vlam wordt traditioneel aangestoken met zonlicht gefocust door gebogen spiegels in Olympia, Griekenland, om de verbinding met oude Griekse tradities te behouden."
                }
            },
            {
                question: {
                    en: "In which Olympic sport do athletes compete in the heptathlon?",
                    es: "¿En qué deporte olímpico compiten los atletas en el heptatlón?",
                    de: "In welcher olympischen Sportart kämpfen Athleten im Siebenkampf?",
                    nl: "In welke Olympische sport strijden atleten in de zevenkamp?"
                },
                options: [
                    { en: "Swimming", es: "Natación", de: "Schwimmen", nl: "Zwemmen" },
                    { en: "Gymnastics", es: "Gimnasia", de: "Turnen", nl: "Gymnastiek" },
                    { en: "Track and Field", es: "Atletismo", de: "Leichtathletik", nl: "Atletiek" },
                    { en: "Cycling", es: "Ciclismo", de: "Radsport", nl: "Wielrennen" }
                ],
                correct: 2,
                explanation: {
                    en: "The heptathlon is a track and field event consisting of seven disciplines over two days, testing athletes' versatility across sprints, jumps, and throws.",
                    es: "El heptatlón es un evento de atletismo que consta de siete disciplinas en dos días, probando la versatilidad de los atletas en sprints, saltos y lanzamientos.",
                    de: "Der Siebenkampf ist eine Leichtathletikdisziplin mit sieben Disziplinen über zwei Tage, die die Vielseitigkeit der Athleten in Sprints, Sprüngen und Würfen testet.",
                    nl: "De zevenkamp is een atletiekevenement bestaande uit zeven disciplines over twee dagen, waarbij de veelzijdigheid van atleten wordt getest in sprints, sprongen en werpen."
                }
            },
            {
                question: {
                    en: "Which Olympic Games were cancelled due to World War I?",
                    es: "¿Qué Juegos Olímpicos fueron cancelados debido a la Primera Guerra Mundial?",
                    de: "Welche Olympischen Spiele wurden wegen des Ersten Weltkriegs abgesagt?",
                    nl: "Welke Olympische Spelen werden geannuleerd vanwege de Eerste Wereldoorlog?"
                },
                options: [
                    { en: "1912 Stockholm", es: "1912 Estocolmo", de: "1912 Stockholm", nl: "1912 Stockholm" },
                    { en: "1916 Berlin", es: "1916 Berlín", de: "1916 Berlin", nl: "1916 Berlijn" },
                    { en: "1920 Antwerp", es: "1920 Amberes", de: "1920 Antwerpen", nl: "1920 Antwerpen" },
                    { en: "1924 Paris", es: "1924 París", de: "1924 Paris", nl: "1924 Parijs" }
                ],
                correct: 1,
                explanation: {
                    en: "The 1916 Berlin Olympics were cancelled due to World War I. These would have been the sixth modern Olympic Games.",
                    es: "Los Juegos Olímpicos de Berlín de 1916 fueron cancelados debido a la Primera Guerra Mundial. Estos habrían sido los sextos Juegos Olímpicos modernos.",
                    de: "Die Olympischen Spiele 1916 in Berlin wurden wegen des Ersten Weltkriegs abgesagt. Dies wären die sechsten modernen Olympischen Spiele gewesen.",
                    nl: "De Olympische Spelen van 1916 in Berlijn werden geannuleerd vanwege de Eerste Wereldoorlog. Dit zouden de zesde moderne Olympische Spelen zijn geweest."
                }
            },
            {
                question: {
                    en: "In Olympic boxing, how many weight classes are there for men?",
                    es: "En boxeo olímpico, ¿cuántas categorías de peso hay para hombres?",
                    de: "Im olympischen Boxen, wie viele Gewichtsklassen gibt es für Männer?",
                    nl: "In Olympisch boksen, hoeveel gewichtsklassen zijn er voor mannen?"
                },
                options: [
                    { en: "8", es: "8", de: "8", nl: "8" },
                    { en: "10", es: "10", de: "10", nl: "10" },
                    { en: "12", es: "12", de: "12", nl: "12" },
                    { en: "14", es: "14", de: "14", nl: "14" }
                ],
                correct: 0,
                explanation: {
                    en: "Olympic boxing currently has 8 weight classes for men, ranging from flyweight (up to 51kg) to super heavyweight (over 91kg).",
                    es: "El boxeo olímpico actualmente tiene 8 categorías de peso para hombres, desde mosca (hasta 51kg) hasta superpesado (más de 91kg).",
                    de: "Olympisches Boxen hat derzeit 8 Gewichtsklassen für Männer, von Fliegengewicht (bis 51kg) bis Superschwergewicht (über 91kg).",
                    nl: "Olympisch boksen heeft momenteel 8 gewichtsklassen voor mannen, van vlieggewicht (tot 51kg) tot superzwaargewicht (boven 91kg)."
                }
            },
            {
                question: {
                    en: "Which sport returned to the Olympics in 2016 after 112 years?",
                    es: "¿Qué deporte regresó a los Juegos Olímpicos en 2016 después de 112 años?",
                    de: "Welche Sportart kehrte 2016 nach 112 Jahren zu den Olympischen Spielen zurück?",
                    nl: "Welke sport keerde in 2016 terug naar de Olympische Spelen na 112 jaar?"
                },
                options: [
                    { en: "Rugby", es: "Rugby", de: "Rugby", nl: "Rugby" },
                    { en: "Golf", es: "Golf", de: "Golf", nl: "Golf" },
                    { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" },
                    { en: "Cricket", es: "Cricket", de: "Cricket", nl: "Cricket" }
                ],
                correct: 1,
                explanation: {
                    en: "Golf returned to the Olympics in 2016 after being absent for 112 years (since 1904). It was included due to growing global popularity and accessibility.",
                    es: "El golf regresó a los Juegos Olímpicos en 2016 después de estar ausente durante 112 años (desde 1904). Se incluyó debido a su creciente popularidad y accesibilidad global.",
                    de: "Golf kehrte 2016 zu den Olympischen Spielen zurück, nachdem es 112 Jahre lang abwesend war (seit 1904). Es wurde aufgrund der wachsenden globalen Popularität und Zugänglichkeit aufgenommen.",
                    nl: "Golf keerde in 2016 terug naar de Olympische Spelen na 112 jaar afwezigheid (sinds 1904). Het werd opgenomen vanwege de groeiende mondiale populariteit en toegankelijkheid."
                }
            },
            {
                question: {
                    en: "What is the maximum number of athletes per country in Olympic basketball?",
                    es: "¿Cuál es el número máximo de atletas por país en baloncesto olímpico?",
                    de: "Was ist die maximale Anzahl von Athleten pro Land im olympischen Basketball?",
                    nl: "Wat is het maximale aantal atleten per land in Olympisch basketbal?"
                },
                options: [
                    { en: "10", es: "10", de: "10", nl: "10" },
                    { en: "12", es: "12", de: "12", nl: "12" },
                    { en: "14", es: "14", de: "14", nl: "14" },
                    { en: "15", es: "15", de: "15", nl: "15" }
                ],
                correct: 1,
                explanation: {
                    en: "Olympic basketball teams consist of 12 players maximum per country, allowing for strategic substitutions and depth during tournaments.",
                    es: "Los equipos de baloncesto olímpico consisten en máximo 12 jugadores por país, permitiendo sustituciones estratégicas y profundidad durante los torneos.",
                    de: "Olympische Basketballteams bestehen aus maximal 12 Spielern pro Land, was strategische Auswechslungen und Tiefe während der Turniere ermöglicht.",
                    nl: "Olympische basketbalteams bestaan uit maximaal 12 spelers per land, wat strategische wissels en diepte mogelijk maakt tijdens toernooien."
                }
            },
            {
                question: {
                    en: "In Olympic weightlifting, what are the two competitive lifts?",
                    es: "En halterofilia olímpica, ¿cuáles son los dos levantamientos competitivos?",
                    de: "Im olympischen Gewichtheben, was sind die beiden Wettkampfübungen?",
                    nl: "In Olympisch gewichtheffen, wat zijn de twee competitieve liften?"
                },
                options: [
                    { en: "Squat and Deadlift", es: "Sentadilla y Peso muerto", de: "Kniebeuge und Kreuzheben", nl: "Squat en Deadlift" },
                    { en: "Snatch and Clean & Jerk", es: "Arrancada y Dos tiempos", de: "Reißen und Stoßen", nl: "Snatch en Clean & Jerk" },
                    { en: "Bench Press and Military Press", es: "Press de banca y Press militar", de: "Bankdrücken und Schulterdrücken", nl: "Bankdrukken en Military Press" },
                    { en: "Clean and Press", es: "Cargada y Press", de: "Umsetzen und Drücken", nl: "Clean en Press" }
                ],
                correct: 1,
                explanation: {
                    en: "Olympic weightlifting consists of the snatch (lifting overhead in one motion) and clean & jerk (lifting to shoulders, then overhead), testing explosive power.",
                    es: "La halterofilia olímpica consiste en la arrancada (levantar sobre la cabeza en un movimiento) y dos tiempos (levantar a los hombros, luego sobre la cabeza), probando la potencia explosiva.",
                    de: "Olympisches Gewichtheben besteht aus Reißen (in einer Bewegung über den Kopf heben) und Stoßen (zu den Schultern heben, dann über den Kopf), was explosive Kraft testet.",
                    nl: "Olympisch gewichtheffen bestaat uit snatch (in één beweging boven het hoofd tillen) en clean & jerk (naar de schouders tillen, dan boven het hoofd), wat explosieve kracht test."
                }
            },
            {
                question: {
                    en: "Which Olympic event is known as the 'Queen of Track'?",
                    es: "¿Qué evento olímpico se conoce como la 'Reina de la Pista'?",
                    de: "Welche olympische Disziplin ist als 'Königin der Leichtathletik' bekannt?",
                    nl: "Welk Olympisch evenement staat bekend als de 'Koningin van de Baan'?"
                },
                options: [
                    { en: "100m sprint", es: "Sprint de 100m", de: "100m Sprint", nl: "100m sprint" },
                    { en: "Marathon", es: "Maratón", de: "Marathon", nl: "Marathon" },
                    { en: "1500m", es: "1500m", de: "1500m", nl: "1500m" },
                    { en: "Heptathlon", es: "Heptatlón", de: "Siebenkampf", nl: "Zevenkamp" }
                ],
                correct: 0,
                explanation: {
                    en: "The 100m sprint is known as the 'Queen of Track' because it's the premier sprinting event and determines the fastest human on Earth.",
                    es: "El sprint de 100m se conoce como la 'Reina de la Pista' porque es el evento principal de velocidad y determina al humano más rápido de la Tierra.",
                    de: "Der 100m Sprint ist als 'Königin der Leichtathletik' bekannt, weil es die wichtigste Sprintdisziplin ist und den schnellsten Menschen der Erde bestimmt.",
                    nl: "De 100m sprint staat bekend als de 'Koningin van de Baan' omdat het het belangrijkste sprintevenement is en bepaalt wie de snelste mens op aarde is."
                }
            },
            {
                question: {
                    en: "In Olympic sailing, what is the minimum crew size for most boat classes?",
                    es: "En vela olímpica, ¿cuál es el tamaño mínimo de tripulación para la mayoría de clases de barcos?",
                    de: "Im olympischen Segeln, was ist die minimale Besatzungsgröße für die meisten Bootsklassen?",
                    nl: "In Olympisch zeilen, wat is de minimale bemanning voor de meeste bootklassen?"
                },
                options: [
                    { en: "1", es: "1", de: "1", nl: "1" },
                    { en: "2", es: "2", de: "2", nl: "2" },
                    { en: "3", es: "3", de: "3", nl: "3" },
                    { en: "4", es: "4", de: "4", nl: "4" }
                ],
                correct: 0,
                explanation: {
                    en: "Most Olympic sailing boat classes are single-handed (1 crew member), though some classes like the 470 and Nacra 17 require 2 crew members.",
                    es: "La mayoría de las clases de barcos de vela olímpica son de un solo tripulante (1 miembro de tripulación), aunque algunas clases como el 470 y Nacra 17 requieren 2 miembros de tripulación.",
                    de: "Die meisten olympischen Segelbootklassen sind Einhand-Klassen (1 Besatzungsmitglied), obwohl einige Klassen wie die 470 und Nacra 17 zwei Besatzungsmitglieder benötigen.",
                    nl: "De meeste Olympische zeilbootklassen zijn eenhandig (1 bemanningslid), hoewel sommige klassen zoals de 470 en Nacra 17 2 bemanningsleden vereisen."
                }
            },
            {
                question: {
                    en: "Which Olympic Games first featured the Olympic Village?",
                    es: "¿Qué Juegos Olímpicos presentaron por primera vez la Villa Olímpica?",
                    de: "Welche Olympischen Spiele hatten zum ersten Mal das Olympische Dorf?",
                    nl: "Welke Olympische Spelen hadden voor het eerst het Olympisch Dorp?"
                },
                options: [
                    { en: "1924 Paris", es: "1924 París", de: "1924 Paris", nl: "1924 Parijs" },
                    { en: "1928 Amsterdam", es: "1928 Ámsterdam", de: "1928 Amsterdam", nl: "1928 Amsterdam" },
                    { en: "1932 Los Angeles", es: "1932 Los Ángeles", de: "1932 Los Angeles", nl: "1932 Los Angeles" },
                    { en: "1936 Berlin", es: "1936 Berlín", de: "1936 Berlin", nl: "1936 Berlijn" }
                ],
                correct: 2,
                explanation: {
                    en: "The 1932 Los Angeles Olympics first featured the Olympic Village, providing centralized housing for athletes and creating the model used today.",
                    es: "Los Juegos Olímpicos de Los Ángeles de 1932 presentaron por primera vez la Villa Olímpica, proporcionando alojamiento centralizado para atletas y creando el modelo usado hoy.",
                    de: "Die Olympischen Spiele 1932 in Los Angeles hatten zum ersten Mal das Olympische Dorf und boten zentralisierte Unterkünfte für Athleten, wodurch das heute verwendete Modell geschaffen wurde.",
                    nl: "De Olympische Spelen van 1932 in Los Angeles hadden voor het eerst het Olympisch Dorp, met gecentraliseerde huisvesting voor atleten en het model dat vandaag wordt gebruikt."
                }
            },
            {
                question: {
                    en: "In Olympic judo, what color belt do competitors typically hold?",
                    es: "En judo olímpico, ¿qué color de cinturón suelen tener los competidores?",
                    de: "Im olympischen Judo, welche Gurtfarbe haben Wettkämpfer normalerweise?",
                    nl: "In Olympisch judo, welke kleur band hebben concurrenten meestal?"
                },
                options: [
                    { en: "Brown or Black", es: "Marrón o Negro", de: "Braun oder Schwarz", nl: "Bruin of Zwart" },
                    { en: "Blue or Purple", es: "Azul o Púrpura", de: "Blau oder Lila", nl: "Blauw of Paars" },
                    { en: "Red or Orange", es: "Rojo o Naranja", de: "Rot oder Orange", nl: "Rood of Oranje" },
                    { en: "Green or Yellow", es: "Verde o Amarillo", de: "Grün oder Gelb", nl: "Groen of Geel" }
                ],
                correct: 0,
                explanation: {
                    en: "Olympic judo competitors typically hold brown or black belts, representing advanced skill levels. Most are black belts with years of training and competition experience.",
                    es: "Los competidores de judo olímpico típicamente tienen cinturones marrones o negros, representando niveles de habilidad avanzados. La mayoría son cinturones negros con años de entrenamiento y experiencia en competición.",
                    de: "Olympische Judo-Wettkampfteilnehmer haben normalerweise braune oder schwarze Gürtel, die fortgeschrittene Fähigkeitsebenen repräsentieren. Die meisten sind Schwarzgürtel mit jahrelanger Trainings- und Wettkampferfahrung.",
                    nl: "Olympische judo-concurrenten hebben meestal bruine of zwarte banden, wat geavanceerde vaardigheidsniveaus vertegenwoordigt. De meesten zijn zwarte banden met jaren van training en wedstrijdervaring."
                }
            },
            {
                question: {
                    en: "What is the Olympic record for most gold medals won in a single Games?",
                    es: "¿Cuál es el récord olímpico de más medallas de oro ganadas en unos Juegos?",
                    de: "Was ist der olympische Rekord für die meisten Goldmedaillen in einem Spiel?",
                    nl: "Wat is het Olympisch record voor de meeste gouden medailles in één Spel?"
                },
                options: [
                    { en: "7", es: "7", de: "7", nl: "7" },
                    { en: "8", es: "8", de: "8", nl: "8" },
                    { en: "9", es: "9", de: "9", nl: "9" },
                    { en: "10", es: "10", de: "10", nl: "10" }
                ],
                correct: 1,
                explanation: {
                    en: "The Olympic record for most gold medals in a single Games is 8, achieved by Michael Phelps at the 2008 Beijing Olympics in swimming.",
                    es: "El récord olímpico de más medallas de oro en unos Juegos es 8, logrado por Michael Phelps en los Juegos Olímpicos de Pekín 2008 en natación.",
                    de: "Der olympische Rekord für die meisten Goldmedaillen in einem Spiel ist 8, erreicht von Michael Phelps bei den Olympischen Spielen 2008 in Peking im Schwimmen.",
                    nl: "Het Olympische record voor de meeste gouden medailles in één Spel is 8, behaald door Michael Phelps bij de Olympische Spelen van 2008 in Peking in het zwemmen."
                }
            },
            {
                question: {
                    en: "In Olympic equestrian events, how many disciplines are there?",
                    es: "En eventos ecuestres olímpicos, ¿cuántas disciplinas hay?",
                    de: "In olympischen Reitsportdisziplinen, wie viele Disziplinen gibt es?",
                    nl: "In Olympische paardensport evenementen, hoeveel disciplines zijn er?"
                },
                options: [
                    { en: "2", es: "2", de: "2", nl: "2" },
                    { en: "3", es: "3", de: "3", nl: "3" },
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "5", es: "5", de: "5", nl: "5" }
                ],
                correct: 1,
                explanation: {
                    en: "Olympic equestrian has 3 disciplines: dressage (precision and grace), jumping (clearing obstacles), and eventing (combination of both plus cross-country).",
                    es: "La equitación olímpica tiene 3 disciplinas: doma (precisión y gracia), salto (superar obstáculos), y concurso completo (combinación de ambos más campo a través).",
                    de: "Olympischer Reitsport hat 3 Disziplinen: Dressur (Präzision und Anmut), Springen (Hindernisse überwinden) und Vielseitigkeit (Kombination aus beiden plus Gelände).",
                    nl: "Olympische paardensport heeft 3 disciplines: dressuur (precisie en gratie), springen (hindernissen overwinnen) en eventing (combinatie van beide plus cross-country)."
                }
            },
            {
                question: {
                    en: "Which Olympic sport uses a shuttlecock?",
                    es: "¿Qué deporte olímpico usa un volante?",
                    de: "Welche olympische Sportart verwendet einen Federball?",
                    nl: "Welke Olympische sport gebruikt een shuttle?"
                },
                options: [
                    { en: "Table Tennis", es: "Tenis de mesa", de: "Tischtennis", nl: "Tafeltennis" },
                    { en: "Tennis", es: "Tenis", de: "Tennis", nl: "Tennis" },
                    { en: "Badminton", es: "Bádminton", de: "Badminton", nl: "Badminton" },
                    { en: "Squash", es: "Squash", de: "Squash", nl: "Squash" }
                ],
                correct: 2,
                explanation: {
                    en: "Badminton is the Olympic sport that uses a shuttlecock, a projectile with feathers or synthetic materials that creates unique flight patterns.",
                    es: "El bádminton es el deporte olímpico que usa un volante, un proyectil con plumas o materiales sintéticos que crea patrones de vuelo únicos.",
                    de: "Badminton ist die olympische Sportart, die einen Federball verwendet, ein Projektil mit Federn oder synthetischen Materialien, das einzigartige Flugmuster erzeugt.",
                    nl: "Badminton is de Olympische sport die een shuttle gebruikt, een projectiel met veren of synthetische materialen dat unieke vliegpatronen creëert."
                }
            },
            {
                question: {
                    en: "What is the length of an Olympic swimming pool?",
                    es: "¿Cuál es la longitud de una piscina olímpica?",
                    de: "Wie lang ist ein olympisches Schwimmbecken?",
                    nl: "Wat is de lengte van een Olympisch zwembad?"
                },
                options: [
                    { en: "25 meters", es: "25 metros", de: "25 Meter", nl: "25 meter" },
                    { en: "40 meters", es: "40 metros", de: "40 Meter", nl: "40 meter" },
                    { en: "50 meters", es: "50 metros", de: "50 Meter", nl: "50 meter" },
                    { en: "100 meters", es: "100 metros", de: "100 Meter", nl: "100 meter" }
                ],
                correct: 2,
                explanation: {
                    en: "An Olympic swimming pool is 50 meters long, also known as a 'long course' pool. This standardized length ensures fair competition worldwide.",
                    es: "Una piscina olímpica mide 50 metros de largo, también conocida como piscina de 'curso largo'. Esta longitud estandarizada asegura competencia justa en todo el mundo.",
                    de: "Ein olympisches Schwimmbecken ist 50 Meter lang, auch als 'Langbahn' bekannt. Diese standardisierte Länge gewährleistet fairen Wettbewerb weltweit.",
                    nl: "Een Olympisch zwembad is 50 meter lang, ook bekend als een 'lange baan' zwembad. Deze gestandaardiseerde lengte zorgt voor eerlijke competitie wereldwijd."
                }
            },
            {
                question: {
                    en: "In Olympic table tennis, up to what score do players typically play?",
                    es: "En tenis de mesa olímpico, ¿hasta qué puntuación juegan típicamente los jugadores?",
                    de: "Im olympischen Tischtennis, bis zu welcher Punktzahl spielen die Spieler normalerweise?",
                    nl: "In Olympisch tafeltennis, tot welke score spelen spelers meestal?"
                },
                options: [
                    { en: "11", es: "11", de: "11", nl: "11" },
                    { en: "15", es: "15", de: "15", nl: "15" },
                    { en: "21", es: "21", de: "21", nl: "21" },
                    { en: "25", es: "25", de: "25", nl: "25" }
                ],
                correct: 0,
                explanation: {
                    en: "Olympic table tennis games are played to 11 points, with players needing to win by at least 2 points. Matches are best of 7 games.",
                    es: "Los juegos de tenis de mesa olímpico se juegan a 11 puntos, con jugadores necesitando ganar por al menos 2 puntos. Los partidos son al mejor de 7 juegos.",
                    de: "Olympische Tischtennisspiele werden auf 11 Punkte gespielt, wobei die Spieler mit mindestens 2 Punkten Vorsprung gewinnen müssen. Matches sind Best-of-7-Spiele.",
                    nl: "Olympische tafeltenniswedstrijden worden gespeeld tot 11 punten, waarbij spelers met minstens 2 punten voorsprong moeten winnen. Wedstrijden zijn best-of-7 games."
                }
            },
            {
                question: {
                    en: "Which Winter Olympic sport involves sweeping?",
                    es: "¿Qué deporte olímpico de invierno involucra barrer?",
                    de: "Welche olympische Wintersportart beinhaltet Kehren?",
                    nl: "Welke Olympische wintersport houdt vegen in?"
                },
                options: [
                    { en: "Ice Hockey", es: "Hockey sobre hielo", de: "Eishockey", nl: "IJshockey" },
                    { en: "Figure Skating", es: "Patinaje artístico", de: "Eiskunstlauf", nl: "Kunstschaatsen" },
                    { en: "Curling", es: "Curling", de: "Curling", nl: "Curling" },
                    { en: "Speed Skating", es: "Patinaje de velocidad", de: "Eisschnelllauf", nl: "Schaatsen" }
                ],
                correct: 2,
                explanation: {
                    en: "Curling involves sweeping the ice in front of the stone to control its speed and direction. Team members sweep vigorously to help guide the stone.",
                    es: "El curling involucra barrer el hielo frente a la piedra para controlar su velocidad y dirección. Los miembros del equipo barren vigorosamente para ayudar a guíar la piedra.",
                    de: "Beim Curling wird das Eis vor dem Stein gefegt, um Geschwindigkeit und Richtung zu kontrollieren. Teammitglieder kehren energisch, um den Stein zu führen.",
                    nl: "Curling houdt het vegen van het ijs voor de steen in om de snelheid en richting te controleren. Teamleden vegen krachtig om de steen te helpen sturen."
                }
            },
            {
                question: {
                    en: "In Olympic volleyball, how many players are on the court per team?",
                    es: "En voleibol olímpico, ¿cuántos jugadores hay en la cancha por equipo?",
                    de: "Im olympischen Volleyball, wie viele Spieler sind pro Team auf dem Feld?",
                    nl: "In Olympisch volleybal, hoeveel spelers zijn er per team op het veld?"
                },
                options: [
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "5", es: "5", de: "5", nl: "5" },
                    { en: "6", es: "6", de: "6", nl: "6" },
                    { en: "7", es: "7", de: "7", nl: "7" }
                ],
                correct: 2,
                explanation: {
                    en: "Olympic volleyball teams have 6 players on the court per team: 3 front row players and 3 back row players, each with specific rotation positions.",
                    es: "Los equipos de voleibol olímpico tienen 6 jugadores en la cancha por equipo: 3 jugadores de primera fila y 3 jugadores de segunda fila, cada uno con posiciones de rotación específicas.",
                    de: "Olympische Volleyballteams haben 6 Spieler pro Team auf dem Feld: 3 Vorderreihen-Spieler und 3 Hinterreihen-Spieler, jeder mit spezifischen Rotationspositionen.",
                    nl: "Olympische volleybalteams hebben 6 spelers op het veld per team: 3 voorste spelers en 3 achterste spelers, elk met specifieke rotatieposities."
                }
            },
            {
                question: {
                    en: "What does 'IOC' stand for?",
                    es: "¿Qué significa 'COI'?",
                    de: "Was bedeutet 'IOC'?",
                    nl: "Wat betekent 'IOC'?"
                },
                options: [
                    { en: "International Olympic Committee", es: "Comité Olímpico Internacional", de: "Internationales Olympisches Komitee", nl: "Internationaal Olympisch Comité" },
                    { en: "International Olympic Council", es: "Consejo Olímpico Internacional", de: "Internationaler Olympischer Rat", nl: "Internationale Olympische Raad" },
                    { en: "International Olympic Commission", es: "Comisión Olímpica Internacional", de: "Internationale Olympische Kommission", nl: "Internationale Olympische Commissie" },
                    { en: "International Olympic Championship", es: "Campeonato Olímpico Internacional", de: "Internationale Olympische Meisterschaft", nl: "Internationaal Olympisch Kampioenschap" }
                ],
                correct: 0,
                explanation: {
                    en: "IOC stands for International Olympic Committee, the organization that governs the Olympic Movement and oversees the Olympic Games worldwide.",
                    es: "IOC significa Comité Olímpico Internacional, la organización que gobierna el Movimiento Olímpico y supervisa los Juegos Olímpicos en todo el mundo.",
                    de: "IOC steht für Internationales Olympisches Komitee, die Organisation, die die Olympische Bewegung regiert und die Olympischen Spiele weltweit überwacht.",
                    nl: "IOC staat voor Internationaal Olympisch Comité, de organisatie die de Olympische Beweging bestuurt en de Olympische Spelen wereldwijd toezicht houdt."
                }
            },
            {
                question: {
                    en: "In Olympic archery, what is the standard distance for competition?",
                    es: "En tiro con arco olímpico, ¿cuál es la distancia estándar para la competición?",
                    de: "Im olympischen Bogenschießen, was ist die Standarddistanz für den Wettkampf?",
                    nl: "In Olympisch boogschieten, wat is de standaardafstand voor competitie?"
                },
                options: [
                    { en: "50 meters", es: "50 metros", de: "50 Meter", nl: "50 meter" },
                    { en: "70 meters", es: "70 metros", de: "70 Meter", nl: "70 meter" },
                    { en: "90 meters", es: "90 metros", de: "90 Meter", nl: "90 meter" },
                    { en: "100 meters", es: "100 metros", de: "100 Meter", nl: "100 meter" }
                ],
                correct: 1,
                explanation: {
                    en: "Olympic archery competition is held at 70 meters distance, testing precision and consistency at this challenging range for both individual and team events.",
                    es: "La competición de tiro con arco olímpico se realiza a 70 metros de distancia, probando la precisión y consistencia en este rango desafiante para eventos individuales y de equipo.",
                    de: "Olympische Bogenschießwettbewerbe finden auf 70 Meter Distanz statt und testen Präzision und Konsistenz auf dieser herausfordernden Reichweite für Einzel- und Teamwettbewerbe.",
                    nl: "Olympische boogschietcompetitie wordt gehouden op 70 meter afstand, waarbij precisie en consistentie worden getest op deze uitdagende afstand voor zowel individuele als teamevenementen."
                }
            },
            {
                question: {
                    en: "Which Olympic Games were the first to be televised?",
                    es: "¿Qué Juegos Olímpicos fueron los primeros en ser televisados?",
                    de: "Welche Olympischen Spiele wurden zum ersten Mal im Fernsehen übertragen?",
                    nl: "Welke Olympische Spelen werden voor het eerst op televisie uitgezonden?"
                },
                options: [
                    { en: "1932 Los Angeles", es: "1932 Los Ángeles", de: "1932 Los Angeles", nl: "1932 Los Angeles" },
                    { en: "1936 Berlin", es: "1936 Berlín", de: "1936 Berlin", nl: "1936 Berlijn" },
                    { en: "1948 London", es: "1948 Londres", de: "1948 London", nl: "1948 Londen" },
                    { en: "1952 Helsinki", es: "1952 Helsinki", de: "1952 Helsinki", nl: "1952 Helsinki" }
                ],
                correct: 1,
                explanation: {
                    en: "The 1936 Berlin Olympics were the first to be televised, though only locally in Berlin. This marked the beginning of Olympic television coverage.",
                    es: "Los Juegos Olímpicos de Berlín de 1936 fueron los primeros en ser televisados, aunque solo localmente en Berlín. Esto marcó el comienzo de la cobertura televisiva olímpica.",
                    de: "Die Olympischen Spiele 1936 in Berlin wurden zum ersten Mal im Fernsehen übertragen, allerdings nur lokal in Berlin. Dies markierte den Beginn der olympischen Fernsehberichterstattung.",
                    nl: "De Olympische Spelen van 1936 in Berlijn werden voor het eerst op televisie uitgezonden, hoewel alleen lokaal in Berlijn. Dit markeerde het begin van de Olympische televisiedekking."
                }
            },
            {
                question: {
                    en: "In Olympic hockey (field hockey), how many players per team are on the field?",
                    es: "En hockey olímpico (hockey sobre césped), ¿cuántos jugadores por equipo hay en el campo?",
                    de: "Im olympischen Hockey (Feldhockey), wie viele Spieler pro Team sind auf dem Feld?",
                    nl: "In Olympisch hockey (veldhockey), hoeveel spelers per team zijn er op het veld?"
                },
                options: [
                    { en: "9", es: "9", de: "9", nl: "9" },
                    { en: "10", es: "10", de: "10", nl: "10" },
                    { en: "11", es: "11", de: "11", nl: "11" },
                    { en: "12", es: "12", de: "12", nl: "12" }
                ],
                correct: 2,
                explanation: {
                    en: "Field hockey teams have 11 players on the field per team, including 10 outfield players and 1 goalkeeper, similar to soccer.",
                    es: "Los equipos de hockey sobre césped tienen 11 jugadores en el campo por equipo, incluyendo 10 jugadores de campo y 1 portero, similar al fútbol.",
                    de: "Feldhockey-Teams haben 11 Spieler pro Team auf dem Feld, einschließlich 10 Feldspieler und 1 Torwart, ähnlich wie beim Fußball.",
                    nl: "Veldhockey teams hebben 11 spelers per team op het veld, inclusief 10 veldspelers en 1 doelman, vergelijkbaar met voetbal."
                }
            },
            {
                question: {
                    en: "What is the Olympic torch relay distance for the Tokyo 2021 Olympics?",
                    es: "¿Cuál fue la distancia del relevo de la antorcha olímpica para los Juegos Olímpicos de Tokio 2021?",
                    de: "Wie lang war die olympische Fackellaufstrecke für die Olympischen Spiele Tokio 2021?",
                    nl: "Wat was de afstand van de Olympische fakkelestafette voor de Olympische Spelen van Tokio 2021?"
                },
                options: [
                    { en: "Approximately 10,000 km", es: "Aproximadamente 10,000 km", de: "Etwa 10.000 km", nl: "Ongeveer 10.000 km" },
                    { en: "Approximately 15,000 km", es: "Aproximadamente 15,000 km", de: "Etwa 15.000 km", nl: "Ongeveer 15.000 km" },
                    { en: "Approximately 20,000 km", es: "Aproximadamente 20,000 km", de: "Etwa 20.000 km", nl: "Ongeveer 20.000 km" },
                    { en: "Only within Tokyo", es: "Solo dentro de Tokio", de: "Nur innerhalb Tokios", nl: "Alleen binnen Tokio" }
                ],
                correct: 3,
                explanation: {
                    en: "The Tokyo 2021 Olympics torch relay was limited to only within Tokyo due to COVID-19 restrictions, instead of the traditional nationwide journey.",
                    es: "El relevo de la antorcha de los Juegos Olímpicos de Tokio 2021 se limitó solo dentro de Tokio debido a las restricciones de COVID-19, en lugar del viaje tradicional por todo el país.",
                    de: "Der Fackellauf der Olympischen Spiele Tokio 2021 war aufgrund der COVID-19-Beschränkungen nur auf Tokio beschränkt, anstatt der traditionellen landesweiten Reise.",
                    nl: "De fakkelestafette van de Olympische Spelen van Tokio 2021 was beperkt tot alleen binnen Tokio vanwege COVID-19-beperkingen, in plaats van de traditionele landelijke reis."
                }
            },
            {
                question: {
                    en: "In Olympic baseball, how many innings constitute a complete game?",
                    es: "En béisbol olímpico, ¿cuántas entradas constituyen un juego completo?",
                    de: "Im olympischen Baseball, wie viele Innings bilden ein komplettes Spiel?",
                    nl: "In Olympisch honkbal, hoeveel innings vormen een complete wedstrijd?"
                },
                options: [
                    { en: "7", es: "7", de: "7", nl: "7" },
                    { en: "8", es: "8", de: "8", nl: "8" },
                    { en: "9", es: "9", de: "9", nl: "9" },
                    { en: "10", es: "10", de: "10", nl: "10" }
                ],
                correct: 2,
                explanation: {
                    en: "Olympic baseball games consist of 9 innings, the same as professional baseball. Each team gets to bat once per inning for a total of 18 half-innings.",
                    es: "Los juegos de béisbol olímpico consisten en 9 entradas, igual que el béisbol profesional. Cada equipo tiene la oportunidad de batear una vez por entrada para un total de 18 medias entradas.",
                    de: "Olympische Baseball-Spiele bestehen aus 9 Innings, genau wie professioneller Baseball. Jedes Team bekommt einmal pro Inning die Gelegenheit zu schlagen, insgesamt 18 halbe Innings.",
                    nl: "Olympische honkbalwedstrijden bestaan uit 9 innings, hetzelfde als professioneel honkbal. Elk team krijgt één keer per inning de kans om te slaan voor een totaal van 18 halve innings."
                }
            },
            {
                question: {
                    en: "Which Olympic sport has events for both team and individual competition?",
                    es: "¿Qué deporte olímpico tiene eventos tanto para competición en equipo como individual?",
                    de: "Welche olympische Sportart hat sowohl Team- als auch Einzelwettkämpfe?",
                    nl: "Welke Olympische sport heeft evenementen voor zowel team- als individuele competitie?"
                },
                options: [
                    { en: "Swimming", es: "Natación", de: "Schwimmen", nl: "Zwemmen" },
                    { en: "Gymnastics", es: "Gimnasia", de: "Turnen", nl: "Gymnastiek" },
                    { en: "Archery", es: "Tiro con arco", de: "Bogenschießen", nl: "Boogschieten" },
                    { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
                ],
                correct: 3,
                explanation: {
                    en: "Swimming, gymnastics, and archery all have both team and individual competition events, allowing athletes to compete for multiple medals in different formats.",
                    es: "La natación, gimnasia y tiro con arco tienen eventos de competición tanto en equipo como individual, permitiendo a los atletas competir por múltiples medallas en diferentes formatos.",
                    de: "Schwimmen, Turnen und Bogenschießen haben alle sowohl Team- als auch Einzelwettkampfveranstaltungen, die es Athleten ermöglichen, um mehrere Medaillen in verschiedenen Formaten zu kämpfen.",
                    nl: "Zwemmen, gymnastiek en boogschieten hebben allemaal zowel team- als individuele competitie-evenementen, waardoor atleten kunnen strijden om meerdere medailles in verschillende formaten."
                }
            },
            {
                question: {
                    en: "What is the minimum age to compete in Olympic gymnastics?",
                    es: "¿Cuál es la edad mínima para competir en gimnasia olímpica?",
                    de: "Was ist das Mindestalter für die Teilnahme an olympischem Turnen?",
                    nl: "Wat is de minimumleeftijd om deel te nemen aan Olympische gymnastiek?"
                },
                options: [
                    { en: "14", es: "14", de: "14", nl: "14" },
                    { en: "15", es: "15", de: "15", nl: "15" },
                    { en: "16", es: "16", de: "16", nl: "16" },
                    { en: "18", es: "18", de: "18", nl: "18" }
                ],
                correct: 2,
                explanation: {
                    en: "The minimum age to compete in Olympic gymnastics is 16 years old, established to protect young athletes' physical and mental development.",
                    es: "La edad mínima para competir en gimnasia olímpica es 16 años, establecida para proteger el desarrollo físico y mental de los atletas jóvenes.",
                    de: "Das Mindestalter für die Teilnahme an olympischem Turnen beträgt 16 Jahre, festgelegt zum Schutz der körperlichen und geistigen Entwicklung junger Athleten.",
                    nl: "De minimumleeftijd om deel te nemen aan Olympische gymnastiek is 16 jaar oud, vastgesteld om de fysieke en mentale ontwikkeling van jonge atleten te beschermen."
                }
            },
            {
                question: {
                    en: "In Olympic rowing, what is the maximum number of rowers in a single boat?",
                    es: "En remo olímpico, ¿cuál es el número máximo de remeros en un solo bote?",
                    de: "Im olympischen Rudern, was ist die maximale Anzahl von Ruderern in einem Boot?",
                    nl: "In Olympisch roeien, wat is het maximale aantal roeiers in één boot?"
                },
                options: [
                    { en: "4", es: "4", de: "4", nl: "4" },
                    { en: "6", es: "6", de: "6", nl: "6" },
                    { en: "8", es: "8", de: "8", nl: "8" },
                    { en: "10", es: "10", de: "10", nl: "10" }
                ],
                correct: 2,
                explanation: {
                    en: "The maximum number of rowers in a single Olympic rowing boat is 8, in the eight-person crew event (plus a coxswain making 9 total people).",
                    es: "El número máximo de remeros en un solo bote de remo olímpico es 8, en el evento de tripulación de ocho personas (más un timonel haciendo 9 personas en total).",
                    de: "Die maximale Anzahl von Ruderern in einem olympischen Ruderboot ist 8, im Achter-Event (plus ein Steuermann, was insgesamt 9 Personen ergibt).",
                    nl: "Het maximale aantal roeiers in één Olympische roeiboot is 8, in het acht-persoons bemanningsevenement (plus een stuurman voor 9 personen totaal)."
                }
            },
            {
                question: {
                    en: "Which Paralympic sport is NOT included in the Olympics?",
                    es: "¿Qué deporte paralímpico NO está incluido en los Juegos Olímpicos?",
                    de: "Welche paralympische Sportart ist NICHT in den Olympischen Spielen enthalten?",
                    nl: "Welke Paralympische sport is NIET opgenomen in de Olympische Spelen?"
                },
                options: [
                    { en: "Swimming", es: "Natación", de: "Schwimmen", nl: "Zwemmen" },
                    { en: "Athletics", es: "Atletismo", de: "Leichtathletik", nl: "Atletiek" },
                    { en: "Goalball", es: "Goalball", de: "Goalball", nl: "Goalball" },
                    { en: "Cycling", es: "Ciclismo", de: "Radsport", nl: "Wielrennen" }
                ],
                correct: 2,
                explanation: {
                    en: "Goalball is a Paralympic sport not included in the Olympics. It was specifically designed for athletes with visual impairments and uses a ball with bells.",
                    es: "Goalball es un deporte paralímpico no incluido en los Juegos Olímpicos. Fue diseñado específicamente para atletas con discapacidades visuales y usa una pelota con campanas.",
                    de: "Goalball ist eine paralympische Sportart, die nicht in den Olympischen Spielen enthalten ist. Sie wurde speziell für Athleten mit Sehbehinderungen entwickelt und verwendet einen Ball mit Glocken.",
                    nl: "Goalball is een Paralympische sport die niet is opgenomen in de Olympische Spelen. Het werd speciaal ontworpen voor atleten met visuele beperkingen en gebruikt een bal met belletjes."
                }
            },
            {
                question: {
                    en: "What is the standard weight of an Olympic shot put for men?",
                    es: "¿Cuál es el peso estándar de una bala olímpica para hombres?",
                    de: "Was ist das Standardgewicht einer olympischen Kugel für Männer?",
                    nl: "Wat is het standaardgewicht van een Olympische kogelstoot voor mannen?"
                },
                options: [
                    { en: "6 kg", es: "6 kg", de: "6 kg", nl: "6 kg" },
                    { en: "7.26 kg", es: "7,26 kg", de: "7,26 kg", nl: "7,26 kg" },
                    { en: "8 kg", es: "8 kg", de: "8 kg", nl: "8 kg" },
                    { en: "10 kg", es: "10 kg", de: "10 kg", nl: "10 kg" }
                ],
                correct: 1,
                explanation: {
                    en: "The standard weight of an Olympic shot put for men is 7.26 kg (16 pounds). This has been the standard since 1896 and tests explosive power.",
                    es: "El peso estándar de una bala olímpica para hombres es 7,26 kg (16 libras). Este ha sido el estándar desde 1896 y prueba la potencia explosiva.",
                    de: "Das Standardgewicht einer olympischen Kugel für Männer beträgt 7,26 kg (16 Pfund). Dies ist seit 1896 der Standard und testet explosive Kraft.",
                    nl: "Het standaardgewicht van een Olympische kogelstoot voor mannen is 7,26 kg (16 pond). Dit is sinds 1896 de standaard en test explosieve kracht."
                }
            },
            {
                question: {
                    en: "In Olympic triathlon, what is the order of events?",
                    es: "En triatlón olímpico, ¿cuál es el orden de los eventos?",
                    de: "Im olympischen Triathlon, was ist die Reihenfolge der Ereignisse?",
                    nl: "In Olympische triatlon, wat is de volgorde van evenementen?"
                },
                options: [
                    { en: "Run, Bike, Swim", es: "Correr, Bicicleta, Nadar", de: "Laufen, Radfahren, Schwimmen", nl: "Hardlopen, Fietsen, Zwemmen" },
                    { en: "Swim, Bike, Run", es: "Nadar, Bicicleta, Correr", de: "Schwimmen, Radfahren, Laufen", nl: "Zwemmen, Fietsen, Hardlopen" },
                    { en: "Bike, Swim, Run", es: "Bicicleta, Nadar, Correr", de: "Radfahren, Schwimmen, Laufen", nl: "Fietsen, Zwemmen, Hardlopen" },
                    { en: "Swim, Run, Bike", es: "Nadar, Correr, Bicicleta", de: "Schwimmen, Laufen, Radfahren", nl: "Zwemmen, Hardlopen, Fietsen" }
                ],
                correct: 1,
                explanation: {
                    en: "Olympic triathlon follows the order: Swim, Bike, Run (1.5km swim, 40km bike, 10km run). This sequence tests endurance across three disciplines.",
                    es: "El triatlón olímpico sigue el orden: Nadar, Bicicleta, Correr (1,5km natación, 40km bicicleta, 10km carrera). Esta secuencia prueba la resistencia en tres disciplinas.",
                    de: "Olympischer Triathlon folgt der Reihenfolge: Schwimmen, Radfahren, Laufen (1,5km Schwimmen, 40km Radfahren, 10km Laufen). Diese Sequenz testet Ausdauer in drei Disziplinen.",
                    nl: "Olympische triatlon volgt de volgorde: Zwemmen, Fietsen, Hardlopen (1,5km zwemmen, 40km fietsen, 10km hardlopen). Deze volgorde test uithoudingsvermogen over drie disciplines."
                }
            },
            {
                question: {
                    en: "Which Olympic Games were the most expensive to host?",
                    es: "¿Qué Juegos Olímpicos fueron los más caros de organizar?",
                    de: "Welche Olympischen Spiele waren am teuersten zu veranstalten?",
                    nl: "Welke Olympische Spelen waren het duurste om te organiseren?"
                },
                options: [
                    { en: "2004 Athens", es: "2004 Atenas", de: "2004 Athen", nl: "2004 Athene" },
                    { en: "2008 Beijing", es: "2008 Pekín", de: "2008 Peking", nl: "2008 Peking" },
                    { en: "2012 London", es: "2012 Londres", de: "2012 London", nl: "2012 Londen" },
                    { en: "2014 Sochi (Winter)", es: "2014 Sochi (Invierno)", de: "2014 Sotschi (Winter)", nl: "2014 Sochi (Winter)" }
                ],
                correct: 3,
                explanation: {
                    en: "The 2014 Sochi Winter Olympics were the most expensive to host, costing over $50 billion, largely due to infrastructure development and venue construction.",
                    es: "Los Juegos Olímpicos de Invierno de Sochi 2014 fueron los más caros de organizar, costando más de $50 mil millones, principalmente debido al desarrollo de infraestructura y construcción de sedes.",
                    de: "Die Olympischen Winterspiele 2014 in Sotschi waren am teuersten zu veranstalten und kosteten über 50 Milliarden Dollar, hauptsächlich aufgrund von Infrastrukturentwicklung und Sporstättenbau.",
                    nl: "De Olympische Winterspelen van 2014 in Sochi waren het duurste om te organiseren, met kosten van meer dan $50 miljard, voornamelijk vanwege infrastructuurontwikkeling en venuebouw."
                }
            },
            {
                question: {
                    en: "In Olympic tennis, what type of court surface is used?",
                    es: "En tenis olímpico, ¿qué tipo de superficie de cancha se usa?",
                    de: "Im olympischen Tennis, welche Art von Platzbelag wird verwendet?",
                    nl: "In Olympisch tennis, welk type baanoppervlak wordt gebruikt?"
                },
                options: [
                    { en: "Clay", es: "Arcilla", de: "Sand", nl: "Gravel" },
                    { en: "Grass", es: "Césped", de: "Rasen", nl: "Gras" },
                    { en: "Hard court", es: "Cancha dura", de: "Hartplatz", nl: "Hardcourt" },
                    { en: "Varies by host city", es: "Varía según la ciudad anfitriona", de: "Variiert je nach Gastgeberstadt", nl: "Varieert per gaststad" }
                ],
                correct: 2,
                explanation: {
                    en: "Olympic tennis is played on hard courts, providing consistent bounce and playing conditions. The surface varies between indoor and outdoor hard courts depending on the venue.",
                    es: "El tenis olímpico se juega en canchas duras, proporcionando rebote consistente y condiciones de juego. La superficie varía entre canchas duras interiores y exteriores dependiendo del lugar.",
                    de: "Olympisches Tennis wird auf Hartplätzen gespielt, die konsistenten Sprung und Spielbedingungen bieten. Der Belag variiert zwischen Innen- und Außen-Hartplätzen je nach Austragungsort.",
                    nl: "Olympisch tennis wordt gespeeld op hardcourts, wat consistente stuit en speelomstandigheden biedt. Het oppervlak varieert tussen binnen- en buiten hardcourts afhankelijk van de locatie."
                }
            },
            {
                question: {
                    en: "What sport uses a puck?",
                    es: "¿Qué deporte usa un disco?",
                    de: "Welcher Sport verwendet einen Puck?",
                    nl: "Welke sport gebruikt een puck?"
                },
                options: [
                    { en: "Hockey", es: "Hockey", de: "Hockey", nl: "Hockey" },
                    { en: "Soccer", es: "Fútbol", de: "Fußball", nl: "Voetbal" },
                    { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" },
                    { en: "Basketball", es: "Baloncesto", de: "Basketball", nl: "Basketbal" }
                ],
                correct: 0,
                explanation: {
                    en: "Hockey uses a puck, which is a small, flat, round disk made of rubber that players hit with hockey sticks.",
                    es: "El hockey usa un disco, que es un pequeño disco plano y redondo hecho de goma que los jugadores golpean con palos de hockey.",
                    de: "Hockey verwendet einen Puck, eine kleine, flache, runde Scheibe aus Gummi, die Spieler mit Hockeyschlägern schlagen.",
                    nl: "Hockey gebruikt een puck, een kleine, platte, ronde schijf gemaakt van rubber die spelers raken met hockeysticks."
                }
            },
            {
                question: {
                    en: "How many points is a touchdown worth in American football?",
                    es: "¿Cuántos puntos vale un touchdown en fútbol americano?",
                    de: "Wie viele Punkte ist ein Touchdown im American Football wert?",
                    nl: "Hoeveel punten is een touchdown waard in American football?"
                },
                options: [
                    { en: "6", es: "6", de: "6", nl: "6" },
                    { en: "7", es: "7", de: "7", nl: "7" },
                    { en: "3", es: "3", de: "3", nl: "3" },
                    { en: "5", es: "5", de: "5", nl: "5" }
                ],
                correct: 0,
                explanation: {
                    en: "A touchdown in American football is worth 6 points. Teams can then attempt an extra point kick for 1 additional point.",
                    es: "Un touchdown en fútbol americano vale 6 puntos. Los equipos pueden entonces intentar una patada de punto extra por 1 punto adicional.",
                    de: "Ein Touchdown im American Football ist 6 Punkte wert. Teams können dann einen Extra-Punkt-Kick für 1 zusätzlichen Punkt versuchen.",
                    nl: "Een touchdown in American football is 6 punten waard. Teams kunnen dan een extra punt trap proberen voor 1 extra punt."
                }
            },
            {
                question: {
                    en: "What is the maximum score in bowling?",
                    es: "¿Cuál es la puntuación máxima en bolos?",
                    de: "Was ist die maximale Punktzahl beim Bowling?",
                    nl: "Wat is de maximale score bij bowlen?"
                },
                options: [
                    { en: "300", es: "300", de: "300", nl: "300" },
                    { en: "200", es: "200", de: "200", nl: "200" },
                    { en: "250", es: "250", de: "250", nl: "250" },
                    { en: "400", es: "400", de: "400", nl: "400" }
                ],
                correct: 0,
                explanation: {
                    en: "The maximum score in bowling is 300, which is achieved by bowling 12 consecutive strikes in a single game.",
                    es: "La puntuación máxima en bolos es 300, que se logra haciendo 12 strikes consecutivos en un solo juego.",
                    de: "Die maximale Punktzahl beim Bowling ist 300, die durch 12 aufeinanderfolgende Strikes in einem Spiel erreicht wird.",
                    nl: "De maximale score bij bowlen is 300, wat wordt bereikt door 12 opeenvolgende strikes in één spel te gooien."
                }
            },
            {
                question: {
                    en: "Which sport is played on the largest field?",
                    es: "¿Qué deporte se juega en el campo más grande?",
                    de: "Welcher Sport wird auf dem größten Feld gespielt?",
                    nl: "Welke sport wordt gespeeld op het grootste veld?"
                },
                options: [
                    { en: "Soccer", es: "Fútbol", de: "Fußball", nl: "Voetbal" },
                    { en: "American football", es: "Fútbol americano", de: "American Football", nl: "American football" },
                    { en: "Cricket", es: "Cricket", de: "Cricket", nl: "Cricket" },
                    { en: "Baseball", es: "Béisbol", de: "Baseball", nl: "Honkbal" }
                ],
                correct: 2,
                explanation: {
                    en: "Cricket is played on the largest field among these sports. Cricket fields have no standard size but are typically much larger than soccer, American football, or baseball fields.",
                    es: "El cricket se juega en el campo más grande entre estos deportes. Los campos de cricket no tienen un tamaño estándar pero son típicamente mucho más grandes que los campos de fútbol, fútbol americano o béisbol.",
                    de: "Cricket wird auf dem größten Feld unter diesen Sportarten gespielt. Cricket-Felder haben keine Standardgröße, sind aber typischerweise viel größer als Fußball-, American Football- oder Baseball-Felder.",
                    nl: "Cricket wordt gespeeld op het grootste veld van deze sporten. Cricket velden hebben geen standaardgrootte maar zijn meestal veel groter dan voetbal, American football of honkbal velden."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/sports', level2);
    }
})();