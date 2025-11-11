// October Daily Challenges - 31 days × 5 questions each = 155 total questions
// Each day features historically accurate events, famous birthdays/deaths, and seasonal themes
(function() {
  
  const octoberChallenges = {
    name: {
      en: "October Daily Challenges",
      es: "Desafíos Diarios de Octubre", 
      de: "Oktober Tägliche Herausforderungen",
      nl: "Oktober Dagelijkse Uitdagingen"
    },
    
    // Day 1 - October 1st: Yosemite National Park (1890), People's Republic of China founded (1949), Jimmy Carter born (1924), Nigeria independence (1960)
    day1: [
      {
        question: {
          en: "In what year was Yosemite designated as a National Park?",
          es: "¿En qué año fue designado Yosemite como Parque Nacional?",
          de: "In welchem Jahr wurde Yosemite zum Nationalpark erklärt?",
          nl: "In welk jaar werd Yosemite aangewezen als Nationaal Park?"
        },
        options: [
          { en: "1872", es: "1872", de: "1872", nl: "1872" },
          { en: "1890", es: "1890", de: "1890", nl: "1890" },
          { en: "1906", es: "1906", de: "1906", nl: "1906" },
          { en: "1916", es: "1916", de: "1916", nl: "1916" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Yosemite was designated as a National Park on October 1, 1890, making it one of America's oldest national parks. The park protects 750,000 acres of Sierra Nevada wilderness, including iconic landmarks like Half Dome and El Capitan. It was originally protected as a state park in 1864, thanks to efforts by conservationist John Muir.",
          es: "Yosemite fue designado como Parque Nacional el 1 de octubre de 1890, convirtiéndolo en uno de los parques nacionales más antiguos de América. El parque protege 750,000 acres de naturaleza salvaje de Sierra Nevada, incluyendo lugares emblemáticos como Half Dome y El Capitan. Fue originalmente protegido como parque estatal en 1864, gracias a los esfuerzos del conservacionista John Muir.",
          de: "Yosemite wurde am 1. Oktober 1890 zum Nationalpark erklärt und ist damit einer der ältesten Nationalparks Amerikas. Der Park schützt 750.000 Acres Sierra Nevada-Wildnis, einschließlich ikonischer Wahrzeichen wie Half Dome und El Capitan. Er wurde ursprünglich 1864 als State Park geschützt, dank der Bemühungen des Naturschützers John Muir.",
          nl: "Yosemite werd op 1 oktober 1890 aangewezen als Nationaal Park, waardoor het een van Amerika's oudste nationale parken werd. Het park beschermt 750.000 acres Sierra Nevada-wildernis, inclusief iconische bezienswaardigheden zoals Half Dome en El Capitan. Het werd oorspronkelijk in 1864 als staatspark beschermd, dankzij inspanningen van natuurbeschermer John Muir."
        }
      },
      {
        question: {
          en: "The People's Republic of China was founded on October 1, 1949. Who proclaimed its establishment?",
          es: "La República Popular China fue fundada el 1 de octubre de 1949. ¿Quién proclamó su establecimiento?",
          de: "Die Volksrepublik China wurde am 1. Oktober 1949 gegründet. Wer verkündete ihre Gründung?",
          nl: "De Volksrepubliek China werd op 1 oktober 1949 opgericht. Wie proclameerde de oprichting?"
        },
        options: [
          { en: "Sun Yat-sen", es: "Sun Yat-sen", de: "Sun Yat-sen", nl: "Sun Yat-sen" },
          { en: "Chiang Kai-shek", es: "Chiang Kai-shek", de: "Chiang Kai-shek", nl: "Chiang Kai-shek" },
          { en: "Mao Zedong", es: "Mao Zedong", de: "Mao Zedong", nl: "Mao Zedong" },
          { en: "Deng Xiaoping", es: "Deng Xiaoping", de: "Deng Xiaoping", nl: "Deng Xiaoping" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Mao Zedong proclaimed the founding of the People's Republic of China from Tiananmen Square in Beijing on October 1, 1949. This followed the Communist victory in the Chinese Civil War. The date is now celebrated annually as China's National Day. This marked the beginning of Communist rule in mainland China that continues to this day.",
          es: "Mao Zedong proclamó la fundación de la República Popular China desde la Plaza de Tiananmen en Beijing el 1 de octubre de 1949. Esto siguió a la victoria comunista en la Guerra Civil China. La fecha ahora se celebra anualmente como el Día Nacional de China. Esto marcó el comienzo del gobierno comunista en China continental que continúa hasta el día de hoy.",
          de: "Mao Zedong verkündete die Gründung der Volksrepublik China vom Platz des Himmlischen Friedens in Peking am 1. Oktober 1949. Dies folgte dem kommunistischen Sieg im Chinesischen Bürgerkrieg. Das Datum wird jetzt jährlich als Chinas Nationalfeiertag gefeiert. Dies markierte den Beginn der kommunistischen Herrschaft auf dem chinesischen Festland, die bis heute andauert.",
          nl: "Mao Zedong proclameerde de oprichting van de Volksrepubliek China vanaf het Tiananmen-plein in Peking op 1 oktober 1949. Dit volgde op de communistische overwinning in de Chinese Burgeroorlog. De datum wordt nu jaarlijks gevierd als China's Nationale Dag. Dit markeerde het begin van de communistische heerschappij op het Chinese vasteland dat tot op de dag van vandaag voortduurt."
        }
      },
      {
        question: {
          en: "Which U.S. President, born on October 1, 1924, won the Nobel Peace Prize in 2002?",
          es: "¿Qué presidente de EE.UU., nacido el 1 de octubre de 1924, ganó el Premio Nobel de la Paz en 2002?",
          de: "Welcher US-Präsident, geboren am 1. Oktober 1924, gewann 2002 den Friedensnobelpreis?",
          nl: "Welke Amerikaanse president, geboren op 1 oktober 1924, won de Nobelprijs voor de Vrede in 2002?"
        },
        options: [
          { en: "Ronald Reagan", es: "Ronald Reagan", de: "Ronald Reagan", nl: "Ronald Reagan" },
          { en: "George H.W. Bush", es: "George H.W. Bush", de: "George H.W. Bush", nl: "George H.W. Bush" },
          { en: "Jimmy Carter", es: "Jimmy Carter", de: "Jimmy Carter", nl: "Jimmy Carter" },
          { en: "Gerald Ford", es: "Gerald Ford", de: "Gerald Ford", nl: "Gerald Ford" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Jimmy Carter, the 39th President of the United States, was born on October 1, 1924. He received the Nobel Peace Prize in 2002 for his decades of work to find peaceful solutions to international conflicts and advance democracy and human rights. His presidency from 1977-1981 was marked by the Camp David Accords between Israel and Egypt.",
          es: "Jimmy Carter, el 39º Presidente de los Estados Unidos, nació el 1 de octubre de 1924. Recibió el Premio Nobel de la Paz en 2002 por sus décadas de trabajo para encontrar soluciones pacíficas a conflictos internacionales y avanzar en la democracia y los derechos humanos. Su presidencia de 1977-1981 estuvo marcada por los Acuerdos de Camp David entre Israel y Egipto.",
          de: "Jimmy Carter, der 39. Präsident der Vereinigten Staaten, wurde am 1. Oktober 1924 geboren. Er erhielt 2002 den Friedensnobelpreis für seine jahrzehntelange Arbeit zur Findung friedlicher Lösungen für internationale Konflikte und zur Förderung von Demokratie und Menschenrechten. Seine Präsidentschaft von 1977-1981 war geprägt von den Camp-David-Abkommen zwischen Israel und Ägypten.",
          nl: "Jimmy Carter, de 39e president van de Verenigde Staten, werd geboren op 1 oktober 1924. Hij ontving de Nobelprijs voor de Vrede in 2002 voor zijn decennialange werk om vreedzame oplossingen te vinden voor internationale conflicten en democratie en mensenrechten te bevorderen. Zijn presidentschap van 1977-1981 werd gekenmerkt door de Camp David-akkoorden tussen Israël en Egypte."
        }
      },
      {
        question: {
          en: "Nigeria gained independence from which colonial power on October 1, 1960?",
          es: "Nigeria obtuvo la independencia de qué potencia colonial el 1 de octubre de 1960?",
          de: "Nigeria erlangte am 1. Oktober 1960 die Unabhängigkeit von welcher Kolonialmacht?",
          nl: "Nigeria kreeg op 1 oktober 1960 onafhankelijkheid van welke koloniale macht?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "Portugal", es: "Portugal", de: "Portugal", nl: "Portugal" },
          { en: "Belgium", es: "Bélgica", de: "Belgien", nl: "België" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nigeria gained independence from the United Kingdom on October 1, 1960, becoming a sovereign nation. The country had been under British colonial rule since the late 19th century. October 1st is now celebrated annually as Nigeria's Independence Day. Nigeria is Africa's most populous country and has one of the continent's largest economies.",
          es: "Nigeria obtuvo la independencia del Reino Unido el 1 de octubre de 1960, convirtiéndose en una nación soberana. El país había estado bajo dominio colonial británico desde finales del siglo XIX. El 1 de octubre ahora se celebra anualmente como el Día de la Independencia de Nigeria. Nigeria es el país más poblado de África y tiene una de las economías más grandes del continente.",
          de: "Nigeria erlangte am 1. Oktober 1960 die Unabhängigkeit vom Vereinigten Königreich und wurde eine souveräne Nation. Das Land stand seit dem späten 19. Jahrhundert unter britischer Kolonialherrschaft. Der 1. Oktober wird jetzt jährlich als Nigerias Unabhängigkeitstag gefeiert. Nigeria ist Afrikas bevölkerungsreichstes Land und hat eine der größten Volkswirtschaften des Kontinents.",
          nl: "Nigeria kreeg op 1 oktober 1960 onafhankelijkheid van het Verenigd Koninkrijk en werd een soevereine natie. Het land stond sinds de late 19e eeuw onder Britse koloniale heerschappij. 1 oktober wordt nu jaarlijks gevierd als Nigeria's Onafhankelijkheidsdag. Nigeria is Afrika's dichtstbevolkte land en heeft een van de grootste economieën van het continent."
        }
      },
      {
        question: {
          en: "What is the birthstone traditionally associated with October?",
          es: "¿Cuál es la piedra de nacimiento tradicionalmente asociada con octubre?",
          de: "Welcher Geburtsstein wird traditionell mit Oktober assoziiert?",
          nl: "Welke geboortesteen wordt traditioneel geassocieerd met oktober?"
        },
        options: [
          { en: "Sapphire", es: "Zafiro", de: "Saphir", nl: "Saffier" },
          { en: "Opal", es: "Ópalo", de: "Opal", nl: "Opaal" },
          { en: "Emerald", es: "Esmeralda", de: "Smaragd", nl: "Smaragd" },
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Opal is the traditional birthstone for October, known for its unique play of colors called 'opalescence.' The stone can display a rainbow of colors within a single gem. Tourmaline is also recognized as an October birthstone. Opals have been prized throughout history and were especially popular during the Victorian era.",
          es: "El ópalo es la piedra de nacimiento tradicional de octubre, conocida por su juego único de colores llamado 'opalescencia'. La piedra puede mostrar un arcoíris de colores dentro de una sola gema. La turmalina también es reconocida como piedra de nacimiento de octubre. Los ópalos han sido apreciados a lo largo de la historia y fueron especialmente populares durante la era victoriana.",
          de: "Opal ist der traditionelle Geburtsstein für Oktober, bekannt für sein einzigartiges Farbenspiel namens 'Opalisieren'. Der Stein kann einen Regenbogen von Farben innerhalb eines einzelnen Edelsteins zeigen. Turmalin wird ebenfalls als Oktober-Geburtsstein anerkannt. Opale wurden im Laufe der Geschichte geschätzt und waren besonders während der viktorianischen Ära beliebt.",
          nl: "Opaal is de traditionele geboortesteen voor oktober, bekend om zijn unieke kleurenspel genaamd 'opalisatie'. De steen kan een regenboog van kleuren vertonen binnen één enkel edelsteen. Toermalijn wordt ook erkend als een oktober geboortesteen. Opalen werden door de geschiedenis heen gewaardeerd en waren vooral populair tijdens het Victoriaanse tijdperk."
        }
      }
    ],

    // Day 2 - October 2nd: Gandhi born (1869), Thurgood Marshall sworn in (1967), Peanuts comic strip debuts (1950), Guinea independence (1958)
    day2: [
      {
        question: {
          en: "Mahatma Gandhi, born on October 2, 1869, led India's independence movement using which philosophy?",
          es: "Mahatma Gandhi, nacido el 2 de octubre de 1869, dirigió el movimiento de independencia de India usando qué filosofía?",
          de: "Mahatma Gandhi, geboren am 2. Oktober 1869, führte Indiens Unabhängigkeitsbewegung mit welcher Philosophie?",
          nl: "Mahatma Gandhi, geboren op 2 oktober 1869, leidde India's onafhankelijkheidsbeweging met welke filosofie?"
        },
        options: [
          { en: "Violent revolution", es: "Revolución violenta", de: "Gewaltsame Revolution", nl: "Gewelddadige revolutie" },
          { en: "Nonviolent resistance", es: "Resistencia no violenta", de: "Gewaltloser Widerstand", nl: "Geweldloos verzet" },
          { en: "Political alliance", es: "Alianza política", de: "Politisches Bündnis", nl: "Politieke alliantie" },
          { en: "Economic boycott only", es: "Solo boicot económico", de: "Nur wirtschaftlicher Boykott", nl: "Alleen economische boycot" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Gandhi led India's independence movement through nonviolent resistance, a philosophy he called 'Satyagraha' (truth force). His peaceful protests, civil disobedience, and moral leadership inspired millions and eventually led to India's independence in 1947. His methods influenced civil rights leaders worldwide, including Martin Luther King Jr. Gandhi's birthday is celebrated as the International Day of Non-Violence.",
          es: "Gandhi dirigió el movimiento de independencia de India a través de la resistencia no violenta, una filosofía que llamó 'Satyagraha' (fuerza de la verdad). Sus protestas pacíficas, desobediencia civil y liderazgo moral inspiraron a millones y finalmente llevaron a la independencia de India en 1947. Sus métodos influyeron en líderes de derechos civiles en todo el mundo, incluido Martin Luther King Jr. El cumpleaños de Gandhi se celebra como el Día Internacional de la No Violencia.",
          de: "Gandhi führte Indiens Unabhängigkeitsbewegung durch gewaltlosen Widerstand, eine Philosophie, die er 'Satyagraha' (Wahrheitskraft) nannte. Seine friedlichen Proteste, ziviler Ungehorsam und moralische Führung inspirierten Millionen und führten schließlich 1947 zu Indiens Unabhängigkeit. Seine Methoden beeinflussten Bürgerrechtsführer weltweit, einschließlich Martin Luther King Jr. Gandhis Geburtstag wird als Internationaler Tag der Gewaltlosigkeit gefeiert.",
          nl: "Gandhi leidde India's onafhankelijkheidsbeweging door geweldloos verzet, een filosofie die hij 'Satyagraha' (waarheidskracht) noemde. Zijn vreedzame protesten, burgerlijke ongehoorzaamheid en moreel leiderschap inspireerden miljoenen en leidden uiteindelijk tot India's onafhankelijkheid in 1947. Zijn methoden beïnvloedden burgerrechtenleiders wereldwijd, waaronder Martin Luther King Jr. Gandhi's verjaardag wordt gevierd als de Internationale Dag van Geweldloosheid."
        }
      },
      {
        question: {
          en: "Thurgood Marshall, sworn in on October 2, 1967, became the first African American to hold which position?",
          es: "Thurgood Marshall, juramentado el 2 de octubre de 1967, se convirtió en el primer afroamericano en ocupar qué posición?",
          de: "Thurgood Marshall, vereidigt am 2. Oktober 1967, wurde der erste Afroamerikaner in welcher Position?",
          nl: "Thurgood Marshall, beëdigd op 2 oktober 1967, werd de eerste Afro-Amerikaan die welke positie bekleedde?"
        },
        options: [
          { en: "U.S. Senator", es: "Senador de EE.UU.", de: "US-Senator", nl: "Amerikaanse Senator" },
          { en: "Supreme Court Justice", es: "Juez de la Corte Suprema", de: "Richter am Obersten Gerichtshof", nl: "Rechter van het Hooggerechtshof" },
          { en: "Secretary of State", es: "Secretario de Estado", de: "Außenminister", nl: "Minister van Buitenlandse Zaken" },
          { en: "Attorney General", es: "Fiscal General", de: "Generalstaatsanwalt", nl: "Procureur-generaal" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Thurgood Marshall became the first African American Supreme Court Justice when he was sworn in on October 2, 1967. Before joining the Court, he was the lead attorney in Brown v. Board of Education, the landmark case that ended school segregation. Marshall served on the Supreme Court for 24 years, championing civil rights and individual liberties until his retirement in 1991.",
          es: "Thurgood Marshall se convirtió en el primer juez afroamericano de la Corte Suprema cuando fue juramentado el 2 de octubre de 1967. Antes de unirse a la Corte, fue el abogado principal en Brown v. Board of Education, el caso histórico que terminó con la segregación escolar. Marshall sirvió en la Corte Suprema durante 24 años, defendiendo los derechos civiles y las libertades individuales hasta su retiro en 1991.",
          de: "Thurgood Marshall wurde der erste afroamerikanische Richter am Obersten Gerichtshof, als er am 2. Oktober 1967 vereidigt wurde. Bevor er dem Gericht beitrat, war er der Hauptanwalt in Brown v. Board of Education, dem bahnbrechenden Fall, der die Schultrennung beendete. Marshall diente 24 Jahre am Obersten Gerichtshof und setzte sich für Bürgerrechte und individuelle Freiheiten ein, bis er 1991 in den Ruhestand ging.",
          nl: "Thurgood Marshall werd de eerste Afro-Amerikaanse rechter van het Hooggerechtshof toen hij op 2 oktober 1967 werd beëdigd. Voordat hij zich bij het Hof voegde, was hij de hoofdadvocaat in Brown v. Board of Education, de baanbrekende zaak die schoolsegregatie beëindigde. Marshall diende 24 jaar bij het Hooggerechtshof en streed voor burgerrechten en individuele vrijheden tot zijn pensionering in 1991."
        }
      },
      {
        question: {
          en: "Which beloved comic strip, featuring Charlie Brown, debuted on October 2, 1950?",
          es: "¿Qué querida tira cómica, con Charlie Brown, debutó el 2 de octubre de 1950?",
          de: "Welcher beliebte Comic-Strip mit Charlie Brown debütierte am 2. Oktober 1950?",
          nl: "Welke geliefde stripverhaal, met Charlie Brown, debuteerde op 2 oktober 1950?"
        },
        options: [
          { en: "Calvin and Hobbes", es: "Calvin y Hobbes", de: "Calvin und Hobbes", nl: "Calvin en Hobbes" },
          { en: "Garfield", es: "Garfield", de: "Garfield", nl: "Garfield" },
          { en: "Peanuts", es: "Peanuts", de: "Peanuts", nl: "Peanuts" },
          { en: "Dilbert", es: "Dilbert", de: "Dilbert", nl: "Dilbert" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Peanuts, created by Charles M. Schulz, debuted on October 2, 1950, and ran for nearly 50 years until 2000. The strip featured Charlie Brown, Snoopy, Lucy, Linus, and other memorable characters. Peanuts became one of the most influential and beloved comic strips of all time, spawning TV specials, movies, and merchandise. The strip appeared in over 2,600 newspapers at its peak.",
          es: "Peanuts, creado por Charles M. Schulz, debutó el 2 de octubre de 1950 y se publicó durante casi 50 años hasta 2000. La tira presentaba a Charlie Brown, Snoopy, Lucy, Linus y otros personajes memorables. Peanuts se convirtió en una de las tiras cómicas más influyentes y queridas de todos los tiempos, generando especiales de televisión, películas y mercancía. La tira apareció en más de 2,600 periódicos en su apogeo.",
          de: "Peanuts, geschaffen von Charles M. Schulz, debütierte am 2. Oktober 1950 und lief fast 50 Jahre bis 2000. Der Strip zeigte Charlie Brown, Snoopy, Lucy, Linus und andere unvergessliche Charaktere. Peanuts wurde zu einem der einflussreichsten und beliebtesten Comic-Strips aller Zeiten und brachte TV-Specials, Filme und Merchandise hervor. Der Strip erschien auf seinem Höhepunkt in über 2.600 Zeitungen.",
          nl: "Peanuts, gemaakt door Charles M. Schulz, debuteerde op 2 oktober 1950 en liep bijna 50 jaar tot 2000. De strip bevatte Charlie Brown, Snoopy, Lucy, Linus en andere memorabele personages. Peanuts werd een van de meest invloedrijke en geliefde stripverhalen aller tijden, met TV-specials, films en merchandise. De strip verscheen op zijn hoogtepunt in meer dan 2.600 kranten."
        }
      },
      {
        question: {
          en: "Guinea gained independence from France on October 2, 1958, becoming the first of how many French African colonies to do so?",
          es: "Guinea obtuvo la independencia de Francia el 2 de octubre de 1958, convirtiéndose en la primera de cuántas colonias africanas francesas en hacerlo?",
          de: "Guinea erlangte am 2. Oktober 1958 die Unabhängigkeit von Frankreich und wurde die erste von wie vielen französischen afrikanischen Kolonien?",
          nl: "Guinea kreeg op 2 oktober 1958 onafhankelijkheid van Frankrijk en werd de eerste van hoeveel Franse Afrikaanse kolonies om dit te doen?"
        },
        options: [
          { en: "Fifth", es: "Quinta", de: "Fünfte", nl: "Vijfde" },
          { en: "First", es: "Primera", de: "Erste", nl: "Eerste" },
          { en: "Third", es: "Tercera", de: "Dritte", nl: "Derde" },
          { en: "Second", es: "Segunda", de: "Zweite", nl: "Tweede" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Guinea became the first French African colony to gain independence when it voted 'No' in a referendum on remaining part of the French Community on October 2, 1958. This bold move, led by President Ahmed Sékou Touré, resulted in France withdrawing all support and resources. Guinea's independence inspired other African nations to seek their freedom, with 17 African countries gaining independence in 1960 alone.",
          es: "Guinea se convirtió en la primera colonia africana francesa en obtener la independencia cuando votó 'No' en un referéndum sobre permanecer parte de la Comunidad Francesa el 2 de octubre de 1958. Este audaz movimiento, liderado por el presidente Ahmed Sékou Touré, resultó en que Francia retirara todo apoyo y recursos. La independencia de Guinea inspiró a otras naciones africanas a buscar su libertad, con 17 países africanos obteniendo la independencia solo en 1960.",
          de: "Guinea wurde die erste französische afrikanische Kolonie, die Unabhängigkeit erlangte, als es in einem Referendum über den Verbleib in der Französischen Gemeinschaft am 2. Oktober 1958 mit 'Nein' stimmte. Dieser mutige Schritt, angeführt von Präsident Ahmed Sékou Touré, führte dazu, dass Frankreich alle Unterstützung und Ressourcen zurückzog. Guineas Unabhängigkeit inspirierte andere afrikanische Nationen, ihre Freiheit zu suchen, wobei allein 1960 17 afrikanische Länder die Unabhängigkeit erlangten.",
          nl: "Guinea werd de eerste Franse Afrikaanse kolonie die onafhankelijkheid verwierf toen het op 2 oktober 1958 'Nee' stemde in een referendum over het blijven deel uitmaken van de Franse Gemeenschap. Deze moedige stap, geleid door president Ahmed Sékou Touré, resulteerde erin dat Frankrijk alle steun en middelen introk. Guinea's onafhankelijkheid inspireerde andere Afrikaanse naties om hun vrijheid te zoeken, waarbij alleen al in 1960 17 Afrikaanse landen onafhankelijk werden."
        }
      },
      {
        question: {
          en: "October 2nd is celebrated as the International Day of Non-Violence in honor of which leader's birthday?",
          es: "El 2 de octubre se celebra como el Día Internacional de la No Violencia en honor al cumpleaños de qué líder?",
          de: "Der 2. Oktober wird als Internationaler Tag der Gewaltlosigkeit zu Ehren des Geburtstags welches Führers gefeiert?",
          nl: "2 oktober wordt gevierd als de Internationale Dag van Geweldloosheid ter ere van wiens verjaardag?"
        },
        options: [
          { en: "Nelson Mandela", es: "Nelson Mandela", de: "Nelson Mandela", nl: "Nelson Mandela" },
          { en: "Mother Teresa", es: "Madre Teresa", de: "Mutter Teresa", nl: "Moeder Teresa" },
          { en: "Mahatma Gandhi", es: "Mahatma Gandhi", de: "Mahatma Gandhi", nl: "Mahatma Gandhi" },
          { en: "Martin Luther King Jr.", es: "Martin Luther King Jr.", de: "Martin Luther King Jr.", nl: "Martin Luther King Jr." }
        ],
        correctIndex: 2,
        explanation: {
          en: "The United Nations established October 2nd as the International Day of Non-Violence in 2007, commemorating Mahatma Gandhi's birthday. The day honors Gandhi's philosophy of nonviolence and its global influence on peace movements. It aims to promote education and public awareness about non-violence through activities and messages. Gandhi's principles continue to inspire social justice movements around the world.",
          es: "Las Naciones Unidas establecieron el 2 de octubre como el Día Internacional de la No Violencia en 2007, conmemorando el cumpleaños de Mahatma Gandhi. El día honra la filosofía de no violencia de Gandhi y su influencia global en los movimientos de paz. Su objetivo es promover la educación y la conciencia pública sobre la no violencia a través de actividades y mensajes. Los principios de Gandhi continúan inspirando movimientos de justicia social en todo el mundo.",
          de: "Die Vereinten Nationen legten 2007 den 2. Oktober als Internationalen Tag der Gewaltlosigkeit fest, um Mahatma Gandhis Geburtstag zu gedenken. Der Tag ehrt Gandhis Philosophie der Gewaltlosigkeit und ihren globalen Einfluss auf Friedensbewegungen. Er zielt darauf ab, Bildung und öffentliches Bewusstsein über Gewaltlosigkeit durch Aktivitäten und Botschaften zu fördern. Gandhis Prinzipien inspirieren weiterhin soziale Gerechtigkeitsbewegungen auf der ganzen Welt.",
          nl: "De Verenigde Naties stelden 2 oktober in 2007 vast als de Internationale Dag van Geweldloosheid, ter herdenking van Mahatma Gandhi's verjaardag. De dag eert Gandhi's filosofie van geweldloosheid en de wereldwijde invloed ervan op vredesbewegingen. Het beoogt onderwijs en publiek bewustzijn over geweldloosheid te bevorderen door middel van activiteiten en boodschappen. Gandhi's principes blijven sociale rechtvaardigheidsbewegingen over de hele wereld inspireren."
        }
      }
    ],

    // Day 3 - October 3rd: Germany reunification (1990), Korean War begins at 38th parallel (1950), Honduras independence (1838)
    day3: [
      {
        question: {
          en: "Germany was reunified on October 3, 1990, after being divided for how many years?",
          es: "Alemania se reunificó el 3 de octubre de 1990, después de estar dividida durante cuántos años?",
          de: "Deutschland wurde am 3. Oktober 1990 wiedervereinigt, nachdem es wie viele Jahre geteilt war?",
          nl: "Duitsland werd herenigd op 3 oktober 1990, na hoeveel jaar verdeeld te zijn geweest?"
        },
        options: [
          { en: "35 years", es: "35 años", de: "35 Jahre", nl: "35 jaar" },
          { en: "41 years", es: "41 años", de: "41 Jahre", nl: "41 jaar" },
          { en: "45 years", es: "45 años", de: "45 Jahre", nl: "45 jaar" },
          { en: "50 years", es: "50 años", de: "50 Jahre", nl: "50 jaar" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Germany was reunified on October 3, 1990, after being divided for 41 years since 1949. The fall of the Berlin Wall in November 1989 paved the way for reunification. East Germany (German Democratic Republic) officially joined West Germany (Federal Republic of Germany), marking the end of the Cold War division. October 3rd is now celebrated as German Unity Day, the country's national holiday.",
          es: "Alemania se reunificó el 3 de octubre de 1990, después de estar dividida durante 41 años desde 1949. La caída del Muro de Berlín en noviembre de 1989 allanó el camino para la reunificación. Alemania del Este (República Democrática Alemana) se unió oficialmente a Alemania del Oeste (República Federal de Alemania), marcando el fin de la división de la Guerra Fría. El 3 de octubre ahora se celebra como el Día de la Unidad Alemana, el día nacional del país.",
          de: "Deutschland wurde am 3. Oktober 1990 wiedervereinigt, nachdem es seit 1949 41 Jahre lang geteilt war. Der Fall der Berliner Mauer im November 1989 ebnete den Weg für die Wiedervereinigung. Die DDR (Deutsche Demokratische Republik) schloss sich offiziell der BRD (Bundesrepublik Deutschland) an und markierte das Ende der Teilung im Kalten Krieg. Der 3. Oktober wird heute als Tag der Deutschen Einheit gefeiert, der Nationalfeiertag des Landes.",
          nl: "Duitsland werd herenigd op 3 oktober 1990, na 41 jaar verdeeld te zijn geweest sinds 1949. De val van de Berlijnse Muur in november 1989 maakte de weg vrij voor hereniging. Oost-Duitsland (Duitse Democratische Republiek) voegde zich officieel bij West-Duitsland (Bondsrepubliek Duitsland), wat het einde van de Koude Oorlog-verdeling markeerde. 3 oktober wordt nu gevierd als de Dag van de Duitse Eenheid, de nationale feestdag van het land."
        }
      },
      {
        question: {
          en: "The Korean War effectively began when North Korean forces crossed which latitude on June 25, 1950?",
          es: "La Guerra de Corea comenzó efectivamente cuando las fuerzas norcoreanas cruzaron qué latitud el 25 de junio de 1950?",
          de: "Der Koreakrieg begann effektiv, als nordkoreanische Streitkräfte am 25. Juni 1950 welchen Breitengrad überschritten?",
          nl: "De Koreaanse Oorlog begon effectief toen Noord-Koreaanse troepen op 25 juni 1950 welke breedtegraad overstaken?"
        },
        options: [
          { en: "17th parallel", es: "Paralelo 17", de: "17. Breitengrad", nl: "17e breedtegraad" },
          { en: "38th parallel", es: "Paralelo 38", de: "38. Breitengrad", nl: "38e breedtegraad" },
          { en: "45th parallel", es: "Paralelo 45", de: "45. Breitengrad", nl: "45e breedtegraad" },
          { en: "50th parallel", es: "Paralelo 50", de: "50. Breitengrad", nl: "50e breedtegraad" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Korean War began when North Korean forces crossed the 38th parallel on June 25, 1950, invading South Korea. The 38th parallel had divided the Korean Peninsula into Soviet and American occupation zones since 1945. The war lasted until an armistice was signed on July 27, 1953, with the border remaining near the 38th parallel. Technically, the two Koreas are still at war as no peace treaty was ever signed.",
          es: "La Guerra de Corea comenzó cuando las fuerzas norcoreanas cruzaron el paralelo 38 el 25 de junio de 1950, invadiendo Corea del Sur. El paralelo 38 había dividido la península coreana en zonas de ocupación soviética y estadounidense desde 1945. La guerra duró hasta que se firmó un armisticio el 27 de julio de 1953, con la frontera permaneciendo cerca del paralelo 38. Técnicamente, las dos Coreas todavía están en guerra ya que nunca se firmó un tratado de paz.",
          de: "Der Koreakrieg begann, als nordkoreanische Streitkräfte am 25. Juni 1950 den 38. Breitengrad überschritten und Südkorea angriffen. Der 38. Breitengrad hatte die Koreanische Halbinsel seit 1945 in sowjetische und amerikanische Besatzungszonen geteilt. Der Krieg dauerte bis zur Unterzeichnung eines Waffenstillstands am 27. Juli 1953, wobei die Grenze in der Nähe des 38. Breitengrades verblieb. Technisch gesehen befinden sich die beiden Koreas immer noch im Krieg, da nie ein Friedensvertrag unterzeichnet wurde.",
          nl: "De Koreaanse Oorlog begon toen Noord-Koreaanse troepen op 25 juni 1950 de 38e breedtegraad overstaken en Zuid-Korea binnenvielen. De 38e breedtegraad had het Koreaanse schiereiland sinds 1945 verdeeld in Sovjet- en Amerikaanse bezettingszones. De oorlog duurde tot een wapenstilstand werd ondertekend op 27 juli 1953, waarbij de grens nabij de 38e breedtegraad bleef. Technisch gezien zijn de twee Korea's nog steeds in oorlog omdat er nooit een vredesverdrag is ondertekend."
        }
      },
      {
        question: {
          en: "Honduras gained independence on October 3, 1838, separating from which federation?",
          es: "Honduras obtuvo la independencia el 3 de octubre de 1838, separándose de qué federación?",
          de: "Honduras erlangte am 3. Oktober 1838 die Unabhängigkeit und trennte sich von welcher Föderation?",
          nl: "Honduras kreeg op 3 oktober 1838 onafhankelijkheid, door zich af te scheiden van welke federatie?"
        },
        options: [
          { en: "Gran Colombia", es: "Gran Colombia", de: "Großkolumbien", nl: "Groot-Colombia" },
          { en: "Federal Republic of Central America", es: "República Federal de Centroamérica", de: "Bundesrepublik Zentralamerika", nl: "Federale Republiek van Midden-Amerika" },
          { en: "United Provinces of South America", es: "Provincias Unidas de Sudamérica", de: "Vereinigte Provinzen Südamerikas", nl: "Verenigde Provinciën van Zuid-Amerika" },
          { en: "Mexican Empire", es: "Imperio Mexicano", de: "Mexikanisches Kaiserreich", nl: "Mexicaanse Keizerrijk" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Honduras gained full independence on October 3, 1838, when it separated from the Federal Republic of Central America. The federation had united five Central American nations after they gained independence from Spain in 1821. Internal conflicts and regional differences led to the federation's dissolution between 1838-1841. Honduras, along with Guatemala, El Salvador, Nicaragua, and Costa Rica, became independent republics.",
          es: "Honduras obtuvo la independencia total el 3 de octubre de 1838, cuando se separó de la República Federal de Centroamérica. La federación había unido cinco naciones centroamericanas después de que obtuvieron la independencia de España en 1821. Los conflictos internos y las diferencias regionales llevaron a la disolución de la federación entre 1838-1841. Honduras, junto con Guatemala, El Salvador, Nicaragua y Costa Rica, se convirtieron en repúblicas independientes.",
          de: "Honduras erlangte am 3. Oktober 1838 die volle Unabhängigkeit, als es sich von der Bundesrepublik Zentralamerika trennte. Die Föderation hatte fünf zentralamerikanische Nationen vereint, nachdem sie 1821 die Unabhängigkeit von Spanien erlangt hatten. Interne Konflikte und regionale Unterschiede führten zur Auflösung der Föderation zwischen 1838-1841. Honduras wurde zusammen mit Guatemala, El Salvador, Nicaragua und Costa Rica unabhängige Republik.",
          nl: "Honduras kreeg volledige onafhankelijkheid op 3 oktober 1838, toen het zich afscheidde van de Federale Republiek van Midden-Amerika. De federatie had vijf Midden-Amerikaanse naties verenigd nadat ze in 1821 onafhankelijkheid van Spanje hadden verkregen. Interne conflicten en regionale verschillen leidden tot de ontbinding van de federatie tussen 1838-1841. Honduras werd, samen met Guatemala, El Salvador, Nicaragua en Costa Rica, onafhankelijke republiek."
        }
      },
      {
        question: {
          en: "What famous structure divided Berlin from 1961 until it fell in 1989?",
          es: "¿Qué famosa estructura dividió Berlín desde 1961 hasta su caída en 1989?",
          de: "Welche berühmte Struktur teilte Berlin von 1961 bis zu ihrem Fall 1989?",
          nl: "Welke beroemde structuur verdeelde Berlijn van 1961 tot de val ervan in 1989?"
        },
        options: [
          { en: "Berlin Wall", es: "Muro de Berlín", de: "Berliner Mauer", nl: "Berlijnse Muur" },
          { en: "Brandenburg Gate", es: "Puerta de Brandenburgo", de: "Brandenburger Tor", nl: "Brandenburger Tor" },
          { en: "Checkpoint Charlie", es: "Checkpoint Charlie", de: "Checkpoint Charlie", nl: "Checkpoint Charlie" },
          { en: "Iron Curtain", es: "Telón de Acero", de: "Eiserner Vorhang", nl: "IJzeren Gordijn" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Berlin Wall was constructed in 1961 to divide East and West Berlin, preventing East Germans from fleeing to the West. The concrete barrier stretched 96 miles and became the most powerful symbol of the Cold War. It fell on November 9, 1989, in a peaceful revolution, paving the way for German reunification less than a year later. Pieces of the wall are preserved as historical monuments worldwide.",
          es: "El Muro de Berlín fue construido en 1961 para dividir Berlín Este y Oeste, impidiendo que los alemanes del Este huyeran al Oeste. La barrera de concreto se extendía 96 millas y se convirtió en el símbolo más poderoso de la Guerra Fría. Cayó el 9 de noviembre de 1989, en una revolución pacífica, allanando el camino para la reunificación alemana menos de un año después. Piezas del muro se conservan como monumentos históricos en todo el mundo.",
          de: "Die Berliner Mauer wurde 1961 errichtet, um Ost- und West-Berlin zu teilen und Ostdeutsche daran zu hindern, in den Westen zu fliehen. Die Betonbarriere erstreckte sich über 96 Meilen und wurde zum mächtigsten Symbol des Kalten Krieges. Sie fiel am 9. November 1989 in einer friedlichen Revolution und ebnete den Weg für die deutsche Wiedervereinigung weniger als ein Jahr später. Stücke der Mauer werden weltweit als historische Denkmäler bewahrt.",
          nl: "De Berlijnse Muur werd in 1961 gebouwd om Oost- en West-Berlijn te verdelen en te voorkomen dat Oost-Duitsers naar het Westen vluchtten. De betonnen barrière strekte zich uit over 96 mijl en werd het machtigste symbool van de Koude Oorlog. Het viel op 9 november 1989, in een vreedzame revolutie, wat de weg vrijmaakte voor de Duitse hereniging minder dan een jaar later. Stukken van de muur worden wereldwijd bewaard als historische monumenten."
        }
      },
      {
        question: {
          en: "Which famous author, known for 'The Great Gatsby,' died on October 3, 1970?",
          es: "¿Qué famoso autor, conocido por 'El Gran Gatsby,' murió el 3 de octubre de 1970?",
          de: "Welcher berühmte Autor, bekannt für 'Der große Gatsby,' starb am 3. Oktober 1970?",
          nl: "Welke beroemde auteur, bekend van 'De Grote Gatsby,' stierf op 3 oktober 1970?"
        },
        options: [
          { en: "Ernest Hemingway", es: "Ernest Hemingway", de: "Ernest Hemingway", nl: "Ernest Hemingway" },
          { en: "William Faulkner", es: "William Faulkner", de: "William Faulkner", nl: "William Faulkner" },
          { en: "John Steinbeck", es: "John Steinbeck", de: "John Steinbeck", nl: "John Steinbeck" },
          { en: "None of these", es: "Ninguno de estos", de: "Keiner davon", nl: "Geen van deze" }
        ],
        correctIndex: 3,
        explanation: {
          en: "F. Scott Fitzgerald, author of 'The Great Gatsby,' actually died on December 21, 1940, not October 3, 1970. This question tests attention to detail. October 3, 1970, marked other historical events but not Fitzgerald's death. 'The Great Gatsby' is considered one of the greatest American novels, exploring themes of wealth, love, and the American Dream in the 1920s Jazz Age.",
          es: "F. Scott Fitzgerald, autor de 'El Gran Gatsby,' realmente murió el 21 de diciembre de 1940, no el 3 de octubre de 1970. Esta pregunta prueba la atención al detalle. El 3 de octubre de 1970 marcó otros eventos históricos pero no la muerte de Fitzgerald. 'El Gran Gatsby' se considera una de las mejores novelas estadounidenses, explorando temas de riqueza, amor y el Sueño Americano en la Era del Jazz de los años 20.",
          de: "F. Scott Fitzgerald, Autor von 'Der große Gatsby,' starb tatsächlich am 21. Dezember 1940, nicht am 3. Oktober 1970. Diese Frage testet Aufmerksamkeit für Details. Der 3. Oktober 1970 markierte andere historische Ereignisse, aber nicht Fitzgeralds Tod. 'Der große Gatsby' gilt als einer der größten amerikanischen Romane und erkundet Themen von Reichtum, Liebe und dem amerikanischen Traum im Jazz-Zeitalter der 1920er Jahre.",
          nl: "F. Scott Fitzgerald, auteur van 'De Grote Gatsby,' stierf eigenlijk op 21 december 1940, niet op 3 oktober 1970. Deze vraag test aandacht voor detail. 3 oktober 1970 markeerde andere historische gebeurtenissen maar niet Fitzgerald's dood. 'De Grote Gatsby' wordt beschouwd als een van de grootste Amerikaanse romans, die thema's van rijkdom, liefde en de Amerikaanse Droom in het Jazz-tijdperk van de jaren 1920 verkent."
        }
      }
    ],

    // Day 4 - October 4th: Sputnik launched (1957), Lesotho independence (1966), Rembrandt born (1607)
    day4: [
      {
        question: {
          en: "On October 4, 1957, the Soviet Union launched which satellite, beginning the Space Age?",
          es: "El 4 de octubre de 1957, la Unión Soviética lanzó qué satélite, comenzando la Era Espacial?",
          de: "Am 4. Oktober 1957 startete die Sowjetunion welchen Satelliten und begann das Weltraumzeitalter?",
          nl: "Op 4 oktober 1957 lanceerde de Sovjet-Unie welke satelliet, waarmee het Ruimtetijdperk begon?"
        },
        options: [
          { en: "Vostok 1", es: "Vostok 1", de: "Vostok 1", nl: "Vostok 1" },
          { en: "Apollo 1", es: "Apollo 1", de: "Apollo 1", nl: "Apollo 1" },
          { en: "Sputnik 1", es: "Sputnik 1", de: "Sputnik 1", nl: "Sputnik 1" },
          { en: "Explorer 1", es: "Explorer 1", de: "Explorer 1", nl: "Explorer 1" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Sputnik 1 was launched by the Soviet Union on October 4, 1957, becoming the first artificial satellite to orbit Earth. This 184-pound sphere shocked the world and marked the beginning of the Space Age and the Space Race between the US and USSR. Sputnik transmitted radio signals for 21 days before its batteries died, and it orbited Earth for three months before burning up in the atmosphere.",
          es: "Sputnik 1 fue lanzado por la Unión Soviética el 4 de octubre de 1957, convirtiéndose en el primer satélite artificial en orbitar la Tierra. Esta esfera de 184 libras sorprendió al mundo y marcó el comienzo de la Era Espacial y la Carrera Espacial entre EE.UU. y la URSS. Sputnik transmitió señales de radio durante 21 días antes de que sus baterías murieran, y orbitó la Tierra durante tres meses antes de quemarse en la atmósfera.",
          de: "Sputnik 1 wurde am 4. Oktober 1957 von der Sowjetunion gestartet und wurde der erste künstliche Satellit, der die Erde umkreiste. Diese 184-Pfund-Kugel schockierte die Welt und markierte den Beginn des Weltraumzeitalters und des Weltraumrennens zwischen den USA und der UdSSR. Sputnik übertrug 21 Tage lang Funksignale, bevor seine Batterien leer waren, und umkreiste die Erde drei Monate lang, bevor er in der Atmosphäre verglühte.",
          nl: "Sputnik 1 werd gelanceerd door de Sovjet-Unie op 4 oktober 1957 en werd de eerste kunstmatige satelliet die de aarde omcirkelde. Deze bol van 184 pond schokte de wereld en markeerde het begin van het Ruimtetijdperk en de Ruimtewedloop tussen de VS en de USSR. Sputnik zond 21 dagen lang radiosignalen uit voordat zijn batterijen leeg waren, en cirkelde drie maanden om de aarde voordat het in de atmosfeer verbrandde."
        }
      },
      {
        question: {
          en: "Lesotho gained independence from the United Kingdom on October 4, 1966. What is unique about Lesotho's geography?",
          es: "Lesotho obtuvo la independencia del Reino Unido el 4 de octubre de 1966. ¿Qué es único acerca de la geografía de Lesotho?",
          de: "Lesotho erlangte am 4. Oktober 1966 die Unabhängigkeit vom Vereinigten Königreich. Was ist einzigartig an Lesothos Geographie?",
          nl: "Lesotho kreeg op 4 oktober 1966 onafhankelijkheid van het Verenigd Koninkrijk. Wat is uniek aan de geografie van Lesotho?"
        },
        options: [
          { en: "It's an island nation", es: "Es una nación insular", de: "Es ist eine Inselnation", nl: "Het is een eilandnatie" },
          { en: "It's completely surrounded by South Africa", es: "Está completamente rodeado por Sudáfrica", de: "Es ist vollständig von Südafrika umgeben", nl: "Het is volledig omringd door Zuid-Afrika" },
          { en: "It's the world's smallest country", es: "Es el país más pequeño del mundo", de: "Es ist das kleinste Land der Welt", nl: "Het is het kleinste land ter wereld" },
          { en: "It has no mountains", es: "No tiene montañas", de: "Es hat keine Berge", nl: "Het heeft geen bergen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Lesotho is unique as one of only three enclaved countries in the world, meaning it is completely surrounded by another country - South Africa. It's also called the 'Kingdom in the Sky' because its entire territory is above 1,000 meters elevation, making it the only country with such a distinction. Lesotho is known for its mountainous terrain and is one of the world's highest countries.",
          es: "Lesotho es único como uno de los tres únicos países enclavados del mundo, lo que significa que está completamente rodeado por otro país: Sudáfrica. También se llama el 'Reino en el Cielo' porque todo su territorio está por encima de los 1,000 metros de elevación, lo que lo convierte en el único país con tal distinción. Lesotho es conocido por su terreno montañoso y es uno de los países más altos del mundo.",
          de: "Lesotho ist einzigartig als eines von nur drei Binnenstaaten der Welt, was bedeutet, dass es vollständig von einem anderen Land umgeben ist - Südafrika. Es wird auch 'Königreich im Himmel' genannt, weil sein gesamtes Territorium über 1.000 Meter Höhe liegt, was es zum einzigen Land mit einer solchen Auszeichnung macht. Lesotho ist bekannt für sein bergiges Gelände und ist eines der höchstgelegenen Länder der Welt.",
          nl: "Lesotho is uniek als een van slechts drie ingesloten landen ter wereld, wat betekent dat het volledig omringd is door een ander land - Zuid-Afrika. Het wordt ook wel het 'Koninkrijk in de Lucht' genoemd omdat het gehele grondgebied boven 1.000 meter hoogte ligt, waardoor het het enige land met zo'n onderscheiding is. Lesotho staat bekend om zijn bergachtige terrein en is een van 's werelds hoogstgelegen landen."
        }
      },
      {
        question: {
          en: "Dutch painter Rembrandt van Rijn, born on October 4, 1607, is famous for mastering which artistic technique?",
          es: "El pintor holandés Rembrandt van Rijn, nacido el 4 de octubre de 1607, es famoso por dominar qué técnica artística?",
          de: "Der niederländische Maler Rembrandt van Rijn, geboren am 4. Oktober 1607, ist berühmt für die Beherrschung welcher künstlerischen Technik?",
          nl: "De Nederlandse schilder Rembrandt van Rijn, geboren op 4 oktober 1607, is beroemd om het beheersen van welke artistieke techniek?"
        },
        options: [
          { en: "Pointillism", es: "Puntillismo", de: "Pointillismus", nl: "Pointillisme" },
          { en: "Cubism", es: "Cubismo", de: "Kubismus", nl: "Kubisme" },
          { en: "Chiaroscuro (light and shadow)", es: "Claroscuro (luz y sombra)", de: "Chiaroscuro (Licht und Schatten)", nl: "Chiaroscuro (licht en schaduw)" },
          { en: "Impressionism", es: "Impresionismo", de: "Impressionismus", nl: "Impressionisme" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Rembrandt was a master of chiaroscuro, the dramatic use of light and shadow to create depth and emotion. His innovative techniques revolutionized portrait painting and self-portraiture during the Dutch Golden Age. Famous works include 'The Night Watch' and dozens of self-portraits. Rembrandt's mastery of light influenced generations of artists and he's considered one of the greatest painters in European art history.",
          es: "Rembrandt fue un maestro del claroscuro, el uso dramático de luz y sombra para crear profundidad y emoción. Sus técnicas innovadoras revolucionaron la pintura de retratos y el autorretrato durante la Edad de Oro holandesa. Las obras famosas incluyen 'La ronda de noche' y docenas de autorretratos. El dominio de la luz de Rembrandt influyó en generaciones de artistas y se le considera uno de los más grandes pintores en la historia del arte europeo.",
          de: "Rembrandt war ein Meister des Chiaroscuro, der dramatischen Verwendung von Licht und Schatten zur Schaffung von Tiefe und Emotion. Seine innovativen Techniken revolutionierten die Porträtmalerei und Selbstporträtmalerei während des niederländischen Goldenen Zeitalters. Berühmte Werke sind 'Die Nachtwache' und Dutzende von Selbstporträts. Rembrandts Beherrschung des Lichts beeinflusste Generationen von Künstlern und er gilt als einer der größten Maler in der europäischen Kunstgeschichte.",
          nl: "Rembrandt was een meester in chiaroscuro, het dramatische gebruik van licht en schaduw om diepte en emotie te creëren. Zijn innovatieve technieken revolutioneerden portretkunst en zelfportretkunst tijdens de Nederlandse Gouden Eeuw. Beroemde werken zijn onder meer 'De Nachtwacht' en tientallen zelfportretten. Rembrandts beheersing van licht beïnvloedde generaties kunstenaars en hij wordt beschouwd als een van de grootste schilders in de Europese kunstgeschiedenis."
        }
      },
      {
        question: {
          en: "What did Sputnik 1 primarily demonstrate to the world?",
          es: "¿Qué demostró principalmente Sputnik 1 al mundo?",
          de: "Was demonstrierte Sputnik 1 der Welt hauptsächlich?",
          nl: "Wat demonstreerde Sputnik 1 voornamelijk aan de wereld?"
        },
        options: [
          { en: "Television broadcasting capabilities", es: "Capacidades de transmisión televisiva", de: "Fernsehübertragungsfähigkeiten", nl: "Televisie-uitzendmogelijkheden" },
          { en: "Soviet technological superiority", es: "Superioridad tecnológica soviética", de: "Sowjetische technologische Überlegenheit", nl: "Sovjet-technologische superioriteit" },
          { en: "Peaceful space exploration", es: "Exploración espacial pacífica", de: "Friedliche Weltraumforschung", nl: "Vreedzame ruimteverkenning" },
          { en: "Weather prediction accuracy", es: "Precisión en predicción del tiempo", de: "Wettervorhersagegenauigkeit", nl: "Weersvoorspellingsnauwkeurigheid" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Sputnik 1's launch demonstrated Soviet technological superiority during the Cold War, shocking the United States and Western nations. The satellite proved the USSR had developed rockets capable of delivering nuclear weapons intercontinentally. This 'Sputnik Crisis' spurred the US to accelerate its space program, leading to the creation of NASA in 1958 and ultimately the moon landing in 1969. The event transformed education, technology, and military thinking in the West.",
          es: "El lanzamiento de Sputnik 1 demostró la superioridad tecnológica soviética durante la Guerra Fría, sorprendiendo a Estados Unidos y las naciones occidentales. El satélite demostró que la URSS había desarrollado cohetes capaces de entregar armas nucleares intercontinentalmente. Esta 'Crisis del Sputnik' impulsó a EE.UU. a acelerar su programa espacial, lo que llevó a la creación de la NASA en 1958 y finalmente al alunizaje en 1969. El evento transformó la educación, tecnología y pensamiento militar en Occidente.",
          de: "Der Start von Sputnik 1 demonstrierte während des Kalten Krieges die technologische Überlegenheit der Sowjetunion und schockierte die Vereinigten Staaten und westliche Nationen. Der Satellit bewies, dass die UdSSR Raketen entwickelt hatte, die in der Lage waren, Atomwaffen interkontinental zu transportieren. Diese 'Sputnik-Krise' spornte die USA an, ihr Raumfahrtprogramm zu beschleunigen, was 1958 zur Gründung der NASA und letztendlich 1969 zur Mondlandung führte. Das Ereignis veränderte Bildung, Technologie und militärisches Denken im Westen.",
          nl: "De lancering van Sputnik 1 demonstreerde de Sovjet-technologische superioriteit tijdens de Koude Oorlog, wat de Verenigde Staten en westerse naties schokte. De satelliet bewees dat de USSR raketten had ontwikkeld die in staat waren om kernwapens intercontinentaal te leveren. Deze 'Spoetnik-crisis' spoorde de VS aan om hun ruimteprogramma te versnellen, wat leidde tot de oprichting van NASA in 1958 en uiteindelijk de maanlanding in 1969. De gebeurtenis transformeerde onderwijs, technologie en militair denken in het Westen."
        }
      },
      {
        question: {
          en: "Which of Rembrandt's paintings is considered his most famous work, depicting a militia company?",
          es: "¿Cuál de las pinturas de Rembrandt es considerada su obra más famosa, que representa una compañía de milicia?",
          de: "Welches von Rembrandts Gemälden gilt als sein berühmtestes Werk und stellt eine Milizeinheit dar?",
          nl: "Welk van Rembrandts schilderijen wordt beschouwd als zijn beroemdste werk, dat een militiegezelschap afbeeldt?"
        },
        options: [
          { en: "The Storm on the Sea of Galilee", es: "La tormenta en el mar de Galilea", de: "Der Sturm auf dem See Genezareth", nl: "De storm op de zee van Galilea" },
          { en: "The Night Watch", es: "La ronda de noche", de: "Die Nachtwache", nl: "De Nachtwacht" },
          { en: "The Anatomy Lesson", es: "La lección de anatomía", de: "Die Anatomie-Stunde", nl: "De anatomische les" },
          { en: "The Jewish Bride", es: "La novia judía", de: "Die jüdische Braut", nl: "Het Joodse bruidje" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'The Night Watch' (1642) is Rembrandt's most famous painting, officially titled 'Militia Company of District II under the Command of Captain Frans Banninck Cocq.' The massive painting revolutionized group portraiture by depicting the militia in action rather than in static poses. It hangs in Amsterdam's Rijksmuseum and remains one of the most celebrated works of the Dutch Golden Age. The painting's dramatic lighting and dynamic composition showcase Rembrandt's genius.",
          es: "'La ronda de noche' (1642) es la pintura más famosa de Rembrandt, oficialmente titulada 'Compañía de milicia del Distrito II bajo el mando del Capitán Frans Banninck Cocq'. La masiva pintura revolucionó el retrato grupal al representar a la milicia en acción en lugar de en poses estáticas. Cuelga en el Rijksmuseum de Ámsterdam y sigue siendo una de las obras más celebradas de la Edad de Oro holandesa. La iluminación dramática y la composición dinámica de la pintura muestran el genio de Rembrandt.",
          de: "'Die Nachtwache' (1642) ist Rembrandts berühmtestes Gemälde, offiziell mit dem Titel 'Schützenkompanie des Bezirks II unter dem Kommando von Hauptmann Frans Banninck Cocq'. Das riesige Gemälde revolutionierte die Gruppenporträtmalerei, indem es die Miliz in Aktion statt in statischen Posen darstellte. Es hängt im Amsterdamer Rijksmuseum und bleibt eines der gefeiertsten Werke des niederländischen Goldenen Zeitalters. Die dramatische Beleuchtung und dynamische Komposition des Gemäldes zeigen Rembrandts Genie.",
          nl: "'De Nachtwacht' (1642) is Rembrandts beroemdste schilderij, officieel getiteld 'Schutters van wijk II onder leiding van kapitein Frans Banninck Cocq'. Het massale schilderij revolutioneerde groepsportretten door de schutterij in actie af te beelden in plaats van in statische poses. Het hangt in het Rijksmuseum in Amsterdam en blijft een van de meest gevierde werken uit de Nederlandse Gouden Eeuw. De dramatische belichting en dynamische compositie van het schilderij tonen Rembrandts genialiteit."
        }
      }
    ],

    // Day 5 - October 5th: Monty Python's Flying Circus premieres (1969), Steve Jobs dies (2011), Chester Arthur born (1829)
    day5: [
      {
        question: {
          en: "The groundbreaking comedy show 'Monty Python's Flying Circus' premiered on October 5, 1969, in which country?",
          es: "El revolucionario programa de comedia 'Monty Python's Flying Circus' se estrenó el 5 de octubre de 1969, ¿en qué país?",
          de: "Die bahnbrechende Comedy-Show 'Monty Python's Flying Circus' hatte am 5. Oktober 1969 in welchem Land Premiere?",
          nl: "De baanbrekende komedieshow 'Monty Python's Flying Circus' ging in première op 5 oktober 1969, in welk land?"
        },
        options: [
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Monty Python's Flying Circus premiered on BBC Television in the United Kingdom on October 5, 1969. The surreal sketch comedy show revolutionized television comedy with its absurdist humor and innovative format. The six-member troupe (Graham Chapman, John Cleese, Terry Gilliam, Eric Idle, Terry Jones, and Michael Palin) went on to create films like 'Monty Python and the Holy Grail' and 'Life of Brian,' influencing generations of comedians worldwide.",
          es: "Monty Python's Flying Circus se estrenó en BBC Television en el Reino Unido el 5 de octubre de 1969. El surrealista programa de sketches de comedia revolucionó la comedia televisiva con su humor absurdo y formato innovador. El grupo de seis miembros (Graham Chapman, John Cleese, Terry Gilliam, Eric Idle, Terry Jones y Michael Palin) creó películas como 'Monty Python y el Santo Grial' y 'La vida de Brian', influyendo en generaciones de comediantes en todo el mundo.",
          de: "Monty Python's Flying Circus hatte am 5. Oktober 1969 beim BBC Television im Vereinigten Königreich Premiere. Die surreale Sketch-Comedy-Show revolutionierte die Fernsehkomödie mit ihrem absurden Humor und innovativen Format. Die sechsköpfige Truppe (Graham Chapman, John Cleese, Terry Gilliam, Eric Idle, Terry Jones und Michael Palin) schuf später Filme wie 'Monty Python und der Heilige Gral' und 'Das Leben des Brian', die Generationen von Komikern weltweit beeinflussten.",
          nl: "Monty Python's Flying Circus ging op 5 oktober 1969 in première op BBC Television in het Verenigd Koninkrijk. De surrealistische sketch-komedieshow revolutioneerde televisiekomedie met zijn absurdistische humor en innovatieve formaat. De zes leden tellende troep (Graham Chapman, John Cleese, Terry Gilliam, Eric Idle, Terry Jones en Michael Palin) creëerden later films zoals 'Monty Python and the Holy Grail' en 'Life of Brian', wat generaties komieken wereldwijd beïnvloedde."
        }
      },
      {
        question: {
          en: "Steve Jobs, co-founder of Apple Inc., died on October 5, 2011. Which revolutionary product did Apple introduce in 2007?",
          es: "Steve Jobs, cofundador de Apple Inc., murió el 5 de octubre de 2011. ¿Qué producto revolucionario introdujo Apple en 2007?",
          de: "Steve Jobs, Mitbegründer von Apple Inc., starb am 5. Oktober 2011. Welches revolutionäre Produkt führte Apple 2007 ein?",
          nl: "Steve Jobs, medeoprichter van Apple Inc., stierf op 5 oktober 2011. Welk revolutionair product introduceerde Apple in 2007?"
        },
        options: [
          { en: "iPad", es: "iPad", de: "iPad", nl: "iPad" },
          { en: "iPhone", es: "iPhone", de: "iPhone", nl: "iPhone" },
          { en: "iPod", es: "iPod", de: "iPod", nl: "iPod" },
          { en: "Apple Watch", es: "Apple Watch", de: "Apple Watch", nl: "Apple Watch" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Apple introduced the iPhone in 2007, revolutionizing the smartphone industry and mobile computing. The device combined a phone, iPod, and internet communicator into one touchscreen device, fundamentally changing how people interact with technology. Steve Jobs' vision and leadership transformed Apple into one of the world's most valuable companies. He also pioneered the personal computer with the Apple II and Macintosh, animated films with Pixar, and digital music with iTunes.",
          es: "Apple introdujo el iPhone en 2007, revolucionando la industria de teléfonos inteligentes y la computación móvil. El dispositivo combinó un teléfono, iPod y comunicador de internet en un dispositivo de pantalla táctil, cambiando fundamentalmente cómo las personas interactúan con la tecnología. La visión y el liderazgo de Steve Jobs transformaron a Apple en una de las empresas más valiosas del mundo. También fue pionero de la computadora personal con el Apple II y Macintosh, películas animadas con Pixar y música digital con iTunes.",
          de: "Apple führte 2007 das iPhone ein und revolutionierte die Smartphone-Industrie und das mobile Computing. Das Gerät kombinierte Telefon, iPod und Internet-Kommunikator in einem Touchscreen-Gerät und veränderte grundlegend, wie Menschen mit Technologie interagieren. Steve Jobs' Vision und Führung verwandelten Apple in eines der wertvollsten Unternehmen der Welt. Er war auch Pionier des Personal Computers mit Apple II und Macintosh, von Animationsfilmen mit Pixar und digitaler Musik mit iTunes.",
          nl: "Apple introduceerde de iPhone in 2007, waarmee de smartphone-industrie en mobiele computing werden gerevolutioneerd. Het apparaat combineerde een telefoon, iPod en internetcommunicator in één touchscreen-apparaat, wat fundamenteel veranderde hoe mensen omgaan met technologie. Steve Jobs' visie en leiderschap transformeerden Apple tot een van 's werelds meest waardevolle bedrijven. Hij was ook pionier van de personal computer met de Apple II en Macintosh, geanimeerde films met Pixar, en digitale muziek met iTunes."
        }
      },
      {
        question: {
          en: "Chester A. Arthur, born October 5, 1829, became the 21st U.S. President after which event?",
          es: "Chester A. Arthur, nacido el 5 de octubre de 1829, se convirtió en el 21º Presidente de EE.UU. después de qué evento?",
          de: "Chester A. Arthur, geboren am 5. Oktober 1829, wurde nach welchem Ereignis der 21. US-Präsident?",
          nl: "Chester A. Arthur, geboren op 5 oktober 1829, werd de 21e Amerikaanse president na welke gebeurtenis?"
        },
        options: [
          { en: "Winning the election of 1880", es: "Ganar la elección de 1880", de: "Gewinn der Wahl von 1880", nl: "Het winnen van de verkiezing van 1880" },
          { en: "President Garfield's assassination", es: "El asesinato del presidente Garfield", de: "Die Ermordung von Präsident Garfield", nl: "De moord op president Garfield" },
          { en: "Presidential impeachment", es: "Juicio político presidencial", de: "Amtsenthebung des Präsidenten", nl: "Presidentiële afzetting" },
          { en: "Special election", es: "Elección especial", de: "Sonderwahl", nl: "Speciale verkiezing" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Chester A. Arthur became president on September 19, 1881, after President James A. Garfield was assassinated. Arthur had been Garfield's Vice President. Despite being associated with political corruption as a party insider, Arthur surprised many by championing civil service reform and signing the Pendleton Civil Service Reform Act in 1883. This law established merit-based hiring for federal jobs, ending the corrupt spoils system.",
          es: "Chester A. Arthur se convirtió en presidente el 19 de septiembre de 1881, después de que el presidente James A. Garfield fue asesinado. Arthur había sido el vicepresidente de Garfield. A pesar de estar asociado con la corrupción política como miembro del partido, Arthur sorprendió a muchos al defender la reforma del servicio civil y firmar la Ley de Reforma del Servicio Civil Pendleton en 1883. Esta ley estableció la contratación basada en méritos para trabajos federales, terminando con el corrupto sistema de clientelismo.",
          de: "Chester A. Arthur wurde am 19. September 1881 Präsident, nachdem Präsident James A. Garfield ermordet worden war. Arthur war Garfields Vizepräsident gewesen. Obwohl er als Parteiinsider mit politischer Korruption in Verbindung gebracht wurde, überraschte Arthur viele, indem er sich für die Reform des öffentlichen Dienstes einsetzte und 1883 das Pendleton Civil Service Reform Act unterzeichnete. Dieses Gesetz etablierte eine leistungsbasierte Einstellung für Bundesstellen und beendete das korrupte Beutesystem.",
          nl: "Chester A. Arthur werd president op 19 september 1881, nadat president James A. Garfield was vermoord. Arthur was Garfields vicepresident geweest. Ondanks dat hij als partij-insider werd geassocieerd met politieke corruptie, verraste Arthur velen door te pleiten voor hervorming van de ambtenarij en in 1883 de Pendleton Civil Service Reform Act te ondertekenen. Deze wet vestigde op verdienste gebaseerde aanwerving voor federale banen, waarmee het corrupte vriendjespolitiek-systeem eindigde."
        }
      },
      {
        question: {
          en: "Which Monty Python member was responsible for the show's distinctive animated sequences?",
          es: "¿Qué miembro de Monty Python fue responsable de las distintivas secuencias animadas del programa?",
          de: "Welches Monty Python-Mitglied war für die charakteristischen animierten Sequenzen der Show verantwortlich?",
          nl: "Welk Monty Python-lid was verantwoordelijk voor de kenmerkende geanimeerde sequenties van de show?"
        },
        options: [
          { en: "John Cleese", es: "John Cleese", de: "John Cleese", nl: "John Cleese" },
          { en: "Terry Gilliam", es: "Terry Gilliam", de: "Terry Gilliam", nl: "Terry Gilliam" },
          { en: "Eric Idle", es: "Eric Idle", de: "Eric Idle", nl: "Eric Idle" },
          { en: "Michael Palin", es: "Michael Palin", de: "Michael Palin", nl: "Michael Palin" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Terry Gilliam created the iconic animated sequences for Monty Python's Flying Circus using Victorian-era illustrations and his distinctive cutout animation style. His surreal animations became one of the show's most memorable features, bridging sketches and adding visual absurdity. Gilliam, the only American in the group, later became a successful film director with works like 'Brazil,' '12 Monkeys,' and 'The Fisher King.'",
          es: "Terry Gilliam creó las icónicas secuencias animadas para Monty Python's Flying Circus usando ilustraciones de la era victoriana y su distintivo estilo de animación de recortes. Sus animaciones surrealistas se convirtieron en una de las características más memorables del programa, conectando sketches y añadiendo absurdo visual. Gilliam, el único estadounidense del grupo, más tarde se convirtió en un exitoso director de cine con obras como 'Brazil,' '12 monos' y 'El rey pescador.'",
          de: "Terry Gilliam schuf die ikonischen animierten Sequenzen für Monty Python's Flying Circus unter Verwendung viktorianischer Illustrationen und seines charakteristischen Ausschnitt-Animationsstils. Seine surrealen Animationen wurden zu einem der einprägsamsten Merkmale der Show, verbanden Sketche und fügten visuelle Absurdität hinzu. Gilliam, der einzige Amerikaner in der Gruppe, wurde später ein erfolgreicher Filmregisseur mit Werken wie 'Brazil,' '12 Monkeys' und 'The Fisher King.'",
          nl: "Terry Gilliam creëerde de iconische geanimeerde sequenties voor Monty Python's Flying Circus met behulp van Victoriaanse illustraties en zijn kenmerkende knipsel-animatiestijl. Zijn surrealistische animaties werden een van de meest memorabele kenmerken van de show, die sketches verbonden en visuele absurditeit toevoegden. Gilliam, de enige Amerikaan in de groep, werd later een succesvolle filmregisseur met werken zoals 'Brazil,' '12 Monkeys' en 'The Fisher King.'"
        }
      },
      {
        question: {
          en: "What pancreatic condition led to Steve Jobs' death at age 56?",
          es: "¿Qué condición pancreática llevó a la muerte de Steve Jobs a los 56 años?",
          de: "Welche Bauchspeicheldrüsenerkrankung führte zu Steve Jobs' Tod im Alter von 56 Jahren?",
          nl: "Welke alvleesklieraandoening leidde tot Steve Jobs' dood op 56-jarige leeftijd?"
        },
        options: [
          { en: "Pancreatic cancer", es: "Cáncer de páncreas", de: "Bauchspeicheldrüsenkrebs", nl: "Alvleesklierkanker" },
          { en: "Diabetes", es: "Diabetes", de: "Diabetes", nl: "Diabetes" },
          { en: "Pancreatic cyst", es: "Quiste pancreático", de: "Bauchspeicheldrüsenzyste", nl: "Alvleeskliercyste" },
          { en: "Pancreatitis", es: "Pancreatitis", de: "Pankreatitis", nl: "Alvleesklierontsteking" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Steve Jobs died from complications of a rare form of pancreatic cancer called pancreatic neuroendocrine tumor. He was diagnosed in 2003 but initially chose alternative treatments before undergoing surgery in 2004. He received a liver transplant in 2009 but his health continued to decline. Jobs' death at 56 shocked the tech world and highlighted the aggressive nature of pancreatic cancer, though his specific type was less aggressive than the more common form.",
          es: "Steve Jobs murió por complicaciones de una forma rara de cáncer de páncreas llamada tumor neuroendocrino pancreático. Fue diagnosticado en 2003 pero inicialmente eligió tratamientos alternativos antes de someterse a cirugía en 2004. Recibió un trasplante de hígado en 2009 pero su salud continuó deteriorándose. La muerte de Jobs a los 56 años conmocionó al mundo tecnológico y destacó la naturaleza agresiva del cáncer de páncreas, aunque su tipo específico era menos agresivo que la forma más común.",
          de: "Steve Jobs starb an den Komplikationen einer seltenen Form von Bauchspeicheldrüsenkrebs namens Pankreatischer Neuroendokriner Tumor. Er wurde 2003 diagnostiziert, entschied sich aber zunächst für alternative Behandlungen, bevor er sich 2004 einer Operation unterzog. Er erhielt 2009 eine Lebertransplantation, aber sein Gesundheitszustand verschlechterte sich weiter. Jobs' Tod mit 56 Jahren schockierte die Tech-Welt und machte die aggressive Natur von Bauchspeicheldrüsenkrebs deutlich, obwohl sein spezifischer Typ weniger aggressiv war als die häufigere Form.",
          nl: "Steve Jobs stierf aan complicaties van een zeldzame vorm van alvleesklierkanker genaamd pancreas neuro-endocriene tumor. Hij werd gediagnosticeerd in 2003, maar koos aanvankelijk voor alternatieve behandelingen voordat hij in 2004 een operatie onderging. Hij ontving in 2009 een levertransplantatie, maar zijn gezondheid bleef verslechteren. Jobs' dood op 56-jarige leeftijd schokte de technologiewereld en benadrukte de agressieve aard van alvleesklierkanker, hoewel zijn specifieke type minder aggressief was dan de meer voorkomende vorm."
        }
      }
    ],

    // Day 6 - October 6th: Yom Kippur War (1973), Talking films demonstrated (1927), Le Corbusier born (1887)
    day6: [
      {
        question: {
          en: "The Yom Kippur War began on October 6, 1973. Which countries launched the surprise attack on Israel?",
          es: "La Guerra de Yom Kippur comenzó el 6 de octubre de 1973. ¿Qué países lanzaron el ataque sorpresa contra Israel?",
          de: "Der Jom-Kippur-Krieg begann am 6. Oktober 1973. Welche Länder starteten den Überraschungsangriff auf Israel?",
          nl: "De Jom Kippoeroorlog begon op 6 oktober 1973. Welke landen lanceerden de verrassingsaanval op Israël?"
        },
        options: [
          { en: "Iraq and Iran", es: "Irak e Irán", de: "Irak und Iran", nl: "Irak en Iran" },
          { en: "Saudi Arabia and Kuwait", es: "Arabia Saudita y Kuwait", de: "Saudi-Arabien und Kuwait", nl: "Saoedi-Arabië en Koeweit" },
          { en: "Jordan and Lebanon", es: "Jordania y Líbano", de: "Jordanien und Libanon", nl: "Jordanië en Libanon" },
          { en: "Egypt and Syria", es: "Egipto y Siria", de: "Ägypten und Syrien", nl: "Egypte en Syrië" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Yom Kippur War began on October 6, 1973, when Egypt and Syria launched a coordinated surprise attack on Israel during the Jewish holy day of Yom Kippur. The war lasted three weeks and resulted in significant casualties on all sides. It led to major geopolitical shifts in the Middle East, including the 1973 oil crisis and eventually the Camp David Accords between Israel and Egypt.",
          es: "La Guerra de Yom Kippur comenzó el 6 de octubre de 1973, cuando Egipto y Siria lanzaron un ataque sorpresa coordinado contra Israel durante el día sagrado judío de Yom Kippur. La guerra duró tres semanas y resultó en víctimas significativas en todos los bandos. Condujo a importantes cambios geopolíticos en Medio Oriente, incluyendo la crisis del petróleo de 1973 y eventualmente los Acuerdos de Camp David entre Israel y Egipto.",
          de: "Der Jom-Kippur-Krieg begann am 6. Oktober 1973, als Ägypten und Syrien einen koordinierten Überraschungsangriff auf Israel während des jüdischen Feiertags Jom Kippur starteten. Der Krieg dauerte drei Wochen und führte zu erheblichen Verlusten auf allen Seiten. Er führte zu großen geopolitischen Verschiebungen im Nahen Osten, einschließlich der Ölkrise von 1973 und schließlich den Camp-David-Abkommen zwischen Israel und Ägypten.",
          nl: "De Jom Kippoeroorlog begon op 6 oktober 1973, toen Egypte en Syrië een gecoördineerde verrassingsaanval op Israël lanceerden tijdens de Joodse heilige dag Jom Kippoer. De oorlog duurde drie weken en resulteerde in aanzienlijke slachtoffers aan alle kanten. Het leidde tot grote geopolitieke verschuivingen in het Midden-Oosten, inclusief de oliecrisis van 1973 en uiteindelijk de Camp David-akkoorden tussen Israël en Egypte."
        }
      },
      {
        question: {
          en: "On October 6, 1927, talking films were first demonstrated publicly. What was this revolutionary film technology called?",
          es: "El 6 de octubre de 1927, las películas habladas se demostraron públicamente por primera vez. ¿Cómo se llamaba esta tecnología cinematográfica revolucionaria?",
          de: "Am 6. Oktober 1927 wurden Tonfilme erstmals öffentlich vorgeführt. Wie hieß diese revolutionäre Filmtechnologie?",
          nl: "Op 6 oktober 1927 werden pratende films voor het eerst publiekelijk gedemonstreerd. Hoe heette deze revolutionaire filmtechnologie?"
        },
        options: [
          { en: "Sound-on-film", es: "Sonido en película", de: "Lichttonverfahren", nl: "Geluid-op-film" },
          { en: "The talkies", es: "Las películas habladas", de: "Die Tonfilme", nl: "De praatfilms" },
          { en: "Audio cinema", es: "Cine de audio", de: "Audiokino", nl: "Audiobioscoop" },
          { en: "Voice pictures", es: "Imágenes de voz", de: "Sprachbilder", nl: "Stembeelden" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'The Jazz Singer' premiered on October 6, 1927, marking the birth of 'talkies' - films with synchronized sound. This revolutionary technology transformed the film industry, ending the silent film era. The film featured Al Jolson and included both synchronized music and spoken dialogue. While some sequences were still silent, it demonstrated the potential of sound in cinema and quickly made silent films obsolete.",
          es: "'El Cantante de Jazz' se estrenó el 6 de octubre de 1927, marcando el nacimiento de 'las películas habladas' - películas con sonido sincronizado. Esta tecnología revolucionaria transformó la industria cinematográfica, terminando la era del cine mudo. La película presentaba a Al Jolson e incluía tanto música sincronizada como diálogo hablado. Aunque algunas secuencias todavía eran mudas, demostró el potencial del sonido en el cine y rápidamente hizo obsoletas las películas mudas.",
          de: "'Der Jazzsänger' hatte am 6. Oktober 1927 Premiere und markierte die Geburt der 'Tonfilme' - Filme mit synchronisiertem Ton. Diese revolutionäre Technologie verwandelte die Filmindustrie und beendete die Stummfilmära. Der Film zeigte Al Jolson und enthielt sowohl synchronisierte Musik als auch gesprochene Dialoge. Obwohl einige Sequenzen noch stumm waren, demonstrierte er das Potenzial des Tons im Kino und machte Stummfilme schnell obsolet.",
          nl: "'The Jazz Singer' ging op 6 oktober 1927 in première en markeerde de geboorte van 'praatfilms' - films met gesynchroniseerd geluid. Deze revolutionaire technologie transformeerde de filmindustrie en beëindigde het tijdperk van de stomme film. De film had Al Jolson in de hoofdrol en bevatte zowel gesynchroniseerde muziek als gesproken dialoog. Hoewel sommige sequenties nog steeds stil waren, demonstreerde het het potentieel van geluid in cinema en maakte stomme films snel verouderd."
        }
      },
      {
        question: {
          en: "Famous Swiss-French architect Le Corbusier was born on October 6, 1887. Which architectural movement is he most associated with?",
          es: "El famoso arquitecto suizo-francés Le Corbusier nació el 6 de octubre de 1887. ¿Con qué movimiento arquitectónico está más asociado?",
          de: "Der berühmte schweizerisch-französische Architekt Le Corbusier wurde am 6. Oktober 1887 geboren. Mit welcher Architekturbewegung ist er am meisten verbunden?",
          nl: "De beroemde Zwitsers-Franse architect Le Corbusier werd geboren op 6 oktober 1887. Met welke architectuurbeweging wordt hij het meest geassocieerd?"
        },
        options: [
          { en: "Gothic Revival", es: "Renacimiento Gótico", de: "Neugotik", nl: "Neogotiek" },
          { en: "Art Nouveau", es: "Art Nouveau", de: "Jugendstil", nl: "Art Nouveau" },
          { en: "Modern architecture", es: "Arquitectura moderna", de: "Moderne Architektur", nl: "Moderne architectuur" },
          { en: "Baroque", es: "Barroco", de: "Barock", nl: "Barok" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Le Corbusier (born Charles-Édouard Jeanneret) was a pioneer of modern architecture and urban planning. He developed the concept of the 'Radiant City' and promoted functional, minimalist design with his 'Five Points of Architecture.' His famous quote 'A house is a machine for living in' exemplified his modernist philosophy. Notable works include Villa Savoye in France and the city of Chandigarh in India.",
          es: "Le Corbusier (nacido Charles-Édouard Jeanneret) fue un pionero de la arquitectura moderna y la planificación urbana. Desarrolló el concepto de la 'Ciudad Radiante' y promovió el diseño funcional y minimalista con sus 'Cinco Puntos de la Arquitectura'. Su famosa cita 'Una casa es una máquina para vivir' ejemplificó su filosofía modernista. Obras notables incluyen la Villa Savoye en Francia y la ciudad de Chandigarh en India.",
          de: "Le Corbusier (geboren als Charles-Édouard Jeanneret) war ein Pionier der modernen Architektur und Stadtplanung. Er entwickelte das Konzept der 'Strahlenden Stadt' und förderte funktionales, minimalistisches Design mit seinen 'Fünf Punkten der Architektur'. Sein berühmtes Zitat 'Ein Haus ist eine Maschine zum Wohnen' verkörperte seine modernistische Philosophie. Zu den bemerkenswerten Werken gehören die Villa Savoye in Frankreich und die Stadt Chandigarh in Indien.",
          nl: "Le Corbusier (geboren als Charles-Édouard Jeanneret) was een pionier van moderne architectuur en stadsplanning. Hij ontwikkelde het concept van de 'Stralende Stad' en promootte functioneel, minimalistisch ontwerp met zijn 'Vijf Punten van Architectuur'. Zijn beroemde citaat 'Een huis is een machine om in te wonen' belichaamde zijn modernistische filosofie. Opmerkelijke werken zijn onder andere Villa Savoye in Frankrijk en de stad Chandigarh in India."
        }
      },
      {
        question: {
          en: "What was the primary cause of the Yom Kippur War in 1973?",
          es: "¿Cuál fue la causa principal de la Guerra de Yom Kippur en 1973?",
          de: "Was war die Hauptursache des Jom-Kippur-Kriegs 1973?",
          nl: "Wat was de voornaamste oorzaak van de Jom Kippoeroorlog in 1973?"
        },
        options: [
          { en: "Religious tensions", es: "Tensiones religiosas", de: "Religiöse Spannungen", nl: "Religieuze spanningen" },
          { en: "Territorial disputes from the Six-Day War", es: "Disputas territoriales de la Guerra de los Seis Días", de: "Gebietsstreitigkeiten aus dem Sechstagekrieg", nl: "Territoriale geschillen uit de Zesdaagse Oorlog" },
          { en: "Oil resources", es: "Recursos petroleros", de: "Ölressourcen", nl: "Oliebronnen" },
          { en: "Trade disagreements", es: "Desacuerdos comerciales", de: "Handelsstreitigkeiten", nl: "Handelsonenigheid" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Yom Kippur War was primarily caused by unresolved territorial disputes from Israel's victory in the 1967 Six-Day War. Egypt sought to reclaim the Sinai Peninsula and Syria wanted to recover the Golan Heights. The surprise attack was timed for Yom Kippur, when Israeli forces would be least prepared. The war dramatically changed Middle Eastern politics and eventually led to peace negotiations.",
          es: "La Guerra de Yom Kippur fue causada principalmente por disputas territoriales no resueltas de la victoria de Israel en la Guerra de los Seis Días de 1967. Egipto buscaba reclamar la Península del Sinaí y Siria quería recuperar los Altos del Golán. El ataque sorpresa fue programado para Yom Kippur, cuando las fuerzas israelíes estarían menos preparadas. La guerra cambió dramáticamente la política de Medio Oriente y eventualmente llevó a negociaciones de paz.",
          de: "Der Jom-Kippur-Krieg wurde hauptsächlich durch ungelöste Gebietsstreitigkeiten aus Israels Sieg im Sechstagekrieg von 1967 verursacht. Ägypten wollte die Sinai-Halbinsel zurückgewinnen und Syrien die Golanhöhen. Der Überraschungsangriff wurde auf Jom Kippur terminiert, wenn die israelischen Streitkräfte am wenigsten vorbereitet wären. Der Krieg veränderte die nahöstliche Politik dramatisch und führte schließlich zu Friedensverhandlungen.",
          nl: "De Jom Kippoeroorlog werd voornamelijk veroorzaakt door onopgeloste territoriale geschillen uit Israëls overwinning in de Zesdaagse Oorlog van 1967. Egypte wilde het Sinaï-schiereiland terugwinnen en Syrië wilde de Golanhoogten heroveren. De verrassingsaanval was getimed op Jom Kippoer, wanneer de Israëlische strijdkrachten het minst voorbereid zouden zijn. De oorlog veranderde de politiek in het Midden-Oosten dramatisch en leidde uiteindelijk tot vredesonderhandelingen."
        }
      },
      {
        question: {
          en: "What architectural principle did Le Corbusier emphasize in his 'Five Points of Architecture'?",
          es: "¿Qué principio arquitectónico enfatizó Le Corbusier en sus 'Cinco Puntos de la Arquitectura'?",
          de: "Welches architektonische Prinzip betonte Le Corbusier in seinen 'Fünf Punkten der Architektur'?",
          nl: "Welk architectonisch principe benadrukte Le Corbusier in zijn 'Vijf Punten van Architectuur'?"
        },
        options: [
          { en: "Ornamental decoration", es: "Decoración ornamental", de: "Ornamentale Dekoration", nl: "Ornamentele decoratie" },
          { en: "Functional design with pilotis and open floor plans", es: "Diseño funcional con pilotis y planos abiertos", de: "Funktionales Design mit Pilotis und offenen Grundrissen", nl: "Functioneel ontwerp met pilotis en open plattegronden" },
          { en: "Traditional symmetry", es: "Simetría tradicional", de: "Traditionelle Symmetrie", nl: "Traditionele symmetrie" },
          { en: "Gothic arches", es: "Arcos góticos", de: "Gotische Bögen", nl: "Gotische bogen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Le Corbusier's Five Points of Architecture included pilotis (supporting columns), free floor plans, free facade design, horizontal strip windows, and roof gardens. These principles emphasized functionality over decoration, with buildings raised on stilts to allow air circulation and create open ground space. This approach revolutionized modern architecture by prioritizing human needs and environmental considerations over traditional ornamental styles.",
          es: "Los Cinco Puntos de la Arquitectura de Le Corbusier incluían pilotis (columnas de soporte), plantas libres, diseño libre de fachada, ventanas horizontales corridas y jardines en la azotea. Estos principios enfatizaban la funcionalidad sobre la decoración, con edificios elevados sobre pilotes para permitir la circulación del aire y crear espacio abierto en el suelo. Este enfoque revolucionó la arquitectura moderna al priorizar las necesidades humanas y consideraciones ambientales sobre los estilos ornamentales tradicionales.",
          de: "Le Corbusiers Fünf Punkte der Architektur umfassten Pilotis (tragende Säulen), freie Grundrisse, freie Fassadengestaltung, horizontale Fensterbänder und Dachgärten. Diese Prinzipien betonten Funktionalität über Dekoration, mit Gebäuden, die auf Stelzen erhoben wurden, um Luftzirkulation zu ermöglichen und offenen Bodenraum zu schaffen. Dieser Ansatz revolutionierte die moderne Architektur, indem er menschliche Bedürfnisse und Umweltüberlegungen über traditionelle ornamentale Stile stellte.",
          nl: "Le Corbusiers Vijf Punten van Architectuur omvatten pilotis (ondersteunende kolommen), vrije plattegronden, vrij gevelontwerp, horizontale stripvensters en daktuinen. Deze principes benadrukten functionaliteit boven decoratie, met gebouwen verhoogd op palen om luchtcirculatie mogelijk te maken en open grondruimte te creëren. Deze aanpak revolutioneerde moderne architectuur door menselijke behoeften en milieuoverwegingen prioriteit te geven boven traditionele ornamentele stijlen."
        }
      }
    ],

    // Day 7 - October 7th: Battle of Lepanto (1571), First Barcode scanned (1974), Vladimir Putin born (1952)
    day7: [
      {
        question: {
          en: "The Battle of Lepanto on October 7, 1571, was a major naval battle. Which alliance defeated the Ottoman Empire?",
          es: "La Batalla de Lepanto el 7 de octubre de 1571 fue una gran batalla naval. ¿Qué alianza derrotó al Imperio Otomano?",
          de: "Die Schlacht von Lepanto am 7. Oktober 1571 war eine große Seeschlacht. Welche Allianz besiegte das Osmanische Reich?",
          nl: "De Slag bij Lepanto op 7 oktober 1571 was een grote zeeslag. Welke alliantie versloeg het Ottomaanse Rijk?"
        },
        options: [
          { en: "The Viking Alliance", es: "La Alianza Vikinga", de: "Die Wikingerallianz", nl: "De Vikingalliantie" },
          { en: "The Hanseatic League", es: "La Liga Hanseática", de: "Die Hanse", nl: "Het Hanzaverbond" },
          { en: "The Holy League", es: "La Liga Santa", de: "Die Heilige Liga", nl: "De Heilige Liga" },
          { en: "The Protestant Union", es: "La Unión Protestante", de: "Die Protestantische Union", nl: "De Protestantse Unie" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Battle of Lepanto was fought between the Holy League (a coalition of Catholic states including Spain, Venice, and the Papal States) and the Ottoman Empire. The Christian victory stopped Ottoman expansion into the Mediterranean and was one of history's most significant naval battles. Over 400 ships participated, making it the last major battle fought primarily with galleys. The victory was celebrated throughout Christian Europe.",
          es: "La Batalla de Lepanto se libró entre la Liga Santa (una coalición de estados católicos incluyendo España, Venecia y los Estados Pontificios) y el Imperio Otomano. La victoria cristiana detuvo la expansión otomana en el Mediterráneo y fue una de las batallas navales más significativas de la historia. Participaron más de 400 barcos, convirtiéndola en la última gran batalla librada principalmente con galeras. La victoria fue celebrada en toda la Europa cristiana.",
          de: "Die Schlacht von Lepanto wurde zwischen der Heiligen Liga (einer Koalition katholischer Staaten einschließlich Spanien, Venedig und dem Kirchenstaat) und dem Osmanischen Reich ausgetragen. Der christliche Sieg stoppte die osmanische Expansion ins Mittelmeer und war eine der bedeutendsten Seeschlachten der Geschichte. Über 400 Schiffe nahmen teil, was sie zur letzten großen Schlacht machte, die hauptsächlich mit Galeeren ausgetragen wurde. Der Sieg wurde in ganz christlichen Europa gefeiert.",
          nl: "De Slag bij Lepanto werd uitgevochten tussen de Heilige Liga (een coalitie van katholieke staten waaronder Spanje, Venetië en de Pauselijke Staten) en het Ottomaanse Rijk. De christelijke overwinning stopte de Ottomaanse expansie in de Middellandse Zee en was een van de meest significante zeeslagen in de geschiedenis. Meer dan 400 schepen namen deel, waardoor het de laatste grote slag was die voornamelijk met galeien werd uitgevochten. De overwinning werd gevierd in heel christelijk Europa."
        }
      },
      {
        question: {
          en: "On October 7, 1974, the first barcode was scanned on a commercial product. What product was it?",
          es: "El 7 de octubre de 1974, se escaneó el primer código de barras en un producto comercial. ¿Qué producto fue?",
          de: "Am 7. Oktober 1974 wurde der erste Barcode auf einem kommerziellen Produkt gescannt. Welches Produkt war es?",
          nl: "Op 7 oktober 1974 werd de eerste barcode gescand op een commercieel product. Welk product was het?"
        },
        options: [
          { en: "A box of cereal", es: "Una caja de cereal", de: "Eine Schachtel Müsli", nl: "Een doos ontbijtgranen" },
          { en: "A can of soup", es: "Una lata de sopa", de: "Eine Dose Suppe", nl: "Een blik soep" },
          { en: "A loaf of bread", es: "Una barra de pan", de: "Ein Laib Brot", nl: "Een brood" },
          { en: "A pack of chewing gum", es: "Un paquete de chicle", de: "Eine Packung Kaugummi", nl: "Een pakje kauwgom" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The first product scanned with a barcode was a pack of Wrigley's Juicy Fruit chewing gum at a Marsh Supermarket in Troy, Ohio, on June 26, 1974. However, the barcode system was officially adopted for commercial use on October 7, 1974. This innovation revolutionized retail, inventory management, and supply chains worldwide. The original pack of gum is now on display at the Smithsonian Institution.",
          es: "El primer producto escaneado con código de barras fue un paquete de chicle Juicy Fruit de Wrigley en un supermercado Marsh en Troy, Ohio, el 26 de junio de 1974. Sin embargo, el sistema de códigos de barras fue adoptado oficialmente para uso comercial el 7 de octubre de 1974. Esta innovación revolucionó el comercio minorista, la gestión de inventario y las cadenas de suministro en todo el mundo. El paquete original de chicle ahora se exhibe en la Institución Smithsonian.",
          de: "Das erste mit einem Barcode gescannte Produkt war eine Packung Wrigley's Juicy Fruit Kaugummi in einem Marsh Supermarkt in Troy, Ohio, am 26. Juni 1974. Das Barcode-System wurde jedoch offiziell am 7. Oktober 1974 für den kommerziellen Gebrauch eingeführt. Diese Innovation revolutionierte den Einzelhandel, die Bestandsverwaltung und Lieferketten weltweit. Die ursprüngliche Packung Kaugummi wird jetzt in der Smithsonian Institution ausgestellt.",
          nl: "Het eerste product dat werd gescand met een barcode was een pakje Wrigley's Juicy Fruit kauwgom in een Marsh Supermarkt in Troy, Ohio, op 26 juni 1974. Het barcodesysteem werd echter officieel aangenomen voor commercieel gebruik op 7 oktober 1974. Deze innovatie revolutioneerde de detailhandel, voorraadbeheer en toeleveringsketens wereldwijd. Het originele pakje kauwgom wordt nu tentoongesteld in de Smithsonian Institution."
        }
      },
      {
        question: {
          en: "Vladimir Putin, born on October 7, 1952, became President of Russia in which year?",
          es: "Vladimir Putin, nacido el 7 de octubre de 1952, se convirtió en presidente de Rusia en qué año?",
          de: "Wladimir Putin, geboren am 7. Oktober 1952, wurde in welchem Jahr Präsident Russlands?",
          nl: "Vladimir Poetin, geboren op 7 oktober 1952, werd president van Rusland in welk jaar?"
        },
        options: [
          { en: "1995", es: "1995", de: "1995", nl: "1995" },
          { en: "2000", es: "2000", de: "2000", nl: "2000" },
          { en: "2004", es: "2004", de: "2004", nl: "2004" },
          { en: "2008", es: "2008", de: "2008", nl: "2008" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Vladimir Putin became acting President of Russia on December 31, 1999, when Boris Yeltsin resigned, and was formally elected President in March 2000. Before this, he served as Prime Minister and was a former KGB officer. Putin has been a dominant figure in Russian politics for over two decades, serving multiple terms as both President and Prime Minister. His leadership has significantly shaped modern Russia's domestic and foreign policies.",
          es: "Vladimir Putin se convirtió en presidente interino de Rusia el 31 de diciembre de 1999, cuando Boris Yeltsin renunció, y fue formalmente elegido presidente en marzo de 2000. Antes de esto, sirvió como primer ministro y fue oficial de la KGB. Putin ha sido una figura dominante en la política rusa durante más de dos décadas, sirviendo múltiples mandatos como presidente y primer ministro. Su liderazgo ha dado forma significativamente a las políticas domésticas y exteriores de la Rusia moderna.",
          de: "Wladimir Putin wurde am 31. Dezember 1999 amtierender Präsident Russlands, als Boris Jelzin zurücktrat, und wurde im März 2000 formell zum Präsidenten gewählt. Davor war er Premierminister und ehemaliger KGB-Offizier. Putin ist seit über zwei Jahrzehnten eine dominante Figur in der russischen Politik und diente mehrere Amtszeiten als Präsident und Premierminister. Seine Führung hat die Innen- und Außenpolitik des modernen Russlands erheblich geprägt.",
          nl: "Vladimir Poetin werd op 31 december 1999 waarnemend president van Rusland toen Boris Jeltsin aftrad, en werd formeel gekozen tot president in maart 2000. Daarvoor was hij premier en voormalig KGB-officier. Poetin is al meer dan twee decennia een dominante figuur in de Russische politiek en heeft meerdere termijnen gediend als zowel president als premier. Zijn leiderschap heeft het binnenlandse en buitenlandse beleid van het moderne Rusland aanzienlijk gevormd."
        }
      },
      {
        question: {
          en: "What was the significance of the Battle of Lepanto for European history?",
          es: "¿Cuál fue la importancia de la Batalla de Lepanto para la historia europea?",
          de: "Welche Bedeutung hatte die Schlacht von Lepanto für die europäische Geschichte?",
          nl: "Wat was de betekenis van de Slag bij Lepanto voor de Europese geschiedenis?"
        },
        options: [
          { en: "It ended the Protestant Reformation", es: "Terminó la Reforma Protestante", de: "Sie beendete die protestantische Reformation", nl: "Het beëindigde de protestantse Reformatie" },
          { en: "It halted Ottoman expansion into the Mediterranean", es: "Detuvo la expansión otomana en el Mediterráneo", de: "Sie stoppte die osmanische Expansion ins Mittelmeer", nl: "Het stopte de Ottomaanse expansie in de Middellandse Zee" },
          { en: "It started the Renaissance", es: "Inició el Renacimiento", de: "Sie begann die Renaissance", nl: "Het startte de Renaissance" },
          { en: "It unified Italy", es: "Unificó Italia", de: "Sie vereinigte Italien", nl: "Het verenigd Italië" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Battle of Lepanto was crucial in halting Ottoman naval expansion into the Mediterranean Sea. The victory demonstrated that the Ottoman fleet was not invincible and gave Christian Europe renewed confidence. While it didn't end Ottoman power, it marked the beginning of the decline of Ottoman naval dominance in the Mediterranean. The battle involved around 200,000 sailors and soldiers, making it one of the largest naval engagements in history.",
          es: "La Batalla de Lepanto fue crucial para detener la expansión naval otomana en el Mar Mediterráneo. La victoria demostró que la flota otomana no era invencible y dio nueva confianza a la Europa cristiana. Si bien no terminó el poder otomano, marcó el comienzo del declive del dominio naval otomano en el Mediterráneo. La batalla involucró alrededor de 200,000 marineros y soldados, convirtiéndola en uno de los enfrentamientos navales más grandes de la historia.",
          de: "Die Schlacht von Lepanto war entscheidend, um die osmanische Seeexpansion ins Mittelmeer zu stoppen. Der Sieg zeigte, dass die osmanische Flotte nicht unbesiegbar war, und gab dem christlichen Europa neues Vertrauen. Obwohl sie die osmanische Macht nicht beendete, markierte sie den Beginn des Niedergangs der osmanischen Seedominanz im Mittelmeer. An der Schlacht waren etwa 200.000 Seeleute und Soldaten beteiligt, was sie zu einem der größten Seegefechte der Geschichte macht.",
          nl: "De Slag bij Lepanto was cruciaal in het stoppen van de Ottomaanse zeemacht-expansie in de Middellandse Zee. De overwinning toonde aan dat de Ottomaanse vloot niet onoverwinnelijk was en gaf het christelijke Europa hernieuwd vertrouwen. Hoewel het de Ottomaanse macht niet beëindigde, markeerde het het begin van de afname van de Ottomaanse zeemacht in de Middellandse Zee. De slag betrok ongeveer 200.000 zeelieden en soldaten, waardoor het een van de grootste zeeslagen in de geschiedenis was."
        }
      },
      {
        question: {
          en: "What revolutionary impact did the barcode have on retail and commerce?",
          es: "¿Qué impacto revolucionario tuvo el código de barras en el comercio minorista?",
          de: "Welche revolutionären Auswirkungen hatte der Barcode auf Einzelhandel und Handel?",
          nl: "Welke revolutionaire impact had de barcode op detailhandel en commerce?"
        },
        options: [
          { en: "It replaced cash registers", es: "Reemplazó las cajas registradoras", de: "Er ersetzte Registrierkassen", nl: "Het verving kassa's" },
          { en: "It automated checkout and inventory tracking", es: "Automatizó el pago y el seguimiento de inventario", de: "Er automatisierte Kasse und Bestandsverfolgung", nl: "Het automatiseerde afrekenen en voorraad bijhouden" },
          { en: "It eliminated the need for money", es: "Eliminó la necesidad de dinero", de: "Er beseitigte den Bedarf an Geld", nl: "Het elimineerde de noodzaak voor geld" },
          { en: "It created online shopping", es: "Creó las compras en línea", de: "Er schuf Online-Shopping", nl: "Het creëerde online winkelen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The barcode revolutionized retail by automating checkout processes and enabling precise inventory tracking. It dramatically reduced human error in pricing, sped up customer checkout times, and allowed stores to track sales and inventory in real-time. This technology became the foundation for modern supply chain management, just-in-time inventory systems, and eventually e-commerce. The Universal Product Code (UPC) barcode remains ubiquitous in global commerce today.",
          es: "El código de barras revolucionó el comercio minorista al automatizar los procesos de pago y permitir un seguimiento preciso del inventario. Redujo drásticamente el error humano en los precios, aceleró los tiempos de pago de los clientes y permitió a las tiendas rastrear ventas e inventario en tiempo real. Esta tecnología se convirtió en la base de la gestión moderna de la cadena de suministro, sistemas de inventario justo a tiempo y, eventualmente, el comercio electrónico. El código de barras UPC sigue siendo omnipresente en el comercio global hoy.",
          de: "Der Barcode revolutionierte den Einzelhandel, indem er Kassenprozesse automatisierte und eine präzise Bestandsverfolgung ermöglichte. Er reduzierte menschliche Fehler bei der Preisgestaltung dramatisch, beschleunigte die Checkout-Zeiten für Kunden und ermöglichte es Geschäften, Verkäufe und Bestände in Echtzeit zu verfolgen. Diese Technologie wurde zur Grundlage für modernes Supply Chain Management, Just-in-Time-Bestandssysteme und schließlich E-Commerce. Der UPC-Barcode ist heute im globalen Handel allgegenwärtig.",
          nl: "De barcode revolutioneerde de detailhandel door afrekenprocessen te automatiseren en nauwkeurige voorraad bijhouden mogelijk te maken. Het verminderde menselijke fouten in prijzen drastisch, versnelde de afrekenprocessen voor klanten en stelde winkels in staat om verkoop en voorraad in real-time te volgen. Deze technologie werd de basis voor modern supply chain management, just-in-time voorraadsystemen en uiteindelijk e-commerce. De Universal Product Code (UPC) barcode blijft vandaag de dag alomtegenwoordig in de mondiale handel."
        }
      }
    ],

    // Day 8 - October 8th: Great Chicago Fire (1871), Che Guevara captured (1967), Jesse Jackson born (1941)
    day8: [
      {
        question: {
          en: "The Great Chicago Fire started on October 8, 1871. According to legend, what caused the fire?",
          es: "El Gran Incendio de Chicago comenzó el 8 de octubre de 1871. Según la leyenda, ¿qué causó el incendio?",
          de: "Der Große Brand von Chicago begann am 8. Oktober 1871. Was verursachte laut Legende das Feuer?",
          nl: "De Grote Brand van Chicago begon op 8 oktober 1871. Wat veroorzaakte volgens de legende de brand?"
        },
        options: [
          { en: "Mrs. O'Leary's cow kicking over a lantern", es: "La vaca de la Sra. O'Leary pateando una linterna", de: "Mrs. O'Learys Kuh, die eine Laterne umstieß", nl: "De koe van Mevrouw O'Leary die een lantaarn omver schopte" },
          { en: "A factory explosion", es: "Una explosión de fábrica", de: "Eine Fabrikexplosion", nl: "Een fabrieksexplosie" },
          { en: "A lightning strike", es: "Un rayo", de: "Ein Blitzschlag", nl: "Een blikseminslag" },
          { en: "Arson", es: "Incendio provocado", de: "Brandstiftung", nl: "Brandstichting" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Legend says the Great Chicago Fire started when Mrs. O'Leary's cow kicked over a lantern in a barn. However, this story is likely false and was later discredited. The fire destroyed over 3 square miles of Chicago, killed approximately 300 people, and left 100,000 homeless. Despite the devastation, Chicago rebuilt quickly and modernized, emerging as a major architectural center. The fire's true cause remains unknown.",
          es: "La leyenda dice que el Gran Incendio de Chicago comenzó cuando la vaca de la Sra. O'Leary pateó una linterna en un granero. Sin embargo, esta historia probablemente es falsa y fue desacreditada más tarde. El incendio destruyó más de 3 millas cuadradas de Chicago, mató aproximadamente a 300 personas y dejó a 100,000 sin hogar. A pesar de la devastación, Chicago se reconstruyó rápidamente y se modernizó, emergiendo como un importante centro arquitectónico. La verdadera causa del incendio sigue siendo desconocida.",
          de: "Die Legende besagt, dass der Große Brand von Chicago begann, als Mrs. O'Learys Kuh eine Laterne in einer Scheune umstieß. Diese Geschichte ist jedoch wahrscheinlich falsch und wurde später widerlegt. Das Feuer zerstörte über 3 Quadratmeilen von Chicago, tötete etwa 300 Menschen und machte 100.000 obdachlos. Trotz der Verwüstung wurde Chicago schnell wieder aufgebaut und modernisiert und entwickelte sich zu einem wichtigen Architekturzentrum. Die wahre Ursache des Feuers bleibt unbekannt.",
          nl: "Volgens de legende begon de Grote Brand van Chicago toen de koe van Mevrouw O'Leary een lantaarn omver schopte in een schuur. Dit verhaal is echter waarschijnlijk vals en werd later weerlegd. De brand verwoestte meer dan 3 vierkante mijl van Chicago, doodde ongeveer 300 mensen en maakte 100.000 daklos. Ondanks de verwoesting bouwde Chicago zich snel opnieuw op en moderniseerde, en werd een belangrijk architectuurcentrum. De werkelijke oorzaak van de brand blijft onbekend."
        }
      },
      {
        question: {
          en: "Revolutionary leader Che Guevara was captured on October 8, 1967, in which country?",
          es: "El líder revolucionario Che Guevara fue capturado el 8 de octubre de 1967 en qué país?",
          de: "Der revolutionäre Führer Che Guevara wurde am 8. Oktober 1967 in welchem Land gefangen genommen?",
          nl: "Revolutionair leider Che Guevara werd op 8 oktober 1967 gevangengenomen in welk land?"
        },
        options: [
          { en: "Cuba", es: "Cuba", de: "Kuba", nl: "Cuba" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Bolivia", es: "Bolivia", de: "Bolivien", nl: "Bolivia" },
          { en: "Venezuela", es: "Venezuela", de: "Venezuela", nl: "Venezuela" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Che Guevara was captured in Bolivia on October 8, 1967, while attempting to spark a revolution there. He was executed the following day. Born in Argentina, Guevara became a central figure in the Cuban Revolution alongside Fidel Castro. After helping establish Cuba's communist government, he left to promote revolution in other countries. His iconic image remains a symbol of rebellion and revolutionary idealism worldwide.",
          es: "Che Guevara fue capturado en Bolivia el 8 de octubre de 1967, mientras intentaba iniciar una revolución allí. Fue ejecutado al día siguiente. Nacido en Argentina, Guevara se convirtió en una figura central de la Revolución Cubana junto a Fidel Castro. Después de ayudar a establecer el gobierno comunista de Cuba, partió para promover la revolución en otros países. Su imagen icónica sigue siendo un símbolo de rebeldía e idealismo revolucionario en todo el mundo.",
          de: "Che Guevara wurde am 8. Oktober 1967 in Bolivien gefangen genommen, während er versuchte, dort eine Revolution auszulösen. Er wurde am folgenden Tag hingerichtet. In Argentinien geboren, wurde Guevara eine zentrale Figur der Kubanischen Revolution neben Fidel Castro. Nachdem er half, Kubas kommunistische Regierung zu etablieren, verließ er das Land, um Revolutionen in anderen Ländern zu fördern. Sein ikonisches Bild bleibt weltweit ein Symbol für Rebellion und revolutionären Idealismus.",
          nl: "Che Guevara werd op 8 oktober 1967 in Bolivia gevangengenomen terwijl hij probeerde daar een revolutie te ontketenen. Hij werd de volgende dag geëxecuteerd. Geboren in Argentinië, werd Guevara een centrale figuur in de Cubaanse Revolutie naast Fidel Castro. Na het helpen oprichten van Cuba's communistische regering, vertrok hij om revoluties in andere landen te bevorderen. Zijn iconische beeld blijft wereldwijd een symbool van rebellie en revolutionair idealisme."
        }
      },
      {
        question: {
          en: "Civil rights leader Jesse Jackson was born on October 8, 1941. For which presidential position did he run twice?",
          es: "El líder de derechos civiles Jesse Jackson nació el 8 de octubre de 1941. ¿Para qué cargo presidencial se postuló dos veces?",
          de: "Der Bürgerrechtsführer Jesse Jackson wurde am 8. Oktober 1941 geboren. Für welche Präsidentschaftsposition kandidierte er zweimal?",
          nl: "Burgerrechtenleider Jesse Jackson werd geboren op 8 oktober 1941. Voor welke presidentiële positie kandideerde hij twee keer?"
        },
        options: [
          { en: "Vice President", es: "Vicepresidente", de: "Vizepräsident", nl: "Vice-president" },
          { en: "U.S. President", es: "Presidente de EE.UU.", de: "US-Präsident", nl: "President van de VS" },
          { en: "Senator", es: "Senador", de: "Senator", nl: "Senator" },
          { en: "Governor", es: "Gobernador", de: "Gouverneur", nl: "Gouverneur" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Jesse Jackson ran for U.S. President in 1984 and 1988 as a Democrat, becoming the first African American to mount a serious presidential campaign. He advocated for civil rights, economic justice, and international peace. Though he didn't win the nomination, his campaigns mobilized millions of voters and paved the way for future minority presidential candidates. Jackson worked closely with Dr. Martin Luther King Jr. and continued the fight for equality throughout his career.",
          es: "Jesse Jackson se postuló para presidente de EE.UU. en 1984 y 1988 como demócrata, convirtiéndose en el primer afroamericano en montar una seria campaña presidencial. Abogó por los derechos civiles, la justicia económica y la paz internacional. Aunque no ganó la nominación, sus campañas movilizaron a millones de votantes y allanaron el camino para futuros candidatos presidenciales minoritarios. Jackson trabajó estrechamente con el Dr. Martin Luther King Jr. y continuó la lucha por la igualdad a lo largo de su carrera.",
          de: "Jesse Jackson kandidierte 1984 und 1988 als Demokrat für das Amt des US-Präsidenten und war der erste Afroamerikaner, der eine ernsthafte Präsidentschaftskampagne führte. Er setzte sich für Bürgerrechte, wirtschaftliche Gerechtigkeit und internationalen Frieden ein. Obwohl er die Nominierung nicht gewann, mobilisierten seine Kampagnen Millionen von Wählern und ebneten den Weg für zukünftige Minderheitenkandidaten. Jackson arbeitete eng mit Dr. Martin Luther King Jr. zusammen und setzte den Kampf für Gleichheit während seiner gesamten Karriere fort.",
          nl: "Jesse Jackson kandideerde in 1984 en 1988 als Democraat voor het presidentschap van de VS en werd de eerste Afro-Amerikaan die een serieuze presidentiële campagne voerde. Hij pleitte voor burgerrechten, economische rechtvaardigheid en internationale vrede. Hoewel hij de nominatie niet won, mobiliseerden zijn campagnes miljoenen kiezers en baanden de weg voor toekomstige minderheids-presidentskandidaten. Jackson werkte nauw samen met Dr. Martin Luther King Jr. en zette de strijd voor gelijkheid gedurende zijn hele carrière voort."
        }
      },
      {
        question: {
          en: "How much of Chicago was destroyed by the Great Chicago Fire of 1871?",
          es: "¿Cuánto de Chicago fue destruido por el Gran Incendio de Chicago de 1871?",
          de: "Wie viel von Chicago wurde durch den Großen Brand von Chicago 1871 zerstört?",
          nl: "Hoeveel van Chicago werd verwoest door de Grote Brand van Chicago van 1871?"
        },
        options: [
          { en: "About 1 square mile", es: "Aproximadamente 1 milla cuadrada", de: "Etwa 1 Quadratmeile", nl: "Ongeveer 1 vierkante mijl" },
          { en: "About 3 square miles", es: "Aproximadamente 3 millas cuadradas", de: "Etwa 3 Quadratmeilen", nl: "Ongeveer 3 vierkante mijl" },
          { en: "About 10 square miles", es: "Aproximadamente 10 millas cuadradas", de: "Etwa 10 Quadratmeilen", nl: "Ongeveer 10 vierkante mijl" },
          { en: "The entire city", es: "Toda la ciudad", de: "Die gesamte Stadt", nl: "De hele stad" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Great Chicago Fire destroyed approximately 3.3 square miles of the city, including the entire downtown business district. It consumed over 17,000 structures and caused an estimated $200 million in damages (about $4.7 billion today). Despite this catastrophic destruction, Chicago rebuilt rapidly using more fire-resistant materials like stone and brick. The reconstruction attracted talented architects who pioneered the development of the modern skyscraper.",
          es: "El Gran Incendio de Chicago destruyó aproximadamente 3.3 millas cuadradas de la ciudad, incluido todo el distrito comercial del centro. Consumió más de 17,000 estructuras y causó daños estimados en $200 millones (aproximadamente $4.7 mil millones hoy). A pesar de esta destrucción catastrófica, Chicago se reconstruyó rápidamente usando materiales más resistentes al fuego como piedra y ladrillo. La reconstrucción atrajo a arquitectos talentosos que fueron pioneros en el desarrollo del rascacielos moderno.",
          de: "Der Große Brand von Chicago zerstörte etwa 3,3 Quadratmeilen der Stadt, einschließlich des gesamten Geschäftsviertels der Innenstadt. Er verzehrte über 17.000 Gebäude und verursachte Schäden in Höhe von geschätzten 200 Millionen Dollar (etwa 4,7 Milliarden Dollar heute). Trotz dieser katastrophalen Zerstörung wurde Chicago schnell mit feuerfesteren Materialien wie Stein und Ziegeln wieder aufgebaut. Der Wiederaufbau zog talentierte Architekten an, die die Entwicklung des modernen Wolkenkratzers vorantrieben.",
          nl: "De Grote Brand van Chicago verwoestte ongeveer 3,3 vierkante mijl van de stad, inclusief het hele zakelijke centrum. Het verwoestte meer dan 17.000 gebouwen en veroorzaakte geschatte schade van $200 miljoen (ongeveer $4,7 miljard vandaag). Ondanks deze catastrofale verwoesting herbouwde Chicago zich snel met meer brandwerende materialen zoals steen en baksteen. De wederopbouw trok getalenteerde architecten aan die de ontwikkeling van de moderne wolkenkrabber pionierden."
        }
      },
      {
        question: {
          en: "What was Che Guevara's role in the Cuban Revolution?",
          es: "¿Cuál fue el papel de Che Guevara en la Revolución Cubana?",
          de: "Welche Rolle spielte Che Guevara in der Kubanischen Revolution?",
          nl: "Wat was de rol van Che Guevara in de Cubaanse Revolutie?"
        },
        options: [
          { en: "He was only a doctor", es: "Fue solo un médico", de: "Er war nur ein Arzt", nl: "Hij was alleen een arts" },
          { en: "He was a military commander and key revolutionary leader", es: "Fue comandante militar y líder revolucionario clave", de: "Er war ein Militärkommandant und wichtiger revolutionärer Führer", nl: "Hij was een militaire commandant en belangrijke revolutionaire leider" },
          { en: "He was a foreign observer", es: "Fue un observador extranjero", de: "Er war ein ausländischer Beobachter", nl: "Hij was een buitenlandse waarnemer" },
          { en: "He opposed the revolution", es: "Se opuso a la revolución", de: "Er war gegen die Revolution", nl: "Hij was tegen de revolutie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Che Guevara was a key military commander and theorist during the Cuban Revolution (1956-1959). Though trained as a physician, he became one of Fidel Castro's most trusted allies and led guerrilla forces in crucial battles. After the revolution's success, he served in various government positions including head of the National Bank and Minister of Industry. His writings on guerrilla warfare and revolutionary theory influenced revolutionary movements worldwide.",
          es: "Che Guevara fue un comandante militar clave y teórico durante la Revolución Cubana (1956-1959). Aunque entrenado como médico, se convirtió en uno de los aliados más confiables de Fidel Castro y lideró fuerzas guerrilleras en batallas cruciales. Después del éxito de la revolución, ocupó varios cargos gubernamentales incluyendo director del Banco Nacional y Ministro de Industria. Sus escritos sobre guerra de guerrillas y teoría revolucionaria influyeron en movimientos revolucionarios en todo el mundo.",
          de: "Che Guevara war ein wichtiger Militärkommandant und Theoretiker während der Kubanischen Revolution (1956-1959). Obwohl als Arzt ausgebildet, wurde er einer der vertrauenswürdigsten Verbündeten Fidel Castros und führte Guerillakräfte in entscheidenden Schlachten. Nach dem Erfolg der Revolution bekleidete er verschiedene Regierungspositionen, darunter Chef der Nationalbank und Industrieminister. Seine Schriften über Guerillakrieg und revolutionäre Theorie beeinflussten revolutionäre Bewegungen weltweit.",
          nl: "Che Guevara was een belangrijke militaire commandant en theoreticus tijdens de Cubaanse Revolutie (1956-1959). Hoewel opgeleid als arts, werd hij een van Fidel Castro's meest vertrouwde bondgenoten en leidde guerrillastrijdkrachten in cruciale veldslagen. Na het succes van de revolutie bekleedde hij verschillende regeringsposities, waaronder hoofd van de Nationale Bank en Minister van Industrie. Zijn geschriften over guerrillaoorlogvoering en revolutionaire theorie beïnvloedden revolutionaire bewegingen wereldwijd."
        }
      }
    ],

    // Day 9 - October 9th: Che Guevara executed (1967), Uganda independence (1962), John Lennon born (1940)
    day9: [
      {
        question: {
          en: "Revolutionary leader Che Guevara was executed on October 9, 1967. In which country did this occur?",
          es: "El líder revolucionario Che Guevara fue ejecutado el 9 de octubre de 1967. ¿En qué país ocurrió esto?",
          de: "Der revolutionäre Führer Che Guevara wurde am 9. Oktober 1967 hingerichtet. In welchem Land geschah dies?",
          nl: "Revolutionair leider Che Guevara werd op 9 oktober 1967 geëxecuteerd. In welk land gebeurde dit?"
        },
        options: [
          { en: "Venezuela", es: "Venezuela", de: "Venezuela", nl: "Venezuela" },
          { en: "Bolivia", es: "Bolivia", de: "Bolivien", nl: "Bolivia" },
          { en: "Cuba", es: "Cuba", de: "Kuba", nl: "Cuba" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Che Guevara was executed in Bolivia on October 9, 1967, one day after being captured. He had been leading a guerrilla campaign to foment revolution in the country. The Bolivian army, with assistance from CIA operatives, carried out the execution in the village of La Higuera. His death at age 39 transformed him into a martyred icon of revolutionary movements worldwide, and his image remains one of the most recognizable in popular culture.",
          es: "Che Guevara fue ejecutado en Bolivia el 9 de octubre de 1967, un día después de ser capturado. Había estado liderando una campaña guerrillera para fomentar la revolución en el país. El ejército boliviano, con ayuda de operativos de la CIA, llevó a cabo la ejecución en el pueblo de La Higuera. Su muerte a los 39 años lo transformó en un ícono mártir de movimientos revolucionarios en todo el mundo, y su imagen sigue siendo una de las más reconocibles en la cultura popular.",
          de: "Che Guevara wurde am 9. Oktober 1967 in Bolivien hingerichtet, einen Tag nach seiner Gefangennahme. Er hatte eine Guerillakampagne angeführt, um eine Revolution im Land anzuzetteln. Die bolivianische Armee führte mit Unterstützung von CIA-Agenten die Hinrichtung im Dorf La Higuera durch. Sein Tod im Alter von 39 Jahren verwandelte ihn in eine märtyrerhafte Ikone revolutionärer Bewegungen weltweit, und sein Bild gehört zu den bekanntesten in der Popkultur.",
          nl: "Che Guevara werd op 9 oktober 1967 in Bolivia geëxecuteerd, een dag nadat hij was gevangengenomen. Hij had een guerrillacampagne geleid om een revolutie in het land te bevorderen. Het Boliviaanse leger voerde, met hulp van CIA-agenten, de executie uit in het dorp La Higuera. Zijn dood op 39-jarige leeftijd transformeerde hem tot een gemarteliseerd icoon van revolutionaire bewegingen wereldwijd, en zijn afbeelding blijft een van de meest herkenbare in de populaire cultuur."
        }
      },
      {
        question: {
          en: "Uganda gained independence on October 9, 1962. From which colonial power?",
          es: "Uganda obtuvo la independencia el 9 de octubre de 1962. ¿De qué potencia colonial?",
          de: "Uganda erlangte am 9. Oktober 1962 die Unabhängigkeit. Von welcher Kolonialmacht?",
          nl: "Oeganda kreeg op 9 oktober 1962 onafhankelijkheid. Van welke koloniale macht?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "Belgium", es: "Bélgica", de: "Belgien", nl: "België" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Uganda gained independence from the United Kingdom on October 9, 1962, becoming a sovereign nation within the Commonwealth. The country had been a British protectorate since 1894. Milton Obote became the first Prime Minister of independent Uganda. The independence came during the broader African decolonization movement of the 1960s, when many African nations achieved independence from European colonial powers.",
          es: "Uganda obtuvo la independencia del Reino Unido el 9 de octubre de 1962, convirtiéndose en una nación soberana dentro de la Commonwealth. El país había sido un protectorado británico desde 1894. Milton Obote se convirtió en el primer Primer Ministro de Uganda independiente. La independencia llegó durante el movimiento más amplio de descolonización africana de los años 60, cuando muchas naciones africanas lograron la independencia de las potencias coloniales europeas.",
          de: "Uganda erlangte am 9. Oktober 1962 die Unabhängigkeit vom Vereinigten Königreich und wurde eine souveräne Nation innerhalb des Commonwealth. Das Land war seit 1894 ein britisches Protektorat gewesen. Milton Obote wurde der erste Premierminister des unabhängigen Uganda. Die Unabhängigkeit erfolgte während der breiteren afrikanischen Entkolonialisierungsbewegung der 1960er Jahre, als viele afrikanische Nationen die Unabhängigkeit von europäischen Kolonialmächten erlangten.",
          nl: "Oeganda kreeg op 9 oktober 1962 onafhankelijkheid van het Verenigd Koninkrijk en werd een soevereine natie binnen het Gemenebest. Het land was sinds 1894 een Brits protectoraat geweest. Milton Obote werd de eerste premier van onafhankelijk Oeganda. De onafhankelijkheid kwam tijdens de bredere Afrikaanse dekolonisatiebeweging van de jaren 60, toen veel Afrikaanse naties onafhankelijkheid verwierven van Europese koloniale mogendheden."
        }
      },
      {
        question: {
          en: "Beatles legend John Lennon was born on October 9, 1940. In which English city?",
          es: "La leyenda de los Beatles, John Lennon, nació el 9 de octubre de 1940. ¿En qué ciudad inglesa?",
          de: "Beatles-Legende John Lennon wurde am 9. Oktober 1940 geboren. In welcher englischen Stadt?",
          nl: "Beatles-legende John Lennon werd geboren op 9 oktober 1940. In welke Engelse stad?"
        },
        options: [
          { en: "London", es: "Londres", de: "London", nl: "Londen" },
          { en: "Manchester", es: "Manchester", de: "Manchester", nl: "Manchester" },
          { en: "Liverpool", es: "Liverpool", de: "Liverpool", nl: "Liverpool" },
          { en: "Birmingham", es: "Birmingham", de: "Birmingham", nl: "Birmingham" }
        ],
        correctIndex: 2,
        explanation: {
          en: "John Lennon was born in Liverpool, England, on October 9, 1940, during a German air raid in World War II. He co-founded The Beatles in Liverpool in 1960, which became the most influential band in history. As a songwriter with Paul McCartney, he composed many of the greatest songs in popular music. After The Beatles disbanded in 1970, he pursued a successful solo career promoting peace and social justice until his assassination in New York City in 1980.",
          es: "John Lennon nació en Liverpool, Inglaterra, el 9 de octubre de 1940, durante un ataque aéreo alemán en la Segunda Guerra Mundial. Co-fundó The Beatles en Liverpool en 1960, que se convirtió en la banda más influyente de la historia. Como compositor con Paul McCartney, compuso muchas de las mejores canciones de la música popular. Después de que The Beatles se disolvieron en 1970, siguió una exitosa carrera en solitario promoviendo la paz y la justicia social hasta su asesinato en la Ciudad de Nueva York en 1980.",
          de: "John Lennon wurde am 9. Oktober 1940 in Liverpool, England, während eines deutschen Luftangriffs im Zweiten Weltkrieg geboren. Er gründete 1960 in Liverpool The Beatles mit, die zur einflussreichsten Band der Geschichte wurden. Als Songwriter mit Paul McCartney komponierte er viele der größten Songs der Popmusik. Nach der Auflösung der Beatles 1970 verfolgte er eine erfolgreiche Solokarriere, in der er sich für Frieden und soziale Gerechtigkeit einsetzte, bis zu seiner Ermordung in New York City 1980.",
          nl: "John Lennon werd geboren in Liverpool, Engeland, op 9 oktober 1940, tijdens een Duitse luchtaanval in de Tweede Wereldoorlog. Hij was medeoprichter van The Beatles in Liverpool in 1960, die de meest invloedrijke band in de geschiedenis werden. Als songwriter met Paul McCartney componeerde hij veel van de beste liedjes in de populaire muziek. Na de ontbinding van The Beatles in 1970 zette hij een succesvolle solocarrière voort waarin hij vrede en sociale rechtvaardigheid promootte, tot zijn moord in New York City in 1980."
        }
      },
      {
        question: {
          en: "What was Che Guevara's profession before becoming a revolutionary?",
          es: "¿Cuál era la profesión de Che Guevara antes de convertirse en revolucionario?",
          de: "Was war Che Guevaras Beruf, bevor er Revolutionär wurde?",
          nl: "Wat was het beroep van Che Guevara voordat hij een revolutionair werd?"
        },
        options: [
          { en: "Lawyer", es: "Abogado", de: "Anwalt", nl: "Advocaat" },
          { en: "Teacher", es: "Profesor", de: "Lehrer", nl: "Leraar" },
          { en: "Physician", es: "Médico", de: "Arzt", nl: "Arts" },
          { en: "Engineer", es: "Ingeniero", de: "Ingenieur", nl: "Ingenieur" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Che Guevara was trained as a physician, graduating from medical school in Buenos Aires in 1953. His motorcycle journey through South America while a medical student, documented in 'The Motorcycle Diaries,' exposed him to poverty and social injustice that radicalized his political views. Though qualified as a doctor, he devoted most of his life to revolutionary activities. His medical training influenced his belief in serving the poor and oppressed, which became central to his revolutionary ideology.",
          es: "Che Guevara se formó como médico, graduándose de la escuela de medicina en Buenos Aires en 1953. Su viaje en motocicleta por Sudamérica mientras era estudiante de medicina, documentado en 'Diarios de Motocicleta', lo expuso a la pobreza y la injusticia social que radicalizaron sus puntos de vista políticos. Aunque calificado como médico, dedicó la mayor parte de su vida a actividades revolucionarias. Su formación médica influyó en su creencia en servir a los pobres y oprimidos, que se convirtió en central en su ideología revolucionaria.",
          de: "Che Guevara wurde als Arzt ausgebildet und schloss 1953 sein Medizinstudium in Buenos Aires ab. Seine Motorradreise durch Südamerika als Medizinstudent, dokumentiert in 'Die Reise des jungen Che', konfrontierte ihn mit Armut und sozialer Ungerechtigkeit, die seine politischen Ansichten radikalisierten. Obwohl als Arzt qualifiziert, widmete er den größten Teil seines Lebens revolutionären Aktivitäten. Seine medizinische Ausbildung prägte seinen Glauben, den Armen und Unterdrückten zu dienen, was zentral für seine revolutionäre Ideologie wurde.",
          nl: "Che Guevara was opgeleid als arts en studeerde in 1953 af aan de medische faculteit in Buenos Aires. Zijn motorreis door Zuid-Amerika als geneeskundestudent, gedocumenteerd in 'The Motorcycle Diaries', stelde hem bloot aan armoede en sociale onrechtvaardigheid die zijn politieke opvattingen radicaliseerden. Hoewel gekwalificeerd als arts, wijdde hij het grootste deel van zijn leven aan revolutionaire activiteiten. Zijn medische opleiding beïnvloedde zijn overtuiging om de armen en onderdrukten te dienen, wat centraal kwam te staan in zijn revolutionaire ideologie."
        }
      },
      {
        question: {
          en: "Which Beatles song did John Lennon write that became an anthem for peace?",
          es: "¿Qué canción de los Beatles escribió John Lennon que se convirtió en un himno por la paz?",
          de: "Welches Beatles-Lied schrieb John Lennon, das zu einer Hymne für den Frieden wurde?",
          nl: "Welk Beatles-nummer schreef John Lennon dat een hymne voor vrede werd?"
        },
        options: [
          { en: "Hey Jude", es: "Hey Jude", de: "Hey Jude", nl: "Hey Jude" },
          { en: "Let It Be", es: "Let It Be", de: "Let It Be", nl: "Let It Be" },
          { en: "Imagine", es: "Imagine", de: "Imagine", nl: "Imagine" },
          { en: "Yesterday", es: "Yesterday", de: "Yesterday", nl: "Yesterday" }
        ],
        correctIndex: 2,
        explanation: {
          en: "'Imagine' was released in 1971 as a solo single by John Lennon, not as a Beatles song. It became one of the most iconic peace anthems in history, encouraging listeners to envision a world without borders, religions, or possessions. The song's simple piano melody and utopian lyrics resonated globally. Though it was his solo work after The Beatles disbanded, 'Imagine' is considered Lennon's greatest musical legacy and continues to inspire peace movements worldwide.",
          es: "'Imagine' fue lanzada en 1971 como un sencillo en solitario de John Lennon, no como una canción de los Beatles. Se convirtió en uno de los himnos de paz más icónicos de la historia, alentando a los oyentes a imaginar un mundo sin fronteras, religiones o posesiones. La simple melodía de piano de la canción y las letras utópicas resonaron globalmente. Aunque fue su trabajo en solitario después de que The Beatles se disolvieron, 'Imagine' es considerado el mayor legado musical de Lennon y continúa inspirando movimientos de paz en todo el mundo.",
          de: "'Imagine' wurde 1971 als Solo-Single von John Lennon veröffentlicht, nicht als Beatles-Song. Es wurde zu einer der ikonischsten Friedenshymnen der Geschichte und ermutigte die Hörer, sich eine Welt ohne Grenzen, Religionen oder Besitztümer vorzustellen. Die einfache Klaviermelodie und die utopischen Texte des Songs fanden weltweit Resonanz. Obwohl es seine Soloarbeit nach der Auflösung der Beatles war, gilt 'Imagine' als Lennons größtes musikalisches Vermächtnis und inspiriert weiterhin Friedensbewegungen weltweit.",
          nl: "'Imagine' werd in 1971 uitgebracht als een solo-single van John Lennon, niet als een Beatles-nummer. Het werd een van de meest iconische vredeshymnes in de geschiedenis en moedigde luisteraars aan om een wereld zonder grenzen, religies of bezittingen voor te stellen. De eenvoudige pianomelodie en utopische teksten van het nummer vonden wereldwijd weerklank. Hoewel het zijn solowerk was na de ontbinding van The Beatles, wordt 'Imagine' beschouwd als Lennons grootste muzikale erfenis en blijft het vredesbewegingen over de hele wereld inspireren."
        }
      }
    ],

    // Day 10 - October 10th: Fiji independence (1970), US Naval Academy founded (1845), Giuseppe Verdi born (1813)
    day10: [
      {
        question: {
          en: "Fiji gained independence on October 10, 1970. From which colonial power?",
          es: "Fiyi obtuvo la independencia el 10 de octubre de 1970. ¿De qué potencia colonial?",
          de: "Fidschi erlangte am 10. Oktober 1970 die Unabhängigkeit. Von welcher Kolonialmacht?",
          nl: "Fiji kreeg op 10 oktober 1970 onafhankelijkheid. Van welke koloniale macht?"
        },
        options: [
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "New Zealand", es: "Nueva Zelanda", de: "Neuseeland", nl: "Nieuw-Zeeland" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Fiji gained independence from the United Kingdom on October 10, 1970, after 96 years of British colonial rule. The island nation had been ceded to Britain in 1874. The independence was celebrated peacefully, and Fiji became a sovereign state within the Commonwealth. Prince Charles represented Queen Elizabeth II at the independence ceremonies. The country's full name became the Dominion of Fiji, later becoming a republic in 1987.",
          es: "Fiyi obtuvo la independencia del Reino Unido el 10 de octubre de 1970, después de 96 años de dominio colonial británico. La nación insular había sido cedida a Gran Bretaña en 1874. La independencia se celebró pacíficamente y Fiyi se convirtió en un estado soberano dentro de la Commonwealth. El Príncipe Carlos representó a la Reina Isabel II en las ceremonias de independencia. El nombre completo del país se convirtió en el Dominio de Fiyi, convirtiéndose más tarde en una república en 1987.",
          de: "Fidschi erlangte am 10. Oktober 1970 die Unabhängigkeit vom Vereinigten Königreich nach 96 Jahren britischer Kolonialherrschaft. Die Inselnation war 1874 an Großbritannien abgetreten worden. Die Unabhängigkeit wurde friedlich gefeiert, und Fidschi wurde ein souveräner Staat innerhalb des Commonwealth. Prinz Charles vertrat Königin Elizabeth II. bei den Unabhängigkeitszeremonien. Der vollständige Name des Landes wurde Dominion Fidschi, später wurde es 1987 eine Republik.",
          nl: "Fiji kreeg op 10 oktober 1970 onafhankelijkheid van het Verenigd Koninkrijk, na 96 jaar Britse koloniale heerschappij. De eilandnatie was in 1874 aan Groot-Brittannië overgedragen. De onafhankelijkheid werd vreedzaam gevierd en Fiji werd een soevereine staat binnen het Gemenebest. Prins Charles vertegenwoordigde Koningin Elizabeth II bij de onafhankelijkheidsceremonies. De volledige naam van het land werd het Dominion van Fiji, later werd het in 1987 een republiek."
        }
      },
      {
        question: {
          en: "The United States Naval Academy was founded on October 10, 1845. In which city is it located?",
          es: "La Academia Naval de los Estados Unidos fue fundada el 10 de octubre de 1845. ¿En qué ciudad se encuentra?",
          de: "Die United States Naval Academy wurde am 10. Oktober 1845 gegründet. In welcher Stadt befindet sie sich?",
          nl: "De United States Naval Academy werd opgericht op 10 oktober 1845. In welke stad is deze gevestigd?"
        },
        options: [
          { en: "Norfolk, Virginia", es: "Norfolk, Virginia", de: "Norfolk, Virginia", nl: "Norfolk, Virginia" },
          { en: "Annapolis, Maryland", es: "Annapolis, Maryland", de: "Annapolis, Maryland", nl: "Annapolis, Maryland" },
          { en: "Newport, Rhode Island", es: "Newport, Rhode Island", de: "Newport, Rhode Island", nl: "Newport, Rhode Island" },
          { en: "Charleston, South Carolina", es: "Charleston, Carolina del Sur", de: "Charleston, South Carolina", nl: "Charleston, South Carolina" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The U.S. Naval Academy was founded in Annapolis, Maryland, on October 10, 1845, by Secretary of the Navy George Bancroft. It was established to provide professional training for naval officers. The academy sits on the banks of the Severn River and Chesapeake Bay on the site of a former Army fort. Today, it educates approximately 4,500 midshipmen in academics, physical fitness, and military training, preparing them to become officers in the Navy and Marine Corps.",
          es: "La Academia Naval de EE.UU. fue fundada en Annapolis, Maryland, el 10 de octubre de 1845, por el Secretario de la Marina George Bancroft. Fue establecida para proporcionar entrenamiento profesional para oficiales navales. La academia se encuentra a orillas del río Severn y la bahía de Chesapeake en el sitio de un antiguo fuerte del Ejército. Hoy, educa a aproximadamente 4,500 guardiamarinas en académicos, condición física y entrenamiento militar, preparándolos para convertirse en oficiales de la Marina y el Cuerpo de Marines.",
          de: "Die U.S. Naval Academy wurde am 10. Oktober 1845 in Annapolis, Maryland, von Marineminister George Bancroft gegründet. Sie wurde eingerichtet, um professionelle Ausbildung für Marineoffiziere zu bieten. Die Akademie liegt am Ufer des Severn River und der Chesapeake Bay auf dem Gelände eines ehemaligen Armeeforts. Heute bildet sie etwa 4.500 Seekadetten in Akademikern, körperlicher Fitness und militärischer Ausbildung aus und bereitet sie darauf vor, Offiziere in der Marine und dem Marine Corps zu werden.",
          nl: "De U.S. Naval Academy werd op 10 oktober 1845 in Annapolis, Maryland opgericht door marineminisiter George Bancroft. Het werd opgericht om professionele training te bieden voor marine-officieren. De academie ligt aan de oevers van de Severn River en Chesapeake Bay op de locatie van een voormalig legerfort. Vandaag de dag opleidt het ongeveer 4.500 kadetten in academische vakken, lichamelijke fitheid en militaire training, ter voorbereiding op het worden van officieren in de Marine en het Marine Corps."
        }
      },
      {
        question: {
          en: "Italian composer Giuseppe Verdi was born on October 10, 1813. Which of these is NOT one of his famous operas?",
          es: "El compositor italiano Giuseppe Verdi nació el 10 de octubre de 1813. ¿Cuál de estas NO es una de sus famosas óperas?",
          de: "Der italienische Komponist Giuseppe Verdi wurde am 10. Oktober 1813 geboren. Welche davon ist KEINE seiner berühmten Opern?",
          nl: "De Italiaanse componist Giuseppe Verdi werd geboren op 10 oktober 1813. Welke hiervan is GEEN van zijn beroemde opera's?"
        },
        options: [
          { en: "Aida", es: "Aida", de: "Aida", nl: "Aida" },
          { en: "La Traviata", es: "La Traviata", de: "La Traviata", nl: "La Traviata" },
          { en: "Carmen", es: "Carmen", de: "Carmen", nl: "Carmen" },
          { en: "Rigoletto", es: "Rigoletto", de: "Rigoletto", nl: "Rigoletto" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Carmen was composed by Georges Bizet, not Giuseppe Verdi. Verdi composed Aida, La Traviata, and Rigoletto, which are among his most famous works. Verdi is considered one of the greatest opera composers in history, dominating Italian opera in the mid-19th century. His works are noted for their dramatic power, memorable melodies, and emotional depth. Other famous Verdi operas include Il Trovatore, Otello, and Falstaff. His music continues to be performed worldwide.",
          es: "Carmen fue compuesta por Georges Bizet, no por Giuseppe Verdi. Verdi compuso Aida, La Traviata y Rigoletto, que se encuentran entre sus obras más famosas. Verdi es considerado uno de los más grandes compositores de ópera de la historia, dominando la ópera italiana a mediados del siglo XIX. Sus obras son conocidas por su poder dramático, melodías memorables y profundidad emocional. Otras óperas famosas de Verdi incluyen Il Trovatore, Otello y Falstaff. Su música continúa siendo interpretada en todo el mundo.",
          de: "Carmen wurde von Georges Bizet komponiert, nicht von Giuseppe Verdi. Verdi komponierte Aida, La Traviata und Rigoletto, die zu seinen berühmtesten Werken gehören. Verdi gilt als einer der größten Opernkomponisten der Geschichte und dominierte die italienische Oper Mitte des 19. Jahrhunderts. Seine Werke sind bekannt für ihre dramatische Kraft, einprägsame Melodien und emotionale Tiefe. Andere berühmte Verdi-Opern sind Il Trovatore, Otello und Falstaff. Seine Musik wird weiterhin weltweit aufgeführt.",
          nl: "Carmen werd gecomponeerd door Georges Bizet, niet door Giuseppe Verdi. Verdi componeerde Aida, La Traviata en Rigoletto, die tot zijn beroemdste werken behoren. Verdi wordt beschouwd als een van de grootste operacomponisten in de geschiedenis en domineerde de Italiaanse opera in het midden van de 19e eeuw. Zijn werken staan bekend om hun dramatische kracht, memorabele melodieën en emotionele diepte. Andere beroemde Verdi-opera's zijn Il Trovatore, Otello en Falstaff. Zijn muziek wordt nog steeds wereldwijd uitgevoerd."
        }
      },
      {
        question: {
          en: "What is the capital city of Fiji?",
          es: "¿Cuál es la ciudad capital de Fiyi?",
          de: "Was ist die Hauptstadt von Fidschi?",
          nl: "Wat is de hoofdstad van Fiji?"
        },
        options: [
          { en: "Nadi", es: "Nadi", de: "Nadi", nl: "Nadi" },
          { en: "Lautoka", es: "Lautoka", de: "Lautoka", nl: "Lautoka" },
          { en: "Suva", es: "Suva", de: "Suva", nl: "Suva" },
          { en: "Labasa", es: "Labasa", de: "Labasa", nl: "Labasa" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Suva is the capital and largest city of Fiji, located on the southeastern coast of Viti Levu, the country's largest island. With a population of around 93,000 in the city proper (and over 300,000 in the metropolitan area), it serves as Fiji's political, economic, and cultural center. Suva became the capital in 1882 when the colonial administration moved there from Levuka. The city is known for its harbors, colonial architecture, and diverse population representing Fiji's multicultural society.",
          es: "Suva es la capital y ciudad más grande de Fiyi, ubicada en la costa sureste de Viti Levu, la isla más grande del país. Con una población de alrededor de 93,000 en la ciudad propiamente dicha (y más de 300,000 en el área metropolitana), sirve como centro político, económico y cultural de Fiyi. Suva se convirtió en la capital en 1882 cuando la administración colonial se mudó allí desde Levuka. La ciudad es conocida por sus puertos, arquitectura colonial y población diversa que representa la sociedad multicultural de Fiyi.",
          de: "Suva ist die Hauptstadt und größte Stadt Fidschis, gelegen an der südöstlichen Küste von Viti Levu, der größten Insel des Landes. Mit einer Bevölkerung von etwa 93.000 in der eigentlichen Stadt (und über 300.000 im Ballungsraum) dient sie als politisches, wirtschaftliches und kulturelles Zentrum Fidschis. Suva wurde 1882 zur Hauptstadt, als die Kolonialverwaltung von Levuka dorthin verlegt wurde. Die Stadt ist bekannt für ihre Häfen, koloniale Architektur und diverse Bevölkerung, die Fidschis multikulturelle Gesellschaft repräsentiert.",
          nl: "Suva is de hoofdstad en grootste stad van Fiji, gelegen aan de zuidoostkust van Viti Levu, het grootste eiland van het land. Met een bevolking van ongeveer 93.000 in de stad zelf (en meer dan 300.000 in het grootstedelijk gebied) dient het als het politieke, economische en culturele centrum van Fiji. Suva werd in 1882 de hoofdstad toen de koloniale administratie daar naartoe verhuisde vanuit Levuka. De stad staat bekend om zijn havens, koloniale architectuur en diverse bevolking die de multiculturele samenleving van Fiji vertegenwoordigt."
        }
      },
      {
        question: {
          en: "Which branch of the U.S. military does the Naval Academy primarily train officers for?",
          es: "¿Para qué rama del ejército de EE.UU. entrena principalmente oficiales la Academia Naval?",
          de: "Für welchen Zweig des US-Militärs bildet die Naval Academy hauptsächlich Offiziere aus?",
          nl: "Voor welke tak van het Amerikaanse leger leidt de Naval Academy voornamelijk officieren op?"
        },
        options: [
          { en: "Army and Air Force", es: "Ejército y Fuerza Aérea", de: "Armee und Luftwaffe", nl: "Leger en Luchtmacht" },
          { en: "Navy and Marine Corps", es: "Marina y Cuerpo de Marines", de: "Marine und Marine Corps", nl: "Marine en Marine Corps" },
          { en: "Coast Guard", es: "Guardia Costera", de: "Küstenwache", nl: "Kustwacht" },
          { en: "Space Force", es: "Fuerza Espacial", de: "Weltraumstreitkräfte", nl: "Ruimtemacht" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The U.S. Naval Academy trains officers primarily for the Navy and Marine Corps. Graduates receive a Bachelor of Science degree and are commissioned as either ensigns in the Navy or second lieutenants in the Marine Corps. The rigorous four-year program includes academic courses, military training, physical fitness, and professional development. Midshipmen study subjects ranging from engineering to humanities while learning leadership and naval warfare. Graduates commit to at least five years of military service.",
          es: "La Academia Naval de EE.UU. entrena oficiales principalmente para la Marina y el Cuerpo de Marines. Los graduados reciben un título de Licenciatura en Ciencias y son comisionados como alféreces en la Marina o subtenientes en el Cuerpo de Marines. El riguroso programa de cuatro años incluye cursos académicos, entrenamiento militar, condición física y desarrollo profesional. Los guardiamarinas estudian materias que van desde ingeniería hasta humanidades mientras aprenden liderazgo y guerra naval. Los graduados se comprometen a al menos cinco años de servicio militar.",
          de: "Die U.S. Naval Academy bildet Offiziere hauptsächlich für die Marine und das Marine Corps aus. Absolventen erhalten einen Bachelor of Science-Abschluss und werden entweder als Leutnants zur See in der Marine oder als Zweite Leutnants im Marine Corps in Dienst gestellt. Das anspruchsvolle vierjährige Programm umfasst akademische Kurse, militärische Ausbildung, körperliche Fitness und berufliche Entwicklung. Seekadetten studieren Fächer von Ingenieurwesen bis Geisteswissenschaften, während sie Führung und Seekriegsführung lernen. Absolventen verpflichten sich zu mindestens fünf Jahren Militärdienst.",
          nl: "De U.S. Naval Academy leidt officieren voornamelijk op voor de Marine en het Marine Corps. Afgestudeerden ontvangen een Bachelor of Science-graad en worden benoemd tot vaandrig in de Marine of tweede luitenant in het Marine Corps. Het strenge vierjarige programma omvat academische cursussen, militaire training, lichamelijke fitheid en professionele ontwikkeling. Kadetten studeren vakken variërend van techniek tot geesteswetenschappen terwijl ze leiderschap en marine-oorlogsvoering leren. Afgestudeerden verplichten zich tot minimaal vijf jaar militaire dienst."
        }
      }
    ],

    // Day 11 - October 11th: Eleanor Roosevelt born (1884), First Saturday Night Live (1975), Mason-Dixon Line completed (1767)
    day11: [
      {
        question: {
          en: "Eleanor Roosevelt was born on October 11, 1884. What role did she hold that redefined the position's activism?",
          es: "Eleanor Roosevelt nació el 11 de octubre de 1884. ¿Qué papel desempeñó que redefinió el activismo del cargo?",
          de: "Eleanor Roosevelt wurde am 11. Oktober 1884 geboren. Welche Rolle hatte sie inne, die den Aktivismus der Position neu definierte?",
          nl: "Eleanor Roosevelt werd geboren op 11 oktober 1884. Welke rol had zij die het activisme van de positie herdefinieerde?"
        },
        options: [
          { en: "U.S. Senator", es: "Senadora de EE.UU.", de: "US-Senatorin", nl: "Amerikaanse senator" },
          { en: "First Lady of the United States", es: "Primera Dama de los Estados Unidos", de: "First Lady der Vereinigten Staaten", nl: "First Lady van de Verenigde Staten" },
          { en: "Secretary of State", es: "Secretaria de Estado", de: "Außenministerin", nl: "Minister van Buitenlandse Zaken" },
          { en: "Supreme Court Justice", es: "Jueza de la Corte Suprema", de: "Richterin am Obersten Gerichtshof", nl: "Rechter van het Hooggerechtshof" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Eleanor Roosevelt served as First Lady from 1933 to 1945, transforming the role from ceremonial to activist. She held press conferences, wrote a daily newspaper column, and advocated for civil rights, women's rights, and the poor. After Franklin D. Roosevelt's death, she became a delegate to the United Nations and chaired the committee that drafted the Universal Declaration of Human Rights. Her activism and humanitarian work made her one of the most influential women of the 20th century.",
          es: "Eleanor Roosevelt sirvió como Primera Dama de 1933 a 1945, transformando el papel de ceremonial a activista. Celebró conferencias de prensa, escribió una columna diaria en el periódico y abogó por los derechos civiles, los derechos de las mujeres y los pobres. Después de la muerte de Franklin D. Roosevelt, se convirtió en delegada de las Naciones Unidas y presidió el comité que redactó la Declaración Universal de los Derechos Humanos. Su activismo y trabajo humanitario la convirtieron en una de las mujeres más influyentes del siglo XX.",
          de: "Eleanor Roosevelt diente von 1933 bis 1945 als First Lady und verwandelte die Rolle von zeremoniell zu aktivistisch. Sie hielt Pressekonferenzen ab, schrieb eine tägliche Zeitungskolumne und setzte sich für Bürgerrechte, Frauenrechte und die Armen ein. Nach Franklin D. Roosevelts Tod wurde sie Delegierte bei den Vereinten Nationen und leitete den Ausschuss, der die Allgemeine Erklärung der Menschenrechte entwarf. Ihr Aktivismus und ihre humanitäre Arbeit machten sie zu einer der einflussreichsten Frauen des 20. Jahrhunderts.",
          nl: "Eleanor Roosevelt diende van 1933 tot 1945 als First Lady en transformeerde de rol van ceremonieel naar activist. Ze hield persconferenties, schreef een dagelijkse krantencolumn en pleitte voor burgerrechten, vrouwenrechten en de armen. Na de dood van Franklin D. Roosevelt werd ze afgevaardigde bij de Verenigde Naties en leidde ze het comité dat de Universele Verklaring van de Rechten van de Mens opstelde. Haar activisme en humanitaire werk maakten haar een van de meest invloedrijke vrouwen van de 20e eeuw."
        }
      },
      {
        question: {
          en: "Saturday Night Live premiered on October 11, 1975. Who was the first host of the show?",
          es: "Saturday Night Live se estrenó el 11 de octubre de 1975. ¿Quién fue el primer anfitrión del programa?",
          de: "Saturday Night Live hatte am 11. Oktober 1975 Premiere. Wer war der erste Moderator der Show?",
          nl: "Saturday Night Live ging in première op 11 oktober 1975. Wie was de eerste presentator van de show?"
        },
        options: [
          { en: "Chevy Chase", es: "Chevy Chase", de: "Chevy Chase", nl: "Chevy Chase" },
          { en: "Steve Martin", es: "Steve Martin", de: "Steve Martin", nl: "Steve Martin" },
          { en: "George Carlin", es: "George Carlin", de: "George Carlin", nl: "George Carlin" },
          { en: "Richard Pryor", es: "Richard Pryor", de: "Richard Pryor", nl: "Richard Pryor" }
        ],
        correctIndex: 2,
        explanation: {
          en: "George Carlin was the first host of Saturday Night Live when it premiered on October 11, 1975, originally titled 'NBC's Saturday Night.' The show was created by Lorne Michaels and featured a cast of unknown comedians who became known as the 'Not Ready for Prime Time Players.' The inaugural episode also featured musical guests Billy Preston and Janis Ian. SNL has since become the longest-running variety show in American television history, launching the careers of countless comedians and actors.",
          es: "George Carlin fue el primer anfitrión de Saturday Night Live cuando se estrenó el 11 de octubre de 1975, originalmente titulado 'NBC's Saturday Night'. El programa fue creado por Lorne Michaels y presentó un elenco de comediantes desconocidos que se hicieron conocidos como los 'Not Ready for Prime Time Players'. El episodio inaugural también presentó a los invitados musicales Billy Preston y Janis Ian. SNL se ha convertido desde entonces en el programa de variedades de mayor duración en la historia de la televisión estadounidense, lanzando las carreras de innumerables comediantes y actores.",
          de: "George Carlin war der erste Moderator von Saturday Night Live, als es am 11. Oktober 1975 Premiere hatte, ursprünglich mit dem Titel 'NBC's Saturday Night'. Die Show wurde von Lorne Michaels kreiert und zeigte eine Besetzung unbekannter Komiker, die als 'Not Ready for Prime Time Players' bekannt wurden. Die Premierenepisode zeigte auch die musikalischen Gäste Billy Preston und Janis Ian. SNL ist seitdem die am längsten laufende Varieté-Show in der amerikanischen Fernsehgeschichte und hat die Karrieren unzähliger Komiker und Schauspieler gestartet.",
          nl: "George Carlin was de eerste presentator van Saturday Night Live toen het op 11 oktober 1975 in première ging, oorspronkelijk getiteld 'NBC's Saturday Night'. De show werd gecreëerd door Lorne Michaels en bevatte een cast van onbekende komieken die bekend werden als de 'Not Ready for Prime Time Players'. De eerste aflevering had ook muzikale gasten Billy Preston en Janis Ian. SNL is sindsdien de langstlopende varietéshow in de Amerikaanse televisiegeschiedenis geworden en heeft de carrières van talloze komieken en acteurs gelanceerd."
        }
      },
      {
        question: {
          en: "The Mason-Dixon Line survey was completed on October 11, 1767. What did this boundary line traditionally separate?",
          es: "El estudio de la Línea Mason-Dixon se completó el 11 de octubre de 1767. ¿Qué separaba tradicionalmente esta línea fronteriza?",
          de: "Die Vermessung der Mason-Dixon-Linie wurde am 11. Oktober 1767 abgeschlossen. Was trennte diese Grenzlinie traditionell?",
          nl: "De Mason-Dixon-lijnmeting werd voltooid op 11 oktober 1767. Wat scheidde deze grenslijn traditioneel?"
        },
        options: [
          { en: "Federal and state lands", es: "Tierras federales y estatales", de: "Bundes- und Staatsland", nl: "Federale en staatsgebieden" },
          { en: "The East Coast and Midwest", es: "La Costa Este y el Medio Oeste", de: "Die Ostküste und der Mittlere Westen", nl: "De Oostkust en het Middenwesten" },
          { en: "The North and South (free and slave states)", es: "El Norte y el Sur (estados libres y esclavistas)", de: "Nord und Süd (freie und Sklavenstaaten)", nl: "Het Noorden en het Zuiden (vrije en slavenstaten)" },
          { en: "The United States and Canada", es: "Estados Unidos y Canadá", de: "Die Vereinigten Staaten und Kanada", nl: "De Verenigde Staten en Canada" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Mason-Dixon Line originally settled a border dispute between Pennsylvania and Maryland but became the symbolic division between free states in the North and slave states in the South before the Civil War. Surveyors Charles Mason and Jeremiah Dixon completed the 233-mile boundary in 1767 after five years of work. During the antebellum period, crossing the Mason-Dixon Line meant the difference between slavery and freedom for escaped slaves. The line remains culturally significant as a division between Northern and Southern United States.",
          es: "La Línea Mason-Dixon resolvió originalmente una disputa fronteriza entre Pensilvania y Maryland, pero se convirtió en la división simbólica entre estados libres en el Norte y estados esclavistas en el Sur antes de la Guerra Civil. Los topógrafos Charles Mason y Jeremiah Dixon completaron la frontera de 233 millas en 1767 después de cinco años de trabajo. Durante el período anterior a la guerra, cruzar la Línea Mason-Dixon significaba la diferencia entre esclavitud y libertad para los esclavos fugitivos. La línea sigue siendo culturalmente significativa como una división entre el norte y el sur de Estados Unidos.",
          de: "Die Mason-Dixon-Linie regelte ursprünglich einen Grenzstreit zwischen Pennsylvania und Maryland, wurde aber zur symbolischen Teilung zwischen freien Staaten im Norden und Sklavenstaaten im Süden vor dem Bürgerkrieg. Die Landvermesser Charles Mason und Jeremiah Dixon vollendeten die 233-Meilen-Grenze 1767 nach fünf Jahren Arbeit. Während der Vorkriegszeit bedeutete das Überqueren der Mason-Dixon-Linie den Unterschied zwischen Sklaverei und Freiheit für entflohene Sklaven. Die Linie bleibt kulturell bedeutsam als Teilung zwischen den nördlichen und südlichen Vereinigten Staaten.",
          nl: "De Mason-Dixon-lijn loste oorspronkelijk een grensgeschil op tussen Pennsylvania en Maryland, maar werd de symbolische scheiding tussen vrije staten in het Noorden en slavenstaten in het Zuiden vóór de Burgeroorlog. Landmeters Charles Mason en Jeremiah Dixon voltooiden de 233-mijl grens in 1767 na vijf jaar werk. Tijdens de vooroorlogse periode betekende het oversteken van de Mason-Dixon-lijn het verschil tussen slavernij en vrijheid voor ontsnapte slaven. De lijn blijft cultureel significant als een scheiding tussen het noordelijke en zuidelijke deel van de Verenigde Staten."
        }
      },
      {
        question: {
          en: "What important document did Eleanor Roosevelt help draft for the United Nations?",
          es: "¿Qué documento importante ayudó Eleanor Roosevelt a redactar para las Naciones Unidas?",
          de: "Welches wichtige Dokument half Eleanor Roosevelt für die Vereinten Nationen zu entwerfen?",
          nl: "Welk belangrijk document hielp Eleanor Roosevelt opstellen voor de Verenigde Naties?"
        },
        options: [
          { en: "The UN Charter", es: "La Carta de la ONU", de: "Die UN-Charta", nl: "Het VN-Handvest" },
          { en: "The Universal Declaration of Human Rights", es: "La Declaración Universal de los Derechos Humanos", de: "Die Allgemeine Erklärung der Menschenrechte", nl: "De Universele Verklaring van de Rechten van de Mens" },
          { en: "The Geneva Conventions", es: "Las Convenciones de Ginebra", de: "Die Genfer Konventionen", nl: "De Geneefse Conventies" },
          { en: "The Treaty of Versailles", es: "El Tratado de Versalles", de: "Der Vertrag von Versailles", nl: "Het Verdrag van Versailles" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Eleanor Roosevelt chaired the United Nations Commission on Human Rights and was instrumental in drafting the Universal Declaration of Human Rights, adopted in 1948. She called it her greatest achievement. The declaration established fundamental human rights to be universally protected and has been translated into over 500 languages. Her leadership and diplomatic skills were crucial in gaining consensus among nations with different political systems and cultural values. The document remains the foundation of international human rights law.",
          es: "Eleanor Roosevelt presidió la Comisión de Derechos Humanos de las Naciones Unidas y fue fundamental en la redacción de la Declaración Universal de los Derechos Humanos, adoptada en 1948. Ella la llamó su mayor logro. La declaración estableció derechos humanos fundamentales para ser protegidos universalmente y ha sido traducida a más de 500 idiomas. Su liderazgo y habilidades diplomáticas fueron cruciales para obtener consenso entre naciones con diferentes sistemas políticos y valores culturales. El documento sigue siendo la base del derecho internacional de derechos humanos.",
          de: "Eleanor Roosevelt leitete die Menschenrechtskommission der Vereinten Nationen und war maßgeblich an der Ausarbeitung der Allgemeinen Erklärung der Menschenrechte beteiligt, die 1948 verabschiedet wurde. Sie nannte sie ihre größte Errungenschaft. Die Erklärung etablierte grundlegende Menschenrechte, die universell geschützt werden sollen, und wurde in über 500 Sprachen übersetzt. Ihre Führung und diplomatischen Fähigkeiten waren entscheidend für die Konsensbildung zwischen Nationen mit unterschiedlichen politischen Systemen und kulturellen Werten. Das Dokument bleibt die Grundlage des internationalen Menschenrechtsrechts.",
          nl: "Eleanor Roosevelt leidde de Mensenrechtencommissie van de Verenigde Naties en speelde een cruciale rol bij het opstellen van de Universele Verklaring van de Rechten van de Mens, aangenomen in 1948. Ze noemde het haar grootste prestatie. De verklaring stelde fundamentele mensenrechten vast die universeel beschermd moeten worden en is vertaald in meer dan 500 talen. Haar leiderschap en diplomatieke vaardigheden waren cruciaal bij het verkrijgen van consensus tussen naties met verschillende politieke systemen en culturele waarden. Het document blijft de basis van internationaal mensenrechtenrecht."
        }
      },
      {
        question: {
          en: "Saturday Night Live is known for its political satire. What is the show's signature opening segment?",
          es: "Saturday Night Live es conocido por su sátira política. ¿Cuál es el segmento de apertura característico del programa?",
          de: "Saturday Night Live ist bekannt für seine politische Satire. Was ist das charakteristische Eröffnungssegment der Show?",
          nl: "Saturday Night Live staat bekend om zijn politieke satire. Wat is het kenmerkende openingssegment van de show?"
        },
        options: [
          { en: "Weekend Update", es: "Weekend Update", de: "Weekend Update", nl: "Weekend Update" },
          { en: "Cold Open", es: "Cold Open", de: "Cold Open", nl: "Cold Open" },
          { en: "Musical Performance", es: "Actuación Musical", de: "Musikalische Darbietung", nl: "Muzikale Uitvoering" },
          { en: "Monologue", es: "Monólogo", de: "Monolog", nl: "Monoloog" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Saturday Night Live's signature opening is the 'Cold Open,' a comedy sketch that begins without introduction and typically addresses current political or cultural events. The cold open ends with a cast member declaring 'Live from New York, it's Saturday Night!' followed by the show's opening credits. This format has become iconic, with political cold opens often going viral and influencing public discourse. The show's political impersonations, from Chevy Chase's Gerald Ford to Alec Baldwin's Donald Trump, have become cultural touchstones.",
          es: "La apertura característica de Saturday Night Live es el 'Cold Open', un sketch de comedia que comienza sin introducción y típicamente aborda eventos políticos o culturales actuales. El cold open termina con un miembro del elenco declarando '¡En vivo desde Nueva York, es sábado por la noche!' seguido de los créditos de apertura del programa. Este formato se ha vuelto icónico, con cold opens políticos que a menudo se vuelven virales e influyen en el discurso público. Las imitaciones políticas del programa, desde Gerald Ford de Chevy Chase hasta Donald Trump de Alec Baldwin, se han convertido en referentes culturales.",
          de: "Saturday Night Lives charakteristische Eröffnung ist der 'Cold Open', ein Comedy-Sketch, der ohne Einführung beginnt und typischerweise aktuelle politische oder kulturelle Ereignisse behandelt. Der Cold Open endet damit, dass ein Cast-Mitglied erklärt 'Live aus New York, es ist Samstagabend!', gefolgt von den Eröffnungscredits der Show. Dieses Format ist ikonisch geworden, wobei politische Cold Opens oft viral gehen und öffentliche Diskurse beeinflussen. Die politischen Imitationen der Show, von Chevy Chases Gerald Ford bis Alec Baldwins Donald Trump, sind zu kulturellen Bezugspunkten geworden.",
          nl: "De kenmerkende opening van Saturday Night Live is de 'Cold Open', een komische sketch die begint zonder introductie en doorgaans ingaat op actuele politieke of culturele gebeurtenissen. De cold open eindigt met een castlid dat verklaart 'Live vanuit New York, het is zaterdagavond!' gevolgd door de openingscredits van de show. Dit formaat is iconisch geworden, waarbij politieke cold opens vaak viraal gaan en het publieke discours beïnvloeden. De politieke imitaties van de show, van Chevy Chase's Gerald Ford tot Alec Baldwin's Donald Trump, zijn culturele ijkpunten geworden."
        }
      }
    ],

    // Day 12 - October 12th: Columbus reaches Americas (1492), Bahamas independence (1968), Luciano Pavarotti born (1935)
    day12: [
      {
        question: {
          en: "Christopher Columbus reached the Americas on October 12, 1492. Which island in the Bahamas did he first land on?",
          es: "Cristóbal Colón llegó a las Américas el 12 de octubre de 1492. ¿En qué isla de las Bahamas desembarcó primero?",
          de: "Christoph Kolumbus erreichte Amerika am 12. Oktober 1492. Auf welcher Insel der Bahamas landete er zuerst?",
          nl: "Christoffel Columbus bereikte Amerika op 12 oktober 1492. Op welk eiland van de Bahamas landde hij eerst?"
        },
        options: [
          { en: "Hispaniola", es: "La Española", de: "Hispaniola", nl: "Hispaniola" },
          { en: "San Salvador (Guanahani)", es: "San Salvador (Guanahani)", de: "San Salvador (Guanahani)", nl: "San Salvador (Guanahani)" },
          { en: "Cuba", es: "Cuba", de: "Kuba", nl: "Cuba" },
          { en: "Jamaica", es: "Jamaica", de: "Jamaika", nl: "Jamaica" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Columbus first landed on an island the indigenous Lucayan people called Guanahani, which he renamed San Salvador (meaning 'Holy Savior'). The exact location is disputed, but most historians believe it was present-day San Salvador Island in the Bahamas. The Lucayan people who met Columbus would be virtually extinct within 25 years due to disease and enslavement. Columbus believed he had reached the East Indies, which is why he called the indigenous people 'Indians.' This voyage initiated widespread European exploration and colonization of the Americas.",
          es: "Colón desembarcó por primera vez en una isla que los indígenas lucayos llamaban Guanahani, que él rebautizó como San Salvador (que significa 'Santo Salvador'). La ubicación exacta es disputada, pero la mayoría de los historiadores creen que fue la actual isla de San Salvador en las Bahamas. El pueblo lucayo que conoció a Colón estaría virtualmente extinto en 25 años debido a enfermedades y esclavitud. Colón creía que había llegado a las Indias Orientales, por eso llamó a los indígenas 'indios'. Este viaje inició la exploración y colonización europea generalizada de las Américas.",
          de: "Kolumbus landete zuerst auf einer Insel, die die indigenen Lucayan Guanahani nannten, die er in San Salvador (bedeutet 'Heiliger Retter') umbenannte. Der genaue Standort ist umstritten, aber die meisten Historiker glauben, es war die heutige San Salvador-Insel auf den Bahamas. Das Lucayan-Volk, das Kolumbus traf, würde innerhalb von 25 Jahren durch Krankheit und Versklavung praktisch ausgestorben sein. Kolumbus glaubte, er hätte die Ostindien erreicht, weshalb er die Indigenen 'Indianer' nannte. Diese Reise leitete die weitverbreitete europäische Erkundung und Kolonisierung Amerikas ein.",
          nl: "Columbus landde eerst op een eiland dat de inheemse Lucayaanse bevolking Guanahani noemde, dat hij hernoemde naar San Salvador (wat 'Heilige Verlosser' betekent). De exacte locatie is omstreden, maar de meeste historici geloven dat het het huidige San Salvador-eiland in de Bahamas was. Het Lucayaanse volk dat Columbus ontmoette zou binnen 25 jaar vrijwel uitgestorven zijn door ziekte en slavernij. Columbus geloofde dat hij Oost-Indië had bereikt, daarom noemde hij de inheemse bevolking 'Indianen'. Deze reis leidde tot wijdverspreide Europese verkenning en kolonisatie van Amerika."
        }
      },
      {
        question: {
          en: "The Bahamas gained independence on October 12, 1968, from which colonial power?",
          es: "Las Bahamas obtuvieron la independencia el 12 de octubre de 1968, ¿de qué potencia colonial?",
          de: "Die Bahamas erlangten am 12. Oktober 1968 die Unabhängigkeit von welcher Kolonialmacht?",
          nl: "De Bahamas werden onafhankelijk op 12 oktober 1968, van welke koloniale macht?"
        },
        options: [
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", nl: "Verenigd Koninkrijk" },
          { en: "Netherlands", es: "Países Bajos", de: "Niederlande", nl: "Nederland" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Bahamas gained independence from the United Kingdom on July 10, 1973 (not 1968 - that was when internal self-government was granted). The Bahamas had been a British colony since 1718. The country remains part of the Commonwealth, with the British monarch as head of state represented by a Governor-General. Sir Lynden Pindling became the first Prime Minister of the independent Bahamas. The islands' strategic location made them important during both colonial times and the modern era.",
          es: "Las Bahamas obtuvieron la independencia del Reino Unido el 10 de julio de 1973 (no en 1968, ese fue el año en que se otorgó el autogobierno interno). Las Bahamas habían sido una colonia británica desde 1718. El país sigue siendo parte de la Commonwealth, con el monarca británico como jefe de estado representado por un Gobernador General. Sir Lynden Pindling se convirtió en el primer Primer Ministro de las Bahamas independientes. La ubicación estratégica de las islas las hizo importantes tanto durante la época colonial como en la era moderna.",
          de: "Die Bahamas erlangten am 10. Juli 1973 die Unabhängigkeit vom Vereinigten Königreich (nicht 1968 - das war, als die interne Selbstverwaltung gewährt wurde). Die Bahamas waren seit 1718 eine britische Kolonie. Das Land bleibt Teil des Commonwealth, mit dem britischen Monarchen als Staatsoberhaupt, vertreten durch einen Generalgouverneur. Sir Lynden Pindling wurde der erste Premierminister der unabhängigen Bahamas. Die strategische Lage der Inseln machte sie sowohl in der Kolonialzeit als auch in der modernen Ära wichtig.",
          nl: "De Bahamas werden onafhankelijk van het Verenigd Koninkrijk op 10 juli 1973 (niet 1968 - dat was toen intern zelfbestuur werd verleend). De Bahamas waren sinds 1718 een Britse kolonie. Het land blijft deel van het Gemenebest, met de Britse monarch als staatshoofd vertegenwoordigd door een Gouverneur-Generaal. Sir Lynden Pindling werd de eerste Premier van de onafhankelijke Bahamas. De strategische ligging van de eilanden maakte ze belangrijk tijdens zowel de koloniale tijden als het moderne tijdperk."
        }
      },
      {
        question: {
          en: "Luciano Pavarotti was born on October 12, 1935. In which vocal range did this legendary opera singer perform?",
          es: "Luciano Pavarotti nació el 12 de octubre de 1935. ¿En qué rango vocal actuó este legendario cantante de ópera?",
          de: "Luciano Pavarotti wurde am 12. Oktober 1935 geboren. In welcher Stimmlage trat dieser legendäre Opernsänger auf?",
          nl: "Luciano Pavarotti werd geboren op 12 oktober 1935. In welk vocaal bereik trad deze legendarische operazanger op?"
        },
        options: [
          { en: "Bass", es: "Bajo", de: "Bass", nl: "Bas" },
          { en: "Baritone", es: "Barítono", de: "Bariton", nl: "Bariton" },
          { en: "Tenor", es: "Tenor", de: "Tenor", nl: "Tenor" },
          { en: "Countertenor", es: "Contratenor", de: "Countertenor", nl: "Contratenor" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Luciano Pavarotti was one of the most celebrated tenors in opera history. Born in Modena, Italy, he became famous for his powerful voice, exceptional breath control, and brilliant high C notes. Pavarotti was part of 'The Three Tenors' alongside Plácido Domingo and José Carreras, bringing opera to massive mainstream audiences through stadium concerts. His signature arias included 'Nessun Dorma' from Puccini's Turandot. He performed at major opera houses worldwide and won numerous Grammy Awards before his death in 2007.",
          es: "Luciano Pavarotti fue uno de los tenores más célebres en la historia de la ópera. Nacido en Módena, Italia, se hizo famoso por su voz poderosa, excepcional control de la respiración y brillantes notas de do agudo. Pavarotti fue parte de 'Los Tres Tenores' junto a Plácido Domingo y José Carreras, llevando la ópera a audiencias masivas del mainstream a través de conciertos en estadios. Sus arias características incluían 'Nessun Dorma' de Turandot de Puccini. Actuó en las principales casas de ópera del mundo y ganó numerosos premios Grammy antes de su muerte en 2007.",
          de: "Luciano Pavarotti war einer der gefeiertsten Tenöre der Operngeschichte. Geboren in Modena, Italien, wurde er berühmt für seine kraftvolle Stimme, außergewöhnliche Atemkontrolle und brillante hohe C-Töne. Pavarotti war Teil von 'Die Drei Tenöre' neben Plácido Domingo und José Carreras und brachte die Oper durch Stadionkonzerte einem massiven Mainstream-Publikum näher. Zu seinen charakteristischen Arien gehörte 'Nessun Dorma' aus Puccinis Turandot. Er trat an großen Opernhäusern weltweit auf und gewann zahlreiche Grammy Awards vor seinem Tod im Jahr 2007.",
          nl: "Luciano Pavarotti was een van de meest gevierde tenoren in de operageschiedenis. Geboren in Modena, Italië, werd hij beroemd om zijn krachtige stem, uitzonderlijke ademcontrole en briljante hoge C-noten. Pavarotti was onderdeel van 'De Drie Tenoren' naast Plácido Domingo en José Carreras, en bracht opera naar grote mainstream publiek via stadion concerten. Zijn kenmerkende aria's omvatten 'Nessun Dorma' uit Puccini's Turandot. Hij trad op in grote operahuizen wereldwijd en won talrijke Grammy Awards voor zijn dood in 2007."
        }
      },
      {
        question: {
          en: "What were the names of Columbus's three ships on his first voyage to the Americas?",
          es: "¿Cuáles eran los nombres de los tres barcos de Colón en su primer viaje a las Américas?",
          de: "Wie hießen die drei Schiffe von Kolumbus auf seiner ersten Reise nach Amerika?",
          nl: "Wat waren de namen van Columbus' drie schepen op zijn eerste reis naar Amerika?"
        },
        options: [
          { en: "Mayflower, Speedwell, Discovery", es: "Mayflower, Speedwell, Discovery", de: "Mayflower, Speedwell, Discovery", nl: "Mayflower, Speedwell, Discovery" },
          { en: "Golden Hind, Pelican, Elizabeth", es: "Golden Hind, Pelican, Elizabeth", de: "Golden Hind, Pelican, Elizabeth", nl: "Golden Hind, Pelican, Elizabeth" },
          { en: "Victoria, Trinidad, Santiago", es: "Victoria, Trinidad, Santiago", de: "Victoria, Trinidad, Santiago", nl: "Victoria, Trinidad, Santiago" },
          { en: "Santa Maria, Pinta, Nina", es: "Santa María, Pinta, Niña", de: "Santa Maria, Pinta, Niña", nl: "Santa Maria, Pinta, Nina" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Columbus's three ships were the Santa Maria (his flagship), the Pinta, and the Niña. The Santa Maria was the largest but ran aground on Christmas Day 1492 near present-day Haiti. Columbus used its timbers to build a fort called La Navidad, the first Spanish settlement in the Americas. The Pinta was the fastest ship and was first to sight land. The Niña was Columbus's favorite and brought him back to Spain. These small ships, carrying about 90 men total, changed world history forever.",
          es: "Los tres barcos de Colón fueron la Santa María (su buque insignia), la Pinta y la Niña. La Santa María era la más grande pero encalló el día de Navidad de 1492 cerca del actual Haití. Colón usó sus maderas para construir un fuerte llamado La Navidad, el primer asentamiento español en las Américas. La Pinta era el barco más rápido y fue el primero en avistar tierra. La Niña era la favorita de Colón y lo llevó de regreso a España. Estos pequeños barcos, que llevaban alrededor de 90 hombres en total, cambiaron la historia mundial para siempre.",
          de: "Kolumbus' drei Schiffe waren die Santa Maria (sein Flaggschiff), die Pinta und die Niña. Die Santa Maria war das größte, lief aber am Weihnachtstag 1492 in der Nähe des heutigen Haiti auf Grund. Kolumbus verwendete ihr Holz, um eine Festung namens La Navidad zu bauen, die erste spanische Siedlung in Amerika. Die Pinta war das schnellste Schiff und sichtete als erste Land. Die Niña war Kolumbus' Favorit und brachte ihn zurück nach Spanien. Diese kleinen Schiffe, die insgesamt etwa 90 Männer trugen, veränderten die Weltgeschichte für immer.",
          nl: "Columbus' drie schepen waren de Santa Maria (zijn vlaggenschip), de Pinta en de Niña. De Santa Maria was de grootste maar liep op Kerstdag 1492 aan de grond bij het huidige Haïti. Columbus gebruikte het hout om een fort te bouwen genaamd La Navidad, de eerste Spaanse nederzetting in Amerika. De Pinta was het snelste schip en was het eerste dat land zag. De Niña was Columbus' favoriet en bracht hem terug naar Spanje. Deze kleine schepen, met in totaal ongeveer 90 mannen, veranderden de wereldgeschiedenis voor altijd."
        }
      },
      {
        question: {
          en: "Which famous opera aria became Pavarotti's signature song?",
          es: "¿Qué famosa aria de ópera se convirtió en la canción característica de Pavarotti?",
          de: "Welche berühmte Opernarie wurde Pavarottis Erkennungsmelodie?",
          nl: "Welke beroemde opera-aria werd Pavarotti's kenmerkende lied?"
        },
        options: [
          { en: "La donna è mobile", es: "La donna è mobile", de: "La donna è mobile", nl: "La donna è mobile" },
          { en: "Nessun Dorma", es: "Nessun Dorma", de: "Nessun Dorma", nl: "Nessun Dorma" },
          { en: "O Sole Mio", es: "O Sole Mio", de: "O Sole Mio", nl: "O Sole Mio" },
          { en: "Ave Maria", es: "Ave María", de: "Ave Maria", nl: "Ave Maria" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'Nessun Dorma' from Puccini's opera Turandot became Pavarotti's signature aria and one of the most recognized pieces of opera music worldwide. The aria's title means 'None shall sleep' in Italian. Pavarotti's performances of this piece, especially during the 1990 FIFA World Cup in Italy with The Three Tenors, brought it to unprecedented popularity. The aria's climactic final note 'Vincerò!' ('I will win!') showcased Pavarotti's powerful high notes. His 1972 Metropolitan Opera performance of this aria is considered legendary.",
          es: "'Nessun Dorma' de la ópera Turandot de Puccini se convirtió en el aria característica de Pavarotti y una de las piezas de música de ópera más reconocidas en todo el mundo. El título del aria significa 'Que nadie duerma' en italiano. Las interpretaciones de Pavarotti de esta pieza, especialmente durante la Copa Mundial de la FIFA de 1990 en Italia con Los Tres Tenores, la llevaron a una popularidad sin precedentes. La nota final climática del aria '¡Vincerò!' ('¡Venceré!') mostró las poderosas notas altas de Pavarotti. Su actuación en la Ópera Metropolitana de 1972 de esta aria se considera legendaria.",
          de: "'Nessun Dorma' aus Puccinis Oper Turandot wurde Pavarottis charakteristische Arie und eines der bekanntesten Opernmusikstücke weltweit. Der Titel der Arie bedeutet 'Keiner schlafe' auf Italienisch. Pavarottis Aufführungen dieses Stücks, besonders während der FIFA-Weltmeisterschaft 1990 in Italien mit Die Drei Tenöre, brachten es zu beispielloser Popularität. Die klimaktische Schlussnote der Arie 'Vincerò!' ('Ich werde siegen!') zeigte Pavarottis kraftvolle hohe Töne. Seine Aufführung in der Metropolitan Opera 1972 dieser Arie gilt als legendär.",
          nl: "'Nessun Dorma' uit Puccini's opera Turandot werd Pavarotti's kenmerkende aria en een van de meest herkende stukken operamuziek wereldwijd. De titel van de aria betekent 'Niemand zal slapen' in het Italiaans. Pavarotti's uitvoeringen van dit stuk, vooral tijdens het FIFA Wereldkampioenschap van 1990 in Italië met De Drie Tenoren, brachten het naar ongekende populariteit. De climactische laatste noot van de aria 'Vincerò!' ('Ik zal winnen!') toonde Pavarotti's krachtige hoge noten. Zijn optreden in de Metropolitan Opera van 1972 van deze aria wordt als legendarisch beschouwd."
        }
      }
    ],

    // Day 13 - October 13th: US Navy established (1775), Margaret Thatcher born (1925), Knights Templar arrested (1307)
    day13: [
      {
        question: {
          en: "The United States Navy was established on October 13, 1775. During which conflict was this naval force created?",
          es: "La Armada de los Estados Unidos se estableció el 13 de octubre de 1775. ¿Durante qué conflicto se creó esta fuerza naval?",
          de: "Die United States Navy wurde am 13. Oktober 1775 gegründet. Während welches Konflikts wurde diese Seestreitmacht geschaffen?",
          nl: "De United States Navy werd opgericht op 13 oktober 1775. Tijdens welk conflict werd deze zeemacht gecreëerd?"
        },
        options: [
          { en: "War of 1812", es: "Guerra de 1812", de: "Krieg von 1812", nl: "Oorlog van 1812" },
          { en: "American Revolutionary War", es: "Guerra de Independencia de los Estados Unidos", de: "Amerikanischer Unabhängigkeitskrieg", nl: "Amerikaanse Onafhankelijkheidsoorlog" },
          { en: "Civil War", es: "Guerra Civil", de: "Bürgerkrieg", nl: "Burgeroorlog" },
          { en: "French and Indian War", es: "Guerra Franco-India", de: "Franzosen- und Indianerkrieg", nl: "Frans-Indiaanse Oorlog" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Continental Navy, predecessor to the United States Navy, was established by the Continental Congress during the American Revolutionary War to counter British naval superiority. The first resolution authorized two armed vessels to intercept British supply ships. The Navy was disbanded after the war in 1785 but was re-established in 1794. Today, the U.S. Navy is the world's largest and most powerful naval force, with October 13 celebrated as the Navy's official birthday. The early Navy faced tremendous challenges fighting the British Royal Navy, then the world's dominant sea power.",
          es: "La Armada Continental, predecesora de la Armada de los Estados Unidos, fue establecida por el Congreso Continental durante la Guerra de Independencia de los Estados Unidos para contrarrestar la superioridad naval británica. La primera resolución autorizó dos barcos armados para interceptar barcos de suministro británicos. La Armada fue disuelta después de la guerra en 1785, pero fue restablecida en 1794. Hoy, la Armada de los EE.UU. es la fuerza naval más grande y poderosa del mundo, con el 13 de octubre celebrado como el cumpleaños oficial de la Armada. La Armada temprana enfrentó tremendos desafíos luchando contra la Marina Real Británica, entonces el poder marítimo dominante del mundo.",
          de: "Die Continental Navy, Vorgängerin der United States Navy, wurde vom Kontinentalkongress während des Amerikanischen Unabhängigkeitskrieges gegründet, um der britischen Seeüberlegenheit entgegenzuwirken. Die erste Resolution genehmigte zwei bewaffnete Schiffe zur Abfangung britischer Versorgungsschiffe. Die Marine wurde nach dem Krieg 1785 aufgelöst, aber 1794 wieder eingerichtet. Heute ist die US Navy die größte und mächtigste Seestreitmacht der Welt, wobei der 13. Oktober als offizieller Geburtstag der Marine gefeiert wird. Die frühe Marine stand vor enormen Herausforderungen im Kampf gegen die British Royal Navy, damals die dominierende Seemacht der Welt.",
          nl: "De Continental Navy, voorloper van de United States Navy, werd opgericht door het Continentale Congres tijdens de Amerikaanse Onafhankelijkheidsoorlog om de Britse zeeovermacht tegen te gaan. De eerste resolutie gaf toestemming voor twee gewapende schepen om Britse bevoorradingsschepen te onderscheppen. De marine werd na de oorlog in 1785 ontbonden maar werd heropgericht in 1794. Vandaag is de Amerikaanse marine 's werelds grootste en krachtigste zeemacht, met 13 oktober gevierd als de officiële verjaardag van de marine. De vroege marine had te maken met enorme uitdagingen in de strijd tegen de Britse Royal Navy, toen 's werelds dominante zeemacht."
        }
      },
      {
        question: {
          en: "Margaret Thatcher was born on October 13, 1925. What historic distinction did she achieve in British politics?",
          es: "Margaret Thatcher nació el 13 de octubre de 1925. ¿Qué distinción histórica logró en la política británica?",
          de: "Margaret Thatcher wurde am 13. Oktober 1925 geboren. Welche historische Auszeichnung erreichte sie in der britischen Politik?",
          nl: "Margaret Thatcher werd geboren op 13 oktober 1925. Welke historische onderscheiding behaalde zij in de Britse politiek?"
        },
        options: [
          { en: "First female Member of Parliament", es: "Primera mujer miembro del Parlamento", de: "Erste weibliche Parlamentsabgeordnete", nl: "Eerste vrouwelijke parlementariër" },
          { en: "First female Prime Minister", es: "Primera mujer Primera Ministra", de: "Erste weibliche Premierministerin", nl: "Eerste vrouwelijke Eerste Minister" },
          { en: "First female monarch", es: "Primera mujer monarca", de: "Erste weibliche Monarchin", nl: "Eerste vrouwelijke monarch" },
          { en: "First female Foreign Secretary", es: "Primera mujer Secretaria de Relaciones Exteriores", de: "Erste weibliche Außenministerin", nl: "Eerste vrouwelijke Minister van Buitenlandse Zaken" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Margaret Thatcher became the United Kingdom's first female Prime Minister in 1979, serving until 1990—the longest-serving British PM of the 20th century. Known as the 'Iron Lady' for her uncompromising politics and leadership style, she implemented conservative economic policies that became known as 'Thatcherism.' She privatized state-owned industries, reduced trade union power, and maintained a strong anti-communist stance. Her tenure included the Falklands War victory and close alliance with U.S. President Ronald Reagan. She remains a deeply polarizing figure in British history.",
          es: "Margaret Thatcher se convirtió en la primera mujer Primera Ministra del Reino Unido en 1979, sirviendo hasta 1990, la Primera Ministra británica más longeva del siglo XX. Conocida como la 'Dama de Hierro' por su política intransigente y estilo de liderazgo, implementó políticas económicas conservadoras que se conocieron como 'Thatcherismo'. Privatizó industrias estatales, redujo el poder de los sindicatos y mantuvo una fuerte postura anticomunista. Su mandato incluyó la victoria en la Guerra de las Malvinas y una estrecha alianza con el presidente estadounidense Ronald Reagan. Sigue siendo una figura profundamente polarizadora en la historia británica.",
          de: "Margaret Thatcher wurde 1979 die erste weibliche Premierministerin des Vereinigten Königreichs und amtierte bis 1990 – die am längsten dienende britische Premierministerin des 20. Jahrhunderts. Als 'Eiserne Lady' bekannt für ihre kompromisslose Politik und Führungsstil, implementierte sie konservative Wirtschaftspolitik, die als 'Thatcherismus' bekannt wurde. Sie privatisierte staatseigene Industrien, reduzierte die Macht der Gewerkschaften und behielt eine starke antikommunistische Haltung bei. Ihre Amtszeit umfasste den Sieg im Falklandkrieg und enge Allianz mit US-Präsident Ronald Reagan. Sie bleibt eine zutiefst polarisierende Figur in der britischen Geschichte.",
          nl: "Margaret Thatcher werd in 1979 de eerste vrouwelijke Eerste Minister van het Verenigd Koninkrijk en diende tot 1990—de langst dienende Britse premier van de 20e eeuw. Bekend als de 'Ijzeren Dame' vanwege haar compromisloze politiek en leiderschapsstijl, implementeerde ze conservatief economisch beleid dat bekend werd als 'Thatcherisme'. Ze privatiseerde staatsbedrijven, verminderde de macht van vakbonden en handhaafde een sterk anticommunistisch standpunt. Haar ambtstermijn omvatte de overwinning in de Falklandoorlog en nauwe alliantie met de Amerikaanse president Ronald Reagan. Ze blijft een diep polariserend figuur in de Britse geschiedenis."
        }
      },
      {
        question: {
          en: "On October 13, 1307, King Philip IV of France ordered the arrest of the Knights Templar. What were the Knights Templar originally?",
          es: "El 13 de octubre de 1307, el rey Felipe IV de Francia ordenó el arresto de los Caballeros Templarios. ¿Qué eran originalmente los Caballeros Templarios?",
          de: "Am 13. Oktober 1307 befahl König Philipp IV. von Frankreich die Verhaftung der Tempelritter. Was waren die Tempelritter ursprünglich?",
          nl: "Op 13 oktober 1307 beval koning Filips IV van Frankrijk de arrestatie van de Tempeliers. Wat waren de Tempeliers oorspronkelijk?"
        },
        options: [
          { en: "A banking guild", es: "Un gremio bancario", de: "Eine Bankgilde", nl: "Een bankgilde" },
          { en: "A military religious order protecting pilgrims", es: "Una orden militar religiosa que protegía peregrinos", de: "Ein militärisch-religiöser Orden zum Schutz von Pilgern", nl: "Een militaire religieuze orde die pelgrims beschermde" },
          { en: "A merchant trading company", es: "Una compañía comercial de mercaderes", de: "Ein Handelsunternehmen", nl: "Een handelsonderneming" },
          { en: "A royal guard unit", es: "Una unidad de guardia real", de: "Eine königliche Gardeeinheit", nl: "Een koninklijke garde-eenheid" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Knights Templar were founded around 1119 as a Catholic military order to protect Christian pilgrims traveling to the Holy Land after the First Crusade. They became wealthy and powerful through donations and banking operations, essentially creating an early international banking system. King Philip IV of France, heavily in debt to the Templars, ordered their arrest on Friday, October 13, 1307—possibly the origin of Friday the 13th superstition. Many Templars were tortured into false confessions of heresy. Pope Clement V dissolved the order in 1312. Their mysterious end has inspired numerous legends and conspiracy theories.",
          es: "Los Caballeros Templarios fueron fundados alrededor de 1119 como una orden militar católica para proteger a los peregrinos cristianos que viajaban a Tierra Santa después de la Primera Cruzada. Se volvieron ricos y poderosos a través de donaciones y operaciones bancarias, creando esencialmente un sistema bancario internacional temprano. El rey Felipe IV de Francia, muy endeudado con los Templarios, ordenó su arresto el viernes 13 de octubre de 1307, posiblemente el origen de la superstición del viernes 13. Muchos Templarios fueron torturados para obtener falsas confesiones de herejía. El Papa Clemente V disolvió la orden en 1312. Su final misterioso ha inspirado numerosas leyendas y teorías de conspiración.",
          de: "Die Tempelritter wurden um 1119 als katholischer Militärorden gegründet, um christliche Pilger zu schützen, die nach dem Ersten Kreuzzug ins Heilige Land reisten. Sie wurden wohlhabend und mächtig durch Spenden und Bankgeschäfte und schufen im Wesentlichen ein frühes internationales Bankensystem. König Philipp IV. von Frankreich, stark bei den Templern verschuldet, befahl ihre Verhaftung am Freitag, dem 13. Oktober 1307 - möglicherweise der Ursprung des Aberglaubens um Freitag den 13. Viele Templer wurden zu falschen Geständnissen der Ketzerei gefoltert. Papst Clemens V. löste den Orden 1312 auf. Ihr mysteriöses Ende hat zahlreiche Legenden und Verschwörungstheorien inspiriert.",
          nl: "De Tempeliers werden rond 1119 opgericht als een katholieke militaire orde om christelijke pelgrims te beschermen die naar het Heilige Land reisden na de Eerste Kruistocht. Ze werden rijk en machtig door donaties en bankactiviteiten, en creëerden in wezen een vroeg internationaal banksysteem. Koning Filips IV van Frankrijk, zwaar in de schuld bij de Tempeliers, beval hun arrestatie op vrijdag 13 oktober 1307—mogelijk de oorsprong van het bijgeloof van vrijdag de 13e. Veel Tempeliers werden gemarteld tot valse bekentenissen van ketterij. Paus Clemens V ontbond de orde in 1312. Hun mysterieuze einde heeft talrijke legendes en complottheorieën geïnspireerd."
        }
      },
      {
        question: {
          en: "What nickname did Margaret Thatcher earn for her firm political stance during the Cold War?",
          es: "¿Qué apodo ganó Margaret Thatcher por su firme postura política durante la Guerra Fría?",
          de: "Welchen Spitznamen erhielt Margaret Thatcher für ihre feste politische Haltung während des Kalten Krieges?",
          nl: "Welke bijnaam kreeg Margaret Thatcher voor haar ferme politieke standpunt tijdens de Koude Oorlog?"
        },
        options: [
          { en: "The Steel Lady", es: "La Dama de Acero", de: "Die Stahldame", nl: "De Stalen Dame" },
          { en: "The Iron Lady", es: "La Dama de Hierro", de: "Die Eiserne Lady", nl: "De Ijzeren Dame" },
          { en: "The Bronze Baroness", es: "La Baronesa de Bronce", de: "Die Bronzene Baronin", nl: "De Bronzen Barones" },
          { en: "The Copper Queen", es: "La Reina de Cobre", de: "Die Kupferkönigin", nl: "De Koperen Koningin" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Margaret Thatcher was nicknamed 'The Iron Lady' by the Soviet press in 1976, before she became Prime Minister. The name came from a speech where she warned against Soviet aggression and advocated for strong defense. Rather than rejecting the name, Thatcher embraced it, and it became her defining moniker. The nickname perfectly captured her reputation for being uncompromising, strong-willed, and steadfast in her political convictions. It reflected her tough stance against communism, her leadership during the Falklands War, and her refusal to back down in domestic political battles.",
          es: "Margaret Thatcher fue apodada 'La Dama de Hierro' por la prensa soviética en 1976, antes de convertirse en Primera Ministra. El nombre provino de un discurso en el que advirtió contra la agresión soviética y abogó por una defensa fuerte. En lugar de rechazar el nombre, Thatcher lo abrazó, y se convirtió en su apodo definitorio. El apodo capturó perfectamente su reputación de ser intransigente, de voluntad fuerte y firme en sus convicciones políticas. Reflejó su postura dura contra el comunismo, su liderazgo durante la Guerra de las Malvinas y su negativa a retroceder en batallas políticas internas.",
          de: "Margaret Thatcher wurde 1976 von der sowjetischen Presse als 'Die Eiserne Lady' bezeichnet, bevor sie Premierministerin wurde. Der Name stammte von einer Rede, in der sie vor sowjetischer Aggression warnte und für eine starke Verteidigung plädierte. Anstatt den Namen abzulehnen, nahm Thatcher ihn an, und er wurde ihr definierender Beiname. Der Spitzname erfasste perfekt ihren Ruf, kompromisslos, willensstark und standhaft in ihren politischen Überzeugungen zu sein. Er spiegelte ihre harte Haltung gegen den Kommunismus, ihre Führung während des Falklandkrieges und ihre Weigerung wider, in innenpolitischen Kämpfen zurückzuweichen.",
          nl: "Margaret Thatcher kreeg de bijnaam 'De Ijzeren Dame' van de Sovjet-pers in 1976, voordat ze Eerste Minister werd. De naam kwam van een toespraak waarin ze waarschuwde voor Sovjet-agressie en pleitte voor sterke defensie. In plaats van de naam af te wijzen, omarmde Thatcher deze, en het werd haar bepalende bijnaam. De bijnaam vatte perfect haar reputatie samen van compromisloos, wilskrachtig en standvastig te zijn in haar politieke overtuigingen. Het weerspiegelde haar harde standpunt tegen het communisme, haar leiderschap tijdens de Falklandoorlog en haar weigering om terug te deinzen in binnenlandse politieke gevechten."
        }
      },
      {
        question: {
          en: "What happened to the Knights Templar's Grand Master, Jacques de Molay, after their arrest in 1307?",
          es: "¿Qué le sucedió al Gran Maestro de los Caballeros Templarios, Jacques de Molay, después de su arresto en 1307?",
          de: "Was geschah mit dem Großmeister der Tempelritter, Jacques de Molay, nach ihrer Verhaftung 1307?",
          nl: "Wat gebeurde er met de Grootmeester van de Tempeliers, Jacques de Molay, na hun arrestatie in 1307?"
        },
        options: [
          { en: "He was exiled to England", es: "Fue exiliado a Inglaterra", de: "Er wurde nach England verbannt", nl: "Hij werd verbannen naar Engeland" },
          { en: "He escaped to Scotland", es: "Escapó a Escocia", de: "Er floh nach Schottland", nl: "Hij ontsnapte naar Schotland" },
          { en: "He was burned at the stake in 1314", es: "Fue quemado en la hoguera en 1314", de: "Er wurde 1314 auf dem Scheiterhaufen verbrannt", nl: "Hij werd op de brandstapel verbrand in 1314" },
          { en: "He was pardoned by the Pope", es: "Fue perdonado por el Papa", de: "Er wurde vom Papst begnadigt", nl: "Hij werd begenadig door de Paus" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Jacques de Molay, the last Grand Master of the Knights Templar, was burned at the stake on March 18, 1314, on an island in the Seine River in Paris. After years of imprisonment and torture, he and other Templar leaders were sentenced to life in prison. However, when de Molay publicly recanted his forced confession and proclaimed the Templars' innocence, King Philip IV ordered him burned at the stake immediately. Legend says de Molay cursed both King Philip and Pope Clement V from the flames, predicting they would die within a year—which both did. This execution marked the tragic end of the powerful Templar order.",
          es: "Jacques de Molay, el último Gran Maestro de los Caballeros Templarios, fue quemado en la hoguera el 18 de marzo de 1314, en una isla en el río Sena en París. Después de años de encarcelamiento y tortura, él y otros líderes Templarios fueron sentenciados a cadena perpetua. Sin embargo, cuando de Molay se retractó públicamente de su confesión forzada y proclamó la inocencia de los Templarios, el rey Felipe IV ordenó quemarlo en la hoguera inmediatamente. La leyenda dice que de Molay maldijo tanto al rey Felipe como al Papa Clemente V desde las llamas, prediciendo que morirían dentro de un año, lo cual ambos hicieron. Esta ejecución marcó el final trágico de la poderosa orden Templaria.",
          de: "Jacques de Molay, der letzte Großmeister der Tempelritter, wurde am 18. März 1314 auf einer Insel in der Seine in Paris auf dem Scheiterhaufen verbrannt. Nach Jahren der Gefangenschaft und Folter wurden er und andere Templerführer zu lebenslanger Haft verurteilt. Als de Molay jedoch sein erzwungenes Geständnis öffentlich widerrief und die Unschuld der Templer verkündete, befahl König Philipp IV. seine sofortige Verbrennung auf dem Scheiterhaufen. Die Legende besagt, de Molay habe sowohl König Philipp als auch Papst Clemens V. aus den Flammen verflucht und vorhergesagt, dass sie innerhalb eines Jahres sterben würden – was beide taten. Diese Hinrichtung markierte das tragische Ende des mächtigen Templerordens.",
          nl: "Jacques de Molay, de laatste Grootmeester van de Tempeliers, werd op 18 maart 1314 op de brandstapel verbrand op een eiland in de Seine in Parijs. Na jaren van gevangenschap en marteling werden hij en andere Tempelierleiders veroordeeld tot levenslang. Toen de Molay echter zijn gedwongen bekentenis publiekelijk herriep en de onschuld van de Tempeliers proclameerde, beval koning Filips IV hem onmiddellijk op de brandstapel te verbranden. De legende zegt dat de Molay zowel koning Filips als Paus Clemens V vanuit de vlammen vervloekte en voorspelde dat ze binnen een jaar zouden sterven—wat beiden deden. Deze executie markeerde het tragische einde van de machtige Tempelorde."
        }
      }
    ],

    // Day 14 - October 14th: Battle of Hastings (1066), Chuck Yeager breaks sound barrier (1947), Martin Luther King Jr. Nobel Peace Prize (1964)
    day14: [
      {
        question: {
          en: "The Battle of Hastings took place on October 14, 1066. Who were the two main leaders fighting for the English throne?",
          es: "La Batalla de Hastings tuvo lugar el 14 de octubre de 1066. ¿Quiénes fueron los dos líderes principales que lucharon por el trono inglés?",
          de: "Die Schlacht von Hastings fand am 14. Oktober 1066 statt. Wer waren die zwei Hauptführer, die um den englischen Thron kämpften?",
          nl: "De Slag bij Hastings vond plaats op 14 oktober 1066. Wie waren de twee belangrijkste leiders die streden om de Engelse troon?"
        },
        options: [
          { en: "Richard the Lionheart and Saladin", es: "Ricardo Corazón de León y Saladino", de: "Richard Löwenherz und Saladin", nl: "Richard Leeuwenhart en Saladin" },
          { en: "Edward the Confessor and Harald Hardrada", es: "Eduardo el Confesor y Harald Hardrada", de: "Eduard der Bekenner und Harald Hardrada", nl: "Edward de Belijder en Harald Hardrada" },
          { en: "Henry VIII and Francis I", es: "Enrique VIII y Francisco I", de: "Heinrich VIII. und Franz I.", nl: "Hendrik VIII en Frans I" },
          { en: "William of Normandy and King Harold II", es: "Guillermo de Normandía y el Rey Harold II", de: "Wilhelm von der Normandie und König Harald II.", nl: "Willem van Normandië en Koning Harold II" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Battle of Hastings was fought between William, Duke of Normandy (later known as William the Conqueror) and King Harold II of England. Harold had just defeated a Norwegian invasion at the Battle of Stamford Bridge and marched his exhausted army south to face William's invasion. During the battle, Harold was killed—allegedly by an arrow to the eye. William's victory ended Anglo-Saxon rule in England and began Norman control, fundamentally changing English culture, language, and governance. The Bayeux Tapestry famously depicts this historic battle.",
          es: "La Batalla de Hastings se libró entre Guillermo, Duque de Normandía (más tarde conocido como Guillermo el Conquistador) y el Rey Harold II de Inglaterra. Harold acababa de derrotar una invasión noruega en la Batalla de Stamford Bridge y marchó con su ejército exhausto hacia el sur para enfrentar la invasión de Guillermo. Durante la batalla, Harold fue asesinado, supuestamente por una flecha en el ojo. La victoria de Guillermo terminó el gobierno anglosajón en Inglaterra e inició el control normando, cambiando fundamentalmente la cultura, el idioma y el gobierno ingleses. El Tapiz de Bayeux representa famosamente esta batalla histórica.",
          de: "Die Schlacht von Hastings wurde zwischen Wilhelm, Herzog der Normandie (später bekannt als Wilhelm der Eroberer) und König Harald II. von England ausgetragen. Harald hatte gerade eine norwegische Invasion in der Schlacht von Stamford Bridge besiegt und marschierte mit seinem erschöpften Heer nach Süden, um Wilhelms Invasion zu begegnen. Während der Schlacht wurde Harald getötet - angeblich durch einen Pfeil ins Auge. Wilhelms Sieg beendete die angelsächsische Herrschaft in England und begann die normannische Kontrolle, was die englische Kultur, Sprache und Regierung grundlegend veränderte. Der Teppich von Bayeux zeigt berühmt diese historische Schlacht.",
          nl: "De Slag bij Hastings werd uitgevochten tussen Willem, hertog van Normandië (later bekend als Willem de Veroveraar) en Koning Harold II van Engeland. Harold had net een Noorse invasie verslagen in de Slag bij Stamford Bridge en marcheerde met zijn uitgeputte leger naar het zuiden om Willems invasie te confronteren. Tijdens de slag werd Harold gedood—naar verluidt door een pijl in zijn oog. Willems overwinning beëindigde de Angelsaksische heerschappij in Engeland en begon de Normandische controle, waardoor de Engelse cultuur, taal en bestuur fundamenteel veranderde. Het Tapijt van Bayeux beeldt deze historische slag beroemd af."
        }
      },
      {
        question: {
          en: "Chuck Yeager broke the sound barrier on October 14, 1947. What was the name of the experimental aircraft he flew?",
          es: "Chuck Yeager rompió la barrera del sonido el 14 de octubre de 1947. ¿Cuál era el nombre del avión experimental que pilotó?",
          de: "Chuck Yeager durchbrach am 14. Oktober 1947 die Schallmauer. Wie hieß das experimentelle Flugzeug, das er flog?",
          nl: "Chuck Yeager doorbrak de geluidsbarrière op 14 oktober 1947. Wat was de naam van het experimentele vliegtuig dat hij vloog?"
        },
        options: [
          { en: "Spirit of St. Louis", es: "Spirit of St. Louis", de: "Spirit of St. Louis", nl: "Spirit of St. Louis" },
          { en: "Bell X-1", es: "Bell X-1", de: "Bell X-1", nl: "Bell X-1" },
          { en: "Wright Flyer", es: "Wright Flyer", de: "Wright Flyer", nl: "Wright Flyer" },
          { en: "Concorde", es: "Concorde", de: "Concorde", nl: "Concorde" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Chuck Yeager piloted the Bell X-1, nicknamed 'Glamorous Glennis' after his wife, when he became the first person to break the sound barrier. The rocket-powered aircraft reached Mach 1.06 (700 mph) at 45,000 feet over the Mojave Desert. Remarkably, Yeager flew with two broken ribs from a horseback riding accident two days earlier. The achievement was kept classified until 1948. Breaking the sound barrier was a pivotal moment in aviation history, paving the way for supersonic flight and space exploration. The sonic boom created when breaking the barrier had been a major technical challenge.",
          es: "Chuck Yeager pilotó el Bell X-1, apodado 'Glamorous Glennis' en honor a su esposa, cuando se convirtió en la primera persona en romper la barrera del sonido. El avión propulsado por cohetes alcanzó Mach 1.06 (700 mph) a 45,000 pies sobre el Desierto de Mojave. Notablemente, Yeager voló con dos costillas rotas por un accidente a caballo dos días antes. El logro se mantuvo clasificado hasta 1948. Romper la barrera del sonido fue un momento crucial en la historia de la aviación, allanando el camino para el vuelo supersónico y la exploración espacial. El estampido sónico creado al romper la barrera había sido un gran desafío técnico.",
          de: "Chuck Yeager flog die Bell X-1, genannt 'Glamorous Glennis' nach seiner Frau, als er als erste Person die Schallmauer durchbrach. Das raketengetriebene Flugzeug erreichte Mach 1,06 (700 mph) in 45.000 Fuß Höhe über der Mojave-Wüste. Bemerkenswerterweise flog Yeager mit zwei gebrochenen Rippen von einem Reitunfall zwei Tage zuvor. Die Errungenschaft wurde bis 1948 geheim gehalten. Das Durchbrechen der Schallmauer war ein entscheidender Moment in der Luftfahrtgeschichte und ebnete den Weg für Überschallflüge und Weltraumforschung. Der Überschallknall beim Durchbrechen der Barriere war eine große technische Herausforderung gewesen.",
          nl: "Chuck Yeager vloog de Bell X-1, bijgenaamd 'Glamorous Glennis' naar zijn vrouw, toen hij de eerste persoon werd die de geluidsbarrière doorbrak. Het raketaangedreven vliegtuig bereikte Mach 1,06 (700 mph) op 45.000 voet boven de Mojave-woestijn. Opmerkelijk genoeg vloog Yeager met twee gebroken ribben van een paardrijongeval twee dagen eerder. De prestatie werd tot 1948 geheim gehouden. Het doorbreken van de geluidsbarrière was een cruciaal moment in de luchtvaartgeschiedenis en maakte de weg vrij voor supersonische vluchten en ruimteverkenning. De supersonische knal die ontstond bij het doorbreken van de barrière was een grote technische uitdaging geweest."
        }
      },
      {
        question: {
          en: "Martin Luther King Jr. was awarded the Nobel Peace Prize on October 14, 1964. At what age did he receive this honor?",
          es: "Martin Luther King Jr. recibió el Premio Nobel de la Paz el 14 de octubre de 1964. ¿A qué edad recibió este honor?",
          de: "Martin Luther King Jr. wurde am 14. Oktober 1964 der Friedensnobelpreis verliehen. In welchem Alter erhielt er diese Ehre?",
          nl: "Martin Luther King Jr. werd bekroond met de Nobelprijs voor de Vrede op 14 oktober 1964. Op welke leeftijd ontving hij deze eer?"
        },
        options: [
          { en: "29 years old", es: "29 años", de: "29 Jahre alt", nl: "29 jaar oud" },
          { en: "35 years old", es: "35 años", de: "35 Jahre alt", nl: "35 jaar oud" },
          { en: "42 years old", es: "42 años", de: "42 Jahre alt", nl: "42 jaar oud" },
          { en: "48 years old", es: "48 años", de: "48 Jahre alt", nl: "48 jaar oud" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Martin Luther King Jr. received the Nobel Peace Prize at age 35, making him the youngest man at that time to receive the award. He was honored for his nonviolent resistance to racial prejudice in America. King donated the $54,123 prize money to the civil rights movement. In his acceptance speech, he stated he accepted the prize 'on behalf of a civil rights movement which is moving with determination and a majestic scorn for risk and danger to establish a reign of freedom and a rule of justice.' Tragically, he was assassinated less than four years later in April 1968.",
          es: "Martin Luther King Jr. recibió el Premio Nobel de la Paz a los 35 años, convirtiéndose en el hombre más joven en ese momento en recibir el premio. Fue honrado por su resistencia no violenta al prejuicio racial en América. King donó los $54,123 del premio al movimiento por los derechos civiles. En su discurso de aceptación, declaró que aceptaba el premio 'en nombre de un movimiento de derechos civiles que se mueve con determinación y un desprecio majestuoso por el riesgo y el peligro para establecer un reino de libertad y un estado de justicia'. Trágicamente, fue asesinado menos de cuatro años después en abril de 1968.",
          de: "Martin Luther King Jr. erhielt den Friedensnobelpreis im Alter von 35 Jahren und war damit der jüngste Mann zu dieser Zeit, der die Auszeichnung erhielt. Er wurde für seinen gewaltlosen Widerstand gegen Rassenvorurteile in Amerika geehrt. King spendete das Preisgeld von $54.123 an die Bürgerrechtsbewegung. In seiner Dankesrede erklärte er, er nehme den Preis 'im Namen einer Bürgerrechtsbewegung an, die sich mit Entschlossenheit und majestätischer Verachtung für Risiko und Gefahr bewegt, um eine Herrschaft der Freiheit und eine Herrschaft der Gerechtigkeit zu etablieren'. Tragischerweise wurde er weniger als vier Jahre später im April 1968 ermordet.",
          nl: "Martin Luther King Jr. ontving de Nobelprijs voor de Vrede op 35-jarige leeftijd, waardoor hij de jongste man op dat moment was die de prijs ontving. Hij werd geëerd voor zijn geweldloze verzet tegen raciale vooroordelen in Amerika. King doneerde het prijzengeld van $54.123 aan de burgerrechtenbeweging. In zijn aanvaardingsspeech verklaarde hij dat hij de prijs accepteerde 'namens een burgerrechtenbeweging die beweegt met vastberadenheid en een majestueuze minachting voor risico en gevaar om een rijk van vrijheid en een regel van rechtvaardigheid te vestigen'. Tragisch genoeg werd hij minder dan vier jaar later in april 1968 vermoord."
        }
      },
      {
        question: {
          en: "What lasting impact did the Norman conquest at the Battle of Hastings have on the English language?",
          es: "¿Qué impacto duradero tuvo la conquista normanda en la Batalla de Hastings en el idioma inglés?",
          de: "Welche dauerhafte Auswirkung hatte die normannische Eroberung in der Schlacht von Hastings auf die englische Sprache?",
          nl: "Welke blijvende impact had de Normandische verovering bij de Slag bij Hastings op de Engelse taal?"
        },
        options: [
          { en: "It introduced German vocabulary", es: "Introdujo vocabulario alemán", de: "Es führte deutsches Vokabular ein", nl: "Het introduceerde Duits vocabulaire" },
          { en: "It introduced thousands of French words", es: "Introdujo miles de palabras francesas", de: "Es führte Tausende französischer Wörter ein", nl: "Het introduceerde duizenden Franse woorden" },
          { en: "It replaced all Anglo-Saxon words", es: "Reemplazó todas las palabras anglosajonas", de: "Es ersetzte alle angelsächsischen Wörter", nl: "Het verving alle Angelsaksische woorden" },
          { en: "It had no effect on the language", es: "No tuvo efecto en el idioma", de: "Es hatte keine Auswirkung auf die Sprache", nl: "Het had geen effect op de taal" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Norman Conquest introduced thousands of French words into English, fundamentally transforming the language. Norman French became the language of the royal court, government, and aristocracy for over 300 years. This created a linguistic divide where Anglo-Saxon words remained for common things while French words were used for formal or elite concepts. For example, animals have Anglo-Saxon names (cow, pig, sheep) but their meat has French names (beef, pork, mutton). Modern English is estimated to have borrowed over 10,000 words from Norman French, making English a uniquely hybrid Germanic-Romance language.",
          es: "La Conquista Normanda introdujo miles de palabras francesas al inglés, transformando fundamentalmente el idioma. El francés normando se convirtió en el idioma de la corte real, el gobierno y la aristocracia durante más de 300 años. Esto creó una división lingüística donde las palabras anglosajonas permanecieron para cosas comunes mientras que las palabras francesas se usaban para conceptos formales o de élite. Por ejemplo, los animales tienen nombres anglosajones (cow, pig, sheep) pero su carne tiene nombres franceses (beef, pork, mutton). Se estima que el inglés moderno ha tomado prestadas más de 10,000 palabras del francés normando, haciendo del inglés un idioma germánico-romance híbrido único.",
          de: "Die normannische Eroberung führte Tausende französischer Wörter ins Englische ein und verwandelte die Sprache grundlegend. Normannisches Französisch wurde über 300 Jahre lang die Sprache des königlichen Hofes, der Regierung und der Aristokratie. Dies schuf eine sprachliche Kluft, bei der angelsächsische Wörter für gewöhnliche Dinge blieben, während französische Wörter für formelle oder elitäre Konzepte verwendet wurden. Zum Beispiel haben Tiere angelsächsische Namen (cow, pig, sheep), aber ihr Fleisch hat französische Namen (beef, pork, mutton). Das moderne Englisch hat schätzungsweise über 10.000 Wörter aus dem Normannischen Französisch übernommen, was Englisch zu einer einzigartig hybriden germanisch-romanischen Sprache macht.",
          nl: "De Normandische Verovering introduceerde duizenden Franse woorden in het Engels en transformeerde de taal fundamenteel. Normandisch Frans werd meer dan 300 jaar lang de taal van het koninklijk hof, de regering en de aristocratie. Dit creëerde een linguïstische kloof waarbij Angelsaksische woorden bleven voor gewone dingen terwijl Franse woorden werden gebruikt voor formele of elite concepten. Bijvoorbeeld, dieren hebben Angelsaksische namen (cow, pig, sheep) maar hun vlees heeft Franse namen (beef, pork, mutton). Geschat wordt dat modern Engels meer dan 10.000 woorden heeft geleend van het Normandisch Frans, waardoor Engels een unieke hybride Germaans-Romaanse taal is."
        }
      },
      {
        question: {
          en: "What philosophy of protest did Martin Luther King Jr. champion that led to his Nobel Peace Prize?",
          es: "¿Qué filosofía de protesta defendió Martin Luther King Jr. que lo llevó a su Premio Nobel de la Paz?",
          de: "Welche Protestphilosophie vertrat Martin Luther King Jr., die zu seinem Friedensnobelpreis führte?",
          nl: "Welke protestfilosofie verdedigde Martin Luther King Jr. die leidde tot zijn Nobelprijs voor de Vrede?"
        },
        options: [
          { en: "Armed revolution", es: "Revolución armada", de: "Bewaffnete Revolution", nl: "Gewapende revolutie" },
          { en: "Nonviolent resistance", es: "Resistencia no violenta", de: "Gewaltloser Widerstand", nl: "Geweldloos verzet" },
          { en: "Economic boycotts only", es: "Solo boicots económicos", de: "Nur wirtschaftliche Boykotte", nl: "Alleen economische boycots" },
          { en: "Political separatism", es: "Separatismo político", de: "Politischer Separatismus", nl: "Politiek separatisme" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Martin Luther King Jr. championed nonviolent resistance, inspired by Mahatma Gandhi's philosophy of nonviolent civil disobedience. He believed that peaceful protest and civil disobedience were the most powerful weapons for achieving racial equality. This approach included tactics like sit-ins, boycotts, marches, and peaceful demonstrations. King's commitment to nonviolence, even in the face of violent opposition, beatings, and arrests, demonstrated moral courage that earned worldwide respect. His 'I Have a Dream' speech and the March on Washington exemplified this peaceful yet powerful approach to social change. The Nobel Committee specifically cited his nonviolent campaign as the reason for the award.",
          es: "Martin Luther King Jr. defendió la resistencia no violenta, inspirado por la filosofía de desobediencia civil no violenta de Mahatma Gandhi. Creía que la protesta pacífica y la desobediencia civil eran las armas más poderosas para lograr la igualdad racial. Este enfoque incluía tácticas como sentadas, boicots, marchas y manifestaciones pacíficas. El compromiso de King con la no violencia, incluso frente a la oposición violenta, golpizas y arrestos, demostró coraje moral que ganó respeto mundial. Su discurso 'Tengo un sueño' y la Marcha en Washington ejemplificaron este enfoque pacífico pero poderoso para el cambio social. El Comité Nobel citó específicamente su campaña no violenta como la razón del premio.",
          de: "Martin Luther King Jr. setzte sich für gewaltlosen Widerstand ein, inspiriert von Mahatma Gandhis Philosophie des gewaltlosen zivilen Ungehorsams. Er glaubte, dass friedlicher Protest und ziviler Ungehorsam die mächtigsten Waffen zur Erreichung rassischer Gleichheit waren. Dieser Ansatz umfasste Taktiken wie Sit-ins, Boykotte, Märsche und friedliche Demonstrationen. Kings Engagement für Gewaltlosigkeit, selbst angesichts gewalttätiger Opposition, Schlägen und Verhaftungen, zeigte moralischen Mut, der weltweite Anerkennung erlangte. Seine 'I Have a Dream'-Rede und der Marsch auf Washington verkörperten diesen friedlichen, aber kraftvollen Ansatz für sozialen Wandel. Das Nobelkomitee nannte ausdrücklich seine gewaltlose Kampagne als Grund für die Auszeichnung.",
          nl: "Martin Luther King Jr. verdedigde geweldloos verzet, geïnspireerd door Mahatma Gandhi's filosofie van geweldloze burgerlijke ongehoorzaamheid. Hij geloofde dat vreedzaam protest en burgerlijke ongehoorzaamheid de krachtigste wapens waren om raciale gelijkheid te bereiken. Deze benadering omvatte tactieken zoals sit-ins, boycots, marsen en vreedzame demonstraties. Kings toewijding aan geweldloosheid, zelfs in het aangezicht van gewelddadige oppositie, slagen en arrestaties, toonde morele moed die wereldwijde respect verdiende. Zijn 'I Have a Dream'-toespraak en de Mars op Washington waren voorbeelden van deze vreedzame maar krachtige benadering van sociale verandering. Het Nobel Comité noemde specifiek zijn geweldloze campagne als reden voor de prijs."
        }
      }
    ],

    // Day 15 - October 15th: Nietzsche, Balloon Flight, I Love Lucy
    day15: [
      {
        question: {
          en: "Friedrich Nietzsche was born on October 15, 1844. Which famous philosophical concept is he best known for declaring?",
          es: "Friedrich Nietzsche nació el 15 de octubre de 1844. ¿Por qué concepto filosófico famoso es más conocido?",
          de: "Friedrich Nietzsche wurde am 15. Oktober 1844 geboren. Für welches berühmte philosophische Konzept ist er am bekanntesten?",
          nl: "Friedrich Nietzsche werd geboren op 15 oktober 1844. Voor welk beroemd filosofisch concept is hij het meest bekend?"
        },
        options: [
          { en: "The social contract", es: "El contrato social", de: "Der Gesellschaftsvertrag", nl: "Het sociale contract" },
          { en: "'God is dead'", es: "'Dios ha muerto'", de: "'Gott ist tot'", nl: "'God is dood'" },
          { en: "The categorical imperative", es: "El imperativo categórico", de: "Der kategorische Imperativ", nl: "De categorische imperatief" },
          { en: "Cogito ergo sum", es: "Cogito ergo sum", de: "Cogito ergo sum", nl: "Cogito ergo sum" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nietzsche famously proclaimed 'God is dead' in his works, particularly in 'The Gay Science' and 'Thus Spoke Zarathustra'. This wasn't a literal statement about God's existence, but rather a cultural observation that traditional religious values and absolute moral truths were losing their power in Western society. Nietzsche argued that the Enlightenment and rise of science had undermined religious authority, leaving a vacuum in moral guidance. He believed humanity needed to create new values and meaning without relying on religious doctrine. This concept profoundly influenced existentialism, postmodernism, and 20th-century philosophy.",
          es: "Nietzsche proclamó famosamente 'Dios ha muerto' en sus obras, particularmente en 'La gaya ciencia' y 'Así habló Zaratustra'. Esta no era una declaración literal sobre la existencia de Dios, sino más bien una observación cultural de que los valores religiosos tradicionales y las verdades morales absolutas estaban perdiendo su poder en la sociedad occidental. Nietzsche argumentó que la Ilustración y el surgimiento de la ciencia habían socavado la autoridad religiosa, dejando un vacío en la guía moral. Creía que la humanidad necesitaba crear nuevos valores y significado sin depender de la doctrina religiosa. Este concepto influyó profundamente en el existencialismo, el posmodernismo y la filosofía del siglo XX.",
          de: "Nietzsche verkündete berühmt 'Gott ist tot' in seinen Werken, insbesondere in 'Die fröhliche Wissenschaft' und 'Also sprach Zarathustra'. Dies war keine wörtliche Aussage über Gottes Existenz, sondern eher eine kulturelle Beobachtung, dass traditionelle religiöse Werte und absolute moralische Wahrheiten in der westlichen Gesellschaft an Macht verloren. Nietzsche argumentierte, dass die Aufklärung und der Aufstieg der Wissenschaft die religiöse Autorität untergraben hatten, was ein Vakuum in der moralischen Führung hinterließ. Er glaubte, dass die Menschheit neue Werte und Bedeutung schaffen müsse, ohne sich auf religiöse Lehren zu verlassen. Dieses Konzept beeinflusste Existentialismus, Postmodernismus und die Philosophie des 20. Jahrhunderts tiefgreifend.",
          nl: "Nietzsche verklaarde beroemd 'God is dood' in zijn werken, met name in 'De vrolijke wetenschap' en 'Aldus sprak Zarathoestra'. Dit was geen letterlijke uitspraak over Gods bestaan, maar eerder een culturele observatie dat traditionele religieuze waarden en absolute morele waarheden hun macht in de westerse samenleving verloren. Nietzsche betoogde dat de Verlichting en de opkomst van de wetenschap het religieuze gezag hadden ondermijnd, wat een vacuüm in morele begeleiding achterliet. Hij geloofde dat de mensheid nieuwe waarden en betekenis moest creëren zonder te vertrouwen op religieuze doctrine. Dit concept had een diepgaande invloed op het existentialisme, postmodernisme en de filosofie van de 20e eeuw."
        }
      },
      {
        question: {
          en: "On October 15, 1783, the first manned balloon flight took place in Paris. What type of balloon was used?",
          es: "El 15 de octubre de 1783, el primer vuelo tripulado en globo tuvo lugar en París. ¿Qué tipo de globo se utilizó?",
          de: "Am 15. Oktober 1783 fand in Paris der erste bemannte Ballonflug statt. Welche Art von Ballon wurde verwendet?",
          nl: "Op 15 oktober 1783 vond de eerste bemande ballonvlucht plaats in Parijs. Welk type ballon werd gebruikt?"
        },
        options: [
          { en: "Hydrogen balloon", es: "Globo de hidrógeno", de: "Wasserstoffballon", nl: "Waterstofballon" },
          { en: "Hot air balloon", es: "Globo de aire caliente", de: "Heißluftballon", nl: "Heteluchtballon" },
          { en: "Helium balloon", es: "Globo de helio", de: "Heliumballon", nl: "Heliumballon" },
          { en: "Steam-powered balloon", es: "Globo a vapor", de: "Dampfballon", nl: "Stoomballon" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first manned balloon flight used a hot air balloon designed by the Montgolfier brothers, Jean-François and Jacques-Étienne. The flight was tethered (held by ropes) and reached about 80 feet, lasting several minutes. French scientist Jean-François Pilâtre de Rozier and François Laurent d'Arlandes were the passengers. This breakthrough came just months after the Montgolfiers' successful unmanned test. The hot air was created by burning straw and wool beneath the balloon opening. This historic event launched humanity's first successful form of aviation, predating powered flight by 120 years.",
          es: "El primer vuelo tripulado en globo utilizó un globo de aire caliente diseñado por los hermanos Montgolfier, Jean-François y Jacques-Étienne. El vuelo estaba atado (sostenido por cuerdas) y alcanzó unos 80 pies, durando varios minutos. El científico francés Jean-François Pilâtre de Rozier y François Laurent d'Arlandes fueron los pasajeros. Este avance llegó solo meses después de la exitosa prueba no tripulada de los Montgolfier. El aire caliente se creó quemando paja y lana debajo de la abertura del globo. Este evento histórico lanzó la primera forma exitosa de aviación de la humanidad, 120 años antes del vuelo motorizado.",
          de: "Der erste bemannte Ballonflug verwendete einen Heißluftballon, der von den Montgolfier-Brüdern Jean-François und Jacques-Étienne entworfen wurde. Der Flug war angebunden (mit Seilen gehalten) und erreichte etwa 80 Fuß, dauerte mehrere Minuten. Der französische Wissenschaftler Jean-François Pilâtre de Rozier und François Laurent d'Arlandes waren die Passagiere. Dieser Durchbruch kam nur Monate nach dem erfolgreichen unbemannten Test der Montgolfiers. Die heiße Luft wurde durch Verbrennen von Stroh und Wolle unter der Ballonöffnung erzeugt. Dieses historische Ereignis startete die erste erfolgreiche Form der Luftfahrt der Menschheit, 120 Jahre vor dem motorisierten Flug.",
          nl: "De eerste bemande ballonvlucht gebruikte een heteluchtballon ontworpen door de gebroeders Montgolfier, Jean-François en Jacques-Étienne. De vlucht was vastgebonden (gehouden door touwen) en bereikte ongeveer 80 voet, duurde enkele minuten. De Franse wetenschapper Jean-François Pilâtre de Rozier en François Laurent d'Arlandes waren de passagiers. Deze doorbraak kwam slechts maanden na de succesvolle onbemande test van de Montgolfiers. De hete lucht werd gecreëerd door het verbranden van stro en wol onder de ballonopening. Deze historische gebeurtenis lanceerde de eerste succesvolle vorm van luchtvaart van de mensheid, 120 jaar vóór aangedreven vlucht."
        }
      },
      {
        question: {
          en: "I Love Lucy premiered on October 15, 1951, becoming one of the most influential TV shows ever. What groundbreaking technique did the show pioneer?",
          es: "I Love Lucy se estrenó el 15 de octubre de 1951, convirtiéndose en uno de los programas de televisión más influyentes de todos los tiempos. ¿Qué técnica innovadora fue pionera el programa?",
          de: "I Love Lucy hatte am 15. Oktober 1951 Premiere und wurde zu einer der einflussreichsten Fernsehsendungen aller Zeiten. Welche bahnbrechende Technik hat die Show pioniert?",
          nl: "I Love Lucy ging op 15 oktober 1951 in première en werd een van de meest invloedrijke tv-shows ooit. Welke baanbrekende techniek pionierde de show?"
        },
        options: [
          { en: "Color television broadcasting", es: "Transmisión de televisión en color", de: "Farbfernsehen", nl: "Kleurentelevisie-uitzending" },
          { en: "Multi-camera filming with live audience", es: "Filmación con múltiples cámaras con audiencia en vivo", de: "Mehrfachkamera-Aufnahmen mit Live-Publikum", nl: "Multi-camera opnames met live publiek" },
          { en: "Laugh track technology", es: "Tecnología de risas grabadas", de: "Lachkonserven-Technologie", nl: "Lachband technologie" },
          { en: "Green screen effects", es: "Efectos de pantalla verde", de: "Green-Screen-Effekte", nl: "Green screen effecten" }
        ],
        correctIndex: 1,
        explanation: {
          en: "I Love Lucy revolutionized television by pioneering the three-camera filming technique with a live studio audience, a format still used today in sitcoms. Lucille Ball and her husband Desi Arnaz insisted on filming in Hollywood rather than broadcasting live from New York, which required innovation. They used three 35mm film cameras to capture different angles simultaneously, creating better quality footage that could be edited and syndicated. This allowed for more dynamic comedy timing and reaction shots. The show also broke barriers by featuring an interracial marriage (Cuban-American Desi and white American Lucy) and showing Lucy's real-life pregnancy on TV.",
          es: "I Love Lucy revolucionó la televisión al ser pionero en la técnica de filmación con tres cámaras con audiencia en vivo, un formato que todavía se usa hoy en sitcoms. Lucille Ball y su esposo Desi Arnaz insistieron en filmar en Hollywood en lugar de transmitir en vivo desde Nueva York, lo que requería innovación. Usaron tres cámaras de 35 mm para capturar diferentes ángulos simultáneamente, creando imágenes de mejor calidad que podían editarse y sindicarse. Esto permitió un mejor timing cómico y tomas de reacción. El programa también rompió barreras al presentar un matrimonio interracial (el cubano-americano Desi y la estadounidense blanca Lucy) y mostrar el embarazo real de Lucy en la televisión.",
          de: "I Love Lucy revolutionierte das Fernsehen durch Pionierarbeit bei der Drei-Kamera-Filmtechnik mit Live-Studio-Publikum, ein Format, das heute noch in Sitcoms verwendet wird. Lucille Ball und ihr Ehemann Desi Arnaz bestanden darauf, in Hollywood zu filmen, anstatt live aus New York zu senden, was Innovation erforderte. Sie verwendeten drei 35-mm-Filmkameras, um gleichzeitig verschiedene Winkel zu erfassen und qualitativ besseres Material zu erstellen, das bearbeitet und syndiziert werden konnte. Dies ermöglichte dynamischeres Comedy-Timing und Reaktionsaufnahmen. Die Show brach auch Barrieren, indem sie eine interrassische Ehe (der kubanisch-amerikanische Desi und die weiße Amerikanerin Lucy) zeigte und Lucys echte Schwangerschaft im Fernsehen darstellte.",
          nl: "I Love Lucy revolutioneerde de televisie door de drie-camera filmtechniek te pionieren met een live studiopubliek, een format dat vandaag nog steeds wordt gebruikt in sitcoms. Lucille Ball en haar echtgenoot Desi Arnaz stonden erop te filmen in Hollywood in plaats van live uit te zenden vanuit New York, wat innovatie vereiste. Ze gebruikten drie 35mm filmcamera's om verschillende hoeken tegelijk vast te leggen, waardoor beeldmateriaal van betere kwaliteit werd gecreëerd dat kon worden bewerkt en gesyndiceeerd. Dit zorgde voor dynamischere comedy timing en reactieshots. De show brak ook barrières door een interraciaal huwelijk te tonen (de Cubaans-Amerikaanse Desi en de blanke Amerikaanse Lucy) en Lucy's echte zwangerschap op tv te laten zien."
        }
      },
      {
        question: {
          en: "What was Nietzsche's concept of the 'Übermensch' (Superman/Overman) meant to represent?",
          es: "¿Qué representaba el concepto de 'Übermensch' (Superhombre) de Nietzsche?",
          de: "Was sollte Nietzsches Konzept des 'Übermenschen' darstellen?",
          nl: "Wat moest Nietzsches concept van de 'Übermensch' (Superman/Overmens) voorstellen?"
        },
        options: [
          { en: "A physically superior race", es: "Una raza físicamente superior", de: "Eine körperlich überlegene Rasse", nl: "Een fysiek superieur ras" },
          { en: "A person who creates their own values beyond conventional morality", es: "Una persona que crea sus propios valores más allá de la moralidad convencional", de: "Eine Person, die ihre eigenen Werte jenseits konventioneller Moral schafft", nl: "Een persoon die eigen waarden creëert voorbij conventionele moraliteit" },
          { en: "A religious prophet", es: "Un profeta religioso", de: "Ein religiöser Prophet", nl: "Een religieuze profeet" },
          { en: "A government leader", es: "Un líder de gobierno", de: "Ein Regierungsführer", nl: "Een regeringsleider" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nietzsche's Übermensch represents an individual who transcends traditional moral values to create their own meaning and values in life. After declaring 'God is dead,' Nietzsche saw the need for humanity to move beyond Christian morality and societal conventions. The Übermensch isn't about physical superiority or racial supremacy (a tragic misappropriation by the Nazis), but rather philosophical and spiritual growth. This person embraces life fully, including its suffering, and takes responsibility for creating purpose without relying on external authorities. The concept appears prominently in 'Thus Spoke Zarathustra' and represents human potential for self-overcoming and authentic existence.",
          es: "El Übermensch de Nietzsche representa a un individuo que trasciende los valores morales tradicionales para crear su propio significado y valores en la vida. Después de declarar 'Dios ha muerto', Nietzsche vio la necesidad de que la humanidad superara la moralidad cristiana y las convenciones sociales. El Übermensch no se trata de superioridad física o supremacía racial (una trágica apropiación indebida por los nazis), sino más bien de crecimiento filosófico y espiritual. Esta persona abraza la vida plenamente, incluyendo su sufrimiento, y asume la responsabilidad de crear propósito sin depender de autoridades externas. El concepto aparece prominentemente en 'Así habló Zaratustra' y representa el potencial humano para la auto-superación y la existencia auténtica.",
          de: "Nietzsches Übermensch repräsentiert ein Individuum, das traditionelle moralische Werte transzendiert, um eigene Bedeutung und Werte im Leben zu schaffen. Nachdem er 'Gott ist tot' erklärt hatte, sah Nietzsche die Notwendigkeit für die Menschheit, über christliche Moral und gesellschaftliche Konventionen hinauszugehen. Der Übermensch handelt nicht von körperlicher Überlegenheit oder rassischer Vorherrschaft (eine tragische Fehleignung durch die Nazis), sondern vielmehr von philosophischem und spirituellem Wachstum. Diese Person umarmt das Leben vollständig, einschließlich seines Leidens, und übernimmt Verantwortung für die Schaffung von Zweck ohne sich auf externe Autoritäten zu verlassen. Das Konzept erscheint prominent in 'Also sprach Zarathustra' und repräsentiert menschliches Potenzial für Selbstüberwindung und authentische Existenz.",
          nl: "Nietzsches Übermensch vertegenwoordigt een individu dat traditionele morele waarden overstijgt om eigen betekenis en waarden in het leven te creëren. Na het verklaren van 'God is dood', zag Nietzsche de noodzaak voor de mensheid om verder te gaan dan christelijke moraliteit en maatschappelijke conventies. De Übermensch gaat niet over fysieke superioriteit of raciale suprematie (een tragische toe-eigening door de nazi's), maar eerder over filosofische en spirituele groei. Deze persoon omarmt het leven volledig, inclusief het lijden, en neemt verantwoordelijkheid voor het creëren van doel zonder te vertrouwen op externe autoriteiten. Het concept komt prominent voor in 'Aldus sprak Zarathoestra' en vertegenwoordigt menselijk potentieel voor zelfoverwinning en authentiek bestaan."
        }
      },
      {
        question: {
          en: "What major career risk did Lucille Ball and Desi Arnaz take to produce I Love Lucy?",
          es: "¿Qué gran riesgo profesional tomaron Lucille Ball y Desi Arnaz para producir I Love Lucy?",
          de: "Welches große Karriererisiko gingen Lucille Ball und Desi Arnaz ein, um I Love Lucy zu produzieren?",
          nl: "Welk groot carrièrerisico namen Lucille Ball en Desi Arnaz om I Love Lucy te produceren?"
        },
        options: [
          { en: "They borrowed money from the mafia", es: "Pidieron dinero prestado a la mafia", de: "Sie liehen Geld von der Mafia", nl: "Ze leenden geld van de maffia" },
          { en: "They took a pay cut to own the show", es: "Aceptaron un recorte salarial para ser dueños del programa", de: "Sie nahmen eine Gehaltskürzung hin, um die Show zu besitzen", nl: "Ze namen een salarisvermindering om eigenaar van de show te zijn" },
          { en: "They quit all other acting jobs", es: "Renunciaron a todos los demás trabajos de actuación", de: "Sie kündigten alle anderen Schauspielerjobs", nl: "Ze stopten met alle andere acteerwerk" },
          { en: "They moved to a different country", es: "Se mudaron a otro país", de: "Sie zogen in ein anderes Land", nl: "Ze verhuisden naar een ander land" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Lucille Ball and Desi Arnaz took pay cuts to retain ownership of I Love Lucy through their production company, Desilu Productions. CBS initially balked at their demands for creative control and ownership, but the couple insisted. This proved to be a brilliant business decision—they retained ownership of all episodes, which became incredibly valuable in syndication. Desilu Productions eventually became one of Hollywood's most powerful studios, producing hits like Star Trek and Mission: Impossible. When they sold the company in 1962, Ball became the first woman to run a major television production studio. Their gamble on ownership rights revolutionized how TV deals were structured.",
          es: "Lucille Ball y Desi Arnaz aceptaron recortes salariales para retener la propiedad de I Love Lucy a través de su compañía de producción, Desilu Productions. CBS inicialmente se resistió a sus demandas de control creativo y propiedad, pero la pareja insistió. Esto demostró ser una brillante decisión comercial: retuvieron la propiedad de todos los episodios, que se volvieron increíblemente valiosos en sindicación. Desilu Productions eventualmente se convirtió en uno de los estudios más poderosos de Hollywood, produciendo éxitos como Star Trek y Misión Imposible. Cuando vendieron la compañía en 1962, Ball se convirtió en la primera mujer en dirigir un estudio importante de producción televisiva. Su apuesta por los derechos de propiedad revolucionó cómo se estructuraban los acuerdos de televisión.",
          de: "Lucille Ball und Desi Arnaz nahmen Gehaltskürzungen hin, um das Eigentum an I Love Lucy durch ihre Produktionsfirma Desilu Productions zu behalten. CBS wehrte sich zunächst gegen ihre Forderungen nach kreativer Kontrolle und Eigentum, aber das Paar bestand darauf. Dies erwies sich als brillante Geschäftsentscheidung—sie behielten das Eigentum an allen Episoden, die in der Syndizierung unglaublich wertvoll wurden. Desilu Productions wurde schließlich zu einem der mächtigsten Studios Hollywoods und produzierte Hits wie Star Trek und Mission: Impossible. Als sie die Firma 1962 verkauften, wurde Ball die erste Frau, die ein großes Fernsehproduktionsstudio leitete. Ihr Wagnis bei den Eigentumsrechten revolutionierte die Strukturierung von TV-Deals.",
          nl: "Lucille Ball en Desi Arnaz namen salarisverminderingen om eigendom van I Love Lucy te behouden via hun productiebedrijf, Desilu Productions. CBS verzette zich aanvankelijk tegen hun eisen voor creatieve controle en eigendom, maar het paar hield vol. Dit bleek een briljante zakelijke beslissing te zijn—ze behielden eigendom van alle afleveringen, die ongelooflijk waardevol werden in syndicatie. Desilu Productions werd uiteindelijk een van Hollywood's machtigste studio's en produceerde hits zoals Star Trek en Mission: Impossible. Toen ze het bedrijf in 1962 verkochten, werd Ball de eerste vrouw die een grote televisieproduc­tiestudio leidde. Hun gok op eigendomsrechten revolutioneerde hoe tv-deals werden gestructureerd."
        }
      }
    ],

    // Day 16 - October 16th: John Brown, Million Man March, Oscar Wilde
    day16: [
      {
        question: {
          en: "John Brown raided the federal armory at Harper's Ferry on October 16, 1859. What was his primary goal?",
          es: "John Brown asaltó el arsenal federal en Harper's Ferry el 16 de octubre de 1859. ¿Cuál era su objetivo principal?",
          de: "John Brown überfiel am 16. Oktober 1859 das Bundeswaffenarsenal in Harper's Ferry. Was war sein Hauptziel?",
          nl: "John Brown viel op 16 oktober 1859 het federale arsenaal in Harper's Ferry aan. Wat was zijn belangrijkste doel?"
        },
        options: [
          { en: "To demand voting rights", es: "Exigir derechos de voto", de: "Wahlrechte zu fordern", nl: "Stemrecht eisen" },
          { en: "To start a slave rebellion", es: "Iniciar una rebelión de esclavos", de: "Eine Sklavenrebellion zu starten", nl: "Een slavenopstand te beginnen" },
          { en: "To steal money for his family", es: "Robar dinero para su familia", de: "Geld für seine Familie zu stehlen", nl: "Geld stelen voor zijn familie" },
          { en: "To protest taxation", es: "Protestar contra los impuestos", de: "Gegen Besteuerung zu protestieren", nl: "Protesteren tegen belastingen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "John Brown, a radical abolitionist, seized the federal armory at Harper's Ferry, Virginia (now West Virginia) hoping to spark a massive slave uprising across the South. He planned to arm enslaved people with weapons from the arsenal and establish a mountain stronghold. Brown's raid was quickly crushed by U.S. Marines led by Robert E. Lee. Brown was captured, tried for treason, and hanged on December 2, 1859. Though his raid failed militarily, it heightened tensions between North and South and became a catalyst for the Civil War. Brown is remembered as either a martyr for freedom or a dangerous fanatic, depending on perspective.",
          es: "John Brown, un abolicionista radical, tomó el arsenal federal en Harper's Ferry, Virginia (ahora Virginia Occidental) con la esperanza de desencadenar un levantamiento masivo de esclavos en el Sur. Planeó armar a las personas esclavizadas con armas del arsenal y establecer una fortaleza en las montañas. El asalto de Brown fue rápidamente aplastado por los Marines de EE.UU. dirigidos por Robert E. Lee. Brown fue capturado, juzgado por traición y ahorcado el 2 de diciembre de 1859. Aunque su asalto fracasó militarmente, intensificó las tensiones entre el Norte y el Sur y se convirtió en un catalizador de la Guerra Civil. Brown es recordado como un mártir de la libertad o un fanático peligroso, según la perspectiva.",
          de: "John Brown, ein radikaler Abolitionist, eroberte das Bundeswaffenarsenal in Harper's Ferry, Virginia (heute West Virginia) in der Hoffnung, einen massiven Sklavenaufstand im Süden auszulösen. Er plante, versklavte Menschen mit Waffen aus dem Arsenal zu bewaffnen und eine Bergfestung zu errichten. Browns Überfall wurde schnell von US-Marines unter der Führung von Robert E. Lee niedergeschlagen. Brown wurde gefangen genommen, wegen Hochverrats vor Gericht gestellt und am 2. Dezember 1859 gehängt. Obwohl sein Überfall militärisch scheiterte, verschärfte er die Spannungen zwischen Nord und Süd und wurde zum Katalysator für den Bürgerkrieg. Brown wird je nach Perspektive entweder als Märtyrer für die Freiheit oder als gefährlicher Fanatiker in Erinnerung behalten.",
          nl: "John Brown, een radicale abolitionist, nam het federale arsenaal in Harper's Ferry, Virginia (nu West Virginia) over in de hoop een massale slavenopstand in het Zuiden te ontketenen. Hij was van plan tot slaaf gemaakte mensen te bewapenen met wapens uit het arsenaal en een bergvesting te vestigen. Browns aanval werd snel neergeslagen door Amerikaanse mariniers onder leiding van Robert E. Lee. Brown werd gevangen genomen, berecht voor verraad en opgehangen op 2 december 1859. Hoewel zijn aanval militair faalde, verhoogde het de spanningen tussen Noord en Zuid en werd het een katalysator voor de Burgeroorlog. Brown wordt herinnerd als een martelaar voor vrijheid of een gevaarlijke fanaticus, afhankelijk van perspectief."
        }
      },
      {
        question: {
          en: "The Million Man March took place on October 16, 1995, in Washington D.C. Who organized this historic gathering?",
          es: "La Marcha del Millón de Hombres tuvo lugar el 16 de octubre de 1995 en Washington D.C. ¿Quién organizó esta reunión histórica?",
          de: "Der Million Man March fand am 16. Oktober 1995 in Washington D.C. statt. Wer organisierte diese historische Versammlung?",
          nl: "De Million Man March vond plaats op 16 oktober 1995 in Washington D.C. Wie organiseerde deze historische bijeenkomst?"
        },
        options: [
          { en: "Martin Luther King Jr.", es: "Martin Luther King Jr.", de: "Martin Luther King Jr.", nl: "Martin Luther King Jr." },
          { en: "Malcolm X", es: "Malcolm X", de: "Malcolm X", nl: "Malcolm X" },
          { en: "Louis Farrakhan", es: "Louis Farrakhan", de: "Louis Farrakhan", nl: "Louis Farrakhan" },
          { en: "Jesse Jackson", es: "Jesse Jackson", de: "Jesse Jackson", nl: "Jesse Jackson" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Million Man March was organized by Nation of Islam leader Louis Farrakhan. The gathering called for African American men to unite, take responsibility for their communities, and commit to atonement and reconciliation. Estimates vary, but between 400,000 to over 1 million men attended, making it one of the largest gatherings in Washington D.C. history. The march focused on themes of black empowerment, personal responsibility, and family values. Despite controversy surrounding Farrakhan's leadership, the event resonated deeply with many participants. It inspired similar gatherings like the Million Woman March and the Million Family March in subsequent years.",
          es: "La Marcha del Millón de Hombres fue organizada por el líder de la Nación del Islam, Louis Farrakhan. La reunión llamó a los hombres afroamericanos a unirse, asumir la responsabilidad de sus comunidades y comprometerse con la expiación y la reconciliación. Las estimaciones varían, pero asistieron entre 400,000 y más de 1 millón de hombres, convirtiéndola en una de las reuniones más grandes en la historia de Washington D.C. La marcha se centró en temas de empoderamiento negro, responsabilidad personal y valores familiares. A pesar de la controversia que rodea el liderazgo de Farrakhan, el evento resonó profundamente con muchos participantes. Inspiró reuniones similares como la Marcha de la Mujer del Millón y la Marcha de la Familia del Millón en años posteriores.",
          de: "Der Million Man March wurde vom Führer der Nation of Islam, Louis Farrakhan, organisiert. Die Versammlung rief afroamerikanische Männer dazu auf, sich zu vereinen, Verantwortung für ihre Gemeinschaften zu übernehmen und sich zu Sühne und Versöhnung zu verpflichten. Die Schätzungen variieren, aber zwischen 400.000 und über 1 Million Männer nahmen teil, was es zu einer der größten Versammlungen in der Geschichte von Washington D.C. macht. Der Marsch konzentrierte sich auf Themen der schwarzen Ermächtigung, persönlichen Verantwortung und Familienwerte. Trotz der Kontroverse um Farrakhans Führung fand die Veranstaltung bei vielen Teilnehmern großen Anklang. Sie inspirierte ähnliche Versammlungen wie den Million Woman March und den Million Family March in den Folgejahren.",
          nl: "De Million Man March werd georganiseerd door Nation of Islam-leider Louis Farrakhan. De bijeenkomst riep Afro-Amerikaanse mannen op zich te verenigen, verantwoordelijkheid te nemen voor hun gemeenschappen en zich te committeren aan verzoening en boetedoening. Schattingen variëren, maar tussen de 400.000 en meer dan 1 miljoen mannen waren aanwezig, waardoor het een van de grootste bijeenkomsten in de geschiedenis van Washington D.C. werd. De mars richtte zich op thema's van zwarte empowerment, persoonlijke verantwoordelijkheid en familiewaarden. Ondanks de controverse rond Farrakhans leiderschap resoneerde het evenement diep bij veel deelnemers. Het inspireerde soortgelijke bijeenkomsten zoals de Million Woman March en de Million Family March in de daaropvolgende jaren."
        }
      },
      {
        question: {
          en: "Oscar Wilde was born on October 16, 1854. Which of his works features the character Dorian Gray?",
          es: "Oscar Wilde nació el 16 de octubre de 1854. ¿Cuál de sus obras presenta al personaje Dorian Gray?",
          de: "Oscar Wilde wurde am 16. Oktober 1854 geboren. Welches seiner Werke enthält die Figur Dorian Gray?",
          nl: "Oscar Wilde werd geboren op 16 oktober 1854. In welk van zijn werken komt het personage Dorian Gray voor?"
        },
        options: [
          { en: "The Importance of Being Earnest", es: "La importancia de llamarse Ernesto", de: "Bunbury oder Ernst sein ist alles", nl: "Het belang van Ernst" },
          { en: "The Picture of Dorian Gray", es: "El retrato de Dorian Gray", de: "Das Bildnis des Dorian Gray", nl: "Het portret van Dorian Gray" },
          { en: "An Ideal Husband", es: "Un marido ideal", de: "Ein idealer Gatte", nl: "Een ideale echtgenoot" },
          { en: "The Canterville Ghost", es: "El fantasma de Canterville", de: "Das Gespenst von Canterville", nl: "Het spook van Canterville" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'The Picture of Dorian Gray' (1890) is Wilde's only novel and tells the story of a beautiful young man who sells his soul to remain forever young while his portrait ages and reflects his moral corruption instead. The novel explores themes of aestheticism, morality, duplicity, and the consequences of hedonism. It caused controversy upon publication for its perceived immorality and homoerotic undertones. Wilde's witty epigrams throughout the book include 'The only way to get rid of temptation is to yield to it.' The novel has become a classic of Gothic literature and influenced countless works about vanity, corruption, and the duality of human nature.",
          es: "'El retrato de Dorian Gray' (1890) es la única novela de Wilde y cuenta la historia de un joven hermoso que vende su alma para permanecer joven para siempre mientras su retrato envejece y refleja su corrupción moral en su lugar. La novela explora temas de esteticismo, moralidad, duplicidad y las consecuencias del hedonismo. Causó controversia tras su publicación por su percibida inmoralidad y matices homoeróticos. Los epigramas ingeniosos de Wilde a lo largo del libro incluyen 'La única manera de deshacerse de la tentación es ceder a ella'. La novela se ha convertido en un clásico de la literatura gótica y ha influido en innumerables obras sobre la vanidad, la corrupción y la dualidad de la naturaleza humana.",
          de: "'Das Bildnis des Dorian Gray' (1890) ist Wildes einziger Roman und erzählt die Geschichte eines schönen jungen Mannes, der seine Seele verkauft, um für immer jung zu bleiben, während sein Porträt altert und stattdessen seine moralische Verderbnis widerspiegelt. Der Roman erkundet Themen wie Ästhetizismus, Moral, Doppelzüngigkeit und die Konsequenzen des Hedonismus. Er sorgte bei seiner Veröffentlichung für Kontroversen wegen seiner wahrgenommenen Unmoral und homoerotischen Untertöne. Wildes witzige Epigramme im Buch umfassen 'Der einzige Weg, Versuchung loszuwerden, ist ihr nachzugeben'. Der Roman ist zu einem Klassiker der Gotischen Literatur geworden und hat unzählige Werke über Eitelkeit, Korruption und die Dualität der menschlichen Natur beeinflusst.",
          nl: "'Het portret van Dorian Gray' (1890) is Wildes enige roman en vertelt het verhaal van een mooie jonge man die zijn ziel verkoopt om voor altijd jong te blijven terwijl zijn portret veroudert en in plaats daarvan zijn morele corruptie weerspiegelt. De roman verkent thema's van estheticisme, moraliteit, dubbelhartigheid en de gevolgen van hedonisme. Het veroorzaakte controverse bij publicatie vanwege de waargenomen immoraliteit en homoerotische ondertonen. Wildes geestige epigrammen in het boek omvatten 'De enige manier om van verleiding af te komen is eraan toe te geven.' De roman is een klassieker van de Gotische literatuur geworden en heeft talloze werken over ijdelheid, corruptie en de dualiteit van de menselijke natuur beïnvloed."
        }
      },
      {
        question: {
          en: "What happened to John Brown after his raid on Harper's Ferry failed?",
          es: "¿Qué le sucedió a John Brown después de que su asalto a Harper's Ferry fracasara?",
          de: "Was geschah mit John Brown, nachdem sein Überfall auf Harper's Ferry gescheitert war?",
          nl: "Wat gebeurde er met John Brown nadat zijn aanval op Harper's Ferry was mislukt?"
        },
        options: [
          { en: "He escaped to Canada", es: "Escapó a Canadá", de: "Er floh nach Kanada", nl: "Hij ontsnapte naar Canada" },
          { en: "He was tried and hanged", es: "Fue juzgado y ahorcado", de: "Er wurde vor Gericht gestellt und gehängt", nl: "Hij werd berecht en opgehangen" },
          { en: "He died in the battle", es: "Murió en la batalla", de: "Er starb in der Schlacht", nl: "Hij stierf in de strijd" },
          { en: "He was pardoned by President", es: "Fue perdonado por el Presidente", de: "Er wurde vom Präsidenten begnadigt", nl: "Hij werd door de president gratie verleend" }
        ],
        correctIndex: 1,
        explanation: {
          en: "John Brown was captured during the raid, tried for treason against Virginia, murder, and inciting slave insurrection. His trial was swift and widely publicized. Despite injuries sustained during capture, Brown gave powerful speeches defending his actions as morally right in the eyes of God. He was convicted and sentenced to death. On December 2, 1859, he was hanged in Charles Town, Virginia. His execution made him a martyr in the North, where many viewed him as a heroic fighter against slavery. His last written words predicted the Civil War: 'I, John Brown, am now quite certain that the crimes of this guilty land will never be purged away but with blood.'",
          es: "John Brown fue capturado durante el asalto, juzgado por traición contra Virginia, asesinato e incitación a la insurrección de esclavos. Su juicio fue rápido y ampliamente publicitado. A pesar de las lesiones sufridas durante la captura, Brown dio discursos poderosos defendiendo sus acciones como moralmente correctas a los ojos de Dios. Fue condenado y sentenciado a muerte. El 2 de diciembre de 1859, fue ahorcado en Charles Town, Virginia. Su ejecución lo convirtió en un mártir en el Norte, donde muchos lo vieron como un luchador heroico contra la esclavitud. Sus últimas palabras escritas predijeron la Guerra Civil: 'Yo, John Brown, ahora estoy bastante seguro de que los crímenes de esta tierra culpable nunca serán purgados sino con sangre'.",
          de: "John Brown wurde während des Überfalls gefangen genommen, wegen Hochverrats gegen Virginia, Mordes und Anstiftung zum Sklavenaufstand vor Gericht gestellt. Sein Prozess war schnell und weithin bekannt. Trotz der Verletzungen, die er bei der Gefangennahme erlitt, hielt Brown kraftvolle Reden zur Verteidigung seiner Handlungen als moralisch richtig in den Augen Gottes. Er wurde verurteilt und zum Tode verurteilt. Am 2. Dezember 1859 wurde er in Charles Town, Virginia, gehängt. Seine Hinrichtung machte ihn im Norden zum Märtyrer, wo viele ihn als heroischen Kämpfer gegen die Sklaverei ansahen. Seine letzten geschriebenen Worte sagten den Bürgerkrieg voraus: 'Ich, John Brown, bin mir jetzt ziemlich sicher, dass die Verbrechen dieses schuldigen Landes niemals anders als mit Blut gereinigt werden'.",
          nl: "John Brown werd gevangen genomen tijdens de aanval, berecht voor verraad tegen Virginia, moord en het aanzetten tot slavenopstand. Zijn proces was snel en kreeg veel publiciteit. Ondanks verwondingen opgelopen tijdens de gevangenneming, gaf Brown krachtige toespraken ter verdediging van zijn daden als moreel juist in de ogen van God. Hij werd veroordeeld en ter dood veroordeeld. Op 2 december 1859 werd hij opgehangen in Charles Town, Virginia. Zijn executie maakte hem tot een martelaar in het Noorden, waar velen hem zagen als een heroïsche strijder tegen slavernij. Zijn laatste geschreven woorden voorspelden de Burgeroorlog: 'Ik, John Brown, ben er nu vrij zeker van dat de misdaden van dit schuldige land nooit zullen worden gezuiverd dan met bloed'."
        }
      },
      {
        question: {
          en: "What crime was Oscar Wilde imprisoned for in 1895, shortly after his literary peak?",
          es: "¿Por qué crimen fue encarcelado Oscar Wilde en 1895, poco después de su apogeo literario?",
          de: "Für welches Verbrechen wurde Oscar Wilde 1895, kurz nach seinem literarischen Höhepunkt, inhaftiert?",
          nl: "Voor welke misdaad werd Oscar Wilde in 1895 gevangen gezet, kort na zijn literaire hoogtepunt?"
        },
        options: [
          { en: "Tax evasion", es: "Evasión fiscal", de: "Steuerhinterziehung", nl: "Belastingontduiking" },
          { en: "Gross indecency (homosexual acts)", es: "Indecencia grave (actos homosexuales)", de: "Grobe Unsittlichkeit (homosexuelle Handlungen)", nl: "Grove onzedelijkheid (homosexuele handelingen)" },
          { en: "Plagiarism", es: "Plagio", de: "Plagiat", nl: "Plagiaat" },
          { en: "Political treason", es: "Traición política", de: "Politischer Verrat", nl: "Politiek verraad" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Oscar Wilde was convicted of 'gross indecency' under Section 11 of the Criminal Law Amendment Act 1885, which criminalized homosexual acts between men. The charges stemmed from his relationship with Lord Alfred Douglas. Wilde initially sued Douglas's father, the Marquess of Queensberry, for libel after Queensberry publicly accused him of homosexuality. When the libel case collapsed, evidence from it was used to prosecute Wilde. He was sentenced to two years' hard labor, which destroyed his health. After prison, he lived in exile in France under the name Sebastian Melmoth and died in poverty in 1900. His conviction wasn't posthumously pardoned until 2017.",
          es: "Oscar Wilde fue condenado por 'indecencia grave' bajo la Sección 11 de la Ley de Enmienda de la Ley Penal de 1885, que criminalizaba los actos homosexuales entre hombres. Los cargos surgieron de su relación con Lord Alfred Douglas. Wilde inicialmente demandó al padre de Douglas, el Marqués de Queensberry, por difamación después de que Queensberry lo acusara públicamente de homosexualidad. Cuando el caso de difamación colapsó, las pruebas del mismo se usaron para procesar a Wilde. Fue sentenciado a dos años de trabajo forzado, lo que destruyó su salud. Después de la prisión, vivió en el exilio en Francia bajo el nombre de Sebastian Melmoth y murió en la pobreza en 1900. Su condena no fue perdonada póstumamente hasta 2017.",
          de: "Oscar Wilde wurde wegen 'grober Unsittlichkeit' nach Abschnitt 11 des Criminal Law Amendment Act 1885 verurteilt, der homosexuelle Handlungen zwischen Männern kriminalisierte. Die Anklagen stammten aus seiner Beziehung zu Lord Alfred Douglas. Wilde verklagte zunächst Douglas' Vater, den Marquess of Queensberry, wegen Verleumdung, nachdem Queensberry ihn öffentlich der Homosexualität beschuldigt hatte. Als der Verleumdungsprozess zusammenbrach, wurden Beweise daraus verwendet, um Wilde anzuklagen. Er wurde zu zwei Jahren Zwangsarbeit verurteilt, was seine Gesundheit zerstörte. Nach dem Gefängnis lebte er im Exil in Frankreich unter dem Namen Sebastian Melmoth und starb 1900 in Armut. Seine Verurteilung wurde erst 2017 posthum begnadigt.",
          nl: "Oscar Wilde werd veroordeeld voor 'grove onzedelijkheid' onder Sectie 11 van de Criminal Law Amendment Act 1885, die homosexuele handelingen tussen mannen criminaliseerde. De aanklachten kwamen voort uit zijn relatie met Lord Alfred Douglas. Wilde klaagde aanvankelijk Douglas' vader, de Markies van Queensberry, aan wegens smaad nadat Queensberry hem publiekelijk van homoseksualiteit beschuldigde. Toen de smaadzaak instortte, werd bewijs daaruit gebruikt om Wilde te vervolgen. Hij werd veroordeeld tot twee jaar dwangarbeid, wat zijn gezondheid verwoestte. Na de gevangenis leefde hij in ballingschap in Frankrijk onder de naam Sebastian Melmoth en stierf in armoede in 1900. Zijn veroordeling werd pas in 2017 postuum gratie verleend."
        }
      }
    ],

    // Day 17 - October 17th: Black Monday, Loma Prieta Earthquake, Eminem
    day17: [
      {
        question: {
          en: "Black Monday, the largest one-day stock market crash in history, occurred on October 17, 1987. What percentage did the Dow Jones Industrial Average drop?",
          es: "El Lunes Negro, la mayor caída del mercado de valores en un día en la historia, ocurrió el 17 de octubre de 1987. ¿Qué porcentaje cayó el Promedio Industrial Dow Jones?",
          de: "Der Schwarze Montag, der größte eintägige Börsencrash der Geschichte, ereignete sich am 17. Oktober 1987. Um wie viel Prozent fiel der Dow Jones Industrial Average?",
          nl: "Zwarte Maandag, de grootste eendaagse beurscrash in de geschiedenis, vond plaats op 17 oktober 1987. Met hoeveel procent daalde de Dow Jones Industrial Average?"
        },
        options: [
          { en: "12.8%", es: "12,8%", de: "12,8%", nl: "12,8%" },
          { en: "18.6%", es: "18,6%", de: "18,6%", nl: "18,6%" },
          { en: "22.6%", es: "22,6%", de: "22,6%", nl: "22,6%" },
          { en: "30.2%", es: "30,2%", de: "30,2%", nl: "30,2%" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On Black Monday, October 19, 1987, the Dow Jones Industrial Average plummeted 22.6% (508 points) in a single day—the largest one-day percentage decline in stock market history. The crash began in Hong Kong, spread through Europe, and hit the U.S. markets with devastating force. Multiple factors contributed: computerized trading programs, overvaluation, illiquidity, and market psychology. Interestingly, no major news event triggered the crash—it was largely technical. Despite apocalyptic predictions, the market recovered relatively quickly. The crash led to implementation of 'circuit breakers'—automatic trading halts designed to prevent similar panic-driven crashes in the future.",
          es: "El Lunes Negro, 19 de octubre de 1987, el Promedio Industrial Dow Jones se desplomó 22,6% (508 puntos) en un solo día, la mayor caída porcentual de un día en la historia del mercado de valores. La caída comenzó en Hong Kong, se extendió por Europa y golpeó los mercados estadounidenses con fuerza devastadora. Múltiples factores contribuyeron: programas de negociación computarizados, sobrevaloración, falta de liquidez y psicología del mercado. Curiosamente, ningún evento noticioso importante desencadenó la caída: fue en gran medida técnica. A pesar de las predicciones apocalípticas, el mercado se recuperó relativamente rápido. La caída llevó a la implementación de 'interruptores automáticos': paradas automáticas de negociación diseñadas para prevenir caídas similares impulsadas por el pánico en el futuro.",
          de: "Am Schwarzen Montag, dem 19. Oktober 1987, stürzte der Dow Jones Industrial Average um 22,6% (508 Punkte) an einem einzigen Tag ab—der größte prozentuale Rückgang an einem Tag in der Börsengeschichte. Der Crash begann in Hongkong, verbreitete sich über Europa und traf die US-Märkte mit verheerender Kraft. Mehrere Faktoren trugen bei: computergestützte Handelsprogramme, Überbewertung, Illiquidität und Marktpsychologie. Interessanterweise löste kein großes Nachrichtenereignis den Crash aus—er war weitgehend technischer Natur. Trotz apokalyptischer Vorhersagen erholte sich der Markt relativ schnell. Der Crash führte zur Einführung von 'Leistungsschaltern'—automatischen Handelsunterbrechungen, die entwickelt wurden, um ähnliche panikgetriebene Crashs in Zukunft zu verhindern.",
          nl: "Op Zwarte Maandag, 19 oktober 1987, stortte de Dow Jones Industrial Average in met 22,6% (508 punten) op een enkele dag—de grootste procentuele daling op één dag in de beursgeschiedenis. De crash begon in Hong Kong, verspreidde zich via Europa en trof de Amerikaanse markten met verwoestende kracht. Meerdere factoren droegen bij: gecomputeriseerde handelsprogramma's, overwaardering, illiquiditeit en marktpsychologie. Interessant genoeg veroorzaakte geen grote nieuwsgebeurtenis de crash—het was grotendeels technisch. Ondanks apocalyptische voorspellingen herstelde de markt relatief snel. De crash leidde tot de implementatie van 'stroomonderbrekers'—automatische handelsstops ontworpen om vergelijkbare paniekgedreven crashes in de toekomst te voorkomen."
        }
      },
      {
        question: {
          en: "The Loma Prieta earthquake struck the San Francisco Bay Area on October 17, 1989, during which major sporting event?",
          es: "El terremoto de Loma Prieta golpeó el Área de la Bahía de San Francisco el 17 de octubre de 1989, durante qué evento deportivo importante?",
          de: "Das Loma-Prieta-Erdbeben traf am 17. Oktober 1989 die San Francisco Bay Area während welches großen Sportereignisses?",
          nl: "De Loma Prieta aardbeving trof het San Francisco Bay-gebied op 17 oktober 1989, tijdens welk groot sportevenement?"
        },
        options: [
          { en: "Super Bowl", es: "Super Bowl", de: "Super Bowl", nl: "Super Bowl" },
          { en: "NBA Finals", es: "Finales de la NBA", de: "NBA Finals", nl: "NBA Finals" },
          { en: "World Series", es: "Serie Mundial", de: "World Series", nl: "World Series" },
          { en: "Stanley Cup Finals", es: "Finales de la Copa Stanley", de: "Stanley Cup Finals", nl: "Stanley Cup Finals" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Loma Prieta earthquake struck at 5:04 PM during Game 3 of the 1989 World Series between the San Francisco Giants and Oakland Athletics at Candlestick Park. The timing was fortuitous—many Bay Area residents were home watching the game on TV rather than on highways or at work, potentially reducing casualties. The 6.9 magnitude quake killed 63 people, injured 3,757, and caused $6 billion in damage. The most devastating incident was the collapse of a section of the Cypress Street Viaduct in Oakland, killing 42. The World Series was postponed for 10 days, becoming known as the 'Earthquake Series.' It remains the strongest earthquake to strike the Bay Area since 1906.",
          es: "El terremoto de Loma Prieta golpeó a las 5:04 PM durante el Juego 3 de la Serie Mundial de 1989 entre los Gigantes de San Francisco y los Atléticos de Oakland en Candlestick Park. El momento fue afortunado: muchos residentes del Área de la Bahía estaban en casa viendo el juego en la televisión en lugar de estar en carreteras o en el trabajo, reduciendo potencialmente las víctimas. El terremoto de magnitud 6.9 mató a 63 personas, hirió a 3,757 y causó $6 mil millones en daños. El incidente más devastador fue el colapso de una sección del Viaducto de Cypress Street en Oakland, matando a 42. La Serie Mundial se pospuso durante 10 días, convirtiéndose en la 'Serie del Terremoto'. Sigue siendo el terremoto más fuerte que ha golpeado el Área de la Bahía desde 1906.",
          de: "Das Loma-Prieta-Erdbeben schlug um 17:04 Uhr während des dritten Spiels der World Series 1989 zwischen den San Francisco Giants und Oakland Athletics im Candlestick Park ein. Der Zeitpunkt war glücklich—viele Bay Area-Bewohner waren zu Hause und schauten das Spiel im Fernsehen, anstatt auf Autobahnen oder bei der Arbeit zu sein, was möglicherweise die Opferzahl reduzierte. Das Erdbeben der Stärke 6,9 tötete 63 Menschen, verletzte 3.757 und verursachte Schäden in Höhe von 6 Milliarden Dollar. Der verheerendste Vorfall war der Einsturz eines Abschnitts des Cypress Street Viaduct in Oakland, bei dem 42 Menschen starben. Die World Series wurde um 10 Tage verschoben und wurde als 'Erdbeben-Serie' bekannt. Es bleibt das stärkste Erdbeben, das die Bay Area seit 1906 getroffen hat.",
          nl: "De Loma Prieta aardbeving vond plaats om 17:04 uur tijdens wedstrijd 3 van de World Series van 1989 tussen de San Francisco Giants en Oakland Athletics in Candlestick Park. De timing was gelukkig—veel bewoners van het Bay Area waren thuis om de wedstrijd op tv te kijken in plaats van op snelwegen of op het werk, wat mogelijk slachtoffers verminderde. De aardbeving met een kracht van 6,9 doodde 63 mensen, verwondde 3.757 en veroorzaakte $6 miljard aan schade. Het meest verwoestende incident was de instorting van een deel van het Cypress Street Viaduct in Oakland, waarbij 42 mensen omkwamen. De World Series werd 10 dagen uitgesteld en werd bekend als de 'Aardbeving Serie'. Het blijft de sterkste aardbeving die het Bay Area heeft getroffen sinds 1906."
        }
      },
      {
        question: {
          en: "Eminem was born on October 17, 1972. What is his real name?",
          es: "Eminem nació el 17 de octubre de 1972. ¿Cuál es su nombre real?",
          de: "Eminem wurde am 17. Oktober 1972 geboren. Wie ist sein richtiger Name?",
          nl: "Eminem werd geboren op 17 oktober 1972. Wat is zijn echte naam?"
        },
        options: [
          { en: "Curtis James Jackson III", es: "Curtis James Jackson III", de: "Curtis James Jackson III", nl: "Curtis James Jackson III" },
          { en: "Marshall Bruce Mathers III", es: "Marshall Bruce Mathers III", de: "Marshall Bruce Mathers III", nl: "Marshall Bruce Mathers III" },
          { en: "Calvin Cordozar Broadus Jr.", es: "Calvin Cordozar Broadus Jr.", de: "Calvin Cordozar Broadus Jr.", nl: "Calvin Cordozar Broadus Jr." },
          { en: "Andre Romelle Young", es: "Andre Romelle Young", de: "Andre Romelle Young", nl: "Andre Romelle Young" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Eminem's real name is Marshall Bruce Mathers III. Born in St. Joseph, Missouri, he grew up in Detroit, Michigan. His stage name 'Eminem' comes from his initials 'M and M' (M.M.). He became one of the best-selling music artists of all time, breaking barriers as a white rapper in a predominantly Black genre. Discovered by Dr. Dre, Eminem released groundbreaking albums like 'The Slim Shady LP,' 'The Marshall Mathers LP,' and 'The Eminem Show.' He's won 15 Grammy Awards and an Academy Award for 'Lose Yourself.' His alter ego 'Slim Shady' represents his darker, more controversial persona. Despite struggles with addiction and mental health, he remains influential in hip-hop culture.",
          es: "El nombre real de Eminem es Marshall Bruce Mathers III. Nacido en St. Joseph, Missouri, creció en Detroit, Michigan. Su nombre artístico 'Eminem' proviene de sus iniciales 'M and M' (M.M.). Se convirtió en uno de los artistas musicales más vendidos de todos los tiempos, rompiendo barreras como un rapero blanco en un género predominantemente negro. Descubierto por Dr. Dre, Eminem lanzó álbumes revolucionarios como 'The Slim Shady LP', 'The Marshall Mathers LP' y 'The Eminem Show'. Ha ganado 15 premios Grammy y un premio de la Academia por 'Lose Yourself'. Su alter ego 'Slim Shady' representa su persona más oscura y controvertida. A pesar de las luchas con la adicción y la salud mental, sigue siendo influyente en la cultura hip-hop.",
          de: "Eminems richtiger Name ist Marshall Bruce Mathers III. Geboren in St. Joseph, Missouri, wuchs er in Detroit, Michigan auf. Sein Künstlername 'Eminem' stammt von seinen Initialen 'M and M' (M.M.). Er wurde einer der meistverkauften Musikkünstler aller Zeiten und brach Barrieren als weißer Rapper in einem überwiegend schwarzen Genre. Von Dr. Dre entdeckt, veröffentlichte Eminem bahnbrechende Alben wie 'The Slim Shady LP', 'The Marshall Mathers LP' und 'The Eminem Show'. Er hat 15 Grammy Awards und einen Academy Award für 'Lose Yourself' gewonnen. Sein Alter Ego 'Slim Shady' repräsentiert seine dunklere, kontroversere Persona. Trotz Kämpfen mit Sucht und psychischer Gesundheit bleibt er einflussreich in der Hip-Hop-Kultur.",
          nl: "Eminems echte naam is Marshall Bruce Mathers III. Geboren in St. Joseph, Missouri, groeide hij op in Detroit, Michigan. Zijn artiestennaam 'Eminem' komt van zijn initialen 'M and M' (M.M.). Hij werd een van de best verkopende muziekartiest aller tijden en brak barrières als blanke rapper in een overwegend zwart genre. Ontdekt door Dr. Dre, bracht Eminem baanbrekende albums uit zoals 'The Slim Shady LP', 'The Marshall Mathers LP' en 'The Eminem Show'. Hij heeft 15 Grammy Awards en een Academy Award gewonnen voor 'Lose Yourself'. Zijn alter ego 'Slim Shady' vertegenwoordigt zijn donkerdere, meer controversiële persona. Ondanks worstelingen met verslaving en mentale gezondheid blijft hij invloedrijk in de hip-hop cultuur."
        }
      },
      {
        question: {
          en: "What safety mechanism was implemented in stock markets after the 1987 Black Monday crash?",
          es: "¿Qué mecanismo de seguridad se implementó en los mercados de valores después del Lunes Negro de 1987?",
          de: "Welcher Sicherheitsmechanismus wurde nach dem Schwarzen Montag-Crash von 1987 an den Aktienmärkten implementiert?",
          nl: "Welk veiligheidsmechanisme werd geïmplementeerd op aandelenmarkten na de Zwarte Maandag crash van 1987?"
        },
        options: [
          { en: "Maximum daily gains limits", es: "Límites máximos de ganancias diarias", de: "Maximale tägliche Gewinnlimits", nl: "Maximale dagelijkse winstlimieten" },
          { en: "Government pre-approval of large trades", es: "Aprobación previa del gobierno para grandes operaciones", de: "Staatliche Vorabgenehmigung großer Geschäfte", nl: "Voorafgaande goedkeuring van grote transacties door de overheid" },
          { en: "Mandatory waiting periods for all trades", es: "Períodos de espera obligatorios para todas las operaciones", de: "Obligatorische Wartezeiten für alle Geschäfte", nl: "Verplichte wachtperiodes voor alle transacties" },
          { en: "Circuit breakers (trading halts)", es: "Interruptores automáticos (paradas de negociación)", de: "Leistungsschalter (Handelsunterbrechungen)", nl: "Stroomonderbrekers (handelsstops)" }
        ],
        correctIndex: 3,
        explanation: {
          en: "After Black Monday, stock exchanges implemented 'circuit breakers' or 'trading curbs'—automatic temporary halts in trading triggered when markets decline by specified thresholds. These pauses (typically 15 minutes to the rest of the day, depending on severity) give investors time to assess information, cool down panic selling, and prevent cascading automated sell orders. The NYSE has three circuit breaker levels: 7%, 13%, and 20% declines. Circuit breakers were tested during the 2010 'Flash Crash' and the 2020 COVID-19 market volatility. While controversial (some argue they interfere with free markets), they're credited with preventing panic-driven crashes similar to 1987.",
          es: "Después del Lunes Negro, las bolsas de valores implementaron 'interruptores automáticos' o 'restricciones comerciales': paradas temporales automáticas en la negociación activadas cuando los mercados caen por umbrales especificados. Estas pausas (típicamente 15 minutos hasta el resto del día, dependiendo de la gravedad) dan a los inversores tiempo para evaluar la información, enfriar las ventas de pánico y prevenir órdenes de venta automatizadas en cascada. La Bolsa de Nueva York tiene tres niveles de interruptor automático: caídas del 7%, 13% y 20%. Los interruptores automáticos se probaron durante el 'Flash Crash' de 2010 y la volatilidad del mercado de COVID-19 de 2020. Aunque controvertidos (algunos argumentan que interfieren con los mercados libres), se les atribuye prevenir caídas impulsadas por el pánico similares a 1987.",
          de: "Nach dem Schwarzen Montag führten Börsen 'Leistungsschalter' oder 'Handelsbeschränkungen' ein—automatische temporäre Handelsunterbrechungen, die ausgelöst werden, wenn Märkte um bestimmte Schwellenwerte fallen. Diese Pausen (typischerweise 15 Minuten bis zum Rest des Tages, je nach Schweregrad) geben Anlegern Zeit, Informationen zu bewerten, Panikverkäufe abzukühlen und kaskadierende automatisierte Verkaufsaufträge zu verhindern. Die NYSE hat drei Leistungsschalterstufen: 7%, 13% und 20% Rückgänge. Leistungsschalter wurden während des 'Flash Crash' von 2010 und der COVID-19-Marktvolatilität 2020 getestet. Obwohl umstritten (einige argumentieren, sie interferieren mit freien Märkten), werden ihnen die Verhinderung panikgetriebener Crashs ähnlich wie 1987 zugeschrieben.",
          nl: "Na Zwarte Maandag implementeerden beurzen 'stroomonderbrekers' of 'handelsbeperkingen'—automatische tijdelijke handelsstops die worden geactiveerd wanneer markten met gespecificeerde drempels dalen. Deze pauzes (meestal 15 minuten tot de rest van de dag, afhankelijk van de ernst) geven beleggers tijd om informatie te beoordelen, paniekverkopen af te koelen en cascaderende geautomatiseerde verkooporders te voorkomen. De NYSE heeft drie stroomonderbrekerniveaus: 7%, 13% en 20% dalingen. Stroomonderbrekers werden getest tijdens de 'Flash Crash' van 2010 en de COVID-19 marktvolatiliteit van 2020. Hoewel controversieel (sommigen beweren dat ze vrije markten verstoren), worden ze gecrediteerd voor het voorkomen van paniekgedreven crashes vergelijkbaar met 1987."
        }
      },
      {
        question: {
          en: "Which Eminem album became the fastest-selling rap album in history when it was released in 2000?",
          es: "¿Qué álbum de Eminem se convirtió en el álbum de rap más vendido rápidamente en la historia cuando se lanzó en 2000?",
          de: "Welches Eminem-Album wurde bei seiner Veröffentlichung im Jahr 2000 zum am schnellsten verkauften Rap-Album der Geschichte?",
          nl: "Welk Eminem-album werd het snelst verkopende rapalbum in de geschiedenis toen het in 2000 werd uitgebracht?"
        },
        options: [
          { en: "The Slim Shady LP", es: "The Slim Shady LP", de: "The Slim Shady LP", nl: "The Slim Shady LP" },
          { en: "The Marshall Mathers LP", es: "The Marshall Mathers LP", de: "The Marshall Mathers LP", nl: "The Marshall Mathers LP" },
          { en: "The Eminem Show", es: "The Eminem Show", de: "The Eminem Show", nl: "The Eminem Show" },
          { en: "Encore", es: "Encore", de: "Encore", nl: "Encore" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'The Marshall Mathers LP' (released May 2000) sold 1.76 million copies in its first week, becoming the fastest-selling rap album in history and the fastest-selling solo album in U.S. history at that time. The album featured controversial tracks like 'Stan,' 'The Real Slim Shady,' and 'Kim.' It addressed Eminem's newfound fame, critics, and personal struggles. The album won the Grammy for Best Rap Album and has sold over 25 million copies worldwide. Its raw, confessional style and technical skill influenced a generation of rappers. The name referenced his real name (Marshall Mathers) and solidified his commercial and critical dominance in hip-hop.",
          es: "'The Marshall Mathers LP' (lanzado en mayo de 2000) vendió 1,76 millones de copias en su primera semana, convirtiéndose en el álbum de rap más vendido rápidamente en la historia y el álbum en solitario más vendido rápidamente en la historia de EE.UU. en ese momento. El álbum presentó temas controvertidos como 'Stan', 'The Real Slim Shady' y 'Kim'. Abordó la fama recién descubierta de Eminem, los críticos y las luchas personales. El álbum ganó el Grammy al Mejor Álbum de Rap y ha vendido más de 25 millones de copias en todo el mundo. Su estilo crudo y confesional y su habilidad técnica influyeron en una generación de raperos. El nombre hacía referencia a su nombre real (Marshall Mathers) y solidificó su dominio comercial y crítico en el hip-hop.",
          de: "'The Marshall Mathers LP' (veröffentlicht im Mai 2000) verkaufte sich in der ersten Woche 1,76 Millionen Mal und wurde zum am schnellsten verkauften Rap-Album der Geschichte und zum am schnellsten verkauften Solo-Album in der US-Geschichte zu dieser Zeit. Das Album enthielt kontroverse Tracks wie 'Stan', 'The Real Slim Shady' und 'Kim'. Es behandelte Eminems neu gewonnenen Ruhm, Kritiker und persönliche Kämpfe. Das Album gewann den Grammy für das Beste Rap-Album und hat weltweit über 25 Millionen Exemplare verkauft. Sein roher, bekennender Stil und technisches Können beeinflussten eine Generation von Rappern. Der Name bezog sich auf seinen echten Namen (Marshall Mathers) und festigte seine kommerzielle und kritische Dominanz im Hip-Hop.",
          nl: "'The Marshall Mathers LP' (uitgebracht in mei 2000) verkocht 1,76 miljoen exemplaren in de eerste week en werd het snelst verkopende rapalbum in de geschiedenis en het snelst verkopende soloalbum in de Amerikaanse geschiedenis op dat moment. Het album bevatte controversiële tracks zoals 'Stan', 'The Real Slim Shady' en 'Kim'. Het behandelde Eminems nieuwe roem, critici en persoonlijke worstelingen. Het album won de Grammy voor Beste Rap Album en heeft wereldwijd meer dan 25 miljoen exemplaren verkocht. Zijn rauwe, belijdende stijl en technische vaardigheid beïnvloedden een generatie rappers. De naam verwees naar zijn echte naam (Marshall Mathers) en verstevigde zijn commerciële en kritische dominantie in hip-hop."
        }
      }
    ],

    // Day 18 - October 18th: Alaska Purchase, Chuck Berry, Azerbaijan Independence
    day18: [
      {
        question: {
          en: "On October 18, 1867, Alaska was officially transferred from Russia to the United States. How much did the U.S. pay for Alaska?",
          es: "El 18 de octubre de 1867, Alaska fue oficialmente transferida de Rusia a los Estados Unidos. ¿Cuánto pagó EE.UU. por Alaska?",
          de: "Am 18. Oktober 1867 wurde Alaska offiziell von Russland an die Vereinigten Staaten übertragen. Wie viel zahlten die USA für Alaska?",
          nl: "Op 18 oktober 1867 werd Alaska officieel overgedragen van Rusland aan de Verenigde Staten. Hoeveel betaalden de VS voor Alaska?"
        },
        options: [
          { en: "$3.2 million", es: "$3,2 millones", de: "$3,2 Millionen", nl: "$3,2 miljoen" },
          { en: "$7.2 million", es: "$7,2 millones", de: "$7,2 Millionen", nl: "$7,2 miljoen" },
          { en: "$12.5 million", es: "$12,5 millones", de: "$12,5 Millionen", nl: "$12,5 miljoen" },
          { en: "$20 million", es: "$20 millones", de: "$20 Millionen", nl: "$20 miljoen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The United States purchased Alaska from Russia for $7.2 million on March 30, 1867, but the formal transfer ceremony took place on October 18, 1867, in Sitka. At approximately 2 cents per acre, it was initially derided as 'Seward's Folly' after Secretary of State William Seward who negotiated the deal. Critics mocked it as an icy wasteland. However, Alaska proved incredibly valuable—rich in gold, oil, natural gas, timber, and fisheries. The Klondike Gold Rush (1896-1899) alone justified the purchase price many times over. Today, Alaska's natural resources, strategic military position, and tourism generate billions annually. The purchase nearly doubled U.S. territory and established American presence in the Arctic.",
          es: "Estados Unidos compró Alaska a Rusia por $7,2 millones el 30 de marzo de 1867, pero la ceremonia de transferencia formal tuvo lugar el 18 de octubre de 1867, en Sitka. A aproximadamente 2 centavos por acre, inicialmente fue ridiculizado como la 'Locura de Seward' en honor al Secretario de Estado William Seward quien negoció el trato. Los críticos se burlaron de ella como un páramo helado. Sin embargo, Alaska resultó increíblemente valiosa: rica en oro, petróleo, gas natural, madera y pesquerías. La Fiebre del Oro de Klondike (1896-1899) por sí sola justificó el precio de compra muchas veces. Hoy, los recursos naturales de Alaska, su posición militar estratégica y el turismo generan miles de millones anualmente. La compra casi duplicó el territorio estadounidense y estableció presencia estadounidense en el Ártico.",
          de: "Die Vereinigten Staaten kauften Alaska am 30. März 1867 für 7,2 Millionen Dollar von Russland, aber die formelle Übergabezeremonie fand am 18. Oktober 1867 in Sitka statt. Bei etwa 2 Cent pro Acre wurde es zunächst als 'Sewards Torheit' verspottet, nach Außenminister William Seward, der das Geschäft aushandelte. Kritiker verhöhnten es als eisiges Ödland. Jedoch erwies sich Alaska als unglaublich wertvoll—reich an Gold, Öl, Erdgas, Holz und Fischerei. Allein der Klondike-Goldrausch (1896-1899) rechtfertigte den Kaufpreis vielfach. Heute generieren Alaskas natürliche Ressourcen, strategische Militärposition und Tourismus jährlich Milliarden. Der Kauf verdoppelte fast das US-Territorium und etablierte amerikanische Präsenz in der Arktis.",
          nl: "De Verenigde Staten kochten Alaska van Rusland voor $7,2 miljoen op 30 maart 1867, maar de formele overdrachtsceremonie vond plaats op 18 oktober 1867 in Sitka. Voor ongeveer 2 cent per acre werd het aanvankelijk bespot als 'Sewards Dwaasheid' naar minister van Buitenlandse Zaken William Seward die de deal onderhandelde. Critici beschimpten het als een ijzig woestenij. Alaska bleek echter ongelooflijk waardevol—rijk aan goud, olie, aardgas, hout en visserijen. Alleen al de Klondike Goudkoorts (1896-1899) rechtvaardigde de aankoopprijs vele malen. Vandaag genereren Alaska's natuurlijke hulpbronnen, strategische militaire positie en toerisme jaarlijks miljarden. De aankoop verdubbelde bijna Amerikaans grondgebied en vestigde Amerikaanse aanwezigheid in het Arctische gebied."
        }
      },
      {
        question: {
          en: "What nickname was given to the Alaska purchase when critics mocked it as a wasteful acquisition?",
          es: "¿Qué apodo se le dio a la compra de Alaska cuando los críticos se burlaron de ella como una adquisición derrochadora?",
          de: "Welchen Spitznamen erhielt der Alaska-Kauf, als Kritiker ihn als verschwenderische Anschaffung verspotteten?",
          nl: "Welke bijnaam werd gegeven aan de aankoop van Alaska toen critici het bespotten als een verkwistende aankoop?"
        },
        options: [
          { en: "Lincoln's Icebox", es: "La nevera de Lincoln", de: "Lincolns Eisschrank", nl: "Lincolns ijskast" },
          { en: "Johnson's Wasteland", es: "El páramo de Johnson", de: "Johnsons Ödland", nl: "Johnsons woestenij" },
          { en: "Seward's Folly", es: "La locura de Seward", de: "Sewards Torheit", nl: "Sewards dwaasheid" },
          { en: "Grant's Mistake", es: "El error de Grant", de: "Grants Fehler", nl: "Grants vergissing" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Alaska purchase was derisively called 'Seward's Folly' (also 'Seward's Icebox') after Secretary of State William H. Seward, who championed the acquisition. Newspaper editorials mocked the purchase of this 'polar bear garden' and 'frozen wasteland.' Many Americans couldn't understand why the government spent $7.2 million (about $140 million today) on seemingly barren territory during Reconstruction. The House initially refused to appropriate funds. However, Seward's vision proved correct—Alaska's gold, oil, fishing, timber, strategic location, and natural beauty made it one of history's greatest real estate deals. The mockery turned to admiration, and Seward is now celebrated for his foresight.",
          es: "La compra de Alaska fue llamada despectivamente 'La Locura de Seward' (también 'La nevera de Seward') en honor al Secretario de Estado William H. Seward, quien promovió la adquisición. Los editoriales de periódicos se burlaron de la compra de este 'jardín de osos polares' y 'páramo congelado'. Muchos estadounidenses no podían entender por qué el gobierno gastó $7,2 millones (alrededor de $140 millones hoy) en un territorio aparentemente estéril durante la Reconstrucción. La Cámara inicialmente se negó a aprobar fondos. Sin embargo, la visión de Seward resultó correcta: el oro, petróleo, pesca, madera, ubicación estratégica y belleza natural de Alaska la convirtieron en uno de los mejores negocios inmobiliarios de la historia. La burla se convirtió en admiración, y Seward ahora es celebrado por su visión.",
          de: "Der Alaska-Kauf wurde spöttisch 'Sewards Torheit' (auch 'Sewards Eisschrank') genannt, nach Außenminister William H. Seward, der die Anschaffung befürwortete. Zeitungskommentare verspotteten den Kauf dieses 'Eisbärgartens' und 'gefrorenen Ödlands'. Viele Amerikaner konnten nicht verstehen, warum die Regierung während der Reconstruction 7,2 Millionen Dollar (etwa 140 Millionen Dollar heute) für scheinbar unfruchtbares Territorium ausgab. Das Repräsentantenhaus weigerte sich zunächst, Mittel bereitzustellen. Jedoch erwies sich Sewards Vision als richtig—Alaskas Gold, Öl, Fischerei, Holz, strategische Lage und natürliche Schönheit machten es zu einem der größten Immobiliengeschäfte der Geschichte. Der Spott wandelte sich zu Bewunderung, und Seward wird jetzt für seine Weitsicht gefeiert.",
          nl: "De aankoop van Alaska werd spottend 'Sewards Dwaasheid' genoemd (ook 'Sewards ijskast') naar minister van Buitenlandse Zaken William H. Seward, die de aankoop promootte. Krantenredacties bespotten de aankoop van deze 'ijsberentuin' en 'bevroren woestenij'. Veel Amerikanen konden niet begrijpen waarom de regering tijdens de Reconstructie $7,2 miljoen (ongeveer $140 miljoen vandaag) uitgaf aan schijnbaar kaal gebied. Het Huis weigerde aanvankelijk fondsen goed te keuren. Sewards visie bleek echter juist—Alaska's goud, olie, visserij, hout, strategische locatie en natuurlijke schoonheid maakten het tot een van de beste vastgoeddeals in de geschiedenis. De spot veranderde in bewondering, en Seward wordt nu gevierd voor zijn vooruitziendheid."
        }
      },
      {
        question: {
          en: "Rock and roll legend Chuck Berry was born on October 18, 1926. Which of his songs is considered one of the first rock and roll records?",
          es: "La leyenda del rock and roll Chuck Berry nació el 18 de octubre de 1926. ¿Cuál de sus canciones se considera uno de los primeros discos de rock and roll?",
          de: "Rock-and-Roll-Legende Chuck Berry wurde am 18. Oktober 1926 geboren. Welches seiner Lieder gilt als eine der ersten Rock-and-Roll-Platten?",
          nl: "Rock-and-roll legende Chuck Berry werd geboren op 18 oktober 1926. Welk van zijn nummers wordt beschouwd als een van de eerste rock-and-roll platen?"
        },
        options: [
          { en: "Johnny B. Goode", es: "Johnny B. Goode", de: "Johnny B. Goode", nl: "Johnny B. Goode" },
          { en: "Maybellene", es: "Maybellene", de: "Maybellene", nl: "Maybellene" },
          { en: "Roll Over Beethoven", es: "Roll Over Beethoven", de: "Roll Over Beethoven", nl: "Roll Over Beethoven" },
          { en: "Sweet Little Sixteen", es: "Sweet Little Sixteen", de: "Sweet Little Sixteen", nl: "Sweet Little Sixteen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'Maybellene' (1955) was Chuck Berry's first major hit and is considered one of the pioneering rock and roll records. The song combined country music storytelling with rhythm and blues energy, creating a new sound that defined early rock and roll. Berry's innovative guitar riffs, clever lyrics, and showmanship influenced virtually every rock guitarist who followed. 'Johnny B. Goode' (1958) became his signature song, while 'Roll Over Beethoven' challenged musical conventions. Berry was among the first inductees into the Rock and Roll Hall of Fame (1986). His duck walk, guitar solos, and storytelling lyrics about teenage life, cars, and music shaped rock music's DNA. Artists from the Beatles to the Rolling Stones cite Berry as a primary influence.",
          es: "'Maybellene' (1955) fue el primer gran éxito de Chuck Berry y se considera uno de los discos pioneros del rock and roll. La canción combinó la narrativa de la música country con la energía del rhythm and blues, creando un nuevo sonido que definió el rock and roll temprano. Los riffs de guitarra innovadores de Berry, letras ingeniosas y espectáculo influyeron en prácticamente todos los guitarristas de rock que lo siguieron. 'Johnny B. Goode' (1958) se convirtió en su canción emblemática, mientras que 'Roll Over Beethoven' desafió convenciones musicales. Berry estuvo entre los primeros en ser incluido en el Salón de la Fama del Rock and Roll (1986). Su caminata de pato, solos de guitarra y letras narrativas sobre la vida adolescente, autos y música moldearon el ADN de la música rock. Artistas desde los Beatles hasta los Rolling Stones citan a Berry como influencia principal.",
          de: "'Maybellene' (1955) war Chuck Berrys erster großer Hit und gilt als eine der wegweisenden Rock-and-Roll-Platten. Das Lied kombinierte Country-Musik-Geschichtenerzählen mit Rhythm-and-Blues-Energie und schuf einen neuen Sound, der frühen Rock and Roll definierte. Berrys innovative Gitarrenriffs, clevere Texte und Showmanship beeinflussten praktisch jeden Rock-Gitarristen, der folgte. 'Johnny B. Goode' (1958) wurde sein Markenzeichen, während 'Roll Over Beethoven' musikalische Konventionen herausforderte. Berry gehörte zu den ersten, die in die Rock and Roll Hall of Fame (1986) aufgenommen wurden. Sein Duck Walk, Gitarrensoli und erzählende Texte über Teenagerleben, Autos und Musik prägten die DNA der Rockmusik. Künstler von den Beatles bis zu den Rolling Stones nennen Berry als Haupteinfluss.",
          nl: "'Maybellene' (1955) was Chuck Berry's eerste grote hit en wordt beschouwd als een van de baanbrekende rock-and-roll platen. Het nummer combineerde countrymuziek verhalen met rhythm-and-blues energie, en creëerde een nieuw geluid dat vroege rock-and-roll definieerde. Berry's innovatieve gitaarriffs, slimme teksten en showmanship beïnvloedden vrijwel elke rockgitarist die volgde. 'Johnny B. Goode' (1958) werd zijn kenmerkende nummer, terwijl 'Roll Over Beethoven' muzikale conventies uitdaagde. Berry was een van de eerste opgenomen in de Rock and Roll Hall of Fame (1986). Zijn duck walk, gitaarsolo's en verhalende teksten over het tienerleven, auto's en muziek vormden het DNA van rockmuziek. Artiesten van de Beatles tot de Rolling Stones noemen Berry als primaire invloed."
        }
      },
      {
        question: {
          en: "Azerbaijan declared independence on October 18, 1991, as which major political entity was dissolving?",
          es: "Azerbaiyán declaró su independencia el 18 de octubre de 1991, mientras qué entidad política importante se disolvía?",
          de: "Aserbaidschan erklärte am 18. Oktober 1991 seine Unabhängigkeit, als welche große politische Einheit sich auflöste?",
          nl: "Azerbeidzjan verklaarde onafhankelijkheid op 18 oktober 1991, terwijl welke grote politieke entiteit aan het oplossen was?"
        },
        options: [
          { en: "Ottoman Empire", es: "Imperio Otomano", de: "Osmanisches Reich", nl: "Ottomaanse Rijk" },
          { en: "Soviet Union", es: "Unión Soviética", de: "Sowjetunion", nl: "Sovjet-Unie" },
          { en: "Persian Empire", es: "Imperio Persa", de: "Persisches Reich", nl: "Perzische Rijk" },
          { en: "Austrian Empire", es: "Imperio Austriaco", de: "Österreichisches Reich", nl: "Oostenrijkse Rijk" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Azerbaijan declared independence from the Soviet Union on October 18, 1991, two months before the USSR officially dissolved in December 1991. Azerbaijan had been a Soviet republic since 1920, when the Red Army invaded. The collapse of Soviet control allowed Azerbaijan to reclaim sovereignty. The country faced immediate challenges: war with Armenia over Nagorno-Karabakh, economic transformation from Soviet planning to market economy, and establishing democratic institutions. Rich in oil and natural gas (Caspian Sea reserves), Azerbaijan became strategically important. Its capital Baku was a major oil center even in the 19th century. Today, Azerbaijan balances relations between Russia, Turkey, Iran, and the West while managing its diverse cultural heritage as a predominantly Muslim but secular state.",
          es: "Azerbaiyán declaró su independencia de la Unión Soviética el 18 de octubre de 1991, dos meses antes de que la URSS se disolviera oficialmente en diciembre de 1991. Azerbaiyán había sido una república soviética desde 1920, cuando el Ejército Rojo invadió. El colapso del control soviético permitió a Azerbaiyán recuperar su soberanía. El país enfrentó desafíos inmediatos: guerra con Armenia por Nagorno-Karabaj, transformación económica de la planificación soviética a economía de mercado y establecimiento de instituciones democráticas. Rico en petróleo y gas natural (reservas del Mar Caspio), Azerbaiyán se volvió estratégicamente importante. Su capital Bakú fue un centro petrolero importante incluso en el siglo XIX. Hoy, Azerbaiyán equilibra las relaciones entre Rusia, Turquía, Irán y Occidente mientras gestiona su diversa herencia cultural como un estado predominantemente musulmán pero secular.",
          de: "Aserbaidschan erklärte am 18. Oktober 1991 seine Unabhängigkeit von der Sowjetunion, zwei Monate bevor die UdSSR im Dezember 1991 offiziell aufgelöst wurde. Aserbaidschan war seit 1920 eine Sowjetrepublik, als die Rote Armee einmarschierte. Der Zusammenbruch der sowjetischen Kontrolle ermöglichte es Aserbaidschan, die Souveränität zurückzugewinnen. Das Land stand vor unmittelbaren Herausforderungen: Krieg mit Armenien um Berg-Karabach, wirtschaftliche Transformation von sowjetischer Planung zu Marktwirtschaft und Aufbau demokratischer Institutionen. Reich an Öl und Erdgas (Kaspisches Meer-Reserven) wurde Aserbaidschan strategisch wichtig. Seine Hauptstadt Baku war bereits im 19. Jahrhundert ein bedeutendes Ölzentrum. Heute balanciert Aserbaidschan Beziehungen zwischen Russland, Türkei, Iran und dem Westen, während es sein vielfältiges kulturelles Erbe als überwiegend muslimischer aber säkularer Staat verwaltet.",
          nl: "Azerbeidzjan verklaarde onafhankelijkheid van de Sovjet-Unie op 18 oktober 1991, twee maanden voordat de USSR officieel werd opgelost in december 1991. Azerbeidzjan was een Sovjet-republiek geweest sinds 1920, toen het Rode Leger binnenviel. De ineenstorting van Sovjetcontrole stelde Azerbeidzjan in staat soevereiniteit terug te winnen. Het land stond voor onmiddellijke uitdagingen: oorlog met Armenië over Nagorno-Karabach, economische transformatie van Sovjet-planning naar markteconomie, en het vestigen van democratische instituties. Rijk aan olie en aardgas (Kaspische Zee reserves) werd Azerbeidzjan strategisch belangrijk. Hoofdstad Bakoe was al in de 19e eeuw een belangrijk oliecentrum. Vandaag balanceert Azerbeidzjan relaties tussen Rusland, Turkije, Iran en het Westen terwijl het zijn diverse culturele erfgoed beheert als een overwegend islamitische maar seculiere staat."
        }
      },
      {
        question: {
          en: "Which Chuck Berry song features the famous opening guitar riff that has been called 'the most famous opening riff in rock history'?",
          es: "¿Qué canción de Chuck Berry presenta el famoso riff de guitarra de apertura que ha sido llamado 'el riff de apertura más famoso en la historia del rock'?",
          de: "Welches Chuck-Berry-Lied enthält das berühmte Eröffnungsgitarrenriff, das als 'das berühmteste Eröffnungsriff in der Rockgeschichte' bezeichnet wurde?",
          nl: "Welk Chuck Berry nummer bevat de beroemde openingsgitaarriff die 'de beroemdste openingsriff in de rockgeschiedenis' is genoemd?"
        },
        options: [
          { en: "Rock and Roll Music", es: "Rock and Roll Music", de: "Rock and Roll Music", nl: "Rock and Roll Music" },
          { en: "No Particular Place to Go", es: "No Particular Place to Go", de: "No Particular Place to Go", nl: "No Particular Place to Go" },
          { en: "Johnny B. Goode", es: "Johnny B. Goode", de: "Johnny B. Goode", nl: "Johnny B. Goode" },
          { en: "Carol", es: "Carol", de: "Carol", nl: "Carol" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The opening guitar riff of 'Johnny B. Goode' (1958) is arguably the most recognizable in rock history. That iconic double-string bend and fast picking pattern became the template for countless rock guitarists. The song tells the semi-autobiographical story of a country boy who 'could play a guitar just like ringing a bell.' NASA included 'Johnny B. Goode' on the Voyager Golden Record sent into space in 1977, representing rock and roll to potential alien civilizations. The song showcases Berry's innovative blend of blues, country, and rhythm patterns that defined rock guitar playing. Every aspiring rock guitarist learns this riff. Marty McFly famously played it in 'Back to the Future,' introducing it to a new generation.",
          es: "El riff de guitarra de apertura de 'Johnny B. Goode' (1958) es posiblemente el más reconocible en la historia del rock. Ese icónico bend de doble cuerda y patrón de punteo rápido se convirtió en la plantilla para innumerables guitarristas de rock. La canción cuenta la historia semiautobiográfica de un chico de campo que 'podía tocar una guitarra como hacer sonar una campana'. La NASA incluyó 'Johnny B. Goode' en el Disco de Oro del Voyager enviado al espacio en 1977, representando el rock and roll a posibles civilizaciones alienígenas. La canción muestra la mezcla innovadora de Berry de blues, country y patrones rítmicos que definieron la guitarra rock. Cada aspirante a guitarrista de rock aprende este riff. Marty McFly lo tocó famosamente en 'Volver al Futuro', introduciéndolo a una nueva generación.",
          de: "Das Eröffnungsgitarrenriff von 'Johnny B. Goode' (1958) ist wohl das bekannteste in der Rockgeschichte. Dieses ikonische Doppelsaitenbending und schnelle Zupfmuster wurde zur Vorlage für unzählige Rockgitarristen. Das Lied erzählt die halb-autobiografische Geschichte eines Landjungen, der 'eine Gitarre spielen konnte wie eine Glocke läuten'. Die NASA nahm 'Johnny B. Goode' auf die Voyager Golden Record auf, die 1977 ins All geschickt wurde, und repräsentierte Rock and Roll für potenzielle außerirdische Zivilisationen. Das Lied zeigt Berrys innovative Mischung aus Blues, Country und Rhythmusmustern, die das Rockgitarrenspiel definierten. Jeder angehende Rockgitarrist lernt diesen Riff. Marty McFly spielte ihn berühmt in 'Zurück in die Zukunft' und stellte ihn einer neuen Generation vor.",
          nl: "De openingsgitaarriff van 'Johnny B. Goode' (1958) is waarschijnlijk de meest herkenbare in de rockgeschiedenis. Die iconische dubbele-snaar bend en snelle plukpatroon werd het sjabloon voor talloze rockgitaristen. Het nummer vertelt het semi-autobiografische verhaal van een plattelandsjongen die 'een gitaar kon spelen alsof hij een bel luidde'. NASA nam 'Johnny B. Goode' op in de Voyager Golden Record die in 1977 de ruimte in werd gestuurd, ter vertegenwoordiging van rock-and-roll voor mogelijke buitenaardse beschavingen. Het nummer toont Berry's innovatieve mengeling van blues, country en ritmepatronen die rockgitaarspel definieerden. Elke aspirant-rockgitarist leert deze riff. Marty McFly speelde het beroemd in 'Back to the Future', en introduceerde het aan een nieuwe generatie."
        }
      }
    ],

    // Day 19 - October 19th: Black Monday 1987, John Adams, Yorktown Siege
    day19: [
      {
        question: {
          en: "On October 19, 1987, 'Black Monday' saw the largest one-day stock market percentage decline in history. What was the approximate drop in the Dow Jones Industrial Average?",
          es: "El 19 de octubre de 1987, el 'Lunes Negro' vio la mayor caída porcentual del mercado de valores en un día en la historia. ¿Cuál fue la caída aproximada en el Promedio Industrial Dow Jones?",
          de: "Am 19. Oktober 1987 erlebte der 'Schwarze Montag' den größten prozentualen Börsenrückgang an einem Tag in der Geschichte. Wie hoch war der ungefähre Rückgang des Dow Jones Industrial Average?",
          nl: "Op 19 oktober 1987 zag 'Zwarte Maandag' de grootste procentuele daling van de aandelenmarkt op één dag in de geschiedenis. Wat was de geschatte daling van de Dow Jones Industrial Average?"
        },
        options: [
          { en: "10.5%", es: "10,5%", de: "10,5%", nl: "10,5%" },
          { en: "15.8%", es: "15,8%", de: "15,8%", nl: "15,8%" },
          { en: "22.6%", es: "22,6%", de: "22,6%", nl: "22,6%" },
          { en: "28.3%", es: "28,3%", de: "28,3%", nl: "28,3%" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On Black Monday, October 19, 1987, the Dow Jones Industrial Average plummeted 22.6% (508 points) in a single day—the largest one-day percentage decline in stock market history. The crash began in Hong Kong, spread through Europe, and hit U.S. markets with devastating force. Multiple factors contributed: program trading (computerized automated selling), portfolio insurance strategies, market overvaluation, and investor psychology. Remarkably, no single news event triggered the crash—it was largely technical and psychological. Despite apocalyptic predictions, markets recovered relatively quickly. The crash led to implementation of 'circuit breakers'—automatic trading halts when markets drop by specified percentages—to prevent similar panic-driven crashes in the future.",
          es: "El Lunes Negro, 19 de octubre de 1987, el Promedio Industrial Dow Jones se desplomó 22,6% (508 puntos) en un solo día, la mayor caída porcentual de un día en la historia del mercado de valores. La caída comenzó en Hong Kong, se extendió por Europa y golpeó los mercados estadounidenses con fuerza devastadora. Múltiples factores contribuyeron: negociación de programas (venta automatizada computarizada), estrategias de seguro de cartera, sobrevaloración del mercado y psicología de los inversores. Notablemente, ningún evento noticioso singular desencadenó la caída: fue en gran medida técnica y psicológica. A pesar de las predicciones apocalípticas, los mercados se recuperaron relativamente rápido. La caída llevó a la implementación de 'interruptores automáticos'—paradas automáticas de negociación cuando los mercados caen por porcentajes especificados—para prevenir caídas similares impulsadas por el pánico en el futuro.",
          de: "Am Schwarzen Montag, dem 19. Oktober 1987, stürzte der Dow Jones Industrial Average um 22,6% (508 Punkte) an einem einzigen Tag ab—der größte prozentuale Rückgang an einem Tag in der Börsengeschichte. Der Crash begann in Hongkong, verbreitete sich über Europa und traf die US-Märkte mit verheerender Kraft. Mehrere Faktoren trugen bei: Programmhandel (computergestützter automatisierter Verkauf), Portfolio-Versicherungsstrategien, Marktüberbewertung und Anlegerpsychologie. Bemerkenswerterweise löste kein einzelnes Nachrichtenereignis den Crash aus—er war weitgehend technischer und psychologischer Natur. Trotz apokalyptischer Vorhersagen erholten sich die Märkte relativ schnell. Der Crash führte zur Einführung von 'Leistungsschaltern'—automatischen Handelsunterbrechungen, wenn Märkte um bestimmte Prozentsätze fallen—um ähnliche panikgetriebene Crashs in Zukunft zu verhindern.",
          nl: "Op Zwarte Maandag, 19 oktober 1987, stortte de Dow Jones Industrial Average in met 22,6% (508 punten) op één dag—de grootste procentuele daling op één dag in de beursgeschiedenis. De crash begon in Hong Kong, verspreidde zich via Europa en trof de Amerikaanse markten met verwoestende kracht. Meerdere factoren droegen bij: programmahandel (geautomatiseerde computergestuurde verkoop), portfolio-verzekeringstrategieën, marktwaardering en beleggerspsychologie. Opmerkelijk is dat geen enkele nieuwsgebeurtenis de crash veroorzaakte—het was grotendeels technisch en psychologisch. Ondanks apocalyptische voorspellingen herstelden de markten relatief snel. De crash leidde tot de implementatie van 'stroomonderbrekers'—automatische handelsstops wanneer markten met gespecificeerde percentages dalen—om vergelijkbare paniekgedreven crashes in de toekomst te voorkomen."
        }
      },
      {
        question: {
          en: "John Adams, born on October 19, 1735, became the second President of the United States. Which Founding Father did he succeed as President?",
          es: "John Adams, nacido el 19 de octubre de 1735, se convirtió en el segundo Presidente de los Estados Unidos. ¿A qué Padre Fundador sucedió como Presidente?",
          de: "John Adams, geboren am 19. Oktober 1735, wurde der zweite Präsident der Vereinigten Staaten. Welchem Gründervater folgte er als Präsident?",
          nl: "John Adams, geboren op 19 oktober 1735, werd de tweede president van de Verenigde Staten. Welke Founding Father volgde hij op als president?"
        },
        options: [
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "James Madison", es: "James Madison", de: "James Madison", nl: "James Madison" }
        ],
        correctIndex: 1,
        explanation: {
          en: "John Adams succeeded George Washington as the second President, serving from 1797 to 1801. Before his presidency, Adams was a key revolutionary figure: he defended British soldiers after the Boston Massacre (demonstrating his commitment to justice), helped draft the Declaration of Independence, and served as the first U.S. Ambassador to Great Britain. As president, he avoided war with France during the Quasi-War crisis and built up the U.S. Navy. His presidency was marked by the controversial Alien and Sedition Acts. Adams and Thomas Jefferson, once close friends, became bitter rivals before reconciling in old age—both died on July 4, 1826, exactly 50 years after the Declaration of Independence. His son, John Quincy Adams, became the sixth President.",
          es: "John Adams sucedió a George Washington como el segundo Presidente, sirviendo de 1797 a 1801. Antes de su presidencia, Adams fue una figura revolucionaria clave: defendió a soldados británicos después de la Masacre de Boston (demostrando su compromiso con la justicia), ayudó a redactar la Declaración de Independencia y sirvió como el primer Embajador de EE.UU. en Gran Bretaña. Como presidente, evitó la guerra con Francia durante la crisis de la Cuasi-Guerra y construyó la Marina de EE.UU. Su presidencia estuvo marcada por las controvertidas Leyes de Extranjería y Sedición. Adams y Thomas Jefferson, una vez amigos cercanos, se convirtieron en rivales amargos antes de reconciliarse en la vejez—ambos murieron el 4 de julio de 1826, exactamente 50 años después de la Declaración de Independencia. Su hijo, John Quincy Adams, se convirtió en el sexto Presidente.",
          de: "John Adams folgte George Washington als zweiter Präsident und diente von 1797 bis 1801. Vor seiner Präsidentschaft war Adams eine wichtige revolutionäre Figur: Er verteidigte britische Soldaten nach dem Boston-Massaker (was sein Engagement für Gerechtigkeit zeigte), half bei der Ausarbeitung der Unabhängigkeitserklärung und diente als erster US-Botschafter in Großbritannien. Als Präsident vermied er den Krieg mit Frankreich während der Quasi-Kriegskrise und baute die US-Marine auf. Seine Präsidentschaft war geprägt von den umstrittenen Alien and Sedition Acts. Adams und Thomas Jefferson, einst enge Freunde, wurden erbitterte Rivalen, bevor sie sich im Alter versöhnten—beide starben am 4. Juli 1826, genau 50 Jahre nach der Unabhängigkeitserklärung. Sein Sohn, John Quincy Adams, wurde der sechste Präsident.",
          nl: "John Adams volgde George Washington op als de tweede president en diende van 1797 tot 1801. Voor zijn presidentschap was Adams een belangrijke revolutionaire figuur: hij verdedigde Britse soldaten na het Boston Massacre (wat zijn toewijding aan rechtvaardigheid toonde), hielp de Onafhankelijkheidsverklaring opstellen en diende als de eerste Amerikaanse ambassadeur in Groot-Brittannië. Als president vermeed hij oorlog met Frankrijk tijdens de Quasi-War crisis en bouwde de Amerikaanse marine op. Zijn presidentschap werd gekenmerkt door de controversiële Alien and Sedition Acts. Adams en Thomas Jefferson, ooit goede vrienden, werden bittere rivalen voordat ze zich in hun oude dag verzoenden—beiden stierven op 4 juli 1826, precies 50 jaar na de Onafhankelijkheidsverklaring. Zijn zoon, John Quincy Adams, werd de zesde president."
        }
      },
      {
        question: {
          en: "The Siege of Yorktown began on October 19, 1781, marking the final major battle of which war?",
          es: "El Asedio de Yorktown comenzó el 19 de octubre de 1781, marcando la batalla final importante de qué guerra?",
          de: "Die Belagerung von Yorktown begann am 19. Oktober 1781 und markierte die letzte große Schlacht welches Krieges?",
          nl: "Het beleg van Yorktown begon op 19 oktober 1781 en markeerde de laatste grote slag van welke oorlog?"
        },
        options: [
          { en: "War of 1812", es: "Guerra de 1812", de: "Krieg von 1812", nl: "Oorlog van 1812" },
          { en: "French and Indian War", es: "Guerra Franco-India", de: "Franzosen- und Indianerkrieg", nl: "Frans-Indiaanse Oorlog" },
          { en: "American Revolutionary War", es: "Guerra de Independencia de Estados Unidos", de: "Amerikanischer Unabhängigkeitskrieg", nl: "Amerikaanse Revolutionaire Oorlog" },
          { en: "Civil War", es: "Guerra Civil", de: "Bürgerkrieg", nl: "Burgeroorlog" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Siege of Yorktown (September 28 - October 19, 1781) was the decisive final major battle of the American Revolutionary War. General George Washington, with crucial French support (General Rochambeau's troops and Admiral de Grasse's fleet), trapped British General Cornwallis at Yorktown, Virginia. After three weeks of bombardment, Cornwallis surrendered on October 19, 1781. The British band reportedly played 'The World Turned Upside Down' during the surrender ceremony. This defeat convinced Britain that the war was unwinnable, leading to peace negotiations. The Treaty of Paris (1783) formally recognized American independence. The victory demonstrated the importance of the Franco-American alliance and Washington's strategic brilliance. It's celebrated as the birth of American independence.",
          es: "El Asedio de Yorktown (28 de septiembre - 19 de octubre de 1781) fue la batalla final decisiva de la Guerra de Independencia de Estados Unidos. El General George Washington, con apoyo francés crucial (las tropas del General Rochambeau y la flota del Almirante de Grasse), atrapó al General británico Cornwallis en Yorktown, Virginia. Después de tres semanas de bombardeo, Cornwallis se rindió el 19 de octubre de 1781. La banda británica supuestamente tocó 'The World Turned Upside Down' durante la ceremonia de rendición. Esta derrota convenció a Gran Bretaña de que la guerra era imposible de ganar, llevando a negociaciones de paz. El Tratado de París (1783) reconoció formalmente la independencia estadounidense. La victoria demostró la importancia de la alianza franco-americana y la brillantez estratégica de Washington. Se celebra como el nacimiento de la independencia estadounidense.",
          de: "Die Belagerung von Yorktown (28. September - 19. Oktober 1781) war die entscheidende letzte große Schlacht des Amerikanischen Unabhängigkeitskrieges. General George Washington fing mit entscheidender französischer Unterstützung (General Rochambeaus Truppen und Admiral de Grasses Flotte) den britischen General Cornwallis in Yorktown, Virginia. Nach drei Wochen Bombardement ergab sich Cornwallis am 19. Oktober 1781. Die britische Kapelle spielte angeblich 'The World Turned Upside Down' während der Übergabezeremonie. Diese Niederlage überzeugte Großbritannien, dass der Krieg nicht zu gewinnen war, was zu Friedensverhandlungen führte. Der Vertrag von Paris (1783) erkannte formell die amerikanische Unabhängigkeit an. Der Sieg demonstrierte die Bedeutung des französisch-amerikanischen Bündnisses und Washingtons strategische Brillanz. Er wird als Geburt der amerikanischen Unabhängigkeit gefeiert.",
          nl: "Het beleg van Yorktown (28 september - 19 oktober 1781) was de beslissende laatste grote slag van de Amerikaanse Revolutionaire Oorlog. Generaal George Washington, met cruciale Franse steun (Generaal Rochambeau's troepen en Admiraal de Grasse's vloot), sloot de Britse Generaal Cornwallis in bij Yorktown, Virginia. Na drie weken bombardement gaf Cornwallis zich over op 19 oktober 1781. De Britse band speelde naar verluidt 'The World Turned Upside Down' tijdens de overgaveceremonie. Deze nederlaag overtuigde Groot-Brittannië dat de oorlog niet te winnen was, wat leidde tot vredesonderhandelingen. Het Verdrag van Parijs (1783) erkende formeel de Amerikaanse onafhankelijkheid. De overwinning toonde het belang van de Frans-Amerikaanse alliantie en Washingtons strategische briljantie. Het wordt gevierd als de geboorte van Amerikaanse onafhankelijkheid."
        }
      },
      {
        question: {
          en: "What mechanism was implemented in stock markets worldwide after the 1987 Black Monday crash to prevent similar collapses?",
          es: "¿Qué mecanismo se implementó en los mercados de valores en todo el mundo después del Lunes Negro de 1987 para prevenir colapsos similares?",
          de: "Welcher Mechanismus wurde nach dem Schwarzen Montag 1987 weltweit an Börsen implementiert, um ähnliche Zusammenbrüche zu verhindern?",
          nl: "Welk mechanisme werd wereldwijd geïmplementeerd op aandelenmarkten na de Zwarte Maandag crash van 1987 om vergelijkbare ineenstortingen te voorkomen?"
        },
        options: [
          { en: "Daily trading limits", es: "Límites diarios de negociación", de: "Tägliche Handelslimits", nl: "Dagelijkse handelslimieten" },
          { en: "Circuit breakers", es: "Interruptores automáticos", de: "Leistungsschalter", nl: "Stroomonderbrekers" },
          { en: "Mandatory stock insurance", es: "Seguro de acciones obligatorio", de: "Obligatorische Aktienversicherung", nl: "Verplichte aandelenverzekering" },
          { en: "Government price controls", es: "Controles de precios gubernamentales", de: "Staatliche Preiskontrollen", nl: "Overheidsprijscontroles" }
        ],
        correctIndex: 1,
        explanation: {
          en: "After Black Monday 1987, stock exchanges worldwide implemented 'circuit breakers' or 'trading curbs'—automatic temporary halts in trading triggered when markets decline by specified thresholds. In the U.S., the NYSE has three levels: trading halts for 15 minutes if markets drop 7%, 15 minutes at 13%, and closure for the day at 20%. These pauses give investors time to assess information rationally, cool down panic selling, prevent cascading automated orders, and allow market makers to restore orderly trading. Circuit breakers were tested during the 2010 Flash Crash and activated multiple times during the 2020 COVID-19 pandemic market volatility. While some argue they interfere with free markets, they're credited with preventing panic-driven meltdowns.",
          es: "Después del Lunes Negro de 1987, las bolsas de valores en todo el mundo implementaron 'interruptores automáticos' o 'restricciones comerciales'—paradas temporales automáticas en la negociación activadas cuando los mercados caen por umbrales especificados. En EE.UU., la Bolsa de Nueva York tiene tres niveles: paradas de negociación de 15 minutos si los mercados caen 7%, 15 minutos al 13%, y cierre del día al 20%. Estas pausas dan a los inversores tiempo para evaluar información racionalmente, enfriar las ventas de pánico, prevenir órdenes automatizadas en cascada y permitir a los creadores de mercado restaurar la negociación ordenada. Los interruptores automáticos se probaron durante el Flash Crash de 2010 y se activaron varias veces durante la volatilidad del mercado de la pandemia de COVID-19 de 2020. Aunque algunos argumentan que interfieren con los mercados libres, se les atribuye prevenir colapsos impulsados por el pánico.",
          de: "Nach dem Schwarzen Montag 1987 implementierten Börsen weltweit 'Leistungsschalter' oder 'Handelsbeschränkungen'—automatische temporäre Handelsunterbrechungen, die ausgelöst werden, wenn Märkte um bestimmte Schwellenwerte fallen. In den USA hat die NYSE drei Stufen: Handelsunterbrechungen für 15 Minuten bei 7% Rückgang, 15 Minuten bei 13% und Schließung für den Tag bei 20%. Diese Pausen geben Anlegern Zeit, Informationen rational zu bewerten, Panikverkäufe abzukühlen, kaskadierende automatisierte Aufträge zu verhindern und Market Makern zu ermöglichen, geordneten Handel wiederherzustellen. Leistungsschalter wurden während des Flash Crash 2010 getestet und während der COVID-19-Pandemie-Marktvolatilität 2020 mehrfach aktiviert. Während einige argumentieren, sie interferieren mit freien Märkten, werden ihnen die Verhinderung panikgetriebener Zusammenbrüche zugeschrieben.",
          nl: "Na Zwarte Maandag 1987 implementeerden beurzen wereldwijd 'stroomonderbrekers' of 'handelsbeperkingen'—automatische tijdelijke handelsstops die worden geactiveerd wanneer markten met gespecificeerde drempels dalen. In de VS heeft de NYSE drie niveaus: handelsstops van 15 minuten als markten 7% dalen, 15 minuten bij 13%, en sluiting voor de dag bij 20%. Deze pauzes geven beleggers tijd om informatie rationeel te beoordelen, paniekverkopen af te koelen, cascaderende geautomatiseerde orders te voorkomen en market makers in staat te stellen ordelijke handel te herstellen. Stroomonderbrekers werden getest tijdens de Flash Crash van 2010 en meerdere keren geactiveerd tijdens de COVID-19 pandemie marktvolatiliteit van 2020. Hoewel sommigen beweren dat ze vrije markten verstoren, worden ze gecrediteerd voor het voorkomen van paniekgedreven ineenstortingen."
        }
      },
      {
        question: {
          en: "John Adams and Thomas Jefferson both died on July 4, 1826. How many years after the Declaration of Independence was this?",
          es: "John Adams y Thomas Jefferson murieron ambos el 4 de julio de 1826. ¿Cuántos años después de la Declaración de Independencia fue esto?",
          de: "John Adams und Thomas Jefferson starben beide am 4. Juli 1826. Wie viele Jahre nach der Unabhängigkeitserklärung war dies?",
          nl: "John Adams en Thomas Jefferson stierven beiden op 4 juli 1826. Hoeveel jaar na de Onafhankelijkheidsverklaring was dit?"
        },
        options: [
          { en: "40 years", es: "40 años", de: "40 Jahre", nl: "40 jaar" },
          { en: "45 years", es: "45 años", de: "45 Jahre", nl: "45 jaar" },
          { en: "50 years", es: "50 años", de: "50 Jahre", nl: "50 jaar" },
          { en: "55 years", es: "55 años", de: "55 Jahre", nl: "55 jaar" }
        ],
        correctIndex: 2,
        explanation: {
          en: "In one of history's most remarkable coincidences, both John Adams and Thomas Jefferson died on July 4, 1826—exactly 50 years after the Declaration of Independence was adopted. Adams' last words were reportedly 'Thomas Jefferson survives,' not knowing that Jefferson had died hours earlier. The two had been close collaborators during the Revolution, then became bitter political rivals (Adams was Federalist, Jefferson Democratic-Republican), and finally reconciled through correspondence in their retirement. Their simultaneous deaths on Independence Day's 50th anniversary seemed so improbable that many saw it as divine providence. James Monroe, the fifth President and another Founding Father, also died on July 4th (1831), making the date a poignant symbol of American founding.",
          es: "En una de las coincidencias más notables de la historia, tanto John Adams como Thomas Jefferson murieron el 4 de julio de 1826, exactamente 50 años después de que se adoptara la Declaración de Independencia. Las últimas palabras de Adams supuestamente fueron 'Thomas Jefferson sobrevive', sin saber que Jefferson había muerto horas antes. Los dos habían sido colaboradores cercanos durante la Revolución, luego se convirtieron en rivales políticos amargos (Adams era Federalista, Jefferson Demócrata-Republicano), y finalmente se reconciliaron a través de correspondencia en su retiro. Sus muertes simultáneas en el 50 aniversario del Día de la Independencia parecieron tan improbables que muchos lo vieron como providencia divina. James Monroe, el quinto Presidente y otro Padre Fundador, también murió el 4 de julio (1831), haciendo de la fecha un símbolo conmovedor de la fundación estadounidense.",
          de: "In einer der bemerkenswertesten Zufälle der Geschichte starben sowohl John Adams als auch Thomas Jefferson am 4. Juli 1826—genau 50 Jahre nachdem die Unabhängigkeitserklärung verabschiedet wurde. Adams' letzte Worte waren angeblich 'Thomas Jefferson überlebt', ohne zu wissen, dass Jefferson Stunden zuvor gestorben war. Die beiden waren während der Revolution enge Mitarbeiter gewesen, wurden dann erbitterte politische Rivalen (Adams war Föderalist, Jefferson Demokratisch-Republikaner) und versöhnten sich schließlich durch Korrespondenz im Ruhestand. Ihr gleichzeitiger Tod am 50. Jahrestag des Unabhängigkeitstages schien so unwahrscheinlich, dass viele es als göttliche Vorsehung ansahen. James Monroe, der fünfte Präsident und ein weiterer Gründervater, starb auch am 4. Juli (1831), was das Datum zu einem ergreifenden Symbol der amerikanischen Gründung macht.",
          nl: "In een van de meest opmerkelijke toevallen in de geschiedenis stierven zowel John Adams als Thomas Jefferson op 4 juli 1826—precies 50 jaar nadat de Onafhankelijkheidsverklaring werd aangenomen. Adams' laatste woorden waren naar verluidt 'Thomas Jefferson overleeft', niet wetend dat Jefferson uren eerder was overleden. De twee waren nauw samenwerkende partners geweest tijdens de Revolutie, werden vervolgens bittere politieke rivalen (Adams was Federalist, Jefferson Democratisch-Republikein), en verzoenden zich uiteindelijk via correspondentie tijdens hun pensioen. Hun gelijktijdige dood op de 50e verjaardag van de Onafhankelijkheidsdag leek zo onwaarschijnlijk dat velen het zagen als goddelijke voorzienigheid. James Monroe, de vijfde president en een andere Founding Father, stierf ook op 4 juli (1831), waardoor de datum een aangrijpend symbool van de Amerikaanse stichting werd."
        }
      }
    ],

    // Day 20 - October 20th: Sydney Opera House, Mau Mau Emergency, Christopher Wren
    day20: [
      {
        question: {
          en: "The Sydney Opera House was officially opened on October 20, 1973. Which monarch performed the opening ceremony?",
          es: "La Ópera de Sídney fue inaugurada oficialmente el 20 de octubre de 1973. ¿Qué monarca realizó la ceremonia de inauguración?",
          de: "Das Sydney Opera House wurde am 20. Oktober 1973 offiziell eröffnet. Welcher Monarch führte die Eröffnungszeremonie durch?",
          nl: "Het Sydney Opera House werd officieel geopend op 20 oktober 1973. Welke monarch voerde de openingsceremonie uit?"
        },
        options: [
          { en: "King George VI", es: "Rey Jorge VI", de: "König Georg VI.", nl: "Koning George VI" },
          { en: "Queen Elizabeth II", es: "Reina Isabel II", de: "Königin Elisabeth II.", nl: "Koningin Elizabeth II" },
          { en: "Prince Charles", es: "Príncipe Carlos", de: "Prinz Charles", nl: "Prins Charles" },
          { en: "Queen Victoria", es: "Reina Victoria", de: "Königin Victoria", nl: "Koningin Victoria" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Queen Elizabeth II officially opened the Sydney Opera House on October 20, 1973. The iconic building took 14 years to construct (1959-1973) and cost $102 million—14 times over budget. Danish architect Jørn Utzon won the design competition in 1957 with his revolutionary sail-like roof design, but resigned in 1966 amid disputes. The distinctive 'shells' are covered with over one million Swedish tiles. The building contains multiple performance venues, not just an opera theater. It hosts over 1,500 performances annually and attracts 8 million visitors. Recognized as a 20th-century architectural masterpiece, it became a UNESCO World Heritage Site in 2007 and remains Australia's most iconic landmark.",
          es: "La Reina Isabel II inauguró oficialmente la Ópera de Sídney el 20 de octubre de 1973. El edificio icónico tardó 14 años en construirse (1959-1973) y costó $102 millones, 14 veces más del presupuesto. El arquitecto danés Jørn Utzon ganó el concurso de diseño en 1957 con su revolucionario diseño de techo similar a velas, pero renunció en 1966 en medio de disputas. Las distintivas 'conchas' están cubiertas con más de un millón de azulejos suecos. El edificio contiene múltiples lugares de actuación, no solo un teatro de ópera. Alberga más de 1,500 actuaciones anualmente y atrae a 8 millones de visitantes. Reconocido como una obra maestra arquitectónica del siglo XX, se convirtió en Patrimonio de la Humanidad de la UNESCO en 2007 y sigue siendo el monumento más icónico de Australia.",
          de: "Königin Elisabeth II. eröffnete das Sydney Opera House offiziell am 20. Oktober 1973. Das ikonische Gebäude brauchte 14 Jahre zum Bau (1959-1973) und kostete 102 Millionen Dollar—das 14-fache des Budgets. Der dänische Architekt Jørn Utzon gewann 1957 den Designwettbewerb mit seinem revolutionären segelartigen Dachentwurf, trat aber 1966 inmitten von Streitigkeiten zurück. Die markanten 'Muscheln' sind mit über einer Million schwedischer Kacheln bedeckt. Das Gebäude enthält mehrere Aufführungsorte, nicht nur ein Operntheater. Es beherbergt jährlich über 1.500 Aufführungen und zieht 8 Millionen Besucher an. Als architektonisches Meisterwerk des 20. Jahrhunderts anerkannt, wurde es 2007 UNESCO-Weltkulturerbe und bleibt Australiens ikonischstes Wahrzeichen.",
          nl: "Koningin Elizabeth II opende het Sydney Opera House officieel op 20 oktober 1973. Het iconische gebouw kostte 14 jaar om te bouwen (1959-1973) en kostte $102 miljoen—14 keer meer dan het budget. De Deense architect Jørn Utzon won de ontwerpwedstrijd in 1957 met zijn revolutionaire zeilachtige dakontwerp, maar nam in 1966 ontslag te midden van geschillen. De onderscheidende 'schelpen' zijn bedekt met meer dan een miljoen Zweedse tegels. Het gebouw bevat meerdere opvoeringslocaties, niet alleen een operatheater. Het huisvest jaarlijks meer dan 1.500 voorstellingen en trekt 8 miljoen bezoekers. Erkend als een 20e-eeuws architectonisch meesterwerk, werd het in 2007 UNESCO Werelderfgoed en blijft Australië's meest iconische bezienswaardigheid."
        }
      },
      {
        question: {
          en: "What is the distinctive architectural feature of the Sydney Opera House's roof design?",
          es: "¿Cuál es la característica arquitectónica distintiva del diseño del techo de la Ópera de Sídney?",
          de: "Was ist das charakteristische architektonische Merkmal des Dachentwurfs des Sydney Opera House?",
          nl: "Wat is het onderscheidende architectonische kenmerk van het dakontwerp van het Sydney Opera House?"
        },
        options: [
          { en: "Glass dome", es: "Cúpula de vidrio", de: "Glaskuppel", nl: "Glazen koepel" },
          { en: "Sail-like shells", es: "Conchas similares a velas", de: "Segelartige Muscheln", nl: "Zeilachtige schelpen" },
          { en: "Pyramid structure", es: "Estructura piramidal", de: "Pyramidenstruktur", nl: "Piramidestructuur" },
          { en: "Flat concrete roof", es: "Techo de hormigón plano", de: "Flaches Betondach", nl: "Plat betonnen dak" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Sydney Opera House's most distinctive feature is its series of interlocking sail-like or shell-shaped roof sections. Architect Jørn Utzon's revolutionary design was inspired by peeling an orange—the shells are all sections of a single sphere, making them mathematically perfect and structurally sound. The roof consists of precast concrete panels covered with 1,056,006 glossy white and matte cream Swedish-made tiles. The design was so advanced that engineers initially struggled to determine how to build it. From different angles, the building resembles ship sails billowing in Sydney Harbour's wind, perfectly complementing its waterfront location. This iconic silhouette has become synonymous with Australia itself and represents mid-20th century architectural innovation.",
          es: "La característica más distintiva de la Ópera de Sídney es su serie de secciones de techo entrelazadas con forma de vela o concha. El diseño revolucionario del arquitecto Jørn Utzon se inspiró en pelar una naranja: las conchas son todas secciones de una sola esfera, haciéndolas matemáticamente perfectas y estructuralmente sólidas. El techo consiste en paneles de hormigón prefabricado cubiertos con 1,056,006 azulejos suecos de color blanco brillante y crema mate. El diseño era tan avanzado que los ingenieros inicialmente lucharon para determinar cómo construirlo. Desde diferentes ángulos, el edificio se asemeja a velas de barco ondeando al viento del Puerto de Sídney, complementando perfectamente su ubicación frente al mar. Esta silueta icónica se ha vuelto sinónimo de Australia misma y representa la innovación arquitectónica de mediados del siglo XX.",
          de: "Das markanteste Merkmal des Sydney Opera House ist seine Serie ineinandergreifender segelartiger oder muschelförmiger Dachabschnitte. Das revolutionäre Design des Architekten Jørn Utzon wurde vom Schälen einer Orange inspiriert—die Muscheln sind alle Abschnitte einer einzigen Kugel, was sie mathematisch perfekt und strukturell solide macht. Das Dach besteht aus vorgefertigten Betonplatten, die mit 1.056.006 glänzend weißen und matt cremefarbenen schwedischen Kacheln bedeckt sind. Das Design war so fortschrittlich, dass Ingenieure zunächst Schwierigkeiten hatten zu bestimmen, wie es gebaut werden sollte. Aus verschiedenen Winkeln ähnelt das Gebäude Schiffssegeln, die im Wind des Sydney Harbour wehen, und ergänzt perfekt seine Lage am Wasser. Diese ikonische Silhouette ist zum Synonym für Australien selbst geworden und repräsentiert architektonische Innovation der Mitte des 20. Jahrhunderts.",
          nl: "Het meest onderscheidende kenmerk van het Sydney Opera House is de reeks in elkaar grijpende zeilachtige of schelpvormige daksecties. Het revolutionaire ontwerp van architect Jørn Utzon was geïnspireerd door het pellen van een sinaasappel—de schelpen zijn allemaal secties van één enkele bol, waardoor ze wiskundig perfect en structureel solide zijn. Het dak bestaat uit prefab betonnen panelen bedekt met 1.056.006 glanzend witte en mat crèmekleurige Zweedse tegels. Het ontwerp was zo geavanceerd dat ingenieurs aanvankelijk moeite hadden om te bepalen hoe het gebouwd moest worden. Vanuit verschillende hoeken lijkt het gebouw op scheepszeilen die wapperen in de wind van Sydney Harbour, perfect complementerend aan de waterkantlocatie. Dit iconische silhouet is synoniem geworden met Australië zelf en vertegenwoordigt architectonische innovatie uit het midden van de 20e eeuw."
        }
      },
      {
        question: {
          en: "On October 20, 1952, Kenya declared a state of emergency due to which anti-colonial uprising?",
          es: "El 20 de octubre de 1952, Kenia declaró estado de emergencia debido a qué levantamiento anticolonial?",
          de: "Am 20. Oktober 1952 erklärte Kenia den Ausnahmezustand aufgrund welches antikolonialen Aufstands?",
          nl: "Op 20 oktober 1952 riep Kenia de noodtoestand uit vanwege welke antikoloniale opstand?"
        },
        options: [
          { en: "Zulu Rebellion", es: "Rebelión Zulú", de: "Zulu-Rebellion", nl: "Zulu-opstand" },
          { en: "Mau Mau Uprising", es: "Levantamiento Mau Mau", de: "Mau-Mau-Aufstand", nl: "Mau Mau-opstand" },
          { en: "Boer Revolt", es: "Revuelta Bóer", de: "Burenaufstand", nl: "Boerenopstand" },
          { en: "Ashanti War", es: "Guerra Ashanti", de: "Aschanti-Krieg", nl: "Ashanti-oorlog" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The British colonial government declared a state of emergency on October 20, 1952, in response to the Mau Mau Uprising—a militant nationalist movement primarily among the Kikuyu people fighting for land rights and independence. The emergency lasted until 1960. The conflict was brutal: British forces detained approximately 150,000 Kenyans in camps with harsh conditions, and thousands died. The uprising accelerated Kenya's path to independence, which was achieved in 1963 under Jomo Kenyatta. Modern research has revealed extensive human rights abuses by British forces. In 2013, Britain officially apologized and compensated Kenyan victims. The Mau Mau are now celebrated as freedom fighters who challenged colonial oppression and paved the way for African independence movements.",
          es: "El gobierno colonial británico declaró estado de emergencia el 20 de octubre de 1952, en respuesta al Levantamiento Mau Mau, un movimiento nacionalista militante principalmente entre el pueblo Kikuyu que luchaba por los derechos sobre la tierra y la independencia. La emergencia duró hasta 1960. El conflicto fue brutal: las fuerzas británicas detuvieron aproximadamente a 150,000 kenianos en campos con condiciones duras, y miles murieron. El levantamiento aceleró el camino de Kenia hacia la independencia, que se logró en 1963 bajo Jomo Kenyatta. La investigación moderna ha revelado extensos abusos de derechos humanos por parte de las fuerzas británicas. En 2013, Gran Bretaña se disculpó oficialmente y compensó a las víctimas kenianas. Los Mau Mau ahora son celebrados como luchadores por la libertad que desafiaron la opresión colonial y allanaron el camino para los movimientos de independencia africanos.",
          de: "Die britische Kolonialregierung erklärte am 20. Oktober 1952 den Ausnahmezustand als Reaktion auf den Mau-Mau-Aufstand—eine militante nationalistische Bewegung hauptsächlich unter den Kikuyu, die für Landrechte und Unabhängigkeit kämpfte. Der Ausnahmezustand dauerte bis 1960. Der Konflikt war brutal: Britische Streitkräfte inhaftierten etwa 150.000 Kenianer in Lagern mit harten Bedingungen, und Tausende starben. Der Aufstand beschleunigte Kenias Weg zur Unabhängigkeit, die 1963 unter Jomo Kenyatta erreicht wurde. Moderne Forschung hat umfangreiche Menschenrechtsverletzungen durch britische Streitkräfte aufgedeckt. 2013 entschuldigte sich Großbritannien offiziell und entschädigte kenianische Opfer. Die Mau Mau werden jetzt als Freiheitskämpfer gefeiert, die koloniale Unterdrückung herausforderten und den Weg für afrikanische Unabhängigkeitsbewegungen ebneten.",
          nl: "De Britse koloniale regering riep op 20 oktober 1952 de noodtoestand uit als reactie op de Mau Mau-opstand—een militante nationalistische beweging voornamelijk onder het Kikuyu-volk dat streed voor landrechten en onafhankelijkheid. De noodtoestand duurde tot 1960. Het conflict was brutaal: Britse strijdkrachten detineerden ongeveer 150.000 Kenianen in kampen met harde omstandigheden, en duizenden stierven. De opstand versnelde Kenya's pad naar onafhankelijkheid, die in 1963 werd bereikt onder Jomo Kenyatta. Modern onderzoek heeft uitgebreide mensenrechtenschendingen door Britse strijdkrachten aan het licht gebracht. In 2013 bood Groot-Brittannië officieel excuses aan en compenseerde Keniaanse slachtoffers. De Mau Mau worden nu gevierd als vrijheidsstrijders die koloniale onderdrukking uitdaagden en de weg vrijmaakten voor Afrikaanse onafhankelijkheidsbewegingen."
        }
      },
      {
        question: {
          en: "Christopher Wren, born on October 20, 1632, is most famous for designing which iconic London building after the Great Fire of 1666?",
          es: "Christopher Wren, nacido el 20 de octubre de 1632, es más famoso por diseñar qué edificio icónico de Londres después del Gran Incendio de 1666?",
          de: "Christopher Wren, geboren am 20. Oktober 1632, ist am berühmtesten für den Entwurf welches ikonischen Londoner Gebäudes nach dem Großen Brand von 1666?",
          nl: "Christopher Wren, geboren op 20 oktober 1632, is het meest beroemd voor het ontwerpen van welk iconisch Londens gebouw na de Grote Brand van 1666?"
        },
        options: [
          { en: "Westminster Abbey", es: "Abadía de Westminster", de: "Westminster Abbey", nl: "Westminster Abbey" },
          { en: "Tower of London", es: "Torre de Londres", de: "Tower of London", nl: "Tower of London" },
          { en: "St. Paul's Cathedral", es: "Catedral de San Pablo", de: "St. Paul's Cathedral", nl: "St. Paul's Cathedral" },
          { en: "Buckingham Palace", es: "Palacio de Buckingham", de: "Buckingham Palace", nl: "Buckingham Palace" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Sir Christopher Wren designed St. Paul's Cathedral, his masterpiece and one of London's most iconic buildings. After the Great Fire of London (1666) destroyed the medieval cathedral, Wren designed a completely new Baroque structure. Construction took 35 years (1675-1710), completed during his lifetime—rare for such grand projects. The massive dome (365 feet high) was an engineering marvel, inspired by St. Peter's Basilica in Rome. Wren is buried in the crypt with the famous Latin inscription 'Lector, si monumentum requiris, circumspice' (Reader, if you seek his monument, look around you). Beyond St. Paul's, Wren rebuilt 51 City churches after the fire and designed numerous other buildings, becoming England's greatest architect.",
          es: "Sir Christopher Wren diseñó la Catedral de San Pablo, su obra maestra y uno de los edificios más icónicos de Londres. Después de que el Gran Incendio de Londres (1666) destruyera la catedral medieval, Wren diseñó una estructura barroca completamente nueva. La construcción tomó 35 años (1675-1710), completada durante su vida, algo raro para proyectos tan grandes. La enorme cúpula (365 pies de altura) fue una maravilla de la ingeniería, inspirada en la Basílica de San Pedro en Roma. Wren está enterrado en la cripta con la famosa inscripción latina 'Lector, si monumentum requiris, circumspice' (Lector, si buscas su monumento, mira a tu alrededor). Más allá de San Pablo, Wren reconstruyó 51 iglesias de la Ciudad después del incendio y diseñó numerosos otros edificios, convirtiéndose en el arquitecto más grande de Inglaterra.",
          de: "Sir Christopher Wren entwarf die St. Paul's Cathedral, sein Meisterwerk und eines der ikonischsten Gebäude Londons. Nachdem der Große Brand von London (1666) die mittelalterliche Kathedrale zerstört hatte, entwarf Wren eine völlig neue barocke Struktur. Der Bau dauerte 35 Jahre (1675-1710) und wurde zu seinen Lebzeiten vollendet—selten für solch große Projekte. Die massive Kuppel (365 Fuß hoch) war ein ingenieurtechnisches Wunderwerk, inspiriert von der Petersbasilika in Rom. Wren ist in der Krypta mit der berühmten lateinischen Inschrift 'Lector, si monumentum requiris, circumspice' (Leser, wenn du sein Denkmal suchst, schau dich um) begraben. Über St. Paul's hinaus baute Wren 51 Stadtkirchen nach dem Brand wieder auf und entwarf zahlreiche andere Gebäude, wodurch er Englands größter Architekt wurde.",
          nl: "Sir Christopher Wren ontwierp St. Paul's Cathedral, zijn meesterwerk en een van de meest iconische gebouwen van Londen. Nadat de Grote Brand van Londen (1666) de middeleeuwse kathedraal had verwoest, ontwierp Wren een volledig nieuwe barokke structuur. De bouw duurde 35 jaar (1675-1710), voltooid tijdens zijn leven—zeldzaam voor zulke grote projecten. De massieve koepel (365 voet hoog) was een technisch wonder, geïnspireerd door de Sint-Pietersbasiliek in Rome. Wren is begraven in de crypte met de beroemde Latijnse inscriptie 'Lector, si monumentum requiris, circumspice' (Lezer, als je zijn monument zoekt, kijk om je heen). Naast St. Paul's herbouwde Wren 51 stadskerken na de brand en ontwierp talrijke andere gebouwen, waardoor hij Englands grootste architect werd."
        }
      },
      {
        question: {
          en: "How many years did it take to construct the Sydney Opera House from start to completion?",
          es: "¿Cuántos años tomó construir la Ópera de Sídney desde el inicio hasta la finalización?",
          de: "Wie viele Jahre dauerte es, das Sydney Opera House von Anfang bis Fertigstellung zu bauen?",
          nl: "Hoeveel jaar duurde het om het Sydney Opera House van begin tot voltooiing te bouwen?"
        },
        options: [
          { en: "7 years", es: "7 años", de: "7 Jahre", nl: "7 jaar" },
          { en: "10 years", es: "10 años", de: "10 Jahre", nl: "10 jaar" },
          { en: "14 years", es: "14 años", de: "14 Jahre", nl: "14 jaar" },
          { en: "20 years", es: "20 años", de: "20 Jahre", nl: "20 jaar" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Construction of the Sydney Opera House took 14 years, from 1959 to 1973—far exceeding the original estimate of 4-5 years. The project faced numerous challenges: the revolutionary design required engineering solutions that didn't exist yet, architect Jørn Utzon resigned in 1966 amid political pressure and funding disputes, and costs spiraled from the estimated $7 million to $102 million. The complexity of the shell roof structure alone took 8 years to resolve. Despite controversies, the extended timeline allowed for refinement of the revolutionary design. The building's completion marked a triumph of architectural ambition over conventional limitations, creating one of the 20th century's most recognizable structures and proving that some masterpieces require patience.",
          es: "La construcción de la Ópera de Sídney tomó 14 años, desde 1959 hasta 1973, superando con creces la estimación original de 4-5 años. El proyecto enfrentó numerosos desafíos: el diseño revolucionario requería soluciones de ingeniería que aún no existían, el arquitecto Jørn Utzon renunció en 1966 en medio de presión política y disputas de financiamiento, y los costos se dispararon de los estimados $7 millones a $102 millones. La complejidad de la estructura del techo de concha sola tomó 8 años para resolver. A pesar de las controversias, el cronograma extendido permitió el refinamiento del diseño revolucionario. La finalización del edificio marcó un triunfo de la ambición arquitectónica sobre las limitaciones convencionales, creando una de las estructuras más reconocibles del siglo XX y demostrando que algunas obras maestras requieren paciencia.",
          de: "Der Bau des Sydney Opera House dauerte 14 Jahre, von 1959 bis 1973—weit über der ursprünglichen Schätzung von 4-5 Jahren. Das Projekt stand vor zahlreichen Herausforderungen: Das revolutionäre Design erforderte ingenieurtechnische Lösungen, die noch nicht existierten, Architekt Jørn Utzon trat 1966 inmitten politischen Drucks und Finanzierungsstreitigkeiten zurück, und die Kosten stiegen von geschätzten 7 Millionen auf 102 Millionen Dollar. Die Komplexität der Muschel-Dachstruktur allein dauerte 8 Jahre zur Lösung. Trotz Kontroversen ermöglichte der verlängerte Zeitplan die Verfeinerung des revolutionären Designs. Die Fertigstellung des Gebäudes markierte einen Triumph architektonischer Ambition über konventionelle Beschränkungen und schuf eine der erkennbarsten Strukturen des 20. Jahrhunderts, was bewies, dass einige Meisterwerke Geduld erfordern.",
          nl: "De bouw van het Sydney Opera House duurde 14 jaar, van 1959 tot 1973—veel langer dan de oorspronkelijke schatting van 4-5 jaar. Het project kreeg te maken met talrijke uitdagingen: het revolutionaire ontwerp vereiste technische oplossingen die nog niet bestonden, architect Jørn Utzon nam in 1966 ontslag te midden van politieke druk en financieringsgeschillen, en de kosten stegen van de geschatte $7 miljoen naar $102 miljoen. Alleen al de complexiteit van de schelpendakstructuur kostte 8 jaar om op te lossen. Ondanks controverses maakte het verlengde tijdschema verfijning van het revolutionaire ontwerp mogelijk. De voltooiing van het gebouw markeerde een triomf van architectonische ambitie over conventionele beperkingen, en creëerde een van de meest herkenbare structuren van de 20e eeuw, wat bewijst dat sommige meesterwerken geduld vereisen."
        }
      }
    ],

    // Day 21 - October 21st: Edison's Light Bulb, Guggenheim Museum, Battle of Trafalgar
    day21: [
      {
        question: {
          en: "On October 21, 1879, Thomas Edison successfully tested the first practical incandescent light bulb. How long did his carbonized bamboo filament last?",
          es: "El 21 de octubre de 1879, Thomas Edison probó con éxito la primera bombilla incandescente práctica. ¿Cuánto tiempo duró su filamento de bambú carbonizado?",
          de: "Am 21. Oktober 1879 testete Thomas Edison erfolgreich die erste praktische Glühbirne. Wie lange hielt sein karbonisierter Bambusfaden?",
          nl: "Op 21 oktober 1879 testte Thomas Edison met succes de eerste praktische gloeilamp. Hoe lang hield zijn gecarboniseerde bamboegloeidraad het vol?"
        },
        options: [
          { en: "13.5 hours", es: "13.5 horas", de: "13,5 Stunden", nl: "13,5 uur" },
          { en: "40 hours", es: "40 horas", de: "40 Stunden", nl: "40 uur" },
          { en: "5 days", es: "5 días", de: "5 Tage", nl: "5 dagen" },
          { en: "2 weeks", es: "2 semanas", de: "2 Wochen", nl: "2 weken" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Edison's breakthrough carbonized bamboo filament burned for over 40 hours, making it the first commercially viable electric light. Though Edison didn't invent the light bulb (22 inventors preceded him), he perfected it by finding the right filament material after testing over 3,000 substances. His genius lay in creating an entire electrical system: bulbs, generators, wiring, and distribution networks. By 1882, his Pearl Street Station in New York powered 85 buildings. Edison's approach transformed innovation—systematic experimentation combined with practical implementation. His famous quote 'Genius is one percent inspiration and ninety-nine percent perspiration' reflected this method. The light bulb revolutionized civilization, extending productive hours beyond daylight and fundamentally changing how humans live, work, and socialize.",
          es: "El filamento de bambú carbonizado revolucionario de Edison ardió durante más de 40 horas, convirtiéndola en la primera luz eléctrica comercialmente viable. Aunque Edison no inventó la bombilla (22 inventores lo precedieron), la perfeccionó encontrando el material de filamento adecuado después de probar más de 3,000 sustancias. Su genio radicó en crear un sistema eléctrico completo: bombillas, generadores, cableado y redes de distribución. Para 1882, su Estación Pearl Street en Nueva York alimentaba 85 edificios. El enfoque de Edison transformó la innovación: experimentación sistemática combinada con implementación práctica. Su famosa cita 'El genio es un uno por ciento de inspiración y noventa y nueve por ciento de transpiración' reflejaba este método. La bombilla revolucionó la civilización, extendiendo las horas productivas más allá de la luz del día y cambiando fundamentalmente cómo viven, trabajan y socializan los humanos.",
          de: "Edisons bahnbrechender karbonisierter Bambusfaden brannte über 40 Stunden, was ihn zur ersten kommerziell lebensfähigen elektrischen Beleuchtung machte. Obwohl Edison die Glühbirne nicht erfand (22 Erfinder gingen ihm voraus), perfektionierte er sie, indem er das richtige Fadenmaterial fand, nachdem er über 3.000 Substanzen getestet hatte. Sein Genie lag darin, ein vollständiges elektrisches System zu schaffen: Glühbirnen, Generatoren, Verkabelung und Verteilungsnetze. Bis 1882 versorgte seine Pearl Street Station in New York 85 Gebäude. Edisons Ansatz transformierte Innovation—systematisches Experimentieren kombiniert mit praktischer Umsetzung. Sein berühmtes Zitat 'Genie ist ein Prozent Inspiration und neunundneunzig Prozent Schweiß' spiegelte diese Methode wider. Die Glühbirne revolutionierte die Zivilisation, verlängerte produktive Stunden über Tageslicht hinaus und veränderte grundlegend, wie Menschen leben, arbeiten und sozialisieren.",
          nl: "Edisons baanbrekende gecarboniseerde bamboegloeidraad brandde meer dan 40 uur, waardoor het de eerste commercieel levensvatbare elektrische lamp werd. Hoewel Edison de gloeilamp niet uitvond (22 uitvinders gingen hem voor), perfectioneerde hij hem door het juiste gloeidraammateriaal te vinden na het testen van meer dan 3.000 stoffen. Zijn genialiteit lag in het creëren van een compleet elektrisch systeem: lampen, generatoren, bedrading en distributienetwerken. Tegen 1882 voorzag zijn Pearl Street Station in New York 85 gebouwen van stroom. Edisons aanpak transformeerde innovatie—systematisch experimenteren gecombineerd met praktische implementatie. Zijn beroemde citaat 'Genie is een procent inspiratie en negenennegentig procent transpiratie' weerspiegelde deze methode. De gloeilamp revolutioneerde de beschaving, verlengde productieve uren voorbij daglicht en veranderde fundamenteel hoe mensen leven, werken en socialiseren."
        }
      },
      {
        question: {
          en: "The Guggenheim Museum in New York City opened on October 21, 1959. Which architect designed its iconic spiral structure?",
          es: "El Museo Guggenheim en la ciudad de Nueva York abrió el 21 de octubre de 1959. ¿Qué arquitecto diseñó su icónica estructura en espiral?",
          de: "Das Guggenheim Museum in New York City eröffnete am 21. Oktober 1959. Welcher Architekt entwarf seine ikonische Spiralstruktur?",
          nl: "Het Guggenheim Museum in New York City opende op 21 oktober 1959. Welke architect ontwierp de iconische spiraalstructuur?"
        },
        options: [
          { en: "Le Corbusier", es: "Le Corbusier", de: "Le Corbusier", nl: "Le Corbusier" },
          { en: "I.M. Pei", es: "I.M. Pei", de: "I.M. Pei", nl: "I.M. Pei" },
          { en: "Frank Lloyd Wright", es: "Frank Lloyd Wright", de: "Frank Lloyd Wright", nl: "Frank Lloyd Wright" },
          { en: "Ludwig Mies van der Rohe", es: "Ludwig Mies van der Rohe", de: "Ludwig Mies van der Rohe", nl: "Ludwig Mies van der Rohe" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Frank Lloyd Wright designed the Guggenheim Museum at age 89, completing it just months before his death. The revolutionary inverted ziggurat design was controversial—critics called it a 'washing machine' and many artists protested that the sloping walls would ruin their work. Wright envisioned visitors taking an elevator to the top, then walking down the continuous spiral ramp viewing art along the way. The building itself became the artwork, with its organic curves contrasting Manhattan's rigid grid. The museum took 16 years to build (1943-1959) due to World War II delays, budget issues, and Wright's perfectionism. Today it's recognized as one of the 20th century's most important buildings, proving that architecture can be as significant as the art it houses.",
          es: "Frank Lloyd Wright diseñó el Museo Guggenheim a los 89 años, completándolo solo meses antes de su muerte. El revolucionario diseño de zigurat invertido fue controvertido: los críticos lo llamaron 'lavadora' y muchos artistas protestaron que las paredes inclinadas arruinarían su trabajo. Wright imaginó que los visitantes tomarían un ascensor hasta arriba, luego caminarían por la rampa en espiral continua viendo arte en el camino. El edificio en sí se convirtió en la obra de arte, con sus curvas orgánicas contrastando con la cuadrícula rígida de Manhattan. El museo tardó 16 años en construirse (1943-1959) debido a retrasos de la Segunda Guerra Mundial, problemas presupuestarios y el perfeccionismo de Wright. Hoy se reconoce como uno de los edificios más importantes del siglo XX, demostrando que la arquitectura puede ser tan significativa como el arte que alberga.",
          de: "Frank Lloyd Wright entwarf das Guggenheim Museum im Alter von 89 Jahren und vollendete es nur Monate vor seinem Tod. Das revolutionäre umgekehrte Zikkurat-Design war kontrovers—Kritiker nannten es eine 'Waschmaschine' und viele Künstler protestierten, dass die schrägen Wände ihre Arbeit ruinieren würden. Wright stellte sich vor, dass Besucher einen Aufzug nach oben nehmen, dann die kontinuierliche Spiralrampe hinuntergehen und unterwegs Kunst betrachten. Das Gebäude selbst wurde zum Kunstwerk, mit seinen organischen Kurven, die Manhattans starrem Raster kontrastieren. Das Museum brauchte 16 Jahre zum Bau (1943-1959) aufgrund von Verzögerungen durch den Zweiten Weltkrieg, Budgetproblemen und Wrights Perfektionismus. Heute wird es als eines der wichtigsten Gebäude des 20. Jahrhunderts anerkannt und beweist, dass Architektur genauso bedeutend sein kann wie die Kunst, die sie beherbergt.",
          nl: "Frank Lloyd Wright ontwierp het Guggenheim Museum op 89-jarige leeftijd en voltooide het slechts maanden voor zijn dood. Het revolutionaire omgekeerde ziggurat-ontwerp was controversieel—critici noemden het een 'wasmachine' en veel kunstenaars protesteerden dat de hellende muren hun werk zouden ruïneren. Wright stelde zich voor dat bezoekers een lift naar boven zouden nemen, dan de continue spiraalvormige helling af zouden lopen terwijl ze onderweg kunst bekeken. Het gebouw zelf werd het kunstwerk, met zijn organische curves die contrasteren met Manhattans rigide raster. Het museum kostte 16 jaar om te bouwen (1943-1959) vanwege vertragingen door de Tweede Wereldoorlog, budgetproblemen en Wrights perfectionisme. Vandaag wordt het erkend als een van de belangrijkste gebouwen van de 20e eeuw, wat bewijst dat architectuur net zo belangrijk kan zijn als de kunst die het huisvest."
        }
      },
      {
        question: {
          en: "The Battle of Trafalgar occurred on October 21, 1805. Which British admiral led the victory but died during the battle?",
          es: "La Batalla de Trafalgar ocurrió el 21 de octubre de 1805. ¿Qué almirante británico lideró la victoria pero murió durante la batalla?",
          de: "Die Schlacht von Trafalgar fand am 21. Oktober 1805 statt. Welcher britische Admiral führte den Sieg an, starb aber während der Schlacht?",
          nl: "De Slag bij Trafalgar vond plaats op 21 oktober 1805. Welke Britse admiraal leidde de overwinning maar stierf tijdens de slag?"
        },
        options: [
          { en: "Admiral Jellicoe", es: "Almirante Jellicoe", de: "Admiral Jellicoe", nl: "Admiraal Jellicoe" },
          { en: "Admiral Drake", es: "Almirante Drake", de: "Admiral Drake", nl: "Admiraal Drake" },
          { en: "Admiral Nelson", es: "Almirante Nelson", de: "Admiral Nelson", nl: "Admiraal Nelson" },
          { en: "Admiral Beatty", es: "Almirante Beatty", de: "Admiral Beatty", nl: "Admiraal Beatty" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Admiral Horatio Nelson led the British Royal Navy to decisive victory at Trafalgar, but was mortally wounded by a French sniper. His famous signal before battle—'England expects that every man will do his duty'—inspired his fleet. Nelson employed unconventional tactics, breaking the Franco-Spanish line with two columns instead of traditional parallel formations. The British captured or destroyed 22 enemy ships without losing a single vessel. Nelson's death at the moment of triumph made him Britain's greatest naval hero. His body was preserved in brandy for the voyage home. The victory ended Napoleon's invasion plans and established British naval supremacy for over a century. Nelson's Column in London's Trafalgar Square commemorates his sacrifice and Britain's greatest naval triumph.",
          es: "El Almirante Horatio Nelson lideró a la Marina Real Británica a una victoria decisiva en Trafalgar, pero fue mortalmente herido por un francotirador francés. Su famosa señal antes de la batalla—'Inglaterra espera que cada hombre cumpla con su deber'—inspiró a su flota. Nelson empleó tácticas no convencionales, rompiendo la línea franco-española con dos columnas en lugar de formaciones paralelas tradicionales. Los británicos capturaron o destruyeron 22 barcos enemigos sin perder un solo buque. La muerte de Nelson en el momento del triunfo lo convirtió en el mayor héroe naval de Gran Bretaña. Su cuerpo fue preservado en brandy para el viaje a casa. La victoria puso fin a los planes de invasión de Napoleón y estableció la supremacía naval británica durante más de un siglo. La Columna de Nelson en Trafalgar Square de Londres conmemora su sacrificio y el mayor triunfo naval de Gran Bretaña.",
          de: "Admiral Horatio Nelson führte die britische Royal Navy zu einem entscheidenden Sieg bei Trafalgar, wurde aber tödlich von einem französischen Scharfschützen verwundet. Sein berühmtes Signal vor der Schlacht—'England erwartet, dass jeder Mann seine Pflicht tut'—inspirierte seine Flotte. Nelson wendete unkonventionelle Taktiken an und durchbrach die französisch-spanische Linie mit zwei Kolonnen statt traditioneller paralleler Formationen. Die Briten eroberten oder zerstörten 22 feindliche Schiffe, ohne ein einziges Schiff zu verlieren. Nelsons Tod im Moment des Triumphs machte ihn zu Großbritanniens größtem Seehelden. Sein Körper wurde in Brandy konserviert für die Heimreise. Der Sieg beendete Napoleons Invasionspläne und etablierte britische Seeherrschaft für über ein Jahrhundert. Nelsons Säule auf dem Londoner Trafalgar Square erinnert an sein Opfer und Großbritanniens größten Seetriumph.",
          nl: "Admiraal Horatio Nelson leidde de Britse Royal Navy naar een beslissende overwinning bij Trafalgar, maar werd dodelijk gewond door een Franse sluipschutter. Zijn beroemde signaal voor de slag—'Engeland verwacht dat elke man zijn plicht zal doen'—inspireerde zijn vloot. Nelson gebruikte onconventionele tactieken en doorbrak de Frans-Spaanse linie met twee kolommen in plaats van traditionele parallelle formaties. De Britten veroverden of vernietigden 22 vijandelijke schepen zonder een enkel vaartuig te verliezen. Nelsons dood op het moment van triomf maakte hem tot Groot-Brittannië's grootste zeeheld. Zijn lichaam werd geconserveerd in brandy voor de reis naar huis. De overwinning beëindigde Napoleons invasieplannen en vestigde Britse maritieme suprematie voor meer dan een eeuw. Nelsons Column op Trafalgar Square in Londen herdenkt zijn offer en Groot-Brittannië's grootste zeetriumf."
        }
      },
      {
        question: {
          en: "What innovative material did Edison test before finding bamboo for his light bulb filament?",
          es: "¿Qué material innovador probó Edison antes de encontrar bambú para el filamento de su bombilla?",
          de: "Welches innovative Material testete Edison, bevor er Bambus für seinen Glühbirnenfaden fand?",
          nl: "Welk innovatief materiaal testte Edison voordat hij bamboe vond voor zijn gloeilamp gloeidraad?"
        },
        options: [
          { en: "Steel wire", es: "Alambre de acero", de: "Stahldraht", nl: "Staaldraad" },
          { en: "Carbonized cotton thread", es: "Hilo de algodón carbonizado", de: "Karbonisierter Baumwollfaden", nl: "Gecarboniseerde katoendraad" },
          { en: "Platinum strips", es: "Tiras de platino", de: "Platinstreifen", nl: "Platina strips" },
          { en: "Copper filaments", es: "Filamentos de cobre", de: "Kupferfäden", nl: "Koperdraad" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Before bamboo, Edison successfully used carbonized cotton thread, which lasted 14.5 hours—a breakthrough at the time. His systematic approach involved testing thousands of materials: platinum, various metals, paper, fishing line, coconut hair, and even human hair. He sent explorers worldwide searching for better materials, eventually discovering Japanese bamboo, which lasted over 1,200 hours. This methodical experimentation exemplified Edison's famous work ethic. His Menlo Park laboratory pioneered team-based research and development, employing skilled craftsmen and scientists. Edison held 1,093 U.S. patents, but his real innovation was creating the first industrial research laboratory, establishing the model for modern R&D that companies still use today.",
          es: "Antes del bambú, Edison utilizó con éxito hilo de algodón carbonizado, que duró 14.5 horas, un avance en ese momento. Su enfoque sistemático involucró probar miles de materiales: platino, varios metales, papel, hilo de pescar, pelo de coco e incluso cabello humano. Envió exploradores por todo el mundo buscando mejores materiales, descubriendo finalmente bambú japonés, que duró más de 1,200 horas. Esta experimentación metódica ejemplificó la famosa ética de trabajo de Edison. Su laboratorio de Menlo Park fue pionero en investigación y desarrollo basado en equipos, empleando artesanos y científicos expertos. Edison obtuvo 1,093 patentes estadounidenses, pero su verdadera innovación fue crear el primer laboratorio de investigación industrial, estableciendo el modelo para I+D moderna que las empresas todavía usan hoy.",
          de: "Vor Bambus verwendete Edison erfolgreich karbonisierten Baumwollfaden, der 14,5 Stunden hielt—ein Durchbruch zu dieser Zeit. Sein systematischer Ansatz umfasste das Testen von Tausenden von Materialien: Platin, verschiedene Metalle, Papier, Angelschnur, Kokosnusshaar und sogar menschliches Haar. Er schickte Forscher weltweit auf der Suche nach besseren Materialien und entdeckte schließlich japanischen Bambus, der über 1.200 Stunden hielt. Diese methodische Experimentation exemplifizierte Edisons berühmte Arbeitsethik. Sein Menlo Park Labor war Pionier in teambasierter Forschung und Entwicklung und beschäftigte qualifizierte Handwerker und Wissenschaftler. Edison hielt 1.093 US-Patente, aber seine wahre Innovation war die Schaffung des ersten industriellen Forschungslabors, wodurch das Modell für moderne F&E etabliert wurde, das Unternehmen noch heute verwenden.",
          nl: "Vóór bamboe gebruikte Edison met succes gecarboniseerde katoendraad, die 14,5 uur hield—een doorbraak in die tijd. Zijn systematische aanpak omvatte het testen van duizenden materialen: platina, verschillende metalen, papier, vislijn, kokoshaar en zelfs menselijk haar. Hij stuurde ontdekkingsreizigers wereldwijd op zoek naar betere materialen en ontdekte uiteindelijk Japanse bamboe, die meer dan 1.200 uur hield. Deze methodische experimentatie belichaamde Edisons beroemde werkethos. Zijn Menlo Park laboratorium was baanbrekend in teamgebaseerd onderzoek en ontwikkeling, waarbij bekwame ambachtslieden en wetenschappers werden ingezet. Edison had 1.093 Amerikaanse octrooien, maar zijn echte innovatie was het creëren van het eerste industriële onderzoekslaboratorium, waarbij het model voor moderne R&D werd vastgesteld dat bedrijven vandaag nog steeds gebruiken."
        }
      },
      {
        question: {
          en: "What famous signal did Admiral Nelson send to his fleet before the Battle of Trafalgar?",
          es: "¿Qué famosa señal envió el Almirante Nelson a su flota antes de la Batalla de Trafalgar?",
          de: "Welches berühmte Signal sandte Admiral Nelson vor der Schlacht von Trafalgar an seine Flotte?",
          nl: "Welk beroemd signaal stuurde Admiraal Nelson naar zijn vloot voor de Slag bij Trafalgar?"
        },
        options: [
          { en: "God save the King", es: "Dios salve al Rey", de: "Gott schütze den König", nl: "God behoede de Koning" },
          { en: "England expects that every man will do his duty", es: "Inglaterra espera que cada hombre cumpla con su deber", de: "England erwartet, dass jeder Mann seine Pflicht tut", nl: "Engeland verwacht dat elke man zijn plicht zal doen" },
          { en: "Victory or death", es: "Victoria o muerte", de: "Sieg oder Tod", nl: "Overwinning of dood" },
          { en: "For king and country", es: "Por el rey y el país", de: "Für König und Vaterland", nl: "Voor koning en vaderland" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nelson's signal 'England expects that every man will do his duty' became one of history's most famous military communications, transmitted using flag semaphore. Originally, Nelson wanted to signal 'England confides that every man will do his duty,' but 'confides' wasn't in the signal book and would require spelling out letter-by-letter. His flag lieutenant suggested 'expects,' which was in the code book and could be transmitted faster. The message took twelve signal flags to communicate. When received, some ships cheered while others grumbled it was unnecessary—they always did their duty. Nevertheless, the signal became legendary, embodying British resolve. It's still displayed at Portsmouth's HMS Victory, Nelson's flagship, which has been preserved as a museum ship and floating monument to Britain's greatest naval victory.",
          es: "La señal de Nelson 'Inglaterra espera que cada hombre cumpla con su deber' se convirtió en una de las comunicaciones militares más famosas de la historia, transmitida mediante semáforo de banderas. Originalmente, Nelson quería señalar 'Inglaterra confía en que cada hombre cumplirá con su deber', pero 'confía' no estaba en el libro de señales y requeriría deletrearse letra por letra. Su teniente de bandera sugirió 'espera', que estaba en el libro de códigos y podía transmitirse más rápido. El mensaje requirió doce banderas de señales para comunicarse. Al recibirlo, algunos barcos vitorearon mientras otros se quejaron de que era innecesario: siempre cumplían con su deber. Sin embargo, la señal se volvió legendaria, encarnando la determinación británica. Todavía se muestra en el HMS Victory de Portsmouth, el buque insignia de Nelson, que se ha conservado como barco museo y monumento flotante a la mayor victoria naval de Gran Bretaña.",
          de: "Nelsons Signal 'England erwartet, dass jeder Mann seine Pflicht tut' wurde eine der berühmtesten militärischen Kommunikationen der Geschichte, übertragen mittels Flaggensemaphor. Ursprünglich wollte Nelson 'England vertraut darauf, dass jeder Mann seine Pflicht tun wird' signalisieren, aber 'vertraut' war nicht im Signalbuch und musste Buchstabe für Buchstabe buchstabiert werden. Sein Flaggenleutnant schlug 'erwartet' vor, das im Codebuch war und schneller übertragen werden konnte. Die Nachricht benötigte zwölf Signalflaggen zur Kommunikation. Beim Empfang jubelten einige Schiffe, während andere murrten, es sei unnötig—sie taten immer ihre Pflicht. Dennoch wurde das Signal legendär und verkörperte britische Entschlossenheit. Es wird immer noch auf der HMS Victory in Portsmouth gezeigt, Nelsons Flaggschiff, das als Museumsschiff und schwimmendes Denkmal für Großbritanniens größten Seetriumph erhalten wurde.",
          nl: "Nelsons signaal 'Engeland verwacht dat elke man zijn plicht zal doen' werd een van de beroemdste militaire communicaties in de geschiedenis, overgebracht via vlaggensemafoor. Oorspronkelijk wilde Nelson 'Engeland vertrouwt erop dat elke man zijn plicht zal doen' seinen, maar 'vertrouwt' stond niet in het signaalboek en moest letter voor letter worden gespeld. Zijn vlagluitenant stelde 'verwacht' voor, dat wel in het codeboek stond en sneller kon worden verzonden. Het bericht kostte twaalf seinvlaggen om te communiceren. Bij ontvangst juichten sommige schepen terwijl anderen mopperden dat het onnodig was—ze deden altijd hun plicht. Desondanks werd het signaal legendarisch en belichaamde Britse vastberadenheid. Het wordt nog steeds getoond op HMS Victory in Portsmouth, Nelsons vlaggenschip, dat bewaard is gebleven als museumschip en drijvend monument voor Groot-Brittannië's grootste zeeoverwinning."
        }
      }
    ],

    // Day 22 - October 22nd: Cuban Missile Crisis, Franz Liszt, Annette Funicello
    day22: [
      {
        question: {
          en: "On October 22, 1962, President John F. Kennedy announced to the world the discovery of Soviet missiles in Cuba. What action did he immediately take?",
          es: "El 22 de octubre de 1962, el presidente John F. Kennedy anunció al mundo el descubrimiento de misiles soviéticos en Cuba. ¿Qué acción tomó inmediatamente?",
          de: "Am 22. Oktober 1962 verkündete Präsident John F. Kennedy der Welt die Entdeckung sowjetischer Raketen in Kuba. Welche Maßnahme ergriff er sofort?",
          nl: "Op 22 oktober 1962 kondigde president John F. Kennedy aan de wereld de ontdekking aan van Sovjet-raketten in Cuba. Welke actie ondernam hij onmiddellijk?"
        },
        options: [
          { en: "Declared war on the Soviet Union", es: "Declaró la guerra a la Unión Soviética", de: "Erklärte der Sowjetunion den Krieg", nl: "Verklaarde oorlog aan de Sovjet-Unie" },
          { en: "Ordered a naval blockade of Cuba", es: "Ordenó un bloqueo naval de Cuba", de: "Ordnete eine Seeblockade Kubas an", nl: "Beval een zeeblokkade van Cuba" },
          { en: "Launched immediate air strikes", es: "Lanzó ataques aéreos inmediatos", de: "Startete sofortige Luftangriffe", nl: "Lanceerde onmiddellijke luchtaanvallen" },
          { en: "Invaded Cuba with ground troops", es: "Invadió Cuba con tropas terrestres", de: "Fiel mit Bodentruppen in Kuba ein", nl: "Viel Cuba binnen met grondtroepen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Kennedy ordered a naval 'quarantine' (blockade) of Cuba, preventing Soviet ships from delivering more missiles. The 13-day crisis brought the world closest to nuclear war. U.S. U-2 spy planes had photographed Soviet missile sites under construction. Kennedy's ExComm (Executive Committee) debated options: some military leaders advocated immediate invasion, but Kennedy chose measured pressure. Soviet Premier Khrushchev initially refused to back down. On October 27, tensions peaked when a U.S. spy plane was shot down over Cuba. Through backdoor diplomacy, the crisis resolved: USSR removed missiles from Cuba, U.S. secretly removed missiles from Turkey, and both sides established a direct hotline. The crisis demonstrated nuclear brinkmanship's dangers and led to improved U.S.-Soviet communication and eventual arms control treaties.",
          es: "Kennedy ordenó una 'cuarentena' naval (bloqueo) de Cuba, impidiendo que los barcos soviéticos entregaran más misiles. La crisis de 13 días llevó al mundo más cerca de la guerra nuclear. Los aviones espía U-2 estadounidenses habían fotografiado sitios de misiles soviéticos en construcción. El ExComm (Comité Ejecutivo) de Kennedy debatió opciones: algunos líderes militares abogaban por una invasión inmediata, pero Kennedy eligió presión medida. El Premier soviético Jrushchov inicialmente se negó a retroceder. El 27 de octubre, las tensiones alcanzaron su punto máximo cuando un avión espía estadounidense fue derribado sobre Cuba. A través de diplomacia secreta, la crisis se resolvió: la URSS retiró misiles de Cuba, EE.UU. retiró en secreto misiles de Turquía, y ambas partes establecieron una línea directa. La crisis demostró los peligros de la política al borde del abismo nuclear y condujo a una mejor comunicación EE.UU.-Soviética y eventuales tratados de control de armas.",
          de: "Kennedy ordnete eine Marine-'Quarantäne' (Blockade) Kubas an und verhinderte, dass sowjetische Schiffe weitere Raketen lieferten. Die 13-tägige Krise brachte die Welt dem Atomkrieg am nächsten. US-U-2-Spionageflugzeuge hatten sowjetische Raketenstellungen im Bau fotografiert. Kennedys ExComm (Exekutivkomitee) diskutierte Optionen: Einige Militärführer befürworteten eine sofortige Invasion, aber Kennedy wählte gemessenen Druck. Der sowjetische Premier Chruschtschow weigerte sich zunächst nachzugeben. Am 27. Oktober erreichten die Spannungen ihren Höhepunkt, als ein US-Spionageflugzeug über Kuba abgeschossen wurde. Durch Hinterzimmerdiplomatie wurde die Krise gelöst: Die UdSSR entfernte Raketen aus Kuba, die USA entfernten heimlich Raketen aus der Türkei, und beide Seiten richteten eine direkte Hotline ein. Die Krise demonstrierte die Gefahren nuklearer Brinksmanship und führte zu verbesserter US-sowjetischer Kommunikation und eventuellen Rüstungskontrollverträgen.",
          nl: "Kennedy beval een marine-'quarantaine' (blokkade) van Cuba, waardoor Sovjet-schepen geen extra raketten konden afleveren. De 13-daagse crisis bracht de wereld het dichtst bij een nucleaire oorlog. Amerikaanse U-2 spionagevliegtuigen hadden Sovjet-raketlocaties in aanbouw gefotografeerd. Kennedy's ExComm (Uitvoerend Comité) besprak opties: sommige militaire leiders pleitten voor onmiddellijke invasie, maar Kennedy koos voor gematigde druk. Sovjet-premier Chroesjtsjov weigerde aanvankelijk toe te geven. Op 27 oktober piekte de spanning toen een Amerikaans spionagevliegtuig boven Cuba werd neergeschoten. Door achterkamerdiplomatie werd de crisis opgelost: de USSR verwijderde raketten uit Cuba, de VS verwijderde in het geheim raketten uit Turkije, en beide partijen stelden een directe hotline in. De crisis toonde de gevaren van nucleaire brinkmanship en leidde tot verbeterde VS-Sovjet communicatie en uiteindelijke wapenbeheersingsver​dragen."
        }
      },
      {
        question: {
          en: "Franz Liszt, born on October 22, 1811, revolutionized piano performance. What was he most famous for?",
          es: "Franz Liszt, nacido el 22 de octubre de 1811, revolucionó la interpretación del piano. ¿Por qué era más famoso?",
          de: "Franz Liszt, geboren am 22. Oktober 1811, revolutionierte die Klavieraufführung. Wofür war er am berühmtesten?",
          nl: "Franz Liszt, geboren op 22 oktober 1811, revolutioneerde pianospel. Waar was hij het meest beroemd om?"
        },
        options: [
          { en: "Composing only chamber music", es: "Componer solo música de cámara", de: "Nur Kammermusik komponieren", nl: "Alleen kamermuziek componeren" },
          { en: "Virtuosic technique and showmanship", es: "Técnica virtuosa y espectáculo", de: "Virtuose Technik und Showmanship", nl: "Virtuoze techniek en showmanship" },
          { en: "Writing only religious music", es: "Escribir solo música religiosa", de: "Nur religiöse Musik schreiben", nl: "Alleen religieuze muziek schrijven" },
          { en: "Conducting exclusively", es: "Dirigir exclusivamente", de: "Ausschließlich dirigieren", nl: "Uitsluitend dirigeren" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Liszt was history's first true piano virtuoso and rock star, causing 'Lisztomanie'—women fainted at his concerts and fought over his gloves and broken piano strings as souvenirs. He revolutionized piano technique with unprecedented speed, power, and expressiveness, creating pieces considered unplayable by others. Liszt invented the solo piano recital format (previously, concerts mixed multiple performers). He was extraordinarily generous—teaching hundreds of students for free and championing other composers like Wagner and Berlioz. His compositions like 'Hungarian Rhapsodies' and 'Transcendental Études' remain among piano's most challenging works. Later in life, he took minor religious orders, balancing worldly fame with spirituality. Liszt's influence on piano pedagogy, performance practice, and musical romanticism cannot be overstated.",
          es: "Liszt fue el primer verdadero virtuoso del piano y estrella de rock de la historia, causando 'Lisztomanía': las mujeres se desmayaban en sus conciertos y peleaban por sus guantes y cuerdas de piano rotas como recuerdos. Revolucionó la técnica del piano con velocidad, potencia y expresividad sin precedentes, creando piezas consideradas intocables por otros. Liszt inventó el formato de recital de piano solo (anteriormente, los conciertos mezclaban múltiples intérpretes). Era extraordinariamente generoso: enseñaba a cientos de estudiantes gratis y defendía a otros compositores como Wagner y Berlioz. Sus composiciones como 'Rapsodias húngaras' y 'Estudios trascendentales' siguen siendo algunas de las obras más desafiantes del piano. Más tarde en la vida, tomó órdenes religiosas menores, equilibrando la fama mundana con la espiritualidad. La influencia de Liszt en la pedagogía del piano, la práctica interpretativa y el romanticismo musical no puede ser exagerada.",
          de: "Liszt war der erste wahre Klaviervirtuose und Rockstar der Geschichte und verursachte 'Lisztomanie'—Frauen wurden bei seinen Konzerten ohnmächtig und stritten um seine Handschuhe und zerbrochene Klaviersaiten als Souvenirs. Er revolutionierte die Klaviertechnik mit beispielloser Geschwindigkeit, Kraft und Ausdruckskraft und schuf Stücke, die von anderen als unspielbar galten. Liszt erfand das Solo-Klavierrezital-Format (zuvor mischten Konzerte mehrere Darsteller). Er war außerordentlich großzügig—unterrichtete Hunderte von Studenten kostenlos und setzte sich für andere Komponisten wie Wagner und Berlioz ein. Seine Kompositionen wie 'Ungarische Rhapsodien' und 'Transzendentale Etüden' gehören zu den anspruchsvollsten Werken des Klaviers. Später im Leben nahm er niedere religiöse Weihen an und balancierte weltlichen Ruhm mit Spiritualität. Liszts Einfluss auf Klavierpädagogik, Aufführungspraxis und musikalische Romantik kann nicht hoch genug eingeschätzt werden.",
          nl: "Liszt was de eerste echte pianovirtuoos en rockster in de geschiedenis, die 'Lisztomanie' veroorzaakte—vrouwen flauwvielen bij zijn concerten en vochten om zijn handschoenen en gebroken pianosnaren als souvenirs. Hij revolutioneerde pianotechniek met ongekende snelheid, kracht en expressiviteit, en creëerde stukken die door anderen als onspeelbaar werden beschouwd. Liszt bedacht het solo-pianorecital-formaat (voorheen mengden concerten meerdere artiesten). Hij was buitengewoon genereus—gaf gratis les aan honderden studenten en verdedigde andere componisten zoals Wagner en Berlioz. Zijn composities zoals 'Hongaarse Rapsodieën' en 'Transcendentale Etudes' behoren tot de meest uitdagende pianowerken. Later in zijn leven nam hij lagere religieuze wijdingen aan en balanceerde wereldse roem met spiritualiteit. Liszts invloed op pianopedagogie, uitvoeringspraktijk en muzikale romantiek kan niet worden overschat."
        }
      },
      {
        question: {
          en: "Annette Funicello, born on October 22, 1942, became famous as an original member of which Disney show?",
          es: "Annette Funicello, nacida el 22 de octubre de 1942, se hizo famosa como miembro original de qué programa de Disney?",
          de: "Annette Funicello, geboren am 22. Oktober 1942, wurde berühmt als ursprüngliches Mitglied welcher Disney-Show?",
          nl: "Annette Funicello, geboren op 22 oktober 1942, werd beroemd als oorspronkelijk lid van welke Disney-show?"
        },
        options: [
          { en: "Disney's True-Life Adventures", es: "Aventuras de Vida Real de Disney", de: "Disneys True-Life Adventures", nl: "Disney's True-Life Adventures" },
          { en: "The Disney Hour", es: "La Hora Disney", de: "Die Disney-Stunde", nl: "The Disney Hour" },
          { en: "The Mickey Mouse Club", es: "El Club de Mickey Mouse", de: "Der Micky Maus Club", nl: "The Mickey Mouse Club" },
          { en: "Wonderful World of Disney", es: "Maravilloso Mundo de Disney", de: "Wunderbare Welt von Disney", nl: "Wonderful World of Disney" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Annette became the most popular of the original Mouseketeers on 'The Mickey Mouse Club' (1955-1959). Walt Disney personally discovered her performing at a dance recital when she was 12. She became an American icon, transitioning to beach party films in the 1960s with Frankie Avalon—movies like 'Beach Blanket Bingo' defined teen culture. Unlike other teen stars, Annette maintained a wholesome image throughout her career, famously refusing to wear bikinis in beach movies (she wore modest two-pieces instead). Her signature song 'Tall Paul' launched a recording career. In 1992, she publicly announced she had multiple sclerosis, becoming an advocate for MS research until her death in 2013. She represented an era of innocent Americana and remained beloved across generations.",
          es: "Annette se convirtió en la más popular de los Mouseketeers originales en 'El Club de Mickey Mouse' (1955-1959). Walt Disney personalmente la descubrió actuando en un recital de baile cuando tenía 12 años. Se convirtió en un ícono estadounidense, haciendo la transición a películas de fiestas en la playa en la década de 1960 con Frankie Avalon: películas como 'Beach Blanket Bingo' definieron la cultura adolescente. A diferencia de otras estrellas adolescentes, Annette mantuvo una imagen saludable durante toda su carrera, negándose famosamente a usar bikinis en películas de playa (en su lugar usaba trajes de baño de dos piezas modestos). Su canción característica 'Tall Paul' lanzó una carrera discográfica. En 1992, anunció públicamente que tenía esclerosis múltiple, convirtiéndose en una defensora de la investigación de EM hasta su muerte en 2013. Representó una era de inocencia americana y permaneció querida a través de generaciones.",
          de: "Annette wurde die beliebteste der ursprünglichen Mäusekadetten im 'Micky Maus Club' (1955-1959). Walt Disney entdeckte sie persönlich bei einem Tanzauftritt, als sie 12 war. Sie wurde eine amerikanische Ikone und wechselte in den 1960er Jahren zu Strandparty-Filmen mit Frankie Avalon—Filme wie 'Beach Blanket Bingo' definierten die Jugendkultur. Anders als andere Teenstars behielt Annette während ihrer gesamten Karriere ein gesundes Image bei und weigerte sich bekanntermaßen, in Strandfilmen Bikinis zu tragen (stattdessen trug sie bescheidene Zweiteiler). Ihr Signature-Song 'Tall Paul' startete eine Aufnahmekarriere. 1992 kündigte sie öffentlich an, dass sie Multiple Sklerose hatte, und wurde bis zu ihrem Tod 2013 eine Verfechterin der MS-Forschung. Sie repräsentierte eine Ära unschuldiger Americana und blieb über Generationen hinweg geliebt.",
          nl: "Annette werd de populairste van de oorspronkelijke Mouseketeers in 'The Mickey Mouse Club' (1955-1959). Walt Disney ontdekte haar persoonlijk toen ze optrad bij een dansrecital toen ze 12 was. Ze werd een Amerikaans icoon en ging over naar strandfeestfilms in de jaren 1960 met Frankie Avalon—films zoals 'Beach Blanket Bingo' definieerden de tienercultuur. In tegenstelling tot andere tienersterren behield Annette een gezond imago gedurende haar hele carrière en weigerde beroemd om bikini's te dragen in strandfilms (ze droeg in plaats daarvan bescheiden tweedelige badpakken). Haar kenmerkende nummer 'Tall Paul' lanceerde een opnamecarrière. In 1992 kondigde ze publiekelijk aan dat ze multiple sclerose had en werd een voorvechter voor MS-onderzoek tot haar dood in 2013. Ze vertegenwoordigde een tijdperk van onschuldige Americana en bleef geliefd over generaties heen."
        }
      },
      {
        question: {
          en: "During the Cuban Missile Crisis, what secret concession did the U.S. make to resolve the standoff?",
          es: "Durante la Crisis de los Misiles de Cuba, ¿qué concesión secreta hizo EE.UU. para resolver el enfrentamiento?",
          de: "Während der Kubakrise, welches geheime Zugeständnis machten die USA, um die Konfrontation zu lösen?",
          nl: "Tijdens de Cubaanse Rakettencrisis, welke geheime concessie deed de VS om de patstelling op te lossen?"
        },
        options: [
          { en: "Withdrew from West Berlin", es: "Se retiró de Berlín Occidental", de: "Zog sich aus West-Berlin zurück", nl: "Trok zich terug uit West-Berlijn" },
          { en: "Removed missiles from Turkey", es: "Retiró misiles de Turquía", de: "Entfernte Raketen aus der Türkei", nl: "Verwijderde raketten uit Turkije" },
          { en: "Paid the Soviet Union $1 billion", es: "Pagó a la Unión Soviética $1 mil millones", de: "Zahlte der Sowjetunion 1 Milliarde Dollar", nl: "Betaalde de Sovjet-Unie $1 miljard" },
          { en: "Ended the arms race", es: "Terminó la carrera armamentista", de: "Beendete das Wettrüsten", nl: "Beëindigde de wapenwedloop" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The U.S. secretly agreed to remove Jupiter missiles from Turkey within six months—a fact kept hidden for years to avoid appearing weak. Publicly, the deal seemed one-sided: USSR withdrew missiles from Cuba, U.S. promised not to invade. But Kennedy's brother Robert negotiated the missile swap in backdoor channels with Soviet Ambassador Dobrynin. This mutual compromise prevented nuclear war but had to remain secret for political reasons—Kennedy couldn't appear to trade away NATO ally security. The Turkish missiles were obsolete anyway, already scheduled for removal. The crisis established the Washington-Moscow hotline for direct communication and led to the 1963 Partial Nuclear Test Ban Treaty. It demonstrated that even during Cold War tensions, rational negotiation could prevent catastrophe.",
          es: "EE.UU. acordó en secreto retirar los misiles Júpiter de Turquía dentro de seis meses, un hecho que se mantuvo oculto durante años para evitar parecer débil. Públicamente, el acuerdo parecía unilateral: la URSS retiró misiles de Cuba, EE.UU. prometió no invadir. Pero el hermano de Kennedy, Robert, negoció el intercambio de misiles en canales secretos con el embajador soviético Dobrynin. Este compromiso mutuo previno la guerra nuclear pero tuvo que permanecer secreto por razones políticas: Kennedy no podía parecer intercambiar la seguridad de un aliado de la OTAN. Los misiles turcos eran obsoletos de todos modos, ya programados para ser retirados. La crisis estableció la línea directa Washington-Moscú para comunicación directa y condujo al Tratado de Prohibición Parcial de Ensayos Nucleares de 1963. Demostró que incluso durante las tensiones de la Guerra Fría, la negociación racional podía prevenir la catástrofe.",
          de: "Die USA stimmten heimlich zu, Jupiter-Raketen innerhalb von sechs Monaten aus der Türkei zu entfernen—eine Tatsache, die jahrelang verborgen blieb, um nicht schwach zu erscheinen. Öffentlich schien das Geschäft einseitig: Die UdSSR zog Raketen aus Kuba ab, die USA versprachen, nicht einzumarschieren. Aber Kennedys Bruder Robert verhandelte den Raketentausch in Hinterkanälen mit dem sowjetischen Botschafter Dobrynin. Dieser gegenseitige Kompromiss verhinderte einen Atomkrieg, musste aber aus politischen Gründen geheim bleiben—Kennedy konnte nicht erscheinen, als würde er die Sicherheit eines NATO-Verbündeten eintauschen. Die türkischen Raketen waren sowieso veraltet, bereits für die Entfernung geplant. Die Krise etablierte die Washington-Moskau-Hotline für direkte Kommunikation und führte zum Teilweisen Atomtestverbots​vertrag von 1963. Sie demonstrierte, dass selbst während der Spannungen des Kalten Krieges rationale Verhandlungen eine Katastrophe verhindern konnten.",
          nl: "De VS stemden in het geheim ermee in om Jupiter-raketten binnen zes maanden uit Turkije te verwijderen—een feit dat jarenlang verborgen werd gehouden om niet zwak te lijken. Publiekelijk leek de deal eenzijdig: de USSR trok raketten terug uit Cuba, de VS beloofden niet te invaseren. Maar Kennedy's broer Robert onderhandelde de raketruil via achterkamerkanalen met Sovjet-ambassadeur Dobrynin. Dit wederzijds compromis voorkwam nucleaire oorlog maar moest om politieke redenen geheim blijven—Kennedy kon niet lijken de veiligheid van een NAVO-bondgenoot weg te ruilen. De Turkse raketten waren toch al verouderd, al gepland voor verwijdering. De crisis vestigde de Washington-Moskou hotline voor directe communicatie en leidde tot het Gedeeltelijk Kernproeven​verbodsverdrag van 1963. Het toonde aan dat zelfs tijdens Koude Oorlog spanningen rationele onderhandeling een catastrofe kon voorkomen."
        }
      },
      {
        question: {
          en: "What phenomenon did Franz Liszt's concerts create among his fans?",
          es: "¿Qué fenómeno crearon los conciertos de Franz Liszt entre sus fans?",
          de: "Welches Phänomen schufen Franz Liszts Konzerte unter seinen Fans?",
          nl: "Welk fenomeen creëerden Franz Liszts concerten onder zijn fans?"
        },
        options: [
          { en: "Beetlemania", es: "Beatlemanía", de: "Beatlemania", nl: "Beatlemania" },
          { en: "Lisztomania", es: "Lisztomanía", de: "Lisztomanie", nl: "Lisztomania" },
          { en: "Piano fever", es: "Fiebre del piano", de: "Klavierfieber", nl: "Pianokoorts" },
          { en: "Classical craze", es: "Locura clásica", de: "Klassischer Wahnsinn", nl: "Klassieke rage" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'Lisztomania' was coined by Heinrich Heine in 1844 to describe the mass hysteria surrounding Liszt's performances—unprecedented for a classical musician. Women threw jewelry onstage, fought over broken piano strings, and kept locks of his hair in lockets. Liszt's concerts were theatrical events: he played from memory (revolutionary at the time), positioned the piano sideways so audiences could see his profile, and displayed passionate physical expressiveness. He was extraordinarily handsome, adding to his appeal. This phenomenon predated modern celebrity culture by over a century. Liszt eventually tired of celebrity, settling in Weimar to compose and teach. The term 'Lisztomania' was revived in 1975 for a Ken Russell film about the composer, but the original mania remains unique in classical music history.",
          es: "'Lisztomanía' fue acuñado por Heinrich Heine en 1844 para describir la histeria masiva que rodeaba las actuaciones de Liszt, sin precedentes para un músico clásico. Las mujeres arrojaban joyas al escenario, peleaban por cuerdas de piano rotas y guardaban mechones de su cabello en medallones. Los conciertos de Liszt eran eventos teatrales: tocaba de memoria (revolucionario en ese momento), posicionaba el piano de lado para que el público pudiera ver su perfil y mostraba expresividad física apasionada. Era extraordinariamente apuesto, lo que aumentaba su atractivo. Este fenómeno precedió a la cultura de celebridades moderna por más de un siglo. Liszt finalmente se cansó de la celebridad, estableciéndose en Weimar para componer y enseñar. El término 'Lisztomanía' fue revivido en 1975 para una película de Ken Russell sobre el compositor, pero la manía original permanece única en la historia de la música clásica.",
          de: "'Lisztomanie' wurde 1844 von Heinrich Heine geprägt, um die Massenhysterie um Liszts Auftritte zu beschreiben—beispiellos für einen klassischen Musiker. Frauen warfen Schmuck auf die Bühne, stritten um zerbrochene Klaviersaiten und bewahrten Haarlocken in Medaillons auf. Liszts Konzerte waren theatralische Ereignisse: Er spielte auswendig (damals revolutionär), positionierte das Klavier seitlich, damit das Publikum sein Profil sehen konnte, und zeigte leidenschaftliche körperliche Ausdruckskraft. Er war außerordentlich gutaussehend, was zu seinem Reiz beitrug. Dieses Phänomen ging der modernen Promi-Kultur um über ein Jahrhundert voraus. Liszt wurde schließlich der Prominenz müde und ließ sich in Weimar nieder, um zu komponieren und zu unterrichten. Der Begriff 'Lisztomanie' wurde 1975 für einen Ken Russell-Film über den Komponisten wiederbelebt, aber die ursprüngliche Manie bleibt einzigartig in der klassischen Musikgeschichte.",
          nl: "'Lisztomania' werd in 1844 bedacht door Heinrich Heine om de massahysterie rond Liszts optredens te beschrijven—ongekend voor een klassieke musicus. Vrouwen gooiden juwelen op het podium, vochten om gebroken pianosnaren en bewaarden lokken van zijn haar in medaillons. Liszts concerten waren theatrale evenementen: hij speelde uit het hoofd (revolutionair in die tijd), plaatste de piano zijwaarts zodat het publiek zijn profiel kon zien, en toonde gepassioneerde fysieke expressiviteit. Hij was buitengewoon knap, wat zijn aantrekkingskracht vergrootte. Dit fenomeen ging de moderne beroemdhedencultuur meer dan een eeuw voor. Liszt werd uiteindelijk moe van beroemdheid en vestigde zich in Weimar om te componeren en te lesgeven. De term 'Lisztomania' werd in 1975 nieuw leven ingeblazen voor een Ken Russell-film over de componist, maar de originele manie blijft uniek in de klassieke muziekgeschiedenis."
        }
      }
    ],

    // Day 23 - October 23rd: Hungarian Revolution, iPod Introduction, Pelé Born
    day23: [
      {
        question: {
          en: "The Hungarian Revolution began on October 23, 1956, when citizens rose up against Soviet control. What was the outcome?",
          es: "La Revolución Húngara comenzó el 23 de octubre de 1956, cuando los ciudadanos se levantaron contra el control soviético. ¿Cuál fue el resultado?",
          de: "Die Ungarische Revolution begann am 23. Oktober 1956, als Bürger gegen die sowjetische Kontrolle aufstanden. Was war das Ergebnis?",
          nl: "De Hongaarse Revolutie begon op 23 oktober 1956, toen burgers in opstand kwamen tegen Sovjetcontrole. Wat was de uitkomst?"
        },
        options: [
          { en: "Hungary gained full independence", es: "Hungría obtuvo independencia total", de: "Ungarn erlangte volle Unabhängigkeit", nl: "Hongarije verwierf volledige onafhankelijkheid" },
          { en: "Soviet tanks crushed the uprising", es: "Los tanques soviéticos aplastaron el levantamiento", de: "Sowjetische Panzer unterdrückten den Aufstand", nl: "Sovjettanks sloegen de opstand neer" },
          { en: "NATO intervened militarily", es: "La OTAN intervino militarmente", de: "NATO intervenierte militärisch", nl: "NAVO greep militair in" },
          { en: "A peaceful compromise was reached", es: "Se alcanzó un compromiso pacífico", de: "Ein friedlicher Kompromiss wurde erreicht", nl: "Een vreedzaam compromis werd bereikt" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Soviet tanks brutally crushed the Hungarian Revolution in November 1956, killing approximately 2,500 Hungarians and causing 200,000 to flee as refugees. The uprising began with student demonstrations demanding democratic reforms and Soviet withdrawal. For a brief period, revolutionary Prime Minister Imre Nagy announced Hungary's withdrawal from the Warsaw Pact and declared neutrality. The West, despite 'Radio Free Europe' encouragement, provided no military support—unwilling to risk World War III. Soviet forces invaded with overwhelming force. Nagy was executed in 1958. The revolution's failure demonstrated that Eastern European countries remained firmly under Soviet control. However, it inspired future resistance movements and remained a symbol of courage against oppression. Hungary finally achieved democracy in 1989 when communism collapsed.",
          es: "Los tanques soviéticos aplastaron brutalmente la Revolución Húngara en noviembre de 1956, matando aproximadamente a 2,500 húngaros y causando que 200,000 huyeran como refugiados. El levantamiento comenzó con manifestaciones estudiantiles exigiendo reformas democráticas y la retirada soviética. Durante un breve período, el Primer Ministro revolucionario Imre Nagy anunció la retirada de Hungría del Pacto de Varsovia y declaró neutralidad. Occidente, a pesar del aliento de 'Radio Europa Libre', no proporcionó apoyo militar, no dispuesto a arriesgar la Tercera Guerra Mundial. Las fuerzas soviéticas invadieron con fuerza abrumadora. Nagy fue ejecutado en 1958. El fracaso de la revolución demostró que los países de Europa del Este permanecían firmemente bajo control soviético. Sin embargo, inspiró futuros movimientos de resistencia y siguió siendo un símbolo de valentía contra la opresión. Hungría finalmente logró la democracia en 1989 cuando el comunismo colapsó.",
          de: "Sowjetische Panzer unterdrückten die Ungarische Revolution im November 1956 brutal, töteten etwa 2.500 Ungarn und verursachten, dass 200.000 als Flüchtlinge flohen. Der Aufstand begann mit Studentendemonstrationen, die demokratische Reformen und den sowjetischen Abzug forderten. Für eine kurze Zeit kündigte der revolutionäre Premierminister Imre Nagy Ungarns Austritt aus dem Warschauer Pakt an und erklärte Neutralität. Der Westen bot trotz Ermutigung durch 'Radio Free Europe' keine militärische Unterstützung—unwillig, den Dritten Weltkrieg zu riskieren. Sowjetische Streitkräfte marschierten mit überwältigender Gewalt ein. Nagy wurde 1958 hingerichtet. Das Scheitern der Revolution zeigte, dass osteuropäische Länder fest unter sowjetischer Kontrolle blieben. Sie inspirierte jedoch zukünftige Widerstandsbewegungen und blieb ein Symbol des Mutes gegen Unterdrückung. Ungarn erlangte schließlich 1989 Demokratie, als der Kommunismus zusammenbrach.",
          nl: "Sovjet-tanks sloegen de Hongaarse Revolutie in november 1956 brutaal neer, waarbij ongeveer 2.500 Hongaren werden gedood en 200.000 als vluchtelingen moesten vluchten. De opstand begon met studentendemonstraties die democratische hervormingen en Sovjetterugtrekking eisten. Voor een korte periode kondigde revolutionaire premier Imre Nagy Hongarije's terugtrekking uit het Warschaupact aan en verklaarde neutraliteit. Het Westen bood, ondanks aanmoediging van 'Radio Free Europe', geen militaire steun—onwillig om de Derde Wereldoorlog te riskeren. Sovjettroepen vielen binnen met overweldigende macht. Nagy werd in 1958 geëxecuteerd. Het falen van de revolutie toonde aan dat Oost-Europese landen stevig onder Sovjetcontrole bleven. Het inspireerde echter toekomstige verzetsbewegingen en bleef een symbool van moed tegen onderdrukking. Hongarije bereikte uiteindelijk democratie in 1989 toen het communisme instortte."
        }
      },
      {
        question: {
          en: "On October 23, 2001, Apple introduced the iPod. What was its revolutionary marketing slogan?",
          es: "El 23 de octubre de 2001, Apple presentó el iPod. ¿Cuál fue su revolucionario eslogan de marketing?",
          de: "Am 23. Oktober 2001 führte Apple den iPod ein. Was war sein revolutionärer Marketingslogan?",
          nl: "Op 23 oktober 2001 introduceerde Apple de iPod. Wat was de revolutionaire marketingslogan?"
        },
        options: [
          { en: "Music in your pocket", es: "Música en tu bolsillo", de: "Musik in deiner Tasche", nl: "Muziek in je zak" },
          { en: "1,000 songs in your pocket", es: "1,000 canciones en tu bolsillo", de: "1.000 Songs in deiner Tasche", nl: "1.000 liedjes in je zak" },
          { en: "The future of music", es: "El futuro de la música", de: "Die Zukunft der Musik", nl: "De toekomst van muziek" },
          { en: "Digital music player", es: "Reproductor de música digital", de: "Digitaler Musikplayer", nl: "Digitale muziekspeler" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Apple's '1,000 songs in your pocket' perfectly captured the iPod's revolutionary nature. While MP3 players existed, none combined capacity, design, and user experience like the iPod. Its 5GB hard drive held far more music than competitors' flash memory. The click wheel interface made navigation intuitive. Steve Jobs positioned it not as technology but as lifestyle—connecting to the iTunes ecosystem. Initially Mac-only, limiting sales, but the 2003 Windows version exploded growth. The iPod transformed Apple from computer company to consumer electronics giant, paving the way for iPhone. It revolutionized music industry economics, accelerating digital downloads over physical media. By 2007, iPod was a cultural icon. Though smartphones eventually replaced it, the iPod fundamentally changed how humanity consumes music.",
          es: "El '1,000 canciones en tu bolsillo' de Apple capturó perfectamente la naturaleza revolucionaria del iPod. Aunque existían reproductores MP3, ninguno combinaba capacidad, diseño y experiencia de usuario como el iPod. Su disco duro de 5GB contenía mucha más música que la memoria flash de los competidores. La interfaz de rueda de clic hizo la navegación intuitiva. Steve Jobs lo posicionó no como tecnología sino como estilo de vida, conectándose al ecosistema iTunes. Inicialmente solo Mac, limitando las ventas, pero la versión Windows de 2003 explotó el crecimiento. El iPod transformó a Apple de compañía de computadoras a gigante de electrónica de consumo, allanando el camino para el iPhone. Revolucionó la economía de la industria musical, acelerando las descargas digitales sobre los medios físicos. Para 2007, el iPod era un ícono cultural. Aunque los teléfonos inteligentes eventualmente lo reemplazaron, el iPod cambió fundamentalmente cómo la humanidad consume música.",
          de: "Apples '1.000 Songs in deiner Tasche' erfasste perfekt die revolutionäre Natur des iPod. Während MP3-Player existierten, kombinierte keiner Kapazität, Design und Benutzererfahrung wie der iPod. Seine 5GB-Festplatte speicherte weit mehr Musik als der Flash-Speicher der Konkurrenz. Die Click-Wheel-Schnittstelle machte die Navigation intuitiv. Steve Jobs positionierte ihn nicht als Technologie, sondern als Lifestyle—verbunden mit dem iTunes-Ökosystem. Zunächst nur für Mac, was Verkäufe begrenzte, aber die Windows-Version von 2003 ließ das Wachstum explodieren. Der iPod verwandelte Apple von einem Computerunternehmen zu einem Riesen der Unterhaltungselektronik und ebnete den Weg für das iPhone. Er revolutionierte die Wirtschaft der Musikindustrie und beschleunigte digitale Downloads gegenüber physischen Medien. Bis 2007 war der iPod ein kulturelles Icon. Obwohl Smartphones ihn schließlich ersetzten, veränderte der iPod grundlegend, wie die Menschheit Musik konsumiert.",
          nl: "Apples '1.000 liedjes in je zak' vatte perfect de revolutionaire aard van de iPod samen. Hoewel MP3-spelers bestonden, combineerde geen enkele capaciteit, ontwerp en gebruikerservaring zoals de iPod. Zijn 5GB harde schijf bevatte veel meer muziek dan het flashgeheugen van concurrenten. De click wheel-interface maakte navigatie intuïtief. Steve Jobs positioneerde het niet als technologie maar als lifestyle—verbonden met het iTunes-ecosysteem. Aanvankelijk alleen Mac, wat verkopen beperkte, maar de Windows-versie van 2003 deed de groei exploderen. De iPod transformeerde Apple van computerbedrijf naar consumentenelektronica gigant, en effende de weg voor iPhone. Het revolutioneerde de economie van de muziekindustrie, versnelde digitale downloads boven fysieke media. Tegen 2007 was de iPod een cultureel icoon. Hoewel smartphones het uiteindelijk vervingen, veranderde de iPod fundamenteel hoe de mensheid muziek consumeert."
        }
      },
      {
        question: {
          en: "Pelé, born on October 23, 1940, is considered the greatest footballer ever. At what age did he win his first World Cup?",
          es: "Pelé, nacido el 23 de octubre de 1940, es considerado el mejor futbolista de la historia. ¿A qué edad ganó su primera Copa del Mundo?",
          de: "Pelé, geboren am 23. Oktober 1940, gilt als größter Fußballer aller Zeiten. In welchem Alter gewann er seine erste Weltmeisterschaft?",
          nl: "Pelé, geboren op 23 oktober 1940, wordt beschouwd als de beste voetballer ooit. Op welke leeftijd won hij zijn eerste Wereldbeker?"
        },
        options: [
          { en: "15 years old", es: "15 años", de: "15 Jahre alt", nl: "15 jaar oud" },
          { en: "17 years old", es: "17 años", de: "17 Jahre alt", nl: "17 jaar oud" },
          { en: "21 years old", es: "21 años", de: "21 Jahre alt", nl: "21 jaar oud" },
          { en: "25 years old", es: "25 años", de: "25 Jahre alt", nl: "25 jaar oud" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Pelé won his first World Cup in 1958 at just 17, becoming the youngest World Cup winner ever—a record that still stands. In the final against Sweden, he scored twice, including one of the most spectacular goals in history. Born Edson Arantes do Nascimento in poverty, he became football's first global superstar. Pelé won three World Cups (1958, 1962, 1970)—the only player to achieve this. He scored 1,283 goals in 1,363 games during his career. His athleticism, creativity, and grace revolutionized football. Beyond sports, Pelé became Brazil's goodwill ambassador and global icon. FIFA named him 'Player of the Century' alongside Maradona. He elevated football from sport to art form and proved that genius transcends circumstances of birth.",
          es: "Pelé ganó su primera Copa del Mundo en 1958 con solo 17 años, convirtiéndose en el ganador más joven de la Copa del Mundo, un récord que aún se mantiene. En la final contra Suecia, anotó dos veces, incluido uno de los goles más espectaculares de la historia. Nacido Edson Arantes do Nascimento en la pobreza, se convirtió en la primera superestrella global del fútbol. Pelé ganó tres Copas del Mundo (1958, 1962, 1970), el único jugador en lograrlo. Anotó 1,283 goles en 1,363 juegos durante su carrera. Su atletismo, creatividad y gracia revolucionaron el fútbol. Más allá del deporte, Pelé se convirtió en embajador de buena voluntad de Brasil e ícono global. La FIFA lo nombró 'Jugador del Siglo' junto a Maradona. Elevó el fútbol de deporte a forma de arte y demostró que el genio trasciende las circunstancias del nacimiento.",
          de: "Pelé gewann seine erste Weltmeisterschaft 1958 mit nur 17 Jahren und wurde der jüngste Weltmeister aller Zeiten—ein Rekord, der noch immer besteht. Im Finale gegen Schweden erzielte er zweimal, darunter eines der spektakulärsten Tore der Geschichte. Geboren als Edson Arantes do Nascimento in Armut, wurde er Fußballs erster globaler Superstar. Pelé gewann drei Weltmeisterschaften (1958, 1962, 1970)—der einzige Spieler, der dies erreichte. Er erzielte 1.283 Tore in 1.363 Spielen während seiner Karriere. Seine Athletik, Kreativität und Anmut revolutionierten den Fußball. Über den Sport hinaus wurde Pelé Brasiliens Botschafter des guten Willens und globales Icon. Die FIFA ernannte ihn neben Maradona zum 'Spieler des Jahrhunderts'. Er erhob Fußball von Sport zur Kunstform und bewies, dass Genie die Umstände der Geburt transzendiert.",
          nl: "Pelé won zijn eerste Wereldbeker in 1958 op slechts 17 jaar, en werd de jongste Wereldbekerwinnaar ooit—een record dat nog steeds staat. In de finale tegen Zweden scoorde hij twee keer, waaronder een van de meest spectaculaire doelpunten in de geschiedenis. Geboren als Edson Arantes do Nascimento in armoede, werd hij voetbals eerste wereldwijde superster. Pelé won drie Wereldbekers (1958, 1962, 1970)—de enige speler die dit bereikte. Hij scoorde 1.283 doelpunten in 1.363 wedstrijden tijdens zijn carrière. Zijn atletiek, creativiteit en gratie revolutioneerden voetbal. Verder dan sport werd Pelé Brazilië's ambassadeur van goede wil en wereldwijd icoon. FIFA noemde hem 'Speler van de Eeuw' samen met Maradona. Hij verhief voetbal van sport tot kunstvorm en bewees dat genialiteit de omstandigheden van geboorte overstijgt."
        }
      },
      {
        question: {
          en: "What demand did Hungarian protesters make at the start of the 1956 Revolution?",
          es: "¿Qué demanda hicieron los manifestantes húngaros al inicio de la Revolución de 1956?",
          de: "Welche Forderung stellten ungarische Demonstranten zu Beginn der Revolution von 1956?",
          nl: "Welke eis stelden Hongaarse demonstranten bij het begin van de Revolutie van 1956?"
        },
        options: [
          { en: "Join the European Union", es: "Unirse a la Unión Europea", de: "Der Europäischen Union beitreten", nl: "Lid worden van de Europese Unie" },
          { en: "Withdrawal of Soviet troops", es: "Retirada de las tropas soviéticas", de: "Abzug sowjetischer Truppen", nl: "Terugtrekking van Sovjet-troepen" },
          { en: "Lower taxes", es: "Reducir impuestos", de: "Niedrigere Steuern", nl: "Lagere belastingen" },
          { en: "Build more factories", es: "Construir más fábricas", de: "Mehr Fabriken bauen", nl: "Meer fabrieken bouwen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Hungarian protesters demanded the withdrawal of Soviet troops and the formation of a democratic, multi-party government. Students drafted 16 demands including free elections, press freedom, economic reforms, and Nagy's return as Prime Minister. Protesters toppled a massive Stalin statue in Budapest—symbolic rejection of Soviet domination. The movement spread rapidly as workers joined students. For a brief 'Hungarian Spring,' it seemed revolution might succeed. Nagy formed a coalition government and announced Warsaw Pact withdrawal. But Khrushchev couldn't allow Eastern Bloc fragmentation. Soviet forces invaded with 1,000 tanks. The brave resistance inspired global sympathy but received no Western military aid. The revolution's legacy lived on, inspiring future movements in Czechoslovakia (1968) and Poland (1980s) that eventually succeeded.",
          es: "Los manifestantes húngaros exigieron la retirada de las tropas soviéticas y la formación de un gobierno democrático multipartidista. Los estudiantes redactaron 16 demandas que incluían elecciones libres, libertad de prensa, reformas económicas y el regreso de Nagy como Primer Ministro. Los manifestantes derribaron una enorme estatua de Stalin en Budapest, rechazo simbólico de la dominación soviética. El movimiento se extendió rápidamente cuando los trabajadores se unieron a los estudiantes. Durante una breve 'Primavera húngara', pareció que la revolución podría tener éxito. Nagy formó un gobierno de coalición y anunció la retirada del Pacto de Varsovia. Pero Jrushchov no podía permitir la fragmentación del Bloque del Este. Las fuerzas soviéticas invadieron con 1,000 tanques. La valiente resistencia inspiró simpatía global pero no recibió ayuda militar occidental. El legado de la revolución perduró, inspirando movimientos futuros en Checoslovaquia (1968) y Polonia (década de 1980) que finalmente tuvieron éxito.",
          de: "Ungarische Demonstranten forderten den Abzug sowjetischer Truppen und die Bildung einer demokratischen Mehrparteienregierung. Studenten entwarfen 16 Forderungen, darunter freie Wahlen, Pressefreiheit, Wirtschaftsreformen und Nagys Rückkehr als Premierminister. Demonstranten stürzten eine massive Stalin-Statue in Budapest—symbolische Ablehnung sowjetischer Herrschaft. Die Bewegung breitete sich schnell aus, als Arbeiter sich den Studenten anschlossen. Für einen kurzen 'Ungarischen Frühling' schien die Revolution Erfolg haben zu können. Nagy bildete eine Koalitionsregierung und kündigte den Austritt aus dem Warschauer Pakt an. Aber Chruschtschow konnte keine Fragmentierung des Ostblocks zulassen. Sowjetische Streitkräfte marschierten mit 1.000 Panzern ein. Der mutige Widerstand inspirierte globale Sympathie, erhielt aber keine westliche Militärhilfe. Das Erbe der Revolution lebte weiter und inspirierte zukünftige Bewegungen in der Tschechoslowakei (1968) und Polen (1980er), die schließlich Erfolg hatten.",
          nl: "Hongaarse demonstranten eisten de terugtrekking van Sovjet-troepen en de vorming van een democratische meerpartijen regering. Studenten stelden 16 eisen op, waaronder vrije verkiezingen, persvrijheid, economische hervormingen en Nagy's terugkeer als premier. Demonstranten haalden een enorm Stalinbeeld neer in Boedapest—symbolische afwijzing van Sovjetheerschappij. De beweging verspreidde zich snel toen arbeiders zich bij studenten voegden. Voor een korte 'Hongaarse Lente' leek het alsof de revolutie zou kunnen slagen. Nagy vormde een coalitieregering en kondigde terugtrekking uit het Warschaupact aan. Maar Chroesjtsjov kon geen fragmentatie van het Oostblok toestaan. Sovjet-strijdkrachten vielen binnen met 1.000 tanks. Het moedige verzet inspireerde wereldwijde sympathie maar kreeg geen Westerse militaire hulp. De erfenis van de revolutie leefde voort en inspireerde toekomstige bewegingen in Tsjechoslowakije (1968) en Polen (jaren 1980) die uiteindelijk slaagden."
        }
      },
      {
        question: {
          en: "What innovative feature made the iPod's user interface revolutionary?",
          es: "¿Qué característica innovadora hizo revolucionaria la interfaz de usuario del iPod?",
          de: "Welches innovative Merkmal machte die Benutzeroberfläche des iPod revolutionär?",
          nl: "Welke innovatieve functie maakte de gebruikersinterface van de iPod revolutionair?"
        },
        options: [
          { en: "Touchscreen display", es: "Pantalla táctil", de: "Touchscreen-Display", nl: "Touchscreen scherm" },
          { en: "Voice commands", es: "Comandos de voz", de: "Sprachbefehle", nl: "Spraakopdrachten" },
          { en: "Click wheel", es: "Rueda de clic", de: "Click Wheel", nl: "Click wheel" },
          { en: "Keyboard input", es: "Entrada de teclado", de: "Tastatureingabe", nl: "Toetsenbordinvoer" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The iPod's click wheel combined a circular touch-sensitive surface with a central button, allowing intuitive navigation through thousands of songs with simple circular motions and clicks. This elegant interface solved the problem plaguing other MP3 players: complicated menu systems requiring multiple buttons. The wheel made scrolling through long lists effortless—a critical advantage when you have 1,000 songs. Later iPod models refined the design, integrating touch sensitivity directly into the wheel. This interface innovation reflected Apple's design philosophy: technology should be invisible, letting users focus on content. The click wheel became iconic, appearing on multiple iPod generations until the touchscreen iPhone era. It exemplified how thoughtful interface design can make technology accessible and delightful.",
          es: "La rueda de clic del iPod combinó una superficie circular sensible al tacto con un botón central, permitiendo navegación intuitiva a través de miles de canciones con simples movimientos circulares y clics. Esta interfaz elegante resolvió el problema que afectaba a otros reproductores MP3: sistemas de menú complicados que requerían múltiples botones. La rueda hizo el desplazamiento por listas largas sin esfuerzo, una ventaja crítica cuando tienes 1,000 canciones. Los modelos posteriores de iPod refinaron el diseño, integrando la sensibilidad táctil directamente en la rueda. Esta innovación de interfaz reflejó la filosofía de diseño de Apple: la tecnología debe ser invisible, dejando que los usuarios se concentren en el contenido. La rueda de clic se volvió icónica, apareciendo en múltiples generaciones de iPod hasta la era del iPhone con pantalla táctil. Ejemplificó cómo el diseño de interfaz reflexivo puede hacer que la tecnología sea accesible y placentera.",
          de: "Das Click Wheel des iPod kombinierte eine kreisförmige berührungsempfindliche Oberfläche mit einem zentralen Knopf und ermöglichte intuitive Navigation durch Tausende von Songs mit einfachen Kreisbewegungen und Klicks. Diese elegante Schnittstelle löste das Problem, das andere MP3-Player plagte: komplizierte Menüsysteme, die mehrere Tasten erforderten. Das Rad machte das Scrollen durch lange Listen mühelos—ein entscheidender Vorteil, wenn man 1.000 Songs hat. Spätere iPod-Modelle verfeinerten das Design und integrierten die Berührungsempfindlichkeit direkt in das Rad. Diese Schnittstelleninnovation spiegelte Apples Designphilosophie wider: Technologie sollte unsichtbar sein und Benutzer sich auf Inhalte konzentrieren lassen. Das Click Wheel wurde ikonisch und erschien auf mehreren iPod-Generationen bis zur Touchscreen-iPhone-Ära. Es zeigte beispielhaft, wie durchdachtes Schnittstellendesign Technologie zugänglich und erfreulich machen kann.",
          nl: "De click wheel van de iPod combineerde een cirkelvormig aanraakgevoelig oppervlak met een centrale knop, waardoor intuïtieve navigatie door duizenden liedjes mogelijk werd met eenvoudige cirkelvormige bewegingen en klikken. Deze elegante interface loste het probleem op dat andere MP3-spelers plaagde: gecompliceerde menusystemen die meerdere knoppen vereisten. Het wiel maakte scrollen door lange lijsten moeiteloos—een cruciaal voordeel wanneer je 1.000 liedjes hebt. Latere iPod-modellen verfijnden het ontwerp en integreerden aanraakgevoeligheid direct in het wiel. Deze interface-innovatie weerspiegelde Apples ontwerpfilosofie: technologie moet onzichtbaar zijn, zodat gebruikers zich op inhoud kunnen concentreren. De click wheel werd iconisch en verscheen op meerdere iPod-generaties tot het touchscreen iPhone-tijdperk. Het belichaamde hoe doordacht interface-ontwerp technologie toegankelijk en plezierig kan maken."
        }
      }
    ],

    // Day 24 - October 24th: UN Charter takes effect (1945), Stock market crash begins (1929), Zambia independence (1964)
    day24: [
      {
        question: {
          en: "The United Nations Charter officially took effect on October 24, 1945. How many original member states signed it?",
          es: "La Carta de las Naciones Unidas entró oficialmente en vigor el 24 de octubre de 1945. ¿Cuántos estados miembros originales la firmaron?",
          de: "Die Charta der Vereinten Nationen trat am 24. Oktober 1945 offiziell in Kraft. Wie viele ursprüngliche Mitgliedstaaten unterzeichneten sie?",
          nl: "Het Handvest van de Verenigde Naties trad officieel in werking op 24 oktober 1945. Hoeveel oorspronkelijke lidstaten ondertekenden het?"
        },
        options: [
          { en: "100 nations", es: "100 naciones", de: "100 Nationen", nl: "100 naties" },
          { en: "75 nations", es: "75 naciones", de: "75 Nationen", nl: "75 naties" },
          { en: "26 nations", es: "26 naciones", de: "26 Nationen", nl: "26 naties" },
          { en: "51 nations", es: "51 naciones", de: "51 Nationen", nl: "51 naties" }
        ],
        correctIndex: 3,
        explanation: {
          en: "51 nations signed the original UN Charter in San Francisco on June 26, 1945, and it came into force on October 24, 1945, after being ratified by the five permanent Security Council members and a majority of other signatories. October 24 is now celebrated annually as United Nations Day. The UN was established to prevent another world war and promote international cooperation. Its founding followed the devastation of World War II, which killed over 70 million people. The organization has grown to 193 member states today.",
          es: "51 naciones firmaron la Carta original de la ONU en San Francisco el 26 de junio de 1945, y entró en vigor el 24 de octubre de 1945, después de ser ratificada por los cinco miembros permanentes del Consejo de Seguridad y una mayoría de otros signatarios. El 24 de octubre ahora se celebra anualmente como el Día de las Naciones Unidas. La ONU fue establecida para prevenir otra guerra mundial y promover la cooperación internacional. Su fundación siguió a la devastación de la Segunda Guerra Mundial, que mató a más de 70 millones de personas. La organización ha crecido a 193 estados miembros hoy.",
          de: "51 Nationen unterzeichneten die ursprüngliche UN-Charta am 26. Juni 1945 in San Francisco, und sie trat am 24. Oktober 1945 in Kraft, nachdem sie von den fünf ständigen Mitgliedern des Sicherheitsrats und einer Mehrheit anderer Unterzeichner ratifiziert wurde. Der 24. Oktober wird heute jährlich als Tag der Vereinten Nationen gefeiert. Die UN wurde gegründet, um einen weiteren Weltkrieg zu verhindern und die internationale Zusammenarbeit zu fördern. Ihre Gründung folgte der Verwüstung des Zweiten Weltkriegs, der über 70 Millionen Menschen tötete. Die Organisation ist heute auf 193 Mitgliedstaaten angewachsen.",
          nl: "51 naties ondertekenden het oorspronkelijke VN-Handvest in San Francisco op 26 juni 1945, en het trad in werking op 24 oktober 1945, nadat het was geratificeerd door de vijf permanente leden van de Veiligheidsraad en een meerderheid van andere ondertekenaars. 24 oktober wordt nu jaarlijks gevierd als Dag van de Verenigde Naties. De VN werd opgericht om een nieuwe wereldoorlog te voorkomen en internationale samenwerking te bevorderen. De oprichting volgde op de verwoesting van de Tweede Wereldoorlog, waarbij meer dan 70 miljoen mensen omkwamen. De organisatie is vandaag gegroeid naar 193 lidstaten."
        }
      },
      {
        question: {
          en: "On October 24, 1929, 'Black Thursday' marked the beginning of the stock market crash. What percentage did the Dow Jones drop in the following week?",
          es: "El 24 de octubre de 1929, el 'Jueves Negro' marcó el comienzo del colapso bursátil. ¿Qué porcentaje cayó el Dow Jones en la siguiente semana?",
          de: "Am 24. Oktober 1929 markierte der 'Schwarze Donnerstag' den Beginn des Börsencrashs. Um welchen Prozentsatz fiel der Dow Jones in der folgenden Woche?",
          nl: "Op 24 oktober 1929 markeerde 'Zwarte Donderdag' het begin van de beurscrash. Met welk percentage daalde de Dow Jones in de volgende week?"
        },
        options: [
          { en: "About 25%", es: "Aproximadamente 25%", de: "Etwa 25%", nl: "Ongeveer 25%" },
          { en: "About 50%", es: "Aproximadamente 50%", de: "Etwa 50%", nl: "Ongeveer 50%" },
          { en: "About 10%", es: "Aproximadamente 10%", de: "Etwa 10%", nl: "Ongeveer 10%" },
          { en: "About 75%", es: "Aproximadamente 75%", de: "Etwa 75%", nl: "Ongeveer 75%" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Dow Jones Industrial Average dropped approximately 25% in the days following Black Thursday, with Black Monday (October 28) and Black Tuesday (October 29) seeing catastrophic losses. This crash triggered the Great Depression, the worst economic crisis in modern history. Banks failed, businesses collapsed, and unemployment reached 25% in the United States. The crash exposed fundamental weaknesses in the economy: excessive speculation, margin buying, and lack of regulation. It took 25 years for the stock market to recover to its 1929 levels. The crash led to major financial reforms, including the creation of the Securities and Exchange Commission (SEC) and new banking regulations.",
          es: "El promedio industrial Dow Jones cayó aproximadamente un 25% en los días posteriores al Jueves Negro, con el Lunes Negro (28 de octubre) y el Martes Negro (29 de octubre) viendo pérdidas catastróficas. Este colapso desencadenó la Gran Depresión, la peor crisis económica de la historia moderna. Los bancos quebraron, las empresas colapsaron y el desempleo alcanzó el 25% en Estados Unidos. El colapso expuso debilidades fundamentales en la economía: especulación excesiva, compra con margen y falta de regulación. La bolsa tardó 25 años en recuperarse a sus niveles de 1929. El colapso condujo a importantes reformas financieras, incluida la creación de la Comisión de Bolsa y Valores (SEC) y nuevas regulaciones bancarias.",
          de: "Der Dow Jones Industrial Average fiel in den Tagen nach dem Schwarzen Donnerstag um etwa 25%, wobei der Schwarze Montag (28. Oktober) und der Schwarze Dienstag (29. Oktober) katastrophale Verluste verzeichneten. Dieser Crash löste die Große Depression aus, die schlimmste Wirtschaftskrise der modernen Geschichte. Banken scheiterten, Unternehmen kollabierten und die Arbeitslosigkeit erreichte 25% in den Vereinigten Staaten. Der Crash legte grundlegende Schwächen in der Wirtschaft offen: übermäßige Spekulation, Margenkäufe und Mangel an Regulierung. Es dauerte 25 Jahre, bis sich der Aktienmarkt auf sein Niveau von 1929 erholte. Der Crash führte zu wichtigen Finanzreformen, einschließlich der Schaffung der Securities and Exchange Commission (SEC) und neuer Bankenvorschriften.",
          nl: "De Dow Jones Industrial Average daalde ongeveer 25% in de dagen na Zwarte Donderdag, waarbij Zwarte Maandag (28 oktober) en Zwarte Dinsdag (29 oktober) catastrofale verliezen zagen. Deze crash leidde tot de Grote Depressie, de ergste economische crisis in de moderne geschiedenis. Banken faalden, bedrijven stortten in en de werkloosheid bereikte 25% in de Verenigde Staten. De crash onthulde fundamentele zwakheden in de economie: overmatige speculatie, aankopen op marge en gebrek aan regulering. Het duurde 25 jaar voordat de aandelenmarkt zich herstelde tot zijn niveau van 1929. De crash leidde tot belangrijke financiële hervormingen, waaronder de oprichting van de Securities and Exchange Commission (SEC) en nieuwe bankvoorschriften."
        }
      },
      {
        question: {
          en: "Zambia gained independence from the United Kingdom on October 24, 1964. What was the country previously called?",
          es: "Zambia obtuvo la independencia del Reino Unido el 24 de octubre de 1964. ¿Cómo se llamaba anteriormente el país?",
          de: "Sambia erlangte am 24. Oktober 1964 die Unabhängigkeit vom Vereinigten Königreich. Wie hieß das Land zuvor?",
          nl: "Zambia kreeg op 24 oktober 1964 onafhankelijkheid van het Verenigd Koninkrijk. Hoe heette het land voorheen?"
        },
        options: [
          { en: "East Africa", es: "África Oriental", de: "Ostafrika", nl: "Oost-Afrika" },
          { en: "Southern Rhodesia", es: "Rodesia del Sur", de: "Südrhodesien", nl: "Zuid-Rhodesië" },
          { en: "Northern Rhodesia", es: "Rodesia del Norte", de: "Nordrhodesien", nl: "Noord-Rhodesië" },
          { en: "British Congo", es: "Congo Británico", de: "Britisch-Kongo", nl: "Brits Congo" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Zambia was previously known as Northern Rhodesia, named after Cecil Rhodes, the British imperialist. Kenneth Kaunda became Zambia's first president, leading a peaceful transition to independence. The country was renamed Zambia after the Zambezi River, which forms its southern border and includes the spectacular Victoria Falls. Zambia is rich in copper, which became the foundation of its economy. The country adopted a policy of non-alignment during the Cold War and supported liberation movements in neighboring countries still under colonial rule. Zambia is landlocked, bordered by eight countries, making regional cooperation essential to its development.",
          es: "Zambia era conocida anteriormente como Rodesia del Norte, nombrada en honor a Cecil Rhodes, el imperialista británico. Kenneth Kaunda se convirtió en el primer presidente de Zambia, liderando una transición pacífica hacia la independencia. El país fue renombrado Zambia en honor al río Zambeze, que forma su frontera sur e incluye las espectaculares Cataratas Victoria. Zambia es rica en cobre, que se convirtió en la base de su economía. El país adoptó una política de no alineamiento durante la Guerra Fría y apoyó movimientos de liberación en países vecinos aún bajo dominio colonial. Zambia no tiene salida al mar, limita con ocho países, lo que hace esencial la cooperación regional para su desarrollo.",
          de: "Sambia war zuvor als Nordrhodesien bekannt, benannt nach Cecil Rhodes, dem britischen Imperialisten. Kenneth Kaunda wurde Sambias erster Präsident und leitete einen friedlichen Übergang zur Unabhängigkeit. Das Land wurde nach dem Sambesi-Fluss umbenannt, der seine südliche Grenze bildet und die spektakulären Victoriafälle umfasst. Sambia ist reich an Kupfer, das zur Grundlage seiner Wirtschaft wurde. Das Land verfolgte während des Kalten Krieges eine Politik der Blockfreiheit und unterstützte Befreiungsbewegungen in Nachbarländern, die noch unter Kolonialherrschaft standen. Sambia ist ein Binnenland, grenzt an acht Länder, was regionale Zusammenarbeit für seine Entwicklung unerlässlich macht.",
          nl: "Zambia stond voorheen bekend als Noord-Rhodesië, genoemd naar Cecil Rhodes, de Britse imperialist. Kenneth Kaunda werd Zambia's eerste president en leidde een vreedzame overgang naar onafhankelijkheid. Het land werd omgedoopt tot Zambia naar de Zambezi-rivier, die zijn zuidelijke grens vormt en de spectaculaire Victoriawatervallen omvat. Zambia is rijk aan koper, dat de basis van zijn economie werd. Het land nam tijdens de Koude Oorlog een beleid van non-alignement aan en steunde bevrijdingsbewegingen in buurlanden die nog onder koloniale heerschappij stonden. Zambia is een landinwaarts land, grenst aan acht landen, waardoor regionale samenwerking essentieel is voor zijn ontwikkeling."
        }
      },
      {
        question: {
          en: "Which organization's charter came into effect on October 24, 1945?",
          es: "¿La carta de qué organización entró en vigor el 24 de octubre de 1945?",
          de: "Welche Organisations-Charta trat am 24. Oktober 1945 in Kraft?",
          nl: "Welk handvest van welke organisatie trad in werking op 24 oktober 1945?"
        },
        options: [
          { en: "United Nations", es: "Naciones Unidas", de: "Vereinte Nationen", nl: "Verenigde Naties" },
          { en: "World Bank", es: "Banco Mundial", de: "Weltbank", nl: "Wereldbank" },
          { en: "NATO", es: "OTAN", de: "NATO", nl: "NAVO" },
          { en: "European Union", es: "Unión Europea", de: "Europäische Union", nl: "Europese Unie" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The United Nations Charter came into effect on October 24, 1945, establishing the UN as the world's preeminent international organization. The Charter was drafted during the San Francisco Conference in 1945, with 50 nations participating. The UN's stated purposes include maintaining international peace and security, developing friendly relations among nations, achieving international cooperation, and being a center for harmonizing nations' actions. The organization has six main organs: the General Assembly, Security Council, Economic and Social Council, Trusteeship Council, International Court of Justice, and Secretariat. The UN has played crucial roles in peacekeeping, humanitarian aid, and international law development.",
          es: "La Carta de las Naciones Unidas entró en vigor el 24 de octubre de 1945, estableciendo a la ONU como la organización internacional preeminente del mundo. La Carta fue redactada durante la Conferencia de San Francisco en 1945, con la participación de 50 naciones. Los propósitos declarados de la ONU incluyen mantener la paz y seguridad internacionales, desarrollar relaciones amistosas entre naciones, lograr cooperación internacional y ser un centro para armonizar las acciones de las naciones. La organización tiene seis órganos principales: la Asamblea General, el Consejo de Seguridad, el Consejo Económico y Social, el Consejo de Administración Fiduciaria, la Corte Internacional de Justicia y la Secretaría. La ONU ha desempeñado papeles cruciales en el mantenimiento de la paz, la ayuda humanitaria y el desarrollo del derecho internacional.",
          de: "Die Charta der Vereinten Nationen trat am 24. Oktober 1945 in Kraft und etablierte die UN als weltweit führende internationale Organisation. Die Charta wurde während der Konferenz von San Francisco 1945 entworfen, an der 50 Nationen teilnahmen. Die erklärten Ziele der UN umfassen die Wahrung des Weltfriedens und der internationalen Sicherheit, die Entwicklung freundschaftlicher Beziehungen zwischen Nationen, die Erreichung internationaler Zusammenarbeit und ein Zentrum zur Harmonisierung der Handlungen der Nationen zu sein. Die Organisation hat sechs Hauptorgane: die Generalversammlung, den Sicherheitsrat, den Wirtschafts- und Sozialrat, den Treuhandrat, den Internationalen Gerichtshof und das Sekretariat. Die UN hat entscheidende Rollen bei Friedenssicherung, humanitärer Hilfe und der Entwicklung des Völkerrechts gespielt.",
          nl: "Het Handvest van de Verenigde Naties trad in werking op 24 oktober 1945 en vestigde de VN als 's werelds vooraanstaande internationale organisatie. Het Handvest werd opgesteld tijdens de San Francisco-conferentie in 1945, waarbij 50 naties deelnamen. De verklaarde doelen van de VN omvatten het handhaven van internationale vrede en veiligheid, het ontwikkelen van vriendschappelijke betrekkingen tussen naties, het bereiken van internationale samenwerking en het zijn van een centrum voor het harmoniseren van de acties van naties. De organisatie heeft zes hoofdorganen: de Algemene Vergadering, de Veiligheidsraad, de Economische en Sociale Raad, de Trustschapsraad, het Internationaal Gerechtshof en het Secretariaat. De VN heeft cruciale rollen gespeeld in vredeshandhaving, humanitaire hulp en de ontwikkeling van internationaal recht."
        }
      },
      {
        question: {
          en: "What major global economic event began on October 24, 1929?",
          es: "¿Qué importante evento económico global comenzó el 24 de octubre de 1929?",
          de: "Welches wichtige globale Wirtschaftsereignis begann am 24. Oktober 1929?",
          nl: "Welke belangrijke mondiale economische gebeurtenis begon op 24 oktober 1929?"
        },
        options: [
          { en: "Oil boom", es: "Auge petrolero", de: "Ölboom", nl: "Olieboom" },
          { en: "Stock market crash", es: "Colapso bursátil", de: "Börsencrash", nl: "Beurscrash" },
          { en: "Industrial revolution", es: "Revolución industrial", de: "Industrielle Revolution", nl: "Industriële revolutie" },
          { en: "Gold rush", es: "Fiebre del oro", de: "Goldrausch", nl: "Goudkoorts" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Wall Street Crash began on October 24, 1929, known as Black Thursday, when panic selling caused stock prices to plummet. Nearly 13 million shares were traded, far exceeding normal volume. Investors had been buying stocks on margin (with borrowed money), and when prices fell, margin calls forced massive selling. The crash wiped out billions in wealth overnight. It exposed an economy built on speculation rather than fundamentals. Over the next few years, thousands of banks failed, wiping out depositors' savings. Industrial production fell by 50%, and international trade collapsed by two-thirds. The crash demonstrated the dangers of unregulated financial markets and led to reforms still in place today.",
          es: "El colapso de Wall Street comenzó el 24 de octubre de 1929, conocido como Jueves Negro, cuando las ventas de pánico hicieron que los precios de las acciones se desplomaran. Se negociaron casi 13 millones de acciones, muy por encima del volumen normal. Los inversores habían estado comprando acciones con margen (con dinero prestado), y cuando los precios cayeron, las llamadas de margen forzaron ventas masivas. El colapso eliminó miles de millones en riqueza de la noche a la mañana. Expuso una economía construida sobre especulación en lugar de fundamentos. En los años siguientes, miles de bancos quebraron, eliminando los ahorros de los depositantes. La producción industrial cayó un 50%, y el comercio internacional colapsó en dos tercios. El colapso demostró los peligros de los mercados financieros no regulados y condujo a reformas que aún están vigentes hoy.",
          de: "Der Wall Street Crash begann am 24. Oktober 1929, bekannt als Schwarzer Donnerstag, als Panikverkäufe die Aktienkurse zum Absturz brachten. Fast 13 Millionen Aktien wurden gehandelt, weit über dem normalen Volumen. Investoren hatten Aktien auf Marge gekauft (mit geliehenem Geld), und als die Preise fielen, zwangen Nachschussforderungen zu massiven Verkäufen. Der Crash vernichtete über Nacht Milliarden an Vermögen. Er entlarvte eine Wirtschaft, die auf Spekulation statt auf Fundamentaldaten aufgebaut war. In den folgenden Jahren scheiterten Tausende von Banken und vernichteten die Ersparnisse der Einleger. Die Industrieproduktion fiel um 50%, und der internationale Handel brach um zwei Drittel ein. Der Crash zeigte die Gefahren unregulierter Finanzmärkte und führte zu Reformen, die heute noch gelten.",
          nl: "De Wall Street Crash begon op 24 oktober 1929, bekend als Zwarte Donderdag, toen paniekverkopen de aandelenkoersen lieten instorten. Bijna 13 miljoen aandelen werden verhandeld, ver boven het normale volume. Beleggers hadden aandelen gekocht op marge (met geleend geld), en toen de prijzen daalden, dwongen margin calls tot massale verkoop. De crash vernietigde 's nachts miljarden aan rijkdom. Het onthulde een economie gebouwd op speculatie in plaats van fundamenten. In de volgende jaren faalden duizenden banken, waardoor de spaargelden van spaarders werden vernietigd. De industriële productie daalde met 50%, en de internationale handel stortte in met tweederde. De crash toonde de gevaren van ongereguleerde financiële markten en leidde tot hervormingen die vandaag nog steeds van kracht zijn."
        }
      }
    ],

    // Day 25 - October 25th: Battle of Agincourt (1415), Pablo Picasso born (1881), Charge of the Light Brigade (1854)
    day25: [
      {
        question: {
          en: "The Battle of Agincourt took place on October 25, 1415. Which English king led his outnumbered forces to victory?",
          es: "La Batalla de Agincourt tuvo lugar el 25 de octubre de 1415. ¿Qué rey inglés lideró sus fuerzas superadas en número hacia la victoria?",
          de: "Die Schlacht von Azincourt fand am 25. Oktober 1415 statt. Welcher englische König führte seine zahlenmäßig unterlegenen Streitkräfte zum Sieg?",
          nl: "De Slag bij Azincourt vond plaats op 25 oktober 1415. Welke Engelse koning leidde zijn in de minderheid zijnde troepen naar de overwinning?"
        },
        options: [
          { en: "Richard III", es: "Ricardo III", de: "Richard III.", nl: "Richard III" },
          { en: "Henry VIII", es: "Enrique VIII", de: "Heinrich VIII.", nl: "Hendrik VIII" },
          { en: "Edward III", es: "Eduardo III", de: "Eduard III.", nl: "Edward III" },
          { en: "Henry V", es: "Enrique V", de: "Heinrich V.", nl: "Hendrik V" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Henry V led approximately 6,000 English troops to a stunning victory against a French army of 20,000-30,000 at Agincourt during the Hundred Years' War. English longbowmen devastated the French knights in muddy conditions. The French cavalry charges bogged down in the mud, making them easy targets. English archers could fire 10-12 arrows per minute with deadly accuracy at 200 yards. French casualties exceeded 10,000, including many nobles, while English losses were under 500. This victory made Henry V a legendary warrior-king and was immortalized in Shakespeare's 'Henry V' with the famous 'St. Crispin's Day' speech. The battle demonstrated that disciplined infantry with superior tactics could defeat heavily armored cavalry.",
          es: "Enrique V lideró aproximadamente 6,000 tropas inglesas hacia una victoria impresionante contra un ejército francés de 20,000-30,000 en Agincourt durante la Guerra de los Cien Años. Los arqueros de arco largo ingleses devastaron a los caballeros franceses en condiciones lodosas. Las cargas de caballería francesa se atascaron en el barro, convirtiéndolos en blancos fáciles. Los arqueros ingleses podían disparar 10-12 flechas por minuto con precisión mortal a 200 yardas. Las bajas francesas superaron las 10,000, incluidos muchos nobles, mientras que las pérdidas inglesas fueron menos de 500. Esta victoria convirtió a Enrique V en un legendario rey guerrero y fue inmortalizada en 'Enrique V' de Shakespeare con el famoso discurso del 'Día de San Crispín'. La batalla demostró que la infantería disciplinada con tácticas superiores podía derrotar a la caballería fuertemente acorazada.",
          de: "Heinrich V. führte etwa 6.000 englische Truppen zu einem atemberaubenden Sieg gegen eine französische Armee von 20.000-30.000 bei Azincourt während des Hundertjährigen Krieges. Englische Langbogenschützen verwüsteten die französischen Ritter unter schlammigen Bedingungen. Die französischen Kavallerieladungen versanken im Schlamm und wurden zu leichten Zielen. Englische Bogenschützen konnten 10-12 Pfeile pro Minute mit tödlicher Genauigkeit auf 200 Yards schießen. Die französischen Verluste überstiegen 10.000, darunter viele Adlige, während die englischen Verluste unter 500 lagen. Dieser Sieg machte Heinrich V. zu einem legendären Krieger-König und wurde in Shakespeares 'Heinrich V.' mit der berühmten 'St. Crispin's Day'-Rede verewigt. Die Schlacht zeigte, dass disziplinierte Infanterie mit überlegenen Taktiken schwer gepanzerte Kavallerie besiegen konnte.",
          nl: "Hendrik V leidde ongeveer 6.000 Engelse troepen naar een verbluffende overwinning tegen een Frans leger van 20.000-30.000 bij Azincourt tijdens de Honderdjarige Oorlog. Engelse langboogschutters verwoestten de Franse ridders in modderige omstandigheden. De Franse cavalerie-aanvallen raakten vast in de modder, waardoor ze gemakkelijke doelwitten werden. Engelse boogschutters konden 10-12 pijlen per minuut afvuren met dodelijke precisie op 200 yards. Franse verliezen overtroffen de 10.000, waaronder veel edelen, terwijl Engelse verliezen onder de 500 bleven. Deze overwinning maakte Hendrik V een legendarische krijgerkoning en werd vereeuwigd in Shakespeares 'Henry V' met de beroemde 'St. Crispin's Day'-toespraak. De slag toonde aan dat gedisciplineerde infanterie met superieure tactieken zwaar gepantserde cavalerie kon verslaan."
        }
      },
      {
        question: {
          en: "Pablo Picasso was born on October 25, 1881. Which revolutionary art movement did he co-found?",
          es: "Pablo Picasso nació el 25 de octubre de 1881. ¿Qué revolucionario movimiento artístico cofundó?",
          de: "Pablo Picasso wurde am 25. Oktober 1881 geboren. Welche revolutionäre Kunstbewegung gründete er mit?",
          nl: "Pablo Picasso werd geboren op 25 oktober 1881. Welke revolutionaire kunstbeweging heeft hij mee opgericht?"
        },
        options: [
          { en: "Impressionism", es: "Impresionismo", de: "Impressionismus", nl: "Impressionisme" },
          { en: "Cubism", es: "Cubismo", de: "Kubismus", nl: "Kubisme" },
          { en: "Surrealism", es: "Surrealismo", de: "Surrealismus", nl: "Surrealisme" },
          { en: "Expressionism", es: "Expresionismo", de: "Expressionismus", nl: "Expressionisme" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Picasso co-founded Cubism with Georges Braque around 1907-1908, revolutionizing modern art by depicting subjects from multiple viewpoints simultaneously. His groundbreaking painting 'Les Demoiselles d'Avignon' (1907) is considered proto-Cubist. Cubism shattered traditional perspective that had dominated Western art since the Renaissance. Picasso's career spanned 80 years and included the Blue Period, Rose Period, Cubism, and later periods. His anti-war masterpiece 'Guernica' (1937) depicted the horrors of the Spanish Civil War. Picasso created over 50,000 artworks including paintings, sculptures, ceramics, and prints. He's regarded as the most influential artist of the 20th century, fundamentally changing how we see and represent reality.",
          es: "Picasso cofundó el Cubismo con Georges Braque alrededor de 1907-1908, revolucionando el arte moderno al representar sujetos desde múltiples puntos de vista simultáneamente. Su pintura innovadora 'Las señoritas de Avignon' (1907) se considera protocubista. El Cubismo destrozó la perspectiva tradicional que había dominado el arte occidental desde el Renacimiento. La carrera de Picasso abarcó 80 años e incluyó el Período Azul, Período Rosa, Cubismo y períodos posteriores. Su obra maestra antibélica 'Guernica' (1937) representó los horrores de la Guerra Civil Española. Picasso creó más de 50,000 obras de arte, incluidas pinturas, esculturas, cerámicas y grabados. Es considerado el artista más influyente del siglo XX, cambiando fundamentalmente cómo vemos y representamos la realidad.",
          de: "Picasso gründete den Kubismus um 1907-1908 mit Georges Braque und revolutionierte die moderne Kunst, indem er Subjekte aus mehreren Blickwinkeln gleichzeitig darstellte. Sein bahnbrechendes Gemälde 'Les Demoiselles d'Avignon' (1907) gilt als proto-kubistisch. Der Kubismus zerschmetterte die traditionelle Perspektive, die die westliche Kunst seit der Renaissance dominiert hatte. Picassos Karriere erstreckte sich über 80 Jahre und umfasste die Blaue Periode, Rosa Periode, Kubismus und spätere Perioden. Sein Anti-Kriegs-Meisterwerk 'Guernica' (1937) zeigte die Schrecken des Spanischen Bürgerkriegs. Picasso schuf über 50.000 Kunstwerke, darunter Gemälde, Skulpturen, Keramiken und Drucke. Er gilt als der einflussreichste Künstler des 20. Jahrhunderts, der grundlegend veränderte, wie wir die Realität sehen und darstellen.",
          nl: "Picasso richtte het Kubisme op samen met Georges Braque rond 1907-1908, en revolutioneerde moderne kunst door onderwerpen vanuit meerdere gezichtspunten tegelijkertijd weer te geven. Zijn baanbrekende schilderij 'Les Demoiselles d'Avignon' (1907) wordt beschouwd als proto-kubistisch. Het Kubisme verbrijzelde het traditionele perspectief dat de Westerse kunst sinds de Renaissance had gedomineerd. Picasso's carrière besloeg 80 jaar en omvatte de Blauwe Periode, Roze Periode, Kubisme en latere periodes. Zijn anti-oorlog meesterwerk 'Guernica' (1937) beeldde de verschrikkingen van de Spaanse Burgeroorlog uit. Picasso creëerde meer dan 50.000 kunstwerken, waaronder schilderijen, sculpturen, keramiek en prenten. Hij wordt beschouwd als de meest invloedrijke kunstenaar van de 20e eeuw, die fundamenteel veranderde hoe we de werkelijkheid zien en representeren."
        }
      },
      {
        question: {
          en: "The Charge of the Light Brigade occurred on October 25, 1854, during which war?",
          es: "La Carga de la Brigada Ligera ocurrió el 25 de octubre de 1854, ¿durante qué guerra?",
          de: "Die Attacke der Leichten Brigade fand am 25. Oktober 1854 statt, während welches Krieges?",
          nl: "De Charge of the Light Brigade vond plaats op 25 oktober 1854, tijdens welke oorlog?"
        },
        options: [
          { en: "American Civil War", es: "Guerra Civil Americana", de: "Amerikanischer Bürgerkrieg", nl: "Amerikaanse Burgeroorlog" },
          { en: "Napoleonic Wars", es: "Guerras Napoleónicas", de: "Napoleonische Kriege", nl: "Napoleontische Oorlogen" },
          { en: "Crimean War", es: "Guerra de Crimea", de: "Krimkrieg", nl: "Krimoorlog" },
          { en: "World War I", es: "Primera Guerra Mundial", de: "Erster Weltkrieg", nl: "Eerste Wereldoorlog" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Charge of the Light Brigade occurred during the Battle of Balaclava in the Crimean War, when British light cavalry charged directly into Russian artillery due to miscommunicated orders. Of 670 cavalrymen, 110 were killed and 160 wounded in about 20 minutes—a catastrophic loss rate of over 40%. Lord Cardigan led the charge down a valley flanked by Russian guns on three sides, described as charging 'into the valley of Death.' The disaster resulted from confusion between Lord Raglan's vague orders and Lord Lucan's interpretation. Despite the military blunder, the courage of the cavalrymen became legendary, immortalized in Tennyson's poem 'The Charge of the Light Brigade.' It became a symbol of both British bravery and the incompetence of aristocratic military leadership.",
          es: "La Carga de la Brigada Ligera ocurrió durante la Batalla de Balaclava en la Guerra de Crimea, cuando la caballería ligera británica cargó directamente contra la artillería rusa debido a órdenes mal comunicadas. De 670 jinetes, 110 fueron asesinados y 160 heridos en aproximadamente 20 minutos, una tasa de pérdida catastrófica de más del 40%. Lord Cardigan lideró la carga por un valle flanqueado por cañones rusos en tres lados, descrito como cargar 'hacia el valle de la Muerte'. El desastre resultó de la confusión entre las órdenes vagas de Lord Raglan y la interpretación de Lord Lucan. A pesar del error militar, el coraje de los jinetes se volvió legendario, inmortalizado en el poema de Tennyson 'La Carga de la Brigada Ligera'. Se convirtió en un símbolo tanto del valor británico como de la incompetencia del liderazgo militar aristocrático.",
          de: "Die Attacke der Leichten Brigade fand während der Schlacht von Balaklawa im Krimkrieg statt, als britische leichte Kavallerie aufgrund missverstandener Befehle direkt in russische Artillerie stürmte. Von 670 Kavalleristen wurden 110 getötet und 160 in etwa 20 Minuten verwundet—eine katastrophale Verlustrate von über 40%. Lord Cardigan führte den Angriff durch ein Tal an, das auf drei Seiten von russischen Geschützen flankiert wurde, beschrieben als Sturm 'in das Tal des Todes'. Die Katastrophe resultierte aus Verwirrung zwischen Lord Raglans vagen Befehlen und Lord Lucans Interpretation. Trotz des militärischen Fehlers wurde der Mut der Kavalleristen legendär, verewigt in Tennysons Gedicht 'Die Attacke der Leichten Brigade'. Es wurde ein Symbol sowohl für britischen Mut als auch für die Inkompetenz aristokratischer Militärführung.",
          nl: "De Charge of the Light Brigade vond plaats tijdens de Slag bij Balaclava in de Krimoorlog, toen Britse lichte cavalerie rechtstreeks op Russische artillerie aanviel vanwege verkeerd gecommuniceerde orders. Van 670 cavaleristen werden 110 gedood en 160 gewond in ongeveer 20 minuten—een catastrofaal verliespercentage van meer dan 40%. Lord Cardigan leidde de aanval door een vallei geflankeerd door Russische kanonnen aan drie kanten, beschreven als aanvallen 'in de vallei van de Dood'. De ramp was het gevolg van verwarring tussen Lord Raglans vage orders en Lord Lucans interpretatie. Ondanks de militaire blunder werd de moed van de cavaleristen legendarisch, vereeuwigd in Tennysons gedicht 'The Charge of the Light Brigade'. Het werd een symbool van zowel Britse moed als de incompetentie van aristocratische militaire leiding."
        }
      },
      {
        question: {
          en: "What weapon gave the English a decisive advantage at the Battle of Agincourt?",
          es: "¿Qué arma le dio a los ingleses una ventaja decisiva en la Batalla de Agincourt?",
          de: "Welche Waffe verschaffte den Engländern bei der Schlacht von Azincourt einen entscheidenden Vorteil?",
          nl: "Welk wapen gaf de Engelsen een beslissend voordeel in de Slag bij Azincourt?"
        },
        options: [
          { en: "Cannon", es: "Cañón", de: "Kanone", nl: "Kanon" },
          { en: "Crossbow", es: "Ballesta", de: "Armbrust", nl: "Kruisboog" },
          { en: "Longbow", es: "Arco largo", de: "Langbogen", nl: "Lange boog" },
          { en: "Pike", es: "Pica", de: "Pike", nl: "Speer" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The English longbow was devastating at Agincourt, with a range of 200-300 yards and penetrating power that could pierce armor at close range. English archers, typically commoners trained from childhood, could fire 10-12 arrows per minute—far faster than French crossbows at 2-3 bolts per minute. The longbow required years of practice and tremendous physical strength, developing asymmetric muscle growth in archers. At Agincourt, English archers planted defensive stakes to stop cavalry charges, then rained arrows on the French. The longbow's psychological impact was as important as its physical damage—the sound of thousands of arrows darkening the sky was terrifying. This battle proved that well-trained common soldiers with superior weapons could defeat mounted nobility.",
          es: "El arco largo inglés fue devastador en Agincourt, con un alcance de 200-300 yardas y poder de penetración que podía atravesar armadura a corta distancia. Los arqueros ingleses, típicamente plebeyos entrenados desde la infancia, podían disparar 10-12 flechas por minuto, mucho más rápido que las ballestas francesas a 2-3 proyectiles por minuto. El arco largo requería años de práctica y tremenda fuerza física, desarrollando crecimiento muscular asimétrico en los arqueros. En Agincourt, los arqueros ingleses plantaron estacas defensivas para detener las cargas de caballería, luego llovieron flechas sobre los franceses. El impacto psicológico del arco largo fue tan importante como su daño físico: el sonido de miles de flechas oscureciendo el cielo era aterrador. Esta batalla demostró que soldados comunes bien entrenados con armas superiores podían derrotar a la nobleza montada.",
          de: "Der englische Langbogen war bei Azincourt verheerend, mit einer Reichweite von 200-300 Yards und Durchschlagskraft, die Rüstungen aus nächster Nähe durchdringen konnte. Englische Bogenschützen, typischerweise Bürgerliche, die von Kindheit an trainiert wurden, konnten 10-12 Pfeile pro Minute abfeuern—viel schneller als französische Armbrüste mit 2-3 Bolzen pro Minute. Der Langbogen erforderte jahrelanges Training und enorme körperliche Kraft und entwickelte asymmetrisches Muskelwachstum bei Bogenschützen. Bei Azincourt pflanzten englische Bogenschützen Verteidigungspfähle, um Kavallerieladungen zu stoppen, dann ließen sie Pfeile auf die Franzosen regnen. Die psychologische Wirkung des Langbogens war ebenso wichtig wie sein physischer Schaden—das Geräusch von Tausenden von Pfeilen, die den Himmel verdunkelten, war erschreckend. Diese Schlacht bewies, dass gut ausgebildete einfache Soldaten mit überlegenen Waffen berittenen Adel besiegen konnten.",
          nl: "De Engelse lange boog was verwoestend bij Azincourt, met een bereik van 200-300 yards en doordringende kracht die pantser op korte afstand kon doorboren. Engelse boogschutters, meestal gewone mensen die vanaf de kindertijd waren getraind, konden 10-12 pijlen per minuut afvuren—veel sneller dan Franse kruisbogen op 2-3 bouten per minuut. De lange boog vereiste jarenlange oefening en enorme fysieke kracht, waardoor asymmetrische spiergroei bij boogschutters ontstond. Bij Azincourt plaatsten Engelse boogschutters verdedigingspalen om cavalerie-aanvallen te stoppen, daarna lieten ze pijlen op de Fransen regenen. De psychologische impact van de lange boog was net zo belangrijk als zijn fysieke schade—het geluid van duizenden pijlen die de lucht verduisterden was angstaanjagend. Deze slag bewees dat goed getrainde gewone soldaten met superieure wapens bereden adel konden verslaan."
        }
      },
      {
        question: {
          en: "What was Pablo Picasso's most famous anti-war painting, created in 1937?",
          es: "¿Cuál fue la pintura antibélica más famosa de Pablo Picasso, creada en 1937?",
          de: "Was war Pablo Picassos berühmtestes Anti-Kriegs-Gemälde, geschaffen 1937?",
          nl: "Wat was Pablo Picasso's beroemdste anti-oorlogsschilderij, gemaakt in 1937?"
        },
        options: [
          { en: "The Starry Night", es: "La noche estrellada", de: "Die Sternennacht", nl: "De Sterrennacht" },
          { en: "The Scream", es: "El grito", de: "Der Schrei", nl: "De Schreeuw" },
          { en: "Guernica", es: "Guernica", de: "Guernica", nl: "Guernica" },
          { en: "The Persistence of Memory", es: "La persistencia de la memoria", de: "Die Beständigkeit der Erinnerung", nl: "De Volharding der Herinnering" }
        ],
        correctIndex: 2,
        explanation: {
          en: "'Guernica' is Picasso's monumental 11×25-foot masterpiece depicting the bombing of the Basque town of Guernica during the Spanish Civil War. Nazi and Italian Fascist planes bombed the civilian town on market day, killing hundreds. Picasso painted it in just over a month for the 1937 Paris World's Fair Spanish Pavilion. The black, white, and gray painting shows the horrors of war: a screaming woman with dead child, a dismembered soldier, a terrified horse, and an agonized bull. The cubist style conveys chaos and suffering. 'Guernica' became the 20th century's most powerful anti-war statement. Picasso said the painting would return to Spain only after democracy was restored—it finally arrived in Madrid in 1981, six years after Franco's death.",
          es: "'Guernica' es la monumental obra maestra de 11×25 pies de Picasso que representa el bombardeo de la ciudad vasca de Guernica durante la Guerra Civil Española. Aviones nazis e fascistas italianos bombardearon la ciudad civil en día de mercado, matando a cientos. Picasso lo pintó en poco más de un mes para el Pabellón Español de la Feria Mundial de París de 1937. La pintura en blanco, negro y gris muestra los horrores de la guerra: una mujer gritando con un niño muerto, un soldado desmembrado, un caballo aterrorizado y un toro agonizante. El estilo cubista transmite caos y sufrimiento. 'Guernica' se convirtió en la declaración antibélica más poderosa del siglo XX. Picasso dijo que la pintura regresaría a España solo después de que se restaurara la democracia: finalmente llegó a Madrid en 1981, seis años después de la muerte de Franco.",
          de: "'Guernica' ist Picassos monumentales 11×25-Fuß-Meisterwerk, das die Bombardierung der baskischen Stadt Guernica während des Spanischen Bürgerkriegs darstellt. Nazi- und italienische faschistische Flugzeuge bombardierten die zivile Stadt am Markttag und töteten Hunderte. Picasso malte es in etwas über einem Monat für den spanischen Pavillon der Pariser Weltausstellung 1937. Das schwarz-weiß-graue Gemälde zeigt die Schrecken des Krieges: eine schreiende Frau mit totem Kind, einen zerstückelten Soldaten, ein erschrecktes Pferd und einen gequälten Stier. Der kubistische Stil vermittelt Chaos und Leiden. 'Guernica' wurde zur mächtigsten Anti-Kriegs-Aussage des 20. Jahrhunderts. Picasso sagte, das Gemälde würde erst nach Spanien zurückkehren, wenn die Demokratie wiederhergestellt sei—es kam schließlich 1981 in Madrid an, sechs Jahre nach Francos Tod.",
          nl: "'Guernica' is Picasso's monumentale 11×25-voet meesterwerk dat het bombardement van de Baskische stad Guernica tijdens de Spaanse Burgeroorlog uitbeeldt. Nazi- en Italiaanse fascistische vliegtuigen bombardeerden de burgelijke stad op marktdag en doodden honderden. Picasso schilderde het in iets meer dan een maand voor het Spaanse Paviljoen op de Parijse Wereldtentoonstelling van 1937. Het zwart-wit-grijze schilderij toont de verschrikkingen van oorlog: een schreeuwende vrouw met dood kind, een verminkelde soldaat, een doodsbang paard en een gekwelde stier. De kubistische stijl brengt chaos en lijden over. 'Guernica' werd de machtigste anti-oorlogsverklaring van de 20e eeuw. Picasso zei dat het schilderij pas naar Spanje zou terugkeren nadat de democratie was hersteld—het kwam uiteindelijk in 1981 in Madrid aan, zes jaar na Franco's dood."
        }
      }
    ],

    // Day 26 - October 26th: Erie Canal opens (1825), Austria declares neutrality (1955), Hillary Clinton born (1947)
    day26: [
      {
        question: {
          en: "The Erie Canal officially opened on October 26, 1825. Which two bodies of water did it connect?",
          es: "El Canal Erie se abrió oficialmente el 26 de octubre de 1825. ¿Qué dos cuerpos de agua conectó?",
          de: "Der Eriekanal wurde am 26. Oktober 1825 offiziell eröffnet. Welche zwei Gewässer verband er?",
          nl: "Het Erie-kanaal werd officieel geopend op 26 oktober 1825. Welke twee waterlichamen verbond het?"
        },
        options: [
          { en: "Atlantic Ocean and Pacific Ocean", es: "Océano Atlántico y Océano Pacífico", de: "Atlantischer Ozean und Pazifischer Ozean", nl: "Atlantische Oceaan en Stille Oceaan" },
          { en: "Lake Erie and Hudson River", es: "Lago Erie y Río Hudson", de: "Eriesee und Hudson River", nl: "Lake Erie en Hudson River" },
          { en: "Mississippi River and Great Lakes", es: "Río Mississippi y Grandes Lagos", de: "Mississippi River und Große Seen", nl: "Mississippi River en Grote Meren" },
          { en: "Chesapeake Bay and Lake Ontario", es: "Bahía de Chesapeake y Lago Ontario", de: "Chesapeake Bay und Ontariosee", nl: "Chesapeake Bay en Lake Ontario" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Erie Canal connected Lake Erie to the Hudson River, creating a 363-mile waterway from the Great Lakes to New York City and the Atlantic Ocean. This engineering marvel took 8 years to build and transformed American commerce. Transportation costs dropped by 95%, and travel time from Buffalo to New York fell from 6 weeks to 6 days. The canal made New York City America's premier port and commercial center. It opened the Midwest to settlement and trade, accelerating westward expansion. Towns along the canal—Buffalo, Rochester, Syracuse, Albany—grew rapidly. The project cost $7 million but generated enormous returns. The canal's success sparked a canal-building boom nationwide. It proved that major infrastructure investments could drive economic growth and national development.",
          es: "El Canal Erie conectó el Lago Erie con el Río Hudson, creando una vía fluvial de 363 millas desde los Grandes Lagos hasta la Ciudad de Nueva York y el Océano Atlántico. Esta maravilla de la ingeniería tardó 8 años en construirse y transformó el comercio estadounidense. Los costos de transporte cayeron un 95%, y el tiempo de viaje de Buffalo a Nueva York cayó de 6 semanas a 6 días. El canal convirtió a la Ciudad de Nueva York en el principal puerto y centro comercial de América. Abrió el Medio Oeste al asentamiento y el comercio, acelerando la expansión hacia el oeste. Las ciudades a lo largo del canal—Buffalo, Rochester, Syracuse, Albany—crecieron rápidamente. El proyecto costó $7 millones pero generó enormes retornos. El éxito del canal desencadenó un auge de construcción de canales a nivel nacional. Demostró que las grandes inversiones en infraestructura podían impulsar el crecimiento económico y el desarrollo nacional.",
          de: "Der Eriekanal verband den Eriesee mit dem Hudson River und schuf eine 363 Meilen lange Wasserstraße von den Großen Seen nach New York City und zum Atlantischen Ozean. Dieses ingenieurtechnische Wunderwerk dauerte 8 Jahre bis zur Fertigstellung und transformierte den amerikanischen Handel. Die Transportkosten sanken um 95%, und die Reisezeit von Buffalo nach New York fiel von 6 Wochen auf 6 Tage. Der Kanal machte New York City zu Amerikas führendem Hafen und Handelszentrum. Er öffnete den Mittleren Westen für Besiedlung und Handel und beschleunigte die Expansion nach Westen. Städte entlang des Kanals—Buffalo, Rochester, Syracuse, Albany—wuchsen schnell. Das Projekt kostete 7 Millionen Dollar, brachte aber enorme Renditen. Der Erfolg des Kanals löste landesweit einen Kanalbau-Boom aus. Es bewies, dass große Infrastrukturinvestitionen Wirtschaftswachstum und nationale Entwicklung vorantreiben konnten.",
          nl: "Het Erie-kanaal verbond Lake Erie met de Hudson River en creëerde een 363 mijl lange waterweg van de Grote Meren naar New York City en de Atlantische Oceaan. Dit technisch wonder duurde 8 jaar om te bouwen en transformeerde de Amerikaanse handel. Transportkosten daalden met 95%, en de reistijd van Buffalo naar New York daalde van 6 weken naar 6 dagen. Het kanaal maakte New York City tot Amerika's belangrijkste haven en commerciële centrum. Het opende het Middenwesten voor vestiging en handel, waardoor de westwaartse expansie versnelde. Steden langs het kanaal—Buffalo, Rochester, Syracuse, Albany—groeiden snel. Het project kostte $7 miljoen maar genereerde enorme rendementen. Het succes van het kanaal leidde tot een kanaalbouwboom in het hele land. Het bewees dat grote infrastructuurinvesteringen economische groei en nationale ontwikkeling konden stimuleren."
        }
      },
      {
        question: {
          en: "On October 26, 1955, Austria declared permanent neutrality. What major historical event prompted this declaration?",
          es: "El 26 de octubre de 1955, Austria declaró neutralidad permanente. ¿Qué importante evento histórico provocó esta declaración?",
          de: "Am 26. Oktober 1955 erklärte Österreich seine immerwährende Neutralität. Welches wichtige historische Ereignis veranlasste diese Erklärung?",
          nl: "Op 26 oktober 1955 verklaarde Oostenrijk permanente neutraliteit. Welke belangrijke historische gebeurtenis leidde tot deze verklaring?"
        },
        options: [
          { en: "Creation of NATO", es: "Creación de la OTAN", de: "Gründung der NATO", nl: "Oprichting van de NAVO" },
          { en: "Start of the Cold War", es: "Inicio de la Guerra Fría", de: "Beginn des Kalten Krieges", nl: "Begin van de Koude Oorlog" },
          { en: "End of World War II occupation", es: "Fin de la ocupación de la Segunda Guerra Mundial", de: "Ende der Besatzung nach dem Zweiten Weltkrieg", nl: "Einde van de Tweede Wereldoorlog-bezetting" },
          { en: "Fall of the Berlin Wall", es: "Caída del Muro de Berlín", de: "Fall der Berliner Mauer", nl: "Val van de Berlijnse Muur" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Austria declared permanent neutrality after the Allied powers (USA, UK, France, USSR) agreed to end their 10-year occupation following World War II. The Austrian State Treaty of May 1955 restored Austria's full sovereignty, but required neutrality as a condition—ensuring Austria wouldn't join NATO or allow foreign military bases. This neutrality was Austria's price for Soviet withdrawal and independence. October 26 became Austria's National Day, celebrating both neutrality and sovereignty. Austria's neutrality allowed it to serve as a bridge between East and West during the Cold War. Vienna became home to numerous international organizations, including UN agencies. Austria joined the EU in 1995 but maintained its military neutrality, though its meaning evolved in the post-Cold War era.",
          es: "Austria declaró neutralidad permanente después de que las potencias aliadas (EE.UU., Reino Unido, Francia, URSS) acordaran poner fin a su ocupación de 10 años tras la Segunda Guerra Mundial. El Tratado de Estado Austriaco de mayo de 1955 restauró la plena soberanía de Austria, pero requería neutralidad como condición, asegurando que Austria no se uniría a la OTAN ni permitiría bases militares extranjeras. Esta neutralidad fue el precio de Austria por la retirada soviética y la independencia. El 26 de octubre se convirtió en el Día Nacional de Austria, celebrando tanto la neutralidad como la soberanía. La neutralidad de Austria le permitió servir como puente entre Este y Oeste durante la Guerra Fría. Viena se convirtió en hogar de numerosas organizaciones internacionales, incluidas agencias de la ONU. Austria se unió a la UE en 1995 pero mantuvo su neutralidad militar, aunque su significado evolucionó en la era posterior a la Guerra Fría.",
          de: "Österreich erklärte seine immerwährende Neutralität, nachdem die Alliierten Mächte (USA, UK, Frankreich, UdSSR) vereinbart hatten, ihre 10-jährige Besatzung nach dem Zweiten Weltkrieg zu beenden. Der Österreichische Staatsvertrag vom Mai 1955 stellte Österreichs volle Souveränität wieder her, erforderte aber Neutralität als Bedingung—um sicherzustellen, dass Österreich der NATO nicht beitreten oder ausländische Militärbasen erlauben würde. Diese Neutralität war Österreichs Preis für den sowjetischen Rückzug und Unabhängigkeit. Der 26. Oktober wurde Österreichs Nationalfeiertag und feiert sowohl Neutralität als auch Souveränität. Österreichs Neutralität ermöglichte es, während des Kalten Krieges als Brücke zwischen Ost und West zu dienen. Wien wurde Heimat zahlreicher internationaler Organisationen, einschließlich UN-Agenturen. Österreich trat 1995 der EU bei, behielt aber seine militärische Neutralität bei, obwohl ihre Bedeutung sich in der Zeit nach dem Kalten Krieg weiterentwickelte.",
          nl: "Oostenrijk verklaarde permanente neutraliteit nadat de geallieerde mogendheden (VS, VK, Frankrijk, USSR) overeenkwamen hun 10-jarige bezetting na de Tweede Wereldoorlog te beëindigen. Het Oostenrijkse Staatsverdrag van mei 1955 herstelde Oostenrijks volledige soevereiniteit, maar vereiste neutraliteit als voorwaarde—om ervoor te zorgen dat Oostenrijk niet zou toetreden tot de NAVO of buitenlandse militaire bases zou toestaan. Deze neutraliteit was Oostenrijks prijs voor Sovjet-terugtrekking en onafhankelijkheid. 26 oktober werd Oostenrijks Nationale Dag, ter viering van zowel neutraliteit als soevereiniteit. Oostenrijks neutraliteit stelde het in staat om tijdens de Koude Oorlog als brug tussen Oost en West te dienen. Wenen werd de thuisbasis van tal van internationale organisaties, waaronder VN-agentschappen. Oostenrijk trad in 1995 toe tot de EU maar behield zijn militaire neutraliteit, hoewel de betekenis ervan evolueerde in het post-Koude Oorlog tijdperk."
        }
      },
      {
        question: {
          en: "Hillary Clinton was born on October 26, 1947. What historic first did she achieve in 2016?",
          es: "Hillary Clinton nació el 26 de octubre de 1947. ¿Qué primicia histórica logró en 2016?",
          de: "Hillary Clinton wurde am 26. Oktober 1947 geboren. Welches historische Novum erreichte sie 2016?",
          nl: "Hillary Clinton werd geboren op 26 oktober 1947. Welke historische primeur behaalde zij in 2016?"
        },
        options: [
          { en: "First woman to serve as Secretary of State", es: "Primera mujer en servir como Secretaria de Estado", de: "Erste Frau als Außenministerin", nl: "Eerste vrouw die diende als Minister van Buitenlandse Zaken" },
          { en: "First woman to serve in the Senate", es: "Primera mujer en servir en el Senado", de: "Erste Frau im Senat", nl: "Eerste vrouw in de Senaat" },
          { en: "First woman elected President", es: "Primera mujer elegida Presidenta", de: "Erste Frau, die zur Präsidentin gewählt wurde", nl: "Eerste vrouw gekozen tot President" },
          { en: "First woman to win a major party's presidential nomination", es: "Primera mujer en ganar la nominación presidencial de un partido principal", de: "Erste Frau, die die Präsidentschaftsnominierung einer großen Partei gewann", nl: "Eerste vrouw die de presidentiële nominatie van een grote partij won" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Hillary Clinton became the first woman to win a major party's presidential nomination when the Democratic Party nominated her in 2016. Though she won the popular vote by nearly 3 million, she lost the Electoral College to Donald Trump. Clinton's political career spanned decades: First Lady (1993-2001), U.S. Senator from New York (2001-2009), and Secretary of State (2009-2013). As First Lady, she championed healthcare reform and children's issues. As Senator, she represented New York during 9/11 and its aftermath. As Secretary of State, she traveled to 112 countries—more than any previous Secretary. Her 2016 campaign broke the 'highest, hardest glass ceiling,' proving a woman could compete at the highest level of American politics, even if victory remained elusive.",
          es: "Hillary Clinton se convirtió en la primera mujer en ganar la nominación presidencial de un partido principal cuando el Partido Demócrata la nominó en 2016. Aunque ganó el voto popular por casi 3 millones, perdió el Colegio Electoral ante Donald Trump. La carrera política de Clinton abarcó décadas: Primera Dama (1993-2001), Senadora de EE.UU. por Nueva York (2001-2009) y Secretaria de Estado (2009-2013). Como Primera Dama, defendió la reforma de la atención médica y cuestiones de niños. Como Senadora, representó a Nueva York durante el 11 de septiembre y sus consecuencias. Como Secretaria de Estado, viajó a 112 países, más que cualquier Secretario anterior. Su campaña de 2016 rompió el 'techo de cristal más alto y más duro', demostrando que una mujer podía competir al más alto nivel de la política estadounidense, incluso si la victoria seguía siendo esquiva.",
          de: "Hillary Clinton wurde die erste Frau, die die Präsidentschaftsnominierung einer großen Partei gewann, als die Demokratische Partei sie 2016 nominierte. Obwohl sie die Volksabstimmung mit fast 3 Millionen Stimmen gewann, verlor sie das Wahlkollegium an Donald Trump. Clintons politische Karriere erstreckte sich über Jahrzehnte: First Lady (1993-2001), US-Senatorin von New York (2001-2009) und Außenministerin (2009-2013). Als First Lady setzte sie sich für Gesundheitsreform und Kinderfragen ein. Als Senatorin vertrat sie New York während 9/11 und danach. Als Außenministerin reiste sie in 112 Länder—mehr als jeder frühere Außenminister. Ihre Kampagne 2016 durchbrach die 'höchste, härteste Glasdecke' und bewies, dass eine Frau auf höchster Ebene der amerikanischen Politik konkurrieren konnte, auch wenn der Sieg unerreicht blieb.",
          nl: "Hillary Clinton werd de eerste vrouw die de presidentiële nominatie van een grote partij won toen de Democratische Partij haar in 2016 nomineerde. Hoewel ze de volksstemming met bijna 3 miljoen won, verloor ze het Electoral College van Donald Trump. Clintons politieke carrière besloeg decennia: First Lady (1993-2001), Amerikaanse senator van New York (2001-2009) en minister van Buitenlandse Zaken (2009-2013). Als First Lady kampte ze voor gezondheidszorgreform en kinderkwesties. Als senator vertegenwoordigde ze New York tijdens 9/11 en de nasleep ervan. Als minister van Buitenlandse Zaken reisde ze naar 112 landen—meer dan enige eerdere minister. Haar campagne van 2016 brak het 'hoogste, hardste glazen plafond', wat bewees dat een vrouw kon concurreren op het hoogste niveau van de Amerikaanse politiek, ook al bleef de overwinning ongrijpbaar."
        }
      },
      {
        question: {
          en: "How long was the Erie Canal when it opened in 1825?",
          es: "¿Cuánto medía el Canal Erie cuando se abrió en 1825?",
          de: "Wie lang war der Eriekanal bei seiner Eröffnung 1825?",
          nl: "Hoe lang was het Erie-kanaal toen het in 1825 werd geopend?"
        },
        options: [
          { en: "150 miles", es: "150 millas", de: "150 Meilen", nl: "150 mijl" },
          { en: "250 miles", es: "250 millas", de: "250 Meilen", nl: "250 mijl" },
          { en: "363 miles", es: "363 millas", de: "363 Meilen", nl: "363 mijl" },
          { en: "500 miles", es: "500 millas", de: "500 Meilen", nl: "500 mijl" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Erie Canal was 363 miles long when completed in 1825, making it the longest artificial waterway in North America at the time. The canal was 40 feet wide and 4 feet deep, with 83 locks to manage the 571-foot elevation change between Lake Erie and the Hudson River. Construction began in 1817 and required enormous manual labor—mostly Irish immigrants using picks, shovels, and black powder. Workers faced disease, accidents, and harsh conditions. The canal's nickname 'Clinton's Ditch' mocked Governor DeWitt Clinton's ambitious project, which many considered impossible. But the canal's success silenced critics. It cut freight costs from $100 to $10 per ton and became the economic engine of American expansion. The canal remained commercially important until railroads emerged in the 1850s.",
          es: "El Canal Erie tenía 363 millas de largo cuando se completó en 1825, convirtiéndolo en la vía fluvial artificial más larga de América del Norte en ese momento. El canal tenía 40 pies de ancho y 4 pies de profundidad, con 83 esclusas para manejar el cambio de elevación de 571 pies entre el Lago Erie y el Río Hudson. La construcción comenzó en 1817 y requirió enorme trabajo manual, principalmente inmigrantes irlandeses usando picos, palas y pólvora negra. Los trabajadores enfrentaron enfermedades, accidentes y condiciones duras. El apodo del canal 'Clinton's Ditch' se burlaba del ambicioso proyecto del gobernador DeWitt Clinton, que muchos consideraban imposible. Pero el éxito del canal silenció a los críticos. Redujo los costos de flete de $100 a $10 por tonelada y se convirtió en el motor económico de la expansión estadounidense. El canal siguió siendo comercialmente importante hasta que surgieron los ferrocarriles en la década de 1850.",
          de: "Der Eriekanal war bei seiner Fertigstellung 1825 363 Meilen lang und damit die längste künstliche Wasserstraße Nordamerikas zu dieser Zeit. Der Kanal war 40 Fuß breit und 4 Fuß tief, mit 83 Schleusen, um den 571-Fuß-Höhenunterschied zwischen dem Eriesee und dem Hudson River zu bewältigen. Der Bau begann 1817 und erforderte enorme Handarbeit—hauptsächlich irische Einwanderer, die Spitzhacken, Schaufeln und Schwarzpulver verwendeten. Arbeiter waren Krankheiten, Unfällen und harten Bedingungen ausgesetzt. Der Spitzname des Kanals 'Clinton's Ditch' verspottete das ehrgeizige Projekt von Gouverneur DeWitt Clinton, das viele für unmöglich hielten. Aber der Erfolg des Kanals brachte Kritiker zum Schweigen. Er senkte die Frachtkosten von 100 auf 10 Dollar pro Tonne und wurde zum wirtschaftlichen Motor der amerikanischen Expansion. Der Kanal blieb bis zum Aufkommen der Eisenbahnen in den 1850er Jahren kommerziell wichtig.",
          nl: "Het Erie-kanaal was 363 mijl lang toen het in 1825 werd voltooid, waardoor het de langste kunstmatige waterweg in Noord-Amerika was op dat moment. Het kanaal was 40 voet breed en 4 voet diep, met 83 sluizen om het hoogteverschil van 571 voet tussen Lake Erie en de Hudson River te beheren. De bouw begon in 1817 en vereiste enorme handarbeid—voornamelijk Ierse immigranten die pikhouwelen, schoppen en buskruit gebruikten. Arbeiders werden geconfronteerd met ziekten, ongevallen en harde omstandigheden. De bijnaam van het kanaal 'Clinton's Ditch' bespotte het ambitieuze project van gouverneur DeWitt Clinton, dat velen als onmogelijk beschouwden. Maar het succes van het kanaal deed critici verstommen. Het verlaagde de vrachtkosten van $100 naar $10 per ton en werd de economische motor van Amerikaanse expansie. Het kanaal bleef commercieel belangrijk totdat spoorwegen in de jaren 1850 opkwamen."
        }
      },
      {
        question: {
          en: "What position did Hillary Clinton hold from 2009 to 2013?",
          es: "¿Qué cargo ocupó Hillary Clinton de 2009 a 2013?",
          de: "Welches Amt bekleidete Hillary Clinton von 2009 bis 2013?",
          nl: "Welke functie bekleedde Hillary Clinton van 2009 tot 2013?"
        },
        options: [
          { en: "Secretary of Defense", es: "Secretaria de Defensa", de: "Verteidigungsministerin", nl: "Minister van Defensie" },
          { en: "Secretary of State", es: "Secretaria de Estado", de: "Außenministerin", nl: "Minister van Buitenlandse Zaken" },
          { en: "Vice President", es: "Vicepresidenta", de: "Vizepräsidentin", nl: "Vice-president" },
          { en: "Attorney General", es: "Fiscal General", de: "Justizministerin", nl: "Procureur-generaal" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Hillary Clinton served as Secretary of State under President Barack Obama from 2009 to 2013, becoming one of the most traveled diplomats in U.S. history. She visited 112 countries and logged nearly 1 million miles. Clinton advocated for 'smart power'—combining military strength with diplomacy and development aid. She championed women's rights globally, declaring 'women's rights are human rights.' During her tenure, she dealt with major challenges: the Arab Spring uprisings, the Libya intervention, Iran nuclear negotiations, and the killing of Osama bin Laden. She promoted internet freedom and 21st-century statecraft. Her tenure was also marked by controversy over the 2012 Benghazi attack and her use of a private email server. Clinton left office with high approval ratings before launching her 2016 presidential campaign.",
          es: "Hillary Clinton se desempeñó como Secretaria de Estado bajo el presidente Barack Obama de 2009 a 2013, convirtiéndose en una de las diplomáticas más viajadas en la historia de EE.UU. Visitó 112 países y recorrió casi 1 millón de millas. Clinton abogó por el 'poder inteligente', combinando fuerza militar con diplomacia y ayuda al desarrollo. Defendió los derechos de las mujeres a nivel mundial, declarando que 'los derechos de las mujeres son derechos humanos'. Durante su mandato, enfrentó desafíos importantes: los levantamientos de la Primavera Árabe, la intervención en Libia, las negociaciones nucleares con Irán y la muerte de Osama bin Laden. Promovió la libertad en internet y la diplomacia del siglo XXI. Su mandato también estuvo marcado por la controversia sobre el ataque de Bengasi de 2012 y su uso de un servidor de correo electrónico privado. Clinton dejó el cargo con altos índices de aprobación antes de lanzar su campaña presidencial de 2016.",
          de: "Hillary Clinton diente von 2009 bis 2013 als Außenministerin unter Präsident Barack Obama und wurde eine der meistgereisten Diplomatinnen in der US-Geschichte. Sie besuchte 112 Länder und legte fast 1 Million Meilen zurück. Clinton setzte sich für 'Smart Power' ein—die Kombination militärischer Stärke mit Diplomatie und Entwicklungshilfe. Sie setzte sich weltweit für Frauenrechte ein und erklärte 'Frauenrechte sind Menschenrechte'. Während ihrer Amtszeit befasste sie sich mit großen Herausforderungen: den Arabischen Frühlings-Aufständen, der Libyen-Intervention, Iran-Atomverhandlungen und der Tötung von Osama bin Laden. Sie förderte Internetfreiheit und Diplomatie des 21. Jahrhunderts. Ihre Amtszeit war auch von Kontroversen über den Benghazi-Angriff 2012 und ihre Nutzung eines privaten E-Mail-Servers geprägt. Clinton verließ das Amt mit hohen Zustimmungswerten, bevor sie ihre Präsidentschaftskampagne 2016 startete.",
          nl: "Hillary Clinton diende als minister van Buitenlandse Zaken onder president Barack Obama van 2009 tot 2013 en werd een van de meest bereisde diplomaten in de Amerikaanse geschiedenis. Ze bezocht 112 landen en legde bijna 1 miljoen mijl af. Clinton pleitte voor 'slimme macht'—de combinatie van militaire kracht met diplomatie en ontwikkelingshulp. Ze kampte wereldwijd voor vrouwenrechten en verklaarde 'vrouwenrechten zijn mensenrechten'. Tijdens haar ambtstermijn kreeg ze te maken met grote uitdagingen: de Arabische Lente-opstanden, de Libië-interventie, Iran-nucleaire onderhandelingen en de dood van Osama bin Laden. Ze promootte internetvrijheid en 21e-eeuwse diplomatie. Haar ambtstermijn werd ook gekenmerkt door controverse over de Benghazi-aanval in 2012 en haar gebruik van een privé e-mailserver. Clinton verliet het kantoor met hoge goedkeuringspercentages voordat ze haar presidentiële campagne van 2016 lanceerde."
        }
      }
    ],

    // Day 27 - October 27th: New York City subway opens (1904), Theodore Roosevelt born (1858), Turkmenistan independence (1991)
    day27: [
      {
        question: {
          en: "In what year did the New York City subway system open?",
          es: "¿En qué año se inauguró el sistema de metro de Nueva York?",
          de: "In welchem Jahr wurde das U-Bahn-System von New York City eröffnet?",
          nl: "In welk jaar werd het metrosysteem van New York City geopend?"
        },
        options: [
          { en: "1890", es: "1890", de: "1890", nl: "1890" },
          { en: "1904", es: "1904", de: "1904", nl: "1904" },
          { en: "1915", es: "1915", de: "1915", nl: "1915" },
          { en: "1920", es: "1920", de: "1920", nl: "1920" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The New York City subway opened on October 27, 1904, with the first line running from City Hall to 145th Street. Mayor George McClellan ceremonially drove the first train. The initial 9-mile route cost $35 million to build and carried 150,000 passengers on opening day. The subway transformed New York, enabling rapid expansion and making the city's dense population possible. Today, the NYC subway is one of the world's largest transit systems, with 472 stations and over 1 billion annual riders. The iconic system runs 24/7, a rarity among global metros. Early stations featured elaborate architecture and decorative tilework that still exists today. The subway's expansion connected all five boroughs, fundamentally shaping the city's development and becoming synonymous with New York itself.",
          es: "El metro de Nueva York se inauguró el 27 de octubre de 1904, con la primera línea desde City Hall hasta la calle 145. El alcalde George McClellan condujo ceremonialmente el primer tren. La ruta inicial de 9 millas costó $35 millones construir y transportó 150,000 pasajeros el día de apertura. El metro transformó Nueva York, permitiendo una rápida expansión y haciendo posible la densa población de la ciudad. Hoy, el metro de NYC es uno de los sistemas de tránsito más grandes del mundo, con 472 estaciones y más de mil millones de pasajeros anuales. El icónico sistema funciona 24/7, una rareza entre los metros globales. Las estaciones tempranas presentaban arquitectura elaborada y azulejos decorativos que aún existen hoy. La expansión del metro conectó los cinco distritos, dando forma fundamental al desarrollo de la ciudad y convirtiéndose en sinónimo de Nueva York misma.",
          de: "Die New Yorker U-Bahn wurde am 27. Oktober 1904 eröffnet, wobei die erste Linie vom City Hall bis zur 145th Street fuhr. Bürgermeister George McClellan fuhr zeremoniell den ersten Zug. Die anfängliche 9-Meilen-Strecke kostete 35 Millionen Dollar und beförderte am Eröffnungstag 150.000 Passagiere. Die U-Bahn transformierte New York, ermöglichte schnelle Expansion und machte die dichte Bevölkerung der Stadt möglich. Heute ist die NYC U-Bahn eines der größten Verkehrssysteme der Welt mit 472 Stationen und über 1 Milliarde jährlichen Fahrgästen. Das ikonische System läuft 24/7, eine Seltenheit unter globalen U-Bahnen. Frühe Stationen zeigten aufwendige Architektur und dekorative Fliesenarbeiten, die noch heute existieren. Die Expansion der U-Bahn verband alle fünf Bezirke, prägte grundlegend die Entwicklung der Stadt und wurde zum Synonym für New York selbst.",
          nl: "De metro van New York City werd geopend op 27 oktober 1904, met de eerste lijn van City Hall naar 145th Street. Burgemeester George McClellan reed ceremonieel de eerste trein. De initiële route van 9 mijl kostte $35 miljoen om te bouwen en vervoerde 150.000 passagiers op de openingsdag. De metro transformeerde New York, maakte snelle expansie mogelijk en maakte de dichte bevolking van de stad mogelijk. Vandaag is de NYC metro een van 's werelds grootste transitsystemen, met 472 stations en meer dan 1 miljard jaarlijkse reizigers. Het iconische systeem rijdt 24/7, een zeldzaamheid onder wereldwijde metro's. Vroege stations hadden uitgebreide architectuur en decoratieve tegelwerken die vandaag nog bestaan. De expansie van de metro verbond alle vijf stadsdelen, vormde fundamenteel de ontwikkeling van de stad en werd synoniem met New York zelf."
        }
      },
      {
        question: {
          en: "Theodore Roosevelt was born on October 27, 1858. Which national park did he NOT help establish?",
          es: "Theodore Roosevelt nació el 27 de octubre de 1858. ¿Qué parque nacional NO ayudó a establecer?",
          de: "Theodore Roosevelt wurde am 27. Oktober 1858 geboren. Welchen Nationalpark half er NICHT zu gründen?",
          nl: "Theodore Roosevelt werd geboren op 27 oktober 1858. Welk nationaal park hielp hij NIET oprichten?"
        },
        options: [
          { en: "Crater Lake", es: "Crater Lake", de: "Crater Lake", nl: "Crater Lake" },
          { en: "Wind Cave", es: "Wind Cave", de: "Wind Cave", nl: "Wind Cave" },
          { en: "Grand Canyon", es: "Gran Cañón", de: "Grand Canyon", nl: "Grand Canyon" },
          { en: "Acadia", es: "Acadia", de: "Acadia", nl: "Acadia" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Theodore Roosevelt established Crater Lake (1902), Wind Cave (1903), and protected the Grand Canyon (making it a National Monument in 1908, later a park in 1919). However, Acadia National Park wasn't established until 1916, after Roosevelt left office. Roosevelt was America's greatest conservation president, establishing 5 national parks, 18 national monuments, 51 bird reserves, 4 game preserves, and 150 national forests—protecting 230 million acres. His love of nature stemmed from childhood asthma that improved through outdoor activity. As president (1901-1909), he made conservation a priority, working with Gifford Pinchot to protect America's wilderness. Roosevelt believed natural resources belonged to all Americans, not just corporations. His legacy includes iconic landmarks like Devils Tower, Muir Woods, and the Antiquities Act, which still protects sites today.",
          es: "Theodore Roosevelt estableció Crater Lake (1902), Wind Cave (1903) y protegió el Gran Cañón (convirtiéndolo en Monumento Nacional en 1908, luego un parque en 1919). Sin embargo, el Parque Nacional Acadia no se estableció hasta 1916, después de que Roosevelt dejara el cargo. Roosevelt fue el mayor presidente conservacionista de América, estableciendo 5 parques nacionales, 18 monumentos nacionales, 51 reservas de aves, 4 reservas de caza y 150 bosques nacionales, protegiendo 230 millones de acres. Su amor por la naturaleza surgió del asma infantil que mejoró con la actividad al aire libre. Como presidente (1901-1909), hizo de la conservación una prioridad, trabajando con Gifford Pinchot para proteger la naturaleza salvaje de América. Roosevelt creía que los recursos naturales pertenecían a todos los estadounidenses, no solo a las corporaciones. Su legado incluye lugares emblemáticos como Devils Tower, Muir Woods y la Ley de Antigüedades, que todavía protege sitios hoy.",
          de: "Theodore Roosevelt gründete Crater Lake (1902), Wind Cave (1903) und schützte den Grand Canyon (machte ihn 1908 zum Nationaldenkmal, später 1919 zum Park). Acadia Nationalpark wurde jedoch erst 1916 gegründet, nachdem Roosevelt aus dem Amt ausgeschieden war. Roosevelt war Amerikas größter Naturschutz-Präsident und gründete 5 Nationalparks, 18 Nationaldenkmäler, 51 Vogelschutzgebiete, 4 Wildreservate und 150 Nationalwälder—er schützte 230 Millionen Acres. Seine Liebe zur Natur stammte von Kindheitsasthma, das sich durch Outdoor-Aktivitäten verbesserte. Als Präsident (1901-1909) machte er Naturschutz zur Priorität und arbeitete mit Gifford Pinchot, um Amerikas Wildnis zu schützen. Roosevelt glaubte, dass natürliche Ressourcen allen Amerikanern gehörten, nicht nur Konzernen. Sein Vermächtnis umfasst ikonische Wahrzeichen wie Devils Tower, Muir Woods und das Antiquities Act, das heute noch Stätten schützt.",
          nl: "Theodore Roosevelt richtte Crater Lake (1902), Wind Cave (1903) op en beschermde de Grand Canyon (maakte het in 1908 tot een Nationaal Monument, later een park in 1919). Acadia National Park werd echter pas in 1916 opgericht, nadat Roosevelt uit zijn ambt was. Roosevelt was Amerika's grootste natuurbeschermingspresident, die 5 nationale parken, 18 nationale monumenten, 51 vogelreservaten, 4 wildreservaten en 150 nationale bossen oprichtte—230 miljoen acres beschermend. Zijn liefde voor de natuur kwam van astma in zijn jeugd die verbeterde door buitenactiviteiten. Als president (1901-1909) maakte hij natuurbehoud een prioriteit en werkte met Gifford Pinchot om Amerika's wildernis te beschermen. Roosevelt geloofde dat natuurlijke hulpbronnen van alle Amerikanen waren, niet alleen van bedrijven. Zijn nalatenschap omvat iconische bezienswaardigheden zoals Devils Tower, Muir Woods en de Antiquities Act, die vandaag nog steeds sites beschermt."
        }
      },
      {
        question: {
          en: "Turkmenistan gained independence from the Soviet Union on October 27, 1991. What is its capital city?",
          es: "Turkmenistán obtuvo la independencia de la Unión Soviética el 27 de octubre de 1991. ¿Cuál es su ciudad capital?",
          de: "Turkmenistan erlangte am 27. Oktober 1991 die Unabhängigkeit von der Sowjetunion. Was ist seine Hauptstadt?",
          nl: "Turkmenistan werd onafhankelijk van de Sovjet-Unie op 27 oktober 1991. Wat is de hoofdstad?"
        },
        options: [
          { en: "Tashkent", es: "Taskent", de: "Taschkent", nl: "Tasjkent" },
          { en: "Ashgabat", es: "Asjabad", de: "Aşgabat", nl: "Asjchabad" },
          { en: "Almaty", es: "Almaty", de: "Almaty", nl: "Almaty" },
          { en: "Bishkek", es: "Biskek", de: "Bischkek", nl: "Bisjkek" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Ashgabat is the capital of Turkmenistan, a Central Asian country that declared independence on October 27, 1991, as the Soviet Union collapsed. Turkmenistan was the last Soviet republic to declare independence. The country has vast natural gas reserves, ranking fourth globally. Ashgabat holds the Guinness World Record for the highest density of white marble buildings, creating a distinctive cityscape. Turkmenistan has maintained strict neutrality in foreign affairs, recognized by the UN in 1995. The country has a desert climate with the Karakum Desert covering 80% of its territory. Turkmenistan's history includes being part of the Silk Road and the ancient Persian Empire. Since independence, it has been ruled by authoritarian presidents, first Saparmurat Niyazov and then Gurbanguly Berdimuhamedow, with highly centralized governments and personality cults.",
          es: "Asjabad es la capital de Turkmenistán, un país de Asia Central que declaró su independencia el 27 de octubre de 1991, cuando colapsó la Unión Soviética. Turkmenistán fue la última república soviética en declarar su independencia. El país tiene vastas reservas de gas natural, ocupando el cuarto lugar mundial. Asjabad tiene el récord mundial Guinness por la mayor densidad de edificios de mármol blanco, creando un paisaje urbano distintivo. Turkmenistán ha mantenido una estricta neutralidad en asuntos exteriores, reconocida por la ONU en 1995. El país tiene un clima desértico con el desierto de Karakum cubriendo el 80% de su territorio. La historia de Turkmenistán incluye ser parte de la Ruta de la Seda y del antiguo Imperio Persa. Desde la independencia, ha sido gobernado por presidentes autoritarios, primero Saparmurat Niyazov y luego Gurbanguly Berdimuhamedow, con gobiernos altamente centralizados y cultos a la personalidad.",
          de: "Aşgabat ist die Hauptstadt von Turkmenistan, einem zentralasiatischen Land, das am 27. Oktober 1991 seine Unabhängigkeit erklärte, als die Sowjetunion zusammenbrach. Turkmenistan war die letzte Sowjetrepublik, die ihre Unabhängigkeit erklärte. Das Land verfügt über riesige Erdgasreserven und belegt weltweit den vierten Platz. Aşgabat hält den Guinness-Weltrekord für die höchste Dichte an weißen Marmorgebäuden und schafft eine markante Stadtlandschaft. Turkmenistan hat in auswärtigen Angelegenheiten strikte Neutralität bewahrt, die 1995 von den UN anerkannt wurde. Das Land hat ein Wüstenklima, wobei die Karakum-Wüste 80% seines Territoriums bedeckt. Turkmenistans Geschichte umfasst die Zugehörigkeit zur Seidenstraße und zum alten Persischen Reich. Seit der Unabhängigkeit wurde es von autoritären Präsidenten regiert, zuerst Saparmurat Nijasow und dann Gurbanguly Berdimuhamedow, mit hochzentralisierten Regierungen und Personenkulten.",
          nl: "Asjchabad is de hoofdstad van Turkmenistan, een Centraal-Aziatisch land dat op 27 oktober 1991 onafhankelijk werd toen de Sovjet-Unie ineenstortte. Turkmenistan was de laatste Sovjet-republiek die onafhankelijkheid verklaarde. Het land heeft enorme aardgasreserves en staat wereldwijd op de vierde plaats. Asjchabad heeft het Guinness Wereldrecord voor de hoogste dichtheid van witte marmeren gebouwen, waardoor een onderscheidend stadsbeeld ontstaat. Turkmenistan heeft strikte neutraliteit in buitenlandse zaken gehandhaafd, erkend door de VN in 1995. Het land heeft een woestijnklimaat waarbij de Karakoem-woestijn 80% van zijn grondgebied bedekt. De geschiedenis van Turkmenistan omvat deel uitmaken van de Zijderoute en het oude Perzische Rijk. Sinds de onafhankelijkheid is het geregeerd door autoritaire presidenten, eerst Saparmurat Niyazov en daarna Gurbanguly Berdimuhamedow, met zeer gecentraliseerde regeringen en persoonlijkheidsculten."
        }
      },
      {
        question: {
          en: "How many stations did the NYC subway have when it first opened in 1904?",
          es: "¿Cuántas estaciones tenía el metro de NYC cuando se inauguró en 1904?",
          de: "Wie viele Stationen hatte die NYC U-Bahn bei ihrer Eröffnung 1904?",
          nl: "Hoeveel stations had de NYC metro toen het voor het eerst opende in 1904?"
        },
        options: [
          { en: "12 stations", es: "12 estaciones", de: "12 Stationen", nl: "12 stations" },
          { en: "28 stations", es: "28 estaciones", de: "28 Stationen", nl: "28 stations" },
          { en: "50 stations", es: "50 estaciones", de: "50 Stationen", nl: "50 stations" },
          { en: "100 stations", es: "100 estaciones", de: "100 Stationen", nl: "100 stations" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The original NYC subway line had 28 stations when it opened in 1904, stretching 9 miles from City Hall in downtown Manhattan to 145th Street in Harlem. The fare was 5 cents. Stations featured elaborate designs with ceramic tilework, brass fixtures, and vaulted ceilings—many still visible today. The City Hall station, the original southern terminus, was particularly ornate with Guastavino tile ceilings and skylights. However, it closed in 1945 due to its curved platform being too short for modern trains. The subway expanded rapidly: by 1920, the system had grown to 300+ stations. Today's 472 stations serve 1.7 billion annual rides. The subway revolutionized urban transportation, allowing workers to live far from jobs and enabling NYC's upward and outward growth into a true metropolis.",
          es: "La línea original del metro de NYC tenía 28 estaciones cuando se inauguró en 1904, extendiéndose 9 millas desde City Hall en el centro de Manhattan hasta la calle 145 en Harlem. La tarifa era de 5 centavos. Las estaciones presentaban diseños elaborados con azulejos de cerámica, accesorios de latón y techos abovedados, muchos aún visibles hoy. La estación de City Hall, el terminal sur original, era particularmente ornamentada con techos de azulejos Guastavino y tragaluces. Sin embargo, cerró en 1945 debido a que su plataforma curva era demasiado corta para los trenes modernos. El metro se expandió rápidamente: para 1920, el sistema había crecido a más de 300 estaciones. Las 472 estaciones de hoy sirven 1.7 mil millones de viajes anuales. El metro revolucionó el transporte urbano, permitiendo a los trabajadores vivir lejos de sus empleos y permitiendo el crecimiento hacia arriba y hacia afuera de NYC en una verdadera metrópolis.",
          de: "Die ursprüngliche NYC U-Bahn-Linie hatte bei ihrer Eröffnung 1904 28 Stationen und erstreckte sich über 9 Meilen von City Hall in Downtown Manhattan bis zur 145th Street in Harlem. Der Fahrpreis betrug 5 Cent. Die Stationen zeigten aufwendige Designs mit Keramikfliesen, Messingarmaturen und gewölbten Decken—viele sind noch heute sichtbar. Die City Hall Station, der ursprüngliche südliche Endpunkt, war besonders kunstvoll mit Guastavino-Fliesendecken und Oberlichtern. Sie wurde jedoch 1945 geschlossen, da ihr gebogener Bahnsteig für moderne Züge zu kurz war. Die U-Bahn expandierte schnell: Bis 1920 war das System auf über 300 Stationen gewachsen. Die heutigen 472 Stationen bedienen 1,7 Milliarden jährliche Fahrten. Die U-Bahn revolutionierte den städtischen Verkehr, ermöglichte es Arbeitern, weit von ihrer Arbeit zu leben, und ermöglichte NYCs Wachstum nach oben und außen zu einer echten Metropole.",
          nl: "De oorspronkelijke NYC metrolijn had 28 stations toen het in 1904 opende, zich uitstrekkend over 9 mijl van City Hall in het centrum van Manhattan tot 145th Street in Harlem. Het tarief was 5 cent. Stations hadden uitgebreide ontwerpen met keramische tegelwerken, messing armaturen en gewelfde plafonds—velen nog steeds zichtbaar vandaag. Het City Hall station, het oorspronkelijke zuidelijke eindpunt, was bijzonder sierlijk met Guastavino tegelplafonds en dakramen. Het sloot echter in 1945 omdat het gebogen platform te kort was voor moderne treinen. De metro breidde snel uit: tegen 1920 was het systeem gegroeid tot 300+ stations. De 472 stations van vandaag bedienen 1,7 miljard jaarlijkse ritten. De metro revolutioneerde stedelijk transport, stelde arbeiders in staat ver van hun werk te wonen en maakte NYC's groei naar boven en naar buiten mogelijk tot een echte metropool."
        }
      },
      {
        question: {
          en: "What famous quote is attributed to Theodore Roosevelt about speaking softly?",
          es: "¿Qué famosa cita se atribuye a Theodore Roosevelt sobre hablar suavemente?",
          de: "Welches berühmte Zitat wird Theodore Roosevelt über sanftes Sprechen zugeschrieben?",
          nl: "Welk beroemd citaat wordt toegeschreven aan Theodore Roosevelt over zacht spreken?"
        },
        options: [
          { en: "Speak softly and be wise", es: "Habla suavemente y sé sabio", de: "Sprich sanft und sei weise", nl: "Spreek zacht en wees wijs" },
          { en: "Speak softly but think big", es: "Habla suavemente pero piensa en grande", de: "Sprich sanft aber denke groß", nl: "Spreek zacht maar denk groot" },
          { en: "Speak softly and carry a big stick", es: "Habla suavemente y lleva un gran palo", de: "Sprich sanft und trage einen großen Stock", nl: "Spreek zacht en draag een grote stok" },
          { en: "Speak softly and walk tall", es: "Habla suavemente y camina alto", de: "Sprich sanft und gehe aufrecht", nl: "Spreek zacht en loop rechtop" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Theodore Roosevelt's famous saying 'Speak softly and carry a big stick' encapsulated his foreign policy approach. He believed in negotiating peacefully while maintaining strong military readiness. This philosophy, called 'Big Stick Diplomacy,' guided his presidency. Roosevelt mediated the Russo-Japanese War (earning a Nobel Peace Prize), built the Panama Canal, and expanded the U.S. Navy into a global force. He sent the Great White Fleet on a worldwide tour to demonstrate American naval power. At home, Roosevelt was equally vigorous: he broke up corporate monopolies, established the FDA, mediated coal strikes, and championed conservation. He was the youngest president at age 42, energetic and charismatic. Roosevelt embodied the 'strenuous life' he preached—boxing, hunting, exploring, and leading the Rough Riders in the Spanish-American War.",
          es: "El famoso dicho de Theodore Roosevelt 'Habla suavemente y lleva un gran palo' encapsuló su enfoque de política exterior. Creía en negociar pacíficamente mientras mantenía una fuerte preparación militar. Esta filosofía, llamada 'Diplomacia del Gran Palo', guió su presidencia. Roosevelt medió en la Guerra Ruso-Japonesa (ganando un Premio Nobel de la Paz), construyó el Canal de Panamá y expandió la Marina de EE.UU. en una fuerza global. Envió la Gran Flota Blanca en un tour mundial para demostrar el poder naval estadounidense. En casa, Roosevelt fue igualmente vigoroso: desmanteló monopolios corporativos, estableció la FDA, medió en huelgas de carbón y defendió la conservación. Fue el presidente más joven a los 42 años, enérgico y carismático. Roosevelt encarnó la 'vida esforzada' que predicaba: boxeo, caza, exploración y liderando a los Rough Riders en la Guerra Hispano-Estadounidense.",
          de: "Theodore Roosevelts berühmter Spruch 'Sprich sanft und trage einen großen Stock' verkörperte seinen außenpolitischen Ansatz. Er glaubte an friedliche Verhandlungen bei gleichzeitiger starker militärischer Bereitschaft. Diese Philosophie, 'Big Stick Diplomacy' genannt, leitete seine Präsidentschaft. Roosevelt vermittelte im Russisch-Japanischen Krieg (und gewann einen Friedensnobelpreis), baute den Panamakanal und baute die US-Marine zu einer globalen Macht aus. Er schickte die Great White Fleet auf Welttournee, um amerikanische Seemacht zu demonstrieren. Zu Hause war Roosevelt ebenso energisch: Er zerschlug Unternehmensmonopole, gründete die FDA, vermittelte Kohlestreiks und setzte sich für Naturschutz ein. Er war mit 42 Jahren der jüngste Präsident, energisch und charismatisch. Roosevelt verkörperte das 'anstrengende Leben', das er predigte—Boxen, Jagen, Erforschen und das Führen der Rough Riders im Spanisch-Amerikanischen Krieg.",
          nl: "Theodore Roosevelts beroemde uitspraak 'Spreek zacht en draag een grote stok' vatte zijn buitenlands beleid samen. Hij geloofde in vreedzaam onderhandelen terwijl hij sterke militaire paraatheid behield. Deze filosofie, 'Big Stick Diplomacy' genoemd, leidde zijn presidentschap. Roosevelt bemiddelde in de Russisch-Japanse Oorlog (won een Nobelprijs voor de Vrede), bouwde het Panamakanaal en breidde de Amerikaanse marine uit tot een mondiale macht. Hij stuurde de Great White Fleet op een wereldwijde tour om Amerikaanse zeemacht te demonstreren. Thuis was Roosevelt even krachtig: hij brak bedrijfsmonopolies op, richtte de FDA op, bemiddelde in kolenstakingen en kampte voor natuurbehoud. Hij was de jongste president op 42-jarige leeftijd, energiek en charismatisch. Roosevelt belichaamde het 'zware leven' dat hij predikte—boksen, jagen, verkennen en de Rough Riders leiden in de Spaans-Amerikaanse Oorlog."
        }
      }
    ],

    // Day 28 - October 28th: Statue of Liberty dedicated (1886), Cuban Missile Crisis ends (1962), Bill Gates born (1955)
    day28: [
      {
        question: {
          en: "The Statue of Liberty was dedicated on October 28, 1886. Which country gifted it to the United States?",
          es: "La Estatua de la Libertad se dedicó el 28 de octubre de 1886. ¿Qué país la regaló a Estados Unidos?",
          de: "Die Freiheitsstatue wurde am 28. Oktober 1886 eingeweiht. Welches Land schenkte sie den Vereinigten Staaten?",
          nl: "Het Vrijheidsbeeld werd op 28 oktober 1886 ingewijd. Welk land schonk het aan de Verenigde Staten?"
        },
        options: [
          { en: "England", es: "Inglaterra", de: "England", nl: "Engeland" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" }
        ],
        correctIndex: 1,
        explanation: {
          en: "France gifted the Statue of Liberty to the United States to commemorate the alliance between the two nations during the American Revolution and to celebrate America's centennial of independence. French sculptor Frédéric Auguste Bartholdi designed the statue, while Gustave Eiffel (of Eiffel Tower fame) engineered the internal iron framework. The statue was built in France, then disassembled and shipped to New York in 350 pieces. President Grover Cleveland dedicated it on October 28, 1886. Standing 305 feet tall from ground to torch, Lady Liberty became an iconic symbol of freedom and democracy. The seven spikes in her crown represent the seven continents and seas. Her torch symbolizes enlightenment, while the tablet in her left hand bears the date of American independence: July 4, 1776. For millions of immigrants arriving at nearby Ellis Island, the statue was their first glimpse of America and represented hope for a new life.",
          es: "Francia regaló la Estatua de la Libertad a Estados Unidos para conmemorar la alianza entre las dos naciones durante la Revolución Americana y celebrar el centenario de la independencia de América. El escultor francés Frédéric Auguste Bartholdi diseñó la estatua, mientras que Gustave Eiffel (famoso por la Torre Eiffel) diseñó la estructura interna de hierro. La estatua se construyó en Francia, luego se desmontó y se envió a Nueva York en 350 piezas. El presidente Grover Cleveland la dedicó el 28 de octubre de 1886. Con 305 pies de altura desde el suelo hasta la antorcha, Lady Liberty se convirtió en un símbolo icónico de libertad y democracia. Las siete púas de su corona representan los siete continentes y mares. Su antorcha simboliza la iluminación, mientras que la tableta en su mano izquierda lleva la fecha de la independencia americana: 4 de julio de 1776. Para millones de inmigrantes que llegaban a la cercana Ellis Island, la estatua fue su primer vistazo de América y representó esperanza de una nueva vida.",
          de: "Frankreich schenkte den Vereinigten Staaten die Freiheitsstatue zum Gedenken an das Bündnis zwischen den beiden Nationen während der Amerikanischen Revolution und zur Feier des hundertjährigen Bestehens der amerikanischen Unabhängigkeit. Der französische Bildhauer Frédéric Auguste Bartholdi entwarf die Statue, während Gustave Eiffel (berühmt für den Eiffelturm) das innere Eisengerüst konstruierte. Die Statue wurde in Frankreich gebaut, dann zerlegt und in 350 Teilen nach New York verschifft. Präsident Grover Cleveland weihte sie am 28. Oktober 1886 ein. Mit 305 Fuß Höhe vom Boden bis zur Fackel wurde Lady Liberty zu einem ikonischen Symbol für Freiheit und Demokratie. Die sieben Zacken ihrer Krone repräsentieren die sieben Kontinente und Meere. Ihre Fackel symbolisiert Erleuchtung, während die Tafel in ihrer linken Hand das Datum der amerikanischen Unabhängigkeit trägt: 4. Juli 1776. Für Millionen von Einwanderern, die auf der nahe gelegenen Ellis Island ankamen, war die Statue ihr erster Anblick von Amerika und repräsentierte Hoffnung auf ein neues Leben.",
          nl: "Frankrijk schonk het Vrijheidsbeeld aan de Verenigde Staten ter herdenking van de alliantie tussen beide naties tijdens de Amerikaanse Revolutie en om het honderdjarig bestaan van Amerika's onafhankelijkheid te vieren. De Franse beeldhouwer Frédéric Auguste Bartholdi ontwierp het beeld, terwijl Gustave Eijfel (beroemd van de Eiffeltoren) het interne ijzeren raamwerk ontwierp. Het beeld werd in Frankrijk gebouwd, vervolgens gedemonteerd en in 350 stukken naar New York verscheept. President Grover Cleveland wijdde het in op 28 oktober 1886. Met 305 voet hoog van de grond tot de fakkel werd Lady Liberty een iconisch symbool van vrijheid en democratie. De zeven punten in haar kroon vertegenwoordigen de zeven continenten en zeeën. Haar fakkel symboliseert verlichting, terwijl de tablet in haar linkerhand de datum van Amerikaanse onafhankelijkheid draagt: 4 juli 1776. Voor miljoenen immigranten die aankwamen op het nabijgelegen Ellis Island was het beeld hun eerste blik op Amerika en vertegenwoordigde het hoop op een nieuw leven."
        }
      },
      {
        question: {
          en: "The Cuban Missile Crisis ended on October 28, 1962. Which two superpowers were involved?",
          es: "La Crisis de los Misiles de Cuba terminó el 28 de octubre de 1962. ¿Qué dos superpotencias estuvieron involucradas?",
          de: "Die Kubakrise endete am 28. Oktober 1962. Welche zwei Supermächte waren beteiligt?",
          nl: "De Cubacrisis eindigde op 28 oktober 1962. Welke twee supermachten waren betrokken?"
        },
        options: [
          { en: "USA and China", es: "EE.UU. y China", de: "USA und China", nl: "VS en China" },
          { en: "USA and Soviet Union", es: "EE.UU. y Unión Soviética", de: "USA und Sowjetunion", nl: "VS en Sovjet-Unie" },
          { en: "Britain and France", es: "Gran Bretaña y Francia", de: "Großbritannien und Frankreich", nl: "Groot-Brittannië en Frankrijk" },
          { en: "Germany and Japan", es: "Alemania y Japón", de: "Deutschland und Japan", nl: "Duitsland en Japan" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Cuban Missile Crisis was a 13-day confrontation between the United States and the Soviet Union over Soviet nuclear missiles deployed in Cuba, just 90 miles from Florida. On October 28, 1962, Soviet leader Nikita Khrushchev agreed to remove the missiles in exchange for a U.S. pledge not to invade Cuba and the secret removal of American missiles from Turkey. This was the closest the Cold War came to nuclear war. President John F. Kennedy had imposed a naval 'quarantine' of Cuba to prevent more Soviet weapons from arriving. The crisis began when American U-2 spy planes discovered missile sites being constructed in Cuba. For nearly two weeks, the world held its breath as the superpowers engaged in tense negotiations. The peaceful resolution is considered a diplomatic triumph. The crisis led to the establishment of the Moscow-Washington hotline for direct communication and prompted both nations to pursue nuclear arms control treaties.",
          es: "La Crisis de los Misiles de Cuba fue una confrontación de 13 días entre Estados Unidos y la Unión Soviética por misiles nucleares soviéticos desplegados en Cuba, a solo 90 millas de Florida. El 28 de octubre de 1962, el líder soviético Nikita Jrushchov acordó retirar los misiles a cambio de una promesa de EE.UU. de no invadir Cuba y la retirada secreta de misiles estadounidenses de Turquía. Esta fue la vez que la Guerra Fría estuvo más cerca de la guerra nuclear. El presidente John F. Kennedy había impuesto una 'cuarentena' naval de Cuba para evitar que llegaran más armas soviéticas. La crisis comenzó cuando aviones espía U-2 estadounidenses descubrieron sitios de misiles en construcción en Cuba. Durante casi dos semanas, el mundo contuvo la respiración mientras las superpotencias participaban en tensas negociaciones. La resolución pacífica se considera un triunfo diplomático. La crisis llevó al establecimiento de la línea directa Moscú-Washington para comunicación directa y motivó a ambas naciones a buscar tratados de control de armas nucleares.",
          de: "Die Kubakrise war eine 13-tägige Konfrontation zwischen den Vereinigten Staaten und der Sowjetunion über sowjetische Atomraketen, die in Kuba stationiert waren, nur 90 Meilen von Florida entfernt. Am 28. Oktober 1962 erklärte sich der sowjetische Führer Nikita Chruschtschow bereit, die Raketen im Austausch für ein US-Versprechen abzuziehen, Kuba nicht zu überfallen, und die geheime Entfernung amerikanischer Raketen aus der Türkei. Dies war der Moment, in dem der Kalte Krieg einem Atomkrieg am nächsten kam. Präsident John F. Kennedy hatte eine Marine-'Quarantäne' von Kuba verhängt, um zu verhindern, dass weitere sowjetische Waffen ankamen. Die Krise begann, als amerikanische U-2-Spionageflugzeuge Raketenstützpunkte entdeckten, die in Kuba gebaut wurden. Fast zwei Wochen lang hielt die Welt den Atem an, während die Supermächte in angespannten Verhandlungen standen. Die friedliche Lösung gilt als diplomatischer Triumph. Die Krise führte zur Einrichtung der Moskau-Washington-Hotline für direkte Kommunikation und veranlasste beide Nationen, Verträge zur Kontrolle von Atomwaffen zu verfolgen.",
          nl: "De Cubacrisis was een 13 dagen durende confrontatie tussen de Verenigde Staten en de Sovjet-Unie over Sovjet-nucleaire raketten die in Cuba waren geplaatst, slechts 90 mijl van Florida. Op 28 oktober 1962 stemde Sovjet-leider Nikita Chroesjtsjov ermee in de raketten te verwijderen in ruil voor een Amerikaanse belofte om Cuba niet binnen te vallen en de geheime verwijdering van Amerikaanse raketten uit Turkije. Dit was het moment waarop de Koude Oorlog het dichtst bij een nucleaire oorlog kwam. President John F. Kennedy had een marine 'quarantaine' van Cuba ingesteld om te voorkomen dat er meer Sovjet-wapens aankwamen. De crisis begon toen Amerikaanse U-2 spionagevliegtuigen raketinstallaties ontdekten die in Cuba werden gebouwd. Bijna twee weken hield de wereld haar adem in terwijl de supermachten in gespannen onderhandelingen waren. De vreedzame oplossing wordt beschouwd als een diplomatieke triomf. De crisis leidde tot de instelling van de Moskou-Washington hotline voor directe communicatie en zette beide naties aan tot het nastreven van nucleaire wapenbeheerssingsverdragen."
        }
      },
      {
        question: {
          en: "Bill Gates was born on October 28, 1955. Which company did he co-found?",
          es: "Bill Gates nació el 28 de octubre de 1955. ¿Qué empresa cofundó?",
          de: "Bill Gates wurde am 28. Oktober 1955 geboren. Welche Firma hat er mitbegründet?",
          nl: "Bill Gates werd geboren op 28 oktober 1955. Welk bedrijf heeft hij mede opgericht?"
        },
        options: [
          { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" },
          { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" },
          { en: "Google", es: "Google", de: "Google", nl: "Google" },
          { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Bill Gates co-founded Microsoft with Paul Allen in 1975, transforming personal computing and becoming one of the world's wealthiest individuals. Microsoft's MS-DOS and later Windows operating systems dominated the PC market for decades. Gates served as CEO until 2000 and remained involved until 2020. His vision of 'a computer on every desk and in every home' seemed audacious in the 1970s but became reality. Microsoft Office suite (Word, Excel, PowerPoint) became essential business tools. Gates was known for his competitive drive and technical brilliance. In 2000, he and his wife Melinda established the Bill & Melinda Gates Foundation, the world's largest private charitable foundation, focusing on global health, education, and poverty. The foundation has donated over $50 billion to causes including vaccine development, malaria eradication, and improving education. Gates exemplifies how technology entrepreneurship can create both immense wealth and opportunities for philanthropy on an unprecedented scale.",
          es: "Bill Gates cofundó Microsoft con Paul Allen en 1975, transformando la computación personal y convirtiéndose en uno de los individuos más ricos del mundo. El MS-DOS de Microsoft y posteriormente los sistemas operativos Windows dominaron el mercado de PC durante décadas. Gates fue CEO hasta 2000 y permaneció involucrado hasta 2020. Su visión de 'una computadora en cada escritorio y en cada hogar' parecía audaz en la década de 1970 pero se convirtió en realidad. La suite Microsoft Office (Word, Excel, PowerPoint) se convirtió en herramientas empresariales esenciales. Gates era conocido por su impulso competitivo y brillantez técnica. En 2000, él y su esposa Melinda establecieron la Fundación Bill & Melinda Gates, la fundación caritativa privada más grande del mundo, enfocándose en salud global, educación y pobreza. La fundación ha donado más de $50 mil millones a causas que incluyen desarrollo de vacunas, erradicación de la malaria y mejora de la educación. Gates ejemplifica cómo el emprendimiento tecnológico puede crear tanto riqueza inmensa como oportunidades para filantropía a una escala sin precedentes.",
          de: "Bill Gates gründete 1975 zusammen mit Paul Allen Microsoft, transformierte das Personal Computing und wurde zu einem der reichsten Menschen der Welt. Microsofts MS-DOS und später Windows-Betriebssysteme dominierten jahrzehntelang den PC-Markt. Gates war bis 2000 CEO und blieb bis 2020 involviert. Seine Vision von 'einem Computer auf jedem Schreibtisch und in jedem Zuhause' schien in den 1970er Jahren kühn, wurde aber Realität. Die Microsoft Office-Suite (Word, Excel, PowerPoint) wurde zu unverzichtbaren Geschäftswerkzeugen. Gates war bekannt für seinen Wettbewerbsgeist und technische Brillanz. Im Jahr 2000 gründeten er und seine Frau Melinda die Bill & Melinda Gates Foundation, die weltweit größte private Wohltätigkeitsstiftung, mit Schwerpunkt auf globaler Gesundheit, Bildung und Armut. Die Stiftung hat über 50 Milliarden Dollar für Anliegen gespendet, darunter Impfstoffentwicklung, Malaria-Bekämpfung und Bildungsverbesserung. Gates verkörpert, wie Tech-Unternehmertum sowohl immensen Reichtum als auch Möglichkeiten für Philanthropie in beispiellosem Ausmaß schaffen kann.",
          nl: "Bill Gates richtte in 1975 samen met Paul Allen Microsoft op, transformeerde personal computing en werd een van de rijkste mensen ter wereld. Microsofts MS-DOS en later Windows-besturingssystemen domineerden decennialang de PC-markt. Gates was tot 2000 CEO en bleef betrokken tot 2020. Zijn visie van 'een computer op elk bureau en in elk huis' leek gewaagd in de jaren 1970 maar werd werkelijkheid. De Microsoft Office suite (Word, Excel, PowerPoint) werd essentiële zakelijke tools. Gates stond bekend om zijn competitieve drive en technische scherpzinnigheid. In 2000 richtten hij en zijn vrouw Melinda de Bill & Melinda Gates Foundation op, 's werelds grootste private liefdadigheidsorganisatie, gericht op mondiale gezondheid, onderwijs en armoede. De stichting heeft meer dan $50 miljard gedoneerd aan doelen waaronder vaccinontwikkeling, malaria-uitroeiing en verbetering van onderwijs. Gates belichaamt hoe technologie-ondernemerschap zowel immense rijkdom als mogelijkheden voor filantropie op ongekende schaal kan creëren."
        }
      },
      {
        question: {
          en: "What is inscribed on the tablet held by the Statue of Liberty?",
          es: "¿Qué está inscrito en la tableta que sostiene la Estatua de la Libertad?",
          de: "Was ist auf der Tafel der Freiheitsstatue eingraviert?",
          nl: "Wat staat er gegraveerd op de tablet die het Vrijheidsbeeld vasthoudt?"
        },
        options: [
          { en: "The Declaration of Independence", es: "La Declaración de Independencia", de: "Die Unabhängigkeitserklärung", nl: "De Onafhankelijkheidsverklaring" },
          { en: "The date July 4, 1776", es: "La fecha 4 de julio de 1776", de: "Das Datum 4. Juli 1776", nl: "De datum 4 juli 1776" },
          { en: "The U.S. Constitution", es: "La Constitución de EE.UU.", de: "Die US-Verfassung", nl: "De Amerikaanse Grondwet" },
          { en: "The Gettysburg Address", es: "El Discurso de Gettysburg", de: "Die Gettysburg-Rede", nl: "De Gettysburg Rede" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Statue of Liberty holds a tablet inscribed with 'JULY IV MDCCLXXVI' (July 4, 1776) in Roman numerals, commemorating American Independence Day. This date represents America's Declaration of Independence from British rule. The tablet symbolizes the law and the foundation of American democracy. Liberty's full name is 'Liberty Enlightening the World,' reflecting enlightenment ideals of reason and liberty that inspired both the American and French revolutions. The statue's copper exterior has oxidized to its famous green patina. At her feet lie broken chains representing freedom from oppression. The statue was designated a UNESCO World Heritage Site in 1984. Standing on Liberty Island in New York Harbor, she has welcomed millions of immigrants and visitors for over 135 years, embodying America's promise of freedom and opportunity.",
          es: "La Estatua de la Libertad sostiene una tableta inscrita con 'JULY IV MDCCLXXVI' (4 de julio de 1776) en números romanos, conmemorando el Día de la Independencia estadounidense. Esta fecha representa la Declaración de Independencia de América del dominio británico. La tableta simboliza la ley y el fundamento de la democracia estadounidense. El nombre completo de Libertad es 'Libertad Iluminando al Mundo', reflejando los ideales de iluminación de razón y libertad que inspiraron tanto las revoluciones estadounidense como francesa. El exterior de cobre de la estatua se ha oxidado a su famosa pátina verde. A sus pies yacen cadenas rotas que representan la libertad de la opresión. La estatua fue designada Patrimonio de la Humanidad por la UNESCO en 1984. De pie en Liberty Island en el puerto de Nueva York, ha dado la bienvenida a millones de inmigrantes y visitantes durante más de 135 años, encarnando la promesa de libertad y oportunidad de América.",
          de: "Die Freiheitsstatue hält eine Tafel mit der Inschrift 'JULY IV MDCCLXXVI' (4. Juli 1776) in römischen Ziffern, die den amerikanischen Unabhängigkeitstag gedenkt. Dieses Datum repräsentiert Amerikas Unabhängigkeitserklärung von britischer Herrschaft. Die Tafel symbolisiert das Gesetz und die Grundlage der amerikanischen Demokratie. Libertys vollständiger Name ist 'Liberty Enlightening the World' (Freiheit, die Welt erleuchtend), was die Aufklärungsideale von Vernunft und Freiheit widerspiegelt, die sowohl die amerikanische als auch die französische Revolution inspirierten. Das kupferne Äußere der Statue hat sich zu ihrer berühmten grünen Patina oxidiert. Zu ihren Füßen liegen zerbrochene Ketten, die Freiheit von Unterdrückung symbolisieren. Die Statue wurde 1984 zum UNESCO-Weltkulturerbe erklärt. Sie steht auf Liberty Island im New Yorker Hafen und hat über 135 Jahre lang Millionen von Einwanderern und Besuchern willkommen geheißen und verkörpert Amerikas Versprechen von Freiheit und Gelegenheit.",
          nl: "Het Vrijheidsbeeld houdt een tablet vast met de inscriptie 'JULY IV MDCCLXXVI' (4 juli 1776) in Romeinse cijfers, ter herdenking van de Amerikaanse Onafhankelijkheidsdag. Deze datum vertegenwoordigt Amerika's Onafhankelijkheidsverklaring van Britse overheersing. De tablet symboliseert de wet en het fundament van de Amerikaanse democratie. Liberty's volledige naam is 'Liberty Enlightening the World' (Vrijheid Verlicht de Wereld), wat verlichtingsidealen van rede en vrijheid weerspiegelt die zowel de Amerikaanse als Franse revolutie inspireerden. Het koperen exterieur van het beeld is geoxideerd tot zijn beroemde groene patina. Aan haar voeten liggen gebroken kettingen die vrijheid van onderdrukking vertegenwoordigen. Het beeld werd in 1984 aangewezen als UNESCO Werelderfgoed. Staand op Liberty Island in de haven van New York heeft ze meer dan 135 jaar miljoenen immigranten en bezoekers verwelkomd, en belichaamt Amerika's belofte van vrijheid en kansen."
        }
      },
      {
        question: {
          en: "How many days did the Cuban Missile Crisis last?",
          es: "¿Cuántos días duró la Crisis de los Misiles de Cuba?",
          de: "Wie viele Tage dauerte die Kubakrise?",
          nl: "Hoeveel dagen duurde de Cubacrisis?"
        },
        options: [
          { en: "7 days", es: "7 días", de: "7 Tage", nl: "7 dagen" },
          { en: "13 days", es: "13 días", de: "13 Tage", nl: "13 dagen" },
          { en: "21 days", es: "21 días", de: "21 Tage", nl: "21 dagen" },
          { en: "30 days", es: "30 días", de: "30 Tage", nl: "30 dagen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Cuban Missile Crisis lasted exactly 13 days, from October 16 to October 28, 1962. It began when American reconnaissance photos revealed Soviet missile installations in Cuba and ended when Khrushchev agreed to remove them. Those 13 days were among the most dangerous in human history, with the world on the brink of nuclear war. President Kennedy convened a secret ExComm (Executive Committee) to manage the crisis. Options ranged from air strikes to invasion to diplomacy. Kennedy chose a naval blockade (called a 'quarantine' to avoid the legal implications of 'blockade'). At the height of tension, Soviet ships approached the blockade line while carrying missiles—a confrontation that could have triggered war. Secretary of State Dean Rusk famously said, 'We're eyeball to eyeball, and I think the other fellow just blinked,' when Soviet ships turned back. The crisis taught both superpowers the importance of communication and compromise, ultimately making the world safer through subsequent arms control agreements.",
          es: "La Crisis de los Misiles de Cuba duró exactamente 13 días, del 16 al 28 de octubre de 1962. Comenzó cuando fotos de reconocimiento estadounidenses revelaron instalaciones de misiles soviéticos en Cuba y terminó cuando Jrushchov acordó retirarlos. Esos 13 días fueron de los más peligrosos de la historia humana, con el mundo al borde de la guerra nuclear. El presidente Kennedy convocó un ExComm secreto (Comité Ejecutivo) para manejar la crisis. Las opciones iban desde ataques aéreos hasta invasión hasta diplomacia. Kennedy eligió un bloqueo naval (llamado 'cuarentena' para evitar las implicaciones legales de 'bloqueo'). En el momento de mayor tensión, barcos soviéticos se acercaron a la línea de bloqueo llevando misiles, una confrontación que podría haber desencadenado la guerra. El Secretario de Estado Dean Rusk dijo famosamente: 'Estamos cara a cara, y creo que el otro tipo acaba de parpadear', cuando los barcos soviéticos retrocedieron. La crisis enseñó a ambas superpotencias la importancia de la comunicación y el compromiso, haciendo finalmente al mundo más seguro a través de acuerdos posteriores de control de armas.",
          de: "Die Kubakrise dauerte genau 13 Tage, vom 16. bis 28. Oktober 1962. Sie begann, als amerikanische Aufklärungsfotos sowjetische Raketeninstallationen in Kuba enthüllten, und endete, als Chruschtschow zustimmte, sie zu entfernen. Diese 13 Tage gehörten zu den gefährlichsten in der Menschheitsgeschichte, mit der Welt am Rande eines Atomkrieges. Präsident Kennedy berief ein geheimes ExComm (Exekutivkomitee) ein, um die Krise zu bewältigen. Die Optionen reichten von Luftangriffen über Invasion bis zu Diplomatie. Kennedy wählte eine Seeblockade (als 'Quarantäne' bezeichnet, um die rechtlichen Implikationen von 'Blockade' zu vermeiden). Auf dem Höhepunkt der Spannung näherten sich sowjetische Schiffe der Blockadelinie und trugen Raketen—eine Konfrontation, die einen Krieg hätte auslösen können. Außenminister Dean Rusk sagte berühmt: 'Wir schauen uns in die Augen, und ich glaube, der andere hat gerade geblinzelt', als sowjetische Schiffe umdrehten. Die Krise lehrte beide Supermächte die Bedeutung von Kommunikation und Kompromiss und machte die Welt durch nachfolgende Rüstungskontrollabkommen letztlich sicherer.",
          nl: "De Cubacrisis duurde precies 13 dagen, van 16 tot 28 oktober 1962. Het begon toen Amerikaanse verkenningsfoto's Sovjet-raketinstallaties in Cuba onthulden en eindigde toen Chroesjtsjov ermee instemde ze te verwijderen. Die 13 dagen behoorden tot de gevaarlijkste in de menselijke geschiedenis, met de wereld op de rand van nucleaire oorlog. President Kennedy riep een geheim ExComm (Executief Comité) bijeen om de crisis te beheren. Opties varieerden van luchtaanvallen tot invasie tot diplomatie. Kennedy koos voor een zeeblokkade (een 'quarantaine' genoemd om de juridische implicaties van 'blokkade' te vermijden). Op het hoogtepunt van de spanning naderden Sovjet-schepen de blokkadelijn terwijl ze raketten vervoerden—een confrontatie die oorlog had kunnen veroorzaken. Minister van Buitenlandse Zaken Dean Rusk zei beroemd: 'We kijken elkaar in de ogen, en ik denk dat de ander net heeft geknipperd', toen Sovjet-schepen omkeerden. De crisis leerde beide supermachten het belang van communicatie en compromis, en maakte de wereld uiteindelijk veiliger door daaropvolgende wapenbeheersingsakkoorden."
        }
      }
    ],

    // Day 29 - October 29th: Stock market crashes / Black Tuesday (1929), Turkey becomes republic (1923), Bob Ross born (1942)
    day29: [
      {
        question: {
          en: "On October 29, 1929, the U.S. stock market crashed in an event known as Black Tuesday. What major economic crisis did this trigger?",
          es: "El 29 de octubre de 1929, el mercado de valores de EE.UU. se desplomó en un evento conocido como Martes Negro. ¿Qué gran crisis económica desencadenó esto?",
          de: "Am 29. Oktober 1929 brach der US-Aktienmarkt in einem Ereignis zusammen, das als Schwarzer Dienstag bekannt ist. Welche große Wirtschaftskrise löste dies aus?",
          nl: "Op 29 oktober 1929 stortte de Amerikaanse aandelenmarkt in tijdens een gebeurtenis bekend als Zwarte Dinsdag. Welke grote economische crisis veroorzaakte dit?"
        },
        options: [
          { en: "The Oil Crisis", es: "La Crisis del Petróleo", de: "Die Ölkrise", nl: "De Oliecrisis" },
          { en: "The Industrial Revolution", es: "La Revolución Industrial", de: "Die Industrielle Revolution", nl: "De Industriële Revolutie" },
          { en: "The Dot-com Bubble", es: "La Burbuja de las puntocom", de: "Die Dotcom-Blase", nl: "De Dotcom-zeepbel" },
          { en: "The Great Depression", es: "La Gran Depresión", de: "Die Große Depression", nl: "De Grote Depressie" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Black Tuesday triggered the Great Depression, the worst economic downturn in modern history. On October 29, 1929, the Dow Jones Industrial Average fell 12%, with 16 million shares traded—a record. Investors lost billions. In the preceding week, the market had already dropped significantly on 'Black Thursday' (Oct 24). The crash resulted from speculation, overvalued stocks, and easy credit. Banks failed as panicked depositors withdrew savings. Unemployment soared to 25%. The Depression lasted a decade, ending only with World War II mobilization. President Herbert Hoover's limited response was widely criticized. His successor, Franklin D. Roosevelt, implemented the New Deal—massive government programs including Social Security, banking reforms, and public works projects. The crash led to crucial financial regulations: the Securities Exchange Commission (SEC), Federal Deposit Insurance Corporation (FDIC), and restrictions on margin trading. These reforms helped prevent future collapses of such magnitude.",
          es: "El Martes Negro desencadenó la Gran Depresión, la peor crisis económica de la historia moderna. El 29 de octubre de 1929, el Dow Jones Industrial Average cayó un 12%, con 16 millones de acciones negociadas, un récord. Los inversores perdieron miles de millones. En la semana anterior, el mercado ya había caído significativamente en el 'Jueves Negro' (24 de octubre). El colapso resultó de especulación, acciones sobrevaluadas y crédito fácil. Los bancos quebraron cuando depositantes en pánico retiraron sus ahorros. El desempleo se disparó al 25%. La Depresión duró una década, terminando solo con la movilización de la Segunda Guerra Mundial. La respuesta limitada del presidente Herbert Hoover fue ampliamente criticada. Su sucesor, Franklin D. Roosevelt, implementó el New Deal: programas masivos del gobierno que incluyen Seguridad Social, reformas bancarias y proyectos de obras públicas. El colapso llevó a regulaciones financieras cruciales: la Comisión de Bolsa y Valores (SEC), la Corporación Federal de Seguro de Depósitos (FDIC) y restricciones al comercio de margen. Estas reformas ayudaron a prevenir futuros colapsos de tal magnitud.",
          de: "Der Schwarze Dienstag löste die Große Depression aus, den schlimmsten wirtschaftlichen Abschwung der modernen Geschichte. Am 29. Oktober 1929 fiel der Dow Jones Industrial Average um 12%, mit 16 Millionen gehandelten Aktien—ein Rekord. Investoren verloren Milliarden. In der vorangegangenen Woche war der Markt bereits am 'Schwarzen Donnerstag' (24. Oktober) erheblich gefallen. Der Crash resultierte aus Spekulation, überbewerteten Aktien und leichtem Kredit. Banken scheiterten, als panische Einleger ihre Ersparnisse abhoben. Die Arbeitslosigkeit stieg auf 25%. Die Depression dauerte ein Jahrzehnt und endete erst mit der Mobilisierung für den Zweiten Weltkrieg. Die begrenzte Reaktion von Präsident Herbert Hoover wurde weithin kritisiert. Sein Nachfolger Franklin D. Roosevelt implementierte den New Deal—massive Regierungsprogramme einschließlich Sozialversicherung, Bankenreformen und öffentliche Bauprojekte. Der Crash führte zu entscheidenden Finanzvorschriften: der Securities Exchange Commission (SEC), der Federal Deposit Insurance Corporation (FDIC) und Beschränkungen des Margin-Handels. Diese Reformen halfen, zukünftige Zusammenbrüche solchen Ausmaßes zu verhindern.",
          nl: "Zwarte Dinsdag veroorzaakte de Grote Depressie, de ergste economische neergang in de moderne geschiedenis. Op 29 oktober 1929 daalde de Dow Jones Industrial Average met 12%, waarbij 16 miljoen aandelen werden verhandeld—een record. Investeerders verloren miljarden. In de voorafgaande week was de markt al aanzienlijk gedaald op 'Zwarte Donderdag' (24 oktober). De crash was het gevolg van speculatie, overgewaardeerde aandelen en gemakkelijk krediet. Banken faalden toen panische spaarders hun spaargeld opnamen. Werkloosheid steeg naar 25%. De Depressie duurde een decennium en eindigde pas met de mobilisatie voor de Tweede Wereldoorlog. De beperkte reactie van president Herbert Hoover werd breed bekritiseerd. Zijn opvolger Franklin D. Roosevelt implementeerde de New Deal—massale overheidsprogramma's waaronder sociale zekerheid, bankhervormingen en openbare werken. De crash leidde tot cruciale financiële regelgeving: de Securities Exchange Commission (SEC), de Federal Deposit Insurance Corporation (FDIC) en beperkingen op margin trading. Deze hervormingen hielpen toekomstige crashes van dergelijke omvang te voorkomen."
        }
      },
      {
        question: {
          en: "Turkey became a republic on October 29, 1923. Who was its first president?",
          es: "Turquía se convirtió en república el 29 de octubre de 1923. ¿Quién fue su primer presidente?",
          de: "Die Türkei wurde am 29. Oktober 1923 eine Republik. Wer war ihr erster Präsident?",
          nl: "Turkije werd een republiek op 29 oktober 1923. Wie was de eerste president?"
        },
        options: [
          { en: "Sultan Mehmed VI", es: "Sultán Mehmed VI", de: "Sultan Mehmed VI", nl: "Sultan Mehmed VI" },
          { en: "Süleyman Demirel", es: "Süleyman Demirel", de: "Süleyman Demirel", nl: "Süleyman Demirel" },
          { en: "Mustafa Kemal Atatürk", es: "Mustafa Kemal Atatürk", de: "Mustafa Kemal Atatürk", nl: "Mustafa Kemal Atatürk" },
          { en: "İsmet İnönü", es: "İsmet İnönü", de: "İsmet İnönü", nl: "İsmet İnönü" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Mustafa Kemal Atatürk became Turkey's first president when the republic was proclaimed on October 29, 1923, replacing the Ottoman Empire that had ruled for over 600 years. Atatürk led sweeping modernization reforms: replacing Islamic law with secular civil code, adopting the Latin alphabet, granting women voting rights, and separating religion from state. He abolished the Caliphate, ending centuries of Islamic leadership. Turkey's capital moved from Istanbul to Ankara. Atatürk promoted Western dress, banned the fez, and encouraged education. He established a parliamentary democracy and transformed Turkey from a collapsing empire into a modern nation-state. 'Atatürk' means 'Father of Turks,' a title parliament granted him. He served as president until his death in 1938. October 29 is celebrated annually as Republic Day, Turkey's most important national holiday. Atatürk's portrait appears on currency and in public buildings. His reforms remain controversial—praised as progressive modernization by some, criticized as forced Westernization by others.",
          es: "Mustafa Kemal Atatürk se convirtió en el primer presidente de Turquía cuando se proclamó la república el 29 de octubre de 1923, reemplazando al Imperio Otomano que había gobernado durante más de 600 años. Atatürk lideró reformas de modernización radicales: reemplazar la ley islámica con código civil secular, adoptar el alfabeto latino, otorgar derechos de voto a las mujeres y separar religión del estado. Abolió el Califato, terminando siglos de liderazgo islámico. La capital de Turquía se mudó de Estambul a Ankara. Atatürk promovió la vestimenta occidental, prohibió el fez y alentó la educación. Estableció una democracia parlamentaria y transformó Turquía de un imperio en colapso a un estado-nación moderno. 'Atatürk' significa 'Padre de los Turcos', un título que le otorgó el parlamento. Sirvió como presidente hasta su muerte en 1938. El 29 de octubre se celebra anualmente como Día de la República, la festividad nacional más importante de Turquía. El retrato de Atatürk aparece en la moneda y en edificios públicos. Sus reformas siguen siendo controvertidas: elogiadas como modernización progresiva por algunos, criticadas como occidentalización forzada por otros.",
          de: "Mustafa Kemal Atatürk wurde der erste Präsident der Türkei, als die Republik am 29. Oktober 1923 ausgerufen wurde und das Osmanische Reich ersetzte, das über 600 Jahre regiert hatte. Atatürk führte umfassende Modernisierungsreformen durch: Ersetzung des islamischen Rechts durch ein säkulares Zivilgesetzbuch, Einführung des lateinischen Alphabets, Gewährung des Wahlrechts für Frauen und Trennung von Religion und Staat. Er schaffte das Kalifat ab und beendete Jahrhunderte islamischer Führung. Die Hauptstadt der Türkei zog von Istanbul nach Ankara. Atatürk förderte westliche Kleidung, verbot den Fes und förderte Bildung. Er etablierte eine parlamentarische Demokratie und verwandelte die Türkei von einem zusammenbrechenden Reich in einen modernen Nationalstaat. 'Atatürk' bedeutet 'Vater der Türken', ein Titel, den ihm das Parlament verlieh. Er diente bis zu seinem Tod 1938 als Präsident. Der 29. Oktober wird jährlich als Tag der Republik gefeiert, der wichtigste Nationalfeiertag der Türkei. Atatürks Porträt erscheint auf Währung und in öffentlichen Gebäuden. Seine Reformen bleiben umstritten—von einigen als progressive Modernisierung gelobt, von anderen als erzwungene Verwestlichung kritisiert.",
          nl: "Mustafa Kemal Atatürk werd de eerste president van Turkije toen de republiek werd uitgeroepen op 29 oktober 1923, ter vervanging van het Ottomaanse Rijk dat meer dan 600 jaar had geregeerd. Atatürk leidde ingrijpende moderniseringsreformen: vervanging van islamitisch recht door seculier burgerlijk recht, invoering van het Latijnse alfabet, stemrecht voor vrouwen en scheiding van religie en staat. Hij schafte het kalifaat af en beëindigde eeuwen islamitisch leiderschap. De hoofdstad van Turkije verhuisde van Istanbul naar Ankara. Atatürk promootte westerse kleding, verbood de fez en moedigde onderwijs aan. Hij vestigde een parlementaire democratie en transformeerde Turkije van een instortend rijk naar een moderne natiestaat. 'Atatürk' betekent 'Vader van de Turken', een titel die het parlement hem verleende. Hij diende als president tot zijn dood in 1938. 29 oktober wordt jaarlijks gevierd als Dag van de Republiek, Turkije's belangrijkste nationale feestdag. Atatürks portret verschijnt op valuta en in openbare gebouwen. Zijn hervormingen blijven controversieel—door sommigen geprezen als progressieve modernisering, door anderen bekritiseerd als gedwongen verwestersing."
        }
      },
      {
        question: {
          en: "Bob Ross, the famous painter and TV host, was born on October 29, 1942. What was the name of his PBS television show?",
          es: "Bob Ross, el famoso pintor y presentador de TV, nació el 29 de octubre de 1942. ¿Cuál era el nombre de su programa de televisión de PBS?",
          de: "Bob Ross, der berühmte Maler und TV-Moderator, wurde am 29. Oktober 1942 geboren. Wie hieß seine PBS-Fernsehsendung?",
          nl: "Bob Ross, de beroemde schilder en tv-presentator, werd geboren op 29 oktober 1942. Wat was de naam van zijn PBS-televisieprogramma?"
        },
        options: [
          { en: "Happy Little Trees", es: "Arbolitos Felices", de: "Glückliche kleine Bäume", nl: "Blije Boompjes" },
          { en: "Painting with Bob", es: "Pintando con Bob", de: "Malen mit Bob", nl: "Schilderen met Bob" },
          { en: "The Joy of Painting", es: "La Alegría de Pintar", de: "Die Freude am Malen", nl: "De Vreugde van Schilderen" },
          { en: "The Art of Landscapes", es: "El Arte de los Paisajes", de: "Die Kunst der Landschaften", nl: "De Kunst van Landschappen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "'The Joy of Painting' aired from 1983 to 1994, with Bob Ross completing over 400 paintings on camera in 403 episodes. His soothing voice, encouraging words, and wet-on-wet oil painting technique made art accessible to millions. Ross popularized 'happy little trees,' 'happy accidents,' and the philosophy that 'we don't make mistakes, just happy accidents.' Before becoming an artist, he served 20 years in the U.S. Air Force. His signature permed hairstyle, which he disliked but kept for branding, became iconic. Ross typically completed paintings in under 30 minutes using his quick alla prima technique. He donated or gave away most paintings, rarely selling them. After his death in 1995 from lymphoma at age 52, Ross's popularity surged with internet culture. His calming presence became therapeutic viewing. Twitch streamed all episodes in marathon sessions. His image and brand remain valuable, though legal disputes over his estate continue. Ross exemplifies how genuine passion and kindness can create lasting cultural impact.",
          es: "'La Alegría de Pintar' se transmitió de 1983 a 1994, con Bob Ross completando más de 400 pinturas en cámara en 403 episodios. Su voz relajante, palabras de aliento y técnica de pintura al óleo húmedo sobre húmedo hicieron el arte accesible a millones. Ross popularizó los 'arbolitos felices', los 'accidentes felices' y la filosofía de que 'no cometemos errores, solo accidentes felices'. Antes de ser artista, sirvió 20 años en la Fuerza Aérea de EE.UU. Su característico peinado permanente, que no le gustaba pero mantuvo por la marca, se volvió icónico. Ross típicamente completaba pinturas en menos de 30 minutos usando su rápida técnica alla prima. Donó o regaló la mayoría de las pinturas, rara vez vendiéndolas. Después de su muerte en 1995 por linfoma a los 52 años, la popularidad de Ross aumentó con la cultura de internet. Su presencia calmante se convirtió en visualización terapéutica. Twitch transmitió todos los episodios en maratones. Su imagen y marca siguen siendo valiosas, aunque continúan las disputas legales sobre su patrimonio. Ross ejemplifica cómo la pasión genuina y la bondad pueden crear un impacto cultural duradero.",
          de: "'Die Freude am Malen' lief von 1983 bis 1994, wobei Bob Ross über 400 Gemälde vor der Kamera in 403 Episoden vollendete. Seine beruhigende Stimme, ermutigende Worte und Nass-in-Nass-Ölmaltechnik machten Kunst für Millionen zugänglich. Ross popularisierte 'glückliche kleine Bäume', 'glückliche Unfälle' und die Philosophie, dass 'wir keine Fehler machen, nur glückliche Unfälle'. Bevor er Künstler wurde, diente er 20 Jahre in der US Air Force. Seine charakteristische Dauerwellenfrisur, die er nicht mochte, aber fürs Branding behielt, wurde ikonisch. Ross vollendete Gemälde typischerweise in unter 30 Minuten mit seiner schnellen Alla-Prima-Technik. Er spendete oder verschenkte die meisten Gemälde und verkaufte sie selten. Nach seinem Tod 1995 an Lymphomen im Alter von 52 Jahren stieg Ross' Popularität mit der Internetkultur. Seine beruhigende Präsenz wurde therapeutisches Fernsehen. Twitch streamte alle Episoden in Marathon-Sessions. Sein Image und seine Marke bleiben wertvoll, obwohl Rechtsstreitigkeiten über seinen Nachlass andauern. Ross zeigt, wie echte Leidenschaft und Freundlichkeit dauerhaften kulturellen Einfluss schaffen können.",
          nl: "'De Vreugde van Schilderen' werd uitgezonden van 1983 tot 1994, waarbij Bob Ross meer dan 400 schilderijen voor de camera voltooide in 403 afleveringen. Zijn rustgevende stem, bemoedigende woorden en nat-in-nat olieverftechniek maakten kunst toegankelijk voor miljoenen. Ross populariseerde 'blije boompjes', 'blije ongevallen' en de filosofie dat 'we geen fouten maken, alleen blije ongevallen'. Voordat hij kunstenaar werd, diende hij 20 jaar in de Amerikaanse luchtmacht. Zijn kenmerkende permanent, die hij niet leuk vond maar behield voor branding, werd iconisch. Ross voltooide schilderijen doorgaans in minder dan 30 minuten met zijn snelle alla prima techniek. Hij doneerde of gaf de meeste schilderijen weg en verkocht ze zelden. Na zijn dood in 1995 aan lymfoom op 52-jarige leeftijd steeg Ross' populariteit met internetcultuur. Zijn kalme aanwezigheid werd therapeutisch kijken. Twitch streamde alle afleveringen in marathonsessies. Zijn imago en merk blijven waardevol, hoewel juridische geschillen over zijn nalatenschap doorgaan. Ross belichaamt hoe echte passie en vriendelijkheid blijvende culturele impact kunnen creëren."
        }
      },
      {
        question: {
          en: "What percentage did the stock market fall on Black Tuesday, October 29, 1929?",
          es: "¿Qué porcentaje cayó el mercado de valores el Martes Negro, 29 de octubre de 1929?",
          de: "Um wie viel Prozent fiel der Aktienmarkt am Schwarzen Dienstag, 29. Oktober 1929?",
          nl: "Hoeveel procent daalde de aandelenmarkt op Zwarte Dinsdag, 29 oktober 1929?"
        },
        options: [
          { en: "5%", es: "5%", de: "5%", nl: "5%" },
          { en: "8%", es: "8%", de: "8%", nl: "8%" },
          { en: "12%", es: "12%", de: "12%", nl: "12%" },
          { en: "20%", es: "20%", de: "20%", nl: "20%" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The stock market fell 12% on Black Tuesday, with the Dow Jones Industrial Average dropping from 260 to 230 points. This followed Black Thursday's 11% decline five days earlier. Within a month, investors had lost $30 billion—equivalent to over $400 billion today. By 1932, stocks had lost 89% of their value from their 1929 peak. The crash exposed fundamental weaknesses: excessive speculation funded by margin loans, overproduction in agriculture and industry, wealth inequality, and an overleveraged banking system. Many bought stocks with only 10% down, borrowing the rest. When prices fell, margin calls forced sales, creating a downward spiral. Banks that had invested heavily in stocks failed, taking depositors' savings. The lack of deposit insurance meant life savings vanished overnight. Over 9,000 banks failed during the Depression. The crash taught crucial lessons about market regulation, bank safety, and the interconnectedness of financial systems—lessons that shaped modern economic policy and financial oversight.",
          es: "El mercado de valores cayó un 12% el Martes Negro, con el Dow Jones Industrial Average cayendo de 260 a 230 puntos. Esto siguió la caída del 11% del Jueves Negro cinco días antes. En un mes, los inversores habían perdido $30 mil millones, equivalentes a más de $400 mil millones hoy. Para 1932, las acciones habían perdido el 89% de su valor desde su pico de 1929. El colapso expuso debilidades fundamentales: especulación excesiva financiada por préstamos de margen, sobreproducción en agricultura e industria, desigualdad de riqueza y un sistema bancario sobreapalancado. Muchos compraban acciones con solo el 10% de entrada, pidiendo prestado el resto. Cuando los precios cayeron, las llamadas de margen forzaron ventas, creando una espiral descendente. Los bancos que habían invertido fuertemente en acciones quebraron, llevándose los ahorros de los depositantes. La falta de seguro de depósitos significaba que los ahorros de toda una vida desaparecían de la noche a la mañana. Más de 9,000 bancos quebraron durante la Depresión. El colapso enseñó lecciones cruciales sobre regulación del mercado, seguridad bancaria y la interconexión de los sistemas financieros, lecciones que dieron forma a la política económica moderna y la supervisión financiera.",
          de: "Der Aktienmarkt fiel am Schwarzen Dienstag um 12%, wobei der Dow Jones Industrial Average von 260 auf 230 Punkte fiel. Dies folgte auf den 11%igen Rückgang des Schwarzen Donnerstags fünf Tage zuvor. Innerhalb eines Monats hatten Investoren 30 Milliarden Dollar verloren—das entspricht heute über 400 Milliarden Dollar. Bis 1932 hatten Aktien 89% ihres Wertes von ihrem Höhepunkt 1929 verloren. Der Crash legte fundamentale Schwächen offen: übermäßige Spekulation finanziert durch Margin-Darlehen, Überproduktion in Landwirtschaft und Industrie, Vermögensungleichheit und ein überhebeltes Bankensystem. Viele kauften Aktien mit nur 10% Anzahlung und liehen sich den Rest. Als die Preise fielen, zwangen Margin Calls zu Verkäufen und schufen eine Abwärtsspirale. Banken, die stark in Aktien investiert hatten, scheiterten und nahmen die Ersparnisse der Einleger mit. Das Fehlen von Einlagensicherung bedeutete, dass Lebensersparnisse über Nacht verschwanden. Über 9.000 Banken scheiterten während der Depression. Der Crash lehrte entscheidende Lektionen über Marktregulierung, Bankensicherheit und die Vernetzung von Finanzsystemen—Lektionen, die moderne Wirtschaftspolitik und Finanzaufsicht prägten.",
          nl: "De aandelenmarkt daalde 12% op Zwarte Dinsdag, waarbij de Dow Jones Industrial Average daalde van 260 naar 230 punten. Dit volgde op de 11% daling van Zwarte Donderdag vijf dagen eerder. Binnen een maand hadden investeerders $30 miljard verloren—equivalent aan meer dan $400 miljard vandaag. Tegen 1932 hadden aandelen 89% van hun waarde verloren vanaf hun piek in 1929. De crash onthulde fundamentele zwakheden: excessieve speculatie gefinancierd door margin leningen, overproductie in landbouw en industrie, vermogensongelijkheid en een overleveraged banksysteem. Velen kochten aandelen met slechts 10% aanbetaling en leenden de rest. Toen prijzen daalden, dwongen margin calls tot verkoop, wat een neerwaartse spiraal creëerde. Banken die zwaar in aandelen hadden geïnvesteerd faalden, waarbij ze de spaargelden van spaarders meenamen. Het gebrek aan deposito-verzekering betekende dat levenslange spaargelden van de ene dag op de andere verdwenen. Meer dan 9.000 banken faalden tijdens de Depressie. De crash leerde cruciale lessen over marktregulering, bankveiligheid en de onderlinge verbondenheid van financiële systemen—lessen die moderne economische politiek en financieel toezicht vormden."
        }
      },
      {
        question: {
          en: "What painting technique did Bob Ross famously use on his show?",
          es: "¿Qué técnica de pintura usó famosamente Bob Ross en su programa?",
          de: "Welche Maltechnik verwendete Bob Ross berühmt in seiner Sendung?",
          nl: "Welke schildertechniek gebruikte Bob Ross beroemd in zijn show?"
        },
        options: [
          { en: "Watercolor", es: "Acuarela", de: "Aquarell", nl: "Aquarel" },
          { en: "Wet-on-wet oil painting", es: "Pintura al óleo húmedo sobre húmedo", de: "Nass-in-Nass-Ölmalerei", nl: "Nat-in-nat olieverf" },
          { en: "Acrylic pouring", es: "Vertido acrílico", de: "Acrylgießen", nl: "Acryl gieten" },
          { en: "Fresco", es: "Fresco", de: "Fresko", nl: "Fresco" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Bob Ross used the wet-on-wet (alla prima) oil painting technique, which allowed him to complete paintings in under 30 minutes. Unlike traditional oil painting where each layer must dry before applying the next, wet-on-wet involves applying wet paint directly onto wet paint. This creates soft edges and allows colors to blend naturally on the canvas. Ross learned the technique from his mentor Bill Alexander, who had popularized it in his own PBS show. Ross's approach made landscape painting accessible to beginners—no drawing skills or long drying times needed. He used a limited palette of about 13 colors and specialized tools like palette knives and fan brushes to create mountains, trees, and water. His paintings featured peaceful natural scenes: mountain landscapes, seascapes, forests, and cabins. The technique's immediacy matched his philosophy that anyone could paint. Ross's gentle instruction style, positive affirmations, and visible process demystified art-making. Millions discovered they could create something beautiful in just 30 minutes, making Ross a democratizer of art education.",
          es: "Bob Ross usó la técnica de pintura al óleo húmedo sobre húmedo (alla prima), que le permitió completar pinturas en menos de 30 minutos. A diferencia de la pintura al óleo tradicional donde cada capa debe secarse antes de aplicar la siguiente, húmedo sobre húmedo implica aplicar pintura húmeda directamente sobre pintura húmeda. Esto crea bordes suaves y permite que los colores se mezclen naturalmente en el lienzo. Ross aprendió la técnica de su mentor Bill Alexander, quien la había popularizado en su propio programa de PBS. El enfoque de Ross hizo la pintura de paisajes accesible para principiantes: no se necesitaban habilidades de dibujo ni largos tiempos de secado. Usó una paleta limitada de unos 13 colores y herramientas especializadas como espátulas y pinceles de abanico para crear montañas, árboles y agua. Sus pinturas presentaban escenas naturales pacíficas: paisajes montañosos, marinos, bosques y cabañas. La inmediatez de la técnica coincidía con su filosofía de que cualquiera podía pintar. El estilo de instrucción gentil de Ross, las afirmaciones positivas y el proceso visible desmitificaron la creación artística. Millones descubrieron que podían crear algo hermoso en solo 30 minutos, convirtiendo a Ross en un democratizador de la educación artística.",
          de: "Bob Ross verwendete die Nass-in-Nass (Alla Prima) Ölmaltechnik, die es ihm erlaubte, Gemälde in unter 30 Minuten zu vollenden. Anders als bei traditioneller Ölmalerei, wo jede Schicht trocknen muss, bevor die nächste aufgetragen wird, beinhaltet Nass-in-Nass das direkte Auftragen nasser Farbe auf nasse Farbe. Dies erzeugt weiche Kanten und ermöglicht es Farben, natürlich auf der Leinwand zu verschmelzen. Ross lernte die Technik von seinem Mentor Bill Alexander, der sie in seiner eigenen PBS-Show popularisiert hatte. Ross' Ansatz machte Landschaftsmalerei für Anfänger zugänglich—keine Zeichenfähigkeiten oder lange Trocknungszeiten nötig. Er verwendete eine begrenzte Palette von etwa 13 Farben und spezialisierte Werkzeuge wie Palettenmesser und Fächerpinsel, um Berge, Bäume und Wasser zu schaffen. Seine Gemälde zeigten friedliche Naturszenen: Berglandschaften, Meereslandschaften, Wälder und Hütten. Die Unmittelbarkeit der Technik passte zu seiner Philosophie, dass jeder malen könne. Ross' sanfter Unterrichtsstil, positive Bestätigungen und sichtbarer Prozess entmystifizierten Kunstschaffung. Millionen entdeckten, dass sie in nur 30 Minuten etwas Schönes schaffen konnten, was Ross zu einem Demokratisierer der Kunsterziehung machte.",
          nl: "Bob Ross gebruikte de nat-in-nat (alla prima) olieverftechniek, waardoor hij schilderijen in minder dan 30 minuten kon voltooien. In tegenstelling tot traditionele olieverfkunst waar elke laag moet drogen voordat de volgende wordt aangebracht, houdt nat-in-nat in dat natte verf direct op natte verf wordt aangebracht. Dit creëert zachte randen en stelt kleuren in staat natuurlijk op het canvas te mengen. Ross leerde de techniek van zijn mentor Bill Alexander, die het had gepopulariseerd in zijn eigen PBS-show. Ross' benadering maakte landschapsschilderen toegankelijk voor beginners—geen tekenvaardigheden of lange droogtijden nodig. Hij gebruikte een beperkt palet van ongeveer 13 kleuren en gespecialiseerde gereedschappen zoals paletmessen en waaierborstels om bergen, bomen en water te creëren. Zijn schilderijen bevatten vredige natuurtaferelen: berglandschappen, zeegezichten, bossen en hutten. De directheid van de techniek paste bij zijn filosofie dat iedereen kon schilderen. Ross' zachte instructiestijl, positieve bevestigingen en zichtbare proces ontraadselden kunst maken. Miljoenen ontdekten dat ze in slechts 30 minuten iets moois konden creëren, waardoor Ross een democratiseerder van kunstonderwijs werd."
        }
      }
    ],

    // Day 30 - October 30th: War of the Worlds, Ruth Benedict, John Adams
    day30: [
      {
        question: {
          en: "On October 30, 1938, Orson Welles' radio broadcast of 'War of the Worlds' caused mass panic. What was the story about?",
          es: "El 30 de octubre de 1938, la transmisión de radio de Orson Welles de 'La Guerra de los Mundos' causó pánico masivo. ¿De qué trataba la historia?",
          de: "Am 30. Oktober 1938 verursachte Orson Welles' Radiosendung 'Krieg der Welten' Massenpanik. Worum ging es in der Geschichte?",
          nl: "Op 30 oktober 1938 veroorzaakte Orson Welles' radio-uitzending van 'De Oorlog der Werelden' massale paniek. Waar ging het verhaal over?"
        },
        options: [
          { en: "Natural disaster", es: "Desastre natural", de: "Naturkatastrophe", nl: "Natuurramp" },
          { en: "Zombie outbreak", es: "Brote de zombis", de: "Zombie-Ausbruch", nl: "Zombie-uitbraak" },
          { en: "Alien invasion from Mars", es: "Invasión alienígena de Marte", de: "Außerirdische Invasion vom Mars", nl: "Buitenaardse invasie vanaf Mars" },
          { en: "Nuclear war", es: "Guerra nuclear", de: "Atomkrieg", nl: "Nucleaire oorlog" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Orson Welles' radio adaptation of H.G. Wells' 'War of the Worlds' was presented as a series of realistic news bulletins about a Martian invasion of New Jersey. Many listeners tuned in late and believed the fictional invasion was real, causing widespread panic. The broadcast demonstrated the power of mass media and realistic storytelling.",
          es: "La adaptación radiofónica de Orson Welles de 'La Guerra de los Mundos' de H.G. Wells se presentó como una serie de boletines de noticias realistas sobre una invasión marciana de Nueva Jersey. Muchos oyentes sintonizaron tarde y creyeron que la invasión ficticia era real, causando pánico generalizado. La transmisión demostró el poder de los medios de comunicación masivos y la narración realista.",
          de: "Orson Welles' Radioadaption von H.G. Wells' 'Krieg der Welten' wurde als Serie realistischer Nachrichtenmeldungen über eine Marsinvasion in New Jersey präsentiert. Viele Zuhörer schalteten spät ein und glaubten, die fiktive Invasion sei echt, was weit verbreitete Panik auslöste. Die Sendung demonstrierte die Macht der Massenmedien und realistischen Erzählens.",
          nl: "Orson Welles' radioadaptatie van H.G. Wells' 'De Oorlog der Werelden' werd gepresenteerd als een reeks realistische nieuwsberichten over een Marsinvasie in New Jersey. Veel luisteraars stemden laat af en geloofden dat de fictieve invasie echt was, wat wijdverbreide paniek veroorzaakte. De uitzending toonde de kracht van massamedia en realistische verhalen aan."
        }
      },
      {
        question: {
          en: "Which famous anthropologist, known for 'Patterns of Culture,' was born on October 30, 1887?",
          es: "¿Qué famosa antropóloga, conocida por 'Patrones de Cultura,' nació el 30 de octubre de 1887?",
          de: "Welche berühmte Anthropologin, bekannt für 'Urformen der Kultur,' wurde am 30. Oktober 1887 geboren?",
          nl: "Welke beroemde antropoloog, bekend om 'Patronen van Cultuur,' werd geboren op 30 oktober 1887?"
        },
        options: [
          { en: "Margaret Mead", es: "Margaret Mead", de: "Margaret Mead", nl: "Margaret Mead" },
          { en: "Ruth Benedict", es: "Ruth Benedict", de: "Ruth Benedict", nl: "Ruth Benedict" },
          { en: "Zora Neale Hurston", es: "Zora Neale Hurston", de: "Zora Neale Hurston", nl: "Zora Neale Hurston" },
          { en: "Franz Boas", es: "Franz Boas", de: "Franz Boas", nl: "Franz Boas" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Ruth Benedict was a pioneering American anthropologist born on October 30, 1887. Her influential book 'Patterns of Culture' (1934) argued that cultures are coherent patterns shaped by different themes and values. She challenged racial determinism and helped establish cultural anthropology as a respected field of study.",
          es: "Ruth Benedict fue una antropóloga estadounidense pionera nacida el 30 de octubre de 1887. Su influyente libro 'Patrones de Cultura' (1934) argumentó que las culturas son patrones coherentes moldeados por diferentes temas y valores. Desafió el determinismo racial y ayudó a establecer la antropología cultural como un campo de estudio respetado.",
          de: "Ruth Benedict war eine wegweisende amerikanische Anthropologin, geboren am 30. Oktober 1887. Ihr einflussreiches Buch 'Urformen der Kultur' (1934) argumentierte, dass Kulturen kohärente Muster sind, die von verschiedenen Themen und Werten geprägt werden. Sie stellte den Rassendeterminismus in Frage und half, die Kulturanthropologie als respektiertes Studienfeld zu etablieren.",
          nl: "Ruth Benedict was een baanbrekende Amerikaanse antropoloog geboren op 30 oktober 1887. Haar invloedrijke boek 'Patronen van Cultuur' (1934) betoogde dat culturen coherente patronen zijn gevormd door verschillende thema's en waarden. Ze daagde raciale determinisme uit en hielp culturele antropologie te vestigen als een gerespecteerd studiegebied."
        }
      },
      {
        question: {
          en: "John Adams, the second U.S. President, was born on October 30, 1735. Which Founding Father was his cousin?",
          es: "John Adams, el segundo presidente de EE.UU., nació el 30 de octubre de 1735. ¿Qué Padre Fundador era su primo?",
          de: "John Adams, der zweite US-Präsident, wurde am 30. Oktober 1735 geboren. Welcher Gründungsvater war sein Cousin?",
          nl: "John Adams, de tweede Amerikaanse president, werd geboren op 30 oktober 1735. Welke Founding Father was zijn neef?"
        },
        options: [
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "Samuel Adams", es: "Samuel Adams", de: "Samuel Adams", nl: "Samuel Adams" },
          { en: "George Washington", es: "George Washington", de: "George Washington", nl: "George Washington" }
        ],
        correctIndex: 2,
        explanation: {
          en: "John Adams' second cousin was Samuel Adams, a fellow revolutionary leader and Founding Father. Both played crucial roles in American independence. John Adams served as the second U.S. President (1797-1801) and was a diplomat, lawyer, and key advocate for independence. He was also the father of John Quincy Adams, the sixth president.",
          es: "El primo segundo de John Adams era Samuel Adams, un compañero líder revolucionario y Padre Fundador. Ambos jugaron papeles cruciales en la independencia estadounidense. John Adams sirvió como segundo presidente de EE.UU. (1797-1801) y fue diplomático, abogado y defensor clave de la independencia. También fue el padre de John Quincy Adams, el sexto presidente.",
          de: "John Adams' Cousin zweiten Grades war Samuel Adams, ein revolutionärer Anführer und Gründungsvater. Beide spielten entscheidende Rollen in der amerikanischen Unabhängigkeit. John Adams diente als zweiter US-Präsident (1797-1801) und war Diplomat, Anwalt und wichtiger Befürworter der Unabhängigkeit. Er war auch der Vater von John Quincy Adams, dem sechsten Präsidenten.",
          nl: "John Adams' achterneef was Samuel Adams, een medeleider van de revolutie en Founding Father. Beiden speelden cruciale rollen in de Amerikaanse onafhankelijkheid. John Adams diende als de tweede Amerikaanse president (1797-1801) en was een diplomaat, advocaat en belangrijke pleitbezorger voor onafhankelijkheid. Hij was ook de vader van John Quincy Adams, de zesde president."
        }
      },
      {
        question: {
          en: "What medium made Orson Welles' 'War of the Worlds' particularly effective in causing panic?",
          es: "¿Qué medio hizo que 'La Guerra de los Mundos' de Orson Welles fuera particularmente efectiva para causar pánico?",
          de: "Welches Medium machte Orson Welles' 'Krieg der Welten' besonders wirksam beim Auslösen von Panik?",
          nl: "Welk medium maakte Orson Welles' 'Oorlog der Werelden' bijzonder effectief in het veroorzaken van paniek?"
        },
        options: [
          { en: "Radio news bulletin format", es: "Formato de boletín de noticias de radio", de: "Radio-Nachrichtenbulletin-Format", nl: "Radio nieuwsbulletin formaat" },
          { en: "Movie theaters", es: "Cines", de: "Kinos", nl: "Bioscopen" },
          { en: "Television broadcast", es: "Transmisión televisiva", de: "Fernsehsendung", nl: "Televisie-uitzending" },
          { en: "Newspaper articles", es: "Artículos de periódico", de: "Zeitungsartikel", nl: "Krantenartikelen" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The broadcast used the trusted format of breaking news bulletins with 'on-the-scene' reports and expert interviews, making the fictional invasion seem real. In 1938, radio was the primary news source for millions, and people had learned to trust its news broadcasts. The realistic format, combined with authentic-sounding details and dramatic interruptions, created convincing verisimilitude.",
          es: "La transmisión utilizó el formato confiable de boletines de noticias de última hora con informes 'en el lugar' y entrevistas con expertos, haciendo que la invasión ficticia pareciera real. En 1938, la radio era la fuente principal de noticias para millones, y la gente había aprendido a confiar en sus transmisiones de noticias. El formato realista, combinado con detalles que sonaban auténticos e interrupciones dramáticas, creó una verosimilitud convincente.",
          de: "Die Sendung verwendete das vertrauenswürdige Format von eiligen Nachrichtenmeldungen mit 'Vor-Ort'-Berichten und Experteninterviews, was die fiktive Invasion real erscheinen ließ. 1938 war Radio die primäre Nachrichtenquelle für Millionen, und die Menschen hatten gelernt, seinen Nachrichtensendungen zu vertrauen. Das realistische Format, kombiniert mit authentisch klingenden Details und dramatischen Unterbrechungen, schuf überzeugende Glaubwürdigkeit.",
          nl: "De uitzending gebruikte het vertrouwde formaat van nieuwsflitsen met 'ter plaatse'-rapporten en expertinterviews, waardoor de fictieve invasie echt leek. In 1938 was radio de primaire nieuwsbron voor miljoenen, en mensen hadden geleerd hun nieuwsuitzendingen te vertrouwen. Het realistische formaat, gecombineerd met authentiek klinkende details en dramatische onderbrekingen, creëerde overtuigende waarheidsgetrouwheid."
        }
      },
      {
        question: {
          en: "What lasting impact did the 'War of the Worlds' broadcast have on media?",
          es: "¿Qué impacto duradero tuvo la transmisión de 'La Guerra de los Mundos' en los medios?",
          de: "Welchen bleibenden Einfluss hatte die Sendung 'Krieg der Welten' auf die Medien?",
          nl: "Welke blijvende impact had de 'Oorlog der Werelden'-uitzending op media?"
        },
        options: [
          { en: "Radio was banned for one year", es: "La radio fue prohibida por un año", de: "Radio wurde für ein Jahr verboten", nl: "Radio werd voor een jaar verboden" },
          { en: "Orson Welles was imprisoned", es: "Orson Welles fue encarcelado", de: "Orson Welles wurde inhaftiert", nl: "Orson Welles werd gevangen gezet" },
          { en: "Fiction was no longer allowed on radio", es: "La ficción ya no se permitía en la radio", de: "Fiktion war nicht mehr im Radio erlaubt", nl: "Fictie was niet langer toegestaan op radio" },
          { en: "Increased awareness of media's power and responsibility", es: "Mayor conciencia del poder y responsabilidad de los medios", de: "Erhöhtes Bewusstsein für Macht und Verantwortung der Medien", nl: "Toegenomen bewustzijn van media's macht en verantwoordelijkheid" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The incident sparked important discussions about media ethics, the responsibility of broadcasters, and the need for clear distinctions between news and entertainment. It demonstrated how powerful and influential mass media could be, lessons that remain relevant today with social media and online information. The broadcast became a landmark case study in communication and psychology.",
          es: "El incidente provocó importantes discusiones sobre la ética de los medios, la responsabilidad de los transmisores y la necesidad de distinciones claras entre noticias y entretenimiento. Demostró cuán poderosos e influyentes podrían ser los medios de comunicación masivos, lecciones que siguen siendo relevantes hoy con las redes sociales y la información en línea. La transmisión se convirtió en un estudio de caso histórico en comunicación y psicología.",
          de: "Der Vorfall löste wichtige Diskussionen über Medienethik, die Verantwortung von Rundfunkanstalten und die Notwendigkeit klarer Unterscheidungen zwischen Nachrichten und Unterhaltung aus. Es demonstrierte, wie mächtig und einflussreich Massenmedien sein können, Lektionen, die heute mit sozialen Medien und Online-Informationen relevant bleiben. Die Sendung wurde zu einer wegweisenden Fallstudie in Kommunikation und Psychologie.",
          nl: "Het incident leidde tot belangrijke discussies over media-ethiek, de verantwoordelijkheid van omroepen en de noodzaak van duidelijke onderscheidingen tussen nieuws en entertainment. Het toonde aan hoe krachtig en invloedrijk massamedia kunnen zijn, lessen die vandaag de dag relevant blijven met sociale media en online informatie. De uitzending werd een historische casestudy in communicatie en psychologie."
        }
      }
    ],

    // Day 31 - October 31st: Halloween, Martin Luther's 95 Theses, Houdini, Nevada
    day31: [
      {
        question: {
          en: "On October 31, 1517, Martin Luther nailed his 95 Theses to a church door, sparking which major movement?",
          es: "El 31 de octubre de 1517, Martín Lutero clavó sus 95 Tesis en la puerta de una iglesia, iniciando qué movimiento importante?",
          de: "Am 31. Oktober 1517 nagelte Martin Luther seine 95 Thesen an eine Kirchentür und löste welche große Bewegung aus?",
          nl: "Op 31 oktober 1517 spijkerde Maarten Luther zijn 95 stellingen aan een kerkdeur, wat welke grote beweging in gang zette?"
        },
        options: [
          { en: "The Renaissance", es: "El Renacimiento", de: "Die Renaissance", nl: "De Renaissance" },
          { en: "The Protestant Reformation", es: "La Reforma Protestante", de: "Die Reformation", nl: "De Protestantse Reformatie" },
          { en: "The Enlightenment", es: "La Ilustración", de: "Die Aufklärung", nl: "De Verlichting" },
          { en: "The Industrial Revolution", es: "La Revolución Industrial", de: "Die Industrielle Revolution", nl: "De Industriële Revolutie" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Martin Luther's 95 Theses challenged the Catholic Church's practice of selling indulgences and sparked the Protestant Reformation. Posted on the door of the Castle Church in Wittenberg, Germany, these theses questioned church authority and doctrine, leading to major religious and political changes across Europe. This event fundamentally altered Christianity and Western civilization.",
          es: "Las 95 Tesis de Martín Lutero desafiaron la práctica de la Iglesia Católica de vender indulgencias e iniciaron la Reforma Protestante. Publicadas en la puerta de la Iglesia del Castillo en Wittenberg, Alemania, estas tesis cuestionaron la autoridad y doctrina de la iglesia, llevando a cambios religiosos y políticos importantes en toda Europa. Este evento alteró fundamentalmente el cristianismo y la civilización occidental.",
          de: "Martin Luthers 95 Thesen stellten die Praxis der katholischen Kirche, Ablassbriefe zu verkaufen, in Frage und lösten die Reformation aus. An die Tür der Schlosskirche in Wittenberg, Deutschland, genagelt, hinterfragten diese Thesen die Autorität und Lehre der Kirche und führten zu großen religiösen und politischen Veränderungen in ganz Europa. Dieses Ereignis veränderte das Christentum und die westliche Zivilisation grundlegend.",
          nl: "Maarten Luthers 95 stellingen daagden de praktijk van de Katholieke Kerk uit om aflaten te verkopen en zetten de Protestantse Reformatie in gang. Aangeplakt op de deur van de Slotkerk in Wittenberg, Duitsland, stelden deze stellingen kerkelijke autoriteit en doctrine ter discussie, wat leidde tot grote religieuze en politieke veranderingen in heel Europa. Deze gebeurtenis veranderde het christendom en de westerse beschaving fundamenteel."
        }
      },
      {
        question: {
          en: "Famous magician and escape artist Harry Houdini died on October 31, 1926. What was he best known for?",
          es: "El famoso mago y artista del escape Harry Houdini murió el 31 de octubre de 1926. ¿Por qué era más conocido?",
          de: "Der berühmte Zauberer und Entfesselungskünstler Harry Houdini starb am 31. Oktober 1926. Wofür war er am bekanntesten?",
          nl: "Beroemd goochelaar en ontsnappingskunstenaar Harry Houdini stierf op 31 oktober 1926. Waar was hij het meest bekend om?"
        },
        options: [
          { en: "Card tricks", es: "Trucos de cartas", de: "Kartentricks", nl: "Kaarttrucs" },
          { en: "Daring escapes from restraints", es: "Escapadas audaces de restricciones", de: "Waghalsige Entfesselungen", nl: "Gedurfde ontsnappingen uit boeien" },
          { en: "Flying illusions", es: "Ilusiones de vuelo", de: "Flugillusi onen", nl: "Vliegillusies" },
          { en: "Mind reading", es: "Lectura mental", de: "Gedankenlesen", nl: "Gedachten lezen" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Harry Houdini was renowned for his sensational escape acts, including escaping from handcuffs, straitjackets, and locked containers underwater. His most famous stunts included the Chinese Water Torture Cell and being buried alive. Houdini also campaigned against fraudulent spiritualists and mediums. He died of peritonitis from a ruptured appendix on Halloween, adding to his mystique.",
          es: "Harry Houdini era famoso por sus sensacionales actos de escape, incluyendo escapar de esposas, camisas de fuerza y contenedores cerrados bajo el agua. Sus trucos más famosos incluyeron la Celda de Tortura de Agua China y ser enterrado vivo. Houdini también hizo campaña contra espiritistas y médiums fraudulentos. Murió de peritonitis por apendicitis en Halloween, añadiendo a su mística.",
          de: "Harry Houdini war berühmt für seine sensationellen Entfesselungsnummern, einschließlich Entkommen aus Handschellen, Zwangsjacken und verschlossenen Behältern unter Wasser. Seine berühmtesten Kunststücke waren die Chinesische Wasserfolterzelle und lebendig begraben zu werden. Houdini kämpfte auch gegen betrügerische Spiritisten und Medien. Er starb an Peritonitis durch einen geplatzten Blinddarm an Halloween, was zu seiner Mystik beitrug.",
          nl: "Harry Houdini stond bekend om zijn sensationele ontsnappingsnummers, waaronder ontsnappen uit handboeien, dwangbuizen en afgesloten containers onder water. Zijn beroemdste stunts omvatten de Chinese Waterfoltercel en levend begraven worden. Houdini voerde ook campagne tegen frauduleuze spiritisten en mediums. Hij stierf aan buikvliesontsteking door een gebarsten blindedarm op Halloween, wat zijn mystiek vergrootte."
        }
      },
      {
        question: {
          en: "Nevada became the 36th U.S. state on October 31, 1864. During which war did it achieve statehood?",
          es: "Nevada se convirtió en el estado número 36 de EE.UU. el 31 de octubre de 1864. ¿Durante qué guerra logró la condición de estado?",
          de: "Nevada wurde am 31. Oktober 1864 der 36. US-Bundesstaat. Während welches Krieges erlangte es die Eigenstaatlichkeit?",
          nl: "Nevada werd op 31 oktober 1864 de 36e Amerikaanse staat. Tijdens welke oorlog werd het een staat?"
        },
        options: [
          { en: "Revolutionary War", es: "Guerra Revolucionaria", de: "Unabhängigkeitskrieg", nl: "Revolutionaire Oorlog" },
          { en: "Civil War", es: "Guerra Civil", de: "Bürgerkrieg", nl: "Burgeroorlog" },
          { en: "World War I", es: "Primera Guerra Mundial", de: "Erster Weltkrieg", nl: "Eerste Wereldoorlog" },
          { en: "Mexican-American War", es: "Guerra México-Americana", de: "Mexikanisch-Amerikanischer Krieg", nl: "Mexicaans-Amerikaanse Oorlog" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Nevada was rushed to statehood during the American Civil War, just eight days before the 1864 presidential election. President Lincoln wanted Nevada's support for his reelection and for the proposed 13th Amendment to abolish slavery. The entire state constitution was telegraphed to Washington D.C., the longest and most expensive telegram ever sent at that time. Nevada is nicknamed the 'Battle Born' state.",
          es: "Nevada fue apresurada a la condición de estado durante la Guerra Civil Estadounidense, solo ocho días antes de las elecciones presidenciales de 1864. El presidente Lincoln quería el apoyo de Nevada para su reelección y para la propuesta 13ª Enmienda para abolir la esclavitud. Toda la constitución estatal fue telegrafiada a Washington D.C., el telegrama más largo y caro jamás enviado en ese momento. Nevada es apodada el estado 'Nacido en Batalla'.",
          de: "Nevada wurde während des Amerikanischen Bürgerkriegs zur Eigenstaatlichkeit gedrängt, nur acht Tage vor den Präsidentschaftswahlen von 1864. Präsident Lincoln wollte Nevadas Unterstützung für seine Wiederwahl und für den vorgeschlagenen 13. Zusatzartikel zur Abschaffung der Sklaverei. Die gesamte Staatsverfassung wurde nach Washington D.C. telegrafiert, das längste und teuerste Telegramm, das jemals zu dieser Zeit gesendet wurde. Nevada wird der 'Im Kampf Geboren'-Staat genannt.",
          nl: "Nevada werd gehaast tot staat tijdens de Amerikaanse Burgeroorlog, slechts acht dagen voor de presidentsverkiezingen van 1864. President Lincoln wilde Nevada's steun voor zijn herverkiezing en voor het voorgestelde 13e Amendement om slavernij af te schaffen. De hele staatsgrondwet werd getelegrafeerd naar Washington D.C., het langste en duurste telegram dat ooit op dat moment werd verzonden. Nevada wordt de 'Battle Born' staat genoemd."
        }
      },
      {
        question: {
          en: "Halloween originated from which ancient Celtic festival?",
          es: "Halloween se originó de qué festival celta antiguo?",
          de: "Halloween stammt von welchem alten keltischen Fest?",
          nl: "Halloween is ontstaan uit welk oud Keltisch festival?"
        },
        options: [
          { en: "Beltane", es: "Beltane", de: "Beltane", nl: "Beltane" },
          { en: "Samhain", es: "Samhain", de: "Samhain", nl: "Samhain" },
          { en: "Lughnasadh", es: "Lughnasadh", de: "Lughnasadh", nl: "Lughnasadh" },
          { en: "Imbolc", es: "Imbolc", de: "Imbolc", nl: "Imbolc" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Halloween evolved from Samhain (pronounced 'sow-in'), an ancient Celtic festival marking the end of harvest and beginning of winter. Celts believed the boundary between living and dead became blurred on this night. People wore costumes to ward off ghosts and lit bonfires. When Christianity spread, the holiday merged with All Saints' Day (November 1), becoming All Hallows' Eve, later shortened to Halloween.",
          es: "Halloween evolucionó de Samhain (pronunciado 'sow-in'), un antiguo festival celta que marcaba el fin de la cosecha y el comienzo del invierno. Los celtas creían que la frontera entre vivos y muertos se difuminaba en esta noche. La gente usaba disfraces para ahuyentar fantasmas y encendía hogueras. Cuando el cristianismo se extendió, la festividad se fusionó con el Día de Todos los Santos (1 de noviembre), convirtiéndose en Víspera de Todos los Santos, más tarde abreviada como Halloween.",
          de: "Halloween entwickelte sich aus Samhain (ausgesprochen 'sow-in'), einem alten keltischen Fest, das das Ende der Ernte und den Beginn des Winters markierte. Die Kelten glaubten, dass die Grenze zwischen Lebenden und Toten in dieser Nacht verschwamm. Menschen trugen Kostüme, um Geister abzuwehren, und entzündeten Feuer. Als sich das Christentum ausbreitete, verschmolz der Feiertag mit Allerheiligen (1. November) und wurde zu Allerheiligenabend, später zu Halloween verkürzt.",
          nl: "Halloween evolueerde uit Samhain (uitgesproken als 'sow-in'), een oud Keltisch festival dat het einde van de oogst en het begin van de winter markeerde. Kelten geloofden dat de grens tussen levenden en doden op deze nacht vervaagde. Mensen droegen kostuums om geesten af te weren en staken vreugdevuren aan. Toen het christendom zich verspreidde, versmolt de feestdag met Allerheiligen (1 november) en werd Allerheiligenavond, later verkort tot Halloween."
        }
      },
      {
        question: {
          en: "What is Nevada's nickname that reflects its Civil War-era admission?",
          es: "¿Cuál es el apodo de Nevada que refleja su admisión en la era de la Guerra Civil?",
          de: "Was ist Nevadas Spitzname, der seine Aufnahme in der Bürgerkriegszeit widerspiegelt?",
          nl: "Wat is Nevada's bijnaam die zijn toelating in het tijdperk van de Burgeroorlog weerspiegelt?"
        },
        options: [
          { en: "The Silver State", es: "El Estado de Plata", de: "Der Silberstaat", nl: "De Zilverstaat" },
          { en: "Battle Born", es: "Nacido en Batalla", de: "Im Kampf Geboren", nl: "Battle Born" },
          { en: "The Mining State", es: "El Estado Minero", de: "Der Bergbaustaat", nl: "De Mijnbouwstaat" },
          { en: "The Desert State", es: "El Estado del Desierto", de: "Der Wüstenstaat", nl: "De Woestijnstaat" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'Battle Born' is Nevada's official state motto, appearing on its flag and license plates. The nickname commemorates Nevada's admission during the Civil War and its role in supporting the Union cause. Nevada also uses 'The Silver State' as a nickname, referencing its rich silver mining history, particularly the famous Comstock Lode discovery in 1859 which accelerated the territory's development and path to statehood.",
          es: "'Nacido en Batalla' es el lema oficial del estado de Nevada, que aparece en su bandera y placas de matrícula. El apodo conmemora la admisión de Nevada durante la Guerra Civil y su papel en el apoyo a la causa de la Unión. Nevada también usa 'El Estado de Plata' como apodo, haciendo referencia a su rica historia minera de plata, particularmente el famoso descubrimiento del Comstock Lode en 1859 que aceleró el desarrollo del territorio y el camino hacia la estadidad.",
          de: "'Im Kampf Geboren' ist Nevadas offizielles Staatsmotto, das auf seiner Flagge und seinen Nummernschildern erscheint. Der Spitzname gedenkt Nevadas Aufnahme während des Bürgerkriegs und seiner Rolle bei der Unterstützung der Unionssache. Nevada verwendet auch 'Der Silberstaat' als Spitznamen, der auf seine reiche Silberbergbaugeschichte verweist, insbesondere die berühmte Comstock Lode-Entdeckung von 1859, die die Entwicklung des Territoriums und den Weg zur Eigenstaatlichkeit beschleunigte.",
          nl: "'Battle Born' is Nevada's officiële staatsmotto, dat verschijnt op de vlag en kentekenplaten. De bijnaam herdenkt Nevada's toelating tijdens de Burgeroorlog en zijn rol in het ondersteunen van de Unie. Nevada gebruikt ook 'De Zilverstaat' als bijnaam, verwijzend naar zijn rijke zilverwinningsgeschiedenis, met name de beroemde Comstock Lode-ontdekking in 1859 die de ontwikkeling van het territorium en het pad naar staatszijn versnelde."
        }
      }
    ]
  };

  // Export October challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('october', octoberChallenges);
  }

})();