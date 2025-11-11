// February Daily Challenges - 29 days × 5 questions each = 145 total questions (includes leap year day 29)
// Each day features historically accurate events, famous birthdays/deaths, and seasonal themes
(function() {
  
  const februaryChallenges = {
    name: {
      en: "February Daily Challenges",
      es: "Desafíos Diarios de Febrero", 
      de: "Februar Tägliche Herausforderungen",
      nl: "Februari Dagelijkse Uitdagingen"
    },
    
    // Day 1 - February 1st: Space Shuttle Columbia Disaster & Freedom of Slaves
    day1: [
      {
        question: {
          en: "On February 1, 2003, which space shuttle tragically disintegrated during re-entry, killing all seven crew members?",
          es: "El 1 de febrero de 2003, ¿qué transbordador espacial se desintegró trágicamente durante el reingreso, matando a los siete miembros de la tripulación?",
          de: "Am 1. Februar 2003 zerbrach welches Space Shuttle tragisch beim Wiedereintritt und tötete alle sieben Besatzungsmitglieder?",
          nl: "Op 1 februari 2003 desintegreerde welke spaceshuttle tragisch tijdens de terugkeer, waarbij alle zeven bemanningsleden om het leven kwamen?"
        },
        options: [
          { en: "Discovery", es: "Discovery", de: "Discovery", nl: "Discovery" },
          { en: "Columbia", es: "Columbia", de: "Columbia", nl: "Columbia" },
          { en: "Challenger", es: "Challenger", de: "Challenger", nl: "Challenger" },
          { en: "Atlantis", es: "Atlantis", de: "Atlantis", nl: "Atlantis" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Space Shuttle Columbia broke apart during atmospheric re-entry on February 1, 2003, over Texas and Louisiana. The disaster was caused by a piece of foam insulation that broke off during launch and damaged the shuttle's heat protection system. All seven astronauts aboard were killed, leading to a 29-month suspension of the shuttle program.",
          es: "El transbordador espacial Columbia se desintegró durante el reingreso atmosférico el 1 de febrero de 2003, sobre Texas y Luisiana. El desastre fue causado por un trozo de aislamiento de espuma que se desprendió durante el lanzamiento y dañó el sistema de protección térmica del transbordador. Los siete astronautas a bordo murieron, lo que llevó a una suspensión de 29 meses del programa de transbordadores.",
          de: "Das Space Shuttle Columbia zerbrach beim atmosphärischen Wiedereintritt am 1. Februar 2003 über Texas und Louisiana. Die Katastrophe wurde durch ein Stück Schaumisolierung verursacht, das sich beim Start löste und das Hitzeschutzsystem des Shuttles beschädigte. Alle sieben Astronauten an Bord kamen ums Leben, was zu einer 29-monatigen Aussetzung des Shuttle-Programms führte.",
          nl: "Space Shuttle Columbia brak uiteen tijdens de atmosferische terugkeer op 1 februari 2003, boven Texas en Louisiana. De ramp werd veroorzaakt door een stuk schuimisolatie dat tijdens de lancering afbrak en het hittebeschermingssysteem van de shuttle beschadigde. Alle zeven astronauten aan boord kwamen om het leven, wat leidde tot een opschorting van 29 maanden van het shuttleprogramma."
        }
      },
      {
        question: {
          en: "On February 1, 1865, President Abraham Lincoln approved the 13th Amendment to the U.S. Constitution. What did it abolish?",
          es: "El 1 de febrero de 1865, el presidente Abraham Lincoln aprobó la 13ª Enmienda a la Constitución de EE.UU. ¿Qué abolió?",
          de: "Am 1. Februar 1865 genehmigte Präsident Abraham Lincoln den 13. Zusatzartikel zur US-Verfassung. Was schaffte er ab?",
          nl: "Op 1 februari 1865 keurde president Abraham Lincoln het 13e Amendement op de Amerikaanse Grondwet goed. Wat schafte het af?"
        },
        options: [
          { en: "Segregation", es: "Segregación", de: "Rassentrennung", nl: "Segregatie" },
          { en: "Prohibition", es: "Prohibición", de: "Prohibition", nl: "Drooglegging" },
          { en: "Slavery", es: "Esclavitud", de: "Sklaverei", nl: "Slavernij" },
          { en: "Poll taxes", es: "Impuestos electorales", de: "Wahlsteuern", nl: "Kiesbelasting" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The 13th Amendment abolished slavery and involuntary servitude throughout the United States. Lincoln signed it on February 1, 1865, and it was ratified by the states on December 6, 1865. This landmark amendment freed approximately four million enslaved people and fundamentally transformed American society.",
          es: "La 13ª Enmienda abolió la esclavitud y la servidumbre involuntaria en todo Estados Unidos. Lincoln la firmó el 1 de febrero de 1865 y fue ratificada por los estados el 6 de diciembre de 1865. Esta enmienda histórica liberó a aproximadamente cuatro millones de personas esclavizadas y transformó fundamentalmente la sociedad estadounidense.",
          de: "Der 13. Zusatzartikel schaffte die Sklaverei und unfreiwillige Knechtschaft in den gesamten Vereinigten Staaten ab. Lincoln unterzeichnete ihn am 1. Februar 1865, und er wurde von den Staaten am 6. Dezember 1865 ratifiziert. Dieser Meilenstein befreite etwa vier Millionen versklavte Menschen und verwandelte die amerikanische Gesellschaft grundlegend.",
          nl: "Het 13e Amendement schafte slavernij en onvrijwillige dienstbaarheid in de hele Verenigde Staten af. Lincoln ondertekende het op 1 februari 1865 en het werd geratificeerd door de staten op 6 december 1865. Dit historische amendement bevrijdde ongeveer vier miljoen tot slaaf gemaakte mensen en transformeerde de Amerikaanse samenleving fundamenteel."
        }
      },
      {
        question: {
          en: "In what year did the first session of the Supreme Court of the United States convene on February 1st?",
          es: "¿En qué año se convocó la primera sesión de la Corte Suprema de los Estados Unidos el 1 de febrero?",
          de: "In welchem Jahr trat am 1. Februar die erste Sitzung des Obersten Gerichtshofs der Vereinigten Staaten zusammen?",
          nl: "In welk jaar kwam de eerste zitting van het Hooggerechtshof van de Verenigde Staten bijeen op 1 februari?"
        },
        options: [
          { en: "1787", es: "1787", de: "1787", nl: "1787" },
          { en: "1800", es: "1800", de: "1800", nl: "1800" },
          { en: "1776", es: "1776", de: "1776", nl: "1776" },
          { en: "1790", es: "1790", de: "1790", nl: "1790" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Supreme Court of the United States held its first session on February 1, 1790, in New York City at the Royal Exchange Building. Only three of the six justices were present at this historic first meeting. The Court has since become the highest judicial authority in the United States, interpreting the Constitution and federal law.",
          es: "La Corte Suprema de los Estados Unidos celebró su primera sesión el 1 de febrero de 1790 en la ciudad de Nueva York en el edificio Royal Exchange. Solo tres de los seis jueces estuvieron presentes en esta histórica primera reunión. Desde entonces, la Corte se ha convertido en la máxima autoridad judicial de los Estados Unidos, interpretando la Constitución y la ley federal.",
          de: "Der Oberste Gerichtshof der Vereinigten Staaten hielt seine erste Sitzung am 1. Februar 1790 in New York City im Royal Exchange Building ab. Nur drei der sechs Richter waren bei diesem historischen ersten Treffen anwesend. Seitdem ist das Gericht zur höchsten Justizbehörde der Vereinigten Staaten geworden, die die Verfassung und das Bundesrecht auslegt.",
          nl: "Het Hooggerechtshof van de Verenigde Staten hield zijn eerste zitting op 1 februari 1790 in New York City in het Royal Exchange Building. Slechts drie van de zes rechters waren aanwezig bij deze historische eerste bijeenkomst. Het Hof is sindsdien de hoogste rechterlijke autoriteit in de Verenigde Staten geworden, die de Grondwet en federale wetgeving interpreteert."
        }
      },
      {
        question: {
          en: "On February 1, 1884, the first edition of which famous reference book was published at Oxford University?",
          es: "El 1 de febrero de 1884, se publicó la primera edición de qué famoso libro de referencia en la Universidad de Oxford?",
          de: "Am 1. Februar 1884 wurde an der Universität Oxford die erste Ausgabe welches berühmten Nachschlagewerks veröffentlicht?",
          nl: "Op 1 februari 1884 werd de eerste editie van welk beroemd naslagwerk gepubliceerd aan de Universiteit van Oxford?"
        },
        options: [
          { en: "Oxford English Dictionary", es: "Diccionario de inglés Oxford", de: "Oxford English Dictionary", nl: "Oxford English Dictionary" },
          { en: "The Times Atlas", es: "The Times Atlas", de: "The Times Atlas", nl: "The Times Atlas" },
          { en: "Encyclopedia Britannica", es: "Enciclopedia Británica", de: "Encyclopædia Britannica", nl: "Encyclopedia Britannica" },
          { en: "Webster's Dictionary", es: "Diccionario de Webster", de: "Webster's Dictionary", nl: "Webster's Dictionary" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The first edition (or fascicle) of the Oxford English Dictionary was published on February 1, 1884. It took 70 years to complete the entire first edition, which was finished in 1928. The OED remains the most comprehensive and authoritative dictionary of the English language, containing over 600,000 words.",
          es: "La primera edición (o fascículo) del Diccionario de inglés Oxford se publicó el 1 de febrero de 1884. Tomó 70 años completar toda la primera edición, que se terminó en 1928. El OED sigue siendo el diccionario más completo y autorizado del idioma inglés, conteniendo más de 600,000 palabras.",
          de: "Die erste Ausgabe (oder Lieferung) des Oxford English Dictionary wurde am 1. Februar 1884 veröffentlicht. Es dauerte 70 Jahre, um die gesamte erste Ausgabe zu vervollständigen, die 1928 fertiggestellt wurde. Das OED bleibt das umfassendste und maßgeblichste Wörterbuch der englischen Sprache mit über 600.000 Wörtern.",
          nl: "De eerste editie (of aflevering) van het Oxford English Dictionary werd gepubliceerd op 1 februari 1884. Het duurde 70 jaar om de hele eerste editie te voltooien, die in 1928 werd voltooid. De OED blijft het meest uitgebreide en gezaghebbende woordenboek van de Engelse taal, met meer dan 600.000 woorden."
        }
      },
      {
        question: {
          en: "On February 1, 1960, four African American students began a sit-in at a segregated lunch counter in which U.S. city?",
          es: "El 1 de febrero de 1960, cuatro estudiantes afroamericanos comenzaron una sentada en un mostrador de almuerzo segregado en qué ciudad de EE.UU.?",
          de: "Am 1. Februar 1960 begannen vier afroamerikanische Studenten ein Sit-in an einer getrennten Essenstheke in welcher US-Stadt?",
          nl: "Op 1 februari 1960 begonnen vier Afro-Amerikaanse studenten een sit-in bij een gesegregeerde lunchbar in welke Amerikaanse stad?"
        },
        options: [
          { en: "Greensboro, North Carolina", es: "Greensboro, Carolina del Norte", de: "Greensboro, North Carolina", nl: "Greensboro, North Carolina" },
          { en: "Atlanta, Georgia", es: "Atlanta, Georgia", de: "Atlanta, Georgia", nl: "Atlanta, Georgia" },
          { en: "Memphis, Tennessee", es: "Memphis, Tennessee", de: "Memphis, Tennessee", nl: "Memphis, Tennessee" },
          { en: "Birmingham, Alabama", es: "Birmingham, Alabama", de: "Birmingham, Alabama", nl: "Birmingham, Alabama" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Four students from North Carolina A&T State University staged a sit-in at a Woolworth's lunch counter in Greensboro on February 1, 1960. This peaceful protest against racial segregation sparked similar sit-ins across the South and became a pivotal moment in the Civil Rights Movement. Within months, the lunch counter was desegregated.",
          es: "Cuatro estudiantes de la Universidad Estatal de Carolina del Norte A&T realizaron una sentada en un mostrador de almuerzo de Woolworth en Greensboro el 1 de febrero de 1960. Esta protesta pacífica contra la segregación racial provocó sentadas similares en todo el sur y se convirtió en un momento crucial en el Movimiento de Derechos Civiles. En cuestión de meses, el mostrador de almuerzo fue desegregado.",
          de: "Vier Studenten der North Carolina A&T State University veranstalteten am 1. Februar 1960 ein Sit-in an einer Woolworth-Essenstheke in Greensboro. Dieser friedliche Protest gegen die Rassentrennung löste ähnliche Sit-ins im gesamten Süden aus und wurde zu einem entscheidenden Moment in der Bürgerrechtsbewegung. Innerhalb von Monaten wurde die Essenstheke desegregiert.",
          nl: "Vier studenten van de North Carolina A&T State University hielden een sit-in bij een Woolworth lunchbar in Greensboro op 1 februari 1960. Dit vreedzame protest tegen rassenscheiding leidde tot vergelijkbare sit-ins in het hele Zuiden en werd een cruciaal moment in de Burgerrechtenbeweging. Binnen enkele maanden werd de lunchbar gedesegregeerd."
        }
      }
    ],

    // Day 2 - February 2nd: Groundhog Day & Treaty of Guadalupe Hidalgo
    day2: [
      {
        question: {
          en: "On February 2, 1848, the Treaty of Guadalupe Hidalgo ended which war?",
          es: "El 2 de febrero de 1848, el Tratado de Guadalupe Hidalgo terminó qué guerra?",
          de: "Am 2. Februar 1848 beendete der Vertrag von Guadalupe Hidalgo welchen Krieg?",
          nl: "Op 2 februari 1848 beëindigde het Verdrag van Guadalupe Hidalgo welke oorlog?"
        },
        options: [
          { en: "War of 1812", es: "Guerra de 1812", de: "Krieg von 1812", nl: "Oorlog van 1812" },
          { en: "Mexican-American War", es: "Guerra México-Estados Unidos", de: "Mexikanisch-Amerikanischer Krieg", nl: "Mexicaans-Amerikaanse Oorlog" },
          { en: "Civil War", es: "Guerra Civil", de: "Bürgerkrieg", nl: "Burgeroorlog" },
          { en: "Texas Revolution", es: "Revolución de Texas", de: "Texanische Revolution", nl: "Texaanse Revolutie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Treaty of Guadalupe Hidalgo, signed on February 2, 1848, ended the Mexican-American War. Mexico ceded approximately 525,000 square miles of territory to the United States, including present-day California, Nevada, Utah, Arizona, and parts of Colorado, Wyoming, and New Mexico. The U.S. paid Mexico $15 million in compensation.",
          es: "El Tratado de Guadalupe Hidalgo, firmado el 2 de febrero de 1848, terminó la Guerra México-Estados Unidos. México cedió aproximadamente 525,000 millas cuadradas de territorio a Estados Unidos, incluyendo la actual California, Nevada, Utah, Arizona y partes de Colorado, Wyoming y Nuevo México. Estados Unidos pagó a México $15 millones en compensación.",
          de: "Der Vertrag von Guadalupe Hidalgo, unterzeichnet am 2. Februar 1848, beendete den Mexikanisch-Amerikanischen Krieg. Mexiko trat etwa 525.000 Quadratmeilen Territorium an die Vereinigten Staaten ab, darunter das heutige Kalifornien, Nevada, Utah, Arizona und Teile von Colorado, Wyoming und New Mexico. Die USA zahlten Mexiko eine Entschädigung von 15 Millionen Dollar.",
          nl: "Het Verdrag van Guadalupe Hidalgo, ondertekend op 2 februari 1848, beëindigde de Mexicaans-Amerikaanse Oorlog. Mexico stond ongeveer 525.000 vierkante mijl grondgebied af aan de Verenigde Staten, inclusief het huidige Californië, Nevada, Utah, Arizona en delen van Colorado, Wyoming en New Mexico. De VS betaalden Mexico $15 miljoen aan compensatie."
        }
      },
      {
        question: {
          en: "What popular North American tradition is celebrated every February 2nd?",
          es: "¿Qué tradición popular de América del Norte se celebra cada 2 de febrero?",
          de: "Welche beliebte nordamerikanische Tradition wird jedes Jahr am 2. Februar gefeiert?",
          nl: "Welke populaire Noord-Amerikaanse traditie wordt elk jaar op 2 februari gevierd?"
        },
        options: [
          { en: "Flag Day", es: "Día de la Bandera", de: "Tag der Flagge", nl: "Vlaggendag" },
          { en: "Groundhog Day", es: "Día de la Marmota", de: "Murmeltiertag", nl: "Marmottendag" },
          { en: "Presidents' Day", es: "Día de los Presidentes", de: "Präsidententag", nl: "Presidenten Dag" },
          { en: "Arbor Day", es: "Día del Árbol", de: "Tag des Baumes", nl: "Boomfeestdag" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Groundhog Day is celebrated on February 2nd in the United States and Canada. According to tradition, if a groundhog emerges from its burrow and sees its shadow, winter will last six more weeks. The most famous groundhog is Punxsutawney Phil in Pennsylvania. The tradition has German origins and became popular in the 1880s.",
          es: "El Día de la Marmota se celebra el 2 de febrero en Estados Unidos y Canadá. Según la tradición, si una marmota emerge de su madriguera y ve su sombra, el invierno durará seis semanas más. La marmota más famosa es Punxsutawney Phil en Pensilvania. La tradición tiene orígenes alemanes y se hizo popular en la década de 1880.",
          de: "Der Murmeltiertag wird am 2. Februar in den Vereinigten Staaten und Kanada gefeiert. Der Tradition nach wird der Winter sechs Wochen länger dauern, wenn ein Murmeltier aus seinem Bau kommt und seinen Schatten sieht. Das berühmteste Murmeltier ist Punxsutawney Phil in Pennsylvania. Die Tradition hat deutsche Ursprünge und wurde in den 1880er Jahren populär.",
          nl: "Marmottendag wordt gevierd op 2 februari in de Verenigde Staten en Canada. Volgens de traditie zal de winter nog zes weken duren als een marmot uit zijn hol komt en zijn schaduw ziet. De beroemdste marmot is Punxsutawney Phil in Pennsylvania. De traditie heeft Duitse oorsprong en werd populair in de jaren 1880."
        }
      },
      {
        question: {
          en: "On February 2, 1536, the Spanish city of Buenos Aires was founded. In which modern country is it located?",
          es: "El 2 de febrero de 1536, se fundó la ciudad española de Buenos Aires. ¿En qué país moderno se encuentra?",
          de: "Am 2. Februar 1536 wurde die spanische Stadt Buenos Aires gegründet. In welchem modernen Land liegt sie?",
          nl: "Op 2 februari 1536 werd de Spaanse stad Buenos Aires gesticht. In welk modern land ligt het?"
        },
        options: [
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Uruguay", es: "Uruguay", de: "Uruguay", nl: "Uruguay" },
          { en: "Paraguay", es: "Paraguay", de: "Paraguay", nl: "Paraguay" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Buenos Aires, the capital of Argentina, was first founded by Spanish explorer Pedro de Mendoza on February 2, 1536. The settlement was abandoned in 1541 due to indigenous attacks and later permanently re-established in 1580. Today, Buenos Aires is one of South America's largest and most important cities, known as the 'Paris of South America.'",
          es: "Buenos Aires, la capital de Argentina, fue fundada por primera vez por el explorador español Pedro de Mendoza el 2 de febrero de 1536. El asentamiento fue abandonado en 1541 debido a ataques indígenas y luego se restableció permanentemente en 1580. Hoy, Buenos Aires es una de las ciudades más grandes e importantes de América del Sur, conocida como el 'París de América del Sur.'",
          de: "Buenos Aires, die Hauptstadt Argentiniens, wurde erstmals am 2. Februar 1536 vom spanischen Entdecker Pedro de Mendoza gegründet. Die Siedlung wurde 1541 aufgrund indigener Angriffe aufgegeben und später 1580 dauerhaft neu gegründet. Heute ist Buenos Aires eine der größten und wichtigsten Städte Südamerikas, bekannt als das 'Paris Südamerikas.'",
          nl: "Buenos Aires, de hoofdstad van Argentinië, werd voor het eerst gesticht door de Spaanse ontdekkingsreiziger Pedro de Mendoza op 2 februari 1536. De nederzetting werd verlaten in 1541 vanwege inheemse aanvallen en later permanent heropgericht in 1580. Vandaag is Buenos Aires een van de grootste en belangrijkste steden van Zuid-Amerika, bekend als het 'Parijs van Zuid-Amerika.'"
        }
      },
      {
        question: {
          en: "On February 2, 1943, which major World War II battle ended with a German defeat that became a turning point?",
          es: "El 2 de febrero de 1943, ¿qué importante batalla de la Segunda Guerra Mundial terminó con una derrota alemana que se convirtió en un punto de inflexión?",
          de: "Am 2. Februar 1943 endete welche wichtige Schlacht des Zweiten Weltkriegs mit einer deutschen Niederlage, die zum Wendepunkt wurde?",
          nl: "Op 2 februari 1943 eindigde welke belangrijke Tweede Wereldoorlogslag met een Duitse nederlaag die een keerpunt werd?"
        },
        options: [
          { en: "Battle of Kursk", es: "Batalla de Kursk", de: "Schlacht bei Kursk", nl: "Slag bij Koersk" },
          { en: "Battle of the Bulge", es: "Batalla de las Ardenas", de: "Ardennenoffensive", nl: "Slag om de Ardennen" },
          { en: "Battle of Stalingrad", es: "Batalla de Stalingrado", de: "Schlacht von Stalingrad", nl: "Slag om Stalingrad" },
          { en: "Battle of Berlin", es: "Batalla de Berlín", de: "Schlacht um Berlin", nl: "Slag om Berlijn" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Battle of Stalingrad ended on February 2, 1943, with the surrender of German Field Marshal Friedrich Paulus and his remaining forces. This brutal five-month battle resulted in over 2 million casualties and marked the beginning of Germany's retreat on the Eastern Front. It is considered one of the bloodiest battles in history and a major turning point in World War II.",
          es: "La Batalla de Stalingrado terminó el 2 de febrero de 1943 con la rendición del mariscal de campo alemán Friedrich Paulus y sus fuerzas restantes. Esta brutal batalla de cinco meses resultó en más de 2 millones de bajas y marcó el comienzo de la retirada alemana en el Frente Oriental. Se considera una de las batallas más sangrientas de la historia y un punto de inflexión importante en la Segunda Guerra Mundial.",
          de: "Die Schlacht von Stalingrad endete am 2. Februar 1943 mit der Kapitulation des deutschen Feldmarschalls Friedrich Paulus und seiner verbliebenen Truppen. Diese brutale fünfmonatige Schlacht führte zu über 2 Millionen Opfern und markierte den Beginn des deutschen Rückzugs an der Ostfront. Sie gilt als eine der blutigsten Schlachten der Geschichte und als wichtiger Wendepunkt im Zweiten Weltkrieg.",
          nl: "De Slag om Stalingrad eindigde op 2 februari 1943 met de overgave van de Duitse veldmaarschalk Friedrich Paulus en zijn resterende troepen. Deze brutale vijf maanden durende slag resulteerde in meer dan 2 miljoen slachtoffers en markeerde het begin van de Duitse terugtocht aan het Oostfront. Het wordt beschouwd als een van de bloedigste veldslagen in de geschiedenis en een belangrijk keerpunt in de Tweede Wereldoorlog."
        }
      },
      {
        question: {
          en: "On February 2, 1982, the town of Latur in India experienced what unusual weather phenomenon?",
          es: "El 2 de febrero de 1982, la ciudad de Latur en India experimentó qué fenómeno meteorológico inusual?",
          de: "Am 2. Februar 1982 erlebte die Stadt Latur in Indien welches ungewöhnliche Wetterphänomen?",
          nl: "Op 2 februari 1982 maakte de stad Latur in India welk ongewoon weerfenomeen mee?"
        },
        options: [
          { en: "Ball lightning", es: "Rayos en bola", de: "Kugelblitz", nl: "Bliksembal" },
          { en: "Blood rain", es: "Lluvia de sangre", de: "Blutregen", nl: "Bloedregens" },
          { en: "Green snow", es: "Nieve verde", de: "Grüner Schnee", nl: "Groene sneeuw" },
          { en: "Fish falling from the sky", es: "Peces cayendo del cielo", de: "Fische vom Himmel fallend", nl: "Vissen die uit de lucht vielen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On February 2, 1982, thousands of fish fell from the sky in Latur, India, during a heavy thunderstorm. This rare meteorological phenomenon occurs when waterspouts or tornadoes suck up water and small fish from bodies of water and deposit them miles away. Such 'animal rain' events have been documented throughout history in various locations worldwide.",
          es: "El 2 de febrero de 1982, miles de peces cayeron del cielo en Latur, India, durante una fuerte tormenta eléctrica. Este raro fenómeno meteorológico ocurre cuando trombas marinas o tornados succionan agua y peces pequeños de cuerpos de agua y los depositan a millas de distancia. Tales eventos de 'lluvia animal' han sido documentados a lo largo de la historia en varios lugares del mundo.",
          de: "Am 2. Februar 1982 fielen während eines schweren Gewitters Tausende von Fischen vom Himmel in Latur, Indien. Dieses seltene meteorologische Phänomen tritt auf, wenn Wasserhosen oder Tornados Wasser und kleine Fische aus Gewässern aufsaugen und sie Meilen entfernt ablagern. Solche 'Tierregen'-Ereignisse wurden im Laufe der Geschichte an verschiedenen Orten weltweit dokumentiert.",
          nl: "Op 2 februari 1982 vielen duizenden vissen uit de lucht in Latur, India, tijdens een zware onweersbui. Dit zeldzame meteorologische fenomeen treedt op wanneer waterhozen of tornado's water en kleine vissen uit waterlichamen opzuigen en ze kilometers verderop neerzetten. Dergelijke 'dierenregen'-gebeurtenissen zijn door de geschiedenis heen gedocumenteerd op verschillende locaties wereldwijd."
        }
      }
    ],

    // Day 3 - February 3rd: NASA Day of Remembrance & Elizabeth Blackwell
    day3: [
      {
        question: {
          en: "On February 3, 1966, which Soviet spacecraft became the first to achieve a soft landing on the Moon?",
          es: "El 3 de febrero de 1966, ¿qué nave espacial soviética se convirtió en la primera en lograr un aterrizaje suave en la Luna?",
          de: "Am 3. Februar 1966 wurde welches sowjetische Raumschiff das erste, das eine weiche Landung auf dem Mond erreichte?",
          nl: "Op 3 februari 1966 werd welk Sovjet-ruimtevaartuig de eerste om een zachte landing op de maan te bereiken?"
        },
        options: [
          { en: "Sputnik 1", es: "Sputnik 1", de: "Sputnik 1", nl: "Sputnik 1" },
          { en: "Luna 9", es: "Luna 9", de: "Luna 9", nl: "Luna 9" },
          { en: "Vostok 1", es: "Vostok 1", de: "Wostok 1", nl: "Vostok 1" },
          { en: "Luna 2", es: "Luna 2", de: "Luna 2", nl: "Luna 2" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Luna 9 made the first successful soft landing on the Moon on February 3, 1966. The Soviet spacecraft transmitted the first photographs taken directly from the lunar surface back to Earth. This historic achievement came three years before the first human landing. The mission demonstrated that the lunar surface could support the weight of a spacecraft.",
          es: "Luna 9 realizó el primer aterrizaje suave exitoso en la Luna el 3 de febrero de 1966. La nave espacial soviética transmitió las primeras fotografías tomadas directamente desde la superficie lunar a la Tierra. Este logro histórico llegó tres años antes del primer aterrizaje humano. La misión demostró que la superficie lunar podía soportar el peso de una nave espacial.",
          de: "Luna 9 führte am 3. Februar 1966 die erste erfolgreiche weiche Landung auf dem Mond durch. Das sowjetische Raumschiff übertrug die ersten direkt von der Mondoberfläche aufgenommenen Fotografien zur Erde. Diese historische Errungenschaft kam drei Jahre vor der ersten menschlichen Landung. Die Mission bewies, dass die Mondoberfläche das Gewicht eines Raumschiffs tragen konnte.",
          nl: "Luna 9 maakte de eerste succesvolle zachte landing op de maan op 3 februari 1966. Het Sovjet-ruimtevaartuig zond de eerste foto's die direct vanaf het maanoppervlak werden genomen terug naar de aarde. Deze historische prestatie kwam drie jaar voor de eerste menselijke landing. De missie toonde aan dat het maanoppervlak het gewicht van een ruimtevaartuig kon dragen."
        }
      },
      {
        question: {
          en: "On February 3, 1870, which amendment was ratified, granting African American men the right to vote?",
          es: "El 3 de febrero de 1870, ¿qué enmienda fue ratificada, otorgando a los hombres afroamericanos el derecho al voto?",
          de: "Am 3. Februar 1870 wurde welcher Zusatzartikel ratifiziert, der afroamerikanischen Männern das Wahlrecht gewährte?",
          nl: "Op 3 februari 1870 werd welk amendement geratificeerd, dat Afro-Amerikaanse mannen stemrecht gaf?"
        },
        options: [
          { en: "19th Amendment", es: "19ª Enmienda", de: "19. Zusatzartikel", nl: "19e Amendement" },
          { en: "13th Amendment", es: "13ª Enmienda", de: "13. Zusatzartikel", nl: "13e Amendement" },
          { en: "15th Amendment", es: "15ª Enmienda", de: "15. Zusatzartikel", nl: "15e Amendement" },
          { en: "14th Amendment", es: "14ª Enmienda", de: "14. Zusatzartikel", nl: "14e Amendement" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The 15th Amendment to the U.S. Constitution was ratified on February 3, 1870, prohibiting the denial of voting rights based on race, color, or previous condition of servitude. This was a major achievement during Reconstruction following the Civil War. However, discriminatory practices like poll taxes and literacy tests continued to suppress Black voting rights until the Voting Rights Act of 1965.",
          es: "La 15ª Enmienda a la Constitución de EE.UU. fue ratificada el 3 de febrero de 1870, prohibiendo la negación de los derechos de voto basada en raza, color o condición previa de servidumbre. Este fue un logro importante durante la Reconstrucción después de la Guerra Civil. Sin embargo, prácticas discriminatorias como impuestos electorales y pruebas de alfabetización continuaron suprimiendo los derechos de voto de los negros hasta la Ley de Derechos de Voto de 1965.",
          de: "Der 15. Zusatzartikel zur US-Verfassung wurde am 3. Februar 1870 ratifiziert und verbot die Verweigerung des Wahlrechts aufgrund von Rasse, Hautfarbe oder früherer Knechtschaft. Dies war eine bedeutende Errungenschaft während des Wiederaufbaus nach dem Bürgerkrieg. Diskriminierende Praktiken wie Wahlsteuern und Alphabetisierungstests unterdrückten jedoch weiterhin die Wahlrechte der Schwarzen bis zum Voting Rights Act von 1965.",
          nl: "Het 15e Amendement op de Amerikaanse Grondwet werd geratificeerd op 3 februari 1870 en verbood het weigeren van stemrecht op basis van ras, kleur of eerdere staat van dienstbaarheid. Dit was een belangrijke prestatie tijdens de Wederopbouw na de Burgeroorlog. Discriminerende praktijken zoals kiesbelasting en alfabetiseringstests bleven echter de stemrechten van Zwarten onderdrukken tot de Voting Rights Act van 1965."
        }
      },
      {
        question: {
          en: "On February 3, 1959, a plane crash known as 'The Day the Music Died' killed which rock and roll musicians?",
          es: "El 3 de febrero de 1959, un accidente de avión conocido como 'El Día que Murió la Música' mató a qué músicos de rock and roll?",
          de: "Am 3. Februar 1959 tötete ein Flugzeugabsturz, bekannt als 'Der Tag, an dem die Musik starb', welche Rock-and-Roll-Musiker?",
          nl: "Op 3 februari 1959 doodde een vliegtuigongeluk bekend als 'De Dag dat de Muziek Stierf' welke rock-'n-rollmuzikanten?"
        },
        options: [
          { en: "Jerry Lee Lewis and Little Richard", es: "Jerry Lee Lewis y Little Richard", de: "Jerry Lee Lewis und Little Richard", nl: "Jerry Lee Lewis en Little Richard" },
          { en: "Elvis Presley and Chuck Berry", es: "Elvis Presley y Chuck Berry", de: "Elvis Presley und Chuck Berry", nl: "Elvis Presley en Chuck Berry" },
          { en: "Carl Perkins and Eddie Cochran", es: "Carl Perkins y Eddie Cochran", de: "Carl Perkins und Eddie Cochran", nl: "Carl Perkins en Eddie Cochran" },
          { en: "Buddy Holly, Ritchie Valens, and The Big Bopper", es: "Buddy Holly, Ritchie Valens y The Big Bopper", de: "Buddy Holly, Ritchie Valens und The Big Bopper", nl: "Buddy Holly, Ritchie Valens en The Big Bopper" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On February 3, 1959, rock and roll musicians Buddy Holly, Ritchie Valens, and J.P. 'The Big Bopper' Richardson died in a plane crash near Clear Lake, Iowa. This tragedy became known as 'The Day the Music Died,' immortalized in Don McLean's 1971 song 'American Pie.' The crash had a profound impact on the music industry and American culture.",
          es: "El 3 de febrero de 1959, los músicos de rock and roll Buddy Holly, Ritchie Valens y J.P. 'The Big Bopper' Richardson murieron en un accidente de avión cerca de Clear Lake, Iowa. Esta tragedia se conoció como 'El Día que Murió la Música', inmortalizada en la canción de Don McLean de 1971 'American Pie'. El accidente tuvo un profundo impacto en la industria musical y la cultura estadounidense.",
          de: "Am 3. Februar 1959 starben die Rock-and-Roll-Musiker Buddy Holly, Ritchie Valens und J.P. 'The Big Bopper' Richardson bei einem Flugzeugabsturz in der Nähe von Clear Lake, Iowa. Diese Tragödie wurde als 'Der Tag, an dem die Musik starb' bekannt, verewigt in Don McLeans Song 'American Pie' von 1971. Der Absturz hatte tiefgreifende Auswirkungen auf die Musikindustrie und die amerikanische Kultur.",
          nl: "Op 3 februari 1959 stierven rock-'n-rollmuzikanten Buddy Holly, Ritchie Valens en J.P. 'The Big Bopper' Richardson bij een vliegtuigongeluk bij Clear Lake, Iowa. Deze tragedie werd bekend als 'De Dag dat de Muziek Stierf', vereeuwigd in Don McLean's lied 'American Pie' uit 1971. Het ongeluk had een diepgaande impact op de muziekindustrie en de Amerikaanse cultuur."
        }
      },
      {
        question: {
          en: "On February 3, 1913, which constitutional amendment was ratified, establishing the federal income tax?",
          es: "El 3 de febrero de 1913, ¿qué enmienda constitucional fue ratificada, estableciendo el impuesto federal sobre la renta?",
          de: "Am 3. Februar 1913 wurde welcher Verfassungszusatz ratifiziert, der die Bundeseinkommensteuer einführte?",
          nl: "Op 3 februari 1913 werd welk grondwettelijk amendement geratificeerd, dat de federale inkomstenbelasting instelde?"
        },
        options: [
          { en: "18th Amendment", es: "18ª Enmienda", de: "18. Zusatzartikel", nl: "18e Amendement" },
          { en: "14th Amendment", es: "14ª Enmienda", de: "14. Zusatzartikel", nl: "14e Amendement" },
          { en: "16th Amendment", es: "16ª Enmienda", de: "16. Zusatzartikel", nl: "16e Amendement" },
          { en: "17th Amendment", es: "17ª Enmienda", de: "17. Zusatzartikel", nl: "17e Amendement" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The 16th Amendment was ratified on February 3, 1913, giving Congress the power to levy an income tax without apportioning it among the states or basing it on the Census. This fundamentally changed how the federal government was funded and allowed for the expansion of federal programs. Income tax became a permanent fixture of American life.",
          es: "La 16ª Enmienda fue ratificada el 3 de febrero de 1913, otorgando al Congreso el poder de imponer un impuesto sobre la renta sin distribuirlo entre los estados o basarlo en el Censo. Esto cambió fundamentalmente cómo se financiaba el gobierno federal y permitió la expansión de programas federales. El impuesto sobre la renta se convirtió en una característica permanente de la vida estadounidense.",
          de: "Der 16. Zusatzartikel wurde am 3. Februar 1913 ratifiziert und gab dem Kongress die Befugnis, eine Einkommensteuer zu erheben, ohne sie unter den Staaten aufzuteilen oder auf der Volkszählung zu basieren. Dies veränderte grundlegend, wie die Bundesregierung finanziert wurde, und ermöglichte die Ausweitung von Bundesprogrammen. Die Einkommensteuer wurde zu einem festen Bestandteil des amerikanischen Lebens.",
          nl: "Het 16e Amendement werd geratificeerd op 3 februari 1913, waardoor het Congres de bevoegdheid kreeg om een inkomstenbelasting te heffen zonder deze over de staten te verdelen of te baseren op de Volkstelling. Dit veranderde fundamenteel hoe de federale overheid werd gefinancierd en maakte de uitbreiding van federale programma's mogelijk. Inkomstenbelasting werd een permanent onderdeel van het Amerikaanse leven."
        }
      },
      {
        question: {
          en: "On February 3, 1959, which country became independent from Belgium?",
          es: "El 3 de febrero de 1959, ¿qué país se independizó de Bélgica?",
          de: "Am 3. Februar 1959 wurde welches Land von Belgien unabhängig?",
          nl: "Op 3 februari 1959 werd welk land onafhankelijk van België?"
        },
        options: [
          { en: "Democratic Republic of the Congo", es: "República Democrática del Congo", de: "Demokratische Republik Kongo", nl: "Democratische Republiek Congo" },
          { en: "Tanzania", es: "Tanzania", de: "Tansania", nl: "Tanzania" },
          { en: "Burundi", es: "Burundi", de: "Burundi", nl: "Burundi" },
          { en: "Rwanda", es: "Ruanda", de: "Ruanda", nl: "Rwanda" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Democratic Republic of the Congo (then called Republic of the Congo) gained independence from Belgium on June 30, 1960, not February 3. However, February 3, 1959 marks when Belgian King Baudouin announced the intention to grant independence. This announcement followed riots in Leopoldville (now Kinshasa) in January 1959, signaling the beginning of the end of Belgian colonial rule.",
          es: "La República Democrática del Congo (entonces llamada República del Congo) obtuvo la independencia de Bélgica el 30 de junio de 1960, no el 3 de febrero. Sin embargo, el 3 de febrero de 1959 marca cuando el rey belga Balduino anunció la intención de otorgar la independencia. Este anuncio siguió a disturbios en Leopoldville (ahora Kinshasa) en enero de 1959, señalando el comienzo del fin del dominio colonial belga.",
          de: "Die Demokratische Republik Kongo (damals Republik Kongo genannt) erlangte am 30. Juni 1960, nicht am 3. Februar, die Unabhängigkeit von Belgien. Der 3. Februar 1959 markiert jedoch den Tag, an dem der belgische König Baudouin die Absicht ankündigte, die Unabhängigkeit zu gewähren. Diese Ankündigung folgte auf Unruhen in Leopoldville (heute Kinshasa) im Januar 1959 und signalisierte den Beginn vom Ende der belgischen Kolonialherrschaft.",
          nl: "De Democratische Republiek Congo (toen Republiek Congo genoemd) werd onafhankelijk van België op 30 juni 1960, niet op 3 februari. Echter, 3 februari 1959 markeert wanneer de Belgische koning Boudewijn de intentie aankondigde om onafhankelijkheid te verlenen. Deze aankondiging volgde op rellen in Leopoldstad (nu Kinshasa) in januari 1959, wat het begin van het einde van de Belgische koloniale heerschappij markeerde."
        }
      }
    ],

    // Day 4 - February 4th: Facebook Founded & Sri Lanka Independence
    day4: [
      {
        question: {
          en: "On February 4, 2004, which social media platform was founded by Mark Zuckerberg at Harvard University?",
          es: "El 4 de febrero de 2004, ¿qué plataforma de redes sociales fue fundada por Mark Zuckerberg en la Universidad de Harvard?",
          de: "Am 4. Februar 2004 wurde welche Social-Media-Plattform von Mark Zuckerberg an der Harvard University gegründet?",
          nl: "Op 4 februari 2004 werd welk social media platform opgericht door Mark Zuckerberg aan Harvard University?"
        },
        options: [
          { en: "Twitter", es: "Twitter", de: "Twitter", nl: "Twitter" },
          { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
          { en: "Instagram", es: "Instagram", de: "Instagram", nl: "Instagram" },
          { en: "MySpace", es: "MySpace", de: "MySpace", nl: "MySpace" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Facebook was launched on February 4, 2004, by Mark Zuckerberg along with fellow Harvard students. Initially limited to Harvard students, it quickly expanded to other universities and eventually to the general public in 2006. Facebook revolutionized social networking and became one of the most influential technology companies in the world.",
          es: "Facebook fue lanzado el 4 de febrero de 2004 por Mark Zuckerberg junto con compañeros estudiantes de Harvard. Inicialmente limitado a estudiantes de Harvard, se expandió rápidamente a otras universidades y eventualmente al público en general en 2006. Facebook revolucionó las redes sociales y se convirtió en una de las empresas tecnológicas más influyentes del mundo.",
          de: "Facebook wurde am 4. Februar 2004 von Mark Zuckerberg zusammen mit Kommilitonen der Harvard University gestartet. Anfangs auf Harvard-Studenten beschränkt, expandierte es schnell zu anderen Universitäten und schließlich 2006 zur breiten Öffentlichkeit. Facebook revolutionierte soziale Netzwerke und wurde zu einem der einflussreichsten Technologieunternehmen der Welt.",
          nl: "Facebook werd gelanceerd op 4 februari 2004 door Mark Zuckerberg samen met mede-Harvard studenten. Aanvankelijk beperkt tot Harvard-studenten, breidde het zich snel uit naar andere universiteiten en uiteindelijk naar het grote publiek in 2006. Facebook revolutioneerde sociale netwerken en werd een van de meest invloedrijke technologiebedrijven ter wereld."
        }
      },
      {
        question: {
          en: "On February 4, 1948, which Asian island nation gained independence from the United Kingdom?",
          es: "El 4 de febrero de 1948, ¿qué nación insular asiática obtuvo la independencia del Reino Unido?",
          de: "Am 4. Februar 1948 erlangte welcher asiatische Inselstaat die Unabhängigkeit vom Vereinigten Königreich?",
          nl: "Op 4 februari 1948 kreeg welke Aziatische eilandnatie onafhankelijkheid van het Verenigd Koninkrijk?"
        },
        options: [
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "Singapore", es: "Singapur", de: "Singapur", nl: "Singapore" },
          { en: "Myanmar", es: "Myanmar", de: "Myanmar", nl: "Myanmar" },
          { en: "Sri Lanka", es: "Sri Lanka", de: "Sri Lanka", nl: "Sri Lanka" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Sri Lanka (then called Ceylon) gained independence from the United Kingdom on February 4, 1948, after being a British colony since 1815. The country achieved independence peacefully through negotiations. Sri Lanka became a republic in 1972 and changed its name from Ceylon to Sri Lanka. The island nation has a rich history dating back thousands of years.",
          es: "Sri Lanka (entonces llamado Ceilán) obtuvo la independencia del Reino Unido el 4 de febrero de 1948, después de ser una colonia británica desde 1815. El país logró la independencia pacíficamente a través de negociaciones. Sri Lanka se convirtió en república en 1972 y cambió su nombre de Ceilán a Sri Lanka. La nación insular tiene una rica historia que se remonta a miles de años.",
          de: "Sri Lanka (damals Ceylon genannt) erlangte am 4. Februar 1948 die Unabhängigkeit vom Vereinigten Königreich, nachdem es seit 1815 eine britische Kolonie gewesen war. Das Land erreichte die Unabhängigkeit friedlich durch Verhandlungen. Sri Lanka wurde 1972 eine Republik und änderte seinen Namen von Ceylon zu Sri Lanka. Der Inselstaat hat eine reiche Geschichte, die Tausende von Jahren zurückreicht.",
          nl: "Sri Lanka (toen Ceylon genoemd) kreeg onafhankelijkheid van het Verenigd Koninkrijk op 4 februari 1948, na sinds 1815 een Britse kolonie te zijn geweest. Het land bereikte onafhankelijkheid vreedzaam door onderhandelingen. Sri Lanka werd een republiek in 1972 en veranderde zijn naam van Ceylon naar Sri Lanka. De eilandnatie heeft een rijke geschiedenis die duizenden jaren teruggaat."
        }
      },
      {
        question: {
          en: "On February 4, 1789, which American Founding Father was unanimously elected as the first U.S. President?",
          es: "El 4 de febrero de 1789, ¿qué Padre Fundador estadounidense fue elegido por unanimidad como el primer presidente de EE.UU.?",
          de: "Am 4. Februar 1789 wurde welcher amerikanische Gründervater einstimmig zum ersten US-Präsidenten gewählt?",
          nl: "Op 4 februari 1789 werd welke Amerikaanse Founding Father unaniem gekozen als de eerste Amerikaanse president?"
        },
        options: [
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" },
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" }
        ],
        correctIndex: 1,
        explanation: {
          en: "George Washington was unanimously elected by the Electoral College as the first President of the United States on February 4, 1789. He remains the only president to receive 100% of the electoral votes. Washington served two terms and established many precedents that shaped the office of the presidency. He refused a third term, setting a tradition that lasted until Franklin D. Roosevelt.",
          es: "George Washington fue elegido por unanimidad por el Colegio Electoral como el primer Presidente de los Estados Unidos el 4 de febrero de 1789. Sigue siendo el único presidente en recibir el 100% de los votos electorales. Washington sirvió dos mandatos y estableció muchos precedentes que dieron forma al cargo de la presidencia. Rechazó un tercer mandato, estableciendo una tradición que duró hasta Franklin D. Roosevelt.",
          de: "George Washington wurde am 4. Februar 1789 vom Wahlkollegium einstimmig zum ersten Präsidenten der Vereinigten Staaten gewählt. Er bleibt der einzige Präsident, der 100% der Wahlstimmen erhielt. Washington diente zwei Amtszeiten und etablierte viele Präzedenzfälle, die das Amt des Präsidenten prägten. Er lehnte eine dritte Amtszeit ab und setzte eine Tradition, die bis Franklin D. Roosevelt dauerte.",
          nl: "George Washington werd unaniem gekozen door het Electoral College als de eerste president van de Verenigde Staten op 4 februari 1789. Hij blijft de enige president die 100% van de kiesmannen stemmen ontving. Washington diende twee termijnen en vestigde vele precedenten die het presidentschap vormden. Hij weigerde een derde termijn, wat een traditie vestigde die duurde tot Franklin D. Roosevelt."
        }
      },
      {
        question: {
          en: "On February 4, 1945, which Allied leaders met at Yalta to discuss post-World War II reorganization of Europe?",
          es: "El 4 de febrero de 1945, ¿qué líderes aliados se reunieron en Yalta para discutir la reorganización de Europa después de la Segunda Guerra Mundial?",
          de: "Am 4. Februar 1945 trafen sich welche alliierten Führer in Jalta, um die Neuordnung Europas nach dem Zweiten Weltkrieg zu besprechen?",
          nl: "Op 4 februari 1945 kwamen welke geallieerde leiders bijeen in Jalta om de naoorlogse reorganisatie van Europa te bespreken?"
        },
        options: [
          { en: "Truman, Attlee, and Stalin", es: "Truman, Attlee y Stalin", de: "Truman, Attlee und Stalin", nl: "Truman, Attlee en Stalin" },
          { en: "Eisenhower, Montgomery, and Zhukov", es: "Eisenhower, Montgomery y Zhukov", de: "Eisenhower, Montgomery und Schukow", nl: "Eisenhower, Montgomery en Zhukov" },
          { en: "Wilson, Lloyd George, and Clemenceau", es: "Wilson, Lloyd George y Clemenceau", de: "Wilson, Lloyd George und Clemenceau", nl: "Wilson, Lloyd George en Clemenceau" },
          { en: "Roosevelt, Churchill, and Stalin", es: "Roosevelt, Churchill y Stalin", de: "Roosevelt, Churchill und Stalin", nl: "Roosevelt, Churchill en Stalin" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Yalta Conference began on February 4, 1945, bringing together U.S. President Franklin D. Roosevelt, British Prime Minister Winston Churchill, and Soviet Premier Joseph Stalin. They discussed the post-war reorganization of Europe, the occupation of Germany, and the formation of the United Nations. The agreements made at Yalta significantly shaped the post-war world order and the beginning of the Cold War.",
          es: "La Conferencia de Yalta comenzó el 4 de febrero de 1945, reuniendo al presidente estadounidense Franklin D. Roosevelt, al primer ministro británico Winston Churchill y al premier soviético Joseph Stalin. Discutieron la reorganización de Europa de posguerra, la ocupación de Alemania y la formación de las Naciones Unidas. Los acuerdos hechos en Yalta dieron forma significativa al orden mundial de posguerra y al comienzo de la Guerra Fría.",
          de: "Die Konferenz von Jalta begann am 4. Februar 1945 und brachte US-Präsident Franklin D. Roosevelt, den britischen Premierminister Winston Churchill und den sowjetischen Premier Joseph Stalin zusammen. Sie diskutierten die Neuordnung Europas nach dem Krieg, die Besetzung Deutschlands und die Gründung der Vereinten Nationen. Die in Jalta getroffenen Vereinbarungen prägten die Nachkriegsweltordnung und den Beginn des Kalten Krieges erheblich.",
          nl: "De Jalta Conferentie begon op 4 februari 1945 en bracht de Amerikaanse president Franklin D. Roosevelt, de Britse premier Winston Churchill en de Sovjet-premier Joseph Stalin samen. Ze bespraken de naoorlogse reorganisatie van Europa, de bezetting van Duitsland en de vorming van de Verenigde Naties. De akkoorden gesloten in Jalta hebben de naoorlogse wereldorde en het begin van de Koude Oorlog aanzienlijk gevormd."
        }
      },
      {
        question: {
          en: "On February 4, 1983, pop star Karen Carpenter died. She was part of which famous musical duo?",
          es: "El 4 de febrero de 1983, murió la estrella del pop Karen Carpenter. ¿Era parte de qué famoso dúo musical?",
          de: "Am 4. Februar 1983 starb Popstar Karen Carpenter. Sie war Teil welches berühmten Musikduos?",
          nl: "Op 4 februari 1983 stierf popster Karen Carpenter. Ze maakte deel uit van welk beroemd muzikaal duo?"
        },
        options: [
          { en: "Simon & Garfunkel", es: "Simon & Garfunkel", de: "Simon & Garfunkel", nl: "Simon & Garfunkel" },
          { en: "Sonny & Cher", es: "Sonny & Cher", de: "Sonny & Cher", nl: "Sonny & Cher" },
          { en: "The Carpenters", es: "The Carpenters", de: "The Carpenters", nl: "The Carpenters" },
          { en: "The Everly Brothers", es: "The Everly Brothers", de: "The Everly Brothers", nl: "The Everly Brothers" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Karen Carpenter, along with her brother Richard, formed The Carpenters, one of the most successful musical acts of the 1970s. She died on February 4, 1983, at age 32 from heart failure caused by complications from anorexia nervosa. Her death brought widespread attention to eating disorders. The Carpenters had numerous hits including 'Close to You' and 'We've Only Just Begun.'",
          es: "Karen Carpenter, junto con su hermano Richard, formó The Carpenters, uno de los actos musicales más exitosos de la década de 1970. Murió el 4 de febrero de 1983, a los 32 años de insuficiencia cardíaca causada por complicaciones de anorexia nerviosa. Su muerte trajo gran atención a los trastornos alimentarios. The Carpenters tuvieron numerosos éxitos incluyendo 'Close to You' y 'We've Only Just Begun.'",
          de: "Karen Carpenter bildete zusammen mit ihrem Bruder Richard The Carpenters, einen der erfolgreichsten Musikacts der 1970er Jahre. Sie starb am 4. Februar 1983 im Alter von 32 Jahren an Herzversagen aufgrund von Komplikationen durch Anorexia nervosa. Ihr Tod lenkte große Aufmerksamkeit auf Essstörungen. The Carpenters hatten zahlreiche Hits, darunter 'Close to You' und 'We've Only Just Begun.'",
          nl: "Karen Carpenter vormde samen met haar broer Richard The Carpenters, een van de meest succesvolle muzikale acts van de jaren 1970. Ze stierf op 4 februari 1983 op 32-jarige leeftijd aan hartfalen veroorzaakt door complicaties van anorexia nervosa. Haar dood bracht wijdverspreide aandacht voor eetstoornissen. The Carpenters hadden talrijke hits waaronder 'Close to You' en 'We've Only Just Begun.'"
        }
      }
    ],

    // Day 5 - February 5th: Mexico Constitution & Roger Williams
    day5: [
      {
        question: {
          en: "On February 5, 1971, which Apollo mission successfully landed on the Moon?",
          es: "El 5 de febrero de 1971, ¿qué misión Apolo aterrizó exitosamente en la Luna?",
          de: "Am 5. Februar 1971 landete welche Apollo-Mission erfolgreich auf dem Mond?",
          nl: "Op 5 februari 1971 landde welke Apollo-missie met succes op de maan?"
        },
        options: [
          { en: "Apollo 15", es: "Apolo 15", de: "Apollo 15", nl: "Apollo 15" },
          { en: "Apollo 14", es: "Apolo 14", de: "Apollo 14", nl: "Apollo 14" },
          { en: "Apollo 11", es: "Apolo 11", de: "Apollo 11", nl: "Apollo 11" },
          { en: "Apollo 13", es: "Apolo 13", de: "Apollo 13", nl: "Apollo 13" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Apollo 14 landed on the Moon on February 5, 1971, commanded by Alan Shepard, America's first astronaut in space. The mission explored the Fra Mauro region and conducted scientific experiments. Shepard famously hit two golf balls on the lunar surface during this mission, making him the first person to play golf on the Moon.",
          es: "El Apolo 14 aterrizó en la Luna el 5 de febrero de 1971, comandado por Alan Shepard, el primer astronauta estadounidense en el espacio. La misión exploró la región de Fra Mauro y realizó experimentos científicos. Shepard golpeó famosamente dos pelotas de golf en la superficie lunar durante esta misión, convirtiéndolo en la primera persona en jugar golf en la Luna.",
          de: "Apollo 14 landete am 5. Februar 1971 auf dem Mond unter dem Kommando von Alan Shepard, Amerikas erstem Astronauten im All. Die Mission erforschte die Fra-Mauro-Region und führte wissenschaftliche Experimente durch. Shepard schlug während dieser Mission berühmt zwei Golfbälle auf der Mondoberfläche und wurde damit die erste Person, die Golf auf dem Mond spielte.",
          nl: "Apollo 14 landde op 5 februari 1971 op de maan, onder bevel van Alan Shepard, Amerika's eerste astronaut in de ruimte. De missie verkende de Fra Mauro-regio en voerde wetenschappelijke experimenten uit. Shepard sloeg beroemd twee golfballen op het maanoppervlak tijdens deze missie, waardoor hij de eerste persoon werd die golf speelde op de maan."
        }
      },
      {
        question: {
          en: "On February 5, 1917, which country adopted a new constitution that included significant labor rights and land reforms?",
          es: "El 5 de febrero de 1917, ¿qué país adoptó una nueva constitución que incluía importantes derechos laborales y reformas agrarias?",
          de: "Am 5. Februar 1917 verabschiedete welches Land eine neue Verfassung, die bedeutende Arbeitsrechte und Landreformen beinhaltete?",
          nl: "Op 5 februari 1917 nam welk land een nieuwe grondwet aan die aanzienlijke arbeidsrechten en landhervor mingen omvatte?"
        },
        options: [
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Mexican Constitution of 1917 was adopted on February 5, 1917, and remains in effect today. It was one of the first constitutions to include social rights, including labor rights, land reform, and public education. The constitution emerged from the Mexican Revolution and established Mexico as a federal republic. It served as a model for other Latin American constitutions.",
          es: "La Constitución Mexicana de 1917 fue adoptada el 5 de febrero de 1917 y permanece en vigor hoy en día. Fue una de las primeras constituciones en incluir derechos sociales, incluyendo derechos laborales, reforma agraria y educación pública. La constitución surgió de la Revolución Mexicana y estableció a México como una república federal. Sirvió como modelo para otras constituciones latinoamericanas.",
          de: "Die mexikanische Verfassung von 1917 wurde am 5. Februar 1917 verabschiedet und ist bis heute in Kraft. Sie war eine der ersten Verfassungen, die soziale Rechte einschloss, darunter Arbeitsrechte, Landreform und öffentliche Bildung. Die Verfassung entstand aus der mexikanischen Revolution und etablierte Mexiko als föderale Republik. Sie diente als Modell für andere lateinamerikanische Verfassungen.",
          nl: "De Mexicaanse Grondwet van 1917 werd aangenomen op 5 februari 1917 en is vandaag de dag nog steeds van kracht. Het was een van de eerste grondwetten die sociale rechten omvatte, waaronder arbeidsrechten, landhervorming en openbaar onderwijs. De grondwet kwam voort uit de Mexicaanse Revolutie en vestigde Mexico als een federale republiek. Het diende als model voor andere Latijns-Amerikaanse grondwetten."
        }
      },
      {
        question: {
          en: "On February 5, 1631, which religious leader founded Providence, Rhode Island, as a place for religious freedom?",
          es: "El 5 de febrero de 1631, ¿qué líder religioso fundó Providence, Rhode Island, como un lugar para la libertad religiosa?",
          de: "Am 5. Februar 1631 gründete welcher religiöse Führer Providence, Rhode Island, als Ort für Religionsfreiheit?",
          nl: "Op 5 februari 1631 stichtte welke religieuze leider Providence, Rhode Island, als een plaats voor godsdienstvrijheid?"
        },
        options: [
          { en: "John Winthrop", es: "John Winthrop", de: "John Winthrop", nl: "John Winthrop" },
          { en: "William Penn", es: "William Penn", de: "William Penn", nl: "William Penn" },
          { en: "Thomas Hooker", es: "Thomas Hooker", de: "Thomas Hooker", nl: "Thomas Hooker" },
          { en: "Roger Williams", es: "Roger Williams", de: "Roger Williams", nl: "Roger Williams" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Roger Williams founded Providence on February 5, 1636 (not 1631), after being banished from Massachusetts Bay Colony for his religious beliefs. He established it as a haven for religious freedom and separation of church and state. Rhode Island became the first colony to guarantee religious liberty to all residents. Williams also maintained peaceful relations with Native American tribes.",
          es: "Roger Williams fundó Providence el 5 de febrero de 1636 (no 1631), después de ser desterrado de la Colonia de la Bahía de Massachusetts por sus creencias religiosas. Lo estableció como un refugio para la libertad religiosa y la separación de la iglesia y el estado. Rhode Island se convirtió en la primera colonia en garantizar la libertad religiosa a todos los residentes. Williams también mantuvo relaciones pacíficas con las tribus nativas americanas.",
          de: "Roger Williams gründete Providence am 5. Februar 1636 (nicht 1631), nachdem er aus der Massachusetts Bay Colony wegen seiner religiösen Überzeugungen verbannt worden war. Er etablierte es als Zufluchtsort für Religionsfreiheit und Trennung von Kirche und Staat. Rhode Island wurde die erste Kolonie, die allen Einwohnern Religionsfreiheit garantierte. Williams pflegte auch friedliche Beziehungen zu den Indianerstämmen.",
          nl: "Roger Williams stichtte Providence op 5 februari 1636 (niet 1631), nadat hij uit de Massachusetts Bay Colony was verbannen vanwege zijn religieuze overtuigingen. Hij vestigde het als een toevluchtsoord voor godsdienstvrijheid en scheiding van kerk en staat. Rhode Island werd de eerste kolonie die godsdienstige vrijheid garandeerde aan alle inwoners. Williams onderhield ook vreedzame relaties met de inheemse Amerikaanse stammen."
        }
      },
      {
        question: {
          en: "On February 5, 1937, which U.S. president announced a controversial plan to expand the Supreme Court?",
          es: "El 5 de febrero de 1937, ¿qué presidente de EE.UU. anunció un controvertido plan para expandir la Corte Suprema?",
          de: "Am 5. Februar 1937 kündigte welcher US-Präsident einen umstrittenen Plan zur Erweiterung des Obersten Gerichtshofs an?",
          nl: "Op 5 februari 1937 kondigde welke Amerikaanse president een controversieel plan aan om het Hooggerechtshof uit te breiden?"
        },
        options: [
          { en: "Herbert Hoover", es: "Herbert Hoover", de: "Herbert Hoover", nl: "Herbert Hoover" },
          { en: "Harry Truman", es: "Harry Truman", de: "Harry Truman", nl: "Harry Truman" },
          { en: "Dwight Eisenhower", es: "Dwight Eisenhower", de: "Dwight Eisenhower", nl: "Dwight Eisenhower" },
          { en: "Franklin D. Roosevelt", es: "Franklin D. Roosevelt", de: "Franklin D. Roosevelt", nl: "Franklin D. Roosevelt" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Franklin D. Roosevelt proposed his controversial 'court-packing' plan on February 5, 1937, to expand the Supreme Court from 9 to 15 justices. He made this proposal after the Court struck down several New Deal programs. The plan was ultimately rejected by Congress but may have influenced the Court to become more favorable to his policies in what became known as 'the switch in time that saved nine.'",
          es: "Franklin D. Roosevelt propuso su controvertido plan de 'empaquetamiento de la corte' el 5 de febrero de 1937 para expandir la Corte Suprema de 9 a 15 jueces. Hizo esta propuesta después de que la Corte anulara varios programas del New Deal. El plan fue finalmente rechazado por el Congreso, pero puede haber influenciado a la Corte a ser más favorable a sus políticas en lo que se conoció como 'el cambio a tiempo que salvó a los nueve.'",
          de: "Franklin D. Roosevelt schlug am 5. Februar 1937 seinen umstrittenen 'Court-Packing'-Plan vor, um den Obersten Gerichtshof von 9 auf 15 Richter zu erweitern. Er machte diesen Vorschlag, nachdem das Gericht mehrere New Deal-Programme aufgehoben hatte. Der Plan wurde letztendlich vom Kongress abgelehnt, könnte aber das Gericht beeinflusst haben, seinen Politiken gegenüber günstiger zu werden, in dem, was als 'der Wechsel zur rechten Zeit, der die Neun rettete' bekannt wurde.",
          nl: "Franklin D. Roosevelt stelde zijn controversiële 'court-packing' plan voor op 5 februari 1937 om het Hooggerechtshof uit te breiden van 9 naar 15 rechters. Hij deed dit voorstel nadat het Hof verschillende New Deal-programma's had verworpen. Het plan werd uiteindelijk door het Congres verworpen, maar kan het Hof hebben beïnvloed om gunstiger te worden voor zijn beleid in wat bekend werd als 'de wissel op tijd die de negen redde.'"
        }
      },
      {
        question: {
          en: "On February 5, 1994, white supremacist Byron De La Beckwith was convicted for the 1963 murder of which civil rights leader?",
          es: "El 5 de febrero de 1994, el supremacista blanco Byron De La Beckwith fue condenado por el asesinato en 1963 de qué líder de derechos civiles?",
          de: "Am 5. Februar 1994 wurde der weiße Suprematist Byron De La Beckwith wegen des Mordes von 1963 an welchem Bürgerrechtsführer verurteilt?",
          nl: "Op 5 februari 1994 werd blanke suprematist Byron De La Beckwith veroordeeld voor de moord in 1963 op welke burgerrechtenleider?"
        },
        options: [
          { en: "Medgar Evers", es: "Medgar Evers", de: "Medgar Evers", nl: "Medgar Evers" },
          { en: "Malcolm X", es: "Malcolm X", de: "Malcolm X", nl: "Malcolm X" },
          { en: "James Chaney", es: "James Chaney", de: "James Chaney", nl: "James Chaney" },
          { en: "Martin Luther King Jr.", es: "Martin Luther King Jr.", de: "Martin Luther King Jr.", nl: "Martin Luther King Jr." }
        ],
        correctIndex: 0,
        explanation: {
          en: "Medgar Evers, NAACP field secretary in Mississippi, was assassinated on June 12, 1963. Byron De La Beckwith was tried twice in 1964, resulting in hung juries. New evidence emerged in the 1990s, leading to his conviction on February 5, 1994. Evers' murder and the delayed justice became symbols of racial injustice and the importance of persisting in the pursuit of justice.",
          es: "Medgar Evers, secretario de campo de la NAACP en Mississippi, fue asesinado el 12 de junio de 1963. Byron De La Beckwith fue juzgado dos veces en 1964, resultando en jurados sin veredicto. Nuevas pruebas surgieron en la década de 1990, llevando a su condena el 5 de febrero de 1994. El asesinato de Evers y la justicia retrasada se convirtieron en símbolos de la injusticia racial y la importancia de persistir en la búsqueda de justicia.",
          de: "Medgar Evers, NAACP-Feldsekretar in Mississippi, wurde am 12. Juni 1963 ermordet. Byron De La Beckwith wurde 1964 zweimal vor Gericht gestellt, was zu gescheiterten Geschworenenverfahren führte. Neue Beweise tauchten in den 1990er Jahren auf, die zu seiner Verurteilung am 5. Februar 1994 führten. Evers' Mord und die verzögerte Gerechtigkeit wurden zu Symbolen für Rassenungerechtigkeit und die Wichtigkeit, bei der Verfolgung von Gerechtigkeit zu beharren.",
          nl: "Medgar Evers, NAACP-veldsecretaris in Mississippi, werd vermoord op 12 juni 1963. Byron De La Beckwith werd twee keer berecht in 1964, wat resulteerde in jury's zonder verdict. Nieuw bewijs kwam in de jaren 1990 naar voren, wat leidde tot zijn veroordeling op 5 februari 1994. Evers' moord en de vertraagde gerechtigheid werden symbolen van raciale onrechtvaardigheid en het belang van volharding in het nastreven van gerechtigheid."
        }
      }
    ],

    // Day 6 - February 6th: Queen Elizabeth II & Historical Treaties
    day6: [
      {
        question: {
          en: "On February 6, 1952, who became Queen of the United Kingdom following the death of King George VI?",
          es: "El 6 de febrero de 1952, ¿quién se convirtió en Reina del Reino Unido tras la muerte del Rey Jorge VI?",
          de: "Wer wurde am 6. Februar 1952 Königin des Vereinigten Königreichs nach dem Tod von König Georg VI.?",
          nl: "Wie werd op 6 februari 1952 koningin van het Verenigd Koninkrijk na de dood van koning George VI?"
        },
        options: [
          { en: "Mary II", es: "María II", de: "Maria II", nl: "Maria II" },
          { en: "Queen Anne", es: "Reina Ana", de: "Königin Anne", nl: "Koningin Anne" },
          { en: "Queen Victoria", es: "Reina Victoria", de: "Königin Victoria", nl: "Koningin Victoria" },
          { en: "Elizabeth II", es: "Isabel II", de: "Elizabeth II", nl: "Elizabeth II" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Elizabeth II became Queen on February 6, 1952, following the death of her father King George VI. She was only 25 years old when she acceded to the throne. Elizabeth II went on to become the longest-reigning British monarch, serving for over 70 years until her death in 2022.",
          es: "Isabel II se convirtió en Reina el 6 de febrero de 1952, tras la muerte de su padre el Rey Jorge VI. Tenía solo 25 años cuando ascendió al trono. Isabel II se convirtió en la monarca británica con el reinado más largo, sirviendo durante más de 70 años hasta su muerte en 2022.",
          de: "Elizabeth II. wurde am 6. Februar 1952 Königin, nach dem Tod ihres Vaters König Georg VI. Sie war nur 25 Jahre alt, als sie den Thron bestieg. Elizabeth II. wurde die am längsten regierende britische Monarchin und diente über 70 Jahre bis zu ihrem Tod im Jahr 2022.",
          nl: "Elizabeth II werd koningin op 6 februari 1952, na de dood van haar vader koning George VI. Ze was slechts 25 jaar oud toen ze de troon besteeg. Elizabeth II werd de langstzittende Britse monarch en regeerde meer dan 70 jaar tot haar dood in 2022."
        }
      },
      {
        question: {
          en: "In 1778, the United States and France signed a treaty of alliance. During which war did this occur?",
          es: "En 1778, Estados Unidos y Francia firmaron un tratado de alianza. ¿Durante qué guerra ocurrió esto?",
          de: "1778 unterzeichneten die Vereinigten Staaten und Frankreich einen Bündnisvertrag. Während welches Krieges geschah dies?",
          nl: "In 1778 ondertekenden de Verenigde Staten en Frankrijk een bondgenootschapsverdrag. Tijdens welke oorlog gebeurde dit?"
        },
        options: [
          { en: "French and Indian War", es: "Guerra Franco-India", de: "Franzosen- und Indianerkrieg", nl: "Franse en Indiaanse Oorlog" },
          { en: "Civil War", es: "Guerra Civil", de: "Bürgerkrieg", nl: "Burgeroorlog" },
          { en: "War of 1812", es: "Guerra de 1812", de: "Krieg von 1812", nl: "Oorlog van 1812" },
          { en: "American Revolutionary War", es: "Guerra de Independencia de EE.UU.", de: "Amerikanischer Unabhängigkeitskrieg", nl: "Amerikaanse Onafhankelijkheidsoorlog" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Franco-American Treaty of Alliance was signed on February 6, 1778, during the American Revolutionary War. This alliance was crucial to American independence, as France provided military support, naval forces, and financial aid. The French assistance proved decisive in the colonists' victory over Britain.",
          es: "El Tratado de Alianza Franco-Estadounidense se firmó el 6 de febrero de 1778, durante la Guerra de Independencia Estadounidense. Esta alianza fue crucial para la independencia estadounidense, ya que Francia proporcionó apoyo militar, fuerzas navales y ayuda financiera. La asistencia francesa resultó decisiva en la victoria de los colonos sobre Gran Bretaña.",
          de: "Der Französisch-Amerikanische Bündnisvertrag wurde am 6. Februar 1778 während des Amerikanischen Unabhängigkeitskrieges unterzeichnet. Diese Allianz war entscheidend für die amerikanische Unabhängigkeit, da Frankreich militärische Unterstützung, Seestreitkräfte und finanzielle Hilfe bereitstellte. Die französische Hilfe erwies sich als entscheidend für den Sieg der Kolonisten über Großbritannien.",
          nl: "Het Frans-Amerikaanse Bondgenootschapsverdrag werd ondertekend op 6 februari 1778, tijdens de Amerikaanse Onafhankelijkheidsoorlog. Deze alliantie was cruciaal voor de Amerikaanse onafhankelijkheid, aangezien Frankrijk militaire steun, zeestrijdkrachten en financiële hulp verleende. De Franse bijstand bleek beslissend voor de overwinning van de kolonisten op Groot-Brittannië."
        }
      },
      {
        question: {
          en: "On February 6, 1840, which country signed the Treaty of Waitangi with Great Britain?",
          es: "El 6 de febrero de 1840, ¿qué país firmó el Tratado de Waitangi con Gran Bretaña?",
          de: "Am 6. Februar 1840 unterzeichnete welches Land den Vertrag von Waitangi mit Großbritannien?",
          nl: "Op 6 februari 1840 ondertekende welk land het Verdrag van Waitangi met Groot-Brittannië?"
        },
        options: [
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "New Zealand (Māori leaders)", es: "Nueva Zelanda (líderes maoríes)", de: "Neuseeland (Māori-Führer)", nl: "Nieuw-Zeeland (Maori-leiders)" },
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Treaty of Waitangi was signed on February 6, 1840, between Māori chiefs and the British Crown, establishing British sovereignty over New Zealand. The treaty is considered New Zealand's founding document. However, differing interpretations between English and Māori versions have led to ongoing debates about indigenous rights.",
          es: "El Tratado de Waitangi fue firmado el 6 de febrero de 1840 entre jefes maoríes y la Corona británica, estableciendo la soberanía británica sobre Nueva Zelanda. El tratado se considera el documento fundacional de Nueva Zelanda. Sin embargo, las diferentes interpretaciones entre las versiones en inglés y maorí han llevado a debates continuos sobre los derechos indígenas.",
          de: "Der Vertrag von Waitangi wurde am 6. Februar 1840 zwischen Māori-Häuptlingen und der britischen Krone unterzeichnet und etablierte die britische Souveränität über Neuseeland. Der Vertrag gilt als Gründungsdokument Neuseelands. Unterschiedliche Interpretationen zwischen englischen und Māori-Versionen haben jedoch zu anhaltenden Debatten über indigene Rechte geführt.",
          nl: "Het Verdrag van Waitangi werd ondertekend op 6 februari 1840 tussen Maori-leiders en de Britse Kroon, waarbij de Britse soevereiniteit over Nieuw-Zeeland werd gevestigd. Het verdrag wordt beschouwd als het stichtingsdocument van Nieuw-Zeeland. Verschillende interpretaties tussen Engelse en Maori-versies hebben echter geleid tot aanhoudende debatten over inheemse rechten."
        }
      },
      {
        question: {
          en: "In 1959, which inventor filed the first patent for an integrated circuit?",
          es: "En 1959, ¿qué inventor presentó la primera patente para un circuito integrado?",
          de: "Wer meldete 1959 das erste Patent für einen integrierten Schaltkreis an?",
          nl: "In 1959 diende welke uitvinder het eerste patent in voor een geïntegreerd circuit?"
        },
        options: [
          { en: "William Shockley", es: "William Shockley", de: "William Shockley", nl: "William Shockley" },
          { en: "Jack Kilby", es: "Jack Kilby", de: "Jack Kilby", nl: "Jack Kilby" },
          { en: "Gordon Moore", es: "Gordon Moore", de: "Gordon Moore", nl: "Gordon Moore" },
          { en: "Robert Noyce", es: "Robert Noyce", de: "Robert Noyce", nl: "Robert Noyce" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Jack Kilby filed the first patent for an integrated circuit on February 6, 1959, while working at Texas Instruments. This invention revolutionized electronics by combining multiple transistors on a single chip. Kilby was awarded the Nobel Prize in Physics in 2000 for his groundbreaking work.",
          es: "Jack Kilby presentó la primera patente para un circuito integrado el 6 de febrero de 1959, mientras trabajaba en Texas Instruments. Este invento revolucionó la electrónica al combinar múltiples transistores en un solo chip. Kilby recibió el Premio Nobel de Física en 2000 por su trabajo innovador.",
          de: "Jack Kilby meldete am 6. Februar 1959 das erste Patent für einen integrierten Schaltkreis an, während er bei Texas Instruments arbeitete. Diese Erfindung revolutionierte die Elektronik, indem sie mehrere Transistoren auf einem einzigen Chip kombinierte. Kilby wurde 2000 mit dem Nobelpreis für Physik für seine bahnbrechende Arbeit ausgezeichnet.",
          nl: "Jack Kilby diende op 6 februari 1959 het eerste patent in voor een geïntegreerd circuit, terwijl hij werkte bij Texas Instruments. Deze uitvinding revolutioneerde de elektronica door meerdere transistors op een enkele chip te combineren. Kilby werd in 2000 de Nobelprijs voor Natuurkunde toegekend voor zijn baanbrekend werk."
        }
      },
      {
        question: {
          en: "On February 6, 1958, eight Manchester United F.C. players died in which tragedy?",
          es: "El 6 de febrero de 1958, ocho jugadores del Manchester United F.C. murieron en qué tragedia?",
          de: "Am 6. Februar 1958 starben acht Spieler von Manchester United F.C. bei welcher Tragödie?",
          nl: "Op 6 februari 1958 stierven acht spelers van Manchester United F.C. in welke tragedie?"
        },
        options: [
          { en: "Ferry disaster", es: "Desastre del ferry", de: "Fährunglück", nl: "Veerramp" },
          { en: "Stadium collapse", es: "Colapso del estadio", de: "Stadion-Einsturz", nl: "Stadion instorting" },
          { en: "London train crash", es: "Accidente de tren en Londres", de: "Londoner Zugunglück", nl: "Treinongeval in Londen" },
          { en: "Munich air disaster", es: "Desastre aéreo de Múnich", de: "Flugzeugkatastrophe von München", nl: "Vliegtuigramp van München" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Munich air disaster occurred on February 6, 1958, when a plane carrying Manchester United players crashed during takeoff in snowy conditions. Eight players, known as the 'Busby Babes,' perished along with 15 others. This tragedy deeply affected English football and Manchester United's history.",
          es: "El desastre aéreo de Múnich ocurrió el 6 de febrero de 1958, cuando un avión que transportaba a jugadores del Manchester United se estrelló durante el despegue en condiciones de nieve. Ocho jugadores, conocidos como los 'Busby Babes', perecieron junto con otros 15. Esta tragedia afectó profundamente al fútbol inglés y la historia del Manchester United.",
          de: "Die Flugzeugkatastrophe von München ereignete sich am 6. Februar 1958, als ein Flugzeug mit Manchester United-Spielern beim Start bei Schneebedingungen abstürzte. Acht Spieler, bekannt als die 'Busby Babes', kamen zusammen mit 15 anderen ums Leben. Diese Tragödie betraf den englischen Fußball und die Geschichte von Manchester United zutiefst.",
          nl: "De vliegtuigramp van München vond plaats op 6 februari 1958, toen een vliegtuig met Manchester United-spelers crashte tijdens het opstijgen in besneeuwde omstandigheden. Acht spelers, bekend als de 'Busby Babes', kwamen om samen met 15 anderen. Deze tragedie had een diepe impact op het Engelse voetbal en de geschiedenis van Manchester United."
        }
      }
    ],

    // Day 7 - February 7th: The Beatles & European Union
    day7: [
      {
        question: {
          en: "On February 7, 1964, which British band arrived in New York City, beginning the British Invasion?",
          es: "El 7 de febrero de 1964, ¿qué banda británica llegó a Nueva York, iniciando la invasión británica?",
          de: "Am 7. Februar 1964 kam welche britische Band in New York City an und begann die British Invasion?",
          nl: "Op 7 februari 1964 arriveerde welke Britse band in New York City, wat de British Invasion begon?"
        },
        options: [
          { en: "The Who", es: "The Who", de: "The Who", nl: "The Who" },
          { en: "The Rolling Stones", es: "The Rolling Stones", de: "The Rolling Stones", nl: "The Rolling Stones" },
          { en: "The Beatles", es: "The Beatles", de: "The Beatles", nl: "The Beatles" },
          { en: "The Kinks", es: "The Kinks", de: "The Kinks", nl: "The Kinks" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Beatles arrived at New York's JFK Airport on February 7, 1964, greeted by thousands of screaming fans, marking the start of the British Invasion. They performed on The Ed Sullivan Show two days later to 73 million viewers. This visit transformed American popular music and culture permanently.",
          es: "The Beatles llegaron al aeropuerto JFK de Nueva York el 7 de febrero de 1964, recibidos por miles de fans gritando, marcando el inicio de la invasión británica. Actuaron en The Ed Sullivan Show dos días después ante 73 millones de espectadores. Esta visita transformó permanentemente la música popular y la cultura estadounidense.",
          de: "The Beatles kamen am 7. Februar 1964 am New Yorker JFK-Flughafen an, begrüßt von Tausenden schreiender Fans, und markierten den Beginn der British Invasion. Sie traten zwei Tage später in der Ed Sullivan Show vor 73 Millionen Zuschauern auf. Dieser Besuch veränderte die amerikanische Popmusik und Kultur dauerhaft.",
          nl: "The Beatles arriveerden op 7 februari 1964 op de JFK-luchthaven van New York, begroet door duizenden gillende fans, wat het begin markeerde van de British Invasion. Ze traden twee dagen later op in The Ed Sullivan Show voor 73 miljoen kijkers. Dit bezoek transformeerde de Amerikaanse popmuziek en cultuur permanent."
        }
      },
      {
        question: {
          en: "In 1992, which treaty was signed establishing the European Union?",
          es: "En 1992, ¿qué tratado se firmó estableciendo la Unión Europea?",
          de: "Welcher Vertrag wurde 1992 unterzeichnet, der die Europäische Union gründete?",
          nl: "In 1992 werd welk verdrag getekend dat de Europese Unie oprichtte?"
        },
        options: [
          { en: "Treaty of Paris", es: "Tratado de París", de: "Vertrag von Paris", nl: "Verdrag van Parijs" },
          { en: "Lisbon Treaty", es: "Tratado de Lisboa", de: "Vertrag von Lissabon", nl: "Verdrag van Lissabon" },
          { en: "Maastricht Treaty", es: "Tratado de Maastricht", de: "Vertrag von Maastricht", nl: "Verdrag van Maastricht" },
          { en: "Treaty of Rome", es: "Tratado de Roma", de: "Vertrag von Rom", nl: "Verdrag van Rome" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Maastricht Treaty was signed on February 7, 1992, establishing the European Union and leading to the creation of the euro currency. The treaty transformed the European Economic Community into a political and economic union. It established EU citizenship and laid foundations for common foreign policy and security cooperation.",
          es: "El Tratado de Maastricht se firmó el 7 de febrero de 1992, estableciendo la Unión Europea y llevando a la creación de la moneda euro. El tratado transformó la Comunidad Económica Europea en una unión política y económica. Estableció la ciudadanía de la UE y sentó las bases para una política exterior común y cooperación en seguridad.",
          de: "Der Vertrag von Maastricht wurde am 7. Februar 1992 unterzeichnet und gründete die Europäische Union, was zur Schaffung der Euro-Währung führte. Der Vertrag verwandelte die Europäische Wirtschaftsgemeinschaft in eine politische und wirtschaftliche Union. Er etablierte die EU-Bürgerschaft und legte Grundlagen für gemeinsame Außenpolitik und Sicherheitszusammenarbeit.",
          nl: "Het Verdrag van Maastricht werd ondertekend op 7 februari 1992, waarbij de Europese Unie werd opgericht en wat leidde tot de creatie van de eurovaluta. Het verdrag transformeerde de Europese Economische Gemeenschap in een politieke en economische unie. Het vestigde EU-burgerschap en legde fundamenten voor gemeenschappelijk buitenlands beleid en veiligheidsamenwerking."
        }
      },
      {
        question: {
          en: "In 1984, which NASA astronauts took the first untethered spacewalk?",
          es: "En 1984, ¿qué astronautas de la NASA realizaron la primera caminata espacial sin ataduras?",
          de: "Welche NASA-Astronauten machten 1984 den ersten ungebundenen Weltraumspaziergang?",
          nl: "In 1984 maakten welke NASA-astronauten de eerste ongebonden ruimtewandeling?"
        },
        options: [
          { en: "Bruce McCandless and Robert L. Stewart", es: "Bruce McCandless y Robert L. Stewart", de: "Bruce McCandless und Robert L. Stewart", nl: "Bruce McCandless en Robert L. Stewart" },
          { en: "Neil Armstrong and Buzz Aldrin", es: "Neil Armstrong y Buzz Aldrin", de: "Neil Armstrong und Buzz Aldrin", nl: "Neil Armstrong en Buzz Aldrin" },
          { en: "Sally Ride and Christa McAuliffe", es: "Sally Ride y Christa McAuliffe", de: "Sally Ride und Christa McAuliffe", nl: "Sally Ride en Christa McAuliffe" },
          { en: "John Glenn and Alan Shepard", es: "John Glenn y Alan Shepard", de: "John Glenn und Alan Shepard", nl: "John Glenn en Alan Shepard" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Bruce McCandless and Robert L. Stewart performed the first untethered spacewalk on February 7, 1984, using the Manned Maneuvering Unit (MMU). This nitrogen-jet propelled backpack allowed astronauts to move freely in space without safety tethers. The historic spacewalk demonstrated the feasibility of autonomous astronaut movement in orbit.",
          es: "Bruce McCandless y Robert L. Stewart realizaron la primera caminata espacial sin ataduras el 7 de febrero de 1984, usando la Unidad de Maniobra Tripulada (MMU). Esta mochila propulsada por jets de nitrógeno permitió a los astronautas moverse libremente en el espacio sin ataduras de seguridad. La histórica caminata espacial demostró la viabilidad del movimiento autónomo de astronautas en órbita.",
          de: "Bruce McCandless und Robert L. Stewart führten am 7. Februar 1984 den ersten ungebundenen Weltraumspaziergang durch, wobei sie die Manned Maneuvering Unit (MMU) verwendeten. Dieser mit Stickstoffdüsen angetriebene Rucksack ermöglichte es Astronauten, sich frei im Weltraum ohne Sicherheitsleinen zu bewegen. Der historische Weltraumspaziergang demonstrierte die Machbarkeit autonomer Astronautenbewegung im Orbit.",
          nl: "Bruce McCandless en Robert L. Stewart voerden de eerste ongebonden ruimtewandeling uit op 7 februari 1984, met gebruik van de Manned Maneuvering Unit (MMU). Deze met stikstofstralen aangedreven rugzak stelde astronauten in staat zich vrij in de ruimte te bewegen zonder veiligheidslijnen. De historische ruimtewandeling toonde de haalbaarheid van autonome astronautenbeweging in een baan."
        }
      },
      {
        question: {
          en: "In 1971, which country granted women the right to vote in federal elections?",
          es: "En 1971, ¿qué país otorgó a las mujeres el derecho al voto en elecciones federales?",
          de: "Welches Land gewährte 1971 Frauen das Wahlrecht bei Bundeswahlen?",
          nl: "In 1971 verleende welk land vrouwen het stemrecht bij federale verkiezingen?"
        },
        options: [
          { en: "Switzerland", es: "Suiza", de: "Schweiz", nl: "Zwitserland" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Switzerland granted women the right to vote in federal elections on February 7, 1971, making it one of the last Western democracies to do so. The decision came after a national referendum passed with 65.7% approval. Some Swiss cantons had resisted women's suffrage until the 1990s for local elections.",
          es: "Suiza otorgó a las mujeres el derecho al voto en elecciones federales el 7 de febrero de 1971, convirtiéndose en una de las últimas democracias occidentales en hacerlo. La decisión llegó después de que un referéndum nacional pasara con 65.7% de aprobación. Algunos cantones suizos resistieron el sufragio femenino hasta la década de 1990 para elecciones locales.",
          de: "Die Schweiz gewährte Frauen am 7. Februar 1971 das Wahlrecht bei Bundeswahlen und war damit eine der letzten westlichen Demokratien, die dies tat. Die Entscheidung kam nach einem nationalen Referendum mit 65,7% Zustimmung. Einige Schweizer Kantone widersetzten sich dem Frauenwahlrecht bis in die 1990er Jahre bei lokalen Wahlen.",
          nl: "Zwitserland verleende vrouwen het stemrecht bij federale verkiezingen op 7 februari 1971, waarmee het een van de laatste Westerse democratieën was die dit deed. De beslissing kwam na een nationaal referendum dat met 65,7% goedkeuring werd aangenomen. Sommige Zwitserse kantons verzetten zich tot in de jaren 1990 tegen vrouwenkiesrecht bij lokale verkiezingen."
        }
      },
      {
        question: {
          en: "In 1940, which Disney animated film was released featuring the song 'When You Wish Upon a Star'?",
          es: "En 1940, ¿qué película animada de Disney se estrenó con la canción 'Cuando desees sobre una estrella'?",
          de: "Welcher Disney-Animationsfilm mit dem Lied 'When You Wish Upon a Star' wurde 1940 veröffentlicht?",
          nl: "In 1940 werd welke Disney-animatiefilm uitgebracht met het lied 'When You Wish Upon a Star'?"
        },
        options: [
          { en: "Fantasia", es: "Fantasía", de: "Fantasia", nl: "Fantasia" },
          { en: "Bambi", es: "Bambi", de: "Bambi", nl: "Bambi" },
          { en: "Pinocchio", es: "Pinocho", de: "Pinocchio", nl: "Pinokkio" },
          { en: "Snow White", es: "Blancanieves", de: "Schneewittchen", nl: "Sneeuwwitje" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Pinocchio was released by Disney on February 7, 1940, featuring the iconic song 'When You Wish Upon a Star.' This song won the Academy Award for Best Original Song and became Disney's signature theme. The film tells the story of a wooden puppet who dreams of becoming a real boy.",
          es: "Pinocho fue estrenado por Disney el 7 de febrero de 1940, presentando la icónica canción 'When You Wish Upon a Star'. Esta canción ganó el Premio de la Academia a la Mejor Canción Original y se convirtió en el tema característico de Disney. La película cuenta la historia de un títere de madera que sueña con convertirse en un niño real.",
          de: "Pinocchio wurde von Disney am 7. Februar 1940 veröffentlicht und enthielt das ikonische Lied 'When You Wish Upon a Star'. Dieses Lied gewann den Academy Award für den besten Originalsong und wurde Disneys charakteristische Melodie. Der Film erzählt die Geschichte einer Holzpuppe, die davon träumt, ein echter Junge zu werden.",
          nl: "Pinokkio werd op 7 februari 1940 door Disney uitgebracht, met het iconische lied 'When You Wish Upon a Star'. Dit lied won de Academy Award voor Beste Originele Lied en werd Disney's kenmerkende thema. De film vertelt het verhaal van een houten pop die ervan droomt een echte jongen te worden."
        }
      }
    ],

    // Day 8 - February 8th: Boy Scouts & Mary Queen of Scots
    day8: [
      {
        question: {
          en: "On February 8, 1910, which youth organization was incorporated in the United States?",
          es: "El 8 de febrero de 1910, ¿qué organización juvenil se incorporó en Estados Unidos?",
          de: "Am 8. Februar 1910 wurde welche Jugendorganisation in den Vereinigten Staaten gegründet?",
          nl: "Op 8 februari 1910 werd welke jeugdorganisatie opgericht in de Verenigde Staten?"
        },
        options: [
          { en: "Girl Scouts", es: "Girl Scouts", de: "Girl Scouts", nl: "Girl Scouts" },
          { en: "4-H Club", es: "Club 4-H", de: "4-H Club", nl: "4-H Club" },
          { en: "Boy Scouts of America", es: "Boy Scouts de América", de: "Boy Scouts of America", nl: "Boy Scouts of America" },
          { en: "YMCA", es: "YMCA", de: "YMCA", nl: "YMCA" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Boy Scouts of America was officially incorporated on February 8, 1910, by William D. Boyce in Washington, D.C. The organization was inspired by the British Scouting movement founded by Robert Baden-Powell. It aims to train youth in responsible citizenship, character development, and self-reliance through outdoor activities.",
          es: "Los Boy Scouts de América fueron incorporados oficialmente el 8 de febrero de 1910 por William D. Boyce en Washington, D.C. La organización fue inspirada por el movimiento Scout británico fundado por Robert Baden-Powell. Su objetivo es entrenar a los jóvenes en ciudadanía responsable, desarrollo del carácter y autosuficiencia a través de actividades al aire libre.",
          de: "Die Boy Scouts of America wurden am 8. Februar 1910 von William D. Boyce in Washington, D.C. offiziell gegründet. Die Organisation wurde von der britischen Pfadfinderbewegung inspiriert, die von Robert Baden-Powell gegründet wurde. Sie zielt darauf ab, Jugendliche in verantwortungsvoller Staatsbürgerschaft, Charakterentwicklung und Selbständigkeit durch Outdoor-Aktivitäten zu schulen.",
          nl: "De Boy Scouts of America werden officieel opgericht op 8 februari 1910 door William D. Boyce in Washington, D.C. De organisatie was geïnspireerd door de Britse Scoutingbeweging opgericht door Robert Baden-Powell. Het doel is jongeren te trainen in verantwoordelijk burgerschap, karakterontwikkeling en zelfstandigheid door buitenactiviteiten."
        }
      },
      {
        question: {
          en: "In 1587, which Scottish queen was executed on suspicion of plotting to murder Queen Elizabeth I?",
          es: "En 1587, ¿qué reina escocesa fue ejecutada por sospechas de conspirar para asesinar a la Reina Isabel I?",
          de: "Welche schottische Königin wurde 1587 wegen des Verdachts hingerichtet, Königin Elisabeth I. ermordet zu haben?",
          nl: "In 1587 werd welke Schotse koningin geëxecuteerd op verdenking van een complot om koningin Elizabeth I te vermoorden?"
        },
        options: [
          { en: "Mary, Queen of Scots", es: "María, Reina de Escocia", de: "Maria Stuart", nl: "Maria, Koningin van Schotland" },
          { en: "Anne Boleyn", es: "Ana Bolena", de: "Anne Boleyn", nl: "Anne Boleyn" },
          { en: "Lady Jane Grey", es: "Lady Jane Grey", de: "Lady Jane Grey", nl: "Lady Jane Grey" },
          { en: "Catherine Howard", es: "Catalina Howard", de: "Catherine Howard", nl: "Catherine Howard" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Mary, Queen of Scots was executed on February 8, 1587, at Fotheringhay Castle after being imprisoned for nearly 19 years. She was convicted of complicity in plots to assassinate Queen Elizabeth I and claim the English throne. Her execution ended a long rivalry between the two queens and Catholic-Protestant tensions.",
          es: "María, Reina de Escocia fue ejecutada el 8 de febrero de 1587 en el Castillo de Fotheringhay después de estar encarcelada durante casi 19 años. Fue condenada por complicidad en complots para asesinar a la Reina Isabel I y reclamar el trono inglés. Su ejecución puso fin a una larga rivalidad entre las dos reinas y tensiones católico-protestantes.",
          de: "Maria Stuart wurde am 8. Februar 1587 auf Schloss Fotheringhay hingerichtet, nachdem sie fast 19 Jahre lang inhaftiert war. Sie wurde wegen Beteiligung an Komplotten zur Ermordung von Königin Elisabeth I. und Anspruch auf den englischen Thron verurteilt. Ihre Hinrichtung beendete eine lange Rivalität zwischen den beiden Königinnen und katholisch-protestantische Spannungen.",
          nl: "Maria, Koningin van Schotland werd geëxecuteerd op 8 februari 1587 in Fotheringhay Castle na bijna 19 jaar gevangen te hebben gezeten. Ze werd veroordeeld voor medeplichtigheid aan complotten om koningin Elizabeth I te vermoorden en de Engelse troon op te eisen. Haar executie beëindigde een lange rivaliteit tussen de twee koninginnen en katholiek-protestantse spanningen."
        }
      },
      {
        question: {
          en: "In 1904, which war began when Japan launched a surprise attack on Russian-controlled Port Arthur?",
          es: "En 1904, ¿qué guerra comenzó cuando Japón lanzó un ataque sorpresa contra Port Arthur controlado por Rusia?",
          de: "Welcher Krieg begann 1904, als Japan einen Überraschungsangriff auf das von Russland kontrollierte Port Arthur startete?",
          nl: "In 1904 begon welke oorlog toen Japan een verrassingsaanval uitvoerde op het door Rusland gecontroleerde Port Arthur?"
        },
        options: [
          { en: "World War I", es: "Primera Guerra Mundial", de: "Erster Weltkrieg", nl: "Eerste Wereldoorlog" },
          { en: "Russo-Japanese War", es: "Guerra Ruso-Japonesa", de: "Russisch-Japanischer Krieg", nl: "Russisch-Japanse Oorlog" },
          { en: "Korean War", es: "Guerra de Corea", de: "Koreakrieg", nl: "Koreaanse Oorlog" },
          { en: "Sino-Japanese War", es: "Guerra Sino-Japonesa", de: "Chinesisch-Japanischer Krieg", nl: "Chinees-Japanse Oorlog" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Russo-Japanese War began on February 8, 1904, with a surprise Japanese naval attack on the Russian fleet at Port Arthur. This conflict was fought over rival imperial ambitions in Manchuria and Korea. Japan's victory shocked the world, marking the first time an Asian power defeated a European power in modern warfare.",
          es: "La Guerra Ruso-Japonesa comenzó el 8 de febrero de 1904 con un ataque naval sorpresa japonés a la flota rusa en Port Arthur. Este conflicto se libró por ambiciones imperiales rivales en Manchuria y Corea. La victoria de Japón sorprendió al mundo, marcando la primera vez que una potencia asiática derrotó a una potencia europea en la guerra moderna.",
          de: "Der Russisch-Japanische Krieg begann am 8. Februar 1904 mit einem überraschenden japanischen Marineangriff auf die russische Flotte in Port Arthur. Dieser Konflikt wurde um rivalisierende imperiale Ambitionen in der Mandschurei und Korea geführt. Japans Sieg schockierte die Welt und markierte das erste Mal, dass eine asiatische Macht eine europäische Macht in moderner Kriegsführung besiegte.",
          nl: "De Russisch-Japanse Oorlog begon op 8 februari 1904 met een verrassende Japanse zeemachtaanval op de Russische vloot in Port Arthur. Dit conflict werd uitgevochten om rivaliserende imperialistische ambities in Mantsjoerije en Korea. Japan's overwinning schokte de wereld en markeerde de eerste keer dat een Aziatische macht een Europese macht versloeg in moderne oorlogsvoering."
        }
      },
      {
        question: {
          en: "In 2018, which company successfully launched the Falcon Heavy rocket?",
          es: "En 2018, ¿qué compañía lanzó exitosamente el cohete Falcon Heavy?",
          de: "Welches Unternehmen startete 2018 erfolgreich die Falcon Heavy-Rakete?",
          nl: "In 2018 lanceerde welk bedrijf met succes de Falcon Heavy-raket?"
        },
        options: [
          { en: "NASA", es: "NASA", de: "NASA", nl: "NASA" },
          { en: "Blue Origin", es: "Blue Origin", de: "Blue Origin", nl: "Blue Origin" },
          { en: "SpaceX", es: "SpaceX", de: "SpaceX", nl: "SpaceX" },
          { en: "Boeing", es: "Boeing", de: "Boeing", nl: "Boeing" }
        ],
        correctIndex: 2,
        explanation: {
          en: "SpaceX successfully launched the Falcon Heavy rocket on February 8, 2018, from Kennedy Space Center. This became the most powerful operational rocket in the world at the time. The test flight famously carried Elon Musk's Tesla Roadster as a dummy payload into space.",
          es: "SpaceX lanzó exitosamente el cohete Falcon Heavy el 8 de febrero de 2018 desde el Centro Espacial Kennedy. Este se convirtió en el cohete operacional más poderoso del mundo en ese momento. El vuelo de prueba llevó famosamente el Tesla Roadster de Elon Musk como carga simulada al espacio.",
          de: "SpaceX startete erfolgreich die Falcon Heavy-Rakete am 8. Februar 2018 vom Kennedy Space Center. Dies wurde die leistungsstärkste operative Rakete der Welt zu dieser Zeit. Der Testflug trug berühmt Elon Musks Tesla Roadster als Dummy-Nutzlast ins All.",
          nl: "SpaceX lanceerde met succes de Falcon Heavy-raket op 8 februari 2018 vanaf het Kennedy Space Center. Dit werd de krachtigste operationele raket ter wereld op dat moment. De testvlucht droeg beroemd Elon Musk's Tesla Roadster als dummy-lading de ruimte in."
        }
      },
      {
        question: {
          en: "In 1960, construction began on which famous Hollywood landmark?",
          es: "En 1960, comenzó la construcción de qué famoso monumento de Hollywood?",
          de: "1960 begann der Bau welches berühmten Hollywood-Wahrzeichens?",
          nl: "In 1960 begon de bouw van welk beroemd Hollywood-monument?"
        },
        options: [
          { en: "Hollywood Walk of Fame", es: "Paseo de la Fama de Hollywood", de: "Hollywood Walk of Fame", nl: "Hollywood Walk of Fame" },
          { en: "Grauman's Chinese Theatre", es: "Teatro Chino de Grauman", de: "Grauman's Chinese Theatre", nl: "Grauman's Chinese Theatre" },
          { en: "Hollywood Sign", es: "Letrero de Hollywood", de: "Hollywood-Schriftzug", nl: "Hollywood-bord" },
          { en: "Capitol Records Building", es: "Edificio Capitol Records", de: "Capitol Records Building", nl: "Capitol Records Building" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Construction began on the Hollywood Walk of Fame on February 8, 1960, honoring achievements in the entertainment industry. The first star was officially dedicated to actress Joanne Woodward on March 28, 1960. Today, the Walk of Fame features over 2,700 stars embedded in the sidewalks along Hollywood Boulevard.",
          es: "La construcción del Paseo de la Fama de Hollywood comenzó el 8 de febrero de 1960, honrando logros en la industria del entretenimiento. La primera estrella fue dedicada oficialmente a la actriz Joanne Woodward el 28 de marzo de 1960. Hoy, el Paseo de la Fama cuenta con más de 2,700 estrellas incrustadas en las aceras a lo largo de Hollywood Boulevard.",
          de: "Der Bau des Hollywood Walk of Fame begann am 8. Februar 1960 und ehrt Leistungen in der Unterhaltungsindustrie. Der erste Stern wurde offiziell der Schauspielerin Joanne Woodward am 28. März 1960 gewidmet. Heute umfasst der Walk of Fame über 2.700 Sterne, die in die Gehwege entlang des Hollywood Boulevard eingelassen sind.",
          nl: "De bouw van de Hollywood Walk of Fame begon op 8 februari 1960, ter ere van prestaties in de entertainmentindustrie. De eerste ster werd officieel gewijd aan actrice Joanne Woodward op 28 maart 1960. Vandaag telt de Walk of Fame meer dan 2.700 sterren ingebed in de trottoirs langs Hollywood Boulevard."
        }
      }
    ],

    // Day 9 - February 9th: The Beatles on Ed Sullivan Show
    day9: [
      {
        question: {
          en: "On February 9, 1964, The Beatles performed on which American TV show, watched by 73 million viewers?",
          es: "El 9 de febrero de 1964, The Beatles actuaron en qué programa de televisión estadounidense, visto por 73 millones de espectadores?",
          de: "Am 9. Februar 1964 traten The Beatles in welcher amerikanischen TV-Show auf, die von 73 Millionen Zuschauern gesehen wurde?",
          nl: "Op 9 februari 1964 traden The Beatles op in welke Amerikaanse tv-show, bekeken door 73 miljoen kijkers?"
        },
        options: [
          { en: "American Bandstand", es: "American Bandstand", de: "American Bandstand", nl: "American Bandstand" },
          { en: "The Carol Burnett Show", es: "The Carol Burnett Show", de: "The Carol Burnett Show", nl: "The Carol Burnett Show" },
          { en: "The Ed Sullivan Show", es: "The Ed Sullivan Show", de: "The Ed Sullivan Show", nl: "The Ed Sullivan Show" },
          { en: "The Tonight Show", es: "The Tonight Show", de: "The Tonight Show", nl: "The Tonight Show" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Beatles performed on The Ed Sullivan Show on February 9, 1964, two days after arriving in New York. This historic performance attracted 73 million viewers, representing 60% of American television sets. The appearance is considered a pivotal moment in music history and American pop culture.",
          es: "The Beatles actuaron en The Ed Sullivan Show el 9 de febrero de 1964, dos días después de llegar a Nueva York. Esta actuación histórica atrajo a 73 millones de espectadores, representando el 60% de los televisores estadounidenses. La aparición se considera un momento crucial en la historia de la música y la cultura pop estadounidense.",
          de: "The Beatles traten am 9. Februar 1964 in der Ed Sullivan Show auf, zwei Tage nach ihrer Ankunft in New York. Diese historische Aufführung zog 73 Millionen Zuschauer an, was 60% der amerikanischen Fernsehgeräte entsprach. Der Auftritt gilt als entscheidender Moment in der Musikgeschichte und amerikanischen Popkultur.",
          nl: "The Beatles traden op 9 februari 1964 op in The Ed Sullivan Show, twee dagen na aankomst in New York. Deze historische optreden trok 73 miljoen kijkers, wat 60% van de Amerikaanse tv-toestellen vertegenwoordigde. Het optreden wordt beschouwd als een cruciaal moment in de muziekgeschiedenis en Amerikaanse popcultuur."
        }
      },
      {
        question: {
          en: "What percentage of American TVs were tuned to watch The Beatles on February 9, 1964?",
          es: "¿Qué porcentaje de televisores estadounidenses estaban sintonizados para ver a The Beatles el 9 de febrero de 1964?",
          de: "Welcher Prozentsatz der amerikanischen Fernseher war eingeschaltet, um The Beatles am 9. Februar 1964 zu sehen?",
          nl: "Welk percentage van de Amerikaanse tv's was afgestemd om The Beatles te zien op 9 februari 1964?"
        },
        options: [
          { en: "40%", es: "40%", de: "40%", nl: "40%" },
          { en: "60%", es: "60%", de: "60%", nl: "60%" },
          { en: "70%", es: "70%", de: "70%", nl: "70%" },
          { en: "50%", es: "50%", de: "50%", nl: "50%" }
        ],
        correctIndex: 1,
        explanation: {
          en: "An estimated 60% of American television sets were tuned to watch The Beatles on The Ed Sullivan Show, amounting to 73 million viewers. This massive audience share was unprecedented for a music performance. The show's ratings record demonstrated the extraordinary cultural impact of Beatlemania on American society.",
          es: "Se estima que el 60% de los televisores estadounidenses estaban sintonizados para ver a The Beatles en The Ed Sullivan Show, totalizando 73 millones de espectadores. Esta enorme cuota de audiencia fue sin precedentes para una actuación musical. El récord de audiencia del programa demostró el extraordinario impacto cultural de la Beatlemanía en la sociedad estadounidense.",
          de: "Schätzungsweise 60% der amerikanischen Fernsehgeräte waren eingeschaltet, um The Beatles in der Ed Sullivan Show zu sehen, was 73 Millionen Zuschauern entsprach. Dieser massive Zuschaueranteil war beispiellos für eine Musikaufführung. Die Einschaltquoten der Show zeigten die außergewöhnliche kulturelle Auswirkung der Beatlemania auf die amerikanische Gesellschaft.",
          nl: "Naar schatting 60% van de Amerikaanse tv-toestellen waren afgestemd om The Beatles te zien in The Ed Sullivan Show, wat neerkomt op 73 miljoen kijkers. Dit enorme kijkcijferaandeel was ongekend voor een muziekoptreden. De kijkcijferrecord van de show toonde de buitengewone culturele impact van Beatlemania op de Amerikaanse samenleving."
        }
      },
      {
        question: {
          en: "Which Beatles song opened their first Ed Sullivan Show performance?",
          es: "¿Qué canción de The Beatles abrió su primera actuación en el Ed Sullivan Show?",
          de: "Welcher Beatles-Song eröffnete ihre erste Ed Sullivan Show-Performance?",
          nl: "Welk Beatles-nummer opende hun eerste Ed Sullivan Show-optreden?"
        },
        options: [
          { en: "She Loves You", es: "She Loves You", de: "She Loves You", nl: "She Loves You" },
          { en: "I Want to Hold Your Hand", es: "I Want to Hold Your Hand", de: "I Want to Hold Your Hand", nl: "I Want to Hold Your Hand" },
          { en: "All My Loving", es: "All My Loving", de: "All My Loving", nl: "All My Loving" },
          { en: "Twist and Shout", es: "Twist and Shout", de: "Twist and Shout", nl: "Twist and Shout" }
        ],
        correctIndex: 2,
        explanation: {
          en: "'All My Loving' opened The Beatles' first performance on The Ed Sullivan Show on February 9, 1964. The band performed five songs total during the show. This opening song set the tone for their triumphant American debut and showcased Paul McCartney's vocals.",
          es: "'All My Loving' abrió la primera actuación de The Beatles en The Ed Sullivan Show el 9 de febrero de 1964. La banda interpretó cinco canciones en total durante el programa. Esta canción de apertura marcó el tono para su triunfante debut estadounidense y mostró las vocales de Paul McCartney.",
          de: "'All My Loving' eröffnete The Beatles' ersten Auftritt in der Ed Sullivan Show am 9. Februar 1964. Die Band spielte insgesamt fünf Songs während der Show. Dieses Eröffnungslied setzte den Ton für ihr triumphales amerikanisches Debüt und zeigte Paul McCartneys Gesang.",
          nl: "'All My Loving' opende The Beatles' eerste optreden in The Ed Sullivan Show op 9 februari 1964. De band speelde in totaal vijf nummers tijdens de show. Dit openingsnummer zette de toon voor hun triomfantelijke Amerikaanse debuut en toonde Paul McCartney's vocalen."
        }
      },
      {
        question: {
          en: "In 1773, which future U.S. president was born on February 9?",
          es: "En 1773, ¿qué futuro presidente de EE.UU. nació el 9 de febrero?",
          de: "Welcher zukünftige US-Präsident wurde 1773 am 9. Februar geboren?",
          nl: "In 1773 werd welke toekomstige Amerikaanse president geboren op 9 februari?"
        },
        options: [
          { en: "James Madison", es: "James Madison", de: "James Madison", nl: "James Madison" },
          { en: "William Henry Harrison", es: "William Henry Harrison", de: "William Henry Harrison", nl: "William Henry Harrison" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" }
        ],
        correctIndex: 1,
        explanation: {
          en: "William Henry Harrison was born on February 9, 1773, and became the 9th President of the United States in 1841. He served the shortest presidential term in history, dying just 31 days after his inauguration. Harrison was also a military officer who played a key role in the War of 1812.",
          es: "William Henry Harrison nació el 9 de febrero de 1773 y se convirtió en el noveno presidente de los Estados Unidos en 1841. Sirvió el mandato presidencial más corto de la historia, muriendo solo 31 días después de su investidura. Harrison también fue un oficial militar que desempeñó un papel clave en la Guerra de 1812.",
          de: "William Henry Harrison wurde am 9. Februar 1773 geboren und wurde 1841 der 9. Präsident der Vereinigten Staaten. Er hatte die kürzeste Präsidentschaftsperiode in der Geschichte und starb nur 31 Tage nach seiner Amtseinführung. Harrison war auch ein Militäroffizier, der eine Schlüsselrolle im Krieg von 1812 spielte.",
          nl: "William Henry Harrison werd geboren op 9 februari 1773 en werd de 9e president van de Verenigde Staten in 1841. Hij diende de kortste presidentiële termijn in de geschiedenis en stierf slechts 31 dagen na zijn inauguratie. Harrison was ook een militaire officier die een sleutelrol speelde in de Oorlog van 1812."
        }
      },
      {
        question: {
          en: "In 1918, which newly independent state signed a peace treaty ending its involvement in World War I?",
          es: "En 1918, ¿qué estado recién independizado firmó un tratado de paz poniendo fin a su participación en la Primera Guerra Mundial?",
          de: "Welcher neu unabhängige Staat unterzeichnete 1918 einen Friedensvertrag zur Beendigung seiner Beteiligung am Ersten Weltkrieg?",
          nl: "In 1918 ondertekende welke nieuw onafhankelijke staat een vredesverdrag om zijn betrokkenheid bij de Eerste Wereldoorlog te beëindigen?"
        },
        options: [
          { en: "Estonia", es: "Estonia", de: "Estland", nl: "Estland" },
          { en: "Poland", es: "Polonia", de: "Polen", nl: "Polen" },
          { en: "Finland", es: "Finlandia", de: "Finnland", nl: "Finland" },
          { en: "Ukraine", es: "Ucrania", de: "Ukraine", nl: "Oekraïne" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Ukraine signed the Treaty of Brest-Litovsk on February 9, 1918, with the Central Powers after declaring independence from Russia. This treaty ended Ukraine's involvement in World War I but resulted in significant territorial concessions. The Ukrainian People's Republic sought to establish sovereignty during the chaos following the Russian Revolution.",
          es: "Ucrania firmó el Tratado de Brest-Litovsk el 9 de febrero de 1918 con las Potencias Centrales después de declarar la independencia de Rusia. Este tratado terminó la participación de Ucrania en la Primera Guerra Mundial pero resultó en concesiones territoriales significativas. La República Popular Ucraniana buscó establecer soberanía durante el caos que siguió a la Revolución Rusa.",
          de: "Die Ukraine unterzeichnete am 9. Februar 1918 den Vertrag von Brest-Litovsk mit den Mittelmächten nach der Unabhängigkeitserklärung von Russland. Dieser Vertrag beendete die Beteiligung der Ukraine am Ersten Weltkrieg, führte aber zu erheblichen territorialen Zugeständnissen. Die Ukrainische Volksrepublik versuchte, während des Chaos nach der Russischen Revolution Souveränität zu etablieren.",
          nl: "Oekraïne ondertekende het Verdrag van Brest-Litovsk op 9 februari 1918 met de Centrale Mogendheden na onafhankelijkheid van Rusland te hebben uitgeroepen. Dit verdrag beëindigde Oekraïne's betrokkenheid bij de Eerste Wereldoorlog maar resulteerde in aanzienlijke territoriale concessies. De Oekraïense Volksrepubliek probeerde soevereiniteit te vestigen tijdens de chaos na de Russische Revolutie."
        }
      }
    ],

    // Day 10 - February 10th: Gary Powers & Historic Treaties
    day10: [
      {
        question: {
          en: "On February 10, 1962, which American spy pilot was released by the Soviets in exchange for Soviet Colonel Rudolf Abel?",
          es: "El 10 de febrero de 1962, ¿qué piloto espía estadounidense fue liberado por los soviéticos a cambio del coronel soviético Rudolf Abel?",
          de: "Am 10. Februar 1962 wurde welcher amerikanische Spionagepilot von den Sowjets im Austausch gegen den sowjetischen Oberst Rudolf Abel freigelassen?",
          nl: "Op 10 februari 1962 werd welke Amerikaanse spionne-piloot door de Sovjets vrijgelaten in ruil voor Sovjet-kolonel Rudolf Abel?"
        },
        options: [
          { en: "Neil Armstrong", es: "Neil Armstrong", de: "Neil Armstrong", nl: "Neil Armstrong" },
          { en: "Francis Gary Powers", es: "Francis Gary Powers", de: "Francis Gary Powers", nl: "Francis Gary Powers" },
          { en: "John Glenn", es: "John Glenn", de: "John Glenn", nl: "John Glenn" },
          { en: "Chuck Yeager", es: "Chuck Yeager", de: "Chuck Yeager", nl: "Chuck Yeager" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Francis Gary Powers was released on February 10, 1962, on the Glienicke Bridge in Berlin in a famous Cold War prisoner exchange. Powers had been shot down in his U-2 spy plane over the Soviet Union in 1960. The exchange symbolized Cold War tensions and the espionage activities between superpowers.",
          es: "Francis Gary Powers fue liberado el 10 de febrero de 1962 en el Puente de Glienicke en Berlín en un famoso intercambio de prisioneros de la Guerra Fría. Powers había sido derribado en su avión espía U-2 sobre la Unión Soviética en 1960. El intercambio simbolizó las tensiones de la Guerra Fría y las actividades de espionaje entre superpotencias.",
          de: "Francis Gary Powers wurde am 10. Februar 1962 auf der Glienicker Brücke in Berlin in einem berühmten Gefangenenaustausch des Kalten Krieges freigelassen. Powers war 1960 in seinem U-2-Spionageflugzeug über der Sowjetunion abgeschossen worden. Der Austausch symbolisierte die Spannungen des Kalten Krieges und die Spionageaktivitäten zwischen den Supermächten.",
          nl: "Francis Gary Powers werd vrijgelaten op 10 februari 1962 op de Glienicke Brug in Berlijn in een beroemde Koude Oorlog gevangenenuitwisseling. Powers was in 1960 neergeschoten in zijn U-2 spionagevliegtuig boven de Sovjet-Unie. De uitwisseling symboliseerde de spanningen van de Koude Oorlog en de spionageactiviteiten tussen supermachten."
        }
      },
      {
        question: {
          en: "In 1763, which treaty ended the Seven Years' War?",
          es: "En 1763, ¿qué tratado puso fin a la Guerra de los Siete Años?",
          de: "Welcher Vertrag beendete 1763 den Siebenjährigen Krieg?",
          nl: "In 1763 beëindigde welk verdrag de Zevenjarige Oorlog?"
        },
        options: [
          { en: "Treaty of Utrecht", es: "Tratado de Utrecht", de: "Vertrag von Utrecht", nl: "Verdrag van Utrecht" },
          { en: "Treaty of Ghent", es: "Tratado de Gante", de: "Vertrag von Gent", nl: "Verdrag van Gent" },
          { en: "Treaty of Paris", es: "Tratado de París", de: "Vertrag von Paris", nl: "Verdrag van Parijs" },
          { en: "Treaty of Versailles", es: "Tratado de Versalles", de: "Vertrag von Versailles", nl: "Verdrag van Versailles" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Treaty of Paris was signed on February 10, 1763, ending the Seven Years' War between Britain, France, and Spain. This treaty reshaped colonial territories, with Britain gaining Canada and Florida. It established Britain as the dominant colonial power and set the stage for future American independence movements.",
          es: "El Tratado de París fue firmado el 10 de febrero de 1763, poniendo fin a la Guerra de los Siete Años entre Gran Bretaña, Francia y España. Este tratado reconfiguró los territorios coloniales, con Gran Bretaña ganando Canadá y Florida. Estableció a Gran Bretaña como la potencia colonial dominante y preparó el escenario para futuros movimientos de independencia estadounidense.",
          de: "Der Vertrag von Paris wurde am 10. Februar 1763 unterzeichnet und beendete den Siebenjährigen Krieg zwischen Großbritannien, Frankreich und Spanien. Dieser Vertrag gestaltete Kolonialgebiete neu, wobei Großbritannien Kanada und Florida gewann. Er etablierte Großbritannien als dominierende Kolonialmacht und bereitete die Bühne für zukünftige amerikanische Unabhängigkeitsbewegungen.",
          nl: "Het Verdrag van Parijs werd ondertekend op 10 februari 1763, wat een einde maakte aan de Zevenjarige Oorlog tussen Groot-Brittannië, Frankrijk en Spanje. Dit verdrag hertekende koloniale gebieden, waarbij Groot-Brittannië Canada en Florida verwierf. Het vestigde Groot-Brittannië als de dominante koloniale macht en zette de toon voor toekomstige Amerikaanse onafhankelijkheidsbewegingen."
        }
      },
      {
        question: {
          en: "In 1967, which constitutional amendment was ratified, clarifying presidential succession?",
          es: "En 1967, ¿qué enmienda constitucional se ratificó, aclarando la sucesión presidencial?",
          de: "Welche Verfassungsergänzung wurde 1967 ratifiziert, die die Präsidentennachfolge klärte?",
          nl: "In 1967 werd welk grondwetswijziging geratificeerd dat de presidentiële opvolging verduidelijkte?"
        },
        options: [
          { en: "24th Amendment", es: "Enmienda 24", de: "24. Zusatzartikel", nl: "24e Amendement" },
          { en: "22nd Amendment", es: "Enmienda 22", de: "22. Zusatzartikel", nl: "22e Amendement" },
          { en: "26th Amendment", es: "Enmienda 26", de: "26. Zusatzartikel", nl: "26e Amendement" },
          { en: "25th Amendment", es: "Enmienda 25", de: "25. Zusatzartikel", nl: "25e Amendement" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The 25th Amendment was ratified on February 10, 1967, establishing clear procedures for presidential succession and disability. It addresses what happens if a president dies, resigns, or becomes incapacitated. This amendment was proposed following President Kennedy's assassination and clarified vice presidential succession protocols.",
          es: "La Enmienda 25 fue ratificada el 10 de febrero de 1967, estableciendo procedimientos claros para la sucesión y discapacidad presidencial. Aborda qué sucede si un presidente muere, renuncia o queda incapacitado. Esta enmienda fue propuesta después del asesinato del presidente Kennedy y aclaró los protocolos de sucesión vicepresidencial.",
          de: "Der 25. Zusatzartikel wurde am 10. Februar 1967 ratifiziert und legte klare Verfahren für die Präsidentennachfolge und -unfähigkeit fest. Er regelt, was passiert, wenn ein Präsident stirbt, zurücktritt oder handlungsunfähig wird. Dieser Zusatzartikel wurde nach Präsident Kennedys Ermordung vorgeschlagen und klärte die Nachfolgeprotokolle des Vizepräsidenten.",
          nl: "Het 25e Amendement werd geratificeerd op 10 februari 1967, waarbij duidelijke procedures werden vastgesteld voor presidentiële opvolging en onbekwaamheid. Het behandelt wat er gebeurt als een president sterft, aftreedt of arbeidsongeschikt wordt. Dit amendement werd voorgesteld na de moord op president Kennedy en verduidelijkte de opvolgingsprotocollen van de vicepresident."
        }
      },
      {
        question: {
          en: "In 1996, which IBM supercomputer defeated world champion chess player Garry Kasparov?",
          es: "En 1996, ¿qué supercomputadora de IBM derrotó al campeón mundial de ajedrez Garry Kasparov?",
          de: "Welcher IBM-Supercomputer besiegte 1996 den Schachweltmeister Garry Kasparov?",
          nl: "In 1996 versloeg welke IBM-supercomputer schaakkampioen Garry Kasparov?"
        },
        options: [
          { en: "AlphaGo", es: "AlphaGo", de: "AlphaGo", nl: "AlphaGo" },
          { en: "Stockfish", es: "Stockfish", de: "Stockfish", nl: "Stockfish" },
          { en: "Watson", es: "Watson", de: "Watson", nl: "Watson" },
          { en: "Deep Blue", es: "Deep Blue", de: "Deep Blue", nl: "Deep Blue" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Deep Blue defeated Garry Kasparov in a chess match on February 10, 1996, though Kasparov won the overall series. In a rematch in 1997, Deep Blue became the first computer to defeat a reigning world chess champion under standard tournament conditions. This milestone demonstrated the growing capabilities of artificial intelligence.",
          es: "Deep Blue derrotó a Garry Kasparov en una partida de ajedrez el 10 de febrero de 1996, aunque Kasparov ganó la serie general. En una revancha en 1997, Deep Blue se convirtió en la primera computadora en derrotar a un campeón mundial de ajedrez reinante bajo condiciones de torneo estándar. Este hito demostró las crecientes capacidades de la inteligencia artificial.",
          de: "Deep Blue besiegte Garry Kasparov in einer Schachpartie am 10. Februar 1996, obwohl Kasparov die Gesamtserie gewann. In einem Rückkampf 1997 wurde Deep Blue der erste Computer, der einen amtierenden Schachweltmeister unter Standardturnierbedingungen besiegte. Dieser Meilenstein demonstrierte die wachsenden Fähigkeiten künstlicher Intelligenz.",
          nl: "Deep Blue versloeg Garry Kasparov in een schaakwedstrijd op 10 februari 1996, hoewel Kasparov de totale serie won. In een rematch in 1997 werd Deep Blue de eerste computer die een regerende wereldkampioen schaken versloeg onder standaard toernooiomstandigheden. Deze mijlpaal toonde de groeiende capaciteiten van kunstmatige intelligentie."
        }
      },
      {
        question: {
          en: "In 1863, which safety device was invented by Alanson Crane?",
          es: "En 1863, ¿qué dispositivo de seguridad fue inventado por Alanson Crane?",
          de: "Welches Sicherheitsgerät wurde 1863 von Alanson Crane erfunden?",
          nl: "In 1863 werd welk veiligheidsapparaat uitgevonden door Alanson Crane?"
        },
        options: [
          { en: "Safety belt", es: "Cinturón de seguridad", de: "Sicherheitsgurt", nl: "Veiligheidsgordel" },
          { en: "Smoke detector", es: "Detector de humo", de: "Rauchmelder", nl: "Rookmelder" },
          { en: "Fire extinguisher", es: "Extintor de incendios", de: "Feuerlöscher", nl: "Brandblusser" },
          { en: "Emergency exit", es: "Salida de emergencia", de: "Notausgang", nl: "Nooduitgang" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Alanson Crane patented an improved fire extinguisher on February 10, 1863, using a chemical solution to suppress fires. His design improved upon earlier extinguisher concepts and made fire safety more practical. Fire extinguishers have since become essential safety equipment in buildings worldwide, saving countless lives.",
          es: "Alanson Crane patentó un extintor de incendios mejorado el 10 de febrero de 1863, usando una solución química para suprimir incendios. Su diseño mejoró los conceptos anteriores de extintores y hizo la seguridad contra incendios más práctica. Los extintores de incendios se han convertido desde entonces en equipo de seguridad esencial en edificios de todo el mundo, salvando innumerables vidas.",
          de: "Alanson Crane patentierte am 10. Februar 1863 einen verbesserten Feuerlöscher, der eine chemische Lösung zur Feuerbekämpfung verwendete. Sein Design verbesserte frühere Feuerlöscherkonzepte und machte Brandschutz praktischer. Feuerlöscher sind seitdem zu unverzichtbarer Sicherheitsausrüstung in Gebäuden weltweit geworden und haben unzählige Leben gerettet.",
          nl: "Alanson Crane patenteerde een verbeterde brandblusser op 10 februari 1863, met gebruik van een chemische oplossing om branden te onderdrukken. Zijn ontwerp verbeterde eerdere brandblusserconcepten en maakte brandveiligheid praktischer. Brandblussers zijn sindsdien essentiële veiligheidsuitrusting geworden in gebouwen wereldwijd en hebben talloze levens gered."
        }
      }
    ],

    // Day 11 - February 11th: Nelson Mandela's Release & Thomas Edison's Birthday
    day11: [
      {
        question: {
          en: "In what year was Nelson Mandela released from prison on February 11th?",
          es: "¿En qué año fue liberado Nelson Mandela de prisión el 11 de febrero?",
          de: "In welchem Jahr wurde Nelson Mandela am 11. Februar aus dem Gefängnis entlassen?",
          nl: "In welk jaar werd Nelson Mandela op 11 februari vrijgelaten uit de gevangenis?"
        },
        options: [
          { en: "1985", es: "1985", de: "1985", nl: "1985" },
          { en: "1989", es: "1989", de: "1989", nl: "1989" },
          { en: "1994", es: "1994", de: "1994", nl: "1994" },
          { en: "1990", es: "1990", de: "1990", nl: "1990" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Nelson Mandela was released from prison on February 11, 1990, after spending 27 years incarcerated for his opposition to apartheid. His release marked a pivotal moment in South African history and led to the end of apartheid and the establishment of democratic elections.",
          es: "Nelson Mandela fue liberado de prisión el 11 de febrero de 1990, después de pasar 27 años encarcelado por su oposición al apartheid. Su liberación marcó un momento crucial en la historia sudafricana y condujo al fin del apartheid y al establecimiento de elecciones democráticas.",
          de: "Nelson Mandela wurde am 11. Februar 1990 aus dem Gefängnis entlassen, nachdem er 27 Jahre wegen seiner Opposition gegen die Apartheid inhaftiert war. Seine Freilassung markierte einen Wendepunkt in der südafrikanischen Geschichte und führte zum Ende der Apartheid und zur Einführung demokratischer Wahlen.",
          nl: "Nelson Mandela werd op 11 februari 1990 vrijgelaten uit de gevangenis, na 27 jaar gevangen te hebben gezeten vanwege zijn verzet tegen apartheid. Zijn vrijlating markeerde een cruciaal moment in de Zuid-Afrikaanse geschiedenis en leidde tot het einde van apartheid en de invoering van democratische verkiezingen."
        }
      },
      {
        question: {
          en: "How many years did Nelson Mandela spend in prison before his release on February 11, 1990?",
          es: "¿Cuántos años pasó Nelson Mandela en prisión antes de su liberación el 11 de febrero de 1990?",
          de: "Wie viele Jahre verbrachte Nelson Mandela im Gefängnis vor seiner Freilassung am 11. Februar 1990?",
          nl: "Hoeveel jaar zat Nelson Mandela in de gevangenis voor zijn vrijlating op 11 februari 1990?"
        },
        options: [
          { en: "20 years", es: "20 años", de: "20 Jahre", nl: "20 jaar" },
          { en: "30 years", es: "30 años", de: "30 Jahre", nl: "30 jaar" },
          { en: "27 years", es: "27 años", de: "27 Jahre", nl: "27 jaar" },
          { en: "25 years", es: "25 años", de: "25 Jahre", nl: "25 jaar" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Nelson Mandela spent exactly 27 years in prison from 1962 to 1990, most of which was served at the notorious Robben Island prison. Despite the harsh conditions, he remained committed to his cause of ending racial segregation and became a global symbol of resistance against oppression.",
          es: "Nelson Mandela pasó exactamente 27 años en prisión desde 1962 hasta 1990, la mayor parte en la notoria prisión de Robben Island. A pesar de las duras condiciones, permaneció comprometido con su causa de acabar con la segregación racial y se convirtió en un símbolo global de resistencia contra la opresión.",
          de: "Nelson Mandela verbrachte genau 27 Jahre von 1962 bis 1990 im Gefängnis, die meiste Zeit davon im berüchtigten Robben-Island-Gefängnis. Trotz der harten Bedingungen blieb er seinem Ziel, die Rassentrennung zu beenden, treu und wurde zu einem globalen Symbol des Widerstands gegen Unterdrückung.",
          nl: "Nelson Mandela zat precies 27 jaar gevangen van 1962 tot 1990, waarvan het grootste deel werd doorgebracht in de beruchte Robben Island gevangenis. Ondanks de harde omstandigheden bleef hij toegewijd aan zijn zaak om raciale segregatie te beëindigen en werd hij een wereldwijd symbool van verzet tegen onderdrukking."
        }
      },
      {
        question: {
          en: "Which famous inventor was born on February 11, 1847?",
          es: "¿Qué famoso inventor nació el 11 de febrero de 1847?",
          de: "Welcher berühmte Erfinder wurde am 11. Februar 1847 geboren?",
          nl: "Welke beroemde uitvinder werd geboren op 11 februari 1847?"
        },
        options: [
          { en: "Henry Ford", es: "Henry Ford", de: "Henry Ford", nl: "Henry Ford" },
          { en: "Thomas Edison", es: "Thomas Edison", de: "Thomas Edison", nl: "Thomas Edison" },
          { en: "Nikola Tesla", es: "Nikola Tesla", de: "Nikola Tesla", nl: "Nikola Tesla" },
          { en: "Alexander Graham Bell", es: "Alexander Graham Bell", de: "Alexander Graham Bell", nl: "Alexander Graham Bell" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Thomas Edison was born on February 11, 1847, in Milan, Ohio. He became one of history's most prolific inventors with over 1,000 patents, including the phonograph, the motion picture camera, and practical improvements to the electric light bulb that made it commercially viable.",
          es: "Thomas Edison nació el 11 de febrero de 1847 en Milan, Ohio. Se convirtió en uno de los inventores más prolíficos de la historia con más de 1,000 patentes, incluyendo el fonógrafo, la cámara de cine y mejoras prácticas a la bombilla eléctrica que la hicieron comercialmente viable.",
          de: "Thomas Edison wurde am 11. Februar 1847 in Milan, Ohio geboren. Er wurde einer der produktivsten Erfinder der Geschichte mit über 1.000 Patenten, darunter der Phonograph, die Filmkamera und praktische Verbesserungen der Glühbirne, die sie kommerziell nutzbar machten.",
          nl: "Thomas Edison werd geboren op 11 februari 1847 in Milan, Ohio. Hij werd een van de meest productieve uitvinders in de geschiedenis met meer dan 1.000 patenten, waaronder de fonograaf, de filmcamera en praktische verbeteringen aan de gloeilamp die deze commercieel haalbaar maakten."
        }
      },
      {
        question: {
          en: "What major event in Iran occurred on February 11, 1979?",
          es: "¿Qué evento importante en Irán ocurrió el 11 de febrero de 1979?",
          de: "Welches wichtige Ereignis ereignete sich am 11. Februar 1979 im Iran?",
          nl: "Welke belangrijke gebeurtenis vond plaats in Iran op 11 februari 1979?"
        },
        options: [
          { en: "Victory of the Islamic Revolution", es: "Victoria de la Revolución Islámica", de: "Sieg der Islamischen Revolution", nl: "Overwinning van de Islamitische Revolutie" },
          { en: "End of the Hostage Crisis", es: "Fin de la Crisis de Rehenes", de: "Ende der Geiselkrise", nl: "Einde van de Gijzelingscrisis" },
          { en: "Shah's Return to Power", es: "Regreso del Shah al Poder", de: "Rückkehr des Schahs zur Macht", nl: "Terugkeer van de Sjah aan de Macht" },
          { en: "Iran-Iraq War Begins", es: "Comienza la Guerra Irán-Irak", de: "Iran-Irak-Krieg beginnt", nl: "Iran-Irak Oorlog Begint" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On February 11, 1979, the Iranian Revolution culminated in the overthrow of Shah Mohammad Reza Pahlavi and the establishment of an Islamic Republic. This revolution fundamentally transformed Iran's political system and had far-reaching effects on Middle Eastern politics and international relations.",
          es: "El 11 de febrero de 1979, la Revolución Iraní culminó con el derrocamiento del Sha Mohammad Reza Pahlavi y el establecimiento de una República Islámica. Esta revolución transformó fundamentalmente el sistema político de Irán y tuvo efectos de gran alcance en la política de Oriente Medio y las relaciones internacionales.",
          de: "Am 11. Februar 1979 gipfelte die Iranische Revolution im Sturz von Schah Mohammad Reza Pahlavi und der Gründung einer Islamischen Republik. Diese Revolution veränderte das politische System Irans grundlegend und hatte weitreichende Auswirkungen auf die Politik im Nahen Osten und die internationalen Beziehungen.",
          nl: "Op 11 februari 1979 culmineerde de Iraanse Revolutie in de omverwerping van Sjah Mohammad Reza Pahlavi en de vestiging van een Islamitische Republiek. Deze revolutie transformeerde het politieke systeem van Iran fundamenteel en had verstrekkende effecten op de politiek in het Midden-Oosten en internationale betrekkingen."
        }
      },
      {
        question: {
          en: "Who became South African president and ordered Nelson Mandela's release in 1990?",
          es: "¿Quién se convirtió en presidente sudafricano y ordenó la liberación de Nelson Mandela en 1990?",
          de: "Wer wurde südafrikanischer Präsident und befahl Nelson Mandelas Freilassung im Jahr 1990?",
          nl: "Wie werd Zuid-Afrikaans president en beval Nelson Mandela's vrijlating in 1990?"
        },
        options: [
          { en: "F.W. de Klerk", es: "F.W. de Klerk", de: "F.W. de Klerk", nl: "F.W. de Klerk" },
          { en: "Thabo Mbeki", es: "Thabo Mbeki", de: "Thabo Mbeki", nl: "Thabo Mbeki" },
          { en: "Jacob Zuma", es: "Jacob Zuma", de: "Jacob Zuma", nl: "Jacob Zuma" },
          { en: "P.W. Botha", es: "P.W. Botha", de: "P.W. Botha", nl: "P.W. Botha" }
        ],
        correctIndex: 0,
        explanation: {
          en: "F.W. de Klerk became South African president in 1989 and made the historic decision to release Nelson Mandela in 1990. He also worked with Mandela to dismantle apartheid peacefully, and both leaders jointly received the Nobel Peace Prize in 1993 for their efforts.",
          es: "F.W. de Klerk se convirtió en presidente sudafricano en 1989 e hizo la decisión histórica de liberar a Nelson Mandela en 1990. También trabajó con Mandela para desmantelar el apartheid pacíficamente, y ambos líderes recibieron conjuntamente el Premio Nobel de la Paz en 1993 por sus esfuerzos.",
          de: "F.W. de Klerk wurde 1989 südafrikanischer Präsident und traf die historische Entscheidung, Nelson Mandela 1990 freizulassen. Er arbeitete auch mit Mandela zusammen, um die Apartheid friedlich zu beenden, und beide Führer erhielten 1993 gemeinsam den Friedensnobelpreis für ihre Bemühungen.",
          nl: "F.W. de Klerk werd in 1989 Zuid-Afrikaans president en nam de historische beslissing om Nelson Mandela in 1990 vrij te laten. Hij werkte ook met Mandela samen om apartheid vreedzaam te ontmantelen, en beide leiders ontvingen gezamenlijk de Nobelprijs voor de Vrede in 1993 voor hun inspanningen."
        }
      }
    ],

    // Day 12 - February 12th: Abraham Lincoln & Charles Darwin Birthdays
    day12: [
      {
        question: {
          en: "Which two famous historical figures were both born on February 12, 1809?",
          es: "¿Qué dos figuras históricas famosas nacieron el 12 de febrero de 1809?",
          de: "Welche beiden berühmten historischen Persönlichkeiten wurden am 12. Februar 1809 geboren?",
          nl: "Welke twee beroemde historische figuren werden beide geboren op 12 februari 1809?"
        },
        options: [
          { en: "Einstein and Edison", es: "Einstein y Edison", de: "Einstein und Edison", nl: "Einstein en Edison" },
          { en: "Abraham Lincoln and Charles Darwin", es: "Abraham Lincoln y Charles Darwin", de: "Abraham Lincoln und Charles Darwin", nl: "Abraham Lincoln en Charles Darwin" },
          { en: "George Washington and Isaac Newton", es: "George Washington e Isaac Newton", de: "George Washington und Isaac Newton", nl: "George Washington en Isaac Newton" },
          { en: "Napoleon and Mozart", es: "Napoleón y Mozart", de: "Napoleon und Mozart", nl: "Napoleon en Mozart" }
        ],
        correctIndex: 1,
        explanation: {
          en: "February 12, 1809, marks an extraordinary coincidence in history when both Abraham Lincoln and Charles Darwin were born on the same day. Lincoln would become the 16th U.S. President and abolish slavery, while Darwin would revolutionize biology with his theory of evolution by natural selection.",
          es: "El 12 de febrero de 1809 marca una extraordinaria coincidencia en la historia cuando Abraham Lincoln y Charles Darwin nacieron el mismo día. Lincoln se convertiría en el decimosexto presidente de EE.UU. y aboliría la esclavitud, mientras que Darwin revolucionaría la biología con su teoría de la evolución por selección natural.",
          de: "Der 12. Februar 1809 markiert einen außergewöhnlichen Zufall in der Geschichte, als sowohl Abraham Lincoln als auch Charles Darwin am selben Tag geboren wurden. Lincoln wurde der 16. US-Präsident und schaffte die Sklaverei ab, während Darwin die Biologie mit seiner Evolutionstheorie durch natürliche Selektion revolutionierte.",
          nl: "12 februari 1809 markeert een buitengewoon toeval in de geschiedenis toen zowel Abraham Lincoln als Charles Darwin op dezelfde dag werden geboren. Lincoln zou de 16e Amerikaanse president worden en slavernij afschaffen, terwijl Darwin de biologie zou revolutioneren met zijn evolutietheorie door natuurlijke selectie."
        }
      },
      {
        question: {
          en: "Which U.S. President was born on February 12, 1809?",
          es: "¿Qué presidente de EE.UU. nació el 12 de febrero de 1809?",
          de: "Welcher US-Präsident wurde am 12. Februar 1809 geboren?",
          nl: "Welke Amerikaanse president werd geboren op 12 februari 1809?"
        },
        options: [
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "Abraham Lincoln", es: "Abraham Lincoln", de: "Abraham Lincoln", nl: "Abraham Lincoln" },
          { en: "Theodore Roosevelt", es: "Theodore Roosevelt", de: "Theodore Roosevelt", nl: "Theodore Roosevelt" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Abraham Lincoln, born February 12, 1809, became the 16th President of the United States and led the nation through the Civil War. He is best known for preserving the Union and issuing the Emancipation Proclamation, which began the process of freedom for America's enslaved people.",
          es: "Abraham Lincoln, nacido el 12 de febrero de 1809, se convirtió en el decimosexto presidente de los Estados Unidos y lideró la nación durante la Guerra Civil. Es mejor conocido por preservar la Unión y emitir la Proclamación de Emancipación, que comenzó el proceso de libertad para las personas esclavizadas de América.",
          de: "Abraham Lincoln, geboren am 12. Februar 1809, wurde der 16. Präsident der Vereinigten Staaten und führte die Nation durch den Bürgerkrieg. Er ist am bekanntesten dafür, die Union zu bewahren und die Emanzipationserklärung zu erlassen, die den Prozess der Befreiung der versklavten Menschen Amerikas begann.",
          nl: "Abraham Lincoln, geboren op 12 februari 1809, werd de 16e president van de Verenigde Staten en leidde de natie door de Burgeroorlog. Hij is het best bekend voor het behouden van de Unie en het uitvaardigen van de Emancipatieproclamatie, die het proces van vrijheid voor Amerika's tot slaaf gemaakte mensen begon."
        }
      },
      {
        question: {
          en: "What famous theory did Charles Darwin develop?",
          es: "¿Qué famosa teoría desarrolló Charles Darwin?",
          de: "Welche berühmte Theorie entwickelte Charles Darwin?",
          nl: "Welke beroemde theorie ontwikkelde Charles Darwin?"
        },
        options: [
          { en: "Theory of Evolution", es: "Teoría de la Evolución", de: "Evolutionstheorie", nl: "Evolutietheorie" },
          { en: "Big Bang Theory", es: "Teoría del Big Bang", de: "Urknalltheorie", nl: "Oerknaltheorie" },
          { en: "Theory of Relativity", es: "Teoría de la Relatividad", de: "Relativitätstheorie", nl: "Relativiteitstheorie" },
          { en: "Germ Theory", es: "Teoría de los Gérmenes", de: "Keimtheorie", nl: "Bacterietheorie" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Charles Darwin developed the Theory of Evolution by natural selection, which explains how species change over time through the survival and reproduction of individuals best adapted to their environment. This groundbreaking theory fundamentally changed our understanding of biology and the diversity of life on Earth.",
          es: "Charles Darwin desarrolló la Teoría de la Evolución por selección natural, que explica cómo las especies cambian con el tiempo a través de la supervivencia y reproducción de los individuos mejor adaptados a su entorno. Esta teoría revolucionaria cambió fundamentalmente nuestra comprensión de la biología y la diversidad de la vida en la Tierra.",
          de: "Charles Darwin entwickelte die Evolutionstheorie durch natürliche Selektion, die erklärt, wie sich Arten im Laufe der Zeit durch das Überleben und die Fortpflanzung der am besten an ihre Umgebung angepassten Individuen verändern. Diese bahnbrechende Theorie veränderte grundlegend unser Verständnis von Biologie und der Vielfalt des Lebens auf der Erde.",
          nl: "Charles Darwin ontwikkelde de evolutietheorie door natuurlijke selectie, die verklaart hoe soorten in de loop van de tijd veranderen door de overleving en voortplanting van individuen die het best aan hun omgeving zijn aangepast. Deze baanbrekende theorie veranderde fundamenteel ons begrip van biologie en de diversiteit van leven op aarde."
        }
      },
      {
        question: {
          en: "What famous book did Charles Darwin publish in 1859?",
          es: "¿Qué famoso libro publicó Charles Darwin en 1859?",
          de: "Welches berühmte Buch veröffentlichte Charles Darwin 1859?",
          nl: "Welk beroemd boek publiceerde Charles Darwin in 1859?"
        },
        options: [
          { en: "The Expression of Emotions", es: "La Expresión de las Emociones", de: "Der Ausdruck der Gemütsbewegungen", nl: "De expressie van emoties" },
          { en: "On the Origin of Species", es: "El Origen de las Especies", de: "Über die Entstehung der Arten", nl: "Over het ontstaan der soorten" },
          { en: "The Descent of Man", es: "El Origen del Hombre", de: "Die Abstammung des Menschen", nl: "De afstamming van de mens" },
          { en: "The Voyage of the Beagle", es: "El Viaje del Beagle", de: "Die Reise der Beagle", nl: "De reis van de Beagle" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Darwin's 'On the Origin of Species' published in 1859 presented extensive evidence for evolution and introduced natural selection as the mechanism. The book sold out on its first day and sparked intense scientific and public debate that continues to influence biology, philosophy, and religion today.",
          es: "El libro de Darwin 'El Origen de las Especies' publicado en 1859 presentó evidencia extensa de la evolución e introdujo la selección natural como el mecanismo. El libro se agotó en su primer día y provocó un intenso debate científico y público que continúa influyendo en la biología, filosofía y religión hoy en día.",
          de: "Darwins 'Über die Entstehung der Arten', veröffentlicht 1859, präsentierte umfangreiche Beweise für die Evolution und führte die natürliche Selektion als Mechanismus ein. Das Buch war am ersten Tag ausverkauft und löste eine intensive wissenschaftliche und öffentliche Debatte aus, die Biologie, Philosophie und Religion bis heute beeinflusst.",
          nl: "Darwins 'Over het ontstaan der soorten' gepubliceerd in 1859 presenteerde uitgebreid bewijs voor evolutie en introduceerde natuurlijke selectie als het mechanisme. Het boek was op de eerste dag uitverkocht en veroorzaakte een intens wetenschappelijk en publiek debat dat biologie, filosofie en religie tot op de dag van vandaag beïnvloedt."
        }
      },
      {
        question: {
          en: "Which important document did Abraham Lincoln issue on January 1, 1863?",
          es: "¿Qué documento importante emitió Abraham Lincoln el 1 de enero de 1863?",
          de: "Welches wichtige Dokument erließ Abraham Lincoln am 1. Januar 1863?",
          nl: "Welk belangrijk document vaardigde Abraham Lincoln uit op 1 januari 1863?"
        },
        options: [
          { en: "Gettysburg Address", es: "Discurso de Gettysburg", de: "Gettysburg-Rede", nl: "Gettysburg Toespraak" },
          { en: "Emancipation Proclamation", es: "Proclamación de Emancipación", de: "Emanzipationserklärung", nl: "Emancipatieproclamatie" },
          { en: "Declaration of Independence", es: "Declaración de Independencia", de: "Unabhängigkeitserklärung", nl: "Onafhankelijkheidsverklaring" },
          { en: "Bill of Rights", es: "Declaración de Derechos", de: "Bill of Rights", nl: "Bill of Rights" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Emancipation Proclamation, issued on January 1, 1863, declared that all enslaved people in Confederate-held territory were to be freed. While it didn't immediately free all enslaved people, it fundamentally transformed the Civil War into a fight for freedom and paved the way for the 13th Amendment.",
          es: "La Proclamación de Emancipación, emitida el 1 de enero de 1863, declaró que todas las personas esclavizadas en territorio controlado por los confederados serían liberadas. Aunque no liberó inmediatamente a todas las personas esclavizadas, transformó fundamentalmente la Guerra Civil en una lucha por la libertad y allanó el camino para la 13ª Enmienda.",
          de: "Die Emanzipationserklärung, erlassen am 1. Januar 1863, erklärte, dass alle versklavten Menschen in von den Konföderierten gehaltenen Gebieten befreit werden sollten. Obwohl sie nicht sofort alle versklavten Menschen befreite, verwandelte sie den Bürgerkrieg grundlegend in einen Kampf für die Freiheit und ebnete den Weg für den 13. Verfassungszusatz.",
          nl: "De Emancipatieproclamatie, uitgevaardigd op 1 januari 1863, verklaarde dat alle tot slaaf gemaakte mensen in door de Confederatie gecontroleerd gebied bevrijd zouden worden. Hoewel het niet onmiddellijk alle tot slaaf gemaakte mensen bevrijdde, transformeerde het de Burgeroorlog fundamenteel in een strijd voor vrijheid en baande het de weg voor het 13e Amendement."
        }
      }
    ],

    // Day 13 - February 13th: Dresden Bombing & WWII Events
    day13: [
      {
        question: {
          en: "Which German city was heavily bombed by Allied forces starting on February 13, 1945?",
          es: "¿Qué ciudad alemana fue bombardeada intensamente por las fuerzas aliadas a partir del 13 de febrero de 1945?",
          de: "Welche deutsche Stadt wurde ab dem 13. Februar 1945 von den Alliierten schwer bombardiert?",
          nl: "Welke Duitse stad werd zwaar gebombardeerd door de geallieerde troepen vanaf 13 februari 1945?"
        },
        options: [
          { en: "Dresden", es: "Dresde", de: "Dresden", nl: "Dresden" },
          { en: "Munich", es: "Múnich", de: "München", nl: "München" },
          { en: "Berlin", es: "Berlín", de: "Berlin", nl: "Berlijn" },
          { en: "Hamburg", es: "Hamburgo", de: "Hamburg", nl: "Hamburg" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Dresden was heavily bombed by Allied forces from February 13-15, 1945, in one of the most controversial bombing raids of World War II. The city, known for its baroque architecture and cultural heritage, was devastated by firestorms that destroyed much of the historic center.",
          es: "Dresde fue bombardeada intensamente por las fuerzas aliadas del 13 al 15 de febrero de 1945, en uno de los bombardeos más controvertidos de la Segunda Guerra Mundial. La ciudad, conocida por su arquitectura barroca y patrimonio cultural, fue devastada por tormentas de fuego que destruyeron gran parte del centro histórico.",
          de: "Dresden wurde vom 13. bis 15. Februar 1945 von den Alliierten schwer bombardiert, in einem der umstrittensten Bombenangriffe des Zweiten Weltkriegs. Die Stadt, bekannt für ihre barocke Architektur und ihr kulturelles Erbe, wurde durch Feuerstürme verwüstet, die einen Großteil des historischen Zentrums zerstörten.",
          nl: "Dresden werd zwaar gebombardeerd door de geallieerde troepen van 13-15 februari 1945, in een van de meest controversiële bombardementen van de Tweede Wereldoorlog. De stad, bekend om zijn barokke architectuur en cultureel erfgoed, werd verwoest door vuurstormen die een groot deel van het historische centrum vernietigden."
        }
      },
      {
        question: {
          en: "How many days did the bombing of Dresden last in February 1945?",
          es: "¿Cuántos días duró el bombardeo de Dresde en febrero de 1945?",
          de: "Wie viele Tage dauerte die Bombardierung von Dresden im Februar 1945?",
          nl: "Hoeveel dagen duurde het bombardement van Dresden in februari 1945?"
        },
        options: [
          { en: "5 days", es: "5 días", de: "5 Tage", nl: "5 dagen" },
          { en: "1 day", es: "1 día", de: "1 Tag", nl: "1 dag" },
          { en: "3 days (Feb 13-15)", es: "3 días (13-15 de febrero)", de: "3 Tage (13.-15. Februar)", nl: "3 dagen (13-15 februari)" },
          { en: "7 days", es: "7 días", de: "7 Tage", nl: "7 dagen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The bombing of Dresden lasted three days from February 13-15, 1945. It consisted of four coordinated air raids with both British and American bombers, creating massive destruction through conventional explosives and incendiary bombs that generated deadly firestorms throughout the city.",
          es: "El bombardeo de Dresde duró tres días del 13 al 15 de febrero de 1945. Consistió en cuatro ataques aéreos coordinados con bombarderos británicos y estadounidenses, creando destrucción masiva a través de explosivos convencionales y bombas incendiarias que generaron mortales tormentas de fuego en toda la ciudad.",
          de: "Die Bombardierung Dresdens dauerte drei Tage vom 13. bis 15. Februar 1945. Sie bestand aus vier koordinierten Luftangriffen mit britischen und amerikanischen Bombern, die durch konventionelle Sprengstoffe und Brandbomben massive Zerstörung verursachten und tödliche Feuerstürme in der ganzen Stadt erzeugten.",
          nl: "Het bombardement van Dresden duurde drie dagen van 13-15 februari 1945. Het bestond uit vier gecoördineerde luchtaanvallen met zowel Britse als Amerikaanse bommenwerpers, die massale vernietiging veroorzaakten door conventionele explosieven en brandbommen die dodelijke vuurstormen in de hele stad genereerden."
        }
      },
      {
        question: {
          en: "Which two Allied air forces participated in the Dresden bombing?",
          es: "¿Qué dos fuerzas aéreas aliadas participaron en el bombardeo de Dresde?",
          de: "Welche beiden alliierten Luftstreitkräfte beteiligten sich an der Bombardierung Dresdens?",
          nl: "Welke twee geallieerde luchtmachten namen deel aan het bombardement van Dresden?"
        },
        options: [
          { en: "British RAF and US Army Air Forces", es: "RAF británica y Fuerzas Aéreas del Ejército de EE.UU.", de: "Britische RAF und US Army Air Forces", nl: "Britse RAF en Amerikaanse Army Air Forces" },
          { en: "British and French", es: "Británica y francesa", de: "Britische und französische", nl: "Britse en Franse" },
          { en: "US and Soviet", es: "EE.UU. y soviética", de: "US-amerikanische und sowjetische", nl: "Amerikaanse en Sovjet" },
          { en: "Canadian and Australian", es: "Canadiense y australiana", de: "Kanadische und australische", nl: "Canadese en Australische" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The British Royal Air Force (RAF) and the United States Army Air Forces carried out the Dresden bombing operations. The RAF conducted night raids while American forces bombed during daylight hours, demonstrating the Allies' around-the-clock bombing strategy employed in the final months of World War II.",
          es: "La Real Fuerza Aérea Británica (RAF) y las Fuerzas Aéreas del Ejército de los Estados Unidos llevaron a cabo las operaciones de bombardeo de Dresde. La RAF realizó ataques nocturnos mientras que las fuerzas estadounidenses bombardearon durante las horas de luz, demostrando la estrategia de bombardeo las 24 horas empleada por los Aliados en los últimos meses de la Segunda Guerra Mundial.",
          de: "Die britische Royal Air Force (RAF) und die United States Army Air Forces führten die Bombardierungsoperationen in Dresden durch. Die RAF führte nächtliche Angriffe durch, während amerikanische Streitkräfte tagsüber bombardierten, was die Rund-um-die-Uhr-Bombardierungsstrategie der Alliierten in den letzten Monaten des Zweiten Weltkriegs demonstrierte.",
          nl: "De Britse Royal Air Force (RAF) en de United States Army Air Forces voerden de bombardementsoperaties van Dresden uit. De RAF voerde nachtelijke aanvallen uit terwijl Amerikaanse troepen overdag bombardeerden, wat de 24-uurs bombardementsstrategie van de geallieerden in de laatste maanden van de Tweede Wereldoorlog demonstreerde."
        }
      },
      {
        question: {
          en: "What devastating phenomenon developed during the Dresden bombing due to the incendiary bombs?",
          es: "¿Qué fenómeno devastador se desarrolló durante el bombardeo de Dresde debido a las bombas incendiarias?",
          de: "Welches verheerende Phänomen entwickelte sich während der Bombardierung Dresdens durch die Brandbomben?",
          nl: "Welk verwoestend fenomeen ontwikkelde zich tijdens het bombardement van Dresden door de brandbommen?"
        },
        options: [
          { en: "Firestorm", es: "Tormenta de fuego", de: "Feuersturm", nl: "Vuurstorm" },
          { en: "Earthquake", es: "Terremoto", de: "Erdbeben", nl: "Aardbeving" },
          { en: "Tsunami", es: "Tsunami", de: "Tsunami", nl: "Tsunami" },
          { en: "Tornado", es: "Tornado", de: "Tornado", nl: "Tornado" }
        ],
        correctIndex: 0,
        explanation: {
          en: "A firestorm developed during the Dresden bombing when thousands of incendiary bombs created numerous fires that merged into a massive inferno. The intense heat generated powerful updrafts that sucked in oxygen from surrounding areas, creating hurricane-force winds that further spread the devastation and made escape nearly impossible.",
          es: "Se desarrolló una tormenta de fuego durante el bombardeo de Dresde cuando miles de bombas incendiarias crearon numerosos incendios que se fusionaron en un infierno masivo. El calor intenso generó poderosas corrientes ascendentes que absorbieron oxígeno de las áreas circundantes, creando vientos de fuerza huracanada que propagaron aún más la devastación e hicieron el escape casi imposible.",
          de: "Während der Bombardierung Dresdens entwickelte sich ein Feuersturm, als Tausende von Brandbomben zahlreiche Brände erzeugten, die zu einem massiven Inferno verschmolzen. Die intensive Hitze erzeugte starke Aufwinde, die Sauerstoff aus den umliegenden Gebieten ansaugten und orkanartige Winde erzeugten, die die Verwüstung weiter verbreiteten und eine Flucht nahezu unmöglich machten.",
          nl: "Er ontwikkelde zich een vuurstorm tijdens het bombardement van Dresden toen duizenden brandbommen talrijke branden creëerden die samenvloeiden tot een massale hel. De intense hitte genereerde krachtige opstijgende luchtstromen die zuurstof uit de omliggende gebieden aanzogen, waardoor orkaan-achtige winden ontstonden die de verwoesting verder verspreidden en ontsnapping bijna onmogelijk maakten."
        }
      },
      {
        question: {
          en: "At which conference in February 1945 did Allied powers discuss strategic bombing raids against German cities?",
          es: "¿En qué conferencia de febrero de 1945 las potencias aliadas discutieron los bombardeos estratégicos contra ciudades alemanas?",
          de: "Auf welcher Konferenz im Februar 1945 diskutierten die Alliierten über strategische Bombenangriffe auf deutsche Städte?",
          nl: "Op welke conferentie in februari 1945 bespraken de geallieerde mogendheden strategische bombardementen op Duitse steden?"
        },
        options: [
          { en: "Casablanca Conference", es: "Conferencia de Casablanca", de: "Konferenz von Casablanca", nl: "Casablanca Conferentie" },
          { en: "Tehran Conference", es: "Conferencia de Teherán", de: "Konferenz von Teheran", nl: "Teheran Conferentie" },
          { en: "Potsdam Conference", es: "Conferencia de Potsdam", de: "Potsdamer Konferenz", nl: "Potsdam Conferentie" },
          { en: "Yalta Conference", es: "Conferencia de Yalta", de: "Konferenz von Jalta", nl: "Jalta Conferentie" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Yalta Conference was held from February 4-11, 1945, where Roosevelt, Churchill, and Stalin met to discuss post-war Europe. While strategic bombing was discussed in the context of military strategy, the conference primarily focused on the division of Germany, formation of the United Nations, and Soviet entry into the Pacific War.",
          es: "La Conferencia de Yalta se celebró del 4 al 11 de febrero de 1945, donde Roosevelt, Churchill y Stalin se reunieron para discutir la Europa de posguerra. Aunque se discutió el bombardeo estratégico en el contexto de la estrategia militar, la conferencia se centró principalmente en la división de Alemania, la formación de las Naciones Unidas y la entrada soviética en la Guerra del Pacífico.",
          de: "Die Konferenz von Jalta fand vom 4. bis 11. Februar 1945 statt, bei der Roosevelt, Churchill und Stalin sich trafen, um das Nachkriegseuropa zu diskutieren. Während strategische Bombardierungen im Kontext militärischer Strategie besprochen wurden, konzentrierte sich die Konferenz hauptsächlich auf die Teilung Deutschlands, die Bildung der Vereinten Nationen und den sowjetischen Eintritt in den Pazifikkrieg.",
          nl: "De Jalta Conferentie werd gehouden van 4-11 februari 1945, waar Roosevelt, Churchill en Stalin samenkwamen om het naoorlogse Europa te bespreken. Hoewel strategische bombardementen werden besproken in de context van militaire strategie, richtte de conferentie zich vooral op de verdeling van Duitsland, de vorming van de Verenigde Naties en de Sovjet-deelname aan de Pacific oorlog."
        }
      }
    ],

    // Day 14 - February 14th: Valentine's Day
    day14: [
      {
        question: {
          en: "Saint Valentine was a priest in which ancient empire?",
          es: "San Valentín fue un sacerdote en qué imperio antiguo?",
          de: "Heiliger Valentin war ein Priester in welchem antiken Reich?",
          nl: "Heilige Valentijn was een priester in welk oud rijk?"
        },
        options: [
          { en: "Roman Empire", es: "Imperio Romano", de: "Römisches Reich", nl: "Romeinse Rijk" },
          { en: "Greek Empire", es: "Imperio Griego", de: "Griechisches Reich", nl: "Griekse Rijk" },
          { en: "Egyptian Empire", es: "Imperio Egipcio", de: "Ägyptisches Reich", nl: "Egyptische Rijk" },
          { en: "Persian Empire", es: "Imperio Persa", de: "Persisches Reich", nl: "Perzische Rijk" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Saint Valentine was a Christian priest in the Roman Empire during the 3rd century. According to legend, he performed secret marriages for soldiers who were forbidden to marry, which led to his execution on February 14th, establishing the date we now celebrate as Valentine's Day.",
          es: "San Valentín fue un sacerdote cristiano en el Imperio Romano durante el siglo III. Según la leyenda, realizó matrimonios secretos para soldados a quienes se les prohibía casarse, lo que llevó a su ejecución el 14 de febrero, estableciendo la fecha que ahora celebramos como el Día de San Valentín.",
          de: "Der Heilige Valentin war ein christlicher Priester im Römischen Reich im 3. Jahrhundert. Der Legende nach führte er geheime Eheschließungen für Soldaten durch, denen die Heirat verboten war, was zu seiner Hinrichtung am 14. Februar führte und das Datum festlegte, das wir heute als Valentinstag feiern.",
          nl: "Heilige Valentijn was een christelijke priester in het Romeinse Rijk tijdens de 3e eeuw. Volgens de legende voerde hij geheime huwelijken uit voor soldaten die verboden waren te trouwen, wat leidde tot zijn executie op 14 februari, waarmee de datum werd vastgesteld die we nu vieren als Valentijnsdag."
        }
      },
      {
        question: {
          en: "How many couples get engaged on Valentine's Day annually?",
          es: "¿Cuántas parejas se comprometen en el Día de San Valentín anualmente?",
          de: "Wie viele Paare verloben sich jährlich am Valentinstag?",
          nl: "Hoeveel koppels verloven zich jaarlijks op Valentijnsdag?"
        },
        options: [
          { en: "About 1 million", es: "Alrededor de 1 millón", de: "Etwa 1 Million", nl: "Ongeveer 1 miljoen" },
          { en: "About 2 million", es: "Alrededor de 2 millones", de: "Etwa 2 Millionen", nl: "Ongeveer 2 miljoen" },
          { en: "About 6 million", es: "Alrededor de 6 millones", de: "Etwa 6 Millionen", nl: "Ongeveer 6 miljoen" },
          { en: "About 10 million", es: "Alrededor de 10 millones", de: "Etwa 10 Millionen", nl: "Ongeveer 10 miljoen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Approximately 6 million couples get engaged on Valentine's Day each year, making it one of the most popular days for marriage proposals. The romantic atmosphere and cultural association with love make it an ideal time for couples to commit to marriage, with many choosing restaurants and other special locations for their proposals.",
          es: "Aproximadamente 6 millones de parejas se comprometen en el Día de San Valentín cada año, convirtiéndolo en uno de los días más populares para propuestas de matrimonio. La atmósfera romántica y la asociación cultural con el amor lo convierten en un momento ideal para que las parejas se comprometan en matrimonio, con muchos eligiendo restaurantes y otros lugares especiales para sus propuestas.",
          de: "Ungefähr 6 Millionen Paare verloben sich jedes Jahr am Valentinstag, was ihn zu einem der beliebtesten Tage für Heiratsanträge macht. Die romantische Atmosphäre und die kulturelle Verbindung mit Liebe machen ihn zu einer idealen Zeit für Paare, sich zur Ehe zu verpflichten, wobei viele Restaurants und andere besondere Orte für ihre Anträge wählen.",
          nl: "Ongeveer 6 miljoen koppels verloven zich elk jaar op Valentijnsdag, waardoor het een van de populairste dagen voor huwelijksaanzoeken is. De romantische sfeer en culturele associatie met liefde maken het een ideale tijd voor koppels om zich te verbinden aan een huwelijk, waarbij velen restaurants en andere speciale locaties kiezen voor hun aanzoeken."
        }
      },
      {
        question: {
          en: "What popular website debuted on Valentine's Day?",
          es: "¿Qué sitio web popular debutó en el Día de San Valentín?",
          de: "Welche beliebte Website startete am Valentinstag?",
          nl: "Welke populaire website debuteerde op Valentijnsdag?"
        },
        options: [
          { en: "Instagram", es: "Instagram", de: "Instagram", nl: "Instagram" },
          { en: "YouTube", es: "YouTube", de: "YouTube", nl: "YouTube" },
          { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
          { en: "Twitter", es: "Twitter", de: "Twitter", nl: "Twitter" }
        ],
        correctIndex: 1,
        explanation: {
          en: "YouTube launched on Valentine's Day, February 14, 2005. The video-sharing platform was created by three former PayPal employees and went on to become one of the world's most visited websites, revolutionizing how people share and consume video content online.",
          es: "YouTube se lanzó en el Día de San Valentín, el 14 de febrero de 2005. La plataforma para compartir videos fue creada por tres ex empleados de PayPal y se convirtió en uno de los sitios web más visitados del mundo, revolucionando cómo las personas comparten y consumen contenido de video en línea.",
          de: "YouTube wurde am Valentinstag, dem 14. Februar 2005, gestartet. Die Video-Sharing-Plattform wurde von drei ehemaligen PayPal-Mitarbeitern erstellt und entwickelte sich zu einer der meistbesuchten Websites der Welt, die revolutionierte, wie Menschen Videoinhalte online teilen und konsumieren.",
          nl: "YouTube werd gelanceerd op Valentijnsdag, 14 februari 2005. Het video-deelplatform werd gecreëerd door drie voormalige PayPal-medewerkers en werd een van 's werelds meest bezochte websites, wat een revolutie teweegbracht in hoe mensen video-inhoud online delen en consumeren."
        }
      },
      {
        question: {
          en: "Which U.S. state produces the most roses?",
          es: "¿Qué estado de EE.UU. produce más rosas?",
          de: "Welcher US-Bundesstaat produziert die meisten Rosen?",
          nl: "Welke Amerikaanse staat produceert de meeste rozen?"
        },
        options: [
          { en: "New York", es: "Nueva York", de: "New York", nl: "New York" },
          { en: "California", es: "California", de: "Kalifornien", nl: "Californië" },
          { en: "Florida", es: "Florida", de: "Florida", nl: "Florida" },
          { en: "Texas", es: "Texas", de: "Texas", nl: "Texas" }
        ],
        correctIndex: 1,
        explanation: {
          en: "California is the leading rose producer in the United States, particularly in areas with Mediterranean climates. The state's ideal growing conditions allow for year-round rose cultivation, making it crucial for meeting the massive demand during Valentine's Day when millions of roses are sold.",
          es: "California es el principal productor de rosas en los Estados Unidos, particularmente en áreas con climas mediterráneos. Las condiciones de cultivo ideales del estado permiten el cultivo de rosas durante todo el año, lo que lo hace crucial para satisfacer la enorme demanda durante el Día de San Valentín cuando se venden millones de rosas.",
          de: "Kalifornien ist der führende Rosenproduzent in den Vereinigten Staaten, besonders in Gebieten mit mediterranem Klima. Die idealen Anbaubedingungen des Staates ermöglichen den ganzjährigen Rosenanbau, was ihn entscheidend macht, um die massive Nachfrage am Valentinstag zu decken, wenn Millionen von Rosen verkauft werden.",
          nl: "Californië is de leidende rozenproducent in de Verenigde Staten, vooral in gebieden met mediterrane klimaten. De ideale groeiomstandigheden van de staat maken het hele jaar door rozencultivatie mogelijk, wat cruciaal is om aan de enorme vraag tijdens Valentijnsdag te voldoen wanneer miljoenen rozen worden verkocht."
        }
      },
      {
        question: {
          en: "What percentage of Valentine's Day cards are bought by women?",
          es: "¿Qué porcentaje de tarjetas del Día de San Valentín son compradas por mujeres?",
          de: "Welcher Prozentsatz der Valentinstagskarten wird von Frauen gekauft?",
          nl: "Welk percentage van Valentijnsdagkaarten wordt gekocht door vrouwen?"
        },
        options: [
          { en: "85%", es: "85%", de: "85%", nl: "85%" },
          { en: "50%", es: "50%", de: "50%", nl: "50%" },
          { en: "65%", es: "65%", de: "65%", nl: "65%" },
          { en: "75%", es: "75%", de: "75%", nl: "75%" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Women purchase approximately 85% of all Valentine's Day cards, demonstrating that they are more likely to express affection through traditional greeting cards. This statistic reflects broader consumer patterns where women tend to take the lead in maintaining relationships and celebrating special occasions with cards and gifts.",
          es: "Las mujeres compran aproximadamente el 85% de todas las tarjetas del Día de San Valentín, demostrando que son más propensas a expresar afecto a través de tarjetas de felicitación tradicionales. Esta estadística refleja patrones de consumo más amplios donde las mujeres tienden a tomar la iniciativa en mantener relaciones y celebrar ocasiones especiales con tarjetas y regalos.",
          de: "Frauen kaufen ungefähr 85% aller Valentinstagskarten, was zeigt, dass sie eher dazu neigen, Zuneigung durch traditionelle Grußkarten auszudrücken. Diese Statistik spiegelt breitere Verbrauchermuster wider, bei denen Frauen tendenziell die Führung übernehmen, Beziehungen zu pflegen und besondere Anlässe mit Karten und Geschenken zu feiern.",
          nl: "Vrouwen kopen ongeveer 85% van alle Valentijnsdagkaarten, wat aantoont dat zij eerder geneigd zijn om genegenheid uit te drukken via traditionele wenskaarten. Deze statistiek weerspiegelt bredere consumentenpatronen waarbij vrouwen de neiging hebben het voortouw te nemen in het onderhouden van relaties en het vieren van speciale gelegenheden met kaarten en geschenken."
        }
      }
    ],

    // Day 15 - February 15th: USS Maine, ENIAC, Galileo, & Russia Meteor
    day15: [
      {
        question: {
          en: "Which famous astronomer was born on February 15, 1564?",
          es: "¿Qué famoso astrónomo nació el 15 de febrero de 1564?",
          de: "Welcher berühmte Astronom wurde am 15. Februar 1564 geboren?",
          nl: "Welke beroemde astronoom werd geboren op 15 februari 1564?"
        },
        options: [
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },
          { en: "Isaac Newton", es: "Isaac Newton", de: "Isaac Newton", nl: "Isaac Newton" },
          { en: "Johannes Kepler", es: "Johannes Kepler", de: "Johannes Kepler", nl: "Johannes Kepler" },
          { en: "Nicolaus Copernicus", es: "Nicolás Copérnico", de: "Nikolaus Kopernikus", nl: "Nicolaas Copernicus" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Galileo Galilei was born on February 15, 1564, in Pisa, Italy. He revolutionized astronomy by improving the telescope and making groundbreaking observations of celestial bodies, including Jupiter's moons and Saturn's rings. His support for heliocentrism led to conflict with the Catholic Church but established him as the father of modern observational astronomy.",
          es: "Galileo Galilei nació el 15 de febrero de 1564 en Pisa, Italia. Revolucionó la astronomía mejorando el telescopio y haciendo observaciones revolucionarias de cuerpos celestes, incluyendo las lunas de Júpiter y los anillos de Saturno. Su apoyo al heliocentrismo lo llevó a un conflicto con la Iglesia Católica pero lo estableció como el padre de la astronomía observacional moderna.",
          de: "Galileo Galilei wurde am 15. Februar 1564 in Pisa, Italien geboren. Er revolutionierte die Astronomie, indem er das Teleskop verbesserte und bahnbrechende Beobachtungen von Himmelskörpern machte, darunter Jupiters Monde und Saturns Ringe. Seine Unterstützung des Heliozentrismus führte zu Konflikten mit der katholischen Kirche, etablierte ihn aber als Vater der modernen Beobachtungsastronomie.",
          nl: "Galileo Galilei werd geboren op 15 februari 1564 in Pisa, Italië. Hij revolutioneerde de astronomie door de telescoop te verbeteren en baanbrekende waarnemingen van hemellichamen te doen, waaronder de manen van Jupiter en de ringen van Saturnus. Zijn steun voor het heliocentrisme leidde tot conflict met de Katholieke Kerk maar vestigde hem als de vader van de moderne observationele astronomie."
        }
      },
      {
        question: {
          en: "Which U.S. battleship exploded in Havana Harbor on February 15, 1898, leading to the Spanish-American War?",
          es: "¿Qué acorazado estadounidense explotó en el puerto de La Habana el 15 de febrero de 1898, provocando la Guerra Hispano-Estadounidense?",
          de: "Welches US-Schlachtschiff explodierte am 15. Februar 1898 im Hafen von Havanna und führte zum Spanisch-Amerikanischen Krieg?",
          nl: "Welk Amerikaans slagschip explodeerde in de haven van Havana op 15 februari 1898, wat leidde tot de Spaans-Amerikaanse Oorlog?"
        },
        options: [
          { en: "USS Constitution", es: "USS Constitution", de: "USS Constitution", nl: "USS Constitution" },
          { en: "USS Maine", es: "USS Maine", de: "USS Maine", nl: "USS Maine" },
          { en: "USS Arizona", es: "USS Arizona", de: "USS Arizona", nl: "USS Arizona" },
          { en: "USS Missouri", es: "USS Missouri", de: "USS Missouri", nl: "USS Missouri" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The USS Maine exploded in Havana Harbor on February 15, 1898, killing 266 crew members. While the cause remains debated, the incident inflamed American public opinion with the rallying cry 'Remember the Maine!' and led directly to the Spanish-American War, marking America's emergence as a global military power.",
          es: "El USS Maine explotó en el puerto de La Habana el 15 de febrero de 1898, matando a 266 miembros de la tripulación. Aunque la causa sigue siendo debatida, el incidente inflamó la opinión pública estadounidense con el grito de guerra '¡Recuerden el Maine!' y condujo directamente a la Guerra Hispano-Estadounidense, marcando el surgimiento de América como potencia militar global.",
          de: "Die USS Maine explodierte am 15. Februar 1898 im Hafen von Havanna und tötete 266 Besatzungsmitglieder. Obwohl die Ursache umstritten bleibt, entfachte der Vorfall die amerikanische öffentliche Meinung mit dem Schlachtruf 'Erinnert euch an die Maine!' und führte direkt zum Spanisch-Amerikanischen Krieg, der Amerikas Aufstieg als globale Militärmacht markierte.",
          nl: "De USS Maine explodeerde in de haven van Havana op 15 februari 1898, waarbij 266 bemanningsleden omkwamen. Hoewel de oorzaak nog steeds wordt bediscussieerd, deed het incident de Amerikaanse publieke opinie ontvlammen met de strijdkreet 'Herinner de Maine!' en leidde direct tot de Spaans-Amerikaanse Oorlog, wat Amerika's opkomst als wereldwijde militaire macht markeerde."
        }
      },
      {
        question: {
          en: "What revolutionary computer was unveiled on February 15, 1946?",
          es: "¿Qué computadora revolucionaria fue presentada el 15 de febrero de 1946?",
          de: "Welcher revolutionäre Computer wurde am 15. Februar 1946 vorgestellt?",
          nl: "Welke revolutionaire computer werd onthuld op 15 februari 1946?"
        },
        options: [
          { en: "ENIAC", es: "ENIAC", de: "ENIAC", nl: "ENIAC" },
          { en: "IBM 701", es: "IBM 701", de: "IBM 701", nl: "IBM 701" },
          { en: "EDVAC", es: "EDVAC", de: "EDVAC", nl: "EDVAC" },
          { en: "UNIVAC", es: "UNIVAC", de: "UNIVAC", nl: "UNIVAC" }
        ],
        correctIndex: 0,
        explanation: {
          en: "ENIAC (Electronic Numerical Integrator and Computer) was unveiled on February 15, 1946, at the University of Pennsylvania. This room-sized machine was the first general-purpose electronic digital computer, weighing 30 tons and containing over 17,000 vacuum tubes. It could perform calculations thousands of times faster than any previous machine.",
          es: "ENIAC (Integrador y Computador Numérico Electrónico) fue presentado el 15 de febrero de 1946 en la Universidad de Pensilvania. Esta máquina del tamaño de una habitación fue la primera computadora digital electrónica de propósito general, pesaba 30 toneladas y contenía más de 17,000 tubos de vacío. Podía realizar cálculos miles de veces más rápido que cualquier máquina anterior.",
          de: "ENIAC (Electronic Numerical Integrator and Computer) wurde am 15. Februar 1946 an der Universität von Pennsylvania vorgestellt. Diese raumgroße Maschine war der erste universelle elektronische Digitalcomputer, wog 30 Tonnen und enthielt über 17.000 Vakuumröhren. Er konnte Berechnungen tausendmal schneller durchführen als jede vorherige Maschine.",
          nl: "ENIAC (Electronic Numerical Integrator and Computer) werd onthuld op 15 februari 1946 aan de Universiteit van Pennsylvania. Deze kamergrote machine was de eerste algemene elektronische digitale computer, woog 30 ton en bevatte meer dan 17.000 vacuümbuizen. Het kon berekeningen duizenden keren sneller uitvoeren dan enige eerdere machine."
        }
      },
      {
        question: {
          en: "In which Russian city did a meteor explode in the atmosphere on February 15, 2013?",
          es: "¿En qué ciudad rusa explotó un meteorito en la atmósfera el 15 de febrero de 2013?",
          de: "In welcher russischen Stadt explodierte am 15. Februar 2013 ein Meteor in der Atmosphäre?",
          nl: "In welke Russische stad explodeerde een meteoor in de atmosfeer op 15 februari 2013?"
        },
        options: [
          { en: "St. Petersburg", es: "San Petersburgo", de: "Sankt Petersburg", nl: "Sint-Petersburg" },
          { en: "Chelyabinsk", es: "Cheliábinsk", de: "Tscheljabinsk", nl: "Tsjeljabinsk" },
          { en: "Vladivostok", es: "Vladivostok", de: "Wladiwostok", nl: "Vladivostok" },
          { en: "Moscow", es: "Moscú", de: "Moskau", nl: "Moskou" }
        ],
        correctIndex: 1,
        explanation: {
          en: "A meteor exploded over Chelyabinsk, Russia on February 15, 2013, in the most powerful such event since the 1908 Tunguska incident. The airburst released energy equivalent to about 500 kilotons of TNT, injuring over 1,500 people mainly from shattered glass, and was captured on countless dashboard cameras throughout the region.",
          es: "Un meteorito explotó sobre Cheliábinsk, Rusia, el 15 de febrero de 2013, en el evento más poderoso de este tipo desde el incidente de Tunguska de 1908. La explosión aérea liberó energía equivalente a unas 500 kilotones de TNT, hiriendo a más de 1,500 personas principalmente por vidrios rotos, y fue capturado en innumerables cámaras de tablero en toda la región.",
          de: "Ein Meteor explodierte am 15. Februar 2013 über Tscheljabinsk, Russland, im mächtigsten solchen Ereignis seit dem Tunguska-Vorfall von 1908. Die Luftexplosion setzte Energie frei, die etwa 500 Kilotonnen TNT entspricht, verletzte über 1.500 Menschen hauptsächlich durch zerbrochenes Glas und wurde auf unzähligen Dashcams in der gesamten Region aufgezeichnet.",
          nl: "Een meteoor explodeerde boven Tsjeljabinsk, Rusland op 15 februari 2013, in de krachtigste dergelijke gebeurtenis sinds het Tunguska-incident van 1908. De luchtontploffing gaf energie vrij gelijk aan ongeveer 500 kiloton TNT, verwondde meer dan 1.500 mensen voornamelijk door gebroken glas, en werd vastgelegd op talloze dashboardcamera's in de hele regio."
        }
      },
      {
        question: {
          en: "What does ENIAC stand for?",
          es: "¿Qué significa ENIAC?",
          de: "Wofür steht ENIAC?",
          nl: "Waar staat ENIAC voor?"
        },
        options: [
          { en: "Electronic Network Integration and Control", es: "Integración y Control de Red Electrónica", de: "Electronic Network Integration and Control", nl: "Electronic Network Integration and Control" },
          { en: "Electric Number Integration and Computing", es: "Integración y Computación de Números Eléctricos", de: "Electric Number Integration and Computing", nl: "Electric Number Integration and Computing" },
          { en: "Enhanced Numerical Intelligence and Calculation", es: "Inteligencia y Cálculo Numérico Mejorado", de: "Enhanced Numerical Intelligence and Calculation", nl: "Enhanced Numerical Intelligence and Calculation" },
          { en: "Electronic Numerical Integrator and Computer", es: "Integrador y Computador Numérico Electrónico", de: "Electronic Numerical Integrator and Computer", nl: "Electronic Numerical Integrator and Computer" }
        ],
        correctIndex: 3,
        explanation: {
          en: "ENIAC stands for Electronic Numerical Integrator and Computer. Originally designed to calculate artillery firing tables for the U.S. Army during World War II, it represented a revolutionary leap in computing technology and laid the groundwork for modern digital computers that have transformed every aspect of modern life.",
          es: "ENIAC significa Integrador y Computador Numérico Electrónico. Originalmente diseñado para calcular tablas de tiro de artillería para el Ejército de EE.UU. durante la Segunda Guerra Mundial, representó un salto revolucionario en la tecnología informática y sentó las bases para las computadoras digitales modernas que han transformado cada aspecto de la vida moderna.",
          de: "ENIAC steht für Electronic Numerical Integrator and Computer. Ursprünglich entworfen, um Artillerie-Schießtabellen für die US-Armee während des Zweiten Weltkriegs zu berechnen, stellte er einen revolutionären Sprung in der Computertechnologie dar und legte den Grundstein für moderne Digitalcomputer, die jeden Aspekt des modernen Lebens transformiert haben.",
          nl: "ENIAC staat voor Electronic Numerical Integrator and Computer. Oorspronkelijk ontworpen om artillerie-vuurtabellen te berekenen voor het Amerikaanse leger tijdens de Tweede Wereldoorlog, vertegenwoordigde het een revolutionaire sprong in computertechnologie en legde de basis voor moderne digitale computers die elk aspect van het moderne leven hebben getransformeerd."
        }
      }
    ],

    // Day 16 - February 16th: Fidel Castro Becomes Prime Minister
    day16: [
      {
        question: {
          en: "On February 16, 1959, who became Prime Minister of Cuba?",
          es: "El 16 de febrero de 1959, ¿quién se convirtió en Primer Ministro de Cuba?",
          de: "Wer wurde am 16. Februar 1959 Premierminister von Kuba?",
          nl: "Wie werd op 16 februari 1959 premier van Cuba?"
        },
        options: [
          { en: "Che Guevara", es: "Che Guevara", de: "Che Guevara", nl: "Che Guevara" },
          { en: "Raúl Castro", es: "Raúl Castro", de: "Raúl Castro", nl: "Raúl Castro" },
          { en: "Fulgencio Batista", es: "Fulgencio Batista", de: "Fulgencio Batista", nl: "Fulgencio Batista" },
          { en: "Fidel Castro", es: "Fidel Castro", de: "Fidel Castro", nl: "Fidel Castro" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Fidel Castro became Prime Minister of Cuba on February 16, 1959, following the successful Cuban Revolution. He would go on to lead Cuba for nearly five decades, transforming it into a communist state and becoming one of the most influential and controversial figures of the 20th century.",
          es: "Fidel Castro se convirtió en Primer Ministro de Cuba el 16 de febrero de 1959, tras la exitosa Revolución Cubana. Llegaría a liderar Cuba durante casi cinco décadas, transformándola en un estado comunista y convirtiéndose en una de las figuras más influyentes y controvertidas del siglo XX.",
          de: "Fidel Castro wurde am 16. Februar 1959 Premierminister von Kuba nach der erfolgreichen Kubanischen Revolution. Er sollte Kuba fast fünf Jahrzehnte lang führen, es in einen kommunistischen Staat verwandeln und zu einer der einflussreichsten und umstrittensten Figuren des 20. Jahrhunderts werden.",
          nl: "Fidel Castro werd op 16 februari 1959 premier van Cuba, na de succesvolle Cubaanse Revolutie. Hij zou Cuba bijna vijf decennia leiden, het transformeren in een communistische staat en een van de meest invloedrijke en controversiële figuren van de 20e eeuw worden."
        }
      },
      {
        question: {
          en: "What revolution brought Fidel Castro to power in Cuba in 1959?",
          es: "¿Qué revolución llevó a Fidel Castro al poder en Cuba en 1959?",
          de: "Welche Revolution brachte Fidel Castro 1959 in Kuba an die Macht?",
          nl: "Welke revolutie bracht Fidel Castro in 1959 aan de macht in Cuba?"
        },
        options: [
          { en: "Mexican Revolution", es: "Revolución Mexicana", de: "Mexikanische Revolution", nl: "Mexicaanse Revolutie" },
          { en: "Cuban Revolution", es: "Revolución Cubana", de: "Kubanische Revolution", nl: "Cubaanse Revolutie" },
          { en: "October Revolution", es: "Revolución de Octubre", de: "Oktoberrevolution", nl: "Oktoberrevolutie" },
          { en: "French Revolution", es: "Revolución Francesa", de: "Französische Revolution", nl: "Franse Revolutie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Cuban Revolution was an armed revolt led by Fidel Castro from 1953 to 1959 that overthrew the government of Fulgencio Batista. The revolution transformed Cuba from a capitalist dictatorship aligned with the United States into a socialist state, profoundly impacting Cold War politics and Latin American history.",
          es: "La Revolución Cubana fue una revuelta armada liderada por Fidel Castro de 1953 a 1959 que derrocó el gobierno de Fulgencio Batista. La revolución transformó Cuba de una dictadura capitalista alineada con Estados Unidos a un estado socialista, impactando profundamente la política de la Guerra Fría y la historia latinoamericana.",
          de: "Die Kubanische Revolution war ein bewaffneter Aufstand unter Führung von Fidel Castro von 1953 bis 1959, der die Regierung von Fulgencio Batista stürzte. Die Revolution verwandelte Kuba von einer kapitalistischen Diktatur, die mit den Vereinigten Staaten verbündet war, in einen sozialistischen Staat und hatte tiefgreifende Auswirkungen auf die Politik des Kalten Krieges und die lateinamerikanische Geschichte.",
          nl: "De Cubaanse Revolutie was een gewapende opstand geleid door Fidel Castro van 1953 tot 1959 die de regering van Fulgencio Batista omverwierp. De revolutie transformeerde Cuba van een kapitalistische dictatuur die gealigneerd was met de Verenigde Staten naar een socialistische staat, met diepgaande gevolgen voor de Koude Oorlog-politiek en Latijns-Amerikaanse geschiedenis."
        }
      },
      {
        question: {
          en: "Which dictator did Fidel Castro's revolution overthrow in 1959?",
          es: "¿Qué dictador derrocó la revolución de Fidel Castro en 1959?",
          de: "Welchen Diktator stürzte Fidel Castros Revolution 1959?",
          nl: "Welke dictator werd door Fidel Castro's revolutie in 1959 afgezet?"
        },
        options: [
          { en: "Augusto Pinochet", es: "Augusto Pinochet", de: "Augusto Pinochet", nl: "Augusto Pinochet" },
          { en: "Fulgencio Batista", es: "Fulgencio Batista", de: "Fulgencio Batista", nl: "Fulgencio Batista" },
          { en: "Rafael Trujillo", es: "Rafael Trujillo", de: "Rafael Trujillo", nl: "Rafael Trujillo" },
          { en: "Juan Perón", es: "Juan Perón", de: "Juan Perón", nl: "Juan Perón" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Fulgencio Batista ruled Cuba as a military dictator from 1952 to 1959, maintaining power through corruption and oppression. His regime was supported by the United States and wealthy business interests, but his authoritarian rule and economic inequality fueled popular support for Castro's revolutionary movement.",
          es: "Fulgencio Batista gobernó Cuba como dictador militar de 1952 a 1959, manteniendo el poder a través de la corrupción y la opresión. Su régimen fue apoyado por Estados Unidos y poderosos intereses empresariales, pero su gobierno autoritario y la desigualdad económica alimentaron el apoyo popular al movimiento revolucionario de Castro.",
          de: "Fulgencio Batista regierte Kuba von 1952 bis 1959 als Militärdiktator und hielt die Macht durch Korruption und Unterdrückung aufrecht. Sein Regime wurde von den Vereinigten Staaten und wohlhabenden Geschäftsinteressen unterstützt, aber seine autoritäre Herrschaft und wirtschaftliche Ungleichheit förderten die Unterstützung der Bevölkerung für Castros revolutionäre Bewegung.",
          nl: "Fulgencio Batista regeerde Cuba als militaire dictator van 1952 tot 1959, waarbij hij de macht behield door corruptie en onderdrukking. Zijn regime werd gesteund door de Verenigde Staten en rijke zakelijke belangen, maar zijn autoritaire bewind en economische ongelijkheid voedden de volkssteun voor Castro's revolutionaire beweging."
        }
      },
      {
        question: {
          en: "The First Benin Empire was also founded on February 16, but in what year?",
          es: "El Primer Imperio de Benín también se fundó el 16 de febrero, ¿pero en qué año?",
          de: "Das Erste Benin-Reich wurde ebenfalls am 16. Februar gegründet, aber in welchem Jahr?",
          nl: "Het Eerste Benin Rijk werd ook gesticht op 16 februari, maar in welk jaar?"
        },
        options: [
          { en: "1280", es: "1280", de: "1280", nl: "1280" },
          { en: "1380", es: "1380", de: "1380", nl: "1380" },
          { en: "1080", es: "1080", de: "1080", nl: "1080" },
          { en: "1180", es: "1180", de: "1180", nl: "1180" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Benin Empire was founded on February 16, 1180, in what is now southern Nigeria. This powerful West African kingdom became renowned for its sophisticated bronze artwork, complex political structure, and advanced urban planning, flourishing until British conquest in 1897.",
          es: "El Imperio de Benín se fundó el 16 de febrero de 1180 en lo que hoy es el sur de Nigeria. Este poderoso reino de África Occidental se hizo famoso por su sofisticado arte en bronce, estructura política compleja y planificación urbana avanzada, prosperando hasta la conquista británica en 1897.",
          de: "Das Benin-Reich wurde am 16. Februar 1180 im heutigen Süd-Nigeria gegründet. Dieses mächtige westafrikanische Königreich wurde berühmt für seine ausgefeilte Bronzekunst, komplexe politische Struktur und fortgeschrittene Stadtplanung und blühte bis zur britischen Eroberung 1897.",
          nl: "Het Benin Rijk werd gesticht op 16 februari 1180 in wat nu Zuid-Nigeria is. Dit krachtige West-Afrikaanse koninkrijk werd beroemd om zijn verfijnde bronzen kunstwerken, complexe politieke structuur en geavanceerde stadsplanning, en bloeide tot de Britse verovering in 1897."
        }
      },
      {
        question: {
          en: "What political ideology did Fidel Castro's Cuba adopt?",
          es: "¿Qué ideología política adoptó la Cuba de Fidel Castro?",
          de: "Welche politische Ideologie übernahm Fidel Castros Kuba?",
          nl: "Welke politieke ideologie nam het Cuba van Fidel Castro aan?"
        },
        options: [
          { en: "Communism", es: "Comunismo", de: "Kommunismus", nl: "Communisme" },
          { en: "Fascism", es: "Fascismo", de: "Faschismus", nl: "Fascisme" },
          { en: "Monarchy", es: "Monarquía", de: "Monarchie", nl: "Monarchie" },
          { en: "Democracy", es: "Democracia", de: "Demokratie", nl: "Democratie" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Cuba adopted communism under Fidel Castro, establishing a one-party socialist state aligned with the Soviet Union during the Cold War. This political transformation led to widespread nationalization of private property, a centrally planned economy, and strained relations with the United States that continue to influence Caribbean politics today.",
          es: "Cuba adoptó el comunismo bajo Fidel Castro, estableciendo un estado socialista de partido único alineado con la Unión Soviética durante la Guerra Fría. Esta transformación política condujo a la nacionalización generalizada de la propiedad privada, una economía planificada centralmente y relaciones tensas con Estados Unidos que continúan influyendo en la política caribeña hoy.",
          de: "Kuba übernahm unter Fidel Castro den Kommunismus und etablierte einen sozialistischen Einparteienstaat, der während des Kalten Krieges mit der Sowjetunion verbündet war. Diese politische Transformation führte zu weitreichender Verstaatlichung von Privateigentum, einer zentral geplanten Wirtschaft und angespannten Beziehungen zu den Vereinigten Staaten, die bis heute die karibische Politik beeinflussen.",
          nl: "Cuba nam het communisme aan onder Fidel Castro, waarbij een socialistische eenpartijstaat werd gevestigd die gealigneerd was met de Sovjet-Unie tijdens de Koude Oorlog. Deze politieke transformatie leidde tot wijdverspreide nationalisatie van privébezit, een centraal geplande economie en gespannen betrekkingen met de Verenigde Staten die de Caribische politiek vandaag de dag nog steeds beïnvloeden."
        }
      }
    ],

    // Day 17 - February 17th: Michael Jordan's Birthday
    day17: [
      {
        question: {
          en: "Which legendary basketball player was born on February 17, 1963?",
          es: "¿Qué legendario jugador de baloncesto nació el 17 de febrero de 1963?",
          de: "Welcher legendäre Basketballspieler wurde am 17. Februar 1963 geboren?",
          nl: "Welke legendarische basketbalspeler werd geboren op 17 februari 1963?"
        },
        options: [
          { en: "Michael Jordan", es: "Michael Jordan", de: "Michael Jordan", nl: "Michael Jordan" },
          { en: "LeBron James", es: "LeBron James", de: "LeBron James", nl: "LeBron James" },
          { en: "Kobe Bryant", es: "Kobe Bryant", de: "Kobe Bryant", nl: "Kobe Bryant" },
          { en: "Magic Johnson", es: "Magic Johnson", de: "Magic Johnson", nl: "Magic Johnson" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Michael Jordan was born on February 17, 1963, in Brooklyn, New York. Widely regarded as the greatest basketball player of all time, Jordan dominated the NBA in the 1990s with the Chicago Bulls and revolutionized basketball's global popularity through his exceptional athleticism, competitive drive, and cultural impact.",
          es: "Michael Jordan nació el 17 de febrero de 1963 en Brooklyn, Nueva York. Ampliamente considerado como el mejor jugador de baloncesto de todos los tiempos, Jordan dominó la NBA en la década de 1990 con los Chicago Bulls y revolucionó la popularidad global del baloncesto a través de su excepcional atletismo, impulso competitivo e impacto cultural.",
          de: "Michael Jordan wurde am 17. Februar 1963 in Brooklyn, New York geboren. Weithin als der größte Basketballspieler aller Zeiten angesehen, dominierte Jordan die NBA in den 1990er Jahren mit den Chicago Bulls und revolutionierte die globale Popularität des Basketballs durch seine außergewöhnliche Athletik, seinen Wettbewerbsgeist und kulturellen Einfluss.",
          nl: "Michael Jordan werd geboren op 17 februari 1963 in Brooklyn, New York. Algemeen beschouwd als de beste basketbalspeler aller tijden, domineerde Jordan de NBA in de jaren 1990 met de Chicago Bulls en revolutioneerde de wereldwijde populariteit van basketbal door zijn uitzonderlijke atletiek, competitieve drive en culturele impact."
        }
      },
      {
        question: {
          en: "How many NBA championships did Michael Jordan win with the Chicago Bulls?",
          es: "¿Cuántos campeonatos de la NBA ganó Michael Jordan con los Chicago Bulls?",
          de: "Wie viele NBA-Meisterschaften gewann Michael Jordan mit den Chicago Bulls?",
          nl: "Hoeveel NBA-kampioenschappen won Michael Jordan met de Chicago Bulls?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Michael Jordan won six NBA championships with the Chicago Bulls in two separate three-peats (1991-1993 and 1996-1998). He was named Finals MVP in all six championship victories, demonstrating his dominance in the most crucial games and cementing his legacy as the greatest playoff performer in basketball history.",
          es: "Michael Jordan ganó seis campeonatos de la NBA con los Chicago Bulls en dos tríos separados (1991-1993 y 1996-1998). Fue nombrado MVP de las Finales en las seis victorias de campeonato, demostrando su dominio en los juegos más cruciales y consolidando su legado como el mejor jugador de playoffs en la historia del baloncesto.",
          de: "Michael Jordan gewann sechs NBA-Meisterschaften mit den Chicago Bulls in zwei separaten Drei-Serien (1991-1993 und 1996-1998). Er wurde in allen sechs Meisterschaftssiegen zum Finals-MVP ernannt, was seine Dominanz in den wichtigsten Spielen demonstrierte und sein Vermächtnis als größter Playoff-Spieler in der Basketballgeschichte zementierte.",
          nl: "Michael Jordan won zes NBA-kampioenschappen met de Chicago Bulls in twee afzonderlijke drietallen (1991-1993 en 1996-1998). Hij werd in alle zes kampioenschapsoverwinningen tot Finals MVP benoemd, wat zijn dominantie in de meest cruciale wedstrijden aantoonde en zijn nalatenschap als de grootste playoff-speler in de basketbalgeschiedenis vestigde."
        }
      },
      {
        question: {
          en: "What was Michael Jordan's jersey number with the Chicago Bulls?",
          es: "¿Cuál era el número de camiseta de Michael Jordan con los Chicago Bulls?",
          de: "Was war Michael Jordans Trikotnummer bei den Chicago Bulls?",
          nl: "Wat was Michael Jordan's rugnummer bij de Chicago Bulls?"
        },
        options: [
          { en: "33", es: "33", de: "33", nl: "33" },
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "32", es: "32", de: "32", nl: "32" },
          { en: "23", es: "23", de: "23", nl: "23" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Michael Jordan wore number 23 for most of his career with the Chicago Bulls, making it one of the most iconic jersey numbers in sports history. The number has been retired by the Bulls and has become synonymous with excellence in basketball, inspiring countless players worldwide.",
          es: "Michael Jordan usó el número 23 durante la mayor parte de su carrera con los Chicago Bulls, convirtiéndolo en uno de los números de camiseta más icónicos en la historia del deporte. El número ha sido retirado por los Bulls y se ha vuelto sinónimo de excelencia en el baloncesto, inspirando a innumerables jugadores en todo el mundo.",
          de: "Michael Jordan trug die Nummer 23 während des größten Teils seiner Karriere bei den Chicago Bulls, was sie zu einer der ikonischsten Trikotnummern in der Sportgeschichte machte. Die Nummer wurde von den Bulls zurückgezogen und ist zum Synonym für Exzellenz im Basketball geworden, was unzählige Spieler weltweit inspiriert.",
          nl: "Michael Jordan droeg nummer 23 tijdens het grootste deel van zijn carrière bij de Chicago Bulls, waardoor het een van de meest iconische rugnummers in de sportgeschiedenis werd. Het nummer is door de Bulls uit gebruik genomen en is synoniem geworden met excellentie in basketbal, wat talloze spelers wereldwijd heeft geïnspireerd."
        }
      },
      {
        question: {
          en: "What popular sneaker brand is most associated with Michael Jordan?",
          es: "¿Qué marca popular de zapatillas está más asociada con Michael Jordan?",
          de: "Welche beliebte Sneaker-Marke wird am meisten mit Michael Jordan in Verbindung gebracht?",
          nl: "Welk populair sneakermerk wordt het meest geassocieerd met Michael Jordan?"
        },
        options: [
          { en: "Nike (Air Jordan)", es: "Nike (Air Jordan)", de: "Nike (Air Jordan)", nl: "Nike (Air Jordan)" },
          { en: "Adidas", es: "Adidas", de: "Adidas", nl: "Adidas" },
          { en: "Reebok", es: "Reebok", de: "Reebok", nl: "Reebok" },
          { en: "Puma", es: "Puma", de: "Puma", nl: "Puma" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nike's Air Jordan brand, launched in 1984, became synonymous with Michael Jordan and revolutionized athletic footwear marketing. The partnership created a multi-billion dollar brand that transcended sports, with Air Jordans becoming cultural icons and collector's items that remain hugely popular decades after Jordan's retirement.",
          es: "La marca Air Jordan de Nike, lanzada en 1984, se volvió sinónima de Michael Jordan y revolucionó el marketing de calzado atlético. La asociación creó una marca multimillonaria que trascendió los deportes, con los Air Jordans convirtiéndose en íconos culturales y artículos de colección que siguen siendo muy populares décadas después del retiro de Jordan.",
          de: "Nikes Air Jordan-Marke, die 1984 eingeführt wurde, wurde zum Synonym für Michael Jordan und revolutionierte das Marketing von Sportschuhen. Die Partnerschaft schuf eine Milliarden-Dollar-Marke, die den Sport transzendierte, wobei Air Jordans zu kulturellen Ikonen und Sammlerstücken wurden, die Jahrzehnte nach Jordans Rücktritt enorm beliebt bleiben.",
          nl: "Nike's Air Jordan-merk, gelanceerd in 1984, werd synoniem met Michael Jordan en revolutioneerde de marketing van sportschoenen. Het partnerschap creëerde een multi-miljard dollar merk dat sport overstijgt, waarbij Air Jordans culturele iconen en verzamelobjecten werden die tientallen jaren na Jordan's pensionering enorm populair blijven."
        }
      },
      {
        question: {
          en: "How many times did Michael Jordan win the NBA MVP award?",
          es: "¿Cuántas veces ganó Michael Jordan el premio MVP de la NBA?",
          de: "Wie oft gewann Michael Jordan die NBA-MVP-Auszeichnung?",
          nl: "Hoeveel keer won Michael Jordan de NBA MVP-prijs?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "3", es: "3", de: "3", nl: "3" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Michael Jordan won the NBA Most Valuable Player award five times (1988, 1991, 1992, 1996, 1998). These MVP awards, combined with his six Finals MVP awards, statistical dominance, and competitive excellence, solidified his reputation as not just a champion but the most complete and impactful player in NBA history.",
          es: "Michael Jordan ganó el premio al Jugador Más Valioso de la NBA cinco veces (1988, 1991, 1992, 1996, 1998). Estos premios MVP, combinados con sus seis premios MVP de las Finales, dominio estadístico y excelencia competitiva, solidificaron su reputación no solo como campeón sino como el jugador más completo e impactante en la historia de la NBA.",
          de: "Michael Jordan gewann die NBA Most Valuable Player-Auszeichnung fünfmal (1988, 1991, 1992, 1996, 1998). Diese MVP-Auszeichnungen, kombiniert mit seinen sechs Finals-MVP-Auszeichnungen, statistischer Dominanz und Wettbewerbsexzellenz, festigten seinen Ruf nicht nur als Champion, sondern als der vollständigste und einflussreichste Spieler in der NBA-Geschichte.",
          nl: "Michael Jordan won de NBA Most Valuable Player-prijs vijf keer (1988, 1991, 1992, 1996, 1998). Deze MVP-prijzen, gecombineerd met zijn zes Finals MVP-prijzen, statistische dominantie en competitieve excellentie, verstevigden zijn reputatie niet alleen als kampioen maar als de meest complete en impactvolle speler in de NBA-geschiedenis."
        }
      }
    ],

    // Day 18 - February 18th: Pluto Discovered by Clyde Tombaugh
    day18: [
      {
        question: {
          en: "Who discovered Pluto on February 18, 1930?",
          es: "¿Quién descubrió Plutón el 18 de febrero de 1930?",
          de: "Wer entdeckte Pluto am 18. Februar 1930?",
          nl: "Wie ontdekte Pluto op 18 februari 1930?"
        },
        options: [
          { en: "Edwin Hubble", es: "Edwin Hubble", de: "Edwin Hubble", nl: "Edwin Hubble" },
          { en: "Neil Armstrong", es: "Neil Armstrong", de: "Neil Armstrong", nl: "Neil Armstrong" },
          { en: "Clyde Tombaugh", es: "Clyde Tombaugh", de: "Clyde Tombaugh", nl: "Clyde Tombaugh" },
          { en: "Carl Sagan", es: "Carl Sagan", de: "Carl Sagan", nl: "Carl Sagan" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Clyde Tombaugh discovered Pluto on February 18, 1930, at the Lowell Observatory in Arizona. The 23-year-old astronomer found the distant world by comparing photographic plates, searching for a predicted ninth planet. His discovery expanded our knowledge of the solar system and inspired decades of astronomical research.",
          es: "Clyde Tombaugh descubrió Plutón el 18 de febrero de 1930 en el Observatorio Lowell en Arizona. El astrónomo de 23 años encontró el mundo distante comparando placas fotográficas, buscando un noveno planeta predicho. Su descubrimiento amplió nuestro conocimiento del sistema solar e inspiró décadas de investigación astronómica.",
          de: "Clyde Tombaugh entdeckte Pluto am 18. Februar 1930 am Lowell-Observatorium in Arizona. Der 23-jährige Astronom fand die ferne Welt durch den Vergleich fotografischer Platten und suchte nach einem vorhergesagten neunten Planeten. Seine Entdeckung erweiterte unser Wissen über das Sonnensystem und inspirierte Jahrzehnte astronomischer Forschung.",
          nl: "Clyde Tombaugh ontdekte Pluto op 18 februari 1930 in het Lowell Observatorium in Arizona. De 23-jarige astronoom vond de verre wereld door fotografische platen te vergelijken, op zoek naar een voorspelde negende planeet. Zijn ontdekking breidde onze kennis van het zonnestelsel uit en inspireerde decennia van astronomisch onderzoek."
        }
      },
      {
        question: {
          en: "In what year was Pluto discovered?",
          es: "¿En qué año se descubrió Plutón?",
          de: "In welchem Jahr wurde Pluto entdeckt?",
          nl: "In welk jaar werd Pluto ontdekt?"
        },
        options: [
          { en: "1920", es: "1920", de: "1920", nl: "1920" },
          { en: "1930", es: "1930", de: "1930", nl: "1930" },
          { en: "1940", es: "1940", de: "1940", nl: "1940" },
          { en: "1950", es: "1950", de: "1950", nl: "1950" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Pluto was discovered in 1930, becoming the ninth planet in our solar system at the time. For 76 years, it was classified as a full planet before being reclassified as a dwarf planet in 2006, sparking ongoing debates about planetary classification and our understanding of the outer solar system.",
          es: "Plutón fue descubierto en 1930, convirtiéndose en el noveno planeta de nuestro sistema solar en ese momento. Durante 76 años, fue clasificado como un planeta completo antes de ser reclasificado como planeta enano en 2006, desencadenando debates continuos sobre la clasificación planetaria y nuestra comprensión del sistema solar exterior.",
          de: "Pluto wurde 1930 entdeckt und wurde damals der neunte Planet in unserem Sonnensystem. 76 Jahre lang wurde er als vollwertiger Planet klassifiziert, bevor er 2006 als Zwergplanet neu klassifiziert wurde, was anhaltende Debatten über die Planetenklassifizierung und unser Verständnis des äußeren Sonnensystems auslöste.",
          nl: "Pluto werd ontdekt in 1930 en werd destijds de negende planeet in ons zonnestelsel. Gedurende 76 jaar werd het geclassificeerd als een volledige planeet voordat het in 2006 werd geherclas sificeerd als een dwergplaneet, wat voortdurende debatten op gang bracht over planetaire classificatie en ons begrip van het buitenste zonnestelsel."
        }
      },
      {
        question: {
          en: "In what year was Pluto reclassified as a 'dwarf planet'?",
          es: "¿En qué año fue reclasificado Plutón como un 'planeta enano'?",
          de: "In welchem Jahr wurde Pluto als 'Zwergplanet' neu klassifiziert?",
          nl: "In welk jaar werd Pluto geclassificeerd als een 'dwergplaneet'?"
        },
        options: [
          { en: "2006", es: "2006", de: "2006", nl: "2006" },
          { en: "1999", es: "1999", de: "1999", nl: "1999" },
          { en: "2000", es: "2000", de: "2000", nl: "2000" },
          { en: "2010", es: "2010", de: "2010", nl: "2010" }
        ],
        correctIndex: 0,
        explanation: {
          en: "In 2006, the International Astronomical Union reclassified Pluto as a 'dwarf planet' rather than a full planet. The decision was controversial but based on Pluto's failure to clear its orbital neighborhood of other objects, one of three criteria established for planetary status, fundamentally changing how we define planets.",
          es: "En 2006, la Unión Astronómica Internacional reclasificó Plutón como 'planeta enano' en lugar de un planeta completo. La decisión fue controvertida pero se basó en el fracaso de Plutón para despejar su vecindad orbital de otros objetos, uno de los tres criterios establecidos para el estatus planetario, cambiando fundamentalmente cómo definimos los planetas.",
          de: "Im Jahr 2006 klassifizierte die Internationale Astronomische Union Pluto als 'Zwergplanet' statt als vollwertigen Planeten neu. Die Entscheidung war umstritten, basierte aber auf Plutos Versäumnis, seine Umlaufbahnumgebung von anderen Objekten zu räumen, eines von drei Kriterien für den Planetenstatus, was grundlegend veränderte, wie wir Planeten definieren.",
          nl: "In 2006 herclassificeerde de Internationale Astronomische Unie Pluto als een 'dwergplaneet' in plaats van een volledige planeet. De beslissing was controversieel maar gebaseerd op Pluto's onvermogen om zijn orbitale omgeving van andere objecten te zuiveren, een van de drie criteria voor planetaire status, wat fundamenteel veranderde hoe we planeten definiëren."
        }
      },
      {
        question: {
          en: "Which NASA spacecraft visited Pluto in 2015?",
          es: "¿Qué nave espacial de la NASA visitó Plutón en 2015?",
          de: "Welche NASA-Raumsonde besuchte Pluto im Jahr 2015?",
          nl: "Welk NASA-ruimtevaartuig bezocht Pluto in 2015?"
        },
        options: [
          { en: "Cassini", es: "Cassini", de: "Cassini", nl: "Cassini" },
          { en: "Voyager 2", es: "Voyager 2", de: "Voyager 2", nl: "Voyager 2" },
          { en: "Pioneer 10", es: "Pioneer 10", de: "Pioneer 10", nl: "Pioneer 10" },
          { en: "New Horizons", es: "New Horizons", de: "New Horizons", nl: "New Horizons" }
        ],
        correctIndex: 3,
        explanation: {
          en: "NASA's New Horizons spacecraft made its historic flyby of Pluto on July 14, 2015, after a 9.5-year journey. The mission revealed Pluto's complex geology, including ice mountains and a heart-shaped nitrogen plain, dramatically transforming our understanding of this distant world and the Kuiper Belt.",
          es: "La nave espacial New Horizons de la NASA realizó su histórico sobrevuelo de Plutón el 14 de julio de 2015, después de un viaje de 9.5 años. La misión reveló la geología compleja de Plutón, incluyendo montañas de hielo y una llanura de nitrógeno en forma de corazón, transformando dramáticamente nuestra comprensión de este mundo distante y el Cinturón de Kuiper.",
          de: "NASAs Raumsonde New Horizons machte am 14. Juli 2015 ihren historischen Vorbeiflug an Pluto nach einer 9,5-jährigen Reise. Die Mission enthüllte Plutos komplexe Geologie, einschließlich Eisbergen und einer herzförmigen Stickstoffebene, was unser Verständnis dieser fernen Welt und des Kuipergürtels dramatisch veränderte.",
          nl: "NASA's New Horizons ruimtevaartuig maakte zijn historische scheervlucht langs Pluto op 14 juli 2015, na een reis van 9,5 jaar. De missie onthulde Pluto's complexe geologie, waaronder ijsbergen en een hartvormige stikstofvlakte, wat ons begrip van deze verre wereld en de Kuipergordel dramatisch transformeerde."
        }
      },
      {
        question: {
          en: "Pluto is named after the Roman god of what?",
          es: "Plutón lleva el nombre del dios romano de qué?",
          de: "Pluto ist nach dem römischen Gott wovon benannt?",
          nl: "Pluto is vernoemd naar de Romeinse god van wat?"
        },
        options: [
          { en: "War", es: "Guerra", de: "Krieg", nl: "Oorlog" },
          { en: "The Sea", es: "El Mar", de: "Das Meer", nl: "De Zee" },
          { en: "The Underworld", es: "El Inframundo", de: "Die Unterwelt", nl: "De Onderwereld" },
          { en: "The Sky", es: "El Cielo", de: "Der Himmel", nl: "De Hemel" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Pluto is named after the Roman god of the Underworld (equivalent to Greek Hades). An 11-year-old British girl, Venetia Burney, suggested the name in 1930, finding it fitting for such a distant, dark world. The name also maintained the tradition of naming planets after Roman deities.",
          es: "Plutón lleva el nombre del dios romano del Inframundo (equivalente al Hades griego). Una niña británica de 11 años, Venetia Burney, sugirió el nombre en 1930, encontrándolo apropiado para un mundo tan distante y oscuro. El nombre también mantuvo la tradición de nombrar planetas según deidades romanas.",
          de: "Pluto ist nach dem römischen Gott der Unterwelt benannt (entspricht dem griechischen Hades). Ein 11-jähriges britisches Mädchen, Venetia Burney, schlug den Namen 1930 vor und fand ihn passend für eine so ferne, dunkle Welt. Der Name bewahrte auch die Tradition, Planeten nach römischen Gottheiten zu benennen.",
          nl: "Pluto is vernoemd naar de Romeinse god van de Onderwereld (equivalent aan de Griekse Hades). Een 11-jarig Brits meisje, Venetia Burney, stelde de naam in 1930 voor en vond het passend voor zo'n verre, donkere wereld. De naam behield ook de traditie om planeten te vernoemen naar Romeinse goden."
        }
      }
    ],

    // Day 19 - February 19th: Japanese American Internment Order
    day19: [
      {
        question: {
          en: "On February 19, 1942, which U.S. President signed Executive Order 9066?",
          es: "El 19 de febrero de 1942, ¿qué presidente de EE.UU. firmó la Orden Ejecutiva 9066?",
          de: "Welcher US-Präsident unterzeichnete am 19. Februar 1942 die Executive Order 9066?",
          nl: "Welke Amerikaanse president tekende op 19 februari 1942 de Executive Order 9066?"
        },
        options: [
          { en: "Herbert Hoover", es: "Herbert Hoover", de: "Herbert Hoover", nl: "Herbert Hoover" },
          { en: "Franklin D. Roosevelt", es: "Franklin D. Roosevelt", de: "Franklin D. Roosevelt", nl: "Franklin D. Roosevelt" },
          { en: "Harry Truman", es: "Harry Truman", de: "Harry Truman", nl: "Harry Truman" },
          { en: "Dwight Eisenhower", es: "Dwight Eisenhower", de: "Dwight Eisenhower", nl: "Dwight Eisenhower" }
        ],
        correctIndex: 1,
        explanation: {
          en: "President Franklin D. Roosevelt signed Executive Order 9066 on February 19, 1942, two months after the Pearl Harbor attack. This controversial wartime measure authorized military commanders to exclude persons from designated areas, leading to one of the darkest chapters in American civil liberties history.",
          es: "El presidente Franklin D. Roosevelt firmó la Orden Ejecutiva 9066 el 19 de febrero de 1942, dos meses después del ataque a Pearl Harbor. Esta controvertida medida en tiempos de guerra autorizó a los comandantes militares a excluir personas de áreas designadas, llevando a uno de los capítulos más oscuros en la historia de las libertades civiles estadounidenses.",
          de: "Präsident Franklin D. Roosevelt unterzeichnete am 19. Februar 1942, zwei Monate nach dem Angriff auf Pearl Harbor, die Executive Order 9066. Diese umstrittene Kriegsmaßnahme ermächtigte Militärkommandeure, Personen aus bestimmten Gebieten auszuschließen, was zu einem der dunkelsten Kapitel in der Geschichte der amerikanischen Bürgerrechte führte.",
          nl: "President Franklin D. Roosevelt tekende Executive Order 9066 op 19 februari 1942, twee maanden na de aanval op Pearl Harbor. Deze controversiële oorlogsmaatregel gaf militaire commandanten toestemming om personen uit aangewezen gebieden te weren, wat leidde tot een van de donkerste hoofdstukken in de Amerikaanse burgerrechtengeschiedenis."
        }
      },
      {
        question: {
          en: "Executive Order 9066 authorized the internment of which group during World War II?",
          es: "La Orden Ejecutiva 9066 autorizó el internamiento de qué grupo durante la Segunda Guerra Mundial?",
          de: "Die Executive Order 9066 genehmigte die Internierung welcher Gruppe während des Zweiten Weltkriegs?",
          nl: "Executive Order 9066 gaf toestemming voor de internering van welke groep tijdens de Tweede Wereldoorlog?"
        },
        options: [
          { en: "Chinese Americans", es: "Estadounidenses de origen chino", de: "Chinesisch-Amerikaner", nl: "Chinese Amerikanen" },
          { en: "German Americans", es: "Estadounidenses de origen alemán", de: "Deutsch-Amerikaner", nl: "Duitse Amerikanen" },
          { en: "Japanese Americans", es: "Estadounidenses de origen japonés", de: "Japanisch-Amerikaner", nl: "Japanse Amerikanen" },
          { en: "Italian Americans", es: "Estadounidenses de origen italiano", de: "Italo-Amerikaner", nl: "Italiaanse Amerikanen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Executive Order 9066 primarily targeted Japanese Americans for forced relocation and incarceration, though it also affected some German and Italian Americans. Driven by wartime hysteria, racism, and unfounded security concerns, this order led to the unjust detention of over 120,000 people, most of whom were American citizens.",
          es: "La Orden Ejecutiva 9066 se dirigió principalmente a los estadounidenses de origen japonés para la reubicación forzada y encarcelamiento, aunque también afectó a algunos estadounidenses de origen alemán e italiano. Impulsada por la histeria de guerra, el racismo y preocupaciones de seguridad infundadas, esta orden condujo a la detención injusta de más de 120,000 personas, la mayoría ciudadanos estadounidenses.",
          de: "Die Executive Order 9066 zielte hauptsächlich auf Japanisch-Amerikaner zur Zwangsumsiedlung und Inhaftierung ab, obwohl sie auch einige Deutsch-Amerikaner und Italo-Amerikaner betraf. Angetrieben von Kriegshysterie, Rassismus und unbegründeten Sicherheitsbedenken führte diese Anordnung zur ungerechten Inhaftierung von über 120.000 Menschen, von denen die meisten amerikanische Staatsbürger waren.",
          nl: "Executive Order 9066 richtte zich voornamelijk op Japanse Amerikanen voor gedwongen verplaatsing en opsluiting, hoewel het ook sommige Duitse en Italiaanse Amerikanen trof. Gedreven door oorlogshysterie, racisme en ongegronde veiligheidszorgen, leidde dit bevel tot de onrechtvaardige detentie van meer dan 120.000 mensen, waarvan de meesten Amerikaanse burgers waren."
        }
      },
      {
        question: {
          en: "Approximately how many Japanese Americans were forcibly relocated to internment camps?",
          es: "¿Aproximadamente cuántos estadounidenses de origen japonés fueron reubicados a la fuerza en campos de internamiento?",
          de: "Ungefähr wie viele Japanisch-Amerikaner wurden zwangsweise in Internierungslager umgesiedelt?",
          nl: "Ongeveer hoeveel Japanse Amerikanen werden gedwongen verplaatst naar interneringskampen?"
        },
        options: [
          { en: "80,000", es: "80,000", de: "80.000", nl: "80.000" },
          { en: "200,000", es: "200,000", de: "200.000", nl: "200.000" },
          { en: "50,000", es: "50,000", de: "50.000", nl: "50.000" },
          { en: "120,000", es: "120,000", de: "120.000", nl: "120.000" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Approximately 120,000 Japanese Americans, including men, women, and children, were forcibly relocated to internment camps during World War II. About two-thirds were U.S. citizens, and many lost their homes, businesses, and possessions. Families were given little notice and could only bring what they could carry.",
          es: "Aproximadamente 120,000 estadounidenses de origen japonés, incluyendo hombres, mujeres y niños, fueron reubicados por la fuerza a campos de internamiento durante la Segunda Guerra Mundial. Alrededor de dos tercios eran ciudadanos estadounidenses, y muchos perdieron sus hogares, negocios y posesiones. Las familias recibieron poco aviso y solo podían llevar lo que podían cargar.",
          de: "Ungefähr 120.000 Japanisch-Amerikaner, einschließlich Männer, Frauen und Kinder, wurden während des Zweiten Weltkriegs zwangsweise in Internierungslager umgesiedelt. Etwa zwei Drittel waren US-Bürger, und viele verloren ihre Häuser, Geschäfte und Besitztümer. Familien erhielten nur wenig Vorwarnung und konnten nur das mitnehmen, was sie tragen konnten.",
          nl: "Ongeveer 120.000 Japanse Amerikanen, waaronder mannen, vrouwen en kinderen, werden tijdens de Tweede Wereldoorlog gedwongen verplaatst naar interneringskampen. Ongeveer tweederde waren Amerikaanse burgers, en velen verloren hun huizen, bedrijven en bezittingen. Families kregen weinig waarschuwing en konden alleen meenemen wat ze konden dragen."
        }
      },
      {
        question: {
          en: "In what year did President Reagan formally apologize and sign the Civil Liberties Act providing reparations?",
          es: "¿En qué año el presidente Reagan se disculpó formalmente y firmó la Ley de Libertades Civiles que otorga reparaciones?",
          de: "In welchem Jahr entschuldigte sich Präsident Reagan formell und unterzeichnete das Civil Liberties Act mit Reparationen?",
          nl: "In welk jaar verontschuldigde president Reagan zich formeel en tekende hij de Civil Liberties Act met herstelbetalingen?"
        },
        options: [
          { en: "1995", es: "1995", de: "1995", nl: "1995" },
          { en: "1975", es: "1975", de: "1975", nl: "1975" },
          { en: "1988", es: "1988", de: "1988", nl: "1988" },
          { en: "1980", es: "1980", de: "1980", nl: "1980" }
        ],
        correctIndex: 2,
        explanation: {
          en: "In 1988, President Ronald Reagan signed the Civil Liberties Act, formally apologizing for the internment and providing $20,000 in reparations to each surviving internee. This acknowledgment came 46 years after the injustice, recognizing that the internment was based on racial prejudice, war hysteria, and failed political leadership.",
          es: "En 1988, el presidente Ronald Reagan firmó la Ley de Libertades Civiles, disculpándose formalmente por el internamiento y proporcionando $20,000 en reparaciones a cada internado sobreviviente. Este reconocimiento llegó 46 años después de la injusticia, reconociendo que el internamiento se basó en prejuicios raciales, histeria de guerra y liderazgo político fallido.",
          de: "Im Jahr 1988 unterzeichnete Präsident Ronald Reagan das Civil Liberties Act, entschuldigte sich formell für die Internierung und stellte jedem überlebenden Internierten 20.000 Dollar Wiedergutmachung zur Verfügung. Diese Anerkennung kam 46 Jahre nach der Ungerechtigkeit und erkannte an, dass die Internierung auf rassistischen Vorurteilen, Kriegshysterie und gescheiterter politischer Führung beruhte.",
          nl: "In 1988 tekende president Ronald Reagan de Civil Liberties Act, waarbij hij zich formeel verontschuldigde voor de internering en $20.000 aan herstelbetalingen verstrekte aan elke overlevende geïnterneerde. Deze erkenning kwam 46 jaar na het onrecht, waarbij werd erkend dat de internering gebaseerd was op rassenvooroordelen, oorlogshysterie en falend politiek leiderschap."
        }
      },
      {
        question: {
          en: "What were the Japanese American internment camps officially called?",
          es: "¿Cómo se llamaban oficialmente los campos de internamiento de estadounidenses de origen japonés?",
          de: "Wie wurden die Internierungslager für Japanisch-Amerikaner offiziell genannt?",
          nl: "Hoe werden de Japanse Amerikaanse interneringskampen officieel genoemd?"
        },
        options: [
          { en: "Detention Camps", es: "Campos de Detención", de: "Haftzentren", nl: "Detentiekampen" },
          { en: "Concentration Camps", es: "Campos de Concentración", de: "Konzentrationslager", nl: "Concentratiekampen" },
          { en: "Relocation Centers", es: "Centros de Reubicación", de: "Umsiedlungszentren", nl: "Relocatiecentra" },
          { en: "Prison Camps", es: "Campos de Prisión", de: "Gefangenenlager", nl: "Gevangeniskampen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The government euphemistically called them 'Relocation Centers' to downplay their true nature as incarceration facilities. These camps were surrounded by barbed wire and guard towers, located in remote, harsh environments. Today, historians and survivors more accurately describe them as concentration camps or internment camps.",
          es: "El gobierno eufemísticamente los llamó 'Centros de Reubicación' para minimizar su verdadera naturaleza como instalaciones de encarcelamiento. Estos campos estaban rodeados de alambre de púas y torres de vigilancia, ubicados en entornos remotos y duros. Hoy, los historiadores y supervivientes los describen más exactamente como campos de concentración o campos de internamiento.",
          de: "Die Regierung nannte sie euphemistisch 'Umsiedlungszentren', um ihre wahre Natur als Haftzentren herunterzuspielen. Diese Lager waren von Stacheldraht und Wachtürmen umgeben und befanden sich in abgelegenen, harten Umgebungen. Heute beschreiben Historiker und Überlebende sie genauer als Konzentrationslager oder Internierungslager.",
          nl: "De regering noemde ze eufemistisch 'Relocatiecentra' om hun ware aard als opsluitsvoorzieningen te bagatelliseren. Deze kampen waren omringd door prikkeldraad en wachttorens, gelegen in afgelegen, harde omgevingen. Tegenwoordig beschrijven historici en overlevenden ze nauwkeuriger als concentratiekampen of interneringskampen."
        }
      }
    ],

    // Day 20 - February 20th: John Glenn Orbits Earth
    day20: [
      {
        question: {
          en: "On February 20, 1962, which American astronaut became the first to orbit Earth?",
          es: "El 20 de febrero de 1962, ¿qué astronauta estadounidense fue el primero en orbitar la Tierra?",
          de: "Welcher amerikanische Astronaut umkreiste am 20. Februar 1962 als erster die Erde?",
          nl: "Welke Amerikaanse astronaut was op 20 februari 1962 de eerste die de aarde omcirkelde?"
        },
        options: [
          { en: "Neil Armstrong", es: "Neil Armstrong", de: "Neil Armstrong", nl: "Neil Armstrong" },
          { en: "John Glenn", es: "John Glenn", de: "John Glenn", nl: "John Glenn" },
          { en: "Alan Shepard", es: "Alan Shepard", de: "Alan Shepard", nl: "Alan Shepard" },
          { en: "Buzz Aldrin", es: "Buzz Aldrin", de: "Buzz Aldrin", nl: "Buzz Aldrin" }
        ],
        correctIndex: 1,
        explanation: {
          en: "John Glenn became the first American to orbit Earth on February 20, 1962, aboard Friendship 7. This achievement made him a national hero during the Space Race and helped the United States catch up with the Soviet Union in space exploration. Glenn later served as a U.S. Senator for 24 years.",
          es: "John Glenn se convirtió en el primer estadounidense en orbitar la Tierra el 20 de febrero de 1962, a bordo del Friendship 7. Este logro lo convirtió en un héroe nacional durante la Carrera Espacial y ayudó a Estados Unidos a ponerse al día con la Unión Soviética en exploración espacial. Glenn luego sirvió como senador de EE.UU. durante 24 años.",
          de: "John Glenn wurde am 20. Februar 1962 an Bord von Friendship 7 der erste Amerikaner, der die Erde umkreiste. Diese Leistung machte ihn während des Weltraumrennens zum Nationalhelden und half den Vereinigten Staaten, mit der Sowjetunion in der Weltraumforschung gleichzuziehen. Glenn diente später 24 Jahre lang als US-Senator.",
          nl: "John Glenn werd op 20 februari 1962 aan boord van Friendship 7 de eerste Amerikaan die de aarde omcirkelde. Deze prestatie maakte hem tot een nationale held tijdens de Space Race en hielp de Verenigde Staten de Sovjet-Unie in te halen in ruimteverkenning. Glenn diende later 24 jaar als Amerikaanse senator."
        }
      },
      {
        question: {
          en: "What was the name of John Glenn's spacecraft during his historic orbit?",
          es: "¿Cómo se llamaba la nave espacial de John Glenn durante su órbita histórica?",
          de: "Wie hieß John Glenns Raumschiff während seines historischen Orbits?",
          nl: "Wat was de naam van John Glenn's ruimtevaartuig tijdens zijn historische omwenteling?"
        },
        options: [
          { en: "Freedom 7", es: "Freedom 7", de: "Freedom 7", nl: "Freedom 7" },
          { en: "Mercury 3", es: "Mercury 3", de: "Mercury 3", nl: "Mercury 3" },
          { en: "Friendship 7", es: "Friendship 7", de: "Friendship 7", nl: "Friendship 7" },
          { en: "Apollo 11", es: "Apollo 11", de: "Apollo 11", nl: "Apollo 11" }
        ],
        correctIndex: 2,
        explanation: {
          en: "John Glenn's spacecraft was named Friendship 7, part of NASA's Mercury program. The name reflected the American spirit of cooperation and optimism during the Cold War era. The mission lasted approximately 4 hours and 55 minutes, carrying Glenn to become an American icon and space pioneer.",
          es: "La nave espacial de John Glenn se llamaba Friendship 7, parte del programa Mercury de la NASA. El nombre reflejaba el espíritu estadounidense de cooperación y optimismo durante la era de la Guerra Fría. La misión duró aproximadamente 4 horas y 55 minutos, llevando a Glenn a convertirse en un ícono estadounidense y pionero espacial.",
          de: "John Glenns Raumschiff hieß Friendship 7, Teil von NASAs Mercury-Programm. Der Name spiegelte den amerikanischen Geist der Zusammenarbeit und des Optimismus während der Ära des Kalten Krieges wider. Die Mission dauerte etwa 4 Stunden und 55 Minuten und machte Glenn zu einer amerikanischen Ikone und Weltraumpionier.",
          nl: "John Glenn's ruimtevaartuig heette Friendship 7, onderdeel van NASA's Mercury-programma. De naam weerspiegelde de Amerikaanse geest van samenwerking en optimisme tijdens het Koude Oorlog-tijdperk. De missie duurde ongeveer 4 uur en 55 minuten, waardoor Glenn een Amerikaans icoon en ruimtepionier werd."
        }
      },
      {
        question: {
          en: "How many times did John Glenn orbit the Earth on his historic flight?",
          es: "¿Cuántas veces orbitó John Glenn la Tierra en su vuelo histórico?",
          de: "Wie oft umkreiste John Glenn bei seinem historischen Flug die Erde?",
          nl: "Hoe vaak omcirkelde John Glenn de aarde tijdens zijn historische vlucht?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correctIndex: 1,
        explanation: {
          en: "John Glenn completed three orbits around Earth during his historic mission, circling the planet at speeds of approximately 17,500 miles per hour. Each orbit took about 90 minutes to complete, allowing Glenn to witness multiple sunrises and sunsets while conducting experiments and testing spacecraft systems.",
          es: "John Glenn completó tres órbitas alrededor de la Tierra durante su misión histórica, circulando el planeta a velocidades de aproximadamente 17,500 millas por hora. Cada órbita tomó alrededor de 90 minutos para completarse, permitiendo a Glenn presenciar múltiples amaneceres y atardeceres mientras realizaba experimentos y probaba sistemas de la nave espacial.",
          de: "John Glenn vollendete drei Erdumrundungen während seiner historischen Mission und umkreiste den Planeten mit Geschwindigkeiten von etwa 17.500 Meilen pro Stunde. Jede Umlaufbahn dauerte etwa 90 Minuten, was es Glenn ermöglichte, mehrere Sonnenaufgänge und Sonnenuntergänge zu erleben, während er Experimente durchführte und Raumfahrzeugsysteme testete.",
          nl: "John Glenn voltooide drie omwentelingen rond de aarde tijdens zijn historische missie, waarbij hij de planeet omcirkelde met snelheden van ongeveer 17.500 mijl per uur. Elke omwenteling duurde ongeveer 90 minuten, waardoor Glenn meerdere zonsopgangen en zonsondergangen kon aanschouwen terwijl hij experimenten uitvoerde en ruimtevaartuigsystemen testte."
        }
      },
      {
        question: {
          en: "At what age did John Glenn return to space in 1998, becoming the oldest person to fly in space?",
          es: "¿A qué edad John Glenn regresó al espacio en 1998, convirtiéndose en la persona más vieja en volar al espacio?",
          de: "In welchem Alter kehrte John Glenn 1998 ins All zurück und wurde die älteste Person im Weltraum?",
          nl: "Op welke leeftijd keerde John Glenn in 1998 terug naar de ruimte en werd hij de oudste persoon die in de ruimte vloog?"
        },
        options: [
          { en: "77 years old", es: "77 años", de: "77 Jahre alt", nl: "77 jaar oud" },
          { en: "80 years old", es: "80 años", de: "80 Jahre alt", nl: "80 jaar oud" },
          { en: "65 years old", es: "65 años", de: "65 Jahre alt", nl: "65 jaar oud" },
          { en: "70 years old", es: "70 años", de: "70 Jahre alt", nl: "70 jaar oud" }
        ],
        correctIndex: 0,
        explanation: {
          en: "At age 77, John Glenn returned to space aboard the Space Shuttle Discovery in 1998, becoming the oldest person ever to fly in space. This nine-day mission allowed scientists to study the effects of space travel on aging, while Glenn proved that age is no barrier to exploration and achievement.",
          es: "A los 77 años, John Glenn regresó al espacio a bordo del transbordador espacial Discovery en 1998, convirtiéndose en la persona más vieja en volar al espacio. Esta misión de nueve días permitió a los científicos estudiar los efectos del viaje espacial en el envejecimiento, mientras Glenn demostró que la edad no es una barrera para la exploración y el logro.",
          de: "Im Alter von 77 Jahren kehrte John Glenn 1998 an Bord des Space Shuttle Discovery ins All zurück und wurde die älteste Person, die je im Weltraum flog. Diese neuntägige Mission ermöglichte es Wissenschaftlern, die Auswirkungen von Weltraumreisen auf das Altern zu untersuchen, während Glenn bewies, dass Alter kein Hindernis für Erkundung und Leistung ist.",
          nl: "Op 77-jarige leeftijd keerde John Glenn terug naar de ruimte aan boord van de Space Shuttle Discovery in 1998, en werd daarmee de oudste persoon ooit die in de ruimte vloog. Deze negendaagse missie stelde wetenschappers in staat de effecten van ruimtereizen op veroudering te bestuderen, terwijl Glenn bewees dat leeftijd geen belemmering is voor verkenning en prestatie."
        }
      },
      {
        question: {
          en: "What NASA program was John Glenn part of when he first orbited Earth?",
          es: "¿De qué programa de la NASA formaba parte John Glenn cuando orbitó la Tierra por primera vez?",
          de: "Zu welchem NASA-Programm gehörte John Glenn, als er zum ersten Mal die Erde umkreiste?",
          nl: "Van welk NASA-programma maakte John Glenn deel uit toen hij voor het eerst de aarde omcirkelde?"
        },
        options: [
          { en: "Apollo Program", es: "Programa Apollo", de: "Apollo-Programm", nl: "Apollo Programma" },
          { en: "Space Shuttle Program", es: "Programa del Transbordador Espacial", de: "Space Shuttle-Programm", nl: "Space Shuttle Programma" },
          { en: "Project Mercury", es: "Proyecto Mercury", de: "Projekt Mercury", nl: "Project Mercury" },
          { en: "Gemini Program", es: "Programa Gemini", de: "Gemini-Programm", nl: "Gemini Programma" }
        ],
        correctIndex: 2,
        explanation: {
          en: "John Glenn was part of Project Mercury, NASA's first human spaceflight program that ran from 1958 to 1963. The program aimed to put an American in orbit before the Soviet Union and laid the groundwork for subsequent Gemini and Apollo programs that would eventually land humans on the Moon.",
          es: "John Glenn fue parte del Proyecto Mercury, el primer programa de vuelos espaciales tripulados de la NASA que se ejecutó de 1958 a 1963. El programa tenía como objetivo poner a un estadounidense en órbita antes que la Unión Soviética y sentó las bases para los posteriores programas Gemini y Apollo que eventualmente llevarían humanos a la Luna.",
          de: "John Glenn war Teil von Projekt Mercury, NASAs erstem bemannten Raumflugprogramm, das von 1958 bis 1963 lief. Das Programm zielte darauf ab, einen Amerikaner vor der Sowjetunion in eine Umlaufbahn zu bringen, und legte den Grundstein für die nachfolgenden Gemini- und Apollo-Programme, die schließlich Menschen auf den Mond bringen sollten.",
          nl: "John Glenn maakte deel uit van Project Mercury, NASA's eerste bemande ruimtevaartprogramma dat liep van 1958 tot 1963. Het programma had als doel een Amerikaan in een baan om de aarde te brengen vóór de Sovjet-Unie en legde de basis voor de daaropvolgende Gemini- en Apollo-programma's die uiteindelijk mensen op de maan zouden brengen."
        }
      }
    ],

    // Day 21 - February 21st: Malcolm X Assassination & Nixon Visits China
    day21: [
      {
        question: {
          en: "Which civil rights leader was assassinated on February 21, 1965?",
          es: "¿Qué líder de derechos civiles fue asesinado el 21 de febrero de 1965?",
          de: "Welcher Bürgerrechtler wurde am 21. Februar 1965 ermordet?",
          nl: "Welke burgerrechtenleider werd vermoord op 21 februari 1965?"
        },
        options: [
          { en: "Martin Luther King Jr.", es: "Martin Luther King Jr.", de: "Martin Luther King Jr.", nl: "Martin Luther King Jr." },
          { en: "Medgar Evers", es: "Medgar Evers", de: "Medgar Evers", nl: "Medgar Evers" },
          { en: "Fred Hampton", es: "Fred Hampton", de: "Fred Hampton", nl: "Fred Hampton" },
          { en: "Malcolm X", es: "Malcolm X", de: "Malcolm X", nl: "Malcolm X" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Malcolm X was assassinated at the Audubon Ballroom in Harlem while preparing to speak at a rally. He was a prominent figure in the civil rights movement and had become a controversial voice for Black empowerment.",
          es: "Malcolm X fue asesinado en el Audubon Ballroom de Harlem mientras se preparaba para hablar en un mitin. Fue una figura prominente en el movimiento de derechos civiles y se había convertido en una voz controvertida para el empoderamiento negro.",
          de: "Malcolm X wurde im Audubon Ballroom in Harlem ermordet, als er sich darauf vorbereitete, bei einer Kundgebung zu sprechen. Er war eine prominente Figur in der Bürgerrechtsbewegung und hatte sich zu einer kontroversen Stimme für die Stärkung der schwarzen Bevölkerung entwickelt.",
          nl: "Malcolm X werd vermoord in de Audubon Ballroom in Harlem terwijl hij zich voorbereidde om op een bijeenkomst te spreken. Hij was een prominente figuur in de burgerrechtenbeweging en was een controversiële stem geworden voor de empowerment van zwarten."
        }
      },
      {
        question: {
          en: "In which city was Malcolm X assassinated in 1965?",
          es: "¿En qué ciudad fue asesinado Malcolm X en 1965?",
          de: "In welcher Stadt wurde Malcolm X 1965 ermordet?",
          nl: "In welke stad werd Malcolm X vermoord in 1965?"
        },
        options: [
          { en: "New York City", es: "Nueva York", de: "New York City", nl: "New York City" },
          { en: "Washington D.C.", es: "Washington D.C.", de: "Washington D.C.", nl: "Washington D.C." },
          { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" },
          { en: "Detroit", es: "Detroit", de: "Detroit", nl: "Detroit" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The assassination took place in Manhattan's Washington Heights neighborhood at the Audubon Ballroom. Three members of the Nation of Islam were convicted of the murder, though questions about the case persist.",
          es: "El asesinato tuvo lugar en el barrio Washington Heights de Manhattan en el Audubon Ballroom. Tres miembros de la Nación del Islam fueron condenados por el asesinato, aunque persisten dudas sobre el caso.",
          de: "Die Ermordung fand im Washington Heights-Viertel Manhattans im Audubon Ballroom statt. Drei Mitglieder der Nation of Islam wurden wegen des Mordes verurteilt, obwohl Fragen zu dem Fall bestehen bleiben.",
          nl: "De moord vond plaats in Manhattan's Washington Heights wijk in de Audubon Ballroom. Drie leden van de Nation of Islam werden veroordeeld voor de moord, hoewel er vragen over de zaak blijven bestaan."
        }
      },
      {
        question: {
          en: "Which U.S. President made a historic visit to China on February 21, 1972?",
          es: "¿Qué presidente de EE.UU. hizo una visita histórica a China el 21 de febrero de 1972?",
          de: "Welcher US-Präsident machte am 21. Februar 1972 einen historischen Besuch in China?",
          nl: "Welke Amerikaanse president bracht een historisch bezoek aan China op 21 februari 1972?"
        },
        options: [
          { en: "Richard Nixon", es: "Richard Nixon", de: "Richard Nixon", nl: "Richard Nixon" },
          { en: "Gerald Ford", es: "Gerald Ford", de: "Gerald Ford", nl: "Gerald Ford" },
          { en: "Jimmy Carter", es: "Jimmy Carter", de: "Jimmy Carter", nl: "Jimmy Carter" },
          { en: "Lyndon Johnson", es: "Lyndon Johnson", de: "Lyndon Johnson", nl: "Lyndon Johnson" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nixon's week-long visit marked a dramatic shift in Cold War diplomacy. This breakthrough moment ended decades of isolation between the United States and the People's Republic of China.",
          es: "La visita de una semana de Nixon marcó un cambio dramático en la diplomacia de la Guerra Fría. Este momento revolucionario puso fin a décadas de aislamiento entre Estados Unidos y la República Popular China.",
          de: "Nixons einwöchiger Besuch markierte einen dramatischen Wandel in der Diplomatie des Kalten Krieges. Dieser Durchbruch beendete jahrzehntelange Isolation zwischen den Vereinigten Staaten und der Volksrepublik China.",
          nl: "Nixon's weekenlange bezoek markeerde een dramatische verschuiving in de Koude Oorlog diplomatie. Dit doorbraakmoment beëindigde decennia van isolatie tussen de Verenigde Staten en de Volksrepubliek China."
        }
      },
      {
        question: {
          en: "What was the significance of Nixon's 1972 visit to China?",
          es: "¿Cuál fue la importancia de la visita de Nixon a China en 1972?",
          de: "Was war die Bedeutung von Nixons Besuch in China im Jahr 1972?",
          nl: "Wat was de betekenis van Nixon's bezoek aan China in 1972?"
        },
        options: [
          { en: "Opened diplomatic relations between US and China", es: "Abrió relaciones diplomáticas entre EE.UU. y China", de: "Öffnete diplomatische Beziehungen zwischen USA und China", nl: "Opende diplomatieke betrekkingen tussen de VS en China" },
          { en: "Ended the Vietnam War", es: "Terminó la Guerra de Vietnam", de: "Beendete den Vietnamkrieg", nl: "Beëindigde de Vietnamoorlog" },
          { en: "Started the Space Race", es: "Inició la Carrera Espacial", de: "Begann das Weltraumrennen", nl: "Startte de ruimterace" },
          { en: "Formed NATO", es: "Formó la OTAN", de: "Gründete die NATO", nl: "Vormde de NAVO" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The visit led to the Shanghai Communique and normalized relations between the two superpowers. It fundamentally reshaped global politics by creating a strategic opening that isolated the Soviet Union.",
          es: "La visita condujo al Comunicado de Shanghai y normalizó las relaciones entre las dos superpotencias. Remodeló fundamentalmente la política global al crear una apertura estratégica que aisló a la Unión Soviética.",
          de: "Der Besuch führte zum Shanghai-Kommuniqué und normalisierte die Beziehungen zwischen den beiden Supermächten. Es gestaltete die Weltpolitik grundlegend um, indem es eine strategische Öffnung schuf, die die Sowjetunion isolierte.",
          nl: "Het bezoek leidde tot het Shanghai Communique en normaliseerde de betrekkingen tussen de twee supermachten. Het vormde de wereldpolitiek fundamenteel om door een strategische opening te creëren die de Sovjet-Unie isoleerde."
        }
      },
      {
        question: {
          en: "Which organization was Malcolm X a prominent member and spokesperson for?",
          es: "¿De qué organización fue Malcolm X un miembro prominente y portavoz?",
          de: "Für welche Organisation war Malcolm X ein prominentes Mitglied und Sprecher?",
          nl: "Van welke organisatie was Malcolm X een prominent lid en woordvoerder?"
        },
        options: [
          { en: "Black Panthers", es: "Panteras Negras", de: "Black Panthers", nl: "Black Panthers" },
          { en: "Nation of Islam", es: "Nación del Islam", de: "Nation of Islam", nl: "Nation of Islam" },
          { en: "SCLC", es: "SCLC", de: "SCLC", nl: "SCLC" },
          { en: "NAACP", es: "NAACP", de: "NAACP", nl: "NAACP" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Malcolm X served as the public face of the Nation of Islam for over a decade, helping grow its membership dramatically. He later broke from the organization in 1964 after ideological differences with its leader, Elijah Muhammad.",
          es: "Malcolm X sirvió como la cara pública de la Nación del Islam durante más de una década, ayudando a aumentar dramáticamente su membresía. Más tarde se separó de la organización en 1964 después de diferencias ideológicas con su líder, Elijah Muhammad.",
          de: "Malcolm X diente über ein Jahrzehnt als öffentliches Gesicht der Nation of Islam und half, deren Mitgliederzahl dramatisch zu steigern. Er trennte sich 1964 von der Organisation nach ideologischen Differenzen mit ihrem Führer Elijah Muhammad.",
          nl: "Malcolm X diende meer dan een decennium als het publieke gezicht van de Nation of Islam en hielp het ledental dramatisch te laten groeien. Hij brak later in 1964 met de organisatie na ideologische verschillen met haar leider, Elijah Muhammad."
        }
      }
    ],

    // Day 22 - February 22nd: George Washington's Birthday
    day22: [
      {
        question: {
          en: "Which U.S. President was born on February 22, 1732?",
          es: "¿Qué presidente de EE.UU. nació el 22 de febrero de 1732?",
          de: "Welcher US-Präsident wurde am 22. Februar 1732 geboren?",
          nl: "Welke Amerikaanse president werd geboren op 22 februari 1732?"
        },
        options: [
          { en: "Abraham Lincoln", es: "Abraham Lincoln", de: "Abraham Lincoln", nl: "Abraham Lincoln" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" },
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" }
        ],
        correctIndex: 3,
        explanation: {
          en: "George Washington became the first President of the United States and is celebrated as the 'Father of His Country'. His birthday is commemorated as Presidents' Day in the United States.",
          es: "George Washington se convirtió en el primer presidente de Estados Unidos y es celebrado como el 'Padre de su País'. Su cumpleaños se conmemora como el Día de los Presidentes en Estados Unidos.",
          de: "George Washington wurde der erste Präsident der Vereinigten Staaten und wird als 'Vater seines Landes' gefeiert. Sein Geburtstag wird in den Vereinigten Staaten als Presidents' Day begangen.",
          nl: "George Washington werd de eerste president van de Verenigde Staten en wordt gevierd als de 'Vader van zijn Land'. Zijn verjaardag wordt in de Verenigde Staten herdacht als Presidents' Day."
        }
      },
      {
        question: {
          en: "George Washington was the commander of which army during the American Revolution?",
          es: "George Washington fue comandante de qué ejército durante la Revolución Americana?",
          de: "George Washington war Kommandeur welcher Armee während der Amerikanischen Revolution?",
          nl: "George Washington was commandant van welk leger tijdens de Amerikaanse Revolutie?"
        },
        options: [
          { en: "Colonial Militia", es: "Milicia Colonial", de: "Kolonialmiliz", nl: "Koloniale Militie" },
          { en: "French Army", es: "Ejército Francés", de: "Französische Armee", nl: "Franse Leger" },
          { en: "British Army", es: "Ejército Británico", de: "Britische Armee", nl: "Britse Leger" },
          { en: "Continental Army", es: "Ejército Continental", de: "Kontinentalarmee", nl: "Continentaal Leger" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Washington led the Continental Army from 1775 to 1783, enduring harsh winters and numerous setbacks. His leadership during the Revolutionary War earned him legendary status and paved his path to the presidency.",
          es: "Washington dirigió el Ejército Continental de 1775 a 1783, soportando inviernos duros y numerosos reveses. Su liderazgo durante la Guerra Revolucionaria le valió un estatus legendario y allanó su camino a la presidencia.",
          de: "Washington führte die Kontinentalarmee von 1775 bis 1783 und ertrug harte Winter und zahlreiche Rückschläge. Seine Führung während des Unabhängigkeitskrieges brachte ihm legendären Status ein und ebnete seinen Weg zur Präsidentschaft.",
          nl: "Washington leidde het Continentale Leger van 1775 tot 1783, waarbij hij harde winters en talrijke tegenslagen doorstond. Zijn leiderschap tijdens de Revolutionaire Oorlog bracht hem legendarische status en effende zijn weg naar het presidentschap."
        }
      },
      {
        question: {
          en: "How many terms did George Washington serve as U.S. President?",
          es: "¿Cuántos mandatos cumplió George Washington como presidente de EE.UU.?",
          de: "Wie viele Amtszeiten diente George Washington als US-Präsident?",
          nl: "Hoeveel ambtstermijnen diende George Washington als Amerikaanse president?"
        },
        options: [
          { en: "1 term", es: "1 mandato", de: "1 Amtszeit", nl: "1 termijn" },
          { en: "4 terms", es: "4 mandatos", de: "4 Amtszeiten", nl: "4 termijnen" },
          { en: "3 terms", es: "3 mandatos", de: "3 Amtszeiten", nl: "3 termijnen" },
          { en: "2 terms", es: "2 mandatos", de: "2 Amtszeiten", nl: "2 termijnen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Washington served from 1789 to 1797 and voluntarily stepped down after two terms. This established a precedent that remained unbroken until Franklin D. Roosevelt, and was later codified in the 22nd Amendment.",
          es: "Washington sirvió de 1789 a 1797 y se retiró voluntariamente después de dos mandatos. Esto estableció un precedente que se mantuvo sin romper hasta Franklin D. Roosevelt, y más tarde se codificó en la 22ª Enmienda.",
          de: "Washington diente von 1789 bis 1797 und trat nach zwei Amtszeiten freiwillig zurück. Dies schuf einen Präzedenzfall, der bis Franklin D. Roosevelt ungebrochen blieb und später im 22. Verfassungszusatz kodifiziert wurde.",
          nl: "Washington diende van 1789 tot 1797 en trad vrijwillig terug na twee termijnen. Dit vestigde een precedent dat ongebroken bleef tot Franklin D. Roosevelt, en werd later gecodificeerd in het 22e Amendement."
        }
      },
      {
        question: {
          en: "What is George Washington's estate in Virginia called?",
          es: "¿Cómo se llama la propiedad de George Washington en Virginia?",
          de: "Wie heißt George Washingtons Anwesen in Virginia?",
          nl: "Hoe heet het landgoed van George Washington in Virginia?"
        },
        options: [
          { en: "Monticello", es: "Monticello", de: "Monticello", nl: "Monticello" },
          { en: "Montpelier", es: "Montpelier", de: "Montpelier", nl: "Montpelier" },
          { en: "The Hermitage", es: "The Hermitage", de: "The Hermitage", nl: "The Hermitage" },
          { en: "Mount Vernon", es: "Mount Vernon", de: "Mount Vernon", nl: "Mount Vernon" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Mount Vernon, located on the Potomac River, was Washington's beloved plantation home. Today it is a popular museum and historic site that preserves Washington's legacy and offers insights into 18th-century plantation life.",
          es: "Mount Vernon, ubicado en el río Potomac, fue la amada casa de plantación de Washington. Hoy es un popular museo y sitio histórico que preserva el legado de Washington y ofrece información sobre la vida de plantación del siglo XVIII.",
          de: "Mount Vernon, am Potomac River gelegen, war Washingtons geliebtes Plantagenhaus. Heute ist es ein beliebtes Museum und historische Stätte, die Washingtons Vermächtnis bewahrt und Einblicke in das Plantenleben des 18. Jahrhunderts bietet.",
          nl: "Mount Vernon, gelegen aan de Potomac rivier, was Washington's geliefde plantage. Vandaag is het een populair museum en historische locatie die Washington's erfenis bewaart en inzichten biedt in het 18e-eeuwse plantage leven."
        }
      },
      {
        question: {
          en: "What title is George Washington often given in American history?",
          es: "¿Qué título se le suele dar a George Washington en la historia estadounidense?",
          de: "Welchen Titel trägt George Washington oft in der amerikanischen Geschichte?",
          nl: "Welke titel krijgt George Washington vaak in de Amerikaanse geschiedenis?"
        },
        options: [
          { en: "Father of His Country", es: "Padre de su País", de: "Vater seines Landes", nl: "Vader van zijn Land" },
          { en: "The Rough Rider", es: "El Jinete Rudo", de: "Der Raue Reiter", nl: "De Ruwe Ruiter" },
          { en: "The Great Emancipator", es: "El Gran Emancipador", de: "Der große Befreier", nl: "De Grote Bevrijder" },
          { en: "Honest Abe", es: "Abe el Honesto", de: "Ehrlicher Abe", nl: "Eerlijke Abe" }
        ],
        correctIndex: 0,
        explanation: {
          en: "This honorary title reflects Washington's central role in founding the United States. His leadership in both war and peace established the framework for American democracy and set enduring precedents for future presidents.",
          es: "Este título honorífico refleja el papel central de Washington en la fundación de Estados Unidos. Su liderazgo tanto en la guerra como en la paz estableció el marco para la democracia estadounidense y sentó precedentes duraderos para futuros presidentes.",
          de: "Dieser Ehrentitel spiegelt Washingtons zentrale Rolle bei der Gründung der Vereinigten Staaten wider. Seine Führung sowohl im Krieg als auch im Frieden schuf den Rahmen für die amerikanische Demokratie und setzte bleibende Präzedenzfälle für zukünftige Präsidenten.",
          nl: "Deze eretitel weerspiegelt Washington's centrale rol in de oprichting van de Verenigde Staten. Zijn leiderschap in zowel oorlog als vrede vestigde het kader voor de Amerikaanse democratie en zette blijvende precedenten voor toekomstige presidenten."
        }
      }
    ],

    // Day 23 - February 23rd: Iwo Jima Flag Raising Photo
    day23: [
      {
        question: {
          en: "On February 23, 1945, U.S. Marines raised the American flag on which Pacific island during WWII?",
          es: "El 23 de febrero de 1945, los marines estadounidenses izaron la bandera estadounidense en qué isla del Pacífico durante la Segunda Guerra Mundial?",
          de: "Am 23. Februar 1945 hissten US-Marines die amerikanische Flagge auf welcher Pazifikinsel während des Zweiten Weltkriegs?",
          nl: "Op 23 februari 1945 hesen Amerikaanse Marines de Amerikaanse vlag op welk eiland in de Stille Oceaan tijdens WOII?"
        },
        options: [
          { en: "Midway", es: "Midway", de: "Midway", nl: "Midway" },
          { en: "Guadalcanal", es: "Guadalcanal", de: "Guadalcanal", nl: "Guadalcanal" },
          { en: "Iwo Jima", es: "Iwo Jima", de: "Iwo Jima", nl: "Iwo Jima" },
          { en: "Okinawa", es: "Okinawa", de: "Okinawa", nl: "Okinawa" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Battle of Iwo Jima was one of the bloodiest battles in the Pacific campaign. The island's strategic location made it crucial for the planned invasion of Japan, serving as a base for fighter escorts and emergency landings.",
          es: "La Batalla de Iwo Jima fue una de las batallas más sangrientas de la campaña del Pacífico. La ubicación estratégica de la isla la hizo crucial para la invasión planificada de Japón, sirviendo como base para escoltas de cazas y aterrizajes de emergencia.",
          de: "Die Schlacht um Iwo Jima war eine der blutigsten Schlachten der Pazifikkampagne. Die strategische Lage der Insel machte sie entscheidend für die geplante Invasion Japans und diente als Basis für Jägerbegleitung und Notlandungen.",
          nl: "De Slag om Iwo Jima was een van de bloedigste gevechten in de Pacifische campagne. De strategische ligging van het eiland maakte het cruciaal voor de geplande invasie van Japan, als basis voor jachtbegeleiding en noodlandingen."
        }
      },
      {
        question: {
          en: "Where was the flag raised on Iwo Jima in the famous photograph?",
          es: "¿Dónde se izó la bandera en Iwo Jima en la famosa fotografía?",
          de: "Wo wurde die Flagge auf Iwo Jima auf dem berühmten Foto gehisst?",
          nl: "Waar werd de vlag gehesen op Iwo Jima in de beroemde foto?"
        },
        options: [
          { en: "Mount Suribachi", es: "Monte Suribachi", de: "Berg Suribachi", nl: "Berg Suribachi" },
          { en: "Mount Everest", es: "Monte Everest", de: "Berg Everest", nl: "Berg Everest" },
          { en: "Mount Fuji", es: "Monte Fuji", de: "Berg Fuji", nl: "Berg Fuji" },
          { en: "Mount Vesuvius", es: "Monte Vesubio", de: "Berg Vesuv", nl: "Berg Vesuvius" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Mount Suribachi is a 169-meter volcanic cone at the southern tip of Iwo Jima. Capturing this high ground on the fifth day of battle was a significant tactical victory and morale boost for American forces.",
          es: "Monte Suribachi es un cono volcánico de 169 metros en el extremo sur de Iwo Jima. Capturar este terreno elevado en el quinto día de batalla fue una victoria táctica significativa y un impulso moral para las fuerzas estadounidenses.",
          de: "Mount Suribachi ist ein 169 Meter hoher Vulkankegel an der Südspitze von Iwo Jima. Die Eroberung dieser Anhöhe am fünften Tag der Schlacht war ein bedeutender taktischer Sieg und Moralboost für die amerikanischen Streitkräfte.",
          nl: "Mount Suribachi is een 169 meter hoge vulkanische kegel aan de zuidpunt van Iwo Jima. Het veroveren van deze hooggelegen grond op de vijfde dag van de strijd was een belangrijke tactische overwinning en morele boost voor de Amerikaanse strijdkrachten."
        }
      },
      {
        question: {
          en: "Who took the famous photograph 'Raising the Flag on Iwo Jima'?",
          es: "¿Quién tomó la famosa fotografía 'Izando la bandera en Iwo Jima'?",
          de: "Wer machte das berühmte Foto 'Flagge hissen auf Iwo Jima'?",
          nl: "Wie maakte de beroemde foto 'Het hijsen van de vlag op Iwo Jima'?"
        },
        options: [
          { en: "Robert Capa", es: "Robert Capa", de: "Robert Capa", nl: "Robert Capa" },
          { en: "Joe Rosenthal", es: "Joe Rosenthal", de: "Joe Rosenthal", nl: "Joe Rosenthal" },
          { en: "Eddie Adams", es: "Eddie Adams", de: "Eddie Adams", nl: "Eddie Adams" },
          { en: "James Nachtwey", es: "James Nachtwey", de: "James Nachtwey", nl: "James Nachtwey" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Associated Press photographer Joe Rosenthal captured this iconic moment almost by accident, turning at the last second to photograph the second flag raising. The image became one of the most reproduced photographs in history.",
          es: "El fotógrafo de Associated Press Joe Rosenthal capturó este momento icónico casi por accidente, girándose en el último segundo para fotografiar el segundo izado de bandera. La imagen se convirtió en una de las fotografías más reproducidas de la historia.",
          de: "Associated Press-Fotograf Joe Rosenthal erfasste diesen ikonischen Moment fast zufällig und drehte sich im letzten Moment, um das zweite Flaggenhissen zu fotografieren. Das Bild wurde zu einem der am häufigsten reproduzierten Fotos der Geschichte.",
          nl: "Associated Press fotograaf Joe Rosenthal legde dit iconische moment bijna per ongeluk vast, zich op het laatste moment omdraaiend om het tweede vlaghijsen te fotograferen. De afbeelding werd een van de meest gereproduceerde foto's in de geschiedenis."
        }
      },
      {
        question: {
          en: "What award did Joe Rosenthal win for his Iwo Jima photograph?",
          es: "¿Qué premio ganó Joe Rosenthal por su fotografía de Iwo Jima?",
          de: "Welchen Preis gewann Joe Rosenthal für sein Iwo Jima-Foto?",
          nl: "Welke prijs won Joe Rosenthal voor zijn Iwo Jima foto?"
        },
        options: [
          { en: "Nobel Peace Prize", es: "Premio Nobel de la Paz", de: "Friedensnobelpreis", nl: "Nobelprijs voor de Vrede" },
          { en: "Oscar Award", es: "Premio Oscar", de: "Oscar", nl: "Oscar" },
          { en: "Emmy Award", es: "Premio Emmy", de: "Emmy Award", nl: "Emmy Award" },
          { en: "Pulitzer Prize", es: "Premio Pulitzer", de: "Pulitzer-Preis", nl: "Pulitzer Prijs" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Rosenthal won the 1945 Pulitzer Prize for Photography for this image. Despite its immense impact, he was initially accused of staging the photo, though it was actually a spontaneous moment during the second flag raising.",
          es: "Rosenthal ganó el Premio Pulitzer de Fotografía de 1945 por esta imagen. A pesar de su inmenso impacto, inicialmente fue acusado de escenificar la foto, aunque en realidad fue un momento espontáneo durante el segundo izado de bandera.",
          de: "Rosenthal gewann den Pulitzer-Preis für Fotografie 1945 für dieses Bild. Trotz seiner enormen Wirkung wurde er zunächst beschuldigt, das Foto inszeniert zu haben, obwohl es tatsächlich ein spontaner Moment während des zweiten Flaggenhissens war.",
          nl: "Rosenthal won de Pulitzer Prize voor Fotografie van 1945 voor deze afbeelding. Ondanks de enorme impact werd hij aanvankelijk beschuldigd van het ensceneren van de foto, hoewel het eigenlijk een spontaan moment was tijdens het tweede vlaghijsen."
        }
      },
      {
        question: {
          en: "The Iwo Jima flag-raising image inspired what famous memorial in Washington, D.C.?",
          es: "La imagen del izado de la bandera en Iwo Jima inspiró qué famoso memorial en Washington, D.C.?",
          de: "Das Iwo Jima Flaggenhissen inspirierte welches berühmte Denkmal in Washington, D.C.?",
          nl: "Het Iwo Jima vlag hijsen beeld inspireerde welk beroemd monument in Washington, D.C.?"
        },
        options: [
          { en: "Vietnam Veterans Memorial", es: "Memorial de Veteranos de Vietnam", de: "Vietnam Veterans Memorial", nl: "Vietnam Veterans Memorial" },
          { en: "Marine Corps War Memorial", es: "Memorial de Guerra del Cuerpo de Marines", de: "Marine Corps War Memorial", nl: "Marine Corps War Memorial" },
          { en: "Lincoln Memorial", es: "Memorial de Lincoln", de: "Lincoln Memorial", nl: "Lincoln Memorial" },
          { en: "Washington Monument", es: "Monumento a Washington", de: "Washington Monument", nl: "Washington Monument" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Marine Corps War Memorial in Arlington, Virginia depicts the flag raising in bronze sculpture. Dedicated in 1954, it honors all Marines who have died defending the United States since 1775.",
          es: "El Memorial de Guerra del Cuerpo de Marines en Arlington, Virginia, representa el izado de la bandera en escultura de bronce. Dedicado en 1954, honra a todos los Marines que han muerto defendiendo a Estados Unidos desde 1775.",
          de: "Das Marine Corps War Memorial in Arlington, Virginia, zeigt das Flaggenhissen als Bronzeskulptur. Es wurde 1954 eingeweiht und ehrt alle Marines, die seit 1775 bei der Verteidigung der Vereinigten Staaten gefallen sind.",
          nl: "Het Marine Corps War Memorial in Arlington, Virginia beeldt het vlaghijsen uit in bronzen sculptuur. Ingewijd in 1954, eert het alle mariniers die sinds 1775 zijn gestorven bij de verdediging van de Verenigde Staten."
        }
      }
    ],

    // Day 24 - February 24th: Steve Jobs' Birthday
    day24: [
      {
        question: {
          en: "Which tech visionary was born on February 24, 1955?",
          es: "¿Qué visionario de la tecnología nació el 24 de febrero de 1955?",
          de: "Welcher Technologie-Visionär wurde am 24. Februar 1955 geboren?",
          nl: "Welke technologie-visionair werd geboren op 24 februari 1955?"
        },
        options: [
          { en: "Mark Zuckerberg", es: "Mark Zuckerberg", de: "Mark Zuckerberg", nl: "Mark Zuckerberg" },
          { en: "Elon Musk", es: "Elon Musk", de: "Elon Musk", nl: "Elon Musk" },
          { en: "Steve Jobs", es: "Steve Jobs", de: "Steve Jobs", nl: "Steve Jobs" },
          { en: "Bill Gates", es: "Bill Gates", de: "Bill Gates", nl: "Bill Gates" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Steve Jobs revolutionized multiple industries including personal computing, animated films, music, phones, and tablets. His emphasis on design and user experience transformed how people interact with technology.",
          es: "Steve Jobs revolucionó múltiples industrias incluyendo computación personal, películas animadas, música, teléfonos y tabletas. Su énfasis en el diseño y la experiencia del usuario transformó cómo las personas interactúan con la tecnología.",
          de: "Steve Jobs revolutionierte mehrere Branchen, darunter Personal Computing, Animationsfilme, Musik, Telefone und Tablets. Seine Betonung von Design und Benutzererfahrung veränderte, wie Menschen mit Technologie interagieren.",
          nl: "Steve Jobs revolutioneerde meerdere industrieën waaronder personal computing, geanimeerde films, muziek, telefoons en tablets. Zijn nadruk op design en gebruikerservaring veranderde hoe mensen omgaan met technologie."
        }
      },
      {
        question: {
          en: "Which company did Steve Jobs co-found in 1976?",
          es: "¿Qué empresa cofundó Steve Jobs en 1976?",
          de: "Welches Unternehmen gründete Steve Jobs 1976 mit?",
          nl: "Welk bedrijf richtte Steve Jobs mee op in 1976?"
        },
        options: [
          { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" },
          { en: "Google", es: "Google", de: "Google", nl: "Google" },
          { en: "IBM", es: "IBM", de: "IBM", nl: "IBM" },
          { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Jobs co-founded Apple in his parents' garage with Steve Wozniak and Ronald Wayne. The company started by building and selling personal computers and grew into one of the world's most valuable companies.",
          es: "Jobs cofundó Apple en el garaje de sus padres con Steve Wozniak y Ronald Wayne. La empresa comenzó construyendo y vendiendo computadoras personales y creció hasta convertirse en una de las empresas más valiosas del mundo.",
          de: "Jobs gründete Apple in der Garage seiner Eltern zusammen mit Steve Wozniak und Ronald Wayne. Das Unternehmen begann mit dem Bau und Verkauf von Personal Computern und wurde zu einem der wertvollsten Unternehmen der Welt.",
          nl: "Jobs richtte Apple op in de garage van zijn ouders samen met Steve Wozniak en Ronald Wayne. Het bedrijf begon met het bouwen en verkopen van personal computers en groeide uit tot een van 's werelds meest waardevolle bedrijven."
        }
      },
      {
        question: {
          en: "What revolutionary product did Steve Jobs unveil in 2007?",
          es: "¿Qué producto revolucionario presentó Steve Jobs en 2007?",
          de: "Welches revolutionäre Produkt stellte Steve Jobs 2007 vor?",
          nl: "Welk revolutionair product onthulde Steve Jobs in 2007?"
        },
        options: [
          { en: "Apple Watch", es: "Apple Watch", de: "Apple Watch", nl: "Apple Watch" },
          { en: "iPad", es: "iPad", de: "iPad", nl: "iPad" },
          { en: "iPhone", es: "iPhone", de: "iPhone", nl: "iPhone" },
          { en: "iPod", es: "iPod", de: "iPod", nl: "iPod" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The iPhone combined a phone, iPod, and internet communicator into one device with a revolutionary touch interface. It fundamentally changed the mobile phone industry and created the modern smartphone era.",
          es: "El iPhone combinó un teléfono, iPod y comunicador de internet en un dispositivo con una interfaz táctil revolucionaria. Cambió fundamentalmente la industria de teléfonos móviles y creó la era moderna de los teléfonos inteligentes.",
          de: "Das iPhone kombinierte ein Telefon, einen iPod und einen Internet-Communicator in einem Gerät mit einer revolutionären Touch-Oberfläche. Es veränderte die Mobilfunkbranche grundlegend und schuf die moderne Smartphone-Ära.",
          nl: "De iPhone combineerde een telefoon, iPod en internetcommunicator in één apparaat met een revolutionaire touchinterface. Het veranderde de mobiele telefoonindustrie fundamenteel en creëerde het moderne smartphone-tijdperk."
        }
      },
      {
        question: {
          en: "Who co-founded Apple with Steve Jobs?",
          es: "¿Quién cofundó Apple con Steve Jobs?",
          de: "Wer gründete Apple zusammen mit Steve Jobs?",
          nl: "Wie richtte Apple mee op met Steve Jobs?"
        },
        options: [
          { en: "Tim Cook", es: "Tim Cook", de: "Tim Cook", nl: "Tim Cook" },
          { en: "Bill Gates", es: "Bill Gates", de: "Bill Gates", nl: "Bill Gates" },
          { en: "Steve Wozniak", es: "Steve Wozniak", de: "Steve Wozniak", nl: "Steve Wozniak" },
          { en: "Larry Page", es: "Larry Page", de: "Larry Page", nl: "Larry Page" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Steve Wozniak was the technical genius behind Apple's early computers, designing the Apple I and Apple II. While Jobs focused on vision and marketing, Wozniak created the groundbreaking hardware and software.",
          es: "Steve Wozniak fue el genio técnico detrás de las primeras computadoras de Apple, diseñando el Apple I y Apple II. Mientras Jobs se enfocaba en la visión y el marketing, Wozniak creó el innovador hardware y software.",
          de: "Steve Wozniak war das technische Genie hinter Apples frühen Computern und entwarf den Apple I und Apple II. Während Jobs sich auf Vision und Marketing konzentrierte, schuf Wozniak die bahnbrechende Hardware und Software.",
          nl: "Steve Wozniak was het technische genie achter Apple's vroege computers, en ontwierp de Apple I en Apple II. Terwijl Jobs zich richtte op visie en marketing, creëerde Wozniak de baanbrekende hardware en software."
        }
      },
      {
        question: {
          en: "Which animation studio did Steve Jobs help found and later sell to Disney?",
          es: "¿Qué estudio de animación ayudó a fundar Steve Jobs y luego vendió a Disney?",
          de: "Welches Animationsstudio half Steve Jobs zu gründen und verkaufte es später an Disney?",
          nl: "Welke animatiestudio hielp Steve Jobs oprichten en verkocht hij later aan Disney?"
        },
        options: [
          { en: "Pixar", es: "Pixar", de: "Pixar", nl: "Pixar" },
          { en: "Illumination", es: "Illumination", de: "Illumination", nl: "Illumination" },
          { en: "Blue Sky Studios", es: "Blue Sky Studios", de: "Blue Sky Studios", nl: "Blue Sky Studios" },
          { en: "DreamWorks", es: "DreamWorks", de: "DreamWorks", nl: "DreamWorks" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Jobs acquired the Graphics Group from Lucasfilm in 1986, which became Pixar. Under his leadership, Pixar created groundbreaking films like Toy Story, and was sold to Disney in 2006 for $7.4 billion.",
          es: "Jobs adquirió Graphics Group de Lucasfilm en 1986, que se convirtió en Pixar. Bajo su liderazgo, Pixar creó películas innovadoras como Toy Story, y fue vendida a Disney en 2006 por $7.4 mil millones.",
          de: "Jobs erwarb 1986 die Graphics Group von Lucasfilm, die zu Pixar wurde. Unter seiner Führung schuf Pixar bahnbrechende Filme wie Toy Story und wurde 2006 für 7,4 Milliarden Dollar an Disney verkauft.",
          nl: "Jobs verwierf de Graphics Group van Lucasfilm in 1986, die Pixar werd. Onder zijn leiding creëerde Pixar baanbrekende films zoals Toy Story, en werd in 2006 aan Disney verkocht voor $7,4 miljard."
        }
      }
    ],

    // Day 25 - February 25th: George Harrison's Birthday
    day25: [
      {
        question: {
          en: "Which member of The Beatles was born on February 25, 1943?",
          es: "¿Qué miembro de The Beatles nació el 25 de febrero de 1943?",
          de: "Welches Mitglied der Beatles wurde am 25. Februar 1943 geboren?",
          nl: "Welk lid van The Beatles werd geboren op 25 februari 1943?"
        },
        options: [
          { en: "John Lennon", es: "John Lennon", de: "John Lennon", nl: "John Lennon" },
          { en: "George Harrison", es: "George Harrison", de: "George Harrison", nl: "George Harrison" },
          { en: "Ringo Starr", es: "Ringo Starr", de: "Ringo Starr", nl: "Ringo Starr" },
          { en: "Paul McCartney", es: "Paul McCartney", de: "Paul McCartney", nl: "Paul McCartney" }
        ],
        correctIndex: 1,
        explanation: {
          en: "George Harrison was known as the 'lead guitarist' or 'quiet Beatle' of the group. Born in Liverpool, he was the youngest member of the Beatles and brought a unique musical sensibility to the band, particularly through his interest in Indian music and spirituality.",
          es: "George Harrison era conocido como el 'guitarrista principal' o 'Beatle silencioso' del grupo. Nacido en Liverpool, era el miembro más joven de los Beatles y aportó una sensibilidad musical única a la banda, particularmente a través de su interés en la música y espiritualidad india.",
          de: "George Harrison war bekannt als 'Lead-Gitarrist' oder 'stiller Beatle' der Gruppe. Geboren in Liverpool, war er das jüngste Mitglied der Beatles und brachte eine einzigartige musikalische Sensibilität in die Band, besonders durch sein Interesse an indischer Musik und Spiritualität.",
          nl: "George Harrison stond bekend als de 'leadgitarist' of 'stille Beatle' van de groep. Geboren in Liverpool, was hij het jongste lid van de Beatles en bracht een unieke muzikale gevoeligheid naar de band, vooral door zijn interesse in Indische muziek en spiritualiteit."
        }
      },
      {
        question: {
          en: "What was George Harrison's nickname in The Beatles?",
          es: "¿Cuál era el apodo de George Harrison en The Beatles?",
          de: "Was war George Harrisons Spitzname bei den Beatles?",
          nl: "Wat was George Harrison's bijnaam in The Beatles?"
        },
        options: [
          { en: "The Quiet Beatle", es: "El Beatle Silencioso", de: "Der stille Beatle", nl: "De Stille Beatle" },
          { en: "The Smart Beatle", es: "El Beatle Inteligente", de: "Der kluge Beatle", nl: "De Slimme Beatle" },
          { en: "The Cute Beatle", es: "El Beatle Lindo", de: "Der süße Beatle", nl: "De Schattige Beatle" },
          { en: "The Funny Beatle", es: "El Beatle Gracioso", de: "Der lustige Beatle", nl: "De Grappige Beatle" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Harrison earned this nickname due to his more reserved and introspective personality compared to the outgoing nature of his bandmates. Despite being quieter in public, his musical contributions were profound and his songwriting evolved significantly throughout his career.",
          es: "Harrison ganó este apodo debido a su personalidad más reservada e introspectiva en comparación con la naturaleza extrovertida de sus compañeros de banda. A pesar de ser más callado en público, sus contribuciones musicales fueron profundas y su composición evolucionó significativamente a lo largo de su carrera.",
          de: "Harrison erhielt diesen Spitznamen aufgrund seiner zurückhaltenderen und introspektiveren Persönlichkeit im Vergleich zur aufgeschlossenen Art seiner Bandkollegen. Trotz seiner Zurückhaltung in der Öffentlichkeit waren seine musikalischen Beiträge tiefgreifend und sein Songwriting entwickelte sich im Laufe seiner Karriere erheblich.",
          nl: "Harrison kreeg deze bijnaam vanwege zijn meer gereserveerde en introspectieve persoonlijkheid vergeleken met de uitgaande aard van zijn bandleden. Ondanks stiller te zijn in het openbaar, waren zijn muzikale bijdragen diepgaand en zijn songwriting evolueerde aanzienlijk gedurende zijn carrière."
        }
      },
      {
        question: {
          en: "Which George Harrison song became a major hit from his solo album 'All Things Must Pass'?",
          es: "¿Qué canción de George Harrison se convirtió en un gran éxito de su álbum en solitario 'All Things Must Pass'?",
          de: "Welcher George Harrison-Song wurde ein großer Hit von seinem Soloalbum 'All Things Must Pass'?",
          nl: "Welke George Harrison-song werd een grote hit van zijn soloalbum 'All Things Must Pass'?"
        },
        options: [
          { en: "Something", es: "Something", de: "Something", nl: "Something" },
          { en: "While My Guitar Gently Weeps", es: "While My Guitar Gently Weeps", de: "While My Guitar Gently Weeps", nl: "While My Guitar Gently Weeps" },
          { en: "Here Comes the Sun", es: "Here Comes the Sun", de: "Here Comes the Sun", nl: "Here Comes the Sun" },
          { en: "My Sweet Lord", es: "My Sweet Lord", de: "My Sweet Lord", nl: "My Sweet Lord" }
        ],
        correctIndex: 3,
        explanation: {
          en: "'My Sweet Lord' became Harrison's signature solo song and topped charts worldwide in 1970. The song blends Western pop with Eastern spirituality, reflecting Harrison's deep interest in Indian philosophy and became one of the best-selling singles of all time.",
          es: "'My Sweet Lord' se convirtió en la canción solista emblemática de Harrison y encabezó las listas de éxitos en todo el mundo en 1970. La canción combina el pop occidental con la espiritualidad oriental, reflejando el profundo interés de Harrison en la filosofía india y se convirtió en uno de los sencillos más vendidos de todos los tiempos.",
          de: "'My Sweet Lord' wurde Harrisons charakteristischer Solo-Song und erreichte 1970 weltweit die Spitze der Charts. Der Song verbindet westlichen Pop mit östlicher Spiritualität und spiegelt Harrisons tiefes Interesse an indischer Philosophie wider. Er wurde zu einer der meistverkauften Singles aller Zeiten.",
          nl: "'My Sweet Lord' werd Harrison's kenmerkende solosong en bereikte in 1970 wereldwijd de toppositie in de hitlijsten. Het nummer combineert westerse pop met oosterse spiritualiteit, een weerspiegeling van Harrison's diepe interesse in Indische filosofie en werd een van de best verkochte singles aller tijden."
        }
      },
      {
        question: {
          en: "What instrument was George Harrison primarily known for playing in The Beatles?",
          es: "¿Por qué instrumento era principalmente conocido George Harrison en The Beatles?",
          de: "Für welches Instrument war George Harrison bei den Beatles hauptsächlich bekannt?",
          nl: "Voor welk instrument stond George Harrison voornamelijk bekend in The Beatles?"
        },
        options: [
          { en: "Bass Guitar", es: "Bajo", de: "Bassgitarre", nl: "Basgitaar" },
          { en: "Keyboard", es: "Teclado", de: "Keyboard", nl: "Keyboard" },
          { en: "Drums", es: "Batería", de: "Schlagzeug", nl: "Drums" },
          { en: "Lead Guitar", es: "Guitarra principal", de: "Leadgitarre", nl: "Leadgitaar" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Harrison was the Beatles' lead guitarist, creating iconic guitar riffs and solos on songs like 'Something' and 'While My Guitar Gently Weeps'. His innovative guitar work incorporated various styles and techniques, including slide guitar and fingerpicking, influencing generations of guitarists.",
          es: "Harrison fue el guitarrista principal de los Beatles, creando riffs y solos icónicos de guitarra en canciones como 'Something' y 'While My Guitar Gently Weeps'. Su innovador trabajo con la guitarra incorporó varios estilos y técnicas, incluyendo guitarra slide y fingerpicking, influyendo en generaciones de guitarristas.",
          de: "Harrison war der Lead-Gitarrist der Beatles und schuf ikonische Gitarrenriffs und Solos in Songs wie 'Something' und 'While My Guitar Gently Weeps'. Seine innovative Gitarrenarbeit umfasste verschiedene Stile und Techniken, einschließlich Slide-Gitarre und Fingerpicking, und beeinflusste Generationen von Gitarristen.",
          nl: "Harrison was de leadgitarist van de Beatles en creëerde iconische gitaarriffs en solo's op nummers zoals 'Something' en 'While My Guitar Gently Weeps'. Zijn innovatieve gitaarwerk omvatte verschillende stijlen en technieken, waaronder slidegitaar en fingerpicking, en beïnvloedde generaties gitaristen."
        }
      },
      {
        question: {
          en: "Which Indian instrument did George Harrison help popularize in Western music?",
          es: "¿Qué instrumento indio ayudó George Harrison a popularizar en la música occidental?",
          de: "Welches indische Instrument half George Harrison in der westlichen Musik zu popularisieren?",
          nl: "Welk Indiaas instrument hielp George Harrison populariseren in westerse muziek?"
        },
        options: [
          { en: "Tabla", es: "Tabla", de: "Tabla", nl: "Tabla" },
          { en: "Sitar", es: "Sitar", de: "Sitar", nl: "Sitar" },
          { en: "Sarangi", es: "Sarangi", de: "Sarangi", nl: "Sarangi" },
          { en: "Veena", es: "Veena", de: "Veena", nl: "Veena" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Harrison studied sitar under Indian virtuoso Ravi Shankar and introduced the instrument to rock music on Beatles songs like 'Norwegian Wood'. His embrace of Indian music and culture opened Western audiences to Eastern sounds and spirituality, creating a lasting cross-cultural musical exchange.",
          es: "Harrison estudió sitar bajo el virtuoso indio Ravi Shankar e introdujo el instrumento en la música rock en canciones de los Beatles como 'Norwegian Wood'. Su abrazo de la música y cultura india abrió a las audiencias occidentales a los sonidos y espiritualidad orientales, creando un intercambio musical intercultural duradero.",
          de: "Harrison studierte Sitar beim indischen Virtuosen Ravi Shankar und führte das Instrument in die Rockmusik ein, auf Beatles-Songs wie 'Norwegian Wood'. Seine Umarmung der indischen Musik und Kultur öffnete westliche Zuschauer für östliche Klänge und Spiritualität und schuf einen dauerhaften interkulturellen musikalischen Austausch.",
          nl: "Harrison studeerde sitar bij de Indiase virtuoos Ravi Shankar en introduceerde het instrument in de rockmuziek op Beatles-nummers zoals 'Norwegian Wood'. Zijn omhelzing van Indische muziek en cultuur opende westerse publiek voor oosterse klanken en spiritualiteit, waardoor een blijvende interculturele muzikale uitwisseling ontstond."
        }
      }
    ],

    // Day 26 - February 26th: World Trade Center Bombing 1993
    day26: [
      {
        question: {
          en: "On February 26, 1993, what major terrorist attack occurred in New York City?",
          es: "El 26 de febrero de 1993, ¿qué gran ataque terrorista ocurrió en la ciudad de Nueva York?",
          de: "Welcher große Terroranschlag ereignete sich am 26. Februar 1993 in New York City?",
          nl: "Welke grote terroristische aanslag vond plaats in New York City op 26 februari 1993?"
        },
        options: [
          { en: "World Trade Center bombing", es: "Atentado al World Trade Center", de: "Bombenanschlag auf das World Trade Center", nl: "Bomaanslag World Trade Center" },
          { en: "Empire State Building attack", es: "Ataque al Empire State Building", de: "Angriff auf das Empire State Building", nl: "Aanval op Empire State Building" },
          { en: "Brooklyn Bridge bombing", es: "Atentado del Puente de Brooklyn", de: "Bombenanschlag auf die Brooklyn Bridge", nl: "Bomaanslag Brooklyn Bridge" },
          { en: "Times Square bombing", es: "Atentado en Times Square", de: "Bombenanschlag auf Times Square", nl: "Bomaanslag Times Square" }
        ],
        correctIndex: 2,
        explanation: {
          en: "A truck bomb exploded in the underground garage beneath the North Tower, killing six people and injuring over 1,000. This was the first major foreign terrorist attack on American soil and foreshadowed the tragic events of September 11, 2001.",
          es: "Una bomba de camión explotó en el garaje subterráneo debajo de la Torre Norte, matando a seis personas e hiriendo a más de 1,000. Este fue el primer gran ataque terrorista extranjero en suelo estadounidense y presagió los trágicos eventos del 11 de septiembre de 2001.",
          de: "Eine Autobombe explodierte in der Tiefgarage unter dem Nordturm und tötete sechs Menschen und verletzte über 1.000. Dies war der erste große ausländische Terroranschlag auf amerikanischem Boden und deutete die tragischen Ereignisse vom 11. September 2001 an.",
          nl: "Een vrachtwagenbom explodeerde in de ondergrondse garage onder de Noordtoren, waarbij zes mensen omkwamen en meer dan 1.000 gewond raakten. Dit was de eerste grote buitenlandse terroristische aanslag op Amerikaanse bodem en voorspelde de tragische gebeurtenissen van 11 september 2001."
        }
      },
      {
        question: {
          en: "Where was the 1993 World Trade Center bomb placed?",
          es: "¿Dónde se colocó la bomba del World Trade Center de 1993?",
          de: "Wo wurde die Bombe des World Trade Centers 1993 platziert?",
          nl: "Waar werd de bom van het World Trade Center in 1993 geplaatst?"
        },
        options: [
          { en: "Underground parking garage", es: "Garaje de estacionamiento subterráneo", de: "Tiefgarage", nl: "Ondergrondse parkeergarage" },
          { en: "Rooftop", es: "Azotea", de: "Dach", nl: "Dak" },
          { en: "Lobby", es: "Vestíbulo", de: "Lobby", nl: "Lobby" },
          { en: "Elevator shaft", es: "Hueco del ascensor", de: "Aufzugsschacht", nl: "Liftschacht" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The bomb was strategically placed in a rented van in the B-2 level parking garage directly beneath the North Tower. The terrorists hoped the explosion would cause one tower to collapse into the other, though this plan ultimately failed.",
          es: "La bomba fue colocada estratégicamente en una camioneta alquilada en el garaje de estacionamiento nivel B-2 directamente debajo de la Torre Norte. Los terroristas esperaban que la explosión causara que una torre colapsara sobre la otra, aunque este plan finalmente fracasó.",
          de: "Die Bombe wurde strategisch in einem gemieteten Lieferwagen in der Parkgarage der Ebene B-2 direkt unter dem Nordturm platziert. Die Terroristen hofften, dass die Explosion einen Turm zum Einsturz auf den anderen bringen würde, obwohl dieser Plan letztendlich scheiterte.",
          nl: "De bom werd strategisch geplaatst in een gehuurde bestelwagen in de parkeergarage op niveau B-2 direct onder de Noordtoren. De terroristen hoopten dat de explosie de ene toren op de andere zou laten instorten, hoewel dit plan uiteindelijk mislukte."
        }
      },
      {
        question: {
          en: "How many people were killed in the 1993 World Trade Center bombing?",
          es: "¿Cuántas personas murieron en el atentado del World Trade Center de 1993?",
          de: "Wie viele Menschen starben beim Bombenanschlag auf das World Trade Center 1993?",
          nl: "Hoeveel mensen kwamen om bij de bomaanslag op het World Trade Center in 1993?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "50", es: "50", de: "50", nl: "50" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Six people died in the attack, including a pregnant woman, and more than 1,000 were injured. The blast created a crater several stories deep and caused significant structural damage, though the towers remained standing.",
          es: "Seis personas murieron en el ataque, incluida una mujer embarazada, y más de 1,000 resultaron heridas. La explosión creó un cráter de varios pisos de profundidad y causó daños estructurales significativos, aunque las torres permanecieron en pie.",
          de: "Sechs Menschen starben bei dem Anschlag, darunter eine schwangere Frau, und mehr als 1.000 wurden verletzt. Die Explosion erzeugte einen mehrere Stockwerke tiefen Krater und verursachte erhebliche strukturelle Schäden, obwohl die Türme stehen blieben.",
          nl: "Zes mensen kwamen om bij de aanslag, waaronder een zwangere vrouw, en meer dan 1.000 raakten gewond. De explosie creëerde een krater van meerdere verdiepingen diep en veroorzaakte aanzienlijke structurele schade, hoewel de torens overeind bleven."
        }
      },
      {
        question: {
          en: "What was the main goal of the 1993 World Trade Center attackers?",
          es: "¿Cuál era el objetivo principal de los atacantes del World Trade Center de 1993?",
          de: "Was war das Hauptziel der Angreifer des World Trade Centers 1993?",
          nl: "Wat was het hoofddoel van de aanvallers van het World Trade Center in 1993?"
        },
        options: [
          { en: "To topple one tower into the other", es: "Derribar una torre sobre la otra", de: "Einen Turm auf den anderen zu stürzen", nl: "De ene toren op de andere laten vallen" },
          { en: "To rob the bank inside", es: "Robar el banco interior", de: "Die Bank darin ausrauben", nl: "De bank erin beroven" },
          { en: "To take hostages", es: "Tomar rehenes", de: "Geiseln nehmen", nl: "Gijzelaars nemen" },
          { en: "To destroy the subway", es: "Destruir el metro", de: "Die U-Bahn zerstören", nl: "De metro vernietigen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The attackers intended to knock the North Tower into the South Tower, causing both to collapse and killing tens of thousands. The bomb's placement and size were calculated to achieve this catastrophic result, but the buildings' structural integrity prevented this outcome.",
          es: "Los atacantes pretendían derribar la Torre Norte sobre la Torre Sur, causando que ambas colapsaran y matando a decenas de miles. La ubicación y el tamaño de la bomba fueron calculados para lograr este resultado catastrófico, pero la integridad estructural de los edificios impidió este resultado.",
          de: "Die Angreifer beabsichtigten, den Nordturm auf den Südturm zu stürzen, wodurch beide einstürzen und Zehntausende sterben sollten. Die Platzierung und Größe der Bombe waren berechnet, um dieses katastrophale Ergebnis zu erreichen, aber die strukturelle Integrität der Gebäude verhinderte dieses Ergebnis.",
          nl: "De aanvallers wilden de Noordtoren op de Zuidtoren laten vallen, waardoor beide zouden instorten en tienduizenden zouden sterven. De plaatsing en grootte van de bom waren berekend om dit catastrofale resultaat te bereiken, maar de structurele integriteit van de gebouwen voorkwam dit resultaat."
        }
      },
      {
        question: {
          en: "Who was the mastermind behind the 1993 World Trade Center bombing?",
          es: "¿Quién fue el cerebro detrás del atentado del World Trade Center de 1993?",
          de: "Wer war der Drahtzieher hinter dem Bombenanschlag auf das World Trade Center 1993?",
          nl: "Wie was de bedenker achter de bomaanslag op het World Trade Center in 1993?"
        },
        options: [
          { en: "Ted Kaczynski", es: "Ted Kaczynski", de: "Ted Kaczynski", nl: "Ted Kaczynski" },
          { en: "Timothy McVeigh", es: "Timothy McVeigh", de: "Timothy McVeigh", nl: "Timothy McVeigh" },
          { en: "Ramzi Yousef", es: "Ramzi Yousef", de: "Ramzi Yousef", nl: "Ramzi Yousef" },
          { en: "Osama bin Laden", es: "Osama bin Laden", de: "Osama bin Laden", nl: "Osama bin Laden" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Ramzi Yousef, a Pakistani terrorist, orchestrated the attack with a team of accomplices. He was captured in Pakistan in 1995 and sentenced to life in prison, along with several co-conspirators who were convicted for their roles in the bombing.",
          es: "Ramzi Yousef, un terrorista pakistaní, orquestó el ataque con un equipo de cómplices. Fue capturado en Pakistán en 1995 y condenado a cadena perpetua, junto con varios co-conspiradores que fueron condenados por sus roles en el atentado.",
          de: "Ramzi Yousef, ein pakistanischer Terrorist, orchestrierte den Anschlag mit einem Team von Komplizen. Er wurde 1995 in Pakistan gefasst und zu lebenslanger Haft verurteilt, zusammen mit mehreren Mitverschwörern, die für ihre Rolle bei dem Anschlag verurteilt wurden.",
          nl: "Ramzi Yousef, een Pakistaanse terrorist, orkestreerde de aanval met een team van medeplichtigen. Hij werd in 1995 in Pakistan gevangen genomen en veroordeeld tot levenslang, samen met verschillende mede-samenzweerders die werden veroordeeld voor hun rol in de bomaanslag."
        }
      }
    ],

    // Day 27 - February 27th: Reichstag Fire 1933
    day27: [
      {
        question: {
          en: "On February 27, 1933, which important building in Germany was set on fire?",
          es: "El 27 de febrero de 1933, ¿qué edificio importante en Alemania fue incendiado?",
          de: "Welches wichtige Gebäude in Deutschland wurde am 27. Februar 1933 in Brand gesteckt?",
          nl: "Welk belangrijk gebouw in Duitsland werd in brand gestoken op 27 februari 1933?"
        },
        options: [
          { en: "Brandenburg Gate", es: "Puerta de Brandeburgo", de: "Brandenburger Tor", nl: "Brandenburger Tor" },
          { en: "Reichstag (German Parliament)", es: "Reichstag (Parlamento alemán)", de: "Reichstag (Deutsches Parlament)", nl: "Reichstag (Duits Parlement)" },
          { en: "Berlin Cathedral", es: "Catedral de Berlín", de: "Berliner Dom", nl: "Berlijnse Dom" },
          { en: "Charlottenburg Palace", es: "Palacio de Charlottenburg", de: "Schloss Charlottenburg", nl: "Slot Charlottenburg" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Reichstag building, home to the German parliament, was engulfed in flames in a pivotal moment in German history. This event became a turning point that allowed the Nazi Party to suppress opposition and establish authoritarian rule in Germany.",
          es: "El edificio del Reichstag, sede del parlamento alemán, fue envuelto en llamas en un momento crucial de la historia alemana. Este evento se convirtió en un punto de inflexión que permitió al Partido Nazi suprimir la oposición y establecer un gobierno autoritario en Alemania.",
          de: "Das Reichstagsgebäude, Sitz des deutschen Parlaments, stand in einem entscheidenden Moment der deutschen Geschichte in Flammen. Dieses Ereignis wurde zu einem Wendepunkt, der es der NSDAP ermöglichte, die Opposition zu unterdrücken und eine autoritäre Herrschaft in Deutschland zu etablieren.",
          nl: "Het Rijksdaggebouw, thuisbasis van het Duitse parlement, werd in brand gestoken in een cruciaal moment in de Duitse geschiedenis. Deze gebeurtenis werd een keerpunt dat de Nazi-partij in staat stelde de oppositie te onderdrukken en autoritair bewind in Duitsland te vestigen."
        }
      },
      {
        question: {
          en: "Which political party used the Reichstag fire to consolidate power in Germany?",
          es: "¿Qué partido político usó el incendio del Reichstag para consolidar el poder en Alemania?",
          de: "Welche politische Partei nutzte den Reichstagsbrand, um die Macht in Deutschland zu festigen?",
          nl: "Welke politieke partij gebruikte de Rijksdagbrand om de macht in Duitsland te consolideren?"
        },
        options: [
          { en: "Christian Democratic Party", es: "Partido Demócrata Cristiano", de: "Christdemokratische Partei", nl: "Christendemocratische Partij" },
          { en: "Social Democratic Party", es: "Partido Socialdemócrata", de: "Sozialdemokratische Partei", nl: "Sociaal-Democratische Partij" },
          { en: "Communist Party", es: "Partido Comunista", de: "Kommunistische Partei", nl: "Communistische Partij" },
          { en: "Nazi Party", es: "Partido Nazi", de: "Nazipartei", nl: "Nazi-partij" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Adolf Hitler and the Nazi Party exploited the fire to claim that communists were plotting against the government. This allowed them to justify emergency measures, arrest political opponents, and suspend civil liberties, paving the way for Hitler's dictatorship.",
          es: "Adolf Hitler y el Partido Nazi explotaron el incendio para afirmar que los comunistas conspiraban contra el gobierno. Esto les permitió justificar medidas de emergencia, arrestar a oponentes políticos y suspender las libertades civiles, allanando el camino para la dictadura de Hitler.",
          de: "Adolf Hitler und die NSDAP nutzten das Feuer aus, um zu behaupten, dass Kommunisten gegen die Regierung konspirierten. Dies ermöglichte es ihnen, Notmaßnahmen zu rechtfertigen, politische Gegner zu verhaften und Bürgerrechte auszusetzen, was den Weg für Hitlers Diktatur ebnete.",
          nl: "Adolf Hitler en de Nazi-partij maakten misbruik van de brand om te beweren dat communisten tegen de regering samenzwoeren. Dit stelde hen in staat om noodmaatregelen te rechtvaardigen, politieke tegenstanders te arresteren en burgerrechten op te schorten, waardoor de weg werd geëffend voor Hitlers dictatuur."
        }
      },
      {
        question: {
          en: "Who was arrested and blamed for the Reichstag fire?",
          es: "¿Quién fue arrestado y culpado por el incendio del Reichstag?",
          de: "Wer wurde verhaftet und für den Reichstagsbrand verantwortlich gemacht?",
          nl: "Wie werd gearresteerd en beschuldigd van de Rijksdagbrand?"
        },
        options: [
          { en: "Marinus van der Lubbe", es: "Marinus van der Lubbe", de: "Marinus van der Lubbe", nl: "Marinus van der Lubbe" },
          { en: "Joseph Goebbels", es: "Joseph Goebbels", de: "Joseph Goebbels", nl: "Joseph Goebbels" },
          { en: "Hermann Göring", es: "Hermann Göring", de: "Hermann Göring", nl: "Hermann Göring" },
          { en: "Adolf Hitler", es: "Adolf Hitler", de: "Adolf Hitler", nl: "Adolf Hitler" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Marinus van der Lubbe, a Dutch communist, was found at the scene and arrested. He was executed in 1934 after being convicted, though debate continues about whether he acted alone or if the Nazis were involved in orchestrating the fire.",
          es: "Marinus van der Lubbe, un comunista holandés, fue encontrado en la escena y arrestado. Fue ejecutado en 1934 después de ser condenado, aunque continúa el debate sobre si actuó solo o si los nazis estuvieron involucrados en orquestar el incendio.",
          de: "Marinus van der Lubbe, ein niederländischer Kommunist, wurde am Tatort gefunden und verhaftet. Er wurde 1934 nach seiner Verurteilung hingerichtet, obwohl die Debatte darüber, ob er allein handelte oder ob die Nazis an der Inszenierung des Feuers beteiligt waren, andauert.",
          nl: "Marinus van der Lubbe, een Nederlandse communist, werd op de plaats van het misdrijf gevonden en gearresteerd. Hij werd in 1934 geëxecuteerd na zijn veroordeling, hoewel het debat voortduurt over of hij alleen handelde of dat de nazi's betrokken waren bij het orkestreren van de brand."
        }
      },
      {
        question: {
          en: "What decree was issued the day after the Reichstag fire that suspended civil liberties?",
          es: "¿Qué decreto se emitió el día después del incendio del Reichstag que suspendió las libertades civiles?",
          de: "Welches Dekret wurde am Tag nach dem Reichstagsbrand erlassen, das die Bürgerrechte aussetzteß?",
          nl: "Welk decreet werd de dag na de Rijksdagbrand uitgevaardigd dat de burgerrechten opschortte?"
        },
        options: [
          { en: "Reichstag Fire Decree", es: "Decreto del Incendio del Reichstag", de: "Reichstagsbrandverordnung", nl: "Rijksdagbrandbesluit" },
          { en: "Emergency Decree", es: "Decreto de Emergencia", de: "Notverordnung", nl: "Nooddecreet" },
          { en: "Nuremberg Laws", es: "Leyes de Núremberg", de: "Nürnberger Gesetze", nl: "Neurenberger wetten" },
          { en: "Enabling Act", es: "Ley de Habilitación", de: "Ermächtigungsgesetz", nl: "Machtigingswet" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Reichstag Fire Decree suspended key constitutional protections including freedom of speech, press, and assembly. Officially titled 'Decree for the Protection of People and State,' it allowed the Nazis to arrest thousands of political opponents without trial.",
          es: "El Decreto del Incendio del Reichstag suspendió protecciones constitucionales clave incluyendo la libertad de expresión, prensa y reunión. Oficialmente titulado 'Decreto para la Protección del Pueblo y el Estado,' permitió a los nazis arrestar a miles de oponentes políticos sin juicio.",
          de: "Die Reichstagsbrandverordnung setzte wichtige verfassungsmäßige Schutzrechte aus, darunter die Rede-, Presse- und Versammlungsfreiheit. Offiziell 'Verordnung zum Schutz von Volk und Staat' genannt, erlaubte sie den Nazis, Tausende politische Gegner ohne Gerichtsverfahren zu verhaften.",
          nl: "Het Rijksdagbrandbesluit schortte belangrijke grondwettelijke beschermingen op, waaronder vrijheid van meningsuiting, pers en vergadering. Officieel getiteld 'Besluit ter Bescherming van Volk en Staat', stelde het de nazi's in staat duizenden politieke tegenstanders zonder proces te arresteren."
        }
      },
      {
        question: {
          en: "The Reichstag fire helped Adolf Hitler gain what type of powers?",
          es: "¿El incendio del Reichstag ayudó a Adolf Hitler a obtener qué tipo de poderes?",
          de: "Der Reichstagsbrand half Adolf Hitler, welche Art von Befugnissen zu erlangen?",
          nl: "De Rijksdagbrand hielp Adolf Hitler welk soort bevoegdheden te krijgen?"
        },
        options: [
          { en: "Dictatorial powers", es: "Poderes dictatoriales", de: "Diktatorische Befugnisse", nl: "Dictatoriale bevoegdheden" },
          { en: "Democratic powers", es: "Poderes democráticos", de: "Demokratische Befugnisse", nl: "Democratische bevoegdheden" },
          { en: "Military powers", es: "Poderes militares", de: "Militärische Befugnisse", nl: "Militaire bevoegdheden" },
          { en: "Economic powers", es: "Poderes económicos", de: "Wirtschaftliche Befugnisse", nl: "Economische bevoegdheden" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The fire and subsequent decree gave Hitler emergency powers that effectively ended democracy in Germany. Combined with the later Enabling Act, these measures allowed Hitler to rule by decree, eliminate political opposition, and transform Germany into a totalitarian state.",
          es: "El incendio y el decreto subsiguiente le dieron a Hitler poderes de emergencia que efectivamente terminaron con la democracia en Alemania. Combinadas con la posterior Ley de Habilitación, estas medidas permitieron a Hitler gobernar por decreto, eliminar la oposición política y transformar Alemania en un estado totalitario.",
          de: "Das Feuer und die nachfolgende Verordnung gaben Hitler Notstandsbefugnisse, die die Demokratie in Deutschland effektiv beendeten. In Kombination mit dem späteren Ermächtigungsgesetz ermöglichten diese Maßnahmen Hitler, per Dekret zu regieren, die politische Opposition zu beseitigen und Deutschland in einen totalitären Staat zu verwandeln.",
          nl: "De brand en het daaropvolgende besluit gaven Hitler noodbevoegdheden die de democratie in Duitsland effectief beëindigden. In combinatie met de latere Machtigingswet stelden deze maatregelen Hitler in staat om bij decreet te regeren, politieke oppositie te elimineren en Duitsland om te vormen tot een totalitaire staat."
        }
      }
    ],

    // Day 28 - February 28th: DNA Structure Discovered
    day28: [
      {
        question: {
          en: "On February 28, 1953, which two scientists discovered the double helix structure of DNA?",
          es: "El 28 de febrero de 1953, ¿qué dos científicos descubrieron la estructura de doble hélice del ADN?",
          de: "Welche beiden Wissenschaftler entdeckten am 28. Februar 1953 die Doppelhelixstruktur der DNA?",
          nl: "Welke twee wetenschappers ontdekten op 28 februari 1953 de dubbele helixstructuur van DNA?"
        },
        options: [
          { en: "James Watson and Francis Crick", es: "James Watson y Francis Crick", de: "James Watson und Francis Crick", nl: "James Watson en Francis Crick" },
          { en: "Albert Einstein and Niels Bohr", es: "Albert Einstein y Niels Bohr", de: "Albert Einstein und Niels Bohr", nl: "Albert Einstein en Niels Bohr" },
          { en: "Marie and Pierre Curie", es: "Marie y Pierre Curie", de: "Marie und Pierre Curie", nl: "Marie en Pierre Curie" },
          { en: "Charles Darwin and Gregor Mendel", es: "Charles Darwin y Gregor Mendel", de: "Charles Darwin und Gregor Mendel", nl: "Charles Darwin en Gregor Mendel" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Watson and Crick's discovery at Cambridge University revolutionized biology and opened the door to modern genetics. Their model explained how genetic information is stored and replicated, laying the foundation for biotechnology, medicine, and our understanding of heredity.",
          es: "El descubrimiento de Watson y Crick en la Universidad de Cambridge revolucionó la biología y abrió la puerta a la genética moderna. Su modelo explicó cómo se almacena y replica la información genética, sentando las bases para la biotecnología, la medicina y nuestra comprensión de la herencia.",
          de: "Die Entdeckung von Watson und Crick an der Universität Cambridge revolutionierte die Biologie und öffnete die Tür zur modernen Genetik. Ihr Modell erklärte, wie genetische Information gespeichert und repliziert wird, und legte den Grundstein für Biotechnologie, Medizin und unser Verständnis von Vererbung.",
          nl: "De ontdekking van Watson en Crick aan de Universiteit van Cambridge revolutioneerde de biologie en opende de deur naar moderne genetica. Hun model verklaarde hoe genetische informatie wordt opgeslagen en gerepliceerd, en legde de basis voor biotechnologie, geneeskunde en ons begrip van erfelijkheid."
        }
      },
      {
        question: {
          en: "What does DNA stand for?",
          es: "¿Qué significa ADN?",
          de: "Wofür steht DNA?",
          nl: "Waar staat DNA voor?"
        },
        options: [
          { en: "Deoxyribonucleic Acid", es: "Ácido Desoxirribonucleico", de: "Desoxyribonukleinsäure", nl: "Desoxyribonucleïnezuur" },
          { en: "Deoxyribose Nucleic Acid", es: "Ácido Nucleico de Desoxirribosa", de: "Desoxyribose-Nukleinsäure", nl: "Desoxyribose Nucleïnezuur" },
          { en: "Deoxyribosome Acid", es: "Ácido Desoxirribosoma", de: "Desoxyribosomensäure", nl: "Desoxyribosoomzuur" },
          { en: "Dioxiribonuclear Acid", es: "Ácido Dioxirribonuclear", de: "Dioxiribonuklearsäure", nl: "Dioxiribonucleairzuur" }
        ],
        correctIndex: 1,
        explanation: {
          en: "DNA is the molecule that carries genetic instructions for life. Found in nearly all living organisms, it contains the blueprint for building proteins and passing traits from parents to offspring, making it essential for reproduction and biological function.",
          es: "El ADN es la molécula que lleva las instrucciones genéticas para la vida. Encontrado en casi todos los organismos vivos, contiene el plano para construir proteínas y pasar rasgos de padres a hijos, haciéndolo esencial para la reproducción y la función biológica.",
          de: "DNA ist das Molekül, das genetische Anweisungen für das Leben trägt. Es kommt in fast allen lebenden Organismen vor und enthält den Bauplan für den Aufbau von Proteinen und die Weitergabe von Merkmalen von Eltern an Nachkommen, was es für Reproduktion und biologische Funktion unerlässlich macht.",
          nl: "DNA is het molecuul dat genetische instructies voor het leven draagt. Het wordt gevonden in bijna alle levende organismen en bevat de blauwdruk voor het bouwen van eiwitten en het doorgeven van eigenschappen van ouders aan nakomelingen, waardoor het essentieel is voor reproductie en biologische functie."
        }
      },
      {
        question: {
          en: "Which female scientist's X-ray crystallography work was crucial to discovering DNA structure but often overlooked?",
          es: "¿El trabajo de cristalografía de rayos X de qué científica fue crucial para descubrir la estructura del ADN pero a menudo pasado por alto?",
          de: "Wessen Röntgenkristallographie-Arbeit war entscheidend für die Entdeckung der DNA-Struktur, wurde aber oft übersehen?",
          nl: "Wiens röntgenkristallografie-werk was cruciaal voor het ontdekken van de DNA-structuur maar werd vaak over het hoofd gezien?"
        },
        options: [
          { en: "Rosalind Franklin", es: "Rosalind Franklin", de: "Rosalind Franklin", nl: "Rosalind Franklin" },
          { en: "Marie Curie", es: "Marie Curie", de: "Marie Curie", nl: "Marie Curie" },
          { en: "Barbara McClintock", es: "Barbara McClintock", de: "Barbara McClintock", nl: "Barbara McClintock" },
          { en: "Dorothy Hodgkin", es: "Dorothy Hodgkin", de: "Dorothy Hodgkin", nl: "Dorothy Hodgkin" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Rosalind Franklin's 'Photo 51' provided critical evidence of DNA's helical structure. Her precise X-ray images were key to Watson and Crick's model, yet she received little recognition during her lifetime and died before the Nobel Prize was awarded.",
          es: "La 'Foto 51' de Rosalind Franklin proporcionó evidencia crítica de la estructura helicoidal del ADN. Sus imágenes precisas de rayos X fueron clave para el modelo de Watson y Crick, sin embargo recibió poco reconocimiento durante su vida y murió antes de que se otorgara el Premio Nobel.",
          de: "Rosalind Franklins 'Foto 51' lieferte entscheidende Beweise für die helikale Struktur der DNA. Ihre präzisen Röntgenbilder waren der Schlüssel zum Modell von Watson und Crick, dennoch erhielt sie zu Lebzeiten wenig Anerkennung und starb vor der Verleihung des Nobelpreises.",
          nl: "Rosalind Franklin's 'Foto 51' leverde cruciaal bewijs voor de helix-structuur van DNA. Haar precieze röntgenfoto's waren de sleutel tot het model van Watson en Crick, maar ze kreeg tijdens haar leven weinig erkenning en stierf voordat de Nobelprijs werd toegekend."
        }
      },
      {
        question: {
          en: "The DNA double helix structure resembles which shape?",
          es: "¿La estructura de doble hélice del ADN se asemeja a qué forma?",
          de: "Welcher Form ähnelt die DNA-Doppelhelixstruktur?",
          nl: "Op welke vorm lijkt de dubbele helix structuur van DNA?"
        },
        options: [
          { en: "Triangle", es: "Triángulo", de: "Dreieck", nl: "Driehoek" },
          { en: "Twisted ladder", es: "Escalera retorcida", de: "Verdrehte Leiter", nl: "Gedraaide ladder" },
          { en: "Straight line", es: "Línea recta", de: "Gerade Linie", nl: "Rechte lijn" },
          { en: "Circle", es: "Círculo", de: "Kreis", nl: "Cirkel" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The double helix resembles a twisted ladder with sugar-phosphate backbones forming the sides and base pairs forming the rungs. This elegant structure allows DNA to be tightly packed in cells while remaining accessible for replication and protein synthesis.",
          es: "La doble hélice se asemeja a una escalera retorcida con esqueletos de azúcar-fosfato formando los lados y pares de bases formando los peldaños. Esta estructura elegante permite que el ADN esté empaquetado compactamente en las células mientras permanece accesible para la replicación y síntesis de proteínas.",
          de: "Die Doppelhelix ähnelt einer verdrehten Leiter, wobei Zucker-Phosphat-Rückgrate die Seiten bilden und Basenpaare die Sprossen. Diese elegante Struktur ermöglicht es der DNA, dicht in Zellen gepackt zu sein und gleichzeitig für Replikation und Proteinsynthese zugänglich zu bleiben.",
          nl: "De dubbele helix lijkt op een gedraaide ladder met suiker-fosfaat ruggengraten die de zijkanten vormen en basenparen die de sporten vormen. Deze elegante structuur stelt DNA in staat om compact verpakt te worden in cellen terwijl het toegankelijk blijft voor replicatie en eiwitsynthese."
        }
      },
      {
        question: {
          en: "In what year did Watson and Crick win the Nobel Prize for their DNA discovery?",
          es: "¿En qué año ganaron Watson y Crick el Premio Nobel por su descubrimiento del ADN?",
          de: "In welchem Jahr gewannen Watson und Crick den Nobelpreis für ihre DNA-Entdeckung?",
          nl: "In welk jaar wonnen Watson en Crick de Nobelprijs voor hun DNA-ontdekking?"
        },
        options: [
          { en: "1958", es: "1958", de: "1958", nl: "1958" },
          { en: "1953", es: "1953", de: "1953", nl: "1953" },
          { en: "1962", es: "1962", de: "1962", nl: "1962" },
          { en: "1970", es: "1970", de: "1970", nl: "1970" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Watson, Crick, and Maurice Wilkins shared the 1962 Nobel Prize in Physiology or Medicine. Rosalind Franklin, whose work was essential to the discovery, had died in 1958 and Nobel Prizes are not awarded posthumously.",
          es: "Watson, Crick y Maurice Wilkins compartieron el Premio Nobel de Fisiología o Medicina de 1962. Rosalind Franklin, cuyo trabajo fue esencial para el descubrimiento, había muerto en 1958 y los Premios Nobel no se otorgan póstumamente.",
          de: "Watson, Crick und Maurice Wilkins teilten sich 1962 den Nobelpreis für Physiologie oder Medizin. Rosalind Franklin, deren Arbeit für die Entdeckung wesentlich war, war 1958 gestorben, und Nobelpreise werden nicht posthum verliehen.",
          nl: "Watson, Crick en Maurice Wilkins deelden de Nobelprijs voor Fysiologie of Geneeskunde van 1962. Rosalind Franklin, wiens werk essentieel was voor de ontdekking, was in 1958 overleden en Nobelprijzen worden niet posthum toegekend."
        }
      }
    ],

    // Day 29 - February 29th: Leap Year Day
    day29: [
      {
        question: {
          en: "On February 29, 1504, Christopher Columbus used his knowledge of what astronomical event to convince Jamaican natives to provide supplies?",
          es: "El 29 de febrero de 1504, Cristóbal Colón usó su conocimiento de qué evento astronómico para convencer a los nativos jamaicanos de proporcionar suministros?",
          de: "Am 29. Februar 1504 nutzte Christoph Kolumbus sein Wissen über welches astronomische Ereignis, um jamaikanische Eingeborene zu überzeugen, Vorräte bereitzustellen?",
          nl: "Op 29 februari 1504 gebruikte Christoffel Columbus zijn kennis van welke astronomische gebeurtenis om Jamaicaanse inboorlingen te overtuigen voorraden te leveren?"
        },
        options: [
          { en: "Lunar eclipse", es: "Eclipse lunar", de: "Mondfinsternis", nl: "Maansverduistering" },
          { en: "Comet appearance", es: "Aparición de cometa", de: "Kometenerscheinung", nl: "Komeetverschijning" },
          { en: "Solar eclipse", es: "Eclipse solar", de: "Sonnenfinsternis", nl: "Zonsverduistering" },
          { en: "Meteor shower", es: "Lluvia de meteoros", de: "Meteorschauer", nl: "Meteorenregen" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Columbus, stranded in Jamaica, consulted his almanac and predicted a lunar eclipse. When the eclipse occurred as foretold, the frightened natives believed he commanded the heavens and provided the supplies he needed, demonstrating the power of astronomical knowledge.",
          es: "Colón, varado en Jamaica, consultó su almanaque y predijo un eclipse lunar. Cuando el eclipse ocurrió como predijo, los nativos asustados creyeron que él comandaba los cielos y proporcionaron los suministros que necesitaba, demostrando el poder del conocimiento astronómico.",
          de: "Kolumbus, gestrandet in Jamaika, konsultierte seinen Almanach und sagte eine Mondfinsternis voraus. Als die Finsternis wie vorhergesagt eintrat, glaubten die verängstigten Eingeborenen, er beherrsche die Himmel und stellten die benötigten Vorräte bereit, was die Macht astronomischen Wissens demonstrierte.",
          nl: "Columbus, gestrand in Jamaica, raadpleegde zijn almanak en voorspelde een maansverduistering. Toen de verduistering zoals voorspeld plaatsvond, geloofden de bange inboorlingen dat hij de hemelen beheerste en leverden de benodigde voorraden, wat de kracht van astronomische kennis aantoonde."
        }
      },
      {
        question: {
          en: "Which famous Italian composer, known for 'The Barber of Seville', was born on February 29, 1792?",
          es: "¿Qué famoso compositor italiano, conocido por 'El Barbero de Sevilla', nació el 29 de febrero de 1792?",
          de: "Welcher berühmte italienische Komponist, bekannt für 'Der Barbier von Sevilla', wurde am 29. Februar 1792 geboren?",
          nl: "Welke beroemde Italiaanse componist, bekend om 'De Barbier van Sevilla', werd geboren op 29 februari 1792?"
        },
        options: [
          { en: "Gioacchino Rossini", es: "Gioacchino Rossini", de: "Gioacchino Rossini", nl: "Gioacchino Rossini" },
          { en: "Giuseppe Verdi", es: "Giuseppe Verdi", de: "Giuseppe Verdi", nl: "Giuseppe Verdi" },
          { en: "Giacomo Puccini", es: "Giacomo Puccini", de: "Giacomo Puccini", nl: "Giacomo Puccini" },
          { en: "Vincenzo Bellini", es: "Vincenzo Bellini", de: "Vincenzo Bellini", nl: "Vincenzo Bellini" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Rossini was one of opera's greatest composers, creating over 40 operas during his career. Born on leap day, he joked that he only celebrated his actual birthday every four years, making him technically much younger than his chronological age.",
          es: "Rossini fue uno de los más grandes compositores de ópera, creando más de 40 óperas durante su carrera. Nacido en día bisiesto, bromeaba que solo celebraba su verdadero cumpleaños cada cuatro años, haciéndolo técnicamente mucho más joven que su edad cronológica.",
          de: "Rossini war einer der größten Opernkomponisten und schuf während seiner Karriere über 40 Opern. Am Schalttag geboren, scherzte er, dass er nur alle vier Jahre seinen tatsächlichen Geburtstag feiere, was ihn technisch viel jünger machte als sein chronologisches Alter.",
          nl: "Rossini was een van de grootste operacomponisten en creëerde meer dan 40 opera's tijdens zijn carrière. Geboren op schrikkeldag, grapte hij dat hij alleen elke vier jaar zijn echte verjaardag vierde, waardoor hij technisch veel jonger was dan zijn chronologische leeftijd."
        }
      },
      {
        question: {
          en: "People born on February 29 are called what special name?",
          es: "¿Cómo se llama especialmente a las personas nacidas el 29 de febrero?",
          de: "Wie werden Menschen genannt, die am 29. Februar geboren sind?",
          nl: "Hoe worden mensen genoemd die geboren zijn op 29 februari?"
        },
        options: [
          { en: "Rare borns", es: "Nacidos raros", de: "Seltengeborene", nl: "Zeldzaam geborenen" },
          { en: "Februarians", es: "Febreños", de: "Februaristen", nl: "Februaristen" },
          { en: "Day jumpers", es: "Saltadores de día", de: "Tagesspringer", nl: "Dagspringers" },
          { en: "Leaplings", es: "Bisiestos", de: "Schalttagskinder", nl: "Schrikkeldagkinderen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Leaplings or leapers have the unique distinction of celebrating birthdays only once every four years. Many choose to celebrate on February 28 or March 1 in non-leap years, creating a special bond among this rare birthday club.",
          es: "Los bisiestos tienen la distinción única de celebrar cumpleaños solo una vez cada cuatro años. Muchos eligen celebrar el 28 de febrero o el 1 de marzo en años no bisiestos, creando un vínculo especial entre este raro club de cumpleaños.",
          de: "Schalttagskinder haben die einzigartige Auszeichnung, nur alle vier Jahre Geburtstag zu feiern. Viele wählen in Nicht-Schaltjahren den 28. Februar oder 1. März zur Feier, was eine besondere Verbindung innerhalb dieses seltenen Geburtstags-Clubs schafft.",
          nl: "Schrikkeldagkinderen hebben de unieke onderscheiding om slechts eens in de vier jaar verjaardag te vieren. Velen kiezen ervoor om op 28 februari of 1 maart te vieren in niet-schrikkeljaren, wat een speciale band creëert binnen deze zeldzame verjaardagsclub."
        }
      },
      {
        question: {
          en: "Approximately how many people worldwide are estimated to be born on leap day (February 29)?",
          es: "¿Aproximadamente cuántas personas en el mundo se estima que nacen en el día bisiesto (29 de febrero)?",
          de: "Wie viele Menschen weltweit werden schätzungsweise am Schalttag (29. Februar) geboren?",
          nl: "Hoeveel mensen wereldwijd worden naar schatting geboren op schrikkeldag (29 februari)?"
        },
        options: [
          { en: "10 million", es: "10 millones", de: "10 Millionen", nl: "10 miljoen" },
          { en: "500 thousand", es: "500 mil", de: "500 Tausend", nl: "500 duizend" },
          { en: "1 million", es: "1 millón", de: "1 Million", nl: "1 miljoen" },
          { en: "5 million", es: "5 millones", de: "5 Millionen", nl: "5 miljoen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "With odds of about 1 in 1,461 births occurring on February 29, leaplings form a rare global community. This translates to approximately 5 million people worldwide who share this unique birthday, representing less than 0.07% of the world's population.",
          es: "Con probabilidades de aproximadamente 1 en 1,461 nacimientos que ocurren el 29 de febrero, los bisiestos forman una rara comunidad global. Esto se traduce en aproximadamente 5 millones de personas en todo el mundo que comparten este cumpleaños único, representando menos del 0.07% de la población mundial.",
          de: "Mit einer Wahrscheinlichkeit von etwa 1 zu 1.461 Geburten am 29. Februar bilden Schalttagskinder eine seltene globale Gemeinschaft. Dies entspricht etwa 5 Millionen Menschen weltweit, die diesen einzigartigen Geburtstag teilen und weniger als 0,07% der Weltbevölkerung ausmachen.",
          nl: "Met een kans van ongeveer 1 op 1.461 geboorten die plaatsvinden op 29 februari, vormen schrikkeldagkinderen een zeldzame wereldwijde gemeenschap. Dit komt neer op ongeveer 5 miljoen mensen wereldwijd die deze unieke verjaardag delen, wat minder dan 0,07% van de wereldbevolking vertegenwoordigt."
        }
      },
      {
        question: {
          en: "Which motivational speaker and author, born on February 29, 1960, is known for his infomercials and seminars?",
          es: "¿Qué orador motivacional y autor, nacido el 29 de febrero de 1960, es conocido por sus infomerciales y seminarios?",
          de: "Welcher Motivationsredner und Autor, geboren am 29. Februar 1960, ist bekannt für seine Infomercials und Seminare?",
          nl: "Welke motiverende spreker en auteur, geboren op 29 februari 1960, is bekend om zijn infomercials en seminars?"
        },
        options: [
          { en: "Tony Robbins", es: "Tony Robbins", de: "Tony Robbins", nl: "Tony Robbins" },
          { en: "Deepak Chopra", es: "Deepak Chopra", de: "Deepak Chopra", nl: "Deepak Chopra" },
          { en: "Wayne Dyer", es: "Wayne Dyer", de: "Wayne Dyer", nl: "Wayne Dyer" },
          { en: "Zig Ziglar", es: "Zig Ziglar", de: "Zig Ziglar", nl: "Zig Ziglar" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Tony Robbins is a renowned life coach and self-help author who has helped millions through his seminars and programs. As a leap day baby, he often jokes about his unique birthday, though his influence on personal development has been timeless and ageless.",
          es: "Tony Robbins es un reconocido coach de vida y autor de autoayuda que ha ayudado a millones a través de sus seminarios y programas. Como bebé del día bisiesto, a menudo bromea sobre su cumpleaños único, aunque su influencia en el desarrollo personal ha sido atemporal y sin edad.",
          de: "Tony Robbins ist ein renommierter Life-Coach und Selbsthilfe-Autor, der Millionen durch seine Seminare und Programme geholfen hat. Als Schalttagskind scherzt er oft über seinen einzigartigen Geburtstag, obwohl sein Einfluss auf die Persönlichkeitsentwicklung zeitlos und alterslos war.",
          nl: "Tony Robbins is een gerenommeerde levenscoach en zelfhulpauteur die miljoenen heeft geholpen via zijn seminars en programma's. Als schrikkeldagbaby maakt hij vaak grappen over zijn unieke verjaardag, hoewel zijn invloed op persoonlijke ontwikkeling tijdloos en leeftijdloos is geweest."
        }
      }
    ]
    // Total: 29 days × 5 questions = 145 questions
  };

  // Export February challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('february', februaryChallenges);
  }

})();